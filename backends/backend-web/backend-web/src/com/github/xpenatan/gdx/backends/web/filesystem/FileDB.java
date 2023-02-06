package com.github.xpenatan.gdx.backends.web.filesystem;

import com.badlogic.gdx.Files;
import com.badlogic.gdx.files.FileHandle;
import com.badlogic.gdx.utils.GdxRuntimeException;
import com.github.xpenatan.gdx.backends.web.WebFileHandle;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

/**
 * DB to handle local files (load and save). E.g. via JS local storage (ca. 5MB) or the Indexed DB (ca. 50MB)
 *
 * @author noblemaster
 */
public abstract class FileDB {

  /** The singleton instance as we only have one file system DB. */
  private static FileDB INSTANCE = null;


  protected FileDB() {
    // hiding the constructor
  }

  public static FileDB getInstance() {
    if (INSTANCE == null) {
      INSTANCE = new FileDBManager();
    }
    return INSTANCE;
  }

  public abstract InputStream read(WebFileHandle file);

  public final OutputStream write(WebFileHandle file, boolean append) {
    // buffer for writing
    ByteArrayOutputStream buffer = new ByteArrayOutputStream(512);

    // append as needed (we read the existing content)
    if (append) {
      InputStream input = null;
      try {
        input = read(file);
        int b;
        while ((b = input.read()) >= 0) {
          buffer.write(b);
        }
      }
      catch (Exception e) {
        throw new GdxRuntimeException("Error appending to file.", e);
      }
      finally {
        if (input != null) {
          try {
            input.close();
          }
          catch (Exception e) {
            // ignored...
          }
        }
      }
    }

    // wrap output stream so we get notified when we are done writing
    return new OutputStream() {
      @Override
      public void write(int b) throws IOException {
        buffer.write(b);
      }
      @Override
      public void close() throws IOException {
        super.close();

        // store the data now
        writeInternal(file, buffer.toByteArray());
      }
    };
  }

  /** Notifies when data has been written for a file. */
  protected abstract void writeInternal(WebFileHandle file, byte[] data);

  public final FileHandle[] list(WebFileHandle file) {
    // convert paths to file handles
    String[] paths = paths(file);
    FileHandle[] files = new FileHandle[paths.length];
    for (int i = 0; i < paths.length; i++) {
      String path = paths[i];
      if ((path.length() > 0) && (path.charAt(path.length() - 1) == '/')) {
        path = path.substring(0, path.length() - 1);
      }
      files[i] = new WebFileHandle(null, paths[i], Files.FileType.Local);
    }
    return files;
  }

  /** Returns all the paths. */
  protected abstract String[] paths(WebFileHandle file);

  public final FileHandle[] list(WebFileHandle file, FileFilter filter) {
    // TeaVM: doesn't support 'File'
    throw new GdxRuntimeException("File filtering not supported.");
  }

  public final FileHandle[] list(WebFileHandle file, FilenameFilter filter) {
    // TeaVM: doesn't support 'File'
    throw new GdxRuntimeException("File filtering not supported.");
  }

  public final FileHandle[] list(WebFileHandle file, String suffix) {
    FileHandle[] list = list(file);
    List<FileHandle> filtered = new ArrayList<FileHandle>(list.length);
    for (FileHandle f: list) {
      if (file.path().endsWith(suffix)) {
        filtered.add(f);
      }
    }
    return filtered.toArray(new FileHandle[filtered.size()]);
  }

  public abstract boolean isDirectory(WebFileHandle file);

  public abstract void mkdirs(WebFileHandle file);

  public abstract boolean exists(WebFileHandle file);

  public abstract boolean delete(WebFileHandle file);

  public abstract long length(WebFileHandle file);
}
