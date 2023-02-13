package com.github.xpenatan.gdx.backends.web.gen;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE, ElementType.METHOD, ElementType.FIELD})
public @interface Emulate{
    Class<?> value() default Object.class;
    String valueStr() default "";
    boolean updateCode() default false;
}