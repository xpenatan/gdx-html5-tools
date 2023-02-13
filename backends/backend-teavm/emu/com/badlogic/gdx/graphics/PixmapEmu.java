package com.badlogic.gdx.graphics;

import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.files.FileHandle;
import com.badlogic.gdx.utils.BufferUtils;
import com.badlogic.gdx.utils.Disposable;
import com.badlogic.gdx.utils.GdxRuntimeException;
import com.github.xpenatan.gdx.backends.teavm.AssetLoaderListener;
import com.github.xpenatan.gdx.backends.teavm.TeaFileHandle;
import com.github.xpenatan.gdx.backends.teavm.dom.CanvasRenderingContext2DWrapper;
import com.github.xpenatan.gdx.backends.teavm.dom.DocumentWrapper;
import com.github.xpenatan.gdx.backends.teavm.dom.ElementWrapper;
import com.github.xpenatan.gdx.backends.teavm.dom.HTMLCanvasElementWrapper;
import com.github.xpenatan.gdx.backends.teavm.dom.HTMLImageElementWrapper;
import com.github.xpenatan.gdx.backends.teavm.dom.HTMLVideoElementWrapper;
import com.github.xpenatan.gdx.backends.teavm.dom.ImageDataWrapper;
import com.github.xpenatan.gdx.backends.teavm.dom.WindowWrapper;
import com.github.xpenatan.gdx.backends.teavm.dom.impl.TeaWindow;
import com.github.xpenatan.gdx.backends.teavm.dom.typedarray.Uint8ClampedArrayWrapper;
import com.github.xpenatan.gdx.backends.teavm.gen.Emulate;
import com.github.xpenatan.gdx.backends.teavm.preloader.AssetDownloader;
import com.github.xpenatan.gdx.backends.teavm.preloader.AssetType;
import com.github.xpenatan.gdx.backends.teavm.util.TeaJSHelper;
import java.nio.ByteBuffer;
import java.util.HashMap;
import java.util.Map;

@Emulate(Pixmap.class)
public class PixmapEmu implements Disposable {
    public static Map<Integer, PixmapEmu> pixmaps = new HashMap<Integer, PixmapEmu>();
    static int nextId = 0;

    public static PixmapEmu createFromFrameBuffer(int x, int y, int w, int h) {
        Gdx.gl.glPixelStorei(GL20.GL_PACK_ALIGNMENT, 1);

        final PixmapEmu pixmap = new PixmapEmu(w, h, Pixmap.Format.RGBA8888);
        ByteBuffer pixels = BufferUtils.newByteBuffer(h * w * 4);
        Gdx.gl.glReadPixels(x, y, w, h, GL20.GL_RGBA, GL20.GL_UNSIGNED_BYTE, pixels);
        pixmap.setPixels(pixels);
        return pixmap;
    }

    @Emulate(Pixmap.Format.class)
    public enum FormatEmu {
        Alpha, Intensity, LuminanceAlpha, RGB565, RGBA4444, RGB888, RGBA8888;

        public static int toGlFormat(FormatEmu format) {
            if(format == Alpha) return GL20.GL_ALPHA;
            if(format == Intensity) return GL20.GL_ALPHA;
            if(format == LuminanceAlpha) return GL20.GL_LUMINANCE_ALPHA;
            if(format == RGB565) return GL20.GL_RGB;
            if(format == RGB888) return GL20.GL_RGB;
            if(format == RGBA4444) return GL20.GL_RGBA;
            if(format == RGBA8888) return GL20.GL_RGBA;
            throw new GdxRuntimeException("unknown format: " + format);
        }

        public static int toGlType(FormatEmu format) {
            if(format == Alpha) return GL20.GL_UNSIGNED_BYTE;
            if(format == Intensity) return GL20.GL_UNSIGNED_BYTE;
            if(format == LuminanceAlpha) return GL20.GL_UNSIGNED_BYTE;
            if(format == RGB565) return GL20.GL_UNSIGNED_SHORT_5_6_5;
            if(format == RGB888) return GL20.GL_UNSIGNED_BYTE;
            if(format == RGBA4444) return GL20.GL_UNSIGNED_SHORT_4_4_4_4;
            if(format == RGBA8888) return GL20.GL_UNSIGNED_BYTE;
            throw new GdxRuntimeException("unknown format: " + format);
        }
    }

