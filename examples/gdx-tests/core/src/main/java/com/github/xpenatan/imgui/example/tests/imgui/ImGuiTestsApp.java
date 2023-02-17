package com.github.xpenatan.imgui.example.tests.imgui;

import com.badlogic.gdx.ApplicationListener;
import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.graphics.GL20;
import com.badlogic.gdx.graphics.OrthographicCamera;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.badlogic.gdx.tests.InputTest;
import com.badlogic.gdx.tests.utils.GdxTest;
import com.github.xpenatan.gdx.frame.viewport.EmuFrameBuffer;
import com.github.xpenatan.imgui.core.ImDrawData;
import com.github.xpenatan.imgui.core.ImGui;
import com.github.xpenatan.imgui.core.ImGuiBoolean;
import com.github.xpenatan.imgui.core.ImGuiIO;
import com.github.xpenatan.imgui.core.enums.ImGuiConfigFlags;
import com.badlogic.gdx.tests.TeaVMGdxTests;
import com.github.xpenatan.imgui.example.tests.frame.GameFrame;
import com.github.xpenatan.imgui.gdx.ImGuiGdxImpl;
import com.github.xpenatan.imgui.gdx.ImGuiGdxInputMultiplexer;

/**
 * Requires Gdx-test
 */
public class ImGuiTestsApp implements ApplicationListener {

    ImGuiGdxImpl impl;

    boolean gdxTestInit = false;

    ImGuiBoolean booleanFlag;
    int selected = -1;

    private GameFrame gameFrame;

    SpriteBatch batch;
    private OrthographicCamera camera;

    TeaVMGdxTests.TeaVMInstancer[] testList;

    @Override
    public void create() {
        ImGui.init();

        camera = new OrthographicCamera();
        camera.setToOrtho(true);
        batch = new SpriteBatch();

        booleanFlag = new ImGuiBoolean();

        ImGuiIO io = ImGui.GetIO();

        io.setIniFilename(null);
        io.SetConfigFlags(ImGuiConfigFlags.DockingEnable);
        io.SetDockingFlags(false, false, false, false);

        impl = new ImGuiGdxImpl();

        EmuFrameBuffer.setDefaultFramebufferHandleInitialized(false);

        gameFrame = new GameFrame(20, 20, 800, 400);

        testList = TeaVMGdxTests.getTestList();

        gameFrame.emuWindow.setApplicationListener(new InputTest());

        ImGuiGdxInputMultiplexer multiplexer = new ImGuiGdxInputMultiplexer();
        multiplexer.addProcessor(gameFrame.emuWindow.getInput());
        Gdx.input.setInputProcessor(multiplexer);
    }

    private void drawTestListWindow() {
        if(!gdxTestInit) {
            gdxTestInit = true;
            ImGui.SetNextWindowSize(200, 500);
            ImGui.SetNextWindowPos(900, 20);
        }
        ImGui.Begin("GdxTests");
        ImGui.BeginChildFrame(313, 0f, 0f);
        for(int i = 0; i < testList.length; i++) {
            String testName = testList[i].getSimpleName();
            boolean isSelected = selected == i;
            if(ImGui.Selectable(testName, isSelected)) {
                if(selected != i) {
                    selected = i;
                    GdxTest newTest = testList[i].instance();
                    gameFrame.emuWindow.setApplicationListener(newTest);
                }
            }
        }
        ImGui.EndChildFrame();
        ImGui.End();
    }

    @Override
    public void render() {
        Gdx.gl.glClearColor(0.1f, 0.1f, 0.1f, 1);
        Gdx.gl.glClear(GL20.GL_COLOR_BUFFER_BIT);

        camera.update();
        gameFrame.update();

        impl.update();
        drawTestListWindow();
        ImGui.Render();
        ImDrawData drawData = ImGui.GetDrawData();
        impl.render(drawData);

        batch.setProjectionMatrix(camera.combined);
        batch.begin();
        gameFrame.draw(batch);
        batch.end();
    }

    @Override
    public void resize(int width, int height) {
//        gameFrame.windowX = 0;
//        gameFrame.windowY = 0;
//        gameFrame.windowWidth = width;
//        gameFrame.windowHeight = height;
    }

    @Override
    public void pause() {
    }

    @Override
    public void resume() {
    }

    @Override
    public void dispose() {
        impl.dispose();
        ImGui.dispose();
        batch.dispose();
    }
}
