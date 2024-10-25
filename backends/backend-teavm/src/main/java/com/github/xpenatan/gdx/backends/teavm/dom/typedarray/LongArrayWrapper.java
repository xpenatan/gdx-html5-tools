package com.github.xpenatan.gdx.backends.teavm.dom.typedarray;

import org.teavm.jso.JSObject;

/**
 * @author xpenatan
 */
public interface LongArrayWrapper extends JSObject {
    // LongArray
    int getLength();
    void setLength(int length);
    int getElement(int index);
    void setElement(int index, int value);
}