    int testVar;
    int width;
    int height;
    Pixmap.Format format;
    HTMLCanvasElementWrapper canvas;
    CanvasRenderingContext2DWrapper context;
    int id;
    ByteBuffer buffer;
    int r = 255, g = 255, b = 255;
    float a;
    String color = make(r, g, b, a);
    static String clearColor = make(255, 255, 255, 1.0f);
    Pixmap.Blending blending = Pixmap.Blending.SourceOver;
    Pixmap.Filter filter = Pixmap.Filter.BiLinear;
    public Uint8ClampedArrayWrapper pixels;
    private HTMLImageElementWrapper imageElement;
    private HTMLVideoElementWrapper videoElement;

    public static void downloadFromUrl(String url, final DownloadPixmapResponseListenerEmu responseListener) {
        AssetDownloader.getInstance().load(true, url, AssetType.Image, null, new AssetLoaderListener<HTMLImageElementWrapper>() {
            @Override
            public void onFailure(String url) {
                responseListener.downloadFailed(new Exception("Failed to download image"));
            }

            @Override
            public boolean onSuccess(String url, HTMLImageElementWrapper result) {
                responseListener.downloadComplete(new PixmapEmu(result));
                return false;
            }
        });
    }

    public PixmapEmu(FileHandle file) {
        TeaFileHandle webFileHandler = (TeaFileHandle)file;
        String path = webFileHandler.path();
        Object object = webFileHandler.preloader.images.get(path);
        HTMLImageElementWrapper htmlImageElement = (HTMLImageElementWrapper)object;
        initPixmapEmu(-1, -1, htmlImageElement, null);
        if(imageElement == null)
            throw new GdxRuntimeException("Couldn't load image '" + file.path() + "', file does not exist");
    }

    public PixmapEmu(HTMLImageElementWrapper img) {
        this(-1, -1, img);
    }

    public PixmapEmu(HTMLVideoElementWrapper vid) {
        this(-1, -1, vid);
    }

    public PixmapEmu(int width, int height, Pixmap.Format format) {
        initPixmapEmu(width, height, null, null);
    }

    private PixmapEmu(int width, int height, HTMLImageElementWrapper imageElement) {
        initPixmapEmu(width, height, imageElement, null);
    }

    private PixmapEmu(int width, int height, HTMLVideoElementWrapper videoElement) {
        initPixmapEmu(width, height, null, videoElement);
    }

    private void initPixmapEmu(int width, int height, HTMLImageElementWrapper imageElement, HTMLVideoElementWrapper videoElement) {
        if(videoElement != null) {
            this.videoElement = videoElement;
            this.width = videoElement.getWidth();
            this.height = videoElement.getHeight();
        }
        else if(imageElement != null) {
            this.imageElement = imageElement;
            this.width = imageElement.getWidth();
            this.height = imageElement.getHeight();
        }
        else {
            this.width = width;
            this.height = height;
        }

        this.format = Pixmap.Format.RGBA8888;
        buffer = BufferUtils.newByteBuffer(4);
        id = nextId++;
        buffer.putInt(0, id);
        pixmaps.put(id, this);

        int size = pixmaps.size();
        testVar = size;
    }

    private void create() {
        TeaWindow window = TeaWindow.get();
        DocumentWrapper document = window.getDocument();
        ElementWrapper createElement = document.createElement("canvas");
        canvas = (HTMLCanvasElementWrapper)createElement;
        canvas.setWidth(width);
        canvas.setHeight(height);
        context = (CanvasRenderingContext2DWrapper)canvas.getContext("2d");
        context.setGlobalCompositeOperation(getComposite().toString());
    }

    public CanvasRenderingContext2DWrapper getContext() {
        ensureCanvasExists();
        return context;
    }

