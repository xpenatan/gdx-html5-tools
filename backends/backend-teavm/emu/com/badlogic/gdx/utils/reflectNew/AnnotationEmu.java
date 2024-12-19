package com.badlogic.gdx.utils.reflectNew;

import com.github.xpenatan.gdx.backends.teavm.gen.Emulate;

//@Emulate(Annotation.class)
public final class AnnotationEmu {

    private java.lang.annotation.Annotation annotation;

    AnnotationEmu(java.lang.annotation.Annotation annotation) {
        this.annotation = annotation;
    }

    @SuppressWarnings("unchecked")
    public <T extends java.lang.annotation.Annotation> T getAnnotation(Class<T> annotationType) {
        if(annotation.annotationType().equals(annotationType)) {
            return (T)annotation;
        }
        return null;
    }

    public Class<? extends java.lang.annotation.Annotation> getAnnotationType() {
        return annotation.annotationType();
    }
}
