package com.badlogic.gdx.utils.reflect;

import com.badlogic.gdx.utils.reflect.gen.ClassGen;
import com.github.xpenatan.gdx.backends.teavm.gen.Emulate;

@Emulate(ArrayReflection.class)
public class ArrayReflectionEmu {

    static private Object internalInstance(Class c, int size) {
        if(c == Object.class) { return new Object[size]; }
        if(c == String.class) { return new String[size]; }
        if(c == int[].class) { return new int[size]; }
        if(c == float[].class) { return new float[size]; }
        if(c == short[].class) { return new short[size]; }
        if(c == boolean[].class) { return new boolean[size]; }

        return null;
    }

    static public Object newInstance(Class c, int size) {
        Object o = internalInstance(c, size);
        if(o != null) {
            return o;
        }
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