package com.badlogic.gdx.utils.reflectNew;

import com.badlogic.gdx.utils.reflectNew.gen.ClassGen;
import com.badlogic.gdx.utils.reflectNew.gen.FieldProxy;
import com.github.xpenatan.gdx.backends.teavm.gen.Emulate;
import java.lang.annotation.Annotation;
import java.lang.reflect.Type;

@Emulate(com.badlogic.gdx.utils.reflect.Field.class)
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
        //TODO
        return false;
    }

    public void setAccessible(boolean flag) {
        //TODO
    }

    public boolean isAccessible() {
        //TODO
        return true;
    }

    public boolean isSynthetic() {
        //TODO
        return false;
    }

    public boolean isStatic() {
        //TODO
        return false;
    }

    public boolean isTransient() {
        //TODO
        return false;
    }

    private static Class<?> getActualType(Type actualType) {
        //TODO
//        if(actualType instanceof Class)
//            return (Class)actualType;
//        else if(actualType instanceof ParameterizedType)
//            return (Class)((ParameterizedType)actualType).getRawType();
//        else if(actualType instanceof GenericArrayType) {
//            Type componentType = ((GenericArrayType)actualType).getGenericComponentType();
//            if(componentType instanceof Class)
//                return ArrayReflection.newInstance((Class)componentType, 0).getClass();
//        }
        return null;
    }

    public AnnotationEmu[] getDeclaredAnnotations() {
        //TODO
//        java.lang.annotation.Annotation[] annotations = field.getDeclaredAnnotations();
//        com.badlogic.gdx.utils.reflect.AnnotationEmu[] result = new com.badlogic.gdx.utils.reflect.AnnotationEmu[annotations.length];
//        for(int i = 0; i < annotations.length; i++) {
//            result[i] = new com.badlogic.gdx.utils.reflect.AnnotationEmu(annotations[i]);
//        }
        return null;
    }

    public AnnotationEmu getDeclaredAnnotation(Class<? extends java.lang.annotation.Annotation> annotationType) {
        //TODO
//        java.lang.annotation.Annotation[] annotations = field.getDeclaredAnnotations();
//        if(annotations == null) {
//            return null;
//        }
//        for(java.lang.annotation.Annotation annotation : annotations) {
//            if(annotation.annotationType().equals(annotationType)) {
//                return new com.badlogic.gdx.utils.reflect.AnnotationEmu(annotation);
//            }
//        }
        return null;
    }
}