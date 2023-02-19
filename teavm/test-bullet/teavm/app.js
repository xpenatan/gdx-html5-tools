"use strict";
var main;(function($rt_globals){
var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,cls){return obj!==null&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i
=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_castToInterface(obj,cls){if(obj!==null&&!$rt_isInstance(obj,cls)){$rt_throwCCE();}return obj;}function $rt_castToClass(obj,cls){if(obj!==null&&!(obj instanceof cls)){$rt_throwCCE();}return obj;}$rt_globals.Array.prototype.fill=$rt_globals.Array.prototype.fill||function(value,start,end){var len=this.length;if(!len)return this;start=start|0;var i=start<0?$rt_globals.Math.max(len+start,0):$rt_globals.Math.min(start,len);end
=end===$rt_globals.undefined?len:end|0;end=end<0?$rt_globals.Math.max(len+end,0):$rt_globals.Math.min(end,len);for(;i<end;i++){this[i]=value;}return this;};function $rt_createArray(cls,sz){var data=new $rt_globals.Array(sz);data.fill(null);return new $rt_array(cls,data);}function $rt_createArrayFromData(cls,init){return $rt_wrapArray(cls,init);}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new $rt_globals.Array(sz));}function $rt_createNumericArray(cls,
nativeArray){return new $rt_array(cls,nativeArray);}var $rt_createLongArray;var $rt_createLongArrayFromData;if(typeof $rt_globals.BigInt64Array!=='function'){$rt_createLongArray=function(sz){var data=new $rt_globals.Array(sz);var arr=new $rt_array($rt_longcls(),data);data.fill(Long_ZERO);return arr;};$rt_createLongArrayFromData=function(init){return new $rt_array($rt_longcls(),init);};}else {$rt_createLongArray=function(sz){return $rt_createNumericArray($rt_longcls(),new $rt_globals.BigInt64Array(sz));};$rt_createLongArrayFromData
=function(data){var buffer=new $rt_globals.BigInt64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_longcls(),buffer);};}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new $rt_globals.Uint16Array(sz));}function $rt_createCharArrayFromData(data){var buffer=new $rt_globals.Uint16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_charcls(),buffer);}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new $rt_globals.Int8Array(sz));}function $rt_createByteArrayFromData(data)
{var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_bytecls(),buffer);}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new $rt_globals.Int16Array(sz));}function $rt_createShortArrayFromData(data){var buffer=new $rt_globals.Int16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_shortcls(),buffer);}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new $rt_globals.Int32Array(sz));}function $rt_createIntArrayFromData(data)
{var buffer=new $rt_globals.Int32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_intcls(),buffer);}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),new $rt_globals.Int8Array(sz));}function $rt_createBooleanArrayFromData(data){var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_booleancls(),buffer);}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new $rt_globals.Float32Array(sz));}function $rt_createFloatArrayFromData(data)
{var buffer=new $rt_globals.Float32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_floatcls(),buffer);}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new $rt_globals.Float64Array(sz));}function $rt_createDoubleArrayFromData(data){var buffer=new $rt_globals.Float64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_doublecls(),buffer);}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta
={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};arraycls.classObject=null;arraycls.$array=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls(){return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum
=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache
===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long",
"J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double","D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex)
{throw $rt_exception(ex);}var $rt_javaExceptionProp=$rt_globals.Symbol("javaException");function $rt_exception(ex){var err=ex.$jsException;if(!err){err=new $rt_globals.Error("Java exception thrown");if(typeof $rt_globals.Error.captureStackTrace==="function"){$rt_globals.Error.captureStackTrace(err);}err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack
=$rt_createArray($rt_stecls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for
(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),
dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),
arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,
0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i
+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions)
{var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),
dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1
|0){cls=$rt_arraycls(cls);var dim=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value){if(typeof value==='number'&&$rt_globals.isNaN(value)){throw "NaN";}return value;}function $rt_createOutputFunction(printFunction){var buffer="";var utf8Buffer=0;var utf8Remaining=0;function putCodePoint(ch)
{if(ch===0xA){printFunction(buffer);buffer="";}else if(ch<0x10000){buffer+=$rt_globals.String.fromCharCode(ch);}else {ch=ch -0x10000|0;var hi=(ch>>10)+0xD800;var lo=(ch&0x3FF)+0xDC00;buffer+=$rt_globals.String.fromCharCode(hi,lo);}}return function(ch){if((ch&0x80)===0){putCodePoint(ch);}else if((ch&0xC0)===0x80){if(utf8Buffer>0){utf8Remaining<<=6;utf8Remaining|=ch&0x3F;if( --utf8Buffer===0){putCodePoint(utf8Remaining);}}}else if((ch&0xE0)===0xC0){utf8Remaining=ch&0x1F;utf8Buffer=1;}else if((ch&0xF0)===0xE0)
{utf8Remaining=ch&0x0F;utf8Buffer=2;}else if((ch&0xF8)===0xF0){utf8Remaining=ch&0x07;utf8Buffer=3;}};}var $rt_putStdout=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.info(msg);}):function(){};var $rt_putStderr=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.error(msg);}):function(){};var $rt_packageData
=null;function $rt_packages(data){var i=0;var packages=new $rt_globals.Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=
0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype=$rt_globals.Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName
=null;m.declaringClass=null;m.enclosingClass=null;}else {var enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;var declaringClass=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;var simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName:null;}var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func
=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}}function $rt_wrapFunction0(f){return function(){return f(this);};}function $rt_wrapFunction1(f){return function(p1){return f(this,p1);};}function $rt_wrapFunction2(f){return function(p1,p2){return f(this,p1,p2);};}function $rt_wrapFunction3(f){return function(p1,p2,p3){return f(this,p1,p2,p3,p3);};}function $rt_wrapFunction4(f){return function(p1,p2,p3,p4){return f(this,
p1,p2,p3,p4);};}function $rt_threadStarter(f){return function(){var args=$rt_globals.Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f){return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i){javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance
=new $rt_globals.Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target){return target.$clinit=function(){};}var $rt_numberConversionView=new $rt_globals.DataView(new $rt_globals.ArrayBuffer(8));var $rt_doubleToLongBits;var $rt_longBitsToDouble;if(typeof $rt_globals.BigInt!=='function'){$rt_doubleToLongBits=function(n){$rt_numberConversionView.setFloat64(0,
n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));};$rt_longBitsToDouble=function(n){$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);};}else {$rt_doubleToLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);var lo=$rt_numberConversionView.getInt32(0,true);var hi=$rt_numberConversionView.getInt32(4,true);return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,
$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32));};$rt_longBitsToDouble=function(n){var hi=$rt_globals.Number($rt_globals.BigInt.asIntN(32,n>>$rt_globals.BigInt(32)));var lo=$rt_globals.Number($rt_globals.BigInt.asIntN(32,n&$rt_globals.BigInt(0xFFFFFFFF)));$rt_numberConversionView.setInt32(0,lo,true);$rt_numberConversionView.setInt32(4,hi,true);return $rt_numberConversionView.getFloat64(0,true);};}function $rt_floatToIntBits(n){$rt_numberConversionView.setFloat32(0,n);return $rt_numberConversionView.getInt32(0);}function $rt_intBitsToFloat(n)
{$rt_numberConversionView.setInt32(0,n);return $rt_numberConversionView.getFloat32(0);}function $rt_javaException(e){return e instanceof $rt_globals.Error&&typeof e[$rt_javaExceptionProp]==='object'?e[$rt_javaExceptionProp]:null;}function $rt_jsException(e){return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err[$rt_javaExceptionProp];if(!ex){ex=$rt_createException($rt_str("(JavaScript) "+err.toString()));err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,
ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls())
{clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}var Long_MAX_NORMAL=1<<18;var Long_ZERO;var Long_create;var Long_fromInt;var Long_fromNumber;var Long_toNumber;var Long_hi;var Long_lo;if(typeof $rt_globals.BigInt
!=="function"){Long.prototype.toString=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push($rt_globals.String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};Long_ZERO=new Long(0,0);Long_fromInt=function(val){return new Long(val, -(val<0)
|0);};Long_fromNumber=function(val){if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}};Long_create=function(lo,hi){return new Long(lo,hi);};Long_toNumber=function(val){return 0x100000000*val.hi+(val.lo>>>0);};Long_hi=function(val){return val.hi;};Long_lo=function(val){return val.lo;};}else {Long_ZERO=$rt_globals.BigInt(0);Long_create=function(lo,hi){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)
<<$rt_globals.BigInt(32));};Long_fromInt=function(val){return $rt_globals.BigInt(val);};Long_fromNumber=function(val){return $rt_globals.BigInt(val>=0?$rt_globals.Math.floor(val):$rt_globals.Math.ceil(val));};Long_toNumber=function(val){return $rt_globals.Number(val);};Long_hi=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(64,val>>$rt_globals.BigInt(32)))|0;};Long_lo=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(32,val))|0;};}var $rt_imul=$rt_globals.Math.imul||function(a,
b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){return (a>>>0)/(b>>>0)>>>0;};var $rt_umod=function(a,b){return (a>>>0)%(b>>>0)>>>0;};function $rt_checkBounds(index,array){if(index<0||index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass)
{if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.e9=f;}
function $rt_cls(cls){return Ob(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Ps(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.W.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return Bui;}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(KX());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return Dn();}
function $rt_setThread(t){return Et(t);}
function $rt_createException(message){return UR(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var G=$rt_throw;var Cu=$rt_compare;var Buj=$rt_nullCheck;var F=$rt_cls;var Bb=$rt_createArray;var A2b=$rt_isInstance;var RA=$rt_nativeThread;var C1=$rt_suspending;var BaT=$rt_resuming;var A6u=$rt_invalidPointer;var B=$rt_s;var M=$rt_eraseClinit;var CJ=$rt_imul;var R=$rt_wrapException;var Buk=$rt_checkBounds;var Bul=$rt_checkUpperBound;var Bum=$rt_checkLowerBound;var Bun=$rt_wrapFunction0;var Buo=$rt_wrapFunction1;var Bup=$rt_wrapFunction2;var Buq=$rt_wrapFunction3;var Bur=$rt_wrapFunction4;var D=$rt_classWithoutFields;var J
=$rt_createArrayFromData;var ID=$rt_createCharArrayFromData;var Bus=$rt_createByteArrayFromData;var But=$rt_createShortArrayFromData;var PP=$rt_createIntArrayFromData;var Buu=$rt_createBooleanArrayFromData;var Bp0=$rt_createFloatArrayFromData;var Buv=$rt_createDoubleArrayFromData;var A89=$rt_createLongArrayFromData;var Sd=$rt_createBooleanArray;var CE=$rt_createByteArray;var Qe=$rt_createShortArray;var Ck=$rt_createCharArray;var Bf=$rt_createIntArray;var RU=$rt_createLongArray;var B_=$rt_createFloatArray;var Buw
=$rt_createDoubleArray;var Cu=$rt_compare;var Bux=$rt_castToClass;var Buy=$rt_castToInterface;var JF=Long_toNumber;var N=Long_fromInt;var Buz=Long_fromNumber;var BI=Long_create;var W=Long_ZERO;var BuA=Long_hi;var Y=Long_lo;
function C(){this.bj=null;this.$id$=0;}
function M5(){var a=new C();K(a);return a;}
function CG(b){var c;if(b.bj===null)QR(b);if(b.bj.cw===null)b.bj.cw=Dn();else if(b.bj.cw!==Dn())G(C5(B(0)));c=b.bj;c.cC=c.cC+1|0;}
function Bx(b){var c,d;if(!F2(b)&&b.bj.cw===Dn()){c=b.bj;d=c.cC-1|0;c.cC=d;if(!d)b.bj.cw=null;F2(b);return;}G(OF());}
function J3(b){AT3(b,1);}
function AT3(b,c){var d,$p,$z;$p=0;if(BaT()){var $T=RA();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.bj===null)QR(b);if(b.bj.cw===null)b.bj.cw=Dn();if(b.bj.cw===Dn()){d=b.bj;d.cC=d.cC+c|0;return;}$p=1;case 1:AV0(b,c);if(C1()){break _;}return;default:A6u();}}RA().s(b,c,d,$p);}
function QR(b){b.bj=Bof();}
function AV0(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.pg=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.UW=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=Bot(callback);return thread.suspend(function(){try{Bc$(b,c,callback);}catch($e){callback.UW($rt_exception($e));}});}
function Bc$(b,c,d){var e,f,g;e=Dn();if(b.bj===null){QR(b);Et(e);f=b.bj;f.cC=f.cC+c|0;d.pg(null);return;}if(b.bj.cw===null){b.bj.cw=e;Et(e);f=b.bj;f.cC=f.cC+c|0;d.pg(null);return;}g=b.bj;if(g.ed===null)g.ed=Sp();AHX(g.ed,Bp1(e,b,c,d));}
function Dw(b){SH(b,1);}
function SH(b,c){var d;if(!F2(b)&&b.bj.cw===Dn()){d=b.bj;d.cC=d.cC-c|0;if(d.cC>0)return;d.cw=null;if(d.ed!==null&&!Ic(d.ed))NY(Bnx(b));else F2(b);return;}G(OF());}
function A1D(b){var c,d,e;if(!F2(b)&&b.bj.cw===null){c=b.bj;if(c.ed!==null&&!Ic(c.ed)){d=c.ed;e=AI4(d);c.ed=null;e.dp();}return;}}
function F2(a){var b,c;b=a.bj;if(b===null)return 1;a:{b:{if(b.cw===null){if(b.ed!==null){c=b.ed;if(!Ic(c))break b;}if(b.h5===null)break a;c=b.h5;if(Ic(c))break a;}}return 0;}AMl(a);return 1;}
function AMl(a){a.bj=null;}
function AI5(b){return b.bj!==null&&b.bj.cw===Dn()?1:0;}
function K(a){}
function CB(a){return Ob(a.constructor);}
function P4(a){return KB(a);}
function AXw(a,b){return a!==b?0:1;}
function Uj(a){var b,c;b=L9(KB(a));c=H();I(I(c,B(1)),b);return P(c);}
function KB(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AWx(a){var b,c,d;if(!A2b(a,EK)){b=a;if(b.constructor.$meta.item===null)G(BoN());}c=ANC(a);b=c;d=$rt_nextId();b.$id$=d;return c;}
function EM(a){var b,c;if(!AI5(a))G(OF());b=a.bj.h5;if(b===null)return;while(!Ic(b)){c=AI4(b);if(!c.I9())NY(c);}a.bj.h5=null;}
function ADA(a,b){var c,$$je,$p,$z;$p=0;if(BaT()){var $T=RA();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:try{c=0;$p=1;continue _;}catch($$e){$$je=R($$e);if($$je instanceof F9){}else{throw $$e;}}G(A_W());case 1:a:{try{AMU(a,b,c);if(C1()){break _;}}catch($$e){$$je=R($$e);if($$je instanceof F9){break a;}else{throw $$e;}}return;}G(A_W());default:A6u();}}RA().s(a,b,c,$p);}
function AMU(a,b,c){var $p,$z;$p=0;if(BaT()){var $T=RA();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!AI5(a))G(OF());$p=1;case 1:TM(a,b,c);if(C1()){break _;}return;default:A6u();}}RA().s(a,b,c,$p);}
function TM(a,b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.pg=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.UW=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=Bot(callback);return thread.suspend(function(){try{AOh(a,b,c,callback);}catch($e)
{callback.UW($rt_exception($e));}});}
function AOh(a,b,c,d){var e,f,g;e=a.bj;f=BoW(a,d,e.cC);if(e.h5===null)e.h5=Sp();AHX(e.h5,f);(Dn()).Sb=f;if(!(DV(b,W)&&c<=0)){g=HP(b,N(2147483647))?Y(b):2147483647;f.nd=Z3(f,g);}SH(a,e.cC);}
function BcH(b){A1D(b);}
function AXW(b,c,d,e){var f;Et(b);c.bj.cw=b;f=c.bj;f.cC=f.cC+d|0;e.pg(null);}
function Ba(){var a=this;C.call(a);a.un=null;a.ta=null;}
function BG(a){K(a);}
function BhB(a,b){if(!b&&a.un===null)a.un=a.X();else if(b&&a.ta===null)a.ta=(a.X()).gA(1);if(b)return a.ta;return a.un;}
var Xo=D(Ba);
function Bm1(){var a=new Xo();Bh8(a);return a;}
function Bh8(a){BG(a);}
function A$i(a){return ((Dv()).cO(32)).cO(9);}
var U7=D(Ba);
function Bnz(){var a=new U7();BkE(a);return a;}
function BkE(a){BG(a);}
function AXD(a){return ((Dv()).bN(0,31)).cO(127);}
var Fb=D();
var LC=D(0);
var IA=D(Fb);
var BuB=null;function BuC(){BuC=M(IA);AVa();}
function AVa(){BuB=BN();}
var I9=D(0);
var CF=D(IA);
var CS=D(CF);
var BuD=null;var BuE=null;var BuF=null;var BuG=null;var BuH=null;var BuI=null;var BuJ=null;var BuK=null;function BuL(){BuL=M(CS);Bih();}
function Bih(){BuD=CT(0.0,0.0,1.0,1.0);BuE=CT(1.0,0.0,0.0,1.0);BuF=CT(0.0,1.0,0.0,1.0);BuG=Bra();BuH=Bms();BuI=BqA();BuJ=Bn1();BuK=BrB();}
var U=D();
var BuM=null;var BuN=null;var BuO=null;var BuP=null;var BuQ=null;var BuR=null;var BuS=null;var BuT=null;var BuU=null;var BuV=null;var BuW=null;var BuX=null;var BuY=null;var BuZ=null;var Bu0=null;var Bu1=null;var Bu2=null;var Bu3=null;var Bu4=null;var Bu5=null;var Bu6=null;var Bu7=null;var Bu8=null;var Bu9=null;var Bu$=null;var Bu_=null;var Bva=null;var Bvb=null;var Bvc=null;var Bvd=null;var Bve=null;var Bvf=null;var Bvg=null;var Bvh=null;var Bvi=null;var Bvj=null;var Bvk=null;var Bvl=null;var Bvm=null;var Bvn
=null;var Bvo=null;var Bvp=null;var Bvq=null;var Bvr=null;function BpL(){BpL=M(U);A8u();}
function Ci(a){BpL();K(a);}
function A8u(){BuM=BqI();BuN=Bmu();BuO=BrS();BuP=Bm9();BuQ=BuP;BuR=Md(2);BuS=Q6(2);BuT=BuS;BuU=R1(2);BuV=BuU;BuW=BpF();BuX=Bnv();BuY=Md(3);BuZ=Q6(3);Bu0=R1(3);Bu1=Br3();Bu2=Bs6();Bu3=Md(4);Bu4=Q6(4);Bu5=R1(4);Bu6=Md(5);Bu7=Q6(5);Bu8=R1(5);Bu9=Bug();Bu$=BmK();Bu_=BqB();Bva=A9s(2.0,10.0);Bvb=A_w(2.0,10.0);Bvc=AYx(2.0,10.0);Bvd=A9s(2.0,5.0);Bve=A_w(2.0,5.0);Bvf=AYx(2.0,5.0);Bvg=BnX();Bvh=Brz();Bvi=Btg();Bvj=Bpo(2.0,10.0,7,1.0);Bvk=Brk(2.0,10.0,6,1.0);Bvl=BsA(2.0,10.0,7,1.0);Bvm=BnQ(1.5);Bvn=BtY(2.0);Bvo=Bsm(2.0);Bvp
=Bn6(4);Bvq=BoK(4);Bvr=Brf(4);}
function Ht(){var a=this;U.call(a);a.cK=null;a.dK=null;}
function Brf(a){var b=new Ht();Ni(b,a);return b;}
function Ni(a,b){var c;Ci(a);if(b>=2&&b<=5){a:{a.cK=B_(b);a.dK=B_(b);a.dK.data[0]=1.0;switch(b){case 2:break;case 3:a.cK.data[0]=0.4000000059604645;a.cK.data[1]=0.4000000059604645;a.cK.data[2]=0.20000000298023224;a.dK.data[1]=0.33000001311302185;a.dK.data[2]=0.10000000149011612;break a;case 4:a.cK.data[0]=0.3400000035762787;a.cK.data[1]=0.3400000035762787;a.cK.data[2]=0.20000000298023224;a.cK.data[3]=0.15000000596046448;a.dK.data[1]=0.25999999046325684;a.dK.data[2]=0.10999999940395355;a.dK.data[3]=0.029999999329447746;break a;case 5:a.cK.data[0]
=0.30000001192092896;a.cK.data[1]=0.30000001192092896;a.cK.data[2]=0.20000000298023224;a.cK.data[3]=0.10000000149011612;a.cK.data[4]=0.10000000149011612;a.dK.data[1]=0.44999998807907104;a.dK.data[2]=0.30000001192092896;a.dK.data[3]=0.15000000596046448;a.dK.data[4]=0.05999999865889549;break a;default:break a;}a.cK.data[0]=0.6000000238418579;a.cK.data[1]=0.4000000059604645;a.dK.data[1]=0.33000001311302185;}c=a.cK.data;c[0]=c[0]*2.0;return;}G(Bl((((H()).c(B(2))).t(b)).d()));}
function AC_(){var a=this;C.call(a);a.r7=null;a.wj=null;a.Cz=0;a.Di=0;}
function BsC(a,b){var c=new AC_();A2e(c,a,b);return c;}
function A2e(a,b,c){K(a);a.r7=b;a.wj=c;}
function ASi(a){return CK(a.r7);}
function BkK(a,b){return Bj(a.r7)<b?0:1;}
function ATM(a){return CK(a.wj);}
function Biq(a,b){return Bj(a.wj)<b?0:1;}
function Baa(a,b){a.Cz=b;}
function Bmp(a,b){a.Di=b;}
var WV=D();
var ADE=D();
function Bmo(b){var c,d;c=b.Rd();d=c.data;if(d.length<=0)return null;return T6(d[0]);}
function AYu(b,c){var d,e,f,g,h,$$je;if(c!==null&&c.data.length){a:{b:{try{d=b.LM(c);e=T6(d);}catch($$e){$$je=R($$e);if($$je instanceof I$){f=$$je;break a;}else if($$je instanceof Lk){f=$$je;break b;}else{throw $$e;}}return e;}e=new DI;g=b.v();h=H();I(I(h,B(3)),g);EL(e,P(h),f);G(e);}e=new DI;g=b.v();h=H();I(I(I(h,B(4)),g),B(5));EL(e,P(h),f);G(e);}return Bmo(b);}
function A$3(b,c){var d,e,f,g,h,$$je;a:{try{d=b.KM(c);e=T6(d);}catch($$e){$$je=R($$e);if($$je instanceof I$){f=$$je;break a;}else if($$je instanceof Lk){f=$$je;e=new DI;g=b.v();h=H();I(I(h,B(3)),g);EL(e,P(h),f);G(e);}else{throw $$e;}}return e;}e=new DI;g=b.v();h=H();I(I(h,B(6)),g);EL(e,P(h),f);G(e);}
var Km=D(0);
var E2=D();
var BT=D(0);
var D8=D();
function R5(a){K(a);}
var Cz=D(0);
function E4(){D8.call(this);this.j4=0;}
var Bvs=null;var Bvt=null;function Du(){Du=M(E4);Bix();}
function ALk(a){var b=new E4();Jj(b,a);return b;}
function Jj(a,b){Du();R5(a);a.j4=b;}
function AET(b,c){Du();if(!(c>=2&&c<=36))c=10;return ((BtX(20)).Es(b,c)).d();}
function ALp(b){Du();return b>>>4^b<<28^b<<8^b>>>24;}
function L9(b){Du();return ANF(b,4);}
function Rb(b){Du();return AET(b,10);}
function HB(b,c){var d,e,f,g,h,i,j;Du();if(c>=2&&c<=36){if(b!==null&&!b.bW()){a:{d=0;e=0;switch(b.g(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==b.j())G(Ff());while(e<b.j()){g=e+1|0;h=QP(b.g(e));if(h<0){i=new CD;j=H();I(I(j,B(7)),b);Er(i,P(j));G(i);}if(h>=c){i=new CD;j=H();I(I(V(I(j,B(8)),c),B(9)),b);Er(i,P(j));G(i);}f=CJ(c,f)+h|0;if(f<0){if(g==b.j()&&f==(-2147483648)&&d)return (-2147483648);i=new CD;j=H();I(I(j,B(10)),b);Er(i,P(j));G(i);}e=g;}if(d)f= -f|0;return f;}G(Bd$(B(11)));}i=new CD;j
=H();V(I(j,B(12)),c);Er(i,P(j));G(i);}
function Cg(b){Du();return HB(b,10);}
function Bq(b){Du();if(b>=(-128)&&b<=127){ADf();return Bvt.data[b+128|0];}return ALk(b);}
function ADf(){var b;Du();a:{if(Bvt===null){Bvt=Bb(E4,256);b=0;while(true){if(b>=Bvt.data.length)break a;Bvt.data[b]=ALk(b-128|0);b=b+1|0;}}}}
function A7H(a){return a.j4;}
function A3J(a){return Rb(a.j4);}
function A6g(a){return ALp(a.j4);}
function Blk(a,b){if(a===b)return 1;return b instanceof E4&&b.j4==a.j4?1:0;}
function PH(b){var c,d,e;Du();if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;e=d>>>8;if(!e)e=d;else c=c|8;d=e>>>4;if(!d)d=e;else c=c|4;e=d>>>2;if(!e)e=d;else c=c|2;if(e>>>1)c=c|1;return (32-c|0)-1|0;}
function Gq(b){var c,d,e;Du();if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;e=d<<8;if(!e)e=d;else c=c|8;d=e<<4;if(!d)d=e;else c=c|4;e=d<<2;if(!e)e=d;else c=c|2;if(e<<1)c=c|1;return (32-c|0)-1|0;}
function AF2(b,c){var d;Du();d=c&31;return b<<d|b>>>(32-d|0);}
function W0(b){var c;Du();c=(b&(-16711936))>>>8|(b&16711935)<<8;c=(c>>>16)+(c<<16)|0;return c;}
function Bix(){Bvs=F($rt_intcls());}
var OQ=D();
var Cl=D(0);
var Ez=D(0);
var G5=D(0);
var Fe=D();
var Cw=D(Fe);
var Hp=D(Cw);
function JR(){var a=this;C.call(a);a.Q$=null;a.tl=null;a.BF=0.0;a.DV=0.0;a.ut=null;a.tz=null;a.iy=0;}
function AMc(a,b,c,d,e){K(a);D5();a.ut=Bvu;a.tz=Bvu;Wx(a,e);a.Q$=b;a.tl=e.e9();a.BF=c;a.DV=d;}
function AGi(a,b,c,d){var e;e=CE(1);e.data[0]=63;AMc(a,b,c,d,e);}
function Wx(a,b){var c;if(b!==null){c=b.data.length;if(c&&c>=a.DV)return;}G(Bl(B(13)));}
function NP(a,b){if(b!==null){a.ut=b;a.xQ(b);return a;}G(Bl(B(14)));}
function A4F(a,b){}
function O2(a,b){if(b!==null){a.tz=b;a.sS(b);return a;}G(Bl(B(14)));}
function BbN(a,b){}
function KR(a,b,c,d){var e,f,g,h,$$je;a:{if(a.iy!=3){if(d)break a;if(a.iy!=2)break a;}G(IO());}a.iy=!d?1:2;while(true){try{e=a.U2(b,c);}catch($$e){$$je=R($$e);if($$je instanceof Bs){f=$$je;G(A$o(f));}else{throw $$e;}}if(e.kC()){if(!d)return e;g=Bj(b);if(g<=0)return e;e=Cj(g);}else if(e.iP())break;h=!e.wl()?a.ut:a.tz;b:{D5();if(h!==Bvv){if(h===Bvw)break b;else return e;}if(Bj(c)<a.tl.data.length)return Bvx;AF5(c,a.tl);}b.qm(Cr(b)+e.j()|0);}return e;}
function AFp(a,b){var c,d,e;if(!Bj(b))return Xh(0);SA(a);c=Xh(Bj(b)*a.BF|0);while(true){d=KR(a,b,c,0);Bz();if(d===Bvy)break;if(d===Bvx){c=MA(a,c);continue;}if(!d.nM())continue;d.pj();}e=KR(a,b,c,1);if(e.nM())e.pj();while(true){e=Mi(a,c);if(e.kC())break;if(!e.iP())continue;c=MA(a,c);}LX(c);return c;}
function MA(a,b){var c,d,e;c=JC(b);d=c.data;d=RS(c,d.length*2|0);e=Jm(d);e.gv(Cr(b));return e;}
function Mi(a,b){var c;if(a.iy!=2&&a.iy!=4)G(IO());c=a.QL(b);Bz();if(c===Bvy)a.iy=3;return c;}
function Bd4(a,b){Bz();return Bvy;}
function SA(a){a.iy=0;a.xp();return a;}
function AZb(a){}
function Ea(){var a=this;JR.call(a);a.FR=null;a.y0=null;}
function Iw(a,b,c,d){AGi(a,b,c,d);a.FR=Ck(512);a.y0=CE(512);}
function APf(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.FR;e=0;f=0;g=a.y0;a:{while(true){if((e+32|0)>f&&CK(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=BH(Bj(b)+j|0,i.length);b.tn(d,j,f-j|0);e=0;}if(!CK(c)){if(!CK(b)&&e>=f){Bz();k=Bvy;}else{Bz();k=Bvx;}break a;}i=g.data;l=0;m=BH(Bj(c),i.length);n=BsC(b,c);k=a.od(d,e,f,g,l,m,n);e=n.Cz;j=n.Di;if(k===null){if(!CK(b)&&e>=f){Bz();k=Bvy;}else if(!CK(c)&&e>=f){Bz();k=Bvx;}}c.zP(g,0,j);if(k!==null)break;}}b.qm(Cr(b)-(f-e|0)|0);return k;}
function AEP(){var a=this;Ea.call(a);a.v8=0;a.tA=0;}
function Bqr(a,b,c){var d=new AEP();Bgu(d,a,b,c);return d;}
function Bgu(a,b,c,d){Iw(a,b,2.0,4.0);a.v8=c;a.tA=d;}
function BhF(a,b,c,d,e,f,g,h){var i,j,k;if(a.v8){if((f+2|0)>g){if(h.Qz())i=null;else{Bz();i=Bvx;}return i;}a.v8=0;if(!a.tA){j=e.data;k=f+1|0;j[f]=(-2);f=k+1|0;j[k]=(-1);}else{j=e.data;k=f+1|0;j[f]=(-1);f=k+1|0;j[k]=(-2);}}return !a.tA?TR(a,b,c,d,e,f,g,h):ADd(a,b,c,d,e,f,g,h);}
function ADd(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c];if(!Cn(l)){if(B8(l)){c=k+(-1)|0;i=Cj(1);break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.ey(2))break a;Bz();i=Bvx;break a;}j=e.data;m=f+1|0;j[f]=(l&255)<<24>>24;f=m+1|0;j[m]=l>>8<<24>>24;c=k;}else{if(k==d){c=k+(-1)|0;if(h.d1(2))break a;Bz();i=Bvy;break a;}c=k+1|0;n=j[k];if(!B8(n)){c=c+(-2)|0;i=Cj(1);break a;}if((f+4|0)>g){c=c+(-2)|0;if(h.ey(4))break a;Bz();i=Bvx;break a;}j=e.data;m=f+1|0;j[f]=(l&255)<<24>>24;o
=m+1|0;j[m]=l>>8<<24>>24;m=o+1|0;j[o]=(n&255)<<24>>24;f=m+1|0;j[m]=n>>8<<24>>24;}}}h.eF(c);h.d7(f);return i;}
function TR(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c];if(!Cn(l)){if(B8(l)){c=k+(-1)|0;i=Cj(1);break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.ey(2))break a;Bz();i=Bvx;break a;}j=e.data;m=f+1|0;j[f]=l>>8<<24>>24;f=m+1|0;j[m]=(l&255)<<24>>24;c=k;}else{if(k==d){c=k+(-1)|0;if(h.d1(2))break a;Bz();i=Bvy;break a;}c=k+1|0;n=j[k];if(!B8(n)){c=c+(-2)|0;i=Cj(1);break a;}if((f+4|0)>g){c=c+(-2)|0;if(h.ey(4))break a;Bz();i=Bvx;break a;}j=e.data;m=f+1|0;j[f]=l>>8<<24>>24;o=m+1
|0;j[m]=(l&255)<<24>>24;m=o+1|0;j[o]=n>>8<<24>>24;f=m+1|0;j[m]=(n&255)<<24>>24;}}}h.eF(c);h.d7(f);return i;}
function BF(){var a=this;C.call(a);a.bb=W;a.n_=0;a.QB=0;a.P2=null;a.C$=0;}
var Bvz=null;function BnR(){BnR=M(BF);Bfm();}
function BY(a){BnR();K(a);}
function A0R(a,b,c){a.n_=c;a.bb=b;}
function AUa(a,b){if(!a.n_)a.bb=b;}
function ANf(a,b){return b instanceof BF&&Z(b.bb,a.bb)?1:0;}
function BfO(a){return Y(a.bb);}
function A8v(a){return a.bb;}
function AVp(a){var b,c,d,e;if(a.C$>0){J6();if(BvA&&BvB){b=BvC;c=a.d();d=a.C$;e=H();I(V(I(I(I(e,B(15)),c),B(16)),d),B(17));b.oy(B(18),P(e));}}if(a.n_){a.QB=1;a.jE();a.bb=W;}}
function A7e(a){var b,c,d,e;b=a.P2;c=a.bb;d=a.n_;e=H();Bp(ADq(Bp(Qp(Bp(I(e,b),40),c),44),d),41);return P(e);}
function Bfm(){Bvz=B_(4);}
var F7=D(BF);
var BvD=null;var BvE=null;function ASt(){ASt=M(F7);AOx();}
function Bs9(a){var b=new F7();AEW(b,a);return b;}
function BrG(a){var b=new F7();KN(b,a);return b;}
function Bf6(a){var b,c;b=AJA(Y(a.bb));c=N(b);return c;}
function AEW(a,b){ASt();BY(a);}
function KN(a,b){ASt();BY(a);a.dc(N(Y(b)),0);}
function AZI(a,b){var c,d;c=Y(a.bb);d=Y(b);T4(c,d);}
function A3D(a,b){AKU(Y(a.bb),b);}
function AOx(){BvD=BrG(W);BvE=Bs9(0);}
function T4(b,c){var jsObj=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.btCollisionObject);jsObj.setUserPointer(c);}
function AJA(b){var jsObj=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.btCollisionObject);var intPointer=jsObj.getUserPointer();return intPointer;}
function AKU(b,c){var jsObj=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.btCollisionObject);jsObj.setRestitution(c);}
var LY=D(F7);
var BvF=null;var BvG=null;function A2J(){A2J=M(LY);A4k();}
function AV7(a){var b=new LY();ALJ(b,a);return b;}
function BtW(a,b,c,d){var e=new LY();Yr(e,a,b,c,d);return e;}
function ALJ(a,b){A2J();KN(a,W);}
function Yr(a,b,c,d,e){var f,g,h,i,j,k,l;A2J();KN(a,W);f=BmM();if(e===null)e=BvH.Ev();Es(e,f);g=c===null?W:c.bX();h=d===null?W:d.bX();i=Y(g);j=Y(h);k=Y((f.bX()));l=N(AMI(b,i,j,k));a.dc(l,1);}
function AUP(a){AB7(Y(a.bb));}
function A4k(){BvF=AV7(0);BvG=AV7(0);}
function AMI(b,c,d,e){var motionStateJSObj=$rt_globals.Bullet.wrapPointer(c,$rt_globals.Bullet.btMotionState);var collisionShapeJSObj=$rt_globals.Bullet.wrapPointer(d,$rt_globals.Bullet.btCollisionShape);var localInertiaJSObj=$rt_globals.Bullet.wrapPointer(e,$rt_globals.Bullet.btVector3);var jsObj=new $rt_globals.Bullet.btRigidBody(b,motionStateJSObj,collisionShapeJSObj,localInertiaJSObj);return $rt_globals.Bullet.getPointer(jsObj);}
function AB7(b){var jsObj=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.btRigidBody);$rt_globals.Bullet.destroy(jsObj);}
var D6=D(BF);
var BvI=null;var BvJ=null;var BvK=null;var BvL=null;var BvM=null;var BvN=null;var BvO=null;var BvP=null;function J$(){J$=M(D6);A3K();}
function Hc(a){var b=new D6();AJ5(b,a);return b;}
function AJ5(a,b){J$();BY(a);a.dc(!b?W:N(Xu()),b);}
function A2s(a,b){AF8(Y(a.bb),b.data);}
function A4c(a,b){AKz(Y(a.bb),b.data);}
function AFT(b,c){J$();c.Ui(b.a);}
function AFO(b,c){J$();b.Pk(c.a);}
function AFo(b,c){J$();BvO.pw(c);AFT(b,BvO);}
function Ta(b,c){J$();BvO.pw(b);AFO(BvO,c);}
function A3K(){BvI=Hc(0);BvJ=Hc(1);BvK=Hc(1);BvL=Hc(1);BvM=Hc(1);BvN=Hc(1);BvO=Hc(0);BvP=BS();}
function Xu(){var jsObj=new $rt_globals.Bullet.btTransform();return $rt_globals.Bullet.getPointer(jsObj);}
function AF8(b,c){var jsObj=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.btTransform);jsObj.setFromOpenGLMatrix(c);}
function AKz(b,c){var worldTrans=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.btTransform);var origin=worldTrans.getOrigin();var matrix3x3=worldTrans.getBasis();var row0=matrix3x3.getRow(0);var row1=matrix3x3.getRow(1);var row2=matrix3x3.getRow(2);c[0]=row0.getX();c[1]=row1.getX();c[2]=row2.getX();c[3]=0;c[4]=row0.getY();c[5]=row1.getY();c[6]=row2.getY();c[7]=0;c[8]=row0.getZ();c[9]=row1.getZ();c[10]=row2.getZ();c[11]=0;c[12]=origin.getX();c[13]=origin.getY();c[14]=origin.getZ();c[15]=1.0;}
var Lw=D(Ba);
function BtN(){var a=new Lw();UK(a);return a;}
function UK(a){BG(a);}
function Ux(a){return ((Dv()).bN(97,122)).bN(65,90);}
var Fy=D();
var BvQ=0;var BvR=0;var BvS=0;var BvT=0;var BvU=0;function BvV(){BvV=M(Fy);BkT();}
function BkT(){BvQ=(I4(B(19))).m2(B(20));BvR=!BvQ&&(I4(B(21))).m2(B(22))?1:0;BvS=!BvQ&&(I4(B(21))).m2(B(23))?1:0;BvT=!BvQ&&(I4(B(21))).m2(B(24))?1:0;BvU=!BvQ&&!BvS&&!BvT&&!BvR?1:0;}
var Dz=D(0);
var BX=D();
var Ek=D(BX);
var WB=D(Ek);
var BP=D();
var BvW=null;var BvX=null;var BvY=null;var BvZ=null;var Bv0=null;var Bv1=null;var Bv2=null;var Bv3=null;var Bv4=null;var Bv5=null;var Bv6=null;var Bv7=null;var Bv8=null;var Bv9=null;var Bv$=null;var Bv_=null;var Bwa=null;var Bwb=null;var Bwc=null;var Bwd=null;var Bwe=null;var Bwf=null;var Bwg=null;var Bwh=null;var Bwi=null;var Bwj=null;var Bwk=null;var Bwl=null;var Bwm=null;function Bo8(){Bo8=M(BP);Bdt();}
function Bdt(){BvW=BpV();BvX=Brc();BvY=Bmy();BvZ=Bq5();Bv0=Bt4();Bv1=Btp();Bv2=BnA();Bv3=Bo9();Bv4=BoS();Bv5=Bru();Bv6=BpI();Bv7=Bpa();Bv8=Bn7();Bv9=Bso();Bv$=Bsr();Bv_=Bst();Bwa=BrH();Bwb=Bnr();Bwc=BpN();Bwd=BtG();Bwe=BsH();Bwf=Bob();Bwg=BoI();Bwh=BoF();Bwi=Bo5();Bwj=Br1();Bwk=Bta();Bwl=Bt6();Bwm=Bnm();}
var I8=D(Ba);
function BoY(){var a=new I8();Vf(a);return a;}
function Vf(a){BG(a);}
function Xq(a){return ((((Dv()).bN(97,122)).bN(65,90)).bN(48,57)).cO(95);}
var ALb=D(I8);
function BqS(){var a=new ALb();Bbv(a);return a;}
function Bbv(a){Vf(a);}
function AX3(a){var b;b=(Xq(a)).gA(1);b.bm=1;return b;}
var Cd=D(0);
var GO=D(0);
function AE$(){var a=this;C.call(a);a.u2=null;a.yK=null;a.rr=null;}
function Bq3(a,b,c){var d=new AE$();Bkv(d,a,b,c);return d;}
function Bkv(a,b,c,d){a.rr=b;a.u2=c;a.yK=d;K(a);}
function ATK(a,b){if($rt_str(b.type).y(B(25)))a.rr.k7.cV(a.u2);else a.rr.k7.c5(a.u2,a.yK);a.rr.r_.rH();}
function ASD(a,b){a.c2(b);}
function Bc(){var a=this;C.call(a);a.EC=null;a.Il=0;}
function B$(a,b,c){K(a);a.EC=b;a.Il=c;}
function Br(a){return a.Il;}
function BaU(a){return a.EC.d();}
var D7=D(Bc);
var Bwn=null;var Bwo=null;var Bwp=null;var Bwq=null;var Bwr=null;var Bws=null;var Bwt=null;function KA(){KA=M(D7);A9P();}
function IN(a,b){var c=new D7();ADp(c,a,b);return c;}
function ADp(a,b,c){KA();B$(a,b,c);}
function A9P(){Bwn=IN(B(20),0);Bwo=IN(B(26),1);Bwp=IN(B(27),2);Bwq=IN(B(28),3);Bwr=IN(B(29),4);Bws=IN(B(30),5);Bwt=J(D7,[Bwn,Bwo,Bwp,Bwq,Bwr,Bws]);}
function BL(){var a=this;C.call(a);a.k=null;a.cN=0;a.vO=null;a.H5=0;}
var Bwu=0;function AEi(){AEi=M(BL);A48();}
function CX(a){var b,c;AEi();K(a);b=new E4;c=Bwu;Bwu=c+1|0;Jj(b,c);a.vO=b.d();}
function Lv(a,b){var c,d;AEi();K(a);c=new E4;d=Bwu;Bwu=d+1|0;Jj(c,d);a.vO=c.d();a.k=b;}
function HM(a,b,c,d){var e;e=d.K();while(true){if(b>e)return (-1);if(a.e(b,c,d)>=0)break;b=b+1|0;}return b;}
function HV(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.e(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function A9S(a,b){a.H5=b;}
function A8R(a){return a.H5;}
function AXU(a){var b,c,d;b=a.vO;c=a.v();d=H();Bp(I(Bp(I(Bp(d,60),b),58),c),62);return P(d);}
function A0K(a){return a.JX();}
function A1C(a){return a.k;}
function OR(a,b){a.k=b;}
function BjE(a,b){return 1;}
function Bk3(a){return null;}
function Sr(a){var b;a.cN=1;if(a.k!==null){if(!a.k.cN){b=a.k.iS();if(b!==null){a.k.cN=1;a.k=b;}a.k.ev();}else if(a.k instanceof G3&&a.k.dz.vC)a.k=a.k.k;}}
function A48(){Bwu=1;}
function Ca(){BL.call(this);this.bY=0;}
function ACT(a,b){Lv(a,b);a.bY=1;a.D_(1);}
function DK(a){CX(a);a.bY=1;}
function BlJ(a,b,c,d){var e;if((b+a.cr()|0)>d.K()){d.ek=1;return (-1);}e=a.bR(b,c);if(e<0)return (-1);return a.k.e(b+e|0,c,d);}
function BiW(a){return a.bY;}
function AVy(a,b){return 1;}
function Td(){Ca.call(this);this.ky=null;}
function Buh(a){var b=new Td();Ba4(b,a);return b;}
function Ba4(a,b){DK(a);a.ky=b.d();a.bY=b.j();}
function Bh7(a,b,c){var d,e,f,g;d=0;while(true){if(d>=a.ky.j())return a.ky.j();e=a.ky.g(d);f=b+d|0;if(e!=c.g(f)){g=a.ky;if(Iu(g.g(d))!=c.g(f))break;}d=d+1|0;}return (-1);}
function Bjl(a){var b,c;b=a.ky;c=H();I(I(c,B(31)),b);return P(c);}
var GM=D(0);
var G_=D();
function Bwv(){var a=new G_();AMT(a);return a;}
function AMT(a){K(a);}
function A7y(a,b){return 0;}
function A2P(a,b,c){return 0;}
function Kz(){var a=this;G_.call(a);a.d$=null;a.z9=0.0;a.Jn=0.0;a.Bx=W;a.EM=0.0;a.C5=W;a.ga=0;a.ry=0;a.Jx=W;a.Ep=0.0;a.Eo=0.0;a.AH=0;a.zY=0;a.nU=0;a.kt=0;a.lF=0;a.e0=null;a.x0=0.0;a.x1=0.0;a.m8=W;a.ep=null;a.fH=null;a.ns=null;a.nt=null;a.iJ=null;}
function Bww(a){var b=new Kz();ACs(b,a);return b;}
function Bwx(a,b,c,d,e){var f=new Kz();ALz(f,a,b,c,d,e);return f;}
function Bwy(a,b,c,d,e,f){var g=new Kz();SY(g,a,b,c,d,e,f);return g;}
function ACs(a,b){ALz(a,20.0,0.4000000059604645,1.100000023841858,2.147483648E9,b);}
function ALz(a,b,c,d,e,f){SY(a,b,b,c,d,e,f);}
function SY(a,b,c,d,e,f,g){AMT(a);a.e0=BsR();a.ep=BN();a.fH=BN();a.ns=BN();a.nt=BN();a.iJ=BqZ(a);if(g===null)G(Bl(B(32)));a.z9=b;a.Jn=c;a.Bx=Buz(d*1.0E9);a.EM=e;a.C5=Buz(f*1.0E9);a.d$=g;}
function St(a,b,c,d,e){return a.t_(b,c,d,e);}
function AZp(a,b,c,d,e){if(d>1)return 0;if(d){a.fH.hM(b,c);a.ga=0;a.kt=1;a.ns.l$(a.ep);a.nt.l$(a.fH);a.iJ.pX();}else{a.ep.hM(b,c);a.m8=Bwz.lN();a.e0.xH(b,c,a.m8);if(Bwz.Rj(1)){a.ga=0;a.kt=1;a.ns.l$(a.ep);a.nt.l$(a.fH);a.iJ.pX();}else{a.ga=1;a.kt=0;a.nU=0;a.x0=b;a.x1=c;if(!a.iJ.VH())AMv(a.iJ,a.EM);}}return a.d$.t_(b,c,d,e);}
function ACW(a,b,c,d){return a.Xe(b,c,d);}
function AND(a,b,c,d){var e;if(d>1)return 0;if(a.nU)return 0;if(d)a.fH.hM(b,c);else a.ep.hM(b,c);if(a.kt){if(a.d$===null)return 0;e=a.d$.Xn(a.ns,a.nt,a.ep,a.fH);return !a.d$.LD(a.ns.zR(a.nt),a.ep.zR(a.fH))&&!e?0:1;}a.e0.FA(b,c,Bwz.lN());if(a.ga&&!JZ(a,b,c,a.x0,a.x1)){a.iJ.pX();a.ga=0;}if(a.ga)return 0;a.lF=1;return a.d$.O3(b,c,a.e0.pL,a.e0.pK);}
function AJw(a,b,c,d,e){return a.T2(b,c,d,e);}
function ANr(a,b,c,d,e){var f,g,h,i,j;if(d>1)return 0;if(a.ga&&!JZ(a,b,c,a.x0,a.x1))a.ga=0;f=a.lF;a.lF=0;a.iJ.pX();if(a.nU)return 0;if(a.ga){a:{if(a.AH==e&&a.zY==d&&DV(Dj(DT(),a.Jx),a.Bx)){g=a.Ep;h=a.Eo;if(JZ(a,b,c,g,h))break a;}a.ry=0;}a.ry=a.ry+1|0;a.Jx=DT();a.Ep=b;a.Eo=c;a.AH=e;a.zY=d;a.m8=W;return a.d$.Ur(b,c,a.ry,e);}if(a.kt){a.kt=0;a.d$.K6();a.lF=1;if(d)a.e0.xH(a.ep.c4,a.ep.c3,Bwz.lN());else a.e0.xH(a.fH.c4,a.fH.c3,Bwz.lN());return 0;}i=0;if(f&&!a.lF)i=a.d$.La(b,c,d,e);j=Bwz.lN();if(DV(Dj(j,a.m8),a.C5))
{a.e0.FA(b,c,j);i=!a.d$.W9(a.e0.QA(),a.e0.Xl(),e)&&!i?0:1;}a.m8=W;return i;}
function JZ(a,b,c,d,e){return De(b-d)<a.z9&&De(c-e)<a.Jn?1:0;}
var Hr=D(0);
function C6(){var a=this;C.call(a);a.uz=null;a.lE=null;a.pq=0;a.pW=0;a.zp=null;}
function BwA(){var a=new C6();V7(a);return a;}
function BwB(a){var b=new C6();R_(b,a);return b;}
function BwC(a,b){var c=new C6();QI(c,a,b);return c;}
function BwD(a){var b=new C6();ALB(b,a);return b;}
function V7(a){a.pq=1;a.pW=1;a.pI();}
function R_(a,b){a.pq=1;a.pW=1;a.pI();a.uz=b;}
function QI(a,b,c){a.pq=1;a.pW=1;a.pI();a.uz=b;a.lE=c;}
function ALB(a,b){a.pq=1;a.pW=1;a.pI();a.lE=b;}
function A_I(a){return a;}
function A02(a){return a.uz;}
function ATI(a){return a.n9();}
function Bbg(a){a.B8(ZW());}
function A46(a,b){var c,d,e,f,g,h;b.q7((CB(a)).v());c=a.Kx();if(c!==null){d=H();I(I(d,B(9)),c);b.q7(P(d));}a:{b.Te();if(a.zp!==null){e=a.zp.data;f=e.length;g=0;while(true){if(g>=f)break a;h=e[g];b.q7(B(33));b.P1(h);g=g+1|0;}}}if(a.lE!==null&&a.lE!==a){b.q7(B(34));a.lE.B8(b);}}
var E6=D(C6);
function BwE(a,b){var c=new E6();YP(c,a,b);return c;}
function BwF(a){var b=new E6();AE_(b,a);return b;}
function BwG(a){var b=new E6();AJf(b,a);return b;}
function YP(a,b,c){QI(a,b,c);}
function AE_(a,b){R_(a,b);}
function AJf(a,b){ALB(a,b);}
var Hw=D(E6);
function BwH(a){var b=new Hw();SE(b,a);return b;}
function SE(a,b){AE_(a,b);}
var No=D();
var BwI=null;function Qi(){Qi=M(No);Bfl();}
function AAz(b,c){var d;Qi();d=BwI.V(b);if(d===null){d=Bt2(b,4,c);BwI.z(b,d);}return d;}
function J8(b){Qi();return AAz(b,100);}
function Zx(b){Qi();return (J8(b)).g1();}
function Ye(b,c){var d,e,f,g;Qi();if(b===null)G(Bl(B(35)));d=null;e=0;f=b.h;while(e<f){a:{g=b.p(e);if(g!==null){if(d===null){d=BwI.V(CB(g));if(d===null)break a;}d.mF(g);if(!c)d=null;}}e=e+1|0;}}
function Bfl(){BwI=EH();}
var P9=D(0);
function VY(){C.call(this);this.yj=null;}
function BnC(a){var b=new VY();Bjy(b,a);return b;}
function Bjy(a,b){a.yj=b;K(a);}
function AV_(a,b,c){AHy();BwJ.pw(N(b));return a.yj.SS(BwJ,c);}
function BiN(a,b,c){return a.Qx(b,c?1:0);}
var QX=D();
function ALM(){U.call(this);this.MT=0.0;}
function Bsm(a){var b=new ALM();Bdc(b,a);return b;}
function Bdc(a,b){Ci(a);a.MT=b;}
function AGX(){var a=this;Ba.call(a);a.xx=0;a.vb=0;a.Fu=0;}
function BW(a,b){var c=new AGX();AQS(c,a,b);return c;}
function Bou(a,b,c){var d=new AGX();A37(d,a,b,c);return d;}
function AQS(a,b,c){BG(a);a.vb=c;a.xx=b;}
function A37(a,b,c,d){BG(a);a.Fu=d;a.vb=c;a.xx=b;}
function A_T(a){var b;b=Bp4(a.xx);if(a.Fu)b.bO.fK(0,2048);b.bm=a.vb;return b;}
function Hl(){var a=this;U.call(a);a.SZ=0.0;a.N0=0.0;a.Dx=0.0;a.N9=0.0;}
function A9s(a,b){var c=new Hl();Of(c,a,b);return c;}
function Of(a,b,c){Ci(a);a.SZ=b;a.N0=c;a.Dx=A5F(b, -c);a.N9=1.0/(1.0-a.Dx);}
var V4=D();
function C7(){var a=this;BL.call(a);a.vC=0;a.mA=0;}
var BwK=null;function L6(){L6=M(C7);A_o();}
function Bs$(a){var b=new C7();FE(b,a);return b;}
function FE(a,b){L6();CX(a);a.mA=b;}
function AO$(a,b,c,d){var e,f;e=d.o6(a.mA);d.xw(a.mA,b);f=a.k.e(b,c,d);if(f<0)d.xw(a.mA,e);return f;}
function Bd9(a){return a.mA;}
function AUt(a){return B(36);}
function APK(a,b){return 0;}
function A_o(){BwK=Bnc();}
var M9=D(C7);
function BwL(a){var b=new M9();ALI(b,a);return b;}
function ALI(a,b){FE(a,b);}
function APW(a,b,c,d){var e,f;e=a.k5();f=d.eN(e);if(f!=b)b=(-1);return b;}
function Bjs(a){return B(37);}
var H9=D(0);
var AI2=D();
function B4(){var a=this;BL.call(a);a.b1=null;a.dz=null;a.bs=0;}
function BwM(){var a=new B4();Ds(a);return a;}
function Bon(a,b){var c=new B4();Yq(c,a,b);return c;}
function Ds(a){CX(a);}
function Yq(a,b,c){CX(a);a.b1=b;a.dz=c;a.bs=c.k5();}
function ATP(a,b,c,d){var e,f,g,h,i;if(a.b1===null)return (-1);e=d.kf(a.bs);d.eR(a.bs,b);f=a.b1.cY();g=0;while(true){if(g>=f){d.eR(a.bs,e);return (-1);}h=a.b1.p(g);i=h.e(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function AZm(a,b){a.dz.T(b);}
function AVO(a){return B(38);}
function Bdn(a,b){var c;a:{if(a.b1!==null){c=a.b1.fI();while(true){if(!c.bE())break a;if(!(c.bA()).cl(b))continue;else return 1;}}}return 0;}
function A0j(a,b){var c,d;a:{if(b.o6(a.bs)>=0){c=b.kf(a.bs);d=a.bs;if(c==b.o6(d)){c=0;break a;}}c=1;}return c;}
function AQx(a){var b,c,d,e;a.cN=1;if(a.dz!==null&&!a.dz.cN)a.dz.ev();a:{if(a.b1!==null){b=a.b1.cY();c=0;while(true){if(c>=b)break a;d=a.b1.p(c);e=d.iS();if(e===null)e=d;else{d.cN=1;a.b1.nO(c);a.b1.Qg(c,e);}if(!e.cN)e.ev();c=c+1|0;}}}if(a.k!==null)Sr(a);}
function Sz(){var a=this;B4.call(a);a.s_=null;a.Ec=0;}
function Bqp(a){var b=new Sz();A2L(b,a);return b;}
function A2L(a,b){Ds(a);a.s_=b.nl();a.Ec=b.bL;}
function A_E(a,b){a.k=b;}
function AUM(a,b,c,d){var e,f,g,h,i,j,k;e=d.eC();f=d.K();g=b+1|0;h=Cu(g,f);if(h>0){d.ek=1;return (-1);}i=c.g(b);if(!a.s_.r(i))return (-1);if(Cn(i)){if(h<0){j=c.g(g);if(B8(j))return (-1);}}else if(B8(i)&&b>e){k=c.g(b-1|0);if(Cn(k))return (-1);}return a.k.e(g,c,d);}
function Bgn(a){var b,c,d;b=!a.Ec?B(39):B(40);c=a.s_.d();d=H();I(I(I(d,B(41)),b),c);return P(d);}
var AJs=D(Ea);
function BrP(a){var b=new AJs();A4g(b,a);return b;}
function A4g(a,b){Iw(a,b,1.0,1.0);}
function AT0(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(Cn(l)){if(j>=d){if(h.d1(2)){j=j+(-1)|0;break a;}Bz();i=Bvy;break a;}m=k[j];if(!B8(m)){i=Cj(1);break a;}j=j+(-1)|0;i=HT(2);break a;}if(B8(l))i=Cj(1);if(l>=128){i=HT(1);j=j+(-1)|0;break a;}k=e.data;n=f+1|0;k[f]=l<<24>>24;c=j;f=n;}j=c;}h.eF(j);h.d7(f);return i;}
var M7=D(0);
var DE=D();
var BvC=null;var BwN=null;var BwO=null;var Bwz=null;var BwP=null;var BwQ=null;var BwR=null;var BwS=null;var BwT=null;var KD=D(0);
var J_=D();
function BwU(){var a=new J_();Vs(a);return a;}
function Vs(a){K(a);}
function A6T(a,b){}
var NA=D(0);
function G4(){var a=this;J_.call(a);a.oR=null;a.Ss=null;a.uf=0;a.Ge=0;a.kF=null;a.uN=null;}
function BwV(a,b,c,d,e,f){var g=new G4();AJO(g,a,b,c,d,e,f);return g;}
function AJO(a,b,c,d,e,f,g){Vs(a);a.oR=b;a.Ss=c;a.uf=d;a.Ge=e;a.kF=f;a.uN=g;}
function A5M(a){return a.oR;}
function AZs(a){return ASe(a.uf,a.Ge);}
function AT7(a){return a.kF.e9();}
function AO5(a){var b,c,d,e;b=H();b.c(AK4(a.uD()));if(b.j()>0)b.bv(32);(b.c((a.oR.v()).d())).bv(40);c=a.yb();d=0;while(true){e=c.data;if(d>=e.length)break;if(d>0)b.bv(44);b.c(e[d].v());d=d+1|0;}return (b.bv(41)).d();}
function Biw(a,b){var c,d,e,f,g,h,i;if(a.uf&1)G(BtZ());if(a.uN===null)G(BoH());c=b.data;d=c.length;if(d!=a.kF.data.length)G(DB());e=0;while(true){if(e>=d){f=b.data;g=new (a.oR.hO);a.uN.call(g,f);return g;}if(!a.kF.data[e].hT()&&c[e]!==null){h=a.kF.data[e];i=c[e];if(!h.yI(i))G(DB());}if(a.kF.data[e].hT()&&c[e]===null)break;e=e+1|0;}G(DB());}
function DY(){BL.call(this);this.ba=null;}
function HE(a,b,c,d){Lv(a,c);a.ba=b;a.D_(d);}
function BlS(a){return a.ba;}
function A08(a,b){return !a.ba.cl(b)&&!a.k.cl(b)?0:1;}
function BjS(a,b){return 1;}
function AXG(a){var b;a.cN=1;if(a.k!==null&&!a.k.cN){b=a.k.iS();if(b!==null){a.k.cN=1;a.k=b;}a.k.ev();}if(a.ba!==null){if(!a.ba.cN){b=a.ba.iS();if(b!==null){a.ba.cN=1;a.ba=b;}a.ba.ev();}else if(a.ba instanceof G3&&a.ba.dz.vC)a.ba=a.ba.k;}}
var Df=D(DY);
function Bq$(a,b,c){var d=new Df();GA(d,a,b,c);return d;}
function GA(a,b,c,d){HE(a,b,c,d);}
function A6J(a,b,c,d){var e;if(!a.ba.bc(d))return a.k.e(b,c,d);e=a.ba.e(b,c,d);if(e>=0)return e;return a.k.e(b,c,d);}
function BbK(a){return B(42);}
var AFe=D(Df);
function Bsi(a,b,c){var d=new AFe();Bcs(d,a,b,c);return d;}
function Bcs(a,b,c,d){GA(a,b,c,d);L6();b.T(BwK);}
function BeI(a,b,c,d){var e,f;e=a.ba.e(b,c,d);if(e<0)return (-1);if(e>b){while(true){f=a.ba.e(e,c,d);if(f<=e)break;e=f;}b=e;}return a.k.e(b,c,d);}
var KK=D();
function BwW(){var a=new KK();ABv(a);return a;}
function ABv(a){K(a);}
function AFs(a,b){G(Bh(B(43)));}
function If(){var a=this;KK.call(a);a.gg=null;a.cM=null;a.hK=null;}
function AZW(a,b,c){var d=new If();Lg(d,a,b,c);return d;}
function Lg(a,b,c,d){var e,f;ABv(a);Hb();if(d!==BwX&&d!==BwY&&d!==BwZ){e=new DD;f=H();I(I(I(f,B(44)),d),B(45));Eo(e,P(f));G(e);}a.gg=b;a.cM=Bge(c);a.hK=d;}
function ANA(a){return a.cM;}
function A4R(a){var b;b=a.cM.Ar(47);if(b<0)return a.cM;return a.cM.fc(b+1|0);}
function BkU(a){var b,c;b=a.A9();c=b.Ar(46);if(c==(-1))return b;return b.c0(0,c);}
function A6$(a){return a.hK;}
function AYJ(a){var b,c,d,e;b=a.hK;Hb();if(b===BwZ)return (Pp()).GS(a);c=a.gg.WD(a.cM);if(c!==null)return c;d=new DD;b=a.cM;e=H();I(I(e,b),B(46));Eo(d,P(e));G(d);}
function ATd(a){return a.Fi(null);}
function ANQ(a,b){var c,d,$$je;c=a.hK;Hb();if(c===BwZ)return AFs(a,b);if(a.gg.Q8(a.cM))return a.gg.f4.V(a.cM);a:{try{d=BoD(a.M8(),B(47));}catch($$e){$$je=R($$e);if($$je instanceof K$){break a;}else{throw $$e;}}return d;}return null;}
function A4B(a){var b,c,d,e,f,g,h,i,j,k,$$je;b=Y((a.LP()));if(!b)b=512;c=CE(b);d=0;e=a.sx();a:{try{try{while(true){f=c.data.length;g=e.tB(c,d,f-d|0);if(g==(-1))break;d=d+g|0;if(d==f){h=CE(f*2|0);Bi(c,0,h,0,d);c=h;}}break a;}catch($$e){$$je=R($$e);if($$je instanceof DZ){i=$$je;}else{throw $$e;}}j=new DD;k=H();I(I(k,B(48)),a);S_(j,P(k),i);G(j);}catch($$e){$$je=R($$e);j=$$je;}b:{try{if(e!==null)e.gh();break b;}catch($$e){$$je=R($$e);if($$je instanceof DZ){}else{throw $$e;}}}G(j);}c:{try{if(e!==null)e.gh();break c;}
catch($$e){$$je=R($$e);if($$je instanceof DZ){}else{throw $$e;}}}if(d>=f)h=c;else{h=CE(d);Bi(c,0,h,0,d);}return h;}
function ANt(a,b){var c,d,e,f,g;c=new If;d=a.gg;if(a.cM.bW())e=B(49);else{f=a.cM;g=!a.cM.BX(B(50))?B(50):B(49);e=H();I(I(e,f),g);e=P(e);}f=H();I(I(f,e),b);Lg(c,d,P(f),a.hK);return c;}
function ANR(a){var b,c;b=a.cM.Ms(B(50));c=B(49);if(b>0)c=a.cM.c0(0,b);return AZW(a.gg,c,a.hK);}
function BcM(a){var b;b=a.hK;Hb();if(b===BwZ)return (Pp()).BD(a);return a.gg.T8(a.cM);}
function BlW(a){return a.cM;}
function Bge(b){var c;c=b.w_(B(51),B(50));if(c.BX(B(50)))c=c.c0(0,c.j()-1|0);return c;}
var BU=D();
var Bw0=null;var Bw1=null;var Bw2=null;var Bw3=null;var Bw4=null;var Bw5=null;var Bw6=null;var Bw7=null;var Bw8=null;var Bw9=null;var Bw$=null;var Bw_=null;var Bxa=null;var Bxb=null;var Bxc=null;var Bxd=null;var Bxe=null;var Bxf=null;var Bxg=null;var Bxh=null;var Bxi=null;var Bxj=null;var Bxk=null;var Bxl=null;var Bxm=null;function MK(){MK=M(BU);A6C();}
function Eq(){MK();return Bxl.g1();}
function ABD(){MK();Bxl.dC();Bxm.dC();}
function A6C(){Bw0=E3();Bw1=E3();Bw2=E3();Bw3=E3();Bw4=E3();Bw5=S();Bw6=S();Bw7=S();Bw8=S();Bw9=S();Bw$=S();Bw_=S();Bxa=S();Bxb=Dq();Bxc=Dq();Bxd=Dq();Bxe=Dq();Bxf=Dq();Bxg=Dq();Bxh=Dq();Bxi=Dq();Bxj=Dq();Bxk=BS();Bxl=Bn$();Bxm=BsL();}
function F_(){var a=this;C.call(a);a.o=null;a.bq=0;}
function Bxn(){var a=new F_();MI(a);return a;}
function BtX(a){var b=new F_();Mt(b,a);return b;}
function MI(a){Mt(a,16);}
function Mt(a,b){K(a);a.o=Ck(b);}
function AGV(a,b){return a.zJ(a.bq,b);}
function Og(a,b){return a.l6(a.bq,b);}
function Rx(a,b,c){var d,e,f;if(b>=0&&b<=a.bq){if(c===null)c=B(52);else if(c.bW())return a;a.hu(a.bq+c.j()|0);d=a.bq-1|0;while(d>=b){a.o.data[d+c.j()|0]=a.o.data[d];d=d+(-1)|0;}a.bq=a.bq+c.j()|0;d=0;while(d<c.j()){e=a.o.data;f=b+1|0;e[b]=c.g(d);d=d+1|0;b=f;}return a;}G(MW());}
function T0(a,b){return a.Es(b,10);}
function A7v(a,b,c){return a.QT(a.bq,b,c);}
function BbP(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(c<0){e=0;c= -c|0;}a:{if(c<d){if(e)Co(a,b,b+1|0);else{Co(a,b,b+2|0);f=a.o.data;g=b+1|0;f[b]=45;b=g;}a.o.data[b]=Hv(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=CJ(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;Co(a,b,b+i|0);if(e)l=b;else{f=a.o.data;l=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.o.data;g=l+1|0;f[l]=Hv(c/k|0,d);c=c%k|0;k=k/d|0;l=g;}}}return a;}
function AL3(a,b){return a.HF(a.bq,b);}
function Xj(a,b,c){return a.St(b,c,10);}
function AXE(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(HP(c,W)){e=0;c=Bey(c);}a:{f=N(d);if(HP(c,f)){if(e)Co(a,b,b+1|0);else{Co(a,b,b+2|0);g=a.o.data;h=b+1|0;g[b]=45;b=h;}a.o.data[b]=Hv(Y(c),d);}else{i=1;j=N(1);while(true){k=Bn(j,f);if(DV(k,j))break;if(F4(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;Co(a,b,b+i|0);if(e)l=b;else{g=a.o.data;l=b+1|0;g[b]=45;}while(true){if(DV(j,W))break a;g=a.o.data;h=l+1|0;g[l]=Hv(Y(Cx(c,j)),d);c=GN(c,j);j=Cx(j,f);l=h;}}}return a;}
function Z4(a,b){return a.Gv(a.bq,b);}
function AIv(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=Cu(c,0.0);if(!d){Co(a,b,b+3|0);e=a.o.data;d=b+1|0;e[b]=48;e=a.o.data;f=d+1|0;e[d]=46;a.o.data[f]=48;return a;}if(!d){Co(a,b,b+4|0);e=a.o.data;d=b+1|0;e[b]=45;e=a.o.data;f=d+1|0;e[d]=48;e=a.o.data;d=f+1|0;e[f]=46;a.o.data[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Co(a,b,b+3|0);e=a.o.data;d=b+1|0;e[b]=78;e=a.o.data;f=d+1|0;e[d]=97;a.o.data[f]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Co(a,b,b+8|0);d=b;}else{Co(a,b,b+9|0);e=a.o.data;d=b+1|0;e[b]
=45;}e=a.o.data;f=d+1|0;e[d]=73;e=a.o.data;d=f+1|0;e[f]=110;e=a.o.data;f=d+1|0;e[d]=102;e=a.o.data;d=f+1|0;e[f]=105;e=a.o.data;f=d+1|0;e[d]=110;e=a.o.data;d=f+1|0;e[f]=105;e=a.o.data;f=d+1|0;e[d]=116;a.o.data[f]=121;return a;}UV();g=Bxo;AIb(c,g);h=g.tc;i=g.sL;j=g.yY;k=1;l=1;if(j)l=2;m=9;n=A18(h);if(n>0)m=m-n|0;if(i<7&&i>=(-3)){if(i>=0){k=i+1|0;m=Bm(m,k+1|0);i=0;}else{h=h/Bxp.data[ -i|0]|0;m=m-i|0;i=0;}}if(i){l=l+2|0;if(!(i>(-10)&&i<10))l=l+1|0;if(i<0)l=l+1|0;}if(i&&m==k)m=m+1|0;d=l+m|0;Co(a,b,b+d|0);if(!j)f
=b;else{e=a.o.data;f=b+1|0;e[b]=45;}o=100000000;p=0;while(p<m){if(o<=0)q=0;else{q=h/o|0;h=h%o|0;}e=a.o.data;d=f+1|0;e[f]=(48+q|0)&65535;k=k+(-1)|0;if(k)f=d;else{e=a.o.data;f=d+1|0;e[d]=46;}o=o/10|0;p=p+1|0;}if(i){e=a.o.data;d=f+1|0;e[f]=69;if(i>=0)f=d;else{i= -i|0;e=a.o.data;f=d+1|0;e[d]=45;}if(i<10)r=f;else{e=a.o.data;r=f+1|0;e[f]=(48+(i/10|0)|0)&65535;}a.o.data[r]=(48+(i%10|0)|0)&65535;}return a;}
function Vt(a,b){return a.DY(a.bq,b);}
function AE9(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=Cu(c,0.0);if(!d){Co(a,b,b+3|0);e=a.o.data;d=b+1|0;e[b]=48;e=a.o.data;f=d+1|0;e[d]=46;a.o.data[f]=48;return a;}if(!d){Co(a,b,b+4|0);e=a.o.data;d=b+1|0;e[b]=45;e=a.o.data;f=d+1|0;e[d]=48;e=a.o.data;d=f+1|0;e[f]=46;a.o.data[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Co(a,b,b+3|0);e=a.o.data;d=b+1|0;e[b]=78;e=a.o.data;f=d+1|0;e[d]=97;a.o.data[f]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Co(a,b,b+8|0);d=b;}else{Co(a,b,b+9|0);e=a.o.data;d=b+1|0;e[b]
=45;}e=a.o.data;f=d+1|0;e[d]=73;e=a.o.data;d=f+1|0;e[f]=110;e=a.o.data;f=d+1|0;e[d]=102;e=a.o.data;d=f+1|0;e[f]=105;e=a.o.data;f=d+1|0;e[d]=110;e=a.o.data;d=f+1|0;e[f]=105;e=a.o.data;f=d+1|0;e[d]=116;a.o.data[f]=121;return a;}UV();g=Bxq;WO(c,g);h=g.tX;i=g.st;j=g.yH;k=1;l=1;if(j)l=2;m=18;n=AZJ(h);if(n>0)m=m-n|0;if(i<7&&i>=(-3)){if(i>=0){k=i+1|0;m=Bm(m,k+1|0);i=0;}else{h=Cx(h,Bxr.data[ -i|0]);m=m-i|0;i=0;}}if(i){l=l+2|0;if(!(i>(-10)&&i<10))l=l+1|0;if(!(i>(-100)&&i<100))l=l+1|0;if(i<0)l=l+1|0;}if(i&&m==k)m=m+1
|0;d=l+m|0;Co(a,b,b+d|0);if(!j)o=b;else{e=a.o.data;o=b+1|0;e[b]=45;}p=BI(1569325056, 23283064);q=0;while(q<m){if(DV(p,W))r=0;else{r=Y(Cx(h,p));h=GN(h,p);}e=a.o.data;d=o+1|0;e[o]=(48+r|0)&65535;k=k+(-1)|0;if(k)o=d;else{e=a.o.data;o=d+1|0;e[d]=46;}p=Cx(p,N(10));q=q+1|0;}if(i){e=a.o.data;d=o+1|0;e[o]=69;if(i>=0)f=d;else{i= -i|0;e=a.o.data;f=d+1|0;e[d]=45;}if(i>=100){e=a.o.data;d=f+1|0;e[f]=(48+(i/100|0)|0)&65535;i=i%100|0;e=a.o.data;o=d+1|0;e[d]=(48+(i/10|0)|0)&65535;}else if(i<10)o=f;else{e=a.o.data;o=f+1|0;e[f]
=(48+(i/10|0)|0)&65535;}a.o.data[o]=(48+(i%10|0)|0)&65535;}return a;}
function A18(b){var c,d,e,f;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;f=e*100|0;if(b%f|0)f=e;else c=c|2;if(!(b%(f*10|0)|0))c=c|1;return c;}
function AZJ(b){var c,d,e,f;c=N(1);d=0;e=16;UV();f=Bxs.data.length-1|0;while(f>=0){if(Z(GN(b,Bn(c,Bxs.data[f])),W)){d=d|e;c=Bn(c,Bxs.data[f]);}e=e>>>1;f=f+(-1)|0;}return d;}
function QA(a,b){return a.xK(a.bq,b);}
function R$(a,b,c){Co(a,b,b+1|0);a.o.data[b]=c;return a;}
function Vp(a,b,c){return a.l6(b,c===null?B(52):c.d());}
function Zo(a,b){return a.Ao(a.bq,b);}
function Sj(a,b,c){return a.l6(b,!c?B(53):B(54));}
function PK(a,b){var c;if(a.o.data.length>=b)return;c=a.o.data.length>=1073741823?2147483647:Bm(b,Bm(a.o.data.length*2|0,5));a.o=Mz(a.o,c);}
function Q0(a){return HK(a.o,0,a.bq);}
function Qq(a){return a.bq;}
function S0(a,b){if(b>=0&&b<a.bq)return a.o.data[b];G(DS());}
function T7(a,b,c,d){return a.yg(a.bq,b,c,d);}
function AH_(a,b,c,d,e){var f,g;if(d<=e&&e<=c.j()&&d>=0){Co(a,b,(b+e|0)-d|0);while(d<e){f=a.o.data;g=b+1|0;f[b]=c.g(d);d=d+1|0;b=g;}return a;}G(DS());}
function AMR(a,b){return a.IJ(b,0,b.j());}
function R3(a,b,c,d){return a.w8(a.bq,b,c,d);}
function PA(a,b,c,d,e){var f,g,h,i,j;Co(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.o.data;i=b+1|0;j=d+1|0;h[b]=g[d];b=i;d=j;}return a;}
function Ra(a,b){return a.wg(b,0,b.data.length);}
function AKn(a,b,c){return a.c0(b,c);}
function AGa(a,b,c,d,e){var f,g,h,i;if(b>c)G(Dl(B(55)));while(b<c){f=d.data;g=e+1|0;h=a.o.data;i=b+1|0;f[e]=h[b];e=g;b=i;}}
function ALj(a,b){a.bq=b;}
function ALA(a,b){var c,d,e;if(b>=0&&b<a.bq){a.bq=a.bq-1|0;while(b<a.bq){c=a.o.data;d=a.o.data;e=b+1|0;c[b]=d[e];b=e;}return a;}G(MW());}
function AL2(a,b,c){var d,e,f,g,h,i;d=Cu(b,c);if(d<=0&&b<=a.bq){if(!d)return a;e=a.bq-c|0;a.bq=a.bq-(c-b|0)|0;f=0;while(f<e){g=a.o.data;d=b+1|0;h=a.o.data;i=c+1|0;g[b]=h[c];f=f+1|0;b=d;c=i;}return a;}G(MW());}
function Co(a,b,c){var d,e;d=a.bq-b|0;a.hu((a.bq+c|0)-b|0);e=d-1|0;while(e>=0){a.o.data[c+e|0]=a.o.data[b+e|0];e=e+(-1)|0;}a.bq=a.bq+(c-b|0)|0;}
function AEs(a,b,c){if(b<=c&&b>=0&&c<=a.bq)return HK(a.o,b,c-b|0);G(DS());}
var GZ=D(0);
var T1=D(F_);
function Bhb(){var a=new T1();Bbd(a);return a;}
function Bbd(a){MI(a);}
function ARz(a,b){Og(a,b);return a;}
function A13(a,b){QA(a,b);return a;}
function A4H(a,b,c,d){R3(a,b,c,d);return a;}
function ASg(a,b){Ra(a,b);return a;}
function A7F(a,b,c,d){T7(a,b,c,d);return a;}
function BjB(a,b){AMR(a,b);return a;}
function BdY(a,b,c,d,e){AH_(a,b,c,d,e);return a;}
function Bei(a,b,c,d,e){PA(a,b,c,d,e);return a;}
function Bke(a,b,c){R$(a,b,c);return a;}
function BhS(a,b,c){Rx(a,b,c);return a;}
function AS0(a,b,c,d,e){return a.Uu(b,c,d,e);}
function A8x(a,b,c,d){return a.Qt(b,c,d);}
function Bap(a,b,c,d,e){return a.Nb(b,c,d,e);}
function Bhr(a,b,c,d){return a.S8(b,c,d);}
function A6h(a,b){return S0(a,b);}
function BlN(a){return Qq(a);}
function A8K(a){return Q0(a);}
function A81(a,b){PK(a,b);}
function BiR(a,b,c){return a.W_(b,c);}
function A6y(a,b,c){return a.LX(b,c);}
var Qk=D();
var Bxt=null;function Bxu(){Bxu=M(Qk);A4V();}
function A4V(){Bxt=BN();}
function Dx(){var a=this;C.call(a);a.ih=0;a.D=0;a.bd=0;a.f2=0;}
function Hj(a,b){K(a);a.f2=(-1);a.ih=b;a.bd=b;}
function DC(a){return a.ih;}
function Cr(a){return a.D;}
function Iz(a,b){var c,d,e;if(b>=0&&b<=a.bd){a.D=b;if(b<a.f2)a.f2=0;return a;}c=new CH;d=a.bd;e=H();Bp(V(I(V(I(e,B(56)),b),B(57)),d),93);EO(c,P(e));G(c);}
function BQ(a){return a.bd;}
function Lj(a,b){var c,d,e;if(b>=0&&b<=a.ih){if(a.f2>b)a.f2=(-1);a.bd=b;if(a.D>a.bd)a.D=a.bd;return a;}c=new CH;d=a.ih;e=H();Bp(V(I(V(I(e,B(58)),b),B(57)),d),93);EO(c,P(e));G(c);}
function HI(a){a.D=0;a.bd=a.ih;a.f2=(-1);return a;}
function I0(a){a.bd=a.D;a.D=0;a.f2=(-1);return a;}
function Bj(a){return a.bd-a.D|0;}
function CK(a){return a.D>=a.bd?0:1;}
var AAT=D();
var J4=D(CF);
var Gv=D();
function Pu(a){K(a);}
function X(){var a=this;Gv.call(a);a.bL=0;a.ce=0;a.bO=null;a.nN=null;a.oo=null;a.bm=0;}
var Bxv=null;function MR(){MR=M(X);ARf();}
function Bo(a){MR();Pu(a);a.bO=Bs0(2048);}
function A8t(a){return null;}
function A7w(a){return a.bO;}
function Bd6(a){return !a.ce?(a.bO.me(0)>=2048?0:1):a.bO.Wv(0)>=2048?0:1;}
function Ba6(a){return a.bm;}
function BiM(a){return a;}
function AO3(a){var b;if(a.oo===null){b=a.cs();a.oo=Bqf(a,b);a.oo.gA(a.ce);}return a.oo;}
function A8E(a){var b;if(a.nN===null){b=a.cs();a.nN=Bos(a,b,a);a.nN.gA(a.kz());a.nN.bm=a.bm;}return a.nN;}
function BkZ(a){return 0;}
function A2V(a,b){if(a.bL^b){a.bL=a.bL?0:1;a.ce=a.ce?0:1;}if(!a.bm)a.bm=1;return a;}
function ASW(a){return a.bL;}
function Lf(b,c){MR();return b.r(c);}
function IK(b,c){MR();if(b.bV()!==null&&c.bV()!==null)return (b.bV()).Rp(c.bV());return 1;}
function NK(b,c){MR();return (ALX(Bxv,b)).LH(c);}
function ARf(){Bxv=Bn9();}
function AHL(){X.call(this);this.JV=null;}
function BoG(a){var b=new AHL();Bcq(b,a);return b;}
function Bcq(a,b){a.JV=b;Bo(a);}
function A4t(a,b){return AF1(b);}
var D0=D();
var Gc=D(D0);
var C$=D(Gc);
var Bxw=null;function Bxx(){Bxx=M(C$);A7I();}
function A7I(){Bxw=S();}
var Ih=D();
var Bxy=null;var Bxz=null;var BxA=null;function A0Q(){A0Q=M(Ih);AR1();}
function Bn9(){var a=new Ih();AAp(a);return a;}
function AAp(a){A0Q();K(a);}
function ALX(a,b){var c,d,e;c=0;while(true){A0Q();if(c>=BxA.data.length)G(BoM(B(49),B(49),b));d=BxA.data[c];e=d.data;if(b.y(e[0]))break;c=c+1|0;}return e[1];}
function AR1(){Bxy=BpH();Bxz=BrZ();BxA=J($rt_arraycls(C),[J(C,[B(59),Bp9()]),J(C,[B(60),BmE()]),J(C,[B(61),Bto()]),J(C,[B(62),BtN()]),J(C,[B(63),Bxz]),J(C,[B(64),Bsc()]),J(C,[B(65),Boh()]),J(C,[B(66),BqR()]),J(C,[B(67),BqH()]),J(C,[B(68),Bm1()]),J(C,[B(69),Bnz()]),J(C,[B(70),BqU()]),J(C,[B(71),Bpc()]),J(C,[B(72),Bmx()]),J(C,[B(73),BtC()]),J(C,[B(74),Bnu()]),J(C,[B(75),Bsa()]),J(C,[B(76),Brl()]),J(C,[B(77),Bsb()]),J(C,[B(78),Bm6()]),J(C,[B(79),BtU()]),J(C,[B(80),Brd()]),J(C,[B(81),BoJ()]),J(C,[B(82),Btm()]),
J(C,[B(83),Bth()]),J(C,[B(84),BpS()]),J(C,[B(85),Bm4()]),J(C,[B(86),Bs1()]),J(C,[B(87),Bxy]),J(C,[B(88),BoY()]),J(C,[B(89),BqS()]),J(C,[B(90),Bxy]),J(C,[B(91),Bmt()]),J(C,[B(92),Bxz]),J(C,[B(93),BnS()]),J(C,[B(94),Q(0,127)]),J(C,[B(95),Q(128,255)]),J(C,[B(96),Q(256,383)]),J(C,[B(97),Q(384,591)]),J(C,[B(98),Q(592,687)]),J(C,[B(99),Q(688,767)]),J(C,[B(100),Q(768,879)]),J(C,[B(101),Q(880,1023)]),J(C,[B(102),Q(1024,1279)]),J(C,[B(103),Q(1280,1327)]),J(C,[B(104),Q(1328,1423)]),J(C,[B(105),Q(1424,1535)]),J(C,[B(106),
Q(1536,1791)]),J(C,[B(107),Q(1792,1871)]),J(C,[B(108),Q(1872,1919)]),J(C,[B(109),Q(1920,1983)]),J(C,[B(110),Q(2304,2431)]),J(C,[B(111),Q(2432,2559)]),J(C,[B(112),Q(2560,2687)]),J(C,[B(113),Q(2688,2815)]),J(C,[B(114),Q(2816,2943)]),J(C,[B(115),Q(2944,3071)]),J(C,[B(116),Q(3072,3199)]),J(C,[B(117),Q(3200,3327)]),J(C,[B(118),Q(3328,3455)]),J(C,[B(119),Q(3456,3583)]),J(C,[B(120),Q(3584,3711)]),J(C,[B(121),Q(3712,3839)]),J(C,[B(122),Q(3840,4095)]),J(C,[B(123),Q(4096,4255)]),J(C,[B(124),Q(4256,4351)]),J(C,[B(125),
Q(4352,4607)]),J(C,[B(126),Q(4608,4991)]),J(C,[B(127),Q(4992,5023)]),J(C,[B(128),Q(5024,5119)]),J(C,[B(129),Q(5120,5759)]),J(C,[B(130),Q(5760,5791)]),J(C,[B(131),Q(5792,5887)]),J(C,[B(132),Q(5888,5919)]),J(C,[B(133),Q(5920,5951)]),J(C,[B(134),Q(5952,5983)]),J(C,[B(135),Q(5984,6015)]),J(C,[B(136),Q(6016,6143)]),J(C,[B(137),Q(6144,6319)]),J(C,[B(138),Q(6400,6479)]),J(C,[B(139),Q(6480,6527)]),J(C,[B(140),Q(6528,6623)]),J(C,[B(141),Q(6624,6655)]),J(C,[B(142),Q(6656,6687)]),J(C,[B(143),Q(7424,7551)]),J(C,[B(144),
Q(7552,7615)]),J(C,[B(145),Q(7616,7679)]),J(C,[B(146),Q(7680,7935)]),J(C,[B(147),Q(7936,8191)]),J(C,[B(148),Q(8192,8303)]),J(C,[B(149),Q(8304,8351)]),J(C,[B(150),Q(8352,8399)]),J(C,[B(151),Q(8400,8447)]),J(C,[B(152),Q(8448,8527)]),J(C,[B(153),Q(8528,8591)]),J(C,[B(154),Q(8592,8703)]),J(C,[B(155),Q(8704,8959)]),J(C,[B(156),Q(8960,9215)]),J(C,[B(157),Q(9216,9279)]),J(C,[B(158),Q(9280,9311)]),J(C,[B(159),Q(9312,9471)]),J(C,[B(160),Q(9472,9599)]),J(C,[B(161),Q(9600,9631)]),J(C,[B(162),Q(9632,9727)]),J(C,[B(163),
Q(9728,9983)]),J(C,[B(164),Q(9984,10175)]),J(C,[B(165),Q(10176,10223)]),J(C,[B(166),Q(10224,10239)]),J(C,[B(167),Q(10240,10495)]),J(C,[B(168),Q(10496,10623)]),J(C,[B(169),Q(10624,10751)]),J(C,[B(170),Q(10752,11007)]),J(C,[B(171),Q(11008,11263)]),J(C,[B(172),Q(11264,11359)]),J(C,[B(173),Q(11392,11519)]),J(C,[B(174),Q(11520,11567)]),J(C,[B(175),Q(11568,11647)]),J(C,[B(176),Q(11648,11743)]),J(C,[B(177),Q(11776,11903)]),J(C,[B(178),Q(11904,12031)]),J(C,[B(179),Q(12032,12255)]),J(C,[B(180),Q(12272,12287)]),J(C,[B(181),
Q(12288,12351)]),J(C,[B(182),Q(12352,12447)]),J(C,[B(183),Q(12448,12543)]),J(C,[B(184),Q(12544,12591)]),J(C,[B(185),Q(12592,12687)]),J(C,[B(186),Q(12688,12703)]),J(C,[B(187),Q(12704,12735)]),J(C,[B(188),Q(12736,12783)]),J(C,[B(189),Q(12784,12799)]),J(C,[B(190),Q(12800,13055)]),J(C,[B(191),Q(13056,13311)]),J(C,[B(192),Q(13312,19893)]),J(C,[B(193),Q(19904,19967)]),J(C,[B(194),Q(19968,40959)]),J(C,[B(195),Q(40960,42127)]),J(C,[B(196),Q(42128,42191)]),J(C,[B(197),Q(42752,42783)]),J(C,[B(198),Q(43008,43055)]),J(C,
[B(199),Q(44032,55203)]),J(C,[B(200),Q(55296,56191)]),J(C,[B(201),Q(56192,56319)]),J(C,[B(202),Q(56320,57343)]),J(C,[B(203),Q(57344,63743)]),J(C,[B(204),Q(63744,64255)]),J(C,[B(205),Q(64256,64335)]),J(C,[B(206),Q(64336,65023)]),J(C,[B(207),Q(65024,65039)]),J(C,[B(208),Q(65040,65055)]),J(C,[B(209),Q(65056,65071)]),J(C,[B(210),Q(65072,65103)]),J(C,[B(211),Q(65104,65135)]),J(C,[B(212),Q(65136,65279)]),J(C,[B(213),Q(65280,65519)]),J(C,[B(214),Q(0,1114111)]),J(C,[B(215),BqW()]),J(C,[B(216),BW(0,1)]),J(C,[B(217),
IW(62,1)]),J(C,[B(218),BW(1,1)]),J(C,[B(219),BW(2,1)]),J(C,[B(220),BW(3,0)]),J(C,[B(221),BW(4,0)]),J(C,[B(222),BW(5,1)]),J(C,[B(223),IW(448,1)]),J(C,[B(224),BW(6,1)]),J(C,[B(225),BW(7,0)]),J(C,[B(226),BW(8,1)]),J(C,[B(227),IW(3584,1)]),J(C,[B(228),BW(9,1)]),J(C,[B(229),BW(10,1)]),J(C,[B(230),BW(11,1)]),J(C,[B(231),IW(28672,0)]),J(C,[B(232),BW(12,0)]),J(C,[B(233),BW(13,0)]),J(C,[B(234),BW(14,0)]),J(C,[B(235),BrR(983040,1,1)]),J(C,[B(236),BW(15,0)]),J(C,[B(237),BW(16,1)]),J(C,[B(238),BW(18,1)]),J(C,[B(239),Bou(19,
0,1)]),J(C,[B(240),IW(1643118592,1)]),J(C,[B(241),BW(20,0)]),J(C,[B(242),BW(21,0)]),J(C,[B(243),BW(22,0)]),J(C,[B(244),BW(23,0)]),J(C,[B(245),BW(24,1)]),J(C,[B(246),IW(2113929216,1)]),J(C,[B(247),BW(25,1)]),J(C,[B(248),BW(26,0)]),J(C,[B(249),BW(27,0)]),J(C,[B(250),BW(28,1)]),J(C,[B(251),BW(29,0)]),J(C,[B(252),BW(30,0)])]);}
var Q2=D(0);
function MB(){var a=this;C.call(a);a.eZ=null;a.e3=null;a.o4=null;a.rc=null;}
var BxB=null;function AB6(){AB6=M(MB);Bh2();}
function AWU(){var a=new MB();U8(a);return a;}
function ANO(a,b){return b.L(a.o4);}
function BlC(a,b){return b.L(a.rc);}
function U8(a){AB6();K(a);a.eZ=S();a.e3=S();a.o4=S();a.rc=S();a.Qe();}
function Bf0(a,b,c){a.eZ.I(b.l>=c.l?c.l:b.l,b.m>=c.m?c.m:b.m,b.n>=c.n?c.n:b.n);a.e3.I(b.l<=c.l?c.l:b.l,b.m<=c.m?c.m:b.m,b.n<=c.n?c.n:b.n);a.eT();return a;}
function AZ$(a){((a.o4.L(a.eZ)).eE(a.e3)).dk(0.5);(a.rc.L(a.e3)).fN(a.eZ);}
function BaW(a){a.eZ.I(Infinity,Infinity,Infinity);a.e3.I((-Infinity),(-Infinity),(-Infinity));a.o4.I(0.0,0.0,0.0);a.rc.I(0.0,0.0,0.0);return a;}
function A1R(a){return a.Hs(a.eZ.I(0.0,0.0,0.0),a.e3.I(0.0,0.0,0.0));}
function A5A(a,b,c,d){return a.Hs(a.eZ.I(JE(a.eZ.l,b),JE(a.eZ.m,c),JE(a.eZ.n,d)),a.e3.I(Ki(a.e3.l,b),Ki(a.e3.m,c),Ki(a.e3.n,d)));}
function JE(b,c){AB6();if(b>c)b=c;return b;}
function Ki(b,c){AB6();if(b>c)c=b;return c;}
function Bh2(){BxB=S();}
var D1=D(Cw);
var BxC=null;var BxD=null;var BxE=null;var BxF=null;function BxG(){BxG=M(D1);Bc5();}
function Bc5(){BxC=S();BxD=S();BxE=S();BxF=KO();}
var DU=D(D1);
var AFM=D(DU);
var K5=D(Ba);
function BrZ(){var a=new K5();AAk(a);return a;}
function AAk(a){BG(a);}
function AHN(a){return (Dv()).bN(48,57);}
var Xx=D(Ba);
function BoJ(){var a=new Xx();AQs(a);return a;}
function AQs(a){BG(a);}
function Bas(a){var b;b=Bnn(a);b.bm=1;return b;}
var B5=D();
var BxH=null;var BxI=null;var BxJ=null;var BxK=null;var BxL=null;var BxM=null;var BxN=null;var BxO=null;var BxP=null;var BxQ=null;var BxR=null;var BxS=null;var BxT=null;var BxU=null;var BxV=null;var BxW=null;var BxX=null;var BxY=null;var BxZ=null;var Bx0=null;var Bx1=null;var Bx2=null;var Bx3=null;var Bx4=null;function Bx5(){Bx5=M(B5);ARc();}
function ARc(){BxH=S();BxI=S();BxJ=S();BxK=J1();BxL=J1();BxM=BN();BxN=BN();BxO=BN();BxP=BN();BxQ=BN();BxR=BN();BxS=BN();BxT=BN();BxU=BN();BxV=A0s(S(),0.0);BxW=S();BxX=S();BxY=S();BxZ=S();Bx0=S();Bx1=S();Bx2=S();Bx3=S();Bx4=S();}
var C8=D();
var AFk=D(C8);
var Ze=D(U);
function BqI(){var a=new Ze();AWY(a);return a;}
function AWY(a){Ci(a);}
var AF6=D();
function DT(){return H_();}
var Y8=D(U);
function Bmu(){var a=new Y8();Bcr(a);return a;}
function Bcr(a){Ci(a);}
var Ef=D(Fe);
var Vl=D(Ef);
var Fr=D(0);
function CQ(){var a=this;C.call(a);a.wO=null;a.hw=W;a.uZ=W;a.l4=0;a.h6=null;}
function UE(a){K(a);a.wO=BvC;if(a.wO!==null)return;G(C5(B(253)));}
function Bbh(a){var b,c,$$je;a:{b=a.h6;if(b===null){CG(a);try{a.hw=W;a.h6=null;Bx(a);break a;}catch($$e){$$je=R($$e);c=$$je;}Bx(a);G(c);}CG(b);try{CG(a);b:{try{a.hw=W;a.h6=null;b.g5.p5(a,1);Bx(a);break b;}catch($$e){$$je=R($$e);c=$$je;}Bx(a);G(c);}Bx(b);break a;}catch($$e){$$je=R($$e);c=$$je;Bx(b);G(c);}}}
function A8M(a){return a.h6===null?0:1;}
var AG4=D(CQ);
var Y9=D(U);
function BpF(){var a=new Y9();Bim(a);return a;}
function Bim(a){Ci(a);}
var AMy=D(C7);
function Bqq(){var a=new AMy();A5R(a);return a;}
function A5R(a){FE(a,(-1));}
function A9O(a,b,c,d){return b;}
function Bce(a){return B(254);}
function Gj(){U.call(this);this.Qh=0;}
function Md(a){var b=new Gj();N2(b,a);return b;}
function N2(a,b){Ci(a);a.Qh=b;}
var Za=D(U);
function Bnv(){var a=new Za();BcP(a);return a;}
function BcP(a){Ci(a);}
var NB=D(0);
var Y6=D(U);
function BrS(){var a=new Y6();Bh0(a);return a;}
function Bh0(a){Ci(a);}
var JL=D(C8);
var AFd=D(JL);
var Y$=D(U);
function Bm9(){var a=new Y$();Bmf(a);return a;}
function Bmf(a){Ci(a);}
var Zb=D(U);
function Bug(){var a=new Zb();ANH(a);return a;}
function ANH(a){Ci(a);}
var Y_=D(U);
function Br3(){var a=new Y_();AP1(a);return a;}
function AP1(a){Ci(a);}
var Zc=D(U);
function Bs6(){var a=new Zc();A6p(a);return a;}
function A6p(a){Ci(a);}
var L3=D(B4);
function Bp2(a,b){var c=new L3();AC4(c,a,b);return c;}
function AC4(a,b,c){Yq(a,b,c);}
function AY$(a,b,c,d){var e,f,g,h,i;e=d.eN(a.bs);d.bH(a.bs,b);f=a.b1.cY();g=0;while(true){if(g>=f){d.bH(a.bs,e);return (-1);}h=a.b1.p(g);i=h.e(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function AW6(a){return B(255);}
function Bhs(a,b){var c;c=b.eN(a.bs);return !c?0:1;}
var Ej=D(L3);
function BqL(a,b){var c=new Ej();HY(c,a,b);return c;}
function HY(a,b,c){AC4(a,b,c);}
function A$v(a,b,c,d){var e,f,g,h,i;e=d.eN(a.bs);d.bH(a.bs,b);f=a.b1.cY();g=0;while(g<f){h=a.b1.p(g);i=h.e(b,c,d);if(i>=0)return a.k.e(a.dz.dY(),c,d);g=g+1|0;}d.bH(a.bs,e);return (-1);}
function Bg4(a,b){a.k=b;}
function AOa(a){return B(255);}
var ACv=D(Ej);
function Bri(a,b){var c=new ACv();ATG(c,a,b);return c;}
function ATG(a,b,c){HY(a,b,c);}
function AZj(a,b,c,d){var e,f,g,h;e=a.b1.cY();f=0;while(f<e){g=a.b1.p(f);h=g.e(b,c,d);if(h>=0)return a.k.e(b,c,d);f=f+1|0;}return (-1);}
function A23(a,b){return 0;}
function Bk1(a){return B(256);}
var AK5=D(Ej);
function Bqm(a,b){var c=new AK5();AST(c,a,b);return c;}
function AST(a,b,c){HY(a,b,c);}
function APA(a,b,c,d){var e,f,g;e=a.b1.cY();f=0;while(true){if(f>=e)return a.k.e(b,c,d);g=a.b1.p(f);if(g.e(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function Bi3(a,b){return 0;}
function ATD(a){return B(257);}
var Bt=D();
var Bx6=null;var Bx7=null;var Bx8=null;var Bx9=null;var Bx$=null;var Bx_=null;var Bya=null;function BmB(){BmB=M(Bt);A79();}
function Db(a){BmB();K(a);}
function A79(){Bx6=Bsg(0.0);Bx7=BtM();Bx8=BrJ();Bx9=BmQ();Bx$=Bqh();Bx_=BmL();Bya=BqY();}
var AMJ=D(Bt);
var E1=D(DU);
var AFQ=D(E1);
var Cs=D(C6);
function Byb(){var a=new Cs();Gx(a);return a;}
function Byc(a,b){var c=new Cs();Mv(c,a,b);return c;}
function Byd(a){var b=new Cs();ACy(b,a);return b;}
function Gx(a){V7(a);}
function Mv(a,b,c){QI(a,b,c);}
function ACy(a,b){R_(a,b);}
var Bs=D(Cs);
function Bye(){var a=new Bs();CY(a);return a;}
function Byf(a,b){var c=new Bs();Uq(c,a,b);return c;}
function UR(a){var b=new Bs();Fd(b,a);return b;}
function CY(a){Gx(a);}
function Uq(a,b,c){Mv(a,b,c);}
function Fd(a,b){ACy(a,b);}
var Jp=D(Bs);
function BtF(){var a=new Jp();XJ(a);return a;}
function XJ(a){CY(a);}
var AMM=D(Jp);
function DR(){var a=new AMM();Bcc(a);return a;}
function Bcc(a){XJ(a);}
var OI=D(0);
function AHR(){C.call(this);this.ko=null;}
function BrV(a){var b=new AHR();A4e(b,a);return b;}
function A4e(a,b){a.ko=b;K(a);}
function A4o(a){a.ko.qQ=1;AMH($rt_ustr(a.ko.tW));}
function Bac(a){a.ko.qQ=0;}
function A_U(a){a.ko.qQ=1;AMH($rt_ustr(a.ko.tW));}
function A6K(a){a.Nl();}
function AQ8(a){a.Ri();}
function A6s(a){a.TL();}
var Fs=D(0);
var BD=D();
var Byg=null;function Byh(){Byh=M(BD);BkD();}
function BkD(){Byg=BN();}
var Dc=D(BD);
var Byi=0.0;function Byj(){Byj=M(Dc);Bjm();}
function Bjm(){Byi=0.10000000149011612;}
var KI=D(Dc);
var AIp=D();
function AJG(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(DB());}return b.data.length;}
function Ot(b,c){if(b===null)G(KX());if(b===F($rt_voidcls()))G(DB());if(c<0)G(Bki());return A3U(b.Dm(),c);}
function A3U(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function EP(){C.call(this);this.br=null;}
function JY(a){K(a);a.br=CT(0.0,0.0,0.0,1.0);}
function Sb(){var a=this;EP.call(a);a.eV=null;a.dM=0.0;}
function BsE(){var a=new Sb();AUW(a);return a;}
function AUW(a){JY(a);a.eV=S();}
function AU5(a,b){return a.Mt(b.br,b.eV,b.dM);}
function AYE(a,b,c,d){if(b!==null)a.br.ik(b);if(c!==null)a.eV.L(c);a.dM=d;return a;}
function APu(a,b,c,d,e,f,g,h){a.br.hc(b,c,d,1.0);a.eV.I(e,f,g);a.dM=h;return a;}
function A86(a,b){var c,d,e;a:{b:{if(b!==null){if(b===a)break b;c=a.br;d=b.br;if(c.y(d)&&a.eV.y(b.eV)&&a.dM===b.dM)break b;}e=0;break a;}e=1;}return e;}
var Le=D(D0);
var NR=D(0);
function ZB(){C.call(this);this.pG=null;}
function Bnd(a){var b=new ZB();A0I(b,a);return b;}
function A0I(a,b){K(a);a.pG=b;}
function BfB(a,b,c){return AZW(a.pG,b,c);}
function A4y(a,b){var c,d;c=new If;d=a.pG;Hb();Lg(c,d,b,BwY);return c;}
function AM9(a,b){var c,d;c=new If;d=a.pG;Hb();Lg(c,d,b,BwX);return c;}
var CW=D(Fb);
var AC9=D(CW);
var Hm=D(Hw);
function Byk(a){var b=new Hm();Np(b,a);return b;}
function Np(a,b){SE(a,b);}
var AIR=D(Hm);
function Byl(a){var b=new AIR();AQg(b,a);return b;}
function AQg(a,b){Np(a,b);}
var IG=D(0);
var TE=D(Ba);
function Brl(){var a=new TE();AQi(a);return a;}
function AQi(a){BG(a);}
function ARX(a){var b;b=Bss(a);b.bm=1;return b;}
var Jn=D(0);
var Be=D();
function Cc(a){K(a);}
function AS5(a,b,c){return 0;}
var AHt=D(KI);
function It(){var a=this;BF.call(a);a.m7=null;a.CI=null;a.Ov=null;}
var Bym=null;function AUc(){AUc=M(It);A6O();}
function Byn(){var a=new It();LB(a);return a;}
function BoL(a){var b=new It();Tw(b,a);return b;}
function LB(a){AUc();BY(a);a.m7=ATg(100);a.CI=Si(0);}
function AX$(a,b,c,d){var e,f,g,h,i,j;d.nC(a);Ey();Es(b,Byo);e=Byo;Es(c,Byp);f=Byp;g=Y(a.bb);h=Y((e.bX()));i=Y((f.bX()));j=Y((d.bX()));AHp(g,h,i,j);}
function Tw(a,b){AUc();BY(a);a.m7=ATg(100);a.CI=Si(0);}
function AVS(a,b){var c,d;c=Y(a.bb);d=Y((b.bX()));V5(c,d);}
function Bi7(a){Yb(Y(a.bb));}
function A6O(){Bym=BoL(0);}
function AHp(b,c,d,e){var jsObj=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.btCollisionWorld);jsObj.rayTest(c,d,e);}
function V5(b,c){var jsObj=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.btCollisionWorld);jsObj.setDebugDrawer(c);}
function Yb(b){var jsObj=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.btCollisionWorld);jsObj.debugDrawWorld();}
var Hx=D(It);
var Byq=null;function ARw(){ARw=M(Hx);ASV();}
function Br7(a){var b=new Hx();Zt(b,a);return b;}
function Byr(){var a=new Hx();JJ(a);return a;}
function A$H(a,b){var c,d;a.m7.RE(N(Y((b.bX()))),b);c=Y(a.bb);d=Y((b.bX()));V3(c,d);}
function A8_(a,b){var c,d;a.m7.WR(N(Y((b.bX()))));c=Y(a.bb);d=Y((b.bX()));AJM(c,d);}
function Zt(a,b){ARw();LB(a);}
function JJ(a){ARw();LB(a);}
function Bak(a,b){return SC(Y(a.bb),b);}
function A31(a,b){var c,d,e;Ey();Es(b,Byo);c=Byo;d=Y(a.bb);e=Y((c.bX()));ZK(d,e);}
function ASV(){Byq=Br7(0);}
function V3(b,c){var jsObj=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.btDynamicsWorld);jsObj.addRigidBody(c);}
function AJM(b,c){var jsObj=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.btDynamicsWorld);jsObj.removeRigidBody(c);}
function SC(b,c){var jsObj=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.btDynamicsWorld);var returnedJSObj=jsObj.stepSimulation(c);return returnedJSObj;}
function ZK(b,c){var jsObj=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.btDynamicsWorld);jsObj.setGravity(c);}
var Tg=D(BD);
var Tf=D(BD);
var Re=D(CF);
var Bys=null;function Byt(){Byt=M(Re);Bdk();}
function Bdk(){Bys=BN();}
var AEz=D();
function QK(b){var c,d,e,f,g;if(b===null)return null;c=b.data;d=c.length;e=new $rt_globals.Array(d);f=0;while(f<d){g=c[f];e[f]=g;f=f+1|0;}return e;}
function BZ(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Gp(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var CM=D(0);
function AEY(){var a=this;C.call(a);a.fX=0;a.fV=null;a.fF=null;a.mz=null;a.nq=0;a.F6=0.0;a.xX=0;a.rY=0;a.h_=0;}
function ATg(a){var b=new AEY();A6A(b,a);return b;}
function Byu(a,b){var c=new AEY();AIu(c,a,b);return c;}
function A6A(a,b){AIu(a,b,0.800000011920929);}
function AIu(a,b,c){var d;K(a);if(c>0.0&&c<1.0){a.F6=c;d=Hi(b,c);a.xX=d*c|0;a.h_=d-1|0;a.rY=Dd(N(a.h_));a.fV=RU(d);a.fF=Bb(C,d);return;}G(Bl((((H()).c(B(258))).co(c)).d()));}
function BbH(a,b){return Y(BR(Bn(Ex(b,BR(b,32)),BI(2135587861, 2654435769)),a.rY));}
function KP(a,b){var c,d,e;c=a.fV;d=a.uc(b);while(true){e=c.data[d];if(Z(e,W))return  -(d+1|0)|0;if(Z(e,b))break;d=(d+1|0)&a.h_;}return d;}
function A$h(a,b,c){var d,e,f;if(Z(b,W)){d=a.mz;a.mz=c;if(!a.nq){a.nq=1;a.fX=a.fX+1|0;}return d;}e=KP(a,b);if(e>=0){d=a.fF.data[e];a.fF.data[e]=c;return d;}f= -(e+1|0)|0;a.fV.data[f]=b;a.fF.data[f]=c;f=a.fX+1|0;a.fX=f;if(f>=a.xX)Tq(a,a.fV.data.length<<1);return null;}
function AFg(a,b,c){var d,e,f;d=a.fV;e=a.uc(b);while(true){f=d.data;if(Z(f[e],W))break;e=(e+1|0)&a.h_;}f[e]=b;a.fF.data[e]=c;}
function BkC(a,b){var c;if(Z(b,W))return !a.nq?null:a.mz;c=KP(a,b);return c<0?null:a.fF.data[c];}
function A$V(a,b){var c,d,e,f,g,h,i,j,k,l;if(Z(b,W)){if(!a.nq)return null;a.nq=0;c=a.mz;a.mz=null;a.fX=a.fX-1|0;return c;}d=KP(a,b);if(d<0)return null;e=a.fV;f=a.fF;g=f.data;c=g[d];h=a.h_;i=(d+1|0)&h;while(true){j=e.data;k=j[i];if(Z(k,W))break;l=a.uc(k);if(((i-l|0)&h)>((d-l|0)&h)){j[d]=k;g[d]=g[i];d=i;}i=(i+1|0)&h;}j[d]=W;g[d]=null;a.fX=a.fX-1|0;return c;}
function Tq(a,b){var c,d,e,f,g;a:{c=a.fV.data.length;a.xX=b*a.F6|0;a.h_=b-1|0;a.rY=Dd(N(a.h_));d=a.fV;e=a.fF;a.fV=RU(b);a.fF=Bb(C,b);if(a.fX>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(DW(g,W))AFg(a,g,e.data[f]);f=f+1|0;}}}}
function SL(){X.call(this);this.Xh=null;}
function Br5(a){var b=new SL();Bhw(b,a);return b;}
function Bhw(a,b){a.Xh=b;Bo(a);}
function ARn(a,b){return ABd(b);}
function DH(){var a=this;C.call(a);a.D3=null;a.Sx=null;}
function Iv(a,b,c){var d,e,f,g;d=c.data;K(a);OC(b);e=d.length;f=0;while(f<e){g=d[f];OC(g);f=f+1|0;}a.D3=b;a.Sx=c.e9();}
function OC(b){var c,d;if(b.bW())G(AF4(b));if(!AJ9(b.g(0)))G(AF4(b));c=1;while(c<b.j()){a:{d=b.g(c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AJ9(d))break a;else G(AF4(b));}}c=c+1|0;}}
function AJ9(b){var c;a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}c=1;break a;}c=0;}return c;}
function SO(b){var c;if(b===null)G(Bl(B(259)));OC(b);Br2();c=Byv.V(b.JR());if(c!==null)return c;G(BtP(b));}
function AIL(a){return a.D3;}
function AH2(a,b){var c,d,e,$$je;a:{try{c=a.mO();D5();d=Bvv;d=RO(c,d);c=Bvv;d=N_(d,c);d=AEa(d,b);}catch($$e){$$je=R($$e);if($$je instanceof EY){e=$$je;break a;}else{throw $$e;}}return d;}G(A_z(B(260),e));}
function ABp(a,b){var c,d,e,$$je;a:{try{c=a.nI();D5();d=Bvv;d=NP(c,d);c=Bvv;d=O2(d,c);d=AFp(d,b);}catch($$e){$$je=R($$e);if($$je instanceof EY){e=$$je;break a;}else{throw $$e;}}return d;}G(A_z(B(260),e));}
function Xk(){var a=this;DH.call(a);a.xc=0;a.vg=0;}
function W8(a,b,c){var d=new Xk();APo(d,a,b,c);return d;}
function APo(a,b,c,d){Iv(a,b,Bb(B1,0));a.xc=c;a.vg=d;}
function AVc(a){return Bqu(a,a.xc,a.vg);}
function AN3(a){return Bqr(a,a.xc,a.vg);}
var Th=D(CS);
var IZ=D();
var PF=D(IZ);
var E5=D(Cw);
var Uh=D();
function Bk8(b){var c,d,e,f,g,h,i,j,k;c=A04(b.o0());d=KY(c);e=Bf(d*2|0);f=0;g=0;h=0;i=0;while(i<d){j=e.data;g=g+Mo(c)|0;h=h+Mo(c)|0;k=f+1|0;j[f]=g;f=k+1|0;j[k]=h;i=i+1|0;}return e;}
function Wh(b){var c,d,e,f,g,h,i;c=A04(b.o0());d=KY(c);e=Bf(d*2|0);f=0;g=0;while(g<d){h=e.data;f=f+KY(c)|0;i=g*2|0;h[i]=f;h[i+1|0]=Mo(c);g=g+1|0;}return e;}
function Lu(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function A5B(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=Bb(PE,16384);d=CE(16384);e=0;f=0;g=0;h=0;while(h<b.j()){i=Lu(b.g(h));if(i==64){h=h+1|0;i=Lu(b.g(h));j=0;k=1;l=0;while(l<3){h=h+1|0;m=Lu(b.g(h));j=j|CJ(k,m);k=k*64|0;l=l+1|0;}}else if(i<32)j=1;else{i=(i-32|0)<<24>>24;h=h+1|0;j=Lu(b.g(h));}if(!i&&j>=128){if(e>0){n=c.data;o=f+1|0;n[f]=AS1(g,g+e|0,RS(d,e));f=o;}g=g+(e+j|0)|0;e=0;}else{p=d.data;o=e+j|0;if(o<p.length)q=f;else{n=c.data;q=f+1|0;n[f]=AS1(g,g+e|0,RS(d,e));g=g+o|0;e=0;}while(true){o=j+(-1)|0;if(j<=
0)break;r=e+1|0;p[e]=i;e=r;j=o;}f=q;}h=h+1|0;}return Lr(c,f);}
var EQ=D(0);
function XZ(){var a=this;C.call(a);a.zD=null;a.zE=null;a.zA=0;a.zB=null;}
function Bp1(a,b,c,d){var e=new XZ();A_9(e,a,b,c,d);return e;}
function A_9(a,b,c,d,e){K(a);a.zD=b;a.zE=c;a.zA=d;a.zB=e;}
function WL(a){AXW(a.zD,a.zE,a.zA,a.zB);}
var OB=D(0);
function AEe(){C.call(this);this.ni=null;}
function Bp8(a){var b=new AEe();AYm(b,a);return b;}
function AYm(a,b){a.ni=b;K(a);}
function Bal(a,b){a.ni.hs.fP();Ta(N(b),a.ni.hs);a.ni.MV(a.ni.hs);}
function BeO(a,b){a.VV(b);}
var Z6=D(BD);
var JK=D();
var Z5=D(JK);
var LP=D();
var Z8=D(LP);
var Ka=D(Lw);
function Bsc(){var a=new Ka();WN(a);return a;}
function WN(a){UK(a);}
function VH(a){return (Ux(a)).bN(48,57);}
var L_=D(Ka);
function BqR(){var a=new L_();Zf(a);return a;}
function Zf(a){WN(a);}
function ACh(a){return (((VH(a)).bN(33,64)).bN(91,96)).bN(123,126);}
var AHa=D(L_);
function BqH(){var a=new AHa();A1Y(a);return a;}
function A1Y(a){Zf(a);}
function AXJ(a){return (ACh(a)).cO(32);}
var AJ_=D(Ba);
function Bth(){var a=new AJ_();Bfd(a);return a;}
function Bfd(a){BG(a);}
function A2R(a){return BpT(a);}
var Z7=D(BD);
var AGM=D(Ej);
function Bni(a,b){var c=new AGM();A19(c,a,b);return c;}
function A19(a,b,c){HY(a,b,c);}
function AQu(a,b,c,d){var e,f,g,h,i;e=a.b1.cY();f=!d.mL()?d.eC():0;a:{g=a.k.e(b,c,d);if(g>=0){d.bH(a.bs,b);h=0;while(true){if(h>=e)break a;i=a.b1.p(h);if(i.cQ(f,b,c,d)>=0){d.bH(a.bs,(-1));return g;}h=h+1|0;}}}return (-1);}
function Bmj(a,b){return 0;}
function AYS(a){return B(261);}
var W$=D(DH);
function Bpg(){var a=new W$();AS7(a);return a;}
function AS7(a){Iv(a,B(262),Bb(B1,0));}
function A9a(a){return Bs7(a);}
function A57(a){return BrP(a);}
function QF(){var a=this;C.call(a);a.cX=null;a.ch=0;}
var Byw=null;function DM(){DM=M(QF);Be3();}
function A4x(a){var b=new QF();AE7(b,a);return b;}
function ADy(b,c){var d;DM();d=b>=0?1:2;while(true){b=b/c|0;if(!b)break;d=d+1|0;}return d;}
function AE7(a,b){DM();K(a);if(b>=0){a.cX=Ck(b);return;}G(Bki());}
function K3(a,b){var c,d;c=((a.cX.data.length>>1)+a.cX.data.length|0)+2|0;if(b>c)c=b;d=Ck(c);Bi(a.cX,0,d,0,a.ch);a.cX=d;}
function RG(a){var b,c,d,e;b=a.ch+4|0;if(b>a.cX.data.length)K3(a,b);c=a.cX.data;d=a.ch;a.ch=d+1|0;c[d]=110;c=a.cX.data;e=a.ch;a.ch=e+1|0;c[e]=117;c=a.cX.data;e=a.ch;a.ch=e+1|0;c[e]=108;c=a.cX.data;e=a.ch;a.ch=e+1|0;c[e]=108;}
function Di(a,b){var c,d;if(a.ch==a.cX.data.length)K3(a,a.ch+1|0);c=a.cX.data;d=a.ch;a.ch=d+1|0;c[d]=b;}
function KW(a,b){var c,d;if(b===null){RG(a);return;}c=b.j();d=a.ch+c|0;if(d>a.cX.data.length)K3(a,d);b.rd(0,c,a.cX,a.ch);a.ch=d;}
function AN$(a){if(!a.ch)return B(49);return HK(a.cX,0,a.ch);}
function A0e(a,b){Di(a,b);return a;}
function A0Z(a,b){return a.KY(b,0);}
function AQ7(a,b,c){return a.Wj(b,c,48);}
function AOt(a,b,c,d){var e;if(b==(-2147483648)){KW(a,B(263));return a;}if(b<0){Di(a,45);b= -b|0;}a:{if(c>1){e=c-ADy(b,10)|0;while(true){if(e<=0)break a;a.mw(d);e=e+(-1)|0;}}}if(b>=10000){if(b>=1000000000){DM();Di(a,Byw.data[Y(Cx(GN(N(b),BI(1410065408, 2)),N(1000000000)))]);}if(b>=100000000){DM();Di(a,Byw.data[(b%1000000000|0)/100000000|0]);}if(b>=10000000){DM();Di(a,Byw.data[(b%100000000|0)/10000000|0]);}if(b>=1000000){DM();Di(a,Byw.data[(b%10000000|0)/1000000|0]);}if(b>=100000){DM();Di(a,Byw.data[(b%1000000
|0)/100000|0]);}DM();Di(a,Byw.data[(b%100000|0)/10000|0]);}if(b>=1000){DM();Di(a,Byw.data[(b%10000|0)/1000|0]);}if(b>=100){DM();Di(a,Byw.data[(b%1000|0)/100|0]);}if(b>=10){DM();Di(a,Byw.data[(b%100|0)/10|0]);}DM();Di(a,Byw.data[b%10|0]);return a;}
function BdZ(a,b){if(b===null)RG(a);else KW(a,b.d());return a;}
function BaF(a,b){KW(a,b);return a;}
function Be3(){Byw=ID([48,49,50,51,52,53,54,55,56,57]);}
var Yt=D(Cw);
var AAM=D(Bs);
function Vb(){var a=new AAM();A_G(a);return a;}
function A_G(a){CY(a);}
var Dg=D();
var Byx=null;var Byy=null;var Byz=null;var ByA=null;var ByB=null;var ByC=null;var ByD=null;var ByE=null;var ByF=null;var ByG=null;var ByH=null;function ByI(){ByI=M(Dg);BdO();}
function BdO(){Byx=B_(16);Byy=KO();Byz=KO();ByA=S();ByB=S();ByC=S();ByD=S();ByE=BS();ByF=S();ByG=S();ByH=S();}
var AHe=D(C$);
var AAP=D();
var Ko=D(0);
function Rt(){var a=this;C.call(a);a.dP=null;a.mi=null;a.wF=null;a.o$=null;a.zq=0;a.o1=0;a.vH=0;a.JE=0;a.eu=0;a.Nd=0;a.GU=0;a.ek=0;a.V5=0;a.ib=0;a.xv=0;}
function ByJ(a,b,c,d,e,f){var g=new Rt();X_(g,a,b,c,d,e,f);return g;}
function X_(a,b,c,d,e,f,g){var h;K(a);a.ib=(-1);h=e+1|0;a.zq=h;a.dP=Bf(h*2|0);a.mi=Bf(g);Ir(a.mi,(-1));if(f>0)a.wF=Bf(f);Ir(a.dP,(-1));a.v2(b,c,d);}
function A3j(a,b,c){a.mi.data[b]=c;}
function Bdq(a,b){return a.mi.data[b];}
function A58(a){return a.qR(0);}
function AWm(a,b){QD(a,b);return a.dP.data[(b*2|0)+1|0];}
function A97(a,b,c){a.dP.data[b*2|0]=c;}
function A8g(a,b,c){a.dP.data[(b*2|0)+1|0]=c;}
function BgV(a,b){return a.dP.data[b*2|0];}
function A0l(a,b){return a.dP.data[(b*2|0)+1|0];}
function AOX(a,b){if(a.mG(b)<0)return null;return (a.o$.es(a.mG(b),a.qR(b))).d();}
function Bcu(a,b){var c,d;c=a.kf(b);d=a.o6(b);if((d|c|(d-c|0))>=0&&d<=a.o$.j())return (a.o$.es(c,d)).d();return null;}
function A0f(a){return a.mG(0);}
function AQK(a,b){QD(a,b);return a.dP.data[b*2|0];}
function AXi(a){if(a.dP.data[0]==(-1)){a.dP.data[0]=a.eu;a.dP.data[1]=a.eu;}a.ib=a.rA();}
function A6D(a,b){return a.wF.data[b];}
function A9n(a,b,c){a.wF.data[b]=c;}
function QD(a,b){if(!a.o1)G(IO());if(b>=0&&b<a.zq)return;G(Dl(LE(b)));}
function Bkm(a){a.o1=1;}
function Bko(a){return a.o1;}
function Blj(a,b,c,d){a.o1=0;a.xv=2;Ir(a.dP,(-1));Ir(a.mi,(-1));if(b!==null)a.o$=b;if(c>=0)AAV(a,c,d);a.eu=a.vH;}
function ARo(a){a.v2(null,(-1),(-1));}
function AAV(a,b,c){a.vH=b;a.JE=c;}
function BhT(a,b){a.eu=b;if(a.ib>=0)b=a.ib;a.ib=b;}
function A8Q(a){return a.vH;}
function BdQ(a){return a.JE;}
function A$P(a,b){a.xv=b;}
function ATn(a){return a.xv;}
function A_H(a,b){a.GU=b;}
function Bbb(a){return a.GU;}
function A6B(a){return a.Nd;}
function A7B(a){return a.ib;}
function VV(){var a=this;C.call(a);a.dN=null;a.c1=null;a.dn=null;a.cD=null;a.dW=null;a.lI=null;a.Fl=null;}
function BmT(){var a=new VV();Bep(a);return a;}
function Bep(a){K(a);a.dN=BS();a.c1=Bjh();}
var ADD=D();
var Fn=D();
var Y0=D(C8);
function L2(){var a=this;C.call(a);a.g6=0;a.vv=0;a.vw=0;a.dg=0;a.cU=0;a.yn=0.0;a.r2=0.0;a.EU=0.0;a.vD=0.0;a.fU=0;a.j9=0;a.iu=0;a.jt=null;a.u1=0;a.kR=0;}
function APQ(){var a=new L2();BiB(a);return a;}
function BiB(a){K(a);a.kR=0;}
function Bc1(a,b){var c;if(a.jt!==null){c=a.jt.data[b>>>9];if(c!==null)return c.data[b&511];}return 0;}
function BgO(a,b,c){var d,e,f;if(a.jt===null)a.jt=Bb($rt_arraycls($rt_bytecls()),128);d=a.jt.data;e=b>>>9;f=d[e];if(f===null){d=a.jt.data;f=CE(512);d[e]=f;}f.data[b&511]=c<<24>>24;}
function AT2(a){return Ks(a.g6&65535);}
function ACt(){X.call(this);this.JP=null;}
function Bo0(a){var b=new ACt();AVV(b,a);return b;}
function AVV(a,b){a.JP=b;Bo(a);}
function BlG(a,b){return ABJ(b);}
function GL(){var a=this;C.call(a);a.eB=0;a.qO=0;a.mX=null;a.ms=null;a.p3=null;a.oM=null;a.nP=0.0;}
var ByK=0.0;function RB(){RB=M(GL);AUl();}
function Nj(a,b,c){RB();K(a);Uy();a.mX=ByL;a.ms=ByL;A56();a.p3=ByM;a.oM=ByM;a.nP=1.0;a.eB=b;a.qO=c;}
function Bel(a){BwR.pM(a.eB,a.qO);}
function A2g(a,b){BwR.o8(33984+b|0);BwR.pM(a.eB,a.qO);}
function ATH(a){return a.qO;}
function A3Q(a,b,c){a.zj(b,c,0);}
function AZE(a,b,c,d){if(b!==null&&!(!d&&a.p3===b)){BwR.im(a.eB,10242,I1(b));a.p3=b;}if(c!==null&&!(!d&&a.oM===c)){BwR.im(a.eB,10243,I1(c));a.oM=c;}}
function APe(a,b,c){a.G5(b,c,0);}
function ANG(a,b,c,d){if(b!==null&&!(!d&&a.mX===b)){BwR.im(a.eB,10241,FT(b));a.mX=b;}if(c!==null&&!(!d&&a.ms===c)){BwR.im(a.eB,10240,FT(c));a.ms=c;}}
function A_A(a,b,c){a.mX=b;a.ms=c;a.d9();BwR.im(a.eB,10241,FT(b));BwR.im(a.eB,10240,FT(c));}
function ATo(a,b,c){var d,e;d=AGf();if(d===1.0)return 1.0;e=ALf(b,d);if(!c&&YG(e,a.nP,0.10000000149011612))return a.nP;BwS.HD(3553,34046,e);a.nP=e;return e;}
function AGf(){var b,c;RB();if(ByK>0.0)return ByK;if(!BwN.wh(B(264))){ByK=1.0;return 1.0;}b=J0(16);b.dI(0);b.dL(DC(b));BwS.Fv(34047,b);c=b.l8(0);ByK=c;return c;}
function AMj(b,c){RB();AMi(b,c,0);}
function AMi(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;RB();if(c===null)return;if(!c.A1())c.Dc();e=c.T_();Mn();if(e===ByN){c.Ll(b);return;}f=c.WW();g=c.I8();if(c.gz()===f.gz())h=f;else{h=SQ(f.bk(),f.bh(),c.gz());Ig();h.HN(ByO);h.Cs(f,0,0,0,0,f.bk(),f.bh());if(c.I8())f.cJ();g=1;}BwR.y7(3317,1);if(c.Xa())AJ7(b,h,h.bk(),h.bh());else{i=BwR;j=h.lw();k=h.bk();l=h.bh();m=h.m0();n=h.mg();o=h.lz();i.jm(b,d,j,k,l,0,m,n,o);}if(g)h.cJ();}
function AUl(){ByK=0.0;}
function OG(){GL.call(this);this.iz=null;}
var ByP=null;function HG(){HG=M(OG);Bg6();}
function Br0(a){var b=new OG();AGQ(b,a);return b;}
function A2O(a,b){var c=new OG();AJv(c,a,b);return c;}
function ByQ(a,b,c){var d=new OG();Kc(d,a,b,c);return d;}
function ByR(a){var b=new OG();Mh(b,a);return b;}
function ByS(a,b,c){var d=new OG();Rh(d,a,b,c);return d;}
function AGQ(a,b){HG();Kc(a,b,null,0);}
function AJv(a,b,c){HG();Kc(a,b,null,c);}
function Kc(a,b,c,d){HG();Mh(a,A39(b,c,d));}
function Mh(a,b){HG();Rh(a,3553,BwR.NO(),b);}
function Rh(a,b,c,d){HG();Nj(a,b,c);a.SF(d);if(d.sD())TD(BvC,a);}
function A3d(a,b){if(a.iz!==null&&b.sD()!=a.iz.sD())G(Bh(B(265)));a.iz=b;if(!b.A1())b.Dc();a.d9();AMj(3553,b);a.G5(a.mX,a.ms,1);a.zj(a.p3,a.oM,1);a.Wq(a.nP,1);BwR.pM(a.eB,0);}
function AYY(a){return a.iz.bk();}
function Bjk(a){return a.iz.bh();}
function AX6(a){if(!(a.iz instanceof Jh))return Uj(a);return a.iz.d();}
function TD(b,c){var d;HG();d=ByP.V(b);if(d===null)d=By();d.C(c);ByP.z(b,d);}
function Bg6(){ByP=DO();}
var DD=D(Bs);
function QW(a,b){var c=new DD();S_(c,a,b);return c;}
function Bh(a){var b=new DD();Eo(b,a);return b;}
function S_(a,b,c){Uq(a,b,c);}
function Eo(a,b){Fd(a,b);}
var OA=D(0);
function AEf(){C.call(this);this.nz=null;}
function Bps(a){var b=new AEf();AXS(b,a);return b;}
function AXS(a,b){a.nz=b;K(a);}
function Bff(a,b){a.nz.hs.fP();a.nz.Xj(a.nz.hs);AFo(a.nz.hs,N(b));}
function A43(a,b){a.S7(b);}
var Yk=D(CF);
function Fl(){var a=this;B4.call(a);a.no=0;a.sT=null;a.r6=null;a.rV=0;}
function Bud(a,b){var c=new Fl();MG(c,a,b);return c;}
function MG(a,b,c){Ds(a);a.no=1;a.r6=b;a.rV=c;}
function Bk7(a,b){a.k=b;}
function AY8(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=Bf(4);f=0;g=d.K();if(b>=g)return (-1);h=a.x2(b,c,g);i=b+a.no|0;j=ALl(h);if(j===null){k=e.data;l=1;k[f]=h;}else{l=j.data.length;Bi(j,0,e,0,l);l=f+l|0;}a:{if(i<g){m=a.x2(i,c,g);while(l<4){if(!Bgm(m)){k=e.data;n=l+1|0;k[l]=m;}else{k=(ALl(m)).data;if(k.length!=2){o=e.data;n=l+1|0;o[l]=k[0];}else{o=e.data;m=l+1|0;o[l]=k[0];n=m+1|0;o[m]=k[1];}}i=i+a.no|0;if(i>=g){l=n;break a;}m=a.x2(i,c,g);l=n;}}}if(l!=a.rV)return (-1);p=0;while(true){if(p>=l)return a.k.e(i,c,d);if
(e.data[p]!=a.r6.data[p])break;p=p+1|0;}return (-1);}
function Kp(a){var b,c;if(a.sT===null){b=H();c=0;while(c<a.rV){b.sY(FJ(a.r6.data[c]));c=c+1|0;}a.sT=b.d();}return a.sT;}
function BfH(a){var b,c;b=Kp(a);c=H();I(I(c,B(266)),b);return P(c);}
function AVi(a,b,c,d){var e,f,g,h;a.no=1;if(b>=(d-1|0))e=c.g(b);else{f=b+1|0;e=c.g(b);g=c.g(f);if(In(e,g)){h=ID([e,g]);e=YO(h,0);a.no=2;}}return e;}
function AWb(a,b){var c,d;a:{if(b instanceof Fl){c=b;if(!(Kp(c)).y(Kp(a))){d=0;break a;}}d=1;}return d;}
function Bg7(a,b){return 1;}
var CH=D(Bs);
function DB(){var a=new CH();HF(a);return a;}
function Bl(a){var b=new CH();EO(b,a);return b;}
function HF(a){CY(a);}
function EO(a,b){Fd(a,b);}
function ZI(){CH.call(this);this.Ku=null;}
function AF4(a){var b=new ZI();A2h(b,a);return b;}
function A2h(a,b){HF(a);a.Ku=b;}
var IU=D(BD);
var ByT=null;function ByU(){ByU=M(IU);AOp();}
function AOp(){ByT=BN();}
var XI=D();
var O$=D(0);
var H3=D(0);
var Ri=D(0);
var Gb=D();
function Ma(a){K(a);}
function KL(){Gb.call(this);this.ye=null;}
function ByV(a){var b=new KL();SX(b,a);return b;}
function SX(a,b){Ma(a);a.ye=b;}
function Jr(){var a=this;KL.call(a);a.Ob=0;a.tt=0;a.fg=null;a.lo=null;a.B_=null;}
function ByW(a,b){var c=new Jr();RQ(c,a,b);return c;}
function RQ(a,b,c){SX(a,b);a.fg=H();a.lo=Ck(32);a.Ob=c;Ne();a.B_=ByX;}
function Bfn(a,b,c,d){var $$je;if(!AKr(a))return;a:{try{a.ye.li(b,c,d);break a;}catch($$e){$$je=R($$e);if($$je instanceof DZ){}else{throw $$e;}}a.tt=1;}}
function AKr(a){if(a.ye===null)a.tt=1;return a.tt?0:1;}
function PM(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.data;f=AHm(b,c,d-c|0);g=CE(Bm(16,BH(e.length,1024)));h=Jm(g);i=a.B_.nI();D5();j=Bvv;i=NP(i,j);j=Bvv;k=O2(i,j);while(true){l=(KR(k,f,h,1)).iP();a.li(g,0,Cr(h));MH(h);if(!l)break;}while(true){l=(Mi(k,h)).iP();a.li(g,0,Cr(h));MH(h);if(!l)break;}}
function A$L(a,b){a.lo.data[0]=b;PM(a,a.lo,0,1);}
function Bb7(a,b){a.fg.c(b);KM(a);}
function A9l(a,b){(a.fg.c(b)).bv(10);KM(a);}
function AVZ(a,b){(a.fg.gL(b)).bv(10);KM(a);}
function Bhe(a){a.KR(10);}
function KM(a){var b;b=a.fg.j()<=a.lo.data.length?a.lo:Ck(a.fg.j());a.fg.rd(0,a.fg.j(),b,0);PM(a,b,0,a.fg.j());a.fg.wX(0);}
var Yi=D(Ej);
function BrA(a,b){var c=new Yi();A6X(c,a,b);return c;}
function A6X(a,b,c){HY(a,b,c);}
function A6l(a,b,c,d){var e,f,g,h;e=a.b1.cY();d.bH(a.bs,b);f=0;while(true){if(f>=e)return a.k.e(b,c,d);g=a.b1.p(f);h=g.cQ(0,b,c,d);if(h>=0)break;f=f+1|0;}return (-1);}
function BhK(a,b){return 0;}
function APZ(a){return B(267);}
var Is=D(Dx);
function AI_(a,b,c,d){Hj(a,b);a.D=c;a.bd=d;}
function AVs(b,c,d){return Bsw(0,b.data.length,b,c,c+d|0,0);}
function BaG(b){return AVs(b,0,b.data.length);}
function OE(a){HI(a);return a;}
function BeY(a){return OE(a);}
var G2=D(Is);
function PW(a,b,c,d){AI_(a,b,c,d);}
function A2r(a){var b;if(a.D>=a.bd)G(ABh());b=a.D;a.D=b+1|0;return a.rO(b);}
function BeT(a,b){var c;if(a.ck())G(DR());if(a.D>=a.bd)G(HJ());c=a.D;a.D=c+1|0;a.ph(c,b);return a;}
function AXn(a,b){var c,d,e;if(b>=0&&b<a.bd)return a.rO(b);c=new BC;d=a.bd;e=H();Bp(V(I(V(I(e,B(268)),b),B(57)),d),41);BO(c,P(e));G(c);}
function Bjw(a,b,c){var d,e,f;if(a.ck())G(DR());if(b>=0&&b<a.bd){a.ph(b,c);return a;}d=new BC;e=a.bd;f=H();Bp(V(I(V(I(f,B(268)),b),B(57)),e),41);BO(d,P(f));G(d);}
function AWQ(a){return a.fe();}
function Hh(){var a=this;G2.call(a);a.cB=null;a.AX=0;a.cv=0;}
function Mk(a,b,c,d,e,f,g){PW(a,c,e,f);a.cv=b;a.cB=d;a.AX=g;}
function AWy(a){return a.AX;}
var TS=D(Hh);
function BsF(a,b,c,d,e,f){var g=new TS();A$7(g,a,b,c,d,e,f);return g;}
function A$7(a,b,c,d,e,f,g){Mk(a,b,c,d,e,f,g);}
function ATh(a,b){var c,d,e;c=a.cB.B.data;d=a.cv;e=b*4|0;return c[d+e|0]&255|(a.cB.B.data[(a.cv+e|0)+1|0]&255)<<8|(a.cB.B.data[(a.cv+e|0)+2|0]&255)<<16|(a.cB.B.data[(a.cv+e|0)+3|0]&255)<<24;}
function ANg(a,b,c){var d,e,f;d=a.cB.B.data;e=a.cv;f=b*4|0;d[e+f|0]=c<<24>>24;a.cB.B.data[(a.cv+f|0)+1|0]=c>>8<<24>>24;a.cB.B.data[(a.cv+f|0)+2|0]=c>>16<<24>>24;a.cB.B.data[(a.cv+f|0)+3|0]=c>>24<<24>>24;}
var I3=D(BF);
function ByY(){var a=new I3();AKL(a);return a;}
function AKL(a){BY(a);}
var CA=D();
function Bpw(){var a=new CA();Ed(a);return a;}
function Ed(a){K(a);}
function AXB(a,b){}
function AUh(a,b){}
function VM(){var a=this;CA.call(a);a.Er=null;a.Hh=0;a.iK=null;}
function Bm8(a,b,c){var d=new VM();Bbj(d,a,b,c);return d;}
function Bbj(a,b,c,d){a.iK=b;a.Er=c;a.Hh=d;Ed(a);}
function A3M(a,b){}
function BcD(a,b){var c,d,e;c=Em();d=a.Er;e=H();I(I(e,B(269)),d);c.e4(P(e));}
function A6E(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=c.x8(B(270));e=d.data;f=e.length;g=0;while(true){if(g>=f){a:{a.iK.wB=a.iK.ls.h;if(a.Hh){h=0;while(true){if(h>=a.iK.ls.h)break a;i=a.iK.ls.p(h);a.iK.Wb(i);h=h+1|0;}}}return 0;}j=e[g];k=j.x8(B(271));l=k.data;if(l.length!=4)break;MF();m=ByZ;if(l[0].y(B(272)))m=By0;if(l[0].y(B(273)))m=By1;if(l[0].y(B(274)))m=By2;if(l[0].y(B(92)))m=By3;n=AL0(l[2]);if(m===By2&&!(FY()).UT())n=W;a.iK.ls.C(Bm_(l[1].R_(),m,n,l[3]));g=g+1|0;}G(Bh(B(275)));}
function AU2(a,b,c){return a.NT(b,c);}
var ZE=D(Ba);
function BtU(){var a=new ZE();Bbq(a);return a;}
function Bbq(a){BG(a);}
function AWn(a){var b;b=Bo0(a);b.bm=1;return b;}
function VN(){var a=this;CA.call(a);a.ki=null;a.Pt=null;}
function BqC(a,b){var c=new VN();Bj0(c,a,b);return c;}
function Bj0(a,b,c){a.Pt=b;a.ki=c;Ed(a);}
function AXl(a,b){a.ki.Ac=Buz(b);}
function Bhy(a,b){a.ki.tb=1;a.ki.lJ=0;}
function A1X(a,b,c){a.ki.w9=1;a.ki.lJ=0;return 0;}
function VK(){var a=this;CA.call(a);a.rT=null;a.yi=null;a.Ic=null;a.D2=null;}
function BmH(a,b,c,d){var e=new VK();BbO(e,a,b,c,d);return e;}
function BbO(a,b,c,d,e){a.D2=b;a.rT=c;a.yi=d;a.Ic=e;Ed(a);}
function A12(a,b){a.rT.fT(b);}
function ASc(a,b){a.rT.cV(b);}
function AYj(a,b,c){a.D2.Kj(a.yi,a.Ic,c);a.rT.c5(b,c);return 0;}
function Bv(){var a=this;C.call(a);a.bz=0.0;a.by=0.0;a.bx=0.0;a.b2=0.0;}
var By4=null;var By5=null;var By6=null;var By7=null;var By8=null;var By9=0.0;var By$=null;var By_=null;var Bza=null;var Bzb=null;var Bzc=null;var Bzd=null;var Bze=null;var Bzf=null;var Bzg=null;var Bzh=null;var Bzi=null;var Bzj=null;var Bzk=null;var Bzl=null;var Bzm=null;var Bzn=null;var Bzo=null;var Bzp=null;var Bzq=null;var Bzr=null;var Bzs=null;var Bzt=null;var Bzu=null;var Bzv=null;var Bzw=null;var Bzx=null;var Bzy=null;var Bzz=null;var BzA=null;function DJ(){DJ=M(Bv);A5_();}
function E3(){var a=new Bv();ABU(a);return a;}
function Cb(a){var b=new Bv();ALv(b,a);return b;}
function CT(a,b,c,d){var e=new Bv();YC(e,a,b,c,d);return e;}
function BsD(a){var b=new Bv();AAJ(b,a);return b;}
function ABU(a){DJ();K(a);}
function ALv(a,b){DJ();K(a);AAo(a,b);}
function YC(a,b,c,d,e){DJ();K(a);a.bz=b;a.by=c;a.bx=d;a.b2=e;a.wH();}
function AAJ(a,b){DJ();K(a);a.ik(b);}
function AO6(a,b){a.bz=b.bz;a.by=b.by;a.bx=b.bx;a.b2=b.b2;return a;}
function Blv(a,b){a.bz=a.bz*b.bz;a.by=a.by*b.by;a.bx=a.bx*b.bx;a.b2=a.b2*b.b2;return a.wH();}
function Bia(a){if(a.bz<0.0)a.bz=0.0;else if(a.bz>1.0)a.bz=1.0;if(a.by<0.0)a.by=0.0;else if(a.by>1.0)a.by=1.0;if(a.bx<0.0)a.bx=0.0;else if(a.bx>1.0)a.bx=1.0;if(a.b2<0.0)a.b2=0.0;else if(a.b2>1.0)a.b2=1.0;return a;}
function Be0(a,b,c,d,e){a.bz=b;a.by=c;a.bx=d;a.b2=e;return a.wH();}
function A$W(a,b){var c;if(a===b)return 1;if(b!==null&&CB(a)===CB(b)){c=b;return a.lQ()!=c.lQ()?0:1;}return 0;}
function AWS(a){var b,c;b=a.bz===0.0?0:C_(a.bz);c=(31*b|0)+(a.by===0.0?0:C_(a.by))|0;c=(31*c|0)+(a.bx===0.0?0:C_(a.bx))|0;c=(31*c|0)+(a.b2===0.0?0:C_(a.b2))|0;return c;}
function A26(a){var b;b=(255.0*a.b2|0)<<24|(255.0*a.bx|0)<<16|(255.0*a.by|0)<<8|255.0*a.bz|0;return MM(b);}
function A5h(a){return (255.0*a.b2|0)<<24|(255.0*a.bx|0)<<16|(255.0*a.by|0)<<8|255.0*a.bz|0;}
function ARi(a){var b,c;b=(255.0*a.bz|0)<<24|(255.0*a.by|0)<<16|(255.0*a.bx|0)<<8|255.0*a.b2|0;c=L9(b);while(c.j()<8){c=(((H()).c(B(276))).c(c)).d();}return c;}
function VA(b,c,d,e){var f;DJ();f=(255.0*e|0)<<24|(255.0*d|0)<<16|(255.0*c|0)<<8|255.0*b|0;return MM(f);}
function AAo(b,c){DJ();b.bz=((c&(-16777216))>>>24)/255.0;b.by=((c&16711680)>>>16)/255.0;b.bx=((c&65280)>>>8)/255.0;b.b2=(c&255)/255.0;}
function AHE(b,c){var d;DJ();d=Bay(c);b.b2=((d&(-16777216))>>>24)/255.0;b.bx=((d&16711680)>>>16)/255.0;b.by=((d&65280)>>>8)/255.0;b.bz=(d&255)/255.0;}
function A5_(){By4=CT(1.0,1.0,1.0,1.0);By5=Cb((-1077952513));By6=Cb(2139062271);By7=Cb(1061109759);By8=CT(0.0,0.0,0.0,1.0);By9=By4.jw();By$=CT(0.0,0.0,0.0,0.0);By_=CT(0.0,0.0,1.0,1.0);Bza=CT(0.0,0.0,0.5,1.0);Bzb=Cb(1097458175);Bzc=Cb(1887473919);Bzd=Cb((-2016482305));Bze=CT(0.0,1.0,1.0,1.0);Bzf=CT(0.0,0.5,0.5,1.0);Bzg=Cb(16711935);Bzh=Cb(2147418367);Bzi=Cb(852308735);Bzj=Cb(579543807);Bzk=Cb(1804477439);Bzl=Cb((-65281));Bzm=Cb((-2686721));Bzn=Cb((-626712321));Bzo=Cb((-5963521));Bzp=Cb((-1958407169));Bzq=Cb((-759919361));Bzr
=Cb((-1306385665));Bzs=Cb((-16776961));Bzt=Cb((-13361921));Bzu=Cb((-8433409));Bzv=Cb((-92245249));Bzw=Cb((-9849601));Bzx=CT(1.0,0.0,1.0,1.0);Bzy=Cb((-1608453889));Bzz=Cb((-293409025));BzA=Cb((-1339006721));}
var E7=D();
var AAy=D(E7);
var Ng=D();
var BzB=null;function Brg(){Brg=M(Ng);ASy();}
function ASy(){BzB=Bf((PU()).data.length);BzB.data[Br(ByZ)]=1;BzB.data[Br(By0)]=2;BzB.data[Br(By1)]=3;BzB.data[Br(By2)]=4;BzB.data[Br(By3)]=5;}
function Fv(){var a=this;C.call(a);a.gy=0;a.dm=0;a.gf=0;a.fW=0;a.cP=0;a.eK=null;a.kM=0;a.Ht=0;}
function DP(a,b,c){var d=new Fv();AYd(d,a,b,c);return d;}
function BzC(a,b,c,d){var e=new Fv();AMw(e,a,b,c,d);return e;}
function BzD(a,b,c,d,e,f){var g=new Fv();AJN(g,a,b,c,d,e,f);return g;}
function AYd(a,b,c,d){AMw(a,b,c,d,0);}
function AMw(a,b,c,d,e){var f;f=Cu(b,4);AJN(a,b,c,f?5126:5121,f?0:1,d,e);}
function AJN(a,b,c,d,e,f,g){K(a);a.gy=b;a.dm=c;a.fW=d;a.gf=e;a.eK=f;a.kM=g;a.Ht=Gq(b);}
function AYh(a,b){if(!(b instanceof Fv))return 0;return Ns(a,b);}
function Ns(a,b){var c,d,e;a:{if(b!==null&&a.gy==b.gy&&a.dm==b.dm&&a.fW==b.fW&&a.gf==b.gf){c=a.eK;d=b.eK;if(c.y(d)&&a.kM==b.kM){e=1;break a;}}e=0;}return e;}
function K8(a){return (a.Ht<<8)+(a.kM&255)|0;}
function Vg(a){a:{switch(a.fW){case 5120:case 5121:break;case 5122:case 5123:return 2*a.dm|0;case 5124:case 5125:case 5127:case 5128:case 5129:case 5130:case 5131:break a;case 5126:case 5132:return 4*a.dm|0;default:break a;}return a.dm;}return 0;}
function A$q(a){var b,c;b=K8(a);c=(541*b|0)+a.dm|0;c=(541*c|0)+a.eK.bl()|0;return c;}
var F6=D(BD);
function Da(){DY.call(this);this.bD=null;}
function Bpf(a,b,c){var d=new Da();Gr(d,a,b,c);return d;}
function Gr(a,b,c,d){HE(a,b,c,d);a.bD=b;}
function A6n(a,b,c,d){var e,f;e=0;a:{while((b+a.bD.cr()|0)<=d.K()){f=a.bD.bR(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.k.e(b,c,d);if(f>=0)break;b=b-a.bD.cr()|0;e=e+(-1)|0;}return f;}
function A9o(a){return B(277);}
var AAw=D(Da);
function Bnb(a){var b=new AAw();AVo(b,a);return b;}
function AVo(a,b){Gr(a,b.rG(),b.Og(),b.jT());a.ba.T(a);}
function BlE(a,b,c,d){var e;while((b+a.bD.cr()|0)<=d.K()){e=a.bD;if(e.bR(b,c)<=0)break;b=b+a.bD.cr()|0;}return a.k.e(b,c,d);}
function AYf(a,b,c,d){var e,f,g;e=a.k.cL(b,c,d);if(e<0)return (-1);f=e-a.bD.cr()|0;while(f>=b&&a.bD.bR(f,c)>0){g=f-a.bD.cr()|0;e=f;f=g;}return e;}
var Pr=D(0);
function IV(){var a=this;C.call(a);a.sU=null;a.hO=null;a.jz=null;}
var BzE=0;function BsX(a){var b=new IV();BiK(b,a);return b;}
function BiK(a,b){var c;K(a);a.hO=b;c=a;b.classObject=c;}
function Ob(b){var c;if(b===null)return null;c=b.classObject;if(c===null)c=BsX(b);return c;}
function AW1(a){var b,c;b=KB(a);c=H();V(I(c,B(278)),b);return P(c);}
function A8a(a){return a.hO;}
function A$K(a,b){return Bfc(b,a.hO);}
function BcQ(a){if(a.sU===null)a.sU=A1z(a.hO);return a.sU;}
function ATR(a){return Bit(a.hO);}
function A3W(a){return AMp(a.hO)===null?0:1;}
function Bd1(a){return Ob(AMp(a.hO));}
function A_j(){if(!BzE){BzE=1;BcI();}}
function BcI(){K2.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){Yc(obj);return null;}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){Bp7();AOn();return null;}}];ML.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){Bao(obj);return null;}},{name:"appendRun",modifiers:0,accessLevel:0,parameterTypes
:[ML],returnType:$rt_voidcls(),callable:function(obj,args){A7c(obj,args[0]);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){AV$(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B1,callable:function(obj,args){return AOC(obj);}}];Hy.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){AL9(obj);return null;}},{name:"<init>",modifiers
:0,accessLevel:3,parameterTypes:[Nm,Hr],returnType:$rt_voidcls(),callable:function(obj,args){T3(obj,args[0],args[1]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Nm,Hr,Bv,$rt_floatcls(),$rt_intcls(),$rt_booleancls()],returnType:$rt_voidcls(),callable:function(obj,args){Zd(obj,args[0],args[1],args[2],Bjq(args[3]),A7H(args[4]),BaL(args[5]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Nm,Hr,$rt_intcls(),$rt_intcls(),Bv,$rt_floatcls(),$rt_intcls(),$rt_booleancls(),
B1],returnType:$rt_voidcls(),callable:function(obj,args){AKg(obj,args[0],args[1],A7H(args[2]),A7H(args[3]),args[4],Bjq(args[5]),A7H(args[6]),BaL(args[7]),args[8]);return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[Nm,Hr],returnType:$rt_voidcls(),callable:function(obj,args){Bic(obj,args[0],args[1]);return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[Nm,Hr,Bv,$rt_floatcls(),$rt_intcls(),$rt_booleancls()],returnType:$rt_voidcls(),callable:function(obj,args){BdT(obj,args[0],
args[1],args[2],Bjq(args[3]),A7H(args[4]),BaL(args[5]));return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[Nm,Hr,$rt_intcls(),$rt_intcls(),Bv,$rt_floatcls(),$rt_intcls(),$rt_booleancls(),B1],returnType:$rt_voidcls(),callable:function(obj,args){ARp(obj,args[0],args[1],A7H(args[2]),A7H(args[3]),args[4],Bjq(args[5]),A7H(args[6]),BaL(args[7]),args[8]);return null;}},{name:"calculateWidths",modifiers:0,accessLevel:1,parameterTypes:[Wf],returnType:$rt_voidcls(),callable:function(obj,args){AFc(obj
,args[0]);return null;}},{name:"alignRuns",modifiers:0,accessLevel:1,parameterTypes:[$rt_floatcls(),$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){AIf(obj,Bjq(args[0]),A7H(args[1]));return null;}},{name:"truncate",modifiers:0,accessLevel:1,parameterTypes:[Wf,ML,$rt_floatcls(),B1],returnType:$rt_voidcls(),callable:function(obj,args){Tz(obj,args[0],args[1],Bjq(args[2]),args[3]);return null;}},{name:"wrap",modifiers:0,accessLevel:1,parameterTypes:[Wf,ML,$rt_intcls()],returnType:ML,callable:
function(obj,args){return ZZ(obj,args[0],args[1],A7H(args[2]));}},{name:"setLastGlyphXAdvance",modifiers:0,accessLevel:1,parameterTypes:[Wf,ML],returnType:$rt_voidcls(),callable:function(obj,args){Id(obj,args[0],args[1]);return null;}},{name:"getGlyphWidth",modifiers:0,accessLevel:1,parameterTypes:[L2,Wf],returnType:$rt_floatcls(),callable:function(obj,args){return Je(obj,args[0],args[1]);}},{name:"getLineOffset",modifiers:0,accessLevel:1,parameterTypes:[H5,Wf],returnType:$rt_floatcls(),callable:function(obj,
args){return ALD(obj,args[0],args[1]);}},{name:"parseColorMarkup",modifiers:0,accessLevel:1,parameterTypes:[Hr,$rt_intcls(),$rt_intcls()],returnType:$rt_intcls(),callable:function(obj,args){return YJ(obj,args[0],A7H(args[1]),A7H(args[2]));}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){Bi8(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B1,callable:function(obj,args){return AYV(obj);}},{name:"<clinit>",modifiers
:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){Ec();A$l();return null;}}];}
function BlX(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!a.hT()&&!a.KO()){if(a.jz===null){A_j();b=(a.Dm()).$meta;c=b.methods;a.jz=Bb(G4,c.length);d=0;e=0;while(e<c.length){f=c[e];if($rt_str(f.name).y(B(279))){g=f.parameterTypes;h=Bb(IV,g.length);i=0;while(true){j=h.data;if(i>=j.length)break;j[i]=Ob(g[i]);i=i+1|0;}j=a.jz.data;k=d+1|0;l=new G4;b=$rt_str(f.name);m=f.modifiers;AJO(l,a,b,m,f.accessLevel,h,Gp(f.callable,"call"));j[d]=l;d=k;}e=e+1|0;}a.jz=Lr(a.jz,d);}return a.jz.e9();}return Bb(G4,0);}
function A3_(a){var b,c,d,e,f,g,h,i,j;b=a.tx();c=b.data;d=c.length;e=Bb(G4,d);f=0;g=0;while(g<d){h=c[g];if(M4(h.uD())){i=e.data;j=f+1|0;i[f]=h;f=j;}g=g+1|0;}if(f<e.data.length)e=Lr(e,f);return e;}
function Bil(a,b){var c,d,e,f;c=(a.tx()).data;d=c.length;e=0;while(true){if(e>=d)G(A33());f=c[e];if(AKx(f.yb(),b))break;e=e+1|0;}return f;}
function Bii(a,b){var c,d,e,f;c=(a.tx()).data;d=c.length;e=0;while(true){if(e>=d)G(A33());f=c[e];if(M4(f.uD())&&AKx(f.yb(),b))break;e=e+1|0;}return f;}
var Dr=D();
var AHl=D(Dr);
var EK=D(0);
function ALW(){var a=this;C.call(a);a.H=null;a.bw=0;}
function Bmn(){var a=new ALW();A84(a);return a;}
function Bs0(a){var b=new ALW();A6M(b,a);return b;}
function A84(a){K(a);a.H=Bf(0);}
function A6M(a,b){K(a);a.H=Bf(((b+32|0)-1|0)/32|0);}
function A0h(a,b){var c,d;c=b/32|0;if(b>=a.bw){IP(a,c+1|0);a.bw=b+1|0;}d=a.H.data;d[c]=d[c]|1<<(b%32|0);}
function AUr(a,b,c){var d,e,f,g;if(b>c)G(DS());d=b/32|0;e=c/32|0;if(c>a.bw){IP(a,e+1|0);a.bw=c;}if(d==e){f=a.H.data;f[d]=f[d]|HS(a,b)&IH(a,c);}else{f=a.H.data;f[d]=f[d]|HS(a,b);g=d+1|0;while(g<e){a.H.data[g]=(-1);g=g+1|0;}if(c&31){f=a.H.data;f[e]=f[e]|IH(a,c);}}}
function HS(a,b){var c;c=b%32|0;return (-1)<<c;}
function IH(a,b){var c;c=b%32|0;return !c?0:(-1)>>>(32-c|0);}
function Bml(a,b){var c,d;c=b/32|0;if(c<a.H.data.length){d=a.H.data;d[c]=d[c]&AF2((-2),b%32|0);if(b==(a.bw-1|0))GG(a);}}
function A6Z(a,b,c){var d,e,f,g,h;if(b>c)G(DS());if(b>=a.bw)return;d=BH(a.bw,c);e=b/32|0;f=d/32|0;if(e==f){g=a.H.data;g[e]=g[e]&(IH(a,b)|HS(a,d));}else{g=a.H.data;g[e]=g[e]&IH(a,b);h=e+1|0;while(h<f){a.H.data[h]=0;h=h+1|0;}if(d&31){g=a.H.data;g[f]=g[f]&HS(a,d);}}GG(a);}
function A67(a,b){var c;c=b/32|0;return c<a.H.data.length&&a.H.data[c]&1<<(b%32|0)?1:0;}
function Bly(a,b){var c,d,e,f,g;if(b>=a.bw)return (-1);c=b/32|0;d=a.H.data[c];e=d>>>(b%32|0);if(e)return Gq(e)+b|0;f=(a.bw+31|0)/32|0;g=c+1|0;while(g<f){if(a.H.data[g])return (g*32|0)+Gq(a.H.data[g])|0;g=g+1|0;}return (-1);}
function AZP(a,b){var c,d,e,f,g;if(b>=a.bw)return b;c=b/32|0;d=a.H.data[c]^(-1);e=d>>>(b%32|0);if(e)return Gq(e)+b|0;f=(a.bw+31|0)/32|0;g=c+1|0;while(g<f){if(a.H.data[g]!=(-1))return (g*32|0)+Gq(a.H.data[g]^(-1))|0;g=g+1|0;}return a.bw;}
function IP(a,b){var c;if(a.H.data.length>=b)return;c=Bm((b*3|0)/2|0,(a.H.data.length*2|0)+1|0);a.H=A4M(a.H,c);}
function GG(a){var b,c,d;b=(a.bw+31|0)/32|0;a.bw=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=PH(a.H.data[c]);if(d<32)break;c=c+(-1)|0;a.bw=a.bw-32|0;}a.bw=a.bw-d|0;}}
function AZl(a,b){var c,d;c=BH(a.H.data.length,b.H.data.length);d=0;while(d<c){if(a.H.data[d]&b.H.data[d])return 1;d=d+1|0;}return 0;}
function Bkx(a,b){var c,d,e;c=BH(a.H.data.length,b.H.data.length);d=0;while(d<c){e=a.H.data;e[d]=e[d]&b.H.data[d];d=d+1|0;}while(c<a.H.data.length){a.H.data[c]=0;c=c+1|0;}a.bw=BH(a.bw,b.bw);GG(a);}
function A5c(a,b){var c,d,e;c=BH(a.H.data.length,b.H.data.length);d=0;while(d<c){e=a.H.data;e[d]=e[d]&(b.H.data[d]^(-1));d=d+1|0;}GG(a);}
function Bkn(a,b){var c,d,e;a.bw=Bm(a.bw,b.bw);IP(a,(a.bw+31|0)/32|0);c=BH(a.H.data.length,b.H.data.length);d=0;while(d<c){e=a.H.data;e[d]=e[d]|b.H.data[d];d=d+1|0;}}
function Bc2(a,b){var c,d,e;a.bw=Bm(a.bw,b.bw);IP(a,(a.bw+31|0)/32|0);c=BH(a.H.data.length,b.H.data.length);d=0;while(d<c){e=a.H.data;e[d]=e[d]^b.H.data[d];d=d+1|0;}GG(a);}
function BkG(a){return a.bw?0:1;}
function L1(){D8.call(this);this.Ee=0.0;}
var BzF=0.0;var BzG=null;function Jk(){Jk=M(L1);AZF();}
function Boc(a){var b=new L1();Ty(b,a);return b;}
function Ty(a,b){Jk();R5(a);a.Ee=b;}
function Bjq(a){return a.Ee;}
function QE(b){Jk();return Boc(b);}
function E_(b){var c,d,e,f,g,h,i,j,k,l,m,n;Jk();if(b.bW())G(Ff());c=0;d=b.j();while(true){if(b.g(c)>32){while(b.g(d-1|0)<=32){d=d+(-1)|0;}e=0;if(b.g(c)==45){c=c+1|0;e=1;}else if(b.g(c)==43)c=c+1|0;if(c==d)G(Ff());a:{f=b.g(c);g=0;h=0;i=0;if(f!=46){i=1;if(f>=48&&f<=57){b:{while(c<d){if(b.g(c)!=48)break b;c=c+1|0;}}while(c<d){j=b.g(c);if(j<48)break a;if(j>57)break a;if(g>=214748355)h=h+1|0;else g=(g*10|0)+(j-48|0)|0;c=c+1|0;}}else G(Ff());}}if(c<d&&b.g(c)==46){c=c+1|0;c:{while(true){if(c>=d)break c;k=b.g(c);if
(k<48)break c;if(k>57)break;if(g<214748355){g=(g*10|0)+(k-48|0)|0;h=h+(-1)|0;}c=c+1|0;i=1;}}if(!i)G(Ff());}if(c<d){j=b.g(c);if(j!=101&&j!=69)G(Ff());j=c+1|0;l=0;if(j==d)G(Ff());if(b.g(j)==45){j=j+1|0;l=1;}else if(b.g(j)==43)j=j+1|0;m=0;n=0;d:{while(true){if(j>=d)break d;k=b.g(j);if(k<48)break d;if(k>57)break;m=(10*m|0)+(k-48|0)|0;n=1;j=j+1|0;}}if(!n)G(Ff());if(l)m= -m|0;h=h+m|0;}e:{j=Cu(h,38);if(j<=0){if(j)break e;if(g<=34028234)break e;}return e?(-Infinity):Infinity;}if(e)g= -g|0;return g*AJ0(h);}c=c+1|0;if
(c==d)break;}G(Ff());}
function AJ0(b){var c,d;Jk();if(b>=0)c=10.0;else{c=0.1;b= -b|0;}d=1.0;while(b){if(b%2|0)d=d*c;c=c*c;b=b/2|0;}return d;}
function RW(b){Jk();return $rt_floatToIntBits(b);}
function AZF(){BzF=$rt_globals.NaN;BzG=F($rt_floatcls());}
function Ev(){Ca.call(this);this.fy=0;}
function U1(a){var b=new Ev();AZ7(b,a);return b;}
function AZ7(a,b){DK(a);a.fy=b;}
function Bck(a){return 1;}
function AUb(a,b,c){return a.fy!=c.g(b)?(-1):1;}
function ASn(a,b,c,d){var e,f,g,h;if(!(c instanceof B1))return HM(a,b,c,d);e=c;f=d.K();while(true){if(b>=f)return (-1);g=e.e1(a.fy,b);if(g<0)return (-1);h=a.k;b=g+1|0;if(h.e(b,c,d)>=0)break;}return g;}
function AVX(a,b,c,d,e){var f,g;if(!(d instanceof B1))return HV(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.nV(a.fy,c);if(g<0)break a;if(g<b)break a;if(a.k.e(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function A25(a){var b,c;b=a.fy;c=H();Bp(c,b);return P(c);}
function APB(a){return a.fy;}
function A2t(a,b){if(b instanceof Ev)return b.ra()!=a.fy?0:1;if(!(b instanceof Ep)){if(b instanceof DL)return b.r(a.fy);if(!(b instanceof En))return 1;return 0;}return b.bR(0,Ks(a.fy))<=0?0:1;}
function CI(){var a=this;C.call(a);a.t4=0;a.rn=0;a.hU=null;}
function LT(a){Pl(a,16,2147483647);}
function Pl(a,b,c){K(a);a.hU=A9h(0,b);a.t4=c;}
function SB(a){return !a.hU.h?a.wf():a.hU.Jo();}
function AQ0(a,b){if(b===null)G(Bl(B(280)));if(a.hU.h>=a.t4)a.GT(b);else{a.hU.C(b);a.rn=Bm(a.rn,a.hU.h);a.uL(b);}}
function AUg(a,b){if(A2b(b,Dz))b.ea();}
function A9W(a,b){a.uL(b);}
function ABu(a,b){var c,d,e,f,g;if(b===null)G(Bl(B(35)));c=a.hU;d=a.t4;e=0;f=b.h;while(e<f){g=b.p(e);if(g!==null){if(c.h>=d)a.GT(g);else{c.C(g);a.uL(g);}}e=e+1|0;}a.rn=Bm(a.rn,c.h);}
var Uf=D(CI);
var Ja=D(Cw);
var Qv=D(0);
var II=D(0);
var TL=D();
var Um=D();
function Bnf(){var a=new Um();A8W(a);return a;}
function A8W(a){K(a);}
function BjY(a,b){a.TQ(b,null);}
function A0m(a,b,c){}
var Cy=D(BX);
var UY=D(Cy);
function AHb(){var a=this;Ba.call(a);a.uH=0;a.sg=0;a.yF=0;}
function IW(a,b){var c=new AHb();AR6(c,a,b);return c;}
function BrR(a,b,c){var d=new AHb();A50(d,a,b,c);return d;}
function AR6(a,b,c){BG(a);a.sg=c;a.uH=b;}
function A50(a,b,c,d){BG(a);a.yF=d;a.sg=c;a.uH=b;}
function ANe(a){var b;b=BmU(a.uH);if(a.yF)b.bO.fK(0,2048);b.bm=a.sg;return b;}
function Y5(){C.call(this);this.Ja=null;}
function Brx(){var a=new Y5();A4S(a);return a;}
function A4S(a){K(a);a.Ja=A4T();}
function BcW(a,b,c){AS$(a.Ja,$rt_ustr(b),c);}
function A4T(){var soundManager=new $rt_globals.SoundManager();soundManager.debugMode=false;return soundManager;}
function AS$(b,c,d){b.setup({url:c,onready:function(){d.onready();},ontimeout:function(status){d.ontimeout();}});}
var Om=D();
var BzH=null;function BzI(){BzI=M(Om);Bkr();}
function Bkr(){BzH=E3();}
var FI=D(0);
var Eu=D(CW);
var BzJ=null;var BzK=null;var BzL=null;var BzM=0.0;var BzN=0.0;function BzO(){BzO=M(Eu);Ble();}
function Ble(){BzJ=BN();BzK=BN();BzL=BN();BzM=0.4000000059604645;BzN=0.10000000149011612;}
var U9=D(Eu);
var QN=D(0);
var JV=D(Dx);
function AHP(a,b,c,d){Hj(a,b);a.D=c;a.bd=d;}
function ABy(b){var c,d;if(b>=0)return BqP(b);c=new CH;d=H();V(I(d,B(281)),b);EO(c,P(d));G(c);}
function AHm(b,c,d){return Bpd(0,b.data.length,b,c,c+d|0,0);}
function N5(b){return AHm(b,0,b.data.length);}
function AOE(a,b,c,d){var e,f,g,h,i,j,k,l;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BC;i=H();V(I(V(I(i,B(282)),g),B(283)),f);BO(h,P(i));G(h);}if(Bj(a)<d)G(ABh());if(d<0){i=new BC;h=H();I(V(I(h,B(284)),d),B(285));BO(i,P(h));G(i);}j=a.D;k=0;while(k<d){g=c+1|0;f=j+1|0;e[c]=a.Dh(j);k=k+1|0;c=g;j=f;}a.D=a.D+d|0;return a;}}e=b.data;i=new BC;f=e.length;l=H();Bp(V(I(V(I(l,B(286)),c),B(57)),f),41);BO(i,P(l));G(i);}
function A0n(a,b){return a.tn(b,0,b.data.length);}
function BlZ(a,b,c,d){var e,f,g,h,i,j,k,l;if(a.ck())G(DR());if(Bj(a)<d)G(HJ());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BC;i=H();V(I(V(I(i,B(287)),g),B(283)),f);BO(h,P(i));G(h);}if(d<0){i=new BC;h=H();I(V(I(h,B(284)),d),B(285));BO(i,P(h));G(i);}j=a.D;k=0;while(k<d){g=j+1|0;l=c+1|0;a.uq(j,e[c]);k=k+1|0;j=g;c=l;}a.D=a.D+d|0;return a;}}e=b.data;i=new BC;f=e.length;h=H();Bp(V(I(V(I(h,B(286)),c),B(57)),f),41);BO(i,P(h));G(i);}
function A73(a,b,c,d){var e,f,g,h,i,j;if(a.ck())G(DR());e=d-c|0;if(Bj(a)<e)G(HJ());if(c>=0&&c<b.j()){if(d>b.j()){f=new BC;g=b.j();h=H();V(I(V(I(h,B(287)),d),B(288)),g);BO(f,P(h));G(f);}if(c>d){f=new BC;h=H();V(I(V(I(h,B(289)),c),B(290)),d);BO(f,P(h));G(f);}i=a.D;while(c<d){j=i+1|0;g=c+1|0;a.uq(i,b.g(c));i=j;c=g;}a.D=a.D+e|0;return a;}f=new BC;g=b.j();h=H();Bp(V(I(V(I(h,B(289)),c),B(57)),g),41);BO(f,P(h));G(f);}
function K9(a,b){return a.Mn(b,0,b.j());}
function ADV(a){return a.Up();}
function Rk(a){return a.Tg();}
function N3(a){I0(a);return a;}
function AW3(a,b){Iz(a,b);return a;}
var Jl=D(JV);
function UO(a,b,c,d){AHP(a,b,c,d);}
function AOJ(a){var b,c,d,e;if(a.ck())G(DR());a:{b=Bj(a);if(a.D>0){c=a.D;d=0;while(true){if(d>=b)break a;e=c+1|0;a.uq(d,a.Dh(c));d=d+1|0;c=e;}}}a.D=b;a.bd=a.ih;a.f2=(-1);return a;}
function Blt(a){return a.fe();}
function WC(){var a=this;Jl.call(a);a.Jk=0;a.xF=0;a.o2=null;}
function BqP(a){var b=new WC();Bgq(b,a);return b;}
function Bpd(a,b,c,d,e,f){var g=new WC();AB1(g,a,b,c,d,e,f);return g;}
function Bgq(a,b){AB1(a,0,b,Ck(b),0,b,0);}
function AB1(a,b,c,d,e,f,g){UO(a,c,e,f);a.xF=b;a.Jk=g;a.o2=d;}
function BfL(a,b){return a.o2.data[b+a.xF|0];}
function Bdw(a,b,c){a.o2.data[b+a.xF|0]=c;}
function AYW(a){return 1;}
function ATk(a){return a.o2;}
function A4w(a){return a.Jk;}
var RE=D();
var Ii=D(0);
function FP(){var a=this;C.call(a);a.fw=W;a.cH=null;a.px=0;}
function A4Q(){var a=new FP();Ox(a);return a;}
function Ox(a){K(a);a.cH=By();a.px=1;}
function IF(a){if(!a.px){a.cH.Hd(a);a.px=1;}}
function Fk(a){return a.fw;}
function B2(a,b){var c;a:{if(C0(a,b)){c=0;while(true){if(c>=a.cH.h)break a;if(Z((a.cH.p(c)).dq,b))return a.cH.p(c);c=c+1|0;}}}return null;}
function JH(a,b,c){return B2(a,c);}
function AUQ(a){a.fw=W;a.cH.J();}
function AEN(a,b){a.fw=B3(a.fw,b);}
function Fu(a,b){var c;c=a.PT(b.dq);if(c>=0)a.cH.l3(c,b);else{AEN(a,b.dq);a.cH.C(b);a.px=0;}IF(a);}
function AFD(a,b){var c,d,e,f;c=b.data;d=c.length;e=0;while(e<d){f=c[e];Fu(a,f);e=e+1|0;}}
function HR(a,b){var c,d;c=b.fI();while(c.bE()){d=c.bA();Fu(a,d);}}
function C0(a,b){return DW(b,W)&&Z(Bk(a.fw,b),b)?1:0;}
function A1A(a,b){var c;a:{if(C0(a,b)){c=0;while(true){if(c>=a.cH.h)break a;if(Z((a.cH.p(c)).dq,b))break;c=c+1|0;}return c;}}return (-1);}
function Xv(a,b,c){var d;if(b===a)return 1;if(b!==null&&Z(a.fw,b.fw)){if(!c)return 1;IF(a);IF(b);d=0;while(d<a.cH.h){if(!(a.cH.p(d)).CX(b.cH.p(d)))return 0;d=d+1|0;}return 1;}return 0;}
function VW(a,b,c){return Y(Dj(b.dq,c.dq));}
function MP(a){return a.cH.b3();}
function A8o(a){var b,c,d,e,f;IF(a);b=a.cH.h;c=BE(N(71),a.fw);d=1;e=0;while(e<b){f=Bn(a.fw,N((a.cH.p(e)).bl()));d=(d*7|0)&65535;c=BE(c,Bn(f,N(d)));e=e+1|0;}return Y(Ex(c,EG(c,32)));}
function ADm(a){return a.J9();}
function ACp(a,b){if(!(b instanceof FP))return 0;if(b===a)return 1;return Xv(a,b,1);}
function A75(a,b,c){return VW(a,b,c);}
function HN(){FP.call(this);this.nH=null;}
var BzP=0;function LL(){LL=M(HN);Bkl();}
function BzQ(){var a=new HN();Nd(a);return a;}
function BzR(a){var b=new HN();LI(b,a);return b;}
function Brj(a){var b=new HN();Rg(b,a);return b;}
function Bql(a){var b=new HN();ALS(b,a);return b;}
function BzS(a,b){var c=new HN();Nx(c,a,b);return c;}
function Nd(a){var b,c;LL();b=(H()).c(B(291));c=BzP+1|0;BzP=c;LI(a,(b.t(c)).d());}
function LI(a,b){LL();Ox(a);a.nH=b;}
function Rg(a,b){LL();Nd(a);AFD(a,b);}
function ALS(a,b){LL();Nx(a,b.nH,b);}
function Nx(a,b,c){var d,e;LL();LI(a,b);d=MP(c);while(d.bE()){e=d.bA();Fu(a,e.qV());}}
function BhX(a){return Bql(a);}
function AWM(a){return ADm(a)+(3*a.nH.bl()|0)|0;}
function ASx(a,b){var c;a:{b:{if(b instanceof HN){if(b===a)break b;if(b.nH.y(a.nH)&&ACp(a,b))break b;}c=0;break a;}c=1;}return c;}
function Bkl(){BzP=0;}
function AIQ(){X.call(this);this.Va=null;}
function Bp5(a){var b=new AIQ();ANo(b,a);return b;}
function ANo(a,b){a.Va=b;Bo(a);}
function BjI(a,b){return S1(b);}
var Q$=D();
var BzT=0;function N7(){N7=M(Q$);Bdd();}
function AJ7(b,c,d,e){var f;N7();if(!BzT){Qa(b,c,d,e);return;}a:{f=BvC.xz();KA();if(f!==Bwn&&BvC.xz()!==Bwr){f=BvC;if(f.xz()!==Bws){AJJ(b,c,d,e);break a;}}AE1(b,c);}}
function AE1(b,c){var d,e,f,g,h,i,j;N7();d=BwR;e=c.lw();f=c.bk();g=c.bh();h=c.m0();i=c.mg();j=c.lz();d.jm(b,0,e,f,g,0,h,i,j);BwS.s6(b);}
function AJJ(b,c,d,e){var f,g,h,i,j,k,l;N7();a:{if(!BwN.wh(B(292))){f=BwN;if(!f.wh(B(293))){f=BwS;if(!((CB(f)).v()).y(B(294))&&BwT===null){Qa(b,c,d,e);break a;}}}f=BwR;g=c.lw();h=c.bk();i=c.bh();j=c.m0();k=c.mg();l=c.lz();f.jm(b,0,g,h,i,0,j,k,l);BwS.s6(b);}}
function Qa(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;N7();f=BwR;g=c.lw();h=c.bk();i=c.bh();j=c.m0();k=c.mg();l=c.lz();f.jm(b,0,g,h,i,0,j,k,l);if(BwS===null&&d!=e)G(Bh(B(295)));m=c.bk()/2|0;n=c.bh()/2|0;o=1;while(m>0&&n>0){p=SQ(m,n,c.gz());Ig();p.HN(ByO);p.QG(c,0,0,c.bk(),c.bh(),0,0,m,n);if(o>1)c.cJ();f=BwR;j=p.lw();k=p.bk();q=p.bh();g=p.m0();h=p.mg();l=p.lz();f.jm(b,o,j,k,q,0,g,h,l);m=p.bk()/2|0;n=p.bh()/2|0;o=o+1|0;c=p;}}
function Bdd(){BzT=1;}
var GP=D(0);
function SR(){var a=this;C.call(a);a.qh=null;a.va=null;a.oU=null;a.wZ=null;}
function BsM(a,b,c,d){var e=new SR();A0S(e,a,b,c,d);return e;}
function A0S(a,b,c,d,e){a.wZ=b;a.qh=c;a.va=d;a.oU=e;K(a);}
function Bci(a,b){var c,d,e;if(a.qh.readyState==4){if(a.qh.status!=200)a.va.cV(a.oU);else{if(a.wZ.hH){c=Em();d=a.oU;e=H();I(I(e,B(296)),d);c.e4(P(e));}a.va.c5(a.oU,$rt_str(a.qh.responseText));}a.wZ.rH();}}
function Bgc(a,b){a.c2(b);}
function SS(){var a=this;C.call(a);a.lA=null;a.uI=null;a.qS=null;a.xr=null;}
function Bt1(a,b,c,d){var e=new SS();A5g(e,a,b,c,d);return e;}
function A5g(a,b,c,d,e){a.xr=b;a.lA=c;a.uI=d;a.qS=e;K(a);}
function A4I(a,b){var c,d,e,f,g,h,i;if(a.lA.readyState==4){if(a.lA.status!=200)a.uI.cV(a.qS);else{if(a.xr.hH){c=Em();d=a.qS;e=H();I(I(e,B(297)),d);c.e4(P(e));}f=a.lA.response;g=Hk();h=g.mD();i=h.createElement("script");c=h.createTextNode(f);i.appendChild(c);h.body.appendChild(i);a.uI.c5(a.qS,$rt_str(a.lA.responseText));}a.xr.rH();}}
function AVu(a,b){a.c2(b);}
function AGW(){CH.call(this);this.TF=null;}
function BtP(a){var b=new AGW();APa(b,a);return b;}
function APa(a,b){HF(a);a.TF=b;}
function ST(){var a=this;CA.call(a);a.q3=null;a.OV=null;}
function Bm$(a,b){var c=new ST();BjC(c,a,b);return c;}
function BjC(a,b,c){a.OV=b;a.q3=c;Ed(a);}
function AQk(a,b){a.q3.fT(b);}
function Bex(a,b){a.q3.cV(b);}
function Bk0(a,b,c){return a.q3.c5(b,null);}
function A7N(a,b,c){return a.uM(b,c);}
function SU(){var a=this;C.call(a);a.qj=null;a.wI=null;a.qu=null;a.ts=null;}
function Bn3(a,b,c,d){var e=new SU();Bbs(e,a,b,c,d);return e;}
function Bbs(a,b,c,d,e){a.ts=b;a.qj=c;a.wI=d;a.qu=e;K(a);}
function AOd(a,b){var c,d,e,f,g;if(a.qj.readyState==4){if(a.qj.status!=200)a.wI.cV(a.qu);else{if(a.ts.hH){c=Em();d=a.qu;e=H();I(I(e,B(296)),d);c.e4(P(e));}f=a.qj.response;g=(Ew()).WE(f);a.wI.c5(a.qu,BrE(f,g));}a.ts.rH();}}
function BdE(a,b){a.c2(b);}
function AGt(){X.call(this);this.M5=null;}
function Bnj(a){var b=new AGt();A_6(b,a);return b;}
function A_6(a,b){a.M5=b;Bo(a);}
function A0P(a,b){return V$(b);}
function SV(){var a=this;CA.call(a);a.k7=null;a.v7=null;a.BM=0;a.Dg=null;a.r_=null;}
function BrT(a,b,c,d,e){var f=new SV();Bgy(f,a,b,c,d,e);return f;}
function Bgy(a,b,c,d,e,f){a.r_=b;a.k7=c;a.v7=d;a.BM=e;a.Dg=f;Ed(a);}
function ATr(a,b){a.k7.fT(b);}
function A6S(a,b){a.k7.cV(b);}
function A6U(a,b,c){var d,e,f,g,h;d=$rt_globals.window.document;e=d.createElement("img");if(a.v7!==null){d=a.v7;e.setAttribute("crossOrigin",$rt_ustr(d));}a.r_.pa();Bd0(e,Bq3(a,b,e));if(!a.BM){f=$rt_ustr(b);e.src=f;}else{g=a.Dg;h=Zw(c);f=H();I(I(I(I(f,B(298)),g),B(299)),h);f=$rt_ustr(P(f));e.src=f;}return 0;}
function ATW(a,b,c){return a.uM(b,c);}
function SW(){var a=this;C.call(a);a.Fc=null;a.Pw=null;}
function Bn2(a,b){var c=new SW();BbL(c,a,b);return c;}
function BbL(a,b,c){a.Pw=b;a.Fc=c;K(a);}
function AQB(a,b){a.Fc.fT(b.loaded);}
function AYQ(a,b){a.c2(b);}
var EU=D(Dx);
function AJE(a,b,c,d){Hj(a,b);a.D=c;a.bd=d;}
function BkH(b,c,d){return Bok(0,b.data.length,b,c,c+d|0,0);}
function A6V(b){return BkH(b,0,b.data.length);}
function AYb(a,b,c,d){var e,f,g,h,i,j,k;if(a.ck())G(DR());if(Bj(a)<d)G(HJ());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BC;i=H();V(I(V(I(i,B(300)),g),B(283)),f);BO(h,P(i));G(h);}if(d<0){h=new BC;i=H();I(V(I(i,B(284)),d),B(285));BO(h,P(i));G(h);}j=a.D;k=0;while(k<d){g=j+1|0;f=c+1|0;a.oE(j,e[c]);k=k+1|0;j=g;c=f;}a.D=a.D+d|0;return a;}}e=b.data;h=new BC;f=e.length;i=H();Bp(V(I(V(I(i,B(286)),c),B(57)),f),41);BO(h,P(i));G(h);}
function NX(a){HI(a);return a;}
function KV(a){I0(a);return a;}
function ATJ(a,b){Lj(a,b);return a;}
function Bfk(a,b){Iz(a,b);return a;}
function AT1(a){return KV(a);}
function A5l(a){return NX(a);}
function AZz(a,b){return a.rl(b);}
function A4a(a,b){return a.vR(b);}
var GV=D(EU);
function NQ(a,b,c,d){AJE(a,b,c,d);}
function AVE(a,b){var c,d,e;if(b>=0&&b<a.bd)return a.xZ(b);c=new BC;d=a.bd;e=H();Bp(V(I(V(I(e,B(268)),b),B(57)),d),41);BO(c,P(e));G(c);}
function Blo(a,b,c){var d,e,f;if(a.ck())G(DR());if(b>=0&&b<a.bd){a.oE(b,c);return a;}d=new BC;e=a.bd;f=H();Bp(V(I(V(I(f,B(268)),b),B(57)),e),41);BO(d,P(f));G(d);}
function A$p(a){return a.fe();}
function F8(){var a=this;GV.call(a);a.cE=null;a.I6=0;a.ct=0;}
function OX(a,b,c,d,e,f,g){NQ(a,c,e,f);a.ct=b;a.cE=d;a.I6=g;}
function Bf$(a){return a.I6;}
var Pm=D(0);
function TF(){var a=this;C.call(a);a.nK=0;a.V8=0;a.hH=0;}
function BnL(){var a=new TF();AVw(a);return a;}
function AVw(a){K(a);a.V8=1;a.hH=1;}
function A6i(a){return 0;}
function AYR(a){var b,c,d;b=Hk();c=b.Xk();d=$rt_str(c.href);return d;}
function AVk(a){return a.nK;}
function Bjf(a){a.nK=a.nK-1|0;}
function AXx(a){a.nK=a.nK+1|0;}
function AQJ(a,b,c,d,e,f){var g,h;a:{Btn();switch(BzU.data[Br(d)]){case 1:break;case 2:a.Ka(b,c,e,f);break a;case 3:a.tL(b,c,f);break a;case 4:a.Lm(b,c,f);break a;case 5:f.c5(c,null);break a;default:g=new DD;h=H();I(I(h,B(301)),d);Eo(g,P(h));G(g);}a.Ae(b,c,f);}}
function AOg(a,b,c,d){var e,f;if(a.hH){e=Em();f=H();I(I(f,B(302)),c);e.e4(P(f));}e=new $rt_globals.XMLHttpRequest();f=BZ(BsM(a,e,d,c),"handleEvent");e.onreadystatechange=f;a.pa();Kw(a,e,d);e.open("GET",$rt_ustr(c),!!b);e.setRequestHeader("Content-Type","text/plain; charset=utf-8");e.send();}
function A5m(a,b,c,d){var e,f;if(a.hH){e=Em();f=H();I(I(f,B(303)),c);e.e4(P(f));}e=new $rt_globals.XMLHttpRequest();f=BZ(Bt1(a,e,d,c),"handleEvent");e.onreadystatechange=f;a.pa();Kw(a,e,d);e.open("GET",$rt_ustr(c),!!b);e.setRequestHeader("Content-Type","text/plain; charset=utf-8");e.send();}
function BaO(a,b,c,d){a.tL(b,c,Bm$(a,d));}
function A9Z(a,b,c,d){var e,f,g;if(a.hH){e=Em();f=H();I(I(f,B(302)),c);e.e4(P(f));}e=new $rt_globals.XMLHttpRequest();g=BZ(Bn3(a,e,d,c),"handleEvent");e.onreadystatechange=g;a.pa();Kw(a,e,d);e.open("GET",$rt_ustr(c),!!b);if(b){f="arraybuffer";e.responseType=f;}e.send();}
function AXX(a,b,c,d,e){a.RQ(b,c,d,null,e);}
function A51(a,b,c,d,e,f){var g;g=0;a.tL(b,c,BrT(a,f,e,g,d));}
function Bd0(b,c){b.addEventListener("load",BZ(c,"handleEvent"),!!0);b.addEventListener("error",BZ(c,"handleEvent"),!!0);}
function Kw(a,b,c){var d;d=BZ(Bn2(a,c),"handleEvent");b.onprogress=d;}
var Mm=D();
var BzU=null;function Btn(){Btn=M(Mm);AW5();}
function AW5(){BzU=Bf((PU()).data.length);BzU.data[Br(ByZ)]=1;BzU.data[Br(By0)]=2;BzU.data[Br(By1)]=3;BzU.data[Br(By2)]=4;BzU.data[Br(By3)]=5;}
var X9=D(BX);
var F5=D(Cw);
var AJL=D(F5);
var WU=D(Ht);
function BoK(a){var b=new WU();BcA(b,a);return b;}
function BcA(a,b){Ni(a,b);}
function H5(){var a=this;C.call(a);a.N=null;a.h=0;a.hn=0;a.sm=null;}
function By(){var a=new H5();AP3(a);return a;}
function Ee(a){var b=new H5();AL6(b,a);return b;}
function A9h(a,b){var c=new H5();MX(c,a,b);return c;}
function BzV(a,b,c){var d=new H5();ACe(d,a,b,c);return d;}
function Bs5(a){var b=new H5();BiI(b,a);return b;}
function BzW(a,b,c,d){var e=new H5();WF(e,a,b,c,d);return e;}
function AP3(a){MX(a,1,16);}
function AL6(a,b){MX(a,1,b);}
function MX(a,b,c){K(a);a.hn=b;a.N=Bb(C,c);}
function ACe(a,b,c,d){K(a);a.hn=b;a.N=Gf(d,c);}
function BiI(a,b){WF(a,1,b,0,b.data.length);}
function WF(a,b,c,d,e){ACe(a,b,e,(CB(c)).gT());a.h=e;Bi(c,d,a.N,0,a.h);}
function A0T(a,b){var c,d,e;c=a.N;d=c.data;if(a.h==d.length)c=a.k4(Bm(8,a.h*1.75|0));d=c.data;e=a.h;a.h=e+1|0;d[e]=b;}
function AUA(a,b){a.tS(b.N,0,b.h);}
function AN1(a,b,c,d){if((c+d|0)<=b.h){a.tS(b.N,c,d);return;}G(Bl((((((((H()).c(B(304))).t(c)).c(B(305))).t(d)).c(B(306))).t(b.h)).d()));}
function ATN(a,b){a.tS(b,0,b.data.length);}
function APR(a,b,c,d){var e,f,g;e=a.N;f=e.data;g=a.h+d|0;if(g>f.length)e=a.k4(Bm(Bm(8,g),a.h*1.75|0));Bi(b,c,e,a.h,d);a.h=g;}
function Bkw(a,b){if(b<a.h)return a.N.data[b];G(Dl((((((H()).c(B(307))).t(b)).c(B(308))).t(a.h)).d()));}
function A0w(a,b,c){if(b<a.h){a.N.data[b]=c;return;}G(Dl((((((H()).c(B(307))).t(b)).c(B(308))).t(a.h)).d()));}
function Bd3(a,b,c){var d,e;if(b>a.h)G(Dl((((((H()).c(B(309))).t(b)).c(B(310))).t(a.h)).d()));d=a.N;e=d.data;if(a.h==e.length)d=a.k4(Bm(8,a.h*1.75|0));if(!a.hn){e=d.data;e[a.h]=e[b];}else Bi(d,b,d,b+1|0,a.h-b|0);e=d.data;a.h=a.h+1|0;e[b]=c;}
function A_s(a,b,c){var d,e,f,g;a:{d=a.N;e=a.h-1|0;if(!(!c&&b!==null)){while(true){if(e<0)break a;f=d.data;g=e+(-1)|0;if(f[e]===b)break;e=g;}return 1;}while(true){if(e<0)break a;f=d.data;g=e+(-1)|0;if(b.y(f[e]))return 1;e=g;}}return 0;}
function ARk(a,b,c){var d,e,f;a:{d=a.N;if(!c&&b!==null){e=0;f=a.h;while(true){if(e>=f)break a;if(b.y(d.data[e]))break;e=e+1|0;}return e;}e=0;f=a.h;while(true){if(e>=f)break a;if(d.data[e]===b)break;e=e+1|0;}return e;}return (-1);}
function ARl(a,b,c){var d,e,f;a:{d=a.N;if(!(!c&&b!==null)){e=0;f=a.h;while(e<f){if(d.data[e]===b){a.uJ(e);return 1;}e=e+1|0;}}else{e=0;f=a.h;while(true){if(e>=f)break a;if(b.y(d.data[e])){a.uJ(e);return 1;}e=e+1|0;}}}return 0;}
function AZV(a,b){var c,d,e;if(b>=a.h)G(Dl((((((H()).c(B(307))).t(b)).c(B(308))).t(a.h)).d()));c=a.N;d=c.data;e=d[b];a.h=a.h-1|0;if(!a.hn)d[b]=d[a.h];else Bi(c,b+1|0,c,b,a.h-b|0);d[a.h]=null;return e;}
function ARP(a,b,c){var d,e,f,g,h,i;d=a.h;if(c>=d)G(Dl((((((H()).c(B(311))).t(c)).c(B(308))).t(a.h)).d()));if(b>c)G(Dl((((((H()).c(B(312))).t(b)).c(B(310))).t(c)).d()));e=a.N;f=(c-b|0)+1|0;g=d-f|0;if(a.hn){h=b+f|0;Bi(e,h,e,b,d-h|0);}else{i=Bm(g,c+1|0);Bi(e,i,e,b,d-i|0);}i=g;while(i<d){e.data[i]=null;i=i+1|0;}a.h=g;}
function A65(a){var b;if(!a.h)G(C5(B(313)));a.h=a.h-1|0;b=a.N.data[a.h];a.N.data[a.h]=null;return b;}
function A4L(a){if(!a.h)G(C5(B(313)));return a.N.data[a.h-1|0];}
function Bmk(a){if(!a.h)G(C5(B(313)));return a.N.data[0];}
function A_k(a){Jb(a.N,0,a.h,null);a.h=0;}
function A2w(a,b){var c;if(b<0)G(Bl((((H()).c(B(314))).t(b)).d()));c=a.h+b|0;if(c>a.N.data.length)a.k4(Bm(Bm(8,c),a.h*1.75|0));return a.N;}
function A$G(a,b){var c,d,e;c=a.N;d=Gf((CB(c)).gT(),b);e=d.data;Bi(c,0,d,0,BH(a.h,e.length));a.N=d;return d;}
function A4X(a,b){(ASJ()).Vo(a.N,b,0,a.h);}
function AU$(a){if(BzX)return NW(a,1);if(a.sm===null)a.sm=Bqb(a);return a.sm.b3();}
function AOc(a,b){var c;if(b<0)G(Bl((((H()).c(B(315))).t(b)).d()));if(a.h<=b)return;c=b;while(c<a.h){a.N.data[c]=null;c=c+1|0;}a.h=b;}
function A76(a){var b,c,d,e,f,g;if(!a.hn)return P4(a);b=a.N;c=1;d=0;e=a.h;while(d<e){f=b.data;c=c*31|0;g=f[d];if(g!==null)c=c+g.bl()|0;d=d+1|0;}return c;}
function AWt(a,b){var c,d,e,f,g,h,i,j;if(b===a)return 1;if(!a.hn)return 0;if(!(b instanceof H5))return 0;c=b;if(!c.hn)return 0;d=a.h;if(d!=c.h)return 0;e=a.N;f=c.N;g=0;a:{while(g<d){b:{h=f.data;i=e.data[g];j=h[g];if(i!==null){if(i.y(j))break b;else break a;}if(j!==null)break a;}g=g+1|0;}return 1;}return 0;}
function A2x(a){var b,c,d,e;if(!a.h)return B(316);b=a.N;c=b.data;d=A4x(32);d.mw(91);d.Br(c[0]);e=1;while(e<a.h){d.Gl(B(317));d.Br(c[e]);e=e+1|0;}d.mw(93);return d.d();}
function AOR(b){return Bs5(b);}
function AP_(a){return a.b3();}
function N0(){C7.call(this);this.Ei=0;}
function BzY(a){var b=new N0();ABw(b,a);return b;}
function ABw(a,b){FE(a,b);}
function A7l(a,b,c,d){var e;e=a.k5();d.bH(e,b-d.eN(e)|0);a.Ei=b;return b;}
function AP5(a){return a.Ei;}
function A1H(a){return B(318);}
function Bgj(a,b){return 0;}
var I7=D(0);
function Lz(){B4.call(this);this.h4=0;}
function AYO(a){var b=new Lz();AQa(b,a);return b;}
function AQa(a,b){Ds(a);a.h4=b;}
function Bf8(a,b){a.k=b;}
function A9E(a,b,c,d){var e,f,g;e=b+1|0;if(e>d.K()){d.ek=1;return (-1);}f=c.g(b);if(b>d.eC()){g=c.g(b-1|0);if(Cn(g))return (-1);}if(a.h4!=f)return (-1);return a.k.e(e,c,d);}
function AUk(a,b,c,d){var e,f,g,h,i;if(!(c instanceof B1))return HM(a,b,c,d);e=c;f=d.eC();g=d.K();while(true){if(b>=g)return (-1);h=e.e1(a.h4,b);if(h<0)return (-1);if(h>f&&Cn(e.g(h-1|0))){b=h+1|0;continue;}i=a.k;b=h+1|0;if(i.e(b,c,d)>=0)break;}return h;}
function A$B(a,b,c,d,e){var f,g,h;if(!(d instanceof B1))return HV(a,b,c,d,e);f=e.eC();g=d;a:{while(true){if(c<b)return (-1);h=g.nV(a.h4,c);if(h<0)break a;if(h<b)break a;if(h>f&&Cn(g.g(h-1|0))){c=h+(-2)|0;continue;}if(a.k.e(h+1|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function A1$(a){var b,c;b=a.h4;c=H();Bp(c,b);return P(c);}
function AN4(a,b){if(b instanceof Ev)return 0;if(b instanceof Ep)return 0;if(b instanceof DL)return 0;if(b instanceof En)return 0;if(b instanceof LF)return 0;if(!(b instanceof Lz))return 1;return b.h4!=a.h4?0:1;}
function A2f(a,b){return 1;}
var AL5=D(E6);
function A_z(a,b){var c=new AL5();ARK(c,a,b);return c;}
function ARK(a,b,c){YP(a,b,c);}
var Rp=D();
var BzZ=null;function Bz0(){Bz0=M(Rp);ARS();}
function ARS(){var b;BzZ=B_(16384);b=0;while(b<16384){BzZ.data[b]=ALa((b+0.5)/16384.0*6.2831854820251465);b=b+1|0;}BzZ.data[0]=0.0;BzZ.data[4096]=1.0;BzZ.data[8192]=0.0;BzZ.data[12288]=(-1.0);}
var P2=D(0);
function Fj(){Da.call(this);this.gI=null;}
function Brm(a,b,c,d){var e=new Fj();NL(e,a,b,c,d);return e;}
function NL(a,b,c,d,e){Gr(a,c,d,e);a.gI=b;}
function A7W(a,b,c,d){var e,f,g,h;e=a.gI.j5();f=a.gI.jx();g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.bD.cr()|0)>d.K())break a;h=a.bD.bR(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.k.e(b,c,d);if(h>=0)break;b=b-a.bD.cr()|0;g=g+(-1)|0;}return h;}if((b+a.bD.cr()|0)>d.K()){d.ek=1;return (-1);}h=a.bD.bR(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function A8y(a){return a.gI.d();}
function DL(){var a=this;B4.call(a);a.ee=null;a.tJ=0;}
function Bct(a){var b=new DL();AJu(b,a);return b;}
function AJu(a,b){Ds(a);a.ee=b.nl();a.tJ=b.bL;}
function A_d(a,b,c,d){var e,f,g,h,i,j;e=d.K();if(b<e){f=b+1|0;g=c.g(b);if(a.r(g)){h=a.k.e(f,c,d);if(h>0)return h;}if(f<e){i=f+1|0;j=c.g(f);if(In(g,j)&&a.r(D4(g,j)))return a.k.e(i,c,d);}}return (-1);}
function BkR(a){var b,c,d;b=!a.tJ?B(39):B(40);c=a.ee.d();d=H();I(I(I(d,B(41)),b),c);return P(d);}
function ATb(a,b){return a.ee.r(b);}
function AOW(a,b){if(b instanceof En)return Lf(a.ee,b.u$());if(b instanceof Ev)return Lf(a.ee,b.ra());if(b instanceof DL)return IK(a.ee,b.ee);if(!(b instanceof Ep))return 1;return IK(a.ee,b.xf());}
function AVU(a){return a.ee;}
function BiE(a,b){a.k=b;}
function ASK(a,b){return 1;}
var E9=D();
var UA=D(E9);
function B1(){var a=this;C.call(a);a.W=null;a.n6=0;}
var Bz1=null;function Fo(){Fo=M(B1);A2Y();}
function Ps(a){var b=new B1();KF(b,a);return b;}
function HK(a,b,c){var d=new B1();Sg(d,a,b,c);return d;}
function Bz2(a,b,c,d){var e=new B1();MD(e,a,b,c,d);return e;}
function Bz3(a,b,c,d){var e=new B1();Nw(e,a,b,c,d);return e;}
function BoD(a,b){var c=new B1();ZY(c,a,b);return c;}
function BtI(a,b,c){var d=new B1();Sl(d,a,b,c);return d;}
function KF(a,b){var c,d,e;Fo();c=b.data;K(a);d=c.length;a.W=Ck(d);e=0;while(e<d){a.W.data[e]=c[e];e=e+1|0;}}
function Sg(a,b,c,d){var e,f;Fo();K(a);a.W=Ck(d);e=0;while(e<d){f=b.data;a.W.data[e]=f[e+c|0];e=e+1|0;}}
function MD(a,b,c,d,e){Fo();Nw(a,b,c,d,SO(e.d()));}
function Nw(a,b,c,d,e){Fo();K(a);Y7(a,b,c,d,e);}
function ZY(a,b,c){Fo();MD(a,b,0,b.data.length,c);}
function Sl(a,b,c,d){var e,f,g,h,i,j,k;Fo();K(a);a.W=Ck(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.W.data;j=e+1|0;g[e]=i&65535;}else{g=a.W.data;k=e+1|0;g[e]=G6(i);g=a.W.data;j=k+1|0;g[k]=GF(i);}f=f+1|0;c=h;e=j;}if(e<a.W.data.length)a.W=Mz(a.W,e);}
function Y7(a,b,c,d,e){var f;f=AH2(e,AG7(b,c,d));if(ADV(f)&&!Cr(f)&&BQ(f)==DC(f))a.W=Rk(f);else{a.W=Ck(Bj(f));f.RR(a.W);}}
function A7R(a,b){if(b>=0&&b<a.W.data.length)return a.W.data[b];G(MW());}
function Bad(a){return a.W.data.length;}
function Bch(a){return a.W.data.length?0:1;}
function ASq(a,b,c,d,e){var f,g,h;if(b>=0&&b<=c&&c<=a.j()&&e>=0){f=d.data;if((e+(c-b|0)|0)<=f.length){while(b<c){g=e+1|0;h=b+1|0;f[e]=a.g(b);e=g;b=h;}return;}}G(DS());}
function Bj7(a,b){var c,d,e,f,g;if(a===b)return 0;c=BH(a.j(),b.j());d=0;while(true){if(d>=c)return a.j()-b.j()|0;e=a.g(d);f=b.g(d);g=e-f|0;if(g)break;d=d+1|0;}return g;}
function Bgx(a,b,c){var d,e,f;if((c+b.j()|0)>a.j())return 0;d=0;while(d<b.j()){e=b.g(d);f=c+1|0;if(e!=a.g(c))return 0;d=d+1|0;c=f;}return 1;}
function Bcp(a,b){if(a===b)return 1;return a.C2(b,0);}
function A_c(a,b){var c,d,e,f;if(a===b)return 1;if(b.j()>a.j())return 0;c=0;d=a.j()-b.j()|0;while(d<a.j()){e=a.g(d);f=c+1|0;if(e!=b.g(c))return 0;d=d+1|0;c=f;}return 1;}
function Bfv(a,b,c){var d,e,f,g;d=Bm(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.W.data.length)return (-1);if(a.W.data[d]==e)break;d=d+1|0;}return d;}f=G6(b);g=GF(b);while(true){if(d>=(a.W.data.length-1|0))return (-1);if(a.W.data[d]==f&&a.W.data[d+1|0]==g)break;d=d+1|0;}return d;}
function A_b(a,b){return a.e1(b,0);}
function A7Z(a,b,c){var d,e,f,g,h,i;d=BH(c,a.j()-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.W.data[d]==e)break;d=d+(-1)|0;}return d;}f=G6(b);g=GF(b);while(true){if(d<1)return (-1);if(a.W.data[d]==g){h=a.W.data;i=d-1|0;if(h[i]==f)break;}d=d+(-1)|0;}return i;}
function AU0(a,b){return a.nV(b,a.j()-1|0);}
function A$N(a,b,c){var d,e,f;d=Bm(0,c);e=a.j()-b.j()|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=b.j())break a;if(a.g(d+f|0)!=b.g(f))break;f=f+1|0;}d=d+1|0;}return d;}
function Bf4(a,b){return a.wW(b,0);}
function ASh(a,b,c){var d,e;d=BH(c,a.j()-b.j()|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.j())break a;if(a.g(d+e|0)!=b.g(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AUD(a,b){return a.Du(b,a.j());}
function ANY(a,b,c){if(b>c)G(DS());return HK(a.W,b,c-b|0);}
function AU6(a,b){return a.c0(b,a.j());}
function ASB(a,b,c){return a.c0(b,c);}
function A5L(a,b){var c,d,e;c=a.j()-b.j()|0;d=0;while(d<=c){e=0;while(true){if(e>=b.j())return 1;if(a.g(d+e|0)!=b.g(e))break;e=e+1|0;}d=d+1|0;}return 0;}
function Bhp(a,b,c){var d,e,f,g;d=H();e=a.j()-b.j()|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=b.j()){d.gL(c);f=f+(b.j()-1|0)|0;break a;}if(a.g(f+g|0)!=b.g(g))break;g=g+1|0;}d.bv(a.g(f));}f=f+1|0;}d.gL(a.fc(f));return d.d();}
function BcL(a){var b,c;b=0;c=a.j()-1|0;a:{while(b<=c){if(a.g(b)>32)break a;b=b+1|0;}}while(b<=c&&a.g(c)<=32){c=c+(-1)|0;}return a.c0(b,c+1|0);}
function AP$(a){return a;}
function Bco(a){var b,c,d;b=Ck(a.W.data.length);c=0;while(true){d=b.data;if(c>=d.length)break;d[c]=a.W.data[c];c=c+1|0;}return b;}
function AHv(b){var c,d;Fo();c=new B1;d=Ck(1);d.data[0]=b;KF(c,d);return c;}
function LE(b){Fo();return ((H()).t(b)).d();}
function A3r(a,b){var c,d;if(a===b)return 1;if(!(b instanceof B1))return 0;c=b;if(c.j()!=a.j())return 0;d=0;while(d<c.j()){if(a.g(d)!=c.g(d))return 0;d=d+1|0;}return 1;}
function Bku(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(a.j()!=b.j())return 0;c=0;while(c<a.j()){if(Ei(a.g(c))!=Ei(b.g(c)))return 0;c=c+1|0;}return 1;}
function AX9(a,b){return a.Eq(SO(b.d()));}
function Bfy(a,b){var c,d;c=ABp(b,N5(a.W));if(c.F0()&&!Cr(c)&&BQ(c)==DC(c))return JC(c);d=CE(Bj(c));c.Ns(d);return d;}
function BfE(a){var b,c,d,e;a:{if(!a.n6){b=a.W.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.n6=(31*a.n6|0)+e|0;d=d+1|0;}}}return a.n6;}
function BeP(a){var b,c,d,e,f,g,h,i;if(a.bW())return a;b=Bf(a.W.data.length);c=0;d=0;while(d<a.W.data.length){a:{if(d!=(a.W.data.length-1|0)&&Cn(a.W.data[d])){e=a.W.data;f=d+1|0;g=e[f];if(B8(g)){h=b.data;i=c+1|0;h[c]=Fp(D4(a.W.data[d],a.W.data[f]));d=f;break a;}}h=b.data;i=c+1|0;h[c]=EA(a.W.data[d]);}d=d+1|0;c=i;}return BtI(b,0,c);}
function Bc6(a,b){return ACY(GT(b),a.d());}
function A3i(a,b,c){return PD(GT(b),a.d(),c);}
function ASP(a,b,c){return AMf(GY(GT(b),a.d()),c);}
function A2Y(){Bz1=BrM();}
function GU(){Gb.call(this);this.Uq=null;}
function Pi(a){Ma(a);a.Uq=CE(1);}
var QG=D(GU);
var Bz4=null;function BdD(){BdD=M(QG);A5I();}
function Brb(){var a=new QG();YR(a);return a;}
function YR(a){BdD();Pi(a);}
function ASN(a,b,c,d){A2j(b,c,d);}
function A5I(){Bz4=Brb();}
function AGh(){var a=this;G2.call(a);a.C7=0;a.xa=0;a.vB=null;}
function Bsw(a,b,c,d,e,f){var g=new AGh();AUs(g,a,b,c,d,e,f);return g;}
function AUs(a,b,c,d,e,f,g){PW(a,c,e,f);a.xa=b;a.C7=g;a.vB=d;}
function BfC(a,b){return a.vB.data[b+a.xa|0];}
function BdA(a,b,c){a.vB.data[b+a.xa|0]=c;}
function ANh(a){return a.C7;}
var C4=D(Bc);
var Bz5=null;var Bz6=null;var Bz7=null;var Bz8=null;var Bz9=null;var Bz$=null;var Bz_=null;var BAa=null;var BAb=null;var BAc=null;var BAd=null;function BeB(){BeB=M(C4);AQA();}
function EJ(a,b){var c=new C4();AH$(c,a,b);return c;}
function My(){BeB();return BAd.e9();}
function AH$(a,b,c){BeB();B$(a,b,c);}
function AQA(){Bz5=EJ(B(319),0);Bz6=EJ(B(320),1);Bz7=EJ(B(321),2);Bz8=EJ(B(322),3);Bz9=EJ(B(323),4);Bz$=EJ(B(324),5);Bz_=EJ(B(325),6);BAa=EJ(B(326),7);BAb=EJ(B(327),8);BAc=EJ(B(328),9);BAd=J(C4,[Bz5,Bz6,Bz7,Bz8,Bz9,Bz$,Bz_,BAa,BAb,BAc]);}
var U0=D(Ea);
function BpA(a){var b=new U0();A1K(b,a);return b;}
function A1K(a,b){Iw(a,b,2.0,4.0);}
function AWo(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(h.ey(2))break a;Bz();i=Bvx;break a;}k=e.data;n=f+1|0;k[f]=(192|l>>6)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else if(!L0(l)){if((f+3|0)>g){j=j+(-1)|0;if(h.ey(3))break a;Bz();i=Bvx;break a;}k=e.data;o=f+1|0;k[f]=(224|l>>12)<<24>>24;n=o+1|0;k[o]=(128|l>>6&63)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else{if
(!Cn(l)){i=Cj(1);break a;}if(j>=d){if(h.v3())break a;Bz();i=Bvy;break a;}n=j+1|0;p=k[j];if(!B8(p)){j=n+(-2)|0;i=Cj(1);break a;}if((f+4|0)>g){j=n+(-2)|0;if(h.ey(4))break a;Bz();i=Bvx;break a;}k=e.data;q=D4(l,p);j=f+1|0;k[f]=(240|q>>18)<<24>>24;o=j+1|0;k[j]=(128|q>>12&63)<<24>>24;j=o+1|0;k[o]=(128|q>>6&63)<<24>>24;m=j+1|0;k[j]=(128|q&63)<<24>>24;j=n;}c=j;f=m;}j=c;}h.eF(j);h.d7(f);return i;}
var Lo=D();
function AFy(a){K(a);}
var JT=D(0);
function GI(){var a=this;Lo.call(a);a.vm=0;a.dt=null;a.GV=0.0;a.EP=0;a.mp=0;a.ne=0;a.Jv=0;}
var BAe=null;var BAf=null;function Z0(){Z0=M(GI);Blu();}
function BAg(){var a=new GI();JB(a);return a;}
function BAh(a){var b=new GI();PS(b,a);return b;}
function AKA(b,c,d){Z0();return BsG(b,c);}
function JB(a){Z0();PS(a,11);}
function PS(a,b){Z0();AFy(a);a.ne=(-1);if(b<0)G(DB());a.vm=0;if(!b)b=1;a.dt=Se(a,b);a.mp=a.dt.data.length;a.GV=0.75;PG(a);}
function Se(a,b){return Bb(P$,b);}
function PG(a){a.EP=a.dt.data.length*a.GV|0;}
function AHI(a,b){var c,d,e;CG(a);try{c=b.bl();d=(c&2147483647)%a.dt.data.length|0;e=a.dt.data[d];while(e!==null){if(e.FL(b,c))return e.gq;e=e.nu;}return null;}finally{Bx(a);}}
function AZL(a,b,c){var d,e,f,g,h,i,j;CG(a);try{if(b!==null&&c!==null){d=b.bl();e=d&2147483647;f=e%a.dt.data.length|0;g=a.dt.data[f];while(g!==null&&!g.FL(b,d)){g=g.nu;}if(g!==null){h=g.gq;g.gq=c;return h;}a.Jv=a.Jv+1|0;i=a.vm+1|0;a.vm=i;if(i>a.EP){a.qt();f=e%a.dt.data.length|0;}if(f<a.mp)a.mp=f;if(f>a.ne)a.ne=f;j=AKA(b,c,d);j.nu=a.dt.data[f];a.dt.data[f]=j;return null;}G(KX());}finally{Bx(a);}}
function AXh(a){var b,c,d,e,f,g,h,i,j;b=(a.dt.data.length<<1)+1|0;if(!b)b=1;c=(-1);d=Se(a,b);e=a.ne+1|0;f=b;while(true){e=e+(-1)|0;if(e<a.mp)break;g=a.dt.data[e];while(g!==null){h=(g.T3()&2147483647)%b|0;if(h<f)f=h;if(h>c)c=h;i=d.data;j=g.nu;g.nu=i[h];i[h]=g;g=j;}}a.mp=f;a.ne=c;a.dt=d;PG(a);}
function Blu(){BAe=BsW();BAf=Bog();}
function Zi(){GI.call(this);this.ul=null;}
function Bor(){var a=new Zi();AZe(a);return a;}
function Bov(a){var b=new Zi();AVh(b,a);return b;}
function AZe(a){JB(a);}
function AVh(a,b){JB(a);a.ul=b;}
function AYg(a,b){var c,d;c=AHI(a,b);d=!(c instanceof B1)?null:c;if(d===null&&a.ul!==null)d=a.ul.Hi(b);return d;}
function ALs(){var a=this;GV.call(a);a.GC=0;a.xS=0;a.wv=null;}
function Bok(a,b,c,d,e,f){var g=new ALs();A9u(g,a,b,c,d,e,f);return g;}
function A9u(a,b,c,d,e,f,g){NQ(a,c,e,f);a.xS=b;a.GC=g;a.wv=d;}
function AZS(a,b){return a.wv.data[b+a.xS|0];}
function AY1(a,b,c){a.wv.data[b+a.xS|0]=c;}
function Bf2(a){return a.GC;}
var AHT=D();
var V_=D();
var Eg=D(Cy);
var AIP=D(Eg);
function RV(){Be.call(this);this.jo=null;}
var BAi=null;function BaK(){BaK=M(RV);A5N();}
function BrW(a){var b=new RV();AGC(b,a);return b;}
function AGC(a,b){BaK();Cc(a);a.jo=B_(b*16|0);}
function A55(a,b,c,d,e){var f,g;f=0;while(f<a.jo.data.length){g=f/16|0;if(d.dW!==null&&g<d.dW.data.length&&d.dW.data[g]!==null)Bi(d.dW.data[g].a,0,a.jo,f,16);else{BaK();Bi(BAi.a,0,a.jo,f,16);}f=f+16|0;}b.bp.VY(Cp(b,c),a.jo,0,a.jo.data.length);}
function A5N(){BAi=BS();}
var Gw=D();
function M_(a){K(a);}
function Bju(a,b,c,d){var e,f,g,h;e=0;while(e<d){f=a.EL();if(f<0){if(!e)e=(-1);return e;}g=b.data;h=c+1|0;g[c]=f<<24>>24;e=e+1|0;c=h;}if(d<=0)d=(-1);return d;}
function Ba8(a){}
function ABx(){var a=this;Gw.call(a);a.ww=0;a.w6=null;}
function BtK(a){var b=new ABx();A8V(b,a);return b;}
function A8V(a,b){a.w6=b;M_(a);}
function BdP(a){var b,c;if(a.ww==JW(a.w6))return (-1);b=a.w6;c=a.ww;a.ww=c+1|0;return ZO(b,c)&255;}
function Gl(){var a=this;U.call(a);a.P5=0.0;a.KE=0.0;a.KT=0.0;a.SQ=0.0;}
function Bpo(a,b,c,d){var e=new Gl();NF(e,a,b,c,d);return e;}
function NF(a,b,c,d,e){Ci(a);a.P5=b;a.KE=c;a.KT=e;a.SQ=d*3.1415927410125732*(d%2|0?(-1):1);}
var Wu=D(Gl);
function BsA(a,b,c,d){var e=new Wu();AQ2(e,a,b,c,d);return e;}
function AQ2(a,b,c,d,e){NF(a,b,c,d,e);}
var EF=D(Bc);
var BAj=null;var BAk=null;var BAl=null;var BAm=null;var BAn=null;var BAo=null;function BtE(){BtE=M(EF);AZx();}
function Jx(a,b){var c=new EF();Zu(c,a,b);return c;}
function Zu(a,b,c){BtE();B$(a,b,c);}
function AZx(){BAj=Jx(B(329),0);BAk=Jx(B(214),1);BAl=Jx(B(330),2);BAm=Jx(B(331),3);BAn=Jx(B(332),4);BAo=J(EF,[BAj,BAk,BAl,BAm,BAn]);}
var Pe=D(DH);
var ByX=null;function Ne(){Ne=M(Pe);ASv();}
function BpW(){var a=new Pe();ABg(a);return a;}
function ABg(a){Ne();Iv(a,B(47),Bb(B1,0));}
function A1k(a){return Bpl(a);}
function A34(a){return BpA(a);}
function ASv(){ByX=BpW();}
var E$=D(0);
var Qt=D(0);
var Gt=D();
var BAp=null;var BAq=null;function BAr(){BAr=M(Gt);A_1();}
function A_1(){BAp=BN();BAq=BN();}
function ACo(){BL.call(this);this.iY=0;}
function BmI(a){var b=new ACo();Bmd(b,a);return b;}
function Bmd(a,b){CX(a);a.iY=b;}
function BbQ(a,b,c,d){var e,f,g;e=!d.ks()?c.j()-b|0:d.K()-b|0;if(!e){d.bH(a.iY,0);return a.k.e(b,c,d);}if(e<2){f=c.g(b);g=97;}else{f=c.g(b);g=c.g(b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:d.bH(a.iY,0);return a.k.e(b,c,d);case 13:if(g!=10){d.bH(a.iY,0);return a.k.e(b,c,d);}d.bH(a.iY,0);return a.k.e(b,c,d);default:}return (-1);}
function AQT(a,b){var c;c=!b.eN(a.iY)?0:1;b.bH(a.iY,(-1));return c;}
function ATA(a){return B(333);}
function F3(){C.call(this);this.L4=null;}
function Oc(a){ALK(a,M5());}
function ALK(a,b){K(a);a.L4=b;}
function X5(){var a=this;F3.call(a);a.nR=null;a.kv=null;a.gb=0;a.oD=0;a.wU=0;a.Cp=0;}
function Bo4(a,b){var c=new X5();A$I(c,a,b);return c;}
function A$I(a,b,c){Oc(a);a.Cp=(-1);if(c<0)G(DB());a.nR=b;a.kv=Ck(Bm(64,c));}
function AWv(a){RL(a);a.nR.gh();a.nR=null;}
function A5e(a){var b,c,d,e;RL(a);if(a.wU&&a.gb>=a.oD)return null;b=H();a:{while(true){if(a.gb>=a.oD&&!N1(a,0))break a;c=a.kv.data;d=a.gb;a.gb=d+1|0;e=c[d];if(e==10)break;if(e==13){if(a.gb>=a.oD&&!N1(a,0))break a;if(a.kv.data[a.gb]!=10)break a;a.gb=a.gb+1|0;break a;}b.bv(e);}}return b.d();}
function N1(a,b){var c;if(a.wU)return 0;a:{while(true){if(b>=a.kv.data.length)break a;c=a.nR.Ot(a.kv,b,a.kv.data.length-b|0);if(c==(-1)){a.wU=1;break a;}if(!c)break;b=b+c|0;}}a.oD=b;a.gb=0;a.Cp=(-1);return 1;}
function RL(a){if(a.nR!==null)return;G(BoU());}
var Yl=D(Ek);
var Iy=D(E2);
var LH=D(0);
var AF7=D();
var IC=D(BF);
var BAs=null;function Bl8(){Bl8=M(IC);Bby();}
function Bry(a){var b=new IC();AJZ(b,a);return b;}
function BAt(){var a=new IC();LU(a);return a;}
function AJZ(a,b){Bl8();BY(a);}
function LU(a){Bl8();BY(a);}
function A0d(a,b,c){var d,e,f;Ey();d=Byo;Es(c,d);e=Y(a.bb);f=Y((d.bX()));AFj(e,b,f);PN(d,c);}
function Bby(){BAs=Bry(0);}
function AFj(b,c,d){var jsObj=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.btBoxShape);var inertiaJSObj=$rt_globals.Bullet.wrapPointer(d,$rt_globals.Bullet.btVector3);jsObj.calculateLocalInertia(c,inertiaJSObj);}
var AHG=D();
var Tk=D(C8);
function UI(){var a=this;C.call(a);a.ed=null;a.h5=null;a.cw=null;a.cC=0;}
function Bof(){var a=new UI();A5s(a);return a;}
function A5s(a){K(a);a.cw=Dn();}
function ZA(){var a=this;C.call(a);a.f=null;a.kh=0;a.pS=null;a.Ga=null;a.pk=null;a.D5=null;a.l7=null;a.d6=null;a.Uh=0;a.Gk=0.0;}
function BqE(){var a=new ZA();AQo(a);return a;}
function BAu(a){var b=new ZA();AJx(b,a);return b;}
function BAv(a,b){var c=new ZA();AJr(c,a,b);return c;}
function AQo(a){AJx(a,5000);}
function AJx(a,b){AJr(a,b,null);}
function AJr(a,b,c){K(a);a.kh=0;a.pS=BS();a.Ga=BS();a.pk=BS();a.D5=BN();a.l7=CT(1.0,1.0,1.0,1.0);a.Gk=0.75;if(c!==null)a.f=Boi(b,0,1,0,c);else a.f=BnT(b,0,1,0);a.pS.EI(0.0,0.0,BwN.bk(),BwN.bh());a.kh=1;}
function AYl(a,b,c,d,e){a.l7.hc(b,c,d,e);}
function ASk(a,b){a.pS.b$(b);a.kh=1;}
function Blb(a,b){if(a.d6!==null)G(C5(B(334)));a.d6=b;if(a.kh){a.pk.b$(a.pS);Hu(a.pk.a,a.Ga.a);a.kh=0;}a.f.Wy(a.pk,SM(a.d6));}
function Qm(a,b,c){a.Pg(b.l,b.m,b.n,c.l,c.m,c.n,a.l7,a.l7);}
function Bla(a,b,c,d,e,f,g,h,i){var j;j=a.d6;KG();if(j===BAw){a.Kb(b,c,e,f,a.Gk,h,i);return;}HX(a,BAx,null,2);a.f.Cf(h.bz,h.by,h.bx,h.b2);a.f.s(b,c,d);a.f.Cf(i.bz,i.by,i.bx,i.b2);a.f.s(e,f,g);}
function A$C(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v;KG();HX(a,BAx,BAw,8);i=g.jw();j=h.jw();k=(a.D5.hM(e-c,b-d)).P4();l=f*0.5;m=k.c4*l;n=k.c3*l;if(a.d6!==BAx){a.f.u(i);a.f.s(b+m,c+n,0.0);a.f.u(i);o=a.f;l=b-m;p=c-n;o.s(l,p,0.0);a.f.u(j);o=a.f;q=d+m;r=e+n;o.s(q,r,0.0);a.f.u(j);a.f.s(d-m,e-n,0.0);a.f.u(j);a.f.s(q,r,0.0);a.f.u(i);a.f.s(l,p,0.0);}else{a.f.u(i);o=a.f;p=b+m;q=c+n;o.s(p,q,0.0);a.f.u(i);o=a.f;s=b-m;t=c-n;o.s(s,t,0.0);a.f.u(j);o=a.f;l=d+m;r=e+n;o.s(l,r,0.0);a.f.u(j);o=a.f;u=d-m;v=e-n;o.s(u,v,
0.0);a.f.u(j);a.f.s(l,r,0.0);a.f.u(i);a.f.s(p,q,0.0);a.f.u(j);a.f.s(u,v,0.0);a.f.u(i);a.f.s(s,t,0.0);}}
function A45(a,b,c,d,e,f,g){var h,i,j,k,l,m;h= -g;i=a.l7.jw();j=a.d6;KG();if(j===BAx){HX(a,BAx,BAw,24);a.f.u(i);a.f.s(b,c,d);a.f.u(i);k=a.f;l=b+e;k.s(l,c,d);a.f.u(i);a.f.s(l,c,d);a.f.u(i);k=a.f;h=d+h;k.s(l,c,h);a.f.u(i);a.f.s(l,c,h);a.f.u(i);a.f.s(b,c,h);a.f.u(i);a.f.s(b,c,h);a.f.u(i);a.f.s(b,c,d);a.f.u(i);a.f.s(b,c,d);a.f.u(i);k=a.f;m=c+f;k.s(b,m,d);a.f.u(i);a.f.s(b,m,d);a.f.u(i);a.f.s(l,m,d);a.f.u(i);a.f.s(l,m,d);a.f.u(i);a.f.s(l,m,h);a.f.u(i);a.f.s(l,m,h);a.f.u(i);a.f.s(b,m,h);a.f.u(i);a.f.s(b,m,h);a.f.u(i);a.f.s(b,
m,d);a.f.u(i);a.f.s(l,c,d);a.f.u(i);a.f.s(l,m,d);a.f.u(i);a.f.s(l,c,h);a.f.u(i);a.f.s(l,m,h);a.f.u(i);a.f.s(b,c,h);a.f.u(i);a.f.s(b,m,h);}else{HX(a,BAx,BAw,36);a.f.u(i);a.f.s(b,c,d);a.f.u(i);k=a.f;l=b+e;k.s(l,c,d);a.f.u(i);k=a.f;m=c+f;k.s(l,m,d);a.f.u(i);a.f.s(b,c,d);a.f.u(i);a.f.s(l,m,d);a.f.u(i);a.f.s(b,m,d);a.f.u(i);k=a.f;h=d+h;k.s(l,c,h);a.f.u(i);a.f.s(b,c,h);a.f.u(i);a.f.s(l,m,h);a.f.u(i);a.f.s(l,m,h);a.f.u(i);a.f.s(b,c,h);a.f.u(i);a.f.s(b,m,h);a.f.u(i);a.f.s(b,c,h);a.f.u(i);a.f.s(b,c,d);a.f.u(i);a.f.s(b,
m,d);a.f.u(i);a.f.s(b,c,h);a.f.u(i);a.f.s(b,m,d);a.f.u(i);a.f.s(b,m,h);a.f.u(i);a.f.s(l,c,d);a.f.u(i);a.f.s(l,c,h);a.f.u(i);a.f.s(l,m,h);a.f.u(i);a.f.s(l,c,d);a.f.u(i);a.f.s(l,m,h);a.f.u(i);a.f.s(l,m,d);a.f.u(i);a.f.s(b,m,d);a.f.u(i);a.f.s(l,m,d);a.f.u(i);a.f.s(l,m,h);a.f.u(i);a.f.s(b,m,d);a.f.u(i);a.f.s(l,m,h);a.f.u(i);a.f.s(b,m,h);a.f.u(i);a.f.s(b,c,h);a.f.u(i);a.f.s(l,c,h);a.f.u(i);a.f.s(l,c,d);a.f.u(i);a.f.s(b,c,h);a.f.u(i);a.f.s(l,c,d);a.f.u(i);a.f.s(b,c,d);}}
function HX(a,b,c,d){var e;if(a.d6===null)G(C5(B(335)));if(!(a.d6!==b&&a.d6!==c)){if(a.kh){e=a.d6;a.M();a.qf(e);}else if((a.f.on()-a.f.hC()|0)<d){e=a.d6;a.M();a.qf(e);}}else{if(!a.Uh){if(c===null)G(C5(((((H()).c(B(336))).gL(b)).c(B(337))).d()));G(C5(((((((H()).c(B(336))).gL(b)).c(B(338))).gL(c)).c(B(337))).d()));}a.M();a.qf(b);}}
function Bd5(a){a.f.M();a.d6=null;}
function AEd(){var a=this;C.call(a);a.d2=null;a.eQ=null;a.dF=null;a.yB=0;a.y6=0;a.Q1=0;a.vt=0;a.lO=0;a.qx=0;}
function BtR(a,b,c){var d=new AEd();AXM(d,a,b,c);return d;}
function AXM(a,b,c,d){K(a);a.lO=0;a.qx=0;a.Q1=b;a.d2=d;a.dF=P1(CJ(a.d2.cn,c));a.y6=1;a.vt=!b?35048:35044;a.eQ=a.dF.u6();a.yB=AMq(a);a.eQ.f_();a.dF.f_();}
function AMq(a){var b;b=BwS.jS();BwS.c7(34962,b);BwS.fl(34962,DC(a.dF),null,a.vt);BwS.c7(34962,0);return b;}
function A9d(a){return a.d2;}
function AQ_(a){return (BQ(a.eQ)*4|0)/a.d2.cn|0;}
function AUj(a){return DC(a.dF)/a.d2.cn|0;}
function AIA(a){if(a.qx){BwS.oj(34962,0,BQ(a.dF),a.dF);a.lO=0;}}
function APx(a,b,c,d){a.lO=1;if(a.y6){RM(b,a.dF,d,c);a.eQ.dI(0);a.eQ.dL(d);}else{a.eQ.d_();a.eQ.zo(b,c,d);a.eQ.f_();a.dF.dI(0);a.dF.dL(BQ(a.eQ)<<2);}AIA(a);}
function AYk(a,b,c){var d,e,f,g,h,i;d=BwS;d.c7(34962,a.yB);if(a.lO){a.dF.dL(BQ(a.eQ)*4|0);d.fl(34962,BQ(a.dF),a.dF,a.vt);a.lO=0;}a:{e=Dp(a.d2);if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data;h=CU(a.d2,f);i=g[f];if(i>=0){b.mW(i);b.nL(i,h.dm,h.fW,h.gf,a.d2.cn,h.cP);}f=f+1|0;}}f=0;while(f<e){h=CU(a.d2,f);i=b.mZ(h.eK);if(i>=0){b.mW(i);b.nL(i,h.dm,h.fW,h.gf,a.d2.cn,h.cP);}f=f+1|0;}}a.qx=1;}
function ASM(a,b,c){var d,e,f,g;a:{d=BwS;e=Dp(a.d2);if(c===null){f=0;while(f<e){b.E_((CU(a.d2,f)).eK);f=f+1|0;}}else{f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0)b.v9(g);f=f+1|0;}}}d.c7(34962,0);a.qx=0;}
var AH5=D();
var FW=D();
var IJ=D(BF);
var BAy=null;function AYa(){AYa=M(IJ);BbB();}
function Bsj(a){var b=new IJ();AGv(b,a);return b;}
function BAz(){var a=new IJ();KE(a);return a;}
function AGv(a,b){AYa();BY(a);}
function KE(a){AYa();BY(a);}
function BbB(){BAy=Bsj(0);}
var Z$=D();
function Uz(){CI.call(this);this.p7=null;}
function Bt2(a,b,c){var d=new Uz();A3$(d,a,b,c);return d;}
function A3$(a,b,c,d){Pl(a,c,d);a.p7=UU(a,b);if(a.p7!==null)return;G(UR((((H()).c(B(339))).c(b.v())).d()));}
function UU(a,b){var c,d,$$je;a:{try{c=AYu(b,null);}catch($$e){$$je=R($$e);if($$je instanceof Cs){break a;}else{throw $$e;}}return c;}b:{try{d=A$3(b,null);Zk(d,1);}catch($$e){$$je=R($$e);if($$je instanceof DI){break b;}else{throw $$e;}}return d;}return null;}
function BbG(a){var b,c,$$je;a:{try{b=AMY(a.p7,null);}catch($$e){$$je=R($$e);if($$je instanceof Cs){c=$$je;break a;}else{throw $$e;}}return b;}G(QW((((H()).c(B(340))).c((Hd(a.p7)).v())).d(),c));}
var IT=D();
var BAA=null;var BAB=null;var BAC=null;function BAD(){BAD=M(IT);BhZ();}
function BhZ(){BAA=By();BAB=S();BAC=AB4();}
function JA(){var a=this;C.call(a);a.rx=null;a.iI=0;a.h1=0;a.hB=0;a.cf=null;a.gt=null;a.hA=null;a.jI=0.0;}
var BAE=null;function BeC(){BeC=M(JA);AV4();}
function Bjh(){var a=new JA();AJT(a);return a;}
function BtB(a){var b=new JA();AGz(b,a);return b;}
function AJT(a){BeC();K(a);a.gt=S();a.hA=S();a.jI=(-1.0);}
function AGz(a,b){BeC();K(a);a.gt=S();a.hA=S();a.jI=(-1.0);a.F5(b);}
function Bes(a,b){a.rx=b.rx;a.cf=b.cf;a.h1=b.h1;a.hB=b.hB;a.iI=b.iI;a.gt.L(b.gt);a.hA.L(b.hA);a.jI=b.jI;return a;}
function AZr(a,b,c,d,e,f){a.rx=b;a.cf=c;a.h1=d;a.hB=e;a.iI=f;a.gt.I(0.0,0.0,0.0);a.hA.I(0.0,0.0,0.0);a.jI=(-1.0);return a;}
function ATC(a,b){var c;a:{b:{if(b!==a){if(b===null)break b;if(b.cf!==a.cf)break b;if(b.iI!=a.iI)break b;if(b.h1!=a.h1)break b;if(b.hB!=a.hB)break b;}c=1;break a;}c=0;}return c;}
function APb(a,b){if(b===null)return 0;if(b===a)return 1;if(!(b instanceof JA))return 0;return a.LL(b);}
function A7b(a,b,c){a.cf.wM(b,a.iI,a.h1,a.hB,c);}
function AV4(){BAE=AWU();}
var AJ8=D();
function Xg(b){a:{switch(b){case 8:break;case 9:return 61;case 10:case 11:case 12:case 14:case 15:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 41:case 42:case 43:case 44:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 93:case 94:case 95:case 108:case 124:case 125:case 126:case 127:case 128:case 129:case 130:case 131:case 132:case 133:case 134:case 135:case 136:case 137:case 138:case 139:case 140:case 141:case 142:case 143:case 146:case 147:case 148:case 149:case 150:case 151:case 152:case 153:case 154:case 155:case 156:case 157:case 158:case 159:case 160:case 161:case 162:case 163:case 164:case 165:case 166:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 177:case 178:case 179:case 180:case 181:case 182:case 183:case 184:case 185:case 193:case 194:case 195:case 196:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 207:case 208:case 209:case 210:case 211:case 212:case 213:case 214:case 215:case 216:case 217:case 218:break a;case 13:return 66;case 16:return 59;case 17:return 129;case 18:return 57;case 19:return 0;case 20:return 0;case 27:return 111;case 32:return 62;case 33:return 92;case 34:return 93;case 35:return 123;case 36:return 3;case 37:return 21;case 38:return 19;case 39:return 22;case 40:return 20;case 45:return 124;case 46:return 112;case 48:return 7;case 49:return 8;case 50:return 9;case 51:return 10;case 52:return 11;case 53:return 12;case 54:return 13;case 55:return 14;case 56:return 15;case 57:return 16;case 65:return 29;case 66:return 30;case 67:return 31;case 68:return 32;case 69:return 33;case 70:return 34;case 71:return 35;case 72:return 36;case 73:return 37;case 74:return 38;case 75:return 39;case 76:return 40;case 77:return 41;case 78:return 42;case 79:return 43;case 80:return 44;case 81:return 45;case 82:return 46;case 83:return 47;case 84:return 48;case 85:return 49;case 86:return 50;case 87:return 51;case 88:return 52;case 89:return 53;case 90:return 54;case 91:return 0;case 92:return 0;case 96:return 144;case 97:return 145;case 98:return 146;case 99:return 147;case 100:return 148;case 101:return 149;case 102:return 150;case 103:return 151;case 104:return 152;case 105:return 153;case 106:return 0;case 107:return 81;case 109:return 69;case 110:return 56;case 111:return 0;case 112:return 131;case 113:return 132;case 114:return 133;case 115:return 134;case 116:return 135;case 117:return 136;case 118:return 137;case 119:return 138;case 120:return 139;case 121:return 140;case 122:return 141;case 123:return 142;case 144:return 78;case 145:return 0;case 186:return 74;case 187:return 70;case 188:return 55;case 189:return 69;case 190:return 56;case 191:return 76;case 192:return 0;case 219:return 71;case 220:return 73;case 221:return 72;case 222:return 75;default:break a;}return 67;}return 0;}
function Kj(b){if(b==1)return 0;if(b==2)return 1;if(b!=4)return 0;return 2;}
var BM=D(Bc);
var BAF=null;var BAG=null;var BAH=null;var BAI=null;var BAJ=null;var BAK=null;var BAL=null;var BAM=null;var BAN=null;var BAO=null;function AD_(){AD_=M(BM);A7d();}
function DN(a,b,c){AD_();B$(a,b,c);}
function VG(){AD_();return J(BM,[BAF,BAG,BAH,BAI,BAJ,BAK,BAL,BAM,BAN]);}
function A7d(){BAF=BoV(B(341),0);BAG=Br4(B(342),1);BAH=Bs_(B(343),2);BAI=Bpq(B(344),3);BAJ=Bqz(B(345),4);BAK=Buc(B(346),5);BAL=Bn5(B(347),6);BAM=Bre(B(348),7);BAN=Btx(B(349),8);BAO=VG();}
var AKT=D(BM);
function Bre(a,b){var c=new AKT();AUT(c,a,b);return c;}
function AUT(a,b,c){DN(a,b,c);}
var JP=D(0);
var AKR=D(BM);
function Btx(a,b){var c=new AKR();A1x(c,a,b);return c;}
function A1x(a,b,c){DN(a,b,c);}
var KS=D(0);
var Pw=D(0);
var AKZ=D(BM);
function Buc(a,b){var c=new AKZ();AT8(c,a,b);return c;}
function AT8(a,b,c){DN(a,b,c);}
var AKS=D(BM);
function Bn5(a,b){var c=new AKS();Bl$(c,a,b);return c;}
function Bl$(a,b,c){DN(a,b,c);}
var ND=D(0);
var FF=D(Bc);
var BAP=null;var BAQ=null;var BAR=null;var BAS=null;function Bpn(){Bpn=M(FF);Bkg();}
function ADc(a,b){var c=new FF();Tv(c,a,b);return c;}
function Tv(a,b,c){Bpn();B$(a,b,c);}
function Bkg(){BAP=ADc(B(350),0);BAQ=ADc(B(351),1);BAR=ADc(B(352),2);BAS=J(FF,[BAP,BAQ,BAR]);}
var AKW=D(BM);
function BoV(a,b){var c=new AKW();A6a(c,a,b);return c;}
function A6a(a,b,c){DN(a,b,c);}
function Bky(a){return B(353);}
var AK2=D(BM);
function Bpq(a,b){var c=new AK2();A7M(c,a,b);return c;}
function A7M(a,b,c){DN(a,b,c);}
var AKY=D(BM);
function Bqz(a,b){var c=new AKY();A0V(c,a,b);return c;}
function A0V(a,b,c){DN(a,b,c);}
var AKX=D(BM);
function Br4(a,b){var c=new AKX();A2I(c,a,b);return c;}
function A2I(a,b,c){DN(a,b,c);}
var AK1=D(BM);
function Bs_(a,b){var c=new AK1();AWc(c,a,b);return c;}
function AWc(a,b,c){DN(a,b,c);}
var AGb=D();
function Lh(){return 1;}
function M$(){var a=this;C.call(a);a.x_=0;a.ue=0;a.uA=0;a.QV=null;a.S6=null;a.fO=null;a.JJ=B(354);}
function BAT(a,b,c,d){var e=new M$();Xc(e,a,b,c,d);return e;}
function Xc(a,b,c,d,e){var f;K(a);a.JJ=B(354);KA();if(b===Bwn){Fi();a.fO=BAU;}else if(b===Bws){Fi();a.fO=BAU;}else if(b===Bwo){Fi();a.fO=BAV;}else if(b===Bwq){Fi();a.fO=BAV;}else if(b!==Bwr){Fi();a.fO=BAW;}else{Fi();a.fO=BAX;}f=a.fO;Fi();if(f===BAU)Li(a,B(355),c);else if(a.fO===BAX)Li(a,B(356),c);else if(a.fO===BAV)Li(a,B(357),c);else{a.x_=(-1);a.ue=(-1);a.uA=(-1);d=B(49);e=B(49);}a.QV=d;a.S6=e;}
function Li(a,b,c){var d,e,f,g,h,i,j;d=GT(b);e=GY(d,c);f=F$(e);if(!f){BvC.xD(B(354),(((H()).c(B(358))).c(c)).d());a.x_=2;a.ue=0;a.uA=0;}else{g=Gi(e,1);h=g.x8(B(359));i=h.data;a.x_=La(a,i[0],2);j=i.length;a.ue=j<2?0:La(a,i[1],0);a.uA=j<3?0:La(a,i[2],0);}}
function La(a,b,c){var d,$$je;a:{try{d=Cg(b);}catch($$e){$$je=R($$e);if($$je instanceof CD){break a;}else{throw $$e;}}return d;}BvC.oy(B(360),(((((H()).c(B(361))).c(b)).c(B(362))).t(c)).d());return c;}
function LM(){var a=this;C.call(a);a.qD=0;a.pu=0;a.Op=0;a.TP=0;}
function BAY(a,b,c,d){var e=new LM();ZF(e,a,b,c,d);return e;}
function ZF(a,b,c,d,e){K(a);a.qD=b;a.pu=c;a.Op=d;a.TP=e;}
var AGx=D(Bs);
function HJ(){var a=new AGx();Bag(a);return a;}
function Bag(a){CY(a);}
var Ix=D(Dx);
function TT(a,b,c,d){Hj(a,b);a.D=c;a.bd=d;}
function ASU(b,c,d){return Bsy(0,b.data.length,b,c,c+d|0,0);}
function Bef(b){return ASU(b,0,b.data.length);}
function Bi2(a,b,c,d){var e,f,g,h,i,j,k,l;if(a.ck())G(DR());if(Bj(a)<d)G(HJ());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BC;i=H();V(I(V(I(i,B(363)),g),B(283)),f);BO(h,P(i));G(h);}if(d<0){i=new BC;h=H();I(V(I(h,B(284)),d),B(285));BO(i,P(h));G(i);}j=a.D;k=0;while(k<d){g=j+1|0;l=c+1|0;a.sV(j,e[c]);k=k+1|0;j=g;c=l;}a.D=a.D+d|0;return a;}}e=b.data;i=new BC;f=e.length;h=H();Bp(V(I(V(I(h,B(286)),c),B(57)),f),41);BO(i,P(h));G(i);}
function OZ(a){HI(a);return a;}
function IX(a){I0(a);return a;}
function A0E(a,b){Lj(a,b);return a;}
function Bh4(a,b){Iz(a,b);return a;}
function Bi$(a){return IX(a);}
function A47(a){return OZ(a);}
function BdS(a,b){return a.Mu(b);}
function A62(a,b){return a.L$(b);}
var AKI=D(Ef);
var ABr=D(Ba);
function Btm(){var a=new ABr();AWC(a);return a;}
function AWC(a){BG(a);}
function Bc3(a){var b;b=Bp3(a);b.bm=1;return b;}
function PE(){var a=this;C.call(a);a.v5=0;a.Bc=0;a.F1=null;}
function AS1(a,b,c){var d=new PE();A1V(d,a,b,c);return d;}
function A1V(a,b,c,d){K(a);a.v5=b;a.Bc=c;a.F1=d;}
var E8=D();
var BAZ=null;var BA0=null;function MY(a){K(a);}
function P5(b){if(!(b&1)){if(BA0!==null)return BA0;BA0=Bts();return BA0;}if(BAZ!==null)return BAZ;BAZ=BsP();return BAZ;}
var AKb=D(E8);
function Bts(){var a=new AKb();AUi(a);return a;}
function AUi(a){MY(a);}
function Bin(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function A4d(a,b,c){var d;a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}d=1;break a;}d=0;}return d;}
var AKa=D(E8);
function BsP(){var a=new AKa();A8b(a);return a;}
function A8b(a){MY(a);}
function AQm(a,b){return b!=10?0:1;}
function A0y(a,b,c){return b!=10?0:1;}
var AGE=D(Hw);
var AB8=D(Ba);
function Bs1(){var a=new AB8();Bbk(a);return a;}
function Bbk(a){BG(a);}
function BhM(a){var b;b=Br5(a);b.bm=1;return b;}
var Fq=D();
var BA1=null;function AUq(){AUq=M(Fq);A8d();}
function LS(a){AUq();K(a);}
function Pp(){AUq();if(BA1===null)BA1=BoP();return BA1;}
function A8d(){BA1=null;}
function OL(){Fq.call(this);this.jr=null;}
var BA2=0;function BoC(){BoC=M(OL);A_$();}
function AWr(a){var b=new OL();ADl(b,a);return b;}
function ADl(a,b){BoC();LS(a);a.jr=b;}
function OS(a,b){var c,d,e,f,g,$$je;c=a.jr;d=b.gx();e=H();I(I(e,B(364)),d);f=c.np(P(e));a:{try{c=P3(AGY(f));}catch($$e){$$je=R($$e);if($$je instanceof Bs){g=$$je;break a;}else{throw $$e;}}return c;}c=a.jr;d=b.gx();e=H();I(I(e,B(364)),d);c.DS(P(e));G(g);}
function RJ(a,b){var c,d,e,f;a:{c=a.jr;d=b.gx();e=H();I(I(e,B(365)),d);if(c.np(P(e))===null){c=a.jr;d=b.gx();e=H();I(I(e,B(364)),d);if(c.np(P(e))===null){f=0;break a;}}f=1;}return f;}
function Nr(a,b){var c,d,e,f;c=a.jr;d=b.gx();e=H();I(I(e,B(364)),d);f=c.np(P(e));if(f===null)return W;return N(f.j()/2|0);}
function A_$(){BA2=B(364).j();}
var Ke=D(CW);
function Zv(){var a=this;C.call(a);a.EV=null;a.Gp=0;}
function A04(a){var b=new Zv();A$w(b,a);return b;}
function A$w(a,b){K(a);a.EV=b;}
function Ep(){var a=this;Ca.call(a);a.g7=null;a.Bz=0;}
function A2p(a){var b=new Ep();AZY(b,a);return b;}
function AZY(a,b){DK(a);a.g7=b.nl();a.Bz=b.bL;}
function A5O(a,b,c){return !a.g7.r(c.g(b))?(-1):1;}
function AWh(a){var b,c,d;b=!a.Bz?B(39):B(40);c=a.g7.d();d=H();I(I(I(d,B(41)),b),c);return P(d);}
function AZn(a,b){if(b instanceof Ev)return Lf(a.g7,b.ra());if(b instanceof Ep)return IK(a.g7,b.g7);if(b instanceof DL)return IK(a.g7,b.xf());if(!(b instanceof En))return 1;return 0;}
function Bf3(a){return a.g7;}
function OK(){var a=this;C.call(a);a.uX=null;a.m3=null;a.dR=0;a.n4=null;a.Dz=0.0;a.Et=0.0;a.gc=0;a.Ie=null;a.pt=null;a.rB=null;a.xk=0;a.uw=0;a.zK=0;a.FV=0;a.ym=0;a.i4=null;a.gY=null;a.Q4=0;a.Ub=null;a.Wo=0.0;a.oN=0;a.te=0;a.xM=0;}
var BA3=null;function ZX(){ZX=M(OK);Bew();}
function Bqs(){var a=new OK();AK0(a);return a;}
function BA4(a,b){var c=new OK();MT(c,a,b);return c;}
function AK0(a){ZX();MT(a,1000,null);}
function MT(a,b,c){var d,e,f,g,h,i,j,k,l,m;ZX();K(a);a.dR=0;a.n4=null;a.Dz=0.0;a.Et=0.0;a.gc=0;a.Ie=BS();a.pt=BS();a.rB=BS();a.xk=0;a.uw=770;a.zK=771;a.FV=770;a.ym=771;a.gY=null;a.Ub=CT(1.0,1.0,1.0,1.0);a.Wo=By9;a.oN=0;a.te=0;a.xM=0;if(b>8191)G(Bl((((H()).c(B(366))).t(b)).d()));if(BwT===null)d=BA3;else{Qo();d=BA5;}e=new JS;f=b*4|0;g=b*6|0;Qs(e,d,0,f,g,J(Fv,[DP(1,2,B(367)),DP(4,4,B(368)),DP(16,2,B(369))]));a.uX=e;a.pt.EI(0.0,0.0,BwN.bk(),BwN.bh());a.m3=B_(b*20|0);h=Qe(g);i=0;j=0;while(j<g){k=h.data;k[j]=i;k[j
+1|0]=(i+1|0)<<16>>16;l=j+2|0;m=(i+2|0)<<16>>16;k[l]=m;k[j+3|0]=m;k[j+4|0]=(i+3|0)<<16>>16;k[j+5|0]=i;j=j+6|0;i=(i+4|0)<<16>>16;}a.uX.Tv(h);if(c!==null)a.i4=c;else{a.i4=YX();a.Q4=1;}}
function YX(){var b,c,d;ZX();b=B(370);c=B(371);d=VP(b,c);if(d.po())return d;G(Bl((((H()).c(B(372))).c(d.oO())).d()));}
function Ba2(a){if(a.gc)G(C5(B(373)));a.oN=0;BwR.jD(0);if(a.gY===null)a.i4.d9();else a.gY.d9();a.Dk();a.gc=1;}
function A1T(a){var b;if(!a.gc)G(C5(B(374)));if(a.dR>0)a.dC();a.n4=null;a.gc=0;b=BwR;b.jD(1);if(a.Oi())b.dU(3042);}
function AVM(a,b,c,d,e){var f,g,h;if(!a.gc)G(C5(B(375)));f=a.m3.data.length;if(b!==a.n4){a.Pi(b);g=f;}else{g=f-a.dR|0;if(!g){a.dC();g=f;}}h=BH(g,e);Bi(c,d,a.m3,a.dR,h);a.dR=a.dR+h|0;g=e-h|0;while(g>0){d=d+h|0;a.dC();h=BH(f,g);Bi(c,d,a.m3,0,h);a.dR=a.dR+h|0;g=g-h|0;}}
function AU8(a){var b,c,d;if(!a.dR)return;a.oN=a.oN+1|0;a.te=a.te+1|0;b=a.dR/20|0;if(b>a.xM)a.xM=b;c=b*6|0;a.n4.d9();d=a.uX;d.yc(a.m3,0,a.dR);(d.DU()).dI(0);(d.DU()).dL(c);if(a.xk)BwR.dU(3042);else{BwR.m$(3042);if(a.uw!=(-1))BwR.Ch(a.uw,a.zK,a.FV,a.ym);}d.Tx(a.gY===null?a.i4:a.gY,4,0,c);a.dR=0;}
function ATE(a,b){if(a.gc)a.dC();a.pt.b$(b);if(a.gc)a.Dk();}
function ARV(a){(a.rB.b$(a.pt)).ii(a.Ie);if(a.gY===null){a.i4.xT(B(376),a.rB);a.i4.t3(B(377),0);}else{a.gY.xT(B(376),a.rB);a.gY.t3(B(377),0);}}
function BfW(a,b){a.dC();a.n4=b;a.Dz=1.0/b.bk();a.Et=1.0/b.bh();}
function AOb(a){return a.xk?0:1;}
function Bew(){Qo();BA3=BA6;}
var Pk=D();
var BA7=null;function Bsz(){Bsz=M(Pk);BhR();}
function BhR(){BA7=Bf((ABq()).data.length);BA7.data[Br(BA8)]=1;BA7.data[Br(BA9)]=2;BA7.data[Br(BA5)]=3;BA7.data[Br(BA6)]=4;}
function HW(){BF.call(this);this.Fq=null;}
var BA$=null;function AVP(){AVP=M(HW);APv();}
function BnB(a){var b=new HW();AJR(b,a);return b;}
function BA_(){var a=new HW();LN(a);return a;}
function A0t(a,b){a.Fq=b;}
function BeA(a,b){var c,d;c=Y(a.bb);d=b===null?0:Y((b.bX()));Zm(c,d);}
function Bfr(a){var b;b=N(WR(Y(a.bb)));if(Z(b,W))return null;return a.Fq.m7.QI(b);}
function Bf5(a,b){AL1(Y(a.bb),b);}
function A9K(a){return YD(Y(a.bb))?1:0;}
function AJR(a,b){AVP();BY(a);}
function LN(a){AVP();BY(a);}
function APv(){BA$=BnB(0);}
function Zm(b,c){var jsObj=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.RayResultCallback);if(c==0){jsObj.set_m_collisionObject(0);}else {var jsColObj=$rt_globals.Bullet.wrapPointer(c,$rt_globals.Bullet.btCollisionObject);jsObj.set_m_collisionObject(jsColObj);}}
function WR(b){var jsObj=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.RayResultCallback);return $rt_globals.Bullet.getPointer(jsObj.get_m_collisionObject());}
function AL1(b,c){var jsObj=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.RayResultCallback);jsObj.set_m_closestHitFraction(c);}
function YD(b){var jsObj=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.RayResultCallback);return jsObj.hasHit();}
var Pt=D(HW);
var BBa=null;function A9I(){A9I=M(Pt);AVj();}
function BrF(a,b){var c=new Pt();AD8(c,a,b);return c;}
function BtV(a){var b=new Pt();S7(b,a);return b;}
function Sx(a,b,c){var d,e,f,g;d=BnC(a);e=Y((b.bX()));f=Y((c.bX()));g=Uu(e,f,BZ(d,"addSingleResultJS"));a.dc(N(g),1);}
function AD8(a,b,c){var d,e;A9I();LN(a);Ey();d=Byo;e=Byp;Es(b,d);Es(c,e);Sx(a,d,e);}
function A7S(a,b,c){var d,e;d=Y(a.bb);e=Y((b.bX()));return AAX(d,e,!!c);}
function S7(a,b){A9I();LN(a);}
function AVj(){BBa=BtV(0);}
function Uu(b,c,d){var callback=new $rt_globals.Bullet.MyClosestRayResultCallback(b,c);callback.addSingleResult=d;return $rt_globals.Bullet.getPointer(callback);}
function AAX(b,c,d){var jsObj=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.MyClosestRayResultCallback);return jsObj.addSingleResultSuper(c,d);}
var AFf=D(Dr);
var RI=D(0);
function O8(){var a=this;C.call(a);a.kw=null;a.fj=null;a.AD=null;a.OM=null;a.eU=null;a.TB=null;}
var BBb=0;function ACN(){ACN=M(O8);A$J();}
function BtA(a){var b=new O8();AM0(b,a);return b;}
function BBc(a,b){var c=new O8();MO(c,a,b);return c;}
function BBd(a,b,c){var d=new O8();QO(d,a,b,c);return d;}
function AM0(a,b){ACN();MO(a,b,null);}
function MO(a,b,c){ACN();QO(a,b,null,c);}
function QO(a,b,c,d){ACN();K(a);a.kw=By();a.fj=By();a.AD=By();a.OM=b;if(c===null)c=BS();a.eU=c;if(d!==null)Ti(a,b.kW,d);else Wb(a,b.kW);a.Lk(b.D6,BBb);a.Wg();}
function Wb(a,b){var c,d,e;c=0;d=b.h;while(c<d){e=b.p(c);a.fj.C(e.xG());c=c+1|0;}RN(a);}
function Ti(a,b,c){var d,e,f,g,h,i,j;d=0;e=b.h;while(d<e){f=c.data;g=b.p(d);h=f.length;i=0;a:{while(true){if(i>=h)break a;j=f[i];if(j.y(g.gQ))break;i=i+1|0;}a.fj.C(g.xG());}d=d+1|0;}RN(a);}
function R0(a,b){var c,d,e,f,g,h,i,j;c=0;d=b.eq.h;while(c<d){a:{e=b.eq.p(c);f=e.cR;if(f!==null){g=0;while(true){if(g>=f.cm)break a;f.eI.data[g]=a.BK(f.eI.data[g].gQ);g=g+1|0;}}}if(!a.kw.jd(e.ec,1)){h=a.kw.P_(e.ec,0);if(h>=0)e.ec=a.kw.p(h);else{i=a.kw;j=e.ec.NV();e.ec=j;i.C(j);}}c=c+1|0;}c=0;d=b.Nq();while(c<d){R0(a,b.WA(c));c=c+1|0;}}
function RN(a){var b,c;b=0;c=a.fj.h;while(b<c){R0(a,a.fj.p(b));b=b+1|0;}}
function AXm(a,b,c){var d,e;d=b.fI();while(d.bE()){e=d.bA();a.LK(e,c);}}
function APt(a,b,c){var d,e,f,g,h,i,j;d=BtS();d.HB=b.HB;d.y_=b.y_;e=b.oc.b3();while(e.bE()){f=e.bA();g=a.BK(f.B7.gQ);if(g===null)continue;a:{h=Bs8();h.B7=g;if(c){h.ha=f.ha;h.gS=f.gS;h.gi=f.gi;}else{b:{if(f.ha!==null){h.ha=By();i=f.ha.b3();while(true){if(!i.bE())break b;j=i.bA();h.ha.C(WD(j.oP,j.p1));}}}c:{if(f.gS!==null){h.gS=By();i=f.gS.b3();while(true){if(!i.bE())break c;j=i.bA();h.gS.C(WD(j.oP,j.p1));}}}if(f.gi!==null){h.gi=By();i=f.gi.b3();while(true){if(!i.bE())break a;j=i.bA();h.gi.C(WD(j.oP,j.p1));}}}}if
(!(h.ha===null&&h.gS===null&&h.gi===null))d.oc.C(h);}if(d.oc.h>0)a.AD.C(d);}
function AZ6(a,b,c){var d,e;d=a.fj.b3();while(d.bE()){e=d.bA();a.Do(e,b,c);}}
function BkS(a,b,c,d){d.Nj(b);if(d.dO===null&&a.eU!==null)(b.dN.b$(a.eU)).ii(c.f8);else if(a.eU===null)b.dN.fP();else b.dN.b$(a.eU);b.Fl=a.TB;return b;}
function AYn(a,b,c,d){var e,f,g,h;a:{if(b.eq.h>0){e=b.eq.b3();while(true){if(!e.bE())break a;f=e.bA();if(f.mx)c.C(a.Oa(d.g1(),b,f));}}}g=(b.tH()).fI();while(g.bE()){h=g.bA();a.Do(h,c,d);}}
function ANi(a){var b,c;b=a.fj.h;c=0;while(c<b){(a.fj.p(c)).GY(1);c=c+1|0;}c=0;while(c<b){(a.fj.p(c)).B9(1);c=c+1|0;}}
function AM7(a,b){return a.T$(b,1);}
function AXI(a,b,c){return a.VF(b,c,0);}
function A$Z(a,b,c,d){return AH7(a.fj,b,c,d);}
function A$J(){BBb=1;}
function Uw(){var a=this;X.call(a);a.wT=0;a.yD=0;a.ri=0;a.tv=0;a.fp=0;a.iF=0;a.be=null;a.bM=null;}
function Dv(){var a=new Uw();A5k(a);return a;}
function BtL(a,b){var c=new Uw();UF(c,a,b);return c;}
function Btr(a,b,c){var d=new Uw();A6N(d,a,b,c);return d;}
function A5k(a){Bo(a);a.be=Bmn();}
function UF(a,b,c){Bo(a);a.be=Bmn();a.wT=b;a.yD=c;}
function A6N(a,b,c,d){UF(a,c,d);a.gA(b);}
function AM5(a,b){a:{if(a.wT){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.fp){a.be.t8(Iu(b&65535));break a;}a.be.u8(Iu(b&65535));break a;}if(a.yD&&b>128){a.ri=1;b=Gg(Fp(b));}}}if(!(!NS(b)&&!MV(b))){if(a.tv)a.bO.t8(b-55296|0);else a.bO.u8(b-55296|0);}if(a.fp)a.be.t8(b);else a.be.u8(b);if(!a.bm&&Kr(b))a.bm=1;return a;}
function Bmc(a,b){var c,d;if(!a.bm&&b.bm)a.bm=1;if(a.tv){if(!b.ce)a.bO.jv(b.cs());else a.bO.dZ(b.cs());}else if(!b.ce)a.bO.jB(b.cs());else{a.bO.jV(b.cs());a.bO.dZ(b.cs());a.ce=a.ce?0:1;a.tv=1;}if(!a.iF&&b.bV()!==null){if(a.fp){if(!b.kz())a.be.jv(b.bV());else a.be.dZ(b.bV());}else if(!b.kz())a.be.jB(b.bV());else{a.be.jV(b.bV());a.be.dZ(b.bV());a.bL=a.bL?0:1;a.fp=1;}}else{c=a.bL;if(a.bM!==null){d=a.bM;if(!c)a.bM=BtD(a,c,d,b);else a.bM=Bqe(a,c,d,b);}else{if(c&&!a.fp&&a.be.bW())a.bM=BnD(a,b);else if(!c)a.bM=Bqi(a,
c,b);else a.bM=Bno(a,c,b);a.iF=1;}}return a;}
function BjD(a,b,c){if(b>c)G(DB());a:{b:{if(!a.wT){if(c<55296)break b;if(b>57343)break b;}while(true){if(b>=(c+1|0))break a;a.cO(b);b=b+1|0;}}if(a.fp)a.be.Us(b,c+1|0);else a.be.fK(b,c+1|0);}return a;}
function A6d(a,b){var c,d;if(!a.bm&&b.bm)a.bm=1;if(b.hI())a.ri=1;if(!(a.ce^b.ce)){if(!a.ce)a.bO.jB(b.cs());else a.bO.dZ(b.cs());}else if(a.ce)a.bO.jv(b.cs());else{a.bO.jV(b.cs());a.bO.dZ(b.cs());a.ce=1;}if(!a.iF&&b.bV()!==null){if(!(a.bL^b.kz())){if(!a.bL)a.be.jB(b.bV());else a.be.dZ(b.bV());}else if(a.bL)a.be.jv(b.bV());else{a.be.jV(b.bV());a.be.dZ(b.bV());a.bL=1;}}else{c=a.bL;if(a.bM!==null){d=a.bM;if(!c)a.bM=BpD(a,c,d,b);else a.bM=Bue(a,c,d,b);}else{if(!a.fp&&a.be.bW()){if(!c)a.bM=Bny(a,b);else a.bM=BtQ(a,
b);}else if(!c)a.bM=Bq0(a,b,c);else a.bM=BmO(a,b,c);a.iF=1;}}}
function A3b(a,b){var c,d;if(!a.bm&&b.bm)a.bm=1;if(b.hI())a.ri=1;if(!(a.ce^b.ce)){if(!a.ce)a.bO.dZ(b.cs());else a.bO.jB(b.cs());}else if(!a.ce)a.bO.jv(b.cs());else{a.bO.jV(b.cs());a.bO.dZ(b.cs());a.ce=0;}if(!a.iF&&b.bV()!==null){if(!(a.bL^b.kz())){if(!a.bL)a.be.dZ(b.bV());else a.be.jB(b.bV());}else if(!a.bL)a.be.jv(b.bV());else{a.be.jV(b.bV());a.be.dZ(b.bV());a.bL=0;}}else{c=a.bL;if(a.bM!==null){d=a.bM;if(!c)a.bM=Bt_(a,c,d,b);else a.bM=Bpv(a,c,d,b);}else{if(!a.fp&&a.be.bW()){if(!c)a.bM=Bsq(a,b);else a.bM=BsJ(a,
b);}else if(!c)a.bM=Bm0(a,b,c);else a.bM=Bt$(a,b,c);a.iF=1;}}}
function AQM(a,b){if(a.bM!==null)return a.bL^a.bM.r(b);return a.bL^a.be.e5(b);}
function A5v(a){if(!a.iF)return a.be;return null;}
function A_m(a){return a.bO;}
function A2E(a){var b,c;if(a.bM!==null)return a;b=a.bV();c=Brr(a,b);return c.gA(a.kz());}
function Be7(a){var b,c;b=H();c=a.be.me(0);while(c>=0){b.sY(FJ(c));b.bv(124);c=a.be.me(c+1|0);}if(b.j()>0)b.IW(b.j()-1|0);return b.d();}
function ASY(a){return a.ri;}
var ALh=D(Bs);
function ABh(){var a=new ALh();A3F(a);return a;}
function A3F(a){CY(a);}
var Sa=D(0);
var G1=D();
function BBe(){var a=new G1();Zq(a);return a;}
function Zq(a){K(a);}
function AR4(a,b,c,d,e){return 0;}
function AYD(a){}
function AHU(){var a=this;G1.call(a);a.zM=null;a.s2=0.0;}
function Bs3(){var a=new AHU();AVd(a);return a;}
function AVd(a){Zq(a);}
function Bb2(a,b,c,d,e){a.s2=0.0;return 0;}
function ASj(a,b,c,d,e){return 0;}
function BhP(a,b,c){return 0;}
function Bgz(a,b,c,d){return 0;}
function BcJ(a,b,c,d,e){return 0;}
function Bkf(a,b,c){var d,e,f,g,h;d=c-b;e=d-a.s2;a.s2=d;f=BwN.bk();g=BwN.bh();h=a.zM;if(f>g)f=g;return h.SG(e/f);}
function A$D(a,b,c,d,e){return 0;}
var Ha=D(Cw);
var Tt=D(F8);
function Btj(a,b,c,d,e,f){var g=new Tt();Beq(g,a,b,c,d,e,f);return g;}
function Beq(a,b,c,d,e,f,g){OX(a,b,c,d,e,f,g);}
function AWK(a,b){var c,d,e,f;c=a.cE.B.data;d=a.ct;e=b*4|0;f=(c[d+e|0]&255)<<24|(a.cE.B.data[(a.ct+e|0)+1|0]&255)<<16|(a.cE.B.data[(a.ct+e|0)+2|0]&255)<<8|a.cE.B.data[(a.ct+e|0)+3|0]&255;return $rt_intBitsToFloat(f);}
function Bg1(a,b,c){var d,e,f,g;d=$rt_floatToIntBits(c);e=a.cE.B.data;f=a.ct;g=b*4|0;e[f+g|0]=d>>24<<24>>24;a.cE.B.data[(a.ct+g|0)+1|0]=d>>16<<24>>24;a.cE.B.data[(a.ct+g|0)+2|0]=d>>8<<24>>24;a.cE.B.data[(a.ct+g|0)+3|0]=d<<24>>24;}
var AIJ=D();
var ACD=D();
var LW=D(CW);
var ALY=D(LW);
var PI=D(0);
function I5(){var a=this;C.call(a);a.hX=null;a.nj=null;a.f9=null;a.bC=null;a.rf=null;a.q5=null;a.sh=null;a.bp=null;a.c$=null;a.c6=null;a.fu=null;a.iE=null;a.lC=null;}
function AKo(a){K(a);a.hX=By();a.nj=By();a.f9=By();a.rf=I2();a.q5=I2();a.sh=BnJ();a.iE=I2();a.lC=A4Q();}
function ANK(a,b,c,d){var e;if(a.bC!==null)G(Bh(B(378)));e=a.T1(b);if(e>=0){a.nj.l3(e,c);a.f9.l3(e,d);return e;}a.hX.C(b);a.nj.C(c);a.f9.C(d);return a.hX.h-1|0;}
function Bl1(a,b,c){return a.NM(b.yS,b,c);}
function A3G(a,b){return a.bn(b,null);}
function ASo(a,b){var c,d;c=a.hX.h;d=0;while(true){if(d>=c)return (-1);if((a.hX.p(d)).y(b))break;d=d+1|0;}return d;}
function A_g(a,b,c){var d,e,f,g,h,i,j,k,l;if(a.bC!==null)G(Bh(B(379)));if(!b.po())G(Bh(b.oO()));a.bp=b;d=a.hX.h;a.bC=Bf(d);e=0;while(e<d){f=a.hX.p(e);g=a.nj.p(e);h=a.f9.p(e);if(g!==null&&!g.Rl(a,e,c))a.bC.data[e]=(-1);else{a.bC.data[e]=b.Eh(f,0);if(a.bC.data[e]>=0&&h!==null){if(!h.A0(a,e))a.q5.em(e);else a.rf.em(e);}}if(a.bC.data[e]<0){a.nj.l3(e,null);a.f9.l3(e,null);}e=e+1|0;}a:{if(c!==null){i=c.c1.cf.fq();j=Dp(i);e=0;while(true){if(e>=j)break a;k=CU(i,e);l=b.mZ(k.eK);if(l>=0)a.sh.pV(K8(k),l);e=e+1|0;}}}}
function AFz(a,b,c){var d,e,f;a.c6=b;a.c$=c;a.bp.d9();a.fu=null;d=0;while(d<a.rf.G){e=a.f9;f=a.rf.bG(d);if(e.p(f)!==null)(a.f9.p(f)).bo(a,f,null,null);d=d+1|0;}}
function AD5(a,b){var c,d;a.iE.J();c=Dp(b);d=0;while(d<c){a.iE.em(a.sh.PQ(K8(CU(b,d)),(-1)));d=d+1|0;}a.iE.LO();return a.iE.b8;}
function BaB(a,b){if(b.dN.V3()===0.0)return;a.lC.J();if(b.cD!==null)HR(a.lC,b.cD);if(b.dn!==null)HR(a.lC,b.dn);a.Cd(b,a.lC);}
function ACn(a,b,c){var d,e,f;d=0;while(d<a.q5.G){e=a.f9;f=a.q5.bG(d);if(e.p(f)!==null)(a.f9.p(f)).bo(a,f,b,c);d=d+1|0;}if(a.fu!==b.c1.cf){if(a.fu!==null)a.fu.hl(a.bp,a.iE.b8);a.fu=b.c1.cf;a.fu.i0(a.bp,AD5(a,b.c1.cf.fq()));}b.c1.Ol(a.bp,0);}
function ADW(a){if(a.fu!==null){a.fu.hl(a.bp,a.iE.b8);a.fu=null;}}
function Kk(a,b){return b>=0&&b<a.bC.data.length&&a.bC.data[b]>=0?1:0;}
function Cp(a,b){return b>=0&&b<a.bC.data.length?a.bC.data[b]:(-1);}
function E0(a,b,c){if(a.bC.data[b]<0)return 0;a.bp.KX(a.bC.data[b],c);return 1;}
function V2(a,b,c){if(a.bC.data[b]<0)return 0;a.bp.Mi(a.bC.data[b],c);return 1;}
function Oy(a,b,c){if(a.bC.data[b]<0)return 0;a.bp.uE(a.bC.data[b],c);return 1;}
function GW(a,b,c){if(a.bC.data[b]<0)return 0;a.bp.PH(a.bC.data[b],c);return 1;}
function GJ(a,b,c){if(a.bC.data[b]<0)return 0;a.bp.k8(a.bC.data[b],c);return 1;}
function ADP(a,b,c,d){if(a.bC.data[b]<0)return 0;a.bp.J$(a.bC.data[b],c,d);return 1;}
function ER(a,b,c,d,e,f){if(a.bC.data[b]<0)return 0;a.bp.Bt(a.bC.data[b],c,d,e,f);return 1;}
function ET(a,b,c){if(a.bC.data[b]<0)return 0;a.bp.G2(a.bC.data[b],c);return 1;}
function AHQ(a,b,c){if(a.bC.data[b]<0)return 0;a.bp.G2(a.bC.data[b],a.c$.el.he(c));return 1;}
var ALU=D(BD);
var DZ=D(Cs);
function BoU(){var a=new DZ();AC8(a);return a;}
function AC8(a){Gx(a);}
var EY=D(DZ);
function BBf(){var a=new EY();M3(a);return a;}
function M3(a){AC8(a);}
function Zy(){EY.call(this);this.Da=0;}
function Bq_(a){var b=new Zy();AY3(b,a);return b;}
function AY3(a,b){M3(a);a.Da=b;}
function ASG(a){var b,c;b=a.Da;c=H();V(I(c,B(380)),b);return P(c);}
var FX=D(Bc);
var BBg=null;var BBh=null;var BBi=null;function YK(){YK=M(FX);Bie();}
function AYB(a,b){var c=new FX();AHg(c,a,b);return c;}
function AHg(a,b,c){YK();B$(a,b,c);}
function Bie(){BBg=AYB(B(381),0);BBh=AYB(B(382),1);BBi=J(FX,[BBg,BBh]);}
function B9(){var a=this;C.call(a);a.dq=W;a.Hm=0;}
var BBj=null;function Rj(){Rj=M(B9);A87();}
function VB(b){var c;Rj();c=0;while(c<BBj.h){if(!(BBj.p(c)).V1(b))return CC(N(1),c);c=c+1|0;}return W;}
function Ui(b){var c;Rj();c=(-1);a:{while(DW(b,W)){c=c+1|0;if(c>=63)break a;if(DW(Bk(EG(b,c),N(1)),W))break a;}}return c>=0&&c<BBj.h?BBj.p(c):null;}
function Cf(b){var c;Rj();c=VB(b);if(F4(c,W))return c;BBj.C(b);return CC(N(1),BBj.h-1|0);}
function Gz(a,b){Rj();K(a);a.dq=b;a.Hm=AEx(b);}
function A72(a,b){return b.bl()!=a.bl()?0:1;}
function A5T(a,b){var c;if(b===null)return 0;if(b===a)return 1;if(!(b instanceof B9))return 0;c=b;if(Z(a.dq,c.dq))return a.CX(c);return 0;}
function A2K(a){return Ui(a.dq);}
function HL(a){return 7489*a.Hm|0;}
function A87(){BBj=By();}
function J2(){B9.call(this);this.nw=0.0;}
var BBk=W;var BBl=W;function Ga(){Ga=M(J2);AN7();}
function BdN(a,b){var c=new J2();ACu(c,a,b);return c;}
function RK(b){Ga();return BdN(BBk,b);}
function ACu(a,b,c){Ga();Gz(a,b);a.nw=c;}
function AZ2(a){return BdN(a.dq,a.nw);}
function A3V(a){var b,c;b=HL(a);c=(977*b|0)+CO(a.nw)|0;return c;}
function AN7(){BBk=Cf(B(383));BBl=Cf(B(384));}
var ZV=D(Cs);
function BoN(){var a=new ZV();BbX(a);return a;}
function BbX(a){Gx(a);}
var GE=D(Ix);
function Op(a,b,c,d){TT(a,b,c,d);}
function Bg8(a,b){var c,d,e;if(b>=0&&b<a.bd)return a.xY(b);c=new BC;d=a.bd;e=H();Bp(V(I(V(I(e,B(268)),b),B(57)),d),41);BO(c,P(e));G(c);}
function BcF(a){return a.fe();}
function GR(){var a=this;GE.call(a);a.f7=null;a.zw=0;a.fY=0;}
function Or(a,b,c,d,e,f,g){Op(a,c,e,f);a.fY=b;a.f7=d;a.zw=g;}
function Bbc(a){return a.zw;}
var AJD=D(Gj);
function Q6(a){var b=new AJD();A82(b,a);return b;}
function A82(a,b){N2(a,b);}
var OM=D(0);
var Os=D(0);
var R7=D(0);
var OP=D(0);
function AIe(){var a=this;C.call(a);a.Em=null;a.At=null;a.zb=null;a.nd=0;a.Ak=0;a.y8=0;a.F2=0;}
function BoW(a,b,c){var d=new AIe();Bht(d,a,b,c);return d;}
function Bht(a,b,c,d){K(a);a.zb=Dn();a.nd=(-1);a.Em=b;a.At=c;a.F2=d;}
function A8P(a){var b;b=a.Ak;a.Ak=1;return b;}
function A3g(a){NY(Bo$(a));}
function ACQ(a){if(a.y8)return;a.y8=1;if(a.nd>=0){BcR(a.nd);a.nd=(-1);}Et(a.zb);Bc$(a.Em,a.F2,a.At);}
function AJm(a){if(!a.I9())a.dp();}
function Bg3(a){a.Ma();}
var JX=D();
function BpR(){var a=new JX();ACz(a);return a;}
function ACz(a){K(a);}
function A2l(a,b){if(b==32)return a.AB()*4.294967295E9+(-2.147483648E9)|0;return a.AB()*JF(CC(N(1),BH(32,b)))|0;}
function ARJ(a){return a.Nc(32);}
function ANL(a){return B3(CC(N(a.Gm()),32),N(a.Gm()));}
function A_v(a){return $rt_globals.Math.random();}
function AIq(){var a=this;JX.call(a);a.rZ=W;a.r0=W;}
function BsS(){var a=new AIq();Bbi(a);return a;}
function Bbi(a){ACz(a);a.Od((BpR()).qG());}
function A1m(a){var b,c,d;b=a.rZ;c=a.r0;a.rZ=c;d=Ex(b,CC(b,23));d=Ex(Ex(Ex(d,c),BR(d,17)),BR(c,26));a.r0=d;return BE(d,c);}
function A3I(a,b){return Y((a.Rn(N(b))));}
function A2q(a,b){var c,d;if(DV(b,W))G(Bl(B(385)));while(true){c=BR(a.qG(),1);d=GN(c,b);if(M6(BE(Dj(c,d),Dj(b,N(1))),W))break;}return d;}
function BbD(a){return JF(BR(a.qG(),40))*5.9604644775390625E-8;}
function Bbe(a,b){var c;if(Z(b,W))b=BI(0, 2147483648);c=AAt(b);a.RF(c,AAt(c));}
function BhN(a,b,c){a.rZ=b;a.r0=c;}
function AAt(b){var c;c=Ex(b,BR(b,33));c=Bn(c,BI(3981806797, 4283543511));c=Ex(c,BR(c,33));c=Bn(c,BI(444984403, 3301882366));c=Ex(c,BR(c,33));return c;}
var Jf=D(0);
var VJ=D();
function BlM(a,b){return a.RL(b);}
function AQp(a){return a.Vh();}
var AMX=D(CF);
var Vi=D(K5);
function BnS(){var a=new Vi();Bcz(a);return a;}
function Bcz(a){AAk(a);}
function AT4(a){var b;b=(AHN(a)).gA(1);b.bm=1;return b;}
function L$(){var a=this;C.call(a);a.kd=null;a.xC=0.0;a.xU=0.0;a.D8=0;a.D9=0;a.By=0;a.Iz=0;a.LQ=null;}
function Zr(a){K(a);a.LQ=S();}
function Bjd(a,b){AHF(a.D8,a.D9,a.By,a.Iz);a.kd.lv=a.xC;a.kd.ng=a.xU;if(b)a.kd.cy.I(a.xC/2.0,a.xU/2.0,0.0);a.kd.eT();}
function BiX(a){return a.kd;}
function ATF(a,b){a.kd=b;}
function ARD(a,b,c){a.xC=b;a.xU=c;}
function A8Y(a,b,c,d,e){a.D8=b;a.D9=c;a.By=d;a.Iz=e;}
function XR(){L$.call(this);this.vy=0.0;}
function BmX(){var a=new XR();A6c(a);return a;}
function BpG(a){var b=new XR();ABI(b,a);return b;}
function A6c(a){ABI(a,BrY());}
function ABI(a,b){Zr(a);a.vy=1.0;a.Ky(b);}
function A$s(a,b,c,d){a.LZ(0,0,b,c);a.Pe(b*a.vy,c*a.vy);a.VW(d);}
function ACU(){var a=this;C.call(a);a.eI=null;a.hj=null;a.cm=0;a.O0=0;}
function BqJ(a,b,c,d){var e=new ACU();A0O(e,a,b,c,d);return e;}
function A0O(a,b,c,d,e){K(a);a.O0=b;a.eI=Gf(d,c);a.hj=Gf(e,c);}
function AXt(a,b){a.SV(b,0,b.cm);}
function A6R(a,b,c,d){var e;if((c+d|0)>b.cm)G(Bl((((((((H()).c(B(386))).t(c)).c(B(305))).t(d)).c(B(306))).t(b.cm)).d()));e=(a.cm+d|0)-c|0;if(e>=a.eI.data.length)a.iH(Bm(8,e*1.75|0));Bi(b.eI,c,a.eI,a.cm,d);Bi(b.hj,c,a.hj,a.cm,d);a.cm=a.cm+d|0;}
function BdJ(a){Jb(a.eI,0,a.cm,null);Jb(a.hj,0,a.cm,null);a.cm=0;}
function A32(a,b){var c,d,e;c=Gf((CB(a.eI)).gT(),b);d=c.data;Bi(a.eI,0,c,0,BH(a.cm,d.length));a.eI=c;e=Gf((CB(a.hj)).gT(),b);d=e.data;Bi(a.hj,0,e,0,BH(a.cm,d.length));a.hj=e;}
function Nm(){var a=this;C.call(a);a.ld=null;a.f1=null;a.kZ=null;a.Ru=0;a.JA=0;a.xy=0;}
function BoR(){var a=new Nm();AQF(a);return a;}
function BBm(a,b,c,d){var e=new Nm();Sm(e,a,b,c,d);return e;}
function BBn(a,b,c){var d=new Nm();AAW(d,a,b,c);return d;}
function BBo(a,b,c){var d=new Nm();AGm(d,a,b,c);return d;}
function AQF(a){Sm(a,BwP.pH(B(387)),BwP.pH(B(388)),0,1);}
function Sm(a,b,c,d,e){AAW(a,BqN(b,d),A6k(A2O(c,0)),e);a.xy=1;}
function AAW(a,b,c,d){var e,f;if(c===null)e=null;else{f=Bb(FU,1);f.data[0]=c;e=AOR(f);}AGm(a,b,e,d);}
function AGm(a,b,c,d){var e,f,g;K(a);a.Ru=b.ti;a.ld=b;a.JA=d;if(c!==null&&c.h){a.f1=c;a.xy=0;}else{if(b.ig===null)G(Bl(B(389)));e=b.ig.data.length;a.f1=Ee(e);f=0;while(f<e){g=b.uC===null?BwP.Jc(b.ig.data[f]):BwP.Uf(b.ig.data[f],b.uC.Ux());a.f1.C(A6k(A2O(g,0)));f=f+1|0;}a.xy=1;}a.kZ=a.Pz();a.LV(b);}
function A5r(a,b){var c,d,e,f,g,h,i,j;c=b.hS.data;d=c.length;e=0;while(e<d){a:{f=c[e];if(f!==null){g=f.data;h=g.length;i=0;while(true){if(i>=h)break a;j=g[i];if(j!==null)b.IM(j,a.f1.p(j.kR));i=i+1|0;}}}e=e+1|0;}if(b.jb!==null)b.IM(b.jb,a.f1.p(b.jb.kR));}
function ATz(a,b,c,d,e){var f;a.kZ.J();f=a.kZ.Oq(c,d,e);a.kZ.Tc(b);return f;}
function BkQ(a,b,c,d,e){(a.kZ.BU()).hc(b,c,d,e);}
function A1E(a){return a.f1;}
function BkB(a){return Btt(a,a.JA);}
function AHk(){var a=this;C.call(a);a.fA=null;a.ec=null;a.cR=null;a.dO=null;a.mx=0;}
function Brh(){var a=new AHk();AOv(a);return a;}
function Bt9(a,b){var c=new AHk();A_t(c,a,b);return c;}
function AOv(a){K(a);a.mx=1;}
function A_t(a,b,c){K(a);a.mx=1;a.fA=b;a.ec=c;}
function AZ3(a,b){b.dn=a.ec;b.c1.F5(a.fA);b.dW=a.dO;return b;}
function A1g(a){return (Brh()).WM(a);}
function Bfz(a,b){var c;a:{a.fA=BtB(b.fA);a.ec=b.ec;a.mx=b.mx;if(b.cR===null){a.cR=null;a.dO=null;}else{if(a.cR!==null)a.cR.J();else a.cR=BqJ(1,b.cR.cm,F(Pa),F(C2));a.cR.Vv(b.cR);if(!(a.dO!==null&&a.dO.data.length==a.cR.cm))a.dO=Bb(C2,a.cR.cm);c=0;while(true){if(c>=a.dO.data.length)break a;if(a.dO.data[c]===null)a.dO.data[c]=BS();c=c+1|0;}}}return a;}
function Hn(){var a=this;B4.call(a);a.yz=0;a.j6=0;}
function Bt7(a,b){var c=new Hn();MU(c,a,b);return c;}
function MU(a,b,c){Ds(a);a.yz=b;a.j6=c;}
function AOB(a,b,c,d){var e,f,g,h;e=a.k0(d);if(e!==null&&(b+e.j()|0)<=d.K()){f=0;while(true){if(f>=e.j()){d.bH(a.j6,e.j());return a.k.e(b+e.j()|0,c,d);}g=e.g(f);h=b+f|0;if(g!=c.g(h)&&Iu(e.g(f))!=c.g(h))break;f=f+1|0;}return (-1);}return (-1);}
function Bg2(a,b){a.k=b;}
function AQ9(a,b){var c;c=b.UQ(a.yz);return c;}
function A69(a){var b,c;b=a.bs;c=H();V(I(c,B(390)),b);return P(c);}
function A0F(a,b){var c;c=!b.eN(a.j6)?0:1;b.bH(a.j6,(-1));return c;}
function AAu(){var a=this;X.call(a);a.EF=null;a.Wm=null;}
function Bqf(a,b){var c=new AAu();A5q(c,a,b);return c;}
function A5q(a,b,c){a.Wm=b;a.EF=c;Bo(a);}
function ASC(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.ce^a.EF.e5(c):0;}
function AAs(){var a=this;X.call(a);a.It=null;a.C0=null;a.Oo=null;}
function Bos(a,b,c){var d=new AAs();Bfw(d,a,b,c);return d;}
function Bfw(a,b,c,d){a.Oo=b;a.It=c;a.C0=d;Bo(a);}
function A6G(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.ce^a.It.e5(c):0;return a.C0.r(b)&&!d?1:0;}
function EV(){CI.call(this);this.pv=null;}
function LD(a){LT(a);a.pv=By();}
function ADt(a){var b;b=SB(a);a.pv.C(b);return b;}
function AXe(a){ABu(a,a.pv);a.pv.J();}
var AEg=D(Fj);
function BpP(a,b,c,d){var e=new AEg();Bev(e,a,b,c,d);return e;}
function Bev(a,b,c,d,e){NL(a,b,c,d,e);}
function Bh5(a,b,c,d){var e,f,g,h;e=a.gI.j5();f=a.gI.jx();g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.bD.cr()|0)>d.K())break a;h=a.bD.bR(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.k.e(b,c,d);}if((b+a.bD.cr()|0)>d.K()){d.ek=1;return (-1);}h=a.bD.bR(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
var EZ=D(CS);
var Oa=D(0);
function AFx(){var a=this;C.call(a);a.lB=0;a.gB=null;a.iL=null;a.A3=0;a.uT=0;a.yQ=0.0;a.uP=0;a.um=0;a.jK=0;}
function BnJ(){var a=new AFx();A3C(a);return a;}
function BBp(a,b){var c=new AFx();AJt(c,a,b);return c;}
function A3C(a){AJt(a,51,0.800000011920929);}
function AJt(a,b,c){var d;K(a);if(c>0.0&&c<1.0){a.yQ=c;d=Hi(b,c);a.uP=d*c|0;a.jK=d-1|0;a.um=Dd(N(a.jK));a.gB=Bf(d);a.iL=Bf(d);return;}G(Bl((((H()).c(B(258))).co(c)).d()));}
function AY_(a,b){return Y(BR(Bn(N(b),BI(2135587861, 2654435769)),a.um));}
function Qz(a,b){var c,d,e;c=a.gB;d=a.fk(b);while(true){e=c.data[d];if(!e)return  -(d+1|0)|0;if(e==b)break;d=(d+1|0)&a.jK;}return d;}
function ASf(a,b,c){var d,e;if(!b){a.A3=c;if(!a.uT){a.uT=1;a.lB=a.lB+1|0;}return;}d=Qz(a,b);if(d>=0){a.iL.data[d]=c;return;}e= -(d+1|0)|0;a.gB.data[e]=b;a.iL.data[e]=c;e=a.lB+1|0;a.lB=e;if(e>=a.uP)Xw(a,a.gB.data.length<<1);}
function U_(a,b,c){var d,e,f;d=a.gB;e=a.fk(b);while(true){f=d.data;if(!f[e])break;e=(e+1|0)&a.jK;}f[e]=b;a.iL.data[e]=c;}
function AWq(a,b,c){var d;if(!b){if(a.uT)c=a.A3;return c;}d=Qz(a,b);if(d>=0)c=a.iL.data[d];return c;}
function Xw(a,b){var c,d,e,f,g;a:{c=a.gB.data.length;a.uP=b*a.yQ|0;a.jK=b-1|0;a.um=Dd(N(a.jK));d=a.gB;e=a.iL;a.gB=Bf(b);a.iL=Bf(b);if(a.lB>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g)U_(a,g,e.data[f]);f=f+1|0;}}}}
var ACB=D(CI);
var ADF=D();
function I_(){var a=this;Be.call(a);a.iW=null;a.Hp=0;a.CE=0;}
var BBq=null;var BBr=null;function TX(){TX=M(I_);Bez();}
function BsZ(a,b){var c=new I_();UT(c,a,b);return c;}
function UT(a,b,c){TX();Cc(a);a.iW=AZ5();a.Hp=b;a.CE=c;}
function BeW(a,b,c,d,e){var f,g,h,i,j,k;if(d.cD===null){f=b.bp;g=Cp(b,c);TX();f.Dr(g,BBq,0,BBq.data.length);}else{h=d.dN;TX();h.wY(BBr);CN();if(C0(e,BBs))a.iW.M9((B2(e,BBs)).eb);a:{L4();if(C0(e,BBt)){i=BBt;j=(B2(e,i)).h0;k=a.Hp;while(true){if(k>=j.h)break a;a.iW.WJ((j.p(k)).br,(j.p(k)).ft);k=k+1|0;}}}b:{Beb();if(C0(e,BBu)){j=(B2(e,BBu)).HW;k=a.CE;while(true){if(k>=j.h)break b;a.iW.RO((j.p(k)).br,(j.p(k)).eV,BBr,(j.p(k)).dM);k=k+1|0;}}}a.iW.SP();b.bp.Dr(Cp(b,c),a.iW.cq,0,a.iW.cq.data.length);}}
function Bez(){BBq=Bp0([1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0]);BBr=S();}
function Ry(){var a=this;C.call(a);a.gO=null;a.FX=0;a.u9=null;a.qE=null;a.C8=0;a.K9=0.0;a.K8=0.0;a.xP=null;a.Lu=0.0;a.dJ=null;a.dT=null;a.cS=null;a.vl=null;}
var BBv=null;function Bsf(){Bsf=M(Ry);AW4();}
function Btt(a,b){var c=new Ry();AL7(c,a,b);return c;}
function AL7(a,b,c){var d,e,f;Bsf();K(a);a.u9=By();a.qE=By();a.xP=CT(1.0,1.0,1.0,1.0);a.gO=b;a.FX=c;d=b.f1.h;if(!d)G(Bl(B(391)));a:{a.dJ=Bb($rt_arraycls($rt_floatcls()),d);a.dT=Bf(d);if(d>1){a.cS=Bb(IM,d);e=0;f=a.cS.data.length;while(true){if(e>=f)break a;a.cS.data[e]=I2();e=e+1|0;}}}a.vl=Bf(d);}
function BgD(a){return a.xP;}
function AR7(a,b){var c,d,e,f;c=a.gO.Um();d=0;e=a.dJ.data.length;while(d<e){if(a.dT.data[d]>0){f=a.dJ.data[d];b.LJ((c.p(d)).EG(),f,0,a.dT.data[d]);}d=d+1|0;}}
function BfM(a){var b,c;a.K9=0.0;a.K8=0.0;Ye(a.qE,1);a.qE.J();a.u9.J();b=0;c=a.dT.data.length;while(b<c){if(a.cS!==null)a.cS.data[b].J();a.dT.data[b]=0;b=b+1|0;}}
function AC7(a,b){var c,d,e,f,g,h,i,j,k;a:{if(a.dJ.data.length==1)Rr(a,0,b.cg);else{c=a.vl;Ir(c,0);d=0;e=b.cb.h;while(d<e){f=(b.cb.p(d)).bi;g=f.N;h=0;i=f.h;while(h<i){j=c.data;k=g.data[h].kR;j[k]=j[k]+1|0;h=h+1|0;}d=d+1|0;}j=c.data;d=0;e=j.length;while(true){if(d>=e)break a;Rr(a,d,j[d]);d=d+1|0;}}}}
function Rr(a,b,c){var d,e,f;if(a.cS!==null&&c>a.cS.data[b].b8.data.length)a.cS.data[b].Vk(c-a.cS.data[b].G|0);d=a.dT.data[b]+(c*20|0)|0;e=a.dJ.data[b];if(e===null)a.dJ.data[b]=B_(d);else if(e.data.length<d){f=B_(d);Bi(e,0,f,0,a.dT.data[b]);a.dJ.data[b]=f;}}
function UD(a,b){var c,d,e,f;c=Bb($rt_arraycls($rt_floatcls()),b);Bi(a.dJ,0,c,0,a.dJ.data.length);a.dJ=c;d=Bf(b);Bi(a.dT,0,d,0,a.dT.data.length);a.dT=d;e=Bb(IM,b);f=0;if(a.cS!==null){f=a.cS.data.length;Bi(a.cS,0,e,0,a.cS.data.length);}while(f<b){e.data[f]=I2();f=f+1|0;}a.cS=e;a.vl=Bf(b);}
function XT(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;e=b.cb.h;if(!e)return;if(a.dJ.data.length<a.gO.f1.h)UD(a,a.gO.f1.h);a.u9.C(b);AC7(a,b);f=b.bt;g=0;h=0;i=0;j=0.0;k=0;while(k<e){l=b.cb.p(k);m=l.bi.N;n=l.bg.S;o=c+l.ej;p=d+l.o3;q=0;r=l.bi.h;while(q<r){s=i+1|0;if(i==h){t=g+1|0;j=MM(f.bG(t));g=t+1|0;h=g>=f.G?(-1):f.bG(g);}u=m.data;o=o+n.data[q];ZG(a,u[q],o,p,j);q=q+1|0;i=s;}k=k+1|0;}DJ();a.Lu=By9;}
function ZG(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;f=a.gO.ld.mk;g=a.gO.ld.Ds;h=c+b.fU*f;i=d+b.j9*g;j=b.dg*f;k=b.cU*g;l=b.yn;m=b.EU;n=b.r2;o=b.vD;if(a.FX){h=D3(h);i=D3(i);j=D3(j);k=D3(k);}p=h+j;q=i+k;r=b.kR;s=a.dT.data[r];t=a.dT.data;t[r]=t[r]+20|0;if(a.cS!==null){u=a.cS.data[r];v=a.C8;a.C8=v+1|0;u.em(v);}w=a.dJ.data[r];t=w.data;x=s+1|0;t[s]=h;v=x+1|0;t[x]=i;x=v+1|0;t[v]=e;v=x+1|0;t[x]=l;y=v+1|0;t[v]=n;x=y+1|0;t[y]=h;v=x+1|0;t[x]=q;x=v+1|0;t[v]=e;v=x+1|0;t[x]=l;x=v+1|0;t[v]=o;v=x+1|0;t[x]=p;x
=v+1|0;t[v]=q;v=x+1|0;t[x]=e;x=v+1|0;t[v]=m;v=x+1|0;t[x]=o;x=v+1|0;t[v]=p;y=x+1|0;t[x]=i;v=y+1|0;t[y]=e;x=v+1|0;t[v]=m;t[x]=n;}
function A5z(a,b,c,d){return a.MY(b,c,d,0,b.j(),0.0,8,0,null);}
function BlL(a,b,c,d,e,f,g,h,i,j){var k;k=Zx(F(Hy));a.qE.C(k);k.rq(a.gO,b,e,f,a.xP,g,h,i,j);a.Mg(k,c,d);return k;}
function AQW(a,b,c,d){XT(a,b,c,d+a.gO.ld.m4);}
function AW4(){BBv=CT(1.0,1.0,1.0,1.0);}
var AGw=D();
function KY(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.EV.data;f=b.Gp;b.Gp=f+1|0;g=BfX(e[f]);h=(g%2|0)!=1?0:1;c=c+CJ(d,g/2|0)|0;d=d*46|0;if(!h)break;}return c;}
function Mo(b){var c,d;c=KY(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function BfX(b){if(b<34)return b-32|0;if(b>=92)return (b-32|0)-2|0;return (b-32|0)-1|0;}
function Sq(){Ca.call(this);this.nf=null;}
function Bua(a){var b=new Sq();Bji(b,a);return b;}
function Bji(a,b){var c,d;DK(a);c=H();d=0;while(d<b.j()){c.bv(Ei(EA(b.g(d))));d=d+1|0;}a.nf=c.d();a.bY=c.j();}
function AXd(a,b,c){var d;d=0;while(true){if(d>=a.nf.j())return a.nf.j();if(a.nf.g(d)!=Ei(EA(c.g(b+d|0))))break;d=d+1|0;}return (-1);}
function AUJ(a){var b,c;b=a.nf;c=H();I(I(c,B(392)),b);return P(c);}
function AAR(){X.call(this);this.Pc=null;}
function Bt8(a){var b=new AAR();A5Q(b,a);return b;}
function A5Q(a,b){a.Pc=b;Bo(a);}
function AVq(a,b){return Xi(b);}
function Jq(){EP.call(this);this.ft=null;}
function AT9(){var a=new Jq();Bca(a);return a;}
function Bca(a){JY(a);a.ft=S();}
function AOV(a,b){return a.UV(b.br,b.ft);}
function AQC(a,b,c){if(b!==null)a.br.ik(b);if(c!==null)(a.ft.L(c)).b0();return a;}
function A01(a,b,c,d,e,f,g){a.br.hc(b,c,d,1.0);(a.ft.I(e,f,g)).b0();return a;}
function AOF(a,b){return b instanceof Jq&&a.Ip(b)?1:0;}
function BfD(a,b){var c;a:{b:{if(b!==null){if(b===a)break b;if(a.br.y(b.br)&&a.ft.y(b.ft))break b;}c=0;break a;}c=1;}return c;}
var AIy=D(Dr);
var OH=D();
var BBw=null;function AMs(){AMs=M(OH);AN_();}
function AHF(b,c,d,e){var f;AMs();a:{b:{f=BBw;Xp();if(f===BBx){if(BwN.bk()!=BwN.z3())break b;f=BwN;if(f.bh()!=BwN.Iw())break b;}BwR.qe(b,c,d,e);break a;}BwR.qe(Pj(b),Pn(c),Pj(d),Pn(e));}}
function Pj(b){AMs();return CJ(b,BwN.z3())/BwN.bk()|0;}
function Pn(b){AMs();return CJ(b,BwN.Iw())/BwN.bh()|0;}
function AN_(){Xp();BBw=BBx;}
var ALT=D(BD);
var ALV=D(Dc);
function VI(){var a=this;B4.call(a);a.pJ=null;a.rg=null;}
function On(a,b){var c=new VI();A4v(c,a,b);return c;}
function A4v(a,b,c){Ds(a);a.pJ=b;a.rg=c;}
function AO4(a,b,c,d){var e;e=a.pJ.e(b,c,d);if(e<0)e=a.rg.e(b,c,d);if(e>=0)return e;return (-1);}
function BfZ(a,b){a.k=b;a.rg.T(b);a.pJ.T(b);}
function BgG(a){var b,c,d;b=a.pJ;c=a.rg;d=H();I(I(I(I(d,B(393)),b),B(394)),c);return P(d);}
function AP6(a,b){return 1;}
function APD(a,b){return 1;}
var Po=D(0);
function Gd(){var a=this;C.call(a);a.is=null;a.gq=null;}
function BBy(a,b){var c=new Gd();Pf(c,a,b);return c;}
function Pf(a,b,c){K(a);a.is=b;a.gq=c;}
function P$(){var a=this;Gd.call(a);a.nu=null;a.BE=0;}
function BsG(a,b){var c=new P$();AZN(c,a,b);return c;}
function AZN(a,b,c){Pf(a,b,c);a.BE=b.bl();}
function APl(a){return a.is.bl();}
function A21(a,b,c){return a.BE==b.bl()&&a.is.y(b)?1:0;}
var AL4=D(Cy);
var Gk=D(C7);
function BrL(){var a=new Gk();Bjj(a);return a;}
function Bjj(a){FE(a,0);}
function A3m(a,b,c,d){if(d.F4()!=1&&b!=d.K())return (-1);d.Q6();d.xw(0,b);return b;}
function A83(a){return B(395);}
var Kd=D(Fe);
var ACi=D(Kd);
var Ij=D(IC);
var BBz=null;function ART(){ART=M(Ij);BlB();}
function Bub(a){var b=new Ij();ACa(b,a);return b;}
function BBA(){var a=new Ij();JG(a);return a;}
function ACa(a,b){ART();LU(a);}
function JG(a){ART();LU(a);}
function BlB(){BBz=Bub(0);}
var AAc=D(Ca);
function He(a){var b=new AAc();Bej(b,a);return b;}
function Bej(a,b){ACT(a,b);a.bY=0;}
function Big(a,b,c){return 0;}
function A_D(a,b,c,d){var e,f,g,h,i;e=d.K();f=d.eC();while(true){g=Cu(b,e);if(g>0)return (-1);if(g<0){h=c.g(b);if(B8(h)&&b>f){i=c.g(b-1|0);if(Cn(i)){b=b+1|0;continue;}}}if(a.k.e(b,c,d)>=0)break;b=b+1|0;}return b;}
function A9x(a,b,c,d,e){var f,g,h,i;f=e.K();g=e.eC();while(true){if(c<b)return (-1);if(c<f){h=d.g(c);if(B8(h)&&c>g){i=d.g(c-1|0);if(Cn(i)){c=c+(-1)|0;continue;}}}if(a.k.e(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AUu(a){return B(396);}
function A7a(a,b){return 0;}
var Jt=D(EZ);
var AE2=D(Jt);
function ME(){B9.call(this);this.MD=0;}
var BBB=W;function AQ3(){AQ3=M(ME);Bje();}
function Bje(){BBB=Cf(B(397));}
var Ll=D(0);
function ACf(){var a=this;C.call(a);a.dH=null;a.g_=null;a.uK=0;a.b5=0;}
function AAC(a,b){var c=new ACf();BjQ(c,a,b);return c;}
function BBC(a,b,c){var d=new ACf();ABk(d,a,b,c);return d;}
function BjQ(a,b,c){ABk(a,b,c,0);}
function ABk(a,b,c,d){K(a);if(b===null)G(KX());a.dH=b;a.g_=c;a.uK=d;a.b5=0;}
function Bmi(a){var b,c;if(a.g_===null)G(KX());a:{b=a.dH.j();if(a.b5<b){if(a.uK)return 1;c=a.b5;while(true){if(c>=b)break a;if(a.g_.e1(a.dH.g(c),0)==(-1))return 1;c=c+1|0;}}}return 0;}
function APn(a){var b,c,d,e,f;if(a.g_===null)G(KX());b=a.b5;c=a.dH.j();if(b<c){if(a.uK){if(a.g_.e1(a.dH.g(a.b5),0)>=0){d=a.dH;e=a.b5;a.b5=e+1|0;return AHv(d.g(e));}a.b5=a.b5+1|0;while(a.b5<c){if(a.g_.e1(a.dH.g(a.b5),0)>=0)return a.dH.c0(b,a.b5);a.b5=a.b5+1|0;}return a.dH.fc(b);}while(true){f=Cu(b,c);if(f>=0)break;if(a.g_.e1(a.dH.g(b),0)<0)break;b=b+1|0;}a.b5=b;if(f<0){a.b5=a.b5+1|0;while(a.b5<c){if(a.g_.e1(a.dH.g(a.b5),0)>=0)return a.dH.c0(b,a.b5);a.b5=a.b5+1|0;}return a.dH.fc(b);}}G(Bnq());}
var Ie=D(BF);
var BBD=null;function AXa(){AXa=M(Ie);AS8();}
function BrK(a){var b=new Ie();XX(b,a);return b;}
function BBE(){var a=new Ie();JM(a);return a;}
function XX(a,b){AXa();BY(a);}
function JM(a){AXa();BY(a);}
function AS8(){BBD=BrK(0);}
function FU(){var a=this;C.call(a);a.kQ=null;a.C6=0.0;a.C9=0.0;a.WL=0.0;a.WI=0.0;a.pB=0;a.ok=0;}
function A6k(a){var b=new FU();A7D(b,a);return b;}
function A7D(a,b){K(a);if(b===null)G(Bl(B(398)));a.kQ=b;a.SO(0,0,b.bk(),b.bh());}
function Bis(a,b,c,d,e){var f,g;f=1.0/a.kQ.bk();g=1.0/a.kQ.bh();a.Tb(b*f,c*g,(b+d|0)*f,(c+e|0)*g);a.pB=ACr(d);a.ok=ACr(e);}
function APL(a,b,c,d,e){var f,g,h,i,j,k,l;f=a.kQ.bk();g=a.kQ.bh();h=De(d-b);i=f;a.pB=D3(h*i);h=De(e-c);j=g;a.ok=D3(h*j);if(a.pB==1&&a.ok==1){k=0.25/i;b=b+k;d=d-k;l=0.25/j;c=c+l;e=e-l;}a.C6=b;a.C9=c;a.WL=d;a.WI=e;}
function A4i(a){return a.kQ;}
function ARa(a){return a.pB;}
function ANV(a){return a.ok;}
function Nh(){var a=this;FU.call(a);a.TJ=0.0;a.TI=0.0;a.U3=0;a.Sd=0;}
var Wm=D(F8);
function BmA(a,b,c,d,e,f){var g=new Wm();A6W(g,a,b,c,d,e,f);return g;}
function A6W(a,b,c,d,e,f,g){OX(a,b,c,d,e,f,g);}
function A6e(a,b){var c,d,e,f;c=a.cE.B.data;d=a.ct;e=b*4|0;f=c[d+e|0]&255|(a.cE.B.data[(a.ct+e|0)+1|0]&255)<<8|(a.cE.B.data[(a.ct+e|0)+2|0]&255)<<16|(a.cE.B.data[(a.ct+e|0)+3|0]&255)<<24;return $rt_intBitsToFloat(f);}
function Bc4(a,b,c){var d,e,f,g;d=$rt_floatToIntBits(c);e=a.cE.B.data;f=a.ct;g=b*4|0;e[f+g|0]=d<<24>>24;a.cE.B.data[(a.ct+g|0)+1|0]=d>>8<<24>>24;a.cE.B.data[(a.ct+g|0)+2|0]=d>>16<<24>>24;a.cE.B.data[(a.ct+g|0)+3|0]=d>>24<<24>>24;}
var Oh=D(0);
function ADh(){var a=this;C.call(a);a.ql=null;a.eD=null;a.rC=null;a.lq=null;a.K7=null;a.yd=0.0;a.ve=W;a.jW=W;a.q2=0.0;a.nG=0.0;a.rP=0;}
function Bph(a){var b=new ADh();Bdx(b,a);return b;}
function Bdx(a,b){var c,d,e,f,g,h,i,j,k,l,m;K(a);a.yd=0.0;a.ve=FQ();a.jW=N(-1);a.q2=0.0;a.nG=0.0;a.rC=b;c=A$5();d=c.mD();e=b.DP;f=d.getElementById($rt_ustr(e));a.eD=f;a.ql=a.O8(a.eD,b);a.lq=!b.CY?Bty(a.ql):Bqv(a.ql);g=a.lq.oW(7938);h=a.lq.oW(7936);i=a.lq.oW(7937);e=new M$;KA();Xc(e,Bwr,g,h,i);a.K7=e;if(!(b.kj<0&&b.i9<0)){if(b.M0())a.pb(b.kj,b.i9);else{j=Hk();k=j.JH()-b.sM|0;l=j.DK()-b.ya|0;m=!b.q8?1.0:a.oH();a.pb(m*k|0,m*l|0);}}}
function ARd(a){var b;b=FQ();a.q2=JF(Dj(b,a.ve))/1000.0;a.ve=b;a.nG=a.nG+a.q2;a.rP=a.rP+1|0;if(a.nG>1.0){a.yd=a.rP;a.nG=0.0;a.rP=0;}}
function AZB(a){return a.lq;}
function BkI(a){return a.eD.width;}
function A5C(a){return a.eD.height;}
function A$c(a){return a.eD.width;}
function AY5(a){return a.eD.height;}
function A2z(a){return a.q2;}
function Bgo(a){return a.yd|0;}
function A0W(a){var b;b=!a.rC.q8?1.0:a.oH();return BnY(a,$rt_globals.screen.width*b|0,$rt_globals.screen.height*b|0,60,8);}
function ANM(a,b){var c;c=a.Jp();if(b.qD!=c.qD&&b.pu!=c.pu)return 0;return a.Kh(a,a.eD,b.qD,b.pu);}
function AOG(a,b,c){if(a.yy())a.Wa();if(!a.rC.BH())a.pb(b,c);return 1;}
function A6w(a,b,c){var d,e,f,g,h,i,j;d=a.eD;e=b;d.width=e;d=a.eD;e=c;d.height=e;if(a.rC.q8){f=a.oH();g=a.eD.style;h=b/f;AD_();i=BAF.BC();e=H();I(P7(e,h),i);e=P(e);g.setProperty("width",$rt_ustr(e));h=c/f;j=BAF.BC();d=H();I(P7(d,h),j);j=P(d);g.setProperty("height",$rt_ustr(j));}}
function Bhv(a,b){return a.ql.getExtension($rt_ustr(b))===null?0:1;}
function AXR(a){return a.Tl();}
function A1Q(a){return $rt_globals.devicePixelRatio||1;}
function BcG(a,b,c,d,e){var f;f=BnN(a);return Bbt(BZ(f,"fullscreenChanged"),c,d,e)?1:0;}
function A9y(a){Bet();}
function A$Y(a){return AWD()?1:0;}
function A__(a,b,c){var d,e,f;d=AR0();e=!!c.Id;d.alpha=e;f=!!c.FE;d.antialias=f;e=!!c.Gh;d.stencil=e;e=!!c.Bg;d.premultipliedAlpha=e;e=!!c.Hf;d.preserveDrawingBuffer=e;e=b.getContext("webgl",d);return e;}
function Bbt(b,c,d,e){if(c.requestFullscreen){c.width=d;c.height=e;c.requestFullscreen();$rt_globals.document.addEventListener("fullscreenchange",b,false);return true;}if(c.webkitRequestFullScreen){c.width=d;c.height=e;c.webkitRequestFullScreen($rt_globals.Element.ALLOW_KEYBOARD_INPUT);$rt_globals.document.addEventListener("webkitfullscreenchange",b,false);return true;}if(c.mozRequestFullScreen){c.width=d;c.height=e;c.mozRequestFullScreen();$rt_globals.document.addEventListener("mozfullscreenchange",b,false);return true;}if
(c.msRequestFullscreen){c.width=d;c.height=e;c.msRequestFullscreen();$rt_globals.document.addEventListener("msfullscreenchange",b,false);return true;}return false;}
function Bet(){if($rt_globals.document.exitFullscreen)$rt_globals.document.exitFullscreen();if($rt_globals.document.msExitFullscreen)$rt_globals.document.msExitFullscreen();if($rt_globals.document.webkitExitFullscreen)$rt_globals.document.webkitExitFullscreen();if($rt_globals.document.mozExitFullscreen)$rt_globals.document.mozExitFullscreen();if($rt_globals.document.webkitCancelFullScreen)$rt_globals.document.webkitCancelFullScreen();}
function AWD(){if("fullscreenElement" in $rt_globals.document){return $rt_globals.document.fullscreenElement!=null;}if("msFullscreenElement" in $rt_globals.document){return $rt_globals.document.msFullscreenElement!=null;}if("webkitFullscreenElement" in $rt_globals.document){return $rt_globals.document.webkitFullscreenElement!=null;}if("mozFullScreenElement" in $rt_globals.document){return $rt_globals.document.mozFullScreenElement!=null;}if("webkitIsFullScreen" in $rt_globals.document){return $rt_globals.document.webkitIsFullScreen;}if
("mozFullScreen" in $rt_globals.document){return $rt_globals.document.mozFullScreen;}return false;}
var AGc=D(Hm);
function BBF(a){var b=new AGc();AQG(b,a);return b;}
function AQG(a,b){Np(a,b);}
var BC=D(Bs);
function DS(){var a=new BC();Uo(a);return a;}
function Dl(a){var b=new BC();BO(b,a);return b;}
function Uo(a){CY(a);}
function BO(a,b){Fd(a,b);}
var ALx=D(BC);
function AUC(a){var b=new ALx();AO_(b,a);return b;}
function AO_(a,b){BO(a,Rb(b));}
function TN(){var a=this;F3.call(a);a.xi=null;a.xI=null;a.Jq=null;a.di=null;a.Fw=null;a.eG=null;a.rF=0;a.xE=0;}
function BBG(a,b){var c=new TN();Vd(c,a,b);return c;}
function Bq6(a){var b=new TN();ANy(b,a);return b;}
function BBH(a,b){var c=new TN();AJP(c,a,b);return c;}
function Vd(a,b,c){var d,e;d=c.mO();D5();e=Bvv;e=RO(d,e);d=Bvv;e=N_(e,d);AJP(a,b,e);}
function ANy(a,b){Ne();Vd(a,b,ByX);}
function AJP(a,b,c){Oc(a);a.Jq=CE(8192);a.di=Jm(a.Jq);a.Fw=Ck(1024);a.eG=N5(a.Fw);a.xi=b;a.xI=c;a.eG.qm(BQ(a.eG));a.di.gv(BQ(a.di));}
function Bi4(a){a.xi.gh();}
function AUR(a,b,c,d){var e,f;if(a.xE&&!CK(a.eG))return (-1);e=0;a:{while(d>0){f=BH(d,Bj(a.eG));a.eG.tn(b,c+e|0,f);d=d-f|0;e=e+f|0;if(!CK(a.eG)&&!AL8(a))break a;}}return e;}
function AL8(a){if(a.xE)return 0;a.eG.OB();a:{while(true){if(!CK(a.di)&&!AJW(a))break a;if(!(Lc(a.xI,a.di,a.eG,a.rF)).iP())continue;else break;}}if(!CK(a.di)&&a.rF&&(NE(a.xI,a.eG)).kC())a.xE=1;N3(a.eG);return 1;}
function AJW(a){var b;if(a.rF)return 0;a.di.W4();a:{while(true){if(!CK(a.di))break a;b=a.xi.tB(JC(a.di),Cr(a.di),Bj(a.di));if(b==(-1)){a.rF=1;break a;}a.di.gv(Cr(a.di)+b|0);if(!b)break;}}LX(a.di);return 1;}
var ADC=D();
var AGR=D();
function A39(b,c,d){var e;if(b===null)return null;e=BrX(b,A0k(b),c,d);return e;}
var Ib=D(0);
function AC5(){var a=this;C.call(a);a.rJ=0;a.IR=0;a.F8=0;a.Ha=0;a.mN=null;}
function BqO(a){var b=new AC5();AZw(b,a);return b;}
function AZw(a,b){a.mN=b;K(a);a.IR=a.mN.ho;a.F8=a.mN.cY();a.Ha=(-1);}
function BeV(a){return a.rJ>=a.F8?0:1;}
function Bjr(a){var b,c;UH(a);a.Ha=a.rJ;b=a.mN;c=a.rJ;a.rJ=c+1|0;return b.p(c);}
function UH(a){if(a.IR>=a.mN.ho)return;G(Bm7());}
var Rv=D(0);
function AJq(){C.call(this);this.Ld=null;}
function BsU(a){var b=new AJq();A$F(b,a);return b;}
function A$F(a,b){K(a);a.Ld=b;}
var OW=D(0);
function Jo(){var a=this;C.call(a);a.Ey=0;a.eY=null;a.HS=null;a.sz=null;a.l9=null;a.ku=null;a.Ew=null;a.lr=null;a.kq=null;a.mS=null;a.f0=null;a.nm=null;a.p_=null;a.xB=null;a.tD=null;a.tQ=null;a.jY=null;a.pD=null;a.Jh=null;a.sr=W;a.lR=W;a.qF=0;a.k6=0;a.OS=null;a.mH=null;a.s$=0;a.rh=null;}
var BBI=null;var BBJ=null;function AVt(){AVt=M(Jo);A$z();}
function Btl(){var a=new Jo();ACC(a);return a;}
function ACC(a){AVt();K(a);a.l9=By();a.ku=By();a.qF=0;a.k6=0;a.OS=BS();a.s$=500;a.rh=S();}
function A_l(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;AFn();a.Ey=$rt_globals.Bullet.MyClassHelper.prototype.getBTVersion();a.p_=BoX();a.xB=Bn8(a.p_);a.tD=Bo2();a.tQ=Bpi();a.f0=BmZ(a.xB,a.tD,a.tQ,a.p_);b=CR(0.0,(-10.0),0.0);a.f0.L3(b);a.nm=Bo_();a.f0.NA(a.nm);a.nm.G7(32777);a.jY=BrF(BBK,BBL);a.eY=Bqg();a.HS=BpG(a.eY);a.sz=BmX();a.lr=BsK();a.mS=BqF();c=a.mS;d=new DG;CN();Rc(d,BBs,0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);Fu(c,d);e=(AT9()).AG(1.0,1.0,1.0,(-1.0),(-1.0),(-0.4000000059604645));a.mS.KB(e);a.kq
=Bqs();a.eY.cy.n=43.0;a.eY.cy.m=2.0;a.eY.Su(0.0,0.0,0.0);f=BpJ();g=1.0;h=1.0;i=1.0;j=1.0;k=Br0(BwP.Jc(B(399)));Uy();k.U0(BBM,BBM);l=new HN;m=J(B9,[AIr(k),RK(4.0)]);Rg(l,m);a.Jh=f.FY(1.0,1.0,1.0,l,N(25));n=60.0;o=0.30000001192092896;p=60.0;q=f.FY(n,o,p,Brj(J(B9,[NI(g,h,i,j),AHJ(g,h,i,j),RK(16.0)])),N(9));a.Ew=a.yM(B(400),0,0.0,0.0,(-2.0),0.0,0.0,0.0,0.0,q,n,o,p,0.0,0.0,1.0);a.Jg();a.pD=BoR();a.pD.k$(1.0,0.0,0.0,1.0);a.lR=FQ();a.mH=BnI(a.eY);a.mH.qz=0;a.mH.sZ=0;a.mH.xl=0;Bwz.Ck(Btf(J(GM,[a,a.mH])));}
function BiT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r,s,t,u,v,w;r=BtA(k);s=NI(o,p,q,1.0);Fu(r.kw.p(0),s);r.eU.QU(e,f,g);t=r.eU;J5();t.x4(BBN,h);r.eU.x4(BBO,i);r.eU.x4(BBL,j);u=Bnl(r.eU);v=Bti(a.rh.I(l/2.0,m/2.0,n/2.0));v.Tk(d,a.rh.Ev());w=BtW(d,u,v,a.rh);w.Nw(N(a.ku.h));if(c)a.ku.C(w);w.OU(0.699999988079071);a.f0.M6(w);return r;}
function A_Y(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=0;while(b<a.ku.h){c=a.ku.p(b);a.f0.Lh(c);c.cJ();b=b+1|0;}a.ku.J();a.l9.J();d=0;b=0;while(b<a.s$){e=Jz((-5.0),5.0);f=Jz(19.0,24.0);g=Jz((-5.0),5.0);h=KZ(0,360);i=KZ(0,360);j=KZ(0,360);k=1.0;l=1.0;m=1.0;n=H();V(I(n,B(401)),d);n=a.yM(P(n),1,0.4000000059604645,e,f,g,h,i,j,a.Jh,1.0,1.0,1.0,k,l,m);d=d+1|0;a.l9.C(n);b=b+1|0;}}
function AM_(a){var b,c,d,e,f,g,h,i,j,k;a.eY.eT();BwR.yU(0.8999999761581421,0.8999999761581421,0.8999999761581421,1.0);BwR.Io(16640);if(!a.k6){a.sr=FQ();if(F4(Dj(a.sr,a.lR),N(8000))){a.Jg();a.lR=FQ();}a.f0.No(BwN.IZ());}a.lr.tg(a.eY);b=0;while(b<a.l9.h){c=a.l9.p(b);a.lr.GE(c,a.mS);b=b+1|0;}a.lr.GE(a.Ew,a.mS);a.lr.M();if(a.qF){a.nm.tg(a.eY);a.f0.KP();a.nm.M();}a.kq.hF();d=a.pD;e=a.kq;f=BwN.SW();g=a.s$;h=a.Ey;i=H();I(V(I(V(I(V(I(i,B(402)),f),B(403)),g),B(404)),h),B(405));j=P(i);i=BwN;k=i.bh()-14|0;d.Bf(e,j,30.0,
k);a.pD.Bf(a.kq,B(406),20.0,30.0);a.kq.M();}
function Bi6(a,b,c){var d;a.HS.zv(b,c,0);a.sz.zv(b,c,1);d=a.sz.Tz();d.eT();a.kq.xq(d.eo);}
function A5K(a){}
function Bh$(a){}
function BaS(a){a.f0.cJ();a.tQ.cJ();a.tD.cJ();a.xB.cJ();a.p_.cJ();}
function AYZ(a,b){if(b==62){a.k6=a.k6?0:1;if(!a.k6)a.lR=BE(FQ(),Dj(a.lR,a.sr));}else if(b==66){if(!BwN.yy())BwN.RC(BwN.Jp());else BwN.Ln(0,0);}else if(b==32)a.qF=a.qF?0:1;return 0;}
function Be6(a,b){return 0;}
function A8C(a,b){return 0;}
function BiC(a,b,c,d,e){var f,g,h,i,j,k;if(!e){f=a.eY.Q7(b,c);g=1.0;AVt();BBI.L(f.mQ.dk(g));((BBJ.L(f.nB)).dk(200.0)).eE(BBI);a.jY.Nr(null);a.jY.UL(1.0);a.f0.Rg(BBI,BBJ,a.jY);if(a.jY.PJ()){h=a.jY.KD();i=Em();j=h.R8();k=H();Qp(I(k,B(407)),j);i.e4(P(k));}}return 0;}
function BbW(a,b,c,d,e){return 0;}
function A0b(a,b,c,d){return 0;}
function A9c(a,b,c){return 0;}
function AXu(a,b,c){return 0;}
function A$z(){BBI=S();BBJ=S();}
var AEO=D();
var AEk=D(Be);
function BtG(){var a=new AEk();ATT(a);return a;}
function ATT(a){Cc(a);}
function A4z(a,b,c,d,e){var f,g,h;f=b.c$.el;Cq();g=BBP;h=f.he((B2(e,g)).eg);ET(b,c,h);}
var AEh=D(Be);
function BsH(){var a=new AEh();Bjx(a);return a;}
function Bjx(a){Cc(a);}
function A9T(a,b,c,d,e){var f;Cq();f=B2(e,BBP);ER(b,c,f.e8,f.e7,f.fr,f.fs);}
var Qr=D();
var BBQ=null;function BBR(){BBR=M(Qr);BdB();}
function BdB(){BBQ=Bf((ACk()).data.length);BBQ.data[Br(BBS)]=1;BBQ.data[Br(BBT)]=2;}
var AEp=D(Be);
function BoF(){var a=new AEp();AVJ(a);return a;}
function AVJ(a){Cc(a);}
function Bld(a,b,c,d,e){var f;Cq();f=B2(e,BBU);ER(b,c,f.e8,f.e7,f.fr,f.fs);}
var AEl=D(Be);
function Bo5(){var a=new AEl();A6H(a);return a;}
function A6H(a){Cc(a);}
function AYI(a,b,c,d,e){var f,g,h;f=b.c$.el;Cq();g=BBV;h=f.he((B2(e,g)).eg);ET(b,c,h);}
var AEj=D(Be);
function Bob(){var a=new AEj();Biy(a);return a;}
function Biy(a){Cc(a);}
function Bdm(a,b,c,d,e){CN();GW(b,c,(B2(e,BBW)).eb);}
var AEo=D(Be);
function BoI(){var a=new AEo();A8O(a);return a;}
function A8O(a){Cc(a);}
function A0z(a,b,c,d,e){var f,g,h;f=b.c$.el;Cq();g=BBU;h=f.he((B2(e,g)).eg);ET(b,c,h);}
var G8=D(CS);
var BBX=null;var BBY=null;function BBZ(){BBZ=M(G8);A9r();}
function A9r(){BBX=BN();BBY=BN();}
var AKk=D(G8);
function LZ(){var a=this;C.call(a);a.Sg=null;a.D1=0.0;a.Mw=0.0;a.it=null;a.km=null;a.pz=null;a.eS=0;}
function ABP(a,b,c,d){var e,f;K(a);a.it=B(408);D5();a.km=Bvu;a.pz=Bvu;if(c<=0.0){e=new CH;f=H();Jv(I(f,B(409)),c);EO(e,P(f));G(e);}if(d>0.0){a.Sg=b;a.D1=c;a.Mw=d;return;}e=new CH;f=H();Jv(I(f,B(410)),d);EO(e,P(f));G(e);}
function RO(a,b){if(b!==null){a.km=b;a.xQ(b);return a;}G(Bl(B(411)));}
function BjL(a,b){}
function N_(a,b){if(b!==null){a.pz=b;a.sS(b);return a;}G(Bl(B(411)));}
function Ba$(a,b){}
function Lc(a,b,c,d){var e,f,g,$$je;if(!(a.eS==2&&!d)&&a.eS!=3){a.eS=d?2:1;while(true){try{e=a.J3(b,c);}catch($$e){$$je=R($$e);if($$je instanceof Bs){f=$$je;G(A$o(f));}else{throw $$e;}}if(e.iP())return e;if(e.kC()){if(d&&CK(b)){g=a.km;D5();if(g===Bvu)return Cj(Bj(b));if(Bj(c)<=a.it.j())return Bvx;b.gv(Cr(b)+Bj(b)|0);if(a.km===Bvv)K9(c,a.it);}return e;}if(e.CB()){g=a.km;D5();if(g===Bvu)return e;if(a.km===Bvv){if(Bj(c)<a.it.j())return Bvx;K9(c,a.it);}b.gv(Cr(b)+e.j()|0);}else if(e.wl()){g=a.pz;D5();if(g===Bvu)break;if
(a.pz===Bvv){if(Bj(c)<a.it.j())return Bvx;K9(c,a.it);}b.gv(Cr(b)+e.j()|0);}}return e;}G(IO());}
function NE(a,b){if(a.eS!=3&&a.eS!=2)G(IO());a.eS=3;return a.Lr(b);}
function ALZ(a){a.eS=0;a.xp();return a;}
function AEa(a,b){var c,d,e;if(a.eS&&a.eS!=3)G(IO());if(!Bj(b))return ABy(0);if(a.eS)ALZ(a);c=ABy(Bm(8,Bj(b)*a.D1|0));while(true){d=Lc(a,b,c,0);if(d.kC())break;if(d.iP())c=QV(a,c);if(!d.nM())continue;d.pj();}e=Lc(a,b,c,1);if(e.nM())e.pj();while(true){e=NE(a,c);if(e.kC())break;c=QV(a,c);}N3(c);return c;}
function QV(a,b){var c,d,e;c=Rk(b);d=c.data;d=Mz(c,Bm(8,d.length*2|0));e=N5(d);e.qm(Cr(b));return e;}
function AX4(a,b){Bz();return Bvy;}
function A$6(a){}
function DX(){var a=this;LZ.call(a);a.ER=null;a.Hx=null;}
function Iq(a,b,c,d){ABP(a,b,c,d);a.ER=CE(512);a.Hx=Ck(512);}
function A2W(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.ER;e=0;f=0;g=a.Hx;a:{while(true){if((e+32|0)>f&&CK(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=BH(Bj(b)+j|0,i.length);b.Df(d,j,f-j|0);e=0;}if(!CK(c)){if(!CK(b)&&e>=f){Bz();k=Bvy;}else{Bz();k=Bvx;}break a;}i=g.data;l=0;m=BH(Bj(c),i.length);n=Bpb(b,c);k=a.oB(d,e,f,g,l,m,n);e=n.Dq;if(k===null&&l==n.sy){Bz();k=Bvy;}j=n.sy;c.Wn(g,0,j);if(k!==null)break;}}b.gv(Cr(b)-(f-e|0)|0);return k;}
var Yg=D(DX);
function Bpl(a){var b=new Yg();BcZ(b,a);return b;}
function BcZ(a,b){Iq(a,b,0.3333333432674408,0.5);}
function BkJ(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(h.d1(2))break a;Bz();i=Bvy;break a;}n=k+1|0;o=j[k];if(!FS(a,o)){c=n+(-2)|0;i=Cj(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|o&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(h.d1(3))break a;Bz();i=Bvy;break a;}n=k+1|0;o=j[k];k=n+1|0;p=j[n];if(!FS(a,o))break b;if(!FS(a,p))break b;q
=((l&15)<<12|(o&63)<<6|p&63)&65535;if(L0(q)){c=k+(-3)|0;i=Cj(3);break a;}j=e.data;m=f+1|0;j[f]=q;}else{if((l&248)!=240){c=k+(-1)|0;i=Cj(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(h.d1(4))break a;Bz();i=Bvy;break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.ey(2))break a;Bz();i=Bvx;break a;}n=k+1|0;o=j[k];m=n+1|0;p=j[n];k=m+1|0;r=j[m];if(!FS(a,o))break c;if(!FS(a,p))break c;if(!FS(a,r))break c;j=e.data;s=(l&7)<<18|(o&63)<<12|(p&63)<<6|r&63;n=f+1|0;j[f]=G6(s);m=n+1|0;j[n]=GF(s);}c=k;f=m;}break a;}c=k+(-3)|0;i=Cj(1);break a;}c
=k+(-3)|0;i=Cj(1);}h.eF(c);h.d7(f);return i;}
function FS(a,b){return (b&192)!=128?0:1;}
var Kh=D();
var XG=D();
function BhI(){return $rt_globals.window.localStorage;}
var AM3=D(Da);
function Bpr(a,b,c){var d=new AM3();A0o(d,a,b,c);return d;}
function A0o(a,b,c,d){Gr(a,b,c,d);}
function AOz(a,b,c,d){var e;a:{while(true){if((b+a.bD.cr()|0)>d.K())break a;e=a.bD.bR(b,c);if(e<1)break;b=b+e|0;}}return a.k.e(b,c,d);}
function AJ2(){var a=this;C.call(a);a.tV=null;a.Iu=null;a.Dq=0;a.sy=0;}
function Bpb(a,b){var c=new AJ2();Be4(c,a,b);return c;}
function Be4(a,b,c){K(a);a.tV=b;a.Iu=c;}
function BeZ(a){return CK(a.tV);}
function BbI(a,b){return Bj(a.tV)<b?0:1;}
function A8z(a,b){return Bj(a.Iu)<b?0:1;}
function BjG(a,b){a.Dq=b;}
function Bhi(a,b){a.sy=b;}
var Mr=D(0);
var Xf=D();
function Btu(){var a=new Xf();A8p(a);return a;}
function A8p(a){K(a);}
function AOK(a,b,c){c.x9();}
var AEt=D(Be);
function Bt6(){var a=new AEt();AV9(a);return a;}
function AV9(a){Cc(a);}
function A1U(a,b,c,d,e){var f;Cq();f=B2(e,BB0);ER(b,c,f.e8,f.e7,f.fr,f.fs);}
var D_=D(Cs);
function BB1(){var a=new D_();LV(a);return a;}
function LV(a){Gx(a);}
var Od=D(D_);
function BtZ(){var a=new Od();Bdb(a);return a;}
function Bdb(a){LV(a);}
var AEq=D(Be);
function Bnm(){var a=new AEq();Bh3(a);return a;}
function Bh3(a){Cc(a);}
function BlP(a,b,c,d,e){var f,g,h;ALd();if(C0(e,BB2)){f=b.c$.el;g=BB2;h=f.he((B2(e,g)).Nm);ET(b,c,h);}}
var AEm=D(Be);
function Br1(){var a=new AEm();A42(a);return a;}
function A42(a){Cc(a);}
function A7Q(a,b,c,d,e){var f;Cq();f=B2(e,BBV);ER(b,c,f.e8,f.e7,f.fr,f.fs);}
var AEr=D(Be);
function Bta(){var a=new AEr();A8A(a);return a;}
function A8A(a){Cc(a);}
function Bbm(a,b,c,d,e){var f,g,h;f=b.c$.el;Cq();g=BB0;h=f.he((B2(e,g)).eg);ET(b,c,h);}
var AHC=D(E1);
function TH(){X.call(this);this.O_=null;}
function Bnn(a){var b=new TH();Blx(b,a);return b;}
function Blx(a,b){a.O_=b;Bo(a);}
function A3H(a,b){return AAN(b);}
var Ml=D(0);
function N$(){var a=this;C.call(a);a.ju=null;a.vz=null;}
var BB3=null;function AUd(){AUd=M(N$);BaH();}
function A$5(){var a=new N$();Wg(a);return a;}
function Hk(){AUd();return BB3;}
function Wg(a){AUd();K(a);a.ju=$rt_globals.window;}
function Bbl(a){var b;b=a.ju.document;return b;}
function BiL(a,b){a.vz=b;$rt_globals.requestAnimationFrame(BZ(a,"onAnimationFrame"));}
function AFV(a,b){var c,$p,$z;$p=0;if(BaT()){var $T=RA();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.vz;a.vz=null;$p=1;case 1:c.dp();if(C1()){break _;}return;default:A6u();}}RA().s(a,b,c,$p);}
function Bdp(a){var b;b=a.ju.location;return b;}
function A$T(a){return a.ju.document.documentElement.clientWidth;}
function A8T(a){return a.ju.document.documentElement.clientHeight;}
function A9R(a,b,c){var d;d=Gp(c,"handleEvent");a.ju.addEventListener($rt_ustr(b),BZ(d,"handleEvent"));}
function BaH(){BB3=A$5();}
function AJh(a,b){var c,$p,$z;$p=0;if(BaT()){var $T=RA();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=b;$p=1;case 1:a.a0o(c);if(C1()){break _;}return;default:A6u();}}RA().s(a,b,c,$p);}
function H2(){var a=this;BF.call(a);a.jf=null;a.jg=null;a.jh=null;}
var BB4=null;function ANn(){ANn=M(H2);A_2();}
function BB5(){var a=new H2();NM(a);return a;}
function BrU(a){var b=new H2();W6(b,a);return b;}
function AAA(a){var b,c,d,e;b=BmF(a);c=Bqx(a);d=BmD(a);e=AJF(BZ(b,"drawLineJS"),BZ(c,"drawContactPointJS"),BZ(d,"getDebugFunctionJS"));a.dc(N(e),1);}
function NM(a){ANn();BY(a);a.jf=S();a.jg=S();a.jh=S();AAA(a);}
function AMB(a,b){}
function W6(a,b){ANn();BY(a);a.jf=S();a.jg=S();a.jh=S();}
function A_2(){BB4=BrU(0);}
function AJF(b,c,d){var callback=new $rt_globals.Bullet.MyDebugDraw();callback.drawLine=b;callback.drawContactPoint=c;callback.getDebugMode=d;return $rt_globals.Bullet.getPointer(callback);}
function ZC(){var a=this;H2.call(a);a.fd=null;a.SH=0;a.K2=0;a.UX=0;a.RK=null;a.xm=0;}
function Bo_(){var a=new ZC();A_Q(a);return a;}
function A_Q(a){NM(a);a.fd=BqE();a.SH=1;a.K2=1;a.UX=1;a.xm=0;}
function BjT(a,b,c,d){a.fd.k$(d.l,d.m,d.n,1.0);Qm(a.fd,b,c);}
function Bed(a,b,c,d,e,f){var g;a.fd.k$(f.l,f.m,f.n,1.0);g=0.03999999910593033;a.fd.OH(b.l-0.019999999552965164,b.m-0.019999999552965164,b.n+0.019999999552965164,g,g,g);a.fd.k$(1.0,0.0,0.0,1.0);Qm(a.fd,b,(c.dk(d+0.20000000298023224)).eE(b));}
function Bb4(a,b){a.xm=b;AMB(a,b);}
function A10(a){return a.xm;}
function A68(a,b){var c;a.RK=b;a.fd.xq(b.eo);c=a.fd;KG();c.qf(BAx);}
function AOM(a){a.fd.M();}
var Rd=D(0);
var Ls=D(BX);
var W9=D(Ls);
var AEw=D();
var Yv=D(DX);
function Bng(a){var b=new Yv();AZM(b,a);return b;}
function AZM(a,b){Iq(a,b,1.0,1.0);}
function ATf(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;while(c<d&&f<g){j=e.data;k=b.data;l=c+1|0;m=k[c]&255;n=f+1|0;j[f]=m&65535;c=l;f=n;}h.eF(c);h.d7(f);return i;}
function QZ(){var a=this;Gd.call(a);a.q$=0;a.fo=null;}
function BpE(a,b){var c=new QZ();AZQ(c,a,b);return c;}
function AZQ(a,b,c){Pf(a,b,null);a.q$=c;}
function Hz(){BF.call(this);this.wR=null;}
var BB6=null;function A4j(){A4j=M(Hz);Bjp();}
function BB7(){var a=new Hz();LO(a);return a;}
function Bqa(a){var b=new Hz();AFB(b,a);return b;}
function LO(a){A4j();BY(a);a.wR=TU(0);}
function AFB(a,b){A4j();BY(a);a.wR=TU(0);}
function A8k(a,b){a.wR.nC(b);}
function Bjp(){BB6=Bqa(0);}
var FG=D(0);
var XD=D(Ef);
var AMb=D();
var ZR=D(Ba);
function BmE(){var a=new ZR();AVL(a);return a;}
function AVL(a){BG(a);}
function A2i(a){return (Dv()).bN(65,90);}
var Fm=D(Bc);
var BB8=null;var BB9=null;var BB$=null;var BB_=null;function Brv(){Brv=M(Fm);A1c();}
function Ss(a,b){var c=new Fm();AAd(c,a,b);return c;}
function AAd(a,b,c){Brv();B$(a,b,c);}
function A1c(){BB8=Ss(B(412),0);BB9=Ss(B(413),1);BB$=Ss(B(414),2);BB_=J(Fm,[BB8,BB9,BB$]);}
var AFl=D(CF);
function ACX(){BL.call(this);this.GP=null;}
function Btw(a){var b=new ACX();BgW(b,a);return b;}
function BgW(a,b){CX(a);a.GP=b;}
function A9p(a,b,c,d){var e,f;a:{if(b!=d.K()){if(!b)break a;if(d.ks()&&b==d.eC())break a;e=a.GP;f=b-1|0;if(e.HK(c.g(f),c.g(b)))break a;}return (-1);}return a.k.e(b,c,d);}
function ATw(a,b){return 0;}
function A7J(a){return B(415);}
var CP=D();
function ES(a){K(a);}
function A6z(a,b,c){return 1;}
var VX=D(BX);
function AEA(){Be.call(this);this.Bk=null;}
function Bru(){var a=new AEA();BgJ(a);return a;}
function BgJ(a){Cc(a);a.Bk=BS();}
function A_N(a,b,c,d,e){E0(b,c,(a.Bk.b$(b.c6.eo)).ii(d.dN));}
function Lt(){var a=this;C.call(a);a.d4=null;a.ew=null;a.Be=0;a.PD=0;a.wx=0;a.l2=0;a.qb=0;}
function Bdz(a,b,c){var d=new Lt();AIs(d,a,b,c);return d;}
function AIs(a,b,c,d){K(a);a.l2=0;a.qb=0;a.PD=b;a.d4=d;a.ew=J0(CJ(a.d4.cn/4|0,c));KV(a.ew);a.Be=BwS.jS();a.wx=!b?35048:35044;}
function ATv(a){return a.d4;}
function A0C(a){return BQ(a.ew)/(a.d4.cn/4|0)|0;}
function A4Y(a){return DC(a.ew)/(a.d4.cn/4|0)|0;}
function AMQ(a){if(a.qb){BwS.fl(34962,BQ(a.ew),a.ew,a.wx);a.l2=0;}}
function BfF(a,b,c,d){a.l2=1;RM(b,a.ew,d,c);a.ew.vR(0);a.ew.rl(d);AMQ(a);}
function A_u(a,b,c){var d,e,f,g,h,i;d=BwS;d.c7(34962,a.Be);if(a.l2){d.fl(34962,BQ(a.ew),a.ew,a.wx);a.l2=0;}a:{e=Dp(a.d4);if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data;h=CU(a.d4,f);i=g[f];if(i>=0){b.mW(i);b.nL(i,h.dm,h.fW,h.gf,a.d4.cn,h.cP);}f=f+1|0;}}f=0;while(f<e){h=CU(a.d4,f);i=b.mZ(h.eK);if(i>=0){b.mW(i);b.nL(i,h.dm,h.fW,h.gf,a.d4.cn,h.cP);}f=f+1|0;}}a.qb=1;}
function A7P(a,b,c){var d,e,f,g;a:{d=BwS;e=Dp(a.d4);if(c===null){f=0;while(f<e){b.E_((CU(a.d4,f)).eK);f=f+1|0;}}else{f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0)b.v9(g);f=f+1|0;}}}d.c7(34962,0);a.qb=0;}
var ADs=D(Lt);
function BpM(a,b){var c=new ADs();BhO(c,a,b);return c;}
function BhO(a,b,c){AIs(a,0,b,c);}
var AEF=D(Be);
function Bn7(){var a=new AEF();A1N(a);return a;}
function A1N(a){Cc(a);}
function A4K(a,b,c,d,e){CN();GW(b,c,(B2(e,BCa)).eb);}
var AEC=D(Be);
function Bso(){var a=new AEC();A2T(a);return a;}
function A2T(a){Cc(a);}
function A6L(a,b,c,d,e){var f,g,h;f=b.c$.el;Cq();g=BCb;h=f.he((B2(e,g)).eg);ET(b,c,h);}
var Y2=D(Ba);
function Bp9(){var a=new Y2();ATQ(a);return a;}
function ATQ(a){BG(a);}
function BhW(a){return (Dv()).bN(97,122);}
function AEB(){Be.call(this);this.EJ=null;}
function BpI(){var a=new AEB();AVK(a);return a;}
function AVK(a){Cc(a);a.EJ=Ts();}
function AWp(a,b,c,d,e){V2(b,c,((a.EJ.HU(d.dN)).Gu()).D$());}
var AEE=D(Be);
function Bpa(){var a=new AEE();A_h(a);return a;}
function A_h(a){Cc(a);}
function ARq(a,b,c,d,e){Ga();GJ(b,c,(B2(e,BBk)).nw);}
var AHd=D(Dc);
var Kf=D(FW);
var AHc=D(Kf);
function AGT(){var a=this;C.call(a);a.el=null;a.pU=0;a.vn=0;a.sA=0;a.hP=0;a.Ej=0.0;a.zU=0.0;a.rp=0;a.qM=0;}
function Bq4(a){var b=new AGT();Bk6(b,a);return b;}
function Bk6(a,b){K(a);a.el=b;}
function Bi9(a){BwR.dU(2929);a.hP=0;BwR.jD(1);a.rp=1;BwR.dU(3042);a.pU=0;BwR.dU(2884);a.sA=0;a.vn=0;a.qM=0;a.el.hF();}
function Blz(a){if(a.hP)BwR.dU(2929);if(!a.rp)BwR.jD(1);if(a.pU)BwR.dU(3042);if(a.qM>0)BwR.dU(2884);a.el.M();}
function AQ$(a,b){var c;if(a.rp!=b){c=BwR;a.rp=b;c.jD(b);}}
function A9j(a,b,c,d){var e,f,g;e=!a.hP?0:1;f=!b?0:1;if(a.hP!=b){a.hP=b;if(!f)BwR.dU(2929);else{BwR.m$(2929);BwR.rW(b);}}if(f){if(!(e&&a.hP==b)){g=BwR;a.hP=b;g.rW(b);}if(!(e&&a.Ej===c&&a.zU===d)){g=BwR;a.Ej=c;a.zU=d;g.Cr(c,d);}}}
function BkL(a,b,c,d){if(b!=a.pU){a.pU=b;if(!b)BwR.dU(3042);else BwR.m$(3042);}if(b&&!(a.vn==c&&a.sA==d)){BwR.Ii(c,d);a.vn=c;a.sA=d;}}
function AUF(a,b){if(b!=a.qM){a.qM=b;if(b!=1028&&b!=1029&&b!=1032)BwR.dU(2884);else{BwR.m$(2884);BwR.BJ(b);}}}
var XN=D(CQ);
var Kv=D(BX);
var AEy=D(Kv);
var Wj=D(Ba);
function BpS(){var a=new Wj();AQj(a);return a;}
function AQj(a){BG(a);}
function AZ8(a){return Bp5(a);}
function AHz(){var a=this;C.call(a);a.fM=null;a.d8=null;a.t5=0;a.My=0;a.j_=0;a.qy=0;a.B3=0;}
function BlH(a,b){var c=new AHz();A$1(c,a,b);return c;}
function A$1(a,b,c){K(a);a.j_=1;a.qy=0;a.d8=P1(c*2|0);a.My=1;a.B3=!b?35048:35044;a.fM=a.d8.yO();a.fM.f_();a.d8.f_();a.t5=AMu(a);}
function AMu(a){var b;b=BwS.jS();BwS.c7(34963,b);BwS.fl(34963,DC(a.d8),null,a.B3);BwS.c7(34963,0);return b;}
function A0i(a){return BQ(a.fM);}
function A6f(a){return DC(a.fM);}
function BbU(a,b,c,d){a.j_=1;a.fM.d_();a.fM.Hn(b,c,d);a.fM.f_();a.d8.dI(0);a.d8.dL(d<<1);if(a.qy){BwS.oj(34963,0,BQ(a.d8),a.d8);a.j_=0;}}
function A3T(a){a.j_=1;return a.fM;}
function AV3(a){if(!a.t5)G(Bh(B(416)));BwS.c7(34963,a.t5);if(a.j_){a.d8.dL(BQ(a.fM)*2|0);BwS.oj(34963,0,BQ(a.d8),a.d8);a.j_=0;}a.qy=1;}
function AP4(a){BwS.c7(34963,0);a.qy=0;}
var ADG=D(BL);
function Bnt(){var a=new ADG();A1S(a);return a;}
function A1S(a){CX(a);}
function AVC(a,b,c,d){if(b!=d.Td())return (-1);return a.k.e(b,c,d);}
function A5o(a,b){return 0;}
function A71(a){return B(417);}
var H7=D(BF);
var BCc=null;function Bfx(){Bfx=M(H7);ASp();}
function Bsd(a){var b=new H7();AGZ(b,a);return b;}
function BCd(){var a=new H7();J7(a);return a;}
function AGZ(a,b){Bfx();BY(a);}
function J7(a){Bfx();BY(a);}
function ASp(){BCc=Bsd(0);}
var AEK=D(Be);
function BrH(){var a=new AEK();AO0(a);return a;}
function AO0(a){Cc(a);}
function Bh6(a,b,c,d,e){var f,g,h;f=b.c$.el;Cq();g=BCe;h=f.he((B2(e,g)).eg);ET(b,c,h);}
var AEH=D(Be);
function Bnr(){var a=new AEH();Bks(a);return a;}
function Bks(a){Cc(a);}
function A4s(a,b,c,d,e){var f;Cq();f=B2(e,BCe);ER(b,c,f.e8,f.e7,f.fr,f.fs);}
var Do=D(BF);
var BCf=null;var Byo=null;var Byp=null;var BCg=null;var BCh=null;var BCi=null;var BCj=null;var BvH=null;var BCk=null;var BCl=null;function Ey(){Ey=M(Do);APq();}
function BmM(){var a=new Do();ZP(a);return a;}
function GB(a){var b=new Do();Oq(b,a);return b;}
function ZP(a){Ey();Oq(a,1);}
function Oq(a,b){Ey();BY(a);a.dc(!b?W:N(TY(0.0,0.0,0.0)),b);}
function Es(b,c){Ey();c.SB(b.l,b.m,b.n);}
function PN(b,c){var d,e,f;Ey();d=b.QX();e=b.OD();f=b.O6();c.I(d,e,f);}
function FD(b,c){Ey();BCj.pw(b);PN(BCj,c);}
function AQb(a){return AHr(Y(a.bb));}
function A07(a){return Vm(Y(a.bb));}
function Bbp(a){return YY(Y(a.bb));}
function ASb(a,b,c,d){AJi(Y(a.bb),b,c,d);}
function APq(){BCf=GB(0);Byo=GB(1);Byp=GB(1);BCg=GB(1);BCh=GB(1);BCi=GB(1);BCj=GB(0);BvH=S();BCk=S();BCl=S();}
function TY(b,c,d){var jsObj=new $rt_globals.Bullet.btVector3(b,c,d);return $rt_globals.Bullet.getPointer(jsObj);}
function AHr(b){var jsObj=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.btVector3);var returnedJSObj=jsObj.getX();return returnedJSObj;}
function Vm(b){var jsObj=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.btVector3);var returnedJSObj=jsObj.getY();return returnedJSObj;}
function YY(b){var jsObj=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.btVector3);var returnedJSObj=jsObj.getZ();return returnedJSObj;}
function AJi(b,c,d,e){var jsObj=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.btVector3);jsObj.setValue(c,d,e);}
var AED=D(Be);
function Bsr(){var a=new AED();AOY(a);return a;}
function AOY(a){Cc(a);}
function AYF(a,b,c,d,e){var f;Cq();f=B2(e,BCb);ER(b,c,f.e8,f.e7,f.fr,f.fs);}
var AEJ=D(Be);
function Bst(){var a=new AEJ();A7X(a);return a;}
function A7X(a){Cc(a);}
function AT$(a,b,c,d,e){CN();GW(b,c,(B2(e,BCm)).eb);}
var UC=D();
var NH=D(C7);
function BCn(a){var b=new NH();AIa(b,a);return b;}
function AIa(a,b){FE(a,b);}
function A61(a,b,c,d){var e;e=a.k5();d.bH(e,b-d.eN(e)|0);return a.k.e(b,c,d);}
function A98(a){return B(418);}
function BhY(a,b){return 0;}
var AEI=D(Be);
function BpN(){var a=new AEI();ATx(a);return a;}
function ATx(a){Cc(a);}
function A$d(a,b,c,d,e){CN();GW(b,c,(B2(e,BCo)).eb);}
var ACb=D(EZ);
var AL_=D(Hp);
var AI7=D(Ja);
var Oi=D();
var BCp=null;function Go(){Go=M(Oi);AVN();}
function KZ(b,c){Go();return b+BCp.Sc((c-b|0)+1|0)|0;}
function Jz(b,c){Go();return b+BCp.J5()*(c-b);}
function Lb(b){var c,d;Go();if(!b)return 1;c=b+(-1)|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function NZ(b){Go();return b&&!(b&(b-1|0))?1:0;}
function EE(b){Go();return De(b)>9.999999974752427E-7?0:1;}
function D9(b,c){Go();return De(b-c)>9.999999974752427E-7?0:1;}
function YG(b,c,d){Go();return De(b-c)>d?0:1;}
function AVN(){BCp=BsS();}
function ACm(){Ca.call(this);this.ty=0;}
function Bo1(a){var b=new ACm();BiF(b,a);return b;}
function BiF(a,b){DK(a);a.bY=2;a.ty=Gg(Fp(b));}
function A1f(a,b,c){var d,e,f;d=b+1|0;e=c.g(b);f=c.g(d);return a.ty!=Gg(Fp(D4(e,f)))?(-1):2;}
function Bl2(a){var b,c;b=Ps(FJ(a.ty));c=H();I(I(c,B(419)),b);return P(c);}
var Pc=D(0);
function YW(){var a=this;C.call(a);a.e_=null;a.nY=null;a.mP=null;a.my=null;a.nD=null;}
function Bhm(){var a=new YW();Bjc(a);return a;}
function Bjc(a){K(a);a.e_=null;}
function AOe(a,b){a.e_=b.e_;a.nY=b.nY;a.mP=b.mP;a.my=b.my;a.nD=b.nD;}
function API(a){var b,c;b=N(a.e_===null?0:a.e_.eB);c=BE(Bn(N(811),b),N(a.e_===null?0:a.e_.TZ()));c=BE(Bn(N(811),c),N(a.nY===null?0:FT(a.nY)));c=BE(Bn(N(811),c),N(a.mP===null?0:FT(a.mP)));c=BE(Bn(N(811),c),N(a.my===null?0:I1(a.my)));c=BE(Bn(N(811),c),N(a.nD===null?0:I1(a.nD)));return Y(Ex(c,EG(c,32)));}
function Wf(){var a=this;C.call(a);a.UB=null;a.ig=null;a.uC=null;a.ti=0;a.C1=0.0;a.qP=0.0;a.sI=0.0;a.l1=0.0;a.us=0.0;a.fi=0.0;a.m4=0.0;a.jk=0.0;a.lg=0.0;a.Ad=0.0;a.mk=0.0;a.Ds=0.0;a.nk=0;a.hS=null;a.jb=null;a.x6=0.0;a.v4=0.0;a.Hg=null;a.zc=null;a.An=null;}
function BqN(a,b){var c=new Wf();Be1(c,a,b);return c;}
function Be1(a,b,c){K(a);a.fi=1.0;a.Ad=1.0;a.mk=1.0;a.Ds=1.0;a.hS=Bb($rt_arraycls(L2),128);a.v4=1.0;a.zc=ID([120,101,97,111,110,115,114,99,117,109,118,119,122]);a.An=ID([77,78,66,68,67,69,70,75,65,71,72,73,74,76,79,80,81,82,83,84,85,86,87,88,89,90]);a.uC=b;a.ti=c;a.Wi(b,c);}
function AQN(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,$$je;if(a.ig!==null)G(C5(B(420)));a.UB=b.Ue();d=Bo4(Bq6(b.sx()),512);a:{b:{try{e=d.mh();if(e===null)G(Bh(B(421)));f=e.fc(e.S5(B(422))+8|0);g=(f.c0(0,f.DT(32))).yl(B(423),4);h=g.data;if(h.length!=4)G(Bh(B(424)));a.C1=Cg(h[0]);a.qP=Cg(h[1]);a.sI=Cg(h[2]);a.l1=Cg(h[3]);i=a.C1+a.sI;f=d.mh();if(f===null)G(Bh(B(425)));j=f.yl(B(39),9);h=j.data;k=h.length;if(k<3)G(Bh(B(426)));if(!h[1].ff(B(427)))G(Bh(B(428)));a.us
=Cg(h[1].fc(11));if(!h[2].ff(B(429)))G(Bh(B(430)));c:{l=Cg(h[2].fc(5));m=1;if(k<6)n=m;else if(h[5]===null)n=m;else if(!h[5].ff(B(431)))n=m;else{try{n=Bm(1,Cg(h[5].fc(6)));m=n;break c;}catch($$e){$$je=R($$e);if($$je instanceof CD){}else{throw $$e;}}n=m;}}a.ig=Bb(B1,n);o=0;d:{e:{f:{while(true){if(o>=n)break d;f=d.mh();if(f===null)G(Bh(B(432)));g:{p=GY(GT(B(433)),f);if(F$(p)){q=Gi(p,1);try{r=Cg(q);if(r!=o)break f;break g;}catch($$e){$$je=R($$e);if($$je instanceof CD){s=$$je;break e;}else{throw $$e;}}}}f=GY(GT(B(434)),
f);if(!F$(f))break;t=Gi(f,1);a.ig.data[o]=(((b.Qb()).Pu(t)).gx()).KC(B(435),B(50));o=o+1|0;}G(Bh(B(436)));}try{G(Bh((((H()).c(B(437))).c(q)).d()));}catch($$e){$$je=R($$e);if($$je instanceof CD){s=$$je;}else{throw $$e;}}}G(QW((((H()).c(B(438))).c(q)).d(),s));}a.jk=0.0;h:{while(true){f=d.mh();if(f===null)break;if(f.ff(B(439)))break h;if(f.ff(B(440)))break h;if(!f.ff(B(441)))continue;u=APQ();v=AAC(f,B(442));v.Q();v.Q();w=Cg(v.Q());if(w<=0)a.jb=u;else{if(w>65535)continue;a.Bi(w,u);}u.g6=w;v.Q();u.vv=Cg(v.Q());v.Q();u.vw
=Cg(v.Q());v.Q();u.dg=Cg(v.Q());v.Q();u.cU=Cg(v.Q());v.Q();u.fU=Cg(v.Q());v.Q();if(c)u.j9=Cg(v.Q());else u.j9= -(u.cU+Cg(v.Q())|0)|0;v.Q();u.iu=Cg(v.Q());if(v.zg())v.Q();i:{if(v.zg())try{u.kR=Cg(v.Q());break i;}catch($$e){$$je=R($$e);if($$je instanceof CD){}else{throw $$e;}}}if(u.dg>0&&u.cU>0)a.jk=ALf(l+u.j9,a.jk);}}a.jk=a.jk+a.sI;j:{while(true){f=d.mh();if(f===null)break;if(!f.ff(B(443)))break j;v=AAC(f,B(442));v.Q();v.Q();x=Cg(v.Q());v.Q();y=Cg(v.Q());if(x<0)continue;if(x>65535)continue;if(y<0)continue;if
(y>65535)continue;u=a.ja(x&65535);v.Q();z=Cg(v.Q());if(u!==null)u.Kz(y,z);}}ba=0;bb=0.0;bc=0.0;bd=0.0;be=0.0;bf=0.0;bg=0.0;bh=0.0;if(f!==null&&f.ff(B(440))){ba=1;v=AAC(f,B(442));v.Q();v.Q();bb=E_(v.Q());v.Q();bc=E_(v.Q());v.Q();bd=E_(v.Q());v.Q();be=E_(v.Q());v.Q();bf=E_(v.Q());v.Q();bg=E_(v.Q());v.Q();bh=E_(v.Q());}bi=a.ja(32);if(bi===null){bi=APQ();bi.g6=32;bj=a.ja(108);if(bj===null)bj=a.Gs();bi.iu=bj.iu;a.Bi(32,bi);}if(!bi.dg){bi.dg=a.l1+bi.iu+a.qP|0;bi.fU= -a.l1|0;}a.x6=bi.iu;bk=null;h=a.zc.data;k=h.length;bl
=0;k:{while(bl<k){bm=h[bl];bk=a.ja(bm);if(bk!==null)break k;bl=bl+1|0;}}if(bk===null)bk=a.Gs();a.v4=bk.cU-i;bn=null;h=a.An.data;n=h.length;k=0;l:{while(k<n){bo=h[k];bn=a.ja(bo);if(bn!==null)break l;k=k+1|0;}}if(bn!==null)a.fi=bn.cU;else{h=a.hS.data;n=h.length;k=0;while(k<n){m:{bp=h[k];if(bp!==null){bq=bp.data;bl=bq.length;br=0;while(true){if(br>=bl)break m;u=bq[br];if(u!==null&&u.cU&&u.dg)a.fi=HH(a.fi,u.cU);br=br+1|0;}}}k=k+1|0;}}a.fi=a.fi-i;a.m4=l-a.fi;a.lg= -a.us;if(c){a.m4= -a.m4;a.lg= -a.lg;}if(ba){a.m4
=bb;a.jk=bc;a.lg=bd;a.fi=be;a.us=bf;a.x6=bg;a.v4=bh;}}catch($$e){$$je=R($$e);if($$je instanceof Cs){s=$$je;break b;}else{f=$$je;break a;}}O_(d);return;}try{G(QW((((H()).c(B(444))).gL(b)).d(),s));}catch($$e){$$je=R($$e);f=$$je;}}O_(d);G(f);}
function A7i(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=c.EG();e=1.0/d.bk();f=1.0/d.bh();g=0.0;h=0.0;i=c.C6;j=c.C9;k=c.MJ();l=c.QQ();if(c instanceof Nh){m=c;g=m.TJ;h=(m.Sd-m.U3|0)-m.TI;}n=b.vv;o=b.vv+b.dg|0;p=b.vw;q=b.vw+b.cU|0;if(g<=0.0)k=o;else{n=n-g;if(n<0.0){b.dg=b.dg+n|0;b.fU=b.fU-n|0;n=0.0;}r=o-g;if(r<=k)k=r;else b.dg=b.dg-(r-k)|0;}if(h<=0.0)l=q;else{p=p-h;if(p<0.0){b.cU=b.cU+p|0;if(b.cU<0)b.cU=0;p=0.0;}r=q-h;if(r<=l)l=r;else{s=r-l;b.cU=b.cU-s|0;b.j9=b.j9+s|0;}}b.yn=i+n*e;b.EU=i+k*e;if(!a.ti){b.vD=j
+p*f;b.r2=j+l*f;}else{b.r2=j+p*f;b.vD=j+l*f;}}
function A4P(a,b,c){var d,e,f;d=a.hS.data;e=b/512|0;f=d[e];if(f===null){d=a.hS.data;f=Bb(L2,512);d[e]=f;}f.data[b&511]=c;}
function Bee(a){var b,c,d,e,f,g,h,i;b=a.hS.data;c=b.length;d=0;a:while(true){if(d>=c)G(Bh(B(445)));b:{e=b[d];if(e!==null){f=e.data;g=f.length;h=0;while(true){if(h>=g)break b;i=f[h];if(i!==null&&i.cU&&i.dg)break a;h=h+1|0;}}}d=d+1|0;}return i;}
function ARm(a,b){var c;c=a.hS.data[b/512|0];if(c===null)return null;return c.data[b&511];}
function AQv(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q;g=e-d|0;if(!g)return;h=a.nk;i=a.mk;j=b.bi;k=b.bg;j.Aj(g);b.bg.HT(g+1|0);while(true){a:{l=d+1|0;m=c.g(d);if(m!=13){n=a.ja(m);if(n===null){if(a.jb===null)break a;n=a.jb;}j.C(n);if(f!==null){o=f.iu;p=(o+f.O$(m)|0)*i;}else p=n.u1?0.0:( -n.fU|0)*i-a.l1;k.DF(p);if(!h)f=n;else if(m!=91)f=n;else if(l>=e)f=n;else if(c.g(l)!=91)f=n;else{l=l+1|0;f=n;}}}if(l>=e)break;d=l;}if(f!==null){q=f.u1?f.iu*i:(f.dg+f.fU|0)*i-a.qP;k.DF(q);}}
function ANs(a,b,c){var d,e,f,g,h;d=c-1|0;e=b.N;f=e.data;g=f[d].g6&65535;if(a.qn(g))return d;if(a.Aw(g))d=d+(-1)|0;a:{while(d>0){h=f[d].g6&65535;if(a.qn(h))break a;if(a.Aw(h))break a;d=d+(-1)|0;}return 0;}return d+1|0;}
function AQ6(a,b){var c,d,e,f;if(a.Hg===null)return 0;c=a.Hg.data;d=c.length;e=0;while(e<d){f=c[e];if(b==f)return 1;e=e+1|0;}return 0;}
function ARN(a,b){switch(b){case 9:case 10:case 13:case 32:break;default:return 0;}return 1;}
var AHh=D(C$);
function AEV(){var a=this;Ba.call(a);a.Ay=0;a.GI=0;}
function Q(a,b){var c=new AEV();BkM(c,a,b);return c;}
function BkM(a,b,c){BG(a);a.Ay=b;a.GI=c;}
function AWR(a){var b;b=(Dv()).bN(a.Ay,a.GI);return b;}
var Fg=D(Da);
function BoE(a,b,c){var d=new Fg();QU(d,a,b,c);return d;}
function QU(a,b,c,d){Gr(a,b,c,d);}
function BdR(a,b,c,d){var e;e=a.ba.e(b,c,d);if(e<0)e=a.k.e(b,c,d);return e;}
function A5D(a,b){OR(a,b);a.ba.T(b);}
var Xm=D(Hl);
function A_w(a,b){var c=new Xm();BeS(c,a,b);return c;}
function BeS(a,b,c){Of(a,b,c);}
var R6=D(F6);
var BCq=null;function BCr(){BCr=M(R6);BcY();}
function BcY(){BCq=BN();}
function AH9(){X.call(this);this.TD=null;}
function Bpk(a){var b=new AH9();A1w(b,a);return b;}
function A1w(a,b){a.TD=b;Bo(a);}
function A3l(a,b){return AAU(b);}
function Hq(){var a=this;C.call(a);a.cy=null;a.dj=null;a.dD=null;a.kr=null;a.h9=null;a.eo=null;a.hb=null;a.md=0.0;a.kI=0.0;a.lv=0.0;a.ng=0.0;a.ub=null;a.df=null;a.i8=null;}
function Ou(a){K(a);a.cy=S();a.dj=CR(0.0,0.0,(-1.0));a.dD=CR(0.0,1.0,0.0);a.kr=BS();a.h9=BS();a.eo=BS();a.hb=BS();a.md=1.0;a.kI=100.0;a.lv=0.0;a.ng=0.0;a.ub=BsO();a.df=S();a.i8=BmV(S(),S());}
function ATe(a,b,c,d){var e;((a.df.I(b,c,d)).fN(a.cy)).b0();if(!a.df.Bn()){e=a.df.BA(a.dD);if(De(e-1.0)<9.999999717180685E-10)(a.dD.L(a.dj)).dk((-1.0));else if(De(e+1.0)<9.999999717180685E-10)a.dD.L(a.dj);a.dj.L(a.df);a.Mh();}}
function BaD(a){(a.df.L(a.dj)).jn(a.dD);((a.dD.L(a.df)).jn(a.dj)).b0();}
function BgA(a,b,c){a.dj.tE(b,c);a.dD.tE(b,c);}
function AZ0(a,b,c,d){a.df.L(b);a.df.fN(a.cy);a.mc(a.df);a.J8(c,d);a.df.tE(c,d);a.Pm( -a.df.l, -a.df.m, -a.df.n);}
function A0u(a,b,c,d){a.cy.Ek(b,c,d);}
function BlV(a,b){a.cy.eE(b);}
function BfG(a,b,c,d,e,f){var g,h;g=b.l-c;h=BwN.bh()-b.m-d;b.l=2.0*g/e-1.0;b.m=2.0*h/f-1.0;b.n=2.0*b.n-1.0;b.JL(a.hb);return b;}
function A$R(a,b,c,d,e,f,g){a.Fb(a.i8.mQ.I(b,c,0.0),d,e,f,g);a.Fb(a.i8.nB.I(b,c,1.0),d,e,f,g);(a.i8.nB.fN(a.i8.mQ)).b0();return a.i8;}
function A5n(a,b,c){return a.Ve(b,c,0.0,0.0,BwN.bk(),BwN.bh());}
function SZ(){var a=this;Hq.call(a);a.DH=0.0;a.Cj=null;}
function Bqg(){var a=new SZ();BaM(a);return a;}
function BaM(a){Ou(a);a.DH=67.0;a.Cj=S();}
function AQI(a){a.r5(1);}
function A1v(a,b){var c;c=a.lv/a.ng;a.kr.Pv(De(a.md),De(a.kI),a.DH,c);a.h9.Fy(a.cy,(a.Cj.L(a.cy)).eE(a.dj),a.dD);a.eo.b$(a.kr);Hu(a.eo.a,a.h9.a);if(b){a.hb.b$(a.eo);Qh(a.hb.a);a.ub.Ef(a.hb);}}
function ABB(){C.call(this);this.F$=null;}
function Bnx(a){var b=new ABB();Bbu(b,a);return b;}
function Bbu(a,b){K(a);a.F$=b;}
function ALF(a){BcH(a.F$);}
var ACE=D(DL);
function Be$(a){var b=new ACE();ARr(b,a);return b;}
function ARr(a,b){AJu(a,b);}
function AVz(a,b){return a.ee.r(Gg(Fp(b)));}
function A4D(a){var b,c,d;b=!a.tJ?B(39):B(40);c=a.ee.d();d=H();I(I(I(d,B(446)),b),c);return P(d);}
var PR=D(0);
var GC=D(Bc);
var BBS=null;var BBT=null;var BCs=null;function Bkh(){Bkh=M(GC);AOH();}
function A5V(a,b){var c=new GC();AJa(c,a,b);return c;}
function ACk(){Bkh();return BCs.e9();}
function AJa(a,b,c){Bkh();B$(a,b,c);}
function AOH(){BBS=A5V(B(447),0);BBT=A5V(B(448),1);BCs=J(GC,[BBS,BBT]);}
var K_=D(BF);
var BCt=null;var BwJ=null;function AHy(){AHy=M(K_);AZi();}
function Btb(){var a=new K_();AFm(a);return a;}
function Bt0(a){var b=new K_();Up(b,a);return b;}
function AFm(a){AHy();BY(a);a.dc(W,0);}
function Up(a,b){AHy();BY(a);}
function AZi(){BCt=Bt0(0);BwJ=Btb();}
var AB2=D(Ba);
function Boh(){var a=new AB2();BeL(a);return a;}
function BeL(a){BG(a);}
function Ba_(a){return (((Dv()).bN(33,64)).bN(91,96)).bN(123,126);}
function Nc(){var a=this;C.call(a);a.e$=null;a.dE=null;a.ui=0;a.PN=0;a.wQ=0;a.lV=0;a.rS=0;a.vV=0;a.eh=null;}
var BCu=null;function ATl(){ATl=M(Nc);BlT();}
function BcN(a,b,c){var d=new Nc();AEX(d,a,b,c);return d;}
function AEX(a,b,c,d){ATl();K(a);a.lV=0;a.rS=0;a.vV=(-1);a.eh=I2();a.PN=b;a.e$=d;a.dE=J0(CJ(a.e$.cn/4|0,c));KV(a.dE);a.ui=BwS.jS();a.wQ=!b?35048:35044;VL(a);}
function A70(a){return a.e$;}
function Be8(a){return (BQ(a.dE)*4|0)/a.e$.cn|0;}
function A2M(a){return (DC(a.dE)*4|0)/a.e$.cn|0;}
function ADx(a){if(a.rS){BwS.fl(34962,BQ(a.dE),a.dE,a.wQ);a.lV=0;}}
function A8h(a,b,c,d){a.lV=1;RM(b,a.dE,d,c);a.dE.vR(0);a.dE.rl(d);ADx(a);}
function A17(a,b,c){var d;d=BwT;d.W8(a.vV);AKv(a,b,c);AKy(a,d);a.rS=1;}
function AKv(a,b,c){var d,e,f,g,h,i;d=!a.eh.G?0:1;a:{e=Dp(a.e$);if(d){if(c===null){f=0;while(d&&f<e){g=CU(a.e$,f);h=b.mZ(g.eK);d=h!=a.eh.bG(f)?0:1;f=f+1|0;}}else{i=c.data;d=i.length!=a.eh.G?0:1;f=0;while(d){if(f>=e)break a;d=i[f]!=a.eh.bG(f)?0:1;f=f+1|0;}}}}b:{if(!d){BwR.c7(34962,a.ui);ABE(a,b);a.eh.J();f=0;while(true){if(f>=e)break b;g=CU(a.e$,f);if(c!==null){i=c.data;a.eh.em(i[f]);}else a.eh.em(b.mZ(g.eK));h=a.eh.bG(f);if(h>=0){b.mW(h);b.nL(h,g.dm,g.fW,g.gf,a.e$.cn,g.cP);}f=f+1|0;}}}}
function ABE(a,b){var c,d,e;if(a.eh===null)return;c=Dp(a.e$);d=0;while(d<c){e=a.eh.bG(d);if(e>=0)b.v9(e);d=d+1|0;}}
function AKy(a,b){if(a.lV){b.c7(34962,a.ui);a.dE.rl(BQ(a.dE));b.fl(34962,BQ(a.dE),a.dE,a.wQ);a.lV=0;}}
function ARY(a,b,c){var d;d=BwT;d.W8(0);a.rS=0;}
function VL(a){ATl();OE(BCu);BwT.a1z(1,BCu);a.vV=BCu.Qn();}
function BlT(){BCu=GH(1);}
var Vu=D();
function A2j(b,c,d){var e,f;e=0;while(e<d){f=b.data[e+c|0];$rt_putStderr(f&255);e=e+1|0;}}
function BbC(b,c,d){var e,f;e=0;while(e<d){f=b.data[e+c|0];$rt_putStdout(f&255);e=e+1|0;}}
var Ym=D(CF);
var AC2=D(Cy);
var QT=D(0);
function L7(){var a=this;C.call(a);a.w=null;a.d3=null;a.vP=0;a.hy=null;a.sa=0;a.sc=null;a.vj=0;a.Uo=null;a.K$=0;a.Lx=null;a.R1=0;a.sv=null;a.vS=0;a.q0=null;a.wN=0;a.vu=0;a.nJ=null;a.m6=null;a.mJ=null;a.n0=null;}
function Bty(a){var b=new L7();AIx(b,a);return b;}
function AIx(a,b){K(a);a.d3=DO();a.vP=1;a.hy=DO();a.sa=1;a.sc=DO();a.vj=1;a.Uo=DO();a.K$=1;a.Lx=DO();a.R1=1;a.sv=DO();a.vS=1;a.q0=DO();a.wN=1;a.vu=0;a.w=b;a.nJ=(Ew()).Eb(40000);a.mJ=(Ew()).ES(12000);a.m6=(Ew()).DI(12000);a.n0=(Ew()).Js(240000);a.w.pixelStorei(37441,0);}
function AHA(a,b){if(Bj(b)>a.nJ.length)a.nJ=(Ew()).Eb(Bj(b));}
function VE(a,b){if(Bj(b)>a.mJ.length)a.mJ=(Ew()).ES(Bj(b));}
function AA0(a,b){if(Bj(b)>a.m6.length)a.m6=(Ew()).DI(Bj(b));}
function AEU(a,b){if(Bj(b)>a.n0.length)a.n0=(Ew()).Js(Bj(b));}
function A5f(a,b){var c,d,e,f,g;AHA(a,b);c=Cr(b);d=0;while(c<BQ(b)){e=a.nJ;f=b.l8(c);e[d]=f;c=c+1|0;d=d+1|0;}e=a.nJ;g=Bj(b);return e.subarray(0,g);}
function AWJ(a,b){var c,d,e,f,g;VE(a,b);c=Cr(b);d=0;while(c<BQ(b)){e=a.mJ;f=b.Pd(c);e[d]=f;c=c+1|0;d=d+1|0;}e=a.mJ;g=Bj(b);return e.subarray(0,g);}
function Bka(a,b){var c,d,e,f,g;AA0(a,b);c=Cr(b);d=0;while(c<BQ(b)){e=a.m6;f=b.bG(c);e[d]=f;c=c+1|0;d=d+1|0;}e=a.m6;g=Bj(b);return e.subarray(0,g);}
function A27(a,b){var c,d,e,f,g;AEU(a,b);c=Cr(b);d=0;while(c<BQ(b)){e=a.n0;f=b.CA(c);e[d]=f;c=c+1|0;d=d+1|0;}e=a.n0;g=Bj(b);return e.subarray(0,g);}
function AF3(a,b,c){var d,e;d=a.q0.V(Bq(b));if(d===null){d=DO();a.q0.z(Bq(b),d);}e=a.wN;a.wN=e+1|0;d.z(Bq(e),c);return e;}
function El(a,b){return (a.q0.V(Bq(a.vu))).V(Bq(b));}
function Ul(a,b){var c;c=a.sa;a.sa=c+1|0;a.hy.z(Bq(c),b);return c;}
function AFq(a,b){var c;c=a.vP;a.vP=c+1|0;a.d3.z(Bq(c),b);return c;}
function ACG(a,b){var c;c=a.vj;a.vj=c+1|0;a.sc.z(Bq(c),b);return c;}
function AEL(a,b){var c;c=a.vS;a.vS=c+1|0;a.sv.z(Bq(c),b);return c;}
function WI(a,b){a.w.activeTexture(b);}
function AD$(a,b,c){var d,e;d=a.w;e=a.sv.V(Bq(c));d.bindTexture(b,e);}
function W7(a,b,c){a.w.blendFunc(b,c);}
function AKV(a,b){a.w.clear(b);}
function Uv(a,b,c,d,e){a.w.clearColor(b,c,d,e);}
function AMW(a,b){a.w.cullFace(b);}
function Xt(a,b){a.w.depthFunc(b);}
function AAe(a,b){a.w.depthMask(!!b);}
function WE(a,b,c){a.w.depthRange(b,c);}
function Yz(a,b){a.w.disable(b);}
function UM(a,b,c,d){a.w.drawArrays(b,c,d);}
function W3(a,b,c,d,e){var f,g;f=a.w;g=Cr(e);f.drawElements(b,c,d,g);}
function AA1(a,b){a.w.enable(b);}
function A38(a){var b;b=a.w.createTexture();return AEL(a,b);}
function Vv(a,b,c){var d;a:{if(b==34016)break a;if(b==3413)break a;if(b==32970)break a;if(b==32968)break a;if(b==34877)break a;if(b==32777)break a;if(b==32971)break a;if(b==32969)break a;if(b==3412)break a;if(b==2885)break a;if(b==3414)break a;if(b==2932)break a;if(b==2886)break a;if(b==33170)break a;if(b==3411)break a;if(b==35739)break a;if(b==35738)break a;if(b==35661)break a;if(b==34076)break a;if(b==36349)break a;if(b==34024)break a;if(b==34930)break a;if(b==3379)break a;if(b==36348)break a;if(b==34921)break a;if
(b==35660)break a;if(b==36347)break a;if(b==34466)break a;if(b==3333)break a;if(b==3410)break a;if(b==32936)break a;if(b==32937)break a;if(b==34817)break a;if(b==34816)break a;if(b==34818)break a;if(b==34819)break a;if(b==36003)break a;if(b==36004)break a;if(b==36005)break a;if(b==3415)break a;if(b==2961)break a;if(b==2964)break a;if(b==2962)break a;if(b==2965)break a;if(b==2966)break a;if(b==2967)break a;if(b==2963)break a;if(b==2968)break a;if(b==3408)break a;if(b==3317)break a;if(b==36006)break a;G(Bh(B(449)));}d
=a.w.getParameter(b);c.vA(0,d);}
function VC(a,b){return $rt_str(a.w.getParameter(b));}
function UL(a,b,c){a.w.pixelStorei(b,c);}
function AIN(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q;if(j===null){k=a.w;l=null;k.texImage2D(b,c,d,e,f,g,h,i,l);}else if(BQ(j)>4){m=!(j instanceof EU)?a.Ju(j):a.tw(j);a.w.texImage2D(b,c,d,e,f,g,h,i,m);}else{n=j.U$(0);G$();o=BCv.V(Bq(n));if(o.W1()){p=a.w;q=o.S3();p.texImage2D(b,c,d,h,i,q);}else if(!o.OC()){p=a.w;q=o.sw();p.texImage2D(b,c,d,h,i,q);}else{p=a.w;q=o.MB();p.texImage2D(b,c,d,h,i,q);}}}
function XF(a,b,c,d){a.w.texParameterf(b,c,d);}
function ACA(a,b,c,d,e){a.w.viewport(b,c,d,e);}
function Wc(a,b,c){var d,e;d=a.d3.V(Bq(b));e=a.hy.V(Bq(c));a.w.attachShader(d,e);}
function ABm(a,b,c){var d,e;d=a.w;e=a.sc.V(Bq(c));d.bindBuffer(b,e);}
function AF9(a,b,c,d,e){a.w.blendFuncSeparate(b,c,d,e);}
function Vn(a,b,c,d,e){var f,g,h;if(d instanceof EU){f=a.w;g=a.tw(d);f.bufferData(b,g,e);}else if(d instanceof Ix){f=a.w;g=a.QS(d);f.bufferData(b,g,e);}else if(d instanceof Is){g=a.w;h=a.Sa(d);g.bufferData(b,h,e);}else if(d instanceof FB){f=a.w;g=a.Ju(d);f.bufferData(b,g,e);}else{if(d!==null)G(Bh(B(450)));a.w.bufferData(b,c,e);}}
function AFE(a,b,c,d,e){var f,g;if(e instanceof EU){f=a.w;g=a.tw(e);f.bufferSubData(b,c,g);}}
function WH(a,b){var c;c=a.hy.V(Bq(b));a.w.compileShader(c);}
function ABC(a){var b;b=a.w.createProgram();return AFq(a,b);}
function YE(a,b){var c;c=a.w.createShader(b);return Ul(a,c);}
function AIn(a,b){a.w.disableVertexAttribArray(b);}
function XU(a,b,c,d,e){a.w.drawElements(b,c,d,e);}
function ALm(a,b){a.w.enableVertexAttribArray(b);}
function BbY(a){var b;b=a.w.createBuffer();return ACG(a,b);}
function So(a,b){a.w.generateMipmap(b);}
function AC0(a,b,c,d,e){var f,g,h;f=a.w;g=a.d3.V(Bq(b));h=f.getActiveAttrib(g,c);d.gW(h.size);e.gW(h.type);return $rt_str(h.name);}
function AHq(a,b,c,d,e){var f,g,h;f=a.w;g=a.d3.V(Bq(b));h=f.getActiveUniform(g,c);d.gW(h.size);e.gW(h.type);return $rt_str(h.name);}
function AFw(a,b,c){var d;d=a.d3.V(Bq(b));return a.w.getAttribLocation(d,$rt_ustr(c));}
function X0(a,b,c){if(b!=2931&&b!=2849&&b!=32824&&b!=10752&&b!=32938)G(Bh(B(451)));c.Pq(0,a.w.getParameter(b));}
function AIm(a,b,c,d){var e,f,g,h,i;if(c!=35712&&c!=35714&&c!=35715){e=a.w;f=a.d3.V(Bq(b));d.gW(e.getProgramParameter(f,c));}else{g=a.w;h=a.d3.V(Bq(b));i=g.getProgramParameter(h,c)?1:0;d.gW(!i?0:1);}}
function ABz(a,b){var c,d;c=a.w;d=a.d3.V(Bq(b));return $rt_str(c.getProgramInfoLog(d));}
function UG(a,b,c,d){var e,f,g,h;if(c!=35713&&c!=35712){e=a.w;f=a.hy.V(Bq(b));g=e.getShaderParameter(f,c);d.gW(g);}else{h=a.w;e=a.hy.V(Bq(b));g=h.getShaderParameter(e,c)?1:0;d.gW(!g?0:1);}}
function Xe(a,b){var c,d;c=a.w;d=a.hy.V(Bq(b));return $rt_str(c.getShaderInfoLog(d));}
function AFW(a,b,c){var d,e,f;d=a.w;e=a.d3.V(Bq(b));f=d.getUniformLocation(e,$rt_ustr(c));if(f!==null)return AF3(a,b,f);return (-1);}
function ADg(a,b){var c,d;c=a.w;d=a.d3.V(Bq(b));c.linkProgram(d);}
function ACl(a,b,c){var d,e;d=a.w;e=a.hy.V(Bq(b));d.shaderSource(e,$rt_ustr(c));}
function Yp(a,b,c,d){var e,f;e=a.w;f=d;e.texParameterf(b,c,f);}
function TV(a,b,c){var d;d=El(a,b);a.w.uniform1f(d,c);}
function Yy(a,b,c){var d;d=El(a,b);a.w.uniform1i(d,c);}
function Ys(a,b,c,d){var e;e=El(a,b);a.w.uniform2f(e,c,d);}
function AAF(a,b,c,d,e){var f;f=El(a,b);a.w.uniform3f(f,c,d,e);}
function AS9(a,b,c,d,e){var f;f=El(a,b);a.w.uniform3fv(f,QK(d));}
function U5(a,b,c,d,e,f){var g;g=El(a,b);a.w.uniform4f(g,c,d,e,f);}
function BkA(a,b,c,d,e,f){var g;g=El(a,b);a.w.uniformMatrix3fv(g,!!d,QK(e));}
function A_Z(a,b,c,d,e,f){var g;g=El(a,b);a.w.uniformMatrix4fv(g,!!d,QK(e));}
function TG(a,b){var c,d;a.vu=b;c=a.w;d=a.d3.V(Bq(b));c.useProgram(d);}
function AHH(a,b,c,d,e,f,g){a.w.vertexAttribPointer(b,c,d,!!e,f,g);}
var ALR=D(L7);
function Bqv(a){var b=new ALR();A4n(b,a);return b;}
function A4n(a,b){AIx(a,b);}
function Bd(a){var b,c,d,e;b=a.w.getError();if(!b)return;c=new DD;d=L9(b);e=H();I(I(V(I(e,B(452)),b),B(317)),d);Eo(c,P(e));G(c);}
function A1y(a,b){WI(a,b);Bd(a);}
function Bk2(a,b,c){AD$(a,b,c);Bd(a);}
function AZO(a,b,c){W7(a,b,c);Bd(a);}
function A9z(a,b){AKV(a,b);Bd(a);}
function ARs(a,b,c,d,e){Uv(a,b,c,d,e);Bd(a);}
function AQw(a,b){AMW(a,b);Bd(a);}
function AOw(a,b){Xt(a,b);Bd(a);}
function AXj(a,b){AAe(a,b);Bd(a);}
function Bhk(a,b,c){WE(a,b,c);Bd(a);}
function BlF(a,b){Yz(a,b);Bd(a);}
function AUZ(a,b,c,d){UM(a,b,c,d);Bd(a);}
function A4r(a,b,c,d,e){W3(a,b,c,d,e);Bd(a);}
function APm(a,b){AA1(a,b);Bd(a);}
function Bh_(a,b,c){Vv(a,b,c);Bd(a);}
function AWd(a,b){return VC(a,b);}
function AYz(a,b,c){UL(a,b,c);Bd(a);}
function ASH(a,b,c,d,e,f,g,h,i,j){AIN(a,b,c,d,e,f,g,h,i,j);Bd(a);}
function A$O(a,b,c,d){XF(a,b,c,d);Bd(a);}
function Bli(a,b,c,d,e){ACA(a,b,c,d,e);Bd(a);}
function AN0(a,b,c){Wc(a,b,c);Bd(a);}
function AM$(a,b,c){ABm(a,b,c);Bd(a);}
function AM8(a,b,c,d,e){AF9(a,b,c,d,e);Bd(a);}
function AVQ(a,b,c,d,e){Vn(a,b,c,d,e);Bd(a);}
function Bav(a,b,c,d,e){AFE(a,b,c,d,e);Bd(a);}
function A5a(a,b){WH(a,b);Bd(a);}
function AYU(a){var b;b=ABC(a);Bd(a);return b;}
function A4W(a,b){var c;c=YE(a,b);Bd(a);return c;}
function AYT(a,b){AIn(a,b);Bd(a);}
function BaJ(a,b,c,d,e){XU(a,b,c,d,e);Bd(a);}
function A44(a,b){ALm(a,b);Bd(a);}
function BeF(a,b){So(a,b);Bd(a);}
function Bcn(a,b,c,d,e){var f;f=AC0(a,b,c,d,e);Bd(a);return f;}
function APM(a,b,c,d,e){var f;f=AHq(a,b,c,d,e);Bd(a);return f;}
function BaP(a,b,c){var d;d=AFw(a,b,c);Bd(a);return d;}
function A6v(a,b,c){X0(a,b,c);Bd(a);}
function ASO(a,b,c,d){AIm(a,b,c,d);Bd(a);}
function A_F(a,b){var c;c=ABz(a,b);Bd(a);return c;}
function AN6(a,b,c,d){UG(a,b,c,d);Bd(a);}
function Bhn(a,b){var c;c=Xe(a,b);Bd(a);return c;}
function Bi5(a,b,c){var d;d=AFW(a,b,c);Bd(a);return d;}
function AWP(a,b){ADg(a,b);Bd(a);}
function A4m(a,b,c){ACl(a,b,c);Bd(a);}
function Bi0(a,b,c,d){Yp(a,b,c,d);Bd(a);}
function A7j(a,b,c){TV(a,b,c);Bd(a);}
function A4O(a,b,c){Yy(a,b,c);Bd(a);}
function ARI(a,b,c,d){Ys(a,b,c,d);Bd(a);}
function AZy(a,b,c,d,e){AAF(a,b,c,d,e);Bd(a);}
function ASX(a,b,c,d,e,f){U5(a,b,c,d,e,f);Bd(a);}
function A64(a,b){TG(a,b);Bd(a);}
function AQr(a,b,c,d,e,f,g){AHH(a,b,c,d,e,f,g);Bd(a);}
var ABF=D(Dc);
var ABH=D(FW);
function AGA(){C.call(this);this.sO=null;}
function Bqo(){var a=new AGA();A$0(a);return a;}
function A$0(a){K(a);a.sO=BhI();}
function A9U(a,b){return $rt_str(a.sO.getItem($rt_ustr(b)));}
function Bgl(a,b){a.sO.removeItem($rt_ustr(b));}
function GS(){var a=this;C.call(a);a.H8=null;a.H9=null;a.H_=null;a.Ia=null;a.s9=null;a.gN=null;a.bF=null;a.bB=null;a.hk=0;a.qW=0;a.oC=0;a.gC=0;a.kO=0;a.hR=0;a.w7=0;a.wn=0;a.er=0;a.vG=0;a.kb=0;a.f5=0;a.da=null;a.l_=null;a.iq=null;a.tC=0;a.gJ=0;a.q4=0.0;a.ro=0.0;a.py=0.0;a.p0=0.0;a.mV=0;a.cA=null;a.qg=0;a.pZ=null;a.kL=null;a.kV=null;a.nQ=0;a.FD=null;}
var BCw=null;var BCx=null;var BCy=null;var BCz=null;function Oz(){Oz=M(GS);A_J();}
function BpQ(){var a=new GS();ACq(a);return a;}
function ACq(a){Oz();K(a);a.H8=Dq();a.H9=Dq();a.H_=Dq();a.Ia=Dq();a.s9=E3();a.bF=J1();a.bB=A6F();a.l_=By();a.iq=BsD(By4);a.tC=0;a.q4=0.0;a.ro=1.0;a.py=0.0;a.p0=1.0;a.mV=0;a.qg=0;a.pZ=BS();a.kL=Ts();a.kV=AWU();a.nQ=(-1);a.FD=S();}
function Xl(b){var c,d,e,f;Oz();c=By();if(Z(Bk(b,N(1)),N(1)))c.C(DP(1,3,B(367)));if(Z(Bk(b,N(2)),N(2)))c.C(DP(2,4,B(368)));if(Z(Bk(b,N(4)),N(4)))c.C(DP(4,4,B(368)));if(Z(Bk(b,N(8)),N(8)))c.C(DP(8,3,B(453)));if(Z(Bk(b,N(16)),N(16)))c.C(DP(16,2,B(369)));d=Bb(Fv,c.h);e=0;while(true){f=d.data;if(e>=f.length)break;f[e]=c.p(e);e=e+1|0;}return AGr(d);}
function A5d(a,b){a.Xq(b,(-1));}
function BaY(a,b,c){var d,e;if(a.gN!==null)G(UR(B(454)));a.gN=b;a.bF.J();a.bB.J();a.l_.J();a.qW=0;a.nQ=(-1);a.oC=0;a.da=null;a.hk=b.cn/4|0;if(!(a.cA!==null&&a.cA.data.length>=a.hk))a.cA=B_(a.hk);d=EX(b,1);if(d===null)G(Bh(B(455)));a.gC=d.cP/4|0;a.kO=d.dm;e=EX(b,8);a.hR=e===null?(-1):e.cP/4|0;e=EX(b,256);a.w7=e===null?(-1):e.cP/4|0;e=EX(b,128);a.wn=e===null?(-1):e.cP/4|0;e=EX(b,2);a.er=e===null?(-1):e.cP/4|0;a.vG=e!==null?e.dm:0;e=EX(b,4);a.kb=e===null?(-1):e.cP/4|0;e=EX(b,16);a.f5=e===null?(-1):e.cP/4|0;a.AQ(null);a.A8(null);a.G0(null);a.gJ
=c;a.kV.zG();}
function OJ(a){if(a.da!==null){a.kV.R$(a.da.gt);(a.kV.KJ(a.da.hA)).dk(0.5);a.da.jI=a.da.hA.t1();a.kV.zG();a.da.h1=a.oC;a.da.hB=a.bB.db-a.oC|0;a.oC=a.bB.db;a.da=null;}}
function AUL(a,b,c){return a.Rq(b,c,Bjh());}
function AQY(a,b,c,d){if(a.gN===null)G(UR(B(456)));OJ(a);a.da=d;a.da.rx=b;a.da.iI=c;a.gJ=c;a.l_.C(a.da);a.AQ(null);a.A8(null);a.G0(null);return a.da;}
function AV2(a,b){var c,d,e;OJ(a);if(a.gN===null)G(Bh(B(456)));if(!Rw(a.gN,b.fq()))G(Bh(B(457)));if(CJ(b.on(),a.hk)<a.bF.U){c=new DD;d=(H()).c(B(458));Eo(c,(((((d.t(b.on())).c(B(459))).t(a.hk)).c(B(460))).t(a.bF.U)).d());G(c);}if(b.z6()<a.bB.db)G(Bh((((((H()).c(B(461))).t(b.z6())).c(B(460))).t(a.bB.db)).d()));b.yc(a.bF.S,0,a.bF.U);b.UU(a.bB.iw,0,a.bB.db);c=a.l_.b3();while(c.bE()){e=c.bA();e.cf=b;}a.l_.J();a.gN=null;a.bF.J();a.bB.J();return b;}
function AOy(a){return a.QD(Br$(1,a.bF.U/a.hk|0,a.bB.db,a.gN));}
function ARe(a){return a.gN;}
function A1Z(a){return a.gJ;}
function A7x(a,b){var c,d;c=a.iq;d=b===null?0:1;a.tC=d;if(!d){DJ();b=By4;}c.ik(b);}
function AOT(a,b,c,d,e){a.q4=b;a.py=c;a.ro=d-b;a.p0=e-c;a.mV=EE(b)&&EE(c)&&D9(d,1.0)&&D9(e,1.0)?0:1;}
function ARZ(a,b){if(b!==null){a.mV=1;a.Sp(b.Ye(),b.YL(),b.ZS(),b.XR());}else{a.mV=0;a.py=0.0;a.q4=0.0;a.p0=1.0;a.ro=1.0;}}
function AZR(a,b){a.qg=b===null?0:1;if(!a.qg){a.pZ.fP();a.kL.DZ();}else{a.pZ.b$(b);((a.kL.HU(b)).Gu()).D$();}}
function AS2(a,b){a.bF.HT(CJ(a.hk,b));}
function A9i(a,b){a.bB.Vn(b);}
function AYM(a,b){if(!a.gJ)a.h2(4*b|0);else if(a.gJ!=1)a.h2(6*b|0);else a.h2(8*b|0);}
function ATZ(a){return a.nQ<<16>>16;}
function AM2(b,c,d,e){var f,g,h,i,j,k,l;Oz();if(d>2){f=b.data;g=BCy;h=f[c];i=c+1|0;j=f[i];k=c+2|0;(g.I(h,j,f[k])).lG(e);f[c]=BCy.l;f[i]=BCy.m;f[k]=BCy.n;}else if(d<=1){f=b.data;f[c]=((BCy.I(f[c],0.0,0.0)).lG(e)).l;}else{f=b.data;g=BCy;l=f[c];k=c+1|0;(g.I(l,f[k],0.0)).lG(e);f[c]=BCy.l;f[k]=BCy.m;}}
function KH(b,c,d,e){var f,g,h,i,j,k;Oz();if(d>2){f=b.data;g=BCy;h=f[c];i=c+1|0;j=f[i];k=c+2|0;((g.I(h,j,f[k])).sW(e)).b0();f[c]=BCy.l;f[i]=BCy.m;f[k]=BCy.n;}else if(d<=1){f=b.data;f[c]=(((BCy.I(f[c],0.0,0.0)).sW(e)).b0()).l;}else{f=b.data;g=BCy;j=f[c];i=c+1|0;((g.I(j,f[i],0.0)).sW(e)).b0();f[c]=BCy.l;f[i]=BCy.m;}}
function Xs(a,b,c){var d,e,f,g,h,i,j;d=a.bF.U;a.bF.tM(b,c,a.hk);e=a.qW;a.qW=e+1|0;a.nQ=e;if(a.qg){AM2(a.bF.S,d+a.gC|0,a.kO,a.pZ);if(a.hR>=0)KH(a.bF.S,d+a.hR|0,3,a.kL);if(a.w7>=0)KH(a.bF.S,d+a.w7|0,3,a.kL);if(a.wn>=0)KH(a.bF.S,d+a.wn|0,3,a.kL);}f=a.bF.S.data[d+a.gC|0];g=a.kO<=1?0.0:a.bF.S.data[(d+a.gC|0)+1|0];h=a.kO<=2?0.0:a.bF.S.data[(d+a.gC|0)+2|0];a.kV.Ty(f,g,h);if(a.tC){if(a.er>=0){i=a.bF.S.data;j=d+a.er|0;i[j]=i[j]*a.iq.bz;i=a.bF.S.data;j=(d+a.er|0)+1|0;i[j]=i[j]*a.iq.by;i=a.bF.S.data;j=(d+a.er|0)+2|0;i[j]
=i[j]*a.iq.bx;if(a.vG>3){i=a.bF.S.data;j=(d+a.er|0)+3|0;i[j]=i[j]*a.iq.b2;}}else if(a.kb>=0){AHE(a.s9,a.bF.S.data[d+a.kb|0]);a.bF.S.data[d+a.kb|0]=(a.s9.N2(a.iq)).jw();}}if(a.mV&&a.f5>=0){a.bF.S.data[d+a.f5|0]=a.q4+a.ro*a.bF.S.data[d+a.f5|0];a.bF.S.data[(d+a.f5|0)+1|0]=a.py+a.p0*a.bF.S.data[(d+a.f5|0)+1|0];}}
function A$r(a,b,c,d,e){if(a.qW>65535)G(Bh(B(462)));a.cA.data[a.gC]=b.l;if(a.kO>1)a.cA.data[a.gC+1|0]=b.m;if(a.kO>2)a.cA.data[a.gC+2|0]=b.n;if(a.hR>=0){if(c===null)c=(a.FD.L(b)).b0();a.cA.data[a.hR]=c.l;a.cA.data[a.hR+1|0]=c.m;a.cA.data[a.hR+2|0]=c.n;}if(a.er>=0){if(d===null){DJ();d=By4;}a.cA.data[a.er]=d.bz;a.cA.data[a.er+1|0]=d.by;a.cA.data[a.er+2|0]=d.bx;if(a.vG>3)a.cA.data[a.er+3|0]=d.b2;}else if(a.kb>0){if(d===null){DJ();d=By4;}a.cA.data[a.kb]=d.jw();}if(e!==null&&a.f5>=0){a.cA.data[a.f5]=e.c4;a.cA.data[a.f5
+1|0]=e.c3;}Xs(a,a.cA,0);return a.nQ<<16>>16;}
function AXk(a,b){return a.PV(!b.s0?null:b.of,!b.wm?null:b.qY,!b.tm?null:b.qc,!b.q_?null:b.la);}
function BbM(a,b,c,d,e){a.h2(4);a.bB.cp(b);a.bB.cp(c);a.bB.cp(d);a.bB.cp(e);}
function BbT(a,b,c,d,e,f,g){a.h2(6);a.bB.cp(b);a.bB.cp(c);a.bB.cp(d);a.bB.cp(e);a.bB.cp(f);a.bB.cp(g);}
function A8D(a,b,c,d,e,f,g,h,i){a.h2(8);a.bB.cp(b);a.bB.cp(c);a.bB.cp(d);a.bB.cp(e);a.bB.cp(f);a.bB.cp(g);a.bB.cp(h);a.bB.cp(i);}
function AZH(a,b,c,d,e){if(a.gJ==4)a.Uy(b,c,d,d,e,b);else if(a.gJ==1)a.IA(b,c,c,d,d,e,e,b);else{if(a.gJ)G(Bh(B(463)));a.LF(b,c,d,e);}}
function Bhh(a,b,c,d,e){a.wP(4);a.ef(a.dV(b),a.dV(c),a.dV(d),a.dV(e));}
function AWk(a,b,c,d,e,f){var g,h,i,j,k;g=(a.H8.dX(b,f,null,null)).pA(0.0,1.0);h=(a.H9.dX(c,f,null,null)).pA(1.0,1.0);i=a.H_;j=null;k=null;i=(i.dX(d,f,j,k)).pA(1.0,0.0);k=(a.Ia.dX(e,f,null,null)).pA(0.0,0.0);a.Tp(g,h,i,k);}
function ARO(a,b,c,d){Bhd(a,b,c,d);}
function A_J(){BCw=A6F();BCx=J1();BCy=S();BCz=null;}
var Ly=D(Ba);
function BpH(){var a=new Ly();WG(a);return a;}
function WG(a){BG(a);}
function AGN(a){return ((Dv()).bN(9,13)).cO(32);}
var YT=D();
var IL=D();
var BCA=null;var BCB=null;var BCC=null;function BCD(){BCD=M(IL);ARh();}
function ARh(){BCA=BN();BCB=BN();BCC=BN();}
var PY=D();
var BCE=null;function BCF(){BCF=M(PY);A41();}
function A41(){BCE=J(IV,[F(Nm),F(Bv),F(QX),F(Oe),F(O4),F(Iy),F(O1),F(Fn),F(QB),F(ON),F(Ro),F(Nt),F(RT),F(IZ),F(O0),F(Q5),F(PF),F(OQ),F(Fx),F(QS),F(RE),F(NO),F(Qu),F(PO)]);}
var HC=D(Ij);
var BCG=null;function A3p(){A3p=M(HC);A9v();}
function Bs4(a){var b=new HC();Wa(b,a);return b;}
function BCH(){var a=new HC();JO(a);return a;}
function Wa(a,b){A3p();JG(a);}
function JO(a){A3p();JG(a);}
function A9v(){BCG=Bs4(0);}
var Il=D(HC);
var BCI=null;function AWw(){AWw=M(Il);Bfb();}
function Btq(a){var b=new Il();AKC(b,a);return b;}
function BCJ(){var a=new Il();J9(a);return a;}
function AKC(a,b){AWw();JO(a);}
function J9(a){AWw();JO(a);}
function Bfb(){BCI=Btq(0);}
var P6=D(0);
var Ny=D(0);
var R4=D(0);
var Rm=D(0);
var AJo=D();
var Ok=D(0);
function AGq(){var a=this;C.call(a);a.hp=null;a.Jz=null;}
function Ts(){var a=new AGq();AWz(a);return a;}
function AWz(a){K(a);a.hp=B_(9);a.Jz=B_(9);a.DZ();}
function Bfq(a){var b,c;b=a.hp;c=b.data;c[0]=1.0;c[1]=0.0;c[2]=0.0;c[3]=0.0;c[4]=1.0;c[5]=0.0;c[6]=0.0;c[7]=0.0;c[8]=1.0;return a;}
function AVW(a){var b,c;b=a.hp;c=b.data;return c[0]*c[4]*c[8]+c[3]*c[7]*c[2]+c[6]*c[1]*c[5]-c[0]*c[7]*c[5]-c[3]*c[1]*c[8]-c[6]*c[4]*c[2];}
function Bgp(a){var b,c,d,e,f,g;b=a.Mp();if(b===0.0)G(Bh(B(464)));c=1.0/b;d=a.Jz;e=d.data;f=a.hp;g=f.data;e[0]=g[4]*g[8]-g[5]*g[7];e[1]=g[2]*g[7]-g[1]*g[8];e[2]=g[1]*g[5]-g[2]*g[4];e[3]=g[5]*g[6]-g[3]*g[8];e[4]=g[0]*g[8]-g[2]*g[6];e[5]=g[2]*g[3]-g[0]*g[5];e[6]=g[3]*g[7]-g[4]*g[6];e[7]=g[1]*g[6]-g[0]*g[7];e[8]=g[0]*g[4]-g[1]*g[3];g[0]=c*e[0];g[1]=c*e[1];g[2]=c*e[2];g[3]=c*e[3];g[4]=c*e[4];g[5]=c*e[5];g[6]=c*e[6];g[7]=c*e[7];g[8]=c*e[8];return a;}
function Bl4(a,b){var c,d;c=a.hp;d=c.data;d[0]=b.a.data[0];d[1]=b.a.data[1];d[2]=b.a.data[2];d[3]=b.a.data[4];d[4]=b.a.data[5];d[5]=b.a.data[6];d[6]=b.a.data[8];d[7]=b.a.data[9];d[8]=b.a.data[10];return a;}
function A5Z(a){var b,c,d,e,f,g,h,i;b=a.hp;c=b.data;d=c[1];e=c[2];f=c[3];g=c[5];h=c[6];i=c[7];c[3]=d;c[6]=e;c[1]=f;c[7]=g;c[2]=h;c[5]=i;return a;}
function C2(){C.call(this);this.a=null;}
var BCK=null;var BCL=null;var BCM=null;var BCN=null;var BCO=null;var BCP=null;var BCQ=null;var BCR=null;var BCS=null;var BCT=null;var BCU=null;function C9(){C9=M(C2);A7h();}
function BS(){var a=new C2();Zs(a);return a;}
function Zs(a){C9();K(a);a.a=B_(16);a.a.data[0]=1.0;a.a.data[5]=1.0;a.a.data[10]=1.0;a.a.data[15]=1.0;}
function Bme(a,b){return a.Ij(b.a);}
function APU(a,b){var c;c=b.data;a.a.data[0]=c[0];a.a.data[1]=c[1];a.a.data[2]=c[2];a.a.data[3]=c[3];a.a.data[4]=c[4];a.a.data[5]=c[5];a.a.data[6]=c[6];a.a.data[7]=c[7];a.a.data[8]=c[8];a.a.data[9]=c[9];a.a.data[10]=c[10];a.a.data[11]=c[11];a.a.data[12]=c[12];a.a.data[13]=c[13];a.a.data[14]=c[14];a.a.data[15]=c[15];return a;}
function BkF(a,b){return a.Mm(b.dx,b.dv,b.dw,b.en);}
function A_O(a,b,c,d,e){return a.To(0.0,0.0,0.0,b,c,d,e);}
function Bg$(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t;i=e*2.0;j=f*2.0;k=g*2.0;l=h*i;m=h*j;n=h*k;o=e*i;p=e*j;q=e*k;r=f*j;s=f*k;t=g*k;a.a.data[0]=1.0-(r+t);a.a.data[4]=p-n;a.a.data[8]=q+m;a.a.data[12]=b;a.a.data[1]=p+n;a.a.data[5]=1.0-(o+t);a.a.data[9]=s-l;a.a.data[13]=c;a.a.data[2]=q-m;a.a.data[6]=s+l;a.a.data[10]=1.0-(o+r);a.a.data[14]=d;a.a.data[3]=0.0;a.a.data[7]=0.0;a.a.data[11]=0.0;a.a.data[15]=1.0;return a;}
function A8e(a,b,c,d){return a.OJ(b.l,b.m,b.n,c.dx,c.dv,c.dw,c.en,d.l,d.m,d.n);}
function A4E(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o,p,q,r,s,t,u,v,w;l=e*2.0;m=f*2.0;n=g*2.0;o=h*l;p=h*m;q=h*n;r=e*l;s=e*m;t=e*n;u=f*m;v=f*n;w=g*n;a.a.data[0]=i*(1.0-(u+w));a.a.data[4]=j*(s-q);a.a.data[8]=k*(t+p);a.a.data[12]=b;a.a.data[1]=i*(s+q);a.a.data[5]=j*(1.0-(r+w));a.a.data[9]=k*(v-o);a.a.data[13]=c;a.a.data[2]=i*(t-p);a.a.data[6]=j*(v+o);a.a.data[10]=k*(1.0-(r+u));a.a.data[14]=d;a.a.data[3]=0.0;a.a.data[7]=0.0;a.a.data[11]=0.0;a.a.data[15]=1.0;return a;}
function AXP(a,b){C9();BCK.data[0]=a.a.data[0]*b.a.data[0]+a.a.data[4]*b.a.data[1]+a.a.data[8]*b.a.data[2]+a.a.data[12]*b.a.data[3];BCK.data[4]=a.a.data[0]*b.a.data[4]+a.a.data[4]*b.a.data[5]+a.a.data[8]*b.a.data[6]+a.a.data[12]*b.a.data[7];BCK.data[8]=a.a.data[0]*b.a.data[8]+a.a.data[4]*b.a.data[9]+a.a.data[8]*b.a.data[10]+a.a.data[12]*b.a.data[11];BCK.data[12]=a.a.data[0]*b.a.data[12]+a.a.data[4]*b.a.data[13]+a.a.data[8]*b.a.data[14]+a.a.data[12]*b.a.data[15];BCK.data[1]=a.a.data[1]*b.a.data[0]+a.a.data[5]
*b.a.data[1]+a.a.data[9]*b.a.data[2]+a.a.data[13]*b.a.data[3];BCK.data[5]=a.a.data[1]*b.a.data[4]+a.a.data[5]*b.a.data[5]+a.a.data[9]*b.a.data[6]+a.a.data[13]*b.a.data[7];BCK.data[9]=a.a.data[1]*b.a.data[8]+a.a.data[5]*b.a.data[9]+a.a.data[9]*b.a.data[10]+a.a.data[13]*b.a.data[11];BCK.data[13]=a.a.data[1]*b.a.data[12]+a.a.data[5]*b.a.data[13]+a.a.data[9]*b.a.data[14]+a.a.data[13]*b.a.data[15];BCK.data[2]=a.a.data[2]*b.a.data[0]+a.a.data[6]*b.a.data[1]+a.a.data[10]*b.a.data[2]+a.a.data[14]*b.a.data[3];BCK.data[6]
=a.a.data[2]*b.a.data[4]+a.a.data[6]*b.a.data[5]+a.a.data[10]*b.a.data[6]+a.a.data[14]*b.a.data[7];BCK.data[10]=a.a.data[2]*b.a.data[8]+a.a.data[6]*b.a.data[9]+a.a.data[10]*b.a.data[10]+a.a.data[14]*b.a.data[11];BCK.data[14]=a.a.data[2]*b.a.data[12]+a.a.data[6]*b.a.data[13]+a.a.data[10]*b.a.data[14]+a.a.data[14]*b.a.data[15];BCK.data[3]=a.a.data[3]*b.a.data[0]+a.a.data[7]*b.a.data[1]+a.a.data[11]*b.a.data[2]+a.a.data[15]*b.a.data[3];BCK.data[7]=a.a.data[3]*b.a.data[4]+a.a.data[7]*b.a.data[5]+a.a.data[11]*b.a.data[6]
+a.a.data[15]*b.a.data[7];BCK.data[11]=a.a.data[3]*b.a.data[8]+a.a.data[7]*b.a.data[9]+a.a.data[11]*b.a.data[10]+a.a.data[15]*b.a.data[11];BCK.data[15]=a.a.data[3]*b.a.data[12]+a.a.data[7]*b.a.data[13]+a.a.data[11]*b.a.data[14]+a.a.data[15]*b.a.data[15];return a.Ij(BCK);}
function AR8(a){a.a.data[0]=1.0;a.a.data[4]=0.0;a.a.data[8]=0.0;a.a.data[12]=0.0;a.a.data[1]=0.0;a.a.data[5]=1.0;a.a.data[9]=0.0;a.a.data[13]=0.0;a.a.data[2]=0.0;a.a.data[6]=0.0;a.a.data[10]=1.0;a.a.data[14]=0.0;a.a.data[3]=0.0;a.a.data[7]=0.0;a.a.data[11]=0.0;a.a.data[15]=1.0;return a;}
function BhJ(a){return a.a.data[0]*a.a.data[5]*a.a.data[10]+a.a.data[4]*a.a.data[9]*a.a.data[2]+a.a.data[8]*a.a.data[1]*a.a.data[6]-a.a.data[0]*a.a.data[9]*a.a.data[6]-a.a.data[4]*a.a.data[1]*a.a.data[10]-a.a.data[8]*a.a.data[5]*a.a.data[2];}
function APg(a,b,c,d,e){var f,g,h,i,j;a.fP();f=1.0/A1L(d*0.017453292519943295/2.0);g=c+b;h=b-c;i=g/h;j=2.0*c*b/h;a.a.data[0]=f/e;a.a.data[1]=0.0;a.a.data[2]=0.0;a.a.data[3]=0.0;a.a.data[4]=0.0;a.a.data[5]=f;a.a.data[6]=0.0;a.a.data[7]=0.0;a.a.data[8]=0.0;a.a.data[9]=0.0;a.a.data[10]=i;a.a.data[11]=(-1.0);a.a.data[12]=0.0;a.a.data[13]=0.0;a.a.data[14]=j;a.a.data[15]=0.0;return a;}
function Bek(a,b,c,d,e){a.Co(b,b+d,c,c+e,0.0,1.0);return a;}
function Be2(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a.fP();h=c-b;i=2.0/h;j=e-d;k=2.0/j;l=g-f;m=(-2.0)/l;n= -(c+b)/h;o= -(e+d)/j;p= -(g+f)/l;a.a.data[0]=i;a.a.data[1]=0.0;a.a.data[2]=0.0;a.a.data[3]=0.0;a.a.data[4]=0.0;a.a.data[5]=k;a.a.data[6]=0.0;a.a.data[7]=0.0;a.a.data[8]=0.0;a.a.data[9]=0.0;a.a.data[10]=m;a.a.data[11]=0.0;a.a.data[12]=n;a.a.data[13]=o;a.a.data[14]=p;a.a.data[15]=1.0;return a;}
function AQn(a,b,c,d){a.fP();a.a.data[12]=b;a.a.data[13]=c;a.a.data[14]=d;return a;}
function A7Y(a,b,c){if(c===0.0){a.fP();return a;}C9();return a.Kr(BCL.zf(b,c));}
function ASI(a,b,c){C9();(BCN.L(b)).b0();(BCO.L(b)).b0();(BCO.jn(c)).b0();((BCP.L(BCO)).jn(BCN)).b0();a.fP();a.a.data[0]=BCO.l;a.a.data[4]=BCO.m;a.a.data[8]=BCO.n;a.a.data[1]=BCP.l;a.a.data[5]=BCP.m;a.a.data[9]=BCP.n;a.a.data[2]= -BCN.l;a.a.data[6]= -BCN.m;a.a.data[10]= -BCN.n;return a;}
function A_C(a,b,c,d){C9();(BCQ.L(c)).fN(b);a.W7(BCQ,d);a.ii(BCR.NB( -b.l, -b.m, -b.n));return a;}
function APy(a,b){b.l=a.a.data[12];b.m=a.a.data[13];b.n=a.a.data[14];return b;}
function SP(b,c){var d,e,f,g;C9();d=c.data;e=b.data;f=B_(16);g=f.data;g[0]=e[0]*d[0]+e[4]*d[1]+e[8]*d[2]+e[12]*d[3];g[4]=e[0]*d[4]+e[4]*d[5]+e[8]*d[6]+e[12]*d[7];g[8]=e[0]*d[8]+e[4]*d[9]+e[8]*d[10]+e[12]*d[11];g[12]=e[0]*d[12]+e[4]*d[13]+e[8]*d[14]+e[12]*d[15];g[1]=e[1]*d[0]+e[5]*d[1]+e[9]*d[2]+e[13]*d[3];g[5]=e[1]*d[4]+e[5]*d[5]+e[9]*d[6]+e[13]*d[7];g[9]=e[1]*d[8]+e[5]*d[9]+e[9]*d[10]+e[13]*d[11];g[13]=e[1]*d[12]+e[5]*d[13]+e[9]*d[14]+e[13]*d[15];g[2]=e[2]*d[0]+e[6]*d[1]+e[10]*d[2]+e[14]*d[3];g[6]=e[2]*d[4]
+e[6]*d[5]+e[10]*d[6]+e[14]*d[7];g[10]=e[2]*d[8]+e[6]*d[9]+e[10]*d[10]+e[14]*d[11];g[14]=e[2]*d[12]+e[6]*d[13]+e[10]*d[14]+e[14]*d[15];g[3]=e[3]*d[0]+e[7]*d[1]+e[11]*d[2]+e[15]*d[3];g[7]=e[3]*d[4]+e[7]*d[5]+e[11]*d[6]+e[15]*d[7];g[11]=e[3]*d[8]+e[7]*d[9]+e[11]*d[10]+e[15]*d[11];g[15]=e[3]*d[12]+e[7]*d[13]+e[11]*d[14]+e[15]*d[15];Bi(f,0,b,0,16);}
function AAY(b){var c;C9();c=b.data;return c[3]*c[6]*c[9]*c[12]-c[2]*c[7]*c[9]*c[12]-c[3]*c[5]*c[10]*c[12]+c[1]*c[7]*c[10]*c[12]+c[2]*c[5]*c[11]*c[12]-c[1]*c[6]*c[11]*c[12]-c[3]*c[6]*c[8]*c[13]+c[2]*c[7]*c[8]*c[13]+c[3]*c[4]*c[10]*c[13]-c[0]*c[7]*c[10]*c[13]-c[2]*c[4]*c[11]*c[13]+c[0]*c[6]*c[11]*c[13]+c[3]*c[5]*c[8]*c[14]-c[1]*c[7]*c[8]*c[14]-c[3]*c[4]*c[9]*c[14]+c[0]*c[7]*c[9]*c[14]+c[1]*c[4]*c[11]*c[14]-c[0]*c[5]*c[11]*c[14]-c[2]*c[5]*c[8]*c[15]+c[1]*c[6]*c[8]*c[15]+c[2]*c[4]*c[9]*c[15]-c[0]*c[6]*c[9]*c[15]
-c[1]*c[4]*c[10]*c[15]+c[0]*c[5]*c[10]*c[15];}
function Vx(b){var c,d,e,f,g;C9();c=B_(16);d=AAY(b);if(d===0.0)return 0;e=c.data;f=b.data;e[0]=f[9]*f[14]*f[7]-f[13]*f[10]*f[7]+f[13]*f[6]*f[11]-f[5]*f[14]*f[11]-f[9]*f[6]*f[15]+f[5]*f[10]*f[15];e[4]=f[12]*f[10]*f[7]-f[8]*f[14]*f[7]-f[12]*f[6]*f[11]+f[4]*f[14]*f[11]+f[8]*f[6]*f[15]-f[4]*f[10]*f[15];e[8]=f[8]*f[13]*f[7]-f[12]*f[9]*f[7]+f[12]*f[5]*f[11]-f[4]*f[13]*f[11]-f[8]*f[5]*f[15]+f[4]*f[9]*f[15];e[12]=f[12]*f[9]*f[6]-f[8]*f[13]*f[6]-f[12]*f[5]*f[10]+f[4]*f[13]*f[10]+f[8]*f[5]*f[14]-f[4]*f[9]*f[14];e[1]=
f[13]*f[10]*f[3]-f[9]*f[14]*f[3]-f[13]*f[2]*f[11]+f[1]*f[14]*f[11]+f[9]*f[2]*f[15]-f[1]*f[10]*f[15];e[5]=f[8]*f[14]*f[3]-f[12]*f[10]*f[3]+f[12]*f[2]*f[11]-f[0]*f[14]*f[11]-f[8]*f[2]*f[15]+f[0]*f[10]*f[15];e[9]=f[12]*f[9]*f[3]-f[8]*f[13]*f[3]-f[12]*f[1]*f[11]+f[0]*f[13]*f[11]+f[8]*f[1]*f[15]-f[0]*f[9]*f[15];e[13]=f[8]*f[13]*f[2]-f[12]*f[9]*f[2]+f[12]*f[1]*f[10]-f[0]*f[13]*f[10]-f[8]*f[1]*f[14]+f[0]*f[9]*f[14];e[2]=f[5]*f[14]*f[3]-f[13]*f[6]*f[3]+f[13]*f[2]*f[7]-f[1]*f[14]*f[7]-f[5]*f[2]*f[15]+f[1]*f[6]*f[15];e[6]
=f[12]*f[6]*f[3]-f[4]*f[14]*f[3]-f[12]*f[2]*f[7]+f[0]*f[14]*f[7]+f[4]*f[2]*f[15]-f[0]*f[6]*f[15];e[10]=f[4]*f[13]*f[3]-f[12]*f[5]*f[3]+f[12]*f[1]*f[7]-f[0]*f[13]*f[7]-f[4]*f[1]*f[15]+f[0]*f[5]*f[15];e[14]=f[12]*f[5]*f[2]-f[4]*f[13]*f[2]-f[12]*f[1]*f[6]+f[0]*f[13]*f[6]+f[4]*f[1]*f[14]-f[0]*f[5]*f[14];e[3]=f[9]*f[6]*f[3]-f[5]*f[10]*f[3]-f[9]*f[2]*f[7]+f[1]*f[10]*f[7]+f[5]*f[2]*f[11]-f[1]*f[6]*f[11];e[7]=f[4]*f[10]*f[3]-f[8]*f[6]*f[3]+f[8]*f[2]*f[7]-f[0]*f[10]*f[7]-f[4]*f[2]*f[11]+f[0]*f[6]*f[11];e[11]=f[8]*f[5]
*f[3]-f[4]*f[9]*f[3]-f[8]*f[1]*f[7]+f[0]*f[9]*f[7]+f[4]*f[1]*f[11]-f[0]*f[5]*f[11];e[15]=f[4]*f[9]*f[2]-f[8]*f[5]*f[2]+f[8]*f[1]*f[6]-f[0]*f[9]*f[6]-f[4]*f[1]*f[10]+f[0]*f[5]*f[10];g=1.0/d;f[0]=e[0]*g;f[4]=e[4]*g;f[8]=e[8]*g;f[12]=e[12]*g;f[1]=e[1]*g;f[5]=e[5]*g;f[9]=e[9]*g;f[13]=e[13]*g;f[2]=e[2]*g;f[6]=e[6]*g;f[10]=e[10]*g;f[14]=e[14]*g;f[3]=e[3]*g;f[7]=e[7]*g;f[11]=e[11]*g;f[15]=e[15]*g;return 1;}
function AGS(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;C9();e=b.data;f=c.data;g=d+0|0;h=f[g]*e[3];i=d+1|0;j=h+f[i]*e[7];k=d+2|0;l=1.0/(j+f[k]*e[11]+e[15]);m=(f[g]*e[0]+f[i]*e[4]+f[k]*e[8]+e[12])*l;n=(f[g]*e[1]+f[i]*e[5]+f[k]*e[9]+e[13])*l;o=(f[g]*e[2]+f[i]*e[6]+f[k]*e[10]+e[14])*l;f[g]=m;f[i]=n;f[k]=o;}
function Hu(b,c){C9();SP(b,c);}
function AAr(b,c,d,e,f){var g;C9();g=0;while(g<e){AGS(b,c,d);d=d+f|0;g=g+1|0;}}
function Qh(b){C9();return Vx(b);}
function BcC(a,b,c,d){C9();BCK.data[0]=1.0;BCK.data[4]=0.0;BCK.data[8]=0.0;BCK.data[12]=b;BCK.data[1]=0.0;BCK.data[5]=1.0;BCK.data[9]=0.0;BCK.data[13]=c;BCK.data[2]=0.0;BCK.data[6]=0.0;BCK.data[10]=1.0;BCK.data[14]=d;BCK.data[3]=0.0;BCK.data[7]=0.0;BCK.data[11]=0.0;BCK.data[15]=1.0;Hu(a.a,BCK);return a;}
function A7L(a,b,c){if(c===0.0)return a;C9();BCL.zf(b,c);return a.RH(BCL);}
function A0L(a,b){C9();b.OZ(BCK);Hu(a.a,BCK);return a;}
function BfV(a){var b,c;a:{b:{if(!D9(a.a.data[0],1.0))break b;if(!D9(a.a.data[5],1.0))break b;if(!D9(a.a.data[10],1.0))break b;b=a.a.data[4];if(!EE(b))break b;if(!EE(a.a.data[8]))break b;if(!EE(a.a.data[1]))break b;if(!EE(a.a.data[9]))break b;b=a.a.data[2];if(!EE(b))break b;if(EE(a.a.data[6])){c=0;break a;}}c=1;}return c;}
function A7h(){BCK=B_(16);BCL=KO();BCM=KO();BCN=S();BCO=S();BCP=S();BCQ=S();BCR=BS();BCS=S();BCT=S();BCU=S();}
var Mc=D();
var BCV=null;function BCW(){BCW=M(Mc);BjK();}
function BjK(){BCV=Bf((My()).data.length);BCV.data[Br(BAa)]=1;BCV.data[Br(BAb)]=2;BCV.data[Br(BAc)]=3;BCV.data[Br(Bz5)]=4;BCV.data[Br(Bz6)]=5;BCV.data[Br(Bz7)]=6;BCV.data[Br(Bz8)]=7;BCV.data[Br(Bz_)]=8;BCV.data[Br(Bz9)]=9;BCV.data[Br(Bz$)]=10;}
var AM1=D(Bs);
function Bki(){var a=new AM1();Bgi(a);return a;}
function Bgi(a){CY(a);}
var AGn=D(BX);
function Ky(){C.call(this);this.g5=null;}
var BCX=null;var BCY=null;function Dy(){Dy=M(Ky);AX0();}
function Bq9(){var a=new Ky();ABt(a);return a;}
function VO(){var b,c,d,$$je;Dy();b=BCX;CG(b);a:{try{c=O5();if(c.w$===null)c.w$=Bq9();d=c.w$;Bx(b);}catch($$e){$$je=R($$e);d=$$je;break a;}return d;}Bx(b);G(d);}
function O5(){var b,c,$$je;Dy();b=BCX;CG(b);a:{try{if(!(BCY!==null&&BCY.n5===BwP)){if(BCY!==null)BCY.cJ();BCY=Bn_();}c=BCY;Bx(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return c;}Bx(b);G(c);}
function ABt(a){Dy();K(a);a.g5=A9h(0,8);a.sJ();}
function Bj4(a,b,c){return a.J_(b,c,0.0,0);}
function Bkz(a,b,c,d,e){var f,g,h,i,$$je;Dy();f=BCX;CG(f);a:{try{CG(a);b:{try{CG(b);c:{try{if(b.h6!==null)G(Bl(B(465)));b.h6=a;g=Cx(H_(),N(1000000));h=BE(g,Buz(c*1000.0));if(F4(BCY.jc,W))h=Dj(h,Dj(g,BCY.jc));b.hw=h;b.uZ=Buz(d*1000.0);b.l4=e;a.g5.C(b);Bx(b);break c;}catch($$e){$$je=R($$e);i=$$je;}Bx(b);G(i);}Bx(a);break b;}catch($$e){$$je=R($$e);i=$$je;}Bx(a);G(i);}EM(BCX);Bx(f);}catch($$e){$$je=R($$e);i=$$je;break a;}return b;}Bx(f);G(i);}
function A3Z(a){var b,c,d,e,$$je;Dy();b=BCX;CG(b);a:{b:{try{c=O5();d=c.gM;if(!d.jd(a,1))break b;Bx(b);}catch($$e){$$je=R($$e);e=$$je;break a;}return;}try{d.C(a);EM(BCX);Bx(b);}catch($$e){$$je=R($$e);e=$$je;break a;}return;}Bx(b);G(e);}
function A2u(a,b,c){var d,e,f,g,$$je;CG(a);try{d=0;e=a.g5.h;while(d<e){f=a.g5.p(d);CG(f);a:{try{if(F4(f.hw,b)){c=AAB(c,Dj(f.hw,b));Bx(f);break a;}if(!f.l4){f.h6=null;a.g5.uJ(d);d=d+(-1)|0;e=e+(-1)|0;}else{f.hw=BE(b,f.uZ);c=AAB(c,f.uZ);if(f.l4>0)f.l4=f.l4-1|0;}f.wO.RP(f);Bx(f);break a;}catch($$e){$$je=R($$e);g=$$je;Bx(f);G(g);}}d=d+1|0;}return c;}finally{Bx(a);}}
function AY9(a,b){var c,d,e,f,$$je;CG(a);try{c=0;d=a.g5.h;while(c<d){e=a.g5.p(c);CG(e);try{e.hw=BE(e.hw,b);Bx(e);}catch($$e){$$je=R($$e);f=$$je;Bx(e);G(f);}c=c+1|0;}}finally{Bx(a);}}
function AMv(b,c){Dy();return (VO()).JI(b,c);}
function AX0(){BCX=M5();}
var AF$=D(Ht);
function Bn6(a){var b=new AF$();BeG(b,a);return b;}
function BeG(a,b){Ni(a,b);}
var ACI=D(Eg);
function Ww(){U.call(this);this.RN=0.0;}
function BnQ(a){var b=new Ww();APr(b,a);return b;}
function APr(a,b){Ci(a);a.RN=b*2.0;}
function XE(){var a=this;DX.call(a);a.v_=0;a.rs=0;}
function Bqu(a,b,c){var d=new XE();BgE(d,a,b,c);return d;}
function BgE(a,b,c,d){Iq(a,b,0.5,0.5);a.v_=c;a.rs=d;}
function A3h(a,b,c,d,e,f,g,h){var i,j,k,l;if(a.v_){if((c+2|0)>d){if(h.v3())i=null;else{Bz();i=Bvy;}return i;}j=b.data;a.v_=0;k=c+1|0;l=j[c];if(l==(-1)){if(j[k]!=(-2))c=k+(-1)|0;else{c=k+1|0;a.rs=1;}}else if(l!=(-2))c=k+(-1)|0;else if(j[k]!=(-1))c=k+(-1)|0;else{c=k+1|0;a.rs=0;}}return !a.rs?WW(a,b,c,d,e,f,g,h):ALn(a,b,c,d,e,f,g,h);}
function ALn(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=null;a:{while(c<d){if(f>=g)break a;if((c+2|0)>d){if(h.d1(2))break a;Bz();i=Bvy;break a;}j=b.data;k=c+1|0;l=j[c]&255;c=k+1|0;m=j[k]&255;n=(l|m<<8)&65535;if(!Cn(n)){if(B8(n)){c=c+(-2)|0;i=Cj(2);break a;}j=e.data;k=f+1|0;j[f]=n;f=k;}else{if((c+2|0)>=d){if(!h.d1(4)){Bz();i=Bvy;}c=c+(-2)|0;break a;}k=c+1|0;o=j[c]&255;c=k+1|0;k=j[k]&255;p=(o|k<<8)&65535;if(!B8(p)){c=c+(-4)|0;i=Cj(4);break a;}if((f+2|0)>g){if(h.ey(2))break a;Bz();i=Bvx;break a;}j=e.data;k=f+1|0;j[f]
=n;f=k+1|0;j[k]=p;}}}h.eF(c);h.d7(f);return i;}
function WW(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=null;a:{while(c<d){if(f>=g)break a;if((c+2|0)>d){if(h.d1(2))break a;Bz();i=Bvy;break a;}j=b.data;k=c+1|0;l=j[c]&255;c=k+1|0;m=j[k]&255;n=(m|l<<8)&65535;if(!Cn(n)){if(B8(n)){c=c+(-2)|0;i=Cj(2);break a;}j=e.data;k=f+1|0;j[f]=n;f=k;}else{if((c+2|0)>=d){if(!h.d1(4)){Bz();i=Bvy;}c=c+(-2)|0;break a;}k=c+1|0;o=j[c]&255;c=k+1|0;k=j[k]&255;p=(k|o<<8)&65535;if(!B8(p)){c=c+(-4)|0;i=Cj(4);break a;}if((f+2|0)>g){if(h.ey(2))break a;Bz();i=Bvx;break a;}j=e.data;k=f+1|0;j[f]
=n;f=k+1|0;j[k]=p;}}}h.eF(c);h.d7(f);return i;}
function ADz(){var a=this;C.call(a);a.oX=null;a.rE=0;a.iM=null;a.nn=null;}
function Bqb(a){var b=new ADz();BgR(b,a);return b;}
function BCZ(a,b){var c=new ADz();AMV(c,a,b);return c;}
function BgR(a,b){AMV(a,b,1);}
function AMV(a,b,c){K(a);a.oX=b;a.rE=c;}
function Bbw(a){if(BzX)return NW(a.oX,a.rE);if(a.iM===null){a.iM=NW(a.oX,a.rE);a.nn=NW(a.oX,a.rE);}if(a.iM.g3){a.nn.hD=0;a.nn.g3=1;a.iM.g3=0;return a.nn;}a.iM.hD=0;a.iM.g3=1;a.nn.g3=0;return a.iM;}
var AIl=D(Bs);
function IO(){var a=new AIl();Biu(a);return a;}
function C5(a){var b=new AIl();Bga(b,a);return b;}
function Biu(a){CY(a);}
function Bga(a,b){Fd(a,b);}
var AMA=D();
var Lx=D();
function AAZ(a){K(a);}
function A_f(a,b){var c,d,e,f;c=b.data;d=a.cY();e=c.length;if(e<d)b=Ot((CB(b)).gT(),d);else while(d<e){c[d]=null;d=d+1|0;}d=0;f=a.fI();while(f.bE()){c=b.data;e=d+1|0;c[d]=f.bA();d=e;}return b;}
function KU(){Lx.call(this);this.ho=0;}
function AG2(a){AAZ(a);}
function ASE(a){return BqO(a);}
var Wz=D(Fj);
function Bn4(a,b,c,d){var e=new Wz();Bgs(e,a,b,c,d);return e;}
function Bgs(a,b,c,d,e){NL(a,b,c,d,e);}
function Bij(a,b,c,d){var e,f,g,h,i;e=a.gI.j5();f=a.gI.jx();g=0;while(true){if(g>=e){a:{while(true){h=a.k.e(b,c,d);if(h>=0)break;if((b+a.bD.cr()|0)<=d.K()){h=a.bD.bR(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.bD.cr()|0)>d.K()){d.ek=1;return (-1);}i=a.bD.bR(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
var W_=D(C8);
var PL=D(0);
function Kn(){C.call(this);this.r$=null;}
function Yw(a){K(a);a.r$=By();}
function Bcj(a,b){var c,d,e;c=b.lI;if(c!==null&&c.xb(b))return c;d=a.r$.b3();while(true){if(!d.bE()){e=a.J7(b);if(e.xb(b)){e.H0();a.r$.C(e);return e;}G(Bh(B(466)));}e=d.bA();if(e.xb(b))break;}return e;}
function FB(){var a=this;Dx.call(a);a.bU=0;a.B=null;a.hW=null;}
function AC6(a,b,c,d,e,f){Hj(a,c);FK();a.hW=BC0;a.bU=b;a.B=d;a.D=e;a.bd=f;}
function HD(b){var c,d;if(b>=0)return Bc8(b,1);c=new CH;d=H();V(I(d,B(281)),b);EO(c,P(d));G(c);}
function Xh(b){var c,d;if(b>=0)return Bc8(b,0);c=new CH;d=H();V(I(d,B(281)),b);EO(c,P(d));G(c);}
function AG7(b,c,d){return Brt(0,b.data.length,b,c,c+d|0,0,0);}
function Jm(b){return AG7(b,0,b.data.length);}
function A$a(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BC;i=H();V(I(V(I(i,B(467)),g),B(283)),f);BO(h,P(i));G(h);}if(Bj(a)<d)G(ABh());if(d<0){j=new BC;h=H();I(V(I(h,B(284)),d),B(285));BO(j,P(h));G(j);}k=a.D+a.bU|0;l=0;while(l<d){g=c+1|0;m=a.B.data;f=k+1|0;e[c]=m[k];l=l+1|0;c=g;k=f;}a.D=a.D+d|0;return a;}}e=b.data;j=new BC;f=e.length;h=H();Bp(V(I(V(I(h,B(286)),c),B(57)),f),41);BO(j,P(h));G(j);}
function AZf(a,b){return a.Df(b,0,b.data.length);}
function Bj5(a,b,c,d){var e,f,g,h,i,j,k,l;if(!d)return a;if(a.ck())G(DR());if(Bj(a)<d)G(HJ());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BC;i=H();V(I(V(I(i,B(468)),g),B(283)),f);BO(h,P(i));G(h);}if(d<0){h=new BC;i=H();I(V(I(i,B(284)),d),B(285));BO(h,P(i));G(h);}j=a.D+a.bU|0;k=0;while(k<d){l=a.B.data;g=j+1|0;f=c+1|0;l[j]=e[c];k=k+1|0;j=g;c=f;}a.D=a.D+d|0;return a;}}e=b.data;h=new BC;f=e.length;i=H();Bp(V(I(V(I(i,B(286)),c),B(57)),f),41);BO(h,P(i));G(h);}
function AF5(a,b){return a.zP(b,0,b.data.length);}
function A8c(a){return 1;}
function JC(a){return a.B;}
function Hg(a,b){a.hW=b;return a;}
function MH(a){HI(a);return a;}
function LX(a){I0(a);return a;}
function A_e(a,b){Lj(a,b);return a;}
function A15(a,b){Iz(a,b);return a;}
function AQf(a){return LX(a);}
function AZu(a,b){return a.Sz(b);}
function A66(a,b){return a.gv(b);}
var WA=D(BL);
function A2F(){var a=new WA();ARG(a);return a;}
function ARG(a){CX(a);}
function Bdj(a,b,c,d){if(b&&!(d.ks()&&b==d.eC()))return (-1);return a.k.e(b,c,d);}
function Bb1(a,b){return 0;}
function AXV(a){return B(469);}
function EB(){var a=this;C.call(a);a.l=0.0;a.m=0.0;a.n=0.0;}
var BBN=null;var BBO=null;var BBL=null;var BBK=null;var BC1=null;function J5(){J5=M(EB);AOZ();}
function S(){var a=new EB();AH1(a);return a;}
function CR(a,b,c){var d=new EB();WK(d,a,b,c);return d;}
function AH1(a){J5();K(a);}
function WK(a,b,c,d){J5();K(a);a.I(b,c,d);}
function Bdv(a,b,c,d){a.l=b;a.m=c;a.n=d;return a;}
function ARA(a,b){return a.I(b.l,b.m,b.n);}
function A2B(a,b){return a.Ek(b.l,b.m,b.n);}
function AWj(a,b,c,d){return a.I(a.l+b,a.m+c,a.n+d);}
function AX5(a,b){return a.Os(b.l,b.m,b.n);}
function A1W(a,b,c,d){return a.I(a.l-b,a.m-c,a.n-d);}
function Bif(a,b){return a.I(a.l*b,a.m*b,a.n*b);}
function AAn(b,c,d){J5();return FV(b*b+c*c+d*d);}
function Bl6(a){return FV(a.l*a.l+a.m*a.m+a.n*a.n);}
function AQU(a){return a.l*a.l+a.m*a.m+a.n*a.n;}
function A$4(a,b){var c,d,e;c=b.l-a.l;d=b.m-a.m;e=b.n-a.n;return FV(c*c+d*d+e*e);}
function ATi(a,b){var c,d,e;c=b.l-a.l;d=b.m-a.m;e=b.n-a.n;return c*c+d*d+e*e;}
function Bmr(a){var b;b=a.wz();if(b!==0.0&&b!==1.0)return a.dk(1.0/FV(b));return a;}
function A2X(a,b){return a.l*b.l+a.m*b.m+a.n*b.n;}
function A$m(a,b){return a.I(a.m*b.n-a.n*b.m,a.n*b.l-a.l*b.n,a.l*b.m-a.m*b.l);}
function Bd7(a,b,c,d){return a.I(a.m*d-a.n*c,a.n*b-a.l*d,a.l*c-a.m*b);}
function A1J(a,b){var c,d;c=b.a;d=c.data;return a.I(a.l*d[0]+a.m*d[4]+a.n*d[8]+d[12],a.l*d[1]+a.m*d[5]+a.n*d[9]+d[13],a.l*d[2]+a.m*d[6]+a.n*d[10]+d[14]);}
function A7C(a,b){var c,d;c=b.hp;d=c.data;return a.I(a.l*d[0]+a.m*d[3]+a.n*d[6],a.l*d[1]+a.m*d[4]+a.n*d[7],a.l*d[2]+a.m*d[5]+a.n*d[8]);}
function A9G(a,b){var c,d,e;c=b.a;d=c.data;e=1.0/(a.l*d[3]+a.m*d[7]+a.n*d[11]+d[15]);return a.I((a.l*d[0]+a.m*d[4]+a.n*d[8]+d[12])*e,(a.l*d[1]+a.m*d[5]+a.n*d[9]+d[13])*e,(a.l*d[2]+a.m*d[6]+a.n*d[10]+d[14])*e);}
function ARL(a,b,c){J5();BC1.VA(b,c);return a.lG(BC1);}
function Bmm(a){return a.l===0.0&&a.m===0.0&&a.n===0.0?1:0;}
function AYA(a,b,c){a.l=a.l+c*(b.l-a.l);a.m=a.m+c*(b.m-a.m);a.n=a.n+c*(b.n-a.n);return a;}
function APG(a){return ((((((((H()).c(B(470))).co(a.l)).c(B(423))).co(a.m)).c(B(423))).co(a.n)).c(B(471))).d();}
function Bip(a){var b;b=31+C_(a.l)|0;b=(31*b|0)+C_(a.m)|0;b=(31*b|0)+C_(a.n)|0;return b;}
function ARx(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(CB(a)!==CB(b))return 0;c=b;if(C_(a.l)!=C_(c.l))return 0;if(C_(a.m)!=C_(c.m))return 0;if(C_(a.n)==C_(c.n))return 1;return 0;}
function ATm(a){a.l=0.0;a.m=0.0;a.n=0.0;return a;}
function AOZ(){BBN=CR(1.0,0.0,0.0);BBO=CR(0.0,1.0,0.0);BBL=CR(0.0,0.0,1.0);BBK=CR(0.0,0.0,0.0);BC1=BS();}
function Ip(){var a=this;C.call(a);a.c4=0.0;a.c3=0.0;}
var BC2=null;var BC3=null;var BC4=null;function AZq(){AZq=M(Ip);A9D();}
function BN(){var a=new Ip();XS(a);return a;}
function ADj(a,b){var c=new Ip();ZM(c,a,b);return c;}
function XS(a){AZq();K(a);}
function ZM(a,b,c){AZq();K(a);a.c4=b;a.c3=c;}
function Ba9(a){return FV(a.c4*a.c4+a.c3*a.c3);}
function A85(a,b){a.c4=b.c4;a.c3=b.c3;return a;}
function ANa(a,b,c){a.c4=b;a.c3=c;return a;}
function BiZ(a){var b;b=a.t1();if(b!==0.0){a.c4=a.c4/b;a.c3=a.c3/b;}return a;}
function AZG(a,b){var c,d;c=b.c4-a.c4;d=b.c3-a.c3;return FV(c*c+d*d);}
function A9D(){BC2=ADj(1.0,0.0);BC3=ADj(0.0,1.0);BC4=ADj(0.0,0.0);}
function Gh(){var a=this;C.call(a);a.yS=null;a.vZ=W;a.rX=W;a.ud=W;}
function BC5(a,b,c,d){var e=new Gh();R2(e,a,b,c,d);return e;}
function BC6(a,b,c){var d=new Gh();ACc(d,a,b,c);return d;}
function Dm(a,b){var c=new Gh();IR(c,a,b);return c;}
function BA(a){var b=new Gh();A2A(b,a);return b;}
function R2(a,b,c,d,e){K(a);a.yS=b;a.vZ=c;a.rX=d;a.ud=e;}
function ACc(a,b,c,d){R2(a,b,c,d,W);}
function IR(a,b,c){R2(a,b,W,W,c);}
function A2A(a,b){ACc(a,b,W,W);}
function AZh(a,b,c,d){var e,f;e=d!==null&&d.dn!==null?Fk(d.dn):W;f=d!==null&&d.cD!==null?Fk(d.cD):W;return Z(Bk(e,a.vZ),a.vZ)&&Z(Bk(f,a.rX),a.rX)&&Z(Bk(B3(e,f),a.ud),a.ud)?1:0;}
function Kq(){B9.call(this);this.h0=null;}
var BBt=W;function L4(){L4=M(Kq);Ba5();}
function Boe(){var a=new Kq();Mf(a);return a;}
function Br6(a){var b=new Kq();XM(b,a);return b;}
function Mf(a){L4();Gz(a,BBt);a.h0=Ee(1);}
function XM(a,b){L4();Mf(a);a.h0.ow(b.h0);}
function BfK(a){return Br6(a);}
function AYo(a){var b,c,d;b=HL(a);c=a.h0.b3();while(c.bE()){d=c.bA();b=(1229*b|0)+(d!==null?d.bl():0)|0;}return b;}
function BiJ(a){return a.Xd();}
function Ba5(){BBt=Cf(B(472));}
var AKJ=D(Cw);
var Ph=D(Hz);
var BC7=null;function A06(){A06=M(Ph);Bg_();}
function Bn8(a){var b=new Ph();XO(b,a);return b;}
function Bsh(a){var b=new Ph();ABi(b,a);return b;}
function XO(a,b){A06();LO(a);a.dc(N(AJz(Y((b.bX())))),1);}
function A_5(a){UJ(Y(a.bb));}
function ABi(a,b){A06();LO(a);}
function Bg_(){BC7=Bsh(0);}
function AJz(b){var otherJSObj=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.btCollisionConfiguration);var jsObj=new $rt_globals.Bullet.btCollisionDispatcher(otherJSObj);return $rt_globals.Bullet.getPointer(jsObj);}
function UJ(b){var jsObj=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.btCollisionDispatcher);$rt_globals.Bullet.destroy(jsObj);}
function AKj(){var a=this;H5.call(a);a.hG=null;a.hx=null;a.mU=0;}
function Bsu(a){var b=new AKj();A9w(b,a);return b;}
function A9w(a,b){AL6(a,b);}
function A_0(a){S6(a);a.hG=a.N;a.mU=a.mU+1|0;return a.N;}
function A9q(a){var b,c;a.mU=Bm(0,a.mU-1|0);if(a.hG===null)return;a:{if(a.hG!==a.N&&!a.mU){a.hx=a.hG;b=0;c=a.hx.data.length;while(true){if(b>=c)break a;a.hx.data[b]=null;b=b+1|0;}}}a.hG=null;}
function S6(a){if(a.hG!==null&&a.hG===a.N){if(a.hx!==null&&a.hx.data.length>=a.h){Bi(a.N,0,a.hx,0,a.h);a.N=a.hx;a.hx=null;}else a.k4(a.N.data.length);return;}}
var AGd=D(Ek);
function Ur(){C.call(this);this.re=null;}
function T6(a){var b=new Ur();A29(b,a);return b;}
function A29(a,b){K(a);a.re=b;}
function Hd(a){return a.re.E3();}
function Zk(a,b){a.re.DC(b);}
function AMY(a,b){var c,d,e,f,$$je;if(b===null)b=Bb(C,0);a:{b:{c:{try{c=a.re.F7(b);}catch($$e){$$je=R($$e);if($$je instanceof CH){d=$$je;break c;}else if($$je instanceof Od){d=$$je;break a;}else if($$je instanceof Pq){d=$$je;break b;}else if($$je instanceof PC){d=$$je;c=new DI;e=(Hd(a)).v();f=H();I(I(f,B(473)),e);EL(c,P(f),d);G(c);}else{throw $$e;}}return c;}c=new DI;e=(Hd(a)).v();f=H();I(I(f,B(474)),e);EL(c,P(f),d);G(c);}c=new DI;e=(Hd(a)).v();f=H();I(I(f,B(475)),e);EL(c,P(f),d);G(c);}c=new DI;e=(Hd(a)).v();f
=H();I(I(f,B(475)),e);EL(c,P(f),d);G(c);}
var AFh=D();
function ALG(){var a=this;GE.call(a);a.D4=0;a.ux=0;a.wd=null;}
function Bsy(a,b,c,d,e,f){var g=new ALG();Bl5(g,a,b,c,d,e,f);return g;}
function Bl5(a,b,c,d,e,f,g){Op(a,c,e,f);a.ux=b;a.D4=g;a.wd=d;}
function ATp(a,b){return a.wd.data[b+a.ux|0];}
function Bcd(a,b,c){a.wd.data[b+a.ux|0]=c;}
function A$f(a){return a.D4;}
var AFU=D();
var Lq=D();
var BC8=null;var BC9=null;function Zz(){Zz=M(Lq);A6_();}
function M4(b){Zz();return !(b&1)?0:1;}
function AK4(b){var c,d,e,f,g,h,i;Zz();c=H();d=AKd();e=0;f=BC9.data;g=f.length;h=0;while(h<g){i=f[h];if(b&i){if(c.j()>0)c.bv(32);c.c(d.data[e]);}e=e+1|0;h=h+1|0;}return c.d();}
function AKd(){Zz();if(BC8===null)BC8=J(B1,[B(476),B(477),B(478),B(479),B(480),B(481),B(482),B(483),B(484),B(485),B(486),B(487)]);return BC8;}
function A6_(){BC9=PP([1,4,2,1024,8,16,128,64,32,256,2048,512]);}
var FZ=D(Gc);
var Xy=D(FZ);
var ACL=D(Ba);
function Bsb(){var a=new ACL();AXb(a);return a;}
function AXb(a){BG(a);}
function BkN(a){var b;b=BnH(a);b.bm=1;return b;}
var Jd=D();
function AFb(a){K(a);}
function W1(){var a=this;Jd.call(a);a.g2=0;a.cz=null;a.kY=0;a.Jw=0.0;a.tr=0;}
function DO(){var a=new W1();AR2(a);return a;}
function Bm5(a){var b=new W1();Sn(b,a);return b;}
function BC$(a,b){var c=new W1();AMh(c,a,b);return c;}
function BaN(a,b){return Bb(QZ,b);}
function AR2(a){Sn(a,16);}
function Sn(a,b){AMh(a,b,0.75);}
function ABb(b){var c,d;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function AMh(a,b,c){var d;AFb(a);if(b>=0&&c>0.0){d=ABb(b);a.g2=0;a.cz=a.EO(d);a.Jw=c;Ov(a);return;}G(DB());}
function Ov(a){a.tr=a.cz.data.length*a.Jw|0;}
function A3c(a,b){var c;c=AIj(a,b);if(c===null)return null;return c.gq;}
function AIj(a,b){var c,d,e;if(b===null)c=NN(a);else{d=MS(b);e=d&(a.cz.data.length-1|0);c=Nf(a,b,e,d);}return c;}
function Nf(a,b,c,d){var e,f;e=a.cz.data[c];while(e!==null){if(e.q$==d){f=e.is;if(ADb(b,f))break;}e=e.fo;}return e;}
function NN(a){var b;b=a.cz.data[0];while(b!==null&&b.is!==null){b=b.fo;}return b;}
function AYc(a,b,c){return a.WV(b,c);}
function A2Q(a,b,c){var d,e,f,g,h;if(b===null){d=NN(a);if(d===null){a.kY=a.kY+1|0;d=a.zl(null,0,0);e=a.g2+1|0;a.g2=e;if(e>a.tr)a.qt();}}else{f=MS(b);g=f&(a.cz.data.length-1|0);d=Nf(a,b,g,f);if(d===null){a.kY=a.kY+1|0;d=a.zl(b,g,f);e=a.g2+1|0;a.g2=e;if(e>a.tr)a.qt();}}h=d.gq;d.gq=c;return h;}
function AZ9(a,b,c,d){var e;e=BpE(b,d);e.fo=a.cz.data[c];a.cz.data[c]=e;return e;}
function Bar(a,b){var c,d,e,f,g,h,i;c=ABb(!b?1:b<<1);d=a.EO(c);e=0;while(e<a.cz.data.length){f=a.cz.data[e];a.cz.data[e]=null;while(f!==null){g=d.data;h=f.q$&(c-1|0);i=f.fo;f.fo=g[h];g[h]=f;f=i;}e=e+1|0;}a.cz=d;Ov(a);}
function Bhc(a){a.RG(a.cz.data.length);}
function AXK(a,b){var c;c=YL(a,b);if(c===null)return null;return c.gq;}
function YL(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.cz.data[0];while(e!==null){if(e.is===null)break a;f=e.fo;d=e;e=f;}}else{g=MS(b);c=g&(a.cz.data.length-1|0);e=a.cz.data[c];while(e!==null&&!(e.q$==g&&ADb(b,e.is))){f=e.fo;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.fo=e.fo;else a.cz.data[c]=e.fo;a.kY=a.kY+1|0;a.g2=a.g2-1|0;return e;}
function A9J(a){return a.g2;}
function MS(b){return b.bl();}
function ADb(b,c){return b!==c&&!b.y(c)?0:1;}
function AKK(){var a=this;C.call(a);a.S=null;a.U=0;a.Dp=0;}
function J1(){var a=new AKK();AZX(a);return a;}
function BC_(a,b){var c=new AKK();AAL(c,a,b);return c;}
function AZX(a){AAL(a,1,16);}
function AAL(a,b,c){K(a);a.Dp=b;a.S=B_(c);}
function A9k(a,b){var c,d,e;c=a.S;d=c.data;if(a.U==d.length)c=a.wk(Bm(8,a.U*1.75|0));d=c.data;e=a.U;a.U=e+1|0;d[e]=b;}
function AO7(a,b){a.tM(b.S,0,b.U);}
function A14(a,b,c,d){if((c+d|0)<=b.U){a.tM(b.S,c,d);return;}G(Bl((((((((H()).c(B(386))).t(c)).c(B(305))).t(d)).c(B(306))).t(b.U)).d()));}
function AOk(a,b,c,d){var e,f,g;e=a.S;f=e.data;g=a.U+d|0;if(g>f.length)e=a.wk(Bm(Bm(8,g),a.U*1.75|0));Bi(b,c,e,a.U,d);a.U=a.U+d|0;}
function A9Y(a,b){if(b<a.U)return a.S.data[b];G(Dl((((((H()).c(B(307))).t(b)).c(B(308))).t(a.U)).d()));}
function A6x(a,b,c){var d,e,f,g,h,i;d=a.U;if(c>=d)G(Dl((((((H()).c(B(311))).t(c)).c(B(308))).t(a.U)).d()));if(b>c)G(Dl((((((H()).c(B(312))).t(b)).c(B(310))).t(c)).d()));e=(c-b|0)+1|0;f=d-e|0;if(a.Dp){g=a.S;h=b+e|0;Bi(g,h,a.S,b,d-h|0);}else{i=Bm(f,c+1|0);Bi(a.S,i,a.S,b,d-i|0);}a.U=f;}
function A_a(a){if(!a.U)G(C5(B(313)));return a.S.data[0];}
function AU3(a){return a.U<=0?0:1;}
function A78(a){a.U=0;}
function A0U(a,b){var c;if(b<0)G(Bl((((H()).c(B(314))).t(b)).d()));c=a.U+b|0;if(c>a.S.data.length)a.wk(Bm(Bm(8,c),a.U*1.75|0));return a.S;}
function AYq(a,b){var c,d,e;c=B_(b);d=c.data;e=a.S;Bi(e,0,c,0,BH(a.U,d.length));a.S=c;return c;}
function AQD(a,b){if(a.U>b)a.U=b;}
var ABM=D(IU);
var Q9=D(Hx);
var BDa=null;function Bj9(){Bj9=M(Q9);A5x();}
function BmZ(a,b,c,d){var e=new Q9();Zj(e,a,b,c,d);return e;}
function Bqt(a){var b=new Q9();AKe(b,a);return b;}
function Zj(a,b,c,d,e){var f,g,h,i;Bj9();JJ(a);a.Ov=b;b.nC(a);f=Y((b.bX()));g=Y((c.bX()));h=Y((d.bX()));i=Y((e.bX()));a.dc(N(AJI(f,g,h,i)),1);}
function A$8(a){YM(Y(a.bb));}
function AKe(a,b){Bj9();JJ(a);}
function A5x(){BDa=Bqt(0);}
function AJI(b,c,d,e){var dispatcherJSObj=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.btDispatcher);var broadphaceJSObj=$rt_globals.Bullet.wrapPointer(c,$rt_globals.Bullet.btBroadphaseInterface);var solverJSObj=$rt_globals.Bullet.wrapPointer(d,$rt_globals.Bullet.btConstraintSolver);var configJSObj=$rt_globals.Bullet.wrapPointer(e,$rt_globals.Bullet.btCollisionConfiguration);var jsObj=new $rt_globals.Bullet.btDiscreteDynamicsWorld(dispatcherJSObj,broadphaceJSObj,solverJSObj,configJSObj);return $rt_globals.Bullet.getPointer(jsObj);}
function YM(b){var jsObj=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.btDiscreteDynamicsWorld);$rt_globals.Bullet.destroy(jsObj);}
var AKs=D(EZ);
var AAj=D(Eg);
function ACH(){var a=this;C.call(a);a.w1=null;a.jy=null;a.kG=null;a.f4=null;a.iV=null;a.ls=null;a.wB=0;a.v1=null;}
function Brq(a){var b=new ACH();AV8(b,a);return b;}
function AV8(a,b){K(a);a.w1=EH();a.jy=EH();a.kG=EH();a.f4=EH();a.iV=EH();a.ls=By();a.wB=(-1);a.v1=b;}
function Ba3(a){var b,c;b=a.v1;c=H();I(I(c,b),B(488));return P(c);}
function Bgk(a,b,c){var d,e,f;d=FY();e=a.FQ();f=H();I(I(f,e),c);d.Ae(1,P(f),Bm8(a,c,b));}
function AUO(a,b){if(a.PP(b.we)){b.Ac=b.II;b.w9=1;b.tb=0;b.lJ=0;return 0;}if(b.lJ)return 0;b.tb=0;b.w9=0;b.lJ=1;a.L5(1,b.we,b.zF,b.Fh,BqC(a,b));return 1;}
function AUI(a,b,c,d,e,f){var g,h,i;g=FY();h=a.FQ();i=H();I(I(i,h),c);g.NI(b,P(i),d,e,BmH(a,f,d,c));}
function A7g(a,b,c,d){var e,f,g;e=FY();f=a.v1;g=H();I(I(g,f),c);e.jN(b,P(g),d);}
function ANX(a,b,c,d){a:{Brg();switch(BzB.data[Br(b)]){case 1:a.f4.z(c,d);break a;case 2:break;case 3:a.iV.z(c,d);break a;case 4:a.kG.z(c,d);break a;case 5:a.w1.z(c,null);break a;default:break a;}a.jy.z(c,d);}}
function AP7(a,b){var c,$$je;if(a.f4.c_(b)){a:{try{c=P3((a.f4.V(b)).M$(B(47)));}catch($$e){$$je=R($$e);if($$je instanceof K$){break a;}else{throw $$e;}}return c;}return null;}if(a.jy.c_(b))return P3(CE(1));if(a.iV.c_(b))return AAb(a.iV.V(b));if(!a.kG.c_(b))return null;return P3(CE(1));}
function AUV(a,b){var c,d;a:{if(!a.f4.c_(b)&&!a.jy.c_(b)&&!a.iV.c_(b)&&!a.kG.c_(b)){c=a.w1;if(!c.c_(b)){d=0;break a;}}d=1;}return d;}
function AQH(a,b){return a.f4.c_(b);}
function A1s(a,b){var c;if(a.f4.c_(b)){c=a.f4.V(b);A$$();return N((c.Eq(BDb)).data.length);}if(a.jy.c_(b))return N(1);if(a.iV.c_(b))return N(JW(a.iV.V(b)));if(!a.kG.c_(b))return W;return N(JW(a.kG.V(b)));}
var LK=D();
var BDc=null;var BDd=null;function N6(){N6=M(LK);AT_();}
function WO(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;N6();d=$rt_doubleToLongBits(b);c.yH=Z(Bk(d,BI(0, 2147483648)),W)?0:1;e=Bk(d,BI(4294967295, 1048575));f=Y(EG(d,52))&2047;if(Z(e,W)&&!f){c.tX=W;c.st=0;return;}g=0;if(f)h=B3(e,BI(0, 1048576));else{h=CC(e,1);while(Z(Bk(h,BI(0, 1048576)),W)){h=CC(h,1);f=f+(-1)|0;g=g+1|0;}}i=AIw(BDd,f);if(i<0)i=( -i|0)-2|0;j=f-BDd.data[i]|0;k=12+j|0;l=NC(h,BDc.data[i],k);if(M6(l,BI(2808348672, 232830643))){i=i+1|0;m=f-BDd.data[i]|0;k=12+m|0;l=NC(h,BDc.data[i],k);}n=BR(BDc.data[i],
(63-k|0)-g|0);o=EG(BE(n,N(1)),1);p=EG(n,1);if(Z(h,BI(0, 1048576)))p=EG(p,2);q=AAS(l,p);r=ABL(l,o);m=Boo(q,r);h=m>0?Bn(Cx(l,q),q):m<0?BE(Bn(Cx(l,r),r),r):Bn(Cx(BE(l,Cx(r,N(2))),r),r);if(M6(h,BI(2808348672, 232830643))){i=i+1|0;h=Cx(h,N(10));}else if(HP(h,BI(1569325056, 23283064))){i=i+(-1)|0;h=Bn(h,N(10));}c.tX=h;c.st=i-330|0;}
function AAS(b,c){var d,e;N6();d=N(10);while(DV(d,c)){d=Bn(d,N(10));}e=GN(b,d);if(M6(e,Cx(c,N(2))))d=Cx(d,N(10));return d;}
function ABL(b,c){var d,e;N6();d=N(1);while(DV(d,c)){d=Bn(d,N(10));}e=GN(b,d);if(F4(Dj(d,e),Cx(c,N(2))))d=Cx(d,N(10));return d;}
function NC(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;N6();e=Bk(b,N(65535));f=Bk(BR(b,16),N(65535));g=Bk(BR(b,32),N(65535));h=Bk(BR(b,48),N(65535));i=Bk(c,N(65535));j=Bk(BR(c,16),N(65535));k=Bk(BR(c,32),N(65535));l=Bk(BR(c,48),N(65535));m=BE(BE(Bn(k,e),Bn(j,f)),Bn(i,g));n=BE(BE(BE(Bn(l,e),Bn(k,f)),Bn(j,g)),Bn(i,h));o=BE(BE(Bn(l,f),Bn(k,g)),Bn(j,h));p=BE(Bn(l,g),Bn(k,h));q=Bn(l,h);r=BE(BE(CC(q,32+d|0),CC(p,16+d|0)),CC(o,d));s=d>16?BE(r,CC(n,d-16|0)):BE(r,BR(n,16-d|0));s=BE(s,BR(m,32-d|0));return s;}
function AT_(){var b,c,d,e,f,g,h,i,j,k,l;BDc=RU(660);BDd=Bf(660);b=BI(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=BDc.data;g=d+330|0;f[g]=Kl(e,N(80));BDd.data[g]=c;e=Kl(e,N(10));h=AC3(e,N(10));while(DV(e,b)&&Z(Bk(e,BI(0, 2147483648)),W)){e=CC(e,1);c=c+1|0;h=CC(h,1);}e=BE(e,Cx(h,N(10)));d=d+1|0;}i=BI(3435973836, 214748364);j=1023;d=0;while(d<330){k=0;e=b;while(F4(e,i)){e=EG(e,1);k=k+1|0;j=j+(-1)|0;}h=Bn(e,N(10));if(k<=0)b=h;else{l=Bk(b,N((1<<k)-1|0));b=BE(h,EG(Bn(l,N(10)),k));}f=BDc.data;g=(330-d|0)
-1|0;f[g]=Kl(b,N(80));BDd.data[g]=j;d=d+1|0;}}
function LQ(){var a=this;C.call(a);a.kU=0;a.ou=0;}
var Bvy=null;var Bvx=null;function Bz(){Bz=M(LQ);A$9();}
function MJ(a,b){var c=new LQ();AES(c,a,b);return c;}
function AES(a,b,c){Bz();K(a);a.kU=b;a.ou=c;}
function AXZ(a){return a.kU?0:1;}
function BjP(a){return a.kU!=1?0:1;}
function BcU(a){return !a.CB()&&!a.wl()?0:1;}
function AT5(a){return a.kU!=2?0:1;}
function A3n(a){return a.kU!=3?0:1;}
function ASR(a){if(a.nM())return a.ou;G(BtF());}
function Cj(b){Bz();return MJ(2,b);}
function HT(b){Bz();return MJ(3,b);}
function A03(a){switch(a.kU){case 0:G(BnE());case 1:G(Bp6());case 2:G(Bq_(a.ou));case 3:G(BnF(a.ou));default:}}
function A$9(){Bvy=MJ(0,0);Bvx=MJ(1,0);}
function OY(){BL.call(this);this.jq=0;}
function Bpx(a){var b=new OY();AK3(b,a);return b;}
function AK3(a,b){CX(a);a.jq=b;}
function BgU(a,b,c,d){var e,f,g,h;e=!d.ks()?c.j():d.K();if(b>=e){d.bH(a.jq,0);return a.k.e(b,c,d);}f=e-b|0;if(f==2&&c.g(b)==13){g=b+1|0;if(c.g(g)==10){d.bH(a.jq,0);return a.k.e(b,c,d);}}a:{if(f==1){h=c.g(b);if(h==10)break a;if(h==13)break a;if(h==133)break a;if((h|1)==8233)break a;}return (-1);}d.bH(a.jq,0);return a.k.e(b,c,d);}
function A9F(a,b){var c;c=!b.eN(a.jq)?0:1;b.bH(a.jq,(-1));return c;}
function BdX(a){return B(489);}
var P8=D(H7);
var BDe=null;function A09(){A09=M(P8);A0G();}
function BoX(){var a=new P8();AId(a);return a;}
function Bpz(a){var b=new P8();AGD(b,a);return b;}
function AId(a){A09();J7(a);a.dc(N(Wn()),1);}
function A3O(a){AIg(Y(a.bb));}
function AGD(a,b){A09();J7(a);}
function A0G(){BDe=Bpz(0);}
function Wn(){var jsObj=new $rt_globals.Bullet.btDefaultCollisionConfiguration();return $rt_globals.Bullet.getPointer(jsObj);}
function AIg(b){var jsObj=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.btDefaultCollisionConfiguration);$rt_globals.Bullet.destroy(jsObj);}
function H4(){var a=this;C.call(a);a.O=null;a.jp=0;a.eW=0;a.CU=0;a.s5=0;a.ex=0;a.q=0;a.G8=0;a.jR=null;a.gw=null;a.A=0;a.nS=0;a.mr=0;a.na=0;a.ET=null;}
var BDf=null;var BDg=null;var BDh=0;function Brs(a,b){var c=new H4();BjF(c,a,b);return c;}
function BjF(a,b,c){K(a);a.eW=1;a.ET=b;if((c&16)>0)b=Bcx(b);else if((c&128)>0)b=A9_(b);a.O=Ck(b.j()+2|0);Bi(b.o0(),0,a.O,0,b.j());a.O.data[a.O.data.length-1|0]=0;a.O.data[a.O.data.length-2|0]=0;a.G8=a.O.data.length;a.jp=c;Fh(a);Fh(a);}
function Bc0(a){return a.ex;}
function A9f(a,b){if(b>0&&b<3)a.eW=b;if(b==1)AGs(a);}
function A8S(a,b){a.jp=b;a.q=a.ex;a.gw=a.jR;a.A=a.mr+1|0;a.na=a.mr;Fh(a);}
function ARC(a){return a.jR;}
function AZZ(a){return a.jR===null?0:1;}
function APX(a){return a.gw===null?0:1;}
function BhC(a){Fh(a);return a.s5;}
function A9Q(a){var b;b=a.jR;Fh(a);return b;}
function A7K(a){return a.q;}
function ASQ(a){return a.s5;}
function A9_(b){return b;}
function AGs(a){a.q=a.ex;a.gw=a.jR;a.A=a.na;a.na=a.mr;Fh(a);}
function Fh(a){var b,c,d,e,f,g,h,$$je;a.s5=a.ex;a.ex=a.q;a.jR=a.gw;a.mr=a.na;a.na=a.A;while(true){b=0;a.q=a.A>=a.O.data.length?0:Kg(a);a.gw=null;if(a.eW==4){if(a.q!=92)return;a.q=a.A>=a.O.data.length?0:a.O.data[B6(a)];switch(a.q){case 69:break;default:a.q=92;a.A=a.nS;return;}a.eW=a.CU;a.q=a.A>(a.O.data.length-2|0)?0:Kg(a);}a:{if(a.q!=92){if(a.eW==1)switch(a.q){case 36:a.q=(-536870876);break a;case 40:if(a.O.data[a.A]!=63){a.q=(-2147483608);break a;}B6(a);c=a.O.data[a.A];d=0;while(true){b:{if(d){d=0;switch(c)
{case 33:break;case 61:a.q=(-134217688);B6(a);break b;default:G(Ch(B(49),a.d(),a.A));}a.q=(-67108824);B6(a);}else{switch(c){case 33:break;case 60:B6(a);c=a.O.data[a.A];d=1;break b;case 61:a.q=(-536870872);B6(a);break b;case 62:a.q=(-33554392);B6(a);break b;default:a.q=AMK(a);if(a.q<256){a.jp=a.q;a.q=a.q<<16;a.q=(-1073741784)|a.q;break b;}a.q=a.q&255;a.jp=a.q;a.q=a.q<<16;a.q=(-16777176)|a.q;break b;}a.q=(-268435416);B6(a);}}if(!d)break;}break a;case 41:a.q=(-536870871);break a;case 42:case 43:case 63:e=a.A>=
a.O.data.length?42:a.O.data[a.A];switch(e){case 43:a.q=a.q|(-2147483648);B6(a);break a;case 63:a.q=a.q|(-1073741824);B6(a);break a;default:}a.q=a.q|(-536870912);break a;case 46:a.q=(-536870866);break a;case 91:a.q=(-536870821);a.rv(2);break a;case 93:if(a.eW!=2)break a;a.q=(-536870819);break a;case 94:a.q=(-536870818);break a;case 123:a.gw=AAQ(a,a.q);break a;case 124:a.q=(-536870788);break a;default:}else if(a.eW==2)switch(a.q){case 38:a.q=(-536870874);break a;case 45:a.q=(-536870867);break a;case 91:a.q=(-536870821);break a;case 93:a.q
=(-536870819);break a;case 94:a.q=(-536870818);break a;default:}}else{f=a.A>=(a.O.data.length-2|0)?(-1):Kg(a);c:{a.q=f;switch(a.q){case -1:G(Ch(B(49),a.d(),a.A));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.q
=Yn(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.eW!=1)break a;a.q=(-2147483648)|a.q;break a;case 65:a.q=(-2147483583);break a;case 66:a.q=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:G(Ch(B(49),a.d(),a.A));case 68:case 83:case 87:case 100:case 115:case 119:a.gw=NK(HK(a.O,
a.nS,1),0);a.q=0;break a;case 71:a.q=(-2147483577);break a;case 80:case 112:break c;case 81:a.CU=a.eW;a.eW=4;b=1;break a;case 90:a.q=(-2147483558);break a;case 97:a.q=7;break a;case 98:a.q=(-2147483550);break a;case 99:if(a.A>=(a.O.data.length-2|0))G(Ch(B(49),a.d(),a.A));a.q=a.O.data[B6(a)]&31;break a;case 101:a.q=27;break a;case 102:a.q=12;break a;case 110:a.q=10;break a;case 114:a.q=13;break a;case 116:a.q=9;break a;case 117:a.q=Qb(a,4);break a;case 120:a.q=Qb(a,2);break a;case 122:a.q=(-2147483526);break a;default:}break a;}g
=AIo(a);h=0;if(a.q==80)h=1;try{a.gw=NK(g,h);}catch($$e){$$je=R($$e);if($$je instanceof Pz){G(Ch(B(49),a.d(),a.A));}else{throw $$e;}}a.q=0;}}if(b)continue;else break;}}
function AIo(a){var b,c,d,e,f;b=H0(10);if(a.A<(a.O.data.length-2|0)){if(a.O.data[a.A]!=123){c=HK(a.O,B6(a),1);d=H();I(I(d,B(490)),c);return P(d);}B6(a);e=0;a:{while(a.A<(a.O.data.length-2|0)){e=a.O.data[B6(a)];if(e==125)break a;b.bv(e);}}if(e!=125)G(Ch(B(49),a.d(),a.A));}if(!b.j())G(Ch(B(49),a.d(),a.A));f=b.d();if(f.j()==1){c=H();I(I(c,B(490)),f);return P(c);}b:{c:{if(f.j()>3){if(f.ff(B(490)))break c;if(f.ff(B(491)))break c;}break b;}f=f.fc(2);}return f;}
function AAQ(a,b){var c,d,e,f,$$je;c=H0(4);d=(-1);e=2147483647;a:{while(true){if(a.A>=a.O.data.length)break a;b=a.O.data[B6(a)];if(b==125)break a;if(b==44&&d<0)try{d=HB(c.d(),10);c.Rf(0,c.j());continue;}catch($$e){$$je=R($$e);if($$je instanceof CD){break;}else{throw $$e;}}c.bv(b&65535);}G(Ch(B(49),a.d(),a.A));}if(b!=125)G(Ch(B(49),a.d(),a.A));if(c.j()>0)b:{try{e=HB(c.d(),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=R($$e);if($$je instanceof CD){}else{throw $$e;}}G(Ch(B(49),a.d(),a.A));}else if(d<0)G(Ch(B(49),
a.d(),a.A));if((d|e|(e-d|0))<0)G(Ch(B(49),a.d(),a.A));f=a.A>=a.O.data.length?42:a.O.data[a.A];c:{switch(f){case 43:a.q=(-2147483525);B6(a);break c;case 63:a.q=(-1073741701);B6(a);break c;default:}a.q=(-536870789);}return BsN(d,e);}
function ATq(a){return a.ET;}
function BbA(a){return !a.ex&&!a.q&&a.A==a.G8&&!a.lX()?1:0;}
function Lm(b){return b<0?0:1;}
function A4l(a){return !a.bW()&&!a.lX()&&Lm(a.ex)?1:0;}
function A8w(a){return a.ex<=56319&&a.ex>=55296?1:0;}
function Bhz(a){return a.ex<=57343&&a.ex>=56320?1:0;}
function NS(b){return b<=56319&&b>=55296?1:0;}
function MV(b){return b<=57343&&b>=56320?1:0;}
function Qb(a,b){var c,d,e,f,$$je;c=H0(b);d=a.O.data.length-2|0;e=0;while(true){f=Cu(e,b);if(f>=0)break;if(a.A>=d)break;c.bv(a.O.data[B6(a)]);e=e+1|0;}if(!f)a:{try{f=HB(c.d(),16);}catch($$e){$$je=R($$e);if($$je instanceof CD){break a;}else{throw $$e;}}return f;}G(Ch(B(49),a.d(),a.A));}
function Yn(a){var b,c,d,e,f;b=3;c=1;d=a.O.data.length-2|0;e=Rl(a.O.data[a.A],8);switch(e){case -1:break;default:if(e>3)b=2;B6(a);a:{while(true){if(c>=b)break a;if(a.A>=d)break a;f=Rl(a.O.data[a.A],8);if(f<0)break;e=(e*8|0)+f|0;B6(a);c=c+1|0;}}return e;}G(Ch(B(49),a.d(),a.A));}
function AMK(a){var b,c,d;b=1;c=a.jp;a:while(true){if(a.A>=a.O.data.length)G(Ch(B(49),a.d(),a.A));b:{c:{d=a.O.data[a.A];switch(d){case 41:B6(a);return c|256;case 45:if(!b)G(Ch(B(49),a.d(),a.A));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}B6(a);}B6(a);return c;}
function B6(a){a.nS=a.A;if(a.jp&4)AC1(a);else a.A=a.A+1|0;return a.nS;}
function AC1(a){var b;b=a.O.data.length-2|0;a.A=a.A+1|0;a:while(true){if(a.A<b&&Zg(a.O.data[a.A])){a.A=a.A+1|0;continue;}if(a.A>=b)break;if(a.O.data[a.A]!=35)break;a.A=a.A+1|0;while(true){if(a.A>=b)continue a;if(V0(a,a.O.data[a.A]))continue a;a.A=a.A+1|0;}}return a.A;}
function V0(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function ALl(b){return BDf.Y6(b);}
function ARt(b){var c,d,e,f,g,h;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;if(!f)g=PP([d,e]);else{h=4519+f|0;g=PP([d,e,h]);}return g;}return null;}
function AW2(b){var c;c=BDg.bG(b);return c==BDh?0:1;}
function Bgm(b){return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);}
function Kg(a){var b,c,d;b=a.O.data[B6(a)];if(Cn(b)){c=a.nS+1|0;if(c<a.O.data.length){d=a.O.data[c];if(B8(d)){B6(a);return D4(b,d);}}}return b;}
function APE(a){return a.mr;}
var AHi=D(Ly);
function Bmt(){var a=new AHi();A3x(a);return a;}
function A3x(a){WG(a);}
function A7$(a){var b;b=(AGN(a)).gA(1);b.bm=1;return b;}
var AEQ=D(Dr);
var Wt=D(DU);
var AFu=D(GR);
function Bqk(a,b,c,d,e,f){var g=new AFu();AOu(g,a,b,c,d,e,f);return g;}
function AOu(a,b,c,d,e,f,g){Or(a,b,c,d,e,f,g);}
function Bfo(a,b){var c,d,e,f;c=a.f7.B.data;d=a.fY;e=b*2|0;f=(c[d+e|0]&255)<<8|a.f7.B.data[(a.fY+e|0)+1|0]&255;return f<<16>>16;}
function A96(a,b,c){var d,e,f;d=a.f7.B.data;e=a.fY;f=b*2|0;d[e+f|0]=c>>8<<24>>24;a.f7.B.data[(a.fY+f|0)+1|0]=c<<24>>24;}
var Oe=D(E2);
var F9=D(Cs);
function A_W(){var a=new F9();BeK(a);return a;}
function BeK(a){Gx(a);}
var Fa=D(Bc);
var BAV=null;var BAU=null;var BAX=null;var BAW=null;var BDi=null;function Fi(){Fi=M(Fa);AXq();}
function Nl(a,b){var c=new Fa();AB3(c,a,b);return c;}
function AB3(a,b,c){Fi();B$(a,b,c);}
function AXq(){BAV=Nl(B(492),0);BAU=Nl(B(493),1);BAX=Nl(B(29),2);BAW=Nl(B(494),3);BDi=J(Fa,[BAV,BAU,BAX,BAW]);}
var FO=D();
var Bxp=null;var Bxr=null;var Bxs=null;var Bxq=null;var Bxo=null;function UV(){UV=M(FO);Bb$();}
function Bb$(){Bxp=PP([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);Bxr=A89([N(1),N(10),N(100),N(1000),N(10000),N(100000),N(1000000),N(10000000),N(100000000),N(1000000000),BI(1410065408, 2),BI(1215752192, 23),BI(3567587328, 232),BI(1316134912, 2328),BI(276447232, 23283),BI(2764472320, 232830),BI(1874919424, 2328306),BI(1569325056, 23283064),BI(2808348672, 232830643)]);Bxs=A89([N(1),N(10),N(100),N(10000),N(100000000),BI(1874919424, 2328306)]);Bxq=Bsp();Bxo=BrD();}
function G3(){B4.call(this);this.c9=null;}
function BsB(a,b){var c=new G3();UP(c,a,b);return c;}
function UP(a,b,c){Ds(a);a.c9=b;a.dz=c;a.bs=c.k5();}
function ANW(a,b,c,d){var e,f;e=d.kf(a.bs);d.eR(a.bs,b);f=a.c9.e(b,c,d);if(f>=0)return f;d.eR(a.bs,e);return (-1);}
function AXc(a,b,c,d){var e;e=a.c9.cL(b,c,d);if(e>=0)d.eR(a.bs,e);return e;}
function Bh1(a,b,c,d,e){var f;f=a.c9.cQ(b,c,d,e);if(f>=0)e.eR(a.bs,f);return f;}
function Bdf(a,b){return a.c9.cl(b);}
function Bgg(a){var b;b=Bo3(a);a.k=b;return b;}
function A4p(a){var b;a.cN=1;if(a.dz!==null&&!a.dz.cN)a.dz.ev();if(a.c9!==null&&!a.c9.cN){b=a.c9.iS();if(b!==null){a.c9.cN=1;a.c9=b;}a.c9.ev();}}
function FM(){var a=this;C.call(a);a.Dv=null;a.WS=W;a.Vp=0;a.TS=W;a.fR=null;a.Sb=null;a.LI=null;a.p9=0;a.x5=null;}
var BDj=null;var BDk=null;var BDl=0;var BDm=0;var BDn=null;function Ik(){Ik=M(FM);APi();}
function Br_(a){var b=new FM();ADH(b,a);return b;}
function BmW(a,b){var c=new FM();Rs(c,a,b);return c;}
function ADH(a,b){Ik();Rs(a,null,b);}
function Rs(a,b,c){var d;Ik();K(a);a.fR=M5();a.p9=1;a.LI=c;a.x5=b;d=BDl;BDl=d+1|0;a.WS=N(d);}
function A6Q(a){A0c(Bt5(a));}
function AHD(a){var b,c,d,$$je,$p,$z;$p=0;if(BaT()){var $T=RA();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{try{try{Ik();BDm=BDm+1|0;Et(a);$p=1;continue _;}catch($$e){$$je=R($$e);if($$je instanceof C6){b=$$je;}else{throw $$e;}}(a.H2()).CC(a,b);break a;}catch($$e){$$je=R($$e);c=$$je;}d=a.fR;$p=2;continue _;}c=a.fR;$p=4;continue _;case 1:a:{b:{c:{try{a.dp();if(C1()){break _;}}catch($$e){$$je=R($$e);if($$je instanceof C6){b=$$je;break c;}else{c=$$je;break b;}}c=a.fR;$p=3;continue _;}try
{(a.H2()).CC(a,b);break a;}catch($$e){$$je=R($$e);c=$$je;}}d=a.fR;$p=2;continue _;}c=a.fR;$p=4;continue _;case 2:J3(d);if(C1()){break _;}a:{try{EM(a.fR);Dw(d);break a;}catch($$e){$$je=R($$e);c=$$je;}Dw(d);G(c);}a.p9=0;BDm=BDm-1|0;Et(BDj);G(c);case 3:J3(c);if(C1()){break _;}a:{try{EM(a.fR);Dw(c);break a;}catch($$e){$$je=R($$e);d=$$je;}Dw(c);G(d);}a.p9=0;BDm=BDm-1|0;Et(BDj);return;case 4:J3(c);if(C1()){break _;}a:{try{EM(a.fR);Dw(c);break a;}catch($$e){$$je=R($$e);d=$$je;}Dw(c);G(d);}a.p9=0;BDm=BDm-1|0;Et(BDj);return;default:
A6u();}}RA().s(a,b,c,d,$p);}
function Et(b){Ik();if(BDk!==b)BDk=b;BDk.TS=FQ();}
function ALQ(a){var b,$p,$z;$p=0;if(BaT()){var $T=RA();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.x5===null)return;b=a.x5;$p=1;case 1:b.dp();if(C1()){break _;}return;default:A6u();}}RA().s(a,b,$p);}
function Dn(){Ik();return BDk;}
function AAI(a,b){a.Vp=b;}
function AUn(a){if(a.Dv!==null)return a.Dv;Ik();return BDn;}
function APi(){BDj=Br_(B(495));BDk=BDj;BDl=1;BDm=1;BDn=Btu();}
var Ru=D(0);
var ACd=D();
var S5=D(G3);
function Bo3(a){var b=new S5();A0A(b,a);return b;}
function A0A(a,b){UP(a,b.c9,b.dz);}
function AS6(a,b,c,d){var e,f,g;e=0;f=d.K();a:{while(true){if(b>f){b=e;break a;}g=d.kf(a.bs);d.eR(a.bs,b);e=a.c9.e(b,c,d);if(e>=0)break;d.eR(a.bs,g);b=b+1|0;}}return b;}
function Bl9(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=e.kf(a.bs);e.eR(a.bs,c);f=a.c9.e(c,d,e);if(f>=0)break;e.eR(a.bs,g);c=c+(-1)|0;}}return c;}
function AQQ(a){return null;}
var ABf=D(Bs);
function Bp6(){var a=new ABf();AYv(a);return a;}
function AYv(a){CY(a);}
var ACM=D();
function AX2(b){return b;}
function Ic(b){return b.length?0:1;}
function AHX(b,c){var d;d=AX2(c);b.push(d);}
function AI4(b){return b.shift();}
var R9=D(0);
function ADk(){var a=this;C.call(a);a.n5=null;a.wD=null;a.gM=null;a.w$=null;a.jc=W;}
function Bn_(){var a=new ADk();BfQ(a);return a;}
function BfQ(a){var b;K(a);a.gM=Ee(1);a.n5=BwP;a.wD=BvC;a.wD.UO(a);a.nF();b=BmW(a,B(496));AAI(b,1);b.sJ();}
function ALL(a){var b,c,d,e,f,g,h,$$je,$p,$z;$p=0;if(BaT()){var $T=RA();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Dy();b=BCX;$p=1;case 1:J3(b);if(C1()){break _;}a:{b:{c:{try{if(BCY===a&&a.n5===BwP){d:{c=N(5000);if(Z(a.jc,W)){d=Cx(H_(),N(1000000));e=0;f=a.gM.h;while(true){if(e>=f)break d;try{c=(a.gM.p(e)).SN(d,c);}catch($$e){$$je=R($$e);if($$je instanceof C6){g=$$je;break;}else{throw $$e;}}e=e+1|0;}G(QW((((H()).c(B(497))).c((CB(a.gM.p(e))).v())).d(),
g));}}if(BCY===a&&a.n5===BwP)break c;Dw(b);}else Dw(b);}catch($$e){$$je=R($$e);h=$$je;break b;}a.cJ();return;}e:{try{try{if(DV(c,W))break e;h=BCX;$p=2;continue _;}catch($$e){$$je=R($$e);if($$je instanceof F9){}else{throw $$e;}}break e;}catch($$e){$$je=R($$e);h=$$je;break b;}}try{Dw(b);break a;}catch($$e){$$je=R($$e);h=$$je;}}Dw(b);G(h);}Dy();b=BCX;continue _;case 2:a:{try{c:{try{ADA(h,c);if(C1()){break _;}break c;}catch($$e){$$je=R($$e);if($$je instanceof F9){}else{throw $$e;}}}Dw(b);break a;}catch($$e){$$je
=R($$e);h=$$je;}Dw(b);G(h);}Dy();b=BCX;$p=1;continue _;default:A6u();}}RA().s(a,b,c,d,e,f,g,h,$p);}
function A3a(a){var b,c,d,e,f,$$je;Dy();b=BCX;CG(b);a:{try{c=Dj(Cx(H_(),N(1000000)),a.jc);d=0;e=a.gM.h;while(d<e){(a.gM.p(d)).MO(c);d=d+1|0;}a.jc=W;EM(BCX);Bx(b);}catch($$e){$$je=R($$e);f=$$je;break a;}return;}Bx(b);G(f);}
function A_4(a){var b,c,$$je;Dy();b=BCX;CG(b);a:{try{a.jc=Cx(H_(),N(1000000));EM(BCX);Bx(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}Bx(b);G(c);}
function A3o(a){var b,c,$$je;Dy();b=BCX;CG(b);a:{try{if(BCY===a)BCY=null;a.gM.J();EM(BCX);Bx(b);break a;}catch($$e){$$je=R($$e);c=$$je;}Bx(b);G(c);}a.wD.K3(a);}
var AD9=D();
function Xa(){var a=this;C.call(a);a.eO=0;a.fC=null;a.rb=0;a.Jj=0.0;a.su=0;a.sX=0;a.ix=0;}
function Bjt(){var a=new Xa();ARU(a);return a;}
function BDo(a,b){var c=new Xa();AFi(c,a,b);return c;}
function ARU(a){AFi(a,51,0.800000011920929);}
function AFi(a,b,c){var d;K(a);if(c>0.0&&c<1.0){a.Jj=c;d=Hi(b,c);a.su=d*c|0;a.ix=d-1|0;a.sX=Dd(N(a.ix));a.fC=Bf(d);return;}G(Bl((((H()).c(B(258))).co(c)).d()));}
function A2Z(a,b){return Y(BR(Bn(N(b),BI(2135587861, 2654435769)),a.sX));}
function Qd(a,b){var c,d,e;c=a.fC;d=a.fk(b);while(true){e=c.data[d];if(!e)return  -(d+1|0)|0;if(e==b)break;d=(d+1|0)&a.ix;}return d;}
function A$b(a,b){var c,d;if(!b){if(a.rb)return 0;a.rb=1;a.eO=a.eO+1|0;return 1;}c=Qd(a,b);if(c>=0)return 0;d= -(c+1|0)|0;a.fC.data[d]=b;d=a.eO+1|0;a.eO=d;if(d>=a.su)AE0(a,a.fC.data.length<<1);return 1;}
function AFF(a,b){var c,d,e;c=a.fC;d=a.fk(b);while(true){e=c.data;if(!e[d])break;d=(d+1|0)&a.ix;}e[d]=b;}
function A2_(a,b){var c,d,e,f,g,h,i;if(!b){if(!a.rb)return 0;a.rb=0;a.eO=a.eO-1|0;return 1;}c=Qd(a,b);if(c<0)return 0;d=a.fC;e=a.ix;f=(c+1|0)&e;while(true){g=d.data;h=g[f];if(!h)break;i=a.fk(h);if(((f-i|0)&e)>((c-i|0)&e)){g[c]=h;c=f;}f=(f+1|0)&e;}g[c]=0;a.eO=a.eO-1|0;return 1;}
function AE0(a,b){var c,d,e,f;a:{c=a.fC.data.length;a.su=b*a.Jj|0;a.ix=b-1|0;a.sX=Dd(N(a.ix));d=a.fC;a.fC=Bf(b);if(a.eO>0){e=0;while(true){if(e>=c)break a;f=d.data[e];if(f)AFF(a,f);e=e+1|0;}}}}
function Pz(){var a=this;Bs.call(a);a.PZ=null;a.Wr=null;}
function BoM(a,b,c){var d=new Pz();A_B(d,a,b,c);return d;}
function A_B(a,b,c,d){Fd(a,b);a.PZ=c;a.Wr=d;}
var AMm=D(BC);
function MW(){var a=new AMm();A2c(a);return a;}
function A2c(a){Uo(a);}
function AGF(){Hn.call(this);this.Kk=0;}
function Bn0(a,b){var c=new AGF();ATj(c,a,b);return c;}
function ATj(a,b,c){MU(a,b,c);}
function AW8(a,b,c,d){var e,f,g,h;e=a.k0(d);if(e!==null&&(b+e.j()|0)<=d.K()){f=0;while(true){if(f>=e.j()){d.bH(a.j6,e.j());return a.k.e(b+e.j()|0,c,d);}g=Ei(EA(e.g(f)));h=b+f|0;h=EA(c.g(h));if(g!=Ei(h))break;f=f+1|0;}return (-1);}return (-1);}
function A8H(a){var b,c;b=a.Kk;c=H();V(I(c,B(498)),b);return P(c);}
var Nq=D();
var BDp=null;function Bqd(){Bqd=M(Nq);A1h();}
function O_(b){var $$je;Bqd();a:{if(b!==null)try{b.gh();break a;}catch($$e){$$je=R($$e);if($$je instanceof C6){}else{throw $$e;}}}}
function A1h(){BDp=CE(0);}
function Ln(){C.call(this);this.N4=null;}
var BC0=null;var BDq=null;function FK(){FK=M(Ln);BlU();}
function ASd(a){var b=new Ln();ACg(b,a);return b;}
function ACg(a,b){FK();K(a);a.N4=b;}
function Ge(){FK();return BC0;}
function BlU(){BC0=ASd(B(499));BDq=ASd(B(500));}
var F1=D(Bc);
var BDr=null;var ByN=null;var BDs=null;function Mn(){Mn=M(F1);A9B();}
function Bgw(a,b){var c=new F1();AAx(c,a,b);return c;}
function AAx(a,b,c){Mn();B$(a,b,c);}
function Vw(){Mn();return J(F1,[BDr,ByN]);}
function A9B(){BDr=Bgw(B(501),0);ByN=Bgw(B(502),1);BDs=Vw();}
var Oj=D(GU);
var BDt=null;function A4A(){A4A=M(Oj);A0g();}
function Bpe(){var a=new Oj();AL$(a);return a;}
function AL$(a){A4A();Pi(a);}
function AVR(a,b,c,d){BbC(b,c,d);}
function A0g(){BDt=Bpe();}
var WT=D(DY);
function BnM(a,b,c){var d=new WT();AOQ(d,a,b,c);return d;}
function AOQ(a,b,c,d){HE(a,b,c,d);}
function BlO(a,b,c,d){var e;e=d.K();if(e>b)return a.k.cQ(b,e,c,d);return a.k.e(b,c,d);}
function A11(a,b,c,d){var e;e=d.K();if(a.k.cQ(b,e,c,d)>=0)return b;return (-1);}
function BgL(a){return B(503);}
var Qg=D(0);
var Ho=D(Bc);
var BDu=null;var BDv=null;var BDw=null;function BoB(){BoB=M(Ho);Bba();}
function AO8(a,b){var c=new Ho();Y1(c,a,b);return c;}
function Y1(a,b,c){BoB();B$(a,b,c);}
function Bba(){BDu=AO8(B(504),0);BDv=AO8(B(505),1);BDw=J(Ho,[BDu,BDv]);}
var WS=D(Df);
function Brw(a,b,c){var d=new WS();A88(d,a,b,c);return d;}
function A88(a,b,c,d){GA(a,b,c,d);}
function A4J(a,b,c,d){var e;if(!a.ba.bc(d))return a.k.e(b,c,d);e=a.k.e(b,c,d);if(e>=0)return e;return a.ba.e(b,c,d);}
var AMr=D(Ha);
var M0=D(0);
var AI$=D(E6);
function A$o(a){var b=new AI$();AXN(b,a);return b;}
function AXN(a,b){AJf(a,b);}
function JU(){Bt.call(this);this.TC=0.0;}
var BDx=null;function BsY(){BsY=M(JU);BjN();}
function Bsg(a){var b=new JU();AMk(b,a);return b;}
function AMk(a,b){BsY();Db(a);a.TC=b;}
function BjN(){BDx=Bb(JU,111);}
var RH=D();
var BDy=null;function ASS(){ASS=M(RH);ANp();}
function UQ(b){ASS();return BDy.V(b);}
function AMt(){var b;ASS();BDy.J();b=BDy;DJ();b.z(B(506),By$);BDy.z(B(507),By8);BDy.z(B(508),By4);BDy.z(B(509),By5);BDy.z(B(510),By6);BDy.z(B(511),By7);BDy.z(B(512),By_);BDy.z(B(513),Bza);BDy.z(B(514),Bzb);BDy.z(B(515),Bzc);BDy.z(B(516),Bzd);BDy.z(B(517),Bze);BDy.z(B(518),Bzf);BDy.z(B(519),Bzg);BDy.z(B(520),Bzh);BDy.z(B(521),Bzi);BDy.z(B(522),Bzj);BDy.z(B(523),Bzk);BDy.z(B(524),Bzl);BDy.z(B(525),Bzm);BDy.z(B(526),Bzn);BDy.z(B(527),Bzo);BDy.z(B(528),Bzp);BDy.z(B(529),Bzq);BDy.z(B(530),Bzr);BDy.z(B(531),Bzs);BDy.z(B(532),
Bzt);BDy.z(B(533),Bzu);BDy.z(B(534),Bzv);BDy.z(B(535),Bzw);BDy.z(B(536),Bzx);BDy.z(B(537),Bzy);BDy.z(B(538),Bzz);BDy.z(B(539),BzA);}
function ANp(){BDy=EH();AMt();}
var AI6=D(Fl);
function Bop(a,b){var c=new AI6();A8U(c,a,b);return c;}
function A8U(a,b,c){MG(a,b,c);}
var AHw=D();
function AR0(){return {};}
var AFK=D(DX);
function Bs7(a){var b=new AFK();AQZ(b,a);return b;}
function AQZ(a,b){Iq(a,b,1.0,1.0);}
function A5w(a,b,c,d,e,f,g,h){var i,j,k,l,m;i=null;a:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(l&128){i=Cj(1);c=k+(-1)|0;break a;}j=e.data;m=f+1|0;j[f]=l&65535;c=k;f=m;}}h.eF(c);h.d7(f);return i;}
var X7=D();
function H1(){var a=this;C.call(a);a.W3=0;a.le=0;a.ly=0;a.Gb=null;a.hq=null;a.b9=null;a.qB=0;a.uO=null;a.pO=0;a.pP=0;a.pQ=0;a.C4=0.0;a.ov=null;a.qU=null;a.CG=null;a.O9=null;a.ji=null;a.lj=null;}
var BCv=null;var BDz=0;var BDA=null;function G$(){G$=M(H1);AWi();}
function A0k(a){var b=new H1();S9(b,a);return b;}
function SQ(a,b,c){var d=new H1();AAH(d,a,b,c);return d;}
function S9(a,b){var c,d,e,f,g,h;G$();K(a);a.pO=255;a.pP=255;a.pQ=255;a.ov=LJ(a.pO,a.pP,a.pQ,a.C4);Ig();a.qU=BDB;YK();a.CG=BBh;c=b;d=c.gx();e=c.gg.jy.V(d);Px(a,(-1),(-1),e,null);if(a.ji!==null)return;f=new DD;g=b.gx();h=H();I(I(I(h,B(540)),g),B(541));Eo(f,P(h));G(f);}
function AAH(a,b,c,d){G$();K(a);a.pO=255;a.pP=255;a.pQ=255;a.ov=LJ(a.pO,a.pP,a.pQ,a.C4);Ig();a.qU=BDB;YK();a.CG=BBh;Px(a,b,c,null,null);}
function Px(a,b,c,d,e){var f,g;if(e!==null){a.lj=e;a.le=e.getWidth();a.ly=e.getHeight();}else if(d===null){a.le=b;a.ly=c;}else{a.ji=d;a.le=d.width;a.ly=d.height;}AER();a.Gb=BDC;a.uO=P1(4);G$();f=BDz;BDz=f+1|0;a.qB=f;a.uO.Qa(0,a.qB);BCv.z(Bq(a.qB),a);g=BCv.cY();a.W3=g;}
function WM(a){var b,c,d,e,f;b=Hk();c=b.mD();d=c.createElement("canvas");a.hq=d;e=a.hq;f=a.le;e.width=f;e=a.hq;f=a.ly;e.height=f;a.b9=a.hq.getContext("2d");e=a.b9;f=$rt_ustr((IS()).d());e.globalCompositeOperation=f;}
function IS(){G$();Io();return BDD;}
function LJ(b,c,d,e){var f;G$();f=H();Bp(Jv(Bp(V(Bp(V(Bp(V(I(f,B(542)),b),44),c),44),d),44),e),41);return P(f);}
function ANN(a,b){var c,d;a.qU=b;IQ(a);c=a.b9;d=$rt_ustr((IS()).d());c.globalCompositeOperation=d;}
function ARu(a){return a.Gb;}
function AVr(a){return 6408;}
function AX8(a){return 6408;}
function A1q(a){return 5121;}
function ATY(a){return a.le;}
function AXA(a){return a.ly;}
function BhQ(a){return a.uO;}
function A9g(a){G$();BCv.t0(Bq(a.qB));}
function Bec(a){IQ(a);return a.hq;}
function IQ(a){var b,c;if(a.hq===null){WM(a);if(a.ji!==null){b=a.b9;Io();c=$rt_ustr(Gs(BDE));b.globalCompositeOperation=c;b=a.b9;c=a.ji;b.drawImage(c,0.0,0.0);b=a.b9;c=$rt_ustr(Gs(IS()));b.globalCompositeOperation=c;}if(a.lj!==null){c=a.b9;Io();b=$rt_ustr(Gs(BDE));c.globalCompositeOperation=b;b=a.b9;c=a.lj;b.drawImage(c,0.0,0.0);b=a.b9;c=$rt_ustr(Gs(IS()));b.globalCompositeOperation=c;}}}
function APJ(a){return a.hq===null&&a.ji!==null?1:0;}
function Be5(a){return a.ji;}
function BfS(a){return a.hq===null&&a.lj!==null?1:0;}
function A$A(a){return a.lj;}
function A$S(a,b,c,d,e,f,g,h){var i;i=b.sw();Mb(a,i,e,f,g,h,c,d,g,h);}
function A0a(a,b,c,d,e,f,g,h,i,j){Mb(a,b.sw(),c,d,e,f,g,h,i,j);}
function Mb(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u;IQ(a);k=a.qU;Ig();if(k===ByO){l=a.b9;k=$rt_ustr(BDA);l.fillStyle=k;l=a.b9;k=$rt_ustr(BDA);l.strokeStyle=k;l=a.b9;k="destination-out";l.globalCompositeOperation=k;a.b9.beginPath();l=a.b9;m=g;n=h;o=i;p=j;l.rect(m,n,o,p);Qx();ALu(a,BDF);a.b9.closePath();l=a.b9;k=$rt_ustr(a.ov);l.fillStyle=k;q=a.b9;l=$rt_ustr(a.ov);q.strokeStyle=l;q=a.b9;Io();l=$rt_ustr(Gs(BDD));q.globalCompositeOperation=l;}if(e&&f&&i&&j){l=a.b9;m=c;n=d;o=e;p=f;r=g;s=h;t=i;u=j;l.drawImage(b,
m,n,o,p,r,s,t,u);}a.O9=null;}
function ALu(a,b){a:{IQ(a);BnV();switch(BDG.data[Br(b)]){case 1:break;case 2:a.b9.stroke();break a;default:break a;}a.b9.fill();}}
function AWi(){BCv=DO();BDz=0;BDA=LJ(255,255,255,1.0);}
function Jw(){B9.call(this);this.Nm=null;}
var BB2=W;var BDH=W;function ALd(){ALd=M(Jw);BlD();}
function BlD(){BB2=Cf(B(543));BDH=BB2;}
var Fx=D(Fn);
var AK8=D();
var AK7=D();
var TQ=D();
function BrM(){var a=new TQ();Bgh(a);return a;}
function Bgh(a){K(a);}
function TO(){Kn.call(this);this.y$=null;}
function BDI(a){var b=new TO();AEb(b,a);return b;}
function BsI(){var a=new TO();Bk4(a);return a;}
function AEb(a,b){Yw(a);if(b===null)b=BpZ();a.y$=b;}
function Bk4(a){AEb(a,null);}
function A3s(a,b){return BnP(b,a.y$);}
var N9=D(0);
function Jh(){var a=this;C.call(a);a.FW=null;a.qN=0;a.qp=0;a.lp=null;a.dr=null;a.GW=0;a.kH=0;}
var BDJ=0;function BrX(a,b,c,d){var e=new Jh();A9L(e,a,b,c,d);return e;}
function A9L(a,b,c,d,e){K(a);a.qN=0;a.qp=0;a.kH=0;a.FW=b;a.dr=c;a.lp=d;a.GW=e;if(a.dr!==null){a.dr=RC(a,a.dr);a.qN=a.dr.bk();a.qp=a.dr.bh();if(d===null)a.lp=a.dr.gz();}}
function A6b(a){return a.kH;}
function A9M(a){if(a.kH)G(Bh(B(544)));if(a.dr===null){a.dr=RC(a,A0k(a.FW));a.qN=a.dr.bk();a.qp=a.dr.bh();if(a.lp===null)a.lp=a.dr.gz();}a.kH=1;}
function RC(a,b){var c,d,e,f,g;a:{if(BwS===null&&BDJ){c=b.bk();d=b.bh();e=Lb(c);f=Lb(d);if(c!=e)break a;if(d!=f)break a;}return b;}g=SQ(e,f,b.gz());g.Cs(b,0,0,0,0,c,d);b.cJ();return g;}
function AW_(a){var b;if(!a.kH)G(Bh(B(545)));a.kH=0;b=a.dr;a.dr=null;return b;}
function Bb_(a){return 1;}
function AWg(a){return a.qN;}
function A93(a){return a.qp;}
function ASF(a){return a.lp;}
function A7m(a){return a.GW;}
function ARM(a){return 1;}
function BeM(a){Mn();return BDr;}
function A$j(a,b){G(Bh(B(546)));}
var TI=D(CQ);
var TJ=D(CQ);
var X$=D(Gj);
function R1(a){var b=new X$();ASZ(b,a);return b;}
function ASZ(a,b){N2(a,b);}
function RD(){var a=this;B9.call(a);a.Jb=0;a.Ph=0;a.P9=0;a.Ml=0.0;}
var BDK=W;function IE(){IE=M(RD);AY4();}
function AA5(b){IE();return DW(Bk(b,BDK),b)?0:1;}
function AY4(){BDK=Cf(B(547));}
var M2=D();
var BDL=null;function FY(){return BDL;}
function AW9(b){BDL=b;}
function AIB(){var a=this;C.call(a);a.Go=null;a.uQ=null;}
function Bmw(){var a=new AIB();A7A(a);return a;}
function A7A(a){K(a);a.Go=Ee(16);a.uQ=BrN(16);}
function BgF(a,b){return a.uQ.V(b);}
function A2d(a,b){a.Go.p5(b,0);a.uQ.t0(b);}
function AJj(){var a=this;C.call(a);a.tX=W;a.st=0;a.yH=0;}
function Bsp(){var a=new AJj();AP0(a);return a;}
function AP0(a){K(a);}
function ABj(){C.call(this);this.P=null;}
function Btf(a){var b=new ABj();APc(b,a);return b;}
function APc(a,b){K(a);a.P=Bsu(4);a.P.NQ(b);}
function AVe(a,b){var c,d,e,f,$$je;c=a.P.gr();a:{try{d=0;e=a.P.h;}catch($$e){$$je=R($$e);f=$$je;break a;}b:{try{while(d<e){if(c.data[d].mK(b))break b;d=d+1|0;}}catch($$e){$$je=R($$e);f=$$je;break a;}a.P.M();return 0;}try{}catch($$e){$$je=R($$e);f=$$je;break a;}a.P.M();return 1;}a.P.M();G(f);}
function A5u(a,b){var c,d,e,f,$$je;c=a.P.gr();a:{try{d=0;e=a.P.h;}catch($$e){$$je=R($$e);f=$$je;break a;}b:{try{while(d<e){if(c.data[d].p$(b))break b;d=d+1|0;}}catch($$e){$$je=R($$e);f=$$je;break a;}a.P.M();return 0;}try{}catch($$e){$$je=R($$e);f=$$je;break a;}a.P.M();return 1;}a.P.M();G(f);}
function A5P(a,b){var c,d,e,f,$$je;c=a.P.gr();a:{try{d=0;e=a.P.h;}catch($$e){$$je=R($$e);f=$$je;break a;}b:{try{while(d<e){if(c.data[d].mt(b))break b;d=d+1|0;}}catch($$e){$$je=R($$e);f=$$je;break a;}a.P.M();return 0;}try{}catch($$e){$$je=R($$e);f=$$je;break a;}a.P.M();return 1;}a.P.M();G(f);}
function AOO(a,b,c,d,e){var f,g,h,i,$$je;f=a.P.gr();a:{try{g=0;h=a.P.h;}catch($$e){$$je=R($$e);i=$$je;break a;}b:{try{while(g<h){if(f.data[g].i6(b,c,d,e))break b;g=g+1|0;}}catch($$e){$$je=R($$e);i=$$je;break a;}a.P.M();return 0;}try{}catch($$e){$$je=R($$e);i=$$je;break a;}a.P.M();return 1;}a.P.M();G(i);}
function A1j(a,b,c,d,e){var f,g,h,i,$$je;f=a.P.gr();a:{try{g=0;h=a.P.h;}catch($$e){$$je=R($$e);i=$$je;break a;}b:{try{while(g<h){if(f.data[g].iA(b,c,d,e))break b;g=g+1|0;}}catch($$e){$$je=R($$e);i=$$je;break a;}a.P.M();return 0;}try{}catch($$e){$$je=R($$e);i=$$je;break a;}a.P.M();return 1;}a.P.M();G(i);}
function AS_(a,b,c,d){var e,f,g,h,$$je;e=a.P.gr();a:{try{f=0;g=a.P.h;}catch($$e){$$je=R($$e);h=$$je;break a;}b:{try{while(f<g){if(e.data[f].jZ(b,c,d))break b;f=f+1|0;}}catch($$e){$$je=R($$e);h=$$je;break a;}a.P.M();return 0;}try{}catch($$e){$$je=R($$e);h=$$je;break a;}a.P.M();return 1;}a.P.M();G(h);}
function A22(a,b,c){var d,e,f,g,$$je;d=a.P.gr();a:{try{e=0;f=a.P.h;}catch($$e){$$je=R($$e);g=$$je;break a;}b:{try{while(e<f){if(d.data[e].ox(b,c))break b;e=e+1|0;}}catch($$e){$$je=R($$e);g=$$je;break a;}a.P.M();return 0;}try{}catch($$e){$$je=R($$e);g=$$je;break a;}a.P.M();return 1;}a.P.M();G(g);}
function Ber(a,b,c){var d,e,f,g,$$je;d=a.P.gr();a:{try{e=0;f=a.P.h;}catch($$e){$$je=R($$e);g=$$je;break a;}b:{try{while(e<f){if(d.data[e].qd(b,c))break b;e=e+1|0;}}catch($$e){$$je=R($$e);g=$$je;break a;}a.P.M();return 0;}try{}catch($$e){$$je=R($$e);g=$$je;break a;}a.P.M();return 1;}a.P.M();G(g);}
var M1=D(0);
function Wk(){var a=this;C.call(a);a.Bv=0;a.iv=0;a.Ik=0;a.yZ=0;a.lf=0;a.eL=null;a.nh=null;a.Px=0;a.CZ=0;a.Af=0;a.Vf=0;a.xj=0;a.QO=0;a.tN=null;a.hV=null;a.wA=null;}
function BnT(a,b,c,d){var e=new Wk();Bat(e,a,b,c,d);return e;}
function Boi(a,b,c,d,e){var f=new Wk();Xz(f,a,b,c,d,e);return f;}
function Bat(a,b,c,d,e){Xz(a,b,c,d,e,Bjo(c,d,e));a.Px=1;}
function Xz(a,b,c,d,e,f){var g,h,i,j;K(a);a.tN=BS();a.yZ=b;a.CZ=e;a.nh=f;g=TW(a,c,d,e);a.eL=Bm2(0,b,0,g);a.hV=B_(CJ(b,(a.eL.fq()).cn/4|0));a.Af=(a.eL.fq()).cn/4|0;a.Vf=a.eL.kJ(8)===null?0:(a.eL.kJ(8)).cP/4|0;a.xj=a.eL.kJ(4)===null?0:(a.eL.kJ(4)).cP/4|0;if(a.eL.kJ(16)===null)h=0;else{i=a.eL;h=(i.kJ(16)).cP/4|0;}a.QO=h;a.wA=Bb(B1,e);j=0;while(j<e){a.wA.data[j]=(((H()).c(B(548))).t(j)).d();j=j+1|0;}}
function TW(a,b,c,d){var e,f,g;e=By();e.C(DP(1,3,B(367)));if(b)e.C(DP(8,3,B(453)));if(c)e.C(DP(4,4,B(368)));f=0;while(f<d){e.C(DP(16,2,(((H()).c(B(549))).t(f)).d()));f=f+1|0;}g=Bb(Fv,e.h);f=0;while(f<e.h){g.data[f]=e.p(f);f=f+1|0;}return g;}
function AQO(a,b,c){a.tN.b$(b);a.Bv=c;}
function A2N(a,b,c,d,e){a.hV.data[a.iv+a.xj|0]=VA(b,c,d,e);}
function A7_(a,b){a.hV.data[a.iv+a.xj|0]=b;}
function Bd8(a,b,c,d){var e;e=a.iv;a.hV.data[e]=b;a.hV.data[e+1|0]=c;a.hV.data[e+2|0]=d;a.Ik=0;a.iv=a.iv+a.Af|0;a.lf=a.lf+1|0;}
function Bjv(a){var b;if(!a.lf)return;a.nh.d9();a.nh.xT(B(550),a.tN);b=0;while(b<a.CZ){a.nh.t3(a.wA.data[b],b);b=b+1|0;}a.eL.yc(a.hV,0,a.iv);a.eL.Oz(a.nh,a.Bv);a.Ik=0;a.iv=0;a.lf=0;}
function APV(a){a.dC();}
function AS4(a){return a.lf;}
function ASL(a){return a.yZ;}
function A5U(b,c,d){var e,f,g;e=((((H()).c(B(551))).c(!b?B(49):B(552))).c(!c?B(49):B(553))).d();f=0;while(f<d){e=(((((H()).c(e)).c(B(554))).t(f)).c(B(555))).d();f=f+1|0;}g=((((H()).c(e)).c(B(556))).c(!c?B(49):B(557))).d();f=0;while(f<d){g=(((((H()).c(g)).c(B(558))).t(f)).c(B(555))).d();f=f+1|0;}g=(((H()).c(g)).c(B(559))).d();if(c)g=(((H()).c(g)).c(B(560))).d();f=0;while(f<d){g=((((((((H()).c(g)).c(B(561))).t(f)).c(B(562))).c(B(549))).t(f)).c(B(555))).d();f=f+1|0;}g=(((H()).c(g)).c(B(563))).d();return g;}
function Bd2(b,c,d){var e,f,g,h;e=B(564);if(c)e=(((H()).c(e)).c(B(557))).d();f=0;while(f<d){g=(((((H()).c(e)).c(B(558))).t(f)).c(B(555))).d();e=(((((H()).c(g)).c(B(565))).t(f)).c(B(555))).d();f=f+1|0;}g=((H()).c(e)).c(B(566));h=!c?B(567):B(568);g=(g.c(h)).d();if(d>0)g=(((H()).c(g)).c(B(459))).d();f=0;while(f<d){g=f!=(d-1|0)?(((((((H()).c(g)).c(B(569))).t(f)).c(B(570))).t(f)).c(B(571))).d():(((((((H()).c(g)).c(B(569))).t(f)).c(B(570))).t(f)).c(B(471))).d();f=f+1|0;}g=(((H()).c(g)).c(B(572))).d();return g;}
function Bjo(b,c,d){var e,f,g;e=A5U(b,c,d);f=Bd2(b,c,d);g=VP(e,f);if(g.po())return g;G(Bh((((H()).c(B(372))).c(g.oO())).d()));}
var KT=D(CW);
var BDM=null;var BDN=null;function BDO(){BDO=M(KT);A7p();}
function A7p(){BDM=E3();BDN=BsT();}
function AKw(){var a=this;Gw.call(a);a.vX=null;a.iR=0;a.MF=0;a.sH=0;}
function BDP(a,b,c){var d=new AKw();AMZ(d,a,b,c);return d;}
function P3(a){var b=new AKw();APF(b,a);return b;}
function AMZ(a,b,c,d){M_(a);a.vX=b;a.iR=c;a.MF=c;a.sH=c+d|0;}
function APF(a,b){AMZ(a,b,0,b.data.length);}
function A9A(a){var b,c,d;if(a.iR>=a.sH)b=(-1);else{c=a.vX.data;d=a.iR;a.iR=d+1|0;b=c[d]&255;}return b;}
function Blc(a,b,c,d){var e,f,g,h,i,j;e=BH(d,a.sH-a.iR|0);f=0;while(f<e){g=b.data;h=c+1|0;i=a.vX.data;j=a.iR;a.iR=j+1|0;g[c]=i[j];f=f+1|0;c=h;}if(e<=0)e=(-1);return e;}
function AUv(a){}
var ZJ=D();
function ANF(b,c){var d,e,f,g,h,i,j,k;if(!b)return B(276);d=1<<c;e=d-1|0;f=(((32-PH(b)|0)+c|0)-1|0)/c|0;g=Ck(f);h=CJ(f-1|0,c);i=0;while(h>=0){j=g.data;k=i+1|0;j[i]=Hv(b>>>h&e,d);h=h-c|0;i=k;}return Ps(g);}
var AAq=D(Fg);
function Bqy(a,b,c){var d=new AAq();Blf(d,a,b,c);return d;}
function Blf(a,b,c,d){QU(a,b,c,d);}
function AXT(a,b,c,d){var e;if((b+a.bD.cr()|0)<=d.K()){e=a.bD.bR(b,c);if(e>=1)b=b+e|0;}return a.k.e(b,c,d);}
function AKN(){var a=this;C.call(a);a.fx=null;a.i_=null;a.mC=0;a.mv=null;a.qk=0;a.du=0;a.kX=null;a.ci=null;}
function Br9(){var a=new AKN();AWF(a);return a;}
function AWF(a){K(a);a.mC=7;a.du=0;a.mv=Bb(C,256);a.kX=Bf(40);a.ci=Bf(40);}
function A6q(a,b,c,d,e){var f,g,h,i,j,k,l,m,n;f=b.data;a.du=0;AVn(f.length,d,e);g=e-d|0;if(g<2)return;if(g<32){h=ABl(b,d,e,c);ALO(b,d,e,d+h|0,c);return;}a.fx=b;a.i_=c;a.qk=0;i=A6I(g);while(true){j=ABl(b,d,e,c);if(j>=i)k=j;else{k=g>i?i:g;ALO(b,d,d+k|0,d+j|0,c);}AIt(a,d,k);AFC(a);d=d+k|0;g=g-k|0;if(!g)break;}Z9(a);a.fx=null;a.i_=null;l=a.mv;m=0;n=a.qk;while(m<n){l.data[m]=null;m=m+1|0;}}
function ALO(b,c,d,e,f){var g,h,i,j,k,l;if(e==c)e=e+1|0;while(e<d){g=b.data;h=g[e];i=e;j=c;while(j<i){k=(j+i|0)>>>1;if(f.c8(h,g[k])<0)i=k;else j=k+1|0;}a:{b:{l=e-j|0;switch(l){case 1:break b;case 2:g[j+2|0]=g[j+1|0];break b;default:}Bi(b,j,b,j+1|0,l);break a;}g[j+1|0]=g[j];}g[j]=h;e=e+1|0;}}
function ABl(b,c,d,e){var f,g,h;f=c+1|0;if(f==d)return 1;a:{g=b.data;h=f+1|0;if(e.c8(g[f],g[c])>=0)while(h<d){if(e.c8(g[h],g[h-1|0])<0)break a;h=h+1|0;}else{while(h<d&&e.c8(g[h],g[h-1|0])<0){h=h+1|0;}Bib(b,c,h);}}return h-c|0;}
function Bib(b,c,d){var e,f,g,h,i;e=d+(-1)|0;while(c<e){f=b.data;g=f[c];h=c+1|0;f[c]=f[e];i=e+(-1)|0;f[e]=g;c=h;e=i;}}
function A6I(b){var c;c=0;while(b>=32){c=c|b&1;b=b>>1;}return b+c|0;}
function AIt(a,b,c){a.kX.data[a.du]=b;a.ci.data[a.du]=c;a.du=a.du+1|0;}
function AFC(a){var b;a:{while(true){if(a.du<=1)break a;b=a.du-2|0;if(!(b>=1&&a.ci.data[b-1|0]<=(a.ci.data[b]+a.ci.data[b+1|0]|0))&&!(b>=2&&a.ci.data[b-2|0]<=(a.ci.data[b]+a.ci.data[b-1|0]|0))){if(a.ci.data[b]>a.ci.data[b+1|0])break;}else if(a.ci.data[b-1|0]<a.ci.data[b+1|0])b=b+(-1)|0;Ql(a,b);}}}
function Z9(a){var b;while(a.du>1){b=a.du-2|0;if(b>0&&a.ci.data[b-1|0]<a.ci.data[b+1|0])b=b+(-1)|0;Ql(a,b);}}
function Ql(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.kX.data[b];d=a.ci.data[b];e=a.kX.data;f=b+1|0;g=e[f];h=a.ci.data[f];a.ci.data[b]=d+h|0;if(b==(a.du-3|0)){i=a.kX.data;e=a.kX.data;j=b+2|0;i[f]=e[j];a.ci.data[f]=a.ci.data[j];}a.du=a.du-1|0;k=Q4(a.fx.data[g],a.fx,c,d,0,a.i_);j=c+k|0;l=d-k|0;if(!l)return;m=Ms(a.fx.data[(j+l|0)-1|0],a.fx,g,h,h-1|0,a.i_);if(!m)return;if(l>m)AA4(a,j,l,g,m);else ADr(a,j,l,g,m);}
function Ms(b,c,d,e,f,g){var h,i,j,k,l,m,n,o;h=c.data;i=0;j=1;k=d+f|0;if(g.c8(b,h[k])>0){l=e-f|0;while(true){m=Cu(j,l);if(m>=0)break;if(g.c8(b,h[k+j|0])<=0)break;n=(j<<1)+1|0;if(n>0){i=j;j=n;continue;}n=l;i=j;j=n;}if(m<=0)l=j;n=i+f|0;k=l+f|0;}else{l=f+1|0;while(true){n=Cu(j,l);if(n>=0)break;if(g.c8(b,h[k-j|0])>0)break;n=(j<<1)+1|0;if(n>0){i=j;j=n;continue;}n=l;i=j;j=n;}if(n<=0)l=j;n=f-l|0;k=f-i|0;}n=n+1|0;while(n<k){o=n+((k-n|0)>>>1)|0;if(g.c8(b,h[d+o|0])>0){n=o+1|0;o=k;}k=o;}return k;}
function Q4(b,c,d,e,f,g){var h,i,j,k,l,m,n,o;h=c.data;i=1;j=0;k=d+f|0;if(g.c8(b,h[k])>=0){l=e-f|0;while(true){m=Cu(i,l);if(m>=0)break;if(g.c8(b,h[k+i|0])<0)break;m=(i<<1)+1|0;if(m>0){j=i;i=m;continue;}m=l;j=i;i=m;}if(m<=0)l=i;m=j+f|0;n=l+f|0;}else{l=f+1|0;while(true){m=Cu(i,l);if(m>=0)break;if(g.c8(b,h[k-i|0])>=0)break;m=(i<<1)+1|0;if(m>0){j=i;i=m;continue;}m=l;j=i;i=m;}if(m<=0)l=i;m=f-l|0;n=f-j|0;}m=m+1|0;while(m<n){o=m+((n-m|0)>>>1)|0;if(g.c8(b,h[d+o|0])<0)n=o;else m=o+1|0;}return n;}
function ADr(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;f=a.fx;g=f.data;h=RY(a,c);Bi(f,b,h,0,c);i=0;j=b+1|0;k=d+1|0;g[b]=g[d];l=e+(-1)|0;if(!l){Bi(h,i,f,j,c);return;}if(c==1){m=h.data;Bi(f,k,f,j,l);g[j+l|0]=m[i];return;}n=a.i_;o=a.mC;a:{b:while(true){p=0;q=0;r=j;s=k;t=i;while(true){m=h.data;if(n.c8(g[s],m[t])<0){j=r+1|0;k=s+1|0;g[r]=g[s];q=q+1|0;p=0;l=l+(-1)|0;if(!l)break a;s=k;i=t;}else{j=r+1|0;i=t+1|0;g[r]=m[t];p=p+1|0;q=0;c=c+(-1)|0;if(c==1){t=i;k=s;break a;}}if((p|q)>=o)break;r=j;t=i;}k=s;while(true)
{r=Q4(g[k],h,i,c,0,n);if(!r){s=j;t=i;}else{Bi(h,i,f,j,r);j=j+r|0;t=i+r|0;c=c-r|0;if(c<=1)break a;s=j;}j=s+1|0;u=k+1|0;g[s]=g[k];l=l+(-1)|0;if(!l){k=u;break a;}s=Ms(m[t],f,u,l,0,n);if(!s){v=j;k=u;}else{Bi(f,u,f,j,s);j=j+s|0;k=u+s|0;l=l-s|0;if(!l)break b;v=j;}j=v+1|0;i=t+1|0;g[v]=m[t];c=c+(-1)|0;if(c==1){t=i;break a;}o=o+(-1)|0;if(!((r<7?0:1)|(s<7?0:1)))break;}if(o<0)o=0;o=o+2|0;}}if(o<1)o=1;a.mC=o;if(c==1){Bi(f,k,f,j,l);g[j+l|0]=m[t];}else{if(!c)G(Bl(B(573)));Bi(h,t,f,j,c);}}
function AA4(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;f=a.fx;g=f.data;h=RY(a,e);Bi(f,d,h,0,e);i=(b+c|0)-1|0;j=e-1|0;k=(d+e|0)-1|0;l=k+(-1)|0;m=i+(-1)|0;g[k]=g[i];n=c+(-1)|0;if(!n){Bi(h,0,f,l-j|0,e);return;}if(e==1){o=h.data;p=l-n|0;q=m-n|0;Bi(f,q+1|0,f,p+1|0,n);g[p]=o[j];return;}r=a.i_;s=a.mC;a:{b:while(true){t=0;u=0;v=l;while(true){o=h.data;if(r.c8(o[j],g[m])<0){l=v+(-1)|0;q=m+(-1)|0;g[v]=g[m];t=t+1|0;u=0;n=n+(-1)|0;if(!n)break a;m=q;p=j;}else{l=v+(-1)|0;p=j+(-1)|0;g[v]=o[j];u=u+1|0;t=0;e=e+(-1)|
0;if(e==1){q=m;j=p;break a;}}if((t|u)>=s)break;v=l;j=p;}j=p;while(true){v=n-Q4(o[j],f,b,n,n-1|0,r)|0;if(!v){p=l;q=m;}else{l=l-v|0;q=m-v|0;n=n-v|0;Bi(f,q+1|0,f,l+1|0,v);if(!n)break a;p=l;}l=p+(-1)|0;m=j+(-1)|0;g[p]=o[j];e=e+(-1)|0;if(e==1){j=m;break a;}w=e-Ms(g[q],h,0,e,e-1|0,r)|0;if(!w){p=l;j=m;}else{l=l-w|0;j=m-w|0;e=e-w|0;Bi(h,j+1|0,f,l+1|0,w);if(e<=1)break b;p=l;}l=p+(-1)|0;m=q+(-1)|0;g[p]=g[q];n=n+(-1)|0;if(!n){q=m;break a;}s=s+(-1)|0;if(!((v<7?0:1)|(w<7?0:1)))break;}if(s<0)s=0;s=s+2|0;}}if(s<1)s=1;a.mC
=s;if(e==1){p=l-n|0;q=q-n|0;Bi(f,q+1|0,f,p+1|0,n);g[p]=o[j];}else{if(!e)G(Bl(B(573)));Bi(h,0,f,l-(e-1|0)|0,e);}}
function RY(a,b){var c,d;a.qk=Bm(a.qk,b);if(a.mv.data.length<b){c=b|b>>1;c=c|c>>2;c=c|c>>4;c=c|c>>8;c=c|c>>16;c=c+1|0;if(c>=0)b=BH(c,a.fx.data.length>>>1);d=Bb(C,b);a.mv=d;}return a.mv;}
function AVn(b,c,d){if(c<=d){if(c<0)G(AUC(c));if(d<=b)return;G(AUC(d));}G(Bl(((((((H()).c(B(574))).t(c)).c(B(575))).t(d)).c(B(471))).d()));}
var AKh=D();
var I$=D(Bs);
var YH=D(F5);
var AG$=D(BD);
function Tp(){var a=this;Fq.call(a);a.ws=null;a.lu=null;}
function BoP(){var a=new Tp();ANS(a);return a;}
function ANS(a){LS(a);a.ws=AWr(Bqo());a.lu=AWr(Bmw());}
function A5G(a,b){if(!RJ(a.lu,b))return OS(a.ws,b);return OS(a.lu,b);}
function A7r(a,b){if(!RJ(a.lu,b))return Nr(a.ws,b);return Nr(a.lu,b);}
var AG9=D(Gt);
function Ug(){U.call(this);this.WP=0.0;}
function BtY(a){var b=new Ug();A_K(b,a);return b;}
function A_K(a,b){Ci(a);a.WP=b;}
var AG_=D(BD);
var ALe=D();
function Bf1(b,c){if(b===c)return 1;return b!==null?b.y(c):c!==null?0:1;}
function ABc(){C.call(this);this.cq=null;}
function AZ5(){var a=new ABc();Bhj(a);return a;}
function Bmh(b){if(b<0.0)b=0.0;else if(b>1.0)b=1.0;return b;}
function Bhj(a){K(a);a.cq=B_(18);}
function A8r(a,b){return a.Wz(b.bz,b.by,b.bx);}
function A7E(a,b,c,d){var e;e=0;while(e<18){a.cq.data[e]=b;a.cq.data[e+1|0]=c;a.cq.data[e+2|0]=d;e=e+3|0;}return a;}
function BkW(a){var b;b=0;while(b<a.cq.data.length){a.cq.data[b]=Bmh(a.cq.data[b]);b=b+1|0;}return a;}
function BiA(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s;h=e*e;i=f*f;j=g*g;k=h+i+j;if(k===0.0)return a;l=1.0/k*(k+1.0);m=b*l;n=c*l;o=d*l;p=e<=0.0?3:0;q=a.cq.data;q[p]=q[p]+h*m;q=a.cq.data;r=p+1|0;q[r]=q[r]+h*n;q=a.cq.data;r=p+2|0;q[r]=q[r]+h*o;r=f<=0.0?9:6;q=a.cq.data;q[r]=q[r]+i*m;q=a.cq.data;s=r+1|0;q[s]=q[s]+i*n;q=a.cq.data;r=r+2|0;q[r]=q[r]+i*o;r=g<=0.0?15:12;q=a.cq.data;q[r]=q[r]+j*m;q=a.cq.data;s=r+1|0;q[s]=q[s]+j*n;q=a.cq.data;r=r+2|0;q[r]=q[r]+j*o;return a;}
function BeH(a,b,c){return a.IG(b.bz,b.by,b.bx,c.l,c.m,c.n);}
function AQd(a,b,c,d,e){var f;f=e/(1.0+d.KV(c));return a.IG(b.bz*f,b.by*f,b.bx*f,d.l-c.l,d.m-c.m,d.n-c.n);}
var QY=D(0);
function AHf(){var a=this;Ca.call(a);a.cG=null;a.vW=null;a.tZ=null;}
function Boa(a){var b=new AHf();A$n(b,a);return b;}
function A$n(a,b){var c;DK(a);a.cG=b.d();a.bY=b.j();a.vW=Bfs(a.bY);a.tZ=Bfs(a.bY);c=0;while(c<(a.bY-1|0)){a.vW.pV(a.cG.g(c),(a.bY-c|0)-1|0);a.tZ.pV(a.cG.g((a.bY-c|0)-1|0),(a.bY-c|0)-1|0);c=c+1|0;}}
function ARv(a,b,c){return !a.xL(c,b)?(-1):a.bY;}
function A8f(a,b,c,d){var e,f;e=d.K();while(true){if(b>e)return (-1);f=a.T4(c,b,e);if(f<0)return (-1);if(a.k.e(f+a.bY|0,c,d)>=0)break;b=f+1|0;}return f;}
function Ban(a,b,c,d,e){var f;while(true){if(c<b)return (-1);f=a.QR(d,b,c);if(f<0)return (-1);if(a.k.e(f+a.bY|0,d,e)>=0)break;c=f+(-1)|0;}return f;}
function AZd(a){var b,c;b=a.cG;c=H();I(I(c,B(576)),b);return P(c);}
function AUo(a,b){var c,d,e,f,g;if(b instanceof Ev)return b.ra()!=a.cG.g(0)?0:1;if(b instanceof Ep)return b.bR(0,a.cG.c0(0,1))<=0?0:1;if(!(b instanceof DL)){if(!(b instanceof En))return 1;a:{if(a.cG.j()>1){c=b;d=c.u$();e=a.cG.g(0);c=a.cG;f=c.g(1);if(d==D4(e,f)){e=1;break a;}}e=0;}return e;}b:{c:{c=b;if(!c.r(a.cG.g(0))){g=a.cG;if(g.j()<=1)break c;g=a.cG;e=D4(g.g(0),a.cG.g(1));if(!c.r(e))break c;}e=1;break b;}e=0;}return e;}
function BjO(a,b,c,d){var e,f;e=a.cG.g(a.bY-1|0);while(true){if(c>(d-a.bY|0))return (-1);f=b.g((c+a.bY|0)-1|0);if(f==e&&a.xL(b,c))break;c=c+a.vW.bG(f)|0;}return c;}
function BiS(a,b,c,d){var e,f,g,h;e=a.cG.g(0);f=b.j();g=(f-d|0)-a.bY|0;if(g<=0)d=d+g|0;while(true){if(d<c)return (-1);h=b.g(d);if(h==e&&a.xL(b,d))break;d=d-a.tZ.bG(h)|0;}return d;}
function AUN(a,b,c){var d;d=0;while(d<a.bY){if(b.g(d+c|0)!=a.cG.g(d))return 0;d=d+1|0;}return 1;}
var EC=D();
var BvA=0;var BvB=0;var BDQ=0;var BDR=null;var BDS=null;var BDT=null;var BDU=null;function J6(){J6=M(EC);A$t();}
function AFn(){J6();AKl(0);}
function AKl(b){J6();ALr(b,1);}
function ALr(b,c){var d,e,f;J6();if(BDQ)return;ZH();BDQ=1;BvA=b;BvB=c;d=$rt_globals.Bullet.MyClassHelper.prototype.getBTVersion();if(d==320)return;e=new DD;f=H();I(V(I(f,B(577)),d),B(578));Eo(e,P(f));G(e);}
function ZH(){var b;J6();b=Bnf();b.Th(B(579));}
function A$t(){BvA=0;BvB=1;BDQ=0;BDR=BnU();BDS=By();BDT=BS();BDU=BS();}
var KQ=D(CF);
var V9=D(KQ);
var DI=D(Cs);
function BDV(a,b){var c=new DI();EL(c,a,b);return c;}
function EL(a,b,c){Mv(a,b,c);}
var Hs=D(Df);
function Bt3(a,b,c){var d=new Hs();Pv(d,a,b,c);return d;}
function Pv(a,b,c,d){GA(a,b,c,d);}
function Biz(a,b,c,d){var e;if(!a.ba.bc(d))return a.k.e(b,c,d);e=a.ba.e(b,c,d);if(e>=0)return e;return a.k.e(b,c,d);}
function Bj_(a,b){OR(a,b);a.ba.T(b);}
var ABN=D();
function BtT(b){var c;c=Bp$(B(580));c.kj=0;c.i9=0;AE4(new Lp,Btl(),c);}
var AJ$=D(Ef);
function Uk(){var a=this;Ca.call(a);a.wt=null;a.Ai=0;}
function AUf(a){var b=new Uk();AYG(b,a);return b;}
function AYG(a,b){DK(a);a.wt=b.nl();a.Ai=b.bL;}
function BcB(a,b,c){var d,e;d=a.wt;e=EA(c.g(b));return !d.r(Ei(e))?(-1):1;}
function A8F(a){var b,c,d;b=!a.Ai?B(39):B(40);c=a.wt.d();d=H();I(I(I(d,B(446)),b),c);return P(d);}
var AJY=D();
var AGK=D();
var V8=D();
var AG8=D(Cy);
var WZ=D(BD);
var O4=D(E2);
var WY=D(BD);
var ADX=D();
function ANC(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function Bfc(b,c){return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&AIM(b.constructor,c)?1:0;}
function AIM(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AIM(d[e],c))return 1;e=e+1|0;}return 0;}
function A0c(b){return setTimeout(function(){$rt_threadStarter(A7V)(b);},0);}
function A7V(b){var $p,$z;$p=0;if(BaT()){var $T=RA();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:b.dp();if(C1()){break _;}return;default:A6u();}}RA().s(b,$p);}
function NY(b){Z3(b,0);}
function Z3(b,c){return setTimeout(function(){A7V(b);},c);}
function BcR(b){$rt_globals.clearTimeout(b);}
function Sp(){return AV5();}
function Bit(b){return b.$meta.primitive?1:0;}
function AMp(b){return b.$meta.item;}
function A1z(b){return $rt_str(b.$meta.name);}
function AV5(){return [];}
var Ol=D(BF);
var BDW=null;function Bqc(){Bqc=M(Ol);A3S();}
function Si(a){var b=new Ol();ABe(b,a);return b;}
function ABe(a,b){Bqc();BY(a);}
function A3S(){BDW=Si(0);}
function HO(){C.call(this);this.Po=null;}
var Bvw=null;var Bvv=null;var Bvu=null;function D5(){D5=M(HO);AXs();}
function AA3(a){var b=new HO();AJ3(b,a);return b;}
function AJ3(a,b){D5();K(a);a.Po=b;}
function AXs(){Bvw=AA3(B(581));Bvv=AA3(B(582));Bvu=AA3(B(583));}
function HZ(){C.call(this);this.De=0;}
var BDX=null;var BDY=null;var BDZ=null;function BmJ(){BmJ=M(HZ);A8l();}
function AZK(a){var b=new HZ();YS(b,a);return b;}
function YS(a,b){BmJ();K(a);a.De=b;}
function BaL(a){return a.De;}
function A8l(){BDX=AZK(1);BDY=AZK(0);BDZ=F($rt_booleancls());}
var AG6=D();
var ABW=D(Bs);
function Bnq(){var a=new ABW();BeD(a);return a;}
function Bqn(a){var b=new ABW();Bcf(b,a);return b;}
function BeD(a){CY(a);}
function Bcf(a,b){Fd(a,b);}
var LR=D();
var BD0=null;var BD1=null;function Bsl(){Bsl=M(LR);A0D();}
function AGY(b){var c,d,e,f,g,h;Bsl();c=CE(b.j()/2|0);d=0;while(true){e=c.data;if(d>=e.length)break;f=d*2|0;g=b.g(f);h=b.g(f+1|0);e[d]=((BD1.data[g]<<4)+BD1.data[h]|0)<<24>>24;d=d+1|0;}return c;}
function A0D(){var b;BD0=ID([48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70]);BD1=Bf(128);b=0;while(b<BD0.data.length){BD1.data[BD0.data[b]]=b;if(BD0.data[b]>=65)BD1.data[(BD0.data[b]-65|0)+97|0]=b;b=b+1|0;}}
var AKE=D(Cy);
var X4=D(0);
var ALq=D(Hn);
function BqK(a,b){var c=new ALq();BjV(c,a,b);return c;}
function BjV(a,b,c){MU(a,b,c);}
function AQX(a,b,c,d){var e,f;e=a.k0(d);if(e!==null&&(b+e.j()|0)<=d.K()){f=!(c.d()).C2(e,b)?(-1):e.j();if(f<0)return (-1);d.bH(a.j6,f);return a.k.e(b+f|0,c,d);}return (-1);}
function A20(a,b,c,d){var e,f,g,h;e=a.k0(d);f=d.eC();if(e!==null&&(b+e.j()|0)<=f){g=c.d();while(true){if(b>f)return (-1);h=g.wW(e,b);if(h<0)return (-1);if(a.k.e(h+e.j()|0,c,d)>=0)break;b=h+1|0;}return h;}return (-1);}
function AN9(a,b,c,d,e){var f,g,h;f=a.k0(e);if(f===null)return (-1);g=d.d();a:{while(true){if(c<b)return (-1);h=g.Du(f,c);if(h<0)break a;if(h<b)break a;if(a.k.e(h+f.j()|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function Bem(a,b){return 1;}
function Bj6(a){var b,c;b=a.bs;c=H();V(I(c,B(584)),b);return P(c);}
var PB=D(0);
function ADJ(){DY.call(this);this.s4=null;}
function Bm3(a,b,c,d){var e=new ADJ();BgC(e,a,b,c,d);return e;}
function BgC(a,b,c,d,e){HE(a,b,c,d);a.s4=e;}
function AZo(a,b,c,d){var e,f;e=d.K();f=Rn(a,b,e,c);if(f>=0)e=f;if(e>b)return a.k.cQ(b,e,c,d);return a.k.e(b,c,d);}
function ANq(a,b,c,d){var e,f,g,h,i;e=d.K();f=a.k.cL(b,c,d);if(f<0)return (-1);g=Rn(a,f,e,c);if(g>=0)e=g;h=a.k.cQ(f,e,c,d);h=Bm(f,h);i=h>0?ALw(a,b,h-1|0,c):h?(-1):0;if(i>=b)b=i>=h?i:i+1|0;return b;}
function Rn(a,b,c,d){while(true){if(b>=c)return (-1);if(a.s4.lY(d.g(b)))break;b=b+1|0;}return b;}
function ALw(a,b,c,d){while(true){if(c<b)return (-1);if(a.s4.lY(d.g(c)))break;c=c+(-1)|0;}return c;}
function BhV(a){return B(585);}
var XB=D(FZ);
var K7=D();
var BD2=null;var BD3=null;function AMC(){AMC=M(K7);A_y();}
function AIb(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;AMC();d=$rt_floatToIntBits(b);c.yY=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.tc=0;c.sL=0;return;}g=0;if(f)h=e|8388608;else{h=e<<1;while(Z(Bk(N(h),N(8388608)),W)){h=h<<1;f=f+(-1)|0;g=g+1|0;}}i=AIw(BD3,f);if(i<0)i=( -i|0)-2|0;j=f-BD3.data[i]|0;k=9+j|0;l=N(h);m=Y(BR(Bn(l,N(BD2.data[i])),32-k|0));if(m>=1000000000){i=i+1|0;n=f-BD3.data[i]|0;k=9+n|0;m=Y(BR(Bn(l,N(BD2.data[i])),32-k|0));}n=(31-k|0)-g|0;o=n>=0?BD2.data[i]>>>n:BD2.data[i]<<( -n|
0);p=(o+1|0)>>1;q=o>>1;if(h==4194304)q=q>>2;r=AIi(m,q);s=VF(m,p);h=Cu(r,s);h=h>0?CJ(m/r|0,r):h<0?CJ(m/s|0,s)+s|0:CJ((m+(s/2|0)|0)/s|0,s);if(h>=1000000000){i=i+1|0;h=h/10|0;}else if(h<100000000){i=i+(-1)|0;h=h*10|0;}c.tc=h;c.sL=i-50|0;}
function AIi(b,c){var d,e;AMC();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if(e>=(c/2|0))d=d/10|0;return d;}
function VF(b,c){var d,e;AMC();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if((d-e|0)>(c/2|0))d=d/10|0;return d;}
function A_y(){var b,c,d,e,f,g,h,i,j,k,l;BD2=Bf(100);BD3=Bf(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=BD2.data;g=d+50|0;f[g]=$rt_udiv(e,20);BD3.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}i=214748364;e=127;d=0;while(d<50){j=0;k=b;while(k>i){k=k>>1;j=j+1|0;e=e+(-1)|0;}k=k*10|0;if(j<=0)b=k;else{l=N(b&((1<<j)-1|0));b=Y(BE(N(k),EG(Bn(l,N(10)),j)));}f=BD2.data;k=(50-d|0)-1|0;f[k]=$rt_udiv(b,20);BD3.data[k]=e;d=d+1|0;}}
function CZ(){Bc.call(this);this.CK=null;}
var BDE=null;var BD4=null;var BD5=null;var BD6=null;var BD7=null;var BD8=null;var BD9=null;var BD$=null;var BD_=null;var BDD=null;var BEa=null;var BEb=null;function Io(){Io=M(CZ);Baw();}
function D$(a,b,c){var d=new CZ();YU(d,a,b,c);return d;}
function YU(a,b,c,d){Io();B$(a,b,c);a.CK=d;}
function Gs(a){return a.CK;}
function XW(){Io();return J(CZ,[BDE,BD4,BD5,BD6,BD7,BD8,BD9,BD$,BD_,BDD,BEa]);}
function Baw(){BDE=D$(B(586),0,B(587));BD4=D$(B(588),1,B(589));BD5=D$(B(590),2,B(591));BD6=D$(B(592),3,B(593));BD7=D$(B(594),4,B(595));BD8=D$(B(596),5,B(597));BD9=D$(B(598),6,B(599));BD$=D$(B(600),7,B(601));BD_=D$(B(602),8,B(603));BDD=D$(B(604),9,B(605));BEa=D$(B(606),10,B(607));BEb=XW();}
var AHY=D();
var FH=D(Bc);
var BEc=null;var BEd=null;var BEe=null;var BEf=null;function BrC(){BrC=M(FH);AYC();}
function Wq(a,b){var c=new FH();U3(c,a,b);return c;}
function U3(a,b,c){BrC();B$(a,b,c);}
function AYC(){BEc=Wq(B(608),0);BEd=Wq(B(609),1);BEe=Wq(B(610),2);BEf=J(FH,[BEc,BEd,BEe]);}
var Zl=D(D1);
function HQ(){BF.call(this);this.hs=null;}
var BEg=null;function AVl(){AVl=M(HQ);AQh();}
function Bod(a){var b=new HQ();YV(b,a);return b;}
function BEh(){var a=new HQ();Q1(a);return a;}
function AB5(a){var b,c,d;b=Bp8(a);c=Bps(a);d=AMa(BZ(b,"setWorldTransformJS"),BZ(c,"getWorldTransformJS"));a.dc(N(d),1);}
function YV(a,b){AVl();BY(a);a.hs=BS();}
function Q1(a){AVl();BY(a);a.hs=BS();AB5(a);}
function AQh(){BEg=Bod(0);}
function AMa(b,c){var jsMotionState=new $rt_globals.Bullet.MyMotionState();jsMotionState.setWorldTransform=b;jsMotionState.getWorldTransform=c;return $rt_globals.Bullet.getPointer(jsMotionState);}
function AKq(){HQ.call(this);this.sb=null;}
function Bnl(a){var b=new AKq();Bf9(b,a);return b;}
function Bf9(a,b){Q1(a);a.sb=b;}
function A2C(a,b){b.b$(a.sb);}
function AXz(a,b){a.sb.b$(b);}
function FL(){var a=this;C.call(a);a.fB=null;a.j2=0;a.p2=null;a.Gg=null;a.HO=null;a.GN=null;a.ma=null;a.GJ=null;a.Ci=null;a.FJ=null;a.dS=0;a.s3=0;a.vi=0;a.WF=null;a.EH=null;a.zt=null;a.BL=0;a.Pj=0;a.cW=null;a.ip=null;}
var BEi=0;var BEj=null;var BEk=null;var BEl=null;var BEm=null;function ABG(){ABG=M(FL);A0r();}
function VP(a,b){var c=new FL();ABK(c,a,b);return c;}
function ABK(a,b,c){ABG();K(a);a.fB=B(49);a.p2=H$();a.Gg=H$();a.HO=H$();a.ma=H$();a.GJ=H$();a.Ci=H$();a.Pj=0;a.cW=GH(1);a.ip=GH(1);if(b===null)G(Bl(B(611)));if(c===null)G(Bl(B(612)));if(BEj!==null&&BEj.j()>0)b=(((H()).c(BEj)).c(b)).d();if(BEk!==null&&BEk.j()>0)c=(((H()).c(BEk)).c(c)).d();a.EH=b;a.zt=c;a.WF=J0(16);M8(a,b,c);if(a.po()){Vy(a);XL(a);AJb(a,BvC,a);}}
function M8(a,b,c){a.s3=Sf(a,35633,b);a.vi=Sf(a,35632,c);if(a.s3!=(-1)&&a.vi!=(-1)){a.dS=AK9(a,a.Ne());if(a.dS!=(-1)){a.j2=1;return;}a.j2=0;return;}a.j2=0;}
function Sf(a,b,c){var d,e,f,g,h;d=BwS;e=GH(1);f=d.G_(b);if(!f)return (-1);d.Ji(f,c);d.AM(f);d.GB(f,35713,e);g=e.bG(0);if(g)return f;h=d.GL(f);a.fB=(((H()).c(a.fB)).c(b!=35633?B(613):B(614))).d();a.fB=(((H()).c(a.fB)).c(h)).d();return (-1);}
function AVg(a){var b,c;b=BwS;c=b.FP();if(!c)c=(-1);return c;}
function AK9(a,b){var c,d,e,f;c=BwS;if(b==(-1))return (-1);c.tf(b,a.s3);c.tf(b,a.vi);c.D0(b);d=HD(4);Hg(d,Ge());e=d.BO();c.oi(b,35714,e);f=e.bG(0);if(f)return b;a.fB=BwS.u7(b);return (-1);}
function BiQ(a){if(!a.j2)return a.fB;a.fB=BwS.u7(a.dS);return a.fB;}
function BjW(a){return a.j2;}
function Wy(a,b){var c,d;c=BwS;d=a.ma.v0(b,(-2));if(d==(-2)){d=c.wL(a.dS,b);a.ma.g$(b,d);}return d;}
function Mx(a,b){ABG();return a.Eh(b,BEi);}
function Bdo(a,b,c){var d;d=a.p2.v0(b,(-2));if(d==(-2)){d=BwS.vo(a.dS,b);if(d==(-1)&&c){if(!a.j2)G(C5((((H()).c(B(615))).c(a.oO())).d()));G(Bl(((((H()).c(B(616))).c(b)).c(B(617))).d()));}a.p2.g$(b,d);}return d;}
function BbE(a,b,c){var d,e;d=BwS;CV(a);e=Mx(a,b);d.v$(e,c);}
function Bah(a,b,c){var d;d=BwS;CV(a);d.v$(b,c);}
function A0B(a,b,c){var d;d=BwS;CV(a);d.FH(b,c);}
function AN2(a,b,c,d){var e;e=BwS;CV(a);e.Hz(b,c,d);}
function AP2(a,b,c,d,e){var f;f=BwS;CV(a);f.zk(b,c,d,e);}
function A1a(a,b,c,d,e,f){var g;g=BwS;CV(a);g.y2(b,c,d,e,f);}
function A2S(a,b,c,d,e){var f;f=BwS;CV(a);f.JQ(b,e/3|0,c,d);}
function A_i(a,b,c){a.Nn(b,c,0);}
function A7q(a,b,c,d){a.CL(Mx(a,b),c,d);}
function AWB(a,b,c){a.CL(b,c,0);}
function Beu(a,b,c,d){var e;e=BwS;CV(a);e.Bd(b,1,d,c.a,0);}
function Bj8(a,b,c){a.QM(b,c,0);}
function ASz(a,b,c,d){var e;e=BwS;CV(a);e.NF(b,1,d,c.hp,0);}
function A8i(a,b,c,d,e){var f;f=BwS;CV(a);f.Bd(b,e/16|0,0,c,d);}
function ANj(a,b,c){a.j$(b,c.l,c.m,c.n);}
function BgK(a,b,c){a.Bt(b,c.bz,c.by,c.bx,c.b2);}
function Blw(a,b,c,d,e,f,g){var h;h=BwS;CV(a);h.H3(b,c,d,e,f,g);}
function A7z(a){var b;b=BwS;CV(a);b.Cv(a.dS);}
function APs(a,b){var c,d;c=BwS;CV(a);d=Wy(a,b);if(d==(-1))return;c.tu(d);}
function Bdh(a,b){var c;c=BwS;CV(a);c.tu(b);}
function BgI(a,b){var c;c=BwS;CV(a);c.Jd(b);}
function CV(a){if(a.BL){M8(a,a.EH,a.zt);a.BL=0;}}
function AJb(a,b,c){var d;ABG();d=BEl.V(b);if(d===null)d=By();d.C(c);BEl.z(b,d);}
function XL(a){var b,c,d,e;a.cW.d_();BwS.oi(a.dS,35718,a.cW);b=a.cW.bG(0);a.GN=Bb(B1,b);c=0;while(c<b){a.cW.d_();a.cW.vA(0,1);a.ip.d_();d=BwS.IK(a.dS,c,a.cW,a.ip);e=BwS.vo(a.dS,d);a.p2.g$(d,e);a.Gg.g$(d,a.ip.bG(0));a.HO.g$(d,a.cW.bG(0));a.GN.data[c]=d;c=c+1|0;}}
function Vy(a){var b,c,d,e;a.cW.d_();BwS.oi(a.dS,35721,a.cW);b=a.cW.bG(0);a.FJ=Bb(B1,b);c=0;while(c<b){a.cW.d_();a.cW.vA(0,1);a.ip.d_();d=BwS.Ig(a.dS,c,a.cW,a.ip);e=BwS.wL(a.dS,d);a.ma.g$(d,e);a.GJ.g$(d,a.ip.bG(0));a.Ci.g$(d,a.cW.bG(0));a.FJ.data[c]=d;c=c+1|0;}}
function APk(a,b){return a.ma.v0(b,(-1));}
function A0r(){BEi=1;BEj=B(49);BEk=B(49);BEl=EH();BEm=GH(1);}
var EN=D(Bc);
var BwY=null;var BwX=null;var BEn=null;var BEo=null;var BwZ=null;var BEp=null;function Hb(){Hb=M(EN);ASw();}
function Kb(a,b){var c=new EN();ADI(c,a,b);return c;}
function ADI(a,b,c){Hb();B$(a,b,c);}
function ASw(){BwY=Kb(B(618),0);BwX=Kb(B(619),1);BEn=Kb(B(620),2);BEo=Kb(B(621),3);BwZ=Kb(B(622),4);BEp=J(EN,[BwY,BwX,BEn,BEo,BwZ]);}
function ACw(){X.call(this);this.NW=null;}
function Bnp(a){var b=new ACw();Bl0(b,a);return b;}
function Bl0(a,b){a.NW=b;Bo(a);}
function ARF(a,b){return WP(b);}
function Vj(){var a=this;Hq.call(a);a.mM=0.0;a.BY=null;}
function BrY(){var a=new Vj();AQl(a);return a;}
function AQl(a){Ou(a);a.mM=1.0;a.BY=S();a.md=0.0;}
function A99(a){a.r5(1);}
function Bma(a,b){a.kr.Co(a.mM* -a.lv/2.0,a.mM*a.lv/2.0,a.mM* -(a.ng/2.0),a.mM*a.ng/2.0,a.md,a.kI);a.h9.Fy(a.cy,(a.BY.L(a.cy)).eE(a.dj),a.dD);a.eo.b$(a.kr);Hu(a.eo.a,a.h9.a);if(b){a.hb.b$(a.eo);Qh(a.hb.a);a.ub.Ef(a.hb);}}
function JN(){var a=this;C.call(a);a.dd=null;a.qq=0;a.zV=0;a.i1=0;a.m9=0;a.pe=0;}
function AGp(a,b){var c=new JN();A9$(c,a,b);return c;}
function BEq(a){var b=new JN();AKQ(b,a);return b;}
function A9$(a,b,c){K(a);a.i1=1;a.m9=0;a.zV=1;a.dd=AJ6(c);IX(a.dd);a.qq=BwS.jS();a.pe=!b?35048:35044;}
function AKQ(a,b){K(a);a.i1=1;a.m9=0;a.zV=1;a.dd=AJ6(b);IX(a.dd);a.qq=BwS.jS();a.pe=35044;}
function AUx(a){return BQ(a.dd);}
function A6Y(a){return DC(a.dd);}
function AYy(a,b,c,d){a.i1=1;OZ(a.dd);a.dd.Hn(b,c,d);IX(a.dd);if(a.m9){BwS.fl(34963,BQ(a.dd),a.dd,a.pe);a.i1=0;}}
function A5$(a){a.i1=1;return a.dd;}
function Bkp(a){if(!a.qq)G(Bh(B(623)));BwS.c7(34963,a.qq);if(a.i1){BwS.fl(34963,BQ(a.dd),a.dd,a.pe);a.i1=0;}a.m9=1;}
function BhG(a){BwS.c7(34963,0);a.m9=0;}
var U$=D(JN);
function BpX(a){var b=new U$();BfP(b,a);return b;}
function BfP(a,b){AKQ(a,b);}
var AI8=D(Cw);
var ADi=D();
function Mz(b,c){var d,e,f,g;d=b.data;e=Ck(c);f=BH(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function RS(b,c){var d,e,f,g;d=b.data;e=CE(c);f=BH(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function A4M(b,c){var d,e,f,g;d=b.data;e=Bf(c);f=BH(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Lr(b,c){var d,e,f,g;d=b.data;e=Ot((CB(b)).gT(),c);f=BH(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function A_x(b,c,d,e){var f,g;if(c>d)G(DB());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function Ir(b,c){A_x(b,0,b.data.length,c);}
function A1I(b,c,d,e){var f,g;if(c>d)G(DB());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function AZ_(b,c){A1I(b,0,b.data.length,c);}
function Jb(b,c,d,e){var f,g;if(c>d)G(DB());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function ABY(b,c){Jb(b,0,b.data.length,c);}
function AIw(b,c){return Bgb(b,0,b.data.length,c);}
function Bgb(b,c,d,e){var f,g,h,i,j;f=Cu(c,d);if(f>0)G(DB());if(!f)return (-1);g=d-1|0;while(true){h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>g)return ( -i|0)-2|0;}else{g=i-1|0;if(g<c)return ( -i|0)-1|0;}}return i;}
function AKx(b,c){var d,e,f,g;if(b===c)return 1;if(b!==null&&c!==null){d=c.data;e=b.data;f=e.length;if(f==d.length){g=0;while(g<f){if(!Bf1(e[g],d[g]))return 0;g=g+1|0;}return 1;}}return 0;}
function ADK(){var a=this;X.call(a);a.vd=0;a.Fj=null;a.wb=null;}
function Bqi(a,b,c){var d=new ADK();A4G(d,a,b,c);return d;}
function A4G(a,b,c,d){a.wb=b;a.vd=c;a.Fj=d;Bo(a);}
function A1e(a,b){return !(a.vd^a.wb.be.e5(b))&&!(a.vd^a.wb.fp^a.Fj.r(b))?0:1;}
function ADR(){var a=this;X.call(a);a.AT=0;a.Gt=null;a.F9=null;a.W6=null;}
function Bqe(a,b,c,d){var e=new ADR();A_V(e,a,b,c,d);return e;}
function A_V(a,b,c,d,e){a.W6=b;a.AT=c;a.Gt=d;a.F9=e;Bo(a);}
function AM6(a,b){return a.AT^(!a.Gt.r(b)&&!a.F9.r(b)?0:1)?0:1;}
function ADM(){var a=this;X.call(a);a.Gy=null;a.T0=null;}
function BnD(a,b){var c=new ADM();ANk(c,a,b);return c;}
function ANk(a,b,c){a.T0=b;a.Gy=c;Bo(a);}
function BhA(a,b){return a.Gy.r(b);}
function ADL(){var a=this;X.call(a);a.sf=0;a.CM=null;a.uh=null;}
function Bno(a,b,c){var d=new ADL();ANw(d,a,b,c);return d;}
function ANw(a,b,c,d){a.uh=b;a.sf=c;a.CM=d;Bo(a);}
function BdM(a,b){return !(a.sf^a.uh.be.e5(b))&&!(a.sf^a.uh.fp^a.CM.r(b))?1:0;}
function ADN(){var a=this;X.call(a);a.z_=null;a.Xc=null;}
function Bny(a,b){var c=new ADN();ANu(c,a,b);return c;}
function ANu(a,b,c){a.Xc=b;a.z_=c;Bo(a);}
function ATS(a,b){return a.z_.r(b);}
var O0=D();
function ADU(){var a=this;X.call(a);a.Bw=null;a.Ho=0;a.Bm=null;}
function BmO(a,b,c){var d=new ADU();ARB(d,a,b,c);return d;}
function ARB(a,b,c,d){a.Bm=b;a.Bw=c;a.Ho=d;Bo(a);}
function A95(a,b){return !a.Bw.r(b)&&!(a.Ho^a.Bm.be.e5(b))?1:0;}
function ADQ(){var a=this;X.call(a);a.I7=0;a.CO=null;a.CF=null;a.Ry=null;}
function BtD(a,b,c,d){var e=new ADQ();ANZ(e,a,b,c,d);return e;}
function ANZ(a,b,c,d,e){a.Ry=b;a.I7=c;a.CO=d;a.CF=e;Bo(a);}
function A$M(a,b){return a.I7^(!a.CO.r(b)&&!a.CF.r(b)?0:1);}
function ADO(){var a=this;X.call(a);a.IH=null;a.R3=null;}
function BtQ(a,b){var c=new ADO();A6j(c,a,b);return c;}
function A6j(a,b,c){a.R3=b;a.IH=c;Bo(a);}
function AXf(a,b){return a.IH.r(b)?0:1;}
var Rf=D(0);
function Us(){B4.call(this);this.tG=null;}
function Bpm(a){var b=new Us();AQP(b,a);return b;}
function AQP(a,b){Ds(a);a.tG=b;}
function BfI(a,b,c,d){var e,f,g,h,i;e=d.K();f=b+1|0;if(f>e){d.ek=1;return (-1);}g=c.g(b);if(Cn(g)){h=b+2|0;if(h<=e){i=c.g(f);if(In(g,i))return a.tG.lY(D4(g,i))?(-1):a.k.e(h,c,d);}}return a.tG.lY(g)?(-1):a.k.e(f,c,d);}
function A9V(a){return B(624);}
function BhU(a,b){a.k=b;}
function AM4(a){return (-2147483602);}
function A4_(a,b){return 1;}
function ADS(){var a=this;X.call(a);a.A$=null;a.Gw=0;a.Ca=null;}
function Bq0(a,b,c){var d=new ADS();BaC(d,a,b,c);return d;}
function BaC(a,b,c,d){a.Ca=b;a.A$=c;a.Gw=d;Bo(a);}
function A24(a,b){return !a.A$.r(b)&&!(a.Gw^a.Ca.be.e5(b))?0:1;}
var Dk=D();
var BEr=null;var BEs=null;var BEt=null;var BEu=null;var BEv=null;var BEw=null;var BEx=null;var BEy=null;var BEz=null;var BEA=null;function Bg(){Bg=M(Dk);A7u();}
function Ks(b){var c,d;Bg();c=new B1;d=Ck(1);d.data[0]=b;KF(c,d);return c;}
function ACF(b){Bg();return b>0&&b<=65535?1:0;}
function Kr(b){Bg();return b>=65536&&b<=1114111?1:0;}
function Cn(b){Bg();return (b&64512)!=55296?0:1;}
function B8(b){Bg();return (b&64512)!=56320?0:1;}
function L0(b){Bg();return !Cn(b)&&!B8(b)?0:1;}
function In(b,c){Bg();return Cn(b)&&B8(c)?1:0;}
function D4(b,c){Bg();return ((b&1023)<<10|c&1023)+65536|0;}
function YO(b,c){Bg();return ADT(b,c,b.data.length);}
function ADT(b,c,d){var e,f;Bg();if(c<(d-1|0)){e=b.data;if(Cn(e[c])){f=c+1|0;if(B8(e[f]))return D4(e[c],e[f]);}}return b.data[c];}
function G6(b){var c;Bg();c=b-65536|0;return (55296|c>>10&1023)&65535;}
function GF(b){Bg();return (56320|b&1023)&65535;}
function Ei(b){Bg();return Gg(b)&65535;}
function Gg(b){Bg();return NV(TK(),b);}
function TK(){Bg();if(BEu===null)BEu=Wh(((ZD()).value!==null?$rt_str((ZD()).value):null));return BEu;}
function ZD(){Bg();if(BEx===null)BEx=AJy();return BEx;}
function EA(b){Bg();return Fp(b)&65535;}
function Fp(b){Bg();return NV(AAm(),b);}
function AAm(){Bg();if(BEt===null)BEt=Wh(((AAO()).value!==null?$rt_str((AAO()).value):null));return BEt;}
function AAO(){Bg();if(BEy===null)BEy=AKF();return BEy;}
function NV(b,c){var d,e;Bg();d=AKP(b,c);if(d>=0){e=b.data;if(d<(e.length/2|0))return c+e[(d*2|0)+1|0]|0;}return 0;}
function AKP(b,c){var d,e,f,g,h,i;Bg();d=b.data;e=0;f=(d.length/2|0)-1|0;while(true){g=(e+f|0)/2|0;h=d[g*2|0];i=Cu(h,c);if(!i)break;if(i<=0){e=g+1|0;if(e>f)return g;}else{f=g-1|0;if(f<e)return f;}}return g;}
function Rl(b,c){Bg();return AKp(b,c);}
function AKp(b,c){var d;Bg();if(c>=2&&c<=36){d=PX(b);if(d>=c)d=(-1);return d;}return (-1);}
function QP(b){Bg();return PX(b);}
function PX(b){var c,d,e,f,g,h,i,j;Bg();c=Sy();d=c.data;e=0;f=(d.length/2|0)-1|0;while(f>=e){g=(e+f|0)/2|0;h=g*2|0;i=d[h];j=Cu(b,i);if(j>0)e=g+1|0;else{if(j>=0)return d[h+1|0];f=g-1|0;}}return (-1);}
function Hv(b,c){Bg();if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function AME(b){Bg();return C3(b)!=9?0:1;}
function Sy(){Bg();if(BEs===null)BEs=Bk8(((XH()).value!==null?$rt_str((XH()).value):null));return BEs;}
function XH(){Bg();if(BEz===null)BEz=AGG();return BEz;}
function AGI(){Bg();if(BEv===null)BEv=A5B(((AFZ()).value!==null?$rt_str((AFZ()).value):null));return BEv;}
function AFZ(){Bg();if(BEA===null)BEA=ABR();return BEA;}
function FJ(b){var c;Bg();if(b<65536){c=Ck(1);c.data[0]=b&65535;return c;}return ID([G6(b),GF(b)]);}
function V$(b){var c;Bg();a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}c=1;break a;}c=0;}return c;}
function HU(b){Bg();return C3(b);}
function C3(b){var c,d,e,f,g,h;Bg();if(ACF(b)&&L0(b&65535))return 19;c=AGI();d=c.data;e=0;f=d.length-1|0;while(e<=f){g=(e+f|0)/2|0;h=d[g];if(b>=h.Bc)e=g+1|0;else{if(b>=h.v5)return h.F1.data[b-h.v5|0];f=g-1|0;}}return 0;}
function AAU(b){Bg();return C3(b)!=2?0:1;}
function ACj(b){Bg();return C3(b)!=1?0:1;}
function S1(b){Bg();return C3(b)!=3?0:1;}
function Xi(b){Bg();return !C3(b)?0:1;}
function AAN(b){Bg();switch(C3(b)){case 1:case 2:case 3:case 4:case 5:break;default:return 0;}return 1;}
function Qw(b){Bg();return MC(b);}
function MC(b){Bg();a:{switch(C3(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function WP(b){Bg();a:{switch(C3(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return G0(b);}
function ABJ(b){Bg();a:{switch(C3(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return G0(b);}
function ABd(b){Bg();a:{switch(C3(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break a;default:break a;}return 1;}return G0(b);}
function AF1(b){Bg();a:{switch(C3(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break a;default:break a;}return 1;}return G0(b);}
function G0(b){Bg();a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return C3(b)!=16?0:1;}
function P_(b){Bg();switch(C3(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Zg(b){Bg();return Nv(b);}
function Nv(b){Bg();switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return P_(b);}return 1;}
function A7u(){BEr=F($rt_charcls());BEw=Bb(Dk,128);}
function AJy(){return {"value":"}U  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# \'%# #,%#L}p#LJd(# *T5F#U TUg#r {%g#r Zvk%F# *J#F#b o@5F#b Jo=N#f "};}
function AKF(){return {"value":"yW  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'\' #\'# mGDr# Yiejg# e*5H#U eUi#r {%i#r .xm%:# RH#H#b o@5H#b No=P#f "};}
function AGG(){return {"value":"{?*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%slG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%sTEG%%%%%%%%%%%%%%%%%%&5G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%VR#G%%%%%%%%%%%%%"
+"%%%%%"};}
function ABR(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
+"!#!#!#!#!#!#!#!#!#!#!#!#!#=G&H#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!# BGA#%Y\'CJ95A#^#; GN5\'9G#9G#9\'A)F<A%F%Y#A,Q\'Z$Y#;Y#^#G,91 Y#FA%F+G6J+Y%F#\'b&D! 9&G(1=G\'E#G#=G%F#J+F$^#&Y/ 1&\'F?G<A#b&:! G,&A/J+FBG*E#=Y$%A#\'[#F7G%%G*%G$%G&A#Y0 F:G$A#9 F,AVF6 F)A6G01GA)FW\')\'&I$G)I%\'I#&G(F+G#Y#J+9%F0\'I# F)A#F#A#F7 F( &A$F%A#\'&I$G%A#I#A#I#\'&A))A%F# F$G#A#J+F#[#L\'=;&9\'A#G#) F\'A%F#A#F7 F( F# F# F#A#\' "
+"I$G#A%G#A#G$A$\'A(F% &A(J+G#F$\'9A+G#) F* F$ F7 F( F# F&A#\'&I$G& G#) I#\'A#&A0F#G#A#J+9;A(&G\' \'I# F)A#F#A#F7 F( F# F&A#\'&)\')G%A#I#A#I#\'A)\')A%F# F$G#A#J+=&L\'A+\'& F\'A$F$ F%A$F# & F#A$F#A$F$A$F-A%I#\'I#A$I$ I$\'A#&A\')A/J+L$^\';=A&\'I$\'F) F$ F8 F1A$&G$I% G$ G%A(G# F$A&F#G#A#J+A(9L(=&\'I#9F) F$ F8 F+ F&A#\'&)\'I& \'I# I#G#A(I#A(& F#G#A#J+ F#A.G#I# F) F$ FJG#&I$G% I$ I$\'&=A%F$)L(F$G#A#J+L*=F\'A#I# F3A$F9 F* &A#F(A$\'A%I$G$ \' I)A\'J+A#I#9A-FQ\'F#G(A%;F\'%G)9J+Y#AFF# & F& F9 & F+\'F#G*&A#F& % G\'A#J+A#F%AA&^$Y0=9^$G#^\'J+L+=\'=\'=\'6767"
+"I#F) FEA%G/)G&9G#F&G, GE ^)\'^\' ^#Y&^%Y#AFFLI#G%)G\')G#I#G#&J+Y\'F\'I#G#F%G$&I$F#I(F$G%F.\'I#G#I\'\'&)J+I$\'^#BG !A&!A#CL9%C$b&*&  F%A#F( & F%A#FJ F%A#FB F%A#F( & F%A#F0 FZ F%A#FeA#G$Y*L5A$F1^+A\'b!7! A#C\'A#5b&M* =9F2-F;67A$FmY$K$F)A(F. F%G$A,F3G$Y#A*F3G#A-F. F$ G#A-FUG#)G(I)\'I#G,Y$%Y$;&\'A#J+A\'L+A\'Y\'5Y%G$1 J+A\'FD%FVA(F&G#FC\'&A&FhA+F@ G$I%G#I$A%I#\'I\'G$A%=A$Y#J+F?A#F&A,FMA%F;A\'J+,A$^CF8G#I#\'A#Y#FV)\')G( \')\'I#G)I\'G+A#\'J+A\'J+A\'Y(%Y\'A#G/(AcG%)FP\')G&)\'I&\'I#F(A%J+Y(^+G*^*A$G#)F?)G%I#G#)G$F#J+FM\')G#I$\')G$I#A)Y%FEI)G)I#G#A$Y&"
+"J+A$F$J+F?E\'Y#C*A(BLA#B$Y)A)G$9G.)G(F%\'F\'\'F#)G#&A&CMEaC.%CCEFG[ G&!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*B)C\'A#B\'A#C)B)C)B)C\'A#B\'A#C) ! ! ! !C)B)C/A#C)D)C)D)C)D)C& C#B%$<#]$C$ C#B%$]$C%A#C#B% ]$C)B&]$A#C$ C#B%$]# M,Q&U\'Y#>?6_#?6>Y)./Q&-Y*>?Y%X#Y$:67Y,:98Y+-Q& Q+,%A#L\'Z$67%L+Z$67 E.A$[AA1G.H%\'H$G-A0^#"
+"!^%!^##B$C#B$#=!^#:B&^\'!=!=!=B%=#B%#F%#^#C#B#Z&!C%=:^##=L1KD!#K%,^#A%Z&^&Z#^%:^#:^#:^(:^@Z#^#:=:^@b:-% ^)6767^5Z#^(67b=2! :^?Z:^IZ\'^gA:^,A6L^^pL7b=X# :^*:^WZ)b=P! :b=Y$ 67676767676767L?^MZ&67Z@6767676767Z1b= % b:$# 6767676767676767676767Za6767ZA67b:#% ^QZ6^#Z\'^HA#^AA#b=I! BP CP !#B$C#!#!#!#B%#!C#!C\'E#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#^\'!#!#G$!#A&Y%,Y#CG #A&#A#FYA(%9A/\'F8A*F( F( F( F( F( F( F( F( GAY#>?>?Y$>?9>?Y*5Y#59>?Y#>?67676767Y&%Y+U#Y%"
+"596Y.AQ^; b=:! A-b=7$ A;^-A%-Y$=%&+6767676767^#6767676756W#=K*G%I#5E&^#K$%&9^# b&7! A#G#]#E#&5b&;! 9E$&A&FL b&?!  ^#L%^+F<A&^EA-F1^@ L+^?L)=L0^AL+^HL0b= & &b UG!&A+^b&b   %b O(!&A1F6%b&X2 A$^XA*FIE\'Y#b&-% %Y$F1J+F#A5!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#&\'H$9G+9%!#!#!#!#!#!#!#!#!#!#!#!#!#!#E#G#FhK+G#Y\'A)]8E*]#!#!#!#!#!#!#!C$!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#%C)!#!#B##!#!#!#!#%]#!#!#&!#!C$!#!#!#!#!#!#!#!#!#!#B&#B&#!#!#!#!#!#A#!#B$AQ&E##F(\'F$\'F%\'F8I#G#)^%A%L\'^#;=A\'FUY%A)I#F"
+"SI1G#A)Y#J+A\'G3F\'Y$&9F#\'J+F=G)Y#F8G,I#A,9F>A$G$)FP\'I#G%I#G#I$Y. %J+A%Y#F&\'%F*J+F& FJG\'I#G#I#G#A*F$\'F)\')A#J+A#Y%F1%F\'^$&)\')FS\'&G$F#G#F&G#&\'&A9F#%Y#F,)G#I#Y#&E#)\'A+F\'A#F\'A#F\'A*F( F( CL<E%C)A)b#1! FDI#\'I#\'I#9)\'A#J+A\'&b CO#&A-F8A%FRA%4b `. T#b `! T#b `0 43b `D!3b&O& A#b&K! AGC(A-C&A&&\'F+:F. F& & F# F# b&M! ]1A2b&L& 76A1FbA#FWAIF-;=A#G1Y(679A\'G19U#X#6767676767676767Y#67Y%X$Y$ Y%5676767Y$:5Z$ 9;Y#A%F& b&(# A#1 Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:67967Y#F+%FNE#F@A$F\'A#F\'A#F\'A#F$A$[#:<=[# =Z%^#A+Q$^#A#F- F; F4 F# F0"
+"A#F/ACb&]! A&Y$A%LNA$^*KVL%^2L#^$ ^-A%=AP^N\'b ## F>A$FRA0\'L<A%FAL%A*F5+F)+A&FGG&A&F? 9FEA%F)9K&AKBICIFpA#J+A\'BEA%CEA%FIA)FUA,9b 1# b&X% A*F7A+F)b 9# F\'A#& FM F#A$&A#F8 9L)F8^#L(F@A)L*AQF4 F#A&L&F7L\'A$9F;A&9AbFYA%L#F#L1A#LO&G$ G#A&G%F% F$ F>A#G$A%\'L*A(Y*A(F>L#9F>L$AAF)=F=G#A%L&Y(A*FWA$Y(F7A#L)F4A&L)F3A(Y%A-L(b 1! FkAXBTA.CTA(L\'FEG%A)J+b G% L@b !# F>L+&A)F7G,L%Y&b \'# F8A*)\')FVG0Y(A%L5J+A0G$)FNI$G%I#G#Y#1Y%A,1A#F:A(J+A\'G$FEG&)G) J+Y%&I#A*FD\'Y#&A*G#)FQI$G*I#F%Y%G%9A#J+&9&Y$ L5A,F3 F:I$G$I#\')G#Y\'\'AcF( & F% F0 F+"
+"9A\'FP\'I$G)A&J+A\'G#I# F)A#F#A#F7 F( F# F& G#&I#\'I%A#I#A#I$A#&A\')A&F&I#A#G(A$G&b ,# FVI$G)I#G$)\'F%Y&J+ 9 9\'&AAFQI$G\')\'I%G#)G#F#9&A)J+b G# FPI$G%A#I%G#)G#Y8F%G#ACFQI$G)I#\')G#Y$&A,J+A\'Y.A4FL\')\'I#G\')\'&A(J+AWF<A#G$I#G%)G&A%J+L#Y$=b  $ FMI$G*)G#9b E! BACAJ+L*A-&b A# F)A#FHI$G%A#G#I%\'&9&)A<&G+FIG\')&G%Y)\'A)&G\'I#G$FOG.)G#Y$&Y&A>FZb (% F* FF)G( G\')\'&Y&A+J+L4A$Y#F?A#G7 )G()G#)G#AkF( F# FGG\'A$\' G# G(&\'A)J+A\'F\' F# FAI& G# I#\')\'&A(J+b W% F4G#I#Y#b ($ L6^)[%^2A.9b&;/ b G! b+P!  Y&A,b&%$ b ^K b&P1  Q*b (a b&(* b Z\'#b&Z) A(F"
+"@ J+A%Y#b A! F?A#G&9A+FQG(Y&^%E%9=A+J+ L( F6A&F4b Q+ BACAL8Y%b F! FmA%\'&IXA(G%E.AbE#9%A=&b W@!&A)b&T, b .5#b&@% ARF$A2F%A)b&-\' b %E b&L! A&F.A$F*A(F+A#=G#9Q%b =.!b=W$ A+^HA#^^I#G$^$I\'Q)G)^#G(^?G%^]A8^dG$=b ;# L5A-b=8! A*L:b (# B;C;B;C( C3B;C;! B#A#!A#B#A#B% B)C% # C( C,B;C;B# B%A#B) B( C;B# B% B& !A$B( C;B;C;B;C;B;C;B;C;B;C;B;C=A#B::C::C\'B::C::C\'B::C::C\'B::C::C\'B::C::C\'!#A#JSb= ) GX^%GS^)\'^/\'^#Y&A0G& G0b 16 G( G2A#G( G# G&b 6$ FNA$G(E(A#J+A%&=b Q& FMG%J+A&;b  5 b&&$ A#L*G(AJBCCCG(%A%J+A%Y#b 2- L]=L$;L%AnLN="
+"L0b #$ F% F< F# &A#& F+ F% & &A\'&A%& & & F$ F# &A#& & & & & F# &A#F% F( F% F% & F+ F2A&F$ F& F2AUZ#b /% ^MA%b=E! A-^0A#^0 ^0 ^FA+L.A$b=>! A$^_AZ^>A.^MA%^*A(^#A/^\'b ;# b=]$ ]&b=7, A+^.A$^,A&b=U! A-b=:! A(^-A5^-A%^YA)^+A\'^IA)^?b 3! ^- b=F!  ^%A$^JA#^\'A$^>A#b=(# A-^/A#^%A%^$A&^$A.^\'b K6 &b   %b   %b 6<#&AJ&b T !&A,&b =$ &A#&b  ;!&A/&b PU!&b @Q b&?) b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   "
+"%b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b D8 1A?b1A! b  # b\'Q$ b   %b   %b   %b 1Y$3b   %b   %b   %b ^a$3A#3b   %b   %b   %b ^a$3"};}
function Su(){var a=this;Ca.call(a);a.uY=0;a.Ex=0;}
function A8$(a){var b=new Su();A0M(b,a);return b;}
function A0M(a,b){DK(a);a.uY=b;a.Ex=Iu(b);}
function ANP(a,b,c){return a.uY!=c.g(b)&&a.Ex!=c.g(b)?(-1):1;}
function AUH(a){var b,c;b=a.uY;c=H();Bp(I(c,B(625)),b);return P(c);}
function En(){var a=this;Ca.call(a);a.nX=0;a.mY=0;a.op=0;}
function BmY(a){var b=new En();A49(b,a);return b;}
function A49(a,b){var c,d;DK(a);a.bY=2;a.op=b;c=FJ(b);d=c.data;a.nX=d[0];a.mY=d[1];}
function Bhu(a,b,c){var d,e,f;d=b+1|0;e=c.g(b);f=c.g(d);return a.nX==e&&a.mY==f?2:(-1);}
function Be_(a,b,c,d){var e,f,g,h;if(!(c instanceof B1))return HM(a,b,c,d);e=c;f=d.K();while(b<f){g=e.e1(a.nX,b);if(g<0)return (-1);b=g+1|0;if(b>=f)continue;h=e.g(b);if(a.mY==h&&a.k.e(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AQc(a,b,c,d,e){var f,g,h;if(!(d instanceof B1))return HV(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.nV(a.mY,c);h=g+(-1)|0;if(h<0)break a;if(h<b)break a;if(a.nX==f.g(h)&&a.k.e(h+2|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function Bkb(a){var b,c,d;b=a.nX;c=a.mY;d=H();Bp(Bp(d,b),c);return P(d);}
function A6o(a){return a.op;}
function Bha(a,b){if(b instanceof En)return b.u$()!=a.op?0:1;if(b instanceof DL)return b.r(a.op);if(b instanceof Ev)return 0;if(!(b instanceof Ep))return 1;return 0;}
var Yj=D();
var AAK=D(Cy);
function XV(){var a=this;C.call(a);a.B7=null;a.ha=null;a.gS=null;a.gi=null;}
function Bs8(){var a=new XV();BgM(a);return a;}
function BgM(a){K(a);a.ha=null;a.gS=null;a.gi=null;}
var AMz=D();
var YZ=D();
var Q3=D();
var BDG=null;function BnV(){BnV=M(Q3);BlQ();}
function BlQ(){BDG=Bf((X3()).data.length);BDG.data[Br(BDF)]=1;BDG.data[Br(BEB)]=2;}
function Y4(){var a=this;C.call(a);a.fG=0;a.e2=null;a.e6=null;a.hr=null;a.i3=0;a.z8=0.0;a.r9=0;a.s1=0;a.iN=0;}
function Bq2(a){var b=new Y4();A1d(b,a);return b;}
function BEC(a,b){var c=new Y4();V1(c,a,b);return c;}
function A1d(a,b){V1(a,b,0.800000011920929);}
function V1(a,b,c){var d;K(a);if(c>0.0&&c<1.0){a.z8=c;d=Hi(b,c);a.r9=d*c|0;a.iN=d-1|0;a.s1=Dd(N(a.iN));a.e2=Bf(d);a.e6=Bb(C,d);return;}G(Bl((((H()).c(B(258))).co(c)).d()));}
function ATL(a,b){return Y(BR(Bn(N(b),BI(2135587861, 2654435769)),a.s1));}
function K1(a,b){var c,d,e;c=a.e2;d=a.fk(b);while(true){e=c.data[d];if(!e)return  -(d+1|0)|0;if(e==b)break;d=(d+1|0)&a.iN;}return d;}
function BaQ(a,b,c){var d,e,f;if(!b){d=a.hr;a.hr=c;if(!a.i3){a.i3=1;a.fG=a.fG+1|0;}return d;}e=K1(a,b);if(e>=0){d=a.e6.data[e];a.e6.data[e]=c;return d;}f= -(e+1|0)|0;a.e2.data[f]=b;a.e6.data[f]=c;f=a.fG+1|0;a.fG=f;if(f>=a.r9)Z1(a,a.e2.data.length<<1);return null;}
function AEG(a,b,c){var d,e,f;d=a.e2;e=a.fk(b);while(true){f=d.data;if(!f[e])break;e=(e+1|0)&a.iN;}f[e]=b;a.e6.data[e]=c;}
function A5p(a,b){var c;if(!b)return !a.i3?null:a.hr;c=K1(a,b);return c<0?null:a.e6.data[c];}
function Bkc(a,b){var c,d,e,f,g,h,i,j,k,l;if(!b){if(!a.i3)return null;a.i3=0;c=a.hr;a.hr=null;a.fG=a.fG-1|0;return c;}d=K1(a,b);if(d<0)return null;e=a.e2;f=a.e6;g=f.data;c=g[d];h=a.iN;i=(d+1|0)&h;while(true){j=e.data;k=j[i];if(!k)break;l=a.fk(k);if(((i-l|0)&h)>((d-l|0)&h)){j[d]=k;g[d]=g[i];d=i;}i=(i+1|0)&h;}j[d]=0;g[d]=null;a.fG=a.fG-1|0;return c;}
function A4Z(a,b,c){var d,e,f,g;a:{d=a.e6;if(b===null){if(a.i3&&a.hr===null)return 1;e=d.data;f=a.e2;g=e.length-1|0;while(true){if(g<0)break a;if(f.data[g]&&e[g]===null)break;g=g+(-1)|0;}return 1;}if(c){if(b===a.hr)return 1;e=d.data;g=e.length-1|0;while(true){if(g<0)break a;if(e[g]===b)break;g=g+(-1)|0;}return 1;}if(a.i3&&b.y(a.hr))return 1;e=d.data;g=e.length-1|0;while(true){if(g<0)break a;if(b.y(e[g]))return 1;g=g+(-1)|0;}}return 0;}
function Z1(a,b){var c,d,e,f,g;a:{c=a.e2.data.length;a.r9=b*a.z8|0;a.iN=b-1|0;a.s1=Dd(N(a.iN));d=a.e2;e=a.e6;a.e2=Bf(b);a.e6=Bb(C,b);if(a.fG>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g)AEG(a,g,e.data[f]);f=f+1|0;}}}}
var AK$=D(Ea);
function BqX(a){var b=new AK$();AR3(b,a);return b;}
function AR3(a,b){Iw(a,b,1.0,1.0);}
function A05(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(Cn(l)){if(j==d){if(h.d1(2)){j=j+(-1)|0;break a;}Bz();i=Bvy;break a;}m=k[j];if(!B8(m)){i=Cj(1);break a;}j=j+(-1)|0;i=HT(2);break a;}if(B8(l))i=Cj(1);if(l>=256){j=j+(-1)|0;i=HT(1);break a;}k=e.data;n=f+1|0;k[f]=l<<24>>24;c=j;f=n;}j=c;}h.eF(j);h.d7(f);return i;}
var ZT=D(EV);
function Bq7(){var a=new ZT();AOm(a);return a;}
function AOm(a){LD(a);}
function AXL(a){return BmT();}
function BjU(a){var b;b=ADt(a);b.cD=null;b.dn=null;b.c1.JM(B(49),null,0,0,0);b.lI=null;b.Fl=null;return b;}
function AQ4(a){return a.P8();}
function AYi(a){return a.UZ();}
function L8(){var a=this;C.call(a);a.dx=0.0;a.dv=0.0;a.dw=0.0;a.en=0.0;}
var BED=null;var BEE=null;function A0H(){A0H=M(L8);AUw();}
function AJX(a,b,c,d){var e=new L8();AFP(e,a,b,c,d);return e;}
function KO(){var a=new L8();WJ(a);return a;}
function AFP(a,b,c,d,e){A0H();K(a);a.oV(b,c,d,e);}
function WJ(a){A0H();K(a);a.FT();}
function ASm(a,b,c,d,e){a.dx=b;a.dv=c;a.dw=d;a.en=e;return a;}
function AXH(a,b){return a.oV(b.dx,b.dv,b.dw,b.en);}
function A$u(a,b,c){return a.O2(b.l,b.m,b.n,c);}
function BeU(a){return a.dx*a.dx+a.dv*a.dv+a.dw*a.dw+a.en*a.en;}
function AX1(a){var b,c;b=a.wz();if(b!==0.0&&!D9(b,1.0)){c=FV(b);a.en=a.en/c;a.dx=a.dx/c;a.dv=a.dv/c;a.dw=a.dw/c;}return a;}
function Bdi(a,b){var c,d,e,f,g,h,i,j,k,l;c=b.data;d=a.dx*a.dx;e=a.dx*a.dv;f=a.dx*a.dw;g=a.dx*a.en;h=a.dv*a.dv;i=a.dv*a.dw;j=a.dv*a.en;k=a.dw*a.dw;l=a.dw*a.en;c[0]=1.0-2.0*(h+k);c[4]=2.0*(e-l);c[8]=2.0*(f+j);c[12]=0.0;c[1]=2.0*(e+l);c[5]=1.0-2.0*(d+k);c[9]=2.0*(i-g);c[13]=0.0;c[2]=2.0*(f-j);c[6]=2.0*(i+g);c[10]=1.0-2.0*(d+h);c[14]=0.0;c[3]=0.0;c[7]=0.0;c[11]=0.0;c[15]=1.0;}
function Blq(a){return a.oV(0.0,0.0,0.0,1.0);}
function AOr(a,b,c,d,e){return a.OR(b,c,d,e*0.01745329238474369);}
function A2G(a,b,c,d,e){var f,g,h,i,j,k;f=AAn(b,c,d);if(f===0.0)return a.FT();g=1.0/f;h=e>=0.0?e%6.2831854820251465:6.2831854820251465- -e%6.2831854820251465;i=h/2.0;j=ALa(i);k=AOL(i);return (a.oV(g*b*j,g*c*j,g*d*j,k)).OG();}
function AUw(){BED=AJX(0.0,0.0,0.0,0.0);BEE=AJX(0.0,0.0,0.0,0.0);}
var O3=D(D0);
var BEF=null;function BEG(){BEG=M(O3);AS3();}
function AS3(){BEF=B_(3);}
var AHV=D(E5);
var Fc=D();
var BDb=null;var BEH=null;var BEI=null;var BEJ=null;var BEK=null;var BEL=null;function A$$(){A$$=M(Fc);AYt();}
function AYt(){Ne();BDb=ByX;BEH=Bpg();BEI=Bow();BEJ=W8(B(626),1,0);BEK=W8(B(627),0,0);BEL=W8(B(628),0,1);}
function Xb(){X.call(this);this.Lw=null;}
function Bo7(a){var b=new Xb();A_3(b,a);return b;}
function A_3(a,b){a.Lw=b;Bo(a);}
function A_S(a,b){return 0;}
var ACS=D(GR);
function BtJ(a,b,c,d,e,f){var g=new ACS();Bdu(g,a,b,c,d,e,f);return g;}
function Bdu(a,b,c,d,e,f,g){Or(a,b,c,d,e,f,g);}
function A94(a,b){var c,d,e,f;c=a.f7.B.data;d=a.fY;e=b*2|0;f=c[d+e|0]&255|(a.f7.B.data[(a.fY+e|0)+1|0]&255)<<8;return f<<16>>16;}
function A9e(a,b,c){var d,e,f;d=a.f7.B.data;e=a.fY;f=b*2|0;d[e+f|0]=c<<24>>24;a.f7.B.data[(a.fY+f|0)+1|0]=c>>8<<24>>24;}
function ALi(){BL.call(this);this.nb=0;}
function Box(a){var b=new ALi();Bai(b,a);return b;}
function Bai(a,b){CX(a);a.nb=b;}
function AWe(a,b,c,d){var e;e=!d.ks()?c.j():d.K();if(b>=e){d.bH(a.nb,0);return a.k.e(b,c,d);}if((e-b|0)==1&&c.g(b)==10){d.bH(a.nb,1);return a.k.e(b+1|0,c,d);}return (-1);}
function Bae(a,b){var c;c=!b.eN(a.nb)?0:1;b.bH(a.nb,(-1));return c;}
function AW0(a){return B(489);}
function ED(){Bc.call(this);this.Vc=null;}
var By0=null;var By2=null;var ByZ=null;var By1=null;var By3=null;var BEM=null;function MF(){MF=M(ED);BfR();}
function Ld(a,b,c){var d=new ED();Wp(d,a,b,c);return d;}
function PU(){MF();return BEM.e9();}
function Wp(a,b,c,d){MF();B$(a,b,c);a.Vc=d;}
function AKB(){MF();return J(ED,[By0,By2,ByZ,By1,By3]);}
function BfR(){By0=Ld(B(629),0,B(272));By2=Ld(B(630),1,B(274));ByZ=Ld(B(631),2,B(632));By1=Ld(B(633),3,B(273));By3=Ld(B(634),4,B(92));BEM=AKB();}
var AA2=D(BX);
var Q8=D();
var BEN=null;function BEO(){BEO=M(Q8);A9t();}
function A9t(){BEN=Bf((My()).data.length);BEN.data[Br(Bz5)]=1;BEN.data[Br(Bz6)]=2;BEN.data[Br(Bz7)]=3;}
function AA6(){Ca.call(this);this.vc=0;}
function Bg9(a){var b=new AA6();BeX(b,a);return b;}
function BeX(a,b){DK(a);a.vc=Ei(EA(b));}
function A5X(a,b,c){return a.vc!=Ei(EA(c.g(b)))?(-1):1;}
function BfY(a){var b,c;b=a.vc;c=H();Bp(I(c,B(419)),b);return P(c);}
function Ji(){B9.call(this);this.HW=null;}
var BBu=W;function Beb(){Beb=M(Ji);BgP();}
function BgP(){BBu=Cf(B(635));}
var AIS=D(G1);
var Vh=D(DH);
function Bow(){var a=new Vh();A90(a);return a;}
function A90(a){Iv(a,B(636),Bb(B1,0));}
function Bln(a){return Bng(a);}
function Bir(a){return BqX(a);}
function FR(){Bc.call(this);this.DB=0;}
var BEP=null;var ByM=null;var BEQ=null;var BER=null;function A56(){A56=M(FR);Bbr();}
function AFN(a,b,c){var d=new FR();AHo(d,a,b,c);return d;}
function AHo(a,b,c,d){A56();B$(a,b,c);a.DB=d;}
function I1(a){return a.DB;}
function Bbr(){BEP=AFN(B(637),0,33648);ByM=AFN(B(638),1,33071);BEQ=AFN(B(639),2,10497);BER=J(FR,[BEP,ByM,BEQ]);}
var AMP=D();
var PQ=D(0);
function AEv(){var a=this;C.call(a);a.wV=null;a.uG=null;a.uF=null;}
function BmP(){var a=new AEv();A36(a);return a;}
function A36(a){K(a);a.uG=S();a.uF=S();}
function Bau(a,b,c){a.wV=b;c.Hd(a);}
function Pd(a,b,c,d){if(c.Bn())b.wY(d);else if(b.Sn())(d.L(c)).lG(b);else (b.wY(d)).eE(c);return d;}
function A$e(a,b,c){var d,e,f,g,h,i,j;a:{d=b.dn;IE();if(C0(d,BDK)){d=b.dn;e=BDK;if((B2(d,e)).Jb){f=1;break a;}}f=0;}b:{if(C0(c.dn,BDK)){d=c.dn;e=BDK;if((B2(d,e)).Jb){g=1;break b;}}g=0;}if(f!=g)return !f?(-1):1;Pd(a,b.dN,b.c1.gt,a.uG);Pd(a,c.dN,c.c1.gt,a.uF);h=(1000.0*a.wV.cy.Fs(a.uG)|0)-(1000.0*a.wV.cy.Fs(a.uF)|0)|0;i=Cu(h,0.0);j=i<0?(-1):i<=0?0:1;if(f)j= -j|0;return j;}
function Bh9(a,b,c){return a.ND(b,c);}
var Wo=D(Ke);
function FC(){var a=this;Df.call(a);a.go=null;a.et=0;}
function BES(a,b,c,d,e){var f=new FC();KC(f,a,b,c,d,e);return f;}
function KC(a,b,c,d,e,f){GA(a,c,d,e);a.go=b;a.et=f;}
function Bl_(a,b,c,d){var e,f,g,h;e=d.Cu(a.et);if(!a.ba.bc(d))return a.k.e(b,c,d);if(e>=a.go.jx())return a.k.e(b,c,d);f=a.et;g=e+1|0;d.gd(f,g);h=a.ba.e(b,c,d);if(h>=0){d.gd(a.et,0);return h;}f=a.et;g=g+(-1)|0;d.gd(f,g);if(g>=a.go.j5())return a.k.e(b,c,d);d.gd(a.et,0);return (-1);}
function A3z(a){return a.go.d();}
var Ow=D(FC);
function BET(a,b,c,d,e){var f=new Ow();Yd(f,a,b,c,d,e);return f;}
function Yd(a,b,c,d,e,f){KC(a,b,c,d,e,f);}
function A7o(a,b,c,d){var e,f;e=d.Cu(a.et);if(!a.ba.bc(d))return a.k.e(b,c,d);if(e>=a.go.jx()){d.gd(a.et,0);return a.k.e(b,c,d);}if(e<a.go.j5()){d.gd(a.et,e+1|0);f=a.ba.e(b,c,d);}else{f=a.k.e(b,c,d);if(f>=0){d.gd(a.et,0);return f;}d.gd(a.et,e+1|0);f=a.ba.e(b,c,d);}return f;}
function ADo(){var a=this;KU.call(a);a.cZ=null;a.dh=0;}
function Yx(){var a=new ADo();ATa(a);return a;}
function BEU(a){var b=new ADo();Sv(b,a);return b;}
function ATa(a){Sv(a,10);}
function Sv(a,b){AG2(a);a.cZ=Bb(C,b);}
function A7s(a,b){var c;if(a.cZ.data.length<b){c=a.cZ.data.length>=1073741823?2147483647:Bm(b,Bm(a.cZ.data.length*2|0,5));a.cZ=Lr(a.cZ,c);}}
function Bhq(a,b){Mg(a,b);return a.cZ.data[b];}
function Bf_(a){return a.dh;}
function A3v(a,b){var c,d;a.hu(a.dh+1|0);c=a.cZ.data;d=a.dh;a.dh=d+1|0;c[d]=b;a.ho=a.ho+1|0;return 1;}
function Bb9(a,b,c){var d;UW(a,b);a.hu(a.dh+1|0);d=a.dh;while(d>b){a.cZ.data[d]=a.cZ.data[d-1|0];d=d+(-1)|0;}a.cZ.data[b]=c;a.dh=a.dh+1|0;a.ho=a.ho+1|0;}
function A0Y(a,b){var c,d,e,f;Mg(a,b);c=a.cZ.data[b];a.dh=a.dh-1|0;while(b<a.dh){d=a.cZ.data;e=a.cZ.data;f=b+1|0;d[b]=e[f];b=f;}a.cZ.data[a.dh]=null;a.ho=a.ho+1|0;return c;}
function Mg(a,b){if(b>=0&&b<a.dh)return;G(DS());}
function UW(a,b){if(b>=0&&b<=a.dh)return;G(DS());}
function SN(){CA.call(this);this.WG=null;}
function BmN(a){var b=new SN();ANb(b,a);return b;}
function ANb(a,b){a.WG=b;Ed(a);}
function AU1(a,b,c){return 1;}
function Baq(a,b){}
var AGj=D(Bs);
function OF(){var a=new AGj();Bdy(a);return a;}
function Bdy(a){CY(a);}
function SI(){CA.call(this);this.Lz=null;}
function Bqj(a){var b=new SI();Blr(b,a);return b;}
function Blr(a,b){a.Lz=b;Ed(a);}
function AOs(a,b,c){return 1;}
function Bfu(a,b){}
function SJ(){CA.call(this);this.OO=null;}
function Buf(a){var b=new SJ();AVA(b,a);return b;}
function AVA(a,b){a.OO=b;Ed(a);}
function A2n(a,b,c){return 1;}
function Bik(a,b){}
var Mj=D();
var BEV=null;function BoZ(){BoZ=M(Mj);AWZ();}
function AWZ(){BEV=Bf((AFS()).data.length);BEV.data[Br(BEW)]=1;BEV.data[Br(BEX)]=2;}
var AIV=D(Bt);
function SF(){C.call(this);this.hz=null;}
function Btc(a){var b=new SF();A9m(b,a);return b;}
function A9m(a,b){a.hz=b;K(a);}
function A_p(a,b){var c,d,e,f,$$je;c=$rt_str((a.hz.fZ.mD()).visibilityState);if(!B(640).y(c)){d=a.hz.fv;CG(d);a:{try{e=a.hz.fv.b3();while(e.bE()){f=e.bA();f.nF();}Bx(d);break a;}catch($$e){$$je=R($$e);e=$$je;}Bx(d);G(e);}a.hz.hN.nF();}else{d=a.hz.fv;CG(d);b:{try{e=a.hz.fv.b3();while(e.bE()){f=e.bA();f.om();}Bx(d);break b;}catch($$e){$$je=R($$e);e=$$je;}Bx(d);G(e);}a.hz.hN.om();}}
function BgX(a,b){a.c2(b);}
function SG(){C.call(this);this.fz=null;}
function Bna(a){var b=new SG();APh(b,a);return b;}
function APh(a,b){a.fz=b;K(a);}
function BlY(a,b){var c,d,e;c=a.fz.fZ.JH()-a.fz.iB.sM|0;d=a.fz.fZ.DK()-a.fz.iB.ya|0;if(c>0&&d>0){if(a.fz.d5!==null){if(a.fz.iB.q8){e=a.fz.d5.oH();c=c*e|0;d=d*e|0;}a.fz.d5.pb(c,d);}return;}}
function A4f(a,b){a.c2(b);}
var IB=D();
var BEY=null;function TP(a){K(a);}
function Ew(){return BEY;}
function AUy(b){BEY=b;}
function SK(){CA.call(this);this.ob=null;}
function BqV(a){var b=new SK();A60(b,a);return b;}
function A60(a,b){a.ob=b;Ed(a);}
function A1o(a,b,c){var d;d=Brx();d.Uv(a.ob.ez,Btd(a,d));return 1;}
var AGg=D(Hs);
function Bnw(a,b,c){var d=new AGg();AZt(d,a,b,c);return d;}
function AZt(a,b,c,d){Pv(a,b,c,d);}
function AP8(a,b,c,d){var e;if(!a.ba.bc(d))return a.k.e(b,c,d);e=a.k.e(b,c,d);if(e<0)e=a.ba.e(b,c,d);return e;}
var AIU=D(Bt);
function BqY(){var a=new AIU();A8n(a);return a;}
function A8n(a){Db(a);}
var UX=D();
function ASe(b,c){var d,e,f;a:{d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}e=b>>>6;f=d|e&8;f=f|b<<2&16;e=f|e&32;e=e|b>>>8&64;e=e|b>>>5&128;e=e|b&256;e=e|b<<8&512;e=e|b<<10&1024;e=e|b<<1&2048;return e;}
var AI0=D(Bt);
function BmL(){var a=new AI0();BiH(a);return a;}
function BiH(a){Db(a);}
var AIW=D(Bt);
var AIT=D(Bt);
var AIZ=D(Bt);
function BrJ(){var a=new AIZ();AZU(a);return a;}
function AZU(a){Db(a);}
var AI3=D(Bt);
function BtM(){var a=new AI3();AXC(a);return a;}
function AXC(a){Db(a);}
var AHS=D(C$);
var OV=D();
var Byv=null;function Br2(){Br2=M(OV);A1b();}
function A1b(){var b,c,d,e,f;Byv=DO();b=Bb(DH,6);c=b.data;A$$();c[0]=BDb;c[1]=BEH;c[2]=BEI;c[3]=BEJ;c[4]=BEK;c[5]=BEL;d=c.length;e=0;while(e<d){f=c[e];Byv.z(AIL(f),f);e=e+1|0;}}
var AI1=D(Bt);
function Bqh(){var a=new AI1();BiU(a);return a;}
function BiU(a){Db(a);}
var AIY=D(Bt);
function BmQ(){var a=new AIY();AVD(a);return a;}
function AVD(a){Db(a);}
var Q_=D(0);
function Wd(){C.call(this);this.vY=0;}
function BqQ(){var a=new Wd();BbS(a);return a;}
function BbS(a){K(a);a.vY=2;}
function APS(a,b,c){var d,e;if(a.vY>=2){d=Em();e=H();I(I(I(e,b),B(9)),c);d.e4(P(e));}}
function BeR(a,b,c){var d,e;if(a.vY>=1){d=ZW();e=H();I(I(I(e,b),B(9)),c);d.e4(P(e));}}
var ADB=D(BL);
function Bnc(){var a=new ADB();BlR(a);return a;}
function BlR(a){CX(a);}
function AWa(a,b,c,d){return b;}
function Bf7(a){return B(641);}
function Bgf(a,b){return 0;}
var ABA=D(Hl);
function AYx(a,b){var c=new ABA();AUz(c,a,b);return c;}
function AUz(a,b,c){Of(a,b,c);}
var Mp=D(FC);
function BEZ(a,b,c,d,e){var f=new Mp();Yf(f,a,b,c,d,e);return f;}
function Yf(a,b,c,d,e,f){KC(a,b,c,d,e,f);L6();c.T(BwK);}
function AUX(a,b,c,d){var e,f,g;e=0;f=a.go.jx();a:{while(true){g=a.ba.e(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.go.j5())return (-1);return a.k.e(b,c,d);}
var AG3=D(E9);
function DF(){Bc.call(this);this.GH=0;}
var ByL=null;var BBM=null;var BE0=null;var BE1=null;var BE2=null;var BE3=null;var BE4=null;var BE5=null;function Uy(){Uy=M(DF);APN();}
function Gu(a,b,c){var d=new DF();Sk(d,a,b,c);return d;}
function Sk(a,b,c,d){Uy();B$(a,b,c);a.GH=d;}
function FT(a){return a.GH;}
function APN(){ByL=Gu(B(642),0,9728);BBM=Gu(B(643),1,9729);BE0=Gu(B(644),2,9987);BE1=Gu(B(645),3,9984);BE2=Gu(B(646),4,9985);BE3=Gu(B(647),5,9986);BE4=Gu(B(648),6,9987);BE5=J(DF,[ByL,BBM,BE0,BE1,BE2,BE3,BE4]);}
function AEc(){X.call(this);this.UI=null;}
function Bss(a){var b=new AEc();BdF(b,a);return b;}
function BdF(a,b){a.UI=b;Bo(a);}
function Bj1(a,b){return AME(b);}
var Xr=D(E9);
var Lk=D(D_);
function A33(){var a=new Lk();Bb5(a);return a;}
function Bb5(a){LV(a);}
var AIk=D(Hh);
function BqT(a,b,c,d,e,f){var g=new AIk();A$2(g,a,b,c,d,e,f);return g;}
function A$2(a,b,c,d,e,f,g){Mk(a,b,c,d,e,f,g);}
function A16(a,b){var c,d,e;c=a.cB.B.data;d=a.cv;e=b*4|0;return (c[d+e|0]&255)<<24|(a.cB.B.data[(a.cv+e|0)+1|0]&255)<<16|(a.cB.B.data[(a.cv+e|0)+2|0]&255)<<8|a.cB.B.data[(a.cv+e|0)+3|0]&255;}
function AO9(a,b,c){var d,e,f;d=a.cB.B.data;e=a.cv;f=b*4|0;d[e+f|0]=c>>24<<24>>24;a.cB.B.data[(a.cv+f|0)+1|0]=c>>16<<24>>24;a.cB.B.data[(a.cv+f|0)+2|0]=c>>8<<24>>24;a.cB.B.data[(a.cv+f|0)+3|0]=c<<24>>24;}
var XK=D(Bs);
function A0p(a){var b=new XK();BiD(b,a);return b;}
function KX(){var a=new XK();AQz(a);return a;}
function BiD(a,b){Fd(a,b);}
function AQz(a){CY(a);}
function AE8(){X.call(this);this.Md=null;}
function BpT(a){var b=new AE8();ATt(b,a);return b;}
function ATt(a,b){a.Md=b;Bo(a);}
function Bg0(a,b){return P_(b);}
var ON=D(Fn);
var AGO=D();
function ALa(b){return Math.sin(b);}
function AOL(b){return Math.cos(b);}
function A1L(b){return Math.tan(b);}
function FV(b){return Math.sqrt(b);}
function A$y(b){return Math.ceil(b);}
function A5F(b,c){return Bd_(b,c);}
function Bd_(b,c){return Math.pow(b,c);}
function D3(b){return b+AWf(b)*0.5|0;}
function BH(b,c){if(b<c)c=b;return c;}
function Bm(b,c){if(b>c)c=b;return c;}
function AAB(b,c){if(HP(b,c))c=b;return c;}
function ALf(b,c){if(b<c)c=b;return c;}
function HH(b,c){if(b>c)c=b;return c;}
function ACr(b){if(b<=0)b= -b|0;return b;}
function De(b){if(b<=0.0)b= -b;return b;}
function AWf(b){var c;c=Cu(b,0.0);if(c>0)b=1.0;else if(c<0)b=(-1.0);return b;}
var Vr=D(Ba);
function Bm4(){var a=new Vr();BhD(a);return a;}
function BhD(a){BG(a);}
function AYw(a){var b;b=BoG(a);b.bm=1;return b;}
function RR(){var a=this;CH.call(a);a.BW=null;a.pc=null;a.lD=0;}
function Ch(a,b,c){var d=new RR();ACZ(d,a,b,c);return d;}
function ACZ(a,b,c,d){HF(a);a.lD=(-1);a.BW=b;a.pc=c;a.lD=d;}
function BkX(a){var b,c,d,e,f,g;b=B(49);if(a.lD>=1){c=Ck(a.lD);AZ_(c,32);b=Ps(c);}d=a.BW;if(a.pc!==null&&a.pc.j()){e=a.lD;f=a.pc;g=H();I(I(I(I(V(g,e),B(317)),f),B(317)),b);f=P(g);}else f=B(49);g=H();I(I(g,d),f);return P(g);}
function FA(){Bc.call(this);this.A4=0;}
var BE6=null;var BAx=null;var BAw=null;var BE7=null;function KG(){KG=M(FA);AZv();}
function AAG(a,b,c){var d=new FA();AMg(d,a,b,c);return d;}
function AMg(a,b,c,d){KG();B$(a,b,c);a.A4=d;}
function SM(a){return a.A4;}
function AZv(){BE6=AAG(B(649),0,0);BAx=AAG(B(650),1,1);BAw=AAG(B(651),2,4);BE7=J(FA,[BE6,BAx,BAw]);}
var AAh=D(Ba);
function Bsa(){var a=new AAh();AQV(a);return a;}
function AQV(a){BG(a);}
function A$g(a){var b;b=Bt8(a);b.bO.fK(0,2048);b.bm=1;return b;}
function Ju(){var a=this;B9.call(a);a.R5=0;a.Py=0.0;a.NJ=0.0;a.US=0;}
var BE8=W;var BE9=W;function ATU(){ATU=M(Ju);Bfh();}
function Bfh(){BE8=Cf(B(652));BE9=BE8;}
var EW=D(Bc);
var BA6=null;var BA8=null;var BA9=null;var BA5=null;var BE$=null;function Qo(){Qo=M(EW);A3L();}
function Py(a,b){var c=new EW();ADn(c,a,b);return c;}
function ABq(){Qo();return BE$.e9();}
function ADn(a,b,c){Qo();B$(a,b,c);}
function A3L(){BA6=Py(B(653),0);BA8=Py(B(654),1);BA9=Py(B(655),2);BA5=Py(B(656),3);BE$=J(EW,[BA6,BA8,BA9,BA5]);}
var QS=D();
var AHj=D(E1);
var Yu=D(D0);
function Im(){var a=this;C.call(a);a.iQ=0;a.fb=null;a.eX=null;a.Gr=0.0;a.u_=0;a.xA=0;a.h$=0;}
var BE_=null;function AKf(){AKf=M(Im);AR_();}
function EH(){var a=new Im();AAf(a);return a;}
function BrN(a){var b=new Im();Tc(b,a);return b;}
function BFa(a,b){var c=new Im();LA(c,a,b);return c;}
function AAf(a){AKf();LA(a,51,0.800000011920929);}
function Tc(a,b){AKf();LA(a,b,0.800000011920929);}
function LA(a,b,c){var d;AKf();K(a);if(c>0.0&&c<1.0){a.Gr=c;d=Hi(b,c);a.u_=d*c|0;a.h$=d-1|0;a.xA=Dd(N(a.h$));a.fb=Bb(C,d);a.eX=Bb(C,d);return;}G(Bl((((H()).c(B(258))).co(c)).d()));}
function A9b(a,b){return Y(BR(Bn(N(b.bl()),BI(2135587861, 2654435769)),a.xA));}
function Ba0(a,b){var c,d,e;if(b===null)G(Bl(B(657)));c=a.fb;d=a.je(b);while(true){e=c.data[d];if(e===null)return  -(d+1|0)|0;if(e.y(b))break;d=(d+1|0)&a.h$;}return d;}
function A1r(a,b,c){var d,e,f;d=a.i2(b);if(d>=0){e=a.eX.data[d];a.eX.data[d]=c;return e;}f= -(d+1|0)|0;a.fb.data[f]=b;a.eX.data[f]=c;f=a.iQ+1|0;a.iQ=f;if(f>=a.u_)AEn(a,a.fb.data.length<<1);return null;}
function U2(a,b,c){var d,e,f;d=a.fb;e=a.je(b);while(true){f=d.data;if(f[e]===null)break;e=(e+1|0)&a.h$;}f[e]=b;a.eX.data[e]=c;}
function A8s(a,b){var c;c=a.i2(b);return c<0?null:a.eX.data[c];}
function AWX(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.i2(b);if(c<0)return null;d=a.fb;e=a.eX;f=e.data;g=f[c];h=a.h$;i=(c+1|0)&h;while(true){j=d.data;k=j[i];if(k===null)break;l=a.je(k);if(((i-l|0)&h)>((c-l|0)&h)){j[c]=k;f[c]=f[i];c=i;}i=(i+1|0)&h;}j[c]=null;f[c]=null;a.iQ=a.iQ-1|0;return g;}
function A7f(a){if(!a.iQ)return;a.iQ=0;ABY(a.fb,null);ABY(a.eX,null);}
function Bj2(a,b){return a.i2(b)<0?0:1;}
function AEn(a,b){var c,d,e,f,g;a:{c=a.fb.data.length;a.u_=b*a.Gr|0;a.h$=b-1|0;a.xA=Dd(N(a.h$));d=a.fb;e=a.eX;a.fb=Bb(C,b);a.eX=Bb(C,b);if(a.iQ>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g!==null)U2(a,g,e.data[f]);f=f+1|0;}}}}
function AR_(){BE_=M5();}
function AGJ(){var a=this;C.call(a);a.i=null;a.dl=0;a.sC=null;a.yJ=0;a.f3=0;a.hg=0;a.b4=0;a.tU=null;}
function Bqw(){var a=new AGJ();ANI(a);return a;}
function GY(a,b){return BnG(a,b);}
function PD(a,b,c){var d,e,f,g,h,i;d=Yx();e=GY(a,b);f=0;g=0;if(!b.j()){h=Bb(B1,1);h.data[0]=B(49);return h;}while(F$(e)){i=f+1|0;if(i>=c&&c>0)break;d.iO((b.es(g,O6(e))).d());g=Qf(e);f=i;}a:{d.iO((b.es(g,b.j())).d());i=f+1|0;if(!c)while(true){i=i+(-1)|0;if(i<0)break;if(((d.p(i)).d()).j())break a;d.nO(i);}}if(i<0)i=0;return d.Ni(Bb(B1,i));}
function ACY(a,b){return PD(a,b,0);}
function K4(a){return a.i.d();}
function A$X(b,c){if(b===null)G(A0p(B(658)));if(c&&(c|255)!=255)G(Bl(B(49)));AEi();Bwu=1;return AFX(Bqw(),b,c);}
function AFX(a,b,c){a.i=Brs(b,c);a.dl=c;a.tU=Pb(a,(-1),a.dl,null);if(a.i.bW()){Vo(a);return a;}G(Ch(B(49),a.i.d(),a.i.dY()));}
function AMe(a,b){var c,d,e;c=BtL(Cm(a,2),Cm(a,64));while(!a.i.bW()){d=a.i;if(!d.ie())break;d=a.i;if(d.cT()&&a.i.cT()!=(-536870788)){d=a.i;if(d.cT()!=(-536870871))break;}c.cO(a.i.F());if(a.i.bQ()!=(-536870788))continue;a.i.F();}e=JQ(a,c);e.T(b);return e;}
function Pb(a,b,c,d){var e,f,g,h,i,j;e=Yx();f=a.dl;g=0;if(c!=a.dl)a.dl=c;a:{switch(b){case -1073741784:h=new NH;i=a.b4+1|0;a.b4=i;AIa(h,i);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new M9;i=a.b4+1|0;a.b4=i;ALI(h,i);break a;case -33554392:h=new N0;i=a.b4+1|0;a.b4=i;ABw(h,i);break a;default:a.f3=a.f3+1|0;if(d!==null)h=Bs$(a.f3);else{h=BrL();g=1;}if(a.f3<=(-1))break a;if(a.f3>=10)break a;a.sC.data[a.f3]=h;break a;}h=Bqq();}while(true){if(a.i.ie()&&a.i.cT()==(-536870788))j=AMe(a,
h);else if(a.i.bQ()==(-536870788)){j=He(h);a.i.F();}else{j=PZ(a,h);if(a.i.bQ()==(-536870788))a.i.F();}if(j!==null)e.iO(j);if(a.i.bW())break;if(a.i.bQ()==(-536870871))break;}if(a.i.LB()==(-536870788))e.iO(He(h));if(a.dl!=f&&!g){a.dl=f;a.i.Lg(a.dl);}switch(b){case -1073741784:break;case -536870872:return Bri(e,h);case -268435416:return Bqm(e,h);case -134217688:return Bni(e,h);case -67108824:return BrA(e,h);case -33554392:return BqL(e,h);default:switch(e.cY()){case 0:break;case 1:return BsB(e.p(0),h);default:return Bon(e,
h);}return He(h);}return Bp2(e,h);}
function AKc(a){var b,c,d;b=Bhb();while(!a.i.bW()){c=a.i;if(!c.ie())break;c=a.i;if(c.Ih())break;c=a.i;if(c.Jl())break;c=a.i;if(!(!c.vF()&&!a.i.cT())){c=a.i;if(!(!c.vF()&&Lm(a.i.cT()))){c=a.i;if(c.cT()!=(-536870871)){c=a.i;if((c.cT()&(-2147418113))!=(-2147483608)){c=a.i;if(c.cT()!=(-536870788)){c=a.i;if(c.cT()!=(-536870876))break;}}}}}d=a.i.F();if(!Kr(d))b.NN(d&65535);else b.VJ(FJ(d));}if(!Cm(a,2))return Boa(b);if(Cm(a,64))return Bua(b);return Buh(b);}
function AKi(a){var b,c,d,e,f,g,h,i,j,k;b=Bf(4);c=0;d=(-1);e=(-1);if(!a.i.bW()&&a.i.ie()){f=b.data;d=a.i.F();f[c]=d;e=d-4352|0;}if(e>=0&&e<19){g=Ck(3);f=g.data;f[c]=d&65535;h=a.i.bQ();i=h-4449|0;if(i>=0&&i<21){f[1]=h&65535;a.i.F();j=a.i.bQ();h=j-4519|0;if(h>=0&&h<28){f[2]=j&65535;a.i.F();return Bjz(g,3);}return Bjz(g,2);}if(!Cm(a,2))return U1(f[0]);if(Cm(a,64))return Bg9(f[0]);return A8$(f[0]);}k=1;while(k<4&&!a.i.bW()&&a.i.ie()){f=b.data;j=k+1|0;f[k]=a.i.F();k=j;}if(k==1){f=b.data;if(!AW2(f[0]))return O9(a,
f[0]);}if(!Cm(a,2))return Bud(b,k);if(Cm(a,64))return BtO(b,k);return Bop(b,k);}
function PZ(a,b){var c,d,e,f;if(a.i.ie()&&!a.i.vF()&&Lm(a.i.cT())){if(!Cm(a,128)){if(!a.i.Ih()&&!a.i.Jl())c=AKc(a);else{d=R8(a,b);c=Kt(a,b,d);}}else{c=AKi(a);if(!a.i.bW()){e=a.i;if(!(e.bQ()==(-536870871)&&!(b instanceof Gk))){e=a.i;if(e.bQ()!=(-536870788)&&!a.i.ie())c=Kt(a,b,c);}}}}else if(a.i.bQ()!=(-536870871)){d=R8(a,b);c=Kt(a,b,d);}else{if(b instanceof Gk)G(Ch(B(49),a.i.d(),a.i.dY()));c=He(b);}a:{if(!a.i.bW()){e=a.i;if(!(e.bQ()==(-536870871)&&!(b instanceof Gk))){e=a.i;if(e.bQ()!=(-536870788)){f=PZ(a,b);if
(c instanceof Da&&!(c instanceof Fj)&&!(c instanceof Df)&&!(c instanceof Fg)){e=c;if(!f.cl(e.rG()))c=Bnb(e);}if((f.jT()&65535)!=43)c.T(f);else c.T(f.rG());break a;}}}if(c===null)return null;c.T(b);}if((c.jT()&65535)!=43)return c;return c.rG();}
function Kt(a,b,c){var d,e,f,g,h,i,j;d=a.i.bQ();if(c!==null&&!(c instanceof Ca)){switch(d){case -2147483606:a.i.F();return BpB(c,b,d);case -2147483605:a.i.F();return Bsi(c,b,(-2147483606));case -2147483585:a.i.F();return Bsv(c,b,(-536870849));case -2147483525:e=new Mp;f=a.i.kc();g=a.hg+1|0;a.hg=g;Yf(e,f,c,b,(-536870849),g);return e;case -1073741782:case -1073741781:a.i.F();h=Brw(c,b,d);c.T(h);return h;case -1073741761:a.i.F();h=Bnw(c,b,(-536870849));c.T(b);return h;case -1073741701:h=new Ow;e=a.i;e=e.kc();i
=a.hg+1|0;a.hg=i;Yd(h,e,c,b,(-536870849),i);c.T(h);return h;case -536870870:case -536870869:a.i.F();h=c.jT()!=(-2147483602)?Bq$(c,b,d):Cm(a,32)?BnM(c,b,d):Bm3(c,b,d,P5(a.dl));c.T(h);return h;case -536870849:a.i.F();h=Bt3(c,b,(-536870849));c.T(b);return h;case -536870789:h=new FC;e=a.i;e=e.kc();g=a.hg+1|0;a.hg=g;KC(h,e,c,b,(-536870849),g);c.T(h);return h;default:}return c;}j=null;if(c!==null)j=c;switch(d){case -2147483606:case -2147483605:a.i.F();h=Bpr(j,b,d);j.T(h);return h;case -2147483585:a.i.F();return Bqy(j,
b,(-2147483585));case -2147483525:return BpP(a.i.kc(),j,b,(-2147483525));case -1073741782:case -1073741781:a.i.F();h=Btz(j,b,d);j.T(h);return h;case -1073741761:a.i.F();return Btk(j,b,(-1073741761));case -1073741701:return Bn4(a.i.kc(),j,b,(-1073741701));case -536870870:case -536870869:a.i.F();h=Bpf(j,b,d);j.T(h);return h;case -536870849:a.i.F();return BoE(j,b,(-536870849));case -536870789:return Brm(a.i.kc(),j,b,(-536870789));default:}return c;}
function R8(a,b){var c,d,e,f,g,h,i,j,k,l;c=null;while(true){a:{d=a.i.bQ();if((d&(-2147418113))==(-2147483608)){a.i.F();e=(d&16711680)>>16;d=d&(-16711681);if(d==(-16777176))a.dl=e;else{if(d!=(-1073741784))e=a.dl;c=Pb(a,d,e,b);if(a.i.bQ()!=(-536870871))G(Ch(B(49),a.i.d(),a.i.dY()));a.i.F();}}else{b:{c:{switch(d){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:a.i.F();c
=Bja(0);break a;case -2147483577:a.i.F();c=Bnt();break a;case -2147483558:a.i.F();c=new OY;f=a.b4+1|0;a.b4=f;AK3(c,f);break a;case -2147483550:a.i.F();c=Bja(1);break a;case -2147483526:a.i.F();c=BpK();break a;case -536870876:a.i.F();a.b4=a.b4+1|0;if(Cm(a,8)){if(Cm(a,1)){c=BnZ(a.b4);break a;}c=BmI(a.b4);break a;}if(Cm(a,1)){c=Box(a.b4);break a;}c=Bpx(a.b4);break a;case -536870866:a.i.F();if(Cm(a,32)){c=BpY();break a;}c=Bpm(P5(a.dl));break a;case -536870821:a.i.F();g=0;if(a.i.bQ()==(-536870818)){g=1;a.i.F();}c
=Yh(a,g,b);if(a.i.bQ()!=(-536870819))G(Ch(B(49),a.i.d(),a.i.dY()));a.i.rv(1);a.i.F();break a;case -536870818:a.i.F();a.b4=a.b4+1|0;if(!Cm(a,8)){c=A2F();break a;}c=Btw(P5(a.dl));break a;case 0:h=a.i.uu();if(h!==null)c=JQ(a,h);else{if(a.i.bW()){c=He(b);break a;}c=U1(d&65535);}a.i.F();break a;default:break b;}a.i.F();c=A2F();break a;}i=(d&2147483647)-48|0;if(a.f3<i)G(Ch(B(49),a.i.d(),a.i.dY()));a.i.F();a.b4=a.b4+1|0;c=!Cm(a,2)?BqK(i,a.b4):Cm(a,64)?Bn0(i,a.b4):Bt7(i,a.b4);a.sC.data[i].vC=1;a.yJ=1;break a;}if(d>=
0&&!a.i.lX()){c=O9(a,d);a.i.F();}else if(d==(-536870788))c=He(b);else{if(d!=(-536870871)){j=new RR;k=!a.i.lX()?Ks(d&65535):(a.i.uu()).d();l=a.i;ACZ(j,k,l.d(),a.i.dY());G(j);}if(b instanceof Gk)G(Ch(B(49),a.i.d(),a.i.dY()));c=He(b);}}}if(d!=(-16777176))break;}return c;}
function Yh(a,b,c){var d,e;d=GQ(a,b);e=JQ(a,d);e.T(c);return e;}
function GQ(a,b){var c,d,e,f,g,h,i,j,k,$$je;c=Btr(b,Cm(a,2),Cm(a,64));d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(a.i.bW())break a;f=a.i.bQ()==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.i.bQ()){case -536870874:if(d>=0)c.cO(d);d=a.i.F();if(a.i.bQ()!=(-536870874)){d=38;break d;}if(a.i.cT()==(-536870821)){a.i.F();e=1;d=(-1);break d;}a.i.F();if(g){c=GQ(a,0);break d;}if(a.i.bQ()==(-536870819))break d;c.A2(GQ(a,0));break d;case -536870867:if(!g&&a.i.cT()!=(-536870819)){h=a.i;if(h.cT()!=(-536870821)&&d>=0){a.i.F();i
=a.i.bQ();if(a.i.lX())break c;if(i<0){h=a.i;if(h.cT()!=(-536870819)){h=a.i;if(h.cT()!=(-536870821)&&d>=0)break c;}}e:{try{if(Lm(i))break e;i=i&65535;break e;}catch($$e){$$je=R($$e);if($$je instanceof Cs){break b;}else{throw $$e;}}}try{c.bN(d,i);}catch($$e){$$je=R($$e);if($$je instanceof Cs){break b;}else{throw $$e;}}a.i.F();d=(-1);break d;}}if(d>=0)c.cO(d);d=45;a.i.F();break d;case -536870821:if(d>=0){c.cO(d);d=(-1);}a.i.F();j=0;if(a.i.bQ()==(-536870818)){a.i.F();j=1;}if(!e)c.Q3(GQ(a,j));else c.A2(GQ(a,j));e
=0;a.i.F();break d;case -536870819:if(d>=0)c.cO(d);d=93;a.i.F();break d;case -536870818:if(d>=0)c.cO(d);d=94;a.i.F();break d;case 0:if(d>=0)c.cO(d);k=a.i.uu();if(k===null)d=0;else{c.Tt(k);d=(-1);}a.i.F();break d;default:}if(d>=0)c.cO(d);d=a.i.F();}g=0;}G(Ch(B(49),K4(a),a.i.dY()));}G(Ch(B(49),K4(a),a.i.dY()));}if(!f){if(d>=0)c.cO(d);return c;}G(Ch(B(49),K4(a),a.i.dY()-1|0));}
function O9(a,b){var c;c=Kr(b);if(Cm(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return A8$(b&65535);}if(Cm(a,64)&&b>128){if(c)return Bo1(b);if(MV(b))return AYO(b&65535);if(!NS(b))return Bg9(b&65535);return BbV(b&65535);}}if(c)return BmY(b);if(MV(b))return AYO(b&65535);if(!NS(b))return U1(b&65535);return BbV(b&65535);}
function JQ(a,b){var c,d;if(!b.J4()){if(!b.GX()){if(b.hI())return AUf(b);return A2p(b);}if(b.hI())return Be$(b);return Bct(b);}c=b.TX();d=Bqp(c);if(!b.GX()){if(b.hI())return On(AUf(b.n8()),d);return On(A2p(b.n8()),d);}if(b.hI())return On(Be$(b.n8()),d);return On(Bct(b.n8()),d);}
function GT(b){return A$X(b,0);}
function Vo(a){if(a.yJ)a.tU.ev();}
function Bcx(b){var c,d,e,f;c=(H()).c(B(659));d=0;while(true){e=b.wW(B(660),d);if(e<0)break;f=e+2|0;(c.c(b.c0(d,f))).c(B(661));d=f;}return ((c.c(b.fc(d))).c(B(660))).d();}
function ACJ(a){return a.f3;}
function ALt(a){return a.hg+1|0;}
function YB(a){return a.b4+1|0;}
function Iu(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Cm(a,b){return (a.dl&b)!=b?0:1;}
function ANI(a){K(a);a.sC=Bb(C7,10);a.f3=(-1);a.hg=(-1);a.b4=(-1);}
var K$=D(DZ);
var US=D(Hs);
function Bsv(a,b,c){var d=new US();A2o(d,a,b,c);return d;}
function A2o(a,b,c,d){Pv(a,b,c,d);L6();b.T(BwK);}
function AVT(a,b,c,d){var e;e=a.ba.e(b,c,d);if(e<=0)e=b;return a.k.e(e,c,d);}
function Bfi(a,b){a.k=b;}
var AIG=D(U);
function BnX(){var a=new AIG();Bkk(a);return a;}
function Bkk(a){Ci(a);}
var AHu=D(BD);
var AIH=D(U);
function Brz(){var a=new AIH();Bfj(a);return a;}
function Bfj(a){Ci(a);}
function Gm(){var a=this;C.call(a);a.pF=0.0;a.pE=0.0;a.rL=0.0;a.qs=0.0;}
var BFb=null;var BFc=null;function Bpy(){Bpy=M(Gm);A0$();}
function AB4(){var a=new Gm();Qj(a);return a;}
function Qj(a){Bpy();K(a);}
function AYp(a){return ((((((((((H()).c(B(662))).co(a.pF)).c(B(423))).co(a.pE)).c(B(423))).co(a.rL)).c(B(423))).co(a.qs)).c(B(663))).d();}
function APd(a){var b;b=31+CO(a.qs)|0;b=(31*b|0)+CO(a.rL)|0;b=(31*b|0)+CO(a.pF)|0;b=(31*b|0)+CO(a.pE)|0;return b;}
function Bgr(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(CB(a)!==CB(b))return 0;c=b;if(CO(a.qs)!=CO(c.qs))return 0;if(CO(a.rL)!=CO(c.rL))return 0;if(CO(a.pF)!=CO(c.pF))return 0;if(CO(a.pE)==CO(c.pE))return 1;return 0;}
function A0$(){BFb=AB4();BFc=AB4();}
var AII=D(U);
function Btg(){var a=new AII();AWV(a);return a;}
function AWV(a){Ci(a);}
var AID=D(U);
function BmK(){var a=new AID();Bbf(a);return a;}
function Bbf(a){Ci(a);}
var AIE=D(U);
function BqB(){var a=new AIE();BjR(a);return a;}
function BjR(a){Ci(a);}
var Ut=D();
function AJg(){C.call(this);this.M7=null;}
function BnN(a){var b=new AJg();AU7(b,a);return b;}
function AU7(a,b){a.M7=b;K(a);}
function A5W(a){}
function ATc(a){a.MR();}
function AJd(){LM.call(this);this.Kg=null;}
function BnY(a,b,c,d,e){var f=new AJd();A2U(f,a,b,c,d,e);return f;}
function A2U(a,b,c,d,e,f){a.Kg=b;ZF(a,c,d,e,f);}
var AAa=D();
function YA(){FP.call(this);this.jH=null;}
function BqF(){var a=new YA();Bkq(a);return a;}
function Bkq(a){Ox(a);}
function A77(a,b){var c;L4();c=B2(a,BBt);if(c===null){c=Boe();Fu(a,c);}c.h0.C(b);return a;}
var Tb=D();
var N4=D();
var BzX=0;var ALH=D(Fb);
var X8=D(Hp);
function NG(){C.call(this);this.ss=null;}
var BFd=null;function Bns(){var a=new NG();A$_(a);return a;}
function A$_(a){K(a);}
function Baf(a,b,c,d,e){if(a.ss===null)a.ss=Br9();a.ss.Kv(b,c,d,e);}
function ASJ(){if(BFd===null)BFd=Bns();return BFd;}
function Ku(){X.call(this);this.t9=0;}
function Bp4(a){var b=new Ku();Yo(b,a);return b;}
function Yo(a,b){Bo(a);a.t9=b;}
function AZg(a,b){return a.bL^(a.t9!=HU(b&65535)?0:1);}
var AHn=D(Ku);
function BmU(a){var b=new AHn();AX_(b,a);return b;}
function AX_(a,b){Yo(a,b);}
function BiG(a,b){return a.bL^(!(a.t9>>HU(b&65535)&1)?0:1);}
function ACO(){var a=this;C.call(a);a.UA=null;a.fn=null;}
function BrE(a,b){var c=new ACO();Bcl(c,a,b);return c;}
function Bcl(a,b,c){K(a);a.fn=c;a.UA=b;}
function JW(a){return a.fn.length;}
function ZO(a,b){return a.fn[b];}
function AAb(a){return BtK(a);}
function Zw(a){var b,c,d,e,f,g;b=a.fn.length;c=B(664);d=H0(((b*4|0)/3|0)+2|0);e=0;while(e<b){f=b-e|0;if(f>=3){g=(((a.fn[e]&255)<<16)+((a.fn[e+1|0]&255)<<8)|0)+(a.fn[e+2|0]&255)|0;d.bv(c.g(g>>18&63));d.bv(c.g(g>>12&63));d.bv(c.g(g>>6&63));d.bv(c.g(g&63));}else if(f<2){g=(a.fn[e]&255)<<16;d.bv(c.g(g>>18&63));d.bv(c.g(g>>12&63));d.c(B(665));}else{g=((a.fn[e]&255)<<16)+((a.fn[e+1|0]&255)<<8)|0;d.bv(c.g(g>>18&63));d.bv(c.g(g>>12&63));d.bv(c.g(g>>6&63));d.c(B(666));}e=e+3|0;}return d.d();}
function Vq(){EY.call(this);this.IP=0;}
function BnF(a){var b=new Vq();BbR(b,a);return b;}
function BbR(a,b){M3(a);a.IP=b;}
function ARH(a){var b,c;b=a.IP;c=H();V(I(c,B(667)),b);return P(c);}
function ZQ(){var a=this;C.call(a);a.tc=0;a.sL=0;a.yY=0;}
function BrD(){var a=new ZQ();ANd(a);return a;}
function ANd(a){K(a);}
var ABn=D(Fl);
function BtO(a,b){var c=new ABn();Bbx(c,a,b);return c;}
function Bbx(a,b,c){MG(a,b,c);}
var O1=D(Iy);
var Un=D(DU);
function Xd(){X.call(this);this.SD=null;}
function Bnk(a){var b=new Xd();A63(b,a);return b;}
function A63(a,b){a.SD=b;Bo(a);}
function AON(a,b){return Nv(b);}
var AFH=D(Ba);
function Brd(){var a=new AFH();AOf(a);return a;}
function AOf(a){BG(a);}
function AR5(a){var b;b=Bnp(a);b.bm=1;return b;}
var GD=D(Bc);
var ByO=null;var BDB=null;var BFe=null;function Ig(){Ig=M(GD);BaE();}
function ASl(a,b){var c=new GD();AIO(c,a,b);return c;}
function AIO(a,b,c){Ig();B$(a,b,c);}
function BaE(){ByO=ASl(B(668),0);BDB=ASl(B(669),1);BFe=J(GD,[ByO,BDB]);}
var Fw=D(Bc);
var BEW=null;var BFf=null;var BEX=null;var BFg=null;function GX(){GX=M(Fw);Bds();}
function Tm(a,b){var c=new Fw();AMO(c,a,b);return c;}
function AFS(){GX();return BFg.e9();}
function AMO(a,b,c){GX();B$(a,b,c);}
function AFI(){GX();return J(Fw,[BEW,BFf,BEX]);}
function Bds(){BEW=Tm(B(670),0);BFf=Tm(B(671),1);BEX=Tm(B(672),2);BFg=AFI();}
var Wr=D(Dr);
var QJ=D(D8);
var BFh=null;function RF(){RF=M(QJ);BaR();}
function AMn(b,c){var d,e,f,g,h,i,j;RF();if(c>=2&&c<=36){if(b!==null&&!b.bW()){a:{d=0;e=0;switch(b.g(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=W;while(e<b.j()){g=e+1|0;h=QP(b.g(e));if(h<0){i=new CD;j=H();I(I(j,B(7)),b);Er(i,P(j));G(i);}if(h>=c){i=new CD;j=H();I(I(V(I(j,B(8)),c),B(9)),b);Er(i,P(j));G(i);}f=BE(Bn(N(c),f),N(h));if(HP(f,W)){if(g==b.j()&&Z(f,BI(0, 2147483648))&&d)return BI(0, 2147483648);i=new CD;j=H();I(I(j,B(10)),b);Er(i,P(j));G(i);}e=g;}if(d)f=Bey(f);return f;}G(Bd$(B(11)));}i
=new CD;j=H();V(I(j,B(12)),c);Er(i,P(j));G(i);}
function AL0(b){RF();return AMn(b,10);}
function Dd(b){var c,d,e;RF();if(Z(b,W))return 64;c=0;d=BR(b,32);if(DW(d,W))c=32;else d=b;e=BR(d,16);if(Z(e,W))e=d;else c=c|16;d=BR(e,8);if(Z(d,W))d=e;else c=c|8;e=BR(d,4);if(Z(e,W))e=d;else c=c|4;d=BR(e,2);if(Z(d,W))d=e;else c=c|2;if(DW(BR(d,1),W))c=c|1;return (64-c|0)-1|0;}
function AEx(b){var c,d,e;RF();if(Z(b,W))return 64;c=0;d=CC(b,32);if(DW(d,W))c=32;else d=b;e=CC(d,16);if(Z(e,W))e=d;else c=c|16;d=CC(e,8);if(Z(d,W))d=e;else c=c|8;e=CC(d,4);if(Z(e,W))e=d;else c=c|4;d=CC(e,2);if(Z(d,W))d=e;else c=c|2;if(DW(CC(d,1),W))c=c|1;return (64-c|0)-1|0;}
function Kl(b,c){return Long_udiv(b, c);}
function AC3(b,c){return Long_urem(b, c);}
function BaR(){BFh=F($rt_longcls());}
var Na=D(Ie);
var BFi=null;function Bk$(){Bk$=M(Na);BlI();}
function Bo2(){var a=new Na();AG5(a);return a;}
function Bnh(a){var b=new Na();W4(b,a);return b;}
function AG5(a){Bk$();JM(a);a.dc(N(Zn()),1);}
function AP9(a){U4(Y(a.bb));}
function W4(a,b){Bk$();JM(a);}
function BlI(){BFi=Bnh(0);}
function Zn(){var jsObj=new $rt_globals.Bullet.btDbvtBroadphase();return $rt_globals.Bullet.getPointer(jsObj);}
function U4(b){var jsObj=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.btDbvtBroadphase);$rt_globals.Bullet.destroy(jsObj);}
function Zh(){var a=this;C.call(a);a.mo=null;a.se=null;a.dA=0;a.Dy=0;}
function Bfs(a){var b=new Zh();AVB(b,a);return b;}
function AVB(a,b){K(a);while(b>=a.dA){a.dA=a.dA<<1|1;}a.dA=a.dA<<1|1;a.mo=Bf(a.dA+1|0);a.se=Bf(a.dA+1|0);a.Dy=b;}
function AUU(a,b,c){var d,e,f;d=0;e=b&a.dA;while(a.mo.data[e]&&a.mo.data[e]!=b){f=d+1|0;d=f&a.dA;f=e+d|0;e=f&a.dA;}a.mo.data[e]=b;a.se.data[e]=c;}
function BdV(a,b){var c,d,e,f;c=b&a.dA;d=0;while(true){e=a.mo.data[c];if(!e)break;if(e==b)return a.se.data[c];f=d+1|0;d=f&a.dA;f=c+d|0;c=f&a.dA;}return a.Dy;}
var XP=D(CW);
var O7=D(Il);
var BFj=null;function APz(){APz=M(O7);ASA();}
function Bti(a){var b=new O7();X2(b,a);return b;}
function Boy(a){var b=new O7();AJp(b,a);return b;}
function X2(a,b){var c;APz();J9(a);Ey();c=Byo;Es(b,c);a.dc(N(AHZ(Y((c.bX())))),1);}
function AJp(a,b){APz();J9(a);}
function ASA(){BFj=Boy(0);}
function AHZ(b){var boxHalfExtentsJSObj=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.btVector3);var jsObj=new $rt_globals.Bullet.btBoxShape(boxHalfExtentsJSObj);return $rt_globals.Bullet.getPointer(jsObj);}
var AKu=D(Ba);
function Bpc(){var a=new AKu();A7U(a);return a;}
function A7U(a){BG(a);}
function Bfp(a){var b;b=Bpk(a);b.bm=1;return b;}
var DQ=D(Bc);
var BFk=null;var BFl=null;var BFm=null;var BFn=null;var BFo=null;var BFp=null;var BDC=null;var BFq=null;function AER(){AER=M(DQ);A54();}
function G9(a,b){var c=new DQ();AB9(c,a,b);return c;}
function AB9(a,b,c){AER();B$(a,b,c);}
function Vk(){AER();return J(DQ,[BFk,BFl,BFm,BFn,BFo,BFp,BDC]);}
function A54(){BFk=G9(B(62),0);BFl=G9(B(673),1);BFm=G9(B(674),2);BFn=G9(B(675),3);BFo=G9(B(676),4);BFp=G9(B(677),5);BDC=G9(B(678),6);BFq=Vk();}
var ADv=D(E5);
function Wi(){var a=this;C.call(a);a.I0=0;a.DP=null;a.kj=0;a.i9=0;a.sM=0;a.ya=0;a.Gh=0;a.FE=0;a.Id=0;a.Bg=0;a.Hf=0;a.CY=0;a.q8=0;}
function Bp$(a){var b=new Wi();AOS(b,a);return b;}
function A0x(a){return a.kj&&a.i9?1:0;}
function Bhl(a){return !a.kj&&!a.i9?1:0;}
function AOS(a,b){K(a);a.I0=1;a.kj=(-1);a.i9=(-1);a.sM=0;a.ya=0;a.Gh=0;a.FE=0;a.Id=0;a.Bg=0;a.Hf=0;a.CY=0;a.DP=b;AAv(new Sh);}
function AEZ(){X.call(this);this.Ww=null;}
function Bp3(a){var b=new AEZ();A35(b,a);return b;}
function A35(a,b){a.Ww=b;Bo(a);}
function Bea(a,b){return MC(b);}
function Ub(){var a=this;X.call(a);a.qA=null;a.QJ=null;}
function Brr(a,b){var c=new Ub();A4b(c,a,b);return c;}
function A4b(a,b,c){a.QJ=b;a.qA=c;Bo(a);}
function AWI(a,b){return a.bL^a.qA.e5(b);}
function BaA(a){var b,c;b=H();c=a.qA.me(0);while(c>=0){b.sY(FJ(c));b.bv(124);c=a.qA.me(c+1|0);}if(b.j()>0)b.IW(b.j()-1|0);return b.d();}
var AB$=D(Df);
function BpB(a,b,c){var d=new AB$();A2m(d,a,b,c);return d;}
function A2m(a,b,c,d){GA(a,b,c,d);L6();b.T(BwK);}
function A9X(a,b,c,d){var e;while(true){e=a.ba.e(b,c,d);if(e<=0)break;b=e;}return a.k.e(b,c,d);}
var Tl=D(C8);
function DG(){B9.call(this);this.eb=null;}
var BCa=W;var BCm=W;var BFr=W;var BCo=W;var BBW=W;var BBs=W;var BFs=W;var BFt=W;function CN(){CN=M(DG);BbZ();}
function BFu(a){var b=new DG();LG(b,a);return b;}
function BFv(a,b){var c=new DG();Mq(c,a,b);return c;}
function A_8(a,b,c,d,e){var f=new DG();Rc(f,a,b,c,d,e);return f;}
function Bp_(a){var b=new DG();AIz(b,a);return b;}
function ABs(b){CN();return Z(Bk(b,BFt),W)?0:1;}
function NI(b,c,d,e){CN();return A_8(BCa,b,c,d,e);}
function AHJ(b,c,d,e){CN();return A_8(BCm,b,c,d,e);}
function LG(a,b){CN();Gz(a,b);a.eb=E3();if(ABs(b))return;G(Bh(B(679)));}
function Mq(a,b,c){CN();LG(a,b);if(c!==null)a.eb.ik(c);}
function Rc(a,b,c,d,e,f){CN();LG(a,b);a.eb.hc(c,d,e,f);}
function AIz(a,b){CN();Mq(a,b.dq,b.eb);}
function ATV(a){return Bp_(a);}
function A3N(a){var b,c;b=HL(a);c=(953*b|0)+a.eb.lQ()|0;return c;}
function BbZ(){BCa=Cf(B(680));BCm=Cf(B(681));BFr=Cf(B(682));BCo=Cf(B(683));BBW=Cf(B(684));BBs=Cf(B(685));BFs=Cf(B(686));BFt=B3(B3(B3(B3(B3(B3(BFr,BCa),BCm),BCo),BBW),BBs),BFs);}
function T$(){var a=this;X.call(a);a.FM=null;a.Lt=null;}
function Bsq(a,b){var c=new T$();BhL(c,a,b);return c;}
function BhL(a,b,c){a.Lt=b;a.FM=c;Bo(a);}
function AQ5(a,b){return a.FM.r(b);}
function T_(){var a=this;X.call(a);a.z1=null;a.WX=null;}
function BsJ(a,b){var c=new T_();AXO(c,a,b);return c;}
function AXO(a,b,c){a.WX=b;a.z1=c;Bo(a);}
function Bab(a,b){return a.z1.r(b)?0:1;}
function Ua(){var a=this;X.call(a);a.B$=0;a.IC=null;a.C3=null;a.Kd=null;}
function BpD(a,b,c,d){var e=new Ua();ARg(e,a,b,c,d);return e;}
function ARg(a,b,c,d,e){a.Kd=b;a.B$=c;a.IC=d;a.C3=e;Bo(a);}
function Bmq(a,b){return !(a.B$^a.IC.r(b))&&!a.C3.r(b)?0:1;}
function UB(){var a=this;X.call(a);a.IS=0;a.yr=null;a.yG=null;a.Le=null;}
function Bue(a,b,c,d){var e=new UB();A_7(e,a,b,c,d);return e;}
function A_7(a,b,c,d,e){a.Le=b;a.IS=c;a.yr=d;a.yG=e;Bo(a);}
function ATX(a,b){return !(a.IS^a.yr.r(b))&&!a.yG.r(b)?1:0;}
function Uc(){var a=this;X.call(a);a.H6=0;a.ED=null;a.AP=null;a.Rv=null;}
function Bt_(a,b,c,d){var e=new Uc();A$U(e,a,b,c,d);return e;}
function A$U(a,b,c,d,e){a.Rv=b;a.H6=c;a.ED=d;a.AP=e;Bo(a);}
function A8B(a,b){return a.H6^a.ED.r(b)&&a.AP.r(b)?1:0;}
function Ud(){var a=this;X.call(a);a.HG=0;a.Ed=null;a.H1=null;a.Se=null;}
function Bpv(a,b,c,d){var e=new Ud();AN5(e,a,b,c,d);return e;}
function AN5(a,b,c,d,e){a.Se=b;a.HG=c;a.Ed=d;a.H1=e;Bo(a);}
function AZT(a,b){return a.HG^a.Ed.r(b)&&a.H1.r(b)?0:1;}
function Ue(){var a=this;X.call(a);a.I4=null;a.Bs=0;a.JF=null;}
function Bm0(a,b,c){var d=new Ue();AYX(d,a,b,c);return d;}
function AYX(a,b,c,d){a.JF=b;a.I4=c;a.Bs=d;Bo(a);}
function AVH(a,b){return a.I4.r(b)&&a.Bs^a.JF.be.e5(b)?1:0;}
function T9(){var a=this;X.call(a);a.HR=null;a.GG=0;a.Bq=null;}
function Bt$(a,b,c){var d=new T9();BdW(d,a,b,c);return d;}
function BdW(a,b,c,d){a.Bq=b;a.HR=c;a.GG=d;Bo(a);}
function Bjb(a,b){return a.HR.r(b)&&a.GG^a.Bq.be.e5(b)?0:1;}
var QB=D(Fx);
var AHW=D(F_);
function H0(a){var b=new AHW();AVY(b,a);return b;}
function H(){var a=new AHW();Bk5(a);return a;}
function AVY(a,b){Mt(a,b);}
function Bk5(a){MI(a);}
function I(a,b){AGV(a,b);return a;}
function ANT(a,b){Og(a,b);return a;}
function V(a,b){T0(a,b);return a;}
function Qp(a,b){AL3(a,b);return a;}
function Jv(a,b){Z4(a,b);return a;}
function P7(a,b){Vt(a,b);return a;}
function Bp(a,b){QA(a,b);return a;}
function ARj(a,b,c,d){R3(a,b,c,d);return a;}
function Biv(a,b){Ra(a,b);return a;}
function ADq(a,b){Zo(a,b);return a;}
function A_M(a,b,c){Xj(a,b,c);return a;}
function BiP(a,b,c){AIv(a,b,c);return a;}
function AVb(a,b,c){AE9(a,b,c);return a;}
function Bhf(a,b,c,d,e){PA(a,b,c,d,e);return a;}
function Bls(a,b,c){Vp(a,b,c);return a;}
function Be9(a,b,c){Sj(a,b,c);return a;}
function AYP(a,b,c){R$(a,b,c);return a;}
function A3A(a,b,c){AL2(a,b,c);return a;}
function A2a(a,b){ALA(a,b);return a;}
function BcO(a,b,c){Rx(a,b,c);return a;}
function Bkt(a,b,c){return AEs(a,b,c);}
function BcX(a,b){ALj(a,b);}
function ASs(a,b,c,d,e){AGa(a,b,c,d,e);}
function Bho(a,b,c){return AKn(a,b,c);}
function BcE(a,b,c,d,e){return a.Qr(b,c,d,e);}
function ARW(a,b,c,d){return a.NH(b,c,d);}
function A8m(a){return Qq(a);}
function P(a){return Q0(a);}
function AWs(a,b){PK(a,b);}
function AWA(a,b,c){return a.Km(b,c);}
function Ben(a,b,c){return a.UY(b,c);}
function BdI(a,b,c){return a.PU(b,c);}
function A1B(a,b,c){return a.KN(b,c);}
function BaX(a,b,c){return a.Wt(b,c);}
function AQy(a,b,c){return a.OY(b,c);}
function A5t(a,b,c){return a.Kw(b,c);}
var ALo=D(Bs);
function Bm7(){var a=new ALo();A5b(a);return a;}
function A5b(a){CY(a);}
var S4=D();
function BsW(){var a=new S4();AWl(a);return a;}
function AWl(a){K(a);}
function Mu(){I3.call(this);this.S$=null;}
var BFw=null;function BoQ(){BoQ=M(Mu);AOA();}
function TU(a){var b=new Mu();AJC(b,a);return b;}
function AJC(a,b){BoQ();AKL(a);}
function AWO(a,b){a.S$=b;}
function AOA(){BFw=TU(0);}
var YQ=D(E7);
var S3=D();
function Bog(){var a=new S3();A8N(a);return a;}
function A8N(a){K(a);}
function AJn(){C.call(this);this.MA=null;}
function BnW(){var a=new AJn();AWE(a);return a;}
function AWE(a){K(a);a.MA=Bm5(16);}
var ACR=D(Le);
var AI9=D(BX);
var ABZ=D(Ha);
function MN(){var a=this;C.call(a);a.ds=null;a.cn=0;a.oq=W;}
function AGr(a){var b=new MN();Beh(b,a);return b;}
function Beh(a,b){var c,d,e,f;c=b.data;K(a);a.oq=N(-1);d=c.length;if(!d)G(Bl(B(687)));e=Bb(Fv,d);f=0;while(f<d){e.data[f]=c[f];f=f+1|0;}a.ds=e;a.cn=ADa(a);}
function EX(a,b){var c,d;c=Dp(a);d=0;while(d<c){if((CU(a,d)).gy==b)return CU(a,d);d=d+1|0;}return null;}
function ADa(a){var b,c,d;b=0;c=0;while(c<a.ds.data.length){d=a.ds.data[c];d.cP=b;b=b+Vg(d)|0;c=c+1|0;}return b;}
function Dp(a){return a.ds.data.length;}
function CU(a,b){return a.ds.data[b];}
function Rw(a,b){var c,d;if(b===a)return 1;if(!(b instanceof MN))return 0;c=b;if(a.ds.data.length!=c.ds.data.length)return 0;d=0;while(d<a.ds.data.length){if(!Ns(a.ds.data[d],c.ds.data[d]))return 0;d=d+1|0;}return 1;}
function K0(a){var b,c;if(Z(a.oq,N(-1))){b=W;c=0;while(c<a.ds.data.length){b=B3(b,N(a.ds.data[c].gy));c=c+1|0;}a.oq=b;}return a.oq;}
function Rq(a){return B3(K0(a),CC(N(a.ds.data.length),32));}
function AMN(){var a=this;C.call(a);a.lH=null;a.u3=null;a.fD=null;a.pY=null;a.tK=0;a.Hu=null;a.yL=null;}
function BFx(a,b,c){var d=new AMN();AAg(d,a,b,c);return d;}
function BsK(){var a=new AMN();Blh(a);return a;}
function AAg(a,b,c,d){K(a);a.u3=Bq7();a.fD=By();if(d===null)d=BmP();a.yL=d;a.tK=b!==null?0:1;if(b===null)b=Bq4(BpO(1,1));a.pY=b;if(c===null)c=BsI();a.Hu=c;}
function Blh(a){AAg(a,null,null,null);}
function BeN(a,b){if(a.lH!==null)G(Bh(B(688)));a.lH=b;if(a.tK)a.pY.hF();}
function BbJ(a){var b,c,d;a.yL.LE(a.lH,a.fD);b=null;c=0;while(c<a.fD.h){d=a.fD.p(c);if(b!==d.lI){if(b!==null)b.M();b=d.lI;b.GO(a.lH,a.pY);}b.TE(d);c=c+1|0;}if(b!==null)b.M();a.u3.dC();a.fD.J();}
function Bid(a){a.dC();if(a.tK)a.pY.M();a.lH=null;}
function A2v(a,b,c){var d,e;d=a.fD.h;b.M_(a.fD,a.u3);while(d<a.fD.h){e=a.fD.p(d);e.cD=c;e.lI=a.Hu.OP(e);d=d+1|0;}}
var T2=D();
var S$=D();
var Q5=D();
var ZS=D(Ba);
function Bto(){var a=new ZS();APp(a);return a;}
function APp(a){BG(a);}
function ASu(a){return (Dv()).bN(0,127);}
function Hy(){var a=this;C.call(a);a.cb=null;a.bt=null;a.cg=0;a.xh=0.0;a.oY=0.0;}
var BFy=null;var BFz=null;function Ec(){Ec=M(Hy);A$l();}
function BsT(){var a=new Hy();AL9(a);return a;}
function BFA(a,b){var c=new Hy();T3(c,a,b);return c;}
function BFB(a,b,c,d,e,f){var g=new Hy();Zd(g,a,b,c,d,e,f);return g;}
function BFC(a,b,c,d,e,f,g,h,i){var j=new Hy();AKg(j,a,b,c,d,e,f,g,h,i);return j;}
function AL9(a){Ec();K(a);a.cb=Ee(1);a.bt=Jy(2);}
function T3(a,b,c){Ec();K(a);a.cb=Ee(1);a.bt=Jy(2);a.RS(b,c);}
function Zd(a,b,c,d,e,f,g){Ec();K(a);a.cb=Ee(1);a.bt=Jy(2);a.U9(b,c,d,e,f,g);}
function AKg(a,b,c,d,e,f,g,h,i,j){Ec();K(a);a.cb=Ee(1);a.bt=Jy(2);a.rq(b,c,d,e,f,g,h,i,j);}
function Bic(a,b,c){a.rq(b,c,0,c.j(),b.BU(),0.0,8,0,null);}
function BdT(a,b,c,d,e,f,g){a.rq(b,c,0,c.j(),d,e,f,g,null);}
function ARp(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg;a.ea();k=b.ld;if(d==e){a.oY=k.fi;return;}if(i)g=HH(g,k.x6*3.0);l=!i&&j===null?0:1;m=f.lQ();a.bt.TG(0,m);n=k.nk;if(n)BFz.em(m);o=0;p=0.0;q=k.lg;r=null;s=null;t=m;u=d;a:{b:while(true){c:{v=0;if(d==e){if(u==e)break b;o=1;w=e;}else{d:{x=d+1|0;switch(c.g(d)){case 10:w=x-1|0;v=1;d=x;break c;case 91:if(!n){d=x;break d;}y=YJ(a,c,x,e);if(y>=0){w=x-1|0;d=x+(y+1|0)|0;if(d==e){o=1;break c;}m=BFz.bQ();break c;}if(y!=(-2)){d=x;break d;}d
=x+1|0;break d;default:}d=x;}continue b;}}z=BFy.g1();z.ej=0.0;z.o3=p;k.JB(z,c,u,w,s);a.cg=a.cg+z.bi.h|0;if(m!=t){if(a.bt.bG(a.bt.G-2|0)!=a.cg){a.bt.em(a.cg);a.bt.em(m);}else a.bt.fK(a.bt.G-1|0,m);t=m;}e:{if(!z.bi.h){BFy.mF(z);if(r===null)break e;}else if(r!==null){r.KF(z);BFy.mF(z);}else{a.cb.C(z);r=z;}if(!v&&!o)s=r.bi.yP();else{Id(a,k,r);s=null;}if(l&&r.bi.h&&!(!v&&!o)){ba=r.bg.GK()+r.bg.l8(1);bb=2;while(bb<r.bg.U){bc=r.bi;bd=bb-1|0;be=bc.p(bd);bf=Je(a,be,k);if(ba+bf-9.999999747378752E-5<=g)ba=ba+r.bg.S.data[bb];else
{if(j!==null){Tz(a,k,r,g,j);break a;}bg=k.PI(r.bi,bb);if(!(!bg&&r.ej===0.0)&&bg<r.bi.h)bd=bg;r=ZZ(a,k,r,bd);if(r===null)break e;a.cb.C(r);p=p+q;r.ej=0.0;r.o3=p;ba=r.bg.GK()+r.bg.l8(1);bb=1;}bb=bb+1|0;}}}if(v){r=null;s=null;p=w!=u?p+q:p+q*k.Ad;}u=d;}}a.oY=k.fi+De(p);AFc(a,k);AIf(a,g,h);if(n)BFz.J();}
function AFc(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=0.0;d=a.cb.N;e=0;f=a.cb.h;while(e<f){g=d.data[e];h=g.bg.S;i=h.data;j=g.ej+i[0];k=0.0;l=g.bi.N;m=0;n=g.bi.h;while(m<n){o=l.data[m];p=Je(a,o,b);k=HH(k,j+p);m=m+1|0;j=j+i[m];}g.n2=HH(j,k)-g.ej;c=HH(c,g.ej+g.n2);e=e+1|0;}a.xh=c;}
function AIf(a,b,c){var d,e,f,g,h;a:{if(!(c&8)){d=!(c&1)?0:1;e=a.cb.N;f=0;g=a.cb.h;while(true){if(f>=g)break a;h=e.data[f];h.ej=h.ej+(!d?b-h.n2:0.5*(b-h.n2));f=f+1|0;}}}}
function Tz(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;f=c.bi.h;Ec();g=BFy.g1();b.JB(g,e,0,e.j(),null);h=0.0;if(g.bg.U>0){Id(a,b,g);i=g.bg.S;j=1;k=g.bg.U;while(j<k){h=h+i.data[j];j=j+1|0;}}l=d-h;m=0;n=c.ej;i=c.bg.S;a:{while(true){if(m>=c.bg.U)break a;o=i.data[m];n=n+o;if(n>l)break;m=m+1|0;}}if(m<=1){c.bi.J();c.bg.J();c.bg.y3(g.bg);}else{c.bi.nr(m-1|0);c.bg.nr(m);Id(a,b,c);if(g.bg.U>0)c.bg.AY(g.bg,1,g.bg.U-1|0);}b:{p=f-c.bi.h|0;if(p>0){a.cg=a.cg-p|0;if(b.nk)while(true){if(a.bt.G<=2)break b;if(a.bt.bG(a.bt.G-2|0)
<a.cg)break b;q=a.bt;q.G=q.G-2|0;}}}c.bi.ow(g.bi);a.cg=a.cg+e.j()|0;BFy.mF(g);}
function ZZ(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;e=c.bi;f=c.bi.h;g=c.bg;h=d;a:{while(true){if(h<=0)break a;if(!b.qn((e.p(h-1|0)).g6&65535))break;h=h+(-1)|0;}}b:{while(true){i=Cu(d,f);if(i>=0)break b;if(!b.qn((e.p(d)).g6&65535))break;d=d+1|0;}}j=null;if(i>=0){e.nr(h);g.nr(h+1|0);k=d-h|0;if(k>0){a.cg=a.cg-k|0;if(b.nk&&a.bt.bG(a.bt.G-2|0)>a.cg){l=a.bt.bQ();while(a.bt.bG(a.bt.G-2|0)>a.cg){m=a.bt;m.G=m.G-2|0;}a.bt.fK(a.bt.G-2|0,a.cg);a.bt.fK(a.bt.G-1|0,l);}}}else c:{Ec();j=BFy.g1();n=j.bi;n.Ok(e,0,h);e.vU(0,
d-1|0);c.bi=n;j.bi=e;o=j.bg;o.AY(g,0,h+1|0);g.vU(1,d);g.S.data[0]=ALD(a,e,b);c.bg=o;j.bg=g;p=c.bi.h;q=j.bi.h;k=(f-p|0)-q|0;a.cg=a.cg-k|0;if(b.nk&&k>0){r=a.cg-q|0;s=a.bt.G-2|0;while(true){if(s<2)break c;t=a.bt.bG(s);if(t<=r)break;a.bt.fK(s,t-k|0);s=s+(-2)|0;}}}if(h)Id(a,b,c);else{Ec();BFy.mF(c);a.cb.Jo();}return j;}
function Id(a,b,c){var d;d=c.bi.yP();if(!d.u1)c.bg.S.data[c.bg.U-1|0]=Je(a,d,b);}
function Je(a,b,c){return (b.dg+b.fU|0)*c.mk-c.qP;}
function ALD(a,b,c){return ( -(b.W0()).fU|0)*c.mk-c.l1;}
function YJ(a,b,c,d){var e,f,g,h,i,j;if(c==d)return (-1);switch(b.g(c)){case 35:e=0;f=c+1|0;a:{while(true){if(f>=d)break a;g=b.g(f);if(g==93)break;h=(e<<4)+g|0;if(g>=48&&g<=57)e=h+(-48)|0;else if(g>=65&&g<=70)e=h+(-55)|0;else{if(g<97)break a;if(g>102)break a;e=h+(-87)|0;}f=f+1|0;}if(f>=(c+2|0)&&f<=(c+9|0)){i=f-c|0;if(i<8)e=e<<((9-i|0)<<2)|255;Ec();BFz.em(W0(e));return i;}}return (-1);case 91:break;case 93:Ec();if(BFz.G>1)BFz.QC();return 0;default:f=c+1|0;while(f<d){g=b.g(f);if(g==93){j=UQ((b.es(c,f)).d());if
(j===null)return (-1);Ec();BFz.em(j.lQ());return f-c|0;}f=f+1|0;}return (-1);}return (-2);}
function Bi8(a){Ec();BFy.Vs(a.cb);a.cb.J();a.bt.J();a.cg=0;a.xh=0.0;a.oY=0.0;}
function AYV(a){var b,c,d;if(!a.cb.h)return B(49);b=H0(128);b.co(a.xh);b.bv(120);b.co(a.oY);b.bv(10);c=0;d=a.cb.h;while(c<d){b.c((a.cb.p(c)).d());b.bv(10);c=c+1|0;}b.wX(b.j()-1|0);return b.d();}
function A$l(){BFy=J8(F(ML));BFz=Jy(4);}
var Gy=D(Bc);
var BBx=null;var BFD=null;var BFE=null;function Xp(){Xp=M(Gy);APC();}
function Bb8(a,b){var c=new Gy();V6(c,a,b);return c;}
function V6(a,b,c){Xp();B$(a,b,c);}
function APC(){BBx=Bb8(B(689),0);BFD=Bb8(B(690),1);BFE=J(Gy,[BBx,BFD]);}
var Nt=D();
var AJc=D(F6);
function Pa(){var a=this;C.call(a);a.gQ=null;a.qC=0;a.xt=0;a.oG=null;a.qX=null;a.qr=null;a.h7=null;a.f8=null;a.eq=null;a.gk=null;a.dy=null;}
function AQE(){var a=new Pa();BlA(a);return a;}
function BlA(a){K(a);a.qC=1;a.oG=S();a.qX=AJX(0.0,0.0,0.0,1.0);a.qr=CR(1.0,1.0,1.0);a.h7=BS();a.f8=BS();a.eq=Ee(2);a.dy=Ee(2);}
function Bjg(a){if(!a.xt)a.h7.Ki(a.oG,a.qX,a.qr);return a.h7;}
function A0N(a){if(a.qC&&a.gk!==null)(a.f8.b$(a.gk.f8)).ii(a.h7);else a.f8.b$(a.h7);return a.f8;}
function APY(a,b){var c,d;a:{a.VZ();a.Uw();if(b){c=a.dy.b3();while(true){if(!c.bE())break a;d=c.bA();d.GY(1);}}}}
function Bhx(a,b){var c,d,e,f,g;c=a.eq.b3();while(c.bE()){d=c.bA();if(d.cR===null)continue;if(d.dO===null)continue;if(d.cR.cm!=d.dO.data.length)continue;e=d.cR.cm;f=0;while(f<e){(d.dO.data[f].b$(d.cR.eI.data[f].f8)).ii(d.cR.hj.data[f]);f=f+1|0;}}a:{if(b){c=a.dy.b3();while(true){if(!c.bE())break a;g=c.bA();g.B9(1);}}}}
function A52(a){if(a.gk!==null){a.gk.Jt(a);a.gk=null;}}
function Bg5(a){return a.dy.h;}
function AWH(a,b){return a.dy.p(b);}
function AOI(a,b){return a.SC((-1),b);}
function AZC(a,b,c){var d;d=a;while(true){if(d===null){d=c.Aa();if(d!==null&&!d.Jt(c))G(Bh(B(691)));if(b>=0&&b<a.dy.h)a.dy.Qf(b,c);else{b=a.dy.h;a.dy.C(c);}c.gk=a;return b;}if(d===c)break;d=d.Aa();}G(Bh(B(692)));}
function Bcb(a,b){if(!a.dy.p5(b,1))return 0;b.gk=null;return 1;}
function BdK(a){return a.dy;}
function Bkd(a){return a.gk;}
function A_r(a){return (AQE()).Sf(a);}
function BhH(a,b){var c,d,e;a.J1();a.gQ=b.gQ;a.xt=b.xt;a.qC=b.qC;a.oG.L(b.oG);a.qX.Vu(b.qX);a.qr.L(b.qr);a.h7.b$(b.h7);a.f8.b$(b.f8);a.eq.J();c=b.eq.b3();while(c.bE()){d=c.bA();a.eq.C(d.RV());}a.dy.J();c=(b.tH()).fI();while(c.bE()){e=c.bA();a.MG(e.xG());}return a;}
function AH7(b,c,d,e){var f,g,h,i;a:{f=b.h;if(!e){g=0;while(true){if(g>=f)break a;h=b.p(g);if(h.gQ.y(c))break;g=g+1|0;}return h;}g=0;while(true){if(g>=f)break a;i=b.p(g);if(i.gQ.Ko(c))break;g=g+1|0;}return i;}b:{if(d){g=0;while(true){if(g>=f)break b;i=AH7((b.p(g)).dy,c,1,e);if(i!==null)break;g=g+1|0;}return i;}}return null;}
var Ve=D(CI);
var AE6=D();
function BgT(){var b;b=BeQ();return b;}
function BeQ(){var userAgent=$rt_globals.navigator.userAgent.toLowerCase();return {firefox:userAgent.indexOf('firefox')!= -1,chrome:userAgent.indexOf('chrome')!= -1,safari:userAgent.indexOf('safari')!= -1,opera:userAgent.indexOf('opera')!= -1,IE:userAgent.indexOf('msie')!= -1,macOS:userAgent.indexOf('mac')!= -1,linux:userAgent.indexOf('linux')!= -1,windows:userAgent.indexOf('win')!= -1};}
var Sw=D();
function ACK(){var a=this;Gv.call(a);a.wJ=0;a.qT=0;}
function BsN(a,b){var c=new ACK();AVf(c,a,b);return c;}
function AVf(a,b,c){Pu(a);a.wJ=b;a.qT=c;}
function Baz(a){return a.wJ;}
function BjJ(a){return a.qT;}
function Bfe(a){var b,c,d;b=a.wJ;c=a.qT==2147483647?B(49):(ALk(a.qT)).d();d=H();Bp(I(Bp(V(Bp(d,123),b),44),c),125);return P(d);}
function ACx(){X.call(this);this.T6=null;}
function BqM(a){var b=new ACx();A1P(b,a);return b;}
function A1P(a,b){a.T6=b;Bo(a);}
function A74(a,b){return ACj(b);}
var N8=D(IJ);
var BFF=null;function AQ1(){AQ1=M(N8);Blg();}
function Bpi(){var a=new N8();XQ(a);return a;}
function Bmz(a){var b=new N8();AMd(b,a);return b;}
function XQ(a){AQ1();KE(a);a.dc(N(AJH()),1);}
function AOi(a){Wv(Y(a.bb));}
function AMd(a,b){AQ1();KE(a);}
function Blg(){BFF=Bmz(0);}
function AJH(){var jsObj=new $rt_globals.Bullet.btSequentialImpulseConstraintSolver();return $rt_globals.Bullet.getPointer(jsObj);}
function Wv(b){var jsObj=$rt_globals.Bullet.wrapPointer(b,$rt_globals.Bullet.btSequentialImpulseConstraintSolver);$rt_globals.Bullet.destroy(jsObj);}
var AE5=D();
var G7=D(Bc);
var BDF=null;var BEB=null;var BFG=null;function Qx(){Qx=M(G7);A5i();}
function Bc7(a,b){var c=new G7();ABa(c,a,b);return c;}
function X3(){Qx();return BFG.e9();}
function ABa(a,b,c){Qx();B$(a,b,c);}
function AGk(){Qx();return J(G7,[BDF,BEB]);}
function A5i(){BDF=Bc7(B(693),0);BEB=Bc7(B(694),1);BFG=AGk();}
function Lp(){var a=this;C.call(a);a.d5=null;a.kB=null;a.Av=null;a.Bo=null;a.GF=null;a.iB=null;a.qv=null;a.hN=null;a.fv=null;a.fZ=null;a.j0=null;a.sj=0;a.uU=0;a.sn=null;a.i7=null;a.RU=null;a.Ro=null;a.l0=null;a.gU=null;a.ez=null;}
var BFH=null;function BFI(a,b){var c=new Lp();AE4(c,a,b);return c;}
function A$k(){return BFH;}
function AE4(a,b,c){K(a);a.fv=Ee(4);GX();a.j0=BEW;a.sj=(-1);a.uU=1;a.RU=EH();a.l0=By();a.gU=By();a.fZ=Hk();a.iB=c;a.OL(b);ZN(a);}
function ZN(a){var b,c,d,e,f;BFH=BgT();H8(B(19),B(49));if((BFH.windows?1:0)==1)H8(B(21),B(23));else if((BFH.macOS?1:0)==1)H8(B(21),B(695));else if((BFH.linux?1:0)!=1)H8(B(21),B(696));else H8(B(21),B(24));AW9(BnL());b=FY();a.ez=b.Me();if(a.ez.m2(B(697))){a.ez=a.ez.w_(B(698),B(49));a.ez=a.ez.w_(B(699),B(49));}c=a.ez.DT(63);if(c>=0)a.ez=a.ez.c0(0,c);a.i7=Brq(a.ez);d=Bpw();a.i7.VU(a.iB.I0,B(700));a.d5=Bph(a.iB);a.kB=Bq1(a.d5.eD);a.Av=Bnd(a.i7);a.Bo=BnW();a.sn=BqQ();a.Ro=BoO();T8(a);a.JS(a);a.TU(a);a.Ly(a);BvC=a;BwN
=a.d5;BwR=a.d5.yq();BwS=a.d5.yq();Bwz=a.kB;BwP=a.Av;BwQ=a.Bo;e=a.fZ.mD();f=Btc(a);e.addEventListener("visibilitychange",BZ(f,"handleEvent"));a.fZ.r4(a);if(a.iB.BH())a.fZ.N7(B(701),Bna(a));}
function AGU(a){var b,c,d,e,f,g,h,i,j,k,l,$$je,$p,$z;$p=0;if(BaT()){var $T=RA();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.j0;a:{b:{try{c:{BoZ();switch(BEV.data[Br(b)]){case 1:break;case 2:break b;default:break c;}c=(FY()).PR();if(!c){GX();a.j0=BEX;d=$rt_globals.window.document.getElementById("progress");if(d!==null)d.style.setProperty("display","none");}else{e=a.i7.wB;if(e>0){f=25+((75*(e-c|0)|0)
/e|0)|0;g=$rt_globals.window.document.getElementById("progress-bar");if(g!==null){h=g.style;i=H();Bp(V(i,f),37);j=P(i);h.setProperty("width",$rt_ustr(j));}}}}}catch($$e){$$je=R($$e);if($$je instanceof C6){k=$$je;break a;}else{throw $$e;}}a.fZ.r4(a);return;}d:{try{if(a.qv===null)break d;if(a.hN!==null){a.hN.om();a.hN.cJ();}a.kB.Ck(null);a.kB.ea();a.l0.J();a.hN=a.qv;a.qv=null;GX();a.j0=BFf;a.d5.jW=W;break d;}catch($$e){$$je=R($$e);if($$je instanceof C6){k=$$je;break a;}else{throw $$e;}}}try{l=a.hN;$p=1;continue _;}
catch($$e){$$je=R($$e);if($$je instanceof C6){k=$$je;}else{throw $$e;}}}k.x9();G(k);case 1:a:{try{To(a,l);if(C1()){break _;}}catch($$e){$$je=R($$e);if($$je instanceof C6){k=$$je;break a;}else{throw $$e;}}a.fZ.r4(a);return;}k.x9();G(k);default:A6u();}}RA().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function To(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(BaT()){var $T=RA();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.d5.eT();c=BwN.bk();d=BwN.bh();e=0;f=a.j0;GX();if(f===BFf){a.j0=BEX;b.zT();b.nF();e=1;}if(!(c==a.sj&&d==a.uU&&!e)){a.sj=c;a.uU=d;BwR.qe(0,0,c,d);b.W$(c,d);}a.gU.ow(a.l0);a.l0.J();g=0;if(g>=a.gU.h){a.gU.J();h=a.d5;h.jW=BE(h.jW,N(1));b.G3();a.kB.ea();return;}h=a.gU.p(g);$p=1;case 1:h.dp();if(C1()){break _;}g=g+1|0;if(g>=a.gU.h){a.gU.J();h
=a.d5;h.jW=BE(h.jW,N(1));b.G3();a.kB.ea();return;}h=a.gU.p(g);continue _;default:A6u();}}RA().s(a,b,c,d,e,f,g,h,$p);}
function Bb6(a,b){a.qv=b;}
function T8(a){a.i7.jN(1,B(702),BqV(a));}
function Bdr(a){return a.i7;}
function AYN(a,b,c){a.sn.xD(b,c);}
function A4u(a,b,c){a.sn.oy(b,c);}
function BkO(a){KA();return Bwr;}
function AQe(a,b){a.l0.C(b);}
function A40(a,b){var c,d,$$je;c=a.fv;CG(c);a:{try{a.fv.C(b);Bx(c);}catch($$e){$$je=R($$e);d=$$je;break a;}return;}Bx(c);G(d);}
function AVG(a,b){var c,d,$$je;c=a.fv;CG(c);a:{try{a.fv.p5(b,1);Bx(c);}catch($$e){$$je=R($$e);d=$$je;break a;}return;}Bx(c);G(d);}
function Bbo(a,b){var c;c=b.tY();Ws(a,c);}
function BdU(a,b){var c;c=b.tY();AGB(a,c);}
function Bbn(a,b){var c;c=b.tY();VD(a,c);}
function Ws(a,b){b.jN(0,B(703),BmN(a));}
function VD(a,b){b.jN(0,B(704),Bqj(a));}
function AGB(a,b){b.jN(0,B(705),Buf(a));}
var YI=D(Eg);
function TZ(){X.call(this);this.P3=null;}
function BnH(a){var b=new TZ();AXr(b,a);return b;}
function AXr(a,b){a.P3=b;Bo(a);}
function AZc(a,b){return G0(b);}
var AF_=D(Da);
function Btz(a,b,c){var d=new AF_();A5H(d,a,b,c);return d;}
function A5H(a,b,c,d){Gr(a,b,c,d);}
function AZk(a,b,c,d){var e;while(true){e=a.k.e(b,c,d);if(e>=0)break;if((b+a.bD.cr()|0)<=d.K()){e=a.bD.bR(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
function AHM(){var a=this;C.call(a);a.HB=null;a.y_=0.0;a.oc=null;}
function BtS(){var a=new AHM();A2D(a);return a;}
function A2D(a){K(a);a.oc=By();}
var AFL=D();
function Gf(b,c){return Ot(b,c);}
var ABT=D();
var AKM=D(C$);
function JS(){var a=this;C.call(a);a.dG=null;a.b7=null;a.mT=0;a.iU=0;a.iC=null;a.kS=0;a.ur=null;}
var BFJ=null;function Jg(){Jg=M(JS);A4$();}
function Bm2(a,b,c,d){var e=new JS();ALC(e,a,b,c,d);return e;}
function Br$(a,b,c,d){var e=new JS();AFR(e,a,b,c,d);return e;}
function BFK(a,b,c,d,e){var f=new JS();Qs(f,a,b,c,d,e);return f;}
function BFL(a,b,c,d,e){var f=new JS();RZ(f,a,b,c,d,e);return f;}
function ALC(a,b,c,d,e){Jg();K(a);a.mT=1;a.kS=0;a.ur=S();a.dG=QM(a,b,c,AGr(e));a.b7=AGp(b,d);a.iU=0;JI(BvC,a);}
function AFR(a,b,c,d,e){Jg();K(a);a.mT=1;a.kS=0;a.ur=S();a.dG=QM(a,b,c,e);a.b7=AGp(b,d);a.iU=0;JI(BvC,a);}
function QM(a,b,c,d){if(BwT===null)return Bdz(b,c,d);return BcN(b,c,d);}
function Qs(a,b,c,d,e,f){Jg();RZ(a,b,c,d,e,AGr(f));}
function RZ(a,b,c,d,e,f){Jg();a:{b:{K(a);a.mT=1;a.kS=0;a.ur=S();Bsz();switch(BA7.data[Br(b)]){case 1:break;case 2:a.dG=BtR(c,d,f);a.b7=BlH(c,e);a.iU=0;break a;case 3:a.dG=BcN(c,d,f);a.b7=BlH(c,e);a.iU=0;break a;case 4:break b;default:break b;}a.dG=Bdz(c,d,f);a.b7=AGp(c,e);a.iU=0;break a;}a.dG=BpM(d,f);a.b7=BpX(e);a.iU=1;}JI(BvC,a);}
function A0q(a,b,c,d){a.dG.wS(b,c,d);return a;}
function AQL(a,b){var c;c=b.data;a.b7.w4(b,0,c.length);return a;}
function AUY(a,b,c,d){a.b7.w4(b,c,d);return a;}
function AR$(a){return a.b7.g9();}
function BkV(a){return a.dG.hC();}
function A3w(a){return a.dG.xg();}
function BiO(a){return a.b7.lk();}
function ARE(a,b){a.i0(b,null);}
function A1F(a,b,c){a.dG.i0(b,c);if(a.iC!==null&&a.iC.Dt()>0)a.iC.i0(b,c);if(a.b7.g9()>0)a.b7.d9();}
function Bio(a,b){a.hl(b,null);}
function AOU(a,b,c){a.dG.hl(b,c);if(a.iC!==null&&a.iC.Dt()>0)a.iC.hl(b,c);if(a.b7.g9()>0)a.b7.HX();}
function A_R(a,b,c){a.wM(b,c,0,a.b7.lk()<=0?a.hC():a.g9(),a.mT);}
function A5E(a,b,c,d,e){a.wM(b,c,d,e,a.mT);}
function Beo(a,b,c,d,e,f){var g,h,i,j,k,l;if(!e)return;if(f)a.Ps(b);if(a.iU){if(a.b7.g9()<=0)BwS.s8(c,d,e);else{g=a.b7.wK();h=Cr(g);BQ(g);g.dI(d);BwS.Gj(c,e,5123,g);g.dI(h);}}else{i=0;if(a.kS)i=a.iC.Dt();if(a.b7.g9()<=0){if(a.kS&&i>0)BwT.a4n(c,d,e,i);else BwS.s8(c,d,e);}else{if((e+d|0)>a.b7.lk()){j=new DD;k=(((((H()).c(B(706))).t(e)).c(B(707))).t(d)).c(B(708));l=a.b7;Eo(j,((k.t(l.lk())).c(B(471))).d());G(j);}if(a.kS&&i>0)BwT.ZT(c,e,5123,d*2|0,i);else BwS.HP(c,e,5123,d*2|0);}}if(f)a.ON(b);}
function BfN(a,b){var c,d,e;c=a.dG.iG();d=Dp(c);e=0;while(e<d){if((CU(c,e)).gy==b)return CU(c,e);e=e+1|0;}return null;}
function A92(a){return a.dG.iG();}
function AV6(a){return a.b7.wK();}
function JI(b,c){var d;Jg();d=BFJ.V(b);if(d===null)d=By();d.C(c);BFJ.z(b,d);}
function A4$(){BFJ=DO();}
var ADw=D();
function Hi(b,c){var d;if(b<0)G(Bl((((H()).c(B(709))).t(b)).d()));d=Lb(Bm(2,A$y(b/c)|0));if(d<=1073741824)return d;G(Bl((((H()).c(B(710))).t(b)).d()));}
var VZ=D();
var ALE=D(BL);
function BpK(){var a=new ALE();AVm(a);return a;}
function AVm(a){CX(a);}
function BfU(a,b,c,d){var e;e=!d.mL()?d.K():c.j();if(b<e)return (-1);d.ek=1;d.V5=1;return a.k.e(b,c,d);}
function A5S(a,b){return 0;}
function ATO(a){return B(711);}
function AJU(){var a=this;C.call(a);a.vs=0;a.gX=null;a.ij=null;a.zN=0.0;a.vK=0;a.xJ=0;a.kP=0;}
function H$(){var a=new AJU();Bde(a);return a;}
function BFM(a,b){var c=new AJU();AGu(c,a,b);return c;}
function Bde(a){AGu(a,51,0.800000011920929);}
function AGu(a,b,c){var d;K(a);if(c>0.0&&c<1.0){a.zN=c;d=Hi(b,c);a.vK=d*c|0;a.kP=d-1|0;a.xJ=Dd(N(a.kP));a.gX=Bb(C,d);a.ij=Bf(d);return;}G(Bl((((H()).c(B(258))).co(c)).d()));}
function AXo(a,b){return Y(BR(Bn(N(b.bl()),BI(2135587861, 2654435769)),a.xJ));}
function A91(a,b){var c,d,e;if(b===null)G(Bl(B(657)));c=a.gX;d=a.je(b);while(true){e=c.data[d];if(e===null)return  -(d+1|0)|0;if(e.y(b))break;d=(d+1|0)&a.kP;}return d;}
function A1G(a,b,c){var d,e;d=a.i2(b);if(d>=0){a.ij.data[d]=c;return;}e= -(d+1|0)|0;a.gX.data[e]=b;a.ij.data[e]=c;e=a.vs+1|0;a.vs=e;if(e>=a.vK)AAl(a,a.gX.data.length<<1);}
function AG1(a,b,c){var d,e,f;d=a.gX;e=a.je(b);while(true){f=d.data;if(f[e]===null)break;e=(e+1|0)&a.kP;}f[e]=b;a.ij.data[e]=c;}
function A8X(a,b,c){var d;d=a.i2(b);if(d>=0)c=a.ij.data[d];return c;}
function AAl(a,b){var c,d,e,f,g;a:{c=a.gX.data.length;a.vK=b*a.zN|0;a.kP=b-1|0;a.xJ=Dd(N(a.kP));d=a.gX;e=a.ij;a.gX=Bb(C,b);a.ij=Bf(b);if(a.vs>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g!==null)AG1(a,g,e.data[f]);f=f+1|0;}}}}
function AMG(){C.call(this);this.g8=null;}
function BmF(a){var b=new AMG();A1M(b,a);return b;}
function A1M(a,b){a.g8=b;K(a);}
function A$Q(a,b,c,d){FD(N(b),a.g8.jf);FD(N(c),a.g8.jg);FD(N(d),a.g8.jh);a.g8.V2(a.g8.jf,a.g8.jg,a.g8.jh);}
function BgQ(a,b,c,d){a.P6(b,c,d);}
var QH=D(0);
function AMD(){C.call(this);this.gE=null;}
function Bqx(a){var b=new AMD();BjA(b,a);return b;}
function BjA(a,b){a.gE=b;K(a);}
function BeE(a,b,c,d,e,f){FD(N(b),a.gE.jf);FD(N(c),a.gE.jg);FD(N(f),a.gE.jh);a.gE.Li(a.gE.jf,a.gE.jg,d,e,a.gE.jh);}
function AYs(a,b,c,d,e,f){a.Mf(b,c,d,e,f);}
function ALP(){var a=this;FB.call(a);a.Ng=0;a.p8=0;}
function Bc8(a,b){var c=new ALP();Bbz(c,a,b);return c;}
function Brt(a,b,c,d,e,f,g){var h=new ALP();S2(h,a,b,c,d,e,f,g);return h;}
function Bbz(a,b,c){S2(a,0,b,CE(b),0,b,c,0);}
function S2(a,b,c,d,e,f,g,h){AC6(a,b,c,d,e,f);a.Ng=g;a.p8=h;}
function ANm(a,b){var c,d,e;if(b>=0&&b<a.bd)return a.B.data[a.bU+b|0];c=new BC;d=a.bd;e=H();Bp(V(I(V(I(e,B(268)),b),B(57)),d),41);BO(c,P(e));G(c);}
function AXp(a){var b,c,d,e,f,g,h,i;if(a.p8)G(DR());a:{b=Bj(a);if(a.D>0){c=a.bU;d=a.bU+a.D|0;e=0;while(true){if(e>=b)break a;f=a.B.data;g=c+1|0;h=a.B.data;i=d+1|0;f[c]=h[d];e=e+1|0;c=g;d=i;}}}a.D=b;a.bd=a.ih;a.f2=(-1);return a;}
function A2$(a){return a.p8;}
function BlK(a){var b,c;b=Bj(a)/2|0;c=a.hW;FK();if(c!==BC0)return BtJ(a.bU+a.D|0,b,a,0,b,a.ck());return Bqk(a.bU+a.D|0,b,a,0,b,a.ck());}
function BiV(a,b){var c,d,e,f,g,h,i;if(b>=0&&(b+3|0)<a.bd){c=a.B.data[a.bU+b|0]&255;d=a.B.data[(a.bU+b|0)+1|0]&255;e=a.B.data[(a.bU+b|0)+2|0]&255;f=a.B.data[(a.bU+b|0)+3|0]&255;g=a.hW;FK();if(g!==BC0)return f<<24|e<<16|d<<8|c;return c<<24|d<<16|e<<8|f;}g=new BC;h=a.bd-3|0;i=H();Bp(V(I(V(I(i,B(268)),b),B(57)),h),41);BO(g,P(i));G(g);}
function ATs(a,b,c){var d,e,f;if(a.p8)G(DR());if(b>=0&&(b+3|0)<a.bd){d=a.hW;FK();if(d!==BC0){a.B.data[a.bU+b|0]=c<<24>>24;a.B.data[(a.bU+b|0)+1|0]=c>>8<<24>>24;a.B.data[(a.bU+b|0)+2|0]=c>>16<<24>>24;a.B.data[(a.bU+b|0)+3|0]=c>>24<<24>>24;}else{a.B.data[a.bU+b|0]=c>>24<<24>>24;a.B.data[(a.bU+b|0)+1|0]=c>>16<<24>>24;a.B.data[(a.bU+b|0)+2|0]=c>>8<<24>>24;a.B.data[(a.bU+b|0)+3|0]=c<<24>>24;}return a;}d=new BC;e=a.bd-3|0;f=H();Bp(V(I(V(I(f,B(268)),b),B(57)),e),41);BO(d,P(f));G(d);}
function A5j(a){var b,c;b=Bj(a)/4|0;c=a.hW;FK();if(c!==BC0)return BsF(a.bU+a.D|0,b,a,0,b,a.ck());return BqT(a.bU+a.D|0,b,a,0,b,a.ck());}
function AX7(a){var b,c;b=Bj(a)/4|0;c=a.hW;FK();if(c!==BDq)return Btj(a.bU+a.D|0,b,a,0,b,a.ck());return BmA(a.bU+a.D|0,b,a,0,b,a.ck());}
function AMF(){C.call(this);this.Jr=null;}
function BmD(a){var b=new AMF();BaI(b,a);return b;}
function BaI(a,b){a.Jr=b;K(a);}
function AXv(a){return a.Jr.Wk();}
function AT6(a){return a.Nx();}
function OT(){var a=this;C.call(a);a.os=null;a.vp=0.0;}
function A0s(a,b){var c=new OT();ATy(c,a,b);return c;}
function ATy(a,b,c){K(a);a.os=S();a.vp=0.0;(a.os.L(b)).b0();a.vp=c;}
function Bdl(a,b,c,d){(((a.os.L(b)).fN(c)).Mj(c.l-d.l,c.m-d.m,c.n-d.n)).b0();a.vp= -b.BA(a.os);}
function ACV(){var a=this;C.call(a);a.r1=null;a.xo=null;a.nA=0;a.m_=0;a.oQ=0;a.ht=0;a.t$=0;a.xs=0;a.rU=0;}
function BpZ(){var a=new ACV();Bi_(a);return a;}
function Bi_(a){K(a);a.r1=null;a.xo=null;a.nA=2;a.m_=5;a.oQ=0;a.ht=12;a.t$=1;a.xs=(-1);a.rU=(-1);}
var NJ=D(0);
function Ia(){var a=this;C.call(a);a.gP=null;a.ca=null;a.kT=null;}
var BFN=null;var BFO=null;var BFP=null;function AVx(){AVx=M(Ia);BcV();}
function BsO(){var a=new Ia();ACP(a);return a;}
function ACP(a){var b;AVx();K(a);a.gP=Bb(OT,6);a.ca=J(EB,[S(),S(),S(),S(),S(),S(),S(),S()]);a.kT=B_(24);b=0;while(b<6){a.gP.data[b]=A0s(S(),0.0);b=b+1|0;}}
function BfJ(a,b){var c,d,e,f,g,h;AVx();Bi(BFO,0,a.kT,0,BFO.data.length);AAr(b.a,a.kT,0,8,3);c=0;d=0;while(c<8){e=a.ca.data[c];f=a.kT.data;g=d+1|0;e.l=f[d];f=a.kT.data;h=g+1|0;e.m=f[g];f=a.kT.data;d=h+1|0;e.n=f[h];c=c+1|0;}a.gP.data[0].jj(a.ca.data[1],a.ca.data[0],a.ca.data[2]);a.gP.data[1].jj(a.ca.data[4],a.ca.data[5],a.ca.data[7]);a.gP.data[2].jj(a.ca.data[0],a.ca.data[4],a.ca.data[3]);a.gP.data[3].jj(a.ca.data[5],a.ca.data[1],a.ca.data[6]);a.gP.data[4].jj(a.ca.data[2],a.ca.data[3],a.ca.data[6]);a.gP.data[5].jj(a.ca.data[4],
a.ca.data[0],a.ca.data[1]);}
function BcV(){var b,c,d,e,f,g,h,i;BFN=J(EB,[CR((-1.0),(-1.0),(-1.0)),CR(1.0,(-1.0),(-1.0)),CR(1.0,1.0,(-1.0)),CR((-1.0),1.0,(-1.0)),CR((-1.0),(-1.0),1.0),CR(1.0,(-1.0),1.0),CR(1.0,1.0,1.0),CR((-1.0),1.0,1.0)]);BFO=B_(24);b=0;c=BFN.data;d=c.length;e=0;while(e<d){f=c[e];g=BFO.data;h=b+1|0;g[b]=f.l;g=BFO.data;i=h+1|0;g[h]=f.m;g=BFO.data;b=i+1|0;g[i]=f.n;e=e+1|0;}BFP=S();}
function Qy(){var a=this;C.call(a);a.mQ=null;a.nB=null;}
var BFQ=null;function Bsk(){Bsk=M(Qy);A1i();}
function BmV(a,b){var c=new Qy();ALN(c,a,b);return c;}
function ALN(a,b,c){Bsk();K(a);a.mQ=S();a.nB=S();a.mQ.L(b);(a.nB.L(c)).b0();}
function A1i(){BFQ=S();}
var AKG=D(CQ);
function AH8(){var a=this;C.call(a);a.bJ=null;a.mB=0;a.gs=null;a.ei=null;a.bT=null;a.bS=null;a.oK=null;a.oL=null;a.rm=null;a.m1=0;a.k_=null;a.pn=0;a.o5=null;a.pR=null;a.MM=null;a.bK=null;a.fL=W;a.jL=0;}
function Bq1(a){var b=new AH8();AZA(b,a);return b;}
function A4U(b){var c,d,e,f,g;c=A$k();d=0.0;e=b.detail;f=b.wheelDelta;if(c.firefox?1:0)d=(c.macOS?1:0)?1.0*e:1.0*e/3.0;else if(c.opera?1:0)d=!(c.linux?1:0)?(-1.0)*f/40.0:(-1.0)*f/80.0;else if(!(!(c.chrome?1:0)&&!(c.safari?1:0)&&!(c.IE?1:0))){d=(-1.0)*f;g=d/120.0;if(De(g)>=1.0)d=g;else if(!(c.windows?1:0))d=!(c.macOS?1:0)?g:d/3.0;}return d;}
function AZA(a,b){K(a);a.mB=0;a.gs=Bq2(20);a.ei=Sd(20);a.bT=Bf(20);a.bS=Bf(20);a.oK=Bf(20);a.oL=Bf(20);a.rm=Bjt();a.m1=0;a.k_=Sd(256);a.pn=0;a.o5=Sd(256);a.pR=Sd(5);a.MM=Bjt();a.jL=1;a.bJ=b;AH4(a);}
function AH4(a){var b;b=a.bJ.ownerDocument;b.addEventListener("mousedown",BZ(a,"handleEvent"),!!0);b.addEventListener("mouseup",BZ(a,"handleEvent"),!!0);b.addEventListener("mousemove",BZ(a,"handleEvent"),!!0);b.addEventListener("wheel",BZ(a,"handleEvent"),!!0);b.addEventListener("keydown",BZ(a,"handleEvent"),!!0);b.addEventListener("keyup",BZ(a,"handleEvent"),!!0);b.addEventListener("keypress",BZ(a,"handleEvent"),!!0);a.bJ.addEventListener("touchstart",BZ(a,"handleEvent"),!!1);a.bJ.addEventListener("touchmove",
BZ(a,"handleEvent"),!!1);a.bJ.addEventListener("touchcancel",BZ(a,"handleEvent"),!!1);a.bJ.addEventListener("touchend",BZ(a,"handleEvent"),!!1);}
function BiY(a,b){AIh(a,b);SD(a,b);}
function AIh(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;a:{c=$rt_str(b.type);if(c.y(B(712))){$rt_globals.window.focus();d=b;e=b.target;f=a.bJ;g=e!==f?0:1;if(g&&!a.ei.data[0]){a.jL=1;a.mB=1;a.ei.data[0]=1;h=Kj(d.button);a.rm.Om(h);a.pR.data[h]=1;a.oK.data[0]=0;a.oL.data[0]=0;if(!a.uB()){i=a.k1(d,a.bJ);j=a.k2(d,a.bJ);a.bT.data[0]=i;a.bS.data[0]=j;}else{k=a.bT.data;k[0]=k[0]+Hf(a,d)|0;k=a.bS.data;k[0]=k[0]+GK(a,d)|0;}a.fL=DT();if(a.bK!==null)a.bK.i6(a.bT.data[0],a.bS.data[0],0,Kj(d.button));b.preventDefault();b.stopPropagation();break a;}l
=a.k1(d,a.bJ);m=a.k2(d,a.bJ);if(!(l>=0.0&&l<=BwN.bk()&&m>=0.0&&m<=BwN.bh()))a.jL=0;return;}if(c.y(B(713))){d=b;if(!a.ei.data[0])return;a.rm.SE(Kj(d.button));k=a.ei;k.data[0]=a.rm.eO<=0?0:1;if(a.uB()){a.hE(0,Hf(a,d)|0,GK(a,d)|0);k=a.bT.data;k[0]=k[0]+Hf(a,d)|0;k=a.bS.data;k[0]=k[0]+GK(a,d)|0;}else{a.hE(0,a.k1(d,a.bJ)-a.bT.data[0]|0,a.k2(d,a.bJ)-a.bS.data[0]|0);a.bT.data[0]=a.k1(d,a.bJ);a.bS.data[0]=a.k2(d,a.bJ);}a.fL=DT();a.ei.data[0]=0;if(a.bK!==null)a.bK.iA(a.bT.data[0],a.bS.data[0],0,Kj(d.button));}else if
(!c.y(B(714))){if(c.y(B(715))){n=b;if(a.bK!==null){o=A4U(n);a.bK.qd(0.0,o|0);}a.fL=DT();}else if(c.y(B(716))){a.mB=1;p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;v=a.gs;w=ALy(a);v.Qy(u,Bq(w));a.ei.data[w]=1;a.bT.data[w]=a.lt(t,a.bJ);a.bS.data[w]=a.lc(t,a.bJ);a.oK.data[w]=0;a.oL.data[w]=0;if(a.bK!==null)a.bK.i6(a.bT.data[w],a.bS.data[w],w,0);r=r+1|0;}a.fL=DT();b.preventDefault();}}else{d=b;if(a.uB()){a.hE(0,Hf(a,d)|0,GK(a,d)|0);k=a.bT.data;k[0]=k[0]+Hf(a,d)|0;k=a.bS.data;k[0]=k[0]
+GK(a,d)|0;}else{i=a.k1(d,a.bJ);j=a.k2(d,a.bJ);a.hE(0,i-a.bT.data[0]|0,j-a.bS.data[0]|0);a.bT.data[0]=i;a.bS.data[0]=j;}a.fL=DT();if(a.bK!==null){if(!a.ei.data[0])a.bK.ox(a.bT.data[0],a.bS.data[0]);else a.bK.jZ(a.bT.data[0],a.bS.data[0],0);}}}if(c.y(B(717))){p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;x=(a.gs.p(u)).u5();a.hE(x,a.lt(t,a.bJ)-a.bT.data[x]|0,a.lc(t,a.bJ)-a.bS.data[x]|0);a.bT.data[x]=a.lt(t,a.bJ);a.bS.data[x]=a.lc(t,a.bJ);if(a.bK!==null)a.bK.jZ(a.bT.data[x],a.bS.data[x],
x);r=r+1|0;}a.fL=DT();b.preventDefault();}if(c.y(B(718))){p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;x=(a.gs.p(u)).u5();a.gs.nO(u);a.ei.data[x]=0;i=a.lt(t,a.bJ);j=a.lc(t,a.bJ);a.hE(x,i-a.bT.data[x]|0,j-a.bS.data[x]|0);a.bT.data[x]=i;a.bS.data[x]=j;if(a.bK!==null)a.bK.iA(a.bT.data[x],a.bS.data[x],x,0);r=r+1|0;}a.fL=DT();b.preventDefault();}if(c.y(B(719))){p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;x=(a.gs.p(u)).u5();a.gs.nO(u);a.ei.data[x]=0;i
=a.lt(t,a.bJ);j=a.lc(t,a.bJ);a.hE(x,i-a.bT.data[x]|0,j-a.bS.data[x]|0);a.bT.data[x]=i;a.bS.data[x]=j;if(a.bK!==null)a.bK.iA(a.bT.data[x],a.bS.data[x],x,0);r=r+1|0;}a.fL=DT();b.preventDefault();}}
function SD(a,b){var c,d,e,f,g;c=$rt_str(b.type);if(!(c.y(B(720))&&a.jL)){if(c.y(B(721))&&a.jL){d=b;e=d.charCode&65535;if(a.bK!==null)a.bK.mt(e);if(e==9){b.preventDefault();b.stopPropagation();}}else if(c.y(B(722))&&a.jL){d=b;f=Xg(d.keyCode);if(a.k_.data[f]){a.m1=a.m1-1|0;a.k_.data[f]=0;}if(a.bK!==null)a.bK.p$(f);if(f==61){b.preventDefault();b.stopPropagation();}}}else{a:{d=b;f=Xg(d.keyCode);g=0;switch(f){case 67:g=8;break a;case 112:g=127;break a;default:}}if(!(f!=67&&f!=112)){b.preventDefault();if(a.bK!==
null){a.bK.mK(f);a.bK.mt(g);}}else if(!a.k_.data[f]){a.m1=a.m1+1|0;a.k_.data[f]=1;a.pn=1;a.o5.data[f]=1;if(a.bK!==null)a.bK.mK(f);}if(f==61){b.preventDefault();b.stopPropagation();}}}
function ALy(a){var b;b=0;while(true){if(b>=20)return (-1);if(!a.gs.J0(Bq(b),0))break;b=b+1|0;}return b;}
function AU9(a){var b;a:{if(a.mB){a.mB=0;b=0;while(true){if(b>=a.pR.data.length)break a;a.pR.data[b]=0;b=b+1|0;}}}b:{if(a.pn){a.pn=0;b=0;while(true){if(b>=a.o5.data.length)break b;a.o5.data[b]=0;b=b+1|0;}}}}
function AUK(a,b,c,d){a.oK.data[b]=c;a.oL.data[b]=d;}
function Hf(a,b){return b.movementX;}
function GK(a,b){return b.movementY;}
function Qc(a,b){var c,d;c=$rt_str(b.compatMode);d=c.y(B(723));if(d)b=b.documentElement;return b;}
function Jc(a,b){var c;c=b.scrollTop;return JD(c);}
function Oo(a,b){var c;c=Qc(a,b);return Jc(a,c);}
function KJ(a,b){var c;c=b.scrollLeft;return JD(c);}
function Nn(a,b){var c;c=Qc(a,b);return KJ(a,c);}
function ABS(a,b,c){var d;d=(c.clientX-Q7(a,b)|0)+KJ(a,b)|0;d=d+Nn(a,b.ownerDocument)|0;return d;}
function AIK(a,b,c){var d;d=(c.clientY-Sc(a,b)|0)+Jc(a,b)|0;d=d+Oo(a,b.ownerDocument)|0;return d;}
function AWG(a,b,c){var d,e;d=c.width*1.0/PV(a,c);e=d*(((b.clientX-Q7(a,c)|0)+KJ(a,c)|0)+Nn(a,c.ownerDocument)|0);return D3(e);}
function A1n(a,b,c){var d,e;d=c.height*1.0/OO(a,c);e=d*(((b.clientY-Sc(a,c)|0)+Jc(a,c)|0)+Oo(a,c.ownerDocument)|0);return D3(e);}
function BaV(a,b,c){var d;d=c.width*1.0/PV(a,c);return D3(d*ABS(a,c,b));}
function A0X(a,b,c){var d;d=c.height*1.0/OO(a,c);return D3(d*AIK(a,c,b));}
function PV(a,b){return b.clientWidth;}
function OO(a,b){return b.clientHeight;}
function Sc(a,b){return JD(YF(a,b));}
function YF(a,b){var c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollTop;d=d.parentNode;}while(b!==null){c=c+b.offsetTop;b=d.offsetParent;}return c;}
function Q7(a,b){return JD(Tn(a,b));}
function Tn(a,b){var c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollLeft;d=d.parentNode;}while(b!==null){c=c+b.offsetLeft;b=d.offsetParent;}return c;}
function JD(b){return b|0;}
function A6m(a,b){return a.ei.data[b];}
function Bmg(a){return a.fL;}
function ASr(a,b){a.bK=b;}
function AYK(a){return 0;}
function AOj(a,b){a.c2(b);}
var AK6=D(BU);
function A5y(b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s;b.wP(8);k=b.dV(c);l=b.dV(e);m=b.dV(f);n=b.dV(d);o=b.dV(g);p=b.dV(i);q=b.dV(j);r=b.dV(h);s=b.RI();if(s==1){b.h2(24);b.ef(k,l,m,n);b.ef(p,o,r,q);b.IA(k,o,n,r,m,q,l,p);}else if(!s){b.ug(2);b.ef(k,l,m,n);b.ef(p,o,r,q);}else{b.ug(6);b.ef(k,l,m,n);b.ef(p,o,r,q);b.ef(k,n,r,o);b.ef(p,q,m,l);b.ef(p,l,k,o);b.ef(m,q,r,n);}}
function Bj$(b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u;if(Z(Bk(K0(b.iG()),N(408)),W)){MK();k=Bxc.dX(c,null,null,null);l=Bxd.dX(d,null,null,null);m=Bxe;n=null;o=null;p=null;n=m.dX(e,n,o,p);o=Bxf.dX(f,null,null,null);p=Bxg;q=null;r=null;m=null;p=p.dX(g,q,r,m);q=Bxh.dX(h,null,null,null);r=Bxi;s=null;t=null;m=null;r=r.dX(i,s,t,m);m=Bxj.dX(j,null,null,null);A5y(b,k,l,n,o,p,q,r,m);}else{b.wP(24);b.ug(6);MK();u=(((Bw6.L(c)).jQ(f,0.5)).fN((Bw7.L(g)).jQ(j,0.5))).b0();b.ke(c,d,f,e,u);b.ke(h,g,i,j,u.dk((-1.0)));k=(((Bw6.L(c)).jQ(i,
0.5)).fN((Bw7.L(d)).jQ(j,0.5))).b0();b.ke(g,c,e,i,k);b.ke(d,h,j,f,k.dk((-1.0)));k=(((Bw6.L(c)).jQ(h,0.5)).fN((Bw7.L(e)).jQ(j,0.5))).b0();b.ke(g,h,d,c,k);b.ke(e,f,j,i,k.dk((-1.0)));}}
function Bhd(b,c,d,e){A6t(b,0.0,0.0,0.0,c,d,e);}
function A6t(b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;i=f*0.5;j=g*0.5;k=h*0.5;l=c-i;m=d-j;n=e-k;o=c+i;p=d+j;q=e+k;r=(Eq()).I(l,m,n);s=(Eq()).I(l,p,n);t=(Eq()).I(o,m,n);u=(Eq()).I(o,p,n);v=(Eq()).I(l,m,q);w=(Eq()).I(l,p,q);x=(Eq()).I(o,m,q);y=(Eq()).I(o,p,q);Bj$(b,r,s,t,u,v,w,x,y);ABD();}
var AKH=D(CQ);
var Vz=D(Bs);
function BnE(){var a=new Vz();BkP(a);return a;}
function BkP(a){CY(a);}
var AJB=D();
function ABQ(){var a=this;C.call(a);a.AS=null;a.sq=null;}
function Btd(a,b){var c=new ABQ();AZ4(c,a,b);return c;}
function AZ4(a,b,c){a.sq=b;a.AS=c;K(a);}
function Bgd(a){a.sq.ob.GF=BsU(a.AS);BwO=a.sq.ob.GF;}
function Bgt(a){}
function Bam(a){a.Mb();}
function Bb3(a){a.K4();}
var AA7=D(Bt);
function BrB(){var a=new AA7();A7k(a);return a;}
function A7k(a){Db(a);}
var AA8=D(Bt);
function Bn1(){var a=new AA8();AUe(a);return a;}
function AUe(a){Db(a);}
var AA9=D(Bt);
function BqA(){var a=new AA9();A3f(a);return a;}
function A3f(a){Db(a);}
var AA$=D(Bt);
function Bms(){var a=new AA$();A1p(a);return a;}
function A1p(a){Db(a);}
var Y3=D(BD);
var AA_=D(CI);
function Bra(){var a=new AA_();Bax(a);return a;}
function Bax(a){LT(a);}
function AGe(){var a=this;C.call(a);a.gn=null;a.jC=null;a.jG=null;a.S4=null;}
function BpJ(){var a=new AGe();Bhg(a);return a;}
function Bhg(a){K(a);a.jG=By();a.S4=BS();}
function WQ(a,b){var c,d,e;c=a.jG.b3();while(true){if(!c.bE()){d=BpQ();d.Vy(b);a.jG.C(d);return d;}e=c.bA();if(Rw(e.iG(),b)&&e.NE()<16383)break;}return e;}
function ANE(a){if(a.gn!==null)G(Bh(B(454)));a.jC=null;a.gn=BnK();a.jG.J();}
function A7O(a){var b,c,d;if(a.gn===null)G(Bh(B(456)));b=a.gn;Rz(a);a.gn=null;c=a.jG.b3();while(c.bE()){d=c.bA();d.TT();}a.jG.J();A9N(b);return b;}
function Rz(a){if(a.jC!==null)a.jC=null;}
function A7n(a,b){if(a.gn===null)G(Bh(B(456)));Rz(a);a.gn.kW.C(b);a.jC=b;return b;}
function AQq(a){var b;b=AQE();a.Wh(b);b.gQ=(((H()).c(B(724))).t(a.gn.kW.h)).d();return b;}
function Bi1(a,b,c){if(a.jC===null)a.N_();a.jC.eq.C(Bt9(b,c));}
function AUG(a,b,c,d,e){var f;f=WQ(a,d);a.S1(f.WU(b,c),e);return f;}
function A3R(a,b,c,d,e){return a.O4(b,c,Xl(d),e);}
function A2y(a,b,c,d,e,f){return a.OQ(b,c,d,4,e,f);}
function BdL(a,b,c,d,e,f,g){a.hF();(a.Pn(B(725),e,g,f)).Qq(b,c,d);return a.Mv();}
function A9N(b){var c,d;b.rK.J();b.rQ.J();b.p4.J();c=b.kW.b3();while(c.bE()){d=c.bA();AAD(b,d);}}
function AAD(b,c){var d,e,f;d=c.eq.b3();while(d.bE()){e=d.bA();if(!b.rK.jd(e.ec,1))b.rK.C(e.ec);if(!b.p4.jd(e.fA,1)){b.p4.C(e.fA);if(!b.rQ.jd(e.fA.cf,1))b.rQ.C(e.fA.cf);b.R7(e.fA.cf);}}d=(c.tH()).fI();while(d.bE()){f=d.bA();AAD(b,f);}}
var Nz=D(0);
var ALc=D();
var PO=D();
function AB0(){var a=this;Kz.call(a);a.A5=0;a.xd=0.0;a.zx=0;a.lS=0.0;a.E4=0;a.kn=0;a.js=0;a.FI=0;a.Hy=0.0;a.EA=0.0;a.qz=0;a.jX=null;a.xl=0;a.sZ=0;a.Cc=0;a.t7=0;a.Bu=0;a.vr=0;a.I5=0;a.tR=0;a.DX=0;a.sG=0;a.zZ=0;a.cI=null;a.fQ=0;a.vI=0.0;a.vJ=0.0;a.fS=null;a.vN=null;a.Fr=null;a.i$=0;a.u0=0;}
function BFR(a,b){var c=new AB0();U6(c,a,b);return c;}
function BnI(a){var b=new AB0();APT(b,a);return b;}
function U6(a,b,c){ACs(a,b);a.A5=0;a.xd=360.0;a.zx=1;a.lS=10.0;a.E4=2;a.kn=0;a.FI=1;a.Hy=(-0.10000000149011612);a.EA=10.0;a.qz=1;a.jX=S();a.xl=1;a.sZ=1;a.Cc=0;a.t7=51;a.vr=47;a.tR=29;a.sG=32;a.fQ=(-1);a.fS=S();a.vN=S();a.Fr=b;a.Fr.zM=a;a.cI=c;}
function APT(a,b){U6(a,Bs3(),b);}
function AUS(a,b,c,d,e){a.i$=a.i$|1<<d;a.u0=NZ(a.i$)?0:1;if(a.u0)a.fQ=(-1);else if(a.fQ<0&&!(a.kn&&!a.js)){a.vI=b;a.vJ=c;a.fQ=e;}return !St(a,b,c,d,e)&&a.kn&&!a.js?0:1;}
function BbF(a,b,c,d,e){a.i$=a.i$&((-1)^1<<d);a.u0=NZ(a.i$)?0:1;if(e==a.fQ)a.fQ=(-1);return !AJw(a,b,c,d,e)&&!a.js?0:1;}
function A$E(a,b,c,d){if(d==a.A5){((a.fS.L(a.cI.dj)).jn(a.cI.dD)).m=0.0;a.cI.Cw(a.jX,a.fS.b0(),c*a.xd);a.cI.Cw(a.jX,BBO,b* -a.xd);}else if(d==a.zx){a.cI.mc((((a.fS.L(a.cI.dj)).jn(a.cI.dD)).b0()).dk( -b*a.lS));a.cI.mc((a.vN.L(a.cI.dD)).dk( -c*a.lS));if(a.xl)(a.jX.eE(a.fS)).eE(a.vN);}else if(d==a.E4){a.cI.mc((a.fS.L(a.cI.dj)).dk(c*a.lS));if(a.sZ)a.jX.eE(a.fS);}if(a.qz)a.cI.eT();return 1;}
function AU4(a,b,c,d){var e,f,g,h,i,j;e=ACW(a,b,c,d);if(!e&&a.fQ>=0){f=b;g=(f-a.vI)/BwN.bk();h=a.vJ;i=c;j=(h-i)/BwN.bh();a.vI=f;a.vJ=i;return a.MX(g,j,a.fQ);}return e;}
function A3q(a,b,c){return a.Cg(c*a.Hy*a.lS);}
function BdG(a,b){if(!a.FI&&a.kn&&!a.js)return 0;a.cI.mc((a.fS.L(a.cI.dj)).dk(b));if(a.Cc)a.jX.eE(a.fS);if(a.qz)a.cI.eT();return 1;}
function A3t(a,b){return a.Cg(a.EA*b);}
function AOl(a,b){if(b==a.kn)a.js=1;if(b==a.t7)a.Bu=1;else if(b==a.vr)a.I5=1;else if(b==a.tR)a.DX=1;else if(b==a.sG)a.zZ=1;return 0;}
function Bcv(a,b){if(b==a.kn){a.js=0;a.fQ=(-1);}if(b==a.t7)a.Bu=0;else if(b==a.vr)a.I5=0;else if(b==a.tR)a.DX=0;else if(b==a.sG)a.zZ=0;return 0;}
var H6=D();
var BFS=null;var BFT=null;var BFU=null;function Em(){var b;if(BFS===null){b=new Jr;A4A();RQ(b,BDt,0);BFS=b;}return BFS;}
function ZW(){var b;if(BFT===null){b=new Jr;BdD();RQ(b,Bz4,0);BFT=b;}return BFT;}
function Bi(b,c,d,e,f){var g,h,i,j,k,l,m,n;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=AJG(b)){g=e+f|0;if(g<=AJG(d)){a:{b:{if(b!==d){h=(CB(b)).gT();i=(CB(d)).gT();if(h!==null&&i!==null){if(h===i)break b;if(!h.hT()&&!i.hT()){j=b;k=0;g=c;while(k<f){l=j.data;m=g+1|0;n=l[g];if(!i.yI(n)){QC(b,c,d,e,k);G(Vb());}k=k+1|0;g=m;}QC(b,c,d,e,f);return;}if(!h.hT())break a;if(i.hT())break b;else break a;}G(Vb());}}QC(b,c,d,e,f);return;}G(Vb());}}G(DS());}G(A0p(B(726)));}
function QC(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function FQ(){return Long_fromNumber(new Date().getTime());}
function AFG(){var b;if(BFU===null){b=Bor();b.z(B(727),B(728));b.z(B(21),B(729));b.z(B(730),B(50));b.z(B(731),B(271));b.z(B(732),A_n());b.z(B(733),A2k());b.z(B(734),B(728));b.z(B(735),Blp());BFU=Bov(b);}}
function A2k(){return B(736);}
function Blp(){return B(50);}
function I4(b){AFG();return BFU.Hi(b);}
function H8(b,c){AFG();return BFU.z(b,c);}
function H_(){return Buz($rt_globals.performance.now()*1000000.0);}
function A_n(){return B(270);}
var AEM=D(Ba);
function BqU(){var a=new AEM();APP(a);return a;}
function APP(a){BG(a);}
function A4h(a){return (((Dv()).bN(48,57)).bN(97,102)).bN(65,70);}
function ABo(){var a=this;C.call(a);a.gm=0;a.sQ=0.0;a.sR=0.0;a.pL=0.0;a.pK=0.0;a.w5=W;a.g0=0;a.rk=null;a.rj=null;a.ln=null;}
function BsR(){var a=new ABo();ANz(a);return a;}
function ANz(a){K(a);a.gm=10;a.rk=B_(a.gm);a.rj=B_(a.gm);a.ln=RU(a.gm);}
function AXQ(a,b,c,d){var e;a.sQ=b;a.sR=c;a.pL=0.0;a.pK=0.0;a.g0=0;e=0;while(e<a.gm){a.rk.data[e]=0.0;a.rj.data[e]=0.0;a.ln.data[e]=W;e=e+1|0;}a.w5=d;}
function AW$(a,b,c,d){var e,f;a.pL=b-a.sQ;a.pK=c-a.sR;a.sQ=b;a.sR=c;e=Dj(d,a.w5);a.w5=d;f=a.g0%a.gm|0;a.rk.data[f]=a.pL;a.rj.data[f]=a.pK;a.ln.data[f]=e;a.g0=a.g0+1|0;}
function Bcw(a){var b,c;b=QQ(a,a.rk,a.g0);c=JF(P0(a,a.ln,a.g0))/1.0E9;if(c!==0.0)return b/c;return 0.0;}
function BgN(a){var b,c;b=QQ(a,a.rj,a.g0);c=JF(P0(a,a.ln,a.g0))/1.0E9;if(c!==0.0)return b/c;return 0.0;}
function QQ(a,b,c){var d,e,f;d=BH(a.gm,c);e=0.0;f=0;while(f<d){e=e+b.data[f];f=f+1|0;}return e/d;}
function P0(a,b,c){var d,e,f;d=BH(a.gm,c);e=W;f=0;while(f<d){e=BE(e,b.data[f]);f=f+1|0;}if(!d)return W;return Cx(e,N(d));}
function AMx(){CQ.call(this);this.ka=null;}
function BqZ(a){var b=new AMx();BgB(b,a);return b;}
function BgB(a,b){a.ka=b;UE(a);}
function AIX(a){if(!a.ka.nU)a.ka.nU=a.ka.d$.UP(a.ka.ep.c4,a.ka.ep.c3);}
function AHK(){var a=this;C.call(a);a.K_=null;a.ID=null;a.fh=null;a.bP=null;a.jl=0;a.kp=0;a.qH=0;a.ot=null;a.sP=null;a.fm=null;}
function BnG(a,b){var c=new AHK();ANc(c,a,b);return c;}
function AFJ(a,b,c){a.sP=AJl(a,c);b.E0(a.fh.es(a.qH,O6(a)));b.Nk(a.sP);a.qH=Qf(a);return a;}
function AJl(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$$je;if(a.ot!==null&&a.ot.y(b)){if(a.fm===null)return a.sP;c=H();d=0;while(d<a.fm.cY()){c.gL(a.fm.p(d));d=d+1|0;}return c.d();}a.ot=b;e=b.o0();f=H();a.fm=null;g=0;h=0;i=0;a:{b:while(true){j=e.data;k=j.length;if(g>=k){if(a.fm!==null&&h!=f.j())a.fm.iO(f.es(h,f.j()));return f.d();}if(j[g]==92&&!i){i=1;g=g+1|0;}c:{if(i){if(g>=k)break b;f.bv(j[g]);i=0;}else if(j[g]!=36)f.bv(j[g]);else{if(a.fm===null)a.fm=Yx();d:{try{l=new B1;g=g+1|0;Sg(l,e,g,1);m=Cg(l);if(h==f.j())break d;a.fm.iO(f.es(h,
f.j()));h=f.j();break d;}catch($$e){$$je=R($$e);if($$je instanceof Cs){break a;}else{throw $$e;}}}try{a.fm.iO(Boz(a,m));n=Gi(a,m);h=h+n.j()|0;f.c(n);break c;}catch($$e){$$je=R($$e);if($$je instanceof Cs){break a;}else{throw $$e;}}}}g=g+1|0;}G(DS());}G(Bl(B(49)));}
function AKt(a){a.jl=0;a.kp=a.fh.j();a.bP.v2(a.fh,a.jl,a.kp);a.qH=0;a.ot=null;a.bP.ib=(-1);return a;}
function ALg(a,b){return b.E0(a.fh.es(a.qH,a.fh.j()));}
function AMf(a,b){var c;c=Bhb();AKt(a);while(F$(a)){AFJ(a,c,b);}return (ALg(a,c)).d();}
function Gi(a,b){return a.bP.Fn(b);}
function Me(a,b){var c,d;c=a.fh.j();if(b>=0&&b<=c){d=AJ4(a,b);if(d>=0&&a.bP.QN()){a.bP.R4();return 1;}a.bP.eu=(-1);return 0;}G(Dl(LE(b)));}
function AJ4(a,b){var c;a.bP.ea();a.bP.rv(1);a.bP.Lf(b);c=a.ID.cL(b,a.fh,a.bP);if(c==(-1))a.bP.ek=1;return c;}
function F$(a){var b,c;b=a.fh.j();if(!Tr(a))b=a.kp;if(a.bP.eu>=0&&a.bP.F4()==1){a.bP.eu=a.bP.rA();if(a.bP.rA()==a.bP.zn()){c=a.bP;c.eu=c.eu+1|0;}return a.bP.eu<=b&&Me(a,a.bP.eu)?1:0;}return Me(a,a.jl);}
function ABX(a,b){return a.bP.mG(b);}
function S8(a,b){return a.bP.qR(b);}
function O6(a){return ABX(a,0);}
function Qf(a){return S8(a,0);}
function Tr(a){return a.bP.mL();}
function ANc(a,b,c){var d,e,f,g,h;K(a);a.jl=(-1);a.kp=(-1);a.K_=b;a.ID=b.tU;a.fh=c;a.jl=0;a.kp=a.fh.j();d=new Rt;e=a.jl;f=a.kp;g=ACJ(b);h=ALt(b);X_(d,c,e,f,g,h,YB(b));a.bP=d;a.bP.Xp(1);}
var AAE=D(B4);
function BpY(){var a=new AAE();BfA(a);return a;}
function BfA(a){Ds(a);}
function A4N(a,b,c,d){var e,f,g,h,i;e=d.K();f=b+1|0;if(f>e){d.ek=1;return (-1);}g=c.g(b);if(Cn(g)){h=b+2|0;if(h<=e){i=c.g(f);if(In(g,i))return a.k.e(h,c,d);}}return a.k.e(f,c,d);}
function ARR(a){return B(737);}
function A8L(a,b){a.k=b;}
function Bft(a){return (-2147483602);}
function A8I(a,b){return 1;}
var UN=D();
var AB_=D(Ba);
function Bmx(){var a=new AB_();A0v(a);return a;}
function A0v(a){BG(a);}
function A59(a){var b;b=BqM(a);b.bm=1;return b;}
function PT(){var a=this;B4.call(a);a.gV=null;a.xu=null;a.lZ=0;}
function Bjz(a,b){var c=new PT();A6P(c,a,b);return c;}
function A6P(a,b,c){Ds(a);a.gV=b;a.lZ=c;}
function AXg(a,b){a.k=b;}
function Js(a){if(a.xu===null)a.xu=Ps(a.gV);return a.xu;}
function A00(a){var b,c;b=Js(a);c=H();I(I(c,B(738)),b);return P(c);}
function ANl(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;e=d.K();f=0;g=Bf(3);h=(-1);i=(-1);if(b>=e)return (-1);j=b+1|0;k=c.g(b);l=ARt(k);if(l!==null){m=l.data;n=0;if(m.length!=a.lZ)return (-1);while(true){if(n>=a.lZ)return a.k.e(j,c,d);if(m[n]!=a.gV.data[n])break;n=n+1|0;}return (-1);}o=g.data;o[f]=k;p=k-4352|0;if(p>=0&&p<19){if(j<e){k=c.g(j);h=k-4449|0;}if(h>=0&&h<21){q=j+1|0;o[1]=k;if(q<e){k=c.g(q);i=k-4519|0;}if(i>=0&&i<28){r=q+1|0;o[2]=k;r=a.lZ==3&&o[0]==a.gV.data[0]&&o[1]==a.gV.data[1]&&o[2]==a.gV.data[2]
?a.k.e(r,c,d):(-1);return r;}r=a.lZ==2&&o[0]==a.gV.data[0]&&o[1]==a.gV.data[1]?a.k.e(q,c,d):(-1);return r;}return (-1);}return (-1);}
function A8J(a,b){var c,d;a:{if(b instanceof PT){c=b;if(!(Js(c)).y(Js(a))){d=0;break a;}}d=1;}return d;}
function A2H(a,b){return 1;}
var Qu=D();
var T5=D(Cy);
function ML(){var a=this;C.call(a);a.bi=null;a.bg=null;a.ej=0.0;a.o3=0.0;a.n2=0.0;}
function BFV(){var a=new ML();Bao(a);return a;}
function Bao(a){K(a);a.bi=By();a.bg=J1();}
function A7c(a,b){var c;a.bi.ow(b.bi);if(a.bg.L6()){c=a.bg;c.U=c.U-1|0;}a.bg.y3(b.bg);}
function AV$(a){a.bi.J();a.bg.J();}
function AOC(a){var b,c,d,e,f;b=H0(a.bi.h+32|0);c=a.bi;d=0;e=c.h;while(d<e){f=c.p(d);b.bv(f.g6&65535);d=d+1|0;}b.c(B(317));b.co(a.ej);b.c(B(317));b.co(a.o3);b.c(B(317));b.co(a.n2);return b.d();}
var PC=D(D_);
var Ro=D(Fx);
var FN=D(Bc);
var BFW=null;var BFX=null;var BFY=null;var BFZ=null;function Bom(){Bom=M(FN);Bb0();}
function AKO(a,b){var c=new FN();UZ(c,a,b);return c;}
function UZ(a,b,c){Bom();B$(a,b,c);}
function Bb0(){BFW=AKO(B(739),0);BFX=AKO(B(740),1);BFY=AKO(B(741),2);BFZ=J(FN,[BFW,BFX,BFY]);}
function ABV(){var a=this;C.call(a);a.rK=null;a.kW=null;a.D6=null;a.rQ=null;a.p4=null;a.uy=null;a.SA=null;}
function BnK(){var a=new ABV();ANv(a);return a;}
function ANv(a){K(a);a.rK=By();a.kW=By();a.D6=By();a.rQ=By();a.p4=By();a.uy=By();a.SA=EH();}
function BjH(a,b){if(!a.uy.jd(b,1))a.uy.C(b);}
function Va(){BL.call(this);this.CR=0;}
function Bja(a){var b=new Va();AVF(b,a);return b;}
function AVF(a,b){CX(a);a.CR=b;}
function A8q(a,b,c,d){var e,f,g,h,i;e=b<d.K()?c.g(b):32;f=!b?32:c.g(b-1|0);g=!d.mL()?d.eC():0;h=e!=32&&!Qn(a,e,b,g,c)?0:1;i=f!=32&&!Qn(a,f,b-1|0,g,c)?0:1;return h^i^a.CR?(-1):a.k.e(b,c,d);}
function A8G(a,b){return 0;}
function Bl7(a){return B(742);}
function Qn(a,b,c,d,e){var f;if(!Qw(b)&&b!=95){a:{if(HU(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=e.g(c);if(Qw(f))return 0;if(HU(f)!=6)return 1;}}return 1;}return 0;}
function I6(){B9.call(this);this.V7=null;}
var BF0=W;function Bpj(){Bpj=M(I6);ATu();}
function ATu(){BF0=Cf(B(743));}
var AGl=D();
var Tx=D(EV);
function BsL(){var a=new Tx();AY6(a);return a;}
function AY6(a){LD(a);}
var TB=D(EV);
function Bn$(){var a=new TB();Ba1(a);return a;}
function Ba1(a){LD(a);}
function AG0(a){return S();}
function AWL(a){return AG0(a);}
var AJQ=D();
function RM(b,c,d,e){var f;f=A1l(c);NX(f);c.dI(0);f.zo(b,e,d);c.dI(0);if(!(c instanceof FB))c.dL(d);else c.dL(d<<2);}
function A1l(b){var c;c=null;if(b instanceof FB)c=b.u6();else if(b instanceof EU)c=b;if(c!==null)return c;G(Bh(B(744)));}
function J0(b){var c;if(!Lh())return A6V(B_(b));c=HD(b*4|0);Hg(c,Ge());return c.u6();}
function P1(b){var c;if(!Lh())return Jm(CE(b));c=HD(b);Hg(c,Ge());return c;}
function AJ6(b){var c;if(!Lh())return Bef(Qe(b));c=HD(b*2|0);Hg(c,Ge());return c.yO();}
function GH(b){var c;if(!Lh())return BaG(Bf(b));c=HD(b*4|0);Hg(c,Ge());return c.BO();}
var K6=D(D8);
var BF1=0.0;var BF2=null;function BF3(){BF3=M(K6);A9C();}
function A9C(){BF1=$rt_globals.NaN;BF2=F($rt_doublecls());}
var Eb=D();
var VU=D(Eb);
var VQ=D(Kh);
var VR=D(Eb);
var VS=D(Eb);
var VT=D(Eb);
var X1=D(BD);
var MQ=D(0);
var Tu=D();
function AW7(a,b,c){a.a3b($rt_str(b),Gp(c,"handleEvent"));}
function AXy(a,b,c){a.a2n($rt_str(b),Gp(c,"handleEvent"));}
function AO1(a,b){return a.RL(b);}
function AY7(a,b,c,d){a.XV($rt_str(b),Gp(c,"handleEvent"),d?1:0);}
function A3B(a,b){return !!a.a3e(b);}
function AQt(a){return a.Vh();}
function ANB(a,b,c,d){a.Zd($rt_str(b),Gp(c,"handleEvent"),d?1:0);}
var DA=D();
var BF4=null;var BF5=null;var BF6=null;var BF7=null;var BF8=null;var BF9=null;var BF$=null;var BF_=null;var BGa=null;function BGb(){BGb=M(DA);AQR();}
function AQR(){BF4=QE(0.0);BF5=QE(1.0);BF6=Bq(0);BF7=Bq(1);BF8=BF7;BF9=Bq(2);BF$=Bq(4);BF_=Bq(8);BGa=Bq(16);}
var Tj=D();
var AJS=D(BX);
var AAi=D(G_);
var AJe=D(Fg);
function Btk(a,b,c){var d=new AJe();A_P(d,a,b,c);return d;}
function A_P(a,b,c,d){QU(a,b,c,d);}
function AOP(a,b,c,d){var e;e=a.k.e(b,c,d);if(e>=0)return e;return a.ba.e(b,c,d);}
var AJK=D(Ba);
function BtC(){var a=new AJK();APw(a);return a;}
function APw(a){BG(a);}
function AU_(a){return Bnk(a);}
function AIc(){var a=this;C.call(a);a.EX=0;a.IL=0;a.H4=null;}
function Boz(a,b){var c=new AIc();ARQ(c,a,b);return c;}
function ARQ(a,b,c){a.H4=b;a.IL=c;K(a);a.EX=a.IL;}
function AWT(a){return Gi(a.H4,a.EX);}
var AML=D(J4);
var AFY=D(BX);
var CD=D(CH);
function Ff(){var a=new CD();A7G(a);return a;}
function Bd$(a){var b=new CD();Er(b,a);return b;}
function A7G(a){HF(a);}
function Er(a,b){EO(a,b);}
function AHO(){var a=this;C.call(a);a.w9=0;a.tb=0;a.lJ=0;a.Ac=W;a.we=null;a.zF=null;a.II=W;a.Fh=null;}
function Bm_(a,b,c,d){var e=new AHO();AVI(e,a,b,c,d);return e;}
function AVI(a,b,c,d,e){K(a);a.we=b;a.zF=c;a.II=d;a.Fh=e;}
function AJk(){var a=this;C.call(a);a.Tj=0;a.qQ=0;a.RJ=null;a.tW=null;}
function BoO(){var a=new AJk();ASa(a);return a;}
function ASa(a){K(a);a.Tj=0;a.qQ=1;a.RJ=BrV(a);a.tW=B(49);}
function AMH(b){if("clipboard" in $rt_globals.navigator){$rt_globals.navigator.clipboard.writeText(b);}}
var AMo=D(Dc);
var W2=D(Cy);
function AFv(){var a=this;C.call(a);a.rD=null;a.TW=0;a.hD=0;a.g3=0;}
function NW(a,b){var c=new AFv();AYe(c,a,b);return c;}
function AYe(a,b,c){K(a);a.g3=1;a.rD=b;a.TW=c;}
function Bcm(a){if(!a.g3)G(Bh(B(745)));return a.hD>=a.rD.h?0:1;}
function A9H(a){var b,c;if(a.hD>=a.rD.h)G(Bqn(LE(a.hD)));if(!a.g3)G(Bh(B(745)));b=a.rD.N.data;c=a.hD;a.hD=c+1|0;return b[c];}
var ADu=D();
var YN=D(Ba);
function Bnu(){var a=new YN();AXF(a);return a;}
function AXF(a){BG(a);}
function A0J(a){return Bo7(a);}
var AJ1=D(Ba);
function Bm6(){var a=new AJ1();AXY(a);return a;}
function AXY(a){BG(a);}
function A5Y(a){return Bnj(a);}
function AGy(){var a=this;C.call(a);a.of=null;a.s0=0;a.qY=null;a.wm=0;a.qc=null;a.tm=0;a.la=null;a.q_=0;}
function Dq(){var a=new AGy();Bmb(a);return a;}
function Bmb(a){K(a);a.of=S();a.qY=CR(0.0,1.0,0.0);a.qc=CT(1.0,1.0,1.0,1.0);a.la=BN();}
function AZD(a){a.of.I(0.0,0.0,0.0);a.qY.I(0.0,1.0,0.0);a.qc.hc(1.0,1.0,1.0,1.0);a.la.hM(0.0,0.0);}
function AWu(a,b,c,d,e){a.ea();a.s0=b===null?0:1;if(a.s0)a.of.L(b);a.wm=c===null?0:1;if(a.wm)a.qY.L(c);a.tm=d===null?0:1;if(a.tm)a.qc.ik(d);a.q_=e===null?0:1;if(a.q_)a.la.l$(e);return a;}
function AWN(a,b,c){a.la.hM(b,c);a.q_=1;return a;}
function AIF(){var a=this;C.call(a);a.oP=0.0;a.p1=null;}
function WD(a,b){var c=new AIF();BjX(c,a,b);return c;}
function BjX(a,b,c){K(a);a.oP=b;a.p1=c;}
var AFa=D(C$);
var Te=D(E5);
var Sh=D(IB);
function BGc(){var a=new Sh();AAv(a);return a;}
function AAv(a){TP(a);AUy(a);}
function AZ1(a,b){var c;c=new $rt_globals.Float32Array(b);return c;}
function A1t(a,b){var c;c=new $rt_globals.Int32Array(b);return c;}
function ANJ(a,b){var c;c=new $rt_globals.Int16Array(b);return c;}
function A7t(a,b){var c;c=new $rt_globals.Int8Array(b);return c;}
function BjZ(a,b){var c;c=new $rt_globals.Uint8Array(b);return c;}
function LF(){B4.call(this);this.hJ=0;}
function BbV(a){var b=new LF();AY0(b,a);return b;}
function AY0(a,b){Ds(a);a.hJ=b;}
function A8Z(a,b){a.k=b;}
function ANx(a,b,c,d){var e,f,g,h,i;e=d.K();f=b+1|0;g=Cu(f,e);if(g>0){d.ek=1;return (-1);}h=c.g(b);if(g<0){i=c.g(f);if(B8(i))return (-1);}if(a.hJ!=h)return (-1);return a.k.e(f,c,d);}
function Bgv(a,b,c,d){var e,f,g;if(!(c instanceof B1))return HM(a,b,c,d);e=c;f=d.K();while(true){if(b>=f)return (-1);g=e.e1(a.hJ,b);if(g<0)return (-1);b=g+1|0;if(b<f&&B8(e.g(b))){b=g+2|0;continue;}if(a.k.e(b,c,d)>=0)break;}return g;}
function A0_(a,b,c,d,e){var f,g,h,i;if(!(d instanceof B1))return HV(a,b,c,d,e);f=d;g=e.K();a:{while(true){if(c<b)return (-1);h=f.nV(a.hJ,c);if(h<0)break a;if(h<b)break a;i=h+1|0;if(i<g&&B8(f.g(i))){c=h+(-1)|0;continue;}if(a.k.e(i,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function Bll(a){var b,c;b=a.hJ;c=H();Bp(c,b);return P(c);}
function ARy(a,b){if(b instanceof Ev)return 0;if(b instanceof Ep)return 0;if(b instanceof DL)return 0;if(b instanceof En)return 0;if(b instanceof Lz)return 0;if(!(b instanceof LF))return 1;return b.hJ!=a.hJ?0:1;}
function BgH(a,b){return 1;}
var K2=D(Gm);
var BGd=null;function Bp7(){Bp7=M(K2);AOn();}
function BGe(){var a=new K2();Yc(a);return a;}
function Yc(a){Bp7();Qj(a);}
function AOn(){BGd=J8(F(K2));}
var ADe=D(Gl);
function Brk(a,b,c,d){var e=new ADe();AOo(e,a,b,c,d);return e;}
function AOo(a,b,c,d,e){NF(a,b,c,d,e);}
function AGH(){C.call(this);this.x7=null;}
function BpU(a){var b=new AGH();A3Y(b,a);return b;}
function A3Y(a,b){K(a);a.x7=b;}
function Bot(b){return BpU(b);}
function Bcy(a,b){a.x7.pg(b);}
function A4C(a,b){a.x7.UW(b);}
function IM(){var a=this;C.call(a);a.b8=null;a.G=0;a.oA=0;}
function I2(){var a=new IM();AUm(a);return a;}
function Jy(a){var b=new IM();Bl3(b,a);return b;}
function BGf(a,b){var c=new IM();OU(c,a,b);return c;}
function AUm(a){OU(a,1,16);}
function Bl3(a,b){OU(a,1,b);}
function OU(a,b,c){K(a);a.oA=b;a.b8=Bf(c);}
function Bcg(a,b){var c,d,e;c=a.b8;d=c.data;if(a.G==d.length)c=a.qJ(Bm(8,a.G*1.75|0));d=c.data;e=a.G;a.G=e+1|0;d[e]=b;}
function Bkj(a,b,c){var d,e;d=a.b8;e=d.data;if((a.G+1|0)>=e.length)d=a.qJ(Bm(8,a.G*1.75|0));e=d.data;e[a.G]=b;e[a.G+1|0]=c;a.G=a.G+2|0;}
function A1O(a,b){if(b<a.G)return a.b8.data[b];G(Dl((((((H()).c(B(307))).t(b)).c(B(308))).t(a.G)).d()));}
function Bfa(a,b,c){if(b<a.G){a.b8.data[b]=c;return;}G(Dl((((((H()).c(B(307))).t(b)).c(B(308))).t(a.G)).d()));}
function ATB(a){var b,c;b=a.b8.data;c=a.G-1|0;a.G=c;return b[c];}
function Bc9(a){return a.b8.data[a.G-1|0];}
function A_q(a){a.G=0;}
function AYr(a){if(a.b8.data.length!=a.G)a.qJ(a.G);return a.b8;}
function AYH(a,b){var c;if(b<0)G(Bl((((H()).c(B(314))).t(b)).d()));c=a.G+b|0;if(c>a.b8.data.length)a.qJ(Bm(Bm(8,c),a.G*1.75|0));return a.b8;}
function APj(a,b){var c,d,e;c=Bf(b);d=c.data;e=a.b8;Bi(e,0,c,0,BH(a.G,d.length));a.b8=c;return c;}
function AWW(a){var b,c,d,e,f;if(!a.oA)return P4(a);b=a.b8;c=1;d=0;e=a.G;while(d<e){f=b.data;c=(c*31|0)+f[d]|0;d=d+1|0;}return c;}
function Bj3(a,b){var c,d,e,f,g,h;if(b===a)return 1;if(!a.oA)return 0;if(!(b instanceof IM))return 0;c=b;if(!c.oA)return 0;d=a.G;if(d!=c.G)return 0;e=a.b8;f=c.b8;g=0;while(g<d){h=f.data;if(e.data[g]!=h[g])return 0;g=g+1|0;}return 1;}
function Bda(a){var b,c,d,e;if(!a.G)return B(316);b=a.b8;c=b.data;d=A4x(32);d.mw(91);d.Dw(c[0]);e=1;while(e<a.G){d.Gl(B(317));d.Dw(c[e]);e=e+1|0;}d.mw(93);return d.d();}
var Wl=D(Im);
function D2(){var a=this;I5.call(a);a.TO=0;a.NL=0;a.SR=0;a.Ti=0;a.U1=0;a.M1=0;a.Un=0;a.xN=0;a.WN=0;a.WT=0;a.LS=0;a.Tu=0;a.PS=0;a.Ug=0;a.Gz=0;a.M4=0;a.N5=0;a.K5=0;a.QP=0;a.K0=0;a.Lv=0;a.On=0;a.Vt=0;a.W2=0;a.SX=0;a.Lb=0;a.U4=0;a.Ra=0;a.Sh=0;a.Qi=0;a.SY=0;a.IF=0;a.KW=0;a.Kt=0;a.xV=0;a.AW=0;a.Dj=0;a.uv=0;a.CH=0;a.up=0;a.FN=0;a.wa=0;a.zr=0;a.wi=0;a.Cb=0;a.IU=0;a.y4=0;a.Bl=0;a.Is=0;a.yp=0;a.B0=0;a.H7=0;a.kK=0;a.Al=0;a.ys=0;a.nc=0;a.h3=0;a.za=0;a.Jf=0;a.vE=0;a.mf=0;a.fa=0;a.yk=0;a.C_=0;a.Ix=0;a.xR=0;a.Cm=0;a.Fa=0;a.mI
=0;a.fJ=0;a.HC=0;a.V6=0;a.N$=null;a.cF=null;a.cj=null;a.cd=null;a.tO=null;a.mb=W;a.G4=W;a.hZ=null;a.NC=null;a.yE=0.0;a.hv=0;a.QK=null;}
var BGg=null;var BGh=null;var BGi=W;var BGj=0;var BGk=0;var BGl=W;var BGm=null;function Dt(){Dt=M(D2);A1u();}
function BnP(a,b){var c=new D2();AEu(c,a,b);return c;}
function BGn(a,b,c){var d=new D2();Pg(d,a,b,c);return d;}
function BGo(a,b,c,d,e){var f=new D2();Nb(f,a,b,c,d,e);return f;}
function BGp(a,b,c){var d=new D2();PJ(d,a,b,c);return d;}
function AF0(){Dt();if(BGg===null)BGg=(BwP.pH(B(746))).yv();return BGg;}
function Ya(){Dt();if(BGh===null)BGh=(BwP.pH(B(747))).yv();return BGh;}
function AEu(a,b,c){Dt();Pg(a,b,c,AH0(b,c));}
function Pg(a,b,c,d){Dt();Nb(a,b,c,d,c.r1===null?AF0():c.r1,c.xo===null?Ya():c.xo);}
function Nb(a,b,c,d,e,f){Dt();PJ(a,b,c,VP((((H()).c(d)).c(e)).d(),(((H()).c(d)).c(f)).d()));}
function PJ(a,b,c,d){var e,f,g,h,i,j;Dt();AKo(a);a.xV=a.b_(BA(B(748)));a.AW=a.b_(BA(B(749)));a.Dj=a.b_(BA(B(750)));a.uv=a.b_(BA(B(751)));a.CH=a.b_(BA(B(752)));a.up=a.b_(BA(B(753)));a.FN=a.b_(BA(B(754)));a.wa=a.b_(BA(B(755)));a.zr=a.b_(BA(B(756)));a.wi=a.b_(BA(B(757)));a.Cb=a.b_(BA(B(758)));a.IU=a.b_(BA(B(759)));a.y4=a.b_(BA(B(760)));a.Bl=a.b_(BA(B(761)));a.Is=a.b_(BA(B(762)));a.yp=a.b_(BA(B(763)));a.B0=a.b_(BA(B(764)));a.H7=a.b_(BA(B(765)));a.N$=AZ5();a.NC=Ts();a.QK=S();e=Nk(b);a.hZ=c;a.bp=d;f=b.cD===null?0
:1;a:{b:{a.fJ=f;ALd();if(!C0(e,BB2)){if(!a.fJ)break b;g=BB2;if(!C0(e,g))break b;}f=1;break a;}f=0;}a.HC=f;a.V6=a.fJ&&b.cD.jH!==null?1:0;a.tO=b;a.mb=B3(Fk(e),BGl);a.G4=Rq(b.c1.cf.fq());a.cF=Bb(Jq,a.fJ&&c.nA>0?c.nA:0);h=0;while(h<a.cF.data.length){a.cF.data[h]=AT9();h=h+1|0;}a.cj=Bb(Sb,a.fJ&&c.m_>0?c.m_:0);h=0;while(h<a.cj.data.length){a.cj.data[h]=BsE();h=h+1|0;}a.cd=Bb(Nu,a.fJ&&c.oQ>0?c.oQ:0);h=0;while(h<a.cd.data.length){a.cd.data[h]=Bmv();h=h+1|0;}if(!c.t$&&DW(Bk(BGi,a.mb),a.mb))G(Bh(((((H()).c(B(766))).ST(a.mb)).c(B(471))).d()));if
(b.dW!==null&&b.dW.data.length>c.ht)G(Bh((((((H()).c(B(767))).t(b.dW.data.length)).c(B(768))).t(c.ht)).d()));BsQ();i=BGq;Bo8();a.TO=a.bn(i,BvW);a.NL=a.bn(BGr,BvX);a.SR=a.bn(BGs,BvY);a.Ti=a.bn(BGt,BvZ);a.U1=a.bn(BGu,Bv0);a.M1=a.bn(BGv,Bv1);a.Un=a.bn(BGw,Bv2);a.xN=a.b_(BA(B(769)));a.WN=a.bn(BGx,Bv3);a.WT=a.bn(BGy,Bv4);a.LS=a.bn(BGz,Bv5);a.Tu=a.bn(BGA,Bv6);a.PS=b.dW!==null&&c.ht>0?a.bn(BGB,BrW(c.ht)):(-1);a.Ug=a.bn(BGC,Bv7);a.Gz=a.b_(BGD);a.M4=a.bn(BGE,Bv8);a.N5=a.bn(BGF,Bv9);a.K5=a.bn(BGG,Bv$);a.QP=a.bn(BGH,Bv_);a.K0
=a.bn(BGI,Bwa);a.Lv=a.bn(BGJ,Bwb);a.On=a.bn(BGK,Bwc);a.Vt=a.bn(BGL,Bwd);a.W2=a.bn(BGM,Bwe);a.SX=a.bn(BGN,Bwf);a.Lb=a.bn(BGO,Bwg);a.U4=a.bn(BGP,Bwh);a.Ra=a.bn(BGQ,Bwi);a.Sh=a.bn(BGR,Bwj);a.Qi=a.bn(BGS,Bwk);a.SY=a.bn(BGT,Bwl);a.IF=a.b_(BGU);if(!a.fJ)f=(-1);else{i=BGV;j=BsZ(c.nA,c.m_);f=a.bn(i,j);}a.KW=f;a.Kt=!a.HC?(-1):a.bn(BGW,Bwm);}
function A80(a){var b;b=a.bp;a.bp=null;a.RW(b,a.tO);a.tO=null;a.kK=Cp(a,a.xV);a.Al=Cp(a,a.xV)-a.kK|0;a.ys=Cp(a,a.AW)-a.kK|0;a.nc=Cp(a,a.Dj)-a.kK|0;if(a.nc<0)a.nc=0;a.h3=Cp(a,a.uv);a.za=Cp(a,a.uv)-a.h3|0;a.Jf=Cp(a,a.CH)-a.h3|0;a.vE=!Kk(a,a.up)?(-1):Cp(a,a.up)-a.h3|0;a.mf=Cp(a,a.FN)-a.h3|0;if(a.mf<0)a.mf=0;a.fa=Cp(a,a.wa);a.yk=Cp(a,a.wa)-a.fa|0;a.C_=Cp(a,a.zr)-a.fa|0;a.Ix=Cp(a,a.Cb)-a.fa|0;a.xR=!Kk(a,a.wi)?(-1):Cp(a,a.wi)-a.fa|0;a.Cm=Cp(a,a.IU)-a.fa|0;a.Fa=Cp(a,a.y4)-a.fa|0;a.mI=Cp(a,a.Bl)-a.fa|0;if(a.mI<0)a.mI
=0;}
function Fz(b,c){Dt();return DW(Bk(b,c),c)?0:1;}
function Z2(b,c){Dt();return Z(Bk(b,c),W)?0:1;}
function Nk(b){Dt();BGm.J();if(b.cD!==null)HR(BGm,b.cD);if(b.dn!==null)HR(BGm,b.dn);return BGm;}
function XY(b){var c;Dt();c=W;if(b.cD!==null)c=B3(c,Fk(b.cD));if(b.dn!==null)c=B3(c,Fk(b.dn));return c;}
function AH0(b,c){var d,e,f,g,h,i,j,k;Dt();d=Nk(b);e=B(49);f=Fk(d);g=K0(b.c1.cf.fq());if(Fz(g,N(1)))e=(((H()).c(e)).c(B(770))).d();if(Z2(g,N(6)))e=(((H()).c(e)).c(B(771))).d();if(Fz(g,N(256)))e=(((H()).c(e)).c(B(772))).d();if(Fz(g,N(128)))e=(((H()).c(e)).c(B(773))).d();if(Fz(g,N(8)))e=(((H()).c(e)).c(B(774))).d();if(!(!Fz(g,N(8))&&!Fz(g,N(384)))&&b.cD!==null){h=(((H()).c(e)).c(B(775))).d();h=(((H()).c(h)).c(B(776))).d();h=(((((H()).c(h)).c(B(777))).t(c.nA)).c(B(270))).d();h=(((((H()).c(h)).c(B(778))).t(c.m_)).c(B(270))).d();e
=(((((H()).c(h)).c(B(779))).t(c.oQ)).c(B(270))).d();CN();if(C0(d,BFs))e=(((H()).c(e)).c(B(780))).d();if(b.cD.jH!==null)e=(((H()).c(e)).c(B(781))).d();ALd();if(C0(d,BB2))e=(((H()).c(e)).c(B(782))).d();}i=Dp(b.c1.cf.fq());j=0;while(j<i){k=CU(b.c1.cf.fq(),j);if(k.gy==64)e=(((((H()).c(e)).c(B(783))).t(k.kM)).c(B(784))).d();else if(k.gy==16)e=(((((H()).c(e)).c(B(785))).t(k.kM)).c(B(784))).d();j=j+1|0;}IE();if(Z(Bk(f,BDK),BDK))e=(((H()).c(e)).c(B(786))).d();Cq();if(Z(Bk(f,BCb),BCb)){h=(((H()).c(e)).c(B(787))).d();e
=(((H()).c(h)).c(B(788))).d();}if(Z(Bk(f,BCe),BCe)){h=(((H()).c(e)).c(B(789))).d();e=(((H()).c(h)).c(B(790))).d();}if(Z(Bk(f,BBV),BBV)){h=(((H()).c(e)).c(B(791))).d();e=(((H()).c(h)).c(B(792))).d();}if(Z(Bk(f,BBP),BBP)){h=(((H()).c(e)).c(B(793))).d();e=(((H()).c(h)).c(B(794))).d();}if(Z(Bk(f,BBU),BBU)){h=(((H()).c(e)).c(B(795))).d();e=(((H()).c(h)).c(B(796))).d();}if(Z(Bk(f,BB0),BB0)){h=(((H()).c(e)).c(B(797))).d();e=(((H()).c(h)).c(B(798))).d();}CN();if(Z(Bk(f,BCa),BCa))e=(((H()).c(e)).c(B(799))).d();if(Z(Bk(f,
BCm),BCm))e=(((H()).c(e)).c(B(800))).d();if(Z(Bk(f,BCo),BCo))e=(((H()).c(e)).c(B(801))).d();if(Z(Bk(f,BBW),BBW))e=(((H()).c(e)).c(B(802))).d();Ga();if(Z(Bk(f,BBk),BBk))e=(((H()).c(e)).c(B(803))).d();if(Z(Bk(f,BBl),BBl))e=(((H()).c(e)).c(B(804))).d();if(b.dW!==null&&c.ht>0)e=(((((H()).c(e)).c(B(805))).t(c.ht)).c(B(270))).d();return e;}
function Beg(a,b){var c,d,e,f;if(b.dW!==null&&b.dW.data.length>a.hZ.ht)return 0;a:{c=XY(b);if(Z(a.mb,B3(c,BGl))){d=a.G4;e=b.c1.cf;if(Z(d,Rq(e.fq()))&&(b.cD===null?0:1)==a.fJ){f=1;break a;}}f=0;}return f;}
function BgZ(a,b){return b instanceof D2&&a.VX(b)?1:0;}
function A30(a,b){return b!==a?0:1;}
function ARb(a,b,c){var d,e,f,g,h,i,j;AFz(a,b,c);d=a.cF.data;e=d.length;f=0;while(f<e){g=d[f];g.AG(0.0,0.0,0.0,0.0,(-1.0),0.0);f=f+1|0;}d=a.cj.data;e=d.length;f=0;while(f<e){h=d[f];h.MP(0.0,0.0,0.0,0.0,0.0,0.0,0.0);f=f+1|0;}d=a.cd.data;e=d.length;f=0;while(f<e){i=d[f];i.VK(0.0,0.0,0.0,0.0,0.0,0.0,0.0,(-1.0),0.0,0.0,1.0,0.0);f=f+1|0;}a.hv=0;if(Kk(a,a.xN)){e=a.xN;j=a.yE+BwN.IZ();a.yE=j;GJ(a,e,j);}}
function Blm(a,b,c){IE();if(!C0(c,BDK))a.c$.z$(0,770,771);a.MI(c);if(a.fJ)a.OT(b,c);ACn(a,b,c);}
function AOq(a){ADW(a);}
function BcT(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a.hZ.xs!=(-1))c=a.hZ.xs;else{Dt();c=BGj;}if(a.hZ.rU!=(-1))d=a.hZ.rU;else{Dt();d=BGk;}e=0.0;f=1.0;g=1;h=MP(b);while(h.bE()){i=h.bA();j=i.dq;if(AA5(j)){k=a.c$;l=i;k.z$(1,l.Ph,l.P9);GJ(a,a.Gz,l.Ml);}else{AQ3();if(Z(Bk(j,BBB),BBB))c=i.MD;else{Ga();if(Z(Bk(j,BBl),BBl))GJ(a,a.IF,i.nw);else{ATU();if(Z(Bk(j,BE8),BE8)){m=i;d=m.R5;e=m.Py;f=m.NJ;g=m.US;}else if(!a.hZ.t$)G(Bh((((H()).c(B(806))).c(i.d())).d()));}}}}a.c$.Mx(c);a.c$.Rm(d,e,f);a.c$.Sy(g);}
function BdH(a,b,c){var d,e,f,g,h,i,j,k,l;d=b.cD;L4();e=JH(c,F(Kq),BBt);f=e!==null?e.h0:null;Beb();g=JH(c,F(Ji),BBu);h=g!==null?g.HW:null;Bpj();i=JH(c,F(I6),BF0);j=i!==null?i.V7:null;a:{if(a.kK>=0){k=0;b:while(true){if(k>=a.cF.data.length)break a;c:{if(f!==null&&k<f.h){if(a.hv&&a.cF.data[k].Ip(f.p(k)))break c;a.cF.data[k].NX(f.p(k));}else{if(a.hv&&a.cF.data[k].br.bz===0.0&&a.cF.data[k].br.by===0.0&&a.cF.data[k].br.bx===0.0)break c;a.cF.data[k].br.hc(0.0,0.0,0.0,1.0);}l=a.kK+CJ(k,a.nc)|0;a.bp.j$(l+a.Al|0,a.cF.data[k].br.bz,
a.cF.data[k].br.by,a.cF.data[k].br.bx);a.bp.j$(l+a.ys|0,a.cF.data[k].ft.l,a.cF.data[k].ft.m,a.cF.data[k].ft.n);if(a.nc<=0)break b;}k=k+1|0;}}}d:{if(a.h3>=0){k=0;e:while(true){if(k>=a.cj.data.length)break d;f:{if(h!==null&&k<h.h){if(a.hv&&a.cj.data[k].JY(h.p(k)))break f;a.cj.data[k].QF(h.p(k));}else{if(a.hv&&a.cj.data[k].dM===0.0)break f;a.cj.data[k].dM=0.0;}l=a.h3+CJ(k,a.mf)|0;a.bp.j$(l+a.za|0,a.cj.data[k].br.bz*a.cj.data[k].dM,a.cj.data[k].br.by*a.cj.data[k].dM,a.cj.data[k].br.bx*a.cj.data[k].dM);a.bp.j$(l
+a.Jf|0,a.cj.data[k].eV.l,a.cj.data[k].eV.m,a.cj.data[k].eV.n);if(a.vE>=0)a.bp.k8(l+a.vE|0,a.cj.data[k].dM);if(a.mf<=0)break e;}k=k+1|0;}}}g:{if(a.fa>=0){k=0;h:while(true){if(k>=a.cd.data.length)break g;i:{if(j!==null&&k<j.h){if(a.hv&&a.cd.data[k].MQ(j.p(k)))break i;a.cd.data[k].O1(j.p(k));}else{if(a.hv&&a.cd.data[k].eA===0.0)break i;a.cd.data[k].eA=0.0;}l=a.fa+CJ(k,a.mI)|0;a.bp.j$(l+a.yk|0,a.cd.data[k].br.bz*a.cd.data[k].eA,a.cd.data[k].br.by*a.cd.data[k].eA,a.cd.data[k].br.bx*a.cd.data[k].eA);a.bp.uE(l+a.C_
|0,a.cd.data[k].il);a.bp.uE(l+a.Ix|0,a.cd.data[k].iT);a.bp.k8(l+a.Cm|0,a.cd.data[k].jM);a.bp.k8(l+a.Fa|0,a.cd.data[k].j8);if(a.xR>=0)a.bp.k8(l+a.xR|0,a.cd.data[k].eA);if(a.mI<=0)break h;}k=k+1|0;}}}CN();if(C0(c,BFs))GW(a,a.Is,(B2(c,BFs)).eb);if(d!==null&&d.jH!==null){E0(a,a.yp,d.jH.a33());AHQ(a,a.B0,d.jH.V_());GJ(a,a.H7,1.0/(2.0*(d.jH.V_()).e_.bk()));}a.hv=1;}
function A1u(){var b,c;BGg=null;BGh=null;IE();b=BDK;Cq();c=B3(b,BCb);CN();c=B3(B3(c,BCa),BCm);Ga();BGi=B3(c,BBk);BGj=1029;BGk=515;AQ3();c=BBB;ATU();BGl=B3(c,BE8);BGm=A4Q();}
function Nu(){var a=this;EP.call(a);a.il=null;a.iT=null;a.eA=0.0;a.jM=0.0;a.j8=0.0;}
function Bmv(){var a=new Nu();BgS(a);return a;}
function BgS(a){JY(a);a.il=S();a.iT=S();}
function BcS(a,b){return a.LA(b.br,b.il,b.iT,b.eA,b.jM,b.j8);}
function BfT(a,b,c,d,e,f,g){if(b!==null)a.br.ik(b);if(c!==null)a.il.L(c);if(d!==null)(a.iT.L(d)).b0();a.eA=e;a.jM=f;a.j8=g;return a;}
function BkY(a,b,c,d,e,f,g,h,i,j,k,l,m){a.br.hc(b,c,d,1.0);a.il.I(e,f,g);(a.iT.I(h,i,j)).b0();a.eA=k;a.jM=l;a.j8=m;return a;}
function AV1(a,b){var c,d,e,f,g;a:{b:{if(b!==null){if(b===a)break b;if(a.br.y(b.br)&&a.il.y(b.il)){c=a.iT;d=b.iT;if(c.y(d)&&D9(a.eA,b.eA)){e=a.jM;f=b.jM;if(D9(e,f)&&D9(a.j8,b.j8))break b;}}}g=0;break a;}g=1;}return g;}
var QL=D(CW);
var BGX=null;function BGY(){BGY=M(QL);A3u();}
function A3u(){BGX=BN();}
var Pq=D(D_);
function BoH(){var a=new Pq();BjM(a);return a;}
function BjM(a){LV(a);}
var Z_=D(E7);
var NO=D();
var AGL=D(CI);
function XA(){C.call(this);this.B1=null;}
function Bo$(a){var b=new XA();A53(b,a);return b;}
function A53(a,b){K(a);a.B1=b;}
function AFt(a){AJm(a.B1);}
var TC=D(0);
var W5=D(BX);
var AIC=D(FU);
function AH3(){var a=this;C.call(a);a.iw=null;a.db=0;a.Ks=0;}
function A6F(){var a=new AH3();A3k(a);return a;}
function BGZ(a,b){var c=new AH3();AJV(c,a,b);return c;}
function A3k(a){AJV(a,1,16);}
function AJV(a,b,c){K(a);a.Ks=b;a.iw=Qe(c);}
function BdC(a,b){var c,d,e;c=a.iw;d=c.data;if(a.db==d.length)c=a.F_(Bm(8,a.db*1.75|0));d=c.data;e=a.db;a.db=e+1|0;d[e]=b;}
function A3E(a){a.db=0;}
function A8j(a,b){var c;if(b<0)G(Bl((((H()).c(B(314))).t(b)).d()));c=a.db+b|0;if(c>a.iw.data.length)a.F_(Bm(Bm(8,c),a.db*1.75|0));return a.iw;}
function A$x(a,b){var c,d,e;c=Qe(b);d=c.data;e=a.iw;Bi(e,0,c,0,BH(a.db,d.length));a.iw=c;return c;}
var ZL=D();
function C_(b){return $rt_floatToIntBits(b);}
function CO(b){return RW(b);}
function Bay(b){var c,d;c=RW(b);d=c|((c>>>24)*1.003937005996704|0)<<24;return d;}
function MM(b){return $rt_intBitsToFloat(b&(-16777217));}
var NU=D();
var BG0=null;function BG1(){BG1=M(NU);BcK();}
function BcK(){BG0=S();}
var AGP=D();
function AH6(){BL.call(this);this.lM=0;}
function BnZ(a){var b=new AH6();Ba7(b,a);return b;}
function Ba7(a,b){CX(a);a.lM=b;}
function AY2(a,b,c,d){var e;e=!d.ks()?c.j()-b|0:d.K()-b|0;if(e<=0){d.bH(a.lM,0);return a.k.e(b,c,d);}if(c.g(b)!=10)return (-1);d.bH(a.lM,1);return a.k.e(b+1|0,c,d);}
function A_X(a,b){var c;c=!b.eN(a.lM)?0:1;b.bH(a.lM,(-1));return c;}
function AN8(a){return B(807);}
function Eh(){var a=this;B9.call(a);a.eg=null;a.e8=0.0;a.e7=0.0;a.fr=0.0;a.fs=0.0;a.qa=0;}
var BCb=W;var BCe=W;var BG2=W;var BBV=W;var BB0=W;var BBP=W;var BBU=W;var BG3=W;function Cq(){Cq=M(Eh);AUB();}
function BG4(a){var b=new Eh();L5(b,a);return b;}
function BG5(a,b){var c=new Eh();MZ(c,a,b);return c;}
function BG6(a,b,c,d,e,f,g){var h=new Eh();RP(h,a,b,c,d,e,f,g);return h;}
function BnO(a,b){var c=new Eh();AHB(c,a,b);return c;}
function BrO(a){var b=new Eh();AMS(b,a);return b;}
function XC(b){Cq();return Z(Bk(b,BG3),W)?0:1;}
function AIr(b){Cq();return BnO(BCb,b);}
function L5(a,b){Cq();Gz(a,b);a.e8=0.0;a.e7=0.0;a.fr=1.0;a.fs=1.0;a.qa=0;if(XC(b)){a.eg=Bhm();return;}G(Bh(B(679)));}
function MZ(a,b,c){Cq();L5(a,b);a.eg.OK(c);}
function RP(a,b,c,d,e,f,g,h){Cq();MZ(a,b,c);a.e8=d;a.e7=e;a.fr=f;a.fs=g;a.qa=h;}
function AHB(a,b,c){Cq();L5(a,b);a.eg.e_=c;}
function AMS(a,b){Cq();RP(a,b.dq,b.eg,b.e8,b.e7,b.fr,b.fs,b.qa);}
function BhE(a){return BrO(a);}
function A5J(a){var b,c;b=HL(a);c=(991*b|0)+a.eg.bl()|0;c=(991*c|0)+CO(a.e8)|0;c=(991*c|0)+CO(a.e7)|0;c=(991*c|0)+CO(a.fr)|0;c=(991*c|0)+CO(a.fs)|0;c=(991*c|0)+a.qa|0;return c;}
function AUB(){BCb=Cf(B(808));BCe=Cf(B(809));BG2=Cf(B(810));BBV=Cf(B(811));BB0=Cf(B(812));BBP=Cf(B(813));BBU=Cf(B(814));BG3=B3(B3(B3(B3(B3(B3(BCb,BCe),BG2),BBV),BB0),BBP),BBU);}
function AKm(){C.call(this);this.z5=null;}
function Bt5(a){var b=new AKm();AVv(b,a);return b;}
function AVv(a,b){K(a);a.z5=b;}
function AC$(a){var b,$p,$z;$p=0;if(BaT()){var $T=RA();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.z5;$p=1;case 1:AHD(b);if(C1()){break _;}return;default:A6u();}}RA().s(a,b,$p);}
var Bu=D();
var BGq=null;var BGr=null;var BGs=null;var BGt=null;var BGu=null;var BGv=null;var BGw=null;var BGx=null;var BGy=null;var BGz=null;var BGA=null;var BGB=null;var BGC=null;var BGD=null;var BGE=null;var BGF=null;var BGG=null;var BGH=null;var BGI=null;var BGJ=null;var BGK=null;var BGL=null;var BGM=null;var BGN=null;var BGO=null;var BGP=null;var BGQ=null;var BGR=null;var BGS=null;var BGT=null;var BGU=null;var BGV=null;var BG7=null;var BG8=null;var BG9=null;var BGW=null;function BsQ(){BsQ=M(Bu);A7T();}
function A7T(){var b;BGq=BA(B(376));BGr=BA(B(815));BGs=BA(B(816));BGt=BA(B(817));BGu=BA(B(818));BGv=BA(B(819));BGw=BA(B(820));BGx=BA(B(821));BGy=BA(B(822));BGz=BA(B(823));BGA=BA(B(824));BGB=BA(B(825));b=new Gh;Ga();IR(b,B(826),BBk);BGC=b;b=new Gh;IE();IR(b,B(827),BDK);BGD=b;b=new Gh;CN();IR(b,B(828),BCa);BGE=b;b=new Gh;Cq();IR(b,B(829),BCb);BGF=b;BGG=Dm(B(830),BCb);BGH=Dm(B(831),BCm);BGI=Dm(B(832),BCe);BGJ=Dm(B(833),BCe);BGK=Dm(B(834),BCo);BGL=Dm(B(835),BBP);BGM=Dm(B(836),BBP);BGN=Dm(B(837),BBW);BGO=Dm(B(838),
BBU);BGP=Dm(B(839),BBU);BGQ=Dm(B(840),BBV);BGR=Dm(B(841),BBV);BGS=Dm(B(842),BB0);BGT=Dm(B(843),BB0);BGU=BA(B(844));BGV=BA(B(845));BG7=BA(B(846));BG8=BA(B(847));BG9=BA(B(848));BGW=BA(B(849));}
var AHx=D(Ek);
var Vc=D(CI);
function BnU(){var a=new Vc();A_L(a);return a;}
function A_L(a){LT(a);}
var AD7=D(CP);
function BpV(){var a=new AD7();Bk_(a);return a;}
function Bk_(a){ES(a);}
function A1_(a,b,c,d,e){E0(b,c,b.c6.kr);}
var AD4=D(CP);
function Bmy(){var a=new AD4();A6r(a);return a;}
function A6r(a){ES(a);}
function AZa(a,b,c,d,e){E0(b,c,b.c6.eo);}
var AD6=D(CP);
function Brc(){var a=new AD6();ANU(a);return a;}
function ANU(a){ES(a);}
function Bjn(a,b,c,d,e){E0(b,c,b.c6.h9);}
var TA=D();
var AD2=D(CP);
function Bt4(){var a=new AD2();A28(a);return a;}
function A28(a){ES(a);}
function BeJ(a,b,c,d,e){Oy(b,c,b.c6.dj);}
var AD3=D(CP);
function Bq5(){var a=new AD3();APH(a);return a;}
function APH(a){ES(a);}
function AOD(a,b,c,d,e){ER(b,c,b.c6.cy.l,b.c6.cy.m,b.c6.cy.n,1.188099980354309/(b.c6.kI*b.c6.kI));}
var AD0=D(CP);
function BnA(){var a=new AD0();BaZ(a);return a;}
function BaZ(a){ES(a);}
function BgY(a,b,c,d,e){ADP(b,c,b.c6.md,b.c6.kI);}
function ZU(){var a=this;C.call(a);a.lm=0;a.gp=0;a.id=null;a.gF=null;a.IT=0;a.mj=0;a.uj=0;a.wu=0;a.M3=null;a.ic=0;}
function BpO(a,b){var c=new ZU();Bk9(c,a,b);return c;}
function BG$(a,b,c){var d=new ZU();AGo(d,a,b,c);return d;}
function Bk9(a,b,c){AGo(a,b,c,(-1));}
function AGo(a,b,c,d){var e;K(a);a.uj=0;a.wu=0;a.M3=Bhm();a.ic=0;e=BH(Bc_(),32);if(d<0)d=e-c|0;if(c>=0&&d>=0&&(c+d|0)<=e){a.IT=b;a.lm=c;a.gp=d;a.id=Bb(GL,d);a.gF=b!=1?null:Bf(d);return;}G(Bh(B(850)));}
function Bc_(){var b;b=GH(16);BwR.G9(34930,b);return b.bG(0);}
function Baj(a){var b;b=0;while(b<a.gp){a.id.data[b]=null;if(a.gF!==null)a.gF.data[b]=b;b=b+1|0;}}
function AUp(a){BwR.o8(33984);}
function AO2(a,b){return X6(a,b,0);}
function X6(a,b,c){var d,e;a:{d=b.e_;a.mj=0;switch(a.IT){case 0:e=a.lm+Zp(a,d)|0;break a;case 1:e=a.lm+ABO(a,d)|0;break a;default:}return (-1);}if(!a.mj)a.wu=a.wu+1|0;else{a.uj=a.uj+1|0;if(c)d.t6(e);else BwR.o8(33984+e|0);}d.QZ(b.my,b.nD);d.WH(b.nY,b.mP);return e;}
function Zp(a,b){var c,d;c=0;while(true){if(c>=a.gp){a.ic=(a.ic+1|0)%a.gp|0;a.id.data[a.ic]=b;b.t6(a.lm+a.ic|0);return a.ic;}d=(a.ic+c|0)%a.gp|0;if(a.id.data[d]===b)break;c=c+1|0;}a.mj=1;return d;}
function ABO(a,b){var c,d;c=0;a:{while(true){if(c>=a.gp)break a;d=a.gF.data[c];if(a.id.data[d]===b){a.mj=1;break a;}if(a.id.data[d]===null)break;c=c+1|0;}}if(c>=a.gp)c=a.gp-1|0;d=a.gF.data[c];while(c>0){a.gF.data[c]=a.gF.data[c-1|0];c=c+(-1)|0;}a.gF.data[0]=d;if(!a.mj){a.id.data[d]=b;b.t6(a.lm+d|0);}return d;}
var AD1=D(CP);
function Btp(){var a=new AD1();A3e(a);return a;}
function A3e(a){ES(a);}
function A3X(a,b,c,d,e){Oy(b,c,b.c6.dD);}
var AK_=D();
function ADY(){Be.call(this);this.BZ=null;}
function BoS(){var a=new ADY();Bfg(a);return a;}
function Bfg(a){Cc(a);a.BZ=BS();}
function APO(a,b,c,d,e){E0(b,c,(a.BZ.b$(b.c6.h9)).ii(d.dN));}
var ADZ=D(Be);
function Bo9(){var a=new ADZ();AUE(a);return a;}
function AUE(a){Cc(a);}
function AR9(a,b,c,d,e){E0(b,c,d.dN);}
var Xn=D(BX);
var AFr=D(Ba);
function BqW(){var a=new AFr();A4q(a);return a;}
function A4q(a){BG(a);}
function A3P(a){return ((Dv()).bN(65279,65279)).bN(65520,65533);}
var We=D();
var RT=D();
$rt_packages([-1,"com",0,"github",1,"xpenatan",2,"gdx",3,"backends",4,"teavm",0,"badlogic",6,"gdx",7,"utils",8,"reflect",7,"scenes",10,"scene2d",11,"ui",7,"graphics",13,"g2d",-1,"java",15,"util",16,"regex",15,"nio",18,"charset",15,"io",15,"lang"]);
$rt_metadata([C,0,0,[],0,3,0,0,["Yc",Bun(F2),"a0q",Bun(CB),"bl",Bun(P4),"y",Buo(AXw),"d",Bun(Uj),"a0$",Bun(KB),"e9",Bun(AWx),"Yw",Bun(EM),"a2Y",Buo(ADA),"XN",Buq(AOh)],Ba,0,C,[],1,0,0,0,["b",Bun(BG),"LH",Buo(BhB)],Xo,0,Ba,[],0,0,0,0,["b",Bun(Bh8),"X",Bun(A$i)],U7,0,Ba,[],0,0,0,0,["b",Bun(BkE),"X",Bun(AXD)],Fb,0,C,[],0,3,0,0,0,LC,0,C,[],3,3,0,0,0,IA,0,Fb,[LC],0,3,0,BuC,0,I9,0,C,[],3,3,0,0,0,CF,0,IA,[I9],0,3,0,0,0,CS,0,CF,[],0,3,0,BuL,0,U,0,C,[],1,3,0,BpL,["b",Bun(Ci)],Ht,0,U,[],0,3,0,0,["R",Buo(Ni)],AC_,0,C,
[],0,3,0,0,["XC",Bup(A2e),"v3",Bun(ASi),"d1",Buo(BkK),"Qz",Bun(ATM),"ey",Buo(Biq),"eF",Buo(Baa),"d7",Buo(Bmp)],WV,0,C,[],0,3,0,0,0,ADE,0,C,[],4,3,0,0,0,Km,0,C,[],3,3,0,0,0,E2,0,C,[Km],0,3,0,0,0,BT,0,C,[],3,3,0,0,0,D8,0,C,[BT],1,3,0,0,["b",Bun(R5)],Cz,0,C,[],3,3,0,0,0,E4,0,D8,[Cz],0,3,0,Du,["R",Buo(Jj),"u5",Bun(A7H),"d",Bun(A3J),"bl",Bun(A6g),"y",Buo(Blk)],OQ,0,C,[],0,3,0,0,0,Cl,0,C,[],3,3,0,0,0,Ez,0,C,[],3,3,0,0,0,G5,0,C,[],3,3,0,0,0,Fe,0,C,[Cl,Ez,G5],1,3,0,0,0,Cw,0,Fe,[],1,3,0,0,0,Hp,0,Cw,[],1,3,0,0,0,JR,0,
C,[],1,3,0,0,["a4x",Bur(AMc),"w3",Buq(AGi),"ZI",Buo(NP),"xQ",Buo(A4F),"Zb",Buo(O2),"sS",Buo(BbN),"a0M",Buq(KR),"JW",Buo(AFp),"ZC",Buo(Mi),"QL",Buo(Bd4),"a3P",Bun(SA),"xp",Bun(AZb)],Ea,0,JR,[],1,3,0,0,["w3",Buq(Iw),"U2",Bup(APf)],AEP,0,Ea,[],0,3,0,0,["N3",Buq(Bgu),"od",function(b,c,d,e,f,g,h){return BhF(this,b,c,d,e,f,g,h);}],BF,0,C,[Cl],1,3,0,BnR,["b",Bun(BY),"dc",Bup(A0R),"pw",Buo(AUa),"y",Buo(ANf),"bl",Bun(BfO),"bX",Bun(A8v),"cJ",Bun(AVp),"d",Bun(A7e)],F7,0,BF,[],0,3,0,ASt,["R8",Bun(Bf6),"bI",Buo(AEW),"yf",
Buo(KN),"Nw",Buo(AZI),"OU",Buo(A3D)],LY,0,F7,[],0,3,0,A2J,["bI",Buo(ALJ),"Z6",Bur(Yr),"jE",Bun(AUP)],D6,0,BF,[],0,3,0,J$,["bI",Buo(AJ5),"Ui",Buo(A2s),"Pk",Buo(A4c)],Lw,0,Ba,[],0,0,0,0,["b",Bun(UK),"X",Bun(Ux)],Fy,0,C,[],4,3,0,BvV,0,Dz,0,C,[],3,3,0,0,0,BX,0,C,[Dz],1,3,0,0,0,Ek,0,BX,[],1,3,0,0,0,WB,0,Ek,[],0,3,0,0,0,BP,0,C,[],0,3,0,Bo8,0,I8,0,Ba,[],0,0,0,0,["b",Bun(Vf),"X",Bun(Xq)],ALb,0,I8,[],0,0,0,0,["b",Bun(Bbv),"X",Bun(AX3)],Cd,0,C,[],3,3,0,0,0,GO,0,C,[Cd],3,3,0,0,0,AE$,0,C,[GO],0,0,0,0,["a1F",Buq(Bkv),"c2",
Buo(ATK),"ir",Buo(ASD)],Bc,0,C,[Cz,BT],1,3,0,0,["bu",Bup(B$),"XJ",Bun(Br),"d",Bun(BaU)],D7,0,Bc,[],12,3,0,KA,0,BL,0,C,[],1,0,0,AEi,["b",Bun(CX),"z7",Buo(Lv),"cL",Buq(HM),"cQ",Bur(HV),"D_",Buo(A9S),"jT",Bun(A8R),"JX",Bun(AXU),"d",Bun(A0K),"Og",Bun(A1C),"T",Buo(OR),"cl",Buo(BjE),"iS",Bun(Bk3),"ev",Bun(Sr)]]);
$rt_metadata([Ca,0,BL,[],1,0,0,0,["z7",Buo(ACT),"b",Bun(DK),"e",Buq(BlJ),"cr",Bun(BiW),"bc",Buo(AVy)],Td,0,Ca,[],0,0,0,0,["IV",Buo(Ba4),"bR",Bup(Bh7),"v",Bun(Bjl)],GM,0,C,[],3,3,0,0,0,G_,0,C,[GM],0,3,0,0,["b",Bun(AMT),"mt",Buo(A7y),"ox",Bup(A2P)],Kz,0,G_,[],0,3,0,0,["ZK",Buo(ACs),"a2h",function(b,c,d,e,f){ALz(this,b,c,d,e,f);},"a1v",function(b,c,d,e,f,g){SY(this,b,c,d,e,f,g);},"i6",Bur(St),"t_",Bur(AZp),"jZ",Buq(ACW),"Xe",Buq(AND),"iA",Bur(AJw),"T2",Bur(ANr)],Hr,"CharSequence",21,C,[],3,3,0,0,0,C6,0,C,[],0,
3,0,0,["pI",Bun(A_I),"n9",Bun(A02),"Kx",Bun(ATI),"x9",Bun(Bbg),"B8",Buo(A46)],E6,0,C6,[],0,3,0,0,["j3",Bup(YP),"bZ",Buo(AE_),"IE",Buo(AJf)],Hw,0,E6,[],0,3,0,0,["bZ",Buo(SE)],No,0,C,[],0,3,0,Qi,0,P9,0,C,[Cd],3,3,0,0,0,VY,0,C,[P9],0,0,0,0,["a4q",Buo(Bjy),"Qx",Bup(AV_),"a0W",Bup(BiN)],QX,0,C,[],0,3,0,0,0,ALM,0,U,[],0,3,0,0,["n7",Buo(Bdc)],AGX,0,Ba,[],0,0,0,0,["y9",Bup(AQS),"PF",Buq(A37),"X",Bun(A_T)],Hl,0,U,[],0,3,0,0,["uS",Bup(Of)],V4,0,C,[Dz],0,3,0,0,0,C7,0,BL,[],0,0,0,L6,["R",Buo(FE),"e",Buq(AO$),"k5",Bun(Bd9),
"v",Bun(AUt),"bc",Buo(APK)],M9,0,C7,[],0,0,0,0,["R",Buo(ALI),"e",Buq(APW),"v",Bun(Bjs)],H9,0,C,[],3,3,0,0,0,AI2,0,C,[H9],0,3,0,0,0,B4,0,BL,[],0,0,0,0,["b",Bun(Ds),"jF",Bup(Yq),"e",Buq(ATP),"T",Buo(AZm),"v",Bun(AVO),"cl",Buo(Bdn),"bc",Buo(A0j),"ev",Bun(AQx)],Sz,0,B4,[],0,0,0,0,["qK",Buo(A2L),"T",Buo(A_E),"e",Buq(AUM),"v",Bun(Bgn)],AJs,0,Ea,[],0,3,0,0,["k9",Buo(A4g),"od",function(b,c,d,e,f,g,h){return AT0(this,b,c,d,e,f,g,h);}],M7,0,C,[],3,3,0,0,0,DE,0,C,[],0,3,0,0,0,KD,0,C,[],3,3,0,0,0,J_,0,C,[KD],0,3,0,0,["b",
Bun(Vs),"DC",Buo(A6T)],NA,0,C,[],3,3,0,0,0,G4,0,J_,[NA],0,3,0,0,["a4C",function(b,c,d,e,f,g){AJO(this,b,c,d,e,f,g);},"E3",Bun(A5M),"uD",Bun(AZs),"yb",Bun(AT7),"d",Bun(AO5),"F7",Buo(Biw)],DY,0,BL,[],1,0,0,0,["hd",Buq(HE),"rG",Bun(BlS),"cl",Buo(A08),"bc",Buo(BjS),"ev",Bun(AXG)],Df,0,DY,[],0,0,0,0,["hd",Buq(GA),"e",Buq(A6J),"v",Bun(BbK)],AFe,0,Df,[],0,0,0,0,["hd",Buq(Bcs),"e",Buq(BeI)],KK,0,C,[],0,3,0,0,["b",Bun(ABv),"Fi",Buo(AFs)],If,0,KK,[],0,3,0,0,["a3D",Buq(Lg),"gx",Bun(ANA),"A9",Bun(A4R),"Ue",Bun(BkU),"Ux",
Bun(A6$),"sx",Bun(AYJ),"yv",Bun(ATd),"Fi",Buo(ANQ),"M8",Bun(A4B),"Pu",Buo(ANt),"Qb",Bun(ANR),"LP",Bun(BcM),"d",Bun(BlW)],BU,0,C,[],0,3,0,MK,0,F_,0,C,[BT,Hr],0,0,0,0,["b",Bun(MI),"R",Buo(Mt),"a0S",Buo(AGV),"a2W",Buo(Og),"l6",Bup(Rx),"a4E",Buo(T0),"Es",Bup(A7v),"QT",Buq(BbP),"Yg",Buo(AL3),"HF",Bup(Xj),"St",Buq(AXE),"a2m",Buo(Z4),"Gv",Bup(AIv),"a30",Buo(Vt),"DY",Bup(AE9),"Zp",Buo(QA),"xK",Bup(R$),"zJ",Bup(Vp),"Y2",Buo(Zo),"Ao",Bup(Sj),"hu",Buo(PK),"d",Bun(Q0),"j",Bun(Qq),"g",Buo(S0),"IJ",Buq(T7),"yg",Bur(AH_),
"a39",Buo(AMR),"wg",Buq(R3),"w8",Bur(PA),"a2S",Buo(Ra),"es",Bup(AKn),"rd",Bur(AGa),"wX",Buo(ALj),"a15",Buo(ALA),"a18",Bup(AL2),"c0",Bup(AEs)],GZ,0,C,[],3,3,0,0,0,T1,0,F_,[GZ],0,3,0,0,["b",Bun(Bbd),"Nk",Buo(ARz),"NN",Buo(A13),"Qt",Buq(A4H),"VJ",Buo(ASg),"S8",Buq(A7F),"E0",Buo(BjB),"Nb",Bur(BdY),"Uu",Bur(Bei),"W_",Bup(Bke),"LX",Bup(BhS),"w8",Bur(AS0),"wg",Buq(A8x),"yg",Bur(Bap),"IJ",Buq(Bhr),"g",Buo(A6h),"j",Bun(BlN),"d",Bun(A8K),"hu",Buo(A81),"xK",Bup(BiR),"l6",Bup(A6y)],Qk,0,C,[],0,3,0,Bxu,0,Dx,0,C,[],1,3,0,
0,["R",Buo(Hj),"a20",Bun(DC),"Za",Bun(Cr),"dI",Buo(Iz),"Zy",Bun(BQ),"dL",Buo(Lj),"d_",Bun(HI),"f_",Bun(I0),"a2f",Bun(Bj),"a1U",Bun(CK)],AAT,0,C,[],0,3,0,0,0,J4,0,CF,[],0,3,0,0,0,Gv,0,C,[],1,0,0,0,["b",Bun(Pu)],X,0,Gv,[],1,0,0,MR,["b",Bun(Bo),"bV",Bun(A8t),"cs",Bun(A7w),"J4",Bun(Bd6),"GX",Bun(Ba6),"nl",Bun(BiM),"TX",Bun(AO3),"n8",Bun(A8E),"hI",Bun(BkZ),"gA",Buo(A2V),"kz",Bun(ASW)],AHL,0,X,[],0,0,0,0,["a3o",Buo(Bcq),"r",Buo(A4t)],D0,0,C,[Ez],0,3,0,0,0,Gc,0,D0,[G5,Ez],1,3,0,0,0,C$,0,Gc,[],1,3,0,Bxx,0,Ih,0,C,[],
4,0,0,A0Q,["b",Bun(AAp),"a2T",Buo(ALX)]]);
$rt_metadata([Q2,0,C,[],3,3,0,0,0,MB,0,C,[BT],0,3,0,AB6,["R$",Buo(ANO),"KJ",Buo(BlC),"b",Bun(U8),"Hs",Bup(Bf0),"eT",Bun(AZ$),"zG",Bun(BaW),"Qe",Bun(A1R),"Ty",Buq(A5A)],D1,0,Cw,[],1,3,0,BxG,0,DU,0,D1,[],1,3,0,0,0,AFM,0,DU,[],0,3,0,0,0,K5,0,Ba,[],0,0,0,0,["b",Bun(AAk),"X",Bun(AHN)],Xx,0,Ba,[],0,0,0,0,["b",Bun(AQs),"X",Bun(Bas)],B5,0,C,[],4,3,0,Bx5,0,C8,0,C,[],0,3,0,0,0,AFk,0,C8,[],0,3,0,0,0,Ze,0,U,[],4,0,0,0,["b",Bun(AWY)],AF6,0,C,[],4,3,0,0,0,Y8,0,U,[],4,0,0,0,["b",Bun(Bcr)],Ef,0,Fe,[],1,3,0,0,0,Vl,0,Ef,[],0,
3,0,0,0,Fr,0,C,[],3,3,0,0,0,CQ,0,C,[Fr],1,3,0,0,["b",Bun(UE),"pX",Bun(Bbh),"VH",Bun(A8M)],AG4,0,CQ,[],0,0,0,0,0,Y9,0,U,[],4,0,0,0,["b",Bun(Bim)],AMy,0,C7,[],0,0,0,0,["b",Bun(A5R),"e",Buq(A9O),"v",Bun(Bce)],Gj,0,U,[],0,3,0,0,["R",Buo(N2)],Za,0,U,[],4,0,0,0,["b",Bun(BcP)],NB,0,C,[],3,3,0,0,0,Y6,0,U,[],4,0,0,0,["b",Bun(Bh0)],JL,0,C8,[],0,3,0,0,0,AFd,0,JL,[],0,3,0,0,0,Y$,0,U,[],4,0,0,0,["b",Bun(Bmf)],Zb,0,U,[],4,0,0,0,["b",Bun(ANH)],Y_,0,U,[],4,0,0,0,["b",Bun(AP1)],Zc,0,U,[],4,0,0,0,["b",Bun(A6p)],L3,0,B4,[],0,
0,0,0,["jF",Bup(AC4),"e",Buq(AY$),"v",Bun(AW6),"bc",Buo(Bhs)],Ej,0,L3,[],0,0,0,0,["jF",Bup(HY),"e",Buq(A$v),"T",Buo(Bg4),"v",Bun(AOa)],ACv,0,Ej,[],0,0,0,0,["jF",Bup(ATG),"e",Buq(AZj),"bc",Buo(A23),"v",Bun(Bk1)],AK5,0,Ej,[],0,0,0,0,["jF",Bup(AST),"e",Buq(APA),"bc",Buo(Bi3),"v",Bun(ATD)],Bt,0,C,[],1,3,0,BmB,["b",Bun(Db)],AMJ,0,Bt,[],4,0,0,0,0,E1,0,DU,[],1,3,0,0,0,AFQ,0,E1,[],0,3,0,0,0,Cs,0,C6,[],0,3,0,0,["b",Bun(Gx),"j3",Bup(Mv),"bZ",Buo(ACy)],Bs,"RuntimeException",21,Cs,[],0,3,0,0,["b",Bun(CY),"j3",Bup(Uq),"bZ",
Buo(Fd)],Jp,"UnsupportedOperationException",21,Bs,[],0,3,0,0,["b",Bun(XJ)],AMM,"ReadOnlyBufferException",18,Jp,[],0,3,0,0,["b",Bun(Bcc)],OI,0,C,[Cd],3,3,0,0,0,AHR,0,C,[OI],0,0,0,0,["Nl",Bun(A4o),"TL",Bun(Bac),"Ri",Bun(A_U),"a1p",Bun(A6K),"YU",Bun(AQ8),"a4P",Bun(A6s)],Fs,0,C,[],3,3,0,0,0,BD,0,C,[Fs],0,3,0,Byh,0,Dc,0,BD,[],0,3,0,Byj,0,KI,0,Dc,[],0,3,0,0,0,AIp,0,C,[],4,3,0,0,0,EP,0,C,[],1,3,0,0,["b",Bun(JY)]]);
$rt_metadata([Sb,0,EP,[],0,3,0,0,["b",Bun(AUW),"QF",Buo(AU5),"Mt",Buq(AYE),"MP",function(b,c,d,e,f,g,h){return APu(this,b,c,d,e,f,g,h);},"JY",Buo(A86)],Le,0,D0,[],0,3,0,0,0,NR,0,C,[],3,3,0,0,0,ZB,0,C,[NR],0,3,0,0,["a1i",Buo(A0I),"Uf",Bup(BfB),"pH",Buo(A4y),"Jc",Buo(AM9)],CW,0,Fb,[I9],0,3,0,0,0,AC9,0,CW,[],0,3,0,0,0,Hm,0,Hw,[],0,3,0,0,["bZ",Buo(Np)],AIR,0,Hm,[],0,3,0,0,["bZ",Buo(AQg)],IG,0,C,[Km],3,3,0,0,0,TE,0,Ba,[],0,0,0,0,["b",Bun(AQi),"X",Bun(ARX)],Jn,0,C,[],3,3,0,0,0,Be,0,C,[Jn],1,3,0,0,["b",Bun(Cc),"A0",
Bup(AS5)],AHt,0,KI,[],0,3,0,0,0,It,0,BF,[],0,3,0,AUc,["b",Bun(LB),"Rg",Buq(AX$),"bI",Buo(Tw),"NA",Buo(AVS),"KP",Bun(Bi7)],Hx,0,It,[],0,3,0,ARw,["M6",Buo(A$H),"Lh",Buo(A8_),"bI",Buo(Zt),"b",Bun(JJ),"No",Buo(Bak),"L3",Buo(A31)],Tg,0,BD,[],0,0,0,0,0,Tf,0,BD,[],0,0,0,0,0,Re,0,CF,[],0,3,0,Byt,0,AEz,0,C,[],4,0,0,0,0,CM,0,C,[],3,3,0,0,0,AEY,0,C,[CM],0,3,0,0,["R",Buo(A6A),"kN",Bup(AIu),"uc",Buo(BbH),"RE",Bup(A$h),"QI",Buo(BkC),"WR",Buo(A$V)],SL,0,X,[],0,0,0,0,["X6",Buo(Bhw),"r",Buo(ARn)],DH,0,C,[Cz],1,3,0,0,["YF",Bup(Iv),
"A9",Bun(AIL),"WY",Buo(AH2),"JW",Buo(ABp)],Xk,0,DH,[],0,3,0,0,["a3k",Buq(APo),"mO",Bun(AVc),"nI",Bun(AN3)],Th,0,CS,[],0,0,0,0,0,IZ,0,C,[],0,3,0,0,0,PF,0,IZ,[],0,3,0,0,0,E5,0,Cw,[],1,3,0,0,0,Uh,0,C,[],4,3,0,0,0,EQ,0,C,[],3,3,0,0,0,XZ,0,C,[EQ],0,3,0,0,["a4K",Bur(A_9),"dp",Bun(WL)],OB,0,C,[Cd],3,3,0,0,0,AEe,0,C,[OB],0,0,0,0,["Xm",Buo(AYm),"VV",Buo(Bal),"a3W",Buo(BeO)],Z6,0,BD,[],0,0,0,0,0,JK,0,C,[Fs],1,3,0,0,0,Z5,0,JK,[],0,0,0,0,0,LP,0,C,[Fs],1,3,0,0,0,Z8,0,LP,[],0,0,0,0,0,Ka,0,Lw,[],0,0,0,0,["b",Bun(WN),"X",Bun(VH)],L_,
0,Ka,[],0,0,0,0,["b",Bun(Zf),"X",Bun(ACh)],AHa,0,L_,[],0,0,0,0,["b",Bun(A1Y),"X",Bun(AXJ)],AJ_,0,Ba,[],0,0,0,0,["b",Bun(Bfd),"X",Bun(A2R)],Z7,0,BD,[],0,0,0,0,0,AGM,0,Ej,[],0,0,0,0,["jF",Bup(A19),"e",Buq(AQu),"bc",Buo(Bmj),"v",Bun(AYS)],W$,0,DH,[],0,3,0,0,["b",Bun(AS7),"mO",Bun(A9a),"nI",Bun(A57)],QF,0,C,[GZ,Hr],0,3,0,DM,["R",Buo(AE7),"a2I",Bun(RG),"XY",Buo(Di),"a0f",Buo(KW),"d",Bun(AN$),"mw",Buo(A0e),"Dw",Buo(A0Z),"KY",Bup(AQ7),"Wj",Buq(AOt),"Br",Buo(BdZ),"Gl",Buo(BaF)],Yt,0,Cw,[],0,3,0,0,0,AAM,"ArrayStoreException",
21,Bs,[],0,3,0,0,["b",Bun(A_G)],Dg,0,C,[BT],0,3,0,ByI,0,AHe,0,C$,[],4,3,0,0,0]);
$rt_metadata([AAP,0,C,[Ez],0,3,0,0,0,Ko,0,C,[],3,3,0,0,0,Rt,0,C,[Ko],0,0,0,0,["YJ",function(b,c,d,e,f,g){X_(this,b,c,d,e,f,g);},"bH",Bup(A3j),"eN",Buo(Bdq),"rA",Bun(A58),"qR",Buo(AWm),"eR",Bup(A97),"xw",Bup(A8g),"kf",Buo(BgV),"o6",Buo(A0l),"Fn",Buo(AOX),"UQ",Buo(Bcu),"zn",Bun(A0f),"mG",Buo(AQK),"R4",Bun(AXi),"Cu",Buo(A6D),"gd",Bup(A9n),"Q6",Bun(Bkm),"QN",Bun(Bko),"v2",Buq(Blj),"ea",Bun(ARo),"Lf",Buo(BhT),"eC",Bun(A8Q),"K",Bun(BdQ),"rv",Buo(A$P),"F4",Bun(ATn),"Xp",Buo(A_H),"ks",Bun(Bbb),"mL",Bun(A6B),"Td",Bun(A7B)],VV,
0,C,[],0,3,0,0,["b",Bun(Bep)],ADD,0,C,[Fs],0,0,0,0,0,Fn,0,C,[],0,3,0,0,0,Y0,0,C8,[],0,3,0,0,0,L2,"BitmapFont$Glyph",14,C,[],0,3,0,0,["b",Bun(BiB),"O$",Buo(Bc1),"Kz",Bup(BgO),"d",Bun(AT2)],ACt,0,X,[],0,0,0,0,["Xr",Buo(AVV),"r",Buo(BlG)],GL,0,C,[Cl],1,3,0,RB,["gl",Bup(Nj),"d9",Bun(Bel),"t6",Buo(A2g),"TZ",Bun(ATH),"QZ",Bup(A3Q),"zj",Buq(AZE),"WH",Bup(APe),"G5",Buq(ANG),"U0",Bup(A_A),"Wq",Bup(ATo)],OG,0,GL,[],0,3,0,HG,["Tf",Buo(AGQ),"Pf",Bup(AJv),"a3Y",Buq(Kc),"Zv",Buo(Mh),"X8",Buq(Rh),"SF",Buo(A3d),"bk",Bun(AYY),
"bh",Bun(Bjk),"d",Bun(AX6)],DD,"GdxRuntimeException",8,Bs,[],0,3,0,0,["j3",Bup(S_),"bZ",Buo(Eo)],OA,0,C,[Cd],3,3,0,0,0,AEf,0,C,[OA],0,0,0,0,["Xm",Buo(AXS),"S7",Buo(Bff),"a2t",Buo(A43)],Yk,0,CF,[],0,3,0,0,0,Fl,0,B4,[],0,0,0,0,["Bh",Bup(MG),"T",Buo(Bk7),"e",Buq(AY8),"v",Bun(BfH),"x2",Buq(AVi),"cl",Buo(AWb),"bc",Buo(Bg7)],CH,"IllegalArgumentException",21,Bs,[],0,3,0,0,["b",Bun(HF),"bZ",Buo(EO)],ZI,"IllegalCharsetNameException",19,CH,[],0,3,0,0,["bZ",Buo(A2h)],IU,0,BD,[],0,3,0,ByU,0,XI,0,C,[],0,3,0,0,0,O$,0,C,[],
3,3,0,0,0,H3,0,C,[O$],3,3,0,0,0,Ri,0,C,[],3,3,0,0,0,Gb,0,C,[H3,Ri],1,3,0,0,["b",Bun(Ma)],KL,0,Gb,[],0,3,0,0,["a0B",Buo(SX)],Jr,0,KL,[],0,3,0,0,["a0F",Bup(RQ),"li",Buq(Bfn),"KR",Buo(A$L),"q7",Buo(Bb7),"e4",Buo(A9l),"P1",Buo(AVZ),"Te",Bun(Bhe)],Yi,0,Ej,[],0,0,0,0,["jF",Bup(A6X),"e",Buq(A6l),"bc",Buo(BhK),"v",Bun(APZ)],Is,0,Dx,[Cz],1,3,0,0,["gG",Buq(AI_),"YM",Bun(OE),"d_",Bun(BeY)],G2,0,Is,[],1,0,0,0,["gG",Buq(PW),"Qn",Bun(A2r),"gW",Buo(BeT),"bG",Buo(AXn),"vA",Bup(Bjw),"ck",Bun(AWQ)],Hh,0,G2,[],1,0,0,0,["ge",function(b,
c,d,e,f,g){Mk(this,b,c,d,e,f,g);},"fe",Bun(AWy)],TS,0,Hh,[],0,0,0,0,["ge",function(b,c,d,e,f,g){A$7(this,b,c,d,e,f,g);},"rO",Buo(ATh),"ph",Bup(ANg)],I3,0,BF,[],0,3,0,0,["b",Bun(AKL)],CA,0,C,[],0,3,0,0,["b",Bun(Ed),"fT",Buo(AXB),"cV",Buo(AUh)],VM,0,CA,[],0,0,0,0,["Yi",Buq(Bbj),"fT",Buo(A3M),"cV",Buo(BcD),"NT",Bup(A6E),"c5",Bup(AU2)],ZE,0,Ba,[],0,0,0,0,["b",Bun(Bbq),"X",Bun(AWn)],VN,0,CA,[],0,0,0,0,["a1V",Bup(Bj0),"fT",Buo(AXl),"cV",Buo(Bhy),"c5",Bup(A1X)],VK,0,CA,[],0,0,0,0,["a0m",Bur(BbO),"fT",Buo(A12),"cV",
Buo(ASc),"c5",Bup(AYj)],Bv,"Color",13,C,[],0,3,0,DJ,["b",Bun(ABU),"R",Buo(ALv),"JU",Bur(YC),"ZA",Buo(AAJ),"ik",Buo(AO6),"N2",Buo(Blv),"wH",Bun(Bia),"hc",Bur(Be0),"y",Buo(A$W),"bl",Bun(AWS),"jw",Bun(A26),"lQ",Bun(A5h),"d",Bun(ARi)],E7,0,C,[],1,3,0,0,0,AAy,0,E7,[],0,3,0,0,0,Ng,0,C,[],32,0,0,Brg,0,Fv,0,C,[],4,3,0,0,["Z7",Buq(AYd),"ZL",Bur(AMw),"Zq",function(b,c,d,e,f,g){AJN(this,b,c,d,e,f,g);},"y",Buo(AYh),"a3_",Buo(Ns),"YY",Bun(K8),"Yq",Bun(Vg),"bl",Bun(A$q)],F6,0,BD,[],0,3,0,0,0,Da,0,DY,[],0,0,0,0,["mn",Buq(Gr),
"e",Buq(A6n),"v",Bun(A9o)],AAw,0,Da,[],0,0,0,0,["a3i",Buo(AVo),"e",Buq(BlE),"cL",Buq(AYf)],Pr,0,C,[],3,3,0,0,0,IV,0,C,[KD,Pr],0,3,0,0,["d",Bun(AW1),"Dm",Bun(A8a),"yI",Buo(A$K),"v",Bun(BcQ),"hT",Bun(ATR),"KO",Bun(A3W),"gT",Bun(Bd1),"tx",Bun(BlX),"Rd",Bun(A3_),"KM",Buo(Bil),"LM",Buo(Bii)],Dr,0,C,[Cd],1,3,0,0,0,AHl,0,Dr,[],1,3,0,0,0,EK,0,C,[],3,3,0,0,0]);
$rt_metadata([ALW,0,C,[EK,BT],0,3,0,0,["b",Bun(A84),"R",Buo(A6M),"u8",Buo(A0h),"fK",Bup(AUr),"t8",Buo(Bml),"Us",Bup(A6Z),"e5",Buo(A67),"me",Buo(Bly),"Wv",Buo(AZP),"Rp",Buo(AZl),"dZ",Buo(Bkx),"jv",Buo(A5c),"jB",Buo(Bkn),"jV",Buo(Bc2),"bW",Bun(BkG)],L1,0,D8,[Cz],0,3,0,Jk,["n7",Buo(Ty),"X2",Bun(Bjq)],Ev,0,Ca,[],0,0,0,0,["ps",Buo(AZ7),"cr",Bun(Bck),"bR",Bup(AUb),"cL",Buq(ASn),"cQ",Bur(AVX),"v",Bun(A25),"ra",Bun(APB),"cl",Buo(A2t)],CI,0,C,[],1,3,0,0,["b",Bun(LT),"gl",Bup(Pl),"g1",Bun(SB),"mF",Buo(AQ0),"uL",Buo(AUg),
"GT",Buo(A9W),"Vs",Buo(ABu)],Uf,0,CI,[],0,0,0,0,0,Ja,0,Cw,[],1,3,0,0,0,Qv,0,C,[Cd],3,3,0,0,0,II,0,C,[Cl],3,3,0,0,0,TL,0,C,[],4,3,0,0,0,Um,0,C,[],0,3,0,0,["b",Bun(A8W),"Th",Buo(BjY),"TQ",Bup(A0m)],Cy,0,BX,[],1,3,0,0,0,UY,0,Cy,[],0,3,0,0,0,AHb,0,Ba,[],0,0,0,0,["y9",Bup(AR6),"PF",Buq(A50),"X",Bun(ANe)],Y5,0,C,[],0,3,0,0,["b",Bun(A4S),"Uv",Bup(BcW)],Om,0,C,[],0,3,0,BzI,0,FI,0,C,[],3,3,0,0,0,Eu,0,CW,[FI],0,3,0,BzO,0,U9,0,Eu,[],0,3,0,0,0,QN,0,C,[],3,3,0,0,0,JV,0,Dx,[Cz,GZ,Hr,QN],1,3,0,0,["gG",Buq(AHP),"tn",Buq(AOE),
"RR",Buo(A0n),"Wn",Buq(BlZ),"Mn",Buq(A73),"a4u",Buo(K9),"F0",Bun(ADV),"a4z",Bun(Rk),"a4g",Bun(N3),"qm",Buo(AW3)],Jl,0,JV,[],1,0,0,0,["gG",Buq(UO),"OB",Bun(AOJ),"ck",Bun(Blt)],WC,0,Jl,[],0,0,0,0,["R",Buo(Bgq),"a35",function(b,c,d,e,f,g){AB1(this,b,c,d,e,f,g);},"Dh",Buo(BfL),"uq",Bup(Bdw),"Up",Bun(AYW),"Tg",Bun(ATk),"fe",Bun(A4w)],RE,0,C,[],0,3,0,0,0,Ii,0,C,[],3,3,0,0,0,FP,0,C,[CM,Ii,Cz],0,3,0,0,["b",Bun(Ox),"a1M",Bun(IF),"Re",Bun(Fk),"a2b",Buo(B2),"a09",Bup(JH),"J",Bun(AUQ),"a0u",Buo(Fu),"a0p",Buo(AFD),"Z4",
Buo(HR),"a1b",Buo(C0),"PT",Buo(A1A),"a4r",Bup(Xv),"ZB",Bup(VW),"fI",Bun(MP),"J9",Bun(A8o),"bl",Bun(ADm),"y",Buo(ACp),"c8",Bup(A75)],HN,0,FP,[],0,3,0,LL,["b",Bun(Nd),"bZ",Buo(LI),"XQ",Buo(Rg),"ZM",Buo(ALS),"a3g",Bup(Nx),"NV",Bun(BhX),"bl",Bun(AWM),"y",Buo(ASx)],AIQ,0,X,[],0,0,0,0,["a13",Buo(ANo),"r",Buo(BjI)],Q$,0,C,[],0,3,0,N7,0,GP,0,C,[Cd],3,3,0,0,0,SR,0,C,[GP],0,0,0,0,["Cq",Bur(A0S),"c2",Buo(Bci),"ir",Buo(Bgc)],SS,0,C,[GP],0,0,0,0,["Cq",Bur(A5g),"c2",Buo(A4I),"ir",Buo(AVu)],AGW,"UnsupportedCharsetException",
19,CH,[],0,3,0,0,["bZ",Buo(APa)],ST,0,CA,[],0,0,0,0,["Oy",Bup(BjC),"fT",Buo(AQk),"cV",Buo(Bex),"uM",Bup(Bk0),"c5",Bup(A7N)],SU,0,C,[GP],0,0,0,0,["Cq",Bur(Bbs),"c2",Buo(AOd),"ir",Buo(BdE)],AGt,0,X,[],0,0,0,0,["a0I",Buo(A_6),"r",Buo(A0P)],SV,0,CA,[],0,0,0,0,["a0N",function(b,c,d,e,f){Bgy(this,b,c,d,e,f);},"fT",Buo(ATr),"cV",Buo(A6S),"uM",Bup(A6U),"c5",Bup(ATW)],SW,0,C,[GP],0,0,0,0,["Oy",Bup(BbL),"c2",Buo(AQB),"ir",Buo(AYQ)],EU,0,Dx,[Cz],1,3,0,0,["gG",Buq(AJE),"zo",Buq(AYb),"a37",Bun(NX),"a2k",Bun(KV),"rl",Buo(ATJ),
"vR",Buo(Bfk),"f_",Bun(AT1),"d_",Bun(A5l),"dL",Buo(AZz),"dI",Buo(A4a)],GV,0,EU,[],1,0,0,0,["gG",Buq(NQ),"l8",Buo(AVE),"Pq",Bup(Blo),"ck",Bun(A$p)],F8,0,GV,[],1,0,0,0,["ge",function(b,c,d,e,f,g){OX(this,b,c,d,e,f,g);},"fe",Bun(Bf$)],Pm,0,C,[],3,3,0,0,0,TF,0,C,[Pm],0,3,0,0,["b",Bun(AVw),"UT",Bun(A6i),"Me",Bun(AYR),"PR",Bun(AVk),"rH",Bun(Bjf),"pa",Bun(AXx),"NI",function(b,c,d,e,f){AQJ(this,b,c,d,e,f);},"Ae",Buq(AOg),"jN",Buq(A5m),"Lm",Buq(BaO),"tL",Buq(A9Z),"Ka",Bur(AXX),"RQ",function(b,c,d,e,f){A51(this,b,c,d,
e,f);}],Mm,0,C,[],32,0,0,Btn,0,X9,0,BX,[],0,3,0,0,0,F5,0,Cw,[],1,3,0,0,0,AJL,0,F5,[],0,3,0,0,0,WU,0,Ht,[],0,3,0,0,["R",Buo(BcA)],H5,"Array",8,C,[CM],0,3,0,0,["b",Bun(AP3),"R",Buo(AL6),"n1",Bup(MX),"a4c",Buq(ACe),"Zk",Buo(BiI),"YE",Bur(WF),"C",Buo(A0T),"ow",Buo(AUA),"Ok",Buq(AN1),"NQ",Buo(ATN),"tS",Buq(APR),"p",Buo(Bkw),"l3",Bup(A0w),"Qf",Bup(Bd3),"jd",Bup(A_s),"P_",Bup(ARk),"p5",Bup(ARl),"uJ",Buo(AZV),"vU",Bup(ARP),"Jo",Bun(A65),"yP",Bun(A4L),"W0",Bun(Bmk),"J",Bun(A_k),"Aj",Buo(A2w),"k4",Buo(A$G),"Hd",Buo(A4X),
"b3",Bun(AU$),"nr",Buo(AOc),"bl",Bun(A76),"y",Buo(AWt),"d",Bun(A2x),"fI",Bun(AP_)],N0,0,C7,[],0,0,0,0,["R",Buo(ABw),"e",Buq(A7l),"dY",Bun(AP5),"v",Bun(A1H),"bc",Buo(Bgj)],I7,0,C,[Cl],3,3,0,0,0]);
$rt_metadata([Lz,0,B4,[],0,0,0,0,["ps",Buo(AQa),"T",Buo(Bf8),"e",Buq(A9E),"cL",Buq(AUk),"cQ",Bur(A$B),"v",Bun(A1$),"cl",Buo(AN4),"bc",Buo(A2f)],AL5,"AssertionError",21,E6,[],0,3,0,0,["j3",Bup(ARK)],Rp,0,C,[],0,0,0,Bz0,0,P2,0,C,[Cl],3,3,0,0,0,Fj,0,Da,[],0,0,0,0,["B5",Bur(NL),"e",Buq(A7W),"v",Bun(A8y)],DL,0,B4,[],0,0,0,0,["qK",Buo(AJu),"e",Buq(A_d),"v",Bun(BkR),"r",Buo(ATb),"cl",Buo(AOW),"xf",Bun(AVU),"T",Buo(BiE),"bc",Buo(ASK)],E9,0,C,[Dz],0,3,0,0,0,UA,0,E9,[],0,3,0,0,0,B1,"String",21,C,[BT,Cz,Hr],0,3,0,Fo,["PX",
Buo(KF),"Y0",Buq(Sg),"ZD",Bur(MD),"a4k",Bur(Nw),"Y7",Bup(ZY),"Zo",Buq(Sl),"g",Buo(A7R),"j",Bun(Bad),"bW",Bun(Bch),"rd",Bur(ASq),"V1",Buo(Bj7),"C2",Bup(Bgx),"ff",Buo(Bcp),"BX",Buo(A_c),"e1",Bup(Bfv),"DT",Buo(A_b),"nV",Bup(A7Z),"Ar",Buo(AU0),"wW",Bup(A$N),"S5",Buo(Bf4),"Du",Bup(ASh),"Ms",Buo(AUD),"c0",Bup(ANY),"fc",Buo(AU6),"es",Bup(ASB),"m2",Buo(A5L),"w_",Bup(Bhp),"R_",Bun(BcL),"d",Bun(AP$),"o0",Bun(Bco),"y",Buo(A3r),"Ko",Buo(Bku),"M$",Buo(AX9),"Eq",Buo(Bfy),"bl",Bun(BfE),"JR",Bun(BeP),"x8",Buo(Bc6),"yl",Bup(A3i),
"KC",Bup(ASP)],GU,0,Gb,[],1,3,0,0,["b",Bun(Pi)],QG,0,GU,[],0,3,0,BdD,["li",Buq(ASN)],AGh,0,G2,[],0,0,0,0,["a03",function(b,c,d,e,f,g){AUs(this,b,c,d,e,f,g);},"rO",Buo(BfC),"ph",Bup(BdA),"fe",Bun(ANh)],C4,0,Bc,[],12,3,0,BeB,0,U0,0,Ea,[],0,3,0,0,["k9",Buo(A1K),"od",function(b,c,d,e,f,g,h){return AWo(this,b,c,d,e,f,g,h);}],Lo,0,C,[],1,3,0,0,["b",Bun(AFy)],JT,0,C,[],3,3,0,0,0,GI,0,Lo,[JT,EK,BT],0,3,0,Z0,["b",Bun(JB),"R",Buo(PS),"V",Buo(AHI),"z",Bup(AZL),"qt",Bun(AXh)],Zi,0,GI,[],0,3,0,0,["b",Bun(AZe),"a1m",Buo(AVh),
"Hi",Buo(AYg)],ALs,0,GV,[],0,0,0,0,["a2P",function(b,c,d,e,f,g){A9u(this,b,c,d,e,f,g);},"xZ",Buo(AZS),"oE",Bup(AY1),"fe",Bun(Bf2)],AHT,0,C,[],1,3,0,0,0,V_,0,C,[],0,3,0,0,0,Eg,0,Cy,[],1,3,0,0,0,AIP,0,Eg,[],0,3,0,0,0,RV,0,Be,[],0,3,0,BaK,["R",Buo(AGC),"bo",Bur(A55)],Gw,0,C,[H3],1,3,0,0,["b",Bun(M_),"tB",Buq(Bju),"gh",Bun(Ba8)],ABx,0,Gw,[],0,0,0,0,["a3V",Buo(A8V),"EL",Bun(BdP)],Gl,0,U,[],0,3,0,0,["DO",Bur(NF)],Wu,0,Gl,[],0,3,0,0,["DO",Bur(AQ2)],EF,0,Bc,[],12,3,0,BtE,0,Pe,0,DH,[],0,3,0,Ne,["mO",Bun(A1k),"nI",Bun(A34)],E$,
0,C,[Cd],3,3,0,0,0,Qt,0,C,[E$],3,3,0,0,0,Gt,0,C,[Fs],0,3,0,BAr,0,ACo,0,BL,[],0,0,0,0,["R",Buo(Bmd),"e",Buq(BbQ),"bc",Buo(AQT),"v",Bun(ATA)],F3,0,C,[H3],1,3,0,0,["b",Bun(Oc),"QY",Buo(ALK)],X5,0,F3,[],0,3,0,0,["a2F",Bup(A$I),"gh",Bun(AWv),"mh",Bun(A5e)],Yl,0,Ek,[],0,3,0,0,0,Iy,0,E2,[IG],0,3,0,0,0,LH,0,C,[],3,3,0,0,0,AF7,0,C,[],4,3,0,0,0,IC,0,BF,[],0,3,0,Bl8,["bI",Buo(AJZ),"b",Bun(LU),"Tk",Bup(A0d)],AHG,0,C,[],0,3,0,0,0,Tk,0,C8,[],0,3,0,0,0,UI,0,C,[],0,0,0,0,["b",Bun(A5s)],ZA,0,C,[Cl],0,3,0,0,["b",Bun(AQo),"R",
Buo(AJx),"NU",Bup(AJr),"k$",Bur(AYl),"xq",Buo(ASk),"qf",Buo(Blb),"a1N",Bup(Qm),"Pg",function(b,c,d,e,f,g,h,i){Bla(this,b,c,d,e,f,g,h,i);},"Kb",function(b,c,d,e,f,g,h){A$C(this,b,c,d,e,f,g,h);},"OH",function(b,c,d,e,f,g){A45(this,b,c,d,e,f,g);},"a3u",Buq(HX),"M",Bun(Bd5)],AEd,0,C,[II],0,3,0,0,["EW",Buq(AXM),"iG",Bun(A9d),"hC",Bun(AQ_),"xg",Bun(AUj),"wS",Buq(APx),"i0",Bup(AYk),"hl",Bup(ASM)],AH5,0,C,[],0,3,0,0,0,FW,0,C,[FI,CM],0,3,0,0,0,IJ,0,BF,[],0,3,0,AYa,["bI",Buo(AGv),"b",Bun(KE)],Z$,0,C,[],0,3,0,0,0]);
$rt_metadata([Uz,0,CI,[],0,3,0,0,["Zi",Buq(A3$),"wf",Bun(BbG)],IT,0,C,[],0,3,0,BAD,0,JA,0,C,[],0,3,0,BeC,["b",Bun(AJT),"YW",Buo(AGz),"F5",Buo(Bes),"JM",function(b,c,d,e,f){return AZr(this,b,c,d,e,f);},"LL",Buo(ATC),"y",Buo(APb),"Ol",Bup(A7b)],AJ8,0,C,[],0,3,0,0,0,BM,0,Bc,[],9,3,0,AD_,0,AKT,0,BM,[],12,0,0,0,0,JP,0,C,[],3,3,0,0,0,AKR,0,BM,[],12,0,0,0,0,KS,0,C,[CM],3,3,0,0,0,Pw,0,C,[KS],3,3,0,0,0,AKZ,0,BM,[],12,0,0,0,0,AKS,0,BM,[],12,0,0,0,0,ND,0,C,[],3,3,0,0,0,FF,0,Bc,[],12,3,0,Bpn,0,AKW,0,BM,[],12,0,0,0,["BC",
Bun(Bky)],AK2,0,BM,[],12,0,0,0,0,AKY,0,BM,[],12,0,0,0,0,AKX,0,BM,[],12,0,0,0,0,AK1,0,BM,[],12,0,0,0,0,AGb,0,C,[],0,3,0,0,0,M$,0,C,[],0,3,0,0,["XU",Bur(Xc)],LM,0,C,[],0,3,0,0,["a4M",Bur(ZF)],AGx,"BufferOverflowException",18,Bs,[],0,3,0,0,["b",Bun(Bag)],Ix,0,Dx,[Cz],1,3,0,0,["gG",Buq(TT),"Hn",Buq(Bi2),"a0g",Bun(OZ),"Z2",Bun(IX),"Mu",Buo(A0E),"L$",Buo(Bh4),"f_",Bun(Bi$),"d_",Bun(A47),"dL",Buo(BdS),"dI",Buo(A62)],AKI,0,Ef,[],0,3,0,0,0,ABr,0,Ba,[],0,0,0,0,["b",Bun(AWC),"X",Bun(Bc3)],PE,0,C,[],0,3,0,0,["Yn",Buq(A1V)],E8,
0,C,[],1,0,0,0,["b",Bun(MY)],AKb,0,E8,[],0,0,0,0,["b",Bun(AUi),"lY",Buo(Bin),"HK",Bup(A4d)],AKa,0,E8,[],0,0,0,0,["b",Bun(A8b),"lY",Buo(AQm),"HK",Bup(A0y)],AGE,0,Hw,[],0,3,0,0,0,AB8,0,Ba,[],0,0,0,0,["b",Bun(Bbk),"X",Bun(BhM)],Fq,0,C,[],1,3,0,AUq,["b",Bun(LS)],OL,0,Fq,[],4,0,0,BoC,["a1Q",Buo(ADl),"GS",Buo(OS),"ZG",Buo(RJ),"BD",Buo(Nr)],Ke,0,CW,[FI],0,3,0,0,0,Zv,0,C,[],0,3,0,0,["PX",Buo(A$w)],Ep,0,Ca,[],0,0,0,0,["qK",Buo(AZY),"bR",Bup(A5O),"v",Bun(AWh),"cl",Buo(AZn),"xf",Bun(Bf3)],OK,0,C,[P2],0,3,0,ZX,["b",Bun(AK0),
"NU",Bup(MT),"hF",Bun(Ba2),"M",Bun(A1T),"LJ",Bur(AVM),"dC",Bun(AU8),"xq",Buo(ATE),"Dk",Bun(ARV),"Pi",Buo(BfW),"Oi",Bun(AOb)],Pk,0,C,[],32,0,0,Bsz,0,HW,0,BF,[],0,3,0,AVP,["nC",Buo(A0t),"Nr",Buo(BeA),"KD",Bun(Bfr),"UL",Buo(Bf5),"PJ",Bun(A9K),"bI",Buo(AJR),"b",Bun(LN)],Pt,0,HW,[],0,3,0,A9I,["Sm",Bup(AD8),"SS",Bup(A7S),"bI",Buo(S7)],AFf,0,Dr,[],1,3,0,0,0,RI,0,C,[],3,3,0,0,0,O8,0,C,[RI],0,3,0,ACN,["a2j",Buo(AM0),"a1A",Bup(MO),"Zm",Buq(QO),"Lk",Bup(AXm),"LK",Bup(APt),"M_",Bup(AZ6),"Oa",Buq(BkS),"Do",Buq(AYn),"Wg",
Bun(ANi),"BK",Buo(AM7),"T$",Bup(AXI),"VF",Buq(A$Z)],Uw,0,X,[],0,0,0,0,["b",Bun(A5k),"a4V",Bup(UF),"a3d",Buq(A6N),"cO",Buo(AM5),"Tt",Buo(Bmc),"bN",Bup(BjD),"Q3",Buo(A6d),"A2",Buo(A3b),"r",Buo(AQM),"bV",Bun(A5v),"cs",Bun(A_m),"nl",Bun(A2E),"d",Bun(Be7),"hI",Bun(ASY)],ALh,"BufferUnderflowException",18,Bs,[],0,3,0,0,["b",Bun(A3F)],Sa,0,C,[],3,3,0,0,0,G1,0,C,[Sa],0,3,0,0,["b",Bun(Zq),"La",Bur(AR4),"K6",Bun(AYD)],AHU,0,G1,[],0,3,0,0,["b",Bun(AVd),"t_",Bur(Bb2),"Ur",Bur(ASj),"UP",Bup(BhP),"W9",Buq(Bgz),"O3",Bur(BcJ),
"LD",Bup(Bkf),"Xn",Bur(A$D)],Ha,0,Cw,[],1,3,0,0,0]);
$rt_metadata([Tt,0,F8,[],0,0,0,0,["ge",function(b,c,d,e,f,g){Beq(this,b,c,d,e,f,g);},"xZ",Buo(AWK),"oE",Bup(Bg1)],AIJ,0,C,[],0,3,0,0,0,ACD,0,C,[],0,3,0,0,0,LW,0,CW,[LC],0,3,0,0,0,ALY,0,LW,[],0,0,0,0,0,PI,0,C,[Cl],3,3,0,0,0,I5,0,C,[PI],1,3,0,0,["b",Bun(AKo),"NM",Buq(ANK),"bn",Bup(Bl1),"b_",Buo(A3G),"T1",Buo(ASo),"RW",Bup(A_g),"GO",Bup(AFz),"TE",Buo(BaB),"Cd",Bup(ACn),"M",Bun(ADW),"a2E",Buo(Kk),"XL",Buo(Cp),"a00",Bup(E0),"ZF",Bup(V2),"Z1",Bup(Oy),"a3Q",Bup(GW),"a2R",Bup(GJ),"a2M",Buq(ADP),"a3t",function(b,c,d,
e,f){return ER(this,b,c,d,e,f);},"a0a",Bup(ET),"a2a",Bup(AHQ)],ALU,0,BD,[],0,0,0,0,0,DZ,"IOException",20,Cs,[],0,3,0,0,["b",Bun(AC8)],EY,0,DZ,[],0,3,0,0,["b",Bun(M3)],Zy,"MalformedInputException",19,EY,[],0,3,0,0,["R",Buo(AY3),"n9",Bun(ASG)],FX,0,Bc,[],12,3,0,YK,0,B9,0,C,[Cz],1,3,0,Rj,["yf",Buo(Gz),"CX",Buo(A72),"y",Buo(A5T),"d",Bun(A2K),"bl",Bun(HL)],J2,0,B9,[],0,3,0,Ga,["a2K",Bup(ACu),"qV",Bun(AZ2),"bl",Bun(A3V)],ZV,"CloneNotSupportedException",21,Cs,[],0,3,0,0,["b",Bun(BbX)],GE,0,Ix,[],1,0,0,0,["gG",Buq(Op),
"Pd",Buo(Bg8),"ck",Bun(BcF)],GR,0,GE,[],1,0,0,0,["ge",function(b,c,d,e,f,g){Or(this,b,c,d,e,f,g);},"fe",Bun(Bbc)],AJD,0,Gj,[],0,3,0,0,["R",Buo(A82)],OM,0,C,[],3,3,0,0,0,Os,0,C,[EQ,OM],3,0,0,0,0,R7,0,C,[Cd],3,3,0,0,0,OP,0,C,[],3,3,0,0,0,AIe,0,C,[Os,R7,EQ,OP],0,0,0,0,["a1a",Buq(Bht),"I9",Bun(A8P),"Ma",Bun(A3g),"dp",Bun(ACQ),"Zh",Bun(Bg3)],JX,0,C,[BT],0,3,0,0,["b",Bun(ACz),"Nc",Buo(A2l),"Gm",Bun(ARJ),"qG",Bun(ANL),"AB",Bun(A_v)],AIq,0,JX,[],0,3,0,0,["b",Bun(Bbi),"qG",Bun(A1m),"Sc",Buo(A3I),"Rn",Buo(A2q),"J5",Bun(BbD),
"Od",Buo(Bbe),"RF",Bup(BhN)],Jf,0,C,[Cd],3,3,0,0,0,VJ,0,C,[Jf],1,3,0,0,["a0J",Buo(BlM),"a4d",Bun(AQp)],AMX,0,CF,[],0,3,0,0,0,Vi,0,K5,[],0,0,0,0,["b",Bun(Bcz),"X",Bun(AT4)],L$,0,C,[],1,3,0,0,["b",Bun(Zr),"VW",Buo(Bjd),"Tz",Bun(BiX),"Ky",Buo(ATF),"Pe",Bup(ARD),"LZ",Bur(A8Y)],XR,0,L$,[],0,3,0,0,["b",Bun(A6c),"Ow",Buo(ABI),"zv",Buq(A$s)],ACU,0,C,[CM],0,3,0,0,["Ya",Bur(A0O),"Vv",Buo(AXt),"SV",Buq(A6R),"J",Bun(BdJ),"iH",Buo(A32)],Nm,"BitmapFont",14,C,[Cl],0,3,0,0,["b",Bun(AQF),"a3G",Bur(Sm),"a3B",Buq(AAW),"a3p",Buq(AGm),
"LV",Buo(A5r),"Bf",Bur(ATz),"k$",Bur(BkQ),"Um",Bun(A1E),"Pz",Bun(BkB)],AHk,0,C,[],0,3,0,0,["b",Bun(AOv),"a4h",Bup(A_t),"Nj",Buo(AZ3),"RV",Bun(A1g),"WM",Buo(Bfz)],Hn,0,B4,[],0,0,0,0,["gl",Bup(MU),"e",Buq(AOB),"T",Buo(Bg2),"k0",Buo(AQ9),"v",Bun(A69),"bc",Buo(A0F)],AAu,0,X,[],0,0,0,0,["a1e",Bup(A5q),"r",Buo(ASC)],AAs,0,X,[],0,0,0,0,["ZZ",Buq(Bfw),"r",Buo(A6G)],EV,0,CI,[],1,3,0,0,["b",Bun(LD),"g1",Bun(ADt),"dC",Bun(AXe)],AEg,0,Fj,[],0,0,0,0,["B5",Bur(Bev),"e",Buq(Bh5)],EZ,0,CS,[FI],0,3,0,0,0,Oa,0,C,[E$],3,3,0,0,
0,AFx,0,C,[CM],0,3,0,0,["b",Bun(A3C),"kN",Bup(AJt),"fk",Buo(AY_),"pV",Bup(ASf),"PQ",Bup(AWq)],ACB,0,CI,[],0,0,0,0,0,ADF,0,C,[],0,3,0,0,0,I_,0,Be,[],0,3,0,TX,["gl",Bup(UT),"bo",Bur(BeW)],Ry,0,C,[],0,3,0,Bsf,["a3f",Bup(AL7),"BU",Bun(BgD),"Tc",Buo(AR7),"J",Bun(BfM),"Oq",Buq(A5z),"MY",function(b,c,d,e,f,g,h,i,j){return BlL(this,b,c,d,e,f,g,h,i,j);},"Mg",Buq(AQW)],AGw,0,C,[],4,3,0,0,0,Sq,0,Ca,[],0,0,0,0,["IV",Buo(Bji),"bR",Bup(AXd),"v",Bun(AUJ)],AAR,0,X,[],0,0,0,0,["YT",Buo(A5Q),"r",Buo(AVq)],Jq,0,EP,[],0,3,0,0,
["b",Bun(Bca),"NX",Buo(AOV),"UV",Bup(AQC),"AG",function(b,c,d,e,f,g){return A01(this,b,c,d,e,f,g);},"y",Buo(AOF),"Ip",Buo(BfD)]]);
$rt_metadata([AIy,0,Dr,[],1,3,0,0,0,OH,0,C,[],0,3,0,AMs,0,ALT,0,BD,[],0,0,0,0,0,ALV,0,Dc,[],0,0,0,0,0,VI,0,B4,[],0,0,0,0,["a1j",Bup(A4v),"e",Buq(AO4),"T",Buo(BfZ),"v",Bun(BgG),"bc",Buo(AP6),"cl",Buo(APD)],Po,0,C,[],3,3,0,0,0,Gd,0,C,[Po,EK],0,0,0,0,["MW",Bup(Pf)],P$,0,Gd,[],0,0,0,0,["MW",Bup(AZN),"T3",Bun(APl),"FL",Bup(A21)],AL4,0,Cy,[],0,3,0,0,0,Gk,0,C7,[],0,0,0,0,["b",Bun(Bjj),"e",Buq(A3m),"v",Bun(A83)],Kd,0,Fe,[Ez],1,3,0,0,0,ACi,0,Kd,[Ez],0,3,0,0,0,Ij,0,IC,[],0,3,0,ART,["bI",Buo(ACa),"b",Bun(JG)],AAc,0,Ca,
[],0,0,0,0,["z7",Buo(Bej),"bR",Bup(Big),"cL",Buq(A_D),"cQ",Bur(A9x),"v",Bun(AUu),"bc",Buo(A7a)],Jt,0,EZ,[],0,3,0,0,0,AE2,0,Jt,[],0,3,0,0,0,ME,0,B9,[],0,3,0,AQ3,0,Ll,0,C,[],3,3,0,0,0,ACf,0,C,[Ll],0,3,0,0,["Nz",Bup(BjQ),"Yu",Buq(ABk),"zg",Bun(Bmi),"Q",Bun(APn)],Ie,0,BF,[],0,3,0,AXa,["bI",Buo(XX),"b",Bun(JM)],FU,0,C,[],0,3,0,0,["Zw",Buo(A7D),"SO",Bur(Bis),"Tb",Bur(APL),"EG",Bun(A4i),"MJ",Bun(ARa),"QQ",Bun(ANV)],Nh,0,FU,[],0,3,0,0,0,Wm,0,F8,[],0,0,0,0,["ge",function(b,c,d,e,f,g){A6W(this,b,c,d,e,f,g);},"xZ",Buo(A6e),
"oE",Bup(Bc4)],Oh,0,C,[],3,3,0,0,0,ADh,0,C,[Oh],0,3,0,0,["ZP",Buo(Bdx),"eT",Bun(ARd),"yq",Bun(AZB),"bk",Bun(BkI),"bh",Bun(A5C),"z3",Bun(A$c),"Iw",Bun(AY5),"IZ",Bun(A2z),"SW",Bun(Bgo),"Jp",Bun(A0W),"RC",Buo(ANM),"Ln",Bup(AOG),"pb",Bup(A6w),"wh",Buo(Bhv),"yy",Bun(AXR),"oH",Bun(A1Q),"Kh",Bur(BcG),"Wa",Bun(A9y),"Tl",Bun(A$Y),"O8",Bup(A__)],AGc,0,Hm,[],0,3,0,0,["bZ",Buo(AQG)],BC,"IndexOutOfBoundsException",21,Bs,[],0,3,0,0,["b",Bun(Uo),"bZ",Buo(BO)],ALx,"ArrayIndexOutOfBoundsException",21,BC,[],0,3,0,0,["R",Buo(AO_)],TN,
0,F3,[],0,3,0,0,["a1R",Bup(Vd),"a3A",Buo(ANy),"Zz",Bup(AJP),"gh",Bun(Bi4),"Ot",Buq(AUR)],ADC,0,C,[],0,3,0,0,0,AGR,0,C,[],0,3,0,0,0,Ib,0,C,[],3,3,0,0,0,AC5,0,C,[Ib],0,0,0,0,["a11",Buo(AZw),"bE",Bun(BeV),"bA",Bun(Bjr)],Rv,0,C,[],3,3,0,0,0,AJq,0,C,[Rv],0,3,0,0,["a1X",Buo(A$F)],OW,0,C,[],3,3,0,0,0,Jo,0,C,[OW,GM],0,3,0,AVt,["b",Bun(ACC),"zT",Bun(A_l),"yM",function(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){return BiT(this,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);},"Jg",Bun(A_Y),"G3",Bun(AM_),"W$",Bup(Bi6),"om",Bun(A5K),"nF",Bun(Bh$),
"cJ",Bun(BaS),"mK",Buo(AYZ),"p$",Buo(Be6),"mt",Buo(A8C),"i6",Bur(BiC),"iA",Bur(BbW),"jZ",Buq(A0b),"ox",Bup(A9c),"qd",Bup(AXu)],AEO,0,C,[BT],0,3,0,0,0,AEk,0,Be,[],4,0,0,0,["b",Bun(ATT),"bo",Bur(A4z)],AEh,0,Be,[],4,0,0,0,["b",Bun(Bjx),"bo",Bur(A9T)],Qr,0,C,[],32,0,0,BBR,0,AEp,0,Be,[],4,0,0,0,["b",Bun(AVJ),"bo",Bur(Bld)],AEl,0,Be,[],4,0,0,0,["b",Bun(A6H),"bo",Bur(AYI)],AEj,0,Be,[],4,0,0,0,["b",Bun(Biy),"bo",Bur(Bdm)],AEo,0,Be,[],4,0,0,0,["b",Bun(A8O),"bo",Bur(A0z)],G8,0,CS,[],0,3,0,BBZ,0,AKk,0,G8,[],0,3,0,0,0,LZ,
0,C,[],1,3,0,0,["w3",Buq(ABP),"a21",Buo(RO),"xQ",Buo(BjL),"a3x",Buo(N_),"sS",Buo(Ba$),"a1T",Buq(Lc),"a0Z",Buo(NE),"a4B",Bun(ALZ),"WY",Buo(AEa),"Lr",Buo(AX4),"xp",Bun(A$6)],DX,0,LZ,[],1,3,0,0,["w3",Buq(Iq),"J3",Bup(A2W)],Yg,0,DX,[],0,3,0,0,["k9",Buo(BcZ),"oB",function(b,c,d,e,f,g,h){return BkJ(this,b,c,d,e,f,g,h);}]]);
$rt_metadata([Kh,0,C,[],0,3,0,0,0,XG,0,C,[Cd],1,3,0,0,0,AM3,0,Da,[],0,0,0,0,["mn",Buq(A0o),"e",Buq(AOz)],AJ2,0,C,[],0,3,0,0,["a01",Bup(Be4),"v3",Bun(BeZ),"d1",Buo(BbI),"ey",Buo(A8z),"eF",Buo(BjG),"d7",Buo(Bhi)],Mr,0,C,[],3,3,0,0,0,Xf,0,C,[Mr],0,3,0,0,["b",Bun(A8p),"CC",Bup(AOK)],AEt,0,Be,[],4,0,0,0,["b",Bun(AV9),"bo",Bur(A1U)],D_,0,Cs,[],0,3,0,0,["b",Bun(LV)],Od,"InstantiationException",21,D_,[],0,3,0,0,["b",Bun(Bdb)],AEq,0,Be,[],4,0,0,0,["b",Bun(Bh3),"bo",Bur(BlP)],AEm,0,Be,[],4,0,0,0,["b",Bun(A42),"bo",Bur(A7Q)],AEr,
0,Be,[],4,0,0,0,["b",Bun(A8A),"bo",Bur(Bbm)],AHC,0,E1,[],0,3,0,0,0,TH,0,X,[],0,0,0,0,["a0r",Buo(Blx),"r",Buo(A3H)],Ml,0,C,[],3,3,0,0,0,N$,0,C,[Ml,Qv],0,3,0,AUd,["b",Bun(Wg),"mD",Bun(Bbl),"r4",Buo(BiL),"a0o",Buo(AFV),"Xk",Bun(Bdp),"JH",Bun(A$T),"DK",Bun(A8T),"N7",Bup(A9R),"Zt",Buo(AJh)],H2,0,BF,[],0,3,0,ANn,["b",Bun(NM),"G7",Buo(AMB),"bI",Buo(W6)],ZC,0,H2,[Cl],0,3,0,0,["b",Bun(A_Q),"V2",Buq(BjT),"Li",function(b,c,d,e,f){Bed(this,b,c,d,e,f);},"G7",Buo(Bb4),"Wk",Bun(A10),"tg",Buo(A68),"M",Bun(AOM)],Rd,0,C,[],3,
3,0,0,0,Ls,0,BX,[],1,3,0,0,0,W9,0,Ls,[],0,3,0,0,0,AEw,0,C,[],0,3,0,0,0,Yv,0,DX,[],0,3,0,0,["k9",Buo(AZM),"oB",function(b,c,d,e,f,g,h){return ATf(this,b,c,d,e,f,g,h);}],QZ,0,Gd,[],0,0,0,0,["a1P",Bup(AZQ)],Hz,0,BF,[],0,3,0,A4j,["b",Bun(LO),"bI",Buo(AFB),"nC",Buo(A8k)],FG,0,C,[],3,3,0,0,0,XD,0,Ef,[],0,3,0,0,0,AMb,0,C,[],0,3,0,0,0,ZR,0,Ba,[],0,0,0,0,["b",Bun(AVL),"X",Bun(A2i)],Fm,0,Bc,[],12,3,0,Brv,0,AFl,0,CF,[],0,3,0,0,0,ACX,0,BL,[],0,0,0,0,["LU",Buo(BgW),"e",Buq(A9p),"bc",Buo(ATw),"v",Bun(A7J)],CP,0,C,[Jn],1,
3,0,0,["b",Bun(ES),"A0",Bup(A6z)],VX,0,BX,[],0,3,0,0,0,AEA,0,Be,[],4,0,0,0,["b",Bun(BgJ),"bo",Bur(A_N)],Lt,0,C,[II],0,3,0,0,["EW",Buq(AIs),"iG",Bun(ATv),"hC",Bun(A0C),"xg",Bun(A4Y),"wS",Buq(BfF),"i0",Bup(A_u),"hl",Bup(A7P)],ADs,0,Lt,[],0,3,0,0,["Yz",Bup(BhO)],AEF,0,Be,[],4,0,0,0,["b",Bun(A1N),"bo",Bur(A4K)],AEC,0,Be,[],4,0,0,0,["b",Bun(A2T),"bo",Bur(A6L)],Y2,0,Ba,[],0,0,0,0,["b",Bun(ATQ),"X",Bun(BhW)],AEB,0,Be,[],4,0,0,0,["b",Bun(AVK),"bo",Bur(AWp)],AEE,0,Be,[],4,0,0,0,["b",Bun(A_h),"bo",Bur(ARq)],AHd,0,Dc,
[],0,0,0,0,0,Kf,0,FW,[],0,3,0,0,0,AHc,0,Kf,[],0,0,0,0,0,AGT,0,C,[],0,3,0,0,["a3I",Buo(Bk6),"hF",Bun(Bi9),"M",Bun(Blz),"Sy",Buo(AQ$),"Rm",Buq(A9j),"z$",Buq(BkL),"Mx",Buo(AUF)],XN,0,CQ,[],0,0,0,0,0,Kv,0,BX,[],0,3,0,0,0,AEy,0,Kv,[],0,3,0,0,0,Wj,0,Ba,[],0,0,0,0,["b",Bun(AQj),"X",Bun(AZ8)]]);
$rt_metadata([AHz,0,C,[I7],0,3,0,0,["n1",Bup(A$1),"g9",Bun(A0i),"lk",Bun(A6f),"w4",Buq(BbU),"wK",Bun(A3T),"d9",Bun(AV3),"HX",Bun(AP4)],ADG,0,BL,[],0,0,0,0,["b",Bun(A1S),"e",Buq(AVC),"bc",Buo(A5o),"v",Bun(A71)],H7,0,BF,[],0,3,0,Bfx,["bI",Buo(AGZ),"b",Bun(J7)],AEK,0,Be,[],4,0,0,0,["b",Bun(AO0),"bo",Bur(Bh6)],AEH,0,Be,[],4,0,0,0,["b",Bun(Bks),"bo",Bur(A4s)],Do,0,BF,[],0,3,0,Ey,["b",Bun(ZP),"bI",Buo(Oq),"QX",Bun(AQb),"OD",Bun(A07),"O6",Bun(Bbp),"SB",Buq(ASb)],AED,0,Be,[],4,0,0,0,["b",Bun(AOY),"bo",Bur(AYF)],AEJ,
0,Be,[],4,0,0,0,["b",Bun(A7X),"bo",Bur(AT$)],UC,0,C,[],0,3,0,0,0,NH,0,C7,[],0,0,0,0,["R",Buo(AIa),"e",Buq(A61),"v",Bun(A98),"bc",Buo(BhY)],AEI,0,Be,[],4,0,0,0,["b",Bun(ATx),"bo",Bur(A$d)],ACb,0,EZ,[],0,3,0,0,0,AL_,0,Hp,[],0,3,0,0,0,AI7,0,Ja,[],0,3,0,0,0,Oi,0,C,[],4,3,0,Go,0,ACm,0,Ca,[],0,0,0,0,["R",Buo(BiF),"bR",Bup(A1f),"v",Bun(Bl2)],Pc,0,C,[],3,3,0,0,0,YW,0,C,[Cz],0,3,0,0,["b",Bun(Bjc),"OK",Buo(AOe),"bl",Bun(API)],Wf,"BitmapFont$BitmapFontData",14,C,[],0,3,0,0,["Pf",Bup(Be1),"Wi",Bup(AQN),"IM",Bup(A7i),"Bi",
Bup(A4P),"Gs",Bun(Bee),"ja",Buo(ARm),"JB",function(b,c,d,e,f){AQv(this,b,c,d,e,f);},"PI",Bup(ANs),"Aw",Buo(AQ6),"qn",Buo(ARN)],AHh,0,C$,[],4,3,0,0,0,AEV,0,Ba,[],0,0,0,0,["gl",Bup(BkM),"X",Bun(AWR)],Fg,0,Da,[],0,0,0,0,["mn",Buq(QU),"e",Buq(BdR),"T",Buo(A5D)],Xm,0,Hl,[],0,3,0,0,["uS",Bup(BeS)],R6,0,F6,[],0,3,0,BCr,0,AH9,0,X,[],0,0,0,0,["a1B",Buo(A1w),"r",Buo(A3l)],Hq,0,C,[],1,3,0,0,["b",Bun(Ou),"Su",Buq(ATe),"Mh",Bun(BaD),"J8",Bup(BgA),"Cw",Buq(AZ0),"Pm",Buq(A0u),"mc",Buo(BlV),"Fb",function(b,c,d,e,f){return BfG(this,
b,c,d,e,f);},"Ve",function(b,c,d,e,f,g){return A$R(this,b,c,d,e,f,g);},"Q7",Bup(A5n)],SZ,0,Hq,[],0,3,0,0,["b",Bun(BaM),"eT",Bun(AQI),"r5",Buo(A1v)],ABB,0,C,[EQ],0,3,0,0,["QY",Buo(Bbu),"dp",Bun(ALF)],ACE,0,DL,[],0,0,0,0,["qK",Buo(ARr),"r",Buo(AVz),"v",Bun(A4D)],PR,0,C,[],3,3,0,0,0,GC,0,Bc,[],12,3,0,Bkh,0,K_,0,BF,[],0,3,0,AHy,["b",Bun(AFm),"bI",Buo(Up)],AB2,0,Ba,[],0,0,0,0,["b",Bun(BeL),"X",Bun(Ba_)],Nc,0,C,[II],0,3,0,ATl,["EW",Buq(AEX),"iG",Bun(A70),"hC",Bun(Be8),"xg",Bun(A2M),"wS",Buq(A8h),"i0",Bup(A17),"hl",
Bup(ARY)],Vu,0,C,[],4,3,0,0,0,Ym,0,CF,[],0,3,0,0,0,AC2,0,Cy,[],0,3,0,0,0,QT,0,C,[],3,3,0,0,0,L7,"TeaGL20",5,C,[QT],0,3,0,0,["Q2",Buo(AIx),"tw",Buo(A5f),"QS",Buo(AWJ),"Sa",Buo(Bka),"Ju",Buo(A27),"o8",Buo(WI),"pM",Bup(AD$),"Ii",Bup(W7),"Io",Buo(AKV),"yU",Bur(Uv),"BJ",Buo(AMW),"rW",Buo(Xt),"jD",Buo(AAe),"Cr",Bup(WE),"dU",Buo(Yz),"s8",Buq(UM),"Gj",Bur(W3),"m$",Buo(AA1),"NO",Bun(A38),"G9",Bup(Vv),"oW",Buo(VC),"y7",Bup(UL),"jm",function(b,c,d,e,f,g,h,i,j){AIN(this,b,c,d,e,f,g,h,i,j);},"HD",Buq(XF),"qe",Bur(ACA),"tf",
Bup(Wc),"c7",Bup(ABm),"Ch",Bur(AF9),"fl",Bur(Vn),"oj",Bur(AFE),"AM",Buo(WH),"FP",Bun(ABC),"G_",Buo(YE),"tu",Buo(AIn),"HP",Bur(XU),"Jd",Buo(ALm),"jS",Bun(BbY),"s6",Buo(So),"Ig",Bur(AC0),"IK",Bur(AHq),"wL",Bup(AFw),"Fv",Bup(X0),"oi",Buq(AIm),"u7",Buo(ABz),"GB",Buq(UG),"GL",Buo(Xe),"vo",Bup(AFW),"D0",Buo(ADg),"Ji",Bup(ACl),"im",Buq(Yp),"FH",Bup(TV),"v$",Bup(Yy),"Hz",Buq(Ys),"zk",Bur(AAF),"JQ",Bur(AS9),"y2",function(b,c,d,e,f){U5(this,b,c,d,e,f);},"NF",function(b,c,d,e,f){BkA(this,b,c,d,e,f);},"Bd",function(b,c,
d,e,f){A_Z(this,b,c,d,e,f);},"Cv",Buo(TG),"H3",function(b,c,d,e,f,g){AHH(this,b,c,d,e,f,g);}],ALR,"TeaGL20Debug",5,L7,[],0,3,0,0,["Q2",Buo(A4n),"o8",Buo(A1y),"pM",Bup(Bk2),"Ii",Bup(AZO),"Io",Buo(A9z),"yU",Bur(ARs),"BJ",Buo(AQw),"rW",Buo(AOw),"jD",Buo(AXj),"Cr",Bup(Bhk),"dU",Buo(BlF),"s8",Buq(AUZ),"Gj",Bur(A4r),"m$",Buo(APm),"G9",Bup(Bh_),"oW",Buo(AWd),"y7",Bup(AYz),"jm",function(b,c,d,e,f,g,h,i,j){ASH(this,b,c,d,e,f,g,h,i,j);},"HD",Buq(A$O),"qe",Bur(Bli),"tf",Bup(AN0),"c7",Bup(AM$),"Ch",Bur(AM8),"fl",Bur(AVQ),
"oj",Bur(Bav),"AM",Buo(A5a),"FP",Bun(AYU),"G_",Buo(A4W),"tu",Buo(AYT),"HP",Bur(BaJ),"Jd",Buo(A44),"s6",Buo(BeF),"Ig",Bur(Bcn),"IK",Bur(APM),"wL",Bup(BaP),"Fv",Bup(A6v),"oi",Buq(ASO),"u7",Buo(A_F),"GB",Buq(AN6),"GL",Buo(Bhn),"vo",Bup(Bi5),"D0",Buo(AWP),"Ji",Bup(A4m),"im",Buq(Bi0),"FH",Bup(A7j),"v$",Bup(A4O),"Hz",Buq(ARI),"zk",Bur(AZy),"y2",function(b,c,d,e,f){ASX(this,b,c,d,e,f);},"Cv",Buo(A64),"H3",function(b,c,d,e,f,g){AQr(this,b,c,d,e,f,g);}],ABF,0,Dc,[],0,0,0,0,0,ABH,0,FW,[],0,0,0,0,0,AGA,0,C,[LH],0,0,0,
0,["b",Bun(A$0),"np",Buo(A9U),"DS",Buo(Bgl)],GS,0,C,[ND],0,3,0,Oz,["b",Bun(ACq),"Vy",Buo(A5d),"Xq",Bup(BaY),"WU",Bup(AUL),"Rq",Buq(AQY),"QD",Buo(AV2),"TT",Bun(AOy),"iG",Bun(ARe),"RI",Bun(A1Z),"AQ",Buo(A7x),"Sp",Bur(AOT),"G0",Buo(ARZ),"A8",Buo(AZR),"wP",Buo(AS2),"h2",Buo(A9i),"ug",Buo(AYM),"NE",Bun(ATZ),"PV",Bur(A$r),"dV",Buo(AXk),"LF",Bur(BbM),"Uy",function(b,c,d,e,f,g){BbT(this,b,c,d,e,f,g);},"IA",function(b,c,d,e,f,g,h,i){A8D(this,b,c,d,e,f,g,h,i);},"ef",Bur(AZH),"Tp",Bur(Bhh),"ke",function(b,c,d,e,f){AWk(this,
b,c,d,e,f);},"Qq",Buq(ARO)],Ly,0,Ba,[],0,0,0,0,["b",Bun(WG),"X",Bun(AGN)],YT,0,C,[Ez,G5],0,3,0,0,0,IL,0,C,[],4,3,0,BCD,0,PY,0,C,[Cl],0,3,0,BCF,0,HC,0,Ij,[],0,3,0,A3p,["bI",Buo(Wa),"b",Bun(JO)],Il,0,HC,[],0,3,0,AWw,["bI",Buo(AKC),"b",Bun(J9)]]);
$rt_metadata([P6,0,C,[E$],3,3,0,0,0,Ny,0,C,[E$],3,3,0,0,0,R4,0,C,[E$],3,3,0,0,0,Rm,0,C,[E$,P6,Ny,Qt,Oa,R4],3,3,0,0,0,AJo,0,C,[],0,3,0,0,0,Ok,0,C,[],3,3,0,0,0,AGq,0,C,[BT],0,3,0,0,["b",Bun(AWz),"DZ",Bun(Bfq),"Mp",Bun(AVW),"Gu",Bun(Bgp),"HU",Buo(Bl4),"D$",Bun(A5Z)],C2,0,C,[BT],0,3,0,C9,["b",Bun(Zs),"b$",Buo(Bme),"Ij",Buo(APU),"Kr",Buo(BkF),"Mm",Bur(A_O),"To",function(b,c,d,e,f,g,h){return Bg$(this,b,c,d,e,f,g,h);},"Ki",Buq(A8e),"OJ",function(b,c,d,e,f,g,h,i,j,k){return A4E(this,b,c,d,e,f,g,h,i,j,k);},"ii",Buo(AXP),
"fP",Bun(AR8),"V3",Bun(BhJ),"Pv",Bur(APg),"EI",Bur(Bek),"Co",function(b,c,d,e,f,g){return Be2(this,b,c,d,e,f,g);},"NB",Buq(AQn),"VA",Bup(A7Y),"W7",Bup(ASI),"Fy",Buq(A_C),"wY",Buo(APy),"QU",Buq(BcC),"x4",Bup(A7L),"RH",Buo(A0L),"Sn",Bun(BfV)],Mc,0,C,[],32,0,0,BCW,0,AM1,"NegativeArraySizeException",21,Bs,[],0,3,0,0,["b",Bun(Bgi)],AGn,0,BX,[],0,3,0,0,0,Ky,"Timer",8,C,[],0,3,0,Dy,["b",Bun(ABt),"JI",Bup(Bj4),"J_",Bur(Bkz),"sJ",Bun(A3Z),"SN",Bup(A2u),"MO",Buo(AY9)],AF$,0,Ht,[],0,3,0,0,["R",Buo(BeG)],ACI,0,Eg,[],0,
3,0,0,0,Ww,0,U,[],0,3,0,0,["n7",Buo(APr)],XE,0,DX,[],0,3,0,0,["N3",Buq(BgE),"oB",function(b,c,d,e,f,g,h){return A3h(this,b,c,d,e,f,g,h);}],ADz,0,C,[CM],0,3,0,0,["a0U",Buo(BgR),"PA",Bup(AMV),"b3",Bun(Bbw)],AIl,"IllegalStateException",21,Bs,[],0,3,0,0,["b",Bun(Biu),"bZ",Buo(Bga)],AMA,0,C,[],0,3,0,0,0,Lx,0,C,[KS],1,3,0,0,["b",Bun(AAZ),"Ni",Buo(A_f)],KU,0,Lx,[Pw],1,3,0,0,["b",Bun(AG2),"fI",Bun(ASE)],Wz,0,Fj,[],0,0,0,0,["B5",Bur(Bgs),"e",Buq(Bij)],W_,0,C8,[],0,3,0,0,0,PL,0,C,[Cl],3,3,0,0,0,Kn,0,C,[PL],1,3,0,0,["b",
Bun(Yw),"OP",Buo(Bcj)],FB,0,Dx,[Cz],1,3,0,0,["a07",function(b,c,d,e,f){AC6(this,b,c,d,e,f);},"Df",Buq(A$a),"Ns",Buo(AZf),"zP",Buq(Bj5),"a3q",Buo(AF5),"F0",Bun(A8c),"a4A",Bun(JC),"XF",Buo(Hg),"a2g",Bun(MH),"a05",Bun(LX),"Sz",Buo(A_e),"gv",Buo(A15),"f_",Bun(AQf),"dL",Buo(AZu),"dI",Buo(A66)],WA,0,BL,[],4,0,0,0,["b",Bun(ARG),"e",Buq(Bdj),"bc",Buo(Bb1),"v",Bun(AXV)],EB,0,C,[BT,JP],0,3,0,J5,["b",Bun(AH1),"a1K",Buq(WK),"I",Buq(Bdv),"L",Buo(ARA),"eE",Buo(A2B),"Ek",Buq(AWj),"fN",Buo(AX5),"Os",Buq(A1W),"dk",Buo(Bif),
"t1",Bun(Bl6),"wz",Bun(AQU),"KV",Buo(A$4),"Fs",Buo(ATi),"b0",Bun(Bmr),"BA",Buo(A2X),"jn",Buo(A$m),"Mj",Buq(Bd7),"lG",Buo(A1J),"sW",Buo(A7C),"JL",Buo(A9G),"tE",Bup(ARL),"Bn",Bun(Bmm),"jQ",Bup(AYA),"d",Bun(APG),"bl",Bun(Bip),"y",Buo(ARx),"Ev",Bun(ATm)],Ip,0,C,[BT,JP],0,3,0,AZq,["b",Bun(XS),"uS",Bup(ZM),"t1",Bun(Ba9),"l$",Buo(A85),"hM",Bup(ANa),"P4",Bun(BiZ),"zR",Buo(AZG)],Gh,0,C,[NB],0,3,0,0,["XM",Bur(R2),"a27",Buq(ACc),"Xv",Bup(IR),"bZ",Buo(A2A),"Rl",Buq(AZh)],Kq,0,B9,[],0,3,0,L4,["b",Bun(Mf),"a0K",Buo(XM),"Xd",
Bun(BfK),"bl",Bun(AYo),"qV",Bun(BiJ)],AKJ,0,Cw,[],0,3,0,0,0,Ph,0,Hz,[],0,3,0,A06,["Z9",Buo(XO),"jE",Bun(A_5),"bI",Buo(ABi)],AKj,0,H5,[],0,3,0,0,["R",Buo(A9w),"gr",Bun(A_0),"M",Bun(A9q)],AGd,0,Ek,[],0,3,0,0,0,Ur,0,C,[],4,3,0,0,["a0y",Buo(A29),"E3",Bun(Hd),"DC",Buo(Zk),"F7",Buo(AMY)],AFh,0,C,[],1,3,0,0,0,ALG,0,GE,[],0,0,0,0,["Z_",function(b,c,d,e,f,g){Bl5(this,b,c,d,e,f,g);},"xY",Buo(ATp),"sV",Bup(Bcd),"fe",Bun(A$f)],AFU,0,C,[Cl,G5],0,3,0,0,0,Lq,0,C,[],0,3,0,Zz,0,FZ,0,Gc,[],1,3,0,0,0,Xy,0,FZ,[],4,3,0,0,0,ACL,
0,Ba,[],0,0,0,0,["b",Bun(AXb),"X",Bun(BkN)],Jd,0,C,[JT],1,3,0,0,["b",Bun(AFb)],W1,0,Jd,[EK,BT],0,3,0,0,["EO",Buo(BaN),"b",Bun(AR2),"R",Buo(Sn),"kN",Bup(AMh),"V",Buo(A3c),"a2z",Buo(AIj),"a2H",Buq(Nf),"a4H",Bun(NN),"z",Bup(AYc),"WV",Bup(A2Q),"zl",Buq(AZ9),"RG",Buo(Bar),"qt",Bun(Bhc),"t0",Buo(AXK),"YX",Buo(YL),"cY",Bun(A9J)],AKK,0,C,[],0,3,0,0,["b",Bun(AZX),"n1",Bup(AAL),"DF",Buo(A9k),"y3",Buo(AO7),"AY",Buq(A14),"tM",Buq(AOk),"l8",Buo(A9Y),"vU",Bup(A6x),"GK",Bun(A_a),"L6",Bun(AU3),"J",Bun(A78),"HT",Buo(A0U),"wk",
Buo(AYq),"nr",Buo(AQD)],ABM,0,IU,[],0,3,0,0,0,Q9,0,Hx,[],0,3,0,Bj9,["ZU",Bur(Zj),"jE",Bun(A$8),"bI",Buo(AKe)],AKs,0,EZ,[],0,3,0,0,0,AAj,0,Eg,[],0,3,0,0,0]);
$rt_metadata([ACH,0,C,[],0,3,0,0,["bZ",Buo(AV8),"FQ",Bun(Ba3),"VU",Bup(Bgk),"Wb",Buo(AUO),"L5",function(b,c,d,e,f){AUI(this,b,c,d,e,f);},"jN",Buq(A7g),"Kj",Buq(ANX),"WD",Buo(AP7),"PP",Buo(AUV),"Q8",Buo(AQH),"T8",Buo(A1s)],LK,0,C,[],4,3,0,N6,0,LQ,0,C,[],0,3,0,Bz,["ZN",Bup(AES),"kC",Bun(AXZ),"iP",Bun(BjP),"nM",Bun(BcU),"CB",Bun(AT5),"wl",Bun(A3n),"j",Bun(ASR),"pj",Bun(A03)],OY,0,BL,[],4,0,0,0,["R",Buo(AK3),"e",Buq(BgU),"bc",Buo(A9F),"v",Bun(BdX)],P8,0,H7,[],0,3,0,A09,["b",Bun(AId),"jE",Bun(A3O),"bI",Buo(AGD)],H4,
0,C,[],0,0,0,0,["bu",Bup(BjF),"bQ",Bun(Bc0),"rv",Buo(A9f),"Lg",Buo(A8S),"uu",Bun(ARC),"lX",Bun(AZZ),"vF",Bun(APX),"F",Bun(BhC),"kc",Bun(A9Q),"cT",Bun(A7K),"LB",Bun(ASQ),"d",Bun(ATq),"bW",Bun(BbA),"ie",Bun(A4l),"Ih",Bun(A8w),"Jl",Bun(Bhz),"dY",Bun(APE)],AHi,0,Ly,[],0,0,0,0,["b",Bun(A3x),"X",Bun(A7$)],AEQ,0,Dr,[],1,3,0,0,0,Wt,0,DU,[],0,3,0,0,0,AFu,0,GR,[],0,0,0,0,["ge",function(b,c,d,e,f,g){AOu(this,b,c,d,e,f,g);},"xY",Buo(Bfo),"sV",Bup(A96)],Oe,0,E2,[IG],0,3,0,0,0,F9,"InterruptedException",21,Cs,[],0,3,0,0,["b",
Bun(BeK)],Fa,0,Bc,[],12,3,0,Fi,0,FO,0,C,[],0,0,0,UV,0,G3,0,B4,[],0,0,0,0,["a4f",Bup(UP),"e",Buq(ANW),"cL",Buq(AXc),"cQ",Bur(Bh1),"cl",Buo(Bdf),"iS",Bun(Bgg),"ev",Bun(A4p)],FM,0,C,[Fr],0,3,0,Ik,["bZ",Buo(ADH),"a22",Bup(Rs),"sJ",Bun(A6Q),"dp",Bun(ALQ),"ZJ",Buo(AAI),"H2",Bun(AUn)],Ru,0,C,[Cd],3,3,0,0,0,ACd,0,C,[],1,3,0,0,0,S5,0,G3,[],0,0,0,0,["Yl",Buo(A0A),"cL",Buq(AS6),"cQ",Bur(Bl9),"iS",Bun(AQQ)],ABf,"BufferOverflowException",19,Bs,[],0,3,0,0,["b",Bun(AYv)],ACM,0,C,[Cd],1,3,0,0,0,R9,0,C,[],3,3,0,0,0,ADk,0,C,
[Fr,R9],0,0,0,0,["b",Bun(BfQ),"dp",Bun(ALL),"nF",Bun(A3a),"om",Bun(A_4),"cJ",Bun(A3o)],AD9,0,C,[],0,3,0,0,0,Xa,0,C,[],0,3,0,0,["b",Bun(ARU),"kN",Bup(AFi),"fk",Buo(A2Z),"Om",Buo(A$b),"SE",Buo(A2_)],Pz,"MissingResourceException",16,Bs,[],0,3,0,0,["a3S",Buq(A_B)],AMm,"StringIndexOutOfBoundsException",21,BC,[],0,3,0,0,["b",Bun(A2c)],AGF,0,Hn,[],0,0,0,0,["gl",Bup(ATj),"e",Buq(AW8),"v",Bun(A8H)],Nq,0,C,[],4,3,0,Bqd,0,Ln,0,C,[],4,3,0,FK,0,F1,0,Bc,[],12,3,0,Mn,0,Oj,0,GU,[],0,3,0,A4A,["li",Buq(AVR)],WT,0,DY,[],0,0,0,
0,["hd",Buq(AOQ),"e",Buq(BlO),"cL",Buq(A11),"v",Bun(BgL)],Qg,0,C,[Cd],3,3,0,0,0,Ho,0,Bc,[],12,3,0,BoB,0,WS,0,Df,[],0,0,0,0,["hd",Buq(A88),"e",Buq(A4J)],AMr,0,Ha,[],0,3,0,0,0,M0,0,C,[],3,3,0,0,0,AI$,"CoderMalfunctionError",19,E6,[],0,3,0,0,["IE",Buo(AXN)],JU,0,Bt,[],0,3,0,BsY,["n7",Buo(AMk)],RH,0,C,[],4,3,0,ASS,0,AI6,0,Fl,[],0,0,0,0,["Bh",Bup(A8U)],AHw,0,C,[Cd],1,3,0,0,0,AFK,0,DX,[],0,3,0,0,["k9",Buo(AQZ),"oB",function(b,c,d,e,f,g,h){return A5w(this,b,c,d,e,f,g,h);}],X7,0,C,[BT],4,3,0,0,0,H1,0,C,[Cl],0,3,0,G$,
["Tf",Buo(S9),"a1G",Buq(AAH),"HN",Buo(ANN),"gz",Bun(ARu),"lw",Bun(AVr),"m0",Bun(AX8),"mg",Bun(A1q),"bk",Bun(ATY),"bh",Bun(AXA),"lz",Bun(BhQ),"cJ",Bun(A9g),"sw",Bun(Bec),"W1",Bun(APJ),"S3",Bun(Be5),"OC",Bun(BfS),"MB",Bun(A$A),"Cs",function(b,c,d,e,f,g,h){A$S(this,b,c,d,e,f,g,h);},"QG",function(b,c,d,e,f,g,h,i,j){A0a(this,b,c,d,e,f,g,h,i,j);}],Jw,0,B9,[],0,3,0,ALd,0,Fx,0,Fn,[],0,3,0,0,0,AK8,0,C,[BT],0,3,0,0,0,AK7,0,C,[BT],0,3,0,0,0]);
$rt_metadata([TQ,0,C,[Ii],0,3,0,0,["b",Bun(Bgh)],TO,0,Kn,[],0,3,0,0,["Zr",Buo(AEb),"b",Bun(Bk4),"J7",Buo(A3s)],N9,0,C,[],3,3,0,0,0,Jh,0,C,[N9],0,3,0,0,["a4G",Bur(A9L),"A1",Bun(A6b),"Dc",Bun(A9M),"WW",Bun(AW_),"I8",Bun(Bb_),"bk",Bun(AWg),"bh",Bun(A93),"gz",Bun(ASF),"Xa",Bun(A7m),"sD",Bun(ARM),"T_",Bun(BeM),"Ll",Buo(A$j)],TI,0,CQ,[],0,0,0,0,0,TJ,0,CQ,[],0,0,0,0,0,X$,0,Gj,[],0,3,0,0,["R",Buo(ASZ)],RD,0,B9,[],0,3,0,IE,0,M2,0,C,[],0,3,0,0,0,AIB,0,C,[LH],0,0,0,0,["b",Bun(A7A),"np",Buo(BgF),"DS",Buo(A2d)],AJj,0,C,
[],0,3,0,0,["b",Bun(AP0)],ABj,0,C,[GM],0,3,0,0,["X7",Buo(APc),"mK",Buo(AVe),"p$",Buo(A5u),"mt",Buo(A5P),"i6",Bur(AOO),"iA",Bur(A1j),"jZ",Buq(AS_),"ox",Bup(A22),"qd",Bup(Ber)],M1,0,C,[],3,3,0,0,0,Wk,0,C,[M1],0,3,0,0,["YO",Bur(Bat),"X9",function(b,c,d,e,f){Xz(this,b,c,d,e,f);},"Wy",Bup(AQO),"Cf",Bur(A2N),"u",Buo(A7_),"s",Buq(Bd8),"dC",Bun(Bjv),"M",Bun(APV),"hC",Bun(AS4),"on",Bun(ASL)],KT,0,CW,[],0,3,0,BDO,0,AKw,0,Gw,[],0,3,0,0,["a3E",Buq(AMZ),"a0h",Buo(APF),"EL",Bun(A9A),"tB",Buq(Blc),"gh",Bun(AUv)],ZJ,0,C,[],
4,3,0,0,0,AAq,0,Fg,[],0,0,0,0,["mn",Buq(Blf),"e",Buq(AXT)],AKN,0,C,[],0,0,0,0,["b",Bun(AWF),"Kv",Bur(A6q)],AKh,0,C,[],0,3,0,0,0,I$,0,Bs,[],0,3,0,0,0,YH,0,F5,[],0,3,0,0,0,AG$,0,BD,[],0,0,0,0,0,Tp,0,Fq,[],4,3,0,0,["b",Bun(ANS),"GS",Buo(A5G),"BD",Buo(A7r)],AG9,0,Gt,[],0,0,0,0,0,Ug,0,U,[],0,3,0,0,["n7",Buo(A_K)],AG_,0,BD,[],0,0,0,0,0,ALe,0,C,[],4,3,0,0,0,ABc,0,C,[],0,3,0,0,["b",Bun(Bhj),"M9",Buo(A8r),"Wz",Buq(A7E),"SP",Bun(BkW),"IG",function(b,c,d,e,f,g){return BiA(this,b,c,d,e,f,g);},"WJ",Bup(BeH),"RO",Bur(AQd)],QY,
0,C,[],3,3,0,0,0,AHf,0,Ca,[],0,0,0,0,["IV",Buo(A$n),"bR",Bup(ARv),"cL",Buq(A8f),"cQ",Bur(Ban),"v",Bun(AZd),"cl",Buo(AUo),"T4",Buq(BjO),"QR",Buq(BiS),"xL",Bup(AUN)],EC,0,C,[],0,3,0,J6,0,KQ,0,CF,[],0,3,0,0,0,V9,0,KQ,[],0,3,0,0,0,DI,"ReflectionException",9,Cs,[],0,3,0,0,["j3",Bup(EL)],Hs,0,Df,[],0,0,0,0,["hd",Buq(Pv),"e",Buq(Biz),"T",Buo(Bj_)],ABN,0,C,[],0,3,0,0,0,AJ$,0,Ef,[],0,3,0,0,0,Uk,0,Ca,[],0,0,0,0,["qK",Buo(AYG),"bR",Bup(BcB),"v",Bun(A8F)],AJY,0,C,[M7],0,3,0,0,0,AGK,0,C,[H9],0,3,0,0,0,V8,0,C,[BT,FG],0,3,
0,0,0,AG8,0,Cy,[],0,3,0,0,0,WZ,0,BD,[],0,0,0,0,0,O4,0,E2,[IG],0,3,0,0,0,WY,0,BD,[],0,0,0,0,0,ADX,0,C,[],4,3,0,0,0,Ol,0,BF,[],0,3,0,Bqc,["bI",Buo(ABe)],HO,0,C,[],0,3,0,D5,["bZ",Buo(AJ3)],HZ,0,C,[BT,Cz],0,3,0,BmJ,["bI",Buo(YS),"a2i",Bun(BaL)]]);
$rt_metadata([AG6,0,C,[],0,3,0,0,0,ABW,"NoSuchElementException",16,Bs,[],0,3,0,0,["b",Bun(BeD),"bZ",Buo(Bcf)],LR,0,C,[],0,3,0,Bsl,0,AKE,0,Cy,[],0,3,0,0,0,X4,0,C,[],3,3,0,0,0,ALq,0,Hn,[],0,0,0,0,["gl",Bup(BjV),"e",Buq(AQX),"cL",Buq(A20),"cQ",Bur(AN9),"cl",Buo(Bem),"v",Bun(Bj6)],PB,0,C,[Cd],3,3,0,0,0,ADJ,0,DY,[],0,0,0,0,["a4I",Bur(BgC),"e",Buq(AZo),"cL",Buq(ANq),"v",Bun(BhV)],XB,0,FZ,[],4,3,0,0,0,K7,0,C,[],4,3,0,AMC,0,CZ,0,Bc,[],12,3,0,Io,["Yt",Bun(Gs)],AHY,0,C,[],0,3,0,0,0,FH,0,Bc,[],12,3,0,BrC,0,Zl,0,D1,[],
0,3,0,0,0,HQ,0,BF,[],0,3,0,AVl,["bI",Buo(YV),"b",Bun(Q1)],AKq,0,HQ,[],0,3,0,0,["a16",Buo(Bf9),"Xj",Buo(A2C),"MV",Buo(AXz)],FL,0,C,[Cl],0,3,0,ABG,["Nz",Bup(ABK),"Ne",Bun(AVg),"oO",Bun(BiQ),"po",Bun(BjW),"Eh",Bup(Bdo),"t3",Bup(BbE),"G2",Bup(Bah),"k8",Bup(A0B),"J$",Buq(AN2),"j$",Bur(AP2),"Bt",function(b,c,d,e,f){A1a(this,b,c,d,e,f);},"Dr",Bur(A2S),"xT",Bup(A_i),"Nn",Buq(A7q),"KX",Bup(AWB),"CL",Buq(Beu),"Mi",Bup(Bj8),"QM",Buq(ASz),"VY",Bur(A8i),"uE",Bup(ANj),"PH",Bup(BgK),"nL",function(b,c,d,e,f,g){Blw(this,b,c,
d,e,f,g);},"d9",Bun(A7z),"E_",Buo(APs),"v9",Buo(Bdh),"mW",Buo(BgI),"mZ",Buo(APk)],EN,0,Bc,[],12,3,0,Hb,0,ACw,0,X,[],0,0,0,0,["a31",Buo(Bl0),"r",Buo(ARF)],Vj,0,Hq,[],0,3,0,0,["b",Bun(AQl),"eT",Bun(A99),"r5",Buo(Bma)],JN,0,C,[I7],0,3,0,0,["n1",Bup(A9$),"R",Buo(AKQ),"g9",Bun(AUx),"lk",Bun(A6Y),"w4",Buq(AYy),"wK",Bun(A5$),"d9",Bun(Bkp),"HX",Bun(BhG)],U$,0,JN,[],0,3,0,0,["R",Buo(BfP)],AI8,0,Cw,[],0,3,0,0,0,ADi,0,C,[],0,3,0,0,0,ADK,0,X,[],0,0,0,0,["KI",Buq(A4G),"r",Buo(A1e)],ADR,0,X,[],0,0,0,0,["lh",Bur(A_V),"r",
Buo(AM6)],ADM,0,X,[],0,0,0,0,["o9",Bup(ANk),"r",Buo(BhA)],ADL,0,X,[],0,0,0,0,["KI",Buq(ANw),"r",Buo(BdM)],ADN,0,X,[],0,0,0,0,["o9",Bup(ANu),"r",Buo(ATS)],O0,0,C,[],0,3,0,0,0,ADU,0,X,[],0,0,0,0,["si",Buq(ARB),"r",Buo(A95)],ADQ,0,X,[],0,0,0,0,["lh",Bur(ANZ),"r",Buo(A$M)],ADO,0,X,[],0,0,0,0,["o9",Bup(A6j),"r",Buo(AXf)],Rf,0,C,[Cd],3,3,0,0,0,Us,0,B4,[],4,0,0,0,["LU",Buo(AQP),"e",Buq(BfI),"v",Bun(A9V),"T",Buo(BhU),"jT",Bun(AM4),"bc",Buo(A4_)],ADS,0,X,[],0,0,0,0,["si",Buq(BaC),"r",Buo(A24)],Dk,0,C,[Cz],0,3,0,Bg,0,Su,
0,Ca,[],0,0,0,0,["ps",Buo(A0M),"bR",Bup(ANP),"v",Bun(AUH)],En,0,Ca,[],0,0,0,0,["R",Buo(A49),"bR",Bup(Bhu),"cL",Buq(Be_),"cQ",Bur(AQc),"v",Bun(Bkb),"u$",Bun(A6o),"cl",Buo(Bha)],Yj,0,C,[Cd],1,3,0,0,0,AAK,0,Cy,[],0,3,0,0,0,XV,0,C,[],0,3,0,0,["b",Bun(BgM)],AMz,0,C,[CM],0,3,0,0,0,YZ,0,C,[BT,FG],0,3,0,0,0,Q3,0,C,[],32,0,0,BnV,0,Y4,0,C,[CM],0,3,0,0,["R",Buo(A1d),"kN",Bup(V1),"fk",Buo(ATL),"Qy",Bup(BaQ),"p",Buo(A5p),"nO",Buo(Bkc),"J0",Bup(A4Z)],AK$,0,Ea,[],0,3,0,0,["k9",Buo(AR3),"od",function(b,c,d,e,f,g,h){return A05(this,
b,c,d,e,f,g,h);}],ZT,0,EV,[],0,3,0,0,["b",Bun(AOm),"UZ",Bun(AXL),"P8",Bun(BjU),"g1",Bun(AQ4),"wf",Bun(AYi)],L8,0,C,[BT],0,3,0,A0H,["JU",Bur(AFP),"b",Bun(WJ),"oV",Bur(ASm),"Vu",Buo(AXH),"zf",Bup(A$u),"wz",Bun(BeU),"OG",Bun(AX1),"OZ",Buo(Bdi),"FT",Bun(Blq),"O2",Bur(AOr),"OR",Bur(A2G)],O3,0,D0,[],0,3,0,BEG,0]);
$rt_metadata([AHV,0,E5,[],0,3,0,0,0,Fc,0,C,[],4,3,0,A$$,0,Xb,0,X,[],0,0,0,0,["YR",Buo(A_3),"r",Buo(A_S)],ACS,0,GR,[],0,0,0,0,["ge",function(b,c,d,e,f,g){Bdu(this,b,c,d,e,f,g);},"xY",Buo(A94),"sV",Bup(A9e)],ALi,0,BL,[],4,0,0,0,["R",Buo(Bai),"e",Buq(AWe),"bc",Buo(Bae),"v",Bun(AW0)],ED,0,Bc,[],12,3,0,MF,0,AA2,0,BX,[],0,3,0,0,0,Q8,0,C,[],32,0,0,BEO,0,AA6,0,Ca,[],0,0,0,0,["ps",Buo(BeX),"bR",Bup(A5X),"v",Bun(BfY)],Ji,0,B9,[],0,3,0,Beb,0,AIS,0,G1,[],0,0,0,0,0,Vh,0,DH,[],0,3,0,0,["b",Bun(A90),"mO",Bun(Bln),"nI",Bun(Bir)],FR,
0,Bc,[],12,3,0,A56,["JZ",Bun(I1)],AMP,0,C,[],0,3,0,0,0,PQ,0,C,[],3,3,0,0,0,AEv,0,C,[PQ,Ii],0,3,0,0,["b",Bun(A36),"LE",Bup(Bau),"ND",Bup(A$e),"c8",Bup(Bh9)],Wo,0,Ke,[],0,3,0,0,0,FC,0,Df,[],0,0,0,0,["HL",function(b,c,d,e,f){KC(this,b,c,d,e,f);},"e",Buq(Bl_),"v",Bun(A3z)],Ow,0,FC,[],0,0,0,0,["HL",function(b,c,d,e,f){Yd(this,b,c,d,e,f);},"e",Buq(A7o)],ADo,0,KU,[EK,BT,Ok],0,3,0,0,["b",Bun(ATa),"R",Buo(Sv),"hu",Buo(A7s),"p",Buo(Bhq),"cY",Bun(Bf_),"iO",Buo(A3v),"Qg",Bup(Bb9),"nO",Buo(A0Y)],SN,0,CA,[],0,0,0,0,["lL",
Buo(ANb),"c5",Bup(AU1),"cV",Buo(Baq)],AGj,"IllegalMonitorStateException",21,Bs,[],0,3,0,0,["b",Bun(Bdy)],SI,0,CA,[],0,0,0,0,["lL",Buo(Blr),"c5",Bup(AOs),"cV",Buo(Bfu)],SJ,0,CA,[],0,0,0,0,["lL",Buo(AVA),"c5",Bup(A2n),"cV",Buo(Bik)],Mj,0,C,[],32,0,0,BoZ,0,AIV,0,Bt,[],4,0,0,0,0,SF,0,C,[GO],0,0,0,0,["lL",Buo(A9m),"c2",Buo(A_p),"ir",Buo(BgX)],SG,0,C,[GO],0,0,0,0,["lL",Buo(APh),"c2",Buo(BlY),"ir",Buo(A4f)],IB,0,C,[],1,3,0,0,["b",Bun(TP)],SK,0,CA,[],0,0,0,0,["lL",Buo(A60),"c5",Bup(A1o)],AGg,0,Hs,[],0,0,0,0,["hd",Buq(AZt),
"e",Buq(AP8)],AIU,0,Bt,[],4,0,0,0,["b",Bun(A8n)],UX,0,C,[],4,3,0,0,0,AI0,0,Bt,[],4,0,0,0,["b",Bun(BiH)],AIW,0,Bt,[],4,0,0,0,0,AIT,0,Bt,[],4,0,0,0,0,AIZ,0,Bt,[],4,0,0,0,["b",Bun(AZU)],AI3,0,Bt,[],4,0,0,0,["b",Bun(AXC)],AHS,0,C$,[],4,3,0,0,0,OV,0,C,[],0,0,0,Br2,0,AI1,0,Bt,[],4,0,0,0,["b",Bun(BiU)],AIY,0,Bt,[],4,0,0,0,["b",Bun(AVD)],Q_,0,C,[],3,3,0,0,0,Wd,0,C,[Q_],0,3,0,0,["b",Bun(BbS),"xD",Bup(APS),"oy",Bup(BeR)],ADB,0,BL,[],0,0,0,0,["b",Bun(BlR),"e",Buq(AWa),"v",Bun(Bf7),"bc",Buo(Bgf)],ABA,0,Hl,[],0,3,0,0,["uS",
Bup(AUz)],Mp,0,FC,[],0,0,0,0,["HL",function(b,c,d,e,f){Yf(this,b,c,d,e,f);},"e",Buq(AUX)],AG3,0,E9,[],0,3,0,0,0,DF,0,Bc,[],12,3,0,Uy,["JZ",Bun(FT)],AEc,0,X,[],0,0,0,0,["XW",Buo(BdF),"r",Buo(Bj1)]]);
$rt_metadata([Xr,0,E9,[],0,3,0,0,0,Lk,"NoSuchMethodException",21,D_,[],0,3,0,0,["b",Bun(Bb5)],AIk,0,Hh,[],0,0,0,0,["ge",function(b,c,d,e,f,g){A$2(this,b,c,d,e,f,g);},"rO",Buo(A16),"ph",Bup(AO9)],XK,"NullPointerException",21,Bs,[],0,3,0,0,["bZ",Buo(BiD),"b",Bun(AQz)],AE8,0,X,[],0,0,0,0,["XE",Buo(ATt),"r",Buo(Bg0)],ON,0,Fn,[],0,3,0,0,0,AGO,0,C,[],4,3,0,0,0,Vr,0,Ba,[],0,0,0,0,["b",Bun(BhD),"X",Bun(AYw)],RR,"PatternSyntaxException",17,CH,[],0,3,0,0,["Ym",Buq(ACZ),"n9",Bun(BkX)],FA,0,Bc,[],12,3,0,KG,["a1H",Bun(SM)],AAh,
0,Ba,[],0,0,0,0,["b",Bun(AQV),"X",Bun(A$g)],Ju,0,B9,[],0,3,0,ATU,0,EW,0,Bc,[],12,3,0,Qo,0,QS,0,C,[],0,3,0,0,0,AHj,0,E1,[],0,3,0,0,0,Yu,0,D0,[],0,3,0,0,0,Im,0,C,[CM],0,3,0,AKf,["b",Bun(AAf),"R",Buo(Tc),"kN",Bup(LA),"je",Buo(A9b),"i2",Buo(Ba0),"z",Bup(A1r),"V",Buo(A8s),"t0",Buo(AWX),"J",Bun(A7f),"c_",Buo(Bj2),"iH",Buo(AEn)],AGJ,0,C,[BT],4,3,0,0,["Z3",Buo(GY),"a1o",Bup(PD),"Z$",Buo(ACY),"a0Y",Bun(K4),"a2$",Bun(ACJ),"a1D",Bun(ALt),"a3N",Bun(YB)],K$,0,DZ,[],0,3,0,0,0,US,0,Hs,[],0,0,0,0,["hd",Buq(A2o),"e",Buq(AVT),
"T",Buo(Bfi)],AIG,0,U,[],4,0,0,0,["b",Bun(Bkk)],AHu,0,BD,[],0,0,0,0,0,AIH,0,U,[],4,0,0,0,["b",Bun(Bfj)],Gm,0,C,[BT,FG],0,3,0,Bpy,["b",Bun(Qj),"d",Bun(AYp),"bl",Bun(APd),"y",Buo(Bgr)],AII,0,U,[],4,0,0,0,["b",Bun(AWV)],AID,0,U,[],4,0,0,0,["b",Bun(Bbf)],AIE,0,U,[],4,0,0,0,["b",Bun(BjR)],Ut,0,C,[],0,3,0,0,0,AJg,0,C,[Rf],0,0,0,0,["a0k",Buo(AU7),"MR",Bun(A5W),"a0i",Bun(ATc)],AJd,0,LM,[],0,0,0,0,["a3L",function(b,c,d,e,f){A2U(this,b,c,d,e,f);}],AAa,0,C,[FG],0,3,0,0,0,YA,0,FP,[],0,3,0,0,["b",Bun(Bkq),"KB",Buo(A77)],Tb,
0,C,[],0,3,0,0,0,N4,0,C,[],0,3,0,0,0,ALH,0,Fb,[Cl],0,3,0,0,0,X8,0,Hp,[],0,3,0,0,0,NG,0,C,[],0,3,0,0,["b",Bun(A$_),"Vo",Bur(Baf)],Ku,0,X,[],0,0,0,0,["R",Buo(Yo),"r",Buo(AZg)],AHn,0,Ku,[],0,0,0,0,["R",Buo(AX_),"r",Buo(BiG)],ACO,0,C,[],4,3,0,0,["a34",Bup(Bcl),"j",Bun(JW),"CA",Buo(ZO),"sx",Bun(AAb),"ZX",Bun(Zw)],Vq,"UnmappableCharacterException",19,EY,[],0,3,0,0,["R",Buo(BbR),"n9",Bun(ARH)],ZQ,0,C,[],0,3,0,0,["b",Bun(ANd)],ABn,0,Fl,[],0,0,0,0,["Bh",Bup(Bbx)],O1,0,Iy,[],0,3,0,0,0,Un,0,DU,[],0,3,0,0,0,Xd,0,X,[],0,
0,0,0,["a1h",Buo(A63),"r",Buo(AON)],AFH,0,Ba,[],0,0,0,0,["b",Bun(AOf),"X",Bun(AR5)],GD,0,Bc,[],12,3,0,Ig,0,Fw,0,Bc,[],12,3,0,GX,0,Wr,0,Dr,[],1,3,0,0,0]);
$rt_metadata([QJ,0,D8,[Cz],0,3,0,RF,0,Na,0,Ie,[],0,3,0,Bk$,["b",Bun(AG5),"jE",Bun(AP9),"bI",Buo(W4)],Zh,0,C,[],0,0,0,0,["R",Buo(AVB),"pV",Bup(AUU),"bG",Buo(BdV)],XP,0,CW,[],0,3,0,0,0,O7,0,Il,[],0,3,0,APz,["Y1",Buo(X2),"bI",Buo(AJp)],AKu,0,Ba,[],0,0,0,0,["b",Bun(A7U),"X",Bun(Bfp)],DQ,0,Bc,[],12,3,0,AER,0,ADv,0,E5,[],0,3,0,0,0,Wi,0,C,[],0,3,0,0,["M0",Bun(A0x),"BH",Bun(Bhl),"bZ",Buo(AOS)],AEZ,0,X,[],0,0,0,0,["Zx",Buo(A35),"r",Buo(Bea)],Ub,0,X,[],0,0,0,0,["YK",Bup(A4b),"r",Buo(AWI),"d",Bun(BaA)],AB$,0,Df,[],0,0,
0,0,["hd",Buq(A2m),"e",Buq(A9X)],Tl,0,C8,[],0,3,0,0,0,DG,0,B9,[],0,3,0,CN,["yf",Buo(LG),"a0d",Bup(Mq),"a3O",function(b,c,d,e,f){Rc(this,b,c,d,e,f);},"Zg",Buo(AIz),"qV",Bun(ATV),"bl",Bun(A3N)],T$,0,X,[],0,0,0,0,["o9",Bup(BhL),"r",Buo(AQ5)],T_,0,X,[],0,0,0,0,["o9",Bup(AXO),"r",Buo(Bab)],Ua,0,X,[],0,0,0,0,["lh",Bur(ARg),"r",Buo(Bmq)],UB,0,X,[],0,0,0,0,["lh",Bur(A_7),"r",Buo(ATX)],Uc,0,X,[],0,0,0,0,["lh",Bur(A$U),"r",Buo(A8B)],Ud,0,X,[],0,0,0,0,["lh",Bur(AN5),"r",Buo(AZT)],Ue,0,X,[],0,0,0,0,["si",Buq(AYX),"r",Buo(AVH)],T9,
0,X,[],0,0,0,0,["si",Buq(BdW),"r",Buo(Bjb)],QB,0,Fx,[],0,3,0,0,0,AHW,0,F_,[GZ],0,3,0,0,["R",Buo(AVY),"b",Bun(Bk5),"gL",Buo(I),"c",Buo(ANT),"t",Buo(V),"ST",Buo(Qp),"co",Buo(Jv),"a3R",Buo(P7),"bv",Buo(Bp),"NH",Buq(ARj),"sY",Buo(Biv),"ZQ",Buo(ADq),"OY",Bup(A_M),"Wt",Bup(BiP),"KN",Bup(AVb),"Qr",Bur(Bhf),"UY",Bup(Bls),"Km",Bup(Be9),"PU",Bup(AYP),"Rf",Bup(A3A),"IW",Buo(A2a),"Kw",Bup(BcO),"c0",Bup(Bkt),"wX",Buo(BcX),"rd",Bur(ASs),"es",Bup(Bho),"w8",Bur(BcE),"wg",Buq(ARW),"j",Bun(A8m),"d",Bun(P),"hu",Buo(AWs),"Ao",
Bup(AWA),"zJ",Bup(Ben),"xK",Bup(BdI),"DY",Bup(A1B),"Gv",Bup(BaX),"HF",Bup(AQy),"l6",Bup(A5t)],ALo,"ConcurrentModificationException",16,Bs,[],0,3,0,0,["b",Bun(A5b)],S4,0,C,[Ll],0,0,0,0,["b",Bun(AWl)],Mu,0,I3,[],0,3,0,BoQ,["bI",Buo(AJC),"nC",Buo(AWO)],YQ,0,E7,[],0,3,0,0,0,S3,0,C,[Ib],0,0,0,0,["b",Bun(A8N)],AJn,0,C,[Rd],0,3,0,0,["b",Bun(AWE)],ACR,0,Le,[],0,3,0,0,0,AI9,0,BX,[],0,3,0,0,0,ABZ,0,Ha,[],0,3,0,0,0,MN,0,C,[CM,Cz],4,3,0,0,["XA",Buo(Beh),"a32",Buo(EX),"cY",Bun(Dp),"YI",Buo(CU),"y",Buo(Rw),"Re",Bun(K0),"a2d",
Bun(Rq)],AMN,0,C,[Cl],0,3,0,0,["a3a",Buq(AAg),"b",Bun(Blh),"tg",Buo(BeN),"dC",Bun(BbJ),"M",Bun(Bid),"GE",Bup(A2v)],T2,0,C,[],0,3,0,0,0,S$,0,C,[BT],0,3,0,0,0,Q5,0,C,[],0,3,0,0,0,ZS,0,Ba,[],0,0,0,0,["b",Bun(APp),"X",Bun(ASu)],Hy,"GlyphLayout",14,C,[Dz],0,3,0,Ec,["b",Bun(AL9),"a4l",Bup(T3),"Ze",function(b,c,d,e,f,g){Zd(this,b,c,d,e,f,g);},"a2J",function(b,c,d,e,f,g,h,i,j){AKg(this,b,c,d,e,f,g,h,i,j);},"RS",Bup(Bic),"U9",function(b,c,d,e,f,g){BdT(this,b,c,d,e,f,g);},"rq",function(b,c,d,e,f,g,h,i,j){ARp(this,b,c,
d,e,f,g,h,i,j);},"ea",Bun(Bi8),"d",Bun(AYV)],Gy,0,Bc,[],12,3,0,Xp,0,Nt,0,C,[],0,3,0,0,0,AJc,0,F6,[],0,0,0,0,0,Pa,0,C,[],0,3,0,0,["b",Bun(BlA),"VZ",Bun(Bjg),"Uw",Bun(A0N),"GY",Buo(APY),"B9",Buo(Bhx),"J1",Bun(A52),"Nq",Bun(Bg5),"WA",Buo(AWH),"MG",Buo(AOI),"SC",Bup(AZC),"Jt",Buo(Bcb),"tH",Bun(BdK),"Aa",Bun(Bkd),"xG",Bun(A_r),"Sf",Buo(BhH)],Ve,0,CI,[],0,0,0,0,0,AE6,0,C,[],0,3,0,0,0,Sw,0,C,[],0,3,0,0,0,ACK,0,Gv,[EK],0,0,0,0,["gl",Bup(AVf),"j5",Bun(Baz),"jx",Bun(BjJ),"d",Bun(Bfe)],ACx,0,X,[],0,0,0,0,["a08",Buo(A1P),
"r",Buo(A74)],N8,0,IJ,[],0,3,0,AQ1,["b",Bun(XQ),"jE",Bun(AOi),"bI",Buo(AMd)]]);
$rt_metadata([AE5,0,C,[],4,0,0,0,0,G7,0,Bc,[],12,0,0,Qx,0,Lp,0,C,[M0,Fr],0,3,0,0,["YP",Bup(AE4),"dp",Bun(AGU),"OL",Buo(Bb6),"tY",Bun(Bdr),"xD",Bup(AYN),"oy",Bup(A4u),"xz",Bun(BkO),"RP",Buo(AQe),"UO",Buo(A40),"K3",Buo(AVG),"JS",Buo(Bbo),"TU",Buo(BdU),"Ly",Buo(Bbn)],YI,0,Eg,[],0,3,0,0,0,TZ,0,X,[],0,0,0,0,["a4e",Buo(AXr),"r",Buo(AZc)],AF_,0,Da,[],0,0,0,0,["mn",Buq(A5H),"e",Buq(AZk)],AHM,0,C,[],0,3,0,0,["b",Bun(A2D)],AFL,0,C,[],4,3,0,0,0,ABT,0,C,[FG],0,3,0,0,0,AKM,0,C$,[],4,3,0,0,0,JS,0,C,[Cl],0,3,0,Jg,["a3F",Bur(ALC),
"a0L",Bur(AFR),"a1l",function(b,c,d,e,f){Qs(this,b,c,d,e,f);},"Zn",function(b,c,d,e,f){RZ(this,b,c,d,e,f);},"yc",Buq(A0q),"Tv",Buo(AQL),"UU",Buq(AUY),"g9",Bun(AR$),"hC",Bun(BkV),"on",Bun(A3w),"z6",Bun(BiO),"Ps",Buo(ARE),"i0",Bup(A1F),"ON",Buo(Bio),"hl",Bup(AOU),"Oz",Bup(A_R),"Tx",Bur(A5E),"wM",function(b,c,d,e,f){Beo(this,b,c,d,e,f);},"kJ",Buo(BfN),"fq",Bun(A92),"DU",Bun(AV6)],ADw,0,C,[CM],0,3,0,0,0,VZ,0,C,[Cd],4,3,0,0,0,ALE,0,BL,[],0,0,0,0,["b",Bun(AVm),"e",Buq(BfU),"bc",Buo(A5S),"v",Bun(ATO)],AJU,0,C,[CM],
0,3,0,0,["b",Bun(Bde),"kN",Bup(AGu),"je",Buo(AXo),"i2",Buo(A91),"g$",Bup(A1G),"v0",Bup(A8X),"iH",Buo(AAl)],AMG,0,C,[Qg],0,0,0,0,["BQ",Buo(A1M),"P6",Buq(A$Q),"a2c",Buq(BgQ)],QH,0,C,[Cd],3,3,0,0,0,AMD,0,C,[QH],0,0,0,0,["BQ",Buo(BjA),"Mf",function(b,c,d,e,f){BeE(this,b,c,d,e,f);},"a1r",function(b,c,d,e,f){return AYs(this,b,c,d,e,f);}],ALP,0,FB,[],0,0,0,0,["y9",Bup(Bbz),"a26",function(b,c,d,e,f,g,h){S2(this,b,c,d,e,f,g,h);},"CA",Buo(ANm),"W4",Bun(AXp),"ck",Bun(A2$),"yO",Bun(BlK),"U$",Buo(BiV),"Qa",Bup(ATs),"BO",
Bun(A5j),"u6",Bun(AX7)],AMF,0,C,[Ru],0,0,0,0,["BQ",Buo(BaI),"Nx",Bun(AXv),"a1_",Bun(AT6)],OT,0,C,[BT],0,3,0,0,["a1u",Bup(ATy),"jj",Buq(Bdl)],ACV,0,C,[],0,3,0,0,["b",Bun(Bi_)],NJ,0,C,[],3,3,0,0,0,Ia,0,C,[],0,3,0,AVx,["b",Bun(ACP),"Ef",Buo(BfJ)],Qy,0,C,[BT],0,3,0,Bsk,["Sm",Bup(ALN)],AKG,0,CQ,[],0,0,0,0,0,AH8,0,C,[Q2,GO],0,3,0,0,["a4D",Buo(AZA),"c2",Buo(BiY),"ea",Bun(AU9),"hE",Buq(AUK),"k1",Bup(AWG),"k2",Bup(A1n),"lt",Bup(BaV),"lc",Bup(A0X),"Rj",Buo(A6m),"lN",Bun(Bmg),"Ck",Buo(ASr),"uB",Bun(AYK),"ir",Buo(AOj)],AK6,
0,BU,[],0,3,0,0,0,AKH,0,CQ,[],0,0,0,0,0,Vz,"BufferUnderflowException",19,Bs,[],0,3,0,0,["b",Bun(BkP)],AJB,0,C,[],0,3,0,0,0,ABQ,0,C,[PB],0,0,0,0,["YV",Bup(AZ4),"Mb",Bun(Bgd),"K4",Bun(Bgt),"a0j",Bun(Bam),"XO",Bun(Bb3)],AA7,0,Bt,[],4,0,0,0,["b",Bun(A7k)],AA8,0,Bt,[],4,0,0,0,["b",Bun(AUe)],AA9,0,Bt,[],4,0,0,0,["b",Bun(A3f)],AA$,0,Bt,[],4,0,0,0,["b",Bun(A1p)],Y3,0,BD,[],0,0,0,0,0,AA_,0,CI,[],4,0,0,0,["b",Bun(Bax)],AGe,0,C,[],0,3,0,0,["b",Bun(Bhg),"hF",Bun(ANE),"Mv",Bun(A7O),"Wh",Buo(A7n),"N_",Bun(AQq),"S1",Bup(Bi1),
"O4",Bur(AUG),"Pn",Bur(A3R),"FY",function(b,c,d,e,f){return A2y(this,b,c,d,e,f);},"OQ",function(b,c,d,e,f,g){return BdL(this,b,c,d,e,f,g);}],Nz,0,C,[],3,3,0,0,0,ALc,0,C,[Cd],1,3,0,0,0,PO,0,C,[],0,3,0,0,0,AB0,0,Kz,[],0,3,0,0,["YA",Bup(U6),"Ow",Buo(APT),"i6",Bur(AUS),"iA",Bur(BbF),"MX",Buq(A$E),"jZ",Buq(AU4),"qd",Bup(A3q),"Cg",Buo(BdG),"SG",Buo(A3t),"mK",Buo(AOl),"p$",Buo(Bcv)],H6,0,C,[],4,3,0,0,0,AEM,0,Ba,[],0,0,0,0,["b",Bun(APP),"X",Bun(A4h)],ABo,0,C,[],0,0,0,0,["b",Bun(ANz),"xH",Buq(AXQ),"FA",Buq(AW$),"QA",
Bun(Bcw),"Xl",Bun(BgN)],AMx,0,CQ,[],0,0,0,0,["a4i",Buo(BgB),"dp",Bun(AIX)],AHK,0,C,[Ko],4,3,0,0,["Z8",Bup(AFJ),"XS",Bun(AKt),"a1c",Buo(ALg),"a2L",Buo(AMf),"Fn",Buo(Gi),"YD",Buo(Me),"a1L",Bun(F$),"mG",Buo(ABX),"qR",Buo(S8),"zn",Bun(O6),"rA",Bun(Qf),"mL",Bun(Tr),"a1C",Bup(ANc)],AAE,0,B4,[],0,0,0,0,["b",Bun(BfA),"e",Buq(A4N),"v",Bun(ARR),"T",Buo(A8L),"jT",Bun(Bft),"bc",Buo(A8I)],UN,0,C,[H9],0,3,0,0,0]);
$rt_metadata([AB_,0,Ba,[],0,0,0,0,["b",Bun(A0v),"X",Bun(A59)],PT,0,B4,[],0,0,0,0,["Z0",Bup(A6P),"T",Buo(AXg),"v",Bun(A00),"e",Buq(ANl),"cl",Buo(A8J),"bc",Buo(A2H)],Qu,0,C,[],0,3,0,0,0,T5,0,Cy,[],0,3,0,0,0,ML,"GlyphLayout$GlyphRun",14,C,[Dz],0,3,0,0,["b",Bun(Bao),"KF",Buo(A7c),"ea",Bun(AV$),"d",Bun(AOC)],PC,0,D_,[],0,3,0,0,0,Ro,0,Fx,[],0,3,0,0,0,FN,0,Bc,[],12,3,0,Bom,0,ABV,0,C,[Cl],0,3,0,0,["b",Bun(ANv),"R7",Buo(BjH)],Va,0,BL,[],0,0,0,0,["bI",Buo(AVF),"e",Buq(A8q),"bc",Buo(A8G),"v",Bun(Bl7)],I6,0,B9,[],0,3,0,
Bpj,0,AGl,0,C,[Fr],0,0,0,0,0,Tx,0,EV,[],4,0,0,0,["b",Bun(AY6)],TB,0,EV,[],4,0,0,0,["b",Bun(Ba1),"a3j",Bun(AG0),"wf",Bun(AWL)],AJQ,0,C,[],4,3,0,0,0,K6,0,D8,[Cz],0,3,0,BF3,0,Eb,0,C,[NJ],1,3,0,0,0,VU,0,Eb,[],0,0,0,0,0,VQ,0,Kh,[],0,0,0,0,0,VR,0,Eb,[],0,0,0,0,0,VS,0,Eb,[],0,0,0,0,0,VT,0,Eb,[],0,0,0,0,0,X1,0,BD,[],0,0,0,0,0,MQ,0,C,[],3,3,0,0,0,Tu,0,C,[Cd,Rm,MQ,Jf],1,3,0,0,["a3z",Bup(AW7),"a4s",Bup(AXy),"a1d",Buo(AO1),"Zs",Buq(AY7),"YG",Buo(A3B),"a2y",Bun(AQt),"a1S",Buq(ANB)],DA,0,C,[Dz],0,3,0,BGb,0,Tj,0,C,[],0,0,
0,0,0,AJS,0,BX,[],0,3,0,0,0,AAi,0,G_,[Cl],0,3,0,0,0,AJe,0,Fg,[],0,0,0,0,["mn",Buq(A_P),"e",Buq(AOP)],AJK,0,Ba,[],0,0,0,0,["b",Bun(APw),"X",Bun(AU_)],AIc,0,C,[],0,0,0,0,["a2X",Bup(ARQ),"d",Bun(AWT)],AML,0,J4,[],0,0,0,0,0,AFY,0,BX,[],0,3,0,0,0,CD,"NumberFormatException",21,CH,[],0,3,0,0,["b",Bun(A7G),"bZ",Buo(Er)],AHO,0,C,[],0,3,0,0,["a4O",Bur(AVI)],AJk,0,C,[PR],0,3,0,0,["b",Bun(ASa)],AMo,0,Dc,[],0,0,0,0,0,W2,0,Cy,[],0,3,0,0,0,AFv,0,C,[Ib,CM],0,3,0,0,["PA",Bup(AYe),"bE",Bun(Bcm),"bA",Bun(A9H)],ADu,0,C,[],0,0,
0,0,0,YN,0,Ba,[],0,0,0,0,["b",Bun(AXF),"X",Bun(A0J)],AJ1,0,Ba,[],0,0,0,0,["b",Bun(AXY),"X",Bun(A5Y)],AGy,0,C,[Dz],0,3,0,0,["b",Bun(Bmb),"ea",Bun(AZD),"dX",Bur(AWu),"pA",Bup(AWN)],AIF,0,C,[],0,3,0,0,["a4w",Bup(BjX)],AFa,0,C$,[],4,3,0,0,0,Te,0,E5,[],0,3,0,0,0,Sh,0,IB,[],0,3,0,0,["b",Bun(AAv),"Eb",Buo(AZ1),"DI",Buo(A1t),"ES",Buo(ANJ),"WE",Buo(A7t),"Js",Buo(BjZ)],LF,0,B4,[],0,0,0,0,["ps",Buo(AY0),"T",Buo(A8Z),"e",Buq(ANx),"cL",Buq(Bgv),"cQ",Bur(A0_),"v",Bun(Bll),"cl",Buo(ARy),"bc",Buo(BgH)],K2,"Table$DebugRect",
12,Gm,[],0,3,0,Bp7,["b",Bun(Yc)]]);
$rt_metadata([ADe,0,Gl,[],0,3,0,0,["DO",Bur(AOo)],AGH,0,C,[Nz],0,0,0,0,["a4t",Buo(A3Y),"pg",Buo(Bcy),"UW",Buo(A4C)],IM,0,C,[],0,3,0,0,["b",Bun(AUm),"R",Buo(Bl3),"n1",Bup(OU),"em",Buo(Bcg),"TG",Bup(Bkj),"bG",Buo(A1O),"fK",Bup(Bfa),"QC",Bun(ATB),"bQ",Bun(Bc9),"J",Bun(A_q),"LO",Bun(AYr),"Vk",Buo(AYH),"qJ",Buo(APj),"bl",Bun(AWW),"y",Buo(Bj3),"d",Bun(Bda)],Wl,0,Im,[],0,3,0,0,0,D2,0,I5,[],0,3,0,Dt,["X4",Bup(AEu),"a0n",Buq(Pg),"a25",function(b,c,d,e,f){Nb(this,b,c,d,e,f);},"a0P",Buq(PJ),"H0",Bun(A80),"xb",Buo(Beg),
"y",Buo(BgZ),"VX",Buo(A30),"GO",Bup(ARb),"Cd",Bup(Blm),"M",Bun(AOq),"MI",Buo(BcT),"OT",Bup(BdH)],Nu,0,EP,[],0,3,0,0,["b",Bun(BgS),"O1",Buo(BcS),"LA",function(b,c,d,e,f,g){return BfT(this,b,c,d,e,f,g);},"VK",function(b,c,d,e,f,g,h,i,j,k,l,m){return BkY(this,b,c,d,e,f,g,h,i,j,k,l,m);},"MQ",Buo(AV1)],QL,0,CW,[FI],0,3,0,BGY,0,Pq,"IllegalAccessException",21,D_,[],0,3,0,0,["b",Bun(BjM)],Z_,0,E7,[],0,3,0,0,0,NO,0,C,[],0,3,0,0,0,AGL,0,CI,[],0,0,0,0,0,XA,0,C,[EQ],0,3,0,0,["a0R",Buo(A53),"dp",Bun(AFt)],TC,0,C,[],3,3,
0,0,0,W5,0,BX,[],0,3,0,0,0,AIC,0,FU,[],0,3,0,0,0,AH3,0,C,[],0,3,0,0,["b",Bun(A3k),"n1",Bup(AJV),"cp",Buo(BdC),"J",Bun(A3E),"Vn",Buo(A8j),"F_",Buo(A$x)],ZL,0,C,[],4,3,0,0,0,NU,0,C,[],0,3,0,BG1,0,AGP,0,C,[],0,3,0,0,0,AH6,0,BL,[],0,0,0,0,["R",Buo(Ba7),"e",Buq(AY2),"bc",Buo(A_X),"v",Bun(AN8)],Eh,0,B9,[],0,3,0,Cq,["yf",Buo(L5),"a2B",Bup(MZ),"a0v",function(b,c,d,e,f,g,h){RP(this,b,c,d,e,f,g,h);},"a1g",Bup(AHB),"Yy",Buo(AMS),"qV",Bun(BhE),"bl",Bun(A5J)],AKm,0,C,[EQ],0,3,0,0,["Xx",Buo(AVv),"dp",Bun(AC$)],Bu,0,C,[],
0,3,0,BsQ,0,AHx,0,Ek,[],0,3,0,0,0,Vc,0,CI,[],0,0,0,0,["b",Bun(A_L)],AD7,0,CP,[],4,0,0,0,["b",Bun(Bk_),"bo",Bur(A1_)],AD4,0,CP,[],4,0,0,0,["b",Bun(A6r),"bo",Bur(AZa)],AD6,0,CP,[],4,0,0,0,["b",Bun(ANU),"bo",Bur(Bjn)],TA,0,C,[QY],0,3,0,0,0,AD2,0,CP,[],4,0,0,0,["b",Bun(A28),"bo",Bur(BeJ)],AD3,0,CP,[],4,0,0,0,["b",Bun(APH),"bo",Bur(AOD)],AD0,0,CP,[],4,0,0,0,["b",Bun(BaZ),"bo",Bur(BgY)],ZU,0,C,[Pc],4,3,0,0,["gl",Bup(Bk9),"gG",Buq(AGo),"hF",Bun(Baj),"M",Bun(AUp),"he",Buo(AO2)],AD1,0,CP,[],4,0,0,0,["b",Bun(A3e),"bo",
Bur(A3X)],AK_,0,C,[],0,3,0,0,0,ADY,0,Be,[],4,0,0,0,["b",Bun(Bfg),"bo",Bur(APO)],ADZ,0,Be,[],4,0,0,0,["b",Bun(AUE),"bo",Bur(AR9)],Xn,0,BX,[],0,3,0,0,0,AFr,0,Ba,[],0,0,0,0,["b",Bun(A4q),"X",Bun(A3P)],We,0,C,[Dz],4,3,0,0,0,RT,0,C,[],0,3,0,0,0]);
function $rt_array(cls,data){this.bj=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["Can\'t enter monitor from another thread synchronously","<java_object>@","bounces cannot be < 2 or > 5: ","Constructor not found for class: ","Security violation occurred while getting constructor for class: \'","\'.","Security violation while getting constructor for class: ","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ",
"String is null or empty","Illegal radix: ","Replacement preconditions do not hold","Action must be non-null","Disposing "," while it still has "," references.","Bullet","java.runtime.name","Android","os.name","Mac","Windows","Linux","error","Desktop","HeadlessDesktop","Applet","WebGL","iOS","CI sequence: ","listener cannot be null.","\tat ","Caused by: ","objects cannot be null.","fSet","BehindFSet","JointSet"," ","^ ","range:","<GroupQuant>","Stub","FileType \'","\' Not supported in web backend"," does not exist",
"UTF-8","Error reading file: ","","/","\\","null","false","true","Index out of bounds","New position "," is outside of range [0;","New limit ","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart",
"javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics",
"Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics",
"BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo",
"HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks",
"CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","Gdx.app not available.","AheadFSet","NonCapJointSet","PosLookaheadJointSet","NegLookaheadJointSet","loadFactor must be > 0 and < 1: ","charsetName is null","Should never been thrown","PosBehindJointSet",
"US-ASCII","-2147483648","GL_EXT_texture_filter_anisotropic","New data must have the same managed status as the old data","decomposed char:","NegBehindJointSet","Index ","ErrorLoading: ","\n",":","i","b","a","Invalid assets description file.","0","<Quant>","javaClass@","<init>","object cannot be null.","Capacity is negative: ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","The last char in src "," is outside of string of size ","Start "," must be before end ",
"mtl","GL_ARB_framebuffer_object","GL_EXT_framebuffer_object","com.badlogic.gdx.backends.lwjgl3.Lwjgl3GLES20","texture width and height must be square when using mipmapping.","Asset loaded: ","Script loaded: ","data:",";base64,","The last float in src ","Unsupported asset type ","Loading asset : ","Loading script : ","start + count must be <= size: "," + "," <= ","index can\'t be >= size: "," >= ","index can\'t be > size: "," > ","end can\'t be >= size: ","start can\'t be > end: ","Array is empty.","additionalCapacity must be >= 0: ",
"newSize must be >= 0: ","[]",", ","AtomicFSet","touchDown","touchUp","touchDragged","mouseMoved","enter","exit","scrolled","keyDown","keyUp","keyTyped","none","table","cell","actor","<MultiLine $>","Call end() before beginning a new shape batch.","begin must be called first.","Must call begin(ShapeType.",").",") or begin(ShapeType.","Class cannot be created (missing no-arg constructor): ","Unable to create new instance: ","PX","PCT","EM","EX","PT","PC","IN","CM","MM","OnPlane","Back","Front","px","GLVersion",
"OpenGL ES (\\d(\\.\\d){0,2})","WebGL (\\d(\\.\\d){0,2})","(\\d(\\.\\d){0,2})","Invalid version string: ","\\.","libGDX GL","Error parsing number: ",", assuming: ","The last short in src ","file-f:","file-d:","Can\'t have more than 8191 sprites per batch: ","a_position","a_color","a_texCoord0","attribute vec4 a_position;\nattribute vec4 a_color;\nattribute vec2 a_texCoord0;\nuniform mat4 u_projTrans;\nvarying vec4 v_color;\nvarying vec2 v_texCoords;\n\nvoid main()\n{\n   v_color = a_color;\n   v_color.a = v_color.a * (255.0/254.0);\n   v_texCoords = a_texCoord0;\n   gl_Position =  u_projTrans * a_position;\n}\n",
"#ifdef GL_ES\n#define LOWP lowp\nprecision mediump float;\n#else\n#define LOWP \n#endif\nvarying LOWP vec4 v_color;\nvarying vec2 v_texCoords;\nuniform sampler2D u_texture;\nvoid main()\n{\n  gl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n}","Error compiling shader: ","SpriteBatch.end must be called before begin.","SpriteBatch.begin must be called before end.","SpriteBatch.begin must be called before draw.","u_projTrans","u_texture","Cannot register an uniform after initialization","Already initialized",
"Malformed input of length ","NearestNeighbour","BiLinear","shininess","alphaTest","n must be positive","offset + length must be <= size: ","com/badlogic/gdx/utils/lsans-15.fnt","com/badlogic/gdx/utils/lsans-15.png","If no regions are specified, the font data must have an images path.","CI back reference: ","The specified font must contain at least one texture page.","UCI sequence: ","CompositeRangeSet:  <nonsurrogate> "," <surrogate> ","FinalSet","<Empty set>","cullface","texture cannot be null.","data/badlogic.jpg",
"ground","ID: ","\nFPS: ","\nTotal Boxes: ","\nBullet Version: ","\nInputs: Enter for fullscreen, Space to un/freeze simulation\nHold Left/Right mouse to manipulate camera","Libgdx teaVM Backend + teaVM Bullet Extension by xpenatan","HIT Body:","�","averageCharsPerByte must be positive. Actual value is ","maxCharsPerByte must be positive. Actual value is ","newAction must be non-null","enabled","disabled","childrenOnly","^","IndexBufferObject cannot be used after it has been disposed.","PreviousMatch","NonCapFSet",
"UCI ","Already loaded.","File is empty.","padding=",",","Invalid padding.","Missing common header.","Invalid common header.","lineHeight=","Missing: lineHeight","base=","Missing: base","pages=","Missing additional page definitions.",".*id=(\\d+)",".*file=\"?([^\"]+)\"?","\\\\","Missing: file","Page IDs must be indices starting at 0: ","Invalid page id: ","kernings ","metrics ","char "," =","kerning ","Error loading font file: ","No glyphs found.","UCI range:","keyboard","scroll","glGetInteger not supported by web WebGL backend",
"Can only cope with FloatBuffer, ShortBuffer and IntBuffer at the moment","glGetFloat not supported by WebGL backend","GL error: ","a_normal","Call end() first","Cannot build mesh without position attribute","Call begin() first","Mesh attributes don\'t match","Mesh can\'t hold enough vertices: "," * "," < ","Mesh can\'t hold enough indices: ","Too many vertices used","Incorrect primitive type","Can\'t invert a singular matrix","The same task may not be scheduled twice.","unable to provide a shader for this renderable",
"The last byte in dst ","The last byte in src ","<SOL>","(",")","directionalLights","Exception occurred in constructor for class: ","Illegal argument(s) supplied to constructor for class: ","Could not instantiate instance of class: ","public","protected","private","abstract","static","final","transient","volatile","synchronized","native","strictfp","interface","assets/","<EOL>","Is","In","OpenGL","GLES","NONE","main","Timer","Task failed: ","UCI back reference: ","BIG_ENDIAN","LITTLE_ENDIAN","Pixmap","Custom",
"<DotAllQuant>","Lambert","Phong","CLEAR","BLACK","WHITE","LIGHT_GRAY","GRAY","DARK_GRAY","BLUE","NAVY","ROYAL","SLATE","SKY","CYAN","TEAL","GREEN","CHARTREUSE","LIME","FOREST","OLIVE","YELLOW","GOLD","GOLDENROD","ORANGE","BROWN","TAN","FIREBRICK","RED","SCARLET","CORAL","SALMON","PINK","MAGENTA","PURPLE","VIOLET","MAROON","Couldn\'t load image \'","\', file does not exist","rgba(","environmentCubemap","Already prepared","Call prepare() before calling getPixmap()","This TextureData implementation does not upload data itself",
"blended","u_sampler","a_texCoord","u_projModelView","attribute vec4 a_position;\n","attribute vec3 a_normal;\n","attribute vec4 a_color;\n","attribute vec2 a_texCoord",";\n","uniform mat4 u_projModelView;\n","varying vec4 v_col;\n","varying vec2 v_tex","void main() {\n   gl_Position = u_projModelView * a_position;\n","   v_col = a_color;\n   v_col.a *= 255.0 / 254.0;\n","   v_tex"," = ","   gl_PointSize = 1.0;\n}\n","#ifdef GL_ES\nprecision mediump float;\n#endif\n","uniform sampler2D u_sampler","void main() {\n   gl_FragColor = ",
"vec4(1, 1, 1, 1)","v_col"," texture2D(u_sampler",",  v_tex",") *",";\n}","Comparison method violates its general contract!","fromIndex(",") > toIndex(","sequence: ","Bullet binaries version (",") does not match source version (320)","gdx-bullet","canvas","IGNORE","REPLACE","REPORT","back reference: ","<DotQuant>","COPY","copy","DESTINATION_ATOP","destination-atop","DESTINATION_IN","destination-in","DESTINATION_OUT","destination-out","DESTINATION_OVER","destination-over","LIGHTER","lighter","SOURCE_ATOP","source-atop",
"SOURCE_IN","source-in","SOURCE_OUT","source-out","SOURCE_OVER","source-over","XOR","xor","both","top","bottom","vertex shader must not be null","fragment shader must not be null","Fragment shader:\n","Vertex shader\n","An attempted fetch uniform from uncompiled shader \n","No uniform with name \'","\' in shader","Classpath","Internal","External","Absolute","Local","No buffer allocated!",".","CI ","UTF-16","UTF-16BE","UTF-16LE","Image","Audio","Text","t","Binary","Directory","pointLights","ISO-8859-1","MirroredRepeat",
"ClampToEdge","Repeat","hidden","posFSet","Nearest","Linear","MipMap","MipMapNearestNearest","MipMapLinearNearest","MipMapNearestLinear","MipMapLinearLinear","Point","Line","Filled","depthStencil","VertexArray","VertexBufferObject","VertexBufferObjectSubData","VertexBufferObjectWithVAO","key cannot be null.","Patter is null","\\Q","\\E","\\\\E\\Q","[","]","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/","==","=","Unmappable characters of length ","None","SourceOver","LOAD_ASSETS","APP_CREATE",
"APP_LOOP","Intensity","LuminanceAlpha","RGB565","RGBA4444","RGB888","RGBA8888","Invalid type specified","diffuseColor","specularColor","ambientColor","emissiveColor","reflectionColor","ambientLightColor","fogColor","attributes must be >= 1","Call end() first.","Logical","Pixels","Could not remove child from its current parent","Cannot add a parent as a child","FILL","STROKE","OS X","no OS",".html","index.html","index-debug.html","assets.txt","resize","soundmanager2-jsmin.js","bullet.wasm.js","imgui.js","box2D.wasm.js",
"Mesh attempting to access memory outside of the index buffer (count: ",", offset: ",", max: ","capacity must be >= 0: ","The required capacity is too large: ","EOI","mousedown","mouseup","mousemove","wheel","touchstart","touchmove","touchcancel","touchend","keydown","keypress","keyup","CSS1Compat","node","box","Either src or dest is null","java.version","1.8","TeaVM","file.separator","path.separator","line.separator","java.io.tmpdir","java.vm.version","user.home","/tmp","DotAll","decomposed Hangul syllable:",
"Enabled","EnabledUntilCycleEnd","Disabled","WordBoundary","spotLights","data must be a ByteBuffer or FloatBuffer","#iterator() cannot be used nested.","com/badlogic/gdx/graphics/g3d/shaders/default.vertex.glsl","com/badlogic/gdx/graphics/g3d/shaders/default.fragment.glsl","u_dirLights[0].color","u_dirLights[0].direction","u_dirLights[1].color","u_pointLights[0].color","u_pointLights[0].position","u_pointLights[0].intensity","u_pointLights[1].color","u_spotLights[0].color","u_spotLights[0].position","u_spotLights[0].intensity",
"u_spotLights[0].direction","u_spotLights[0].cutoffAngle","u_spotLights[0].exponent","u_spotLights[1].color","u_fogColor","u_shadowMapProjViewTrans","u_shadowTexture","u_shadowPCFOffset","Some attributes not implemented yet (","too many bones: ",", max configured: ","u_time","#define positionFlag\n","#define colorFlag\n","#define binormalFlag\n","#define tangentFlag\n","#define normalFlag\n","#define lightingFlag\n","#define ambientCubemapFlag\n","#define numDirectionalLights ","#define numPointLights ","#define numSpotLights ",
"#define fogFlag\n","#define shadowMapFlag\n","#define environmentCubemapFlag\n","#define boneWeight","Flag\n","#define texCoord","#define blendedFlag\n","#define diffuseTextureFlag\n","#define diffuseTextureCoord texCoord0\n","#define specularTextureFlag\n","#define specularTextureCoord texCoord0\n","#define normalTextureFlag\n","#define normalTextureCoord texCoord0\n","#define emissiveTextureFlag\n","#define emissiveTextureCoord texCoord0\n","#define reflectionTextureFlag\n","#define reflectionTextureCoord texCoord0\n",
"#define ambientTextureFlag\n","#define ambientTextureCoord texCoord0\n","#define diffuseColorFlag\n","#define specularColorFlag\n","#define emissiveColorFlag\n","#define reflectionColorFlag\n","#define shininessFlag\n","#define alphaTestFlag\n","#define numBones ","Unknown material attribute: ","<Unix MultiLine $>","diffuseTexture","specularTexture","bumpTexture","normalTexture","ambientTexture","emissiveTexture","reflectionTexture","u_viewTrans","u_projViewTrans","u_cameraPosition","u_cameraDirection","u_cameraUp",
"u_cameraNearFar","u_worldTrans","u_viewWorldTrans","u_projViewWorldTrans","u_normalMatrix","u_bones","u_shininess","u_opacity","u_diffuseColor","u_diffuseTexture","u_diffuseUVTransform","u_specularColor","u_specularTexture","u_specularUVTransform","u_emissiveColor","u_emissiveTexture","u_emissiveUVTransform","u_reflectionColor","u_reflectionTexture","u_reflectionUVTransform","u_normalTexture","u_normalUVTransform","u_ambientTexture","u_ambientUVTransform","u_alphaTest","u_ambientCubemap","u_dirLights","u_pointLights",
"u_spotLights","u_environmentCubemap","Illegal arguments"]);
B1.prototype.toString=function(){return $rt_ustr(this);};
B1.prototype.valueOf=B1.prototype.toString;C.prototype.toString=function(){return $rt_ustr(Uj(this));};
C.prototype.__teavm_class__=function(){return $dbg_class(this);};
var Long_eq;var Long_ne;var Long_gt;var Long_ge;var Long_lt;var Long_le;var Long_compare;var Long_add;var Long_sub;var Long_inc;var Long_dec;var Long_mul;var Long_div;var Long_rem;var Long_udiv;var Long_urem;var Long_neg;var Long_and;var Long_or;var Long_xor;var Long_shl;var Long_shr;var Long_shru;var Long_not;if(typeof $rt_globals.BigInt!=='function'){Long_eq=function(a,b){return a.hi===b.hi&&a.lo===b.lo;};Long_ne=function(a,b){return a.hi!==b.hi||a.lo!==b.lo;};Long_gt=function(a,b){if(a.hi<b.hi){return false;}if
(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);};Long_ge=function(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);};Long_lt=function(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);};Long_le=function(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y
=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);};Long_add=function(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo+b.lo);}else if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)+Long_toNumber(b));}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo+b_lolo|0;var lohi
=a_lohi+b_lohi+(lolo>>16)|0;var hilo=a_hilo+b_hilo+(lohi>>16)|0;var hihi=a_hihi+b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Long_inc=function(a){var lo=a.lo+1|0;var hi=a.hi;if(lo===0){hi=hi+1|0;}return new Long(lo,hi);};Long_dec=function(a){var lo=a.lo -1|0;var hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new Long(lo,hi);};Long_neg=function(a){return Long_inc(new Long(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));};Long_sub=function(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>
31){return Long_fromNumber(a.lo -b.lo);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo -b_lolo|0;var lohi=a_lohi -b_lohi+(lolo>>16)|0;var hilo=a_hilo -b_hilo+(lohi>>16)|0;var hihi=a_hihi -b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Long_compare=function(a,b){var r=a.hi -b.hi;if(r!==0){return r;}r=(a.lo>>>1) -(b.lo
>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};Long_mul=function(a,b){var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=0;var lohi=0;var hilo=0;var hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi
>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;var result=new Long(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:Long_neg(result);};Long_div=function(a,b){if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)
<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_divRem(a,b))[0];};Long_udiv=function(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[0];};Long_rem=function(a,b){if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)%Long_toNumber(b));}return (Long_divRem(a,b))[1];};Long_urem=function(a,
b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[1];};function Long_divRem(a,b){if(b.lo===0&&b.hi===0){throw new $rt_globals.Error("Division by zero");}var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return positive
?[q,a]:[Long_neg(q),Long_neg(a)];}function Long_udivRem(a,b){if(b.lo===0&&b.hi===0){throw new $rt_globals.Error("Division by zero");}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return [q,a];}function Long_shiftLeft16(a){return new Long(a.lo<<16,a.lo>>>16|a.hi<<16);}function Long_shiftRight16(a){return new Long(a.lo>>>16|a.hi<<16,a.hi>>>16);}Long_and=function(a,b){return new Long(a.lo&b.lo,a.hi&b.hi);};Long_or=function(a,b){return new Long(a.lo
|b.lo,a.hi|b.hi);};Long_xor=function(a,b){return new Long(a.lo^b.lo,a.hi^b.hi);};Long_shl=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new Long(0,a.lo);}else {return new Long(0,a.lo<<b -32);}};Long_shr=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>b);}else if(b===32){return new Long(a.hi,a.hi>>31);}else {return new Long(a.hi>>b -32,a.hi>>31);}};Long_shru=function(a,b){b&=63;if(b===
0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new Long(a.hi,0);}else {return new Long(a.hi>>>b -32,0);}};Long_not=function(a){return new Long(~a.hi,~a.lo);};function LongInt(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}function LongInt_mul(a,b){var a_lolo=(a.lo&0xFFFF)*b|0;var a_lohi=(a.lo>>>16)*b|0;var a_hilo=(a.hi&0xFFFF)*b|0;var a_hihi=(a.hi>>>16)*b|0;var sup=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>
16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;}function LongInt_sub(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -b_hihi+(a_hilo>>16)|0;var sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi
=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_add(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;var sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_inc(a){a.lo=a.lo+1|
0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}}function LongInt_dec(a){a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi=== -1){a.sup=a.sup -1&0xFFFF;}}}function LongInt_ucompare(a,b){var r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function LongInt_numOfLeadingZeroBits(a){var n=0;var d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -
n;}function LongInt_shl(a,b){if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}}function LongInt_shr(a,b){if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=
b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}}function LongInt_copy(a){return new LongInt(a.lo,a.hi,a.sup);}function LongInt_div(a,b){var bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;var sz=1+(bits/16|0);var dividentBits=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);var q=new LongInt(0,0,0);while(sz-->0){LongInt_shl(q,16);var digitA=(a.hi>>>16)
+0x10000*a.sup;var digitB=b.hi>>>16;var digit=digitA/digitB|0;var t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while(LongInt_ucompare(t,a)>0){LongInt_sub(t,b); --digit;}}else {while(true){var nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,bits+16);return q;}}else {Long_eq=function(a,b){return a===b;};Long_ne=function(a,b){return a!==b;};Long_gt=function(a,b){return a>b;};Long_ge
=function(a,b){return a>=b;};Long_lt=function(a,b){return a<b;};Long_le=function(a,b){return a<=b;};Long_add=function(a,b){return $rt_globals.BigInt.asIntN(64,a+b);};Long_inc=function(a){return $rt_globals.BigInt.asIntN(64,a+1);};Long_dec=function(a){return $rt_globals.BigInt.asIntN(64,a -1);};Long_neg=function(a){return $rt_globals.BigInt.asIntN(64, -a);};Long_sub=function(a,b){return $rt_globals.BigInt.asIntN(64,a -b);};Long_compare=function(a,b){return a<b? -1:a>b?1:0;};Long_mul=function(a,b){return $rt_globals.BigInt.asIntN(64,
a*b);};Long_div=function(a,b){return $rt_globals.BigInt.asIntN(64,a/b);};Long_udiv=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)/$rt_globals.BigInt.asUintN(64,b));};Long_rem=function(a,b){return $rt_globals.BigInt.asIntN(64,a%b);};Long_urem=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)%$rt_globals.BigInt.asUintN(64,b));};Long_and=function(a,b){return $rt_globals.BigInt.asIntN(64,a&b);};Long_or=function(a,b){return $rt_globals.BigInt.asIntN(64,
a|b);};Long_xor=function(a,b){return $rt_globals.BigInt.asIntN(64,a^b);};Long_shl=function(a,b){return $rt_globals.BigInt.asIntN(64,a<<$rt_globals.BigInt(b&63));};Long_shr=function(a,b){return $rt_globals.BigInt.asIntN(64,a>>$rt_globals.BigInt(b&63));};Long_shru=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var BE=Long_add;var Dj=Long_sub;var Bn=Long_mul;var Cx=Long_div;var GN=Long_rem;var B3
=Long_or;var Bk=Long_and;var Ex=Long_xor;var CC=Long_shl;var EG=Long_shr;var BR=Long_shru;var Boo=Long_compare;var Z=Long_eq;var DW=Long_ne;var HP=Long_lt;var DV=Long_le;var F4=Long_gt;var M6=Long_ge;var BG_=Long_not;var Bey=Long_neg;
function TeaVMThread(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}TeaVMThread.prototype.push=function(){for(var i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};TeaVMThread.prototype.s=TeaVMThread.prototype.push;TeaVMThread.prototype.pop=function(){return this.stack.pop();};TeaVMThread.prototype.l=TeaVMThread.prototype.pop;TeaVMThread.prototype.isResuming=function(){return this.status===2;};TeaVMThread.prototype.isSuspending
=function(){return this.status===1;};TeaVMThread.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};TeaVMThread.prototype.start=function(callback){if(this.status!==3){throw new $rt_globals.Error("Thread already started");}if($rt_currentNativeThread!==null){throw new $rt_globals.Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:function(result){if(result instanceof $rt_globals.Error){throw result;}};this.run();};TeaVMThread.prototype.resume
=function(){if($rt_currentNativeThread!==null){throw new $rt_globals.Error("Another thread is running");}this.status=2;this.run();};TeaVMThread.prototype.run=function(){$rt_currentNativeThread=this;var result;try {result=this.runner();}catch(e){result=e;}finally {$rt_currentNativeThread=null;}if(this.suspendCallback!==null){var self=this;var callback=this.suspendCallback;this.suspendCallback=null;callback(function(){self.resume();});}else if(this.status===0){this.completeCallback(result);}};function $rt_suspending()
{var thread=$rt_nativeThread();return thread!=null&&thread.isSuspending();}function $rt_resuming(){var thread=$rt_nativeThread();return thread!=null&&thread.isResuming();}function $rt_suspend(callback){var nativeThread=$rt_nativeThread();if(nativeThread===null){throw new $rt_globals.Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);}function $rt_startThread(runner,callback){(new TeaVMThread(runner)).start(callback);}var $rt_currentNativeThread
=null;function $rt_nativeThread(){return $rt_currentNativeThread;}function $rt_invalidPointer(){throw new $rt_globals.Error("Invalid recorded state");}main=$rt_mainStarter(BtT);
main.javaException=$rt_javaException;
(function(){var c;c=AE$.prototype;c.handleEvent=c.ir;c=VY.prototype;c.addSingleResultJS=c.a0W;c=AHR.prototype;c.prompt=c.YU;c.granted=c.a1p;c.denied=c.a4P;c=AEe.prototype;c.setWorldTransformJS=c.a3W;c=AEf.prototype;c.getWorldTransformJS=c.a2t;c=SR.prototype;c.handleEvent=c.ir;c=SS.prototype;c.handleEvent=c.ir;c=SU.prototype;c.handleEvent=c.ir;c=SW.prototype;c.handleEvent=c.ir;c=AIe.prototype;c.onTimer=c.Zh;c=VJ.prototype;c.getLength=c.a4d;c.get=c.a0J;c=N$.prototype;c.onAnimationFrame=c.Zt;c=SF.prototype;c.handleEvent
=c.ir;c=SG.prototype;c.handleEvent=c.ir;c=AJg.prototype;c.fullscreenChanged=c.a0i;c=AMG.prototype;c.drawLineJS=c.a2c;c=AMD.prototype;c.drawContactPointJS=c.a1r;c=AMF.prototype;c.getDebugFunctionJS=c.a1_;c=AH8.prototype;c.handleEvent=c.ir;c=ABQ.prototype;c.onready=c.a0j;c.ontimeout=c.XO;c=Tu.prototype;c.dispatchEvent=c.YG;c.addEventListener=c.a3z;c.removeEventListener=c.a4s;c.getLength=c.a2y;c.get=c.a1d;c.addEventListener=c.a1S;c.removeEventListener=c.Zs;})();
})(this);
