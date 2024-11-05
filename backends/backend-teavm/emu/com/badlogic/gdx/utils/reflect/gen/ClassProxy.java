package com.badlogic.gdx.utils.reflect.gen;

public interface ClassProxy {
    FieldProxy getField(String name);
    Class getType();
    FieldProxy[] getDeclaredFields();
    boolean isMemberClass();
}