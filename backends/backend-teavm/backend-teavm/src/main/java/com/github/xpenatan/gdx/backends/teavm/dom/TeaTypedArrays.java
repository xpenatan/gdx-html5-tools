package com.github.xpenatan.gdx.backends.teavm.dom;

import com.github.xpenatan.gdx.backends.teavm.dom.typedarray.ArrayBufferWrapper;
import com.github.xpenatan.gdx.backends.teavm.dom.typedarray.Float32ArrayWrapper;
import com.github.xpenatan.gdx.backends.teavm.dom.typedarray.Float64ArrayWrapper;
import com.github.xpenatan.gdx.backends.teavm.dom.typedarray.Int16ArrayWrapper;
import com.github.xpenatan.gdx.backends.teavm.dom.typedarray.Int32ArrayWrapper;
import com.github.xpenatan.gdx.backends.teavm.dom.typedarray.Int8ArrayWrapper;
import com.github.xpenatan.gdx.backends.teavm.dom.typedarray.TypedArrays;
import com.github.xpenatan.gdx.backends.teavm.dom.typedarray.Uint8ArrayWrapper;
import org.teavm.jso.typedarrays.ArrayBuffer;
import org.teavm.jso.typedarrays.Float32Array;
import org.teavm.jso.typedarrays.Float64Array;
import org.teavm.jso.typedarrays.Int16Array;
import org.teavm.jso.typedarrays.Int32Array;
import org.teavm.jso.typedarrays.Int8Array;
import org.teavm.jso.typedarrays.Uint8Array;

/**
 * @author xpenatan
 */
public class TeaTypedArrays extends TypedArrays {

    public TeaTypedArrays() {
        TypedArrays.setInstance(this);
    }

    @Override
    public Float32ArrayWrapper createFloat32Array(int length) {
        Float32Array create = Float32Array.create(length);
        return (Float32ArrayWrapper)create;
    }

    @Override
    public Float32ArrayWrapper createFloat32Array(ArrayBufferWrapper buffer) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        Float32Array create = Float32Array.create(arrayBuffer);
        return (Float32ArrayWrapper)create;
    }

    @Override
    public Float32ArrayWrapper createFloat32Array(ArrayBufferWrapper buffer, int offset) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        Float32Array create = Float32Array.create(arrayBuffer, offset);
        return (Float32ArrayWrapper)create;
    }

    @Override
    public Float32ArrayWrapper createFloat32Array(ArrayBufferWrapper buffer, int offset, int length) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        Float32Array create = Float32Array.create(arrayBuffer, offset, length);
        return (Float32ArrayWrapper)create;
    }

    @Override
    public Int32ArrayWrapper createInt32Array(int length) {
        Int32Array create = Int32Array.create(length);
        return (Int32ArrayWrapper)create;
    }

    @Override
    public Int32ArrayWrapper createInt32Array(ArrayBufferWrapper buffer) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        Int32Array create = Int32Array.create(arrayBuffer);
        return (Int32ArrayWrapper)create;
    }

    @Override
    public Int32ArrayWrapper createInt32Array(ArrayBufferWrapper buffer, int offset) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        Int32Array create = Int32Array.create(arrayBuffer, offset);
        return (Int32ArrayWrapper)create;
    }

    @Override
    public Int32ArrayWrapper createInt32Array(ArrayBufferWrapper buffer, int offset, int length) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        Int32Array create = Int32Array.create(arrayBuffer, offset, length);
        return (Int32ArrayWrapper)create;
    }

    @Override
    public Int16ArrayWrapper createInt16Array(int length) {
        Int16Array create = Int16Array.create(length);
        return (Int16ArrayWrapper)create;
    }

    @Override
    public Int16ArrayWrapper createInt16Array(ArrayBufferWrapper buffer) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        Int16Array create = Int16Array.create(arrayBuffer);
        return (Int16ArrayWrapper)create;
    }

    @Override
    public Int16ArrayWrapper createInt16Array(ArrayBufferWrapper buffer, int offset) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        Int16Array create = Int16Array.create(arrayBuffer, offset);
        return (Int16ArrayWrapper)create;
    }

    @Override
    public Int16ArrayWrapper createInt16Array(ArrayBufferWrapper buffer, int offset, int length) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        Int16Array create = Int16Array.create(arrayBuffer, offset, length);
        return (Int16ArrayWrapper)create;
    }

    @Override
    public Int8ArrayWrapper createInt8Array(int length) {
        Int8Array create = Int8Array.create(length);
        return (Int8ArrayWrapper)create;
    }

    @Override
    public Int8ArrayWrapper createInt8Array(ArrayBufferWrapper buffer) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        Int8Array create = Int8Array.create(arrayBuffer);
        return (Int8ArrayWrapper)create;
    }

    @Override
    public Int8ArrayWrapper createInt8Array(ArrayBufferWrapper buffer, int offset) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        Int8Array create = Int8Array.create(arrayBuffer, offset);
        return (Int8ArrayWrapper)create;
    }

    @Override
    public Int8ArrayWrapper createInt8Array(ArrayBufferWrapper buffer, int offset, int length) {
        ArrayBuffer arrayBuffer = (ArrayBuffer)buffer;
        Int8Array create = Int8Array.create(arrayBuffer, offset, length);
        return (Int8ArrayWrapper)create;
    }

    @Override
    public Uint8ArrayWrapper createUint8Array(int length) {
        Uint8Array create = Uint8Array.create(length);
        return (Uint8ArrayWrapper)create;
    }

    @Override
    public Float64ArrayWrapper createFloat64Array(int length) {
        Float64Array create = Float64Array.create(length);
        return (Float64ArrayWrapper)create;
    }
}
