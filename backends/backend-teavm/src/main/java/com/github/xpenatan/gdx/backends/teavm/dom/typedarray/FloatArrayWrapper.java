package com.github.xpenatan.gdx.backends.teavm.dom.typedarray;

import org.teavm.jso.JSObject;

/**
 * @author xpenatan
 */
public interface FloatArrayWrapper extends JSObject {
    // FloatArray
    int getLength();
    void setLength(int length);
    float getElement(int index);
    void setElement(int index, float value);
}