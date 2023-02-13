package com.github.xpenatan.gdx.backends.teavm;

import com.badlogic.gdx.files.FileHandle;
import com.github.xpenatan.gdx.backends.teavm.gen.SkipClass;
import com.github.xpenatan.gdx.backends.teavm.plugins.TeaClassTransformer;
import com.github.xpenatan.gdx.backends.teavm.plugins.TeaReflectionSupplier;
import com.github.xpenatan.gdx.backends.teavm.preloader.AssetFilter;
import com.github.xpenatan.gdx.backends.teavm.preloader.AssetsCopy;
import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.stream.Stream;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;
import org.reflections.Reflections;
import org.teavm.diagnostics.DefaultProblemTextConsumer;
import org.teavm.diagnostics.Problem;
import org.teavm.diagnostics.ProblemProvider;
import org.teavm.model.CallLocation;
import org.teavm.model.MethodReference;
import org.teavm.model.TextLocation;
import org.teavm.tooling.TeaVMTargetType;
import org.teavm.tooling.TeaVMTool;
import org.teavm.vm.TeaVMOptimizationLevel;
import org.teavm.vm.TeaVMPhase;
import org.teavm.vm.TeaVMProgressFeedback;
import org.teavm.vm.TeaVMProgressListener;

/**
 * @author xpenatan
 */
public class TeaBuilder {

    public static void log(String msg) {
        String text = "| " + msg;
        logInternalNewLine(text);
    }

    public static void logInternal(String msg) {
        System.err.print(msg);
    }

    public static void logInternalNewLine(String msg) {
        logInternal(msg + "\n");
    }

    public static void logHeader(String text) {
        String msg = "";
        msg += "#################################################################\n";
        msg += "|\n| " + text + "\n|";
        msg += "\n" + "#################################################################";

        logInternalNewLine(msg);
    }

    public static void logEnd() {
        String msg = "\n#################################################################";
        logInternalNewLine(msg);
    }

    enum ACCEPT_STATE {
        ACCEPT, NOT_ACCEPT, NO_MATCH
    }

    public interface TeaProgressListener {
        void onProgress(float progress);
    }

    private static final String EXTENSION_FREETYPE = "gdx-freetype-teavm";
    private static final String EXTENSION_BULLET = "gdx-bullet-teavm";
    private static final String EXTENSION_BOX2D = "gdx-box2d-teavm";
    private static final String EXTENSION_BOX2D_GWT = "gdx-box2d-gwt";
    private static final String EXTENSION_IMGUI = "imgui-core-teavm";

    public static TeaVMTool config(TeaBuildConfiguration configuration) {
        TeaVMTool tool = new TeaVMTool();
        return config(tool, configuration, null);
    }

    public static TeaVMTool config(TeaBuildConfiguration configuration, TeaProgressListener progressListener) {
        TeaVMTool tool = new TeaVMTool();
        return config(tool, configuration, progressListener);
    }

    public static TeaVMTool config(TeaVMTool tool, TeaBuildConfiguration configuration) {
        return config(tool, configuration);
    }

    public static TeaVMTool config(TeaVMTool tool, TeaBuildConfiguration configuration, TeaProgressListener progressListener) {
        ArrayList<URL> acceptedURL = new ArrayList<>();
        ArrayList<URL> notAcceptedURL = new ArrayList<>();
        String webappDirectory = configuration.getWebAppPath();
        String webappName = "webapp";

        addDefaultReflectionClasses();
        automaticReflection(configuration);
        configClasspath(configuration, acceptedURL, notAcceptedURL);

        TeaBuilder.log("");
        TeaBuilder.log("targetDirectory: " + webappDirectory);
        TeaBuilder.log("");

        URL[] classPaths = acceptedURL.toArray(new URL[acceptedURL.size()]);

        Reflections reflections = new Reflections();
        Set<Class<?>> typesAnnotatedWith = reflections.getTypesAnnotatedWith(SkipClass.class);

        ArrayList<String> skipClasses = new ArrayList<>();
        Iterator<Class<?>> iterator = typesAnnotatedWith.stream().iterator();
        while(iterator.hasNext()) {
            Class<?> skipClass = iterator.next();
            skipClasses.add(skipClass.getName());
        }
        skipClasses.addAll(configuration.getSkipClasses());
        TeaClassLoader classLoader = new TeaClassLoader(classPaths, TeaBuilder.class.getClassLoader(), skipClasses);

        configTool(tool, classLoader, configuration, webappDirectory, webappName, progressListener);
        configAssets(classLoader, configuration, webappDirectory, webappName);

        return tool;
    }