    private static Composite getComposite() {
        return Composite.SOURCE_OVER;
    }

    public static String make(int r2, int g2, int b2, float a2) {
        return "rgba(" + r2 + "," + g2 + "," + b2 + "," + a2 + ")";
    }

    public void setBlending(Pixmap.Blending blending) {
        this.blending = blending;
        this.ensureCanvasExists();
        this.context.setGlobalCompositeOperation(getComposite().toString());
    }

    public Pixmap.Blending getBlending() {
        return blending;
    }

    public void setFilter(Pixmap.Filter filter) {
        this.filter = filter;
    }

    public Pixmap.Filter getFilter() {
        return filter;
    }

    public Pixmap.Format getFormat() {
        return format;
    }

    public int getGLInternalFormat() {
        return GL20.GL_RGBA;
    }

    public int getGLFormat() {
        return GL20.GL_RGBA;
    }

    public int getGLType() {
        return GL20.GL_UNSIGNED_BYTE;
    }

    public int getWidth() {
        return width;
    }

    public int getHeight() {
        return height;
    }

    public ByteBuffer getPixels() {
        return buffer;
    }

    public void setPixels(ByteBuffer pixels) {
        if(width == 0 || height == 0) return;
        CanvasRenderingContext2DWrapper context = getContext();
        ImageDataWrapper imgData = context.createImageData(width, height);
        Uint8ClampedArrayWrapper data = imgData.getData();
        byte[] pixelsArray = pixels.array();
        for(int i = 0, len = width * height * 4; i < len; i++) {
            data.set(i, (byte)(pixelsArray[i] & 0xff));
        }
        context.putImageData(imgData, 0, 0);
    }

    @Override
    public void dispose() {
        pixmaps.remove(id);
    }

    public HTMLCanvasElementWrapper getCanvasElement() {
        ensureCanvasExists();
        return canvas;
    }

    private void ensureCanvasExists() {
        if(canvas == null) {
            create();
            if(imageElement != null) {
                context.setGlobalCompositeOperation(Composite.COPY.getValue());
                context.drawImage(imageElement, 0, 0);
                context.setGlobalCompositeOperation(getComposite().getValue());
            }
            if(videoElement != null) {
                context.setGlobalCompositeOperation(Composite.COPY.getValue());
                context.drawImage(videoElement, 0, 0);
                context.setGlobalCompositeOperation(getComposite().getValue());
            }
        }
    }

    public boolean canUseImageElement() {
        return canvas == null && imageElement != null;
    }

    public HTMLImageElementWrapper getImageElement() {
        return imageElement;
    }

    public boolean canUseVideoElement() {
        return canvas == null && videoElement != null;
    }

    public HTMLVideoElementWrapper getVideoElement() {
        return videoElement;
    }

    /**
     * Sets the color for the following drawing operations
     *
     * @param color the color, encoded as RGBA8888
     */
    public void setColor(int color) {
        ensureCanvasExists();
        r = (color >>> 24) & 0xff;
        g = (color >>> 16) & 0xff;
        b = (color >>> 8) & 0xff;
        a = (color & 0xff) / 255f;
        this.color = make(r, g, b, a);
        context.setFillStyle(this.color);
        context.setStrokeStyle(this.color);
    }

    /**
     * Sets the color for the following drawing operations.
     *
     * @param r The red component.
     * @param g The green component.
     * @param b The blue component.
     * @param a The alpha component.
     */
    public void setColor(float r, float g, float b, float a) {
        ensureCanvasExists();
        this.r = (int)(r * 255);
        this.g = (int)(g * 255);
        this.b = (int)(b * 255);
        this.a = a;
        color = make(this.r, this.g, this.b, this.a);
        context.setFillStyle(color);
        context.setStrokeStyle(this.color);
    }

    /**
     * Sets the color for the following drawing operations.
     *
     * @param color The color.
     */
    public void setColor(Color color) {
        setColor(color.r, color.g, color.b, color.a);
    }

