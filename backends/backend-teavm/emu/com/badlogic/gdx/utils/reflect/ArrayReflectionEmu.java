package com.badlogic.gdx.utils.reflect;

import com.badlogic.gdx.utils.reflect.gen.ClassGen;
import com.github.xpenatan.gdx.backends.teavm.gen.Emulate;

@Emulate(ArrayReflection.class)
public class ArrayReflectionEmu {

    static public Object newInstance(Class c, int size) {
        Object arrayInstance = ClassGen.createArrayInstance(c, size);
        return arrayInstance;
    }

    static public int getLength(Object array) {
        // TODO check if this work
        return java.lang.reflect.Array.getLength(array);
    }

    static public Object get(Object array, int index) {
        // TODO check if this work
        return java.lang.reflect.Array.get(array, index);
    }

    static public void set(Object array, int index, Object value) {
//        java.lang.reflect.Array.set(array, index, value);
    }
}