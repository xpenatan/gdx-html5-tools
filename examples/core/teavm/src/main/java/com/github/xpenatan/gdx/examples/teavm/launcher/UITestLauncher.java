package com.github.xpenatan.gdx.examples.teavm.launcher;

import com.github.xpenatan.gdx.backends.teavm.TeaApplicationConfiguration;
import com.github.xpenatan.gdx.backends.web.WebApplication;
import com.github.xpenatan.gdx.backends.web.WebApplicationConfiguration;
import com.github.xpenatan.gdx.examples.tests.UITest;

public class UITestLauncher {

    public static void main(String[] args) {
        WebApplicationConfiguration config = new TeaApplicationConfiguration("canvas");
        new WebApplication(new UITest(), config);
    }
}
