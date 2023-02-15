package com.github.xpenatan.gdx.backends.teavm;

import com.github.xpenatan.gdx.backends.teavm.dom.TeaTypedArrays;
import com.github.xpenatan.gdx.backends.teavm.util.TeaJSHelper;

/**
 * @author xpenatan
 */
public class TeaApplicationConfiguration {

    @Deprecated
    private TeaJSHelper jsHelper;

    /**
     * Load assets before starting the game. For custom loading, change to false.
     */
    public boolean preloadAssets = true;

    public String canvasID;

    /**
     * the width of the drawing area in pixels, 0 for using the available space or -1 to use html canvas size
     **/
    public int width = -1;
    /**
     * the height of the drawing area in pixels, 0 for using the available space or -1 to use html canvas size
     **/
    public int height = -1;
    /**
     * Padding to use for resizing the game content in the browser window, for resizable applications only. Defaults to 0. The
     * padding is necessary to prevent the browser from showing scrollbars. This can happen if the game content is of the same size
     * than the browser window. The padding is given in logical pixels, not affected by {@link #usePhysicalPixels}.
     */
    public int padHorizontal = 0, padVertical = 0;
    /**
     * whether to use a stencil buffer
     **/
    public boolean stencil = false;
    /**
     * whether to enable antialiasing
     **/
    public boolean antialiasing = false;
    /**
     * whether to include an alpha channel in the color buffer
     **/
    public boolean alpha = false;
    /**
     * whether to use premultipliedalpha, may have performance impact
     **/
    public boolean premultipliedAlpha = false;
    /**
     * preserve the back buffer, needed if you fetch a screenshot via canvas#toDataUrl, may have performance impact
     **/
    public boolean preserveDrawingBuffer = false;
    /**
     * whether to use debugging mode for OpenGL calls. Errors will result in a RuntimeException being thrown.
     */
    public boolean useDebugGL = false;

    public boolean usePhysicalPixels;

    public boolean isFixedSizeApplication() {
        return width != 0 && height != 0;
    }

    public boolean isAutoSizeApplication() {
        return width == 0 && height == 0;
    }

    public TeaApplicationConfiguration(String canvasID) {
        this.canvasID = canvasID;
        jsHelper = new TeaJSHelper();
        new TeaTypedArrays();
    }

    public TeaJSHelper getJSHelper() {
        return jsHelper;
    }
}