    public static boolean build(TeaVMTool tool) {
        return build(tool, false);
    }

    public static boolean build(TeaVMTool tool, boolean logClassNames) {
        boolean isSuccess = false;
        try {
            long timeStart = new Date().getTime();
            tool.generate();
            long timeEnd = new Date().getTime();
            float seconds = (timeEnd - timeStart) / 1000f;
            ProblemProvider problemProvider = tool.getProblemProvider();
            Collection<String> classes = tool.getClasses();
            List<Problem> problems = problemProvider.getProblems();
            if(problems.size() > 0) {
                TeaBuilder.logHeader("Compiler problems");

                DefaultProblemTextConsumer p = new DefaultProblemTextConsumer();

                for(int i = 0; i < problems.size(); i++) {
                    Problem problem = problems.get(i);
                    CallLocation location = problem.getLocation();
                    MethodReference method = location != null ? location.getMethod() : null;
                    String classSource = "-";
                    String methodName = "-";

                    if(location != null) {
                        TextLocation sourceLocation = location.getSourceLocation();
                        if(sourceLocation != null)
                            classSource = sourceLocation.toString();
                        if(method != null) {
                            methodName = method.toString();
                        }
                    }

                    if(i > 0) {
                        TeaBuilder.log("");
                        TeaBuilder.log("----");
                        TeaBuilder.log("");
                    }
                    TeaBuilder.log(problem.getSeverity().toString() + "[" + i + "]");
                    TeaBuilder.log("Class: " + classSource);
                    TeaBuilder.log("Method: " + methodName);
                    p.clear();
                    problem.render(p);
                    String text = p.getText();
                    TeaBuilder.log("Text: " + text);
                }
                TeaBuilder.logEnd();
            }
            else {
                isSuccess = true;
                TeaBuilder.logHeader("Build complete in " + seconds + " seconds. Total Classes: " + classes.size());
            }

            if(logClassNames) {
                Stream<String> sorted = classes.stream().sorted();
                Iterator<String> iterator = sorted.iterator();
                while(iterator.hasNext()) {
                    String clazz = iterator.next();
                    TeaBuilder.log(clazz);
                }
            }
        }
        catch(Throwable e) {
            e.printStackTrace();
            return false;
        }
        return isSuccess;
    }

    private static void preserveClasses(TeaVMTool tool, TeaBuildConfiguration configuration, TeaClassLoader classLoader) {
        //Keep reflection classes
        List<String> classesToPreserve = tool.getClassesToPreserve();
        ArrayList<String> configClassesToPreserve = configuration.getClassesToPreserve();
        List<String> reflectionClasses = TeaReflectionSupplier.getReflectionClasses();
        configClassesToPreserve.addAll(reflectionClasses);
        ArrayList<String> preserveClasses = classLoader.getPreserveClasses(configClassesToPreserve);
        classesToPreserve.addAll(preserveClasses);
    }

