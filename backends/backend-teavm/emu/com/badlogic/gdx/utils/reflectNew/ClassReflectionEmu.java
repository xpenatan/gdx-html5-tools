package com.badlogic.gdx.utils.reflectNew;

import com.badlogic.gdx.utils.reflect.Constructor;
import com.badlogic.gdx.utils.reflect.Method;
import com.badlogic.gdx.utils.reflect.ReflectionException;
import com.badlogic.gdx.utils.reflectNew.gen.ClassGen;
import com.badlogic.gdx.utils.reflectNew.gen.ClassProxy;
import com.badlogic.gdx.utils.reflectNew.gen.FieldProxy;
import java.lang.reflect.Modifier;

//@Emulate(ClassReflection.class)
public final class ClassReflectionEmu {

    static public Class forName(String name) throws ReflectionException, ClassNotFoundException {
        ClassProxy classProxy = ClassGen.getClassProxyByName(name);
        return classProxy.getType();
//        try {
//            return Class.forName(name);
//        }
//        catch(ClassNotFoundException e) {
//            throw new ReflectionException("Class not found: " + name, e);
//        }
//        if(classProxy != null) {
//            return classProxy.getType();
//        }
//        return null;
    }

    static public String getSimpleName(Class c) {
        return c.getSimpleName();
    }

    static public boolean isInstance(Class c, Object obj) {
        return obj != null && isAssignableFrom(c, obj.getClass());
    }

    static public boolean isAssignableFrom(Class c1, Class c2) {
        return c1.isAssignableFrom(c2);
    }

    static public boolean isMemberClass(Class c) {
        ClassProxy classProxy = ClassGen.getClassProxy(c);
        return classProxy.isMemberClass();
    }

    static public boolean isStaticClass(Class c) {
        if(c.isInterface())
            return true;
        return Modifier.isStatic(c.getModifiers());
    }

    static public boolean isArray(Class c) {
        return c.isArray();
    }

    static public boolean isPrimitive(Class c) {
        return c.isPrimitive();
    }

    static public boolean isEnum(Class c) {
        return c.isEnum();
    }

    static public boolean isAnnotation(Class c) {
        // TODO TeaVM does not have isAnnotation implemented
        return false;
//        return c.isAnnotation();
    }

    static public boolean isInterface(Class c) {
        return c.isInterface();
    }

    static public boolean isAbstract(Class c) {
        if(c.isPrimitive() || c.isArray() || c.isInterface())
            return true;
        return Modifier.isAbstract(c.getModifiers());
    }

    static public <T> T newInstance(Class<T> c) throws ReflectionException {
        if(c == Object.class) {
            return (T)new Object();
        }
        T instance = (T)ClassGen.createInstance(c);
        return instance;
    }

    static public Class getComponentType(Class c) {
        return c.getComponentType();
    }

    static public ConstructorEmu[] getConstructors(Class c) {
        ConstructorEmu[] constructors = new ConstructorEmu[1];
        constructors[0] = new ConstructorEmu(c);
        return constructors;
    }

    static private ConstructorEmu getNoArgPublicConstructor(Class c) {
        return new ConstructorEmu(c);
    }

    static public ConstructorEmu getConstructor(Class c, Class... parameterTypes) throws ReflectionException {
        return new ConstructorEmu(c);
    }

    static public ConstructorEmu getDeclaredConstructor(Class c, Class... parameterTypes) throws ReflectionException {
        return new ConstructorEmu(c);
    }

    static public Object[] getEnumConstants(Class c) {
        return c.getEnumConstants();
    }

    static public MethodEmu[] getMethods(Class c) {
        java.lang.reflect.Method[] methods = c.getMethods();
        MethodEmu[] result = new MethodEmu[methods.length];
        for(int i = 0, j = methods.length; i < j; i++) {
            result[i] = new MethodEmu(methods[i]);
        }
        return result;
    }

    static public MethodEmu getMethod(Class c, String name, Class... parameterTypes) throws ReflectionException {
        try {
            return new MethodEmu(c.getMethod(name, parameterTypes));
        }
        catch(SecurityException e) {
            throw new ReflectionException("Security violation while getting method: " + name + ", for class: " + c.getName(), e);
        }
        catch(NoSuchMethodException e) {
            throw new ReflectionException("Method not found: " + name + ", for class: " + c.getName(), e);
        }
    }