    /**
     * Fills the complete bitmap with the currently set color.
     */
    public void fill() {
        ensureCanvasExists();
        context.clearRect(0, 0, getWidth(), getHeight());
        rectangle(0, 0, getWidth(), getHeight(), DrawType.FILL);
    }

// /**
// * Sets the width in pixels of strokes.
// *
// * @param width The stroke width in pixels.
// */
// public void setStrokeWidth (int width);

    /**
     * Draws a line between the given coordinates using the currently set color.
     *
     * @param x  The x-coodinate of the first point
     * @param y  The y-coordinate of the first point
     * @param x2 The x-coordinate of the first point
     * @param y2 The y-coordinate of the first point
     */
    public void drawLine(int x, int y, int x2, int y2) {
        line(x, y, x2, y2, DrawType.STROKE);
    }

    /**
     * Draws a rectangle outline starting at x, y extending by width to the right and by height downwards (y-axis points downwards)
     * using the current color.
     *
     * @param x      The x coordinate
     * @param y      The y coordinate
     * @param width  The width in pixels
     * @param height The height in pixels
     */
    public void drawRectangle(int x, int y, int width, int height) {
        rectangle(x, y, width, height, DrawType.STROKE);
    }

    /**
     * Draws an area form another Pixmap to this Pixmap.
     *
     * @param pixmap The other Pixmap
     * @param x      The target x-coordinate (top left corner)
     * @param y      The target y-coordinate (top left corner)
     */
    public void drawPixmap(PixmapEmu pixmap, int x, int y) {
        HTMLCanvasElementWrapper image = pixmap.getCanvasElement();
        image(image, 0, 0, image.getWidth(), image.getHeight(), x, y, image.getWidth(), image.getHeight());
    }

    public void drawPixmap(PixmapEmu pixmap, int x, int y, int srcx, int srcy, int srcWidth, int srcHeight) {
        HTMLCanvasElementWrapper image = pixmap.getCanvasElement();
        image(image, srcx, srcy, srcWidth, srcHeight, x, y, srcWidth, srcHeight);
    }

    public void drawPixmap(PixmapEmu pixmap, int srcx, int srcy, int srcWidth, int srcHeight, int dstx, int dsty, int dstWidth,
                           int dstHeight) {
        image(pixmap.getCanvasElement(), srcx, srcy, srcWidth, srcHeight, dstx, dsty, dstWidth, dstHeight);
    }

    public void fillRectangle(int x, int y, int width, int height) {
        rectangle(x, y, width, height, DrawType.FILL);
    }

    public void drawCircle(int x, int y, int radius) {
        circle(x, y, radius, DrawType.STROKE);
    }

    public void fillCircle(int x, int y, int radius) {
        circle(x, y, radius, DrawType.FILL);
    }

    public void fillTriangle(int x1, int y1, int x2, int y2, int x3, int y3) {
        triangle(x1, y1, x2, y2, x3, y3, DrawType.FILL);
    }

    public int getPixel(int x, int y) {
        ensureCanvasExists();
        if(pixels == null) pixels = context.getImageData(0, 0, width, height).getData();
        int i = x * 4 + y * width * 4;
        int r = pixels.get(i + 0) & 0xff;
        int g = pixels.get(i + 1) & 0xff;
        int b = pixels.get(i + 2) & 0xff;
        int a = pixels.get(i + 3) & 0xff;
        return (r << 24) | (g << 16) | (b << 8) | (a);
    }

    public void drawPixel(int x, int y) {
        rectangle(x, y, 1, 1, DrawType.FILL);
    }

    public void drawPixel(int x, int y, int color) {
        setColor(color);
        drawPixel(x, y);
    }

