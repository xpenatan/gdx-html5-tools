/*******************************************************************************
 * Copyright 2015 See AUTHORS file.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/

package com.github.xpenatan.gdx.examples.profile;

import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.graphics.GL20;
import com.badlogic.gdx.graphics.GL30;
import com.badlogic.gdx.math.FloatCounter;
import com.badlogic.gdx.utils.ObjectIntMap;

public abstract class XGLInterceptor implements GL20 {

    protected GL20 gl20;
    protected GL30 gl30;

    protected int calls;
    protected int textureBindings;
    protected int drawCalls;
    protected int shaderSwitches;
    protected final FloatCounter vertexCount = new FloatCounter(0);

    protected XGLProfiler glProfiler;

    protected ObjectIntMap<String> counter = new ObjectIntMap<>();

    protected XGLInterceptor(XGLProfiler profiler) {
        this.glProfiler = profiler;
    }

    public void begin() {
        if(Gdx.gl30 != null) {
            this.gl30 = Gdx.gl30;
            Gdx.gl30 = (GL30)this;
        }
        else {
            this.gl20 = Gdx.gl20;
            Gdx.gl20 = this;
        }
        Gdx.gl = this;
    }

    public void end() {
        if(this.gl30 != null) {
            Gdx.gl = this.gl30;
            Gdx.gl30 = this.gl30;
        }
        else {
            Gdx.gl = this.gl20;
            Gdx.gl20 = this.gl20;
        }
    }

    public static String resolveErrorNumber(int error) {
        switch(error) {
            case GL_INVALID_VALUE:
                return "GL_INVALID_VALUE";
            case GL_INVALID_OPERATION:
                return "GL_INVALID_OPERATION";
            case GL_INVALID_FRAMEBUFFER_OPERATION:
                return "GL_INVALID_FRAMEBUFFER_OPERATION";
            case GL_INVALID_ENUM:
                return "GL_INVALID_ENUM";
            case GL_OUT_OF_MEMORY:
                return "GL_OUT_OF_MEMORY";
            default:
                return "number " + error;
        }
    }

    public int getCalls() {
        return calls;
    }

    public ObjectIntMap<String> getCounter() {
        return counter;
    }

    public int getTextureBindings() {
        return textureBindings;
    }

    public int getDrawCalls() {
        return drawCalls;
    }

    public int getShaderSwitches() {
        return shaderSwitches;
    }

    public FloatCounter getVertexCount() {
        return vertexCount;
    }

    public void reset() {
        counter.clear();
        calls = 0;
        textureBindings = 0;
        drawCalls = 0;
        shaderSwitches = 0;
        vertexCount.reset();
    }

    public void addCounter(String methodName) {
        int value = counter.get(methodName, 0);
        value++;
        counter.put(methodName, value);
    }
}