    static public MethodEmu[] getDeclaredMethods(Class c) {
        java.lang.reflect.Method[] methods = c.getDeclaredMethods();
        MethodEmu[] result = new MethodEmu[methods.length];
        for(int i = 0, j = methods.length; i < j; i++) {
            result[i] = new MethodEmu(methods[i]);
        }
        return result;
    }

    static public MethodEmu getDeclaredMethod(Class c, String name, Class... parameterTypes) throws ReflectionException {
        try {
            return new MethodEmu(c.getDeclaredMethod(name, parameterTypes));
        }
        catch(SecurityException e) {
            throw new ReflectionException("Security violation while getting method: " + name + ", for class: " + c.getName(), e);
        }
        catch(NoSuchMethodException e) {
            throw new ReflectionException("Method not found: " + name + ", for class: " + c.getName(), e);
        }
    }

    static public FieldEmu[] getFields(Class c) {
        // there is a bug in teavm that using just getFields the fields are not generated.
//        c.getDeclaredFields();
//
//        java.lang.reflect.Field[] fields = c.getFields();
//        FieldEmu[] result = new FieldEmu[fields.length];
//        for(int i = 0, j = fields.length; i < j; i++) {
//            result[i] = new FieldEmu(fields[i]);
//        }
//        return result;
        return null;
    }

    static public FieldEmu getField(Class c, String name) throws ReflectionException {
        ClassProxy classProxy = ClassGen.getClassProxy(c);
        FieldProxy fieldProxy = classProxy.getField(name);
        return new FieldEmu(fieldProxy);
//        try {
//            java.lang.reflect.Field field = c.getField(name);
//            return new FieldEmu(field);
//        }
//        catch(Throwable e) {
//            e.printStackTrace();
//        }
//        return null;
    }

    static public FieldEmu[] getDeclaredFields(Class c) {
        ClassProxy classProxy = ClassGen.getClassProxy(c);
        if(classProxy != null) {
            FieldProxy[] declaredFields = classProxy.getDeclaredFields();
            FieldEmu[] result = new FieldEmu[declaredFields.length];
            for(int i = 0, j = result.length; i < j; i++) {
                result[i] = new FieldEmu(declaredFields[i]);
            }
            return result;
        }
        return null;
    }

    static public FieldEmu getDeclaredField(Class c, String name) throws ReflectionException {
//        try {
//            java.lang.reflect.Field declaredField = c.getDeclaredField(name);
//            return new FieldEmu(declaredField);
//        }
//        catch(Throwable e) {
//            e.printStackTrace();
//        }
        return null;
    }

    static public boolean isAnnotationPresent(Class c, Class<? extends java.lang.annotation.Annotation> annotationType) {
        return c.isAnnotationPresent(annotationType);
    }

    static public AnnotationEmu[] getAnnotations(Class c) {
        java.lang.annotation.Annotation[] annotations = c.getAnnotations();
        AnnotationEmu[] result = new AnnotationEmu[annotations.length];
        for(int i = 0; i < annotations.length; i++) {
            result[i] = new AnnotationEmu(annotations[i]);
        }
        return result;
    }

    static public AnnotationEmu getAnnotation(Class c, Class<? extends java.lang.annotation.Annotation> annotationType) {
        java.lang.annotation.Annotation annotation = c.getAnnotation(annotationType);
        if(annotation != null) return new AnnotationEmu(annotation);
        return null;
    }

    static public AnnotationEmu[] getDeclaredAnnotations(Class c) {
        java.lang.annotation.Annotation[] annotations = c.getDeclaredAnnotations();
        AnnotationEmu[] result = new AnnotationEmu[annotations.length];
        for(int i = 0; i < annotations.length; i++) {
            result[i] = new AnnotationEmu(annotations[i]);
        }
        return result;
    }

    static public AnnotationEmu getDeclaredAnnotation(Class c, Class<? extends java.lang.annotation.Annotation> annotationType) {
        java.lang.annotation.Annotation[] annotations = c.getDeclaredAnnotations();
        for(java.lang.annotation.Annotation annotation : annotations) {
            if(annotation.annotationType().equals(annotationType)) return new AnnotationEmu(annotation);
        }
        return null;
    }

    static public Class[] getInterfaces(Class c) {
        return c.getInterfaces();
    }
}
