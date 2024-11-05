package com.github.xpenatan.gdx.examples.tests;

import com.badlogic.gdx.ApplicationAdapter;
import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.graphics.Color;
import com.badlogic.gdx.graphics.GL20;
import com.badlogic.gdx.math.FloatCounter;
import com.badlogic.gdx.math.Matrix4;
import com.badlogic.gdx.math.Vector2;
import com.badlogic.gdx.math.Vector3;
import com.badlogic.gdx.utils.Array;
import com.badlogic.gdx.utils.Json;
import com.badlogic.gdx.utils.JsonReader;
import com.badlogic.gdx.utils.JsonValue;
import com.badlogic.gdx.utils.ScreenUtils;
import com.badlogic.gdx.utils.SerializationException;
import com.badlogic.gdx.utils.reflect.ArrayReflection;
import com.badlogic.gdx.utils.reflect.ClassReflection;
import com.badlogic.gdx.utils.reflect.Field;
import com.badlogic.gdx.utils.reflect.ReflectionException;

public class ReflectionTest extends ApplicationAdapter {

    private Color color = Color.BLACK;

    @Override
    public void create() {

        color = Color.RED;
        {
            // Test ClassReflection.getField
            Field field;
            try {
                field = ClassReflection.getField(Vector2.class, "x");
                assert (field.getName().equals("x"));
                assert (field.getType() == float.class);
                field = ClassReflection.getField(Vector2.class, "y");
                assert (field.getName().equals("y"));
                assert (field.getType() == float.class);
                field = ClassReflection.getField(FloatCounter.class, "count");
                assert (field.getName().equals("count"));
                assert (field.getType() == int.class);
            } catch(ReflectionException e) {
                throw new RuntimeException(e);
            }
        }
        {
            // Test ClassReflection.getDeclaredFields
            Field[] declaredFields = ClassReflection.getDeclaredFields(Vector3.class);
            try {
                assert (declaredFields.length == 9);
                Field field1 = declaredFields[1];
                assert (field1.getName().equals("x"));
                Field field2 = declaredFields[2];
                assert (field2.getName().equals("y"));
                Field field3 = declaredFields[3];
                assert (field3.getName().equals("z"));
            }
            catch(Throwable t) {
                System.out.println("declaredFields.length: " + declaredFields.length);
                for(int i = 0; i < declaredFields.length; i++) {
                    Field field = declaredFields[i];
                    System.out.println("field1: " + field.getName() + " type: " + field.getType());
                }
                throw new RuntimeException(t);
            }
        }
        {
            // Test ClassReflection.getField
            Vector2 instance = new Vector2();
            instance.x = 30;
            instance.y = 40;
            try {
                Field fieldX = ClassReflection.getField(Vector2.class, "x");
                Float valueX = (Float)fieldX.get(instance);
                assert (valueX == 30);
                Field fieldY = ClassReflection.getField(Vector2.class, "y");
                Float valueY = (Float)fieldY.get(instance);
                assert (valueY == 40);
            } catch(ReflectionException e) {
                throw new RuntimeException(e);
            }
        }
        {
            // Test getElementType
            try {
                Field itemsField = ClassReflection.getField(B.class, "aItems");
                Class elementType = itemsField.getElementType(0);
                Class type = itemsField.getType();
                assert (elementType == A.class);
                assert (type == Array.class);
            } catch(ReflectionException e) {
                throw new RuntimeException(e);
            }
        }

        {
            // Test ClassReflection.forName
            Class type = null;
            String name = null;
            Class forNameType = null;
            try {
                type = Vector3.class;
                name = type.getName();
                forNameType = ClassReflection.forName(name);
                assert (type == forNameType);
                type = Vector2.class;
                name = type.getName();
                forNameType = ClassReflection.forName(name);
                assert (type == forNameType);
            } catch(ReflectionException e) {
                System.out.println("type: " + type);
                System.out.println("name: " + name);
                System.out.println("forNameType: " + forNameType);
                throw new RuntimeException(e);
            }
        }
        {
            // Test ClassReflection.newInstance
            try {
                Vector3 instance = ClassReflection.newInstance(Vector3.class);
                assert (instance != null);
            } catch(ReflectionException e) {
                throw new RuntimeException(e);
            }
            try {
                Object instance = ClassReflection.newInstance(Object.class);
                assert (instance != null);
            } catch(ReflectionException e) {
                throw new RuntimeException(e);
            }
        }
        {
            // Test Array newInstance
            Class<?> cls;
            Class<?> clsType;
            Object matArray = ArrayReflection.newInstance(Matrix4.class, 2);
            assert(matArray != null);
            cls = matArray.getClass();
            clsType = cls.getComponentType();
            assert(cls.getName().equals("[Lcom.badlogic.gdx.math.Matrix4;"));
            assert(clsType.getName().equals("com.badlogic.gdx.math.Matrix4"));

            Object objArray = ArrayReflection.newInstance(Object.class, 3);
            assert(objArray != null);
            cls = objArray.getClass();
            clsType = cls.getComponentType();
            assert(cls.getName().equals("[Ljava.lang.Object;"));
            assert(clsType.getName().equals("java.lang.Object"));
        }

        {
            try {
                // Test Json
                Json json = new Json();
                String jsonStr = "{ \"a\" : \"foo\", \"b\" : 23 }";
                A obj = json.fromJson(A.class, jsonStr);
                assert(obj.a.equals("foo"));
                assert(obj.b == 23);
            }
            catch(Throwable t) {
                throw new RuntimeException(t);
            }
            try {
                // Test Json
                Json json = new Json();
                String a0Str = "{ \"a\" : \"a0str\", \"b\" : 1 }";
                String a1Str = "{ \"a\" : \"a1str\", \"b\" : 2 }";
                String aItemsStr = "[ " + a0Str + "," + a1Str + "]";
                String list = "[ \"item0\", \"item1\" ]";
                String bStr = "{ \"stringItems\" : " + list +", \"aItems\" : " + aItemsStr + "}";
                B obj = json.fromJson(B.class, bStr);
                assert(obj.stringItems != null);
                assert(obj.stringItems.size == 2);
                String str0 = obj.stringItems.get(0);
                String str1 = obj.stringItems.get(1);
                assert(str0.equals("item0"));
                assert(str1.equals("item1"));
                assert(obj.aItems != null);
                assert(obj.aItems.size == 2);
                A a0 = obj.aItems.get(0);
                A a1 = obj.aItems.get(1);
                assert(a0.a.equals("a0str"));
                assert(a0.b == 1    );
                assert(a1.a.equals("a1str"));
                assert(a1.b == 2);
            }
            catch(Throwable t) {
                throw new RuntimeException(t);
            }
        }

        System.out.println("Test Complete");
        color = Color.GREEN;
    }

    @Override
    public void render () {
        ScreenUtils.clear(color);
    }

    @Override
    public void dispose () {
    }

    public static class A {
        String a;
        int b;
    }

    public static class B {
        Array<String> stringItems;
        public Array<A> aItems;
    }
}