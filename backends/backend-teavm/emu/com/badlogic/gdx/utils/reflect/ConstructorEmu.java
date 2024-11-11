package com.badlogic.gdx.utils.reflect;

import com.github.xpenatan.gdx.backends.teavm.gen.Emulate;

/**
 * Provides information about, and access to, a single constructor for a Class.
 *
 * @author nexsoftware
 */
@Emulate(Constructor.class)
public final class ConstructorEmu {

    private Class cls;

    ConstructorEmu(Class cls) {
        this.cls = cls;
    }

    /**
     * Returns an array of Class objects that represent the formal parameter types, in declaration order, of the constructor.
     */
    public Class[] getParameterTypes() {
        return null;
    }

    /**
     * Returns the Class object representing the class or interface that declares the constructor.
     */
    public Class getDeclaringClass() {
        return cls;
    }

    public boolean isAccessible() {
        return true;
    }

    public void setAccessible(boolean accessible) {
    }

    /**
     * Uses the constructor to create and initialize a new instance of the constructor's declaring class, with the supplied
     * initialization parameters.
     */
    public Object newInstance(Object... args) throws ReflectionException {
        Object o = ClassReflectionEmu.newInstance(cls);
        return o;
    }
}
