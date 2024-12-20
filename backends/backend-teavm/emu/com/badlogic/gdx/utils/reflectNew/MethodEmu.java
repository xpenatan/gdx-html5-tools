package com.badlogic.gdx.utils.reflectNew;

import com.badlogic.gdx.utils.reflect.ReflectionException;
import com.github.xpenatan.gdx.backends.teavm.gen.Emulate;

@Emulate(com.badlogic.gdx.utils.reflect.Method.class)
public class MethodEmu {

    MethodEmu() {
    }

    public String getName() {
        return null;
//        return method.getName();
    }

    public Class getReturnType() {
        return null;
//        return method.getReturnType();
    }

    public Class[] getParameterTypes() {
        return null;
//        return method.getParameterTypes();
    }

    public Class getDeclaringClass() {
        return null;
//        return method.getDeclaringClass();
    }

    public boolean isAccessible() {
        return false;
//        return method.isAccessible();
    }

    public void setAccessible(boolean accessible) {
//        method.setAccessible(accessible);
    }

    public boolean isAbstract() {
        return false;
//        return Modifier.isAbstract(method.getModifiers());
    }

    public boolean isDefaultAccess() {
        return !isPrivate() && !isProtected() && !isPublic();
    }

    public boolean isFinal() {
        return false;
//        return Modifier.isFinal(method.getModifiers());
    }

    public boolean isPrivate() {
        return false;
//        return Modifier.isPrivate(method.getModifiers());
    }

    public boolean isProtected() {
        return false;
//        return Modifier.isProtected(method.getModifiers());
    }

    public boolean isPublic() {
        return false;
//        return Modifier.isPublic(method.getModifiers());
    }

    public boolean isNative() {
        return false;
//        return Modifier.isNative(method.getModifiers());
    }

    public boolean isStatic() {
        return false;
//        return Modifier.isStatic(method.getModifiers());
    }

    public boolean isVarArgs() {
        return false;
//        return method.isVarArgs();
    }

    public Object invoke(Object obj, Object... args) throws ReflectionException {
//        try {
//            return method.invoke(obj, args);
//        }
//        catch(IllegalArgumentException e) {
//            throw new ReflectionException("Illegal argument(s) supplied to method: " + getName(), e);
//        }
//        catch(IllegalAccessException e) {
//            throw new ReflectionException("Illegal access to method: " + getName(), e);
//        }
//        catch(InvocationTargetException e) {
//            throw new ReflectionException("Exception occurred in method: " + getName(), e);
//        }
        return null;
    }

    public boolean isAnnotationPresent(Class<? extends java.lang.annotation.Annotation> annotationType) {
        return false;
//        return method.isAnnotationPresent(annotationType);
    }

    public AnnotationEmu[] getDeclaredAnnotations() {
//        java.lang.annotation.Annotation[] annotations = method.getDeclaredAnnotations();
//        AnnotationEmu[] result = new AnnotationEmu[annotations.length];
//        for(int i = 0; i < annotations.length; i++) {
//            result[i] = new AnnotationEmu(annotations[i]);
//        }
//        return result;
        return null;
    }

    public AnnotationEmu getDeclaredAnnotation(Class<? extends java.lang.annotation.Annotation> annotationType) {
//        java.lang.annotation.Annotation[] annotations = method.getDeclaredAnnotations();
//        if(annotations == null) {
//            return null;
//        }
//        for(java.lang.annotation.Annotation annotation : annotations) {
//            if(annotation.annotationType().equals(annotationType)) {
//                return new AnnotationEmu(annotation);
//            }
//        }
        return null;
    }
}
