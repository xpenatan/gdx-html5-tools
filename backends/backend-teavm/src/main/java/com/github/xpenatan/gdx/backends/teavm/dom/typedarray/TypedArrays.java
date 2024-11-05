package com.github.xpenatan.gdx.backends.teavm.dom.typedarray;

import com.badlogic.gdx.utils.GdxRuntimeException;
import java.nio.Buffer;
import java.nio.ByteBuffer;
import java.nio.FloatBuffer;
import java.nio.IntBuffer;
import java.nio.ShortBuffer;
import org.teavm.jso.JSBody;
import org.teavm.jso.typedarrays.ArrayBuffer;
import org.teavm.jso.typedarrays.ArrayBufferView;
import org.teavm.jso.typedarrays.Float32Array;
import org.teavm.jso.typedarrays.Int16Array;
import org.teavm.jso.typedarrays.Int32Array;
import org.teavm.jso.typedarrays.Int8Array;
import org.teavm.jso.typedarrays.Uint16Array;
import org.teavm.jso.typedarrays.Uint8Array;
import org.teavm.jso.typedarrays.Uint8ClampedArray;

/**
 * @author xpenatan
 */
public class TypedArrays {

    public static Float32ArrayWrapper createFloat32Array(int length) {
        Float32Array create = Float32Array.create(length);
        return (Float32ArrayWrapper)create;
    }

