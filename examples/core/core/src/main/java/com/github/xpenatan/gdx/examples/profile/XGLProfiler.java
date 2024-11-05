package com.github.xpenatan.gdx.examples.profile;

import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.graphics.profiling.GLErrorListener;
import com.badlogic.gdx.math.FloatCounter;
import com.badlogic.gdx.utils.ObjectIntMap;

public class XGLProfiler {

    private XGLInterceptor glInterceptor;
    private GLErrorListener listener;
    private boolean enabled = false;

    boolean errorLog;

    public XGLProfiler(boolean errorLog) {
        this.errorLog = errorLog;
        if(Gdx.gl30 != null) {
            glInterceptor = new XGL30Interceptor(this);
        }
        else {
            glInterceptor = new XGL20Interceptor(this);
        }
        listener = GLErrorListener.LOGGING_LISTENER;
    }

    /**
     * Enables profiling by replacing the {@code GL20} and {@code GL30} instances with profiling ones.
     */
    public void enable() {
        if(enabled) return;

        glInterceptor.begin();

        enabled = true;
    }

    /**
     * Disables profiling by resetting the {@code GL20} and {@code GL30} instances with the original ones.
     */
    public void disable() {
        if(!enabled) return;

        glInterceptor.end();

        enabled = false;
    }

    /**
     * Set the current listener for the {@link XGLProfiler} to {@code errorListener}
     */
    public void setListener(GLErrorListener errorListener) {
        this.listener = errorListener;
    }

    /**
     * @return the current {@link GLErrorListener}
     */
    public GLErrorListener getListener() {
        return listener;
    }

    /**
     * @return true if the GLProfiler is currently profiling
     */
    public boolean isEnabled() {
        return enabled;
    }

    /**
     * @return the total gl calls made since the last reset
     */
    public int getCalls() {
        return glInterceptor.getCalls();
    }

    /**
     * @return the total amount of texture bindings made since the last reset
     */
    public int getTextureBindings() {
        return glInterceptor.getTextureBindings();
    }

    /**
     * @return the total amount of draw calls made since the last reset
     */
    public int getDrawCalls() {
        return glInterceptor.getDrawCalls();
    }

    /**
     * @return the total amount of shader switches made since the last reset
     */
    public int getShaderSwitches() {
        return glInterceptor.getShaderSwitches();
    }

    /**
     * @return {@link FloatCounter} containing information about rendered vertices since the last reset
     */
    public FloatCounter getVertexCount() {
        return glInterceptor.getVertexCount();
    }

    /**
     * Will reset the statistical information which has been collected so far. This should be called after every frame.
     * Error listener is kept as it is.
     */
    public void reset() {
        glInterceptor.reset();
    }

    public String getStatus() {
        String status = "";
        status += "GLCalls: " + getCalls();
        status += "\nTextureBindings: " + getTextureBindings();
        status += "\nDrawCalls: " + getDrawCalls();
        status += "\nShaderSwitches: " + getShaderSwitches();
        status += "\nVertexCount: " + getVertexCount();
        status += "\nGL Methods: ";

        ObjectIntMap<String> counter = getCounter();
        ObjectIntMap.Entries<String> iterator = counter.iterator();
        while(iterator.hasNext) {
            ObjectIntMap.Entry<String> next = iterator.next();
            String key = next.key;
            int value = next.value;
            if(value > 0) {
                status += "\n" + key + ": " + value;
            }
        }
        return status;
    }

    public ObjectIntMap<String> getCounter() {
        return glInterceptor.getCounter();
    }
}