    private static void sortAcceptedClassPath(ArrayList<URL> acceptedURL) {
        // The idea here is to replace native java classes with the emulated java class.
        // 0 - TeaVM backend - Contains all teavm api stuff to make it work.
        // 1 - Extensions - Emulate native extension classes

        // TODO make a better sort. Lazy to do it now
        // Move extensions to be first so native classes are replaced by the emulated classes
        makeClassPathFirst(acceptedURL, EXTENSION_FREETYPE);
        makeClassPathFirst(acceptedURL, EXTENSION_BULLET);
        makeClassPathFirst(acceptedURL, EXTENSION_BOX2D);
        makeClassPathFirst(acceptedURL, EXTENSION_IMGUI);
        // Move generic backend to be first
        makeClassPathFirst(acceptedURL, "backend-teavm");
    }

    private static void makeClassPathFirst(ArrayList<URL> acceptedURL, String module) {
        for(int i = 0; i < acceptedURL.size(); i++) {
            URL url = acceptedURL.get(i);
            String string = url.toString();
            if(string.contains(module)) {
                acceptedURL.remove(i);
                acceptedURL.add(0, url);
                break;
            }
        }
    }

    private static void automaticReflection(TeaBuildConfiguration configuration) {
        for(URL classPath : configuration.getAdditionalClasspath()) {
            try {
                ZipInputStream zip = new ZipInputStream(classPath.openStream());
                TeaBuilder.logHeader("Automatic Reflection Include");
                for(ZipEntry entry = zip.getNextEntry(); entry != null; entry = zip.getNextEntry()) {
                    if(!entry.isDirectory() && entry.getName().endsWith(".class")) {
                        // This ZipEntry represents a class. Now, what class does it represent?
                        String className = entry.getName().replace('/', '.'); // including ".class"
                        String name = className.substring(0, className.length() - ".class".length());
                        boolean add = false;
                        for(String toInclude : configuration.getReflectionInclude()) {
                            if(name.startsWith(toInclude)) add = true;
                        }
                        for(String toExclude : configuration.getReflectionExclude()) {
                            if(name.startsWith(toExclude)) add = false;
                        }

                        if(add) {
                            TeaBuilder.log("Include class: " + name);
                            TeaReflectionSupplier.addReflectionClass(name);
                        }
                    }
                }
            }
            catch(IOException e) {
                e.printStackTrace();
            }
        }
    }

