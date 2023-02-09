package com.github.xpenatan.gdx.backends.teavm;

import com.github.xpenatan.gdx.backends.web.AssetLoaderListener;
import com.github.xpenatan.gdx.backends.web.WebApplication;
import com.github.xpenatan.gdx.backends.web.WebJSApplication;
import com.github.xpenatan.gdx.backends.web.preloader.Preloader;

public class TeaJSApplication implements WebJSApplication {

    @Override
    public void initBulletPhysics(WebApplication application) {
        Preloader preloader = application.getPreloader();
        initBulletPhysicsWasm(preloader);
    }

    @Override
    public void initBox2dPhysics(WebApplication application) {
        Preloader preloader = application.getPreloader();
        initBox2DPhysicsWasm(preloader);
    }

    @Override
    public void initImGui(WebApplication application) {
        //TODO script loading should be inside lib and not application
        Preloader preloader = application.getPreloader();
        initImGuiWasm(preloader);
    }

    private void initBulletPhysicsWasm(Preloader preloader) {
        preloader.loadScript(false, "bullet.wasm.js", new AssetLoaderListener<Object>() {
            @Override
            public boolean onSuccess(String url, Object result) {
                return true;
            }

            @Override
            public void onFailure(String url) {
            }
        });
    }

    private void initImGuiWasm(Preloader preloader) {
        preloader.loadScript(false, "imgui.js", new AssetLoaderListener<Object>() {
            @Override
            public boolean onSuccess(String url, Object result) {
                return true;
            }

            @Override
            public void onFailure(String url) {
            }
        });
    }

    // Box2D

    private void initBox2DPhysicsWasm(Preloader preloader) {
        preloader.loadScript(false, "box2D.wasm.js", new AssetLoaderListener<Object>() {
            @Override
            public boolean onSuccess(String url, Object result) {
                return true;
            }

            @Override
            public void onFailure(String url) {
            }
        });
    }
}
