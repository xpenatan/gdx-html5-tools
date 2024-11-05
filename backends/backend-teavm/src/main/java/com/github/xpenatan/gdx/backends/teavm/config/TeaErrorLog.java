package com.github.xpenatan.gdx.backends.teavm.config;

import org.teavm.tooling.TeaVMToolLog;

public class TeaErrorLog  implements TeaVMToolLog {
    public StringBuilder sb = new StringBuilder();

    @Override
    public void info(String text) {
        appendLine(text);
    }

    @Override
    public void debug(String text) {
        appendLine(text);
    }

    @Override
    public void warning(String text) {
        appendLine(text);
    }

    @Override
    public void error(String text) {
        appendLine(text);
    }

    @Override
    public void info(String text, Throwable e) {
        appendLine(text);
    }

    @Override
    public void debug(String text, Throwable e) {
        appendLine(text);
    }

    @Override
    public void warning(String text, Throwable e) {
        appendLine(text);
    }

    @Override
    public void error(String text, Throwable e) {
        e.printStackTrace();
    }

    private void appendLine(String text) {
        sb.append(text).append('\n');
    }
}