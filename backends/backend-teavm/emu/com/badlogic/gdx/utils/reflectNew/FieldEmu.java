package com.badlogic.gdx.utils.reflectNew;

import com.badlogic.gdx.utils.reflectNew.gen.ClassGen;
import com.badlogic.gdx.utils.reflectNew.gen.FieldProxy;

//@Emulate(Field.class)
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

    public boolean isAnnotationPresent(Class<? extends AnnotationEmu> annotationType) {
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