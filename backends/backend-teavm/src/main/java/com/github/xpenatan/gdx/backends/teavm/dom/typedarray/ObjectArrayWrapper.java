package com.github.xpenatan.gdx.backends.teavm.dom.typedarray;

import org.teavm.jso.JSObject;

/**
 * @author xpenatan
 */
public interface ObjectArrayWrapper<E> extends JSObject {
    int getLength();
    void setLength(int length);
    E getElement(int index);
    void setElement(int index, E value);
}