    private void circle(int x, int y, int radius, DrawType drawType) {
        ensureCanvasExists();
        if(blending == Pixmap.Blending.None) {
            context.setFillStyle(clearColor);
            context.setStrokeStyle(clearColor);
            context.setGlobalCompositeOperation("destination-out");
            context.beginPath();
            context.arc(x, y, radius, 0, 2 * Math.PI, false);
            fillOrStrokePath(drawType);
            context.closePath();
            context.setFillStyle(color);
            context.setStrokeStyle(color);
            context.setGlobalCompositeOperation(Composite.SOURCE_OVER.getValue());
        }
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI, false);
        fillOrStrokePath(drawType);
        context.closePath();
        pixels = null;
    }

    private void line(int x, int y, int x2, int y2, DrawType drawType) {
        ensureCanvasExists();
        if(blending == Pixmap.Blending.None) {
            context.setFillStyle(clearColor);
            context.setStrokeStyle(clearColor);
            context.setGlobalCompositeOperation("destination-out");
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(x2, y2);
            fillOrStrokePath(drawType);
            context.closePath();
            context.setFillStyle(color);
            context.setStrokeStyle(color);
            context.setGlobalCompositeOperation(Composite.SOURCE_OVER.getValue());
        }
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x2, y2);
        fillOrStrokePath(drawType);
        context.closePath();
        pixels = null;
    }

    private void rectangle(int x, int y, int width, int height, DrawType drawType) {
        ensureCanvasExists();
        if(blending == Pixmap.Blending.None) {
            context.setFillStyle(clearColor);
            context.setStrokeStyle(clearColor);
            context.setGlobalCompositeOperation("destination-out");
            context.beginPath();
            context.rect(x, y, width, height);
            fillOrStrokePath(drawType);
            context.closePath();
            context.setFillStyle(color);
            context.setStrokeStyle(color);
            context.setGlobalCompositeOperation(Composite.SOURCE_OVER.getValue());
        }
        context.beginPath();
        context.rect(x, y, width, height);
        fillOrStrokePath(drawType);
        context.closePath();
        pixels = null;
    }

    private void triangle(int x1, int y1, int x2, int y2, int x3, int y3, DrawType drawType) {
        ensureCanvasExists();
        if(blending == Pixmap.Blending.None) {
            context.setFillStyle(clearColor);
            context.setStrokeStyle(clearColor);
            context.setGlobalCompositeOperation("destination-out");
            context.beginPath();
            context.moveTo(x1, y1);
            context.lineTo(x2, y2);
            context.lineTo(x3, y3);
            context.lineTo(x1, y1);
            fillOrStrokePath(drawType);
            context.closePath();
            context.setFillStyle(color);
            context.setStrokeStyle(color);
            context.setGlobalCompositeOperation(Composite.SOURCE_OVER.getValue());
        }
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.lineTo(x3, y3);
        context.lineTo(x1, y1);
        fillOrStrokePath(drawType);
        context.closePath();
        pixels = null;
    }

    private void image(HTMLCanvasElementWrapper image, int srcX, int srcY, int srcWidth, int srcHeight, int dstX, int dstY, int dstWidth, int dstHeight) {
        ensureCanvasExists();
        if(blending == Pixmap.Blending.None) {
            context.setFillStyle(clearColor);
            context.setStrokeStyle(clearColor);
            context.setGlobalCompositeOperation("destination-out");
            context.beginPath();
            context.rect(dstX, dstY, dstWidth, dstHeight);
            fillOrStrokePath(DrawType.FILL);
            context.closePath();
            context.setFillStyle(color);
            context.setStrokeStyle(color);
            context.setGlobalCompositeOperation(Composite.SOURCE_OVER.getValue());
        }
        if(srcWidth != 0 && srcHeight != 0 && dstWidth != 0 && dstHeight != 0) {
            context.drawImage(image, srcX, srcY, srcWidth, srcHeight, dstX, dstY, dstWidth, dstHeight);
        }
        pixels = null;
    }

    private void fillOrStrokePath(DrawType drawType) {
        ensureCanvasExists();
        switch(drawType) {
            case FILL:
                context.fill();
                break;
            case STROKE:
                context.stroke();
                break;
        }
    }

    private enum DrawType {
        FILL, STROKE
    }

    @Emulate(Pixmap.DownloadPixmapResponseListener.class)
    public interface DownloadPixmapResponseListenerEmu {
        void downloadComplete(PixmapEmu pixmap);

        void downloadFailed(Throwable t);
    }
}
