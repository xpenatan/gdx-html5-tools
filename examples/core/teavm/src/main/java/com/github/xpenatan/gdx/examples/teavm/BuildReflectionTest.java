package com.github.xpenatan.gdx.examples.teavm;

import com.github.xpenatan.gdx.backends.teavm.TeaBuildConfiguration;
import com.github.xpenatan.gdx.backends.teavm.TeaBuilder;
import com.github.xpenatan.gdx.backends.teavm.plugins.TeaReflectionSupplier;
import com.github.xpenatan.gdx.examples.tests.ReflectionTest;
import java.io.File;
import org.teavm.tooling.TeaVMTool;

public class BuildReflectionTest {

    public static void main(String[] args) {
        String reflectionPackage = "com.badlogic.gdx.math";
        TeaReflectionSupplier.addReflectionClass(reflectionPackage);

        TeaBuildConfiguration teaBuildConfiguration = new TeaBuildConfiguration();
        teaBuildConfiguration.assetsPath.add(new File("../desktop/assets"));
        teaBuildConfiguration.webappPath = new File(".").getAbsolutePath();
        teaBuildConfiguration.obfuscate = false;
        teaBuildConfiguration.setApplicationListener(ReflectionTest.class);
        TeaVMTool tool = TeaBuilder.config(teaBuildConfiguration);
        TeaBuilder.build(tool);
    }
}
