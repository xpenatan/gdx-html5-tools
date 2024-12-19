package com.badlogic.gdx.utils.reflectNew.gen;

public interface FieldProxy {
    Class getType();
    String getName();
    Object get(Object instance);
    void set(Object instance, Object value);
    Class getDeclaringClass();
}