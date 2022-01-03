package com.badlogic.gdx.physics.bullet.linearmath;

import com.badlogic.gdx.physics.bullet.BulletBase;

public class btVector3 extends BulletBase {

    public btVector3() {
        this(createNative(0, 0, 0), true);
    }

    public btVector3(float x, float y, float z) {
        this(createNative(x, y, z), true);
    }

    protected btVector3(long cPtr, boolean cMemoryOwn) {
        super("btVector3", cPtr, cMemoryOwn);
    }

    /*[-C++;-NATIVE]
        return (jlong)new btVector3(x,y,z);
     */
    /*[-teaVM;-NATIVE]
        var vec3 = new Bullet.btVector3(x,y,z);
        return Bullet.getPointer(vec3);
     */
    private static native long createNative(float x, float y, float z);

    public float getX() {
        return getX(cPointer);
    }

    /*[-C++;-NATIVE]
        btVector3 * vec = (btVector3 *)addr;
        return vec->x();
     */
    /*[-teaVM;-NATIVE]
        var vec3 = Bullet.wrapPointer(addr, Bullet.btVector3);
        return vec3.x();
     */
    private static native float getX(long addr);

    public float getY() {
        return getY(cPointer);
    }

    /*[-C++;-NATIVE]
        btVector3 * vec = (btVector3 *)addr;
        return vec->y();
     */
    /*[-teaVM;-NATIVE]
        var vec3 = Bullet.wrapPointer(addr, Bullet.btVector3);
        return vec3.y();
     */
    private static native float getY(long addr);

    public float getZ() {
        return getZ(cPointer);
    }

    /*[-C++;-NATIVE]
        btVector3 * vec = (btVector3 *)addr;
        return vec->z();
    */
    /*[-teaVM;-NATIVE]
        var vec3 = Bullet.wrapPointer(addr, Bullet.btVector3);
        return vec3.z();
     */
    private static native float getZ(long addr);

    public float x() {
        return getX(cPointer);
    }

    public float y() {
        return getY(cPointer);
    }

    public float z() {
        return getZ(cPointer);
    }
}