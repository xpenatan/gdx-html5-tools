package com.badlogic.gdx.utils.reflectNew;

import com.github.xpenatan.gdx.backends.teavm.gen.Emulate;
import java.lang.annotation.Annotation;

@Emulate(com.badlogic.gdx.utils.reflect.Annotation.class)
public final class AnnotationEmu {

    AnnotationEmu() {
    }

    public <T extends Annotation> T getAnnotation(Class<T> annotationType) {
        return null;
    }

    public Class<? extends Annotation> getAnnotationType() {
        return null;
    }
}