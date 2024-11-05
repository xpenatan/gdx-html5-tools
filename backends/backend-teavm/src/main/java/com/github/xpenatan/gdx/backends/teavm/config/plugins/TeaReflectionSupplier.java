package com.github.xpenatan.gdx.backends.teavm.config.plugins;

import com.github.xpenatan.gdx.backends.teavm.config.TeaBuilder;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

public class TeaReflectionSupplier {

    private static ArrayList<String> clazzList = new ArrayList();

    private static HashSet<String> REFLECTION_CLASSES = new HashSet<>();

    public static void addReflectionClass(Class<?> type) {
        addReflectionClass(type.getName());
    }

    /**
     * package path or package path with class name
     */
    public static void addReflectionClass(String className) {
        if(!clazzList.contains(className)) {
            clazzList.add(className);
        }
    }

    public static List<String> getReflectionClasses() {
        return clazzList;
    }

    public static boolean containsReflection(String className) {
        for(int i = 0; i < clazzList.size(); i++) {
            String reflectionClass = clazzList.get(i);
            if(className.equals(reflectionClass))
                return true;
        }
        return false;
    }

    /**
     * Must be called after TeaBuilder.build
     */
    public static void printReflectionClasses() {
        TeaBuilder.logHeader("REFLECTION CLASSES: " + REFLECTION_CLASSES.size());
        for(String reflectionClass : REFLECTION_CLASSES) {
            TeaBuilder.log(reflectionClass);
        }
        TeaBuilder.logEnd();
    }

    public TeaReflectionSupplier() {
    }
}