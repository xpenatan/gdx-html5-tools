"use strict";
var main;(function(){
var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,cls){return obj!==null&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i
=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_castToInterface(obj,cls){if(obj!==null&&!$rt_isInstance(obj,cls)){$rt_throwCCE();}return obj;}function $rt_castToClass(obj,cls){if(obj!==null&&!(obj instanceof cls)){$rt_throwCCE();}return obj;}Array.prototype.fill=Array.prototype.fill||function(value,start,end){var len=this.length;if(!len)return this;start=start|0;var i=start<0?Math.max(len+start,0):Math.min(start,len);end=end===undefined?len:end|0;end=end<0?Math.max(len
+end,0):Math.min(end,len);for(;i<end;i++){this[i]=value;}return this;};function $rt_createArray(cls,sz){var data=new Array(sz);data.fill(null);return new $rt_array(cls,data);}function $rt_createArrayFromData(cls,init){return $rt_wrapArray(cls,init);}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new Array(sz));}function $rt_createNumericArray(cls,nativeArray){return new $rt_array(cls,nativeArray);}var $rt_createLongArray;var $rt_createLongArrayFromData;if
(typeof BigInt64Array!=='function'){$rt_createLongArray=function(sz){var data=new Array(sz);var arr=new $rt_array($rt_longcls(),data);data.fill(Long_ZERO);return arr;};$rt_createLongArrayFromData=function(init){return new $rt_array($rt_longcls(),init);};}else {$rt_createLongArray=function(sz){return $rt_createNumericArray($rt_longcls(),new BigInt64Array(sz));};$rt_createLongArrayFromData=function(data){var buffer=new BigInt64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_longcls(),buffer);};}function $rt_createCharArray(sz)
{return $rt_createNumericArray($rt_charcls(),new Uint16Array(sz));}function $rt_createCharArrayFromData(data){var buffer=new Uint16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_charcls(),buffer);}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new Int8Array(sz));}function $rt_createByteArrayFromData(data){var buffer=new Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_bytecls(),buffer);}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),
new Int16Array(sz));}function $rt_createShortArrayFromData(data){var buffer=new Int16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_shortcls(),buffer);}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new Int32Array(sz));}function $rt_createIntArrayFromData(data){var buffer=new Int32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_intcls(),buffer);}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),new Int8Array(sz));}function $rt_createBooleanArrayFromData(data)
{var buffer=new Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_booleancls(),buffer);}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new Float32Array(sz));}function $rt_createFloatArrayFromData(data){var buffer=new Float32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_floatcls(),buffer);}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new Float64Array(sz));}function $rt_createDoubleArrayFromData(data)
{var buffer=new Float64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_doublecls(),buffer);}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};arraycls.classObject=null;arraycls.$array=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls()
{return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache
=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache
===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long","J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double",
"D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex){throw $rt_exception(ex);}var $rt_javaExceptionProp=Symbol("javaException");function $rt_exception(ex){var err=ex.$jsException;if(!err){err=new Error("Java exception thrown");if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,
ex);}return err;}function $rt_fillStack(err,ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_stecls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,
dimensions){var first=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays=new Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]
|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,
0);}function $rt_createShortMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),
dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),
arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0)
{return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for
(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value){if(typeof value==='number'&&isNaN(value)){throw "NaN";}return value;}function $rt_createOutputFunction(printFunction){var buffer="";var utf8Buffer
=0;var utf8Remaining=0;function putCodePoint(ch){if(ch===0xA){printFunction(buffer);buffer="";}else if(ch<0x10000){buffer+=String.fromCharCode(ch);}else {ch=ch -0x10000|0;var hi=(ch>>10)+0xD800;var lo=(ch&0x3FF)+0xDC00;buffer+=String.fromCharCode(hi,lo);}}return function(ch){if((ch&0x80)===0){putCodePoint(ch);}else if((ch&0xC0)===0x80){if(utf8Buffer>0){utf8Remaining<<=6;utf8Remaining|=ch&0x3F;if( --utf8Buffer===0){putCodePoint(utf8Remaining);}}}else if((ch&0xE0)===0xC0){utf8Remaining=ch&0x1F;utf8Buffer=1;}else if
((ch&0xF0)===0xE0){utf8Remaining=ch&0x0F;utf8Buffer=2;}else if((ch&0xF8)===0xF0){utf8Remaining=ch&0x07;utf8Buffer=3;}};}var $rt_putStdout=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:typeof console==="object"?$rt_createOutputFunction(function(msg){console.info(msg);}):function(){};var $rt_putStderr=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof console==="object"?$rt_createOutputFunction(function(msg){console.error(msg);}):function(){};var $rt_packageData=null;function $rt_packages(data)
{var i=0;var packages=new Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName
="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype=Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {var enclosingClass
=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;var declaringClass=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;var simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName:null;}var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k
<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}}function $rt_wrapFunction0(f){return function(){return f(this);};}function $rt_wrapFunction1(f){return function(p1){return f(this,p1);};}function $rt_wrapFunction2(f){return function(p1,p2){return f(this,p1,p2);};}function $rt_wrapFunction3(f){return function(p1,p2,p3){return f(this,p1,p2,p3,p3);};}function $rt_wrapFunction4(f){return function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);};}function $rt_threadStarter(f){return function(){var args
=Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f){return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i){javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance=new Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]
=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target){return target.$clinit=function(){};}var $rt_numberConversionView=new DataView(new ArrayBuffer(8));var $rt_doubleToLongBits;var $rt_longBitsToDouble;if(typeof BigInt!=='function'){$rt_doubleToLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));};$rt_longBitsToDouble=function(n)
{$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);};}else {$rt_doubleToLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);var lo=$rt_numberConversionView.getInt32(0,true);var hi=$rt_numberConversionView.getInt32(4,true);return BigInt.asIntN(64,BigInt.asUintN(32,BigInt(lo))|BigInt(hi)<<BigInt(32));};$rt_longBitsToDouble=function(n){var hi=Number(BigInt.asIntN(32,n>>BigInt(32)));var lo=Number(BigInt.asIntN(32,
n&BigInt(0xFFFFFFFF)));$rt_numberConversionView.setInt32(0,lo,true);$rt_numberConversionView.setInt32(4,hi,true);return $rt_numberConversionView.getFloat64(0,true);};}function $rt_floatToIntBits(n){$rt_numberConversionView.setFloat32(0,n);return $rt_numberConversionView.getInt32(0);}function $rt_intBitsToFloat(n){$rt_numberConversionView.setInt32(0,n);return $rt_numberConversionView.getFloat32(0);}function $rt_javaException(e){return e instanceof Error&&typeof e[$rt_javaExceptionProp]==='object'?e[$rt_javaExceptionProp]
:null;}function $rt_jsException(e){return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err[$rt_javaExceptionProp];if(!ex){ex=$rt_createException($rt_str("(JavaScript) "+err.toString()));err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}
else if(cls===$rt_bytecls()){clsName="byte";}else if(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__
=function(){return "long";};function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}var Long_MAX_NORMAL=1<<18;var Long_ZERO;var Long_create;var Long_fromInt;var Long_fromNumber;var Long_toNumber;var Long_hi;var Long_lo;if(typeof BigInt!=="function"){Long.prototype.toString=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push(String.fromCharCode(48
+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};Long_ZERO=new Long(0,0);Long_fromInt=function(val){return new Long(val, -(val<0)|0);};Long_fromNumber=function(val){if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}};Long_create=function(lo,hi){return new Long(lo,hi);};Long_toNumber=function(val){return 0x100000000
*val.hi+(val.lo>>>0);};Long_hi=function(val){return val.hi;};Long_lo=function(val){return val.lo;};}else {Long_ZERO=BigInt(0);Long_create=function(lo,hi){return BigInt.asIntN(64,BigInt.asUintN(32,BigInt(lo))|BigInt(hi)<<BigInt(32));};Long_fromInt=function(val){return BigInt(val);};Long_fromNumber=function(val){return BigInt(val>=0?Math.floor(val):Math.ceil(val));};Long_toNumber=function(val){return Number(val);};Long_hi=function(val){return Number(BigInt.asIntN(64,val>>BigInt(32)))|0;};Long_lo=function(val)
{return Number(BigInt.asIntN(32,val))|0;};}var $rt_imul=Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){return (a>>>0)/(b>>>0)>>>0;};var $rt_umod=function(a,b){return (a>>>0)%(b>>>0)>>>0;};function $rt_checkBounds(index,array){if(index<0||index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index)
{if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.ge=f;}
function $rt_cls(cls){return KV(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return LR(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.S.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return BdP;}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(It());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return Dn();}
function $rt_setThread(t){return HS(t);}
function $rt_createException(message){return PJ(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var G=$rt_throw;var B5=$rt_compare;var BdQ=$rt_nullCheck;var F=$rt_cls;var X=$rt_createArray;var APL=$rt_isInstance;var A5G=$rt_nativeThread;var BbG=$rt_suspending;var BbL=$rt_resuming;var BaP=$rt_invalidPointer;var B=$rt_s;var N=$rt_eraseClinit;var Cb=$rt_imul;var R=$rt_wrapException;var BdR=$rt_checkBounds;var BdS=$rt_checkUpperBound;var BdT=$rt_checkLowerBound;var BdU=$rt_wrapFunction0;var BdV=$rt_wrapFunction1;var BdW=$rt_wrapFunction2;var BdX=$rt_wrapFunction3;var BdY=$rt_wrapFunction4;var D=$rt_classWithoutFields;var H
=$rt_createArrayFromData;var IR=$rt_createCharArrayFromData;var BdZ=$rt_createByteArrayFromData;var Bd0=$rt_createShortArrayFromData;var Mb=$rt_createIntArrayFromData;var Bd1=$rt_createBooleanArrayFromData;var Bao=$rt_createFloatArrayFromData;var Bd2=$rt_createDoubleArrayFromData;var AVR=$rt_createLongArrayFromData;var N7=$rt_createBooleanArray;var Ce=$rt_createByteArray;var Mu=$rt_createShortArray;var BV=$rt_createCharArray;var Bc=$rt_createIntArray;var Bdo=$rt_createLongArray;var B9=$rt_createFloatArray;var Bd3
=$rt_createDoubleArray;var B5=$rt_compare;var Bd4=$rt_castToClass;var Bd5=$rt_castToInterface;var Q1=Long_toNumber;var O=Long_fromInt;var Bd6=Long_fromNumber;var Ca=Long_create;var Bb=Long_ZERO;var Bd7=Long_hi;var Cu=Long_lo;
function C(){this.bw=null;this.$id$=0;}
function PS(){var a=new C();J(a);return a;}
function En(b){var c;if(b.bw===null)MX(b);if(b.bw.cz===null)b.bw.cz=Dn();else if(b.bw.cz!==Dn())G(DN(B(0)));c=b.bw;c.cR=c.cR+1|0;}
function Cc(b){var c,d;if(!EI(b)&&b.bw.cz===Dn()){c=b.bw;d=c.cR-1|0;c.cR=d;if(!d)b.bw.cz=null;EI(b);return;}G(AOQ());}
function A_w(b){AId(b,1);}
function AId(b,c){var d,$p,$z;$p=0;if(BbL()){var $T=A5G();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.bw===null)MX(b);if(b.bw.cz===null)b.bw.cz=Dn();if(b.bw.cz===Dn()){d=b.bw;d.cR=d.cR+c|0;return;}$p=1;case 1:AJX(b,c);if(BbG()){break _;}return;default:BaP();}}A5G().s(b,c,d,$p);}
function MX(b){b.bw=A$U();}
function AJX(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.nA=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.NH=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A$6(callback);return thread.suspend(function(){try{Bb1(b,c,callback);}catch($e){callback.NH($rt_exception($e));}});}
function Bb1(b,c,d){var e,f,g;e=Dn();if(b.bw===null){MX(b);HS(e);f=b.bw;f.cR=f.cR+c|0;d.nA(null);return;}if(b.bw.cz===null){b.bw.cz=e;HS(e);f=b.bw;f.cR=f.cR+c|0;d.nA(null);return;}g=b.bw;if(g.dY===null)g.dY=ACf();A1R(g.dY,Baq(e,b,c,d));}
function Bcw(b){ACI(b,1);}
function ACI(b,c){var d;if(!EI(b)&&b.bw.cz===Dn()){d=b.bw;d.cR=d.cR-c|0;if(d.cR>0)return;d.cz=null;if(d.dY!==null&&!HW(d.dY))ALg(A$q(b));else EI(b);return;}G(AOQ());}
function APa(b){var c,d,e;if(!EI(b)&&b.bw.cz===null){c=b.bw;if(c.dY!==null&&!HW(c.dY)){d=c.dY;e=A3t(d);c.dY=null;e.e3();}return;}}
function EI(a){var b,c;b=a.bw;if(b===null)return 1;a:{b:{if(b.cz===null){if(b.dY!==null){c=b.dY;if(!HW(c))break b;}if(b.yb===null)break a;c=b.yb;if(HW(c))break a;}}return 0;}ABu(a);return 1;}
function ABu(a){a.bw=null;}
function J(a){}
function Cf(a){return KV(a.constructor);}
function Mm(a){return Id(a);}
function ALq(a,b){return a!==b?0:1;}
function Po(a){return (((I()).a(B(1))).a(N6(Id(a)))).b();}
function Id(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AKq(a){var b,c,d;if(!APL(a,DI)){b=a;if(b.constructor.$meta.item===null)G(A_j());}c=ACu(a);b=c;d=$rt_nextId();b.$id$=d;return c;}
function A0A(b){APa(b);}
function ALW(b,c,d,e){var f;HS(b);c.bw.cz=b;f=c.bw;f.cR=f.cR+d|0;e.nA(null);}
function T(){var a=this;C.call(a);a.rS=null;a.qU=null;}
function Bo(a){J(a);}
function A47(a,b){if(!b&&a.rS===null)a.rS=a.T();else if(b&&a.qU===null)a.qU=(a.T()).f0(1);if(b)return a.qU;return a.rS;}
var Rh=D(T);
function A92(){var a=new Rh();A5A(a);return a;}
function A5A(a){Bo(a);}
function AWS(a){return ((CO()).cD(32)).cD(9);}
var PU=D(T);
function A$s(){var a=new PU();A7Y(a);return a;}
function A7Y(a){Bo(a);}
function ALw(a){return ((CO()).bG(0,31)).cD(127);}
var IM=D(0);
function Vg(){var a=this;C.call(a);a.pX=null;a.tF=null;a.yW=0;a.zB=0;}
function Bcu(a,b){var c=new Vg();APN(c,a,b);return c;}
function APN(a,b,c){J(a);a.pX=b;a.tF=c;}
function AGH(a){return B$(a.pX);}
function A74(a,b){return Ba(a.pX)<b?0:1;}
function AHX(a){return B$(a.tF);}
function A5S(a,b){return Ba(a.tF)<b?0:1;}
function AYt(a,b){a.yW=b;}
function A9A(a,b){a.zB=b;}
var EY=D(0);
function Hw(){var a=this;C.call(a);a.h9=Bb;a.sp=Bb;a.dA=0;}
function PA(a){J(a);a.dA=(-1);}
function AZr(a){a.h9=Bb;a.dA=(-1);}
function AVv(a){return a.dA==(-1)?0:1;}
var VD=D();
function A9z(b){var c,d;c=b.K8();d=c.data;if(d.length<=0)return null;return Pc(d[0]);}
function AMo(b,c){var d,e,f,$$je;if(c!==null&&c.data.length){a:{b:{try{d=b.GW(c);e=Pc(d);}catch($$e){$$je=R($$e);if($$je instanceof G1){f=$$je;break a;}else if($$je instanceof IL){f=$$je;break b;}else{throw $$e;}}return e;}G(Eu((((I()).a(B(2))).a(b.u())).b(),f));}G(Eu(((((I()).a(B(3))).a(b.u())).a(B(4))).b(),f));}return A9z(b);}
function AXw(b,c){var d,e,f,$$je;a:{try{d=b.F9(c);e=Pc(d);}catch($$e){$$je=R($$e);if($$je instanceof G1){f=$$je;break a;}else if($$je instanceof IL){f=$$je;G(Eu((((I()).a(B(2))).a(b.u())).b(),f));}else{throw $$e;}}return e;}G(Eu((((I()).a(B(5))).a(b.u())).b(),f));}
var B1=D(0);
var DZ=D();
function ABo(a){J(a);}
var B6=D(0);
function D0(){DZ.call(this);this.i7=0;}
var Bd8=null;var Bd9=null;function CY(){CY=N(D0);A50();}
function AAL(a){var b=new D0();Hd(b,a);return b;}
function Hd(a,b){CY();ABo(a);a.i7=b;}
function WL(b,c){CY();if(!(c>=2&&c<=36))c=10;return ((Bdx(20)).Ax(b,c)).b();}
function AAP(b){CY();return b>>>4^b<<28^b<<8^b>>>24;}
function N6(b){CY();return ACx(b,4);}
function M$(b){CY();return WL(b,10);}
function Do(b,c){var d,e,f,g,h;CY();if(c>=2&&c<=36){if(b!==null&&!b.bO()){a:{d=0;e=0;switch(b.f(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==b.i())G(Ea());while(e<b.i()){g=e+1|0;h=MV(b.f(e));if(h<0)G(DD((((I()).a(B(6))).a(b)).b()));if(h>=c)G(DD((((((I()).a(B(7))).j(c)).a(B(8))).a(b)).b()));f=Cb(c,f)+h|0;if(f<0){if(g==b.i()&&f==(-2147483648)&&d)return (-2147483648);G(DD((((I()).a(B(9))).a(b)).b()));}e=g;}if(d)f= -f|0;return f;}G(DD(B(10)));}G(DD((((I()).a(B(11))).j(c)).b()));}
function BS(b){CY();return Do(b,10);}
function Bn(b){CY();if(b>=(-128)&&b<=127){Vk();return Bd9.data[b+128|0];}return AAL(b);}
function Vk(){var b;CY();a:{if(Bd9===null){Bd9=X(D0,256);b=0;while(true){if(b>=Bd9.data.length)break a;Bd9.data[b]=AAL(b-128|0);b=b+1|0;}}}}
function AUo(a){return a.i7;}
function AQ8(a){return M$(a.i7);}
function ATa(a){return AAP(a.i7);}
function A8x(a,b){if(a===b)return 1;return b instanceof D0&&b.i7==a.i7?1:0;}
function L6(b){var c,d,e;CY();if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;e=d>>>8;if(!e)e=d;else c=c|8;d=e>>>4;if(!d)d=e;else c=c|4;e=d>>>2;if(!e)e=d;else c=c|2;if(e>>>1)c=c|1;return (32-c|0)-1|0;}
function EZ(b){var c,d,e;CY();if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;e=d<<8;if(!e)e=d;else c=c|8;d=e<<4;if(!d)d=e;else c=c|4;e=d<<2;if(!e)e=d;else c=c|2;if(e<<1)c=c|1;return (32-c|0)-1|0;}
function Xt(b,c){var d;CY();d=c&31;return b<<d|b>>>(32-d|0);}
function A50(){Bd8=F($rt_intcls());}
var Ew=D();
var Bd$=null;var Bd_=null;var Bea=null;var Beb=null;var Bec=null;function A$d(){A$d=N(Ew);AZ5();}
function AZ5(){Bd$=Mb([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);Bd_=AVR([O(1),O(10),O(100),O(1000),O(10000),O(100000),O(1000000),O(10000000),O(100000000),O(1000000000),Ca(1410065408, 2),Ca(1215752192, 23),Ca(3567587328, 232),Ca(1316134912, 2328),Ca(276447232, 23283),Ca(2764472320, 232830),Ca(1874919424, 2328306),Ca(1569325056, 23283064),Ca(2808348672, 232830643)]);Bea=AVR([O(1),O(10),O(100),O(10000),O(100000000),Ca(1874919424, 2328306)]);Beb=Bch();Bec=BbI();}
function Bt(){var a=this;C.call(a);a.k=null;a.cC=0;a.td=null;a.DR=0;}
var Bed=0;function Wd(){Wd=N(Bt);AR_();}
function Cl(a){var b,c;Wd();J(a);b=new D0;c=Bed;Bed=c+1|0;Hd(b,c);a.td=b.b();}
function IX(a,b){var c,d;Wd();J(a);c=new D0;d=Bed;Bed=d+1|0;Hd(c,d);a.td=c.b();a.k=b;}
function FU(a,b,c,d){var e;e=d.J();while(true){if(b>e)return (-1);if(a.e(b,c,d)>=0)break;b=b+1|0;}return b;}
function F2(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.e(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AWr(a,b){a.DR=b;}
function AVz(a){return a.DR;}
function ALR(a){return ((((((I()).a(B(12))).a(a.td)).a(B(13))).a(a.u())).a(B(14))).b();}
function AOu(a){return a.Fv();}
function AO_(a){return a.k;}
function Ll(a,b){a.k=b;}
function A62(a,b){return 1;}
function A8g(a){return null;}
function Oh(a){var b;a.cC=1;if(a.k!==null){if(!a.k.cC){b=a.k.hW();if(b!==null){a.k.cC=1;a.k=b;}a.k.ea();}else if(a.k instanceof Fu&&a.k.dj.s1)a.k=a.k.k;}}
function AR_(){Bed=1;}
function BC(){var a=this;Bt.call(a);a.bQ=null;a.dj=null;a.bn=0;}
function Bee(){var a=new BC();CM(a);return a;}
function A$2(a,b){var c=new BC();RW(c,a,b);return c;}
function CM(a){Cl(a);}
function RW(a,b,c){Cl(a);a.bQ=b;a.dj=c;a.bn=c.j6();}
function AH1(a,b,c,d){var e,f,g,h,i;if(a.bQ===null)return (-1);e=d.ji(a.bn);d.es(a.bn,b);f=a.bQ.db();g=0;while(true){if(g>=f){d.es(a.bn,e);return (-1);}h=a.bQ.l(g);i=h.e(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function ANg(a,b){a.dj.Q(b);}
function AJN(a){return B(15);}
function A0_(a,b){var c;a:{if(a.bQ!==null){c=a.bQ.fj();while(true){if(!c.bC())break a;if(!(c.bz()).b_(b))continue;else return 1;}}}return 0;}
function AN$(a,b){var c,d;a:{if(b.np(a.bn)>=0){c=b.ji(a.bn);d=a.bn;if(c==b.np(d)){c=0;break a;}}c=1;}return c;}
function AE6(a){var b,c,d,e;a.cC=1;if(a.dj!==null&&!a.dj.cC)a.dj.ea();a:{if(a.bQ!==null){b=a.bQ.db();c=0;while(true){if(c>=b)break a;d=a.bQ.l(c);e=d.hW();if(e===null)e=d;else{d.cC=1;a.bQ.mo(c);a.bQ.Km(c,e);}if(!e.cC)e.ea();c=c+1|0;}}}if(a.k!==null)Oh(a);}
function Fu(){BC.call(this);this.cV=null;}
function Bct(a,b){var c=new Fu();PH(c,a,b);return c;}
function PH(a,b,c){CM(a);a.cV=b;a.dj=c;a.bn=c.j6();}
function ACJ(a,b,c,d){var e,f;e=d.ji(a.bn);d.es(a.bn,b);f=a.cV.e(b,c,d);if(f>=0)return f;d.es(a.bn,e);return (-1);}
function AK8(a,b,c,d){var e;e=a.cV.cB(b,c,d);if(e>=0)d.es(a.bn,e);return e;}
function A5t(a,b,c,d,e){var f;f=a.cV.cF(b,c,d,e);if(f>=0)e.es(a.bn,f);return f;}
function A02(a,b){return a.cV.b_(b);}
function A3J(a){var b;b=A_u(a);a.k=b;return b;}
function ARG(a){var b;a.cC=1;if(a.dj!==null&&!a.dj.cC)a.dj.ea();if(a.cV!==null&&!a.cV.cC){b=a.cV.hW();if(b!==null){a.cV.cC=1;a.cV=b;}a.cV.ea();}}
function HD(){var a=this;C.call(a);a.K3=null;a.q0=null;a.yd=0.0;a.z7=0.0;a.rW=null;a.rb=null;a.hC=0;}
function ABl(a,b,c,d,e){J(a);De();a.rW=Bef;a.rb=Bef;QL(a,e);a.K3=b;a.q0=e.ge();a.yd=c;a.z7=d;}
function XI(a,b,c,d){var e;e=Ce(1);e.data[0]=63;ABl(a,b,c,d,e);}
function QL(a,b){var c;if(b!==null){c=b.data.length;if(c&&c>=a.z7)return;}G(W(B(16)));}
function KG(a,b){if(b!==null){a.rW=b;a.uZ(b);return a;}G(W(B(17)));}
function ART(a,b){}
function Ls(a,b){if(b!==null){a.rb=b;a.qB(b);return a;}G(W(B(17)));}
function AZN(a,b){}
function In(a,b,c,d){var e,f,g,h,$$je;a:{if(a.hC!=3){if(d)break a;if(a.hC!=2)break a;}G(GI());}a.hC=!d?1:2;while(true){try{e=a.NM(b,c);}catch($$e){$$je=R($$e);if($$je instanceof Bm){f=$$je;G(AWY(f));}else{throw $$e;}}if(e.jB()){if(!d)return e;g=Ba(b);if(g<=0)return e;e=BU(g);}else if(e.hS())break;h=!e.tI()?a.rW:a.rb;b:{De();if(h!==Beg){if(h===Beh)break b;else return e;}if(Ba(c)<a.q0.data.length)return Bei;Xv(c,a.q0);}b.oA(B4(b)+e.i()|0);}return e;}
function W6(a,b){var c,d,e;if(!Ba(b))return Rb(0);On(a);c=Rb(Ba(b)*a.yd|0);while(true){d=In(a,b,c,0);Bk();if(d===Bej)break;if(d===Bei){c=JG(a,c);continue;}if(!d.ml())continue;d.nD();}e=In(a,b,c,1);if(e.ml())e.nD();while(true){e=Jv(a,c);if(e.jB())break;if(!e.hS())continue;c=JG(a,c);}Je(c);return c;}
function JG(a,b){var c,d,e;c=Hu(b);d=c.data;d=NL(c,d.length*2|0);e=Hf(d);e.fV(B4(b));return e;}
function Jv(a,b){var c;if(a.hC!=2&&a.hC!=4)G(GI());c=a.KG(b);Bk();if(c===Bej)a.hC=3;return c;}
function A1L(a,b){Bk();return Bej;}
function On(a){a.hC=0;a.uA();return a;}
function AM7(a){}
function Dj(){var a=this;HD.call(a);a.BR=null;a.vU=null;}
function Gu(a,b,c,d){XI(a,b,c,d);a.BR=BV(512);a.vU=Ce(512);}
function ADV(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.BR;e=0;f=0;g=a.vU;a:{while(true){if((e+32|0)>f&&B$(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Bq(Ba(b)+j|0,i.length);b.q3(d,j,f-j|0);e=0;}if(!B$(c)){if(!B$(b)&&e>=f){Bk();k=Bej;}else{Bk();k=Bei;}break a;}i=g.data;l=0;m=Bq(Ba(c),i.length);n=Bcu(b,c);k=a.mI(d,e,f,g,l,m,n);e=n.yW;j=n.zB;if(k===null){if(!B$(b)&&e>=f){Bk();k=Bej;}else if(!B$(c)&&e>=f){Bk();k=Bei;}}c.wA(g,0,j);if(k!==null)break;}}b.oA(B4(b)-(f-e|0)|0);return k;}
function WI(){var a=this;Dj.call(a);a.tt=0;a.rc=0;}
function BaR(a,b,c){var d=new WI();A31(d,a,b,c);return d;}
function A31(a,b,c,d){Gu(a,b,2.0,4.0);a.tt=c;a.rc=d;}
function A4$(a,b,c,d,e,f,g,h){var i,j,k;if(a.tt){if((f+2|0)>g){if(h.Kv())i=null;else{Bk();i=Bei;}return i;}a.tt=0;if(!a.rc){j=e.data;k=f+1|0;j[f]=(-2);f=k+1|0;j[k]=(-1);}else{j=e.data;k=f+1|0;j[f]=(-1);f=k+1|0;j[k]=(-2);}}return !a.rc?OZ(a,b,c,d,e,f,g,h):Vj(a,b,c,d,e,f,g,h);}
function Vj(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c];if(!BX(l)){if(BG(l)){c=k+(-1)|0;i=BU(1);break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.ec(2))break a;Bk();i=Bei;break a;}j=e.data;m=f+1|0;j[f]=(l&255)<<24>>24;f=m+1|0;j[m]=l>>8<<24>>24;c=k;}else{if(k==d){c=k+(-1)|0;if(h.dN(2))break a;Bk();i=Bej;break a;}c=k+1|0;n=j[k];if(!BG(n)){c=c+(-2)|0;i=BU(1);break a;}if((f+4|0)>g){c=c+(-2)|0;if(h.ec(4))break a;Bk();i=Bei;break a;}j=e.data;m=f+1|0;j[f]=(l&255)<<24>>24;o=
m+1|0;j[m]=l>>8<<24>>24;m=o+1|0;j[o]=(n&255)<<24>>24;f=m+1|0;j[m]=n>>8<<24>>24;}}}h.eg(c);h.dQ(f);return i;}
function OZ(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c];if(!BX(l)){if(BG(l)){c=k+(-1)|0;i=BU(1);break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.ec(2))break a;Bk();i=Bei;break a;}j=e.data;m=f+1|0;j[f]=l>>8<<24>>24;f=m+1|0;j[m]=(l&255)<<24>>24;c=k;}else{if(k==d){c=k+(-1)|0;if(h.dN(2))break a;Bk();i=Bej;break a;}c=k+1|0;n=j[k];if(!BG(n)){c=c+(-2)|0;i=BU(1);break a;}if((f+4|0)>g){c=c+(-2)|0;if(h.ec(4))break a;Bk();i=Bei;break a;}j=e.data;m=f+1|0;j[f]=l>>8<<24>>24;o=m+1
|0;j[m]=(l&255)<<24>>24;m=o+1|0;j[o]=n>>8<<24>>24;f=m+1|0;j[m]=(n&255)<<24>>24;}}}h.eg(c);h.dQ(f);return i;}
var Cn=D(0);
function BR(){var a=this;C.call(a);a.b1=0;a.mG=0;a.Kx=0;a.zD=null;a.zt=0;}
function CV(a,b){J(a);a.zD=b;}
function AUG(a,b,c){a.mG=c;a.b1=b;}
function AIT(a,b){if(!a.mG)a.b1=b;}
function AB9(a,b){return b instanceof BR&&b.b1==a.b1?1:0;}
function A3h(a){return a.b1;}
function AVc(a){return a.b1;}
function AJu(a){if(a.zt>0){HO();if(Bek&&Bel)Bem.qm(B(18),((((((I()).a(B(19))).a(a.b())).a(B(20))).j(a.zt)).a(B(21))).b());}if(a.mG){a.Kx=1;a.Ih();a.b1=0;}}
function ATY(a){return (((((((I()).a(a.zD)).a(B(22))).j(a.b1)).a(B(23))).IK(a.mG)).a(B(24))).b();}
var Hi=D(BR);
function Ben(a){var b=new Hi();Q6(b,a);return b;}
function Q6(a,b){CV(a,b);}
function AQ1(a,b){ACM(a.b1,b);}
function ACM(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btCollisionObject);jsObj.setRestitution(c);}
var AA1=D(Hi);
function Bdw(a,b,c,d){var e=new AA1();AMX(e,a,b,c,d);return e;}
function AMX(a,b,c,d,e){var f,g,h,i;Q6(a,B(25));Fg();f=Beo;Ge(e,f);g=c.dv();h=d.dv();i=f.dv();a.et(AN3(b,g,h,i),1);}
function AIZ(a){A82(a.b1);}
function AN3(b,c,d,e){var motionStateJSObj=Bullet.wrapPointer(c,Bullet.btMotionState);var collisionShapeJSObj=Bullet.wrapPointer(d,Bullet.btCollisionShape);var localInertiaJSObj=Bullet.wrapPointer(e,Bullet.btVector3);var jsObj=new Bullet.btRigidBody(b,motionStateJSObj,collisionShapeJSObj,localInertiaJSObj);return Bullet.getPointer(jsObj);}
function A82(b){var jsObj=Bullet.wrapPointer(b,Bullet.btRigidBody);Bullet.destroy(jsObj);}
var LU=D(BR);
var Bep=null;function HR(){HR=N(LU);AQ9();}
function Bcf(a){var b=new LU();ZR(b,a);return b;}
function ZR(a,b){HR();CV(a,B(26));a.et(!b?0:Rl(),b);}
function APW(a,b){Xz(a.b1,b.data);}
function ARA(a,b){AAl(a.b1,b.data);}
function Xo(b,c){HR();c.Nl(b.c);}
function Xl(b,c){HR();b.JF(c.c);}
function R7(b,c){HR();Bep.yg(c);Xo(b,Bep);}
function Qd(b,c){HR();Bep.yg(b);Xl(Bep,c);}
function AQ9(){Bep=Bcf(0);}
function Rl(){var jsObj=new Bullet.btTransform();return Bullet.getPointer(jsObj);}
function Xz(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btTransform);jsObj.setFromOpenGLMatrix(c);}
function AAl(b,c){var worldTrans=Bullet.wrapPointer(b,Bullet.btTransform);var origin=worldTrans.getOrigin();var matrix3x3=worldTrans.getBasis();var row0=matrix3x3.getRow(0);var row1=matrix3x3.getRow(1);var row2=matrix3x3.getRow(2);c[0]=row0.x();c[1]=row1.x();c[2]=row2.x();c[3]=0;c[4]=row0.y();c[5]=row1.y();c[6]=row2.y();c[7]=0;c[8]=row0.z();c[9]=row1.z();c[10]=row2.z();c[11]=0;c[12]=origin.x();c[13]=origin.y();c[14]=origin.z();c[15]=1.0;}
function Ev(){var a=this;C.call(a);a.Pa=Bb;a.MX=Bb;a.Lb=null;a.GS=null;a.KT=0;a.Pw=null;}
var Beq=null;var Ber=null;var Bes=0;var Bet=0;var Beu=null;function Lx(){Lx=N(Ev);ADX();}
function Bb6(a){var b=new Ev();VF(b,a);return b;}
function Bev(a,b){var c=new Ev();Nl(c,a,b);return c;}
function VF(a,b){Lx();Nl(a,null,b);}
function Nl(a,b,c){var d;Lx();J(a);a.Lb=PS();a.KT=1;a.GS=c;a.Pw=b;d=Bes;Bes=d+1|0;a.Pa=O(d);}
function HS(b){Lx();if(Ber!==b)Ber=b;Ber.MX=D8();}
function Dn(){Lx();return Ber;}
function ADX(){Beq=Bb6(B(27));Ber=Beq;Bes=1;Bet=1;Beu=Bc_();}
var IY=D(T);
function Bdp(){var a=new IY();PE(a);return a;}
function PE(a){Bo(a);}
function Px(a){return ((CO()).bG(97,122)).bG(65,90);}
var Bv=D();
var Bew=null;var Bex=null;var Bey=null;var Bez=null;var BeA=null;var BeB=null;var BeC=null;var BeD=null;var BeE=null;var BeF=null;var BeG=null;var BeH=null;var BeI=null;var BeJ=null;var BeK=null;var BeL=null;var BeM=null;var BeN=null;var BeO=null;var BeP=null;var BeQ=null;var BeR=null;var BeS=null;var BeT=null;var BeU=null;var BeV=null;var BeW=null;var BeX=null;var BeY=null;function A_A(){A_A=N(Bv);A1d();}
function A1d(){Bew=Baj();Bex=Bbn();Bey=A9H();Bez=Bbg();BeA=BdC();BeB=Bc6();BeC=A$t();BeD=A_B();BeE=A_l();BeF=BbE();BeG=A_5();BeH=A_C();BeI=A$J();BeJ=Bcg();BeK=Bcj();BeL=Bcl();BeM=BbM();BeN=A$j();BeO=Bab();BeP=Bdk();BeQ=Bcz();BeR=A$O();BeS=A_g();BeT=A_d();BeU=A_x();BeV=BbY();BeW=BcV();BeX=BdD();BeY=A$e();}
var OD=D(Fu);
function A_u(a){var b=new OD();AOn(b,a);return b;}
function AOn(a,b){PH(a,b.cV,b.dj);}
function AHj(a,b,c,d){var e,f,g;e=0;f=d.J();a:{while(true){if(b>f){b=e;break a;}g=d.ji(a.bn);d.es(a.bn,b);e=a.cV.e(b,c,d);if(e>=0)break;d.es(a.bn,g);b=b+1|0;}}return b;}
function A9k(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=e.ji(a.bn);e.es(a.bn,c);f=a.cV.e(c,d,e);if(f>=0)break;e.es(a.bn,g);c=c+(-1)|0;}}return c;}
function AFk(a){return null;}
function C8(){var a=this;C.call(a);a.r2=null;a.kC=null;a.nH=0;a.oe=0;a.wd=null;}
function BeZ(){var a=new C8();Qz(a);return a;}
function Be0(a){var b=new C8();N1(b,a);return b;}
function Be1(a,b){var c=new C8();MQ(c,a,b);return c;}
function Be2(a){var b=new C8();AAZ(b,a);return b;}
function Qz(a){a.nH=1;a.oe=1;a.n0();}
function N1(a,b){a.nH=1;a.oe=1;a.n0();a.r2=b;}
function MQ(a,b,c){a.nH=1;a.oe=1;a.n0();a.r2=b;a.kC=c;}
function AAZ(a,b){a.nH=1;a.oe=1;a.n0();a.kC=b;}
function AX$(a){return a;}
function AOI(a){return a.r2;}
function AHU(a){return a.mD();}
function AZq(a){a.yz(SY());}
function AR9(a,b){var c,d,e,f,g;b.pb((Cf(a)).u());c=a.F1();if(c!==null)b.pb((((I()).a(B(8))).a(c)).b());a:{b.Mz();if(a.wd!==null){d=a.wd.data;e=d.length;f=0;while(true){if(f>=e)break a;g=d[f];b.pb(B(28));b.Ka(g);f=f+1|0;}}}if(a.kC!==null&&a.kC!==a){b.pb(B(29));a.kC.yz(b);}}
var B2=D(C8);
function Be3(){var a=new B2();E6(a);return a;}
function Be4(a,b){var c=new B2();JD(c,a,b);return c;}
function Be5(a){var b=new B2();LV(b,a);return b;}
function E6(a){Qz(a);}
function JD(a,b,c){MQ(a,b,c);}
function LV(a,b){N1(a,b);}
var Bm=D(B2);
function Be6(){var a=new Bm();Ct(a);return a;}
function Be7(a,b){var c=new Bm();Pt(c,a,b);return c;}
function PJ(a){var b=new Bm();EB(b,a);return b;}
function Ct(a){E6(a);}
function Pt(a,b,c){JD(a,b,c);}
function EB(a,b){LV(a,b);}
var TQ=D(Bm);
function Bax(){var a=new TQ();AMp(a);return a;}
function AMp(a){Ct(a);}
var Lm=D(0);
function YQ(){var a=this;C.call(a);a.jQ=null;a.lb=0;a.Nf=0;a.kv=0;}
function Bbt(a){var b=new YQ();AB2(b,a);return b;}
function AB2(a,b){J(a);a.Nf=1;a.kv=1;a.jQ=b;}
function A64(a){return 0;}
function AT$(a){var b,c,d;b=a.jQ.iS();c=b.Lx();d=$rt_str(c.href);return d;}
function AIm(a){return a.lb;}
function AN7(a){a.lb=a.lb-1|0;}
function AUW(a){a.lb=a.lb+1|0;}
function AQa(a,b,c,d,e){a:{BbR();switch(Be8.data[BD(c)]){case 1:break;case 2:a.KP(b,d,e);break a;case 3:a.s9(b,e);break a;case 4:a.Gb(b,e);break a;case 5:e.dk(b,null);break a;default:G(U((((I()).a(B(30))).dC(c)).b()));}a.AF(b,e);}}
function ALT(a,b,c){var d,e;if(a.kv)(Ef()).f9((((I()).a(B(31))).a(b)).b());d=a.jQ.t2();e=BY(A_9(a,d,c,b),"handleEvent");d.onreadystatechange=e;a.nu();G6(a,d,c);d.open("GET",$rt_ustr(b));d.setRequestHeader("Content-Type","text/plain; charset=utf-8");d.send();}
function AHO(a,b,c){var d,e;if(a.kv)(Ef()).f9((((I()).a(B(32))).a(b)).b());d=a.jQ.t2();e=BY(BaN(a,d,c,b),"handleEvent");d.onreadystatechange=e;a.nu();G6(a,d,c);d.open("GET",$rt_ustr(b),!!0);d.setRequestHeader("Content-Type","text/plain; charset=utf-8");d.send();}
function AKK(a,b,c){a.s9(b,Bav(a,c));}
function AUX(a,b,c){var d,e;if(a.kv)(Ef()).f9((((I()).a(B(31))).a(b)).b());d=a.jQ.t2();e=BY(A_q(a,d,c,b),"handleEvent");d.onreadystatechange=e;a.nu();G6(a,d,c);d.open("GET",$rt_ustr(b));e="arraybuffer";d.responseType=e;d.send();}
function AKN(a,b,c,d){a.Ja(b,c,null,d);}
function AWO(a,b,c,d,e){var f;f=0;a.s9(b,Bdz(a,e,d,f,c));}
function AE4(b,c){b.addEventListener("load",BY(c,"handleEvent"),!!0);b.addEventListener("error",BY(c,"handleEvent"),!!0);}
function G6(a,b,c){var d;d=BY(BaY(a,c),"handleEvent");b.onprogress=d;}
function Ni(b){return b.kv;}
function PF(b){return b.jQ;}
var B7=D(0);
function AYq(b){return b;}
var UY=D();
function AL1(b){return b;}
function HW(b){return b.length?0:1;}
function A1R(b,c){var d;d=AL1(c);b.push(d);}
function A3t(b){return b.shift();}
var GZ=D(T);
function A_p(){var a=new GZ();P4(a);return a;}
function P4(a){Bo(a);}
function Rj(a){return ((((CO()).bG(97,122)).bG(65,90)).bG(48,57)).cD(95);}
var AAB=D(GZ);
function Ba8(){var a=new AAB();AZA(a);return a;}
function AZA(a){P4(a);}
function AL2(a){var b;b=(Rj(a)).f0(1);b.bf=1;return b;}
var NZ=D(0);
function Vn(){var a=this;C.call(a);a.tX=null;a.PF=Bb;a.Cl=null;}
function BaE(a){var b=new Vn();ACN(b,a);return b;}
function ACN(a,b){J(a);a.Cl=b;b.Ib(a);Bem.NA(a);a.OH();}
function ARe(a,b){a.Cl.nF(b);}
function A7l(a){var b,c,d,e,f,g,h,$$je;ED();b=Be9;En(b);a:{b:{try{if(a.tX===Bem)break b;Cc(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}try{d=E8(CA(),O(1000000));e=O(5000);f=0;g=Be9.h;c:{while(true){if(f>=g)break c;try{e=(Be9.l(f)).Me(d,e);}catch($$e){$$je=R($$e);if($$je instanceof C8){h=$$je;break;}else{throw $$e;}}f=f+1|0;}G(I1((((I()).a(B(33))).a((Cf(Be9.l(f))).u())).b(),h));}}catch($$e){$$je=R($$e);c=$$je;break a;}d:{try{if(a.tX===Bem)break d;Cc(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}try
{a.nF(Cu((AVm(Bb,e))));Cc(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}Cc(b);G(c);}
function AQC(a){var b,c,d,e,f,$$je;b=D2(E8(CA(),O(1000000)),a.PF);ED();c=Be9;En(c);a:{try{d=0;e=Be9.h;while(d<e){(Be9.l(d)).HB(b);d=d+1|0;}Cc(c);break a;}catch($$e){$$je=R($$e);f=$$je;}Cc(c);G(f);}a.tX=Bem;a.e3();}
function Bw(){var a=this;C.call(a);a.AJ=null;a.D5=0;}
function Cs(a,b,c){J(a);a.AJ=b;a.D5=c;}
function BD(a){return a.D5;}
function AY9(a){return a.AJ.b();}
var Df=D(Bw);
var Be$=null;var Be_=null;var Bfa=null;var Bfb=null;var Bfc=null;var Bfd=null;var Bfe=null;function UK(){UK=N(Df);AWp();}
function GH(a,b){var c=new Df();Vr(c,a,b);return c;}
function Vr(a,b,c){UK();Cs(a,b,c);}
function AWp(){Be$=GH(B(34),0);Be_=GH(B(35),1);Bfa=GH(B(36),2);Bfb=GH(B(37),3);Bfc=GH(B(38),4);Bfd=GH(B(39),5);Bfe=H(Df,[Be$,Be_,Bfa,Bfb,Bfc,Bfd]);}
function BI(){Bt.call(this);this.bP=0;}
function U3(a,b){IX(a,b);a.bP=1;a.Af(1);}
function CZ(a){Cl(a);a.bP=1;}
function A8W(a,b,c,d){var e;if((b+a.cf()|0)>d.J()){d.d2=1;return (-1);}e=a.bI(b,c);if(e<0)return (-1);return a.k.e(b+e|0,c,d);}
function A6q(a){return a.bP;}
function AJB(a,b){return 1;}
function OI(){BI.call(this);this.jx=null;}
function BdO(a){var b=new OI();AZg(b,a);return b;}
function AZg(a,b){CZ(a);a.jx=b.b();a.bP=b.i();}
function A5z(a,b,c){var d,e,f,g;d=0;while(true){if(d>=a.jx.i())return a.jx.i();e=a.jx.f(d);f=b+d|0;if(e!=c.f(f)){g=a.jx;if(Gs(g.f(d))!=c.f(f))break;}d=d+1|0;}return (-1);}
function A6P(a){return (((I()).a(B(40))).a(a.jx)).b();}
var Fk=D(0);
var I3=D();
function Bff(){var a=new I3();ABP(a);return a;}
function ABP(a){J(a);}
function AUe(a,b){return 0;}
function AQg(a,b,c){return 0;}
function Ic(){var a=this;I3.call(a);a.dU=null;a.wU=0.0;a.E5=0.0;a.x9=Bb;a.AT=0.0;a.zo=Bb;a.fB=0;a.pB=0;a.Fb=Bb;a.Av=0.0;a.Au=0.0;a.xo=0;a.wJ=0;a.mv=0;a.jt=0;a.kD=0;a.ez=null;a.u7=0.0;a.u8=0.0;a.lU=Bb;a.d5=null;a.fi=null;a.l_=null;a.ma=null;a.hN=null;}
function Bfg(a){var b=new Ic();UM(b,a);return b;}
function Bfh(a,b,c,d,e){var f=new Ic();AAX(f,a,b,c,d,e);return f;}
function Bfi(a,b,c,d,e,f){var g=new Ic();Ov(g,a,b,c,d,e,f);return g;}
function UM(a,b){AAX(a,20.0,0.4000000059604645,1.100000023841858,2.147483648E9,b);}
function AAX(a,b,c,d,e,f){Ov(a,b,b,c,d,e,f);}
function Ov(a,b,c,d,e,f,g){ABP(a);a.ez=BcI();a.d5=If();a.fi=If();a.l_=If();a.ma=If();a.hN=Bbb(a);if(g===null)G(W(B(41)));a.wU=b;a.E5=c;a.x9=Bd6(d*1.0E9);a.AT=e;a.zo=Bd6(f*1.0E9);a.dU=g;}
function Oi(a,b,c,d,e){return a.rF(b,c,d,e);}
function ANj(a,b,c,d,e){if(d>1)return 0;if(d){a.fi.il(b,c);a.fB=0;a.jt=1;a.l_.k0(a.d5);a.ma.k0(a.fi);a.hN.jc();}else{a.d5.il(b,c);a.lU=Bfj.kK();a.ez.uP(b,c,a.lU);if(Bfj.La(1)){a.fB=0;a.jt=1;a.l_.k0(a.d5);a.ma.k0(a.fi);a.hN.jc();}else{a.fB=1;a.jt=0;a.mv=0;a.u7=b;a.u8=c;if(!a.hN.Of())ABC(a.hN,a.AT);}}return a.dU.rF(b,c,d,e);}
function U6(a,b,c,d){return a.PC(b,c,d);}
function ACv(a,b,c,d){var e;if(d>1)return 0;if(a.mv)return 0;if(d)a.fi.il(b,c);else a.d5.il(b,c);if(a.jt){if(a.dU===null)return 0;e=a.dU.PM(a.l_,a.ma,a.d5,a.fi);return !a.dU.GN(a.l_.wC(a.ma),a.d5.wC(a.fi))&&!e?0:1;}a.ez.BF(b,c,Bfj.kK());if(a.fB&&!HI(a,b,c,a.u7,a.u8)){a.hN.jc();a.fB=0;}if(a.fB)return 0;a.kD=1;return a.dU.Jo(b,c,a.ez.n4,a.ez.n3);}
function Zw(a,b,c,d,e){return a.M4(b,c,d,e);}
function ACj(a,b,c,d,e){var f,g,h,i,j;if(d>1)return 0;if(a.fB&&!HI(a,b,c,a.u7,a.u8))a.fB=0;f=a.kD;a.kD=0;a.hN.jc();if(a.mv)return 0;if(a.fB){a:{if(a.xo==e&&a.wJ==d&&Kb(D2(CA(),a.Fb),a.x9)){g=a.Av;h=a.Au;if(HI(a,b,c,g,h))break a;}a.pB=0;}a.pB=a.pB+1|0;a.Fb=CA();a.Av=b;a.Au=c;a.xo=e;a.wJ=d;a.lU=Bb;return a.dU.Nr(b,c,a.pB,e);}if(a.jt){a.jt=0;a.dU.Gm();a.kD=1;if(d)a.ez.uP(a.d5.eM,a.d5.eL,Bfj.kK());else a.ez.uP(a.fi.eM,a.fi.eL,Bfj.kK());return 0;}i=0;if(f&&!a.kD)i=a.dU.Gq(b,c,d,e);j=Bfj.kK();if(Kb(D2(j,a.lU),a.zo))
{a.ez.BF(b,c,j);i=!a.dU.Pt(a.ez.Kw(),a.ez.PJ(),e)&&!i?0:1;}a.lU=Bb;return i;}
function HI(a,b,c,d,e){return CD(b-d)<a.wU&&CD(c-e)<a.E5?1:0;}
var FI=D(0);
var D3=D(C8);
function Bfk(a,b){var c=new D3();Sf(c,a,b);return c;}
function Bfl(a){var b=new D3();WZ(b,a);return b;}
function Bfm(a){var b=new D3();Zm(b,a);return b;}
function Sf(a,b,c){MQ(a,b,c);}
function WZ(a,b){N1(a,b);}
function Zm(a,b){AAZ(a,b);}
var FM=D(D3);
function Bfn(a){var b=new FM();Op(b,a);return b;}
function Op(a,b){WZ(a,b);}
function Q9(){var a=this;C.call(a);a.eq=0;a.ff=null;a.pf=0;a.E0=0.0;a.qh=0;a.qG=0;a.hB=0;}
function Bdh(){var a=new Q9();AGh(a);return a;}
function Bfo(a,b){var c=new Q9();W4(c,a,b);return c;}
function AGh(a){W4(a,51,0.800000011920929);}
function W4(a,b,c){var d;J(a);if(c>0.0&&c<1.0){a.E0=c;d=GN(b,c);a.qh=d*c|0;a.hB=d-1|0;a.qG=CT(O(a.hB));a.ff=Bc(d);return;}G(W((((I()).a(B(42))).cA(c)).b()));}
function AQp(a,b){return Cu(CJ(CP(O(b),Ca(2135587861, 2654435769)),a.qG));}
function Mt(a,b){var c,d,e;c=a.ff;d=a.eX(b);while(true){e=c.data[d];if(!e)return  -(d+1|0)|0;if(e==b)break;d=(d+1|0)&a.hB;}return d;}
function AWM(a,b){var c,d;if(!b){if(a.pf)return 0;a.pf=1;a.eq=a.eq+1|0;return 1;}c=Mt(a,b);if(c>=0)return 0;d= -(c+1|0)|0;a.ff.data[d]=b;d=a.eq+1|0;a.eq=d;if(d>=a.qh)WR(a,a.ff.data.length<<1);return 1;}
function Xf(a,b){var c,d,e;c=a.ff;d=a.eX(b);while(true){e=c.data;if(!e[d])break;d=(d+1|0)&a.hB;}e[d]=b;}
function AQB(a,b){var c,d,e,f,g,h,i;if(!b){if(!a.pf)return 0;a.pf=0;a.eq=a.eq-1|0;return 1;}c=Mt(a,b);if(c<0)return 0;d=a.ff;e=a.hB;f=(c+1|0)&e;while(true){g=d.data;h=g[f];if(!h)break;i=a.eX(h);if(((f-i|0)&e)>((c-i|0)&e)){g[c]=h;c=f;}f=(f+1|0)&e;}g[c]=0;a.eq=a.eq-1|0;return 1;}
function WR(a,b){var c,d,e,f;a:{c=a.ff.data.length;a.qh=b*a.E0|0;a.hB=b-1|0;a.qG=CT(O(a.hB));d=a.ff;a.ff=Bc(b);if(a.eq>0){e=0;while(true){if(e>=c)break a;f=d.data[e];if(f)Xf(a,f);e=e+1|0;}}}}
var Eh=D(Bm);
function C6(){var a=new Eh();Pq(a);return a;}
function Bg(a){var b=new Eh();ME(b,a);return b;}
function Pq(a){Ct(a);}
function ME(a,b){EB(a,b);}
var ABv=D(Eh);
function J2(){var a=new ABv();APM(a);return a;}
function APM(a){Pq(a);}
function LZ(){var a=this;Bm.call(a);a.J$=null;a.OQ=null;}
function A_i(a,b,c){var d=new LZ();AX5(d,a,b,c);return d;}
function AX5(a,b,c,d){EB(a,b);a.J$=c;a.OQ=d;}
var Kk=D();
var Bfp=null;function Mx(){Mx=N(Kk);A2U();}
function Tm(b,c){var d;Mx();d=Bfp.W(b);if(d===null){d=BdA(b,4,c);Bfp.x(b,d);}return d;}
function Gc(b){Mx();return Tm(b,100);}
function SI(b){Mx();return (Gc(b)).eK();}
function RL(b,c){var d,e,f,g;Mx();if(b===null)G(W(B(43)));d=null;e=0;f=b.h;while(e<f){a:{g=b.l(e);if(g!==null){if(d===null){d=Bfp.W(Cf(g));if(d===null)break a;}d.jj(g);if(!c)d=null;}}e=e+1|0;}}
function A2U(){Bfp=DC();}
function Jh(){var a=this;C.call(a);a.LR=null;a.z$=0.0;a.Hq=0.0;a.hy=null;a.jn=null;a.nP=null;a.eu=0;}
function Uf(a,b,c,d){J(a);a.hy=B(44);De();a.jn=Bef;a.nP=Bef;if(c<=0.0)G(W((((I()).a(B(45))).cA(c)).b()));if(d>0.0){a.LR=b;a.z$=c;a.Hq=d;return;}G(W((((I()).a(B(46))).cA(d)).b()));}
function NI(a,b){if(b!==null){a.jn=b;a.uZ(b);return a;}G(W(B(47)));}
function A6$(a,b){}
function KT(a,b){if(b!==null){a.nP=b;a.qB(b);return a;}G(W(B(47)));}
function AZl(a,b){}
function II(a,b,c,d){var e,f,g,$$je;if(!(a.eu==2&&!d)&&a.eu!=3){a.eu=d?2:1;while(true){try{e=a.FB(b,c);}catch($$e){$$je=R($$e);if($$je instanceof Bm){f=$$je;G(AWY(f));}else{throw $$e;}}if(e.hS())return e;if(e.jB()){if(d&&B$(b)){g=a.jn;De();if(g===Bef)return BU(Ba(b));if(Ba(c)<=a.hy.i())return Bei;b.fV(B4(b)+Ba(b)|0);if(a.jn===Beg)IF(c,a.hy);}return e;}if(e.yY()){g=a.jn;De();if(g===Bef)return e;if(a.jn===Beg){if(Ba(c)<a.hy.i())return Bei;IF(c,a.hy);}b.fV(B4(b)+e.i()|0);}else if(e.tI()){g=a.nP;De();if(g===Bef)break;if
(a.nP===Beg){if(Ba(c)<a.hy.i())return Bei;IF(c,a.hy);}b.fV(B4(b)+e.i()|0);}}return e;}G(GI());}
function KA(a,b){if(a.eu!=3&&a.eu!=2)G(GI());a.eu=3;return a.GF(b);}
function ABc(a){a.eu=0;a.uA();return a;}
function V7(a,b){var c,d,e;if(a.eu&&a.eu!=3)G(GI());if(!Ba(b))return T7(0);if(a.eu)ABc(a);c=T7(Bf(8,Ba(b)*a.z$|0));while(true){d=II(a,b,c,0);if(d.jB())break;if(d.hS())c=M0(a,c);if(!d.ml())continue;d.nD();}e=II(a,b,c,1);if(e.ml())e.nD();while(true){e=KA(a,c);if(e.jB())break;c=M0(a,c);}KO(c);return c;}
function M0(a,b){var c,d,e;c=Nd(b);d=c.data;d=JF(c,Bf(8,d.length*2|0));e=KQ(d);e.oA(B4(b));return e;}
function AL3(a,b){Bk();return Bej;}
function AXz(a){}
var Km=D();
var Bfq=null;function BaD(){BaD=N(Km);AOV();}
function LA(b){var $$je;BaD();a:{if(b!==null)try{b.fG();break a;}catch($$e){$$je=R($$e);if($$je instanceof C8){}else{throw $$e;}}}}
function AOV(){Bfq=Ce(0);}
function FG(){var a=this;BC.call(a);a.vw=0;a.i9=0;}
function BdE(a,b){var c=new FG();J0(c,a,b);return c;}
function J0(a,b,c){CM(a);a.vw=b;a.i9=c;}
function ADh(a,b,c,d){var e,f,g,h;e=a.j3(d);if(e!==null&&(b+e.i()|0)<=d.J()){f=0;while(true){if(f>=e.i()){d.bx(a.i9,e.i());return a.k.e(b+e.i()|0,c,d);}g=e.f(f);h=b+f|0;if(g!=c.f(h)&&Gs(e.f(f))!=c.f(h))break;f=f+1|0;}return (-1);}return (-1);}
function A4A(a,b){a.k=b;}
function AFA(a,b){var c;c=b.NC(a.vw);return c;}
function ATU(a){return (((I()).a(B(48))).j(a.bn)).b();}
function AOr(a,b){var c;c=!b.ep(a.i9)?0:1;b.bx(a.i9,(-1));return c;}
function XY(){FG.call(this);this.FQ=0;}
function A$H(a,b){var c=new XY();AHu(c,a,b);return c;}
function AHu(a,b,c){J0(a,b,c);}
function AK3(a,b,c,d){var e,f,g,h;e=a.j3(d);if(e!==null&&(b+e.i()|0)<=d.J()){f=0;while(true){if(f>=e.i()){d.bx(a.i9,e.i());return a.k.e(b+e.i()|0,c,d);}g=Dl(Dw(e.f(f)));h=b+f|0;h=Dw(c.f(h));if(g!=Dl(h))break;f=f+1|0;}return (-1);}return (-1);}
function AVp(a){return (((I()).a(B(49))).j(a.FQ)).b();}
var Ly=D(0);
function IP(){C.call(this);this.IB=null;}
var Bfr=null;var Bfs=null;function Es(){Es=N(IP);A8$();}
function AGC(a){var b=new IP();UC(b,a);return b;}
function UC(a,b){Es();J(a);a.IB=b;}
function ER(){Es();return Bfr;}
function A8$(){Bfr=AGC(B(50));Bfs=AGC(B(51));}
var EH=D(Bw);
var Bft=null;var Bfu=null;var Bfv=null;function Oy(){Oy=N(EH);AWe();}
function A33(a,b){var c=new EH();Tl(c,a,b);return c;}
function Tl(a,b,c){Oy();Cs(a,b,c);}
function AWe(){Bft=A33(B(52),0);Bfu=A33(B(53),1);Bfv=H(EH,[Bft,Bfu]);}
function X_(){var a=this;T.call(a);a.uH=0;a.sA=0;a.BA=0;}
function Bz(a,b){var c=new X_();AFm(c,a,b);return c;}
function A$7(a,b,c){var d=new X_();ARt(d,a,b,c);return d;}
function AFm(a,b,c){Bo(a);a.sA=c;a.uH=b;}
function ARt(a,b,c,d){Bo(a);a.BA=d;a.sA=c;a.uH=b;}
function AYh(a){var b;b=Bat(a.uH);if(a.BA)b.bH.nO(0,2048);b.bf=a.sA;return b;}
var Lz=D(0);
var F9=D(0);
var Nb=D(0);
var DO=D();
function GT(a){J(a);}
function ACS(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.vD(f[c]);e=e+1|0;c=g;}}
var K1=D(DO);
var Bfw=null;function ARO(){ARO=N(K1);AN6();}
function A_G(){var a=new K1();ABk(a);return a;}
function ABk(a){ARO();GT(a);}
function A3c(a,b){A57(b);}
function AN6(){Bfw=A_G();}
function C$(){Bt.call(this);this.Y=null;}
function FP(a,b,c,d){IX(a,c);a.Y=b;a.Af(d);}
function A87(a){return a.Y;}
function AOM(a,b){return !a.Y.b_(b)&&!a.k.b_(b)?0:1;}
function A7g(a,b){return 1;}
function ALB(a){var b;a.cC=1;if(a.k!==null&&!a.k.cC){b=a.k.hW();if(b!==null){a.k.cC=1;a.k=b;}a.k.ea();}if(a.Y!==null){if(!a.Y.cC){b=a.Y.hW();if(b!==null){a.Y.cC=1;a.Y=b;}a.Y.ea();}else if(a.Y instanceof Fu&&a.Y.dj.s1)a.Y=a.Y.k;}}
var Q3=D(C$);
function A$C(a,b,c){var d=new Q3();ADt(d,a,b,c);return d;}
function ADt(a,b,c,d){FP(a,b,c,d);}
function A83(a,b,c,d){var e;e=d.J();if(e>b)return a.k.cF(b,e,c,d);return a.k.e(b,c,d);}
function APy(a,b,c,d){var e;e=d.J();if(a.k.cF(b,e,c,d)>=0)return b;return (-1);}
function A4g(a){return B(54);}
function Cv(){var a=this;Bt.call(a);a.s1=0;a.ls=0;}
var Bfx=null;function Jn(){Jn=N(Cv);AXT();}
function BcU(a){var b=new Cv();Eq(b,a);return b;}
function Eq(a,b){Jn();Cl(a);a.ls=b;}
function ADP(a,b,c,d){var e,f;e=d.np(a.ls);d.uG(a.ls,b);f=a.k.e(b,c,d);if(f<0)d.uG(a.ls,e);return f;}
function A1O(a){return a.ls;}
function AIC(a){return B(55);}
function AEl(a,b){return 0;}
function AXT(){Bfx=A98();}
var J_=D(Cv);
function Bfy(a){var b=new J_();AA4(b,a);return b;}
function AA4(a,b){Eq(a,b);}
function AEx(a,b,c,d){var e,f;e=a.j6();f=d.ep(e);if(f!=b)b=(-1);return b;}
function A6T(a){return B(56);}
var L_=D(0);
function Om(){var a=this;BC.call(a);a.qT=null;a.Ah=0;}
function BaO(a){var b=new Om();AQd(b,a);return b;}
function AQd(a,b){CM(a);a.qT=b.l6();a.Ah=b.bD;}
function AX8(a,b){a.k=b;}
function AIW(a,b,c,d){var e,f,g,h,i,j,k;e=d.dH();f=d.J();g=b+1|0;h=B5(g,f);if(h>0){d.d2=1;return (-1);}i=c.f(b);if(!a.qT.p(i))return (-1);if(BX(i)){if(h<0){j=c.f(g);if(BG(j))return (-1);}}else if(BG(i)&&b>e){k=c.f(b-1|0);if(BX(k))return (-1);}return a.k.e(g,c,d);}
function A3U(a){return ((((I()).a(B(57))).a(!a.Ah?B(58):B(59))).a(a.qT.b())).b();}
var CE=D(C$);
function Bbk(a,b,c){var d=new CE();E_(d,a,b,c);return d;}
function E_(a,b,c,d){FP(a,b,c,d);}
function ATz(a,b,c,d){var e;if(!a.Y.bb(d))return a.k.e(b,c,d);e=a.Y.e(b,c,d);if(e>=0)return e;return a.k.e(b,c,d);}
function AZL(a){return B(60);}
var Q2=D(CE);
function BbF(a,b,c){var d=new Q2();AVP(d,a,b,c);return d;}
function AVP(a,b,c,d){E_(a,b,c,d);}
function ARW(a,b,c,d){var e;if(!a.Y.bb(d))return a.k.e(b,c,d);e=a.k.e(b,c,d);if(e>=0)return e;return a.Y.e(b,c,d);}
var J7=D(0);
var Zq=D(Dj);
function BbQ(a){var b=new Zq();ARC(b,a);return b;}
function ARC(a,b){Gu(a,b,1.0,1.0);}
function AIa(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(BX(l)){if(j>=d){if(h.dN(2)){j=j+(-1)|0;break a;}Bk();i=Bej;break a;}m=k[j];if(!BG(m)){i=BU(1);break a;}j=j+(-1)|0;i=FZ(2);break a;}if(BG(l))i=BU(1);if(l>=128){i=FZ(1);j=j+(-1)|0;break a;}k=e.data;n=f+1|0;k[f]=l<<24>>24;c=j;f=n;}j=c;}h.eg(j);h.dQ(f);return i;}
var C9=D();
var Bem=null;var Bfz=null;var BfA=null;var Bfj=null;var BfB=null;var BfC=null;var BfD=null;var BfE=null;function BH(){var a=this;C.call(a);a.dt=Bb;a.Db=0;}
var BfF=null;function Nc(){Nc=N(BH);AVO();}
function Ql(b){var c;Nc();c=0;while(c<BfF.h){if(!(BfF.l(c)).Ox(b))return D4(O(1),c);c=c+1|0;}return Bb;}
function Pn(b){var c;Nc();c=(-1);a:{while(Dr(b,Bb)){c=c+1|0;if(c>=63)break a;if(Dr(Bs(Ye(b,c),O(1)),Bb))break a;}}return c>=0&&c<BfF.h?BfF.l(c):null;}
function BN(b){var c;Nc();c=Ql(b);if(Hc(c,Bb))return c;BfF.E(b);return D4(O(1),BfF.h-1|0);}
function Gi(a,b){Nc();J(a);a.dt=b;a.Db=Ws(b);}
function AUK(a,b){return b.by()!=a.by()?0:1;}
function ASR(a,b){var c;if(b===null)return 0;if(b===a)return 1;if(!(b instanceof BH))return 0;c=b;if(Z(a.dt,c.dt))return a.zh(c);return 0;}
function AQc(a){return Pn(a.dt);}
function G$(a){return 7489*a.Db|0;}
function AVO(){BfF=Bp();}
var Di=D(B2);
function BfG(){var a=new Di();Jc(a);return a;}
function Jc(a){E6(a);}
var Ig=D(0);
var HT=D();
function BfH(){var a=new HT();Qf(a);return a;}
function Qf(a){J(a);}
function ATH(a,b){}
var Kv=D(0);
function Fv(){var a=this;HT.call(a);a.nd=null;a.L1=null;a.rK=0;a.Cc=0;a.jD=null;a.sc=null;}
function BfI(a,b,c,d,e,f){var g=new Fv();ZC(g,a,b,c,d,e,f);return g;}
function ZC(a,b,c,d,e,f,g){Qf(a);a.nd=b;a.L1=c;a.rK=d;a.Cc=e;a.jD=f;a.sc=g;}
function ASI(a){return a.nd;}
function ANo(a){return AGD(a.rK,a.Cc);}
function AIh(a){return a.jD.ge();}
function ADK(a){var b,c,d,e;b=I();b.a(AAw(a.r7()));if(b.i()>0)b.U(32);(b.a((a.nd.u()).b())).U(40);c=a.ve();d=0;while(true){e=c.data;if(d>=e.length)break;if(d>0)b.U(44);b.a(e[d].u());d=d+1|0;}return (b.U(41)).b();}
function A5Z(a,b){var c,d,e,f,g,h,i;if(a.rK&1)G(Bdy());if(a.sc===null)G(A_f());c=b.data;d=c.length;if(d!=a.jD.data.length)G(CH());e=0;while(true){if(e>=d){f=b.data;g=new (a.nd.gY);a.sc.call(g,f);return g;}if(!a.jD.data[e].g4()&&c[e]!==null){h=a.jD.data[e];i=c[e];if(!h.vE(i))G(CH());}if(a.jD.data[e].g4()&&c[e]===null)break;e=e+1|0;}G(CH());}
var Zg=D(D3);
function AWY(a){var b=new Zg();ALJ(b,a);return b;}
function ALJ(a,b){Zm(a,b);}
var W2=D(CE);
function Bcb(a,b,c){var d=new W2();A0l(d,a,b,c);return d;}
function A0l(a,b,c,d){E_(a,b,c,d);Jn();b.Q(Bfx);}
function A2i(a,b,c,d){var e,f;e=a.Y.e(b,c,d);if(e<0)return (-1);if(e>b){while(true){f=a.Y.e(e,c,d);if(f<=e)break;e=f;}b=e;}return a.k.e(b,c,d);}
var Bx=D();
var BfJ=null;var BfK=null;var BfL=null;var BfM=null;var BfN=null;var BfO=null;var BfP=null;var BfQ=null;var BfR=null;var BfS=null;var BfT=null;var BfU=null;var BfV=null;var BfW=null;var BfX=null;var BfY=null;var BfZ=null;var Bf0=null;var Bf1=null;var Bf2=null;var Bf3=null;var Bf4=null;var Bf5=null;var Bf6=null;var Bf7=null;function JQ(){JQ=N(Bx);ATt();}
function Dt(){JQ();return Bf6.eK();}
function T$(){JQ();Bf6.ej();Bf7.ej();}
function ATt(){BfJ=DY();BfK=DY();BfL=DY();BfM=DY();BfN=DY();BfO=S();BfP=S();BfQ=S();BfR=S();BfS=S();BfT=S();BfU=S();BfV=S();BfW=CI();BfX=CI();BfY=CI();BfZ=CI();Bf0=CI();Bf1=CI();Bf2=CI();Bf3=CI();Bf4=CI();Bf5=BO();Bf6=A$M();Bf7=BcD();}
function EO(){var a=this;C.call(a);a.B=null;a.bq=0;}
function Bf8(){var a=new EO();JO(a);return a;}
function Bdx(a){var b=new EO();JB(b,a);return b;}
function JO(a){JB(a,16);}
function JB(a,b){J(a);a.B=BV(b);}
function X9(a,b){return a.wu(a.bq,b);}
function KY(a,b){return a.kY(a.bq,b);}
function Np(a,b,c){var d,e,f;if(b>=0&&b<=a.bq){if(c===null)c=B(61);else if(c.bO())return a;a.gM(a.bq+c.i()|0);d=a.bq-1|0;while(d>=b){a.B.data[d+c.i()|0]=a.B.data[d];d=d+(-1)|0;}a.bq=a.bq+c.i()|0;d=0;while(d<c.i()){e=a.B.data;f=b+1|0;e[b]=c.f(d);d=d+1|0;b=f;}return a;}G(J2());}
function O$(a,b){return a.Ax(b,10);}
function AUb(a,b,c){return a.KQ(a.bq,b,c);}
function AZO(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(c<0){e=0;c= -c|0;}a:{if(c<d){if(e)Ck(a,b,b+1|0);else{Ck(a,b,b+2|0);f=a.B.data;g=b+1|0;f[b]=45;b=g;}a.B.data[b]=FK(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Cb(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;Ck(a,b,b+i|0);if(e)l=b;else{f=a.B.data;l=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.B.data;g=l+1|0;f[l]=FK(c/k|0,d);c=c%k|0;k=k/d|0;l=g;}}}return a;}
function ABf(a,b){return a.Ds(a.bq,b);}
function Rd(a,b,c){return a.L2(b,c,10);}
function ALx(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(Ka(c,Bb)){e=0;c=A2b(c);}a:{f=O(d);if(Ka(c,f)){if(e)Ck(a,b,b+1|0);else{Ck(a,b,b+2|0);g=a.B.data;h=b+1|0;g[b]=45;b=h;}a.B.data[b]=FK(Cu(c),d);}else{i=1;j=O(1);while(true){k=CP(j,f);if(Kb(k,j))break;if(Hc(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;Ck(a,b,b+i|0);if(e)l=b;else{g=a.B.data;l=b+1|0;g[b]=45;}while(true){if(Kb(j,Bb))break a;g=a.B.data;h=l+1|0;g[l]=FK(Cu(E8(c,j)),d);c=ATr(c,j);j=E8(j,f);l=h;}}}return a;}
function S4(a,b){return a.Cr(a.bq,b);}
function Y5(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=B5(c,0.0);if(!d){Ck(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=48;e=a.B.data;f=d+1|0;e[d]=46;a.B.data[f]=48;return a;}if(!d){Ck(a,b,b+4|0);e=a.B.data;d=b+1|0;e[b]=45;e=a.B.data;f=d+1|0;e[d]=48;e=a.B.data;d=f+1|0;e[f]=46;a.B.data[d]=48;return a;}if(isNaN(c)?1:0){Ck(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=78;e=a.B.data;f=d+1|0;e[d]=97;a.B.data[f]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Ck(a,b,b+8|0);d=b;}else{Ck(a,b,b+9|0);e=a.B.data;d=b+1|0;e[b]=45;}e=a.B.data;f=d+
1|0;e[d]=73;e=a.B.data;d=f+1|0;e[f]=110;e=a.B.data;f=d+1|0;e[d]=102;e=a.B.data;d=f+1|0;e[f]=105;e=a.B.data;f=d+1|0;e[d]=110;e=a.B.data;d=f+1|0;e[f]=105;e=a.B.data;f=d+1|0;e[d]=116;a.B.data[f]=121;return a;}A$d();g=Bec;YV(c,g);h=g.qV;i=g.qw;j=g.vS;k=1;l=1;if(j)l=2;m=9;n=APF(h);if(n>0)m=m-n|0;if(i<7&&i>=(-3)){if(i>=0){k=i+1|0;m=Bf(m,k+1|0);i=0;}else{h=h/Bd$.data[ -i|0]|0;m=m-i|0;i=0;}}if(i){l=l+2|0;if(!(i>(-10)&&i<10))l=l+1|0;if(i<0)l=l+1|0;}if(i&&m==k)m=m+1|0;d=l+m|0;Ck(a,b,b+d|0);if(!j)f=b;else{e=a.B.data;f
=b+1|0;e[b]=45;}o=100000000;p=0;while(p<m){if(o<=0)q=0;else{q=h/o|0;h=h%o|0;}e=a.B.data;d=f+1|0;e[f]=(48+q|0)&65535;k=k+(-1)|0;if(k)f=d;else{e=a.B.data;f=d+1|0;e[d]=46;}o=o/10|0;p=p+1|0;}if(i){e=a.B.data;d=f+1|0;e[f]=69;if(i>=0)f=d;else{i= -i|0;e=a.B.data;f=d+1|0;e[d]=45;}if(i<10)r=f;else{e=a.B.data;r=f+1|0;e[f]=(48+(i/10|0)|0)&65535;}a.B.data[r]=(48+(i%10|0)|0)&65535;}return a;}
function APF(b){var c,d,e,f;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;f=e*100|0;if(b%f|0)f=e;else c=c|2;if(!(b%(f*10|0)|0))c=c|1;return c;}
function MK(a,b){return a.uS(a.bq,b);}
function N0(a,b,c){Ck(a,b,b+1|0);a.B.data[b]=c;return a;}
function Qa(a,b,c){return a.kY(b,c===null?B(61):c.b());}
function SB(a,b){return a.w9(a.bq,b);}
function Oa(a,b,c){return a.kY(b,!c?B(62):B(63));}
function L9(a,b){var c;if(a.B.data.length>=b)return;c=a.B.data.length>=1073741823?2147483647:Bf(b,Bf(a.B.data.length*2|0,5));a.B=JF(a.B,c);}
function M3(a){return FT(a.B,0,a.bq);}
function MB(a){return a.bq;}
function Ox(a,b){if(b>=0&&b<a.bq)return a.B.data[b];G(C6());}
function Pd(a,b,c,d){return a.vg(a.bq,b,c,d);}
function YS(a,b,c,d,e){var f,g;if(d<=e&&e<=c.i()&&d>=0){Ck(a,b,(b+e|0)-d|0);while(d<e){f=a.B.data;g=b+1|0;f[b]=c.f(d);d=d+1|0;b=g;}return a;}G(C6());}
function ABO(a,b){return a.Eu(b,0,b.i());}
function NU(a,b,c,d){return a.um(a.bq,b,c,d);}
function L0(a,b,c,d,e){var f,g,h,i,j;Ck(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.B.data;i=b+1|0;j=d+1|0;h[b]=g[d];b=i;d=j;}return a;}
function M9(a,b){return a.tC(b,0,b.data.length);}
function Z7(a,b,c){return a.cd(b,c);}
function XC(a,b,c,d,e){var f,g,h,i;if(b>c)G(Bg(B(64)));while(b<c){f=d.data;g=e+1|0;h=a.B.data;i=b+1|0;f[e]=h[b];e=g;b=i;}}
function AAK(a,b){a.bq=b;}
function AAY(a,b){var c,d,e;if(b>=0&&b<a.bq){a.bq=a.bq-1|0;while(b<a.bq){c=a.B.data;d=a.B.data;e=b+1|0;c[b]=d[e];b=e;}return a;}G(J2());}
function ABe(a,b,c){var d,e,f,g,h,i;d=B5(b,c);if(d<=0&&b<=a.bq){if(!d)return a;e=a.bq-c|0;a.bq=a.bq-(c-b|0)|0;f=0;while(f<e){g=a.B.data;d=b+1|0;h=a.B.data;i=c+1|0;g[b]=h[c];f=f+1|0;b=d;c=i;}return a;}G(J2());}
function Ck(a,b,c){var d,e;d=a.bq-b|0;a.gM((a.bq+c|0)-b|0);e=d-1|0;while(e>=0){a.B.data[c+e|0]=a.B.data[b+e|0];e=e+(-1)|0;}a.bq=a.bq+(c-b|0)|0;}
function Wn(a,b,c){if(b<=c&&b>=0&&c<=a.bq)return FT(a.B,b,c-b|0);G(C6());}
var Fr=D(0);
var O_=D(EO);
function A4K(){var a=new O_();AZp(a);return a;}
function AZp(a){JO(a);}
function AFZ(a,b){KY(a,b);return a;}
function APz(a,b){MK(a,b);return a;}
function ARV(a,b,c,d){NU(a,b,c,d);return a;}
function AGF(a,b){M9(a,b);return a;}
function AUm(a,b,c,d){Pd(a,b,c,d);return a;}
function A6Z(a,b){ABO(a,b);return a;}
function A1H(a,b,c,d,e){YS(a,b,c,d,e);return a;}
function A1X(a,b,c,d,e){L0(a,b,c,d,e);return a;}
function A7D(a,b,c){N0(a,b,c);return a;}
function A5m(a,b,c){Np(a,b,c);return a;}
function AHe(a,b,c,d,e){return a.Nu(b,c,d,e);}
function AVd(a,b,c,d){return a.Ks(b,c,d);}
function AYH(a,b,c,d,e){return a.HU(b,c,d,e);}
function A4Y(a,b,c,d){return a.Mt(b,c,d);}
function ATb(a,b){return Ox(a,b);}
function A81(a){return MB(a);}
function AVt(a){return M3(a);}
function AVI(a,b){L9(a,b);}
function A6l(a,b,c){return a.Px(b,c);}
function ATo(a,b,c){return a.G4(b,c);}
var EF=D(0);
function CQ(){var a=this;C.call(a);a.hn=0;a.C=0;a.bc=0;a.fv=0;}
function FD(a,b){J(a);a.fv=(-1);a.hn=b;a.bc=b;}
function CS(a){return a.hn;}
function B4(a){return a.C;}
function Gy(a,b){if(b>=0&&b<=a.bc){a.C=b;if(b<a.fv)a.fv=0;return a;}G(W(((((((I()).a(B(65))).j(b)).a(B(66))).j(a.bc)).a(B(67))).b()));}
function BE(a){return a.bc;}
function IK(a,b){if(b>=0&&b<=a.hn){if(a.fv>b)a.fv=(-1);a.bc=b;if(a.C>a.bc)a.C=a.bc;return a;}G(W(((((((I()).a(B(68))).j(b)).a(B(66))).j(a.hn)).a(B(67))).b()));}
function FR(a){a.C=0;a.bc=a.hn;a.fv=(-1);return a;}
function GQ(a){a.bc=a.C;a.C=0;a.fv=(-1);return a;}
function Ba(a){return a.bc-a.C|0;}
function B$(a){return a.C>=a.bc?0:1;}
var NA=D();
var Bf9=null;function AG8(){AG8=N(NA);ACh();}
function PI(b){AG8();return Bf9.W(b);}
function ABA(){var b;AG8();Bf9.K();b=Bf9;Bu();b.x(B(69),Bf$);Bf9.x(B(70),Bf_);Bf9.x(B(71),Bga);Bf9.x(B(72),Bgb);Bf9.x(B(73),Bgc);Bf9.x(B(74),Bgd);Bf9.x(B(75),Bge);Bf9.x(B(76),Bgf);Bf9.x(B(77),Bgg);Bf9.x(B(78),Bgh);Bf9.x(B(79),Bgi);Bf9.x(B(80),Bgj);Bf9.x(B(81),Bgk);Bf9.x(B(82),Bgl);Bf9.x(B(83),Bgm);Bf9.x(B(84),Bgn);Bf9.x(B(85),Bgo);Bf9.x(B(86),Bgp);Bf9.x(B(87),Bgq);Bf9.x(B(88),Bgr);Bf9.x(B(89),Bgs);Bf9.x(B(90),Bgt);Bf9.x(B(91),Bgu);Bf9.x(B(92),Bgv);Bf9.x(B(93),Bgw);Bf9.x(B(94),Bgx);Bf9.x(B(95),Bgy);Bf9.x(B(96),
Bgz);Bf9.x(B(97),BgA);Bf9.x(B(98),BgB);Bf9.x(B(99),BgC);Bf9.x(B(100),BgD);Bf9.x(B(101),BgE);Bf9.x(B(102),BgF);}
function ACh(){Bf9=DC();ABA();}
var E4=D();
function LS(a){J(a);}
function Q(){var a=this;E4.call(a);a.bD=0;a.b5=0;a.bH=null;a.mm=null;a.mN=null;a.bf=0;}
var BgG=null;function JX(){JX=N(Q);AFH();}
function Be(a){JX();LS(a);a.bH=BcM(2048);}
function AVa(a){return null;}
function AUc(a){return a.bH;}
function A1M(a){return !a.b5?(a.bH.k7(0)>=2048?0:1):a.bH.OT(0)>=2048?0:1;}
function AZi(a){return a.bf;}
function A6g(a){return a;}
function ADI(a){var b;if(a.mN===null){b=a.ch();a.mN=BaG(a,b);a.mN.f0(a.b5);}return a.mN;}
function AVk(a){var b;if(a.mm===null){b=a.ch();a.mm=A$5(a,b,a);a.mm.f0(a.jy());a.mm.bf=a.bf;}return a.mm;}
function A8e(a){return 0;}
function AQl(a,b){if(a.bD^b){a.bD=a.bD?0:1;a.b5=a.b5?0:1;}if(!a.bf)a.bf=1;return a;}
function AHc(a){return a.bD;}
function IJ(b,c){JX();return b.p(c);}
function GF(b,c){JX();if(b.bL()!==null&&c.bL()!==null)return (b.bL()).Le(c.bL());return 1;}
function KD(b,c){JX();return (ABb(BgG,b)).GR(c);}
function AFH(){BgG=A$L();}
function YD(){Q.call(this);this.Ft=null;}
function A_e(a){var b=new YD();A0j(b,a);return b;}
function A0j(a,b){a.Ft=b;Be(a);}
function ARJ(a,b){return Xs(b);}
var Gk=D();
var BgH=null;var BgI=null;var BgJ=null;function AOA(){AOA=N(Gk);AGo();}
function A$L(){var a=new Gk();Te(a);return a;}
function Te(a){AOA();J(a);}
function ABb(a,b){var c,d,e;c=0;while(true){AOA();if(c>=BgJ.data.length)G(A_i(B(103),B(103),b));d=BgJ.data[c];e=d.data;if(b.z(e[0]))break;c=c+1|0;}return e[1];}
function AGo(){BgH=A_3();BgI=BbX();BgJ=H($rt_arraycls(C),[H(C,[B(104),Baz()]),H(C,[B(105),A9K()]),H(C,[B(106),Bc5()]),H(C,[B(107),Bdp()]),H(C,[B(108),BgI]),H(C,[B(109),Bb9()]),H(C,[B(110),A$X()]),H(C,[B(111),Ba7()]),H(C,[B(112),BaX()]),H(C,[B(113),A92()]),H(C,[B(114),A$s()]),H(C,[B(115),Ba$()]),H(C,[B(116),A_E()]),H(C,[B(117),A9G()]),H(C,[B(118),Bdg()]),H(C,[B(119),A$n()]),H(C,[B(120),Bb7()]),H(C,[B(121),Bbv()]),H(C,[B(122),Bb8()]),H(C,[B(123),A95()]),H(C,[B(124),Bdv()]),H(C,[B(125),Bbo()]),H(C,[B(126),A_h()]),
H(C,[B(127),Bc3()]),H(C,[B(128),BcX()]),H(C,[B(129),Bag()]),H(C,[B(130),A94()]),H(C,[B(131),BcN()]),H(C,[B(132),BgH]),H(C,[B(133),A_p()]),H(C,[B(134),Ba8()]),H(C,[B(135),BgH]),H(C,[B(136),A9E()]),H(C,[B(137),BgI]),H(C,[B(138),A$E()]),H(C,[B(139),M(0,127)]),H(C,[B(140),M(128,255)]),H(C,[B(141),M(256,383)]),H(C,[B(142),M(384,591)]),H(C,[B(143),M(592,687)]),H(C,[B(144),M(688,767)]),H(C,[B(145),M(768,879)]),H(C,[B(146),M(880,1023)]),H(C,[B(147),M(1024,1279)]),H(C,[B(148),M(1280,1327)]),H(C,[B(149),M(1328,1423)]),
H(C,[B(150),M(1424,1535)]),H(C,[B(151),M(1536,1791)]),H(C,[B(152),M(1792,1871)]),H(C,[B(153),M(1872,1919)]),H(C,[B(154),M(1920,1983)]),H(C,[B(155),M(2304,2431)]),H(C,[B(156),M(2432,2559)]),H(C,[B(157),M(2560,2687)]),H(C,[B(158),M(2688,2815)]),H(C,[B(159),M(2816,2943)]),H(C,[B(160),M(2944,3071)]),H(C,[B(161),M(3072,3199)]),H(C,[B(162),M(3200,3327)]),H(C,[B(163),M(3328,3455)]),H(C,[B(164),M(3456,3583)]),H(C,[B(165),M(3584,3711)]),H(C,[B(166),M(3712,3839)]),H(C,[B(167),M(3840,4095)]),H(C,[B(168),M(4096,4255)]),
H(C,[B(169),M(4256,4351)]),H(C,[B(170),M(4352,4607)]),H(C,[B(171),M(4608,4991)]),H(C,[B(172),M(4992,5023)]),H(C,[B(173),M(5024,5119)]),H(C,[B(174),M(5120,5759)]),H(C,[B(175),M(5760,5791)]),H(C,[B(176),M(5792,5887)]),H(C,[B(177),M(5888,5919)]),H(C,[B(178),M(5920,5951)]),H(C,[B(179),M(5952,5983)]),H(C,[B(180),M(5984,6015)]),H(C,[B(181),M(6016,6143)]),H(C,[B(182),M(6144,6319)]),H(C,[B(183),M(6400,6479)]),H(C,[B(184),M(6480,6527)]),H(C,[B(185),M(6528,6623)]),H(C,[B(186),M(6624,6655)]),H(C,[B(187),M(6656,6687)]),
H(C,[B(188),M(7424,7551)]),H(C,[B(189),M(7552,7615)]),H(C,[B(190),M(7616,7679)]),H(C,[B(191),M(7680,7935)]),H(C,[B(192),M(7936,8191)]),H(C,[B(193),M(8192,8303)]),H(C,[B(194),M(8304,8351)]),H(C,[B(195),M(8352,8399)]),H(C,[B(196),M(8400,8447)]),H(C,[B(197),M(8448,8527)]),H(C,[B(198),M(8528,8591)]),H(C,[B(199),M(8592,8703)]),H(C,[B(200),M(8704,8959)]),H(C,[B(201),M(8960,9215)]),H(C,[B(202),M(9216,9279)]),H(C,[B(203),M(9280,9311)]),H(C,[B(204),M(9312,9471)]),H(C,[B(205),M(9472,9599)]),H(C,[B(206),M(9600,9631)]),
H(C,[B(207),M(9632,9727)]),H(C,[B(208),M(9728,9983)]),H(C,[B(209),M(9984,10175)]),H(C,[B(210),M(10176,10223)]),H(C,[B(211),M(10224,10239)]),H(C,[B(212),M(10240,10495)]),H(C,[B(213),M(10496,10623)]),H(C,[B(214),M(10624,10751)]),H(C,[B(215),M(10752,11007)]),H(C,[B(216),M(11008,11263)]),H(C,[B(217),M(11264,11359)]),H(C,[B(218),M(11392,11519)]),H(C,[B(219),M(11520,11567)]),H(C,[B(220),M(11568,11647)]),H(C,[B(221),M(11648,11743)]),H(C,[B(222),M(11776,11903)]),H(C,[B(223),M(11904,12031)]),H(C,[B(224),M(12032,12255)]),
H(C,[B(225),M(12272,12287)]),H(C,[B(226),M(12288,12351)]),H(C,[B(227),M(12352,12447)]),H(C,[B(228),M(12448,12543)]),H(C,[B(229),M(12544,12591)]),H(C,[B(230),M(12592,12687)]),H(C,[B(231),M(12688,12703)]),H(C,[B(232),M(12704,12735)]),H(C,[B(233),M(12736,12783)]),H(C,[B(234),M(12784,12799)]),H(C,[B(235),M(12800,13055)]),H(C,[B(236),M(13056,13311)]),H(C,[B(237),M(13312,19893)]),H(C,[B(238),M(19904,19967)]),H(C,[B(239),M(19968,40959)]),H(C,[B(240),M(40960,42127)]),H(C,[B(241),M(42128,42191)]),H(C,[B(242),M(42752,
42783)]),H(C,[B(243),M(43008,43055)]),H(C,[B(244),M(44032,55203)]),H(C,[B(245),M(55296,56191)]),H(C,[B(246),M(56192,56319)]),H(C,[B(247),M(56320,57343)]),H(C,[B(248),M(57344,63743)]),H(C,[B(249),M(63744,64255)]),H(C,[B(250),M(64256,64335)]),H(C,[B(251),M(64336,65023)]),H(C,[B(252),M(65024,65039)]),H(C,[B(253),M(65040,65055)]),H(C,[B(254),M(65056,65071)]),H(C,[B(255),M(65072,65103)]),H(C,[B(256),M(65104,65135)]),H(C,[B(257),M(65136,65279)]),H(C,[B(258),M(65280,65519)]),H(C,[B(259),M(0,1114111)]),H(C,[B(260),
Ba_()]),H(C,[B(261),Bz(0,1)]),H(C,[B(262),GP(62,1)]),H(C,[B(263),Bz(1,1)]),H(C,[B(264),Bz(2,1)]),H(C,[B(265),Bz(3,0)]),H(C,[B(266),Bz(4,0)]),H(C,[B(267),Bz(5,1)]),H(C,[B(268),GP(448,1)]),H(C,[B(269),Bz(6,1)]),H(C,[B(270),Bz(7,0)]),H(C,[B(271),Bz(8,1)]),H(C,[B(272),GP(3584,1)]),H(C,[B(273),Bz(9,1)]),H(C,[B(274),Bz(10,1)]),H(C,[B(275),Bz(11,1)]),H(C,[B(276),GP(28672,0)]),H(C,[B(277),Bz(12,0)]),H(C,[B(278),Bz(13,0)]),H(C,[B(279),Bz(14,0)]),H(C,[B(280),BbT(983040,1,1)]),H(C,[B(281),Bz(15,0)]),H(C,[B(282),Bz(16,
1)]),H(C,[B(283),Bz(18,1)]),H(C,[B(284),A$7(19,0,1)]),H(C,[B(285),GP(1643118592,1)]),H(C,[B(286),Bz(20,0)]),H(C,[B(287),Bz(21,0)]),H(C,[B(288),Bz(22,0)]),H(C,[B(289),Bz(23,0)]),H(C,[B(290),Bz(24,1)]),H(C,[B(291),GP(2113929216,1)]),H(C,[B(292),Bz(25,1)]),H(C,[B(293),Bz(26,0)]),H(C,[B(294),Bz(27,0)]),H(C,[B(295),Bz(28,1)]),H(C,[B(296),Bz(29,0)]),H(C,[B(297),Bz(30,0)])]);}
var M5=D(0);
function JH(){var a=this;C.call(a);a.ey=null;a.eC=null;a.no=null;a.pg=null;}
var BgK=null;function Ut(){Ut=N(JH);A5u();}
function AKT(){var a=new JH();PV(a);return a;}
function ACD(a,b){return b.M(a.no);}
function A8R(a,b){return b.M(a.pg);}
function PV(a){Ut();J(a);a.ey=S();a.eC=S();a.no=S();a.pg=S();a.Kk();}
function A3u(a,b,c){a.ey.I(b.n>=c.n?c.n:b.n,b.o>=c.o?c.o:b.o,b.q>=c.q?c.q:b.q);a.eC.I(b.n<=c.n?c.n:b.n,b.o<=c.o?c.o:b.o,b.q<=c.q?c.q:b.q);((a.no.M(a.ey)).fs(a.eC)).eh(0.5);(a.pg.M(a.eC)).gb(a.ey);return a;}
function AY$(a){a.ey.I(Infinity,Infinity,Infinity);a.eC.I((-Infinity),(-Infinity),(-Infinity));a.no.I(0.0,0.0,0.0);a.pg.I(0.0,0.0,0.0);return a;}
function APo(a){return a.Dh(a.ey.I(0.0,0.0,0.0),a.eC.I(0.0,0.0,0.0));}
function ASA(a,b,c,d){return a.Dh(a.ey.I(Hv(a.ey.n,b),Hv(a.ey.o,c),Hv(a.ey.q,d)),a.eC.I(HY(a.eC.n,b),HY(a.eC.o,c),HY(a.eC.q,d)));}
function Hv(b,c){Ut();if(b>c)b=c;return b;}
function HY(b,c){Ut();if(b>c)c=b;return c;}
function A5u(){BgK=S();}
var KI=D(0);
function AAs(){C.call(this);this.nc=null;}
function Bbe(a){var b=new AAs();ARb(b,a);return b;}
function ARb(a,b){J(a);a.nc=b;}
function AWt(a,b,c){GD();if(c===BgL)return ATA(a.nc,b,c);G(U(((((I()).a(B(298))).dC(c)).a(B(299))).b()));}
function A7H(a,b){var c,d;c=new F4;d=a.nc;GD();G_(c,d,b,BgM);return c;}
function AU6(a,b){var c,d;c=new F4;d=a.nc;GD();G_(c,d,b,BgL);return c;}
var EJ=D(Bw);
var BgN=null;var BgO=null;var BgP=null;function Z5(){Z5=N(EJ);ATZ();}
function AVl(a,b){var c=new EJ();Zk(c,a,b);return c;}
function XJ(){Z5();return BgP.ge();}
function Zk(a,b,c){Z5();Cs(a,b,c);}
function ATZ(){BgN=AVl(B(300),0);BgO=AVl(B(301),1);BgP=H(EJ,[BgN,BgO]);}
var IB=D(T);
function BbX(){var a=new IB();Ta(a);return a;}
function Ta(a){Bo(a);}
function YF(a){return (CO()).bG(48,57);}
var Rp=D(T);
function A_h(){var a=new Rp();AE0(a);return a;}
function AE0(a){Bo(a);}
function AYJ(a){var b;b=A$f(a);b.bf=1;return b;}
function Ei(){var a=this;BC.call(a);a.l9=0;a.qC=null;a.pW=null;a.pR=0;}
function BdL(a,b){var c=new Ei();JL(c,a,b);return c;}
function JL(a,b,c){CM(a);a.l9=1;a.pW=b;a.pR=c;}
function A8k(a,b){a.k=b;}
function AM0(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=Bc(4);f=0;g=d.J();if(b>=g)return (-1);h=a.u9(b,c,g);i=b+a.l9|0;j=AAM(h);if(j===null){k=e.data;l=1;k[f]=h;}else{l=j.data.length;Y(j,0,e,0,l);l=f+l|0;}a:{if(i<g){m=a.u9(i,c,g);while(l<4){if(!A3R(m)){k=e.data;n=l+1|0;k[l]=m;}else{k=(AAM(m)).data;if(k.length!=2){o=e.data;n=l+1|0;o[l]=k[0];}else{o=e.data;m=l+1|0;o[l]=k[0];n=m+1|0;o[m]=k[1];}}i=i+a.l9|0;if(i>=g){l=n;break a;}m=a.u9(i,c,g);l=n;}}}if(l!=a.pR)return (-1);p=0;while(true){if(p>=l)return a.k.e(i,c,d);if
(e.data[p]!=a.pW.data[p])break;p=p+1|0;}return (-1);}
function H5(a){var b,c;if(a.qC===null){b=I();c=0;while(c<a.pR){b.qI(Er(a.pW.data[c]));c=c+1|0;}a.qC=b.b();}return a.qC;}
function A3a(a){return (((I()).a(B(302))).a(H5(a))).b();}
function AJo(a,b,c,d){var e,f,g,h;a.l9=1;if(b>=(d-1|0))e=c.f(b);else{f=b+1|0;e=c.f(b);g=c.f(f);if(Go(e,g)){h=IR([e,g]);e=Se(h,0);a.l9=2;}}return e;}
function AJ8(a,b){var c,d;a:{if(b instanceof Ei){c=b;if(!(H5(c)).z(H5(a))){d=0;break a;}}d=1;}return d;}
function A4E(a,b){return 1;}
var Zf=D(Ei);
function A$3(a,b){var c=new Zf();AVC(c,a,b);return c;}
function AVC(a,b,c){JL(a,b,c);}
function Jf(){var a=this;C.call(a);a.r4=0;a.tS=null;a.h5=null;a.lD=0;}
function Wr(a){J(a);a.h5=null;a.lD=0;}
function AJV(a,b){a.tS=b;}
function NE(a){return a.h5===null?0:1;}
function AMy(a){if(!NE(a))return;a.lD=a.lD+1|0;if(!a.r4)a.Mn(a.h5.lf());else a.Lz(a.h5.lf());a.h5=null;}
function ANR(a,b){if(b<0)G(W(B(303)));if(NE(a))a.jc();a.r4=0;a.h5=Bn(a.Lu(a.lD,b));}
function Yp(a,b){if(b!=a.lD)return;if(!a.r4)a.h5=null;if(a.tS!==null)a.tS.e3();}
var Yv=D();
function AGn(){return {};}
function C7(){var a=this;Jh.call(a);a.AY=null;a.Dm=null;}
function Gr(a,b,c,d){Uf(a,b,c,d);a.AY=Ce(512);a.Dm=BV(512);}
function AQm(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.AY;e=0;f=0;g=a.Dm;a:{while(true){if((e+32|0)>f&&B$(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Bq(Ba(b)+j|0,i.length);b.zz(d,j,f-j|0);e=0;}if(!B$(c)){if(!B$(b)&&e>=f){Bk();k=Bej;}else{Bk();k=Bei;}break a;}i=g.data;l=0;m=Bq(Ba(c),i.length);n=A_D(b,c);k=a.mZ(d,e,f,g,l,m,n);e=n.zJ;if(k===null&&l==n.qj){Bk();k=Bej;}j=n.qj;c.ON(g,0,j);if(k!==null)break;}}b.fV(B4(b)-(f-e|0)|0);return k;}
var Xi=D(C7);
function BcS(a){var b=new Xi();AFt(b,a);return b;}
function AFt(a,b){Gr(a,b,1.0,1.0);}
function ASw(a,b,c,d,e,f,g,h){var i,j,k,l,m;i=null;a:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(l&128){i=BU(1);c=k+(-1)|0;break a;}j=e.data;m=f+1|0;j[f]=l&65535;c=k;f=m;}}h.eg(c);h.dQ(f);return i;}
var Xx=D();
function CA(){return CP(D8(),O(1000000));}
function F7(){var a=this;C.call(a);a.kc=0;a.ks=0;a.Ca=null;a.gJ=null;a.bX=null;a.oN=0;a.se=null;a.n7=0;a.n8=0;a.n9=0;a.zn=0.0;a.mV=null;a.o3=null;a.y3=null;a.Ju=null;a.ik=null;a.kg=null;}
var BgQ=null;var BgR=0;var BgS=null;function Fy(){Fy=N(F7);AKd();}
function AN_(a){var b=new F7();OG(b,a);return b;}
function Ot(a,b,c){var d=new F7();Ts(d,a,b,c);return d;}
function OG(a,b){var c,d,e;Fy();J(a);a.n7=255;a.n8=255;a.n9=255;a.mV=I$(a.n7,a.n8,a.n9,a.zn);Gj();a.o3=BgT;R8();a.y3=BgU;c=b;d=c.rf();e=c.fJ.iE.W(d);LN(a,(-1),(-1),e,null);if(a.ik!==null)return;G(U(((((I()).a(B(304))).a(b.rf())).a(B(305))).b()));}
function Ts(a,b,c,d){Fy();J(a);a.n7=255;a.n8=255;a.n9=255;a.mV=I$(a.n7,a.n8,a.n9,a.zn);Gj();a.o3=BgT;R8();a.y3=BgU;LN(a,b,c,null,null);}
function LN(a,b,c,d,e){var f;if(e!==null){a.kg=e;a.kc=e.getWidth();a.ks=e.getHeight();}else if(d===null){a.kc=b;a.ks=c;}else{a.ik=d;a.kc=d.width;a.ks=d.height;}AWI();a.Ca=BgV;a.se=Mk(4);Fy();f=BgR;BgR=f+1|0;a.oN=f;a.se.Kg(0,a.oN);BgQ.x(Bn(a.oN),a);}
function QX(a){var b,c,d,e,f;b=BgW.iS();c=b.o4();d=c.createElement("canvas");a.gJ=d;e=a.gJ;f=a.kc;e.width=f;e=a.gJ;f=a.ks;e.height=f;a.bX=a.gJ.getContext("2d");e=a.bX;f=$rt_ustr((GM()).b());e.globalCompositeOperation=f;}
function GM(){Fy();Ih();return BgX;}
function I$(b,c,d,e){Fy();return ((((((((((I()).a(B(306))).j(b)).a(B(23))).j(c)).a(B(23))).j(d)).a(B(23))).cA(e)).a(B(24))).b();}
function ACC(a,b){var c,d;a.o3=b;GK(a);c=a.bX;d=$rt_ustr((GM()).b());c.globalCompositeOperation=d;}
function AFV(a){return a.Ca;}
function AJx(a){return 6408;}
function AL8(a){return 6408;}
function AO1(a){return 5121;}
function AH9(a){return a.kc;}
function ALu(a){return a.ks;}
function A5k(a){return a.se;}
function AV0(a){Fy();BgQ.H5(Bn(a.oN));}
function ACT(a){GK(a);return a.gJ;}
function GK(a){var b,c;if(a.gJ===null){QX(a);if(a.ik!==null){b=a.bX;Ih();c=$rt_ustr(E2(BgY));b.globalCompositeOperation=c;b=a.bX;c=a.ik;b.drawImage(c,0.0,0.0);b=a.bX;c=$rt_ustr(E2(GM()));b.globalCompositeOperation=c;}if(a.kg!==null){c=a.bX;Ih();b=$rt_ustr(E2(BgY));c.globalCompositeOperation=b;b=a.bX;c=a.kg;b.drawImage(c,0.0,0.0);b=a.bX;c=$rt_ustr(E2(GM()));b.globalCompositeOperation=c;}}}
function AEk(a){return a.gJ===null&&a.ik!==null?1:0;}
function APK(a){return a.ik;}
function A3j(a){return a.gJ===null&&a.kg!==null?1:0;}
function A8u(a){return a.kg;}
function AXm(a,b,c,d,e,f,g,h){var i;i=b.sz();NP(a,i,e,f,g,h,c,d,g,h);}
function AN0(a,b,c,d,e,f,g,h,i,j){NP(a,b.sz(),c,d,e,f,g,h,i,j);}
function NP(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u;GK(a);k=a.o3;Gj();if(k===BgZ){l=a.bX;k=$rt_ustr(BgS);l.fillStyle=k;l=a.bX;k=$rt_ustr(BgS);l.strokeStyle=k;l=a.bX;k="destination-out";l.globalCompositeOperation=k;a.bX.beginPath();l=a.bX;m=g;n=h;o=i;p=j;l.rect(m,n,o,p);Z5();Rg(a,BgN);a.bX.closePath();l=a.bX;k=$rt_ustr(a.mV);l.fillStyle=k;q=a.bX;l=$rt_ustr(a.mV);q.strokeStyle=l;q=a.bX;Ih();l=$rt_ustr(E2(BgX));q.globalCompositeOperation=l;}if(e&&f&&i&&j){l=a.bX;m=c;n=d;o=e;p=f;r=g;s=h;t=i;u=j;l.drawImage(b,
m,n,o,p,r,s,t,u);}a.Ju=null;}
function Rg(a,b){a:{GK(a);Bdf();switch(Bg0.data[BD(b)]){case 1:break;case 2:a.bX.stroke();break a;default:break a;}a.bX.fill();}}
function AKd(){BgQ=C3();BgR=0;BgS=I$(255,255,255,1.0);}
function Hr(){BH.call(this);this.H2=null;}
var Bg1=Bb;var Bg2=Bb;function AAD(){AAD=N(Hr);A8S();}
function A8S(){Bg1=BN(B(307));Bg2=Bg1;}
var ABF=D(Cv);
function BaQ(){var a=new ABF();ASP(a);return a;}
function ASP(a){Eq(a,(-1));}
function AWn(a,b,c,d){return b;}
function A0a(a){return B(308);}
var Kw=D(0);
var Jl=D(BC);
function Bar(a,b){var c=new Jl();Va(c,a,b);return c;}
function Va(a,b,c){RW(a,b,c);}
function AM2(a,b,c,d){var e,f,g,h,i;e=d.ep(a.bn);d.bx(a.bn,b);f=a.bQ.db();g=0;while(true){if(g>=f){d.bx(a.bn,e);return (-1);}h=a.bQ.l(g);i=h.e(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function AK0(a){return B(309);}
function A40(a,b){var c;c=b.ep(a.bn);return !c?0:1;}
var Dm=D(Jl);
function Ba1(a,b){var c=new Dm();F3(c,a,b);return c;}
function F3(a,b,c){Va(a,b,c);}
function AW5(a,b,c,d){var e,f,g,h,i;e=d.ep(a.bn);d.bx(a.bn,b);f=a.bQ.db();g=0;while(g<f){h=a.bQ.l(g);i=h.e(b,c,d);if(i>=0)return a.k.e(a.dj.dL(),c,d);g=g+1|0;}d.bx(a.bn,e);return (-1);}
function A4B(a,b){a.k=b;}
function AC2(a){return B(309);}
var UP=D(Dm);
function Bbs(a,b){var c=new UP();AHT(c,a,b);return c;}
function AHT(a,b,c){F3(a,b,c);}
function ANd(a,b,c,d){var e,f,g,h;e=a.bQ.db();f=0;while(f<e){g=a.bQ.l(f);h=g.e(b,c,d);if(h>=0)return a.k.e(b,c,d);f=f+1|0;}return (-1);}
function AQt(a,b){return 0;}
function A8f(a){return B(310);}
var Gm=D(0);
var OY=D();
function BbP(){var a=new OY();A3K(a);return a;}
function A3K(a){J(a);}
function H2(){C.call(this);this.pZ=null;}
function R0(a){J(a);a.pZ=Bp();}
function A0e(a,b){var c,d,e;c=b.kH;if(c!==null&&c.up(b))return c;d=a.pZ.bY();while(true){if(!d.bC()){e=a.FE(b);if(e.up(b)){e.DO();a.pZ.E(e);return e;}G(U(B(311)));}e=d.bz();if(e.up(b))break;}return e;}
function OX(){H2.call(this);this.v0=null;}
function Bg3(a){var b=new OX();V8(b,a);return b;}
function BcA(){var a=new OX();A8h(a);return a;}
function V8(a,b){R0(a);if(b===null)b=Ban();a.v0=b;}
function A8h(a){V8(a,null);}
function AQQ(a,b){return A$D(b,a.v0);}
var AAx=D(Dm);
function BaL(a,b){var c=new AAx();AG$(c,a,b);return c;}
function AG$(a,b,c){F3(a,b,c);}
function AEc(a,b,c,d){var e,f,g;e=a.bQ.db();f=0;while(true){if(f>=e)return a.k.e(b,c,d);g=a.bQ.l(f);if(g.e(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A6w(a,b){return 0;}
function AHQ(a){return B(312);}
var KS=D(0);
function Ha(){var a=this;C.call(a);a.BW=null;a.o0=0;a.oB=0;a.ko=null;a.c_=null;a.CO=0;a.jE=0;}
var Bg4=0;function BbV(a,b,c,d){var e=new Ha();AWk(e,a,b,c,d);return e;}
function AWk(a,b,c,d,e){J(a);a.o0=0;a.oB=0;a.jE=0;a.BW=b;a.c_=c;a.ko=d;a.CO=e;if(a.c_!==null){a.c_=Nt(a,a.c_);a.o0=a.c_.bp();a.oB=a.c_.bm();if(d===null)a.ko=a.c_.fZ();}}
function AS7(a){return a.jE;}
function AWl(a){if(a.jE)G(U(B(313)));if(a.c_===null){a.c_=Nt(a,AN_(a.BW));a.o0=a.c_.bp();a.oB=a.c_.bm();if(a.ko===null)a.ko=a.c_.fZ();}a.jE=1;}
function Nt(a,b){var c,d,e,f,g;a:{if(BfD===null&&Bg4){c=b.bp();d=b.bm();e=IG(c);f=IG(d);if(c!=e)break a;if(d!=f)break a;}return b;}g=Ot(e,f,b.fZ());g.yR(b,0,0,0,0,c,d);b.io();return g;}
function AK6(a){var b;if(!a.jE)G(U(B(314)));a.jE=0;b=a.c_;a.c_=null;return b;}
function AZ6(a){return 1;}
function AKb(a){return a.o0;}
function AWB(a){return a.oB;}
function AGZ(a){return a.ko;}
function AT4(a){return a.CO;}
function AGb(a){return 1;}
function A2l(a){Oy();return Bft;}
function AWT(a,b){G(U(B(315)));}
var Nv=D(0);
function ABq(){var a=this;C.call(a);a.v3=null;a.ui=null;}
function Bau(a,b){var c=new ABq();AIn(c,a,b);return c;}
function AIn(a,b,c){J(a);a.v3=b;a.ui=c;}
function AG_(a,b){var c,d,e;c=AGn();d=!!b.w3;c.alpha=d;d=!!b.E2;c.antialias=d;d=!!b.Aj;c.stencil=d;d=!!b.DG;c.premultipliedAlpha=d;d=!!b.Fm;c.preserveDrawingBuffer=d;e=a.ui;d=e.getContext("webgl",c);return d;}
function A01(a){return a.ui;}
function AOB(a){return AXy();}
function AKL(a){return a.v3;}
function ACA(a){var b;b=(a.iS()).o4();return b.createElement("img");}
function AE5(a){return new XMLHttpRequest();}
function A3T(a){return Bcp();}
var Hm=D(Bm);
function Bdj(){var a=new Hm();Ru(a);return a;}
function Ru(a){Ct(a);}
var ABK=D(Hm);
function C5(){var a=new ABK();AZ9(a);return a;}
function AZ9(a){Ru(a);}
function Nu(){var a=this;BH.call(a);a.EU=0;a.JC=0;a.Kd=0;a.Hh=0.0;}
var Bg5=Bb;function GA(){GA=N(Nu);AMU();}
function TK(b){GA();return Dr(Bs(b,Bg5),b)?0:1;}
function AMU(){Bg5=BN(B(316));}
var Y2=D();
function Zy(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(CH());}return b.data.length;}
function K7(b,c){if(b===null)G(It());if(b===F($rt_voidcls()))G(CH());if(c<0)G(A7F());return ARg(b.zG(),c);}
function ARg(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function DL(){C.call(this);this.bl=null;}
function HH(a){J(a);a.bl=CL(0.0,0.0,0.0,1.0);}
function N4(){var a=this;DL.call(a);a.ew=null;a.dw=0.0;}
function Bcv(){var a=new N4();AI5(a);return a;}
function AI5(a){HH(a);a.ew=S();}
function AI_(a,b){return a.Hn(b.bl,b.ew,b.dw);}
function AMA(a,b,c,d){if(b!==null)a.bl.eI(b);if(c!==null)a.ew.M(c);a.dw=d;return a;}
function AD$(a,b,c,d,e,f,g,h){a.bl.hJ(b,c,d,1.0);a.ew.I(e,f,g);a.dw=h;return a;}
function AVN(a,b){var c;a:{b:{if(b!==null){if(b===a)break b;if(a.bl.z(b.bl)&&a.ew.z(b.ew)&&a.dw===b.dw)break b;}c=0;break a;}c=1;}return c;}
var Zn=D();
function Bch(){var a=new Zn();AEC(a);return a;}
function AEC(a){J(a);}
function TT(){C.call(this);this.N=null;}
function BcW(a){var b=new TT();ADU(b,a);return b;}
function ADU(a,b){J(a);a.N=Bcm(4);a.N.Iq(b);}
function AJj(a,b){var c,d,e,f,$$je;c=a.N.fR();a:{try{d=0;e=a.N.h;}catch($$e){$$je=R($$e);f=$$je;break a;}b:{try{while(d<e){if(c.data[d].ly(b))break b;d=d+1|0;}}catch($$e){$$je=R($$e);f=$$je;break a;}a.N.be();return 0;}try{}catch($$e){$$je=R($$e);f=$$je;break a;}a.N.be();return 1;}a.N.be();G(f);}
function ASv(a,b){var c,d,e,f,$$je;c=a.N.fR();a:{try{d=0;e=a.N.h;}catch($$e){$$je=R($$e);f=$$je;break a;}b:{try{while(d<e){if(c.data[d].or(b))break b;d=d+1|0;}}catch($$e){$$je=R($$e);f=$$je;break a;}a.N.be();return 0;}try{}catch($$e){$$je=R($$e);f=$$je;break a;}a.N.be();return 1;}a.N.be();G(f);}
function ASM(a,b){var c,d,e,f,$$je;c=a.N.fR();a:{try{d=0;e=a.N.h;}catch($$e){$$je=R($$e);f=$$je;break a;}b:{try{while(d<e){if(c.data[d].lk(b))break b;d=d+1|0;}}catch($$e){$$je=R($$e);f=$$je;break a;}a.N.be();return 0;}try{}catch($$e){$$je=R($$e);f=$$je;break a;}a.N.be();return 1;}a.N.be();G(f);}
function ADq(a,b,c,d,e){var f,g,h,i,$$je;f=a.N.fR();a:{try{g=0;h=a.N.h;}catch($$e){$$je=R($$e);i=$$je;break a;}b:{try{while(g<h){if(f.data[g].id(b,c,d,e))break b;g=g+1|0;}}catch($$e){$$je=R($$e);i=$$je;break a;}a.N.be();return 0;}try{}catch($$e){$$je=R($$e);i=$$je;break a;}a.N.be();return 1;}a.N.be();G(i);}
function AOY(a,b,c,d,e){var f,g,h,i,$$je;f=a.N.fR();a:{try{g=0;h=a.N.h;}catch($$e){$$je=R($$e);i=$$je;break a;}b:{try{while(g<h){if(f.data[g].hE(b,c,d,e))break b;g=g+1|0;}}catch($$e){$$je=R($$e);i=$$je;break a;}a.N.be();return 0;}try{}catch($$e){$$je=R($$e);i=$$je;break a;}a.N.be();return 1;}a.N.be();G(i);}
function AHm(a,b,c,d){var e,f,g,h,$$je;e=a.N.fR();a:{try{f=0;g=a.N.h;}catch($$e){$$je=R($$e);h=$$je;break a;}b:{try{while(f<g){if(e.data[f].i2(b,c,d))break b;f=f+1|0;}}catch($$e){$$je=R($$e);h=$$je;break a;}a.N.be();return 0;}try{}catch($$e){$$je=R($$e);h=$$je;break a;}a.N.be();return 1;}a.N.be();G(h);}
function AQs(a,b,c){var d,e,f,g,$$je;d=a.N.fR();a:{try{e=0;f=a.N.h;}catch($$e){$$je=R($$e);g=$$je;break a;}b:{try{while(e<f){if(d.data[e].mW(b,c))break b;e=e+1|0;}}catch($$e){$$je=R($$e);g=$$je;break a;}a.N.be();return 0;}try{}catch($$e){$$je=R($$e);g=$$je;break a;}a.N.be();return 1;}a.N.be();G(g);}
function A17(a,b,c){var d,e,f,g,$$je;d=a.N.fR();a:{try{e=0;f=a.N.h;}catch($$e){$$je=R($$e);g=$$je;break a;}b:{try{while(e<f){if(d.data[e].ou(b,c))break b;e=e+1|0;}}catch($$e){$$je=R($$e);g=$$je;break a;}a.N.be();return 0;}try{}catch($$e){$$je=R($$e);g=$$je;break a;}a.N.be();return 1;}a.N.be();G(g);}
var FF=D(FM);
function Bg6(a){var b=new FF();Kl(b,a);return b;}
function Kl(a,b){Op(a,b);}
var Zd=D(FF);
function Bg7(a){var b=new Zd();AER(b,a);return b;}
function AER(a,b){Kl(a,b);}
var OU=D(T);
function Bbv(){var a=new OU();AES(a);return a;}
function AES(a){Bo(a);}
function AGk(a){var b;b=Bck(a);b.bf=1;return b;}
var IC=D(0);
var Cx=D(0);
var Io=D(0);
var IZ=D();
function TF(a){J(a);}
function AXI(a,b){var c,d,e,f;c=b.data;d=a.db();e=c.length;if(e<d)b=K7((Cf(b)).gg(),d);else while(d<e){c[d]=null;d=d+1|0;}d=0;f=a.fj();while(f.bC()){c=b.data;e=d+1|0;c[d]=f.bz();d=e;}return b;}
var E5=D();
function Kc(a){J(a);}
function A6U(a,b,c,d){var e,f,g,h;e=0;while(e<d){f=a.AS();if(f<0){if(!e)e=(-1);return e;}g=b.data;h=c+1|0;g[c]=f<<24>>24;e=e+1|0;c=h;}if(d<=0)d=(-1);return d;}
function AZk(a){}
function AAh(){var a=this;E5.call(a);a.tk=null;a.hU=0;a.Hw=0;a.qt=0;}
function Bg8(a,b,c){var d=new AAh();ABU(d,a,b,c);return d;}
function WN(a){var b=new AAh();AEh(b,a);return b;}
function ABU(a,b,c,d){Kc(a);a.tk=b;a.hU=c;a.Hw=c;a.qt=c+d|0;}
function AEh(a,b){ABU(a,b,0,b.data.length);}
function AWd(a){var b,c,d;if(a.hU>=a.qt)b=(-1);else{c=a.tk.data;d=a.hU;a.hU=d+1|0;b=c[d]&255;}return b;}
function A8q(a,b,c,d){var e,f,g,h,i,j;e=Bq(d,a.qt-a.hU|0);f=0;while(f<e){g=b.data;h=c+1|0;i=a.tk.data;j=a.hU;a.hU=j+1|0;g[c]=i[j];f=f+1|0;c=h;}if(e<=0)e=(-1);return e;}
function AIE(a){}
var SO=D();
function ACx(b,c){var d,e,f,g,h,i,j,k;if(!b)return B(317);d=1<<c;e=d-1|0;f=(((32-L6(b)|0)+c|0)-1|0)/c|0;g=BV(f);h=Cb(f-1|0,c);i=0;while(h>=0){j=g.data;k=i+1|0;j[i]=FK(b>>>h&e,d);h=h-c|0;i=k;}return LR(g);}
var Iw=D(CQ);
function Zi(a,b,c,d){FD(a,b);a.C=c;a.bc=d;}
function AJy(b,c,d){return Bco(0,b.data.length,b,c,c+d|0,0);}
function AYV(b){return AJy(b,0,b.data.length);}
function SR(a){FR(a);return a;}
function A2v(a){return SR(a);}
function Jp(){var a=this;C.call(a);a.jg=null;a.uL=0.0;a.u3=0.0;a.Ac=0;a.Ad=0;a.x$=0;a.Ei=0;a.GZ=null;}
function SF(a){J(a);a.GZ=S();}
function A6I(a,b){Yz(a.Ac,a.Ad,a.x$,a.Ei);a.jg.kq=a.uL;a.jg.l3=a.u3;if(b)a.jg.co.I(a.uL/2.0,a.u3/2.0,0.0);a.jg.fX();}
function A6r(a){return a.jg;}
function AHS(a,b){a.jg=b;}
function AF4(a,b,c){a.uL=b;a.u3=c;}
function AVE(a,b,c,d,e){a.Ac=b;a.Ad=c;a.x$=d;a.Ei=e;}
function CC(){C$.call(this);this.bu=null;}
function A_H(a,b,c){var d=new CC();E0(d,a,b,c);return d;}
function E0(a,b,c,d){FP(a,b,c,d);a.bu=b;}
function ATg(a,b,c,d){var e,f;e=0;a:{while((b+a.bu.cf()|0)<=d.J()){f=a.bu.bI(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.k.e(b,c,d);if(f>=0)break;b=b-a.bu.cf()|0;e=e+(-1)|0;}return f;}
function AV8(a){return B(318);}
var Eb=D(CC);
function A_c(a,b,c){var d=new Eb();MZ(d,a,b,c);return d;}
function MZ(a,b,c,d){E0(a,b,c,d);}
function A1A(a,b,c,d){var e;e=a.Y.e(b,c,d);if(e<0)e=a.k.e(b,c,d);return e;}
function ASC(a,b){Ll(a,b);a.Y.Q(b);}
var Tf=D(Eb);
function BaV(a,b,c){var d=new Tf();A8s(d,a,b,c);return d;}
function A8s(a,b,c,d){MZ(a,b,c,d);}
function ALQ(a,b,c,d){var e;if((b+a.bu.cf()|0)<=d.J()){e=a.bu.bI(b,c);if(e>=1)b=b+e|0;}return a.k.e(b,c,d);}
var Hj=D(0);
var V=D();
function BK(a){J(a);}
function AHh(a,b,c){return 0;}
function AAr(){var a=this;C.call(a);a.e8=null;a.ig=null;a.lt=0;a.lo=null;a.oz=0;a.de=0;a.jY=null;a.b8=null;}
function Bb4(){var a=new AAr();AKB(a);return a;}
function AKB(a){J(a);a.lt=7;a.de=0;a.lo=X(C,256);a.jY=Bc(40);a.b8=Bc(40);}
function ATi(a,b,c,d,e){var f,g,h,i,j,k,l,m,n;f=b.data;a.de=0;AJs(f.length,d,e);g=e-d|0;if(g<2)return;if(g<32){h=TV(b,d,e,c);AA9(b,d,e,d+h|0,c);return;}a.e8=b;a.ig=c;a.oz=0;i=ATy(g);while(true){j=TV(b,d,e,c);if(j>=i)k=j;else{k=g>i?i:g;AA9(b,d,d+k|0,d+j|0,c);}Y3(a,d,k);Xd(a);d=d+k|0;g=g-k|0;if(!g)break;}S6(a);a.e8=null;a.ig=null;l=a.lo;m=0;n=a.oz;while(m<n){l.data[m]=null;m=m+1|0;}}
function AA9(b,c,d,e,f){var g,h,i,j,k,l;if(e==c)e=e+1|0;while(e<d){g=b.data;h=g[e];i=e;j=c;while(j<i){k=(j+i|0)>>>1;if(f.cU(h,g[k])<0)i=k;else j=k+1|0;}a:{b:{l=e-j|0;switch(l){case 1:break b;case 2:g[j+2|0]=g[j+1|0];break b;default:}Y(b,j,b,j+1|0,l);break a;}g[j+1|0]=g[j];}g[j]=h;e=e+1|0;}}
function TV(b,c,d,e){var f,g,h;f=c+1|0;if(f==d)return 1;a:{g=b.data;h=f+1|0;if(e.cU(g[f],g[c])>=0)while(h<d){if(e.cU(g[h],g[h-1|0])<0)break a;h=h+1|0;}else{while(h<d&&e.cU(g[h],g[h-1|0])<0){h=h+1|0;}A5C(b,c,h);}}return h-c|0;}
function A5C(b,c,d){var e,f,g,h,i;e=d+(-1)|0;while(c<e){f=b.data;g=f[c];h=c+1|0;f[c]=f[e];i=e+(-1)|0;f[e]=g;c=h;e=i;}}
function ATy(b){var c;c=0;while(b>=32){c=c|b&1;b=b>>1;}return b+c|0;}
function Y3(a,b,c){a.jY.data[a.de]=b;a.b8.data[a.de]=c;a.de=a.de+1|0;}
function Xd(a){var b;a:{while(true){if(a.de<=1)break a;b=a.de-2|0;if(!(b>=1&&a.b8.data[b-1|0]<=(a.b8.data[b]+a.b8.data[b+1|0]|0))&&!(b>=2&&a.b8.data[b-2|0]<=(a.b8.data[b]+a.b8.data[b-1|0]|0))){if(a.b8.data[b]>a.b8.data[b+1|0])break;}else if(a.b8.data[b-1|0]<a.b8.data[b+1|0])b=b+(-1)|0;My(a,b);}}}
function S6(a){var b;while(a.de>1){b=a.de-2|0;if(b>0&&a.b8.data[b-1|0]<a.b8.data[b+1|0])b=b+(-1)|0;My(a,b);}}
function My(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.jY.data[b];d=a.b8.data[b];e=a.jY.data;f=b+1|0;g=e[f];h=a.b8.data[f];a.b8.data[b]=d+h|0;if(b==(a.de-3|0)){i=a.jY.data;e=a.jY.data;j=b+2|0;i[f]=e[j];a.b8.data[f]=a.b8.data[j];}a.de=a.de-1|0;k=M6(a.e8.data[g],a.e8,c,d,0,a.ig);j=c+k|0;l=d-k|0;if(!l)return;m=Jz(a.e8.data[(j+l|0)-1|0],a.e8,g,h,h-1|0,a.ig);if(!m)return;if(l>m)TJ(a,j,l,g,m);else Vs(a,j,l,g,m);}
function Jz(b,c,d,e,f,g){var h,i,j,k,l,m,n,o;h=c.data;i=0;j=1;k=d+f|0;if(g.cU(b,h[k])>0){l=e-f|0;while(true){m=B5(j,l);if(m>=0)break;if(g.cU(b,h[k+j|0])<=0)break;n=(j<<1)+1|0;if(n>0){i=j;j=n;continue;}n=l;i=j;j=n;}if(m<=0)l=j;n=i+f|0;k=l+f|0;}else{l=f+1|0;while(true){n=B5(j,l);if(n>=0)break;if(g.cU(b,h[k-j|0])>0)break;n=(j<<1)+1|0;if(n>0){i=j;j=n;continue;}n=l;i=j;j=n;}if(n<=0)l=j;n=f-l|0;k=f-i|0;}n=n+1|0;while(n<k){o=n+((k-n|0)>>>1)|0;if(g.cU(b,h[d+o|0])>0){n=o+1|0;o=k;}k=o;}return k;}
function M6(b,c,d,e,f,g){var h,i,j,k,l,m,n,o;h=c.data;i=1;j=0;k=d+f|0;if(g.cU(b,h[k])>=0){l=e-f|0;while(true){m=B5(i,l);if(m>=0)break;if(g.cU(b,h[k+i|0])<0)break;m=(i<<1)+1|0;if(m>0){j=i;i=m;continue;}m=l;j=i;i=m;}if(m<=0)l=i;m=j+f|0;n=l+f|0;}else{l=f+1|0;while(true){m=B5(i,l);if(m>=0)break;if(g.cU(b,h[k-i|0])>=0)break;m=(i<<1)+1|0;if(m>0){j=i;i=m;continue;}m=l;j=i;i=m;}if(m<=0)l=i;m=f-l|0;n=f-j|0;}m=m+1|0;while(m<n){o=m+((n-m|0)>>>1)|0;if(g.cU(b,h[d+o|0])<0)n=o;else m=o+1|0;}return n;}
function Vs(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;f=a.e8;g=f.data;h=NO(a,c);Y(f,b,h,0,c);i=0;j=b+1|0;k=d+1|0;g[b]=g[d];l=e+(-1)|0;if(!l){Y(h,i,f,j,c);return;}if(c==1){m=h.data;Y(f,k,f,j,l);g[j+l|0]=m[i];return;}n=a.ig;o=a.lt;a:{b:while(true){p=0;q=0;r=j;s=k;t=i;while(true){m=h.data;if(n.cU(g[s],m[t])<0){j=r+1|0;k=s+1|0;g[r]=g[s];q=q+1|0;p=0;l=l+(-1)|0;if(!l)break a;s=k;i=t;}else{j=r+1|0;i=t+1|0;g[r]=m[t];p=p+1|0;q=0;c=c+(-1)|0;if(c==1){t=i;k=s;break a;}}if((p|q)>=o)break;r=j;t=i;}k=s;while(true){r
=M6(g[k],h,i,c,0,n);if(!r){s=j;t=i;}else{Y(h,i,f,j,r);j=j+r|0;t=i+r|0;c=c-r|0;if(c<=1)break a;s=j;}j=s+1|0;u=k+1|0;g[s]=g[k];l=l+(-1)|0;if(!l){k=u;break a;}s=Jz(m[t],f,u,l,0,n);if(!s){v=j;k=u;}else{Y(f,u,f,j,s);j=j+s|0;k=u+s|0;l=l-s|0;if(!l)break b;v=j;}j=v+1|0;i=t+1|0;g[v]=m[t];c=c+(-1)|0;if(c==1){t=i;break a;}o=o+(-1)|0;if(!((r<7?0:1)|(s<7?0:1)))break;}if(o<0)o=0;o=o+2|0;}}if(o<1)o=1;a.lt=o;if(c==1){Y(f,k,f,j,l);g[j+l|0]=m[t];}else{if(!c)G(W(B(319)));Y(h,t,f,j,c);}}
function TJ(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;f=a.e8;g=f.data;h=NO(a,e);Y(f,d,h,0,e);i=(b+c|0)-1|0;j=e-1|0;k=(d+e|0)-1|0;l=k+(-1)|0;m=i+(-1)|0;g[k]=g[i];n=c+(-1)|0;if(!n){Y(h,0,f,l-j|0,e);return;}if(e==1){o=h.data;p=l-n|0;q=m-n|0;Y(f,q+1|0,f,p+1|0,n);g[p]=o[j];return;}r=a.ig;s=a.lt;a:{b:while(true){t=0;u=0;v=l;while(true){o=h.data;if(r.cU(o[j],g[m])<0){l=v+(-1)|0;q=m+(-1)|0;g[v]=g[m];t=t+1|0;u=0;n=n+(-1)|0;if(!n)break a;m=q;p=j;}else{l=v+(-1)|0;p=j+(-1)|0;g[v]=o[j];u=u+1|0;t=0;e=e+(-1)|0;if
(e==1){q=m;j=p;break a;}}if((t|u)>=s)break;v=l;j=p;}j=p;while(true){v=n-M6(o[j],f,b,n,n-1|0,r)|0;if(!v){p=l;q=m;}else{l=l-v|0;q=m-v|0;n=n-v|0;Y(f,q+1|0,f,l+1|0,v);if(!n)break a;p=l;}l=p+(-1)|0;m=j+(-1)|0;g[p]=o[j];e=e+(-1)|0;if(e==1){j=m;break a;}w=e-Jz(g[q],h,0,e,e-1|0,r)|0;if(!w){p=l;j=m;}else{l=l-w|0;j=m-w|0;e=e-w|0;Y(h,j+1|0,f,l+1|0,w);if(e<=1)break b;p=l;}l=p+(-1)|0;m=q+(-1)|0;g[p]=g[q];n=n+(-1)|0;if(!n){q=m;break a;}s=s+(-1)|0;if(!((v<7?0:1)|(w<7?0:1)))break;}if(s<0)s=0;s=s+2|0;}}if(s<1)s=1;a.lt=s;if(e
==1){p=l-n|0;q=q-n|0;Y(f,q+1|0,f,p+1|0,n);g[p]=o[j];}else{if(!e)G(W(B(319)));Y(h,0,f,l-(e-1|0)|0,e);}}
function NO(a,b){var c,d;a.oz=Bf(a.oz,b);if(a.lo.data.length<b){c=b|b>>1;c=c|c>>2;c=c|c>>4;c=c|c>>8;c=c|c>>16;c=c+1|0;if(c>=0)b=Bq(c,a.e8.data.length>>>1);d=X(C,b);a.lo=d;}return a.lo;}
function AJs(b,c,d){if(c<=d){if(c<0)G(AIL(c));if(d<=b)return;G(AIL(d));}G(W(((((((I()).a(B(320))).j(c)).a(B(321))).j(d)).a(B(24))).b()));}
var WO=D();
function Bc4(b){var c,d,e,f,$$je;a:{try{c=BaA(B(322));d=AM5();if(d!==null){e=d;AAp(new HM,e,c);}}catch($$e){$$je=R($$e);if($$je instanceof C8){f=$$je;break a;}else{throw $$e;}}return;}f.E8();G(f);}
function AM5(){return Bc2();}
var MT=D(0);
var G1=D(Bm);
var Ix=D(BR);
function Bg9(a){var b=new Ix();ZP(b,a);return b;}
function ZP(a,b){CV(a,b);}
var GU=D(Ix);
function Bg$(a){var b=new GU();Qm(b,a);return b;}
function Qm(a,b){ZP(a,b);}
function ARn(a,b){var c;Fg();c=Beo;Ge(b,c);}
function AYC(a,b){return ANn(a.b1,b,1,0.01666666753590107);}
function AXe(a,b){var c,d;c=a.b1;d=b.dv();A4p(c,d);}
function AVT(a,b){var c,d;c=a.b1;d=b.dv();A2K(c,d);}
function ANn(b,c,d,e){var jsObj=Bullet.wrapPointer(b,Bullet.btDynamicsWorld);jsObj.stepSimulation(c,d,e);}
function A4p(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btDynamicsWorld);var rigidBodyJSObj=Bullet.wrapPointer(c,Bullet.btRigidBody);jsObj.addRigidBody(rigidBodyJSObj);}
function A2K(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btDynamicsWorld);var rigidBodyJSObj=Bullet.wrapPointer(c,Bullet.btRigidBody);jsObj.removeRigidBody(rigidBodyJSObj);}
var Gp=D();
var Bg_=null;function T1(a){J(a);}
function DR(){return Bg_;}
function AKO(b){Bg_=b;}
var Wt=D();
function MS(b){var c,d,e,f,g;if(b===null)return null;c=b.data;d=c.length;e=new Array(d);f=0;while(f<d){g=c[f];e[f]=g;f=f+1|0;}return e;}
function BY(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function F_(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function Oq(){Q.call(this);this.PG=null;}
function Bb0(a){var b=new Oq();A43(b,a);return b;}
function A43(a,b){a.PG=b;Be(a);}
function AFP(a,b){return TO(b);}
function CX(){var a=this;C.call(a);a.z_=null;a.L5=null;}
function Gt(a,b,c){var d,e,f,g;d=c.data;J(a);Lf(b);e=d.length;f=0;while(f<e){g=d[f];Lf(g);f=f+1|0;}a.z_=b;a.L5=c.ge();}
function Lf(b){var c,d;if(b.bO())G(Xu(b));if(!ZV(b.f(0)))G(Xu(b));c=1;while(c<b.i()){a:{d=b.f(c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(ZV(d))break a;else G(Xu(b));}}c=c+1|0;}}
function ZV(b){var c;a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}c=1;break a;}c=0;}return c;}
function Or(b){var c;if(b===null)G(W(B(323)));Lf(b);c=(Uz()).W(b.Fr());if(c!==null)return c;G(Bdr(b));}
function Y_(a){return a.z_;}
function YM(a,b){var c,d,e,$$je;a:{try{c=a.lC();De();d=Beg;d=NI(c,d);c=Beg;d=KT(d,c);d=V7(d,b);}catch($$e){$$je=R($$e);if($$je instanceof DW){e=$$je;break a;}else{throw $$e;}}return d;}G(AX3(B(324),e));}
function TY(a,b){var c,d,e,$$je;a:{try{c=a.mi();De();d=Beg;d=KG(c,d);c=Beg;d=Ls(d,c);d=W6(d,b);}catch($$e){$$je=R($$e);if($$je instanceof DW){e=$$je;break a;}else{throw $$e;}}return d;}G(AX3(B(324),e));}
function Re(){var a=this;CX.call(a);a.uq=0;a.sF=0;}
function Q7(a,b,c){var d=new Re();AD5(d,a,b,c);return d;}
function AD5(a,b,c,d){Gt(a,b,X(BL,0));a.uq=c;a.sF=d;}
function AJf(a){return BaT(a,a.uq,a.sF);}
function ACU(a){return BaR(a,a.uq,a.sF);}
var Ci=D();
function A_V(){var a=new Ci();D9(a);return a;}
function D9(a){J(a);}
function AO4(a,b){}
function AUw(a,b){}
function O7(){var a=this;Ci.call(a);a.Ee=null;a.q2=null;}
function A9O(a,b){var c=new O7();AXc(c,a,b);return c;}
function AXc(a,b,c){a.q2=b;a.Ee=c;D9(a);}
function A2s(a,b){}
function AXv(a,b){(Ef()).f9((((I()).a(B(325))).a(a.Ee)).b());}
function ALN(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=c.E7(B(326));e=d.data;f=new E1;g=e.length;NT(f,g);h=0;while(true){if(h>=g){i=0;while(i<f.h){j=f.l(i);if(a.q2.J1(j.sd)){j.Ji=j.Bn;j.I6=1;}else a.q2.O4(j.sd,j.Dw,j.xa,A$P(a));i=i+1|0;}return 0;}k=e[h];l=k.E7(B(13));m=l.data;if(m.length!=4)break;R_();n=Bha;if(m[0].z(B(327)))n=Bhb;if(m[0].z(B(328)))n=Bhc;if(m[0].z(B(329)))n=Bhd;if(m[0].z(B(137)))n=Bhe;o=ABd(m[2]);if(n===Bhd&&!(D$()).NE())o=Bb;f.E(BbK(m[1].LM(),n,o,m[3]));h=h+1|0;}G(U(B(330)));}
function AEw(a,b,c){return a.Ir(b,c);}
var Pm=D();
function A8l(b){var c,d,e,f,g,h,i,j,k;c=A_Q(b.rg());d=VI(c);e=Bc(d*2|0);f=0;g=0;h=0;i=0;while(i<d){j=e.data;g=g+OH(c)|0;h=h+OH(c)|0;k=f+1|0;j[f]=g;f=k+1|0;j[k]=h;i=i+1|0;}return e;}
function IW(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function ASB(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=X(L3,16384);d=Ce(16384);e=0;f=0;g=0;h=0;while(h<b.i()){i=IW(b.f(h));if(i==64){h=h+1|0;i=IW(b.f(h));j=0;k=1;l=0;while(l<3){h=h+1|0;m=IW(b.f(h));j=j|Cb(k,m);k=k*64|0;l=l+1|0;}}else if(i<32)j=1;else{i=(i-32|0)<<24>>24;h=h+1|0;j=IW(b.f(h));}if(!i&&j>=128){if(e>0){n=c.data;o=f+1|0;n[f]=AHf(g,g+e|0,NL(d,e));f=o;}g=g+(e+j|0)|0;e=0;}else{p=d.data;o=e+j|0;if(o<p.length)q=f;else{n=c.data;q=f+1|0;n[f]=AHf(g,g+e|0,NL(d,e));g=g+o|0;e=0;}while(true){o=j+(-1)|0;if(j<=0)break;r
=e+1|0;p[e]=i;e=r;j=o;}f=q;}h=h+1|0;}return IU(c,f);}
var G5=D(0);
function RD(){var a=this;C.call(a);a.wp=null;a.wq=null;a.wn=0;a.wo=null;}
function Baq(a,b,c,d){var e=new RD();AYs(e,a,b,c,d);return e;}
function AYs(a,b,c,d,e){J(a);a.wp=b;a.wq=c;a.wn=d;a.wo=e;}
function AJc(a){ALW(a.wp,a.wq,a.wn,a.wo);}
var Le=D(0);
function V_(){C.call(this);this.l4=null;}
function Bay(a){var b=new V_();AMi(b,a);return b;}
function AMi(a,b){a.l4=b;J(a);}
function AYD(a,b){a.l4.h7.fn();Qd(b,a.l4.h7);a.l4.HF(a.l4.h7);}
function A2n(a,b){a.Os(b);}
function O8(){var a=this;Ci.call(a);a.oW=null;a.B9=null;a.Bw=null;a.Eh=null;}
function A$Q(a,b,c,d){var e=new O8();AKt(e,a,b,c,d);return e;}
function AKt(a,b,c,d,e){a.Eh=b;a.oW=c;a.B9=d;a.Bw=e;D9(a);}
function A2d(a,b){a.oW.fr(b);}
function A1h(a,b){a.oW.da(b);}
function A6s(a,b,c){a.Eh.ID(a.B9,a.Bw,c);a.oW.dk(b,c);return 0;}
var JN=D();
var Bhf=null;function Bbz(){Bbz=N(JN);A1m();}
function A1m(){Bhf=Bc((LT()).data.length);Bhf.data[BD(Bha)]=1;Bhf.data[BD(Bhb)]=2;Bhf.data[BD(Bhc)]=3;Bhf.data[BD(Bhd)]=4;Bhf.data[BD(Bhe)]=5;}
var AAE=D();
function A3v(b,c){if(b===c)return 1;return b!==null?b.z(c):c!==null?0:1;}
function TN(){C.call(this);this.ce=null;}
function ANU(){var a=new TN();A4U(a);return a;}
function A9r(b){if(b<0.0)b=0.0;else if(b>1.0)b=1.0;return b;}
function A4U(a){J(a);a.ce=B9(18);}
function AU$(a,b){return a.OX(b.s,b.r,b.t);}
function AUj(a,b,c,d){var e;e=0;while(e<18){a.ce.data[e]=b;a.ce.data[e+1|0]=c;a.ce.data[e+2|0]=d;e=e+3|0;}return a;}
function A8b(a){var b;b=0;while(b<a.ce.data.length){a.ce.data[b]=A9r(a.ce.data[b]);b=b+1|0;}return a;}
function A53(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s;h=e*e;i=f*f;j=g*g;k=h+i+j;if(k===0.0)return a;l=1.0/k*(k+1.0);m=b*l;n=c*l;o=d*l;p=e<=0.0?3:0;q=a.ce.data;q[p]=q[p]+h*m;q=a.ce.data;r=p+1|0;q[r]=q[r]+h*n;q=a.ce.data;r=p+2|0;q[r]=q[r]+h*o;r=f<=0.0?9:6;q=a.ce.data;q[r]=q[r]+i*m;q=a.ce.data;s=r+1|0;q[s]=q[s]+i*n;q=a.ce.data;r=r+2|0;q[r]=q[r]+i*o;r=g<=0.0?15:12;q=a.ce.data;q[r]=q[r]+j*m;q=a.ce.data;s=r+1|0;q[s]=q[s]+j*n;q=a.ce.data;r=r+2|0;q[r]=q[r]+j*o;return a;}
function A2g(a,b,c){return a.Es(b.s,b.r,b.t,c.n,c.o,c.q);}
function AEP(a,b,c,d,e){var f;f=e/(1.0+d.Ge(c));return a.Es(b.s*f,b.r*f,b.t*f,d.n-c.n,d.o-c.o,d.q-c.q);}
var HU=D(IY);
function Bb9(){var a=new HU();QY(a);return a;}
function QY(a){PE(a);}
function Qo(a){return (Px(a)).bG(48,57);}
var Jq=D(HU);
function Ba7(){var a=new Jq();St(a);return a;}
function St(a){QY(a);}
function UD(a){return (((Qo(a)).bG(33,64)).bG(91,96)).bG(123,126);}
var Yg=D(Jq);
function BaX(){var a=new Yg();APw(a);return a;}
function APw(a){St(a);}
function ALE(a){return (UD(a)).cD(32);}
var ZW=D(T);
function BcX(){var a=new ZW();A2M(a);return a;}
function A2M(a){Bo(a);}
function AQi(a){return Bah(a);}
var X3=D(Dm);
function A9_(a,b){var c=new X3();APG(c,a,b);return c;}
function APG(a,b,c){F3(a,b,c);}
function AE2(a,b,c,d){var e,f,g,h,i;e=a.bQ.db();f=!d.lz()?d.dH():0;a:{g=a.k.e(b,c,d);if(g>=0){d.bx(a.bn,b);h=0;while(true){if(h>=e)break a;i=a.bQ.l(h);if(i.cF(f,b,c,d)>=0){d.bx(a.bn,(-1));return g;}h=h+1|0;}}}return (-1);}
function A9t(a,b){return 0;}
function AMK(a){return B(331);}
function Yj(){var a=this;BI.call(a);a.cw=null;a.tj=null;a.rw=null;}
function A$N(a){var b=new Yj();AWX(b,a);return b;}
function AWX(a,b){var c;CZ(a);a.cw=b.b();a.bP=b.i();a.tj=A2Z(a.bP);a.rw=A2Z(a.bP);c=0;while(c<(a.bP-1|0)){a.tj.od(a.cw.f(c),(a.bP-c|0)-1|0);a.rw.od(a.cw.f((a.bP-c|0)-1|0),(a.bP-c|0)-1|0);c=c+1|0;}}
function AFW(a,b,c){return !a.uT(c,b)?(-1):a.bP;}
function AUZ(a,b,c,d){var e,f;e=d.J();while(true){if(b>e)return (-1);f=a.M6(c,b,e);if(f<0)return (-1);if(a.k.e(f+a.bP|0,c,d)>=0)break;b=f+1|0;}return f;}
function AYF(a,b,c,d,e){var f;while(true){if(c<b)return (-1);f=a.KO(d,b,c);if(f<0)return (-1);if(a.k.e(f+a.bP|0,d,e)>=0)break;c=f+(-1)|0;}return f;}
function AM9(a){return (((I()).a(B(332))).a(a.cw)).b();}
function AIy(a,b){var c,d,e,f,g;if(b instanceof Du)return b.pe()!=a.cw.f(0)?0:1;if(b instanceof Ds)return b.bI(0,a.cw.cd(0,1))<=0?0:1;if(!(b instanceof C1)){if(!(b instanceof Dq))return 1;a:{if(a.cw.i()>1){c=b;d=c.sx();e=a.cw.f(0);c=a.cw;f=c.f(1);if(d==Dd(e,f)){e=1;break a;}}e=0;}return e;}b:{c:{c=b;if(!c.p(a.cw.f(0))){g=a.cw;if(g.i()<=1)break c;g=a.cw;e=Dd(g.f(0),a.cw.f(1));if(!c.p(e))break c;}e=1;break b;}e=0;}return e;}
function A7b(a,b,c,d){var e,f;e=a.cw.f(a.bP-1|0);while(true){if(c>(d-a.bP|0))return (-1);f=b.f((c+a.bP|0)-1|0);if(f==e&&a.uT(b,c))break;c=c+a.tj.b2(f)|0;}return c;}
function A6m(a,b,c,d){var e,f,g,h;e=a.cw.f(0);f=b.i();g=(f-d|0)-a.bP|0;if(g<=0)d=d+g|0;while(true){if(d<c)return (-1);h=b.f(d);if(h==e&&a.uT(b,d))break;d=d-a.rw.b2(h)|0;}return d;}
function AIY(a,b,c){var d;d=0;while(d<a.bP){if(b.f(d+c|0)!=a.cw.f(d))return 0;d=d+1|0;}return 1;}
var Q8=D(CX);
function A_I(){var a=new Q8();AHk(a);return a;}
function AHk(a){Gt(a,B(333),X(BL,0));}
function AVU(a){return BcS(a);}
function AS2(a){return BbQ(a);}
function MN(){var a=this;C.call(a);a.cM=null;a.b7=0;}
var Bhg=null;function C2(){C2=N(MN);A2A();}
function ARN(a){var b=new MN();WW(b,a);return b;}
function Vz(b,c){var d;C2();d=b>=0?1:2;while(true){b=b/c|0;if(!b)break;d=d+1|0;}return d;}
function WW(a,b){C2();J(a);if(b>=0){a.cM=BV(b);return;}G(A7F());}
function Iz(a,b){var c,d;c=((a.cM.data.length>>1)+a.cM.data.length|0)+2|0;if(b>c)c=b;d=BV(c);Y(a.cM,0,d,0,a.b7);a.cM=d;}
function Ny(a){var b,c,d,e;b=a.b7+4|0;if(b>a.cM.data.length)Iz(a,b);c=a.cM.data;d=a.b7;a.b7=d+1|0;c[d]=110;c=a.cM.data;e=a.b7;a.b7=e+1|0;c[e]=117;c=a.cM.data;e=a.b7;a.b7=e+1|0;c[e]=108;c=a.cM.data;e=a.b7;a.b7=e+1|0;c[e]=108;}
function CF(a,b){var c,d;if(a.b7==a.cM.data.length)Iz(a,a.b7+1|0);c=a.cM.data;d=a.b7;a.b7=d+1|0;c[d]=b;}
function Ir(a,b){var c,d;if(b===null){Ny(a);return;}c=b.i();d=a.b7+c|0;if(d>a.cM.data.length)Iz(a,d);b.ph(0,c,a.cM,a.b7);a.b7=d;}
function AC0(a){if(!a.b7)return B(103);return FT(a.cM,0,a.b7);}
function AN4(a,b){CF(a,b);return a;}
function AOF(a,b){return a.Gh(b,0);}
function AFz(a,b,c){return a.OL(b,c,48);}
function ADc(a,b,c,d){var e;if(b==(-2147483648)){Ir(a,B(334));return a;}if(b<0){CF(a,45);b= -b|0;}a:{if(c>1){e=c-Vz(b,10)|0;while(true){if(e<=0)break a;a.lq(d);e=e+(-1)|0;}}}if(b>=10000){if(b>=1000000000){C2();CF(a,Bhg.data[Cu(E8(ATr(O(b),Ca(1410065408, 2)),O(1000000000)))]);}if(b>=100000000){C2();CF(a,Bhg.data[(b%1000000000|0)/100000000|0]);}if(b>=10000000){C2();CF(a,Bhg.data[(b%100000000|0)/10000000|0]);}if(b>=1000000){C2();CF(a,Bhg.data[(b%10000000|0)/1000000|0]);}if(b>=100000){C2();CF(a,Bhg.data[(b%1000000
|0)/100000|0]);}C2();CF(a,Bhg.data[(b%100000|0)/10000|0]);}if(b>=1000){C2();CF(a,Bhg.data[(b%10000|0)/1000|0]);}if(b>=100){C2();CF(a,Bhg.data[(b%1000|0)/100|0]);}if(b>=10){C2();CF(a,Bhg.data[(b%100|0)/10|0]);}C2();CF(a,Bhg.data[b%10|0]);return a;}
function A1I(a,b){if(b===null)Ny(a);else Ir(a,b.b());return a;}
function AYU(a,b){Ir(a,b);return a;}
function A2A(){Bhg=IR([48,49,50,51,52,53,54,55,56,57]);}
var Dz=D();
var Bek=0;var Bel=0;var Bhh=0;var Bhi=null;var Bhj=null;var Bhk=null;var Bhl=null;function HO(){HO=N(Dz);AW3();}
function W5(){HO();Z4(0);}
function Z4(b){HO();AAR(b,1);}
function AAR(b,c){var d;HO();if(Bhh)return;Bhh=1;Bek=b;Bel=c;R5();d=Bullet.MyClassHelper.prototype.getBTVersion();if(d==285)return;G(U(((((((I()).a(B(335))).j(d)).a(B(336))).j(285)).a(B(24))).b()));}
function R5(){var b,c;HO();b=Bem;c=b.Il();c.m0(B(337),A$F());}
function AW3(){Bek=0;Bel=1;Bhh=0;Bhi=BbJ();Bhj=Bp();Bhk=BO();Bhl=BO();}
var Tw=D(Bm);
function P0(){var a=new Tw();AX9(a);return a;}
function AX9(a){Ct(a);}
var L$=D(B2);
function Eu(a,b){var c=new L$();A5a(c,a,b);return c;}
function A5a(a,b,c){JD(a,b,c);}
var FJ=D(CE);
function BdB(a,b,c){var d=new FJ();LW(d,a,b,c);return d;}
function LW(a,b,c,d){E_(a,b,c,d);}
function A52(a,b,c,d){var e;if(!a.Y.bb(d))return a.k.e(b,c,d);e=a.Y.e(b,c,d);if(e>=0)return e;return a.k.e(b,c,d);}
function A7z(a,b){Ll(a,b);a.Y.Q(b);}
var H4=D(0);
function Nm(){var a=this;C.call(a);a.dz=null;a.k_=null;a.tZ=null;a.nr=null;a.we=0;a.nm=0;a.s6=0;a.Fj=0;a.d$=0;a.HV=0;a.MZ=0;a.d2=0;a.OC=0;a.hh=0;a.uF=0;}
function Bhm(a,b,c,d,e,f){var g=new Nm();RI(g,a,b,c,d,e,f);return g;}
function RI(a,b,c,d,e,f,g){var h;J(a);a.hh=(-1);h=e+1|0;a.we=h;a.dz=Bc(h*2|0);a.k_=Bc(g);Iq(a.k_,(-1));if(f>0)a.tZ=Bc(f);Iq(a.dz,(-1));a.to(b,c,d);}
function AQJ(a,b,c){a.k_.data[b]=c;}
function A1c(a,b){return a.k_.data[b];}
function AS3(a){return a.o1(0);}
function AKh(a,b){MM(a,b);return a.dz.data[(b*2|0)+1|0];}
function AWF(a,b,c){a.dz.data[b*2|0]=c;}
function AU0(a,b,c){a.dz.data[(b*2|0)+1|0]=c;}
function A4o(a,b){return a.dz.data[b*2|0];}
function AOa(a,b){return a.dz.data[(b*2|0)+1|0];}
function ADB(a,b){if(a.lu(b)<0)return null;return (a.nr.d8(a.lu(b),a.o1(b))).b();}
function A0n(a,b){var c,d;c=a.ji(b);d=a.np(b);if((d|c|(d-c|0))>=0&&d<=a.nr.i())return (a.nr.d8(c,d)).b();return null;}
function AN5(a){return a.lu(0);}
function AFf(a,b){MM(a,b);return a.dz.data[b*2|0];}
function ALd(a){if(a.dz.data[0]==(-1)){a.dz.data[0]=a.d$;a.dz.data[1]=a.d$;}a.hh=a.pC();}
function ATu(a,b){return a.tZ.data[b];}
function AV7(a,b,c){a.tZ.data[b]=c;}
function MM(a,b){if(!a.nm)G(GI());if(b>=0&&b<a.we)return;G(Bg(I5(b)));}
function A7I(a){a.nm=1;}
function A7K(a){return a.nm;}
function A8w(a,b,c,d){a.nm=0;a.uF=2;Iq(a.dz,(-1));Iq(a.k_,(-1));if(b!==null)a.nr=b;if(c>=0)TC(a,c,d);a.d$=a.s6;}
function AFQ(a){a.to(null,(-1),(-1));}
function TC(a,b,c){a.s6=b;a.Fj=c;}
function A5n(a,b){a.d$=b;if(a.hh>=0)b=a.hh;a.hh=b;}
function AVy(a){return a.s6;}
function A1B(a){return a.Fj;}
function AXl(a,b){a.uF=b;}
function AHz(a){return a.uF;}
function AZn(a){return a.MZ;}
function ATs(a){return a.HV;}
function AUh(a){return a.hh;}
function Qt(){var a=this;C.call(a);a.dx=null;a.cP=null;a.c9=null;a.ct=null;a.dI=null;a.kH=null;a.Bs=null;}
function A9T(){var a=new Qt();A14(a);return a;}
function A14(a){J(a);a.dx=BO();a.cP=A6L();}
function Pp(){var a=this;BI.call(a);a.tN=null;a.w4=0;}
function AIp(a){var b=new Pp();AMC(b,a);return b;}
function AMC(a,b){CZ(a);a.tN=b.l6();a.w4=b.bD;}
function A0v(a,b,c){var d,e;d=a.tN;e=Dw(c.f(b));return !d.p(Dl(e))?(-1):1;}
function AVn(a){return ((((I()).a(B(338))).a(!a.w4?B(58):B(59))).a(a.tN.b())).b();}
function Jk(){var a=this;C.call(a);a.eP=0;a.sV=0;a.sW=0;a.cs=0;a.cK=0;a.vm=0.0;a.pU=0.0;a.A0=0.0;a.s2=0.0;a.dn=0;a.i_=0;a.gp=0;a.iw=null;a.n_=0;a.jO=0;}
function AEr(){var a=new Jk();A54(a);return a;}
function A54(a){J(a);a.jO=0;}
function A0P(a,b){var c;if(a.iw!==null){c=a.iw.data[b>>>9];if(c!==null)return c.data[b&511];}return 0;}
function A4j(a,b,c){var d,e,f;if(a.iw===null)a.iw=X($rt_arraycls($rt_bytecls()),128);d=a.iw.data;e=b>>>9;f=d[e];if(f===null){d=a.iw.data;f=Ce(512);d[e]=f;}f.data[b&511]=c<<24>>24;}
function AIc(a){return H8(a.eP&65535);}
function UN(){Q.call(this);this.Fp=null;}
function A_r(a){var b=new UN();AJQ(b,a);return b;}
function AJQ(a,b){a.Fp=b;Be(a);}
function A8U(a,b){return Uc(b);}
function Fj(){var a=this;C.call(a);a.hw=0;a.Cg=0;a.oJ=null;a.oi=null;a.ol=null;a.m9=null;a.mp=0.0;}
var Bhn=0.0;function Ns(){Ns=N(Fj);AIw();}
function Ki(a,b,c){Ns();J(a);AFl();a.oJ=Bho;a.oi=Bho;AS1();a.ol=Bhp;a.m9=Bhp;a.mp=1.0;a.hw=b;a.Cg=c;}
function A10(a){BfC.zi(a.hw,a.Cg);}
function ANx(a,b,c,d){if(b!==null&&!(!d&&a.ol===b)){BfC.oc(a.hw,10242,N5(b));a.ol=b;}if(c!==null&&!(!d&&a.m9===c)){BfC.oc(a.hw,10243,N5(c));a.m9=c;}}
function ACy(a,b,c,d){if(b!==null&&!(!d&&a.oJ===b)){BfC.oc(a.hw,10241,NC(b));a.oJ=b;}if(c!==null&&!(!d&&a.oi===c)){BfC.oc(a.hw,10240,NC(c));a.oi=c;}}
function AHA(a,b,c){var d,e;d=XF();if(d===1.0)return 1.0;e=Jd(b,d);if(!c&&R6(e,a.mp,0.10000000149011612))return a.mp;BfD.NO(3553,34046,e);a.mp=e;return e;}
function XF(){var b,c;Ns();if(Bhn>0.0)return Bhn;if(!Bfz.tD(B(339))){Bhn=1.0;return 1.0;}b=HJ(16);b.cX(0);b.ck(CS(b));BfD.LK(34047,b);c=b.nW(0);Bhn=c;return c;}
function ABt(b,c){Ns();ABr(b,c,0);}
function ABr(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;Ns();if(c===null)return;if(!c.xD())c.zx();e=c.Nd();Oy();if(e===Bfu){c.GC(b);return;}f=c.Pe();g=c.EQ();if(c.fZ()===f.fZ())h=f;else{h=Ot(f.bp(),f.bm(),c.fZ());Gj();h.DA(BgZ);h.yR(f,0,0,0,0,f.bp(),f.bm());if(c.EQ())f.io();g=1;}BfC.Gc(3317,1);if(c.Pz())ZU(b,h,h.bp(),h.bm());else{i=BfC;j=h.kr();k=h.bp();l=h.bm();m=h.lO();n=h.k9();o=h.kt();i.ku(b,d,j,k,l,0,m,n,o);}if(g)h.io();}
function AIw(){Bhn=0.0;}
function Lh(){Fj.call(this);this.hD=null;}
var Bhq=null;function G4(){G4=N(Lh);A4D();}
function AQf(a,b){var c=new Lh();Zv(c,a,b);return c;}
function Bhr(a,b,c){var d=new Lh();K_(d,a,b,c);return d;}
function Bhs(a){var b=new Lh();Ju(b,a);return b;}
function Bht(a,b,c){var d=new Lh();Na(d,a,b,c);return d;}
function Zv(a,b,c){G4();K_(a,b,null,c);}
function K_(a,b,c,d){G4();Ju(a,ARu(b,c,d));}
function Ju(a,b){G4();Na(a,3553,BfC.Ip(),b);}
function Na(a,b,c,d){G4();Ki(a,b,c);a.Mc(d);if(d.qq())OT(Bem,a);}
function AQF(a,b){if(a.hD!==null&&b.qq()!=a.hD.qq())G(U(B(340)));a.hD=b;if(!b.xD())b.zx();a.e7();ABt(3553,b);a.Nh(a.oJ,a.oi,1);a.Gt(a.ol,a.m9,1);a.OP(a.mp,1);BfC.zi(a.hw,0);}
function AMO(a){return a.hD.bp();}
function A6O(a){return a.hD.bm();}
function AL6(a){if(!(a.hD instanceof Ha))return Po(a);return a.hD.b();}
function OT(b,c){var d;G4();d=Bhq.W(b);if(d===null)d=Bp();d.E(c);Bhq.x(b,d);}
function A4D(){Bhq=C3();}
var Kp=D(Bm);
function I1(a,b){var c=new Kp();AC3(c,a,b);return c;}
function U(a){var b=new Kp();P5(b,a);return b;}
function AC3(a,b,c){Pt(a,b,c);}
function P5(a,b){EB(a,b);}
var Ld=D(0);
function Wa(){C.call(this);this.md=null;}
function A_S(a){var b=new Wa();ALP(b,a);return b;}
function ALP(a,b){a.md=b;J(a);}
function A2O(a,b){a.md.h7.fn();a.md.PI(a.md.h7);R7(a.md.h7,b);}
function AR8(a,b){a.Ms(b);}
var VW=D();
function ACu(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function A2L(b,c){return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&Za(b.constructor,c)?1:0;}
function Za(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(Za(d[e],c))return 1;e=e+1|0;}return 0;}
function Ba6(b){b.e3();}
function ALg(b){APb(b,0);}
function APb(b,c){return setTimeout(function(){Ba6(b);},c);}
function ACf(){return AJ3();}
function Z6(b){return AYq(String.fromCharCode(b));}
function A5V(b){return b.$meta.primitive?1:0;}
function ABx(b){return b.$meta.item;}
function AO9(b){return $rt_str(b.$meta.name);}
function AJ3(){return [];}
function FW(){C.call(this);this.JK=null;}
var Beh=null;var Beg=null;var Bef=null;function De(){De=N(FW);ALm();}
function TI(a){var b=new FW();ZO(b,a);return b;}
function ZO(a,b){De();J(a);a.JK=b;}
function ALm(){Beh=TI(B(341));Beg=TI(B(342));Bef=TI(B(343));}
function F5(){C.call(this);this.zy=0;}
var Bhu=null;var Bhv=null;var Bhw=null;function A9N(){A9N=N(F5);AU4();}
function ANB(a){var b=new F5();Sk(b,a);return b;}
function Sk(a,b){A9N();J(a);a.zy=b;}
function AY0(a){return a.zy;}
function AU4(){Bhu=ANB(1);Bhv=ANB(0);Bhw=F($rt_booleancls());}
var C0=D(Bm);
function CH(){var a=new C0();FQ(a);return a;}
function W(a){var b=new C0();ABT(b,a);return b;}
function FQ(a){Ct(a);}
function ABT(a,b){EB(a,b);}
function SN(){C0.call(this);this.FY=null;}
function Xu(a){var b=new SN();APP(b,a);return b;}
function APP(a,b){FQ(a);a.FY=b;}
function Tu(){var a=this;C.call(a);a.bA=null;a.km=0;a.fU=null;a.d_=null;a.bN=null;a.bM=null;a.oQ=null;a.oR=null;a.ng=null;a.ms=0;a.lp=null;a.ns=0;a.n6=null;a.op=null;a.bB=null;a.e9=Bb;a.jm=0;}
function A$p(a){var b=new Tu();AGz(b,a);return b;}
function AIJ(b){var c,d,e,f,g;c=AUA();d=0.0;e=b.detail;f=b.wheelDelta;if(c.firefox?1:0)d=(c.macOS?1:0)?1.0*e:1.0*e/3.0;else if(c.opera?1:0)d=!(c.linux?1:0)?(-1.0)*f/40.0:(-1.0)*f/80.0;else if(!(!(c.chrome?1:0)&&!(c.safari?1:0)&&!(c.IE?1:0))){d=(-1.0)*f;g=d/120.0;if(CD(g)>=1.0)d=g;else if(!(c.windows?1:0))d=!(c.macOS?1:0)?g:d/3.0;}return d;}
function AGz(a,b){J(a);a.km=0;a.fU=Bbd(20);a.d_=N7(20);a.bN=Bc(20);a.bM=Bc(20);a.oQ=Bc(20);a.oR=Bc(20);a.ng=Bdh();a.ms=0;a.lp=N7(256);a.ns=0;a.n6=N7(256);a.op=N7(5);a.jm=1;a.bA=b;Ya(a);}
function Ya(a){var b;b=a.bA.ownerDocument;b.addEventListener("mousedown",BY(a,"handleEvent"),!!0);b.addEventListener("mouseup",BY(a,"handleEvent"),!!0);b.addEventListener("mousemove",BY(a,"handleEvent"),!!0);b.addEventListener("wheel",BY(a,"handleEvent"),!!0);b.addEventListener("keydown",BY(a,"handleEvent"),!!0);b.addEventListener("keyup",BY(a,"handleEvent"),!!0);b.addEventListener("keypress",BY(a,"handleEvent"),!!0);a.bA.addEventListener("touchstart",BY(a,"handleEvent"),!!1);a.bA.addEventListener("touchmove",
BY(a,"handleEvent"),!!1);a.bA.addEventListener("touchcancel",BY(a,"handleEvent"),!!1);a.bA.addEventListener("touchend",BY(a,"handleEvent"),!!1);}
function A0E(a,b){ABI(a,b);XP(a,b);}
function ABI(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;a:{c=$rt_str(b.type);if(c.z(B(344))){d=b;e=b.target;f=a.bA;g=e!==f?0:1;if(g&&!a.d_.data[0]){a.jm=1;a.km=1;a.d_.data[0]=1;h=Jb(d.button);a.ng.IQ(h);a.op.data[h]=1;a.oQ.data[0]=0;a.oR.data[0]=0;if(!a.r5()){i=a.kh(d,a.bA);j=a.ka(d,a.bA);a.bN.data[0]=i;a.bM.data[0]=j;}else{k=a.bN.data;k[0]=k[0]+Fa(a,d)|0;k=a.bM.data;k[0]=k[0]+EM(a,d)|0;}a.e9=CA();if(a.bB!==null)a.bB.id(a.bN.data[0],a.bM.data[0],0,Jb(d.button));b.preventDefault();b.stopPropagation();break a;}l
=a.kh(d,a.bA);m=a.ka(d,a.bA);if(!(l>=0.0&&l<=Bfz.bp()&&m>=0.0&&m<=Bfz.bm()))a.jm=0;return;}if(c.z(B(345))){d=b;if(!a.d_.data[0])return;a.ng.Mb(Jb(d.button));k=a.d_;k.data[0]=a.ng.eq<=0?0:1;if(a.r5()){a.gS(0,Fa(a,d)|0,EM(a,d)|0);k=a.bN.data;k[0]=k[0]+Fa(a,d)|0;k=a.bM.data;k[0]=k[0]+EM(a,d)|0;}else{a.gS(0,a.kh(d,a.bA)-a.bN.data[0]|0,a.ka(d,a.bA)-a.bM.data[0]|0);a.bN.data[0]=a.kh(d,a.bA);a.bM.data[0]=a.ka(d,a.bA);}a.e9=CA();a.d_.data[0]=0;if(a.bB!==null)a.bB.hE(a.bN.data[0],a.bM.data[0],0,Jb(d.button));}else if
(!c.z(B(346))){if(c.z(B(347))){n=b;if(a.bB!==null){o=AIJ(n);a.bB.ou(0.0,o|0);}a.e9=CA();}else if(c.z(B(348))){a.km=1;p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;v=a.fU;w=AAi(a);v.Kt(u,Bn(w));a.d_.data[w]=1;a.bN.data[w]=a.mk(t,a.bA);a.bM.data[w]=a.kA(t,a.bA);a.oQ.data[w]=0;a.oR.data[w]=0;if(a.bB!==null)a.bB.id(a.bN.data[w],a.bM.data[w],w,0);r=r+1|0;}a.e9=CA();b.preventDefault();}}else{d=b;if(a.r5()){a.gS(0,Fa(a,d)|0,EM(a,d)|0);k=a.bN.data;k[0]=k[0]+Fa(a,d)|0;k=a.bM.data;k[0]=k[0]
+EM(a,d)|0;}else{i=a.kh(d,a.bA);j=a.ka(d,a.bA);a.gS(0,i-a.bN.data[0]|0,j-a.bM.data[0]|0);a.bN.data[0]=i;a.bM.data[0]=j;}a.e9=CA();if(a.bB!==null){if(!a.d_.data[0])a.bB.mW(a.bN.data[0],a.bM.data[0]);else a.bB.i2(a.bN.data[0],a.bM.data[0],0);}}}if(c.z(B(349))){p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;x=(a.fU.l(u)).lf();a.gS(x,a.mk(t,a.bA)-a.bN.data[x]|0,a.kA(t,a.bA)-a.bM.data[x]|0);a.bN.data[x]=a.mk(t,a.bA);a.bM.data[x]=a.kA(t,a.bA);if(a.bB!==null)a.bB.i2(a.bN.data[x],a.bM.data[x],
x);r=r+1|0;}a.e9=CA();b.preventDefault();}if(c.z(B(350))){p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;x=(a.fU.l(u)).lf();a.fU.mo(u);a.d_.data[x]=0;i=a.mk(t,a.bA);j=a.kA(t,a.bA);a.gS(x,i-a.bN.data[x]|0,j-a.bM.data[x]|0);a.bN.data[x]=i;a.bM.data[x]=j;if(a.bB!==null)a.bB.hE(a.bN.data[x],a.bM.data[x],x,0);r=r+1|0;}a.e9=CA();b.preventDefault();}if(c.z(B(351))){p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;x=(a.fU.l(u)).lf();a.fU.mo(u);a.d_.data[x]=0;i
=a.mk(t,a.bA);j=a.kA(t,a.bA);a.gS(x,i-a.bN.data[x]|0,j-a.bM.data[x]|0);a.bN.data[x]=i;a.bM.data[x]=j;if(a.bB!==null)a.bB.hE(a.bN.data[x],a.bM.data[x],x,0);r=r+1|0;}a.e9=CA();b.preventDefault();}}
function XP(a,b){var c,d,e,f,g;c=$rt_str(b.type);if(!(c.z(B(352))&&a.jm)){if(c.z(B(353))&&a.jm){d=b.charCode&65535;if(a.bB!==null)a.bB.lk(d);}else if(c.z(B(354))&&a.jm){e=RH(b.keyCode);if(a.lp.data[e]){a.ms=a.ms-1|0;a.lp.data[e]=0;}if(a.bB!==null)a.bB.or(e);}}else{a:{f=b;e=RH(f.keyCode);g=0;switch(e){case 67:g=8;break a;case 112:g=127;break a;default:}}if(!(e!=67&&e!=112)){b.preventDefault();if(a.bB!==null){a.bB.ly(e);a.bB.lk(g);}}else if(!a.lp.data[e]){a.ms=a.ms+1|0;a.lp.data[e]=1;a.ns=1;a.n6.data[e]=1;if(a.bB
!==null)a.bB.ly(e);}}}
function AAi(a){var b;b=0;while(true){if(b>=20)return (-1);if(!a.fU.Fy(Bn(b),0))break;b=b+1|0;}return b;}
function AJw(a){var b;a:{if(a.km){a.km=0;b=0;while(true){if(b>=a.op.data.length)break a;a.op.data[b]=0;b=b+1|0;}}}b:{if(a.ns){a.ns=0;b=0;while(true){if(b>=a.n6.data.length)break b;a.n6.data[b]=0;b=b+1|0;}}}}
function A6V(a,b,c,d){a.oQ.data[b]=c;a.oR.data[b]=d;}
function Fa(a,b){return b.movementX;}
function EM(a,b){return b.movementY;}
function J5(a,b){var c,d;c=$rt_str(b.compatMode);d=c.z(B(355));if(d)b=b.documentElement;return b;}
function Hg(a,b){var c;c=b.scrollTop;return Hy(c);}
function JR(a,b){var c;c=J5(a,b);return Hg(a,c);}
function H3(a,b){var c;c=b.scrollLeft;return Hy(c);}
function Lt(a,b){var c;c=J5(a,b);return H3(a,c);}
function Rr(a,b,c){var d;d=(c.clientX-NV(a,b)|0)+H3(a,b)|0;d=d+Lt(a,b.ownerDocument)|0;return d;}
function Zt(a,b,c){var d;d=(c.clientY-Ng(a,b)|0)+Hg(a,b)|0;d=d+JR(a,b.ownerDocument)|0;return d;}
function AK9(a,b,c){var d,e;d=c.width*1.0/Kx(a,c);e=d*(((b.clientX-NV(a,c)|0)+H3(a,c)|0)+Lt(a,c.ownerDocument)|0);return Dc(e);}
function AIU(a,b,c){var d,e;d=c.height*1.0/Nw(a,c);e=d*(((b.clientY-Ng(a,c)|0)+Hg(a,c)|0)+JR(a,c.ownerDocument)|0);return Dc(e);}
function A8t(a,b,c){var d;d=c.width*1.0/Kx(a,c);return Dc(d*Rr(a,c,b));}
function AZf(a,b,c){var d;d=c.height*1.0/Nw(a,c);return Dc(d*Zt(a,c,b));}
function Kx(a,b){return b.clientWidth;}
function Nw(a,b){return b.clientHeight;}
function Ng(a,b){return Hy(RX(a,b));}
function RX(a,b){var c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollTop;d=d.parentNode;}while(b!==null){c=c+b.offsetTop;b=d.offsetParent;}return c;}
function NV(a,b){return Hy(YU(a,b));}
function YU(a,b){var c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollLeft;d=d.parentNode;}while(b!==null){c=c+b.offsetLeft;b=d.offsetParent;}return c;}
function Hy(b){return b|0;}
function AUl(a,b){return a.d_.data[b];}
function AGp(a){return a.e9;}
function AFd(a,b){a.bB=b;}
function A9u(a){return 0;}
function AN1(a,b){a.dT(b);}
var Uk=D(Bm);
function A$i(){var a=new Uk();A2e(a);return a;}
function BaM(a){var b=new Uk();A0b(b,a);return b;}
function A2e(a){Ct(a);}
function A0b(a,b){EB(a,b);}
function Il(){DO.call(this);this.vf=null;}
function Bhx(a){var b=new Il();Ou(b,a);return b;}
function Ou(a,b){GT(a);a.vf=b;}
function Ho(){var a=this;Il.call(a);a.IJ=0;a.q8=0;a.eS=null;a.kn=null;a.yC=null;}
function Bhy(a,b){var c=new Ho();NJ(c,a,b);return c;}
function NJ(a,b,c){Ou(a,b);a.eS=I();a.kn=BV(32);a.IJ=c;Hk();a.yC=Bhz;}
function A2V(a,b,c,d){var $$je;if(!AAc(a))return;a:{try{a.vf.mY(b,c,d);break a;}catch($$e){$$je=R($$e);if($$je instanceof C_){}else{throw $$e;}}a.q8=1;}}
function AAc(a){if(a.vf===null)a.q8=1;return a.q8?0:1;}
function Ma(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.data;f=Yq(b,c,d-c|0);g=Ce(Bf(16,Bq(e.length,1024)));h=Hf(g);i=a.yC.mi();De();j=Beg;i=KG(i,j);j=Beg;k=Ls(i,j);while(true){l=(In(k,f,h,1)).hS();a.mY(g,0,B4(h));JM(h);if(!l)break;}while(true){l=(Jv(k,h)).hS();a.mY(g,0,B4(h));JM(h);if(!l)break;}}
function AXi(a,b){a.kn.data[0]=b;Ma(a,a.kn,0,1);}
function AZ1(a,b){a.eS.a(b);Im(a);}
function AV6(a,b){(a.eS.a(b)).U(10);Im(a);}
function AJW(a,b){(a.eS.dC(b)).U(10);Im(a);}
function A4O(a){a.Gd(10);}
function Im(a){var b;b=a.eS.i()<=a.kn.data.length?a.kn:BV(a.eS.i());a.eS.ph(0,a.eS.i(),b,0);Ma(a,b,0,a.eS.i());a.eS.ue(0);}
var RR=D(Dm);
function BbH(a,b){var c=new RR();ATL(c,a,b);return c;}
function ATL(a,b,c){F3(a,b,c);}
function ATf(a,b,c,d){var e,f,g,h;e=a.bQ.db();d.bx(a.bn,b);f=0;while(true){if(f>=e)return a.k.e(b,c,d);g=a.bQ.l(f);h=g.cF(0,b,c,d);if(h>=0)break;f=f+1|0;}return (-1);}
function A5d(a,b){return 0;}
function AEB(a){return B(356);}
function OQ(){var a=this;C.call(a);a.Ex=null;a.sD=null;}
function A_$(a,b){var c=new OQ();AQ3(c,a,b);return c;}
function AQ3(a,b,c){a.sD=b;a.Ex=c;J(a);}
function AQv(a){AIX(a.sD.m7,A9Y(a.Ex));BfA=A7r(a.sD.m7);(D$()).jS();}
function A7n(a){(D$()).jS();}
function AMv(a){a.G_();}
function AF6(a){a.Gk();}
var Ft=D(Iw);
function Mf(a,b,c,d){Zi(a,b,c,d);}
function APV(a){var b;if(a.C>=a.bc)G(TS());b=a.C;a.C=b+1|0;return a.pM(b);}
function A2p(a,b){var c;if(a.b$())G(C5());if(a.C>=a.bc)G(FS());c=a.C;a.C=c+1|0;a.nB(c,b);return a;}
function ALi(a,b){if(b>=0&&b<a.bc)return a.pM(b);G(Bg(((((((I()).a(B(357))).j(b)).a(B(66))).j(a.bc)).a(B(24))).b()));}
function A6W(a,b,c){if(a.b$())G(C5());if(b>=0&&b<a.bc){a.nB(b,c);return a;}G(Bg(((((((I()).a(B(357))).j(b)).a(B(66))).j(a.bc)).a(B(24))).b()));}
function AKM(a){return a.eQ();}
function FC(){var a=this;Ft.call(a);a.cr=null;a.xz=0;a.cj=0;}
function Jw(a,b,c,d,e,f,g){Mf(a,c,e,f);a.cj=b;a.cr=d;a.xz=g;}
function AKs(a){return a.xz;}
var O0=D(FC);
function Bcx(a,b,c,d,e,f){var g=new O0();AXA(g,a,b,c,d,e,f);return g;}
function AXA(a,b,c,d,e,f,g){Jw(a,b,c,d,e,f,g);}
function AHs(a,b){var c,d,e;c=a.cr.A.data;d=a.cj;e=b*4|0;return c[d+e|0]&255|(a.cr.A.data[(a.cj+e|0)+1|0]&255)<<8|(a.cr.A.data[(a.cj+e|0)+2|0]&255)<<16|(a.cr.A.data[(a.cj+e|0)+3|0]&255)<<24;}
function AB$(a,b,c){var d,e,f;d=a.cr.A.data;e=a.cj;f=b*4|0;d[e+f|0]=c<<24>>24;a.cr.A.data[(a.cj+f|0)+1|0]=c>>8<<24>>24;a.cr.A.data[(a.cj+f|0)+2|0]=c>>16<<24>>24;a.cr.A.data[(a.cj+f|0)+3|0]=c>>24<<24>>24;}
var AAQ=D(FG);
function Ba0(a,b){var c=new AAQ();A7i(c,a,b);return c;}
function A7i(a,b,c){J0(a,b,c);}
function AFr(a,b,c,d){var e,f;e=a.j3(d);if(e!==null&&(b+e.i()|0)<=d.J()){f=!(c.b()).zl(e,b)?(-1):e.i();if(f<0)return (-1);d.bx(a.i9,f);return a.k.e(b+f|0,c,d);}return (-1);}
function AQq(a,b,c,d){var e,f,g,h;e=a.j3(d);f=d.dH();if(e!==null&&(b+e.i()|0)<=f){g=c.b();while(true){if(b>f)return (-1);h=g.ud(e,b);if(h<0)return (-1);if(a.k.e(h+e.i()|0,c,d)>=0)break;b=h+1|0;}return h;}return (-1);}
function ACZ(a,b,c,d,e){var f,g,h;f=a.j3(e);if(f===null)return (-1);g=d.b();a:{while(true){if(c<b)return (-1);h=g.zN(f,c);if(h<0)break a;if(h<b)break a;if(a.k.e(h+f.i()|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function A11(a,b){return 1;}
function A7u(a){return (((I()).a(B(358))).j(a.bn)).b();}
function VH(){C$.call(this);this.qP=null;}
function A93(a,b,c,d){var e=new VH();A38(e,a,b,c,d);return e;}
function A38(a,b,c,d,e){FP(a,b,c,d);a.qP=e;}
function ANi(a,b,c,d){var e,f;e=d.J();f=Nh(a,b,e,c);if(f>=0)e=f;if(e>b)return a.k.cF(b,e,c,d);return a.k.e(b,c,d);}
function ACi(a,b,c,d){var e,f,g,h,i;e=d.J();f=a.k.cB(b,c,d);if(f<0)return (-1);g=Nh(a,f,e,c);if(g>=0)e=g;h=a.k.cF(f,e,c,d);h=Bf(f,h);i=h>0?AAV(a,b,h-1|0,c):h?(-1):0;if(i>=b)b=i>=h?i:i+1|0;return b;}
function Nh(a,b,c,d){while(true){if(b>=c)return (-1);if(a.qP.kT(d.f(b)))break;b=b+1|0;}return b;}
function AAV(a,b,c,d){while(true){if(c<b)return (-1);if(a.qP.kT(d.f(c)))break;c=c+(-1)|0;}return c;}
function A5p(a){return B(359);}
var SL=D(T);
function Bdv(){var a=new SL();AZw(a);return a;}
function AZw(a){Bo(a);}
function AKi(a){var b;b=A_r(a);b.bf=1;return b;}
var ID=D();
var BhA=null;var BhB=null;function ABG(){ABG=N(ID);AX2();}
function YV(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;ABG();d=$rt_floatToIntBits(b);c.vS=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.qV=0;c.qw=0;return;}g=0;if(f)h=e|8388608;else{h=e<<1;while(Z(Bs(O(h),O(8388608)),Bb)){h=h<<1;f=f+(-1)|0;g=g+1|0;}}i=A2I(BhB,f);if(i<0)i=( -i|0)-2|0;j=f-BhB.data[i]|0;k=9+j|0;l=O(h);m=Cu(CJ(CP(l,O(BhA.data[i])),32-k|0));if(m>=1000000000){i=i+1|0;n=f-BhB.data[i]|0;k=9+n|0;m=Cu(CJ(CP(l,O(BhA.data[i])),32-k|0));}n=(31-k|0)-g|0;o=n>=0?BhA.data[i]>>>n:BhA.data[i]<<( -n
|0);p=(o+1|0)>>1;q=o>>1;if(h==4194304)q=q>>2;r=YX(m,q);s=Qn(m,p);h=B5(r,s);h=h>0?Cb(m/r|0,r):h<0?Cb(m/s|0,s)+s|0:Cb((m+(s/2|0)|0)/s|0,s);if(h>=1000000000){i=i+1|0;h=h/10|0;}else if(h<100000000){i=i+(-1)|0;h=h*10|0;}c.qV=h;c.qw=i-50|0;}
function YX(b,c){var d,e;ABG();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if(e>=(c/2|0))d=d/10|0;return d;}
function Qn(b,c){var d,e;ABG();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if((d-e|0)>(c/2|0))d=d/10|0;return d;}
function AX2(){var b,c,d,e,f,g,h,i,j,k,l;BhA=Bc(100);BhB=Bc(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=BhA.data;g=d+50|0;f[g]=$rt_udiv(e,20);BhB.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}i=214748364;e=127;d=0;while(d<50){j=0;k=b;while(k>i){k=k>>1;j=j+1|0;e=e+(-1)|0;}k=k*10|0;if(j<=0)b=k;else{l=O(b&((1<<j)-1|0));b=Cu(Dx(O(k),Ye(CP(l,O(10)),j)));}f=BhA.data;k=(50-d|0)-1|0;f[k]=$rt_udiv(b,20);BhB.data[k]=e;d=d+1|0;}}
function Co(){Bw.call(this);this.y6=null;}
var BgY=null;var BhC=null;var BhD=null;var BhE=null;var BhF=null;var BhG=null;var BhH=null;var BhI=null;var BhJ=null;var BgX=null;var BhK=null;var BhL=null;function Ih(){Ih=N(Co);AYL();}
function Dh(a,b,c){var d=new Co();Sm(d,a,b,c);return d;}
function Sm(a,b,c,d){Ih();Cs(a,b,c);a.y6=d;}
function E2(a){return a.y6;}
function AYL(){BgY=Dh(B(360),0,B(361));BhC=Dh(B(362),1,B(363));BhD=Dh(B(364),2,B(365));BhE=Dh(B(366),3,B(367));BhF=Dh(B(368),4,B(369));BhG=Dh(B(370),5,B(371));BhH=Dh(B(372),6,B(373));BhI=Dh(B(374),7,B(375));BhJ=Dh(B(376),8,B(377));BgX=Dh(B(378),9,B(379));BhK=Dh(B(380),10,B(381));BhL=H(Co,[BgY,BhC,BhD,BhE,BhF,BhG,BhH,BhI,BhJ,BgX,BhK]);}
function Bi(){var a=this;C.call(a);a.s=0.0;a.r=0.0;a.t=0.0;a.F=0.0;}
var Bga=null;var Bgb=null;var Bgc=null;var Bgd=null;var Bf_=null;var BhM=0.0;var Bf$=null;var Bge=null;var Bgf=null;var Bgg=null;var Bgh=null;var Bgi=null;var Bgj=null;var Bgk=null;var Bgl=null;var Bgm=null;var Bgn=null;var Bgo=null;var Bgp=null;var Bgq=null;var Bgr=null;var Bgs=null;var Bgt=null;var Bgu=null;var Bgv=null;var Bgw=null;var Bgx=null;var Bgy=null;var Bgz=null;var BgA=null;var BgB=null;var BgC=null;var BgD=null;var BgE=null;var BgF=null;function Bu(){Bu=N(Bi);AS6();}
function DY(){var a=new Bi();Ui(a);return a;}
function BJ(a){var b=new Bi();AAU(b,a);return b;}
function CL(a,b,c,d){var e=new Bi();R4(e,a,b,c,d);return e;}
function A3Q(a){var b=new Bi();Tt(b,a);return b;}
function Ui(a){Bu();J(a);}
function AAU(a,b){Bu();J(a);H1(a,b);}
function R4(a,b,c,d,e){Bu();J(a);a.s=b;a.r=c;a.t=d;a.F=e;a.dK();}
function Tt(a,b){Bu();J(a);a.eI(b);}
function ADL(a,b){a.s=b.s;a.r=b.r;a.t=b.t;a.F=b.F;return a;}
function A8I(a,b){a.s=a.s*b.s;a.r=a.r*b.r;a.t=a.t*b.t;a.F=a.F*b.F;return a.dK();}
function ADs(a,b){a.s=a.s*b;a.r=a.r*b;a.t=a.t*b;a.F=a.F*b;return a.dK();}
function A3F(a,b){a.s=a.s+b.s;a.r=a.r+b.r;a.t=a.t+b.t;a.F=a.F+b.F;return a.dK();}
function AUg(a,b){a.s=a.s-b.s;a.r=a.r-b.r;a.t=a.t-b.t;a.F=a.F-b.F;return a.dK();}
function A5D(a){if(a.s<0.0)a.s=0.0;else if(a.s>1.0)a.s=1.0;if(a.r<0.0)a.r=0.0;else if(a.r>1.0)a.r=1.0;if(a.t<0.0)a.t=0.0;else if(a.t>1.0)a.t=1.0;if(a.F<0.0)a.F=0.0;else if(a.F>1.0)a.F=1.0;return a;}
function A2x(a,b,c,d,e){a.s=b;a.r=c;a.t=d;a.F=e;return a.dK();}
function ANp(a,b){H1(a,b);return a;}
function ACQ(a,b,c,d,e){a.s=a.s+b;a.r=a.r+c;a.t=a.t+d;a.F=a.F+e;return a.dK();}
function APf(a,b,c,d,e){a.s=a.s-b;a.r=a.r-c;a.t=a.t-d;a.F=a.F-e;return a.dK();}
function A6k(a,b,c,d,e){a.s=a.s*b;a.r=a.r*c;a.t=a.t*d;a.F=a.F*e;return a.dK();}
function AMs(a,b,c){a.s=a.s+c*(b.s-a.s);a.r=a.r+c*(b.r-a.r);a.t=a.t+c*(b.t-a.t);a.F=a.F+c*(b.F-a.F);return a.dK();}
function AVK(a,b,c,d,e,f){a.s=a.s+f*(b-a.s);a.r=a.r+f*(c-a.r);a.t=a.t+f*(d-a.t);a.F=a.F+f*(e-a.F);return a.dK();}
function ALf(a){a.s=a.s*a.F;a.r=a.r*a.F;a.t=a.t*a.F;return a;}
function AXp(a,b){var c;if(a===b)return 1;if(b!==null&&Cf(a)===Cf(b)){c=b;return a.rH()!=c.rH()?0:1;}return 0;}
function AKR(a){var b,c;b=a.s===0.0?0:CB(a.s);c=(31*b|0)+(a.r===0.0?0:CB(a.r))|0;c=(31*c|0)+(a.t===0.0?0:CB(a.t))|0;c=(31*c|0)+(a.F===0.0?0:CB(a.F))|0;return c;}
function AQx(a){var b;b=(255.0*a.F|0)<<24|(255.0*a.t|0)<<16|(255.0*a.r|0)<<8|255.0*a.s|0;return JS(b);}
function ASi(a){return (255.0*a.F|0)<<24|(255.0*a.t|0)<<16|(255.0*a.r|0)<<8|255.0*a.s|0;}
function AFJ(a){var b,c;b=(255.0*a.s|0)<<24|(255.0*a.r|0)<<16|(255.0*a.t|0)<<8|255.0*a.F|0;c=N6(b);while(c.i()<8){c=(((I()).a(B(317))).a(c)).b();}return c;}
function AEV(b){Bu();return ABR(b,DY());}
function ABR(b,c){Bu();if(b.f(0)==35)b=b.ef(1);c.s=Do(b.cd(0,2),16)/255.0;c.r=Do(b.cd(2,4),16)/255.0;c.t=Do(b.cd(4,6),16)/255.0;c.F=b.i()!=8?1.0:Do(b.cd(6,8),16)/255.0;return c;}
function AEL(b,c,d,e){var f,g;Bu();f=e<<24|d<<16|c<<8|b;g=JS(f);return g;}
function AHl(b,c,d,e){var f;Bu();f=(255.0*e|0)<<24|(255.0*d|0)<<16|(255.0*c|0)<<8|255.0*b|0;return JS(f);}
function AJp(b,c,d,e){Bu();return e<<24|d<<16|c<<8|b;}
function AHp(b){Bu();return b*255.0|0;}
function A8Y(b,c){Bu();return (b*255.0|0)<<8|c*255.0|0;}
function A0w(b,c,d){Bu();return (b*31.0|0)<<11|(c*63.0|0)<<5|d*31.0|0;}
function AJU(b,c,d,e){Bu();return (b*15.0|0)<<12|(c*15.0|0)<<8|(d*15.0|0)<<4|e*15.0|0;}
function AJn(b,c,d){Bu();return (b*255.0|0)<<16|(c*255.0|0)<<8|d*255.0|0;}
function A7x(b,c,d,e){Bu();return (b*255.0|0)<<24|(c*255.0|0)<<16|(d*255.0|0)<<8|e*255.0|0;}
function AZu(b,c,d,e){Bu();return (b*255.0|0)<<24|(c*255.0|0)<<16|(d*255.0|0)<<8|e*255.0|0;}
function ANm(b){Bu();return (b.s*31.0|0)<<11|(b.r*63.0|0)<<5|b.t*31.0|0;}
function A4Q(b){Bu();return (b.s*15.0|0)<<12|(b.r*15.0|0)<<8|(b.t*15.0|0)<<4|b.F*15.0|0;}
function AMr(b){Bu();return (b.s*255.0|0)<<16|(b.r*255.0|0)<<8|b.t*255.0|0;}
function ADC(b){Bu();return (b.s*255.0|0)<<24|(b.r*255.0|0)<<16|(b.t*255.0|0)<<8|b.F*255.0|0;}
function AZ_(b){Bu();return (b.F*255.0|0)<<24|(b.s*255.0|0)<<16|(b.r*255.0|0)<<8|b.t*255.0|0;}
function A72(b,c){Bu();b.s=((c&63488)>>>11)/31.0;b.r=((c&2016)>>>5)/63.0;b.t=((c&31)>>>0)/31.0;}
function A2J(b,c){Bu();b.s=((c&61440)>>>12)/15.0;b.r=((c&3840)>>>8)/15.0;b.t=((c&240)>>>4)/15.0;b.F=(c&15)/15.0;}
function A26(b,c){Bu();b.s=((c&16711680)>>>16)/255.0;b.r=((c&65280)>>>8)/255.0;b.t=(c&255)/255.0;}
function H1(b,c){Bu();b.s=((c&(-16777216))>>>24)/255.0;b.r=((c&16711680)>>>16)/255.0;b.t=((c&65280)>>>8)/255.0;b.F=(c&255)/255.0;}
function AOg(b,c){Bu();b.F=((c&(-16777216))>>>24)/255.0;b.s=((c&16711680)>>>16)/255.0;b.r=((c&65280)>>>8)/255.0;b.t=(c&255)/255.0;}
function Yy(b,c){var d;Bu();d=AYM(c);b.F=((d&(-16777216))>>>24)/255.0;b.t=((d&16711680)>>>16)/255.0;b.r=((d&65280)>>>8)/255.0;b.s=(d&255)/255.0;}
function A5i(a,b,c,d){var e,f,g,h,i,j;a:{e=(b/60.0+6.0)%6.0;f=e|0;g=e-f;h=d*(1.0-c);i=d*(1.0-c*g);j=d*(1.0-c*(1.0-g));switch(f){case 0:break;case 1:a.s=i;a.r=d;a.t=h;break a;case 2:a.s=h;a.r=d;a.t=j;break a;case 3:a.s=h;a.r=i;a.t=d;break a;case 4:a.s=j;a.r=h;a.t=d;break a;default:a.s=d;a.r=h;a.t=i;break a;}a.s=d;a.r=j;a.t=h;}return a.dK();}
function ATl(a,b){var c;c=b.data;return a.N2(c[0],c[1],c[2]);}
function A4Z(a,b){var c,d,e;c=Eg(Eg(a.s,a.r),a.t);d=Jd(Jd(a.s,a.r),a.t);e=c-d;if(e===0.0)b.data[0]=0.0;else if(c===a.s)b.data[0]=(60.0*(a.r-a.t)/e+360.0)%360.0;else if(c!==a.r)b.data[0]=60.0*(a.s-a.r)/e+240.0;else b.data[0]=60.0*(a.t-a.s)/e+120.0;if(c<=0.0)b.data[1]=0.0;else b.data[1]=1.0-d/c;b.data[2]=c;return b;}
function A7d(a){return A3Q(a);}
function AS6(){Bga=CL(1.0,1.0,1.0,1.0);Bgb=BJ((-1077952513));Bgc=BJ(2139062271);Bgd=BJ(1061109759);Bf_=CL(0.0,0.0,0.0,1.0);BhM=Bga.nj();Bf$=CL(0.0,0.0,0.0,0.0);Bge=CL(0.0,0.0,1.0,1.0);Bgf=CL(0.0,0.0,0.5,1.0);Bgg=BJ(1097458175);Bgh=BJ(1887473919);Bgi=BJ((-2016482305));Bgj=CL(0.0,1.0,1.0,1.0);Bgk=CL(0.0,0.5,0.5,1.0);Bgl=BJ(16711935);Bgm=BJ(2147418367);Bgn=BJ(852308735);Bgo=BJ(579543807);Bgp=BJ(1804477439);Bgq=BJ((-65281));Bgr=BJ((-2686721));Bgs=BJ((-626712321));Bgt=BJ((-5963521));Bgu=BJ((-1958407169));Bgv=BJ((-759919361));Bgw
=BJ((-1306385665));Bgx=BJ((-16776961));Bgy=BJ((-13361921));Bgz=BJ((-8433409));BgA=BJ((-92245249));BgB=BJ((-9849601));BgC=CL(1.0,0.0,1.0,1.0);BgD=BJ((-1608453889));BgE=BJ((-293409025));BgF=BJ((-1339006721));}
function E$(){var a=this;C.call(a);a.fd=0;a.cH=0;a.ia=0;a.hH=0;a.cS=0;a.en=null;a.jK=0;a.Di=0;}
function Ey(a,b,c){var d=new E$();AMb(d,a,b,c);return d;}
function BhN(a,b,c,d){var e=new E$();ABD(e,a,b,c,d);return e;}
function BhO(a,b,c,d,e,f){var g=new E$();ZB(g,a,b,c,d,e,f);return g;}
function AMb(a,b,c,d){ABD(a,b,c,d,0);}
function ABD(a,b,c,d,e){var f;f=B5(b,4);ZB(a,b,c,f?5126:5121,f?0:1,d,e);}
function ZB(a,b,c,d,e,f,g){J(a);a.fd=b;a.cH=c;a.hH=d;a.ia=e;a.en=f;a.jK=g;a.Di=EZ(b);}
function AMf(a,b){if(!(b instanceof E$))return 0;return Kn(a,b);}
function Kn(a,b){var c,d,e;a:{if(b!==null&&a.fd==b.fd&&a.cH==b.cH&&a.hH==b.hH&&a.ia==b.ia){c=a.en;d=b.en;if(c.z(d)&&a.jK==b.jK){e=1;break a;}}e=0;}return e;}
function IE(a){return (a.Di<<8)+(a.jK&255)|0;}
function P6(a){a:{switch(a.hH){case 5120:case 5121:break;case 5122:case 5123:return 2*a.cH|0;case 5124:case 5125:case 5127:case 5128:case 5129:case 5130:case 5131:break a;case 5126:case 5132:return 4*a.cH|0;default:break a;}return a.cH;}return 0;}
function AW0(a){var b,c;b=IE(a);c=(541*b|0)+a.cH|0;c=(541*c|0)+a.en.by()|0;return c;}
var Ik=D();
function BhP(){var a=new Ik();T5(a);return a;}
function T5(a){J(a);}
function F4(){var a=this;Ik.call(a);a.fJ=null;a.cE=null;a.ut=null;}
function ATA(a,b,c){var d=new F4();G_(d,a,b,c);return d;}
function G_(a,b,c,d){T5(a);GD();if(d!==BgL&&d!==BgM)G(U(((((I()).a(B(298))).dC(d)).a(B(382))).b()));a.fJ=b;a.cE=A0u(c);a.ut=d;}
function AGR(a){return a.cE;}
function AI8(a){var b;b=a.cE.xc(47);if(b<0)return a.cE;return a.cE.ef(b+1|0);}
function A5R(a){var b,c;b=a.xK();c=b.xc(46);if(c==(-1))return b;return b.cd(0,c);}
function AFa(a){return a.ut;}
function AQR(a){var b;b=a.fJ.O2(a.cE);if(b!==null)return b;G(U((((I()).a(a.cE)).a(B(383))).b()));}
function AGK(a){return a.LA(null);}
function A7X(a,b){var c,$$je;if(a.fJ.K0(a.cE))return a.fJ.er.W(a.cE);a:{try{c=A_b(a.HQ(),B(384));}catch($$e){$$je=R($$e);if($$je instanceof Gx){break a;}else{throw $$e;}}return c;}return null;}
function A6d(a){var b,c,d,e,f,g,h,i,j,$$je;b=Cu((a.GY()));if(!b)b=512;c=Ce(b);d=0;e=a.qi();a:{try{try{while(true){f=c.data.length;g=e.rd(c,d,f-d|0);if(g==(-1))break;d=d+g|0;if(d==f){h=Ce(f*2|0);Y(c,0,h,0,d);c=h;}}break a;}catch($$e){$$je=R($$e);if($$je instanceof C_){i=$$je;}else{throw $$e;}}G(I1((((I()).a(B(385))).dC(a)).b(),i));}catch($$e){$$je=R($$e);j=$$je;}b:{try{if(e!==null)e.fG();break b;}catch($$e){$$je=R($$e);if($$je instanceof C_){}else{throw $$e;}}}G(j);}c:{try{if(e!==null)e.fG();break c;}catch($$e)
{$$je=R($$e);if($$je instanceof C_){}else{throw $$e;}}}if(d>=f)h=c;else{h=Ce(d);Y(c,0,h,0,d);}return h;}
function AM4(a,b){var c,d,e;c=new F4;d=a.fJ;e=(((I()).a(a.cE.bO()?B(103):(((I()).a(a.cE)).a(!a.cE.yq(B(386))?B(386):B(103))).b())).a(b)).b();GD();G_(c,d,e,BgL);return c;}
function AF0(a){var b,c;b=a.cE.Hm(B(386));c=B(103);if(b>0)c=a.cE.cd(0,b);return ATA(a.fJ,c,a.ut);}
function A60(a){return a.fJ.M9(a.cE);}
function A2G(a){return a.cE;}
function A0u(b){var c;c=b.un(B(387),B(386));if(c.yq(B(386)))c=c.cd(0,c.i()-1|0);return c;}
function Hh(){BR.call(this);this.h7=null;}
function AA2(a,b){CV(a,b);a.h7=BO();Us(a);}
function Us(a){var b,c,d;b=Bay(a);c=A_S(a);d=AQ4(BY(b,"setWorldTransformJS"),BY(c,"getWorldTransformJS"));a.et(d,1);}
function AQ4(b,c){var jsMotionState=new Bullet.MyMotionState();jsMotionState.setWorldTransform=b;jsMotionState.getWorldTransform=c;return Bullet.getPointer(jsMotionState);}
function IH(){Hh.call(this);this.Lp=null;}
function BhQ(){var a=new IH();Yl(a);return a;}
function BhR(a){var b=new IH();Sz(b,a);return b;}
function Yl(a){Sz(a,BO());}
function Sz(a,b){AA2(a,B(388));a.Lp=b;}
function AAb(){IH.call(this);this.p0=null;}
function A$c(a){var b=new AAb();A3B(b,a);return b;}
function A3B(a,b){Yl(a);a.p0=b;}
function AP5(a,b){b.cg(a.p0);}
function ALt(a,b){a.p0.cg(b);}
var Tk=D(CC);
function A97(a){var b=new Tk();AJt(b,a);return b;}
function AJt(a,b){E0(a,b.pH(),b.IM(),b.iX());a.Y.Q(a);}
function A8T(a,b,c,d){var e;while((b+a.bu.cf()|0)<=d.J()){e=a.bu;if(e.bI(b,c)<=0)break;b=b+a.bu.cf()|0;}return a.k.e(b,c,d);}
function AMe(a,b,c,d){var e,f,g;e=a.k.cB(b,c,d);if(e<0)return (-1);f=e-a.bu.cf()|0;while(f>=b&&a.bu.bI(f,c)>0){g=f-a.bu.cf()|0;e=f;f=g;}return e;}
function Et(){var a=this;C.call(a);a.fc=null;a.i3=0;a.ok=null;a.Ce=null;a.DB=null;a.CF=null;a.k2=null;a.CD=null;a.yJ=null;a.BM=null;a.dD=0;a.qO=0;a.sH=0;a.O3=null;a.AO=null;a.wh=null;a.yf=0;a.JE=0;a.cL=null;a.hs=null;}
var BhS=0;var BhT=null;var BhU=null;var BhV=null;var BhW=null;function Ua(){Ua=N(Et);AOh();}
function AHx(a,b){var c=new Et();Ud(c,a,b);return c;}
function Ud(a,b,c){Ua();J(a);a.fc=B(103);a.ok=Gf();a.Ce=Gf();a.DB=Gf();a.k2=Gf();a.CD=Gf();a.yJ=Gf();a.JE=0;a.cL=Ff(1);a.hs=Ff(1);if(b===null)G(W(B(389)));if(c===null)G(W(B(390)));if(BhT!==null&&BhT.i()>0)b=(((I()).a(BhT)).a(b)).b();if(BhU!==null&&BhU.i()>0)c=(((I()).a(BhU)).a(c)).b();a.AO=b;a.wh=c;a.O3=HJ(16);J$(a,b,c);if(a.rR()){Qi(a);Rw(a);Zj(a,Bem,a);}}
function J$(a,b,c){a.qO=N9(a,35633,b);a.sH=N9(a,35632,c);if(a.qO!=(-1)&&a.sH!=(-1)){a.dD=AAz(a,a.HW());if(a.dD!=(-1)){a.i3=1;return;}a.i3=0;return;}a.i3=0;}
function N9(a,b,c){var d,e,f,g,h;d=BfD;e=Ff(1);f=d.Nm(b);if(!f)return (-1);d.Po(f,c);d.HG(f);d.ML(f,35713,e);g=e.b2(0);if(g)return f;h=d.MU(f);a.fc=(((I()).a(a.fc)).a(b!=35633?B(391):B(392))).b();a.fc=(((I()).a(a.fc)).a(h)).b();return (-1);}
function AJl(a){var b,c;b=BfD;c=b.L0();if(!c)c=(-1);return c;}
function AAz(a,b){var c,d,e,f;c=BfD;if(b==(-1))return (-1);c.wV(b,a.qO);c.wV(b,a.sH);c.Ky(b);d=FN(4);FB(d,ER());e=d.yi();c.p$(b,35714,e);f=e.b2(0);if(f)return b;a.fc=BfD.zZ(b);return (-1);}
function A6j(a){if(!a.i3)return a.fc;a.fc=BfD.zZ(a.dD);return a.fc;}
function A7j(a){return a.i3;}
function QN(a,b){var c,d;c=BfD;d=a.k2.tn(b,(-2));if(d==(-2)){d=c.CK(a.dD,b);a.k2.gq(b,d);}return d;}
function JE(a,b){Ua();return a.An(b,BhS);}
function A1a(a,b,c){var d;d=a.ok.tn(b,(-2));if(d==(-2)){d=BfD.Ao(a.dD,b);if(d==(-1)&&c){if(!a.i3)G(DN((((I()).a(B(393))).a(a.qJ())).b()));G(W(((((I()).a(B(394))).a(b)).a(B(395))).b()));}a.ok.gq(b,d);}return d;}
function AZG(a,b,c){var d,e;d=BfD;Cj(a);e=JE(a,b);d.B3(e,c);}
function AYz(a,b,c){var d;d=BfD;Cj(a);d.B3(b,c);}
function AOo(a,b,c){var d;d=BfD;Cj(a);d.LV(b,c);}
function ACR(a,b,c,d){var e;e=BfD;Cj(a);e.NI(b,c,d);}
function AED(a,b,c,d,e){var f;f=BfD;Cj(a);f.Gu(b,c,d,e);}
function AOO(a,b,c,d,e,f){var g;g=BfD;Cj(a);g.F$(b,c,d,e,f);}
function AQj(a,b,c,d,e){var f;f=BfD;Cj(a);f.Fq(b,e/3|0,c,d);}
function AXM(a,b,c){a.H3(b,c,0);}
function AT7(a,b,c,d){a.y7(JE(a,b),c,d);}
function AKx(a,b,c){a.y7(b,c,0);}
function A19(a,b,c,d){var e;e=BfD;Cj(a);e.xQ(b,1,d,c.c,0);}
function A7w(a,b,c){a.KH(b,c,0);}
function AGV(a,b,c,d){var e;e=BfD;Cj(a);e.Ig(b,1,d,c.gI,0);}
function AU2(a,b,c,d,e){var f;f=BfD;Cj(a);f.xQ(b,e/16|0,0,c,d);}
function ACb(a,b,c){a.ja(b,c.n,c.o,c.q);}
function A4f(a,b,c){a.x5(b,c.s,c.r,c.t,c.F);}
function A8J(a,b,c,d,e,f,g){var h;h=BfD;Cj(a);h.N7(b,c,d,e,f,g);}
function AUf(a){var b;b=BfD;Cj(a);b.Jt(a.dD);}
function AD8(a,b){var c,d;c=BfD;Cj(a);d=QN(a,b);if(d==(-1))return;c.xi(d);}
function A04(a,b){var c;c=BfD;Cj(a);c.xi(b);}
function A4d(a,b){var c;c=BfD;Cj(a);c.Pj(b);}
function Cj(a){if(a.yf){J$(a,a.AO,a.wh);a.yf=0;}}
function Zj(a,b,c){var d;Ua();d=BhV.W(b);if(d===null)d=Bp();d.E(c);BhV.x(b,d);}
function Rw(a){var b,c,d,e;a.cL.cZ();BfD.p$(a.dD,35718,a.cL);b=a.cL.b2(0);a.CF=X(BL,b);c=0;while(c<b){a.cL.cZ();a.cL.sZ(0,1);a.hs.cZ();d=BfD.OW(a.dD,c,a.cL,a.hs);e=BfD.Ao(a.dD,d);a.ok.gq(d,e);a.Ce.gq(d,a.hs.b2(0));a.DB.gq(d,a.cL.b2(0));a.CF.data[c]=d;c=c+1|0;}}
function Qi(a){var b,c,d,e;a.cL.cZ();BfD.p$(a.dD,35721,a.cL);b=a.cL.b2(0);a.BM=X(BL,b);c=0;while(c<b){a.cL.cZ();a.cL.sZ(0,1);a.hs.cZ();d=BfD.Oy(a.dD,c,a.cL,a.hs);e=BfD.CK(a.dD,d);a.k2.gq(d,e);a.CD.gq(d,a.hs.b2(0));a.yJ.gq(d,a.cL.b2(0));a.BM.data[c]=d;c=c+1|0;}}
function AD1(a,b){return a.k2.tn(b,(-1));}
function AOh(){BhS=1;BhT=B(103);BhU=B(103);BhV=DC();BhW=Ff(1);}
var DK=D(Bw);
var BgM=null;var BgL=null;var BhX=null;var BhY=null;var BhZ=null;var Bh0=null;function GD(){GD=N(DK);AGS();}
function HV(a,b){var c=new DK();VG(c,a,b);return c;}
function VG(a,b,c){GD();Cs(a,b,c);}
function AGS(){BgM=HV(B(396),0);BgL=HV(B(397),1);BhX=HV(B(398),2);BhY=HV(B(399),3);BhZ=HV(B(400),4);Bh0=H(DK,[BgM,BgL,BhX,BhY,BhZ]);}
var LQ=D(0);
function Jg(){var a=this;C.call(a);a.qD=null;a.gY=null;a.iD=null;}
var Bh1=0;function BcK(a){var b=new Jg();A6e(b,a);return b;}
function A6e(a,b){var c;J(a);a.gY=b;c=a;b.classObject=c;}
function KV(b){var c;if(b===null)return null;c=b.classObject;if(c===null)c=BcK(b);return c;}
function AKW(a){return (((I()).a(B(401))).j(Id(a))).b();}
function AUS(a){return a.gY;}
function AXh(a,b){return A2L(b,a.gY);}
function A0H(a){if(a.qD===null)a.qD=AO9(a.gY);return a.qD;}
function AH3(a){return A5V(a.gY);}
function ARi(a){return ABx(a.gY)===null?0:1;}
function A1J(a){return KV(ABx(a.gY));}
function AXO(){if(!Bh1){Bh1=1;A0B();}}
function A0B(){EE.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){ABi(obj);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[QA,FI],returnType:$rt_voidcls(),callable:function(obj,args){Pb(obj,args[0],args[1]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[QA,FI,Bi,$rt_floatcls(),$rt_intcls(),$rt_booleancls()],returnType:$rt_voidcls(),callable:function(obj,args){Ss(obj,args[0],args[1],
args[2],A6R(args[3]),AUo(args[4]),AY0(args[5]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[QA,FI,$rt_intcls(),$rt_intcls(),Bi,$rt_floatcls(),$rt_intcls(),$rt_booleancls(),BL],returnType:$rt_voidcls(),callable:function(obj,args){Z1(obj,args[0],args[1],AUo(args[2]),AUo(args[3]),args[4],A6R(args[5]),AUo(args[6]),AY0(args[7]),args[8]);return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[QA,FI],returnType:$rt_voidcls(),callable:function(obj,args){A5E(obj,args[0],args[1]);return null;}},
{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[QA,FI,Bi,$rt_floatcls(),$rt_intcls(),$rt_booleancls()],returnType:$rt_voidcls(),callable:function(obj,args){A1D(obj,args[0],args[1],args[2],A6R(args[3]),AUo(args[4]),AY0(args[5]));return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[QA,FI,$rt_intcls(),$rt_intcls(),Bi,$rt_floatcls(),$rt_intcls(),$rt_booleancls(),BL],returnType:$rt_voidcls(),callable:function(obj,args){AFR(obj,args[0],args[1],AUo(args[2]),AUo(args[3]),args[4],A6R(args[5]),
AUo(args[6]),AY0(args[7]),args[8]);return null;}},{name:"truncate",modifiers:0,accessLevel:1,parameterTypes:[QF,G3,$rt_floatcls(),BL,$rt_intcls(),D1],returnType:$rt_voidcls(),callable:function(obj,args){AAn(obj,args[0],args[1],A6R(args[2]),args[3],AUo(args[4]),args[5]);return null;}},{name:"wrap",modifiers:0,accessLevel:1,parameterTypes:[QF,G3,$rt_intcls(),$rt_intcls()],returnType:G3,callable:function(obj,args){return Qh(obj,args[0],args[1],AUo(args[2]),AUo(args[3]));}},{name:"adjustLastGlyph",modifiers:0,accessLevel
:1,parameterTypes:[QF,G3],returnType:$rt_voidcls(),callable:function(obj,args){EL(obj,args[0],args[1]);return null;}},{name:"parseColorMarkup",modifiers:0,accessLevel:1,parameterTypes:[FI,$rt_intcls(),$rt_intcls(),D1],returnType:$rt_intcls(),callable:function(obj,args){return O3(obj,args[0],AUo(args[1]),AUo(args[2]),args[3]);}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){A6A(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:BL,callable:function(obj,args){return AML(obj);}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){DE();AWV();return null;}}];G3.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){AYG(obj);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){AJ6(obj);return null;}},{name:"toString",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:BL,callable:function(obj,args){return ADi(obj);}}];Bi.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){Ui(obj);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){AAU(obj,AUo(args[0]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),
$rt_floatcls()],returnType:$rt_voidcls(),callable:function(obj,args){R4(obj,A6R(args[0]),A6R(args[1]),A6R(args[2]),A6R(args[3]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Bi],returnType:$rt_voidcls(),callable:function(obj,args){Tt(obj,args[0]);return null;}},{name:"set",modifiers:0,accessLevel:3,parameterTypes:[Bi],returnType:Bi,callable:function(obj,args){return ADL(obj,args[0]);}},{name:"mul",modifiers:0,accessLevel:3,parameterTypes:[Bi],returnType:Bi,callable:function(obj,args)
{return A8I(obj,args[0]);}},{name:"mul",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls()],returnType:Bi,callable:function(obj,args){return ADs(obj,A6R(args[0]));}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[Bi],returnType:Bi,callable:function(obj,args){return A3F(obj,args[0]);}},{name:"sub",modifiers:0,accessLevel:3,parameterTypes:[Bi],returnType:Bi,callable:function(obj,args){return AUg(obj,args[0]);}},{name:"clamp",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bi,callable:function(obj,
args){return A5D(obj);}},{name:"set",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:Bi,callable:function(obj,args){return A2x(obj,A6R(args[0]),A6R(args[1]),A6R(args[2]),A6R(args[3]));}},{name:"set",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:Bi,callable:function(obj,args){return ANp(obj,AUo(args[0]));}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType
:Bi,callable:function(obj,args){return ACQ(obj,A6R(args[0]),A6R(args[1]),A6R(args[2]),A6R(args[3]));}},{name:"sub",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:Bi,callable:function(obj,args){return APf(obj,A6R(args[0]),A6R(args[1]),A6R(args[2]),A6R(args[3]));}},{name:"mul",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:Bi,callable:function(obj,args){return A6k(obj,A6R(args[0]),
A6R(args[1]),A6R(args[2]),A6R(args[3]));}},{name:"lerp",modifiers:0,accessLevel:3,parameterTypes:[Bi,$rt_floatcls()],returnType:Bi,callable:function(obj,args){return AMs(obj,args[0],A6R(args[1]));}},{name:"lerp",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:Bi,callable:function(obj,args){return AVK(obj,A6R(args[0]),A6R(args[1]),A6R(args[2]),A6R(args[3]),A6R(args[4]));}},{name:"premultiplyAlpha",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:Bi,callable:function(obj,args){return ALf(obj);}},{name:"equals",modifiers:0,accessLevel:3,parameterTypes:[C],returnType:$rt_booleancls(),callable:function(obj,args){return AXp(obj,args[0]);}},{name:"hashCode",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:function(obj,args){return AKR(obj);}},{name:"toFloatBits",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_floatcls(),callable:function(obj,args){return AQx(obj);}},{name:"toIntBits",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:$rt_intcls(),callable:function(obj,args){return ASi(obj);}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BL,callable:function(obj,args){return AFJ(obj);}},{name:"valueOf",modifiers:512,accessLevel:3,parameterTypes:[BL],returnType:Bi,callable:function(obj,args){Bu();return AEV(args[0]);}},{name:"valueOf",modifiers:512,accessLevel:3,parameterTypes:[BL,Bi],returnType:Bi,callable:function(obj,args){Bu();return ABR(args[0],args[1]);}},{name:"toFloatBits",modifiers
:512,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_floatcls(),callable:function(obj,args){Bu();return AEL(AUo(args[0]),AUo(args[1]),AUo(args[2]),AUo(args[3]));}},{name:"toFloatBits",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_floatcls(),callable:function(obj,args){Bu();return AHl(A6R(args[0]),A6R(args[1]),A6R(args[2]),A6R(args[3]));}},{name:"toIntBits",modifiers:512,accessLevel:3,parameterTypes
:[$rt_intcls(),$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_intcls(),callable:function(obj,args){Bu();return AJp(AUo(args[0]),AUo(args[1]),AUo(args[2]),AUo(args[3]));}},{name:"alpha",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bu();return AHp(A6R(args[0]));}},{name:"luminanceAlpha",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bu();return A8Y(A6R(args[0]),
A6R(args[1]));}},{name:"rgb565",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bu();return A0w(A6R(args[0]),A6R(args[1]),A6R(args[2]));}},{name:"rgba4444",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bu();return AJU(A6R(args[0]),A6R(args[1]),A6R(args[2]),A6R(args[3]));}},{name:"rgb888",modifiers:512,accessLevel
:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bu();return AJn(A6R(args[0]),A6R(args[1]),A6R(args[2]));}},{name:"rgba8888",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bu();return A7x(A6R(args[0]),A6R(args[1]),A6R(args[2]),A6R(args[3]));}},{name:"argb8888",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),
$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bu();return AZu(A6R(args[0]),A6R(args[1]),A6R(args[2]),A6R(args[3]));}},{name:"rgb565",modifiers:512,accessLevel:3,parameterTypes:[Bi],returnType:$rt_intcls(),callable:function(obj,args){Bu();return ANm(args[0]);}},{name:"rgba4444",modifiers:512,accessLevel:3,parameterTypes:[Bi],returnType:$rt_intcls(),callable:function(obj,args){Bu();return A4Q(args[0]);}},{name:"rgb888",modifiers:512,accessLevel:3,parameterTypes:[Bi],returnType
:$rt_intcls(),callable:function(obj,args){Bu();return AMr(args[0]);}},{name:"rgba8888",modifiers:512,accessLevel:3,parameterTypes:[Bi],returnType:$rt_intcls(),callable:function(obj,args){Bu();return ADC(args[0]);}},{name:"argb8888",modifiers:512,accessLevel:3,parameterTypes:[Bi],returnType:$rt_intcls(),callable:function(obj,args){Bu();return AZ_(args[0]);}},{name:"rgb565ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bi,$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){Bu();A72(args[0],
AUo(args[1]));return null;}},{name:"rgba4444ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bi,$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){Bu();A2J(args[0],AUo(args[1]));return null;}},{name:"rgb888ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bi,$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){Bu();A26(args[0],AUo(args[1]));return null;}},{name:"rgba8888ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bi,$rt_intcls()],returnType:$rt_voidcls(),callable
:function(obj,args){Bu();H1(args[0],AUo(args[1]));return null;}},{name:"argb8888ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bi,$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){Bu();AOg(args[0],AUo(args[1]));return null;}},{name:"abgr8888ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bi,$rt_floatcls()],returnType:$rt_voidcls(),callable:function(obj,args){Bu();Yy(args[0],A6R(args[1]));return null;}},{name:"fromHsv",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),
$rt_floatcls()],returnType:Bi,callable:function(obj,args){return A5i(obj,A6R(args[0]),A6R(args[1]),A6R(args[2]));}},{name:"fromHsv",modifiers:0,accessLevel:3,parameterTypes:[$rt_arraycls($rt_floatcls())],returnType:Bi,callable:function(obj,args){return ATl(obj,args[0]);}},{name:"toHsv",modifiers:0,accessLevel:3,parameterTypes:[$rt_arraycls($rt_floatcls())],returnType:$rt_arraycls($rt_floatcls()),callable:function(obj,args){return A4Z(obj,args[0]);}},{name:"cpy",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:Bi,callable:function(obj,args){return A7d(obj);}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){Bu();AS6();return null;}}];}
function A9b(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!a.g4()&&!a.Ga()){if(a.iD===null){AXO();b=(a.zG()).$meta;c=b.methods;a.iD=X(Fv,c.length);d=0;e=0;while(e<c.length){f=c[e];if($rt_str(f.name).z(B(402))){g=f.parameterTypes;h=X(Jg,g.length);i=0;while(true){j=h.data;if(i>=j.length)break;j[i]=KV(g[i]);i=i+1|0;}j=a.iD.data;k=d+1|0;l=new Fv;b=$rt_str(f.name);m=f.modifiers;ZC(l,a,b,m,f.accessLevel,h,F_(f.callable,"call"));j[d]=l;d=k;}e=e+1|0;}a.iD=IU(a.iD,d);}return a.iD.ge();}return X(Fv,0);}
function ARw(a){var b,c,d,e,f,g,h,i,j;b=a.q_();c=b.data;d=c.length;e=X(Fv,d);f=0;g=0;while(g<d){h=c[g];if(J9(h.r7())){i=e.data;j=f+1|0;i[f]=h;f=j;}g=g+1|0;}if(f<e.data.length)e=IU(e,f);return e;}
function A5N(a,b){var c,d,e,f;c=(a.q_()).data;d=c.length;e=0;while(true){if(e>=d)G(ARp());f=c[e];if(AAj(f.ve(),b))break;e=e+1|0;}return f;}
function A5L(a,b){var c,d,e,f;c=(a.q_()).data;d=c.length;e=0;while(true){if(e>=d)G(ARp());f=c[e];if(J9(f.r7())&&AAj(f.ve(),b))break;e=e+1|0;}return f;}
var CK=D();
var Yo=D(CK);
var DI=D(0);
function ABa(){var a=this;C.call(a);a.H=null;a.br=0;}
function A9y(){var a=new ABa();AVL(a);return a;}
function BcM(a){var b=new ABa();ATC(b,a);return b;}
function AVL(a){J(a);a.H=Bc(0);}
function ATC(a,b){J(a);a.H=Bc(((b+32|0)-1|0)/32|0);}
function AN8(a,b){var c,d;c=b/32|0;if(b>=a.br){GJ(a,c+1|0);a.br=b+1|0;}d=a.H.data;d[c]=d[c]|1<<(b%32|0);}
function AIA(a,b,c){var d,e,f,g;if(b>c)G(C6());d=b/32|0;e=c/32|0;if(c>a.br){GJ(a,e+1|0);a.br=c;}if(d==e){f=a.H.data;f[d]=f[d]|FY(a,b)&GC(a,c);}else{f=a.H.data;f[d]=f[d]|FY(a,b);g=d+1|0;while(g<e){a.H.data[g]=(-1);g=g+1|0;}if(c&31){f=a.H.data;f[e]=f[e]|GC(a,c);}}}
function FY(a,b){var c;c=b%32|0;return (-1)<<c;}
function GC(a,b){var c;c=b%32|0;return !c?0:(-1)>>>(32-c|0);}
function A9w(a,b){var c,d;c=b/32|0;if(c<a.H.data.length){d=a.H.data;d[c]=d[c]&Xt((-2),b%32|0);if(b==(a.br-1|0))Fe(a);}}
function ATN(a,b,c){var d,e,f,g,h;if(b>c)G(C6());if(b>=a.br)return;d=Bq(a.br,c);e=b/32|0;f=d/32|0;if(e==f){g=a.H.data;g[e]=g[e]&(GC(a,b)|FY(a,d));}else{g=a.H.data;g[e]=g[e]&GC(a,b);h=e+1|0;while(h<f){a.H.data[h]=0;h=h+1|0;}if(d&31){g=a.H.data;g[f]=g[f]&FY(a,d);}}Fe(a);}
function ATT(a,b){var c;c=b/32|0;return c<a.H.data.length&&a.H.data[c]&1<<(b%32|0)?1:0;}
function A8L(a,b){var c,d,e,f,g;if(b>=a.br)return (-1);c=b/32|0;d=a.H.data[c];e=d>>>(b%32|0);if(e)return EZ(e)+b|0;f=(a.br+31|0)/32|0;g=c+1|0;while(g<f){if(a.H.data[g])return (g*32|0)+EZ(a.H.data[g])|0;g=g+1|0;}return (-1);}
function ANG(a,b){var c,d,e,f,g;if(b>=a.br)return b;c=b/32|0;d=a.H.data[c]^(-1);e=d>>>(b%32|0);if(e)return EZ(e)+b|0;f=(a.br+31|0)/32|0;g=c+1|0;while(g<f){if(a.H.data[g]!=(-1))return (g*32|0)+EZ(a.H.data[g]^(-1))|0;g=g+1|0;}return a.br;}
function GJ(a,b){var c;if(a.H.data.length>=b)return;c=Bf((b*3|0)/2|0,(a.H.data.length*2|0)+1|0);a.H=AR0(a.H,c);}
function Fe(a){var b,c,d;b=(a.br+31|0)/32|0;a.br=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=L6(a.H.data[c]);if(d<32)break;c=c+(-1)|0;a.br=a.br-32|0;}a.br=a.br-d|0;}}
function ANf(a,b){var c,d;c=Bq(a.H.data.length,b.H.data.length);d=0;while(d<c){if(a.H.data[d]&b.H.data[d])return 1;d=d+1|0;}return 0;}
function A7S(a,b){var c,d,e;c=Bq(a.H.data.length,b.H.data.length);d=0;while(d<c){e=a.H.data;e[d]=e[d]&b.H.data[d];d=d+1|0;}while(c<a.H.data.length){a.H.data[c]=0;c=c+1|0;}a.br=Bq(a.br,b.br);Fe(a);}
function ASe(a,b){var c,d,e;c=Bq(a.H.data.length,b.H.data.length);d=0;while(d<c){e=a.H.data;e[d]=e[d]&(b.H.data[d]^(-1));d=d+1|0;}Fe(a);}
function A7J(a,b){var c,d,e;a.br=Bf(a.br,b.br);GJ(a,(a.br+31|0)/32|0);c=Bq(a.H.data.length,b.H.data.length);d=0;while(d<c){e=a.H.data;e[d]=e[d]|b.H.data[d];d=d+1|0;}}
function A0Q(a,b){var c,d,e;a.br=Bf(a.br,b.br);GJ(a,(a.br+31|0)/32|0);c=Bq(a.H.data.length,b.H.data.length);d=0;while(d<c){e=a.H.data;e[d]=e[d]^b.H.data[d];d=d+1|0;}Fe(a);}
function A70(a){return a.br?0:1;}
function UQ(){Q.call(this);this.It=null;}
function A$h(a){var b=new UQ();A9c(b,a);return b;}
function A9c(a,b){a.It=b;Be(a);}
function AF7(a,b){return QZ(b);}
var Nn=D(0);
function FH(){var a=this;C.call(a);a.co=null;a.c6=null;a.dp=null;a.jr=null;a.hf=null;a.eD=null;a.hG=null;a.k5=0.0;a.jG=0.0;a.kq=0.0;a.l3=0.0;a.rI=null;a.c3=null;a.FM=null;}
function K8(a){J(a);a.co=S();a.c6=Cg(0.0,0.0,(-1.0));a.dp=Cg(0.0,1.0,0.0);a.jr=BO();a.hf=BO();a.eD=BO();a.hG=BO();a.k5=1.0;a.jG=100.0;a.kq=0.0;a.l3=0.0;a.rI=BcF();a.c3=S();a.FM=A9V(S(),S());}
function AHq(a,b,c,d){var e;((a.c3.I(b,c,d)).gb(a.co)).bU();if(!a.c3.x1()){e=a.c3.x_(a.dp);if(CD(e-1.0)<9.999999717180685E-10)(a.dp.M(a.c6)).eh((-1.0));else if(CD(e+1.0)<9.999999717180685E-10)a.dp.M(a.c6);a.c6.M(a.c3);a.Hd();}}
function AYR(a){(a.c3.M(a.c6)).ir(a.dp);((a.dp.M(a.c3)).ir(a.c6)).bU();}
function A36(a,b,c){a.c6.ri(b,c);a.dp.ri(b,c);}
function ANP(a,b,c,d){a.c3.M(b);a.c3.gb(a.co);a.k4(a.c3);a.FF(c,d);a.c3.ri(c,d);a.JI( -a.c3.n, -a.c3.o, -a.c3.q);}
function AOi(a,b,c,d){a.co.Ar(b,c,d);}
function A8_(a,b){a.co.fs(b);}
function P9(){var a=this;FH.call(a);a.lA=0.0;a.yr=null;}
function BbW(){var a=new P9();AEU(a);return a;}
function AEU(a){K8(a);a.lA=1.0;a.yr=S();a.k5=0.0;}
function AWH(a){a.pV(1);}
function A9m(a,b){a.jr.yP(a.lA* -a.kq/2.0,a.lA*a.kq/2.0,a.lA* -(a.l3/2.0),a.lA*a.l3/2.0,a.k5,a.jG);a.hf.BD(a.co,(a.yr.M(a.co)).fs(a.c6),a.dp);a.eD.cg(a.jr);GR(a.eD.c,a.hf.c);if(b){a.hG.cg(a.eD);Mw(a.hG.c);a.rI.Ak(a.hG);}}
var GX=D(0);
function Hz(){var a=this;C.call(a);a.c2=null;a.oC=0;a.wG=0;a.h8=0;a.lV=0;a.ny=0;}
function AYW(a,b){var c=new Hz();AWJ(c,a,b);return c;}
function Bh2(a){var b=new Hz();AAt(b,a);return b;}
function AWJ(a,b,c){J(a);a.h8=1;a.lV=0;a.wG=1;a.c2=ZS(c);a.c2.c$();a.oC=BfD.iW();a.ny=!b?35048:35044;}
function AAt(a,b){J(a);a.h8=1;a.lV=0;a.wG=1;a.c2=ZS(b);a.c2.c$();a.oC=BfD.iW();a.ny=35044;}
function AIG(a){return BE(a.c2);}
function ATM(a){return CS(a.c2);}
function AMt(a,b,c,d){a.h8=1;a.c2.cZ();a.c2.Dc(b,c,d);a.c2.c$();if(a.lV){BfD.fu(34963,BE(a.c2),a.c2,a.ny);a.h8=0;}}
function AS5(a){a.h8=1;return a.c2;}
function A7L(a){if(!a.oC)G(U(B(403)));BfD.c7(34963,a.oC);if(a.h8){BfD.fu(34963,BE(a.c2),a.c2,a.ny);a.h8=0;}a.lV=1;}
function A4_(a){BfD.c7(34963,0);a.lV=0;}
var PW=D(Hz);
function Bal(a){var b=new PW();A3i(b,a);return b;}
function A3i(a,b){AAt(a,b);}
function Jj(){DZ.call(this);this.KN=0.0;}
var Bh3=0.0;var Bh4=null;function PZ(){PZ=N(Jj);ANy();}
function A6R(a){return a.KN;}
function D7(b){var c,d,e,f,g,h,i,j,k,l,m,n;PZ();if(b.bO())G(Ea());c=0;d=b.i();while(true){if(b.f(c)>32){while(b.f(d-1|0)<=32){d=d+(-1)|0;}e=0;if(b.f(c)==45){c=c+1|0;e=1;}else if(b.f(c)==43)c=c+1|0;if(c==d)G(Ea());a:{f=b.f(c);g=0;h=0;i=0;if(f!=46){i=1;if(f>=48&&f<=57){b:{while(c<d){if(b.f(c)!=48)break b;c=c+1|0;}}while(c<d){j=b.f(c);if(j<48)break a;if(j>57)break a;if(g>=214748355)h=h+1|0;else g=(g*10|0)+(j-48|0)|0;c=c+1|0;}}else G(Ea());}}if(c<d&&b.f(c)==46){c=c+1|0;c:{while(true){if(c>=d)break c;k=b.f(c);if
(k<48)break c;if(k>57)break;if(g<214748355){g=(g*10|0)+(k-48|0)|0;h=h+(-1)|0;}c=c+1|0;i=1;}}if(!i)G(Ea());}if(c<d){j=b.f(c);if(j!=101&&j!=69)G(Ea());j=c+1|0;l=0;if(j==d)G(Ea());if(b.f(j)==45){j=j+1|0;l=1;}else if(b.f(j)==43)j=j+1|0;m=0;n=0;d:{while(true){if(j>=d)break d;k=b.f(j);if(k<48)break d;if(k>57)break;m=(10*m|0)+(k-48|0)|0;n=1;j=j+1|0;}}if(!n)G(Ea());if(l)m= -m|0;h=h+m|0;}e:{j=B5(h,38);if(j<=0){if(j)break e;if(g<=34028234)break e;}return e?(-Infinity):Infinity;}if(e)g= -g|0;return g*ZK(h);}c=c+1|0;if
(c==d)break;}G(Ea());}
function ZK(b){var c,d;PZ();if(b>=0)c=10.0;else{c=0.1;b= -b|0;}d=1.0;while(b){if(b%2|0)d=d*c;c=c*c;b=b/2|0;}return d;}
function NN(b){PZ();return $rt_floatToIntBits(b);}
function ANy(){Bh3=NaN;Bh4=F($rt_floatcls());}
var Vl=D();
function JF(b,c){var d,e,f,g;d=b.data;e=BV(c);f=Bq(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function NL(b,c){var d,e,f,g;d=b.data;e=Ce(c);f=Bq(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function AR0(b,c){var d,e,f,g;d=b.data;e=Bc(c);f=Bq(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function IU(b,c){var d,e,f,g;d=b.data;e=K7((Cf(b)).gg(),c);f=Bq(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function AX1(b,c,d,e){var f,g;if(c>d)G(CH());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function Iq(b,c){AX1(b,0,b.data.length,c);}
function APh(b,c,d,e){var f,g;if(c>d)G(CH());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function ANZ(b,c){APh(b,0,b.data.length,c);}
function G7(b,c,d,e){var f,g;if(c>d)G(CH());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function Un(b,c){G7(b,0,b.data.length,c);}
function A2I(b,c){return A3G(b,0,b.data.length,c);}
function A3G(b,c,d,e){var f,g,h,i,j;f=B5(c,d);if(f>0)G(CH());if(!f)return (-1);g=d-1|0;while(true){h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>g)return ( -i|0)-2|0;}else{g=i-1|0;if(g<c)return ( -i|0)-1|0;}}return i;}
function AAj(b,c){var d,e,f,g;if(b===c)return 1;if(b!==null&&c!==null){d=c.data;e=b.data;f=e.length;if(f==d.length){g=0;while(g<f){if(!A3v(e[g],d[g]))return 0;g=g+1|0;}return 1;}}return 0;}
function Du(){BI.call(this);this.e$=0;}
function PQ(a){var b=new Du();ANW(b,a);return b;}
function ANW(a,b){CZ(a);a.e$=b;}
function A0f(a){return 1;}
function AIl(a,b,c){return a.e$!=c.f(b)?(-1):1;}
function AGM(a,b,c,d){var e,f,g,h;if(!(c instanceof BL))return FU(a,b,c,d);e=c;f=d.J();while(true){if(b>=f)return (-1);g=e.eA(a.e$,b);if(g<0)return (-1);h=a.k;b=g+1|0;if(h.e(b,c,d)>=0)break;}return g;}
function AJS(a,b,c,d,e){var f,g;if(!(d instanceof BL))return F2(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.mw(a.e$,c);if(g<0)break a;if(g<b)break a;if(a.k.e(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AQw(a){return (((I()).a(B(103))).U(a.e$)).b();}
function AEd(a){return a.e$;}
function APX(a,b){if(b instanceof Du)return b.pe()!=a.e$?0:1;if(!(b instanceof Ds)){if(b instanceof C1)return b.p(a.e$);if(!(b instanceof Dq))return 1;return 0;}return b.bI(0,H8(a.e$))<=0?0:1;}
function U$(){Ci.call(this);this.m7=null;}
function Bbp(a){var b=new U$();ADY(b,a);return b;}
function ADY(a,b){a.m7=b;D9(a);}
function A9a(a,b,c){var d,e;d=BgW;e=d.Am();e.Gr(ADM(a.m7),A_$(a,e));d.Am();return 1;}
var L4=D();
var Bh5=null;function Bbj(){Bbj=N(L4);AIO();}
function AIO(){Bh5=Bc((Qb()).data.length);Bh5.data[BD(Bh6)]=1;Bh5.data[BD(Bh7)]=2;Bh5.data[BD(Bh8)]=3;Bh5.data[BD(Bh9)]=4;}
function VJ(){var a=this;Q.call(a);a.sC=0;a.Bp=null;a.ty=null;}
function BaI(a,b,c){var d=new VJ();ARU(d,a,b,c);return d;}
function ARU(a,b,c,d){a.ty=b;a.sC=c;a.Bp=d;Be(a);}
function AOS(a,b){return !(a.sC^a.ty.bd.eE(b))&&!(a.sC^a.ty.e0^a.Bp.p(b))?0:1;}
function VQ(){var a=this;Q.call(a);a.xu=0;a.Cp=null;a.B8=null;a.Pn=null;}
function BaF(a,b,c,d){var e=new VQ();AYj(e,a,b,c,d);return e;}
function AYj(a,b,c,d,e){a.Pn=b;a.xu=c;a.Cp=d;a.B8=e;Be(a);}
function AB1(a,b){return a.xu^(!a.Cp.p(b)&&!a.B8.p(b)?0:1)?0:1;}
function VL(){var a=this;Q.call(a);a.Cu=null;a.M2=null;}
function A$u(a,b){var c=new VL();ACc(c,a,b);return c;}
function ACc(a,b,c){a.M2=b;a.Cu=c;Be(a);}
function A45(a,b){return a.Cu.p(b);}
var MF=D(0);
function VK(){var a=this;Q.call(a);a.p4=0;a.y8=null;a.rM=null;}
function A$g(a,b,c){var d=new VK();ACo(d,a,b,c);return d;}
function ACo(a,b,c,d){a.rM=b;a.p4=c;a.y8=d;Be(a);}
function A1x(a,b){return !(a.p4^a.rM.bd.eE(b))&&!(a.p4^a.rM.e0^a.y8.p(b))?1:0;}
function VM(){var a=this;Q.call(a);a.wX=null;a.PA=null;}
function A$r(a,b){var c=new VM();ACl(c,a,b);return c;}
function ACl(a,b,c){a.PA=b;a.wX=c;Be(a);}
function AH4(a,b){return a.wX.p(b);}
function VT(){var a=this;Q.call(a);a.x8=null;a.Dd=0;a.x0=null;}
function A9P(a,b,c){var d=new VT();AF2(d,a,b,c);return d;}
function AF2(a,b,c,d){a.x0=b;a.x8=c;a.Dd=d;Be(a);}
function AWD(a,b){return !a.x8.p(b)&&!(a.Dd^a.x0.bd.eE(b))?1:0;}
var GE=D(0);
function VO(){var a=this;Q.call(a);a.EP=0;a.y9=null;a.y2=null;a.Lj=null;}
function Bdi(a,b,c,d){var e=new VO();ACL(e,a,b,c,d);return e;}
function ACL(a,b,c,d,e){a.Lj=b;a.EP=c;a.y9=d;a.y2=e;Be(a);}
function AXj(a,b){return a.EP^(!a.y9.p(b)&&!a.y2.p(b)?0:1);}
function VN(){var a=this;Q.call(a);a.Et=null;a.LF=null;}
function Bds(a,b){var c=new VN();ATd(c,a,b);return c;}
function ATd(a,b,c){a.LF=b;a.Et=c;Be(a);}
function ALa(a,b){return a.Et.p(b)?0:1;}
function Pv(){BC.call(this);this.rk=null;}
function A_O(a){var b=new Pv();AFj(b,a);return b;}
function AFj(a,b){CM(a);a.rk=b;}
function A3b(a,b,c,d){var e,f,g,h,i;e=d.J();f=b+1|0;if(f>e){d.d2=1;return (-1);}g=c.f(b);if(BX(g)){h=b+2|0;if(h<=e){i=c.f(f);if(Go(g,i))return a.rk.kT(Dd(g,i))?(-1):a.k.e(h,c,d);}}return a.rk.kT(g)?(-1):a.k.e(f,c,d);}
function AWu(a){return B(404);}
function A5o(a,b){a.k=b;}
function ABZ(a){return (-2147483602);}
function ASc(a,b){return 1;}
function VR(){var a=this;Q.call(a);a.xM=null;a.Cs=0;a.yD=null;}
function Bbc(a,b,c){var d=new VR();AYQ(d,a,b,c);return d;}
function AYQ(a,b,c,d){a.yD=b;a.xM=c;a.Cs=d;Be(a);}
function AQu(a,b){return !a.xM.p(b)&&!(a.Cs^a.yD.bd.eE(b))?0:1;}
var DG=D();
var Bh$=null;var Bh_=null;var Bia=null;var Bib=null;var Bic=null;var Bid=null;function Bd(){Bd=N(DG);AT9();}
function H8(b){var c,d;Bd();c=new BL;d=BV(1);d.data[0]=b;Ii(c,d);return c;}
function UU(b){Bd();return b>0&&b<=65535?1:0;}
function H7(b){Bd();return b>=65536&&b<=1114111?1:0;}
function BX(b){Bd();return (b&64512)!=55296?0:1;}
function BG(b){Bd();return (b&64512)!=56320?0:1;}
function Ji(b){Bd();return !BX(b)&&!BG(b)?0:1;}
function Go(b,c){Bd();return BX(b)&&BG(c)?1:0;}
function Dd(b,c){Bd();return ((b&1023)<<10|c&1023)+65536|0;}
function Se(b,c){Bd();return VS(b,c,b.data.length);}
function VS(b,c,d){var e,f;Bd();if(c<(d-1|0)){e=b.data;if(BX(e[c])){f=c+1|0;if(BG(e[f]))return Dd(e[c],e[f]);}}return b.data[c];}
function Fw(b){var c;Bd();c=b-65536|0;return (55296|c>>10&1023)&65535;}
function Fd(b){Bd();return (56320|b&1023)&65535;}
function Dl(b){Bd();return ET(b)&65535;}
function ET(b){Bd();return (Z6(b)).toLowerCase().charCodeAt(0);}
function Dw(b){Bd();return El(b)&65535;}
function El(b){Bd();return (Z6(b)).toUpperCase().charCodeAt(0);}
function Ne(b,c){Bd();return Z_(b,c);}
function Z_(b,c){var d;Bd();if(c>=2&&c<=36){d=Mg(b);if(d>=c)d=(-1);return d;}return (-1);}
function MV(b){Bd();return Mg(b);}
function Mg(b){var c,d,e,f,g,h,i,j;Bd();c=Ol();d=c.data;e=0;f=(d.length/2|0)-1|0;while(f>=e){g=(e+f|0)/2|0;h=g*2|0;i=d[h];j=B5(b,i);if(j>0)e=g+1|0;else{if(j>=0)return d[h+1|0];f=g-1|0;}}return (-1);}
function FK(b,c){Bd();if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function ABH(b){Bd();return Cr(b)!=9?0:1;}
function Ol(){Bd();if(Bh_===null)Bh_=A8l(((Rt()).value!==null?$rt_str((Rt()).value):null));return Bh_;}
function Rt(){Bd();if(Bic===null)Bic=XZ();return Bic;}
function X1(){Bd();if(Bia===null)Bia=ASB(((Xq()).value!==null?$rt_str((Xq()).value):null));return Bia;}
function Xq(){Bd();if(Bid===null)Bid=Ug();return Bid;}
function Er(b){var c;Bd();if(b<65536){c=BV(1);c.data[0]=b&65535;return c;}return IR([Fw(b),Fd(b)]);}
function QB(b){var c;Bd();a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}c=1;break a;}c=0;}return c;}
function F0(b){Bd();return Cr(b);}
function Cr(b){var c,d,e,f,g,h;Bd();if(UU(b)&&Ji(b&65535))return 19;c=X1();d=c.data;e=0;f=d.length-1|0;while(e<=f){g=(e+f|0)/2|0;h=d[g];if(b>=h.xP)e=g+1|0;else{if(b>=h.tr)return h.B0.data[b-h.tr|0];f=g-1|0;}}return 0;}
function TA(b){Bd();return Cr(b)!=2?0:1;}
function UE(b){Bd();return Cr(b)!=1?0:1;}
function Oz(b){Bd();return Cr(b)!=3?0:1;}
function Rc(b){Bd();return !Cr(b)?0:1;}
function Tx(b){Bd();switch(Cr(b)){case 1:case 2:case 3:case 4:case 5:break;default:return 0;}return 1;}
function MH(b){Bd();return JI(b);}
function JI(b){Bd();a:{switch(Cr(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function QZ(b){Bd();a:{switch(Cr(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return Fs(b);}
function Uc(b){Bd();a:{switch(Cr(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return Fs(b);}
function TO(b){Bd();a:{switch(Cr(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break a;default:break a;}return 1;}return Fs(b);}
function Xs(b){Bd();a:{switch(Cr(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break a;default:break a;}return 1;}return Fs(b);}
function Fs(b){Bd();a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Cr(b)!=16?0:1;}
function Mq(b){Bd();switch(Cr(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Su(b){Bd();return Kq(b);}
function Kq(b){Bd();switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Mq(b);}return 1;}
function AT9(){Bh$=F($rt_charcls());Bib=X(DG,128);}
function XZ(){return {"value":"{?*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%slG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%sTEG%%%%%%%%%%%%%%%%%%&5G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%VR#G%%%%%%%%%%%%%"
+"%%%%%"};}
function Ug(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
function Oj(){var a=this;BI.call(a);a.sn=0;a.AC=0;}
function AVS(a){var b=new Oj();AOw(b,a);return b;}
function AOw(a,b){CZ(a);a.sn=b;a.AC=Gs(b);}
function ACE(a,b,c){return a.sn!=c.f(b)&&a.AC!=c.f(b)?(-1):1;}
function AIR(a){return (((I()).a(B(405))).U(a.sn)).b();}
function Dq(){var a=this;BI.call(a);a.mx=0;a.lK=0;a.mO=0;}
function A9Z(a){var b=new Dq();ASa(b,a);return b;}
function ASa(a,b){var c,d;CZ(a);a.bP=2;a.mO=b;c=Er(b);d=c.data;a.mx=d[0];a.lK=d[1];}
function A41(a,b,c){var d,e,f;d=b+1|0;e=c.f(b);f=c.f(d);return a.mx==e&&a.lK==f?2:(-1);}
function A2H(a,b,c,d){var e,f,g,h;if(!(c instanceof BL))return FU(a,b,c,d);e=c;f=d.J();while(b<f){g=e.eA(a.mx,b);if(g<0)return (-1);b=g+1|0;if(b>=f)continue;h=e.f(b);if(a.lK==h&&a.k.e(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AEO(a,b,c,d,e){var f,g,h;if(!(d instanceof BL))return F2(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.mw(a.lK,c);h=g+(-1)|0;if(h<0)break a;if(h<b)break a;if(a.mx==f.f(h)&&a.k.e(h+2|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function A7A(a){return ((((I()).a(B(103))).U(a.mx)).U(a.lK)).b();}
function ATh(a){return a.mO;}
function A4I(a,b){if(b instanceof Dq)return b.sx()!=a.mO?0:1;if(b instanceof C1)return b.p(a.mO);if(b instanceof Du)return 0;if(!(b instanceof Ds))return 1;return 0;}
function Yh(){var a=this;T.call(a);a.r_=0;a.p5=0;a.vB=0;}
function GP(a,b){var c=new Yh();AGu(c,a,b);return c;}
function BbT(a,b,c){var d=new Yh();ASW(d,a,b,c);return d;}
function AGu(a,b,c){Bo(a);a.p5=c;a.r_=b;}
function ASW(a,b,c,d){Bo(a);a.vB=d;a.p5=c;a.r_=b;}
function AB8(a){var b;b=A9U(a.r_);if(a.vB)b.bH.nO(0,2048);b.bf=a.p5;return b;}
var RS=D();
function RB(){var a=this;C.call(a);a.yy=null;a.gs=null;a.gf=null;a.fH=null;}
function BcT(){var a=new RB();A4h(a);return a;}
function A4h(a){J(a);a.gs=null;a.gf=null;a.fH=null;}
var D5=D();
var Bie=null;var Bif=null;function J6(a){J(a);}
function Mn(b){if(!(b&1)){if(Bif!==null)return Bif;Bif=Bc8();return Bif;}if(Bie!==null)return Bie;Bie=BcG();return Bie;}
var HG=D(CQ);
function YG(a,b,c,d){FD(a,b);a.C=c;a.bc=d;}
function T7(b){if(b>=0)return Ba5(b);G(W((((I()).a(B(406))).j(b)).b()));}
function Yq(b,c,d){return A_F(0,b.data.length,b,c,c+d|0,0);}
function KQ(b){return Yq(b,0,b.data.length);}
function ADk(a,b,c,d){var e,f,g,h,i;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bg((((((I()).a(B(407))).j(g)).a(B(408))).j(f)).b()));if(Ba(a)<d)G(TS());if(d<0)G(Bg(((((I()).a(B(409))).j(d)).a(B(410))).b()));h=a.C;i=0;while(i<d){g=c+1|0;f=h+1|0;e[c]=a.zA(h);i=i+1|0;c=g;h=f;}a.C=a.C+d|0;return a;}}e=b.data;G(Bg(((((((I()).a(B(411))).j(c)).a(B(66))).j(e.length)).a(B(24))).b()));}
function AOb(a,b){return a.q3(b,0,b.data.length);}
function A9d(a,b,c,d){var e,f,g,h,i;if(a.b$())G(C5());if(Ba(a)<d)G(FS());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bg((((((I()).a(B(412))).j(g)).a(B(408))).j(f)).b()));if(d<0)G(Bg(((((I()).a(B(409))).j(d)).a(B(410))).b()));h=a.C;i=0;while(i<d){g=h+1|0;f=c+1|0;a.rU(h,e[c]);i=i+1|0;h=g;c=f;}a.C=a.C+d|0;return a;}}e=b.data;G(Bg(((((((I()).a(B(411))).j(c)).a(B(66))).j(e.length)).a(B(24))).b()));}
function AUL(a,b,c,d){var e,f,g,h,i,j;if(a.b$())G(C5());e=d-c|0;if(Ba(a)<e)G(FS());if(c>=0&&c<b.i()){if(d>b.i()){f=new Eh;g=(((I()).a(B(412))).j(d)).a(B(413));ME(f,(g.j(b.i())).b());G(f);}if(c>d)G(Bg((((((I()).a(B(414))).j(c)).a(B(415))).j(d)).b()));h=a.C;while(c<d){i=h+1|0;j=c+1|0;a.rU(h,b.f(c));h=i;c=j;}a.C=a.C+e|0;return a;}G(Bg(((((((I()).a(B(414))).j(c)).a(B(66))).j(b.i())).a(B(24))).b()));}
function IF(a,b){return a.Hj(b,0,b.i());}
function VU(a){return a.Nq();}
function Nd(a){return a.MA();}
function KO(a){GQ(a);return a;}
function AKY(a,b){Gy(a,b);return a;}
var He=D(HG);
function PG(a,b,c,d){YG(a,b,c,d);}
function ADn(a){var b,c,d,e;if(a.b$())G(C5());a:{b=Ba(a);if(a.C>0){c=a.C;d=0;while(true){if(d>=b)break a;e=c+1|0;a.rU(d,a.zA(c));d=d+1|0;c=e;}}}a.C=b;a.bc=a.hn;a.fv=(-1);return a;}
function A8G(a){return a.eQ();}
function QR(){var a=this;He.call(a);a.E1=0;a.uN=0;a.nn=null;}
function Ba5(a){var b=new QR();A3Z(b,a);return b;}
function A_F(a,b,c,d,e,f){var g=new QR();Up(g,a,b,c,d,e,f);return g;}
function A3Z(a,b){Up(a,0,b,BV(b),0,b,0);}
function Up(a,b,c,d,e,f,g){PG(a,c,e,f);a.uN=b;a.E1=g;a.nn=d;}
function A3f(a,b){return a.nn.data[b+a.uN|0];}
function A1j(a,b,c){a.nn.data[b+a.uN|0]=c;}
function AMM(a){return 1;}
function AHv(a){return a.nn;}
function ARM(a){return a.E1;}
function Sq(){var a=this;C.call(a);a.fh=0;a.eB=null;a.eF=null;a.gK=null;a.h$=0;a.wT=0.0;a.pY=0;a.qM=0;a.hQ=0;}
function Bbd(a){var b=new Sq();AOR(b,a);return b;}
function Big(a,b){var c=new Sq();Qw(c,a,b);return c;}
function AOR(a,b){Qw(a,b,0.800000011920929);}
function Qw(a,b,c){var d;J(a);if(c>0.0&&c<1.0){a.wT=c;d=GN(b,c);a.pY=d*c|0;a.hQ=d-1|0;a.qM=CT(O(a.hQ));a.eB=Bc(d);a.eF=X(C,d);return;}G(W((((I()).a(B(42))).cA(c)).b()));}
function AHW(a,b){return Cu(CJ(CP(O(b),Ca(2135587861, 2654435769)),a.qM));}
function Iy(a,b){var c,d,e;c=a.eB;d=a.eX(b);while(true){e=c.data[d];if(!e)return  -(d+1|0)|0;if(e==b)break;d=(d+1|0)&a.hQ;}return d;}
function AY3(a,b,c){var d,e,f;if(!b){d=a.gK;a.gK=c;if(!a.h$){a.h$=1;a.fh=a.fh+1|0;}return d;}e=Iy(a,b);if(e>=0){d=a.eF.data[e];a.eF.data[e]=c;return d;}f= -(e+1|0)|0;a.eB.data[f]=b;a.eF.data[f]=c;f=a.fh+1|0;a.fh=f;if(f>=a.pY)S2(a,a.eB.data.length<<1);return null;}
function Wz(a,b,c){var d,e,f;d=a.eB;e=a.eX(b);while(true){f=d.data;if(!f[e])break;e=(e+1|0)&a.hQ;}f[e]=b;a.eF.data[e]=c;}
function ASq(a,b){var c;if(!b)return !a.h$?null:a.gK;c=Iy(a,b);return c<0?null:a.eF.data[c];}
function A7B(a,b){var c,d,e,f,g,h,i,j,k,l;if(!b){if(!a.h$)return null;a.h$=0;c=a.gK;a.gK=null;a.fh=a.fh-1|0;return c;}d=Iy(a,b);if(d<0)return null;e=a.eB;f=a.eF;g=f.data;c=g[d];h=a.hQ;i=(d+1|0)&h;while(true){j=e.data;k=j[i];if(!k)break;l=a.eX(k);if(((i-l|0)&h)>((d-l|0)&h)){j[d]=k;g[d]=g[i];d=i;}i=(i+1|0)&h;}j[d]=0;g[d]=null;a.fh=a.fh-1|0;return c;}
function AR6(a,b,c){var d,e,f,g;a:{d=a.eF;if(b===null){if(a.h$&&a.gK===null)return 1;e=d.data;f=a.eB;g=e.length-1|0;while(true){if(g<0)break a;if(f.data[g]&&e[g]===null)break;g=g+(-1)|0;}return 1;}if(c){if(b===a.gK)return 1;e=d.data;g=e.length-1|0;while(true){if(g<0)break a;if(e[g]===b)break;g=g+(-1)|0;}return 1;}if(a.h$&&b.z(a.gK))return 1;e=d.data;g=e.length-1|0;while(true){if(g<0)break a;if(b.z(e[g]))return 1;g=g+(-1)|0;}}return 0;}
function S2(a,b){var c,d,e,f,g;a:{c=a.eB.data.length;a.pY=b*a.wT|0;a.hQ=b-1|0;a.qM=CT(O(a.hQ));d=a.eB;e=a.eF;a.eB=Bc(b);a.eF=X(C,b);if(a.fh>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g)Wz(a,g,e.data[f]);f=f+1|0;}}}}
var AAA=D(Dj);
function Bba(a){var b=new AAA();AGq(b,a);return b;}
function AGq(a,b){Gu(a,b,1.0,1.0);}
function AOK(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(BX(l)){if(j==d){if(h.dN(2)){j=j+(-1)|0;break a;}Bk();i=Bej;break a;}m=k[j];if(!BG(m)){i=BU(1);break a;}j=j+(-1)|0;i=FZ(2);break a;}if(BG(l))i=BU(1);if(l>=256){j=j+(-1)|0;i=FZ(1);break a;}k=e.data;n=f+1|0;k[f]=l<<24>>24;c=j;f=n;}j=c;}h.eg(j);h.dQ(f);return i;}
function Ex(){var a=this;C.call(a);a.e6=Bb;a.cx=null;a.nM=0;}
function AR3(){var a=new Ex();La(a);return a;}
function La(a){J(a);a.cx=Bp();a.nM=1;}
function GB(a){if(!a.nM){a.cx.C4(a);a.nM=1;}}
function Ee(a){return a.e6;}
function BB(a,b){var c;a:{if(Cp(a,b)){c=0;while(true){if(c>=a.cx.h)break a;if(Z((a.cx.l(c)).dt,b))return a.cx.l(c);c=c+1|0;}}}return null;}
function Hx(a,b,c){return BB(a,c);}
function AI1(a){a.e6=Bb;a.cx.K();}
function WH(a,b){a.e6=BM(a.e6,b);}
function E7(a,b){var c;c=a.J5(b.dt);if(c>=0)a.cx.kW(c,b);else{WH(a,b.dt);a.cx.E(b);a.nM=0;}GB(a);}
function Xe(a,b){var c,d,e,f;c=b.data;d=c.length;e=0;while(e<d){f=c[e];E7(a,f);e=e+1|0;}}
function FX(a,b){var c,d;c=b.fj();while(c.bC()){d=c.bz();E7(a,d);}}
function Cp(a,b){return Dr(b,Bb)&&Z(Bs(a.e6,b),b)?1:0;}
function AO$(a,b){var c;a:{if(Cp(a,b)){c=0;while(true){if(c>=a.cx.h)break a;if(Z((a.cx.l(c)).dt,b))break;c=c+1|0;}return c;}}return (-1);}
function Rm(a,b,c){var d;if(b===a)return 1;if(b!==null&&Z(a.e6,b.e6)){if(!c)return 1;GB(a);GB(b);d=0;while(d<a.cx.h){if(!(a.cx.l(d)).zh(b.cx.l(d)))return 0;d=d+1|0;}return 1;}return 0;}
function Qu(a,b,c){return Cu(D2(b.dt,c.dt));}
function JV(a){return a.cx.bY();}
function AU7(a){var b,c,d,e,f;GB(a);b=a.cx.h;c=Dx(O(71),a.e6);d=1;e=0;while(e<b){f=CP(a.e6,O((a.cx.l(e)).by()));d=(d*7|0)&65535;c=Dx(c,CP(f,O(d)));e=e+1|0;}return Cu(A__(c,Ye(c,32)));}
function Vo(a){return a.FG();}
function UI(a,b){if(!(b instanceof Ex))return 0;if(b===a)return 1;return Rm(a,b,1);}
function AUN(a,b,c){return Qu(a,b,c);}
function FV(){Ex.call(this);this.mh=null;}
var Bih=0;function I_(){I_=N(FV);A7G();}
function Bii(){var a=new FV();Kf(a);return a;}
function Bij(a){var b=new FV();I9(b,a);return b;}
function Bbu(a){var b=new FV();M_(b,a);return b;}
function BaK(a){var b=new FV();AA_(b,a);return b;}
function Bik(a,b){var c=new FV();Ks(c,a,b);return c;}
function Kf(a){var b,c;I_();b=(I()).a(B(416));c=Bih+1|0;Bih=c;I9(a,(b.j(c)).b());}
function I9(a,b){I_();La(a);a.mh=b;}
function M_(a,b){I_();Kf(a);Xe(a,b);}
function AA_(a,b){I_();Ks(a,b.mh,b);}
function Ks(a,b,c){var d,e;I_();I9(a,b);d=JV(c);while(d.bC()){e=d.bz();E7(a,e.tU());}}
function A5r(a){return BaK(a);}
function AKG(a){return Vo(a)+(3*a.mh.by()|0)|0;}
function AGU(a,b){var c;a:{b:{if(b instanceof FV){if(b===a)break b;if(b.mh.z(a.mh)&&UI(a,b))break b;}c=0;break a;}c=1;}return c;}
function A7G(){Bih=0;}
function D1(){var a=this;C.call(a);a.ry=0;a.pr=0;a.g5=null;}
function Nz(a){LL(a,16,2147483647);}
function LL(a,b,c){J(a);a.g5=AV1(0,b);a.ry=c;}
function Oo(a){return !a.g5.h?a.tB():a.g5.u$();}
function AFu(a,b){if(b===null)G(W(B(417)));if(a.g5.h>=a.ry)a.CL(b);else{a.g5.E(b);a.pr=Bf(a.pr,a.g5.h);a.yV(b);}}
function AIq(a,b){if(APL(b,EF))b.fM();}
function AWv(a,b){}
function T4(a,b){var c,d,e,f,g;if(b===null)G(W(B(43)));c=a.g5;d=a.ry;e=0;f=b.h;while(e<f){g=b.l(e);if(g!==null){if(c.h>=d)a.CL(g);else{c.E(g);a.yV(g);}}e=e+1|0;}a.pr=Bf(a.pr,c.h);}
function DT(){D1.call(this);this.nL=null;}
function I4(a){Nz(a);a.nL=Bp();}
function Vu(a){var b;b=Oo(a);a.nL.E(b);return b;}
function AK_(a){T4(a,a.nL);a.nL.K();}
var SV=D(DT);
function Bbi(){var a=new SV();AC9(a);return a;}
function AC9(a){I4(a);}
function ALH(a){return A9T();}
function A7h(a){var b;b=Vu(a);b.ct=null;b.c9=null;b.cP.Fo(B(103),null,0,0,0);b.kH=null;b.Bs=null;return b;}
function AFw(a){return a.Kc();}
function AMg(a){return a.NK();}
function Zc(){Q.call(this);this.NU=null;}
function Baw(a){var b=new Zc();ACg(b,a);return b;}
function ACg(a,b){a.NU=b;Be(a);}
function A67(a,b){return Oz(b);}
function Jo(){var a=this;C.call(a);a.dh=0.0;a.df=0.0;a.dg=0.0;a.d4=0.0;}
var Bil=null;var Bim=null;function AOs(){AOs=N(Jo);AIF();}
function ZJ(a,b,c,d){var e=new Jo();Xm(e,a,b,c,d);return e;}
function AUu(){var a=new Jo();QV(a);return a;}
function Xm(a,b,c,d,e){AOs();J(a);a.ni(b,c,d,e);}
function QV(a){AOs();J(a);a.BT();}
function AGL(a,b,c,d,e){a.dh=b;a.df=c;a.dg=d;a.d4=e;return a;}
function ALC(a,b){return a.ni(b.dh,b.df,b.dg,b.d4);}
function AW4(a,b,c){return a.Jn(b.n,b.o,b.q,c);}
function A2q(a){return a.dh*a.dh+a.df*a.df+a.dg*a.dg+a.d4*a.d4;}
function AL0(a){var b,c;b=a.tR();if(b!==0.0&&!Dg(b,1.0)){c=FL(b);a.d4=a.d4/c;a.dh=a.dh/c;a.df=a.df/c;a.dg=a.dg/c;}return a;}
function A05(a,b){var c,d,e,f,g,h,i,j,k,l;c=b.data;d=a.dh*a.dh;e=a.dh*a.df;f=a.dh*a.dg;g=a.dh*a.d4;h=a.df*a.df;i=a.df*a.dg;j=a.df*a.d4;k=a.dg*a.dg;l=a.dg*a.d4;c[0]=1.0-2.0*(h+k);c[4]=2.0*(e-l);c[8]=2.0*(f+j);c[12]=0.0;c[1]=2.0*(e+l);c[5]=1.0-2.0*(d+k);c[9]=2.0*(i-g);c[13]=0.0;c[2]=2.0*(f-j);c[6]=2.0*(i+g);c[10]=1.0-2.0*(d+h);c[14]=0.0;c[3]=0.0;c[7]=0.0;c[11]=0.0;c[15]=1.0;}
function A8E(a){return a.ni(0.0,0.0,0.0,1.0);}
function ADb(a,b,c,d,e){return a.Jc(b,c,d,e*0.01745329238474369);}
function AP$(a,b,c,d,e){var f,g,h,i,j,k;f=Td(b,c,d);if(f===0.0)return a.BT();g=1.0/f;h=e>=0.0?e%6.2831854820251465:6.2831854820251465- -e%6.2831854820251465;i=h/2.0;j=A6u(i);k=ADo(i);return (a.ni(g*b*j,g*c*j,g*d*j,k)).I3();}
function AIF(){Bil=ZJ(0.0,0.0,0.0,0.0);Bim=ZJ(0.0,0.0,0.0,0.0);}
var D_=D();
var Bin=null;var Bio=null;var Bip=null;var Biq=null;var Bir=null;var Bis=null;function Bby(){Bby=N(D_);AMn();}
function AMn(){Hk();Bin=Bhz;Bio=A_I();Bip=A$9();Biq=Q7(B(418),1,0);Bir=Q7(B(419),0,0);Bis=Q7(B(420),0,1);}
var M7=D();
var Bit=0;function KR(){KR=N(M7);A0Z();}
function ZU(b,c,d,e){var f;KR();if(!Bit){Mr(b,c,d,e);return;}a:{f=Bem.uJ();UK();if(f!==Be$&&Bem.uJ()!==Bfc){f=Bem;if(f.uJ()!==Bfd){Zz(b,c,d,e);break a;}}WS(b,c);}}
function WS(b,c){var d,e,f,g,h,i,j;KR();d=BfC;e=c.kr();f=c.bp();g=c.bm();h=c.lO();i=c.k9();j=c.kt();d.ku(b,0,e,f,g,0,h,i,j);BfD.wM(b);}
function Zz(b,c,d,e){var f,g,h,i,j,k,l;KR();a:{if(!Bfz.tD(B(421))){f=Bfz;if(!f.tD(B(422))&&BfE===null){Mr(b,c,d,e);break a;}}f=BfC;g=c.kr();h=c.bp();i=c.bm();j=c.lO();k=c.k9();l=c.kt();f.ku(b,0,g,h,i,0,j,k,l);BfD.wM(b);}}
function Mr(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;KR();f=BfC;g=c.kr();h=c.bp();i=c.bm();j=c.lO();k=c.k9();l=c.kt();f.ku(b,0,g,h,i,0,j,k,l);if(BfD===null&&d!=e)G(U(B(423)));m=c.bp()/2|0;n=c.bm()/2|0;o=1;while(m>0&&n>0){p=Ot(m,n,c.fZ());Gj();p.DA(BgZ);p.KB(c,0,0,c.bp(),c.bm(),0,0,m,n);if(o>1)c.io();f=BfC;j=p.kr();k=p.bp();q=p.bm();g=p.lO();h=p.k9();l=p.kt();f.ku(b,o,j,k,q,0,g,h,l);m=p.bp()/2|0;n=p.bm()/2|0;o=o+1|0;c=p;}}
function A0Z(){Bit=1;}
function Q$(){Q.call(this);this.GK=null;}
function A_z(a){var b=new Q$();AYn(b,a);return b;}
function AYn(a,b){a.GK=b;Be(a);}
function AYg(a,b){return 0;}
function X$(){C0.call(this);this.MS=null;}
function Bdr(a){var b=new X$();ADS(b,a);return b;}
function ADS(a,b){FQ(a);a.MS=b;}
var Gv=D(CQ);
function O1(a,b,c,d){FD(a,b);a.C=c;a.bc=d;}
function AHa(b,c,d){return Bcr(0,b.data.length,b,c,c+d|0,0);}
function A1U(b){return AHa(b,0,b.data.length);}
function A6v(a,b,c,d){var e,f,g,h,i;if(a.b$())G(C5());if(Ba(a)<d)G(FS());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bg((((((I()).a(B(424))).j(g)).a(B(408))).j(f)).b()));if(d<0)G(Bg(((((I()).a(B(409))).j(d)).a(B(410))).b()));h=a.C;i=0;while(i<d){g=h+1|0;f=c+1|0;a.qE(h,e[c]);i=i+1|0;h=g;c=f;}a.C=a.C+d|0;return a;}}e=b.data;G(Bg(((((((I()).a(B(411))).j(c)).a(B(66))).j(e.length)).a(B(24))).b()));}
function TH(a){FR(a);return a;}
function AA8(a){GQ(a);return a;}
function AOq(a,b){IK(a,b);return a;}
function A5w(a,b){Gy(a,b);return a;}
function A6D(a){return AA8(a);}
function AR$(a){return TH(a);}
function A1C(a,b){return a.Ho(b);}
function ATP(a,b){return a.G8(b);}
var Fc=D(Gv);
function K5(a,b,c,d){O1(a,b,c,d);}
function A4F(a,b){if(b>=0&&b<a.bc)return a.u5(b);G(Bg(((((((I()).a(B(357))).j(b)).a(B(66))).j(a.bc)).a(B(24))).b()));}
function A0z(a){return a.eQ();}
function Fm(){var a=this;Fc.call(a);a.fy=null;a.wk=0;a.ft=0;}
function K6(a,b,c,d,e,f,g){K5(a,c,e,f);a.ft=b;a.fy=d;a.wk=g;}
function AZo(a){return a.wk;}
var U2=D(Fm);
function Bdm(a,b,c,d,e,f){var g=new U2();A1f(g,a,b,c,d,e,f);return g;}
function A1f(a,b,c,d,e,f,g){K6(a,b,c,d,e,f,g);}
function AWC(a,b){var c,d,e,f;c=a.fy.A.data;d=a.ft;e=b*2|0;f=c[d+e|0]&255|(a.fy.A.data[(a.ft+e|0)+1|0]&255)<<8;return f<<16>>16;}
function AVY(a,b,c){var d,e,f;d=a.fy.A.data;e=a.ft;f=b*2|0;d[e+f|0]=c<<24>>24;a.fy.A.data[(a.ft+f|0)+1|0]=c>>8<<24>>24;}
function XQ(){Q.call(this);this.HO=null;}
function A$a(a){var b=new XQ();AYo(b,a);return b;}
function AYo(a,b){a.HO=b;Be(a);}
function AOz(a,b){return QB(b);}
var DS=D(CQ);
function Zx(a,b,c,d){FD(a,b);a.C=c;a.bc=d;}
function A71(b,c,d){return A$0(0,b.data.length,b,c,c+d|0,0);}
function ATI(b){return A71(b,0,b.data.length);}
function AL_(a,b,c,d){var e,f,g,h,i;if(a.b$())G(C5());if(Ba(a)<d)G(FS());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bg((((((I()).a(B(425))).j(g)).a(B(408))).j(f)).b()));if(d<0)G(Bg(((((I()).a(B(409))).j(d)).a(B(410))).b()));h=a.C;i=0;while(i<d){g=h+1|0;f=c+1|0;a.m4(h,e[c]);i=i+1|0;h=g;c=f;}a.C=a.C+d|0;return a;}}e=b.data;G(Bg(((((((I()).a(B(411))).j(c)).a(B(66))).j(e.length)).a(B(24))).b()));}
function Rs(a){FR(a);return a;}
function Vy(a){GQ(a);return a;}
function AHV(a,b){IK(a,b);return a;}
function A2T(a,b){Gy(a,b);return a;}
function AIb(a){return Vy(a);}
function ASn(a){return Rs(a);}
function ANu(a,b){return a.NP(b);}
function ARy(a,b){return a.LJ(b);}
var Fp=D(DS);
function KH(a,b,c,d){Zx(a,b,c,d);}
function AJF(a,b){if(b>=0&&b<a.bc)return a.u6(b);G(Bg(((((((I()).a(B(357))).j(b)).a(B(66))).j(a.bc)).a(B(24))).b()));}
function A8C(a,b,c){if(a.b$())G(C5());if(b>=0&&b<a.bc){a.m4(b,c);return a;}G(Bg(((((((I()).a(B(357))).j(b)).a(B(66))).j(a.bc)).a(B(24))).b()));}
function AWZ(a){return a.eQ();}
function EN(){var a=this;Fp.call(a);a.cu=null;a.EO=0;a.ci=0;}
function Lq(a,b,c,d,e,f,g){KH(a,c,e,f);a.ci=b;a.cu=d;a.EO=g;}
function A3C(a){return a.EO;}
function AAI(){Bt.call(this);this.lZ=0;}
function A$$(a){var b=new AAI();AYA(b,a);return b;}
function AYA(a,b){Cl(a);a.lZ=b;}
function AJ9(a,b,c,d){var e;e=!d.js()?c.i():d.J();if(b>=e){d.bx(a.lZ,0);return a.k.e(b,c,d);}if((e-b|0)==1&&c.f(b)==10){d.bx(a.lZ,1);return a.k.e(b+1|0,c,d);}return (-1);}
function AYw(a,b){var c;c=!b.ep(a.lZ)?0:1;b.bx(a.lZ,(-1));return c;}
function AKV(a){return B(426);}
function TL(){BI.call(this);this.sB=0;}
function A4G(a){var b=new TL();A2u(b,a);return b;}
function A2u(a,b){CZ(a);a.sB=Dl(Dw(b));}
function ASS(a,b,c){return a.sB!=Dl(Dw(c.f(b)))?(-1):1;}
function A3r(a){return (((I()).a(B(427))).U(a.sB)).b();}
function Hb(){BH.call(this);this.DI=null;}
var Biu=Bb;function A1Q(){A1Q=N(Hb);A4k();}
function A4k(){Biu=BN(B(428));}
function E1(){var a=this;C.call(a);a.P=null;a.h=0;a.gF=0;a.qb=null;}
function Bp(){var a=new E1();AEE(a);return a;}
function DH(a){var b=new E1();NT(b,a);return b;}
function AV1(a,b){var c=new E1();J3(c,a,b);return c;}
function Biv(a,b,c){var d=new E1();UA(d,a,b,c);return d;}
function BcR(a){var b=new E1();A6a(b,a);return b;}
function Biw(a,b,c,d){var e=new E1();QT(e,a,b,c,d);return e;}
function AEE(a){J3(a,1,16);}
function NT(a,b){J3(a,1,b);}
function J3(a,b,c){J(a);a.gF=b;a.P=X(C,c);}
function UA(a,b,c,d){J(a);a.gF=b;a.P=ES(d,c);}
function A6a(a,b){QT(a,1,b,0,b.data.length);}
function QT(a,b,c,d,e){UA(a,b,e,(Cf(c)).gg());a.h=e;Y(c,d,a.P,0,a.h);}
function AOC(a,b){var c,d,e;c=a.P;d=c.data;if(a.h==d.length)c=a.j5(Bf(8,a.h*1.75|0));d=c.data;e=a.h;a.h=e+1|0;d[e]=b;}
function AIH(a,b){a.rs(b.P,0,b.h);}
function ACP(a,b,c,d){if((c+d|0)<=b.h){a.rs(b.P,c,d);return;}G(W((((((((I()).a(B(429))).j(c)).a(B(430))).j(d)).a(B(431))).j(b.h)).b()));}
function AHY(a,b){a.rs(b,0,b.data.length);}
function AEs(a,b,c,d){var e,f,g;e=a.P;f=e.data;g=a.h+d|0;if(g>f.length)e=a.j5(Bf(Bf(8,g),a.h*1.75|0));Y(b,c,e,a.h,d);a.h=g;}
function A7R(a,b){if(b<a.h)return a.P.data[b];G(Bg((((((I()).a(B(432))).j(b)).a(B(433))).j(a.h)).b()));}
function AOk(a,b,c){if(b<a.h){a.P.data[b]=c;return;}G(Bg((((((I()).a(B(432))).j(b)).a(B(433))).j(a.h)).b()));}
function A1K(a,b,c){var d,e;if(b>a.h)G(Bg((((((I()).a(B(434))).j(b)).a(B(435))).j(a.h)).b()));d=a.P;e=d.data;if(a.h==e.length)d=a.j5(Bf(8,a.h*1.75|0));if(!a.gF){e=d.data;e[a.h]=e[b];}else Y(d,b,d,b+1|0,a.h-b|0);e=d.data;a.h=a.h+1|0;e[b]=c;}
function AXX(a,b,c){var d,e,f,g;a:{d=a.P;e=a.h-1|0;if(!(!c&&b!==null)){while(true){if(e<0)break a;f=d.data;g=e+(-1)|0;if(f[e]===b)break;e=g;}return 1;}while(true){if(e<0)break a;f=d.data;g=e+(-1)|0;if(b.z(f[e]))return 1;e=g;}}return 0;}
function AFL(a,b,c){var d,e,f;a:{d=a.P;if(!c&&b!==null){e=0;f=a.h;while(true){if(e>=f)break a;if(b.z(d.data[e]))break;e=e+1|0;}return e;}e=0;f=a.h;while(true){if(e>=f)break a;if(d.data[e]===b)break;e=e+1|0;}return e;}return (-1);}
function AFM(a,b,c){var d,e,f;a:{d=a.P;if(!(!c&&b!==null)){e=0;f=a.h;while(e<f){if(d.data[e]===b){a.sa(e);return 1;}e=e+1|0;}}else{e=0;f=a.h;while(true){if(e>=f)break a;if(b.z(d.data[e])){a.sa(e);return 1;}e=e+1|0;}}}return 0;}
function ANL(a,b){var c,d,e;if(b>=a.h)G(Bg((((((I()).a(B(432))).j(b)).a(B(433))).j(a.h)).b()));c=a.P;d=c.data;e=d[b];a.h=a.h-1|0;if(!a.gF)d[b]=d[a.h];else Y(c,b+1|0,c,b,a.h-b|0);d[a.h]=null;return e;}
function AGe(a,b,c){var d,e,f,g,h,i;d=a.h;if(c>=d)G(Bg((((((I()).a(B(436))).j(c)).a(B(433))).j(a.h)).b()));if(b>c)G(Bg((((((I()).a(B(437))).j(b)).a(B(435))).j(c)).b()));e=a.P;f=(c-b|0)+1|0;g=d-f|0;if(a.gF){h=b+f|0;Y(e,h,e,b,d-h|0);}else{i=Bf(g,c+1|0);Y(e,i,e,b,d-i|0);}i=g;while(i<d){e.data[i]=null;i=i+1|0;}a.h=g;}
function ATR(a){var b;if(!a.h)G(DN(B(438)));a.h=a.h-1|0;b=a.P.data[a.h];a.P.data[a.h]=null;return b;}
function ARZ(a){if(!a.h)G(DN(B(438)));return a.P.data[a.h-1|0];}
function A9v(a){if(!a.h)G(DN(B(438)));return a.P.data[0];}
function AXP(a){G7(a.P,0,a.h,null);a.h=0;}
function AP0(a,b){var c;if(b<0)G(W((((I()).a(B(439))).j(b)).b()));c=a.h+b|0;if(c>a.P.data.length)a.j5(Bf(Bf(8,c),a.h*1.75|0));return a.P;}
function AXd(a,b){var c,d,e;c=a.P;d=ES((Cf(c)).gg(),b);e=d.data;Y(c,0,d,0,Bq(a.h,e.length));a.P=d;return d;}
function AR4(a,b){(AG2()).N1(a.P,b,0,a.h);}
function AJd(a){if(Bix)return KK(a,1);if(a.qb===null)a.qb=BaC(a);return a.qb.bY();}
function AC5(a,b){var c;if(b<0)G(W((((I()).a(B(440))).j(b)).b()));if(a.h<=b)return;c=b;while(c<a.h){a.P.data[c]=null;c=c+1|0;}a.h=b;}
function AUO(a){var b,c,d,e,f,g;if(!a.gF)return Mm(a);b=a.P;c=1;d=0;e=a.h;while(d<e){f=b.data;c=c*31|0;g=f[d];if(g!==null)c=c+g.by()|0;d=d+1|0;}return c;}
function AKn(a,b){var c,d,e,f,g,h,i,j;if(b===a)return 1;if(!a.gF)return 0;if(!(b instanceof E1))return 0;c=b;if(!c.gF)return 0;d=a.h;if(d!=c.h)return 0;e=a.P;f=c.P;g=0;a:{while(g<d){b:{h=f.data;i=e.data[g];j=h[g];if(i!==null){if(i.z(j))break b;else break a;}if(j!==null)break a;}g=g+1|0;}return 1;}return 0;}
function AP1(a){var b,c,d,e;if(!a.h)return B(441);b=a.P;c=b.data;d=ARN(32);d.lq(91);d.x3(c[0]);e=1;while(e<a.h){d.Ch(B(442));d.x3(c[e]);e=e+1|0;}d.lq(93);return d.b();}
function ADu(b){return BcR(b);}
function AEK(a){return a.bY();}
var P7=D(CX);
function A$9(){var a=new P7();AWy(a);return a;}
function AWy(a){Gt(a,B(443),X(BL,0));}
function A8B(a){return A9$(a);}
function A5T(a){return Bba(a);}
function Ez(){Bw.call(this);this.zT=0;}
var Biy=null;var Bhp=null;var Biz=null;var BiA=null;function AS1(){AS1=N(Ez);AZx();}
function Xk(a,b,c){var d=new Ez();Ys(d,a,b,c);return d;}
function Ys(a,b,c,d){AS1();Cs(a,b,c);a.zT=d;}
function N5(a){return a.zT;}
function AZx(){Biy=Xk(B(444),0,33648);Bhp=Xk(B(445),1,33071);Biz=Xk(B(446),2,10497);BiA=H(Ez,[Biy,Bhp,Biz]);}
function KM(){Cv.call(this);this.Ap=0;}
function BiB(a){var b=new KM();T6(b,a);return b;}
function T6(a,b){Eq(a,b);}
function AT3(a,b,c,d){var e;e=a.j6();d.bx(e,b-d.ep(e)|0);a.Ap=b;return b;}
function AEG(a){return a.Ap;}
function APg(a){return B(447);}
function A3O(a,b){return 0;}
function I2(){BC.call(this);this.hc=0;}
function AMI(a){var b=new I2();AEM(b,a);return b;}
function AEM(a,b){CM(a);a.hc=b;}
function A3A(a,b){a.k=b;}
function AWg(a,b,c,d){var e,f,g;e=b+1|0;if(e>d.J()){d.d2=1;return (-1);}f=c.f(b);if(b>d.dH()){g=c.f(b-1|0);if(BX(g))return (-1);}if(a.hc!=f)return (-1);return a.k.e(e,c,d);}
function AIu(a,b,c,d){var e,f,g,h,i;if(!(c instanceof BL))return FU(a,b,c,d);e=c;f=d.dH();g=d.J();while(true){if(b>=g)return (-1);h=e.eA(a.hc,b);if(h<0)return (-1);if(h>f&&BX(e.f(h-1|0))){b=h+1|0;continue;}i=a.k;b=h+1|0;if(i.e(b,c,d)>=0)break;}return h;}
function AW$(a,b,c,d,e){var f,g,h;if(!(d instanceof BL))return F2(a,b,c,d,e);f=e.dH();g=d;a:{while(true){if(c<b)return (-1);h=g.mw(a.hc,c);if(h<0)break a;if(h<b)break a;if(h>f&&BX(g.f(h-1|0))){c=h+(-2)|0;continue;}if(a.k.e(h+1|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function APH(a){return (((I()).a(B(103))).U(a.hc)).b();}
function ACV(a,b){if(b instanceof Du)return 0;if(b instanceof Ds)return 0;if(b instanceof C1)return 0;if(b instanceof Dq)return 0;if(b instanceof I7)return 0;if(!(b instanceof I2))return 1;return b.hc!=a.hc?0:1;}
function APO(a,b){return 1;}
var ABM=D();
var Mc=D(0);
function Wq(){var a=this;C.call(a);a.ub=null;a.r$=null;a.r9=null;}
function A9Q(){var a=new Wq();ARs(a);return a;}
function ARs(a){J(a);a.r$=S();a.r9=S();}
function AYK(a,b,c){a.ub=b;c.C4(a);}
function LE(a,b,c,d){if(c.x1())b.uf(d);else if(b.LX())(d.M(c)).kF(b);else (b.uf(d)).fs(c);return d;}
function AWP(a,b,c){var d,e,f,g,h,i;d=b.c9;GA();e=Cp(d,Bg5)&&(BB(b.c9,Bg5)).EU?1:0;f=Cp(c.c9,Bg5)&&(BB(c.c9,Bg5)).EU?1:0;if(e!=f)return !e?(-1):1;LE(a,b.dx,b.cP.fS,a.r$);LE(a,c.dx,c.cP.fS,a.r9);g=(1000.0*a.ub.co.By(a.r$)|0)-(1000.0*a.ub.co.By(a.r9)|0)|0;h=B5(g,0.0);i=h<0?(-1):h<=0?0:1;if(e)i= -i|0;return i;}
function A5B(a,b,c){return a.Ie(b,c);}
var ABg=D(D3);
function AX3(a,b){var c=new ABg();AF_(c,a,b);return c;}
function AF_(a,b,c){Sf(a,b,c);}
function Ep(){var a=this;CE.call(a);a.fP=null;a.d9=0;}
function BiC(a,b,c,d,e){var f=new Ep();Ie(f,a,b,c,d,e);return f;}
function Ie(a,b,c,d,e,f){E_(a,c,d,e);a.fP=b;a.d9=f;}
function A9l(a,b,c,d){var e,f,g,h;e=d.yT(a.d9);if(!a.Y.bb(d))return a.k.e(b,c,d);if(e>=a.fP.iz())return a.k.e(b,c,d);f=a.d9;g=e+1|0;d.fE(f,g);h=a.Y.e(b,c,d);if(h>=0){d.fE(a.d9,0);return h;}f=a.d9;g=g+(-1)|0;d.fE(f,g);if(g>=a.fP.i8())return a.k.e(b,c,d);d.fE(a.d9,0);return (-1);}
function AQX(a){return a.fP.b();}
var K$=D(Ep);
function BiD(a,b,c,d,e){var f=new K$();RK(f,a,b,c,d,e);return f;}
function RK(a,b,c,d,e,f){Ie(a,b,c,d,e,f);}
function AT6(a,b,c,d){var e,f;e=d.yT(a.d9);if(!a.Y.bb(d))return a.k.e(b,c,d);if(e>=a.fP.iz()){d.fE(a.d9,0);return a.k.e(b,c,d);}if(e<a.fP.i8()){d.fE(a.d9,e+1|0);f=a.Y.e(b,c,d);}else{f=a.k.e(b,c,d);if(f>=0){d.fE(a.d9,0);return f;}d.fE(a.d9,e+1|0);f=a.Y.e(b,c,d);}return f;}
var Uh=D();
function RH(b){a:{switch(b){case 8:break;case 9:return 61;case 10:case 11:case 12:case 14:case 15:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 41:case 42:case 43:case 44:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 93:case 94:case 95:case 108:case 124:case 125:case 126:case 127:case 128:case 129:case 130:case 131:case 132:case 133:case 134:case 135:case 136:case 137:case 138:case 139:case 140:case 141:case 142:case 143:case 146:case 147:case 148:case 149:case 150:case 151:case 152:case 153:case 154:case 155:case 156:case 157:case 158:case 159:case 160:case 161:case 162:case 163:case 164:case 165:case 166:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 177:case 178:case 179:case 180:case 181:case 182:case 183:case 184:case 185:case 193:case 194:case 195:case 196:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 207:case 208:case 209:case 210:case 211:case 212:case 213:case 214:case 215:case 216:case 217:case 218:break a;case 13:return 66;case 16:return 59;case 17:return 129;case 18:return 57;case 19:return 0;case 20:return 0;case 27:return 111;case 32:return 62;case 33:return 92;case 34:return 93;case 35:return 123;case 36:return 3;case 37:return 21;case 38:return 19;case 39:return 22;case 40:return 20;case 45:return 124;case 46:return 112;case 48:return 7;case 49:return 8;case 50:return 9;case 51:return 10;case 52:return 11;case 53:return 12;case 54:return 13;case 55:return 14;case 56:return 15;case 57:return 16;case 65:return 29;case 66:return 30;case 67:return 31;case 68:return 32;case 69:return 33;case 70:return 34;case 71:return 35;case 72:return 36;case 73:return 37;case 74:return 38;case 75:return 39;case 76:return 40;case 77:return 41;case 78:return 42;case 79:return 43;case 80:return 44;case 81:return 45;case 82:return 46;case 83:return 47;case 84:return 48;case 85:return 49;case 86:return 50;case 87:return 51;case 88:return 52;case 89:return 53;case 90:return 54;case 91:return 0;case 92:return 0;case 96:return 144;case 97:return 145;case 98:return 146;case 99:return 147;case 100:return 148;case 101:return 149;case 102:return 150;case 103:return 151;case 104:return 152;case 105:return 153;case 106:return 0;case 107:return 81;case 109:return 69;case 110:return 56;case 111:return 0;case 112:return 131;case 113:return 132;case 114:return 133;case 115:return 134;case 116:return 135;case 117:return 136;case 118:return 137;case 119:return 138;case 120:return 139;case 121:return 140;case 122:return 141;case 123:return 142;case 144:return 78;case 145:return 0;case 186:return 74;case 187:return 70;case 188:return 55;case 189:return 69;case 190:return 56;case 191:return 76;case 192:return 0;case 219:return 71;case 220:return 73;case 221:return 72;case 222:return 75;default:break a;}return 67;}return 0;}
function Jb(b){if(b==1)return 0;if(b==2)return 1;if(b!=4)return 0;return 2;}
var Ml=D(0);
var LX=D(0);
function Ip(){IZ.call(this);this.gG=0;}
function Yd(a){TF(a);}
function AGY(a){return Ba4(a);}
var K2=D(0);
function Vq(){var a=this;Ip.call(a);a.cO=null;a.c4=0;}
function R1(){var a=new Vq();AHn(a);return a;}
function BiE(a){var b=new Vq();Ok(b,a);return b;}
function AHn(a){Ok(a,10);}
function Ok(a,b){Yd(a);a.cO=X(C,b);}
function AT8(a,b){var c;if(a.cO.data.length<b){c=a.cO.data.length>=1073741823?2147483647:Bf(b,Bf(a.cO.data.length*2|0,5));a.cO=IU(a.cO,c);}}
function A4X(a,b){Jt(a,b);return a.cO.data[b];}
function A3D(a){return a.c4;}
function AQT(a,b){var c,d;a.gM(a.c4+1|0);c=a.cO.data;d=a.c4;a.c4=d+1|0;c[d]=b;a.gG=a.gG+1|0;return 1;}
function AZ4(a,b,c){var d;PN(a,b);a.gM(a.c4+1|0);d=a.c4;while(d>b){a.cO.data[d]=a.cO.data[d-1|0];d=d+(-1)|0;}a.cO.data[b]=c;a.c4=a.c4+1|0;a.gG=a.gG+1|0;}
function AOE(a,b){var c,d,e,f;Jt(a,b);c=a.cO.data[b];a.c4=a.c4-1|0;while(b<a.c4){d=a.cO.data;e=a.cO.data;f=b+1|0;d[b]=e[f];b=f;}a.cO.data[a.c4]=null;a.gG=a.gG+1|0;return c;}
function Jt(a,b){if(b>=0&&b<a.c4)return;G(C6());}
function PN(a,b){if(b>=0&&b<=a.c4)return;G(C6());}
var XK=D(Bm);
function AOQ(){var a=new XK();A1k(a);return a;}
function A1k(a){Ct(a);}
function Ed(){CC.call(this);this.f8=null;}
function Bbw(a,b,c,d){var e=new Ed();KE(e,a,b,c,d);return e;}
function KE(a,b,c,d,e){E0(a,c,d,e);a.f8=b;}
function AUD(a,b,c,d){var e,f,g,h;e=a.f8.i8();f=a.f8.iz();g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.bu.cf()|0)>d.J())break a;h=a.bu.bI(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.k.e(b,c,d);if(h>=0)break;b=b-a.bu.cf()|0;g=g+(-1)|0;}return h;}if((b+a.bu.cf()|0)>d.J()){d.d2=1;return (-1);}h=a.bu.bI(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function AVe(a){return a.f8.b();}
function C1(){var a=this;BC.call(a);a.dZ=null;a.rn=0;}
function A0m(a){var b=new C1();Zu(b,a);return b;}
function Zu(a,b){CM(a);a.dZ=b.l6();a.rn=b.bD;}
function AXG(a,b,c,d){var e,f,g,h,i,j;e=d.J();if(b<e){f=b+1|0;g=c.f(b);if(a.p(g)){h=a.k.e(f,c,d);if(h>0)return h;}if(f<e){i=f+1|0;j=c.f(f);if(Go(g,j)&&a.p(Dd(g,j)))return a.k.e(i,c,d);}}return (-1);}
function A7$(a){return ((((I()).a(B(57))).a(!a.rn?B(58):B(59))).a(a.dZ.b())).b();}
function AHo(a,b){return a.dZ.p(b);}
function ADA(a,b){if(b instanceof Dq)return IJ(a.dZ,b.sx());if(b instanceof Du)return IJ(a.dZ,b.pe());if(b instanceof C1)return GF(a.dZ,b.dZ);if(!(b instanceof Ds))return 1;return GF(a.dZ,b.us());}
function AJP(a){return a.dZ;}
function A59(a,b){a.k=b;}
function AG3(a,b){return 1;}
var XG=D(FJ);
function A$o(a,b,c){var d=new XG();ANr(d,a,b,c);return d;}
function ANr(a,b,c,d){LW(a,b,c,d);}
function AEI(a,b,c,d){var e;if(!a.Y.bb(d))return a.k.e(b,c,d);e=a.k.e(b,c,d);if(e<0)e=a.Y.e(b,c,d);return e;}
var PO=D();
function AGD(b,c){var d,e,f;a:{d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}e=b>>>6;f=d|e&8;f=f|b<<2&16;e=f|e&32;e=e|b>>>8&64;e=e|b>>>5&128;e=e|b&256;e=e|b<<8&512;e=e|b<<10&1024;e=e|b<<1&2048;return e;}
function BL(){var a=this;C.call(a);a.S=null;a.mB=0;}
var BiF=null;function Ek(){Ek=N(BL);AQo();}
function LR(a){var b=new BL();Ii(b,a);return b;}
function FT(a,b,c){var d=new BL();N$(d,a,b,c);return d;}
function BiG(a,b,c,d){var e=new BL();JJ(e,a,b,c,d);return e;}
function BiH(a,b,c,d){var e=new BL();Kr(e,a,b,c,d);return e;}
function A_b(a,b){var c=new BL();S0(c,a,b);return c;}
function Bdl(a,b,c){var d=new BL();Oc(d,a,b,c);return d;}
function Ii(a,b){var c,d,e;Ek();c=b.data;J(a);d=c.length;a.S=BV(d);e=0;while(e<d){a.S.data[e]=c[e];e=e+1|0;}}
function N$(a,b,c,d){var e,f;Ek();J(a);a.S=BV(d);e=0;while(e<d){f=b.data;a.S.data[e]=f[e+c|0];e=e+1|0;}}
function JJ(a,b,c,d,e){Ek();Kr(a,b,c,d,Or(e.b()));}
function Kr(a,b,c,d,e){Ek();J(a);Sr(a,b,c,d,e);}
function S0(a,b,c){Ek();JJ(a,b,0,b.data.length,c);}
function Oc(a,b,c,d){var e,f,g,h,i,j,k;Ek();J(a);a.S=BV(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.S.data;j=e+1|0;g[e]=i&65535;}else{g=a.S.data;k=e+1|0;g[e]=Fw(i);g=a.S.data;j=k+1|0;g[k]=Fd(i);}f=f+1|0;c=h;e=j;}if(e<a.S.data.length)a.S=JF(a.S,e);}
function Sr(a,b,c,d,e){var f;f=YM(e,Yf(b,c,d));if(VU(f)&&!B4(f)&&BE(f)==CS(f))a.S=Nd(f);else{a.S=BV(Ba(f));f.Lw(a.S);}}
function AUz(a,b){if(b>=0&&b<a.S.data.length)return a.S.data[b];G(J2());}
function AYv(a){return a.S.data.length;}
function A0d(a){return a.S.data.length?0:1;}
function AGO(a,b,c,d,e){var f,g,h;if(b>=0&&b<=c&&c<=a.i()&&e>=0){f=d.data;if((e+(c-b|0)|0)<=f.length){while(b<c){g=e+1|0;h=b+1|0;f[e]=a.f(b);e=g;b=h;}return;}}G(C6());}
function A7v(a,b){var c,d,e,f,g;if(a===b)return 0;c=Bq(a.i(),b.i());d=0;while(true){if(d>=c)return a.i()-b.i()|0;e=a.f(d);f=b.f(d);g=e-f|0;if(g)break;d=d+1|0;}return g;}
function A34(a,b,c){var d,e,f;if((c+b.i()|0)>a.i())return 0;d=0;while(d<b.i()){e=b.f(d);f=c+1|0;if(e!=a.f(c))return 0;d=d+1|0;c=f;}return 1;}
function A0i(a,b){if(a===b)return 1;return a.zl(b,0);}
function AXE(a,b){var c,d,e,f;if(a===b)return 1;if(b.i()>a.i())return 0;c=0;d=a.i()-b.i()|0;while(d<a.i()){e=a.f(d);f=c+1|0;if(e!=b.f(c))return 0;d=d+1|0;c=f;}return 1;}
function A21(a,b,c){var d,e,f,g;d=Bf(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.S.data.length)return (-1);if(a.S.data[d]==e)break;d=d+1|0;}return d;}f=Fw(b);g=Fd(b);while(true){if(d>=(a.S.data.length-1|0))return (-1);if(a.S.data[d]==f&&a.S.data[d+1|0]==g)break;d=d+1|0;}return d;}
function AXD(a,b){return a.eA(b,0);}
function AUH(a,b,c){var d,e,f,g,h,i;d=Bq(c,a.i()-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.S.data[d]==e)break;d=d+(-1)|0;}return d;}f=Fw(b);g=Fd(b);while(true){if(d<1)return (-1);if(a.S.data[d]==g){h=a.S.data;i=d-1|0;if(h[i]==f)break;}d=d+(-1)|0;}return i;}
function AI9(a,b){return a.mw(b,a.i()-1|0);}
function AXk(a,b,c){var d,e,f;d=Bf(0,c);e=a.i()-b.i()|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=b.i())break a;if(a.f(d+f|0)!=b.f(f))break;f=f+1|0;}d=d+1|0;}return d;}
function A3y(a,b){return a.ud(b,0);}
function AGG(a,b,c){var d,e;d=Bq(c,a.i()-b.i()|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.i())break a;if(a.f(d+e|0)!=b.f(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AIM(a,b){return a.zN(b,a.i());}
function ACK(a,b,c){if(b>c)G(C6());return FT(a.S,b,c-b|0);}
function AJa(a,b){return a.cd(b,a.i());}
function AGW(a,b,c){return a.cd(b,c);}
function ASH(a,b){var c,d,e;c=a.i()-b.i()|0;d=0;while(d<=c){e=0;while(true){if(e>=b.i())return 1;if(a.f(d+e|0)!=b.f(e))break;e=e+1|0;}d=d+1|0;}return 0;}
function A4W(a,b,c){var d,e,f,g;d=I();e=a.i()-b.i()|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=b.i()){d.dC(c);f=f+(b.i()-1|0)|0;break a;}if(a.f(f+g|0)!=b.f(g))break;g=g+1|0;}d.U(a.f(f));}f=f+1|0;}d.dC(a.ef(f));return d.b();}
function A0D(a){var b,c;b=0;c=a.i()-1|0;a:{while(b<=c){if(a.f(b)>32)break a;b=b+1|0;}}while(b<=c&&a.f(c)<=32){c=c+(-1)|0;}return a.cd(b,c+1|0);}
function AEJ(a){return a;}
function A0h(a){var b,c,d;b=BV(a.S.data.length);c=0;while(true){d=b.data;if(c>=d.length)break;d[c]=a.S.data[c];c=c+1|0;}return b;}
function Yu(b){var c,d;Ek();c=new BL;d=BV(1);d.data[0]=b;Ii(c,d);return c;}
function I5(b){Ek();return ((I()).j(b)).b();}
function AQP(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BL))return 0;c=b;if(c.i()!=a.i())return 0;d=0;while(d<c.i()){if(a.f(d)!=c.f(d))return 0;d=d+1|0;}return 1;}
function A7Q(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(a.i()!=b.i())return 0;c=0;while(c<a.i()){if(Dl(a.f(c))!=Dl(b.f(c)))return 0;c=c+1|0;}return 1;}
function AL9(a,b){return a.Aw(Or(b.b()));}
function AL5(a){Hk();return a.Aw(Bhz);}
function A23(a,b){var c,d;c=TY(b,KQ(a.S));if(c.BZ()&&!B4(c)&&BE(c)==CS(c))return Hu(c);d=Ce(Ba(c));c.H9(d);return d;}
function A2$(a){var b,c,d,e;a:{if(!a.mB){b=a.S.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.mB=(31*a.mB|0)+e|0;d=d+1|0;}}}return a.mB;}
function A2o(a){var b,c,d,e,f,g,h,i;if(a.bO())return a;b=Bc(a.S.data.length);c=0;d=0;while(d<a.S.data.length){a:{if(d!=(a.S.data.length-1|0)&&BX(a.S.data[d])){e=a.S.data;f=d+1|0;g=e[f];if(BG(g)){h=b.data;i=c+1|0;h[c]=El(Dd(a.S.data[d],a.S.data[f]));d=f;break a;}}h=b.data;i=c+1|0;h[c]=Dw(a.S.data[d]);}d=d+1|0;c=i;}return Bdl(b,0,c);}
function A0T(a,b){return U8(Gw(b),a.b());}
function AQI(a,b,c){return L2(Gw(b),a.b(),c);}
function AG6(a,b,c){return ABn(Gz(Gw(b),a.b()),c);}
function AQo(){BiF=BbP();}
var MP=D(DO);
var BiI=null;function A1p(){A1p=N(MP);ASG();}
function Bbm(){var a=new MP();Sj(a);return a;}
function Sj(a){A1p();GT(a);}
function A06(a,b){ARY(b);}
function ASG(){BiI=Bbm();}
var Lo=D();
var BiJ=null;function BbZ(){BbZ=N(Lo);AOP();}
function Uz(){BbZ();return BiJ;}
function AOP(){var b,c,d,e,f;BiJ=C3();b=X(CX,6);c=b.data;Bby();c[0]=Bin;c[1]=Bio;c[2]=Bip;c[3]=Biq;c[4]=Bir;c[5]=Bis;d=c.length;e=0;while(e<d){f=c[e];BiJ.x(Y_(f),f);e=e+1|0;}}
var D6=D(0);
var Mo=D(0);
function XH(){var a=this;Ft.call(a);a.zq=0;a.uo=0;a.s0=null;}
function Bco(a,b,c,d,e,f){var g=new XH();AIB(g,a,b,c,d,e,f);return g;}
function AIB(a,b,c,d,e,f,g){Mf(a,c,e,f);a.uo=b;a.zq=g;a.s0=d;}
function A27(a,b){return a.s0.data[b+a.uo|0];}
function A1n(a,b,c){a.s0.data[b+a.uo|0]=c;}
function AB_(a){return a.zq;}
var PP=D(Dj);
function A_Y(a){var b=new PP();APj(b,a);return b;}
function APj(a,b){Gu(a,b,2.0,4.0);}
function AKj(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(h.ec(2))break a;Bk();i=Bei;break a;}k=e.data;n=f+1|0;k[f]=(192|l>>6)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else if(!Ji(l)){if((f+3|0)>g){j=j+(-1)|0;if(h.ec(3))break a;Bk();i=Bei;break a;}k=e.data;o=f+1|0;k[f]=(224|l>>12)<<24>>24;n=o+1|0;k[o]=(128|l>>6&63)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else{if
(!BX(l)){i=BU(1);break a;}if(j>=d){if(h.tp())break a;Bk();i=Bej;break a;}n=j+1|0;p=k[j];if(!BG(p)){j=n+(-2)|0;i=BU(1);break a;}if((f+4|0)>g){j=n+(-2)|0;if(h.ec(4))break a;Bk();i=Bei;break a;}k=e.data;q=Dd(l,p);j=f+1|0;k[f]=(240|q>>18)<<24>>24;o=j+1|0;k[j]=(128|q>>12&63)<<24>>24;j=o+1|0;k[o]=(128|q>>6&63)<<24>>24;m=j+1|0;k[j]=(128|q&63)<<24>>24;j=n;}c=j;f=m;}j=c;}h.eg(j);h.dQ(f);return i;}
var IS=D();
function W_(a){J(a);}
var HF=D(0);
function Fh(){var a=this;IS.call(a);a.sL=0;a.dV=null;a.CN=0.0;a.AW=0;a.lg=0;a.l1=0;a.E_=0;}
var BiK=null;var BiL=null;function S1(){S1=N(Fh);A8H();}
function BiM(){var a=new Fh();Ht(a);return a;}
function BiN(a){var b=new Fh();Md(b,a);return b;}
function AAm(b,c,d){S1();return Bcy(b,c);}
function Ht(a){S1();Md(a,11);}
function Md(a,b){S1();W_(a);a.l1=(-1);if(b<0)G(CH());a.sL=0;if(!b)b=1;a.dV=N8(a,b);a.lg=a.dV.data.length;a.CN=0.75;L5(a);}
function N8(a,b){return X(Mp,b);}
function L5(a){a.AW=a.dV.data.length*a.CN|0;}
function ANC(a,b,c){var d,e,f,g,h,i,j;En(a);try{if(b!==null&&c!==null){d=b.by();e=d&2147483647;f=e%a.dV.data.length|0;g=a.dV.data[f];while(g!==null&&!g.LY(b,d)){g=g.pp;}if(g!==null){h=g.g0;g.g0=c;return h;}a.E_=a.E_+1|0;i=a.sL+1|0;a.sL=i;if(i>a.AW){a.oH();f=e%a.dV.data.length|0;}if(f<a.lg)a.lg=f;if(f>a.l1)a.l1=f;j=AAm(b,c,d);j.pp=a.dV.data[f];a.dV.data[f]=j;return null;}G(It());}finally{Cc(a);}}
function ALc(a){var b,c,d,e,f,g,h,i,j;b=(a.dV.data.length<<1)+1|0;if(!b)b=1;c=(-1);d=N8(a,b);e=a.l1+1|0;f=b;while(true){e=e+(-1)|0;if(e<a.lg)break;g=a.dV.data[e];while(g!==null){h=(g.M5()&2147483647)%b|0;if(h<f)f=h;if(h>c)c=h;i=d.data;j=g.pp;g.pp=i[h];i[h]=g;g=j;}}a.lg=f;a.l1=c;a.dV=d;L5(a);}
function A8H(){BiK=BcJ();BiL=A$V();}
function Sw(){Fh.call(this);this.Iz=null;}
function A$4(){var a=new Sw();AM$(a);return a;}
function A$8(a){var b=new Sw();AJm(b,a);return b;}
function AM$(a){Ht(a);}
function AJm(a,b){Ht(a);a.Iz=b;}
function AAS(){var a=this;Fp.call(a);a.Cx=0;a.u1=0;a.tP=null;}
function A$0(a,b,c,d,e,f){var g=new AAS();AV_(g,a,b,c,d,e,f);return g;}
function AV_(a,b,c,d,e,f,g){KH(a,c,e,f);a.u1=b;a.Cx=g;a.tP=d;}
function ANJ(a,b){return a.tP.data[b+a.u1|0];}
function AMS(a,b,c){a.tP.data[b+a.u1|0]=c;}
function A3w(a){return a.Cx;}
var VC=D(Bt);
function A98(){var a=new VC();A85(a);return a;}
function A85(a){Cl(a);}
function AJ7(a,b,c,d){return b;}
function A3z(a){return B(448);}
function A3I(a,b){return 0;}
function NM(){V.call(this);this.is=null;}
var BiO=null;function AYZ(){AYZ=N(NM);ASJ();}
function BbU(a){var b=new NM();XW(b,a);return b;}
function XW(a,b){AYZ();BK(a);a.is=B9(b*16|0);}
function AS0(a,b,c,d,e){var f,g;f=0;while(f<a.is.data.length){g=f/16|0;if(d.dI!==null&&g<d.dI.data.length&&d.dI.data[g]!==null)Y(d.dI.data[g].c,0,a.is,f,16);else{AYZ();Y(BiO.c,0,a.is,f,16);}f=f+16|0;}b.bi.Ov(B0(b,c),a.is,0,a.is.data.length);}
function ASJ(){BiO=BO();}
var Jx=D(Ep);
function BiP(a,b,c,d,e){var f=new Jx();RO(f,a,b,c,d,e);return f;}
function RO(a,b,c,d,e,f){Ie(a,b,c,d,e,f);Jn();c.Q(Bfx);}
function AI6(a,b,c,d){var e,f,g;e=0;f=a.fP.iz();a:{while(true){g=a.Y.e(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.fP.i8())return (-1);return a.k.e(b,c,d);}
function CU(){Bw.call(this);this.CB=0;}
var Bho=null;var BiQ=null;var BiR=null;var BiS=null;var BiT=null;var BiU=null;var BiV=null;var BiW=null;function AFl(){AFl=N(CU);AEn();}
function E3(a,b,c){var d=new CU();Ob(d,a,b,c);return d;}
function Ob(a,b,c,d){AFl();Cs(a,b,c);a.CB=d;}
function NC(a){return a.CB;}
function AEn(){Bho=E3(B(449),0,9728);BiQ=E3(B(450),1,9729);BiR=E3(B(451),2,9987);BiS=E3(B(452),3,9984);BiT=E3(B(453),4,9985);BiU=E3(B(454),5,9986);BiV=E3(B(455),6,9987);BiW=H(CU,[Bho,BiQ,BiR,BiS,BiT,BiU,BiV]);}
var LF=D(CX);
var Bhz=null;function Hk(){Hk=N(LF);AGT();}
function Bak(){var a=new LF();TR(a);return a;}
function TR(a){Hk();Gt(a,B(384),X(BL,0));}
function AOZ(a){return A_M(a);}
function ARq(a){return A_Y(a);}
function AGT(){Bhz=Bak();}
var MD=D(0);
function UH(){Bt.call(this);this.h2=0;}
function A9M(a){var b=new UH();A9p(b,a);return b;}
function A9p(a,b){Cl(a);a.h2=b;}
function AZP(a,b,c,d){var e,f,g;e=!d.js()?c.i()-b|0:d.dH()-b|0;if(!e){d.bx(a.h2,0);return a.k.e(b,c,d);}if(e<2){f=c.f(b);g=97;}else{f=c.f(b);g=c.f(b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:d.bx(a.h2,0);return a.k.e(b,c,d);case 13:if(g!=10){d.bx(a.h2,0);return a.k.e(b,c,d);}d.bx(a.h2,0);return a.k.e(b,c,d);default:}return (-1);}
function AFn(a,b){var c;c=!b.ep(a.h2)?0:1;b.bx(a.h2,(-1));return c;}
function AHN(a){return B(456);}
function R9(){C.call(this);this.Pf=null;}
function A9Y(a){var b=new R9();A3S(b,a);return b;}
function A3S(a,b){J(a);a.Pf=b;}
function EK(){C.call(this);this.G7=null;}
function KW(a){AA5(a,PS());}
function AA5(a,b){J(a);a.G7=b;}
function RE(){var a=this;EK.call(a);a.mr=null;a.ju=null;a.fC=0;a.m3=0;a.ua=0;a.yQ=0;}
function A_v(a,b){var c=new RE();AXf(c,a,b);return c;}
function AXf(a,b,c){KW(a);a.yQ=(-1);if(c<0)G(CH());a.mr=b;a.ju=BV(Bf(64,c));}
function AKp(a){NF(a);a.mr.fG();a.mr=null;}
function ASg(a){var b,c,d,e;NF(a);if(a.ua&&a.fC>=a.m3)return null;b=I();a:{while(true){if(a.fC>=a.m3&&!KN(a,0))break a;c=a.ju.data;d=a.fC;a.fC=d+1|0;e=c[d];if(e==10)break;if(e==13){if(a.fC>=a.m3&&!KN(a,0))break a;if(a.ju.data[a.fC]!=10)break a;a.fC=a.fC+1|0;break a;}b.U(e);}}return b.b();}
function KN(a,b){var c;if(a.ua)return 0;a:{while(true){if(b>=a.ju.data.length)break a;c=a.mr.IV(a.ju,b,a.ju.data.length-b|0);if(c==(-1)){a.ua=1;break a;}if(!c)break;b=b+c|0;}}a.m3=b;a.fC=0;a.yQ=(-1);return 1;}
function NF(a){if(a.mr!==null)return;G(A_n());}
function V9(){Q.call(this);this.Nz=null;}
function Bck(a){var b=new V9();A1q(b,a);return b;}
function A1q(a,b){a.Nz=b;Be(a);}
function A7o(a,b){return ABH(b);}
var IL=D(Di);
function ARp(){var a=new IL();AZ0(a);return a;}
function AZ0(a){Jc(a);}
var Xy=D();
var YZ=D(FC);
function Ba9(a,b,c,d,e,f){var g=new YZ();AXu(g,a,b,c,d,e,f);return g;}
function AXu(a,b,c,d,e,f,g){Jw(a,b,c,d,e,f,g);}
function APD(a,b){var c,d,e;c=a.cr.A.data;d=a.cj;e=b*4|0;return (c[d+e|0]&255)<<24|(a.cr.A.data[(a.cj+e|0)+1|0]&255)<<16|(a.cr.A.data[(a.cj+e|0)+2|0]&255)<<8|a.cr.A.data[(a.cj+e|0)+3|0]&255;}
function ADO(a,b,c){var d,e,f;d=a.cr.A.data;e=a.cj;f=b*4|0;d[e+f|0]=c>>24<<24>>24;a.cr.A.data[(a.cj+f|0)+1|0]=c>>16<<24>>24;a.cr.A.data[(a.cj+f|0)+2|0]=c>>8<<24>>24;a.cr.A.data[(a.cj+f|0)+3|0]=c<<24>>24;}
var IN=D(BR);
function ZT(a,b){CV(a,b);}
var Rv=D(Bm);
function AOe(a){var b=new Rv();A58(b,a);return b;}
function It(){var a=new Rv();AE8(a);return a;}
function A58(a,b){EB(a,b);}
function AE8(a){Ct(a);}
function WX(){Q.call(this);this.Ha=null;}
function Bah(a){var b=new WX();AHF(b,a);return b;}
function AHF(a,b){a.Ha=b;Be(a);}
function A4x(a,b){return Mq(b);}
function PD(){var a=this;C.call(a);a.dY=null;a.yb=null;a.cz=null;a.cR=0;}
function A$U(){var a=new PD();ASt(a);return a;}
function ASt(a){J(a);a.cz=Dn();}
var X5=D();
function A6u(b){return Math.sin(b);}
function ADo(b){return Math.cos(b);}
function APk(b){return Math.tan(b);}
function FL(b){return Math.sqrt(b);}
function AW8(b){return Math.ceil(b);}
function Dc(b){return b+AJ$(b)*0.5|0;}
function Bq(b,c){if(b<c)c=b;return c;}
function Bf(b,c){if(b>c)c=b;return c;}
function Tn(b,c){if(Ka(b,c))c=b;return c;}
function AVm(b,c){if(Hc(b,c))c=b;return c;}
function Jd(b,c){if(b<c)c=b;return c;}
function Eg(b,c){if(b>c)c=b;return c;}
function UL(b){if(b<=0)b= -b|0;return b;}
function CD(b){if(b<=0.0)b= -b;return b;}
function AJ$(b){var c;c=B5(b,0.0);if(c>0)b=1.0;else if(c<0)b=(-1.0);return b;}
function V$(){var a=this;C.call(a);a.ek=null;a.fa=null;a.dr=null;a.vy=0;a.vY=0;a.KW=0;a.sT=0;a.kM=0;a.oI=0;}
function Bdt(a,b,c){var d=new V$();ALI(d,a,b,c);return d;}
function ALI(a,b,c,d){J(a);a.kM=0;a.oI=0;a.KW=b;a.ek=d;a.dr=Mk(Cb(a.ek.cN,c));a.vY=1;a.sT=!b?35048:35044;a.fa=a.dr.su();a.vy=ABy(a);a.fa.c$();a.dr.c$();}
function ABy(a){var b;b=BfD.iW();BfD.c7(34962,b);BfD.fu(34962,CS(a.dr),null,a.sT);BfD.c7(34962,0);return b;}
function AVX(a){return a.ek;}
function AIt(a){return CS(a.dr)/a.ek.cN|0;}
function Y8(a){if(a.oI){BfD.qa(34962,0,BE(a.dr),a.dr);a.kM=0;}}
function AEa(a,b,c,d){a.kM=1;if(a.vY){NG(b,a.dr,d,c);a.fa.cX(0);a.fa.ck(d);}else{a.fa.cZ();a.fa.wc(b,c,d);a.fa.c$();a.dr.cX(0);a.dr.ck(BE(a.fa)<<2);}Y8(a);}
function AMh(a,b,c){var d,e,f,g,h,i;d=BfD;d.c7(34962,a.vy);if(a.kM){a.dr.ck(BE(a.fa)*4|0);d.fu(34962,BE(a.dr),a.dr,a.sT);a.kM=0;}a:{e=CR(a.ek);if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data;h=Cy(a.ek,f);i=g[f];if(i>=0){b.lI(i);b.h3(i,h.cH,h.hH,h.ia,a.ek.cN,h.cS);}f=f+1|0;}}f=0;while(f<e){h=Cy(a.ek,f);i=b.lN(h.en);if(i>=0){b.lI(i);b.h3(i,h.cH,h.hH,h.ia,a.ek.cN,h.cS);}f=f+1|0;}}a.oI=1;}
function AG4(a,b,c){var d,e,f,g;a:{d=BfD;e=CR(a.ek);if(c===null){f=0;while(f<e){b.Bi((Cy(a.ek,f)).en);f=f+1|0;}}else{f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0)b.tu(g);f=f+1|0;}}}d.c7(34962,0);a.oI=0;}
var I6=D(BR);
function Pa(a,b){CV(a,b);}
var Od=D();
function A7W(){var b;b=AO2();return b;}
function AO2(){var userAgent=navigator.userAgent.toLowerCase();return {firefox:userAgent.indexOf('firefox')!= -1,chrome:userAgent.indexOf('chrome')!= -1,safari:userAgent.indexOf('safari')!= -1,opera:userAgent.indexOf('opera')!= -1,IE:userAgent.indexOf('msie')!= -1,macOS:userAgent.indexOf('mac')!= -1,linux:userAgent.indexOf('linux')!= -1,windows:userAgent.indexOf('win')!= -1};}
var Qe=D(T);
function A94(){var a=new Qe();A48(a);return a;}
function A48(a){Bo(a);}
function AMq(a){var b;b=A_e(a);b.bf=1;return b;}
function NK(){var a=this;C0.call(a);a.yp=null;a.nw=null;a.kz=0;}
function BP(a,b,c){var d=new NK();U9(d,a,b,c);return d;}
function U9(a,b,c,d){FQ(a);a.kz=(-1);a.yp=b;a.nw=c;a.kz=d;}
function A8c(a){var b,c;b=B(103);if(a.kz>=1){c=BV(a.kz);ANZ(c,32);b=LR(c);}return (((I()).a(a.yp)).a(a.nw!==null&&a.nw.i()?((((((I()).j(a.kz)).a(B(442))).a(a.nw)).a(B(442))).a(b)).b():B(103))).b();}
function Py(){D1.call(this);this.oo=null;}
function BdA(a,b,c){var d=new Py();ARv(d,a,b,c);return d;}
function ARv(a,b,c,d){LL(a,c,d);a.oo=PM(a,b);if(a.oo!==null)return;G(PJ((((I()).a(B(457))).a(b.u())).b()));}
function PM(a,b){var c,d,$$je;a:{try{c=AMo(b,null);}catch($$e){$$je=R($$e);if($$je instanceof B2){break a;}else{throw $$e;}}return c;}b:{try{d=AXw(b,null);Sy(d,1);}catch($$e){$$je=R($$e);if($$je instanceof L$){break b;}else{throw $$e;}}return d;}return null;}
function AZI(a){var b,c,$$je;a:{try{b=ABS(a.oo,null);}catch($$e){$$je=R($$e);if($$je instanceof B2){c=$$je;break a;}else{throw $$e;}}return b;}G(I1((((I()).a(B(458))).a((Fz(a.oo)).u())).b(),c));}
function Hs(){var a=this;C.call(a);a.pA=null;a.hM=0;a.g_=0;a.gQ=0;a.b6=null;a.fS=null;a.gP=null;a.iL=0.0;}
var BiX=null;function A2f(){A2f=N(Hs);AJ2();}
function A6L(){var a=new Hs();ZF(a);return a;}
function Bde(a){var b=new Hs();XV(b,a);return b;}
function ZF(a){A2f();J(a);a.fS=S();a.gP=S();a.iL=(-1.0);}
function XV(a,b){A2f();J(a);a.fS=S();a.gP=S();a.iL=(-1.0);a.B5(b);}
function A18(a,b){a.pA=b.pA;a.b6=b.b6;a.g_=b.g_;a.gQ=b.gQ;a.hM=b.hM;a.fS.M(b.fS);a.gP.M(b.gP);a.iL=b.iL;return a;}
function ANl(a,b,c,d,e,f){a.pA=b;a.b6=c;a.g_=d;a.gQ=e;a.hM=f;a.fS.I(0.0,0.0,0.0);a.gP.I(0.0,0.0,0.0);a.iL=(-1.0);return a;}
function AHP(a,b){var c;a:{b:{if(b!==a){if(b===null)break b;if(b.b6!==a.b6)break b;if(b.hM!=a.hM)break b;if(b.g_!=a.g_)break b;if(b.gQ!=a.gQ)break b;}c=1;break a;}c=0;}return c;}
function ADT(a,b){if(b===null)return 0;if(b===a)return 1;if(!(b instanceof Hs))return 0;return a.GV(b);}
function ATX(a,b,c){a.b6.CM(b,a.hM,a.g_,a.gQ,c);}
function AJ2(){BiX=AKT();}
var S$=D(T);
function Bb7(){var a=new S$();AFp(a);return a;}
function AFp(a){Bo(a);}
function AWR(a){var b;b=BdF(a);b.bH.nO(0,2048);b.bf=1;return b;}
var HB=D(0);
function Hq(){var a=this;BH.call(a);a.LH=0;a.JQ=0.0;a.Ik=0.0;a.ND=0;}
var BiY=Bb;var BiZ=Bb;function AH6(){AH6=N(Hq);A2Q();}
function A2Q(){BiY=BN(B(459));BiZ=BiY;}
var DU=D(Bw);
var Bi0=null;var Bi1=null;var Bi2=null;var Bi3=null;var Bi4=null;function MA(){MA=N(DU);AQ$();}
function LY(a,b){var c=new DU();Vp(c,a,b);return c;}
function TZ(){MA();return Bi4.ge();}
function Vp(a,b,c){MA();Cs(a,b,c);}
function AQ$(){Bi0=LY(B(460),0);Bi1=LY(B(461),1);Bi2=LY(B(462),2);Bi3=LY(B(463),3);Bi4=H(DU,[Bi0,Bi1,Bi2,Bi3]);}
var Ky=D(0);
function LI(){var a=this;C.call(a);a.l$=0;a.fp=null;a.fe=null;a.Cm=0.0;a.sy=0;a.uK=0;a.iR=0;}
var Bi5=null;function A5j(){A5j=N(LI);AGy();}
function DC(){var a=new LI();S8(a);return a;}
function Bi6(a,b){var c=new LI();M1(c,a,b);return c;}
function S8(a){A5j();M1(a,51,0.800000011920929);}
function M1(a,b,c){var d;A5j();J(a);if(c>0.0&&c<1.0){a.Cm=c;d=GN(b,c);a.sy=d*c|0;a.iR=d-1|0;a.uK=CT(O(a.iR));a.fp=X(C,d);a.fe=X(C,d);return;}G(W((((I()).a(B(42))).cA(c)).b()));}
function AVV(a,b){return Cu(CJ(CP(O(b.by()),Ca(2135587861, 2654435769)),a.uK));}
function AZc(a,b){var c,d,e;if(b===null)G(W(B(464)));c=a.fp;d=a.kj(b);while(true){e=c.data[d];if(e===null)return  -(d+1|0)|0;if(e.z(b))break;d=(d+1|0)&a.iR;}return d;}
function AO3(a,b,c){var d,e,f;d=a.j0(b);if(d>=0){e=a.fe.data[d];a.fe.data[d]=c;return e;}f= -(d+1|0)|0;a.fp.data[f]=b;a.fe.data[f]=c;f=a.l$+1|0;a.l$=f;if(f>=a.sy)Wh(a,a.fp.data.length<<1);return null;}
function PR(a,b,c){var d,e,f;d=a.fp;e=a.kj(b);while(true){f=d.data;if(f[e]===null)break;e=(e+1|0)&a.iR;}f[e]=b;a.fe.data[e]=c;}
function AU_(a,b){var c;c=a.j0(b);return c<0?null:a.fe.data[c];}
function AT0(a){if(!a.l$)return;a.l$=0;Un(a.fp,null);Un(a.fe,null);}
function A7p(a,b){return a.j0(b)<0?0:1;}
function Wh(a,b){var c,d,e,f,g;a:{c=a.fp.data.length;a.sy=b*a.Cm|0;a.iR=b-1|0;a.uK=CT(O(a.iR));d=a.fp;e=a.fe;a.fp=X(C,b);a.fe=X(C,b);if(a.l$>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g!==null)PR(a,g,e.data[f]);f=f+1|0;}}}}
function AGy(){Bi5=PS();}
function X2(){var a=this;C.call(a);a.g=null;a.c8=0;a.qp=null;a.vG=0;a.fw=0;a.gx=0;a.bR=0;a.ru=null;}
function BaU(){var a=new X2();ACz(a);return a;}
function Gz(a,b){return A$x(a,b);}
function L2(a,b,c){var d,e,f,g,h,i;d=R1();e=Gz(a,b);f=0;g=0;if(!b.i()){h=X(BL,1);h.data[0]=B(103);return h;}while(F1(e)){i=f+1|0;if(i>=c&&c>0)break;d.hR((b.d8(g,Lu(e))).b());g=Mv(e);f=i;}a:{d.hR((b.d8(g,b.i())).b());i=f+1|0;if(!c)while(true){i=i+(-1)|0;if(i<0)break;if(((d.l(i)).b()).i())break a;d.mo(i);}}if(i<0)i=0;return d.HZ(X(BL,i));}
function U8(a,b){return L2(a,b,0);}
function IA(a){return a.g.b();}
function AXq(b,c){if(b===null)G(AOe(B(465)));if(c&&(c|255)!=255)G(W(B(103)));Wd();Bed=1;return Xp(BaU(),b,c);}
function Xp(a,b,c){a.g=BbC(b,c);a.c8=c;a.ru=LC(a,(-1),a.c8,null);if(a.g.bO()){P_(a);return a;}G(BP(B(103),a.g.b(),a.g.dL()));}
function ABm(a,b){var c,d,e;c=Bdn(BW(a,2),BW(a,64));while(!a.g.bO()){d=a.g;if(!d.hk())break;d=a.g;if(d.cJ()&&a.g.cJ()!=(-536870788)){d=a.g;if(d.cJ()!=(-536870871))break;}c.cD(a.g.D());if(a.g.bV()!=(-536870788))continue;a.g.D();}e=HC(a,c);e.Q(b);return e;}
function LC(a,b,c,d){var e,f,g,h,i,j;e=R1();f=a.c8;g=0;if(c!=a.c8)a.c8=c;a:{switch(b){case -1073741784:h=new KC;i=a.bR+1|0;a.bR=i;YT(h,i);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new J_;i=a.bR+1|0;a.bR=i;AA4(h,i);break a;case -33554392:h=new KM;i=a.bR+1|0;a.bR=i;T6(h,i);break a;default:a.fw=a.fw+1|0;if(d!==null)h=BcU(a.fw);else{h=BbO();g=1;}if(a.fw<=(-1))break a;if(a.fw>=10)break a;a.qp.data[a.fw]=h;break a;}h=BaQ();}while(true){if(a.g.hk()&&a.g.cJ()==(-536870788))j=ABm(a,
h);else if(a.g.bV()==(-536870788)){j=FA(h);a.g.D();}else{j=Mh(a,h);if(a.g.bV()==(-536870788))a.g.D();}if(j!==null)e.hR(j);if(a.g.bO())break;if(a.g.bV()==(-536870871))break;}if(a.g.GM()==(-536870788))e.hR(FA(h));if(a.c8!=f&&!g){a.c8=f;a.g.Gy(a.c8);}switch(b){case -1073741784:break;case -536870872:return Bbs(e,h);case -268435416:return BaL(e,h);case -134217688:return A9_(e,h);case -67108824:return BbH(e,h);case -33554392:return Ba1(e,h);default:switch(e.db()){case 0:break;case 1:return Bct(e.l(0),h);default:return A$2(e,
h);}return FA(h);}return Bar(e,h);}
function ZZ(a){var b,c,d;b=A4K();while(!a.g.bO()){c=a.g;if(!c.hk())break;c=a.g;if(c.D3())break;c=a.g;if(c.E3())break;c=a.g;if(!(!c.s4()&&!a.g.cJ())){c=a.g;if(!(!c.s4()&&IO(a.g.cJ()))){c=a.g;if(c.cJ()!=(-536870871)){c=a.g;if((c.cJ()&(-2147418113))!=(-2147483608)){c=a.g;if(c.cJ()!=(-536870788)){c=a.g;if(c.cJ()!=(-536870876))break;}}}}}d=a.g.D();if(!H7(d))b.Io(d&65535);else b.Oh(Er(d));}if(!BW(a,2))return A$N(b);if(BW(a,64))return BdK(b);return BdO(b);}
function Z2(a){var b,c,d,e,f,g,h,i,j,k;b=Bc(4);c=0;d=(-1);e=(-1);if(!a.g.bO()&&a.g.hk()){f=b.data;d=a.g.D();f[c]=d;e=d-4352|0;}if(e>=0&&e<19){g=BV(3);f=g.data;f[c]=d&65535;h=a.g.bV();i=h-4449|0;if(i>=0&&i<21){f[1]=h&65535;a.g.D();j=a.g.bV();h=j-4519|0;if(h>=0&&h<28){f[2]=j&65535;a.g.D();return A6Y(g,3);}return A6Y(g,2);}if(!BW(a,2))return PQ(f[0]);if(BW(a,64))return A4G(f[0]);return AVS(f[0]);}k=1;while(k<4&&!a.g.bO()&&a.g.hk()){f=b.data;j=k+1|0;f[k]=a.g.D();k=j;}if(k==1){f=b.data;if(!AKX(f[0]))return Lv(a,
f[0]);}if(!BW(a,2))return BdL(b,k);if(BW(a,64))return Bdq(b,k);return A$3(b,k);}
function Mh(a,b){var c,d,e,f;if(a.g.hk()&&!a.g.s4()&&IO(a.g.cJ())){if(!BW(a,128)){if(!a.g.D3()&&!a.g.E3())c=ZZ(a);else{d=NY(a,b);c=H9(a,b,d);}}else{c=Z2(a);if(!a.g.bO()){e=a.g;if(!(e.bV()==(-536870871)&&!(b instanceof EV))){e=a.g;if(e.bV()!=(-536870788)&&!a.g.hk())c=H9(a,b,c);}}}}else if(a.g.bV()!=(-536870871)){d=NY(a,b);c=H9(a,b,d);}else{if(b instanceof EV)G(BP(B(103),a.g.b(),a.g.dL()));c=FA(b);}a:{if(!a.g.bO()){e=a.g;if(!(e.bV()==(-536870871)&&!(b instanceof EV))){e=a.g;if(e.bV()!=(-536870788)){f=Mh(a,b);if
(c instanceof CC&&!(c instanceof Ed)&&!(c instanceof CE)&&!(c instanceof Eb)){e=c;if(!f.b_(e.pH()))c=A97(e);}if((f.iX()&65535)!=43)c.Q(f);else c.Q(f.pH());break a;}}}if(c===null)return null;c.Q(b);}if((c.iX()&65535)!=43)return c;return c.pH();}
function H9(a,b,c){var d,e,f,g,h,i,j;d=a.g.bV();if(c!==null&&!(c instanceof BI)){switch(d){case -2147483606:a.g.D();return A_Z(c,b,d);case -2147483605:a.g.D();return Bcb(c,b,(-2147483606));case -2147483585:a.g.D();return Bcn(c,b,(-536870849));case -2147483525:e=new Jx;f=a.g.jf();g=a.gx+1|0;a.gx=g;RO(e,f,c,b,(-536870849),g);return e;case -1073741782:case -1073741781:a.g.D();h=BbF(c,b,d);c.Q(h);return h;case -1073741761:a.g.D();h=A$o(c,b,(-536870849));c.Q(b);return h;case -1073741701:h=new K$;e=a.g;e=e.jf();i
=a.gx+1|0;a.gx=i;RK(h,e,c,b,(-536870849),i);c.Q(h);return h;case -536870870:case -536870869:a.g.D();h=c.iX()!=(-2147483602)?Bbk(c,b,d):BW(a,32)?A$C(c,b,d):A93(c,b,d,Mn(a.c8));c.Q(h);return h;case -536870849:a.g.D();h=BdB(c,b,(-536870849));c.Q(b);return h;case -536870789:h=new Ep;e=a.g;e=e.jf();g=a.gx+1|0;a.gx=g;Ie(h,e,c,b,(-536870849),g);c.Q(h);return h;default:}return c;}j=null;if(c!==null)j=c;switch(d){case -2147483606:case -2147483605:a.g.D();h=A_R(j,b,d);j.Q(h);return h;case -2147483585:a.g.D();return BaV(j,
b,(-2147483585));case -2147483525:return Bad(a.g.jf(),j,b,(-2147483525));case -1073741782:case -1073741781:a.g.D();h=Bdc(j,b,d);j.Q(h);return h;case -1073741761:a.g.D();return Bc1(j,b,(-1073741761));case -1073741701:return A$I(a.g.jf(),j,b,(-1073741701));case -536870870:case -536870869:a.g.D();h=A_H(j,b,d);j.Q(h);return h;case -536870849:a.g.D();return A_c(j,b,(-536870849));case -536870789:return Bbw(a.g.jf(),j,b,(-536870789));default:}return c;}
function NY(a,b){var c,d,e,f,g,h,i,j,k,l;c=null;while(true){a:{d=a.g.bV();if((d&(-2147418113))==(-2147483608)){a.g.D();e=(d&16711680)>>16;d=d&(-16711681);if(d==(-16777176))a.c8=e;else{if(d!=(-1073741784))e=a.c8;c=LC(a,d,e,b);if(a.g.bV()!=(-536870871))G(BP(B(103),a.g.b(),a.g.dL()));a.g.D();}}else{b:{c:{switch(d){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:a.g.D();c
=A6F(0);break a;case -2147483577:a.g.D();c=A$m();break a;case -2147483558:a.g.D();c=new Lr;f=a.bR+1|0;a.bR=f;AAv(c,f);break a;case -2147483550:a.g.D();c=A6F(1);break a;case -2147483526:a.g.D();c=A_8();break a;case -536870876:a.g.D();a.bR=a.bR+1|0;if(BW(a,8)){if(BW(a,1)){c=A$G(a.bR);break a;}c=A9M(a.bR);break a;}if(BW(a,1)){c=A$$(a.bR);break a;}c=A_X(a.bR);break a;case -536870866:a.g.D();if(BW(a,32)){c=Bam();break a;}c=A_O(Mn(a.c8));break a;case -536870821:a.g.D();g=0;if(a.g.bV()==(-536870818)){g=1;a.g.D();}c
=RQ(a,g,b);if(a.g.bV()!=(-536870819))G(BP(B(103),a.g.b(),a.g.dL()));a.g.pz(1);a.g.D();break a;case -536870818:a.g.D();a.bR=a.bR+1|0;if(!BW(a,8)){c=AP9();break a;}c=Bdb(Mn(a.c8));break a;case 0:h=a.g.rX();if(h!==null)c=HC(a,h);else{if(a.g.bO()){c=FA(b);break a;}c=PQ(d&65535);}a.g.D();break a;default:break b;}a.g.D();c=AP9();break a;}i=(d&2147483647)-48|0;if(a.fw<i)G(BP(B(103),a.g.b(),a.g.dL()));a.g.D();a.bR=a.bR+1|0;c=!BW(a,2)?Ba0(i,a.bR):BW(a,64)?A$H(i,a.bR):BdE(i,a.bR);a.qp.data[i].s1=1;a.vG=1;break a;}if(d
>=0&&!a.g.kS()){c=Lv(a,d);a.g.D();}else if(d==(-536870788))c=FA(b);else{if(d!=(-536870871)){j=new NK;k=!a.g.kS()?H8(d&65535):(a.g.rX()).b();l=a.g;U9(j,k,l.b(),a.g.dL());G(j);}if(b instanceof EV)G(BP(B(103),a.g.b(),a.g.dL()));c=FA(b);}}}if(d!=(-16777176))break;}return c;}
function RQ(a,b,c){var d,e;d=Fl(a,b);e=HC(a,d);e.Q(c);return e;}
function Fl(a,b){var c,d,e,f,g,h,i,j,k,$$je;c=Bc7(b,BW(a,2),BW(a,64));d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(a.g.bO())break a;f=a.g.bV()==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.g.bV()){case -536870874:if(d>=0)c.cD(d);d=a.g.D();if(a.g.bV()!=(-536870874)){d=38;break d;}if(a.g.cJ()==(-536870821)){a.g.D();e=1;d=(-1);break d;}a.g.D();if(g){c=Fl(a,0);break d;}if(a.g.bV()==(-536870819))break d;c.xE(Fl(a,0));break d;case -536870867:if(!g&&a.g.cJ()!=(-536870819)){h=a.g;if(h.cJ()!=(-536870821)&&d>=0){a.g.D();i
=a.g.bV();if(a.g.kS())break c;if(i<0){h=a.g;if(h.cJ()!=(-536870819)){h=a.g;if(h.cJ()!=(-536870821)&&d>=0)break c;}}e:{try{if(IO(i))break e;i=i&65535;break e;}catch($$e){$$je=R($$e);if($$je instanceof B2){break b;}else{throw $$e;}}}try{c.bG(d,i);}catch($$e){$$je=R($$e);if($$je instanceof B2){break b;}else{throw $$e;}}a.g.D();d=(-1);break d;}}if(d>=0)c.cD(d);d=45;a.g.D();break d;case -536870821:if(d>=0){c.cD(d);d=(-1);}a.g.D();j=0;if(a.g.bV()==(-536870818)){a.g.D();j=1;}if(!e)c.KX(Fl(a,j));else c.xE(Fl(a,j));e
=0;a.g.D();break d;case -536870819:if(d>=0)c.cD(d);d=93;a.g.D();break d;case -536870818:if(d>=0)c.cD(d);d=94;a.g.D();break d;case 0:if(d>=0)c.cD(d);k=a.g.rX();if(k===null)d=0;else{c.MG(k);d=(-1);}a.g.D();break d;default:}if(d>=0)c.cD(d);d=a.g.D();}g=0;}G(BP(B(103),IA(a),a.g.dL()));}G(BP(B(103),IA(a),a.g.dL()));}if(!f){if(d>=0)c.cD(d);return c;}G(BP(B(103),IA(a),a.g.dL()-1|0));}
function Lv(a,b){var c;c=H7(b);if(BW(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AVS(b&65535);}if(BW(a,64)&&b>128){if(c)return A_s(b);if(J1(b))return AMI(b&65535);if(!KJ(b))return A4G(b&65535);return AZS(b&65535);}}if(c)return A9Z(b);if(J1(b))return AMI(b&65535);if(!KJ(b))return PQ(b&65535);return AZS(b&65535);}
function HC(a,b){var c,d;if(!b.FC()){if(!b.CP()){if(b.gV())return AIp(b);return APU(b);}if(b.gV())return A2F(b);return A0m(b);}c=b.M1();d=BaO(c);if(!b.CP()){if(b.gV())return K4(AIp(b.mC()),d);return K4(APU(b.mC()),d);}if(b.gV())return K4(A2F(b.mC()),d);return K4(A0m(b.mC()),d);}
function Gw(b){return AXq(b,0);}
function P_(a){if(a.vG)a.ru.ea();}
function A0r(b){var c,d,e,f;c=(I()).a(B(466));d=0;while(true){e=b.ud(B(467),d);if(e<0)break;f=e+2|0;(c.a(b.cd(d,f))).a(B(468));d=f;}return ((c.a(b.ef(d))).a(B(467))).b();}
function UV(a){return a.fw;}
function AAT(a){return a.gx+1|0;}
function R3(a){return a.bR+1|0;}
function Gs(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function BW(a,b){return (a.c8&b)!=b?0:1;}
function ACz(a){J(a);a.qp=X(Cv,10);a.fw=(-1);a.gx=(-1);a.bR=(-1);}
var C_=D(B2);
function A_n(){var a=new C_();Vf(a);return a;}
function Vf(a){E6(a);}
var Gx=D(C_);
var NX=D(0);
function Vc(){var a=this;C.call(a);a.zC=0;a.AB=null;}
function Bcd(a,b){var c=new Vc();ATc(c,a,b);return c;}
function ATc(a,b,c){a.AB=b;a.zC=c;J(a);}
function AVA(a){A1b(a.AB,a.zC);}
function AND(a){a.G$();}
var PK=D(FJ);
function Bcn(a,b,c){var d=new PK();APT(d,a,b,c);return d;}
function APT(a,b,c,d){LW(a,b,c,d);Jn();b.Q(Bfx);}
function AJO(a,b,c,d){var e;e=a.Y.e(b,c,d);if(e<=0)e=b;return a.k.e(e,c,d);}
function A2R(a,b){a.k=b;}
var XT=D(Bm);
function FS(){var a=new XT();AYy(a);return a;}
function AYy(a){Ct(a);}
var T0=D(T);
function Bc3(){var a=new T0();AKy(a);return a;}
function AKy(a){Bo(a);}
function A0R(a){var b;b=Bas(a);b.bf=1;return b;}
function L3(){var a=this;C.call(a);a.tr=0;a.xP=0;a.B0=null;}
function AHf(a,b,c){var d=new L3();APt(d,a,b,c);return d;}
function APt(a,b,c,d){J(a);a.tr=b;a.xP=c;a.B0=d;}
function R2(){Ex.call(this);this.iK=null;}
function BaW(){var a=new R2();A7N(a);return a;}
function A7N(a){La(a);}
function AUP(a,b){var c;Jm();c=BB(a,Bi7);if(c===null){c=A$T();E7(a,c);}c.g$.E(b);return a;}
var ZY=D(D5);
function Bc8(){var a=new ZY();AIs(a);return a;}
function AIs(a){J6(a);}
function A5O(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function ARB(a,b,c){var d;a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}d=1;break a;}d=0;}return d;}
var ZX=D(D5);
function BcG(){var a=new ZX();AUT(a);return a;}
function AUT(a){J6(a);}
function AEW(a,b){return b!=10?0:1;}
function AOl(a,b,c){return b!=10?0:1;}
var XX=D(FM);
var Uu=D(T);
function BcN(){var a=new Uu();AZs(a);return a;}
function AZs(a){Bo(a);}
function A5f(a){var b;b=Bb0(a);b.bf=1;return b;}
var KP=D();
var Bix=0;function KB(){C.call(this);this.qg=null;}
var Bi8=null;function A$k(){var a=new KB();AXC(a);return a;}
function AXC(a){J(a);}
function AYx(a,b,c,d,e){if(a.qg===null)a.qg=Bb4();a.qg.FZ(b,c,d,e);}
function AG2(){if(Bi8===null)Bi8=A$k();return Bi8;}
function SH(){var a=this;C.call(a);a.A3=null;a.Cj=0;}
function A_Q(a){var b=new SH();AW6(b,a);return b;}
function AW6(a,b){J(a);a.A3=b;}
function Ds(){var a=this;BI.call(a);a.go=null;a.ya=0;}
function APU(a){var b=new Ds();ANN(b,a);return b;}
function ANN(a,b){CZ(a);a.go=b.l6();a.ya=b.bD;}
function ASK(a,b,c){return !a.go.p(c.f(b))?(-1):1;}
function AKc(a){return ((((I()).a(B(57))).a(!a.ya?B(58):B(59))).a(a.go.b())).b();}
function ANh(a,b){if(b instanceof Du)return IJ(a.go,b.pe());if(b instanceof Ds)return GF(a.go,b.go);if(b instanceof C1)return GF(a.go,b.us());if(!(b instanceof Dq))return 1;return 0;}
function A3x(a){return a.go;}
function H$(){Q.call(this);this.rC=0;}
function Bat(a){var b=new H$();RU(b,a);return b;}
function RU(a,b){Be(a);a.rC=b;}
function ANb(a,b){return a.bD^(a.rC!=F0(b&65535)?0:1);}
var Yr=D(H$);
function A9U(a){var b=new Yr();AL$(b,a);return b;}
function AL$(a,b){RU(a,b);}
function A5_(a,b){return a.bD^(!(a.rC>>F0(b&65535)&1)?0:1);}
function Lk(){var a=this;C.call(a);a.so=null;a.lR=null;a.dB=0;a.mA=null;a.zR=0.0;a.Ay=0.0;a.fD=0;a.D1=null;a.nK=null;a.pD=null;a.ux=0;a.rZ=0;a.wv=0;a.BV=0;a.vl=0;a.h_=null;a.gk=null;a.KY=0;a.Ne=null;a.OO=0.0;a.m$=0;a.qX=0;a.uU=0;}
var Bi9=null;function SZ(){SZ=N(Lk);A1_();}
function BaS(){var a=new Lk();AAu(a);return a;}
function Bi$(a,b){var c=new Lk();JZ(c,a,b);return c;}
function AAu(a){SZ();JZ(a,1000,null);}
function JZ(a,b,c){var d,e,f,g,h,i,j,k,l,m;SZ();J(a);a.dB=0;a.mA=null;a.zR=0.0;a.Ay=0.0;a.fD=0;a.D1=BO();a.nK=BO();a.pD=BO();a.ux=0;a.rZ=770;a.wv=771;a.BV=770;a.vl=771;a.gk=null;a.Ne=CL(1.0,1.0,1.0,1.0);a.OO=BhM;a.m$=0;a.qX=0;a.uU=0;if(b>8191)G(W((((I()).a(B(469))).j(b)).b()));if(BfE===null)d=Bi9;else{MA();d=Bi3;}e=new HE;f=b*4|0;g=b*6|0;MC(e,d,0,f,g,H(E$,[Ey(1,2,B(470)),Ey(4,4,B(471)),Ey(16,2,B(472))]));a.so=e;a.nK.K_(0.0,0.0,Bfz.bp(),Bfz.bm());a.lR=B9(b*20|0);h=Mu(g);i=0;j=0;while(j<g){k=h.data;k[j]=i;k[j
+1|0]=(i+1|0)<<16>>16;l=j+2|0;m=(i+2|0)<<16>>16;k[l]=m;k[j+3|0]=m;k[j+4|0]=(i+3|0)<<16>>16;k[j+5|0]=i;j=j+6|0;i=(i+4|0)<<16>>16;}a.so.MI(h);if(c!==null)a.h_=c;else{a.h_=So();a.KY=1;}}
function So(){var b,c,d;SZ();b=B(473);c=B(474);d=AHx(b,c);if(d.rR())return d;G(W((((I()).a(B(475))).a(d.qJ())).b()));}
function AZe(a){if(a.fD)G(DN(B(476)));a.m$=0;BfC.kL(0);if(a.gk===null)a.h_.e7();else a.gk.e7();a.zF();a.fD=1;}
function APr(a){var b;if(!a.fD)G(DN(B(477)));if(a.dB>0)a.ej();a.mA=null;a.fD=0;b=BfC;b.kL(1);if(a.IN())b.ee(3042);}
function AJL(a,b,c,d,e){var f,g,h;if(!a.fD)G(DN(B(478)));f=a.lR.data.length;if(b!==a.mA){a.JD(b);g=f;}else{g=f-a.dB|0;if(!g){a.ej();g=f;}}h=Bq(g,e);Y(c,d,a.lR,a.dB,h);a.dB=a.dB+h|0;g=e-h|0;while(g>0){d=d+h|0;a.ej();h=Bq(f,g);Y(c,d,a.lR,0,h);a.dB=a.dB+h|0;g=g-h|0;}}
function AJb(a){var b,c,d;if(!a.dB)return;a.m$=a.m$+1|0;a.qX=a.qX+1|0;b=a.dB/20|0;if(b>a.uU)a.uU=b;c=b*6|0;a.mA.e7();d=a.so;d.Ff(a.lR,0,a.dB);(d.z6()).cX(0);(d.z6()).ck(c);if(a.ux)BfC.ee(3042);else{BfC.oT(3042);if(a.rZ!=(-1))BfC.I9(a.rZ,a.wv,a.BV,a.vl);}d.MJ(a.gk===null?a.h_:a.gk,4,0,c);a.dB=0;}
function AHR(a,b){if(a.fD)a.ej();a.nK.cg(b);if(a.fD)a.zF();}
function AGi(a){(a.pD.cg(a.nK)).ho(a.D1);if(a.gk===null){a.h_.EK(B(479),a.pD);a.h_.xS(B(480),0);}else{a.gk.EK(B(479),a.pD);a.gk.xS(B(480),0);}}
function A3o(a,b){a.ej();a.mA=b;a.zR=1.0/b.bp();a.Ay=1.0/b.bm();}
function AC4(a){return a.ux?0:1;}
function A1_(){MA();Bi9=Bi0;}
var LK=D();
var Bi_=null;function Bcs(){Bcs=N(LK);A5l();}
function A5l(){Bi_=Bc((TZ()).data.length);Bi_.data[BD(Bi1)]=1;Bi_.data[BD(Bi2)]=2;Bi_.data[BD(Bi3)]=3;Bi_.data[BD(Bi0)]=4;}
var W3=D(CK);
var NB=D(0);
function Lw(){var a=this;C.call(a);a.jv=null;a.eW=null;a.xk=null;a.I7=null;a.ev=null;a.MP=null;}
var Bja=0;function UZ(){UZ=N(Lw);AXg();}
function Bdd(a){var b=new Lw();ABV(b,a);return b;}
function Bjb(a,b){var c=new Lw();JU(c,a,b);return c;}
function Bjc(a,b,c){var d=new Lw();MU(d,a,b,c);return d;}
function ABV(a,b){UZ();JU(a,b,null);}
function JU(a,b,c){UZ();MU(a,b,null,c);}
function MU(a,b,c,d){UZ();J(a);a.jv=Bp();a.eW=Bp();a.xk=Bp();a.I7=b;if(c===null)c=BO();a.ev=c;if(d!==null)OJ(a,b.jV,d);else QC(a,b.jV);a.GB(b.Ab,Bja);a.OI();}
function QC(a,b){var c,d,e;c=0;d=b.h;while(c<d){e=b.l(c);a.eW.E(e.uO());c=c+1|0;}NH(a);}
function OJ(a,b,c){var d,e,f,g,h,i,j;d=0;e=b.h;while(d<e){f=c.data;g=b.l(d);h=f.length;i=0;a:{while(true){if(i>=h)break a;j=f[i];if(j.z(g.gd))break;i=i+1|0;}a.eW.E(g.uO());}d=d+1|0;}NH(a);}
function NR(a,b){var c,d,e,f,g,h,i,j;c=0;d=b.d6.h;while(c<d){a:{e=b.d6.l(c);f=e.cG;if(f!==null){g=0;while(true){if(g>=f.ca)break a;f.el.data[g]=a.ye(f.el.data[g].gd);g=g+1|0;}}}if(!a.jv.ij(e.dX,1)){h=a.jv.Kf(e.dX,0);if(h>=0)e.dX=a.jv.l(h);else{i=a.jv;j=e.dX.Is();e.dX=j;i.E(j);}}c=c+1|0;}c=0;d=b.H8();while(c<d){NR(a,b.O0(c));c=c+1|0;}}
function NH(a){var b,c;b=0;c=a.eW.h;while(b<c){NR(a,a.eW.l(b));b=b+1|0;}}
function ALh(a,b,c){var d,e;d=b.fj();while(d.bC()){e=d.bz();a.GU(e,c);}}
function AD9(a,b,c){var d,e,f,g,h,i,j;d=Bdu();d.Dp=b.Dp;d.v1=b.v1;e=b.mH.bY();while(e.bC()){f=e.bz();g=a.ye(f.yy.gd);if(g===null)continue;a:{h=BcT();h.yy=g;if(c){h.gs=f.gs;h.gf=f.gf;h.fH=f.fH;}else{b:{if(f.gs!==null){h.gs=Bp();i=f.gs.bY();while(true){if(!i.bC())break b;j=i.bz();h.gs.E(QS(j.m_,j.oj));}}}c:{if(f.gf!==null){h.gf=Bp();i=f.gf.bY();while(true){if(!i.bC())break c;j=i.bz();h.gf.E(QS(j.m_,j.oj));}}}if(f.fH!==null){h.fH=Bp();i=f.fH.bY();while(true){if(!i.bC())break a;j=i.bz();h.fH.E(QS(j.m_,j.oj));}}}}if
(!(h.gs===null&&h.gf===null&&h.fH===null))d.mH.E(h);}if(d.mH.h>0)a.xk.E(d);}
function ANV(a,b,c){var d,e;d=a.eW.bY();while(d.bC()){e=d.bz();a.zH(e,b,c);}}
function A7_(a,b,c,d){d.H0(b);if(d.dy===null&&a.ev!==null)(b.dx.cg(a.ev)).ho(c.fz);else if(a.ev===null)b.dx.fn();else b.dx.cg(a.ev);b.Bs=a.MP;return b;}
function AMj(a,b,c,d){var e,f,g,h;a:{if(b.d6.h>0){e=b.d6.bY();while(true){if(!e.bC())break a;f=e.bz();if(f.lr)c.E(a.II(d.eK(),b,f));}}}g=(b.rl()).fj();while(g.bC()){h=g.bz();a.zH(h,c,d);}}
function ACa(a){var b,c;b=a.eW.h;c=0;while(c<b){(a.eW.l(c)).CQ(1);c=c+1|0;}c=0;while(c<b){(a.eW.l(c)).yA(1);c=c+1|0;}}
function AB3(a,b){return a.Nc(b,1);}
function ALD(a,b,c){return a.Od(b,c,0);}
function AXr(a,b,c,d){return YP(a.eW,b,c,d);}
function AXg(){Bja=1;}
var DW=D(C_);
function Bjd(){var a=new DW();J8(a);return a;}
function J8(a){Vf(a);}
function Qc(){DW.call(this);this.Ey=0;}
function A$w(a){var b=new Qc();AZQ(b,a);return b;}
function AZQ(a,b){J8(a);a.Ey=b;}
function AF9(a){return (((I()).a(B(481))).j(a.Ey)).b();}
function Pw(){var a=this;Q.call(a);a.t_=0;a.vz=0;a.pm=0;a.q$=0;a.e0=0;a.hL=0;a.bd=null;a.bF=null;}
function CO(){var a=new Pw();ASm(a);return a;}
function Bdn(a,b){var c=new Pw();PB(c,a,b);return c;}
function Bc7(a,b,c){var d=new Pw();ATD(d,a,b,c);return d;}
function ASm(a){Be(a);a.bd=A9y();}
function PB(a,b,c){Be(a);a.bd=A9y();a.t_=b;a.vz=c;}
function ATD(a,b,c,d){PB(a,c,d);a.f0(b);}
function AB0(a,b){a:{if(a.t_){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.e0){a.bd.rB(Gs(b&65535));break a;}a.bd.sv(Gs(b&65535));break a;}if(a.vz&&b>128){a.pm=1;b=ET(El(b));}}}if(!(!KJ(b)&&!J1(b))){if(a.q$)a.bH.rB(b-55296|0);else a.bH.sv(b-55296|0);}if(a.e0)a.bd.rB(b);else a.bd.sv(b);if(!a.bf&&H7(b))a.bf=1;return a;}
function A9o(a,b){var c,d;if(!a.bf&&b.bf)a.bf=1;if(a.q$){if(!b.b5)a.bH.ix(b.ch());else a.bH.dM(b.ch());}else if(!b.b5)a.bH.iG(b.ch());else{a.bH.iZ(b.ch());a.bH.dM(b.ch());a.b5=a.b5?0:1;a.q$=1;}if(!a.hL&&b.bL()!==null){if(a.e0){if(!b.jy())a.bd.ix(b.bL());else a.bd.dM(b.bL());}else if(!b.jy())a.bd.iG(b.bL());else{a.bd.iZ(b.bL());a.bd.dM(b.bL());a.bD=a.bD?0:1;a.e0=1;}}else{c=a.bD;if(a.bF!==null){d=a.bF;if(!c)a.bF=Bdi(a,c,d,b);else a.bF=BaF(a,c,d,b);}else{if(c&&!a.e0&&a.bd.bO())a.bF=A$u(a,b);else if(!c)a.bF=BaI(a,
c,b);else a.bF=A$g(a,c,b);a.hL=1;}}return a;}
function A61(a,b,c){if(b>c)G(CH());a:{b:{if(!a.t_){if(c<55296)break b;if(b>57343)break b;}while(true){if(b>=(c+1|0))break a;a.cD(b);b=b+1|0;}}if(a.e0)a.bd.Ns(b,c+1|0);else a.bd.nO(b,c+1|0);}return a;}
function AS9(a,b){var c,d;if(!a.bf&&b.bf)a.bf=1;if(b.gV())a.pm=1;if(!(a.b5^b.b5)){if(!a.b5)a.bH.iG(b.ch());else a.bH.dM(b.ch());}else if(a.b5)a.bH.ix(b.ch());else{a.bH.iZ(b.ch());a.bH.dM(b.ch());a.b5=1;}if(!a.hL&&b.bL()!==null){if(!(a.bD^b.jy())){if(!a.bD)a.bd.iG(b.bL());else a.bd.dM(b.bL());}else if(a.bD)a.bd.ix(b.bL());else{a.bd.iZ(b.bL());a.bd.dM(b.bL());a.bD=1;}}else{c=a.bD;if(a.bF!==null){d=a.bF;if(!c)a.bF=A_0(a,c,d,b);else a.bF=BdM(a,c,d,b);}else{if(!a.e0&&a.bd.bO()){if(!c)a.bF=A$r(a,b);else a.bF=Bds(a,
b);}else if(!c)a.bF=Bbc(a,b,c);else a.bF=A9P(a,b,c);a.hL=1;}}}
function AQD(a,b){var c,d;if(!a.bf&&b.bf)a.bf=1;if(b.gV())a.pm=1;if(!(a.b5^b.b5)){if(!a.b5)a.bH.dM(b.ch());else a.bH.iG(b.ch());}else if(!a.b5)a.bH.ix(b.ch());else{a.bH.iZ(b.ch());a.bH.dM(b.ch());a.b5=0;}if(!a.hL&&b.bL()!==null){if(!(a.bD^b.jy())){if(!a.bD)a.bd.dM(b.bL());else a.bd.iG(b.bL());}else if(!a.bD)a.bd.ix(b.bL());else{a.bd.iZ(b.bL());a.bd.dM(b.bL());a.bD=0;}}else{c=a.bD;if(a.bF!==null){d=a.bF;if(!c)a.bF=BdJ(a,c,d,b);else a.bF=A_W(a,c,d,b);}else{if(!a.e0&&a.bd.bO()){if(!c)a.bF=Bci(a,b);else a.bF=BcB(a,
b);}else if(!c)a.bF=A91(a,b,c);else a.bF=BdI(a,b,c);a.hL=1;}}}
function AFh(a,b){if(a.bF!==null)return a.bD^a.bF.p(b);return a.bD^a.bd.eE(b);}
function ASx(a){if(!a.hL)return a.bd;return null;}
function AXR(a){return a.bH;}
function AP7(a){var b,c;if(a.bF!==null)return a;b=a.bL();c=BbB(a,b);return c.f0(a.jy());}
function A2D(a){var b,c;b=I();c=a.bd.k7(0);while(c>=0){b.qI(Er(c));b.U(124);c=a.bd.k7(c+1|0);}if(b.i()>0)b.EE(b.i()-1|0);return b.b();}
function AHd(a){return a.pm;}
function Ps(){var a=this;C.call(a);a.u2=null;a.B1=null;a.on=null;}
function Bap(a,b,c){var d=new Ps();A4J(d,a,b,c);return d;}
function A4J(a,b,c,d){a.on=b;a.u2=c;a.B1=d;J(a);}
function A2S(a,b){if($rt_str(b.type).z(B(482)))a.on.mn.da(a.u2);else a.on.mn.dk(a.u2,a.B1);a.on.mP.jS();}
function A8n(a,b){a.dT(b);}
var AAH=D(Bm);
function TS(){var a=new AAH();AQ5(a);return a;}
function AQ5(a){Ct(a);}
function SS(){var a=this;C.call(a);a.qV=0;a.qw=0;a.vS=0;}
function BbI(){var a=new SS();AB7(a);return a;}
function AB7(a){J(a);}
var TW=D(Ei);
function Bdq(a,b){var c=new TW();AZB(c,a,b);return c;}
function AZB(a,b,c){JL(a,b,c);}
var N2=D(0);
var IQ=D();
function Bje(){var a=new IQ();SD(a);return a;}
function SD(a){J(a);}
function AGs(a,b,c,d,e){return 0;}
function AMx(a){}
function YI(){var a=this;IQ.call(a);a.wx=null;a.qN=0.0;}
function BcP(){var a=new YI();AJh(a);return a;}
function AJh(a){SD(a);}
function AZY(a,b,c,d,e){a.qN=0.0;return 0;}
function AGI(a,b,c,d,e){return 0;}
function A5h(a,b,c){return 0;}
function A35(a,b,c,d){return 0;}
function A0C(a,b,c,d,e){return 0;}
function A7E(a,b,c){var d,e,f,g,h;d=c-b;e=d-a.qN;a.qN=d;f=Bfz.bp();g=Bfz.bm();h=a.wx;if(f>g)f=g;return h.Md(e/f);}
function AXa(a,b,c,d,e){return 0;}
var ON=D(EN);
function Bc0(a,b,c,d,e,f){var g=new ON();A16(g,a,b,c,d,e,f);return g;}
function A16(a,b,c,d,e,f,g){Lq(a,b,c,d,e,f,g);}
function AKE(a,b){var c,d,e,f;c=a.cu.A.data;d=a.ci;e=b*4|0;f=(c[d+e|0]&255)<<24|(a.cu.A.data[(a.ci+e|0)+1|0]&255)<<16|(a.cu.A.data[(a.ci+e|0)+2|0]&255)<<8|a.cu.A.data[(a.ci+e|0)+3|0]&255;return $rt_intBitsToFloat(f);}
function A4z(a,b,c){var d,e,f,g;d=$rt_floatToIntBits(c);e=a.cu.A.data;f=a.ci;g=b*4|0;e[f+g|0]=d>>24<<24>>24;a.cu.A.data[(a.ci+g|0)+1|0]=d>>16<<24>>24;a.cu.A.data[(a.ci+g|0)+2|0]=d>>8<<24>>24;a.cu.A.data[(a.ci+g|0)+3|0]=d<<24>>24;}
var L7=D(0);
function GV(){var a=this;C.call(a);a.g7=null;a.l5=null;a.fA=null;a.bt=null;a.pj=null;a.pa=null;a.p6=null;a.bi=null;a.cW=null;a.cT=null;a.e5=null;a.hK=null;a.ky=null;}
function Z$(a){J(a);a.g7=Bp();a.l5=Bp();a.fA=Bp();a.pj=GS();a.pa=GS();a.p6=A$A();a.hK=GS();a.ky=AR3();}
function ACB(a,b,c,d){var e;if(a.bt!==null)G(U(B(483)));e=a.M3(b);if(e>=0){a.l5.kW(e,c);a.fA.kW(e,d);return e;}a.g7.E(b);a.l5.E(c);a.fA.E(d);return a.g7.h-1|0;}
function A9e(a,b,c){return a.In(b.vO,b,c);}
function AQ6(a,b){return a.bg(b,null);}
function AGN(a,b){var c,d;c=a.g7.h;d=0;while(true){if(d>=c)return (-1);if((a.g7.l(d)).z(b))break;d=d+1|0;}return d;}
function AXK(a,b,c){var d,e,f,g,h,i,j,k,l;if(a.bt!==null)G(U(B(484)));if(!b.rR())G(U(b.qJ()));a.bi=b;d=a.g7.h;a.bt=Bc(d);e=0;while(e<d){f=a.g7.l(e);g=a.l5.l(e);h=a.fA.l(e);if(g!==null&&!g.Lc(a,e,c))a.bt.data[e]=(-1);else{a.bt.data[e]=b.An(f,0);if(a.bt.data[e]>=0&&h!==null){if(!h.xC(a,e))a.pa.iO(e);else a.pj.iO(e);}}if(a.bt.data[e]<0){a.l5.kW(e,null);a.fA.kW(e,null);}e=e+1|0;}a:{if(c!==null){i=c.cP.b6.gH();j=CR(i);e=0;while(true){if(e>=j)break a;k=Cy(i,e);l=b.lN(k.en);if(l>=0)a.p6.od(IE(k),l);e=e+1|0;}}}}
function Xb(a,b,c){var d,e,f;a.cT=b;a.cW=c;a.bi.e7();a.e5=null;d=0;while(d<a.pj.bS){e=a.fA;f=a.pj.b2(d);if(e.l(f)!==null)(a.fA.l(f)).bh(a,f,null,null);d=d+1|0;}}
function V4(a,b){var c,d;a.hK.K();c=CR(b);d=0;while(d<c){a.hK.iO(a.p6.J2(IE(Cy(b,d)),(-1)));d=d+1|0;}a.hK.GX();return a.hK.cn;}
function AYP(a,b){if(b.dx.OA()===0.0)return;a.ky.K();if(b.ct!==null)FX(a.ky,b.ct);if(b.c9!==null)FX(a.ky,b.c9);a.yG(b,a.ky);}
function UG(a,b,c){var d,e,f;d=0;while(d<a.pa.bS){e=a.fA;f=a.pa.b2(d);if(e.l(f)!==null)(a.fA.l(f)).bh(a,f,b,c);d=d+1|0;}if(a.e5!==b.cP.b6){if(a.e5!==null)a.e5.gD(a.bi,a.hK.cn);a.e5=b.cP.b6;a.e5.h6(a.bi,V4(a,b.cP.b6.gH()));}b.cP.IP(a.bi,0);}
function VV(a){if(a.e5!==null){a.e5.gD(a.bi,a.hK.cn);a.e5=null;}}
function H0(a,b){return b>=0&&b<a.bt.data.length&&a.bt.data[b]>=0?1:0;}
function B0(a,b){return b>=0&&b<a.bt.data.length?a.bt.data[b]:(-1);}
function DX(a,b,c){if(a.bt.data[b]<0)return 0;a.bi.Gg(a.bt.data[b],c);return 1;}
function Qx(a,b,c){if(a.bt.data[b]<0)return 0;a.bi.Hf(a.bt.data[b],c);return 1;}
function Lb(a,b,c){if(a.bt.data[b]<0)return 0;a.bi.r8(a.bt.data[b],c);return 1;}
function Fq(a,b,c){if(a.bt.data[b]<0)return 0;a.bi.JY(a.bt.data[b],c);return 1;}
function Fi(a,b,c){if(a.bt.data[b]<0)return 0;a.bi.j8(a.bt.data[b],c);return 1;}
function VP(a,b,c,d){if(a.bt.data[b]<0)return 0;a.bi.FH(a.bt.data[b],c,d);return 1;}
function DM(a,b,c,d,e,f){if(a.bt.data[b]<0)return 0;a.bi.x5(a.bt.data[b],c,d,e,f);return 1;}
function DQ(a,b,c){if(a.bt.data[b]<0)return 0;a.bi.CU(a.bt.data[b],c);return 1;}
function YH(a,b,c){if(a.bt.data[b]<0)return 0;a.bi.CU(a.bt.data[b],a.cW.d3.gu(c));return 1;}
function Q_(){Q.call(this);this.Ma=null;}
function A$b(a){var b=new Q_();ATQ(b,a);return b;}
function ATQ(a,b){a.Ma=b;Be(a);}
function ADp(a,b){return Kq(b);}
function SJ(){DW.call(this);this.zv=0;}
function Bbl(a){var b=new SJ();AMV(b,a);return b;}
function AMV(a,b){J8(a);a.zv=b;}
function AG0(a){return (((I()).a(B(485))).j(a.zv)).b();}
var Xg=D(T);
function Bbo(){var a=new Xg();AC6(a);return a;}
function AC6(a){Bo(a);}
function AGt(a){var b;b=A$h(a);b.bf=1;return b;}
var Fb=D(Bw);
var BgZ=null;var BgT=null;var Bjf=null;function Gj(){Gj=N(Fb);AYS();}
function AGJ(a,b){var c=new Fb();Zb(c,a,b);return c;}
function Zb(a,b,c){Gj();Cs(a,b,c);}
function AYS(){BgZ=AGJ(B(486),0);BgT=AGJ(B(487),1);Bjf=H(Fb,[BgZ,BgT]);}
var EC=D(Bw);
var Bjg=null;var BgU=null;var Bjh=null;function R8(){R8=N(EC);A5I();}
function AMw(a,b){var c=new EC();Yk(c,a,b);return c;}
function Yk(a,b,c){R8();Cs(a,b,c);}
function A5I(){Bjg=AMw(B(488),0);BgU=AMw(B(489),1);Bjh=H(EC,[Bjg,BgU]);}
function HL(){BH.call(this);this.mb=0.0;}
var Bji=Bb;var Bjj=Bb;function EP(){EP=N(HL);ACX();}
function A1y(a,b){var c=new HL();UO(c,a,b);return c;}
function AAJ(b){EP();return A1y(Bji,b);}
function UO(a,b,c){EP();Gi(a,b);a.mb=c;}
function ANQ(a){return A1y(a.dt,a.mb);}
function ARh(a){var b,c;b=G$(a);c=(977*b|0)+A4t(a.mb)|0;return c;}
function ACX(){Bji=BN(B(490));Bjj=BN(B(491));}
function Gl(){var a=this;C.call(a);a.Aj=0;a.E2=0;a.w3=0;a.DG=0;a.Fm=0;a.Mu=0;a.MO=0;}
var BgW=null;function Bjk(){var a=new Gl();Yi(a);return a;}
function Yi(a){J(a);a.Aj=0;a.E2=0;a.w3=0;a.DG=0;a.Fm=0;a.Mu=0;a.MO=0;}
var SX=D(B2);
function A_j(){var a=new SX();AZV(a);return a;}
function AZV(a){E6(a);}
var QK=D(CK);
var MR=D(DZ);
var Bjl=null;function Nx(){Nx=N(MR);AY7();}
function ABw(b,c){var d,e,f,g,h;Nx();if(c>=2&&c<=36){if(b!==null&&!b.bO()){a:{d=0;e=0;switch(b.f(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=Bb;while(e<b.i()){g=e+1|0;h=MV(b.f(e));if(h<0)G(DD((((I()).a(B(6))).a(b)).b()));if(h>=c)G(DD((((((I()).a(B(7))).j(c)).a(B(8))).a(b)).b()));f=Dx(CP(O(c),f),O(h));if(Ka(f,Bb)){if(g==b.i()&&Z(f,Ca(0, 2147483648))&&d)return Ca(0, 2147483648);G(DD((((I()).a(B(9))).a(b)).b()));}e=g;}if(d)f=A2b(f);return f;}G(DD(B(10)));}G(DD((((I()).a(B(11))).j(c)).b()));}
function ABd(b){Nx();return ABw(b,10);}
function CT(b){var c,d,e;Nx();if(Z(b,Bb))return 64;c=0;d=CJ(b,32);if(Dr(d,Bb))c=32;else d=b;e=CJ(d,16);if(Z(e,Bb))e=d;else c=c|16;d=CJ(e,8);if(Z(d,Bb))d=e;else c=c|8;e=CJ(d,4);if(Z(e,Bb))e=d;else c=c|4;d=CJ(e,2);if(Z(d,Bb))d=e;else c=c|2;if(Dr(CJ(d,1),Bb))c=c|1;return (64-c|0)-1|0;}
function Ws(b){var c,d,e;Nx();if(Z(b,Bb))return 64;c=0;d=D4(b,32);if(Dr(d,Bb))c=32;else d=b;e=D4(d,16);if(Z(e,Bb))e=d;else c=c|16;d=D4(e,8);if(Z(d,Bb))d=e;else c=c|8;e=D4(d,4);if(Z(e,Bb))e=d;else c=c|4;d=D4(e,2);if(Z(d,Bb))d=e;else c=c|2;if(Dr(D4(d,1),Bb))c=c|1;return (64-c|0)-1|0;}
function AY7(){Bjl=F($rt_longcls());}
var HZ=D(BR);
function ZL(a,b){CV(a,b);}
var P$=D(HZ);
function A_t(){var a=new P$();AZZ(a);return a;}
function AZZ(a){ZL(a,B(492));a.et(AOp(),1);}
function AOp(){var jsObj=new Bullet.btDbvtBroadphase();return Bullet.getPointer(jsObj);}
var MO=D(0);
function QJ(){C.call(this);this.yZ=null;}
function Bcp(){var a=new QJ();ARK(a);return a;}
function ARK(a){J(a);a.yZ=AY6();}
function AKa(a,b,c){ATG(a.yZ,$rt_ustr(b),c);}
function AY6(){var soundManager=new SoundManager();soundManager.debugMode=false;return soundManager;}
function ATG(b,c,d){b.setup({url:c,onready:function(){d.onready();},ontimeout:function(status){d.ontimeout();}});}
function Sv(){var a=this;C.call(a);a.le=null;a.p3=null;a.dl=0;a.zQ=0;}
function A2Z(a){var b=new Sv();AJD(b,a);return b;}
function AJD(a,b){J(a);while(b>=a.dl){a.dl=a.dl<<1|1;}a.dl=a.dl<<1|1;a.le=Bc(a.dl+1|0);a.p3=Bc(a.dl+1|0);a.zQ=b;}
function AI4(a,b,c){var d,e,f;d=0;e=b&a.dl;while(a.le.data[e]&&a.le.data[e]!=b){f=d+1|0;d=f&a.dl;f=e+d|0;e=f&a.dl;}a.le.data[e]=b;a.p3.data[e]=c;}
function A1E(a,b){var c,d,e,f;c=b&a.dl;d=0;while(true){e=a.le.data[c];if(!e)break;if(e==b)return a.p3.data[c];f=d+1|0;d=f&a.dl;f=c+d|0;c=f&a.dl;}return a.zQ;}
var G9=D(0);
var Qq=D();
function A80(a,b){return a.Lr(b);}
function AEY(a){return a.NX();}
function GO(){var a=this;C.call(a);a.jN=null;a.zp=0.0;a.zs=0.0;a.O7=0.0;a.O5=0.0;a.nU=0;a.mL=0;}
function ATe(a){var b=new GO();AUk(b,a);return b;}
function AUk(a,b){J(a);if(b===null)G(W(B(493)));a.jN=b;a.Mg(0,0,b.bp(),b.bm());}
function A5U(a,b,c,d,e){var f,g;f=1.0/a.jN.bp();g=1.0/a.jN.bm();a.Mv(b*f,c*g,(b+d|0)*f,(c+e|0)*g);a.nU=UL(d);a.mL=UL(e);}
function AEm(a,b,c,d,e){var f,g,h,i,j,k,l;f=a.jN.bp();g=a.jN.bm();h=CD(d-b);i=f;a.nU=Dc(h*i);h=CD(e-c);j=g;a.mL=Dc(h*j);if(a.nU==1&&a.mL==1){k=0.25/i;b=b+k;d=d-k;l=0.25/j;c=c+l;e=e-l;}a.zp=b;a.zs=c;a.O7=d;a.O5=e;}
function ARE(a){return a.jN;}
function AFC(a){return a.nU;}
function ACH(a){return a.mL;}
function Ry(){Jp.call(this);this.sX=0.0;}
function A9X(){var a=new Ry();AS8(a);return a;}
function A_2(a){var b=new Ry();Ub(b,a);return b;}
function AS8(a){Ub(a,BbW());}
function Ub(a,b){SF(a);a.sX=1.0;a.F2(b);}
function AW2(a,b,c,d){a.G5(0,0,b,c);a.Jz(b*a.sX,c*a.sX);a.Ot(d);}
function U4(){var a=this;C.call(a);a.el=null;a.gB=null;a.ca=0;a.Jl=0;}
function BaZ(a,b,c,d){var e=new U4();AOy(e,a,b,c,d);return e;}
function AOy(a,b,c,d,e){J(a);a.Jl=b;a.el=ES(d,c);a.gB=ES(e,c);}
function ALo(a,b){a.Mk(b,0,b.ca);}
function ATF(a,b,c,d){var e;if((c+d|0)>b.ca)G(W((((((((I()).a(B(494))).j(c)).a(B(430))).j(d)).a(B(431))).j(b.ca)).b()));e=(a.ca+d|0)-c|0;if(e>=a.el.data.length)a.jA(Bf(8,e*1.75|0));Y(b.el,c,a.el,a.ca,d);Y(b.gB,c,a.gB,a.ca,d);a.ca=a.ca+d|0;}
function A1u(a){G7(a.el,0,a.ca,null);G7(a.gB,0,a.ca,null);a.ca=0;}
function ARo(a,b){var c,d,e;c=ES((Cf(a.el)).gg(),b);d=c.data;Y(a.el,0,c,0,Bq(a.ca,d.length));a.el=c;e=ES((Cf(a.gB)).gg(),b);d=e.data;Y(a.gB,0,e,0,Bq(a.ca,d.length));a.gB=e;}
var P8=D(IB);
function A$E(){var a=new P8();A0t(a);return a;}
function A0t(a){Ta(a);}
function AIe(a){var b;b=(YF(a)).f0(1);b.bf=1;return b;}
function QA(){var a=this;C.call(a);a.kb=null;a.gy=null;a.j2=null;a.Lh=0;a.Fe=0;a.uI=0;}
function A_k(){var a=new QA();AFb(a);return a;}
function Bjm(a,b,c,d){var e=new QA();Oe(e,a,b,c,d);return e;}
function Bjn(a,b,c){var d=new QA();TD(d,a,b,c);return d;}
function Bjo(a,b,c){var d=new QA();XL(d,a,b,c);return d;}
function AFb(a){Oe(a,BfB.nY(B(495)),BfB.nY(B(496)),0,1);}
function Oe(a,b,c,d,e){TD(a,Ba3(b,d),ATe(AQf(c,0)),e);a.uI=1;}
function TD(a,b,c,d){var e,f;if(c===null)e=null;else{f=X(GO,1);f.data[0]=c;e=ADu(f);}XL(a,b,e,d);}
function XL(a,b,c,d){var e,f,g;J(a);a.Lh=b.qZ;a.kb=b;a.Fe=d;if(c!==null&&c.h){a.gy=c;a.uI=0;}else{if(b.hm===null)G(W(B(497)));e=b.hm.data.length;a.gy=DH(e);f=0;while(f<e){g=b.r6===null?BfB.Pi(b.hm.data[f]):BfB.Ni(b.hm.data[f],b.r6.Nw());a.gy.E(ATe(AQf(g,0)));f=f+1|0;}a.uI=1;}a.j2=a.JR();a.G2(b);}
function ASs(a,b){var c,d,e,f,g,h,i,j;c=b.g3.data;d=c.length;e=0;while(e<d){a:{f=c[e];if(f!==null){g=f.data;h=g.length;i=0;while(true){if(i>=h)break a;j=g[i];if(j!==null)b.Ew(j,a.gy.l(j.jO));i=i+1|0;}}}e=e+1|0;}if(b.ii!==null)b.Ew(b.ii,a.gy.l(b.ii.jO));}
function AHL(a,b,c,d,e){var f;a.j2.K();f=a.j2.IT(c,d,e);a.j2.Mx(b);return f;}
function A79(a,b,c,d,e){(a.j2.ym()).hJ(b,c,d,e);}
function APc(a){return a.gy;}
function A7V(a){return Bc9(a,a.Fe);}
var H_=D(IN);
function Sx(a,b){ZT(a,b);}
var G0=D(H_);
function Xa(a,b){Sx(a,b);}
var Ib=D(G0);
function AAa(a,b){Xa(a,b);}
var T8=D(Ib);
function BcY(a){var b=new T8();ALV(b,a);return b;}
function ALV(a,b){var c;AAa(a,B(498));Fg();c=Beo;Ge(b,c);a.et(A1S(c.dv()),1);}
function A7M(a,b,c){var d,e,f;Fg();d=Beo;Ge(c,d);e=a.b1;f=d.dv();A6B(e,b,f);VB(d,c);}
function A1S(b){var boxHalfExtentsJSObj=Bullet.wrapPointer(b,Bullet.btVector3);var jsObj=new Bullet.btBoxShape(boxHalfExtentsJSObj);return Bullet.getPointer(jsObj);}
function A6B(b,c,d){var jsObj=Bullet.wrapPointer(b,Bullet.btBoxShape);var inertiaJSObj=Bullet.wrapPointer(d,Bullet.btVector3);jsObj.calculateLocalInertia(c,inertiaJSObj);}
function Yn(){var a=this;C.call(a);a.fb=null;a.dX=null;a.cG=null;a.dy=null;a.lr=0;}
function Bbr(){var a=new Yn();ADe(a);return a;}
function BdH(a,b){var c=new Yn();AXY(c,a,b);return c;}
function ADe(a){J(a);a.lr=1;}
function AXY(a,b,c){J(a);a.lr=1;a.fb=b;a.dX=c;}
function ANS(a,b){b.c9=a.dX;b.cP.B5(a.fb);b.dI=a.dy;return b;}
function AOW(a){return (Bbr()).O8(a);}
function A24(a,b){var c;a:{a.fb=Bde(b.fb);a.dX=b.dX;a.lr=b.lr;if(b.cG===null){a.cG=null;a.dy=null;}else{if(a.cG!==null)a.cG.K();else a.cG=BaZ(1,b.cG.ca,F(LB),F(Cq));a.cG.N5(b.cG);if(!(a.dy!==null&&a.dy.data.length==a.cG.ca))a.dy=X(Cq,a.cG.ca);c=0;while(true){if(c>=a.dy.data.length)break a;if(a.dy.data[c]===null)a.dy.data[c]=BO();c=c+1|0;}}}return a;}
function Ti(){var a=this;Q.call(a);a.AM=null;a.OM=null;}
function BaG(a,b){var c=new Ti();ASr(c,a,b);return c;}
function ASr(a,b,c){a.OM=b;a.AM=c;Be(a);}
function AGX(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.b5^a.AM.eE(c):0;}
function Th(){var a=this;Q.call(a);a.Eb=null;a.zj=null;a.IS=null;}
function A$5(a,b,c){var d=new Th();A22(d,a,b,c);return d;}
function A22(a,b,c,d){a.IS=b;a.Eb=c;a.zj=d;Be(a);}
function ATw(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.b5^a.Eb.eE(c):0;return a.zj.p(b)&&!d?1:0;}
var C4=D(Bw);
var Bjp=null;var Bjq=null;var Bjr=null;var Bjs=null;var Bjt=null;var Bju=null;var BgV=null;var Bjv=null;function AWI(){AWI=N(C4);ASY();}
function Fx(a,b){var c=new C4();Uv(c,a,b);return c;}
function Uv(a,b,c){AWI();Cs(a,b,c);}
function ASY(){Bjp=Fx(B(107),0);Bjq=Fx(B(499),1);Bjr=Fx(B(500),2);Bjs=Fx(B(501),3);Bjt=Fx(B(502),4);Bju=Fx(B(503),5);BgV=Fx(B(504),6);Bjv=H(C4,[Bjp,Bjq,Bjr,Bjs,Bjt,Bju,BgV]);}
var AAf=D(T);
function A_E(){var a=new AAf();AUC(a);return a;}
function AUC(a){Bo(a);}
function A2W(a){var b;b=A_L(a);b.bf=1;return b;}
var NW=D(0);
var Wb=D(Ed);
function Bad(a,b,c,d){var e=new Wb();A1$(e,a,b,c,d);return e;}
function A1$(a,b,c,d,e){KE(a,b,c,d,e);}
function A5x(a,b,c,d){var e,f,g,h;e=a.f8.i8();f=a.f8.iz();g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.bu.cf()|0)>d.J())break a;h=a.bu.bI(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.k.e(b,c,d);}if((b+a.bu.cf()|0)>d.J()){d.d2=1;return (-1);}h=a.bu.bI(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
var QG=D(Gl);
function BaA(a){var b=new QG();ADv(b,a);return b;}
function ADv(a,b){var c,d,e,f;Yi(a);c=AXy();d=c.o4();e=A7W();f=d.getElementById($rt_ustr(b));BgW=Bau(e,f);Tj(new N_);}
var KU=D(0);
var KZ=D(0);
function W$(){var a=this;C.call(a);a.kx=0;a.f2=null;a.hO=null;a.xG=0;a.sh=0;a.vM=0.0;a.sf=0;a.rQ=0;a.iN=0;}
function A$A(){var a=new W$();AQ0(a);return a;}
function Bjw(a,b){var c=new W$();Zr(c,a,b);return c;}
function AQ0(a){Zr(a,51,0.800000011920929);}
function Zr(a,b,c){var d;J(a);if(c>0.0&&c<1.0){a.vM=c;d=GN(b,c);a.sf=d*c|0;a.iN=d-1|0;a.rQ=CT(O(a.iN));a.f2=Bc(d);a.hO=Bc(d);return;}G(W((((I()).a(B(42))).cA(c)).b()));}
function AM3(a,b){return Cu(CJ(CP(O(b),Ca(2135587861, 2654435769)),a.rQ));}
function MJ(a,b){var c,d,e;c=a.f2;d=a.eX(b);while(true){e=c.data[d];if(!e)return  -(d+1|0)|0;if(e==b)break;d=(d+1|0)&a.iN;}return d;}
function AGE(a,b,c){var d,e;if(!b){a.xG=c;if(!a.sh){a.sh=1;a.kx=a.kx+1|0;}return;}d=MJ(a,b);if(d>=0){a.hO.data[d]=c;return;}e= -(d+1|0)|0;a.f2.data[e]=b;a.hO.data[e]=c;e=a.kx+1|0;a.kx=e;if(e>=a.sf)Rn(a,a.f2.data.length<<1);}
function PX(a,b,c){var d,e,f;d=a.f2;e=a.eX(b);while(true){f=d.data;if(!f[e])break;e=(e+1|0)&a.iN;}f[e]=b;a.hO.data[e]=c;}
function AKl(a,b,c){var d;if(!b){if(a.sh)c=a.xG;return c;}d=MJ(a,b);if(d>=0)c=a.hO.data[d];return c;}
function Rn(a,b){var c,d,e,f,g;a:{c=a.f2.data.length;a.sf=b*a.vM|0;a.iN=b-1|0;a.rQ=CT(O(a.iN));d=a.f2;e=a.hO;a.f2=Bc(b);a.hO=Bc(b);if(a.kx>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g)PX(a,g,e.data[f]);f=f+1|0;}}}}
function WQ(){Q.call(this);this.OV=null;}
function Bas(a){var b=new WQ();ARr(b,a);return b;}
function ARr(a,b){a.OV=b;Be(a);}
function A1P(a,b){return JI(b);}
function Pi(){var a=this;Q.call(a);a.oM=null;a.KE=null;}
function BbB(a,b){var c=new Pi();ARz(c,a,b);return c;}
function ARz(a,b,c){a.KE=b;a.oM=c;Be(a);}
function AKD(a,b){return a.bD^a.oM.eE(b);}
function AYO(a){var b,c;b=I();c=a.oM.k7(0);while(c>=0){b.qI(Er(c));b.U(124);c=a.oM.k7(c+1|0);}if(b.i()>0)b.EE(b.i()-1|0);return b.b();}
var Uw=D(CE);
function A_Z(a,b,c){var d=new Uw();APS(d,a,b,c);return d;}
function APS(a,b,c,d){E_(a,b,c,d);Jn();b.Q(Bfx);}
function AWw(a,b,c,d){var e;while(true){e=a.Y.e(b,c,d);if(e<=0)break;b=e;}return a.k.e(b,c,d);}
function To(){var a=this;C.call(a);a.I6=0;a.Ji=Bb;a.sd=null;a.Dw=null;a.Bn=Bb;a.xa=null;}
function BbK(a,b,c,d){var e=new To();ACm(e,a,b,c,d);return e;}
function ACm(a,b,c,d,e){J(a);a.sd=b;a.Dw=c;a.Bn=d;a.xa=e;}
function Da(){BH.call(this);this.dW=null;}
var Bjx=Bb;var Bjy=Bb;var Bjz=Bb;var BjA=Bb;var BjB=Bb;var BjC=Bb;var BjD=Bb;var BjE=Bb;function Ch(){Ch=N(Da);AZW();}
function BjF(a){var b=new Da();I8(b,a);return b;}
function BjG(a,b){var c=new Da();Jy(c,a,b);return c;}
function AYr(a,b,c,d,e){var f=new Da();Zp(f,a,b,c,d,e);return f;}
function BaB(a){var b=new Da();Y7(b,a);return b;}
function T2(b){Ch();return Z(Bs(b,BjE),Bb)?0:1;}
function HA(b,c,d,e){Ch();return AYr(Bjx,b,c,d,e);}
function YB(b,c,d,e){Ch();return AYr(Bjy,b,c,d,e);}
function I8(a,b){Ch();Gi(a,b);a.dW=DY();if(T2(b))return;G(U(B(505)));}
function Jy(a,b,c){Ch();I8(a,b);if(c!==null)a.dW.eI(c);}
function Zp(a,b,c,d,e,f){Ch();I8(a,b);a.dW.hJ(c,d,e,f);}
function Y7(a,b){Ch();Jy(a,b.dt,b.dW);}
function AH7(a){return BaB(a);}
function AQ_(a){var b,c;b=G$(a);c=(953*b|0)+a.dW.rH()|0;return c;}
function AZW(){Bjx=BN(B(506));Bjy=BN(B(507));Bjz=BN(B(508));BjA=BN(B(509));BjB=BN(B(510));BjC=BN(B(511));BjD=BN(B(512));BjE=BM(BM(BM(BM(BM(BM(Bjz,Bjx),Bjy),BjA),BjB),BjC),BjD);}
function G2(){var a=this;V.call(a);a.h0=null;a.Df=0;a.y1=0;}
var BjH=null;var BjI=null;function O4(){O4=N(G2);A2c();}
function BcL(a,b){var c=new G2();PL(c,a,b);return c;}
function PL(a,b,c){O4();BK(a);a.h0=ANU();a.Df=b;a.y1=c;}
function A2t(a,b,c,d,e){var f,g,h,i,j,k;if(d.ct===null){f=b.bi;g=B0(b,c);O4();f.zK(g,BjH,0,BjH.data.length);}else{h=d.dx;O4();h.uf(BjI);Ch();if(Cp(e,BjC))a.h0.HR((BB(e,BjC)).dW);a:{Jm();if(Cp(e,Bi7)){i=Bi7;j=(BB(e,i)).g$;k=a.Df;while(true){if(k>=j.h)break a;a.h0.O6((j.l(k)).bl,(j.l(k)).e2);k=k+1|0;}}}b:{A1Q();if(Cp(e,Biu)){j=(BB(e,Biu)).DI;k=a.y1;while(true){if(k>=j.h)break b;a.h0.Lt((j.l(k)).bl,(j.l(k)).ew,BjI,(j.l(k)).dw);k=k+1|0;}}}a.h0.Mh();b.bi.zK(B0(b,c),a.h0.ce,0,a.h0.ce.data.length);}}
function A2c(){BjH=Bao([1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0]);BjI=S();}
function Nq(){var a=this;C.call(a);a.hl=null;a.BX=0;a.sw=null;a.oP=null;a.zr=0;a.Go=0.0;a.Gn=0.0;a.uY=null;a.GI=0.0;a.du=null;a.dE=null;a.cI=null;a.sK=null;}
var BjJ=null;function Bca(){Bca=N(Nq);AKZ();}
function Bc9(a,b){var c=new Nq();ABh(c,a,b);return c;}
function ABh(a,b,c){var d,e,f;Bca();J(a);a.sw=Bp();a.oP=Bp();a.uY=CL(1.0,1.0,1.0,1.0);a.hl=b;a.BX=c;d=b.gy.h;if(!d)G(W(B(513)));a:{a.du=X($rt_arraycls($rt_floatcls()),d);a.dE=Bc(d);if(d>1){a.cI=X(GG,d);e=0;f=a.cI.data.length;while(true){if(e>=f)break a;a.cI.data[e]=GS();e=e+1|0;}}}a.sK=Bc(d);}
function A39(a){return a.uY;}
function AGv(a,b){var c,d,e,f;c=a.hl.Nn();d=0;e=a.du.data.length;while(d<e){if(a.dE.data[d]>0){f=a.du.data[d];b.GT((c.l(d)).AN(),f,0,a.dE.data[d]);}d=d+1|0;}}
function A3g(a){var b,c;a.Go=0.0;a.Gn=0.0;RL(a.oP,1);a.oP.K();a.sw.K();b=0;c=a.dE.data.length;while(b<c){if(a.cI!==null)a.cI.data[b].K();a.dE.data[b]=0;b=b+1|0;}}
function Ve(a,b){var c,d,e,f,g,h,i,j,k,l;a:{if(a.du.data.length==1){c=0;d=0;e=b.cl.h;while(d<e){c=c+(b.cl.l(d)).bj.h|0;d=d+1|0;}Nk(a,0,c);}else{f=a.sK;g=f.data;d=0;e=g.length;while(d<e){g[d]=0;d=d+1|0;}d=0;h=b.cl.h;while(d<h){i=(b.cl.l(d)).bj;j=0;k=i.h;while(j<k){l=(i.l(j)).jO;g[l]=g[l]+1|0;j=j+1|0;}d=d+1|0;}d=0;while(true){if(d>=e)break a;Nk(a,d,g[d]);d=d+1|0;}}}}
function Nk(a,b,c){var d,e,f;if(a.cI!==null&&c>a.cI.data[b].cn.data.length)a.cI.data[b].NY(c-a.cI.data[b].bS|0);d=a.dE.data[b]+(c*20|0)|0;e=a.du.data[b];if(e===null)a.du.data[b]=B9(d);else if(e.data.length<d){f=B9(d);Y(e,0,f,0,a.dE.data[b]);a.du.data[b]=f;}}
function RA(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=a.hl.gy.h;if(a.du.data.length<e){f=X($rt_arraycls($rt_floatcls()),e);Y(a.du,0,f,0,a.du.data.length);a.du=f;g=Bc(e);Y(a.dE,0,g,0,a.dE.data.length);a.dE=g;h=X(GG,e);i=0;if(a.cI!==null){i=a.cI.data.length;Y(a.cI,0,h,0,a.cI.data.length);}while(i<e){h.data[i]=GS();i=i+1|0;}a.cI=h;a.sK=Bc(e);}a.sw.E(b);Ve(a,b);i=0;j=b.cl.h;while(i<j){k=b.cl.l(i);l=k.bj;m=k.bo;n=k.jU.nj();o=c+k.dd;p=d+k.iB;q=0;r=l.h;while(q<r){s=l.l(q);o=o+m.nW(q);SM(a,s,o,p,n);q=q+1|0;}i=i+
1|0;}Bu();a.GI=BhM;}
function SM(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;f=a.hl.kb.eH;g=a.hl.kb.zL;h=c+b.dn*f;i=d+b.i_*g;j=b.cs*f;k=b.cK*g;l=b.vm;m=b.A0;n=b.pU;o=b.s2;if(a.BX){h=Dc(h);i=Dc(i);j=Dc(j);k=Dc(k);}p=h+j;q=i+k;r=b.jO;s=a.dE.data[r];t=a.dE.data;t[r]=t[r]+20|0;if(a.cI!==null){u=a.cI.data[r];v=a.zr;a.zr=v+1|0;u.iO(v);}w=a.du.data[r];t=w.data;x=s+1|0;t[s]=h;v=x+1|0;t[x]=i;x=v+1|0;t[v]=e;v=x+1|0;t[x]=l;y=v+1|0;t[v]=n;x=y+1|0;t[y]=h;v=x+1|0;t[x]=q;x=v+1|0;t[v]=e;v=x+1|0;t[x]=l;x=v+1|0;t[v]=o;v=x+1|0;t[x]=p;x
=v+1|0;t[v]=q;v=x+1|0;t[x]=e;x=v+1|0;t[v]=m;v=x+1|0;t[x]=o;x=v+1|0;t[v]=p;y=x+1|0;t[x]=i;v=y+1|0;t[y]=e;x=v+1|0;t[v]=m;t[x]=n;}
function ASz(a,b,c,d){return a.HJ(b,c,d,0,b.i(),0.0,8,0,null);}
function A8Z(a,b,c,d,e,f,g,h,i,j){var k;k=SI(F(EE));a.oP.E(k);k.pv(a.hl,b,e,f,a.uY,g,h,i,j);a.He(k,c,d);return k;}
function AFq(a,b,c,d){RA(a,b,c,d+a.hl.kb.lT);}
function AKZ(){BjJ=CL(1.0,1.0,1.0,1.0);}
function Pf(){var a=this;Q.call(a);a.BO=null;a.GH=null;}
function Bci(a,b){var c=new Pf();A5e(c,a,b);return c;}
function A5e(a,b,c){a.GH=b;a.BO=c;Be(a);}
function AFx(a,b){return a.BO.p(b);}
function Pg(){var a=this;Q.call(a);a.wL=null;a.Pg=null;}
function BcB(a,b){var c=new Pg();ALK(c,a,b);return c;}
function ALK(a,b,c){a.Pg=b;a.wL=c;Be(a);}
function AYu(a,b){return a.wL.p(b)?0:1;}
function Ph(){var a=this;Q.call(a);a.yB=0;a.En=null;a.zm=null;a.FK=null;}
function A_0(a,b,c,d){var e=new Ph();AFI(e,a,b,c,d);return e;}
function AFI(a,b,c,d,e){a.FK=b;a.yB=c;a.En=d;a.zm=e;Be(a);}
function A9B(a,b){return !(a.yB^a.En.p(b))&&!a.zm.p(b)?0:1;}
var XS=D();
function VI(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.A3.data;f=b.Cj;b.Cj=f+1|0;g=A3p(e[f]);h=(g%2|0)!=1?0:1;c=c+Cb(d,g/2|0)|0;d=d*46|0;if(!h)break;}return c;}
function OH(b){var c,d;c=VI(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function A3p(b){if(b<34)return b-32|0;if(b>=92)return (b-32|0)-2|0;return (b-32|0)-1|0;}
function Pz(){var a=this;Q.call(a);a.EA=0;a.vr=null;a.vC=null;a.Gw=null;}
function BdM(a,b,c,d){var e=new Pz();AYp(e,a,b,c,d);return e;}
function AYp(a,b,c,d,e){a.Gw=b;a.EA=c;a.vr=d;a.vC=e;Be(a);}
function AH8(a,b){return !(a.EA^a.vr.p(b))&&!a.vC.p(b)?1:0;}
function Pj(){var a=this;Q.call(a);a.DS=0;a.AK=null;a.xs=null;a.Li=null;}
function BdJ(a,b,c,d){var e=new Pj();AXn(e,a,b,c,d);return e;}
function AXn(a,b,c,d,e){a.Li=b;a.DS=c;a.AK=d;a.xs=e;Be(a);}
function AVh(a,b){return a.DS^a.AK.p(b)&&a.xs.p(b)?1:0;}
function Og(){BI.call(this);this.l2=null;}
function BdK(a){var b=new Og();A6M(b,a);return b;}
function A6M(a,b){var c,d;CZ(a);c=I();d=0;while(d<b.i()){c.U(Dl(Dw(b.f(d))));d=d+1|0;}a.l2=c.b();a.bP=c.i();}
function AK$(a,b,c){var d;d=0;while(true){if(d>=a.l2.i())return a.l2.i();if(a.l2.f(d)!=Dl(Dw(c.f(b+d|0))))break;d=d+1|0;}return (-1);}
function AIS(a){return (((I()).a(B(514))).a(a.l2)).b();}
function Pk(){var a=this;Q.call(a);a.Dt=0;a.Ai=null;a.DP=null;a.LP=null;}
function A_W(a,b,c,d){var e=new Pk();ACW(e,a,b,c,d);return e;}
function ACW(a,b,c,d,e){a.LP=b;a.Dt=c;a.Ai=d;a.DP=e;Be(a);}
function ANK(a,b){return a.Dt^a.Ai.p(b)&&a.DP.p(b)?0:1;}
function Pl(){var a=this;Q.call(a);a.EM=null;a.x4=0;a.Fk=null;}
function A91(a,b,c){var d=new Pl();AMN(d,a,b,c);return d;}
function AMN(a,b,c,d){a.Fk=b;a.EM=c;a.x4=d;Be(a);}
function AJH(a,b){return a.EM.p(b)&&a.x4^a.Fk.bd.eE(b)?1:0;}
function Tz(){Q.call(this);this.Jx=null;}
function BdF(a){var b=new Tz();ASO(b,a);return b;}
function ASO(a,b){a.Jx=b;Be(a);}
function AJv(a,b){return Rc(b);}
function Hn(){DL.call(this);this.e2=null;}
function AIj(){var a=new Hn();AZ7(a);return a;}
function AZ7(a){HH(a);a.e2=S();}
function ADz(a,b){return a.NG(b.bl,b.e2);}
function AE9(a,b,c){if(b!==null)a.bl.eI(b);if(c!==null)(a.e2.M(c)).bU();return a;}
function AOH(a,b,c,d,e,f,g){a.bl.hJ(b,c,d,1.0);(a.e2.I(e,f,g)).bU();return a;}
function ADl(a,b){return b instanceof Hn&&a.D$(b)?1:0;}
function A29(a,b){var c;a:{b:{if(b!==null){if(b===a)break b;if(a.bl.z(b.bl)&&a.e2.z(b.e2))break b;}c=0;break a;}c=1;}return c;}
function Pe(){var a=this;Q.call(a);a.DC=null;a.CA=0;a.x2=null;}
function BdI(a,b,c){var d=new Pe();A1F(d,a,b,c);return d;}
function A1F(a,b,c,d){a.x2=b;a.DC=c;a.CA=d;Be(a);}
function A6G(a,b){return a.DC.p(b)&&a.CA^a.x2.bd.eE(b)?0:1;}
var Y6=D(CK);
var Li=D();
var BjK=null;function ABz(){ABz=N(Li);AC1();}
function Yz(b,c,d,e){var f;ABz();a:{b:{f=BjK;Ri();if(f===BjL){if(Bfz.bp()!=Bfz.wN())break b;f=Bfz;if(f.bm()!=Bfz.Ed())break b;}BfC.ov(b,c,d,e);break a;}BfC.ov(LJ(b),LM(c),LJ(d),LM(e));}}
function LJ(b){ABz();return Cb(b,Bfz.wN())/Bfz.bp()|0;}
function LM(b){ABz();return Cb(b,Bfz.Ed())/Bfz.bm()|0;}
function AC1(){Ri();BjK=BjL;}
var YJ=D(EO);
function F6(a){var b=new YJ();AJT(b,a);return b;}
function I(){var a=new YJ();A8i(a);return a;}
function AJT(a,b){JB(a,b);}
function A8i(a){JO(a);}
function A15(a,b){X9(a,b);return a;}
function ACF(a,b){KY(a,b);return a;}
function AMd(a,b){O$(a,b);return a;}
function AYY(a,b){ABf(a,b);return a;}
function AIg(a,b){S4(a,b);return a;}
function ACt(a,b){MK(a,b);return a;}
function AFK(a,b,c,d){NU(a,b,c,d);return a;}
function A5X(a,b){M9(a,b);return a;}
function AUY(a,b){SB(a,b);return a;}
function AYb(a,b,c){Rd(a,b,c);return a;}
function A6i(a,b,c){Y5(a,b,c);return a;}
function A4P(a,b,c,d,e){L0(a,b,c,d,e);return a;}
function A8F(a,b,c){Qa(a,b,c);return a;}
function A2E(a,b,c){Oa(a,b,c);return a;}
function AMJ(a,b,c){N0(a,b,c);return a;}
function AQY(a,b,c){ABe(a,b,c);return a;}
function APJ(a,b){AAY(a,b);return a;}
function A0G(a,b,c){Np(a,b,c);return a;}
function A7P(a,b,c){return Wn(a,b,c);}
function A0M(a,b){AAK(a,b);}
function AGP(a,b,c,d,e){XC(a,b,c,d,e);}
function A4V(a,b,c){return Z7(a,b,c);}
function A0y(a,b,c,d,e){return a.Kq(b,c,d,e);}
function AGj(a,b,c,d){return a.Ij(b,c,d);}
function AU5(a){return MB(a);}
function AEA(a){return M3(a);}
function AKm(a,b){L9(a,b);}
function AKw(a,b,c){return a.FR(b,c);}
function A12(a,b,c){return a.NJ(b,c);}
function A1t(a,b,c){return a.J7(b,c);}
function AY_(a,b,c){return a.OR(b,c);}
function AE7(a,b,c){return a.Jj(b,c);}
function ASu(a,b,c){return a.F0(b,c);}
function Qp(){var a=this;BC.call(a);a.n2=null;a.pk=null;}
function K4(a,b){var c=new Qp();ARL(c,a,b);return c;}
function ARL(a,b,c){CM(a);a.n2=b;a.pk=c;}
function ADJ(a,b,c,d){var e;e=a.n2.e(b,c,d);if(e<0)e=a.pk.e(b,c,d);if(e>=0)return e;return (-1);}
function A3s(a,b){a.k=b;a.pk.Q(b);a.n2.Q(b);}
function A3_(a){return (((((I()).a(B(515))).dC(a.n2)).a(B(516))).dC(a.pk)).b();}
function AEH(a,b){return 1;}
function AEf(a,b){return 1;}
var AAO=D(Bm);
function A96(){var a=new AAO();ASd(a);return a;}
function ASd(a){Ct(a);}
var OC=D();
function BcJ(){var a=new OC();AKg(a);return a;}
function AKg(a){J(a);}
var Gh=D(0);
var OB=D();
function A$V(){var a=new OB();AVw(a);return a;}
function AVw(a){J(a);}
var LO=D(0);
function EQ(){var a=this;C.call(a);a.hx=null;a.g0=null;}
function BjM(a,b){var c=new EQ();LG(c,a,b);return c;}
function LG(a,b,c){J(a);a.hx=b;a.g0=c;}
function Mp(){var a=this;EQ.call(a);a.pp=null;a.yc=0;}
function Bcy(a,b){var c=new Mp();ANF(c,a,b);return c;}
function ANF(a,b,c){LG(a,b,c);a.yc=b.by();}
function AD3(a){return a.hx.by();}
function AQr(a,b,c){return a.yc==b.by()&&a.hx.z(b)?1:0;}
var EV=D(Cv);
function BbO(){var a=new EV();A6N(a);return a;}
function A6N(a){Eq(a,0);}
function AQM(a,b,c,d){if(d.B4()!=1&&b!=d.J())return (-1);d.KZ();d.uG(0,b);return b;}
function AVJ(a){return B(517);}
function Ze(){var a=this;C.call(a);a.r3=null;a.iE=null;a.ke=null;a.er=null;a.gX=null;a.oE=null;}
function Bc$(a){var b=new Ze();A0Y(b,a);return b;}
function A0Y(a,b){J(a);a.r3=DC();a.iE=DC();a.ke=DC();a.er=DC();a.gX=DC();a.oE=b;}
function AYE(a,b){(D$()).AF((((I()).a(a.oE)).a(b)).b(),A9O(a,b));}
function AMR(a,b,c,d,e){(D$()).Lm((((I()).a(a.oE)).a(b)).b(),c,d,A$Q(a,e,c,b));}
function A56(a,b,c){(D$()).m0((((I()).a(a.oE)).a(b)).b(),c);}
function AWU(a,b,c,d){a:{Bbz();switch(Bhf.data[BD(b)]){case 1:a.er.x(c,d);break a;case 2:break;case 3:a.gX.x(c,d);break a;case 4:a.ke.x(c,d);break a;case 5:a.r3.x(c,null);break a;default:break a;}a.iE.x(c,d);}}
function ALG(a,b){var c,$$je;if(a.er.cY(b)){a:{try{c=WN((a.er.W(b)).xF(B(384)));}catch($$e){$$je=R($$e);if($$je instanceof Gx){break a;}else{throw $$e;}}return c;}return null;}if(a.iE.cY(b))return WN(Ce(1));if(a.gX.cY(b))return Pr(a.gX.W(b));if(!a.ke.cY(b))return null;return WN(Ce(1));}
function AH$(a,b){var c,d;a:{if(!a.er.cY(b)&&!a.iE.cY(b)&&!a.gX.cY(b)&&!a.ke.cY(b)){c=a.r3;if(!c.cY(b)){d=0;break a;}}d=1;}return d;}
function A42(a,b){return a.er.cY(b);}
function AVq(a,b){var c,$$je;if(a.er.cY(b)){a:{try{c=O(((a.er.W(b)).xF(B(384))).data.length);}catch($$e){$$je=R($$e);if($$je instanceof Gx){break a;}else{throw $$e;}}return c;}return O(((a.er.W(b)).Py()).data.length);}if(a.iE.cY(b))return O(1);if(a.gX.cY(b))return O(ND(a.gX.W(b)));if(!a.ke.cY(b))return Bb;return O(1);}
var S7=D(BI);
function FA(a){var b=new S7();A1Y(b,a);return b;}
function A1Y(a,b){U3(a,b);a.bP=0;}
function A5K(a,b,c){return 0;}
function AX7(a,b,c,d){var e,f,g,h,i;e=d.J();f=d.dH();while(true){g=B5(b,e);if(g>0)return (-1);if(g<0){h=c.f(b);if(BG(h)&&b>f){i=c.f(b-1|0);if(BX(i)){b=b+1|0;continue;}}}if(a.k.e(b,c,d)>=0)break;b=b+1|0;}return b;}
function AWb(a,b,c,d,e){var f,g,h,i;f=e.J();g=e.dH();while(true){if(c<b)return (-1);if(c<f){h=d.f(c);if(BG(h)&&c>g){i=d.f(c-1|0);if(BX(i)){c=c+(-1)|0;continue;}}}if(a.k.e(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AID(a){return B(518);}
function ATW(a,b){return 0;}
function JK(){BH.call(this);this.Hu=0;}
var BjN=Bb;function AFv(){AFv=N(JK);A6J();}
function A6J(){BjN=BN(B(519));}
function UB(){var a=this;C.call(a);a.ds=null;a.gr=null;a.sb=0;a.bT=0;}
function Tp(a,b){var c=new UB();A7f(c,a,b);return c;}
function BjO(a,b,c){var d=new UB();TU(d,a,b,c);return d;}
function A7f(a,b,c){TU(a,b,c,0);}
function TU(a,b,c,d){J(a);if(b===null)G(It());a.ds=b;a.gr=c;a.sb=d;a.bT=0;}
function A9s(a){var b,c;if(a.gr===null)G(It());a:{b=a.ds.i();if(a.bT<b){if(a.sb)return 1;c=a.bT;while(true){if(c>=b)break a;if(a.gr.eA(a.ds.f(c),0)==(-1))return 1;c=c+1|0;}}}return 0;}
function AD4(a){var b,c,d,e,f;if(a.gr===null)G(It());b=a.bT;c=a.ds.i();if(b<c){if(a.sb){if(a.gr.eA(a.ds.f(a.bT),0)>=0){d=a.ds;e=a.bT;a.bT=e+1|0;return Yu(d.f(e));}a.bT=a.bT+1|0;while(a.bT<c){if(a.gr.eA(a.ds.f(a.bT),0)>=0)return a.ds.cd(b,a.bT);a.bT=a.bT+1|0;}return a.ds.ef(b);}while(true){f=B5(b,c);if(f>=0)break;if(a.gr.eA(a.ds.f(b),0)<0)break;b=b+1|0;}a.bT=b;if(f<0){a.bT=a.bT+1|0;while(a.bT<c){if(a.gr.eA(a.ds.f(a.bT),0)>=0)return a.ds.cd(b,a.bT);a.bT=a.bT+1|0;}return a.ds.ef(b);}}G(A$i());}
function JT(){var a=this;C.call(a);a.dc=null;a.cN=0;a.mQ=Bb;}
function AY4(a){var b=new JT();A1W(b,a);return b;}
function A1W(a,b){var c,d,e,f;c=b.data;J(a);a.mQ=O(-1);d=c.length;if(!d)G(W(B(520)));e=X(E$,d);f=0;while(f<d){e.data[f]=c[f];f=f+1|0;}a.dc=e;a.cN=Vh(a);}
function DV(a,b){var c,d;c=CR(a);d=0;while(d<c){if((Cy(a,d)).fd==b)return Cy(a,d);d=d+1|0;}return null;}
function Vh(a){var b,c,d;b=0;c=0;while(c<a.dc.data.length){d=a.dc.data[c];d.cS=b;b=b+P6(d)|0;c=c+1|0;}return b;}
function CR(a){return a.dc.data.length;}
function Cy(a,b){return a.dc.data[b];}
function No(a,b){var c,d;if(b===a)return 1;if(!(b instanceof JT))return 0;c=b;if(a.dc.data.length!=c.dc.data.length)return 0;d=0;while(d<a.dc.data.length){if(!Kn(a.dc.data[d],c.dc.data[d]))return 0;d=d+1|0;}return 1;}
function Iv(a){var b,c;if(Z(a.mQ,O(-1))){b=Bb;c=0;while(c<a.dc.data.length){b=BM(b,O(a.dc.data[c].fd));c=c+1|0;}a.mQ=b;}return a.mQ;}
function Nj(a){return BM(Iv(a),D4(O(a.dc.data.length),32));}
function Kh(){var a=this;GO.call(a);a.MV=0.0;a.MT=0.0;a.NN=0;a.LO=0;}
function ABL(){var a=this;C.call(a);a.kG=null;a.sr=null;a.fg=null;a.of=null;a.ro=0;a.Dj=null;a.vH=null;}
function BjP(a,b,c){var d=new ABL();S9(d,a,b,c);return d;}
function BcC(){var a=new ABL();A8v(a);return a;}
function S9(a,b,c,d){J(a);a.sr=Bbi();a.fg=Bp();if(d===null)d=A9Q();a.vH=d;a.ro=b!==null?0:1;if(b===null)b=Bbf(Bac(1,1));a.of=b;if(c===null)c=BcA();a.Dj=c;}
function A8v(a){S9(a,null,null,null);}
function A2m(a,b){if(a.kG!==null)G(U(B(521)));a.kG=b;if(a.ro)a.of.gT();}
function AZK(a){var b,c,d;a.vH.GO(a.kG,a.fg);b=null;c=0;while(c<a.fg.h){d=a.fg.l(c);if(b!==d.kH){if(b!==null)b.be();b=d.kH;b.CG(a.kG,a.of);}b.MR(d);c=c+1|0;}if(b!==null)b.be();a.sr.ej();a.fg.K();}
function A5F(a){a.ej();if(a.ro)a.of.be();a.kG=null;}
function APZ(a,b,c){var d,e;d=a.fg.h;b.HS(a.fg,a.sr);while(d<a.fg.h){e=a.fg.l(d);e.ct=c;e.kH=a.Dj.I$(e);d=d+1|0;}}
var QI=D(EN);
function A9I(a,b,c,d,e,f){var g=new QI();ATJ(g,a,b,c,d,e,f);return g;}
function ATJ(a,b,c,d,e,f,g){Lq(a,b,c,d,e,f,g);}
function AS$(a,b){var c,d,e,f;c=a.cu.A.data;d=a.ci;e=b*4|0;f=c[d+e|0]&255|(a.cu.A.data[(a.ci+e|0)+1|0]&255)<<8|(a.cu.A.data[(a.ci+e|0)+2|0]&255)<<16|(a.cu.A.data[(a.ci+e|0)+3|0]&255)<<24;return $rt_intBitsToFloat(f);}
function A0S(a,b,c){var d,e,f,g;d=$rt_floatToIntBits(c);e=a.cu.A.data;f=a.ci;g=b*4|0;e[f+g|0]=d<<24>>24;a.cu.A.data[(a.ci+g|0)+1|0]=d>>8<<24>>24;a.cu.A.data[(a.ci+g|0)+2|0]=d>>16<<24>>24;a.cu.A.data[(a.ci+g|0)+3|0]=d>>24<<24>>24;}
function U0(){var a=this;C.call(a);a.Co=null;a.hv=null;a.N0=null;a.kP=null;a.uC=0.0;a.rj=Bb;a.sE=Bb;a.oG=0.0;a.kB=0.0;a.o9=0;}
function A$l(a){var b=new U0();ASZ(b,a);return b;}
function ASZ(a,b){J(a);a.uC=0.0;a.rj=D8();a.sE=O(-1);a.oG=0.0;a.kB=0.0;a.N0=b;a.hv=BgW.Em();a.Co=BgW.M$(b);a.kP=Bbq(a.Co);a.kP.ov(0,0,a.hv.width,a.hv.height);a.kP.vP(0.0,0.0,0.0,1.0);a.kP.D9(16384);}
function ASE(a){var b;b=D8();a.oG=Q1(D2(b,a.rj))/1000.0;a.rj=b;a.kB=a.kB+a.oG;a.o9=a.o9+1|0;if(a.kB>1.0){a.uC=a.o9;a.kB=0.0;a.o9=0;}}
function ARd(a){return a.kP;}
function AKI(a){return a.hv.width;}
function APv(a){return a.hv.height;}
function A3P(a){return a.hv.width;}
function A28(a){return a.hv.height;}
function A86(a){return a.oG;}
function ATp(a){return a.uC|0;}
function AC$(a,b){return 0;}
var XD=D(FF);
function BjQ(a){var b=new XD();AFc(b,a);return b;}
function AFc(a,b){Kl(a,b);}
var SU=D(T);
function Bc5(){var a=new SU();AD6(a);return a;}
function AD6(a){Bo(a);}
function AGQ(a){return (CO()).bG(0,127);}
function EE(){var a=this;C.call(a);a.cl=null;a.pu=0.0;a.nl=0.0;}
var BjR=null;var BjS=null;var BjT=null;function DE(){DE=N(EE);AWV();}
function BjU(){var a=new EE();ABi(a);return a;}
function BjV(a,b){var c=new EE();Pb(c,a,b);return c;}
function BjW(a,b,c,d,e,f){var g=new EE();Ss(g,a,b,c,d,e,f);return g;}
function BjX(a,b,c,d,e,f,g,h,i){var j=new EE();Z1(j,a,b,c,d,e,f,g,h,i);return j;}
function ABi(a){DE();J(a);a.cl=DH(1);}
function Pb(a,b,c){DE();J(a);a.cl=DH(1);a.Ly(b,c);}
function Ss(a,b,c,d,e,f,g){DE();J(a);a.cl=DH(1);a.NR(b,c,d,e,f,g);}
function Z1(a,b,c,d,e,f,g,h,i,j){DE();J(a);a.cl=DH(1);a.pv(b,c,d,e,f,g,h,i,j);}
function A5E(a,b,c){a.pv(b,c,0,c.i(),b.ym(),0.0,8,0,null);}
function A1D(a,b,c,d,e,f,g){a.pv(b,c,0,c.i(),d,e,f,g,null);}
function AFR(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by;k=a.cl;DE();BjR.DM(k);k.K();l=b.kb;if(d==e){a.pu=0.0;a.nl=l.eV;return;}if(j!==null)i=1;else if(g<=l.va*3.0)i=0;m=l.C2;if(m){n=1;o=BjT.h;while(n<o){BjS.jj(BjT.l(n));n=n+1|0;}BjT.K();BjT.E(f);}p=0.0;q=0.0;r=l.kd;s=null;t=d;u=f;a:{b:while(true){c:{v=(-1);w=0;if(d==e){if(t==e)break b;v=e;}else{x=d+1|0;switch(c.f(d)){case 10:v=x-1|0;w=1;d=x;break c;case 91:if(!m){d=x;break c;}y
=O3(a,c,x,e,BjS);if(y<0){if(y==(-2)){d=x+1|0;continue b;}d=x;break c;}v=x-1|0;d=x+(y+1|0)|0;f=BjT.qc();break c;default:}d=x;}}if(v!=(-1)){d:{z=B5(v,t);if(z){ba=BjR.eK();ba.jU.eI(u);l.Fg(ba,c,t,v,s);if(!ba.bj.h)BjR.jj(ba);else{if(s!==null)p=p-(s.n_?s.gp*l.eH:(s.cs+s.dn|0)*l.eH-l.hI);s=ba.bj.qc();ba.dd=p;ba.iB=q;if(!(!w&&v!=e))EL(a,l,ba);k.E(ba);o=ba.bo.Z;bb=ba.bo.R;if(i&&o){bc=bb.data;p=p+bc[0]+bc[1];n=2;while(n<o){bd=ba.bj;be=n-1|0;bf=bd.l(be);bg=(bf.cs+bf.dn|0)*l.eH-l.hI;if(p+bg-9.999999747378752E-5<=g)p=p
+bb.data[n];else{if(j!==null){AAn(a,l,ba,g,j,n,BjR);break a;}q=q+r;s=null;bh=l.JZ(ba.bj,n);if(!(!bh&&ba.dd===0.0)&&bh<ba.bj.h)be=bh;if(be){ba=Qh(a,l,ba,be,n);if(ba===null){p=0.0;break d;}k.E(ba);}else{bi=ba.bj.h;e:{while(true){if(be>=bi)break e;if(!l.jl((ba.bj.l(be)).eP&65535))break;be=be+1|0;}}if(be>0){ba.bj.lL(0,be-1|0);ba.bo.lL(1,be);}bb.data[0]=( -(ba.bj.EV()).dn|0)*l.eH-l.iQ;if(k.h>1){bj=k.l(k.h-2|0);bk=bj.bj.h-1|0;f:{while(true){if(bk<=0)break f;if(!l.jl((bj.bj.l(bk)).eP&65535))break;bk=bk+(-1)|0;}}bj.bj.hT(bk
+1|0);bj.bo.hT(bk+2|0);EL(a,l,bj);}}o=ba.bo.Z;bb=ba.bo.R;bc=bb.data;p=bc[0];if(o>1)p=p+bc[1];ba.dd=0.0;ba.iB=q;n=1;}n=n+1|0;}}else if(m){n=0;while(n<o){p=p+bb.data[n];n=n+1|0;}}}}}if(w){p=0.0;q=z?q+r:q+r*l.w0;s=null;}t=d;u=f;}}}a.nl=l.eV+CD(q);bl=0.0;bm=k.P;bn=k.h;n=0;while(n<bn){bo=bm.data[n];bb=bo.bo.R;bc=bb.data;bp=bc[0];bq=0.0;br=bo.bj.P;bs=0;bt=bo.bj.h;while(bs<bt){bf=br.data[bs];bg=(bf.cs+bf.dn|0)*l.eH-l.hI;bq=Eg(bq,bp+bg);bs=bs+1|0;bp=bp+bc[bs];}bo.j1=Eg(bp,bq);bl=Eg(bl,bo.dd+bo.j1);n=n+1|0;}g:{a.pu=
bl;if(!(h&8)){bu=!(h&1)?0:1;bv=0.0;bw=(-2.147483648E9);bx=0;n=0;while(n<bn){bc=bm.data;bo=bc[n];if(bo.iB===bw)bv=Eg(bv,bo.dd+bo.j1);else{bw=bo.iB;by=g-bv;if(bu)by=by/2.0;while(bx<n){x=bx+1|0;bd=bc[bx];bd.dd=bd.dd+by;bx=x;}bv=bo.dd+bo.j1;}n=n+1|0;}by=g-bv;if(bu)by=by/2.0;while(true){if(bx>=bn)break g;bc=bm.data;x=bx+1|0;bd=bc[bx];bd.dd=bd.dd+by;bx=x;}}}}
function AAn(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=g.eK();b.Fg(h,e,0,e.i(),null);i=0.0;if(h.bo.Z>0){EL(a,b,h);j=h.bo.R;k=1;l=h.bo.Z;while(k<l){i=i+j.data[k];k=k+1|0;}}m=d-i;n=0;o=c.dd;j=c.bo.R;a:{while(true){if(n>=c.bo.Z)break a;p=j.data[n];o=o+p;if(o>m)break;n=n+1|0;}}if(n<=1){c.bj.K();c.bo.K();c.bo.F_(h.bo);}else{c.bj.hT(n-1|0);c.bo.hT(n);EL(a,b,c);if(h.bo.Z>0)c.bo.xA(h.bo,1,h.bo.Z-1|0);}c.bj.qk(h.bj);g.jj(h);}
function Qh(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=c.bj;g=c.bj.h;h=c.bo;i=d;a:{while(true){if(i<=0)break a;if(!b.jl((f.l(i-1|0)).eP&65535))break;i=i+(-1)|0;}}b:{while(true){j=B5(d,g);if(j>=0)break b;if(!b.jl((f.l(d)).eP&65535))break;d=d+1|0;}}k=null;if(j>=0){f.hT(i);h.hT(i+1|0);}else{DE();k=BjR.eK();k.jU.eI(c.jU);l=k.bj;l.IO(f,0,i);f.lL(0,d-1|0);c.bj=l;k.bj=f;m=k.bo;m.xA(h,0,i+1|0);h.lL(1,d);h.R.data[0]=( -(f.EV()).dn|0)*b.eH-b.iQ;c.bo=m;k.bo=h;}if(i)EL(a,b,c);else{DE();BjR.jj(c);a.cl.u$();}return k;}
function EL(a,b,c){var d,e;d=c.bj.qc();if(d.n_)return;e=(d.cs+d.dn|0)*b.eH-b.hI;c.bo.R.data[c.bo.Z-1|0]=e;}
function O3(a,b,c,d,e){var f,g,h,i,j,k,l,m;if(c==d)return (-1);switch(b.f(c)){case 35:f=0;g=c+1|0;a:{while(true){if(g>=d)break a;h=b.f(g);if(h==93)break;if(h>=48&&h<=57)f=(f*16|0)+(h-48|0)|0;else if(h>=97&&h<=102)f=(f*16|0)+(h-87|0)|0;else{if(h<65)break a;if(h>70)break a;f=(f*16|0)+(h-55|0)|0;}g=g+1|0;}if(g>=(c+2|0)&&g<=(c+9|0)){i=g-c|0;if(i<=7){j=0;k=9-i|0;while(j<k){f=f<<4;j=j+1|0;}f=f|255;}l=e.eK();DE();BjT.E(l);H1(l,f);return i;}}return (-1);case 91:break;case 93:DE();if(BjT.h>1)e.jj(BjT.u$());return 0;default:g
=c+1|0;while(g<d){h=b.f(g);if(h==93){m=PI((b.d8(c,g)).b());if(m===null)return (-1);l=e.eK();DE();BjT.E(l);l.eI(m);return g-c|0;}g=g+1|0;}return (-1);}return (-2);}
function A6A(a){(Gc(F(G3))).DM(a.cl);a.cl.K();a.pu=0.0;a.nl=0.0;}
function AML(a){var b,c,d;if(!a.cl.h)return B(103);b=F6(128);b.cA(a.pu);b.U(120);b.cA(a.nl);b.U(10);c=0;d=a.cl.h;while(c<d){b.a((a.cl.l(c)).b());b.U(10);c=c+1|0;}b.ue(b.i()-1|0);return b.b();}
function AWV(){BjR=Gc(F(G3));BjS=Gc(F(Bi));BjT=DH(4);}
var AAW=D(Eh);
function AIL(a){var b=new AAW();ADQ(b,a);return b;}
function ADQ(a,b){ME(a,M$(b));}
function OW(){var a=this;EK.call(a);a.uv=null;a.uQ=null;a.E6=null;a.c5=null;a.BB=null;a.ei=null;a.pG=0;a.uM=0;}
function BjY(a,b){var c=new OW();P3(c,a,b);return c;}
function Bbh(a){var b=new OW();ACq(b,a);return b;}
function BjZ(a,b){var c=new OW();ZD(c,a,b);return c;}
function P3(a,b,c){var d,e;d=c.lC();De();e=Beg;e=NI(d,e);d=Beg;e=KT(e,d);ZD(a,b,e);}
function ACq(a,b){Hk();P3(a,b,Bhz);}
function ZD(a,b,c){KW(a);a.E6=Ce(8192);a.c5=Hf(a.E6);a.BB=BV(1024);a.ei=KQ(a.BB);a.uv=b;a.uQ=c;a.ei.oA(BE(a.ei));a.c5.fV(BE(a.c5));}
function A6x(a){a.uv.fG();}
function AI2(a,b,c,d){var e,f;if(a.uM&&!B$(a.ei))return (-1);e=0;a:{while(d>0){f=Bq(d,Ba(a.ei));a.ei.q3(b,c+e|0,f);d=d-f|0;e=e+f|0;if(!B$(a.ei)&&!ABj(a))break a;}}return e;}
function ABj(a){if(a.uM)return 0;a.ei.IZ();a:{while(true){if(!B$(a.c5)&&!ZI(a))break a;if(!(II(a.uQ,a.c5,a.ei,a.pG)).hS())continue;else break;}}if(!B$(a.c5)&&a.pG&&(KA(a.uQ,a.ei)).jB())a.uM=1;KO(a.ei);return 1;}
function ZI(a){var b;if(a.pG)return 0;a.c5.Pm();a:{while(true){if(!B$(a.c5))break a;b=a.uv.rd(Hu(a.c5),B4(a.c5),Ba(a.c5));if(b==(-1)){a.pG=1;break a;}a.c5.fV(B4(a.c5)+b|0);if(!b)break;}}Je(a.c5);return 1;}
var E9=D(Bw);
var BjL=null;var Bj0=null;var Bj1=null;function Ri(){Ri=N(E9);AEe();}
function AZ3(a,b){var c=new E9();Qy(c,a,b);return c;}
function Qy(a,b,c){Ri();Cs(a,b,c);}
function AEe(){BjL=AZ3(B(522),0);Bj0=AZ3(B(523),1);Bj1=H(E9,[BjL,Bj0]);}
var X6=D();
function ARu(b,c,d){if(b===null)return null;return BbV(b,AN_(b),c,d);}
function Vb(){var a=this;C.call(a);a.pJ=0;a.Ez=0;a.B7=0;a.C0=0;a.lB=null;}
function Ba4(a){var b=new Vb();ANt(b,a);return b;}
function ANt(a,b){a.lB=b;J(a);a.Ez=a.lB.gG;a.B7=a.lB.db();a.C0=(-1);}
function A2r(a){return a.pJ>=a.B7?0:1;}
function A6S(a){var b,c;PC(a);a.C0=a.pJ;b=a.lB;c=a.pJ;a.pJ=c+1|0;return b.l(c);}
function PC(a){if(a.Ez>=a.lB.gG)return;G(A96());}
function LB(){var a=this;C.call(a);a.gd=null;a.oO=0;a.uD=0;a.m6=null;a.o6=null;a.oD=null;a.hd=null;a.fz=null;a.d6=null;a.fK=null;a.di=null;}
function AE_(){var a=new LB();A8P(a);return a;}
function A8P(a){J(a);a.oO=1;a.m6=S();a.o6=ZJ(0.0,0.0,0.0,1.0);a.oD=Cg(1.0,1.0,1.0);a.hd=BO();a.fz=BO();a.d6=DH(2);a.di=DH(2);}
function A6K(a){if(!a.uD)a.hd.FN(a.m6,a.o6,a.oD);return a.hd;}
function AOx(a){if(a.oO&&a.fK!==null)(a.fz.cg(a.fK.fz)).ho(a.hd);else a.fz.cg(a.hd);return a.fz;}
function AEz(a,b){var c,d;a:{a.Ow();a.Nv();if(b){c=a.di.bY();while(true){if(!c.bC())break a;d=c.bz();d.CQ(1);}}}}
function A44(a,b){var c,d,e,f,g;c=a.d6.bY();while(c.bC()){d=c.bz();if(d.cG===null)continue;if(d.dy===null)continue;if(d.cG.ca!=d.dy.data.length)continue;e=d.cG.ca;f=0;while(f<e){(d.dy.data[f].cg(d.cG.el.data[f].fz)).ho(d.cG.gB.data[f]);f=f+1|0;}}a:{if(b){c=a.di.bY();while(true){if(!c.bC())break a;g=c.bz();g.yA(1);}}}}
function ASX(a){if(a.fK!==null){a.fK.E9(a);a.fK=null;}}
function A4C(a){return a.di.h;}
function AKC(a,b){return a.di.l(b);}
function ADm(a,b){return a.L_((-1),b);}
function ANv(a,b,c){var d;d=a;while(true){if(d===null){d=c.wY();if(d!==null&&!d.E9(c))G(U(B(524)));if(b>=0&&b<a.di.h)a.di.Kl(b,c);else{b=a.di.h;a.di.E(c);}c.fK=a;return b;}if(d===c)break;d=d.wY();}G(U(B(525)));}
function AZ8(a,b){if(!a.di.KD(b,1))return 0;b.fK=null;return 1;}
function A1v(a){return a.di;}
function A7C(a){return a.fK;}
function AXW(a){return (AE_()).LQ(a);}
function A5b(a,b){var c,d,e;a.Fz();a.gd=b.gd;a.uD=b.uD;a.oO=b.oO;a.m6.M(b.m6);a.o6.N4(b.o6);a.oD.M(b.oD);a.hd.cg(b.hd);a.fz.cg(b.fz);a.d6.K();c=b.d6.bY();while(c.bC()){d=c.bz();a.d6.E(d.LD());}a.di.K();c=(b.rl()).fj();while(c.bC()){e=c.bz();a.Hx(e.uO());}return a;}
function YP(b,c,d,e){var f,g,h,i;a:{f=b.h;if(!e){g=0;while(true){if(g>=f)break a;h=b.l(g);if(h.gd.z(c))break;g=g+1|0;}return h;}g=0;while(true){if(g>=f)break a;i=b.l(g);if(i.gd.FS(c))break;g=g+1|0;}return i;}b:{if(d){g=0;while(true){if(g>=f)break b;i=YP((b.l(g)).di,c,1,e);if(i!==null)break;g=g+1|0;}return i;}}return null;}
var Lp=D(0);
function Hl(){var a=this;C.call(a);a.AE=0;a.f1=null;a.DD=null;a.ql=null;a.kZ=null;a.lW=null;a.AD=null;a.kp=null;a.jq=null;a.oF=null;a.l8=null;a.sJ=null;a.Ej=null;a.xm=null;a.xL=null;a.nX=null;a.EZ=null;a.qe=Bb;a.kN=Bb;a.tw=0;a.j7=0;a.Jd=null;a.lv=null;a.pl=null;}
var Bj2=null;var Bj3=null;function A$R(){A$R=N(Hl);AW9();}
function Bc2(){var a=new Hl();US(a);return a;}
function US(a){A$R();J(a);a.kZ=Bp();a.lW=Bp();a.tw=1;a.j7=0;a.Jd=BO();a.pl=S();}
function AXQ(a){var b,c,d,e,f,g,h,i,j,k;W5();a.AE=Bullet.MyClassHelper.prototype.getBTVersion();a.sJ=A_o();a.Ej=A$K(a.sJ);a.xm=A_t();a.xL=A_J();a.l8=A90(a.Ej,a.xm,a.xL,a.sJ);b=Cg(0.0,(-10.0),0.0);a.l8.G6(b);a.f1=BaH();a.DD=A_2(a.f1);a.ql=A9X();a.kp=BcC();a.oF=BaW();c=(AIj()).xn(1.0,1.0,1.0,(-1.0),(-1.0),(-0.4000000059604645));a.oF.F4(c);a.jq=BaS();a.f1.co.q=13.0;a.f1.co.o=2.0;a.f1.L3(0.0,0.0,0.0);d=A_6();e=1.0;f=1.0;g=1.0;h=1.0;i=new FV;j=X(BH,1);j.data[0]=HA(e,f,g,h);M_(i,j);a.EZ=d.BY(1.0,1.0,1.0,i,O(9));k
=d.BY(14.0,0.30000001192092896,14.0,Bbu(H(BH,[HA(e,f,g,h),YB(e,f,g,h),AAJ(16.0)])),O(9));a.AD=a.vI(B(526),0,0.0,0.0,(-2.0),0.0,0.0,0.0,0.0,k,14.0,0.30000001192092896,14.0,0.0,0.0,1.0);a.EY();a.nX=A_k();a.nX.FU(1.0,0.0,0.0,1.0);a.kN=D8();a.lv=A$z(a.f1);a.lv.oL=0;a.lv.qK=0;a.lv.uy=0;Bfj.I_(BcW(H(Fk,[a,a.lv])));}
function A6o(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r,s,t,u,v,w;r=Bdd(k);s=HA(o,p,q,1.0);E7(r.jv.l(0),s);r.ev.KR(e,f,g);t=r.ev;HN();t.u_(Bj4,h);r.ev.u_(Bj5,i);r.ev.u_(Bj6,j);u=A$c(r.ev);v=BcY(a.pl.I(l/2.0,m/2.0,n/2.0));v.MC(d,a.pl.K4());w=Bdw(d,u,v,a.pl);if(c)a.lW.E(w);w.Jf(0.699999988079071);a.l8.HP(w);return r;}
function AYl(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=0;while(b<a.lW.h){c=a.lW.l(b);a.l8.Gz(c);c.io();b=b+1|0;}a.lW.K();a.kZ.K();d=0;b=0;while(b<7){e=0;while(e<7){f=Ej((-5.0),5.0);g=Ej(4.0,9.0);h=Ej((-5.0),5.0);i=Iu(0,360);j=Iu(0,360);k=Iu(0,360);l=Ej(0.30000001192092896,1.0);m=Ej(0.30000001192092896,1.0);n=Ej(0.30000001192092896,1.0);o=a.vI((((I()).a(B(527))).j(d)).b(),1,0.4000000059604645,f,g,h,i,j,k,a.EZ,1.0,1.0,1.0,l,m,n);d=d+1|0;a.kZ.E(o);e=e+1|0;}b=b+1|0;}}
function AB4(a){var b,c,d,e,f,g,h;a.f1.fX();BfC.vP(0.8999999761581421,0.8999999761581421,0.8999999761581421,1.0);BfC.D9(16640);if(!a.j7){a.qe=D8();if(Hc(D2(a.qe,a.kN),O(6000))){a.tw=a.tw?0:1;a.EY();a.kN=D8();}a.l8.H4(Bfz.EI());}a.kp.G9(a.f1);b=0;while(b<a.kZ.h){c=a.kZ.l(b);a.kp.Cz(c,a.oF);b=b+1|0;}a.kp.Cz(a.AD,a.oF);a.kp.be();a.jq.gT();d=a.nX;e=a.jq;f=((((((I()).a(B(528))).j(Bfz.Ml())).a(B(529))).j(a.AE)).a(B(530))).b();g=Bfz;h=g.bm()-14|0;d.xT(e,f,30.0,h);a.nX.xT(a.jq,B(531),20.0,30.0);a.jq.be();}
function A6y(a,b,c){var d;a.DD.wj(b,c,0);a.ql.wj(b,c,1);d=a.ql.MN();d.fX();a.jq.Or(d.eD);}
function AMP(a,b){if(b==62){a.j7=a.j7?0:1;if(!a.j7)a.kN=Dx(D8(),D2(a.kN,a.qe));}return 0;}
function A2C(a,b){return 0;}
function AVi(a,b){return 0;}
function A55(a,b,c,d,e){return 0;}
function AZU(a,b,c,d,e){return 0;}
function AN2(a,b,c,d){return 0;}
function AVW(a,b,c){return 0;}
function ALp(a,b,c){return 0;}
function AW9(){Bj2=S();Bj3=S();}
function UW(){var a=this;E4.call(a);a.t3=0;a.o2=0;}
function BcE(a,b){var c=new UW();AJk(c,a,b);return c;}
function AJk(a,b,c){LS(a);a.t3=b;a.o2=c;}
function AYN(a){return a.t3;}
function A68(a){return a.o2;}
function A2N(a){return ((((((I()).a(B(532))).j(a.t3)).a(B(23))).a(a.o2==2147483647?B(103):(AAL(a.o2)).b())).a(B(533))).b();}
var Wf=D(V);
function Bdk(){var a=new Wf();AH5(a);return a;}
function AH5(a){BK(a);}
function ARP(a,b,c,d,e){var f,g,h,i;f=b.cW.d3;Cw();g=Bj7;h=(BB(e,g)).iy;i=f.gu(h);DQ(b,c,i);}
var Wc=D(V);
function Bcz(){var a=new Wc();A6X(a);return a;}
function A6X(a){BK(a);}
function AWs(a,b,c,d,e){var f;Cw();f=BB(e,Bj7);DM(b,c,f.i5,f.i4,f.jW,f.jX);}
function UR(){Q.call(this);this.M7=null;}
function Ba2(a){var b=new UR();APn(b,a);return b;}
function APn(a,b){a.M7=b;Be(a);}
function AUM(a,b){return UE(b);}
var Wk=D(V);
function A_d(){var a=new Wk();AJI(a);return a;}
function AJI(a){BK(a);}
function A8r(a,b,c,d,e){var f;Cw();f=BB(e,Bj8);DM(b,c,f.i5,f.i4,f.jW,f.jX);}
var Wg=D(V);
function A_x(){var a=new Wg();ATx(a);return a;}
function ATx(a){BK(a);}
function AMF(a,b,c,d,e){var f,g,h,i;f=b.cW.d3;Cw();g=Bj9;h=(BB(e,g)).iy;i=f.gu(h);DQ(b,c,i);}
var We=D(V);
function A$O(){var a=new We();A51(a);return a;}
function A51(a){BK(a);}
function A0$(a,b,c,d,e){Ch();Fq(b,c,(BB(e,BjB)).dW);}
var Wj=D(V);
function A_g(){var a=new Wj();AVx(a);return a;}
function AVx(a){BK(a);}
function AOm(a,b,c,d,e){var f,g,h,i;f=b.cW.d3;Cw();g=Bj8;h=(BB(e,g)).iy;i=f.gu(h);DQ(b,c,i);}
var RG=D();
function Baf(){var a=new RG();ATj(a);return a;}
function ATj(a){J(a);}
function A7e(a,b){if(b<=0)G(CH());return a.xj()*b|0;}
function AD2(a){return a.xj();}
function AX0(a){return Math.random();}
var MY=D(0);
var RM=D(I6);
function A_J(){var a=new RM();ALA(a);return a;}
function ALA(a){Pa(a,B(534));a.et(A4u(),1);}
function A4u(){var jsObj=new Bullet.btSequentialImpulseConstraintSolver();return Bullet.getPointer(jsObj);}
var WU=D();
var RP=D(C7);
function A_M(a){var b=new RP();A0N(b,a);return b;}
function A0N(a,b){Gr(a,b,0.3333333432674408,0.5);}
function A73(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(h.dN(2))break a;Bk();i=Bej;break a;}n=k+1|0;o=j[k];if(!EA(a,o)){c=n+(-2)|0;i=BU(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|o&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(h.dN(3))break a;Bk();i=Bej;break a;}n=k+1|0;o=j[k];k=n+1|0;p=j[n];if(!EA(a,o))break b;if(!EA(a,p))break b;q
=((l&15)<<12|(o&63)<<6|p&63)&65535;if(Ji(q)){c=k+(-3)|0;i=BU(3);break a;}j=e.data;m=f+1|0;j[f]=q;}else{if((l&248)!=240){c=k+(-1)|0;i=BU(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(h.dN(4))break a;Bk();i=Bej;break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.ec(2))break a;Bk();i=Bei;break a;}n=k+1|0;o=j[k];m=n+1|0;p=j[n];k=m+1|0;r=j[m];if(!EA(a,o))break c;if(!EA(a,p))break c;if(!EA(a,r))break c;j=e.data;s=(l&7)<<18|(o&63)<<12|(p&63)<<6|r&63;n=f+1|0;j[f]=Fw(s);m=n+1|0;j[n]=Fd(s);}c=k;f=m;}break a;}c=k+(-3)|0;i=BU(1);break a;}c
=k+(-3)|0;i=BU(1);}h.eg(c);h.dQ(f);return i;}
function EA(a,b){return (b&192)!=128?0:1;}
function Z9(){C.call(this);this.eT=null;}
function BdG(a){var b=new Z9();APB(b,a);return b;}
function APB(a,b){J(a);a.eT=b;}
function ND(a){return a.eT.length;}
function QM(a,b){return a.eT[b];}
function Pr(a){return BdN(a);}
function RY(a){var b,c,d,e,f,g;b=a.eT.length;c=B(535);d=F6(((b*4|0)/3|0)+2|0);e=0;while(e<b){f=b-e|0;if(f>=3){g=(((a.eT[e]&255)<<16)+((a.eT[e+1|0]&255)<<8)|0)+(a.eT[e+2|0]&255)|0;d.U(c.f(g>>18&63));d.U(c.f(g>>12&63));d.U(c.f(g>>6&63));d.U(c.f(g&63));}else if(f<2){g=(a.eT[e]&255)<<16;d.U(c.f(g>>18&63));d.U(c.f(g>>12&63));d.a(B(536));}else{g=((a.eT[e]&255)<<16)+((a.eT[e+1|0]&255)<<8)|0;d.U(c.f(g>>18&63));d.U(c.f(g>>12&63));d.U(c.f(g>>6&63));d.a(B(537));}e=e+3|0;}return d.b();}
var ABY=D(CC);
function A_R(a,b,c){var d=new ABY();AOd(d,a,b,c);return d;}
function AOd(a,b,c,d){E0(a,b,c,d);}
function ADg(a,b,c,d){var e;a:{while(true){if((b+a.bu.cf()|0)>d.J())break a;e=a.bu.bI(b,c);if(e<1)break;b=b+e|0;}}return a.k.e(b,c,d);}
function ZN(){var a=this;C.call(a);a.rv=null;a.Ec=null;a.zJ=0;a.qj=0;}
function A_D(a,b){var c=new ZN();A2B(c,a,b);return c;}
function A2B(a,b,c){J(a);a.rv=b;a.Ec=c;}
function A2w(a){return B$(a.rv);}
function AZJ(a,b){return Ba(a.rv)<b?0:1;}
function AVf(a,b){return Ba(a.Ec)<b?0:1;}
function A65(a,b){a.zJ=b;}
function A4T(a,b){a.qj=b;}
function O9(){Q.call(this);this.Kb=null;}
function A$y(a){var b=new O9();ALl(b,a);return b;}
function ALl(a,b){a.Kb=b;Be(a);}
function AM8(a,b){return Fs(b);}
var JA=D(0);
var Ra=D();
function Bc_(){var a=new Ra();AU8(a);return a;}
function AU8(a){J(a);}
var Wo=D(V);
function BdD(){var a=new Wo();AJ5(a);return a;}
function AJ5(a){BK(a);}
function APs(a,b,c,d,e){var f;Cw();f=BB(e,Bj$);DM(b,c,f.i5,f.i4,f.jW,f.jX);}
var KX=D(Di);
function Bdy(){var a=new KX();A0X(a);return a;}
function A0X(a){Jc(a);}
var Wl=D(V);
function A$e(){var a=new Wl();A5v(a);return a;}
function A5v(a){BK(a);}
function A84(a,b,c,d,e){var f,g,h;AAD();if(Cp(e,Bg1)){f=b.cW.d3;g=Bg1;h=(BB(e,g)).H2;DQ(b,c,f.gu(h));}}
var Wi=D(V);
function BbY(){var a=new Wi();AR7(a);return a;}
function AR7(a){BK(a);}
function AUy(a,b,c,d,e){var f;Cw();f=BB(e,Bj9);DM(b,c,f.i5,f.i4,f.jW,f.jX);}
var Wm=D(V);
function BcV(){var a=new Wm();AVg(a);return a;}
function AVg(a){BK(a);}
function AZt(a,b,c,d,e){var f,g,h,i;f=b.cW.d3;Cw();g=Bj$;h=(BB(e,g)).iy;i=f.gu(h);DQ(b,c,i);}
function OV(){Q.call(this);this.Jw=null;}
function A$f(a){var b=new OV();A8K(b,a);return b;}
function A8K(a,b){a.Jw=b;Be(a);}
function AQ7(a,b){return Tx(b);}
var JC=D(0);
function RN(){var a=this;C.call(a);a.q4=null;a.sY=null;a.ws=null;}
function AXy(){var a=new RN();AIr(a);return a;}
function AIr(a){J(a);a.q4=window;a.ws=A$1();}
function A4r(a){var b;b=a.q4.document;return b;}
function A6f(a,b){a.sY=b;requestAnimationFrame(BY(a,"onAnimationFrame"));}
function AYf(a,b){var c;c=a.sY;a.sY=null;c.e3();}
function A4b(a){return a.ws;}
function ASj(a){var b;b=a.q4.location;return b;}
function A3M(a,b){a.JA(b);}
var XB=D(CC);
function Bdc(a,b,c){var d=new XB();ASF(d,a,b,c);return d;}
function ASF(a,b,c,d){E0(a,b,c,d);}
function ANe(a,b,c,d){var e;while(true){e=a.k.e(b,c,d);if(e>=0)break;if((b+a.bu.cf()|0)<=d.J()){e=a.bu.bI(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var Xj=D();
function ES(b,c){return K7(b,c);}
function YE(){var a=this;C.call(a);a.Dp=null;a.v1=0.0;a.mH=null;}
function Bdu(){var a=new YE();AP6(a);return a;}
function AP6(a){J(a);a.mH=Bp();}
var RZ=D(C7);
function A9$(a){var b=new RZ();ANE(b,a);return b;}
function ANE(a,b){Gr(a,b,1.0,1.0);}
function AHr(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;while(c<d&&f<g){j=e.data;k=b.data;l=c+1|0;m=k[c]&255;n=f+1|0;j[f]=m&65535;c=l;f=n;}h.eg(c);h.dQ(f);return i;}
function HE(){var a=this;C.call(a);a.e1=null;a.cb=null;a.tc=0;a.jI=0;a.hF=null;a.mj=0;a.yo=null;}
var Bj_=null;function J4(){J4=N(HE);ASb();}
function Bb5(a,b,c,d){var e=new HE();Xn(e,a,b,c,d);return e;}
function Bka(a,b,c,d,e){var f=new HE();MC(f,a,b,c,d,e);return f;}
function Bkb(a,b,c,d,e){var f=new HE();NQ(f,a,b,c,d,e);return f;}
function Xn(a,b,c,d,e){J4();J(a);a.tc=1;a.mj=0;a.yo=S();a.e1=Yx(a,b,c,e);a.cb=AYW(b,d);a.jI=0;Kz(Bem,a);}
function Yx(a,b,c,d){if(BfE===null)return A1l(b,c,d);return A0F(b,c,d);}
function MC(a,b,c,d,e,f){J4();NQ(a,b,c,d,e,AY4(f));}
function NQ(a,b,c,d,e,f){J4();a:{b:{J(a);a.tc=1;a.mj=0;a.yo=S();Bcs();switch(Bi_.data[BD(b)]){case 1:break;case 2:a.e1=Bdt(c,d,f);a.cb=A8V(c,e);a.jI=0;break a;case 3:a.e1=A0F(c,d,f);a.cb=A8V(c,e);a.jI=0;break a;case 4:break b;default:break b;}a.e1=A1l(c,d,f);a.cb=AYW(c,e);a.jI=0;break a;}a.e1=Baa(d,f);a.cb=Bal(e);a.jI=1;}Kz(Bem,a);}
function AOf(a,b,c,d){a.e1.t9(b,c,d);return a;}
function AFg(a,b){var c;c=b.data;a.cb.uj(b,0,c.length);return a;}
function AI7(a,b,c,d){a.cb.uj(b,c,d);return a;}
function AQU(a){return a.e1.uu();}
function A6h(a){return a.cb.m1();}
function AF5(a,b){a.h6(b,null);}
function APd(a,b,c){a.e1.h6(b,c);if(a.hF!==null&&a.hF.zM()>0)a.hF.h6(b,c);if(a.cb.lQ()>0)a.cb.e7();}
function A5P(a,b){a.gD(b,null);}
function ADy(a,b,c){a.e1.gD(b,c);if(a.hF!==null&&a.hF.zM()>0)a.hF.gD(b,c);if(a.cb.lQ()>0)a.cb.DK();}
function ASD(a,b,c,d,e){a.CM(b,c,d,e,a.tc);}
function A13(a,b,c,d,e,f){var g,h,i,j,k,l,m;if(!e)return;if(f)a.JN(b);if(a.jI){if(a.cb.lQ()<=0)BfD.wP(c,d,e);else{g=a.cb.t4();h=B4(g);i=BE(g);g.cX(d);g.ck(d+e|0);BfD.Mw(c,e,5123,g);g.cX(h);g.ck(i);}}else{j=0;if(a.mj)j=a.hF.zM();if(a.cb.lQ()<=0){if(a.mj&&j>0)BfE.Wh(c,d,e,j);else BfD.wP(c,d,e);}else{if((e+d|0)>a.cb.m1()){k=new Kp;l=(((((I()).a(B(538))).j(e)).a(B(539))).j(d)).a(B(540));m=a.cb;P5(k,((l.j(m.m1())).a(B(24))).b());G(k);}if(a.mj&&j>0)BfE.Sc(c,e,5123,d*2|0,j);else BfD.NV(c,e,5123,d*2|0);}}if(f)a.I8(b);}
function AWA(a){return a.e1.jz();}
function AJ4(a){return a.cb.t4();}
function Kz(b,c){var d;J4();d=Bj_.W(b);if(d===null)d=Bp();d.E(c);Bj_.x(b,d);}
function ASb(){Bj_=C3();}
function M2(){var a=this;EQ.call(a);a.pc=0;a.eZ=null;}
function A_1(a,b){var c=new M2();ANH(c,a,b);return c;}
function ANH(a,b,c){LG(a,b,null);a.pc=c;}
var GY=D(BR);
function SA(a,b){CV(a,b);}
var Vw=D();
function GN(b,c){var d;if(b<0)G(W((((I()).a(B(541))).j(b)).b()));d=IG(Bf(2,AW8(b/c)|0));if(d<=1073741824)return d;G(W((((I()).a(B(542))).j(b)).b()));}
var AA0=D(Bt);
function A_8(){var a=new AA0();AJr(a);return a;}
function AJr(a){Cl(a);}
function A3l(a,b,c,d){var e;e=!d.lz()?d.J():c.i();if(b<e)return (-1);d.d2=1;d.OC=1;return a.k.e(b,c,d);}
function ASQ(a,b){return 0;}
function AH0(a){return B(543);}
function ZG(){var a=this;C.call(a);a.sS=0;a.gj=null;a.hp=null;a.wy=0.0;a.s_=0;a.uR=0;a.jM=0;}
function Gf(){var a=new ZG();A00(a);return a;}
function Bkc(a,b){var c=new ZG();XR(c,a,b);return c;}
function A00(a){XR(a,51,0.800000011920929);}
function XR(a,b,c){var d;J(a);if(c>0.0&&c<1.0){a.wy=c;d=GN(b,c);a.s_=d*c|0;a.jM=d-1|0;a.uR=CT(O(a.jM));a.gj=X(C,d);a.hp=Bc(d);return;}G(W((((I()).a(B(42))).cA(c)).b()));}
function ALj(a,b){return Cu(CJ(CP(O(b.by()),Ca(2135587861, 2654435769)),a.uR));}
function AWz(a,b){var c,d,e;if(b===null)G(W(B(464)));c=a.gj;d=a.kj(b);while(true){e=c.data[d];if(e===null)return  -(d+1|0)|0;if(e.z(b))break;d=(d+1|0)&a.jM;}return d;}
function APe(a,b,c){var d,e;d=a.j0(b);if(d>=0){a.hp.data[d]=c;return;}e= -(d+1|0)|0;a.gj.data[e]=b;a.hp.data[e]=c;e=a.sS+1|0;a.sS=e;if(e>=a.s_)Tc(a,a.gj.data.length<<1);}
function Yc(a,b,c){var d,e,f;d=a.gj;e=a.kj(b);while(true){f=d.data;if(f[e]===null)break;e=(e+1|0)&a.jM;}f[e]=b;a.hp.data[e]=c;}
function AVD(a,b,c){var d;d=a.j0(b);if(d>=0)c=a.hp.data[d];return c;}
function Tc(a,b){var c,d,e,f,g;a:{c=a.gj.data.length;a.s_=b*a.wy|0;a.jM=b-1|0;a.uR=CT(O(a.jM));d=a.gj;e=a.hp;a.gj=X(C,b);a.hp=Bc(b);if(a.sS>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g!==null)Yc(a,g,e.data[f]);f=f+1|0;}}}}
var ST=D(T);
function A9K(){var a=new ST();AJK(a);return a;}
function AJK(a){Bo(a);}
function APQ(a){return (CO()).bG(65,90);}
function Fo(){var a=this;CQ.call(a);a.bJ=0;a.A=null;a.g6=null;}
function Vd(a,b,c,d,e,f){FD(a,c);Es();a.g6=Bfr;a.bJ=b;a.A=d;a.C=e;a.bc=f;}
function FN(b){if(b>=0)return A0U(b,1);G(W((((I()).a(B(406))).j(b)).b()));}
function Rb(b){if(b>=0)return A0U(b,0);G(W((((I()).a(B(406))).j(b)).b()));}
function Yf(b,c,d){return BbD(0,b.data.length,b,c,c+d|0,0,0);}
function Hf(b){return Yf(b,0,b.data.length);}
function AWL(a,b,c,d){var e,f,g,h,i,j;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bg((((((I()).a(B(544))).j(g)).a(B(408))).j(f)).b()));if(Ba(a)<d)G(TS());if(d<0)G(Bg(((((I()).a(B(409))).j(d)).a(B(410))).b()));h=a.C+a.bJ|0;i=0;while(i<d){g=c+1|0;j=a.A.data;f=h+1|0;e[c]=j[h];i=i+1|0;c=g;h=f;}a.C=a.C+d|0;return a;}}e=b.data;G(Bg(((((((I()).a(B(411))).j(c)).a(B(66))).j(e.length)).a(B(24))).b()));}
function ANa(a,b){return a.zz(b,0,b.data.length);}
function A7t(a,b,c,d){var e,f,g,h,i,j;if(!d)return a;if(a.b$())G(C5());if(Ba(a)<d)G(FS());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bg((((((I()).a(B(545))).j(g)).a(B(408))).j(f)).b()));if(d<0)G(Bg(((((I()).a(B(409))).j(d)).a(B(410))).b()));h=a.C+a.bJ|0;i=0;while(i<d){j=a.A.data;g=h+1|0;f=c+1|0;j[h]=e[c];i=i+1|0;h=g;c=f;}a.C=a.C+d|0;return a;}}e=b.data;G(Bg(((((((I()).a(B(411))).j(c)).a(B(66))).j(e.length)).a(B(24))).b()));}
function Xv(a,b){return a.wA(b,0,b.data.length);}
function AUU(a){return 1;}
function Hu(a){return a.A;}
function FB(a,b){a.g6=b;return a;}
function JM(a){FR(a);return a;}
function Je(a){GQ(a);return a;}
function AXH(a,b){IK(a,b);return a;}
function APC(a,b){Gy(a,b);return a;}
function AEQ(a){return Je(a);}
function ANs(a,b){return a.L8(b);}
function ATS(a,b){return a.fV(b);}
function AA$(){var a=this;Fo.call(a);a.HY=0;a.oq=0;}
function A0U(a,b){var c=new AA$();AZD(c,a,b);return c;}
function BbD(a,b,c,d,e,f,g){var h=new AA$();OA(h,a,b,c,d,e,f,g);return h;}
function AZD(a,b,c){OA(a,0,b,Ce(b),0,b,c,0);}
function OA(a,b,c,d,e,f,g,h){Vd(a,b,c,d,e,f);a.HY=g;a.oq=h;}
function ACe(a,b){if(b>=0&&b<a.bc)return a.A.data[a.bJ+b|0];G(Bg(((((((I()).a(B(357))).j(b)).a(B(66))).j(a.bc)).a(B(24))).b()));}
function ALk(a){var b,c,d,e,f,g,h,i;if(a.oq)G(C5());a:{b=Ba(a);if(a.C>0){c=a.bJ;d=a.bJ+a.C|0;e=0;while(true){if(e>=b)break a;f=a.A.data;g=c+1|0;h=a.A.data;i=d+1|0;f[c]=h[d];e=e+1|0;c=g;d=i;}}}a.C=b;a.bc=a.hn;a.fv=(-1);return a;}
function AQA(a){return a.oq;}
function A8X(a){var b,c;b=Ba(a)/2|0;c=a.g6;Es();if(c!==Bfr)return Bdm(a.bJ+a.C|0,b,a,0,b,a.b$());return BaJ(a.bJ+a.C|0,b,a,0,b,a.b$());}
function A6p(a,b){var c,d,e,f,g;if(b>=0&&(b+3|0)<a.bc){c=a.A.data[a.bJ+b|0]&255;d=a.A.data[(a.bJ+b|0)+1|0]&255;e=a.A.data[(a.bJ+b|0)+2|0]&255;f=a.A.data[(a.bJ+b|0)+3|0]&255;g=a.g6;Es();if(g!==Bfr)return f<<24|e<<16|d<<8|c;return c<<24|d<<16|e<<8|f;}G(Bg(((((((I()).a(B(357))).j(b)).a(B(66))).j(a.bc-3|0)).a(B(24))).b()));}
function AHE(a,b,c){var d;if(a.oq)G(C5());if(b>=0&&(b+3|0)<a.bc){d=a.g6;Es();if(d!==Bfr){a.A.data[a.bJ+b|0]=c<<24>>24;a.A.data[(a.bJ+b|0)+1|0]=c>>8<<24>>24;a.A.data[(a.bJ+b|0)+2|0]=c>>16<<24>>24;a.A.data[(a.bJ+b|0)+3|0]=c>>24<<24>>24;}else{a.A.data[a.bJ+b|0]=c>>24<<24>>24;a.A.data[(a.bJ+b|0)+1|0]=c>>16<<24>>24;a.A.data[(a.bJ+b|0)+2|0]=c>>8<<24>>24;a.A.data[(a.bJ+b|0)+3|0]=c<<24>>24;}return a;}G(Bg(((((((I()).a(B(357))).j(b)).a(B(66))).j(a.bc-3|0)).a(B(24))).b()));}
function ASl(a){var b,c;b=Ba(a)/4|0;c=a.g6;Es();if(c!==Bfr)return Bcx(a.bJ+a.C|0,b,a,0,b,a.b$());return Ba9(a.bJ+a.C|0,b,a,0,b,a.b$());}
function AL7(a){var b,c;b=Ba(a)/4|0;c=a.g6;Es();if(c!==Bfs)return Bc0(a.bJ+a.C|0,b,a,0,b,a.b$());return A9I(a.bJ+a.C|0,b,a,0,b,a.b$());}
function Ro(){var a=this;E5.call(a);a.sj=0;a.si=null;}
function BdN(a){var b=new Ro();AJg(b,a);return b;}
function AJg(a,b){a.si=b;Kc(a);}
function A0k(a){var b,c;if(a.sj==ND(a.si))return (-1);b=a.si;c=a.sj;a.sj=c+1|0;return QM(b,c)&255;}
function Ln(){var a=this;C.call(a);a.mS=null;a.sO=0.0;}
function A_N(a,b){var c=new Ln();AHK(c,a,b);return c;}
function AHK(a,b,c){J(a);a.mS=S();a.sO=0.0;(a.mS.M(b)).bU();a.sO=c;}
function A09(a,b,c,d){(((a.mS.M(b)).gb(c)).Hg(c.n-d.n,c.o-d.o,c.q-d.q)).bU();a.sO= -b.x_(a.mS);}
function U5(){var a=this;C.call(a);a.pT=null;a.uz=null;a.me=0;a.lX=0;a.nb=0;a.gL=0;a.rE=0;a.uB=0;a.pQ=0;}
function Ban(){var a=new U5();A6E(a);return a;}
function A6E(a){J(a);a.pT=null;a.uz=null;a.me=2;a.lX=5;a.nb=0;a.gL=12;a.rE=1;a.uB=(-1);a.pQ=(-1);}
function Gg(){var a=this;C.call(a);a.gc=null;a.b0=null;a.jP=null;}
var Bkd=null;var Bke=null;var Bkf=null;function AJz(){AJz=N(Gg);A0K();}
function BcF(){var a=new Gg();U1(a);return a;}
function U1(a){var b;AJz();J(a);a.gc=X(Ln,6);a.b0=H(Dy,[S(),S(),S(),S(),S(),S(),S(),S()]);a.jP=B9(24);b=0;while(b<6){a.gc.data[b]=A_N(S(),0.0);b=b+1|0;}}
function A3d(a,b){var c,d,e,f,g,h;AJz();Y(Bke,0,a.jP,0,Bke.data.length);Tg(b.c,a.jP,0,8,3);c=0;d=0;while(c<8){e=a.b0.data[c];f=a.jP.data;g=d+1|0;e.n=f[d];f=a.jP.data;h=g+1|0;e.o=f[g];f=a.jP.data;d=h+1|0;e.q=f[h];c=c+1|0;}a.gc.data[0].im(a.b0.data[1],a.b0.data[0],a.b0.data[2]);a.gc.data[1].im(a.b0.data[4],a.b0.data[5],a.b0.data[7]);a.gc.data[2].im(a.b0.data[0],a.b0.data[4],a.b0.data[3]);a.gc.data[3].im(a.b0.data[5],a.b0.data[1],a.b0.data[6]);a.gc.data[4].im(a.b0.data[2],a.b0.data[3],a.b0.data[6]);a.gc.data[5].im(a.b0.data[4],
a.b0.data[0],a.b0.data[1]);}
function A0K(){var b,c,d,e,f,g,h,i;Bkd=H(Dy,[Cg((-1.0),(-1.0),(-1.0)),Cg(1.0,(-1.0),(-1.0)),Cg(1.0,1.0,(-1.0)),Cg((-1.0),1.0,(-1.0)),Cg((-1.0),(-1.0),1.0),Cg(1.0,(-1.0),1.0),Cg(1.0,1.0,1.0),Cg((-1.0),1.0,1.0)]);Bke=B9(24);b=0;c=Bkd.data;d=c.length;e=0;while(e<d){f=c[e];g=Bke.data;h=b+1|0;g[b]=f.n;g=Bke.data;i=h+1|0;g[h]=f.o;g=Bke.data;b=i+1|0;g[i]=f.q;e=e+1|0;}Bkf=S();}
function MI(){var a=this;C.call(a);a.A6=null;a.DZ=null;}
var Bkg=null;function Bcc(){Bcc=N(MI);AOX();}
function A9V(a,b){var c=new MI();AA6(c,a,b);return c;}
function AA6(a,b,c){Bcc();J(a);a.A6=S();a.DZ=S();a.A6.M(b);(a.DZ.M(c)).bU();}
function AOX(){Bkg=S();}
var AAy=D(Bx);
function ASy(b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s;b.t6(8);k=b.dG(c);l=b.dG(e);m=b.dG(f);n=b.dG(d);o=b.dG(g);p=b.dG(i);q=b.dG(j);r=b.dG(h);s=b.Lq();if(s==1){b.ha(24);b.d0(k,l,m,n);b.d0(p,o,r,q);b.Ek(k,o,n,r,m,q,l,p);}else if(!s){b.rL(2);b.d0(k,l,m,n);b.d0(p,o,r,q);}else{b.rL(6);b.d0(k,l,m,n);b.d0(p,o,r,q);b.d0(k,n,r,o);b.d0(p,q,m,l);b.d0(p,l,k,o);b.d0(m,q,r,n);}}
function A7y(b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u;if(Z(Bs(Iv(b.jz()),O(408)),Bb)){JQ();k=BfX.dJ(c,null,null,null);l=BfY.dJ(d,null,null,null);m=BfZ;n=null;o=null;p=null;n=m.dJ(e,n,o,p);o=Bf0.dJ(f,null,null,null);p=Bf1;q=null;r=null;m=null;p=p.dJ(g,q,r,m);q=Bf2.dJ(h,null,null,null);r=Bf3;s=null;t=null;m=null;r=r.dJ(i,s,t,m);m=Bf4.dJ(j,null,null,null);ASy(b,k,l,n,o,p,q,r,m);}else{b.t6(24);b.rL(6);JQ();u=(((BfP.M(c)).iU(f,0.5)).gb((BfQ.M(g)).iU(j,0.5))).bU();b.jh(c,d,f,e,u);b.jh(h,g,i,j,u.eh((-1.0)));k=
(((BfP.M(c)).iU(i,0.5)).gb((BfQ.M(d)).iU(j,0.5))).bU();b.jh(g,c,e,i,k);b.jh(d,h,j,f,k.eh((-1.0)));k=(((BfP.M(c)).iU(h,0.5)).gb((BfQ.M(e)).iU(j,0.5))).bU();b.jh(g,h,d,c,k);b.jh(e,f,j,i,k.eh((-1.0)));}}
function A4N(b,c,d,e){ATm(b,0.0,0.0,0.0,c,d,e);}
function ATm(b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;i=f*0.5;j=g*0.5;k=h*0.5;l=c-i;m=d-j;n=e-k;o=c+i;p=d+j;q=e+k;r=(Dt()).I(l,m,n);s=(Dt()).I(l,p,n);t=(Dt()).I(o,m,n);u=(Dt()).I(o,p,n);v=(Dt()).I(l,m,q);w=(Dt()).I(l,p,q);x=(Dt()).I(o,m,q);y=(Dt()).I(o,p,q);A7y(b,r,s,t,u,v,w,x,y);T$();}
var Qk=D(Bm);
function A$v(){var a=new Qk();A78(a);return a;}
function A78(a){Ct(a);}
function U7(){Bt.call(this);this.CH=null;}
function Bdb(a){var b=new U7();A4q(b,a);return b;}
function A4q(a,b){Cl(a);a.CH=b;}
function AV9(a,b,c,d){var e,f;a:{if(b!=d.J()){if(!b)break a;if(d.js()&&b==d.dH())break a;e=a.CH;f=b-1|0;if(e.Dx(c.f(f),c.f(b)))break a;}return (-1);}return a.k.e(b,c,d);}
function AHI(a,b){return 0;}
function AUp(a){return B(546);}
var Cd=D();
function DP(a){J(a);}
function ATq(a,b,c){return 1;}
var S5=D();
function Wu(){V.call(this);this.xY=null;}
function BbE(){var a=new Wu();A4e(a);return a;}
function A4e(a){BK(a);a.xY=BO();}
function AYc(a,b,c,d,e){DX(b,c,(a.xY.cg(b.cT.eD)).ho(d.dx));}
var Mj=D();
var Bg0=null;function Bdf(){Bdf=N(Mj);AEt();}
function AEt(){Bg0=Bc((XJ()).data.length);Bg0.data[BD(BgN)]=1;Bg0.data[BD(BgO)]=2;}
function XE(){var a=this;C.call(a);a.fO=null;a.iH=null;a.iJ=null;a.Mq=null;}
function A_6(){var a=new XE();A4R(a);return a;}
function A4R(a){J(a);a.iJ=Bp();a.Mq=BO();}
function Q0(a,b){var c,d,e;c=a.iJ.bY();while(true){if(!c.bC()){d=Bae();d.N8(b);a.iJ.E(d);return d;}e=c.bz();if(No(e.jz(),b)&&e.If()<16383)break;}return e;}
function ACw(a){if(a.fO!==null)G(U(B(547)));a.iH=null;a.fO=A$B();a.iJ.K();}
function AUv(a){var b,c,d;if(a.fO===null)G(U(B(548)));b=a.fO;Nr(a);a.fO=null;c=a.iJ.bY();while(c.bC()){d=c.bz();d.MY();}a.iJ.K();AWm(b);return b;}
function Nr(a){if(a.iH!==null)a.iH=null;}
function AT5(a,b){if(a.fO===null)G(U(B(548)));Nr(a);a.fO.jV.E(b);a.iH=b;return b;}
function AEZ(a){var b;b=AE_();a.OJ(b);b.gd=(((I()).a(B(549))).j(a.fO.jV.h)).b();return b;}
function A6t(a,b,c){if(a.iH===null)a.IH();a.iH.d6.E(BdH(b,c));}
function AIQ(a,b,c,d,e){var f;f=Q0(a,d);a.Mp(f.Pc(b,c),e);return f;}
function ARc(a,b,c,d,e){return a.Jr(b,c,Rf(d),e);}
function AP2(a,b,c,d,e,f){return a.Jb(b,c,d,4,e,f);}
function A1w(a,b,c,d,e,f,g){a.gT();(a.JJ(B(550),e,g,f)).Kp(b,c,d);return a.Hp();}
function AWm(b){var c,d;b.pK.K();b.pO.K();b.om.K();c=b.jV.bY();while(c.bC()){d=c.bz();Tq(b,d);}}
function Tq(b,c){var d,e,f;d=c.d6.bY();while(d.bC()){e=d.bz();if(!b.pK.ij(e.dX,1))b.pK.E(e.dX);if(!b.om.ij(e.fb,1)){b.om.E(e.fb);if(!b.pO.ij(e.fb.b6,1))b.pO.E(e.fb.b6);b.LI(e.fb.b6);}}d=(c.rl()).fj();while(d.bC()){f=d.bz();Tq(b,f);}}
function IV(){var a=this;C.call(a);a.dq=null;a.eG=null;a.xR=0;a.JV=0;a.tQ=0;a.kV=0;a.os=0;}
function A1l(a,b,c){var d=new IV();Y4(d,a,b,c);return d;}
function Y4(a,b,c,d){J(a);a.kV=0;a.os=0;a.JV=b;a.dq=d;a.eG=HJ(Cb(a.dq.cN/4|0,c));a.eG.c$();a.xR=BfD.iW();a.tQ=!b?35048:35044;}
function AHH(a){return a.dq;}
function AR5(a){return CS(a.eG)/(a.dq.cN/4|0)|0;}
function ABN(a){if(a.os){BfD.fu(34962,BE(a.eG),a.eG,a.tQ);a.kV=0;}}
function A2_(a,b,c,d){a.kV=1;NG(b,a.eG,d,c);a.eG.cX(0);a.eG.ck(d);ABN(a);}
function AXZ(a,b,c){var d,e,f,g,h,i;d=BfD;d.c7(34962,a.xR);if(a.kV){d.fu(34962,BE(a.eG),a.eG,a.tQ);a.kV=0;}a:{e=CR(a.dq);if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data;h=Cy(a.dq,f);i=g[f];if(i>=0){b.lI(i);if(h.fd!=4)b.h3(i,h.cH,5126,0,a.dq.cN,h.cS);else b.h3(i,h.cH,5121,1,a.dq.cN,h.cS);}f=f+1|0;}}f=0;while(f<e){h=Cy(a.dq,f);i=b.lN(h.en);if(i>=0){b.lI(i);if(h.fd!=4)b.h3(i,h.cH,5126,0,a.dq.cN,h.cS);else b.h3(i,h.cH,5121,1,a.dq.cN,h.cS);}f=f+1|0;}}a.os=1;}
function AUx(a,b,c){var d,e,f,g;a:{d=BfD;e=CR(a.dq);if(c===null){f=0;while(f<e){b.Bi((Cy(a.dq,f)).en);f=f+1|0;}}else{f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0)b.tu(g);f=f+1|0;}}}d.c7(34962,0);a.os=0;}
var Vt=D(IV);
function Baa(a,b){var c=new Vt();A5g(c,a,b);return c;}
function A5g(a,b,c){Y4(a,0,b,c);}
var WA=D(V);
function A$J(){var a=new WA();APl(a);return a;}
function APl(a){BK(a);}
function ARX(a,b,c,d,e){Ch();Fq(b,c,(BB(e,Bjx)).dW);}
var Ww=D(V);
function Bcg(){var a=new Ww();AQk(a);return a;}
function AQk(a){BK(a);}
function ATB(a,b,c,d,e){var f,g,h,i;f=b.cW.d3;Cw();g=Bkh;h=(BB(e,g)).iy;i=f.gu(h);DQ(b,c,i);}
var Sp=D(T);
function Baz(){var a=new Sp();AH2(a);return a;}
function AH2(a){Bo(a);}
function A5q(a){return (CO()).bG(97,122);}
function Wv(){V.call(this);this.AQ=null;}
function A_5(){var a=new Wv();AJJ(a);return a;}
function AJJ(a){BK(a);a.AQ=OM();}
function AKk(a,b,c,d,e){Qx(b,c,((a.AQ.DF(d.dx)).Cq()).Ae());}
var Ku=D(0);
var Wy=D(V);
function A_C(){var a=new Wy();AXL(a);return a;}
function AXL(a){BK(a);}
function AFS(a,b,c,d,e){EP();Fi(b,c,(BB(e,Bji)).mb);}
var AAC=D();
function X8(){var a=this;C.call(a);a.d3=null;a.oa=0;a.sM=0;a.qn=0;a.gZ=0;a.Aq=0.0;a.wF=0.0;a.pt=0;a.oZ=0;}
function Bbf(a){var b=new X8();A8j(b,a);return b;}
function A8j(a,b){J(a);a.d3=b;}
function A6C(a){BfC.ee(2929);a.gZ=0;BfC.kL(1);a.pt=1;BfC.ee(3042);a.oa=0;BfC.ee(2884);a.qn=0;a.sM=0;a.oZ=0;a.d3.gT();}
function A8O(a){if(a.gZ)BfC.ee(2929);if(!a.pt)BfC.kL(1);if(a.oa)BfC.ee(3042);if(a.oZ>0)BfC.ee(2884);a.d3.be();}
function AFB(a,b){var c;if(a.pt!=b){c=BfC;a.pt=b;c.kL(b);}}
function AV3(a,b,c,d){var e,f,g;e=!a.gZ?0:1;f=!b?0:1;if(a.gZ!=b){a.gZ=b;if(!f)BfC.ee(2929);else{BfC.oT(2929);BfC.vj(b);}}if(f){if(!(e&&a.gZ==b)){g=BfC;a.gZ=b;g.vj(b);}if(!(e&&a.Aq===c&&a.wF===d)){g=BfC;a.Aq=c;a.wF=d;g.Jg(c,d);}}}
function A75(a,b,c,d){if(b!=a.oa){a.oa=b;if(!b)BfC.ee(3042);else BfC.oT(3042);}if(b&&!(a.sM==c&&a.qn==d)){BfC.Oz(c,d);a.sM=c;a.qn=d;}}
function AIP(a,b){if(b!=a.oZ){a.oZ=b;if(b!=1028&&b!=1029&&b!=1032)BfC.ee(2884);else{BfC.oT(2884);BfC.Iw(b);}}}
var QH=D(T);
function Bag(){var a=new QH();AET(a);return a;}
function AET(a){Bo(a);}
function ANX(a){return Baw(a);}
var G8=D();
function W0(a){J(a);}
function Yw(){var a=this;C.call(a);a.fl=null;a.dR=null;a.rz=0;a.Hs=0;a.jb=0;a.oK=0;a.yu=0;}
function A8V(a,b){var c=new Yw();AXt(c,a,b);return c;}
function AXt(a,b,c){J(a);a.jb=1;a.oK=0;a.dR=Mk(c*2|0);a.Hs=1;a.yu=!b?35048:35044;a.fl=a.dR.vK();a.fl.c$();a.dR.c$();a.rz=ABB(a);}
function ABB(a){var b;b=BfD.iW();BfD.c7(34963,b);BfD.fu(34963,CS(a.dR),null,a.yu);BfD.c7(34963,0);return b;}
function AN9(a){return BE(a.fl);}
function AS_(a){return CS(a.fl);}
function AZT(a,b,c,d){a.jb=1;a.fl.cZ();a.fl.Dc(b,c,d);a.fl.c$();a.dR.cX(0);a.dR.ck(d<<1);if(a.oK){BfD.qa(34963,0,BE(a.dR),a.dR);a.jb=0;}}
function ARf(a){a.jb=1;return a.fl;}
function AJ1(a){if(!a.rz)G(U(B(551)));BfD.c7(34963,a.rz);if(a.jb){a.dR.ck(BE(a.fl)*2|0);BfD.qa(34963,0,BE(a.dR),a.dR);a.jb=0;}a.oK=1;}
function AEF(a){BfD.c7(34963,0);a.oK=0;}
var HP=D(BR);
function Tb(a,b){CV(a,b);}
var VE=D(Bt);
function A$m(){var a=new VE();APq(a);return a;}
function APq(a){Cl(a);}
function AJE(a,b,c,d){if(b!=d.My())return (-1);return a.k.e(b,c,d);}
function ASp(a,b){return 0;}
function AUJ(a){return B(552);}
var WE=D(V);
function BbM(){var a=new WE();ADF(a);return a;}
function ADF(a){BK(a);}
function A5y(a,b,c,d,e){var f,g,h,i;f=b.cW.d3;Cw();g=Bki;h=(BB(e,g)).iy;i=f.gu(h);DQ(b,c,i);}
var WB=D(V);
function A$j(){var a=new WB();A7O(a);return a;}
function A7O(a){BK(a);}
function ARI(a,b,c,d,e){var f;Cw();f=BB(e,Bki);DM(b,c,f.i5,f.i4,f.jW,f.jX);}
var FO=D(BR);
var Beo=null;var Bkj=null;var Bkk=null;function Fg(){Fg=N(FO);AD7();}
function S_(a){var b=new FO();Sl(b,a);return b;}
function Sl(a,b){Fg();CV(a,B(26));a.et(!b?0:O5(0.0,0.0,0.0),b);}
function AEN(a){return QQ(a.b1);}
function AOL(a){return Zs(a.b1);}
function AZv(a){return WY(a.b1);}
function AGA(a,b,c,d){O2(a.b1,b,c,d);}
function Ge(b,c){Fg();c.L$(b.n,b.o,b.q);}
function VB(b,c){var d,e,f;Fg();d=b.KS();e=b.I1();f=b.Js();c.I(d,e,f);}
function AD7(){Beo=S_(1);Bkj=S_(1);Bkk=S_(1);}
function O5(b,c,d){var jsObj=new Bullet.btVector3(b,c,d);return Bullet.getPointer(jsObj);}
function QQ(b){var vec3=Bullet.wrapPointer(b,Bullet.btVector3);return vec3.x();}
function Zs(b){var vec3=Bullet.wrapPointer(b,Bullet.btVector3);return vec3.y();}
function WY(b){var vec3=Bullet.wrapPointer(b,Bullet.btVector3);return vec3.z();}
function O2(b,c,d,e){var vec3=Bullet.wrapPointer(b,Bullet.btVector3);vec3.setValue(c,d,e);}
var Wx=D(V);
function Bcj(){var a=new Wx();ADD(a);return a;}
function ADD(a){BK(a);}
function AMB(a,b,c,d,e){var f;Cw();f=BB(e,Bkh);DM(b,c,f.i5,f.i4,f.jW,f.jX);}
var WD=D(V);
function Bcl(){var a=new WD();AUE(a);return a;}
function AUE(a){BK(a);}
function AIk(a,b,c,d,e){Ch();Fq(b,c,(BB(e,Bjy)).dW);}
var KC=D(Cv);
function Bkl(a){var b=new KC();YT(b,a);return b;}
function YT(a,b){Eq(a,b);}
function ATO(a,b,c,d){var e;e=a.j6();d.bx(e,b-d.ep(e)|0);return a.k.e(b,c,d);}
function AWG(a){return B(553);}
function A5s(a,b){return 0;}
var WC=D(V);
function Bab(){var a=new WC();AHJ(a);return a;}
function AHJ(a){BK(a);}
function AWN(a,b,c,d,e){Ch();Fq(b,c,(BB(e,BjA)).dW);}
var K0=D();
var Bkm=null;function EX(){EX=N(K0);AJM();}
function Iu(b,c){EX();return b+Bkm.LN((c-b|0)+1|0)|0;}
function Ej(b,c){EX();return b+Bkm.FD()*(c-b);}
function IG(b){var c,d;EX();if(!b)return 1;c=b+(-1)|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function KL(b){EX();return b&&!(b&(b-1|0))?1:0;}
function DB(b){EX();return CD(b)>9.999999974752427E-7?0:1;}
function Dg(b,c){EX();return CD(b-c)>9.999999974752427E-7?0:1;}
function R6(b,c,d){EX();return CD(b-c)>d?0:1;}
function AJM(){Bkm=Baf();}
var M8=D(0);
var LD=D(0);
function UF(){BI.call(this);this.ra=0;}
function A_s(a){var b=new UF();A5$(b,a);return b;}
function A5$(a,b){CZ(a);a.bP=2;a.ra=ET(El(b));}
function AOT(a,b,c){var d,e,f;d=b+1|0;e=c.f(b);f=c.f(d);return a.ra!=ET(El(Dd(e,f)))?(-1):2;}
function A9f(a){return (((I()).a(B(427))).a(LR(Er(a.ra)))).b();}
function Uo(){var a=this;Ic.call(a);a.xH=0;a.ur=0.0;a.wl=0;a.kO=0.0;a.Bb=0;a.jo=0;a.iv=0;a.BL=0;a.Dn=0.0;a.AH=0.0;a.oL=0;a.i0=null;a.uy=0;a.qK=0;a.yF=0;a.rA=0;a.x6=0;a.sR=0;a.EN=0;a.rr=0;a.z8=0;a.qs=0;a.wK=0;a.cy=null;a.fo=0;a.s7=0.0;a.s8=0.0;a.fq=null;a.tb=null;a.Bx=null;a.ie=0;a.sq=0;}
function Bkn(a,b){var c=new Uo();PT(c,a,b);return c;}
function A$z(a){var b=new Uo();AEu(b,a);return b;}
function PT(a,b,c){UM(a,b);a.xH=0;a.ur=360.0;a.wl=1;a.kO=10.0;a.Bb=2;a.jo=0;a.BL=1;a.Dn=(-0.10000000149011612);a.AH=10.0;a.oL=1;a.i0=S();a.uy=1;a.qK=1;a.yF=0;a.rA=51;a.sR=47;a.rr=29;a.qs=32;a.fo=(-1);a.fq=S();a.tb=S();a.Bx=b;a.Bx.wx=a;a.cy=c;}
function AEu(a,b){PT(a,BcP(),b);}
function AI3(a,b,c,d,e){a.ie=a.ie|1<<d;a.sq=KL(a.ie)?0:1;if(a.sq)a.fo=(-1);else if(a.fo<0&&!(a.jo&&!a.iv)){a.s7=b;a.s8=c;a.fo=e;}return !Oi(a,b,c,d,e)&&a.jo&&!a.iv?0:1;}
function AZH(a,b,c,d,e){a.ie=a.ie&((-1)^1<<d);a.sq=KL(a.ie)?0:1;if(e==a.fo)a.fo=(-1);return !Zw(a,b,c,d,e)&&!a.iv?0:1;}
function AXb(a,b,c,d){if(d==a.xH){((a.fq.M(a.cy.c6)).ir(a.cy.dp)).o=0.0;a.cy.yU(a.i0,a.fq.bU(),c*a.ur);a.cy.yU(a.i0,Bj5,b* -a.ur);}else if(d==a.wl){a.cy.k4((((a.fq.M(a.cy.c6)).ir(a.cy.dp)).bU()).eh( -b*a.kO));a.cy.k4((a.tb.M(a.cy.dp)).eh( -c*a.kO));if(a.uy)(a.i0.fs(a.fq)).fs(a.tb);}else if(d==a.Bb){a.cy.k4((a.fq.M(a.cy.c6)).eh(c*a.kO));if(a.qK)a.i0.fs(a.fq);}if(a.oL)a.cy.fX();return 1;}
function AI$(a,b,c,d){var e,f,g,h,i,j;e=U6(a,b,c,d);if(!e&&a.fo>=0){f=b;g=(f-a.s7)/Bfz.bp();h=a.s8;i=c;j=(h-i)/Bfz.bm();a.s7=f;a.s8=i;return a.HI(g,j,a.fo);}return e;}
function AQO(a,b,c){return a.yH(c*a.Dn*a.kO);}
function A1r(a,b){if(!a.BL&&a.jo&&!a.iv)return 0;a.cy.k4((a.fq.M(a.cy.c6)).eh(b));if(a.yF)a.i0.fs(a.fq);if(a.oL)a.cy.fX();return 1;}
function AQS(a,b){return a.yH(a.AH*b);}
function AC8(a,b){if(b==a.jo)a.iv=1;if(b==a.rA)a.x6=1;else if(b==a.sR)a.EN=1;else if(b==a.rr)a.z8=1;else if(b==a.qs)a.wK=1;return 0;}
function A0p(a,b){if(b==a.jo){a.iv=0;a.fo=(-1);}if(b==a.rA)a.x6=0;else if(b==a.sR)a.EN=0;else if(b==a.rr)a.z8=0;else if(b==a.qs)a.wK=0;return 0;}
var Gb=D();
var Bko=null;var Bkp=null;var Bkq=null;function Ef(){var b;if(Bko===null){b=new Ho;ARO();NJ(b,Bfw,0);Bko=b;}return Bko;}
function SY(){var b;if(Bkp===null){b=new Ho;A1p();NJ(b,BiI,0);Bkp=b;}return Bkp;}
function Y(b,c,d,e,f){var g,h,i,j,k,l,m,n;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Zy(b)){g=e+f|0;if(g<=Zy(d)){a:{b:{if(b!==d){h=(Cf(b)).gg();i=(Cf(d)).gg();if(h!==null&&i!==null){if(h===i)break b;if(!h.g4()&&!i.g4()){j=b;k=0;g=c;while(k<f){l=j.data;m=g+1|0;n=l[g];if(!i.vE(n)){ML(b,c,d,e,k);G(P0());}k=k+1|0;g=m;}ML(b,c,d,e,f);return;}if(!h.g4())break a;if(i.g4())break b;else break a;}G(P0());}}ML(b,c,d,e,f);return;}G(P0());}}G(C6());}G(AOe(B(554)));}
function ML(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function D8(){return Long_fromNumber(new Date().getTime());}
function AXV(){var b;if(Bkq===null){b=A$4();b.x(B(555),B(556));b.x(B(557),B(558));b.x(B(559),B(386));b.x(B(560),B(13));b.x(B(561),AXS());b.x(B(562),APR());b.x(B(563),B(556));b.x(B(564),A8D());Bkq=A$8(b);}}
function APR(){return B(565);}
function A8D(){return B(386);}
function Gd(b,c){AXV();return Bkq.x(b,c);}
function AXS(){return B(326);}
function QF(){var a=this;C.call(a);a.Ny=null;a.hm=null;a.r6=null;a.qZ=0;a.zk=0.0;a.hI=0.0;a.qu=0.0;a.iQ=0.0;a.rV=0.0;a.eV=0.0;a.lT=0.0;a.ip=0.0;a.kd=0.0;a.w0=0.0;a.eH=0.0;a.zL=0.0;a.C2=0;a.g3=null;a.ii=null;a.va=0.0;a.tq=0.0;a.C7=null;a.v4=null;a.w8=null;}
function Ba3(a,b){var c=new QF();A2y(c,a,b);return c;}
function A2y(a,b,c){J(a);a.eV=1.0;a.w0=1.0;a.eH=1.0;a.zL=1.0;a.g3=X($rt_arraycls(Jk),128);a.tq=1.0;a.v4=IR([120,101,97,111,110,115,114,99,117,109,118,119,122]);a.w8=IR([77,78,66,68,67,69,70,75,65,71,72,73,74,76,79,80,81,82,83,84,85,86,87,88,89,90]);a.r6=b;a.qZ=c;a.OK(b,c);}
function AFi(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,$$je;if(a.hm!==null)G(DN(B(566)));a.Ny=b.Ng();d=A_v(Bbh(b.qi()),512);a:{b:{try{e=d.k$();if(e===null)G(U(B(567)));f=e.ef(e.Mr(B(568))+8|0);g=(f.cd(0,f.Ku(32))).vk(B(23),4);h=g.data;if(h.length!=4)G(U(B(569)));a.zk=BS(h[0]);a.hI=BS(h[1]);a.qu=BS(h[2]);a.iQ=BS(h[3]);i=a.zk+a.qu;f=d.k$();if(f===null)G(U(B(570)));j=f.vk(B(58),9);h=j.data;k=h.length;if(k<3)G(U(B(571)));if(!h[1].eR(B(572)))G(U(B(573)));a.rV
=BS(h[1].ef(11));if(!h[2].eR(B(574)))G(U(B(575)));c:{l=BS(h[2].ef(5));m=1;if(k<6)n=m;else if(h[5]===null)n=m;else if(!h[5].eR(B(576)))n=m;else{try{n=Bf(1,BS(h[5].ef(6)));m=n;break c;}catch($$e){$$je=R($$e);if($$je instanceof Dp){}else{throw $$e;}}n=m;}}a.hm=X(BL,n);o=0;d:{e:{f:{while(true){if(o>=n)break d;f=d.k$();if(f===null)G(U(B(577)));g:{p=Gz(Gw(B(578)),f);if(F1(p)){q=F8(p,1);try{r=BS(q);if(r!=o)break f;break g;}catch($$e){$$je=R($$e);if($$je instanceof Dp){s=$$je;break e;}else{throw $$e;}}}}f=Gz(Gw(B(579)),
f);if(!F1(f))break;t=F8(f,1);a.hm.data[o]=(((b.Kh()).JO(t)).rf()).F5(B(580),B(386));o=o+1|0;}G(U(B(581)));}try{G(U((((I()).a(B(582))).a(q)).b()));}catch($$e){$$je=R($$e);if($$je instanceof Dp){s=$$je;}else{throw $$e;}}}G(I1((((I()).a(B(583))).a(q)).b(),s));}a.ip=0.0;h:{while(true){f=d.k$();if(f===null)break;if(f.eR(B(584)))break h;if(f.eR(B(585)))break h;if(!f.eR(B(586)))continue;u=AEr();v=Tp(f,B(587));v.O();v.O();w=BS(v.O());if(w<=0)a.ii=u;else{if(w>65535)continue;a.xV(w,u);}u.eP=w;v.O();u.sV=BS(v.O());v.O();u.sW
=BS(v.O());v.O();u.cs=BS(v.O());v.O();u.cK=BS(v.O());v.O();u.dn=BS(v.O());v.O();if(c)u.i_=BS(v.O());else u.i_= -(u.cK+BS(v.O())|0)|0;v.O();u.gp=BS(v.O());if(v.v8())v.O();i:{if(v.v8())try{u.jO=BS(v.O());break i;}catch($$e){$$je=R($$e);if($$je instanceof Dp){}else{throw $$e;}}}if(u.cs>0&&u.cK>0)a.ip=Jd(l+u.i_,a.ip);}}a.ip=a.ip+a.qu;j:{while(true){f=d.k$();if(f===null)break;if(!f.eR(B(588)))break j;v=Tp(f,B(587));v.O();v.O();x=BS(v.O());v.O();y=BS(v.O());if(x<0)continue;if(x>65535)continue;if(y<0)continue;if(y
>65535)continue;u=a.ih(x&65535);v.O();z=BS(v.O());if(u!==null)u.F3(y,z);}}ba=0;bb=0.0;bc=0.0;bd=0.0;be=0.0;bf=0.0;bg=0.0;bh=0.0;if(f!==null&&f.eR(B(585))){ba=1;v=Tp(f,B(587));v.O();v.O();bb=D7(v.O());v.O();bc=D7(v.O());v.O();bd=D7(v.O());v.O();be=D7(v.O());v.O();bf=D7(v.O());v.O();bg=D7(v.O());v.O();bh=D7(v.O());}bi=a.ih(32);if(bi===null){bi=AEr();bi.eP=32;bj=a.ih(108);if(bj===null)bj=a.Cn();bi.gp=bj.gp;a.xV(32,bi);}if(!bi.cs){bi.cs=a.iQ+bi.gp+a.hI|0;bi.dn= -a.iQ|0;}a.va=bi.gp;bk=null;h=a.v4.data;k=h.length;bl
=0;k:{while(bl<k){bm=h[bl];bk=a.ih(bm);if(bk!==null)break k;bl=bl+1|0;}}if(bk===null)bk=a.Cn();a.tq=bk.cK-i;bn=null;h=a.w8.data;n=h.length;k=0;l:{while(k<n){bo=h[k];bn=a.ih(bo);if(bn!==null)break l;k=k+1|0;}}if(bn!==null)a.eV=bn.cK;else{h=a.g3.data;n=h.length;k=0;while(k<n){m:{bp=h[k];if(bp!==null){bq=bp.data;bl=bq.length;br=0;while(true){if(br>=bl)break m;u=bq[br];if(u!==null&&u.cK&&u.cs)a.eV=Eg(a.eV,u.cK);br=br+1|0;}}}k=k+1|0;}}a.eV=a.eV-i;a.lT=l-a.eV;a.kd= -a.rV;if(c){a.lT= -a.lT;a.kd= -a.kd;}if(ba){a.lT
=bb;a.ip=bc;a.kd=bd;a.eV=be;a.rV=bf;a.va=bg;a.tq=bh;}}catch($$e){$$je=R($$e);if($$je instanceof B2){s=$$je;break b;}else{f=$$je;break a;}}LA(d);return;}try{G(I1((((I()).a(B(589))).dC(b)).b(),s));}catch($$e){$$je=R($$e);f=$$je;}}LA(d);G(f);}
function AT2(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=c.AN();e=1.0/d.bp();f=1.0/d.bm();g=0.0;h=0.0;i=c.zp;j=c.zs;k=c.Hz();l=c.KM();if(c instanceof Kh){m=c;g=m.MV;h=(m.LO-m.NN|0)-m.MT;}n=b.sV;o=b.sV+b.cs|0;p=b.sW;q=b.sW+b.cK|0;if(g<=0.0)k=o;else{n=n-g;if(n<0.0){b.cs=b.cs+n|0;b.dn=b.dn-n|0;n=0.0;}r=o-g;if(r<=k)k=r;else b.cs=b.cs-(r-k)|0;}if(h<=0.0)l=q;else{p=p-h;if(p<0.0){b.cK=b.cK+p|0;if(b.cK<0)b.cK=0;p=0.0;}r=q-h;if(r<=l)l=r;else{s=r-l;b.cK=b.cK-s|0;b.i_=b.i_+s|0;}}b.vm=i+n*e;b.A0=i+k*e;if(!a.qZ){b.s2=j
+p*f;b.pU=j+l*f;}else{b.pU=j+p*f;b.s2=j+l*f;}}
function AR2(a,b,c){var d,e,f;d=a.g3.data;e=b/512|0;f=d[e];if(f===null){d=a.g3.data;f=X(Jk,512);d[e]=f;}f.data[b&511]=c;}
function A1T(a){var b,c,d,e,f,g,h,i;b=a.g3.data;c=b.length;d=0;a:while(true){if(d>=c)G(U(B(590)));b:{e=b[d];if(e!==null){f=e.data;g=f.length;h=0;while(true){if(h>=g)break b;i=f[h];if(i!==null&&i.cK&&i.cs)break a;h=h+1|0;}}}d=d+1|0;}return i;}
function AFN(a,b){var c;c=a.g3.data[b/512|0];if(c===null)return null;return c.data[b&511];}
function AE3(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q;g=e-d|0;if(!g)return;h=a.C2;i=a.eH;j=b.bj;k=b.bo;j.w5(g);b.bo.DE(g+1|0);while(true){a:{l=d+1|0;m=c.f(d);if(m!=13){n=a.ih(m);if(n===null){if(a.ii===null)break a;n=a.ii;}j.E(n);if(f!==null){o=f.gp;p=(o+f.Jv(m)|0)*i;}else p=n.n_?0.0:( -n.dn|0)*i-a.iQ;k.zX(p);if(!h)f=n;else if(m!=91)f=n;else if(l>=e)f=n;else if(c.f(l)!=91)f=n;else{l=l+1|0;f=n;}}}if(l>=e)break;d=l;}if(f!==null){q=f.n_?f.gp*i:(f.cs+f.dn|0)*i-a.hI;k.zX(q);}}
function ACk(a,b,c){var d,e,f,g,h;d=c-1|0;e=b.P;f=e.data;g=f[d].eP&65535;if(a.jl(g))return d;if(a.xf(g))d=d+(-1)|0;a:{while(d>0){h=f[d].eP&65535;if(a.jl(h))break a;if(a.xf(h))break a;d=d+(-1)|0;}return 0;}return d+1|0;}
function AFy(a,b){var c,d,e,f;if(a.C7===null)return 0;c=a.C7.data;d=c.length;e=0;while(e<d){f=c[e];if(b==f)return 1;e=e+1|0;}return 0;}
function AGc(a,b){switch(b){case 9:case 10:case 13:case 32:break;default:return 0;}return 1;}
function Sn(){var a=this;C.call(a);a.sQ=null;a.Pv=null;a.Ll=null;a.KL=null;a.OB=null;}
function BcQ(){var a=new Sn();A6H(a);return a;}
function A6H(a){J(a);a.sQ=null;}
var M4=D();
var Bkr=null;function D$(){return Bkr;}
function AKr(b){Bkr=b;}
function WM(){var a=this;T.call(a);a.xh=0;a.CC=0;}
function M(a,b){var c=new WM();A76(c,a,b);return c;}
function A76(a,b,c){Bo(a);a.xh=b;a.CC=c;}
function AKQ(a){var b;b=(CO()).bG(a.xh,a.CC);return b;}
function TX(){var a=this;C.call(a);a.fN=0;a.qz=0.0;a.qA=0.0;a.n4=0.0;a.n3=0.0;a.uk=Bb;a.gm=0;a.po=null;a.pn=null;a.kl=null;}
function BcI(){var a=new TX();ACr(a);return a;}
function ACr(a){J(a);a.fN=10;a.po=B9(a.fN);a.pn=B9(a.fN);a.kl=Bdo(a.fN);}
function ALO(a,b,c,d){var e;a.qz=b;a.qA=c;a.n4=0.0;a.n3=0.0;a.gm=0;e=0;while(e<a.fN){a.po.data[e]=0.0;a.pn.data[e]=0.0;a.kl.data[e]=Bb;e=e+1|0;}a.uk=d;}
function AK4(a,b,c,d){var e,f;a.n4=b-a.qz;a.n3=c-a.qA;a.qz=b;a.qA=c;e=D2(d,a.uk);a.uk=d;f=a.gm%a.fN|0;a.po.data[f]=a.n4;a.pn.data[f]=a.n3;a.kl.data[f]=e;a.gm=a.gm+1|0;}
function A0q(a){var b,c;b=MW(a,a.po,a.gm);c=Q1(Mi(a,a.kl,a.gm))/1.0E9;if(c!==0.0)return b/c;return 0.0;}
function A4i(a){var b,c;b=MW(a,a.pn,a.gm);c=Q1(Mi(a,a.kl,a.gm))/1.0E9;if(c!==0.0)return b/c;return 0.0;}
function MW(a,b,c){var d,e,f;d=Bq(a.fN,c);e=0.0;f=0;while(f<d){e=e+b.data[f];f=f+1|0;}return e/d;}
function Mi(a,b,c){var d,e,f;d=Bq(a.fN,c);e=Bb;f=0;while(f<d){e=Dx(e,b.data[f]);f=f+1|0;}if(!d)return Bb;return E8(e,O(d));}
function ABE(){Hw.call(this);this.jd=null;}
function Bbb(a){var b=new ABE();A37(b,a);return b;}
function A37(a,b){a.jd=b;PA(a);}
function A3q(a){if(!a.jd.mv)a.jd.mv=a.jd.dU.NB(a.jd.d5.eM,a.jd.d5.eL);}
var WF=D(T);
function Ba$(){var a=new WF();AEq(a);return a;}
function AEq(a){Bo(a);}
function ARD(a){return (((CO()).bG(48,57)).bG(97,102)).bG(65,70);}
function YC(){var a=this;C.call(a);a.Gp=null;a.Eo=null;a.eU=null;a.bK=null;a.iq=0;a.jp=0;a.oU=0;a.mT=null;a.qy=null;a.eY=null;}
function A$x(a,b){var c=new YC();AB6(c,a,b);return c;}
function Xh(a,b,c){a.qy=Zo(a,c);b.A9(a.eU.d8(a.oU,Lu(a)));b.H1(a.qy);a.oU=Mv(a);return a;}
function Zo(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$$je;if(a.mT!==null&&a.mT.z(b)){if(a.eY===null)return a.qy;c=I();d=0;while(d<a.eY.db()){c.dC(a.eY.l(d));d=d+1|0;}return c.b();}a.mT=b;e=b.rg();f=I();a.eY=null;g=0;h=0;i=0;a:{b:while(true){j=e.data;k=j.length;if(g>=k){if(a.eY!==null&&h!=f.i())a.eY.hR(f.d8(h,f.i()));return f.b();}if(j[g]==92&&!i){i=1;g=g+1|0;}c:{if(i){if(g>=k)break b;f.U(j[g]);i=0;}else if(j[g]!=36)f.U(j[g]);else{if(a.eY===null)a.eY=R1();d:{try{l=new BL;g=g+1|0;N$(l,e,g,1);m=BS(l);if(h==f.i())break d;a.eY.hR(f.d8(h,
f.i()));h=f.i();break d;}catch($$e){$$je=R($$e);if($$je instanceof B2){break a;}else{throw $$e;}}}try{a.eY.hR(A$_(a,m));n=F8(a,m);h=h+n.i()|0;f.a(n);break c;}catch($$e){$$je=R($$e);if($$je instanceof B2){break a;}else{throw $$e;}}}}g=g+1|0;}G(C6());}G(W(B(103)));}
function AAe(a){a.iq=0;a.jp=a.eU.i();a.bK.to(a.eU,a.iq,a.jp);a.oU=0;a.mT=null;a.bK.hh=(-1);return a;}
function AAG(a,b){return b.A9(a.eU.d8(a.oU,a.eU.i()));}
function ABn(a,b){var c;c=A4K();AAe(a);while(F1(a)){Xh(a,c,b);}return (AAG(a,c)).b();}
function F8(a,b){return a.bK.Bu(b);}
function Jr(a,b){var c,d;c=a.eU.i();if(b>=0&&b<=c){d=ZQ(a,b);if(d>=0&&a.bK.KI()){a.bK.LG();return 1;}a.bK.d$=(-1);return 0;}G(Bg(I5(b)));}
function ZQ(a,b){var c;a.bK.fM();a.bK.pz(1);a.bK.Gx(b);c=a.Eo.cB(b,a.eU,a.bK);if(c==(-1))a.bK.d2=1;return c;}
function F1(a){var b,c;b=a.eU.i();if(!OL(a))b=a.jp;if(a.bK.d$>=0&&a.bK.B4()==1){a.bK.d$=a.bK.pC();if(a.bK.pC()==a.bK.wb()){c=a.bK;c.d$=c.d$+1|0;}return a.bK.d$<=b&&Jr(a,a.bK.d$)?1:0;}return Jr(a,a.iq);}
function Ul(a,b){return a.bK.lu(b);}
function OF(a,b){return a.bK.o1(b);}
function Lu(a){return Ul(a,0);}
function Mv(a){return OF(a,0);}
function OL(a){return a.bK.lz();}
function AB6(a,b,c){var d,e,f,g,h;J(a);a.iq=(-1);a.jp=(-1);a.Gp=b;a.Eo=b.ru;a.eU=c;a.iq=0;a.jp=a.eU.i();d=new Nm;e=a.iq;f=a.jp;g=UV(b);h=AAT(b);RI(d,c,e,f,g,h,R3(b));a.bK=d;}
var Tr=D(BC);
function Bam(){var a=new Tr();A25(a);return a;}
function A25(a){CM(a);}
function AR1(a,b,c,d){var e,f,g,h,i;e=d.J();f=b+1|0;if(f>e){d.d2=1;return (-1);}g=c.f(b);if(BX(g)){h=b+2|0;if(h<=e){i=c.f(f);if(Go(g,i))return a.k.e(h,c,d);}}return a.k.e(f,c,d);}
function AGg(a){return B(591);}
function AVu(a,b){a.k=b;}
function A20(a){return (-2147483602);}
function AVr(a,b){return 1;}
function YR(){Q.call(this);this.MQ=null;}
function A_L(a){var b=new YR();AO8(b,a);return b;}
function AO8(a,b){a.MQ=b;Be(a);}
function AQL(a,b){return TA(b);}
function Ow(){var a=this;FH.call(a);a.zY=0.0;a.yK=null;}
function BaH(){var a=new Ow();AY1(a);return a;}
function AY1(a){K8(a);a.zY=67.0;a.yK=S();}
function AFe(a){a.pV(1);}
function AO7(a,b){var c;c=a.kq/a.l3;a.jr.JP(CD(a.k5),CD(a.jG),a.zY,c);a.hf.BD(a.co,(a.yK.M(a.co)).fs(a.c6),a.dp);a.eD.cg(a.jr);GR(a.eD.c,a.hf.c);if(b){a.hG.cg(a.eD);Mw(a.hG.c);a.rI.Ak(a.hG);}}
function T9(){C.call(this);this.B$=null;}
function A$q(a){var b=new T9();AZy(b,a);return b;}
function AZy(a,b){J(a);a.B$=b;}
function A69(a){A0A(a.B$);}
var UT=D(C1);
function A2F(a){var b=new UT();AFT(b,a);return b;}
function AFT(a,b){Zu(a,b);}
function AJC(a,b){return a.dZ.p(ET(El(b)));}
function ARR(a){return ((((I()).a(B(338))).a(!a.rn?B(58):B(59))).a(a.dZ.b())).b();}
var Ux=D(T);
function A9G(){var a=new Ux();AOj(a);return a;}
function AOj(a){Bo(a);}
function AS4(a){var b;b=Ba2(a);b.bf=1;return b;}
function Me(){var a=this;BC.call(a);a.gh=null;a.uE=null;a.kU=0;}
function A6Y(a,b){var c=new Me();ATE(c,a,b);return c;}
function ATE(a,b,c){CM(a);a.gh=b;a.kU=c;}
function ALb(a,b){a.k=b;}
function Hp(a){if(a.uE===null)a.uE=LR(a.gh);return a.uE;}
function AOG(a){return (((I()).a(B(592))).a(Hp(a))).b();}
function ACd(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;e=d.J();f=0;g=Bc(3);h=(-1);i=(-1);if(b>=e)return (-1);j=b+1|0;k=c.f(b);l=AFU(k);if(l!==null){m=l.data;n=0;if(m.length!=a.kU)return (-1);while(true){if(n>=a.kU)return a.k.e(j,c,d);if(m[n]!=a.gh.data[n])break;n=n+1|0;}return (-1);}o=g.data;o[f]=k;p=k-4352|0;if(p>=0&&p<19){if(j<e){k=c.f(j);h=k-4449|0;}if(h>=0&&h<21){q=j+1|0;o[1]=k;if(q<e){k=c.f(q);i=k-4519|0;}if(i>=0&&i<28){r=q+1|0;o[2]=k;r=a.kU==3&&o[0]==a.gh.data[0]&&o[1]==a.gh.data[1]&&o[2]==a.gh.data[2]
?a.k.e(r,c,d):(-1);return r;}r=a.kU==2&&o[0]==a.gh.data[0]&&o[1]==a.gh.data[1]?a.k.e(q,c,d):(-1);return r;}return (-1);}return (-1);}
function AVs(a,b){var c,d;a:{if(b instanceof Me){c=b;if(!(Hp(c)).z(Hp(a))){d=0;break a;}}d=1;}return d;}
function AQb(a,b){return 1;}
var Uq=D(T);
function A$X(){var a=new Uq();A2k(a);return a;}
function A2k(a){Bo(a);}
function AZm(a){return (((CO()).bG(33,64)).bG(91,96)).bG(123,126);}
function Ke(){var a=this;C.call(a);a.fm=null;a.dP=null;a.rN=0;a.J0=0;a.t7=0;a.kR=0;a.pP=0;a.th=0;a.d1=null;}
var Bks=null;function AHw(){AHw=N(Ke);A89();}
function A0F(a,b,c){var d=new Ke();WP(d,a,b,c);return d;}
function WP(a,b,c,d){AHw();J(a);a.kR=0;a.pP=0;a.th=(-1);a.d1=GS();a.J0=b;a.fm=d;a.dP=HJ(Cb(a.fm.cN/4|0,c));a.dP.c$();a.rN=BfD.iW();a.t7=!b?35048:35044;Qr(a);}
function AUI(a){return a.fm;}
function AQe(a){return (CS(a.dP)*4|0)/a.fm.cN|0;}
function Vx(a){if(a.pP){BfD.fu(34962,BE(a.dP),a.dP,a.t7);a.kR=0;}}
function AU1(a,b,c,d){a.kR=1;NG(b,a.dP,d,c);a.dP.cX(0);a.dP.ck(d);Vx(a);}
function APE(a,b,c){var d;d=BfE;d.Pr(a.th);AAg(a,b,c);AAk(a,d);a.pP=1;}
function AAg(a,b,c){var d,e,f,g,h,i;d=!a.d1.bS?0:1;a:{e=CR(a.fm);if(d){if(c===null){f=0;while(d&&f<e){g=Cy(a.fm,f);h=b.lN(g.en);d=h!=a.d1.b2(f)?0:1;f=f+1|0;}}else{i=c.data;d=i.length!=a.d1.bS?0:1;f=0;while(d){if(f>=e)break a;d=i[f]!=a.d1.b2(f)?0:1;f=f+1|0;}}}}b:{if(!d){BfC.c7(34962,a.rN);T_(a,b);a.d1.K();f=0;while(true){if(f>=e)break b;g=Cy(a.fm,f);if(c!==null){i=c.data;a.d1.iO(i[f]);}else a.d1.iO(b.lN(g.en));h=a.d1.b2(f);if(h>=0){b.lI(h);b.h3(h,g.cH,g.hH,g.ia,a.fm.cN,g.cS);}f=f+1|0;}}}}
function T_(a,b){var c,d,e;if(a.d1===null)return;c=CR(a.fm);d=0;while(d<c){e=a.d1.b2(d);if(e>=0)b.tu(e);d=d+1|0;}}
function AAk(a,b){if(a.kR){b.c7(34962,a.rN);a.dP.ck(BE(a.dP));b.fu(34962,BE(a.dP),a.dP,a.t7);a.kR=0;}}
function AGl(a,b,c){var d;d=BfE;d.Pr(0);a.pP=0;}
function Qr(a){AHw();Bks.cZ();BfE.TI(1,Bks);a.th=Bks.Ko();}
function A89(){Bks=Ff(1);}
var Qg=D();
function ARY(b){$rt_putStderr(b);}
function A57(b){$rt_putStdout(b);}
function G3(){var a=this;C.call(a);a.bj=null;a.bo=null;a.dd=0.0;a.iB=0.0;a.j1=0.0;a.jU=null;}
function Bkt(){var a=new G3();AYG(a);return a;}
function AYG(a){J(a);a.bj=Bp();a.bo=RV();a.jU=DY();}
function AJ6(a){a.bj.K();a.bo.K();a.j1=0.0;}
function ADi(a){var b,c,d,e,f;b=F6(a.bj.h+32|0);c=a.bj;d=0;e=c.h;while(d<e){f=c.l(d);b.U(f.eP&65535);d=d+1|0;}b.a(B(593));b.dC(a.jU);b.a(B(442));b.cA(a.dd);b.a(B(442));b.cA(a.iB);b.a(B(442));b.cA(a.j1);return b.b();}
var L1=D(Di);
function Sg(){var a=this;Ci.call(a);a.n1=null;a.H_=null;}
function Bav(a,b){var c=new Sg();A6n(c,a,b);return c;}
function A6n(a,b,c){a.H_=b;a.n1=c;D9(a);}
function A8Q(a,b){a.n1.fr(b);}
function AKP(a,b){a.n1.da(b);}
function ALr(a,b,c){return a.n1.dk(b,null);}
function AJA(a,b,c){return a.t1(b,c);}
function Z8(){Ci.call(this);this.Na=null;}
function A$P(a){var b=new Z8();AWj(b,a);return b;}
function AWj(a,b){a.Na=b;D9(a);}
function ASN(a,b){}
function AF$(a,b){}
function A7a(a,b,c){return 0;}
var FE=D(0);
function Sc(){var a=this;C.call(a);a.nv=null;a.tV=null;a.nS=null;a.qH=null;}
function A_q(a,b,c,d){var e=new Sc();AHZ(e,a,b,c,d);return e;}
function AHZ(a,b,c,d,e){a.qH=b;a.nv=c;a.tV=d;a.nS=e;J(a);}
function AHb(a,b){var c,d;if(a.nv.readyState==4){if(a.nv.status!=200)a.tV.da(a.nS);else{if(Ni(a.qH))(Ef()).f9((((I()).a(B(594))).a(a.nS)).b());c=a.nv.response;d=(DR()).PD(c);a.tV.dk(a.nS,BdG(d));}a.qH.jS();}}
function AZF(a,b){a.dT(b);}
function Sb(){var a=this;Ci.call(a);a.mn=null;a.qf=null;a.wS=0;a.CX=null;a.mP=null;}
function Bdz(a,b,c,d,e){var f=new Sb();AP8(f,a,b,c,d,e);return f;}
function AP8(a,b,c,d,e,f){a.mP=b;a.mn=c;a.qf=d;a.wS=e;a.CX=f;D9(a);}
function A9C(a,b){a.mn.fr(b);}
function A8z(a,b){a.mn.da(b);}
function AD0(a,b,c){var d,e,f;d=(PF(a.mP)).OU();if(a.qf!==null){e=a.qf;d.setAttribute("crossOrigin",$rt_ustr(e));}a.mP.nu();AE4(d,Bap(a,b,d));if(!a.wS){f=$rt_ustr(b);d.src=f;}else{f=$rt_ustr((((((I()).a(B(595))).a(a.CX)).a(B(596))).a(RY(c))).b());d.src=f;}return 0;}
function ARx(a,b,c){return a.t1(b,c);}
function Sa(){var a=this;C.call(a);a.yI=null;a.FO=null;}
function BaY(a,b){var c=new Sa();AUa(c,a,b);return c;}
function AUa(a,b,c){a.FO=b;a.yI=c;J(a);}
function A5Y(a,b){a.yI.fr(b.loaded);}
function AV4(a,b){a.dT(b);}
var K3=D();
var Be8=null;function BbR(){BbR=N(K3);ATK();}
function ATK(){Be8=Bc((LT()).data.length);Be8.data[BD(Bha)]=1;Be8.data[BD(Bhb)]=2;Be8.data[BD(Bhc)]=3;Be8.data[BD(Bhd)]=4;Be8.data[BD(Bhe)]=5;}
function Uj(){var a=this;C.call(a);a.pK=null;a.jV=null;a.Ab=null;a.pO=null;a.om=null;a.r1=null;a.L9=null;}
function A$B(){var a=new Uj();ACn(a);return a;}
function ACn(a){J(a);a.pK=Bp();a.jV=Bp();a.Ab=Bp();a.pO=Bp();a.om=Bp();a.r1=Bp();a.L9=DC();}
function A66(a,b){if(!a.r1.ij(b,1))a.r1.E(b);}
function Si(){var a=this;C.call(a);a.nf=null;a.tl=null;a.nR=null;a.tf=null;}
function A_9(a,b,c,d){var e=new Si();AHM(e,a,b,c,d);return e;}
function AHM(a,b,c,d,e){a.tf=b;a.nf=c;a.tl=d;a.nR=e;J(a);}
function AXs(a,b){if(a.nf.readyState==4){if(a.nf.status!=200)a.tl.da(a.nR);else{if(Ni(a.tf))(Ef()).f9((((I()).a(B(594))).a(a.nR)).b());a.tl.dk(a.nR,$rt_str(a.nf.responseText));}a.tf.jS();}}
function AG5(a,b){a.dT(b);}
function PY(){Bt.call(this);this.za=0;}
function A6F(a){var b=new PY();AJG(b,a);return b;}
function AJG(a,b){Cl(a);a.za=b;}
function AU9(a,b,c,d){var e,f,g,h,i;e=b<d.J()?c.f(b):32;f=!b?32:c.f(b-1|0);g=!d.lz()?d.dH():0;h=e!=32&&!Mz(a,e,b,g,c)?0:1;i=f!=32&&!Mz(a,f,b-1|0,g,c)?0:1;return h^i^a.za?(-1):a.k.e(b,c,d);}
function AVo(a,b){return 0;}
function A9j(a){return B(597);}
function Mz(a,b,c,d,e){var f;if(!MH(b)&&b!=95){a:{if(F0(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=e.f(c);if(MH(f))return 0;if(F0(f)!=6)return 1;}}return 1;}return 0;}
function Fn(){var a=this;C.call(a);a.DU=null;a.DV=null;a.DX=null;a.DY=null;a.qS=null;a.ga=null;a.bv=null;a.bs=null;a.gC=0;a.o5=0;a.m2=0;a.f3=0;a.jL=0;a.g2=0;a.ul=0;a.tK=0;a.d7=0;a.s5=0;a.je=0;a.fx=0;a.c0=null;a.k1=null;a.ht=null;a.re=0;a.f$=0;a.o_=0.0;a.ps=0.0;a.nN=0.0;a.oh=0.0;a.lG=0;a.cq=null;a.ow=0;a.og=null;a.jJ=null;a.jT=null;a.mq=0;a.BI=null;}
var Bku=null;var Bkv=null;var Bkw=null;var Bkx=null;function Lc(){Lc=N(Fn);AX_();}
function Bae(){var a=new Fn();UJ(a);return a;}
function UJ(a){Lc();J(a);a.DU=CI();a.DV=CI();a.DX=CI();a.DY=CI();a.qS=DY();a.bv=RV();a.bs=ATv();a.k1=Bp();a.ht=A3Q(Bga);a.re=0;a.o_=0.0;a.ps=1.0;a.nN=0.0;a.oh=1.0;a.lG=0;a.ow=0;a.og=BO();a.jJ=OM();a.jT=AKT();a.mq=(-1);a.BI=S();}
function Rf(b){var c,d,e,f;Lc();c=Bp();if(Z(Bs(b,O(1)),O(1)))c.E(Ey(1,3,B(470)));if(Z(Bs(b,O(2)),O(2)))c.E(Ey(2,4,B(471)));if(Z(Bs(b,O(4)),O(4)))c.E(Ey(4,4,B(471)));if(Z(Bs(b,O(8)),O(8)))c.E(Ey(8,3,B(598)));if(Z(Bs(b,O(16)),O(16)))c.E(Ey(16,2,B(472)));d=X(E$,c.h);e=0;while(true){f=d.data;if(e>=f.length)break;f[e]=c.l(e);e=e+1|0;}return AY4(d);}
function ASf(a,b){a.PN(b,(-1));}
function AZa(a,b,c){var d,e;if(a.ga!==null)G(PJ(B(547)));a.ga=b;a.bv.K();a.bs.K();a.k1.K();a.o5=0;a.mq=(-1);a.m2=0;a.c0=null;a.gC=b.cN/4|0;if(!(a.cq!==null&&a.cq.data.length>=a.gC))a.cq=B9(a.gC);d=DV(b,1);if(d===null)G(U(B(599)));a.f3=d.cS/4|0;a.jL=d.cH;e=DV(b,8);a.g2=e===null?(-1):e.cS/4|0;e=DV(b,256);a.ul=e===null?(-1):e.cS/4|0;e=DV(b,128);a.tK=e===null?(-1):e.cS/4|0;e=DV(b,2);a.d7=e===null?(-1):e.cS/4|0;a.s5=e!==null?e.cH:0;e=DV(b,4);a.je=e===null?(-1):e.cS/4|0;e=DV(b,16);a.fx=e===null?(-1):e.cS/4|0;a.xt(null);a.xJ(null);a.CS(null);a.f$
=c;a.jT.wr();}
function Lj(a){if(a.c0!==null){a.jT.LL(a.c0.fS);(a.jT.F7(a.c0.gP)).eh(0.5);a.c0.iL=a.c0.gP.H6();a.jT.wr();a.c0.g_=a.m2;a.c0.gQ=a.bs.c1-a.m2|0;a.m2=a.bs.c1;a.c0=null;}}
function AIV(a,b,c){return a.Lf(b,c,A6L());}
function AFs(a,b,c,d){if(a.ga===null)G(PJ(B(548)));Lj(a);a.c0=d;a.c0.pA=b;a.c0.hM=c;a.f$=c;a.k1.E(a.c0);a.xt(null);a.xJ(null);a.CS(null);return a.c0;}
function AJZ(a,b){var c,d;Lj(a);if(a.ga===null)G(U(B(548)));if(!No(a.ga,b.gH()))G(U(B(600)));if(Cb(b.vL(),a.gC)<a.bv.Z)G(U((((((((I()).a(B(601))).j(b.vL())).a(B(602))).j(a.gC)).a(B(603))).j(a.bv.Z)).b()));if(b.wQ()<a.bs.c1)G(U((((((I()).a(B(604))).j(b.wQ())).a(B(603))).j(a.bs.c1)).b()));b.Ff(a.bv.R,0,a.bv.Z);b.NF(a.bs.hA,0,a.bs.c1);c=a.k1.bY();while(c.bC()){d=c.bz();d.b6=b;}a.k1.K();a.ga=null;a.bv.K();a.bs.K();return b;}
function ADf(a){return a.Kz(Bb5(1,a.bv.Z/a.gC|0,a.bs.c1,a.ga));}
function AFG(a){return a.ga;}
function APx(a){return a.f$;}
function AUd(a,b){var c,d;c=a.ht;d=b===null?0:1;a.re=d;if(!d){Bu();b=Bga;}c.eI(b);}
function ADw(a,b,c,d,e){a.o_=b;a.nN=c;a.ps=d-b;a.oh=e-c;a.lG=DB(b)&&DB(c)&&Dg(d,1.0)&&Dg(e,1.0)?0:1;}
function AGm(a,b){if(b!==null){a.lG=1;a.LZ(b.Qw(),b.Q5(),b.Sb(),b.P$());}else{a.lG=0;a.nN=0.0;a.o_=0.0;a.oh=1.0;a.ps=1.0;}}
function ANI(a,b){a.ow=b===null?0:1;if(!a.ow){a.og.fn();a.jJ.z9();}else{a.og.cg(b);((a.jJ.DF(b)).Cq()).Ae();}}
function AHg(a,b){a.bv.DE(Cb(a.gC,b));}
function AV2(a,b){a.bs.NZ(b);}
function AMH(a,b){if(!a.f$)a.ha(4*b|0);else if(a.f$!=1)a.ha(6*b|0);else a.ha(8*b|0);}
function AH_(a){return a.mq<<16>>16;}
function ABX(b,c,d,e){var f,g,h,i,j,k,l;Lc();if(d>2){f=b.data;g=Bkw;h=f[c];i=c+1|0;j=f[i];k=c+2|0;(g.I(h,j,f[k])).kF(e);f[c]=Bkw.n;f[i]=Bkw.o;f[k]=Bkw.q;}else if(d<=1){f=b.data;f[c]=((Bkw.I(f[c],0.0,0.0)).kF(e)).n;}else{f=b.data;g=Bkw;l=f[c];k=c+1|0;(g.I(l,f[k],0.0)).kF(e);f[c]=Bkw.n;f[k]=Bkw.o;}}
function Ij(b,c,d,e){var f,g,h,i,j,k;Lc();if(d>2){f=b.data;g=Bkw;h=f[c];i=c+1|0;j=f[i];k=c+2|0;((g.I(h,j,f[k])).qF(e)).bU();f[c]=Bkw.n;f[i]=Bkw.o;f[k]=Bkw.q;}else if(d<=1){f=b.data;f[c]=(((Bkw.I(f[c],0.0,0.0)).qF(e)).bU()).n;}else{f=b.data;g=Bkw;j=f[c];i=c+1|0;((g.I(j,f[i],0.0)).qF(e)).bU();f[c]=Bkw.n;f[i]=Bkw.o;}}
function Rk(a,b,c){var d,e,f,g,h,i,j;d=a.bv.Z;a.bv.rp(b,c,a.gC);e=a.o5;a.o5=e+1|0;a.mq=e;if(a.ow){ABX(a.bv.R,d+a.f3|0,a.jL,a.og);if(a.g2>=0)Ij(a.bv.R,d+a.g2|0,3,a.jJ);if(a.ul>=0)Ij(a.bv.R,d+a.ul|0,3,a.jJ);if(a.tK>=0)Ij(a.bv.R,d+a.tK|0,3,a.jJ);}f=a.bv.R.data[d+a.f3|0];g=a.jL<=1?0.0:a.bv.R.data[(d+a.f3|0)+1|0];h=a.jL<=2?0.0:a.bv.R.data[(d+a.f3|0)+2|0];a.jT.MM(f,g,h);if(a.re){if(a.d7>=0){i=a.bv.R.data;j=d+a.d7|0;i[j]=i[j]*a.ht.s;i=a.bv.R.data;j=(d+a.d7|0)+1|0;i[j]=i[j]*a.ht.r;i=a.bv.R.data;j=(d+a.d7|0)+2|0;i[j]
=i[j]*a.ht.t;if(a.s5>3){i=a.bv.R.data;j=(d+a.d7|0)+3|0;i[j]=i[j]*a.ht.F;}}else if(a.je>=0){Yy(a.qS,a.bv.R.data[d+a.je|0]);a.bv.R.data[d+a.je|0]=(a.qS.Iy(a.ht)).nj();}}if(a.lG&&a.fx>=0){a.bv.R.data[d+a.fx|0]=a.o_+a.ps*a.bv.R.data[d+a.fx|0];a.bv.R.data[(d+a.fx|0)+1|0]=a.nN+a.oh*a.bv.R.data[(d+a.fx|0)+1|0];}}
function AW1(a,b,c,d,e){if(a.o5>65535)G(U(B(605)));a.cq.data[a.f3]=b.n;if(a.jL>1)a.cq.data[a.f3+1|0]=b.o;if(a.jL>2)a.cq.data[a.f3+2|0]=b.q;if(a.g2>=0){if(c===null)c=(a.BI.M(b)).bU();a.cq.data[a.g2]=c.n;a.cq.data[a.g2+1|0]=c.o;a.cq.data[a.g2+2|0]=c.q;}if(a.d7>=0){if(d===null){Bu();d=Bga;}a.cq.data[a.d7]=d.s;a.cq.data[a.d7+1|0]=d.r;a.cq.data[a.d7+2|0]=d.t;if(a.s5>3)a.cq.data[a.d7+3|0]=d.F;}else if(a.je>0){if(d===null){Bu();d=Bga;}a.cq.data[a.je]=d.nj();}if(e!==null&&a.fx>=0){a.cq.data[a.fx]=e.eM;a.cq.data[a.fx
+1|0]=e.eL;}Rk(a,a.cq,0);return a.mq<<16>>16;}
function ALe(a,b){return a.J8(!b.qL?null:b.mK,!b.tJ?null:b.o7,!b.q1?null:b.ot,!b.pd?null:b.j$);}
function AZM(a,b,c,d,e){a.ha(4);a.bs.cc(b);a.bs.cc(c);a.bs.cc(d);a.bs.cc(e);}
function AZR(a,b,c,d,e,f,g){a.ha(6);a.bs.cc(b);a.bs.cc(c);a.bs.cc(d);a.bs.cc(e);a.bs.cc(f);a.bs.cc(g);}
function AVj(a,b,c,d,e,f,g,h,i){a.ha(8);a.bs.cc(b);a.bs.cc(c);a.bs.cc(d);a.bs.cc(e);a.bs.cc(f);a.bs.cc(g);a.bs.cc(h);a.bs.cc(i);}
function ANA(a,b,c,d,e){if(a.f$==4)a.Nx(b,c,d,d,e,b);else if(a.f$==1)a.Ek(b,c,c,d,d,e,e,b);else{if(a.f$)G(U(B(606)));a.GP(b,c,d,e);}}
function A4S(a,b,c,d,e){a.t6(4);a.d0(a.dG(b),a.dG(c),a.dG(d),a.dG(e));}
function AKf(a,b,c,d,e,f){var g,h,i,j,k;g=(a.DU.dJ(b,f,null,null)).nQ(0.0,1.0);h=(a.DV.dJ(c,f,null,null)).nQ(1.0,1.0);i=a.DX;j=null;k=null;i=(i.dJ(d,f,j,k)).nQ(1.0,0.0);k=(a.DY.dJ(e,f,null,null)).nQ(0.0,0.0);a.ME(g,h,i,k);}
function AGd(a,b,c,d){A4N(a,b,c,d);}
function AX_(){Bku=ATv();Bkv=RV();Bkw=S();Bkx=null;}
function GW(){BH.call(this);this.OE=null;}
var Bky=Bb;function A_K(){A_K=N(GW);AHG();}
function AHG(){Bky=BN(B(607));}
function Sh(){var a=this;C.call(a);a.lm=null;a.t$=null;a.ob=null;a.pq=null;}
function BaN(a,b,c,d){var e=new Sh();A3H(e,a,b,c,d);return e;}
function A3H(a,b,c,d,e){a.pq=b;a.lm=c;a.t$=d;a.ob=e;J(a);}
function AO6(a,b){var c,d,e,f,g,h;if(a.lm.readyState==4){c=1;if(a.lm.status!=200)a.t$.da(a.ob);else{if(Ni(a.pq))(Ef()).f9((((I()).a(B(608))).a(a.ob)).b());d=a.lm.response;e=(PF(a.pq)).iS();f=e.o4();g=f.createElement("script");h=f.createTextNode(d);g.appendChild(h);f.body.appendChild(g);c=a.t$.dk(a.ob,$rt_str(a.lm.responseText))?0:1;}if(c)a.pq.jS();}}
function AXN(a,b){a.dT(b);}
var I0=D(T);
function A_3(){var a=new I0();QU(a);return a;}
function QU(a){Bo(a);}
function X4(a){return ((CO()).bG(9,13)).cD(32);}
var OR=D(DT);
function BcD(){var a=new OR();AMY(a);return a;}
function AMY(a){I4(a);}
var OS=D(DT);
function A$M(){var a=new OS();AZd(a);return a;}
function AZd(a){I4(a);}
function Yb(a){return S();}
function AKF(a){return Yb(a);}
var ZE=D();
function NG(b,c,d,e){var f;f=AO0(c);f.cZ();c.cX(0);f.wc(b,e,d);c.cX(0);if(!(c instanceof Fo))c.ck(d);else c.ck(d<<2);}
function AO0(b){var c;c=null;if(b instanceof Fo)c=b.su();else if(b instanceof DS)c=b;if(c!==null)return c;G(U(B(609)));}
function HJ(b){var c;if(!HK())return ATI(B9(b));c=FN(b*4|0);FB(c,ER());return c.su();}
function Mk(b){var c;if(!HK())return Hf(Ce(b));c=FN(b);FB(c,ER());return c;}
function ZS(b){var c;if(!HK())return A1U(Mu(b));c=FN(b*2|0);FB(c,ER());return c.vK();}
function Ff(b){var c;if(!HK())return AYV(Bc(b));c=FN(b*4|0);FB(c,ER());return c.yi();}
var Kt=D(0);
var Nf=D(0);
var JW=D(0);
var OO=D();
function AK1(a,b,c){a.Ve($rt_str(b),F_(c,"handleEvent"));}
function ALs(a,b,c){a.Us($rt_str(b),F_(c,"handleEvent"));}
function ADG(a,b){return a.Lr(b);}
function AMZ(a,b,c,d){a.Qb($rt_str(b),F_(c,"handleEvent"),d?1:0);}
function AQZ(a,b){return !!a.Vh(b);}
function AE1(a){return a.NX();}
function ACs(a,b,c,d){a.Rt($rt_str(b),F_(c,"handleEvent"),d?1:0);}
function XN(){var a=this;C.call(a);a.gI=null;a.Fd=null;}
function OM(){var a=new XN();AKu(a);return a;}
function AKu(a){J(a);a.gI=B9(9);a.Fd=B9(9);a.z9();}
function A2Y(a){var b,c;b=a.gI;c=b.data;c[0]=1.0;c[1]=0.0;c[2]=0.0;c[3]=0.0;c[4]=1.0;c[5]=0.0;c[6]=0.0;c[7]=0.0;c[8]=1.0;return a;}
function AJR(a){var b,c;b=a.gI;c=b.data;return c[0]*c[4]*c[8]+c[3]*c[7]*c[2]+c[6]*c[1]*c[5]-c[0]*c[7]*c[5]-c[3]*c[1]*c[8]-c[6]*c[4]*c[2];}
function A3W(a){var b,c,d,e,f,g;b=a.Hl();if(b===0.0)G(U(B(610)));c=1.0/b;d=a.Fd;e=d.data;f=a.gI;g=f.data;e[0]=g[4]*g[8]-g[5]*g[7];e[1]=g[2]*g[7]-g[1]*g[8];e[2]=g[1]*g[5]-g[2]*g[4];e[3]=g[5]*g[6]-g[3]*g[8];e[4]=g[0]*g[8]-g[2]*g[6];e[5]=g[2]*g[3]-g[0]*g[5];e[6]=g[3]*g[7]-g[4]*g[6];e[7]=g[1]*g[6]-g[0]*g[7];e[8]=g[0]*g[4]-g[1]*g[3];g[0]=c*e[0];g[1]=c*e[1];g[2]=c*e[2];g[3]=c*e[3];g[4]=c*e[4];g[5]=c*e[5];g[6]=c*e[6];g[7]=c*e[7];g[8]=c*e[8];return a;}
function A9g(a,b){var c,d;c=a.gI;d=c.data;d[0]=b.c.data[0];d[1]=b.c.data[1];d[2]=b.c.data[2];d[3]=b.c.data[4];d[4]=b.c.data[5];d[5]=b.c.data[6];d[6]=b.c.data[8];d[7]=b.c.data[9];d[8]=b.c.data[10];return a;}
function ASV(a){var b,c,d,e,f,g,h,i;b=a.gI;c=b.data;d=c[1];e=c[2];f=c[3];g=c[5];h=c[6];i=c[7];c[3]=d;c[6]=e;c[1]=f;c[7]=g;c[2]=h;c[5]=i;return a;}
var OK=D();
function Cq(){C.call(this);this.c=null;}
var Bkz=null;var BkA=null;var BkB=null;var BkC=null;var BkD=null;var BkE=null;var BkF=null;var BkG=null;var BkH=null;var BkI=null;var BkJ=null;function Cz(){Cz=N(Cq);AT1();}
function BO(){var a=new Cq();SG(a);return a;}
function SG(a){Cz();J(a);a.c=B9(16);a.c.data[0]=1.0;a.c.data[5]=1.0;a.c.data[10]=1.0;a.c.data[15]=1.0;}
function A9q(a,b){return a.D4(b.c);}
function AEv(a,b){var c;c=b.data;a.c.data[0]=c[0];a.c.data[1]=c[1];a.c.data[2]=c[2];a.c.data[3]=c[3];a.c.data[4]=c[4];a.c.data[5]=c[5];a.c.data[6]=c[6];a.c.data[7]=c[7];a.c.data[8]=c[8];a.c.data[9]=c[9];a.c.data[10]=c[10];a.c.data[11]=c[11];a.c.data[12]=c[12];a.c.data[13]=c[13];a.c.data[14]=c[14];a.c.data[15]=c[15];return a;}
function A7Z(a,b){return a.Hi(b.dh,b.df,b.dg,b.d4);}
function AYd(a,b,c,d,e){return a.MD(0.0,0.0,0.0,b,c,d,e);}
function A4H(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t;i=e*2.0;j=f*2.0;k=g*2.0;l=h*i;m=h*j;n=h*k;o=e*i;p=e*j;q=e*k;r=f*j;s=f*k;t=g*k;a.c.data[0]=1.0-(r+t);a.c.data[4]=p-n;a.c.data[8]=q+m;a.c.data[12]=b;a.c.data[1]=p+n;a.c.data[5]=1.0-(o+t);a.c.data[9]=s-l;a.c.data[13]=c;a.c.data[2]=q-m;a.c.data[6]=s+l;a.c.data[10]=1.0-(o+r);a.c.data[14]=d;a.c.data[3]=0.0;a.c.data[7]=0.0;a.c.data[11]=0.0;a.c.data[15]=1.0;return a;}
function AUV(a,b,c,d){return a.I5(b.n,b.o,b.q,c.dh,c.df,c.dg,c.d4,d.n,d.o,d.q);}
function ARS(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o,p,q,r,s,t,u,v,w;l=e*2.0;m=f*2.0;n=g*2.0;o=h*l;p=h*m;q=h*n;r=e*l;s=e*m;t=e*n;u=f*m;v=f*n;w=g*n;a.c.data[0]=i*(1.0-(u+w));a.c.data[4]=j*(s-q);a.c.data[8]=k*(t+p);a.c.data[12]=b;a.c.data[1]=i*(s+q);a.c.data[5]=j*(1.0-(r+w));a.c.data[9]=k*(v-o);a.c.data[13]=c;a.c.data[2]=i*(t-p);a.c.data[6]=j*(v+o);a.c.data[10]=k*(1.0-(r+u));a.c.data[14]=d;a.c.data[3]=0.0;a.c.data[7]=0.0;a.c.data[11]=0.0;a.c.data[15]=1.0;return a;}
function ALM(a,b){Cz();Bkz.data[0]=a.c.data[0]*b.c.data[0]+a.c.data[4]*b.c.data[1]+a.c.data[8]*b.c.data[2]+a.c.data[12]*b.c.data[3];Bkz.data[4]=a.c.data[0]*b.c.data[4]+a.c.data[4]*b.c.data[5]+a.c.data[8]*b.c.data[6]+a.c.data[12]*b.c.data[7];Bkz.data[8]=a.c.data[0]*b.c.data[8]+a.c.data[4]*b.c.data[9]+a.c.data[8]*b.c.data[10]+a.c.data[12]*b.c.data[11];Bkz.data[12]=a.c.data[0]*b.c.data[12]+a.c.data[4]*b.c.data[13]+a.c.data[8]*b.c.data[14]+a.c.data[12]*b.c.data[15];Bkz.data[1]=a.c.data[1]*b.c.data[0]+a.c.data[5]
*b.c.data[1]+a.c.data[9]*b.c.data[2]+a.c.data[13]*b.c.data[3];Bkz.data[5]=a.c.data[1]*b.c.data[4]+a.c.data[5]*b.c.data[5]+a.c.data[9]*b.c.data[6]+a.c.data[13]*b.c.data[7];Bkz.data[9]=a.c.data[1]*b.c.data[8]+a.c.data[5]*b.c.data[9]+a.c.data[9]*b.c.data[10]+a.c.data[13]*b.c.data[11];Bkz.data[13]=a.c.data[1]*b.c.data[12]+a.c.data[5]*b.c.data[13]+a.c.data[9]*b.c.data[14]+a.c.data[13]*b.c.data[15];Bkz.data[2]=a.c.data[2]*b.c.data[0]+a.c.data[6]*b.c.data[1]+a.c.data[10]*b.c.data[2]+a.c.data[14]*b.c.data[3];Bkz.data[6]
=a.c.data[2]*b.c.data[4]+a.c.data[6]*b.c.data[5]+a.c.data[10]*b.c.data[6]+a.c.data[14]*b.c.data[7];Bkz.data[10]=a.c.data[2]*b.c.data[8]+a.c.data[6]*b.c.data[9]+a.c.data[10]*b.c.data[10]+a.c.data[14]*b.c.data[11];Bkz.data[14]=a.c.data[2]*b.c.data[12]+a.c.data[6]*b.c.data[13]+a.c.data[10]*b.c.data[14]+a.c.data[14]*b.c.data[15];Bkz.data[3]=a.c.data[3]*b.c.data[0]+a.c.data[7]*b.c.data[1]+a.c.data[11]*b.c.data[2]+a.c.data[15]*b.c.data[3];Bkz.data[7]=a.c.data[3]*b.c.data[4]+a.c.data[7]*b.c.data[5]+a.c.data[11]*b.c.data[6]
+a.c.data[15]*b.c.data[7];Bkz.data[11]=a.c.data[3]*b.c.data[8]+a.c.data[7]*b.c.data[9]+a.c.data[11]*b.c.data[10]+a.c.data[15]*b.c.data[11];Bkz.data[15]=a.c.data[3]*b.c.data[12]+a.c.data[7]*b.c.data[13]+a.c.data[11]*b.c.data[14]+a.c.data[15]*b.c.data[15];return a.D4(Bkz);}
function AGw(a){a.c.data[0]=1.0;a.c.data[4]=0.0;a.c.data[8]=0.0;a.c.data[12]=0.0;a.c.data[1]=0.0;a.c.data[5]=1.0;a.c.data[9]=0.0;a.c.data[13]=0.0;a.c.data[2]=0.0;a.c.data[6]=0.0;a.c.data[10]=1.0;a.c.data[14]=0.0;a.c.data[3]=0.0;a.c.data[7]=0.0;a.c.data[11]=0.0;a.c.data[15]=1.0;return a;}
function A5c(a){return a.c.data[0]*a.c.data[5]*a.c.data[10]+a.c.data[4]*a.c.data[9]*a.c.data[2]+a.c.data[8]*a.c.data[1]*a.c.data[6]-a.c.data[0]*a.c.data[9]*a.c.data[6]-a.c.data[4]*a.c.data[1]*a.c.data[10]-a.c.data[8]*a.c.data[5]*a.c.data[2];}
function ADW(a,b,c,d,e){var f,g,h,i,j;a.fn();f=1.0/APk(d*0.017453292519943295/2.0);g=c+b;h=b-c;i=g/h;j=2.0*c*b/h;a.c.data[0]=f/e;a.c.data[1]=0.0;a.c.data[2]=0.0;a.c.data[3]=0.0;a.c.data[4]=0.0;a.c.data[5]=f;a.c.data[6]=0.0;a.c.data[7]=0.0;a.c.data[8]=0.0;a.c.data[9]=0.0;a.c.data[10]=i;a.c.data[11]=(-1.0);a.c.data[12]=0.0;a.c.data[13]=0.0;a.c.data[14]=j;a.c.data[15]=0.0;return a;}
function A1Z(a,b,c,d,e){a.yP(b,b+d,c,c+e,0.0,1.0);return a;}
function A2z(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a.fn();h=c-b;i=2.0/h;j=e-d;k=2.0/j;l=g-f;m=(-2.0)/l;n= -(c+b)/h;o= -(e+d)/j;p= -(g+f)/l;a.c.data[0]=i;a.c.data[1]=0.0;a.c.data[2]=0.0;a.c.data[3]=0.0;a.c.data[4]=0.0;a.c.data[5]=k;a.c.data[6]=0.0;a.c.data[7]=0.0;a.c.data[8]=0.0;a.c.data[9]=0.0;a.c.data[10]=m;a.c.data[11]=0.0;a.c.data[12]=n;a.c.data[13]=o;a.c.data[14]=p;a.c.data[15]=1.0;return a;}
function AEX(a,b,c,d){a.fn();a.c.data[12]=b;a.c.data[13]=c;a.c.data[14]=d;return a;}
function AUF(a,b,c){if(c===0.0){a.fn();return a;}Cz();return a.FV(BkA.v7(b,c));}
function AG1(a,b,c){Cz();(BkC.M(b)).bU();(BkD.M(b)).bU();(BkD.ir(c)).bU();((BkE.M(BkD)).ir(BkC)).bU();a.fn();a.c.data[0]=BkD.n;a.c.data[4]=BkD.o;a.c.data[8]=BkD.q;a.c.data[1]=BkE.n;a.c.data[5]=BkE.o;a.c.data[9]=BkE.q;a.c.data[2]= -BkC.n;a.c.data[6]= -BkC.o;a.c.data[10]= -BkC.q;return a;}
function AX6(a,b,c,d){Cz();(BkF.M(c)).gb(b);a.Pq(BkF,d);a.ho(BkG.Ic( -b.n, -b.o, -b.q));return a;}
function AEb(a,b){b.n=a.c.data[12];b.o=a.c.data[13];b.q=a.c.data[14];return b;}
function Os(b,c){var d,e,f,g;Cz();d=c.data;e=b.data;f=B9(16);g=f.data;g[0]=e[0]*d[0]+e[4]*d[1]+e[8]*d[2]+e[12]*d[3];g[4]=e[0]*d[4]+e[4]*d[5]+e[8]*d[6]+e[12]*d[7];g[8]=e[0]*d[8]+e[4]*d[9]+e[8]*d[10]+e[12]*d[11];g[12]=e[0]*d[12]+e[4]*d[13]+e[8]*d[14]+e[12]*d[15];g[1]=e[1]*d[0]+e[5]*d[1]+e[9]*d[2]+e[13]*d[3];g[5]=e[1]*d[4]+e[5]*d[5]+e[9]*d[6]+e[13]*d[7];g[9]=e[1]*d[8]+e[5]*d[9]+e[9]*d[10]+e[13]*d[11];g[13]=e[1]*d[12]+e[5]*d[13]+e[9]*d[14]+e[13]*d[15];g[2]=e[2]*d[0]+e[6]*d[1]+e[10]*d[2]+e[14]*d[3];g[6]=e[2]*d[4]
+e[6]*d[5]+e[10]*d[6]+e[14]*d[7];g[10]=e[2]*d[8]+e[6]*d[9]+e[10]*d[10]+e[14]*d[11];g[14]=e[2]*d[12]+e[6]*d[13]+e[10]*d[14]+e[14]*d[15];g[3]=e[3]*d[0]+e[7]*d[1]+e[11]*d[2]+e[15]*d[3];g[7]=e[3]*d[4]+e[7]*d[5]+e[11]*d[6]+e[15]*d[7];g[11]=e[3]*d[8]+e[7]*d[9]+e[11]*d[10]+e[15]*d[11];g[15]=e[3]*d[12]+e[7]*d[13]+e[11]*d[14]+e[15]*d[15];Y(f,0,b,0,16);}
function TE(b){var c;Cz();c=b.data;return c[3]*c[6]*c[9]*c[12]-c[2]*c[7]*c[9]*c[12]-c[3]*c[5]*c[10]*c[12]+c[1]*c[7]*c[10]*c[12]+c[2]*c[5]*c[11]*c[12]-c[1]*c[6]*c[11]*c[12]-c[3]*c[6]*c[8]*c[13]+c[2]*c[7]*c[8]*c[13]+c[3]*c[4]*c[10]*c[13]-c[0]*c[7]*c[10]*c[13]-c[2]*c[4]*c[11]*c[13]+c[0]*c[6]*c[11]*c[13]+c[3]*c[5]*c[8]*c[14]-c[1]*c[7]*c[8]*c[14]-c[3]*c[4]*c[9]*c[14]+c[0]*c[7]*c[9]*c[14]+c[1]*c[4]*c[11]*c[14]-c[0]*c[5]*c[11]*c[14]-c[2]*c[5]*c[8]*c[15]+c[1]*c[6]*c[8]*c[15]+c[2]*c[4]*c[9]*c[15]-c[0]*c[6]*c[9]*c[15]
-c[1]*c[4]*c[10]*c[15]+c[0]*c[5]*c[10]*c[15];}
function Qj(b){var c,d,e,f,g;Cz();c=B9(16);d=TE(b);if(d===0.0)return 0;e=c.data;f=b.data;e[0]=f[9]*f[14]*f[7]-f[13]*f[10]*f[7]+f[13]*f[6]*f[11]-f[5]*f[14]*f[11]-f[9]*f[6]*f[15]+f[5]*f[10]*f[15];e[4]=f[12]*f[10]*f[7]-f[8]*f[14]*f[7]-f[12]*f[6]*f[11]+f[4]*f[14]*f[11]+f[8]*f[6]*f[15]-f[4]*f[10]*f[15];e[8]=f[8]*f[13]*f[7]-f[12]*f[9]*f[7]+f[12]*f[5]*f[11]-f[4]*f[13]*f[11]-f[8]*f[5]*f[15]+f[4]*f[9]*f[15];e[12]=f[12]*f[9]*f[6]-f[8]*f[13]*f[6]-f[12]*f[5]*f[10]+f[4]*f[13]*f[10]+f[8]*f[5]*f[14]-f[4]*f[9]*f[14];e[1]=f[13]
*f[10]*f[3]-f[9]*f[14]*f[3]-f[13]*f[2]*f[11]+f[1]*f[14]*f[11]+f[9]*f[2]*f[15]-f[1]*f[10]*f[15];e[5]=f[8]*f[14]*f[3]-f[12]*f[10]*f[3]+f[12]*f[2]*f[11]-f[0]*f[14]*f[11]-f[8]*f[2]*f[15]+f[0]*f[10]*f[15];e[9]=f[12]*f[9]*f[3]-f[8]*f[13]*f[3]-f[12]*f[1]*f[11]+f[0]*f[13]*f[11]+f[8]*f[1]*f[15]-f[0]*f[9]*f[15];e[13]=f[8]*f[13]*f[2]-f[12]*f[9]*f[2]+f[12]*f[1]*f[10]-f[0]*f[13]*f[10]-f[8]*f[1]*f[14]+f[0]*f[9]*f[14];e[2]=f[5]*f[14]*f[3]-f[13]*f[6]*f[3]+f[13]*f[2]*f[7]-f[1]*f[14]*f[7]-f[5]*f[2]*f[15]+f[1]*f[6]*f[15];e[6]
=f[12]*f[6]*f[3]-f[4]*f[14]*f[3]-f[12]*f[2]*f[7]+f[0]*f[14]*f[7]+f[4]*f[2]*f[15]-f[0]*f[6]*f[15];e[10]=f[4]*f[13]*f[3]-f[12]*f[5]*f[3]+f[12]*f[1]*f[7]-f[0]*f[13]*f[7]-f[4]*f[1]*f[15]+f[0]*f[5]*f[15];e[14]=f[12]*f[5]*f[2]-f[4]*f[13]*f[2]-f[12]*f[1]*f[6]+f[0]*f[13]*f[6]+f[4]*f[1]*f[14]-f[0]*f[5]*f[14];e[3]=f[9]*f[6]*f[3]-f[5]*f[10]*f[3]-f[9]*f[2]*f[7]+f[1]*f[10]*f[7]+f[5]*f[2]*f[11]-f[1]*f[6]*f[11];e[7]=f[4]*f[10]*f[3]-f[8]*f[6]*f[3]+f[8]*f[2]*f[7]-f[0]*f[10]*f[7]-f[4]*f[2]*f[11]+f[0]*f[6]*f[11];e[11]=f[8]*f[5]
*f[3]-f[4]*f[9]*f[3]-f[8]*f[1]*f[7]+f[0]*f[9]*f[7]+f[4]*f[1]*f[11]-f[0]*f[5]*f[11];e[15]=f[4]*f[9]*f[2]-f[8]*f[5]*f[2]+f[8]*f[1]*f[6]-f[0]*f[9]*f[6]-f[4]*f[1]*f[10]+f[0]*f[5]*f[10];g=1.0/d;f[0]=e[0]*g;f[4]=e[4]*g;f[8]=e[8]*g;f[12]=e[12]*g;f[1]=e[1]*g;f[5]=e[5]*g;f[9]=e[9]*g;f[13]=e[13]*g;f[2]=e[2]*g;f[6]=e[6]*g;f[10]=e[10]*g;f[14]=e[14]*g;f[3]=e[3]*g;f[7]=e[7]*g;f[11]=e[11]*g;f[15]=e[15]*g;return 1;}
function X7(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;Cz();e=b.data;f=c.data;g=d+0|0;h=f[g]*e[3];i=d+1|0;j=h+f[i]*e[7];k=d+2|0;l=1.0/(j+f[k]*e[11]+e[15]);m=(f[g]*e[0]+f[i]*e[4]+f[k]*e[8]+e[12])*l;n=(f[g]*e[1]+f[i]*e[5]+f[k]*e[9]+e[13])*l;o=(f[g]*e[2]+f[i]*e[6]+f[k]*e[10]+e[14])*l;f[g]=m;f[i]=n;f[k]=o;}
function GR(b,c){Cz();Os(b,c);}
function Tg(b,c,d,e,f){var g;Cz();g=0;while(g<e){X7(b,c,d);d=d+f|0;g=g+1|0;}}
function Mw(b){Cz();return Qj(b);}
function A0x(a,b,c,d){Cz();Bkz.data[0]=1.0;Bkz.data[4]=0.0;Bkz.data[8]=0.0;Bkz.data[12]=b;Bkz.data[1]=0.0;Bkz.data[5]=1.0;Bkz.data[9]=0.0;Bkz.data[13]=c;Bkz.data[2]=0.0;Bkz.data[6]=0.0;Bkz.data[10]=1.0;Bkz.data[14]=d;Bkz.data[3]=0.0;Bkz.data[7]=0.0;Bkz.data[11]=0.0;Bkz.data[15]=1.0;GR(a.c,Bkz);return a;}
function AUt(a,b,c){if(c===0.0)return a;Cz();BkA.v7(b,c);return a.Lo(BkA);}
function AOv(a,b){Cz();b.Jk(Bkz);GR(a.c,Bkz);return a;}
function A3m(a){var b,c;a:{b:{if(!Dg(a.c.data[0],1.0))break b;if(!Dg(a.c.data[5],1.0))break b;if(!Dg(a.c.data[10],1.0))break b;b=a.c.data[4];if(!DB(b))break b;if(!DB(a.c.data[8]))break b;if(!DB(a.c.data[1]))break b;if(!DB(a.c.data[9]))break b;b=a.c.data[2];if(!DB(b))break b;if(DB(a.c.data[6])){c=0;break a;}}c=1;}return c;}
function AT1(){Bkz=B9(16);BkA=AUu();BkB=AUu();BkC=S();BkD=S();BkE=S();BkF=S();BkG=BO();BkH=S();BkI=S();BkJ=S();}
var ABW=D(Bm);
function A7F(){var a=new ABW();A3L(a);return a;}
function A3L(a){Ct(a);}
var Zl=D(Eb);
function Bc1(a,b,c){var d=new Zl();AYe(d,a,b,c);return d;}
function AYe(a,b,c,d){MZ(a,b,c,d);}
function ADr(a,b,c,d){var e;e=a.k.e(b,c,d);if(e>=0)return e;return a.Y.e(b,c,d);}
var ZA=D(T);
function Bdg(){var a=new ZA();AD_(a);return a;}
function AD_(a){Bo(a);}
function AJe(a){return A$b(a);}
function YW(){var a=this;C.call(a);a.A5=0;a.Ev=0;a.DQ=null;}
function A$_(a,b){var c=new YW();AGf(c,a,b);return c;}
function AGf(a,b,c){a.DQ=b;a.Ev=c;J(a);a.A5=a.Ev;}
function AKS(a){return F8(a.DQ,a.A5);}
function Gn(){C.call(this);this.eO=null;}
var Be9=null;var BkK=null;var BkL=null;function ED(){ED=N(Gn);ALZ();}
function AVQ(){var a=new Gn();T3(a);return a;}
function Qs(){ED();if(BkL===null)BkL=AVQ();return BkL;}
function T3(a){ED();J(a);a.eO=AV1(0,8);a.Gv();}
function A7s(a,b,c){return a.FI(b,c,0.0,0);}
function A7U(a,b,c,d,e){var f,g,$$je;if(b.dA!=(-1))G(W(B(611)));b.h9=Dx(E8(CA(),O(1000000)),Bd6(c*1000.0));b.sp=Bd6(d*1000.0);b.dA=e;f=a.eO;En(f);a:{try{a.eO.E(b);Cc(f);}catch($$e){$$je=R($$e);g=$$je;break a;}MG();return b;}Cc(f);G(g);}
function ARl(a){var b,c,d,$$je;ED();b=Be9;En(b);a:{b:{try{if(!Be9.ij(a,1))break b;Cc(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}c:{try{Be9.E(a);if(BkK!==null)break c;d=BgW.iS();BkK=BaE(d.OS());break c;}catch($$e){$$je=R($$e);c=$$je;break a;}}try{MG();Cc(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}Cc(b);G(c);}
function APY(a,b,c){var d,e,f,g,h,$$je;d=a.eO;En(d);a:{try{e=0;f=a.eO.h;while(e<f){g=a.eO.l(e);if(Hc(g.h9,b))c=Tn(c,D2(g.h9,b));else{if(g.dA!=(-1)){if(!g.dA)g.dA=(-1);Bem.Lv(g);}if(g.dA==(-1)){a.eO.sa(e);e=e+(-1)|0;f=f+(-1)|0;}else{g.h9=Dx(b,g.sp);c=Tn(c,g.sp);if(g.dA>0)g.dA=g.dA-1|0;}}e=e+1|0;}Cc(d);}catch($$e){$$je=R($$e);h=$$je;break a;}return c;}Cc(d);G(h);}
function AM1(a,b){var c,d,e,f,g,$$je;c=a.eO;En(c);a:{try{d=0;e=a.eO.h;while(d<e){f=a.eO.l(d);f.h9=Dx(f.h9,b);d=d+1|0;}Cc(c);}catch($$e){$$je=R($$e);g=$$je;break a;}return;}Cc(c);G(g);}
function MG(){var b,c,$$je;ED();b=Be9;En(b);a:{try{BkK.nF(0);Cc(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}Cc(b);G(c);}
function ABC(b,c){ED();return (Qs()).Fn(b,c);}
function ALZ(){Be9=DH(1);BkL=AVQ();}
var Dp=D(C0);
function Ea(){var a=new Dp();AUn(a);return a;}
function DD(a){var b=new Dp();AKA(b,a);return b;}
function AUn(a){FQ(a);}
function AKA(a,b){ABT(a,b);}
function W9(){var a=this;C.call(a);a.pE=null;a.M0=0;a.gR=0;a.gn=0;}
function KK(a,b){var c=new W9();AMc(c,a,b);return c;}
function AMc(a,b,c){J(a);a.gn=1;a.pE=b;a.M0=c;}
function A0g(a){if(!a.gn)G(U(B(612)));return a.gR>=a.pE.h?0:1;}
function AWi(a){var b,c;if(a.gR>=a.pE.h)G(BaM(I5(a.gR)));if(!a.gn)G(U(B(612)));b=a.pE.P.data;c=a.gR;a.gR=c+1|0;return b[c];}
var Vv=D();
function Rq(){var a=this;C7.call(a);a.tv=0;a.pw=0;}
function BaT(a,b,c){var d=new Rq();A3$(d,a,b,c);return d;}
function A3$(a,b,c,d){Gr(a,b,0.5,0.5);a.tv=c;a.pw=d;}
function AQH(a,b,c,d,e,f,g,h){var i,j,k,l;if(a.tv){if((c+2|0)>d){if(h.tp())i=null;else{Bk();i=Bej;}return i;}j=b.data;a.tv=0;k=c+1|0;l=j[c];if(l==(-1)){if(j[k]!=(-2))c=k+(-1)|0;else{c=k+1|0;a.pw=1;}}else if(l!=(-2))c=k+(-1)|0;else if(j[k]!=(-1))c=k+(-1)|0;else{c=k+1|0;a.pw=0;}}return !a.pw?Q4(a,b,c,d,e,f,g,h):AAN(a,b,c,d,e,f,g,h);}
function AAN(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=null;a:{while(c<d){if(f>=g)break a;if((c+2|0)>d){if(h.dN(2))break a;Bk();i=Bej;break a;}j=b.data;k=c+1|0;l=j[c]&255;c=k+1|0;m=j[k]&255;n=(l|m<<8)&65535;if(!BX(n)){if(BG(n)){c=c+(-2)|0;i=BU(2);break a;}j=e.data;k=f+1|0;j[f]=n;f=k;}else{if((c+2|0)>=d){if(!h.dN(4)){Bk();i=Bej;}c=c+(-2)|0;break a;}k=c+1|0;o=j[c]&255;c=k+1|0;k=j[k]&255;p=(o|k<<8)&65535;if(!BG(p)){c=c+(-4)|0;i=BU(4);break a;}if((f+2|0)>g){if(h.ec(2))break a;Bk();i=Bei;break a;}j=e.data;k=f+1|0;j[f]
=n;f=k+1|0;j[k]=p;}}}h.eg(c);h.dQ(f);return i;}
function Q4(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=null;a:{while(c<d){if(f>=g)break a;if((c+2|0)>d){if(h.dN(2))break a;Bk();i=Bej;break a;}j=b.data;k=c+1|0;l=j[c]&255;c=k+1|0;m=j[k]&255;n=(m|l<<8)&65535;if(!BX(n)){if(BG(n)){c=c+(-2)|0;i=BU(2);break a;}j=e.data;k=f+1|0;j[f]=n;f=k;}else{if((c+2|0)>=d){if(!h.dN(4)){Bk();i=Bej;}c=c+(-2)|0;break a;}k=c+1|0;o=j[c]&255;c=k+1|0;k=j[k]&255;p=(k|o<<8)&65535;if(!BG(p)){c=c+(-4)|0;i=BU(4);break a;}if((f+2|0)>g){if(h.ec(2))break a;Bk();i=Bei;break a;}j=e.data;k=f+1|0;j[f]
=n;f=k+1|0;j[k]=p;}}}h.eg(c);h.dQ(f);return i;}
var AAd=D(Jf);
function A$1(){var a=new AAd();A0o(a);return a;}
function A0o(a){Wr(a);}
function Xw(a,b){var c;c=Bcd(a,b);return c;}
function ALn(a,b,c){return setTimeout(BY(Xw(a,b),"onTimer"),c);}
function AKz(a,b){clearInterval(b);}
function AJi(a,b){clearTimeout(b);}
function A1b(b,c){Yp(b,c);}
var Sd=D(T);
function A$n(){var a=new Sd();ALy(a);return a;}
function ALy(a){Bo(a);}
function AOt(a){return A_z(a);}
function VA(){var a=this;C.call(a);a.nk=null;a.pF=0;a.hP=null;a.l7=null;}
function BaC(a){var b=new VA();A4l(b,a);return b;}
function BkM(a,b){var c=new VA();ABQ(c,a,b);return c;}
function A4l(a,b){ABQ(a,b,1);}
function ABQ(a,b,c){J(a);a.nk=b;a.pF=c;}
function AZC(a){if(Bix)return KK(a.nk,a.pF);if(a.hP===null){a.hP=KK(a.nk,a.pF);a.l7=KK(a.nk,a.pF);}if(a.hP.gn){a.l7.gR=0;a.l7.gn=1;a.hP.gn=0;return a.l7;}a.hP.gR=0;a.hP.gn=1;a.l7.gn=0;return a.hP;}
var ZM=D(T);
function A95(){var a=new ZM();ALX(a);return a;}
function ALX(a){Bo(a);}
function AST(a){return A$a(a);}
var Y0=D(B2);
function GI(){var a=new Y0();A5W(a);return a;}
function DN(a){var b=new Y0();A3E(b,a);return b;}
function A5W(a){E6(a);}
function A3E(a,b){LV(a,b);}
function XU(){var a=this;C.call(a);a.mK=null;a.qL=0;a.o7=null;a.tJ=0;a.ot=null;a.q1=0;a.j$=null;a.pd=0;}
function CI(){var a=new XU();A9n(a);return a;}
function A9n(a){J(a);a.mK=S();a.o7=Cg(0.0,1.0,0.0);a.ot=CL(1.0,1.0,1.0,1.0);a.j$=If();}
function ANw(a){a.mK.I(0.0,0.0,0.0);a.o7.I(0.0,1.0,0.0);a.ot.hJ(1.0,1.0,1.0,1.0);a.j$.il(0.0,0.0);}
function AKo(a,b,c,d,e){a.fM();a.qL=b===null?0:1;if(a.qL)a.mK.M(b);a.tJ=c===null?0:1;if(a.tJ)a.o7.M(c);a.q1=d===null?0:1;if(a.q1)a.ot.eI(d);a.pd=e===null?0:1;if(a.pd)a.j$.k0(e);return a;}
function AKH(a,b,c){a.j$.il(b,c);a.pd=1;return a;}
function Y$(){var a=this;C.call(a);a.m_=0.0;a.oj=null;}
function QS(a,b){var c=new Y$();A7k(c,a,b);return c;}
function A7k(a,b,c){J(a);a.m_=b;a.oj=c;}
var N_=D(Gp);
function BkN(){var a=new N_();Tj(a);return a;}
function Tj(a){T1(a);AKO(a);}
function A6z(a,b){var c;c=new Float32Array(b);return c;}
function ASk(a,b){var c;c=new Int32Array(b);return c;}
function AK5(a,b){var c;c=new Int16Array(b);return c;}
function AUs(a,b){var c;c=new Int8Array(b);return c;}
function AFE(a,b){var c;c=new Uint8Array(b);return c;}
function I7(){BC.call(this);this.gW=0;}
function AZS(a){var b=new I7();AMQ(b,a);return b;}
function AMQ(a,b){CM(a);a.gW=b;}
function AVG(a,b){a.k=b;}
function ACp(a,b,c,d){var e,f,g,h,i;e=d.J();f=b+1|0;g=B5(f,e);if(g>0){d.d2=1;return (-1);}h=c.f(b);if(g<0){i=c.f(f);if(BG(i))return (-1);}if(a.gW!=h)return (-1);return a.k.e(f,c,d);}
function A32(a,b,c,d){var e,f,g;if(!(c instanceof BL))return FU(a,b,c,d);e=c;f=d.J();while(true){if(b>=f)return (-1);g=e.eA(a.gW,b);if(g<0)return (-1);b=g+1|0;if(b<f&&BG(e.f(b))){b=g+2|0;continue;}if(a.k.e(b,c,d)>=0)break;}return g;}
function AON(a,b,c,d,e){var f,g,h,i;if(!(d instanceof BL))return F2(a,b,c,d,e);f=d;g=e.J();a:{while(true){if(c<b)return (-1);h=f.mw(a.gW,c);if(h<0)break a;if(h<b)break a;i=h+1|0;if(i<g&&BG(f.f(i))){c=h+(-1)|0;continue;}if(a.k.e(i,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function A8y(a){return (((I()).a(B(103))).U(a.gW)).b();}
function AFY(a,b){if(b instanceof Du)return 0;if(b instanceof Ds)return 0;if(b instanceof C1)return 0;if(b instanceof Dq)return 0;if(b instanceof I2)return 0;if(!(b instanceof I7))return 1;return b.gW!=a.gW?0:1;}
function A4a(a,b){return 1;}
var QO=D(Ed);
function A$I(a,b,c,d){var e=new QO();A30(e,a,b,c,d);return e;}
function A30(a,b,c,d,e){KE(a,b,c,d,e);}
function A5M(a,b,c,d){var e,f,g,h,i;e=a.f8.i8();f=a.f8.iz();g=0;while(true){if(g>=e){a:{while(true){h=a.k.e(b,c,d);if(h>=0)break;if((b+a.bu.cf()|0)<=d.J()){h=a.bu.bI(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.bu.cf()|0)>d.J()){d.d2=1;return (-1);}i=a.bu.bI(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
var QP=D(Bt);
function AP9(){var a=new QP();AF8(a);return a;}
function AF8(a){Cl(a);}
function A08(a,b,c,d){if(b&&!(d.js()&&b==d.dH()))return (-1);return a.k.e(b,c,d);}
function AZX(a,b){return 0;}
function ALS(a){return B(613);}
function X0(){C.call(this);this.vb=null;}
function Bai(a){var b=new X0();ARk(b,a);return b;}
function ARk(a,b){J(a);a.vb=b;}
function A$6(b){return Bai(b);}
function A0s(a,b){a.vb.nA(b);}
function ARQ(a,b){a.vb.NH(b);}
function Dy(){var a=this;C.call(a);a.n=0.0;a.o=0.0;a.q=0.0;}
var Bj4=null;var Bj5=null;var Bj6=null;var BkO=null;var BkP=null;function HN(){HN=N(Dy);ADE();}
function S(){var a=new Dy();YL(a);return a;}
function Cg(a,b,c){var d=new Dy();QW(d,a,b,c);return d;}
function YL(a){HN();J(a);}
function QW(a,b,c,d){HN();J(a);a.I(b,c,d);}
function A1i(a,b,c,d){a.n=b;a.o=c;a.q=d;return a;}
function AF1(a,b){return a.I(b.n,b.o,b.q);}
function AP4(a,b){return a.Ar(b.n,b.o,b.q);}
function AKe(a,b,c,d){return a.I(a.n+b,a.o+c,a.q+d);}
function AL4(a,b){return a.IU(b.n,b.o,b.q);}
function APu(a,b,c,d){return a.I(a.n-b,a.o-c,a.q-d);}
function A5J(a,b){return a.I(a.n*b,a.o*b,a.q*b);}
function Td(b,c,d){HN();return FL(b*b+c*c+d*d);}
function A9i(a){return FL(a.n*a.n+a.o*a.o+a.q*a.q);}
function AFo(a){return a.n*a.n+a.o*a.o+a.q*a.q;}
function AXx(a,b){var c,d,e;c=b.n-a.n;d=b.o-a.o;e=b.q-a.q;return FL(c*c+d*d+e*e);}
function AHt(a,b){var c,d,e;c=b.n-a.n;d=b.o-a.o;e=b.q-a.q;return c*c+d*d+e*e;}
function A9D(a){var b;b=a.tR();if(b!==0.0&&b!==1.0)return a.eh(1.0/FL(b));return a;}
function AQn(a,b){return a.n*b.n+a.o*b.o+a.q*b.q;}
function AWW(a,b){return a.I(a.o*b.q-a.q*b.o,a.q*b.n-a.n*b.q,a.n*b.o-a.o*b.n);}
function A1N(a,b,c,d){return a.I(a.o*d-a.q*c,a.q*b-a.n*d,a.n*c-a.o*b);}
function APi(a,b){var c,d;c=b.c;d=c.data;return a.I(a.n*d[0]+a.o*d[4]+a.q*d[8]+d[12],a.n*d[1]+a.o*d[5]+a.q*d[9]+d[13],a.n*d[2]+a.o*d[6]+a.q*d[10]+d[14]);}
function AUi(a,b){var c,d;c=b.gI;d=c.data;return a.I(a.n*d[0]+a.o*d[3]+a.q*d[6],a.n*d[1]+a.o*d[4]+a.q*d[7],a.n*d[2]+a.o*d[5]+a.q*d[8]);}
function AGa(a,b,c){HN();BkP.N$(b,c);return a.kF(BkP);}
function A9x(a){return a.n===0.0&&a.o===0.0&&a.q===0.0?1:0;}
function AMu(a,b,c){a.n=a.n+c*(b.n-a.n);a.o=a.o+c*(b.o-a.o);a.q=a.q+c*(b.q-a.q);return a;}
function AEi(a){return ((((((((I()).a(B(22))).cA(a.n)).a(B(23))).cA(a.o)).a(B(23))).cA(a.q)).a(B(24))).b();}
function A5Q(a){var b;b=31+CB(a.n)|0;b=(31*b|0)+CB(a.o)|0;b=(31*b|0)+CB(a.q)|0;return b;}
function AFX(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(Cf(a)!==Cf(b))return 0;c=b;if(CB(a.n)!=CB(c.n))return 0;if(CB(a.o)!=CB(c.o))return 0;if(CB(a.q)==CB(c.q))return 1;return 0;}
function AHy(a){a.n=0.0;a.o=0.0;a.q=0.0;return a;}
function ADE(){Bj4=Cg(1.0,0.0,0.0);Bj5=Cg(0.0,1.0,0.0);Bj6=Cg(0.0,0.0,1.0);BkO=Cg(0.0,0.0,0.0);BkP=BO();}
function Gq(){var a=this;C.call(a);a.eM=0.0;a.eL=0.0;}
var BkQ=null;var BkR=null;var BkS=null;function ANk(){ANk=N(Gq);AWf();}
function If(){var a=new Gq();Rz(a);return a;}
function Vm(a,b){var c=new Gq();SQ(c,a,b);return c;}
function Rz(a){ANk();J(a);}
function SQ(a,b,c){ANk();J(a);a.eM=b;a.eL=c;}
function AVM(a,b){a.eM=b.eM;a.eL=b.eL;return a;}
function AB5(a,b,c){a.eM=b;a.eL=c;return a;}
function ANz(a,b){var c,d;c=b.eM-a.eM;d=b.eL-a.eL;return FL(c*c+d*d);}
function AWf(){BkQ=Vm(1.0,0.0);BkR=Vm(0.0,1.0);BkS=Vm(0.0,0.0);}
function EU(){var a=this;C.call(a);a.vO=null;a.tm=Bb;a.pS=Bb;a.rJ=Bb;}
function BkT(a,b,c,d){var e=new EU();NS(e,a,b,c,d);return e;}
function BkU(a,b,c){var d=new EU();Uy(d,a,b,c);return d;}
function CG(a,b){var c=new EU();GL(c,a,b);return c;}
function Bl(a){var b=new EU();AP3(b,a);return b;}
function NS(a,b,c,d,e){J(a);a.vO=b;a.tm=c;a.pS=d;a.rJ=e;}
function Uy(a,b,c,d){NS(a,b,c,d,Bb);}
function GL(a,b,c){NS(a,b,Bb,Bb,c);}
function AP3(a,b){Uy(a,b,Bb,Bb);}
function ANc(a,b,c,d){var e,f;e=d!==null&&d.c9!==null?Ee(d.c9):Bb;f=d!==null&&d.ct!==null?Ee(d.ct):Bb;return Z(Bs(e,a.tm),a.tm)&&Z(Bs(f,a.pS),a.pS)&&Z(Bs(BM(e,f),a.rJ),a.rJ)?1:0;}
function GG(){var a=this;C.call(a);a.cn=null;a.bS=0;a.mX=0;}
function GS(){var a=new GG();AIx(a);return a;}
function BkV(a,b){var c=new GG();TB(c,a,b);return c;}
function AIx(a){TB(a,1,16);}
function TB(a,b,c){J(a);a.mX=b;a.cn=Bc(c);}
function A0c(a,b){var c,d,e;c=a.cn;d=c.data;if(a.bS==d.length)c=a.tG(Bf(8,a.bS*1.75|0));d=c.data;e=a.bS;a.bS=e+1|0;d[e]=b;}
function APm(a,b){if(b<a.bS)return a.cn.data[b];G(Bg((((((I()).a(B(432))).j(b)).a(B(433))).j(a.bS)).b()));}
function AXU(a){a.bS=0;}
function AMm(a){if(a.cn.data.length!=a.bS)a.tG(a.bS);return a.cn;}
function AMD(a,b){var c;if(b<0)G(W((((I()).a(B(439))).j(b)).b()));c=a.bS+b|0;if(c>a.cn.data.length)a.tG(Bf(Bf(8,c),a.bS*1.75|0));return a.cn;}
function ADZ(a,b){var c,d,e;c=Bc(b);d=c.data;e=a.cn;Y(e,0,c,0,Bq(a.bS,d.length));a.cn=c;return c;}
function AKU(a){var b,c,d,e,f;if(!a.mX)return Mm(a);b=a.cn;c=1;d=0;e=a.bS;while(d<e){f=b.data;c=(c*31|0)+f[d]|0;d=d+1|0;}return c;}
function A7q(a,b){var c,d,e,f,g,h;if(b===a)return 1;if(!a.mX)return 0;if(!(b instanceof GG))return 0;c=b;if(!c.mX)return 0;d=a.bS;if(d!=c.bS)return 0;e=a.cn;f=c.cn;g=0;while(g<d){h=f.data;if(e.data[g]!=h[g])return 0;g=g+1|0;}return 1;}
function A0W(a){var b,c,d,e;if(!a.bS)return B(441);b=a.cn;c=b.data;d=ARN(32);d.lq(91);d.zO(c[0]);e=1;while(e<a.bS){d.Ch(B(442));d.zO(c[e]);e=e+1|0;}d.lq(93);return d.b();}
function HM(){var a=this;C.call(a);a.iC=null;a.t5=null;a.zP=null;a.EF=null;a.A2=null;a.D7=null;a.zg=null;a.sN=null;a.iA=null;a.ti=0;a.st=0;a.Ep=null;a.lj=null;a.G3=null;a.oV=null;a.kE=null;a.fY=null;}
var BkW=null;function BkX(a,b){var c=new HM();AAp(c,a,b);return c;}
function AUA(){return BkW;}
function AAp(a,b,c){var d;J(a);Ga();a.iA=Bh6;a.ti=(-1);a.st=1;a.G3=DC();a.oV=Bp();a.kE=Bp();d=BgW;a.sN=d.iS();a.zg=b;a.D7=c;a.A2=BgW.Em();QE(a);}
function QE(a){var b,c;BkW=BgW.Mf();Gd(B(614),B(103));if((BkW.windows?1:0)==1)Gd(B(557),B(615));else if((BkW.macOS?1:0)==1)Gd(B(557),B(616));else if((BkW.linux?1:0)!=1)Gd(B(557),B(617));else Gd(B(557),B(618));AKr(Bbt(BgW));b=D$();a.fY=b.Hc();if(a.fY.L6(B(619))){a.fY=a.fY.un(B(620),B(103));a.fY=a.fY.un(B(621),B(103));}a.lj=Bc$((((I()).a(a.fY)).a(B(622))).b());c=A_V();a.lj.LC(B(623));a.iC=A$l(a.D7);a.t5=A$p(a.A2);a.zP=Bbe(a.lj);a.Ep=BcZ();O6(a);Bem=a;Bfz=a.iC;BfC=a.iC.vq();BfD=a.iC.vq();Bfj=a.t5;BfB=a.zP;a.sN.vn(a);}
function A1g(a){var b,c,$$je;b=a.iA;a:{try{b:{Bbj();switch(Bh5.data[BD(b)]){case 1:if((D$()).J3())break b;Ga();a.iA=Bh9;break b;case 2:case 3:break;case 4:Ga();a.iA=Bh7;break b;default:break b;}Y9(a,a.zg);}}catch($$e){$$je=R($$e);if($$je instanceof C8){c=$$je;break a;}else{throw $$e;}}a.sN.vn(a);return;}c.E8();G(c);}
function Y9(a,b){var c,d,e,f;a.iC.fX();c=Bfz.bp();d=Bfz.bm();if(!(c==a.ti&&d==a.st)){a.ti=c;a.st=d;BfC.ov(0,0,c,d);e=a.iA;Ga();if(e===Bh7){a.iA=Bh8;b.wE();}b.Pu(c,d);}a.kE.qk(a.oV);a.oV.K();f=0;while(f<a.kE.h){(a.kE.l(f)).e3();f=f+1|0;}a.kE.K();e=a.iC;e.sE=Dx(e.sE,O(1));b.M_();a.t5.fM();}
function O6(a){a.lj.m0(B(624),Bbp(a));}
function ALU(a){return a.lj;}
function AEp(a,b,c){a.Ep.qm(b,c);}
function A3n(a){UK();return Bfc;}
function A1z(a,b){a.oV.E(b);}
function AJq(a,b){}
function ADM(b){return b.fY;}
function AIX(b,c){b.EF=c;return c;}
function A7r(b){return b.EF;}
function H6(){BH.call(this);this.g$=null;}
var Bi7=Bb;function Jm(){Jm=N(H6);AZh();}
function A$T(){var a=new H6();Js(a);return a;}
function Bb2(a){var b=new H6();Rx(b,a);return b;}
function Js(a){Jm();Gi(a,Bi7);a.g$=DH(1);}
function Rx(a,b){Jm();Js(a);a.g$.qk(b.g$);}
function A3e(a){return Bb2(a);}
function AMk(a){var b,c,d;b=G$(a);c=a.g$.bY();while(c.bC()){d=c.bz();b=(1229*b|0)+(d!==null?d.by():0)|0;}return b;}
function A6b(a){return a.PB();}
function AZh(){Bi7=BN(B(625));}
function Db(){var a=this;GV.call(a);a.MW=0;a.Im=0;a.Mi=0;a.MB=0;a.NL=0;a.HK=0;a.No=0;a.uV=0;a.O9=0;a.Pb=0;a.G0=0;a.MH=0;a.J4=0;a.Nj=0;a.Cv=0;a.HN=0;a.IC=0;a.Gl=0;a.KK=0;a.Gi=0;a.GJ=0;a.IR=0;a.N3=0;a.Pl=0;a.Mm=0;a.Gs=0;a.NQ=0;a.K5=0;a.LS=0;a.Kn=0;a.Mo=0;a.Er=0;a.Gf=0;a.FX=0;a.u4=0;a.xx=0;a.zE=0;a.rY=0;a.y4=0;a.rT=0;a.BP=0;a.tx=0;a.wf=0;a.tE=0;a.yE=0;a.EC=0;a.vW=0;a.xZ=0;a.Ea=0;a.vp=0;a.yt=0;a.DT=0;a.jH=0;a.w6=0;a.vs=0;a.l0=0;a.hb=0;a.v2=0;a.EX=0;a.s3=0;a.k8=0;a.eN=0;a.vi=0;a.zu=0;a.Ef=0;a.u0=0;a.yM=0;a.Bj=0;a.lx
=0;a.fk=0;a.Dq=0;a.OD=0;a.IF=null;a.cv=null;a.b9=null;a.b4=null;a.rq=null;a.k3=Bb;a.CV=Bb;a.g9=null;a.Id=null;a.vA=0.0;a.gN=0;a.KF=null;}
var BkY=null;var BkZ=null;var Bk0=Bb;var Bk1=0;var Bk2=0;var Bk3=Bb;var Bk4=null;function CN(){CN=N(Db);AO5();}
function A$D(a,b){var c=new Db();Wp(c,a,b);return c;}
function Bk5(a,b,c){var d=new Db();LH(d,a,b,c);return d;}
function Bk6(a,b,c,d,e){var f=new Db();Kd(f,a,b,c,d,e);return f;}
function Bk7(a,b,c){var d=new Db();L8(d,a,b,c);return d;}
function Xr(){CN();if(BkY===null)BkY=(BfB.nY(B(626))).vt();return BkY;}
function RJ(){CN();if(BkZ===null)BkZ=(BfB.nY(B(627))).vt();return BkZ;}
function Wp(a,b,c){CN();LH(a,b,c,YK(b,c));}
function LH(a,b,c,d){CN();Kd(a,b,c,d,c.pT===null?Xr():c.pT,c.uz===null?RJ():c.uz);}
function Kd(a,b,c,d,e,f){CN();L8(a,b,c,AHx((((I()).a(d)).a(e)).b(),(((I()).a(d)).a(f)).b()));}
function L8(a,b,c,d){var e,f,g,h,i;CN();Z$(a);a.u4=a.bZ(Bl(B(628)));a.xx=a.bZ(Bl(B(629)));a.zE=a.bZ(Bl(B(630)));a.rY=a.bZ(Bl(B(631)));a.y4=a.bZ(Bl(B(632)));a.rT=a.bZ(Bl(B(633)));a.BP=a.bZ(Bl(B(634)));a.tx=a.bZ(Bl(B(635)));a.wf=a.bZ(Bl(B(636)));a.tE=a.bZ(Bl(B(637)));a.yE=a.bZ(Bl(B(638)));a.EC=a.bZ(Bl(B(639)));a.vW=a.bZ(Bl(B(640)));a.xZ=a.bZ(Bl(B(641)));a.Ea=a.bZ(Bl(B(642)));a.vp=a.bZ(Bl(B(643)));a.yt=a.bZ(Bl(B(644)));a.DT=a.bZ(Bl(B(645)));a.IF=ANU();a.Id=OM();a.KF=S();e=Kj(b);a.g9=c;a.bi=d;f=b.ct===null?0:1;a:
{b:{a.fk=f;AAD();if(!Cp(e,Bg1)){if(!a.fk)break b;g=Bg1;if(!Cp(e,g))break b;}f=1;break a;}f=0;}a.Dq=f;a.OD=a.fk&&b.ct.iK!==null?1:0;a.rq=b;a.k3=BM(Ee(e),Bk3);a.CV=Nj(b.cP.b6.gH());a.cv=X(Hn,a.fk&&c.me>0?c.me:0);h=0;while(h<a.cv.data.length){a.cv.data[h]=AIj();h=h+1|0;}a.b9=X(N4,a.fk&&c.lX>0?c.lX:0);h=0;while(h<a.b9.data.length){a.b9.data[h]=Bcv();h=h+1|0;}a.b4=X(Ko,a.fk&&c.nb>0?c.nb:0);h=0;while(h<a.b4.data.length){a.b4.data[h]=A9F();h=h+1|0;}if(!c.rE&&Dr(Bs(Bk0,a.k3),a.k3))G(U(((((I()).a(B(646))).Mj(a.k3)).a(B(24))).b()));if
(b.dI!==null&&b.dI.data.length>c.gL)G(U((((((I()).a(B(647))).j(b.dI.data.length)).a(B(648))).j(c.gL)).b()));BcH();i=Bk8;A_A();a.MW=a.bg(i,Bew);a.Im=a.bg(Bk9,Bex);a.Mi=a.bg(Bk$,Bey);a.MB=a.bg(Bk_,Bez);a.NL=a.bg(Bla,BeA);a.HK=a.bg(Blb,BeB);a.No=a.bg(Blc,BeC);a.uV=a.bZ(Bl(B(649)));a.O9=a.bg(Bld,BeD);a.Pb=a.bg(Ble,BeE);a.G0=a.bg(Blf,BeF);a.MH=a.bg(Blg,BeG);a.J4=b.dI!==null&&c.gL>0?a.bg(Blh,BbU(c.gL)):(-1);a.Nj=a.bg(Bli,BeH);a.Cv=a.bZ(Blj);a.HN=a.bg(Blk,BeI);a.IC=a.bg(Bll,BeJ);a.Gl=a.bg(Blm,BeK);a.KK=a.bg(Bln,BeL);a.Gi
=a.bg(Blo,BeM);a.GJ=a.bg(Blp,BeN);a.IR=a.bg(Blq,BeO);a.N3=a.bg(Blr,BeP);a.Pl=a.bg(Bls,BeQ);a.Mm=a.bg(Blt,BeR);a.Gs=a.bg(Blu,BeS);a.NQ=a.bg(Blv,BeT);a.K5=a.bg(Blw,BeU);a.LS=a.bg(Blx,BeV);a.Kn=a.bg(Bly,BeW);a.Mo=a.bg(Blz,BeX);a.Er=a.bZ(BlA);a.Gf=!a.fk?(-1):a.bg(BlB,BcL(c.me,c.lX));a.FX=!a.Dq?(-1):a.bg(BlC,BeY);}
function AVH(a){var b;b=a.bi;a.bi=null;a.LE(b,a.rq);a.rq=null;a.jH=B0(a,a.u4);a.w6=B0(a,a.u4)-a.jH|0;a.vs=B0(a,a.xx)-a.jH|0;a.l0=B0(a,a.zE)-a.jH|0;if(a.l0<0)a.l0=0;a.hb=B0(a,a.rY);a.v2=B0(a,a.rY)-a.hb|0;a.EX=B0(a,a.y4)-a.hb|0;a.s3=!H0(a,a.rT)?(-1):B0(a,a.rT)-a.hb|0;a.k8=B0(a,a.BP)-a.hb|0;if(a.k8<0)a.k8=0;a.eN=B0(a,a.tx);a.vi=B0(a,a.tx)-a.eN|0;a.zu=B0(a,a.wf)-a.eN|0;a.Ef=B0(a,a.yE)-a.eN|0;a.u0=!H0(a,a.tE)?(-1):B0(a,a.tE)-a.eN|0;a.yM=B0(a,a.EC)-a.eN|0;a.Bj=B0(a,a.vW)-a.eN|0;a.lx=B0(a,a.xZ)-a.eN|0;if(a.lx<0)a.lx
=0;}
function Eo(b,c){CN();return Dr(Bs(b,c),c)?0:1;}
function S3(b,c){CN();return Z(Bs(b,c),Bb)?0:1;}
function Kj(b){CN();Bk4.K();if(b.ct!==null)FX(Bk4,b.ct);if(b.c9!==null)FX(Bk4,b.c9);return Bk4;}
function RC(b){var c;CN();c=Bb;if(b.ct!==null)c=BM(c,Ee(b.ct));if(b.c9!==null)c=BM(c,Ee(b.c9));return c;}
function YK(b,c){var d,e,f,g,h,i,j,k;CN();d=Kj(b);e=B(103);f=Ee(d);g=Iv(b.cP.b6.gH());if(Eo(g,O(1)))e=(((I()).a(e)).a(B(650))).b();if(S3(g,O(6)))e=(((I()).a(e)).a(B(651))).b();if(Eo(g,O(256)))e=(((I()).a(e)).a(B(652))).b();if(Eo(g,O(128)))e=(((I()).a(e)).a(B(653))).b();if(Eo(g,O(8)))e=(((I()).a(e)).a(B(654))).b();if(!(!Eo(g,O(8))&&!Eo(g,O(384)))&&b.ct!==null){h=(((I()).a(e)).a(B(655))).b();h=(((I()).a(h)).a(B(656))).b();h=(((((I()).a(h)).a(B(657))).j(c.me)).a(B(326))).b();h=(((((I()).a(h)).a(B(658))).j(c.lX)).a(B(326))).b();e
=(((((I()).a(h)).a(B(659))).j(c.nb)).a(B(326))).b();Ch();if(Cp(d,BjD))e=(((I()).a(e)).a(B(660))).b();if(b.ct.iK!==null)e=(((I()).a(e)).a(B(661))).b();AAD();if(Cp(d,Bg1))e=(((I()).a(e)).a(B(662))).b();}i=CR(b.cP.b6.gH());j=0;while(j<i){k=Cy(b.cP.b6.gH(),j);if(k.fd==64)e=(((((I()).a(e)).a(B(663))).j(k.jK)).a(B(664))).b();else if(k.fd==16)e=(((((I()).a(e)).a(B(665))).j(k.jK)).a(B(664))).b();j=j+1|0;}GA();if(Z(Bs(f,Bg5),Bg5))e=(((I()).a(e)).a(B(666))).b();Cw();if(Z(Bs(f,Bkh),Bkh)){h=(((I()).a(e)).a(B(667))).b();e
=(((I()).a(h)).a(B(668))).b();}if(Z(Bs(f,Bki),Bki)){h=(((I()).a(e)).a(B(669))).b();e=(((I()).a(h)).a(B(670))).b();}if(Z(Bs(f,Bj9),Bj9)){h=(((I()).a(e)).a(B(671))).b();e=(((I()).a(h)).a(B(672))).b();}if(Z(Bs(f,Bj7),Bj7)){h=(((I()).a(e)).a(B(673))).b();e=(((I()).a(h)).a(B(674))).b();}if(Z(Bs(f,Bj8),Bj8)){h=(((I()).a(e)).a(B(675))).b();e=(((I()).a(h)).a(B(676))).b();}if(Z(Bs(f,Bj$),Bj$)){h=(((I()).a(e)).a(B(677))).b();e=(((I()).a(h)).a(B(678))).b();}Ch();if(Z(Bs(f,Bjx),Bjx))e=(((I()).a(e)).a(B(679))).b();if(Z(Bs(f,
Bjy),Bjy))e=(((I()).a(e)).a(B(680))).b();if(Z(Bs(f,BjA),BjA))e=(((I()).a(e)).a(B(681))).b();if(Z(Bs(f,BjB),BjB))e=(((I()).a(e)).a(B(682))).b();EP();if(Z(Bs(f,Bji),Bji))e=(((I()).a(e)).a(B(683))).b();if(Z(Bs(f,Bjj),Bjj))e=(((I()).a(e)).a(B(684))).b();if(b.dI!==null&&c.gL>0)e=(((((I()).a(e)).a(B(685))).j(c.gL)).a(B(326))).b();return e;}
function A1V(a,b){var c,d,e,f;if(b.dI!==null&&b.dI.data.length>a.g9.gL)return 0;a:{c=RC(b);if(Z(a.k3,BM(c,Bk3))){d=a.CV;e=b.cP.b6;if(Z(d,Nj(e.gH()))&&(b.ct===null?0:1)==a.fk){f=1;break a;}}f=0;}return f;}
function A4v(a,b){return b instanceof Db&&a.Ou(b)?1:0;}
function ARm(a,b){return b!==a?0:1;}
function AFD(a,b,c){var d,e,f,g,h,i,j;Xb(a,b,c);d=a.cv.data;e=d.length;f=0;while(f<e){g=d[f];g.xn(0.0,0.0,0.0,0.0,(-1.0),0.0);f=f+1|0;}d=a.b9.data;e=d.length;f=0;while(f<e){h=d[f];h.HC(0.0,0.0,0.0,0.0,0.0,0.0,0.0);f=f+1|0;}d=a.b4.data;e=d.length;f=0;while(f<e){i=d[f];i.Oi(0.0,0.0,0.0,0.0,0.0,0.0,0.0,(-1.0),0.0,0.0,1.0,0.0);f=f+1|0;}a.gN=0;if(H0(a,a.uV)){e=a.uV;j=a.vA+Bfz.EI();a.vA=j;Fi(a,e,j);}}
function A8A(a,b,c){GA();if(!Cp(c,Bg5))a.cW.wW(0,770,771);a.Hy(c);if(a.fk)a.Je(b,c);UG(a,b,c);}
function ADa(a){VV(a);}
function A0J(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a.g9.uB!=(-1))c=a.g9.uB;else{CN();c=Bk1;}if(a.g9.pQ!=(-1))d=a.g9.pQ;else{CN();d=Bk2;}e=0.0;f=1.0;g=1;h=JV(b);while(h.bC()){i=h.bz();j=i.dt;if(TK(j)){k=a.cW;l=i;k.wW(1,l.JC,l.Kd);Fi(a,a.Cv,l.Hh);}else{AFv();if(Z(Bs(j,BjN),BjN))c=i.Hu;else{EP();if(Z(Bs(j,Bjj),Bjj))Fi(a,a.Er,i.mb);else{AH6();if(Z(Bs(j,BiY),BiY)){m=i;d=m.LH;e=m.JQ;f=m.Ik;g=m.ND;}else if(!a.g9.rE)G(U((((I()).a(B(686))).a(i.b())).b()));}}}}a.cW.Hr(c);a.cW.Ld(d,e,f);a.cW.L7(g);}
function A1s(a,b,c){var d,e,f,g,h,i,j,k,l;d=b.ct;Jm();e=Hx(c,F(H6),Bi7);f=e!==null?e.g$:null;A1Q();g=Hx(c,F(Hb),Biu);h=g!==null?g.DI:null;A_K();i=Hx(c,F(GW),Bky);j=i!==null?i.OE:null;a:{if(a.jH>=0){k=0;b:while(true){if(k>=a.cv.data.length)break a;c:{if(f!==null&&k<f.h){if(a.gN&&a.cv.data[k].D$(f.l(k)))break c;a.cv.data[k].Iu(f.l(k));}else{if(a.gN&&a.cv.data[k].bl.s===0.0&&a.cv.data[k].bl.r===0.0&&a.cv.data[k].bl.t===0.0)break c;a.cv.data[k].bl.hJ(0.0,0.0,0.0,1.0);}l=a.jH+Cb(k,a.l0)|0;a.bi.ja(l+a.w6|0,a.cv.data[k].bl.s,
a.cv.data[k].bl.r,a.cv.data[k].bl.t);a.bi.ja(l+a.vs|0,a.cv.data[k].e2.n,a.cv.data[k].e2.o,a.cv.data[k].e2.q);if(a.l0<=0)break b;}k=k+1|0;}}}d:{if(a.hb>=0){k=0;e:while(true){if(k>=a.b9.data.length)break d;f:{if(h!==null&&k<h.h){if(a.gN&&a.b9.data[k].Fw(h.l(k)))break f;a.b9.data[k].KA(h.l(k));}else{if(a.gN&&a.b9.data[k].dw===0.0)break f;a.b9.data[k].dw=0.0;}l=a.hb+Cb(k,a.k8)|0;a.bi.ja(l+a.v2|0,a.b9.data[k].bl.s*a.b9.data[k].dw,a.b9.data[k].bl.r*a.b9.data[k].dw,a.b9.data[k].bl.t*a.b9.data[k].dw);a.bi.ja(l+a.EX
|0,a.b9.data[k].ew.n,a.b9.data[k].ew.o,a.b9.data[k].ew.q);if(a.s3>=0)a.bi.j8(l+a.s3|0,a.b9.data[k].dw);if(a.k8<=0)break e;}k=k+1|0;}}}g:{if(a.eN>=0){k=0;h:while(true){if(k>=a.b4.data.length)break g;i:{if(j!==null&&k<j.h){if(a.gN&&a.b4.data[k].HD(j.l(k)))break i;a.b4.data[k].Jm(j.l(k));}else{if(a.gN&&a.b4.data[k].ed===0.0)break i;a.b4.data[k].ed=0.0;}l=a.eN+Cb(k,a.lx)|0;a.bi.ja(l+a.vi|0,a.b4.data[k].bl.s*a.b4.data[k].ed,a.b4.data[k].bl.r*a.b4.data[k].ed,a.b4.data[k].bl.t*a.b4.data[k].ed);a.bi.r8(l+a.zu|0,a.b4.data[k].hq);a.bi.r8(l
+a.Ef|0,a.b4.data[k].hZ);a.bi.j8(l+a.yM|0,a.b4.data[k].iP);a.bi.j8(l+a.Bj|0,a.b4.data[k].i$);if(a.u0>=0)a.bi.j8(l+a.u0|0,a.b4.data[k].ed);if(a.lx<=0)break h;}k=k+1|0;}}}Ch();if(Cp(c,BjD))Fq(a,a.Ea,(BB(c,BjD)).dW);if(d!==null&&d.iK!==null){DX(a,a.vp,d.iK.V0());YH(a,a.yt,d.iK.OG());Fi(a,a.DT,1.0/(2.0*(d.iK.OG()).sQ.bp()));}a.gN=1;}
function AO5(){var b,c;BkY=null;BkZ=null;GA();b=Bg5;Cw();c=BM(b,Bkh);Ch();c=BM(BM(c,Bjx),Bjy);EP();Bk0=BM(c,Bji);Bk1=1029;Bk2=515;AFv();c=BjN;AH6();Bk3=BM(c,BiY);Bk4=AR3();}
function Ko(){var a=this;DL.call(a);a.hq=null;a.hZ=null;a.ed=0.0;a.iP=0.0;a.i$=0.0;}
function A9F(){var a=new Ko();A4m(a);return a;}
function A4m(a){HH(a);a.hq=S();a.hZ=S();}
function A0I(a,b){return a.GL(b.bl,b.hq,b.hZ,b.ed,b.iP,b.i$);}
function A3k(a,b,c,d,e,f,g){if(b!==null)a.bl.eI(b);if(c!==null)a.hq.M(c);if(d!==null)(a.hZ.M(d)).bU();a.ed=e;a.iP=f;a.i$=g;return a;}
function A8d(a,b,c,d,e,f,g,h,i,j,k,l,m){a.bl.hJ(b,c,d,1.0);a.hq.I(e,f,g);(a.hZ.I(h,i,j)).bU();a.ed=k;a.iP=l;a.i$=m;return a;}
function AJY(a,b){var c,d,e,f,g;a:{b:{if(b!==null){if(b===a)break b;if(a.bl.z(b.bl)&&a.hq.z(b.hq)){c=a.hZ;d=b.hZ;if(c.z(d)&&Dg(a.ed,b.ed)&&Dg(a.iP,b.iP)){e=a.i$;f=b.i$;if(Dg(e,f))break b;}}}g=0;break a;}g=1;}return g;}
function WG(){C.call(this);this.E$=0;}
function BcZ(){var a=new WG();AGB(a);return a;}
function AGB(a){J(a);a.E$=2;}
function A07(a,b,c){if(a.E$>=1)(SY()).f9(((((I()).a(b)).a(B(8))).a(c)).b());}
var LP=D(Di);
function A_f(){var a=new LP();A6_(a);return a;}
function A6_(a){Jc(a);}
var Ur=D(GY);
function A$K(a){var b=new Ur();ALv(b,a);return b;}
function ALv(a,b){SA(a,B(687));a.et(A4c(b.dv()),1);}
function A4c(b){var otherJSObj=Bullet.wrapPointer(b,Bullet.btCollisionConfiguration);var jsObj=new Bullet.btCollisionDispatcher(otherJSObj);return Bullet.getPointer(jsObj);}
function Z3(){var a=this;E1.call(a);a.gU=null;a.gO=null;a.lF=0;}
function Bcm(a){var b=new Z3();AWa(b,a);return b;}
function AWa(a,b){NT(a,b);}
function AYm(a){OE(a);a.gU=a.P;a.lF=a.lF+1|0;return a.P;}
function AV$(a){var b,c;a.lF=Bf(0,a.lF-1|0);if(a.gU===null)return;a:{if(a.gU!==a.P&&!a.lF){a.gO=a.gU;b=0;c=a.gO.data.length;while(true){if(b>=c)break a;a.gO.data[b]=null;b=b+1|0;}}}a.gU=null;}
function OE(a){if(a.gU!==null&&a.gU===a.P){if(a.gO!==null&&a.gO.data.length>=a.h){Y(a.P,0,a.gO,0,a.h);a.P=a.gO;a.gO=null;}else a.j5(a.P.data.length);return;}}
function Pu(){C.call(this);this.pi=null;}
function Pc(a){var b=new Pu();AQz(b,a);return b;}
function AQz(a,b){J(a);a.pi=b;}
function Fz(a){return a.pi.Ba();}
function Sy(a,b){a.pi.zU(b);}
function ABS(a,b){var c,d,$$je;if(b===null)b=X(C,0);a:{b:{c:{try{c=a.pi.B6(b);}catch($$e){$$je=R($$e);if($$je instanceof C0){d=$$je;break c;}else if($$je instanceof KX){d=$$je;break a;}else if($$je instanceof LP){d=$$je;break b;}else if($$je instanceof L1){d=$$je;G(Eu((((I()).a(B(688))).a((Fz(a)).u())).b(),d));}else{throw $$e;}}return c;}G(Eu((((I()).a(B(689))).a((Fz(a)).u())).b(),d));}G(Eu((((I()).a(B(690))).a((Fz(a)).u())).b(),d));}G(Eu((((I()).a(B(690))).a((Fz(a)).u())).b(),d));}
function AA3(){var a=this;Fc.call(a);a.Aa=0;a.r0=0;a.tA=null;}
function Bcr(a,b,c,d,e,f){var g=new AA3();A9h(g,a,b,c,d,e,f);return g;}
function A9h(a,b,c,d,e,f,g){K5(a,c,e,f);a.r0=b;a.Aa=g;a.tA=d;}
function AHB(a,b){return a.tA.data[b+a.r0|0];}
function AZ$(a,b,c){a.tA.data[b+a.r0|0]=c;}
function AWQ(a){return a.Aa;}
var Dv=D(Bw);
var Bh6=null;var Bh9=null;var BlD=null;var Bh7=null;var Bh8=null;var BlE=null;function Ga(){Ga=N(Dv);AIi();}
function HQ(a,b){var c=new Dv();YA(c,a,b);return c;}
function Qb(){Ga();return BlE.ge();}
function YA(a,b,c){Ga();Cs(a,b,c);}
function AIi(){Bh6=HQ(B(691),0);Bh9=HQ(B(692),1);BlD=HQ(B(693),2);Bh7=HQ(B(694),3);Bh8=HQ(B(695),4);BlE=H(Dv,[Bh6,Bh9,BlD,Bh7,Bh8]);}
var IT=D();
var BlF=null;var BlG=null;function SK(){SK=N(IT);ATV();}
function J9(b){SK();return !(b&1)?0:1;}
function AAw(b){var c,d,e,f,g,h,i;SK();c=I();d=Z0();e=0;f=BlG.data;g=f.length;h=0;while(h<g){i=f[h];if(b&i){if(c.i()>0)c.U(32);c.a(d.data[e]);}e=e+1|0;h=h+1|0;}return c.b();}
function Z0(){SK();if(BlF===null)BlF=H(BL,[B(696),B(697),B(698),B(699),B(700),B(701),B(702),B(703),B(704),B(705),B(706),B(707)]);return BlF;}
function ATV(){BlG=Mb([1,4,2,1024,8,16,128,64,32,256,2048,512]);}
function YN(){var a=this;C.call(a);a.hA=null;a.c1=0;a.FW=0;}
function ATv(){var a=new YN();AQK(a);return a;}
function BlH(a,b){var c=new YN();ZH(c,a,b);return c;}
function AQK(a){ZH(a,1,16);}
function ZH(a,b,c){J(a);a.FW=b;a.hA=Mu(c);}
function A1o(a,b){var c,d,e;c=a.hA;d=c.data;if(a.c1==d.length)c=a.B_(Bf(8,a.c1*1.75|0));d=c.data;e=a.c1;a.c1=e+1|0;d[e]=b;}
function AQ2(a){a.c1=0;}
function AU3(a,b){var c;if(b<0)G(W((((I()).a(B(439))).j(b)).b()));c=a.c1+b|0;if(c>a.hA.data.length)a.B_(Bf(Bf(8,c),a.c1*1.75|0));return a.hA;}
function AW7(a,b){var c,d,e;c=Mu(b);d=c.data;e=a.hA;Y(e,0,c,0,Bq(a.c1,d.length));a.hA=c;return c;}
var SP=D();
function CB(b){return $rt_floatToIntBits(b);}
function A4t(b){return NN(b);}
function AYM(b){var c,d;c=NN(b);d=c|((c>>>24)*1.003937005996704|0)<<24;return d;}
function JS(b){return $rt_intBitsToFloat(b&(-16777217));}
var UX=D(T);
function Bb8(){var a=new UX();AK7(a);return a;}
function AK7(a){Bo(a);}
function A77(a){var b;b=A$y(a);b.bf=1;return b;}
function Q5(){var a=this;G8.call(a);a.hu=0;a.cp=null;a.jZ=0;a.Fa=0.0;a.q7=0;}
function C3(){var a=new Q5();AGr(a);return a;}
function BlI(a){var b=new Q5();Of(b,a);return b;}
function BlJ(a,b){var c=new Q5();ABp(c,a,b);return c;}
function AY2(a,b){return X(M2,b);}
function AGr(a){Of(a,16);}
function Of(a,b){ABp(a,b,0.75);}
function TM(b){var c,d;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function ABp(a,b,c){var d;W0(a);if(b>=0&&c>0.0){d=TM(b);a.hu=0;a.cp=a.AV(d);a.Fa=c;K9(a);return;}G(CH());}
function K9(a){a.q7=a.cp.data.length*a.Fa|0;}
function AQE(a,b){var c;c=YY(a,b);if(c===null)return null;return c.g0;}
function YY(a,b){var c,d,e;if(b===null)c=KF(a);else{d=JY(b);e=d&(a.cp.data.length-1|0);c=Kg(a,b,e,d);}return c;}
function Kg(a,b,c,d){var e,f;e=a.cp.data[c];while(e!==null){if(e.pc==d){f=e.hx;if(Vi(b,f))break;}e=e.eZ;}return e;}
function KF(a){var b;b=a.cp.data[0];while(b!==null&&b.hx!==null){b=b.eZ;}return b;}
function AMa(a,b,c){return a.Pd(b,c);}
function AQh(a,b,c){var d,e,f,g,h;if(b===null){d=KF(a);if(d===null){a.jZ=a.jZ+1|0;d=a.v_(null,0,0);e=a.hu+1|0;a.hu=e;if(e>a.q7)a.oH();}}else{f=JY(b);g=f&(a.cp.data.length-1|0);d=Kg(a,b,g,f);if(d===null){a.jZ=a.jZ+1|0;d=a.v_(b,g,f);e=a.hu+1|0;a.hu=e;if(e>a.q7)a.oH();}}h=d.g0;d.g0=c;return h;}
function ANY(a,b,c,d){var e;e=A_1(b,d);e.eZ=a.cp.data[c];a.cp.data[c]=e;return e;}
function AYI(a,b){var c,d,e,f,g,h,i;c=TM(!b?1:b<<1);d=a.AV(c);e=0;while(e<a.cp.data.length){f=a.cp.data[e];a.cp.data[e]=null;while(f!==null){g=d.data;h=f.pc&(c-1|0);i=f.eZ;f.eZ=g[h];g[h]=f;f=i;}e=e+1|0;}a.cp=d;K9(a);}
function A4M(a){a.Ln(a.cp.data.length);}
function ALF(a,b){var c;c=R$(a,b);if(c===null)return null;return c.g0;}
function R$(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.cp.data[0];while(e!==null){if(e.hx===null)break a;f=e.eZ;d=e;e=f;}}else{g=JY(b);c=g&(a.cp.data.length-1|0);e=a.cp.data[c];while(e!==null&&!(e.pc==g&&Vi(b,e.hx))){f=e.eZ;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.eZ=e.eZ;else a.cp.data[c]=e.eZ;a.jZ=a.jZ+1|0;a.hu=a.hu-1|0;return e;}
function JY(b){return b.by();}
function Vi(b,c){return b!==c&&!b.z(c)?0:1;}
function DA(){Bw.call(this);this.Np=null;}
var Bhb=null;var Bhd=null;var Bha=null;var Bhc=null;var Bhe=null;var BlK=null;function R_(){R_=N(DA);ANT();}
function Is(a,b,c){var d=new DA();AA7(d,a,b,c);return d;}
function LT(){R_();return BlK.ge();}
function AA7(a,b,c,d){R_();Cs(a,b,c);a.Np=d;}
function ANT(){Bhb=Is(B(708),0,B(327));Bhd=Is(B(709),1,B(329));Bha=Is(B(710),2,B(711));Bhc=Is(B(712),3,B(328));Bhe=Is(B(713),4,B(137));BlK=H(DA,[Bhb,Bhd,Bha,Bhc,Bhe]);}
function YO(){Bt.call(this);this.kJ=0;}
function A$G(a){var b=new YO();AZj(b,a);return b;}
function AZj(a,b){Cl(a);a.kJ=b;}
function AMT(a,b,c,d){var e;e=!d.js()?c.i()-b|0:d.J()-b|0;if(e<=0){d.bx(a.kJ,0);return a.k.e(b,c,d);}if(c.f(b)!=10)return (-1);d.bx(a.kJ,1);return a.k.e(b+1|0,c,d);}
function AYk(a,b){var c;c=!b.ep(a.kJ)?0:1;b.bx(a.kJ,(-1));return c;}
function ACY(a){return B(714);}
function AAq(){var a=this;C.call(a);a.R=null;a.Z=0;a.zI=0;}
function RV(){var a=new AAq();ANM(a);return a;}
function BlL(a,b){var c=new AAq();Tv(c,a,b);return c;}
function ANM(a){Tv(a,1,16);}
function Tv(a,b,c){J(a);a.zI=b;a.R=B9(c);}
function AV5(a,b){var c,d,e;c=a.R;d=c.data;if(a.Z==d.length)c=a.tH(Bf(8,a.Z*1.75|0));d=c.data;e=a.Z;a.Z=e+1|0;d[e]=b;}
function ADN(a,b){a.rp(b.R,0,b.Z);}
function APA(a,b,c,d){if((c+d|0)<=b.Z){a.rp(b.R,c,d);return;}G(W((((((((I()).a(B(494))).j(c)).a(B(430))).j(d)).a(B(431))).j(b.Z)).b()));}
function AC7(a,b,c,d){var e,f,g;e=a.R;f=e.data;g=a.Z+d|0;if(g>f.length)e=a.tH(Bf(Bf(8,g),a.Z*1.75|0));Y(b,c,e,a.Z,d);a.Z=a.Z+d|0;}
function AWx(a,b){if(b<a.Z)return a.R.data[b];G(Bg((((((I()).a(B(432))).j(b)).a(B(433))).j(a.Z)).b()));}
function ATn(a,b,c){var d,e,f,g,h,i;d=a.Z;if(c>=d)G(Bg((((((I()).a(B(436))).j(c)).a(B(433))).j(a.Z)).b()));if(b>c)G(Bg((((((I()).a(B(437))).j(b)).a(B(435))).j(c)).b()));e=(c-b|0)+1|0;f=d-e|0;if(a.zI){g=a.R;h=b+e|0;Y(g,h,a.R,b,d-h|0);}else{i=Bf(f,c+1|0);Y(a.R,i,a.R,b,d-i|0);}a.Z=f;}
function AUQ(a){a.Z=0;}
function AOD(a,b){var c;if(b<0)G(W((((I()).a(B(439))).j(b)).b()));c=a.Z+b|0;if(c>a.R.data.length)a.tH(Bf(Bf(8,c),a.Z*1.75|0));return a.R;}
function AMl(a,b){var c,d,e;c=B9(b);d=c.data;e=a.R;Y(e,0,c,0,Bq(a.Z,d.length));a.R=c;return c;}
function AE$(a,b){if(a.Z>b)a.Z=b;}
function Dk(){var a=this;BH.call(a);a.iy=null;a.i5=0.0;a.i4=0.0;a.jW=0.0;a.jX=0.0;}
var Bkh=Bb;var Bki=Bb;var BlM=Bb;var Bj9=Bb;var Bj$=Bb;var Bj7=Bb;var Bj8=Bb;var BlN=Bb;function Cw(){Cw=N(Dk);AII();}
function AII(){Bkh=BN(B(715));Bki=BN(B(716));BlM=BN(B(717));Bj9=BN(B(718));Bj$=BN(B(719));Bj7=BN(B(720));Bj8=BN(B(721));BlN=BM(BM(BM(BM(BM(BM(Bkh,Bki),BlM),Bj9),Bj$),Bj7),Bj8);}
var Bh=D();
var Bk8=null;var Bk9=null;var Bk$=null;var Bk_=null;var Bla=null;var Blb=null;var Blc=null;var Bld=null;var Ble=null;var Blf=null;var Blg=null;var Blh=null;var Bli=null;var Blj=null;var Blk=null;var Bll=null;var Blm=null;var Bln=null;var Blo=null;var Blp=null;var Blq=null;var Blr=null;var Bls=null;var Blt=null;var Blu=null;var Blv=null;var Blw=null;var Blx=null;var Bly=null;var Blz=null;var BlA=null;var BlB=null;var BlO=null;var BlP=null;var BlQ=null;var BlC=null;function BcH(){BcH=N(Bh);AUB();}
function AUB(){var b;Bk8=Bl(B(479));Bk9=Bl(B(722));Bk$=Bl(B(723));Bk_=Bl(B(724));Bla=Bl(B(725));Blb=Bl(B(726));Blc=Bl(B(727));Bld=Bl(B(728));Ble=Bl(B(729));Blf=Bl(B(730));Blg=Bl(B(731));Blh=Bl(B(732));b=new EU;EP();GL(b,B(733),Bji);Bli=b;b=new EU;GA();GL(b,B(734),Bg5);Blj=b;b=new EU;Ch();GL(b,B(735),Bjx);Blk=b;b=new EU;Cw();GL(b,B(736),Bkh);Bll=b;Blm=CG(B(737),Bkh);Bln=CG(B(738),Bjy);Blo=CG(B(739),Bki);Blp=CG(B(740),Bki);Blq=CG(B(741),BjA);Blr=CG(B(742),Bj7);Bls=CG(B(743),Bj7);Blt=CG(B(744),BjB);Blu=CG(B(745),
Bj8);Blv=CG(B(746),Bj8);Blw=CG(B(747),Bj9);Blx=CG(B(748),Bj9);Bly=CG(B(749),Bj$);Blz=CG(B(750),Bj$);BlA=Bl(B(751));BlB=Bl(B(752));BlO=Bl(B(753));BlP=Bl(B(754));BlQ=Bl(B(755));BlC=Bl(B(756));}
var Zh=D(GU);
function A90(a,b,c,d){var e=new Zh();AOc(e,a,b,c,d);return e;}
function AOc(a,b,c,d,e){var f,g,h,i;Qm(a,B(757));f=b.dv();g=c.dv();h=d.dv();i=e.dv();a.et(A4w(f,g,h,i),1);}
function A4w(b,c,d,e){var dispatcherJSObj=Bullet.wrapPointer(b,Bullet.btDispatcher);var broadphaceJSObj=Bullet.wrapPointer(c,Bullet.btBroadphaseInterface);var solverJSObj=Bullet.wrapPointer(d,Bullet.btConstraintSolver);var configJSObj=Bullet.wrapPointer(e,Bullet.btCollisionConfiguration);var jsObj=new Bullet.btDiscreteDynamicsWorld(dispatcherJSObj,broadphaceJSObj,solverJSObj,configJSObj);return Bullet.getPointer(jsObj);}
var P1=D(D1);
function BbJ(){var a=new P1();A5H(a);return a;}
function A5H(a){Nz(a);}
function Ja(){var a=this;C.call(a);a.jR=0;a.mU=0;}
var Bej=null;var Bei=null;function Bk(){Bk=N(Ja);AXB();}
function JP(a,b){var c=new Ja();WK(c,a,b);return c;}
function WK(a,b,c){Bk();J(a);a.jR=b;a.mU=c;}
function ALY(a){return a.jR?0:1;}
function A7c(a){return a.jR!=1?0:1;}
function A0L(a){return !a.yY()&&!a.tI()?0:1;}
function AIf(a){return a.jR!=2?0:1;}
function AQN(a){return a.jR!=3?0:1;}
function AG9(a){if(a.ml())return a.mU;G(Bdj());}
function BU(b){Bk();return JP(2,b);}
function FZ(b){Bk();return JP(3,b);}
function AOJ(a){switch(a.jR){case 0:G(A$v());case 1:G(Bax());case 2:G(Bbl(a.mU));case 3:G(A$w(a.mU));default:}}
function AXB(){Bej=JP(0,0);Bei=JP(1,0);}
var P2=D(Ci);
function A$F(){var a=new P2();AYa(a);return a;}
function AYa(a){D9(a);}
function A8N(a,b,c){return 1;}
function A6c(a,b){}
var V6=D(Cd);
function Baj(){var a=new V6();A8o(a);return a;}
function A8o(a){DP(a);}
function API(a,b,c,d,e){DX(b,c,b.cT.jr);}
function Lr(){Bt.call(this);this.iu=0;}
function A_X(a){var b=new Lr();AAv(b,a);return b;}
function AAv(a,b){Cl(a);a.iu=b;}
function A4n(a,b,c,d){var e,f,g,h;e=!d.js()?c.i():d.J();if(b>=e){d.bx(a.iu,0);return a.k.e(b,c,d);}f=e-b|0;if(f==2&&c.f(b)==13){g=b+1|0;if(c.f(g)==10){d.bx(a.iu,0);return a.k.e(b,c,d);}}a:{if(f==1){h=c.f(b);if(h==10)break a;if(h==13)break a;if(h==133)break a;if((h|1)==8233)break a;}return (-1);}d.bx(a.iu,0);return a.k.e(b,c,d);}
function AWh(a,b){var c;c=!b.ep(a.iu)?0:1;b.bx(a.iu,(-1));return c;}
function A1G(a){return B(426);}
var V3=D(Cd);
function A9H(){var a=new V3();ATk(a);return a;}
function ATk(a){DP(a);}
function AM6(a,b,c,d,e){DX(b,c,b.cT.eD);}
var V5=D(Cd);
function Bbn(){var a=new V5();ACG(a);return a;}
function ACG(a){DP(a);}
function A6Q(a,b,c,d,e){DX(b,c,b.cT.hf);}
var WV=D(HP);
function A_o(){var a=new WV();A2h(a);return a;}
function A2h(a){Tb(a,B(758));a.et(AIK(),1);}
function AIK(){var jsObj=new Bullet.btDefaultCollisionConfiguration();return Bullet.getPointer(jsObj);}
var V1=D(Cd);
function BdC(){var a=new V1();AQy(a);return a;}
function AQy(a){DP(a);}
function A2j(a,b,c,d,e){Lb(b,c,b.cT.c6);}
var V2=D(Cd);
function Bbg(){var a=new V2();AEj(a);return a;}
function AEj(a){DP(a);}
function ADj(a,b,c,d,e){DM(b,c,b.cT.co.n,b.cT.co.o,b.cT.co.q,1.188099980354309/(b.cT.jG*b.cT.jG));}
var VZ=D(Cd);
function A$t(){var a=new VZ();AZb(a);return a;}
function AZb(a){DP(a);}
function A4s(a,b,c,d,e){VP(b,c,b.cT.k5,b.cT.jG);}
function SW(){var a=this;C.call(a);a.kk=0;a.fQ=0;a.hj=null;a.f5=null;a.EB=0;a.la=0;a.rO=0;a.tO=0;a.HM=null;a.hi=0;}
function Bac(a,b){var c=new SW();A8m(c,a,b);return c;}
function BlR(a,b,c){var d=new SW();XM(d,a,b,c);return d;}
function A8m(a,b,c){XM(a,b,c,(-1));}
function XM(a,b,c,d){var e;J(a);a.rO=0;a.tO=0;a.HM=BcQ();a.hi=0;e=Bq(A0V(),32);if(d<0)d=e-c|0;if(c>=0&&d>=0&&(c+d|0)<=e){a.EB=b;a.kk=c;a.fQ=d;a.hj=X(Fj,d);a.f5=b!=1?null:Bc(d);return;}G(U(B(759)));}
function A0V(){var b;b=Ff(16);BfC.Nk(34930,b);return b.b2(0);}
function AYB(a){var b;b=0;while(b<a.fQ){a.hj.data[b]=null;if(a.f5!==null)a.f5.data[b]=b;b=b+1|0;}}
function AIz(a){BfC.xy(33984);}
function ADH(a,b){return RF(a,b,0);}
function RF(a,b,c){var d,e;a:{d=b.sQ;a.la=0;switch(a.EB){case 0:e=a.kk+SC(a,d)|0;break a;case 1:e=a.kk+Ue(a,d)|0;break a;default:}return (-1);}if(!a.la)a.tO=a.tO+1|0;else{a.rO=a.rO+1|0;if(c)d.xX(e);else BfC.xy(33984+e|0);}d.TB(b.KL,b.OB);d.Wg(b.Pv,b.Ll);return e;}
function SC(a,b){var c,d;c=0;while(true){if(c>=a.fQ){a.hi=(a.hi+1|0)%a.fQ|0;a.hj.data[a.hi]=b;b.xX(a.kk+a.hi|0);return a.hi;}d=(a.hi+c|0)%a.fQ|0;if(a.hj.data[d]===b)break;c=c+1|0;}a.la=1;return d;}
function Ue(a,b){var c,d;c=0;a:{while(true){if(c>=a.fQ)break a;d=a.f5.data[c];if(a.hj.data[d]===b){a.la=1;break a;}if(a.hj.data[d]===null)break;c=c+1|0;}}if(c>=a.fQ)c=a.fQ-1|0;d=a.f5.data[c];while(c>0){a.f5.data[c]=a.f5.data[c-1|0];c=c+(-1)|0;}a.f5.data[0]=d;if(!a.la){a.hj.data[d]=b;b.xX(a.kk+d|0);}return d;}
var V0=D(Cd);
function Bc6(){var a=new V0();AQG(a);return a;}
function AQG(a){DP(a);}
function ARj(a,b,c,d,e){Lb(b,c,b.cT.dp);}
function VX(){V.call(this);this.ys=null;}
function A_l(){var a=new VX();A2P(a);return a;}
function A2P(a){BK(a);a.ys=BO();}
function AEo(a,b,c,d,e){DX(b,c,(a.ys.cg(b.cT.hf)).ho(d.dx));}
function F$(){var a=this;C.call(a);a.L=null;a.it=0;a.ex=0;a.zd=0;a.qQ=0;a.eb=0;a.m=0;a.CY=0;a.iV=null;a.fW=null;a.y=0;a.mt=0;a.li=0;a.lY=0;a.AZ=null;}
var BlS=null;var BlT=null;var BlU=0;function BbC(a,b){var c=new F$();A63(c,a,b);return c;}
function A63(a,b,c){J(a);a.ex=1;a.AZ=b;if((c&16)>0)b=A0r(b);else if((c&128)>0)b=AWK(b);a.L=BV(b.i()+2|0);Y(b.rg(),0,a.L,0,b.i());a.L.data[a.L.data.length-1|0]=0;a.L.data[a.L.data.length-2|0]=0;a.CY=a.L.data.length;a.it=c;Ec(a);Ec(a);}
function A0O(a){return a.eb;}
function AVZ(a,b){if(b>0&&b<3)a.ex=b;if(b==1)XO(a);}
function AVB(a,b){a.it=b;a.m=a.eb;a.fW=a.iV;a.y=a.li+1|0;a.lY=a.li;Ec(a);}
function AF3(a){return a.iV;}
function ANO(a){return a.iV===null?0:1;}
function AEy(a){return a.fW===null?0:1;}
function A49(a){Ec(a);return a.qQ;}
function AWq(a){var b;b=a.iV;Ec(a);return b;}
function AUr(a){return a.m;}
function AG7(a){return a.qQ;}
function AWK(b){return b;}
function XO(a){a.m=a.eb;a.fW=a.iV;a.y=a.lY;a.lY=a.li;Ec(a);}
function Ec(a){var b,c,d,e,f,g,h,$$je;a.qQ=a.eb;a.eb=a.m;a.iV=a.fW;a.li=a.lY;a.lY=a.y;while(true){b=0;a.m=a.y>=a.L.data.length?0:HX(a);a.fW=null;if(a.ex==4){if(a.m!=92)return;a.m=a.y>=a.L.data.length?0:a.L.data[BF(a)];switch(a.m){case 69:break;default:a.m=92;a.y=a.mt;return;}a.ex=a.zd;a.m=a.y>(a.L.data.length-2|0)?0:HX(a);}a:{if(a.m!=92){if(a.ex==1)switch(a.m){case 36:a.m=(-536870876);break a;case 40:if(a.L.data[a.y]!=63){a.m=(-2147483608);break a;}BF(a);c=a.L.data[a.y];d=0;while(true){b:{if(d){d=0;switch(c)
{case 33:break;case 61:a.m=(-134217688);BF(a);break b;default:G(BP(B(103),a.b(),a.y));}a.m=(-67108824);BF(a);}else{switch(c){case 33:break;case 60:BF(a);c=a.L.data[a.y];d=1;break b;case 61:a.m=(-536870872);BF(a);break b;case 62:a.m=(-33554392);BF(a);break b;default:a.m=ABJ(a);if(a.m<256){a.it=a.m;a.m=a.m<<16;a.m=(-1073741784)|a.m;break b;}a.m=a.m&255;a.it=a.m;a.m=a.m<<16;a.m=(-16777176)|a.m;break b;}a.m=(-268435416);BF(a);}}if(!d)break;}break a;case 41:a.m=(-536870871);break a;case 42:case 43:case 63:e=a.y>=
a.L.data.length?42:a.L.data[a.y];switch(e){case 43:a.m=a.m|(-2147483648);BF(a);break a;case 63:a.m=a.m|(-1073741824);BF(a);break a;default:}a.m=a.m|(-536870912);break a;case 46:a.m=(-536870866);break a;case 91:a.m=(-536870821);a.pz(2);break a;case 93:if(a.ex!=2)break a;a.m=(-536870819);break a;case 94:a.m=(-536870818);break a;case 123:a.fW=Ty(a,a.m);break a;case 124:a.m=(-536870788);break a;default:}else if(a.ex==2)switch(a.m){case 38:a.m=(-536870874);break a;case 45:a.m=(-536870867);break a;case 91:a.m=(-536870821);break a;case 93:a.m
=(-536870819);break a;case 94:a.m=(-536870818);break a;default:}}else{f=a.y>=(a.L.data.length-2|0)?(-1):HX(a);c:{a.m=f;switch(a.m){case -1:G(BP(B(103),a.b(),a.y));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.m
=RT(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.ex!=1)break a;a.m=(-2147483648)|a.m;break a;case 65:a.m=(-2147483583);break a;case 66:a.m=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:G(BP(B(103),a.b(),a.y));case 68:case 83:case 87:case 100:case 115:case 119:a.fW=KD(FT(a.L,
a.mt,1),0);a.m=0;break a;case 71:a.m=(-2147483577);break a;case 80:case 112:break c;case 81:a.zd=a.ex;a.ex=4;b=1;break a;case 90:a.m=(-2147483558);break a;case 97:a.m=7;break a;case 98:a.m=(-2147483550);break a;case 99:if(a.y>=(a.L.data.length-2|0))G(BP(B(103),a.b(),a.y));a.m=a.L.data[BF(a)]&31;break a;case 101:a.m=27;break a;case 102:a.m=12;break a;case 110:a.m=10;break a;case 114:a.m=13;break a;case 116:a.m=9;break a;case 117:a.m=Ms(a,4);break a;case 120:a.m=Ms(a,2);break a;case 122:a.m=(-2147483526);break a;default:}break a;}g
=Y1(a);h=0;if(a.m==80)h=1;try{a.fW=KD(g,h);}catch($$e){$$je=R($$e);if($$je instanceof LZ){G(BP(B(103),a.b(),a.y));}else{throw $$e;}}a.m=0;}}if(b)continue;else break;}}
function Y1(a){var b,c,d;b=F6(10);if(a.y<(a.L.data.length-2|0)){if(a.L.data[a.y]!=123)return (((I()).a(B(760))).a(FT(a.L,BF(a),1))).b();BF(a);c=0;a:{while(a.y<(a.L.data.length-2|0)){c=a.L.data[BF(a)];if(c==125)break a;b.U(c);}}if(c!=125)G(BP(B(103),a.b(),a.y));}if(!b.i())G(BP(B(103),a.b(),a.y));d=b.b();if(d.i()==1)return (((I()).a(B(760))).a(d)).b();b:{c:{if(d.i()>3){if(d.eR(B(760)))break c;if(d.eR(B(761)))break c;}break b;}d=d.ef(2);}return d;}
function Ty(a,b){var c,d,e,f,$$je;c=F6(4);d=(-1);e=2147483647;a:{while(true){if(a.y>=a.L.data.length)break a;b=a.L.data[BF(a)];if(b==125)break a;if(b==44&&d<0)try{d=Do(c.b(),10);c.K$(0,c.i());continue;}catch($$e){$$je=R($$e);if($$je instanceof Dp){break;}else{throw $$e;}}c.U(b&65535);}G(BP(B(103),a.b(),a.y));}if(b!=125)G(BP(B(103),a.b(),a.y));if(c.i()>0)b:{try{e=Do(c.b(),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=R($$e);if($$je instanceof Dp){}else{throw $$e;}}G(BP(B(103),a.b(),a.y));}else if(d<0)G(BP(B(103),
a.b(),a.y));if((d|e|(e-d|0))<0)G(BP(B(103),a.b(),a.y));f=a.y>=a.L.data.length?42:a.L.data[a.y];c:{switch(f){case 43:a.m=(-2147483525);BF(a);break c;case 63:a.m=(-1073741701);BF(a);break c;default:}a.m=(-536870789);}return BcE(d,e);}
function AHC(a){return a.AZ;}
function AZE(a){return !a.eb&&!a.m&&a.y==a.CY&&!a.kS()?1:0;}
function IO(b){return b<0?0:1;}
function ARF(a){return !a.bO()&&!a.kS()&&IO(a.eb)?1:0;}
function AVb(a){return a.eb<=56319&&a.eb>=55296?1:0;}
function A46(a){return a.eb<=57343&&a.eb>=56320?1:0;}
function KJ(b){return b<=56319&&b>=55296?1:0;}
function J1(b){return b<=57343&&b>=56320?1:0;}
function Ms(a,b){var c,d,e,f,$$je;c=F6(b);d=a.L.data.length-2|0;e=0;while(true){f=B5(e,b);if(f>=0)break;if(a.y>=d)break;c.U(a.L.data[BF(a)]);e=e+1|0;}if(!f)a:{try{f=Do(c.b(),16);}catch($$e){$$je=R($$e);if($$je instanceof Dp){break a;}else{throw $$e;}}return f;}G(BP(B(103),a.b(),a.y));}
function RT(a){var b,c,d,e,f;b=3;c=1;d=a.L.data.length-2|0;e=Ne(a.L.data[a.y],8);switch(e){case -1:break;default:if(e>3)b=2;BF(a);a:{while(true){if(c>=b)break a;if(a.y>=d)break a;f=Ne(a.L.data[a.y],8);if(f<0)break;e=(e*8|0)+f|0;BF(a);c=c+1|0;}}return e;}G(BP(B(103),a.b(),a.y));}
function ABJ(a){var b,c,d;b=1;c=a.it;a:while(true){if(a.y>=a.L.data.length)G(BP(B(103),a.b(),a.y));b:{c:{d=a.L.data[a.y];switch(d){case 41:BF(a);return c|256;case 45:if(!b)G(BP(B(103),a.b(),a.y));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BF(a);}BF(a);return c;}
function BF(a){a.mt=a.y;if(a.it&4)U_(a);else a.y=a.y+1|0;return a.mt;}
function U_(a){var b;b=a.L.data.length-2|0;a.y=a.y+1|0;a:while(true){if(a.y<b&&Su(a.L.data[a.y])){a.y=a.y+1|0;continue;}if(a.y>=b)break;if(a.L.data[a.y]!=35)break;a.y=a.y+1|0;while(true){if(a.y>=b)continue a;if(Qv(a,a.L.data[a.y]))continue a;a.y=a.y+1|0;}}return a.y;}
function Qv(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AAM(b){return BlS.Rm(b);}
function AFU(b){var c,d,e,f,g,h;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;if(!f)g=Mb([d,e]);else{h=4519+f|0;g=Mb([d,e,h]);}return g;}return null;}
function AKX(b){var c;c=BlT.b2(b);return c==BlU?0:1;}
function A3R(b){return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);}
function HX(a){var b,c,d;b=a.L.data[BF(a)];if(BX(b)){c=a.mt+1|0;if(c<a.L.data.length){d=a.L.data[c];if(BG(d)){BF(a);return Dd(b,d);}}}return b;}
function AEg(a){return a.li;}
var VY=D(V);
function A_B(){var a=new VY();AIN(a);return a;}
function AIN(a){BK(a);}
function AGx(a,b,c,d,e){DX(b,c,d.dx);}
var W7=D(T);
function Ba_(){var a=new W7();ARH(a);return a;}
function ARH(a){Bo(a);}
function ARa(a){return ((CO()).bG(65279,65279)).bG(65520,65533);}
var Ym=D(I0);
function A9E(){var a=new Ym();AQV(a);return a;}
function AQV(a){QU(a);}
function AUR(a){var b;b=(X4(a)).f0(1);b.bf=1;return b;}
var WJ=D(CK);
var XA=D();
function HK(){return 1;}
function Um(){var a=this;C.call(a);a.w=null;a.dF=null;a.q9=0;a.gw=null;a.s$=0;a.uw=null;a.p1=0;a.NW=null;a.K1=0;a.FP=null;a.Pp=0;a.rh=null;a.sP=0;a.ox=null;a.sU=0;a.t8=0;a.kw=null;a.MK=null;a.k6=null;a.lP=null;}
function Bbq(a){var b=new Um();A2a(b,a);return b;}
function A2a(a,b){J(a);a.dF=C3();a.q9=1;a.gw=C3();a.s$=1;a.uw=C3();a.p1=1;a.NW=C3();a.K1=1;a.FP=C3();a.Pp=1;a.rh=C3();a.sP=1;a.ox=C3();a.sU=1;a.t8=0;a.w=b;a.kw=(DR()).ET(40000);a.k6=(DR()).C$(12000);a.MK=(DR()).K2(12000);a.lP=(DR()).Az(240000);a.w.pixelStorei(37441,0);}
function TP(a,b){if(Ba(b)>a.kw.length)a.kw=(DR()).ET(Ba(b));}
function ABs(a,b){if(Ba(b)>a.k6.length)a.k6=(DR()).C$(Ba(b));}
function AAF(a,b){if(Ba(b)>a.lP.length)a.lP=(DR()).Az(Ba(b));}
function AY8(a,b){var c,d,e,f,g;TP(a,b);c=B4(b);d=0;while(c<BE(b)){e=a.kw;f=b.nW(c);e[d]=f;c=c+1|0;d=d+1|0;}e=a.kw;g=Ba(b);return e.subarray(0,g);}
function ASh(a,b){var c,d,e,f,g;ABs(a,b);c=B4(b);d=0;while(c<BE(b)){e=a.k6;f=b.Jy(c);e[d]=f;c=c+1|0;d=d+1|0;}e=a.k6;g=Ba(b);return e.subarray(0,g);}
function ALL(a,b){var c,d,e,f,g;AAF(a,b);c=B4(b);d=0;while(c<BE(b)){e=a.lP;f=b.yX(c);e[d]=f;c=c+1|0;d=d+1|0;}e=a.lP;g=Ba(b);return e.subarray(0,g);}
function W1(a,b,c){var d,e;d=a.ox.W(Bn(b));if(d===null){d=C3();a.ox.x(Bn(b),d);}e=a.sU;a.sU=e+1|0;d.x(Bn(e),c);return e;}
function DJ(a,b){return (a.ox.W(Bn(a.t8))).W(Bn(b));}
function TG(a,b){var c;c=a.s$;a.s$=c+1|0;a.gw.x(Bn(c),b);return c;}
function OP(a,b){var c;c=a.q9;a.q9=c+1|0;a.dF.x(Bn(c),b);return c;}
function SE(a,b){var c;c=a.p1;a.p1=c+1|0;a.uw.x(Bn(c),b);return c;}
function QD(a,b){var c;c=a.sP;a.sP=c+1|0;a.rh.x(Bn(c),b);return c;}
function A3N(a,b){a.w.activeTexture(b);}
function AJ0(a,b,c){var d,e;d=a.w;e=a.rh.W(Bn(c));d.bindTexture(b,e);}
function AI0(a,b,c){a.w.blendFunc(b,c);}
function AMz(a,b){a.w.clear(b);}
function A8p(a,b,c,d,e){a.w.clearColor(b,c,d,e);}
function ADR(a,b){a.w.cullFace(b);}
function A8a(a,b){a.w.depthFunc(b);}
function AYT(a,b){a.w.depthMask(!!b);}
function AVF(a,b,c){a.w.depthRange(b,c);}
function A1e(a,b){a.w.disable(b);}
function A88(a,b,c,d){a.w.drawArrays(b,c,d);}
function A3Y(a,b,c,d,e){var f,g;f=a.w;g=B4(e);f.drawElements(b,c,d,g);}
function ASo(a,b){a.w.enable(b);}
function AYX(a){var b;b=a.w.createTexture();return QD(a,b);}
function AXF(a,b,c){var d;a:{if(b==34016)break a;if(b==3413)break a;if(b==32970)break a;if(b==32968)break a;if(b==34877)break a;if(b==32777)break a;if(b==32971)break a;if(b==32969)break a;if(b==3412)break a;if(b==2885)break a;if(b==3414)break a;if(b==2932)break a;if(b==2886)break a;if(b==33170)break a;if(b==3411)break a;if(b==35739)break a;if(b==35738)break a;if(b==35661)break a;if(b==34076)break a;if(b==36349)break a;if(b==34024)break a;if(b==34930)break a;if(b==3379)break a;if(b==36348)break a;if(b==34921)break a;if
(b==35660)break a;if(b==36347)break a;if(b==34466)break a;if(b==3333)break a;if(b==3410)break a;if(b==32936)break a;if(b==32937)break a;if(b==34817)break a;if(b==34816)break a;if(b==34818)break a;if(b==34819)break a;if(b==36003)break a;if(b==36004)break a;if(b==36005)break a;if(b==3415)break a;if(b==2961)break a;if(b==2964)break a;if(b==2962)break a;if(b==2965)break a;if(b==2966)break a;if(b==2967)break a;if(b==2963)break a;if(b==2968)break a;if(b==3408)break a;if(b==3317)break a;G(U(B(762)));}d=a.w.getParameter(b);c.sZ(0,
d);}
function ASL(a,b,c){a.w.pixelStorei(b,c);}
function AIo(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q;if(j===null){k=a.w;l=null;k.texImage2D(b,c,d,e,f,g,h,i,l);}else if(BE(j)>4){m=!(j instanceof DS)?a.Ht(j):a.uc(j);a.w.texImage2D(b,c,d,e,f,g,h,i,m);}else{n=j.NS(0);Fy();o=BgQ.W(Bn(n));if(o.Pk()){p=a.w;q=o.M8();p.texImage2D(b,c,d,h,i,q);}else if(!o.I0()){p=a.w;q=o.sz();p.texImage2D(b,c,d,h,i,q);}else{p=a.w;q=o.IG();p.texImage2D(b,c,d,h,i,q);}}}
function A4y(a,b,c,d){a.w.texParameterf(b,c,d);}
function AWc(a,b,c,d,e){a.w.viewport(b,c,d,e);}
function AJ_(a,b,c){var d,e;d=a.dF.W(Bn(b));e=a.gw.W(Bn(c));a.w.attachShader(d,e);}
function AM_(a,b,c){var d,e;d=a.w;e=a.uw.W(Bn(c));d.bindBuffer(b,e);}
function AX4(a,b,c,d,e){a.w.blendFuncSeparate(b,c,d,e);}
function AXo(a,b,c,d,e){var f,g,h,i;if(d instanceof DS){f=d;g=a.uc(f);a.w.bufferData(b,g,e);}else{if(!(d instanceof Gv))G(U(B(763)));h=a.w;i=a.J6(d);h.bufferData(b,i,e);}}
function ALz(a,b,c,d,e){var f,g;if(e instanceof DS){f=a.w;g=a.uc(e);f.bufferSubData(b,c,g);}}
function AHi(a,b){var c;c=a.gw.W(Bn(b));a.w.compileShader(c);}
function AFF(a){var b;b=a.w.createProgram();return OP(a,b);}
function AZz(a,b){var c;c=a.w.createShader(b);return TG(a,c);}
function AOU(a,b){a.w.disableVertexAttribArray(b);}
function A4L(a,b,c,d,e){a.w.drawElements(b,c,d,e);}
function AP_(a,b){a.w.enableVertexAttribArray(b);}
function AXJ(a){var b;b=a.w.createBuffer();return SE(a,b);}
function A3X(a,b){a.w.generateMipmap(b);}
function AME(a,b,c,d,e){var f,g,h;f=a.w;g=a.dF.W(Bn(b));h=f.getActiveAttrib(g,c);d.gi(h.size);e.gi(h.type);return $rt_str(h.name);}
function ACO(a,b,c,d,e){var f,g,h;f=a.w;g=a.dF.W(Bn(b));h=f.getActiveUniform(g,c);d.gi(h.size);e.gi(h.type);return $rt_str(h.name);}
function AHD(a,b,c){var d;d=a.dF.W(Bn(b));return a.w.getAttribLocation(d,$rt_ustr(c));}
function AKv(a,b,c){if(b!=2931&&b!=2849&&b!=32824&&b!=10752&&b!=32938)G(U(B(764)));c.JM(0,a.w.getParameter(b));}
function AIv(a,b,c,d){var e,f,g,h,i;if(c!=35712&&c!=35714&&c!=35715){e=a.w;f=a.dF.W(Bn(b));d.gi(e.getProgramParameter(f,c));}else{g=a.w;h=a.dF.W(Bn(b));i=g.getProgramParameter(h,c)?1:0;d.gi(!i?0:1);}}
function AW_(a,b){var c,d;c=a.w;d=a.dF.W(Bn(b));return $rt_str(c.getProgramInfoLog(d));}
function A3V(a,b,c,d){var e,f,g,h;if(c!=35713&&c!=35712){e=a.w;f=a.gw.W(Bn(b));g=e.getShaderParameter(f,c);d.gi(g);}else{h=a.w;e=a.gw.W(Bn(b));g=h.getShaderParameter(e,c)?1:0;d.gi(!g?0:1);}}
function A8M(a,b){var c,d;c=a.w;d=a.gw.W(Bn(b));return $rt_str(c.getShaderInfoLog(d));}
function AFO(a,b,c){var d,e,f;d=a.w;e=a.dF.W(Bn(b));f=d.getUniformLocation(e,$rt_ustr(c));if(f!==null)return W1(a,b,f);return (-1);}
function ASU(a,b){var c,d;c=a.w;d=a.dF.W(Bn(b));c.linkProgram(d);}
function AT_(a,b,c){var d,e;d=a.w;e=a.gw.W(Bn(b));d.shaderSource(e,$rt_ustr(c));}
function AMW(a,b,c,d){var e,f;e=a.w;f=d;e.texParameterf(b,c,f);}
function AUq(a,b,c){var d;d=DJ(a,b);a.w.uniform1f(d,c);}
function ANq(a,b,c){var d;d=DJ(a,b);a.w.uniform1i(d,c);}
function AKJ(a,b,c,d){var e;e=DJ(a,b);a.w.uniform2f(e,c,d);}
function AYi(a,b,c,d,e){var f;f=DJ(a,b);a.w.uniform3f(f,c,d,e);}
function AWo(a,b,c,d,e){var f;f=DJ(a,b);a.w.uniform3fv(f,MS(d));}
function AC_(a,b,c,d,e,f){var g;g=DJ(a,b);a.w.uniform4f(g,c,d,e,f);}
function APp(a,b,c,d,e,f){var g;g=DJ(a,b);a.w.uniformMatrix3fv(g,!!d,MS(e));}
function AY5(a,b,c,d,e,f){var g;g=DJ(a,b);a.w.uniformMatrix4fv(g,!!d,MS(e));}
function AZ2(a,b){var c,d;a.t8=b;c=a.w;d=a.dF.W(Bn(b));c.useProgram(d);}
function A7T(a,b,c,d,e,f,g){a.w.vertexAttribPointer(b,c,d,!!e,f,g);}
var W8=D(Fm);
function BaJ(a,b,c,d,e,f){var g=new W8();ADd(g,a,b,c,d,e,f);return g;}
function ADd(a,b,c,d,e,f,g){K6(a,b,c,d,e,f,g);}
function A2X(a,b){var c,d,e,f;c=a.fy.A.data;d=a.ft;e=b*2|0;f=(c[d+e|0]&255)<<8|a.fy.A.data[(a.ft+e|0)+1|0]&255;return f<<16>>16;}
function AWE(a,b,c){var d,e,f;d=a.fy.A.data;e=a.ft;f=b*2|0;d[e+f|0]=c>>8<<24>>24;a.fy.A.data[(a.ft+f|0)+1|0]=c<<24>>24;}
$rt_packages([-1,"com",0,"badlogic",1,"gdx",2,"utils",3,"reflect",2,"graphics",5,"g2d",-1,"java",7,"util",8,"regex",7,"nio",10,"charset",7,"io",7,"lang"]);
$rt_metadata([C,"Object",13,0,[],0,3,0,0,["Qu",BdU(EI),"SJ",BdU(Cf),"by",BdU(Mm),"z",BdV(ALq),"b",BdU(Po),"Tn",BdU(Id),"ge",BdU(AKq)],T,0,C,[],1,0,0,0,["d",BdU(Bo),"GR",BdV(A47)],Rh,0,T,[],0,0,0,0,["d",BdU(A5A),"T",BdU(AWS)],PU,0,T,[],0,0,0,0,["d",BdU(A7Y),"T",BdU(ALw)],IM,0,C,[],3,3,0,0,0,Vg,0,C,[],0,3,0,0,["PV",BdW(APN),"tp",BdU(AGH),"dN",BdV(A74),"Kv",BdU(AHX),"ec",BdV(A5S),"eg",BdV(AYt),"dQ",BdV(A9A)],EY,0,C,[],3,3,0,0,0,Hw,0,C,[EY],1,3,0,0,["d",BdU(PA),"jc",BdU(AZr),"Of",BdU(AVv)],VD,0,C,[],4,3,0,0,0,B1,
0,C,[],3,3,0,0,0,DZ,0,C,[B1],1,3,0,0,["d",BdU(ABo)],B6,0,C,[],3,3,0,0,0,D0,0,DZ,[B6],0,3,0,CY,["bk",BdV(Hd),"lf",BdU(AUo),"b",BdU(AQ8),"by",BdU(ATa),"z",BdV(A8x)],Ew,0,C,[],0,0,0,A$d,0,Bt,0,C,[],1,0,0,Wd,["d",BdU(Cl),"wR",BdV(IX),"cB",BdX(FU),"cF",BdY(F2),"Af",BdV(AWr),"iX",BdU(AVz),"Fv",BdU(ALR),"b",BdU(AOu),"IM",BdU(AO_),"Q",BdV(Ll),"b_",BdV(A62),"hW",BdU(A8g),"ea",BdU(Oh)],BC,0,Bt,[],0,0,0,0,["d",BdU(CM),"iI",BdW(RW),"e",BdX(AH1),"Q",BdV(ANg),"u",BdU(AJN),"b_",BdV(A0_),"bb",BdV(AN$),"ea",BdU(AE6)],Fu,0,BC,
[],0,0,0,0,["V_",BdW(PH),"e",BdX(ACJ),"cB",BdX(AK8),"cF",BdY(A5t),"b_",BdV(A02),"hW",BdU(A3J),"ea",BdU(ARG)],HD,0,C,[],1,3,0,0,["Wq",BdY(ABl),"uh",BdX(XI),"R4",BdV(KG),"uZ",BdV(ART),"Rs",BdV(Ls),"qB",BdV(AZN),"S1",BdX(In),"Fu",BdV(W6),"RY",BdV(Jv),"KG",BdV(A1L),"VN",BdU(On),"uA",BdU(AM7)],Dj,0,HD,[],1,3,0,0,["uh",BdX(Gu),"NM",BdW(ADV)],WI,0,Dj,[],0,3,0,0,["IA",BdX(A31),"mI",function(b,c,d,e,f,g,h){return A4$(this,b,c,d,e,f,g,h);}],Cn,0,C,[],3,3,0,0,0,BR,0,C,[Cn],1,3,0,0,["ba",BdV(CV),"et",BdW(AUG),"yg",BdV(AIT),
"z",BdV(AB9),"by",BdU(A3h),"dv",BdU(AVc),"io",BdU(AJu),"b",BdU(ATY)],Hi,0,BR,[],0,3,0,0,["ba",BdV(Q6),"Jf",BdV(AQ1)],AA1,0,Hi,[],0,3,0,0,["Sr",BdY(AMX),"Ih",BdU(AIZ)],LU,0,BR,[],0,3,0,HR,["uX",BdV(ZR),"Nl",BdV(APW),"JF",BdV(ARA)],Ev,0,C,[EY],0,3,0,Lx,["ba",BdV(VF),"U3",BdW(Nl)],IY,0,T,[],0,0,0,0,["d",BdU(PE),"T",BdU(Px)],Bv,0,C,[],0,3,0,A_A,0,OD,0,Fu,[],0,0,0,0,["QE",BdV(AOn),"cB",BdX(AHj),"cF",BdY(A9k),"hW",BdU(AFk)],C8,0,C,[],0,3,0,0,["n0",BdU(AX$),"mD",BdU(AOI),"F1",BdU(AHU),"E8",BdU(AZq),"yz",BdV(AR9)],B2,
0,C8,[],0,3,0,0,["d",BdU(E6),"i6",BdW(JD),"ba",BdV(LV)],Bm,"RuntimeException",13,B2,[],0,3,0,0,["d",BdU(Ct),"i6",BdW(Pt),"ba",BdV(EB)],TQ,"BufferOverflowException",11,Bm,[],0,3,0,0,["d",BdU(AMp)],Lm,0,C,[],3,3,0,0,0,YQ,0,C,[Lm],0,3,0,0,["UA",BdV(AB2),"NE",BdU(A64),"Hc",BdU(AT$),"J3",BdU(AIm),"jS",BdU(AN7),"nu",BdU(AUW),"Lm",BdY(AQa),"AF",BdW(ALT),"m0",BdW(AHO),"Gb",BdW(AKK),"s9",BdW(AUX),"KP",BdX(AKN),"Ja",BdY(AWO)],B7,0,C,[],3,3,0,0,0,UY,0,C,[B7],1,3,0,0,0,GZ,0,T,[],0,0,0,0,["d",BdU(P4),"T",BdU(Rj)],AAB,0,
GZ,[],0,0,0,0,["d",BdU(AZA),"T",BdU(AL2)],NZ,0,C,[],3,3,0,0,0,Vn,0,C,[EY,NZ],0,0,0,0,["Sh",BdV(ACN),"nF",BdV(ARe),"e3",BdU(A7l),"OH",BdU(AQC)],Bw,0,C,[B6,B1],1,3,0,0,["dS",BdW(Cs),"P2",BdU(BD),"b",BdU(AY9)],Df,0,Bw,[],12,3,0,UK,0,BI,0,Bt,[],1,0,0,0,["wR",BdV(U3),"d",BdU(CZ),"e",BdX(A8W),"cf",BdU(A6q),"bb",BdV(AJB)],OI,0,BI,[],0,0,0,0,["ED",BdV(AZg),"bI",BdW(A5z),"u",BdU(A6P)],Fk,0,C,[],3,3,0,0,0,I3,0,C,[Fk],0,3,0,0,["d",BdU(ABP),"lk",BdV(AUe),"mW",BdW(AQg)],Ic,0,I3,[],0,3,0,0,["R6",BdV(UM),"Ul",function(b,c,
d,e,f){AAX(this,b,c,d,e,f);},"TF",function(b,c,d,e,f,g){Ov(this,b,c,d,e,f,g);},"id",BdY(Oi),"rF",BdY(ANj),"i2",BdX(U6),"PC",BdX(ACv),"hE",BdY(Zw),"M4",BdY(ACj)],FI,"CharSequence",13,C,[],3,3,0,0,0,D3,0,C8,[],0,3,0,0,["i6",BdW(Sf),"ba",BdV(WZ),"Eq",BdV(Zm)]]);
$rt_metadata([FM,0,D3,[],0,3,0,0,["ba",BdV(Op)],Q9,0,C,[],0,3,0,0,["d",BdU(AGh),"mf",BdW(W4),"eX",BdV(AQp),"IQ",BdV(AWM),"Mb",BdV(AQB)],Eh,"IndexOutOfBoundsException",13,Bm,[],0,3,0,0,["d",BdU(Pq),"ba",BdV(ME)],ABv,"StringIndexOutOfBoundsException",13,Eh,[],0,3,0,0,["d",BdU(APM)],LZ,"MissingResourceException",8,Bm,[],0,3,0,0,["VQ",BdX(AX5)],Kk,0,C,[],0,3,0,Mx,0,Jh,0,C,[],1,3,0,0,["uh",BdX(Uf),"U2",BdV(NI),"uZ",BdV(A6$),"Vy",BdV(KT),"qB",BdV(AZl),"T1",BdX(II),"Tb",BdV(KA),"Wu",BdU(ABc),"Ph",BdV(V7),"GF",BdV(AL3),
"uA",BdU(AXz)],Km,0,C,[],4,3,0,BaD,0,FG,0,BC,[],0,0,0,0,["fL",BdW(J0),"e",BdX(ADh),"Q",BdV(A4A),"j3",BdV(AFA),"u",BdU(ATU),"bb",BdV(AOr)],XY,0,FG,[],0,0,0,0,["fL",BdW(AHu),"e",BdX(AK3),"u",BdU(AVp)],Ly,0,C,[B7],3,3,0,0,0,IP,0,C,[],4,3,0,Es,0,EH,0,Bw,[],12,3,0,Oy,0,X_,0,T,[],0,0,0,0,["vZ",BdW(AFm),"JW",BdX(ARt),"T",BdU(AYh)],Lz,0,C,[],3,3,0,0,0,F9,0,C,[Lz],3,3,0,0,0,Nb,0,C,[],3,3,0,0,0,DO,0,C,[F9,Nb],1,3,0,0,["d",BdU(GT),"mY",BdX(ACS)],K1,0,DO,[],0,3,0,ARO,["vD",BdV(A3c)],C$,0,Bt,[],1,0,0,0,["gt",BdX(FP),"pH",
BdU(A87),"b_",BdV(AOM),"bb",BdV(A7g),"ea",BdU(ALB)],Q3,0,C$,[],0,0,0,0,["gt",BdX(ADt),"e",BdX(A83),"cB",BdX(APy),"u",BdU(A4g)],Cv,0,Bt,[],0,0,0,Jn,["bk",BdV(Eq),"e",BdX(ADP),"j6",BdU(A1O),"u",BdU(AIC),"bb",BdV(AEl)],J_,0,Cv,[],0,0,0,0,["bk",BdV(AA4),"e",BdX(AEx),"u",BdU(A6T)],L_,0,C,[Cn],3,3,0,0,0,Om,0,BC,[],0,0,0,0,["oX",BdV(AQd),"Q",BdV(AX8),"e",BdX(AIW),"u",BdU(A3U)],CE,0,C$,[],0,0,0,0,["gt",BdX(E_),"e",BdX(ATz),"u",BdU(AZL)],Q2,0,CE,[],0,0,0,0,["gt",BdX(AVP),"e",BdX(ARW)],J7,0,C,[],3,3,0,0,0,Zq,0,Dj,[],
0,3,0,0,["j9",BdV(ARC),"mI",function(b,c,d,e,f,g,h){return AIa(this,b,c,d,e,f,g,h);}],C9,0,C,[],0,3,0,0,0,BH,0,C,[B6],1,3,0,Nc,["PL",BdV(Gi),"zh",BdV(AUK),"z",BdV(ASR),"b",BdU(AQc),"by",BdU(G$)],Di,0,B2,[],0,3,0,0,["d",BdU(Jc)],Ig,0,C,[],3,3,0,0,0,HT,0,C,[Ig],0,3,0,0,["d",BdU(Qf),"zU",BdV(ATH)],Kv,0,C,[],3,3,0,0,0,Fv,0,HT,[Kv],0,3,0,0,["Wv",function(b,c,d,e,f,g){ZC(this,b,c,d,e,f,g);},"Ba",BdU(ASI),"r7",BdU(ANo),"ve",BdU(AIh),"b",BdU(ADK),"B6",BdV(A5Z)],Zg,"CoderMalfunctionError",11,D3,[],0,3,0,0,["Eq",BdV(ALJ)],W2,
0,CE,[],0,0,0,0,["gt",BdX(A0l),"e",BdX(A2i)],Bx,0,C,[],0,3,0,JQ,0,EO,0,C,[B1,FI],0,0,0,0,["d",BdU(JO),"bk",BdV(JB),"S6",BdV(X9),"UV",BdV(KY),"kY",BdW(Np),"Ww",BdV(O$),"Ax",BdW(AUb),"KQ",BdX(AZO),"Qy",BdV(ABf),"Ds",BdW(Rd),"L2",BdX(ALx),"Ur",BdV(S4),"Cr",BdW(Y5),"RK",BdV(MK),"uS",BdW(N0),"wu",BdW(Qa),"Ri",BdV(SB),"w9",BdW(Oa),"gM",BdV(L9),"b",BdU(M3),"i",BdU(MB),"f",BdV(Ox),"Eu",BdX(Pd),"vg",BdY(YS),"V4",BdV(ABO),"tC",BdX(NU),"um",BdY(L0),"UR",BdV(M9),"d8",BdW(Z7),"ph",BdY(XC),"ue",BdV(AAK),"Ua",BdV(AAY),"Uc",
BdW(ABe),"cd",BdW(Wn)],Fr,0,C,[],3,3,0,0,0,O_,0,EO,[Fr],0,3,0,0,["d",BdU(AZp),"H1",BdV(AFZ),"Io",BdV(APz),"Ks",BdX(ARV),"Oh",BdV(AGF),"Mt",BdX(AUm),"A9",BdV(A6Z),"HU",BdY(A1H),"Nu",BdY(A1X),"Px",BdW(A7D),"G4",BdW(A5m),"um",BdY(AHe),"tC",BdX(AVd),"vg",BdY(AYH),"Eu",BdX(A4Y),"f",BdV(ATb),"i",BdU(A81),"b",BdU(AVt),"gM",BdV(AVI),"uS",BdW(A6l),"kY",BdW(ATo)],EF,0,C,[],3,3,0,0,0,CQ,0,C,[],1,3,0,0,["bk",BdV(FD),"U0",BdU(CS),"Rr",BdU(B4),"cX",BdV(Gy),"RU",BdU(BE),"ck",BdV(IK),"cZ",BdU(FR),"c$",BdU(GQ),"Uj",BdU(Ba),
"T2",BdU(B$)],NA,0,C,[],4,3,0,AG8,0,E4,0,C,[],1,0,0,0,["d",BdU(LS)],Q,0,E4,[],1,0,0,JX,["d",BdU(Be),"bL",BdU(AVa),"ch",BdU(AUc),"FC",BdU(A1M),"CP",BdU(AZi),"l6",BdU(A6g),"M1",BdU(ADI),"mC",BdU(AVk),"gV",BdU(A8e),"f0",BdV(AQl),"jy",BdU(AHc)],YD,0,Q,[],0,0,0,0,["Vr",BdV(A0j),"p",BdV(ARJ)],Gk,0,C,[],4,0,0,AOA,["d",BdU(Te),"US",BdV(ABb)],M5,0,C,[],3,3,0,0,0]);
$rt_metadata([JH,0,C,[B1],0,3,0,Ut,["LL",BdV(ACD),"F7",BdV(A8R),"d",BdU(PV),"Dh",BdW(A3u),"wr",BdU(AY$),"Kk",BdU(APo),"MM",BdX(ASA)],KI,0,C,[],3,3,0,0,0,AAs,0,C,[KI],0,3,0,0,["R2",BdV(ARb),"Ni",BdW(AWt),"nY",BdV(A7H),"Pi",BdV(AU6)],EJ,0,Bw,[],12,0,0,Z5,0,IB,0,T,[],0,0,0,0,["d",BdU(Ta),"T",BdU(YF)],Rp,0,T,[],0,0,0,0,["d",BdU(AE0),"T",BdU(AYJ)],Ei,0,BC,[],0,0,0,0,["xU",BdW(JL),"Q",BdV(A8k),"e",BdX(AM0),"u",BdU(A3a),"u9",BdX(AJo),"b_",BdV(AJ8),"bb",BdV(A4E)],Zf,0,Ei,[],0,0,0,0,["xU",BdW(AVC)],Jf,0,C,[],1,3,0,0,
["d",BdU(Wr),"Ib",BdV(AJV),"V9",BdU(NE),"jc",BdU(AMy),"nF",BdV(ANR),"QM",BdV(Yp)],Yv,0,C,[B7],1,3,0,0,0,C7,0,Jh,[],1,3,0,0,["uh",BdX(Gr),"FB",BdW(AQm)],Xi,0,C7,[],0,3,0,0,["j9",BdV(AFt),"mZ",function(b,c,d,e,f,g,h){return ASw(this,b,c,d,e,f,g,h);}],Xx,0,C,[],4,3,0,0,0,F7,0,C,[Cn],0,3,0,Fy,["UM",BdV(OG),"TP",BdX(Ts),"DA",BdV(ACC),"fZ",BdU(AFV),"kr",BdU(AJx),"lO",BdU(AL8),"k9",BdU(AO1),"bp",BdU(AH9),"bm",BdU(ALu),"kt",BdU(A5k),"io",BdU(AV0),"sz",BdU(ACT),"Pk",BdU(AEk),"M8",BdU(APK),"I0",BdU(A3j),"IG",BdU(A8u),
"yR",function(b,c,d,e,f,g,h){AXm(this,b,c,d,e,f,g,h);},"KB",function(b,c,d,e,f,g,h,i,j){AN0(this,b,c,d,e,f,g,h,i,j);}],Hr,0,BH,[],0,3,0,AAD,0,ABF,0,Cv,[],0,0,0,0,["d",BdU(ASP),"e",BdX(AWn),"u",BdU(A0a)],Kw,0,C,[],3,3,0,0,0,Jl,0,BC,[],0,0,0,0,["iI",BdW(Va),"e",BdX(AM2),"u",BdU(AK0),"bb",BdV(A40)],Dm,0,Jl,[],0,0,0,0,["iI",BdW(F3),"e",BdX(AW5),"Q",BdV(A4B),"u",BdU(AC2)],UP,0,Dm,[],0,0,0,0,["iI",BdW(AHT),"e",BdX(ANd),"bb",BdV(AQt),"u",BdU(A8f)],Gm,0,C,[],3,3,0,0,0,OY,0,C,[Gm],0,3,0,0,["d",BdU(A3K)],H2,0,C,[L_],
1,3,0,0,["d",BdU(R0),"I$",BdV(A0e)],OX,0,H2,[],0,3,0,0,["RM",BdV(V8),"d",BdU(A8h),"FE",BdV(AQQ)],AAx,0,Dm,[],0,0,0,0,["iI",BdW(AG$),"e",BdX(AEc),"bb",BdV(A6w),"u",BdU(AHQ)],KS,0,C,[],3,3,0,0,0,Ha,0,C,[KS],0,3,0,0,["Wz",BdY(AWk),"xD",BdU(AS7),"zx",BdU(AWl),"Pe",BdU(AK6),"EQ",BdU(AZ6),"bp",BdU(AKb),"bm",BdU(AWB),"fZ",BdU(AGZ),"Pz",BdU(AT4),"qq",BdU(AGb),"Nd",BdU(A2l),"GC",BdV(AWT)],Nv,0,C,[],3,3,0,0,0,ABq,0,C,[Nv,B7],0,3,0,0,["P3",BdW(AIn),"M$",BdV(AG_),"Em",BdU(A01),"iS",BdU(AOB),"Mf",BdU(AKL),"OU",BdU(ACA),
"t2",BdU(AE5),"Am",BdU(A3T)],Hm,"UnsupportedOperationException",13,Bm,[],0,3,0,0,["d",BdU(Ru)],ABK,"ReadOnlyBufferException",10,Hm,[],0,3,0,0,["d",BdU(AZ9)],Nu,0,BH,[],0,3,0,GA,0,Y2,0,C,[],4,3,0,0,0,DL,0,C,[],1,3,0,0,["d",BdU(HH)],N4,0,DL,[],0,3,0,0,["d",BdU(AI5),"KA",BdV(AI_),"Hn",BdX(AMA),"HC",function(b,c,d,e,f,g,h){return AD$(this,b,c,d,e,f,g,h);},"Fw",BdV(AVN)],Zn,0,C,[],0,3,0,0,["d",BdU(AEC)],TT,0,C,[Fk],0,3,0,0,["Qp",BdV(ADU),"ly",BdV(AJj),"or",BdV(ASv),"lk",BdV(ASM),"id",BdY(ADq),"hE",BdY(AOY),"i2",
BdX(AHm),"mW",BdW(AQs),"ou",BdW(A17)],FF,0,FM,[],0,3,0,0,["ba",BdV(Kl)],Zd,0,FF,[],0,3,0,0,["ba",BdV(AER)],OU,0,T,[],0,0,0,0,["d",BdU(AES),"T",BdU(AGk)],IC,0,C,[B7],3,3,0,0,0,Cx,0,C,[],3,3,0,0,0,Io,0,C,[Cx],3,3,0,0,0,IZ,0,C,[Io],1,3,0,0,["d",BdU(TF),"HZ",BdV(AXI)],E5,0,C,[F9],1,3,0,0,["d",BdU(Kc),"rd",BdX(A6U),"fG",BdU(AZk)],AAh,0,E5,[],0,3,0,0,["VE",BdX(ABU),"SE",BdV(AEh),"AS",BdU(AWd),"rd",BdX(A8q),"fG",BdU(AIE)],SO,0,C,[],4,3,0,0,0,Iw,0,CQ,[B6],1,3,0,0,["f6",BdX(Zi),"Q7",BdU(SR),"cZ",BdU(A2v)],Jp,0,C,[],
1,3,0,0,["d",BdU(SF),"Ot",BdV(A6I),"MN",BdU(A6r),"F2",BdV(AHS),"Jz",BdW(AF4),"G5",BdY(AVE)],CC,0,C$,[],0,0,0,0,["ld",BdX(E0),"e",BdX(ATg),"u",BdU(AV8)]]);
$rt_metadata([Eb,0,CC,[],0,0,0,0,["ld",BdX(MZ),"e",BdX(A1A),"Q",BdV(ASC)],Tf,0,Eb,[],0,0,0,0,["ld",BdX(A8s),"e",BdX(ALQ)],Hj,0,C,[],3,3,0,0,0,V,0,C,[Hj],1,3,0,0,["d",BdU(BK),"xC",BdW(AHh)],AAr,0,C,[],0,0,0,0,["d",BdU(AKB),"FZ",BdY(ATi)],WO,0,C,[],0,3,0,0,0,MT,0,C,[],3,3,0,0,0,G1,0,Bm,[],0,3,0,0,0,Ix,0,BR,[],0,3,0,0,["ba",BdV(ZP)],GU,0,Ix,[],0,3,0,0,["ba",BdV(Qm),"G6",BdV(ARn),"H4",BdV(AYC),"HP",BdV(AXe),"Gz",BdV(AVT)],Gp,0,C,[],1,3,0,0,["d",BdU(T1)],Wt,0,C,[],4,0,0,0,0,Oq,0,Q,[],0,0,0,0,["Qo",BdV(A43),"p",BdV(AFP)],CX,
0,C,[B6],1,3,0,0,["QY",BdW(Gt),"xK",BdU(Y_),"Ph",BdV(YM),"Fu",BdV(TY)],Re,0,CX,[],0,3,0,0,["Vn",BdX(AD5),"lC",BdU(AJf),"mi",BdU(ACU)],Ci,0,C,[],0,3,0,0,["d",BdU(D9),"fr",BdV(AO4),"da",BdV(AUw)],O7,0,Ci,[],0,0,0,0,["R5",BdW(AXc),"fr",BdV(A2s),"da",BdV(AXv),"Ir",BdW(ALN),"dk",BdW(AEw)],Pm,0,C,[],4,3,0,0,0,G5,0,C,[],3,3,0,0,0,RD,0,C,[G5],0,3,0,0,["WE",BdY(AYs),"e3",BdU(AJc)],Le,0,C,[B7],3,3,0,0,0,V_,0,C,[Le],0,0,0,0,["PK",BdV(AMi),"Os",BdV(AYD),"VT",BdV(A2n)],O8,0,Ci,[],0,0,0,0,["QG",BdY(AKt),"fr",BdV(A2d),"da",
BdV(A1h),"dk",BdW(A6s)],JN,0,C,[],32,0,0,Bbz,0,AAE,0,C,[],4,3,0,0,0,TN,0,C,[],0,3,0,0,["d",BdU(A4U),"HR",BdV(AU$),"OX",BdX(AUj),"Mh",BdU(A8b),"Es",function(b,c,d,e,f,g){return A53(this,b,c,d,e,f,g);},"O6",BdW(A2g),"Lt",BdY(AEP)],HU,0,IY,[],0,0,0,0,["d",BdU(QY),"T",BdU(Qo)],Jq,0,HU,[],0,0,0,0,["d",BdU(St),"T",BdU(UD)],Yg,0,Jq,[],0,0,0,0,["d",BdU(APw),"T",BdU(ALE)],ZW,0,T,[],0,0,0,0,["d",BdU(A2M),"T",BdU(AQi)],X3,0,Dm,[],0,0,0,0,["iI",BdW(APG),"e",BdX(AE2),"bb",BdV(A9t),"u",BdU(AMK)],Yj,0,BI,[],0,0,0,0,["ED",
BdV(AWX),"bI",BdW(AFW),"cB",BdX(AUZ),"cF",BdY(AYF),"u",BdU(AM9),"b_",BdV(AIy),"M6",BdX(A7b),"KO",BdX(A6m),"uT",BdW(AIY)],Q8,0,CX,[],0,3,0,0,["d",BdU(AHk),"lC",BdU(AVU),"mi",BdU(AS2)],MN,0,C,[Fr,FI],0,3,0,C2,["bk",BdV(WW),"UH",BdU(Ny),"Qg",BdV(CF),"SB",BdV(Ir),"b",BdU(AC0),"lq",BdV(AN4),"zO",BdV(AOF),"Gh",BdW(AFz),"OL",BdX(ADc),"x3",BdV(A1I),"Ch",BdV(AYU)],Dz,0,C,[],0,3,0,HO,0,Tw,"ArrayStoreException",13,Bm,[],0,3,0,0,["d",BdU(AX9)],L$,"ReflectionException",4,B2,[],0,3,0,0,["i6",BdW(A5a)],FJ,0,CE,[],0,0,0,0,
["gt",BdX(LW),"e",BdX(A52),"Q",BdV(A7z)],H4,0,C,[],3,3,0,0,0,Nm,0,C,[H4],0,0,0,0,["Q3",function(b,c,d,e,f,g){RI(this,b,c,d,e,f,g);},"bx",BdW(AQJ),"ep",BdV(A1c),"pC",BdU(AS3),"o1",BdV(AKh),"es",BdW(AWF),"uG",BdW(AU0),"ji",BdV(A4o),"np",BdV(AOa),"Bu",BdV(ADB),"NC",BdV(A0n),"wb",BdU(AN5),"lu",BdV(AFf),"LG",BdU(ALd),"yT",BdV(ATu),"fE",BdW(AV7),"KZ",BdU(A7I),"KI",BdU(A7K),"to",BdX(A8w),"fM",BdU(AFQ),"Gx",BdV(A5n),"dH",BdU(AVy),"J",BdU(A1B),"pz",BdV(AXl),"B4",BdU(AHz),"js",BdU(AZn),"lz",BdU(ATs),"My",BdU(AUh)],Qt,
0,C,[],0,3,0,0,["d",BdU(A14)],Pp,0,BI,[],0,0,0,0,["oX",BdV(AMC),"bI",BdW(A0v),"u",BdU(AVn)],Jk,0,C,[],0,3,0,0,["d",BdU(A54),"Jv",BdV(A0P),"F3",BdW(A4j),"b",BdU(AIc)],UN,0,Q,[],0,0,0,0,["PO",BdV(AJQ),"p",BdV(A8U)],Fj,0,C,[Cn],1,3,0,Ns,["fL",BdW(Ki),"e7",BdU(A10),"Gt",BdX(ANx),"Nh",BdX(ACy),"OP",BdW(AHA)],Lh,0,Fj,[],0,3,0,G4,["JB",BdW(Zv),"VV",BdX(K_),"RQ",BdV(Ju),"Qq",BdX(Na),"Mc",BdV(AQF),"bp",BdU(AMO),"bm",BdU(A6O),"b",BdU(AL6)],Kp,"GdxRuntimeException",3,Bm,[],0,3,0,0,["i6",BdW(AC3),"ba",BdV(P5)],Ld,0,C,[B7],
3,3,0,0,0,Wa,0,C,[Ld],0,0,0,0,["PK",BdV(ALP),"Ms",BdV(A2O),"Uv",BdV(AR8)],VW,0,C,[],4,3,0,0,0]);
$rt_metadata([FW,0,C,[],0,3,0,De,["ba",BdV(ZO)],F5,0,C,[B1,B6],0,3,0,A9N,["uX",BdV(Sk),"Um",BdU(AY0)],C0,"IllegalArgumentException",13,Bm,[],0,3,0,0,["d",BdU(FQ),"ba",BdV(ABT)],SN,"IllegalCharsetNameException",11,C0,[],0,3,0,0,["ba",BdV(APP)],Tu,0,C,[M5,IC],0,3,0,0,["SD",BdV(AGz),"dT",BdV(A0E),"fM",BdU(AJw),"gS",BdX(A6V),"kh",BdW(AK9),"ka",BdW(AIU),"mk",BdW(A8t),"kA",BdW(AZf),"La",BdV(AUl),"kK",BdU(AGp),"I_",BdV(AFd),"r5",BdU(A9u),"lw",BdV(AN1)],Uk,"NoSuchElementException",8,Bm,[],0,3,0,0,["d",BdU(A2e),"ba",
BdV(A0b)],Il,0,DO,[],0,3,0,0,["SS",BdV(Ou)],Ho,0,Il,[],0,3,0,0,["SU",BdW(NJ),"mY",BdX(A2V),"Gd",BdV(AXi),"pb",BdV(AZ1),"f9",BdV(AV6),"Ka",BdV(AJW),"Mz",BdU(A4O)],RR,0,Dm,[],0,0,0,0,["iI",BdW(ATL),"e",BdX(ATf),"bb",BdV(A5d),"u",BdU(AEB)],OQ,0,C,[Ly],0,0,0,0,["Vq",BdW(AQ3),"G_",BdU(AQv),"Gk",BdU(A7n),"SF",BdU(AMv),"P8",BdU(AF6)],Ft,0,Iw,[],1,0,0,0,["f6",BdX(Mf),"Ko",BdU(APV),"gi",BdV(A2p),"b2",BdV(ALi),"sZ",BdW(A6W),"b$",BdU(AKM)],FC,0,Ft,[],1,0,0,0,["fF",function(b,c,d,e,f,g){Jw(this,b,c,d,e,f,g);},"eQ",BdU(AKs)],O0,
0,FC,[],0,0,0,0,["fF",function(b,c,d,e,f,g){AXA(this,b,c,d,e,f,g);},"pM",BdV(AHs),"nB",BdW(AB$)],AAQ,0,FG,[],0,0,0,0,["fL",BdW(A7i),"e",BdX(AFr),"cB",BdX(AQq),"cF",BdY(ACZ),"b_",BdV(A11),"u",BdU(A7u)],VH,0,C$,[],0,0,0,0,["WB",BdY(A38),"e",BdX(ANi),"cB",BdX(ACi),"u",BdU(A5p)],SL,0,T,[],0,0,0,0,["d",BdU(AZw),"T",BdU(AKi)],ID,0,C,[],4,3,0,ABG,0,Co,0,Bw,[],12,3,0,Ih,["QL",BdU(E2)],Bi,"Color",5,C,[],0,3,0,Bu,["d",BdU(Ui),"bk",BdV(AAU),"Fs",BdY(R4),"RW",BdV(Tt),"eI",BdV(ADL),"Iy",BdV(A8I),"Uf",BdV(ADs),"Si",BdV(A3F),
"P5",BdV(AUg),"dK",BdU(A5D),"hJ",BdY(A2x),"RR",BdV(ANp),"VX",BdY(ACQ),"Qc",BdY(APf),"UX",BdY(A6k),"TW",BdW(AMs),"Qj",function(b,c,d,e,f){return AVK(this,b,c,d,e,f);},"WD",BdU(ALf),"z",BdV(AXp),"by",BdU(AKR),"nj",BdU(AQx),"rH",BdU(ASi),"b",BdU(AFJ),"N2",BdX(A5i),"QC",BdV(ATl),"TV",BdV(A4Z),"Rb",BdU(A7d)],E$,0,C,[],4,3,0,0,["St",BdX(AMb),"R7",BdY(ABD),"RL",function(b,c,d,e,f,g){ZB(this,b,c,d,e,f,g);},"z",BdV(AMf),"V6",BdV(Kn),"Re",BdU(IE),"QJ",BdU(P6),"by",BdU(AW0)],Ik,0,C,[],0,3,0,0,["d",BdU(T5)],F4,0,Ik,[],
0,3,0,0,["QW",BdX(G_),"rf",BdU(AGR),"xK",BdU(AI8),"Ng",BdU(A5R),"Nw",BdU(AFa),"qi",BdU(AQR),"vt",BdU(AGK),"LA",BdV(A7X),"HQ",BdU(A6d),"JO",BdV(AM4),"Kh",BdU(AF0),"GY",BdU(A60),"b",BdU(A2G)],Hh,0,BR,[],1,3,0,0,["ba",BdV(AA2)],IH,0,Hh,[],0,3,0,0,["d",BdU(Yl),"LB",BdV(Sz)],AAb,0,IH,[],0,3,0,0,["LB",BdV(A3B),"PI",BdV(AP5),"HF",BdV(ALt)],Tk,0,CC,[],0,0,0,0,["Vl",BdV(AJt),"e",BdX(A8T),"cB",BdX(AMe)],Et,0,C,[Cn],0,3,0,Ua,["Ia",BdW(Ud),"HW",BdU(AJl),"qJ",BdU(A6j),"rR",BdU(A7j),"An",BdW(A1a),"xS",BdW(AZG),"CU",BdW(AYz),
"j8",BdW(AOo),"FH",BdX(ACR),"ja",BdY(AED),"x5",function(b,c,d,e,f){AOO(this,b,c,d,e,f);},"zK",BdY(AQj),"EK",BdW(AXM),"H3",BdX(AT7),"Gg",BdW(AKx),"y7",BdX(A19),"Hf",BdW(A7w),"KH",BdX(AGV),"Ov",BdY(AU2),"r8",BdW(ACb),"JY",BdW(A4f),"h3",function(b,c,d,e,f,g){A8J(this,b,c,d,e,f,g);},"e7",BdU(AUf),"Bi",BdV(AD8),"tu",BdV(A04),"lI",BdV(A4d),"lN",BdV(AD1)],DK,0,Bw,[],12,3,0,GD,0,LQ,0,C,[],3,3,0,0,0,Jg,0,C,[Ig,LQ],0,3,0,0,["b",BdU(AKW),"zG",BdU(AUS),"vE",BdV(AXh),"u",BdU(A0H),"g4",BdU(AH3),"Ga",BdU(ARi),"gg",BdU(A1J),
"q_",BdU(A9b),"K8",BdU(ARw),"F9",BdV(A5N),"GW",BdV(A5L)],CK,0,C,[B7],1,3,0,0,0,Yo,0,CK,[],1,3,0,0,0,DI,0,C,[],3,3,0,0,0,ABa,0,C,[DI,B1],0,3,0,0,["d",BdU(AVL),"bk",BdV(ATC),"sv",BdV(AN8),"nO",BdW(AIA),"rB",BdV(A9w),"Ns",BdW(ATN),"eE",BdV(ATT),"k7",BdV(A8L),"OT",BdV(ANG),"Le",BdV(ANf),"dM",BdV(A7S),"ix",BdV(ASe),"iG",BdV(A7J),"iZ",BdV(A0Q),"bO",BdU(A70)],UQ,0,Q,[],0,0,0,0,["VY",BdV(A9c),"p",BdV(AF7)],Nn,0,C,[],3,3,0,0,0,FH,0,C,[],1,3,0,0,["d",BdU(K8),"L3",BdX(AHq),"Hd",BdU(AYR),"FF",BdW(A36),"yU",BdX(ANP),"JI",
BdX(AOi),"k4",BdV(A8_)],P9,0,FH,[],0,3,0,0,["d",BdU(AEU),"fX",BdU(AWH),"pV",BdV(A9m)],GX,0,C,[Cn],3,3,0,0,0,Hz,0,C,[GX],0,3,0,0,["my",BdW(AWJ),"bk",BdV(AAt),"lQ",BdU(AIG),"m1",BdU(ATM),"uj",BdX(AMt),"t4",BdU(AS5),"e7",BdU(A7L),"DK",BdU(A4_)],PW,0,Hz,[],0,3,0,0,["bk",BdV(A3i)],Jj,0,DZ,[B6],0,3,0,PZ,["Ql",BdU(A6R)],Vl,0,C,[],0,3,0,0,0,Du,0,BI,[],0,0,0,0,["nJ",BdV(ANW),"cf",BdU(A0f),"bI",BdW(AIl),"cB",BdX(AGM),"cF",BdY(AJS),"u",BdU(AQw),"pe",BdU(AEd),"b_",BdV(APX)],U$,0,Ci,[],0,0,0,0,["TD",BdV(ADY),"dk",BdW(A9a)],L4,
0,C,[],32,0,0,Bbj,0,VJ,0,Q,[],0,0,0,0,["F6",BdX(ARU),"p",BdV(AOS)],VQ,0,Q,[],0,0,0,0,["kf",BdY(AYj),"p",BdV(AB1)],VL,0,Q,[],0,0,0,0,["nq",BdW(ACc),"p",BdV(A45)],MF,0,C,[B7],3,3,0,0,0]);
$rt_metadata([VK,0,Q,[],0,0,0,0,["F6",BdX(ACo),"p",BdV(A1x)],VM,0,Q,[],0,0,0,0,["nq",BdW(ACl),"p",BdV(AH4)],VT,0,Q,[],0,0,0,0,["p7",BdX(AF2),"p",BdV(AWD)],GE,0,C,[Cn],3,3,0,0,0,VO,0,Q,[],0,0,0,0,["kf",BdY(ACL),"p",BdV(AXj)],VN,0,Q,[],0,0,0,0,["nq",BdW(ATd),"p",BdV(ALa)],Pv,0,BC,[],4,0,0,0,["G1",BdV(AFj),"e",BdX(A3b),"u",BdU(AWu),"Q",BdV(A5o),"iX",BdU(ABZ),"bb",BdV(ASc)],VR,0,Q,[],0,0,0,0,["p7",BdX(AYQ),"p",BdV(AQu)],DG,0,C,[B6],0,3,0,Bd,0,Oj,0,BI,[],0,0,0,0,["nJ",BdV(AOw),"bI",BdW(ACE),"u",BdU(AIR)],Dq,0,BI,
[],0,0,0,0,["bk",BdV(ASa),"bI",BdW(A41),"cB",BdX(A2H),"cF",BdY(AEO),"u",BdU(A7A),"sx",BdU(ATh),"b_",BdV(A4I)],Yh,0,T,[],0,0,0,0,["vZ",BdW(AGu),"JW",BdX(ASW),"T",BdU(AB8)],RS,0,C,[B7],1,3,0,0,0,RB,0,C,[],0,3,0,0,["d",BdU(A4h)],D5,0,C,[],1,0,0,0,["d",BdU(J6)],HG,0,CQ,[B6,Fr,FI,MT],1,3,0,0,["f6",BdX(YG),"q3",BdX(ADk),"Lw",BdV(AOb),"ON",BdX(A9d),"Hj",BdX(AUL),"Wn",BdV(IF),"BZ",BdU(VU),"Ws",BdU(Nd),"Wa",BdU(KO),"oA",BdV(AKY)],He,0,HG,[],1,0,0,0,["f6",BdX(PG),"IZ",BdU(ADn),"b$",BdU(A8G)],QR,0,He,[],0,0,0,0,["bk",
BdV(A3Z),"V1",function(b,c,d,e,f,g){Up(this,b,c,d,e,f,g);},"zA",BdV(A3f),"rU",BdW(A1j),"Nq",BdU(AMM),"MA",BdU(AHv),"eQ",BdU(ARM)],Sq,0,C,[Cx],0,3,0,0,["bk",BdV(AOR),"mf",BdW(Qw),"eX",BdV(AHW),"Kt",BdW(AY3),"l",BdV(ASq),"mo",BdV(A7B),"Fy",BdW(AR6)],AAA,0,Dj,[],0,3,0,0,["j9",BdV(AGq),"mI",function(b,c,d,e,f,g,h){return AOK(this,b,c,d,e,f,g,h);}],Ex,0,C,[Cx,Gm,B6],0,3,0,0,["d",BdU(La),"TU",BdU(GB),"K9",BdU(Ee),"Ug",BdV(BB),"Tm",BdW(Hx),"K",BdU(AI1),"SO",BdV(E7),"SI",BdV(Xe),"So",BdV(FX),"Tp",BdV(Cp),"J5",BdV(AO$),
"Wk",BdW(Rm),"RX",BdW(Qu),"fj",BdU(JV),"FG",BdU(AU7),"by",BdU(Vo),"z",BdV(UI),"cU",BdW(AUN)],FV,0,Ex,[],0,3,0,I_,["d",BdU(Kf),"ba",BdV(I9),"P9",BdV(M_),"R9",BdV(AA_),"Vj",BdW(Ks),"Is",BdU(A5r),"by",BdU(AKG),"z",BdV(AGU)],D1,"Pool",3,C,[],1,3,0,0,["d",BdU(Nz),"fL",BdW(LL),"eK",BdU(Oo),"jj",BdV(AFu),"yV",BdV(AIq),"CL",BdV(AWv),"DM",BdV(T4)],DT,0,D1,[],1,3,0,0,["d",BdU(I4),"eK",BdU(Vu),"ej",BdU(AK_)],SV,0,DT,[],0,3,0,0,["d",BdU(AC9),"NK",BdU(ALH),"Kc",BdU(A7h),"eK",BdU(AFw),"tB",BdU(AMg)],Zc,0,Q,[],0,0,0,0,["T$",
BdV(ACg),"p",BdV(A67)],Jo,0,C,[B1],0,3,0,AOs,["Fs",BdY(Xm),"d",BdU(QV),"ni",BdY(AGL),"N4",BdV(ALC),"v7",BdW(AW4),"tR",BdU(A2q),"I3",BdU(AL0),"Jk",BdV(A05),"BT",BdU(A8E),"Jn",BdY(ADb),"Jc",BdY(AP$)],D_,0,C,[],4,3,0,Bby,0,M7,0,C,[],0,3,0,KR,0,Q$,0,Q,[],0,0,0,0,["Q_",BdV(AYn),"p",BdV(AYg)],X$,"UnsupportedCharsetException",11,C0,[],0,3,0,0,["ba",BdV(ADS)],Gv,0,CQ,[B6],1,3,0,0,["f6",BdX(O1),"Dc",BdX(A6v),"SC",BdU(TH),"Sm",BdU(AA8),"Ho",BdV(AOq),"G8",BdV(A5w),"c$",BdU(A6D),"cZ",BdU(AR$),"ck",BdV(A1C),"cX",BdV(ATP)],Fc,
0,Gv,[],1,0,0,0,["f6",BdX(K5),"Jy",BdV(A4F),"b$",BdU(A0z)],Fm,0,Fc,[],1,0,0,0,["fF",function(b,c,d,e,f,g){K6(this,b,c,d,e,f,g);},"eQ",BdU(AZo)],U2,0,Fm,[],0,0,0,0,["fF",function(b,c,d,e,f,g){A1f(this,b,c,d,e,f,g);},"u5",BdV(AWC),"qE",BdW(AVY)],XQ,0,Q,[],0,0,0,0,["SX",BdV(AYo),"p",BdV(AOz)],DS,0,CQ,[B6],1,3,0,0,["f6",BdX(Zx),"wc",BdX(AL_),"V2",BdU(Rs),"Up",BdU(Vy),"NP",BdV(AHV),"LJ",BdV(A2T),"c$",BdU(AIb),"cZ",BdU(ASn),"ck",BdV(ANu),"cX",BdV(ARy)],Fp,0,DS,[],1,0,0,0,["f6",BdX(KH),"nW",BdV(AJF),"JM",BdW(A8C),
"b$",BdU(AWZ)],EN,0,Fp,[],1,0,0,0,["fF",function(b,c,d,e,f,g){Lq(this,b,c,d,e,f,g);},"eQ",BdU(A3C)],AAI,0,Bt,[],4,0,0,0,["bk",BdV(AYA),"e",BdX(AJ9),"bb",BdV(AYw),"u",BdU(AKV)],TL,0,BI,[],0,0,0,0,["nJ",BdV(A2u),"bI",BdW(ASS),"u",BdU(A3r)],Hb,0,BH,[],0,3,0,A1Q,0,E1,0,C,[Cx],0,3,0,0,["d",BdU(AEE),"bk",BdV(NT),"my",BdW(J3),"V7",BdX(UA),"RE",BdV(A6a),"QX",BdY(QT),"E",BdV(AOC),"qk",BdV(AIH),"IO",BdX(ACP),"Iq",BdV(AHY),"rs",BdX(AEs),"l",BdV(A7R),"kW",BdW(AOk),"Kl",BdW(A1K),"ij",BdW(AXX),"Kf",BdW(AFL),"KD",BdW(AFM),
"sa",BdV(ANL),"lL",BdW(AGe),"u$",BdU(ATR),"qc",BdU(ARZ),"EV",BdU(A9v),"K",BdU(AXP),"w5",BdV(AP0),"j5",BdV(AXd),"C4",BdV(AR4),"bY",BdU(AJd),"hT",BdV(AC5),"by",BdU(AUO),"z",BdV(AKn),"b",BdU(AP1),"fj",BdU(AEK)],P7,0,CX,[],0,3,0,0,["d",BdU(AWy),"lC",BdU(A8B),"mi",BdU(A5T)],Ez,0,Bw,[],12,3,0,AS1,["Fx",BdU(N5)],KM,0,Cv,[],0,0,0,0,["bk",BdV(T6),"e",BdX(AT3),"dL",BdU(AEG),"u",BdU(APg),"bb",BdV(A3O)],I2,0,BC,[],0,0,0,0,["nJ",BdV(AEM),"Q",BdV(A3A),"e",BdX(AWg),"cB",BdX(AIu),"cF",BdY(AW$),"u",BdU(APH),"b_",BdV(ACV),"bb",
BdV(APO)],ABM,0,C,[],0,3,0,0,0,Mc,0,C,[],3,3,0,0,0,Wq,0,C,[Mc,Gm],0,3,0,0,["d",BdU(ARs),"GO",BdW(AYK),"Ie",BdW(AWP),"cU",BdW(A5B)]]);
$rt_metadata([ABg,"AssertionError",13,D3,[],0,3,0,0,["i6",BdW(AF_)],Ep,0,CE,[],0,0,0,0,["Dy",function(b,c,d,e,f){Ie(this,b,c,d,e,f);},"e",BdX(A9l),"u",BdU(AQX)],K$,0,Ep,[],0,0,0,0,["Dy",function(b,c,d,e,f){RK(this,b,c,d,e,f);},"e",BdX(AT6)],Uh,0,C,[],0,3,0,0,0,Ml,0,C,[Cn],3,3,0,0,0,LX,0,C,[Io],3,3,0,0,0,Ip,0,IZ,[LX],1,3,0,0,["d",BdU(Yd),"fj",BdU(AGY)],K2,0,C,[],3,3,0,0,0,Vq,0,Ip,[DI,B1,K2],0,3,0,0,["d",BdU(AHn),"bk",BdV(Ok),"gM",BdV(AT8),"l",BdV(A4X),"db",BdU(A3D),"hR",BdV(AQT),"Km",BdW(AZ4),"mo",BdV(AOE)],XK,
"IllegalMonitorStateException",13,Bm,[],0,3,0,0,["d",BdU(A1k)],Ed,0,CC,[],0,0,0,0,["yw",BdY(KE),"e",BdX(AUD),"u",BdU(AVe)],C1,0,BC,[],0,0,0,0,["oX",BdV(Zu),"e",BdX(AXG),"u",BdU(A7$),"p",BdV(AHo),"b_",BdV(ADA),"us",BdU(AJP),"Q",BdV(A59),"bb",BdV(AG3)],XG,0,FJ,[],0,0,0,0,["gt",BdX(ANr),"e",BdX(AEI)],PO,0,C,[],4,3,0,0,0,BL,"String",13,C,[B1,B6,FI],0,3,0,Ek,["J9",BdV(Ii),"Rg",BdX(N$),"RZ",BdY(JJ),"We",BdY(Kr),"Rn",BdW(S0),"RJ",BdX(Oc),"f",BdV(AUz),"i",BdU(AYv),"bO",BdU(A0d),"ph",BdY(AGO),"Ox",BdV(A7v),"zl",BdW(A34),
"eR",BdV(A0i),"yq",BdV(AXE),"eA",BdW(A21),"Ku",BdV(AXD),"mw",BdW(AUH),"xc",BdV(AI9),"ud",BdW(AXk),"Mr",BdV(A3y),"zN",BdW(AGG),"Hm",BdV(AIM),"cd",BdW(ACK),"ef",BdV(AJa),"d8",BdW(AGW),"L6",BdV(ASH),"un",BdW(A4W),"LM",BdU(A0D),"b",BdU(AEJ),"rg",BdU(A0h),"z",BdV(AQP),"FS",BdV(A7Q),"xF",BdV(AL9),"Py",BdU(AL5),"Aw",BdV(A23),"by",BdU(A2$),"Fr",BdU(A2o),"E7",BdV(A0T),"vk",BdW(AQI),"F5",BdW(AG6)],MP,0,DO,[],0,3,0,A1p,["vD",BdV(A06)],Lo,0,C,[],0,0,0,BbZ,0,D6,0,C,[B7],3,3,0,0,0,Mo,0,C,[D6],3,3,0,0,0,XH,0,Ft,[],0,0,0,0,
["Tg",function(b,c,d,e,f,g){AIB(this,b,c,d,e,f,g);},"pM",BdV(A27),"nB",BdW(A1n),"eQ",BdU(AB_)],PP,0,Dj,[],0,3,0,0,["j9",BdV(APj),"mI",function(b,c,d,e,f,g,h){return AKj(this,b,c,d,e,f,g,h);}],IS,0,C,[],1,3,0,0,["d",BdU(W_)],HF,0,C,[],3,3,0,0,0,Fh,0,IS,[HF,DI,B1],0,3,0,S1,["d",BdU(Ht),"bk",BdV(Md),"x",BdW(ANC),"oH",BdU(ALc)],Sw,0,Fh,[],0,3,0,0,["d",BdU(AM$),"Ty",BdV(AJm)],AAS,0,Fp,[],0,0,0,0,["UN",function(b,c,d,e,f,g){AV_(this,b,c,d,e,f,g);},"u6",BdV(ANJ),"m4",BdW(AMS),"eQ",BdU(A3w)],VC,0,Bt,[],0,0,0,0,["d",
BdU(A85),"e",BdX(AJ7),"u",BdU(A3z),"bb",BdV(A3I)],NM,0,V,[],0,3,0,AYZ,["bk",BdV(XW),"bh",BdY(AS0)],Jx,0,Ep,[],0,0,0,0,["Dy",function(b,c,d,e,f){RO(this,b,c,d,e,f);},"e",BdX(AI6)],CU,0,Bw,[],12,3,0,AFl,["Fx",BdU(NC)],LF,0,CX,[],0,3,0,Hk,["lC",BdU(AOZ),"mi",BdU(ARq)],MD,0,C,[D6],3,3,0,0,0,UH,0,Bt,[],0,0,0,0,["bk",BdV(A9p),"e",BdX(AZP),"bb",BdV(AFn),"u",BdU(AHN)],R9,0,C,[Nn],0,3,0,0,["Wc",BdV(A3S)],EK,0,C,[F9],1,3,0,0,["d",BdU(KW),"KU",BdV(AA5)],RE,0,EK,[],0,3,0,0,["UE",BdW(AXf),"fG",BdU(AKp),"k$",BdU(ASg)],V9,
0,Q,[],0,0,0,0,["Qd",BdV(A1q),"p",BdV(A7o)],IL,"NoSuchMethodException",13,Di,[],0,3,0,0,["d",BdU(AZ0)],Xy,0,C,[],4,3,0,0,0,YZ,0,FC,[],0,0,0,0,["fF",function(b,c,d,e,f,g){AXu(this,b,c,d,e,f,g);},"pM",BdV(APD),"nB",BdW(ADO)],IN,0,BR,[],1,3,0,0,["ba",BdV(ZT)],Rv,"NullPointerException",13,Bm,[],0,3,0,0,["ba",BdV(A58),"d",BdU(AE8)],WX,0,Q,[],0,0,0,0,["PX",BdV(AHF),"p",BdV(A4x)],PD,0,C,[],0,0,0,0,["d",BdU(ASt)],X5,0,C,[],4,3,0,0,0,V$,0,C,[GE],0,3,0,0,["A4",BdX(ALI),"jz",BdU(AVX),"uu",BdU(AIt),"t9",BdX(AEa),"h6",BdW(AMh),
"gD",BdW(AG4)],I6,0,BR,[],1,3,0,0,["ba",BdV(Pa)],Od,0,C,[],0,3,0,0,0,Qe,0,T,[],0,0,0,0,["d",BdU(A48),"T",BdU(AMq)],NK,"PatternSyntaxException",9,C0,[],0,3,0,0,["QF",BdX(U9),"mD",BdU(A8c)]]);
$rt_metadata([Py,0,D1,[],0,3,0,0,["RA",BdX(ARv),"tB",BdU(AZI)],Hs,0,C,[],0,3,0,A2f,["d",BdU(ZF),"Rc",BdV(XV),"B5",BdV(A18),"Fo",function(b,c,d,e,f){return ANl(this,b,c,d,e,f);},"GV",BdV(AHP),"z",BdV(ADT),"IP",BdW(ATX)],S$,0,T,[],0,0,0,0,["d",BdU(AFp),"T",BdU(AWR)],HB,0,C,[],3,3,0,0,0,Hq,0,BH,[],0,3,0,AH6,0,DU,0,Bw,[],12,3,0,MA,0,Ky,0,C,[],3,3,0,0,0,LI,0,C,[Cx],0,3,0,A5j,["d",BdU(S8),"mf",BdW(M1),"kj",BdV(AVV),"j0",BdV(AZc),"x",BdW(AO3),"W",BdV(AU_),"K",BdU(AT0),"cY",BdV(A7p),"jA",BdV(Wh)],X2,0,C,[B1],4,3,0,
0,["Sn",BdV(Gz),"Tz",BdW(L2),"Sw",BdV(U8),"Ta",BdU(IA),"U_",BdU(UV),"TN",BdU(AAT),"VL",BdU(R3)],C_,"IOException",12,B2,[],0,3,0,0,["d",BdU(Vf)],Gx,0,C_,[],0,3,0,0,0,NX,0,C,[B7],3,3,0,0,0,Vc,0,C,[NX],0,0,0,0,["T3",BdW(ATc),"G$",BdU(AVA),"Rz",BdU(AND)],PK,0,FJ,[],0,0,0,0,["gt",BdX(APT),"e",BdX(AJO),"Q",BdV(A2R)],XT,"BufferOverflowException",10,Bm,[],0,3,0,0,["d",BdU(AYy)],T0,0,T,[],0,0,0,0,["d",BdU(AKy),"T",BdU(A0R)],L3,0,C,[],0,3,0,0,["QH",BdX(APt)],R2,0,Ex,[],0,3,0,0,["d",BdU(A7N),"F4",BdV(AUP)],ZY,0,D5,[],
0,0,0,0,["d",BdU(AIs),"kT",BdV(A5O),"Dx",BdW(ARB)],ZX,0,D5,[],0,0,0,0,["d",BdU(AUT),"kT",BdV(AEW),"Dx",BdW(AOl)],XX,0,FM,[],0,3,0,0,0,Uu,0,T,[],0,0,0,0,["d",BdU(AZs),"T",BdU(A5f)],KP,0,C,[],0,3,0,0,0,KB,0,C,[],0,3,0,0,["d",BdU(AXC),"N1",BdY(AYx)],SH,0,C,[],0,3,0,0,["J9",BdV(AW6)],Ds,0,BI,[],0,0,0,0,["oX",BdV(ANN),"bI",BdW(ASK),"u",BdU(AKc),"b_",BdV(ANh),"us",BdU(A3x)],H$,0,Q,[],0,0,0,0,["bk",BdV(RU),"p",BdV(ANb)],Yr,0,H$,[],0,0,0,0,["bk",BdV(AL$),"p",BdV(A5_)],Lk,0,C,[Ml],0,3,0,SZ,["d",BdU(AAu),"R8",BdW(JZ),
"gT",BdU(AZe),"be",BdU(APr),"GT",BdY(AJL),"ej",BdU(AJb),"Or",BdV(AHR),"zF",BdU(AGi),"JD",BdV(A3o),"IN",BdU(AC4)],LK,0,C,[],32,0,0,Bcs,0,W3,0,CK,[],1,3,0,0,0,NB,0,C,[],3,3,0,0,0,Lw,0,C,[NB],0,3,0,UZ,["Uo",BdV(ABV),"TJ",BdW(JU),"RH",BdX(MU),"GB",BdW(ALh),"GU",BdW(AD9),"HS",BdW(ANV),"II",BdX(A7_),"zH",BdX(AMj),"OI",BdU(ACa),"ye",BdV(AB3),"Nc",BdW(ALD),"Od",BdX(AXr)],DW,0,C_,[],0,3,0,0,["d",BdU(J8)],Qc,"UnmappableCharacterException",11,DW,[],0,3,0,0,["bk",BdV(AZQ),"mD",BdU(AF9)],Pw,0,Q,[],0,0,0,0,["d",BdU(ASm),
"WP",BdW(PB),"Vg",BdX(ATD),"cD",BdV(AB0),"MG",BdV(A9o),"bG",BdW(A61),"KX",BdV(AS9),"xE",BdV(AQD),"p",BdV(AFh),"bL",BdU(ASx),"ch",BdU(AXR),"l6",BdU(AP7),"b",BdU(A2D),"gV",BdU(AHd)],Ps,0,C,[IC],0,0,0,0,["Vx",BdX(A4J),"dT",BdV(A2S),"lw",BdV(A8n)],AAH,"BufferUnderflowException",10,Bm,[],0,3,0,0,["d",BdU(AQ5)],SS,0,C,[],0,3,0,0,["d",BdU(AB7)],TW,0,Ei,[],0,0,0,0,["xU",BdW(AZB)],N2,0,C,[],3,3,0,0,0,IQ,0,C,[N2],0,3,0,0,["d",BdU(SD),"Gq",BdY(AGs),"Gm",BdU(AMx)],YI,0,IQ,[],0,3,0,0,["d",BdU(AJh),"rF",BdY(AZY),"Nr",BdY(AGI),
"NB",BdW(A5h),"Pt",BdX(A35),"Jo",BdY(A0C),"GN",BdW(A7E),"PM",BdY(AXa)],ON,0,EN,[],0,0,0,0,["fF",function(b,c,d,e,f,g){A16(this,b,c,d,e,f,g);},"u6",BdV(AKE),"m4",BdW(A4z)],L7,0,C,[Cn],3,3,0,0,0,GV,0,C,[L7],1,3,0,0,["d",BdU(Z$),"In",BdX(ACB),"bg",BdW(A9e),"bZ",BdV(AQ6),"M3",BdV(AGN),"LE",BdW(AXK),"CG",BdW(Xb),"MR",BdV(AYP),"yG",BdW(UG),"be",BdU(VV),"UD",BdV(H0),"P6",BdV(B0),"Tc",BdW(DX),"R1",BdW(Qx),"Sl",BdW(Lb),"VP",BdW(Fq),"UP",BdW(Fi),"UL",BdX(VP),"Vv",function(b,c,d,e,f){return DM(this,b,c,d,e,f);},"Sy",BdW(DQ),
"Ue",BdW(YH)],Q_,0,Q,[],0,0,0,0,["Tu",BdV(ATQ),"p",BdV(ADp)],SJ,"MalformedInputException",11,DW,[],0,3,0,0,["bk",BdV(AMV),"mD",BdU(AG0)],Xg,0,T,[],0,0,0,0,["d",BdU(AC6),"T",BdU(AGt)],Fb,0,Bw,[],12,3,0,Gj,0]);
$rt_metadata([EC,0,Bw,[],12,3,0,R8,0,HL,0,BH,[],0,3,0,EP,["UJ",BdW(UO),"tU",BdU(ANQ),"by",BdU(ARh)],Gl,0,C,[],0,3,0,0,["d",BdU(Yi)],SX,"CloneNotSupportedException",13,B2,[],0,3,0,0,["d",BdU(AZV)],QK,0,CK,[],1,3,0,0,0,MR,0,DZ,[B6],0,3,0,Nx,0,HZ,0,BR,[],1,3,0,0,["ba",BdV(ZL)],P$,0,HZ,[],0,3,0,0,["d",BdU(AZZ)],MO,0,C,[],3,3,0,0,0,QJ,0,C,[MO],0,3,0,0,["d",BdU(ARK),"Gr",BdW(AKa)],Sv,0,C,[],0,0,0,0,["bk",BdV(AJD),"od",BdW(AI4),"b2",BdV(A1E)],G9,0,C,[B7],3,3,0,0,0,Qq,0,C,[G9],1,3,0,0,["SY",BdV(A80),"V8",BdU(AEY)],GO,
0,C,[],0,3,0,0,["RS",BdV(AUk),"Mg",BdY(A5U),"Mv",BdY(AEm),"AN",BdU(ARE),"Hz",BdU(AFC),"KM",BdU(ACH)],Ry,0,Jp,[],0,3,0,0,["d",BdU(AS8),"IX",BdV(Ub),"wj",BdX(AW2)],U4,0,C,[Cx],0,3,0,0,["Qs",BdY(AOy),"N5",BdV(ALo),"Mk",BdX(ATF),"K",BdU(A1u),"jA",BdV(ARo)],P8,0,IB,[],0,0,0,0,["d",BdU(A0t),"T",BdU(AIe)],QA,"BitmapFont",6,C,[Cn],0,3,0,0,["d",BdU(AFb),"VG",BdY(Oe),"VC",BdX(TD),"Vs",BdX(XL),"G2",BdV(ASs),"xT",BdY(AHL),"FU",BdY(A79),"Nn",BdU(APc),"JR",BdU(A7V)],H_,0,IN,[],1,3,0,0,["ba",BdV(Sx)],G0,0,H_,[],1,3,0,0,["ba",
BdV(Xa)],Ib,0,G0,[],1,3,0,0,["ba",BdV(AAa)],T8,0,Ib,[],0,3,0,0,["Rh",BdV(ALV),"MC",BdW(A7M)],Yn,0,C,[],0,3,0,0,["d",BdU(ADe),"Wb",BdW(AXY),"H0",BdV(ANS),"LD",BdU(AOW),"O8",BdV(A24)],Ti,0,Q,[],0,0,0,0,["Ts",BdW(ASr),"p",BdV(AGX)],Th,0,Q,[],0,0,0,0,["Sj",BdX(A22),"p",BdV(ATw)],C4,0,Bw,[],12,3,0,AWI,0,AAf,0,T,[],0,0,0,0,["d",BdU(AUC),"T",BdU(A2W)],NW,0,C,[D6],3,3,0,0,0,Wb,0,Ed,[],0,0,0,0,["yw",BdY(A1$),"e",BdX(A5x)],QG,0,Gl,[],0,3,0,0,["ba",BdV(ADv)],KU,0,C,[D6],3,3,0,0,0,KZ,0,C,[],3,3,0,0,0,W$,0,C,[Cx],0,3,0,
0,["d",BdU(AQ0),"mf",BdW(Zr),"eX",BdV(AM3),"od",BdW(AGE),"J2",BdW(AKl)],WQ,0,Q,[],0,0,0,0,["RT",BdV(ARr),"p",BdV(A1P)],Pi,0,Q,[],0,0,0,0,["Q4",BdW(ARz),"p",BdV(AKD),"b",BdU(AYO)],Uw,0,CE,[],0,0,0,0,["gt",BdX(APS),"e",BdX(AWw)],To,0,C,[],0,3,0,0,["Q6",BdY(ACm)],Da,0,BH,[],0,3,0,Ch,["PL",BdV(I8),"SA",BdW(Jy),"VM",function(b,c,d,e,f){Zp(this,b,c,d,e,f);},"Rx",BdV(Y7),"tU",BdU(AH7),"by",BdU(AQ_)],G2,0,V,[],0,3,0,O4,["fL",BdW(PL),"bh",BdY(A2t)],Nq,0,C,[],0,3,0,Bca,["Vi",BdW(ABh),"ym",BdU(A39),"Mx",BdV(AGv),"K",BdU(A3g),
"IT",BdX(ASz),"HJ",function(b,c,d,e,f,g,h,i,j){return A8Z(this,b,c,d,e,f,g,h,i,j);},"He",BdX(AFq)],Pf,0,Q,[],0,0,0,0,["nq",BdW(A5e),"p",BdV(AFx)],Pg,0,Q,[],0,0,0,0,["nq",BdW(ALK),"p",BdV(AYu)],Ph,0,Q,[],0,0,0,0,["kf",BdY(AFI),"p",BdV(A9B)],XS,0,C,[],4,3,0,0,0,Pz,0,Q,[],0,0,0,0,["kf",BdY(AYp),"p",BdV(AH8)],Pj,0,Q,[],0,0,0,0,["kf",BdY(AXn),"p",BdV(AVh)],Og,0,BI,[],0,0,0,0,["ED",BdV(A6M),"bI",BdW(AK$),"u",BdU(AIS)],Pk,0,Q,[],0,0,0,0,["kf",BdY(ACW),"p",BdV(ANK)],Pl,0,Q,[],0,0,0,0,["p7",BdX(AMN),"p",BdV(AJH)],Tz,
0,Q,[],0,0,0,0,["Ra",BdV(ASO),"p",BdV(AJv)]]);
$rt_metadata([Hn,0,DL,[],0,3,0,0,["d",BdU(AZ7),"Iu",BdV(ADz),"NG",BdW(AE9),"xn",function(b,c,d,e,f,g){return AOH(this,b,c,d,e,f,g);},"z",BdV(ADl),"D$",BdV(A29)],Pe,0,Q,[],0,0,0,0,["p7",BdX(A1F),"p",BdV(A6G)],Y6,0,CK,[],1,3,0,0,0,Li,0,C,[],0,3,0,ABz,0,YJ,0,EO,[Fr],0,3,0,0,["bk",BdV(AJT),"d",BdU(A8i),"dC",BdV(A15),"a",BdV(ACF),"j",BdV(AMd),"Mj",BdV(AYY),"cA",BdV(AIg),"U",BdV(ACt),"Ij",BdX(AFK),"qI",BdV(A5X),"IK",BdV(AUY),"Jj",BdW(AYb),"OR",BdW(A6i),"Kq",BdY(A4P),"NJ",BdW(A8F),"FR",BdW(A2E),"J7",BdW(AMJ),"K$",
BdW(AQY),"EE",BdV(APJ),"F0",BdW(A0G),"cd",BdW(A7P),"ue",BdV(A0M),"ph",BdY(AGP),"d8",BdW(A4V),"um",BdY(A0y),"tC",BdX(AGj),"i",BdU(AU5),"b",BdU(AEA),"gM",BdV(AKm),"w9",BdW(AKw),"wu",BdW(A12),"uS",BdW(A1t),"Cr",BdW(AY_),"Ds",BdW(AE7),"kY",BdW(ASu)],Qp,0,BC,[],0,0,0,0,["Tv",BdW(ARL),"e",BdX(ADJ),"Q",BdV(A3s),"u",BdU(A3_),"bb",BdV(AEH),"b_",BdV(AEf)],AAO,"ConcurrentModificationException",8,Bm,[],0,3,0,0,["d",BdU(ASd)],OC,0,C,[IM],0,0,0,0,["d",BdU(AKg)],Gh,0,C,[],3,3,0,0,0,OB,0,C,[Gh],0,0,0,0,["d",BdU(AVw)],LO,0,
C,[],3,3,0,0,0,EQ,0,C,[LO,DI],0,0,0,0,["HH",BdW(LG)],Mp,0,EQ,[],0,0,0,0,["HH",BdW(ANF),"M5",BdU(AD3),"LY",BdW(AQr)],EV,0,Cv,[],0,0,0,0,["d",BdU(A6N),"e",BdX(AQM),"u",BdU(AVJ)],Ze,0,C,[],0,3,0,0,["ba",BdV(A0Y),"LC",BdV(AYE),"O4",BdY(AMR),"m0",BdW(A56),"ID",BdX(AWU),"O2",BdV(ALG),"J1",BdV(AH$),"K0",BdV(A42),"M9",BdV(AVq)],S7,0,BI,[],0,0,0,0,["wR",BdV(A1Y),"bI",BdW(A5K),"cB",BdX(AX7),"cF",BdY(AWb),"u",BdU(AID),"bb",BdV(ATW)],JK,0,BH,[],0,3,0,AFv,0,UB,0,C,[IM],0,3,0,0,["Ia",BdW(A7f),"QN",BdX(TU),"v8",BdU(A9s),"O",
BdU(AD4)],JT,0,C,[Cx,B6],4,3,0,0,["PU",BdV(A1W),"VZ",BdV(DV),"db",BdU(CR),"Q2",BdV(Cy),"z",BdV(No),"K9",BdU(Iv),"Uh",BdU(Nj)],Kh,0,GO,[],0,3,0,0,0,ABL,0,C,[Cn],0,3,0,0,["Vb",BdX(S9),"d",BdU(A8v),"G9",BdV(A2m),"ej",BdU(AZK),"be",BdU(A5F),"Cz",BdW(APZ)],QI,0,EN,[],0,0,0,0,["fF",function(b,c,d,e,f,g){ATJ(this,b,c,d,e,f,g);},"u6",BdV(AS$),"m4",BdW(A0S)],U0,0,C,[KZ],0,3,0,0,["Rv",BdV(ASZ),"fX",BdU(ASE),"vq",BdU(ARd),"bp",BdU(AKI),"bm",BdU(APv),"wN",BdU(A3P),"Ed",BdU(A28),"EI",BdU(A86),"Ml",BdU(ATp),"tD",BdV(AC$)],XD,
0,FF,[],0,3,0,0,["ba",BdV(AFc)],SU,0,T,[],0,0,0,0,["d",BdU(AD6),"T",BdU(AGQ)],EE,"GlyphLayout",6,C,[EF],0,3,0,DE,["d",BdU(ABi),"Wf",BdW(Pb),"Ru",function(b,c,d,e,f,g){Ss(this,b,c,d,e,f,g);},"UI",function(b,c,d,e,f,g,h,i,j){Z1(this,b,c,d,e,f,g,h,i,j);},"Ly",BdW(A5E),"NR",function(b,c,d,e,f,g){A1D(this,b,c,d,e,f,g);},"pv",function(b,c,d,e,f,g,h,i,j){AFR(this,b,c,d,e,f,g,h,i,j);},"fM",BdU(A6A),"b",BdU(AML)],AAW,"ArrayIndexOutOfBoundsException",13,Eh,[],0,3,0,0,["bk",BdV(ADQ)],OW,0,EK,[],0,3,0,0,["TZ",BdW(P3),"VB",
BdV(ACq),"RV",BdW(ZD),"fG",BdU(A6x),"IV",BdX(AI2)],E9,0,Bw,[],12,3,0,Ri,0,X6,0,C,[],0,3,0,0,0,Vb,0,C,[Gh],0,0,0,0,["T9",BdV(ANt),"bC",BdU(A2r),"bz",BdU(A6S)],LB,0,C,[],0,3,0,0,["d",BdU(A8P),"Ow",BdU(A6K),"Nv",BdU(AOx),"CQ",BdV(AEz),"yA",BdV(A44),"Fz",BdU(ASX),"H8",BdU(A4C),"O0",BdV(AKC),"Hx",BdV(ADm),"L_",BdW(ANv),"E9",BdV(AZ8),"rl",BdU(A1v),"wY",BdU(A7C),"uO",BdU(AXW),"LQ",BdV(A5b)],Lp,0,C,[],3,3,0,0,0,Hl,0,C,[Lp,Fk],0,3,0,A$R,["d",BdU(US),"wE",BdU(AXQ),"vI",function(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){return A6o(this,
b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);},"EY",BdU(AYl),"M_",BdU(AB4),"Pu",BdW(A6y),"ly",BdV(AMP),"or",BdV(A2C),"lk",BdV(AVi),"id",BdY(A55),"hE",BdY(AZU),"i2",BdX(AN2),"mW",BdW(AVW),"ou",BdW(ALp)],UW,0,E4,[DI],0,0,0,0,["fL",BdW(AJk),"i8",BdU(AYN),"iz",BdU(A68),"b",BdU(A2N)],Wf,0,V,[],4,0,0,0,["d",BdU(AH5),"bh",BdY(ARP)],Wc,0,V,[],4,0,0,0,["d",BdU(A6X),"bh",BdY(AWs)],UR,0,Q,[],0,0,0,0,["Tl",BdV(APn),"p",BdV(AUM)],Wk,0,V,[],4,0,0,0,["d",BdU(AJI),"bh",BdY(A8r)],Wg,0,V,[],4,0,0,0,["d",BdU(ATx),"bh",BdY(AMF)],We,0,V,[],
4,0,0,0,["d",BdU(A51),"bh",BdY(A0$)],Wj,0,V,[],4,0,0,0,["d",BdU(AVx),"bh",BdY(AOm)],RG,0,C,[B1],0,3,0,0,["d",BdU(ATj),"LN",BdV(A7e),"FD",BdU(AD2),"xj",BdU(AX0)],MY,0,C,[],3,3,0,0,0,RM,0,I6,[],0,3,0,0,["d",BdU(ALA)],WU,0,C,[],4,0,0,0,0,RP,0,C7,[],0,3,0,0,["j9",BdV(A0N),"mZ",function(b,c,d,e,f,g,h){return A73(this,b,c,d,e,f,g,h);}],Z9,0,C,[],4,3,0,0,["WF",BdV(APB),"i",BdU(ND),"yX",BdV(QM),"qi",BdU(Pr),"Sf",BdU(RY)],ABY,0,CC,[],0,0,0,0,["ld",BdX(AOd),"e",BdX(ADg)],ZN,0,C,[],0,3,0,0,["Td",BdW(A2B),"tp",BdU(A2w),
"dN",BdV(AZJ),"ec",BdV(AVf),"eg",BdV(A65),"dQ",BdV(A4T)]]);
$rt_metadata([O9,0,Q,[],0,0,0,0,["V$",BdV(ALl),"p",BdV(AM8)],JA,0,C,[],3,3,0,0,0,Ra,0,C,[JA],0,3,0,0,["d",BdU(AU8)],Wo,0,V,[],4,0,0,0,["d",BdU(AJ5),"bh",BdY(APs)],KX,"InstantiationException",13,Di,[],0,3,0,0,["d",BdU(A0X)],Wl,0,V,[],4,0,0,0,["d",BdU(A5v),"bh",BdY(A84)],Wi,0,V,[],4,0,0,0,["d",BdU(AR7),"bh",BdY(AUy)],Wm,0,V,[],4,0,0,0,["d",BdU(AVg),"bh",BdY(AZt)],OV,0,Q,[],0,0,0,0,["SK",BdV(A8K),"p",BdV(AQ7)],JC,0,C,[],3,3,0,0,0,RN,0,C,[JC,MF],0,3,0,0,["d",BdU(AIr),"o4",BdU(A4r),"vn",BdV(A6f),"JA",BdV(AYf),"OS",
BdU(A4b),"Lx",BdU(ASj),"RO",BdV(A3M)],XB,0,CC,[],0,0,0,0,["ld",BdX(ASF),"e",BdX(ANe)],Xj,0,C,[],4,3,0,0,0,YE,0,C,[],0,3,0,0,["d",BdU(AP6)],RZ,0,C7,[],0,3,0,0,["j9",BdV(ANE),"mZ",function(b,c,d,e,f,g,h){return AHr(this,b,c,d,e,f,g,h);}],HE,0,C,[Cn],0,3,0,J4,["S0",BdY(Xn),"Tx",function(b,c,d,e,f){MC(this,b,c,d,e,f);},"RI",function(b,c,d,e,f){NQ(this,b,c,d,e,f);},"Ff",BdX(AOf),"MI",BdV(AFg),"NF",BdX(AI7),"vL",BdU(AQU),"wQ",BdU(A6h),"JN",BdV(AF5),"h6",BdW(APd),"I8",BdV(A5P),"gD",BdW(ADy),"MJ",BdY(ASD),"CM",function(b,
c,d,e,f){A13(this,b,c,d,e,f);},"gH",BdU(AWA),"z6",BdU(AJ4)],M2,0,EQ,[],0,0,0,0,["TY",BdW(ANH)],GY,0,BR,[],1,3,0,0,["ba",BdV(SA)],Vw,0,C,[Cx],0,3,0,0,0,AA0,0,Bt,[],0,0,0,0,["d",BdU(AJr),"e",BdX(A3l),"bb",BdV(ASQ),"u",BdU(AH0)],ZG,0,C,[Cx],0,3,0,0,["d",BdU(A00),"mf",BdW(XR),"kj",BdV(ALj),"j0",BdV(AWz),"gq",BdW(APe),"tn",BdW(AVD),"jA",BdV(Tc)],ST,0,T,[],0,0,0,0,["d",BdU(AJK),"T",BdU(APQ)],Fo,0,CQ,[B6],1,3,0,0,["Tk",function(b,c,d,e,f){Vd(this,b,c,d,e,f);},"zz",BdX(AWL),"H9",BdV(ANa),"wA",BdX(A7t),"Vt",BdV(Xv),
"BZ",BdU(AUU),"Wt",BdU(Hu),"PY",BdV(FB),"Uk",BdU(JM),"Ti",BdU(Je),"L8",BdV(AXH),"fV",BdV(APC),"c$",BdU(AEQ),"ck",BdV(ANs),"cX",BdV(ATS)],AA$,0,Fo,[],0,0,0,0,["vZ",BdW(AZD),"U7",function(b,c,d,e,f,g,h){OA(this,b,c,d,e,f,g,h);},"yX",BdV(ACe),"Pm",BdU(ALk),"b$",BdU(AQA),"vK",BdU(A8X),"NS",BdV(A6p),"Kg",BdW(AHE),"yi",BdU(ASl),"su",BdU(AL7)],Ro,0,E5,[],0,0,0,0,["UY",BdV(AJg),"AS",BdU(A0k)],Ln,0,C,[B1],0,3,0,0,["TE",BdW(AHK),"im",BdX(A09)],U5,0,C,[],0,3,0,0,["d",BdU(A6E)],Gg,0,C,[],0,3,0,AJz,["d",BdU(U1),"Ak",BdV(A3d)],MI,
0,C,[B1],0,3,0,Bcc,["Un",BdW(AA6)],AAy,0,Bx,[],0,3,0,0,0,Qk,"BufferUnderflowException",11,Bm,[],0,3,0,0,["d",BdU(A78)],U7,0,Bt,[],0,0,0,0,["G1",BdV(A4q),"e",BdX(AV9),"bb",BdV(AHI),"u",BdU(AUp)],Cd,0,C,[Hj],1,3,0,0,["d",BdU(DP),"xC",BdW(ATq)],S5,0,C,[B7],1,3,0,0,0,Wu,0,V,[],4,0,0,0,["d",BdU(A4e),"bh",BdY(AYc)],Mj,0,C,[],32,0,0,Bdf,0,XE,0,C,[],0,3,0,0,["d",BdU(A4R),"gT",BdU(ACw),"Hp",BdU(AUv),"OJ",BdV(AT5),"IH",BdU(AEZ),"Mp",BdW(A6t),"Jr",BdY(AIQ),"JJ",BdY(ARc),"BY",function(b,c,d,e,f){return AP2(this,b,c,d,e,
f);},"Jb",function(b,c,d,e,f,g){return A1w(this,b,c,d,e,f,g);}],IV,0,C,[GE],0,3,0,0,["A4",BdX(Y4),"jz",BdU(AHH),"uu",BdU(AR5),"t9",BdX(A2_),"h6",BdW(AXZ),"gD",BdW(AUx)],Vt,0,IV,[],0,3,0,0,["QQ",BdW(A5g)],WA,0,V,[],4,0,0,0,["d",BdU(APl),"bh",BdY(ARX)],Ww,0,V,[],4,0,0,0,["d",BdU(AQk),"bh",BdY(ATB)],Sp,0,T,[],0,0,0,0,["d",BdU(AH2),"T",BdU(A5q)],Wv,0,V,[],4,0,0,0,["d",BdU(AJJ),"bh",BdY(AKk)],Ku,0,C,[],3,3,0,0,0,Wy,0,V,[],4,0,0,0,["d",BdU(AXL),"bh",BdY(AFS)],AAC,0,C,[B7],1,3,0,0,0,X8,0,C,[],0,3,0,0,["VH",BdV(A8j),
"gT",BdU(A6C),"be",BdU(A8O),"L7",BdV(AFB),"Ld",BdX(AV3),"wW",BdX(A75),"Hr",BdV(AIP)],QH,0,T,[],0,0,0,0,["d",BdU(AET),"T",BdU(ANX)],G8,0,C,[HF],1,3,0,0,["d",BdU(W0)],Yw,0,C,[GX],0,3,0,0,["my",BdW(AXt),"lQ",BdU(AN9),"m1",BdU(AS_),"uj",BdX(AZT),"t4",BdU(ARf),"e7",BdU(AJ1),"DK",BdU(AEF)]]);
$rt_metadata([HP,0,BR,[],1,3,0,0,["ba",BdV(Tb)],VE,0,Bt,[],0,0,0,0,["d",BdU(APq),"e",BdX(AJE),"bb",BdV(ASp),"u",BdU(AUJ)],WE,0,V,[],4,0,0,0,["d",BdU(ADF),"bh",BdY(A5y)],WB,0,V,[],4,0,0,0,["d",BdU(A7O),"bh",BdY(ARI)],FO,0,BR,[],0,3,0,Fg,["uX",BdV(Sl),"KS",BdU(AEN),"I1",BdU(AOL),"Js",BdU(AZv),"L$",BdX(AGA)],Wx,0,V,[],4,0,0,0,["d",BdU(ADD),"bh",BdY(AMB)],WD,0,V,[],4,0,0,0,["d",BdU(AUE),"bh",BdY(AIk)],KC,0,Cv,[],0,0,0,0,["bk",BdV(YT),"e",BdX(ATO),"u",BdU(AWG),"bb",BdV(A5s)],WC,0,V,[],4,0,0,0,["d",BdU(AHJ),"bh",
BdY(AWN)],K0,0,C,[],4,3,0,EX,0,M8,0,C,[],3,3,0,0,0,LD,0,C,[],3,3,0,0,0,UF,0,BI,[],0,0,0,0,["bk",BdV(A5$),"bI",BdW(AOT),"u",BdU(A9f)],Uo,0,Ic,[],0,3,0,0,["QR",BdW(PT),"IX",BdV(AEu),"id",BdY(AI3),"hE",BdY(AZH),"HI",BdX(AXb),"i2",BdX(AI$),"ou",BdW(AQO),"yH",BdV(A1r),"Md",BdV(AQS),"ly",BdV(AC8),"or",BdV(A0p)],Gb,0,C,[],4,3,0,0,0,QF,"BitmapFont$BitmapFontData",6,C,[],0,3,0,0,["JB",BdW(A2y),"OK",BdW(AFi),"Ew",BdW(AT2),"xV",BdW(AR2),"Cn",BdU(A1T),"ih",BdV(AFN),"Fg",function(b,c,d,e,f){AE3(this,b,c,d,e,f);},"JZ",BdW(ACk),
"xf",BdV(AFy),"jl",BdV(AGc)],Sn,0,C,[B6],0,3,0,0,["d",BdU(A6H)],M4,0,C,[],0,3,0,0,0,WM,0,T,[],0,0,0,0,["fL",BdW(A76),"T",BdU(AKQ)],TX,0,C,[],0,0,0,0,["d",BdU(ACr),"uP",BdX(ALO),"BF",BdX(AK4),"Kw",BdU(A0q),"PJ",BdU(A4i)],ABE,0,Hw,[],0,0,0,0,["Wd",BdV(A37),"e3",BdU(A3q)],WF,0,T,[],0,0,0,0,["d",BdU(AEq),"T",BdU(ARD)],YC,0,C,[H4],4,3,0,0,["Su",BdW(Xh),"P_",BdU(AAe),"Tq",BdV(AAG),"UK",BdV(ABn),"Bu",BdV(F8),"QV",BdV(Jr),"TT",BdU(F1),"lu",BdV(Ul),"o1",BdV(OF),"wb",BdU(Lu),"pC",BdU(Mv),"lz",BdU(OL),"TM",BdW(AB6)],Tr,
0,BC,[],0,0,0,0,["d",BdU(A25),"e",BdX(AR1),"u",BdU(AGg),"Q",BdV(AVu),"iX",BdU(A20),"bb",BdV(AVr)],YR,0,Q,[],0,0,0,0,["TK",BdV(AO8),"p",BdV(AQL)],Ow,0,FH,[],0,3,0,0,["d",BdU(AY1),"fX",BdU(AFe),"pV",BdV(AO7)],T9,0,C,[G5],0,3,0,0,["KU",BdV(AZy),"e3",BdU(A69)],UT,0,C1,[],0,0,0,0,["oX",BdV(AFT),"p",BdV(AJC),"u",BdU(ARR)],Ux,0,T,[],0,0,0,0,["d",BdU(AOj),"T",BdU(AS4)],Me,0,BC,[],0,0,0,0,["Sk",BdW(ATE),"Q",BdV(ALb),"u",BdU(AOG),"e",BdX(ACd),"b_",BdV(AVs),"bb",BdV(AQb)],Uq,0,T,[],0,0,0,0,["d",BdU(A2k),"T",BdU(AZm)],Ke,
0,C,[GE],0,3,0,AHw,["A4",BdX(WP),"jz",BdU(AUI),"uu",BdU(AQe),"t9",BdX(AU1),"h6",BdW(APE),"gD",BdW(AGl)],Qg,0,C,[],4,3,0,0,0,G3,"GlyphLayout$GlyphRun",6,C,[EF],0,3,0,0,["d",BdU(AYG),"fM",BdU(AJ6),"b",BdU(ADi)],L1,0,Di,[],0,3,0,0,0,Sg,0,Ci,[],0,0,0,0,["PE",BdW(A6n),"fr",BdV(A8Q),"da",BdV(AKP),"t1",BdW(ALr),"dk",BdW(AJA)],Z8,0,Ci,[],0,0,0,0,["Ry",BdV(AWj),"fr",BdV(ASN),"da",BdV(AF$),"dk",BdW(A7a)],FE,0,C,[B7],3,3,0,0,0,Sc,0,C,[FE],0,0,0,0,["x7",BdY(AHZ),"dT",BdV(AHb),"lw",BdV(AZF)],Sb,0,Ci,[],0,0,0,0,["QP",function(b,
c,d,e,f){AP8(this,b,c,d,e,f);},"fr",BdV(A9C),"da",BdV(A8z),"t1",BdW(AD0),"dk",BdW(ARx)],Sa,0,C,[FE],0,0,0,0,["PE",BdW(AUa),"dT",BdV(A5Y),"lw",BdV(AV4)],K3,0,C,[],32,0,0,BbR,0,Uj,0,C,[Cn],0,3,0,0,["d",BdU(ACn),"LI",BdV(A66)],Si,0,C,[FE],0,0,0,0,["x7",BdY(AHM),"dT",BdV(AXs),"lw",BdV(AG5)],PY,0,Bt,[],0,0,0,0,["uX",BdV(AJG),"e",BdX(AU9),"bb",BdV(AVo),"u",BdU(A9j)],Fn,0,C,[Ky],0,3,0,Lc,["d",BdU(UJ),"N8",BdV(ASf),"PN",BdW(AZa),"Pc",BdW(AIV),"Lf",BdX(AFs),"Kz",BdV(AJZ),"MY",BdU(ADf),"jz",BdU(AFG),"Lq",BdU(APx),"xt",
BdV(AUd),"LZ",BdY(ADw),"CS",BdV(AGm),"xJ",BdV(ANI),"t6",BdV(AHg),"ha",BdV(AV2),"rL",BdV(AMH),"If",BdU(AH_),"J8",BdY(AW1),"dG",BdV(ALe),"GP",BdY(AZM),"Nx",function(b,c,d,e,f,g){AZR(this,b,c,d,e,f,g);},"Ek",function(b,c,d,e,f,g,h,i){AVj(this,b,c,d,e,f,g,h,i);},"d0",BdY(ANA),"ME",BdY(A4S),"jh",function(b,c,d,e,f){AKf(this,b,c,d,e,f);},"Kp",BdX(AGd)],GW,0,BH,[],0,3,0,A_K,0,Sh,0,C,[FE],0,0,0,0,["x7",BdY(A3H),"dT",BdV(AO6),"lw",BdV(AXN)],I0,0,T,[],0,0,0,0,["d",BdU(QU),"T",BdU(X4)],OR,0,DT,[],4,0,0,0,["d",BdU(AMY)]]);
$rt_metadata([OS,0,DT,[],4,0,0,0,["d",BdU(AZd),"Vm",BdU(Yb),"tB",BdU(AKF)],ZE,0,C,[],4,3,0,0,0,Kt,0,C,[D6],3,3,0,0,0,Nf,0,C,[D6,Mo,Kt,MD,KU,NW],3,3,0,0,0,JW,0,C,[],3,3,0,0,0,OO,0,C,[B7,Nf,JW,G9],1,3,0,0,["VA",BdW(AK1),"Wl",BdW(ALs),"Tr",BdV(ADG),"RN",BdX(AMZ),"QZ",BdV(AQZ),"Uz",BdU(AE1),"T0",BdX(ACs)],XN,0,C,[B1],0,3,0,0,["d",BdU(AKu),"z9",BdU(A2Y),"Hl",BdU(AJR),"Cq",BdU(A3W),"DF",BdV(A9g),"Ae",BdU(ASV)],OK,0,C,[],0,0,0,0,0,Cq,0,C,[B1],0,3,0,Cz,["d",BdU(SG),"cg",BdV(A9q),"D4",BdV(AEv),"FV",BdV(A7Z),"Hi",BdY(AYd),
"MD",function(b,c,d,e,f,g,h){return A4H(this,b,c,d,e,f,g,h);},"FN",BdX(AUV),"I5",function(b,c,d,e,f,g,h,i,j,k){return ARS(this,b,c,d,e,f,g,h,i,j,k);},"ho",BdV(ALM),"fn",BdU(AGw),"OA",BdU(A5c),"JP",BdY(ADW),"K_",BdY(A1Z),"yP",function(b,c,d,e,f,g){return A2z(this,b,c,d,e,f,g);},"Ic",BdX(AEX),"N$",BdW(AUF),"Pq",BdW(AG1),"BD",BdX(AX6),"uf",BdV(AEb),"KR",BdX(A0x),"u_",BdW(AUt),"Lo",BdV(AOv),"LX",BdU(A3m)],ABW,"NegativeArraySizeException",13,Bm,[],0,3,0,0,["d",BdU(A3L)],Zl,0,Eb,[],0,0,0,0,["ld",BdX(AYe),"e",BdX(ADr)],ZA,
0,T,[],0,0,0,0,["d",BdU(AD_),"T",BdU(AJe)],YW,0,C,[],0,0,0,0,["UW",BdW(AGf),"b",BdU(AKS)],Gn,"Timer",3,C,[],0,3,0,ED,["d",BdU(T3),"Fn",BdW(A7s),"FI",BdY(A7U),"Gv",BdU(ARl),"Me",BdW(APY),"HB",BdV(AM1)],Dp,"NumberFormatException",13,C0,[],0,3,0,0,["d",BdU(AUn),"ba",BdV(AKA)],W9,0,C,[Gh,Cx],0,3,0,0,["JS",BdW(AMc),"bC",BdU(A0g),"bz",BdU(AWi)],Vv,0,C,[],0,0,0,0,0,Rq,0,C7,[],0,3,0,0,["IA",BdX(A3$),"mZ",function(b,c,d,e,f,g,h){return AQH(this,b,c,d,e,f,g,h);}],AAd,0,Jf,[],0,3,0,0,["d",BdU(A0o),"Lu",BdW(ALn),"Lz",BdV(AKz),
"Mn",BdV(AJi)],Sd,0,T,[],0,0,0,0,["d",BdU(ALy),"T",BdU(AOt)],VA,0,C,[Cx],0,3,0,0,["S8",BdV(A4l),"JS",BdW(ABQ),"bY",BdU(AZC)],ZM,0,T,[],0,0,0,0,["d",BdU(ALX),"T",BdU(AST)],Y0,"IllegalStateException",13,B2,[],0,3,0,0,["d",BdU(A5W),"ba",BdV(A3E)],XU,0,C,[EF],0,3,0,0,["d",BdU(A9n),"fM",BdU(ANw),"dJ",BdY(AKo),"nQ",BdW(AKH)],Y$,0,C,[],0,3,0,0,["Wp",BdW(A7k)],N_,0,Gp,[],0,3,0,0,["d",BdU(Tj),"ET",BdV(A6z),"K2",BdV(ASk),"C$",BdV(AK5),"PD",BdV(AUs),"Az",BdV(AFE)],I7,0,BC,[],0,0,0,0,["nJ",BdV(AMQ),"Q",BdV(AVG),"e",BdX(ACp),
"cB",BdX(A32),"cF",BdY(AON),"u",BdU(A8y),"b_",BdV(AFY),"bb",BdV(A4a)],QO,0,Ed,[],0,0,0,0,["yw",BdY(A30),"e",BdX(A5M)],QP,0,Bt,[],4,0,0,0,["d",BdU(AF8),"e",BdX(A08),"bb",BdV(AZX),"u",BdU(ALS)],X0,0,C,[Ku],0,0,0,0,["Wm",BdV(ARk),"nA",BdV(A0s),"NH",BdV(ARQ)],Dy,0,C,[B1,HB],0,3,0,HN,["d",BdU(YL),"TS",BdX(QW),"I",BdX(A1i),"M",BdV(AF1),"fs",BdV(AP4),"Ar",BdX(AKe),"gb",BdV(AL4),"IU",BdX(APu),"eh",BdV(A5J),"H6",BdU(A9i),"tR",BdU(AFo),"Ge",BdV(AXx),"By",BdV(AHt),"bU",BdU(A9D),"x_",BdV(AQn),"ir",BdV(AWW),"Hg",BdX(A1N),
"kF",BdV(APi),"qF",BdV(AUi),"ri",BdW(AGa),"x1",BdU(A9x),"iU",BdW(AMu),"b",BdU(AEi),"by",BdU(A5Q),"z",BdV(AFX),"K4",BdU(AHy)],Gq,0,C,[B1,HB],0,3,0,ANk,["d",BdU(Rz),"SL",BdW(SQ),"k0",BdV(AVM),"il",BdW(AB5),"wC",BdV(ANz)],EU,0,C,[Kw],0,3,0,0,["P7",BdY(NS),"U8",BdX(Uy),"PR",BdW(GL),"ba",BdV(AP3),"Lc",BdX(ANc)],GG,0,C,[],0,3,0,0,["d",BdU(AIx),"my",BdW(TB),"iO",BdV(A0c),"b2",BdV(APm),"K",BdU(AXU),"GX",BdU(AMm),"NY",BdV(AMD),"tG",BdV(ADZ),"by",BdU(AKU),"z",BdV(A7q),"b",BdU(A0W)],HM,0,C,[J7,EY],0,3,0,0,["RB",BdW(AAp),
"e3",BdU(A1g),"Il",BdU(ALU),"qm",BdW(AEp),"uJ",BdU(A3n),"Lv",BdV(A1z),"NA",BdV(AJq)],H6,0,BH,[],0,3,0,Jm,["d",BdU(Js),"SZ",BdV(Rx),"PB",BdU(A3e),"by",BdU(AMk),"tU",BdU(A6b)],Db,0,GV,[],0,3,0,CN,["Qm",BdW(Wp),"SG",BdX(LH),"U6",function(b,c,d,e,f){Kd(this,b,c,d,e,f);},"S4",BdX(L8),"DO",BdU(AVH),"up",BdV(A1V),"z",BdV(A4v),"Ou",BdV(ARm),"CG",BdW(AFD),"yG",BdW(A8A),"be",BdU(ADa),"Hy",BdV(A0J),"Je",BdW(A1s)],Ko,0,DL,[],0,3,0,0,["d",BdU(A4m),"Jm",BdV(A0I),"GL",function(b,c,d,e,f,g){return A3k(this,b,c,d,e,f,g);},"Oi",
function(b,c,d,e,f,g,h,i,j,k,l,m){return A8d(this,b,c,d,e,f,g,h,i,j,k,l,m);},"HD",BdV(AJY)],WG,0,C,[M8],0,3,0,0,["d",BdU(AGB),"qm",BdW(A07)],LP,"IllegalAccessException",13,Di,[],0,3,0,0,["d",BdU(A6_)],Ur,0,GY,[],0,3,0,0,["Sv",BdV(ALv)],Z3,0,E1,[],0,3,0,0,["bk",BdV(AWa),"fR",BdU(AYm),"be",BdU(AV$)],Pu,0,C,[],4,3,0,0,["SQ",BdV(AQz),"Ba",BdU(Fz),"zU",BdV(Sy),"B6",BdV(ABS)],AA3,0,Fc,[],0,0,0,0,["Sx",function(b,c,d,e,f,g){A9h(this,b,c,d,e,f,g);},"u5",BdV(AHB),"qE",BdW(AZ$),"eQ",BdU(AWQ)],Dv,0,Bw,[],12,3,0,Ga,0,IT,
0,C,[],0,3,0,SK,0,YN,0,C,[],0,3,0,0,["d",BdU(AQK),"my",BdW(ZH),"cc",BdV(A1o),"K",BdU(AQ2),"NZ",BdV(AU3),"B_",BdV(AW7)],SP,0,C,[],4,3,0,0,0,UX,0,T,[],0,0,0,0,["d",BdU(AK7),"T",BdU(A77)],Q5,0,G8,[DI,B1],0,3,0,0,["AV",BdV(AY2),"d",BdU(AGr),"bk",BdV(Of),"mf",BdW(ABp),"W",BdV(AQE),"UB",BdV(YY),"UG",BdX(Kg),"WA",BdU(KF),"x",BdW(AMa),"Pd",BdW(AQh),"v_",BdX(ANY),"Ln",BdV(AYI),"oH",BdU(A4M),"H5",BdV(ALF),"Rd",BdV(R$)]]);
$rt_metadata([DA,0,Bw,[],12,3,0,R_,0,YO,0,Bt,[],0,0,0,0,["bk",BdV(AZj),"e",BdX(AMT),"bb",BdV(AYk),"u",BdU(ACY)],AAq,0,C,[],0,3,0,0,["d",BdU(ANM),"my",BdW(Tv),"zX",BdV(AV5),"F_",BdV(ADN),"xA",BdX(APA),"rp",BdX(AC7),"nW",BdV(AWx),"lL",BdW(ATn),"K",BdU(AUQ),"DE",BdV(AOD),"tH",BdV(AMl),"hT",BdV(AE$)],Dk,0,BH,[],0,3,0,Cw,0,Bh,0,C,[],0,3,0,BcH,0,Zh,0,GU,[],0,3,0,0,["Sd",BdY(AOc)],P1,0,D1,[],4,0,0,0,["d",BdU(A5H)],Ja,0,C,[],0,3,0,Bk,["R$",BdW(WK),"jB",BdU(ALY),"hS",BdU(A7c),"ml",BdU(A0L),"yY",BdU(AIf),"tI",BdU(AQN),
"i",BdU(AG9),"nD",BdU(AOJ)],P2,0,Ci,[],4,0,0,0,["d",BdU(AYa),"dk",BdW(A8N),"da",BdV(A6c)],V6,0,Cd,[],4,0,0,0,["d",BdU(A8o),"bh",BdY(API)],Lr,0,Bt,[],4,0,0,0,["bk",BdV(AAv),"e",BdX(A4n),"bb",BdV(AWh),"u",BdU(A1G)],V3,0,Cd,[],4,0,0,0,["d",BdU(ATk),"bh",BdY(AM6)],V5,0,Cd,[],4,0,0,0,["d",BdU(ACG),"bh",BdY(A6Q)],WV,0,HP,[],0,3,0,0,["d",BdU(A2h)],V1,0,Cd,[],4,0,0,0,["d",BdU(AQy),"bh",BdY(A2j)],V2,0,Cd,[],4,0,0,0,["d",BdU(AEj),"bh",BdY(ADj)],VZ,0,Cd,[],4,0,0,0,["d",BdU(AZb),"bh",BdY(A4s)],SW,0,C,[LD],4,3,0,0,["fL",
BdW(A8m),"f6",BdX(XM),"gT",BdU(AYB),"be",BdU(AIz),"gu",BdV(ADH)],V0,0,Cd,[],4,0,0,0,["d",BdU(AQG),"bh",BdY(ARj)],VX,0,V,[],4,0,0,0,["d",BdU(A2P),"bh",BdY(AEo)],F$,0,C,[],0,0,0,0,["dS",BdW(A63),"bV",BdU(A0O),"pz",BdV(AVZ),"Gy",BdV(AVB),"rX",BdU(AF3),"kS",BdU(ANO),"s4",BdU(AEy),"D",BdU(A49),"jf",BdU(AWq),"cJ",BdU(AUr),"GM",BdU(AG7),"b",BdU(AHC),"bO",BdU(AZE),"hk",BdU(ARF),"D3",BdU(AVb),"E3",BdU(A46),"dL",BdU(AEg)],VY,0,V,[],4,0,0,0,["d",BdU(AIN),"bh",BdY(AGx)],W7,0,T,[],0,0,0,0,["d",BdU(ARH),"T",BdU(ARa)],Ym,
0,I0,[],0,0,0,0,["d",BdU(AQV),"T",BdU(AUR)],WJ,0,CK,[],1,3,0,0,0,XA,0,C,[],0,3,0,0,0,Um,0,C,[MY],0,3,0,0,["Q1",BdV(A2a),"uc",BdV(AY8),"J6",BdV(ASh),"Ht",BdV(ALL),"xy",BdV(A3N),"zi",BdW(AJ0),"Oz",BdW(AI0),"D9",BdV(AMz),"vP",BdY(A8p),"Iw",BdV(ADR),"vj",BdV(A8a),"kL",BdV(AYT),"Jg",BdW(AVF),"ee",BdV(A1e),"wP",BdX(A88),"Mw",BdY(A3Y),"oT",BdV(ASo),"Ip",BdU(AYX),"Nk",BdW(AXF),"Gc",BdW(ASL),"ku",function(b,c,d,e,f,g,h,i,j){AIo(this,b,c,d,e,f,g,h,i,j);},"NO",BdX(A4y),"ov",BdY(AWc),"wV",BdW(AJ_),"c7",BdW(AM_),"I9",BdY(AX4),
"fu",BdY(AXo),"qa",BdY(ALz),"HG",BdV(AHi),"L0",BdU(AFF),"Nm",BdV(AZz),"xi",BdV(AOU),"NV",BdY(A4L),"Pj",BdV(AP_),"iW",BdU(AXJ),"wM",BdV(A3X),"Oy",BdY(AME),"OW",BdY(ACO),"CK",BdW(AHD),"LK",BdW(AKv),"p$",BdX(AIv),"zZ",BdV(AW_),"ML",BdX(A3V),"MU",BdV(A8M),"Ao",BdW(AFO),"Ky",BdV(ASU),"Po",BdW(AT_),"oc",BdX(AMW),"LV",BdW(AUq),"B3",BdW(ANq),"NI",BdX(AKJ),"Gu",BdY(AYi),"Fq",BdY(AWo),"F$",function(b,c,d,e,f){AC_(this,b,c,d,e,f);},"Ig",function(b,c,d,e,f){APp(this,b,c,d,e,f);},"xQ",function(b,c,d,e,f){AY5(this,b,c,d,
e,f);},"Jt",BdV(AZ2),"N7",function(b,c,d,e,f,g){A7T(this,b,c,d,e,f,g);}],W8,0,Fm,[],0,0,0,0,["fF",function(b,c,d,e,f,g){ADd(this,b,c,d,e,f,g);},"u5",BdV(A2X),"qE",BdW(AWE)]]);
function $rt_array(cls,data){this.bw=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["Can\'t enter monitor from another thread synchronously","<java_object>@","Constructor not found for class: ","Security violation occurred while getting constructor for class: \'","\'.","Security violation while getting constructor for class: ","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","String is null or empty","Illegal radix: ",
"<",":",">","JointSet","Replacement preconditions do not hold","Action must be non-null","Bullet","Disposing "," while it still has "," references.","(",",",")","btRigidBody","btVector3","main","\tat ","Caused by: ","Unsupported asset type ","Loading asset : ","Loading script : ","Task failed: ","Android","Desktop","HeadlessDesktop","Applet","WebGL","iOS","CI sequence: ","listener cannot be null.","loadFactor must be > 0 and < 1: ","objects cannot be null.","�","averageCharsPerByte must be positive. Actual value is ",
"maxCharsPerByte must be positive. Actual value is ","newAction must be non-null","CI back reference: ","UCI back reference: ","BIG_ENDIAN","LITTLE_ENDIAN","Pixmap","Custom","<DotAllQuant>","fSet","BehindFSet","range:"," ","^ ","<GroupQuant>","null","false","true","Index out of bounds","New position "," is outside of range [0;","]","New limit ","CLEAR","BLACK","WHITE","LIGHT_GRAY","GRAY","DARK_GRAY","BLUE","NAVY","ROYAL","SLATE","SKY","CYAN","TEAL","GREEN","CHARTREUSE","LIME","FOREST","OLIVE","YELLOW","GOLD",
"GOLDENROD","ORANGE","BROWN","TAN","FIREBRICK","RED","SCARLET","CORAL","SALMON","PINK","MAGENTA","PURPLE","VIOLET","MAROON","","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart",
"Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics",
"Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics",
"BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo",
"HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks",
"CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","FileType \'","\' not supported in Dragome backend","FILL","STROKE","decomposed char:","must be non-negative","Couldn\'t load image \'","\', file does not exist","rgba(","environmentCubemap","AheadFSet","NonCapJointSet",
"PosLookaheadJointSet","unable to provide a shader for this renderable","NegLookaheadJointSet","Already prepared","Call prepare() before calling getPixmap()","This TextureData implementation does not upload data itself","blended","0","<Quant>","Comparison method violates its general contract!","fromIndex(",") > toIndex(","canvas","charsetName is null","Should never been thrown","ErrorLoading: ","\n","i","b","a","Invalid assets description file.","PosBehindJointSet","sequence: ","US-ASCII","-2147483648","Bullet binaries version (",
") does not match source version (","scripts/bullet.js","UCI range:","GL_EXT_texture_filter_anisotropic","New data must have the same managed status as the old data","IGNORE","REPLACE","REPORT","mousedown","mouseup","mousemove","wheel","touchstart","touchmove","touchcancel","touchend","keydown","keypress","keyup","CSS1Compat","NegBehindJointSet","Index ","back reference: ","<DotQuant>","COPY","copy","DESTINATION_ATOP","destination-atop","DESTINATION_IN","destination-in","DESTINATION_OUT","destination-out","DESTINATION_OVER",
"destination-over","LIGHTER","lighter","SOURCE_ATOP","source-atop","SOURCE_IN","source-in","SOURCE_OUT","source-out","SOURCE_OVER","source-over","XOR","xor","\' Not supported in Dragome backend"," does not exist","UTF-8","Error reading file: ","/","\\","btDefaultMotionState","vertex shader must not be null","fragment shader must not be null","Fragment shader:\n","Vertex shader\n","An attempted fetch uniform from uncompiled shader \n","No uniform with name \'","\' in shader","Classpath","Internal","External",
"Absolute","Local","javaClass@","<init>","No buffer allocated!",".","CI ","Capacity is negative: ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","The last char in src "," is outside of string of size ","Start "," must be before end ","mtl","object cannot be null.","UTF-16","UTF-16BE","UTF-16LE","GL_ARB_framebuffer_object","GL_EXT_framebuffer_object","texture width and height must be square when using mipmapping.","The last short in src ","The last float in src ",
"<EOL>","UCI ","pointLights","start + count must be <= size: "," + "," <= ","index can\'t be >= size: "," >= ","index can\'t be > size: "," > ","end can\'t be >= size: ","start can\'t be > end: ","Array is empty.","additionalCapacity must be >= 0: ","newSize must be >= 0: ","[]",", ","ISO-8859-1","MirroredRepeat","ClampToEdge","Repeat","AtomicFSet","posFSet","Nearest","Linear","MipMap","MipMapNearestNearest","MipMapLinearNearest","MipMapNearestLinear","MipMapLinearLinear","<MultiLine $>","Class cannot be created (missing no-arg constructor): ",
"Unable to create new instance: ","depthStencil","VertexArray","VertexBufferObject","VertexBufferObjectSubData","VertexBufferObjectWithVAO","key cannot be null.","Patter is null","\\Q","\\E","\\\\E\\Q","Can\'t have more than 8191 sprites per batch: ","a_position","a_color","a_texCoord0","attribute vec4 a_position;\nattribute vec4 a_color;\nattribute vec2 a_texCoord0;\nuniform mat4 u_projTrans;\nvarying vec4 v_color;\nvarying vec2 v_texCoords;\n\nvoid main()\n{\n   v_color = a_color;\n   v_color.a = v_color.a * (255.0/254.0);\n   v_texCoords = a_texCoord0;\n   gl_Position =  u_projTrans * a_position;\n}\n",
"#ifdef GL_ES\n#define LOWP lowp\nprecision mediump float;\n#else\n#define LOWP \n#endif\nvarying LOWP vec4 v_color;\nvarying vec2 v_texCoords;\nuniform sampler2D u_texture;\nvoid main()\n{\n  gl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n}","Error compiling shader: ","SpriteBatch.end must be called before begin.","SpriteBatch.begin must be called before end.","SpriteBatch.begin must be called before draw.","u_projTrans","u_texture","Unmappable characters of length ","error","Cannot register an uniform after initialization",
"Already initialized","Malformed input of length ","None","SourceOver","NearestNeighbour","BiLinear","shininess","alphaTest","btDbvtBroadphase","texture cannot be null.","offset + length must be <= size: ","com/badlogic/gdx/utils/arial-15.fnt","com/badlogic/gdx/utils/arial-15.png","If no regions are specified, the font data must have an images path.","btBoxShape","Intensity","LuminanceAlpha","RGB565","RGBA4444","RGB888","RGBA8888","Invalid type specified","diffuseColor","specularColor","ambientColor","emissiveColor",
"reflectionColor","ambientLightColor","fogColor","The specified font must contain at least one texture page.","UCI sequence: ","CompositeRangeSet:  <nonsurrogate> "," <surrogate> ","FinalSet","<Empty set>","cullface","attributes must be >= 1","Call end() first.","Logical","Pixels","Could not remove child from its current parent","Cannot add a parent as a child","ground","ID: ","\nFPS: ","\nBullet Version: ","\nInputs: Space to un/freeze simulation\nHold Left/Right mouse to manipulate camera","Libgdx teaVM Backend + teaVM Bullet Extension by xpenatan",
"{","}","btSequentialImpulseConstraintSolver","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/","==","=","Mesh attempting to access memory outside of the index buffer (count: ",", offset: ",", max: ","capacity must be >= 0: ","The required capacity is too large: ","EOI","The last byte in dst ","The last byte in src ","^","Call end() first","Call begin() first","node","box","IndexBufferObject cannot be used after it has been disposed.","PreviousMatch","NonCapFSet","Either src or dest is null",
"java.version","1.8","os.name","TeaVM","file.separator","path.separator","line.separator","java.io.tmpdir","java.vm.version","user.home","/tmp","Already loaded.","File is empty.","padding=","Invalid padding.","Missing common header.","Invalid common header.","lineHeight=","Missing: lineHeight","base=","Missing: base","pages=","Missing additional page definitions.",".*id=(\\d+)",".*file=\"?([^\"]+)\"?","\\\\","Missing: file","Page IDs must be indices starting at 0: ","Invalid page id: ","kernings ","metrics ",
"char "," =","kerning ","Error loading font file: ","No glyphs found.","DotAll","decomposed Hangul syllable:",", #","Asset loaded: ","data:",";base64,","WordBoundary","a_normal","Cannot build mesh without position attribute","Mesh attributes don\'t match","Mesh can\'t hold enough vertices: "," * "," < ","Mesh can\'t hold enough indices: ","Too many vertices used","Incorrect primitive type","spotLights","Script loaded: ","data must be a ByteBuffer or FloatBuffer","Can\'t invert a singular matrix","The same task may not be scheduled twice.",
"#iterator() cannot be used nested.","<SOL>","java.runtime.name","Windows","OS X","no OS","Linux",".html","index.html","index-debug.html","assets/","assets.txt","scripts/soundmanager2-jsmin.js","directionalLights","com/badlogic/gdx/graphics/g3d/shaders/default.vertex.glsl","com/badlogic/gdx/graphics/g3d/shaders/default.fragment.glsl","u_dirLights[0].color","u_dirLights[0].direction","u_dirLights[1].color","u_pointLights[0].color","u_pointLights[0].position","u_pointLights[0].intensity","u_pointLights[1].color",
"u_spotLights[0].color","u_spotLights[0].position","u_spotLights[0].intensity","u_spotLights[0].direction","u_spotLights[0].cutoffAngle","u_spotLights[0].exponent","u_spotLights[1].color","u_fogColor","u_shadowMapProjViewTrans","u_shadowTexture","u_shadowPCFOffset","Some attributes not implemented yet (","too many bones: ",", max configured: ","u_time","#define positionFlag\n","#define colorFlag\n","#define binormalFlag\n","#define tangentFlag\n","#define normalFlag\n","#define lightingFlag\n","#define ambientCubemapFlag\n",
"#define numDirectionalLights ","#define numPointLights ","#define numSpotLights ","#define fogFlag\n","#define shadowMapFlag\n","#define environmentCubemapFlag\n","#define boneWeight","Flag\n","#define texCoord","#define blendedFlag\n","#define diffuseTextureFlag\n","#define diffuseTextureCoord texCoord0\n","#define specularTextureFlag\n","#define specularTextureCoord texCoord0\n","#define normalTextureFlag\n","#define normalTextureCoord texCoord0\n","#define emissiveTextureFlag\n","#define emissiveTextureCoord texCoord0\n",
"#define reflectionTextureFlag\n","#define reflectionTextureCoord texCoord0\n","#define ambientTextureFlag\n","#define ambientTextureCoord texCoord0\n","#define diffuseColorFlag\n","#define specularColorFlag\n","#define emissiveColorFlag\n","#define reflectionColorFlag\n","#define shininessFlag\n","#define alphaTestFlag\n","#define numBones ","Unknown material attribute: ","btCollisionDispatcher","Exception occurred in constructor for class: ","Illegal argument(s) supplied to constructor for class: ","Could not instantiate instance of class: ",
"IDLE","QUEUE_ASSETS_LOADED","INIT_SOUND","APP_CREATE","APP_READY","public","protected","private","abstract","static","final","transient","volatile","synchronized","native","strictfp","interface","Image","Audio","Text","t","Binary","Directory","<Unix MultiLine $>","diffuseTexture","specularTexture","bumpTexture","normalTexture","ambientTexture","emissiveTexture","reflectionTexture","u_viewTrans","u_projViewTrans","u_cameraPosition","u_cameraDirection","u_cameraUp","u_cameraNearFar","u_worldTrans","u_viewWorldTrans",
"u_projViewWorldTrans","u_normalMatrix","u_bones","u_shininess","u_opacity","u_diffuseColor","u_diffuseTexture","u_diffuseUVTransform","u_specularColor","u_specularTexture","u_specularUVTransform","u_emissiveColor","u_emissiveTexture","u_emissiveUVTransform","u_reflectionColor","u_reflectionTexture","u_reflectionUVTransform","u_normalTexture","u_normalUVTransform","u_ambientTexture","u_ambientUVTransform","u_alphaTest","u_ambientCubemap","u_dirLights","u_pointLights","u_spotLights","u_environmentCubemap","btDiscreteDynamicsWorld",
"btDefaultCollisionConfiguration","Illegal arguments","Is","In","glGetFloat not supported by Dragome WebGL backend","Can only cope with FloatBuffer and ShortBuffer at the moment","glGetFloat not supported by WebGL backend"]);
BL.prototype.toString=function(){return $rt_ustr(this);};
BL.prototype.valueOf=BL.prototype.toString;C.prototype.toString=function(){return $rt_ustr(Po(this));};
C.prototype.__teavm_class__=function(){return $dbg_class(this);};
var Long_eq;var Long_ne;var Long_gt;var Long_ge;var Long_lt;var Long_le;var Long_compare;var Long_add;var Long_sub;var Long_inc;var Long_dec;var Long_mul;var Long_div;var Long_rem;var Long_udiv;var Long_urem;var Long_neg;var Long_and;var Long_or;var Long_xor;var Long_shl;var Long_shr;var Long_shru;var Long_not;if(typeof BigInt!=='function'){Long_eq=function(a,b){return a.hi===b.hi&&a.lo===b.lo;};Long_ne=function(a,b){return a.hi!==b.hi||a.lo!==b.lo;};Long_gt=function(a,b){if(a.hi<b.hi){return false;}if(a.hi
>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);};Long_ge=function(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);};Long_lt=function(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);};Long_le=function(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y=b.lo
>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);};Long_add=function(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo+b.lo);}else if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)+Long_toNumber(b));}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo+b_lolo|0;var lohi=a_lohi+b_lohi+(lolo>>
16)|0;var hilo=a_hilo+b_hilo+(lohi>>16)|0;var hihi=a_hihi+b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Long_inc=function(a){var lo=a.lo+1|0;var hi=a.hi;if(lo===0){hi=hi+1|0;}return new Long(lo,hi);};Long_dec=function(a){var lo=a.lo -1|0;var hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new Long(lo,hi);};Long_neg=function(a){return Long_inc(new Long(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));};Long_sub=function(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo -
b.lo);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo -b_lolo|0;var lohi=a_lohi -b_lohi+(lolo>>16)|0;var hilo=a_hilo -b_hilo+(lohi>>16)|0;var hihi=a_hihi -b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Long_compare=function(a,b){var r=a.hi -b.hi;if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo
&1) -(b.lo&1);};Long_mul=function(a,b){var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=0;var lohi=0;var hilo=0;var hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi
|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;var result=new Long(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:Long_neg(result);};Long_div=function(a,b){if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)
/Long_toNumber(b));}return (Long_divRem(a,b))[0];};Long_udiv=function(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[0];};Long_rem=function(a,b){if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)%Long_toNumber(b));}return (Long_divRem(a,b))[1];};Long_urem=function(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)
/Long_toNumber(b));}return (Long_udivRem(a,b))[1];};function Long_divRem(a,b){if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return positive?[q,a]:[Long_neg(q),Long_neg(a)];}function Long_udivRem(a,b){if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}a
=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return [q,a];}function Long_shiftLeft16(a){return new Long(a.lo<<16,a.lo>>>16|a.hi<<16);}function Long_shiftRight16(a){return new Long(a.lo>>>16|a.hi<<16,a.hi>>>16);}Long_and=function(a,b){return new Long(a.lo&b.lo,a.hi&b.hi);};Long_or=function(a,b){return new Long(a.lo|b.lo,a.hi|b.hi);};Long_xor=function(a,b){return new Long(a.lo^b.lo,a.hi^b.hi);};Long_shl=function(a,b){b&=63;if(b===0){return a;}
else if(b<32){return new Long(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new Long(0,a.lo);}else {return new Long(0,a.lo<<b -32);}};Long_shr=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>b);}else if(b===32){return new Long(a.hi,a.hi>>31);}else {return new Long(a.hi>>b -32,a.hi>>31);}};Long_shru=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new Long(a.hi,0);}else {return new Long(a.hi
>>>b -32,0);}};Long_not=function(a){return new Long(~a.hi,~a.lo);};function LongInt(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}function LongInt_mul(a,b){var a_lolo=(a.lo&0xFFFF)*b|0;var a_lohi=(a.lo>>>16)*b|0;var a_hilo=(a.hi&0xFFFF)*b|0;var a_hihi=(a.hi>>>16)*b|0;var sup=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;}function LongInt_sub(a,b){var a_lolo
=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -b_hihi+(a_hilo>>16)|0;var sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_add(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=
a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;var sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_inc(a){a.lo=a.lo+1|0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}}function LongInt_dec(a){a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi
=== -1){a.sup=a.sup -1&0xFFFF;}}}function LongInt_ucompare(a,b){var r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function LongInt_numOfLeadingZeroBits(a){var n=0;var d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;}function LongInt_shl(a,b){if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if
(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}}function LongInt_shr(a,b){if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup
>>>b -64;a.hi=0;a.sup=0;}}function LongInt_copy(a){return new LongInt(a.lo,a.hi,a.sup);}function LongInt_div(a,b){var bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;var sz=1+(bits/16|0);var dividentBits=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);var q=new LongInt(0,0,0);while(sz-->0){LongInt_shl(q,16);var digitA=(a.hi>>>16)+0x10000*a.sup;var digitB=b.hi>>>16;var digit=digitA/digitB|0;var t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while
(LongInt_ucompare(t,a)>0){LongInt_sub(t,b); --digit;}}else {while(true){var nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,bits+16);return q;}}else {Long_eq=function(a,b){return a===b;};Long_ne=function(a,b){return a!==b;};Long_gt=function(a,b){return a>b;};Long_ge=function(a,b){return a>=b;};Long_lt=function(a,b){return a<b;};Long_le=function(a,b){return a<=b;};Long_add=function(a,b){return BigInt.asIntN(64,
a+b);};Long_inc=function(a){return BigInt.asIntN(64,a+1);};Long_dec=function(a){return BigInt.asIntN(64,a -1);};Long_neg=function(a){return BigInt.asIntN(64, -a);};Long_sub=function(a,b){return BigInt.asIntN(64,a -b);};Long_compare=function(a,b){return a<b? -1:a>b?1:0;};Long_mul=function(a,b){return BigInt.asIntN(64,a*b);};Long_div=function(a,b){return BigInt.asIntN(64,a/b);};Long_udiv=function(a,b){return BigInt.asIntN(64,BigInt.asUintN(64,a)/BigInt.asUintN(64,b));};Long_rem=function(a,b){return BigInt.asIntN(64,
a%b);};Long_urem=function(a,b){return BigInt.asIntN(64,BigInt.asUintN(64,a)%BigInt.asUintN(64,b));};Long_and=function(a,b){return BigInt.asIntN(64,a&b);};Long_or=function(a,b){return BigInt.asIntN(64,a|b);};Long_xor=function(a,b){return BigInt.asIntN(64,a^b);};Long_shl=function(a,b){return BigInt.asIntN(64,a<<BigInt(b&63));};Long_shr=function(a,b){return BigInt.asIntN(64,a>>BigInt(b&63));};Long_shru=function(a,b){return BigInt.asIntN(64,BigInt.asUintN(64,a)>>BigInt(b&63));};Long_not=function(a){return BigInt.asIntN(64,
~a);};}var Dx=Long_add;var D2=Long_sub;var CP=Long_mul;var E8=Long_div;var ATr=Long_rem;var BM=Long_or;var Bs=Long_and;var A__=Long_xor;var D4=Long_shl;var Ye=Long_shr;var CJ=Long_shru;var BlV=Long_compare;var Z=Long_eq;var Dr=Long_ne;var Ka=Long_lt;var Kb=Long_le;var Hc=Long_gt;var BlW=Long_ge;var BlX=Long_not;var A2b=Long_neg;
function TeaVMThread(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}TeaVMThread.prototype.push=function(){for(var i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};TeaVMThread.prototype.s=TeaVMThread.prototype.push;TeaVMThread.prototype.pop=function(){return this.stack.pop();};TeaVMThread.prototype.l=TeaVMThread.prototype.pop;TeaVMThread.prototype.isResuming=function(){return this.status===2;};TeaVMThread.prototype.isSuspending
=function(){return this.status===1;};TeaVMThread.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};TeaVMThread.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if($rt_currentNativeThread!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:function(result){if(result instanceof Error){throw result;}};this.run();};TeaVMThread.prototype.resume=function(){if($rt_currentNativeThread
!==null){throw new Error("Another thread is running");}this.status=2;this.run();};TeaVMThread.prototype.run=function(){$rt_currentNativeThread=this;var result;try {result=this.runner();}catch(e){result=e;}finally {$rt_currentNativeThread=null;}if(this.suspendCallback!==null){var self=this;var callback=this.suspendCallback;this.suspendCallback=null;callback(function(){self.resume();});}else if(this.status===0){this.completeCallback(result);}};function $rt_suspending(){var thread=$rt_nativeThread();return thread
!=null&&thread.isSuspending();}function $rt_resuming(){var thread=$rt_nativeThread();return thread!=null&&thread.isResuming();}function $rt_suspend(callback){var nativeThread=$rt_nativeThread();if(nativeThread===null){throw new Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);}function $rt_startThread(runner,callback){(new TeaVMThread(runner)).start(callback);}var $rt_currentNativeThread=null;function $rt_nativeThread(){return $rt_currentNativeThread;}function $rt_invalidPointer()
{throw new Error("Invalid recorded state");}main=$rt_mainStarter(Bc4);
main.javaException=$rt_javaException;
(function(){var c;c=V_.prototype;c.setWorldTransformJS=c.VT;c=Wa.prototype;c.getWorldTransformJS=c.Uv;c=Tu.prototype;c.handleEvent=c.lw;c=OQ.prototype;c.onready=c.SF;c.ontimeout=c.P8;c=Vc.prototype;c.onTimer=c.Rz;c=Ps.prototype;c.handleEvent=c.lw;c=Qq.prototype;c.getLength=c.V8;c.get=c.SY;c=RN.prototype;c.onAnimationFrame=c.RO;c=Sc.prototype;c.handleEvent=c.lw;c=Sa.prototype;c.handleEvent=c.lw;c=Si.prototype;c.handleEvent=c.lw;c=Sh.prototype;c.handleEvent=c.lw;c=OO.prototype;c.dispatchEvent=c.QZ;c.addEventListener
=c.VA;c.removeEventListener=c.Wl;c.getLength=c.Uz;c.get=c.Tr;c.addEventListener=c.T0;c.removeEventListener=c.RN;})();
})();