    private static void addDefaultReflectionClasses() {
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.scenes.scene2d");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.math");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.graphics.g2d.GlyphLayout");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.graphics.g2d.TextureRegion");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.graphics.g2d.Sprite");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.graphics.g2d.BitmapFont");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.graphics.g2d.NinePatch");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.graphics.g2d.TextureAtlas.AtlasRegion");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.graphics.g3d.materials.MaterialAttribute");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.graphics.Color");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.graphics.Texture");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.utils.Array");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.utils.Disposable");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.utils.Json");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.utils.ObjectMap");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.utils.OrderedMap");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.utils.Queue");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.graphics.VertexAttribute");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.graphics.g3d.model");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.Net");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.maps.MapObject");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.maps.objects");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.maps.tiled.objects");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.graphics.g3d.particles.ParticleEffect");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.graphics.g3d.particles.ParticleController");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.graphics.g3d.particles.ResourceData");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.graphics.g3d.particles.ResourceData.SaveData");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.graphics.g3d.particles.ResourceData.AssetData");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.graphics.g3d.particles.ParallelArray");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.graphics.g3d.particles.values");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.graphics.g3d.particles.emitters");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.graphics.g3d.particles.influencers");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.graphics.g3d.particles.renderers");
        TeaReflectionSupplier.addReflectionClass("com.badlogic.gdx.math.Interpolation");
        TeaReflectionSupplier.addReflectionClass("net.mgsx.gltf.data");
    }

    private static void configClasspath(TeaBuildConfiguration configuration, ArrayList<URL> acceptedURL, ArrayList<URL> notAcceptedURL) {
        String pathSeparator = System.getProperty("path.separator");
        String[] classPathEntries = System.getProperty("java.class.path").split(pathSeparator);
        for(int i = 0; i < classPathEntries.length; i++) {
            String path = classPathEntries[i];
            File file = new File(path);
            path = path.replace("\\", "/");
            URL url = null;
            try {
                url = file.toURI().toURL();
            }
            catch(MalformedURLException e) {
                e.printStackTrace();
            }
            ACCEPT_STATE acceptState = acceptPath(path);
            boolean accept = acceptState == ACCEPT_STATE.ACCEPT;
            if(accept || acceptState == ACCEPT_STATE.NO_MATCH)
                accept = configuration.acceptClasspath(url);

            if(accept)
                acceptedURL.add(url);
            else
                notAcceptedURL.add(url);
        }
        acceptedURL.addAll(configuration.getAdditionalClasspath());

        sortAcceptedClassPath(acceptedURL);

        TeaBuilder.logHeader("ACCEPTED CLASSPATH");
        for(int i = 0; i < acceptedURL.size(); i++) {
            TeaBuilder.log(i + " true: " + acceptedURL.get(i).getPath());
        }

        TeaBuilder.logHeader("IGNORED CLASSPATH");

        for(int i = 0; i < notAcceptedURL.size(); i++) {
            TeaBuilder.log(i + " false: " + notAcceptedURL.get(i).getPath());
        }

        int size = acceptedURL.size();

        if(size <= 0) {
            System.err.println("No urls found");
            throw new RuntimeException("No Urls Found");
        }
    }

    private static void assetsDefaultClasspath(ArrayList<String> filePath) {
        filePath.add("com/badlogic/gdx/graphics/g3d/particles/");
        filePath.add("com/badlogic/gdx/graphics/g3d/shaders/");
        filePath.add("com/badlogic/gdx/utils/arial-15.fnt"); // Cannot be utils folder for now because its trying to copy from emu folder and not core gdx classpath
        filePath.add("com/badlogic/gdx/utils/arial-15.png");

        filePath.add("com/badlogic/gdx/utils/lsans-15.fnt");
        filePath.add("com/badlogic/gdx/utils/lsans-15.png");

        filePath.add("net/mgsx/gltf/shaders/brdfLUT.png");
        filePath.add("net/mgsx/gltf/shaders/default.fs.glsl");
        filePath.add("net/mgsx/gltf/shaders/default.vs.glsl");
        filePath.add("net/mgsx/gltf/shaders/gdx-pbr.vs.glsl");
        filePath.add("net/mgsx/gltf/shaders/gdx-pbr.fs.glsl");
        filePath.add("net/mgsx/gltf/shaders/depth.fs.glsl");
        filePath.add("net/mgsx/gltf/shaders/depth.vs.glsl");
        filePath.add("net/mgsx/gltf/shaders/emissive-only.fs");
        filePath.add("net/mgsx/gltf/shaders/ibl-sun.fs.glsl");
        filePath.add("net/mgsx/gltf/shaders/ibl-sun.vs.glsl");
        filePath.add("net/mgsx/gltf/shaders/skybox.fs.glsl");
        filePath.add("net/mgsx/gltf/shaders/skybox.vs.glsl");
        filePath.add("net/mgsx/gltf/shaders/pbr/compat.fs.glsl");
        filePath.add("net/mgsx/gltf/shaders/pbr/compat.vs.glsl");
        filePath.add("net/mgsx/gltf/shaders/pbr/env.glsl");
        filePath.add("net/mgsx/gltf/shaders/pbr/functions.glsl");
        filePath.add("net/mgsx/gltf/shaders/pbr/ibl.glsl");
        filePath.add("net/mgsx/gltf/shaders/pbr/iridescence.glsl");
        filePath.add("net/mgsx/gltf/shaders/pbr/lights.glsl");
        filePath.add("net/mgsx/gltf/shaders/pbr/material.glsl");
        filePath.add("net/mgsx/gltf/shaders/pbr/pbr.fs.glsl");
        filePath.add("net/mgsx/gltf/shaders/pbr/pbr.vs.glsl");
        filePath.add("net/mgsx/gltf/shaders/pbr/shadows.glsl");
    }

    private static void scriptsDefault(ArrayList<String> filePath) {
        filePath.add("soundmanager2-jsmin.js");
        filePath.add("freetype.js");
        filePath.add("bullet.js");
        filePath.add("bullet.wasm.js");
        filePath.add("bullet.wasm.wasm");
        filePath.add("imgui.js");
        filePath.add("imgui.wasm.js");
        filePath.add("imgui.wasm.wasm");
        filePath.add("box2D.js");
        filePath.add("box2D.wasm.js");
        filePath.add("box2D.wasm.wasm");
    }

    private static ACCEPT_STATE acceptPath(String path) {
        ACCEPT_STATE isValid = ACCEPT_STATE.NO_MATCH;
        if(path.contains("junit"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("hamcrest"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("jackson-"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("Java/jdk"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("commons-io"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("org/ow2"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("carrotsearch"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("google/code"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("jcraft"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("joda-time"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("mozilla"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("jutils"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("jinput-"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("lwjgl"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("jlayer-"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("/resources"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("javax"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("jsinterop-annotations"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("gwt-user-"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("sac-"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("gdx-box2d"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("gdx-jnigen"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("gdx-platform"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("imgui-core"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("generator/core/"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("gdx-bullet/"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("gdx-bullet-platform"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("org.reflections"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("com.google.guava"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("org.javassist"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("com.google.code.findbugs"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("org.slf4j"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;
        else if(path.contains("jParser"))
            isValid = ACCEPT_STATE.NOT_ACCEPT;

        if(path.contains("backend-teavm"))
            isValid = ACCEPT_STATE.ACCEPT;
        else if(path.contains(EXTENSION_BOX2D_GWT))
            isValid = ACCEPT_STATE.ACCEPT;
        else if(path.contains(EXTENSION_FREETYPE))
            isValid = ACCEPT_STATE.ACCEPT;
        else if(path.contains(EXTENSION_BULLET))
            isValid = ACCEPT_STATE.ACCEPT;
        else if(path.contains(EXTENSION_BOX2D))
            isValid = ACCEPT_STATE.ACCEPT;
        else if(path.contains(EXTENSION_IMGUI))
            isValid = ACCEPT_STATE.ACCEPT;
        else if(path.contains("jParser-loader"))
            isValid = ACCEPT_STATE.ACCEPT;

        return isValid;
    }

    private static void configTool(TeaVMTool tool, TeaClassLoader classLoader, TeaBuildConfiguration configuration, String webappDirectory, String webappName, TeaProgressListener progressListener) {
        boolean setDebugInformationGenerated = false;
        boolean setSourceMapsFileGenerated = false;
        boolean setSourceFilesCopied = false;

        File setTargetDirectory = new File(webappDirectory + File.separator + webappName + File.separator + "teavm");
        String setTargetFileName = "app.js";
        boolean setMinifying = configuration.minifying();
        String tmpdir = System.getProperty("java.io.tmpdir");
        File setCacheDirectory = new File(tmpdir + File.separator + "TeaVMCache");
        boolean setIncremental = false;

        tool.setClassLoader(classLoader);
        tool.setDebugInformationGenerated(setDebugInformationGenerated);
        tool.setSourceMapsFileGenerated(setSourceMapsFileGenerated);
        tool.setSourceFilesCopied(setSourceFilesCopied);
        tool.setTargetDirectory(setTargetDirectory);
        tool.setTargetFileName(setTargetFileName);
        tool.setObfuscated(setMinifying);
        tool.setFastDependencyAnalysis(false);
        tool.setOptimizationLevel(TeaVMOptimizationLevel.SIMPLE);
        String applicationListenerClass = configuration.getApplicationListenerClass();
        String mainClass = configuration.getMainClass();
        if(applicationListenerClass != null) {
            TeaClassTransformer.applicationListener = applicationListenerClass;
            TeaClassTransformer.mainClass = mainClass;
        }
        tool.setMainClass(mainClass);
        tool.setIncremental(setIncremental);
        tool.setCacheDirectory(setCacheDirectory);
        tool.setStrict(false);
        tool.setTargetType(TeaVMTargetType.JAVASCRIPT);
        tool.setProgressListener(new TeaVMProgressListener() {
            TeaVMPhase phase = null;

            @Override
            public TeaVMProgressFeedback phaseStarted(TeaVMPhase teaVMPhase, int i) {
                if(teaVMPhase == TeaVMPhase.DEPENDENCY_ANALYSIS) {
                    TeaBuilder.logHeader("DEPENDENCY_ANALYSIS");
                }
                else if(teaVMPhase == TeaVMPhase.COMPILING) {
                    TeaBuilder.logInternalNewLine("");
                    TeaBuilder.logHeader("COMPILING");
                }
                phase = teaVMPhase;
                return TeaVMProgressFeedback.CONTINUE;
            }

            @Override
            public TeaVMProgressFeedback progressReached(int i) {
                if(phase == TeaVMPhase.DEPENDENCY_ANALYSIS) {
                    TeaBuilder.logInternal("|");
                }
                if(phase == TeaVMPhase.COMPILING) {
                    if(progressListener != null) {
                        float progress = i / 1000f;
                        progressListener.onProgress(progress);
                    }
                }
                return TeaVMProgressFeedback.CONTINUE;
            }
        });
        preserveClasses(tool, configuration, classLoader);

        //TODO Remove
//        Properties properties = tool.getProperties();
//        properties.put("teavm.libgdx.fsJsonPath", webappDirectory + File.separator + webappName + File.separator + "filesystem.json");
//        properties.put("teavm.libgdx.warAssetsDirectory", webappDirectory + File.separator + webappName + File.separator + "assets");

    }

    public static void configAssets(TeaClassLoader classLoader, TeaBuildConfiguration configuration, String webappDirectory, String webappName) {
        ArrayList<String> webappAssetsFiles = new ArrayList<>();
        webappAssetsFiles.add(webappName);
        TeaBuilder.logHeader("COPYING ASSETS");

        AssetsCopy.copy(classLoader, webappAssetsFiles, new ArrayList<>(), null, webappDirectory, false);
        TeaBuilder.log("");

        String scriptsOutputPath = webappDirectory + File.separator + webappName;
        String assetsOutputPath = scriptsOutputPath + File.separator + "assets";

        File indexFile = new File(scriptsOutputPath + File.separator + "index.html");
        FileHandle handler = new FileHandle(indexFile);
        String indexHtmlStr = handler.readString();

        indexHtmlStr = indexHtmlStr.replace("%TITLE%", configuration.getHtmlTitle());
        indexHtmlStr = indexHtmlStr.replace("%WIDTH%", configuration.getHtmlWidth());
        indexHtmlStr = indexHtmlStr.replace("%HEIGHT%", configuration.getHtmlHeight());
        indexHtmlStr = indexHtmlStr.replace("%ARGS%", configuration.getMainClassArgs());

        handler.writeString(indexHtmlStr, false);

        AssetFilter filter = configuration.assetFilter();
        ArrayList<File> assetsPaths = new ArrayList<>();
        ArrayList<String> classPathAssetsFiles = new ArrayList<>();
        ArrayList<String> classPathScriptFiles = new ArrayList<>();
        assetsDefaultClasspath(classPathAssetsFiles);
        scriptsDefault(classPathScriptFiles);
        ArrayList<String> additionalAssetClasspath = configuration.getAdditionalAssetClasspath();
        classPathAssetsFiles.addAll(additionalAssetClasspath);
        boolean generateAssetPaths = configuration.assetsPath(assetsPaths);
        AssetsCopy.copy(classLoader, classPathAssetsFiles, assetsPaths, filter, assetsOutputPath, generateAssetPaths);

        // Copy Scripts
        AssetsCopy.copy(classLoader, classPathScriptFiles, null, null, scriptsOutputPath, false);
        TeaBuilder.log("");
    }
}
