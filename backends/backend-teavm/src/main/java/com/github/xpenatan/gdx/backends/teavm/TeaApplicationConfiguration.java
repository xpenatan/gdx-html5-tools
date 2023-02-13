package com.github.xpenatan.gdx.backends.teavm;

import com.github.xpenatan.gdx.backends.teavm.dom.TeaTypedArrays;
import com.github.xpenatan.gdx.backends.teavm.dom.TeaWebAgent;
import com.github.xpenatan.gdx.backends.teavm.dom.impl.TeaWindow;
import com.github.xpenatan.gdx.backends.teavm.dom.DocumentWrapper;
import com.github.xpenatan.gdx.backends.teavm.dom.HTMLCanvasElementWrapper;
import com.github.xpenatan.gdx.backends.teavm.dom.HTMLElementWrapper;
import com.github.xpenatan.gdx.backends.teavm.util.TeaJSHelper;
import com.github.xpenatan.gdx.backends.teavm.util.WebJSHelper;

/**
 * @author xpenatan
 */
public class TeaApplicationConfiguration extends WebApplicationConfiguration {
    private WebJSHelper jsHelper;

    public TeaApplicationConfiguration(String canvasID) {
        TeaWindow window = new TeaWindow();
        DocumentWrapper document = window.getDocument();
        WebAgentInfo agentInfo = TeaWebAgent.computeAgentInfo();
        HTMLElementWrapper elementID = document.getElementById(canvasID);
        HTMLCanvasElementWrapper htmlCanvasDocument = (HTMLCanvasElementWrapper)elementID;
        jsHelper = new TeaJSHelper(agentInfo, htmlCanvasDocument);
        new TeaTypedArrays();
    }

    @Override
    public WebJSHelper getJSHelper() {
        return jsHelper;
    }
}
