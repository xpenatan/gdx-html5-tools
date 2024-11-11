import org.teavm.gradle.api.SourceFilePolicy

plugins {
    id("org.gretty") version("3.1.0")
    id("java-library")
    id("org.teavm") version "0.11.0-dev-3" apply true
}

gretty {
    contextPath = "/"
    extraResourceBase("build/dist/webapp")
}

dependencies {
    implementation("com.badlogicgames.gdx:gdx:${LibExt.gdxVersion}")
    implementation("com.fasterxml.jackson.core:jackson-annotations:2.5.4")
    implementation("com.fasterxml.jackson.core:jackson-databind:2.5.4")
    implementation(project(":examples:core:core"))

    implementation(project(":backends:backend-teavm"))
    implementation(project(":extensions:gdx-freetype-teavm"))
}

val mainClassName = "com.github.xpenatan.gdx.examples.teavm.BuildTeaVMTestDemo"

tasks.register<JavaExec>("core-build") {
    group = "examples-teavm"
    description = "Build teavm test example"
    mainClass.set(mainClassName)
    classpath = sourceSets["main"].runtimeClasspath
}

tasks.register("core-run-teavm") {
    description = "RRun Test Demo example"
    val list = listOf("core-build", "jettyRun")
    group = "examples-teavm"
    dependsOn(list)
    tasks.findByName("jettyRun")?.mustRunAfter("core-build")
}

val generatedCSources = File(buildDir, "dist/webapp/teavm")

//teavm {
//    js {
//        sourceMap = true
//        debugInformation = true
//        sourceFilePolicy = SourceFilePolicy.COPY
//        addedToWebApp = true
//        mainClass = "com.github.xpenatan.gdx.examples.teavm.launcher.TeaVMTestLauncher"
//    }
//    wasmGC {
//        sourceMap = true
//        debugInformation = true
//        sourceFilePolicy = SourceFilePolicy.COPY
//        addedToWebApp = false
//        mainClass = "com.github.xpenatan.gdx.examples.teavm.launcher.TeaVMTestLauncher"
//    }
//}