    public static Float32ArrayWrapper createFloat32Array(ArrayBufferWrapper buffer) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        Float32Array create = Float32Array.create(arrayBuffer);
        return (Float32ArrayWrapper)create;
    }

    public static Float32ArrayWrapper createFloat32Array(ArrayBufferWrapper buffer, int offset) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        Float32Array create = Float32Array.create(arrayBuffer, offset);
        return (Float32ArrayWrapper)create;
    }

    public static Float32ArrayWrapper createFloat32Array(ArrayBufferWrapper buffer, int offset, int length) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        Float32Array create = Float32Array.create(arrayBuffer, offset, length);
        return (Float32ArrayWrapper)create;
    }

    public static Int32ArrayWrapper createInt32Array(int length) {
        Int32Array create = Int32Array.create(length);
        return (Int32ArrayWrapper)create;
    }

    public static Int32ArrayWrapper createInt32Array(ArrayBufferWrapper buffer) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        Int32Array create = Int32Array.create(arrayBuffer);
        return (Int32ArrayWrapper)create;
    }

    public static Int32ArrayWrapper createInt32Array(ArrayBufferWrapper buffer, int offset) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        Int32Array create = Int32Array.create(arrayBuffer, offset);
        return (Int32ArrayWrapper)create;
    }

    public static Int32ArrayWrapper createInt32Array(ArrayBufferWrapper buffer, int offset, int length) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        Int32Array create = Int32Array.create(arrayBuffer, offset, length);
        return (Int32ArrayWrapper)create;
    }

    public static Int16ArrayWrapper createInt16Array(int length) {
        Int16Array create = Int16Array.create(length);
        return (Int16ArrayWrapper)create;
    }

    public static Int16ArrayWrapper createInt16Array(ArrayBufferWrapper buffer) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        Int16Array create = Int16Array.create(arrayBuffer);
        return (Int16ArrayWrapper)create;
    }

    public static Int16ArrayWrapper createInt16Array(ArrayBufferWrapper buffer, int offset) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        Int16Array create = Int16Array.create(arrayBuffer, offset);
        return (Int16ArrayWrapper)create;
    }

    public static Int16ArrayWrapper createInt16Array(ArrayBufferWrapper buffer, int offset, int length) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        Int16Array create = Int16Array.create(arrayBuffer, offset, length);
        return (Int16ArrayWrapper)create;
    }

    public static Int8ArrayWrapper createInt8Array(int length) {
        Int8Array create = Int8Array.create(length);
        return (Int8ArrayWrapper)create;
    }

    public static Int8ArrayWrapper createInt8Array(ArrayBufferWrapper buffer) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        Int8Array create = Int8Array.create(arrayBuffer);
        return (Int8ArrayWrapper)create;
    }

    public static Int8ArrayWrapper createInt8Array(ArrayBufferWrapper buffer, int offset) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        Int8Array create = Int8Array.create(arrayBuffer, offset);
        return (Int8ArrayWrapper)create;
    }

    public static Int8ArrayWrapper createInt8Array(ArrayBufferWrapper buffer, int offset, int length) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        Int8Array create = Int8Array.create(arrayBuffer, offset, length);
        return (Int8ArrayWrapper)create;
    }

    public static Uint8ClampedArrayWrapper createUint8ClampedArray(ArrayBufferWrapper buffer) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        return (Uint8ClampedArrayWrapper)Uint8ClampedArray.create(arrayBuffer);
    }

    public static Uint8ClampedArrayWrapper createUint8ClampedArray(ArrayBufferWrapper buffer, int offset) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        return (Uint8ClampedArrayWrapper)Uint8ClampedArray.create(arrayBuffer, offset);
    }

    public static Uint8ClampedArrayWrapper createUint8ClampedArray(ArrayBufferWrapper buffer, int offset, int length) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        return (Uint8ClampedArrayWrapper)Uint8ClampedArray.create(arrayBuffer, offset, length);
    }

    public static Uint8ArrayWrapper createUint8Array(int length) {
        Uint8Array create = Uint8Array.create(length);
        return (Uint8ArrayWrapper)create;
    }

    public static Uint8ArrayWrapper createUint8Array(ArrayBufferWrapper buffer, int offset) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        return (Uint8ArrayWrapper)Uint8Array.create(arrayBuffer, offset);
    }

    public static Uint8ArrayWrapper createUint8Array(ArrayBufferWrapper buffer, int offset, int length) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        return (Uint8ArrayWrapper)Uint8Array.create(arrayBuffer, offset, length);
    }

    public static Uint16ArrayWrapper createUint16Array(int length) {
        Uint16Array create = Uint16Array.create(length);
        return (Uint16ArrayWrapper)create;
    }

    public static Uint8ArrayWrapper createUint16Array(ArrayBufferWrapper buffer, int offset) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        return (Uint8ArrayWrapper)Uint16Array.create(arrayBuffer, offset);
    }

    public static Uint16ArrayWrapper createUint16Array(ArrayBufferWrapper buffer, int offset, int length) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        return (Uint16ArrayWrapper)Uint16Array.create(arrayBuffer, offset, length);
    }

    public static Uint32ArrayWrapper createUint32Array(int length) {
        return Uint32ArrayWrapper.create(length);
    }

    public static Uint32ArrayWrapper createUFloat32Array(int length) {
        return Uint32ArrayWrapper.create(length);
    }

    public static Uint32ArrayWrapper createUint32Array(ArrayBufferWrapper buffer, int offset, int length) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        return Uint32ArrayWrapper.create(arrayBuffer, offset, length);
    }


    // Obtain the array reference from ArrayBufferView
    public static byte[] toByteArray(ArrayBufferViewWrapper array) {
        Int8Array intArray = new Int8Array((ArrayBufferView)array);
        int length = intArray.getLength();
        byte[] newByte = new byte[length];

        for(int i = 0; i < length; i++) {
            newByte[i] = intArray.get(i);
        }
        return newByte;

//        byte[] byteArray = TypedArrays.toByteArrayInternal(array);
//        return byteArray;
    }

    public static ArrayBufferViewWrapper getTypedArray(boolean isUnsigned, Buffer buffer) {
        if(buffer instanceof ByteBuffer) {
            if(isUnsigned) {
                return getUTypedArray((ByteBuffer)buffer);
            }
            else {
                return getTypedArray((ByteBuffer)buffer);
            }
        }
        else if(buffer instanceof ShortBuffer) {
            if(isUnsigned) {
                return getUTypedArray((ShortBuffer)buffer);
            }
            else {
                return getTypedArray((ShortBuffer)buffer);
            }
        }
        else if(buffer instanceof IntBuffer) {
            return getTypedArray((IntBuffer)buffer);
        }
        else if(buffer instanceof FloatBuffer) {
            return getTypedArray((FloatBuffer)buffer);
        }
        throw new GdxRuntimeException("No support for buffer " + buffer.getClass());
    }

    public static Int8ArrayWrapper getTypedArray(ByteBuffer buffer) {
//        byte[] array = buffer.array();
//        int remaining = array.length;
//
//        Int8ArrayWrapper typedArray = createInt8Array(remaining);
//        for(int i = 0; i < remaining; i++) {
//            typedArray.set(i, array[i]);
//        }
//        return typedArray;
//        int byteOffset = arrayBuffer.getByteOffset() + buffer.position();
//        int remaining = buffer.remaining();
//        arrayBuffer = TypedArrays.createUint8Array(arrayBuffer.getBuffer(), byteOffset, remaining);

//        if(buffer instanceof HasArrayBufferView) {
//            return (Int8ArrayWrapper)((HasArrayBufferView)buffer).getArrayBufferView();
//        }
//        else {
//            throw new GdxRuntimeException("Buffer should have ArrayBufferView interface");
//        }

        Int8ArrayWrapper typeArray = TypedArrays.createInt8Array(buffer.remaining());
        for(int i = buffer.position(), j = 0; i < buffer.limit(); i++, j++) {
            typeArray.set(j, buffer.get(i));
        }
        return typeArray.subarray(0, buffer.remaining());
    }

    public static Uint8ArrayWrapper getUTypedArray(ByteBuffer buffer) {
//        byte[] array = buffer.array();
//        Int8Array jsArray = new Int8Array(array.length);
//        for(int i = 0; i < array.length; i++) {
//            byte value = array[i];
//            jsArray.set(i, value);
//        }
//        return (ArrayBufferViewWrapper)jsArray;


//        if(buffer instanceof HasArrayBufferView) {
//            return (Int8ArrayWrapper)((HasArrayBufferView)buffer).getArrayBufferView();
//        }
//        else {
//            throw new GdxRuntimeException("Buffer should have ArrayBufferView interface");
//        }

        Uint8ArrayWrapper typeArray = TypedArrays.createUint8Array(buffer.remaining());
        for(int i = buffer.position(), j = 0; i < buffer.limit(); i++, j++) {
            typeArray.set(j, buffer.get(i));
        }
        return typeArray.subarray(0, buffer.remaining());
    }

    public static Int16ArrayWrapper getTypedArray(ShortBuffer buffer) {
//        int position = buffer.position();
//        int remaining = buffer.remaining();
//        short[] array = buffer.array();
//        Int16ArrayWrapper typedArray = createInt16Array(remaining);
//        for(int i = 0; i < remaining; i++) {
//            int pos = position;
//            position++;
//            typedArray.set(i, array[pos]);
//        }
//        return typedArray;

//        if(buffer instanceof HasArrayBufferView) {
//            return (Int16ArrayWrapper)((HasArrayBufferView)buffer).getArrayBufferView();
//        }
//        else {
//            throw new GdxRuntimeException("Buffer should have ArrayBufferView interface");
//        }

        Int16ArrayWrapper typeArray = TypedArrays.createInt16Array(buffer.remaining());
        for(int i = buffer.position(), j = 0; i < buffer.limit(); i++, j++) {
            typeArray.set(j, buffer.get(i));
        }
        return typeArray.subarray(0, buffer.remaining());
    }

    public static Uint16ArrayWrapper getUTypedArray(ShortBuffer buffer) {
//        short[] array = buffer.array();
//        Uint16ArrayWrapper typedArray = createUint16Array(array.length);
//        for(int i = 0; i < array.length; i++) {
//            typedArray.set(i, array[i]);
//        }
//        return typedArray;

        Uint16ArrayWrapper typeArray = TypedArrays.createUint16Array(buffer.remaining());
        for(int i = buffer.position(), j = 0; i < buffer.limit(); i++, j++) {
            typeArray.set(j, buffer.get(i));
        }
        return typeArray.subarray(0, buffer.remaining());
    }

    public static Int32ArrayWrapper getTypedArray(IntBuffer buffer) {
//        int position = buffer.position();
//        int remaining = buffer.remaining();
//        int[] array = buffer.array();
//        Int32ArrayWrapper typedArray = createInt32Array(remaining);
//        for(int i = 0; i < remaining; i++) {
//            int pos = position;
//            position++;
//            typedArray.set(i, array[pos]);
//        }
//        return typedArray;

//        if(buffer instanceof HasArrayBufferView) {
//            return (Int32ArrayWrapper)((HasArrayBufferView)buffer).getArrayBufferView();
//        }
//        else {
//            throw new GdxRuntimeException("Buffer should have ArrayBufferView interface");
//        }

        Int32ArrayWrapper typeArray = TypedArrays.createInt32Array(buffer.remaining());
        for(int i = buffer.position(), j = 0; i < buffer.limit(); i++, j++) {
            typeArray.set(j, buffer.get(i));
        }
        return typeArray.subarray(0, buffer.remaining());
    }

    public static Float32ArrayWrapper getTypedArray(FloatBuffer buffer) {
//        int position = buffer.position();
//        int remaining = buffer.remaining();
//        float[] array = buffer.array();
//        Float32ArrayWrapper typedArray = createFloat32Array(remaining);
//        for(int i = 0; i < remaining; i++) {
//            int pos = position;
//            position++;
//            typedArray.set(i, array[pos]);
//        }
//        return typedArray;
//        if(buffer instanceof HasArrayBufferView) {
//            return (Float32ArrayWrapper)((HasArrayBufferView)buffer).getArrayBufferView();
//        }
//        else {
//            throw new GdxRuntimeException("Buffer should have ArrayBufferView interface");
//        }

        Float32ArrayWrapper typeArray = TypedArrays.createFloat32Array(buffer.remaining());
        for(int i = buffer.position(), j = 0; i < buffer.limit(); i++, j++) {
            typeArray.set(j, buffer.get(i));
        }
        return typeArray.subarray(0, buffer.remaining());
    }

    @JSBody(params = { "array" }, script = "return array;")
    private static native byte[] toByteArrayInternal(ArrayBufferViewWrapper array);

    @JSBody(params = {"buffer"}, script = "" +
            "return buffer;")
    public static native Int8Array getTypedByteArray(byte[] buffer);
}
