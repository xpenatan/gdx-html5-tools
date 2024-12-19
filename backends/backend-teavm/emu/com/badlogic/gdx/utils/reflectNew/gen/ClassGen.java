package com.badlogic.gdx.utils.reflectNew.gen;

import com.badlogic.gdx.utils.reflect.ArrayReflection;
import com.github.xpenatan.gdx.backends.teavm.config.plugins.TeaReflectionSupplier;
import com.github.xpenatan.gdx.backends.teavm.utils.GenericTypeProvider;
import java.lang.reflect.Field;
import java.lang.reflect.GenericArrayType;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.ArrayList;
import org.teavm.metaprogramming.CompileTime;
import org.teavm.metaprogramming.Meta;
import org.teavm.metaprogramming.Metaprogramming;
import org.teavm.metaprogramming.ReflectClass;
import org.teavm.metaprogramming.Value;
import org.teavm.metaprogramming.reflect.ReflectField;
import org.teavm.metaprogramming.reflect.ReflectMethod;

@CompileTime
public class ClassGen {

    @Meta
    public static native Object createInstance(Class<?> cls);
    private static void createInstance(ReflectClass<?> cls) {
        String name = cls.getName();
        if(!TeaReflectionSupplier.containsReflection(name)) {
//            diagnostics.warning(null, "create instance " + name);
            Metaprogramming.unsupportedCase();
            return;
        }


        ReflectMethod ctor = cls.getMethod("<init>");
        if(ctor != null) {
            Metaprogramming.exit(() -> ctor.construct());
        }
        else {
//            diagnostics.warning(null, "Class don't have default constructor " + name);
            Metaprogramming.exit(() -> null);
        }
    }

    @Meta
    public static native Object createArrayInstance(Class<?> cls, int size);
    private static void createArrayInstance(ReflectClass<?> cls, Value<Integer> size) {
        String name = cls.getName();
        if(cls != Metaprogramming.findClass(Object.class) && !TeaReflectionSupplier.containsReflection(name)) {
            Metaprogramming.unsupportedCase();
            return;
        }
        Metaprogramming.exit(() -> cls.createArray(size.get()));
    }

    @Meta
    public static native ClassProxy getClassProxyByName(String className);
    private static void getClassProxyByName(Value<String> className) {
        Value<ClassProxy> result = Metaprogramming.lazy(() -> null);
        ClassLoader classLoader = Metaprogramming.getClassLoader();
        GenericTypeProvider genericTypeProvider = new GenericTypeProvider(classLoader);

        for(String reflectionClass : TeaReflectionSupplier.getReflectionClasses()) {
            Class cccc = genericTypeProvider.findClass(reflectionClass);
            ReflectClass aClass = Metaprogramming.findClass(cccc);
            String name = aClass.getName();
            Value<ClassProxy> proxy = getClassProxyInternal(aClass);
            Value<ClassProxy> existing = result;
            result = Metaprogramming.lazy(() -> name.equals(className.get()) ? proxy.get() : existing.get());
        }
        Value<ClassProxy> type = result;
        Metaprogramming.exit(() -> type.get());
    }

    @Meta
    public static native ClassProxy getClassProxy(Class<?> cls);
    private static void getClassProxy(ReflectClass<Object> cls) {
        String className = cls.getName();
        if(!TeaReflectionSupplier.containsReflection(className)) {
            Metaprogramming.unsupportedCase();
            return;
        }

        Value<ClassProxy> proxy = getClassProxyInternal(cls);
        Metaprogramming.exit(() -> proxy.get());
    }

    private static Value<ClassProxy> getClassProxyInternal(ReflectClass<Object> cls) {
        Value<ClassProxy> proxy = Metaprogramming.proxy(ClassProxy.class, (instance, method, args) -> {
            String methodName = method.getName();
            String className = cls.getName();
            GenericTypeProvider genericTypeProvider = new GenericTypeProvider(Metaprogramming.getClassLoader());
            if(methodName.equals("getField")) {
                Value<Object> arg = Metaprogramming.lazy(() -> args[0]);
                Value<FieldProxy> result = Metaprogramming.lazy(() -> null);
                for (ReflectField field : cls.getDeclaredFields()) {
                    String type = field.getType().getName();
                    String fieldName = field.getName();
                    Value<FieldProxy> existing = result;
                    Value<FieldProxy> fieldProxy = getFieldProxy(className, field);
                    result = Metaprogramming.emit(() -> fieldName.equals(arg.get()) ? fieldProxy.get() : existing.get());
                }
                Value<FieldProxy> finalResult = result;
                Metaprogramming.exit(() -> finalResult.get());
            }
            else if(methodName.equals("getType")) {
                Class<?> type = genericTypeProvider.findClass(cls.getName());
                Value<Class> result = Metaprogramming.emit(() -> type);
                Metaprogramming.exit(() -> result.get());
            }
            else if(methodName.equals("isMemberClass")) {
                Class<?> type = genericTypeProvider.findClass(cls.getName());
                boolean memberClass = type.isMemberClass();
                Value<Boolean> result = Metaprogramming.emit(() -> memberClass);
                Metaprogramming.exit(() -> result.get());
            }
            else if(methodName.equals("getDeclaredFields")) {
                ArrayList<ReflectField> allowedFields = new ArrayList<>();
                ReflectField[] declaredFields = cls.getDeclaredFields();
                int length = declaredFields.length;
                for (int i = 0; i < length; i++) {
                    ReflectField field = declaredFields[i];
//                    int modifiers = field.getModifiers();
//                    boolean isStatic = Modifier.isStatic(modifiers);
                    allowedFields.add(field);
                }

                int allowedLength = allowedFields.size();
                ReflectClass<FieldProxy> fieldProxyClass = Metaprogramming.findClass(FieldProxy.class);
                Value<Object[]> array = Metaprogramming.emit(() -> fieldProxyClass.createArray(allowedLength));
                for (int i = 0; i < allowedLength; i++) {
                    ReflectField field = allowedFields.get(i);
                    Value<FieldProxy> fieldProxy = getFieldProxy(className, field);
                    int index = i;
                    Metaprogramming.emit(() -> array.get()[index] = fieldProxy.get());
                }
                Metaprogramming.exit(() -> array.get());
            }
        });
        return proxy;
    }

