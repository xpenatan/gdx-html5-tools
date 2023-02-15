package com.github.xpenatan.gdx.backends.teavm.filesystem;

import com.github.xpenatan.gdx.backends.teavm.TeaFileHandle;

import java.io.InputStream;

/**
 * Stores data either in persistent storage or memory.
 *
 * @author noblemaster
 */
public final class FileDBManager extends FileDB {

    /**
     * Persistent local store for smaller files.
     */
    private final FileDBStorage localStorage;
    /**
     * Memory store for larger files. Will be wiped when the page is newly loaded.
     */
    private final FileDBStorage memory;

    FileDBManager() {
        localStorage = new FileDBStorage(new StoreLocal());
        memory = new FileDBStorage(new StoreMemory());
    }

    @Override
    public InputStream read(TeaFileHandle file) {
        if(memory.exists(file)) {
            return memory.read(file);
        }
        else {
            return localStorage.read(file);
        }
    }

    @Override
    protected void writeInternal(TeaFileHandle file, byte[] data, boolean append, int expectedLength) {
        // write larger files into memory: up to 16.384kb into local storage (permanent)
        int localStorageMax = 16384;
        if((data.length >= localStorageMax) || (append && (expectedLength >= localStorageMax))) {
            // write to memory...
            memory.writeInternal(file, data, append, expectedLength);
            localStorage.delete(file);
        }
        else {
            localStorage.writeInternal(file, data, append, expectedLength);
            memory.delete(file);
        }
    }

    @Override
    protected String[] paths(TeaFileHandle file) {
        // combine & return the paths of memory & local storage
        String[] pathsMemory = memory.paths(file);
        String[] pathsLocalStorage = localStorage.paths(file);
        String[] paths = new String[pathsMemory.length + pathsLocalStorage.length];
        System.arraycopy(pathsMemory, 0, paths, 0, pathsMemory.length);
        System.arraycopy(pathsLocalStorage, 0, paths, pathsMemory.length, pathsLocalStorage.length);
        return paths;
    }

    @Override
    public boolean isDirectory(TeaFileHandle file) {
        if(memory.exists(file)) {
            return memory.isDirectory(file);
        }
        else {
            return localStorage.isDirectory(file);
        }
    }

    @Override
    public void mkdirs(TeaFileHandle file) {
        localStorage.mkdirs(file);
    }

    @Override
    public boolean exists(TeaFileHandle file) {
        return memory.exists(file) || localStorage.exists(file);
    }

    @Override
    public boolean delete(TeaFileHandle file) {
        if(memory.exists(file)) {
            return memory.delete(file);
        }
        else {
            return localStorage.delete(file);
        }
    }

    @Override
    public long length(TeaFileHandle file) {
        if(memory.exists(file)) {
            return memory.length(file);
        }
        else {
            return localStorage.length(file);
        }
    }

    @Override
    public void rename(TeaFileHandle source, TeaFileHandle target) {
        if(memory.exists(source)) {
            memory.rename(source, target);
        }
        else {
            localStorage.rename(source, target);
        }
    }
}
