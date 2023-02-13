package com.github.xpenatan.gdx.backends.teavm.preloader;

/**
 * @author xpenatan
 */
public enum AssetType {
    Image("i"), Audio("a"), Text("t"), Binary("b"), Directory("d");

    public final String code;

    private AssetType(String code) {
        this.code = code;
    }
}
