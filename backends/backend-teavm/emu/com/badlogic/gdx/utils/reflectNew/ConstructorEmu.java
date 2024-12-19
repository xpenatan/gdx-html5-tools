package com.badlogic.gdx.utils.reflectNew;

import com.badlogic.gdx.utils.reflect.ReflectionException;

//@Emulate(Constructor.class)
public final class ConstructorEmu {

    private Class cls;

    ConstructorEmu(Class cls) {
        this.cls = cls;
    }

    public Class[] getParameterTypes() {
        return null;
    }

    public Class getDeclaringClass() {
        return cls;
    }

    public boolean isAccessible() {
        return true;
    }

    public void setAccessible(boolean accessible) {
    }

    public Object newInstance(Object... args) throws ReflectionException {
        Object o = ClassReflectionEmu.newInstance(cls);
        return o;
    }
}
