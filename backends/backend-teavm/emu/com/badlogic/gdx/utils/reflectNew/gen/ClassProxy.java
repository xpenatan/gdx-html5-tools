package com.badlogic.gdx.utils.reflectNew.gen;

public interface ClassProxy {
    FieldProxy getField(String name);
    Class getType();
    FieldProxy[] getDeclaredFields();
    boolean isMemberClass();
}