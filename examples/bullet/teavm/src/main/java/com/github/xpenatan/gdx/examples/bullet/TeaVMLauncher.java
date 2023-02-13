package com.github.xpenatan.gdx.examples.bullet;

import com.github.xpenatan.gdx.backends.teavm.TeaApplicationConfiguration;
import com.github.xpenatan.gdx.backends.teavm.WebApplication;
import com.github.xpenatan.gdx.backends.teavm.WebApplicationConfiguration;

public class TeaVMLauncher {
    public static void main(String[] args) {
        WebApplicationConfiguration config = new TeaApplicationConfiguration("canvas");
        config.width = 0;
        config.height = 0;
        new WebApplication(new BulletTest(), config);
    }
}
