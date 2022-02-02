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
{if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.e6=f;}
function $rt_cls(cls){return Nf(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Oo(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.X.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return BqY;}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(Kr());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return DY();}
function $rt_setThread(t){return JH(t);}
function $rt_createException(message){return Tu(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var G=$rt_throw;var Cl=$rt_compare;var BqZ=$rt_nullCheck;var E=$rt_cls;var Y=$rt_createArray;var AZc=$rt_isInstance;var BeP=$rt_nativeThread;var Bog=$rt_suspending;var Bon=$rt_resuming;var Bna=$rt_invalidPointer;var B=$rt_s;var L=$rt_eraseClinit;var Cp=$rt_imul;var T=$rt_wrapException;var Bq0=$rt_checkBounds;var Bq1=$rt_checkUpperBound;var Bq2=$rt_checkLowerBound;var Bq3=$rt_wrapFunction0;var Bq4=$rt_wrapFunction1;var Bq5=$rt_wrapFunction2;var Bq6=$rt_wrapFunction3;var Bq7=$rt_wrapFunction4;var D=$rt_classWithoutFields;var I
=$rt_createArrayFromData;var KP=$rt_createCharArrayFromData;var Bq8=$rt_createByteArrayFromData;var Bq9=$rt_createShortArrayFromData;var OO=$rt_createIntArrayFromData;var Bq$=$rt_createBooleanArrayFromData;var BmI=$rt_createFloatArrayFromData;var Bq_=$rt_createDoubleArrayFromData;var A52=$rt_createLongArrayFromData;var Rf=$rt_createBooleanArray;var Cy=$rt_createByteArray;var O_=$rt_createShortArray;var B$=$rt_createCharArray;var Be=$rt_createIntArray;var Bqr=$rt_createLongArray;var B5=$rt_createFloatArray;var Bra
=$rt_createDoubleArray;var Cl=$rt_compare;var Brb=$rt_castToClass;var Brc=$rt_castToInterface;var U_=Long_toNumber;var N=Long_fromInt;var Brd=Long_fromNumber;var Cs=Long_create;var X=Long_ZERO;var Bre=Long_hi;var V=Long_lo;
function C(){this.bB=null;this.$id$=0;}
function TG(){var a=new C();J(a);return a;}
function E_(b){var c;if(b.bB===null)PP(b);if(b.bB.cK===null)b.bB.cK=DY();else if(b.bB.cK!==DY())G(C8(B(0)));c=b.bB;c.c5=c.c5+1|0;}
function Cw(b){var c,d;if(!FH(b)&&b.bB.cK===DY()){c=b.bB;d=c.c5-1|0;c.c5=d;if(!d)b.bB.cK=null;FH(b);return;}G(AYe());}
function BlJ(b){AQ4(b,1);}
function AQ4(b,c){var d,$p,$z;$p=0;if(Bon()){var $T=BeP();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.bB===null)PP(b);if(b.bB.cK===null)b.bB.cK=DY();if(b.bB.cK===DY()){d=b.bB;d.c5=d.c5+c|0;return;}$p=1;case 1:ASX(b,c);if(Bog()){break _;}return;default:Bna();}}BeP().s(b,c,d,$p);}
function PP(b){b.bB=BkZ();}
function ASX(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.op=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.S2=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=Blc(callback);return thread.suspend(function(){try{BoM(b,c,callback);}catch($e){callback.S2($rt_exception($e));}});}
function BoM(b,c,d){var e,f,g;e=DY();if(b.bB===null){PP(b);JH(e);f=b.bB;f.c5=f.c5+c|0;d.op(null);return;}if(b.bB.cK===null){b.bB.cK=e;JH(e);f=b.bB;f.c5=f.c5+c|0;d.op(null);return;}g=b.bB;if(g.eb===null)g.eb=AKn();BaF(g.eb,BmK(e,b,c,d));}
function Bpo(b){AKR(b,1);}
function AKR(b,c){var d;if(!FH(b)&&b.bB.cK===DY()){d=b.bB;d.c5=d.c5-c|0;if(d.c5>0)return;d.cK=null;if(d.eb!==null&&!JO(d.eb))AUm(Bkm(b));else FH(b);return;}G(AYe());}
function AYC(b){var c,d,e;if(!FH(b)&&b.bB.cK===null){c=b.bB;if(c.eb!==null&&!JO(c.eb)){d=c.eb;e=Bcv(d);c.eb=null;e.ft();}return;}}
function FH(a){var b,c;b=a.bB;if(b===null)return 1;a:{b:{if(b.cK===null){if(b.eb!==null){c=b.eb;if(!JO(c))break b;}if(b.z7===null)break a;c=b.z7;if(JO(c))break a;}}return 0;}AJp(a);return 1;}
function AJp(a){a.bB=null;}
function J(a){}
function Co(a){return Nf(a.constructor);}
function O1(a){return J9(a);}
function AUx(a,b){return a!==b?0:1;}
function S2(a){return (((H()).a(B(1))).a(Re(J9(a)))).b();}
function J9(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function ATv(a){var b,c,d;if(!AZc(a,Em)){b=a;if(b.constructor.$meta.item===null)G(Blv());}c=AKC(a);b=c;d=$rt_nextId();b.$id$=d;return c;}
function A_f(b){AYC(b);}
function AU1(b,c,d,e){var f;JH(b);c.bB.cK=b;f=c.bB;f.c5=f.c5+d|0;e.op(null);}
function U(){var a=this;C.call(a);a.s8=null;a.r2=null;}
function Bv(a){J(a);}
function Bd_(a,b){if(!b&&a.s8===null)a.s8=a.Z();else if(b&&a.r2===null)a.r2=(a.Z()).gm(1);if(b)return a.r2;return a.s8;}
var VD=D(U);
function BjT(){var a=new VD();BeI(a);return a;}
function BeI(a){Bv(a);}
function A6$(a){return ((Dc()).cO(32)).cO(9);}
var TJ=D(U);
function Bko(){var a=new TJ();Bhs(a);return a;}
function Bhs(a){Bv(a);}
function AUD(a){return ((Dc()).bK(0,31)).cO(127);}
var EQ=D();
var K3=D(0);
var H4=D(EQ);
var Brf=null;function Brg(){Brg=L(H4);AR9();}
function AR9(){Brf=BB();}
var ID=D(0);
var Cn=D(H4);
var CC=D(Cn);
var Brh=null;var Bri=null;var Brj=null;var Brk=null;var Brl=null;var Brm=null;var Brn=null;var Bro=null;function Brp(){Brp=L(CC);BeT();}
function BeT(){Brh=CD(0.0,0.0,1.0,1.0);Bri=CD(1.0,0.0,0.0,1.0);Brj=CD(0.0,1.0,0.0,1.0);Brk=BnR();Brl=Bjj();Brm=Bnj();Brn=BkK();Bro=Boi();}
var R=D();
var Brq=null;var Brr=null;var Brs=null;var Brt=null;var Bru=null;var Brv=null;var Brw=null;var Brx=null;var Bry=null;var Brz=null;var BrA=null;var BrB=null;var BrC=null;var BrD=null;var BrE=null;var BrF=null;var BrG=null;var BrH=null;var BrI=null;var BrJ=null;var BrK=null;var BrL=null;var BrM=null;var BrN=null;var BrO=null;var BrP=null;var BrQ=null;var BrR=null;var BrS=null;var BrT=null;var BrU=null;var BrV=null;var BrW=null;var BrX=null;var BrY=null;var BrZ=null;var Br0=null;var Br1=null;var Br2=null;var Br3
=null;var Br4=null;var Br5=null;var Br6=null;var Br7=null;function Bmr(){Bmr=L(R);A5j();}
function B6(a){Bmr();J(a);}
function A5j(){Brq=Bno();Brr=Bjl();Brs=Boz();Brt=BjZ();Bru=Brt;Brv=Ly(2);Brw=P4(2);Brx=Brw;Bry=Q0(2);Brz=Bry;BrA=Bmi();BrB=Bki();BrC=Ly(3);BrD=P4(3);BrE=Q0(3);BrF=BoK();BrG=BpO();BrH=Ly(4);BrI=P4(4);BrJ=Q0(4);BrK=Ly(5);BrL=P4(5);BrM=Q0(5);BrN=BqV();BrO=Bjz();BrP=Bnk();BrQ=A6l(2.0,10.0);BrR=A8l(2.0,10.0);BrS=AVD(2.0,10.0);BrT=A6l(2.0,5.0);BrU=A8l(2.0,5.0);BrV=AVD(2.0,5.0);BrW=BkH();BrX=Bof();BrY=BpW();BrZ=Bl3(2.0,10.0,7,1.0);Br0=Bn3(2.0,10.0,6,1.0);Br1=Bpk(2.0,10.0,7,1.0);Br2=BkD(1.5);Br3=BqD(2.0);Br4=Bo7(2.0);Br5
=BkN(4);Br6=Bls(4);Br7=BnW(4);}
function G0(){var a=this;R.call(a);a.cL=null;a.dL=null;}
function BnW(a){var b=new G0();Mv(b,a);return b;}
function Mv(a,b){var c;B6(a);if(b>=2&&b<=5){a:{a.cL=B5(b);a.dL=B5(b);a.dL.data[0]=1.0;switch(b){case 2:break;case 3:a.cL.data[0]=0.4000000059604645;a.cL.data[1]=0.4000000059604645;a.cL.data[2]=0.20000000298023224;a.dL.data[1]=0.33000001311302185;a.dL.data[2]=0.10000000149011612;break a;case 4:a.cL.data[0]=0.3400000035762787;a.cL.data[1]=0.3400000035762787;a.cL.data[2]=0.20000000298023224;a.cL.data[3]=0.15000000596046448;a.dL.data[1]=0.25999999046325684;a.dL.data[2]=0.10999999940395355;a.dL.data[3]=0.029999999329447746;break a;case 5:a.cL.data[0]
=0.30000001192092896;a.cL.data[1]=0.30000001192092896;a.cL.data[2]=0.20000000298023224;a.cL.data[3]=0.10000000149011612;a.cL.data[4]=0.10000000149011612;a.dL.data[1]=0.44999998807907104;a.dL.data[2]=0.30000001192092896;a.dL.data[3]=0.15000000596046448;a.dL.data[4]=0.05999999865889549;break a;default:break a;}a.cL.data[0]=0.6000000238418579;a.cL.data[1]=0.4000000059604645;a.dL.data[1]=0.33000001311302185;}c=a.cL.data;c[0]=c[0]*2.0;return;}G(Z((((H()).a(B(2))).h(b)).b()));}
function AA_(){var a=this;C.call(a);a.qZ=null;a.u2=null;a.AW=0;a.BC=0;}
function Bpm(a,b){var c=new AA_();AZe(c,a,b);return c;}
function AZe(a,b,c){J(a);a.qZ=b;a.u2=c;}
function APm(a){return Cq(a.qZ);}
function Bhz(a,b){return Bf(a.qZ)<b?0:1;}
function AQL(a){return Cq(a.u2);}
function Be3(a,b){return Bf(a.u2)<b?0:1;}
function A8W(a,b){a.AW=b;}
function Bjf(a,b){a.BC=b;}
var Vd=D();
var ABB=D();
function Bje(b){var c,d;c=b.Pk();d=c.data;if(d.length<=0)return null;return SO(d[0]);}
function AVz(b,c){var d,e,f,$$je;if(c!==null&&c.data.length){a:{b:{try{d=b.JO(c);e=SO(d);}catch($$e){$$je=T($$e);if($$je instanceof IE){f=$$je;break a;}else if($$je instanceof KL){f=$$je;break b;}else{throw $$e;}}return e;}G(Fp((((H()).a(B(3))).a(b.x())).b(),f));}G(Fp(((((H()).a(B(4))).a(b.x())).a(B(5))).b(),f));}return Bje(b);}
function A7T(b,c){var d,e,f,$$je;a:{try{d=b.IT(c);e=SO(d);}catch($$e){$$je=T($$e);if($$je instanceof IE){f=$$je;break a;}else if($$je instanceof KL){f=$$je;G(Fp((((H()).a(B(3))).a(b.x())).b(),f));}else{throw $$e;}}return e;}G(Fp((((H()).a(B(6))).a(b.x())).b(),f));}
var JU=D(0);
var EE=D();
var BI=D(0);
var EF=D();
function Q6(a){J(a);}
var Cm=D(0);
function EG(){EF.call(this);this.jA=0;}
var Br8=null;var Br9=null;function Dl(){Dl=L(EG);Be_();}
function AIy(a){var b=new EG();IS(b,a);return b;}
function IS(a,b){Dl();Q6(a);a.jA=b;}
function ACP(b,c){Dl();if(!(c>=2&&c<=36))c=10;return ((BqC(20)).CF(b,c)).b();}
function AIC(b){Dl();return b>>>4^b<<28^b<<8^b>>>24;}
function Re(b){Dl();return AKF(b,4);}
function P$(b){Dl();return ACP(b,10);}
function DZ(b,c){var d,e,f,g,h;Dl();if(c>=2&&c<=36){if(b!==null&&!b.bS()){a:{d=0;e=0;switch(b.g(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==b.k())G(EU());while(e<b.k()){g=e+1|0;h=PN(b.g(e));if(h<0)G(Eg((((H()).a(B(7))).a(b)).b()));if(h>=c)G(Eg((((((H()).a(B(8))).h(c)).a(B(9))).a(b)).b()));f=Cp(c,f)+h|0;if(f<0){if(g==b.k()&&f==(-2147483648)&&d)return (-2147483648);G(Eg((((H()).a(B(10))).a(b)).b()));}e=g;}if(d)f= -f|0;return f;}G(Eg(B(11)));}G(Eg((((H()).a(B(12))).h(c)).b()));}
function B7(b){Dl();return DZ(b,10);}
function Bl(b){Dl();if(b>=(-128)&&b<=127){ABf();return Br9.data[b+128|0];}return AIy(b);}
function ABf(){var b;Dl();a:{if(Br9===null){Br9=Y(EG,256);b=0;while(true){if(b>=Br9.data.length)break a;Br9.data[b]=AIy(b-128|0);b=b+1|0;}}}}
function A4q(a){return a.jA;}
function A0H(a){return P$(a.jA);}
function A22(a){return AIC(a.jA);}
function Bia(a,b){if(a===b)return 1;return b instanceof EG&&b.jA==a.jA?1:0;}
function OF(b){var c,d,e;Dl();if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;e=d>>>8;if(!e)e=d;else c=c|8;d=e>>>4;if(!d)d=e;else c=c|4;e=d>>>2;if(!e)e=d;else c=c|2;if(e>>>1)c=c|1;return (32-c|0)-1|0;}
function F4(b){var c,d,e;Dl();if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;e=d<<8;if(!e)e=d;else c=c|8;d=e<<4;if(!d)d=e;else c=c|4;e=d<<2;if(!e)e=d;else c=c|2;if(e<<1)c=c|1;return (32-c|0)-1|0;}
function ADN(b,c){var d;Dl();d=c&31;return b<<d|b>>>(32-d|0);}
function Be_(){Br8=E($rt_intcls());}
var NO=D();
var B_=D(0);
var D$=D(0);
var GE=D(0);
var ET=D();
var Ci=D(ET);
var GW=D(Ci);
function Jn(){var a=this;C.call(a);a.Pg=null;a.r$=null;a.z9=0.0;a.B_=0.0;a.tb=null;a.sk=null;a.h9=0;}
function AJf(a,b,c,d,e){J(a);DJ();a.tb=Br$;a.sk=Br$;UU(a,e);a.Pg=b;a.r$=e.e6();a.z9=c;a.B_=d;}
function AD4(a,b,c,d){var e;e=Cy(1);e.data[0]=63;AJf(a,b,c,d,e);}
function UU(a,b){var c;if(b!==null){c=b.data.length;if(c&&c>=a.B_)return;}G(Z(B(13)));}
function M0(a,b){if(b!==null){a.tb=b;a.ws(b);return a;}G(Z(B(14)));}
function A1x(a,b){}
function NY(a,b){if(b!==null){a.sk=b;a.rI(b);return a;}G(Z(B(14)));}
function A$n(a,b){}
function Kk(a,b,c,d){var e,f,g,h,$$je;a:{if(a.h9!=3){if(d)break a;if(a.h9!=2)break a;}G(If());}a.h9=!d?1:2;while(true){try{e=a.S9(b,c);}catch($$e){$$je=T($$e);if($$je instanceof Bt){f=$$je;G(A7e(f));}else{throw $$e;}}if(e.j8()){if(!d)return e;g=Bf(b);if(g<=0)return e;e=B8(g);}else if(e.ip())break;h=!e.u5()?a.tb:a.sk;b:{DJ();if(h!==Br_){if(h===Bsa)break b;else return e;}if(Bf(c)<a.r$.data.length)return Bsb;ADP(c,a.r$);}b.pw(Ck(b)+e.k()|0);}return e;}
function ADh(a,b){var c,d,e;if(!Bf(b))return Vv(0);RB(a);c=Vv(Bf(b)*a.z9|0);while(true){d=Kk(a,b,c,0);Bq();if(d===Bsc)break;if(d===Bsb){c=LP(a,c);continue;}if(!d.m8())continue;d.os();}e=Kk(a,b,c,1);if(e.m8())e.os();while(true){e=LD(a,c);if(e.j8())break;if(!e.ip())continue;c=LP(a,c);}Lk(c);return c;}
function LP(a,b){var c,d,e;c=I_(b);d=c.data;d=QS(c,d.length*2|0);e=IV(d);e.gh(Ck(b));return e;}
function LD(a,b){var c;if(a.h9!=2&&a.h9!=4)G(If());c=a.OQ(b);Bq();if(c===Bsc)a.h9=3;return c;}
function Baw(a,b){Bq();return Bsc;}
function RB(a){a.h9=0;a.v4();return a;}
function AWh(a){}
function DQ(){var a=this;Jn.call(a);a.D4=null;a.xz=null;}
function HX(a,b,c,d){AD4(a,b,c,d);a.D4=B$(512);a.xz=Cy(512);}
function AMd(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.D4;e=0;f=0;g=a.xz;a:{while(true){if((e+32|0)>f&&Cq(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Bw(Bf(b)+j|0,i.length);b.sb(d,j,f-j|0);e=0;}if(!Cq(c)){if(!Cq(b)&&e>=f){Bq();k=Bsc;}else{Bq();k=Bsb;}break a;}i=g.data;l=0;m=Bw(Bf(c),i.length);n=Bpm(b,c);k=a.nv(d,e,f,g,l,m,n);e=n.AW;j=n.BC;if(k===null){if(!Cq(b)&&e>=f){Bq();k=Bsc;}else if(!Cq(c)&&e>=f){Bq();k=Bsb;}}c.yk(g,0,j);if(k!==null)break;}}b.pw(Ck(b)-(f-e|0)|0);return k;}
function ACM(){var a=this;DQ.call(a);a.uP=0;a.sl=0;}
function Bnc(a,b,c){var d=new ACM();Bc6(d,a,b,c);return d;}
function Bc6(a,b,c,d){HX(a,b,2.0,4.0);a.uP=c;a.sl=d;}
function Bed(a,b,c,d,e,f,g,h){var i,j,k;if(a.uP){if((f+2|0)>g){if(h.OE())i=null;else{Bq();i=Bsb;}return i;}a.uP=0;if(!a.sl){j=e.data;k=f+1|0;j[f]=(-2);f=k+1|0;j[k]=(-1);}else{j=e.data;k=f+1|0;j[f]=(-1);f=k+1|0;j[k]=(-2);}}return !a.sl?Sx(a,b,c,d,e,f,g,h):ABd(a,b,c,d,e,f,g,h);}
function ABd(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c];if(!Cb(l)){if(BU(l)){c=k+(-1)|0;i=B8(1);break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.eu(2))break a;Bq();i=Bsb;break a;}j=e.data;m=f+1|0;j[f]=(l&255)<<24>>24;f=m+1|0;j[m]=l>>8<<24>>24;c=k;}else{if(k==d){c=k+(-1)|0;if(h.d2(2))break a;Bq();i=Bsc;break a;}c=k+1|0;n=j[k];if(!BU(n)){c=c+(-2)|0;i=B8(1);break a;}if((f+4|0)>g){c=c+(-2)|0;if(h.eu(4))break a;Bq();i=Bsb;break a;}j=e.data;m=f+1|0;j[f]=(l&255)<<24>>24;o
=m+1|0;j[m]=l>>8<<24>>24;m=o+1|0;j[o]=(n&255)<<24>>24;f=m+1|0;j[m]=n>>8<<24>>24;}}}h.eB(c);h.d6(f);return i;}
function Sx(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c];if(!Cb(l)){if(BU(l)){c=k+(-1)|0;i=B8(1);break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.eu(2))break a;Bq();i=Bsb;break a;}j=e.data;m=f+1|0;j[f]=l>>8<<24>>24;f=m+1|0;j[m]=(l&255)<<24>>24;c=k;}else{if(k==d){c=k+(-1)|0;if(h.d2(2))break a;Bq();i=Bsc;break a;}c=k+1|0;n=j[k];if(!BU(n)){c=c+(-2)|0;i=B8(1);break a;}if((f+4|0)>g){c=c+(-2)|0;if(h.eu(4))break a;Bq();i=Bsb;break a;}j=e.data;m=f+1|0;j[f]=l>>8<<24>>24;o=m+1
|0;j[m]=(l&255)<<24>>24;m=o+1|0;j[o]=n>>8<<24>>24;f=m+1|0;j[m]=(n&255)<<24>>24;}}}h.eB(c);h.d6(f);return i;}
function BF(){var a=this;C.call(a);a.br=X;a.nt=0;a.OG=0;a.N8=null;a.Bt=0;}
function BS(a){J(a);}
function AXW(a,b,c){a.nt=c;a.br=b;}
function ARb(a,b){if(!a.nt)a.br=b;}
function AKf(a,b){return b instanceof BF&&Bb(b.br,a.br)?1:0;}
function Bcj(a){return V(a.br);}
function A5k(a){return a.br;}
function ASp(a){if(a.Bt>0){Np();if(Bsd&&Bse)Bsf.rp(B(15),((((((H()).a(B(16))).a(a.b())).a(B(17))).h(a.Bt)).a(B(18))).b());}if(a.nt){a.OG=1;a.LH();a.br=X;}}
function A3V(a){return (((((((H()).a(a.N8)).a(B(19))).uY(a.br)).a(B(20))).Mh(a.nt)).a(B(21))).b();}
var FM=D(BF);
var Bsg=null;var Bsh=null;function Mn(){Mn=L(FM);ALt();}
function BpG(a){var b=new FM();O0(b,a);return b;}
function BpR(a){var b=new FM();ACS(b,a);return b;}
function Bsi(){var a=new FM();NM(a);return a;}
function BcC(a){var b,c;b=R8(V(a.br));c=N(b);return c;}
function O0(a,b){Mn();BS(a);a.c1(N(b),0);}
function AWR(a,b){var c,d;c=V(a.br);d=V(b);AG4(c,d);}
function ACS(a,b){Mn();BS(a);}
function NM(a){Mn();BS(a);}
function A0B(a,b){Wb(V(a.br),b);}
function ALt(){Bsg=BpR(0);Bsh=BpG(0);}
function AG4(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btCollisionObject);jsObj.setUserPointer(c);}
function R8(b){var jsObj=Bullet.wrapPointer(b,Bullet.btCollisionObject);var intPointer=jsObj.getUserPointer();return intPointer;}
function Wb(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btCollisionObject);jsObj.setRestitution(c);}
var QQ=D(FM);
var Bsj=null;function AZH(){AZH=L(QQ);A1i();}
function BqB(a,b,c,d){var e=new QQ();WE(e,a,b,c,d);return e;}
function Bk7(a){var b=new QQ();AIT(b,a);return b;}
function WE(a,b,c,d,e){var f,g,h,i,j,k;AZH();O0(a,0);f=BjC();if(e===null)e=Bsk.CK();D5(e,f);g=c===null?X:c.b2();h=d===null?X:d.b2();i=V(g);j=V(h);k=V((f.b2()));a.c1(N(AIQ(b,i,j,k)),1);}
function ARQ(a){Te(V(a.br));}
function AIT(a,b){AZH();NM(a);}
function A1i(){Bsj=Bk7(0);}
function AIQ(b,c,d,e){var motionStateJSObj=Bullet.wrapPointer(c,Bullet.btMotionState);var collisionShapeJSObj=Bullet.wrapPointer(d,Bullet.btCollisionShape);var localInertiaJSObj=Bullet.wrapPointer(e,Bullet.btVector3);var jsObj=new Bullet.btRigidBody(b,motionStateJSObj,collisionShapeJSObj,localInertiaJSObj);return Bullet.getPointer(jsObj);}
function Te(b){var jsObj=Bullet.wrapPointer(b,Bullet.btRigidBody);Bullet.destroy(jsObj);}
var DK=D(BF);
var Bsl=null;var Bsm=null;var Bsn=null;var Bso=null;var Bsp=null;var Bsq=null;var Bsr=null;var Bss=null;function JG(){JG=L(DK);A0I();}
function GL(a){var b=new DK();AHq(b,a);return b;}
function AHq(a,b){JG();BS(a);a.c1(!b?X:N(VI()),b);}
function AZo(a,b){ADT(V(a.br),b.data);}
function A1c(a,b){AH0(V(a.br),b.data);}
function ADG(b,c){JG();c.St(b.c);}
function ADC(b,c){JG();b.Nq(c.c);}
function ADg(b,c){JG();Bsr.lt(c);ADG(b,Bsr);}
function RZ(b,c){JG();Bsr.lt(b);ADC(Bsr,c);}
function A0I(){Bsl=GL(0);Bsm=GL(1);Bsn=GL(1);Bso=GL(1);Bsp=GL(1);Bsq=GL(1);Bsr=GL(0);Bss=BH();}
function VI(){var jsObj=new Bullet.btTransform();return Bullet.getPointer(jsObj);}
function ADT(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btTransform);jsObj.setFromOpenGLMatrix(c);}
function AH0(b,c){var worldTrans=Bullet.wrapPointer(b,Bullet.btTransform);var origin=worldTrans.getOrigin();var matrix3x3=worldTrans.getBasis();var row0=matrix3x3.getRow(0);var row1=matrix3x3.getRow(1);var row2=matrix3x3.getRow(2);c[0]=row0.x();c[1]=row1.x();c[2]=row2.x();c[3]=0;c[4]=row0.y();c[5]=row1.y();c[6]=row2.y();c[7]=0;c[8]=row0.z();c[9]=row1.z();c[10]=row2.z();c[11]=0;c[12]=origin.x();c[13]=origin.y();c[14]=origin.z();c[15]=1.0;}
var KX=D(U);
function Bqs(){var a=new KX();To(a);return a;}
function To(a){Bv(a);}
function Td(a){return ((Dc()).bK(97,122)).bK(65,90);}
var Fc=D();
var Bst=0;var Bsu=0;var Bsv=0;var Bsw=0;var Bsx=0;function Bsy(){Bsy=L(Fc);BhH();}
function BhH(){Bst=(Iy(B(22))).mx(B(23));Bsu=!Bst&&(Iy(B(24))).mx(B(25))?1:0;Bsv=!Bst&&(Iy(B(24))).mx(B(26))?1:0;Bsw=!Bst&&(Iy(B(24))).mx(B(27))?1:0;Bsx=!Bst&&!Bsv&&!Bsw&&!Bsu?1:0;}
var De=D(0);
var BL=D();
var DX=D(BL);
var U0=D(DX);
var BD=D();
var Bsz=null;var BsA=null;var BsB=null;var BsC=null;var BsD=null;var BsE=null;var BsF=null;var BsG=null;var BsH=null;var BsI=null;var BsJ=null;var BsK=null;var BsL=null;var BsM=null;var BsN=null;var BsO=null;var BsP=null;var BsQ=null;var BsR=null;var BsS=null;var BsT=null;var BsU=null;var BsV=null;var BsW=null;var BsX=null;var BsY=null;var BsZ=null;var Bs0=null;var Bs1=null;function BlN(){BlN=L(BD);A_Y();}
function A_Y(){Bsz=BmC();BsA=BnT();BsB=Bjo();BsC=BnK();BsD=BqK();BsE=Bp6();BsF=Bkp();BsG=BlO();BsH=Blx();BsI=Bob();BsJ=Bmm();BsK=BlQ();BsL=BkO();BsM=Bo9();BsN=Bpa();BsO=Bpc();BsP=Boo();BsQ=Bkd();BsR=Bmu();BsS=Bqm();BsT=Bpr();BsU=BkT();BsV=Blq();BsW=Bln();BsX=BlK();BsY=BoH();BsZ=BpT();Bs0=BqL();Bs1=Bj$();}
var NQ=D(0);
function AFM(){var a=this;C.call(a);a.km=null;a.lN=0;a.Sl=0;a.k4=0;}
function Bn1(a){var b=new AFM();AJ$(b,a);return b;}
function AJ$(a,b){J(a);a.Sl=1;a.k4=1;a.km=b;}
function Bgn(a){return 0;}
function A4a(a){var b,c,d;b=a.km.hO();c=b.PU();d=$rt_str(c.href);return d;}
function ARd(a){return a.lN;}
function AXo(a){a.lN=a.lN-1|0;}
function A44(a){a.lN=a.lN+1|0;}
function Bds(a,b,c,d,e,f){a:{Bow();switch(Bs2.data[Bi(d)]){case 1:break;case 2:a.PC(b,c,e,f);break a;case 3:a.uV(b,c,f);break a;case 4:a.IR(b,c,f);break a;case 5:f.cB(c,null);break a;default:G(W((((H()).a(B(28))).c0(d)).b()));}a.FZ(b,c,f);}}
function AWg(a,b,c,d){var e,f;if(a.k4)(Ep()).fI((((H()).a(B(29))).a(c)).b());e=a.km.vo();f=BJ(Bmq(a,e,d,c),"handleEvent");e.onreadystatechange=f;a.i9();IJ(a,e,d);e.open("GET",$rt_ustr(c),!!b);e.setRequestHeader("Content-Type","text/plain; charset=utf-8");e.send();}
function AQY(a,b,c,d){var e,f;if(a.k4)(Ep()).fI((((H()).a(B(30))).a(c)).b());e=a.km.vo();f=BJ(Bm$(a,e,d,c),"handleEvent");e.onreadystatechange=f;a.i9();IJ(a,e,d);e.open("GET",$rt_ustr(c),!!b);e.setRequestHeader("Content-Type","text/plain; charset=utf-8");e.send();}
function AOD(a,b,c,d){a.uV(b,c,BmP(a,d));}
function A0o(a,b,c,d){var e,f;if(a.k4)(Ep()).fI((((H()).a(B(29))).a(c)).b());e=a.km.vo();f=BJ(BlC(a,e,d,c),"handleEvent");e.onreadystatechange=f;a.i9();IJ(a,e,d);e.open("GET",$rt_ustr(c),!!b);if(b){f="arraybuffer";e.responseType=f;}e.send();}
function Bbu(a,b,c,d,e){a.O1(b,c,d,null,e);}
function A0$(a,b,c,d,e,f){var g;g=0;a.uV(b,c,BqG(a,f,e,g,d));}
function ANx(b,c){b.addEventListener("load",BJ(c,"handleEvent"),!!0);b.addEventListener("error",BJ(c,"handleEvent"),!!0);}
function IJ(a,b,c){var d;d=BJ(Bnp(a,c),"handleEvent");b.onprogress=d;}
function Qk(b){return b.k4;}
function Tp(b){return b.km;}
var IC=D(U);
function BlB(){var a=new IC();TS(a);return a;}
function TS(a){Bv(a);}
function VF(a){return ((((Dc()).bK(97,122)).bK(65,90)).bK(48,57)).cO(95);}
var AIp=D(IC);
function Bnz(){var a=new AIp();A98(a);return a;}
function A98(a){TS(a);}
function AU7(a){var b;b=(VF(a)).gm(1);b.bm=1;return b;}
function Bd(){var a=this;C.call(a);a.CR=null;a.Gr=0;}
function B4(a,b,c){J(a);a.CR=b;a.Gr=c;}
function Bi(a){return a.Gr;}
function A9C(a){return a.CR.b();}
var DL=D(Bd);
var Bs3=null;var Bs4=null;var Bs5=null;var Bs6=null;var Bs7=null;var Bs8=null;var Bs9=null;function AAw(){AAw=L(DL);A6I();}
function Ie(a,b){var c=new DL();ABm(c,a,b);return c;}
function ABm(a,b,c){AAw();B4(a,b,c);}
function A6I(){Bs3=Ie(B(23),0);Bs4=Ie(B(31),1);Bs5=Ie(B(32),2);Bs6=Ie(B(33),3);Bs7=Ie(B(34),4);Bs8=Ie(B(35),5);Bs9=I(DL,[Bs3,Bs4,Bs5,Bs6,Bs7,Bs8]);}
function Bz(){var a=this;C.call(a);a.l=null;a.cN=0;a.uz=null;a.Gd=0;}
var Bs$=0;function ACe(){ACe=L(Bz);A1T();}
function CJ(a){var b,c;ACe();J(a);b=new EG;c=Bs$;Bs$=c+1|0;IS(b,c);a.uz=b.b();}
function KW(a,b){var c,d;ACe();J(a);c=new EG;d=Bs$;Bs$=d+1|0;IS(c,d);a.uz=c.b();a.l=b;}
function He(a,b,c,d){var e;e=d.O();while(true){if(b>e)return (-1);if(a.e(b,c,d)>=0)break;b=b+1|0;}return b;}
function Hn(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.e(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function A6K(a,b){a.Gd=b;}
function A5I(a){return a.Gd;}
function AUX(a){return ((((((H()).a(B(36))).a(a.uz)).a(B(37))).a(a.x())).a(B(38))).b();}
function AXO(a){return a.H5();}
function AYB(a){return a.l;}
function NP(a,b){a.l=b;}
function Bgl(a,b){return 1;}
function BhP(a){return null;}
function Rr(a){var b;a.cN=1;if(a.l!==null){if(!a.l.cN){b=a.l.is();if(b!==null){a.l.cN=1;a.l=b;}a.l.er();}else if(a.l instanceof GC&&a.l.dA.um)a.l=a.l.l;}}
function A1T(){Bs$=1;}
function BX(){Bz.call(this);this.bT=0;}
function AAT(a,b){KW(a,b);a.bT=1;a.Cm(1);}
function Dm(a){CJ(a);a.bT=1;}
function BiA(a,b,c,d){var e;if((b+a.co()|0)>d.O()){d.eg=1;return (-1);}e=a.bM(b,c);if(e<0)return (-1);return a.l.e(b+e|0,c,d);}
function BfD(a){return a.bT;}
function ASx(a,b){return 1;}
function R1(){BX.call(this);this.j5=null;}
function BqX(a){var b=new R1();A9L(b,a);return b;}
function A9L(a,b){Dm(a);a.j5=b.b();a.bT=b.k();}
function BeH(a,b,c){var d,e,f,g;d=0;while(true){if(d>=a.j5.k())return a.j5.k();e=a.j5.g(d);f=b+d|0;if(e!=c.g(f)){g=a.j5;if(HV(g.g(d))!=c.g(f))break;}d=d+1|0;}return (-1);}
function Bf3(a){return (((H()).a(B(39))).a(a.j5)).b();}
var Gr=D(0);
var GJ=D();
function Bs_(){var a=new GJ();AJV(a);return a;}
function AJV(a){J(a);}
function A4g(a,b){return 0;}
function AZN(a,b,c){return 0;}
function J8(){var a=this;GJ.call(a);a.d$=null;a.yG=0.0;a.Hw=0.0;a.z3=X;a.C3=0.0;a.Bo=X;a.fY=0;a.qA=0;a.HG=X;a.CD=0.0;a.CC=0.0;a.zd=0;a.yt=0;a.ng=0;a.j0=0;a.lb=0;a.eW=null;a.wC=0.0;a.wD=0.0;a.mD=X;a.ek=null;a.fF=null;a.mU=null;a.mV=null;a.ij=null;}
function Bta(a){var b=new J8();AAy(b,a);return b;}
function Btb(a,b,c,d,e){var f=new J8();AIK(f,a,b,c,d,e);return f;}
function Btc(a,b,c,d,e,f){var g=new J8();RK(g,a,b,c,d,e,f);return g;}
function AAy(a,b){AIK(a,20.0,0.4000000059604645,1.100000023841858,2.147483648E9,b);}
function AIK(a,b,c,d,e,f){RK(a,b,b,c,d,e,f);}
function RK(a,b,c,d,e,f,g){AJV(a);a.eW=BpA();a.ek=BB();a.fF=BB();a.mU=BB();a.mV=BB();a.ij=BnF(a);if(g===null)G(Z(B(40)));a.yG=b;a.Hw=c;a.z3=Brd(d*1.0E9);a.C3=e;a.Bo=Brd(f*1.0E9);a.d$=g;}
function Rt(a,b,c,d,e){return a.sV(b,c,d,e);}
function AWx(a,b,c,d,e){if(d>1)return 0;if(d){a.fF.hq(b,c);a.fY=0;a.j0=1;a.mU.lA(a.ek);a.mV.lA(a.fF);a.ij.jI();}else{a.ek.hq(b,c);a.mD=Btd.li();a.eW.wj(b,c,a.mD);if(Btd.Po(1)){a.fY=0;a.j0=1;a.mU.lA(a.ek);a.mV.lA(a.fF);a.ij.jI();}else{a.fY=1;a.j0=0;a.ng=0;a.wC=b;a.wD=c;if(!a.ij.TP())AJz(a.ij,a.C3);}}return a.d$.sV(b,c,d,e);}
function AAW(a,b,c,d){return a.Vq(b,c,d);}
function AKD(a,b,c,d){var e;if(d>1)return 0;if(a.ng)return 0;if(d)a.fF.hq(b,c);else a.ek.hq(b,c);if(a.j0){if(a.d$===null)return 0;e=a.d$.VA(a.mU,a.mV,a.ek,a.fF);return !a.d$.JF(a.mU.ym(a.mV),a.ek.ym(a.fF))&&!e?0:1;}a.eW.DQ(b,c,Btd.li());if(a.fY&&!Ju(a,b,c,a.wC,a.wD)){a.ij.jI();a.fY=0;}if(a.fY)return 0;a.lb=1;return a.d$.M8(b,c,a.eW.oY,a.eW.oX);}
function AGW(a,b,c,d,e){return a.R7(b,c,d,e);}
function AKr(a,b,c,d,e){var f,g,h,i,j;if(d>1)return 0;if(a.fY&&!Ju(a,b,c,a.wC,a.wD))a.fY=0;f=a.lb;a.lb=0;a.ij.jI();if(a.ng)return 0;if(a.fY){a:{if(a.zd==e&&a.yt==d&&Mm(EI(CV(),a.HG),a.z3)){g=a.CD;h=a.CC;if(Ju(a,b,c,g,h))break a;}a.qA=0;}a.qA=a.qA+1|0;a.HG=CV();a.CD=b;a.CC=c;a.zd=e;a.yt=d;a.mD=X;return a.d$.SC(b,c,a.qA,e);}if(a.j0){a.j0=0;a.d$.Jc();a.lb=1;if(d)a.eW.wj(a.ek.c4,a.ek.c3,Btd.li());else a.eW.wj(a.fF.c4,a.fF.c3,Btd.li());return 0;}i=0;if(f&&!a.lb)i=a.d$.Jg(b,c,d,e);j=Btd.li();if(Mm(EI(j,a.mD),a.Bo))
{a.eW.DQ(b,c,j);i=!a.d$.Vh(a.eW.OF(),a.eW.Vy(),e)&&!i?0:1;}a.mD=X;return i;}
function Ju(a,b,c,d,e){return C1(b-d)<a.yG&&C1(c-e)<a.Hw?1:0;}
var GY=D(0);
function DA(){var a=this;C.call(a);a.th=null;a.la=null;a.oy=0;a.o_=0;a.xW=null;}
function Bte(){var a=new DA();Uw(a);return a;}
function Btf(a){var b=new DA();Ra(b,a);return b;}
function Btg(a,b){var c=new DA();PF(c,a,b);return c;}
function Bth(a){var b=new DA();AIM(b,a);return b;}
function Uw(a){a.oy=1;a.o_=1;a.oU();}
function Ra(a,b){a.oy=1;a.o_=1;a.oU();a.th=b;}
function PF(a,b,c){a.oy=1;a.o_=1;a.oU();a.th=b;a.la=c;}
function AIM(a,b){a.oy=1;a.o_=1;a.oU();a.la=b;}
function A8w(a){return a;}
function AX4(a){return a.th;}
function AQI(a){return a.nq();}
function A9Y(a){a.Aw(X4());}
function A1R(a,b){var c,d,e,f,g;b.p_((Co(a)).x());c=a.IE();if(c!==null)b.p_((((H()).a(B(9))).a(c)).b());a:{b.Rl();if(a.xW!==null){d=a.xW.data;e=d.length;f=0;while(true){if(f>=e)break a;g=d[f];b.p_(B(41));b.N7(g);f=f+1|0;}}}if(a.la!==null&&a.la!==a){b.p_(B(42));a.la.Aw(b);}}
var EJ=D(DA);
function Bti(a,b){var c=new EJ();WZ(c,a,b);return c;}
function Btj(a){var b=new EJ();AC4(b,a);return b;}
function Btk(a){var b=new EJ();AGI(b,a);return b;}
function WZ(a,b,c){PF(a,b,c);}
function AC4(a,b){Ra(a,b);}
function AGI(a,b){AIM(a,b);}
var G3=D(EJ);
function Btl(a){var b=new G3();RD(b,a);return b;}
function RD(a,b){AC4(a,b);}
var Mz=D();
var Btm=null;function Pd(){Pd=L(Mz);BbR();}
function YF(b,c){var d;Pd();d=Btm.Y(b);if(d===null){d=BqI(b,4,c);Btm.A(b,d);}return d;}
function Ga(b){Pd();return YF(b,100);}
function XK(b){Pd();return (Ga(b)).e9();}
function Wp(b,c){var d,e,f,g;Pd();if(b===null)G(Z(B(43)));d=null;e=0;f=b.j;while(e<f){a:{g=b.o(e);if(g!==null){if(d===null){d=Btm.Y(Co(g));if(d===null)break a;}d.jP(g);if(!c)d=null;}}e=e+1|0;}}
function BbR(){Btm=Ef();}
var B0=D(0);
function A8T(b){return b;}
var N7=D(0);
var O5=D(0);
function Uq(){C.call(this);this.wR=null;}
function Bkr(a){var b=new Uq();Bgf(b,a);return b;}
function Bgf(a,b){a.wR=b;J(a);}
function AS7(a,b,c){AFh();Btn.lt(N(b));return a.wR.QZ(Btn,c);}
function Bfs(a,b,c){return a.OB(b,c?1:0);}
var PU=D();
function AIV(){R.call(this);this.KU=0.0;}
function Bo7(a){var b=new AIV();A_H(b,a);return b;}
function A_H(a,b){B6(a);a.KU=b;}
function AEH(){var a=this;U.call(a);a.wb=0;a.tU=0;a.DL=0;}
function BK(a,b){var c=new AEH();ANS(c,a,b);return c;}
function Bld(a,b,c){var d=new AEH();A06(d,a,b,c);return d;}
function ANS(a,b,c){Bv(a);a.tU=c;a.wb=b;}
function A06(a,b,c,d){Bv(a);a.DL=d;a.tU=c;a.wb=b;}
function A8I(a){var b;b=BmO(a.wb);if(a.DL)b.bL.oG(0,2048);b.bm=a.tU;return b;}
function GS(){var a=this;R.call(a);a.Q6=0.0;a.L5=0.0;a.BS=0.0;a.Ma=0.0;}
function A6l(a,b){var c=new GS();Nj(c,a,b);return c;}
function Nj(a,b,c){B6(a);a.Q6=b;a.L5=c;a.BS=A2q(b, -c);a.Ma=1.0/(1.0-a.BS);}
var Uu=D();
var Kt=D(0);
function W5(){C.call(this);this.Nn=null;}
function Bo1(a){var b=new W5();Bb2(b,a);return b;}
function Bb2(a,b){a.Nn=b;J(a);}
function A26(a){(Dt()).ko();}
function ANe(a){a.q$();}
function CR(){var a=this;Bz.call(a);a.um=0;a.l6=0;}
var Bto=null;function Lt(){Lt=L(CR);A8e();}
function BpS(a){var b=new CR();Fh(b,a);return b;}
function Fh(a,b){Lt();CJ(a);a.l6=b;}
function AL7(a,b,c,d){var e,f;e=d.of(a.l6);d.wa(a.l6,b);f=a.l.e(b,c,d);if(f<0)d.wa(a.l6,e);return f;}
function BaC(a){return a.l6;}
function ARu(a){return B(44);}
function AMK(a,b){return 0;}
function A8e(){Bto=Bj1();}
var Mk=D(CR);
function Btp(a){var b=new Mk();AIS(b,a);return b;}
function AIS(a,b){Fh(a,b);}
function AMX(a,b,c,d){var e,f;e=a.kA();f=d.eJ(e);if(f!=b)b=(-1);return b;}
function Bf_(a){return B(45);}
var HE=D(0);
var AGv=D();
function BO(){var a=this;Bz.call(a);a.bW=null;a.dA=null;a.bt=0;}
function Btq(){var a=new BO();Da(a);return a;}
function Bk$(a,b){var c=new BO();WC(c,a,b);return c;}
function Da(a){CJ(a);}
function WC(a,b,c){CJ(a);a.bW=b;a.dA=c;a.bt=c.kA();}
function AQP(a,b,c,d){var e,f,g,h,i;if(a.bW===null)return (-1);e=d.jO(a.bt);d.eO(a.bt,b);f=a.bW.dr();g=0;while(true){if(g>=f){d.eO(a.bt,e);return (-1);}h=a.bW.o(g);i=h.e(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function AWu(a,b){a.dA.V(b);}
function ASL(a){return B(46);}
function A_U(a,b){var c;a:{if(a.bW!==null){c=a.bW.fG();while(true){if(!c.bG())break a;if(!(c.bD()).cj(b))continue;else return 1;}}}return 0;}
function AXr(a,b){var c,d;a:{if(b.of(a.bt)>=0){c=b.jO(a.bt);d=a.bt;if(c==b.of(d)){c=0;break a;}}c=1;}return c;}
function ANy(a){var b,c,d,e;a.cN=1;if(a.dA!==null&&!a.dA.cN)a.dA.er();a:{if(a.bW!==null){b=a.bW.dr();c=0;while(true){if(c>=b)break a;d=a.bW.o(c);e=d.is();if(e===null)e=d;else{d.cN=1;a.bW.m_(c);a.bW.Om(c,e);}if(!e.cN)e.er();c=c+1|0;}}}if(a.l!==null)Rr(a);}
function RA(){var a=this;BO.call(a);a.r1=null;a.Co=0;}
function Bm_(a){var b=new RA();AZJ(b,a);return b;}
function AZJ(a,b){Da(a);a.r1=b.mP();a.Co=b.bH;}
function A8u(a,b){a.l=b;}
function ARN(a,b,c,d){var e,f,g,h,i,j,k;e=d.dW();f=d.O();g=b+1|0;h=Cl(g,f);if(h>0){d.eg=1;return (-1);}i=c.g(b);if(!a.r1.r(i))return (-1);if(Cb(i)){if(h<0){j=c.g(g);if(BU(j))return (-1);}}else if(BU(i)&&b>e){k=c.g(b-1|0);if(Cb(k))return (-1);}return a.l.e(g,c,d);}
function BcY(a){return ((((H()).a(B(47))).a(!a.Co?B(48):B(49))).a(a.r1.b())).b();}
var AGP=D(DQ);
function Bov(a){var b=new AGP();A1e(b,a);return b;}
function A1e(a,b){HX(a,b,1.0,1.0);}
function AQ1(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(Cb(l)){if(j>=d){if(h.d2(2)){j=j+(-1)|0;break a;}Bq();i=Bsc;break a;}m=k[j];if(!BU(m)){i=B8(1);break a;}j=j+(-1)|0;i=Hk(2);break a;}if(BU(l))i=B8(1);if(l>=128){i=Hk(1);j=j+(-1)|0;break a;}k=e.data;n=f+1|0;k[f]=l<<24>>24;c=j;f=n;}j=c;}h.eB(j);h.d6(f);return i;}
var Mi=D(0);
var DB=D();
var Bsf=null;var Btr=null;var Bts=null;var Btd=null;var Btt=null;var Btu=null;var Btv=null;var Btw=null;var J_=D(0);
var JI=D();
function Btx(){var a=new JI();T5(a);return a;}
function T5(a){J(a);}
function A3C(a,b){}
var ML=D(0);
function GD(){var a=this;JI.call(a);a.n5=null;a.Qy=null;a.s0=0;a.Eu=0;a.j$=null;a.tt=null;}
function Bty(a,b,c,d,e,f){var g=new GD();AG_(g,a,b,c,d,e,f);return g;}
function AG_(a,b,c,d,e,f,g){T5(a);a.n5=b;a.Qy=c;a.s0=d;a.Eu=e;a.j$=f;a.tt=g;}
function A2v(a){return a.n5;}
function AWB(a){return APi(a.s0,a.Eu);}
function AQ9(a){return a.j$.e6();}
function AL1(a){var b,c,d,e;b=H();b.a(AIi(a.tm()));if(b.k()>0)b.ba(32);(b.a((a.n5.x()).b())).ba(40);c=a.wM();d=0;while(true){e=c.data;if(d>=e.length)break;if(d>0)b.ba(44);b.a(e[d].x());d=d+1|0;}return (b.ba(41)).b();}
function Be$(a,b){var c,d,e,f,g,h,i;if(a.s0&1)G(BqE());if(a.tt===null)G(Blp());c=b.data;d=c.length;if(d!=a.j$.data.length)G(C7());e=0;while(true){if(e>=d){f=b.data;g=new (a.n5.hs);a.tt.call(g,f);return g;}if(!a.j$.data[e].hy()&&c[e]!==null){h=a.j$.data[e];i=c[e];if(!h.xg(i))G(C7());}if(a.j$.data[e].hy()&&c[e]===null)break;e=e+1|0;}G(C7());}
var Ou=D(0);
function ADb(){C.call(this);this.JW=null;}
function BqH(a){var b=new ADb();AS_(b,a);return b;}
function AS_(a,b){a.JW=b;J(a);}
function AX3(a){}
function AWi(a){a.KS();}
function DC(){Bz.call(this);this.bd=null;}
function G9(a,b,c,d){KW(a,c);a.bd=b;a.Cm(d);}
function BiK(a){return a.bd;}
function AX9(a,b){return !a.bd.cj(b)&&!a.l.cj(b)?0:1;}
function BgE(a,b){return 1;}
function AUH(a){var b;a.cN=1;if(a.l!==null&&!a.l.cN){b=a.l.is();if(b!==null){a.l.cN=1;a.l=b;}a.l.er();}if(a.bd!==null){if(!a.bd.cN){b=a.bd.is();if(b!==null){a.bd.cN=1;a.bd=b;}a.bd.er();}else if(a.bd instanceof GC&&a.bd.dA.um)a.bd=a.bd.l;}}
var C2=D(DC);
function BnP(a,b,c){var d=new C2();Gf(d,a,b,c);return d;}
function Gf(a,b,c,d){G9(a,b,c,d);}
function A3t(a,b,c,d){var e;if(!a.bd.bf(d))return a.l.e(b,c,d);e=a.bd.e(b,c,d);if(e>=0)return e;return a.l.e(b,c,d);}
function A$l(a){return B(50);}
var AC9=D(C2);
function Bo3(a,b,c){var d=new AC9();A$1(d,a,b,c);return d;}
function A$1(a,b,c,d){Gf(a,b,c,d);Lt();b.V(Bto);}
function Bbb(a,b,c,d){var e,f;e=a.bd.e(b,c,d);if(e<0)return (-1);if(e>b){while(true){f=a.bd.e(e,c,d);if(f<=e)break;e=f;}b=e;}return a.l.e(b,c,d);}
var BE=D();
var Btz=null;var BtA=null;var BtB=null;var BtC=null;var BtD=null;var BtE=null;var BtF=null;var BtG=null;var BtH=null;var BtI=null;var BtJ=null;var BtK=null;var BtL=null;var BtM=null;var BtN=null;var BtO=null;var BtP=null;var BtQ=null;var BtR=null;var BtS=null;var BtT=null;var BtU=null;var BtV=null;var BtW=null;var BtX=null;function LZ(){LZ=L(BE);A3m();}
function D4(){LZ();return BtW.e9();}
function ZH(){LZ();BtW.dE();BtX.dE();}
function A3m(){Btz=DM();BtA=DM();BtB=DM();BtC=DM();BtD=DM();BtE=Q();BtF=Q();BtG=Q();BtH=Q();BtI=Q();BtJ=Q();BtK=Q();BtL=Q();BtM=C9();BtN=C9();BtO=C9();BtP=C9();BtQ=C9();BtR=C9();BtS=C9();BtT=C9();BtU=C9();BtV=BH();BtW=BkR();BtX=Bpv();}
function FQ(){var a=this;C.call(a);a.F=null;a.bv=0;}
function BtY(){var a=new FQ();LX(a);return a;}
function BqC(a){var b=new FQ();LJ(b,a);return b;}
function LX(a){LJ(a,16);}
function LJ(a,b){J(a);a.F=B$(b);}
function AEF(a,b){return a.ye(a.bv,b);}
function Nk(a,b){return a.lx(a.bv,b);}
function Qu(a,b,c){var d,e,f;if(b>=0&&b<=a.bv){if(c===null)c=B(51);else if(c.bS())return a;a.hd(a.bv+c.k()|0);d=a.bv-1|0;while(d>=b){a.F.data[d+c.k()|0]=a.F.data[d];d=d+(-1)|0;}a.bv=a.bv+c.k()|0;d=0;while(d<c.k()){e=a.F.data;f=b+1|0;e[b]=c.g(d);d=d+1|0;b=f;}return a;}G(L_());}
function SJ(a,b){return a.CF(b,10);}
function A4d(a,b,c){return a.OZ(a.bv,b,c);}
function A$o(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(c<0){e=0;c= -c|0;}a:{if(c<d){if(e)CI(a,b,b+1|0);else{CI(a,b,b+2|0);f=a.F.data;g=b+1|0;f[b]=45;b=g;}a.F.data[b]=G2(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Cp(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;CI(a,b,b+i|0);if(e)l=b;else{f=a.F.data;l=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.F.data;g=l+1|0;f[l]=G2(c/k|0,d);c=c%k|0;k=k/d|0;l=g;}}}return a;}
function AI7(a,b){return a.FN(a.bv,b);}
function Vx(a,b,c){return a.Qz(b,c,10);}
function AUE(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(Ml(c,X)){e=0;c=Ba3(c);}a:{f=N(d);if(Ml(c,f)){if(e)CI(a,b,b+1|0);else{CI(a,b,b+2|0);g=a.F.data;h=b+1|0;g[b]=45;b=h;}a.F.data[b]=G2(V(c),d);}else{i=1;j=N(1);while(true){k=Cu(j,f);if(Mm(k,j))break;if(IR(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;CI(a,b,b+i|0);if(e)l=b;else{g=a.F.data;l=b+1|0;g[b]=45;}while(true){if(Mm(j,X))break a;g=a.F.data;h=l+1|0;g[l]=G2(V(Gc(c,j)),d);c=A3k(c,j);j=Gc(j,f);l=h;}}}return a;}
function Yc(a,b){return a.EJ(a.bv,b);}
function AF5(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=Cl(c,0.0);if(!d){CI(a,b,b+3|0);e=a.F.data;d=b+1|0;e[b]=48;e=a.F.data;f=d+1|0;e[d]=46;a.F.data[f]=48;return a;}if(!d){CI(a,b,b+4|0);e=a.F.data;d=b+1|0;e[b]=45;e=a.F.data;f=d+1|0;e[d]=48;e=a.F.data;d=f+1|0;e[f]=46;a.F.data[d]=48;return a;}if(isNaN(c)?1:0){CI(a,b,b+3|0);e=a.F.data;d=b+1|0;e[b]=78;e=a.F.data;f=d+1|0;e[d]=97;a.F.data[f]=78;return a;}if(!isFinite(c)?1:0){if(d>0){CI(a,b,b+8|0);d=b;}else{CI(a,b,b+9|0);e=a.F.data;d=b+1|0;e[b]=45;}e=a.F.data;f=d
+1|0;e[d]=73;e=a.F.data;d=f+1|0;e[f]=110;e=a.F.data;f=d+1|0;e[d]=102;e=a.F.data;d=f+1|0;e[f]=105;e=a.F.data;f=d+1|0;e[d]=110;e=a.F.data;d=f+1|0;e[f]=105;e=a.F.data;f=d+1|0;e[d]=116;a.F.data[f]=121;return a;}Bj9();g=BtZ;AFS(c,g);h=g.r3;i=g.rA;j=g.xw;k=1;l=1;if(j)l=2;m=9;n=AY8(h);if(n>0)m=m-n|0;if(i<7&&i>=(-3)){if(i>=0){k=i+1|0;m=Bj(m,k+1|0);i=0;}else{h=h/Bt0.data[ -i|0]|0;m=m-i|0;i=0;}}if(i){l=l+2|0;if(!(i>(-10)&&i<10))l=l+1|0;if(i<0)l=l+1|0;}if(i&&m==k)m=m+1|0;d=l+m|0;CI(a,b,b+d|0);if(!j)f=b;else{e=a.F.data;f
=b+1|0;e[b]=45;}o=100000000;p=0;while(p<m){if(o<=0)q=0;else{q=h/o|0;h=h%o|0;}e=a.F.data;d=f+1|0;e[f]=(48+q|0)&65535;k=k+(-1)|0;if(k)f=d;else{e=a.F.data;f=d+1|0;e[d]=46;}o=o/10|0;p=p+1|0;}if(i){e=a.F.data;d=f+1|0;e[f]=69;if(i>=0)f=d;else{i= -i|0;e=a.F.data;f=d+1|0;e[d]=45;}if(i<10)r=f;else{e=a.F.data;r=f+1|0;e[f]=(48+(i/10|0)|0)&65535;}a.F.data[r]=(48+(i%10|0)|0)&65535;}return a;}
function AY8(b){var c,d,e,f;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;f=e*100|0;if(b%f|0)f=e;else c=c|2;if(!(b%(f*10|0)|0))c=c|1;return c;}
function Pw(a,b){return a.wm(a.bv,b);}
function Q_(a,b,c){CI(a,b,b+1|0);a.F.data[b]=c;return a;}
function T0(a,b,c){return a.lx(b,c===null?B(51):c.b());}
function XB(a,b){return a.yW(a.bv,b);}
function Rk(a,b,c){return a.lx(b,!c?B(52):B(53));}
function OI(a,b){var c;if(a.F.data.length>=b)return;c=a.F.data.length>=1073741823?2147483647:Bj(b,Bj(a.F.data.length*2|0,5));a.F=LO(a.F,c);}
function PY(a){return Hc(a.F,0,a.bv);}
function Pk(a){return a.bv;}
function RM(a,b){if(b>=0&&b<a.bv)return a.F.data[b];G(Dw());}
function SP(a,b,c,d){return a.wP(a.bv,b,c,d);}
function AFP(a,b,c,d,e){var f,g;if(d<=e&&e<=c.k()&&d>=0){CI(a,b,(b+e|0)-d|0);while(d<e){f=a.F.data;g=b+1|0;f[b]=c.g(d);d=d+1|0;b=g;}return a;}G(Dw());}
function AJT(a,b){return a.GV(b,0,b.k());}
function Q3(a,b,c,d){return a.vL(a.bv,b,c,d);}
function Oy(a,b,c,d,e){var f,g,h,i,j;CI(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.F.data;i=b+1|0;j=d+1|0;h[b]=g[d];b=i;d=j;}return a;}
function P9(a,b){return a.uZ(b,0,b.data.length);}
function AHK(a,b,c){return a.cm(b,c);}
function ADX(a,b,c,d,e){var f,g,h,i;if(b>c)G(Bm(B(54)));while(b<c){f=d.data;g=e+1|0;h=a.F.data;i=b+1|0;f[e]=h[b];e=g;b=i;}}
function AIx(a,b){a.bv=b;}
function AIL(a,b){var c,d,e;if(b>=0&&b<a.bv){a.bv=a.bv-1|0;while(b<a.bv){c=a.F.data;d=a.F.data;e=b+1|0;c[b]=d[e];b=e;}return a;}G(L_());}
function AI6(a,b,c){var d,e,f,g,h,i;d=Cl(b,c);if(d<=0&&b<=a.bv){if(!d)return a;e=a.bv-c|0;a.bv=a.bv-(c-b|0)|0;f=0;while(f<e){g=a.F.data;d=b+1|0;h=a.F.data;i=c+1|0;g[b]=h[c];f=f+1|0;b=d;c=i;}return a;}G(L_());}
function CI(a,b,c){var d,e;d=a.bv-b|0;a.hd((a.bv+c|0)-b|0);e=d-1|0;while(e>=0){a.F.data[c+e|0]=a.F.data[b+e|0];e=e+(-1)|0;}a.bv=a.bv+(c-b|0)|0;}
function ACo(a,b,c){if(b<=c&&b>=0&&c<=a.bv)return Hc(a.F,b,c-b|0);G(Dw());}
var Gy=D(0);
var SK=D(FQ);
function BdN(){var a=new SK();A9W(a);return a;}
function A9W(a){LX(a);}
function AOz(a,b){Nk(a,b);return a;}
function AY3(a,b){Pw(a,b);return a;}
function A1z(a,b,c,d){Q3(a,b,c,d);return a;}
function APk(a,b){P9(a,b);return a;}
function A4o(a,b,c,d){SP(a,b,c,d);return a;}
function Bgi(a,b){AJT(a,b);return a;}
function Bar(a,b,c,d,e){AFP(a,b,c,d,e);return a;}
function BaM(a,b,c,d,e){Oy(a,b,c,d,e);return a;}
function Bg4(a,b,c){Q_(a,b,c);return a;}
function Ber(a,b,c){Qu(a,b,c);return a;}
function AP1(a,b,c,d,e){return a.SF(b,c,d,e);}
function A5m(a,b,c,d){return a.OA(b,c,d);}
function A8_(a,b,c,d,e){return a.La(b,c,d,e);}
function Bd2(a,b,c,d){return a.Rb(b,c,d);}
function A23(a,b){return RM(a,b);}
function BiF(a){return Pk(a);}
function A5C(a){return PY(a);}
function A5S(a,b){OI(a,b);}
function Bfx(a,b,c){return a.Vk(b,c);}
function A3h(a,b,c){return a.J1(b,c);}
var Pf=D();
var Bt1=null;function Bt2(){Bt2=L(Pf);A1J();}
function A1J(){Bt1=BB();}
function Dd(){var a=this;C.call(a);a.hV=0;a.G=0;a.bg=0;a.fR=0;}
function GQ(a,b){J(a);a.fR=(-1);a.hV=b;a.bg=b;}
function Dg(a){return a.hV;}
function Ck(a){return a.G;}
function H2(a,b){if(b>=0&&b<=a.bg){a.G=b;if(b<a.fR)a.fR=0;return a;}G(Z(((((((H()).a(B(55))).h(b)).a(B(56))).h(a.bg)).a(B(57))).b()));}
function BG(a){return a.bg;}
function KK(a,b){if(b>=0&&b<=a.hV){if(a.fR>b)a.fR=(-1);a.bg=b;if(a.G>a.bg)a.G=a.bg;return a;}G(Z(((((((H()).a(B(58))).h(b)).a(B(56))).h(a.hV)).a(B(57))).b()));}
function Ha(a){a.G=0;a.bg=a.hV;a.fR=(-1);return a;}
function It(a){a.bg=a.G;a.G=0;a.fR=(-1);return a;}
function Bf(a){return a.bg-a.G|0;}
function Cq(a){return a.G>=a.bg?0:1;}
var YY=D();
var JA=D(Cn);
var F$=D();
function Oq(a){J(a);}
function S(){var a=this;F$.call(a);a.bH=0;a.cc=0;a.bL=null;a.m9=null;a.nC=null;a.bm=0;}
var Bt3=null;function L6(){L6=L(S);AOf();}
function Bh(a){L6();Oq(a);a.bL=BpI(2048);}
function A5i(a){return null;}
function A4e(a){return a.bL;}
function Baz(a){return !a.cc?(a.bL.lH(0)>=2048?0:1):a.bL.UC(0)>=2048?0:1;}
function A9N(a){return a.bm;}
function Bfr(a){return a;}
function ALZ(a){var b;if(a.nC===null){b=a.cq();a.nC=Bm2(a,b);a.nC.gm(a.cc);}return a.nC;}
function A5t(a){var b;if(a.m9===null){b=a.cq();a.m9=Blb(a,b,a);a.m9.gm(a.j6());a.m9.bm=a.bm;}return a.m9;}
function BhN(a){return 0;}
function AZS(a,b){if(a.bH^b){a.bH=a.bH?0:1;a.cc=a.cc?0:1;}if(!a.bm)a.bm=1;return a;}
function APY(a){return a.bH;}
function KJ(b,c){L6();return b.r(c);}
function Ib(b,c){L6();if(b.bP()!==null&&c.bP()!==null)return (b.bP()).Ps(c.bP());return 1;}
function MV(b,c){L6();return (AI3(Bt3,b)).JJ(c);}
function AOf(){Bt3=BkQ();}
function AFt(){S.call(this);this.H3=null;}
function Blo(a){var b=new AFt();A$Y(b,a);return b;}
function A$Y(a,b){a.H3=b;Bh(a);}
function A1n(a,b){return ADM(b);}
var DE=D();
var FS=D(DE);
var CW=D(FS);
var Bt4=null;function Bt5(){Bt5=L(CW);A4r();}
function A4r(){Bt4=Q();}
var HK=D();
var Bt6=null;var Bt7=null;var Bt8=null;function AXV(){AXV=L(HK);AO4();}
function BkQ(){var a=new HK();Yw(a);return a;}
function Yw(a){AXV();J(a);}
function AI3(a,b){var c,d,e;c=0;while(true){AXV();if(c>=Bt8.data.length)G(Blu(B(59),B(59),b));d=Bt8.data[c];e=d.data;if(b.C(e[0]))break;c=c+1|0;}return e[1];}
function AO4(){Bt6=Bmk();Bt7=BoF();Bt8=I($rt_arraycls(C),[I(C,[B(60),BmU()]),I(C,[B(61),Bju()]),I(C,[B(62),Bp5()]),I(C,[B(63),Bqs()]),I(C,[B(64),Bt7]),I(C,[B(65),BoV()]),I(C,[B(66),Bk2()]),I(C,[B(67),Bny()]),I(C,[B(68),Bnn()]),I(C,[B(69),BjT()]),I(C,[B(70),Bko()]),I(C,[B(71),BnB()]),I(C,[B(72),BlS()]),I(C,[B(73),Bjn()]),I(C,[B(74),Bqh()]),I(C,[B(75),Bkh()]),I(C,[B(76),BoT()]),I(C,[B(77),Bn4()]),I(C,[B(78),BoU()]),I(C,[B(79),BjX()]),I(C,[B(80),Bqz()]),I(C,[B(81),BnU()]),I(C,[B(82),Blr()]),I(C,[B(83),Bp3()]),
I(C,[B(84),BpX()]),I(C,[B(85),Bmz()]),I(C,[B(86),BjW()]),I(C,[B(87),BpJ()]),I(C,[B(88),Bt6]),I(C,[B(89),BlB()]),I(C,[B(90),Bnz()]),I(C,[B(91),Bt6]),I(C,[B(92),Bjk()]),I(C,[B(93),Bt7]),I(C,[B(94),BkE()]),I(C,[B(95),O(0,127)]),I(C,[B(96),O(128,255)]),I(C,[B(97),O(256,383)]),I(C,[B(98),O(384,591)]),I(C,[B(99),O(592,687)]),I(C,[B(100),O(688,767)]),I(C,[B(101),O(768,879)]),I(C,[B(102),O(880,1023)]),I(C,[B(103),O(1024,1279)]),I(C,[B(104),O(1280,1327)]),I(C,[B(105),O(1328,1423)]),I(C,[B(106),O(1424,1535)]),I(C,[B(107),
O(1536,1791)]),I(C,[B(108),O(1792,1871)]),I(C,[B(109),O(1872,1919)]),I(C,[B(110),O(1920,1983)]),I(C,[B(111),O(2304,2431)]),I(C,[B(112),O(2432,2559)]),I(C,[B(113),O(2560,2687)]),I(C,[B(114),O(2688,2815)]),I(C,[B(115),O(2816,2943)]),I(C,[B(116),O(2944,3071)]),I(C,[B(117),O(3072,3199)]),I(C,[B(118),O(3200,3327)]),I(C,[B(119),O(3328,3455)]),I(C,[B(120),O(3456,3583)]),I(C,[B(121),O(3584,3711)]),I(C,[B(122),O(3712,3839)]),I(C,[B(123),O(3840,4095)]),I(C,[B(124),O(4096,4255)]),I(C,[B(125),O(4256,4351)]),I(C,[B(126),
O(4352,4607)]),I(C,[B(127),O(4608,4991)]),I(C,[B(128),O(4992,5023)]),I(C,[B(129),O(5024,5119)]),I(C,[B(130),O(5120,5759)]),I(C,[B(131),O(5760,5791)]),I(C,[B(132),O(5792,5887)]),I(C,[B(133),O(5888,5919)]),I(C,[B(134),O(5920,5951)]),I(C,[B(135),O(5952,5983)]),I(C,[B(136),O(5984,6015)]),I(C,[B(137),O(6016,6143)]),I(C,[B(138),O(6144,6319)]),I(C,[B(139),O(6400,6479)]),I(C,[B(140),O(6480,6527)]),I(C,[B(141),O(6528,6623)]),I(C,[B(142),O(6624,6655)]),I(C,[B(143),O(6656,6687)]),I(C,[B(144),O(7424,7551)]),I(C,[B(145),
O(7552,7615)]),I(C,[B(146),O(7616,7679)]),I(C,[B(147),O(7680,7935)]),I(C,[B(148),O(7936,8191)]),I(C,[B(149),O(8192,8303)]),I(C,[B(150),O(8304,8351)]),I(C,[B(151),O(8352,8399)]),I(C,[B(152),O(8400,8447)]),I(C,[B(153),O(8448,8527)]),I(C,[B(154),O(8528,8591)]),I(C,[B(155),O(8592,8703)]),I(C,[B(156),O(8704,8959)]),I(C,[B(157),O(8960,9215)]),I(C,[B(158),O(9216,9279)]),I(C,[B(159),O(9280,9311)]),I(C,[B(160),O(9312,9471)]),I(C,[B(161),O(9472,9599)]),I(C,[B(162),O(9600,9631)]),I(C,[B(163),O(9632,9727)]),I(C,[B(164),
O(9728,9983)]),I(C,[B(165),O(9984,10175)]),I(C,[B(166),O(10176,10223)]),I(C,[B(167),O(10224,10239)]),I(C,[B(168),O(10240,10495)]),I(C,[B(169),O(10496,10623)]),I(C,[B(170),O(10624,10751)]),I(C,[B(171),O(10752,11007)]),I(C,[B(172),O(11008,11263)]),I(C,[B(173),O(11264,11359)]),I(C,[B(174),O(11392,11519)]),I(C,[B(175),O(11520,11567)]),I(C,[B(176),O(11568,11647)]),I(C,[B(177),O(11648,11743)]),I(C,[B(178),O(11776,11903)]),I(C,[B(179),O(11904,12031)]),I(C,[B(180),O(12032,12255)]),I(C,[B(181),O(12272,12287)]),I(C,[B(182),
O(12288,12351)]),I(C,[B(183),O(12352,12447)]),I(C,[B(184),O(12448,12543)]),I(C,[B(185),O(12544,12591)]),I(C,[B(186),O(12592,12687)]),I(C,[B(187),O(12688,12703)]),I(C,[B(188),O(12704,12735)]),I(C,[B(189),O(12736,12783)]),I(C,[B(190),O(12784,12799)]),I(C,[B(191),O(12800,13055)]),I(C,[B(192),O(13056,13311)]),I(C,[B(193),O(13312,19893)]),I(C,[B(194),O(19904,19967)]),I(C,[B(195),O(19968,40959)]),I(C,[B(196),O(40960,42127)]),I(C,[B(197),O(42128,42191)]),I(C,[B(198),O(42752,42783)]),I(C,[B(199),O(43008,43055)]),I(C,
[B(200),O(44032,55203)]),I(C,[B(201),O(55296,56191)]),I(C,[B(202),O(56192,56319)]),I(C,[B(203),O(56320,57343)]),I(C,[B(204),O(57344,63743)]),I(C,[B(205),O(63744,64255)]),I(C,[B(206),O(64256,64335)]),I(C,[B(207),O(64336,65023)]),I(C,[B(208),O(65024,65039)]),I(C,[B(209),O(65040,65055)]),I(C,[B(210),O(65056,65071)]),I(C,[B(211),O(65072,65103)]),I(C,[B(212),O(65104,65135)]),I(C,[B(213),O(65136,65279)]),I(C,[B(214),O(65280,65519)]),I(C,[B(215),O(0,1114111)]),I(C,[B(216),BnC()]),I(C,[B(217),BK(0,1)]),I(C,[B(218),
Ir(62,1)]),I(C,[B(219),BK(1,1)]),I(C,[B(220),BK(2,1)]),I(C,[B(221),BK(3,0)]),I(C,[B(222),BK(4,0)]),I(C,[B(223),BK(5,1)]),I(C,[B(224),Ir(448,1)]),I(C,[B(225),BK(6,1)]),I(C,[B(226),BK(7,0)]),I(C,[B(227),BK(8,1)]),I(C,[B(228),Ir(3584,1)]),I(C,[B(229),BK(9,1)]),I(C,[B(230),BK(10,1)]),I(C,[B(231),BK(11,1)]),I(C,[B(232),Ir(28672,0)]),I(C,[B(233),BK(12,0)]),I(C,[B(234),BK(13,0)]),I(C,[B(235),BK(14,0)]),I(C,[B(236),Boy(983040,1,1)]),I(C,[B(237),BK(15,0)]),I(C,[B(238),BK(16,1)]),I(C,[B(239),BK(18,1)]),I(C,[B(240),Bld(19,
0,1)]),I(C,[B(241),Ir(1643118592,1)]),I(C,[B(242),BK(20,0)]),I(C,[B(243),BK(21,0)]),I(C,[B(244),BK(22,0)]),I(C,[B(245),BK(23,0)]),I(C,[B(246),BK(24,1)]),I(C,[B(247),Ir(2113929216,1)]),I(C,[B(248),BK(25,1)]),I(C,[B(249),BK(26,0)]),I(C,[B(250),BK(27,0)]),I(C,[B(251),BK(28,1)]),I(C,[B(252),BK(29,0)]),I(C,[B(253),BK(30,0)])]);}
var P1=D(0);
function LQ(){var a=this;C.call(a);a.eV=null;a.eZ=null;a.oe=null;a.qf=null;}
var Bt9=null;function Z9(){Z9=L(LQ);BeB();}
function ATV(){var a=new LQ();TK(a);return a;}
function AKL(a,b){return b.M(a.oe);}
function Biu(a,b){return b.M(a.qf);}
function TK(a){Z9();J(a);a.eV=Q();a.eZ=Q();a.oe=Q();a.qf=Q();a.Ok();}
function Bcw(a,b,c){a.eV.L(b.m>=c.m?c.m:b.m,b.n>=c.n?c.n:b.n,b.p>=c.p?c.p:b.p);a.eZ.L(b.m<=c.m?c.m:b.m,b.n<=c.n?c.n:b.n,b.p<=c.p?c.p:b.p);((a.oe.M(a.eV)).eA(a.eZ)).di(0.5);(a.qf.M(a.eZ)).fK(a.eV);return a;}
function A9D(a){a.eV.L(Infinity,Infinity,Infinity);a.eZ.L((-Infinity),(-Infinity),(-Infinity));a.oe.L(0.0,0.0,0.0);a.qf.L(0.0,0.0,0.0);return a;}
function AYR(a){return a.FC(a.eV.L(0.0,0.0,0.0),a.eZ.L(0.0,0.0,0.0));}
function A2k(a,b,c,d){return a.FC(a.eV.L(Ja(a.eV.m,b),Ja(a.eV.n,c),Ja(a.eV.p,d)),a.eZ.L(JS(a.eZ.m,b),JS(a.eZ.n,c),JS(a.eZ.p,d)));}
function Ja(b,c){Z9();if(b>c)b=c;return b;}
function JS(b,c){Z9();if(b>c)c=b;return c;}
function BeB(){Bt9=Q();}
var DF=D(Ci);
var Bt$=null;var Bt_=null;var Bua=null;var Bub=null;function Buc(){Buc=L(DF);A_A();}
function A_A(){Bt$=Q();Bt_=Q();Bua=Q();Bub=AA$();}
var Dy=D(DF);
var ADA=D(Dy);
var FI=D(Bd);
var Bud=null;var Bue=null;var Buf=null;function AHI(){AHI=L(FI);A3W();}
function A5u(a,b){var c=new FI();AGG(c,a,b);return c;}
function AD5(){AHI();return Buf.e6();}
function AGG(a,b,c){AHI();B4(a,b,c);}
function A3W(){Bud=A5u(B(254),0);Bue=A5u(B(255),1);Buf=I(FI,[Bud,Bue]);}
var KA=D(U);
function BoF(){var a=new KA();Yt(a);return a;}
function Yt(a){Bv(a);}
function AFv(a){return (Dc()).bK(48,57);}
var VM=D(U);
function Blr(){var a=new VM();ANt(a);return a;}
function ANt(a){Bv(a);}
function A9b(a){var b;b=Bj_(a);b.bm=1;return b;}
var PJ=D(0);
function Ll(){var a=this;C.call(a);a.tj=0;a.vf=null;a.iC=null;a.mh=0;}
function ACt(a){J(a);a.iC=null;a.mh=0;}
function ASV(a,b){a.vf=b;}
function QJ(a){return a.iC===null?0:1;}
function AVL(a){if(!QJ(a))return;a.mh=a.mh+1|0;if(!a.tj)a.Q4(a.iC.lR());else a.PW(a.iC.lR());a.iC=null;}
function AW9(a,b){if(b<0)G(Z(B(256)));if(QJ(a))a.jI();a.tj=0;a.iC=Bl(a.PR(a.mh,b));}
function AE9(a,b){if(b!=a.mh)return;if(!a.tj)a.iC=null;if(a.vf!==null)a.vf.ft();}
var BP=D();
var Bug=null;var Buh=null;var Bui=null;var Buj=null;var Buk=null;var Bul=null;var Bum=null;var Bun=null;var Buo=null;var Bup=null;var Buq=null;var Bur=null;var Bus=null;var But=null;var Buu=null;var Buv=null;var Buw=null;var Bux=null;var Buy=null;var Buz=null;var BuA=null;var BuB=null;var BuC=null;var BuD=null;function BuE(){BuE=L(BP);AOd();}
function AOd(){Bug=Q();Buh=Q();Bui=Q();Buj=Jx();Buk=Jx();Bul=BB();Bum=BB();Bun=BB();Buo=BB();Bup=BB();Buq=BB();Bur=BB();Bus=BB();But=BB();Buu=AXA(Q(),0.0);Buv=Q();Buw=Q();Bux=Q();Buy=Q();Buz=Q();BuA=Q();BuB=Q();BuC=Q();BuD=Q();}
var CT=D();
var ADc=D(CT);
var Xr=D(R);
function Bno(){var a=new Xr();ATY(a);return a;}
function ATY(a){B6(a);}
var ADR=D();
function CV(){return Cu(ER(),N(1000000));}
var Xj=D(R);
function Bjl(){var a=new Xj();A$Z(a);return a;}
function A$Z(a){B6(a);}
var DS=D(ET);
var TY=D(DS);
var E7=D(0);
function Cz(){var a=this;C.call(a);a.iF=X;a.tJ=X;a.dQ=0;}
function Tk(a){J(a);a.dQ=(-1);}
function A9Z(a){a.iF=X;a.dQ=(-1);}
function A5E(a){return a.dQ==(-1)?0:1;}
var AEO=D(Cz);
var Xk=D(R);
function Bmi(){var a=new Xk();BeX(a);return a;}
function BeX(a){B6(a);}
var AJC=D(CR);
function Bnb(){var a=new AJC();A2C(a);return a;}
function A2C(a){Fh(a,(-1));}
function A6G(a,b,c,d){return b;}
function A$P(a){return B(257);}
var Xn=D(R);
function Bki(){var a=new Xn();A_m(a);return a;}
function A_m(a){B6(a);}
function FY(){R.call(this);this.On=0;}
function Ly(a){var b=new FY();M8(b,a);return b;}
function M8(a,b){B6(a);a.On=b;}
var MM=D(0);
var Xh=D(R);
function Boz(){var a=new Xh();Bez(a);return a;}
function Bez(a){B6(a);}
var Jg=D(CT);
var AC8=D(Jg);
var Xl=D(R);
function BjZ(){var a=new Xl();Bi7(a);return a;}
function Bi7(a){B6(a);}
var Xo=D(R);
function BqV(){var a=new Xo();AKH(a);return a;}
function AKH(a){B6(a);}
var Xm=D(R);
function BoK(){var a=new Xm();AM4(a);return a;}
function AM4(a){B6(a);}
var Xp=D(R);
function BpO(){var a=new Xp();A2_(a);return a;}
function A2_(a){B6(a);}
var Lq=D(BO);
function BmM(a,b){var c=new Lq();AA3(c,a,b);return c;}
function AA3(a,b,c){WC(a,b,c);}
function AWb(a,b,c,d){var e,f,g,h,i;e=d.eJ(a.bt);d.bC(a.bt,b);f=a.bW.dr();g=0;while(true){if(g>=f){d.bC(a.bt,e);return (-1);}h=a.bW.o(g);i=h.e(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function AT4(a){return B(258);}
function Bd4(a,b){var c;c=b.eJ(a.bt);return !c?0:1;}
var DW=D(Lq);
function Bns(a,b){var c=new DW();Hq(c,a,b);return c;}
function Hq(a,b,c){AA3(a,b,c);}
function A7l(a,b,c,d){var e,f,g,h,i;e=d.eJ(a.bt);d.bC(a.bt,b);f=a.bW.dr();g=0;while(g<f){h=a.bW.o(g);i=h.e(b,c,d);if(i>=0)return a.l.e(a.dA.d0(),c,d);g=g+1|0;}d.bC(a.bt,e);return (-1);}
function BdD(a,b){a.l=b;}
function ALa(a){return B(258);}
var AAB=D(DW);
function Bn0(a,b){var c=new AAB();AQG(c,a,b);return c;}
function AQG(a,b,c){Hq(a,b,c);}
function AWr(a,b,c,d){var e,f,g,h;e=a.bW.dr();f=0;while(f<e){g=a.bW.o(f);h=g.e(b,c,d);if(h>=0)return a.l.e(b,c,d);f=f+1|0;}return (-1);}
function AZ0(a,b){return 0;}
function BhO(a){return B(259);}
var AIj=D(DW);
function Bm8(a,b){var c=new AIj();APU(c,a,b);return c;}
function APU(a,b,c){Hq(a,b,c);}
function AMA(a,b,c,d){var e,f,g;e=a.bW.dr();f=0;while(true){if(f>=e)return a.l.e(b,c,d);g=a.bW.o(f);if(g.e(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function BfJ(a,b){return 0;}
function AQD(a){return B(260);}
var Bk=D();
var BuF=null;var BuG=null;var BuH=null;var BuI=null;var BuJ=null;var BuK=null;var BuL=null;function Bjr(){Bjr=L(Bk);A4X();}
function CZ(a){Bjr();J(a);}
function A4X(){BuF=Bo0(0.0);BuG=Bqq();BuH=Boq();BuI=BjF();BuJ=Bm4();BuK=BjA();BuL=BnE();}
var AJL=D(Bk);
var ED=D(Dy);
var ADE=D(ED);
var Cg=D(DA);
function BuM(){var a=new Cg();Gb(a);return a;}
function BuN(a,b){var c=new Cg();LL(c,a,b);return c;}
function BuO(a){var b=new Cg();Os(b,a);return b;}
function Gb(a){Uw(a);}
function LL(a,b,c){PF(a,b,c);}
function Os(a,b){Ra(a,b);}
var Bt=D(Cg);
function BuP(){var a=new Bt();CQ(a);return a;}
function BuQ(a,b){var c=new Bt();S9(c,a,b);return c;}
function Tu(a){var b=new Bt();Fy(b,a);return b;}
function CQ(a){Gb(a);}
function S9(a,b,c){LL(a,b,c);}
function Fy(a,b){Os(a,b);}
var I0=D(Bt);
function Bql(){var a=new I0();VY(a);return a;}
function VY(a){CQ(a);}
var AJP=D(I0);
function Dv(){var a=new AJP();A$M(a);return a;}
function A$M(a){VY(a);}
var E8=D(0);
var Bu=D();
var BuR=null;function BuS(){BuS=L(Bu);Bhq();}
function Bhq(){BuR=BB();}
var C0=D(Bu);
var BuT=0.0;function BuU(){BuU=L(C0);Bf4();}
function Bf4(){BuT=0.10000000149011612;}
var Kf=D(C0);
var AF0=D();
function AG3(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(C7());}return b.data.length;}
function Nw(b,c){if(b===null)G(Kr());if(b===E($rt_voidcls()))G(C7());if(c<0)G(Bg8());return A0S(b.BH(),c);}
function A0S(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function Eq(){C.call(this);this.bs=null;}
function Jt(a){J(a);a.bs=CD(0.0,0.0,0.0,1.0);}
function Rd(){var a=this;Eq.call(a);a.eR=null;a.dM=0.0;}
function Bpn(){var a=new Rd();ARW(a);return a;}
function ARW(a){Jt(a);a.eR=Q();}
function AR2(a,b){return a.Kw(b.bs,b.eR,b.dM);}
function AVN(a,b,c,d){if(b!==null)a.bs.e5(b);if(c!==null)a.eR.M(c);a.dM=d;return a;}
function AMu(a,b,c,d,e,f,g,h){a.bs.gT(b,c,d,1.0);a.eR.L(e,f,g);a.dM=h;return a;}
function A5Y(a,b){var c;a:{b:{if(b!==null){if(b===a)break b;if(a.bs.C(b.bs)&&a.eR.C(b.eR)&&a.dM===b.dM)break b;}c=0;break a;}c=1;}return c;}
var KI=D(DE);
var CH=D(EQ);
var AA9=D(CH);
var GT=D(G3);
function BuV(a){var b=new GT();MA(b,a);return b;}
function MA(a,b){RD(a,b);}
var AGk=D(GT);
function BuW(a){var b=new AGk();ANi(b,a);return b;}
function ANi(a,b){MA(a,b);}
var H8=D(0);
var Sp=D(U);
function Bn4(){var a=new Sp();ANk(a);return a;}
function ANk(a){Bv(a);}
function AO0(a){var b;b=Bpb(a);b.bm=1;return b;}
var KB=D(0);
var IX=D(0);
var Ba=D();
function BZ(a){J(a);}
function AP6(a,b,c){return 0;}
var AFc=D(Kf);
var HU=D(BF);
var BuX=null;function ARe(){ARe=L(HU);A3y();}
function BuY(){var a=new HU();K2(a);return a;}
function Blt(a){var b=new HU();Sf(b,a);return b;}
function K2(a){ARe();BS(a);a.c1(N(ADw()),1);}
function Sf(a,b){ARe();BS(a);}
function ASN(a,b){var c,d;c=V(a.br);d=V((b.b2()));AEb(c,d);}
function BfN(a){W4(V(a.br));}
function AVd(a,b,c,d){var e,f,g,h,i,j;D9();D5(b,BuZ);e=BuZ;D5(c,Bu0);f=Bu0;g=V(a.br);h=V((e.b2()));i=V((f.b2()));j=V((d.b2()));AH6(g,h,i,j);}
function A3y(){BuX=Blt(0);}
function ADw(){var jsObj=new Bullet.btCollisionWorld();return Bullet.getPointer(jsObj);}
function AEb(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btCollisionWorld);jsObj.setDebugDrawer(c);}
function W4(b){var jsObj=Bullet.wrapPointer(b,Bullet.btCollisionWorld);jsObj.debugDrawWorld();}
function AH6(b,c,d,e){var jsObj=Bullet.wrapPointer(b,Bullet.btCollisionWorld);jsObj.rayTest(c,d,e);}
var G4=D(HU);
var Bu1=null;function AOw(){AOw=L(G4);APW();}
function BoO(a){var b=new G4();XH(b,a);return b;}
function Bu2(){var a=new G4();Je(a);return a;}
function XH(a,b){AOw();K2(a);}
function Je(a){AOw();K2(a);}
function A86(a,b){return Z0(V(a.br),b);}
function A7x(a,b){var c,d;c=V(a.br);d=V((b.b2()));Zj(c,d);}
function A54(a,b){var c,d;c=V(a.br);d=V((b.b2()));AFs(c,d);}
function A0Z(a,b){var c,d,e;D9();D5(b,BuZ);c=BuZ;d=V(a.br);e=V((c.b2()));Tw(d,e);}
function APW(){Bu1=BoO(0);}
function Z0(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btDynamicsWorld);var returnedJSObj=jsObj.stepSimulation(c);return returnedJSObj;}
function Zj(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btDynamicsWorld);jsObj.addRigidBody(c);}
function AFs(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btDynamicsWorld);jsObj.removeRigidBody(c);}
function Tw(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btDynamicsWorld);jsObj.setGravity(c);}
var HR=D();
var Bu3=null;function Zx(a){J(a);}
function Ev(){return Bu3;}
function ATP(b){Bu3=b;}
var R4=D(Bu);
var R3=D(Bu);
var Qa=D(Cn);
var Bu4=null;function Bu5(){Bu5=L(Qa);A_R();}
function A_R(){Bu4=BB();}
var ACw=D();
function PH(b){var c,d,e,f,g;if(b===null)return null;c=b.data;d=c.length;e=new Array(d);f=0;while(f<d){g=c[f];e[f]=g;f=f+1|0;}return e;}
function BJ(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Hz(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function RE(){S.call(this);this.Vv=null;}
function BoL(a){var b=new RE();Bd7(b,a);return b;}
function Bd7(a,b){a.Vv=b;Bh(a);}
function AOo(a,b){return Zi(b);}
function Dk(){var a=this;C.call(a);a.Ce=null;a.QD=null;}
function HW(a,b,c){var d,e,f,g;d=c.data;J(a);NF(b);e=d.length;f=0;while(f<e){g=d[f];NF(g);f=f+1|0;}a.Ce=b;a.QD=c.e6();}
function NF(b){var c,d;if(b.bS())G(ADO(b));if(!AHu(b.g(0)))G(ADO(b));c=1;while(c<b.k()){a:{d=b.g(c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AHu(d))break a;else G(ADO(b));}}c=c+1|0;}}
function AHu(b){var c;a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}c=1;break a;}c=0;}return c;}
function RG(b){var c;if(b===null)G(Z(B(261)));NF(b);c=(AAi()).Y(b.H0());if(c!==null)return c;G(Bqu(b));}
function AGf(a){return a.Ce;}
function AFH(a,b){var c,d,e,$$je;a:{try{c=a.mf();DJ();d=Br_;d=QN(c,d);c=Br_;d=Nd(d,c);d=AB8(d,b);}catch($$e){$$je=T($$e);if($$je instanceof EA){e=$$je;break a;}else{throw $$e;}}return d;}G(A8o(B(262),e));}
function Zu(a,b){var c,d,e,$$je;a:{try{c=a.m6();DJ();d=Br_;d=M0(c,d);c=Br_;d=NY(d,c);d=ADh(d,b);}catch($$e){$$je=T($$e);if($$je instanceof EA){e=$$je;break a;}else{throw $$e;}}return d;}G(A8o(B(262),e));}
function Vy(){var a=this;Dk.call(a);a.vP=0;a.t0=0;}
function Vn(a,b,c){var d=new Vy();AMn(d,a,b,c);return d;}
function AMn(a,b,c,d){HW(a,b,Y(BM,0));a.vP=c;a.t0=d;}
function AR$(a){return Bnf(a,a.vP,a.t0);}
function AK3(a){return Bnc(a,a.vP,a.t0);}
var Is=D();
var OD=D(Is);
var R5=D(CC);
var EH=D(Ci);
var Cc=D();
function Bl$(){var a=new Cc();Ds(a);return a;}
function Ds(a){J(a);}
function AYu(a,b){}
function A4z(a,b){}
function SF(){var a=this;Cc.call(a);a.GF=null;a.sa=null;}
function BjB(a,b){var c=new SF();A7v(c,a,b);return c;}
function A7v(a,b,c){a.sa=b;a.GF=c;Ds(a);}
function Bbm(a,b){}
function A7S(a,b){(Ep()).fI((((H()).a(B(263))).a(a.GF)).b());}
function AUT(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=c.HA(B(264));e=d.data;f=new F6;g=e.length;Q2(f,g);h=0;while(true){if(h>=g){i=0;while(i<f.j){j=f.o(i);if(a.sa.NU(j.tu)){j.M2=j.Dx;j.MN=1;}else a.sa.Ip(1,j.tu,j.FR,j.yZ,BkU(a));i=i+1|0;}return 0;}k=e[h];l=k.HA(B(37));m=l.data;if(m.length!=4)break;JD();n=Bu6;if(m[0].C(B(265)))n=Bu7;if(m[0].C(B(266)))n=Bu8;if(m[0].C(B(267)))n=Bu9;if(m[0].C(B(93)))n=Bu$;o=AI5(m[2]);if(n===Bu9&&!(Dt()).SZ())o=X;f.E(Bol(m[1].Qf(),n,o,m[3]));h=h+1|0;}G(W(B(268)));}
function AMW(a,b,c){return a.LX(b,c);}
var S0=D();
function BhU(b){var c,d,e,f,g,h,i,j,k;c=Bl5(b.sp());d=ABH(c);e=Be(d*2|0);f=0;g=0;h=0;i=0;while(i<d){j=e.data;g=g+RY(c)|0;h=h+RY(c)|0;k=f+1|0;j[f]=g;f=k+1|0;j[k]=h;i=i+1|0;}return e;}
function KV(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function A2m(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=Y(OB,16384);d=Cy(16384);e=0;f=0;g=0;h=0;while(h<b.k()){i=KV(b.g(h));if(i==64){h=h+1|0;i=KV(b.g(h));j=0;k=1;l=0;while(l<3){h=h+1|0;m=KV(b.g(h));j=j|Cp(k,m);k=k*64|0;l=l+1|0;}}else if(i<32)j=1;else{i=(i-32|0)<<24>>24;h=h+1|0;j=KV(b.g(h));}if(!i&&j>=128){if(e>0){n=c.data;o=f+1|0;n[f]=AP2(g,g+e|0,QS(d,e));f=o;}g=g+(e+j|0)|0;e=0;}else{p=d.data;o=e+j|0;if(o<p.length)q=f;else{n=c.data;q=f+1|0;n[f]=AP2(g,g+e|0,QS(d,e));g=g+o|0;e=0;}while(true){o=j+(-1)|0;if(j<=0)break;r
=e+1|0;p[e]=i;e=r;j=o;}f=q;}h=h+1|0;}return KS(c,f);}
var II=D(0);
function Wa(){var a=this;C.call(a);a.x_=null;a.ya=null;a.x8=0;a.x9=null;}
function BmK(a,b,c,d){var e=new Wa();A8V(e,a,b,c,d);return e;}
function A8V(a,b,c,d,e){J(a);a.x_=b;a.ya=c;a.x8=d;a.x9=e;}
function AR5(a){AU1(a.x_,a.ya,a.x8,a.x9);}
function SG(){var a=this;Cc.call(a);a.pS=null;a.DG=null;a.GI=null;}
function BlG(a,b,c){var d=new SG();A31(d,a,b,c);return d;}
function A31(a,b,c,d){a.GI=b;a.pS=c;a.DG=d;Ds(a);}
function Ba5(a,b){a.pS.ez(b);}
function A_3(a,b){a.pS.cs(b);}
function BeD(a,b,c){var d;d=a.GI;JD();d.Ac(Bu8,a.DG,c);a.pS.cB(b,c);return 0;}
function BfF(a,b,c){return a.ig(b,c);}
var NE=D(0);
function ACa(){C.call(this);this.mN=null;}
function BmT(a){var b=new ACa();AVr(b,a);return b;}
function AVr(a,b){a.mN=b;J(a);}
function A87(a,b){a.mN.hb.fL();RZ(N(b),a.mN.hb);a.mN.KW(a.mN.hb);}
function Bbg(a,b){a.T2(b);}
function SH(){var a=this;Cc.call(a);a.nJ=null;a.DC=null;a.Gs=null;a.xM=null;}
function BmE(a,b,c,d){var e=new SH();AK6(e,a,b,c,d);return e;}
function AK6(a,b,c,d,e){a.xM=b;a.nJ=c;a.DC=d;a.Gs=e;Ds(a);}
function ATe(a,b){a.nJ.ez(b);}
function BeK(a,b){a.nJ.cs(b);}
function AXf(a,b,c){a.xM.Ac(a.DC,a.Gs,c);a.nJ.cB(b,c);return 0;}
var LW=D();
var Bu_=null;function Bn8(){Bn8=L(LW);AYc();}
function AYc(){Bu_=Be((Or()).data.length);Bu_.data[Bi(Bu6)]=1;Bu_.data[Bi(Bu7)]=2;Bu_.data[Bi(Bu8)]=3;Bu_.data[Bi(Bu9)]=4;Bu_.data[Bi(Bu$)]=5;}
var Ye=D(Bu);
var Jf=D();
var Yd=D(Jf);
var Lc=D();
var Yg=D(Lc);
var JJ=D(KX);
function BoV(){var a=new JJ();U8(a);return a;}
function U8(a){To(a);}
function Uc(a){return (Td(a)).bK(48,57);}
var Lw=D(JJ);
function Bny(){var a=new Lw();Xs(a);return a;}
function Xs(a){U8(a);}
function AAn(a){return (((Uc(a)).bK(33,64)).bK(91,96)).bK(123,126);}
var AEW=D(Lw);
function Bnn(){var a=new AEW();AYZ(a);return a;}
function AYZ(a){Xs(a);}
function AUK(a){return (AAn(a)).cO(32);}
var AHw=D(U);
function BpX(){var a=new AHw();BbI(a);return a;}
function BbI(a){Bv(a);}
function AZP(a){return BmA(a);}
var Yf=D(Bu);
var AEw=D(DW);
function Bj5(a,b){var c=new AEw();AY9(c,a,b);return c;}
function AY9(a,b,c){Hq(a,b,c);}
function ANv(a,b,c,d){var e,f,g,h,i;e=a.bW.dr();f=!d.mc()?d.dW():0;a:{g=a.l.e(b,c,d);if(g>=0){d.bC(a.bt,b);h=0;while(true){if(h>=e)break a;i=a.bW.o(h);if(i.cQ(f,b,c,d)>=0){d.bC(a.bt,(-1));return g;}h=h+1|0;}}}return (-1);}
function Bi$(a,b){return 0;}
function AVX(a){return B(269);}
var Vp=D(Dk);
function BlW(){var a=new Vp();AP9(a);return a;}
function AP9(a){HW(a,B(270),Y(BM,0));}
function A55(a){return BpP(a);}
function A2S(a){return Bov(a);}
function PB(){var a=this;C.call(a);a.cX=null;a.cf=0;}
var Bva=null;function Dp(){Dp=L(PB);Bbv();}
function A1r(a){var b=new PB();AC1(b,a);return b;}
function ABv(b,c){var d;Dp();d=b>=0?1:2;while(true){b=b/c|0;if(!b)break;d=d+1|0;}return d;}
function AC1(a,b){Dp();J(a);if(b>=0){a.cX=B$(b);return;}G(Bg8());}
function Ky(a,b){var c,d;c=((a.cX.data.length>>1)+a.cX.data.length|0)+2|0;if(b>c)c=b;d=B$(c);Bc(a.cX,0,d,0,a.cf);a.cX=d;}
function QD(a){var b,c,d,e;b=a.cf+4|0;if(b>a.cX.data.length)Ky(a,b);c=a.cX.data;d=a.cf;a.cf=d+1|0;c[d]=110;c=a.cX.data;e=a.cf;a.cf=e+1|0;c[e]=117;c=a.cX.data;e=a.cf;a.cf=e+1|0;c[e]=108;c=a.cX.data;e=a.cf;a.cf=e+1|0;c[e]=108;}
function C4(a,b){var c,d;if(a.cf==a.cX.data.length)Ky(a,a.cf+1|0);c=a.cX.data;d=a.cf;a.cf=d+1|0;c[d]=b;}
function Kp(a,b){var c,d;if(b===null){QD(a);return;}c=b.k();d=a.cf+c|0;if(d>a.cX.data.length)Ky(a,d);b.qg(0,c,a.cX,a.cf);a.cf=d;}
function AK$(a){if(!a.cf)return B(59);return Hc(a.cX,0,a.cf);}
function AXl(a,b){C4(a,b);return a;}
function AX0(a,b){return a.I7(b,0);}
function AN7(a,b,c){return a.Uq(b,c,48);}
function ALq(a,b,c,d){var e;if(b==(-2147483648)){Kp(a,B(271));return a;}if(b<0){C4(a,45);b= -b|0;}a:{if(c>1){e=c-ABv(b,10)|0;while(true){if(e<=0)break a;a.l3(d);e=e+(-1)|0;}}}if(b>=10000){if(b>=1000000000){Dp();C4(a,Bva.data[V(Gc(A3k(N(b),Cs(1410065408, 2)),N(1000000000)))]);}if(b>=100000000){Dp();C4(a,Bva.data[(b%1000000000|0)/100000000|0]);}if(b>=10000000){Dp();C4(a,Bva.data[(b%100000000|0)/10000000|0]);}if(b>=1000000){Dp();C4(a,Bva.data[(b%10000000|0)/1000000|0]);}if(b>=100000){Dp();C4(a,Bva.data[(b%1000000
|0)/100000|0]);}Dp();C4(a,Bva.data[(b%100000|0)/10000|0]);}if(b>=1000){Dp();C4(a,Bva.data[(b%10000|0)/1000|0]);}if(b>=100){Dp();C4(a,Bva.data[(b%1000|0)/100|0]);}if(b>=10){Dp();C4(a,Bva.data[(b%100|0)/10|0]);}Dp();C4(a,Bva.data[b%10|0]);return a;}
function Bas(a,b){if(b===null)QD(a);else Kp(a,b.b());return a;}
function A9o(a,b){Kp(a,b);return a;}
function Bbv(){Bva=KP([48,49,50,51,52,53,54,55,56,57]);}
var WG=D(Ci);
var YT=D(Bt);
function TP(){var a=new YT();A8v(a);return a;}
function A8v(a){CQ(a);}
var AE1=D(CW);
var YV=D();
var JY=D(0);
function Qq(){var a=this;C.call(a);a.dP=null;a.lL=null;a.vl=null;a.oh=null;a.xX=0;a.oc=0;a.ur=0;a.HN=0;a.ep=0;a.Lb=0;a.RZ=0;a.eg=0;a.Uc=0;a.hP=0;a.v_=0;}
function Bvb(a,b,c,d,e,f){var g=new Qq();Wl(g,a,b,c,d,e,f);return g;}
function Wl(a,b,c,d,e,f,g){var h;J(a);a.hP=(-1);h=e+1|0;a.xX=h;a.dP=Be(h*2|0);a.lL=Be(g);Ko(a.lL,(-1));if(f>0)a.vl=Be(f);Ko(a.dP,(-1));a.uK(b,c,d);}
function A0f(a,b,c){a.lL.data[b]=c;}
function A_X(a,b){return a.lL.data[b];}
function A2T(a){return a.pY(0);}
function ATl(a,b){Pz(a,b);return a.dP.data[(b*2|0)+1|0];}
function A6Y(a,b,c){a.dP.data[b*2|0]=c;}
function A47(a,b,c){a.dP.data[(b*2|0)+1|0]=c;}
function Bdu(a,b){return a.dP.data[b*2|0];}
function AXt(a,b){return a.dP.data[(b*2|0)+1|0];}
function ALS(a,b){if(a.l8(b)<0)return null;return (a.oh.en(a.l8(b),a.pY(b))).b();}
function A$3(a,b){var c,d;c=a.jO(b);d=a.of(b);if((d|c|(d-c|0))>=0&&d<=a.oh.k())return (a.oh.en(c,d)).b();return null;}
function AXm(a){return a.l8(0);}
function ANK(a,b){Pz(a,b);return a.dP.data[b*2|0];}
function AUi(a){if(a.dP.data[0]==(-1)){a.dP.data[0]=a.ep;a.dP.data[1]=a.ep;}a.hP=a.qB();}
function A3n(a,b){return a.vl.data[b];}
function A6g(a,b,c){a.vl.data[b]=c;}
function Pz(a,b){if(!a.oc)G(If());if(b>=0&&b<a.xX)return;G(Bm(K5(b)));}
function Bha(a){a.oc=1;}
function Bhc(a){return a.oc;}
function Bh_(a,b,c,d){a.oc=0;a.v_=2;Ko(a.dP,(-1));Ko(a.lL,(-1));if(b!==null)a.oh=b;if(c>=0)Y1(a,c,d);a.ep=a.ur;}
function AOp(a){a.uK(null,(-1),(-1));}
function Y1(a,b,c){a.ur=b;a.HN=c;}
function Bes(a,b){a.ep=b;if(a.hP>=0)b=a.hP;a.hP=b;}
function A5H(a){return a.ur;}
function Bak(a){return a.HN;}
function A7E(a,b){a.v_=b;}
function AQm(a){return a.v_;}
function A9U(a){return a.RZ;}
function A3l(a){return a.Lb;}
function A4j(a){return a.hP;}
function Un(){var a=this;C.call(a);a.dN=null;a.cZ=null;a.dm=null;a.cE=null;a.dX=null;a.lf=null;a.DB=null;}
function BjJ(){var a=new Un();BaT(a);return a;}
function BaT(a){J(a);a.dN=BH();a.cZ=BfY();}
var ABA=D();
var E4=D();
var Xc=D(CT);
function Lp(){var a=this;C.call(a);a.fc=0;a.uf=0;a.ug=0;a.cD=0;a.cV=0;a.wW=0.0;a.qV=0.0;a.C$=0.0;a.un=0.0;a.dD=0;a.jE=0;a.gM=0;a.i2=null;a.o5=0;a.kj=0;}
function AMQ(){var a=new Lp();Bfd(a);return a;}
function Bfd(a){J(a);a.kj=0;}
function A_w(a,b){var c;if(a.i2!==null){c=a.i2.data[b>>>9];if(c!==null)return c.data[b&511];}return 0;}
function Bdn(a,b,c){var d,e,f;if(a.i2===null)a.i2=Y($rt_arraycls($rt_bytecls()),128);d=a.i2.data;e=b>>>9;f=d[e];if(f===null){d=a.i2.data;f=Cy(512);d[e]=f;}f.data[b&511]=c<<24>>24;}
function AQ3(a){return J2(a.fc&65535);}
function AAh(){Cc.call(this);this.Lf=null;}
function Bqx(a){var b=new AAh();A4M(b,a);return b;}
function A4M(a,b){a.Lf=b;Ds(a);}
function Bfk(a,b,c){(Dt()).i9();Bg2(BmL(a));return 1;}
function APp(a,b){}
function AAf(){var a=this;Cc.call(a);a.FA=null;a.v6=null;}
function BkL(a,b){var c=new AAf();A0k(c,a,b);return c;}
function A0k(a,b,c){a.v6=b;a.FA=c;Ds(a);}
function AWO(a,b,c){a.v6.vm=1;return 1;}
function Bax(a,b){AMo(a.v6,a.FA);}
function AAz(){S.call(this);this.HY=null;}
function BlD(a){var b=new AAz();ASQ(b,a);return b;}
function ASQ(a,b){a.HY=b;Bh(a);}
function Bix(a,b){return ZN(b);}
function AAg(){Cc.call(this);this.Kc=null;}
function BjN(a){var b=new AAg();A4U(b,a);return b;}
function A4U(a,b){a.Kc=b;Ds(a);}
function AR6(a,b,c){var d;d=ABy(c);(Dt()).i9();A3F(d,Bo1(a));return 1;}
function Be2(a,b){}
function A2R(a,b,c){return a.ig(b,c);}
function Gq(){var a=this;C.call(a);a.ey=0;a.pX=0;a.mr=null;a.lV=null;a.pf=null;a.nY=null;a.na=0.0;}
var Bvc=0.0;function Qx(){Qx=L(Gq);ARo();}
function Mw(a,b,c){Qx();J(a);Tf();a.mr=Bvd;a.lV=Bvd;A2Q();a.pf=Bve;a.nY=Bve;a.na=1.0;a.ey=b;a.pX=c;}
function BaP(a){Btu.tC(a.ey,a.pX);}
function AZg(a,b){Btu.sx(33984+b|0);Btu.tC(a.ey,a.pX);}
function AQH(a){return a.pX;}
function A0M(a,b,c){a.xR(b,c,0);}
function AWM(a,b,c,d){if(b!==null&&!(!d&&a.pf===b)){Btu.jG(a.ey,10242,Iu(b));a.pf=b;}if(c!==null&&!(!d&&a.nY===c)){Btu.jG(a.ey,10243,Iu(c));a.nY=c;}}
function AMc(a,b,c){a.Fb(b,c,0);}
function AKG(a,b,c,d){if(b!==null&&!(!d&&a.mr===b)){Btu.jG(a.ey,10241,Fw(b));a.mr=b;}if(c!==null&&!(!d&&a.lV===c)){Btu.jG(a.ey,10240,Fw(c));a.lV=c;}}
function A8q(a,b,c){a.mr=b;a.lV=c;a.d8();Btu.jG(a.ey,10241,Fw(b));Btu.jG(a.ey,10240,Fw(c));}
function AQn(a,b,c){var d,e;d=AD1();if(d===1.0)return 1.0;e=Lh(b,d);if(!c&&WO(e,a.na,0.10000000149011612))return a.na;Btv.S_(3553,34046,e);a.na=e;return e;}
function AD1(){var b,c;Qx();if(Bvc>0.0)return Bvc;if(!Btr.u0(B(272))){Bvc=1.0;return 1.0;}b=Jv(16);b.c$(0);b.cu(Dg(b));Btv.Qc(34047,b);c=b.oO(0);Bvc=c;return c;}
function AJn(b,c){Qx();AJl(b,c,0);}
function AJl(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;Qx();if(c===null)return;if(!c.zs())c.Bx();e=c.Si();RN();if(e===Bvf){c.Js(b);return;}f=c.U2();g=c.Hh();if(c.gl()===f.gl())h=f;else{h=RI(f.bk(),f.bj(),c.gl());HJ();h.FV(Bvg);h.AQ(f,0,0,0,0,f.bk(),f.bj());if(c.Hh())f.iU();g=1;}Btu.IZ(3317,1);if(c.Vm())AHt(b,h,h.bk(),h.bj());else{i=Btu;j=h.k0();k=h.bk();l=h.bj();m=h.mw();n=h.lJ();o=h.k2();i.k3(b,d,j,k,l,0,m,n,o);}if(g)h.iU();}
function ARo(){Bvc=0.0;}
function NH(){Gq.call(this);this.h$=null;}
var Bvh=null;function G_(){G_=L(NH);BdF();}
function BoG(a){var b=new NH();AEA(b,a);return b;}
function AZM(a,b){var c=new NH();AGV(c,a,b);return c;}
function Bvi(a,b,c){var d=new NH();JL(d,a,b,c);return d;}
function Bvj(a){var b=new NH();LC(b,a);return b;}
function Bvk(a,b,c){var d=new NH();Qc(d,a,b,c);return d;}
function AEA(a,b){G_();JL(a,b,null,0);}
function AGV(a,b,c){G_();JL(a,b,null,c);}
function JL(a,b,c,d){G_();LC(a,A07(b,c,d));}
function LC(a,b){G_();Qc(a,3553,Btu.LR(),b);}
function Qc(a,b,c,d){G_();Mw(a,b,c);a.QL(d);if(d.rt())So(Bsf,a);}
function A0a(a,b){if(a.h$!==null&&b.rt()!=a.h$.rt())G(W(B(273)));a.h$=b;if(!b.zs())b.Bx();a.d8();AJn(3553,b);a.Fb(a.mr,a.lV,1);a.xR(a.pf,a.nY,1);a.Ux(a.na,1);Btu.tC(a.ey,0);}
function AV1(a){return a.h$.bk();}
function Bf2(a){return a.h$.bj();}
function AU_(a){if(!(a.h$ instanceof IP))return S2(a);return a.h$.b();}
function So(b,c){var d;G_();d=Bvh.Y(b);if(d===null)d=Bs();d.E(c);Bvh.A(b,d);}
function BdF(){Bvh=Dq();}
var MF=D(Bt);
function K0(a,b){var c=new MF();ALb(c,a,b);return c;}
function W(a){var b=new MF();TT(b,a);return b;}
function ALb(a,b,c){S9(a,b,c);}
function TT(a,b){Fy(a,b);}
var ND=D(0);
function ACb(){C.call(this);this.mZ=null;}
function Bl7(a){var b=new ACb();AUV(b,a);return b;}
function AUV(a,b){a.mZ=b;J(a);}
function BbK(a,b){a.mZ.hb.fL();a.mZ.Vx(a.mZ.hb);ADg(a.mZ.hb,N(b));}
function A1P(a,b){a.Ra(b);}
var Ww=D(Cn);
function E1(){var a=this;BO.call(a);a.mS=0;a.rJ=null;a.qY=null;a.qS=0;}
function BqT(a,b){var c=new E1();LU(c,a,b);return c;}
function LU(a,b,c){Da(a);a.mS=1;a.qY=b;a.qS=c;}
function BhT(a,b){a.l=b;}
function AV_(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=Be(4);f=0;g=d.O();if(b>=g)return (-1);h=a.wE(b,c,g);i=b+a.mS|0;j=AIz(h);if(j===null){k=e.data;l=1;k[f]=h;}else{l=j.data.length;Bc(j,0,e,0,l);l=f+l|0;}a:{if(i<g){m=a.wE(i,c,g);while(l<4){if(!BcW(m)){k=e.data;n=l+1|0;k[l]=m;}else{k=(AIz(m)).data;if(k.length!=2){o=e.data;n=l+1|0;o[l]=k[0];}else{o=e.data;m=l+1|0;o[l]=k[0];n=m+1|0;o[m]=k[1];}}i=i+a.mS|0;if(i>=g){l=n;break a;}m=a.wE(i,c,g);l=n;}}}if(l!=a.qS)return (-1);p=0;while(true){if(p>=l)return a.l.e(i,c,d);if
(e.data[p]!=a.qY.data[p])break;p=p+1|0;}return (-1);}
function JZ(a){var b,c;if(a.rJ===null){b=H();c=0;while(c<a.qS){b.rQ(Fm(a.qY.data[c]));c=c+1|0;}a.rJ=b.b();}return a.rJ;}
function Bcb(a){return (((H()).a(B(274))).a(JZ(a))).b();}
function ASh(a,b,c,d){var e,f,g,h;a.mS=1;if(b>=(d-1|0))e=c.g(b);else{f=b+1|0;e=c.g(b);g=c.g(f);if(HQ(e,g)){h=KP([e,g]);e=WY(h,0);a.mS=2;}}return e;}
function AS9(a,b){var c,d;a:{if(b instanceof E1){c=b;if(!(JZ(c)).C(JZ(a))){d=0;break a;}}d=1;}return d;}
function BdG(a,b){return 1;}
var Dn=D(Bt);
function C7(){var a=new Dn();G$(a);return a;}
function Z(a){var b=new Dn();AJ0(b,a);return b;}
function G$(a){CQ(a);}
function AJ0(a,b){Fy(a,b);}
function XS(){Dn.call(this);this.IB=null;}
function ADO(a){var b=new XS();AZh(b,a);return b;}
function AZh(a,b){G$(a);a.IB=b;}
function YQ(){var a=this;C.call(a);a.bE=null;a.kV=0;a.gg=null;a.eq=null;a.bR=null;a.bQ=null;a.pM=null;a.pN=null;a.n9=null;a.nd=0;a.l2=null;a.oi=0;a.o0=null;a.pj=null;a.bF=null;a.fx=X;a.jT=0;}
function Bkl(a){var b=new YQ();APe(b,a);return b;}
function ARC(b){var c,d,e,f,g;c=A4F();d=0.0;e=b.detail;f=b.wheelDelta;if(c.firefox?1:0)d=(c.macOS?1:0)?1.0*e:1.0*e/3.0;else if(c.opera?1:0)d=!(c.linux?1:0)?(-1.0)*f/40.0:(-1.0)*f/80.0;else if(!(!(c.chrome?1:0)&&!(c.safari?1:0)&&!(c.IE?1:0))){d=(-1.0)*f;g=d/120.0;if(C1(g)>=1.0)d=g;else if(!(c.windows?1:0))d=!(c.macOS?1:0)?g:d/3.0;}return d;}
function APe(a,b){J(a);a.kV=0;a.gg=BnH(20);a.eq=Rf(20);a.bR=Be(20);a.bQ=Be(20);a.pM=Be(20);a.pN=Be(20);a.n9=Bqi();a.nd=0;a.l2=Rf(256);a.oi=0;a.o0=Rf(256);a.pj=Rf(5);a.jT=1;a.bE=b;AEI(a);}
function AEI(a){var b;b=a.bE.ownerDocument;b.addEventListener("mousedown",BJ(a,"handleEvent"),!!0);b.addEventListener("mouseup",BJ(a,"handleEvent"),!!0);b.addEventListener("mousemove",BJ(a,"handleEvent"),!!0);b.addEventListener("wheel",BJ(a,"handleEvent"),!!0);b.addEventListener("keydown",BJ(a,"handleEvent"),!!0);b.addEventListener("keyup",BJ(a,"handleEvent"),!!0);b.addEventListener("keypress",BJ(a,"handleEvent"),!!0);a.bE.addEventListener("touchstart",BJ(a,"handleEvent"),!!1);a.bE.addEventListener("touchmove",
BJ(a,"handleEvent"),!!1);a.bE.addEventListener("touchcancel",BJ(a,"handleEvent"),!!1);a.bE.addEventListener("touchend",BJ(a,"handleEvent"),!!1);}
function A_j(a,b){AJM(a,b);AEe(a,b);}
function AJM(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;a:{c=$rt_str(b.type);if(c.C(B(275))){d=b;e=b.target;f=a.bE;g=e!==f?0:1;if(g&&!a.eq.data[0]){a.jT=1;a.kV=1;a.eq.data[0]=1;h=Lg(d.button);a.n9.Mq(h);a.pj.data[h]=1;a.pM.data[0]=0;a.pN.data[0]=0;if(!a.tk()){i=a.kQ(d,a.bE);j=a.kH(d,a.bE);a.bR.data[0]=i;a.bQ.data[0]=j;}else{k=a.bR.data;k[0]=k[0]+Gi(a,d)|0;k=a.bQ.data;k[0]=k[0]+FO(a,d)|0;}a.fx=CV();if(a.bF!==null)a.bF.iL(a.bR.data[0],a.bQ.data[0],0,Lg(d.button));b.preventDefault();b.stopPropagation();break a;}l
=a.kQ(d,a.bE);m=a.kH(d,a.bE);if(!(l>=0.0&&l<=Btr.bk()&&m>=0.0&&m<=Btr.bj()))a.jT=0;return;}if(c.C(B(276))){d=b;if(!a.eq.data[0])return;a.n9.QK(Lg(d.button));k=a.eq;k.data[0]=a.n9.eK<=0?0:1;if(a.tk()){a.hl(0,Gi(a,d)|0,FO(a,d)|0);k=a.bR.data;k[0]=k[0]+Gi(a,d)|0;k=a.bQ.data;k[0]=k[0]+FO(a,d)|0;}else{a.hl(0,a.kQ(d,a.bE)-a.bR.data[0]|0,a.kH(d,a.bE)-a.bQ.data[0]|0);a.bR.data[0]=a.kQ(d,a.bE);a.bQ.data[0]=a.kH(d,a.bE);}a.fx=CV();a.eq.data[0]=0;if(a.bF!==null)a.bF.h_(a.bR.data[0],a.bQ.data[0],0,Lg(d.button));}else if
(!c.C(B(277))){if(c.C(B(278))){n=b;if(a.bF!==null){o=ARC(n);a.bF.pp(0.0,o|0);}a.fx=CV();}else if(c.C(B(279))){a.kV=1;p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;v=a.gg;w=AHX(a);v.OC(u,Bl(w));a.eq.data[w]=1;a.bR.data[w]=a.m7(t,a.bE);a.bQ.data[w]=a.k$(t,a.bE);a.pM.data[w]=0;a.pN.data[w]=0;if(a.bF!==null)a.bF.iL(a.bR.data[w],a.bQ.data[w],w,0);r=r+1|0;}a.fx=CV();b.preventDefault();}}else{d=b;if(a.tk()){a.hl(0,Gi(a,d)|0,FO(a,d)|0);k=a.bR.data;k[0]=k[0]+Gi(a,d)|0;k=a.bQ.data;k[0]=k[0]
+FO(a,d)|0;}else{i=a.kQ(d,a.bE);j=a.kH(d,a.bE);a.hl(0,i-a.bR.data[0]|0,j-a.bQ.data[0]|0);a.bR.data[0]=i;a.bQ.data[0]=j;}a.fx=CV();if(a.bF!==null){if(!a.eq.data[0])a.bF.nM(a.bR.data[0],a.bQ.data[0]);else a.bF.jw(a.bR.data[0],a.bQ.data[0],0);}}}if(c.C(B(280))){p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;x=(a.gg.o(u)).lR();a.hl(x,a.m7(t,a.bE)-a.bR.data[x]|0,a.k$(t,a.bE)-a.bQ.data[x]|0);a.bR.data[x]=a.m7(t,a.bE);a.bQ.data[x]=a.k$(t,a.bE);if(a.bF!==null)a.bF.jw(a.bR.data[x],a.bQ.data[x],
x);r=r+1|0;}a.fx=CV();b.preventDefault();}if(c.C(B(281))){p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;x=(a.gg.o(u)).lR();a.gg.m_(u);a.eq.data[x]=0;i=a.m7(t,a.bE);j=a.k$(t,a.bE);a.hl(x,i-a.bR.data[x]|0,j-a.bQ.data[x]|0);a.bR.data[x]=i;a.bQ.data[x]=j;if(a.bF!==null)a.bF.h_(a.bR.data[x],a.bQ.data[x],x,0);r=r+1|0;}a.fx=CV();b.preventDefault();}if(c.C(B(282))){p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;x=(a.gg.o(u)).lR();a.gg.m_(u);a.eq.data[x]=0;i
=a.m7(t,a.bE);j=a.k$(t,a.bE);a.hl(x,i-a.bR.data[x]|0,j-a.bQ.data[x]|0);a.bR.data[x]=i;a.bQ.data[x]=j;if(a.bF!==null)a.bF.h_(a.bR.data[x],a.bQ.data[x],x,0);r=r+1|0;}a.fx=CV();b.preventDefault();}}
function AEe(a,b){var c,d,e,f,g;c=$rt_str(b.type);if(!(c.C(B(283))&&a.jT)){if(c.C(B(284))&&a.jT){d=b.charCode&65535;if(a.bF!==null)a.bF.lX(d);}else if(c.C(B(285))&&a.jT){e=Wi(b.keyCode);if(a.l2.data[e]){a.nd=a.nd-1|0;a.l2.data[e]=0;}if(a.bF!==null)a.bF.pl(e);}}else{a:{f=b;e=Wi(f.keyCode);g=0;switch(e){case 67:g=8;break a;case 112:g=127;break a;default:}}if(!(e!=67&&e!=112)){b.preventDefault();if(a.bF!==null){a.bF.mb(e);a.bF.lX(g);}}else if(!a.l2.data[e]){a.nd=a.nd+1|0;a.l2.data[e]=1;a.oi=1;a.o0.data[e]=1;if
(a.bF!==null)a.bF.mb(e);}}}
function AHX(a){var b;b=0;while(true){if(b>=20)return (-1);if(!a.gg.H8(Bl(b),0))break;b=b+1|0;}return b;}
function ASr(a){var b;a:{if(a.kV){a.kV=0;b=0;while(true){if(b>=a.pj.data.length)break a;a.pj.data[b]=0;b=b+1|0;}}}b:{if(a.oi){a.oi=0;b=0;while(true){if(b>=a.o0.data.length)break b;a.o0.data[b]=0;b=b+1|0;}}}}
function Bgc(a,b,c,d){a.pM.data[b]=c;a.pN.data[b]=d;}
function Gi(a,b){return b.movementX;}
function FO(a,b){return b.movementY;}
function Mb(a,b){var c,d;c=$rt_str(b.compatMode);d=c.C(B(286));if(d)b=b.documentElement;return b;}
function IW(a,b){var c;c=b.scrollTop;return Ji(c);}
function L0(a,b){var c;c=Mb(a,b);return IW(a,c);}
function JX(a,b){var c;c=b.scrollLeft;return Ji(c);}
function N1(a,b){var c;c=Mb(a,b);return JX(a,c);}
function VU(a,b,c){var d;d=(c.clientX-Q4(a,b)|0)+JX(a,b)|0;d=d+N1(a,b.ownerDocument)|0;return d;}
function AGT(a,b,c){var d;d=(c.clientY-Qi(a,b)|0)+IW(a,b)|0;d=d+L0(a,b.ownerDocument)|0;return d;}
function AUb(a,b,c){var d,e;d=c.width*1.0/MN(a,c);e=d*(((b.clientX-Q4(a,c)|0)+JX(a,c)|0)+N1(a,c.ownerDocument)|0);return DH(e);}
function ARL(a,b,c){var d,e;d=c.height*1.0/QB(a,c);e=d*(((b.clientY-Qi(a,c)|0)+IW(a,c)|0)+L0(a,c.ownerDocument)|0);return DH(e);}
function Bh7(a,b,c){var d;d=c.width*1.0/MN(a,c);return DH(d*VU(a,c,b));}
function A9K(a,b,c){var d;d=c.height*1.0/QB(a,c);return DH(d*AGT(a,c,b));}
function MN(a,b){return b.clientWidth;}
function QB(a,b){return b.clientHeight;}
function Qi(a,b){return Ji(WD(a,b));}
function WD(a,b){var c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollTop;d=d.parentNode;}while(b!==null){c=c+b.offsetTop;b=d.offsetParent;}return c;}
function Q4(a,b){return Ji(AFR(a,b));}
function AFR(a,b){var c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollLeft;d=d.parentNode;}while(b!==null){c=c+b.offsetLeft;b=d.offsetParent;}return c;}
function Ji(b){return b|0;}
function A4n(a,b){return a.eq.data[b];}
function AO5(a){return a.fx;}
function ANI(a,b){a.bF=b;}
function Bi_(a){return 0;}
function AXi(a,b){a.d9(b);}
var Ip=D(Bu);
var Bvl=null;function Bvm(){Bvm=L(Ip);ALn();}
function ALn(){Bvl=BB();}
var VX=D();
var N8=D(0);
var Hx=D(0);
var Qd=D(0);
var Es=D();
function Iw(a){J(a);}
function AK1(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.xf(f[c]);e=e+1|0;c=g;}}
function Kh(){Es.call(this);this.wO=null;}
function Bvn(a){var b=new Kh();RJ(b,a);return b;}
function RJ(a,b){Iw(a);a.wO=b;}
function I2(){var a=this;Kh.call(a);a.Mf=0;a.sf=0;a.fg=null;a.kW=null;a.Az=null;}
function Bvo(a,b){var c=new I2();QP(c,a,b);return c;}
function QP(a,b,c){RJ(a,b);a.fg=H();a.kW=B$(32);a.Mf=c;IY();a.Az=Bvp;}
function BbS(a,b,c,d){var $$je;if(!AHQ(a))return;a:{try{a.wO.nO(b,c,d);break a;}catch($$e){$$je=T($$e);if($$je instanceof DD){}else{throw $$e;}}a.sf=1;}}
function AHQ(a){if(a.wO===null)a.sf=1;return a.sf?0:1;}
function OL(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.data;f=AE$(b,c,d-c|0);g=Cy(Bj(16,Bw(e.length,1024)));h=IV(g);i=a.Az.m6();DJ();j=Br_;i=M0(i,j);j=Br_;k=NY(i,j);while(true){l=(Kk(k,f,h,1)).ip();a.nO(g,0,Ck(h));LV(h);if(!l)break;}while(true){l=(LD(k,h)).ip();a.nO(g,0,Ck(h));LV(h);if(!l)break;}}
function A7B(a,b){a.kW.data[0]=b;OL(a,a.kW,0,1);}
function A$E(a,b){a.fg.a(b);Ki(a);}
function A6f(a,b){(a.fg.a(b)).ba(10);Ki(a);}
function ASW(a,b){(a.fg.c0(b)).ba(10);Ki(a);}
function BdR(a){a.I0(10);}
function Ki(a){var b;b=a.fg.k()<=a.kW.data.length?a.kW:B$(a.fg.k());a.fg.qg(0,a.fg.k(),b,0);OL(a,b,0,a.fg.k());a.fg.vD(0);}
var Wu=D(DW);
function Boh(a,b){var c=new Wu();A3H(c,a,b);return c;}
function A3H(a,b,c){Hq(a,b,c);}
function A28(a,b,c,d){var e,f,g,h;e=a.bW.dr();d.bC(a.bt,b);f=0;while(true){if(f>=e)return a.l.e(b,c,d);g=a.bW.o(f);h=g.cQ(0,b,c,d);if(h>=0)break;f=f+1|0;}return (-1);}
function Bei(a,b){return 0;}
function AM1(a){return B(287);}
var Kv=D(Dd);
function AGC(a,b,c,d){GQ(a,b);a.G=c;a.bg=d;}
function ASt(b,c,d){return Bpf(0,b.data.length,b,c,c+d|0,0);}
function A9p(b){return ASt(b,0,b.data.length);}
function XW(a){Ha(a);return a;}
function Bbp(a){return XW(a);}
var GB=D(Kv);
function OS(a,b,c,d){AGC(a,b,c,d);}
function AZn(a){var b;if(a.G>=a.bg)G(Zn());b=a.G;a.G=b+1|0;return a.qN(b);}
function Bbj(a,b){var c;if(a.ci())G(Dv());if(a.G>=a.bg)G(Hb());c=a.G;a.G=c+1|0;a.oq(c,b);return a;}
function AUo(a,b){if(b>=0&&b<a.bg)return a.qN(b);G(Bm(((((((H()).a(B(288))).h(b)).a(B(56))).h(a.bg)).a(B(21))).b()));}
function Bgd(a,b,c){if(a.ci())G(Dv());if(b>=0&&b<a.bg){a.oq(b,c);return a;}G(Bm(((((((H()).a(B(288))).h(b)).a(B(56))).h(a.bg)).a(B(21))).b()));}
function ATO(a){return a.fe();}
function GP(){var a=this;GB.call(a);a.cC=null;a.zo=0;a.ct=0;}
function LE(a,b,c,d,e,f,g){OS(a,c,e,f);a.ct=b;a.cC=d;a.zo=g;}
function ATx(a){return a.zo;}
var Sy=D(GP);
function Bpp(a,b,c,d,e,f){var g=new Sy();A7X(g,a,b,c,d,e,f);return g;}
function A7X(a,b,c,d,e,f,g){LE(a,b,c,d,e,f,g);}
function AQg(a,b){var c,d,e;c=a.cC.D.data;d=a.ct;e=b*4|0;return c[d+e|0]&255|(a.cC.D.data[(a.ct+e|0)+1|0]&255)<<8|(a.cC.D.data[(a.ct+e|0)+2|0]&255)<<16|(a.cC.D.data[(a.ct+e|0)+3|0]&255)<<24;}
function AKg(a,b,c){var d,e,f;d=a.cC.D.data;e=a.ct;f=b*4|0;d[e+f|0]=c<<24>>24;a.cC.D.data[(a.ct+f|0)+1|0]=c>>8<<24>>24;a.cC.D.data[(a.ct+f|0)+2|0]=c>>16<<24>>24;a.cC.D.data[(a.ct+f|0)+3|0]=c>>24<<24>>24;}
var XP=D(U);
function Bqz(){var a=new XP();A94(a);return a;}
function A94(a){Bv(a);}
function ATm(a){var b;b=BlD(a);b.bm=1;return b;}
function Bn(){var a=this;C.call(a);a.v=0.0;a.u=0.0;a.w=0.0;a.H=0.0;}
var Bvq=null;var Bvr=null;var Bvs=null;var Bvt=null;var Bvu=null;var Bvv=0.0;var Bvw=null;var Bvx=null;var Bvy=null;var Bvz=null;var BvA=null;var BvB=null;var BvC=null;var BvD=null;var BvE=null;var BvF=null;var BvG=null;var BvH=null;var BvI=null;var BvJ=null;var BvK=null;var BvL=null;var BvM=null;var BvN=null;var BvO=null;var BvP=null;var BvQ=null;var BvR=null;var BvS=null;var BvT=null;var BvU=null;var BvV=null;var BvW=null;var BvX=null;var BvY=null;function BC(){BC=L(Bn);A2W();}
function DM(){var a=new Bn();ZW(a);return a;}
function BY(a){var b=new Bn();AIH(b,a);return b;}
function CD(a,b,c,d){var e=new Bn();WN(e,a,b,c,d);return e;}
function BcU(a){var b=new Bn();YP(b,a);return b;}
function ZW(a){BC();J(a);}
function AIH(a,b){BC();J(a);JV(a,b);}
function WN(a,b,c,d,e){BC();J(a);a.v=b;a.u=c;a.w=d;a.H=e;a.dZ();}
function YP(a,b){BC();J(a);a.e5(b);}
function AL2(a,b){a.v=b.v;a.u=b.u;a.w=b.w;a.H=b.H;return a;}
function Bil(a,b){a.v=a.v*b.v;a.u=a.u*b.u;a.w=a.w*b.w;a.H=a.H*b.H;return a.dZ();}
function ALJ(a,b){a.v=a.v*b;a.u=a.u*b;a.w=a.w*b;a.H=a.H*b;return a.dZ();}
function BcJ(a,b){a.v=a.v+b.v;a.u=a.u+b.u;a.w=a.w+b.w;a.H=a.H+b.H;return a.dZ();}
function A4i(a,b){a.v=a.v-b.v;a.u=a.u-b.u;a.w=a.w-b.w;a.H=a.H-b.H;return a.dZ();}
function BeL(a){if(a.v<0.0)a.v=0.0;else if(a.v>1.0)a.v=1.0;if(a.u<0.0)a.u=0.0;else if(a.u>1.0)a.u=1.0;if(a.w<0.0)a.w=0.0;else if(a.w>1.0)a.w=1.0;if(a.H<0.0)a.H=0.0;else if(a.H>1.0)a.H=1.0;return a;}
function Bbr(a,b,c,d,e){a.v=b;a.u=c;a.w=d;a.H=e;return a.dZ();}
function AWC(a,b){JV(a,b);return a;}
function AKZ(a,b,c,d,e){a.v=a.v+b;a.u=a.u+c;a.w=a.w+d;a.H=a.H+e;return a.dZ();}
function AYH(a,b,c,d,e){a.v=a.v-b;a.u=a.u-c;a.w=a.w-d;a.H=a.H-e;return a.dZ();}
function Bfw(a,b,c,d,e){a.v=a.v*b;a.u=a.u*c;a.w=a.w*d;a.H=a.H*e;return a.dZ();}
function AVE(a,b,c){a.v=a.v+c*(b.v-a.v);a.u=a.u+c*(b.u-a.u);a.w=a.w+c*(b.w-a.w);a.H=a.H+c*(b.H-a.H);return a.dZ();}
function A5V(a,b,c,d,e,f){a.v=a.v+f*(b-a.v);a.u=a.u+f*(c-a.u);a.w=a.w+f*(d-a.w);a.H=a.H+f*(e-a.H);return a.dZ();}
function AUl(a){a.v=a.v*a.H;a.u=a.u*a.H;a.w=a.w*a.H;return a;}
function A7M(a,b){var c;if(a===b)return 1;if(b!==null&&Co(a)===Co(b)){c=b;return a.sX()!=c.sX()?0:1;}return 0;}
function ATT(a){var b,c;b=a.v===0.0?0:CX(a.v);c=(31*b|0)+(a.u===0.0?0:CX(a.u))|0;c=(31*c|0)+(a.w===0.0?0:CX(a.w))|0;c=(31*c|0)+(a.H===0.0?0:CX(a.H))|0;return c;}
function AZ4(a){var b;b=(255.0*a.H|0)<<24|(255.0*a.w|0)<<16|(255.0*a.u|0)<<8|255.0*a.v|0;return L1(b);}
function A12(a){return (255.0*a.H|0)<<24|(255.0*a.w|0)<<16|(255.0*a.u|0)<<8|255.0*a.v|0;}
function AOi(a){var b,c;b=(255.0*a.v|0)<<24|(255.0*a.u|0)<<16|(255.0*a.w|0)<<8|255.0*a.H|0;c=Re(b);while(c.k()<8){c=(((H()).a(B(289))).a(c)).b();}return c;}
function ANn(b){BC();return AJX(b,DM());}
function AJX(b,c){BC();if(b.g(0)==35)b=b.ex(1);c.v=DZ(b.cm(0,2),16)/255.0;c.u=DZ(b.cm(2,4),16)/255.0;c.w=DZ(b.cm(4,6),16)/255.0;c.H=b.k()!=8?1.0:DZ(b.cm(6,8),16)/255.0;return c;}
function ANb(b,c,d,e){var f,g;BC();f=e<<24|d<<16|c<<8|b;g=L1(f);return g;}
function T_(b,c,d,e){var f;BC();f=(255.0*e|0)<<24|(255.0*d|0)<<16|(255.0*c|0)<<8|255.0*b|0;return L1(f);}
function ASi(b,c,d,e){BC();return e<<24|d<<16|c<<8|b;}
function AQc(b){BC();return b*255.0|0;}
function BiC(b,c){BC();return (b*255.0|0)<<8|c*255.0|0;}
function A_b(b,c,d){BC();return (b*31.0|0)<<11|(c*63.0|0)<<5|d*31.0|0;}
function ASU(b,c,d,e){BC();return (b*15.0|0)<<12|(c*15.0|0)<<8|(d*15.0|0)<<4|e*15.0|0;}
function ASg(b,c,d){BC();return (b*255.0|0)<<16|(c*255.0|0)<<8|d*255.0|0;}
function BgW(b,c,d,e){BC();return (b*255.0|0)<<24|(c*255.0|0)<<16|(d*255.0|0)<<8|e*255.0|0;}
function A92(b,c,d,e){BC();return (b*255.0|0)<<24|(c*255.0|0)<<16|(d*255.0|0)<<8|e*255.0|0;}
function AWA(b){BC();return (b.v*31.0|0)<<11|(b.u*63.0|0)<<5|b.w*31.0|0;}
function BdT(b){BC();return (b.v*15.0|0)<<12|(b.u*15.0|0)<<8|(b.w*15.0|0)<<4|b.H*15.0|0;}
function AVC(b){BC();return (b.v*255.0|0)<<16|(b.u*255.0|0)<<8|b.w*255.0|0;}
function ALT(b){BC();return (b.v*255.0|0)<<24|(b.u*255.0|0)<<16|(b.w*255.0|0)<<8|b.H*255.0|0;}
function A$O(b){BC();return (b.H*255.0|0)<<24|(b.v*255.0|0)<<16|(b.u*255.0|0)<<8|b.w*255.0|0;}
function Bhx(b,c){BC();b.v=((c&63488)>>>11)/31.0;b.u=((c&2016)>>>5)/63.0;b.w=((c&31)>>>0)/31.0;}
function BbE(b,c){BC();b.v=((c&61440)>>>12)/15.0;b.u=((c&3840)>>>8)/15.0;b.w=((c&240)>>>4)/15.0;b.H=(c&15)/15.0;}
function Bb6(b,c){BC();b.v=((c&16711680)>>>16)/255.0;b.u=((c&65280)>>>8)/255.0;b.w=(c&255)/255.0;}
function JV(b,c){BC();b.v=((c&(-16777216))>>>24)/255.0;b.u=((c&16711680)>>>16)/255.0;b.w=((c&65280)>>>8)/255.0;b.H=(c&255)/255.0;}
function AXy(b,c){BC();b.H=((c&(-16777216))>>>24)/255.0;b.v=((c&16711680)>>>16)/255.0;b.u=((c&65280)>>>8)/255.0;b.w=(c&255)/255.0;}
function AFl(b,c){var d;BC();d=A9g(c);b.H=((d&(-16777216))>>>24)/255.0;b.w=((d&16711680)>>>16)/255.0;b.u=((d&65280)>>>8)/255.0;b.v=(d&255)/255.0;}
function Ben(a,b,c,d){var e,f,g,h,i,j;a:{e=(b/60.0+6.0)%6.0;f=e|0;g=e-f;h=d*(1.0-c);i=d*(1.0-c*g);j=d*(1.0-c*(1.0-g));switch(f){case 0:break;case 1:a.v=i;a.u=d;a.w=h;break a;case 2:a.v=h;a.u=d;a.w=j;break a;case 3:a.v=h;a.u=i;a.w=d;break a;case 4:a.v=j;a.u=h;a.w=d;break a;default:a.v=d;a.u=h;a.w=i;break a;}a.v=d;a.u=j;a.w=h;}return a.dZ();}
function A3e(a,b){var c;c=b.data;return a.Ty(c[0],c[1],c[2]);}
function Bd3(a,b){var c,d,e;c=EZ(EZ(a.v,a.u),a.w);d=Lh(Lh(a.v,a.u),a.w);e=c-d;if(e===0.0)b.data[0]=0.0;else if(c===a.v)b.data[0]=(60.0*(a.u-a.w)/e+360.0)%360.0;else if(c!==a.u)b.data[0]=60.0*(a.v-a.u)/e+240.0;else b.data[0]=60.0*(a.w-a.v)/e+120.0;if(c<=0.0)b.data[1]=0.0;else b.data[1]=1.0-d/c;b.data[2]=c;return b;}
function BgA(a){return BcU(a);}
function A2W(){Bvq=CD(1.0,1.0,1.0,1.0);Bvr=BY((-1077952513));Bvs=BY(2139062271);Bvt=BY(1061109759);Bvu=CD(0.0,0.0,0.0,1.0);Bvv=Bvq.hw();Bvw=CD(0.0,0.0,0.0,0.0);Bvx=CD(0.0,0.0,1.0,1.0);Bvy=CD(0.0,0.0,0.5,1.0);Bvz=BY(1097458175);BvA=BY(1887473919);BvB=BY((-2016482305));BvC=CD(0.0,1.0,1.0,1.0);BvD=CD(0.0,0.5,0.5,1.0);BvE=BY(16711935);BvF=BY(2147418367);BvG=BY(852308735);BvH=BY(579543807);BvI=BY(1804477439);BvJ=BY((-65281));BvK=BY((-2686721));BvL=BY((-626712321));BvM=BY((-5963521));BvN=BY((-1958407169));BvO=BY((-759919361));BvP
=BY((-1306385665));BvQ=BY((-16776961));BvR=BY((-13361921));BvS=BY((-8433409));BvT=BY((-92245249));BvU=BY((-9849601));BvV=CD(1.0,0.0,1.0,1.0);BvW=BY((-1608453889));BvX=BY((-293409025));BvY=BY((-1339006721));}
var EL=D();
var YE=D(EL);
function Fa(){var a=this;C.call(a);a.eS=0;a.cS=0;a.iI=0;a.ib=0;a.cp=0;a.eG=null;a.kf=0;a.FD=0;}
function Dr(a,b,c){var d=new Fa();AVi(d,a,b,c);return d;}
function BvZ(a,b,c,d){var e=new Fa();AJA(e,a,b,c,d);return e;}
function Bv0(a,b,c,d,e,f){var g=new Fa();AG$(g,a,b,c,d,e,f);return g;}
function AVi(a,b,c,d){AJA(a,b,c,d,0);}
function AJA(a,b,c,d,e){var f;f=Cl(b,4);AG$(a,b,c,f?5126:5121,f?0:1,d,e);}
function AG$(a,b,c,d,e,f,g){J(a);a.eS=b;a.cS=c;a.ib=d;a.iI=e;a.eG=f;a.kf=g;a.FD=F4(b);}
function AVn(a,b){if(!(b instanceof Fa))return 0;return MC(a,b);}
function MC(a,b){var c,d,e;a:{if(b!==null&&a.eS==b.eS&&a.cS==b.cS&&a.ib==b.ib&&a.iI==b.iI){c=a.eG;d=b.eG;if(c.C(d)&&a.kf==b.kf){e=1;break a;}}e=0;}return e;}
function KD(a){return (a.FD<<8)+(a.kf&255)|0;}
function TU(a){a:{switch(a.ib){case 5120:case 5121:break;case 5122:case 5123:return 2*a.cS|0;case 5124:case 5125:case 5127:case 5128:case 5129:case 5130:case 5131:break a;case 5126:case 5132:return 4*a.cS|0;default:break a;}return a.cS;}return 0;}
function A7g(a){var b,c;b=KD(a);c=(541*b|0)+a.cS|0;c=(541*c|0)+a.eG.bl()|0;return c;}
var FL=D(Bu);
function CY(){DC.call(this);this.bz=null;}
function BlV(a,b,c){var d=new CY();F5(d,a,b,c);return d;}
function F5(a,b,c,d){G9(a,b,c,d);a.bz=b;}
function A29(a,b,c,d){var e,f;e=0;a:{while((b+a.bz.co()|0)<=d.O()){f=a.bz.bM(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.l.e(b,c,d);if(f>=0)break;b=b-a.bz.co()|0;e=e+(-1)|0;}return f;}
function A6h(a){return B(290);}
var YC=D(CY);
function Bj0(a){var b=new YC();ASo(b,a);return b;}
function ASo(a,b){F5(a,b.qG(),b.Mk(),b.jq());a.bd.V(a);}
function Biw(a,b,c,d){var e;while((b+a.bz.co()|0)<=d.O()){e=a.bz;if(e.bM(b,c)<=0)break;b=b+a.bz.co()|0;}return a.l.e(b,c,d);}
function AVl(a,b,c,d){var e,f,g;e=a.l.cM(b,c,d);if(e<0)return (-1);f=e-a.bz.co()|0;while(f>=b&&a.bz.bM(f,c)>0){g=f-a.bz.co()|0;e=f;f=g;}return e;}
var On=D(0);
function Iq(){var a=this;C.call(a);a.rK=null;a.hs=null;a.i8=null;}
var Bv1=0;function BpD(a){var b=new Iq();Bfp(b,a);return b;}
function Bfp(a,b){var c;J(a);a.hs=b;c=a;b.classObject=c;}
function Nf(b){var c;if(b===null)return null;c=b.classObject;if(c===null)c=BpD(b);return c;}
function AT0(a){return (((H()).a(B(291))).h(J9(a))).b();}
function A40(a){return a.hs;}
function A7A(a,b){return BbH(b,a.hs);}
function A_n(a){if(a.rK===null)a.rK=AYz(a.hs);return a.rK;}
function AQR(a){return Be6(a.hs);}
function A0U(a){return AJt(a.hs)===null?0:1;}
function Bat(a){return Nf(AJt(a.hs));}
function A7_(){if(!Bv1){Bv1=1;A_g();}}
function A_g(){Kx.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){Wn(obj);return null;}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){BmS();ALj();return null;}}];IG.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){A8$(obj);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:$rt_voidcls(),callable:function(obj,args){AS6(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BM,callable:function(obj,args){return ALx(obj);}}];Bn.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){ZW(obj);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){AIH(obj,A4q(args[0]));return null;}},
{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:function(obj,args){WN(obj,Bf9(args[0]),Bf9(args[1]),Bf9(args[2]),Bf9(args[3]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Bn],returnType:$rt_voidcls(),callable:function(obj,args){YP(obj,args[0]);return null;}},{name:"set",modifiers:0,accessLevel:3,parameterTypes:[Bn],returnType:Bn,callable:function(obj,args){return AL2(obj,args[0]);}},
{name:"mul",modifiers:0,accessLevel:3,parameterTypes:[Bn],returnType:Bn,callable:function(obj,args){return Bil(obj,args[0]);}},{name:"mul",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls()],returnType:Bn,callable:function(obj,args){return ALJ(obj,Bf9(args[0]));}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[Bn],returnType:Bn,callable:function(obj,args){return BcJ(obj,args[0]);}},{name:"sub",modifiers:0,accessLevel:3,parameterTypes:[Bn],returnType:Bn,callable:function(obj,args){return A4i(obj
,args[0]);}},{name:"clamp",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bn,callable:function(obj,args){return BeL(obj);}},{name:"set",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:Bn,callable:function(obj,args){return Bbr(obj,Bf9(args[0]),Bf9(args[1]),Bf9(args[2]),Bf9(args[3]));}},{name:"set",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:Bn,callable:function(obj,args){return AWC(obj,A4q(args[0]));}},{name:"add",modifiers
:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:Bn,callable:function(obj,args){return AKZ(obj,Bf9(args[0]),Bf9(args[1]),Bf9(args[2]),Bf9(args[3]));}},{name:"sub",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:Bn,callable:function(obj,args){return AYH(obj,Bf9(args[0]),Bf9(args[1]),Bf9(args[2]),Bf9(args[3]));}},{name:"mul",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),
$rt_floatcls(),$rt_floatcls()],returnType:Bn,callable:function(obj,args){return Bfw(obj,Bf9(args[0]),Bf9(args[1]),Bf9(args[2]),Bf9(args[3]));}},{name:"lerp",modifiers:0,accessLevel:3,parameterTypes:[Bn,$rt_floatcls()],returnType:Bn,callable:function(obj,args){return AVE(obj,args[0],Bf9(args[1]));}},{name:"lerp",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:Bn,callable:function(obj,args){return A5V(obj,Bf9(args[0]),Bf9(args[1]),
Bf9(args[2]),Bf9(args[3]),Bf9(args[4]));}},{name:"premultiplyAlpha",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bn,callable:function(obj,args){return AUl(obj);}},{name:"equals",modifiers:0,accessLevel:3,parameterTypes:[C],returnType:$rt_booleancls(),callable:function(obj,args){return A7M(obj,args[0]);}},{name:"hashCode",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:function(obj,args){return ATT(obj);}},{name:"toFloatBits",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:$rt_floatcls(),callable:function(obj,args){return AZ4(obj);}},{name:"toIntBits",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:function(obj,args){return A12(obj);}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BM,callable:function(obj,args){return AOi(obj);}},{name:"valueOf",modifiers:512,accessLevel:3,parameterTypes:[BM],returnType:Bn,callable:function(obj,args){BC();return ANn(args[0]);}},{name:"valueOf",modifiers:512,accessLevel:3,parameterTypes:[BM,
Bn],returnType:Bn,callable:function(obj,args){BC();return AJX(args[0],args[1]);}},{name:"toFloatBits",modifiers:512,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_floatcls(),callable:function(obj,args){BC();return ANb(A4q(args[0]),A4q(args[1]),A4q(args[2]),A4q(args[3]));}},{name:"toFloatBits",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_floatcls(),callable:function(obj,args){BC();return T_(Bf9(args[0]),
Bf9(args[1]),Bf9(args[2]),Bf9(args[3]));}},{name:"toIntBits",modifiers:512,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_intcls(),callable:function(obj,args){BC();return ASi(A4q(args[0]),A4q(args[1]),A4q(args[2]),A4q(args[3]));}},{name:"alpha",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){BC();return AQc(Bf9(args[0]));}},{name:"luminanceAlpha",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),
$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){BC();return BiC(Bf9(args[0]),Bf9(args[1]));}},{name:"rgb565",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){BC();return A_b(Bf9(args[0]),Bf9(args[1]),Bf9(args[2]));}},{name:"rgba4444",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){BC();return ASU(Bf9(args[0]),
Bf9(args[1]),Bf9(args[2]),Bf9(args[3]));}},{name:"rgb888",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){BC();return ASg(Bf9(args[0]),Bf9(args[1]),Bf9(args[2]));}},{name:"rgba8888",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){BC();return BgW(Bf9(args[0]),Bf9(args[1]),Bf9(args[2]),Bf9(args[3]));}},{name:"argb8888",modifiers
:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){BC();return A92(Bf9(args[0]),Bf9(args[1]),Bf9(args[2]),Bf9(args[3]));}},{name:"rgb565",modifiers:512,accessLevel:3,parameterTypes:[Bn],returnType:$rt_intcls(),callable:function(obj,args){BC();return AWA(args[0]);}},{name:"rgba4444",modifiers:512,accessLevel:3,parameterTypes:[Bn],returnType:$rt_intcls(),callable:function(obj,args){BC();return BdT(args[0]);}},{name
:"rgb888",modifiers:512,accessLevel:3,parameterTypes:[Bn],returnType:$rt_intcls(),callable:function(obj,args){BC();return AVC(args[0]);}},{name:"rgba8888",modifiers:512,accessLevel:3,parameterTypes:[Bn],returnType:$rt_intcls(),callable:function(obj,args){BC();return ALT(args[0]);}},{name:"argb8888",modifiers:512,accessLevel:3,parameterTypes:[Bn],returnType:$rt_intcls(),callable:function(obj,args){BC();return A$O(args[0]);}},{name:"rgb565ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bn,$rt_intcls()],returnType
:$rt_voidcls(),callable:function(obj,args){BC();Bhx(args[0],A4q(args[1]));return null;}},{name:"rgba4444ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bn,$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){BC();BbE(args[0],A4q(args[1]));return null;}},{name:"rgb888ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bn,$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){BC();Bb6(args[0],A4q(args[1]));return null;}},{name:"rgba8888ToColor",modifiers:512,accessLevel:3,parameterTypes
:[Bn,$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){BC();JV(args[0],A4q(args[1]));return null;}},{name:"argb8888ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bn,$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){BC();AXy(args[0],A4q(args[1]));return null;}},{name:"abgr8888ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bn,$rt_floatcls()],returnType:$rt_voidcls(),callable:function(obj,args){BC();AFl(args[0],Bf9(args[1]));return null;}},{name:"fromHsv",modifiers
:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:Bn,callable:function(obj,args){return Ben(obj,Bf9(args[0]),Bf9(args[1]),Bf9(args[2]));}},{name:"fromHsv",modifiers:0,accessLevel:3,parameterTypes:[$rt_arraycls($rt_floatcls())],returnType:Bn,callable:function(obj,args){return A3e(obj,args[0]);}},{name:"toHsv",modifiers:0,accessLevel:3,parameterTypes:[$rt_arraycls($rt_floatcls())],returnType:$rt_arraycls($rt_floatcls()),callable:function(obj,args){return Bd3(obj,args[0]);}},
{name:"cpy",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bn,callable:function(obj,args){return BgA(obj);}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){BC();A2W();return null;}}];FE.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){AJa(obj);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[My,GY],returnType:$rt_voidcls(),callable:
function(obj,args){SM(obj,args[0],args[1]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[My,GY,Bn,$rt_floatcls(),$rt_intcls(),$rt_booleancls()],returnType:$rt_voidcls(),callable:function(obj,args){Xq(obj,args[0],args[1],args[2],Bf9(args[3]),A4q(args[4]),A9u(args[5]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[My,GY,$rt_intcls(),$rt_intcls(),Bn,$rt_floatcls(),$rt_intcls(),$rt_booleancls(),BM],returnType:$rt_voidcls(),callable:function(obj,args){AHC(obj,args[0],
args[1],A4q(args[2]),A4q(args[3]),args[4],Bf9(args[5]),A4q(args[6]),A9u(args[7]),args[8]);return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[My,GY],returnType:$rt_voidcls(),callable:function(obj,args){BeN(obj,args[0],args[1]);return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[My,GY,Bn,$rt_floatcls(),$rt_intcls(),$rt_booleancls()],returnType:$rt_voidcls(),callable:function(obj,args){Ban(obj,args[0],args[1],args[2],Bf9(args[3]),A4q(args[4]),A9u(args[5]));return null;}},
{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[My,GY,$rt_intcls(),$rt_intcls(),Bn,$rt_floatcls(),$rt_intcls(),$rt_booleancls(),BM],returnType:$rt_voidcls(),callable:function(obj,args){AOq(obj,args[0],args[1],A4q(args[2]),A4q(args[3]),args[4],Bf9(args[5]),A4q(args[6]),A9u(args[7]),args[8]);return null;}},{name:"truncate",modifiers:0,accessLevel:1,parameterTypes:[UG,IG,$rt_floatcls(),BM,$rt_intcls(),CF],returnType:$rt_voidcls(),callable:function(obj,args){AH2(obj,args[0],args[1],Bf9(args[2]),args[3],
A4q(args[4]),args[5]);return null;}},{name:"wrap",modifiers:0,accessLevel:1,parameterTypes:[UG,IG,$rt_intcls(),$rt_intcls()],returnType:IG,callable:function(obj,args){return T7(obj,args[0],args[1],A4q(args[2]),A4q(args[3]));}},{name:"adjustLastGlyph",modifiers:0,accessLevel:1,parameterTypes:[UG,IG],returnType:$rt_voidcls(),callable:function(obj,args){FN(obj,args[0],args[1]);return null;}},{name:"parseColorMarkup",modifiers:0,accessLevel:1,parameterTypes:[GY,$rt_intcls(),$rt_intcls(),CF],returnType:$rt_intcls(),callable
:function(obj,args){return SB(obj,args[0],A4q(args[1]),A4q(args[2]),args[3]);}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){BfO(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BM,callable:function(obj,args){return AVY(obj);}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){Eh();A7b();return null;}}];}
function BiQ(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!a.hy()&&!a.IW()){if(a.i8===null){A7_();b=(a.BH()).$meta;c=b.methods;a.i8=Y(GD,c.length);d=0;e=0;while(e<c.length){f=c[e];if($rt_str(f.name).C(B(292))){g=f.parameterTypes;h=Y(Iq,g.length);i=0;while(true){j=h.data;if(i>=j.length)break;j[i]=Nf(g[i]);i=i+1|0;}j=a.i8.data;k=d+1|0;l=new GD;b=$rt_str(f.name);m=f.modifiers;AG_(l,a,b,m,f.accessLevel,h,Hz(f.callable,"call"));j[d]=l;d=k;}e=e+1|0;}a.i8=KS(a.i8,d);}return a.i8.e6();}return Y(GD,0);}
function A09(a){var b,c,d,e,f,g,h,i,j;b=a.si();c=b.data;d=c.length;e=Y(GD,d);f=0;g=0;while(g<d){h=c[g];if(Mh(h.tm())){i=e.data;j=f+1|0;i[f]=h;f=j;}g=g+1|0;}if(f<e.data.length)e=KS(e,f);return e;}
function BeW(a,b){var c,d,e,f;c=(a.si()).data;d=c.length;e=0;while(true){if(e>=d)G(A01());f=c[e];if(AHY(f.wM(),b))break;e=e+1|0;}return f;}
function BeU(a,b){var c,d,e,f;c=(a.si()).data;d=c.length;e=0;while(true){if(e>=d)G(A01());f=c[e];if(Mh(f.tm())&&AHY(f.wM(),b))break;e=e+1|0;}return f;}
var C_=D();
var AE8=D(C_);
var Em=D(0);
function AI2(){var a=this;C.call(a);a.K=null;a.bw=0;}
function Bjd(){var a=new AI2();A5W(a);return a;}
function BpI(a){var b=new AI2();A3w(b,a);return b;}
function A5W(a){J(a);a.K=Be(0);}
function A3w(a,b){J(a);a.K=Be(((b+32|0)-1|0)/32|0);}
function AXp(a,b){var c,d;c=b/32|0;if(b>=a.bw){Ig(a,c+1|0);a.bw=b+1|0;}d=a.K.data;d[c]=d[c]|1<<(b%32|0);}
function ARs(a,b,c){var d,e,f,g;if(b>c)G(Dw());d=b/32|0;e=c/32|0;if(c>a.bw){Ig(a,e+1|0);a.bw=c;}if(d==e){f=a.K.data;f[d]=f[d]|Hj(a,b)&H9(a,c);}else{f=a.K.data;f[d]=f[d]|Hj(a,b);g=d+1|0;while(g<e){a.K.data[g]=(-1);g=g+1|0;}if(c&31){f=a.K.data;f[e]=f[e]|H9(a,c);}}}
function Hj(a,b){var c;c=b%32|0;return (-1)<<c;}
function H9(a,b){var c;c=b%32|0;return !c?0:(-1)>>>(32-c|0);}
function Bjb(a,b){var c,d;c=b/32|0;if(c<a.K.data.length){d=a.K.data;d[c]=d[c]&ADN((-2),b%32|0);if(b==(a.bw-1|0))Gm(a);}}
function A3J(a,b,c){var d,e,f,g,h;if(b>c)G(Dw());if(b>=a.bw)return;d=Bw(a.bw,c);e=b/32|0;f=d/32|0;if(e==f){g=a.K.data;g[e]=g[e]&(H9(a,b)|Hj(a,d));}else{g=a.K.data;g[e]=g[e]&H9(a,b);h=e+1|0;while(h<f){a.K.data[h]=0;h=h+1|0;}if(d&31){g=a.K.data;g[f]=g[f]&Hj(a,d);}}Gm(a);}
function A3P(a,b){var c;c=b/32|0;return c<a.K.data.length&&a.K.data[c]&1<<(b%32|0)?1:0;}
function Bio(a,b){var c,d,e,f,g;if(b>=a.bw)return (-1);c=b/32|0;d=a.K.data[c];e=d>>>(b%32|0);if(e)return F4(e)+b|0;f=(a.bw+31|0)/32|0;g=c+1|0;while(g<f){if(a.K.data[g])return (g*32|0)+F4(a.K.data[g])|0;g=g+1|0;}return (-1);}
function AWX(a,b){var c,d,e,f,g;if(b>=a.bw)return b;c=b/32|0;d=a.K.data[c]^(-1);e=d>>>(b%32|0);if(e)return F4(e)+b|0;f=(a.bw+31|0)/32|0;g=c+1|0;while(g<f){if(a.K.data[g]!=(-1))return (g*32|0)+F4(a.K.data[g]^(-1))|0;g=g+1|0;}return a.bw;}
function Ig(a,b){var c;if(a.K.data.length>=b)return;c=Bj((b*3|0)/2|0,(a.K.data.length*2|0)+1|0);a.K=A1F(a.K,c);}
function Gm(a){var b,c,d;b=(a.bw+31|0)/32|0;a.bw=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=OF(a.K.data[c]);if(d<32)break;c=c+(-1)|0;a.bw=a.bw-32|0;}a.bw=a.bw-d|0;}}
function AWt(a,b){var c,d;c=Bw(a.K.data.length,b.K.data.length);d=0;while(d<c){if(a.K.data[d]&b.K.data[d])return 1;d=d+1|0;}return 0;}
function Bhk(a,b){var c,d,e;c=Bw(a.K.data.length,b.K.data.length);d=0;while(d<c){e=a.K.data;e[d]=e[d]&b.K.data[d];d=d+1|0;}while(c<a.K.data.length){a.K.data[c]=0;c=c+1|0;}a.bw=Bw(a.bw,b.bw);Gm(a);}
function A1Y(a,b){var c,d,e;c=Bw(a.K.data.length,b.K.data.length);d=0;while(d<c){e=a.K.data;e[d]=e[d]&(b.K.data[d]^(-1));d=d+1|0;}Gm(a);}
function Bhb(a,b){var c,d,e;a.bw=Bj(a.bw,b.bw);Ig(a,(a.bw+31|0)/32|0);c=Bw(a.K.data.length,b.K.data.length);d=0;while(d<c){e=a.K.data;e[d]=e[d]|b.K.data[d];d=d+1|0;}}
function A_x(a,b){var c,d,e;a.bw=Bj(a.bw,b.bw);Ig(a,(a.bw+31|0)/32|0);c=Bw(a.K.data.length,b.K.data.length);d=0;while(d<c){e=a.K.data;e[d]=e[d]^b.K.data[d];d=d+1|0;}Gm(a);}
function Bhv(a){return a.bw?0:1;}
function Lo(){EF.call(this);this.Cr=0.0;}
var Bv2=0.0;var Bv3=null;function IT(){IT=L(Lo);AWN();}
function BkV(a){var b=new Lo();Sk(b,a);return b;}
function Sk(a,b){IT();Q6(a);a.Cr=b;}
function Bf9(a){return a.Cr;}
function PA(b){IT();return BkV(b);}
function EP(b){var c,d,e,f,g,h,i,j,k,l,m,n;IT();if(b.bS())G(EU());c=0;d=b.k();while(true){if(b.g(c)>32){while(b.g(d-1|0)<=32){d=d+(-1)|0;}e=0;if(b.g(c)==45){c=c+1|0;e=1;}else if(b.g(c)==43)c=c+1|0;if(c==d)G(EU());a:{f=b.g(c);g=0;h=0;i=0;if(f!=46){i=1;if(f>=48&&f<=57){b:{while(c<d){if(b.g(c)!=48)break b;c=c+1|0;}}while(c<d){j=b.g(c);if(j<48)break a;if(j>57)break a;if(g>=214748355)h=h+1|0;else g=(g*10|0)+(j-48|0)|0;c=c+1|0;}}else G(EU());}}if(c<d&&b.g(c)==46){c=c+1|0;c:{while(true){if(c>=d)break c;k=b.g(c);if
(k<48)break c;if(k>57)break;if(g<214748355){g=(g*10|0)+(k-48|0)|0;h=h+(-1)|0;}c=c+1|0;i=1;}}if(!i)G(EU());}if(c<d){j=b.g(c);if(j!=101&&j!=69)G(EU());j=c+1|0;l=0;if(j==d)G(EU());if(b.g(j)==45){j=j+1|0;l=1;}else if(b.g(j)==43)j=j+1|0;m=0;n=0;d:{while(true){if(j>=d)break d;k=b.g(j);if(k<48)break d;if(k>57)break;m=(10*m|0)+(k-48|0)|0;n=1;j=j+1|0;}}if(!n)G(EU());if(l)m= -m|0;h=h+m|0;}e:{j=Cl(h,38);if(j<=0){if(j)break e;if(g<=34028234)break e;}return e?(-Infinity):Infinity;}if(e)g= -g|0;return g*AHl(h);}c=c+1|0;if
(c==d)break;}G(EU());}
function AHl(b){var c,d;IT();if(b>=0)c=10.0;else{c=0.1;b= -b|0;}d=1.0;while(b){if(b%2|0)d=d*c;c=c*c;b=b/2|0;}return d;}
function QV(b){IT();return $rt_floatToIntBits(b);}
function AWN(){Bv2=NaN;Bv3=E($rt_floatcls());}
function D7(){BX.call(this);this.fy=0;}
function TE(a){var b=new D7();AXc(b,a);return b;}
function AXc(a,b){Dm(a);a.fy=b;}
function A$U(a){return 1;}
function ARc(a,b,c){return a.fy!=c.g(b)?(-1):1;}
function APt(a,b,c,d){var e,f,g,h;if(!(c instanceof BM))return He(a,b,c,d);e=c;f=d.O();while(true){if(b>=f)return (-1);g=e.eX(a.fy,b);if(g<0)return (-1);h=a.l;b=g+1|0;if(h.e(b,c,d)>=0)break;}return g;}
function ASS(a,b,c,d,e){var f,g;if(!(d instanceof BM))return Hn(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.nh(a.fy,c);if(g<0)break a;if(g<b)break a;if(a.l.e(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AZ3(a){return (((H()).a(B(59))).ba(a.fy)).b();}
function AMB(a){return a.fy;}
function AZq(a,b){if(b instanceof D7)return b.qd()!=a.fy?0:1;if(!(b instanceof D3)){if(b instanceof Do)return b.r(a.fy);if(!(b instanceof D1))return 1;return 0;}return b.bM(0,J2(a.fy))<=0?0:1;}
function AA0(){Cc.call(this);this.nV=null;}
function BnV(a){var b=new AA0();AMg(b,a);return b;}
function AMg(a,b){a.nV=b;Ds(a);}
function BiP(a,b,c){var d,e;d=E3();e=d.Cu();e.Jh(AL3(a.nV),Bms(a,e));d.Cu();return 1;}
var OC=D();
var Bv4=null;function BnO(){BnO=L(OC);ARG();}
function ARG(){Bv4=Be((T1()).data.length);Bv4.data[Bi(Bv5)]=1;Bv4.data[Bi(Bv6)]=2;Bv4.data[Bi(Bv7)]=3;Bv4.data[Bi(Bv8)]=4;}
function CF(){var a=this;C.call(a);a.sN=0;a.qp=0;a.hz=null;}
function Le(a){Oi(a,16,2147483647);}
function Oi(a,b,c){J(a);a.hz=A6a(0,b);a.sN=c;}
function RC(a){return !a.hz.j?a.uX():a.hz.wG();}
function AN0(a,b){if(b===null)G(Z(B(293)));if(a.hz.j>=a.sN)a.E3(b);else{a.hz.E(b);a.qp=Bj(a.qp,a.hz.j);a.AV(b);}}
function ARi(a,b){if(AZc(b,De))b.f9();}
function A6O(a,b){}
function ZA(a,b){var c,d,e,f,g;if(b===null)G(Z(B(43)));c=a.hz;d=a.sN;e=0;f=b.j;while(e<f){g=b.o(e);if(g!==null){if(c.j>=d)a.E3(g);else{c.E(g);a.AV(g);}}e=e+1|0;}a.qp=Bj(a.qp,c.j);}
var SY=D(CF);
var IH=D(Ci);
var Pq=D(0);
var H_=D(0);
var St=D();
var Cj=D(BL);
var TB=D(Cj);
function AEX(){var a=this;U.call(a);a.tq=0;a.q7=0;a.xd=0;}
function Ir(a,b){var c=new AEX();AO$(c,a,b);return c;}
function Boy(a,b,c){var d=new AEX();A2L(d,a,b,c);return d;}
function AO$(a,b,c){Bv(a);a.q7=c;a.tq=b;}
function A2L(a,b,c,d){Bv(a);a.xd=d;a.q7=c;a.tq=b;}
function AKe(a){var b;b=BjK(a.tq);if(a.xd)b.bL.oG(0,2048);b.bm=a.q7;return b;}
var Nq=D();
var Bv9=null;function Bv$(){Bv$=L(Nq);Bhf();}
function Bhf(){Bv9=DM();}
var Fl=D(0);
var D6=D(CH);
var Bv_=null;var Bwa=null;var Bwb=null;var Bwc=0.0;var Bwd=0.0;function Bwe(){Bwe=L(D6);Bh5();}
function Bh5(){Bv_=BB();Bwa=BB();Bwb=BB();Bwc=0.4000000059604645;Bwd=0.10000000149011612;}
var TL=D(D6);
var PL=D(0);
var Jr=D(Dd);
function AFw(a,b,c,d){GQ(a,b);a.G=c;a.bg=d;}
function ZD(b){if(b>=0)return Bnw(b);G(Z((((H()).a(B(294))).h(b)).b()));}
function AE$(b,c,d){return BlT(0,b.data.length,b,c,c+d|0,0);}
function M_(b){return AE$(b,0,b.data.length);}
function ALz(a,b,c,d){var e,f,g,h,i;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bm((((((H()).a(B(295))).h(g)).a(B(296))).h(f)).b()));if(Bf(a)<d)G(Zn());if(d<0)G(Bm(((((H()).a(B(297))).h(d)).a(B(298))).b()));h=a.G;i=0;while(i<d){g=c+1|0;f=h+1|0;e[c]=a.BB(h);i=i+1|0;c=g;h=f;}a.G=a.G+d|0;return a;}}e=b.data;G(Bm(((((((H()).a(B(299))).h(c)).a(B(56))).h(e.length)).a(B(21))).b()));}
function AXu(a,b){return a.sb(b,0,b.data.length);}
function BiR(a,b,c,d){var e,f,g,h,i;if(a.ci())G(Dv());if(Bf(a)<d)G(Hb());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bm((((((H()).a(B(300))).h(g)).a(B(296))).h(f)).b()));if(d<0)G(Bm(((((H()).a(B(297))).h(d)).a(B(298))).b()));h=a.G;i=0;while(i<d){g=h+1|0;f=c+1|0;a.s$(h,e[c]);i=i+1|0;h=g;c=f;}a.G=a.G+d|0;return a;}}e=b.data;G(Bm(((((((H()).a(B(299))).h(c)).a(B(56))).h(e.length)).a(B(21))).b()));}
function A4Q(a,b,c,d){var e,f,g,h,i,j;if(a.ci())G(Dv());e=d-c|0;if(Bf(a)<e)G(Hb());if(c>=0&&c<b.k()){if(d>b.k()){f=new E0;g=(((H()).a(B(300))).h(d)).a(B(301));Po(f,(g.h(b.k())).b());G(f);}if(c>d)G(Bm((((((H()).a(B(302))).h(c)).a(B(303))).h(d)).b()));h=a.G;while(c<d){i=h+1|0;j=c+1|0;a.s$(h,b.g(c));h=i;c=j;}a.G=a.G+e|0;return a;}G(Bm(((((((H()).a(B(302))).h(c)).a(B(56))).h(b.k())).a(B(21))).b()));}
function KE(a,b){return a.Kq(b,0,b.k());}
function ABT(a){return a.SB();}
function Qf(a){return a.Ro();}
function M9(a){It(a);return a;}
function AT2(a,b){H2(a,b);return a;}
var IU=D(Jr);
function Tr(a,b,c,d){AFw(a,b,c,d);}
function ALD(a){var b,c,d,e;if(a.ci())G(Dv());a:{b=Bf(a);if(a.G>0){c=a.G;d=0;while(true){if(d>=b)break a;e=c+1|0;a.s$(d,a.BB(c));d=d+1|0;c=e;}}}a.G=b;a.bg=a.hV;a.fR=(-1);return a;}
function Bij(a){return a.fe();}
function U1(){var a=this;IU.call(a);a.Hs=0;a.wh=0;a.od=null;}
function Bnw(a){var b=new U1();Bc3(b,a);return b;}
function BlT(a,b,c,d,e,f){var g=new U1();Z5(g,a,b,c,d,e,f);return g;}
function Bc3(a,b){Z5(a,0,b,B$(b),0,b,0);}
function Z5(a,b,c,d,e,f,g){Tr(a,c,e,f);a.wh=b;a.Hs=g;a.od=d;}
function Bcg(a,b){return a.od.data[b+a.wh|0];}
function A_5(a,b,c){a.od.data[b+a.wh|0]=c;}
function AVZ(a){return 1;}
function AQj(a){return a.od;}
function A1q(a){return a.Hs;}
var QA=D();
var CA=D(0);
var HL=D(0);
function Ft(){var a=this;C.call(a);a.fv=X;a.cI=null;a.oE=0;}
function A1I(){var a=new Ft();NA(a);return a;}
function NA(a){J(a);a.cI=Bs();a.oE=1;}
function H7(a){if(!a.oE){a.cI.Fl(a);a.oE=1;}}
function EY(a){return a.fv;}
function BN(a,b){var c;a:{if(CM(a,b)){c=0;while(true){if(c>=a.cI.j)break a;if(Bb((a.cI.o(c)).dp,b))return a.cI.o(c);c=c+1|0;}}}return null;}
function Jc(a,b,c){return BN(a,c);}
function ARS(a){a.fv=X;a.cI.P();}
function ACK(a,b){a.fv=B1(a.fv,b);}
function E$(a,b){var c;c=a.NY(b.dp);if(c>=0)a.cI.lw(c,b);else{ACK(a,b.dp);a.cI.E(b);a.oE=0;}H7(a);}
function ADr(a,b){var c,d,e,f;c=b.data;d=c.length;e=0;while(e<d){f=c[e];E$(a,f);e=e+1|0;}}
function Hi(a,b){var c,d;c=b.fG();while(c.bG()){d=c.bD();E$(a,d);}}
function CM(a,b){return D2(b,X)&&Bb(Bx(a.fv,b),b)?1:0;}
function AYA(a,b){var c;a:{if(CM(a,b)){c=0;while(true){if(c>=a.cI.j)break a;if(Bb((a.cI.o(c)).dp,b))break;c=c+1|0;}return c;}}return (-1);}
function VJ(a,b,c){var d;if(b===a)return 1;if(b!==null&&Bb(a.fv,b.fv)){if(!c)return 1;H7(a);H7(b);d=0;while(d<a.cI.j){if(!(a.cI.o(d)).Bh(b.cI.o(d)))return 0;d=d+1|0;}return 1;}return 0;}
function Uo(a,b,c){return V(EI(b.dp,c.dp));}
function L4(a){return a.cI.b5();}
function A5d(a){var b,c,d,e,f;H7(a);b=a.cI.j;c=CS(N(71),a.fv);d=1;e=0;while(e<b){f=Cu(a.fv,N((a.cI.o(e)).bl()));d=(d*7|0)&65535;c=CS(c,Cu(f,N(d)));e=e+1|0;}return V(AZp(c,Pt(c,32)));}
function ABj(a){return a.If();}
function AAu(a,b){if(!(b instanceof Ft))return 0;if(b===a)return 1;return VJ(a,b,1);}
function A4S(a,b,c){return Uo(a,b,c);}
function Hf(){Ft.call(this);this.m5=null;}
var Bwf=0;function K$(){K$=L(Hf);Bg$();}
function Bwg(){var a=new Hf();Ms(a);return a;}
function Bwh(a){var b=new Hf();K8(b,a);return b;}
function Bn2(a){var b=new Hf();Qb(b,a);return b;}
function Bm7(a){var b=new Hf();AI1(b,a);return b;}
function Bwi(a,b){var c=new Hf();MI(c,a,b);return c;}
function Ms(a){var b,c;K$();b=(H()).a(B(304));c=Bwf+1|0;Bwf=c;K8(a,(b.h(c)).b());}
function K8(a,b){K$();NA(a);a.m5=b;}
function Qb(a,b){K$();Ms(a);ADr(a,b);}
function AI1(a,b){K$();MI(a,b.m5,b);}
function MI(a,b,c){var d,e;K$();K8(a,b);d=L4(c);while(d.bG()){e=d.bD();E$(a,e.p1());}}
function Bew(a){return Bm7(a);}
function ATK(a){return ABj(a)+(3*a.m5.bl()|0)|0;}
function APC(a,b){var c;a:{b:{if(b instanceof Hf){if(b===a)break b;if(b.m5.C(a.m5)&&AAu(a,b))break b;}c=0;break a;}c=1;}return c;}
function Bg$(){Bwf=0;}
function AGj(){S.call(this);this.Tk=null;}
function BmQ(a){var b=new AGj();AKo(b,a);return b;}
function AKo(a,b){a.Tk=b;Bh(a);}
function Bgq(a,b){return RO(b);}
var P7=D();
var Bwj=0;function Na(){Na=L(P7);A_I();}
function AHt(b,c,d,e){var f;Na();if(!Bwj){O8(b,c,d,e);return;}a:{f=Bsf.wd();AAw();if(f!==Bs3&&Bsf.wd()!==Bs7){f=Bsf;if(f.wd()!==Bs8){AG7(b,c,d,e);break a;}}ACX(b,c);}}
function ACX(b,c){var d,e,f,g,h,i,j;Na();d=Btu;e=c.k0();f=c.bk();g=c.bj();h=c.mw();i=c.lJ();j=c.k2();d.k3(b,0,e,f,g,0,h,i,j);Btv.yy(b);}
function AG7(b,c,d,e){var f,g,h,i,j,k,l;Na();a:{if(!Btr.u0(B(305))){f=Btr;if(!f.u0(B(306))&&Btw===null){O8(b,c,d,e);break a;}}f=Btu;g=c.k0();h=c.bk();i=c.bj();j=c.mw();k=c.lJ();l=c.k2();f.k3(b,0,g,h,i,0,j,k,l);Btv.yy(b);}}
function O8(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;Na();f=Btu;g=c.k0();h=c.bk();i=c.bj();j=c.mw();k=c.lJ();l=c.k2();f.k3(b,0,g,h,i,0,j,k,l);if(Btv===null&&d!=e)G(W(B(307)));m=c.bk()/2|0;n=c.bj()/2|0;o=1;while(m>0&&n>0){p=RI(m,n,c.gl());HJ();p.FV(Bvg);p.OL(c,0,0,c.bk(),c.bj(),0,0,m,n);if(o>1)c.iU();f=Btu;j=p.k0();k=p.bk();q=p.bj();g=p.mw();h=p.lJ();l=p.k2();f.k3(b,o,j,k,q,0,g,h,l);m=p.bk()/2|0;n=p.bj()/2|0;o=o+1|0;c=p;}}
function A_I(){Bwj=1;}
var In=D();
var Bwk=null;function VT(a){J(a);}
function E3(){return Bwk;}
function AEG(){Dn.call(this);this.RN=null;}
function Bqu(a){var b=new AEG();AL$(b,a);return b;}
function AL$(a,b){G$(a);a.RN=b;}
function AEf(){S.call(this);this.K6=null;}
function Bj6(a){var b=new AEf();A8R(b,a);return b;}
function A8R(a,b){a.K6=b;Bh(a);}
function AXU(a,b){return Uy(b);}
var Ew=D(Dd);
function AG1(a,b,c,d){GQ(a,b);a.G=c;a.bg=d;}
function Bhw(b,c,d){return Bk6(0,b.data.length,b,c,c+d|0,0);}
function A3D(b){return Bhw(b,0,b.data.length);}
function AVg(a,b,c,d){var e,f,g,h,i;if(a.ci())G(Dv());if(Bf(a)<d)G(Hb());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bm((((((H()).a(B(308))).h(g)).a(B(296))).h(f)).b()));if(d<0)G(Bm(((((H()).a(B(297))).h(d)).a(B(298))).b()));h=a.G;i=0;while(i<d){g=h+1|0;f=c+1|0;a.nS(h,e[c]);i=i+1|0;h=g;c=f;}a.G=a.G+d|0;return a;}}e=b.data;G(Bm(((((((H()).a(B(299))).h(c)).a(B(56))).h(e.length)).a(B(21))).b()));}
function VV(a){Ha(a);return a;}
function ABu(a){It(a);return a;}
function AQJ(a,b){KK(a,b);return a;}
function BbQ(a,b){H2(a,b);return a;}
function AQ2(a){return ABu(a);}
function A17(a){return VV(a);}
function AWJ(a,b){return a.Ta(b);}
function A1a(a,b){return a.Qb(b);}
var Gw=D(Ew);
function M1(a,b,c,d){AG1(a,b,c,d);}
function ASC(a,b){if(b>=0&&b<a.bg)return a.wB(b);G(Bm(((((((H()).a(B(288))).h(b)).a(B(56))).h(a.bg)).a(B(21))).b()));}
function Bif(a,b,c){if(a.ci())G(Dv());if(b>=0&&b<a.bg){a.nS(b,c);return a;}G(Bm(((((((H()).a(B(288))).h(b)).a(B(56))).h(a.bg)).a(B(21))).b()));}
function A7f(a){return a.fe();}
function FP(){var a=this;Gw.call(a);a.cF=null;a.Hf=0;a.cr=0;}
function NU(a,b,c,d,e,f,g){M1(a,c,e,f);a.cr=b;a.cF=d;a.Hf=g;}
function BcG(a){return a.Hf;}
var Wj=D(BL);
var FK=D(Ci);
var AG9=D(FK);
var Vc=D(G0);
function Bls(a){var b=new Vc();A$$(b,a);return b;}
function A$$(a,b){Mv(a,b);}
function F6(){var a=this;C.call(a);a.T=null;a.j=0;a.g8=0;a.rd=null;}
function Bs(){var a=new F6();AM6(a);return a;}
function El(a){var b=new F6();Q2(b,a);return b;}
function A6a(a,b){var c=new F6();Ma(c,a,b);return c;}
function Bwl(a,b,c){var d=new F6();AAk(d,a,b,c);return d;}
function BpN(a){var b=new F6();Bfm(b,a);return b;}
function Bwm(a,b,c,d){var e=new F6();U3(e,a,b,c,d);return e;}
function AM6(a){Ma(a,1,16);}
function Q2(a,b){Ma(a,1,b);}
function Ma(a,b,c){J(a);a.g8=b;a.T=Y(C,c);}
function AAk(a,b,c,d){J(a);a.g8=b;a.T=FV(d,c);}
function Bfm(a,b){U3(a,1,b,0,b.data.length);}
function U3(a,b,c,d,e){AAk(a,b,e,(Co(c)).gC());a.j=e;Bc(c,d,a.T,0,a.j);}
function AXX(a,b){var c,d,e;c=a.T;d=c.data;if(a.j==d.length)c=a.kz(Bj(8,a.j*1.75|0));d=c.data;e=a.j;a.j=e+1|0;d[e]=b;}
function ARA(a,b){a.sF(b.T,0,b.j);}
function AKY(a,b,c,d){if((c+d|0)<=b.j){a.sF(b.T,c,d);return;}G(Z((((((((H()).a(B(309))).h(c)).a(B(310))).h(d)).a(B(311))).h(b.j)).b()));}
function AQM(a,b){a.sF(b,0,b.data.length);}
function AMR(a,b,c,d){var e,f,g;e=a.T;f=e.data;g=a.j+d|0;if(g>f.length)e=a.kz(Bj(Bj(8,g),a.j*1.75|0));Bc(b,c,e,a.j,d);a.j=g;}
function Bhj(a,b){if(b<a.j)return a.T.data[b];G(Bm((((((H()).a(B(312))).h(b)).a(B(313))).h(a.j)).b()));}
function AXD(a,b,c){if(b<a.j){a.T.data[b]=c;return;}G(Bm((((((H()).a(B(312))).h(b)).a(B(313))).h(a.j)).b()));}
function Bav(a,b,c){var d,e;if(b>a.j)G(Bm((((((H()).a(B(314))).h(b)).a(B(315))).h(a.j)).b()));d=a.T;e=d.data;if(a.j==e.length)d=a.kz(Bj(8,a.j*1.75|0));if(!a.g8){e=d.data;e[a.j]=e[b];}else Bc(d,b,d,b+1|0,a.j-b|0);e=d.data;a.j=a.j+1|0;e[b]=c;}
function A8h(a,b,c){var d,e,f,g;a:{d=a.T;e=a.j-1|0;if(!(!c&&b!==null)){while(true){if(e<0)break a;f=d.data;g=e+(-1)|0;if(f[e]===b)break;e=g;}return 1;}while(true){if(e<0)break a;f=d.data;g=e+(-1)|0;if(b.C(f[e]))return 1;e=g;}}return 0;}
function AOk(a,b,c){var d,e,f;a:{d=a.T;if(!c&&b!==null){e=0;f=a.j;while(true){if(e>=f)break a;if(b.C(d.data[e]))break;e=e+1|0;}return e;}e=0;f=a.j;while(true){if(e>=f)break a;if(d.data[e]===b)break;e=e+1|0;}return e;}return (-1);}
function AOl(a,b,c){var d,e,f;a:{d=a.T;if(!(!c&&b!==null)){e=0;f=a.j;while(e<f){if(d.data[e]===b){a.tr(e);return 1;}e=e+1|0;}}else{e=0;f=a.j;while(true){if(e>=f)break a;if(b.C(d.data[e])){a.tr(e);return 1;}e=e+1|0;}}}return 0;}
function AW3(a,b){var c,d,e;if(b>=a.j)G(Bm((((((H()).a(B(312))).h(b)).a(B(313))).h(a.j)).b()));c=a.T;d=c.data;e=d[b];a.j=a.j-1|0;if(!a.g8)d[b]=d[a.j];else Bc(c,b+1|0,c,b,a.j-b|0);d[a.j]=null;return e;}
function AOS(a,b,c){var d,e,f,g,h,i;d=a.j;if(c>=d)G(Bm((((((H()).a(B(316))).h(c)).a(B(313))).h(a.j)).b()));if(b>c)G(Bm((((((H()).a(B(317))).h(b)).a(B(315))).h(c)).b()));e=a.T;f=(c-b|0)+1|0;g=d-f|0;if(a.g8){h=b+f|0;Bc(e,h,e,b,d-h|0);}else{i=Bj(g,c+1|0);Bc(e,i,e,b,d-i|0);}i=g;while(i<d){e.data[i]=null;i=i+1|0;}a.j=g;}
function A3N(a){var b;if(!a.j)G(C8(B(318)));a.j=a.j-1|0;b=a.T.data[a.j];a.T.data[a.j]=null;return b;}
function A1E(a){if(!a.j)G(C8(B(318)));return a.T.data[a.j-1|0];}
function Bja(a){if(!a.j)G(C8(B(318)));return a.T.data[0];}
function A8a(a){IK(a.T,0,a.j,null);a.j=0;}
function AZt(a,b){var c;if(b<0)G(Z((((H()).a(B(319))).h(b)).b()));c=a.j+b|0;if(c>a.T.data.length)a.kz(Bj(Bj(8,c),a.j*1.75|0));return a.T;}
function A7w(a,b){var c,d,e;c=a.T;d=FV((Co(c)).gC(),b);e=d.data;Bc(c,0,d,0,Bw(a.j,e.length));a.T=d;return d;}
function A1K(a,b){(APL()).Tx(a.T,b,0,a.j);}
function AR7(a){if(Bwn)return M4(a,1);if(a.rd===null)a.rd=BmY(a);return a.rd.b5();}
function ALd(a,b){var c;if(b<0)G(Z((((H()).a(B(320))).h(b)).b()));if(a.j<=b)return;c=b;while(c<a.j){a.T.data[c]=null;c=c+1|0;}a.j=b;}
function A4T(a){var b,c,d,e,f,g;if(!a.g8)return O1(a);b=a.T;c=1;d=0;e=a.j;while(d<e){f=b.data;c=c*31|0;g=f[d];if(g!==null)c=c+g.bl()|0;d=d+1|0;}return c;}
function ATr(a,b){var c,d,e,f,g,h,i,j;if(b===a)return 1;if(!a.g8)return 0;if(!(b instanceof F6))return 0;c=b;if(!c.g8)return 0;d=a.j;if(d!=c.j)return 0;e=a.T;f=c.T;g=0;a:{while(g<d){b:{h=f.data;i=e.data[g];j=h[g];if(i!==null){if(i.C(j))break b;else break a;}if(j!==null)break a;}g=g+1|0;}return 1;}return 0;}
function AZu(a){var b,c,d,e;if(!a.j)return B(321);b=a.T;c=b.data;d=A1r(32);d.l3(91);d.zW(c[0]);e=1;while(e<a.j){d.Ez(B(322));d.zW(c[e]);e=e+1|0;}d.l3(93);return d.b();}
function ALL(b){return BpN(b);}
function ANa(a){return a.b5();}
var IB=D(0);
function M6(){CR.call(this);this.Cx=0;}
function Bwo(a){var b=new M6();ZC(b,a);return b;}
function ZC(a,b){Fh(a,b);}
function A32(a,b,c,d){var e;e=a.kA();d.bC(e,b-d.eJ(e)|0);a.Cx=b;return b;}
function AM8(a){return a.Cx;}
function AYI(a){return B(323);}
function BcS(a,b){return 0;}
function K1(){BO.call(this);this.hJ=0;}
function AVV(a){var b=new K1();ANc(b,a);return b;}
function ANc(a,b){Da(a);a.hJ=b;}
function BcE(a,b){a.l=b;}
function A6v(a,b,c,d){var e,f,g;e=b+1|0;if(e>d.O()){d.eg=1;return (-1);}f=c.g(b);if(b>d.dW()){g=c.g(b-1|0);if(Cb(g))return (-1);}if(a.hJ!=f)return (-1);return a.l.e(e,c,d);}
function ARm(a,b,c,d){var e,f,g,h,i;if(!(c instanceof BM))return He(a,b,c,d);e=c;f=d.dW();g=d.O();while(true){if(b>=g)return (-1);h=e.eX(a.hJ,b);if(h<0)return (-1);if(h>f&&Cb(e.g(h-1|0))){b=h+1|0;continue;}i=a.l;b=h+1|0;if(i.e(b,c,d)>=0)break;}return h;}
function A7q(a,b,c,d,e){var f,g,h;if(!(d instanceof BM))return Hn(a,b,c,d,e);f=e.dW();g=d;a:{while(true){if(c<b)return (-1);h=g.nh(a.hJ,c);if(h<0)break a;if(h<b)break a;if(h>f&&Cb(g.g(h-1|0))){c=h+(-2)|0;continue;}if(a.l.e(h+1|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function AY$(a){return (((H()).a(B(59))).ba(a.hJ)).b();}
function AK4(a,b){if(b instanceof D7)return 0;if(b instanceof D3)return 0;if(b instanceof Do)return 0;if(b instanceof D1)return 0;if(b instanceof K6)return 0;if(!(b instanceof K1))return 1;return b.hJ!=a.hJ?0:1;}
function AZf(a,b){return 1;}
var AI9=D(EJ);
function A8o(a,b){var c=new AI9();AON(c,a,b);return c;}
function AON(a,b,c){WZ(a,b,c);}
var Qm=D();
var Bwp=null;function Bwq(){Bwq=L(Qm);AOV();}
function AOV(){var b,c,d;Bwp=B5(16384);b=0;while(b<16384){Bwp.data[b]=QG((b+0.5)/16384.0*6.2831854820251465);b=b+1|0;}b=0;while(b<360){c=Bwp.data;d=b;c[(d*45.511112213134766|0)&16383]=QG(d*0.01745329238474369);b=b+90|0;}}
var OZ=D(0);
function EX(){CY.call(this);this.gv=null;}
function Bn5(a,b,c,d){var e=new EX();MW(e,a,b,c,d);return e;}
function MW(a,b,c,d,e){F5(a,c,d,e);a.gv=b;}
function A4I(a,b,c,d){var e,f,g,h;e=a.gv.jB();f=a.gv.i4();g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.bz.co()|0)>d.O())break a;h=a.bz.bM(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.l.e(b,c,d);if(h>=0)break;b=b-a.bz.co()|0;g=g+(-1)|0;}return h;}if((b+a.bz.co()|0)>d.O()){d.eg=1;return (-1);}h=a.bz.bM(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function A5n(a){return a.gv.b();}
function Do(){var a=this;BO.call(a);a.ec=null;a.sy=0;}
function A$2(a){var b=new Do();AGU(b,a);return b;}
function AGU(a,b){Da(a);a.ec=b.mP();a.sy=b.bH;}
function A73(a,b,c,d){var e,f,g,h,i,j;e=d.O();if(b<e){f=b+1|0;g=c.g(b);if(a.r(g)){h=a.l.e(f,c,d);if(h>0)return h;}if(f<e){i=f+1|0;j=c.g(f);if(HQ(g,j)&&a.r(DI(g,j)))return a.l.e(i,c,d);}}return (-1);}
function BhF(a){return ((((H()).a(B(47))).a(!a.sy?B(48):B(49))).a(a.ec.b())).b();}
function AQb(a,b){return a.ec.r(b);}
function ALR(a,b){if(b instanceof D1)return KJ(a.ec,b.tR());if(b instanceof D7)return KJ(a.ec,b.qd());if(b instanceof Do)return Ib(a.ec,b.ec);if(!(b instanceof D3))return 1;return Ib(a.ec,b.vS());}
function ASP(a){return a.ec;}
function Bfh(a,b){a.l=b;}
function APM(a,b){return 1;}
var EN=D();
var Th=D(EN);
function BM(){var a=this;C.call(a);a.X=null;a.nn=0;}
var Bwr=null;function E5(){E5=L(BM);AZV();}
function Oo(a){var b=new BM();Kc(b,a);return b;}
function Hc(a,b,c){var d=new BM();Ri(d,a,b,c);return d;}
function Bws(a,b,c,d){var e=new BM();LS(e,a,b,c,d);return e;}
function Bwt(a,b,c,d){var e=new BM();MH(e,a,b,c,d);return e;}
function Bll(a,b){var c=new BM();X6(c,a,b);return c;}
function Bqn(a,b,c){var d=new BM();Rm(d,a,b,c);return d;}
function Kc(a,b){var c,d,e;E5();c=b.data;J(a);d=c.length;a.X=B$(d);e=0;while(e<d){a.X.data[e]=c[e];e=e+1|0;}}
function Ri(a,b,c,d){var e,f;E5();J(a);a.X=B$(d);e=0;while(e<d){f=b.data;a.X.data[e]=f[e+c|0];e=e+1|0;}}
function LS(a,b,c,d,e){E5();MH(a,b,c,d,RG(e.b()));}
function MH(a,b,c,d,e){E5();J(a);Xi(a,b,c,d,e);}
function X6(a,b,c){E5();LS(a,b,0,b.data.length,c);}
function Rm(a,b,c,d){var e,f,g,h,i,j,k;E5();J(a);a.X=B$(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.X.data;j=e+1|0;g[e]=i&65535;}else{g=a.X.data;k=e+1|0;g[e]=GF(i);g=a.X.data;j=k+1|0;g[k]=Gl(i);}f=f+1|0;c=h;e=j;}if(e<a.X.data.length)a.X=LO(a.X,e);}
function Xi(a,b,c,d,e){var f;f=AFH(e,AER(b,c,d));if(ABT(f)&&!Ck(f)&&BG(f)==Dg(f))a.X=Qf(f);else{a.X=B$(Bf(f));f.PT(a.X);}}
function A4D(a,b){if(b>=0&&b<a.X.data.length)return a.X.data[b];G(L_());}
function A8Z(a){return a.X.data.length;}
function A$S(a){return a.X.data.length?0:1;}
function APw(a,b,c,d,e){var f,g,h;if(b>=0&&b<=c&&c<=a.k()&&e>=0){f=d.data;if((e+(c-b|0)|0)<=f.length){while(b<c){g=e+1|0;h=b+1|0;f[e]=a.g(b);e=g;b=h;}return;}}G(Dw());}
function BgU(a,b){var c,d,e,f,g;if(a===b)return 0;c=Bw(a.k(),b.k());d=0;while(true){if(d>=c)return a.k()-b.k()|0;e=a.g(d);f=b.g(d);g=e-f|0;if(g)break;d=d+1|0;}return g;}
function Bc9(a,b,c){var d,e,f;if((c+b.k()|0)>a.k())return 0;d=0;while(d<b.k()){e=b.g(d);f=c+1|0;if(e!=a.g(c))return 0;d=d+1|0;c=f;}return 1;}
function A$X(a,b){if(a===b)return 1;return a.Bl(b,0);}
function A71(a,b){var c,d,e,f;if(a===b)return 1;if(b.k()>a.k())return 0;c=0;d=a.k()-b.k()|0;while(d<a.k()){e=a.g(d);f=c+1|0;if(e!=b.g(c))return 0;d=d+1|0;c=f;}return 1;}
function BbZ(a,b,c){var d,e,f,g;d=Bj(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.X.data.length)return (-1);if(a.X.data[d]==e)break;d=d+1|0;}return d;}f=GF(b);g=Gl(b);while(true){if(d>=(a.X.data.length-1|0))return (-1);if(a.X.data[d]==f&&a.X.data[d+1|0]==g)break;d=d+1|0;}return d;}
function A70(a,b){return a.eX(b,0);}
function A4L(a,b,c){var d,e,f,g,h,i;d=Bw(c,a.k()-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.X.data[d]==e)break;d=d+(-1)|0;}return d;}f=GF(b);g=Gl(b);while(true){if(d<1)return (-1);if(a.X.data[d]==g){h=a.X.data;i=d-1|0;if(h[i]==f)break;}d=d+(-1)|0;}return i;}
function AR0(a,b){return a.nh(b,a.k()-1|0);}
function A7D(a,b,c){var d,e,f;d=Bj(0,c);e=a.k()-b.k()|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=b.k())break a;if(a.g(d+f|0)!=b.g(f))break;f=f+1|0;}d=d+1|0;}return d;}
function BcA(a,b){return a.vC(b,0);}
function APl(a,b,c){var d,e;d=Bw(c,a.k()-b.k()|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.k())break a;if(a.g(d+e|0)!=b.g(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function ARE(a,b){return a.BP(b,a.k());}
function AKT(a,b,c){if(b>c)G(Dw());return Hc(a.X,b,c-b|0);}
function AR3(a,b){return a.cm(b,a.k());}
function APF(a,b,c){return a.cm(b,c);}
function A2u(a,b){var c,d,e;c=a.k()-b.k()|0;d=0;while(d<=c){e=0;while(true){if(e>=b.k())return 1;if(a.g(d+e|0)!=b.g(e))break;e=e+1|0;}d=d+1|0;}return 0;}
function Bd0(a,b,c){var d,e,f,g;d=H();e=a.k()-b.k()|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=b.k()){d.c0(c);f=f+(b.k()-1|0)|0;break a;}if(a.g(f+g|0)!=b.g(g))break;g=g+1|0;}d.ba(a.g(f));}f=f+1|0;}d.c0(a.ex(f));return d.b();}
function A_i(a){var b,c;b=0;c=a.k()-1|0;a:{while(b<=c){if(a.g(b)>32)break a;b=b+1|0;}}while(b<=c&&a.g(c)<=32){c=c+(-1)|0;}return a.cm(b,c+1|0);}
function AM_(a){return a;}
function A$W(a){var b,c,d;b=B$(a.X.data.length);c=0;while(true){d=b.data;if(c>=d.length)break;d[c]=a.X.data[c];c=c+1|0;}return b;}
function AFe(b){var c,d;E5();c=new BM;d=B$(1);d.data[0]=b;Kc(c,d);return c;}
function K5(b){E5();return ((H()).h(b)).b();}
function A0n(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BM))return 0;c=b;if(c.k()!=a.k())return 0;d=0;while(d<c.k()){if(a.g(d)!=c.g(d))return 0;d=d+1|0;}return 1;}
function Bhi(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(a.k()!=b.k())return 0;c=0;while(c<a.k()){if(DV(a.g(c))!=DV(b.g(c)))return 0;c=c+1|0;}return 1;}
function AVc(a,b){return a.CE(RG(b.b()));}
function AU$(a){IY();return a.CE(Bvp);}
function Bb3(a,b){var c,d;c=Zu(b,M_(a.X));if(c.Ec()&&!Ck(c)&&BG(c)==Dg(c))return I_(c);d=Cy(Bf(c));c.Lr(d);return d;}
function Bb$(a){var b,c,d,e;a:{if(!a.nn){b=a.X.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.nn=(31*a.nn|0)+e|0;d=d+1|0;}}}return a.nn;}
function Bbh(a){var b,c,d,e,f,g,h,i;if(a.bS())return a;b=Be(a.X.data.length);c=0;d=0;while(d<a.X.data.length){a:{if(d!=(a.X.data.length-1|0)&&Cb(a.X.data[d])){e=a.X.data;f=d+1|0;g=e[f];if(BU(g)){h=b.data;i=c+1|0;h[c]=E6(DI(a.X.data[d],a.X.data[f]));d=f;break a;}}h=b.data;i=c+1|0;h[c]=D_(a.X.data[d]);}d=d+1|0;c=i;}return Bqn(b,0,c);}
function A_B(a,b){return AAY(H0(b),a.b());}
function A0e(a,b,c){return OA(H0(b),a.b(),c);}
function APQ(a,b,c){return AJi(H3(H0(b),a.b()),c);}
function AZV(){Bwr=Bot();}
var PD=D(Es);
var Bwu=null;function A__(){A__=L(PD);A2s();}
function BnS(){var a=new PD();W6(a);return a;}
function W6(a){A__();Iw(a);}
function A_O(a,b){A1C(b);}
function A2s(){Bwu=BnS();}
function AD3(){var a=this;GB.call(a);a.Bq=0;a.vN=0;a.ul=null;}
function Bpf(a,b,c,d,e,f){var g=new AD3();ARt(g,a,b,c,d,e,f);return g;}
function ARt(a,b,c,d,e,f,g){OS(a,c,e,f);a.vN=b;a.Bq=g;a.ul=d;}
function Bb7(a,b){return a.ul.data[b+a.vN|0];}
function A_8(a,b,c){a.ul.data[b+a.vN|0]=c;}
function AKh(a){return a.Bq;}
var CP=D(Bd);
var Bwv=null;var Bww=null;var Bwx=null;var Bwy=null;var Bwz=null;var BwA=null;var BwB=null;var BwC=null;var BwD=null;var BwE=null;var BwF=null;function Ba7(){Ba7=L(CP);ANB();}
function Ej(a,b){var c=new CP();AFO(c,a,b);return c;}
function LN(){Ba7();return BwF.e6();}
function AFO(a,b,c){Ba7();B4(a,b,c);}
function ANB(){Bwv=Ej(B(324),0);Bww=Ej(B(325),1);Bwx=Ej(B(326),2);Bwy=Ej(B(327),3);Bwz=Ej(B(328),4);BwA=Ej(B(329),5);BwB=Ej(B(330),6);BwC=Ej(B(331),7);BwD=Ej(B(332),8);BwE=Ej(B(333),9);BwF=I(CP,[Bwv,Bww,Bwx,Bwy,Bwz,BwA,BwB,BwC,BwD,BwE]);}
var TD=D(DQ);
function Bmd(a){var b=new TD();AYL(b,a);return b;}
function AYL(a,b){HX(a,b,2.0,4.0);}
function ATn(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(h.eu(2))break a;Bq();i=Bsb;break a;}k=e.data;n=f+1|0;k[f]=(192|l>>6)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else if(!Ln(l)){if((f+3|0)>g){j=j+(-1)|0;if(h.eu(3))break a;Bq();i=Bsb;break a;}k=e.data;o=f+1|0;k[f]=(224|l>>12)<<24>>24;n=o+1|0;k[o]=(128|l>>6&63)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else{if
(!Cb(l)){i=B8(1);break a;}if(j>=d){if(h.uL())break a;Bq();i=Bsc;break a;}n=j+1|0;p=k[j];if(!BU(p)){j=n+(-2)|0;i=B8(1);break a;}if((f+4|0)>g){j=n+(-2)|0;if(h.eu(4))break a;Bq();i=Bsb;break a;}k=e.data;q=DI(l,p);j=f+1|0;k[f]=(240|q>>18)<<24>>24;o=j+1|0;k[j]=(128|q>>12&63)<<24>>24;j=o+1|0;k[o]=(128|q>>6&63)<<24>>24;m=j+1|0;k[j]=(128|q&63)<<24>>24;j=n;}c=j;f=m;}j=c;}h.eB(j);h.d6(f);return i;}
var KQ=D();
function ADm(a){J(a);}
var Jp=D(0);
function Go(){var a=this;KQ.call(a);a.t7=0;a.dt=null;a.E4=0.0;a.C6=0;a.lS=0;a.mJ=0;a.HE=0;}
var BwG=null;var BwH=null;function X9(){X9=L(Go);Bik();}
function BwI(){var a=new Go();I$(a);return a;}
function BwJ(a){var b=new Go();OQ(b,a);return b;}
function AH1(b,c,d){X9();return Bpq(b,c);}
function I$(a){X9();OQ(a,11);}
function OQ(a,b){X9();ADm(a);a.mJ=(-1);if(b<0)G(C7());a.t7=0;if(!b)b=1;a.dt=Rg(a,b);a.lS=a.dt.data.length;a.E4=0.75;OE(a);}
function Rg(a,b){return Y(O6,b);}
function OE(a){a.C6=a.dt.data.length*a.E4|0;}
function AFp(a,b){var c,d,e;E_(a);try{c=b.bl();d=(c&2147483647)%a.dt.data.length|0;e=a.dt.data[d];while(e!==null){if(e.D0(b,c))return e.gc;e=e.mW;}return null;}finally{Cw(a);}}
function AWT(a,b,c){var d,e,f,g,h,i,j;E_(a);try{if(b!==null&&c!==null){d=b.bl();e=d&2147483647;f=e%a.dt.data.length|0;g=a.dt.data[f];while(g!==null&&!g.D0(b,d)){g=g.mW;}if(g!==null){h=g.gc;g.gc=c;return h;}a.HE=a.HE+1|0;i=a.t7+1|0;a.t7=i;if(i>a.C6){a.pD();f=e%a.dt.data.length|0;}if(f<a.lS)a.lS=f;if(f>a.mJ)a.mJ=f;j=AH1(b,c,d);j.mW=a.dt.data[f];a.dt.data[f]=j;return null;}G(Kr());}finally{Cw(a);}}
function AUh(a){var b,c,d,e,f,g,h,i,j;b=(a.dt.data.length<<1)+1|0;if(!b)b=1;c=(-1);d=Rg(a,b);e=a.mJ+1|0;f=b;while(true){e=e+(-1)|0;if(e<a.lS)break;g=a.dt.data[e];while(g!==null){h=(g.R8()&2147483647)%b|0;if(h<f)f=h;if(h>c)c=h;i=d.data;j=g.mW;g.mW=i[h];i[h]=g;g=j;}}a.lS=f;a.mJ=c;a.dt=d;OE(a);}
function Bik(){BwG=BpC();BwH=Bk0();}
function Xw(){Go.call(this);this.s6=null;}
function Bla(){var a=new Xw();AWl(a);return a;}
function Ble(a){var b=new Xw();ASf(b,a);return b;}
function AWl(a){I$(a);}
function ASf(a,b){I$(a);a.s6=b;}
function AVm(a,b){var c,d;c=AFp(a,b);d=!(c instanceof BM)?null:c;if(d===null&&a.s6!==null)d=a.s6.Fp(b);return d;}
function AIF(){var a=this;Gw.call(a);a.EP=0;a.wu=0;a.va=null;}
function Bk6(a,b,c,d,e,f){var g=new AIF();A6n(g,a,b,c,d,e,f);return g;}
function A6n(a,b,c,d,e,f,g){M1(a,c,e,f);a.wu=b;a.EP=g;a.va=d;}
function AW0(a,b){return a.va.data[b+a.wu|0];}
function AV4(a,b,c){a.va.data[b+a.wu|0]=c;}
function Bcy(a){return a.EP;}
var AFz=D();
var Uz=D();
var DT=D(Cj);
var AGi=D(DT);
function QU(){Ba.call(this);this.iY=null;}
var BwK=null;function A9t(){A9t=L(QU);A2w();}
function BoB(a){var b=new QU();AEm(b,a);return b;}
function AEm(a,b){A9t();BZ(a);a.iY=B5(b*16|0);}
function A2P(a,b,c,d,e){var f,g;f=0;while(f<a.iY.data.length){g=f/16|0;if(d.dX!==null&&g<d.dX.data.length&&d.dX.data[g]!==null)Bc(d.dX.data[g].c,0,a.iY,f,16);else{A9t();Bc(BwK.c,0,a.iY,f,16);}f=f+16|0;}b.bp.T5(Ce(b,c),a.iY,0,a.iY.data.length);}
function A2w(){BwK=BH();}
function F0(){var a=this;R.call(a);a.N_=0.0;a.IL=0.0;a.I2=0.0;a.QX=0.0;}
function Bl3(a,b,c,d){var e=new F0();MQ(e,a,b,c,d);return e;}
function MQ(a,b,c,d,e){B6(a);a.N_=b;a.IL=c;a.I2=e;a.QX=d*3.1415927410125732*(d%2|0?(-1):1);}
var US=D(F0);
function Bpk(a,b,c,d){var e=new US();AN2(e,a,b,c,d);return e;}
function AN2(a,b,c,d,e){MQ(a,b,c,d,e);}
var Ee=D(Bd);
var BwL=null;var BwM=null;var BwN=null;var BwO=null;var BwP=null;var BwQ=null;function Bqk(){Bqk=L(Ee);AWI();}
function I7(a,b){var c=new Ee();XI(c,a,b);return c;}
function XI(a,b,c){Bqk();B4(a,b,c);}
function AWI(){BwL=I7(B(334),0);BwM=I7(B(215),1);BwN=I7(B(335),2);BwO=I7(B(336),3);BwP=I7(B(337),4);BwQ=I(Ee,[BwL,BwM,BwN,BwO,BwP]);}
var Oc=D(Dk);
var Bvp=null;function IY(){IY=L(Oc);APA();}
function BmD(){var a=new Oc();Zm(a);return a;}
function Zm(a){IY();HW(a,B(338),Y(BM,0));}
function AYo(a){return Bl0(a);}
function A03(a){return Bmd(a);}
function APA(){Bvp=BmD();}
var EO=D(0);
var Pn=D(0);
var F8=D();
var BwR=null;var BwS=null;function BwT(){BwT=L(F8);A8O();}
function A8O(){BwR=BB();BwS=BB();}
function AAt(){Bz.call(this);this.iz=0;}
function Bjx(a){var b=new AAt();Bi5(b,a);return b;}
function Bi5(a,b){CJ(a);a.iz=b;}
function A$p(a,b,c,d){var e,f,g;e=!d.jZ()?c.k()-b|0:d.dW()-b|0;if(!e){d.bC(a.iz,0);return a.l.e(b,c,d);}if(e<2){f=c.g(b);g=97;}else{f=c.g(b);g=c.g(b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:d.bC(a.iz,0);return a.l.e(b,c,d);case 13:if(g!=10){d.bC(a.iz,0);return a.l.e(b,c,d);}d.bC(a.iz,0);return a.l.e(b,c,d);default:}return (-1);}
function ANT(a,b){var c;c=!b.eJ(a.iz)?0:1;b.bC(a.iz,(-1));return c;}
function AQB(a){return B(339);}
function FJ(){C.call(this);this.J8=null;}
function Ng(a){AIU(a,TG());}
function AIU(a,b){J(a);a.J8=b;}
function We(){var a=this;FJ.call(a);a.nc=null;a.j2=null;a.fZ=0;a.nR=0;a.vz=0;a.AP=0;}
function BlI(a,b){var c=new We();A7y(c,a,b);return c;}
function A7y(a,b,c){Ng(a);a.AP=(-1);if(c<0)G(C7());a.nc=b;a.j2=B$(Bj(64,c));}
function ATt(a){QK(a);a.nc.f3();a.nc=null;}
function A10(a){var b,c,d,e;QK(a);if(a.vz&&a.fZ>=a.nR)return null;b=H();a:{while(true){if(a.fZ>=a.nR&&!M7(a,0))break a;c=a.j2.data;d=a.fZ;a.fZ=d+1|0;e=c[d];if(e==10)break;if(e==13){if(a.fZ>=a.nR&&!M7(a,0))break a;if(a.j2.data[a.fZ]!=10)break a;a.fZ=a.fZ+1|0;break a;}b.ba(e);}}return b.b();}
function M7(a,b){var c;if(a.vz)return 0;a:{while(true){if(b>=a.j2.data.length)break a;c=a.nc.Mx(a.j2,b,a.j2.data.length-b|0);if(c==(-1)){a.vz=1;break a;}if(!c)break;b=b+c|0;}}a.nR=b;a.fZ=0;a.AP=(-1);return 1;}
function QK(a){if(a.nc!==null)return;G(Blz());}
var Wx=D(DX);
var HZ=D(EE);
var ADS=D();
var H5=D(BF);
var BwU=null;function BiZ(){BiZ=L(H5);A$a();}
function Boe(a){var b=new H5();AHk(b,a);return b;}
function BwV(){var a=new H5();Lf(a);return a;}
function AXk(a,b,c){var d,e,f;D9();d=BuZ;D5(c,d);e=V(a.br);f=V((d.b2()));Sj(e,b,f);OM(d,c);}
function AHk(a,b){BiZ();BS(a);}
function Lf(a){BiZ();BS(a);}
function A$a(){BwU=Boe(0);}
function Sj(b,c,d){var jsObj=Bullet.wrapPointer(b,Bullet.btBoxShape);var inertiaJSObj=Bullet.wrapPointer(d,Bullet.btVector3);jsObj.calculateLocalInertia(c,inertiaJSObj);}
var AFn=D();
var R9=D(CT);
function Tn(){var a=this;C.call(a);a.eb=null;a.z7=null;a.cK=null;a.c5=0;}
function BkZ(){var a=new Tn();A2c(a);return a;}
function A2c(a){J(a);a.cK=DY();}
function XN(){var a=this;C.call(a);a.f=null;a.jQ=0;a.o6=null;a.Ep=null;a.ot=null;a.Cg=null;a.ly=null;a.d5=null;a.Ss=0;a.Ey=0.0;}
function Bnl(){var a=new XN();ANq(a);return a;}
function BwW(a){var b=new XN();AGX(b,a);return b;}
function BwX(a,b){var c=new XN();AGO(c,a,b);return c;}
function ANq(a){AGX(a,5000);}
function AGX(a,b){AGO(a,b,null);}
function AGO(a,b,c){J(a);a.jQ=0;a.o6=BH();a.Ep=BH();a.ot=BH();a.Cg=BB();a.ly=CD(1.0,1.0,1.0,1.0);a.Ey=0.75;if(c!==null)a.f=Bk3(b,0,1,0,c);else a.f=BkF(b,0,1,0);a.o6.CX(0.0,0.0,Btr.bk(),Btr.bj());a.jQ=1;}
function AVq(a,b,c,d,e){a.ly.gT(b,c,d,e);}
function APo(a,b){a.o6.b6(b);a.jQ=1;}
function Bh2(a,b){if(a.d5!==null)G(C8(B(340)));a.d5=b;if(a.jQ){a.ot.b6(a.o6);G1(a.ot.c,a.Ep.c);a.jQ=0;}a.f.UG(a.ot,RF(a.d5));}
function Ph(a,b,c){a.Nl(b.m,b.n,b.p,c.m,c.n,c.p,a.ly,a.ly);}
function Bh1(a,b,c,d,e,f,g,h,i){var j;j=a.d5;Kd();if(j===BwY){a.Ij(b,c,e,f,a.Ey,h,i);return;}Hp(a,BwZ,null,2);a.f.AF(h.v,h.u,h.w,h.H);a.f.s(b,c,d);a.f.AF(i.v,i.u,i.w,i.H);a.f.s(e,f,g);}
function A7r(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v;Kd();Hp(a,BwZ,BwY,8);i=g.hw();j=h.hw();k=(a.Cg.hq(e-c,b-d)).N$();l=f*0.5;m=k.c4*l;n=k.c3*l;if(a.d5!==BwZ){a.f.t(i);a.f.s(b+m,c+n,0.0);a.f.t(i);o=a.f;l=b-m;p=c-n;o.s(l,p,0.0);a.f.t(j);o=a.f;q=d+m;r=e+n;o.s(q,r,0.0);a.f.t(j);a.f.s(d-m,e-n,0.0);a.f.t(j);a.f.s(q,r,0.0);a.f.t(i);a.f.s(l,p,0.0);}else{a.f.t(i);o=a.f;p=b+m;q=c+n;o.s(p,q,0.0);a.f.t(i);o=a.f;s=b-m;t=c-n;o.s(s,t,0.0);a.f.t(j);o=a.f;l=d+m;r=e+n;o.s(l,r,0.0);a.f.t(j);o=a.f;u=d-m;v=e-n;o.s(u,v,
0.0);a.f.t(j);a.f.s(l,r,0.0);a.f.t(i);a.f.s(p,q,0.0);a.f.t(j);a.f.s(u,v,0.0);a.f.t(i);a.f.s(s,t,0.0);}}
function A1Q(a,b,c,d,e,f,g){var h,i,j,k,l,m;h= -g;i=a.ly.hw();j=a.d5;Kd();if(j===BwZ){Hp(a,BwZ,BwY,24);a.f.t(i);a.f.s(b,c,d);a.f.t(i);k=a.f;l=b+e;k.s(l,c,d);a.f.t(i);a.f.s(l,c,d);a.f.t(i);k=a.f;h=d+h;k.s(l,c,h);a.f.t(i);a.f.s(l,c,h);a.f.t(i);a.f.s(b,c,h);a.f.t(i);a.f.s(b,c,h);a.f.t(i);a.f.s(b,c,d);a.f.t(i);a.f.s(b,c,d);a.f.t(i);k=a.f;m=c+f;k.s(b,m,d);a.f.t(i);a.f.s(b,m,d);a.f.t(i);a.f.s(l,m,d);a.f.t(i);a.f.s(l,m,d);a.f.t(i);a.f.s(l,m,h);a.f.t(i);a.f.s(l,m,h);a.f.t(i);a.f.s(b,m,h);a.f.t(i);a.f.s(b,m,h);a.f.t(i);a.f.s(b,
m,d);a.f.t(i);a.f.s(l,c,d);a.f.t(i);a.f.s(l,m,d);a.f.t(i);a.f.s(l,c,h);a.f.t(i);a.f.s(l,m,h);a.f.t(i);a.f.s(b,c,h);a.f.t(i);a.f.s(b,m,h);}else{Hp(a,BwZ,BwY,36);a.f.t(i);a.f.s(b,c,d);a.f.t(i);k=a.f;l=b+e;k.s(l,c,d);a.f.t(i);k=a.f;m=c+f;k.s(l,m,d);a.f.t(i);a.f.s(b,c,d);a.f.t(i);a.f.s(l,m,d);a.f.t(i);a.f.s(b,m,d);a.f.t(i);k=a.f;h=d+h;k.s(l,c,h);a.f.t(i);a.f.s(b,c,h);a.f.t(i);a.f.s(l,m,h);a.f.t(i);a.f.s(l,m,h);a.f.t(i);a.f.s(b,c,h);a.f.t(i);a.f.s(b,m,h);a.f.t(i);a.f.s(b,c,h);a.f.t(i);a.f.s(b,c,d);a.f.t(i);a.f.s(b,
m,d);a.f.t(i);a.f.s(b,c,h);a.f.t(i);a.f.s(b,m,d);a.f.t(i);a.f.s(b,m,h);a.f.t(i);a.f.s(l,c,d);a.f.t(i);a.f.s(l,c,h);a.f.t(i);a.f.s(l,m,h);a.f.t(i);a.f.s(l,c,d);a.f.t(i);a.f.s(l,m,h);a.f.t(i);a.f.s(l,m,d);a.f.t(i);a.f.s(b,m,d);a.f.t(i);a.f.s(l,m,d);a.f.t(i);a.f.s(l,m,h);a.f.t(i);a.f.s(b,m,d);a.f.t(i);a.f.s(l,m,h);a.f.t(i);a.f.s(b,m,h);a.f.t(i);a.f.s(b,c,h);a.f.t(i);a.f.s(l,c,h);a.f.t(i);a.f.s(l,c,d);a.f.t(i);a.f.s(b,c,h);a.f.t(i);a.f.s(l,c,d);a.f.t(i);a.f.s(b,c,d);}}
function Hp(a,b,c,d){var e;if(a.d5===null)G(C8(B(341)));if(!(a.d5!==b&&a.d5!==c)){if(a.jQ){e=a.d5;a.N();a.pr(e);}else if((a.f.nB()-a.f.hi()|0)<d){e=a.d5;a.N();a.pr(e);}}else{if(!a.Ss){if(c===null)G(C8(((((H()).a(B(342))).c0(b)).a(B(343))).b()));G(C8(((((((H()).a(B(342))).c0(b)).a(B(344))).c0(c)).a(B(343))).b()));}a.N();a.pr(b);}}
function Bay(a){a.f.N();a.d5=null;}
function AB_(){var a=this;C.call(a);a.d3=null;a.eN=null;a.dH=null;a.w_=0;a.xD=0;a.O8=0;a.ud=0;a.lk=0;a.pE=0;}
function Bqw(a,b,c){var d=new AB_();AUO(d,a,b,c);return d;}
function AUO(a,b,c,d){J(a);a.lk=0;a.pE=0;a.O8=b;a.d3=d;a.dH=OY(Cp(a.d3.b9,c));a.xD=1;a.ud=!b?35048:35044;a.eN=a.dH.tO();a.w_=AJu(a);a.eN.dn();a.dH.dn();}
function AJu(a){var b;b=Btv.jp();Btv.dj(34962,b);Btv.fQ(34962,Dg(a.dH),null,a.ud);Btv.dj(34962,0);return b;}
function A58(a){return a.d3;}
function AN$(a){return (BG(a.eN)*4|0)/a.d3.b9|0;}
function ARl(a){return Dg(a.dH)/a.d3.b9|0;}
function AF8(a){if(a.pE){Btv.rc(34962,0,BG(a.dH),a.dH);a.lk=0;}}
function AMx(a,b,c,d){a.lk=1;if(a.xD){QL(b,a.dH,d,c);a.eN.c$(0);a.eN.cu(d);}else{a.eN.da();a.eN.xV(b,c,d);a.eN.dn();a.dH.c$(0);a.dH.cu(BG(a.eN)<<2);}AF8(a);}
function AVp(a,b,c){var d,e,f,g,h,i;d=Btv;d.dj(34962,a.w_);if(a.lk){a.dH.cu(BG(a.eN)*4|0);d.fQ(34962,BG(a.dH),a.dH,a.ud);a.lk=0;}a:{e=C6(a.d3);if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data;h=CE(a.d3,f);i=g[f];if(i>=0){b.mp(i);b.iA(i,h.cS,h.ib,h.iI,a.d3.b9,h.cp);}f=f+1|0;}}f=0;while(f<e){h=CE(a.d3,f);i=b.mv(h.eG);if(i>=0){b.mp(i);b.iA(i,h.cS,h.ib,h.iI,a.d3.b9,h.cp);}f=f+1|0;}}a.pE=1;}
function APO(a,b,c){var d,e,f,g;a:{d=Btv;e=C6(a.d3);if(c===null){f=0;while(f<e){b.Dr((CE(a.d3,f)).eG);f=f+1|0;}}else{f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0)b.uQ(g);f=f+1|0;}}}d.dj(34962,0);a.pE=0;}
var AFJ=D();
var FA=D();
var Ia=D(BF);
var Bw0=null;function AVf(){AVf=L(Ia);A$d();}
function Bo4(a){var b=new Ia();AEh(b,a);return b;}
function Bw1(){var a=new Ia();Ka(a);return a;}
function AEh(a,b){AVf();BS(a);}
function Ka(a){AVf();BS(a);}
function A$d(){Bw0=Bo4(0);}
var Rn=D();
function Bhp(){var b;b=AYr();return b;}
function AYr(){var userAgent=navigator.userAgent.toLowerCase();return {firefox:userAgent.indexOf('firefox')!= -1,chrome:userAgent.indexOf('chrome')!= -1,safari:userAgent.indexOf('safari')!= -1,opera:userAgent.indexOf('opera')!= -1,IE:userAgent.indexOf('msie')!= -1,macOS:userAgent.indexOf('mac')!= -1,linux:userAgent.indexOf('linux')!= -1,windows:userAgent.indexOf('win')!= -1};}
var Yj=D();
function Tg(){CF.call(this);this.pi=null;}
function BqI(a,b,c){var d=new Tg();A08(d,a,b,c);return d;}
function A08(a,b,c,d){Oi(a,c,d);a.pi=Ty(a,b);if(a.pi!==null)return;G(Tu((((H()).a(B(345))).a(b.x())).b()));}
function Ty(a,b){var c,d,$$je;a:{try{c=AVz(b,null);}catch($$e){$$je=T($$e);if($$je instanceof Cg){break a;}else{throw $$e;}}return c;}b:{try{d=A7T(b,null);Xy(d,1);}catch($$e){$$je=T($$e);if($$je instanceof OJ){break b;}else{throw $$e;}}return d;}return null;}
function A$h(a){var b,c,$$je;a:{try{b=AJZ(a.pi,null);}catch($$e){$$je=T($$e);if($$je instanceof Cg){c=$$je;break a;}else{throw $$e;}}return b;}G(K0((((H()).a(B(346))).a((GM(a.pi)).x())).b(),c));}
var Io=D();
var Bw2=null;var Bw3=null;var Bw4=null;function Bw5(){Bw5=L(Io);Bey();}
function Bey(){Bw2=Bs();Bw3=Q();Bw4=Z7();}
function I9(){var a=this;C.call(a);a.qz=null;a.ii=0;a.hG=0;a.hh=0;a.ce=null;a.ge=null;a.hg=null;a.jf=0.0;}
var Bw6=null;function Ba8(){Ba8=L(I9);AS2();}
function BfY(){var a=new I9();AHe(a);return a;}
function Bqf(a){var b=new I9();AEl(b,a);return b;}
function AHe(a){Ba8();J(a);a.ge=Q();a.hg=Q();a.jf=(-1.0);}
function AEl(a,b){Ba8();J(a);a.ge=Q();a.hg=Q();a.jf=(-1.0);a.Ej(b);}
function BaX(a,b){a.qz=b.qz;a.ce=b.ce;a.hG=b.hG;a.hh=b.hh;a.ii=b.ii;a.ge.M(b.ge);a.hg.M(b.hg);a.jf=b.jf;return a;}
function AWz(a,b,c,d,e,f){a.qz=b;a.ce=c;a.hG=d;a.hh=e;a.ii=f;a.ge.L(0.0,0.0,0.0);a.hg.L(0.0,0.0,0.0);a.jf=(-1.0);return a;}
function AQC(a,b){var c;a:{b:{if(b!==a){if(b===null)break b;if(b.ce!==a.ce)break b;if(b.ii!=a.ii)break b;if(b.hG!=a.hG)break b;if(b.hh!=a.hh)break b;}c=1;break a;}c=0;}return c;}
function AL_(a,b){if(b===null)return 0;if(b===a)return 1;if(!(b instanceof I9))return 0;return a.JN(b);}
function A3U(a,b,c){a.ce.vr(b,a.ii,a.hG,a.hh,c);}
function AS2(){Bw6=ATV();}
var Jl=D(0);
var Kl=D(0);
var Ov=D(0);
var MO=D(0);
var Fi=D(Bd);
var Bw7=null;var Bw8=null;var Bw9=null;var Bw$=null;function Bl2(){Bl2=L(Fi);Bg6();}
function ABc(a,b){var c=new Fi();Sd(c,a,b);return c;}
function Sd(a,b,c){Bl2();B4(a,b,c);}
function Bg6(){Bw7=ABc(B(347),0);Bw8=ABc(B(348),1);Bw9=ABc(B(349),2);Bw$=I(Fi,[Bw7,Bw8,Bw9]);}
var Q8=D(0);
function AA5(){var a=this;C.call(a);a.BD=0;a.CJ=null;}
function Bo6(a,b){var c=new AA5();A24(c,a,b);return c;}
function A24(a,b,c){a.CJ=b;a.BD=c;J(a);}
function A5J(a){A_W(a.CJ,a.BD);}
function AWU(a){a.Kd();}
function K_(){var a=this;C.call(a);a.pK=0;a.oC=0;a.Mt=0;a.RV=0;}
function Bw_(a,b,c,d){var e=new K_();XQ(e,a,b,c,d);return e;}
function XQ(a,b,c,d,e){J(a);a.pK=b;a.oC=c;a.Mt=d;a.RV=e;}
var AEj=D(Bt);
function Hb(){var a=new AEj();A82(a);return a;}
function A82(a){CQ(a);}
var HY=D(Dd);
function Sz(a,b,c,d){GQ(a,b);a.G=c;a.bg=d;}
function APV(b,c,d){return Bpi(0,b.data.length,b,c,c+d|0,0);}
function BaJ(b){return APV(b,0,b.data.length);}
function BfI(a,b,c,d){var e,f,g,h,i;if(a.ci())G(Dv());if(Bf(a)<d)G(Hb());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bm((((((H()).a(B(350))).h(g)).a(B(296))).h(f)).b()));if(d<0)G(Bm(((((H()).a(B(297))).h(d)).a(B(298))).b()));h=a.G;i=0;while(i<d){g=h+1|0;f=c+1|0;a.rL(h,e[c]);i=i+1|0;h=g;c=f;}a.G=a.G+d|0;return a;}}e=b.data;G(Bm(((((((H()).a(B(299))).h(c)).a(B(56))).h(e.length)).a(B(21))).b()));}
function Y7(a){Ha(a);return a;}
function AIY(a){It(a);return a;}
function AXJ(a,b){KK(a,b);return a;}
function BeE(a,b){H2(a,b);return a;}
function BfQ(a){return AIY(a);}
function A1S(a){return Y7(a);}
function Bam(a,b){return a.Kx(b);}
function A3L(a,b){return a.Ka(b);}
var AH$=D(DS);
var Zw=D(U);
function Bp3(){var a=new Zw();ATC(a);return a;}
function ATC(a){Bv(a);}
function A_y(a){var b;b=BmN(a);b.bm=1;return b;}
function OB(){var a=this;C.call(a);a.uN=0;a.zI=0;a.Ed=null;}
function AP2(a,b,c){var d=new OB();AYW(d,a,b,c);return d;}
function AYW(a,b,c,d){J(a);a.uN=b;a.zI=c;a.Ed=d;}
var EM=D();
var Bxa=null;var Bxb=null;function Mc(a){J(a);}
function O2(b){if(!(b&1)){if(Bxb!==null)return Bxb;Bxb=Bp9();return Bxb;}if(Bxa!==null)return Bxa;Bxa=Bpy();return Bxa;}
var AHy=D(EM);
function Bp9(){var a=new AHy();ARk(a);return a;}
function ARk(a){Mc(a);}
function BeY(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function A1d(a,b,c){var d;a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}d=1;break a;}d=0;}return d;}
var AHx=D(EM);
function Bpy(){var a=new AHx();A41(a);return a;}
function A41(a){Mc(a);}
function ANo(a,b){return b!=10?0:1;}
function AXE(a,b,c){return b!=10?0:1;}
var AEo=D(G3);
var Z$=D(U);
function BpJ(){var a=new Z$();A90(a);return a;}
function A90(a){Bv(a);}
function Bek(a){var b;b=BoL(a);b.bm=1;return b;}
var JN=D(CH);
function XJ(){var a=this;C.call(a);a.Db=null;a.EB=0;}
function Bl5(a){var b=new XJ();A7m(b,a);return b;}
function A7m(a,b){J(a);a.Db=b;}
function D3(){var a=this;BX.call(a);a.gL=null;a.z5=0;}
function AZm(a){var b=new D3();AW5(b,a);return b;}
function AW5(a,b){Dm(a);a.gL=b.mP();a.z5=b.bH;}
function A2x(a,b,c){return !a.gL.r(c.g(b))?(-1):1;}
function ATg(a){return ((((H()).a(B(47))).a(!a.z5?B(48):B(49))).a(a.gL.b())).b();}
function AWv(a,b){if(b instanceof D7)return KJ(a.gL,b.qd());if(b instanceof D3)return Ib(a.gL,b.gL);if(b instanceof Do)return Ib(a.gL,b.vS());if(!(b instanceof D1))return 1;return 0;}
function Bcz(a){return a.gL;}
function NK(){var a=this;C.call(a);a.tH=null;a.mz=null;a.dR=0;a.nm=null;a.BU=0.0;a.CG=0.0;a.f0=0;a.Gm=null;a.oB=null;a.qC=null;a.vZ=0;a.te=0;a.yf=0;a.D9=0;a.wV=0;a.iH=null;a.gG=null;a.O$=0;a.Sk=null;a.Uv=0.0;a.nZ=0;a.r5=0;a.wo=0;}
var Bxc=null;function X5(){X5=L(NK);Ba0();}
function Bnd(){var a=new NK();AIg(a);return a;}
function Bxd(a,b){var c=new NK();L8(c,a,b);return c;}
function AIg(a){X5();L8(a,1000,null);}
function L8(a,b,c){var d,e,f,g,h,i,j,k,l,m;X5();J(a);a.dR=0;a.nm=null;a.BU=0.0;a.CG=0.0;a.f0=0;a.Gm=BH();a.oB=BH();a.qC=BH();a.vZ=0;a.te=770;a.yf=771;a.D9=770;a.wV=771;a.gG=null;a.Sk=CD(1.0,1.0,1.0,1.0);a.Uv=Bvv;a.nZ=0;a.r5=0;a.wo=0;if(b>8191)G(Z((((H()).a(B(351))).h(b)).b()));if(Btw===null)d=Bxc;else{Pj();d=Bxe;}e=new Jo;f=b*4|0;g=b*6|0;Pm(e,d,0,f,g,I(Fa,[Dr(1,2,B(352)),Dr(4,4,B(353)),Dr(16,2,B(354))]));a.tH=e;a.oB.CX(0.0,0.0,Btr.bk(),Btr.bj());a.mz=B5(b*20|0);h=O_(g);i=0;j=0;while(j<g){k=h.data;k[j]=i;k[j
+1|0]=(i+1|0)<<16>>16;l=j+2|0;m=(i+2|0)<<16>>16;k[l]=m;k[j+3|0]=m;k[j+4|0]=(i+3|0)<<16>>16;k[j+5|0]=i;j=j+6|0;i=(i+4|0)<<16>>16;}a.tH.RA(h);if(c!==null)a.iH=c;else{a.iH=Xa();a.O$=1;}}
function Xa(){var b,c,d;X5();b=B(355);c=B(356);d=Uh(b,c);if(d.ov())return d;G(Z((((H()).a(B(357))).a(d.n0())).b()));}
function A9J(a){if(a.f0)G(C8(B(358)));a.nZ=0;Btu.lj(0);if(a.gG===null)a.iH.d8();else a.gG.d8();a.BF();a.f0=1;}
function AYU(a){var b;if(!a.f0)G(C8(B(359)));if(a.dR>0)a.dE();a.nm=null;a.f0=0;b=Btu;b.lj(1);if(a.Mm())b.ew(3042);}
function ASJ(a,b,c,d,e){var f,g,h;if(!a.f0)G(C8(B(360)));f=a.mz.data.length;if(b!==a.nm){a.No(b);g=f;}else{g=f-a.dR|0;if(!g){a.dE();g=f;}}h=Bw(g,e);Bc(c,d,a.mz,a.dR,h);a.dR=a.dR+h|0;g=e-h|0;while(g>0){d=d+h|0;a.dE();h=Bw(f,g);Bc(c,d,a.mz,0,h);a.dR=a.dR+h|0;g=g-h|0;}}
function AR4(a){var b,c,d;if(!a.dR)return;a.nZ=a.nZ+1|0;a.r5=a.r5+1|0;b=a.dR/20|0;if(b>a.wo)a.wo=b;c=b*6|0;a.nm.d8();d=a.tH;d.wN(a.mz,0,a.dR);(d.B$()).c$(0);(d.B$()).cu(c);if(a.vZ)Btu.ew(3042);else{Btu.pP(3042);if(a.te!=(-1))Btu.MR(a.te,a.yf,a.D9,a.wV);}d.RC(a.gG===null?a.iH:a.gG,4,0,c);a.dR=0;}
function AQE(a,b){if(a.f0)a.dE();a.oB.b6(b);if(a.f0)a.BF();}
function AOY(a){(a.qC.b6(a.oB)).hW(a.Gm);if(a.gG===null){a.iH.wv(B(361),a.qC);a.iH.sM(B(362),0);}else{a.gG.wv(B(361),a.qC);a.gG.sM(B(362),0);}}
function Bcq(a,b){a.dE();a.nm=b;a.BU=1.0/b.bk();a.CG=1.0/b.bj();}
function ALc(a){return a.vZ?0:1;}
function Ba0(){Pj();Bxc=Bxf;}
var Oh=D();
var Bxg=null;function Bpj(){Bpj=L(Oh);Beq();}
function Beq(){Bxg=Be((Zv()).data.length);Bxg.data[Bi(Bxh)]=1;Bxg.data[Bi(Bxi)]=2;Bxg.data[Bi(Bxe)]=3;Bxg.data[Bi(Bxf)]=4;}
var Ho=D(BF);
var Bxj=null;function ASM(){ASM=L(Ho);AMv();}
function Bkq(a){var b=new Ho();AHc(b,a);return b;}
function Bxk(){var a=new Ho();La(a);return a;}
function Ba6(a,b){var c,d;c=V(a.br);d=b===null?0:V((b.b2()));ZF(c,d);}
function BbW(a){var b;b=N(Wz(V(a.br)));if(Bb(b,X))return null;Mn();Bsh.lt(b);return Bsh;}
function BcB(a,b){Rv(V(a.br),b);}
function AHc(a,b){ASM();BS(a);}
function La(a){ASM();BS(a);}
function A6B(a){return T4(V(a.br))?1:0;}
function AMv(){Bxj=Bkq(0);}
function ZF(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.RayResultCallback);if(c==0){jsObj.set_m_collisionObject(0);}else {var jsColObj=Bullet.wrapPointer(c,Bullet.btCollisionObject);jsObj.set_m_collisionObject(jsColObj);}}
function Wz(b){var jsObj=Bullet.wrapPointer(b,Bullet.RayResultCallback);return Bullet.getPointer(jsObj.get_m_collisionObject());}
function Rv(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.RayResultCallback);jsObj.set_m_closestHitFraction(c);}
function T4(b){var jsObj=Bullet.wrapPointer(b,Bullet.RayResultCallback);var returnedJSObj=jsObj.hasHit();return returnedJSObj;}
var Op=D(Ho);
var Bxl=null;function A6A(){A6A=L(Op);ASj();}
function Bom(a,b){var c=new Op();AB6(c,a,b);return c;}
function BqA(a){var b=new Op();RU(b,a);return b;}
function Ry(a,b,c){var d,e,f,g;d=Bkr(a);e=V((b.b2()));f=V((c.b2()));g=Tb(e,f,BJ(d,"addSingleResultJS"));a.c1(N(g),1);}
function AB6(a,b,c){var d,e;A6A();La(a);D9();d=BuZ;e=Bu0;D5(b,d);D5(c,e);Ry(a,d,e);}
function A4E(a,b,c){var d,e;d=V(a.br);e=V((b.b2()));return Y3(d,e,!!c);}
function RU(a,b){A6A();La(a);}
function ASj(){Bxl=BqA(0);}
function Tb(b,c,d){var callback=new Bullet.MyClosestRayResultCallback(b,c);callback.addSingleResult=d;return Bullet.getPointer(callback);}
function Y3(b,c,d){var jsObj=Bullet.wrapPointer(b,Bullet.MyClosestRayResultCallback);return jsObj.addSingleResultSuper(c,d);}
var AC$=D(C_);
var QF=D(0);
function N4(){var a=this;C.call(a);a.j3=null;a.fk=null;a.y_=null;a.MP=null;a.eQ=null;a.RJ=null;}
var Bxm=0;function AAO(){AAO=L(N4);A7z();}
function Bqe(a){var b=new N4();AJ3(b,a);return b;}
function Bxn(a,b){var c=new N4();L3(c,a,b);return c;}
function Bxo(a,b,c){var d=new N4();PM(d,a,b,c);return d;}
function AJ3(a,b){AAO();L3(a,b,null);}
function L3(a,b,c){AAO();PM(a,b,null,c);}
function PM(a,b,c,d){AAO();J(a);a.j3=Bs();a.fk=Bs();a.y_=Bs();a.MP=b;if(c===null)c=BH();a.eQ=c;if(d!==null)R6(a,b.kr,d);else UB(a,b.kr);a.Jr(b.Ch,Bxm);a.Un();}
function UB(a,b){var c,d,e;c=0;d=b.j;while(c<d){e=b.o(c);a.fk.E(e.wi());c=c+1|0;}QM(a);}
function R6(a,b,c){var d,e,f,g,h,i,j;d=0;e=b.j;while(d<e){f=c.data;g=b.o(d);h=f.length;i=0;a:{while(true){if(i>=h)break a;j=f[i];if(j.C(g.gA))break;i=i+1|0;}a.fk.E(g.wi());}d=d+1|0;}QM(a);}
function QZ(a,b){var c,d,e,f,g,h,i,j;c=0;d=b.el.j;while(c<d){a:{e=b.el.o(c);f=e.cR;if(f!==null){g=0;while(true){if(g>=f.ck)break a;f.eE.data[g]=a.Aa(f.eE.data[g].gA);g=g+1|0;}}}if(!a.j3.iR(e.ea,1)){h=a.j3.Of(e.ea,0);if(h>=0)e.ea=a.j3.o(h);else{i=a.j3;j=e.ea.LZ();e.ea=j;i.E(j);}}c=c+1|0;}c=0;d=b.Lp();while(c<d){QZ(a,b.UI(c));c=c+1|0;}}
function QM(a){var b,c;b=0;c=a.fk.j;while(b<c){QZ(a,a.fk.o(b));b=b+1|0;}}
function AUn(a,b,c){var d,e;d=b.fG();while(d.bG()){e=d.bD();a.JM(e,c);}}
function AMt(a,b,c){var d,e,f,g,h,i,j;d=Bqy();d.FK=b.FK;d.xG=b.xG;e=b.nu.b5();while(e.bG()){f=e.bD();g=a.Aa(f.Av.gA);if(g===null)continue;a:{h=BpQ();h.Av=g;if(c){h.gR=f.gR;h.gB=f.gB;h.f4=f.f4;}else{b:{if(f.gR!==null){h.gR=Bs();i=f.gR.b5();while(true){if(!i.bG())break b;j=i.bD();h.gR.E(U2(j.n1,j.pd));}}}c:{if(f.gB!==null){h.gB=Bs();i=f.gB.b5();while(true){if(!i.bG())break c;j=i.bD();h.gB.E(U2(j.n1,j.pd));}}}if(f.f4!==null){h.f4=Bs();i=f.f4.b5();while(true){if(!i.bG())break a;j=i.bD();h.f4.E(U2(j.n1,j.pd));}}}}if
(!(h.gR===null&&h.gB===null&&h.f4===null))d.nu.E(h);}if(d.nu.j>0)a.y_.E(d);}
function AXb(a,b,c){var d,e;d=a.fk.b5();while(d.bG()){e=d.bD();a.BJ(e,b,c);}}
function BhG(a,b,c,d){d.Li(b);if(d.dO===null&&a.eQ!==null)(b.dN.b6(a.eQ)).hW(c.fV);else if(a.eQ===null)b.dN.fL();else b.dN.b6(a.eQ);b.DB=a.RJ;return b;}
function AVs(a,b,c,d){var e,f,g,h;a:{if(b.el.j>0){e=b.el.b5();while(true){if(!e.bG())break a;f=e.bD();if(f.l4)c.E(a.Me(d.e9(),b,f));}}}g=(b.sv()).fG();while(g.bG()){h=g.bD();a.BJ(h,c,d);}}
function AKi(a){var b,c;b=a.fk.j;c=0;while(c<b){(a.fk.o(c)).E7(1);c=c+1|0;}c=0;while(c<b){(a.fk.o(c)).Ax(1);c=c+1|0;}}
function AJ_(a,b){return a.Sh(b,1);}
function AUJ(a,b,c){return a.TN(b,c,0);}
function A7O(a,b,c,d){return AFL(a.fk,b,c,d);}
function A7z(){Bxm=1;}
function Tc(){var a=this;S.call(a);a.vy=0;a.xb=0;a.ql=0;a.sh=0;a.fo=0;a.ie=0;a.bh=null;a.bI=null;}
function Dc(){var a=new Tc();A16(a);return a;}
function Bqp(a,b){var c=new Tc();Tl(c,a,b);return c;}
function Bp8(a,b,c){var d=new Tc();A3x(d,a,b,c);return d;}
function A16(a){Bh(a);a.bh=Bjd();}
function Tl(a,b,c){Bh(a);a.bh=Bjd();a.vy=b;a.xb=c;}
function A3x(a,b,c,d){Tl(a,c,d);a.gm(b);}
function AJ8(a,b){a:{if(a.vy){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.fo){a.bh.sR(HV(b&65535));break a;}a.bh.tP(HV(b&65535));break a;}if(a.xb&&b>128){a.ql=1;b=FW(E6(b));}}}if(!(!M3(b)&&!L$(b))){if(a.sh)a.bL.sR(b-55296|0);else a.bL.tP(b-55296|0);}if(a.fo)a.bh.sR(b);else a.bh.tP(b);if(!a.bm&&J1(b))a.bm=1;return a;}
function Bi4(a,b){var c,d;if(!a.bm&&b.bm)a.bm=1;if(a.sh){if(!b.cc)a.bL.i3(b.cq());else a.bL.d1(b.cq());}else if(!b.cc)a.bL.ja(b.cq());else{a.bL.js(b.cq());a.bL.d1(b.cq());a.cc=a.cc?0:1;a.sh=1;}if(!a.ie&&b.bP()!==null){if(a.fo){if(!b.j6())a.bh.i3(b.bP());else a.bh.d1(b.bP());}else if(!b.j6())a.bh.ja(b.bP());else{a.bh.js(b.bP());a.bh.d1(b.bP());a.bH=a.bH?0:1;a.fo=1;}}else{c=a.bH;if(a.bI!==null){d=a.bI;if(!c)a.bI=Bqj(a,c,d,b);else a.bI=Bm1(a,c,d,b);}else{if(c&&!a.fo&&a.bh.bS())a.bI=Bks(a,b);else if(!c)a.bI=Bm5(a,
c,b);else a.bI=Bka(a,c,b);a.ie=1;}}return a;}
function Bgj(a,b,c){if(b>c)G(C7());a:{b:{if(!a.vy){if(c<55296)break b;if(b>57343)break b;}while(true){if(b>=(c+1|0))break a;a.cO(b);b=b+1|0;}}if(a.fo)a.bh.SD(b,c+1|0);else a.bh.oG(b,c+1|0);}return a;}
function A2Z(a,b){var c,d;if(!a.bm&&b.bm)a.bm=1;if(b.ho())a.ql=1;if(!(a.cc^b.cc)){if(!a.cc)a.bL.ja(b.cq());else a.bL.d1(b.cq());}else if(a.cc)a.bL.i3(b.cq());else{a.bL.js(b.cq());a.bL.d1(b.cq());a.cc=1;}if(!a.ie&&b.bP()!==null){if(!(a.bH^b.j6())){if(!a.bH)a.bh.ja(b.bP());else a.bh.d1(b.bP());}else if(a.bH)a.bh.i3(b.bP());else{a.bh.js(b.bP());a.bh.d1(b.bP());a.bH=1;}}else{c=a.bH;if(a.bI!==null){d=a.bI;if(!c)a.bI=Bmg(a,c,d,b);else a.bI=BqU(a,c,d,b);}else{if(!a.fo&&a.bh.bS()){if(!c)a.bI=Bkn(a,b);else a.bI=Bqv(a,
b);}else if(!c)a.bI=BnG(a,b,c);else a.bI=BjD(a,b,c);a.ie=1;}}}
function AZ$(a,b){var c,d;if(!a.bm&&b.bm)a.bm=1;if(b.ho())a.ql=1;if(!(a.cc^b.cc)){if(!a.cc)a.bL.d1(b.cq());else a.bL.ja(b.cq());}else if(!a.cc)a.bL.i3(b.cq());else{a.bL.js(b.cq());a.bL.d1(b.cq());a.cc=0;}if(!a.ie&&b.bP()!==null){if(!(a.bH^b.j6())){if(!a.bH)a.bh.d1(b.bP());else a.bh.ja(b.bP());}else if(!a.bH)a.bh.i3(b.bP());else{a.bh.js(b.bP());a.bh.d1(b.bP());a.bH=0;}}else{c=a.bH;if(a.bI!==null){d=a.bI;if(!c)a.bI=BqQ(a,c,d,b);else a.bI=Bl_(a,c,d,b);}else{if(!a.fo&&a.bh.bS()){if(!c)a.bI=Bo_(a,b);else a.bI=Bpt(a,
b);}else if(!c)a.bI=BjS(a,b,c);else a.bI=BqP(a,b,c);a.ie=1;}}}
function ANM(a,b){if(a.bI!==null)return a.bH^a.bI.r(b);return a.bH^a.bh.e0(b);}
function A2f(a){if(!a.ie)return a.bh;return null;}
function A8c(a){return a.bL;}
function AZA(a){var b,c;if(a.bI!==null)return a;b=a.bP();c=Bn$(a,b);return c.gm(a.j6());}
function Bby(a){var b,c;b=H();c=a.bh.lH(0);while(c>=0){b.rQ(Fm(c));b.ba(124);c=a.bh.lH(c+1|0);}if(b.k()>0)b.G8(b.k()-1|0);return b.b();}
function APZ(a){return a.ql;}
function S7(){var a=this;C.call(a);a.ww=null;a.Ee=null;a.ph=null;}
function BmJ(a,b,c){var d=new S7();BdM(d,a,b,c);return d;}
function BdM(a,b,c,d){a.ph=b;a.ww=c;a.Ee=d;J(a);}
function BbO(a,b){if($rt_str(b.type).C(B(363)))a.ph.m$.cs(a.ww);else a.ph.m$.cB(a.ww,a.Ee);a.ph.nE.ko();}
function BhY(a,b){a.d9(b);}
var AIv=D(Bt);
function Zn(){var a=new AIv();A0D(a);return a;}
function A0D(a){CQ(a);}
var Rb=D(0);
var GA=D();
function Bxp(){var a=new GA();XD(a);return a;}
function XD(a){J(a);}
function AO8(a,b,c,d,e){return 0;}
function AVK(a){}
function AFA(){var a=this;GA.call(a);a.yh=null;a.rU=0.0;}
function BpL(){var a=new AFA();ASa(a);return a;}
function ASa(a){XD(a);}
function A$B(a,b,c,d,e){a.rU=0.0;return 0;}
function APn(a,b,c,d,e){return 0;}
function Bem(a,b,c){return 0;}
function Bc$(a,b,c,d){return 0;}
function A_h(a,b,c,d,e){return 0;}
function Bg5(a,b,c){var d,e,f,g,h;d=c-b;e=d-a.rU;a.rU=d;f=Btr.bk();g=Btr.bj();h=a.yh;if(f>g)f=g;return h.QM(e/f);}
function A7t(a,b,c,d,e){return 0;}
var GK=D(Ci);
var Sb=D(FP);
function Bp0(a,b,c,d,e,f){var g=new Sb();BaV(g,a,b,c,d,e,f);return g;}
function BaV(a,b,c,d,e,f,g){NU(a,b,c,d,e,f,g);}
function ATI(a,b){var c,d,e,f;c=a.cF.D.data;d=a.cr;e=b*4|0;f=(c[d+e|0]&255)<<24|(a.cF.D.data[(a.cr+e|0)+1|0]&255)<<16|(a.cF.D.data[(a.cr+e|0)+2|0]&255)<<8|a.cF.D.data[(a.cr+e|0)+3|0]&255;return $rt_intBitsToFloat(f);}
function BdB(a,b,c){var d,e,f,g;d=$rt_floatToIntBits(c);e=a.cF.D.data;f=a.cr;g=b*4|0;e[f+g|0]=d>>24<<24>>24;a.cF.D.data[(a.cr+g|0)+1|0]=d>>16<<24>>24;a.cF.D.data[(a.cr+g|0)+2|0]=d>>8<<24>>24;a.cF.D.data[(a.cr+g|0)+3|0]=d<<24>>24;}
var AAG=D();
var OG=D(0);
function Iz(){var a=this;C.call(a);a.hC=null;a.mO=null;a.fW=null;a.by=null;a.qi=null;a.p$=null;a.q8=null;a.bp=null;a.c9=null;a.c6=null;a.fu=null;a.id=null;a.k8=null;}
function AHN(a){J(a);a.hC=Bs();a.mO=Bs();a.fW=Bs();a.qi=Iv();a.p$=Iv();a.q8=Bky();a.id=Iv();a.k8=A1I();}
function AKJ(a,b,c,d){var e;if(a.by!==null)G(W(B(364)));e=a.R6(b);if(e>=0){a.mO.lw(e,c);a.fW.lw(e,d);return e;}a.hC.E(b);a.mO.E(c);a.fW.E(d);return a.hC.j-1|0;}
function BiT(a,b,c){return a.LP(b.xq,b,c);}
function A0F(a,b){return a.bn(b,null);}
function APu(a,b){var c,d;c=a.hC.j;d=0;while(true){if(d>=c)return (-1);if((a.hC.o(d)).C(b))break;d=d+1|0;}return d;}
function A77(a,b,c){var d,e,f,g,h,i,j,k,l;if(a.by!==null)G(W(B(365)));if(!b.ov())G(W(b.n0()));a.bp=b;d=a.hC.j;a.by=Be(d);e=0;while(e<d){f=a.hC.o(e);g=a.mO.o(e);h=a.fW.o(e);if(g!==null&&!g.Pq(a,e,c))a.by.data[e]=(-1);else{a.by.data[e]=b.Cv(f,0);if(a.by.data[e]>=0&&h!==null){if(!h.zr(a,e))a.p$.ji(e);else a.qi.ji(e);}}if(a.by.data[e]<0){a.mO.lw(e,null);a.fW.lw(e,null);}e=e+1|0;}a:{if(c!==null){i=c.cZ.ce.fp();j=C6(i);e=0;while(true){if(e>=j)break a;k=CE(i,e);l=b.mv(k.eG);if(l>=0)a.q8.o$(KD(k),l);e=e+1|0;}}}}
function ADn(a,b,c){var d,e,f;a.c6=b;a.c9=c;a.bp.d8();a.fu=null;d=0;while(d<a.qi.bY){e=a.fW;f=a.qi.b_(d);if(e.o(f)!==null)(a.fW.o(f)).bo(a,f,null,null);d=d+1|0;}}
function AB3(a,b){var c,d;a.id.P();c=C6(b);d=0;while(d<c){a.id.ji(a.q8.NV(KD(CE(b,d)),(-1)));d=d+1|0;}a.id.JQ();return a.id.cx;}
function A9j(a,b){if(b.dN.Ua()===0.0)return;a.k8.P();if(b.cE!==null)Hi(a.k8,b.cE);if(b.dm!==null)Hi(a.k8,b.dm);a.AD(b,a.k8);}
function AAs(a,b,c){var d,e,f;d=0;while(d<a.p$.bY){e=a.fW;f=a.p$.b_(d);if(e.o(f)!==null)(a.fW.o(f)).bo(a,f,b,c);d=d+1|0;}if(a.fu!==b.cZ.ce){if(a.fu!==null)a.fu.g6(a.bp,a.id.cx);a.fu=b.cZ.ce;a.fu.iD(a.bp,AB3(a,b.cZ.ce.fp()));}b.cZ.Mp(a.bp,0);}
function ABU(a){if(a.fu!==null){a.fu.g6(a.bp,a.id.cx);a.fu=null;}}
function JT(a,b){return b>=0&&b<a.by.data.length&&a.by.data[b]>=0?1:0;}
function Ce(a,b){return b>=0&&b<a.by.data.length?a.by.data[b]:(-1);}
function EC(a,b,c){if(a.by.data[b]<0)return 0;a.bp.I6(a.by.data[b],c);return 1;}
function Ut(a,b,c){if(a.by.data[b]<0)return 0;a.bp.Kl(a.by.data[b],c);return 1;}
function NB(a,b,c){if(a.by.data[b]<0)return 0;a.bp.tn(a.by.data[b],c);return 1;}
function Gx(a,b,c){if(a.by.data[b]<0)return 0;a.bp.NM(a.by.data[b],c);return 1;}
function Gp(a,b,c){if(a.by.data[b]<0)return 0;a.bp.kC(a.by.data[b],c);return 1;}
function ABN(a,b,c,d){if(a.by.data[b]<0)return 0;a.bp.Ig(a.by.data[b],c,d);return 1;}
function Er(a,b,c,d,e,f){if(a.by.data[b]<0)return 0;a.bp.zY(a.by.data[b],c,d,e,f);return 1;}
function Eu(a,b,c){if(a.by.data[b]<0)return 0;a.bp.E_(a.by.data[b],c);return 1;}
function AFx(a,b,c){if(a.by.data[b]<0)return 0;a.bp.E_(a.by.data[b],a.c9.eh.gV(c));return 1;}
var DD=D(Cg);
function Blz(){var a=new DD();AA8(a);return a;}
function AA8(a){Gb(a);}
var EA=D(DD);
function Bxq(){var a=new EA();Mg(a);return a;}
function Mg(a){AA8(a);}
function XL(){EA.call(this);this.Bv=0;}
function BnQ(a){var b=new XL();AV6(b,a);return b;}
function AV6(a,b){Mg(a);a.Bv=b;}
function APJ(a){return (((H()).a(B(366))).h(a.Bv)).b();}
var FB=D(Bd);
var Bxr=null;var Bxs=null;var Bxt=null;function WR(){WR=L(FB);BeQ();}
function AVI(a,b){var c=new FB();AE3(c,a,b);return c;}
function AE3(a,b,c){WR();B4(a,b,c);}
function BeQ(){Bxr=AVI(B(367),0);Bxs=AVI(B(368),1);Bxt=I(FB,[Bxr,Bxs]);}
function BV(){var a=this;C.call(a);a.dp=X;a.Fv=0;}
var Bxu=null;function Qe(){Qe=L(BV);A5Z();}
function Ua(b){var c;Qe();c=0;while(c<Bxu.j){if(!(Bxu.o(c)).T8(b))return EK(N(1),c);c=c+1|0;}return X;}
function S1(b){var c;Qe();c=(-1);a:{while(D2(b,X)){c=c+1|0;if(c>=63)break a;if(D2(Bx(Pt(b,c),N(1)),X))break a;}}return c>=0&&c<Bxu.j?Bxu.o(c):null;}
function B2(b){var c;Qe();c=Ua(b);if(IR(c,X))return c;Bxu.E(b);return EK(N(1),Bxu.j-1|0);}
function Ge(a,b){Qe();J(a);a.dp=b;a.Fv=ACu(b);}
function A4P(a,b){return b.bl()!=a.bl()?0:1;}
function A2E(a,b){var c;if(b===null)return 0;if(b===a)return 1;if(!(b instanceof BV))return 0;c=b;if(Bb(a.dp,c.dp))return a.Bh(c);return 0;}
function AZI(a){return S1(a.dp);}
function Hd(a){return 7489*a.Fv|0;}
function A5Z(){Bxu=Bs();}
function Jy(){BV.call(this);this.mX=0.0;}
var Bxv=X;var Bxw=X;function FR(){FR=L(Jy);AK7();}
function Bai(a,b){var c=new Jy();AAA(c,a,b);return c;}
function QI(b){FR();return Bai(Bxv,b);}
function AAA(a,b,c){FR();Ge(a,b);a.mX=c;}
function AW8(a){return Bai(a.dp,a.mX);}
function A0T(a){var b,c;b=Hd(a);c=(977*b|0)+Cv(a.mX)|0;return c;}
function AK7(){Bxv=B2(B(369));Bxw=B2(B(370));}
var X3=D(Cg);
function Blv(){var a=new X3();A$w(a);return a;}
function A$w(a){Gb(a);}
var Gk=D(HY);
function Nt(a,b,c,d){Sz(a,b,c,d);}
function BdH(a,b){if(b>=0&&b<a.bg)return a.wA(b);G(Bm(((((((H()).a(B(288))).h(b)).a(B(56))).h(a.bg)).a(B(21))).b()));}
function A_e(a){return a.fe();}
function Gt(){var a=this;Gk.call(a);a.fU=null;a.x5=0;a.fP=0;}
function Nv(a,b,c,d,e,f,g){Nt(a,c,e,f);a.fP=b;a.fU=d;a.x5=g;}
function A9V(a){return a.x5;}
var AG0=D(FY);
function P4(a){var b=new AG0();A5T(b,a);return b;}
function A5T(a,b){M8(a,b);}
var Js=D();
function Bmy(){var a=new Js();A3b(a);return a;}
function A3b(a){J(a);}
function BgB(a,b){if(b<=0)G(C7());return a.y$()*b|0;}
function AMk(a){return a.y$();}
function A8k(a){return Math.random();}
var AF1=D(Js);
var IM=D(0);
var Ue=D();
function BiE(a,b){return a.PN(b);}
function ANr(a){return a.Tr();}
var AJY=D(Cn);
function Lv(){var a=this;C.call(a);a.jM=null;a.wf=0.0;a.wx=0.0;a.Cj=0;a.Ck=0;a.z4=0;a.GJ=0;a.JS=null;}
function XF(a){J(a);a.JS=Q();}
function BfV(a,b){AFm(a.Cj,a.Ck,a.z4,a.GJ);a.jM.kZ=a.wf;a.jM.mL=a.wx;if(b)a.jM.cy.L(a.wf/2.0,a.wx/2.0,0.0);a.jM.gj();}
function BfE(a){return a.jM;}
function AQF(a,b){a.jM=b;}
function AOG(a,b,c){a.wf=b;a.wx=c;}
function A5O(a,b,c,d,e){a.Cj=b;a.Ck=c;a.z4=d;a.GJ=e;}
function V6(){Lv.call(this);this.ui=0.0;}
function BjO(){var a=new V6();A2Y(a);return a;}
function Bmj(a){var b=new V6();ZM(b,a);return b;}
function A2Y(a){ZM(a,BoE());}
function ZM(a,b){XF(a);a.ui=1.0;a.IF(b);}
function A7i(a,b,c,d){a.J3(0,0,b,c);a.Ni(b*a.ui,c*a.ui);a.T3(d);}
function AAU(){var a=this;C.call(a);a.eE=null;a.g3=null;a.ck=0;a.M5=0;}
function Bnq(a,b,c,d){var e=new AAU();AXT(e,a,b,c,d);return e;}
function AXT(a,b,c,d,e){J(a);a.M5=b;a.eE=FV(d,c);a.g3=FV(e,c);}
function AUu(a,b){a.Q1(b,0,b.ck);}
function A3A(a,b,c,d){var e;if((c+d|0)>b.ck)G(Z((((((((H()).a(B(371))).h(c)).a(B(310))).h(d)).a(B(311))).h(b.ck)).b()));e=(a.ck+d|0)-c|0;if(e>=a.eE.data.length)a.j7(Bj(8,e*1.75|0));Bc(b.eE,c,a.eE,a.ck,d);Bc(b.g3,c,a.g3,a.ck,d);a.ck=a.ck+d|0;}
function Bae(a){IK(a.eE,0,a.ck,null);IK(a.g3,0,a.ck,null);a.ck=0;}
function A00(a,b){var c,d,e;c=FV((Co(a.eE)).gC(),b);d=c.data;Bc(a.eE,0,c,0,Bw(a.ck,d.length));a.eE=c;e=FV((Co(a.g3)).gC(),b);d=e.data;Bc(a.g3,0,e,0,Bw(a.ck,d.length));a.g3=e;}
var TW=D(KA);
function BkE(){var a=new TW();A$9(a);return a;}
function A$9(a){Yt(a);}
function AQ5(a){var b;b=(AFv(a)).gm(1);b.bm=1;return b;}
function My(){var a=this;C.call(a);a.kI=null;a.g0=null;a.kw=null;a.Py=0;a.HJ=0;a.wc=0;}
function Blw(){var a=new My();ANG(a);return a;}
function Bxx(a,b,c,d){var e=new My();Ro(e,a,b,c,d);return e;}
function Bxy(a,b,c){var d=new My();Y2(d,a,b,c);return d;}
function Bxz(a,b,c){var d=new My();AD8(d,a,b,c);return d;}
function ANG(a){Ro(a,Btt.oS(B(372)),Btt.oS(B(373)),0,1);}
function Ro(a,b,c,d,e){Y2(a,Bnu(b,d),A27(AZM(c,0)),e);a.wc=1;}
function Y2(a,b,c,d){var e,f;if(c===null)e=null;else{f=Y(Fx,1);f.data[0]=c;e=ALL(f);}AD8(a,b,e,d);}
function AD8(a,b,c,d){var e,f,g;J(a);a.Py=b.r8;a.kI=b;a.HJ=d;if(c!==null&&c.j){a.g0=c;a.wc=0;}else{if(b.hU===null)G(Z(B(374)));e=b.hU.data.length;a.g0=El(e);f=0;while(f<e){g=b.tl===null?Btt.Hl(b.hU.data[f]):Btt.Sp(b.hU.data[f],b.tl.SH());a.g0.E(A27(AZM(g,0)));f=f+1|0;}a.wc=1;}a.kw=a.NE();a.JY(b);}
function A2b(a,b){var c,d,e,f,g,h,i,j;c=b.hx.data;d=c.length;e=0;while(e<d){a:{f=c[e];if(f!==null){g=f.data;h=g.length;i=0;while(true){if(i>=h)break a;j=g[i];if(j!==null)b.GX(j,a.g0.o(j.kj));i=i+1|0;}}}e=e+1|0;}if(b.iQ!==null)b.GX(b.iQ,a.g0.o(b.iQ.kj));}
function AQz(a,b,c,d,e){var f;a.kw.P();f=a.kw.Mu(c,d,e);a.kw.Rj(b);return f;}
function BhE(a,b,c,d,e){(a.kw.Ak()).gT(b,c,d,e);}
function AYE(a){return a.g0;}
function Bhn(a){return Bp$(a,a.HJ);}
function AE7(){var a=this;C.call(a);a.fz=null;a.ea=null;a.cR=null;a.dO=null;a.l4=0;}
function BnZ(){var a=new AE7();ALs(a);return a;}
function BqO(a,b){var c=new AE7();A8i(c,a,b);return c;}
function ALs(a){J(a);a.l4=1;}
function A8i(a,b,c){J(a);a.l4=1;a.fz=b;a.ea=c;}
function AW$(a,b){b.dm=a.ea;b.cZ.Ej(a.fz);b.dX=a.dO;return b;}
function AYk(a){return (BnZ()).US(a);}
function Bb4(a,b){var c;a:{a.fz=Bqf(b.fz);a.ea=b.ea;a.l4=b.l4;if(b.cR===null){a.cR=null;a.dO=null;}else{if(a.cR!==null)a.cR.P();else a.cR=Bnq(1,b.cR.ck,E(N$),E(CN));a.cR.TC(b.cR);if(!(a.dO!==null&&a.dO.data.length==a.cR.ck))a.dO=Y(CN,a.cR.ck);c=0;while(true){if(c>=a.dO.data.length)break a;if(a.dO.data[c]===null)a.dO.data[c]=BH();c=c+1|0;}}}return a;}
function GU(){var a=this;BO.call(a);a.w9=0;a.jC=0;}
function BqM(a,b){var c=new GU();L9(c,a,b);return c;}
function L9(a,b,c){Da(a);a.w9=b;a.jC=c;}
function ALw(a,b,c,d){var e,f,g,h;e=a.kx(d);if(e!==null&&(b+e.k()|0)<=d.O()){f=0;while(true){if(f>=e.k()){d.bC(a.jC,e.k());return a.l.e(b+e.k()|0,c,d);}g=e.g(f);h=b+f|0;if(g!=c.g(h)&&HV(e.g(f))!=c.g(h))break;f=f+1|0;}return (-1);}return (-1);}
function BdC(a,b){a.l=b;}
function AN8(a,b){var c;c=b.SW(a.w9);return c;}
function A3R(a){return (((H()).a(B(375))).h(a.bt)).b();}
function AXK(a,b){var c;c=!b.eJ(a.jC)?0:1;b.bC(a.jC,(-1));return c;}
function YA(){var a=this;S.call(a);a.CU=null;a.Ut=null;}
function Bm2(a,b){var c=new YA();A2a(c,a,b);return c;}
function A2a(a,b,c){a.Ut=b;a.CU=c;Bh(a);}
function APG(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cc^a.CU.e0(c):0;}
function Yz(){var a=this;S.call(a);a.GB=null;a.Bj=null;a.Ms=null;}
function Blb(a,b,c){var d=new Yz();Bb0(d,a,b,c);return d;}
function Bb0(a,b,c,d){a.Ms=b;a.GB=c;a.Bj=d;Bh(a);}
function A3p(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cc^a.GB.e0(c):0;return a.Bj.r(b)&&!d?1:0;}
function Ex(){CF.call(this);this.oD=null;}
function K4(a){Le(a);a.oD=Bs();}
function ABp(a){var b;b=RC(a);a.oD.E(b);return b;}
function AUe(a){ZA(a,a.oD);a.oD.P();}
var ZO=D(Bk);
var ACc=D(EX);
function Bmw(a,b,c,d){var e=new ACc();BaZ(e,a,b,c,d);return e;}
function BaZ(a,b,c,d,e){MW(a,b,c,d,e);}
function BeF(a,b,c,d){var e,f,g,h;e=a.gv.jB();f=a.gv.i4();g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.bz.co()|0)>d.O())break a;h=a.bz.bM(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.l.e(b,c,d);}if((b+a.bz.co()|0)>d.O()){d.eg=1;return (-1);}h=a.bz.bM(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
var EB=D(CC);
var Ne=D(0);
function ADl(){var a=this;C.call(a);a.k6=0;a.gn=null;a.ik=null;a.zv=0;a.tz=0;a.xo=0.0;a.tw=0;a.s7=0;a.jh=0;}
function Bky(){var a=new ADl();A0A(a);return a;}
function BxA(a,b){var c=new ADl();AGQ(c,a,b);return c;}
function A0A(a){AGQ(a,51,0.800000011920929);}
function AGQ(a,b,c){var d;J(a);if(c>0.0&&c<1.0){a.xo=c;d=Im(b,c);a.tw=d*c|0;a.jh=d-1|0;a.s7=Dh(N(a.jh));a.gn=Be(d);a.ik=Be(d);return;}G(Z((((H()).a(B(376))).b$(c)).b()));}
function AWc(a,b){return V(C$(Cu(N(b),Cs(2135587861, 2654435769)),a.s7));}
function Pv(a,b){var c,d,e;c=a.gn;d=a.fl(b);while(true){e=c.data[d];if(!e)return  -(d+1|0)|0;if(e==b)break;d=(d+1|0)&a.jh;}return d;}
function APj(a,b,c){var d,e;if(!b){a.zv=c;if(!a.tz){a.tz=1;a.k6=a.k6+1|0;}return;}d=Pv(a,b);if(d>=0){a.ik.data[d]=c;return;}e= -(d+1|0)|0;a.gn.data[e]=b;a.ik.data[e]=c;e=a.k6+1|0;a.k6=e;if(e>=a.tw)VK(a,a.gn.data.length<<1);}
function TN(a,b,c){var d,e,f;d=a.gn;e=a.fl(b);while(true){f=d.data;if(!f[e])break;e=(e+1|0)&a.jh;}f[e]=b;a.ik.data[e]=c;}
function ATp(a,b,c){var d;if(!b){if(a.tz)c=a.zv;return c;}d=Pv(a,b);if(d>=0)c=a.ik.data[d];return c;}
function VK(a,b){var c,d,e,f,g;a:{c=a.gn.data.length;a.tw=b*a.xo|0;a.jh=b-1|0;a.s7=Dh(N(a.jh));d=a.gn;e=a.ik;a.gn=Be(b);a.ik=Be(b);if(a.k6>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g)TN(a,g,e.data[f]);f=f+1|0;}}}}
var AAE=D(CF);
var ABC=D();
function IF(){var a=this;Ba.call(a);a.ix=null;a.Fy=0;a.A1=0;}
var BxB=null;var BxC=null;function SC(){SC=L(IF);Ba4();}
function BpF(a,b){var c=new IF();Tx(c,a,b);return c;}
function Tx(a,b,c){SC();BZ(a);a.ix=AXa();a.Fy=b;a.A1=c;}
function Bbn(a,b,c,d,e){var f,g,h,i,j,k;if(d.cE===null){f=b.bp;g=Ce(b,c);SC();f.BM(g,BxB,0,BxB.data.length);}else{h=d.dN;SC();h.vE(BxC);Ct();if(CM(e,BxD))a.ix.K9((BN(e,BxD)).d_);a:{Lr();if(CM(e,BxE)){i=BxE;j=(BN(e,i)).hF;k=a.Fy;while(true){if(k>=j.j)break a;a.ix.UP((j.o(k)).bs,(j.o(k)).fs);k=k+1|0;}}}b:{BaE();if(CM(e,BxF)){j=(BN(e,BxF)).F6;k=a.A1;while(true){if(k>=j.j)break b;a.ix.PQ((j.o(k)).bs,(j.o(k)).eR,BxC,(j.o(k)).dM);k=k+1|0;}}}a.ix.QW();b.bp.BM(Ce(b,c),a.ix.cn,0,a.ix.cn.data.length);}}
function Ba4(){BxB=BmI([1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0]);BxC=Q();}
function Qv(){var a=this;C.call(a);a.hT=null;a.D_=0;a.tQ=null;a.pL=null;a.Br=0;a.Je=0.0;a.Jd=0.0;a.wr=null;a.Jz=0.0;a.dK=null;a.dT=null;a.cT=null;a.t6=null;}
var BxG=null;function BoZ(){BoZ=L(Qv);AT3();}
function Bp$(a,b){var c=new Qv();AI$(c,a,b);return c;}
function AI$(a,b,c){var d,e,f;BoZ();J(a);a.tQ=Bs();a.pL=Bs();a.wr=CD(1.0,1.0,1.0,1.0);a.hT=b;a.D_=c;d=b.g0.j;if(!d)G(Z(B(377)));a:{a.dK=Y($rt_arraycls($rt_floatcls()),d);a.dT=Be(d);if(d>1){a.cT=Y(Id,d);e=0;f=a.cT.data.length;while(true){if(e>=f)break a;a.cT.data[e]=Iv();e=e+1|0;}}}a.t6=Be(d);}
function Bdc(a){return a.wr;}
function AO_(a,b){var c,d,e,f;c=a.hT.Sy();d=0;e=a.dK.data.length;while(d<e){if(a.dT.data[d]>0){f=a.dK.data[d];b.JL((c.o(d)).CV(),f,0,a.dT.data[d]);}d=d+1|0;}}
function Bch(a){var b,c;a.Je=0.0;a.Jd=0.0;Wp(a.pL,1);a.pL.P();a.tQ.P();b=0;c=a.dT.data.length;while(b<c){if(a.cT!==null)a.cT.data[b].P();a.dT.data[b]=0;b=b+1|0;}}
function AA7(a,b){var c,d,e,f,g,h,i,j,k,l;a:{if(a.dK.data.length==1){c=0;d=0;e=b.cv.j;while(d<e){c=c+(b.cv.o(d)).bq.j|0;d=d+1|0;}Qo(a,0,c);}else{f=a.t6;g=f.data;d=0;e=g.length;while(d<e){g[d]=0;d=d+1|0;}d=0;h=b.cv.j;while(d<h){i=(b.cv.o(d)).bq;j=0;k=i.j;while(j<k){l=(i.o(j)).kj;g[l]=g[l]+1|0;j=j+1|0;}d=d+1|0;}d=0;while(true){if(d>=e)break a;Qo(a,d,g[d]);d=d+1|0;}}}}
function Qo(a,b,c){var d,e,f;if(a.cT!==null&&c>a.cT.data[b].cx.data.length)a.cT.data[b].Tu(c-a.cT.data[b].bY|0);d=a.dT.data[b]+(c*20|0)|0;e=a.dK.data[b];if(e===null)a.dK.data[b]=B5(d);else if(e.data.length<d){f=B5(d);Bc(e,0,f,0,a.dT.data[b]);a.dK.data[b]=f;}}
function V8(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=a.hT.g0.j;if(a.dK.data.length<e){f=Y($rt_arraycls($rt_floatcls()),e);Bc(a.dK,0,f,0,a.dK.data.length);a.dK=f;g=Be(e);Bc(a.dT,0,g,0,a.dT.data.length);a.dT=g;h=Y(Id,e);i=0;if(a.cT!==null){i=a.cT.data.length;Bc(a.cT,0,h,0,a.cT.data.length);}while(i<e){h.data[i]=Iv();i=i+1|0;}a.cT=h;a.t6=Be(e);}a.tQ.E(b);AA7(a,b);i=0;j=b.cv.j;while(i<j){k=b.cv.o(i);l=k.bq;m=k.bu;n=k.kq.hw();o=c+k.du;p=d+k.i6;q=0;r=l.j;while(q<r){s=l.o(q);o=o+m.oO(q);XR(a,s,o,p,n);q=q+1|0;}i
=i+1|0;}BC();a.Jz=Bvv;}
function XR(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;f=a.hT.kI.e4;g=a.hT.kI.BN;h=c+b.dD*f;i=d+b.jE*g;j=b.cD*f;k=b.cV*g;l=b.wW;m=b.C$;n=b.qV;o=b.un;if(a.D_){h=DH(h);i=DH(i);j=DH(j);k=DH(k);}p=h+j;q=i+k;r=b.kj;s=a.dT.data[r];t=a.dT.data;t[r]=t[r]+20|0;if(a.cT!==null){u=a.cT.data[r];v=a.Br;a.Br=v+1|0;u.ji(v);}w=a.dK.data[r];t=w.data;x=s+1|0;t[s]=h;v=x+1|0;t[x]=i;x=v+1|0;t[v]=e;v=x+1|0;t[x]=l;y=v+1|0;t[v]=n;x=y+1|0;t[y]=h;v=x+1|0;t[x]=q;x=v+1|0;t[v]=e;v=x+1|0;t[x]=l;x=v+1|0;t[v]=o;v=x+1|0;t[x]=p;x
=v+1|0;t[v]=q;v=x+1|0;t[x]=e;x=v+1|0;t[v]=m;v=x+1|0;t[x]=o;x=v+1|0;t[v]=p;y=x+1|0;t[x]=i;v=y+1|0;t[y]=e;x=v+1|0;t[v]=m;t[x]=n;}
function A2j(a,b,c,d){return a.K0(b,c,d,0,b.k(),0.0,8,0,null);}
function BiD(a,b,c,d,e,f,g,h,i,j){var k;k=XK(E(FE));a.pL.E(k);k.qt(a.hT,b,e,f,a.wr,g,h,i,j);a.Kj(k,c,d);return k;}
function ANW(a,b,c,d){V8(a,b,c,d+a.hT.kI.mB);}
function AT3(){BxG=CD(1.0,1.0,1.0,1.0);}
var AEi=D();
function ABH(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.Db.data;f=b.EB;b.EB=f+1|0;g=Bcr(e[f]);h=(g%2|0)!=1?0:1;c=c+Cp(d,g/2|0)|0;d=d*46|0;if(!h)break;}return c;}
function RY(b){var c,d;c=ABH(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function Bcr(b){if(b<34)return b-32|0;if(b>=92)return (b-32|0)-2|0;return (b-32|0)-1|0;}
function Rq(){BX.call(this);this.mK=null;}
function BqR(a){var b=new Rq();BfZ(b,a);return b;}
function BfZ(a,b){var c,d;Dm(a);c=H();d=0;while(d<b.k()){c.ba(DV(D_(b.g(d))));d=d+1|0;}a.mK=c.b();a.bT=c.k();}
function AUd(a,b,c){var d;d=0;while(true){if(d>=a.mK.k())return a.mK.k();if(a.mK.g(d)!=DV(D_(c.g(b+d|0))))break;d=d+1|0;}return (-1);}
function ARK(a){return (((H()).a(B(378))).a(a.mK)).b();}
function YX(){S.call(this);this.Ng=null;}
function BqN(a){var b=new YX();A2B(b,a);return b;}
function A2B(a,b){a.Ng=b;Bh(a);}
function ASq(a,b){return Vw(b);}
function I1(){Eq.call(this);this.fs=null;}
function AQ_(){var a=new I1();A$K(a);return a;}
function A$K(a){Jt(a);a.fs=Q();}
function ALQ(a,b){return a.S1(b.bs,b.fs);}
function ANC(a,b,c){if(b!==null)a.bs.e5(b);if(c!==null)(a.fs.M(c)).bV();return a;}
function AX2(a,b,c,d,e,f,g){a.bs.gT(b,c,d,1.0);(a.fs.L(e,f,g)).bV();return a;}
function ALA(a,b){return b instanceof I1&&a.Gx(b)?1:0;}
function Bb9(a,b){var c;a:{b:{if(b!==null){if(b===a)break b;if(a.bs.C(b.bs)&&a.fs.C(b.fs))break b;}c=0;break a;}c=1;}return c;}
var AF6=D(C_);
var NI=D();
var BxH=null;function AJw(){AJw=L(NI);AK_();}
function AFm(b,c,d,e){var f;AJw();a:{b:{f=BxH;VE();if(f===BxI){if(Btr.bk()!=Btr.yz())break b;f=Btr;if(f.bj()!=Btr.GE())break b;}Btu.pq(b,c,d,e);break a;}Btu.pq(Og(b),Oj(c),Og(d),Oj(e));}}
function Og(b){AJw();return Cp(b,Btr.yz())/Btr.bk()|0;}
function Oj(b){AJw();return Cp(b,Btr.GE())/Btr.bj()|0;}
function AK_(){VE();BxH=BxI;}
function Ud(){var a=this;BO.call(a);a.oW=null;a.qj=null;}
function Ns(a,b){var c=new Ud();A1p(c,a,b);return c;}
function A1p(a,b,c){Da(a);a.oW=b;a.qj=c;}
function AL0(a,b,c,d){var e;e=a.oW.e(b,c,d);if(e<0)e=a.qj.e(b,c,d);if(e>=0)return e;return (-1);}
function Bcu(a,b){a.l=b;a.qj.V(b);a.oW.V(b);}
function Bde(a){return (((((H()).a(B(379))).c0(a.oW)).a(B(380))).c0(a.qj)).b();}
function AM9(a,b){return 1;}
function AMD(a,b){return 1;}
var Kg=D();
function BxJ(){var a=new Kg();ZB(a);return a;}
function ZB(a){J(a);}
var Ol=D(0);
function FT(){var a=this;C.call(a);a.h3=null;a.gc=null;}
function BxK(a,b){var c=new FT();Od(c,a,b);return c;}
function Od(a,b,c){J(a);a.h3=b;a.gc=c;}
function O6(){var a=this;FT.call(a);a.mW=null;a.z8=0;}
function Bpq(a,b){var c=new O6();AWW(c,a,b);return c;}
function AWW(a,b,c){Od(a,b,c);a.z8=b.bl();}
function AMl(a){return a.h3.bl();}
function AZY(a,b,c){return a.z8==b.bl()&&a.h3.C(b)?1:0;}
var AI8=D(Cj);
var FZ=D(CR);
function Bos(){var a=new FZ();Bf0(a);return a;}
function Bf0(a){Fh(a,0);}
function A0i(a,b,c,d){if(d.Eh()!=1&&b!=d.O())return (-1);d.Pa();d.wa(0,b);return b;}
function A5U(a){return B(381);}
var JM=D(ET);
var AAo=D(JM);
function AGm(){var a=this;C.call(a);a.ti=null;a.i$=null;a.kM=null;a.eL=null;a.hr=null;a.mk=null;}
function Bp_(a){var b=new AGm();A_G(b,a);return b;}
function A_G(a,b){J(a);a.ti=Ef();a.i$=Ef();a.kM=Ef();a.eL=Ef();a.hr=Ef();a.mk=b;}
function A88(a,b){(Dt()).FZ(1,(((H()).a(a.mk)).a(b)).b(),BjB(a,b));}
function A$q(a,b,c,d){var e,f;e=Dt();f=(((H()).a(a.mk)).a(c)).b();JD();e.xl(b,f,Bu8,null,BlG(a,d,c));}
function A35(a,b,c,d,e,f){(Dt()).xl(b,(((H()).a(a.mk)).a(c)).b(),d,e,BmE(a,f,d,c));}
function A3_(a,b,c,d){(Dt()).ma(b,(((H()).a(a.mk)).a(c)).b(),d);}
function A7a(a,b,c,d){a:{Bn8();switch(Bu_.data[Bi(b)]){case 1:a.eL.A(c,d);break a;case 2:break;case 3:a.hr.A(c,d);break a;case 4:a.kM.A(c,d);break a;case 5:a.ti.A(c,null);break a;default:break a;}a.i$.A(c,d);}}
function AUM(a,b){var c,$$je;if(a.eL.c_(b)){a:{try{c=ACR((a.eL.Y(b)).zu(B(338)));}catch($$e){$$je=T($$e);if($$je instanceof H1){break a;}else{throw $$e;}}return c;}return null;}if(a.i$.c_(b))return ACR(Cy(1));if(a.hr.c_(b))return S6(a.hr.Y(b));if(!a.kM.c_(b))return null;return ACR(Cy(1));}
function AQZ(a,b){var c,d;a:{if(!a.eL.c_(b)&&!a.i$.c_(b)&&!a.hr.c_(b)&&!a.kM.c_(b)){c=a.ti;if(!c.c_(b)){d=0;break a;}}d=1;}return d;}
function Bd5(a,b){return a.eL.c_(b);}
function A5z(a,b){var c,$$je;if(a.eL.c_(b)){a:{try{c=N(((a.eL.Y(b)).zu(B(338))).data.length);}catch($$e){$$je=T($$e);if($$je instanceof H1){break a;}else{throw $$e;}}return c;}return N(((a.eL.Y(b)).Vl()).data.length);}if(a.i$.c_(b))return N(1);if(a.hr.c_(b))return N(QH(a.hr.Y(b)));if(!a.kM.c_(b))return X;return N(1);}
var HM=D(H5);
var BxL=null;function AOW(){AOW=L(HM);Bit();}
function BqS(a){var b=new HM();AAc(b,a);return b;}
function BxM(){var a=new HM();Jb(a);return a;}
function AAc(a,b){AOW();Lf(a);}
function Jb(a){AOW();Lf(a);}
function Bit(){BxL=BqS(0);}
var Ym=D(BX);
function GN(a){var b=new Ym();BaN(b,a);return b;}
function BaN(a,b){AAT(a,b);a.bT=0;}
function BeS(a,b,c){return 0;}
function A8t(a,b,c,d){var e,f,g,h,i;e=d.O();f=d.dW();while(true){g=Cl(b,e);if(g>0)return (-1);if(g<0){h=c.g(b);if(BU(h)&&b>f){i=c.g(b-1|0);if(Cb(i)){b=b+1|0;continue;}}}if(a.l.e(b,c,d)>=0)break;b=b+1|0;}return b;}
function A6q(a,b,c,d,e){var f,g,h,i;f=e.O();g=e.dW();while(true){if(c<b)return (-1);if(c<f){h=d.g(c);if(BU(h)&&c>g){i=d.g(c-1|0);if(Cb(i)){c=c+(-1)|0;continue;}}}if(a.l.e(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ARv(a){return B(382);}
function A3T(a,b){return 0;}
var I4=D(EB);
var ACY=D(I4);
function LT(){BV.call(this);this.KF=0;}
var BxN=X;function AN3(){AN3=L(LT);BfW();}
function BfW(){BxN=B2(B(383));}
var KM=D(0);
function AAl(){var a=this;C.call(a);a.dJ=null;a.gQ=null;a.ts=0;a.bZ=0;}
function YJ(a,b){var c=new AAl();BgC(c,a,b);return c;}
function BxO(a,b,c){var d=new AAl();Zq(d,a,b,c);return d;}
function BgC(a,b,c){Zq(a,b,c,0);}
function Zq(a,b,c,d){J(a);if(b===null)G(Kr());a.dJ=b;a.gQ=c;a.ts=d;a.bZ=0;}
function Bi9(a){var b,c;if(a.gQ===null)G(Kr());a:{b=a.dJ.k();if(a.bZ<b){if(a.ts)return 1;c=a.bZ;while(true){if(c>=b)break a;if(a.gQ.eX(a.dJ.g(c),0)==(-1))return 1;c=c+1|0;}}}return 0;}
function AMm(a){var b,c,d,e,f;if(a.gQ===null)G(Kr());b=a.bZ;c=a.dJ.k();if(b<c){if(a.ts){if(a.gQ.eX(a.dJ.g(a.bZ),0)>=0){d=a.dJ;e=a.bZ;a.bZ=e+1|0;return AFe(d.g(e));}a.bZ=a.bZ+1|0;while(a.bZ<c){if(a.gQ.eX(a.dJ.g(a.bZ),0)>=0)return a.dJ.cm(b,a.bZ);a.bZ=a.bZ+1|0;}return a.dJ.ex(b);}while(true){f=Cl(b,c);if(f>=0)break;if(a.gQ.eX(a.dJ.g(b),0)<0)break;b=b+1|0;}a.bZ=b;if(f<0){a.bZ=a.bZ+1|0;while(a.bZ<c){if(a.gQ.eX(a.dJ.g(a.bZ),0)>=0)return a.dJ.cm(b,a.bZ);a.bZ=a.bZ+1|0;}return a.dJ.ex(b);}}G(Bkc());}
var HI=D(BF);
var BxP=null;function AT_(){AT_=L(HI);AP$();}
function Bor(a){var b=new HI();V$(b,a);return b;}
function BxQ(){var a=new HI();Jh(a);return a;}
function V$(a,b){AT_();BS(a);}
function Jh(a){AT_();BS(a);}
function AP$(){BxP=Bor(0);}
function Fx(){var a=this;C.call(a);a.ki=null;a.Bp=0.0;a.Bs=0.0;a.UR=0.0;a.UO=0.0;a.oM=0;a.nz=0;}
function A27(a){var b=new Fx();A4l(b,a);return b;}
function A4l(a,b){J(a);if(b===null)G(Z(B(384)));a.ki=b;a.QV(0,0,b.bk(),b.bj());}
function Be5(a,b,c,d,e){var f,g;f=1.0/a.ki.bk();g=1.0/a.ki.bj();a.Rg(b*f,c*g,(b+d|0)*f,(c+e|0)*g);a.oM=AAx(d);a.nz=AAx(e);}
function AML(a,b,c,d,e){var f,g,h,i,j,k,l;f=a.ki.bk();g=a.ki.bj();h=C1(d-b);i=f;a.oM=DH(h*i);h=C1(e-c);j=g;a.nz=DH(h*j);if(a.oM==1&&a.nz==1){k=0.25/i;b=b+k;d=d-k;l=0.25/j;c=c+l;e=e-l;}a.Bp=b;a.Bs=c;a.UR=d;a.UO=e;}
function A1g(a){return a.ki;}
function AN_(a){return a.oM;}
function AKQ(a){return a.nz;}
function Mu(){var a=this;Fx.call(a);a.RR=0.0;a.RP=0.0;a.S$=0;a.Qh=0;}
var UL=D(FP);
function Bjq(a,b,c,d,e,f){var g=new UL();A3E(g,a,b,c,d,e,f);return g;}
function A3E(a,b,c,d,e,f,g){NU(a,b,c,d,e,f,g);}
function A20(a,b){var c,d,e,f;c=a.cF.D.data;d=a.cr;e=b*4|0;f=c[d+e|0]&255|(a.cF.D.data[(a.cr+e|0)+1|0]&255)<<8|(a.cF.D.data[(a.cr+e|0)+2|0]&255)<<16|(a.cF.D.data[(a.cr+e|0)+3|0]&255)<<24;return $rt_intBitsToFloat(f);}
function A_z(a,b,c){var d,e,f,g;d=$rt_floatToIntBits(c);e=a.cF.D.data;f=a.cr;g=b*4|0;e[f+g|0]=d<<24>>24;a.cF.D.data[(a.cr+g|0)+1|0]=d>>8<<24>>24;a.cF.D.data[(a.cr+g|0)+2|0]=d>>16<<24>>24;a.cF.D.data[(a.cr+g|0)+3|0]=d>>24<<24>>24;}
var ADY=D(GT);
function BxR(a){var b=new ADY();ANH(b,a);return b;}
function ANH(a,b){MA(a,b);}
var E0=D(Bt);
function Dw(){var a=new E0();S5(a);return a;}
function Bm(a){var b=new E0();Po(b,a);return b;}
function S5(a){CQ(a);}
function Po(a,b){Fy(a,b);}
var AIJ=D(E0);
function ARD(a){var b=new AIJ();AL8(b,a);return b;}
function AL8(a,b){Po(a,P$(b));}
function Su(){var a=this;FJ.call(a);a.vV=null;a.wk=null;a.Hy=null;a.dg=null;a.DM=null;a.eC=null;a.qF=0;a.wg=0;}
function BxS(a,b){var c=new Su();TR(c,a,b);return c;}
function BnL(a){var b=new Su();AKy(b,a);return b;}
function BxT(a,b){var c=new Su();AHa(c,a,b);return c;}
function TR(a,b,c){var d,e;d=c.mf();DJ();e=Br_;e=QN(d,e);d=Br_;e=Nd(e,d);AHa(a,b,e);}
function AKy(a,b){IY();TR(a,b,Bvp);}
function AHa(a,b,c){Ng(a);a.Hy=Cy(8192);a.dg=IV(a.Hy);a.DM=B$(1024);a.eC=M_(a.DM);a.vV=b;a.wk=c;a.eC.pw(BG(a.eC));a.dg.gh(BG(a.dg));}
function BfK(a){a.vV.f3();}
function ART(a,b,c,d){var e,f;if(a.wg&&!Cq(a.eC))return (-1);e=0;a:{while(d>0){f=Bw(d,Bf(a.eC));a.eC.sb(b,c+e|0,f);d=d-f|0;e=e+f|0;if(!Cq(a.eC)&&!AI_(a))break a;}}return e;}
function AI_(a){if(a.wg)return 0;a.eC.MD();a:{while(true){if(!Cq(a.dg)&&!AHh(a))break a;if(!(KH(a.wk,a.dg,a.eC,a.qF)).ip())continue;else break;}}if(!Cq(a.dg)&&a.qF&&(MP(a.wk,a.eC)).j8())a.wg=1;M9(a.eC);return 1;}
function AHh(a){var b;if(a.qF)return 0;a.dg.U$();a:{while(true){if(!Cq(a.dg))break a;b=a.vV.sm(I_(a.dg),Ck(a.dg),Bf(a.dg));if(b==(-1)){a.qF=1;break a;}a.dg.gh(Ck(a.dg)+b|0);if(!b)break;}}Lk(a.dg);return 1;}
var ABz=D();
var AEC=D();
function A07(b,c,d){if(b===null)return null;return BoC(b,AXs(b),c,d);}
var HH=D(0);
function AA4(){var a=this;C.call(a);a.qI=0;a.G3=0;a.El=0;a.Fh=0;a.me=null;}
function Bnv(a){var b=new AA4();AWH(b,a);return b;}
function AWH(a,b){a.me=b;J(a);a.G3=a.me.g9;a.El=a.me.dr();a.Fh=(-1);}
function Bbl(a){return a.qI>=a.El?0:1;}
function Bf$(a){var b,c;Tm(a);a.Fh=a.qI;b=a.me;c=a.qI;a.qI=c+1|0;return b.o(c);}
function Tm(a){if(a.G3>=a.me.g9)return;G(BjY());}
var Lj=D(CH);
var X7=D(Lj);
var Ya=D(Bu);
var X8=D(C0);
var NT=D(0);
function IZ(){var a=this;C.call(a);a.CN=0;a.eU=null;a.F0=null;a.rn=null;a.lz=null;a.j1=null;a.CL=null;a.kY=null;a.jX=null;a.ml=null;a.gZ=null;a.mQ=null;a.t5=null;a.GK=null;a.zb=null;a.zD=null;a.jv=null;a.oP=null;a.Hq=null;a.rg=X;a.ll=X;a.pO=0;a.kB=0;a.MW=null;a.l9=null;a.r0=0;a.qk=null;}
var BxU=null;var BxV=null;function ASu(){ASu=L(IZ);A7p();}
function Bp2(){var a=new IZ();AAF(a);return a;}
function AAF(a){ASu();J(a);a.lz=Bs();a.j1=Bs();a.pO=0;a.kB=0;a.MW=BH();a.r0=500;a.qk=Q();}
function A8b(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;ADf();a.CN=Bullet.MyClassHelper.prototype.getBTVersion();a.t5=BlA();a.GK=BkP(a.t5);a.zb=BlF();a.zD=BlX();a.gZ=BjR(a.GK,a.zb,a.zD,a.t5);b=CB(0.0,(-10.0),0.0);a.gZ.J7(b);a.mQ=BlP();a.gZ.LB(a.mQ);a.mQ.Fe(32777);a.jv=Bom(BxW,BxX);a.eU=Bm3();a.F0=Bmj(a.eU);a.rn=BjO();a.kY=Bpu();a.ml=Bnm();c=a.ml;d=new Dj;Ct();P_(d,BxD,0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);E$(c,d);e=(AQ_()).zc(1.0,1.0,1.0,(-1.0),(-1.0),(-0.4000000059604645));a.ml.II(e);a.jX
=Bnd();a.eU.cy.p=43.0;a.eU.cy.n=2.0;a.eU.QA(0.0,0.0,0.0);f=Bmn();g=1.0;h=1.0;i=1.0;j=1.0;k=BoG(Btt.Hl(B(385)));Tf();k.S7(BxY,BxY);l=new Hf;m=I(BV,[AF2(k),QI(4.0)]);Qb(l,m);a.Hq=f.Ea(1.0,1.0,1.0,l,N(25));n=60.0;o=0.30000001192092896;p=60.0;q=f.Ea(n,o,p,Bn2(I(BV,[MT(g,h,i,j),AFq(g,h,i,j),QI(16.0)])),N(9));a.CL=a.xk(B(386),0,0.0,0.0,(-2.0),0.0,0.0,0.0,0.0,q,n,o,p,0.0,0.0,1.0);a.Hp();a.oP=Blw();a.oP.kE(1.0,0.0,0.0,1.0);a.ll=ER();a.l9=Bkx(a.eU);a.l9.pG=0;a.l9.rR=0;a.l9.v0=0;Btd.MT(BpV(I(Gr,[a,a.l9])));}
function BfA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r,s,t,u,v,w;r=Bqe(k);s=MT(o,p,q,1.0);E$(r.j3.o(0),s);r.eQ.O0(e,f,g);t=r.eQ;JB();t.wH(BxZ,h);r.eQ.wH(Bx0,i);r.eQ.wH(BxX,j);u=Bj8(r.eQ);v=BpY(a.qk.L(l/2.0,m/2.0,n/2.0));v.Rq(d,a.qk.CK());w=BqB(d,u,v,a.qk);w.Lu(N(a.j1.j));if(c)a.j1.E(w);w.MY(0.699999988079071);a.gZ.K7(w);return r;}
function A8M(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=0;while(b<a.j1.j){c=a.j1.o(b);a.gZ.Jo(c);c.iU();b=b+1|0;}a.j1.P();a.lz.P();d=0;b=0;while(b<a.r0){e=I8((-5.0),5.0);f=I8(19.0,24.0);g=I8((-5.0),5.0);h=Ks(0,360);i=Ks(0,360);j=Ks(0,360);k=1.0;l=1.0;m=1.0;n=a.xk((((H()).a(B(387))).h(d)).b(),1,0.4000000059604645,e,f,g,h,i,j,a.Hq,1.0,1.0,1.0,k,l,m);d=d+1|0;a.lz.E(n);b=b+1|0;}}
function AKa(a){var b,c,d,e,f,g,h;a.eU.gj();Btu.xs(0.8999999761581421,0.8999999761581421,0.8999999761581421,1.0);Btu.Gw(16640);if(!a.kB){a.rg=ER();if(IR(EI(a.rg,a.ll),N(8000))){a.Hp();a.ll=ER();}a.gZ.Lm(Btr.Ha());}a.kY.r6(a.eU);b=0;while(b<a.lz.j){c=a.lz.o(b);a.kY.ER(c,a.ml);b=b+1|0;}a.kY.ER(a.CL,a.ml);a.kY.N();if(a.pO){a.mQ.r6(a.eU);a.gZ.IX();a.mQ.N();}a.jX.hm();d=a.oP;e=a.jX;f=((((((((H()).a(B(388))).h(Btr.Q2())).a(B(389))).h(a.r0)).a(B(390))).h(a.CN)).a(B(391))).b();g=Btr;h=g.bj()-14|0;d.zL(e,f,30.0,h);a.oP.zL(a.jX,
B(392),20.0,30.0);a.jX.N();}
function BfL(a,b,c){var d;a.F0.x4(b,c,0);a.rn.x4(b,c,1);d=a.rn.RG();d.gj();a.jX.v5(d.ej);}
function AV2(a,b){if(b==62){a.kB=a.kB?0:1;if(!a.kB)a.ll=CS(ER(),EI(a.ll,a.rg));}else if(b==66){if(!Btr.w8())Btr.PH(Btr.Hx());else Btr.x0(0,0);}else if(b==32)a.pO=a.pO?0:1;return 0;}
function Bbx(a,b){return 0;}
function A5r(a,b){return 0;}
function Bfe(a,b,c,d,e){var f,g,h;if(!e){f=a.eU.Pb(b,c);g=1.0;ASu();BxU.M(f.mi.di(g));((BxV.M(f.m1)).di(200.0)).eA(BxU);a.jv.Lq(null);a.jv.SR(1.0);a.gZ.Pn(BxU,BxV,a.jv);if(a.jv.NO()){h=a.jv.IK();(Ep()).fI((((H()).a(B(393))).uY(h.Qa())).b());}}return 0;}
function A$v(a,b,c,d,e){return 0;}
function AXj(a,b,c,d){return 0;}
function A57(a,b,c){return 0;}
function AUv(a,b,c){return 0;}
function A7p(){BxU=Q();BxV=Q();}
var Yb=D(Bu);
var ACL=D();
var ACg=D(Ba);
function Bqm(){var a=new ACg();AQT(a);return a;}
function AQT(a){BZ(a);}
function A1s(a,b,c,d,e){var f,g,h,i;f=b.c9.eh;Cf();g=Bx1;h=(BN(e,g)).ee;i=f.gV(h);Eu(b,c,i);}
var ACd=D(Ba);
function Bpr(){var a=new ACd();Bge(a);return a;}
function Bge(a){BZ(a);}
function A6L(a,b,c,d,e){var f;Cf();f=BN(e,Bx1);Er(b,c,f.e3,f.e2,f.fq,f.fr);}
var Pl=D();
var Bx2=null;function Bx3(){Bx3=L(Pl);A_9();}
function A_9(){Bx2=Be((AAq()).data.length);Bx2.data[Bi(Bx4)]=1;Bx2.data[Bi(Bx5)]=2;}
var ACl=D(Ba);
function Bln(){var a=new ACl();ASF(a);return a;}
function ASF(a){BZ(a);}
function Bh4(a,b,c,d,e){var f;Cf();f=BN(e,Bx6);Er(b,c,f.e3,f.e2,f.fq,f.fr);}
var ACh=D(Ba);
function BlK(){var a=new ACh();A3q(a);return a;}
function A3q(a){BZ(a);}
function AVS(a,b,c,d,e){var f,g,h,i;f=b.c9.eh;Cf();g=Bx7;h=(BN(e,g)).ee;i=f.gV(h);Eu(b,c,i);}
var ACf=D(Ba);
function BkT(){var a=new ACf();Bfa(a);return a;}
function Bfa(a){BZ(a);}
function A_T(a,b,c,d,e){Ct();Gx(b,c,(BN(e,Bx8)).d_);}
var ACk=D(Ba);
function Blq(){var a=new ACk();A5G(a);return a;}
function A5G(a){BZ(a);}
function AXF(a,b,c,d,e){var f,g,h,i;f=b.c9.eh;Cf();g=Bx6;h=(BN(e,g)).ee;i=f.gV(h);Eu(b,c,i);}
var GG=D(CC);
var Bx9=null;var Bx$=null;function Bx_(){Bx_=L(GG);A6k();}
function A6k(){Bx9=BB();Bx$=BB();}
var AHG=D(GG);
function Lm(){var a=this;C.call(a);a.Qk=null;a.Cd=0.0;a.Kz=0.0;a.h4=null;a.jU=null;a.oH=null;a.eP=0;}
function ZS(a,b,c,d){J(a);a.h4=B(394);DJ();a.jU=Br$;a.oH=Br$;if(c<=0.0)G(Z((((H()).a(B(395))).b$(c)).b()));if(d>0.0){a.Qk=b;a.Cd=c;a.Kz=d;return;}G(Z((((H()).a(B(396))).b$(d)).b()));}
function QN(a,b){if(b!==null){a.jU=b;a.ws(b);return a;}G(Z(B(397)));}
function Bgu(a,b){}
function Nd(a,b){if(b!==null){a.oH=b;a.rI(b);return a;}G(Z(B(397)));}
function A9R(a,b){}
function KH(a,b,c,d){var e,f,g,$$je;if(!(a.eP==2&&!d)&&a.eP!=3){a.eP=d?2:1;while(true){try{e=a.H_(b,c);}catch($$e){$$je=T($$e);if($$je instanceof Bt){f=$$je;G(A7e(f));}else{throw $$e;}}if(e.ip())return e;if(e.j8()){if(d&&Cq(b)){g=a.jU;DJ();if(g===Br$)return B8(Bf(b));if(Bf(c)<=a.h4.k())return Bsb;b.gh(Ck(b)+Bf(b)|0);if(a.jU===Br_)KE(c,a.h4);}return e;}if(e.AY()){g=a.jU;DJ();if(g===Br$)return e;if(a.jU===Br_){if(Bf(c)<a.h4.k())return Bsb;KE(c,a.h4);}b.gh(Ck(b)+e.k()|0);}else if(e.u5()){g=a.oH;DJ();if(g===Br$)break;if
(a.oH===Br_){if(Bf(c)<a.h4.k())return Bsb;KE(c,a.h4);}b.gh(Ck(b)+e.k()|0);}}return e;}G(If());}
function MP(a,b){if(a.eP!=3&&a.eP!=2)G(If());a.eP=3;return a.Jw(b);}
function AI4(a){a.eP=0;a.v4();return a;}
function AB8(a,b){var c,d,e;if(a.eP&&a.eP!=3)G(If());if(!Bf(b))return ZD(0);if(a.eP)AI4(a);c=ZD(Bj(8,Bf(b)*a.Cd|0));while(true){d=KH(a,b,c,0);if(d.j8())break;if(d.ip())c=PT(a,c);if(!d.m8())continue;d.os();}e=KH(a,b,c,1);if(e.m8())e.os();while(true){e=MP(a,c);if(e.j8())break;c=PT(a,c);}M9(c);return c;}
function PT(a,b){var c,d,e;c=Qf(b);d=c.data;d=LO(c,Bj(8,d.length*2|0));e=M_(d);e.pw(Ck(b));return e;}
function AU8(a,b){Bq();return Bsc;}
function A7W(a){}
function Dz(){var a=this;Lm.call(a);a.C8=null;a.FH=null;}
function HT(a,b,c,d){ZS(a,b,c,d);a.C8=Cy(512);a.FH=B$(512);}
function AZT(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.C8;e=0;f=0;g=a.FH;a:{while(true){if((e+32|0)>f&&Cq(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Bw(Bf(b)+j|0,i.length);b.BA(d,j,f-j|0);e=0;}if(!Cq(c)){if(!Cq(b)&&e>=f){Bq();k=Bsc;}else{Bq();k=Bsb;}break a;}i=g.data;l=0;m=Bw(Bf(c),i.length);n=BlR(b,c);k=a.nP(d,e,f,g,l,m,n);e=n.BL;if(k===null&&l==n.rl){Bq();k=Bsc;}j=n.rl;c.Uu(g,0,j);if(k!==null)break;}}b.gh(Ck(b)-(f-e|0)|0);return k;}
var Ws=D(Dz);
function Bl0(a){var b=new Ws();A_u(b,a);return b;}
function A_u(a,b){HT(a,b,0.3333333432674408,0.5);}
function Bhy(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(h.d2(2))break a;Bq();i=Bsc;break a;}n=k+1|0;o=j[k];if(!Fv(a,o)){c=n+(-2)|0;i=B8(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|o&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(h.d2(3))break a;Bq();i=Bsc;break a;}n=k+1|0;o=j[k];k=n+1|0;p=j[n];if(!Fv(a,o))break b;if(!Fv(a,p))break b;q
=((l&15)<<12|(o&63)<<6|p&63)&65535;if(Ln(q)){c=k+(-3)|0;i=B8(3);break a;}j=e.data;m=f+1|0;j[f]=q;}else{if((l&248)!=240){c=k+(-1)|0;i=B8(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(h.d2(4))break a;Bq();i=Bsc;break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.eu(2))break a;Bq();i=Bsb;break a;}n=k+1|0;o=j[k];m=n+1|0;p=j[n];k=m+1|0;r=j[m];if(!Fv(a,o))break c;if(!Fv(a,p))break c;if(!Fv(a,r))break c;j=e.data;s=(l&7)<<18|(o&63)<<12|(p&63)<<6|r&63;n=f+1|0;j[f]=GF(s);m=n+1|0;j[n]=Gl(s);}c=k;f=m;}break a;}c=k+(-3)|0;i=B8(1);break a;}c
=k+(-3)|0;i=B8(1);}h.eB(c);h.d6(f);return i;}
function Fv(a,b){return (b&192)!=128?0:1;}
var JR=D();
function AHM(){var a=this;C.call(a);a.Es=null;a.fh=null;}
function BpH(a,b){var c=new AHM();AKV(c,a,b);return c;}
function AKV(a,b,c){J(a);a.fh=c;a.Es=b;}
function ABy(a){return a.Es;}
function QH(a){return a.fh.length;}
function UV(a,b){return a.fh[b];}
function S6(a){return BqW(a);}
function WF(a){var b,c,d,e,f,g;b=a.fh.length;c=B(398);d=Ht(((b*4|0)/3|0)+2|0);e=0;while(e<b){f=b-e|0;if(f>=3){g=(((a.fh[e]&255)<<16)+((a.fh[e+1|0]&255)<<8)|0)+(a.fh[e+2|0]&255)|0;d.ba(c.g(g>>18&63));d.ba(c.g(g>>12&63));d.ba(c.g(g>>6&63));d.ba(c.g(g&63));}else if(f<2){g=(a.fh[e]&255)<<16;d.ba(c.g(g>>18&63));d.ba(c.g(g>>12&63));d.a(B(399));}else{g=((a.fh[e]&255)<<16)+((a.fh[e+1|0]&255)<<8)|0;d.ba(c.g(g>>18&63));d.ba(c.g(g>>12&63));d.ba(c.g(g>>6&63));d.a(B(400));}e=e+3|0;}return d.b();}
var AJ6=D(CY);
function Bl6(a,b,c){var d=new AJ6();AXv(d,a,b,c);return d;}
function AXv(a,b,c,d){F5(a,b,c,d);}
function ALv(a,b,c,d){var e;a:{while(true){if((b+a.bz.co()|0)>d.O())break a;e=a.bz.bM(b,c);if(e<1)break;b=b+e|0;}}return a.l.e(b,c,d);}
function AHn(){var a=this;C.call(a);a.sI=null;a.GC=null;a.BL=0;a.rl=0;}
function BlR(a,b){var c=new AHn();Bbw(c,a,b);return c;}
function Bbw(a,b,c){J(a);a.sI=b;a.GC=c;}
function Bbq(a){return Cq(a.sI);}
function A$j(a,b){return Bf(a.sI)<b?0:1;}
function A5o(a,b){return Bf(a.GC)<b?0:1;}
function Bgo(a,b){a.BL=b;}
function BdW(a,b){a.rl=b;}
var LH=D(0);
var Vu=D();
function Bqa(){var a=new Vu();A5e(a);return a;}
function A5e(a){J(a);}
var ACp=D(Ba);
function BqL(){var a=new ACp();AS5(a);return a;}
function AS5(a){BZ(a);}
function AYV(a,b,c,d,e){var f;Cf();f=BN(e,Bya);Er(b,c,f.e3,f.e2,f.fq,f.fr);}
var DP=D(Cg);
function Byb(){var a=new DP();Li(a);return a;}
function Li(a){Gb(a);}
var Nh=D(DP);
function BqE(){var a=new Nh();A_F(a);return a;}
function A_F(a){Li(a);}
var ACm=D(Ba);
function Bj$(){var a=new ACm();BeC(a);return a;}
function BeC(a){BZ(a);}
function BiH(a,b,c,d,e){var f,g,h;AIr();if(CM(e,Byc)){f=b.c9.eh;g=Byc;h=(BN(e,g)).Lk;Eu(b,c,f.gV(h));}}
var ACi=D(Ba);
function BoH(){var a=new ACi();A1O(a);return a;}
function A1O(a){BZ(a);}
function A4C(a,b,c,d,e){var f;Cf();f=BN(e,Bx7);Er(b,c,f.e3,f.e2,f.fq,f.fr);}
var ACn=D(Ba);
function BpT(){var a=new ACn();A5p(a);return a;}
function A5p(a){BZ(a);}
function A91(a,b,c,d,e){var f,g,h,i;f=b.c9.eh;Cf();g=Bya;h=(BN(e,g)).ee;i=f.gV(h);Eu(b,c,i);}
var AFk=D(ED);
function Sq(){S.call(this);this.Nd=null;}
function Bj_(a){var b=new Sq();Bin(b,a);return b;}
function Bin(a,b){a.Nd=b;Bh(a);}
function A0G(a,b){return YU(b);}
var LK=D(0);
function Wq(){var a=this;C.call(a);a.k7=null;a.uj=null;a.yc=null;}
function A7V(){var a=new Wq();ARj(a);return a;}
function ARj(a){J(a);a.k7=window;a.yc=Bk9();}
function Bdw(a){var b;b=a.k7.document;return b;}
function Bfq(a,b){a.uj=b;requestAnimationFrame(BJ(a,"onAnimationFrame"));}
function A8G(a,b){var c;c=a.uj;a.uj=null;c.ft();}
function Bdg(a){return a.yc;}
function A13(a){var b;b=a.k7.location;return b;}
function A7I(a){return a.k7.document.documentElement.clientWidth;}
function A5L(a){return a.k7.document.documentElement.clientHeight;}
function BcQ(a,b){a.Nj(b);}
function Hw(){var a=this;BF.call(a);a.rB=null;a.rC=null;a.rD=null;}
var Byd=null;function Ix(){Ix=L(Hw);A8P();}
function Bye(){var a=new Hw();MX(a);return a;}
function BoA(a){var b=new Hw();Vm(b,a);return b;}
function YG(a){var b,c,d,e;b=Bjv(a);c=Bnh(a);d=Bjt(a);e=AG2(BJ(b,"drawLineJS"),BJ(c,"drawContactPointJS"),BJ(d,"getDebugFunctionJS"));a.c1(N(e),1);}
function MX(a){Ix();BS(a);a.rB=Q();a.rC=Q();a.rD=Q();YG(a);}
function AJF(a,b){}
function Vm(a,b){Ix();BS(a);a.rB=Q();a.rC=Q();a.rD=Q();}
function Ik(b){Ix();return b.rB;}
function G5(b){Ix();return b.rC;}
function Il(b){Ix();return b.rD;}
function A8P(){Byd=BoA(0);}
function AG2(b,c,d){var callback=new Bullet.MyDebugDraw();callback.drawLine=b;callback.drawContactPoint=c;callback.getDebugMode=d;return Bullet.getPointer(callback);}
function XO(){var a=this;Hw.call(a);a.fd=null;a.QN=0;a.I_=0;a.S3=0;a.PM=null;a.v1=0;}
function BlP(){var a=new XO();A8E(a);return a;}
function A8E(a){MX(a);a.fd=Bnl();a.QN=1;a.I_=1;a.S3=1;a.v1=0;}
function BgF(a,b,c,d){a.fd.kE(d.m,d.n,d.p,1.0);Ph(a.fd,b,c);}
function BaH(a,b,c,d,e,f){var g;a.fd.kE(f.m,f.n,f.p,1.0);g=0.03999999910593033;a.fd.MK(b.m-0.019999999552965164,b.n-0.019999999552965164,b.p+0.019999999552965164,g,g,g);a.fd.kE(1.0,0.0,0.0,1.0);Ph(a.fd,b,(c.di(d+0.20000000298023224)).eA(b));}
function A$C(a,b){a.v1=b;AJF(a,b);}
function AY1(a){return a.v1;}
function A3Q(a,b){var c;a.PM=b;a.fd.v5(b.ej);c=a.fd;Kd();c.pr(BwZ);}
function ALF(a){a.fd.N();}
var AGR=D(0);
var KT=D(BL);
var Vo=D(KT);
var ACs=D();
var WI=D(Dz);
function Bj3(a){var b=new WI();AWV(b,a);return b;}
function AWV(a,b){HT(a,b,1.0,1.0);}
function AQe(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;while(c<d&&f<g){j=e.data;k=b.data;l=c+1|0;m=k[c]&255;n=f+1|0;j[f]=m&65535;c=l;f=n;}h.eB(c);h.d6(f);return i;}
function PX(){var a=this;FT.call(a);a.qb=0;a.fn=null;}
function Bmh(a,b){var c=new PX();AWY(c,a,b);return c;}
function AWY(a,b,c){Od(a,b,null);a.qb=c;}
var G6=D(BF);
var Byf=null;function A1h(){A1h=L(G6);Bf8();}
function BmX(a){var b=new G6();ADp(b,a);return b;}
function Byg(){var a=new G6();Lb(a);return a;}
function ADp(a,b){A1h();BS(a);}
function Lb(a){A1h();BS(a);}
function Bf8(){Byf=BmX(0);}
var Fj=D(0);
var VR=D(DS);
var AJe=D();
var XZ=D(U);
function Bju(){var a=new XZ();ASI(a);return a;}
function ASI(a){Bv(a);}
function AZi(a){return (Dc()).bK(65,90);}
var F_=D();
function Mo(a){J(a);}
function Bga(a,b,c,d){var e,f,g,h;e=0;while(e<d){f=a.C2();if(f<0){if(!e)e=(-1);return e;}g=b.data;h=c+1|0;g[c]=f<<24>>24;e=e+1|0;c=h;}if(d<=0)d=(-1);return d;}
function A9P(a){}
function VL(){var a=this;F_.call(a);a.tB=0;a.tA=null;}
function BqW(a){var b=new VL();AR_(b,a);return b;}
function AR_(a,b){a.tA=b;Mo(a);}
function A$0(a){var b,c;if(a.tB==QH(a.tA))return (-1);b=a.tA;c=a.tB;a.tB=c+1|0;return UV(b,c)&255;}
var E2=D(Bd);
var Byh=null;var Byi=null;var Byj=null;var Byk=null;function Boc(){Boc=L(E2);AYf();}
function Rs(a,b){var c=new E2();Yn(c,a,b);return c;}
function Yn(a,b,c){Boc();B4(a,b,c);}
function AYf(){Byh=Rs(B(401),0);Byi=Rs(B(402),1);Byj=Rs(B(403),2);Byk=I(E2,[Byh,Byi,Byj]);}
var ADd=D(Cn);
function AAX(){Bz.call(this);this.EZ=null;}
function Bqc(a){var b=new AAX();Bdv(b,a);return b;}
function Bdv(a,b){CJ(a);a.EZ=b;}
function A6i(a,b,c,d){var e,f;a:{if(b!=d.O()){if(!b)break a;if(d.jZ()&&b==d.dW())break a;e=a.EZ;f=b-1|0;if(e.FS(c.g(f),c.g(b)))break a;}return (-1);}return a.l.e(b,c,d);}
function AQw(a,b){return 0;}
function A4t(a){return B(404);}
var Cx=D();
function Et(a){J(a);}
function A3j(a,b,c){return 1;}
var Up=D(BL);
function ACx(){Ba.call(this);this.zQ=null;}
function Bob(){var a=new ACx();Bdi(a);return a;}
function Bdi(a){BZ(a);a.zQ=BH();}
function A8B(a,b,c,d,e){EC(b,c,(a.zQ.b6(b.c6.ej)).hW(d.dN));}
function KU(){var a=this;C.call(a);a.dl=null;a.es=null;a.zK=0;a.NI=0;a.vb=0;a.lv=0;a.pn=0;}
function A_7(a,b,c){var d=new KU();AF3(d,a,b,c);return d;}
function AF3(a,b,c,d){J(a);a.lv=0;a.pn=0;a.NI=b;a.dl=d;a.es=Jv(Cp(a.dl.b9/4|0,c));a.es.dn();a.zK=Btv.jp();a.vb=!b?35048:35044;}
function AQv(a){return a.dl;}
function AXI(a){return BG(a.es)/(a.dl.b9/4|0)|0;}
function A1L(a){return Dg(a.es)/(a.dl.b9/4|0)|0;}
function AJS(a){if(a.pn){Btv.fQ(34962,BG(a.es),a.es,a.vb);a.lv=0;}}
function Bb_(a,b,c,d){a.lv=1;QL(b,a.es,d,c);a.es.c$(0);a.es.cu(d);AJS(a);}
function A8j(a,b,c){var d,e,f,g,h,i;d=Btv;d.dj(34962,a.zK);if(a.lv){d.fQ(34962,BG(a.es),a.es,a.vb);a.lv=0;}a:{e=C6(a.dl);if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data;h=CE(a.dl,f);i=g[f];if(i>=0){b.mp(i);if(h.eS!=4)b.iA(i,h.cS,5126,0,a.dl.b9,h.cp);else b.iA(i,h.cS,5121,1,a.dl.b9,h.cp);}f=f+1|0;}}f=0;while(f<e){h=CE(a.dl,f);i=b.mv(h.eG);if(i>=0){b.mp(i);if(h.eS!=4)b.iA(i,h.cS,5126,0,a.dl.b9,h.cp);else b.iA(i,h.cS,5121,1,a.dl.b9,h.cp);}f=f+1|0;}}a.pn=1;}
function A4A(a,b,c){var d,e,f,g;a:{d=Btv;e=C6(a.dl);if(c===null){f=0;while(f<e){b.Dr((CE(a.dl,f)).eG);f=f+1|0;}}else{f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0)b.uQ(g);f=f+1|0;}}}d.dj(34962,0);a.pn=0;}
var ABo=D(KU);
function Bmt(a,b){var c=new ABo();Bel(c,a,b);return c;}
function Bel(a,b,c){AF3(a,0,b,c);}
var ACC=D(Ba);
function BkO(){var a=new ACC();AYO(a);return a;}
function AYO(a){BZ(a);}
function A1B(a,b,c,d,e){Ct();Gx(b,c,(BN(e,Byl)).d_);}
var ACz=D(Ba);
function Bo9(){var a=new ACz();AZR(a);return a;}
function AZR(a){BZ(a);}
function A3v(a,b,c,d,e){var f,g,h,i;f=b.c9.eh;Cf();g=Bym;h=(BN(e,g)).ee;i=f.gV(h);Eu(b,c,i);}
var Xe=D(U);
function BmU(){var a=new Xe();AQQ(a);return a;}
function AQQ(a){Bv(a);}
function Bev(a){return (Dc()).bK(97,122);}
function ACy(){Ba.call(this);this.CZ=null;}
function Bmm(){var a=new ACy();ASH(a);return a;}
function ASH(a){BZ(a);a.CZ=Sa();}
function ATo(a,b,c,d,e){Ut(b,c,((a.CZ.F2(d.dN)).EI()).Cl());}
var ACB=D(Ba);
function BlQ(){var a=new ACB();A78(a);return a;}
function A78(a){BZ(a);}
function AOr(a,b,c,d,e){FR();Gp(b,c,(BN(e,Bxv)).mX);}
var AEZ=D(C0);
var JP=D(FA);
var AEY=D(JP);
function AEE(){var a=this;C.call(a);a.eh=null;a.o8=0;a.t8=0;a.rq=0;a.ht=0;a.Cy=0.0;a.yp=0.0;a.qr=0;a.pV=0;}
function BnJ(a){var b=new AEE();BhS(b,a);return b;}
function BhS(a,b){J(a);a.eh=b;}
function BfP(a){Btu.ew(2929);a.ht=0;Btu.lj(1);a.qr=1;Btu.ew(3042);a.o8=0;Btu.ew(2884);a.rq=0;a.t8=0;a.pV=0;a.eh.hm();}
function Biq(a){if(a.ht)Btu.ew(2929);if(!a.qr)Btu.lj(1);if(a.o8)Btu.ew(3042);if(a.pV>0)Btu.ew(2884);a.eh.N();}
function AN9(a,b){var c;if(a.qr!=b){c=Btu;a.qr=b;c.lj(b);}}
function A6c(a,b,c,d){var e,f,g;e=!a.ht?0:1;f=!b?0:1;if(a.ht!=b){a.ht=b;if(!f)Btu.ew(2929);else{Btu.pP(2929);Btu.wT(b);}}if(f){if(!(e&&a.ht==b)){g=Btu;a.ht=b;g.wT(b);}if(!(e&&a.Cy===c&&a.yp===d)){g=Btu;a.Cy=c;a.yp=d;g.MZ(c,d);}}}
function BhA(a,b,c,d){if(b!=a.o8){a.o8=b;if(!b)Btu.ew(3042);else Btu.pP(3042);}if(b&&!(a.t8==c&&a.rq==d)){Btu.T_(c,d);a.t8=c;a.rq=d;}}
function ARH(a,b){if(b!=a.pV){a.pV=b;if(b!=1028&&b!=1029&&b!=1032)Btu.ew(2884);else{Btu.pP(2884);Btu.L4(b);}}}
var V2=D(Cz);
var J6=D(BL);
var ACv=D(J6);
var UI=D(U);
function Bmz(){var a=new UI();ANl(a);return a;}
function ANl(a){Bv(a);}
function AXd(a){return BmQ(a);}
function AFi(){var a=this;C.call(a);a.fJ=null;a.d7=null;a.sO=0;a.KB=0;a.jH=0;a.pF=0;a.Ar=0;}
function Biy(a,b){var c=new AFi();A7Q(c,a,b);return c;}
function A7Q(a,b,c){J(a);a.jH=1;a.pF=0;a.d7=OY(c*2|0);a.KB=1;a.Ar=!b?35048:35044;a.fJ=a.d7.xn();a.fJ.dn();a.d7.dn();a.sO=AJy(a);}
function AJy(a){var b;b=Btv.jp();Btv.dj(34963,b);Btv.fQ(34963,Dg(a.d7),null,a.Ar);Btv.dj(34963,0);return b;}
function AXq(a){return BG(a.fJ);}
function A21(a){return Dg(a.fJ);}
function A$t(a,b,c,d){a.jH=1;a.fJ.da();a.fJ.Fw(b,c,d);a.fJ.dn();a.d7.c$(0);a.d7.cu(d<<1);if(a.pF){Btv.rc(34963,0,BG(a.d7),a.d7);a.jH=0;}}
function A0R(a){a.jH=1;return a.fJ;}
function AS1(a){if(!a.sO)G(W(B(405)));Btv.dj(34963,a.sO);if(a.jH){a.d7.cu(BG(a.fJ)*2|0);Btv.rc(34963,0,BG(a.d7),a.d7);a.jH=0;}a.pF=1;}
function AM7(a){Btv.dj(34963,0);a.pF=0;}
var HC=D(BF);
var Byn=null;function Bb1(){Bb1=L(HC);APv();}
function BoX(a){var b=new HC();AEJ(b,a);return b;}
function Byo(){var a=new HC();JC(a);return a;}
function AEJ(a,b){Bb1();BS(a);}
function JC(a){Bb1();BS(a);}
function APv(){Byn=BoX(0);}
var ABD=D(Bz);
function Bkg(){var a=new ABD();AYT(a);return a;}
function AYT(a){CJ(a);}
function ASA(a,b,c,d){if(b!=d.Rk())return (-1);return a.l.e(b,c,d);}
function A1$(a,b){return 0;}
function A4O(a){return B(406);}
var ACH=D(Ba);
function Boo(){var a=new ACH();ALW(a);return a;}
function ALW(a){BZ(a);}
function BeG(a,b,c,d,e){var f,g,h,i;f=b.c9.eh;Cf();g=Byp;h=(BN(e,g)).ee;i=f.gV(h);Eu(b,c,i);}
var ACE=D(Ba);
function Bkd(){var a=new ACE();Bhg(a);return a;}
function Bhg(a){BZ(a);}
function A1m(a,b,c,d,e){var f;Cf();f=BN(e,Byp);Er(b,c,f.e3,f.e2,f.fq,f.fr);}
var Dx=D(BF);
var Byq=null;var BuZ=null;var Bu0=null;var Byr=null;var Bys=null;var Byt=null;var Byu=null;var Bsk=null;function D9(){D9=L(Dx);AMq();}
function BjC(){var a=new Dx();XX(a);return a;}
function Gg(a){var b=new Dx();Nu(b,a);return b;}
function XX(a){D9();Nu(a,1);}
function Nu(a,b){D9();BS(a);a.c1(!b?X:N(SD(0.0,0.0,0.0)),b);}
function ANd(a){return UZ(V(a.br));}
function AX8(a){return AGS(V(a.br));}
function A93(a){return AC3(V(a.br));}
function APf(a,b,c,d){AGL(V(a.br),b,c,d);}
function D5(b,c){D9();c.QH(b.m,b.n,b.p);}
function OM(b,c){var d,e,f;D9();d=b.O3();e=b.MG();f=b.M$();c.L(d,e,f);}
function Fg(b,c){D9();Byu.lt(b);OM(Byu,c);}
function AMq(){Byq=Gg(0);BuZ=Gg(1);Bu0=Gg(1);Byr=Gg(1);Bys=Gg(1);Byt=Gg(1);Byu=Gg(0);Bsk=Q();}
function SD(b,c,d){var jsObj=new Bullet.btVector3(b,c,d);return Bullet.getPointer(jsObj);}
function UZ(b){var jsObj=Bullet.wrapPointer(b,Bullet.btVector3);return jsObj.x();}
function AGS(b){var jsObj=Bullet.wrapPointer(b,Bullet.btVector3);return jsObj.y();}
function AC3(b){var jsObj=Bullet.wrapPointer(b,Bullet.btVector3);return jsObj.z();}
function AGL(b,c,d,e){var jsObj=Bullet.wrapPointer(b,Bullet.btVector3);jsObj.setValue(c,d,e);}
var ACA=D(Ba);
function Bpa(){var a=new ACA();ALU(a);return a;}
function ALU(a){BZ(a);}
function AVO(a,b,c,d,e){var f;Cf();f=BN(e,Bym);Er(b,c,f.e3,f.e2,f.fq,f.fr);}
var ACG=D(Ba);
function Bpc(){var a=new ACG();A4J(a);return a;}
function A4J(a){BZ(a);}
function ARa(a,b,c,d,e){Ct();Gx(b,c,(BN(e,Byv)).d_);}
var Tj=D();
var MS=D(CR);
function Byw(a){var b=new MS();AFQ(b,a);return b;}
function AFQ(a,b){Fh(a,b);}
function A3K(a,b,c,d){var e;e=a.kA();d.bC(e,b-d.eJ(e)|0);return a.l.e(b,c,d);}
function A6Z(a){return B(407);}
function Bex(a,b){return 0;}
var ACF=D(Ba);
function Bmu(){var a=new ACF();AQx(a);return a;}
function AQx(a){BZ(a);}
function A66(a,b,c,d,e){Ct();Gx(b,c,(BN(e,Byx)).d_);}
var AAd=D(EB);
var AJc=D(GW);
var AGy=D(IH);
var Nm=D();
var Byy=null;function F3(){F3=L(Nm);ASK();}
function Ks(b,c){F3();return b+Byy.Qg((c-b|0)+1|0)|0;}
function I8(b,c){F3();return b+Byy.Ib()*(c-b);}
function KG(b){var c,d;F3();if(!b)return 1;c=b+(-1)|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function M5(b){F3();return b&&!(b&(b-1|0))?1:0;}
function Ed(b){F3();return C1(b)>9.999999974752427E-7?0:1;}
function DN(b,c){F3();return C1(b-c)>9.999999974752427E-7?0:1;}
function WO(b,c,d){F3();return C1(b-c)>d?0:1;}
function ASK(){Byy=Bmy();}
var Oa=D(0);
function AAr(){BX.call(this);this.sj=0;}
function BlE(a){var b=new AAr();Bfi(b,a);return b;}
function Bfi(a,b){Dm(a);a.bT=2;a.sj=FW(E6(b));}
function AYi(a,b,c){var d,e,f;d=b+1|0;e=c.g(b);f=c.g(d);return a.sj!=FW(E6(DI(e,f)))?(-1):2;}
function BiU(a){return (((H()).a(B(408))).a(Oo(Fm(a.sj)))).b();}
function W_(){var a=this;C.call(a);a.e$=null;a.nj=null;a.mg=null;a.l5=null;a.m2=null;}
function BdY(){var a=new W_();BfU(a);return a;}
function BfU(a){J(a);a.e$=null;}
function ALe(a,b){a.e$=b.e$;a.nj=b.nj;a.mg=b.mg;a.l5=b.l5;a.m2=b.m2;}
function AMI(a){var b,c;b=N(a.e$===null?0:a.e$.ey);c=CS(Cu(N(811),b),N(a.e$===null?0:a.e$.R4()));c=CS(Cu(N(811),c),N(a.nj===null?0:Fw(a.nj)));c=CS(Cu(N(811),c),N(a.mg===null?0:Fw(a.mg)));c=CS(Cu(N(811),c),N(a.l5===null?0:Iu(a.l5)));c=CS(Cu(N(811),c),N(a.m2===null?0:Iu(a.m2)));return V(AZp(c,Pt(c,32)));}
function UG(){var a=this;C.call(a);a.SJ=null;a.hU=null;a.tl=null;a.r8=0;a.Bk=0.0;a.ic=0.0;a.ry=0.0;a.jk=0.0;a.ta=0.0;a.fj=0.0;a.mB=0.0;a.iV=0.0;a.kL=0.0;a.yM=0.0;a.e4=0.0;a.BN=0.0;a.Fj=0;a.hx=null;a.iQ=null;a.wI=0.0;a.uM=0.0;a.Fo=null;a.xI=null;a.yV=null;}
function Bnu(a,b){var c=new UG();Bbs(c,a,b);return c;}
function Bbs(a,b,c){J(a);a.fj=1.0;a.yM=1.0;a.e4=1.0;a.BN=1.0;a.hx=Y($rt_arraycls(Lp),128);a.uM=1.0;a.xI=KP([120,101,97,111,110,115,114,99,117,109,118,119,122]);a.yV=KP([77,78,66,68,67,69,70,75,65,71,72,73,74,76,79,80,81,82,83,84,85,86,87,88,89,90]);a.tl=b;a.r8=c;a.Up(b,c);}
function ANN(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,$$je;if(a.hU!==null)G(C8(B(409)));a.SJ=b.So();d=BlI(BnL(b.rk()),512);a:{b:{try{e=d.lK();if(e===null)G(W(B(410)));f=e.ex(e.Q_(B(411))+8|0);g=(f.cm(0,f.OD(32))).wU(B(20),4);h=g.data;if(h.length!=4)G(W(B(412)));a.Bk=B7(h[0]);a.ic=B7(h[1]);a.ry=B7(h[2]);a.jk=B7(h[3]);i=a.Bk+a.ry;f=d.lK();if(f===null)G(W(B(413)));j=f.wU(B(48),9);h=j.data;k=h.length;if(k<3)G(W(B(414)));if(!h[1].ff(B(415)))G(W(B(416)));a.ta
=B7(h[1].ex(11));if(!h[2].ff(B(417)))G(W(B(418)));c:{l=B7(h[2].ex(5));m=1;if(k<6)n=m;else if(h[5]===null)n=m;else if(!h[5].ff(B(419)))n=m;else{try{n=Bj(1,B7(h[5].ex(6)));m=n;break c;}catch($$e){$$je=T($$e);if($$je instanceof D0){}else{throw $$e;}}n=m;}}a.hU=Y(BM,n);o=0;d:{e:{f:{while(true){if(o>=n)break d;f=d.lK();if(f===null)G(W(B(420)));g:{p=H3(H0(B(421)),f);if(Hm(p)){q=Hv(p,1);try{r=B7(q);if(r!=o)break f;break g;}catch($$e){$$je=T($$e);if($$je instanceof D0){s=$$je;break e;}else{throw $$e;}}}}f=H3(H0(B(422)),
f);if(!Hm(f))break;t=Hv(f,1);a.hU.data[o]=(((b.Oh()).NA(t)).so()).IJ(B(423),B(424));o=o+1|0;}G(W(B(425)));}try{G(W((((H()).a(B(426))).a(q)).b()));}catch($$e){$$je=T($$e);if($$je instanceof D0){s=$$je;}else{throw $$e;}}}G(K0((((H()).a(B(427))).a(q)).b(),s));}a.iV=0.0;h:{while(true){f=d.lK();if(f===null)break;if(f.ff(B(428)))break h;if(f.ff(B(429)))break h;if(!f.ff(B(430)))continue;u=AMQ();v=YJ(f,B(431));v.S();v.S();w=B7(v.S());if(w<=0)a.iQ=u;else{if(w>65535)continue;a.zO(w,u);}u.fc=w;v.S();u.uf=B7(v.S());v.S();u.ug
=B7(v.S());v.S();u.cD=B7(v.S());v.S();u.cV=B7(v.S());v.S();u.dD=B7(v.S());v.S();if(c)u.jE=B7(v.S());else u.jE= -(u.cV+B7(v.S())|0)|0;v.S();u.gM=B7(v.S());if(v.xO())v.S();i:{if(v.xO())try{u.kj=B7(v.S());break i;}catch($$e){$$je=T($$e);if($$je instanceof D0){}else{throw $$e;}}}if(u.cD>0&&u.cV>0)a.iV=Lh(l+u.jE,a.iV);}}a.iV=a.iV+a.ry;j:{while(true){f=d.lK();if(f===null)break;if(!f.ff(B(432)))break j;v=YJ(f,B(431));v.S();v.S();x=B7(v.S());v.S();y=B7(v.S());if(x<0)continue;if(x>65535)continue;if(y<0)continue;if(y
>65535)continue;u=a.iP(x&65535);v.S();z=B7(v.S());if(u!==null)u.IG(y,z);}}ba=0;bb=0.0;bc=0.0;bd=0.0;be=0.0;bf=0.0;bg=0.0;bh=0.0;if(f!==null&&f.ff(B(429))){ba=1;v=YJ(f,B(431));v.S();v.S();bb=EP(v.S());v.S();bc=EP(v.S());v.S();bd=EP(v.S());v.S();be=EP(v.S());v.S();bf=EP(v.S());v.S();bg=EP(v.S());v.S();bh=EP(v.S());}bi=a.iP(32);if(bi===null){bi=AMQ();bi.fc=32;bj=a.iP(108);if(bj===null)bj=a.EF();bi.gM=bj.gM;a.zO(32,bi);}if(!bi.cD){bi.cD=a.jk+bi.gM+a.ic|0;bi.dD= -a.jk|0;}a.wI=bi.gM;bk=null;h=a.xI.data;k=h.length;bl
=0;k:{while(bl<k){bm=h[bl];bk=a.iP(bm);if(bk!==null)break k;bl=bl+1|0;}}if(bk===null)bk=a.EF();a.uM=bk.cV-i;bn=null;h=a.yV.data;n=h.length;k=0;l:{while(k<n){bo=h[k];bn=a.iP(bo);if(bn!==null)break l;k=k+1|0;}}if(bn!==null)a.fj=bn.cV;else{h=a.hx.data;n=h.length;k=0;while(k<n){m:{bp=h[k];if(bp!==null){bq=bp.data;bl=bq.length;br=0;while(true){if(br>=bl)break m;u=bq[br];if(u!==null&&u.cV&&u.cD)a.fj=EZ(a.fj,u.cV);br=br+1|0;}}}k=k+1|0;}}a.fj=a.fj-i;a.mB=l-a.fj;a.kL= -a.ta;if(c){a.mB= -a.mB;a.kL= -a.kL;}if(ba){a.mB
=bb;a.iV=bc;a.kL=bd;a.fj=be;a.ta=bf;a.wI=bg;a.uM=bh;}}catch($$e){$$je=T($$e);if($$je instanceof Cg){s=$$je;break b;}else{f=$$je;break a;}}N9(d);return;}try{G(K0((((H()).a(B(433))).c0(b)).b(),s));}catch($$e){$$je=T($$e);f=$$je;}}N9(d);G(f);}
function A3Z(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=c.CV();e=1.0/d.bk();f=1.0/d.bj();g=0.0;h=0.0;i=c.Bp;j=c.Bs;k=c.KL();l=c.OW();if(c instanceof Mu){m=c;g=m.RR;h=(m.Qh-m.S$|0)-m.RP;}n=b.uf;o=b.uf+b.cD|0;p=b.ug;q=b.ug+b.cV|0;if(g<=0.0)k=o;else{n=n-g;if(n<0.0){b.cD=b.cD+n|0;b.dD=b.dD-n|0;n=0.0;}r=o-g;if(r<=k)k=r;else b.cD=b.cD-(r-k)|0;}if(h<=0.0)l=q;else{p=p-h;if(p<0.0){b.cV=b.cV+p|0;if(b.cV<0)b.cV=0;p=0.0;}r=q-h;if(r<=l)l=r;else{s=r-l;b.cV=b.cV-s|0;b.jE=b.jE+s|0;}}b.wW=i+n*e;b.C$=i+k*e;if(!a.r8){b.un=j
+p*f;b.qV=j+l*f;}else{b.qV=j+p*f;b.un=j+l*f;}}
function A1H(a,b,c){var d,e,f;d=a.hx.data;e=b/512|0;f=d[e];if(f===null){d=a.hx.data;f=Y(Lp,512);d[e]=f;}f.data[b&511]=c;}
function BaI(a){var b,c,d,e,f,g,h,i;b=a.hx.data;c=b.length;d=0;a:while(true){if(d>=c)G(W(B(434)));b:{e=b[d];if(e!==null){f=e.data;g=f.length;h=0;while(true){if(h>=g)break b;i=f[h];if(i!==null&&i.cV&&i.cD)break a;h=h+1|0;}}}d=d+1|0;}return i;}
function AOm(a,b){var c;c=a.hx.data[b/512|0];if(c===null)return null;return c.data[b&511];}
function ANw(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q;g=e-d|0;if(!g)return;h=a.Fj;i=a.e4;j=b.bq;k=b.bu;j.yS(g);b.bu.F1(g+1|0);while(true){a:{l=d+1|0;m=c.g(d);if(m!=13){n=a.iP(m);if(n===null){if(a.iQ===null)break a;n=a.iQ;}j.E(n);if(f!==null){o=f.gM;p=(o+f.Nc(m)|0)*i;}else p=n.o5?0.0:( -n.dD|0)*i-a.jk;k.B0(p);if(!h)f=n;else if(m!=91)f=n;else if(l>=e)f=n;else if(c.g(l)!=91)f=n;else{l=l+1|0;f=n;}}}if(l>=e)break;d=l;}if(f!==null){q=f.o5?f.gM*i:(f.cD+f.dD|0)*i-a.ic;k.B0(q);}}
function AKs(a,b,c){var d,e,f,g,h;d=c-1|0;e=b.T;f=e.data;g=f[d].fc&65535;if(a.jS(g))return d;if(a.y5(g))d=d+(-1)|0;a:{while(d>0){h=f[d].fc&65535;if(a.jS(h))break a;if(a.y5(h))break a;d=d+(-1)|0;}return 0;}return d+1|0;}
function AN6(a,b){var c,d,e,f;if(a.Fo===null)return 0;c=a.Fo.data;d=c.length;e=0;while(e<d){f=c[e];if(b==f)return 1;e=e+1|0;}return 0;}
function AOQ(a,b){switch(b){case 9:case 10:case 13:case 32:break;default:return 0;}return 1;}
var AE4=D(CW);
function ACQ(){var a=this;U.call(a);a.y7=0;a.EU=0;}
function O(a,b){var c=new ACQ();BhB(c,a,b);return c;}
function BhB(a,b,c){Bv(a);a.y7=b;a.EU=c;}
function ATR(a){var b;b=(Dc()).bK(a.y7,a.EU);return b;}
var EV=D(CY);
function Blm(a,b,c){var d=new EV();PS(d,a,b,c);return d;}
function PS(a,b,c,d){F5(a,b,c,d);}
function Bal(a,b,c,d){var e;e=a.bd.e(b,c,d);if(e<0)e=a.l.e(b,c,d);return e;}
function A2n(a,b){NP(a,b);a.bd.V(b);}
var VA=D(GS);
function A8l(a,b){var c=new VA();Bbi(c,a,b);return c;}
function Bbi(a,b,c){Nj(a,b,c);}
var Q7=D(FL);
var Byz=null;function ByA(){ByA=L(Q7);A_t();}
function A_t(){Byz=BB();}
function AFN(){S.call(this);this.RL=null;}
function BlZ(a){var b=new AFN();AYy(b,a);return b;}
function AYy(a,b){a.RL=b;Bh(a);}
function A0h(a,b){return YZ(b);}
function GX(){var a=this;C.call(a);a.cy=null;a.dh=null;a.dF=null;a.jY=null;a.hM=null;a.ej=null;a.gS=null;a.lF=0.0;a.kb=0.0;a.kZ=0.0;a.mL=0.0;a.sY=null;a.de=null;a.iM=null;}
function Nx(a){J(a);a.cy=Q();a.dh=CB(0.0,0.0,(-1.0));a.dF=CB(0.0,1.0,0.0);a.jY=BH();a.hM=BH();a.ej=BH();a.gS=BH();a.lF=1.0;a.kb=100.0;a.kZ=0.0;a.mL=0.0;a.sY=Bpx();a.de=Q();a.iM=BjM(Q(),Q());}
function AQd(a,b,c,d){var e;((a.de.L(b,c,d)).fK(a.cy)).bV();if(!a.de.zT()){e=a.de.z6(a.dF);if(C1(e-1.0)<9.999999717180685E-10)(a.dF.M(a.dh)).di((-1.0));else if(C1(e+1.0)<9.999999717180685E-10)a.dF.M(a.dh);a.dh.M(a.de);a.Kk();}}
function A9l(a){(a.de.M(a.dh)).iX(a.dF);((a.dF.M(a.de)).iX(a.dh)).bV();}
function Bc_(a,b,c){a.dh.sr(b,c);a.dF.sr(b,c);}
function AW7(a,b,c,d){a.de.M(b);a.de.fK(a.cy);a.lE(a.de);a.Ie(c,d);a.de.sr(c,d);a.Nt( -a.de.m, -a.de.n, -a.de.p);}
function AXB(a,b,c,d){a.cy.Cz(b,c,d);}
function BiO(a,b){a.cy.eA(b);}
function Bca(a,b,c,d,e,f){var g,h,i,j;g=b.m;h=b.n;i=g-c;j=Btr.bj()-h;j=j-d;b.m=2.0*i/e-1.0;b.n=2.0*j/f-1.0;b.p=2.0*b.p-1.0;b.HU(a.gS);return b;}
function A7G(a,b,c,d,e,f,g){a.Dt(a.iM.mi.L(b,c,0.0),d,e,f,g);a.Dt(a.iM.m1.L(b,c,1.0),d,e,f,g);(a.iM.m1.fK(a.iM.mi)).bV();return a.iM;}
function A18(a,b,c){return a.To(b,c,0.0,0.0,Btr.bk(),Btr.bj());}
function RL(){var a=this;GX.call(a);a.B1=0.0;a.AJ=null;}
function Bm3(){var a=new RL();A9v(a);return a;}
function A9v(a){Nx(a);a.B1=67.0;a.AJ=Q();}
function ANJ(a){a.qX(1);}
function AYx(a,b){var c;c=a.kZ/a.mL;a.jY.NB(C1(a.lF),C1(a.kb),a.B1,c);a.hM.DO(a.cy,(a.AJ.M(a.cy)).eA(a.dh),a.dF);a.ej.b6(a.jY);G1(a.ej.c,a.hM.c);if(b){a.gS.b6(a.ej);Pc(a.gS.c);a.sY.Cs(a.gS);}}
function ZG(){C.call(this);this.En=null;}
function Bkm(a){var b=new ZG();A96(b,a);return b;}
function A96(a,b){J(a);a.En=b;}
function Bgs(a){A_f(a.En);}
var AAH=D(Do);
function BbB(a){var b=new AAH();AOs(b,a);return b;}
function AOs(a,b){AGU(a,b);}
function ASy(a,b){return a.ec.r(FW(E6(b)));}
function A1v(a){return ((((H()).a(B(435))).a(!a.sy?B(48):B(49))).a(a.ec.b())).b();}
var Gh=D(Bd);
var Bx4=null;var Bx5=null;var ByB=null;function Bg7(){Bg7=L(Gh);ALB();}
function A2G(a,b){var c=new Gh();AGD(c,a,b);return c;}
function AAq(){Bg7();return ByB.e6();}
function AGD(a,b,c){Bg7();B4(a,b,c);}
function ALB(){Bx4=A2G(B(436),0);Bx5=A2G(B(437),1);ByB=I(Gh,[Bx4,Bx5]);}
var KF=D(BF);
var ByC=null;var Btn=null;function AFh(){AFh=L(KF);AWq();}
function BpU(){var a=new KF();ADe(a);return a;}
function BqF(a){var b=new KF();S8(b,a);return b;}
function ADe(a){AFh();BS(a);a.c1(X,0);}
function S8(a,b){AFh();BS(a);}
function AWq(){ByC=BqF(0);Btn=BpU();}
var Z6=D(U);
function Bk2(){var a=new Z6();Bbd(a);return a;}
function Bbd(a){Bv(a);}
function A9S(a){return (((Dc()).bK(33,64)).bK(91,96)).bK(123,126);}
function Mr(){var a=this;C.call(a);a.e8=null;a.dG=null;a.s3=0;a.NS=0;a.vu=0;a.lq=0;a.qQ=0;a.uD=0;a.ef=null;}
var ByD=null;function AQk(){AQk=L(Mr);BiM();}
function A_k(a,b,c){var d=new Mr();ACU(d,a,b,c);return d;}
function ACU(a,b,c,d){AQk();J(a);a.lq=0;a.qQ=0;a.uD=(-1);a.ef=Iv();a.NS=b;a.e8=d;a.dG=Jv(Cp(a.e8.b9/4|0,c));a.dG.dn();a.s3=Btv.jp();a.vu=!b?35048:35044;Uf(a);}
function A4N(a){return a.e8;}
function Bbz(a){return (BG(a.dG)*4|0)/a.e8.b9|0;}
function AZK(a){return (Dg(a.dG)*4|0)/a.e8.b9|0;}
function ABt(a){if(a.qQ){Btv.fQ(34962,BG(a.dG),a.dG,a.vu);a.lq=0;}}
function A48(a,b,c,d){a.lq=1;QL(b,a.dG,d,c);a.dG.c$(0);a.dG.cu(d);ABt(a);}
function AY7(a,b,c){var d;d=Btw;d.Vf(a.uD);AHV(a,b,c);AHZ(a,d);a.qQ=1;}
function AHV(a,b,c){var d,e,f,g,h,i;d=!a.ef.bY?0:1;a:{e=C6(a.e8);if(d){if(c===null){f=0;while(d&&f<e){g=CE(a.e8,f);h=b.mv(g.eG);d=h!=a.ef.b_(f)?0:1;f=f+1|0;}}else{i=c.data;d=i.length!=a.ef.bY?0:1;f=0;while(d){if(f>=e)break a;d=i[f]!=a.ef.b_(f)?0:1;f=f+1|0;}}}}b:{if(!d){Btu.dj(34962,a.s3);ZI(a,b);a.ef.P();f=0;while(true){if(f>=e)break b;g=CE(a.e8,f);if(c!==null){i=c.data;a.ef.ji(i[f]);}else a.ef.ji(b.mv(g.eG));h=a.ef.b_(f);if(h>=0){b.mp(h);b.iA(h,g.cS,g.ib,g.iI,a.e8.b9,g.cp);}f=f+1|0;}}}}
function ZI(a,b){var c,d,e;if(a.ef===null)return;c=C6(a.e8);d=0;while(d<c){e=a.ef.b_(d);if(e>=0)b.uQ(e);d=d+1|0;}}
function AHZ(a,b){if(a.lq){b.dj(34962,a.s3);a.dG.cu(BG(a.dG));b.fQ(34962,BG(a.dG),a.dG,a.vu);a.lq=0;}}
function AO1(a,b,c){var d;d=Btw;d.Vf(0);a.qQ=0;}
function Uf(a){AQk();ByD.da();Btw.ZK(1,ByD);a.uD=ByD.Ou();}
function BiM(){ByD=Gn(1);}
var T6=D();
function A1C(b){$rt_putStderr(b);}
function Bff(b){$rt_putStdout(b);}
var AA2=D(Cj);
var Wy=D(Cn);
var ZJ=D(C0);
function W0(){var a=this;Cc.call(a);a.oV=null;a.Lw=null;}
function BmP(a,b){var c=new W0();Bfz(c,a,b);return c;}
function Bfz(a,b,c){a.Lw=b;a.oV=c;Ds(a);}
function Bis(a,b){a.oV.ez(b);}
function ATQ(a,b){a.oV.cs(b);}
function AUy(a,b,c){return a.oV.cB(b,null);}
function ASv(a,b,c){return a.ig(b,c);}
var GR=D(0);
function WW(){var a=this;C.call(a);a.ok=null;a.vh=null;a.oK=null;a.rP=null;}
function BlC(a,b,c,d){var e=new WW();AQN(e,a,b,c,d);return e;}
function AQN(a,b,c,d,e){a.rP=b;a.ok=c;a.vh=d;a.oK=e;J(a);}
function APX(a,b){var c,d;if(a.ok.readyState==4){if(a.ok.status!=200)a.vh.cs(a.oK);else{if(Qk(a.rP))(Ep()).fI((((H()).a(B(438))).a(a.oK)).b());c=a.ok.response;d=(Ev()).Vr(c);a.vh.cB(a.oK,BpH(c,d));}a.rP.ko();}}
function A$e(a,b){a.d9(b);}
function WV(){var a=this;Cc.call(a);a.m$=null;a.rh=null;a.yE=0;a.Fd=null;a.nE=null;}
function BqG(a,b,c,d,e){var f=new WV();AZB(f,a,b,c,d,e);return f;}
function AZB(a,b,c,d,e,f){a.nE=b;a.m$=c;a.rh=d;a.yE=e;a.Fd=f;Ds(a);}
function Bjh(a,b){a.m$.ez(b);}
function Bic(a,b){a.m$.cs(b);}
function AMi(a,b,c){var d,e,f;d=(Tp(a.nE)).UD();if(a.rh!==null){e=a.rh;d.setAttribute("crossOrigin",$rt_ustr(e));}a.nE.i9();ANx(d,BmJ(a,b,d));if(!a.yE){f=$rt_ustr(b);d.src=f;}else{f=$rt_ustr((((((H()).a(B(439))).a(a.Fd)).a(B(440))).a(WF(c))).b());d.src=f;}return 0;}
function A0_(a,b,c){return a.ig(b,c);}
var ZL=D(FA);
function WU(){var a=this;C.call(a);a.AH=null;a.Iq=null;}
function Bnp(a,b){var c=new WU();A4c(c,a,b);return c;}
function A4c(a,b,c){a.Iq=b;a.AH=c;J(a);}
function Be9(a,b){a.AH.ez(b.loaded);}
function A6d(a,b){a.d9(b);}
var Nr=D();
var Bs2=null;function Bow(){Bow=L(Nr);A3G();}
function A3G(){Bs2=Be((Or()).data.length);Bs2.data[Bi(Bu6)]=1;Bs2.data[Bi(Bu7)]=2;Bs2.data[Bi(Bu8)]=3;Bs2.data[Bi(Bu9)]=4;Bs2.data[Bi(Bu$)]=5;}
function W2(){var a=this;C.call(a);a.n8=null;a.uH=null;a.oJ=null;a.uB=null;}
function Bmq(a,b,c,d){var e=new W2();AQA(e,a,b,c,d);return e;}
function AQA(a,b,c,d,e){a.uB=b;a.n8=c;a.uH=d;a.oJ=e;J(a);}
function A7P(a,b){if(a.n8.readyState==4){if(a.n8.status!=200)a.uH.cs(a.oJ);else{if(Qk(a.uB))(Ep()).fI((((H()).a(B(438))).a(a.oJ)).b());a.uH.cB(a.oJ,$rt_str(a.n8.responseText));}a.uB.ko();}}
function APP(a,b){a.d9(b);}
function Gu(){var a=this;C.call(a);a.Gg=null;a.Gh=null;a.Gj=null;a.Gk=null;a.rZ=null;a.gy=null;a.bA=null;a.bx=null;a.g4=0;a.p3=0;a.nQ=0;a.go=0;a.kg=0;a.hv=0;a.vK=0;a.u7=0;a.em=0;a.uq=0;a.jK=0;a.fT=0;a.db=null;a.lB=null;a.h1=null;a.sn=0;a.gw=0;a.p9=0.0;a.qq=0.0;a.oF=0.0;a.pc=0.0;a.mo=0;a.cA=null;a.ps=0;a.pb=null;a.ke=null;a.kp=null;a.nb=0;a.DT=null;}
var ByE=null;var ByF=null;var ByG=null;var ByH=null;function NC(){NC=L(Gu);A8x();}
function Bmx(){var a=new Gu();AAv(a);return a;}
function AAv(a){NC();J(a);a.Gg=C9();a.Gh=C9();a.Gj=C9();a.Gk=C9();a.rZ=DM();a.bA=Jx();a.bx=A3o();a.lB=Bs();a.h1=BcU(Bvq);a.sn=0;a.p9=0.0;a.qq=1.0;a.oF=0.0;a.pc=1.0;a.mo=0;a.ps=0;a.pb=BH();a.ke=Sa();a.kp=ATV();a.nb=(-1);a.DT=Q();}
function Vz(b){var c,d,e,f;NC();c=Bs();if(Bb(Bx(b,N(1)),N(1)))c.E(Dr(1,3,B(352)));if(Bb(Bx(b,N(2)),N(2)))c.E(Dr(2,4,B(353)));if(Bb(Bx(b,N(4)),N(4)))c.E(Dr(4,4,B(353)));if(Bb(Bx(b,N(8)),N(8)))c.E(Dr(8,3,B(441)));if(Bb(Bx(b,N(16)),N(16)))c.E(Dr(16,2,B(354)));d=Y(Fa,c.j);e=0;while(true){f=d.data;if(e>=f.length)break;f[e]=c.o(e);e=e+1|0;}return AEc(d);}
function A1Z(a,b){a.VD(b,(-1));}
function A9F(a,b,c){var d,e;if(a.gy!==null)G(Tu(B(442)));a.gy=b;a.bA.P();a.bx.P();a.lB.P();a.p3=0;a.nb=(-1);a.nQ=0;a.db=null;a.g4=b.b9/4|0;if(!(a.cA!==null&&a.cA.data.length>=a.g4))a.cA=B5(a.g4);d=Ez(b,1);if(d===null)G(W(B(443)));a.go=d.cp/4|0;a.kg=d.cS;e=Ez(b,8);a.hv=e===null?(-1):e.cp/4|0;e=Ez(b,256);a.vK=e===null?(-1):e.cp/4|0;e=Ez(b,128);a.u7=e===null?(-1):e.cp/4|0;e=Ez(b,2);a.em=e===null?(-1):e.cp/4|0;a.uq=e!==null?e.cS:0;e=Ez(b,4);a.jK=e===null?(-1):e.cp/4|0;e=Ez(b,16);a.fT=e===null?(-1):e.cp/4|0;a.zj(null);a.zB(null);a.E9(null);a.gw
=c;a.kp.yb();}
function NJ(a){if(a.db!==null){a.kp.Qe(a.db.ge);(a.kp.IP(a.db.hg)).di(0.5);a.db.jf=a.db.hg.sK();a.kp.yb();a.db.hG=a.nQ;a.db.hh=a.bx.dc-a.nQ|0;a.nQ=a.bx.dc;a.db=null;}}
function ARM(a,b,c){return a.Pt(b,c,BfY());}
function ANY(a,b,c,d){if(a.gy===null)G(Tu(B(444)));NJ(a);a.db=d;a.db.qz=b;a.db.ii=c;a.gw=c;a.lB.E(a.db);a.zj(null);a.zB(null);a.E9(null);return a.db;}
function ASZ(a,b){var c,d;NJ(a);if(a.gy===null)G(W(B(444)));if(!Qt(a.gy,b.fp()))G(W(B(445)));if(Cp(b.nB(),a.g4)<a.bA.be)G(W((((((((H()).a(B(446))).h(b.nB())).a(B(447))).h(a.g4)).a(B(448))).h(a.bA.be)).b()));if(b.yC()<a.bx.dc)G(W((((((H()).a(B(449))).h(b.yC())).a(B(448))).h(a.bx.dc)).b()));b.wN(a.bA.W,0,a.bA.be);b.S0(a.bx.h7,0,a.bx.dc);c=a.lB.b5();while(c.bG()){d=c.bD();d.ce=b;}a.lB.P();a.gy=null;a.bA.P();a.bx.P();return b;}
function ALu(a){return a.OI(BoR(1,a.bA.be/a.g4|0,a.bx.dc,a.gy));}
function AOe(a){return a.gy;}
function AY0(a){return a.gw;}
function A4f(a,b){var c,d;c=a.h1;d=b===null?0:1;a.sn=d;if(!d){BC();b=Bvq;}c.e5(b);}
function ALN(a,b,c,d,e){a.p9=b;a.oF=c;a.qq=d-b;a.pc=e-c;a.mo=Ed(b)&&Ed(c)&&DN(d,1.0)&&DN(e,1.0)?0:1;}
function AO2(a,b){if(b!==null){a.mo=1;a.Qu(b.Wp(),b.W0(),b.X9(),b.V0());}else{a.mo=0;a.oF=0.0;a.p9=0.0;a.pc=1.0;a.qq=1.0;}}
function AWZ(a,b){a.ps=b===null?0:1;if(!a.ps){a.pb.fL();a.ke.Cc();}else{a.pb.b6(b);((a.ke.F2(b)).EI()).Cl();}}
function AP3(a,b){a.bA.F1(Cp(a.g4,b));}
function A6b(a,b){a.bx.Tv(b);}
function AVU(a,b){if(!a.gw)a.hH(4*b|0);else if(a.gw!=1)a.hH(6*b|0);else a.hH(8*b|0);}
function AQ0(a){return a.nb<<16>>16;}
function AJ5(b,c,d,e){var f,g,h,i,j,k,l;NC();if(d>2){f=b.data;g=ByG;h=f[c];i=c+1|0;j=f[i];k=c+2|0;(g.L(h,j,f[k])).ld(e);f[c]=ByG.m;f[i]=ByG.n;f[k]=ByG.p;}else if(d<=1){f=b.data;f[c]=((ByG.L(f[c],0.0,0.0)).ld(e)).m;}else{f=b.data;g=ByG;l=f[c];k=c+1|0;(g.L(l,f[k],0.0)).ld(e);f[c]=ByG.m;f[k]=ByG.n;}}
function Ke(b,c,d,e){var f,g,h,i,j,k;NC();if(d>2){f=b.data;g=ByG;h=f[c];i=c+1|0;j=f[i];k=c+2|0;((g.L(h,j,f[k])).rM(e)).bV();f[c]=ByG.m;f[i]=ByG.n;f[k]=ByG.p;}else if(d<=1){f=b.data;f[c]=(((ByG.L(f[c],0.0,0.0)).rM(e)).bV()).m;}else{f=b.data;g=ByG;j=f[c];i=c+1|0;((g.L(j,f[i],0.0)).rM(e)).bV();f[c]=ByG.m;f[i]=ByG.n;}}
function VH(a,b,c){var d,e,f,g,h,i,j;d=a.bA.be;a.bA.sA(b,c,a.g4);e=a.p3;a.p3=e+1|0;a.nb=e;if(a.ps){AJ5(a.bA.W,d+a.go|0,a.kg,a.pb);if(a.hv>=0)Ke(a.bA.W,d+a.hv|0,3,a.ke);if(a.vK>=0)Ke(a.bA.W,d+a.vK|0,3,a.ke);if(a.u7>=0)Ke(a.bA.W,d+a.u7|0,3,a.ke);}f=a.bA.W.data[d+a.go|0];g=a.kg<=1?0.0:a.bA.W.data[(d+a.go|0)+1|0];h=a.kg<=2?0.0:a.bA.W.data[(d+a.go|0)+2|0];a.kp.RF(f,g,h);if(a.sn){if(a.em>=0){i=a.bA.W.data;j=d+a.em|0;i[j]=i[j]*a.h1.v;i=a.bA.W.data;j=(d+a.em|0)+1|0;i[j]=i[j]*a.h1.u;i=a.bA.W.data;j=(d+a.em|0)+2|0;i[j]
=i[j]*a.h1.w;if(a.uq>3){i=a.bA.W.data;j=(d+a.em|0)+3|0;i[j]=i[j]*a.h1.H;}}else if(a.jK>=0){AFl(a.rZ,a.bA.W.data[d+a.jK|0]);a.bA.W.data[d+a.jK|0]=(a.rZ.L7(a.h1)).hw();}}if(a.mo&&a.fT>=0){a.bA.W.data[d+a.fT|0]=a.p9+a.qq*a.bA.W.data[d+a.fT|0];a.bA.W.data[(d+a.fT|0)+1|0]=a.oF+a.pc*a.bA.W.data[(d+a.fT|0)+1|0];}}
function A7h(a,b,c,d,e){if(a.p3>65535)G(W(B(450)));a.cA.data[a.go]=b.m;if(a.kg>1)a.cA.data[a.go+1|0]=b.n;if(a.kg>2)a.cA.data[a.go+2|0]=b.p;if(a.hv>=0){if(c===null)c=(a.DT.M(b)).bV();a.cA.data[a.hv]=c.m;a.cA.data[a.hv+1|0]=c.n;a.cA.data[a.hv+2|0]=c.p;}if(a.em>=0){if(d===null){BC();d=Bvq;}a.cA.data[a.em]=d.v;a.cA.data[a.em+1|0]=d.u;a.cA.data[a.em+2|0]=d.w;if(a.uq>3)a.cA.data[a.em+3|0]=d.H;}else if(a.jK>0){if(d===null){BC();d=Bvq;}a.cA.data[a.jK]=d.hw();}if(e!==null&&a.fT>=0){a.cA.data[a.fT]=e.c4;a.cA.data[a.fT
+1|0]=e.c3;}VH(a,a.cA,0);return a.nb<<16>>16;}
function AUj(a,b){return a.N1(!b.rS?null:b.nx,!b.u6?null:b.p5,!b.r_?null:b.po,!b.qc?null:b.kF);}
function A$m(a,b,c,d,e){a.hH(4);a.bx.cl(b);a.bx.cl(c);a.bx.cl(d);a.bx.cl(e);}
function A$s(a,b,c,d,e,f,g){a.hH(6);a.bx.cl(b);a.bx.cl(c);a.bx.cl(d);a.bx.cl(e);a.bx.cl(f);a.bx.cl(g);}
function A5s(a,b,c,d,e,f,g,h,i){a.hH(8);a.bx.cl(b);a.bx.cl(c);a.bx.cl(d);a.bx.cl(e);a.bx.cl(f);a.bx.cl(g);a.bx.cl(h);a.bx.cl(i);}
function AWQ(a,b,c,d,e){if(a.gw==4)a.SI(b,c,d,d,e,b);else if(a.gw==1)a.GL(b,c,c,d,d,e,e,b);else{if(a.gw)G(W(B(451)));a.JH(b,c,d,e);}}
function BdV(a,b,c,d,e){a.vt(4);a.ed(a.dV(b),a.dV(c),a.dV(d),a.dV(e));}
function ATj(a,b,c,d,e,f){var g,h,i,j,k;g=(a.Gg.dY(b,f,null,null)).oI(0.0,1.0);h=(a.Gh.dY(c,f,null,null)).oI(1.0,1.0);i=a.Gj;j=null;k=null;i=(i.dY(d,f,j,k)).oI(1.0,0.0);k=(a.Gk.dY(e,f,null,null)).oI(0.0,0.0);a.Ru(g,h,i,k);}
function AOR(a,b,c,d){BdQ(a,b,c,d);}
function A8x(){ByE=A3o();ByF=Jx();ByG=Q();ByH=null;}
function W1(){var a=this;C.call(a);a.lZ=null;a.vx=null;a.o9=null;a.qo=null;}
function Bm$(a,b,c,d){var e=new W1();BcL(e,a,b,c,d);return e;}
function BcL(a,b,c,d,e){a.qo=b;a.lZ=c;a.vx=d;a.o9=e;J(a);}
function AYw(a,b){var c,d,e,f,g;if(a.lZ.readyState==4){if(a.lZ.status!=200)a.vx.cs(a.o9);else{if(Qk(a.qo))(Ep()).fI((((H()).a(B(452))).a(a.o9)).b());c=a.lZ.response;d=(Tp(a.qo)).hO();e=d.p2();f=e.createElement("script");g=e.createTextNode(c);f.appendChild(g);e.body.appendChild(f);a.vx.cB(a.o9,$rt_str(a.lZ.responseText));}a.qo.ko();}}
function A7$(a,b){a.d9(b);}
var KZ=D(U);
function Bmk(){var a=new KZ();U4(a);return a;}
function U4(a){Bv(a);}
function AEx(a){return ((Dc()).bK(9,13)).cO(32);}
var W8=D();
var Ic=D();
var ByI=null;var ByJ=null;var ByK=null;function ByL(){ByL=L(Ic);AOh();}
function AOh(){ByI=BB();ByJ=BB();ByK=BB();}
var OU=D();
var ByM=null;function ByN(){ByN=L(OU);A1N();}
function A1N(){ByM=I(Iq,[E(My),E(Bn),E(PU),E(Ni),E(N0),E(HZ),E(NX),E(E4),E(Px),E(NL),E(Ql),E(MD),E(QT),E(Is),E(NW),E(P3),E(OD),E(NO),E(Fb),E(PQ),E(QA),E(MZ),E(Pp),E(ON)]);}
var G7=D(HM);
var ByO=null;function A0l(){A0l=L(G7);A6o();}
function BpM(a){var b=new G7();UA(b,a);return b;}
function ByP(){var a=new G7();Jk(a);return a;}
function UA(a,b){A0l();Jb(a);}
function Jk(a){A0l();Jb(a);}
function A6o(){ByO=BpM(0);}
var HN=D(G7);
var ByQ=null;function ATu(){ATu=L(HN);BbG();}
function Bp7(a){var b=new HN();AH3(b,a);return b;}
function ByR(){var a=new HN();JF(a);return a;}
function AH3(a,b){ATu();Jk(a);}
function JF(a){ATu();Jk(a);}
function BbG(){ByQ=Bp7(0);}
var O3=D(0);
var MJ=D(0);
var Q5=D(0);
var Qh=D(0);
var AGM=D();
var No=D(0);
function AEa(){var a=this;C.call(a);a.g$=null;a.HI=null;}
function Sa(){var a=new AEa();ATy(a);return a;}
function ATy(a){J(a);a.g$=B5(9);a.HI=B5(9);a.Cc();}
function BbV(a){var b,c;b=a.g$;c=b.data;c[0]=1.0;c[1]=0.0;c[2]=0.0;c[3]=0.0;c[4]=1.0;c[5]=0.0;c[6]=0.0;c[7]=0.0;c[8]=1.0;return a;}
function ASR(a){var b,c;b=a.g$;c=b.data;return c[0]*c[4]*c[8]+c[3]*c[7]*c[2]+c[6]*c[1]*c[5]-c[0]*c[7]*c[5]-c[3]*c[1]*c[8]-c[6]*c[4]*c[2];}
function Bc0(a){var b,c,d,e,f,g;b=a.Ks();if(b===0.0)G(W(B(453)));c=1.0/b;d=a.HI;e=d.data;f=a.g$;g=f.data;e[0]=g[4]*g[8]-g[5]*g[7];e[1]=g[2]*g[7]-g[1]*g[8];e[2]=g[1]*g[5]-g[2]*g[4];e[3]=g[5]*g[6]-g[3]*g[8];e[4]=g[0]*g[8]-g[2]*g[6];e[5]=g[2]*g[3]-g[0]*g[5];e[6]=g[3]*g[7]-g[4]*g[6];e[7]=g[1]*g[6]-g[0]*g[7];e[8]=g[0]*g[4]-g[1]*g[3];g[0]=c*e[0];g[1]=c*e[1];g[2]=c*e[2];g[3]=c*e[3];g[4]=c*e[4];g[5]=c*e[5];g[6]=c*e[6];g[7]=c*e[7];g[8]=c*e[8];return a;}
function BiV(a,b){var c,d;c=a.g$;d=c.data;d[0]=b.c.data[0];d[1]=b.c.data[1];d[2]=b.c.data[2];d[3]=b.c.data[4];d[4]=b.c.data[5];d[5]=b.c.data[6];d[6]=b.c.data[8];d[7]=b.c.data[9];d[8]=b.c.data[10];return a;}
function A2K(a){var b,c,d,e,f,g,h,i;b=a.g$;c=b.data;d=c[1];e=c[2];f=c[3];g=c[5];h=c[6];i=c[7];c[3]=d;c[6]=e;c[1]=f;c[7]=g;c[2]=h;c[5]=i;return a;}
function YM(){var a=this;In.call(a);a.D7=null;a.tF=null;a.y3=null;a.DW=null;}
function Bkj(a,b){var c=new YM();AZF(c,a,b);return c;}
function AZF(a,b,c){VT(a);a.D7=b;a.tF=c;a.y3=BjH();a.DW=BoD();}
function A$A(a,b){var c,d,e;c=AO3();d=!!b.yQ;c.alpha=d;d=!!b.Ht;c.antialias=d;d=!!b.Cq;c.stencil=d;d=!!b.F3;c.premultipliedAlpha=d;d=!!b.HR;c.preserveDrawingBuffer=d;e=a.tF;d=e.getContext("webgl",c);return d;}
function A$i(a){return a.tF;}
function A2l(a){return A7V();}
function BaG(a){return a.D7;}
function A99(a){var b;b=(a.hO()).p2();return b.createElement("img");}
function Bf1(a){return new XMLHttpRequest();}
function BhW(a){return Bpg();}
function Bht(a){return a.y3;}
function A3d(a){return a.DW;}
function CN(){C.call(this);this.c=null;}
var ByS=null;var ByT=null;var ByU=null;var ByV=null;var ByW=null;var ByX=null;var ByY=null;var ByZ=null;var By0=null;var By1=null;var By2=null;function CU(){CU=L(CN);A3Y();}
function BH(){var a=new CN();XG(a);return a;}
function XG(a){CU();J(a);a.c=B5(16);a.c.data[0]=1.0;a.c.data[5]=1.0;a.c.data[10]=1.0;a.c.data[15]=1.0;}
function Bi6(a,b){return a.Gp(b.c);}
function AMU(a,b){var c;c=b.data;a.c.data[0]=c[0];a.c.data[1]=c[1];a.c.data[2]=c[2];a.c.data[3]=c[3];a.c.data[4]=c[4];a.c.data[5]=c[5];a.c.data[6]=c[6];a.c.data[7]=c[7];a.c.data[8]=c[8];a.c.data[9]=c[9];a.c.data[10]=c[10];a.c.data[11]=c[11];a.c.data[12]=c[12];a.c.data[13]=c[13];a.c.data[14]=c[14];a.c.data[15]=c[15];return a;}
function Bhu(a,b){return a.Kp(b.dy,b.dw,b.dx,b.ei);}
function A8C(a,b,c,d,e){return a.Rt(0.0,0.0,0.0,b,c,d,e);}
function BdJ(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t;i=e*2.0;j=f*2.0;k=g*2.0;l=h*i;m=h*j;n=h*k;o=e*i;p=e*j;q=e*k;r=f*j;s=f*k;t=g*k;a.c.data[0]=1.0-(r+t);a.c.data[4]=p-n;a.c.data[8]=q+m;a.c.data[12]=b;a.c.data[1]=p+n;a.c.data[5]=1.0-(o+t);a.c.data[9]=s-l;a.c.data[13]=c;a.c.data[2]=q-m;a.c.data[6]=s+l;a.c.data[10]=1.0-(o+r);a.c.data[14]=d;a.c.data[3]=0.0;a.c.data[7]=0.0;a.c.data[11]=0.0;a.c.data[15]=1.0;return a;}
function A43(a,b,c,d){return a.MM(b.m,b.n,b.p,c.dy,c.dw,c.dx,c.ei,d.m,d.n,d.p);}
function A1w(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o,p,q,r,s,t,u,v,w;l=e*2.0;m=f*2.0;n=g*2.0;o=h*l;p=h*m;q=h*n;r=e*l;s=e*m;t=e*n;u=f*m;v=f*n;w=g*n;a.c.data[0]=i*(1.0-(u+w));a.c.data[4]=j*(s-q);a.c.data[8]=k*(t+p);a.c.data[12]=b;a.c.data[1]=i*(s+q);a.c.data[5]=j*(1.0-(r+w));a.c.data[9]=k*(v-o);a.c.data[13]=c;a.c.data[2]=i*(t-p);a.c.data[6]=j*(v+o);a.c.data[10]=k*(1.0-(r+u));a.c.data[14]=d;a.c.data[3]=0.0;a.c.data[7]=0.0;a.c.data[11]=0.0;a.c.data[15]=1.0;return a;}
function AUS(a,b){CU();ByS.data[0]=a.c.data[0]*b.c.data[0]+a.c.data[4]*b.c.data[1]+a.c.data[8]*b.c.data[2]+a.c.data[12]*b.c.data[3];ByS.data[4]=a.c.data[0]*b.c.data[4]+a.c.data[4]*b.c.data[5]+a.c.data[8]*b.c.data[6]+a.c.data[12]*b.c.data[7];ByS.data[8]=a.c.data[0]*b.c.data[8]+a.c.data[4]*b.c.data[9]+a.c.data[8]*b.c.data[10]+a.c.data[12]*b.c.data[11];ByS.data[12]=a.c.data[0]*b.c.data[12]+a.c.data[4]*b.c.data[13]+a.c.data[8]*b.c.data[14]+a.c.data[12]*b.c.data[15];ByS.data[1]=a.c.data[1]*b.c.data[0]+a.c.data[5]
*b.c.data[1]+a.c.data[9]*b.c.data[2]+a.c.data[13]*b.c.data[3];ByS.data[5]=a.c.data[1]*b.c.data[4]+a.c.data[5]*b.c.data[5]+a.c.data[9]*b.c.data[6]+a.c.data[13]*b.c.data[7];ByS.data[9]=a.c.data[1]*b.c.data[8]+a.c.data[5]*b.c.data[9]+a.c.data[9]*b.c.data[10]+a.c.data[13]*b.c.data[11];ByS.data[13]=a.c.data[1]*b.c.data[12]+a.c.data[5]*b.c.data[13]+a.c.data[9]*b.c.data[14]+a.c.data[13]*b.c.data[15];ByS.data[2]=a.c.data[2]*b.c.data[0]+a.c.data[6]*b.c.data[1]+a.c.data[10]*b.c.data[2]+a.c.data[14]*b.c.data[3];ByS.data[6]
=a.c.data[2]*b.c.data[4]+a.c.data[6]*b.c.data[5]+a.c.data[10]*b.c.data[6]+a.c.data[14]*b.c.data[7];ByS.data[10]=a.c.data[2]*b.c.data[8]+a.c.data[6]*b.c.data[9]+a.c.data[10]*b.c.data[10]+a.c.data[14]*b.c.data[11];ByS.data[14]=a.c.data[2]*b.c.data[12]+a.c.data[6]*b.c.data[13]+a.c.data[10]*b.c.data[14]+a.c.data[14]*b.c.data[15];ByS.data[3]=a.c.data[3]*b.c.data[0]+a.c.data[7]*b.c.data[1]+a.c.data[11]*b.c.data[2]+a.c.data[15]*b.c.data[3];ByS.data[7]=a.c.data[3]*b.c.data[4]+a.c.data[7]*b.c.data[5]+a.c.data[11]*b.c.data[6]
+a.c.data[15]*b.c.data[7];ByS.data[11]=a.c.data[3]*b.c.data[8]+a.c.data[7]*b.c.data[9]+a.c.data[11]*b.c.data[10]+a.c.data[15]*b.c.data[11];ByS.data[15]=a.c.data[3]*b.c.data[12]+a.c.data[7]*b.c.data[13]+a.c.data[11]*b.c.data[14]+a.c.data[15]*b.c.data[15];return a.Gp(ByS);}
function APa(a){a.c.data[0]=1.0;a.c.data[4]=0.0;a.c.data[8]=0.0;a.c.data[12]=0.0;a.c.data[1]=0.0;a.c.data[5]=1.0;a.c.data[9]=0.0;a.c.data[13]=0.0;a.c.data[2]=0.0;a.c.data[6]=0.0;a.c.data[10]=1.0;a.c.data[14]=0.0;a.c.data[3]=0.0;a.c.data[7]=0.0;a.c.data[11]=0.0;a.c.data[15]=1.0;return a;}
function Beh(a){return a.c.data[0]*a.c.data[5]*a.c.data[10]+a.c.data[4]*a.c.data[9]*a.c.data[2]+a.c.data[8]*a.c.data[1]*a.c.data[6]-a.c.data[0]*a.c.data[9]*a.c.data[6]-a.c.data[4]*a.c.data[1]*a.c.data[10]-a.c.data[8]*a.c.data[5]*a.c.data[2];}
function AMe(a,b,c,d,e){var f,g,h,i,j;a.fL();f=1.0/AYM(d*0.017453292519943295/2.0);g=c+b;h=b-c;i=g/h;j=2.0*c*b/h;a.c.data[0]=f/e;a.c.data[1]=0.0;a.c.data[2]=0.0;a.c.data[3]=0.0;a.c.data[4]=0.0;a.c.data[5]=f;a.c.data[6]=0.0;a.c.data[7]=0.0;a.c.data[8]=0.0;a.c.data[9]=0.0;a.c.data[10]=i;a.c.data[11]=(-1.0);a.c.data[12]=0.0;a.c.data[13]=0.0;a.c.data[14]=j;a.c.data[15]=0.0;return a;}
function BaO(a,b,c,d,e){a.AO(b,b+d,c,c+e,0.0,1.0);return a;}
function Bbt(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a.fL();h=c-b;i=2.0/h;j=e-d;k=2.0/j;l=g-f;m=(-2.0)/l;n= -(c+b)/h;o= -(e+d)/j;p= -(g+f)/l;a.c.data[0]=i;a.c.data[1]=0.0;a.c.data[2]=0.0;a.c.data[3]=0.0;a.c.data[4]=0.0;a.c.data[5]=k;a.c.data[6]=0.0;a.c.data[7]=0.0;a.c.data[8]=0.0;a.c.data[9]=0.0;a.c.data[10]=m;a.c.data[11]=0.0;a.c.data[12]=n;a.c.data[13]=o;a.c.data[14]=p;a.c.data[15]=1.0;return a;}
function ANp(a,b,c,d){a.fL();a.c.data[12]=b;a.c.data[13]=c;a.c.data[14]=d;return a;}
function A4K(a,b,c){if(c===0.0){a.fL();return a;}CU();return a.Iy(ByT.xN(b,c));}
function APK(a,b,c){CU();(ByV.M(b)).bV();(ByW.M(b)).bV();(ByW.iX(c)).bV();((ByX.M(ByW)).iX(ByV)).bV();a.fL();a.c.data[0]=ByW.m;a.c.data[4]=ByW.n;a.c.data[8]=ByW.p;a.c.data[1]=ByX.m;a.c.data[5]=ByX.n;a.c.data[9]=ByX.p;a.c.data[2]= -ByV.m;a.c.data[6]= -ByV.n;a.c.data[10]= -ByV.p;return a;}
function A8s(a,b,c,d){CU();(ByY.M(c)).fK(b);a.Ve(ByY,d);a.hW(ByZ.LC( -b.m, -b.n, -b.p));return a;}
function AMy(a,b){b.m=a.c.data[12];b.n=a.c.data[13];b.p=a.c.data[14];return b;}
function RH(b,c){var d,e,f,g;CU();d=c.data;e=b.data;f=B5(16);g=f.data;g[0]=e[0]*d[0]+e[4]*d[1]+e[8]*d[2]+e[12]*d[3];g[4]=e[0]*d[4]+e[4]*d[5]+e[8]*d[6]+e[12]*d[7];g[8]=e[0]*d[8]+e[4]*d[9]+e[8]*d[10]+e[12]*d[11];g[12]=e[0]*d[12]+e[4]*d[13]+e[8]*d[14]+e[12]*d[15];g[1]=e[1]*d[0]+e[5]*d[1]+e[9]*d[2]+e[13]*d[3];g[5]=e[1]*d[4]+e[5]*d[5]+e[9]*d[6]+e[13]*d[7];g[9]=e[1]*d[8]+e[5]*d[9]+e[9]*d[10]+e[13]*d[11];g[13]=e[1]*d[12]+e[5]*d[13]+e[9]*d[14]+e[13]*d[15];g[2]=e[2]*d[0]+e[6]*d[1]+e[10]*d[2]+e[14]*d[3];g[6]=e[2]*d[4]
+e[6]*d[5]+e[10]*d[6]+e[14]*d[7];g[10]=e[2]*d[8]+e[6]*d[9]+e[10]*d[10]+e[14]*d[11];g[14]=e[2]*d[12]+e[6]*d[13]+e[10]*d[14]+e[14]*d[15];g[3]=e[3]*d[0]+e[7]*d[1]+e[11]*d[2]+e[15]*d[3];g[7]=e[3]*d[4]+e[7]*d[5]+e[11]*d[6]+e[15]*d[7];g[11]=e[3]*d[8]+e[7]*d[9]+e[11]*d[10]+e[15]*d[11];g[15]=e[3]*d[12]+e[7]*d[13]+e[11]*d[14]+e[15]*d[15];Bc(f,0,b,0,16);}
function Y4(b){var c;CU();c=b.data;return c[3]*c[6]*c[9]*c[12]-c[2]*c[7]*c[9]*c[12]-c[3]*c[5]*c[10]*c[12]+c[1]*c[7]*c[10]*c[12]+c[2]*c[5]*c[11]*c[12]-c[1]*c[6]*c[11]*c[12]-c[3]*c[6]*c[8]*c[13]+c[2]*c[7]*c[8]*c[13]+c[3]*c[4]*c[10]*c[13]-c[0]*c[7]*c[10]*c[13]-c[2]*c[4]*c[11]*c[13]+c[0]*c[6]*c[11]*c[13]+c[3]*c[5]*c[8]*c[14]-c[1]*c[7]*c[8]*c[14]-c[3]*c[4]*c[9]*c[14]+c[0]*c[7]*c[9]*c[14]+c[1]*c[4]*c[11]*c[14]-c[0]*c[5]*c[11]*c[14]-c[2]*c[5]*c[8]*c[15]+c[1]*c[6]*c[8]*c[15]+c[2]*c[4]*c[9]*c[15]-c[0]*c[6]*c[9]*c[15]
-c[1]*c[4]*c[10]*c[15]+c[0]*c[5]*c[10]*c[15];}
function T8(b){var c,d,e,f,g;CU();c=B5(16);d=Y4(b);if(d===0.0)return 0;e=c.data;f=b.data;e[0]=f[9]*f[14]*f[7]-f[13]*f[10]*f[7]+f[13]*f[6]*f[11]-f[5]*f[14]*f[11]-f[9]*f[6]*f[15]+f[5]*f[10]*f[15];e[4]=f[12]*f[10]*f[7]-f[8]*f[14]*f[7]-f[12]*f[6]*f[11]+f[4]*f[14]*f[11]+f[8]*f[6]*f[15]-f[4]*f[10]*f[15];e[8]=f[8]*f[13]*f[7]-f[12]*f[9]*f[7]+f[12]*f[5]*f[11]-f[4]*f[13]*f[11]-f[8]*f[5]*f[15]+f[4]*f[9]*f[15];e[12]=f[12]*f[9]*f[6]-f[8]*f[13]*f[6]-f[12]*f[5]*f[10]+f[4]*f[13]*f[10]+f[8]*f[5]*f[14]-f[4]*f[9]*f[14];e[1]=f[13]
*f[10]*f[3]-f[9]*f[14]*f[3]-f[13]*f[2]*f[11]+f[1]*f[14]*f[11]+f[9]*f[2]*f[15]-f[1]*f[10]*f[15];e[5]=f[8]*f[14]*f[3]-f[12]*f[10]*f[3]+f[12]*f[2]*f[11]-f[0]*f[14]*f[11]-f[8]*f[2]*f[15]+f[0]*f[10]*f[15];e[9]=f[12]*f[9]*f[3]-f[8]*f[13]*f[3]-f[12]*f[1]*f[11]+f[0]*f[13]*f[11]+f[8]*f[1]*f[15]-f[0]*f[9]*f[15];e[13]=f[8]*f[13]*f[2]-f[12]*f[9]*f[2]+f[12]*f[1]*f[10]-f[0]*f[13]*f[10]-f[8]*f[1]*f[14]+f[0]*f[9]*f[14];e[2]=f[5]*f[14]*f[3]-f[13]*f[6]*f[3]+f[13]*f[2]*f[7]-f[1]*f[14]*f[7]-f[5]*f[2]*f[15]+f[1]*f[6]*f[15];e[6]
=f[12]*f[6]*f[3]-f[4]*f[14]*f[3]-f[12]*f[2]*f[7]+f[0]*f[14]*f[7]+f[4]*f[2]*f[15]-f[0]*f[6]*f[15];e[10]=f[4]*f[13]*f[3]-f[12]*f[5]*f[3]+f[12]*f[1]*f[7]-f[0]*f[13]*f[7]-f[4]*f[1]*f[15]+f[0]*f[5]*f[15];e[14]=f[12]*f[5]*f[2]-f[4]*f[13]*f[2]-f[12]*f[1]*f[6]+f[0]*f[13]*f[6]+f[4]*f[1]*f[14]-f[0]*f[5]*f[14];e[3]=f[9]*f[6]*f[3]-f[5]*f[10]*f[3]-f[9]*f[2]*f[7]+f[1]*f[10]*f[7]+f[5]*f[2]*f[11]-f[1]*f[6]*f[11];e[7]=f[4]*f[10]*f[3]-f[8]*f[6]*f[3]+f[8]*f[2]*f[7]-f[0]*f[10]*f[7]-f[4]*f[2]*f[11]+f[0]*f[6]*f[11];e[11]=f[8]*f[5]
*f[3]-f[4]*f[9]*f[3]-f[8]*f[1]*f[7]+f[0]*f[9]*f[7]+f[4]*f[1]*f[11]-f[0]*f[5]*f[11];e[15]=f[4]*f[9]*f[2]-f[8]*f[5]*f[2]+f[8]*f[1]*f[6]-f[0]*f[9]*f[6]-f[4]*f[1]*f[10]+f[0]*f[5]*f[10];g=1.0/d;f[0]=e[0]*g;f[4]=e[4]*g;f[8]=e[8]*g;f[12]=e[12]*g;f[1]=e[1]*g;f[5]=e[5]*g;f[9]=e[9]*g;f[13]=e[13]*g;f[2]=e[2]*g;f[6]=e[6]*g;f[10]=e[10]*g;f[14]=e[14]*g;f[3]=e[3]*g;f[7]=e[7]*g;f[11]=e[11]*g;f[15]=e[15]*g;return 1;}
function AED(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;CU();e=b.data;f=c.data;g=d+0|0;h=f[g]*e[3];i=d+1|0;j=h+f[i]*e[7];k=d+2|0;l=1.0/(j+f[k]*e[11]+e[15]);m=(f[g]*e[0]+f[i]*e[4]+f[k]*e[8]+e[12])*l;n=(f[g]*e[1]+f[i]*e[5]+f[k]*e[9]+e[13])*l;o=(f[g]*e[2]+f[i]*e[6]+f[k]*e[10]+e[14])*l;f[g]=m;f[i]=n;f[k]=o;}
function G1(b,c){CU();RH(b,c);}
function Yy(b,c,d,e,f){var g;CU();g=0;while(g<e){AED(b,c,d);d=d+f|0;g=g+1|0;}}
function Pc(b){CU();return T8(b);}
function A_c(a,b,c,d){CU();ByS.data[0]=1.0;ByS.data[4]=0.0;ByS.data[8]=0.0;ByS.data[12]=b;ByS.data[1]=0.0;ByS.data[5]=1.0;ByS.data[9]=0.0;ByS.data[13]=c;ByS.data[2]=0.0;ByS.data[6]=0.0;ByS.data[10]=1.0;ByS.data[14]=d;ByS.data[3]=0.0;ByS.data[7]=0.0;ByS.data[11]=0.0;ByS.data[15]=1.0;G1(a.c,ByS);return a;}
function A4x(a,b,c){if(c===0.0)return a;CU();ByT.xN(b,c);return a.PK(ByT);}
function AXP(a,b){CU();b.M4(ByS);G1(a.c,ByS);return a;}
function Bco(a){var b,c;a:{b:{if(!DN(a.c.data[0],1.0))break b;if(!DN(a.c.data[5],1.0))break b;if(!DN(a.c.data[10],1.0))break b;b=a.c.data[4];if(!Ed(b))break b;if(!Ed(a.c.data[8]))break b;if(!Ed(a.c.data[1]))break b;if(!Ed(a.c.data[9]))break b;b=a.c.data[2];if(!Ed(b))break b;if(Ed(a.c.data[6])){c=0;break a;}}c=1;}return c;}
function A3Y(){ByS=B5(16);ByT=AA$();ByU=AA$();ByV=Q();ByW=Q();ByX=Q();ByY=Q();ByZ=BH();By0=Q();By1=Q();By2=Q();}
var Lx=D();
var By3=null;function By4(){By4=L(Lx);Bgt();}
function Bgt(){By3=Be((LN()).data.length);By3.data[Bi(BwC)]=1;By3.data[Bi(BwD)]=2;By3.data[Bi(BwE)]=3;By3.data[Bi(Bwv)]=4;By3.data[Bi(Bww)]=5;By3.data[Bi(Bwx)]=6;By3.data[Bi(Bwy)]=7;By3.data[Bi(BwB)]=8;By3.data[Bi(Bwz)]=9;By3.data[Bi(BwA)]=10;}
var AJ4=D(Bt);
function Bg8(){var a=new AJ4();BcP(a);return a;}
function BcP(a){CQ(a);}
var AD9=D(BL);
function HP(){C.call(this);this.fb=null;}
var By5=null;var By6=null;var By7=null;function FD(){FD=L(HP);AU4();}
function A51(){var a=new HP();Zz(a);return a;}
function Ug(){FD();if(By7===null)By7=A51();return By7;}
function Zz(a){FD();J(a);a.fb=A6a(0,8);a.Jk();}
function BgR(a,b,c){return a.Ih(b,c,0.0,0);}
function Bhm(a,b,c,d,e){var f,g,$$je;if(b.dQ!=(-1))G(Z(B(454)));b.iF=CS(Gc(CV(),N(1000000)),Brd(c*1000.0));b.tJ=Brd(d*1000.0);b.dQ=e;f=a.fb;E_(f);a:{try{a.fb.E(b);Cw(f);}catch($$e){$$je=T($$e);g=$$je;break a;}Pr();return b;}Cw(f);G(g);}
function A0X(a){var b,c,d,$$je;FD();b=By5;E_(b);a:{b:{try{if(!By5.iR(a,1))break b;Cw(b);}catch($$e){$$je=T($$e);c=$$je;break a;}return;}c:{try{By5.E(a);if(By6!==null)break c;d=(E3()).hO();By6=Bm0(d.UB());break c;}catch($$e){$$je=T($$e);c=$$je;break a;}}try{Pr();Cw(b);}catch($$e){$$je=T($$e);c=$$je;break a;}return;}Cw(b);G(c);}
function AZr(a,b,c){var d,e,f,g,h,$$je;d=a.fb;E_(d);a:{try{e=0;f=a.fb.j;while(e<f){g=a.fb.o(e);if(IR(g.iF,b))c=YH(c,EI(g.iF,b));else{if(g.dQ!=(-1)){if(!g.dQ)g.dQ=(-1);Bsf.PS(g);}if(g.dQ==(-1)){a.fb.tr(e);e=e+(-1)|0;f=f+(-1)|0;}else{g.iF=CS(b,g.tJ);c=YH(c,g.tJ);if(g.dQ>0)g.dQ=g.dQ-1|0;}}e=e+1|0;}Cw(d);}catch($$e){$$je=T($$e);h=$$je;break a;}return c;}Cw(d);G(h);}
function AWa(a,b){var c,d,e,f,g,$$je;c=a.fb;E_(c);a:{try{d=0;e=a.fb.j;while(d<e){f=a.fb.o(d);f.iF=CS(f.iF,b);d=d+1|0;}Cw(c);}catch($$e){$$je=T($$e);g=$$je;break a;}return;}Cw(c);G(g);}
function Pr(){var b,c,$$je;FD();b=By5;E_(b);a:{try{By6.ow(0);Cw(b);}catch($$e){$$je=T($$e);c=$$je;break a;}return;}Cw(b);G(c);}
function AJz(b,c){FD();return (Ug()).HS(b,c);}
function AU4(){By5=El(1);By7=A51();}
var ADU=D(G0);
function BkN(a){var b=new ADU();Ba_(b,a);return b;}
function Ba_(a,b){Mv(a,b);}
var AAJ=D(DT);
function UT(){R.call(this);this.PP=0.0;}
function BkD(a){var b=new UT();AMr(b,a);return b;}
function AMr(a,b){B6(a);a.PP=b*2.0;}
function VS(){var a=this;Dz.call(a);a.uR=0;a.qu=0;}
function Bnf(a,b,c){var d=new VS();Bdd(d,a,b,c);return d;}
function Bdd(a,b,c,d){HT(a,b,0.5,0.5);a.uR=c;a.qu=d;}
function A0d(a,b,c,d,e,f,g,h){var i,j,k,l;if(a.uR){if((c+2|0)>d){if(h.uL())i=null;else{Bq();i=Bsc;}return i;}j=b.data;a.uR=0;k=c+1|0;l=j[c];if(l==(-1)){if(j[k]!=(-2))c=k+(-1)|0;else{c=k+1|0;a.qu=1;}}else if(l!=(-2))c=k+(-1)|0;else if(j[k]!=(-1))c=k+(-1)|0;else{c=k+1|0;a.qu=0;}}return !a.qu?Ve(a,b,c,d,e,f,g,h):AIA(a,b,c,d,e,f,g,h);}
function AIA(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=null;a:{while(c<d){if(f>=g)break a;if((c+2|0)>d){if(h.d2(2))break a;Bq();i=Bsc;break a;}j=b.data;k=c+1|0;l=j[c]&255;c=k+1|0;m=j[k]&255;n=(l|m<<8)&65535;if(!Cb(n)){if(BU(n)){c=c+(-2)|0;i=B8(2);break a;}j=e.data;k=f+1|0;j[f]=n;f=k;}else{if((c+2|0)>=d){if(!h.d2(4)){Bq();i=Bsc;}c=c+(-2)|0;break a;}k=c+1|0;o=j[c]&255;c=k+1|0;k=j[k]&255;p=(o|k<<8)&65535;if(!BU(p)){c=c+(-4)|0;i=B8(4);break a;}if((f+2|0)>g){if(h.eu(2))break a;Bq();i=Bsb;break a;}j=e.data;k=f+1|0;j[f]
=n;f=k+1|0;j[k]=p;}}}h.eB(c);h.d6(f);return i;}
function Ve(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=null;a:{while(c<d){if(f>=g)break a;if((c+2|0)>d){if(h.d2(2))break a;Bq();i=Bsc;break a;}j=b.data;k=c+1|0;l=j[c]&255;c=k+1|0;m=j[k]&255;n=(m|l<<8)&65535;if(!Cb(n)){if(BU(n)){c=c+(-2)|0;i=B8(2);break a;}j=e.data;k=f+1|0;j[f]=n;f=k;}else{if((c+2|0)>=d){if(!h.d2(4)){Bq();i=Bsc;}c=c+(-2)|0;break a;}k=c+1|0;o=j[c]&255;c=k+1|0;k=j[k]&255;p=(k|o<<8)&65535;if(!BU(p)){c=c+(-4)|0;i=B8(4);break a;}if((f+2|0)>g){if(h.eu(2))break a;Bq();i=Bsb;break a;}j=e.data;k=f+1|0;j[f]
=n;f=k+1|0;j[k]=p;}}}h.eB(c);h.d6(f);return i;}
var AHR=D(Ll);
function Bk9(){var a=new AHR();A$4(a);return a;}
function A$4(a){ACt(a);}
function ADQ(a,b){var c;c=Bo6(a,b);return c;}
function AUt(a,b,c){return setTimeout(BJ(ADQ(a,b),"onTimer"),c);}
function ATD(a,b){clearInterval(b);}
function ASb(a,b){clearTimeout(b);}
function A_W(b,c){AE9(b,c);}
function ABw(){var a=this;C.call(a);a.oa=null;a.qE=0;a.il=null;a.mR=null;}
function BmY(a){var b=new ABw();Bdq(b,a);return b;}
function By8(a,b){var c=new ABw();AJW(c,a,b);return c;}
function Bdq(a,b){AJW(a,b,1);}
function AJW(a,b,c){J(a);a.oa=b;a.qE=c;}
function A9$(a){if(Bwn)return M4(a.oa,a.qE);if(a.il===null){a.il=M4(a.oa,a.qE);a.mR=M4(a.oa,a.qE);}if(a.il.gJ){a.mR.hk=0;a.mR.gJ=1;a.il.gJ=0;return a.mR;}a.il.hk=0;a.il.gJ=1;a.mR.gJ=0;return a.il;}
var AFY=D(Cg);
function If(){var a=new AFY();Be7(a);return a;}
function C8(a){var b=new AFY();BcI(b,a);return b;}
function Be7(a){Gb(a);}
function BcI(a,b){Os(a,b);}
var AJE=D();
var KY=D();
function Y5(a){J(a);}
function A75(a,b){var c,d,e,f;c=b.data;d=a.dr();e=c.length;if(e<d)b=Nw((Co(b)).gC(),d);else while(d<e){c[d]=null;d=d+1|0;}d=0;f=a.fG();while(f.bG()){c=b.data;e=d+1|0;c[d]=f.bD();d=e;}return b;}
function Kn(){KY.call(this);this.g9=0;}
function AEM(a){Y5(a);}
function APH(a){return Bnv(a);}
var UX=D(EX);
function BkM(a,b,c,d){var e=new UX();Bc5(e,a,b,c,d);return e;}
function Bc5(a,b,c,d,e){MW(a,b,c,d,e);}
function BeV(a,b,c,d){var e,f,g,h,i;e=a.gv.jB();f=a.gv.i4();g=0;while(true){if(g>=e){a:{while(true){h=a.l.e(b,c,d);if(h>=0)break;if((b+a.bz.co()|0)<=d.O()){h=a.bz.bM(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.bz.co()|0)>d.O()){d.eg=1;return (-1);}i=a.bz.bM(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
var Vq=D(CT);
var OK=D(0);
function JW(){C.call(this);this.q1=null;}
function WJ(a){J(a);a.q1=Bs();}
function A$T(a,b){var c,d,e;c=b.lf;if(c!==null&&c.vO(b))return c;d=a.q1.b5();while(true){if(!d.bG()){e=a.Id(b);if(e.vO(b)){e.Ga();a.q1.E(e);return e;}G(W(B(455)));}e=d.bD();if(e.vO(b))break;}return e;}
function Gv(){var a=this;Dd.call(a);a.bN=0;a.D=null;a.hB=null;}
function AA6(a,b,c,d,e,f){GQ(a,c);Fn();a.hB=By9;a.bN=b;a.D=d;a.G=e;a.bg=f;}
function G8(b){if(b>=0)return A_C(b,1);G(Z((((H()).a(B(294))).h(b)).b()));}
function Vv(b){if(b>=0)return A_C(b,0);G(Z((((H()).a(B(294))).h(b)).b()));}
function AER(b,c,d){return Boa(0,b.data.length,b,c,c+d|0,0,0);}
function IV(b){return AER(b,0,b.data.length);}
function A64(a,b,c,d){var e,f,g,h,i,j;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bm((((((H()).a(B(456))).h(g)).a(B(296))).h(f)).b()));if(Bf(a)<d)G(Zn());if(d<0)G(Bm(((((H()).a(B(297))).h(d)).a(B(298))).b()));h=a.G+a.bN|0;i=0;while(i<d){g=c+1|0;j=a.D.data;f=h+1|0;e[c]=j[h];i=i+1|0;c=g;h=f;}a.G=a.G+d|0;return a;}}e=b.data;G(Bm(((((((H()).a(B(299))).h(c)).a(B(56))).h(e.length)).a(B(21))).b()));}
function AWn(a,b){return a.BA(b,0,b.data.length);}
function BgS(a,b,c,d){var e,f,g,h,i,j;if(!d)return a;if(a.ci())G(Dv());if(Bf(a)<d)G(Hb());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bm((((((H()).a(B(457))).h(g)).a(B(296))).h(f)).b()));if(d<0)G(Bm(((((H()).a(B(297))).h(d)).a(B(298))).b()));h=a.G+a.bN|0;i=0;while(i<d){j=a.D.data;g=h+1|0;f=c+1|0;j[h]=e[c];i=i+1|0;h=g;c=f;}a.G=a.G+d|0;return a;}}e=b.data;G(Bm(((((((H()).a(B(299))).h(c)).a(B(56))).h(e.length)).a(B(21))).b()));}
function ADP(a,b){return a.yk(b,0,b.data.length);}
function A42(a){return 1;}
function I_(a){return a.D;}
function GO(a,b){a.hB=b;return a;}
function LV(a){Ha(a);return a;}
function Lk(a){It(a);return a;}
function A74(a,b){KK(a,b);return a;}
function AY5(a,b){H2(a,b);return a;}
function ANh(a){return Lk(a);}
function AWF(a,b){return a.QF(b);}
function A3O(a,b){return a.gh(b);}
var UY=D(Bz);
function AZC(){var a=new UY();AOK(a);return a;}
function AOK(a){CJ(a);}
function A_Q(a,b,c,d){if(b&&!(d.jZ()&&b==d.dW()))return (-1);return a.l.e(b,c,d);}
function A$z(a,b){return 0;}
function AUY(a){return B(458);}
function Ea(){var a=this;C.call(a);a.m=0.0;a.n=0.0;a.p=0.0;}
var BxZ=null;var Bx0=null;var BxX=null;var BxW=null;var By$=null;function JB(){JB=L(Ea);ALV();}
function Q(){var a=new Ea();AFG(a);return a;}
function CB(a,b,c){var d=new Ea();U6(d,a,b,c);return d;}
function AFG(a){JB();J(a);}
function U6(a,b,c,d){JB();J(a);a.L(b,c,d);}
function A_4(a,b,c,d){a.m=b;a.n=c;a.p=d;return a;}
function AOB(a,b){return a.L(b.m,b.n,b.p);}
function AZx(a,b){return a.Cz(b.m,b.n,b.p);}
function ATi(a,b,c,d){return a.L(a.m+b,a.n+c,a.p+d);}
function AU9(a,b){return a.Mw(b.m,b.n,b.p);}
function AYX(a,b,c,d){return a.L(a.m-b,a.n-c,a.p-d);}
function BeR(a,b){return a.L(a.m*b,a.n*b,a.p*b);}
function Yv(b,c,d){JB();return Fz(b*b+c*c+d*d);}
function BiX(a){return Fz(a.m*a.m+a.n*a.n+a.p*a.p);}
function ANU(a){return a.m*a.m+a.n*a.n+a.p*a.p;}
function A7U(a,b){var c,d,e;c=b.m-a.m;d=b.n-a.n;e=b.p-a.p;return Fz(c*c+d*d+e*e);}
function AQh(a,b){var c,d,e;c=b.m-a.m;d=b.n-a.n;e=b.p-a.p;return c*c+d*d+e*e;}
function Bji(a){var b;b=a.vd();if(b!==0.0&&b!==1.0)return a.di(1.0/Fz(b));return a;}
function AZU(a,b){return a.m*b.m+a.n*b.n+a.p*b.p;}
function A7c(a,b){return a.L(a.n*b.p-a.p*b.n,a.p*b.m-a.m*b.p,a.m*b.n-a.n*b.m);}
function BaA(a,b,c,d){return a.L(a.n*d-a.p*c,a.p*b-a.m*d,a.m*c-a.n*b);}
function AYK(a,b){var c,d;c=b.c;d=c.data;return a.L(a.m*d[0]+a.n*d[4]+a.p*d[8]+d[12],a.m*d[1]+a.n*d[5]+a.p*d[9]+d[13],a.m*d[2]+a.n*d[6]+a.p*d[10]+d[14]);}
function A4k(a,b){var c,d;c=b.g$;d=c.data;return a.L(a.m*d[0]+a.n*d[3]+a.p*d[6],a.m*d[1]+a.n*d[4]+a.p*d[7],a.m*d[2]+a.n*d[5]+a.p*d[8]);}
function A6x(a,b){var c,d,e;c=b.c;d=c.data;e=1.0/(a.m*d[3]+a.n*d[7]+a.p*d[11]+d[15]);return a.L((a.m*d[0]+a.n*d[4]+a.p*d[8]+d[12])*e,(a.m*d[1]+a.n*d[5]+a.p*d[9]+d[13])*e,(a.m*d[2]+a.n*d[6]+a.p*d[10]+d[14])*e);}
function AOO(a,b,c){JB();By$.TI(b,c);return a.ld(By$);}
function Bjc(a){return a.m===0.0&&a.n===0.0&&a.p===0.0?1:0;}
function AVG(a,b,c){a.m=a.m+c*(b.m-a.m);a.n=a.n+c*(b.n-a.n);a.p=a.p+c*(b.p-a.p);return a;}
function AMG(a){return ((((((((H()).a(B(19))).b$(a.m)).a(B(20))).b$(a.n)).a(B(20))).b$(a.p)).a(B(21))).b();}
function Be0(a){var b;b=31+CX(a.m)|0;b=(31*b|0)+CX(a.n)|0;b=(31*b|0)+CX(a.p)|0;return b;}
function AOx(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(Co(a)!==Co(b))return 0;c=b;if(CX(a.m)!=CX(c.m))return 0;if(CX(a.n)!=CX(c.n))return 0;if(CX(a.p)==CX(c.p))return 1;return 0;}
function AQl(a){a.m=0.0;a.n=0.0;a.p=0.0;return a;}
function ALV(){BxZ=CB(1.0,0.0,0.0);Bx0=CB(0.0,1.0,0.0);BxX=CB(0.0,0.0,1.0);BxW=CB(0.0,0.0,0.0);By$=BH();}
function HS(){var a=this;C.call(a);a.c4=0.0;a.c3=0.0;}
var By_=null;var Bza=null;var Bzb=null;function AWy(){AWy=L(HS);A6u();}
function BB(){var a=new HS();V7(a);return a;}
function ABh(a,b){var c=new HS();XV(c,a,b);return c;}
function V7(a){AWy();J(a);}
function XV(a,b,c){AWy();J(a);a.c4=b;a.c3=c;}
function A9Q(a){return Fz(a.c4*a.c4+a.c3*a.c3);}
function A5X(a,b){a.c4=b.c4;a.c3=b.c3;return a;}
function AKb(a,b,c){a.c4=b;a.c3=c;return a;}
function BfG(a){var b;b=a.sK();if(b!==0.0){a.c4=a.c4/b;a.c3=a.c3/b;}return a;}
function AWP(a,b){var c,d;c=b.c4-a.c4;d=b.c3-a.c3;return Fz(c*c+d*d);}
function A6u(){By_=ABh(1.0,0.0);Bza=ABh(0.0,1.0);Bzb=ABh(0.0,0.0);}
function FX(){var a=this;C.call(a);a.xq=null;a.uI=X;a.qT=X;a.sZ=X;}
function Bzc(a,b,c,d){var e=new FX();Q1(e,a,b,c,d);return e;}
function Bzd(a,b,c){var d=new FX();AAe(d,a,b,c);return d;}
function C5(a,b){var c=new FX();Ii(c,a,b);return c;}
function Br(a){var b=new FX();AZw(b,a);return b;}
function Q1(a,b,c,d,e){J(a);a.xq=b;a.uI=c;a.qT=d;a.sZ=e;}
function AAe(a,b,c,d){Q1(a,b,c,d,X);}
function Ii(a,b,c){Q1(a,b,X,X,c);}
function AZw(a,b){AAe(a,b,X,X);}
function AWp(a,b,c,d){var e,f;e=d!==null&&d.dm!==null?EY(d.dm):X;f=d!==null&&d.cE!==null?EY(d.cE):X;return Bb(Bx(e,a.uI),a.uI)&&Bb(Bx(f,a.qT),a.qT)&&Bb(Bx(B1(e,f),a.sZ),a.sZ)?1:0;}
function J0(){BV.call(this);this.hF=null;}
var BxE=X;function Lr(){Lr=L(J0);A9M();}
function BkY(){var a=new J0();LA(a);return a;}
function BoN(a){var b=new J0();V1(b,a);return b;}
function LA(a){Lr();Ge(a,BxE);a.hF=El(1);}
function V1(a,b){Lr();LA(a);a.hF.rm(b.hF);}
function Bcf(a){return BoN(a);}
function AVt(a){var b,c,d;b=Hd(a);c=a.hF.b5();while(c.bG()){d=c.bD();b=(1229*b|0)+(d!==null?d.bl():0)|0;}return b;}
function Bfn(a){return a.Vp();}
function A9M(){BxE=B2(B(459));}
var AH_=D(Ci);
var Of=D(G6);
var Bze=null;function AX7(){AX7=L(Of);BdK();}
function BkP(a){var b=new Of();V3(b,a);return b;}
function Bo2(a){var b=new Of();Zo(b,a);return b;}
function V3(a,b){AX7();Lb(a);a.c1(N(AGY(V((b.b2())))),1);}
function Zo(a,b){AX7();Lb(a);}
function BdK(){Bze=Bo2(0);}
function AGY(b){var otherJSObj=Bullet.wrapPointer(b,Bullet.btCollisionConfiguration);var jsObj=new Bullet.btCollisionDispatcher(otherJSObj);return Bullet.getPointer(jsObj);}
function AHF(){var a=this;F6.call(a);a.hn=null;a.hf=null;a.mn=0;}
function Bpd(a){var b=new AHF();A6p(b,a);return b;}
function A6p(a,b){Q2(a,b);}
function A8N(a){RT(a);a.hn=a.T;a.mn=a.mn+1|0;return a.T;}
function A6j(a){var b,c;a.mn=Bj(0,a.mn-1|0);if(a.hn===null)return;a:{if(a.hn!==a.T&&!a.mn){a.hf=a.hn;b=0;c=a.hf.data.length;while(true){if(b>=c)break a;a.hf.data[b]=null;b=b+1|0;}}}a.hn=null;}
function RT(a){if(a.hn!==null&&a.hn===a.T){if(a.hf!==null&&a.hf.data.length>=a.j){Bc(a.T,0,a.hf,0,a.j);a.T=a.hf;a.hf=null;}else a.kz(a.T.data.length);return;}}
var ADZ=D(DX);
function S$(){C.call(this);this.qh=null;}
function SO(a){var b=new S$();AZ6(b,a);return b;}
function AZ6(a,b){J(a);a.qh=b;}
function GM(a){return a.qh.Dj();}
function Xy(a,b){a.qh.BX(b);}
function AJZ(a,b){var c,d,$$je;if(b===null)b=Y(C,0);a:{b:{c:{try{c=a.qh.Ek(b);}catch($$e){$$je=T($$e);if($$je instanceof Dn){d=$$je;break c;}else if($$je instanceof Nh){d=$$je;break a;}else if($$je instanceof Om){d=$$je;break b;}else if($$je instanceof Oz){d=$$je;G(Fp((((H()).a(B(460))).a((GM(a)).x())).b(),d));}else{throw $$e;}}return c;}G(Fp((((H()).a(B(461))).a((GM(a)).x())).b(),d));}G(Fp((((H()).a(B(462))).a((GM(a)).x())).b(),d));}G(Fp((((H()).a(B(462))).a((GM(a)).x())).b(),d));}
var AC_=D();
function AIP(){var a=this;Gk.call(a);a.Cf=0;a.tf=0;a.uW=null;}
function Bpi(a,b,c,d,e,f){var g=new AIP();BiW(g,a,b,c,d,e,f);return g;}
function BiW(a,b,c,d,e,f,g){Nt(a,c,e,f);a.tf=b;a.Cf=g;a.uW=d;}
function AQo(a,b){return a.uW.data[b+a.tf|0];}
function A$N(a,b,c){a.uW.data[b+a.tf|0]=c;}
function A68(a){return a.Cf;}
var ADH=D();
var D8=D(Bd);
var Bv5=null;var Bv8=null;var Bzf=null;var Bv6=null;var Bv7=null;var Bzg=null;function HA(){HA=L(D8);AQ$();}
function JE(a,b){var c=new D8();AFo(c,a,b);return c;}
function T1(){HA();return Bzg.e6();}
function AFo(a,b,c){HA();B4(a,b,c);}
function AQ$(){Bv5=JE(B(463),0);Bv8=JE(B(464),1);Bzf=JE(B(465),2);Bv6=JE(B(466),3);Bv7=JE(B(467),4);Bzg=I(D8,[Bv5,Bv8,Bzf,Bv6,Bv7]);}
var KR=D();
var Bzh=null;var Bzi=null;function XM(){XM=L(KR);A3S();}
function Mh(b){XM();return !(b&1)?0:1;}
function AIi(b){var c,d,e,f,g,h,i;XM();c=H();d=AHA();e=0;f=Bzi.data;g=f.length;h=0;while(h<g){i=f[h];if(b&i){if(c.k()>0)c.ba(32);c.a(d.data[e]);}e=e+1|0;h=h+1|0;}return c.b();}
function AHA(){XM();if(Bzh===null)Bzh=I(BM,[B(468),B(469),B(470),B(471),B(472),B(473),B(474),B(475),B(476),B(477),B(478),B(479)]);return Bzh;}
function A3S(){Bzi=OO([1,4,2,1024,8,16,128,64,32,256,2048,512]);}
var FC=D(FS);
var VN=D(FC);
var AAM=D(U);
function BoU(){var a=new AAM();AUa(a);return a;}
function AUa(a){Bv(a);}
function BhC(a){var b;b=Bkw(a);b.bm=1;return b;}
var IL=D();
function AC6(a){J(a);}
function Vi(){var a=this;IL.call(a);a.h2=0;a.cz=null;a.kt=0;a.HF=0.0;a.se=0;}
function Dq(){var a=new Vi();AO6(a);return a;}
function Bzj(a){var b=new Vi();Rp(b,a);return b;}
function Bzk(a,b){var c=new Vi();AJk(c,a,b);return c;}
function A9w(a,b){return Y(PX,b);}
function AO6(a){Rp(a,16);}
function Rp(a,b){AJk(a,b,0.75);}
function Zg(b){var c,d;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function AJk(a,b,c){var d;AC6(a);if(b>=0&&c>0.0){d=Zg(b);a.h2=0;a.cz=a.C5(d);a.HF=c;Ny(a);return;}G(C7());}
function Ny(a){a.se=a.cz.data.length*a.HF|0;}
function AZ_(a,b){var c;c=AFW(a,b);if(c===null)return null;return c.gc;}
function AFW(a,b){var c,d,e;if(b===null)c=MY(a);else{d=L7(b);e=d&(a.cz.data.length-1|0);c=Mt(a,b,e,d);}return c;}
function Mt(a,b,c,d){var e,f;e=a.cz.data[c];while(e!==null){if(e.qb==d){f=e.h3;if(ABb(b,f))break;}e=e.fn;}return e;}
function MY(a){var b;b=a.cz.data[0];while(b!==null&&b.h3!==null){b=b.fn;}return b;}
function AVh(a,b,c){return a.U1(b,c);}
function AZO(a,b,c){var d,e,f,g,h;if(b===null){d=MY(a);if(d===null){a.kt=a.kt+1|0;d=a.xS(null,0,0);e=a.h2+1|0;a.h2=e;if(e>a.se)a.pD();}}else{f=L7(b);g=f&(a.cz.data.length-1|0);d=Mt(a,b,g,f);if(d===null){a.kt=a.kt+1|0;d=a.xS(b,g,f);e=a.h2+1|0;a.h2=e;if(e>a.se)a.pD();}}h=d.gc;d.gc=c;return h;}
function AXe(a,b,c,d){var e;e=Bmh(b,d);e.fn=a.cz.data[c];a.cz.data[c]=e;return e;}
function A9a(a,b){var c,d,e,f,g,h,i;c=Zg(!b?1:b<<1);d=a.C5(c);e=0;while(e<a.cz.data.length){f=a.cz.data[e];a.cz.data[e]=null;while(f!==null){g=d.data;h=f.qb&(c-1|0);i=f.fn;f.fn=g[h];g[h]=f;f=i;}e=e+1|0;}a.cz=d;Ny(a);}
function BdP(a){a.PJ(a.cz.data.length);}
function AUL(a,b){var c;c=WT(a,b);if(c===null)return null;return c.gc;}
function WT(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.cz.data[0];while(e!==null){if(e.h3===null)break a;f=e.fn;d=e;e=f;}}else{g=L7(b);c=g&(a.cz.data.length-1|0);e=a.cz.data[c];while(e!==null&&!(e.qb==g&&ABb(b,e.h3))){f=e.fn;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.fn=e.fn;else a.cz.data[c]=e.fn;a.kt=a.kt+1|0;a.h2=a.h2-1|0;return e;}
function L7(b){return b.bl();}
function ABb(b,c){return b!==c&&!b.C(c)?0:1;}
function AIa(){var a=this;C.call(a);a.W=null;a.be=0;a.BK=0;}
function Jx(){var a=new AIa();AW4(a);return a;}
function Bzl(a,b){var c=new AIa();YS(c,a,b);return c;}
function AW4(a){YS(a,1,16);}
function YS(a,b,c){J(a);a.BK=b;a.W=B5(c);}
function A6e(a,b){var c,d,e;c=a.W;d=c.data;if(a.be==d.length)c=a.u4(Bj(8,a.be*1.75|0));d=c.data;e=a.be;a.be=e+1|0;d[e]=b;}
function AL4(a,b){a.sA(b.W,0,b.be);}
function AY4(a,b,c,d){if((c+d|0)<=b.be){a.sA(b.W,c,d);return;}G(Z((((((((H()).a(B(371))).h(c)).a(B(310))).h(d)).a(B(311))).h(b.be)).b()));}
function ALg(a,b,c,d){var e,f,g;e=a.W;f=e.data;g=a.be+d|0;if(g>f.length)e=a.u4(Bj(Bj(8,g),a.be*1.75|0));Bc(b,c,e,a.be,d);a.be=a.be+d|0;}
function A6Q(a,b){if(b<a.be)return a.W.data[b];G(Bm((((((H()).a(B(312))).h(b)).a(B(313))).h(a.be)).b()));}
function A3g(a,b,c){var d,e,f,g,h,i;d=a.be;if(c>=d)G(Bm((((((H()).a(B(316))).h(c)).a(B(313))).h(a.be)).b()));if(b>c)G(Bm((((((H()).a(B(317))).h(b)).a(B(315))).h(c)).b()));e=(c-b|0)+1|0;f=d-e|0;if(a.BK){g=a.W;h=b+e|0;Bc(g,h,a.W,b,d-h|0);}else{i=Bj(f,c+1|0);Bc(a.W,i,a.W,b,d-i|0);}a.be=f;}
function A4W(a){a.be=0;}
function AXY(a,b){var c;if(b<0)G(Z((((H()).a(B(319))).h(b)).b()));c=a.be+b|0;if(c>a.W.data.length)a.u4(Bj(Bj(8,c),a.be*1.75|0));return a.W;}
function AVv(a,b){var c,d,e;c=B5(b);d=c.data;e=a.W;Bc(e,0,c,0,Bw(a.be,d.length));a.W=c;return c;}
function AND(a,b){if(a.be>b)a.be=b;}
var ZQ=D(Ip);
var P6=D(G4);
var Bzm=null;function BgX(){BgX=L(P6);A2h();}
function BjR(a,b,c,d){var e=new P6();Xx(e,a,b,c,d);return e;}
function Bne(a){var b=new P6();AHB(b,a);return b;}
function Xx(a,b,c,d,e){var f,g,h,i;BgX();Je(a);f=V((b.b2()));g=V((c.b2()));h=V((d.b2()));i=V((e.b2()));a.c1(N(AG6(f,g,h,i)),1);}
function AHB(a,b){BgX();Je(a);}
function A2h(){Bzm=Bne(0);}
function AG6(b,c,d,e){var dispatcherJSObj=Bullet.wrapPointer(b,Bullet.btDispatcher);var broadphaceJSObj=Bullet.wrapPointer(c,Bullet.btBroadphaseInterface);var solverJSObj=Bullet.wrapPointer(d,Bullet.btConstraintSolver);var configJSObj=Bullet.wrapPointer(e,Bullet.btCollisionConfiguration);var jsObj=new Bullet.btDiscreteDynamicsWorld(dispatcherJSObj,broadphaceJSObj,solverJSObj,configJSObj);return Bullet.getPointer(jsObj);}
var AHS=D(EB);
var Ys=D(DT);
function Ld(){var a=this;C.call(a);a.kn=0;a.nK=0;}
var Bsc=null;var Bsb=null;function Bq(){Bq=L(Ld);A7Y();}
function LY(a,b){var c=new Ld();ACO(c,a,b);return c;}
function ACO(a,b,c){Bq();J(a);a.kn=b;a.nK=c;}
function AU3(a){return a.kn?0:1;}
function Bgz(a){return a.kn!=1?0:1;}
function A_q(a){return !a.AY()&&!a.u5()?0:1;}
function AQ6(a){return a.kn!=2?0:1;}
function A0j(a){return a.kn!=3?0:1;}
function APS(a){if(a.m8())return a.nK;G(Bql());}
function B8(b){Bq();return LY(2,b);}
function Hk(b){Bq();return LY(3,b);}
function AX5(a){switch(a.kn){case 0:G(Bkt());case 1:G(BmR());case 2:G(BnQ(a.nK));case 3:G(Bku(a.nK));default:}}
function A7Y(){Bsc=LY(0,0);Bsb=LY(1,0);}
function NV(){Bz.call(this);this.i0=0;}
function Bma(a){var b=new NV();AIh(b,a);return b;}
function AIh(a,b){CJ(a);a.i0=b;}
function Bdt(a,b,c,d){var e,f,g,h;e=!d.jZ()?c.k():d.O();if(b>=e){d.bC(a.i0,0);return a.l.e(b,c,d);}f=e-b|0;if(f==2&&c.g(b)==13){g=b+1|0;if(c.g(g)==10){d.bC(a.i0,0);return a.l.e(b,c,d);}}a:{if(f==1){h=c.g(b);if(h==10)break a;if(h==13)break a;if(h==133)break a;if((h|1)==8233)break a;}return (-1);}d.bC(a.i0,0);return a.l.e(b,c,d);}
function A6w(a,b){var c;c=!b.eJ(a.i0)?0:1;b.bC(a.i0,(-1));return c;}
function Baq(a){return B(480);}
var O4=D(HC);
var Bzn=null;function AX$(){AX$=L(O4);AXL();}
function BlA(){var a=new O4();AFU(a);return a;}
function Bmc(a){var b=new O4();AEn(b,a);return b;}
function AFU(a){AX$();JC(a);a.c1(N(UN()),1);}
function AEn(a,b){AX$();JC(a);}
function AXL(){Bzn=Bmc(0);}
function UN(){var jsObj=new Bullet.btDefaultCollisionConfiguration();return Bullet.getPointer(jsObj);}
function Hy(){var a=this;C.call(a);a.Q=null;a.iZ=0;a.eT=0;a.Bd=0;a.rX=0;a.et=0;a.q=0;a.Ff=0;a.jo=null;a.gi=null;a.B=0;a.ne=0;a.lU=0;a.mG=0;a.C9=null;}
var Bzo=null;var Bzp=null;var Bzq=0;function Bn_(a,b){var c=new Hy();Bgm(c,a,b);return c;}
function Bgm(a,b,c){J(a);a.eT=1;a.C9=b;if((c&16)>0)b=A$7(b);else if((c&128)>0)b=A63(b);a.Q=B$(b.k()+2|0);Bc(b.sp(),0,a.Q,0,b.k());a.Q.data[a.Q.data.length-1|0]=0;a.Q.data[a.Q.data.length-2|0]=0;a.Ff=a.Q.data.length;a.iZ=c;EW(a);EW(a);}
function A_v(a){return a.et;}
function A5$(a,b){if(b>0&&b<3)a.eT=b;if(b==1)AEd(a);}
function A5K(a,b){a.iZ=b;a.q=a.et;a.gi=a.jo;a.B=a.lU+1|0;a.mG=a.lU;EW(a);}
function AOF(a){return a.jo;}
function AW6(a){return a.jo===null?0:1;}
function AMY(a){return a.gi===null?0:1;}
function Bea(a){EW(a);return a.rX;}
function A6J(a){var b;b=a.jo;EW(a);return b;}
function A4v(a){return a.q;}
function APR(a){return a.rX;}
function A63(b){return b;}
function AEd(a){a.q=a.et;a.gi=a.jo;a.B=a.mG;a.mG=a.lU;EW(a);}
function EW(a){var b,c,d,e,f,g,h,$$je;a.rX=a.et;a.et=a.q;a.jo=a.gi;a.lU=a.mG;a.mG=a.B;while(true){b=0;a.q=a.B>=a.Q.data.length?0:JQ(a);a.gi=null;if(a.eT==4){if(a.q!=92)return;a.q=a.B>=a.Q.data.length?0:a.Q.data[BR(a)];switch(a.q){case 69:break;default:a.q=92;a.B=a.ne;return;}a.eT=a.Bd;a.q=a.B>(a.Q.data.length-2|0)?0:JQ(a);}a:{if(a.q!=92){if(a.eT==1)switch(a.q){case 36:a.q=(-536870876);break a;case 40:if(a.Q.data[a.B]!=63){a.q=(-2147483608);break a;}BR(a);c=a.Q.data[a.B];d=0;while(true){b:{if(d){d=0;switch(c)
{case 33:break;case 61:a.q=(-134217688);BR(a);break b;default:G(B3(B(59),a.b(),a.B));}a.q=(-67108824);BR(a);}else{switch(c){case 33:break;case 60:BR(a);c=a.Q.data[a.B];d=1;break b;case 61:a.q=(-536870872);BR(a);break b;case 62:a.q=(-33554392);BR(a);break b;default:a.q=AJN(a);if(a.q<256){a.iZ=a.q;a.q=a.q<<16;a.q=(-1073741784)|a.q;break b;}a.q=a.q&255;a.iZ=a.q;a.q=a.q<<16;a.q=(-16777176)|a.q;break b;}a.q=(-268435416);BR(a);}}if(!d)break;}break a;case 41:a.q=(-536870871);break a;case 42:case 43:case 63:e=a.B>=
a.Q.data.length?42:a.Q.data[a.B];switch(e){case 43:a.q=a.q|(-2147483648);BR(a);break a;case 63:a.q=a.q|(-1073741824);BR(a);break a;default:}a.q=a.q|(-536870912);break a;case 46:a.q=(-536870866);break a;case 91:a.q=(-536870821);a.qx(2);break a;case 93:if(a.eT!=2)break a;a.q=(-536870819);break a;case 94:a.q=(-536870818);break a;case 123:a.gi=YW(a,a.q);break a;case 124:a.q=(-536870788);break a;default:}else if(a.eT==2)switch(a.q){case 38:a.q=(-536870874);break a;case 45:a.q=(-536870867);break a;case 91:a.q=(-536870821);break a;case 93:a.q
=(-536870819);break a;case 94:a.q=(-536870818);break a;default:}}else{f=a.B>=(a.Q.data.length-2|0)?(-1):JQ(a);c:{a.q=f;switch(a.q){case -1:G(B3(B(59),a.b(),a.B));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.q
=WA(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.eT!=1)break a;a.q=(-2147483648)|a.q;break a;case 65:a.q=(-2147483583);break a;case 66:a.q=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:G(B3(B(59),a.b(),a.B));case 68:case 83:case 87:case 100:case 115:case 119:a.gi=MV(Hc(a.Q,
a.ne,1),0);a.q=0;break a;case 71:a.q=(-2147483577);break a;case 80:case 112:break c;case 81:a.Bd=a.eT;a.eT=4;b=1;break a;case 90:a.q=(-2147483558);break a;case 97:a.q=7;break a;case 98:a.q=(-2147483550);break a;case 99:if(a.B>=(a.Q.data.length-2|0))G(B3(B(59),a.b(),a.B));a.q=a.Q.data[BR(a)]&31;break a;case 101:a.q=27;break a;case 102:a.q=12;break a;case 110:a.q=10;break a;case 114:a.q=13;break a;case 116:a.q=9;break a;case 117:a.q=O9(a,4);break a;case 120:a.q=O9(a,2);break a;case 122:a.q=(-2147483526);break a;default:}break a;}g
=AFZ(a);h=0;if(a.q==80)h=1;try{a.gi=MV(g,h);}catch($$e){$$je=T($$e);if($$je instanceof Ox){G(B3(B(59),a.b(),a.B));}else{throw $$e;}}a.q=0;}}if(b)continue;else break;}}
function AFZ(a){var b,c,d;b=Ht(10);if(a.B<(a.Q.data.length-2|0)){if(a.Q.data[a.B]!=123)return (((H()).a(B(481))).a(Hc(a.Q,BR(a),1))).b();BR(a);c=0;a:{while(a.B<(a.Q.data.length-2|0)){c=a.Q.data[BR(a)];if(c==125)break a;b.ba(c);}}if(c!=125)G(B3(B(59),a.b(),a.B));}if(!b.k())G(B3(B(59),a.b(),a.B));d=b.b();if(d.k()==1)return (((H()).a(B(481))).a(d)).b();b:{c:{if(d.k()>3){if(d.ff(B(481)))break c;if(d.ff(B(482)))break c;}break b;}d=d.ex(2);}return d;}
function YW(a,b){var c,d,e,f,$$je;c=Ht(4);d=(-1);e=2147483647;a:{while(true){if(a.B>=a.Q.data.length)break a;b=a.Q.data[BR(a)];if(b==125)break a;if(b==44&&d<0)try{d=DZ(c.b(),10);c.Pm(0,c.k());continue;}catch($$e){$$je=T($$e);if($$je instanceof D0){break;}else{throw $$e;}}c.ba(b&65535);}G(B3(B(59),a.b(),a.B));}if(b!=125)G(B3(B(59),a.b(),a.B));if(c.k()>0)b:{try{e=DZ(c.b(),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=T($$e);if($$je instanceof D0){}else{throw $$e;}}G(B3(B(59),a.b(),a.B));}else if(d<0)G(B3(B(59),
a.b(),a.B));if((d|e|(e-d|0))<0)G(B3(B(59),a.b(),a.B));f=a.B>=a.Q.data.length?42:a.Q.data[a.B];c:{switch(f){case 43:a.q=(-2147483525);BR(a);break c;case 63:a.q=(-1073741701);BR(a);break c;default:}a.q=(-536870789);}return Bpw(d,e);}
function AQp(a){return a.C9;}
function A$c(a){return !a.et&&!a.q&&a.B==a.Ff&&!a.lr()?1:0;}
function KN(b){return b<0?0:1;}
function A1j(a){return !a.bS()&&!a.lr()&&KN(a.et)?1:0;}
function A5l(a){return a.et<=56319&&a.et>=55296?1:0;}
function Bd9(a){return a.et<=57343&&a.et>=56320?1:0;}
function M3(b){return b<=56319&&b>=55296?1:0;}
function L$(b){return b<=57343&&b>=56320?1:0;}
function O9(a,b){var c,d,e,f,$$je;c=Ht(b);d=a.Q.data.length-2|0;e=0;while(true){f=Cl(e,b);if(f>=0)break;if(a.B>=d)break;c.ba(a.Q.data[BR(a)]);e=e+1|0;}if(!f)a:{try{f=DZ(c.b(),16);}catch($$e){$$je=T($$e);if($$je instanceof D0){break a;}else{throw $$e;}}return f;}G(B3(B(59),a.b(),a.B));}
function WA(a){var b,c,d,e,f;b=3;c=1;d=a.Q.data.length-2|0;e=Qg(a.Q.data[a.B],8);switch(e){case -1:break;default:if(e>3)b=2;BR(a);a:{while(true){if(c>=b)break a;if(a.B>=d)break a;f=Qg(a.Q.data[a.B],8);if(f<0)break;e=(e*8|0)+f|0;BR(a);c=c+1|0;}}return e;}G(B3(B(59),a.b(),a.B));}
function AJN(a){var b,c,d;b=1;c=a.iZ;a:while(true){if(a.B>=a.Q.data.length)G(B3(B(59),a.b(),a.B));b:{c:{d=a.Q.data[a.B];switch(d){case 41:BR(a);return c|256;case 45:if(!b)G(B3(B(59),a.b(),a.B));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BR(a);}BR(a);return c;}
function BR(a){a.ne=a.B;if(a.iZ&4)AA1(a);else a.B=a.B+1|0;return a.ne;}
function AA1(a){var b;b=a.Q.data.length-2|0;a.B=a.B+1|0;a:while(true){if(a.B<b&&Xt(a.Q.data[a.B])){a.B=a.B+1|0;continue;}if(a.B>=b)break;if(a.Q.data[a.B]!=35)break;a.B=a.B+1|0;while(true){if(a.B>=b)continue a;if(Ur(a,a.Q.data[a.B]))continue a;a.B=a.B+1|0;}}return a.B;}
function Ur(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AIz(b){return Bzo.Xi(b);}
function AOt(b){var c,d,e,f,g,h;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;if(!f)g=OO([d,e]);else{h=4519+f|0;g=OO([d,e,h]);}return g;}return null;}
function AT1(b){var c;c=Bzp.b_(b);return c==Bzq?0:1;}
function BcW(b){return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);}
function JQ(a){var b,c,d;b=a.Q.data[BR(a)];if(Cb(b)){c=a.ne+1|0;if(c<a.Q.data.length){d=a.Q.data[c];if(BU(d)){BR(a);return DI(b,d);}}}return b;}
function AME(a){return a.lU;}
var PC=D(0);
var AE5=D(KZ);
function Bjk(){var a=new AE5();A0v(a);return a;}
function A0v(a){U4(a);}
function A4Y(a){var b;b=(AEx(a)).gm(1);b.bm=1;return b;}
var ACN=D(C_);
var UR=D(Dy);
var ADV=D();
function Jw(){return 1;}
var NN=D(0);
var ADj=D(Gt);
function Bm6(a,b,c,d,e,f){var g=new ADj();ALr(g,a,b,c,d,e,f);return g;}
function ALr(a,b,c,d,e,f,g){Nv(a,b,c,d,e,f,g);}
function BbT(a,b){var c,d,e,f;c=a.fU.D.data;d=a.fP;e=b*2|0;f=(c[d+e|0]&255)<<8|a.fU.D.data[(a.fP+e|0)+1|0]&255;return f<<16>>16;}
function A6X(a,b,c){var d,e,f;d=a.fU.D.data;e=a.fP;f=b*2|0;d[e+f|0]=c>>8<<24>>24;a.fU.D.data[(a.fP+f|0)+1|0]=c<<24>>24;}
var Ni=D(EE);
var Fs=D();
var Bt0=null;var Bzr=null;var Bzs=null;var Bzt=null;var BtZ=null;function Bj9(){Bj9=L(Fs);A$I();}
function A$I(){Bt0=OO([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);Bzr=A52([N(1),N(10),N(100),N(1000),N(10000),N(100000),N(1000000),N(10000000),N(100000000),N(1000000000),Cs(1410065408, 2),Cs(1215752192, 23),Cs(3567587328, 232),Cs(1316134912, 2328),Cs(276447232, 23283),Cs(2764472320, 232830),Cs(1874919424, 2328306),Cs(1569325056, 23283064),Cs(2808348672, 232830643)]);Bzs=A52([N(1),N(10),N(100),N(10000),N(100000000),Cs(1874919424, 2328306)]);Bzt=Bo$();BtZ=Bok();}
function GC(){BO.call(this);this.c8=null;}
function Bpl(a,b){var c=new GC();Ts(c,a,b);return c;}
function Ts(a,b,c){Da(a);a.c8=b;a.dA=c;a.bt=c.kA();}
function AKS(a,b,c,d){var e,f;e=d.jO(a.bt);d.eO(a.bt,b);f=a.c8.e(b,c,d);if(f>=0)return f;d.eO(a.bt,e);return (-1);}
function AUc(a,b,c,d){var e;e=a.c8.cM(b,c,d);if(e>=0)d.eO(a.bt,e);return e;}
function BeA(a,b,c,d,e){var f;f=a.c8.cQ(b,c,d,e);if(f>=0)e.eO(a.bt,f);return f;}
function A_K(a,b){return a.c8.cj(b);}
function BcN(a){var b;b=BlH(a);a.l=b;return b;}
function A1k(a){var b;a.cN=1;if(a.dA!==null&&!a.dA.cN)a.dA.er();if(a.c8!==null&&!a.c8.cN){b=a.c8.is();if(b!==null){a.c8.cN=1;a.c8=b;}a.c8.er();}}
function Fq(){var a=this;C.call(a);a.UY=X;a.RX=X;a.Pp=null;a.JK=null;a.O4=0;a.Vj=null;}
var Bzu=null;var Bzv=null;var Bzw=0;var Bzx=0;var Bzy=null;function N6(){N6=L(Fq);AMf();}
function BoS(a){var b=new Fq();ABE(b,a);return b;}
function Bzz(a,b){var c=new Fq();Qp(c,a,b);return c;}
function ABE(a,b){N6();Qp(a,null,b);}
function Qp(a,b,c){var d;N6();J(a);a.Pp=TG();a.O4=1;a.JK=c;a.Vj=b;d=Bzw;Bzw=d+1|0;a.UY=N(d);}
function JH(b){N6();if(Bzv!==b)Bzv=b;Bzv.RX=ER();}
function DY(){N6();return Bzv;}
function AMf(){Bzu=BoS(B(483));Bzv=Bzu;Bzw=1;Bzx=1;Bzy=Bqa();}
var Qr=D(0);
var AAj=D();
var RS=D(GC);
function BlH(a){var b=new RS();AXG(b,a);return b;}
function AXG(a,b){Ts(a,b.c8,b.dA);}
function AP8(a,b,c,d){var e,f,g;e=0;f=d.O();a:{while(true){if(b>f){b=e;break a;}g=d.jO(a.bt);d.eO(a.bt,b);e=a.c8.e(b,c,d);if(e>=0)break;d.eO(a.bt,g);b=b+1|0;}}return b;}
function Bi0(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=e.jO(a.bt);e.eO(a.bt,c);f=a.c8.e(c,d,e);if(f>=0)break;e.eO(a.bt,g);c=c+(-1)|0;}}return c;}
function ANQ(a){return null;}
var Zl=D(Bt);
function BmR(){var a=new Zl();AVA(a);return a;}
function AVA(a){CQ(a);}
var AAN=D();
function AU6(b){return b;}
function JO(b){return b.length?0:1;}
function BaF(b,c){var d;d=AU6(c);b.push(d);}
function Bcv(b){return b.shift();}
var Q$=D(0);
function ABi(){var a=this;C.call(a);a.vj=null;a.Vu=X;a.ED=null;}
function Bm0(a){var b=new ABi();AKW(b,a);return b;}
function AKW(a,b){J(a);a.ED=b;b.LA(a);Bsf.SU(a);a.Ul();}
function A0Q(a,b){a.ED.ow(b);}
function BgK(a){var b,c,d,e,f,g,h,$$je;FD();b=By5;E_(b);a:{b:{try{if(a.vj===Bsf)break b;Cw(b);}catch($$e){$$je=T($$e);c=$$je;break a;}return;}try{d=Gc(CV(),N(1000000));e=N(5000);f=0;g=By5.j;c:{while(true){if(f>=g)break c;try{e=(By5.o(f)).QT(d,e);}catch($$e){$$je=T($$e);if($$je instanceof DA){h=$$je;break;}else{throw $$e;}}f=f+1|0;}G(K0((((H()).a(B(484))).a((Co(By5.o(f))).x())).b(),h));}}catch($$e){$$je=T($$e);c=$$je;break a;}d:{try{if(a.vj===Bsf)break d;Cw(b);}catch($$e){$$je=T($$e);c=$$je;break a;}return;}try
{a.ow(V((A5v(X,e))));Cw(b);}catch($$e){$$je=T($$e);c=$$je;break a;}return;}Cw(b);G(c);}
function AZ9(a){var b,c,d,e,f,$$je;b=EI(Gc(CV(),N(1000000)),a.Vu);FD();c=By5;E_(c);a:{try{d=0;e=By5.j;while(d<e){(By5.o(d)).KP(b);d=d+1|0;}Cw(c);break a;}catch($$e){$$je=T($$e);f=$$je;}Cw(c);G(f);}a.vj=Bsf;a.ft();}
var AB7=D();
function Vr(){var a=this;C.call(a);a.eK=0;a.fC=null;a.qe=0;a.Hr=0.0;a.rj=0;a.rN=0;a.h8=0;}
function Bqi(){var a=new Vr();AOX(a);return a;}
function BzA(a,b){var c=new Vr();ADa(c,a,b);return c;}
function AOX(a){ADa(a,51,0.800000011920929);}
function ADa(a,b,c){var d;J(a);if(c>0.0&&c<1.0){a.Hr=c;d=Im(b,c);a.rj=d*c|0;a.h8=d-1|0;a.rN=Dh(N(a.h8));a.fC=Be(d);return;}G(Z((((H()).a(B(376))).b$(c)).b()));}
function AZW(a,b){return V(C$(Cu(N(b),Cs(2135587861, 2654435769)),a.rN));}
function O$(a,b){var c,d,e;c=a.fC;d=a.fl(b);while(true){e=c.data[d];if(!e)return  -(d+1|0)|0;if(e==b)break;d=(d+1|0)&a.h8;}return d;}
function A65(a,b){var c,d;if(!b){if(a.qe)return 0;a.qe=1;a.eK=a.eK+1|0;return 1;}c=O$(a,b);if(c>=0)return 0;d= -(c+1|0)|0;a.fC.data[d]=b;d=a.eK+1|0;a.eK=d;if(d>=a.rj)ACW(a,a.fC.data.length<<1);return 1;}
function ADt(a,b){var c,d,e;c=a.fC;d=a.fl(b);while(true){e=c.data;if(!e[d])break;d=(d+1|0)&a.h8;}e[d]=b;}
function AZ8(a,b){var c,d,e,f,g,h,i;if(!b){if(!a.qe)return 0;a.qe=0;a.eK=a.eK-1|0;return 1;}c=O$(a,b);if(c<0)return 0;d=a.fC;e=a.h8;f=(c+1|0)&e;while(true){g=d.data;h=g[f];if(!h)break;i=a.fl(h);if(((f-i|0)&e)>((c-i|0)&e)){g[c]=h;c=f;}f=(f+1|0)&e;}g[c]=0;a.eK=a.eK-1|0;return 1;}
function ACW(a,b){var c,d,e,f;a:{c=a.fC.data.length;a.rj=b*a.Hr|0;a.h8=b-1|0;a.rN=Dh(N(a.h8));d=a.fC;a.fC=Be(b);if(a.eK>0){e=0;while(true){if(e>=c)break a;f=d.data[e];if(f)ADt(a,f);e=e+1|0;}}}}
var AJq=D(E0);
function L_(){var a=new AJq();AZd(a);return a;}
function AZd(a){S5(a);}
function Ox(){var a=this;Bt.call(a);a.N5=null;a.Uy=null;}
function Blu(a,b,c){var d=new Ox();A8r(d,a,b,c);return d;}
function A8r(a,b,c,d){Fy(a,b);a.N5=c;a.Uy=d;}
var MB=D();
var BzB=null;function BmZ(){BmZ=L(MB);AYl();}
function N9(b){var $$je;BmZ();a:{if(b!==null)try{b.f3();break a;}catch($$e){$$je=T($$e);if($$je instanceof DA){}else{throw $$e;}}}}
function AYl(){BzB=Cy(0);}
function AEp(){GU.call(this);this.Is=0;}
function BkJ(a,b){var c=new AEp();AQi(c,a,b);return c;}
function AQi(a,b,c){L9(a,b,c);}
function AT7(a,b,c,d){var e,f,g,h;e=a.kx(d);if(e!==null&&(b+e.k()|0)<=d.O()){f=0;while(true){if(f>=e.k()){d.bC(a.jC,e.k());return a.l.e(b+e.k()|0,c,d);}g=DV(D_(e.g(f)));h=b+f|0;h=D_(c.g(h));if(g!=DV(h))break;f=f+1|0;}return (-1);}return (-1);}
function A5y(a){return (((H()).a(B(485))).h(a.Is)).b();}
function KO(){C.call(this);this.L9=null;}
var By9=null;var BzC=null;function Fn(){Fn=L(KO);BiN();}
function APh(a){var b=new KO();AAm(b,a);return b;}
function AAm(a,b){Fn();J(a);a.L9=b;}
function FU(){Fn();return By9;}
function BiN(){By9=APh(B(486));BzC=APh(B(487));}
var FG=D(Bd);
var BzD=null;var Bvf=null;var BzE=null;function RN(){RN=L(FG);A6t();}
function Bc8(a,b){var c=new FG();YD(c,a,b);return c;}
function YD(a,b,c){RN();B4(a,b,c);}
function A6t(){BzD=Bc8(B(488),0);Bvf=Bc8(B(489),1);BzE=I(FG,[BzD,Bvf]);}
var Nn=D(Es);
var BzF=null;function A1t(){A1t=L(Nn);AXn();}
function BlU(){var a=new Nn();AJb(a);return a;}
function AJb(a){A1t();Iw(a);}
function Bcd(a,b){Bff(b);}
function AXn(){BzF=BlU();}
var Vb=D(DC);
function BkA(a,b,c){var d=new Vb();ALK(d,a,b,c);return d;}
function ALK(a,b,c,d){G9(a,b,c,d);}
function BiG(a,b,c,d){var e;e=d.O();if(e>b)return a.l.cQ(b,e,c,d);return a.l.e(b,c,d);}
function AY2(a,b,c,d){var e;e=d.O();if(a.l.cQ(b,e,c,d)>=0)return b;return (-1);}
function Bdk(a){return B(490);}
var Pb=D(0);
var GV=D(Bd);
var BzG=null;var BzH=null;var BzI=null;function Blk(){Blk=L(GV);A9T();}
function AL5(a,b){var c=new GV();Xd(c,a,b);return c;}
function Xd(a,b,c){Blk();B4(a,b,c);}
function A9T(){BzG=AL5(B(491),0);BzH=AL5(B(492),1);BzI=I(GV,[BzG,BzH]);}
var Va=D(C2);
function Bod(a,b,c){var d=new Va();A50(d,a,b,c);return d;}
function A50(a,b,c,d){Gf(a,b,c,d);}
function A1A(a,b,c,d){var e;if(!a.bd.bf(d))return a.l.e(b,c,d);e=a.l.e(b,c,d);if(e>=0)return e;return a.bd.e(b,c,d);}
var AJv=D(GK);
var Me=D(0);
var AGB=D(EJ);
function A7e(a){var b=new AGB();AUP(b,a);return b;}
function AUP(a,b){AGI(a,b);}
function Jq(){Bk.call(this);this.RK=0.0;}
var BzJ=null;function BpE(){BpE=L(Jq);Bgx();}
function Bo0(a){var b=new Jq();AJo(b,a);return b;}
function AJo(a,b){BpE();CZ(a);a.RK=b;}
function Bgx(){BzJ=Y(Jq,111);}
var QE=D();
var BzK=null;function APT(){APT=L(QE);AKp();}
function Tt(b){APT();return BzK.Y(b);}
function AJx(){var b;APT();BzK.P();b=BzK;BC();b.A(B(493),Bvw);BzK.A(B(494),Bvu);BzK.A(B(495),Bvq);BzK.A(B(496),Bvr);BzK.A(B(497),Bvs);BzK.A(B(498),Bvt);BzK.A(B(499),Bvx);BzK.A(B(500),Bvy);BzK.A(B(501),Bvz);BzK.A(B(502),BvA);BzK.A(B(503),BvB);BzK.A(B(504),BvC);BzK.A(B(505),BvD);BzK.A(B(506),BvE);BzK.A(B(507),BvF);BzK.A(B(508),BvG);BzK.A(B(509),BvH);BzK.A(B(510),BvI);BzK.A(B(511),BvJ);BzK.A(B(512),BvK);BzK.A(B(513),BvL);BzK.A(B(514),BvM);BzK.A(B(515),BvN);BzK.A(B(516),BvO);BzK.A(B(517),BvP);BzK.A(B(518),BvQ);BzK.A(B(519),
BvR);BzK.A(B(520),BvS);BzK.A(B(521),BvT);BzK.A(B(522),BvU);BzK.A(B(523),BvV);BzK.A(B(524),BvW);BzK.A(B(525),BvX);BzK.A(B(526),BvY);}
function AKp(){BzK=Ef();AJx();}
var M2=D(0);
function AIe(){C.call(this);this.n4=null;}
function BnI(a){var b=new AIe();A0N(b,a);return b;}
function A0N(a,b){J(a);a.n4=b;}
function A6M(a,b,c){H$();if(c===BzL)return A3u(a.n4,b,c);G(W(((((H()).a(B(527))).c0(c)).a(B(528))).b()));}
function Bg_(a,b){var c,d;c=new Hr;d=a.n4;H$();IO(c,d,b,BzM);return c;}
function A5b(a,b){var c,d;c=new Hr;d=a.n4;H$();IO(c,d,b,BzL);return c;}
var AGx=D(E1);
function Bk_(a,b){var c=new AGx();A5M(c,a,b);return c;}
function A5M(a,b,c){LU(a,b,c);}
var AFf=D();
function AO3(){return {};}
var ADy=D(Dz);
function BpP(a){var b=new ADy();ANZ(b,a);return b;}
function ANZ(a,b){HT(a,b,1.0,1.0);}
function A2g(a,b,c,d,e,f,g,h){var i,j,k,l,m;i=null;a:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(l&128){i=B8(1);c=k+(-1)|0;break a;}j=e.data;m=f+1|0;j[f]=l&65535;c=k;f=m;}}h.eB(c);h.d6(f);return i;}
var Wg=D();
function Hu(){var a=this;C.call(a);a.kJ=0;a.k1=0;a.Eq=null;a.g_=null;a.b4=null;a.pI=0;a.tv=null;a.o1=0;a.o2=0;a.o3=0;a.Bn=0.0;a.nL=null;a.p0=null;a.A3=null;a.Nb=null;a.iS=null;a.kO=null;}
var BzN=null;var BzO=0;var BzP=null;function GI(){GI=L(Hu);ATh();}
function AXs(a){var b=new Hu();RW(b,a);return b;}
function RI(a,b,c){var d=new Hu();YO(d,a,b,c);return d;}
function RW(a,b){var c,d,e;GI();J(a);a.o1=255;a.o2=255;a.o3=255;a.nL=K9(a.o1,a.o2,a.o3,a.Bn);HJ();a.p0=BzQ;WR();a.A3=Bxs;c=b;d=c.so();e=c.f6.i$.Y(d);Ok(a,(-1),(-1),e,null);if(a.iS!==null)return;G(W(((((H()).a(B(529))).a(b.so())).a(B(530))).b()));}
function YO(a,b,c,d){GI();J(a);a.o1=255;a.o2=255;a.o3=255;a.nL=K9(a.o1,a.o2,a.o3,a.Bn);HJ();a.p0=BzQ;WR();a.A3=Bxs;Ok(a,b,c,null,null);}
function Ok(a,b,c,d,e){var f;if(e!==null){a.kO=e;a.kJ=e.getWidth();a.k1=e.getHeight();}else if(d===null){a.kJ=b;a.k1=c;}else{a.iS=d;a.kJ=d.width;a.k1=d.height;}A61();a.Eq=BzR;a.tv=OY(4);GI();f=BzO;BzO=f+1|0;a.pI=f;a.tv.Og(0,a.pI);BzN.A(Bl(a.pI),a);}
function U7(a){var b,c,d,e,f;b=(E3()).hO();c=b.p2();d=c.createElement("canvas");a.g_=d;e=a.g_;f=a.kJ;e.width=f;e=a.g_;f=a.k1;e.height=f;a.b4=a.g_.getContext("2d");e=a.b4;f=$rt_ustr((Ij()).b());e.globalCompositeOperation=f;}
function Ij(){GI();Kb();return BzS;}
function K9(b,c,d,e){GI();return ((((((((((H()).a(B(531))).h(b)).a(B(20))).h(c)).a(B(20))).h(d)).a(B(20))).b$(e)).a(B(21))).b();}
function AKK(a,b){var c,d;a.p0=b;Ih(a);c=a.b4;d=$rt_ustr((Ij()).b());c.globalCompositeOperation=d;}
function AOu(a){return a.Eq;}
function ASs(a){return 6408;}
function AVb(a){return 6408;}
function AYs(a){return 5121;}
function AQX(a){return a.kJ;}
function AUB(a){return a.k1;}
function Bep(a){return a.tv;}
function A5_(a){GI();BzN.Ln(Bl(a.pI));}
function AK2(a){Ih(a);return a.g_;}
function Ih(a){var b,c;if(a.g_===null){U7(a);if(a.iS!==null){b=a.b4;Kb();c=$rt_ustr(F7(BzT));b.globalCompositeOperation=c;b=a.b4;c=a.iS;b.drawImage(c,0.0,0.0);b=a.b4;c=$rt_ustr(F7(Ij()));b.globalCompositeOperation=c;}if(a.kO!==null){c=a.b4;Kb();b=$rt_ustr(F7(BzT));c.globalCompositeOperation=b;b=a.b4;c=a.kO;b.drawImage(c,0.0,0.0);b=a.b4;c=$rt_ustr(F7(Ij()));b.globalCompositeOperation=c;}}}
function AMJ(a){return a.g_===null&&a.iS!==null?1:0;}
function AZb(a){return a.iS;}
function Bcl(a){return a.g_===null&&a.kO!==null?1:0;}
function Bh9(a){return a.kO;}
function A7H(a,b,c,d,e,f,g,h){var i;i=b.tT();QX(a,i,e,f,g,h,c,d,g,h);}
function AXh(a,b,c,d,e,f,g,h,i,j){QX(a,b.tT(),c,d,e,f,g,h,i,j);}
function QX(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u;Ih(a);k=a.p0;HJ();if(k===Bvg){l=a.b4;k=$rt_ustr(BzP);l.fillStyle=k;l=a.b4;k=$rt_ustr(BzP);l.strokeStyle=k;l=a.b4;k="destination-out";l.globalCompositeOperation=k;a.b4.beginPath();l=a.b4;m=g;n=h;o=i;p=j;l.rect(m,n,o,p);AHI();VC(a,Bud);a.b4.closePath();l=a.b4;k=$rt_ustr(a.nL);l.fillStyle=k;q=a.b4;l=$rt_ustr(a.nL);q.strokeStyle=l;q=a.b4;Kb();l=$rt_ustr(F7(BzS));q.globalCompositeOperation=l;}if(e&&f&&i&&j){l=a.b4;m=c;n=d;o=e;p=f;r=g;s=h;t=i;u=j;l.drawImage(b,
m,n,o,p,r,s,t,u);}a.Nb=null;}
function VC(a,b){a:{Ih(a);Bqg();switch(BzU.data[Bi(b)]){case 1:break;case 2:a.b4.stroke();break a;default:break a;}a.b4.fill();}}
function ATh(){BzN=Dq();BzO=0;BzP=K9(255,255,255,1.0);}
function I6(){BV.call(this);this.Lk=null;}
var Byc=X;var BzV=X;function AIr(){AIr=L(I6);Biv();}
function Biv(){Byc=B2(B(532));BzV=Byc;}
var Fb=D(E4);
var AIm=D();
var AIl=D();
var Sw=D();
function Bot(){var a=new Sw();BcO(a);return a;}
function BcO(a){J(a);}
function Sv(){JW.call(this);this.xF=null;}
function BzW(a){var b=new Sv();AB9(b,a);return b;}
function Bps(){var a=new Sv();BhQ(a);return a;}
function AB9(a,b){WJ(a);if(b===null)b=BmH();a.xF=b;}
function BhQ(a){AB9(a,null);}
function A0p(a,b){return BkC(b,a.xF);}
var Nc=D(0);
function IP(){var a=this;C.call(a);a.D$=null;a.pW=0;a.py=0;a.kX=null;a.dq=null;a.E5=0;a.j_=0;}
var BzX=0;function BoC(a,b,c,d){var e=new IP();A6D(e,a,b,c,d);return e;}
function A6D(a,b,c,d,e){J(a);a.pW=0;a.py=0;a.j_=0;a.D$=b;a.dq=c;a.kX=d;a.E5=e;if(a.dq!==null){a.dq=Qy(a,a.dq);a.pW=a.dq.bk();a.py=a.dq.bj();if(d===null)a.kX=a.dq.gl();}}
function A2X(a){return a.j_;}
function A6E(a){if(a.j_)G(W(B(533)));if(a.dq===null){a.dq=Qy(a,AXs(a.D$));a.pW=a.dq.bk();a.py=a.dq.bj();if(a.kX===null)a.kX=a.dq.gl();}a.j_=1;}
function Qy(a,b){var c,d,e,f,g;a:{if(Btv===null&&BzX){c=b.bk();d=b.bj();e=KG(c);f=KG(d);if(c!=e)break a;if(d!=f)break a;}return b;}g=RI(e,f,b.gl());g.AQ(b,0,0,0,0,c,d);b.iU();return g;}
function AT$(a){var b;if(!a.j_)G(W(B(534)));a.j_=0;b=a.dq;a.dq=null;return b;}
function A$J(a){return 1;}
function ATf(a){return a.pW;}
function A6U(a){return a.py;}
function API(a){return a.kX;}
function A33(a){return a.E5;}
function AOP(a){return 1;}
function Bbe(a){RN();return BzD;}
function A6_(a,b){G(W(B(535)));}
var Sr=D(Cz);
var Ss=D(Cz);
var Wk=D(FY);
function Q0(a){var b=new Wk();AP0(b,a);return b;}
function AP0(a,b){M8(a,b);}
function Qz(){var a=this;BV.call(a);a.Hk=0;a.Nm=0;a.Od=0;a.Ko=0.0;}
var BzY=X;function H6(){H6=L(Qz);AV7();}
function Y_(b){H6();return D2(Bx(b,BzY),b)?0:1;}
function AV7(){BzY=B2(B(536));}
var AGJ=D();
function Bo$(){var a=new AGJ();AM2(a);return a;}
function AM2(a){J(a);}
function Zp(){C.call(this);this.R=null;}
function BpV(a){var b=new Zp();AMa(b,a);return b;}
function AMa(a,b){J(a);a.R=Bpd(4);a.R.LT(b);}
function ASc(a,b){var c,d,e,f,$$je;c=a.R.gd();a:{try{d=0;e=a.R.j;}catch($$e){$$je=T($$e);f=$$je;break a;}b:{try{while(d<e){if(c.data[d].mb(b))break b;d=d+1|0;}}catch($$e){$$je=T($$e);f=$$je;break a;}a.R.N();return 0;}try{}catch($$e){$$je=T($$e);f=$$je;break a;}a.R.N();return 1;}a.R.N();G(f);}
function A2e(a,b){var c,d,e,f,$$je;c=a.R.gd();a:{try{d=0;e=a.R.j;}catch($$e){$$je=T($$e);f=$$je;break a;}b:{try{while(d<e){if(c.data[d].pl(b))break b;d=d+1|0;}}catch($$e){$$je=T($$e);f=$$je;break a;}a.R.N();return 0;}try{}catch($$e){$$je=T($$e);f=$$je;break a;}a.R.N();return 1;}a.R.N();G(f);}
function A2z(a,b){var c,d,e,f,$$je;c=a.R.gd();a:{try{d=0;e=a.R.j;}catch($$e){$$je=T($$e);f=$$je;break a;}b:{try{while(d<e){if(c.data[d].lX(b))break b;d=d+1|0;}}catch($$e){$$je=T($$e);f=$$je;break a;}a.R.N();return 0;}try{}catch($$e){$$je=T($$e);f=$$je;break a;}a.R.N();return 1;}a.R.N();G(f);}
function ALH(a,b,c,d,e){var f,g,h,i,$$je;f=a.R.gd();a:{try{g=0;h=a.R.j;}catch($$e){$$je=T($$e);i=$$je;break a;}b:{try{while(g<h){if(f.data[g].iL(b,c,d,e))break b;g=g+1|0;}}catch($$e){$$je=T($$e);i=$$je;break a;}a.R.N();return 0;}try{}catch($$e){$$je=T($$e);i=$$je;break a;}a.R.N();return 1;}a.R.N();G(i);}
function AYn(a,b,c,d,e){var f,g,h,i,$$je;f=a.R.gd();a:{try{g=0;h=a.R.j;}catch($$e){$$je=T($$e);i=$$je;break a;}b:{try{while(g<h){if(f.data[g].h_(b,c,d,e))break b;g=g+1|0;}}catch($$e){$$je=T($$e);i=$$je;break a;}a.R.N();return 0;}try{}catch($$e){$$je=T($$e);i=$$je;break a;}a.R.N();return 1;}a.R.N();G(i);}
function AP_(a,b,c,d){var e,f,g,h,$$je;e=a.R.gd();a:{try{f=0;g=a.R.j;}catch($$e){$$je=T($$e);h=$$je;break a;}b:{try{while(f<g){if(e.data[f].jw(b,c,d))break b;f=f+1|0;}}catch($$e){$$je=T($$e);h=$$je;break a;}a.R.N();return 0;}try{}catch($$e){$$je=T($$e);h=$$je;break a;}a.R.N();return 1;}a.R.N();G(h);}
function AZZ(a,b,c){var d,e,f,g,$$je;d=a.R.gd();a:{try{e=0;f=a.R.j;}catch($$e){$$je=T($$e);g=$$je;break a;}b:{try{while(e<f){if(d.data[e].nM(b,c))break b;e=e+1|0;}}catch($$e){$$je=T($$e);g=$$je;break a;}a.R.N();return 0;}try{}catch($$e){$$je=T($$e);g=$$je;break a;}a.R.N();return 1;}a.R.N();G(g);}
function BaW(a,b,c){var d,e,f,g,$$je;d=a.R.gd();a:{try{e=0;f=a.R.j;}catch($$e){$$je=T($$e);g=$$je;break a;}b:{try{while(e<f){if(d.data[e].pp(b,c))break b;e=e+1|0;}}catch($$e){$$je=T($$e);g=$$je;break a;}a.R.N();return 0;}try{}catch($$e){$$je=T($$e);g=$$je;break a;}a.R.N();return 1;}a.R.N();G(g);}
var Mf=D(0);
function UJ(){var a=this;C.call(a);a.z0=0;a.h6=0;a.Gq=0;a.xx=0;a.kK=0;a.eH=null;a.mM=null;a.NC=0;a.Bi=0;a.yN=0;a.Tp=0;a.vY=0;a.OU=0;a.sB=null;a.hA=null;a.ve=null;}
function BkF(a,b,c,d){var e=new UJ();A9c(e,a,b,c,d);return e;}
function Bk3(a,b,c,d,e){var f=new UJ();VO(f,a,b,c,d,e);return f;}
function A9c(a,b,c,d,e){VO(a,b,c,d,e,Bf7(c,d,e));a.NC=1;}
function VO(a,b,c,d,e,f){var g,h,i,j;J(a);a.sB=BH();a.xx=b;a.Bi=e;a.mM=f;g=SA(a,c,d,e);a.eH=BjU(0,b,0,g);a.hA=B5(Cp(b,(a.eH.fp()).b9/4|0));a.yN=(a.eH.fp()).b9/4|0;a.Tp=a.eH.kc(8)===null?0:(a.eH.kc(8)).cp/4|0;a.vY=a.eH.kc(4)===null?0:(a.eH.kc(4)).cp/4|0;if(a.eH.kc(16)===null)h=0;else{i=a.eH;h=(i.kc(16)).cp/4|0;}a.OU=h;a.ve=Y(BM,e);j=0;while(j<e){a.ve.data[j]=(((H()).a(B(537))).h(j)).b();j=j+1|0;}}
function SA(a,b,c,d){var e,f,g;e=Bs();e.E(Dr(1,3,B(352)));if(b)e.E(Dr(8,3,B(441)));if(c)e.E(Dr(4,4,B(353)));f=0;while(f<d){e.E(Dr(16,2,(((H()).a(B(538))).h(f)).b()));f=f+1|0;}g=Y(Fa,e.j);f=0;while(f<e.j){g.data[f]=e.o(f);f=f+1|0;}return g;}
function ANO(a,b,c){a.sB.b6(b);a.z0=c;}
function AZL(a,b,c,d,e){a.hA.data[a.h6+a.vY|0]=T_(b,c,d,e);}
function A4Z(a,b){a.hA.data[a.h6+a.vY|0]=b;}
function BaB(a,b,c,d){var e;e=a.h6;a.hA.data[e]=b;a.hA.data[e+1|0]=c;a.hA.data[e+2|0]=d;a.Gq=0;a.h6=a.h6+a.yN|0;a.kK=a.kK+1|0;}
function Bgb(a){var b;if(!a.kK)return;a.mM.d8();a.mM.wv(B(539),a.sB);b=0;while(b<a.Bi){a.mM.sM(a.ve.data[b],b);b=b+1|0;}a.eH.wN(a.hA,0,a.h6);a.eH.MB(a.mM,a.z0);a.Gq=0;a.h6=0;a.kK=0;}
function AMV(a){a.dE();}
function AP5(a){return a.kK;}
function APN(a){return a.xx;}
function A2F(b,c,d){var e,f,g;e=((((H()).a(B(540))).a(!b?B(59):B(541))).a(!c?B(59):B(542))).b();f=0;while(f<d){e=(((((H()).a(e)).a(B(543))).h(f)).a(B(544))).b();f=f+1|0;}g=((((H()).a(e)).a(B(545))).a(!c?B(59):B(546))).b();f=0;while(f<d){g=(((((H()).a(g)).a(B(547))).h(f)).a(B(544))).b();f=f+1|0;}g=(((H()).a(g)).a(B(548))).b();if(c)g=(((H()).a(g)).a(B(549))).b();f=0;while(f<d){g=((((((((H()).a(g)).a(B(550))).h(f)).a(B(551))).a(B(538))).h(f)).a(B(544))).b();f=f+1|0;}g=(((H()).a(g)).a(B(552))).b();return g;}
function Bau(b,c,d){var e,f,g,h;e=B(553);if(c)e=(((H()).a(e)).a(B(546))).b();f=0;while(f<d){g=(((((H()).a(e)).a(B(547))).h(f)).a(B(544))).b();e=(((((H()).a(g)).a(B(554))).h(f)).a(B(544))).b();f=f+1|0;}g=((H()).a(e)).a(B(555));h=!c?B(556):B(557);g=(g.a(h)).b();if(d>0)g=(((H()).a(g)).a(B(447))).b();f=0;while(f<d){g=f!=(d-1|0)?(((((((H()).a(g)).a(B(558))).h(f)).a(B(559))).h(f)).a(B(560))).b():(((((((H()).a(g)).a(B(558))).h(f)).a(B(559))).h(f)).a(B(21))).b();f=f+1|0;}g=(((H()).a(g)).a(B(561))).b();return g;}
function Bf7(b,c,d){var e,f,g;e=A2F(b,c,d);f=Bau(b,c,d);g=Uh(e,f);if(g.ov())return g;G(W((((H()).a(B(357))).a(g.n0())).b()));}
var Km=D(CH);
var BzZ=null;var Bz0=null;function Bz1(){Bz1=L(Km);A37();}
function A37(){BzZ=DM();Bz0=BpB();}
function AHW(){var a=this;F_.call(a);a.uG=null;a.ir=0;a.KH=0;a.rx=0;}
function Bz2(a,b,c){var d=new AHW();AJ1(d,a,b,c);return d;}
function ACR(a){var b=new AHW();AMF(b,a);return b;}
function AJ1(a,b,c,d){Mo(a);a.uG=b;a.ir=c;a.KH=c;a.rx=c+d|0;}
function AMF(a,b){AJ1(a,b,0,b.data.length);}
function A6s(a){var b,c,d;if(a.ir>=a.rx)b=(-1);else{c=a.uG.data;d=a.ir;a.ir=d+1|0;b=c[d]&255;}return b;}
function Bh3(a,b,c,d){var e,f,g,h,i,j;e=Bw(d,a.rx-a.ir|0);f=0;while(f<e){g=b.data;h=c+1|0;i=a.uG.data;j=a.ir;a.ir=j+1|0;g[c]=i[j];f=f+1|0;c=h;}if(e<=0)e=(-1);return e;}
function ARw(a){}
var XT=D();
function AKF(b,c){var d,e,f,g,h,i,j,k;if(!b)return B(289);d=1<<c;e=d-1|0;f=(((32-OF(b)|0)+c|0)-1|0)/c|0;g=B$(f);h=Cp(f-1|0,c);i=0;while(h>=0){j=g.data;k=i+1|0;j[i]=G2(b>>>h&e,d);h=h-c|0;i=k;}return Oo(g);}
var Yx=D(EV);
function Bni(a,b,c){var d=new Yx();Bh6(d,a,b,c);return d;}
function Bh6(a,b,c,d){PS(a,b,c,d);}
function AUW(a,b,c,d){var e;if((b+a.bz.co()|0)<=d.O()){e=a.bz.bM(b,c);if(e>=1)b=b+e|0;}return a.l.e(b,c,d);}
function AIc(){var a=this;C.call(a);a.fw=null;a.iO=null;a.l7=0;a.l1=null;a.pv=0;a.dv=0;a.ks=null;a.cg=null;}
function BoQ(){var a=new AIc();ATF(a);return a;}
function ATF(a){J(a);a.l7=7;a.dv=0;a.l1=Y(C,256);a.ks=Be(40);a.cg=Be(40);}
function A3a(a,b,c,d,e){var f,g,h,i,j,k,l,m,n;f=b.data;a.dv=0;ASn(f.length,d,e);g=e-d|0;if(g<2)return;if(g<32){h=Zr(b,d,e,c);AIZ(b,d,e,d+h|0,c);return;}a.fw=b;a.iO=c;a.pv=0;i=A3s(g);while(true){j=Zr(b,d,e,c);if(j>=i)k=j;else{k=g>i?i:g;AIZ(b,d,d+k|0,d+j|0,c);}AF4(a,d,k);ADq(a);d=d+k|0;g=g-k|0;if(!g)break;}Yi(a);a.fw=null;a.iO=null;l=a.l1;m=0;n=a.pv;while(m<n){l.data[m]=null;m=m+1|0;}}
function AIZ(b,c,d,e,f){var g,h,i,j,k,l;if(e==c)e=e+1|0;while(e<d){g=b.data;h=g[e];i=e;j=c;while(j<i){k=(j+i|0)>>>1;if(f.c7(h,g[k])<0)i=k;else j=k+1|0;}a:{b:{l=e-j|0;switch(l){case 1:break b;case 2:g[j+2|0]=g[j+1|0];break b;default:}Bc(b,j,b,j+1|0,l);break a;}g[j+1|0]=g[j];}g[j]=h;e=e+1|0;}}
function Zr(b,c,d,e){var f,g,h;f=c+1|0;if(f==d)return 1;a:{g=b.data;h=f+1|0;if(e.c7(g[f],g[c])>=0)while(h<d){if(e.c7(g[h],g[h-1|0])<0)break a;h=h+1|0;}else{while(h<d&&e.c7(g[h],g[h-1|0])<0){h=h+1|0;}BeM(b,c,h);}}return h-c|0;}
function BeM(b,c,d){var e,f,g,h,i;e=d+(-1)|0;while(c<e){f=b.data;g=f[c];h=c+1|0;f[c]=f[e];i=e+(-1)|0;f[e]=g;c=h;e=i;}}
function A3s(b){var c;c=0;while(b>=32){c=c|b&1;b=b>>1;}return b+c|0;}
function AF4(a,b,c){a.ks.data[a.dv]=b;a.cg.data[a.dv]=c;a.dv=a.dv+1|0;}
function ADq(a){var b;a:{while(true){if(a.dv<=1)break a;b=a.dv-2|0;if(!(b>=1&&a.cg.data[b-1|0]<=(a.cg.data[b]+a.cg.data[b+1|0]|0))&&!(b>=2&&a.cg.data[b-2|0]<=(a.cg.data[b]+a.cg.data[b-1|0]|0))){if(a.cg.data[b]>a.cg.data[b+1|0])break;}else if(a.cg.data[b-1|0]<a.cg.data[b+1|0])b=b+(-1)|0;Pg(a,b);}}}
function Yi(a){var b;while(a.dv>1){b=a.dv-2|0;if(b>0&&a.cg.data[b-1|0]<a.cg.data[b+1|0])b=b+(-1)|0;Pg(a,b);}}
function Pg(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.ks.data[b];d=a.cg.data[b];e=a.ks.data;f=b+1|0;g=e[f];h=a.cg.data[f];a.cg.data[b]=d+h|0;if(b==(a.dv-3|0)){i=a.ks.data;e=a.ks.data;j=b+2|0;i[f]=e[j];a.cg.data[f]=a.cg.data[j];}a.dv=a.dv-1|0;k=P2(a.fw.data[g],a.fw,c,d,0,a.iO);j=c+k|0;l=d-k|0;if(!l)return;m=LI(a.fw.data[(j+l|0)-1|0],a.fw,g,h,h-1|0,a.iO);if(!m)return;if(l>m)Y$(a,j,l,g,m);else ABn(a,j,l,g,m);}
function LI(b,c,d,e,f,g){var h,i,j,k,l,m,n,o;h=c.data;i=0;j=1;k=d+f|0;if(g.c7(b,h[k])>0){l=e-f|0;while(true){m=Cl(j,l);if(m>=0)break;if(g.c7(b,h[k+j|0])<=0)break;n=(j<<1)+1|0;if(n>0){i=j;j=n;continue;}n=l;i=j;j=n;}if(m<=0)l=j;n=i+f|0;k=l+f|0;}else{l=f+1|0;while(true){n=Cl(j,l);if(n>=0)break;if(g.c7(b,h[k-j|0])>0)break;n=(j<<1)+1|0;if(n>0){i=j;j=n;continue;}n=l;i=j;j=n;}if(n<=0)l=j;n=f-l|0;k=f-i|0;}n=n+1|0;while(n<k){o=n+((k-n|0)>>>1)|0;if(g.c7(b,h[d+o|0])>0){n=o+1|0;o=k;}k=o;}return k;}
function P2(b,c,d,e,f,g){var h,i,j,k,l,m,n,o;h=c.data;i=1;j=0;k=d+f|0;if(g.c7(b,h[k])>=0){l=e-f|0;while(true){m=Cl(i,l);if(m>=0)break;if(g.c7(b,h[k+i|0])<0)break;m=(i<<1)+1|0;if(m>0){j=i;i=m;continue;}m=l;j=i;i=m;}if(m<=0)l=i;m=j+f|0;n=l+f|0;}else{l=f+1|0;while(true){m=Cl(i,l);if(m>=0)break;if(g.c7(b,h[k-i|0])>=0)break;m=(i<<1)+1|0;if(m>0){j=i;i=m;continue;}m=l;j=i;i=m;}if(m<=0)l=i;m=f-l|0;n=f-j|0;}m=m+1|0;while(m<n){o=m+((n-m|0)>>>1)|0;if(g.c7(b,h[d+o|0])<0)n=o;else m=o+1|0;}return n;}
function ABn(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;f=a.fw;g=f.data;h=QW(a,c);Bc(f,b,h,0,c);i=0;j=b+1|0;k=d+1|0;g[b]=g[d];l=e+(-1)|0;if(!l){Bc(h,i,f,j,c);return;}if(c==1){m=h.data;Bc(f,k,f,j,l);g[j+l|0]=m[i];return;}n=a.iO;o=a.l7;a:{b:while(true){p=0;q=0;r=j;s=k;t=i;while(true){m=h.data;if(n.c7(g[s],m[t])<0){j=r+1|0;k=s+1|0;g[r]=g[s];q=q+1|0;p=0;l=l+(-1)|0;if(!l)break a;s=k;i=t;}else{j=r+1|0;i=t+1|0;g[r]=m[t];p=p+1|0;q=0;c=c+(-1)|0;if(c==1){t=i;k=s;break a;}}if((p|q)>=o)break;r=j;t=i;}k=s;while(true)
{r=P2(g[k],h,i,c,0,n);if(!r){s=j;t=i;}else{Bc(h,i,f,j,r);j=j+r|0;t=i+r|0;c=c-r|0;if(c<=1)break a;s=j;}j=s+1|0;u=k+1|0;g[s]=g[k];l=l+(-1)|0;if(!l){k=u;break a;}s=LI(m[t],f,u,l,0,n);if(!s){v=j;k=u;}else{Bc(f,u,f,j,s);j=j+s|0;k=u+s|0;l=l-s|0;if(!l)break b;v=j;}j=v+1|0;i=t+1|0;g[v]=m[t];c=c+(-1)|0;if(c==1){t=i;break a;}o=o+(-1)|0;if(!((r<7?0:1)|(s<7?0:1)))break;}if(o<0)o=0;o=o+2|0;}}if(o<1)o=1;a.l7=o;if(c==1){Bc(f,k,f,j,l);g[j+l|0]=m[t];}else{if(!c)G(Z(B(562)));Bc(h,t,f,j,c);}}
function Y$(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;f=a.fw;g=f.data;h=QW(a,e);Bc(f,d,h,0,e);i=(b+c|0)-1|0;j=e-1|0;k=(d+e|0)-1|0;l=k+(-1)|0;m=i+(-1)|0;g[k]=g[i];n=c+(-1)|0;if(!n){Bc(h,0,f,l-j|0,e);return;}if(e==1){o=h.data;p=l-n|0;q=m-n|0;Bc(f,q+1|0,f,p+1|0,n);g[p]=o[j];return;}r=a.iO;s=a.l7;a:{b:while(true){t=0;u=0;v=l;while(true){o=h.data;if(r.c7(o[j],g[m])<0){l=v+(-1)|0;q=m+(-1)|0;g[v]=g[m];t=t+1|0;u=0;n=n+(-1)|0;if(!n)break a;m=q;p=j;}else{l=v+(-1)|0;p=j+(-1)|0;g[v]=o[j];u=u+1|0;t=0;e=e+(-1)|0;if
(e==1){q=m;j=p;break a;}}if((t|u)>=s)break;v=l;j=p;}j=p;while(true){v=n-P2(o[j],f,b,n,n-1|0,r)|0;if(!v){p=l;q=m;}else{l=l-v|0;q=m-v|0;n=n-v|0;Bc(f,q+1|0,f,l+1|0,v);if(!n)break a;p=l;}l=p+(-1)|0;m=j+(-1)|0;g[p]=o[j];e=e+(-1)|0;if(e==1){j=m;break a;}w=e-LI(g[q],h,0,e,e-1|0,r)|0;if(!w){p=l;j=m;}else{l=l-w|0;j=m-w|0;e=e-w|0;Bc(h,j+1|0,f,l+1|0,w);if(e<=1)break b;p=l;}l=p+(-1)|0;m=q+(-1)|0;g[p]=g[q];n=n+(-1)|0;if(!n){q=m;break a;}s=s+(-1)|0;if(!((v<7?0:1)|(w<7?0:1)))break;}if(s<0)s=0;s=s+2|0;}}if(s<1)s=1;a.l7=s;if
(e==1){p=l-n|0;q=q-n|0;Bc(f,q+1|0,f,p+1|0,n);g[p]=o[j];}else{if(!e)G(Z(B(562)));Bc(h,0,f,l-(e-1|0)|0,e);}}
function QW(a,b){var c,d;a.pv=Bj(a.pv,b);if(a.l1.data.length<b){c=b|b>>1;c=c|c>>2;c=c|c>>4;c=c|c>>8;c=c|c>>16;c=c+1|0;if(c>=0)b=Bw(c,a.fw.data.length>>>1);d=Y(C,b);a.l1=d;}return a.l1;}
function ASn(b,c,d){if(c<=d){if(c<0)G(ARD(c));if(d<=b)return;G(ARD(d));}G(Z(((((((H()).a(B(563))).h(c)).a(B(564))).h(d)).a(B(21))).b()));}
var ACT=D();
function Bp4(b){var c,d,e,f,$$je;a:{try{c=BmV(B(565));d=AWe();if(d!==null){e=d;AH9(new Jz,e,c);}}catch($$e){$$je=T($$e);if($$je instanceof DA){f=$$je;break a;}else{throw $$e;}}return;}f.HB();G(f);}
function AWe(){return Bp2();}
var AHD=D();
var IE=D(Bt);
var WP=D(FK);
var AEU=D(Bu);
var AET=D(F8);
function SZ(){R.call(this);this.UW=0.0;}
function BqD(a){var b=new SZ();A8y(b,a);return b;}
function A8y(a,b){B6(a);a.UW=b;}
var AEV=D(Bu);
var AIs=D();
function Bcx(b,c){if(b===c)return 1;return b!==null?b.C(c):c!==null?0:1;}
function Zh(){C.call(this);this.cn=null;}
function AXa(){var a=new Zh();BdX(a);return a;}
function Bi8(b){if(b<0.0)b=0.0;else if(b>1.0)b=1.0;return b;}
function BdX(a){J(a);a.cn=B5(18);}
function A5g(a,b){return a.UH(b.v,b.u,b.w);}
function A4m(a,b,c,d){var e;e=0;while(e<18){a.cn.data[e]=b;a.cn.data[e+1|0]=c;a.cn.data[e+2|0]=d;e=e+3|0;}return a;}
function BhK(a){var b;b=0;while(b<a.cn.data.length){a.cn.data[b]=Bi8(a.cn.data[b]);b=b+1|0;}return a;}
function Bfc(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s;h=e*e;i=f*f;j=g*g;k=h+i+j;if(k===0.0)return a;l=1.0/k*(k+1.0);m=b*l;n=c*l;o=d*l;p=e<=0.0?3:0;q=a.cn.data;q[p]=q[p]+h*m;q=a.cn.data;r=p+1|0;q[r]=q[r]+h*n;q=a.cn.data;r=p+2|0;q[r]=q[r]+h*o;r=f<=0.0?9:6;q=a.cn.data;q[r]=q[r]+i*m;q=a.cn.data;s=r+1|0;q[s]=q[s]+i*n;q=a.cn.data;r=r+2|0;q[r]=q[r]+i*o;r=g<=0.0?15:12;q=a.cn.data;q[r]=q[r]+j*m;q=a.cn.data;s=r+1|0;q[s]=q[s]+j*n;q=a.cn.data;r=r+2|0;q[r]=q[r]+j*o;return a;}
function Bba(a,b,c){return a.GT(b.v,b.u,b.w,c.m,c.n,c.p);}
function ANg(a,b,c,d,e){var f;f=e/(1.0+d.I4(c));return a.GT(b.v*f,b.u*f,b.w*f,d.m-c.m,d.n-c.n,d.p-c.p);}
var PW=D(0);
function AE2(){var a=this;BX.call(a);a.cH=null;a.uF=null;a.sJ=null;}
function BkS(a){var b=new AE2();A7d(b,a);return b;}
function A7d(a,b){var c;Dm(a);a.cH=b.b();a.bT=b.k();a.uF=BbX(a.bT);a.sJ=BbX(a.bT);c=0;while(c<(a.bT-1|0)){a.uF.o$(a.cH.g(c),(a.bT-c|0)-1|0);a.sJ.o$(a.cH.g((a.bT-c|0)-1|0),(a.bT-c|0)-1|0);c=c+1|0;}}
function AOv(a,b,c){return !a.wn(c,b)?(-1):a.bT;}
function A46(a,b,c,d){var e,f;e=d.O();while(true){if(b>e)return (-1);f=a.R9(c,b,e);if(f<0)return (-1);if(a.l.e(f+a.bT|0,c,d)>=0)break;b=f+1|0;}return f;}
function A89(a,b,c,d,e){var f;while(true){if(c<b)return (-1);f=a.OY(d,b,c);if(f<0)return (-1);if(a.l.e(f+a.bT|0,d,e)>=0)break;c=f+(-1)|0;}return f;}
function AWk(a){return (((H()).a(B(566))).a(a.cH)).b();}
function ARq(a,b){var c,d,e,f,g;if(b instanceof D7)return b.qd()!=a.cH.g(0)?0:1;if(b instanceof D3)return b.bM(0,a.cH.cm(0,1))<=0?0:1;if(!(b instanceof Do)){if(!(b instanceof D1))return 1;a:{if(a.cH.k()>1){c=b;d=c.tR();e=a.cH.g(0);c=a.cH;f=c.g(1);if(d==DI(e,f)){e=1;break a;}}e=0;}return e;}b:{c:{c=b;if(!c.r(a.cH.g(0))){g=a.cH;if(g.k()<=1)break c;g=a.cH;e=DI(g.g(0),a.cH.g(1));if(!c.r(e))break c;}e=1;break b;}e=0;}return e;}
function Bgy(a,b,c,d){var e,f;e=a.cH.g(a.bT-1|0);while(true){if(c>(d-a.bT|0))return (-1);f=b.g((c+a.bT|0)-1|0);if(f==e&&a.wn(b,c))break;c=c+a.uF.b_(f)|0;}return c;}
function Bfy(a,b,c,d){var e,f,g,h;e=a.cH.g(0);f=b.k();g=(f-d|0)-a.bT|0;if(g<=0)d=d+g|0;while(true){if(d<c)return (-1);h=b.g(d);if(h==e&&a.wn(b,d))break;d=d-a.sJ.b_(h)|0;}return d;}
function ARP(a,b,c){var d;d=0;while(d<a.bT){if(b.g(d+c|0)!=a.cH.g(d))return 0;d=d+1|0;}return 1;}
var Eb=D();
var Bsd=0;var Bse=0;var Bz3=0;var Bz4=null;var Bz5=null;var Bz6=null;var Bz7=null;function Np(){Np=L(Eb);A7j();}
function ADf(){Np();AHH(0);}
function AHH(b){Np();AIE(b,1);}
function AIE(b,c){var d;Np();if(Bz3)return;Bz3=1;Bsd=b;Bse=c;d=Bullet.MyClassHelper.prototype.getBTVersion();if(d==320)return;G(W(((((((H()).a(B(567))).h(d)).a(B(568))).h(320)).a(B(21))).b()));}
function A7j(){Bsd=0;Bse=1;Bz3=0;Bz4=BkG();Bz5=Bs();Bz6=BH();Bz7=BH();}
var OJ=D(Cg);
function Fp(a,b){var c=new OJ();Bef(c,a,b);return c;}
function Bef(a,b,c){LL(a,b,c);}
var GZ=D(C2);
function BqJ(a,b,c){var d=new GZ();Ot(d,a,b,c);return d;}
function Ot(a,b,c,d){Gf(a,b,c,d);}
function Bfb(a,b,c,d){var e;if(!a.bd.bf(d))return a.l.e(b,c,d);e=a.bd.e(b,c,d);if(e>=0)return e;return a.l.e(b,c,d);}
function BgZ(a,b){NP(a,b);a.bd.V(b);}
var AHv=D(DS);
function S3(){var a=this;BX.call(a);a.u$=null;a.yR=0;}
function ARh(a){var b=new S3();AVP(b,a);return b;}
function AVP(a,b){Dm(a);a.u$=b.mP();a.yR=b.bH;}
function A_a(a,b,c){var d,e;d=a.u$;e=D_(c.g(b));return !d.r(DV(e))?(-1):1;}
function A5w(a){return ((((H()).a(B(435))).a(!a.yR?B(48):B(49))).a(a.u$.b())).b();}
var AHj=D();
var AEu=D();
var Ux=D();
var AES=D(Cj);
var Vg=D(Bu);
var N0=D(EE);
var Vf=D(Bu);
var ABV=D();
function AKC(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function BbH(b,c){return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&AGg(b.constructor,c)?1:0;}
function AGg(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AGg(d[e],c))return 1;e=e+1|0;}return 0;}
function Bnx(b){b.ft();}
function AUm(b){AYD(b,0);}
function AYD(b,c){return setTimeout(function(){Bnx(b);},c);}
function AKn(){return AS3();}
function AHJ(b){return A8T(String.fromCharCode(b));}
function Be6(b){return b.$meta.primitive?1:0;}
function AJt(b){return b.$meta.item;}
function AYz(b){return $rt_str(b.$meta.name);}
function AS3(){return [];}
function Hg(){C.call(this);this.Nv=null;}
var Bsa=null;var Br_=null;var Br$=null;function DJ(){DJ=L(Hg);AUs();}
function Y9(a){var b=new Hg();AHo(b,a);return b;}
function AHo(a,b){DJ();J(a);a.Nv=b;}
function AUs(){Bsa=Y9(B(569));Br_=Y9(B(570));Br$=Y9(B(571));}
function Hs(){C.call(this);this.Bz=0;}
var Bz8=null;var Bz9=null;var Bz$=null;function Bjy(){Bjy=L(Hs);A4_();}
function AWS(a){var b=new Hs();W7(b,a);return b;}
function W7(a,b){Bjy();J(a);a.Bz=b;}
function A9u(a){return a.Bz;}
function A4_(){Bz8=AWS(1);Bz9=AWS(0);Bz$=E($rt_booleancls());}
var AEQ=D();
var ZY=D(Bt);
function Bkc(){var a=new ZY();Ba9(a);return a;}
function Bm9(a){var b=new ZY();A$Q(b,a);return b;}
function Ba9(a){CQ(a);}
function A$Q(a,b){Fy(a,b);}
var AH5=D(Cj);
function Sg(){var a=this;C.call(a);a.GY=null;a.tX=null;}
function Bms(a,b){var c=new Sg();A0E(c,a,b);return c;}
function A0E(a,b,c){a.tX=b;a.GY=c;J(a);}
function AZ2(a){ARO(a.tX.nV,BjP(a.GY));Bts=BgQ(a.tX.nV);}
function BgM(a){}
function AVH(a){a.Ke();}
function AOI(a){a.Ja();}
var AID=D(GU);
function Bnr(a,b){var c=new AID();BgH(c,a,b);return c;}
function BgH(a,b,c){L9(a,b,c);}
function ANX(a,b,c,d){var e,f;e=a.kx(d);if(e!==null&&(b+e.k()|0)<=d.O()){f=!(c.b()).Bl(e,b)?(-1):e.k();if(f<0)return (-1);d.bC(a.jC,f);return a.l.e(b+f|0,c,d);}return (-1);}
function AZX(a,b,c,d){var e,f,g,h;e=a.kx(d);f=d.dW();if(e!==null&&(b+e.k()|0)<=f){g=c.b();while(true){if(b>f)return (-1);h=g.vC(e,b);if(h<0)return (-1);if(a.l.e(h+e.k()|0,c,d)>=0)break;b=h+1|0;}return h;}return (-1);}
function AK9(a,b,c,d,e){var f,g,h;f=a.kx(e);if(f===null)return (-1);g=d.b();a:{while(true){if(c<b)return (-1);h=g.BP(f,c);if(h<0)break a;if(h<b)break a;if(a.l.e(h+f.k()|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function BaQ(a,b){return 1;}
function BgT(a){return (((H()).a(B(572))).h(a.bt)).b();}
function ABG(){DC.call(this);this.rW=null;}
function BjV(a,b,c,d){var e=new ABG();Bdb(e,a,b,c,d);return e;}
function Bdb(a,b,c,d,e){G9(a,b,c,d);a.rW=e;}
function AWw(a,b,c,d){var e,f;e=d.O();f=Qj(a,b,e,c);if(f>=0)e=f;if(e>b)return a.l.cQ(b,e,c,d);return a.l.e(b,c,d);}
function AKq(a,b,c,d){var e,f,g,h,i;e=d.O();f=a.l.cM(b,c,d);if(f<0)return (-1);g=Qj(a,f,e,c);if(g>=0)e=g;h=a.l.cQ(f,e,c,d);h=Bj(f,h);i=h>0?AII(a,b,h-1|0,c):h?(-1):0;if(i>=b)b=i>=h?i:i+1|0;return b;}
function Qj(a,b,c,d){while(true){if(b>=c)return (-1);if(a.rW.ls(d.g(b)))break;b=b+1|0;}return b;}
function AII(a,b,c,d){while(true){if(c<b)return (-1);if(a.rW.ls(d.g(c)))break;c=c+(-1)|0;}return c;}
function Beu(a){return B(573);}
var VP=D(FC);
var KC=D();
var Bz_=null;var BAa=null;function AJG(){AJG=L(KC);A8n();}
function AFS(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;AJG();d=$rt_floatToIntBits(b);c.xw=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.r3=0;c.rA=0;return;}g=0;if(f)h=e|8388608;else{h=e<<1;while(Bb(Bx(N(h),N(8388608)),X)){h=h<<1;f=f+(-1)|0;g=g+1|0;}}i=BbF(BAa,f);if(i<0)i=( -i|0)-2|0;j=f-BAa.data[i]|0;k=9+j|0;l=N(h);m=V(C$(Cu(l,N(Bz_.data[i])),32-k|0));if(m>=1000000000){i=i+1|0;n=f-BAa.data[i]|0;k=9+n|0;m=V(C$(Cu(l,N(Bz_.data[i])),32-k|0));}n=(31-k|0)-g|0;o=n>=0?Bz_.data[i]>>>n:Bz_.data[i]<<( -n
|0);p=(o+1|0)>>1;q=o>>1;if(h==4194304)q=q>>2;r=AFV(m,q);s=Ub(m,p);h=Cl(r,s);h=h>0?Cp(m/r|0,r):h<0?Cp(m/s|0,s)+s|0:Cp((m+(s/2|0)|0)/s|0,s);if(h>=1000000000){i=i+1|0;h=h/10|0;}else if(h<100000000){i=i+(-1)|0;h=h*10|0;}c.r3=h;c.rA=i-50|0;}
function AFV(b,c){var d,e;AJG();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if(e>=(c/2|0))d=d/10|0;return d;}
function Ub(b,c){var d,e;AJG();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if((d-e|0)>(c/2|0))d=d/10|0;return d;}
function A8n(){var b,c,d,e,f,g,h,i,j,k,l;Bz_=Be(100);BAa=Be(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=Bz_.data;g=d+50|0;f[g]=$rt_udiv(e,20);BAa.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}i=214748364;e=127;d=0;while(d<50){j=0;k=b;while(k>i){k=k>>1;j=j+1|0;e=e+(-1)|0;}k=k*10|0;if(j<=0)b=k;else{l=N(b&((1<<j)-1|0));b=V(CS(N(k),Pt(Cu(l,N(10)),j)));}f=Bz_.data;k=(50-d|0)-1|0;f[k]=$rt_udiv(b,20);BAa.data[k]=e;d=d+1|0;}}
function CL(){Bd.call(this);this.A6=null;}
var BzT=null;var BAb=null;var BAc=null;var BAd=null;var BAe=null;var BAf=null;var BAg=null;var BAh=null;var BAi=null;var BzS=null;var BAj=null;var BAk=null;function Kb(){Kb=L(CL);A9e();}
function DO(a,b,c){var d=new CL();W9(d,a,b,c);return d;}
function W9(a,b,c,d){Kb();B4(a,b,c);a.A6=d;}
function F7(a){return a.A6;}
function A9e(){BzT=DO(B(574),0,B(575));BAb=DO(B(576),1,B(577));BAc=DO(B(578),2,B(579));BAd=DO(B(580),3,B(581));BAe=DO(B(582),4,B(583));BAf=DO(B(584),5,B(585));BAg=DO(B(586),6,B(587));BAh=DO(B(588),7,B(589));BAi=DO(B(590),8,B(591));BzS=DO(B(592),9,B(593));BAj=DO(B(594),10,B(595));BAk=I(CL,[BzT,BAb,BAc,BAd,BAe,BAf,BAg,BAh,BAi,BzS,BAj]);}
var AFD=D();
var Fk=D(Bd);
var BAl=null;var BAm=null;var BAn=null;var BAo=null;function Boj(){Boj=L(Fk);AVJ();}
function UP(a,b){var c=new Fk();TH(c,a,b);return c;}
function TH(a,b,c){Boj();B4(a,b,c);}
function AVJ(){BAl=UP(B(596),0);BAm=UP(B(597),1);BAn=UP(B(598),2);BAo=I(Fk,[BAl,BAm,BAn]);}
var Xz=D(DF);
function Hr(){var a=this;Kg.call(a);a.f6=null;a.cP=null;a.vT=null;}
function A3u(a,b,c){var d=new Hr();IO(d,a,b,c);return d;}
function IO(a,b,c,d){ZB(a);H$();if(d!==BzL&&d!==BzM)G(W(((((H()).a(B(527))).c0(d)).a(B(599))).b()));a.f6=b;a.cP=A$_(c);a.vT=d;}
function APz(a){return a.cP;}
function ARZ(a){var b;b=a.cP.y1(47);if(b<0)return a.cP;return a.cP.ex(b+1|0);}
function Be1(a){var b,c;b=a.zC();c=b.y1(46);if(c==(-1))return b;return b.cm(0,c);}
function ANF(a){return a.vT;}
function A0q(a){var b;b=a.f6.UL(a.cP);if(b!==null)return b;G(W((((H()).a(a.cP)).a(B(600))).b()));}
function APr(a){return a.PY(null);}
function Bhr(a,b){var c,$$je;if(a.f6.Pc(a.cP))return a.f6.eL.Y(a.cP);a:{try{c=Bll(a.K8(),B(338));}catch($$e){$$je=T($$e);if($$je instanceof H1){break a;}else{throw $$e;}}return c;}return null;}
function Bfo(a){var b,c,d,e,f,g,h,i,j,$$je;b=V((a.JR()));if(!b)b=512;c=Cy(b);d=0;e=a.rk();a:{try{try{while(true){f=c.data.length;g=e.sm(c,d,f-d|0);if(g==(-1))break;d=d+g|0;if(d==f){h=Cy(f*2|0);Bc(c,0,h,0,d);c=h;}}break a;}catch($$e){$$je=T($$e);if($$je instanceof DD){i=$$je;}else{throw $$e;}}G(K0((((H()).a(B(601))).c0(a)).b(),i));}catch($$e){$$je=T($$e);j=$$je;}b:{try{if(e!==null)e.f3();break b;}catch($$e){$$je=T($$e);if($$je instanceof DD){}else{throw $$e;}}}G(j);}c:{try{if(e!==null)e.f3();break c;}catch($$e)
{$$je=T($$e);if($$je instanceof DD){}else{throw $$e;}}}if(d>=f)h=c;else{h=Cy(d);Bc(c,0,h,0,d);}return h;}
function AWd(a,b){var c,d,e;c=new Hr;d=a.f6;e=(((H()).a(a.cP.bS()?B(59):(((H()).a(a.cP)).a(!a.cP.An(B(424))?B(424):B(59))).b())).a(b)).b();H$();IO(c,d,e,BzL);return c;}
function AOA(a){var b,c;b=a.cP.Kv(B(424));c=B(59);if(b>0)c=a.cP.cm(0,b);return A3u(a.f6,c,a.vT);}
function Bgk(a){return a.f6.Sc(a.cP);}
function BbC(a){return a.cP;}
function A$_(b){var c;c=b.vM(B(602),B(424));if(c.An(B(424)))c=c.cm(0,c.k()-1|0);return c;}
function Hh(){BF.call(this);this.hb=null;}
var BAp=null;function ASl(){ASl=L(Hh);ANj();}
function BAq(){var a=new Hh();PZ(a);return a;}
function BkX(a){var b=new Hh();W$(b,a);return b;}
function Z8(a){var b,c,d;b=BmT(a);c=Bl7(a);d=AJd(BJ(b,"setWorldTransformJS"),BJ(c,"getWorldTransformJS"));a.c1(N(d),1);}
function PZ(a){ASl();BS(a);a.hb=BH();Z8(a);}
function W$(a,b){ASl();BS(a);a.hb=BH();}
function ANj(){BAp=BkX(0);}
function AJd(b,c){var jsMotionState=new Bullet.MyMotionState();jsMotionState.setWorldTransform=b;jsMotionState.getWorldTransform=c;return Bullet.getPointer(jsMotionState);}
function AHP(){Hh.call(this);this.q2=null;}
function Bj8(a){var b=new AHP();BcF(b,a);return b;}
function BcF(a,b){PZ(a);a.q2=b;}
function AZy(a,b){b.b6(a.q2);}
function AUA(a,b){a.q2.b6(b);}
function Fo(){var a=this;C.call(a);a.fA=null;a.jy=0;a.pe=null;a.Ew=null;a.FW=null;a.EX=null;a.lC=null;a.EV=null;a.AI=null;a.DY=null;a.dS=0;a.rV=0;a.t2=0;a.UM=null;a.CW=null;a.x2=null;a.Ab=0;a.Np=0;a.cW=null;a.h0=null;}
var BAr=0;var BAs=null;var BAt=null;var BAu=null;var BAv=null;function ZK(){ZK=L(Fo);AXz();}
function Uh(a,b){var c=new Fo();ZP(c,a,b);return c;}
function ZP(a,b,c){ZK();J(a);a.fA=B(59);a.pe=HF();a.Ew=HF();a.FW=HF();a.lC=HF();a.EV=HF();a.AI=HF();a.Np=0;a.cW=Gn(1);a.h0=Gn(1);if(b===null)G(Z(B(603)));if(c===null)G(Z(B(604)));if(BAs!==null&&BAs.k()>0)b=(((H()).a(BAs)).a(b)).b();if(BAt!==null&&BAt.k()>0)c=(((H()).a(BAt)).a(c)).b();a.CW=b;a.x2=c;a.UM=Jv(16);Mj(a,b,c);if(a.ov()){T9(a);V0(a);AGE(a,Bsf,a);}}
function Mj(a,b,c){a.rV=Rh(a,35633,b);a.t2=Rh(a,35632,c);if(a.rV!=(-1)&&a.t2!=(-1)){a.dS=AIn(a,a.Lc());if(a.dS!=(-1)){a.jy=1;return;}a.jy=0;return;}a.jy=0;}
function Rh(a,b,c){var d,e,f,g,h;d=Btv;e=Gn(1);f=d.Sx(b);if(!f)return (-1);d.Vc(f,c);d.KX(f);d.RE(f,35713,e);g=e.b_(0);if(g)return f;h=d.RQ(f);a.fA=(((H()).a(a.fA)).a(b!=35633?B(605):B(606))).b();a.fA=(((H()).a(a.fA)).a(h)).b();return (-1);}
function ASe(a){var b,c;b=Btv;c=b.Qx();if(!c)c=(-1);return c;}
function AIn(a,b){var c,d,e,f;c=Btv;if(b==(-1))return (-1);c.yH(b,a.rV);c.yH(b,a.t2);c.OH(b);d=G8(4);GO(d,FU());e=d.Ae();c.ra(b,35714,e);f=e.b_(0);if(f)return b;a.fA=Btv.B2(b);return (-1);}
function Bfv(a){if(!a.jy)return a.fA;a.fA=Btv.B2(a.dS);return a.fA;}
function BgI(a){return a.jy;}
function UW(a,b){var c,d;c=Btv;d=a.lC.uJ(b,(-2));if(d==(-2)){d=c.E2(a.dS,b);a.lC.gP(b,d);}return d;}
function LM(a,b){ZK();return a.Cv(b,BAr);}
function A_V(a,b,c){var d;d=a.pe.uJ(b,(-2));if(d==(-2)){d=Btv.Cw(a.dS,b);if(d==(-1)&&c){if(!a.jy)G(C8((((H()).a(B(607))).a(a.n0())).b()));G(Z(((((H()).a(B(608))).a(b)).a(B(609))).b()));}a.pe.gP(b,d);}return d;}
function A$f(a,b,c){var d,e;d=Btv;CG(a);e=LM(a,b);d.Eg(e,c);}
function A83(a,b,c){var d;d=Btv;CG(a);d.Eg(b,c);}
function AXH(a,b,c){var d;d=Btv;CG(a);d.Qp(b,c);}
function AK0(a,b,c,d){var e;e=Btv;CG(a);e.S4(b,c,d);}
function AM5(a,b,c,d,e){var f;f=Btv;CG(a);f.Jj(b,c,d,e);}
function AYb(a,b,c,d,e,f){var g;g=Btv;CG(a);g.IU(b,c,d,e,f);}
function AZQ(a,b,c,d,e){var f;f=Btv;CG(a);f.HZ(b,e/3|0,c,d);}
function A79(a,b,c){a.Ll(b,c,0);}
function A38(a,b,c,d){a.A7(LM(a,b),c,d);}
function ATB(a,b,c){a.A7(b,c,0);}
function BaY(a,b,c,d){var e;e=Btv;CG(a);e.zJ(b,1,d,c.c,0);}
function BgV(a,b,c){a.OR(b,c,0);}
function APD(a,b,c,d){var e;e=Btv;CG(a);e.LG(b,1,d,c.g$,0);}
function A49(a,b,c,d,e){var f;f=Btv;CG(a);f.zJ(b,e/16|0,0,c,d);}
function AKj(a,b,c){a.jF(b,c.m,c.n,c.p);}
function Bdj(a,b,c){a.zY(b,c.v,c.u,c.w,c.H);}
function Bim(a,b,c,d,e,f,g){var h;h=Btv;CG(a);h.TE(b,c,d,e,f,g);}
function A4h(a){var b;b=Btv;CG(a);b.M_(a.dS);}
function AMs(a,b){var c,d;c=Btv;CG(a);d=UW(a,b);if(d==(-1))return;c.y8(d);}
function A_M(a,b){var c;c=Btv;CG(a);c.y8(b);}
function Bdh(a,b){var c;c=Btv;CG(a);c.U7(b);}
function CG(a){if(a.Ab){Mj(a,a.CW,a.x2);a.Ab=0;}}
function AGE(a,b,c){var d;ZK();d=BAu.Y(b);if(d===null)d=Bs();d.E(c);BAu.A(b,d);}
function V0(a){var b,c,d,e;a.cW.da();Btv.ra(a.dS,35718,a.cW);b=a.cW.b_(0);a.EX=Y(BM,b);c=0;while(c<b){a.cW.da();a.cW.uk(0,1);a.h0.da();d=Btv.UF(a.dS,c,a.cW,a.h0);e=Btv.Cw(a.dS,d);a.pe.gP(d,e);a.Ew.gP(d,a.h0.b_(0));a.FW.gP(d,a.cW.b_(0));a.EX.data[c]=d;c=c+1|0;}}
function T9(a){var b,c,d,e;a.cW.da();Btv.ra(a.dS,35721,a.cW);b=a.cW.b_(0);a.DY=Y(BM,b);c=0;while(c<b){a.cW.da();a.cW.uk(0,1);a.h0.da();d=Btv.T$(a.dS,c,a.cW,a.h0);e=Btv.E2(a.dS,d);a.lC.gP(d,e);a.EV.gP(d,a.h0.b_(0));a.AI.gP(d,a.cW.b_(0));a.DY.data[c]=d;c=c+1|0;}}
function AMj(a,b){return a.lC.uJ(b,(-1));}
function AXz(){BAr=1;BAs=B(59);BAt=B(59);BAu=Ef();BAv=Gn(1);}
var Eo=D(Bd);
var BzM=null;var BzL=null;var BAw=null;var BAx=null;var BAy=null;var BAz=null;function H$(){H$=L(Eo);APB();}
function JK(a,b){var c=new Eo();ABF(c,a,b);return c;}
function ABF(a,b,c){H$();B4(a,b,c);}
function APB(){BzM=JK(B(610),0);BzL=JK(B(611),1);BAw=JK(B(612),2);BAx=JK(B(613),3);BAy=JK(B(614),4);BAz=I(Eo,[BzM,BzL,BAw,BAx,BAy]);}
function AAC(){S.call(this);this.L0=null;}
function Bkb(a){var b=new AAC();BiS(b,a);return b;}
function BiS(a,b){a.L0=b;Bh(a);}
function AOJ(a,b){return U9(b);}
var Qs=D(0);
function TX(){var a=this;GX.call(a);a.md=0.0;a.Ao=null;}
function BoE(){var a=new TX();ANm(a);return a;}
function ANm(a){Nx(a);a.md=1.0;a.Ao=Q();a.lF=0.0;}
function A60(a){a.qX(1);}
function Bi2(a,b){a.jY.AO(a.md* -a.kZ/2.0,a.md*a.kZ/2.0,a.md* -(a.mL/2.0),a.md*a.mL/2.0,a.lF,a.kb);a.hM.DO(a.cy,(a.Ao.M(a.cy)).eA(a.dh),a.dF);a.ej.b6(a.jY);G1(a.ej.c,a.hM.c);if(b){a.gS.b6(a.ej);Pc(a.gS.c);a.sY.Cs(a.gS);}}
function Jj(){var a=this;C.call(a);a.dd=null;a.pz=0;a.yq=0;a.iE=0;a.mE=0;a.on=0;}
function AD_(a,b){var c=new Jj();A62(c,a,b);return c;}
function BAA(a){var b=new Jj();AIf(b,a);return b;}
function A62(a,b,c){J(a);a.iE=1;a.mE=0;a.yq=1;a.dd=AHr(c);a.dd.dn();a.pz=Btv.jp();a.on=!b?35048:35044;}
function AIf(a,b){J(a);a.iE=1;a.mE=0;a.yq=1;a.dd=AHr(b);a.dd.dn();a.pz=Btv.jp();a.on=35044;}
function ARy(a){return BG(a.dd);}
function A3I(a){return Dg(a.dd);}
function AVF(a,b,c,d){a.iE=1;a.dd.da();a.dd.Fw(b,c,d);a.dd.dn();if(a.mE){Btv.fQ(34963,BG(a.dd),a.dd,a.on);a.iE=0;}}
function A2V(a){a.iE=1;return a.dd;}
function Bhd(a){if(!a.pz)G(W(B(615)));Btv.dj(34963,a.pz);if(a.iE){Btv.fQ(34963,BG(a.dd),a.dd,a.on);a.iE=0;}a.mE=1;}
function Bee(a){Btv.dj(34963,0);a.mE=0;}
var TM=D(Jj);
function BmF(a){var b=new TM();Bck(b,a);return b;}
function Bck(a,b){AIf(a,b);}
var AGz=D(Ci);
var ABg=D();
function LO(b,c){var d,e,f,g;d=b.data;e=B$(c);f=Bw(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function QS(b,c){var d,e,f,g;d=b.data;e=Cy(c);f=Bw(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function A1F(b,c){var d,e,f,g;d=b.data;e=Be(c);f=Bw(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function KS(b,c){var d,e,f,g;d=b.data;e=Nw((Co(b)).gC(),c);f=Bw(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function A8m(b,c,d,e){var f,g;if(c>d)G(C7());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function Ko(b,c){A8m(b,0,b.data.length,c);}
function AYJ(b,c,d,e){var f,g;if(c>d)G(C7());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function AXg(b,c){AYJ(b,0,b.data.length,c);}
function IK(b,c,d,e){var f,g;if(c>d)G(C7());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function Z2(b,c){IK(b,0,b.data.length,c);}
function BbF(b,c){return BcK(b,0,b.data.length,c);}
function BcK(b,c,d,e){var f,g,h,i,j;f=Cl(c,d);if(f>0)G(C7());if(!f)return (-1);g=d-1|0;while(true){h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>g)return ( -i|0)-2|0;}else{g=i-1|0;if(g<c)return ( -i|0)-1|0;}}return i;}
function AHY(b,c){var d,e,f,g;if(b===c)return 1;if(b!==null&&c!==null){d=c.data;e=b.data;f=e.length;if(f==d.length){g=0;while(g<f){if(!Bcx(e[g],d[g]))return 0;g=g+1|0;}return 1;}}return 0;}
function ABI(){var a=this;S.call(a);a.tW=0;a.Dz=null;a.uT=null;}
function Bm5(a,b,c){var d=new ABI();A1y(d,a,b,c);return d;}
function A1y(a,b,c,d){a.uT=b;a.tW=c;a.Dz=d;Bh(a);}
function AYh(a,b){return !(a.tW^a.uT.bh.e0(b))&&!(a.tW^a.uT.fo^a.Dz.r(b))?0:1;}
function ABP(){var a=this;S.call(a);a.zk=0;a.EH=null;a.Em=null;a.Va=null;}
function Bm1(a,b,c,d){var e=new ABP();A8K(e,a,b,c,d);return e;}
function A8K(a,b,c,d,e){a.Va=b;a.zk=c;a.EH=d;a.Em=e;Bh(a);}
function AJ9(a,b){return a.zk^(!a.EH.r(b)&&!a.Em.r(b)?0:1)?0:1;}
function ABK(){var a=this;S.call(a);a.EM=null;a.R5=null;}
function Bks(a,b){var c=new ABK();AKk(c,a,b);return c;}
function AKk(a,b,c){a.R5=b;a.EM=c;Bh(a);}
function Bd$(a,b){return a.EM.r(b);}
function ABJ(){var a=this;S.call(a);a.q6=0;a.A8=null;a.s2=null;}
function Bka(a,b,c){var d=new ABJ();AKw(d,a,b,c);return d;}
function AKw(a,b,c,d){a.s2=b;a.q6=c;a.A8=d;Bh(a);}
function Bah(a,b){return !(a.q6^a.s2.bh.e0(b))&&!(a.q6^a.s2.fo^a.A8.r(b))?1:0;}
function ABL(){var a=this;S.call(a);a.yJ=null;a.Vo=null;}
function Bkn(a,b){var c=new ABL();AKt(c,a,b);return c;}
function AKt(a,b,c){a.Vo=b;a.yJ=c;Bh(a);}
function AQS(a,b){return a.yJ.r(b);}
var NW=D();
function ABS(){var a=this;S.call(a);a.z2=null;a.Fx=0;a.zS=null;}
function BjD(a,b,c){var d=new ABS();AOC(d,a,b,c);return d;}
function AOC(a,b,c,d){a.zS=b;a.z2=c;a.Fx=d;Bh(a);}
function A6W(a,b){return !a.z2.r(b)&&!(a.Fx^a.zS.bh.e0(b))?1:0;}
function ABO(){var a=this;S.call(a);a.Hg=0;a.A9=null;a.A2=null;a.PD=null;}
function Bqj(a,b,c,d){var e=new ABO();AKU(e,a,b,c,d);return e;}
function AKU(a,b,c,d,e){a.PD=b;a.Hg=c;a.A9=d;a.A2=e;Bh(a);}
function A7C(a,b){return a.Hg^(!a.A9.r(b)&&!a.A2.r(b)?0:1);}
function ABM(){var a=this;S.call(a);a.GU=null;a.P7=null;}
function Bqv(a,b){var c=new ABM();A25(c,a,b);return c;}
function A25(a,b,c){a.P7=b;a.GU=c;Bh(a);}
function AUf(a,b){return a.GU.r(b)?0:1;}
function S_(){BO.call(this);this.su=null;}
function Bl1(a){var b=new S_();ANP(b,a);return b;}
function ANP(a,b){Da(a);a.su=b;}
function Bcc(a,b,c,d){var e,f,g,h,i;e=d.O();f=b+1|0;if(f>e){d.eg=1;return (-1);}g=c.g(b);if(Cb(g)){h=b+2|0;if(h<=e){i=c.g(f);if(HQ(g,i))return a.su.ls(DI(g,i))?(-1):a.l.e(h,c,d);}}return a.su.ls(g)?(-1):a.l.e(f,c,d);}
function A6N(a){return B(616);}
function Bet(a,b){a.l=b;}
function AJ7(a){return (-2147483602);}
function A1W(a,b){return 1;}
function ABQ(){var a=this;S.call(a);a.zE=null;a.EK=0;a.AA=null;}
function BnG(a,b,c){var d=new ABQ();A9k(d,a,b,c);return d;}
function A9k(a,b,c,d){a.AA=b;a.zE=c;a.EK=d;Bh(a);}
function AZ1(a,b){return !a.zE.r(b)&&!(a.EK^a.AA.bh.e0(b))?0:1;}
var Ek=D();
var BAB=null;var BAC=null;var BAD=null;var BAE=null;var BAF=null;var BAG=null;function Bg(){Bg=L(Ek);A3$();}
function J2(b){var c,d;Bg();c=new BM;d=B$(1);d.data[0]=b;Kc(c,d);return c;}
function AAI(b){Bg();return b>0&&b<=65535?1:0;}
function J1(b){Bg();return b>=65536&&b<=1114111?1:0;}
function Cb(b){Bg();return (b&64512)!=55296?0:1;}
function BU(b){Bg();return (b&64512)!=56320?0:1;}
function Ln(b){Bg();return !Cb(b)&&!BU(b)?0:1;}
function HQ(b,c){Bg();return Cb(b)&&BU(c)?1:0;}
function DI(b,c){Bg();return ((b&1023)<<10|c&1023)+65536|0;}
function WY(b,c){Bg();return ABR(b,c,b.data.length);}
function ABR(b,c,d){var e,f;Bg();if(c<(d-1|0)){e=b.data;if(Cb(e[c])){f=c+1|0;if(BU(e[f]))return DI(e[c],e[f]);}}return b.data[c];}
function GF(b){var c;Bg();c=b-65536|0;return (55296|c>>10&1023)&65535;}
function Gl(b){Bg();return (56320|b&1023)&65535;}
function DV(b){Bg();return FW(b)&65535;}
function FW(b){Bg();return (AHJ(b)).toLowerCase().charCodeAt(0);}
function D_(b){Bg();return E6(b)&65535;}
function E6(b){Bg();return (AHJ(b)).toUpperCase().charCodeAt(0);}
function Qg(b,c){Bg();return AHO(b,c);}
function AHO(b,c){var d;Bg();if(c>=2&&c<=36){d=OT(b);if(d>=c)d=(-1);return d;}return (-1);}
function PN(b){Bg();return OT(b);}
function OT(b){var c,d,e,f,g,h,i,j;Bg();c=Rz();d=c.data;e=0;f=(d.length/2|0)-1|0;while(f>=e){g=(e+f|0)/2|0;h=g*2|0;i=d[h];j=Cl(b,i);if(j>0)e=g+1|0;else{if(j>=0)return d[h+1|0];f=g-1|0;}}return (-1);}
function G2(b,c){Bg();if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function AJI(b){Bg();return CO(b)!=9?0:1;}
function Rz(){Bg();if(BAC===null)BAC=BhU(((VW()).value!==null?$rt_str((VW()).value):null));return BAC;}
function VW(){Bg();if(BAF===null)BAF=AEq();return BAF;}
function AEs(){Bg();if(BAD===null)BAD=A2m(((ADK()).value!==null?$rt_str((ADK()).value):null));return BAD;}
function ADK(){Bg();if(BAG===null)BAG=ZT();return BAG;}
function Fm(b){var c;Bg();if(b<65536){c=B$(1);c.data[0]=b&65535;return c;}return KP([GF(b),Gl(b)]);}
function Uy(b){var c;Bg();a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}c=1;break a;}c=0;}return c;}
function Hl(b){Bg();return CO(b);}
function CO(b){var c,d,e,f,g,h;Bg();if(AAI(b)&&Ln(b&65535))return 19;c=AEs();d=c.data;e=0;f=d.length-1|0;while(e<=f){g=(e+f|0)/2|0;h=d[g];if(b>=h.zI)e=g+1|0;else{if(b>=h.uN)return h.Ed.data[b-h.uN|0];f=g-1|0;}}return 0;}
function YZ(b){Bg();return CO(b)!=2?0:1;}
function AAp(b){Bg();return CO(b)!=1?0:1;}
function RO(b){Bg();return CO(b)!=3?0:1;}
function Vw(b){Bg();return !CO(b)?0:1;}
function YU(b){Bg();switch(CO(b)){case 1:case 2:case 3:case 4:case 5:break;default:return 0;}return 1;}
function Ps(b){Bg();return LR(b);}
function LR(b){Bg();a:{switch(CO(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function U9(b){Bg();a:{switch(CO(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return Gz(b);}
function ZN(b){Bg();a:{switch(CO(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return Gz(b);}
function Zi(b){Bg();a:{switch(CO(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break a;default:break a;}return 1;}return Gz(b);}
function ADM(b){Bg();a:{switch(CO(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break a;default:break a;}return 1;}return Gz(b);}
function Gz(b){Bg();a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CO(b)!=16?0:1;}
function O7(b){Bg();switch(CO(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Xt(b){Bg();return MG(b);}
function MG(b){Bg();switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return O7(b);}return 1;}
function A3$(){BAB=E($rt_charcls());BAE=Y(Ek,128);}
function AEq(){return {"value":"{?*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%slG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%sTEG%%%%%%%%%%%%%%%%%%&5G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%VR#G%%%%%%%%%%%%%"
+"%%%%%"};}
function ZT(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
function Ru(){var a=this;BX.call(a);a.tI=0;a.CM=0;}
function A53(a){var b=new Ru();AXQ(b,a);return b;}
function AXQ(a,b){Dm(a);a.tI=b;a.CM=HV(b);}
function AKM(a,b,c){return a.tI!=c.g(b)&&a.CM!=c.g(b)?(-1):1;}
function ARJ(a){return (((H()).a(B(617))).ba(a.tI)).b();}
function D1(){var a=this;BX.call(a);a.ni=0;a.ms=0;a.nD=0;}
function BjQ(a){var b=new D1();A1U(b,a);return b;}
function A1U(a,b){var c,d;Dm(a);a.bT=2;a.nD=b;c=Fm(b);d=c.data;a.ni=d[0];a.ms=d[1];}
function Bd6(a,b,c){var d,e,f;d=b+1|0;e=c.g(b);f=c.g(d);return a.ni==e&&a.ms==f?2:(-1);}
function BbD(a,b,c,d){var e,f,g,h;if(!(c instanceof BM))return He(a,b,c,d);e=c;f=d.O();while(b<f){g=e.eX(a.ni,b);if(g<0)return (-1);b=g+1|0;if(b>=f)continue;h=e.g(b);if(a.ms==h&&a.l.e(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function ANf(a,b,c,d,e){var f,g,h;if(!(d instanceof BM))return Hn(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.nh(a.ms,c);h=g+(-1)|0;if(h<0)break a;if(h<b)break a;if(a.ni==f.g(h)&&a.l.e(h+2|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function Bg0(a){return ((((H()).a(B(59))).ba(a.ni)).ba(a.ms)).b();}
function A2$(a){return a.nD;}
function BdL(a,b){if(b instanceof D1)return b.tR()!=a.nD?0:1;if(b instanceof Do)return b.r(a.nD);if(b instanceof D7)return 0;if(!(b instanceof D3))return 1;return 0;}
var Wv=D();
var YR=D(Cj);
function V9(){var a=this;C.call(a);a.Av=null;a.gR=null;a.gB=null;a.f4=null;}
function BpQ(){var a=new V9();Bdl(a);return a;}
function Bdl(a){J(a);a.gR=null;a.gB=null;a.f4=null;}
var AJD=D();
var Xb=D();
function Xg(){var a=this;C.call(a);a.fE=0;a.eY=null;a.e1=null;a.ha=null;a.iG=0;a.yF=0.0;a.q0=0;a.rT=0;a.im=0;}
function BnH(a){var b=new Xg();AYg(b,a);return b;}
function BAH(a,b){var c=new Xg();Us(c,a,b);return c;}
function AYg(a,b){Us(a,b,0.800000011920929);}
function Us(a,b,c){var d;J(a);if(c>0.0&&c<1.0){a.yF=c;d=Im(b,c);a.q0=d*c|0;a.im=d-1|0;a.rT=Dh(N(a.im));a.eY=Be(d);a.e1=Y(C,d);return;}G(Z((((H()).a(B(376))).b$(c)).b()));}
function AQK(a,b){return V(C$(Cu(N(b),Cs(2135587861, 2654435769)),a.rT));}
function Kw(a,b){var c,d,e;c=a.eY;d=a.fl(b);while(true){e=c.data[d];if(!e)return  -(d+1|0)|0;if(e==b)break;d=(d+1|0)&a.im;}return d;}
function A9x(a,b,c){var d,e,f;if(!b){d=a.ha;a.ha=c;if(!a.iG){a.iG=1;a.fE=a.fE+1|0;}return d;}e=Kw(a,b);if(e>=0){d=a.e1.data[e];a.e1.data[e]=c;return d;}f= -(e+1|0)|0;a.eY.data[f]=b;a.e1.data[f]=c;f=a.fE+1|0;a.fE=f;if(f>=a.q0)X$(a,a.eY.data.length<<1);return null;}
function ACD(a,b,c){var d,e,f;d=a.eY;e=a.fl(b);while(true){f=d.data;if(!f[e])break;e=(e+1|0)&a.im;}f[e]=b;a.e1.data[e]=c;}
function A1_(a,b){var c;if(!b)return !a.iG?null:a.ha;c=Kw(a,b);return c<0?null:a.e1.data[c];}
function Bg1(a,b){var c,d,e,f,g,h,i,j,k,l;if(!b){if(!a.iG)return null;a.iG=0;c=a.ha;a.ha=null;a.fE=a.fE-1|0;return c;}d=Kw(a,b);if(d<0)return null;e=a.eY;f=a.e1;g=f.data;c=g[d];h=a.im;i=(d+1|0)&h;while(true){j=e.data;k=j[i];if(!k)break;l=a.fl(k);if(((i-l|0)&h)>((d-l|0)&h)){j[d]=k;g[d]=g[i];d=i;}i=(i+1|0)&h;}j[d]=0;g[d]=null;a.fE=a.fE-1|0;return c;}
function A1M(a,b,c){var d,e,f,g;a:{d=a.e1;if(b===null){if(a.iG&&a.ha===null)return 1;e=d.data;f=a.eY;g=e.length-1|0;while(true){if(g<0)break a;if(f.data[g]&&e[g]===null)break;g=g+(-1)|0;}return 1;}if(c){if(b===a.ha)return 1;e=d.data;g=e.length-1|0;while(true){if(g<0)break a;if(e[g]===b)break;g=g+(-1)|0;}return 1;}if(a.iG&&b.C(a.ha))return 1;e=d.data;g=e.length-1|0;while(true){if(g<0)break a;if(b.C(e[g]))return 1;g=g+(-1)|0;}}return 0;}
function X$(a,b){var c,d,e,f,g;a:{c=a.eY.data.length;a.q0=b*a.yF|0;a.im=b-1|0;a.rT=Dh(N(a.im));d=a.eY;e=a.e1;a.eY=Be(b);a.e1=Y(C,b);if(a.fE>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g)ACD(a,g,e.data[f]);f=f+1|0;}}}}
var AIo=D(DQ);
function BnD(a){var b=new AIo();AO7(b,a);return b;}
function AO7(a,b){HX(a,b,1.0,1.0);}
function AX6(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(Cb(l)){if(j==d){if(h.d2(2)){j=j+(-1)|0;break a;}Bq();i=Bsc;break a;}m=k[j];if(!BU(m)){i=B8(1);break a;}j=j+(-1)|0;i=Hk(2);break a;}if(BU(l))i=B8(1);if(l>=256){j=j+(-1)|0;i=Hk(1);break a;}k=e.data;n=f+1|0;k[f]=l<<24>>24;c=j;f=n;}j=c;}h.eB(j);h.d6(f);return i;}
var X1=D(Ex);
function BnN(){var a=new X1();ALi(a);return a;}
function ALi(a){K4(a);}
function AUN(a){return BjJ();}
function BgG(a){var b;b=ABp(a);b.cE=null;b.dm=null;b.cZ.HV(B(59),null,0,0,0);b.lf=null;b.DB=null;return b;}
function AN4(a){return a.Oc();}
function AVo(a){return a.S6();}
function Lu(){var a=this;C.call(a);a.dy=0.0;a.dw=0.0;a.dx=0.0;a.ei=0.0;}
var BAI=null;var BAJ=null;function AXM(){AXM=L(Lu);ARx();}
function AHi(a,b,c,d){var e=new Lu();ADD(e,a,b,c,d);return e;}
function AA$(){var a=new Lu();U5(a);return a;}
function ADD(a,b,c,d,e){AXM();J(a);a.n_(b,c,d,e);}
function U5(a){AXM();J(a);a.D6();}
function APs(a,b,c,d,e){a.dy=b;a.dw=c;a.dx=d;a.ei=e;return a;}
function AUI(a,b){return a.n_(b.dy,b.dw,b.dx,b.ei);}
function A7k(a,b,c){return a.M7(b.m,b.n,b.p,c);}
function Bbk(a){return a.dy*a.dy+a.dw*a.dw+a.dx*a.dx+a.ei*a.ei;}
function AU5(a){var b,c;b=a.vd();if(b!==0.0&&!DN(b,1.0)){c=Fz(b);a.ei=a.ei/c;a.dy=a.dy/c;a.dw=a.dw/c;a.dx=a.dx/c;}return a;}
function A_N(a,b){var c,d,e,f,g,h,i,j,k,l;c=b.data;d=a.dy*a.dy;e=a.dy*a.dw;f=a.dy*a.dx;g=a.dy*a.ei;h=a.dw*a.dw;i=a.dw*a.dx;j=a.dw*a.ei;k=a.dx*a.dx;l=a.dx*a.ei;c[0]=1.0-2.0*(h+k);c[4]=2.0*(e-l);c[8]=2.0*(f+j);c[12]=0.0;c[1]=2.0*(e+l);c[5]=1.0-2.0*(d+k);c[9]=2.0*(i-g);c[13]=0.0;c[2]=2.0*(f-j);c[6]=2.0*(i+g);c[10]=1.0-2.0*(d+h);c[14]=0.0;c[3]=0.0;c[7]=0.0;c[11]=0.0;c[15]=1.0;}
function Bih(a){return a.n_(0.0,0.0,0.0,1.0);}
function ALp(a,b,c,d,e){return a.MV(b,c,d,e*0.01745329238474369);}
function AZD(a,b,c,d,e){var f,g,h,i,j,k;f=Yv(b,c,d);if(f===0.0)return a.D6();g=1.0/f;h=e>=0.0?e%6.2831854820251465:6.2831854820251465- -e%6.2831854820251465;i=h/2.0;j=QG(i);k=ALE(i);return (a.n_(g*b*j,g*c*j,g*d*j,k)).MJ();}
function ARx(){BAI=AHi(0.0,0.0,0.0,0.0);BAJ=AHi(0.0,0.0,0.0,0.0);}
var NZ=D(DE);
var BAK=null;function BAL(){BAL=L(NZ);AP4();}
function AP4(){BAK=B5(3);}
var AFB=D(EH);
var ES=D();
var BAM=null;var BAN=null;var BAO=null;var BAP=null;var BAQ=null;var BAR=null;function Bn7(){Bn7=L(ES);AVy();}
function AVy(){IY();BAM=Bvp;BAN=BlW();BAO=Blf();BAP=Vn(B(618),1,0);BAQ=Vn(B(619),0,0);BAR=Vn(B(620),0,1);}
function Vs(){S.call(this);this.JB=null;}
function BlM(a){var b=new Vs();A8Q(b,a);return b;}
function A8Q(a,b){a.JB=b;Bh(a);}
function A8H(a,b){return 0;}
var AAS=D(Gt);
function Bqo(a,b,c,d,e,f){var g=new AAS();A_1(g,a,b,c,d,e,f);return g;}
function A_1(a,b,c,d,e,f,g){Nv(a,b,c,d,e,f,g);}
function A6V(a,b){var c,d,e,f;c=a.fU.D.data;d=a.fP;e=b*2|0;f=c[d+e|0]&255|(a.fU.D.data[(a.fP+e|0)+1|0]&255)<<8;return f<<16>>16;}
function A59(a,b,c){var d,e,f;d=a.fU.D.data;e=a.fP;f=b*2|0;d[e+f|0]=c<<24>>24;a.fU.D.data[(a.fP+f|0)+1|0]=c>>8<<24>>24;}
function AIw(){Bz.call(this);this.mH=0;}
function Blg(a){var b=new AIw();A84(b,a);return b;}
function A84(a,b){CJ(a);a.mH=b;}
function ATa(a,b,c,d){var e;e=!d.jZ()?c.k():d.O();if(b>=e){d.bC(a.mH,0);return a.l.e(b,c,d);}if((e-b|0)==1&&c.g(b)==10){d.bC(a.mH,1);return a.l.e(b+1|0,c,d);}return (-1);}
function A80(a,b){var c;c=!b.eJ(a.mH)?0:1;b.bC(a.mH,(-1));return c;}
function ATZ(a){return B(480);}
var Y8=D(BL);
var P5=D();
var BAS=null;function BAT(){BAT=L(P5);A6m();}
function A6m(){BAS=Be((LN()).data.length);BAS.data[Bi(Bwv)]=1;BAS.data[Bi(Bww)]=2;BAS.data[Bi(Bwx)]=3;}
function Za(){BX.call(this);this.tV=0;}
function BdI(a){var b=new Za();Bbo(b,a);return b;}
function Bbo(a,b){Dm(a);a.tV=DV(D_(b));}
function A2H(a,b,c){return a.tV!=DV(D_(c.g(b)))?(-1):1;}
function Bct(a){return (((H()).a(B(408))).ba(a.tV)).b();}
function IQ(){BV.call(this);this.F6=null;}
var BxF=X;function BaE(){BaE=L(IQ);Bdo();}
function Bdo(){BxF=B2(B(621));}
var AGl=D(GA);
var TV=D(Dk);
function Blf(){var a=new TV();A6R(a);return a;}
function A6R(a){HW(a,B(622),Y(BM,0));}
function Bie(a){return Bj3(a);}
function Be4(a){return BnD(a);}
function Fu(){Bd.call(this);this.BW=0;}
var BAU=null;var Bve=null;var BAV=null;var BAW=null;function A2Q(){A2Q=L(Fu);A95();}
function ADB(a,b,c){var d=new Fu();AFa(d,a,b,c);return d;}
function AFa(a,b,c,d){A2Q();B4(a,b,c);a.BW=d;}
function Iu(a){return a.BW;}
function A95(){BAU=ADB(B(623),0,33648);Bve=ADB(B(624),1,33071);BAV=ADB(B(625),2,10497);BAW=I(Fu,[BAU,Bve,BAV]);}
var AJR=D();
var OP=D(0);
function ACr(){var a=this;C.call(a);a.vA=null;a.tp=null;a.to=null;}
function BjE(){var a=new ACr();A05(a);return a;}
function A05(a){J(a);a.tp=Q();a.to=Q();}
function A9d(a,b,c){a.vA=b;c.Fl(a);}
function Ob(a,b,c,d){if(c.zT())b.vE(d);else if(b.Qs())(d.M(c)).ld(b);else (b.vE(d)).eA(c);return d;}
function A67(a,b,c){var d,e,f,g,h,i;d=b.dm;H6();e=CM(d,BzY)&&(BN(b.dm,BzY)).Hk?1:0;f=CM(c.dm,BzY)&&(BN(c.dm,BzY)).Hk?1:0;if(e!=f)return !e?(-1):1;Ob(a,b.dN,b.cZ.ge,a.tp);Ob(a,c.dN,c.cZ.ge,a.to);g=(1000.0*a.vA.cy.DJ(a.tp)|0)-(1000.0*a.vA.cy.DJ(a.to)|0)|0;h=Cl(g,0.0);i=h<0?(-1):h<=0?0:1;if(e)i= -i|0;return i;}
function BeJ(a,b,c){return a.LE(b,c);}
var UO=D(JN);
function Ff(){var a=this;C2.call(a);a.ga=null;a.eo=0;}
function BAX(a,b,c,d,e){var f=new Ff();J$(f,a,b,c,d,e);return f;}
function J$(a,b,c,d,e,f){Gf(a,c,d,e);a.ga=b;a.eo=f;}
function Bi1(a,b,c,d){var e,f,g,h;e=d.AS(a.eo);if(!a.bd.bf(d))return a.l.e(b,c,d);if(e>=a.ga.i4())return a.l.e(b,c,d);f=a.eo;g=e+1|0;d.f1(f,g);h=a.bd.e(b,c,d);if(h>=0){d.f1(a.eo,0);return h;}f=a.eo;g=g+(-1)|0;d.f1(f,g);if(g>=a.ga.jB())return a.l.e(b,c,d);d.f1(a.eo,0);return (-1);}
function A0x(a){return a.ga.b();}
var Nz=D(Ff);
function BAY(a,b,c,d,e){var f=new Nz();Wo(f,a,b,c,d,e);return f;}
function Wo(a,b,c,d,e,f){J$(a,b,c,d,e,f);}
function A36(a,b,c,d){var e,f;e=d.AS(a.eo);if(!a.bd.bf(d))return a.l.e(b,c,d);if(e>=a.ga.i4()){d.f1(a.eo,0);return a.l.e(b,c,d);}if(e<a.ga.jB()){d.f1(a.eo,e+1|0);f=a.bd.e(b,c,d);}else{f=a.l.e(b,c,d);if(f>=0){d.f1(a.eo,0);return f;}d.f1(a.eo,e+1|0);f=a.bd.e(b,c,d);}return f;}
var ZU=D();
function Wi(b){a:{switch(b){case 8:break;case 9:return 61;case 10:case 11:case 12:case 14:case 15:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 41:case 42:case 43:case 44:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 93:case 94:case 95:case 108:case 124:case 125:case 126:case 127:case 128:case 129:case 130:case 131:case 132:case 133:case 134:case 135:case 136:case 137:case 138:case 139:case 140:case 141:case 142:case 143:case 146:case 147:case 148:case 149:case 150:case 151:case 152:case 153:case 154:case 155:case 156:case 157:case 158:case 159:case 160:case 161:case 162:case 163:case 164:case 165:case 166:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 177:case 178:case 179:case 180:case 181:case 182:case 183:case 184:case 185:case 193:case 194:case 195:case 196:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 207:case 208:case 209:case 210:case 211:case 212:case 213:case 214:case 215:case 216:case 217:case 218:break a;case 13:return 66;case 16:return 59;case 17:return 129;case 18:return 57;case 19:return 0;case 20:return 0;case 27:return 111;case 32:return 62;case 33:return 92;case 34:return 93;case 35:return 123;case 36:return 3;case 37:return 21;case 38:return 19;case 39:return 22;case 40:return 20;case 45:return 124;case 46:return 112;case 48:return 7;case 49:return 8;case 50:return 9;case 51:return 10;case 52:return 11;case 53:return 12;case 54:return 13;case 55:return 14;case 56:return 15;case 57:return 16;case 65:return 29;case 66:return 30;case 67:return 31;case 68:return 32;case 69:return 33;case 70:return 34;case 71:return 35;case 72:return 36;case 73:return 37;case 74:return 38;case 75:return 39;case 76:return 40;case 77:return 41;case 78:return 42;case 79:return 43;case 80:return 44;case 81:return 45;case 82:return 46;case 83:return 47;case 84:return 48;case 85:return 49;case 86:return 50;case 87:return 51;case 88:return 52;case 89:return 53;case 90:return 54;case 91:return 0;case 92:return 0;case 96:return 144;case 97:return 145;case 98:return 146;case 99:return 147;case 100:return 148;case 101:return 149;case 102:return 150;case 103:return 151;case 104:return 152;case 105:return 153;case 106:return 0;case 107:return 81;case 109:return 69;case 110:return 56;case 111:return 0;case 112:return 131;case 113:return 132;case 114:return 133;case 115:return 134;case 116:return 135;case 117:return 136;case 118:return 137;case 119:return 138;case 120:return 139;case 121:return 140;case 122:return 141;case 123:return 142;case 144:return 78;case 145:return 0;case 186:return 74;case 187:return 70;case 188:return 55;case 189:return 69;case 190:return 56;case 191:return 76;case 192:return 0;case 219:return 71;case 220:return 73;case 221:return 72;case 222:return 75;default:break a;}return 67;}return 0;}
function Lg(b){if(b==1)return 0;if(b==2)return 1;if(b!=4)return 0;return 2;}
function ABl(){var a=this;Kn.call(a);a.cY=null;a.df=0;}
function WK(){var a=new ABl();AQa(a);return a;}
function BAZ(a){var b=new ABl();Rw(b,a);return b;}
function AQa(a){Rw(a,10);}
function Rw(a,b){AEM(a);a.cY=Y(C,b);}
function A39(a,b){var c;if(a.cY.data.length<b){c=a.cY.data.length>=1073741823?2147483647:Bj(b,Bj(a.cY.data.length*2|0,5));a.cY=KS(a.cY,c);}}
function Bd1(a,b){LB(a,b);return a.cY.data[b];}
function BcH(a){return a.df;}
function A0t(a,b){var c,d;a.hd(a.df+1|0);c=a.cY.data;d=a.df;a.df=d+1|0;c[d]=b;a.g9=a.g9+1|0;return 1;}
function A$H(a,b,c){var d;Tz(a,b);a.hd(a.df+1|0);d=a.df;while(d>b){a.cY.data[d]=a.cY.data[d-1|0];d=d+(-1)|0;}a.cY.data[b]=c;a.df=a.df+1|0;a.g9=a.g9+1|0;}
function AXZ(a,b){var c,d,e,f;LB(a,b);c=a.cY.data[b];a.df=a.df-1|0;while(b<a.df){d=a.cY.data;e=a.cY.data;f=b+1|0;d[b]=e[f];b=f;}a.cY.data[a.df]=null;a.g9=a.g9+1|0;return c;}
function LB(a,b){if(b>=0&&b<a.df)return;G(Dw());}
function Tz(a,b){if(b>=0&&b<=a.df)return;G(Dw());}
var AD6=D(Bt);
function AYe(){var a=new AD6();A_6(a);return a;}
function A_6(a){CQ(a);}
var AGp=D(Bk);
var AD2=D(GZ);
function Bkk(a,b,c){var d=new AD2();AWE(d,a,b,c);return d;}
function AWE(a,b,c,d){Ot(a,b,c,d);}
function AM$(a,b,c,d){var e;if(!a.bd.bf(d))return a.l.e(b,c,d);e=a.l.e(b,c,d);if(e<0)e=a.bd.e(b,c,d);return e;}
var AGo=D(Bk);
function BnE(){var a=new AGo();A5c(a);return a;}
function A5c(a){CZ(a);}
var TA=D();
function APi(b,c){var d,e,f;a:{d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}e=b>>>6;f=d|e&8;f=f|b<<2&16;e=f|e&32;e=e|b>>>8&64;e=e|b>>>5&128;e=e|b&256;e=e|b<<8&512;e=e|b<<10&1024;e=e|b<<1&2048;return e;}
var AGt=D(Bk);
function BjA(){var a=new AGt();Bfl(a);return a;}
function Bfl(a){CZ(a);}
var AGq=D(Bk);
var AGn=D(Bk);
var AGs=D(Bk);
function Boq(){var a=new AGs();AW2(a);return a;}
function AW2(a){CZ(a);}
var AGw=D(Bk);
function Bqq(){var a=new AGw();AUC(a);return a;}
function AUC(a){CZ(a);}
var AFy=D(CW);
var NS=D();
var BA0=null;function BoI(){BoI=L(NS);AYd();}
function AAi(){BoI();return BA0;}
function AYd(){var b,c,d,e,f;BA0=Dq();b=Y(Dk,6);c=b.data;Bn7();c[0]=BAM;c[1]=BAN;c[2]=BAO;c[3]=BAP;c[4]=BAQ;c[5]=BAR;d=c.length;e=0;while(e<d){f=c[e];BA0.A(AGf(f),f);e=e+1|0;}}
var AGu=D(Bk);
function Bm4(){var a=new AGu();BfB(a);return a;}
function BfB(a){CZ(a);}
var AGr=D(Bk);
function BjF(){var a=new AGr();ASB(a);return a;}
function ASB(a){CZ(a);}
var ABx=D(Bz);
function Bj1(){var a=new ABx();BiI(a);return a;}
function BiI(a){CJ(a);}
function AS8(a,b,c,d){return b;}
function BcD(a){return B(626);}
function BcM(a,b){return 0;}
var ZE=D(GS);
function AVD(a,b){var c=new ZE();ARz(c,a,b);return c;}
function ARz(a,b,c){Nj(a,b,c);}
var LF=D(Ff);
function BA1(a,b,c,d,e){var f=new LF();Wr(f,a,b,c,d,e);return f;}
function Wr(a,b,c,d,e,f){J$(a,b,c,d,e,f);Lt();c.V(Bto);}
function ARX(a,b,c,d){var e,f,g;e=0;f=a.ga.i4();a:{while(true){g=a.bd.e(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.ga.jB())return (-1);return a.l.e(b,c,d);}
var AEN=D(EN);
function Di(){Bd.call(this);this.ET=0;}
var Bvd=null;var BxY=null;var BA2=null;var BA3=null;var BA4=null;var BA5=null;var BA6=null;var BA7=null;function Tf(){Tf=L(Di);AMM();}
function F9(a,b,c){var d=new Di();Rl(d,a,b,c);return d;}
function Rl(a,b,c,d){Tf();B4(a,b,c);a.ET=d;}
function Fw(a){return a.ET;}
function AMM(){Bvd=F9(B(627),0,9728);BxY=F9(B(628),1,9729);BA2=F9(B(629),2,9987);BA3=F9(B(630),3,9984);BA4=F9(B(631),4,9985);BA5=F9(B(632),5,9986);BA6=F9(B(633),6,9987);BA7=I(Di,[Bvd,BxY,BA2,BA3,BA4,BA5,BA6]);}
function WS(){C.call(this);this.U3=null;}
function BjP(a){var b=new WS();BcX(b,a);return b;}
function BcX(a,b){J(a);a.U3=b;}
function AB$(){S.call(this);this.SP=null;}
function Bpb(a){var b=new AB$();Baa(b,a);return b;}
function Baa(a,b){a.SP=b;Bh(a);}
function BgN(a,b){return AJI(b);}
var VG=D(EN);
var KL=D(DP);
function A01(){var a=new KL();A$D(a);return a;}
function A$D(a){Li(a);}
var AFX=D(GP);
function BnA(a,b,c,d,e,f){var g=new AFX();A7R(g,a,b,c,d,e,f);return g;}
function A7R(a,b,c,d,e,f,g){LE(a,b,c,d,e,f,g);}
function AY6(a,b){var c,d,e;c=a.cC.D.data;d=a.ct;e=b*4|0;return (c[d+e|0]&255)<<24|(a.cC.D.data[(a.ct+e|0)+1|0]&255)<<16|(a.cC.D.data[(a.ct+e|0)+2|0]&255)<<8|a.cC.D.data[(a.ct+e|0)+3|0]&255;}
function AL6(a,b,c){var d,e,f;d=a.cC.D.data;e=a.ct;f=b*4|0;d[e+f|0]=c>>24<<24>>24;a.cC.D.data[(a.ct+f|0)+1|0]=c>>16<<24>>24;a.cC.D.data[(a.ct+f|0)+2|0]=c>>8<<24>>24;a.cC.D.data[(a.ct+f|0)+3|0]=c<<24>>24;}
var VZ=D(Bt);
function AXw(a){var b=new VZ();Bfg(b,a);return b;}
function Kr(){var a=new VZ();ANA(a);return a;}
function Bfg(a,b){Fy(a,b);}
function ANA(a){CQ(a);}
function AC2(){S.call(this);this.Kg=null;}
function BmA(a){var b=new AC2();AQt(b,a);return b;}
function AQt(a,b){a.Kg=b;Bh(a);}
function Bdz(a,b){return O7(b);}
var NL=D(E4);
var AEy=D();
function QG(b){return Math.sin(b);}
function ALE(b){return Math.cos(b);}
function AYM(b){return Math.tan(b);}
function Fz(b){return Math.sqrt(b);}
function A7o(b){return Math.ceil(b);}
function A2q(b,c){return Math.pow(b,c);}
function DH(b){return b+ATb(b)*0.5|0;}
function Bw(b,c){if(b<c)c=b;return c;}
function Bj(b,c){if(b>c)c=b;return c;}
function YH(b,c){if(Ml(b,c))c=b;return c;}
function A5v(b,c){if(IR(b,c))c=b;return c;}
function Lh(b,c){if(b<c)c=b;return c;}
function EZ(b,c){if(b>c)c=b;return c;}
function AAx(b){if(b<=0)b= -b|0;return b;}
function C1(b){if(b<=0.0)b= -b;return b;}
function ATb(b){var c;c=Cl(b,0.0);if(c>0)b=1.0;else if(c<0)b=(-1.0);return b;}
var T3=D(U);
function BjW(){var a=new T3();Beb(a);return a;}
function Beb(a){Bv(a);}
function AVB(a){var b;b=Blo(a);b.bm=1;return b;}
function QR(){var a=this;Dn.call(a);a.Am=null;a.ol=null;a.k9=0;}
function B3(a,b,c){var d=new QR();AAZ(d,a,b,c);return d;}
function AAZ(a,b,c,d){G$(a);a.k9=(-1);a.Am=b;a.ol=c;a.k9=d;}
function BhL(a){var b,c;b=B(59);if(a.k9>=1){c=B$(a.k9);AXg(c,32);b=Oo(c);}return (((H()).a(a.Am)).a(a.ol!==null&&a.ol.k()?((((((H()).h(a.k9)).a(B(322))).a(a.ol)).a(B(322))).a(b)).b():B(59))).b();}
function Fe(){Bd.call(this);this.zw=0;}
var BA8=null;var BwZ=null;var BwY=null;var BA9=null;function Kd(){Kd=L(Fe);AWG();}
function YN(a,b,c){var d=new Fe();AJj(d,a,b,c);return d;}
function AJj(a,b,c,d){Kd();B4(a,b,c);a.zw=d;}
function RF(a){return a.zw;}
function AWG(){BA8=YN(B(634),0,0);BwZ=YN(B(635),1,1);BwY=YN(B(636),2,4);BA9=I(Fe,[BA8,BwZ,BwY]);}
var AEB=D();
function BjH(){var a=new AEB();AXR(a);return a;}
function AXR(a){J(a);}
function A8X(a){return devicePixelRatio||1;}
function A6z(a){return screen.width;}
function AKN(a){return screen.height;}
function ATS(a,b,c,d,e){var f;f=BqH(a);return AQr(BJ(f,"fullscreenChanged"),c,d,e)?1:0;}
function AUk(a){AQf();}
function A02(a){return Bho()?1:0;}
function AQr(b,c,d,e){if(c.requestFullscreen){c.width=d;c.height=e;c.requestFullscreen();document.addEventListener("fullscreenchange",b,false);return true;}if(c.webkitRequestFullScreen){c.width=d;c.height=e;c.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);document.addEventListener("webkitfullscreenchange",b,false);return true;}if(c.mozRequestFullScreen){c.width=d;c.height=e;c.mozRequestFullScreen();document.addEventListener("mozfullscreenchange",b,false);return true;}if(c.msRequestFullscreen){c.width
=d;c.height=e;c.msRequestFullscreen();document.addEventListener("msfullscreenchange",b,false);return true;}return false;}
function AQf(){if(document.exitFullscreen)document.exitFullscreen();if(document.msExitFullscreen)document.msExitFullscreen();if(document.webkitExitFullscreen)document.webkitExitFullscreen();if(document.mozExitFullscreen)document.mozExitFullscreen();if(document.webkitCancelFullScreen)document.webkitCancelFullScreen();}
function Bho(){if("fullscreenElement" in document){return document.fullscreenElement!=null;}if("msFullscreenElement" in document){return document.msFullscreenElement!=null;}if("webkitFullscreenElement" in document){return document.webkitFullscreenElement!=null;}if("mozFullScreenElement" in document){return document.mozFullScreenElement!=null;}if("webkitIsFullScreen" in document){return document.webkitIsFullScreen;}if("mozFullScreen" in document){return document.mozFullScreen;}return false;}
var Yq=D(U);
function BoT(){var a=new Yq();ANV(a);return a;}
function ANV(a){Bv(a);}
function A69(a){var b;b=BqN(a);b.bL.oG(0,2048);b.bm=1;return b;}
function I5(){var a=this;BV.call(a);a.P9=0;a.ND=0.0;a.LL=0.0;a.SY=0;}
var BA$=X;var BA_=X;function AQU(){AQU=L(I5);BbM();}
function BbM(){BA$=B2(B(637));BA_=BA$;}
var Ey=D(Bd);
var Bxf=null;var Bxh=null;var Bxi=null;var Bxe=null;var BBa=null;function Pj(){Pj=L(Ey);A0J();}
function Ow(a,b){var c=new Ey();ABk(c,a,b);return c;}
function Zv(){Pj();return BBa.e6();}
function ABk(a,b,c){Pj();B4(a,b,c);}
function A0J(){Bxf=Ow(B(638),0);Bxh=Ow(B(639),1);Bxi=Ow(B(640),2);Bxe=Ow(B(641),3);BBa=I(Ey,[Bxf,Bxh,Bxi,Bxe]);}
var PQ=D();
var AE6=D(ED);
var WH=D(DE);
function HO(){var a=this;C.call(a);a.mT=0;a.fN=null;a.fB=null;a.EE=0.0;a.tS=0;a.we=0;a.jl=0;}
var BBb=null;function Beo(){Beo=L(HO);APd();}
function Ef(){var a=new HO();Yo(a);return a;}
function BBc(a,b){var c=new HO();PV(c,a,b);return c;}
function Yo(a){Beo();PV(a,51,0.800000011920929);}
function PV(a,b,c){var d;Beo();J(a);if(c>0.0&&c<1.0){a.EE=c;d=Im(b,c);a.tS=d*c|0;a.jl=d-1|0;a.we=Dh(N(a.jl));a.fN=Y(C,d);a.fB=Y(C,d);return;}G(Z((((H()).a(B(376))).b$(c)).b()));}
function A56(a,b){return V(C$(Cu(N(b.bl()),Cs(2135587861, 2654435769)),a.we));}
function A9H(a,b){var c,d,e;if(b===null)G(Z(B(642)));c=a.fN;d=a.kS(b);while(true){e=c.data[d];if(e===null)return  -(d+1|0)|0;if(e.C(b))break;d=(d+1|0)&a.jl;}return d;}
function AYt(a,b,c){var d,e,f;d=a.ku(b);if(d>=0){e=a.fB.data[d];a.fB.data[d]=c;return e;}f= -(d+1|0)|0;a.fN.data[f]=b;a.fB.data[f]=c;f=a.mT+1|0;a.mT=f;if(f>=a.tS)ACj(a,a.fN.data.length<<1);return null;}
function TF(a,b,c){var d,e,f;d=a.fN;e=a.kS(b);while(true){f=d.data;if(f[e]===null)break;e=(e+1|0)&a.jl;}f[e]=b;a.fB.data[e]=c;}
function A5h(a,b){var c;c=a.ku(b);return c<0?null:a.fB.data[c];}
function A3X(a){if(!a.mT)return;a.mT=0;Z2(a.fN,null);Z2(a.fB,null);}
function BgO(a,b){return a.ku(b)<0?0:1;}
function ACj(a,b){var c,d,e,f,g;a:{c=a.fN.data.length;a.tS=b*a.EE|0;a.jl=b-1|0;a.we=Dh(N(a.jl));d=a.fN;e=a.fB;a.fN=Y(C,b);a.fB=Y(C,b);if(a.mT>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g!==null)TF(a,g,e.data[f]);f=f+1|0;}}}}
function APd(){BBb=TG();}
function AEt(){var a=this;C.call(a);a.i=null;a.dk=0;a.rs=null;a.xi=0;a.fS=0;a.gY=0;a.bX=0;a.sH=null;}
function Bng(){var a=new AEt();AKI(a);return a;}
function H3(a,b){return Bkv(a,b);}
function OA(a,b,c){var d,e,f,g,h,i;d=WK();e=H3(a,b);f=0;g=0;if(!b.k()){h=Y(BM,1);h.data[0]=B(59);return h;}while(Hm(e)){i=f+1|0;if(i>=c&&c>0)break;d.io((b.en(g,N2(e))).b());g=Pa(e);f=i;}a:{d.io((b.en(g,b.k())).b());i=f+1|0;if(!c)while(true){i=i+(-1)|0;if(i<0)break;if(((d.o(i)).b()).k())break a;d.m_(i);}}if(i<0)i=0;return d.Lh(Y(BM,i));}
function AAY(a,b){return OA(a,b,0);}
function Kz(a){return a.i.b();}
function A7N(b,c){if(b===null)G(AXw(B(643)));if(c&&(c|255)!=255)G(Z(B(59)));ACe();Bs$=1;return ADI(Bng(),b,c);}
function ADI(a,b,c){a.i=Bn_(b,c);a.dk=c;a.sH=N_(a,(-1),a.dk,null);if(a.i.bS()){TZ(a);return a;}G(B3(B(59),a.i.b(),a.i.d0()));}
function AJh(a,b){var c,d,e;c=Bqp(Ca(a,2),Ca(a,64));while(!a.i.bS()){d=a.i;if(!d.hS())break;d=a.i;if(d.cU()&&a.i.cU()!=(-536870788)){d=a.i;if(d.cU()!=(-536870871))break;}c.cO(a.i.J());if(a.i.b0()!=(-536870788))continue;a.i.J();}e=Jm(a,c);e.V(b);return e;}
function N_(a,b,c,d){var e,f,g,h,i,j;e=WK();f=a.dk;g=0;if(c!=a.dk)a.dk=c;a:{switch(b){case -1073741784:h=new MS;i=a.bX+1|0;a.bX=i;AFQ(h,i);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Mk;i=a.bX+1|0;a.bX=i;AIS(h,i);break a;case -33554392:h=new M6;i=a.bX+1|0;a.bX=i;ZC(h,i);break a;default:a.fS=a.fS+1|0;if(d!==null)h=BpS(a.fS);else{h=Bos();g=1;}if(a.fS<=(-1))break a;if(a.fS>=10)break a;a.rs.data[a.fS]=h;break a;}h=Bnb();}while(true){if(a.i.hS()&&a.i.cU()==(-536870788))j=AJh(a,
h);else if(a.i.b0()==(-536870788)){j=GN(h);a.i.J();}else{j=OV(a,h);if(a.i.b0()==(-536870788))a.i.J();}if(j!==null)e.io(j);if(a.i.bS())break;if(a.i.b0()==(-536870871))break;}if(a.i.JD()==(-536870788))e.io(GN(h));if(a.dk!=f&&!g){a.dk=f;a.i.Jn(a.dk);}switch(b){case -1073741784:break;case -536870872:return Bn0(e,h);case -268435416:return Bm8(e,h);case -134217688:return Bj5(e,h);case -67108824:return Boh(e,h);case -33554392:return Bns(e,h);default:switch(e.dr()){case 0:break;case 1:return Bpl(e.o(0),h);default:return Bk$(e,
h);}return GN(h);}return BmM(e,h);}
function AHz(a){var b,c,d;b=BdN();while(!a.i.bS()){c=a.i;if(!c.hS())break;c=a.i;if(c.Go())break;c=a.i;if(c.Hu())break;c=a.i;if(!(!c.up()&&!a.i.cU())){c=a.i;if(!(!c.up()&&KN(a.i.cU()))){c=a.i;if(c.cU()!=(-536870871)){c=a.i;if((c.cU()&(-2147418113))!=(-2147483608)){c=a.i;if(c.cU()!=(-536870788)){c=a.i;if(c.cU()!=(-536870876))break;}}}}}d=a.i.J();if(!J1(d))b.LQ(d&65535);else b.TR(Fm(d));}if(!Ca(a,2))return BkS(b);if(Ca(a,64))return BqR(b);return BqX(b);}
function AHE(a){var b,c,d,e,f,g,h,i,j,k;b=Be(4);c=0;d=(-1);e=(-1);if(!a.i.bS()&&a.i.hS()){f=b.data;d=a.i.J();f[c]=d;e=d-4352|0;}if(e>=0&&e<19){g=B$(3);f=g.data;f[c]=d&65535;h=a.i.b0();i=h-4449|0;if(i>=0&&i<21){f[1]=h&65535;a.i.J();j=a.i.b0();h=j-4519|0;if(h>=0&&h<28){f[2]=j&65535;a.i.J();return Bgg(g,3);}return Bgg(g,2);}if(!Ca(a,2))return TE(f[0]);if(Ca(a,64))return BdI(f[0]);return A53(f[0]);}k=1;while(k<4&&!a.i.bS()&&a.i.hS()){f=b.data;j=k+1|0;f[k]=a.i.J();k=j;}if(k==1){f=b.data;if(!AT1(f[0]))return N5(a,
f[0]);}if(!Ca(a,2))return BqT(b,k);if(Ca(a,64))return Bqt(b,k);return Bk_(b,k);}
function OV(a,b){var c,d,e,f;if(a.i.hS()&&!a.i.up()&&KN(a.i.cU())){if(!Ca(a,128)){if(!a.i.Go()&&!a.i.Hu())c=AHz(a);else{d=Q9(a,b);c=J4(a,b,d);}}else{c=AHE(a);if(!a.i.bS()){e=a.i;if(!(e.b0()==(-536870871)&&!(b instanceof FZ))){e=a.i;if(e.b0()!=(-536870788)&&!a.i.hS())c=J4(a,b,c);}}}}else if(a.i.b0()!=(-536870871)){d=Q9(a,b);c=J4(a,b,d);}else{if(b instanceof FZ)G(B3(B(59),a.i.b(),a.i.d0()));c=GN(b);}a:{if(!a.i.bS()){e=a.i;if(!(e.b0()==(-536870871)&&!(b instanceof FZ))){e=a.i;if(e.b0()!=(-536870788)){f=OV(a,b);if
(c instanceof CY&&!(c instanceof EX)&&!(c instanceof C2)&&!(c instanceof EV)){e=c;if(!f.cj(e.qG()))c=Bj0(e);}if((f.jq()&65535)!=43)c.V(f);else c.V(f.qG());break a;}}}if(c===null)return null;c.V(b);}if((c.jq()&65535)!=43)return c;return c.qG();}
function J4(a,b,c){var d,e,f,g,h,i,j;d=a.i.b0();if(c!==null&&!(c instanceof BX)){switch(d){case -2147483606:a.i.J();return Bme(c,b,d);case -2147483605:a.i.J();return Bo3(c,b,(-2147483606));case -2147483585:a.i.J();return Bpe(c,b,(-536870849));case -2147483525:e=new LF;f=a.i.jL();g=a.gY+1|0;a.gY=g;Wr(e,f,c,b,(-536870849),g);return e;case -1073741782:case -1073741781:a.i.J();h=Bod(c,b,d);c.V(h);return h;case -1073741761:a.i.J();h=Bkk(c,b,(-536870849));c.V(b);return h;case -1073741701:h=new Nz;e=a.i;e=e.jL();i
=a.gY+1|0;a.gY=i;Wo(h,e,c,b,(-536870849),i);c.V(h);return h;case -536870870:case -536870869:a.i.J();h=c.jq()!=(-2147483602)?BnP(c,b,d):Ca(a,32)?BkA(c,b,d):BjV(c,b,d,O2(a.dk));c.V(h);return h;case -536870849:a.i.J();h=BqJ(c,b,(-536870849));c.V(b);return h;case -536870789:h=new Ff;e=a.i;e=e.jL();g=a.gY+1|0;a.gY=g;J$(h,e,c,b,(-536870849),g);c.V(h);return h;default:}return c;}j=null;if(c!==null)j=c;switch(d){case -2147483606:case -2147483605:a.i.J();h=Bl6(j,b,d);j.V(h);return h;case -2147483585:a.i.J();return Bni(j,
b,(-2147483585));case -2147483525:return Bmw(a.i.jL(),j,b,(-2147483525));case -1073741782:case -1073741781:a.i.J();h=Bqd(j,b,d);j.V(h);return h;case -1073741761:a.i.J();return Bp1(j,b,(-1073741761));case -1073741701:return BkM(a.i.jL(),j,b,(-1073741701));case -536870870:case -536870869:a.i.J();h=BlV(j,b,d);j.V(h);return h;case -536870849:a.i.J();return Blm(j,b,(-536870849));case -536870789:return Bn5(a.i.jL(),j,b,(-536870789));default:}return c;}
function Q9(a,b){var c,d,e,f,g,h,i,j,k,l;c=null;while(true){a:{d=a.i.b0();if((d&(-2147418113))==(-2147483608)){a.i.J();e=(d&16711680)>>16;d=d&(-16711681);if(d==(-16777176))a.dk=e;else{if(d!=(-1073741784))e=a.dk;c=N_(a,d,e,b);if(a.i.b0()!=(-536870871))G(B3(B(59),a.i.b(),a.i.d0()));a.i.J();}}else{b:{c:{switch(d){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:a.i.J();c
=BfS(0);break a;case -2147483577:a.i.J();c=Bkg();break a;case -2147483558:a.i.J();c=new NV;f=a.bX+1|0;a.bX=f;AIh(c,f);break a;case -2147483550:a.i.J();c=BfS(1);break a;case -2147483526:a.i.J();c=Bmp();break a;case -536870876:a.i.J();a.bX=a.bX+1|0;if(Ca(a,8)){if(Ca(a,1)){c=BkI(a.bX);break a;}c=Bjx(a.bX);break a;}if(Ca(a,1)){c=Blg(a.bX);break a;}c=Bma(a.bX);break a;case -536870866:a.i.J();if(Ca(a,32)){c=BmG();break a;}c=Bl1(O2(a.dk));break a;case -536870821:a.i.J();g=0;if(a.i.b0()==(-536870818)){g=1;a.i.J();}c
=Wt(a,g,b);if(a.i.b0()!=(-536870819))G(B3(B(59),a.i.b(),a.i.d0()));a.i.qx(1);a.i.J();break a;case -536870818:a.i.J();a.bX=a.bX+1|0;if(!Ca(a,8)){c=AZC();break a;}c=Bqc(O2(a.dk));break a;case 0:h=a.i.tc();if(h!==null)c=Jm(a,h);else{if(a.i.bS()){c=GN(b);break a;}c=TE(d&65535);}a.i.J();break a;default:break b;}a.i.J();c=AZC();break a;}i=(d&2147483647)-48|0;if(a.fS<i)G(B3(B(59),a.i.b(),a.i.d0()));a.i.J();a.bX=a.bX+1|0;c=!Ca(a,2)?Bnr(i,a.bX):Ca(a,64)?BkJ(i,a.bX):BqM(i,a.bX);a.rs.data[i].um=1;a.xi=1;break a;}if(d>=
0&&!a.i.lr()){c=N5(a,d);a.i.J();}else if(d==(-536870788))c=GN(b);else{if(d!=(-536870871)){j=new QR;k=!a.i.lr()?J2(d&65535):(a.i.tc()).b();l=a.i;AAZ(j,k,l.b(),a.i.d0());G(j);}if(b instanceof FZ)G(B3(B(59),a.i.b(),a.i.d0()));c=GN(b);}}}if(d!=(-16777176))break;}return c;}
function Wt(a,b,c){var d,e;d=Gs(a,b);e=Jm(a,d);e.V(c);return e;}
function Gs(a,b){var c,d,e,f,g,h,i,j,k,$$je;c=Bp8(b,Ca(a,2),Ca(a,64));d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(a.i.bS())break a;f=a.i.b0()==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.i.b0()){case -536870874:if(d>=0)c.cO(d);d=a.i.J();if(a.i.b0()!=(-536870874)){d=38;break d;}if(a.i.cU()==(-536870821)){a.i.J();e=1;d=(-1);break d;}a.i.J();if(g){c=Gs(a,0);break d;}if(a.i.b0()==(-536870819))break d;c.zt(Gs(a,0));break d;case -536870867:if(!g&&a.i.cU()!=(-536870819)){h=a.i;if(h.cU()!=(-536870821)&&d>=0){a.i.J();i
=a.i.b0();if(a.i.lr())break c;if(i<0){h=a.i;if(h.cU()!=(-536870819)){h=a.i;if(h.cU()!=(-536870821)&&d>=0)break c;}}e:{try{if(KN(i))break e;i=i&65535;break e;}catch($$e){$$je=T($$e);if($$je instanceof Cg){break b;}else{throw $$e;}}}try{c.bK(d,i);}catch($$e){$$je=T($$e);if($$je instanceof Cg){break b;}else{throw $$e;}}a.i.J();d=(-1);break d;}}if(d>=0)c.cO(d);d=45;a.i.J();break d;case -536870821:if(d>=0){c.cO(d);d=(-1);}a.i.J();j=0;if(a.i.b0()==(-536870818)){a.i.J();j=1;}if(!e)c.O9(Gs(a,j));else c.zt(Gs(a,j));e
=0;a.i.J();break d;case -536870819:if(d>=0)c.cO(d);d=93;a.i.J();break d;case -536870818:if(d>=0)c.cO(d);d=94;a.i.J();break d;case 0:if(d>=0)c.cO(d);k=a.i.tc();if(k===null)d=0;else{c.Ry(k);d=(-1);}a.i.J();break d;default:}if(d>=0)c.cO(d);d=a.i.J();}g=0;}G(B3(B(59),Kz(a),a.i.d0()));}G(B3(B(59),Kz(a),a.i.d0()));}if(!f){if(d>=0)c.cO(d);return c;}G(B3(B(59),Kz(a),a.i.d0()-1|0));}
function N5(a,b){var c;c=J1(b);if(Ca(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return A53(b&65535);}if(Ca(a,64)&&b>128){if(c)return BlE(b);if(L$(b))return AVV(b&65535);if(!M3(b))return BdI(b&65535);return A$u(b&65535);}}if(c)return BjQ(b);if(L$(b))return AVV(b&65535);if(!M3(b))return TE(b&65535);return A$u(b&65535);}
function Jm(a,b){var c,d;if(!b.Ia()){if(!b.E6()){if(b.ho())return ARh(b);return AZm(b);}if(b.ho())return BbB(b);return A$2(b);}c=b.R2();d=Bm_(c);if(!b.E6()){if(b.ho())return Ns(ARh(b.np()),d);return Ns(AZm(b.np()),d);}if(b.ho())return Ns(BbB(b.np()),d);return Ns(A$2(b.np()),d);}
function H0(b){return A7N(b,0);}
function TZ(a){if(a.xi)a.sH.er();}
function A$7(b){var c,d,e,f;c=(H()).a(B(644));d=0;while(true){e=b.vC(B(645),d);if(e<0)break;f=e+2|0;(c.a(b.cm(d,f))).a(B(646));d=f;}return ((c.a(b.ex(d))).a(B(645))).b();}
function AAK(a){return a.fS;}
function AIG(a){return a.gY+1|0;}
function WM(a){return a.bX+1|0;}
function HV(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Ca(a,b){return (a.dk&b)!=b?0:1;}
function AKI(a){J(a);a.rs=Y(CR,10);a.fS=(-1);a.gY=(-1);a.bX=(-1);}
var H1=D(DD);
var Tv=D(GZ);
function Bpe(a,b,c){var d=new Tv();AZl(d,a,b,c);return d;}
function AZl(a,b,c,d){Ot(a,b,c,d);Lt();b.V(Bto);}
function ASO(a,b,c,d){var e;e=a.bd.e(b,c,d);if(e<=0)e=b;return a.l.e(e,c,d);}
function BbN(a,b){a.l=b;}
var AGc=D(R);
function BkH(){var a=new AGc();Bg9(a);return a;}
function Bg9(a){B6(a);}
var AFd=D(Bu);
var AGd=D(R);
function Bof(){var a=new AGd();BbP(a);return a;}
function BbP(a){B6(a);}
function F1(){var a=this;C.call(a);a.oR=0.0;a.oQ=0.0;a.qK=0.0;a.pB=0.0;}
var BBd=null;var BBe=null;function Bmb(){Bmb=L(F1);AX_();}
function Z7(){var a=new F1();Pe(a);return a;}
function Pe(a){Bmb();J(a);}
function AVu(a){return ((((((((((H()).a(B(647))).b$(a.oR)).a(B(20))).b$(a.oQ)).a(B(20))).b$(a.qK)).a(B(20))).b$(a.pB)).a(B(57))).b();}
function AMb(a){var b;b=31+Cv(a.pB)|0;b=(31*b|0)+Cv(a.qK)|0;b=(31*b|0)+Cv(a.oR)|0;b=(31*b|0)+Cv(a.oQ)|0;return b;}
function Bc4(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(Co(a)!==Co(b))return 0;c=b;if(Cv(a.pB)!=Cv(c.pB))return 0;if(Cv(a.qK)!=Cv(c.qK))return 0;if(Cv(a.oR)!=Cv(c.oR))return 0;if(Cv(a.oQ)==Cv(c.oQ))return 1;return 0;}
function AX_(){BBd=Z7();BBe=Z7();}
var AGe=D(R);
function BpW(){var a=new AGe();ATW(a);return a;}
function ATW(a){B6(a);}
var AF_=D(R);
function Bjz(){var a=new AF_();A9X(a);return a;}
function A9X(a){B6(a);}
var AGa=D(R);
function Bnk(){var a=new AGa();BgD(a);return a;}
function BgD(a){B6(a);}
var Ta=D();
var Yl=D();
function WL(){Ft.call(this);this.je=null;}
function Bnm(){var a=new WL();Bhe(a);return a;}
function Bhe(a){NA(a);}
function A4V(a,b){var c;Lr();c=BN(a,BxE);if(c===null){c=BkY();E$(a,c);}c.hF.E(b);return a;}
var R0=D();
var M$=D();
var Bwn=0;var AIR=D(EQ);
var Wh=D(GW);
function MR(){C.call(this);this.ri=null;}
var BBf=null;function Bke(){var a=new MR();A7Z(a);return a;}
function A7Z(a){J(a);}
function A81(a,b,c,d,e){if(a.ri===null)a.ri=BoQ();a.ri.IC(b,c,d,e);}
function APL(){if(BBf===null)BBf=Bke();return BBf;}
function J5(){S.call(this);this.sS=0;}
function BmO(a){var b=new J5();WB(b,a);return b;}
function WB(a,b){Bh(a);a.sS=b;}
function AWo(a,b){return a.bH^(a.sS!=Hl(b&65535)?0:1);}
var AE_=D(J5);
function BjK(a){var b=new AE_();AVe(b,a);return b;}
function AVe(a,b){WB(a,b);}
function Bfj(a,b){return a.bH^(!(a.sS>>Hl(b&65535)&1)?0:1);}
function T2(){EA.call(this);this.G1=0;}
function Bku(a){var b=new T2();A$r(b,a);return b;}
function A$r(a,b){Mg(a);a.G1=b;}
function AOL(a){return (((H()).a(B(648))).h(a.G1)).b();}
function XY(){var a=this;C.call(a);a.r3=0;a.rA=0;a.xw=0;}
function Bok(){var a=new XY();AKd(a);return a;}
function AKd(a){J(a);}
var Zs=D(E1);
function Bqt(a,b){var c=new Zs();A9_(c,a,b);return c;}
function A9_(a,b,c){LU(a,b,c);}
var NX=D(HZ);
var S4=D(Dy);
function Vt(){S.call(this);this.QJ=null;}
function Bj7(a){var b=new Vt();A3M(b,a);return b;}
function A3M(a,b){a.QJ=b;Bh(a);}
function ALG(a,b){return MG(b);}
var ADv=D(U);
function BnU(){var a=new ADv();ALf(a);return a;}
function ALf(a){Bv(a);}
function AO9(a){var b;b=Bkb(a);b.bm=1;return b;}
var Gj=D(Bd);
var Bvg=null;var BzQ=null;var BBg=null;function HJ(){HJ=L(Gj);A9m();}
function APq(a,b){var c=new Gj();AGh(c,a,b);return c;}
function AGh(a,b,c){HJ();B4(a,b,c);}
function A9m(){Bvg=APq(B(649),0);BzQ=APq(B(650),1);BBg=I(Gj,[Bvg,BzQ]);}
function J3(){var a=this;C.call(a);a.rO=0;a.ro=0;a.Cq=0;a.Ht=0;a.yQ=0;a.F3=0;a.HR=0;a.Rc=0;a.RI=0;a.C0=0;}
function AE0(a){J(a);a.rO=(-1);a.ro=(-1);a.Cq=0;a.Ht=0;a.yQ=0;a.F3=0;a.HR=0;a.Rc=0;a.RI=0;}
var UQ=D(C_);
var PG=D(EF);
var BBh=null;function QC(){QC=L(PG);A9A();}
function AJr(b,c){var d,e,f,g,h;QC();if(c>=2&&c<=36){if(b!==null&&!b.bS()){a:{d=0;e=0;switch(b.g(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=X;while(e<b.k()){g=e+1|0;h=PN(b.g(e));if(h<0)G(Eg((((H()).a(B(7))).a(b)).b()));if(h>=c)G(Eg((((((H()).a(B(8))).h(c)).a(B(9))).a(b)).b()));f=CS(Cu(N(c),f),N(h));if(Ml(f,X)){if(g==b.k()&&Bb(f,Cs(0, 2147483648))&&d)return Cs(0, 2147483648);G(Eg((((H()).a(B(10))).a(b)).b()));}e=g;}if(d)f=Ba3(f);return f;}G(Eg(B(11)));}G(Eg((((H()).a(B(12))).h(c)).b()));}
function AI5(b){QC();return AJr(b,10);}
function Dh(b){var c,d,e;QC();if(Bb(b,X))return 64;c=0;d=C$(b,32);if(D2(d,X))c=32;else d=b;e=C$(d,16);if(Bb(e,X))e=d;else c=c|16;d=C$(e,8);if(Bb(d,X))d=e;else c=c|8;e=C$(d,4);if(Bb(e,X))e=d;else c=c|4;d=C$(e,2);if(Bb(d,X))d=e;else c=c|2;if(D2(C$(d,1),X))c=c|1;return (64-c|0)-1|0;}
function ACu(b){var c,d,e;QC();if(Bb(b,X))return 64;c=0;d=EK(b,32);if(D2(d,X))c=32;else d=b;e=EK(d,16);if(Bb(e,X))e=d;else c=c|16;d=EK(e,8);if(Bb(d,X))d=e;else c=c|8;e=EK(d,4);if(Bb(e,X))e=d;else c=c|4;d=EK(e,2);if(Bb(d,X))d=e;else c=c|2;if(D2(EK(d,1),X))c=c|1;return (64-c|0)-1|0;}
function A9A(){BBh=E($rt_longcls());}
var Mp=D(HI);
var BBi=null;function BhX(){BhX=L(Mp);Biz();}
function BlF(){var a=new Mp();AEP(a);return a;}
function Bj4(a){var b=new Mp();Vk(b,a);return b;}
function AEP(a){BhX();Jh(a);a.c1(N(XA()),1);}
function Vk(a,b){BhX();Jh(a);}
function Biz(){BBi=Bj4(0);}
function XA(){var jsObj=new Bullet.btDbvtBroadphase();return Bullet.getPointer(jsObj);}
function UM(){C.call(this);this.AZ=null;}
function Bpg(){var a=new UM();A1o(a);return a;}
function A1o(a){J(a);a.AZ=A9z();}
function ATd(a,b,c){A3B(a.AZ,$rt_ustr(b),c);}
function A9z(){var soundManager=new SoundManager();soundManager.debugMode=false;return soundManager;}
function A3B(b,c,d){b.setup({url:c,onready:function(){d.onready();},ontimeout:function(status){d.ontimeout();}});}
function Xv(){var a=this;C.call(a);a.lQ=null;a.q5=null;a.dB=0;a.BT=0;}
function BbX(a){var b=new Xv();ASz(b,a);return b;}
function ASz(a,b){J(a);while(b>=a.dB){a.dB=a.dB<<1|1;}a.dB=a.dB<<1|1;a.lQ=Be(a.dB+1|0);a.q5=Be(a.dB+1|0);a.BT=b;}
function ARV(a,b,c){var d,e,f;d=0;e=b&a.dB;while(a.lQ.data[e]&&a.lQ.data[e]!=b){f=d+1|0;d=f&a.dB;f=e+d|0;e=f&a.dB;}a.lQ.data[e]=b;a.q5.data[e]=c;}
function Bao(a,b){var c,d,e,f;c=b&a.dB;d=0;while(true){e=a.lQ.data[c];if(!e)break;if(e==b)return a.q5.data[c];f=d+1|0;d=f&a.dB;f=c+d|0;c=f&a.dB;}return a.BT;}
var V4=D(CH);
var Kj=D(Cn);
var ADs=D(Kj);
var N3=D(HN);
var BBj=null;function AMz(){AMz=L(N3);APE();}
function BpY(a){var b=new N3();Wd(b,a);return b;}
function Blh(a){var b=new N3();AGN(b,a);return b;}
function Wd(a,b){var c;AMz();JF(a);D9();c=BuZ;D5(b,c);a.c1(N(AFE(V((c.b2())))),1);}
function AGN(a,b){AMz();JF(a);}
function APE(){BBj=Blh(0);}
function AFE(b){var boxHalfExtentsJSObj=Bullet.wrapPointer(b,Bullet.btVector3);var jsObj=new Bullet.btBoxShape(boxHalfExtentsJSObj);return Bullet.getPointer(jsObj);}
var Du=D(Bd);
var BBk=null;var BBl=null;var BBm=null;var BBn=null;var BBo=null;var BBp=null;var BzR=null;var BBq=null;function A61(){A61=L(Du);A2N();}
function GH(a,b){var c=new Du();Z_(c,a,b);return c;}
function Z_(a,b,c){A61();B4(a,b,c);}
function A2N(){BBk=GH(B(63),0);BBl=GH(B(651),1);BBm=GH(B(652),2);BBn=GH(B(653),3);BBo=GH(B(654),4);BBp=GH(B(655),5);BzR=GH(B(656),6);BBq=I(Du,[BBk,BBl,BBm,BBn,BBo,BBp,BzR]);}
var AHU=D(U);
function BlS(){var a=new AHU();A4H(a);return a;}
function A4H(a){Bv(a);}
function BbU(a){var b;b=BlZ(a);b.bm=1;return b;}
var ABr=D(EH);
function UH(){J3.call(this);this.Ei=null;}
function BmV(a){var b=new UH();ALM(b,a);return b;}
function ALM(a,b){var c,d,e,f;AE0(a);c=A7V();d=c.p2();e=Bhp();f=d.getElementById($rt_ustr(b));a.Ei=Bkj(e,f);YB(new Rj);}
function A3r(a){return a.Ei;}
var Nl=D(0);
function ACV(){S.call(this);this.UE=null;}
function BmN(a){var b=new ACV();A04(b,a);return b;}
function A04(a,b){a.UE=b;Bh(a);}
function BaD(a,b){return LR(b);}
function SU(){var a=this;S.call(a);a.pH=null;a.OO=null;}
function Bn$(a,b){var c=new SU();A1b(c,a,b);return c;}
function A1b(a,b,c){a.OO=b;a.pH=c;Bh(a);}
function ATH(a,b){return a.bH^a.pH.e0(b);}
function A9i(a){var b,c;b=H();c=a.pH.lH(0);while(c>=0){b.rQ(Fm(c));b.ba(124);c=a.pH.lH(c+1|0);}if(b.k()>0)b.G8(b.k()-1|0);return b.b();}
var AAa=D(C2);
function Bme(a,b,c){var d=new AAa();AZk(d,a,b,c);return d;}
function AZk(a,b,c,d){Gf(a,b,c,d);Lt();b.V(Bto);}
function A6P(a,b,c,d){var e;while(true){e=a.bd.e(b,c,d);if(e<=0)break;b=e;}return a.l.e(b,c,d);}
function YI(){var a=this;C.call(a);a.MN=0;a.M2=X;a.tu=null;a.FR=null;a.Dx=X;a.yZ=null;}
function Bol(a,b,c,d){var e=new YI();AKu(e,a,b,c,d);return e;}
function AKu(a,b,c,d,e){J(a);a.tu=b;a.FR=c;a.Dx=d;a.yZ=e;}
var R$=D(CT);
function Dj(){BV.call(this);this.d_=null;}
var Byl=X;var Byv=X;var BBr=X;var Byx=X;var Bx8=X;var BxD=X;var BBs=X;var BBt=X;function Ct(){Ct=L(Dj);A$x();}
function BBu(a){var b=new Dj();K7(b,a);return b;}
function BBv(a,b){var c=new Dj();LG(c,a,b);return c;}
function A8U(a,b,c,d,e){var f=new Dj();P_(f,a,b,c,d,e);return f;}
function BmW(a){var b=new Dj();AF7(b,a);return b;}
function Zy(b){Ct();return Bb(Bx(b,BBt),X)?0:1;}
function MT(b,c,d,e){Ct();return A8U(Byl,b,c,d,e);}
function AFq(b,c,d,e){Ct();return A8U(Byv,b,c,d,e);}
function K7(a,b){Ct();Ge(a,b);a.d_=DM();if(Zy(b))return;G(W(B(657)));}
function LG(a,b,c){Ct();K7(a,b);if(c!==null)a.d_.e5(c);}
function P_(a,b,c,d,e,f){Ct();K7(a,b);a.d_.gT(c,d,e,f);}
function AF7(a,b){Ct();LG(a,b.dp,b.d_);}
function AQV(a){return BmW(a);}
function A0K(a){var b,c;b=Hd(a);c=(953*b|0)+a.d_.sX()|0;return c;}
function A$x(){Byl=B2(B(658));Byv=B2(B(659));BBr=B2(B(660));Byx=B2(B(661));Bx8=B2(B(662));BxD=B2(B(663));BBs=B2(B(664));BBt=B1(B1(B1(B1(B1(B1(BBr,Byl),Byv),Byx),Bx8),BxD),BBs);}
function SR(){var a=this;S.call(a);a.D1=null;a.Jy=null;}
function Bo_(a,b){var c=new SR();Bej(c,a,b);return c;}
function Bej(a,b,c){a.Jy=b;a.D1=c;Bh(a);}
function AN5(a,b){return a.D1.r(b);}
function SS(){var a=this;S.call(a);a.yw=null;a.U4=null;}
function Bpt(a,b){var c=new SS();AUQ(c,a,b);return c;}
function AUQ(a,b,c){a.U4=b;a.yw=c;Bh(a);}
function A8Y(a,b){return a.yw.r(b)?0:1;}
function ST(){var a=this;S.call(a);a.Ay=0;a.GO=null;a.Bm=null;a.Il=null;}
function Bmg(a,b,c,d){var e=new ST();AOg(e,a,b,c,d);return e;}
function AOg(a,b,c,d,e){a.Il=b;a.Ay=c;a.GO=d;a.Bm=e;Bh(a);}
function Bjg(a,b){return !(a.Ay^a.GO.r(b))&&!a.Bm.r(b)?0:1;}
function Ti(){var a=this;S.call(a);a.G4=0;a.w1=null;a.xe=null;a.Jl=null;}
function BqU(a,b,c,d){var e=new Ti();A8S(e,a,b,c,d);return e;}
function A8S(a,b,c,d,e){a.Jl=b;a.G4=c;a.w1=d;a.xe=e;Bh(a);}
function AQW(a,b){return !(a.G4^a.w1.r(b))&&!a.xe.r(b)?1:0;}
function SV(){var a=this;S.call(a);a.Ge=0;a.CS=null;a.zi=null;a.Pz=null;}
function BqQ(a,b,c,d){var e=new SV();A7J(e,a,b,c,d);return e;}
function A7J(a,b,c,d,e){a.Pz=b;a.Ge=c;a.CS=d;a.zi=e;Bh(a);}
function A5q(a,b){return a.Ge^a.CS.r(b)&&a.zi.r(b)?1:0;}
function SW(){var a=this;S.call(a);a.FO=0;a.Cp=null;a.Gb=null;a.Qi=null;}
function Bl_(a,b,c,d){var e=new SW();AK5(e,a,b,c,d);return e;}
function AK5(a,b,c,d,e){a.Qi=b;a.FO=c;a.Cp=d;a.Gb=e;Bh(a);}
function AW1(a,b){return a.FO^a.Cp.r(b)&&a.Gb.r(b)?0:1;}
function SX(){var a=this;S.call(a);a.Hd=null;a.zX=0;a.HO=null;}
function BjS(a,b,c){var d=new SX();AV0(d,a,b,c);return d;}
function AV0(a,b,c,d){a.HO=b;a.Hd=c;a.zX=d;Bh(a);}
function ASE(a,b){return a.Hd.r(b)&&a.zX^a.HO.bh.e0(b)?1:0;}
function SQ(){var a=this;S.call(a);a.FY=null;a.ES=0;a.zV=null;}
function BqP(a,b,c){var d=new SQ();Bap(d,a,b,c);return d;}
function Bap(a,b,c,d){a.zV=b;a.FY=c;a.ES=d;Bh(a);}
function BfT(a,b){return a.FY.r(b)&&a.ES^a.zV.bh.e0(b)?0:1;}
var Px=D(Fb);
var AFC=D(FQ);
function Ht(a){var b=new AFC();AST(b,a);return b;}
function H(){var a=new AFC();BhR(a);return a;}
function AST(a,b){LJ(a,b);}
function BhR(a){LX(a);}
function BaU(a,b){AEF(a,b);return a;}
function AKO(a,b){Nk(a,b);return a;}
function AVk(a,b){SJ(a,b);return a;}
function A9s(a,b){AI7(a,b);return a;}
function AQ8(a,b){Yc(a,b);return a;}
function AKB(a,b){Pw(a,b);return a;}
function AOj(a,b,c,d){Q3(a,b,c,d);return a;}
function Be8(a,b){P9(a,b);return a;}
function A45(a,b){XB(a,b);return a;}
function A8A(a,b,c){Vx(a,b,c);return a;}
function Bfu(a,b,c){AF5(a,b,c);return a;}
function BdS(a,b,c,d,e){Oy(a,b,c,d,e);return a;}
function Bii(a,b,c){T0(a,b,c);return a;}
function BbA(a,b,c){Rk(a,b,c);return a;}
function AVW(a,b,c){Q_(a,b,c);return a;}
function A0y(a,b,c){AI6(a,b,c);return a;}
function AZa(a,b){AIL(a,b);return a;}
function A_l(a,b,c){Qu(a,b,c);return a;}
function Bhh(a,b,c){return ACo(a,b,c);}
function A_s(a,b){AIx(a,b);}
function APx(a,b,c,d,e){ADX(a,b,c,d,e);}
function BdZ(a,b,c){return AHK(a,b,c);}
function A_d(a,b,c,d,e){return a.Oy(b,c,d,e);}
function AOZ(a,b,c,d){return a.LJ(b,c,d);}
function A5a(a){return Pk(a);}
function AM0(a){return PY(a);}
function ATq(a,b){OI(a,b);}
function ATA(a,b,c){return a.Iu(b,c);}
function BaR(a,b,c){return a.S5(b,c);}
function Bad(a,b,c){return a.N0(b,c);}
function A9E(a,b,c){return a.Uz(b,c);}
function ANz(a,b,c){return a.M3(b,c);}
function A2d(a,b,c){return a.ID(b,c);}
var AIB=D(Bt);
function BjY(){var a=new AIB();A1X(a);return a;}
function A1X(a){CQ(a);}
var RR=D();
function BpC(){var a=new RR();ATk(a);return a;}
function ATk(a){J(a);}
var W3=D(EL);
var RQ=D();
function Bk0(){var a=new RQ();A5F(a);return a;}
function A5F(a){J(a);}
var AAR=D(KI);
var AGA=D(BL);
var Z3=D(GK);
function L2(){var a=this;C.call(a);a.ds=null;a.b9=0;a.nF=X;}
function AEc(a){var b=new L2();BaL(b,a);return b;}
function BaL(a,b){var c,d,e,f;c=b.data;J(a);a.nF=N(-1);d=c.length;if(!d)G(Z(B(665)));e=Y(Fa,d);f=0;while(f<d){e.data[f]=c[f];f=f+1|0;}a.ds=e;a.b9=ABa(a);}
function Ez(a,b){var c,d;c=C6(a);d=0;while(d<c){if((CE(a,d)).eS==b)return CE(a,d);d=d+1|0;}return null;}
function ABa(a){var b,c,d;b=0;c=0;while(c<a.ds.data.length){d=a.ds.data[c];d.cp=b;b=b+TU(d)|0;c=c+1|0;}return b;}
function C6(a){return a.ds.data.length;}
function CE(a,b){return a.ds.data[b];}
function Qt(a,b){var c,d;if(b===a)return 1;if(!(b instanceof L2))return 0;c=b;if(a.ds.data.length!=c.ds.data.length)return 0;d=0;while(d<a.ds.data.length){if(!MC(a.ds.data[d],c.ds.data[d]))return 0;d=d+1|0;}return 1;}
function Ku(a){var b,c;if(Bb(a.nF,N(-1))){b=X;c=0;while(c<a.ds.data.length){b=B1(b,N(a.ds.data[c].eS));c=c+1|0;}a.nF=b;}return a.nF;}
function Qn(a){return B1(Ku(a),EK(N(a.ds.data.length),32));}
function AJQ(){var a=this;C.call(a);a.le=null;a.tL=null;a.fD=null;a.pa=null;a.sz=0;a.FE=null;a.xj=null;}
function BBw(a,b,c){var d=new AJQ();Yp(d,a,b,c);return d;}
function Bpu(){var a=new AJQ();Bh$(a);return a;}
function Yp(a,b,c,d){J(a);a.tL=BnN();a.fD=Bs();if(d===null)d=BjE();a.xj=d;a.sz=b!==null?0:1;if(b===null)b=BnJ(Bmv(1,1));a.pa=b;if(c===null)c=Bps();a.FE=c;}
function Bh$(a){Yp(a,null,null,null);}
function Bbf(a,b){if(a.le!==null)G(W(B(666)));a.le=b;if(a.sz)a.pa.hm();}
function A$k(a){var b,c,d;a.xj.JG(a.le,a.fD);b=null;c=0;while(c<a.fD.j){d=a.fD.o(c);if(b!==d.lf){if(b!==null)b.N();b=d.lf;b.EY(a.le,a.pa);}b.RM(d);c=c+1|0;}if(b!==null)b.N();a.tL.dE();a.fD.P();}
function BeO(a){a.dE();if(a.sz)a.pa.N();a.le=null;}
function AZs(a,b,c){var d,e;d=a.fD.j;b.K$(a.fD,a.tL);while(d<a.fD.j){e=a.fD.o(d);e.cE=c;e.lf=a.FE.MS(e);d=d+1|0;}}
var SL=D();
var RX=D();
function AAP(){var a=this;C.call(a);a.EG=null;a.fa=null;a.vW=null;a.ln=null;a.v8=0.0;a.st=X;a.tY=X;a.pC=0.0;a.k_=0.0;a.p7=0;a.gu=null;}
function Bkf(a){var b=new AAP();A2O(b,a);return b;}
function A2O(a,b){var c;J(a);a.v8=0.0;a.st=ER();a.tY=N(-1);a.pC=0.0;a.k_=0.0;c=E3();a.vW=b;a.fa=c.GN();a.EG=c.Sd(b);a.gu=c.Pv();a.ln=BnY(a.EG);a.ln.pq(0,0,a.fa.width,a.fa.height);a.ln.xs(0.0,0.0,0.0,1.0);a.ln.Gw(16384);if(!(b.rO<0&&b.ro<0))a.x0(b.rO,b.ro);}
function A2p(a){var b;b=ER();a.pC=U_(EI(b,a.st))/1000.0;a.st=b;a.k_=a.k_+a.pC;a.p7=a.p7+1|0;if(a.k_>1.0){a.v8=a.p7;a.k_=0.0;a.p7=0;}}
function A0P(a){return a.ln;}
function ATM(a){return a.fa.width;}
function AYY(a){return a.fa.height;}
function BcT(a){return a.fa.width;}
function Bb8(a){return a.fa.height;}
function BiJ(a){return a.pC;}
function A3i(a){return a.v8|0;}
function A4B(a){var b;b=!a.vW.C0?1.0:a.gu.x1();return Bmf(a,a.gu.Ii()*b|0,a.gu.Vb()*b|0,60,8);}
function AOE(a,b){var c;c=a.Hx();if(b.pK!=c.pK&&b.oC!=c.oC)return 0;return a.gu.Vg(a,a.fa,b.pK,b.oC);}
function AS$(a,b,c){var d,e,f;if(a.w8())a.gu.Uh();if(b>0&&c>0)a.zA(b,c);else{d=(E3()).hO();e=d.VC();f=d.Oq();a.zA(e,f);}return 1;}
function AM3(a,b,c){var d,e,f;d=!a.vW.C0?1.0:a.gu.x1();e=a.fa;f=b*d|0;e.width=f;e=a.fa;f=c*d|0;e.height=f;}
function ALk(a,b){return 0;}
function A_Z(a){return a.gu.Rr();}
var P3=D();
var X0=D(U);
function Bp5(){var a=new X0();AMp(a);return a;}
function AMp(a){Bv(a);}
function APy(a){return (Dc()).bK(0,127);}
function FE(){var a=this;C.call(a);a.cv=null;a.qs=0.0;a.ob=0.0;}
var BBx=null;var BBy=null;var BBz=null;function Eh(){Eh=L(FE);A7b();}
function BpB(){var a=new FE();AJa(a);return a;}
function BBA(a,b){var c=new FE();SM(c,a,b);return c;}
function BBB(a,b,c,d,e,f){var g=new FE();Xq(g,a,b,c,d,e,f);return g;}
function BBC(a,b,c,d,e,f,g,h,i){var j=new FE();AHC(j,a,b,c,d,e,f,g,h,i);return j;}
function AJa(a){Eh();J(a);a.cv=El(1);}
function SM(a,b,c){Eh();J(a);a.cv=El(1);a.PV(b,c);}
function Xq(a,b,c,d,e,f,g){Eh();J(a);a.cv=El(1);a.Tg(b,c,d,e,f,g);}
function AHC(a,b,c,d,e,f,g,h,i,j){Eh();J(a);a.cv=El(1);a.qt(b,c,d,e,f,g,h,i,j);}
function BeN(a,b,c){a.qt(b,c,0,c.k(),b.Ak(),0.0,8,0,null);}
function Ban(a,b,c,d,e,f,g){a.qt(b,c,0,c.k(),d,e,f,g,null);}
function AOq(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by;k=a.cv;Eh();BBx.F$(k);k.P();l=b.kI;if(d==e){a.qs=0.0;a.ob=l.fj;return;}if(j!==null)i=1;else if(g<=l.wI*3.0)i=0;m=l.Fj;if(m){n=1;o=BBz.j;while(n<o){BBy.jP(BBz.o(n));n=n+1|0;}BBz.P();BBz.E(f);}p=0.0;q=0.0;r=l.kL;s=null;t=d;u=f;a:{b:while(true){c:{v=(-1);w=0;if(d==e){if(t==e)break b;v=e;}else{x=d+1|0;switch(c.g(d)){case 10:v=x-1|0;w=1;d=x;break c;case 91:if(!m){d=x;break c;}y
=SB(a,c,x,e,BBy);if(y<0){if(y==(-2)){d=x+1|0;continue b;}d=x;break c;}v=x-1|0;d=x+(y+1|0)|0;f=BBz.re();break c;default:}d=x;}}if(v!=(-1)){d:{z=Cl(v,t);if(z){ba=BBx.e9();ba.kq.e5(u);l.HK(ba,c,t,v,s);if(!ba.bq.j)BBx.jP(ba);else{if(s!==null)p=p-(s.o5?s.gM*l.e4:(s.cD+s.dD|0)*l.e4-l.ic);s=ba.bq.re();ba.du=p;ba.i6=q;if(!(!w&&v!=e))FN(a,l,ba);k.E(ba);o=ba.bu.be;bb=ba.bu.W;if(i&&o){bc=bb.data;p=p+bc[0]+bc[1];n=2;while(n<o){bd=ba.bq;be=n-1|0;bf=bd.o(be);bg=(bf.cD+bf.dD|0)*l.e4-l.ic;if(p+bg-9.999999747378752E-5<=g)p=
p+bb.data[n];else{if(j!==null){AH2(a,l,ba,g,j,n,BBx);break a;}q=q+r;s=null;bh=l.NN(ba.bq,n);if(!(!bh&&ba.du===0.0)&&bh<ba.bq.j)be=bh;if(be){ba=T7(a,l,ba,be,n);if(ba===null){p=0.0;break d;}k.E(ba);}else{bi=ba.bq.j;e:{while(true){if(be>=bi)break e;if(!l.jS((ba.bq.o(be)).fc&65535))break;be=be+1|0;}}if(be>0){ba.bq.mt(0,be-1|0);ba.bu.mt(1,be);}bb.data[0]=( -(ba.bq.Hm()).dD|0)*l.e4-l.jk;if(k.j>1){bj=k.o(k.j-2|0);bk=bj.bq.j-1|0;f:{while(true){if(bk<=0)break f;if(!l.jS((bj.bq.o(bk)).fc&65535))break;bk=bk+(-1)|0;}}bj.bq.iq(bk
+1|0);bj.bu.iq(bk+2|0);FN(a,l,bj);}}o=ba.bu.be;bb=ba.bu.W;bc=bb.data;p=bc[0];if(o>1)p=p+bc[1];ba.du=0.0;ba.i6=q;n=1;}n=n+1|0;}}else if(m){n=0;while(n<o){p=p+bb.data[n];n=n+1|0;}}}}}if(w){p=0.0;q=z?q+r:q+r*l.yM;s=null;}t=d;u=f;}}}a.ob=l.fj+C1(q);bl=0.0;bm=k.T;bn=k.j;n=0;while(n<bn){bo=bm.data[n];bb=bo.bu.W;bc=bb.data;bp=bc[0];bq=0.0;br=bo.bq.T;bs=0;bt=bo.bq.j;while(bs<bt){bf=br.data[bs];bg=(bf.cD+bf.dD|0)*l.e4-l.ic;bq=EZ(bq,bp+bg);bs=bs+1|0;bp=bp+bc[bs];}bo.kv=EZ(bp,bq);bl=EZ(bl,bo.du+bo.kv);n=n+1|0;}g:{a.qs
=bl;if(!(h&8)){bu=!(h&1)?0:1;bv=0.0;bw=(-2.147483648E9);bx=0;n=0;while(n<bn){bc=bm.data;bo=bc[n];if(bo.i6===bw)bv=EZ(bv,bo.du+bo.kv);else{bw=bo.i6;by=g-bv;if(bu)by=by/2.0;while(bx<n){x=bx+1|0;bd=bc[bx];bd.du=bd.du+by;bx=x;}bv=bo.du+bo.kv;}n=n+1|0;}by=g-bv;if(bu)by=by/2.0;while(true){if(bx>=bn)break g;bc=bm.data;x=bx+1|0;bd=bc[bx];bd.du=bd.du+by;bx=x;}}}}
function AH2(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=g.e9();b.HK(h,e,0,e.k(),null);i=0.0;if(h.bu.be>0){FN(a,b,h);j=h.bu.W;k=1;l=h.bu.be;while(k<l){i=i+j.data[k];k=k+1|0;}}m=d-i;n=0;o=c.du;j=c.bu.W;a:{while(true){if(n>=c.bu.be)break a;p=j.data[n];o=o+p;if(o>m)break;n=n+1|0;}}if(n<=1){c.bq.P();c.bu.P();c.bu.IV(h.bu);}else{c.bq.iq(n-1|0);c.bu.iq(n);FN(a,b,c);if(h.bu.be>0)c.bu.zp(h.bu,1,h.bu.be-1|0);}c.bq.rm(h.bq);g.jP(h);}
function T7(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=c.bq;g=c.bq.j;h=c.bu;i=d;a:{while(true){if(i<=0)break a;if(!b.jS((f.o(i-1|0)).fc&65535))break;i=i+(-1)|0;}}b:{while(true){j=Cl(d,g);if(j>=0)break b;if(!b.jS((f.o(d)).fc&65535))break;d=d+1|0;}}k=null;if(j>=0){f.iq(i);h.iq(i+1|0);}else{Eh();k=BBx.e9();k.kq.e5(c.kq);l=k.bq;l.Mo(f,0,i);f.mt(0,d-1|0);c.bq=l;k.bq=f;m=k.bu;m.zp(h,0,i+1|0);h.mt(1,d);h.W.data[0]=( -(f.Hm()).dD|0)*b.e4-b.jk;c.bu=m;k.bu=h;}if(i)FN(a,b,c);else{Eh();BBx.jP(c);a.cv.wG();}return k;}
function FN(a,b,c){var d,e;d=c.bq.re();if(d.o5)return;e=(d.cD+d.dD|0)*b.e4-b.ic;c.bu.W.data[c.bu.be-1|0]=e;}
function SB(a,b,c,d,e){var f,g,h,i,j,k,l,m;if(c==d)return (-1);switch(b.g(c)){case 35:f=0;g=c+1|0;a:{while(true){if(g>=d)break a;h=b.g(g);if(h==93)break;if(h>=48&&h<=57)f=(f*16|0)+(h-48|0)|0;else if(h>=97&&h<=102)f=(f*16|0)+(h-87|0)|0;else{if(h<65)break a;if(h>70)break a;f=(f*16|0)+(h-55|0)|0;}g=g+1|0;}if(g>=(c+2|0)&&g<=(c+9|0)){i=g-c|0;if(i<=7){j=0;k=9-i|0;while(j<k){f=f<<4;j=j+1|0;}f=f|255;}l=e.e9();Eh();BBz.E(l);JV(l,f);return i;}}return (-1);case 91:break;case 93:Eh();if(BBz.j>1)e.jP(BBz.wG());return 0;default:g
=c+1|0;while(g<d){h=b.g(g);if(h==93){m=Tt((b.en(c,g)).b());if(m===null)return (-1);l=e.e9();Eh();BBz.E(l);l.e5(m);return g-c|0;}g=g+1|0;}return (-1);}return (-2);}
function BfO(a){(Ga(E(IG))).F$(a.cv);a.cv.P();a.qs=0.0;a.ob=0.0;}
function AVY(a){var b,c,d;if(!a.cv.j)return B(59);b=Ht(128);b.b$(a.qs);b.ba(120);b.b$(a.ob);b.ba(10);c=0;d=a.cv.j;while(c<d){b.a((a.cv.o(c)).b());b.ba(10);c=c+1|0;}b.vD(b.k()-1|0);return b.b();}
function A7b(){BBx=Ga(E(IG));BBy=Ga(E(Bn));BBz=El(4);}
var Gd=D(Bd);
var BxI=null;var BBD=null;var BBE=null;function VE(){VE=L(Gd);AMC();}
function A$G(a,b){var c=new Gd();Uv(c,a,b);return c;}
function Uv(a,b,c){VE();B4(a,b,c);}
function AMC(){BxI=A$G(B(667),0);BBD=A$G(B(668),1);BBE=I(Gd,[BxI,BBD]);}
var MD=D();
var AGF=D(FL);
function N$(){var a=this;C.call(a);a.gA=null;a.pJ=0;a.v9=0;a.nU=null;a.p4=null;a.pA=null;a.hK=null;a.fV=null;a.el=null;a.f7=null;a.dz=null;}
function ANE(){var a=new N$();Bir(a);return a;}
function Bir(a){J(a);a.pJ=1;a.nU=Q();a.p4=AHi(0.0,0.0,0.0,1.0);a.pA=CB(1.0,1.0,1.0);a.hK=BH();a.fV=BH();a.el=El(2);a.dz=El(2);}
function BfX(a){if(!a.v9)a.hK.Io(a.nU,a.p4,a.pA);return a.hK;}
function AXS(a){if(a.pJ&&a.f7!==null)(a.fV.b6(a.f7.fV)).hW(a.hK);else a.fV.b6(a.hK);return a.fV;}
function AMZ(a,b){var c,d;a:{a.T6();a.SG();if(b){c=a.dz.b5();while(true){if(!c.bG())break a;d=c.bD();d.E7(1);}}}}
function Bd8(a,b){var c,d,e,f,g;c=a.el.b5();while(c.bG()){d=c.bD();if(d.cR===null)continue;if(d.dO===null)continue;if(d.cR.ck!=d.dO.data.length)continue;e=d.cR.ck;f=0;while(f<e){(d.dO.data[f].b6(d.cR.eE.data[f].fV)).hW(d.cR.g3.data[f]);f=f+1|0;}}a:{if(b){c=a.dz.b5();while(true){if(!c.bG())break a;g=c.bD();g.Ax(1);}}}}
function A2M(a){if(a.f7!==null){a.f7.HC(a);a.f7=null;}}
function BdE(a){return a.dz.j;}
function ATG(a,b){return a.dz.o(b);}
function ALC(a,b){return a.QI((-1),b);}
function AWK(a,b,c){var d;d=a;while(true){if(d===null){d=c.yK();if(d!==null&&!d.HC(c))G(W(B(669)));if(b>=0&&b<a.dz.j)a.dz.Ol(b,c);else{b=a.dz.j;a.dz.E(c);}c.f7=a;return b;}if(d===c)break;d=d.yK();}G(W(B(670)));}
function A$L(a,b){if(!a.dz.ON(b,1))return 0;b.f7=null;return 1;}
function Baf(a){return a.dz;}
function Bg3(a){return a.f7;}
function A8g(a){return (ANE()).Qj(a);}
function Beg(a,b){var c,d,e;a.H9();a.gA=b.gA;a.v9=b.v9;a.pJ=b.pJ;a.nU.M(b.nU);a.p4.TB(b.p4);a.pA.M(b.pA);a.hK.b6(b.hK);a.fV.b6(b.fV);a.el.P();c=b.el.b5();while(c.bG()){d=c.bD();a.el.E(d.P0());}a.dz.P();c=(b.sv()).fG();while(c.bG()){e=c.bD();a.KJ(e.wi());}return a;}
function AFL(b,c,d,e){var f,g,h,i;a:{f=b.j;if(!e){g=0;while(true){if(g>=f)break a;h=b.o(g);if(h.gA.C(c))break;g=g+1|0;}return h;}g=0;while(true){if(g>=f)break a;i=b.o(g);if(i.gA.Iv(c))break;g=g+1|0;}return i;}b:{if(d){g=0;while(true){if(g>=f)break b;i=AFL((b.o(g)).dz,c,1,e);if(i!==null)break;g=g+1|0;}return i;}}return null;}
var Rx=D();
function AAL(){var a=this;F$.call(a);a.vp=0;a.pZ=0;}
function Bpw(a,b){var c=new AAL();ASd(c,a,b);return c;}
function ASd(a,b,c){Oq(a);a.vp=b;a.pZ=c;}
function A9h(a){return a.vp;}
function Bgr(a){return a.pZ;}
function BbJ(a){return ((((((H()).a(B(671))).h(a.vp)).a(B(20))).a(a.pZ==2147483647?B(59):(AIy(a.pZ)).b())).a(B(672))).b();}
function AAD(){S.call(this);this.R_=null;}
function Bnt(a){var b=new AAD();AYQ(b,a);return b;}
function AYQ(a,b){a.R_=b;Bh(a);}
function A4R(a,b){return AAp(b);}
function Xu(){C.call(this);this.vm=0;}
function BoD(){var a=new Xu();Ba2(a);return a;}
function Ba2(a){J(a);a.vm=0;}
function A7K(a,b){var c;c=b.LN();Si(a,c);}
function UC(a,b){b.ma(0,B(673),Bqx(a));}
function Si(a,b){b.ma(0,B(674),BkL(a,b));if(a.vm)b.Rm(1,B(675),BjN(a));}
function Bg2(b){BcV(BJ(b,"onBulletPhysicsLoaded"));}
function AMo(b,c){UC(b,c);}
function A3F(b,c){AUZ(b,BJ(c,"onBulletPhysicsLoaded"));}
function BcV(b){(BulletLib()).then(function(BulletLib){window.Bullet=BulletLib;b();});}
function AUZ(b,c){(BulletLib({wasmBinary:b,async:false})).then(function(BulletLib){window.Bullet=BulletLib;c();});}
var PR=D(0);
var Nb=D(Ia);
var BBF=null;function AN1(){AN1=L(Nb);Bh8();}
function BlX(){var a=new Nb();V5(a);return a;}
function Bjp(a){var b=new Nb();AJg(b,a);return b;}
function V5(a){AN1();Ka(a);a.c1(N(AG5()),1);}
function AJg(a,b){AN1();Ka(a);}
function Bh8(){BBF=Bjp(0);}
function AG5(){var jsObj=new Bullet.btSequentialImpulseConstraintSolver();return Bullet.getPointer(jsObj);}
var AC0=D();
var WQ=D(DT);
function SI(){S.call(this);this.N9=null;}
function Bkw(a){var b=new SI();AUr(b,a);return b;}
function AUr(a,b){a.N9=b;Bh(a);}
function AWj(a,b){return Gz(b);}
var ADW=D(CY);
function Bqd(a,b,c){var d=new ADW();A2r(d,a,b,c);return d;}
function A2r(a,b,c,d){F5(a,b,c,d);}
function AWs(a,b,c,d){var e;while(true){e=a.l.e(b,c,d);if(e>=0)break;if((b+a.bz.co()|0)<=d.O()){e=a.bz.bM(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
function AFu(){var a=this;C.call(a);a.FK=null;a.xG=0.0;a.nu=null;}
function Bqy(){var a=new AFu();AZz(a);return a;}
function AZz(a){J(a);a.nu=Bs();}
var ADz=D();
function FV(b,c){return Nw(b,c);}
var ZV=D();
var AIb=D(CW);
function Jo(){var a=this;C.call(a);a.dI=null;a.b3=null;a.mm=0;a.iw=0;a.ia=null;a.kk=0;a.s_=null;}
var BBG=null;function IN(){IN=L(Jo);A1V();}
function BjU(a,b,c,d){var e=new Jo();AIN(e,a,b,c,d);return e;}
function BoR(a,b,c,d){var e=new Jo();ADF(e,a,b,c,d);return e;}
function BBH(a,b,c,d,e){var f=new Jo();Pm(f,a,b,c,d,e);return f;}
function BBI(a,b,c,d,e){var f=new Jo();QY(f,a,b,c,d,e);return f;}
function AIN(a,b,c,d,e){IN();J(a);a.mm=1;a.kk=0;a.s_=Q();a.dI=PK(a,b,c,AEc(e));a.b3=AD_(b,d);a.iw=0;Jd(Bsf,a);}
function ADF(a,b,c,d,e){IN();J(a);a.mm=1;a.kk=0;a.s_=Q();a.dI=PK(a,b,c,e);a.b3=AD_(b,d);a.iw=0;Jd(Bsf,a);}
function PK(a,b,c,d){if(Btw===null)return A_7(b,c,d);return A_k(b,c,d);}
function Pm(a,b,c,d,e,f){IN();QY(a,b,c,d,e,AEc(f));}
function QY(a,b,c,d,e,f){IN();a:{b:{J(a);a.mm=1;a.kk=0;a.s_=Q();Bpj();switch(Bxg.data[Bi(b)]){case 1:break;case 2:a.dI=Bqw(c,d,f);a.b3=Biy(c,e);a.iw=0;break a;case 3:a.dI=A_k(c,d,f);a.b3=Biy(c,e);a.iw=0;break a;case 4:break b;default:break b;}a.dI=A_7(c,d,f);a.b3=AD_(c,e);a.iw=0;break a;}a.dI=Bmt(d,f);a.b3=BmF(e);a.iw=1;}Jd(Bsf,a);}
function AXx(a,b,c,d){a.dI.vw(b,c,d);return a;}
function ANL(a,b){var c;c=b.data;a.b3.vI(b,0,c.length);return a;}
function ARY(a,b,c,d){a.b3.vI(b,c,d);return a;}
function APc(a){return a.b3.gO();}
function BhJ(a){return a.dI.hi();}
function A0u(a){return a.dI.vU();}
function Bft(a){return a.b3.kP();}
function AOH(a,b){a.iD(b,null);}
function AYF(a,b,c){a.dI.iD(b,c);if(a.ia!==null&&a.ia.BO()>0)a.ia.iD(b,c);if(a.b3.gO()>0)a.b3.d8();}
function BeZ(a,b){a.g6(b,null);}
function ALP(a,b,c){a.dI.g6(b,c);if(a.ia!==null&&a.ia.BO()>0)a.ia.g6(b,c);if(a.b3.gO()>0)a.b3.F8();}
function A8F(a,b,c){a.vr(b,c,0,a.b3.kP()<=0?a.hi():a.gO(),a.mm);}
function A2o(a,b,c,d,e){a.vr(b,c,d,e,a.mm);}
function BaS(a,b,c,d,e,f){var g,h,i,j,k,l,m;if(!e)return;if(f)a.Nz(b);if(a.iw){if(a.b3.gO()<=0)Btv.yB(c,d,e);else{g=a.b3.vq();h=Ck(g);i=BG(g);g.c$(d);g.cu(d+e|0);Btv.Rh(c,e,5123,g);g.c$(h);g.cu(i);}}else{j=0;if(a.kk)j=a.ia.BO();if(a.b3.gO()<=0){if(a.kk&&j>0)Btw.a2t(c,d,e,j);else Btv.yB(c,d,e);}else{if((e+d|0)>a.b3.kP()){k=new MF;l=(((((H()).a(B(676))).h(e)).a(B(677))).h(d)).a(B(678));m=a.b3;TT(k,((l.h(m.kP())).a(B(21))).b());G(k);}if(a.kk&&j>0)Btw.X$(c,e,5123,d*2|0,j);else Btv.Tm(c,e,5123,d*2|0);}}if(f)a.MQ(b);}
function Bci(a,b){var c,d,e;c=a.dI.ih();d=C6(c);e=0;while(e<d){if((CE(c,e)).eS==b)return CE(c,e);e=e+1|0;}return null;}
function A6T(a){return a.dI.ih();}
function AS4(a){return a.b3.vq();}
function Jd(b,c){var d;IN();d=BBG.Y(b);if(d===null)d=Bs();d.E(c);BBG.A(b,d);}
function A1V(){BBG=Dq();}
var ABs=D();
function Im(b,c){var d;if(b<0)G(Z((((H()).a(B(679))).h(b)).b()));d=KG(Bj(2,A7o(b/c)|0));if(d<=1073741824)return d;G(Z((((H()).a(B(680))).h(b)).b()));}
var AIO=D(Bz);
function Bmp(){var a=new AIO();ASm(a);return a;}
function ASm(a){CJ(a);}
function Bcn(a,b,c,d){var e;e=!d.mc()?d.O():c.k();if(b<e)return (-1);d.eg=1;d.Uc=1;return a.l.e(b,c,d);}
function A2D(a,b){return 0;}
function AQO(a){return B(681);}
function AHf(){var a=this;C.call(a);a.uc=0;a.gF=null;a.hX=null;a.yi=0.0;a.uv=0;a.wl=0;a.kh=0;}
function HF(){var a=new AHf();A_J(a);return a;}
function BBJ(a,b){var c=new AHf();AEg(c,a,b);return c;}
function A_J(a){AEg(a,51,0.800000011920929);}
function AEg(a,b,c){var d;J(a);if(c>0.0&&c<1.0){a.yi=c;d=Im(b,c);a.uv=d*c|0;a.kh=d-1|0;a.wl=Dh(N(a.kh));a.gF=Y(C,d);a.hX=Be(d);return;}G(Z((((H()).a(B(376))).b$(c)).b()));}
function AUp(a,b){return V(C$(Cu(N(b.bl()),Cs(2135587861, 2654435769)),a.wl));}
function A6S(a,b){var c,d,e;if(b===null)G(Z(B(642)));c=a.gF;d=a.kS(b);while(true){e=c.data[d];if(e===null)return  -(d+1|0)|0;if(e.C(b))break;d=(d+1|0)&a.kh;}return d;}
function AYG(a,b,c){var d,e;d=a.ku(b);if(d>=0){a.hX.data[d]=c;return;}e= -(d+1|0)|0;a.gF.data[e]=b;a.hX.data[e]=c;e=a.uc+1|0;a.uc=e;if(e>=a.uv)Yu(a,a.gF.data.length<<1);}
function AEL(a,b,c){var d,e,f;d=a.gF;e=a.kS(b);while(true){f=d.data;if(f[e]===null)break;e=(e+1|0)&a.kh;}f[e]=b;a.hX.data[e]=c;}
function A5N(a,b,c){var d;d=a.ku(b);if(d>=0)c=a.hX.data[d];return c;}
function Yu(a,b){var c,d,e,f,g;a:{c=a.gF.data.length;a.uv=b*a.yi|0;a.kh=b-1|0;a.wl=Dh(N(a.kh));d=a.gF;e=a.hX;a.gF=Y(C,b);a.hX=Be(b);if(a.uc>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g!==null)AEL(a,g,e.data[f]);f=f+1|0;}}}}
function AJK(){C.call(this);this.gN=null;}
function Bjv(a){var b=new AJK();AYN(b,a);return b;}
function AYN(a,b){a.gN=b;J(a);}
function A7F(a,b,c,d){Fg(N(b),Ik(a.gN));Fg(N(c),G5(a.gN));Fg(N(d),Il(a.gN));a.gN.T9(Ik(a.gN),G5(a.gN),Il(a.gN));}
function Bdp(a,b,c,d){a.Oa(b,c,d);}
function AI0(){var a=this;Gv.call(a);a.Le=0;a.pk=0;}
function A_C(a,b){var c=new AI0();A$b(c,a,b);return c;}
function Boa(a,b,c,d,e,f,g){var h=new AI0();RP(h,a,b,c,d,e,f,g);return h;}
function A$b(a,b,c){RP(a,0,b,Cy(b),0,b,c,0);}
function RP(a,b,c,d,e,f,g,h){AA6(a,b,c,d,e,f);a.Le=g;a.pk=h;}
function AKm(a,b){if(b>=0&&b<a.bg)return a.D.data[a.bN+b|0];G(Bm(((((((H()).a(B(288))).h(b)).a(B(56))).h(a.bg)).a(B(21))).b()));}
function AUq(a){var b,c,d,e,f,g,h,i;if(a.pk)G(Dv());a:{b=Bf(a);if(a.G>0){c=a.bN;d=a.bN+a.G|0;e=0;while(true){if(e>=b)break a;f=a.D.data;g=c+1|0;h=a.D.data;i=d+1|0;f[c]=h[d];e=e+1|0;c=g;d=i;}}}a.G=b;a.bg=a.hV;a.fR=(-1);return a;}
function AZ7(a){return a.pk;}
function BiB(a){var b,c;b=Bf(a)/2|0;c=a.hB;Fn();if(c!==By9)return Bqo(a.bN+a.G|0,b,a,0,b,a.ci());return Bm6(a.bN+a.G|0,b,a,0,b,a.ci());}
function BfC(a,b){var c,d,e,f,g;if(b>=0&&(b+3|0)<a.bg){c=a.D.data[a.bN+b|0]&255;d=a.D.data[(a.bN+b|0)+1|0]&255;e=a.D.data[(a.bN+b|0)+2|0]&255;f=a.D.data[(a.bN+b|0)+3|0]&255;g=a.hB;Fn();if(g!==By9)return f<<24|e<<16|d<<8|c;return c<<24|d<<16|e<<8|f;}G(Bm(((((((H()).a(B(288))).h(b)).a(B(56))).h(a.bg-3|0)).a(B(21))).b()));}
function AQs(a,b,c){var d;if(a.pk)G(Dv());if(b>=0&&(b+3|0)<a.bg){d=a.hB;Fn();if(d!==By9){a.D.data[a.bN+b|0]=c<<24>>24;a.D.data[(a.bN+b|0)+1|0]=c>>8<<24>>24;a.D.data[(a.bN+b|0)+2|0]=c>>16<<24>>24;a.D.data[(a.bN+b|0)+3|0]=c>>24<<24>>24;}else{a.D.data[a.bN+b|0]=c>>24<<24>>24;a.D.data[(a.bN+b|0)+1|0]=c>>16<<24>>24;a.D.data[(a.bN+b|0)+2|0]=c>>8<<24>>24;a.D.data[(a.bN+b|0)+3|0]=c<<24>>24;}return a;}G(Bm(((((((H()).a(B(288))).h(b)).a(B(56))).h(a.bg-3|0)).a(B(21))).b()));}
function A15(a){var b,c;b=Bf(a)/4|0;c=a.hB;Fn();if(c!==By9)return Bpp(a.bN+a.G|0,b,a,0,b,a.ci());return BnA(a.bN+a.G|0,b,a,0,b,a.ci());}
function AVa(a){var b,c;b=Bf(a)/4|0;c=a.hB;Fn();if(c!==BzC)return Bp0(a.bN+a.G|0,b,a,0,b,a.ci());return Bjq(a.bN+a.G|0,b,a,0,b,a.ci());}
var PE=D(0);
function AJH(){C.call(this);this.gq=null;}
function Bnh(a){var b=new AJH();Bgh(b,a);return b;}
function Bgh(a,b){a.gq=b;J(a);}
function Ba$(a,b,c,d,e,f){Fg(N(b),Ik(a.gq));Fg(N(c),G5(a.gq));Fg(N(f),Il(a.gq));a.gq.Jp(Ik(a.gq),G5(a.gq),d,e,Il(a.gq));}
function AVx(a,b,c,d,e,f){a.Ki(b,c,d,e,f);}
function AJJ(){C.call(this);this.Hz=null;}
function Bjt(a){var b=new AJJ();A9q(b,a);return b;}
function A9q(a,b){a.Hz=b;J(a);}
function AUw(a){return a.Hz.Ur();}
function AQ7(a){return a.Lx();}
function NR(){var a=this;C.call(a);a.nH=null;a.t$=0.0;}
function AXA(a,b){var c=new NR();AQy(c,a,b);return c;}
function AQy(a,b,c){J(a);a.nH=Q();a.t$=0.0;(a.nH.M(b)).bV();a.t$=c;}
function A_S(a,b,c,d){(((a.nH.M(b)).fK(c)).Km(c.m-d.m,c.n-d.n,c.p-d.p)).bV();a.t$= -b.z6(a.nH);}
function AAV(){var a=this;C.call(a);a.qU=null;a.v3=null;a.m0=0;a.mF=0;a.n3=0;a.hc=0;a.sU=0;a.v7=0;a.qR=0;}
function BmH(){var a=new AAV();BfR(a);return a;}
function BfR(a){J(a);a.qU=null;a.v3=null;a.m0=2;a.mF=5;a.n3=0;a.hc=12;a.sU=1;a.v7=(-1);a.qR=(-1);}
var MU=D(0);
function HG(){var a=this;C.call(a);a.gz=null;a.b8=null;a.kl=null;}
var BBK=null;var BBL=null;var BBM=null;function ASw(){ASw=L(HG);A_r();}
function Bpx(){var a=new HG();AAQ(a);return a;}
function AAQ(a){var b;ASw();J(a);a.gz=Y(NR,6);a.b8=I(Ea,[Q(),Q(),Q(),Q(),Q(),Q(),Q(),Q()]);a.kl=B5(24);b=0;while(b<6){a.gz.data[b]=AXA(Q(),0.0);b=b+1|0;}}
function Bce(a,b){var c,d,e,f,g,h;ASw();Bc(BBL,0,a.kl,0,BBL.data.length);Yy(b.c,a.kl,0,8,3);c=0;d=0;while(c<8){e=a.b8.data[c];f=a.kl.data;g=d+1|0;e.m=f[d];f=a.kl.data;h=g+1|0;e.n=f[g];f=a.kl.data;d=h+1|0;e.p=f[h];c=c+1|0;}a.gz.data[0].iT(a.b8.data[1],a.b8.data[0],a.b8.data[2]);a.gz.data[1].iT(a.b8.data[4],a.b8.data[5],a.b8.data[7]);a.gz.data[2].iT(a.b8.data[0],a.b8.data[4],a.b8.data[3]);a.gz.data[3].iT(a.b8.data[5],a.b8.data[1],a.b8.data[6]);a.gz.data[4].iT(a.b8.data[2],a.b8.data[3],a.b8.data[6]);a.gz.data[5].iT(a.b8.data[4],
a.b8.data[0],a.b8.data[1]);}
function A_r(){var b,c,d,e,f,g,h,i;BBK=I(Ea,[CB((-1.0),(-1.0),(-1.0)),CB(1.0,(-1.0),(-1.0)),CB(1.0,1.0,(-1.0)),CB((-1.0),1.0,(-1.0)),CB((-1.0),(-1.0),1.0),CB(1.0,(-1.0),1.0),CB(1.0,1.0,1.0),CB((-1.0),1.0,1.0)]);BBL=B5(24);b=0;c=BBK.data;d=c.length;e=0;while(e<d){f=c[e];g=BBL.data;h=b+1|0;g[b]=f.m;g=BBL.data;i=h+1|0;g[h]=f.n;g=BBL.data;b=i+1|0;g[i]=f.p;e=e+1|0;}BBM=Q();}
function Pu(){var a=this;C.call(a);a.mi=null;a.m1=null;}
var BBN=null;function Bo5(){Bo5=L(Pu);AYm();}
function BjM(a,b){var c=new Pu();AIW(c,a,b);return c;}
function AIW(a,b,c){Bo5();J(a);a.mi=Q();a.m1=Q();a.mi.M(b);(a.m1.M(c)).bV();}
function AYm(){BBN=Q();}
var AH7=D(Cz);
var AIk=D(BE);
function A2i(b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s;b.vt(8);k=b.dV(c);l=b.dV(e);m=b.dV(f);n=b.dV(d);o=b.dV(g);p=b.dV(i);q=b.dV(j);r=b.dV(h);s=b.PL();if(s==1){b.hH(24);b.ed(k,l,m,n);b.ed(p,o,r,q);b.GL(k,o,n,r,m,q,l,p);}else if(!s){b.s1(2);b.ed(k,l,m,n);b.ed(p,o,r,q);}else{b.s1(6);b.ed(k,l,m,n);b.ed(p,o,r,q);b.ed(k,n,r,o);b.ed(p,q,m,l);b.ed(p,l,k,o);b.ed(m,q,r,n);}}
function BgY(b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u;if(Bb(Bx(Ku(b.ih()),N(408)),X)){LZ();k=BtN.dY(c,null,null,null);l=BtO.dY(d,null,null,null);m=BtP;n=null;o=null;p=null;n=m.dY(e,n,o,p);o=BtQ.dY(f,null,null,null);p=BtR;q=null;r=null;m=null;p=p.dY(g,q,r,m);q=BtS.dY(h,null,null,null);r=BtT;s=null;t=null;m=null;r=r.dY(i,s,t,m);m=BtU.dY(j,null,null,null);A2i(b,k,l,n,o,p,q,r,m);}else{b.vt(24);b.s1(6);LZ();u=(((BtF.M(c)).jn(f,0.5)).fK((BtG.M(g)).jn(j,0.5))).bV();b.jN(c,d,f,e,u);b.jN(h,g,i,j,u.di((-1.0)));k=
(((BtF.M(c)).jn(i,0.5)).fK((BtG.M(d)).jn(j,0.5))).bV();b.jN(g,c,e,i,k);b.jN(d,h,j,f,k.di((-1.0)));k=(((BtF.M(c)).jn(h,0.5)).fK((BtG.M(e)).jn(j,0.5))).bV();b.jN(g,h,d,c,k);b.jN(e,f,j,i,k.di((-1.0)));}}
function BdQ(b,c,d,e){A3f(b,0.0,0.0,0.0,c,d,e);}
function A3f(b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;i=f*0.5;j=g*0.5;k=h*0.5;l=c-i;m=d-j;n=e-k;o=c+i;p=d+j;q=e+k;r=(D4()).L(l,m,n);s=(D4()).L(l,p,n);t=(D4()).L(o,m,n);u=(D4()).L(o,p,n);v=(D4()).L(l,m,q);w=(D4()).L(l,p,q);x=(D4()).L(o,m,q);y=(D4()).L(o,p,q);BgY(b,r,s,t,u,v,w,x,y);ZH();}
var AH8=D(Cz);
var T$=D(Bt);
function Bkt(){var a=new T$();BhD(a);return a;}
function BhD(a){CQ(a);}
var AGZ=D();
var Zb=D(Bk);
function Boi(){var a=new Zb();A30(a);return a;}
function A30(a){CZ(a);}
var Zc=D(Bk);
function BkK(){var a=new Zc();ARg(a);return a;}
function ARg(a){CZ(a);}
var Yh=D();
var Zd=D(Bk);
function Bnj(){var a=new Zd();A0c(a);return a;}
function A0c(a){CZ(a);}
var Ze=D(Bk);
function Bjj(){var a=new Ze();AYq(a);return a;}
function AYq(a){CZ(a);}
var Xf=D(Bu);
var Zf=D(CF);
function BnR(){var a=new Zf();A9f(a);return a;}
function A9f(a){Le(a);}
var OX=D();
var BzU=null;function Bqg(){Bqg=L(OX);AMS();}
function AMS(){BzU=Be((AD5()).data.length);BzU.data[Bi(Bud)]=1;BzU.data[Bi(Bue)]=2;}
function AD0(){var a=this;C.call(a);a.f_=null;a.jb=null;a.jd=null;a.Q$=null;}
function Bmn(){var a=new AD0();BdU(a);return a;}
function BdU(a){J(a);a.jd=Bs();a.Q$=BH();}
function U$(a,b){var c,d,e;c=a.jd.b5();while(true){if(!c.bG()){d=Bmx();d.TG(b);a.jd.E(d);return d;}e=c.bD();if(Qt(e.ih(),b)&&e.LF()<16383)break;}return e;}
function AKE(a){if(a.f_!==null)G(W(B(442)));a.jb=null;a.f_=Bkz();a.jd.P();}
function A4y(a){var b,c,d;if(a.f_===null)G(W(B(444)));b=a.f_;Qw(a);a.f_=null;c=a.jd.b5();while(c.bG()){d=c.bD();d.RY();}a.jd.P();A6F(b);return b;}
function Qw(a){if(a.jb!==null)a.jb=null;}
function A34(a,b){if(a.f_===null)G(W(B(444)));Qw(a);a.f_.kr.E(b);a.jb=b;return b;}
function ANs(a){var b;b=ANE();a.Uo(b);b.gA=(((H()).a(B(682))).h(a.f_.kr.j)).b();return b;}
function BfH(a,b,c){if(a.jb===null)a.Md();a.jb.el.E(BqO(b,c));}
function ARI(a,b,c,d,e){var f;f=U$(a,d);a.Q8(f.U0(b,c),e);return f;}
function A0O(a,b,c,d,e){return a.M9(b,c,Vz(d),e);}
function AZv(a,b,c,d,e,f){return a.MU(b,c,d,4,e,f);}
function Bag(a,b,c,d,e,f,g){a.hm();(a.Nu(B(683),e,g,f)).Ox(b,c,d);return a.Ky();}
function A6F(b){var c,d;b.qJ.P();b.qP.P();b.pg.P();c=b.kr.b5();while(c.bG()){d=c.bD();YK(b,d);}}
function YK(b,c){var d,e,f;d=c.el.b5();while(d.bG()){e=d.bD();if(!b.qJ.iR(e.ea,1))b.qJ.E(e.ea);if(!b.pg.iR(e.fz,1)){b.pg.E(e.fz);if(!b.qP.iR(e.fz.ce,1))b.qP.E(e.fz.ce);b.P_(e.fz.ce);}}d=(c.sv()).fG();while(d.bG()){f=d.bD();YK(b,f);}}
var MK=D(0);
var AIq=D();
var ON=D();
var P8=D(0);
function Z4(){var a=this;J8.call(a);a.zx=0;a.vQ=0.0;a.x6=0;a.lm=0.0;a.Dk=0;a.jV=0;a.i1=0;a.DX=0;a.FI=0.0;a.CP=0.0;a.pG=0;a.jt=null;a.v0=0;a.rR=0;a.AC=0;a.sQ=0;a.zZ=0;a.ub=0;a.He=0;a.sE=0;a.Cb=0;a.rw=0;a.yu=0;a.cJ=null;a.fM=0;a.us=0.0;a.ut=0.0;a.fO=null;a.uy=null;a.DI=null;a.iN=0;a.tK=0;}
function BBO(a,b){var c=new Z4();TI(c,a,b);return c;}
function Bkx(a){var b=new Z4();AMT(b,a);return b;}
function TI(a,b,c){AAy(a,b);a.zx=0;a.vQ=360.0;a.x6=1;a.lm=10.0;a.Dk=2;a.jV=0;a.DX=1;a.FI=(-0.10000000149011612);a.CP=10.0;a.pG=1;a.jt=Q();a.v0=1;a.rR=1;a.AC=0;a.sQ=51;a.ub=47;a.sE=29;a.rw=32;a.fM=(-1);a.fO=Q();a.uy=Q();a.DI=b;a.DI.yh=a;a.cJ=c;}
function AMT(a,b){TI(a,BpL(),b);}
function ARU(a,b,c,d,e){a.iN=a.iN|1<<d;a.tK=M5(a.iN)?0:1;if(a.tK)a.fM=(-1);else if(a.fM<0&&!(a.jV&&!a.i1)){a.us=b;a.ut=c;a.fM=e;}return !Rt(a,b,c,d,e)&&a.jV&&!a.i1?0:1;}
function A$g(a,b,c,d,e){a.iN=a.iN&((-1)^1<<d);a.tK=M5(a.iN)?0:1;if(e==a.fM)a.fM=(-1);return !AGW(a,b,c,d,e)&&!a.i1?0:1;}
function A7u(a,b,c,d){if(d==a.zx){((a.fO.M(a.cJ.dh)).iX(a.cJ.dF)).n=0.0;a.cJ.AT(a.jt,a.fO.bV(),c*a.vQ);a.cJ.AT(a.jt,Bx0,b* -a.vQ);}else if(d==a.x6){a.cJ.lE((((a.fO.M(a.cJ.dh)).iX(a.cJ.dF)).bV()).di( -b*a.lm));a.cJ.lE((a.uy.M(a.cJ.dF)).di( -c*a.lm));if(a.v0)(a.jt.eA(a.fO)).eA(a.uy);}else if(d==a.Dk){a.cJ.lE((a.fO.M(a.cJ.dh)).di(c*a.lm));if(a.rR)a.jt.eA(a.fO);}if(a.pG)a.cJ.gj();return 1;}
function AR1(a,b,c,d){var e,f,g,h,i,j;e=AAW(a,b,c,d);if(!e&&a.fM>=0){f=b;g=(f-a.us)/Btr.bk();h=a.ut;i=c;j=(h-i)/Btr.bj();a.us=f;a.ut=i;return a.KZ(g,j,a.fM);}return e;}
function A0m(a,b,c){return a.AG(c*a.FI*a.lm);}
function Bab(a,b){if(!a.DX&&a.jV&&!a.i1)return 0;a.cJ.lE((a.fO.M(a.cJ.dh)).di(b));if(a.AC)a.jt.eA(a.fO);if(a.pG)a.cJ.gj();return 1;}
function A0r(a,b){return a.AG(a.CP*b);}
function ALh(a,b){if(b==a.jV)a.i1=1;if(b==a.sQ)a.zZ=1;else if(b==a.ub)a.He=1;else if(b==a.sE)a.Cb=1;else if(b==a.rw)a.yu=1;return 0;}
function A$5(a,b){if(b==a.jV){a.i1=0;a.fM=(-1);}if(b==a.sQ)a.zZ=0;else if(b==a.ub)a.He=0;else if(b==a.sE)a.Cb=0;else if(b==a.rw)a.yu=0;return 0;}
var HB=D();
var BBP=null;var BBQ=null;var BBR=null;function Ep(){var b;if(BBP===null){b=new I2;A1t();QP(b,BzF,0);BBP=b;}return BBP;}
function X4(){var b;if(BBQ===null){b=new I2;A__();QP(b,Bwu,0);BBQ=b;}return BBQ;}
function Bc(b,c,d,e,f){var g,h,i,j,k,l,m,n;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=AG3(b)){g=e+f|0;if(g<=AG3(d)){a:{b:{if(b!==d){h=(Co(b)).gC();i=(Co(d)).gC();if(h!==null&&i!==null){if(h===i)break b;if(!h.hy()&&!i.hy()){j=b;k=0;g=c;while(k<f){l=j.data;m=g+1|0;n=l[g];if(!i.xg(n)){Py(b,c,d,e,k);G(TP());}k=k+1|0;g=m;}Py(b,c,d,e,f);return;}if(!h.hy())break a;if(i.hy())break b;else break a;}G(TP());}}Py(b,c,d,e,f);return;}G(TP());}}G(Dw());}G(AXw(B(684)));}
function Py(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function ER(){return Long_fromNumber(new Date().getTime());}
function ADu(){var b;if(BBR===null){b=Bla();b.A(B(685),B(686));b.A(B(24),B(687));b.A(B(688),B(424));b.A(B(689),B(37));b.A(B(690),A8d());b.A(B(691),AZj());b.A(B(692),B(686));b.A(B(693),Big());BBR=Ble(b);}}
function AZj(){return B(694);}
function Big(){return B(424);}
function Iy(b){ADu();return BBR.Fp(b);}
function HD(b,c){ADu();return BBR.A(b,c);}
function A8d(){return B(264);}
var P0=D();
var BBS=null;function Dt(){return BBS;}
function ATw(b){BBS=b;}
function Zt(){var a=this;C.call(a);a.f$=0;a.rG=0.0;a.rH=0.0;a.oY=0.0;a.oX=0.0;a.vJ=X;a.gI=0;a.qn=null;a.qm=null;a.kU=null;}
function BpA(){var a=new Zt();AKz(a);return a;}
function AKz(a){J(a);a.f$=10;a.qn=B5(a.f$);a.qm=B5(a.f$);a.kU=Bqr(a.f$);}
function AUU(a,b,c,d){var e;a.rG=b;a.rH=c;a.oY=0.0;a.oX=0.0;a.gI=0;e=0;while(e<a.f$){a.qn.data[e]=0.0;a.qm.data[e]=0.0;a.kU.data[e]=X;e=e+1|0;}a.vJ=d;}
function AT8(a,b,c,d){var e,f;a.oY=b-a.rG;a.oX=c-a.rH;a.rG=b;a.rH=c;e=EI(d,a.vJ);a.vJ=d;f=a.gI%a.f$|0;a.qn.data[f]=a.oY;a.qm.data[f]=a.oX;a.kU.data[f]=e;a.gI=a.gI+1|0;}
function A$6(a){var b,c;b=PO(a,a.qn,a.gI);c=U_(OW(a,a.kU,a.gI))/1.0E9;if(c!==0.0)return b/c;return 0.0;}
function Bdm(a){var b,c;b=PO(a,a.qm,a.gI);c=U_(OW(a,a.kU,a.gI))/1.0E9;if(c!==0.0)return b/c;return 0.0;}
function PO(a,b,c){var d,e,f;d=Bw(a.f$,c);e=0.0;f=0;while(f<d){e=e+b.data[f];f=f+1|0;}return e/d;}
function OW(a,b,c){var d,e,f;d=Bw(a.f$,c);e=X;f=0;while(f<d){e=CS(e,b.data[f]);f=f+1|0;}if(!d)return X;return Gc(e,N(d));}
function AJB(){Cz.call(this);this.jJ=null;}
function BnF(a){var b=new AJB();Bda(b,a);return b;}
function Bda(a,b){a.jJ=b;Tk(a);}
function Bcs(a){if(!a.jJ.ng)a.jJ.ng=a.jJ.d$.SV(a.jJ.ek.c4,a.jJ.ek.c3);}
var ACI=D(U);
function BnB(){var a=new ACI();AMP(a);return a;}
function AMP(a){Bv(a);}
function A1f(a){return (((Dc()).bK(48,57)).bK(97,102)).bK(65,70);}
function AFr(){var a=this;C.call(a);a.Jf=null;a.GP=null;a.fi=null;a.bO=null;a.iW=0;a.jW=0;a.pQ=0;a.nI=null;a.rF=null;a.fm=null;}
function Bkv(a,b){var c=new AFr();AKc(c,a,b);return c;}
function ADx(a,b,c){a.rF=AGK(a,c);b.Dg(a.fi.en(a.pQ,N2(a)));b.Lj(a.rF);a.pQ=Pa(a);return a;}
function AGK(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$$je;if(a.nI!==null&&a.nI.C(b)){if(a.fm===null)return a.rF;c=H();d=0;while(d<a.fm.dr()){c.c0(a.fm.o(d));d=d+1|0;}return c.b();}a.nI=b;e=b.sp();f=H();a.fm=null;g=0;h=0;i=0;a:{b:while(true){j=e.data;k=j.length;if(g>=k){if(a.fm!==null&&h!=f.k())a.fm.io(f.en(h,f.k()));return f.b();}if(j[g]==92&&!i){i=1;g=g+1|0;}c:{if(i){if(g>=k)break b;f.ba(j[g]);i=0;}else if(j[g]!=36)f.ba(j[g]);else{if(a.fm===null)a.fm=WK();d:{try{l=new BM;g=g+1|0;Ri(l,e,g,1);m=B7(l);if(h==f.k())break d;a.fm.io(f.en(h,
f.k()));h=f.k();break d;}catch($$e){$$je=T($$e);if($$je instanceof Cg){break a;}else{throw $$e;}}}try{a.fm.io(Bli(a,m));n=Hv(a,m);h=h+n.k()|0;f.a(n);break c;}catch($$e){$$je=T($$e);if($$je instanceof Cg){break a;}else{throw $$e;}}}}g=g+1|0;}G(Dw());}G(Z(B(59)));}
function AHT(a){a.iW=0;a.jW=a.fi.k();a.bO.uK(a.fi,a.iW,a.jW);a.pQ=0;a.nI=null;a.bO.hP=(-1);return a;}
function AIu(a,b){return b.Dg(a.fi.en(a.pQ,a.fi.k()));}
function AJi(a,b){var c;c=BdN();AHT(a);while(Hm(a)){ADx(a,c,b);}return (AIu(a,c)).b();}
function Hv(a,b){return a.bO.DE(b);}
function Lz(a,b){var c,d;c=a.fi.k();if(b>=0&&b<=c){d=AHp(a,b);if(d>=0&&a.bO.OS()){a.bO.P8();return 1;}a.bO.ep=(-1);return 0;}G(Bm(K5(b)));}
function AHp(a,b){var c;a.bO.f9();a.bO.qx(1);a.bO.Jm(b);c=a.GP.cM(b,a.fi,a.bO);if(c==(-1))a.bO.eg=1;return c;}
function Hm(a){var b,c;b=a.fi.k();if(!R_(a))b=a.jW;if(a.bO.ep>=0&&a.bO.Eh()==1){a.bO.ep=a.bO.qB();if(a.bO.qB()==a.bO.xU()){c=a.bO;c.ep=c.ep+1|0;}return a.bO.ep<=b&&Lz(a,a.bO.ep)?1:0;}return Lz(a,a.iW);}
function ZZ(a,b){return a.bO.l8(b);}
function RV(a,b){return a.bO.pY(b);}
function N2(a){return ZZ(a,0);}
function Pa(a){return RV(a,0);}
function R_(a){return a.bO.mc();}
function AKc(a,b,c){var d,e,f,g,h;J(a);a.iW=(-1);a.jW=(-1);a.Jf=b;a.GP=b.sH;a.fi=c;a.iW=0;a.jW=a.fi.k();d=new Qq;e=a.iW;f=a.jW;g=AAK(b);h=AIG(b);Wl(d,c,e,f,g,h,WM(b));a.bO=d;}
var YL=D(BO);
function BmG(){var a=new YL();Bb5(a);return a;}
function Bb5(a){Da(a);}
function A1G(a,b,c,d){var e,f,g,h,i;e=d.O();f=b+1|0;if(f>e){d.eg=1;return (-1);}g=c.g(b);if(Cb(g)){h=b+2|0;if(h<=e){i=c.g(f);if(HQ(g,i))return a.l.e(h,c,d);}}return a.l.e(f,c,d);}
function AOU(a){return B(695);}
function A5D(a,b){a.l=b;}
function BbY(a){return (-2147483602);}
function A5A(a,b){return 1;}
var Tq=D();
var AAb=D(U);
function Bjn(){var a=new AAb();AXC(a);return a;}
function AXC(a){Bv(a);}
function A2U(a){var b;b=Bnt(a);b.bm=1;return b;}
function OR(){var a=this;BO.call(a);a.gD=null;a.v$=null;a.lu=0;}
function Bgg(a,b){var c=new OR();A3z(c,a,b);return c;}
function A3z(a,b,c){Da(a);a.gD=b;a.lu=c;}
function AUg(a,b){a.l=b;}
function I3(a){if(a.v$===null)a.v$=Oo(a.gD);return a.v$;}
function AX1(a){return (((H()).a(B(696))).a(I3(a))).b();}
function AKl(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;e=d.O();f=0;g=Be(3);h=(-1);i=(-1);if(b>=e)return (-1);j=b+1|0;k=c.g(b);l=AOt(k);if(l!==null){m=l.data;n=0;if(m.length!=a.lu)return (-1);while(true){if(n>=a.lu)return a.l.e(j,c,d);if(m[n]!=a.gD.data[n])break;n=n+1|0;}return (-1);}o=g.data;o[f]=k;p=k-4352|0;if(p>=0&&p<19){if(j<e){k=c.g(j);h=k-4449|0;}if(h>=0&&h<21){q=j+1|0;o[1]=k;if(q<e){k=c.g(q);i=k-4519|0;}if(i>=0&&i<28){r=q+1|0;o[2]=k;r=a.lu==3&&o[0]==a.gD.data[0]&&o[1]==a.gD.data[1]&&o[2]==a.gD.data[2]
?a.l.e(r,c,d):(-1);return r;}r=a.lu==2&&o[0]==a.gD.data[0]&&o[1]==a.gD.data[1]?a.l.e(q,c,d):(-1);return r;}return (-1);}return (-1);}
function A5B(a,b){var c,d;a:{if(b instanceof OR){c=b;if(!(I3(c)).C(I3(a))){d=0;break a;}}d=1;}return d;}
function AZG(a,b){return 1;}
var Pp=D();
var SN=D(Cj);
function IG(){var a=this;C.call(a);a.bq=null;a.bu=null;a.du=0.0;a.i6=0.0;a.kv=0.0;a.kq=null;}
function BBT(){var a=new IG();A8$(a);return a;}
function A8$(a){J(a);a.bq=Bs();a.bu=Jx();a.kq=DM();}
function AS6(a){a.bq.P();a.bu.P();a.kv=0.0;}
function ALx(a){var b,c,d,e,f;b=Ht(a.bq.j+32|0);c=a.bq;d=0;e=c.j;while(d<e){f=c.o(d);b.ba(f.fc&65535);d=d+1|0;}b.a(B(697));b.c0(a.kq);b.a(B(322));b.b$(a.du);b.a(B(322));b.b$(a.i6);b.a(B(322));b.b$(a.kv);return b.b();}
var Oz=D(DP);
function AHL(){Cc.call(this);this.Sf=null;}
function BkU(a){var b=new AHL();A6C(b,a);return b;}
function A6C(a,b){a.Sf=b;Ds(a);}
function A2A(a,b){}
function AOM(a,b){}
function Bgw(a,b,c){return 0;}
var Ql=D(Fb);
var Fr=D(Bd);
var BBU=null;var BBV=null;var BBW=null;var BBX=null;function Bk8(){Bk8=L(Fr);A$y();}
function AId(a,b){var c=new Fr();TC(c,a,b);return c;}
function TC(a,b,c){Bk8();B4(a,b,c);}
function A$y(){BBU=AId(B(698),0);BBV=AId(B(699),1);BBW=AId(B(700),2);BBX=I(Fr,[BBU,BBV,BBW]);}
function ZX(){var a=this;C.call(a);a.qJ=null;a.kr=null;a.Ch=null;a.qP=null;a.pg=null;a.tg=null;a.QG=null;}
function Bkz(){var a=new ZX();AKv(a);return a;}
function AKv(a){J(a);a.qJ=Bs();a.kr=Bs();a.Ch=Bs();a.qP=Bs();a.pg=Bs();a.tg=Bs();a.QG=Ef();}
function Bgp(a,b){if(!a.tg.iR(b,1))a.tg.E(b);}
function TO(){Bz.call(this);this.Ba=0;}
function BfS(a){var b=new TO();ASD(b,a);return b;}
function ASD(a,b){CJ(a);a.Ba=b;}
function A5f(a,b,c,d){var e,f,g,h,i;e=b<d.O()?c.g(b):32;f=!b?32:c.g(b-1|0);g=!d.mc()?d.dW():0;h=e!=32&&!Pi(a,e,b,g,c)?0:1;i=f!=32&&!Pi(a,f,b-1|0,g,c)?0:1;return h^i^a.Ba?(-1):a.l.e(b,c,d);}
function A5x(a,b){return 0;}
function BiY(a){return B(701);}
function Pi(a,b,c,d,e){var f;if(!Ps(b)&&b!=95){a:{if(Hl(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=e.g(c);if(Ps(f))return 0;if(Hl(f)!=6)return 1;}}return 1;}return 0;}
function IA(){BV.call(this);this.Ue=null;}
var BBY=X;function BlY(){BlY=L(IA);AQu();}
function AQu(){BBY=B2(B(702));}
var AD7=D();
var Sh=D(Ex);
function Bpv(){var a=new Sh();AV9(a);return a;}
function AV9(a){K4(a);}
var Sm=D(Ex);
function BkR(){var a=new Sm();A9I(a);return a;}
function A9I(a){K4(a);}
function AEK(a){return Q();}
function ATJ(a){return AEK(a);}
var AHb=D();
function QL(b,c,d,e){var f;f=AYp(c);f.da();c.c$(0);f.xV(b,e,d);c.c$(0);if(!(c instanceof Gv))c.cu(d);else c.cu(d<<2);}
function AYp(b){var c;c=null;if(b instanceof Gv)c=b.tO();else if(b instanceof Ew)c=b;if(c!==null)return c;G(W(B(703)));}
function Jv(b){var c;if(!Jw())return A3D(B5(b));c=G8(b*4|0);GO(c,FU());return c.tO();}
function OY(b){var c;if(!Jw())return IV(Cy(b));c=G8(b);GO(c,FU());return c;}
function AHr(b){var c;if(!Jw())return BaJ(O_(b));c=G8(b*2|0);GO(c,FU());return c.xn();}
function Gn(b){var c;if(!Jw())return A9p(Be(b));c=G8(b*4|0);GO(c,FU());return c.Ae();}
var DR=D();
var Um=D(DR);
var Ui=D(JR);
var Uj=D(DR);
var Uk=D(DR);
var Ul=D(DR);
var Wc=D(Bu);
var L5=D(0);
var Sc=D();
function AT5(a,b,c){a.a1m($rt_str(b),Hz(c,"handleEvent"));}
function AUz(a,b,c){a.a0y($rt_str(b),Hz(c,"handleEvent"));}
function ALX(a,b){return a.PN(b);}
function AV$(a,b,c,d){a.V3($rt_str(b),Hz(c,"handleEvent"),d?1:0);}
function A0z(a,b){return !!a.a1p(b);}
function ANu(a){return a.Tr();}
function AKA(a,b,c,d){a.Xp($rt_str(b),Hz(c,"handleEvent"),d?1:0);}
var Df=D();
var BBZ=null;var BB0=null;var BB1=null;var BB2=null;var BB3=null;var BB4=null;var BB5=null;var BB6=null;var BB7=null;function BB8(){BB8=L(Df);ANR();}
function ANR(){BBZ=PA(0.0);BB0=PA(1.0);BB1=Bl(0);BB2=Bl(1);BB3=BB2;BB4=Bl(2);BB5=Bl(4);BB6=Bl(8);BB7=Bl(16);}
var R7=D();
var AHd=D(BL);
var Yr=D(GJ);
var AGH=D(EV);
function Bp1(a,b,c){var d=new AGH();A8D(d,a,b,c);return d;}
function A8D(a,b,c,d){PS(a,b,c,d);}
function ALI(a,b,c,d){var e;e=a.l.e(b,c,d);if(e>=0)return e;return a.bd.e(b,c,d);}
var AG8=D(U);
function Bqh(){var a=new AG8();AMw(a);return a;}
function AMw(a){Bv(a);}
function AR8(a){return Bj7(a);}
function AFT(){var a=this;C.call(a);a.Dd=0;a.GW=0;a.Gc=null;}
function Bli(a,b){var c=new AFT();AOT(c,a,b);return c;}
function AOT(a,b,c){a.Gc=b;a.GW=c;J(a);a.Dd=a.GW;}
function ATU(a){return Hv(a.Gc,a.Dd);}
var AJO=D(JA);
var ADJ=D(BL);
var D0=D(Dn);
function EU(){var a=new D0();A4p(a);return a;}
function Eg(a){var b=new D0();ATE(b,a);return b;}
function A4p(a){G$(a);}
function ATE(a,b){AJ0(a,b);}
var AJs=D(C0);
var Vj=D(Cj);
function ADk(){var a=this;C.call(a);a.qD=null;a.R1=0;a.hk=0;a.gJ=0;}
function M4(a,b){var c=new ADk();AVj(c,a,b);return c;}
function AVj(a,b,c){J(a);a.gJ=1;a.qD=b;a.R1=c;}
function A$V(a){if(!a.gJ)G(W(B(704)));return a.hk>=a.qD.j?0:1;}
function A6y(a){var b,c;if(a.hk>=a.qD.j)G(Bm9(K5(a.hk)));if(!a.gJ)G(W(B(704)));b=a.qD.T.data;c=a.hk;a.hk=c+1|0;return b[c];}
function AHs(){K_.call(this);this.OX=null;}
function Bmf(a,b,c,d,e){var f=new AHs();Bf6(f,a,b,c,d,e);return f;}
function Bf6(a,b,c,d,e,f){a.OX=b;XQ(a,c,d,e,f);}
var ABq=D();
var WX=D(U);
function Bkh(){var a=new WX();AUF(a);return a;}
function AUF(a){Bv(a);}
function AXN(a){return BlM(a);}
var AHm=D(U);
function BjX(){var a=new AHm();AU2(a);return a;}
function AU2(a){Bv(a);}
function A2I(a){return Bj6(a);}
function AEk(){var a=this;C.call(a);a.nx=null;a.rS=0;a.p5=null;a.u6=0;a.po=null;a.r_=0;a.kF=null;a.qc=0;}
function C9(){var a=new AEk();Bi3(a);return a;}
function Bi3(a){J(a);a.nx=Q();a.p5=CB(0.0,1.0,0.0);a.po=CD(1.0,1.0,1.0,1.0);a.kF=BB();}
function AWL(a){a.nx.L(0.0,0.0,0.0);a.p5.L(0.0,1.0,0.0);a.po.gT(1.0,1.0,1.0,1.0);a.kF.hq(0.0,0.0);}
function ATs(a,b,c,d,e){a.f9();a.rS=b===null?0:1;if(a.rS)a.nx.M(b);a.u6=c===null?0:1;if(a.u6)a.p5.M(c);a.r_=d===null?0:1;if(a.r_)a.po.e5(d);a.qc=e===null?0:1;if(a.qc)a.kF.lA(e);return a;}
function ATL(a,b,c){a.kF.hq(b,c);a.qc=1;return a;}
function AGb(){var a=this;C.call(a);a.n1=0.0;a.pd=null;}
function U2(a,b){var c=new AGb();BgJ(c,a,b);return c;}
function BgJ(a,b,c){J(a);a.n1=b;a.pd=c;}
var AC5=D(CW);
var R2=D(EH);
var Rj=D(HR);
function BB9(){var a=new Rj();YB(a);return a;}
function YB(a){Zx(a);ATP(a);}
function BfM(a,b){var c;c=new Float32Array(b);return c;}
function A14(a,b){var c;c=new Int32Array(b);return c;}
function AT9(a,b){var c;c=new Int16Array(b);return c;}
function A4w(a,b){var c;c=new Int8Array(b);return c;}
function AOb(a,b){var c;c=new Uint8Array(b);return c;}
function K6(){BO.call(this);this.hp=0;}
function A$u(a){var b=new K6();AV3(b,a);return b;}
function AV3(a,b){Da(a);a.hp=b;}
function A5Q(a,b){a.l=b;}
function AKx(a,b,c,d){var e,f,g,h,i;e=d.O();f=b+1|0;g=Cl(f,e);if(g>0){d.eg=1;return (-1);}h=c.g(b);if(g<0){i=c.g(f);if(BU(i))return (-1);}if(a.hp!=h)return (-1);return a.l.e(f,c,d);}
function Bc7(a,b,c,d){var e,f,g;if(!(c instanceof BM))return He(a,b,c,d);e=c;f=d.O();while(true){if(b>=f)return (-1);g=e.eX(a.hp,b);if(g<0)return (-1);b=g+1|0;if(b<f&&BU(e.g(b))){b=g+2|0;continue;}if(a.l.e(b,c,d)>=0)break;}return g;}
function AYa(a,b,c,d,e){var f,g,h,i;if(!(d instanceof BM))return Hn(a,b,c,d,e);f=d;g=e.O();a:{while(true){if(c<b)return (-1);h=f.nh(a.hp,c);if(h<0)break a;if(h<b)break a;i=h+1|0;if(i<g&&BU(f.g(i))){c=h+(-1)|0;continue;}if(a.l.e(i,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function Bib(a){return (((H()).a(B(59))).ba(a.hp)).b();}
function AOy(a,b){if(b instanceof D7)return 0;if(b instanceof D3)return 0;if(b instanceof Do)return 0;if(b instanceof D1)return 0;if(b instanceof K1)return 0;if(!(b instanceof K6))return 1;return b.hp!=a.hp?0:1;}
function Bdf(a,b){return 1;}
var Kx=D(F1);
var BB$=null;function BmS(){BmS=L(Kx);ALj();}
function BB_(){var a=new Kx();Wn(a);return a;}
function Wn(a){BmS();Pe(a);}
function ALj(){BB$=Ga(E(Kx));}
var ABe=D(F0);
function Bn3(a,b,c,d){var e=new ABe();ALm(e,a,b,c,d);return e;}
function ALm(a,b,c,d,e){MQ(a,b,c,d,e);}
function AEr(){C.call(this);this.wJ=null;}
function BmB(a){var b=new AEr();A0W(b,a);return b;}
function A0W(a,b){J(a);a.wJ=b;}
function Blc(b){return BmB(b);}
function A$8(a,b){a.wJ.op(b);}
function A1u(a,b){a.wJ.S2(b);}
function Id(){var a=this;C.call(a);a.cx=null;a.bY=0;a.nN=0;}
function Iv(){var a=new Id();ARp(a);return a;}
function BCa(a,b){var c=new Id();Y0(c,a,b);return c;}
function ARp(a){Y0(a,1,16);}
function Y0(a,b,c){J(a);a.nN=b;a.cx=Be(c);}
function A$R(a,b){var c,d,e;c=a.cx;d=c.data;if(a.bY==d.length)c=a.u3(Bj(8,a.bY*1.75|0));d=c.data;e=a.bY;a.bY=e+1|0;d[e]=b;}
function AYP(a,b){if(b<a.bY)return a.cx.data[b];G(Bm((((((H()).a(B(312))).h(b)).a(B(313))).h(a.bY)).b()));}
function A8f(a){a.bY=0;}
function AVw(a){if(a.cx.data.length!=a.bY)a.u3(a.bY);return a.cx;}
function AVQ(a,b){var c;if(b<0)G(Z((((H()).a(B(319))).h(b)).b()));c=a.bY+b|0;if(c>a.cx.data.length)a.u3(Bj(Bj(8,c),a.bY*1.75|0));return a.cx;}
function AMh(a,b){var c,d,e;c=Be(b);d=c.data;e=a.cx;Bc(e,0,c,0,Bw(a.bY,d.length));a.cx=c;return c;}
function ATX(a){var b,c,d,e,f;if(!a.nN)return O1(a);b=a.cx;c=1;d=0;e=a.bY;while(d<e){f=b.data;c=(c*31|0)+f[d]|0;d=d+1|0;}return c;}
function BgP(a,b){var c,d,e,f,g,h;if(b===a)return 1;if(!a.nN)return 0;if(!(b instanceof Id))return 0;c=b;if(!c.nN)return 0;d=a.bY;if(d!=c.bY)return 0;e=a.cx;f=c.cx;g=0;while(g<d){h=f.data;if(e.data[g]!=h[g])return 0;g=g+1|0;}return 1;}
function A_E(a){var b,c,d,e;if(!a.bY)return B(321);b=a.cx;c=b.data;d=A1r(32);d.l3(91);d.BQ(c[0]);e=1;while(e<a.bY){d.Ez(B(322));d.BQ(c[e]);e=e+1|0;}d.l3(93);return d.b();}
var UK=D(HO);
function Jz(){var a=this;C.call(a);a.i7=null;a.vs=null;a.BR=null;a.G9=null;a.Da=null;a.Gu=null;a.Bg=null;a.t9=null;a.i5=null;a.uE=0;a.tN=0;a.GQ=null;a.lW=null;a.J0=null;a.pR=null;a.lc=null;a.gk=null;a.xJ=null;}
var BCb=null;function BCc(a,b){var c=new Jz();AH9(c,a,b);return c;}
function A4F(){return BCb;}
function AH9(a,b,c){var d;J(a);HA();a.i5=Bv5;a.uE=(-1);a.tN=1;a.J0=Ef();a.pR=Bs();a.lc=Bs();d=c.KI();Bwk=d;a.t9=d.hO();a.Bg=b;a.Gu=c;a.Da=d.GN();a.xJ=d.Ri();UE(a);}
function UE(a){var b,c;BCb=(E3()).QU();HD(B(22),B(59));if((BCb.windows?1:0)==1)HD(B(24),B(26));else if((BCb.macOS?1:0)==1)HD(B(24),B(705));else if((BCb.linux?1:0)!=1)HD(B(24),B(706));else HD(B(24),B(27));ATw(Bn1(E3()));b=Dt();a.gk=b.Kh();if(a.gk.mx(B(707))){a.gk=a.gk.vM(B(708),B(59));a.gk=a.gk.vM(B(709),B(59));}a.lW=Bp_((((H()).a(a.gk)).a(B(710))).b());c=Bl$();a.lW.PZ(B(711));a.i7=Bkf(a.Gu);a.vs=Bkl(a.Da);a.BR=BnI(a.lW);a.GQ=BpZ();SE(a);AJ2(a);Bsf=a;Btr=a.i7;Btu=a.i7.w0();Btv=a.i7.w0();Btd=a.vs;Btt=a.BR;a.t9.wX(a);}
function A_2(a){var b,c,d,$$je;b=a.i5;a:{try{b:{BnO();switch(Bv4.data[Bi(b)]){case 1:c=(Dt()).NW();if(c)break b;HA();a.i5=Bv8;break b;case 2:case 3:break;case 4:HA();a.i5=Bv6;break b;default:break b;}AF9(a,a.Bg);}}catch($$e){$$je=T($$e);if($$je instanceof DA){d=$$je;break a;}else{throw $$e;}}a.t9.wX(a);return;}d.HB();G(d);}
function AF9(a,b){var c,d,e,f;a.i7.gj();c=Btr.bk();d=Btr.bj();if(!(c==a.uE&&d==a.tN)){a.uE=c;a.tN=d;Btu.pq(0,0,c,d);e=a.i5;HA();if(e===Bv6){a.i5=Bv7;b.yo();}b.Vi(c,d);}a.lc.rm(a.pR);a.pR.P();f=0;while(f<a.lc.j){(a.lc.o(f)).ft();f=f+1|0;}a.lc.P();e=a.i7;e.tY=CS(e.tY,N(1));b.Se();a.vs.f9();}
function SE(a){a.lW.ma(1,B(712),BnV(a));}
function AJ2(a){a.xJ.Tw(a);}
function AU0(a){return a.lW;}
function AMO(a,b,c){a.GQ.rp(b,c);}
function Bcp(a){AAw();return Bs7;}
function Baj(a,b){a.pR.E(b);}
function ASk(a,b){}
function AL3(b){return b.gk;}
function ARO(b,c){b.G9=c;return c;}
function BgQ(b){return b.G9;}
function DG(){var a=this;Iz.call(a);a.RU=0;a.LO=0;a.QY=0;a.Rp=0;a.S8=0;a.K2=0;a.Sz=0;a.wp=0;a.UT=0;a.UZ=0;a.JU=0;a.Rz=0;a.NX=0;a.Sq=0;a.EN=0;a.K5=0;a.L$=0;a.Jb=0;a.OV=0;a.I9=0;a.JA=0;a.Mr=0;a.TA=0;a.U9=0;a.Q3=0;a.Ji=0;a.Tb=0;a.Ph=0;a.Ql=0;a.Oo=0;a.Q5=0;a.GS=0;a.I5=0;a.IA=0;a.wy=0;a.zn=0;a.BE=0;a.td=0;a.A4=0;a.s9=0;a.D2=0;a.uS=0;a.xY=0;a.u1=0;a.AB=0;a.G6=0;a.xB=0;a.zR=0;a.GA=0;a.wZ=0;a.Aq=0;a.Gf=0;a.kd=0;a.yT=0;a.w2=0;a.mI=0;a.hI=0;a.xH=0;a.Ho=0;a.uo=0;a.lI=0;a.e_=0;a.wS=0;a.Bu=0;a.GG=0;a.wt=0;a.AL=0;a.Ds=0;a.l_
=0;a.fH=0;a.FL=0;a.Ud=0;a.Mb=null;a.cG=null;a.ch=null;a.cb=null;a.sC=null;a.lD=X;a.Fa=X;a.hE=null;a.LD=null;a.xc=0.0;a.he=0;a.OP=null;}
var BCd=null;var BCe=null;var BCf=X;var BCg=0;var BCh=0;var BCi=X;var BCj=null;function Db(){Db=L(DG);AYv();}
function BkC(a,b){var c=new DG();ACq(c,a,b);return c;}
function BCk(a,b,c){var d=new DG();Oe(d,a,b,c);return d;}
function BCl(a,b,c,d,e){var f=new DG();Mq(f,a,b,c,d,e);return f;}
function BCm(a,b,c){var d=new DG();OH(d,a,b,c);return d;}
function ADL(){Db();if(BCd===null)BCd=(Btt.oS(B(713))).w5();return BCd;}
function Wm(){Db();if(BCe===null)BCe=(Btt.oS(B(714))).w5();return BCe;}
function ACq(a,b,c){Db();Oe(a,b,c,AFF(b,c));}
function Oe(a,b,c,d){Db();Mq(a,b,c,d,c.qU===null?ADL():c.qU,c.v3===null?Wm():c.v3);}
function Mq(a,b,c,d,e,f){Db();OH(a,b,c,Uh((((H()).a(d)).a(e)).b(),(((H()).a(d)).a(f)).b()));}
function OH(a,b,c,d){var e,f,g,h,i;Db();AHN(a);a.wy=a.b7(Br(B(715)));a.zn=a.b7(Br(B(716)));a.BE=a.b7(Br(B(717)));a.td=a.b7(Br(B(718)));a.A4=a.b7(Br(B(719)));a.s9=a.b7(Br(B(720)));a.D2=a.b7(Br(B(721)));a.uS=a.b7(Br(B(722)));a.xY=a.b7(Br(B(723)));a.u1=a.b7(Br(B(724)));a.AB=a.b7(Br(B(725)));a.G6=a.b7(Br(B(726)));a.xB=a.b7(Br(B(727)));a.zR=a.b7(Br(B(728)));a.GA=a.b7(Br(B(729)));a.wZ=a.b7(Br(B(730)));a.Aq=a.b7(Br(B(731)));a.Gf=a.b7(Br(B(732)));a.Mb=AXa();a.LD=Sa();a.OP=Q();e=Mx(b);a.hE=c;a.bp=d;f=b.cE===null?0:1;a:
{b:{a.fH=f;AIr();if(!CM(e,Byc)){if(!a.fH)break b;g=Byc;if(!CM(e,g))break b;}f=1;break a;}f=0;}a.FL=f;a.Ud=a.fH&&b.cE.je!==null?1:0;a.sC=b;a.lD=B1(EY(e),BCi);a.Fa=Qn(b.cZ.ce.fp());a.cG=Y(I1,a.fH&&c.m0>0?c.m0:0);h=0;while(h<a.cG.data.length){a.cG.data[h]=AQ_();h=h+1|0;}a.ch=Y(Rd,a.fH&&c.mF>0?c.mF:0);h=0;while(h<a.ch.data.length){a.ch.data[h]=Bpn();h=h+1|0;}a.cb=Y(ME,a.fH&&c.n3>0?c.n3:0);h=0;while(h<a.cb.data.length){a.cb.data[h]=Bjm();h=h+1|0;}if(!c.sU&&D2(Bx(BCf,a.lD),a.lD))G(W(((((H()).a(B(733))).uY(a.lD)).a(B(21))).b()));if
(b.dX!==null&&b.dX.data.length>c.hc)G(W((((((H()).a(B(734))).h(b.dX.data.length)).a(B(735))).h(c.hc)).b()));Bpz();i=BCn;BlN();a.RU=a.bn(i,Bsz);a.LO=a.bn(BCo,BsA);a.QY=a.bn(BCp,BsB);a.Rp=a.bn(BCq,BsC);a.S8=a.bn(BCr,BsD);a.K2=a.bn(BCs,BsE);a.Sz=a.bn(BCt,BsF);a.wp=a.b7(Br(B(736)));a.UT=a.bn(BCu,BsG);a.UZ=a.bn(BCv,BsH);a.JU=a.bn(BCw,BsI);a.Rz=a.bn(BCx,BsJ);a.NX=b.dX!==null&&c.hc>0?a.bn(BCy,BoB(c.hc)):(-1);a.Sq=a.bn(BCz,BsK);a.EN=a.b7(BCA);a.K5=a.bn(BCB,BsL);a.L$=a.bn(BCC,BsM);a.Jb=a.bn(BCD,BsN);a.OV=a.bn(BCE,BsO);a.I9
=a.bn(BCF,BsP);a.JA=a.bn(BCG,BsQ);a.Mr=a.bn(BCH,BsR);a.TA=a.bn(BCI,BsS);a.U9=a.bn(BCJ,BsT);a.Q3=a.bn(BCK,BsU);a.Ji=a.bn(BCL,BsV);a.Tb=a.bn(BCM,BsW);a.Ph=a.bn(BCN,BsX);a.Ql=a.bn(BCO,BsY);a.Oo=a.bn(BCP,BsZ);a.Q5=a.bn(BCQ,Bs0);a.GS=a.b7(BCR);a.I5=!a.fH?(-1):a.bn(BCS,BpF(c.m0,c.mF));a.IA=!a.FL?(-1):a.bn(BCT,Bs1);}
function A5R(a){var b;b=a.bp;a.bp=null;a.P1(b,a.sC);a.sC=null;a.kd=Ce(a,a.wy);a.yT=Ce(a,a.wy)-a.kd|0;a.w2=Ce(a,a.zn)-a.kd|0;a.mI=Ce(a,a.BE)-a.kd|0;if(a.mI<0)a.mI=0;a.hI=Ce(a,a.td);a.xH=Ce(a,a.td)-a.hI|0;a.Ho=Ce(a,a.A4)-a.hI|0;a.uo=!JT(a,a.s9)?(-1):Ce(a,a.s9)-a.hI|0;a.lI=Ce(a,a.D2)-a.hI|0;if(a.lI<0)a.lI=0;a.e_=Ce(a,a.uS);a.wS=Ce(a,a.uS)-a.e_|0;a.Bu=Ce(a,a.xY)-a.e_|0;a.GG=Ce(a,a.AB)-a.e_|0;a.wt=!JT(a,a.u1)?(-1):Ce(a,a.u1)-a.e_|0;a.AL=Ce(a,a.G6)-a.e_|0;a.Ds=Ce(a,a.xB)-a.e_|0;a.l_=Ce(a,a.zR)-a.e_|0;if(a.l_<0)a.l_
=0;}
function Fd(b,c){Db();return D2(Bx(b,c),c)?0:1;}
function X_(b,c){Db();return Bb(Bx(b,c),X)?0:1;}
function Mx(b){Db();BCj.P();if(b.cE!==null)Hi(BCj,b.cE);if(b.dm!==null)Hi(BCj,b.dm);return BCj;}
function V_(b){var c;Db();c=X;if(b.cE!==null)c=B1(c,EY(b.cE));if(b.dm!==null)c=B1(c,EY(b.dm));return c;}
function AFF(b,c){var d,e,f,g,h,i,j,k;Db();d=Mx(b);e=B(59);f=EY(d);g=Ku(b.cZ.ce.fp());if(Fd(g,N(1)))e=(((H()).a(e)).a(B(737))).b();if(X_(g,N(6)))e=(((H()).a(e)).a(B(738))).b();if(Fd(g,N(256)))e=(((H()).a(e)).a(B(739))).b();if(Fd(g,N(128)))e=(((H()).a(e)).a(B(740))).b();if(Fd(g,N(8)))e=(((H()).a(e)).a(B(741))).b();if(!(!Fd(g,N(8))&&!Fd(g,N(384)))&&b.cE!==null){h=(((H()).a(e)).a(B(742))).b();h=(((H()).a(h)).a(B(743))).b();h=(((((H()).a(h)).a(B(744))).h(c.m0)).a(B(264))).b();h=(((((H()).a(h)).a(B(745))).h(c.mF)).a(B(264))).b();e
=(((((H()).a(h)).a(B(746))).h(c.n3)).a(B(264))).b();Ct();if(CM(d,BBs))e=(((H()).a(e)).a(B(747))).b();if(b.cE.je!==null)e=(((H()).a(e)).a(B(748))).b();AIr();if(CM(d,Byc))e=(((H()).a(e)).a(B(749))).b();}i=C6(b.cZ.ce.fp());j=0;while(j<i){k=CE(b.cZ.ce.fp(),j);if(k.eS==64)e=(((((H()).a(e)).a(B(750))).h(k.kf)).a(B(751))).b();else if(k.eS==16)e=(((((H()).a(e)).a(B(752))).h(k.kf)).a(B(751))).b();j=j+1|0;}H6();if(Bb(Bx(f,BzY),BzY))e=(((H()).a(e)).a(B(753))).b();Cf();if(Bb(Bx(f,Bym),Bym)){h=(((H()).a(e)).a(B(754))).b();e
=(((H()).a(h)).a(B(755))).b();}if(Bb(Bx(f,Byp),Byp)){h=(((H()).a(e)).a(B(756))).b();e=(((H()).a(h)).a(B(757))).b();}if(Bb(Bx(f,Bx7),Bx7)){h=(((H()).a(e)).a(B(758))).b();e=(((H()).a(h)).a(B(759))).b();}if(Bb(Bx(f,Bx1),Bx1)){h=(((H()).a(e)).a(B(760))).b();e=(((H()).a(h)).a(B(761))).b();}if(Bb(Bx(f,Bx6),Bx6)){h=(((H()).a(e)).a(B(762))).b();e=(((H()).a(h)).a(B(763))).b();}if(Bb(Bx(f,Bya),Bya)){h=(((H()).a(e)).a(B(764))).b();e=(((H()).a(h)).a(B(765))).b();}Ct();if(Bb(Bx(f,Byl),Byl))e=(((H()).a(e)).a(B(766))).b();if
(Bb(Bx(f,Byv),Byv))e=(((H()).a(e)).a(B(767))).b();if(Bb(Bx(f,Byx),Byx))e=(((H()).a(e)).a(B(768))).b();if(Bb(Bx(f,Bx8),Bx8))e=(((H()).a(e)).a(B(769))).b();FR();if(Bb(Bx(f,Bxv),Bxv))e=(((H()).a(e)).a(B(770))).b();if(Bb(Bx(f,Bxw),Bxw))e=(((H()).a(e)).a(B(771))).b();if(b.dX!==null&&c.hc>0)e=(((((H()).a(e)).a(B(772))).h(c.hc)).a(B(264))).b();return e;}
function BaK(a,b){var c,d,e,f;if(b.dX!==null&&b.dX.data.length>a.hE.hc)return 0;a:{c=V_(b);if(Bb(a.lD,B1(c,BCi))){d=a.Fa;e=b.cZ.ce;if(Bb(d,Qn(e.fp()))&&(b.cE===null?0:1)==a.fH){f=1;break a;}}f=0;}return f;}
function Bdy(a,b){return b instanceof DG&&a.T4(b)?1:0;}
function A0Y(a,b){return b!==a?0:1;}
function AOa(a,b,c){var d,e,f,g,h,i,j;ADn(a,b,c);d=a.cG.data;e=d.length;f=0;while(f<e){g=d[f];g.zc(0.0,0.0,0.0,0.0,(-1.0),0.0);f=f+1|0;}d=a.ch.data;e=d.length;f=0;while(f<e){h=d[f];h.KQ(0.0,0.0,0.0,0.0,0.0,0.0,0.0);f=f+1|0;}d=a.cb.data;e=d.length;f=0;while(f<e){i=d[f];i.TS(0.0,0.0,0.0,0.0,0.0,0.0,0.0,(-1.0),0.0,0.0,1.0,0.0);f=f+1|0;}a.he=0;if(JT(a,a.wp)){e=a.wp;j=a.xc+Btr.Ha();a.xc=j;Gp(a,e,j);}}
function Bid(a,b,c){H6();if(!CM(c,BzY))a.c9.yI(0,770,771);a.KK(c);if(a.fH)a.MX(b,c);AAs(a,b,c);}
function ALo(a){ABU(a);}
function A_p(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a.hE.v7!=(-1))c=a.hE.v7;else{Db();c=BCg;}if(a.hE.qR!=(-1))d=a.hE.qR;else{Db();d=BCh;}e=0.0;f=1.0;g=1;h=L4(b);while(h.bG()){i=h.bD();j=i.dp;if(Y_(j)){k=a.c9;l=i;k.yI(1,l.Nm,l.Od);Gp(a,a.EN,l.Ko);}else{AN3();if(Bb(Bx(j,BxN),BxN))c=i.KF;else{FR();if(Bb(Bx(j,Bxw),Bxw))Gp(a,a.GS,i.mX);else{AQU();if(Bb(Bx(j,BA$),BA$)){m=i;d=m.P9;e=m.ND;f=m.LL;g=m.SY;}else if(!a.hE.sU)G(W((((H()).a(B(773))).a(i.b())).b()));}}}}a.c9.KA(c);a.c9.Pr(d,e,f);a.c9.QE(g);}
function Bac(a,b,c){var d,e,f,g,h,i,j,k,l;d=b.cE;Lr();e=Jc(c,E(J0),BxE);f=e!==null?e.hF:null;BaE();g=Jc(c,E(IQ),BxF);h=g!==null?g.F6:null;BlY();i=Jc(c,E(IA),BBY);j=i!==null?i.Ue:null;a:{if(a.kd>=0){k=0;b:while(true){if(k>=a.cG.data.length)break a;c:{if(f!==null&&k<f.j){if(a.he&&a.cG.data[k].Gx(f.o(k)))break c;a.cG.data[k].L1(f.o(k));}else{if(a.he&&a.cG.data[k].bs.v===0.0&&a.cG.data[k].bs.u===0.0&&a.cG.data[k].bs.w===0.0)break c;a.cG.data[k].bs.gT(0.0,0.0,0.0,1.0);}l=a.kd+Cp(k,a.mI)|0;a.bp.jF(l+a.yT|0,a.cG.data[k].bs.v,
a.cG.data[k].bs.u,a.cG.data[k].bs.w);a.bp.jF(l+a.w2|0,a.cG.data[k].fs.m,a.cG.data[k].fs.n,a.cG.data[k].fs.p);if(a.mI<=0)break b;}k=k+1|0;}}}d:{if(a.hI>=0){k=0;e:while(true){if(k>=a.ch.data.length)break d;f:{if(h!==null&&k<h.j){if(a.he&&a.ch.data[k].H6(h.o(k)))break f;a.ch.data[k].OK(h.o(k));}else{if(a.he&&a.ch.data[k].dM===0.0)break f;a.ch.data[k].dM=0.0;}l=a.hI+Cp(k,a.lI)|0;a.bp.jF(l+a.xH|0,a.ch.data[k].bs.v*a.ch.data[k].dM,a.ch.data[k].bs.u*a.ch.data[k].dM,a.ch.data[k].bs.w*a.ch.data[k].dM);a.bp.jF(l+a.Ho
|0,a.ch.data[k].eR.m,a.ch.data[k].eR.n,a.ch.data[k].eR.p);if(a.uo>=0)a.bp.kC(l+a.uo|0,a.ch.data[k].dM);if(a.lI<=0)break e;}k=k+1|0;}}}g:{if(a.e_>=0){k=0;h:while(true){if(k>=a.cb.data.length)break g;i:{if(j!==null&&k<j.j){if(a.he&&a.cb.data[k].KR(j.o(k)))break i;a.cb.data[k].M6(j.o(k));}else{if(a.he&&a.cb.data[k].ev===0.0)break i;a.cb.data[k].ev=0.0;}l=a.e_+Cp(k,a.l_)|0;a.bp.jF(l+a.wS|0,a.cb.data[k].bs.v*a.cb.data[k].ev,a.cb.data[k].bs.u*a.cb.data[k].ev,a.cb.data[k].bs.w*a.cb.data[k].ev);a.bp.tn(l+a.Bu|0,a.cb.data[k].hY);a.bp.tn(l
+a.GG|0,a.cb.data[k].iv);a.bp.kC(l+a.AL|0,a.cb.data[k].jj);a.bp.kC(l+a.Ds|0,a.cb.data[k].jD);if(a.wt>=0)a.bp.kC(l+a.wt|0,a.cb.data[k].ev);if(a.l_<=0)break h;}k=k+1|0;}}}Ct();if(CM(c,BBs))Gx(a,a.GA,(BN(c,BBs)).d_);if(d!==null&&d.je!==null){EC(a,a.wZ,d.je.a1_());AFx(a,a.Aq,d.je.Ug());Gp(a,a.Gf,1.0/(2.0*(d.je.Ug()).e$.bk()));}a.he=1;}
function AYv(){var b,c;BCd=null;BCe=null;H6();b=BzY;Cf();c=B1(b,Bym);Ct();c=B1(B1(c,Byl),Byv);FR();BCf=B1(c,Bxv);BCg=1029;BCh=515;AN3();c=BxN;AQU();BCi=B1(c,BA$);BCj=A1I();}
function ME(){var a=this;Eq.call(a);a.hY=null;a.iv=null;a.ev=0.0;a.jj=0.0;a.jD=0.0;}
function Bjm(){var a=new ME();Bdr(a);return a;}
function Bdr(a){Jt(a);a.hY=Q();a.iv=Q();}
function A_o(a,b){return a.JC(b.bs,b.hY,b.iv,b.ev,b.jj,b.jD);}
function Bcm(a,b,c,d,e,f,g){if(b!==null)a.bs.e5(b);if(c!==null)a.hY.M(c);if(d!==null)(a.iv.M(d)).bV();a.ev=e;a.jj=f;a.jD=g;return a;}
function BhM(a,b,c,d,e,f,g,h,i,j,k,l,m){a.bs.gT(b,c,d,1.0);a.hY.L(e,f,g);(a.iv.L(h,i,j)).bV();a.ev=k;a.jj=l;a.jD=m;return a;}
function ASY(a,b){var c,d,e,f,g;a:{b:{if(b!==null){if(b===a)break b;if(a.bs.C(b.bs)&&a.hY.C(b.hY)){c=a.iv;d=b.iv;if(c.C(d)&&DN(a.ev,b.ev)&&DN(a.jj,b.jj)){e=a.jD;f=b.jD;if(DN(e,f))break b;}}}g=0;break a;}g=1;}return g;}
var PI=D(CH);
var BCU=null;function BCV(){BCV=L(PI);A0s();}
function A0s(){BCU=BB();}
function ACJ(){C.call(this);this.HD=0;}
function BpZ(){var a=new ACJ();APg(a);return a;}
function APg(a){J(a);a.HD=2;}
function A_P(a,b,c){if(a.HD>=1)(X4()).fI(((((H()).a(b)).a(B(9))).a(c)).b());}
var Om=D(DP);
function Blp(){var a=new Om();Bgv(a);return a;}
function Bgv(a){Li(a);}
var Yk=D(EL);
var MZ=D();
var AEv=D(CF);
function Vh(){C.call(this);this.LK=null;}
function BmL(a){var b=new Vh();A4s(b,a);return b;}
function A4s(a,b){a.LK=b;J(a);}
function A1D(a){(Dt()).ko();}
function ASG(a){a.q$();}
var Vl=D(BL);
var Sn=D(0);
var AF$=D(Fx);
function AFI(){var a=this;C.call(a);a.h7=null;a.dc=0;a.Iz=0;}
function A3o(){var a=new AFI();A0g(a);return a;}
function BCW(a,b){var c=new AFI();AHg(c,a,b);return c;}
function A0g(a){AHg(a,1,16);}
function AHg(a,b,c){J(a);a.Iz=b;a.h7=O_(c);}
function A_$(a,b){var c,d,e;c=a.h7;d=c.data;if(a.dc==d.length)c=a.Eo(Bj(8,a.dc*1.75|0));d=c.data;e=a.dc;a.dc=e+1|0;d[e]=b;}
function A0C(a){a.dc=0;}
function A4$(a,b){var c;if(b<0)G(Z((((H()).a(B(319))).h(b)).b()));c=a.dc+b|0;if(c>a.h7.data.length)a.Eo(Bj(Bj(8,c),a.dc*1.75|0));return a.h7;}
function A7n(a,b){var c,d,e;c=O_(b);d=c.data;e=a.h7;Bc(e,0,c,0,Bw(a.dc,d.length));a.h7=c;return c;}
var XU=D();
function CX(b){return $rt_floatToIntBits(b);}
function Cv(b){return QV(b);}
function A9g(b){var c,d;c=QV(b);d=c|((c>>>24)*1.003937005996704|0)<<24;return d;}
function L1(b){return $rt_intBitsToFloat(b&(-16777217));}
var AEz=D();
function Ec(){Bd.call(this);this.SA=null;}
var Bu7=null;var Bu9=null;var Bu6=null;var Bu8=null;var Bu$=null;var BCX=null;function JD(){JD=L(Ec);AW_();}
function Kq(a,b,c){var d=new Ec();AIX(d,a,b,c);return d;}
function Or(){JD();return BCX.e6();}
function AIX(a,b,c,d){JD();B4(a,b,c);a.SA=d;}
function AW_(){Bu7=Kq(B(774),0,B(265));Bu9=Kq(B(775),1,B(267));Bu6=Kq(B(776),2,B(777));Bu8=Kq(B(778),3,B(266));Bu$=Kq(B(779),4,B(93));BCX=I(Ec,[Bu7,Bu9,Bu6,Bu8,Bu$]);}
function AFK(){Bz.call(this);this.lh=0;}
function BkI(a){var b=new AFK();A9O(b,a);return b;}
function A9O(a,b){CJ(a);a.lh=b;}
function AV5(a,b,c,d){var e;e=!d.jZ()?c.k()-b|0:d.O()-b|0;if(e<=0){d.bC(a.lh,0);return a.l.e(b,c,d);}if(c.g(b)!=10)return (-1);d.bC(a.lh,1);return a.l.e(b+1|0,c,d);}
function A8L(a,b){var c;c=!b.eJ(a.lh)?0:1;b.bC(a.lh,(-1));return c;}
function AK8(a){return B(780);}
function DU(){var a=this;BV.call(a);a.ee=null;a.e3=0.0;a.e2=0.0;a.fq=0.0;a.fr=0.0;a.pm=0;}
var Bym=X;var Byp=X;var BCY=X;var Bx7=X;var Bya=X;var Bx1=X;var Bx6=X;var BCZ=X;function Cf(){Cf=L(DU);ARB();}
function BC0(a){var b=new DU();Ls(b,a);return b;}
function BC1(a,b){var c=new DU();Md(c,a,b);return c;}
function BC2(a,b,c,d,e,f,g){var h=new DU();QO(h,a,b,c,d,e,f,g);return h;}
function BkB(a,b){var c=new DU();AFj(c,a,b);return c;}
function Bou(a){var b=new DU();AJU(b,a);return b;}
function VQ(b){Cf();return Bb(Bx(b,BCZ),X)?0:1;}
function AF2(b){Cf();return BkB(Bym,b);}
function Ls(a,b){Cf();Ge(a,b);a.e3=0.0;a.e2=0.0;a.fq=1.0;a.fr=1.0;a.pm=0;if(VQ(b)){a.ee=BdY();return;}G(W(B(657)));}
function Md(a,b,c){Cf();Ls(a,b);a.ee.MO(c);}
function QO(a,b,c,d,e,f,g,h){Cf();Md(a,b,c);a.e3=d;a.e2=e;a.fq=f;a.fr=g;a.pm=h;}
function AFj(a,b,c){Cf();Ls(a,b);a.ee.e$=c;}
function AJU(a,b){Cf();QO(a,b.dp,b.ee,b.e3,b.e2,b.fq,b.fr,b.pm);}
function Bec(a){return Bou(a);}
function A2t(a){var b,c;b=Hd(a);c=(991*b|0)+a.ee.bl()|0;c=(991*c|0)+Cv(a.e3)|0;c=(991*c|0)+Cv(a.e2)|0;c=(991*c|0)+Cv(a.fq)|0;c=(991*c|0)+Cv(a.fr)|0;c=(991*c|0)+a.pm|0;return c;}
function ARB(){Bym=B2(B(781));Byp=B2(B(782));BCY=B2(B(783));Bx7=B2(B(784));Bya=B2(B(785));Bx1=B2(B(786));Bx6=B2(B(787));BCZ=B1(B1(B1(B1(B1(B1(Bym,Byp),BCY),Bx7),Bya),Bx1),Bx6);}
var Bo=D();
var BCn=null;var BCo=null;var BCp=null;var BCq=null;var BCr=null;var BCs=null;var BCt=null;var BCu=null;var BCv=null;var BCw=null;var BCx=null;var BCy=null;var BCz=null;var BCA=null;var BCB=null;var BCC=null;var BCD=null;var BCE=null;var BCF=null;var BCG=null;var BCH=null;var BCI=null;var BCJ=null;var BCK=null;var BCL=null;var BCM=null;var BCN=null;var BCO=null;var BCP=null;var BCQ=null;var BCR=null;var BCS=null;var BC3=null;var BC4=null;var BC5=null;var BCT=null;function Bpz(){Bpz=L(Bo);A4G();}
function A4G(){var b;BCn=Br(B(361));BCo=Br(B(788));BCp=Br(B(789));BCq=Br(B(790));BCr=Br(B(791));BCs=Br(B(792));BCt=Br(B(793));BCu=Br(B(794));BCv=Br(B(795));BCw=Br(B(796));BCx=Br(B(797));BCy=Br(B(798));b=new FX;FR();Ii(b,B(799),Bxv);BCz=b;b=new FX;H6();Ii(b,B(800),BzY);BCA=b;b=new FX;Ct();Ii(b,B(801),Byl);BCB=b;b=new FX;Cf();Ii(b,B(802),Bym);BCC=b;BCD=C5(B(803),Bym);BCE=C5(B(804),Byv);BCF=C5(B(805),Byp);BCG=C5(B(806),Byp);BCH=C5(B(807),Byx);BCI=C5(B(808),Bx1);BCJ=C5(B(809),Bx1);BCK=C5(B(810),Bx8);BCL=C5(B(811),
Bx6);BCM=C5(B(812),Bx6);BCN=C5(B(813),Bx7);BCO=C5(B(814),Bx7);BCP=C5(B(815),Bya);BCQ=C5(B(816),Bya);BCR=Br(B(817));BCS=Br(B(818));BC3=Br(B(819));BC4=Br(B(820));BC5=Br(B(821));BCT=Br(B(822));}
var AFg=D(DX);
var TQ=D(CF);
function BkG(){var a=new TQ();A8z(a);return a;}
function A8z(a){Le(a);}
var AB5=D(Cx);
function BmC(){var a=new AB5();BhZ(a);return a;}
function BhZ(a){Et(a);}
function AY_(a,b,c,d,e){EC(b,c,b.c6.jY);}
var AB2=D(Cx);
function Bjo(){var a=new AB2();A3c(a);return a;}
function A3c(a){Et(a);}
function AWf(a,b,c,d,e){EC(b,c,b.c6.ej);}
var AB4=D(Cx);
function BnT(){var a=new AB4();AKP(a);return a;}
function AKP(a){Et(a);}
function Bf5(a,b,c,d,e){EC(b,c,b.c6.hM);}
var Sl=D();
var AB0=D(Cx);
function BqK(){var a=new AB0();AZ5(a);return a;}
function AZ5(a){Et(a);}
function Bbc(a,b,c,d,e){NB(b,c,b.c6.dh);}
var AB1=D(Cx);
function BnK(){var a=new AB1();AMH(a);return a;}
function AMH(a){Et(a);}
function ALy(a,b,c,d,e){Er(b,c,b.c6.cy.m,b.c6.cy.n,b.c6.cy.p,1.188099980354309/(b.c6.kb*b.c6.kb));}
var ABY=D(Cx);
function Bkp(){var a=new ABY();A9G(a);return a;}
function A9G(a){Et(a);}
function Bdx(a,b,c,d,e){ABN(b,c,b.c6.lF,b.c6.kb);}
function X2(){var a=this;C.call(a);a.kT=0;a.gb=0;a.hR=null;a.gr=null;a.G5=0;a.lM=0;a.s4=0;a.u_=0;a.K4=null;a.hQ=0;}
function Bmv(a,b){var c=new X2();BhV(c,a,b);return c;}
function BC6(a,b,c){var d=new X2();AD$(d,a,b,c);return d;}
function BhV(a,b,c){AD$(a,b,c,(-1));}
function AD$(a,b,c,d){var e;J(a);a.s4=0;a.u_=0;a.K4=BdY();a.hQ=0;e=Bw(A_D(),32);if(d<0)d=e-c|0;if(c>=0&&d>=0&&(c+d|0)<=e){a.G5=b;a.kT=c;a.gb=d;a.hR=Y(Gq,d);a.gr=b!=1?null:Be(d);return;}G(W(B(823)));}
function A_D(){var b;b=Gn(16);Btu.Sr(34930,b);return b.b_(0);}
function A85(a){var b;b=0;while(b<a.gb){a.hR.data[b]=null;if(a.gr!==null)a.gr.data[b]=b;b=b+1|0;}}
function ARr(a){Btu.sx(33984);}
function ALY(a,b){return Wf(a,b,0);}
function Wf(a,b,c){var d,e;a:{d=b.e$;a.lM=0;switch(a.G5){case 0:e=a.kT+XC(a,d)|0;break a;case 1:e=a.kT+ZR(a,d)|0;break a;default:}return (-1);}if(!a.lM)a.u_=a.u_+1|0;else{a.s4=a.s4+1|0;if(c)d.sP(e);else Btu.sx(33984+e|0);}d.O6(b.l5,b.m2);d.UN(b.nj,b.mg);return e;}
function XC(a,b){var c,d;c=0;while(true){if(c>=a.gb){a.hQ=(a.hQ+1|0)%a.gb|0;a.hR.data[a.hQ]=b;b.sP(a.kT+a.hQ|0);return a.hQ;}d=(a.hQ+c|0)%a.gb|0;if(a.hR.data[d]===b)break;c=c+1|0;}a.lM=1;return d;}
function ZR(a,b){var c,d;c=0;a:{while(true){if(c>=a.gb)break a;d=a.gr.data[c];if(a.hR.data[d]===b){a.lM=1;break a;}if(a.hR.data[d]===null)break;c=c+1|0;}}if(c>=a.gb)c=a.gb-1|0;d=a.gr.data[c];while(c>0){a.gr.data[c]=a.gr.data[c-1|0];c=c+(-1)|0;}a.gr.data[0]=d;if(!a.lM){a.hR.data[d]=b;b.sP(a.kT+d|0);}return d;}
var ABZ=D(Cx);
function Bp6(){var a=new ABZ();A0b(a);return a;}
function A0b(a){Et(a);}
function A0V(a,b,c,d,e){NB(b,c,b.c6.dF);}
function ABW(){Ba.call(this);this.Ap=null;}
function Blx(){var a=new ABW();BbL(a);return a;}
function BbL(a){BZ(a);a.Ap=BH();}
function AMN(a,b,c,d,e){EC(b,c,(a.Ap.b6(b.c6.hM)).hW(d.dN));}
var ABX=D(Ba);
function BlO(){var a=new ABX();ARF(a);return a;}
function ARF(a){BZ(a);}
function APb(a,b,c,d,e){EC(b,c,d.dN);}
var VB=D(BL);
var ADi=D(U);
function BnC(){var a=new ADi();A1l(a);return a;}
function A1l(a){Bv(a);}
function A0L(a){return ((Dc()).bK(65279,65279)).bK(65520,65533);}
var UF=D();
var QT=D();
function Z1(){var a=this;C.call(a);a.z=null;a.dU=null;a.sg=0;a.gX=null;a.uu=0;a.vX=null;a.q3=0;a.Tq=null;a.Pd=0;a.Ir=null;a.Vd=0;a.sq=null;a.t_=0;a.pt=null;a.ue=0;a.vv=0;a.k5=null;a.RD=null;a.lG=null;a.my=null;}
function BnY(a){var b=new Z1();Ba1(b,a);return b;}
function Ba1(a,b){J(a);a.dU=Dq();a.sg=1;a.gX=Dq();a.uu=1;a.vX=Dq();a.q3=1;a.Tq=Dq();a.Pd=1;a.Ir=Dq();a.Vd=1;a.sq=Dq();a.t_=1;a.pt=Dq();a.ue=1;a.vv=0;a.z=b;a.k5=(Ev()).Hj(40000);a.lG=(Ev()).Fs(12000);a.RD=(Ev()).Pf(12000);a.my=(Ev()).CH(240000);a.z.pixelStorei(37441,0);}
function Zk(a,b){if(Bf(b)>a.k5.length)a.k5=(Ev()).Hj(Bf(b));}
function AJm(a,b){if(Bf(b)>a.lG.length)a.lG=(Ev()).Fs(Bf(b));}
function AIt(a,b){if(Bf(b)>a.my.length)a.my=(Ev()).CH(Bf(b));}
function A9B(a,b){var c,d,e,f,g;Zk(a,b);c=Ck(b);d=0;while(c<BG(b)){e=a.k5;f=b.oO(c);e[d]=f;c=c+1|0;d=d+1|0;}e=a.k5;g=Bf(b);return e.subarray(0,g);}
function A11(a,b){var c,d,e,f,g;AJm(a,b);c=Ck(b);d=0;while(c<BG(b)){e=a.lG;f=b.Nh(c);e[d]=f;c=c+1|0;d=d+1|0;}e=a.lG;g=Bf(b);return e.subarray(0,g);}
function AUR(a,b){var c,d,e,f,g;AIt(a,b);c=Ck(b);d=0;while(c<BG(b)){e=a.my;f=b.AX(c);e[d]=f;c=c+1|0;d=d+1|0;}e=a.my;g=Bf(b);return e.subarray(0,g);}
function AC7(a,b,c){var d,e;d=a.pt.Y(Bl(b));if(d===null){d=Dq();a.pt.A(Bl(b),d);}e=a.ue;a.ue=e+1|0;d.A(Bl(e),c);return e;}
function En(a,b){return (a.pt.Y(Bl(a.vv))).Y(Bl(b));}
function Y6(a,b){var c;c=a.uu;a.uu=c+1|0;a.gX.A(Bl(c),b);return c;}
function Se(a,b){var c;c=a.sg;a.sg=c+1|0;a.dU.A(Bl(c),b);return c;}
function XE(a,b){var c;c=a.q3;a.q3=c+1|0;a.vX.A(Bl(c),b);return c;}
function UD(a,b){var c;c=a.t_;a.t_=c+1|0;a.sq.A(Bl(c),b);return c;}
function BcR(a,b){a.z.activeTexture(b);}
function AS0(a,b,c){var d,e;d=a.z;e=a.sq.Y(Bl(c));d.bindTexture(b,e);}
function ARR(a,b,c){a.z.blendFunc(b,c);}
function AVM(a,b){a.z.clear(b);}
function Bh0(a,b,c,d,e){a.z.clearColor(b,c,d,e);}
function AL9(a,b){a.z.cullFace(b);}
function BhI(a,b){a.z.depthFunc(b);}
function A9n(a,b){a.z.depthMask(!!b);}
function A5P(a,b,c){a.z.depthRange(b,c);}
function A_0(a,b){a.z.disable(b);}
function BiL(a,b,c,d){a.z.drawArrays(b,c,d);}
function Bc2(a,b,c,d,e){var f,g;f=a.z;g=Ck(e);f.drawElements(b,c,d,g);}
function A19(a,b){a.z.enable(b);}
function A9r(a){var b;b=a.z.createTexture();return UD(a,b);}
function A72(a,b,c){var d;a:{if(b==34016)break a;if(b==3413)break a;if(b==32970)break a;if(b==32968)break a;if(b==34877)break a;if(b==32777)break a;if(b==32971)break a;if(b==32969)break a;if(b==3412)break a;if(b==2885)break a;if(b==3414)break a;if(b==2932)break a;if(b==2886)break a;if(b==33170)break a;if(b==3411)break a;if(b==35739)break a;if(b==35738)break a;if(b==35661)break a;if(b==34076)break a;if(b==36349)break a;if(b==34024)break a;if(b==34930)break a;if(b==3379)break a;if(b==36348)break a;if(b==34921)break a;if
(b==35660)break a;if(b==36347)break a;if(b==34466)break a;if(b==3333)break a;if(b==3410)break a;if(b==32936)break a;if(b==32937)break a;if(b==34817)break a;if(b==34816)break a;if(b==34818)break a;if(b==34819)break a;if(b==36003)break a;if(b==36004)break a;if(b==36005)break a;if(b==3415)break a;if(b==2961)break a;if(b==2964)break a;if(b==2962)break a;if(b==2965)break a;if(b==2966)break a;if(b==2967)break a;if(b==2963)break a;if(b==2968)break a;if(b==3408)break a;if(b==3317)break a;G(W(B(824)));}d=a.z.getParameter(b);c.uk(0,
d);}
function A2y(a,b,c){a.z.pixelStorei(b,c);}
function ARf(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q;if(j===null){k=a.z;l=null;k.texImage2D(b,c,d,e,f,g,h,i,l);}else if(BG(j)>4){m=!(j instanceof Ew)?a.KC(j):a.vB(j);a.z.texImage2D(b,c,d,e,f,g,h,i,m);}else{n=j.Th(0);GI();o=BzN.Y(Bl(n));if(o.U8()){p=a.z;q=o.Sb();p.texImage2D(b,c,d,h,i,q);}else if(!o.ME()){p=a.z;q=o.tT();p.texImage2D(b,c,d,h,i,q);}else{p=a.z;q=o.Mc();p.texImage2D(b,c,d,h,i,q);}}}
function BdA(a,b,c,d){a.z.texParameterf(b,c,d);}
function A6r(a,b,c,d,e){a.z.viewport(b,c,d,e);}
function ATc(a,b,c){var d,e;d=a.dU.Y(Bl(b));e=a.gX.Y(Bl(c));a.z.attachShader(d,e);}
function AWm(a,b,c){var d,e;d=a.z;e=a.vX.Y(Bl(c));d.bindBuffer(b,e);}
function A8p(a,b,c,d,e){a.z.blendFuncSeparate(b,c,d,e);}
function A7L(a,b,c,d,e){var f,g,h,i;if(d instanceof Ew){f=d;g=a.vB(f);a.z.bufferData(b,g,e);}else{if(!(d instanceof HY))G(W(B(825)));h=a.z;i=a.NZ(d);h.bufferData(b,i,e);}}
function AUG(a,b,c,d,e){var f,g;if(e instanceof Ew){f=a.z;g=a.vB(e);f.bufferSubData(b,c,g);}}
function AP7(a,b){var c;c=a.gX.Y(Bl(b));a.z.compileShader(c);}
function AOc(a){var b;b=a.z.createProgram();return Se(a,b);}
function A97(a,b){var c;c=a.z.createShader(b);return Y6(a,c);}
function AYj(a,b){a.z.disableVertexAttribArray(b);}
function BdO(a,b,c,d,e){a.z.drawElements(b,c,d,e);}
function AZE(a,b){a.z.enableVertexAttribArray(b);}
function A76(a){var b;b=a.z.createBuffer();return XE(a,b);}
function Bc1(a,b){a.z.generateMipmap(b);}
function AVR(a,b,c,d,e){var f,g,h;f=a.z;g=a.dU.Y(Bl(b));h=f.getActiveAttrib(g,c);d.gE(h.size);e.gE(h.type);return $rt_str(h.name);}
function AKX(a,b,c,d,e){var f,g,h;f=a.z;g=a.dU.Y(Bl(b));h=f.getActiveUniform(g,c);d.gE(h.size);e.gE(h.type);return $rt_str(h.name);}
function AQq(a,b,c){var d;d=a.dU.Y(Bl(b));return a.z.getAttribLocation(d,$rt_ustr(c));}
function ATz(a,b,c){if(b!=2931&&b!=2849&&b!=32824&&b!=10752&&b!=32938)G(W(B(826)));c.Nx(0,a.z.getParameter(b));}
function ARn(a,b,c,d){var e,f,g,h,i;if(c!=35712&&c!=35714&&c!=35715){e=a.z;f=a.dU.Y(Bl(b));d.gE(e.getProgramParameter(f,c));}else{g=a.z;h=a.dU.Y(Bl(b));i=g.getProgramParameter(h,c)?1:0;d.gE(!i?0:1);}}
function A7s(a,b){var c,d;c=a.z;d=a.dU.Y(Bl(b));return $rt_str(c.getProgramInfoLog(d));}
function BcZ(a,b,c,d){var e,f,g,h;if(c!=35713&&c!=35712){e=a.z;f=a.gX.Y(Bl(b));g=e.getShaderParameter(f,c);d.gE(g);}else{h=a.z;e=a.gX.Y(Bl(b));g=h.getShaderParameter(e,c)?1:0;d.gE(!g?0:1);}}
function Bip(a,b){var c,d;c=a.z;d=a.gX.Y(Bl(b));return $rt_str(c.getShaderInfoLog(d));}
function AOn(a,b,c){var d,e,f;d=a.z;e=a.dU.Y(Bl(b));f=d.getUniformLocation(e,$rt_ustr(c));if(f!==null)return AC7(a,b,f);return (-1);}
function A2J(a,b){var c,d;c=a.z;d=a.dU.Y(Bl(b));c.linkProgram(d);}
function A4b(a,b,c){var d,e;d=a.z;e=a.gX.Y(Bl(b));d.shaderSource(e,$rt_ustr(c));}
function AV8(a,b,c,d){var e,f;e=a.z;f=d;e.texParameterf(b,c,f);}
function A4u(a,b,c){var d;d=En(a,b);a.z.uniform1f(d,c);}
function AWD(a,b,c){var d;d=En(a,b);a.z.uniform1i(d,c);}
function ATN(a,b,c,d){var e;e=En(a,b);a.z.uniform2f(e,c,d);}
function A8J(a,b,c,d,e){var f;f=En(a,b);a.z.uniform3f(f,c,d,e);}
function A6H(a,b,c,d,e){var f;f=En(a,b);a.z.uniform3fv(f,PH(d));}
function ALl(a,b,c,d,e,f){var g;g=En(a,b);a.z.uniform4f(g,c,d,e,f);}
function AYS(a,b,c,d,e,f){var g;g=En(a,b);a.z.uniformMatrix3fv(g,!!d,PH(e));}
function A9y(a,b,c,d,e,f){var g;g=En(a,b);a.z.uniformMatrix4fv(g,!!d,PH(e));}
function A$F(a,b){var c,d;a.vv=b;c=a.z;d=a.dU.Y(Bl(b));c.useProgram(d);}
function Bhl(a,b,c,d,e,f,g){a.z.vertexAttribPointer(b,c,d,!!e,f,g);}
$rt_packages([-1,"com",0,"badlogic",1,"gdx",2,"utils",3,"reflect",2,"scenes",5,"scene2d",6,"ui",2,"graphics",8,"g2d",-1,"java",10,"util",11,"regex",10,"nio",13,"charset",10,"io",10,"lang"]);
$rt_metadata([C,"Object",16,0,[],0,3,0,0,["Wm",Bq3(FH),"YH",Bq3(Co),"bl",Bq3(O1),"C",Bq4(AUx),"b",Bq3(S2),"Zo",Bq3(J9),"e6",Bq3(ATv)],U,0,C,[],1,0,0,0,["d",Bq3(Bv),"JJ",Bq4(Bd_)],VD,0,U,[],0,0,0,0,["d",Bq3(BeI),"Z",Bq3(A6$)],TJ,0,U,[],0,0,0,0,["d",Bq3(Bhs),"Z",Bq3(AUD)],EQ,0,C,[],0,3,0,0,0,K3,0,C,[],3,3,0,0,0,H4,0,EQ,[K3],0,3,0,Brg,0,ID,0,C,[],3,3,0,0,0,Cn,0,H4,[ID],0,3,0,0,0,CC,0,Cn,[],0,3,0,Brp,0,R,0,C,[],1,3,0,Bmr,["d",Bq3(B6)],G0,0,R,[],0,3,0,0,["U",Bq4(Mv)],AA_,0,C,[],0,3,0,0,["VL",Bq5(AZe),"uL",Bq3(APm),
"d2",Bq4(Bhz),"OE",Bq3(AQL),"eu",Bq4(Be3),"eB",Bq4(A8W),"d6",Bq4(Bjf)],Vd,0,C,[],0,3,0,0,0,ABB,0,C,[],4,3,0,0,0,JU,0,C,[],3,3,0,0,0,EE,0,C,[JU],0,3,0,0,0,BI,0,C,[],3,3,0,0,0,EF,0,C,[BI],1,3,0,0,["d",Bq3(Q6)],Cm,0,C,[],3,3,0,0,0,EG,0,EF,[Cm],0,3,0,Dl,["U",Bq4(IS),"lR",Bq3(A4q),"b",Bq3(A0H),"bl",Bq3(A22),"C",Bq4(Bia)],NO,0,C,[],0,3,0,0,0,B_,0,C,[],3,3,0,0,0,D$,0,C,[],3,3,0,0,0,GE,0,C,[],3,3,0,0,0,ET,0,C,[B_,D$,GE],1,3,0,0,0,Ci,0,ET,[],1,3,0,0,0,GW,0,Ci,[],1,3,0,0,0,Jn,0,C,[],1,3,0,0,["a2D",Bq7(AJf),"vH",Bq6(AD4),
"X1",Bq4(M0),"ws",Bq4(A1x),"Xo",Bq4(NY),"rI",Bq4(A$n),"Y0",Bq6(Kk),"H4",Bq4(ADh),"XV",Bq4(LD),"OQ",Bq4(Baw),"a1X",Bq3(RB),"v4",Bq3(AWh)],DQ,0,Jn,[],1,3,0,0,["vH",Bq6(HX),"S9",Bq5(AMd)],ACM,0,DQ,[],0,3,0,0,["L8",Bq6(Bc6),"nv",function(b,c,d,e,f,g,h){return Bed(this,b,c,d,e,f,g,h);}],BF,0,C,[B_],1,3,0,0,["d",Bq3(BS),"c1",Bq5(AXW),"lt",Bq4(ARb),"C",Bq4(AKf),"bl",Bq3(Bcj),"b2",Bq3(A5k),"iU",Bq3(ASp),"b",Bq3(A3V)],FM,0,BF,[],0,3,0,Mn,["Qa",Bq3(BcC),"U",Bq4(O0),"Lu",Bq4(AWR),"bJ",Bq4(ACS),"d",Bq3(NM),"MY",Bq4(A0B)],QQ,
0,FM,[],0,3,0,AZH,["Yo",Bq7(WE),"LH",Bq3(ARQ),"bJ",Bq4(AIT)],DK,0,BF,[],0,3,0,JG,["bJ",Bq4(AHq),"St",Bq4(AZo),"Nq",Bq4(A1c)],KX,0,U,[],0,0,0,0,["d",Bq3(To),"Z",Bq3(Td)],Fc,0,C,[],4,3,0,Bsy,0,De,0,C,[],3,3,0,0,0,BL,0,C,[De],1,3,0,0,0,DX,0,BL,[],1,3,0,0,0,U0,0,DX,[],0,3,0,0,0,BD,0,C,[],0,3,0,BlN,0,NQ,0,C,[],3,3,0,0,0,AFM,0,C,[NQ],0,3,0,0,["a0H",Bq4(AJ$),"SZ",Bq3(Bgn),"Kh",Bq3(A4a),"NW",Bq3(ARd),"ko",Bq3(AXo),"i9",Bq3(A44),"xl",function(b,c,d,e,f){Bds(this,b,c,d,e,f);},"FZ",Bq6(AWg),"ma",Bq6(AQY),"IR",Bq6(AOD),
"uV",Bq6(A0o),"PC",Bq7(Bbu),"O1",function(b,c,d,e,f){A0$(this,b,c,d,e,f);}],IC,0,U,[],0,0,0,0,["d",Bq3(TS),"Z",Bq3(VF)],AIp,0,IC,[],0,0,0,0,["d",Bq3(A98),"Z",Bq3(AU7)],Bd,0,C,[Cm,BI],1,3,0,0,["cd",Bq5(B4),"VS",Bq3(Bi),"b",Bq3(A9C)],DL,0,Bd,[],12,3,0,AAw,0,Bz,0,C,[],1,0,0,ACe,["d",Bq3(CJ),"yD",Bq4(KW),"cM",Bq6(He),"cQ",Bq7(Hn),"Cm",Bq4(A6K),"jq",Bq3(A5I),"H5",Bq3(AUX),"b",Bq3(AXO),"Mk",Bq3(AYB),"V",Bq4(NP),"cj",Bq4(Bgl),"is",Bq3(BhP),"er",Bq3(Rr)],BX,0,Bz,[],1,0,0,0,["yD",Bq4(AAT),"d",Bq3(Dm),"e",Bq6(BiA),"co",
Bq3(BfD),"bf",Bq4(ASx)]]);
$rt_metadata([R1,0,BX,[],0,0,0,0,["G7",Bq4(A9L),"bM",Bq5(BeH),"x",Bq3(Bf3)],Gr,0,C,[],3,3,0,0,0,GJ,0,C,[Gr],0,3,0,0,["d",Bq3(AJV),"lX",Bq4(A4g),"nM",Bq5(AZN)],J8,0,GJ,[],0,3,0,0,["X3",Bq4(AAy),"a0s",function(b,c,d,e,f){AIK(this,b,c,d,e,f);},"ZH",function(b,c,d,e,f,g){RK(this,b,c,d,e,f,g);},"iL",Bq7(Rt),"sV",Bq7(AWx),"jw",Bq6(AAW),"Vq",Bq6(AKD),"h_",Bq7(AGW),"R7",Bq7(AKr)],GY,"CharSequence",16,C,[],3,3,0,0,0,DA,0,C,[],0,3,0,0,["oU",Bq3(A8w),"nq",Bq3(AX4),"IE",Bq3(AQI),"HB",Bq3(A9Y),"Aw",Bq4(A1R)],EJ,0,DA,[],
0,3,0,0,["jz",Bq5(WZ),"bU",Bq4(AC4),"GR",Bq4(AGI)],G3,0,EJ,[],0,3,0,0,["bU",Bq4(RD)],Mz,0,C,[],0,3,0,Pd,0,B0,0,C,[],3,3,0,0,0,N7,0,C,[B0],3,3,0,0,0,O5,0,C,[B0],3,3,0,0,0,Uq,0,C,[O5],0,0,0,0,["a2w",Bq4(Bgf),"OB",Bq5(AS7),"Y9",Bq5(Bfs)],PU,0,C,[],0,3,0,0,0,AIV,0,R,[],0,3,0,0,["no",Bq4(A_H)],AEH,0,U,[],0,0,0,0,["xE",Bq5(ANS),"NK",Bq6(A06),"Z",Bq3(A8I)],GS,0,R,[],0,3,0,0,["ty",Bq5(Nj)],Uu,0,C,[De],0,3,0,0,0,Kt,0,C,[B0],3,3,0,0,0,W5,0,C,[Kt],0,0,0,0,["a0N",Bq4(Bb2),"q$",Bq3(A26),"MF",Bq3(ANe)],CR,0,Bz,[],0,0,0,Lt,
["U",Bq4(Fh),"e",Bq6(AL7),"kA",Bq3(BaC),"x",Bq3(ARu),"bf",Bq4(AMK)],Mk,0,CR,[],0,0,0,0,["U",Bq4(AIS),"e",Bq6(AMX),"x",Bq3(Bf_)],HE,0,C,[],3,3,0,0,0,AGv,0,C,[HE],0,3,0,0,0,BO,0,Bz,[],0,0,0,0,["d",Bq3(Da),"jc",Bq5(WC),"e",Bq6(AQP),"V",Bq4(AWu),"x",Bq3(ASL),"cj",Bq4(A_U),"bf",Bq4(AXr),"er",Bq3(ANy)],RA,0,BO,[],0,0,0,0,["pT",Bq4(AZJ),"V",Bq4(A8u),"e",Bq6(ARN),"x",Bq3(BcY)],AGP,0,DQ,[],0,3,0,0,["kD",Bq4(A1e),"nv",function(b,c,d,e,f,g,h){return AQ1(this,b,c,d,e,f,g,h);}],Mi,0,C,[],3,3,0,0,0,DB,0,C,[],0,3,0,0,0,J_,
0,C,[],3,3,0,0,0,JI,0,C,[J_],0,3,0,0,["d",Bq3(T5),"BX",Bq4(A3C)],ML,0,C,[],3,3,0,0,0,GD,0,JI,[ML],0,3,0,0,["a2I",function(b,c,d,e,f,g){AG_(this,b,c,d,e,f,g);},"Dj",Bq3(A2v),"tm",Bq3(AWB),"wM",Bq3(AQ9),"b",Bq3(AL1),"Ek",Bq4(Be$)],Ou,0,C,[B0],3,3,0,0,0,ADb,0,C,[Ou],0,0,0,0,["XL",Bq4(AS_),"KS",Bq3(AX3),"YC",Bq3(AWi)],DC,0,Bz,[],1,0,0,0,["gU",Bq6(G9),"qG",Bq3(BiK),"cj",Bq4(AX9),"bf",Bq4(BgE),"er",Bq3(AUH)],C2,0,DC,[],0,0,0,0,["gU",Bq6(Gf),"e",Bq6(A3t),"x",Bq3(A$l)],AC9,0,C2,[],0,0,0,0,["gU",Bq6(A$1),"e",Bq6(Bbb)],BE,
0,C,[],0,3,0,LZ,0,FQ,0,C,[BI,GY],0,0,0,0,["d",Bq3(LX),"U",Bq4(LJ),"Y5",Bq4(AEF),"a03",Bq4(Nk),"lx",Bq5(Qu),"a2J",Bq4(SJ),"CF",Bq5(A4d),"OZ",Bq6(A$o),"Wr",Bq4(AI7),"FN",Bq5(Vx),"Qz",Bq6(AUE),"a0x",Bq4(Yc),"EJ",Bq5(AF5),"XG",Bq4(Pw),"wm",Bq5(Q_),"ye",Bq5(T0),"Xe",Bq4(XB),"yW",Bq5(Rk),"hd",Bq4(OI),"b",Bq3(PY),"k",Bq3(Pk),"g",Bq4(RM),"GV",Bq6(SP),"wP",Bq7(AFP),"a2d",Bq4(AJT),"uZ",Bq6(Q3),"vL",Bq7(Oy),"a0Z",Bq4(P9),"en",Bq5(AHK),"qg",Bq7(ADX),"vD",Bq4(AIx),"a0e",Bq4(AIL),"a0h",Bq5(AI6),"cm",Bq5(ACo)],Gy,0,C,[],3,
3,0,0,0,SK,0,FQ,[Gy],0,3,0,0,["d",Bq3(A9W),"Lj",Bq4(AOz),"LQ",Bq4(AY3),"OA",Bq6(A1z),"TR",Bq4(APk),"Rb",Bq6(A4o),"Dg",Bq4(Bgi),"La",Bq7(Bar),"SF",Bq7(BaM),"Vk",Bq5(Bg4),"J1",Bq5(Ber),"vL",Bq7(AP1),"uZ",Bq6(A5m),"wP",Bq7(A8_),"GV",Bq6(Bd2),"g",Bq4(A23),"k",Bq3(BiF),"b",Bq3(A5C),"hd",Bq4(A5S),"wm",Bq5(Bfx),"lx",Bq5(A3h)],Pf,0,C,[],0,3,0,Bt2,0,Dd,0,C,[],1,3,0,0,["U",Bq4(GQ),"a08",Bq3(Dg),"Xn",Bq3(Ck),"c$",Bq4(H2),"XR",Bq3(BG),"cu",Bq4(KK),"da",Bq3(Ha),"dn",Bq3(It),"a0q",Bq3(Bf),"Z6",Bq3(Cq)],YY,0,C,[],0,3,0,0,
0,JA,0,Cn,[],0,3,0,0,0,F$,0,C,[],1,0,0,0,["d",Bq3(Oq)],S,0,F$,[],1,0,0,L6,["d",Bq3(Bh),"bP",Bq3(A5i),"cq",Bq3(A4e),"Ia",Bq3(Baz),"E6",Bq3(A9N),"mP",Bq3(Bfr),"R2",Bq3(ALZ),"np",Bq3(A5t),"ho",Bq3(BhN),"gm",Bq4(AZS),"j6",Bq3(APY)],AFt,0,S,[],0,0,0,0,["a1z",Bq4(A$Y),"r",Bq4(A1n)],DE,0,C,[D$],0,3,0,0,0]);
$rt_metadata([FS,0,DE,[GE,D$],1,3,0,0,0,CW,0,FS,[],1,3,0,Bt5,0,HK,0,C,[],4,0,0,AXV,["d",Bq3(Yw),"a00",Bq4(AI3)],P1,0,C,[],3,3,0,0,0,LQ,0,C,[BI],0,3,0,Z9,["Qe",Bq4(AKL),"IP",Bq4(Biu),"d",Bq3(TK),"FC",Bq5(Bcw),"yb",Bq3(A9D),"Ok",Bq3(AYR),"RF",Bq6(A2k)],DF,0,Ci,[],1,3,0,Buc,0,Dy,0,DF,[],1,3,0,0,0,ADA,0,Dy,[],0,3,0,0,0,FI,0,Bd,[],12,0,0,AHI,0,KA,0,U,[],0,0,0,0,["d",Bq3(Yt),"Z",Bq3(AFv)],VM,0,U,[],0,0,0,0,["d",Bq3(ANt),"Z",Bq3(A9b)],PJ,0,C,[],3,3,0,0,0,Ll,0,C,[],1,3,0,0,["d",Bq3(ACt),"LA",Bq4(ASV),"a2i",Bq3(QJ),
"jI",Bq3(AVL),"ow",Bq4(AW9),"WF",Bq4(AE9)],BP,0,C,[],4,3,0,BuE,0,CT,0,C,[],0,3,0,0,0,ADc,0,CT,[],0,3,0,0,0,Xr,0,R,[],4,0,0,0,["d",Bq3(ATY)],ADR,0,C,[],4,3,0,0,0,Xj,0,R,[],4,0,0,0,["d",Bq3(A$Z)],DS,0,ET,[],1,3,0,0,0,TY,0,DS,[],0,3,0,0,0,E7,0,C,[],3,3,0,0,0,Cz,0,C,[E7],1,3,0,0,["d",Bq3(Tk),"jI",Bq3(A9Z),"TP",Bq3(A5E)],AEO,0,Cz,[],0,0,0,0,0,Xk,0,R,[],4,0,0,0,["d",Bq3(BeX)],AJC,0,CR,[],0,0,0,0,["d",Bq3(A2C),"e",Bq6(A6G),"x",Bq3(A$P)],Xn,0,R,[],4,0,0,0,["d",Bq3(A_m)],FY,0,R,[],0,3,0,0,["U",Bq4(M8)],MM,0,C,[],3,3,
0,0,0,Xh,0,R,[],4,0,0,0,["d",Bq3(Bez)],Jg,0,CT,[],0,3,0,0,0,AC8,0,Jg,[],0,3,0,0,0,Xl,0,R,[],4,0,0,0,["d",Bq3(Bi7)],Xo,0,R,[],4,0,0,0,["d",Bq3(AKH)],Xm,0,R,[],4,0,0,0,["d",Bq3(AM4)],Xp,0,R,[],4,0,0,0,["d",Bq3(A2_)],Lq,0,BO,[],0,0,0,0,["jc",Bq5(AA3),"e",Bq6(AWb),"x",Bq3(AT4),"bf",Bq4(Bd4)],DW,0,Lq,[],0,0,0,0,["jc",Bq5(Hq),"e",Bq6(A7l),"V",Bq4(BdD),"x",Bq3(ALa)],AAB,0,DW,[],0,0,0,0,["jc",Bq5(AQG),"e",Bq6(AWr),"bf",Bq4(AZ0),"x",Bq3(BhO)],AIj,0,DW,[],0,0,0,0,["jc",Bq5(APU),"e",Bq6(AMA),"bf",Bq4(BfJ),"x",Bq3(AQD)],Bk,
0,C,[],1,3,0,Bjr,["d",Bq3(CZ)],AJL,0,Bk,[],4,0,0,0,0,ED,0,Dy,[],1,3,0,0,0,ADE,0,ED,[],0,3,0,0,0,Cg,0,DA,[],0,3,0,0,["d",Bq3(Gb),"jz",Bq5(LL),"bU",Bq4(Os)],Bt,"RuntimeException",16,Cg,[],0,3,0,0,["d",Bq3(CQ),"jz",Bq5(S9),"bU",Bq4(Fy)],I0,"UnsupportedOperationException",16,Bt,[],0,3,0,0,["d",Bq3(VY)],AJP,"ReadOnlyBufferException",13,I0,[],0,3,0,0,["d",Bq3(A$M)],E8,0,C,[],3,3,0,0,0,Bu,0,C,[E8],0,3,0,BuS,0]);
$rt_metadata([C0,0,Bu,[],0,3,0,BuU,0,Kf,0,C0,[],0,3,0,0,0,AF0,0,C,[],4,3,0,0,0,Eq,0,C,[],1,3,0,0,["d",Bq3(Jt)],Rd,0,Eq,[],0,3,0,0,["d",Bq3(ARW),"OK",Bq4(AR2),"Kw",Bq6(AVN),"KQ",function(b,c,d,e,f,g,h){return AMu(this,b,c,d,e,f,g,h);},"H6",Bq4(A5Y)],KI,0,DE,[],0,3,0,0,0,CH,0,EQ,[ID],0,3,0,0,0,AA9,0,CH,[],0,3,0,0,0,GT,0,G3,[],0,3,0,0,["bU",Bq4(MA)],AGk,0,GT,[],0,3,0,0,["bU",Bq4(ANi)],H8,0,C,[JU],3,3,0,0,0,Sp,0,U,[],0,0,0,0,["d",Bq3(ANk),"Z",Bq3(AO0)],KB,0,C,[B0],3,3,0,0,0,IX,0,C,[],3,3,0,0,0,Ba,0,C,[IX],1,3,0,
0,["d",Bq3(BZ),"zr",Bq5(AP6)],AFc,0,Kf,[],0,3,0,0,0,HU,0,BF,[],0,3,0,ARe,["d",Bq3(K2),"bJ",Bq4(Sf),"LB",Bq4(ASN),"IX",Bq3(BfN),"Pn",Bq6(AVd)],G4,0,HU,[],0,3,0,AOw,["bJ",Bq4(XH),"d",Bq3(Je),"Lm",Bq4(A86),"K7",Bq4(A7x),"Jo",Bq4(A54),"J7",Bq4(A0Z)],HR,0,C,[],1,3,0,0,["d",Bq3(Zx)],R4,0,Bu,[],0,0,0,0,0,R3,0,Bu,[],0,0,0,0,0,Qa,0,Cn,[],0,3,0,Bu5,0,ACw,0,C,[],4,0,0,0,0,RE,0,S,[],0,0,0,0,["Wf",Bq4(Bd7),"r",Bq4(AOo)],Dk,0,C,[Cm],1,3,0,0,["WT",Bq5(HW),"zC",Bq3(AGf),"U5",Bq4(AFH),"H4",Bq4(Zu)],Vy,0,Dk,[],0,3,0,0,["a1v",
Bq6(AMn),"mf",Bq3(AR$),"m6",Bq3(AK3)],Is,0,C,[],0,3,0,0,0,OD,0,Is,[],0,3,0,0,0,R5,0,CC,[],0,0,0,0,0,EH,0,Ci,[],1,3,0,0,0,Cc,0,C,[],0,3,0,0,["d",Bq3(Ds),"ez",Bq4(AYu),"cs",Bq4(A4z)],SF,0,Cc,[],0,0,0,0,["X2",Bq5(A7v),"ez",Bq4(Bbm),"cs",Bq4(A7S),"LX",Bq5(AUT),"cB",Bq5(AMW)],S0,0,C,[],4,3,0,0,0,II,0,C,[],3,3,0,0,0,Wa,0,C,[II],0,3,0,0,["a2R",Bq7(A8V),"ft",Bq3(AR5)],SG,0,Cc,[],0,0,0,0,["a2q",Bq6(A31),"ez",Bq4(Ba5),"cs",Bq4(A_3),"ig",Bq5(BeD),"cB",Bq5(BfF)],NE,0,C,[B0],3,3,0,0,0,ACa,0,C,[NE],0,0,0,0,["Vz",Bq4(AVr),
"T2",Bq4(A87),"a13",Bq4(Bbg)],SH,0,Cc,[],0,0,0,0,["Wz",Bq7(AK6),"ez",Bq4(ATe),"cs",Bq4(BeK),"cB",Bq5(AXf)],LW,0,C,[],32,0,0,Bn8,0,Ye,0,Bu,[],0,0,0,0,0,Jf,0,C,[E8],1,3,0,0,0,Yd,0,Jf,[],0,0,0,0,0,Lc,0,C,[E8],1,3,0,0,0,Yg,0,Lc,[],0,0,0,0,0,JJ,0,KX,[],0,0,0,0,["d",Bq3(U8),"Z",Bq3(Uc)],Lw,0,JJ,[],0,0,0,0,["d",Bq3(Xs),"Z",Bq3(AAn)],AEW,0,Lw,[],0,0,0,0,["d",Bq3(AYZ),"Z",Bq3(AUK)],AHw,0,U,[],0,0,0,0,["d",Bq3(BbI),"Z",Bq3(AZP)],Yf,0,Bu,[],0,0,0,0,0]);
$rt_metadata([AEw,0,DW,[],0,0,0,0,["jc",Bq5(AY9),"e",Bq6(ANv),"bf",Bq4(Bi$),"x",Bq3(AVX)],Vp,0,Dk,[],0,3,0,0,["d",Bq3(AP9),"mf",Bq3(A55),"m6",Bq3(A2S)],PB,0,C,[Gy,GY],0,3,0,Dp,["U",Bq4(AC1),"a0Q",Bq3(QD),"V9",Bq4(C4),"Yy",Bq4(Kp),"b",Bq3(AK$),"l3",Bq4(AXl),"BQ",Bq4(AX0),"I7",Bq5(AN7),"Uq",Bq6(ALq),"zW",Bq4(Bas),"Ez",Bq4(A9o)],WG,0,Ci,[],0,3,0,0,0,YT,"ArrayStoreException",16,Bt,[],0,3,0,0,["d",Bq3(A8v)],AE1,0,CW,[],4,3,0,0,0,YV,0,C,[D$],0,3,0,0,0,JY,0,C,[],3,3,0,0,0,Qq,0,C,[JY],0,0,0,0,["WY",function(b,c,d,e,
f,g){Wl(this,b,c,d,e,f,g);},"bC",Bq5(A0f),"eJ",Bq4(A_X),"qB",Bq3(A2T),"pY",Bq4(ATl),"eO",Bq5(A6Y),"wa",Bq5(A47),"jO",Bq4(Bdu),"of",Bq4(AXt),"DE",Bq4(ALS),"SW",Bq4(A$3),"xU",Bq3(AXm),"l8",Bq4(ANK),"P8",Bq3(AUi),"AS",Bq4(A3n),"f1",Bq5(A6g),"Pa",Bq3(Bha),"OS",Bq3(Bhc),"uK",Bq6(Bh_),"f9",Bq3(AOp),"Jm",Bq4(Bes),"dW",Bq3(A5H),"O",Bq3(Bak),"qx",Bq4(A7E),"Eh",Bq3(AQm),"jZ",Bq3(A9U),"mc",Bq3(A3l),"Rk",Bq3(A4j)],Un,0,C,[],0,3,0,0,["d",Bq3(BaT)],ABA,0,C,[E8],0,0,0,0,0,E4,0,C,[],0,3,0,0,0,Xc,0,CT,[],0,3,0,0,0,Lp,0,C,[],
0,3,0,0,["d",Bq3(Bfd),"Nc",Bq4(A_w),"IG",Bq5(Bdn),"b",Bq3(AQ3)],AAh,0,Cc,[],0,0,0,0,["LW",Bq4(A4M),"cB",Bq5(Bfk),"cs",Bq4(APp)],AAf,0,Cc,[],0,0,0,0,["a2s",Bq5(A0k),"cB",Bq5(AWO),"cs",Bq4(Bax)],AAz,0,S,[],0,0,0,0,["VE",Bq4(ASQ),"r",Bq4(Bix)],AAg,0,Cc,[],0,0,0,0,["LW",Bq4(A4U),"ig",Bq5(AR6),"cs",Bq4(Be2),"cB",Bq5(A2R)],Gq,0,C,[B_],1,3,0,Qx,["f8",Bq5(Mw),"d8",Bq3(BaP),"sP",Bq4(AZg),"R4",Bq3(AQH),"O6",Bq5(A0M),"xR",Bq6(AWM),"UN",Bq5(AMc),"Fb",Bq6(AKG),"S7",Bq5(A8q),"Ux",Bq5(AQn)],NH,0,Gq,[],0,3,0,G_,["Rn",Bq4(AEA),
"Nk",Bq5(AGV),"a16",Bq6(JL),"XN",Bq4(LC),"Wh",Bq6(Qc),"QL",Bq4(A0a),"bk",Bq3(AV1),"bj",Bq3(Bf2),"b",Bq3(AU_)],MF,"GdxRuntimeException",3,Bt,[],0,3,0,0,["jz",Bq5(ALb),"bU",Bq4(TT)],ND,0,C,[B0],3,3,0,0,0,ACb,0,C,[ND],0,0,0,0,["Vz",Bq4(AUV),"Ra",Bq4(BbK),"a0C",Bq4(A1P)],Ww,0,Cn,[],0,3,0,0,0,E1,0,BO,[],0,0,0,0,["zN",Bq5(LU),"V",Bq4(BhT),"e",Bq6(AV_),"x",Bq3(Bcb),"wE",Bq6(ASh),"cj",Bq4(AS9),"bf",Bq4(BdG)],Dn,"IllegalArgumentException",16,Bt,[],0,3,0,0,["d",Bq3(G$),"bU",Bq4(AJ0)],XS,"IllegalCharsetNameException",
14,Dn,[],0,3,0,0,["bU",Bq4(AZh)],YQ,0,C,[P1,KB],0,3,0,0,["YA",Bq4(APe),"d9",Bq4(A_j),"f9",Bq3(ASr),"hl",Bq6(Bgc),"kQ",Bq5(AUb),"kH",Bq5(ARL),"m7",Bq5(Bh7),"k$",Bq5(A9K),"Po",Bq4(A4n),"li",Bq3(AO5),"MT",Bq4(ANI),"tk",Bq3(Bi_),"l$",Bq4(AXi)],Ip,0,Bu,[],0,3,0,Bvm,0,VX,0,C,[],0,3,0,0,0,N8,0,C,[],3,3,0,0,0,Hx,0,C,[N8],3,3,0,0,0,Qd,0,C,[],3,3,0,0,0,Es,0,C,[Hx,Qd],1,3,0,0,["d",Bq3(Iw),"nO",Bq6(AK1)],Kh,0,Es,[],0,3,0,0,["YR",Bq4(RJ)],I2,0,Kh,[],0,3,0,0,["YT",Bq5(QP),"nO",Bq6(BbS),"I0",Bq4(A7B),"p_",Bq4(A$E),"fI",Bq4(A6f),
"N7",Bq4(ASW),"Rl",Bq3(BdR)],Wu,0,DW,[],0,0,0,0,["jc",Bq5(A3H),"e",Bq6(A28),"bf",Bq4(Bei),"x",Bq3(AM1)],Kv,0,Dd,[Cm],1,3,0,0,["gs",Bq6(AGC),"W2",Bq3(XW),"da",Bq3(Bbp)],GB,0,Kv,[],1,0,0,0,["gs",Bq6(OS),"Ou",Bq3(AZn),"gE",Bq4(Bbj),"b_",Bq4(AUo),"uk",Bq5(Bgd),"ci",Bq3(ATO)],GP,0,GB,[],1,0,0,0,["f2",function(b,c,d,e,f,g){LE(this,b,c,d,e,f,g);},"fe",Bq3(ATx)],Sy,0,GP,[],0,0,0,0,["f2",function(b,c,d,e,f,g){A7X(this,b,c,d,e,f,g);},"qN",Bq4(AQg),"oq",Bq5(AKg)],XP,0,U,[],0,0,0,0,["d",Bq3(A94),"Z",Bq3(ATm)],Bn,"Color",
8,C,[],0,3,0,BC,["d",Bq3(ZW),"U",Bq4(AIH),"H2",Bq7(WN),"XT",Bq4(YP),"e5",Bq4(AL2),"L7",Bq4(Bil),"a0l",Bq4(ALJ),"Yf",Bq4(BcJ),"VV",Bq4(A4i),"dZ",Bq3(BeL),"gT",Bq7(Bbr),"XO",Bq4(AWC),"a18",Bq7(AKZ),"V5",Bq7(AYH),"a05",Bq7(Bfw),"ZZ",Bq5(AVE),"Wa",function(b,c,d,e,f){return A5V(this,b,c,d,e,f);},"a2Q",Bq3(AUl),"C",Bq4(A7M),"bl",Bq3(ATT),"hw",Bq3(AZ4),"sX",Bq3(A12),"b",Bq3(AOi),"Ty",Bq6(Ben),"Wv",Bq4(A3e),"ZY",Bq4(Bd3),"W9",Bq3(BgA)],EL,0,C,[],1,3,0,0,0,YE,0,EL,[],0,3,0,0,0,Fa,0,C,[],4,3,0,0,["Yq",Bq6(AVi),"X4",
Bq7(AJA),"XH",function(b,c,d,e,f,g){AG$(this,b,c,d,e,f,g);},"C",Bq4(AVn),"a2f",Bq4(MC),"Xa",Bq3(KD),"WC",Bq3(TU),"bl",Bq3(A7g)],FL,0,Bu,[],0,3,0,0,0,CY,0,DC,[],0,0,0,0,["lP",Bq6(F5),"e",Bq6(A29),"x",Bq3(A6h)],YC,0,CY,[],0,0,0,0,["a1t",Bq4(ASo),"e",Bq6(Biw),"cM",Bq6(AVl)],On,0,C,[],3,3,0,0,0]);
$rt_metadata([Iq,0,C,[J_,On],0,3,0,0,["b",Bq3(AT0),"BH",Bq3(A40),"xg",Bq4(A7A),"x",Bq3(A_n),"hy",Bq3(AQR),"IW",Bq3(A0U),"gC",Bq3(Bat),"si",Bq3(BiQ),"Pk",Bq3(A09),"IT",Bq4(BeW),"JO",Bq4(BeU)],C_,0,C,[B0],1,3,0,0,0,AE8,0,C_,[],1,3,0,0,0,Em,0,C,[],3,3,0,0,0,AI2,0,C,[Em,BI],0,3,0,0,["d",Bq3(A5W),"U",Bq4(A3w),"tP",Bq4(AXp),"oG",Bq5(ARs),"sR",Bq4(Bjb),"SD",Bq5(A3J),"e0",Bq4(A3P),"lH",Bq4(Bio),"UC",Bq4(AWX),"Ps",Bq4(AWt),"d1",Bq4(Bhk),"i3",Bq4(A1Y),"ja",Bq4(Bhb),"js",Bq4(A_x),"bS",Bq3(Bhv)],Lo,0,EF,[Cm],0,3,0,IT,["no",
Bq4(Sk),"Wc",Bq3(Bf9)],D7,0,BX,[],0,0,0,0,["oA",Bq4(AXc),"co",Bq3(A$U),"bM",Bq5(ARc),"cM",Bq6(APt),"cQ",Bq7(ASS),"x",Bq3(AZ3),"qd",Bq3(AMB),"cj",Bq4(AZq)],AA0,0,Cc,[],0,0,0,0,["ZF",Bq4(AMg),"cB",Bq5(BiP)],OC,0,C,[],32,0,0,BnO,0,CF,"Pool",3,C,[],1,3,0,0,["d",Bq3(Le),"f8",Bq5(Oi),"e9",Bq3(RC),"jP",Bq4(AN0),"AV",Bq4(ARi),"E3",Bq4(A6O),"F$",Bq4(ZA)],SY,0,CF,[],0,0,0,0,0,IH,0,Ci,[],1,3,0,0,0,Pq,0,C,[B0],3,3,0,0,0,H_,0,C,[B_],3,3,0,0,0,St,0,C,[],4,3,0,0,0,Cj,0,BL,[],1,3,0,0,0,TB,0,Cj,[],0,3,0,0,0,AEX,0,U,[],0,0,0,
0,["xE",Bq5(AO$),"NK",Bq6(A2L),"Z",Bq3(AKe)],Nq,0,C,[],0,3,0,Bv$,0,Fl,0,C,[],3,3,0,0,0,D6,0,CH,[Fl],0,3,0,Bwe,0,TL,0,D6,[],0,3,0,0,0,PL,0,C,[],3,3,0,0,0,Jr,0,Dd,[Cm,Gy,GY,PL],1,3,0,0,["gs",Bq6(AFw),"sb",Bq6(ALz),"PT",Bq4(AXu),"Uu",Bq6(BiR),"Kq",Bq6(A4Q),"a2A",Bq4(KE),"Ec",Bq3(ABT),"a2F",Bq3(Qf),"a2l",Bq3(M9),"pw",Bq4(AT2)],IU,0,Jr,[],1,0,0,0,["gs",Bq6(Tr),"MD",Bq3(ALD),"ci",Bq3(Bij)],U1,0,IU,[],0,0,0,0,["U",Bq4(Bc3),"a2a",function(b,c,d,e,f,g){Z5(this,b,c,d,e,f,g);},"BB",Bq4(Bcg),"s$",Bq5(A_5),"SB",Bq3(AVZ),
"Ro",Bq3(AQj),"fe",Bq3(A1q)],QA,0,C,[],0,3,0,0,0,CA,0,C,[],3,3,0,0,0,HL,0,C,[],3,3,0,0,0,Ft,0,C,[CA,HL,Cm],0,3,0,0,["d",Bq3(NA),"ZX",Bq3(H7),"Pl",Bq3(EY),"a0m",Bq4(BN),"Zn",Bq5(Jc),"P",Bq3(ARS),"YL",Bq4(E$),"YG",Bq4(ADr),"Yl",Bq4(Hi),"Zq",Bq4(CM),"NY",Bq4(AYA),"a2x",Bq5(VJ),"XU",Bq5(Uo),"fG",Bq3(L4),"If",Bq3(A5d),"bl",Bq3(ABj),"C",Bq4(AAu),"c7",Bq5(A4S)],Hf,0,Ft,[],0,3,0,K$,["d",Bq3(Ms),"bU",Bq4(K8),"VZ",Bq4(Qb),"X5",Bq4(AI1),"a1r",Bq5(MI),"LZ",Bq3(Bew),"bl",Bq3(ATK),"C",Bq4(APC)],AGj,0,S,[],0,0,0,0,["a0c",
Bq4(AKo),"r",Bq4(Bgq)],P7,0,C,[],0,3,0,Na,0,In,0,C,[],1,3,0,0,["d",Bq3(VT)],AEG,"UnsupportedCharsetException",14,Dn,[],0,3,0,0,["bU",Bq4(AL$)],AEf,0,S,[],0,0,0,0,["YW",Bq4(A8R),"r",Bq4(AXU)],Ew,0,Dd,[Cm],1,3,0,0,["gs",Bq6(AG1),"xV",Bq6(AVg),"a2b",Bq3(VV),"a0v",Bq3(ABu),"Ta",Bq4(AQJ),"Qb",Bq4(BbQ),"dn",Bq3(AQ2),"da",Bq3(A17),"cu",Bq4(AWJ),"c$",Bq4(A1a)],Gw,0,Ew,[],1,0,0,0,["gs",Bq6(M1),"oO",Bq4(ASC),"Nx",Bq5(Bif),"ci",Bq3(A7f)],FP,0,Gw,[],1,0,0,0,["f2",function(b,c,d,e,f,g){NU(this,b,c,d,e,f,g);},"fe",Bq3(BcG)],Wj,
0,BL,[],0,3,0,0,0,FK,0,Ci,[],1,3,0,0,0,AG9,0,FK,[],0,3,0,0,0,Vc,0,G0,[],0,3,0,0,["U",Bq4(A$$)],F6,0,C,[CA],0,3,0,0,["d",Bq3(AM6),"U",Bq4(Q2),"nk",Bq5(Ma),"a2g",Bq6(AAk),"XA",Bq4(Bfm),"WS",Bq7(U3),"E",Bq4(AXX),"rm",Bq4(ARA),"Mo",Bq6(AKY),"LT",Bq4(AQM),"sF",Bq6(AMR),"o",Bq4(Bhj),"lw",Bq5(AXD),"Ol",Bq5(Bav),"iR",Bq5(A8h),"Of",Bq5(AOk),"ON",Bq5(AOl),"tr",Bq4(AW3),"mt",Bq5(AOS),"wG",Bq3(A3N),"re",Bq3(A1E),"Hm",Bq3(Bja),"P",Bq3(A8a),"yS",Bq4(AZt),"kz",Bq4(A7w),"Fl",Bq4(A1K),"b5",Bq3(AR7),"iq",Bq4(ALd),"bl",Bq3(A4T),
"C",Bq4(ATr),"b",Bq3(AZu),"fG",Bq3(ANa)],IB,0,C,[B_],3,3,0,0,0,M6,0,CR,[],0,0,0,0,["U",Bq4(ZC),"e",Bq6(A32),"d0",Bq3(AM8),"x",Bq3(AYI),"bf",Bq4(BcS)],K1,0,BO,[],0,0,0,0,["oA",Bq4(ANc),"V",Bq4(BcE),"e",Bq6(A6v),"cM",Bq6(ARm),"cQ",Bq7(A7q),"x",Bq3(AY$),"cj",Bq4(AK4),"bf",Bq4(AZf)],AI9,"AssertionError",16,EJ,[],0,3,0,0,["jz",Bq5(AON)],Qm,0,C,[],0,0,0,Bwq,0,OZ,0,C,[B_],3,3,0,0,0]);
$rt_metadata([EX,0,CY,[],0,0,0,0,["At",Bq7(MW),"e",Bq6(A4I),"x",Bq3(A5n)],Do,0,BO,[],0,0,0,0,["pT",Bq4(AGU),"e",Bq6(A73),"x",Bq3(BhF),"r",Bq4(AQb),"cj",Bq4(ALR),"vS",Bq3(ASP),"V",Bq4(Bfh),"bf",Bq4(APM)],EN,0,C,[De],0,3,0,0,0,Th,0,EN,[],0,3,0,0,0,BM,"String",16,C,[BI,Cm,GY],0,3,0,E5,["N3",Bq4(Kc),"Xc",Bq6(Ri),"XW",Bq7(LS),"a2p",Bq7(MH),"Xj",Bq5(X6),"XF",Bq6(Rm),"g",Bq4(A4D),"k",Bq3(A8Z),"bS",Bq3(A$S),"qg",Bq7(APw),"T8",Bq4(BgU),"Bl",Bq5(Bc9),"ff",Bq4(A$X),"An",Bq4(A71),"eX",Bq5(BbZ),"OD",Bq4(A70),"nh",Bq5(A4L),
"y1",Bq4(AR0),"vC",Bq5(A7D),"Q_",Bq4(BcA),"BP",Bq5(APl),"Kv",Bq4(ARE),"cm",Bq5(AKT),"ex",Bq4(AR3),"en",Bq5(APF),"mx",Bq4(A2u),"vM",Bq5(Bd0),"Qf",Bq3(A_i),"b",Bq3(AM_),"sp",Bq3(A$W),"C",Bq4(A0n),"Iv",Bq4(Bhi),"zu",Bq4(AVc),"Vl",Bq3(AU$),"CE",Bq4(Bb3),"bl",Bq3(Bb$),"H0",Bq3(Bbh),"HA",Bq4(A_B),"wU",Bq5(A0e),"IJ",Bq5(APQ)],PD,0,Es,[],0,3,0,A__,["xf",Bq4(A_O)],AD3,0,GB,[],0,0,0,0,["Zg",function(b,c,d,e,f,g){ARt(this,b,c,d,e,f,g);},"qN",Bq4(Bb7),"oq",Bq5(A_8),"fe",Bq3(AKh)],CP,0,Bd,[],12,3,0,Ba7,0,TD,0,DQ,[],0,3,
0,0,["kD",Bq4(AYL),"nv",function(b,c,d,e,f,g,h){return ATn(this,b,c,d,e,f,g,h);}],KQ,0,C,[],1,3,0,0,["d",Bq3(ADm)],Jp,0,C,[],3,3,0,0,0,Go,0,KQ,[Jp,Em,BI],0,3,0,X9,["d",Bq3(I$),"U",Bq4(OQ),"Y",Bq4(AFp),"A",Bq5(AWT),"pD",Bq3(AUh)],Xw,0,Go,[],0,3,0,0,["d",Bq3(AWl),"ZA",Bq4(ASf),"Fp",Bq4(AVm)],AIF,0,Gw,[],0,0,0,0,["a0V",function(b,c,d,e,f,g){A6n(this,b,c,d,e,f,g);},"wB",Bq4(AW0),"nS",Bq5(AV4),"fe",Bq3(Bcy)],AFz,0,C,[],1,3,0,0,0,Uz,0,C,[],0,3,0,0,0,DT,0,Cj,[],1,3,0,0,0,AGi,0,DT,[],0,3,0,0,0,QU,0,Ba,[],0,3,0,A9t,
["U",Bq4(AEm),"bo",Bq7(A2P)],F0,0,R,[],0,3,0,0,["B7",Bq7(MQ)],US,0,F0,[],0,3,0,0,["B7",Bq7(AN2)],Ee,0,Bd,[],12,3,0,Bqk,0,Oc,0,Dk,[],0,3,0,IY,["mf",Bq3(AYo),"m6",Bq3(A03)],EO,0,C,[B0],3,3,0,0,0,Pn,0,C,[EO],3,3,0,0,0,F8,0,C,[E8],0,3,0,BwT,0,AAt,0,Bz,[],0,0,0,0,["U",Bq4(Bi5),"e",Bq6(A$p),"bf",Bq4(ANT),"x",Bq3(AQB)],FJ,0,C,[Hx],1,3,0,0,["d",Bq3(Ng),"O5",Bq4(AIU)],We,0,FJ,[],0,3,0,0,["a0M",Bq5(A7y),"f3",Bq3(ATt),"lK",Bq3(A10)],Wx,0,DX,[],0,3,0,0,0,HZ,0,EE,[H8],0,3,0,0,0,ADS,0,C,[],4,3,0,0,0,H5,0,BF,[],0,3,0,BiZ,
["Rq",Bq5(AXk),"bJ",Bq4(AHk),"d",Bq3(Lf)],AFn,0,C,[],0,3,0,0,0,R9,0,CT,[],0,3,0,0,0,Tn,0,C,[],0,0,0,0,["d",Bq3(A2c)],XN,0,C,[B_],0,3,0,0,["d",Bq3(ANq),"U",Bq4(AGX),"LY",Bq5(AGO),"kE",Bq7(AVq),"v5",Bq4(APo),"pr",Bq4(Bh2),"Z0",Bq5(Ph),"Nl",function(b,c,d,e,f,g,h,i){Bh1(this,b,c,d,e,f,g,h,i);},"Ij",function(b,c,d,e,f,g,h){A7r(this,b,c,d,e,f,g,h);},"MK",function(b,c,d,e,f,g){A1Q(this,b,c,d,e,f,g);},"N",Bq3(Bay)],AB_,0,C,[H_],0,3,0,0,["Dc",Bq6(AUO),"ih",Bq3(A58),"hi",Bq3(AN$),"vU",Bq3(ARl),"vw",Bq6(AMx),"iD",Bq5(AVp),
"g6",Bq5(APO)],AFJ,0,C,[],0,3,0,0,0,FA,0,C,[Fl,CA],0,3,0,0,0,Ia,0,BF,[],0,3,0,AVf,["bJ",Bq4(AEh),"d",Bq3(Ka)],Rn,0,C,[],0,3,0,0,0,Yj,0,C,[],0,3,0,0,0,Tg,0,CF,[],0,3,0,0,["Xw",Bq6(A08),"uX",Bq3(A$h)],Io,0,C,[],0,3,0,Bw5,0,I9,0,C,[],0,3,0,Ba8,["d",Bq3(AHe),"W$",Bq4(AEl),"Ej",Bq4(BaX),"HV",function(b,c,d,e,f){return AWz(this,b,c,d,e,f);},"JN",Bq4(AQC),"C",Bq4(AL_),"Mp",Bq5(A3U)],Jl,0,C,[],3,3,0,0,0,Kl,0,C,[CA],3,3,0,0,0,Ov,0,C,[Kl],3,3,0,0,0,MO,0,C,[],3,3,0,0,0]);
$rt_metadata([Fi,0,Bd,[],12,3,0,Bl2,0,Q8,0,C,[B0],3,3,0,0,0,AA5,0,C,[Q8],0,0,0,0,["Z7",Bq5(A24),"Kd",Bq3(A5J),"Xv",Bq3(AWU)],K_,0,C,[],0,3,0,0,["a2T",Bq7(XQ)],AEj,"BufferOverflowException",13,Bt,[],0,3,0,0,["d",Bq3(A82)],HY,0,Dd,[Cm],1,3,0,0,["gs",Bq6(Sz),"Fw",Bq6(BfI),"Yz",Bq3(Y7),"Yj",Bq3(AIY),"Kx",Bq4(AXJ),"Ka",Bq4(BeE),"dn",Bq3(BfQ),"da",Bq3(A1S),"cu",Bq4(Bam),"c$",Bq4(A3L)],AH$,0,DS,[],0,3,0,0,0,Zw,0,U,[],0,0,0,0,["d",Bq3(ATC),"Z",Bq3(A_y)],OB,0,C,[],0,3,0,0,["WA",Bq6(AYW)],EM,0,C,[],1,0,0,0,["d",Bq3(Mc)],AHy,
0,EM,[],0,0,0,0,["d",Bq3(ARk),"ls",Bq4(BeY),"FS",Bq5(A1d)],AHx,0,EM,[],0,0,0,0,["d",Bq3(A41),"ls",Bq4(ANo),"FS",Bq5(AXE)],AEo,0,G3,[],0,3,0,0,0,Z$,0,U,[],0,0,0,0,["d",Bq3(A90),"Z",Bq3(Bek)],JN,0,CH,[Fl],0,3,0,0,0,XJ,0,C,[],0,3,0,0,["N3",Bq4(A7m)],D3,0,BX,[],0,0,0,0,["pT",Bq4(AW5),"bM",Bq5(A2x),"x",Bq3(ATg),"cj",Bq4(AWv),"vS",Bq3(Bcz)],NK,0,C,[OZ],0,3,0,X5,["d",Bq3(AIg),"LY",Bq5(L8),"hm",Bq3(A9J),"N",Bq3(AYU),"JL",Bq7(ASJ),"dE",Bq3(AR4),"v5",Bq4(AQE),"BF",Bq3(AOY),"No",Bq4(Bcq),"Mm",Bq3(ALc)],Oh,0,C,[],32,0,
0,Bpj,0,Ho,0,BF,[],0,3,0,ASM,["Lq",Bq4(Ba6),"IK",Bq3(BbW),"SR",Bq4(BcB),"bJ",Bq4(AHc),"d",Bq3(La),"NO",Bq3(A6B)],Op,0,Ho,[],0,3,0,A6A,["Qr",Bq5(AB6),"QZ",Bq5(A4E),"bJ",Bq4(RU)],AC$,0,C_,[],1,3,0,0,0,QF,0,C,[],3,3,0,0,0,N4,0,C,[QF],0,3,0,AAO,["a0u",Bq4(AJ3),"ZL",Bq5(L3),"XD",Bq6(PM),"Jr",Bq5(AUn),"JM",Bq5(AMt),"K$",Bq5(AXb),"Me",Bq6(BhG),"BJ",Bq6(AVs),"Un",Bq3(AKi),"Aa",Bq4(AJ_),"Sh",Bq5(AUJ),"TN",Bq6(A7O)],Tc,0,S,[],0,0,0,0,["d",Bq3(A16),"a22",Bq5(Tl),"a1o",Bq6(A3x),"cO",Bq4(AJ8),"Ry",Bq4(Bi4),"bK",Bq5(Bgj),
"O9",Bq4(A2Z),"zt",Bq4(AZ$),"r",Bq4(ANM),"bP",Bq3(A2f),"cq",Bq3(A8c),"mP",Bq3(AZA),"b",Bq3(Bby),"ho",Bq3(APZ)],S7,0,C,[KB],0,0,0,0,["a1G",Bq6(BdM),"d9",Bq4(BbO),"l$",Bq4(BhY)],AIv,"BufferUnderflowException",13,Bt,[],0,3,0,0,["d",Bq3(A0D)],Rb,0,C,[],3,3,0,0,0,GA,0,C,[Rb],0,3,0,0,["d",Bq3(XD),"Jg",Bq7(AO8),"Jc",Bq3(AVK)],AFA,0,GA,[],0,3,0,0,["d",Bq3(ASa),"sV",Bq7(A$B),"SC",Bq7(APn),"SV",Bq5(Bem),"Vh",Bq6(Bc$),"M8",Bq7(A_h),"JF",Bq5(Bg5),"VA",Bq7(A7t)],GK,0,Ci,[],1,3,0,0,0,Sb,0,FP,[],0,0,0,0,["f2",function(b,c,
d,e,f,g){BaV(this,b,c,d,e,f,g);},"wB",Bq4(ATI),"nS",Bq5(BdB)],AAG,0,C,[],0,3,0,0,0,OG,0,C,[B_],3,3,0,0,0,Iz,0,C,[OG],1,3,0,0,["d",Bq3(AHN),"LP",Bq6(AKJ),"bn",Bq5(BiT),"b7",Bq4(A0F),"R6",Bq4(APu),"P1",Bq5(A77),"EY",Bq5(ADn),"RM",Bq4(A9j),"AD",Bq5(AAs),"N",Bq3(ABU),"a0L",Bq4(JT),"VW",Bq4(Ce),"Zc",Bq5(EC),"XY",Bq5(Ut),"Yi",Bq5(NB),"a1Z",Bq5(Gx),"a0X",Bq5(Gp),"a0U",Bq6(ABN),"a1D",function(b,c,d,e,f){return Er(this,b,c,d,e,f);},"Yv",Bq5(Eu),"a0k",Bq5(AFx)],DD,"IOException",15,Cg,[],0,3,0,0,["d",Bq3(AA8)],EA,0,DD,
[],0,3,0,0,["d",Bq3(Mg)],XL,"MalformedInputException",14,EA,[],0,3,0,0,["U",Bq4(AV6),"nq",Bq3(APJ)],FB,0,Bd,[],12,3,0,WR,0,BV,0,C,[Cm],1,3,0,Qe,["HP",Bq4(Ge),"Bh",Bq4(A4P),"C",Bq4(A2E),"b",Bq3(AZI),"bl",Bq3(Hd)],Jy,0,BV,[],0,3,0,FR,["a0S",Bq5(AAA),"p1",Bq3(AW8),"bl",Bq3(A0T)],X3,"CloneNotSupportedException",16,Cg,[],0,3,0,0,["d",Bq3(A$w)],Gk,0,HY,[],1,0,0,0,["gs",Bq6(Nt),"Nh",Bq4(BdH),"ci",Bq3(A_e)],Gt,0,Gk,[],1,0,0,0,["f2",function(b,c,d,e,f,g){Nv(this,b,c,d,e,f,g);},"fe",Bq3(A9V)],AG0,0,FY,[],0,3,0,0,["U",
Bq4(A5T)],Js,0,C,[BI],0,3,0,0,["d",Bq3(A3b),"Qg",Bq4(BgB),"Ib",Bq3(AMk),"y$",Bq3(A8k)],AF1,0,Js,[],0,3,0,0,0,IM,0,C,[B0],3,3,0,0,0,Ue,0,C,[IM],1,3,0,0,["YX",Bq4(BiE),"a2h",Bq3(ANr)],AJY,0,Cn,[],0,3,0,0,0]);
$rt_metadata([Lv,0,C,[],1,3,0,0,["d",Bq3(XF),"T3",Bq4(BfV),"RG",Bq3(BfE),"IF",Bq4(AQF),"Ni",Bq5(AOG),"J3",Bq7(A5O)],V6,0,Lv,[],0,3,0,0,["d",Bq3(A2Y),"Mz",Bq4(ZM),"x4",Bq6(A7i)],AAU,0,C,[CA],0,3,0,0,["Wk",Bq7(AXT),"TC",Bq4(AUu),"Q1",Bq6(A3A),"P",Bq3(Bae),"j7",Bq4(A00)],TW,0,KA,[],0,0,0,0,["d",Bq3(A$9),"Z",Bq3(AQ5)],My,"BitmapFont",9,C,[B_],0,3,0,0,["d",Bq3(ANG),"a1P",Bq7(Ro),"a1L",Bq6(Y2),"a1A",Bq6(AD8),"JY",Bq4(A2b),"zL",Bq7(AQz),"kE",Bq7(BhE),"Sy",Bq3(AYE),"NE",Bq3(Bhn)],AE7,0,C,[],0,3,0,0,["d",Bq3(ALs),"a2m",
Bq5(A8i),"Li",Bq4(AW$),"P0",Bq3(AYk),"US",Bq4(Bb4)],GU,0,BO,[],0,0,0,0,["f8",Bq5(L9),"e",Bq6(ALw),"V",Bq4(BdC),"kx",Bq4(AN8),"x",Bq3(A3R),"bf",Bq4(AXK)],YA,0,S,[],0,0,0,0,["Zt",Bq5(A2a),"r",Bq4(APG)],Yz,0,S,[],0,0,0,0,["Yg",Bq6(Bb0),"r",Bq4(A3p)],Ex,0,CF,[],1,3,0,0,["d",Bq3(K4),"e9",Bq3(ABp),"dE",Bq3(AUe)],ZO,0,Bk,[],0,0,0,0,0,ACc,0,EX,[],0,0,0,0,["At",Bq7(BaZ),"e",Bq6(BeF)],EB,0,CC,[Fl],0,3,0,0,0,Ne,0,C,[EO],3,3,0,0,0,ADl,0,C,[CA],0,3,0,0,["d",Bq3(A0A),"m3",Bq5(AGQ),"fl",Bq4(AWc),"o$",Bq5(APj),"NV",Bq5(ATp)],AAE,
0,CF,[],0,0,0,0,0,ABC,0,C,[],0,3,0,0,0,IF,0,Ba,[],0,3,0,SC,["f8",Bq5(Tx),"bo",Bq7(Bbn)],Qv,0,C,[],0,3,0,BoZ,["a1q",Bq5(AI$),"Ak",Bq3(Bdc),"Rj",Bq4(AO_),"P",Bq3(Bch),"Mu",Bq6(A2j),"K0",function(b,c,d,e,f,g,h,i,j){return BiD(this,b,c,d,e,f,g,h,i,j);},"Kj",Bq6(ANW)],AEi,0,C,[],4,3,0,0,0,Rq,0,BX,[],0,0,0,0,["G7",Bq4(BfZ),"bM",Bq5(AUd),"x",Bq3(ARK)],YX,0,S,[],0,0,0,0,["W8",Bq4(A2B),"r",Bq4(ASq)],I1,0,Eq,[],0,3,0,0,["d",Bq3(A$K),"L1",Bq4(ALQ),"S1",Bq5(ANC),"zc",function(b,c,d,e,f,g){return AX2(this,b,c,d,e,f,g);},
"C",Bq4(ALA),"Gx",Bq4(Bb9)],AF6,0,C_,[],1,3,0,0,0,NI,0,C,[],0,3,0,AJw,0,Ud,0,BO,[],0,0,0,0,["Zx",Bq5(A1p),"e",Bq6(AL0),"V",Bq4(Bcu),"x",Bq3(Bde),"bf",Bq4(AM9),"cj",Bq4(AMD)],Kg,0,C,[],0,3,0,0,["d",Bq3(ZB)],Ol,0,C,[],3,3,0,0,0,FT,0,C,[Ol,Em],0,0,0,0,["KY",Bq5(Od)],O6,0,FT,[],0,0,0,0,["KY",Bq5(AWW),"R8",Bq3(AMl),"D0",Bq5(AZY)],AI8,0,Cj,[],0,3,0,0,0,FZ,0,CR,[],0,0,0,0,["d",Bq3(Bf0),"e",Bq6(A0i),"x",Bq3(A5U)],JM,0,ET,[D$],1,3,0,0,0,AAo,0,JM,[D$],0,3,0,0,0,AGm,0,C,[],0,3,0,0,["bU",Bq4(A_G),"PZ",Bq4(A88),"Rm",Bq6(A$q),
"Ip",function(b,c,d,e,f){A35(this,b,c,d,e,f);},"ma",Bq6(A3_),"Ac",Bq6(A7a),"UL",Bq4(AUM),"NU",Bq4(AQZ),"Pc",Bq4(Bd5),"Sc",Bq4(A5z)],HM,0,H5,[],0,3,0,AOW,["bJ",Bq4(AAc),"d",Bq3(Jb)],Ym,0,BX,[],0,0,0,0,["yD",Bq4(BaN),"bM",Bq5(BeS),"cM",Bq6(A8t),"cQ",Bq7(A6q),"x",Bq3(ARv),"bf",Bq4(A3T)],I4,0,EB,[],0,3,0,0,0,ACY,0,I4,[],0,3,0,0,0,LT,0,BV,[],0,3,0,AN3,0,KM,0,C,[],3,3,0,0,0,AAl,0,C,[KM],0,3,0,0,["Lz",Bq5(BgC),"WG",Bq6(Zq),"xO",Bq3(Bi9),"S",Bq3(AMm)],HI,0,BF,[],0,3,0,AT_,["bJ",Bq4(V$),"d",Bq3(Jh)],Fx,0,C,[],0,3,0,
0,["XP",Bq4(A4l),"QV",Bq7(Be5),"Rg",Bq7(AML),"CV",Bq3(A1g),"KL",Bq3(AN_),"OW",Bq3(AKQ)],Mu,0,Fx,[],0,3,0,0,0,UL,0,FP,[],0,0,0,0,["f2",function(b,c,d,e,f,g){A3E(this,b,c,d,e,f,g);},"wB",Bq4(A20),"nS",Bq5(A_z)],ADY,0,GT,[],0,3,0,0,["bU",Bq4(ANH)],E0,"IndexOutOfBoundsException",16,Bt,[],0,3,0,0,["d",Bq3(S5),"bU",Bq4(Po)],AIJ,"ArrayIndexOutOfBoundsException",16,E0,[],0,3,0,0,["U",Bq4(AL8)],Su,0,FJ,[],0,3,0,0,["Z3",Bq5(TR),"a1K",Bq4(AKy),"XS",Bq5(AHa),"f3",Bq3(BfK),"Mx",Bq6(ART)]]);
$rt_metadata([ABz,0,C,[],0,3,0,0,0,AEC,0,C,[],0,3,0,0,0,HH,0,C,[],3,3,0,0,0,AA4,0,C,[HH],0,0,0,0,["a0b",Bq4(AWH),"bG",Bq3(Bbl),"bD",Bq3(Bf$)],Lj,0,CH,[K3],0,3,0,0,0,X7,0,Lj,[],0,0,0,0,0,Ya,0,Bu,[],0,0,0,0,0,X8,0,C0,[],0,0,0,0,0,NT,0,C,[],3,3,0,0,0,IZ,0,C,[NT,Gr],0,3,0,ASu,["d",Bq3(AAF),"yo",Bq3(A8b),"xk",function(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){return BfA(this,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);},"Hp",Bq3(A8M),"Se",Bq3(AKa),"Vi",Bq5(BfL),"mb",Bq4(AV2),"pl",Bq4(Bbx),"lX",Bq4(A5r),"iL",Bq7(Bfe),"h_",Bq7(A$v),"jw",
Bq6(AXj),"nM",Bq5(A57),"pp",Bq5(AUv)],Yb,0,Bu,[],0,0,0,0,0,ACL,0,C,[BI],0,3,0,0,0,ACg,0,Ba,[],4,0,0,0,["d",Bq3(AQT),"bo",Bq7(A1s)],ACd,0,Ba,[],4,0,0,0,["d",Bq3(Bge),"bo",Bq7(A6L)],Pl,0,C,[],32,0,0,Bx3,0,ACl,0,Ba,[],4,0,0,0,["d",Bq3(ASF),"bo",Bq7(Bh4)],ACh,0,Ba,[],4,0,0,0,["d",Bq3(A3q),"bo",Bq7(AVS)],ACf,0,Ba,[],4,0,0,0,["d",Bq3(Bfa),"bo",Bq7(A_T)],ACk,0,Ba,[],4,0,0,0,["d",Bq3(A5G),"bo",Bq7(AXF)],GG,0,CC,[],0,3,0,Bx_,0,AHG,0,GG,[],0,3,0,0,0,Lm,0,C,[],1,3,0,0,["vH",Bq6(ZS),"a0$",Bq4(QN),"ws",Bq4(Bgu),"a1H",Bq4(Nd),
"rI",Bq4(A9R),"Z5",Bq6(KH),"Zb",Bq4(MP),"a2H",Bq3(AI4),"U5",Bq4(AB8),"Jw",Bq4(AU8),"v4",Bq3(A7W)],Dz,0,Lm,[],1,3,0,0,["vH",Bq6(HT),"H_",Bq5(AZT)],Ws,0,Dz,[],0,3,0,0,["kD",Bq4(A_u),"nP",function(b,c,d,e,f,g,h){return Bhy(this,b,c,d,e,f,g,h);}],JR,0,C,[],0,3,0,0,0,AHM,0,C,[],4,3,0,0,["V4",Bq5(AKV),"WJ",Bq3(ABy),"k",Bq3(QH),"AX",Bq4(UV),"rk",Bq3(S6),"Yc",Bq3(WF)],AJ6,0,CY,[],0,0,0,0,["lP",Bq6(AXv),"e",Bq6(ALv)],AHn,0,C,[],0,3,0,0,["Zd",Bq5(Bbw),"uL",Bq3(Bbq),"d2",Bq4(A$j),"eu",Bq4(A5o),"eB",Bq4(Bgo),"d6",Bq4(BdW)],LH,
0,C,[],3,3,0,0,0,Vu,0,C,[LH],0,3,0,0,["d",Bq3(A5e)],ACp,0,Ba,[],4,0,0,0,["d",Bq3(AS5),"bo",Bq7(AYV)],DP,0,Cg,[],0,3,0,0,["d",Bq3(Li)],Nh,"InstantiationException",16,DP,[],0,3,0,0,["d",Bq3(A_F)],ACm,0,Ba,[],4,0,0,0,["d",Bq3(BeC),"bo",Bq7(BiH)],ACi,0,Ba,[],4,0,0,0,["d",Bq3(A1O),"bo",Bq7(A4C)],ACn,0,Ba,[],4,0,0,0,["d",Bq3(A5p),"bo",Bq7(A91)],AFk,0,ED,[],0,3,0,0,0,Sq,0,S,[],0,0,0,0,["YI",Bq4(Bin),"r",Bq4(A0G)],LK,0,C,[],3,3,0,0,0,Wq,0,C,[LK,Pq],0,3,0,0,["d",Bq3(ARj),"p2",Bq3(Bdw),"wX",Bq4(Bfq),"Nj",Bq4(A8G),"UB",
Bq3(Bdg),"PU",Bq3(A13),"VC",Bq3(A7I),"Oq",Bq3(A5L),"XK",Bq4(BcQ)],Hw,0,BF,[],0,3,0,Ix,["d",Bq3(MX),"Fe",Bq4(AJF),"bJ",Bq4(Vm)],XO,0,Hw,[B_],0,3,0,0,["d",Bq3(A8E),"T9",Bq6(BgF),"Jp",function(b,c,d,e,f){BaH(this,b,c,d,e,f);},"Fe",Bq4(A$C),"Ur",Bq3(AY1),"r6",Bq4(A3Q),"N",Bq3(ALF)],AGR,0,C,[],3,3,0,0,0,KT,0,BL,[],1,3,0,0,0,Vo,0,KT,[],0,3,0,0,0,ACs,0,C,[],0,3,0,0,0,WI,0,Dz,[],0,3,0,0,["kD",Bq4(AWV),"nP",function(b,c,d,e,f,g,h){return AQe(this,b,c,d,e,f,g,h);}],PX,0,FT,[],0,0,0,0,["Z2",Bq5(AWY)],G6,0,BF,[],0,3,0,
A1h,["bJ",Bq4(ADp),"d",Bq3(Lb)],Fj,0,C,[],3,3,0,0,0]);
$rt_metadata([VR,0,DS,[],0,3,0,0,0,AJe,0,C,[],0,3,0,0,0,XZ,0,U,[],0,0,0,0,["d",Bq3(ASI),"Z",Bq3(AZi)],F_,0,C,[Hx],1,3,0,0,["d",Bq3(Mo),"sm",Bq6(Bga),"f3",Bq3(A9P)],VL,0,F_,[],0,0,0,0,["a06",Bq4(AR_),"C2",Bq3(A$0)],E2,0,Bd,[],12,3,0,Boc,0,ADd,0,Cn,[],0,3,0,0,0,AAX,0,Bz,[],0,0,0,0,["JX",Bq4(Bdv),"e",Bq6(A6i),"bf",Bq4(AQw),"x",Bq3(A4t)],Cx,0,C,[IX],1,3,0,0,["d",Bq3(Et),"zr",Bq5(A3j)],Up,0,BL,[],0,3,0,0,0,ACx,0,Ba,[],4,0,0,0,["d",Bq3(Bdi),"bo",Bq7(A8B)],KU,0,C,[H_],0,3,0,0,["Dc",Bq6(AF3),"ih",Bq3(AQv),"hi",Bq3(AXI),
"vU",Bq3(A1L),"vw",Bq6(Bb_),"iD",Bq5(A8j),"g6",Bq5(A4A)],ABo,0,KU,[],0,3,0,0,["WL",Bq5(Bel)],ACC,0,Ba,[],4,0,0,0,["d",Bq3(AYO),"bo",Bq7(A1B)],ACz,0,Ba,[],4,0,0,0,["d",Bq3(AZR),"bo",Bq7(A3v)],Xe,0,U,[],0,0,0,0,["d",Bq3(AQQ),"Z",Bq3(Bev)],ACy,0,Ba,[],4,0,0,0,["d",Bq3(ASH),"bo",Bq7(ATo)],ACB,0,Ba,[],4,0,0,0,["d",Bq3(A78),"bo",Bq7(AOr)],AEZ,0,C0,[],0,0,0,0,0,JP,0,FA,[],0,3,0,0,0,AEY,0,JP,[],0,0,0,0,0,AEE,0,C,[],0,3,0,0,["a1R",Bq4(BhS),"hm",Bq3(BfP),"N",Bq3(Biq),"QE",Bq4(AN9),"Pr",Bq6(A6c),"yI",Bq6(BhA),"KA",Bq4(ARH)],V2,
0,Cz,[],0,0,0,0,0,J6,0,BL,[],0,3,0,0,0,ACv,0,J6,[],0,3,0,0,0,UI,0,U,[],0,0,0,0,["d",Bq3(ANl),"Z",Bq3(AXd)],AFi,0,C,[IB],0,3,0,0,["nk",Bq5(A7Q),"gO",Bq3(AXq),"kP",Bq3(A21),"vI",Bq6(A$t),"vq",Bq3(A0R),"d8",Bq3(AS1),"F8",Bq3(AM7)],HC,0,BF,[],0,3,0,Bb1,["bJ",Bq4(AEJ),"d",Bq3(JC)],ABD,0,Bz,[],0,0,0,0,["d",Bq3(AYT),"e",Bq6(ASA),"bf",Bq4(A1$),"x",Bq3(A4O)],ACH,0,Ba,[],4,0,0,0,["d",Bq3(ALW),"bo",Bq7(BeG)],ACE,0,Ba,[],4,0,0,0,["d",Bq3(Bhg),"bo",Bq7(A1m)],Dx,0,BF,[],0,3,0,D9,["d",Bq3(XX),"bJ",Bq4(Nu),"O3",Bq3(ANd),"MG",
Bq3(AX8),"M$",Bq3(A93),"QH",Bq6(APf)],ACA,0,Ba,[],4,0,0,0,["d",Bq3(ALU),"bo",Bq7(AVO)],ACG,0,Ba,[],4,0,0,0,["d",Bq3(A4J),"bo",Bq7(ARa)],Tj,0,C,[],0,3,0,0,0,MS,0,CR,[],0,0,0,0,["U",Bq4(AFQ),"e",Bq6(A3K),"x",Bq3(A6Z),"bf",Bq4(Bex)],ACF,0,Ba,[],4,0,0,0,["d",Bq3(AQx),"bo",Bq7(A66)],AAd,0,EB,[],0,3,0,0,0,AJc,0,GW,[],0,3,0,0,0,AGy,0,IH,[],0,3,0,0,0,Nm,0,C,[],4,3,0,F3,0,Oa,0,C,[],3,3,0,0,0,AAr,0,BX,[],0,0,0,0,["U",Bq4(Bfi),"bM",Bq5(AYi),"x",Bq3(BiU)],W_,0,C,[Cm],0,3,0,0,["d",Bq3(BfU),"MO",Bq4(ALe),"bl",Bq3(AMI)],UG,
"BitmapFont$BitmapFontData",9,C,[],0,3,0,0,["Nk",Bq5(Bbs),"Up",Bq5(ANN),"GX",Bq5(A3Z),"zO",Bq5(A1H),"EF",Bq3(BaI),"iP",Bq4(AOm),"HK",function(b,c,d,e,f){ANw(this,b,c,d,e,f);},"NN",Bq5(AKs),"y5",Bq4(AN6),"jS",Bq4(AOQ)],AE4,0,CW,[],4,3,0,0,0,ACQ,0,U,[],0,0,0,0,["f8",Bq5(BhB),"Z",Bq3(ATR)],EV,0,CY,[],0,0,0,0,["lP",Bq6(PS),"e",Bq6(Bal),"V",Bq4(A2n)],VA,0,GS,[],0,3,0,0,["ty",Bq5(Bbi)],Q7,0,FL,[],0,3,0,ByA,0]);
$rt_metadata([AFN,0,S,[],0,0,0,0,["ZM",Bq4(AYy),"r",Bq4(A0h)],GX,0,C,[],1,3,0,0,["d",Bq3(Nx),"QA",Bq6(AQd),"Kk",Bq3(A9l),"Ie",Bq5(Bc_),"AT",Bq6(AW7),"Nt",Bq6(AXB),"lE",Bq4(BiO),"Dt",function(b,c,d,e,f){return Bca(this,b,c,d,e,f);},"To",function(b,c,d,e,f,g){return A7G(this,b,c,d,e,f,g);},"Pb",Bq5(A18)],RL,0,GX,[],0,3,0,0,["d",Bq3(A9v),"gj",Bq3(ANJ),"qX",Bq4(AYx)],ZG,0,C,[II],0,3,0,0,["O5",Bq4(A96),"ft",Bq3(Bgs)],AAH,0,Do,[],0,0,0,0,["pT",Bq4(AOs),"r",Bq4(ASy),"x",Bq3(A1v)],Gh,0,Bd,[],12,3,0,Bg7,0,KF,0,BF,[],
0,3,0,AFh,["d",Bq3(ADe),"bJ",Bq4(S8)],Z6,0,U,[],0,0,0,0,["d",Bq3(Bbd),"Z",Bq3(A9S)],Mr,0,C,[H_],0,3,0,AQk,["Dc",Bq6(ACU),"ih",Bq3(A4N),"hi",Bq3(Bbz),"vU",Bq3(AZK),"vw",Bq6(A48),"iD",Bq5(AY7),"g6",Bq5(AO1)],T6,0,C,[],4,3,0,0,0,AA2,0,Cj,[],0,3,0,0,0,Wy,0,Cn,[],0,3,0,0,0,ZJ,0,C0,[],0,0,0,0,0,W0,0,Cc,[],0,0,0,0,["Vt",Bq5(Bfz),"ez",Bq4(Bis),"cs",Bq4(ATQ),"ig",Bq5(AUy),"cB",Bq5(ASv)],GR,0,C,[B0],3,3,0,0,0,WW,0,C,[GR],0,0,0,0,["z1",Bq7(AQN),"d9",Bq4(APX),"l$",Bq4(A$e)],WV,0,Cc,[],0,0,0,0,["WI",function(b,c,d,e,f){
AZB(this,b,c,d,e,f);},"ez",Bq4(Bjh),"cs",Bq4(Bic),"ig",Bq5(AMi),"cB",Bq5(A0_)],ZL,0,FA,[],0,0,0,0,0,WU,0,C,[GR],0,0,0,0,["Vt",Bq5(A4c),"d9",Bq4(Be9),"l$",Bq4(A6d)],Nr,0,C,[],32,0,0,Bow,0,W2,0,C,[GR],0,0,0,0,["z1",Bq7(AQA),"d9",Bq4(A7P),"l$",Bq4(APP)],Gu,0,C,[MO],0,3,0,NC,["d",Bq3(AAv),"TG",Bq4(A1Z),"VD",Bq5(A9F),"U0",Bq5(ARM),"Pt",Bq6(ANY),"OI",Bq4(ASZ),"RY",Bq3(ALu),"ih",Bq3(AOe),"PL",Bq3(AY0),"zj",Bq4(A4f),"Qu",Bq7(ALN),"E9",Bq4(AO2),"zB",Bq4(AWZ),"vt",Bq4(AP3),"hH",Bq4(A6b),"s1",Bq4(AVU),"LF",Bq3(AQ0),"N1",
Bq7(A7h),"dV",Bq4(AUj),"JH",Bq7(A$m),"SI",function(b,c,d,e,f,g){A$s(this,b,c,d,e,f,g);},"GL",function(b,c,d,e,f,g,h,i){A5s(this,b,c,d,e,f,g,h,i);},"ed",Bq7(AWQ),"Ru",Bq7(BdV),"jN",function(b,c,d,e,f){ATj(this,b,c,d,e,f);},"Ox",Bq6(AOR)],W1,0,C,[GR],0,0,0,0,["z1",Bq7(BcL),"d9",Bq4(AYw),"l$",Bq4(A7$)],KZ,0,U,[],0,0,0,0,["d",Bq3(U4),"Z",Bq3(AEx)],W8,0,C,[D$,GE],0,3,0,0,0,Ic,0,C,[],4,3,0,ByL,0,OU,0,C,[B_],0,3,0,ByN,0,G7,0,HM,[],0,3,0,A0l,["bJ",Bq4(UA),"d",Bq3(Jk)],HN,0,G7,[],0,3,0,ATu,["bJ",Bq4(AH3),"d",Bq3(JF)],O3,
0,C,[EO],3,3,0,0,0,MJ,0,C,[EO],3,3,0,0,0,Q5,0,C,[EO],3,3,0,0,0,Qh,0,C,[EO,O3,MJ,Pn,Ne,Q5],3,3,0,0,0,AGM,0,C,[],0,3,0,0,0,No,0,C,[],3,3,0,0,0,AEa,0,C,[BI],0,3,0,0,["d",Bq3(ATy),"Cc",Bq3(BbV),"Ks",Bq3(ASR),"EI",Bq3(Bc0),"F2",Bq4(BiV),"Cl",Bq3(A2K)],YM,0,In,[B0],0,3,0,0,["VT",Bq5(AZF),"Sd",Bq4(A$A),"GN",Bq3(A$i),"hO",Bq3(A2l),"QU",Bq3(BaG),"UD",Bq3(A99),"vo",Bq3(Bf1),"Cu",Bq3(BhW),"Pv",Bq3(Bht),"Ri",Bq3(A3d)],CN,0,C,[BI],0,3,0,CU,["d",Bq3(XG),"b6",Bq4(Bi6),"Gp",Bq4(AMU),"Iy",Bq4(Bhu),"Kp",Bq7(A8C),"Rt",function(b,
c,d,e,f,g,h){return BdJ(this,b,c,d,e,f,g,h);},"Io",Bq6(A43),"MM",function(b,c,d,e,f,g,h,i,j,k){return A1w(this,b,c,d,e,f,g,h,i,j,k);},"hW",Bq4(AUS),"fL",Bq3(APa),"Ua",Bq3(Beh),"NB",Bq7(AMe),"CX",Bq7(BaO),"AO",function(b,c,d,e,f,g){return Bbt(this,b,c,d,e,f,g);},"LC",Bq6(ANp),"TI",Bq5(A4K),"Ve",Bq5(APK),"DO",Bq6(A8s),"vE",Bq4(AMy),"O0",Bq6(A_c),"wH",Bq5(A4x),"PK",Bq4(AXP),"Qs",Bq3(Bco)],Lx,0,C,[],32,0,0,By4,0,AJ4,"NegativeArraySizeException",16,Bt,[],0,3,0,0,["d",Bq3(BcP)],AD9,0,BL,[],0,3,0,0,0,HP,"Timer",3,
C,[],0,3,0,FD,["d",Bq3(Zz),"HS",Bq5(BgR),"Ih",Bq7(Bhm),"Jk",Bq3(A0X),"QT",Bq5(AZr),"KP",Bq4(AWa)],ADU,0,G0,[],0,3,0,0,["U",Bq4(Ba_)],AAJ,0,DT,[],0,3,0,0,0,UT,0,R,[],0,3,0,0,["no",Bq4(AMr)],VS,0,Dz,[],0,3,0,0,["L8",Bq6(Bdd),"nP",function(b,c,d,e,f,g,h){return A0d(this,b,c,d,e,f,g,h);}],AHR,0,Ll,[],0,3,0,0,["d",Bq3(A$4),"PR",Bq5(AUt),"PW",Bq4(ATD),"Q4",Bq4(ASb)],ABw,0,C,[CA],0,3,0,0,["Y7",Bq4(Bdq),"NF",Bq5(AJW),"b5",Bq3(A9$)],AFY,"IllegalStateException",16,Cg,[],0,3,0,0,["d",Bq3(Be7),"bU",Bq4(BcI)],AJE,0,C,[],
0,3,0,0,0]);
$rt_metadata([KY,0,C,[Kl],1,3,0,0,["d",Bq3(Y5),"Lh",Bq4(A75)],Kn,0,KY,[Ov],1,3,0,0,["d",Bq3(AEM),"fG",Bq3(APH)],UX,0,EX,[],0,0,0,0,["At",Bq7(Bc5),"e",Bq6(BeV)],Vq,0,CT,[],0,3,0,0,0,OK,0,C,[B_],3,3,0,0,0,JW,0,C,[OK],1,3,0,0,["d",Bq3(WJ),"MS",Bq4(A$T)],Gv,0,Dd,[Cm],1,3,0,0,["Zl",function(b,c,d,e,f){AA6(this,b,c,d,e,f);},"BA",Bq6(A64),"Lr",Bq4(AWn),"yk",Bq6(BgS),"a1B",Bq4(ADP),"Ec",Bq3(A42),"a2G",Bq3(I_),"VO",Bq4(GO),"a0r",Bq3(LV),"Zj",Bq3(Lk),"QF",Bq4(A74),"gh",Bq4(AY5),"dn",Bq3(ANh),"cu",Bq4(AWF),"c$",Bq4(A3O)],UY,
0,Bz,[],4,0,0,0,["d",Bq3(AOK),"e",Bq6(A_Q),"bf",Bq4(A$z),"x",Bq3(AUY)],Ea,0,C,[BI,Jl],0,3,0,JB,["d",Bq3(AFG),"ZV",Bq6(U6),"L",Bq6(A_4),"M",Bq4(AOB),"eA",Bq4(AZx),"Cz",Bq6(ATi),"fK",Bq4(AU9),"Mw",Bq6(AYX),"di",Bq4(BeR),"sK",Bq3(BiX),"vd",Bq3(ANU),"I4",Bq4(A7U),"DJ",Bq4(AQh),"bV",Bq3(Bji),"z6",Bq4(AZU),"iX",Bq4(A7c),"Km",Bq6(BaA),"ld",Bq4(AYK),"rM",Bq4(A4k),"HU",Bq4(A6x),"sr",Bq5(AOO),"zT",Bq3(Bjc),"jn",Bq5(AVG),"b",Bq3(AMG),"bl",Bq3(Be0),"C",Bq4(AOx),"CK",Bq3(AQl)],HS,0,C,[BI,Jl],0,3,0,AWy,["d",Bq3(V7),"ty",
Bq5(XV),"sK",Bq3(A9Q),"lA",Bq4(A5X),"hq",Bq5(AKb),"N$",Bq3(BfG),"ym",Bq4(AWP)],FX,0,C,[MM],0,3,0,0,["VX",Bq7(Q1),"a1e",Bq6(AAe),"VH",Bq5(Ii),"bU",Bq4(AZw),"Pq",Bq6(AWp)],J0,0,BV,[],0,3,0,Lr,["d",Bq3(LA),"YY",Bq4(V1),"Vp",Bq3(Bcf),"bl",Bq3(AVt),"p1",Bq3(Bfn)],AH_,0,Ci,[],0,3,0,0,0,Of,0,G6,[],0,3,0,AX7,["Ys",Bq4(V3),"bJ",Bq4(Zo)],AHF,0,F6,[],0,3,0,0,["U",Bq4(A6p),"gd",Bq3(A8N),"N",Bq3(A6j)],ADZ,0,DX,[],0,3,0,0,0,S$,0,C,[],4,3,0,0,["YO",Bq4(AZ6),"Dj",Bq3(GM),"BX",Bq4(Xy),"Ek",Bq4(AJZ)],AC_,0,C,[],1,3,0,0,0,AIP,
0,Gk,[],0,0,0,0,["Yu",function(b,c,d,e,f,g){BiW(this,b,c,d,e,f,g);},"wA",Bq4(AQo),"rL",Bq5(A$N),"fe",Bq3(A68)],ADH,0,C,[B_,GE],0,3,0,0,0,D8,0,Bd,[],12,3,0,HA,0,KR,0,C,[],0,3,0,XM,0,FC,0,FS,[],1,3,0,0,0,VN,0,FC,[],4,3,0,0,0,AAM,0,U,[],0,0,0,0,["d",Bq3(AUa),"Z",Bq3(BhC)],IL,0,C,[Jp],1,3,0,0,["d",Bq3(AC6)],Vi,0,IL,[Em,BI],0,3,0,0,["C5",Bq4(A9w),"d",Bq3(AO6),"U",Bq4(Rp),"m3",Bq5(AJk),"Y",Bq4(AZ_),"a0I",Bq4(AFW),"a0P",Bq6(Mt),"a2N",Bq3(MY),"A",Bq5(AVh),"U1",Bq5(AZO),"xS",Bq6(AXe),"PJ",Bq4(A9a),"pD",Bq3(BdP),"Ln",
Bq4(AUL),"W_",Bq4(WT)],AIa,0,C,[],0,3,0,0,["d",Bq3(AW4),"nk",Bq5(YS),"B0",Bq4(A6e),"IV",Bq4(AL4),"zp",Bq6(AY4),"sA",Bq6(ALg),"oO",Bq4(A6Q),"mt",Bq5(A3g),"P",Bq3(A4W),"F1",Bq4(AXY),"u4",Bq4(AVv),"iq",Bq4(AND)],ZQ,0,Ip,[],0,3,0,0,0,P6,0,G4,[],0,3,0,BgX,["X_",Bq7(Xx),"bJ",Bq4(AHB)],AHS,0,EB,[],0,3,0,0,0,Ys,0,DT,[],0,3,0,0,0,Ld,0,C,[],0,3,0,Bq,["X6",Bq5(ACO),"j8",Bq3(AU3),"ip",Bq3(Bgz),"m8",Bq3(A_q),"AY",Bq3(AQ6),"u5",Bq3(A0j),"k",Bq3(APS),"os",Bq3(AX5)],NV,0,Bz,[],4,0,0,0,["U",Bq4(AIh),"e",Bq6(Bdt),"bf",Bq4(A6w),
"x",Bq3(Baq)],O4,0,HC,[],0,3,0,AX$,["d",Bq3(AFU),"bJ",Bq4(AEn)],Hy,0,C,[],0,0,0,0,["cd",Bq5(Bgm),"b0",Bq3(A_v),"qx",Bq4(A5$),"Jn",Bq4(A5K),"tc",Bq3(AOF),"lr",Bq3(AW6),"up",Bq3(AMY),"J",Bq3(Bea),"jL",Bq3(A6J),"cU",Bq3(A4v),"JD",Bq3(APR),"b",Bq3(AQp),"bS",Bq3(A$c),"hS",Bq3(A1j),"Go",Bq3(A5l),"Hu",Bq3(Bd9),"d0",Bq3(AME)],PC,0,C,[],3,3,0,0,0,AE5,0,KZ,[],0,0,0,0,["d",Bq3(A0v),"Z",Bq3(A4Y)],ACN,0,C_,[],1,3,0,0,0,UR,0,Dy,[],0,3,0,0,0,ADV,0,C,[],0,3,0,0,0,NN,0,C,[],3,3,0,0,0,ADj,0,Gt,[],0,0,0,0,["f2",function(b,c,d,
e,f,g){ALr(this,b,c,d,e,f,g);},"wA",Bq4(BbT),"rL",Bq5(A6X)],Ni,0,EE,[H8],0,3,0,0,0,Fs,0,C,[],0,0,0,Bj9,0,GC,0,BO,[],0,0,0,0,["a2k",Bq5(Ts),"e",Bq6(AKS),"cM",Bq6(AUc),"cQ",Bq7(BeA),"cj",Bq4(A_K),"is",Bq3(BcN),"er",Bq3(A1k)],Fq,0,C,[E7],0,3,0,N6,["bU",Bq4(ABE),"a0_",Bq5(Qp)],Qr,0,C,[B0],3,3,0,0,0,AAj,0,C,[],1,3,0,0,0,RS,0,GC,[],0,0,0,0,["Wx",Bq4(AXG),"cM",Bq6(AP8),"cQ",Bq7(Bi0),"is",Bq3(ANQ)]]);
$rt_metadata([Zl,"BufferOverflowException",14,Bt,[],0,3,0,0,["d",Bq3(AVA)],AAN,0,C,[B0],1,3,0,0,0,Q$,0,C,[],3,3,0,0,0,ABi,0,C,[E7,Q$],0,0,0,0,["Ye",Bq4(AKW),"ow",Bq4(A0Q),"ft",Bq3(BgK),"Ul",Bq3(AZ9)],AB7,0,C,[],0,3,0,0,0,Vr,0,C,[],0,3,0,0,["d",Bq3(AOX),"m3",Bq5(ADa),"fl",Bq4(AZW),"Mq",Bq4(A65),"QK",Bq4(AZ8)],AJq,"StringIndexOutOfBoundsException",16,E0,[],0,3,0,0,["d",Bq3(AZd)],Ox,"MissingResourceException",11,Bt,[],0,3,0,0,["a10",Bq6(A8r)],MB,0,C,[],4,3,0,BmZ,0,AEp,0,GU,[],0,0,0,0,["f8",Bq5(AQi),"e",Bq6(AT7),
"x",Bq3(A5y)],KO,0,C,[],4,3,0,Fn,0,FG,0,Bd,[],12,3,0,RN,0,Nn,0,Es,[],0,3,0,A1t,["xf",Bq4(Bcd)],Vb,0,DC,[],0,0,0,0,["gU",Bq6(ALK),"e",Bq6(BiG),"cM",Bq6(AY2),"x",Bq3(Bdk)],Pb,0,C,[B0],3,3,0,0,0,GV,0,Bd,[],12,3,0,Blk,0,Va,0,C2,[],0,0,0,0,["gU",Bq6(A50),"e",Bq6(A1A)],AJv,0,GK,[],0,3,0,0,0,Me,0,C,[],3,3,0,0,0,AGB,"CoderMalfunctionError",14,EJ,[],0,3,0,0,["GR",Bq4(AUP)],Jq,0,Bk,[],0,3,0,BpE,["no",Bq4(AJo)],QE,0,C,[],4,3,0,APT,0,M2,0,C,[],3,3,0,0,0,AIe,0,C,[M2],0,3,0,0,["XZ",Bq4(A0N),"Sp",Bq5(A6M),"oS",Bq4(Bg_),"Hl",
Bq4(A5b)],AGx,0,E1,[],0,0,0,0,["zN",Bq5(A5M)],AFf,0,C,[B0],1,3,0,0,0,ADy,0,Dz,[],0,3,0,0,["kD",Bq4(ANZ),"nP",function(b,c,d,e,f,g,h){return A2g(this,b,c,d,e,f,g,h);}],Wg,0,C,[BI],4,3,0,0,0,Hu,0,C,[B_],0,3,0,GI,["Rn",Bq4(RW),"ZR",Bq6(YO),"FV",Bq4(AKK),"gl",Bq3(AOu),"k0",Bq3(ASs),"mw",Bq3(AVb),"lJ",Bq3(AYs),"bk",Bq3(AQX),"bj",Bq3(AUB),"k2",Bq3(Bep),"iU",Bq3(A5_),"tT",Bq3(AK2),"U8",Bq3(AMJ),"Sb",Bq3(AZb),"ME",Bq3(Bcl),"Mc",Bq3(Bh9),"AQ",function(b,c,d,e,f,g,h){A7H(this,b,c,d,e,f,g,h);},"OL",function(b,c,d,e,f,
g,h,i,j){AXh(this,b,c,d,e,f,g,h,i,j);}],I6,0,BV,[],0,3,0,AIr,0,Fb,0,E4,[],0,3,0,0,0,AIm,0,C,[BI],0,3,0,0,0,AIl,0,C,[BI],0,3,0,0,0,Sw,0,C,[HL],0,3,0,0,["d",Bq3(BcO)],Sv,0,JW,[],0,3,0,0,["XI",Bq4(AB9),"d",Bq3(BhQ),"Id",Bq4(A0p)],Nc,0,C,[],3,3,0,0,0,IP,0,C,[Nc],0,3,0,0,["a2M",Bq7(A6D),"zs",Bq3(A2X),"Bx",Bq3(A6E),"U2",Bq3(AT$),"Hh",Bq3(A$J),"bk",Bq3(ATf),"bj",Bq3(A6U),"gl",Bq3(API),"Vm",Bq3(A33),"rt",Bq3(AOP),"Si",Bq3(Bbe),"Js",Bq4(A6_)],Sr,0,Cz,[],0,0,0,0,0,Ss,0,Cz,[],0,0,0,0,0,Wk,0,FY,[],0,3,0,0,["U",Bq4(AP0)],Qz,
0,BV,[],0,3,0,H6,0,AGJ,0,C,[],0,3,0,0,["d",Bq3(AM2)],Zp,0,C,[Gr],0,3,0,0,["Wg",Bq4(AMa),"mb",Bq4(ASc),"pl",Bq4(A2e),"lX",Bq4(A2z),"iL",Bq7(ALH),"h_",Bq7(AYn),"jw",Bq6(AP_),"nM",Bq5(AZZ),"pp",Bq5(BaW)],Mf,0,C,[],3,3,0,0,0,UJ,0,C,[Mf],0,3,0,0,["W5",Bq7(A9c),"Wi",function(b,c,d,e,f){VO(this,b,c,d,e,f);},"UG",Bq5(ANO),"AF",Bq7(AZL),"t",Bq4(A4Z),"s",Bq6(BaB),"dE",Bq3(Bgb),"N",Bq3(AMV),"hi",Bq3(AP5),"nB",Bq3(APN)],Km,0,CH,[],0,3,0,Bz1,0,AHW,0,F_,[],0,3,0,0,["a1N",Bq6(AJ1),"YB",Bq4(AMF),"C2",Bq3(A6s),"sm",Bq6(Bh3),
"f3",Bq3(ARw)],XT,0,C,[],4,3,0,0,0,Yx,0,EV,[],0,0,0,0,["lP",Bq6(Bh6),"e",Bq6(AUW)],AIc,0,C,[],0,0,0,0,["d",Bq3(ATF),"IC",Bq7(A3a)]]);
$rt_metadata([ACT,0,C,[],0,3,0,0,0,AHD,0,C,[],0,3,0,0,0,IE,0,Bt,[],0,3,0,0,0,WP,0,FK,[],0,3,0,0,0,AEU,0,Bu,[],0,0,0,0,0,AET,0,F8,[],0,0,0,0,0,SZ,0,R,[],0,3,0,0,["no",Bq4(A8y)],AEV,0,Bu,[],0,0,0,0,0,AIs,0,C,[],4,3,0,0,0,Zh,0,C,[],0,3,0,0,["d",Bq3(BdX),"K9",Bq4(A5g),"UH",Bq6(A4m),"QW",Bq3(BhK),"GT",function(b,c,d,e,f,g){return Bfc(this,b,c,d,e,f,g);},"UP",Bq5(Bba),"PQ",Bq7(ANg)],PW,0,C,[],3,3,0,0,0,AE2,0,BX,[],0,0,0,0,["G7",Bq4(A7d),"bM",Bq5(AOv),"cM",Bq6(A46),"cQ",Bq7(A89),"x",Bq3(AWk),"cj",Bq4(ARq),"R9",Bq6(Bgy),
"OY",Bq6(Bfy),"wn",Bq5(ARP)],Eb,0,C,[],0,3,0,Np,0,OJ,"ReflectionException",4,Cg,[],0,3,0,0,["jz",Bq5(Bef)],GZ,0,C2,[],0,0,0,0,["gU",Bq6(Ot),"e",Bq6(Bfb),"V",Bq4(BgZ)],AHv,0,DS,[],0,3,0,0,0,S3,0,BX,[],0,0,0,0,["pT",Bq4(AVP),"bM",Bq5(A_a),"x",Bq3(A5w)],AHj,0,C,[Mi],0,3,0,0,0,AEu,0,C,[HE],0,3,0,0,0,Ux,0,C,[BI,Fj],0,3,0,0,0,AES,0,Cj,[],0,3,0,0,0,Vg,0,Bu,[],0,0,0,0,0,N0,0,EE,[H8],0,3,0,0,0,Vf,0,Bu,[],0,0,0,0,0,ABV,0,C,[],4,3,0,0,0,Hg,0,C,[],0,3,0,DJ,["bU",Bq4(AHo)],Hs,0,C,[BI,Cm],0,3,0,Bjy,["bJ",Bq4(W7),"a0t",Bq3(A9u)],AEQ,
0,C,[],0,3,0,0,0,ZY,"NoSuchElementException",11,Bt,[],0,3,0,0,["d",Bq3(Ba9),"bU",Bq4(A$Q)],AH5,0,Cj,[],0,3,0,0,0,Sg,0,C,[N7],0,0,0,0,["a1y",Bq5(A0E),"Ke",Bq3(AZ2),"Ja",Bq3(BgM),"YD",Bq3(AVH),"VY",Bq3(AOI)],AID,0,GU,[],0,0,0,0,["f8",Bq5(BgH),"e",Bq6(ANX),"cM",Bq6(AZX),"cQ",Bq7(AK9),"cj",Bq4(BaQ),"x",Bq3(BgT)],ABG,0,DC,[],0,0,0,0,["a2O",Bq7(Bdb),"e",Bq6(AWw),"cM",Bq6(AKq),"x",Bq3(Beu)],VP,0,FC,[],4,3,0,0,0,KC,0,C,[],4,3,0,AJG,0,CL,0,Bd,[],12,3,0,Kb,["WE",Bq3(F7)],AFD,0,C,[],0,3,0,0,0,Fk,0,Bd,[],12,3,0,Boj,0,Xz,
0,DF,[],0,3,0,0,0,Hr,0,Kg,[],0,3,0,0,["WR",Bq6(IO),"so",Bq3(APz),"zC",Bq3(ARZ),"So",Bq3(Be1),"SH",Bq3(ANF),"rk",Bq3(A0q),"w5",Bq3(APr),"PY",Bq4(Bhr),"K8",Bq3(Bfo),"NA",Bq4(AWd),"Oh",Bq3(AOA),"JR",Bq3(Bgk),"b",Bq3(BbC)],Hh,0,BF,[],0,3,0,ASl,["d",Bq3(PZ),"bJ",Bq4(W$)],AHP,0,Hh,[],0,3,0,0,["a0f",Bq4(BcF),"Vx",Bq4(AZy),"KW",Bq4(AUA)],Fo,0,C,[B_],0,3,0,ZK,["Lz",Bq5(ZP),"Lc",Bq3(ASe),"n0",Bq3(Bfv),"ov",Bq3(BgI),"Cv",Bq5(A_V),"sM",Bq5(A$f),"E_",Bq5(A83),"kC",Bq5(AXH),"Ig",Bq6(AK0),"jF",Bq7(AM5),"zY",function(b,c,d,
e,f){AYb(this,b,c,d,e,f);},"BM",Bq7(AZQ),"wv",Bq5(A79),"Ll",Bq6(A38),"I6",Bq5(ATB),"A7",Bq6(BaY),"Kl",Bq5(BgV),"OR",Bq6(APD),"T5",Bq7(A49),"tn",Bq5(AKj),"NM",Bq5(Bdj),"iA",function(b,c,d,e,f,g){Bim(this,b,c,d,e,f,g);},"d8",Bq3(A4h),"Dr",Bq4(AMs),"uQ",Bq4(A_M),"mp",Bq4(Bdh),"mv",Bq4(AMj)],Eo,0,Bd,[],12,3,0,H$,0,AAC,0,S,[],0,0,0,0,["a19",Bq4(BiS),"r",Bq4(AOJ)],Qs,0,C,[],3,3,0,0,0,TX,0,GX,[],0,3,0,0,["d",Bq3(ANm),"gj",Bq3(A60),"qX",Bq4(Bi2)],Jj,0,C,[IB],0,3,0,0,["nk",Bq5(A62),"U",Bq4(AIf),"gO",Bq3(ARy),"kP",Bq3(A3I),
"vI",Bq6(AVF),"vq",Bq3(A2V),"d8",Bq3(Bhd),"F8",Bq3(Bee)],TM,0,Jj,[],0,3,0,0,["U",Bq4(Bck)],AGz,0,Ci,[],0,3,0,0,0]);
$rt_metadata([ABg,0,C,[],0,3,0,0,0,ABI,0,S,[],0,0,0,0,["IO",Bq6(A1y),"r",Bq4(AYh)],ABP,0,S,[],0,0,0,0,["kN",Bq7(A8K),"r",Bq4(AJ9)],ABK,0,S,[],0,0,0,0,["og",Bq5(AKk),"r",Bq4(Bd$)],ABJ,0,S,[],0,0,0,0,["IO",Bq6(AKw),"r",Bq4(Bah)],ABL,0,S,[],0,0,0,0,["og",Bq5(AKt),"r",Bq4(AQS)],NW,0,C,[],0,3,0,0,0,ABS,0,S,[],0,0,0,0,["q9",Bq6(AOC),"r",Bq4(A6W)],ABO,0,S,[],0,0,0,0,["kN",Bq7(AKU),"r",Bq4(A7C)],ABM,0,S,[],0,0,0,0,["og",Bq5(A25),"r",Bq4(AUf)],S_,0,BO,[],4,0,0,0,["JX",Bq4(ANP),"e",Bq6(Bcc),"x",Bq3(A6N),"V",Bq4(Bet),
"jq",Bq3(AJ7),"bf",Bq4(A1W)],ABQ,0,S,[],0,0,0,0,["q9",Bq6(A9k),"r",Bq4(AZ1)],Ek,0,C,[Cm],0,3,0,Bg,0,Ru,0,BX,[],0,0,0,0,["oA",Bq4(AXQ),"bM",Bq5(AKM),"x",Bq3(ARJ)],D1,0,BX,[],0,0,0,0,["U",Bq4(A1U),"bM",Bq5(Bd6),"cM",Bq6(BbD),"cQ",Bq7(ANf),"x",Bq3(Bg0),"tR",Bq3(A2$),"cj",Bq4(BdL)],Wv,0,C,[B0],1,3,0,0,0,YR,0,Cj,[],0,3,0,0,0,V9,0,C,[],0,3,0,0,["d",Bq3(Bdl)],AJD,0,C,[CA],0,3,0,0,0,Xb,0,C,[BI,Fj],0,3,0,0,0,Xg,0,C,[CA],0,3,0,0,["U",Bq4(AYg),"m3",Bq5(Us),"fl",Bq4(AQK),"OC",Bq5(A9x),"o",Bq4(A1_),"m_",Bq4(Bg1),"H8",Bq5(A1M)],AIo,
0,DQ,[],0,3,0,0,["kD",Bq4(AO7),"nv",function(b,c,d,e,f,g,h){return AX6(this,b,c,d,e,f,g,h);}],X1,0,Ex,[],0,3,0,0,["d",Bq3(ALi),"S6",Bq3(AUN),"Oc",Bq3(BgG),"e9",Bq3(AN4),"uX",Bq3(AVo)],Lu,0,C,[BI],0,3,0,AXM,["H2",Bq7(ADD),"d",Bq3(U5),"n_",Bq7(APs),"TB",Bq4(AUI),"xN",Bq5(A7k),"vd",Bq3(Bbk),"MJ",Bq3(AU5),"M4",Bq4(A_N),"D6",Bq3(Bih),"M7",Bq7(ALp),"MV",Bq7(AZD)],NZ,0,DE,[],0,3,0,BAL,0,AFB,0,EH,[],0,3,0,0,0,ES,0,C,[],4,3,0,Bn7,0,Vs,0,S,[],0,0,0,0,["W7",Bq4(A8Q),"r",Bq4(A8H)],AAS,0,Gt,[],0,0,0,0,["f2",function(b,c,
d,e,f,g){A_1(this,b,c,d,e,f,g);},"wA",Bq4(A6V),"rL",Bq5(A59)],AIw,0,Bz,[],4,0,0,0,["U",Bq4(A84),"e",Bq6(ATa),"bf",Bq4(A80),"x",Bq3(ATZ)],Y8,0,BL,[],0,3,0,0,0,P5,0,C,[],32,0,0,BAT,0,Za,0,BX,[],0,0,0,0,["oA",Bq4(Bbo),"bM",Bq5(A2H),"x",Bq3(Bct)],IQ,0,BV,[],0,3,0,BaE,0,AGl,0,GA,[],0,0,0,0,0,TV,0,Dk,[],0,3,0,0,["d",Bq3(A6R),"mf",Bq3(Bie),"m6",Bq3(Be4)],Fu,0,Bd,[],12,3,0,A2Q,["H7",Bq3(Iu)],AJR,0,C,[],0,3,0,0,0,OP,0,C,[],3,3,0,0,0,ACr,0,C,[OP,HL],0,3,0,0,["d",Bq3(A05),"JG",Bq5(A9d),"LE",Bq5(A67),"c7",Bq5(BeJ)],UO,
0,JN,[],0,3,0,0,0,Ff,0,C2,[],0,0,0,0,["FT",function(b,c,d,e,f){J$(this,b,c,d,e,f);},"e",Bq6(Bi1),"x",Bq3(A0x)],Nz,0,Ff,[],0,0,0,0,["FT",function(b,c,d,e,f){Wo(this,b,c,d,e,f);},"e",Bq6(A36)],ZU,0,C,[],0,3,0,0,0,ABl,0,Kn,[Em,BI,No],0,3,0,0,["d",Bq3(AQa),"U",Bq4(Rw),"hd",Bq4(A39),"o",Bq4(Bd1),"dr",Bq3(BcH),"io",Bq4(A0t),"Om",Bq5(A$H),"m_",Bq4(AXZ)],AD6,"IllegalMonitorStateException",16,Bt,[],0,3,0,0,["d",Bq3(A_6)],AGp,0,Bk,[],4,0,0,0,0,AD2,0,GZ,[],0,0,0,0,["gU",Bq6(AWE),"e",Bq6(AM$)],AGo,0,Bk,[],4,0,0,0,["d",
Bq3(A5c)],TA,0,C,[],4,3,0,0,0]);
$rt_metadata([AGt,0,Bk,[],4,0,0,0,["d",Bq3(Bfl)],AGq,0,Bk,[],4,0,0,0,0,AGn,0,Bk,[],4,0,0,0,0,AGs,0,Bk,[],4,0,0,0,["d",Bq3(AW2)],AGw,0,Bk,[],4,0,0,0,["d",Bq3(AUC)],AFy,0,CW,[],4,3,0,0,0,NS,0,C,[],0,0,0,BoI,0,AGu,0,Bk,[],4,0,0,0,["d",Bq3(BfB)],AGr,0,Bk,[],4,0,0,0,["d",Bq3(ASB)],ABx,0,Bz,[],0,0,0,0,["d",Bq3(BiI),"e",Bq6(AS8),"x",Bq3(BcD),"bf",Bq4(BcM)],ZE,0,GS,[],0,3,0,0,["ty",Bq5(ARz)],LF,0,Ff,[],0,0,0,0,["FT",function(b,c,d,e,f){Wr(this,b,c,d,e,f);},"e",Bq6(ARX)],AEN,0,EN,[],0,3,0,0,0,Di,0,Bd,[],12,3,0,Tf,["H7",
Bq3(Fw)],WS,0,C,[Qs],0,3,0,0,["a2n",Bq4(BcX)],AB$,0,S,[],0,0,0,0,["V6",Bq4(Baa),"r",Bq4(BgN)],VG,0,EN,[],0,3,0,0,0,KL,"NoSuchMethodException",16,DP,[],0,3,0,0,["d",Bq3(A$D)],AFX,0,GP,[],0,0,0,0,["f2",function(b,c,d,e,f,g){A7R(this,b,c,d,e,f,g);},"qN",Bq4(AY6),"oq",Bq5(AL6)],VZ,"NullPointerException",16,Bt,[],0,3,0,0,["bU",Bq4(Bfg),"d",Bq3(ANA)],AC2,0,S,[],0,0,0,0,["VN",Bq4(AQt),"r",Bq4(Bdz)],NL,0,E4,[],0,3,0,0,0,AEy,0,C,[],4,3,0,0,0,T3,0,U,[],0,0,0,0,["d",Bq3(Beb),"Z",Bq3(AVB)],QR,"PatternSyntaxException",12,
Dn,[],0,3,0,0,["Wy",Bq6(AAZ),"nq",Bq3(BhL)],Fe,0,Bd,[],12,3,0,Kd,["ZS",Bq3(RF)],AEB,0,C,[NN],0,3,0,0,["d",Bq3(AXR),"x1",Bq3(A8X),"Ii",Bq3(A6z),"Vb",Bq3(AKN),"Vg",Bq7(ATS),"Uh",Bq3(AUk),"Rr",Bq3(A02)],Yq,0,U,[],0,0,0,0,["d",Bq3(ANV),"Z",Bq3(A69)],I5,0,BV,[],0,3,0,AQU,0,Ey,0,Bd,[],12,3,0,Pj,0,PQ,0,C,[],0,3,0,0,0,AE6,0,ED,[],0,3,0,0,0,WH,0,DE,[],0,3,0,0,0,HO,0,C,[CA],0,3,0,Beo,["d",Bq3(Yo),"m3",Bq5(PV),"kS",Bq4(A56),"ku",Bq4(A9H),"A",Bq5(AYt),"Y",Bq4(A5h),"P",Bq3(A3X),"c_",Bq4(BgO),"j7",Bq4(ACj)],AEt,0,C,[BI],
4,3,0,0,["Yk",Bq4(H3),"ZB",Bq5(OA),"Yt",Bq4(AAY),"Za",Bq3(Kz),"a1h",Bq3(AAK),"ZP",Bq3(AIG),"a1V",Bq3(WM)],H1,0,DD,[],0,3,0,0,0,Tv,0,GZ,[],0,0,0,0,["gU",Bq6(AZl),"e",Bq6(ASO),"V",Bq4(BbN)],AGc,0,R,[],4,0,0,0,["d",Bq3(Bg9)],AFd,0,Bu,[],0,0,0,0,0,AGd,0,R,[],4,0,0,0,["d",Bq3(BbP)],F1,0,C,[BI,Fj],0,3,0,Bmb,["d",Bq3(Pe),"b",Bq3(AVu),"bl",Bq3(AMb),"C",Bq4(Bc4)],AGe,0,R,[],4,0,0,0,["d",Bq3(ATW)],AF_,0,R,[],4,0,0,0,["d",Bq3(A9X)],AGa,0,R,[],4,0,0,0,["d",Bq3(BgD)],Ta,0,C,[],0,3,0,0,0,Yl,0,C,[Fj],0,3,0,0,0,WL,0,Ft,[],
0,3,0,0,["d",Bq3(Bhe),"II",Bq4(A4V)],R0,0,C,[],0,3,0,0,0,M$,0,C,[],0,3,0,0,0,AIR,0,EQ,[B_],0,3,0,0,0]);
$rt_metadata([Wh,0,GW,[],0,3,0,0,0,MR,0,C,[],0,3,0,0,["d",Bq3(A7Z),"Tx",Bq7(A81)],J5,0,S,[],0,0,0,0,["U",Bq4(WB),"r",Bq4(AWo)],AE_,0,J5,[],0,0,0,0,["U",Bq4(AVe),"r",Bq4(Bfj)],T2,"UnmappableCharacterException",14,EA,[],0,3,0,0,["U",Bq4(A$r),"nq",Bq3(AOL)],XY,0,C,[],0,3,0,0,["d",Bq3(AKd)],Zs,0,E1,[],0,0,0,0,["zN",Bq5(A9_)],NX,0,HZ,[],0,3,0,0,0,S4,0,Dy,[],0,3,0,0,0,Vt,0,S,[],0,0,0,0,["Zw",Bq4(A3M),"r",Bq4(ALG)],ADv,0,U,[],0,0,0,0,["d",Bq3(ALf),"Z",Bq3(AO9)],Gj,0,Bd,[],12,3,0,HJ,0,J3,0,C,[],1,3,0,0,["d",Bq3(AE0)],UQ,
0,C_,[],1,3,0,0,0,PG,0,EF,[Cm],0,3,0,QC,0,Mp,0,HI,[],0,3,0,BhX,["d",Bq3(AEP),"bJ",Bq4(Vk)],UM,0,C,[PC],0,3,0,0,["d",Bq3(A1o),"Jh",Bq5(ATd)],Xv,0,C,[],0,0,0,0,["U",Bq4(ASz),"o$",Bq5(ARV),"b_",Bq4(Bao)],V4,0,CH,[],0,3,0,0,0,Kj,0,Cn,[],0,3,0,0,0,ADs,0,Kj,[],0,0,0,0,0,N3,0,HN,[],0,3,0,AMz,["Xd",Bq4(Wd),"bJ",Bq4(AGN)],Du,0,Bd,[],12,3,0,A61,0,AHU,0,U,[],0,0,0,0,["d",Bq3(A4H),"Z",Bq3(BbU)],ABr,0,EH,[],0,3,0,0,0,UH,0,J3,[],0,3,0,0,["bU",Bq4(ALM),"KI",Bq3(A3r)],Nl,0,C,[],3,3,0,0,0,ACV,0,S,[],0,0,0,0,["XQ",Bq4(A04),"r",
Bq4(BaD)],SU,0,S,[],0,0,0,0,["WZ",Bq5(A1b),"r",Bq4(ATH),"b",Bq3(A9i)],AAa,0,C2,[],0,0,0,0,["gU",Bq6(AZk),"e",Bq6(A6P)],YI,0,C,[],0,3,0,0,["W1",Bq7(AKu)],R$,0,CT,[],0,3,0,0,0,Dj,0,BV,[],0,3,0,Ct,["HP",Bq4(K7),"Yx",Bq5(LG),"a1W",function(b,c,d,e,f){P_(this,b,c,d,e,f);},"Xt",Bq4(AF7),"p1",Bq3(AQV),"bl",Bq3(A0K)],SR,0,S,[],0,0,0,0,["og",Bq5(Bej),"r",Bq4(AN5)],SS,0,S,[],0,0,0,0,["og",Bq5(AUQ),"r",Bq4(A8Y)],ST,0,S,[],0,0,0,0,["kN",Bq7(AOg),"r",Bq4(Bjg)],Ti,0,S,[],0,0,0,0,["kN",Bq7(A8S),"r",Bq4(AQW)],SV,0,S,[],0,0,
0,0,["kN",Bq7(A7J),"r",Bq4(A5q)],SW,0,S,[],0,0,0,0,["kN",Bq7(AK5),"r",Bq4(AW1)],SX,0,S,[],0,0,0,0,["q9",Bq6(AV0),"r",Bq4(ASE)],SQ,0,S,[],0,0,0,0,["q9",Bq6(Bap),"r",Bq4(BfT)],Px,0,Fb,[],0,3,0,0,0,AFC,0,FQ,[Gy],0,3,0,0,["U",Bq4(AST),"d",Bq3(BhR),"c0",Bq4(BaU),"a",Bq4(AKO),"h",Bq4(AVk),"uY",Bq4(A9s),"b$",Bq4(AQ8),"ba",Bq4(AKB),"LJ",Bq6(AOj),"rQ",Bq4(Be8),"Mh",Bq4(A45),"M3",Bq5(A8A),"Uz",Bq5(Bfu),"Oy",Bq7(BdS),"S5",Bq5(Bii),"Iu",Bq5(BbA),"N0",Bq5(AVW),"Pm",Bq5(A0y),"G8",Bq4(AZa),"ID",Bq5(A_l),"cm",Bq5(Bhh),"vD",
Bq4(A_s),"qg",Bq7(APx),"en",Bq5(BdZ),"vL",Bq7(A_d),"uZ",Bq6(AOZ),"k",Bq3(A5a),"b",Bq3(AM0),"hd",Bq4(ATq),"yW",Bq5(ATA),"ye",Bq5(BaR),"wm",Bq5(Bad),"EJ",Bq5(A9E),"FN",Bq5(ANz),"lx",Bq5(A2d)],AIB,"ConcurrentModificationException",11,Bt,[],0,3,0,0,["d",Bq3(A1X)],RR,0,C,[KM],0,0,0,0,["d",Bq3(ATk)],W3,0,EL,[],0,3,0,0,0,RQ,0,C,[HH],0,0,0,0,["d",Bq3(A5F)],AAR,0,KI,[],0,3,0,0,0,AGA,0,BL,[],0,3,0,0,0,Z3,0,GK,[],0,3,0,0,0]);
$rt_metadata([L2,0,C,[CA,Cm],4,3,0,0,["VK",Bq4(BaL),"a1$",Bq4(Ez),"dr",Bq3(C6),"WX",Bq4(CE),"C",Bq4(Qt),"Pl",Bq3(Ku),"a0o",Bq3(Qn)],AJQ,0,C,[B_],0,3,0,0,["a1j",Bq6(Yp),"d",Bq3(Bh$),"r6",Bq4(Bbf),"dE",Bq3(A$k),"N",Bq3(BeO),"ER",Bq5(AZs)],SL,0,C,[],0,3,0,0,0,RX,0,C,[BI],0,3,0,0,0,AAP,0,C,[Nl],0,3,0,0,["Xr",Bq4(A2O),"gj",Bq3(A2p),"w0",Bq3(A0P),"bk",Bq3(ATM),"bj",Bq3(AYY),"yz",Bq3(BcT),"GE",Bq3(Bb8),"Ha",Bq3(BiJ),"Q2",Bq3(A3i),"Hx",Bq3(A4B),"PH",Bq4(AOE),"x0",Bq5(AS$),"zA",Bq5(AM3),"u0",Bq4(ALk),"w8",Bq3(A_Z)],P3,
0,C,[],0,3,0,0,0,X0,0,U,[],0,0,0,0,["d",Bq3(AMp),"Z",Bq3(APy)],FE,"GlyphLayout",9,C,[De],0,3,0,Eh,["d",Bq3(AJa),"a2r",Bq5(SM),"Xq",function(b,c,d,e,f,g){Xq(this,b,c,d,e,f,g);},"a0R",function(b,c,d,e,f,g,h,i,j){AHC(this,b,c,d,e,f,g,h,i,j);},"PV",Bq5(BeN),"Tg",function(b,c,d,e,f,g){Ban(this,b,c,d,e,f,g);},"qt",function(b,c,d,e,f,g,h,i,j){AOq(this,b,c,d,e,f,g,h,i,j);},"f9",Bq3(BfO),"b",Bq3(AVY)],Gd,0,Bd,[],12,3,0,VE,0,MD,0,C,[],0,3,0,0,0,AGF,0,FL,[],0,0,0,0,0,N$,0,C,[],0,3,0,0,["d",Bq3(Bir),"T6",Bq3(BfX),"SG",
Bq3(AXS),"E7",Bq4(AMZ),"Ax",Bq4(Bd8),"H9",Bq3(A2M),"Lp",Bq3(BdE),"UI",Bq4(ATG),"KJ",Bq4(ALC),"QI",Bq5(AWK),"HC",Bq4(A$L),"sv",Bq3(Baf),"yK",Bq3(Bg3),"wi",Bq3(A8g),"Qj",Bq4(Beg)],Rx,0,C,[],0,3,0,0,0,AAL,0,F$,[Em],0,0,0,0,["f8",Bq5(ASd),"jB",Bq3(A9h),"i4",Bq3(Bgr),"b",Bq3(BbJ)],AAD,0,S,[],0,0,0,0,["Zm",Bq4(AYQ),"r",Bq4(A4R)],Xu,0,C,[PJ],0,3,0,0,["d",Bq3(Ba2),"Tw",Bq4(A7K)],PR,0,C,[],3,3,0,0,0,Nb,0,Ia,[],0,3,0,AN1,["d",Bq3(V5),"bJ",Bq4(AJg)],AC0,0,C,[],4,0,0,0,0,WQ,0,DT,[],0,3,0,0,0,SI,0,S,[],0,0,0,0,["a2j",Bq4(AUr),
"r",Bq4(AWj)],ADW,0,CY,[],0,0,0,0,["lP",Bq6(A2r),"e",Bq6(AWs)],AFu,0,C,[],0,3,0,0,["d",Bq3(AZz)],ADz,0,C,[],4,3,0,0,0,ZV,0,C,[Fj],0,3,0,0,0,AIb,0,CW,[],4,3,0,0,0,Jo,0,C,[B_],0,3,0,IN,["a1O",Bq7(AIN),"YZ",Bq7(ADF),"Zz",function(b,c,d,e,f){Pm(this,b,c,d,e,f);},"XE",function(b,c,d,e,f){QY(this,b,c,d,e,f);},"wN",Bq6(AXx),"RA",Bq4(ANL),"S0",Bq6(ARY),"gO",Bq3(APc),"hi",Bq3(BhJ),"nB",Bq3(A0u),"yC",Bq3(Bft),"Nz",Bq4(AOH),"iD",Bq5(AYF),"MQ",Bq4(BeZ),"g6",Bq5(ALP),"MB",Bq5(A8F),"RC",Bq7(A2o),"vr",function(b,c,d,e,f){
BaS(this,b,c,d,e,f);},"kc",Bq4(Bci),"fp",Bq3(A6T),"B$",Bq3(AS4)],ABs,0,C,[CA],0,3,0,0,0,AIO,0,Bz,[],0,0,0,0,["d",Bq3(ASm),"e",Bq6(Bcn),"bf",Bq4(A2D),"x",Bq3(AQO)],AHf,0,C,[CA],0,3,0,0,["d",Bq3(A_J),"m3",Bq5(AEg),"kS",Bq4(AUp),"ku",Bq4(A6S),"gP",Bq5(AYG),"uJ",Bq5(A5N),"j7",Bq4(Yu)],AJK,0,C,[Pb],0,0,0,0,["Af",Bq4(AYN),"Oa",Bq6(A7F),"a0n",Bq6(Bdp)],AI0,0,Gv,[],0,0,0,0,["xE",Bq5(A$b),"a1d",function(b,c,d,e,f,g,h){RP(this,b,c,d,e,f,g,h);},"AX",Bq4(AKm),"U$",Bq3(AUq),"ci",Bq3(AZ7),"xn",Bq3(BiB),"Th",Bq4(BfC),"Og",
Bq5(AQs),"Ae",Bq3(A15),"tO",Bq3(AVa)],PE,0,C,[B0],3,3,0,0,0,AJH,0,C,[PE],0,0,0,0,["Af",Bq4(Bgh),"Ki",function(b,c,d,e,f){Ba$(this,b,c,d,e,f);},"ZD",function(b,c,d,e,f){return AVx(this,b,c,d,e,f);}],AJJ,0,C,[Qr],0,0,0,0,["Af",Bq4(A9q),"Lx",Bq3(AUw),"a0j",Bq3(AQ7)],NR,0,C,[BI],0,3,0,0,["ZG",Bq5(AQy),"iT",Bq6(A_S)],AAV,0,C,[],0,3,0,0,["d",Bq3(BfR)],MU,0,C,[],3,3,0,0,0,HG,0,C,[],0,3,0,ASw,["d",Bq3(AAQ),"Cs",Bq4(Bce)],Pu,0,C,[BI],0,3,0,Bo5,["Qr",Bq5(AIW)],AH7,0,Cz,[],0,0,0,0,0,AIk,0,BE,[],0,3,0,0,0,AH8,0,Cz,[],0,
0,0,0,0,T$,"BufferUnderflowException",14,Bt,[],0,3,0,0,["d",Bq3(BhD)],AGZ,0,C,[],0,3,0,0,0,Zb,0,Bk,[],4,0,0,0,["d",Bq3(A30)],Zc,0,Bk,[],4,0,0,0,["d",Bq3(ARg)],Yh,0,C,[B0],1,3,0,0,0,Zd,0,Bk,[],4,0,0,0,["d",Bq3(A0c)],Ze,0,Bk,[],4,0,0,0,["d",Bq3(AYq)]]);
$rt_metadata([Xf,0,Bu,[],0,0,0,0,0,Zf,0,CF,[],4,0,0,0,["d",Bq3(A9f)],OX,0,C,[],32,0,0,Bqg,0,AD0,0,C,[],0,3,0,0,["d",Bq3(BdU),"hm",Bq3(AKE),"Ky",Bq3(A4y),"Uo",Bq4(A34),"Md",Bq3(ANs),"Q8",Bq5(BfH),"M9",Bq7(ARI),"Nu",Bq7(A0O),"Ea",function(b,c,d,e,f){return AZv(this,b,c,d,e,f);},"MU",function(b,c,d,e,f,g){return Bag(this,b,c,d,e,f,g);}],MK,0,C,[],3,3,0,0,0,AIq,0,C,[B0],1,3,0,0,0,ON,0,C,[],0,3,0,0,0,P8,0,C,[],3,3,0,0,0,Z4,0,J8,[],0,3,0,0,["WM",Bq5(TI),"Mz",Bq4(AMT),"iL",Bq7(ARU),"h_",Bq7(A$g),"KZ",Bq6(A7u),"jw",
Bq6(AR1),"pp",Bq5(A0m),"AG",Bq4(Bab),"QM",Bq4(A0r),"mb",Bq4(ALh),"pl",Bq4(A$5)],HB,0,C,[],4,3,0,0,0,P0,0,C,[],0,3,0,0,0,Zt,0,C,[],0,0,0,0,["d",Bq3(AKz),"wj",Bq6(AUU),"DQ",Bq6(AT8),"OF",Bq3(A$6),"Vy",Bq3(Bdm)],AJB,0,Cz,[],0,0,0,0,["a2o",Bq4(Bda),"ft",Bq3(Bcs)],ACI,0,U,[],0,0,0,0,["d",Bq3(AMP),"Z",Bq3(A1f)],AFr,0,C,[JY],4,3,0,0,["Yr",Bq5(ADx),"V1",Bq3(AHT),"Zr",Bq4(AIu),"a0T",Bq4(AJi),"DE",Bq4(Hv),"WQ",Bq4(Lz),"ZW",Bq3(Hm),"l8",Bq4(ZZ),"pY",Bq4(RV),"xU",Bq3(N2),"qB",Bq3(Pa),"mc",Bq3(R_),"ZO",Bq5(AKc)],YL,0,BO,
[],0,0,0,0,["d",Bq3(Bb5),"e",Bq6(A1G),"x",Bq3(AOU),"V",Bq4(A5D),"jq",Bq3(BbY),"bf",Bq4(A5A)],Tq,0,C,[HE],0,3,0,0,0,AAb,0,U,[],0,0,0,0,["d",Bq3(AXC),"Z",Bq3(A2U)],OR,0,BO,[],0,0,0,0,["Yh",Bq5(A3z),"V",Bq4(AUg),"x",Bq3(AX1),"e",Bq6(AKl),"cj",Bq4(A5B),"bf",Bq4(AZG)],Pp,0,C,[],0,3,0,0,0,SN,0,Cj,[],0,3,0,0,0,IG,"GlyphLayout$GlyphRun",9,C,[De],0,3,0,0,["d",Bq3(A8$),"f9",Bq3(AS6),"b",Bq3(ALx)],Oz,0,DP,[],0,3,0,0,0,AHL,0,Cc,[],0,0,0,0,["Xu",Bq4(A6C),"ez",Bq4(A2A),"cs",Bq4(AOM),"cB",Bq5(Bgw)],Ql,0,Fb,[],0,3,0,0,0,Fr,
0,Bd,[],12,3,0,Bk8,0,ZX,0,C,[B_],0,3,0,0,["d",Bq3(AKv),"P_",Bq4(Bgp)],TO,0,Bz,[],0,0,0,0,["bJ",Bq4(ASD),"e",Bq6(A5f),"bf",Bq4(A5x),"x",Bq3(BiY)],IA,0,BV,[],0,3,0,BlY,0,AD7,0,C,[E7],0,0,0,0,0,Sh,0,Ex,[],4,0,0,0,["d",Bq3(AV9)],Sm,0,Ex,[],4,0,0,0,["d",Bq3(A9I),"a1u",Bq3(AEK),"uX",Bq3(ATJ)],AHb,0,C,[],4,3,0,0,0,DR,0,C,[MU],1,3,0,0,0,Um,0,DR,[],0,0,0,0,0,Ui,0,JR,[],0,0,0,0,0,Uj,0,DR,[],0,0,0,0,0,Uk,0,DR,[],0,0,0,0,0,Ul,0,DR,[],0,0,0,0,0,Wc,0,Bu,[],0,0,0,0,0,L5,0,C,[],3,3,0,0,0,Sc,0,C,[B0,Qh,L5,IM],1,3,0,0,["a1J",
Bq5(AT5),"a2y",Bq5(AUz),"Zs",Bq4(ALX),"XJ",Bq6(AV$),"WU",Bq4(A0z),"a0G",Bq3(ANu),"Z4",Bq6(AKA)],Df,0,C,[De],0,3,0,BB8,0,R7,0,C,[],0,0,0,0,0,AHd,0,BL,[],0,3,0,0,0,Yr,0,GJ,[B_],0,3,0,0,0,AGH,0,EV,[],0,0,0,0,["lP",Bq6(A8D),"e",Bq6(ALI)],AG8,0,U,[],0,0,0,0,["d",Bq3(AMw),"Z",Bq3(AR8)],AFT,0,C,[],0,0,0,0,["a04",Bq5(AOT),"b",Bq3(ATU)],AJO,0,JA,[],0,0,0,0,0]);
$rt_metadata([ADJ,0,BL,[],0,3,0,0,0,D0,"NumberFormatException",16,Dn,[],0,3,0,0,["d",Bq3(A4p),"bU",Bq4(ATE)],AJs,0,C0,[],0,0,0,0,0,Vj,0,Cj,[],0,3,0,0,0,ADk,0,C,[HH,CA],0,3,0,0,["NF",Bq5(AVj),"bG",Bq3(A$V),"bD",Bq3(A6y)],AHs,0,K_,[],0,0,0,0,["Zh",function(b,c,d,e,f){Bf6(this,b,c,d,e,f);}],ABq,0,C,[],0,0,0,0,0,WX,0,U,[],0,0,0,0,["d",Bq3(AUF),"Z",Bq3(AXN)],AHm,0,U,[],0,0,0,0,["d",Bq3(AU2),"Z",Bq3(A2I)],AEk,0,C,[De],0,3,0,0,["d",Bq3(Bi3),"f9",Bq3(AWL),"dY",Bq7(ATs),"oI",Bq5(ATL)],AGb,0,C,[],0,3,0,0,["a2C",Bq5(BgJ)],AC5,
0,CW,[],4,3,0,0,0,R2,0,EH,[],0,3,0,0,0,Rj,0,HR,[],0,3,0,0,["d",Bq3(YB),"Hj",Bq4(BfM),"Pf",Bq4(A14),"Fs",Bq4(AT9),"Vr",Bq4(A4w),"CH",Bq4(AOb)],K6,0,BO,[],0,0,0,0,["oA",Bq4(AV3),"V",Bq4(A5Q),"e",Bq6(AKx),"cM",Bq6(Bc7),"cQ",Bq7(AYa),"x",Bq3(Bib),"cj",Bq4(AOy),"bf",Bq4(Bdf)],Kx,"Table$DebugRect",7,F1,[],0,3,0,BmS,["d",Bq3(Wn)],ABe,0,F0,[],0,3,0,0,["B7",Bq7(ALm)],AEr,0,C,[MK],0,0,0,0,["a2z",Bq4(A0W),"op",Bq4(A$8),"S2",Bq4(A1u)],Id,0,C,[],0,3,0,0,["d",Bq3(ARp),"nk",Bq5(Y0),"ji",Bq4(A$R),"b_",Bq4(AYP),"P",Bq3(A8f),
"JQ",Bq3(AVw),"Tu",Bq4(AVQ),"u3",Bq4(AMh),"bl",Bq3(ATX),"C",Bq4(BgP),"b",Bq3(A_E)],UK,0,HO,[],0,3,0,0,0,Jz,0,C,[Me,E7],0,3,0,0,["Xx",Bq5(AH9),"ft",Bq3(A_2),"LN",Bq3(AU0),"rp",Bq5(AMO),"wd",Bq3(Bcp),"PS",Bq4(Baj),"SU",Bq4(ASk)],DG,0,Iz,[],0,3,0,Db,["Wd",Bq5(ACq),"YE",Bq6(Oe),"a1c",function(b,c,d,e,f){Mq(this,b,c,d,e,f);},"Y3",Bq6(OH),"Ga",Bq3(A5R),"vO",Bq4(BaK),"C",Bq4(Bdy),"T4",Bq4(A0Y),"EY",Bq5(AOa),"AD",Bq5(Bid),"N",Bq3(ALo),"KK",Bq4(A_p),"MX",Bq5(Bac)],ME,0,Eq,[],0,3,0,0,["d",Bq3(Bdr),"M6",Bq4(A_o),"JC",
function(b,c,d,e,f,g){return Bcm(this,b,c,d,e,f,g);},"TS",function(b,c,d,e,f,g,h,i,j,k,l,m){return BhM(this,b,c,d,e,f,g,h,i,j,k,l,m);},"KR",Bq4(ASY)],PI,0,CH,[Fl],0,3,0,BCV,0,ACJ,0,C,[P8],0,3,0,0,["d",Bq3(APg),"rp",Bq5(A_P)],Om,"IllegalAccessException",16,DP,[],0,3,0,0,["d",Bq3(Bgv)],Yk,0,EL,[],0,3,0,0,0,MZ,0,C,[],0,3,0,0,0,AEv,0,CF,[],0,0,0,0,0,Vh,0,C,[Kt],0,0,0,0,["Wo",Bq4(A4s),"q$",Bq3(A1D),"MF",Bq3(ASG)],Vl,0,BL,[],0,3,0,0,0,Sn,0,C,[],3,3,0,0,0,AF$,0,Fx,[],0,3,0,0,0,AFI,0,C,[],0,3,0,0,["d",Bq3(A0g),"nk",
Bq5(AHg),"cl",Bq4(A_$),"P",Bq3(A0C),"Tv",Bq4(A4$),"Eo",Bq4(A7n)],XU,0,C,[],4,3,0,0,0,AEz,0,C,[],0,3,0,0,0,Ec,0,Bd,[],12,3,0,JD,0,AFK,0,Bz,[],0,0,0,0,["U",Bq4(A9O),"e",Bq6(AV5),"bf",Bq4(A8L),"x",Bq3(AK8)],DU,0,BV,[],0,3,0,Cf,["HP",Bq4(Ls),"a0J",Bq5(Md),"YM",function(b,c,d,e,f,g,h){QO(this,b,c,d,e,f,g,h);},"Zv",Bq5(AFj),"WK",Bq4(AJU),"p1",Bq3(Bec),"bl",Bq3(A2t)],Bo,0,C,[],0,3,0,Bpz,0,AFg,0,DX,[],0,3,0,0,0,TQ,0,CF,[],4,0,0,0,["d",Bq3(A8z)],AB5,0,Cx,[],4,0,0,0,["d",Bq3(BhZ),"bo",Bq7(AY_)],AB2,0,Cx,[],4,0,0,0,["d",
Bq3(A3c),"bo",Bq7(AWf)],AB4,0,Cx,[],4,0,0,0,["d",Bq3(AKP),"bo",Bq7(Bf5)],Sl,0,C,[PW],0,3,0,0,0,AB0,0,Cx,[],4,0,0,0,["d",Bq3(AZ5),"bo",Bq7(Bbc)],AB1,0,Cx,[],4,0,0,0,["d",Bq3(AMH),"bo",Bq7(ALy)],ABY,0,Cx,[],4,0,0,0,["d",Bq3(A9G),"bo",Bq7(Bdx)],X2,0,C,[Oa],4,3,0,0,["f8",Bq5(BhV),"gs",Bq6(AD$),"hm",Bq3(A85),"N",Bq3(ARr),"gV",Bq4(ALY)]]);
$rt_metadata([ABZ,0,Cx,[],4,0,0,0,["d",Bq3(A0b),"bo",Bq7(A0V)],ABW,0,Ba,[],4,0,0,0,["d",Bq3(BbL),"bo",Bq7(AMN)],ABX,0,Ba,[],4,0,0,0,["d",Bq3(ARF),"bo",Bq7(APb)],VB,0,BL,[],0,3,0,0,0,ADi,0,U,[],0,0,0,0,["d",Bq3(A1l),"Z",Bq3(A0L)],UF,0,C,[De],4,3,0,0,0,QT,0,C,[],0,3,0,0,0,Z1,0,C,[PR],0,3,0,0,["WW",Bq4(Ba1),"vB",Bq4(A9B),"NZ",Bq4(A11),"KC",Bq4(AUR),"sx",Bq4(BcR),"tC",Bq5(AS0),"T_",Bq5(ARR),"Gw",Bq4(AVM),"xs",Bq7(Bh0),"L4",Bq4(AL9),"wT",Bq4(BhI),"lj",Bq4(A9n),"MZ",Bq5(A5P),"ew",Bq4(A_0),"yB",Bq6(BiL),"Rh",Bq7(Bc2),
"pP",Bq4(A19),"LR",Bq3(A9r),"Sr",Bq5(A72),"IZ",Bq5(A2y),"k3",function(b,c,d,e,f,g,h,i,j){ARf(this,b,c,d,e,f,g,h,i,j);},"S_",Bq6(BdA),"pq",Bq7(A6r),"yH",Bq5(ATc),"dj",Bq5(AWm),"MR",Bq7(A8p),"fQ",Bq7(A7L),"rc",Bq7(AUG),"KX",Bq4(AP7),"Qx",Bq3(AOc),"Sx",Bq4(A97),"y8",Bq4(AYj),"Tm",Bq7(BdO),"U7",Bq4(AZE),"jp",Bq3(A76),"yy",Bq4(Bc1),"T$",Bq7(AVR),"UF",Bq7(AKX),"E2",Bq5(AQq),"Qc",Bq5(ATz),"ra",Bq6(ARn),"B2",Bq4(A7s),"RE",Bq6(BcZ),"RQ",Bq4(Bip),"Cw",Bq5(AOn),"OH",Bq4(A2J),"Vc",Bq5(A4b),"jG",Bq6(AV8),"Qp",Bq5(A4u),"Eg",
Bq5(AWD),"S4",Bq6(ATN),"Jj",Bq7(A8J),"HZ",Bq7(A6H),"IU",function(b,c,d,e,f){ALl(this,b,c,d,e,f);},"LG",function(b,c,d,e,f){AYS(this,b,c,d,e,f);},"zJ",function(b,c,d,e,f){A9y(this,b,c,d,e,f);},"M_",Bq4(A$F),"TE",function(b,c,d,e,f,g){Bhl(this,b,c,d,e,f,g);}]]);
function $rt_array(cls,data){this.bB=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["Can\'t enter monitor from another thread synchronously","<java_object>@","bounces cannot be < 2 or > 5: ","Constructor not found for class: ","Security violation occurred while getting constructor for class: \'","\'.","Security violation while getting constructor for class: ","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ",
"String is null or empty","Illegal radix: ","Replacement preconditions do not hold","Action must be non-null","Bullet","Disposing "," while it still has "," references.","(",",",")","java.runtime.name","Android","os.name","Mac","Windows","Linux","Unsupported asset type ","Loading asset : ","Loading script : ","Desktop","HeadlessDesktop","Applet","WebGL","iOS","<",":",">","CI sequence: ","listener cannot be null.","\tat ","Caused by: ","objects cannot be null.","fSet","BehindFSet","JointSet","range:"," ","^ ",
"<GroupQuant>","null","false","true","Index out of bounds","New position "," is outside of range [0;","]","New limit ","","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart",
"Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics",
"Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics",
"BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo",
"HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks",
"CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","FILL","STROKE","must be non-negative","AheadFSet","NonCapJointSet","PosLookaheadJointSet","NegLookaheadJointSet","charsetName is null","Should never been thrown","ErrorLoading: ","\n","i","b","a","Invalid assets description file.",
"PosBehindJointSet","US-ASCII","-2147483648","GL_EXT_texture_filter_anisotropic","New data must have the same managed status as the old data","decomposed char:","mousedown","mouseup","mousemove","wheel","touchstart","touchmove","touchcancel","touchend","keydown","keypress","keyup","CSS1Compat","NegBehindJointSet","Index ","0","<Quant>","javaClass@","<init>","object cannot be null.","Capacity is negative: ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","The last char in src ",
" is outside of string of size ","Start "," must be before end ","mtl","GL_ARB_framebuffer_object","GL_EXT_framebuffer_object","texture width and height must be square when using mipmapping.","The last float in src ","start + count must be <= size: "," + "," <= ","index can\'t be >= size: "," >= ","index can\'t be > size: "," > ","end can\'t be >= size: ","start can\'t be > end: ","Array is empty.","additionalCapacity must be >= 0: ","newSize must be >= 0: ","[]",", ","AtomicFSet","touchDown","touchUp","touchDragged",
"mouseMoved","enter","exit","scrolled","keyDown","keyUp","keyTyped","none","table","cell","actor","UTF-8","<MultiLine $>","Call end() before beginning a new shape batch.","begin must be called first.","Must call begin(ShapeType.",").",") or begin(ShapeType.","Class cannot be created (missing no-arg constructor): ","Unable to create new instance: ","OnPlane","Back","Front","The last short in src ","Can\'t have more than 8191 sprites per batch: ","a_position","a_color","a_texCoord0","attribute vec4 a_position;\nattribute vec4 a_color;\nattribute vec2 a_texCoord0;\nuniform mat4 u_projTrans;\nvarying vec4 v_color;\nvarying vec2 v_texCoords;\n\nvoid main()\n{\n   v_color = a_color;\n   v_color.a = v_color.a * (255.0/254.0);\n   v_texCoords = a_texCoord0;\n   gl_Position =  u_projTrans * a_position;\n}\n",
"#ifdef GL_ES\n#define LOWP lowp\nprecision mediump float;\n#else\n#define LOWP \n#endif\nvarying LOWP vec4 v_color;\nvarying vec2 v_texCoords;\nuniform sampler2D u_texture;\nvoid main()\n{\n  gl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n}","Error compiling shader: ","SpriteBatch.end must be called before begin.","SpriteBatch.begin must be called before end.","SpriteBatch.begin must be called before draw.","u_projTrans","u_texture","error","Cannot register an uniform after initialization","Already initialized",
"Malformed input of length ","NearestNeighbour","BiLinear","shininess","alphaTest","offset + length must be <= size: ","com/badlogic/gdx/utils/arial-15.fnt","com/badlogic/gdx/utils/arial-15.png","If no regions are specified, the font data must have an images path.","CI back reference: ","loadFactor must be > 0 and < 1: ","The specified font must contain at least one texture page.","UCI sequence: ","CompositeRangeSet:  <nonsurrogate> "," <surrogate> ","FinalSet","<Empty set>","cullface","texture cannot be null.",
"data/badlogic.jpg","ground","ID: ","\nFPS: ","\nTotal Boxes: ","\nBullet Version: ","\nInputs: Enter for fullscreen, Space to un/freeze simulation\nHold Left/Right mouse to manipulate camera","Libgdx teaVM Backend + teaVM Bullet Extension by xpenatan","HIT Body:","�","averageCharsPerByte must be positive. Actual value is ","maxCharsPerByte must be positive. Actual value is ","newAction must be non-null","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/","==","=","enabled","disabled","childrenOnly",
"^","IndexBufferObject cannot be used after it has been disposed.","PreviousMatch","NonCapFSet","UCI ","Already loaded.","File is empty.","padding=","Invalid padding.","Missing common header.","Invalid common header.","lineHeight=","Missing: lineHeight","base=","Missing: base","pages=","Missing additional page definitions.",".*id=(\\d+)",".*file=\"?([^\"]+)\"?","\\\\","/","Missing: file","Page IDs must be indices starting at 0: ","Invalid page id: ","kernings ","metrics ","char "," =","kerning ","Error loading font file: ",
"No glyphs found.","UCI range:","keyboard","scroll","Asset loaded: ","data:",";base64,","a_normal","Call end() first","Cannot build mesh without position attribute","Call begin() first","Mesh attributes don\'t match","Mesh can\'t hold enough vertices: "," * "," < ","Mesh can\'t hold enough indices: ","Too many vertices used","Incorrect primitive type","Script loaded: ","Can\'t invert a singular matrix","The same task may not be scheduled twice.","unable to provide a shader for this renderable","The last byte in dst ",
"The last byte in src ","<SOL>","directionalLights","Exception occurred in constructor for class: ","Illegal argument(s) supplied to constructor for class: ","Could not instantiate instance of class: ","IDLE","QUEUE_ASSETS_LOADED","INIT_SOUND","APP_CREATE","APP_READY","public","protected","private","abstract","static","final","transient","volatile","synchronized","native","strictfp","interface","<EOL>","Is","In","main","Task failed: ","UCI back reference: ","BIG_ENDIAN","LITTLE_ENDIAN","Pixmap","Custom","<DotAllQuant>",
"Lambert","Phong","CLEAR","BLACK","WHITE","LIGHT_GRAY","GRAY","DARK_GRAY","BLUE","NAVY","ROYAL","SLATE","SKY","CYAN","TEAL","GREEN","CHARTREUSE","LIME","FOREST","OLIVE","YELLOW","GOLD","GOLDENROD","ORANGE","BROWN","TAN","FIREBRICK","RED","SCARLET","CORAL","SALMON","PINK","MAGENTA","PURPLE","VIOLET","MAROON","FileType \'","\' not supported in Dragome backend","Couldn\'t load image \'","\', file does not exist","rgba(","environmentCubemap","Already prepared","Call prepare() before calling getPixmap()","This TextureData implementation does not upload data itself",
"blended","u_sampler","a_texCoord","u_projModelView","attribute vec4 a_position;\n","attribute vec3 a_normal;\n","attribute vec4 a_color;\n","attribute vec2 a_texCoord",";\n","uniform mat4 u_projModelView;\n","varying vec4 v_col;\n","varying vec2 v_tex","void main() {\n   gl_Position = u_projModelView * a_position;\n","   v_col = a_color;\n   v_col.a *= 255.0 / 254.0;\n","   v_tex"," = ","   gl_PointSize = 1.0;\n}\n","#ifdef GL_ES\nprecision mediump float;\n#endif\n","uniform sampler2D u_sampler","void main() {\n   gl_FragColor = ",
"vec4(1, 1, 1, 1)","v_col"," texture2D(u_sampler",",  v_tex",") *",";\n}","Comparison method violates its general contract!","fromIndex(",") > toIndex(","canvas","sequence: ","Bullet binaries version (",") does not match source version (","IGNORE","REPLACE","REPORT","back reference: ","<DotQuant>","COPY","copy","DESTINATION_ATOP","destination-atop","DESTINATION_IN","destination-in","DESTINATION_OUT","destination-out","DESTINATION_OVER","destination-over","LIGHTER","lighter","SOURCE_ATOP","source-atop","SOURCE_IN",
"source-in","SOURCE_OUT","source-out","SOURCE_OVER","source-over","XOR","xor","both","top","bottom","\' Not supported in Dragome backend"," does not exist","Error reading file: ","\\","vertex shader must not be null","fragment shader must not be null","Fragment shader:\n","Vertex shader\n","An attempted fetch uniform from uncompiled shader \n","No uniform with name \'","\' in shader","Classpath","Internal","External","Absolute","Local","No buffer allocated!",".","CI ","UTF-16","UTF-16BE","UTF-16LE","pointLights",
"ISO-8859-1","MirroredRepeat","ClampToEdge","Repeat","posFSet","Nearest","Linear","MipMap","MipMapNearestNearest","MipMapLinearNearest","MipMapNearestLinear","MipMapLinearLinear","Point","Line","Filled","depthStencil","VertexArray","VertexBufferObject","VertexBufferObjectSubData","VertexBufferObjectWithVAO","key cannot be null.","Patter is null","\\Q","\\E","\\\\E\\Q","[","Unmappable characters of length ","None","SourceOver","Intensity","LuminanceAlpha","RGB565","RGBA4444","RGB888","RGBA8888","Invalid type specified",
"diffuseColor","specularColor","ambientColor","emissiveColor","reflectionColor","ambientLightColor","fogColor","attributes must be >= 1","Call end() first.","Logical","Pixels","Could not remove child from its current parent","Cannot add a parent as a child","{","}","scripts/bullet.js","scripts/bullet.wasm.js","scripts/bullet.wasm.wasm","Mesh attempting to access memory outside of the index buffer (count: ",", offset: ",", max: ","capacity must be >= 0: ","The required capacity is too large: ","EOI","node","box",
"Either src or dest is null","java.version","1.8","TeaVM","file.separator","path.separator","line.separator","java.io.tmpdir","java.vm.version","user.home","/tmp","DotAll","decomposed Hangul syllable:",", #","Enabled","EnabledUntilCycleEnd","Disabled","WordBoundary","spotLights","data must be a ByteBuffer or FloatBuffer","#iterator() cannot be used nested.","OS X","no OS",".html","index.html","index-debug.html","assets/","assets.txt","scripts/soundmanager2-jsmin.js","com/badlogic/gdx/graphics/g3d/shaders/default.vertex.glsl",
"com/badlogic/gdx/graphics/g3d/shaders/default.fragment.glsl","u_dirLights[0].color","u_dirLights[0].direction","u_dirLights[1].color","u_pointLights[0].color","u_pointLights[0].position","u_pointLights[0].intensity","u_pointLights[1].color","u_spotLights[0].color","u_spotLights[0].position","u_spotLights[0].intensity","u_spotLights[0].direction","u_spotLights[0].cutoffAngle","u_spotLights[0].exponent","u_spotLights[1].color","u_fogColor","u_shadowMapProjViewTrans","u_shadowTexture","u_shadowPCFOffset","Some attributes not implemented yet (",
"too many bones: ",", max configured: ","u_time","#define positionFlag\n","#define colorFlag\n","#define binormalFlag\n","#define tangentFlag\n","#define normalFlag\n","#define lightingFlag\n","#define ambientCubemapFlag\n","#define numDirectionalLights ","#define numPointLights ","#define numSpotLights ","#define fogFlag\n","#define shadowMapFlag\n","#define environmentCubemapFlag\n","#define boneWeight","Flag\n","#define texCoord","#define blendedFlag\n","#define diffuseTextureFlag\n","#define diffuseTextureCoord texCoord0\n",
"#define specularTextureFlag\n","#define specularTextureCoord texCoord0\n","#define normalTextureFlag\n","#define normalTextureCoord texCoord0\n","#define emissiveTextureFlag\n","#define emissiveTextureCoord texCoord0\n","#define reflectionTextureFlag\n","#define reflectionTextureCoord texCoord0\n","#define ambientTextureFlag\n","#define ambientTextureCoord texCoord0\n","#define diffuseColorFlag\n","#define specularColorFlag\n","#define emissiveColorFlag\n","#define reflectionColorFlag\n","#define shininessFlag\n",
"#define alphaTestFlag\n","#define numBones ","Unknown material attribute: ","Image","Audio","Text","t","Binary","Directory","<Unix MultiLine $>","diffuseTexture","specularTexture","bumpTexture","normalTexture","ambientTexture","emissiveTexture","reflectionTexture","u_viewTrans","u_projViewTrans","u_cameraPosition","u_cameraDirection","u_cameraUp","u_cameraNearFar","u_worldTrans","u_viewWorldTrans","u_projViewWorldTrans","u_normalMatrix","u_bones","u_shininess","u_opacity","u_diffuseColor","u_diffuseTexture",
"u_diffuseUVTransform","u_specularColor","u_specularTexture","u_specularUVTransform","u_emissiveColor","u_emissiveTexture","u_emissiveUVTransform","u_reflectionColor","u_reflectionTexture","u_reflectionUVTransform","u_normalTexture","u_normalUVTransform","u_ambientTexture","u_ambientUVTransform","u_alphaTest","u_ambientCubemap","u_dirLights","u_pointLights","u_spotLights","u_environmentCubemap","Illegal arguments","glGetFloat not supported by Dragome WebGL backend","Can only cope with FloatBuffer and ShortBuffer at the moment",
"glGetFloat not supported by WebGL backend"]);
BM.prototype.toString=function(){return $rt_ustr(this);};
BM.prototype.valueOf=BM.prototype.toString;C.prototype.toString=function(){return $rt_ustr(S2(this));};
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
~a);};}var CS=Long_add;var EI=Long_sub;var Cu=Long_mul;var Gc=Long_div;var A3k=Long_rem;var B1=Long_or;var Bx=Long_and;var AZp=Long_xor;var EK=Long_shl;var Pt=Long_shr;var C$=Long_shru;var BC7=Long_compare;var Bb=Long_eq;var D2=Long_ne;var Ml=Long_lt;var Mm=Long_le;var IR=Long_gt;var BC8=Long_ge;var BC9=Long_not;var Ba3=Long_neg;
function TeaVMThread(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}TeaVMThread.prototype.push=function(){for(var i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};TeaVMThread.prototype.s=TeaVMThread.prototype.push;TeaVMThread.prototype.pop=function(){return this.stack.pop();};TeaVMThread.prototype.l=TeaVMThread.prototype.pop;TeaVMThread.prototype.isResuming=function(){return this.status===2;};TeaVMThread.prototype.isSuspending
=function(){return this.status===1;};TeaVMThread.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};TeaVMThread.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if($rt_currentNativeThread!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:function(result){if(result instanceof Error){throw result;}};this.run();};TeaVMThread.prototype.resume=function(){if($rt_currentNativeThread
!==null){throw new Error("Another thread is running");}this.status=2;this.run();};TeaVMThread.prototype.run=function(){$rt_currentNativeThread=this;var result;try {result=this.runner();}catch(e){result=e;}finally {$rt_currentNativeThread=null;}if(this.suspendCallback!==null){var self=this;var callback=this.suspendCallback;this.suspendCallback=null;callback(function(){self.resume();});}else if(this.status===0){this.completeCallback(result);}};function $rt_suspending(){var thread=$rt_nativeThread();return thread
!=null&&thread.isSuspending();}function $rt_resuming(){var thread=$rt_nativeThread();return thread!=null&&thread.isResuming();}function $rt_suspend(callback){var nativeThread=$rt_nativeThread();if(nativeThread===null){throw new Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);}function $rt_startThread(runner,callback){(new TeaVMThread(runner)).start(callback);}var $rt_currentNativeThread=null;function $rt_nativeThread(){return $rt_currentNativeThread;}function $rt_invalidPointer()
{throw new Error("Invalid recorded state");}main=$rt_mainStarter(Bp4);
main.javaException=$rt_javaException;
(function(){var c;c=Uq.prototype;c.addSingleResultJS=c.Y9;c=W5.prototype;c.onBulletPhysicsLoaded=c.MF;c=ADb.prototype;c.fullscreenChanged=c.YC;c=ACa.prototype;c.setWorldTransformJS=c.a13;c=ACb.prototype;c.getWorldTransformJS=c.a0C;c=YQ.prototype;c.handleEvent=c.l$;c=AA5.prototype;c.onTimer=c.Xv;c=S7.prototype;c.handleEvent=c.l$;c=Ue.prototype;c.getLength=c.a2h;c.get=c.YX;c=Wq.prototype;c.onAnimationFrame=c.XK;c=WW.prototype;c.handleEvent=c.l$;c=WU.prototype;c.handleEvent=c.l$;c=W2.prototype;c.handleEvent=c.l$;c
=W1.prototype;c.handleEvent=c.l$;c=Sg.prototype;c.onready=c.YD;c.ontimeout=c.VY;c=AJK.prototype;c.drawLineJS=c.a0n;c=AJH.prototype;c.drawContactPointJS=c.ZD;c=AJJ.prototype;c.getDebugFunctionJS=c.a0j;c=Sc.prototype;c.dispatchEvent=c.WU;c.addEventListener=c.a1J;c.removeEventListener=c.a2y;c.getLength=c.a0G;c.get=c.Zs;c.addEventListener=c.Z4;c.removeEventListener=c.XJ;c=Vh.prototype;c.onBulletPhysicsLoaded=c.MF;})();
})();
