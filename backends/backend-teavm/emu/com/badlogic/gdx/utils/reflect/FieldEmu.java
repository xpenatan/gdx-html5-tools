package com.badlogic.gdx.utils.reflect;

import com.badlogic.gdx.utils.reflect.gen.ClassGen;
import com.badlogic.gdx.utils.reflect.gen.FieldProxy;
import com.github.xpenatan.gdx.backends.teavm.gen.Emulate;

@Emulate(Field.class)
public final class FieldEmu {
    private FieldProxy fieldProxy;

    public FieldEmu(FieldProxy fieldProxy) {
        this.fieldProxy = fieldProxy;
    }

    public String getName() {
        return fieldProxy.getName();
    }

    public Class getType() {
        return fieldProxy.getType();
    }

    public Class getDeclaringClass() {
        return fieldProxy.getDeclaringClass();
    }

    public Object get (Object obj) {
        return fieldProxy.get(obj);
    }

    public void set (Object obj, Object value) {
        fieldProxy.set(obj, value);
    }

    public Class getElementType(int index) {
        Class<?> declaringClass = getDeclaringClass();
        String fieldName = getName();
        Class elementType = ClassGen.getElementType(declaringClass, fieldName, index);
        return elementType;
    }

    public boolean isAnnotationPresent(Class<? extends Annotation> annotationType) {
        return false;
    }

    public void setAccessible(boolean flag) {

    }

    public boolean isAccessible() {
        return true;
    }

    public boolean isSynthetic() {
        return false;
    }

    public boolean isStatic() {
        return false;
    }

    public boolean isTransient() {
        return false;
    }
}