    private static Value<FieldProxy> getFieldProxy(String className, ReflectField field) {
        ClassLoader classLoader = Metaprogramming.getClassLoader();
        GenericTypeProvider genericTypeProvider = new GenericTypeProvider(classLoader);
        return Metaprogramming.proxy(FieldProxy.class, (instance, method, args) -> {
            String methodName = method.getName();
            Field field1 = genericTypeProvider.findField(field);
            if(field1 != null) {
                if(methodName.equals("getType")) {
                    Class<?> type = field1.getType();
                    Value<Class> result = Metaprogramming.emit(() -> type);
                    Metaprogramming.exit(() -> result.get());
                }
                else if(methodName.equals("getDeclaringClass")) {
                    Class<?> type = field1.getDeclaringClass();
                    Value<Class> result = Metaprogramming.emit(() -> type);
                    Metaprogramming.exit(() -> result.get());
                }
                else if(methodName.equals("getName")) {
                    String name = field1.getName();
                    Value<String> result = Metaprogramming.emit(() -> name);
                    Metaprogramming.exit(() -> result.get());
                }
                else if(methodName.equals("get")) {
                    Value<Object> objInstance = Metaprogramming.lazy(() -> args[0]);
                    Metaprogramming.exit(() -> field.get(objInstance.get()));
                }
                else if(methodName.equals("set")) {
                    Value<Object> objInstance = Metaprogramming.lazy(() -> args[0]);
                    Value<Object> objValue = Metaprogramming.lazy(() -> args[1]);
                    Metaprogramming.emit(() -> field.set(objInstance.get(), objValue.get()));
                }
            }
        });
    }

    @Meta
    public static native Class getElementType(Class<?> type, String fieldName, int index);
    private static void getElementType(ReflectClass<?> cls, Value<String> fieldNameValue, Value<Integer> indexValue) {
        String name = cls.getName();
        if(!TeaReflectionSupplier.containsReflection(name)) {
            Metaprogramming.unsupportedCase();
            return;
        }
        ClassLoader classLoader = Metaprogramming.getClassLoader();
        GenericTypeProvider genericTypeProvider = new GenericTypeProvider(classLoader);

        boolean found = false;
        Value<Class> result = Metaprogramming.lazy(() -> null);
        for(ReflectField field : cls.getDeclaredFields()) {
            java.lang.reflect.Field javaField = genericTypeProvider.findField(field);
            if(javaField != null) {
                Type genericType = javaField.getGenericType();
                if(genericType instanceof ParameterizedType) {
                    Type[] actualTypes = ((ParameterizedType)genericType).getActualTypeArguments();

                    if(actualTypes != null) {
                        for(int i = 0; i < actualTypes.length; i++) {
                            Class actualType = getActualType(actualTypes[i]);
                            if(actualType == null)
                                continue;
                            found = true;
                            final int index = i;

                            String fieldName = field.getName();
                            Value<Class> existing = result;
                            result = Metaprogramming.lazy(() -> {
                                if(index == indexValue.get()) {
                                    if(fieldName.equals(fieldNameValue.get())) {
                                        return actualType;
                                    }
                                }
                                return existing.get();
                            });
                        }
                    }
                }
            }
        }
        if(!found) {
            Metaprogramming.unsupportedCase();
            return;
        }
        Value<Class> type = result;
        Metaprogramming.exit(() -> type.get());
    }

    private static Class<?> getActualType(Type actualType) {
        if(actualType instanceof Class)
            return (Class)actualType;
        else if(actualType instanceof ParameterizedType)
            return (Class)((ParameterizedType)actualType).getRawType();
        else if(actualType instanceof GenericArrayType) {
            Type componentType = ((GenericArrayType)actualType).getGenericComponentType();
            if(componentType instanceof Class)
                return ArrayReflection.newInstance((Class)componentType, 0).getClass();
        }
        return null;
    }
}