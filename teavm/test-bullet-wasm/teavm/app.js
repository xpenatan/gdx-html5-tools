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
{if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.go=f;}
function $rt_cls(cls){return Lg(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Mf(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.S.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return Bgh;}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(IK());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return Dt();}
function $rt_setThread(t){return H8(t);}
function $rt_createException(message){return Qg(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var G=$rt_throw;var B9=$rt_compare;var Bgi=$rt_nullCheck;var F=$rt_cls;var Y=$rt_createArray;var ARb=$rt_isInstance;var A7A=$rt_nativeThread;var BdZ=$rt_suspending;var Bd3=$rt_resuming;var Bc3=$rt_invalidPointer;var B=$rt_s;var N=$rt_eraseClinit;var Cg=$rt_imul;var R=$rt_wrapException;var Bgj=$rt_checkBounds;var Bgk=$rt_checkUpperBound;var Bgl=$rt_checkLowerBound;var Bgm=$rt_wrapFunction0;var Bgn=$rt_wrapFunction1;var Bgo=$rt_wrapFunction2;var Bgp=$rt_wrapFunction3;var Bgq=$rt_wrapFunction4;var D=$rt_classWithoutFields;var H
=$rt_createArrayFromData;var I5=$rt_createCharArrayFromData;var Bgr=$rt_createByteArrayFromData;var Bgs=$rt_createShortArrayFromData;var MB=$rt_createIntArrayFromData;var Bgt=$rt_createBooleanArrayFromData;var BcC=$rt_createFloatArrayFromData;var Bgu=$rt_createDoubleArrayFromData;var AXB=$rt_createLongArrayFromData;var OC=$rt_createBooleanArray;var Cj=$rt_createByteArray;var MW=$rt_createShortArray;var BW=$rt_createCharArray;var Bc=$rt_createIntArray;var BfR=$rt_createLongArray;var Ca=$rt_createFloatArray;var Bgv
=$rt_createDoubleArray;var B9=$rt_compare;var Bgw=$rt_castToClass;var Bgx=$rt_castToInterface;var Ry=Long_toNumber;var O=Long_fromInt;var Bgy=Long_fromNumber;var Cd=Long_create;var Ba=Long_ZERO;var Bgz=Long_hi;var Cp=Long_lo;
function C(){this.bx=null;this.$id$=0;}
function Qq(){var a=new C();J(a);return a;}
function Eq(b){var c;if(b.bx===null)Np(b);if(b.bx.cB===null)b.bx.cB=Dt();else if(b.bx.cB!==Dt())G(DS(B(0)));c=b.bx;c.cU=c.cU+1|0;}
function Ch(b){var c,d;if(!EM(b)&&b.bx.cB===Dt()){c=b.bx;d=c.cU-1|0;c.cU=d;if(!d)b.bx.cB=null;EM(b);return;}G(AQh());}
function BbI(b){AJA(b,1);}
function AJA(b,c){var d,$p,$z;$p=0;if(Bd3()){var $T=A7A();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.bx===null)Np(b);if(b.bx.cB===null)b.bx.cB=Dt();if(b.bx.cB===Dt()){d=b.bx;d.cU=d.cU+c|0;return;}$p=1;case 1:ALk(b,c);if(BdZ()){break _;}return;default:Bc3();}}A7A().s(b,c,d,$p);}
function Np(b){b.bx=Ba1();}
function ALk(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.nP=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.OK=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=Bbc(callback);return thread.suspend(function(){try{Bem(b,c,callback);}catch($e){callback.OK($rt_exception($e));}});}
function Bem(b,c,d){var e,f,g;e=Dt();if(b.bx===null){Np(b);H8(e);f=b.bx;f.cU=f.cU+c|0;d.nP(null);return;}if(b.bx.cB===null){b.bx.cB=e;H8(e);f=b.bx;f.cU=f.cU+c|0;d.nP(null);return;}g=b.bx;if(g.d0===null)g.d0=ADh();A3K(g.d0,BcE(e,b,c,d));}
function BeX(b){ADK(b,1);}
function ADK(b,c){var d;if(!EM(b)&&b.bx.cB===Dt()){d=b.bx;d.cU=d.cU-c|0;if(d.cU>0)return;d.cB=null;if(d.d0!==null&&!Ib(d.d0))AMI(Baw(b));else EM(b);return;}G(AQh());}
function AQD(b){var c,d,e;if(!EM(b)&&b.bx.cB===null){c=b.bx;if(c.d0!==null&&!Ib(c.d0)){d=c.d0;e=A5n(d);c.d0=null;e.fd();}return;}}
function EM(a){var b,c;b=a.bx;if(b===null)return 1;a:{b:{if(b.cB===null){if(b.d0!==null){c=b.d0;if(!Ib(c))break b;}if(b.yB===null)break a;c=b.yB;if(Ib(c))break a;}}return 0;}ACt(a);return 1;}
function ACt(a){a.bx=null;}
function J(a){}
function Ck(a){return Lg(a.constructor);}
function MN(a){return Iu(a);}
function AMS(a,b){return a!==b?0:1;}
function PW(a){return (((I()).a(B(1))).a(OB(Iu(a)))).b();}
function Iu(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function ALS(a){var b,c,d;if(!ARb(a,DN)){b=a;if(b.constructor.$meta.item===null)G(Bbu());}c=ADw(a);b=c;d=$rt_nextId();b.$id$=d;return c;}
function A2t(b){AQD(b);}
function ANi(b,c,d,e){var f;H8(b);c.bx.cB=b;f=c.bx;f.cU=f.cU+d|0;e.nP(null);}
function T(){var a=this;C.call(a);a.r_=null;a.ra=null;}
function Bo(a){J(a);}
function A6Y(a,b){if(!b&&a.r_===null)a.r_=a.U();else if(b&&a.ra===null)a.ra=(a.U()).f$(1);if(b)return a.ra;return a.r_;}
var RR=D(T);
function A_6(){var a=new RR();A7t(a);return a;}
function A7t(a){Bo(a);}
function AYC(a){return ((CR()).cG(32)).cG(9);}
var Qs=D(T);
function Bay(){var a=new Qs();A9V(a);return a;}
function A9V(a){Bo(a);}
function AMX(a){return ((CR()).bF(0,31)).cG(127);}
var I1=D(0);
function V4(){var a=this;C.call(a);a.qa=null;a.tZ=null;a.zm=0;a.z2=0;}
function BeV(a,b){var c=new V4();ARd(c,a,b);return c;}
function ARd(a,b,c){J(a);a.qa=b;a.tZ=c;}
function AHV(a){return Cb(a.qa);}
function A92(a,b){return Bb(a.qa)<b?0:1;}
function AJi(a){return Cb(a.tZ);}
function A7L(a,b){return Bb(a.tZ)<b?0:1;}
function A0g(a,b){a.zm=b;}
function A_C(a,b){a.z2=b;}
var E2=D(0);
function HK(){var a=this;C.call(a);a.ij=Ba;a.sK=Ba;a.dB=0;}
function P9(a){J(a);a.dB=(-1);}
function A1f(a){a.ij=Ba;a.dB=(-1);}
function AXe(a){return a.dB==(-1)?0:1;}
var Wq=D();
function A_B(b){var c,d;c=b.LZ();d=c.data;if(d.length<=0)return null;return PK(d[0]);}
function ANN(b,c){var d,e,f,$$je;if(c!==null&&c.data.length){a:{b:{try{d=b.Hy(c);e=PK(d);}catch($$e){$$je=R($$e);if($$je instanceof Hg){f=$$je;break a;}else if($$je instanceof I0){f=$$je;break b;}else{throw $$e;}}return e;}G(Ex((((I()).a(B(2))).a(b.u())).b(),f));}G(Ex(((((I()).a(B(3))).a(b.u())).a(B(4))).b(),f));}return A_B(b);}
function AZi(b,c){var d,e,f,$$je;a:{try{d=b.GM(c);e=PK(d);}catch($$e){$$je=R($$e);if($$je instanceof Hg){f=$$je;break a;}else if($$je instanceof I0){f=$$je;G(Ex((((I()).a(B(2))).a(b.u())).b(),f));}else{throw $$e;}}return e;}G(Ex((((I()).a(B(5))).a(b.u())).b(),f));}
var B3=D(0);
var D4=D();
function ACo(a){J(a);}
var B$=D(0);
function D5(){D4.call(this);this.jc=0;}
var BgA=null;var BgB=null;function C1(){C1=N(D5);A7T();}
function ABL(a){var b=new D5();Hs(b,a);return b;}
function Hs(a,b){C1();ACo(a);a.jc=b;}
function Xy(b,c){C1();if(!(c>=2&&c<=36))c=10;return ((Bf0(20)).AX(b,c)).b();}
function ABP(b){C1();return b>>>4^b<<28^b<<8^b>>>24;}
function OB(b){C1();return ADz(b,4);}
function NE(b){C1();return Xy(b,10);}
function Du(b,c){var d,e,f,g,h;C1();if(c>=2&&c<=36){if(b!==null&&!b.bN()){a:{d=0;e=0;switch(b.f(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==b.i())G(Ed());while(e<b.i()){g=e+1|0;h=Nn(b.f(e));if(h<0)G(DI((((I()).a(B(6))).a(b)).b()));if(h>=c)G(DI((((((I()).a(B(7))).j(c)).a(B(8))).a(b)).b()));f=Cg(c,f)+h|0;if(f<0){if(g==b.i()&&f==(-2147483648)&&d)return (-2147483648);G(DI((((I()).a(B(9))).a(b)).b()));}e=g;}if(d)f= -f|0;return f;}G(DI(B(10)));}G(DI((((I()).a(B(11))).j(c)).b()));}
function BU(b){C1();return Du(b,10);}
function Bn(b){C1();if(b>=(-128)&&b<=127){V8();return BgB.data[b+128|0];}return ABL(b);}
function V8(){var b;C1();a:{if(BgB===null){BgB=Y(D5,256);b=0;while(true){if(b>=BgB.data.length)break a;BgB.data[b]=ABL(b-128|0);b=b+1|0;}}}}
function AV8(a){return a.jc;}
function ASC(a){return NE(a.jc);}
function AUO(a){return ABP(a.jc);}
function A$y(a,b){if(a===b)return 1;return b instanceof D5&&b.jc==a.jc?1:0;}
function Mu(b){var c,d,e;C1();if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;e=d>>>8;if(!e)e=d;else c=c|8;d=e>>>4;if(!d)d=e;else c=c|4;e=d>>>2;if(!e)e=d;else c=c|2;if(e>>>1)c=c|1;return (32-c|0)-1|0;}
function E3(b){var c,d,e;C1();if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;e=d<<8;if(!e)e=d;else c=c|8;d=e<<4;if(!d)d=e;else c=c|4;e=d<<2;if(!e)e=d;else c=c|2;if(e<<1)c=c|1;return (32-c|0)-1|0;}
function Yi(b,c){var d;C1();d=c&31;return b<<d|b>>>(32-d|0);}
function A7T(){BgA=F($rt_intcls());}
var Ez=D();
var BgC=null;var BgD=null;var BgE=null;var BgF=null;var BgG=null;function Bai(){Bai=N(Ez);A1Y();}
function A1Y(){BgC=MB([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);BgD=AXB([O(1),O(10),O(100),O(1000),O(10000),O(100000),O(1000000),O(10000000),O(100000000),O(1000000000),Cd(1410065408, 2),Cd(1215752192, 23),Cd(3567587328, 232),Cd(1316134912, 2328),Cd(276447232, 23283),Cd(2764472320, 232830),Cd(1874919424, 2328306),Cd(1569325056, 23283064),Cd(2808348672, 232830643)]);BgE=AXB([O(1),O(10),O(100),O(10000),O(100000000),Cd(1874919424, 2328306)]);BgF=BeI();BgG=Bd1();}
function Bt(){var a=this;C.call(a);a.k=null;a.cF=0;a.tw=null;a.Ek=0;}
var BgH=0;function W2(){W2=N(Bt);ATK();}
function Co(a){var b,c;W2();J(a);b=new D5;c=BgH;BgH=c+1|0;Hs(b,c);a.tw=b.b();}
function I_(a,b){var c,d;W2();J(a);c=new D5;d=BgH;BgH=d+1|0;Hs(c,d);a.tw=c.b();a.k=b;}
function F3(a,b,c,d){var e;e=d.J();while(true){if(b>e)return (-1);if(a.e(b,c,d)>=0)break;b=b+1|0;}return b;}
function Gb(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.e(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AYc(a,b){a.Ek=b;}
function AXi(a){return a.Ek;}
function ANf(a){return ((((((I()).a(B(12))).a(a.tw)).a(B(13))).a(a.u())).a(B(14))).b();}
function APT(a){return a.F5();}
function AQC(a){return a.k;}
function LJ(a,b){a.k=b;}
function A8X(a,b){return 1;}
function A$e(a){return null;}
function OO(a){var b;a.cF=1;if(a.k!==null){if(!a.k.cF){b=a.k.h8();if(b!==null){a.k.cF=1;a.k=b;}a.k.ed();}else if(a.k instanceof Fz&&a.k.dn.tj)a.k=a.k.k;}}
function ATK(){BgH=1;}
function BB(){var a=this;Bt.call(a);a.bQ=null;a.dn=null;a.bm=0;}
function BgI(){var a=new BB();CP(a);return a;}
function Ba$(a,b){var c=new BB();Sz(c,a,b);return c;}
function CP(a){Co(a);}
function Sz(a,b,c){Co(a);a.bQ=b;a.dn=c;a.bm=c.ka();}
function AJm(a,b,c,d){var e,f,g,h,i;if(a.bQ===null)return (-1);e=d.jq(a.bm);d.eA(a.bm,b);f=a.bQ.df();g=0;while(true){if(g>=f){d.eA(a.bm,e);return (-1);}h=a.bQ.l(g);i=h.e(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function AOF(a,b){a.dn.Q(b);}
function ALa(a){return B(15);}
function A22(a,b){var c;a:{if(a.bQ!==null){c=a.bQ.fs();while(true){if(!c.bC())break a;if(!(c.bz()).ca(b))continue;else return 1;}}}return 0;}
function APx(a,b){var c,d;a:{if(b.nE(a.bm)>=0){c=b.jq(a.bm);d=a.bm;if(c==b.nE(d)){c=0;break a;}}c=1;}return c;}
function AGd(a){var b,c,d,e;a.cF=1;if(a.dn!==null&&!a.dn.cF)a.dn.ed();a:{if(a.bQ!==null){b=a.bQ.df();c=0;while(true){if(c>=b)break a;d=a.bQ.l(c);e=d.h8();if(e===null)e=d;else{d.cF=1;a.bQ.mB(c);a.bQ.K_(c,e);}if(!e.cF)e.ed();c=c+1|0;}}}if(a.k!==null)OO(a);}
function Fz(){BB.call(this);this.cY=null;}
function BeU(a,b){var c=new Fz();Qe(c,a,b);return c;}
function Qe(a,b,c){CP(a);a.cY=b;a.dn=c;a.bm=c.ka();}
function ADL(a,b,c,d){var e,f;e=d.jq(a.bm);d.eA(a.bm,b);f=a.cY.e(b,c,d);if(f>=0)return f;d.eA(a.bm,e);return (-1);}
function AMx(a,b,c,d){var e;e=a.cY.cD(b,c,d);if(e>=0)d.eA(a.bm,e);return e;}
function A7l(a,b,c,d,e){var f;f=a.cY.cI(b,c,d,e);if(f>=0)e.eA(a.bm,f);return f;}
function A2U(a,b){return a.cY.ca(b);}
function A5D(a){var b;b=BbG(a);a.k=b;return b;}
function ATf(a){var b;a.cF=1;if(a.dn!==null&&!a.dn.cF)a.dn.ed();if(a.cY!==null&&!a.cY.cF){b=a.cY.h8();if(b!==null){a.cY.cF=1;a.cY=b;}a.cY.ed();}}
function HS(){var a=this;C.call(a);a.LU=null;a.rg=null;a.yD=0.0;a.Av=0.0;a.sd=null;a.rs=null;a.hO=0;}
function ACk(a,b,c,d,e){J(a);Di();a.sd=BgJ;a.rs=BgJ;Ri(a,e);a.LU=b;a.rg=e.go();a.yD=c;a.Av=d;}
function Yx(a,b,c,d){var e;e=Cj(1);e.data[0]=63;ACk(a,b,c,d,e);}
function Ri(a,b){var c;if(b!==null){c=b.data.length;if(c&&c>=a.Av)return;}G(W(B(16)));}
function K2(a,b){if(b!==null){a.sd=b;a.ve(b);return a;}G(W(B(17)));}
function ATs(a,b){}
function LQ(a,b){if(b!==null){a.rs=b;a.qR(b);return a;}G(W(B(17)));}
function A1F(a,b){}
function IE(a,b,c,d){var e,f,g,h,$$je;a:{if(a.hO!=3){if(d)break a;if(a.hO!=2)break a;}G(GY());}a.hO=!d?1:2;while(true){try{e=a.OQ(b,c);}catch($$e){$$je=R($$e);if($$je instanceof Bm){f=$$je;G(AYI(f));}else{throw $$e;}}if(e.jK()){if(!d)return e;g=Bb(b);if(g<=0)return e;e=BV(g);}else if(e.h5())break;h=!e.t2()?a.sd:a.rs;b:{Di();if(h!==BgK){if(h===BgL)break b;else return e;}if(Bb(c)<a.rg.data.length)return BgM;Yk(c,a.rg);}b.oP(B8(b)+e.i()|0);}return e;}
function XU(a,b){var c,d,e;if(!Bb(b))return RK(0);OU(a);c=RK(Bb(b)*a.yD|0);while(true){d=IE(a,b,c,0);Bj();if(d===BgN)break;if(d===BgM){c=JY(a,c);continue;}if(!d.my())continue;d.nS();}e=IE(a,b,c,1);if(e.my())e.nS();while(true){e=JN(a,c);if(e.jK())break;if(!e.h5())continue;c=JY(a,c);}Jv(c);return c;}
function JY(a,b){var c,d,e;c=HI(b);d=c.data;d=Oh(c,d.length*2|0);e=Hu(d);e.f5(B8(b));return e;}
function JN(a,b){var c;if(a.hO!=2&&a.hO!=4)G(GY());c=a.Lu(b);Bj();if(c===BgN)a.hO=3;return c;}
function A3D(a,b){Bj();return BgN;}
function OU(a){a.hO=0;a.uS();return a;}
function AOt(a){}
function Do(){var a=this;HS.call(a);a.Ch=null;a.wb=null;}
function GI(a,b,c,d){Yx(a,b,c,d);a.Ch=BW(512);a.wb=Cj(512);}
function AE1(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.Ch;e=0;f=0;g=a.wb;a:{while(true){if((e+32|0)>f&&Cb(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Bq(Bb(b)+j|0,i.length);b.rj(d,j,f-j|0);e=0;}if(!Cb(c)){if(!Cb(b)&&e>=f){Bj();k=BgN;}else{Bj();k=BgM;}break a;}i=g.data;l=0;m=Bq(Bb(c),i.length);n=BeV(b,c);k=a.mW(d,e,f,g,l,m,n);e=n.zm;j=n.z2;if(k===null){if(!Cb(b)&&e>=f){Bj();k=BgN;}else if(!Cb(c)&&e>=f){Bj();k=BgM;}}c.wX(g,0,j);if(k!==null)break;}}b.oP(B8(b)-(f-e|0)|0);return k;}
function Xv(){var a=this;Do.call(a);a.tM=0;a.rt=0;}
function Bc5(a,b,c){var d=new Xv();A5U(d,a,b,c);return d;}
function A5U(a,b,c,d){GI(a,b,2.0,4.0);a.tM=c;a.rt=d;}
function A62(a,b,c,d,e,f,g,h){var i,j,k;if(a.tM){if((f+2|0)>g){if(h.Lj())i=null;else{Bj();i=BgM;}return i;}a.tM=0;if(!a.rt){j=e.data;k=f+1|0;j[f]=(-2);f=k+1|0;j[k]=(-1);}else{j=e.data;k=f+1|0;j[f]=(-1);f=k+1|0;j[k]=(-2);}}return !a.rt?Pw(a,b,c,d,e,f,g,h):V7(a,b,c,d,e,f,g,h);}
function V7(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c];if(!BY(l)){if(BG(l)){c=k+(-1)|0;i=BV(1);break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.ef(2))break a;Bj();i=BgM;break a;}j=e.data;m=f+1|0;j[f]=(l&255)<<24>>24;f=m+1|0;j[m]=l>>8<<24>>24;c=k;}else{if(k==d){c=k+(-1)|0;if(h.dO(2))break a;Bj();i=BgN;break a;}c=k+1|0;n=j[k];if(!BG(n)){c=c+(-2)|0;i=BV(1);break a;}if((f+4|0)>g){c=c+(-2)|0;if(h.ef(4))break a;Bj();i=BgM;break a;}j=e.data;m=f+1|0;j[f]=(l&255)<<24>>24;o=
m+1|0;j[m]=l>>8<<24>>24;m=o+1|0;j[o]=(n&255)<<24>>24;f=m+1|0;j[m]=n>>8<<24>>24;}}}h.em(c);h.dR(f);return i;}
function Pw(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c];if(!BY(l)){if(BG(l)){c=k+(-1)|0;i=BV(1);break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.ef(2))break a;Bj();i=BgM;break a;}j=e.data;m=f+1|0;j[f]=l>>8<<24>>24;f=m+1|0;j[m]=(l&255)<<24>>24;c=k;}else{if(k==d){c=k+(-1)|0;if(h.dO(2))break a;Bj();i=BgN;break a;}c=k+1|0;n=j[k];if(!BG(n)){c=c+(-2)|0;i=BV(1);break a;}if((f+4|0)>g){c=c+(-2)|0;if(h.ef(4))break a;Bj();i=BgM;break a;}j=e.data;m=f+1|0;j[f]=l>>8<<24>>24;o=m+1
|0;j[m]=(l&255)<<24>>24;m=o+1|0;j[o]=n>>8<<24>>24;f=m+1|0;j[m]=(n&255)<<24>>24;}}}h.em(c);h.dR(f);return i;}
var Cr=D(0);
function BT(){var a=this;C.call(a);a.bY=0;a.mU=0;a.Ll=0;a.KZ=null;a.zU=0;}
function B_(a){J(a);}
function AWq(a,b,c){a.mU=c;a.bY=b;}
function AKd(a,b){if(!a.mU)a.bY=b;}
function AC_(a,b){return b instanceof BT&&b.bY==a.bY?1:0;}
function A5b(a){return a.bY;}
function AWX(a){return a.bY;}
function AKS(a){if(a.zU>0){H3();if(BgO&&BgP)BgQ.qC(B(18),((((((I()).a(B(19))).a(a.b())).a(B(20))).j(a.zU)).a(B(21))).b());}if(a.mU){a.Ll=1;a.I2();a.bY=0;}}
function AVE(a){return (((((((I()).a(a.KZ)).a(B(22))).j(a.bY)).a(B(23))).Jr(a.mU)).a(B(24))).b();}
var F9=D(BT);
var BgR=null;function AH6(){AH6=N(F9);AEj();}
function Bfk(a){var b=new F9();XB(b,a);return b;}
function BgS(){var a=new F9();Ih(a);return a;}
function XB(a,b){AH6();B_(a);}
function Ih(a){AH6();B_(a);}
function ASw(a,b){U3(a.bY,b);}
function AEj(){BgR=Bfk(0);}
function U3(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btCollisionObject);jsObj.setRestitution(c);}
var Of=D(F9);
var BgT=null;function ARG(){ARG=N(Of);ATd();}
function BfZ(a,b,c,d){var e=new Of();SB(e,a,b,c,d);return e;}
function Ba8(a){var b=new Of();AB3(b,a);return b;}
function SB(a,b,c,d,e){var f,g,h,i;ARG();Ih(a);Fl();f=BgU;Gq(e,f);g=c.de();h=d.de();i=f.de();a.dZ(S5(b,g,h,i),1);}
function AKj(a){ACL(a.bY);}
function AB3(a,b){ARG();Ih(a);}
function ATd(){BgT=Ba8(0);}
function S5(b,c,d,e){var motionStateJSObj=Bullet.wrapPointer(c,Bullet.btMotionState);var collisionShapeJSObj=Bullet.wrapPointer(d,Bullet.btCollisionShape);var localInertiaJSObj=Bullet.wrapPointer(e,Bullet.btVector3);var jsObj=new Bullet.btRigidBody(b,motionStateJSObj,collisionShapeJSObj,localInertiaJSObj);return Bullet.getPointer(jsObj);}
function ACL(b){var jsObj=Bullet.wrapPointer(b,Bullet.btRigidBody);Bullet.destroy(jsObj);}
var Dj=D(BT);
var BgV=null;var BgW=null;var BgX=null;var BgY=null;var BgZ=null;var Bg0=null;var Bg1=null;var Bg2=null;function H7(){H7=N(Dj);ASD();}
function FE(a){var b=new Dj();AAR(b,a);return b;}
function AAR(a,b){H7();B_(a);a.dZ(!b?0:RV(),b);}
function ARn(a,b){Yo(a.bY,b.data);}
function AS9(a,b){ABl(a.bY,b.data);}
function Yd(b,c){H7();c.Om(b.c);}
function Ya(b,c){H7();b.Ko(c.c);}
function SL(b,c){H7();Bg1.yG(c);Yd(b,Bg1);}
function QM(b,c){H7();Bg1.yG(b);Ya(Bg1,c);}
function ASD(){BgV=FE(0);BgW=FE(1);BgX=FE(1);BgY=FE(1);BgZ=FE(1);Bg0=FE(1);Bg1=FE(0);Bg2=BL();}
function RV(){var jsObj=new Bullet.btTransform();return Bullet.getPointer(jsObj);}
function Yo(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btTransform);jsObj.setFromOpenGLMatrix(c);}
function ABl(b,c){var worldTrans=Bullet.wrapPointer(b,Bullet.btTransform);var origin=worldTrans.getOrigin();var matrix3x3=worldTrans.getBasis();var row0=matrix3x3.getRow(0);var row1=matrix3x3.getRow(1);var row2=matrix3x3.getRow(2);c[0]=row0.x();c[1]=row1.x();c[2]=row2.x();c[3]=0;c[4]=row0.y();c[5]=row1.y();c[6]=row2.y();c[7]=0;c[8]=row0.z();c[9]=row1.z();c[10]=row2.z();c[11]=0;c[12]=origin.x();c[13]=origin.y();c[14]=origin.z();c[15]=1.0;}
function Ey(){var a=this;C.call(a);a.Qo=Ba;a.NY=Ba;a.L4=null;a.Hu=null;a.LH=0;a.QK=null;}
var Bg3=null;var Bg4=null;var Bg5=0;var Bg6=0;var Bg7=null;function LW(){LW=N(Ey);AE3();}
function Bet(a){var b=new Ey();Ws(b,a);return b;}
function Bg8(a,b){var c=new Ey();NS(c,a,b);return c;}
function Ws(a,b){LW();NS(a,null,b);}
function NS(a,b,c){var d;LW();J(a);a.L4=Qq();a.LH=1;a.Hu=c;a.QK=b;d=Bg5;Bg5=d+1|0;a.Qo=O(d);}
function H8(b){LW();if(Bg4!==b)Bg4=b;Bg4.NY=Eb();}
function Dt(){LW();return Bg4;}
function AE3(){Bg3=Bet(B(25));Bg4=Bg3;Bg5=1;Bg6=1;Bg7=BfC();}
var Ja=D(T);
function BfS(){var a=new Ja();Qb(a);return a;}
function Qb(a){Bo(a);}
function P5(a){return ((CR()).bF(97,122)).bF(65,90);}
var Bw=D();
var Bg9=null;var Bg$=null;var Bg_=null;var Bha=null;var Bhb=null;var Bhc=null;var Bhd=null;var Bhe=null;var Bhf=null;var Bhg=null;var Bhh=null;var Bhi=null;var Bhj=null;var Bhk=null;var Bhl=null;var Bhm=null;var Bhn=null;var Bho=null;var Bhp=null;var Bhq=null;var Bhr=null;var Bhs=null;var Bht=null;var Bhu=null;var Bhv=null;var Bhw=null;var Bhx=null;var Bhy=null;var Bhz=null;function BbM(){BbM=N(Bw);A26();}
function A26(){Bg9=Bcw();Bg$=BdE();Bg_=A_J();Bha=Bdw();Bhb=Bf6();Bhc=Bfx();Bhd=Baz();Bhe=BbN();Bhf=Bbw();Bhg=BdW();Bhh=Bch();Bhi=BbO();Bhj=BaQ();Bhk=BeH();Bhl=BeK();Bhm=BeM();Bhn=Bd4();Bho=Bao();Bhp=Bco();Bhq=BfN();Bhr=Be0();Bhs=BaV();Bht=Bbq();Bhu=Bbn();Bhv=BbJ();Bhw=Bei();Bhx=Bfm();Bhy=Bf7();Bhz=Baj();}
var O$=D(Fz);
function BbG(a){var b=new O$();APM(b,a);return b;}
function APM(a,b){Qe(a,b.cY,b.dn);}
function AIC(a,b,c,d){var e,f,g;e=0;f=d.J();a:{while(true){if(b>f){b=e;break a;}g=d.jq(a.bm);d.eA(a.bm,b);e=a.cY.e(b,c,d);if(e>=0)break;d.eA(a.bm,g);b=b+1|0;}}return b;}
function A_m(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=e.jq(a.bm);e.eA(a.bm,c);f=a.cY.e(c,d,e);if(f>=0)break;e.eA(a.bm,g);c=c+(-1)|0;}}return c;}
function AGt(a){return null;}
function Db(){var a=this;C.call(a);a.sj=null;a.kJ=null;a.nW=0;a.ot=0;a.wy=null;}
function BhA(){var a=new Db();Q7(a);return a;}
function BhB(a){var b=new Db();Ox(b,a);return b;}
function BhC(a,b){var c=new Db();Nh(c,a,b);return c;}
function BhD(a){var b=new Db();ABZ(b,a);return b;}
function Q7(a){a.nW=1;a.ot=1;a.oe();}
function Ox(a,b){a.nW=1;a.ot=1;a.oe();a.sj=b;}
function Nh(a,b,c){a.nW=1;a.ot=1;a.oe();a.sj=b;a.kJ=c;}
function ABZ(a,b){a.nW=1;a.ot=1;a.oe();a.kJ=b;}
function AZX(a){return a;}
function AP8(a){return a.sj;}
function AJf(a){return a.mR();}
function A1e(a){a.y1(TF());}
function ATI(a,b){var c,d,e,f,g;b.pp((Ck(a)).u());c=a.GC();if(c!==null)b.pp((((I()).a(B(8))).a(c)).b());a:{b.Nv();if(a.wy!==null){d=a.wy.data;e=d.length;f=0;while(true){if(f>=e)break a;g=d[f];b.pp(B(26));b.KY(g);f=f+1|0;}}}if(a.kJ!==null&&a.kJ!==a){b.pp(B(27));a.kJ.y1(b);}}
var B4=D(Db);
function BhE(){var a=new B4();E$(a);return a;}
function BhF(a,b){var c=new B4();JV(c,a,b);return c;}
function BhG(a){var b=new B4();Mi(b,a);return b;}
function E$(a){Q7(a);}
function JV(a,b,c){Nh(a,b,c);}
function Mi(a,b){Ox(a,b);}
var Bm=D(B4);
function BhH(){var a=new Bm();Cx(a);return a;}
function BhI(a,b){var c=new Bm();P1(c,a,b);return c;}
function Qg(a){var b=new Bm();EF(b,a);return b;}
function Cx(a){E$(a);}
function P1(a,b,c){JV(a,b,c);}
function EF(a,b){Mi(a,b);}
var Uy=D(Bm);
function BcK(){var a=new Uy();ANO(a);return a;}
function ANO(a){Cx(a);}
var LK=D(0);
function ZM(){var a=this;C.call(a);a.jZ=null;a.lh=0;a.Oh=0;a.kB=0;}
function BdL(a){var b=new ZM();AC4(b,a);return b;}
function AC4(a,b){J(a);a.Oh=1;a.kB=1;a.jZ=b;}
function A8Z(a){return 0;}
function AVS(a){var b,c,d;b=a.jZ.hu();c=b.Ms();d=$rt_str(c.href);return d;}
function AJJ(a){return a.lh;}
function APu(a){a.lh=a.lh-1|0;}
function AWG(a){a.lh=a.lh+1|0;}
function A6f(a,b,c,d,e,f){a:{Bd_();switch(BhJ.data[BC(d)]){case 1:break;case 2:a.Mb(b,c,e,f);break a;case 3:a.tT(b,c,f);break a;case 4:a.GK(b,c,f);break a;case 5:f.cE(c,null);break a;default:G(U((((I()).a(B(28))).dD(d)).b()));}a.D7(b,c,f);}}
function AOs(a,b,c,d){var e,f;if(a.kB)(C_()).fu((((I()).a(B(29))).a(c)).b());e=a.jZ.ui();f=BS(Bcl(a,e,d,c),"handleEvent");e.onreadystatechange=f;a.nJ();Hk(a,e,d);e.open("GET",$rt_ustr(c),!!b);e.setRequestHeader("Content-Type","text/plain; charset=utf-8");e.send();}
function AI$(a,b,c){var d,e;if(a.kB)(C_()).fu((((I()).a(B(30))).a(b)).b());d=a.jZ.ui();e=BS(Bc1(a,d,c,b),"handleEvent");d.onreadystatechange=e;a.nJ();Hk(a,d,c);d.open("GET",$rt_ustr(b),!!0);d.setRequestHeader("Content-Type","text/plain; charset=utf-8");d.send();}
function AHb(a,b,c,d){a.tT(b,c,BcI(a,d));}
function ASj(a,b,c,d){var e,f;if(a.kB)(C_()).fu((((I()).a(B(29))).a(c)).b());e=a.jZ.ui();f=BS(BbB(a,e,d,c),"handleEvent");e.onreadystatechange=f;a.nJ();Hk(a,e,d);e.open("GET",$rt_ustr(c),!!b);if(b){f="arraybuffer";e.responseType=f;}e.send();}
function A4t(a,b,c,d,e){a.LF(b,c,d,null,e);}
function AS5(a,b,c,d,e,f){var g;g=0;a.tT(b,c,Bf2(a,f,e,g,d));}
function AGc(b,c){b.addEventListener("load",BS(c,"handleEvent"),!!0);b.addEventListener("error",BS(c,"handleEvent"),!!0);}
function Hk(a,b,c){var d;d=BS(Bdb(a,c),"handleEvent");b.onprogress=d;}
function NP(b){return b.kB;}
function Qc(b){return b.jZ;}
var B2=D(0);
function A0d(b){return b;}
var VK=D();
function ANn(b){return b;}
function Ib(b){return b.length?0:1;}
function A3K(b,c){var d;d=ANn(c);b.push(d);}
function A5n(b){return b.shift();}
var He=D(T);
function BbA(){var a=new He();QB(a);return a;}
function QB(a){Bo(a);}
function RT(a){return ((((CR()).bF(97,122)).bF(65,90)).bF(48,57)).cG(95);}
var ABB=D(He);
function Bdl(){var a=new ABB();A1o(a);return a;}
function A1o(a){QB(a);}
function ANo(a){var b;b=(RT(a)).f$(1);b.be=1;return b;}
var Ov=D(0);
function V_(){var a=this;C.call(a);a.ue=null;a.QT=Ba;a.CO=null;}
function BcS(a){var b=new V_();ADP(b,a);return b;}
function ADP(a,b){J(a);a.CO=b;b.IW(a);BgQ.OD(a);a.PV();}
function ASL(a,b){a.CO.nU(b);}
function A9g(a){var b,c,d,e,f,g,h,$$je;EH();b=BhK;Eq(b);a:{b:{try{if(a.ue===BgQ)break b;Ch(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}try{d=E_(CD(),O(1000000));e=O(5000);f=0;g=BhK.h;c:{while(true){if(f>=g)break c;try{e=(BhK.l(f)).M_(d,e);}catch($$e){$$je=R($$e);if($$je instanceof Db){h=$$je;break;}else{throw $$e;}}f=f+1|0;}G(Jd((((I()).a(B(31))).a((Ck(BhK.l(f))).u())).b(),h));}}catch($$e){$$je=R($$e);c=$$je;break a;}d:{try{if(a.ue===BgQ)break d;Ch(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}try
{a.nU(Cp((AW7(Ba,e))));Ch(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}Ch(b);G(c);}
function AR7(a){var b,c,d,e,f,$$je;b=D7(E_(CD(),O(1000000)),a.QT);EH();c=BhK;Eq(c);a:{try{d=0;e=BhK.h;while(d<e){(BhK.l(d)).Ii(b);d=d+1|0;}Ch(c);break a;}catch($$e){$$je=R($$e);f=$$je;}Ch(c);G(f);}a.ue=BgQ;a.fd();}
function Bx(){var a=this;C.call(a);a.A8=null;a.Ey=0;}
function Cw(a,b,c){J(a);a.A8=b;a.Ey=c;}
function BC(a){return a.Ey;}
function A0X(a){return a.A8.b();}
var Dk=D(Bx);
var BhL=null;var BhM=null;var BhN=null;var BhO=null;var BhP=null;var BhQ=null;var BhR=null;function Vw(){Vw=N(Dk);AYa();}
function GX(a,b){var c=new Dk();Wd(c,a,b);return c;}
function Wd(a,b,c){Vw();Cw(a,b,c);}
function AYa(){BhL=GX(B(32),0);BhM=GX(B(33),1);BhN=GX(B(34),2);BhO=GX(B(35),3);BhP=GX(B(36),4);BhQ=GX(B(37),5);BhR=H(Dk,[BhL,BhM,BhN,BhO,BhP,BhQ]);}
function BJ(){Bt.call(this);this.bO=0;}
function VP(a,b){I_(a,b);a.bO=1;a.AF(1);}
function C2(a){Co(a);a.bO=1;}
function A$Y(a,b,c,d){var e;if((b+a.cg()|0)>d.J()){d.d5=1;return (-1);}e=a.bH(b,c);if(e<0)return (-1);return a.k.e(b+e|0,c,d);}
function A8j(a){return a.bO;}
function AKZ(a,b){return 1;}
function Pd(){BJ.call(this);this.jG=null;}
function Bgg(a){var b=new Pd();A06(b,a);return b;}
function A06(a,b){C2(a);a.jG=b.b();a.bO=b.i();}
function A7s(a,b,c){var d,e,f,g;d=0;while(true){if(d>=a.jG.i())return a.jG.i();e=a.jG.f(d);f=b+d|0;if(e!=c.f(f)){g=a.jG;if(GG(g.f(d))!=c.f(f))break;}d=d+1|0;}return (-1);}
function A8I(a){return (((I()).a(B(38))).a(a.jG)).b();}
var Fp=D(0);
var Jf=D();
function BhS(){var a=new Jf();ACQ(a);return a;}
function ACQ(a){J(a);}
function AVY(a,b){return 0;}
function ARL(a,b,c){return 0;}
function It(){var a=this;Jf.call(a);a.dV=null;a.xf=0.0;a.FA=0.0;a.yw=Ba;a.Bh=0.0;a.zP=Ba;a.fL=0;a.pP=0;a.FJ=Ba;a.AV=0.0;a.AU=0.0;a.xM=0;a.w6=0;a.mI=0;a.jC=0;a.kK=0;a.eG=null;a.vm=0.0;a.vn=0.0;a.l6=Ba;a.d8=null;a.fr=null;a.ml=null;a.mm=null;a.h0=null;}
function BhT(a){var b=new It();Vy(b,a);return b;}
function BhU(a,b,c,d,e){var f=new It();ABX(f,a,b,c,d,e);return f;}
function BhV(a,b,c,d,e,f){var g=new It();O2(g,a,b,c,d,e,f);return g;}
function Vy(a,b){ABX(a,20.0,0.4000000059604645,1.100000023841858,2.147483648E9,b);}
function ABX(a,b,c,d,e,f){O2(a,b,b,c,d,e,f);}
function O2(a,b,c,d,e,f,g){ACQ(a);a.eG=Be9();a.d8=Iw();a.fr=Iw();a.ml=Iw();a.mm=Iw();a.h0=Bdr(a);if(g===null)G(W(B(39)));a.xf=b;a.FA=c;a.yw=Bgy(d*1.0E9);a.Bh=e;a.zP=Bgy(f*1.0E9);a.dV=g;}
function OP(a,b,c,d,e){return a.rY(b,c,d,e);}
function AOI(a,b,c,d,e){if(d>1)return 0;if(d){a.fr.ix(b,c);a.fL=0;a.jC=1;a.ml.k6(a.d8);a.mm.k6(a.fr);a.h0.jk();}else{a.d8.ix(b,c);a.l6=BhW.kR();a.eG.u7(b,c,a.l6);if(BhW.L3(1)){a.fL=0;a.jC=1;a.ml.k6(a.d8);a.mm.k6(a.fr);a.h0.jk();}else{a.fL=1;a.jC=0;a.mI=0;a.vm=b;a.vn=c;if(!a.h0.Pq())ACB(a.h0,a.Bh);}}return a.dV.rY(b,c,d,e);}
function VS(a,b,c,d){return a.QQ(b,c,d);}
function ADx(a,b,c,d){var e;if(d>1)return 0;if(a.mI)return 0;if(d)a.fr.ix(b,c);else a.d8.ix(b,c);if(a.jC){if(a.dV===null)return 0;e=a.dV.QZ(a.ml,a.mm,a.d8,a.fr);return !a.dV.Hp(a.ml.wZ(a.mm),a.d8.wZ(a.fr))&&!e?0:1;}a.eG.B6(b,c,BhW.kR());if(a.fL&&!HX(a,b,c,a.vm,a.vn)){a.h0.jk();a.fL=0;}if(a.fL)return 0;a.kK=1;return a.dV.J_(b,c,a.eG.oi,a.eG.oh);}
function AAu(a,b,c,d,e){return a.N6(b,c,d,e);}
function ADl(a,b,c,d,e){var f,g,h,i,j;if(d>1)return 0;if(a.fL&&!HX(a,b,c,a.vm,a.vn))a.fL=0;f=a.kK;a.kK=0;a.h0.jk();if(a.mI)return 0;if(a.fL){a:{if(a.xM==e&&a.w6==d&&Ku(D7(CD(),a.FJ),a.yw)){g=a.AV;h=a.AU;if(HX(a,b,c,g,h))break a;}a.pP=0;}a.pP=a.pP+1|0;a.FJ=CD();a.AV=b;a.AU=c;a.xM=e;a.w6=d;a.l6=Ba;return a.dV.Os(b,c,a.pP,e);}if(a.jC){a.jC=0;a.dV.G0();a.kK=1;if(d)a.eG.u7(a.d8.eW,a.d8.eV,BhW.kR());else a.eG.u7(a.fr.eW,a.fr.eV,BhW.kR());return 0;}i=0;if(f&&!a.kK)i=a.dV.G4(b,c,d,e);j=BhW.kR();if(Ku(D7(j,a.l6),a.zP))
{a.eG.B6(b,c,j);i=!a.dV.QI(a.eG.Lk(),a.eG.QX(),e)&&!i?0:1;}a.l6=Ba;return i;}
function HX(a,b,c,d,e){return CG(b-d)<a.xf&&CG(c-e)<a.FA?1:0;}
var FO=D(0);
var D8=D(Db);
function BhX(a,b){var c=new D8();SU(c,a,b);return c;}
function BhY(a){var b=new D8();XM(b,a);return b;}
function BhZ(a){var b=new D8();AAj(b,a);return b;}
function SU(a,b,c){Nh(a,b,c);}
function XM(a,b){Ox(a,b);}
function AAj(a,b){ABZ(a,b);}
var FS=D(D8);
function Bh0(a){var b=new FS();OW(b,a);return b;}
function OW(a,b){XM(a,b);}
function RG(){var a=this;C.call(a);a.ex=0;a.fo=null;a.pt=0;a.Fv=0.0;a.qw=0;a.qW=0;a.hN=0;}
function BfK(){var a=new RG();AHu(a);return a;}
function Bh1(a,b){var c=new RG();XR(c,a,b);return c;}
function AHu(a){XR(a,51,0.800000011920929);}
function XR(a,b,c){var d;J(a);if(c>0.0&&c<1.0){a.Fv=c;d=G4(b,c);a.qw=d*c|0;a.hN=d-1|0;a.qW=CW(O(a.hN));a.fo=Bc(d);return;}G(W((((I()).a(B(40))).cC(c)).b()));}
function ARU(a,b){return Cp(CM(Cf(O(b),Cd(2135587861, 2654435769)),a.qW));}
function MV(a,b){var c,d,e;c=a.fo;d=a.e7(b);while(true){e=c.data[d];if(!e)return  -(d+1|0)|0;if(e==b)break;d=(d+1|0)&a.hN;}return d;}
function AYx(a,b){var c,d;if(!b){if(a.pt)return 0;a.pt=1;a.ex=a.ex+1|0;return 1;}c=MV(a,b);if(c>=0)return 0;d= -(c+1|0)|0;a.fo.data[d]=b;d=a.ex+1|0;a.ex=d;if(d>=a.qw)XF(a,a.fo.data.length<<1);return 1;}
function X5(a,b){var c,d,e;c=a.fo;d=a.e7(b);while(true){e=c.data;if(!e[d])break;d=(d+1|0)&a.hN;}e[d]=b;}
function AR6(a,b){var c,d,e,f,g,h,i;if(!b){if(!a.pt)return 0;a.pt=0;a.ex=a.ex-1|0;return 1;}c=MV(a,b);if(c<0)return 0;d=a.fo;e=a.hN;f=(c+1|0)&e;while(true){g=d.data;h=g[f];if(!h)break;i=a.e7(h);if(((f-i|0)&e)>((c-i|0)&e)){g[c]=h;c=f;}f=(f+1|0)&e;}g[c]=0;a.ex=a.ex-1|0;return 1;}
function XF(a,b){var c,d,e,f;a:{c=a.fo.data.length;a.qw=b*a.Fv|0;a.hN=b-1|0;a.qW=CW(O(a.hN));d=a.fo;a.fo=Bc(b);if(a.ex>0){e=0;while(true){if(e>=c)break a;f=d.data[e];if(f)X5(a,f);e=e+1|0;}}}}
var Ej=D(Bm);
function C9(){var a=new Ej();PY(a);return a;}
function Bg(a){var b=new Ej();M6(b,a);return b;}
function PY(a){Cx(a);}
function M6(a,b){EF(a,b);}
var ACu=D(Ej);
function Ki(){var a=new ACu();ARc(a);return a;}
function ARc(a){PY(a);}
function Mn(){var a=this;Bm.call(a);a.KW=null;a.P4=null;}
function Bbt(a,b,c){var d=new Mn();AZS(d,a,b,c);return d;}
function AZS(a,b,c,d){EF(a,b);a.KW=c;a.P4=d;}
var KE=D();
var Bh2=null;function MZ(){MZ=N(KE);A4N();}
function T3(b,c){var d;MZ();d=Bh2.W(b);if(d===null){d=Bf4(b,4,c);Bh2.x(b,d);}return d;}
function Go(b){MZ();return T3(b,100);}
function To(b){MZ();return (Go(b)).eT();}
function Sp(b,c){var d,e,f,g;MZ();if(b===null)G(W(B(41)));d=null;e=0;f=b.h;while(e<f){a:{g=b.l(e);if(g!==null){if(d===null){d=Bh2.W(Ck(g));if(d===null)break a;}d.jr(g);if(!c)d=null;}}e=e+1|0;}}
function A4N(){Bh2=DH();}
function Jy(){var a=this;C.call(a);a.MM=null;a.Ay=0.0;a.H7=0.0;a.hK=null;a.jw=null;a.n5=null;a.eB=0;}
function UZ(a,b,c,d){J(a);a.hK=B(42);Di();a.jw=BgJ;a.n5=BgJ;if(c<=0.0)G(W((((I()).a(B(43))).cC(c)).b()));if(d>0.0){a.MM=b;a.Ay=c;a.H7=d;return;}G(W((((I()).a(B(44))).cC(d)).b()));}
function Oc(a,b){if(b!==null){a.jw=b;a.ve(b);return a;}G(W(B(45)));}
function A85(a,b){}
function Le(a,b){if(b!==null){a.n5=b;a.qR(b);return a;}G(W(B(45)));}
function A0_(a,b){}
function IX(a,b,c,d){var e,f,g,$$je;if(!(a.eB==2&&!d)&&a.eB!=3){a.eB=d?2:1;while(true){try{e=a.F_(b,c);}catch($$e){$$je=R($$e);if($$je instanceof Bm){f=$$je;G(AYI(f));}else{throw $$e;}}if(e.h5())return e;if(e.jK()){if(d&&Cb(b)){g=a.jw;Di();if(g===BgJ)return BV(Bb(b));if(Bb(c)<=a.hK.i())return BgM;b.f5(B8(b)+Bb(b)|0);if(a.jw===BgK)IV(c,a.hK);}return e;}if(e.zo()){g=a.jw;Di();if(g===BgJ)return e;if(a.jw===BgK){if(Bb(c)<a.hK.i())return BgM;IV(c,a.hK);}b.f5(B8(b)+e.i()|0);}else if(e.t2()){g=a.n5;Di();if(g===BgJ)break;if
(a.n5===BgK){if(Bb(c)<a.hK.i())return BgM;IV(c,a.hK);}b.f5(B8(b)+e.i()|0);}}return e;}G(GY());}
function KV(a,b){if(a.eB!=3&&a.eB!=2)G(GY());a.eB=3;return a.Hg(b);}
function ACb(a){a.eB=0;a.uS();return a;}
function WU(a,b){var c,d,e;if(a.eB&&a.eB!=3)G(GY());if(!Bb(b))return UQ(0);if(a.eB)ACb(a);c=UQ(Bf(8,Bb(b)*a.Ay|0));while(true){d=IX(a,b,c,0);if(d.jK())break;if(d.h5())c=Ns(a,c);if(!d.my())continue;d.nS();}e=IX(a,b,c,1);if(e.my())e.nS();while(true){e=KV(a,c);if(e.jK())break;c=Ns(a,c);}K$(c);return c;}
function Ns(a,b){var c,d,e;c=NK(b);d=c.data;d=JX(c,Bf(8,d.length*2|0));e=La(d);e.oP(B8(b));return e;}
function ANp(a,b){Bj();return BgN;}
function AZl(a){}
var KG=D();
var Bh3=null;function BcR(){BcR=N(KG);AQm();}
function LZ(b){var $$je;BcR();a:{if(b!==null)try{b.fQ();break a;}catch($$e){$$je=R($$e);if($$je instanceof Db){}else{throw $$e;}}}}
function AQm(){Bh3=Cj(0);}
function FM(){var a=this;BB.call(a);a.vO=0;a.je=0;}
function Bf8(a,b){var c=new FM();Kg(c,a,b);return c;}
function Kg(a,b,c){CP(a);a.vO=b;a.je=c;}
function AEm(a,b,c,d){var e,f,g,h;e=a.j9(d);if(e!==null&&(b+e.i()|0)<=d.J()){f=0;while(true){if(f>=e.i()){d.by(a.je,e.i());return a.k.e(b+e.i()|0,c,d);}g=e.f(f);h=b+f|0;if(g!=c.f(h)&&GG(e.f(f))!=c.f(h))break;f=f+1|0;}return (-1);}return (-1);}
function A6p(a,b){a.k=b;}
function AGJ(a,b){var c;c=b.OF(a.vO);return c;}
function AVA(a){return (((I()).a(B(46))).j(a.bm)).b();}
function APP(a,b){var c;c=!b.ev(a.je)?0:1;b.by(a.je,(-1));return c;}
function YP(){FM.call(this);this.Gr=0;}
function BaO(a,b){var c=new YP();AIP(c,a,b);return c;}
function AIP(a,b,c){Kg(a,b,c);}
function AMr(a,b,c,d){var e,f,g,h;e=a.j9(d);if(e!==null&&(b+e.i()|0)<=d.J()){f=0;while(true){if(f>=e.i()){d.by(a.je,e.i());return a.k.e(b+e.i()|0,c,d);}g=Dr(DC(e.f(f)));h=b+f|0;h=DC(c.f(h));if(g!=Dr(h))break;f=f+1|0;}return (-1);}return (-1);}
function AW$(a){return (((I()).a(B(47))).j(a.Gr)).b();}
var LX=D(0);
function I3(){C.call(this);this.Jj=null;}
var Bh4=null;var Bh5=null;function Ev(){Ev=N(I3);A$_();}
function AHQ(a){var b=new I3();Vo(b,a);return b;}
function Vo(a,b){Ev();J(a);a.Jj=b;}
function EV(){Ev();return Bh4;}
function A$_(){Bh4=AHQ(B(48));Bh5=AHQ(B(49));}
var EL=D(Bx);
var Bh6=null;var Bh7=null;var Bh8=null;function O5(){O5=N(EL);AX0();}
function A5W(a,b){var c=new EL();T2(c,a,b);return c;}
function T2(a,b,c){O5();Cw(a,b,c);}
function AX0(){Bh6=A5W(B(50),0);Bh7=A5W(B(51),1);Bh8=H(EL,[Bh6,Bh7]);}
function Y4(){var a=this;T.call(a);a.uZ=0;a.sV=0;a.B1=0;}
function Bz(a,b){var c=new Y4();AGu(c,a,b);return c;}
function Bbd(a,b,c){var d=new Y4();AS1(d,a,b,c);return d;}
function AGu(a,b,c){Bo(a);a.sV=c;a.uZ=b;}
function AS1(a,b,c,d){Bo(a);a.B1=d;a.sV=c;a.uZ=b;}
function AZ6(a){var b;b=BcH(a.uZ);if(a.B1)b.bG.n4(0,2048);b.be=a.sV;return b;}
var LY=D(0);
var Gi=D(0);
var NI=D(0);
var DT=D();
function Ha(a){J(a);}
function ADU(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.vV(f[c]);e=e+1|0;c=g;}}
var Lm=D(DT);
var Bh9=null;function ATn(){ATn=N(Lm);APt();}
function BbS(){var a=new Lm();ACj(a);return a;}
function ACj(a){ATn();Ha(a);}
function A48(a,b){A70(b);}
function APt(){Bh9=BbS();}
function Dd(){Bt.call(this);this.Y=null;}
function FW(a,b,c,d){I_(a,c);a.Y=b;a.AF(d);}
function A$8(a){return a.Y;}
function AQb(a,b){return !a.Y.ca(b)&&!a.k.ca(b)?0:1;}
function A9b(a,b){return 1;}
function AM1(a){var b;a.cF=1;if(a.k!==null&&!a.k.cF){b=a.k.h8();if(b!==null){a.k.cF=1;a.k=b;}a.k.ed();}if(a.Y!==null){if(!a.Y.cF){b=a.Y.h8();if(b!==null){a.Y.cF=1;a.Y=b;}a.Y.ed();}else if(a.Y instanceof Fz&&a.Y.dn.tj)a.Y=a.Y.k;}}
var RA=D(Dd);
function BaI(a,b,c){var d=new RA();AEy(d,a,b,c);return d;}
function AEy(a,b,c,d){FW(a,b,c,d);}
function A$4(a,b,c,d){var e;e=d.J();if(e>b)return a.k.cI(b,e,c,d);return a.k.e(b,c,d);}
function AQ1(a,b,c,d){var e;e=d.J();if(a.k.cI(b,e,c,d)>=0)return b;return (-1);}
function A5$(a){return B(52);}
function Cy(){var a=this;Bt.call(a);a.tj=0;a.lA=0;}
var Bh$=null;function JF(){JF=N(Cy);AZF();}
function Bfl(a){var b=new Cy();Et(b,a);return b;}
function Et(a,b){JF();Co(a);a.lA=b;}
function AEU(a,b,c,d){var e,f;e=d.nE(a.lA);d.uY(a.lA,b);f=a.k.e(b,c,d);if(f<0)d.uY(a.lA,e);return f;}
function A3H(a){return a.lA;}
function AJZ(a){return B(53);}
function AFt(a,b){return 0;}
function AZF(){Bh$=Baa();}
var Ks=D(Cy);
function Bh_(a){var b=new Ks();AB2(b,a);return b;}
function AB2(a,b){Et(a,b);}
function AFF(a,b,c,d){var e,f;e=a.ka();f=d.ev(e);if(f!=b)b=(-1);return b;}
function A8O(a){return B(54);}
var Mz=D(0);
function OT(){var a=this;BB.call(a);a.q_=null;a.AH=0;}
function Bc2(a){var b=new OT();ARI(b,a);return b;}
function ARI(a,b){CP(a);a.q_=b.mg();a.AH=b.bD;}
function AZV(a,b){a.k=b;}
function AKg(a,b,c,d){var e,f,g,h,i,j,k;e=d.dI();f=d.J();g=b+1|0;h=B9(g,f);if(h>0){d.d5=1;return (-1);}i=c.f(b);if(!a.q_.p(i))return (-1);if(BY(i)){if(h<0){j=c.f(g);if(BG(j))return (-1);}}else if(BG(i)&&b>e){k=c.f(b-1|0);if(BY(k))return (-1);}return a.k.e(g,c,d);}
function A5N(a){return ((((I()).a(B(55))).a(!a.AH?B(56):B(57))).a(a.q_.b())).b();}
var CH=D(Dd);
function BdB(a,b,c){var d=new CH();Fd(d,a,b,c);return d;}
function Fd(a,b,c,d){FW(a,b,c,d);}
function AVd(a,b,c,d){var e;if(!a.Y.ba(d))return a.k.e(b,c,d);e=a.Y.e(b,c,d);if(e>=0)return e;return a.k.e(b,c,d);}
function A1D(a){return B(58);}
var Rz=D(CH);
function BdX(a,b,c){var d=new Rz();AXz(d,a,b,c);return d;}
function AXz(a,b,c,d){Fd(a,b,c,d);}
function ATv(a,b,c,d){var e;if(!a.Y.ba(d))return a.k.e(b,c,d);e=a.k.e(b,c,d);if(e>=0)return e;return a.Y.e(b,c,d);}
var Ko=D(0);
var AAo=D(Do);
function Bd$(a){var b=new AAo();AS_(b,a);return b;}
function AS_(a,b){GI(a,b,1.0,1.0);}
function AJx(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(BY(l)){if(j>=d){if(h.dO(2)){j=j+(-1)|0;break a;}Bj();i=BgN;break a;}m=k[j];if(!BG(m)){i=BV(1);break a;}j=j+(-1)|0;i=F$(2);break a;}if(BG(l))i=BV(1);if(l>=128){i=F$(1);j=j+(-1)|0;break a;}k=e.data;n=f+1|0;k[f]=l<<24>>24;c=j;f=n;}j=c;}h.em(j);h.dR(f);return i;}
var Dc=D();
var BgQ=null;var Bia=null;var Bib=null;var BhW=null;var Bic=null;var Bid=null;var Bie=null;var Bif=null;function BH(){var a=this;C.call(a);a.dc=Ba;a.DF=0;}
var Big=null;function NJ(){NJ=N(BH);AXy();}
function QU(b){var c;NJ();c=0;while(c<Big.h){if(!(Big.l(c)).PL(b))return D9(O(1),c);c=c+1|0;}return Ba;}
function PV(b){var c;NJ();c=(-1);a:{while(Dx(b,Ba)){c=c+1|0;if(c>=63)break a;if(Dx(Br(M$(b,c),O(1)),Ba))break a;}}return c>=0&&c<Big.h?Big.l(c):null;}
function BQ(b){var c;NJ();c=QU(b);if(Hr(c,Ba))return c;Big.F(b);return D9(O(1),Big.h-1|0);}
function Fb(a,b){NJ();J(a);a.dc=b;a.DF=Xf(b);}
function AWu(a,b){return b.bp()!=a.bp()?0:1;}
function AUt(a,b){var c;if(b===null)return 0;if(b===a)return 1;if(!(b instanceof BH))return 0;c=b;if(Z(a.dc,c.dc))return a.zJ(c);return 0;}
function ARH(a){return PV(a.dc);}
function F2(a){return 7489*a.DF|0;}
function AXy(){Big=Bp();}
var Dn=D(B4);
function Bih(){var a=new Dn();Jt(a);return a;}
function Jt(a){E$(a);}
var Ix=D(0);
var H9=D();
function Bii(){var a=new H9();QO(a);return a;}
function QO(a){J(a);}
function AVn(a,b){}
var KP=D(0);
function FA(){var a=this;H9.call(a);a.ns=null;a.MW=null;a.r3=0;a.CG=0;a.jM=null;a.sv=null;}
function Bij(a,b,c,d,e,f){var g=new FA();AAD(g,a,b,c,d,e,f);return g;}
function AAD(a,b,c,d,e,f,g){QO(a);a.ns=b;a.MW=c;a.r3=d;a.CG=e;a.jM=f;a.sv=g;}
function AUk(a){return a.ns;}
function AOM(a){return AHR(a.r3,a.CG);}
function AJE(a){return a.jM.go();}
function AEP(a){var b,c,d,e;b=I();b.a(ABw(a.so()));if(b.i()>0)b.T(32);(b.a((a.ns.u()).b())).T(40);c=a.vv();d=0;while(true){e=c.data;if(d>=e.length)break;if(d>0)b.T(44);b.a(e[d].u());d=d+1|0;}return (b.T(41)).b();}
function A7S(a,b){var c,d,e,f,g,h,i;if(a.r3&1)G(Bf1());if(a.sv===null)G(Bbp());c=b.data;d=c.length;if(d!=a.jM.data.length)G(CK());e=0;while(true){if(e>=d){f=b.data;g=new (a.ns.g_);a.sv.call(g,f);return g;}if(!a.jM.data[e].hf()&&c[e]!==null){h=a.jM.data[e];i=c[e];if(!h.vW(i))G(CK());}if(a.jM.data[e].hf()&&c[e]===null)break;e=e+1|0;}G(CK());}
var AAe=D(D8);
function AYI(a){var b=new AAe();AM9(b,a);return b;}
function AM9(a,b){AAj(a,b);}
var Mk=D(0);
function XS(){C.call(this);this.HD=null;}
function Bf3(a){var b=new XS();ALx(b,a);return b;}
function ALx(a,b){a.HD=b;J(a);}
function AP7(a){}
function AOu(a){a.Il();}
var XP=D(CH);
function BeC(a,b,c){var d=new XP();A2e(d,a,b,c);return d;}
function A2e(a,b,c,d){Fd(a,b,c,d);JF();b.Q(Bh$);}
function A4b(a,b,c,d){var e,f;e=a.Y.e(b,c,d);if(e<0)return (-1);if(e>b){while(true){f=a.Y.e(e,c,d);if(f<=e)break;e=f;}b=e;}return a.k.e(b,c,d);}
var By=D();
var Bik=null;var Bil=null;var Bim=null;var Bin=null;var Bio=null;var Bip=null;var Biq=null;var Bir=null;var Bis=null;var Bit=null;var Biu=null;var Biv=null;var Biw=null;var Bix=null;var Biy=null;var Biz=null;var BiA=null;var BiB=null;var BiC=null;var BiD=null;var BiE=null;var BiF=null;var BiG=null;var BiH=null;var BiI=null;function J8(){J8=N(By);AU8();}
function Dz(){J8();return BiH.eT();}
function US(){J8();BiH.ep();BiI.ep();}
function AU8(){Bik=D3();Bil=D3();Bim=D3();Bin=D3();Bio=D3();Bip=S();Biq=S();Bir=S();Bis=S();Bit=S();Biu=S();Biv=S();Biw=S();Bix=CL();Biy=CL();Biz=CL();BiA=CL();BiB=CL();BiC=CL();BiD=CL();BiE=CL();BiF=CL();BiG=BL();BiH=BaT();BiI=Be4();}
function ES(){var a=this;C.call(a);a.B=null;a.bq=0;}
function BiJ(){var a=new ES();J6(a);return a;}
function Bf0(a){var b=new ES();JT(b,a);return b;}
function J6(a){JT(a,16);}
function JT(a,b){J(a);a.B=BW(b);}
function Y2(a,b){return a.wR(a.bq,b);}
function Lj(a,b){return a.k4(a.bq,b);}
function NW(a,b,c){var d,e,f;if(b>=0&&b<=a.bq){if(c===null)c=B(59);else if(c.bN())return a;a.gY(a.bq+c.i()|0);d=a.bq-1|0;while(d>=b){a.B.data[d+c.i()|0]=a.B.data[d];d=d+(-1)|0;}a.bq=a.bq+c.i()|0;d=0;while(d<c.i()){e=a.B.data;f=b+1|0;e[b]=c.f(d);d=d+1|0;b=f;}return a;}G(Ki());}
function PH(a,b){return a.AX(b,10);}
function AVV(a,b,c){return a.LD(a.bq,b,c);}
function A1G(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(c<0){e=0;c= -c|0;}a:{if(c<d){if(e)Cn(a,b,b+1|0);else{Cn(a,b,b+2|0);f=a.B.data;g=b+1|0;f[b]=45;b=g;}a.B.data[b]=FQ(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Cg(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;Cn(a,b,b+i|0);if(e)l=b;else{f=a.B.data;l=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.B.data;g=l+1|0;f[l]=FQ(c/k|0,d);c=c%k|0;k=k/d|0;l=g;}}}return a;}
function ACe(a,b){return a.DW(a.bq,b);}
function RM(a,b,c){return a.MX(b,c,10);}
function AMY(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(Kt(c,Ba)){e=0;c=A37(c);}a:{f=O(d);if(Kt(c,f)){if(e)Cn(a,b,b+1|0);else{Cn(a,b,b+2|0);g=a.B.data;h=b+1|0;g[b]=45;b=h;}a.B.data[b]=FQ(Cp(c),d);}else{i=1;j=O(1);while(true){k=Cf(j,f);if(Ku(k,j))break;if(Hr(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;Cn(a,b,b+i|0);if(e)l=b;else{g=a.B.data;l=b+1|0;g[b]=45;}while(true){if(Ku(j,Ba))break a;g=a.B.data;h=l+1|0;g[l]=FQ(Cp(E_(c,j)),d);c=AU6(c,j);j=E_(j,f);l=h;}}}return a;}
function TL(a,b){return a.CU(a.bq,b);}
function Z3(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=B9(c,0.0);if(!d){Cn(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=48;e=a.B.data;f=d+1|0;e[d]=46;a.B.data[f]=48;return a;}if(!d){Cn(a,b,b+4|0);e=a.B.data;d=b+1|0;e[b]=45;e=a.B.data;f=d+1|0;e[d]=48;e=a.B.data;d=f+1|0;e[f]=46;a.B.data[d]=48;return a;}if(isNaN(c)?1:0){Cn(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=78;e=a.B.data;f=d+1|0;e[d]=97;a.B.data[f]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Cn(a,b,b+8|0);d=b;}else{Cn(a,b,b+9|0);e=a.B.data;d=b+1|0;e[b]=45;}e=a.B.data;f=d+
1|0;e[d]=73;e=a.B.data;d=f+1|0;e[f]=110;e=a.B.data;f=d+1|0;e[d]=102;e=a.B.data;d=f+1|0;e[f]=105;e=a.B.data;f=d+1|0;e[d]=110;e=a.B.data;d=f+1|0;e[f]=105;e=a.B.data;f=d+1|0;e[d]=116;a.B.data[f]=121;return a;}Bai();g=BgG;ZR(c,g);h=g.rb;i=g.qM;j=g.v_;k=1;l=1;if(j)l=2;m=9;n=AQ7(h);if(n>0)m=m-n|0;if(i<7&&i>=(-3)){if(i>=0){k=i+1|0;m=Bf(m,k+1|0);i=0;}else{h=h/BgC.data[ -i|0]|0;m=m-i|0;i=0;}}if(i){l=l+2|0;if(!(i>(-10)&&i<10))l=l+1|0;if(i<0)l=l+1|0;}if(i&&m==k)m=m+1|0;d=l+m|0;Cn(a,b,b+d|0);if(!j)f=b;else{e=a.B.data;f
=b+1|0;e[b]=45;}o=100000000;p=0;while(p<m){if(o<=0)q=0;else{q=h/o|0;h=h%o|0;}e=a.B.data;d=f+1|0;e[f]=(48+q|0)&65535;k=k+(-1)|0;if(k)f=d;else{e=a.B.data;f=d+1|0;e[d]=46;}o=o/10|0;p=p+1|0;}if(i){e=a.B.data;d=f+1|0;e[f]=69;if(i>=0)f=d;else{i= -i|0;e=a.B.data;f=d+1|0;e[d]=45;}if(i<10)r=f;else{e=a.B.data;r=f+1|0;e[f]=(48+(i/10|0)|0)&65535;}a.B.data[r]=(48+(i%10|0)|0)&65535;}return a;}
function AQ7(b){var c,d,e,f;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;f=e*100|0;if(b%f|0)f=e;else c=c|2;if(!(b%(f*10|0)|0))c=c|1;return c;}
function Nb(a,b){return a.u$(a.bq,b);}
function Ow(a,b,c){Cn(a,b,b+1|0);a.B.data[b]=c;return a;}
function QJ(a,b,c){return a.k4(b,c===null?B(59):c.b());}
function Tg(a,b){return a.xu(a.bq,b);}
function OH(a,b,c){return a.k4(b,!c?B(60):B(61));}
function Mx(a,b){var c;if(a.B.data.length>=b)return;c=a.B.data.length>=1073741823?2147483647:Bf(b,Bf(a.B.data.length*2|0,5));a.B=JX(a.B,c);}
function Nv(a){return F1(a.B,0,a.bq);}
function M3(a){return a.bq;}
function O4(a,b){if(b>=0&&b<a.bq)return a.B.data[b];G(C9());}
function PL(a,b,c,d){return a.vx(a.bq,b,c,d);}
function ZO(a,b,c,d,e){var f,g;if(d<=e&&e<=c.i()&&d>=0){Cn(a,b,(b+e|0)-d|0);while(d<e){f=a.B.data;g=b+1|0;f[b]=c.f(d);d=d+1|0;b=g;}return a;}G(C9());}
function ACO(a,b){return a.E0(b,0,b.i());}
function Oq(a,b,c,d){return a.uD(a.bq,b,c,d);}
function Mo(a,b,c,d,e){var f,g,h,i,j;Cn(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.B.data;i=b+1|0;j=d+1|0;h[b]=g[d];b=i;d=j;}return a;}
function ND(a,b){return a.tW(b,0,b.data.length);}
function AA8(a,b,c){return a.ce(b,c);}
function Yr(a,b,c,d,e){var f,g,h,i;if(b>c)G(Bg(B(62)));while(b<c){f=d.data;g=e+1|0;h=a.B.data;i=b+1|0;f[e]=h[b];e=g;b=i;}}
function ABK(a,b){a.bq=b;}
function ABY(a,b){var c,d,e;if(b>=0&&b<a.bq){a.bq=a.bq-1|0;while(b<a.bq){c=a.B.data;d=a.B.data;e=b+1|0;c[b]=d[e];b=e;}return a;}G(Ki());}
function ACd(a,b,c){var d,e,f,g,h,i;d=B9(b,c);if(d<=0&&b<=a.bq){if(!d)return a;e=a.bq-c|0;a.bq=a.bq-(c-b|0)|0;f=0;while(f<e){g=a.B.data;d=b+1|0;h=a.B.data;i=c+1|0;g[b]=h[c];f=f+1|0;b=d;c=i;}return a;}G(Ki());}
function Cn(a,b,c){var d,e;d=a.bq-b|0;a.gY((a.bq+c|0)-b|0);e=d-1|0;while(e>=0){a.B.data[c+e|0]=a.B.data[b+e|0];e=e+(-1)|0;}a.bq=a.bq+(c-b|0)|0;}
function Xa(a,b,c){if(b<=c&&b>=0&&c<=a.bq)return F1(a.B,b,c-b|0);G(C9());}
var Fw=D(0);
var PI=D(ES);
function A6A(){var a=new PI();A1d(a);return a;}
function A1d(a){J6(a);}
function AG9(a,b){Lj(a,b);return a;}
function AQ2(a,b){Nb(a,b);return a;}
function ATu(a,b,c,d){Oq(a,b,c,d);return a;}
function AHT(a,b){ND(a,b);return a;}
function AV6(a,b,c,d){PL(a,b,c,d);return a;}
function A8U(a,b){ACO(a,b);return a;}
function A3y(a,b,c,d,e){ZO(a,b,c,d,e);return a;}
function A3Q(a,b,c,d,e){Mo(a,b,c,d,e);return a;}
function A9z(a,b,c){Ow(a,b,c);return a;}
function A7e(a,b,c){NW(a,b,c);return a;}
function AIx(a,b,c,d,e){return a.Ov(b,c,d,e);}
function AWY(a,b,c,d){return a.Lg(b,c,d);}
function A0v(a,b,c,d,e){return a.IC(b,c,d,e);}
function A6P(a,b,c,d){return a.No(b,c,d);}
function AUP(a,b){return O4(a,b);}
function A$3(a){return M3(a);}
function AXc(a){return Nv(a);}
function AXs(a,b){Mx(a,b);}
function A8e(a,b,c){return a.QL(b,c);}
function AU3(a,b,c){return a.HH(b,c);}
var EJ=D(0);
function CT(){var a=this;C.call(a);a.hB=0;a.C=0;a.bb=0;a.fE=0;}
function FJ(a,b){J(a);a.fE=(-1);a.hB=b;a.bb=b;}
function CV(a){return a.hB;}
function B8(a){return a.C;}
function GM(a,b){if(b>=0&&b<=a.bb){a.C=b;if(b<a.fE)a.fE=0;return a;}G(W(((((((I()).a(B(63))).j(b)).a(B(64))).j(a.bb)).a(B(65))).b()));}
function BD(a){return a.bb;}
function IZ(a,b){if(b>=0&&b<=a.hB){if(a.fE>b)a.fE=(-1);a.bb=b;if(a.C>a.bb)a.C=a.bb;return a;}G(W(((((((I()).a(B(66))).j(b)).a(B(64))).j(a.hB)).a(B(65))).b()));}
function FZ(a){a.C=0;a.bb=a.hB;a.fE=(-1);return a;}
function G8(a){a.bb=a.C;a.C=0;a.fE=(-1);return a;}
function Bb(a){return a.bb-a.C|0;}
function Cb(a){return a.C>=a.bb?0:1;}
var N6=D();
var BiK=null;function AIo(){AIo=N(N6);ADj();}
function Qf(b){AIo();return BiK.W(b);}
function ACz(){var b;AIo();BiK.K();b=BiK;Bv();b.x(B(67),BiL);BiK.x(B(68),BiM);BiK.x(B(69),BiN);BiK.x(B(70),BiO);BiK.x(B(71),BiP);BiK.x(B(72),BiQ);BiK.x(B(73),BiR);BiK.x(B(74),BiS);BiK.x(B(75),BiT);BiK.x(B(76),BiU);BiK.x(B(77),BiV);BiK.x(B(78),BiW);BiK.x(B(79),BiX);BiK.x(B(80),BiY);BiK.x(B(81),BiZ);BiK.x(B(82),Bi0);BiK.x(B(83),Bi1);BiK.x(B(84),Bi2);BiK.x(B(85),Bi3);BiK.x(B(86),Bi4);BiK.x(B(87),Bi5);BiK.x(B(88),Bi6);BiK.x(B(89),Bi7);BiK.x(B(90),Bi8);BiK.x(B(91),Bi9);BiK.x(B(92),Bi$);BiK.x(B(93),Bi_);BiK.x(B(94),
Bja);BiK.x(B(95),Bjb);BiK.x(B(96),Bjc);BiK.x(B(97),Bjd);BiK.x(B(98),Bje);BiK.x(B(99),Bjf);BiK.x(B(100),Bjg);}
function ADj(){BiK=DH();ACz();}
var E8=D();
function Mg(a){J(a);}
function Q(){var a=this;E8.call(a);a.bD=0;a.b5=0;a.bG=null;a.mz=null;a.m1=null;a.be=0;}
var Bjh=null;function Kd(){Kd=N(Q);AGQ();}
function Be(a){Kd();Mg(a);a.bG=Bfd(2048);}
function AWV(a){return null;}
function AVW(a){return a.bG;}
function A3F(a){return !a.b5?(a.bG.lb(0)>=2048?0:1):a.bG.P7(0)>=2048?0:1;}
function A08(a){return a.be;}
function A7_(a){return a;}
function AEN(a){var b;if(a.m1===null){b=a.ci();a.m1=BcU(a,b);a.m1.f$(a.b5);}return a.m1;}
function AW5(a){var b;if(a.mz===null){b=a.ci();a.mz=Bbb(a,b,a);a.mz.f$(a.jH());a.mz.be=a.be;}return a.mz;}
function A$c(a){return 0;}
function ARQ(a,b){if(a.bD^b){a.bD=a.bD?0:1;a.b5=a.b5?0:1;}if(!a.be)a.be=1;return a;}
function AIv(a){return a.bD;}
function IY(b,c){Kd();return b.p(c);}
function GV(b,c){Kd();if(b.bK()!==null&&c.bK()!==null)return (b.bK()).L7(c.bK());return 1;}
function KZ(b,c){Kd();return (ACa(Bjh,b)).Ht(c);}
function AGQ(){Bjh=BaS();}
function Zy(){Q.call(this);this.F3=null;}
function Bbo(a){var b=new Zy();A2c(b,a);return b;}
function A2c(a,b){a.F3=b;Be(a);}
function ATi(a,b){return Yh(b);}
var Gw=D();
var Bji=null;var Bjj=null;var Bjk=null;function AP0(){AP0=N(Gw);AHB();}
function BaS(){var a=new Gw();TV(a);return a;}
function TV(a){AP0();J(a);}
function ACa(a,b){var c,d,e;c=0;while(true){AP0();if(c>=Bjk.data.length)G(Bbt(B(101),B(101),b));d=Bjk.data[c];e=d.data;if(b.z(e[0]))break;c=c+1|0;}return e[1];}
function AHB(){Bji=Bcf();Bjj=Beg();Bjk=H($rt_arraycls(C),[H(C,[B(102),BcM()]),H(C,[B(103),A_N()]),H(C,[B(104),Bfw()]),H(C,[B(105),BfS()]),H(C,[B(106),Bjj]),H(C,[B(107),Bew()]),H(C,[B(108),Ba4()]),H(C,[B(109),Bdk()]),H(C,[B(110),Bda()]),H(C,[B(111),A_6()]),H(C,[B(112),Bay()]),H(C,[B(113),Bdo()]),H(C,[B(114),BbQ()]),H(C,[B(115),A_I()]),H(C,[B(116),BfJ()]),H(C,[B(117),Bas()]),H(C,[B(118),Beu()]),H(C,[B(119),BdN()]),H(C,[B(120),Bev()]),H(C,[B(121),A_9()]),H(C,[B(122),BfY()]),H(C,[B(123),BdF()]),H(C,[B(124),Bbr()]),
H(C,[B(125),Bfu()]),H(C,[B(126),Bfo()]),H(C,[B(127),Bct()]),H(C,[B(128),A_8()]),H(C,[B(129),Bfe()]),H(C,[B(130),Bji]),H(C,[B(131),BbA()]),H(C,[B(132),Bdl()]),H(C,[B(133),Bji]),H(C,[B(134),A_G()]),H(C,[B(135),Bjj]),H(C,[B(136),BaL()]),H(C,[B(137),M(0,127)]),H(C,[B(138),M(128,255)]),H(C,[B(139),M(256,383)]),H(C,[B(140),M(384,591)]),H(C,[B(141),M(592,687)]),H(C,[B(142),M(688,767)]),H(C,[B(143),M(768,879)]),H(C,[B(144),M(880,1023)]),H(C,[B(145),M(1024,1279)]),H(C,[B(146),M(1280,1327)]),H(C,[B(147),M(1328,1423)]),
H(C,[B(148),M(1424,1535)]),H(C,[B(149),M(1536,1791)]),H(C,[B(150),M(1792,1871)]),H(C,[B(151),M(1872,1919)]),H(C,[B(152),M(1920,1983)]),H(C,[B(153),M(2304,2431)]),H(C,[B(154),M(2432,2559)]),H(C,[B(155),M(2560,2687)]),H(C,[B(156),M(2688,2815)]),H(C,[B(157),M(2816,2943)]),H(C,[B(158),M(2944,3071)]),H(C,[B(159),M(3072,3199)]),H(C,[B(160),M(3200,3327)]),H(C,[B(161),M(3328,3455)]),H(C,[B(162),M(3456,3583)]),H(C,[B(163),M(3584,3711)]),H(C,[B(164),M(3712,3839)]),H(C,[B(165),M(3840,4095)]),H(C,[B(166),M(4096,4255)]),
H(C,[B(167),M(4256,4351)]),H(C,[B(168),M(4352,4607)]),H(C,[B(169),M(4608,4991)]),H(C,[B(170),M(4992,5023)]),H(C,[B(171),M(5024,5119)]),H(C,[B(172),M(5120,5759)]),H(C,[B(173),M(5760,5791)]),H(C,[B(174),M(5792,5887)]),H(C,[B(175),M(5888,5919)]),H(C,[B(176),M(5920,5951)]),H(C,[B(177),M(5952,5983)]),H(C,[B(178),M(5984,6015)]),H(C,[B(179),M(6016,6143)]),H(C,[B(180),M(6144,6319)]),H(C,[B(181),M(6400,6479)]),H(C,[B(182),M(6480,6527)]),H(C,[B(183),M(6528,6623)]),H(C,[B(184),M(6624,6655)]),H(C,[B(185),M(6656,6687)]),
H(C,[B(186),M(7424,7551)]),H(C,[B(187),M(7552,7615)]),H(C,[B(188),M(7616,7679)]),H(C,[B(189),M(7680,7935)]),H(C,[B(190),M(7936,8191)]),H(C,[B(191),M(8192,8303)]),H(C,[B(192),M(8304,8351)]),H(C,[B(193),M(8352,8399)]),H(C,[B(194),M(8400,8447)]),H(C,[B(195),M(8448,8527)]),H(C,[B(196),M(8528,8591)]),H(C,[B(197),M(8592,8703)]),H(C,[B(198),M(8704,8959)]),H(C,[B(199),M(8960,9215)]),H(C,[B(200),M(9216,9279)]),H(C,[B(201),M(9280,9311)]),H(C,[B(202),M(9312,9471)]),H(C,[B(203),M(9472,9599)]),H(C,[B(204),M(9600,9631)]),
H(C,[B(205),M(9632,9727)]),H(C,[B(206),M(9728,9983)]),H(C,[B(207),M(9984,10175)]),H(C,[B(208),M(10176,10223)]),H(C,[B(209),M(10224,10239)]),H(C,[B(210),M(10240,10495)]),H(C,[B(211),M(10496,10623)]),H(C,[B(212),M(10624,10751)]),H(C,[B(213),M(10752,11007)]),H(C,[B(214),M(11008,11263)]),H(C,[B(215),M(11264,11359)]),H(C,[B(216),M(11392,11519)]),H(C,[B(217),M(11520,11567)]),H(C,[B(218),M(11568,11647)]),H(C,[B(219),M(11648,11743)]),H(C,[B(220),M(11776,11903)]),H(C,[B(221),M(11904,12031)]),H(C,[B(222),M(12032,12255)]),
H(C,[B(223),M(12272,12287)]),H(C,[B(224),M(12288,12351)]),H(C,[B(225),M(12352,12447)]),H(C,[B(226),M(12448,12543)]),H(C,[B(227),M(12544,12591)]),H(C,[B(228),M(12592,12687)]),H(C,[B(229),M(12688,12703)]),H(C,[B(230),M(12704,12735)]),H(C,[B(231),M(12736,12783)]),H(C,[B(232),M(12784,12799)]),H(C,[B(233),M(12800,13055)]),H(C,[B(234),M(13056,13311)]),H(C,[B(235),M(13312,19893)]),H(C,[B(236),M(19904,19967)]),H(C,[B(237),M(19968,40959)]),H(C,[B(238),M(40960,42127)]),H(C,[B(239),M(42128,42191)]),H(C,[B(240),M(42752,
42783)]),H(C,[B(241),M(43008,43055)]),H(C,[B(242),M(44032,55203)]),H(C,[B(243),M(55296,56191)]),H(C,[B(244),M(56192,56319)]),H(C,[B(245),M(56320,57343)]),H(C,[B(246),M(57344,63743)]),H(C,[B(247),M(63744,64255)]),H(C,[B(248),M(64256,64335)]),H(C,[B(249),M(64336,65023)]),H(C,[B(250),M(65024,65039)]),H(C,[B(251),M(65040,65055)]),H(C,[B(252),M(65056,65071)]),H(C,[B(253),M(65072,65103)]),H(C,[B(254),M(65104,65135)]),H(C,[B(255),M(65136,65279)]),H(C,[B(256),M(65280,65519)]),H(C,[B(257),M(0,1114111)]),H(C,[B(258),
Bdp()]),H(C,[B(259),Bz(0,1)]),H(C,[B(260),G7(62,1)]),H(C,[B(261),Bz(1,1)]),H(C,[B(262),Bz(2,1)]),H(C,[B(263),Bz(3,0)]),H(C,[B(264),Bz(4,0)]),H(C,[B(265),Bz(5,1)]),H(C,[B(266),G7(448,1)]),H(C,[B(267),Bz(6,1)]),H(C,[B(268),Bz(7,0)]),H(C,[B(269),Bz(8,1)]),H(C,[B(270),G7(3584,1)]),H(C,[B(271),Bz(9,1)]),H(C,[B(272),Bz(10,1)]),H(C,[B(273),Bz(11,1)]),H(C,[B(274),G7(28672,0)]),H(C,[B(275),Bz(12,0)]),H(C,[B(276),Bz(13,0)]),H(C,[B(277),Bz(14,0)]),H(C,[B(278),Beb(983040,1,1)]),H(C,[B(279),Bz(15,0)]),H(C,[B(280),Bz(16,
1)]),H(C,[B(281),Bz(18,1)]),H(C,[B(282),Bbd(19,0,1)]),H(C,[B(283),G7(1643118592,1)]),H(C,[B(284),Bz(20,0)]),H(C,[B(285),Bz(21,0)]),H(C,[B(286),Bz(22,0)]),H(C,[B(287),Bz(23,0)]),H(C,[B(288),Bz(24,1)]),H(C,[B(289),G7(2113929216,1)]),H(C,[B(290),Bz(25,1)]),H(C,[B(291),Bz(26,0)]),H(C,[B(292),Bz(27,0)]),H(C,[B(293),Bz(28,1)]),H(C,[B(294),Bz(29,0)]),H(C,[B(295),Bz(30,0)])]);}
var Ny=D(0);
function JZ(){var a=this;C.call(a);a.eF=null;a.eJ=null;a.nD=null;a.pu=null;}
var Bjl=null;function Vc(){Vc=N(JZ);A7m();}
function AMh(){var a=new JZ();Qt(a);return a;}
function ADE(a,b){return b.M(a.nD);}
function A$S(a,b){return b.M(a.pu);}
function Qt(a){Vc();J(a);a.eF=S();a.eJ=S();a.nD=S();a.pu=S();a.K9();}
function A5o(a,b,c){a.eF.I(b.n>=c.n?c.n:b.n,b.o>=c.o?c.o:b.o,b.q>=c.q?c.q:b.q);a.eJ.I(b.n<=c.n?c.n:b.n,b.o<=c.o?c.o:b.o,b.q<=c.q?c.q:b.q);((a.nD.M(a.eF)).fB(a.eJ)).en(0.5);(a.pu.M(a.eJ)).gl(a.eF);return a;}
function A0Y(a){a.eF.I(Infinity,Infinity,Infinity);a.eJ.I((-Infinity),(-Infinity),(-Infinity));a.nD.I(0.0,0.0,0.0);a.pu.I(0.0,0.0,0.0);return a;}
function AQR(a){return a.DL(a.eF.I(0.0,0.0,0.0),a.eJ.I(0.0,0.0,0.0));}
function AUa(a,b,c,d){return a.DL(a.eF.I(HJ(a.eF.n,b),HJ(a.eF.o,c),HJ(a.eF.q,d)),a.eJ.I(Id(a.eJ.n,b),Id(a.eJ.o,c),Id(a.eJ.q,d)));}
function HJ(b,c){Vc();if(b>c)b=c;return b;}
function Id(b,c){Vc();if(b>c)c=b;return c;}
function A7m(){Bjl=S();}
var K4=D(0);
function ABs(){C.call(this);this.nr=null;}
function Bdu(a){var b=new ABs();ASI(b,a);return b;}
function ASI(a,b){J(a);a.nr=b;}
function AYe(a,b,c){GS();if(c===Bjm)return AVe(a.nr,b,c);G(U(((((I()).a(B(296))).dD(c)).a(B(297))).b()));}
function A9D(a,b){var c,d;c=new Gd;d=a.nr;GS();Ho(c,d,b,Bjn);return c;}
function AWP(a,b){var c,d;c=new Gd;d=a.nr;GS();Ho(c,d,b,Bjm);return c;}
var EN=D(Bx);
var Bjo=null;var Bjp=null;var Bjq=null;function AA6(){AA6=N(EN);AVF();}
function AW6(a,b){var c=new EN();AAh(c,a,b);return c;}
function Yy(){AA6();return Bjq.go();}
function AAh(a,b,c){AA6();Cw(a,b,c);}
function AVF(){Bjo=AW6(B(298),0);Bjp=AW6(B(299),1);Bjq=H(EN,[Bjo,Bjp]);}
var IR=D(T);
function Beg(){var a=new IR();TS(a);return a;}
function TS(a){Bo(a);}
function ZA(a){return (CR()).bF(48,57);}
var RZ=D(T);
function Bbr(){var a=new RZ();AF$(a);return a;}
function AF$(a){Bo(a);}
function A0x(a){var b;b=Bak(a);b.be=1;return b;}
var Nk=D(0);
function Ek(){var a=this;BB.call(a);a.mj=0;a.qS=null;a.p_=null;a.p6=0;}
function Bgd(a,b){var c=new Ek();J3(c,a,b);return c;}
function J3(a,b,c){CP(a);a.mj=1;a.p_=b;a.p6=c;}
function A$i(a,b){a.k=b;}
function AOl(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=Bc(4);f=0;g=d.J();if(b>=g)return (-1);h=a.vo(b,c,g);i=b+a.mj|0;j=ABM(h);if(j===null){k=e.data;l=1;k[f]=h;}else{l=j.data.length;X(j,0,e,0,l);l=f+l|0;}a:{if(i<g){m=a.vo(i,c,g);while(l<4){if(!A5L(m)){k=e.data;n=l+1|0;k[l]=m;}else{k=(ABM(m)).data;if(k.length!=2){o=e.data;n=l+1|0;o[l]=k[0];}else{o=e.data;m=l+1|0;o[l]=k[0];n=m+1|0;o[m]=k[1];}}i=i+a.mj|0;if(i>=g){l=n;break a;}m=a.vo(i,c,g);l=n;}}}if(l!=a.p6)return (-1);p=0;while(true){if(p>=l)return a.k.e(i,c,d);if
(e.data[p]!=a.p_.data[p])break;p=p+1|0;}return (-1);}
function Ik(a){var b,c;if(a.qS===null){b=I();c=0;while(c<a.p6){b.qZ(Eu(a.p_.data[c]));c=c+1|0;}a.qS=b.b();}return a.qS;}
function A46(a){return (((I()).a(B(300))).a(Ik(a))).b();}
function AKL(a,b,c,d){var e,f,g,h;a.mj=1;if(b>=(d-1|0))e=c.f(b);else{f=b+1|0;e=c.f(b);g=c.f(f);if(GA(e,g)){h=I5([e,g]);e=ST(h,0);a.mj=2;}}return e;}
function ALv(a,b){var c,d;a:{if(b instanceof Ek){c=b;if(!(Ik(c)).z(Ik(a))){d=0;break a;}}d=1;}return d;}
function A6t(a,b){return 1;}
var AAd=D(Ek);
function Ba_(a,b){var c=new AAd();AXm(c,a,b);return c;}
function AXm(a,b,c){J3(a,b,c);}
function Jw(){var a=this;C.call(a);a.sl=0;a.ua=null;a.ig=null;a.lM=0;}
function Xe(a){J(a);a.ig=null;a.lM=0;}
function ALi(a,b){a.ua=b;}
function N$(a){return a.ig===null?0:1;}
function ANX(a){if(!N$(a))return;a.lM=a.lM+1|0;if(!a.sl)a.Ni(a.ig.ll());else a.Mu(a.ig.ll());a.ig=null;}
function APe(a,b){if(b<0)G(W(B(301)));if(N$(a))a.jk();a.sl=0;a.ig=Bn(a.Mp(a.lM,b));}
function Zi(a,b){if(b!=a.lM)return;if(!a.sl)a.ig=null;if(a.ua!==null)a.ua.fd();}
var Zo=D();
function AHA(){return {};}
function Da(){var a=this;Jy.call(a);a.Bm=null;a.DQ=null;}
function GE(a,b,c,d){UZ(a,b,c,d);a.Bm=Cj(512);a.DQ=BW(512);}
function ARR(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.Bm;e=0;f=0;g=a.DQ;a:{while(true){if((e+32|0)>f&&Cb(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Bq(Bb(b)+j|0,i.length);b.z0(d,j,f-j|0);e=0;}if(!Cb(c)){if(!Cb(b)&&e>=f){Bj();k=BgN;}else{Bj();k=BgM;}break a;}i=g.data;l=0;m=Bq(Bb(c),i.length);n=BbP(b,c);k=a.nc(d,e,f,g,l,m,n);e=n.z9;if(k===null&&l==n.qy){Bj();k=BgN;}j=n.qy;c.P1(g,0,j);if(k!==null)break;}}b.f5(B8(b)-(f-e|0)|0);return k;}
var X9=D(Da);
function Bfi(a){var b=new X9();AGB(b,a);return b;}
function AGB(a,b){GE(a,b,1.0,1.0);}
function AT7(a,b,c,d,e,f,g,h){var i,j,k,l,m;i=null;a:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(l&128){i=BV(1);c=k+(-1)|0;break a;}j=e.data;m=f+1|0;j[f]=l&65535;c=k;f=m;}}h.em(c);h.dR(f);return i;}
var Ym=D();
function CD(){return Cf(Eb(),O(1000000));}
function Gg(){var a=this;C.call(a);a.ki=0;a.ky=0;a.CD=null;a.gU=null;a.bX=null;a.oZ=0;a.sx=null;a.ol=0;a.om=0;a.on=0;a.zO=0.0;a.m$=null;a.pe=null;a.zt=null;a.Kd=null;a.iw=null;a.km=null;}
var Bjr=null;var Bjs=0;var Bjt=null;function FD(){FD=N(Gg);ALF();}
function APy(a){var b=new Gg();Pb(b,a);return b;}
function O0(a,b,c){var d=new Gg();T$(d,a,b,c);return d;}
function Pb(a,b){var c,d,e;FD();J(a);a.ol=255;a.om=255;a.on=255;a.m$=Jm(a.ol,a.om,a.on,a.zO);Gv();a.pe=Bju;SM();a.zt=Bjv;c=b;d=c.rw();e=c.fT.iO.W(d);Mb(a,(-1),(-1),e,null);if(a.iw!==null)return;G(U(((((I()).a(B(302))).a(b.rw())).a(B(303))).b()));}
function T$(a,b,c,d){FD();J(a);a.ol=255;a.om=255;a.on=255;a.m$=Jm(a.ol,a.om,a.on,a.zO);Gv();a.pe=Bju;SM();a.zt=Bjv;Mb(a,b,c,null,null);}
function Mb(a,b,c,d,e){var f;if(e!==null){a.km=e;a.ki=e.getWidth();a.ky=e.getHeight();}else if(d===null){a.ki=b;a.ky=c;}else{a.iw=d;a.ki=d.width;a.ky=d.height;}AYt();a.CD=Bjw;a.sx=ML(4);FD();f=Bjs;Bjs=f+1|0;a.oZ=f;a.sx.K5(0,a.oZ);Bjr.x(Bn(a.oZ),a);}
function Ru(a){var b,c,d,e,f;b=(El()).hu();c=b.pg();d=c.createElement("canvas");a.gU=d;e=a.gU;f=a.ki;e.width=f;e=a.gU;f=a.ky;e.height=f;a.bX=a.gU.getContext("2d");e=a.bX;f=$rt_ustr((G3()).b());e.globalCompositeOperation=f;}
function G3(){FD();Iz();return Bjx;}
function Jm(b,c,d,e){FD();return ((((((((((I()).a(B(304))).j(b)).a(B(23))).j(c)).a(B(23))).j(d)).a(B(23))).cC(e)).a(B(24))).b();}
function ADD(a,b){var c,d;a.pe=b;G0(a);c=a.bX;d=$rt_ustr((G3()).b());c.globalCompositeOperation=d;}
function AG4(a){return a.CD;}
function AKV(a){return 6408;}
function ANu(a){return 6408;}
function AQs(a){return 5121;}
function AJu(a){return a.ki;}
function AMW(a){return a.ky;}
function A7c(a){return a.sx;}
function AXK(a){FD();Bjr.IN(Bn(a.oZ));}
function ADV(a){G0(a);return a.gU;}
function G0(a){var b,c;if(a.gU===null){Ru(a);if(a.iw!==null){b=a.bX;Iz();c=$rt_ustr(E6(Bjy));b.globalCompositeOperation=c;b=a.bX;c=a.iw;b.drawImage(c,0.0,0.0);b=a.bX;c=$rt_ustr(E6(G3()));b.globalCompositeOperation=c;}if(a.km!==null){c=a.bX;Iz();b=$rt_ustr(E6(Bjy));c.globalCompositeOperation=b;b=a.bX;c=a.km;b.drawImage(c,0.0,0.0);b=a.bX;c=$rt_ustr(E6(G3()));b.globalCompositeOperation=c;}}}
function AFs(a){return a.gU===null&&a.iw!==null?1:0;}
function ARa(a){return a.iw;}
function A5d(a){return a.gU===null&&a.km!==null?1:0;}
function A$v(a){return a.km;}
function AY8(a,b,c,d,e,f,g,h){var i;i=b.sU();Ol(a,i,e,f,g,h,c,d,g,h);}
function APo(a,b,c,d,e,f,g,h,i,j){Ol(a,b.sU(),c,d,e,f,g,h,i,j);}
function Ol(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u;G0(a);k=a.pe;Gv();if(k===Bjz){l=a.bX;k=$rt_ustr(Bjt);l.fillStyle=k;l=a.bX;k=$rt_ustr(Bjt);l.strokeStyle=k;l=a.bX;k="destination-out";l.globalCompositeOperation=k;a.bX.beginPath();l=a.bX;m=g;n=h;o=i;p=j;l.rect(m,n,o,p);AA6();RQ(a,Bjo);a.bX.closePath();l=a.bX;k=$rt_ustr(a.m$);l.fillStyle=k;q=a.bX;l=$rt_ustr(a.m$);q.strokeStyle=l;q=a.bX;Iz();l=$rt_ustr(E6(Bjx));q.globalCompositeOperation=l;}if(e&&f&&i&&j){l=a.bX;m=c;n=d;o=e;p=f;r=g;s=h;t=i;u=j;l.drawImage(b,
m,n,o,p,r,s,t,u);}a.Kd=null;}
function RQ(a,b){a:{G0(a);BfI();switch(BjA.data[BC(b)]){case 1:break;case 2:a.bX.stroke();break a;default:break a;}a.bX.fill();}}
function ALF(){Bjr=C6();Bjs=0;Bjt=Jm(255,255,255,1.0);}
function HE(){BH.call(this);this.IK=null;}
var BjB=Ba;var BjC=Ba;function ABD(){ABD=N(HE);A$T();}
function A$T(){BjB=BQ(B(305));BjC=BjB;}
var ACE=D(Cy);
function Bc4(){var a=new ACE();AUr(a);return a;}
function AUr(a){Et(a,(-1));}
function AX$(a,b,c,d){return b;}
function A15(a){return B(306);}
var KQ=D(0);
var JC=D(BB);
function BcF(a,b){var c=new JC();VY(c,a,b);return c;}
function VY(a,b,c){Sz(a,b,c);}
function AOn(a,b,c,d){var e,f,g,h,i;e=d.ev(a.bm);d.by(a.bm,b);f=a.bQ.df();g=0;while(true){if(g>=f){d.by(a.bm,e);return (-1);}h=a.bQ.l(g);i=h.e(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function AMo(a){return B(307);}
function A6R(a,b){var c;c=b.ev(a.bm);return !c?0:1;}
var Ds=D(JC);
function Bde(a,b){var c=new Ds();Gc(c,a,b);return c;}
function Gc(a,b,c){VY(a,b,c);}
function AYP(a,b,c,d){var e,f,g,h,i;e=d.ev(a.bm);d.by(a.bm,b);f=a.bQ.df();g=0;while(g<f){h=a.bQ.l(g);i=h.e(b,c,d);if(i>=0)return a.k.e(a.dn.dM(),c,d);g=g+1|0;}d.by(a.bm,e);return (-1);}
function A6q(a,b){a.k=b;}
function AD5(a){return B(307);}
var VB=D(Ds);
function BdK(a,b){var c=new VB();AJd(c,a,b);return c;}
function AJd(a,b,c){Gc(a,b,c);}
function AOC(a,b,c,d){var e,f,g,h;e=a.bQ.df();f=0;while(f<e){g=a.bQ.l(f);h=g.e(b,c,d);if(h>=0)return a.k.e(b,c,d);f=f+1|0;}return (-1);}
function ARY(a,b){return 0;}
function A$d(a){return B(308);}
var Gx=D(0);
var Pv=D();
function Bd8(){var a=new Pv();A5E(a);return a;}
function A5E(a){J(a);}
function Ig(){C.call(this);this.qc=null;}
function SE(a){J(a);a.qc=Bp();}
function A19(a,b){var c,d,e;c=b.kO;if(c!==null&&c.uG(b))return c;d=a.qc.bZ();while(true){if(!d.bC()){e=a.Gc(b);if(e.uG(b)){e.Eh();a.qc.F(e);return e;}G(U(B(309)));}e=d.bz();if(e.uG(b))break;}return e;}
function Pu(){Ig.call(this);this.wh=null;}
function BjD(a){var b=new Pu();WV(b,a);return b;}
function Be1(){var a=new Pu();A$f(a);return a;}
function WV(a,b){SE(a);if(b===null)b=BcB();a.wh=b;}
function A$f(a){WV(a,null);}
function ASk(a,b){return BaK(b,a.wh);}
var ABx=D(Ds);
function BcZ(a,b){var c=new ABx();AIq(c,a,b);return c;}
function AIq(a,b,c){Gc(a,b,c);}
function AFj(a,b,c,d){var e,f,g;e=a.bQ.df();f=0;while(true){if(f>=e)return a.k.e(b,c,d);g=a.bQ.l(f);if(g.e(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A8p(a,b){return 0;}
function AJa(a){return B(310);}
var Ld=D(0);
function Hp(){var a=this;C.call(a);a.Cn=null;a.pa=0;a.oQ=0;a.ku=null;a.dd=null;a.Df=0;a.jN=0;}
var BjE=0;function Bed(a,b,c,d){var e=new Hp();AX7(e,a,b,c,d);return e;}
function AX7(a,b,c,d,e){J(a);a.pa=0;a.oQ=0;a.jN=0;a.Cn=b;a.dd=c;a.ku=d;a.Df=e;if(a.dd!==null){a.dd=N0(a,a.dd);a.pa=a.dd.bo();a.oQ=a.dd.bl();if(d===null)a.ku=a.dd.f9();}}
function AUJ(a){return a.jN;}
function AX8(a){if(a.jN)G(U(B(311)));if(a.dd===null){a.dd=N0(a,APy(a.Cn));a.pa=a.dd.bo();a.oQ=a.dd.bl();if(a.ku===null)a.ku=a.dd.f9();}a.jN=1;}
function N0(a,b){var c,d,e,f,g;a:{if(Bie===null&&BjE){c=b.bo();d=b.bl();e=IW(c);f=IW(d);if(c!=e)break a;if(d!=f)break a;}return b;}g=O0(e,f,b.f9());g.zh(b,0,0,0,0,c,d);b.iz();return g;}
function AMu(a){var b;if(!a.jN)G(U(B(312)));a.jN=0;b=a.dd;a.dd=null;return b;}
function A1Z(a){return 1;}
function ALD(a){return a.pa;}
function AYm(a){return a.oQ;}
function AIf(a){return a.ku;}
function AVL(a){return a.Df;}
function AHn(a){return 1;}
function A4e(a){O5();return Bh6;}
function AYD(a,b){G(U(B(313)));}
var Hz=D(Bm);
function BfM(){var a=new Hz();R6(a);return a;}
function R6(a){Cx(a);}
var ACJ=D(Hz);
function C8(){var a=new ACJ();A12(a);return a;}
function A12(a){R6(a);}
function N1(){var a=this;BH.call(a);a.Fo=0;a.Kl=0;a.K2=0;a.HY=0.0;}
var BjF=Ba;function GP(){GP=N(N1);AOg();}
function Ur(b){GP();return Dx(Br(b,BjF),b)?0:1;}
function AOg(){BjF=BQ(B(314));}
var ZZ=D();
function AAx(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(CK());}return b.data.length;}
function Lt(b,c){if(b===null)G(IK());if(b===F($rt_voidcls()))G(CK());if(c<0)G(A9B());return ASN(b.z6(),c);}
function ASN(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function DQ(){C.call(this);this.bk=null;}
function HW(a){J(a);a.bk=CO(0.0,0.0,0.0,1.0);}
function OA(){var a=this;DQ.call(a);a.eD=null;a.dx=0.0;}
function BeW(){var a=new OA();AKq(a);return a;}
function AKq(a){HW(a);a.eD=S();}
function AKw(a,b){return a.H4(b.bk,b.eD,b.dx);}
function ANZ(a,b,c,d){if(b!==null)a.bk.eR(b);if(c!==null)a.eD.M(c);a.dx=d;return a;}
function AFe(a,b,c,d,e,f,g,h){a.bk.hV(b,c,d,1.0);a.eD.I(e,f,g);a.dx=h;return a;}
function AXx(a,b){var c;a:{b:{if(b!==null){if(b===a)break b;if(a.bk.z(b.bk)&&a.eD.z(b.eD)&&a.dx===b.dx)break b;}c=0;break a;}c=1;}return c;}
var AAk=D();
function BeI(){var a=new AAk();AFK(a);return a;}
function AFK(a){J(a);}
function UC(){C.call(this);this.N=null;}
function Bfn(a){var b=new UC();AEZ(b,a);return b;}
function AEZ(a,b){J(a);a.N=BeN(4);a.N.I$(b);}
function AKG(a,b){var c,d,e,f,$$je;c=a.N.f1();a:{try{d=0;e=a.N.h;}catch($$e){$$je=R($$e);f=$$je;break a;}b:{try{while(d<e){if(c.data[d].lG(b))break b;d=d+1|0;}}catch($$e){$$je=R($$e);f=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);f=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(f);}
function AT6(a,b){var c,d,e,f,$$je;c=a.N.f1();a:{try{d=0;e=a.N.h;}catch($$e){$$je=R($$e);f=$$je;break a;}b:{try{while(d<e){if(c.data[d].oF(b))break b;d=d+1|0;}}catch($$e){$$je=R($$e);f=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);f=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(f);}
function AUo(a,b){var c,d,e,f,$$je;c=a.N.f1();a:{try{d=0;e=a.N.h;}catch($$e){$$je=R($$e);f=$$je;break a;}b:{try{while(d<e){if(c.data[d].lr(b))break b;d=d+1|0;}}catch($$e){$$je=R($$e);f=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);f=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(f);}
function AEv(a,b,c,d,e){var f,g,h,i,$$je;f=a.N.f1();a:{try{g=0;h=a.N.h;}catch($$e){$$je=R($$e);i=$$je;break a;}b:{try{while(g<h){if(f.data[g].iq(b,c,d,e))break b;g=g+1|0;}}catch($$e){$$je=R($$e);i=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);i=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(i);}
function AQp(a,b,c,d,e){var f,g,h,i,$$je;f=a.N.f1();a:{try{g=0;h=a.N.h;}catch($$e){$$je=R($$e);i=$$je;break a;}b:{try{while(g<h){if(f.data[g].hQ(b,c,d,e))break b;g=g+1|0;}}catch($$e){$$je=R($$e);i=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);i=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(i);}
function AIG(a,b,c,d){var e,f,g,h,$$je;e=a.N.f1();a:{try{f=0;g=a.N.h;}catch($$e){$$je=R($$e);h=$$je;break a;}b:{try{while(f<g){if(e.data[f].i_(b,c,d))break b;f=f+1|0;}}catch($$e){$$je=R($$e);h=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);h=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(h);}
function ARX(a,b,c){var d,e,f,g,$$je;d=a.N.f1();a:{try{e=0;f=a.N.h;}catch($$e){$$je=R($$e);g=$$je;break a;}b:{try{while(e<f){if(d.data[e].m_(b,c))break b;e=e+1|0;}}catch($$e){$$je=R($$e);g=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);g=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(g);}
function A30(a,b,c){var d,e,f,g,$$je;d=a.N.f1();a:{try{e=0;f=a.N.h;}catch($$e){$$je=R($$e);g=$$je;break a;}b:{try{while(e<f){if(d.data[e].oJ(b,c))break b;e=e+1|0;}}catch($$e){$$je=R($$e);g=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);g=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(g);}
var FL=D(FS);
function BjG(a){var b=new FL();KF(b,a);return b;}
function KF(a,b){OW(a,b);}
var AAb=D(FL);
function BjH(a){var b=new AAb();AF0(b,a);return b;}
function AF0(a,b){KF(a,b);}
var Pr=D(T);
function BdN(){var a=new Pr();AF2(a);return a;}
function AF2(a){Bo(a);}
function AHx(a){var b;b=BeL(a);b.be=1;return b;}
var IS=D(0);
var Cz=D(0);
var IF=D(0);
var Jb=D();
function Ul(a){J(a);}
function AZu(a,b){var c,d,e,f;c=b.data;d=a.df();e=c.length;if(e<d)b=Lt((Ck(b)).gq(),d);else while(d<e){c[d]=null;d=d+1|0;}d=0;f=a.fs();while(f.bC()){c=b.data;e=d+1|0;c[d]=f.bz();d=e;}return b;}
var E9=D();
function Kv(a){J(a);}
function A8P(a,b,c,d){var e,f,g,h;e=0;while(e<d){f=a.Bg();if(f<0){if(!e)e=(-1);return e;}g=b.data;h=c+1|0;g[c]=f<<24>>24;e=e+1|0;c=h;}if(d<=0)d=(-1);return d;}
function A0$(a){}
function ABh(){var a=this;E9.call(a);a.tD=null;a.h7=0;a.Ic=0;a.qJ=0;}
function BjI(a,b,c){var d=new ABh();ACV(d,a,b,c);return d;}
function XA(a){var b=new ABh();AFo(b,a);return b;}
function ACV(a,b,c,d){Kv(a);a.tD=b;a.h7=c;a.Ic=c;a.qJ=c+d|0;}
function AFo(a,b){ACV(a,b,0,b.data.length);}
function AXZ(a){var b,c,d;if(a.h7>=a.qJ)b=(-1);else{c=a.tD.data;d=a.h7;a.h7=d+1|0;b=c[d]&255;}return b;}
function A$q(a,b,c,d){var e,f,g,h,i,j;e=Bq(d,a.qJ-a.h7|0);f=0;while(f<e){g=b.data;h=c+1|0;i=a.tD.data;j=a.h7;a.h7=j+1|0;g[c]=i[j];f=f+1|0;c=h;}if(e<=0)e=(-1);return e;}
function AJ1(a){}
var Tv=D();
function ADz(b,c){var d,e,f,g,h,i,j,k;if(!b)return B(315);d=1<<c;e=d-1|0;f=(((32-Mu(b)|0)+c|0)-1|0)/c|0;g=BW(f);h=Cg(f-1|0,c);i=0;while(h>=0){j=g.data;k=i+1|0;j[i]=FQ(b>>>h&e,d);h=h-c|0;i=k;}return Mf(g);}
var IN=D(CT);
function AAf(a,b,c,d){FJ(a,b);a.C=c;a.bb=d;}
function AKW(b,c,d){return BeP(0,b.data.length,b,c,c+d|0,0);}
function A0J(b){return AKW(b,0,b.data.length);}
function Ty(a){FZ(a);return a;}
function A4o(a){return Ty(a);}
function JH(){var a=this;C.call(a);a.jo=null;a.u3=0.0;a.vi=0.0;a.AC=0;a.AD=0;a.yx=0;a.EO=0;a.HB=null;}
function Tk(a){J(a);a.HB=S();}
function A8A(a,b){Zt(a.AC,a.AD,a.yx,a.EO);a.jo.kw=a.u3;a.jo.md=a.vi;if(b)a.jo.cp.I(a.u3/2.0,a.vi/2.0,0.0);a.jo.f7();}
function A8k(a){return a.jo;}
function AJc(a,b){a.jo=b;}
function AHe(a,b,c){a.u3=b;a.vi=c;}
function AXo(a,b,c,d,e){a.AC=b;a.AD=c;a.yx=d;a.EO=e;}
function CF(){Dd.call(this);this.bv=null;}
function BbT(a,b,c){var d=new CF();E4(d,a,b,c);return d;}
function E4(a,b,c,d){FW(a,b,c,d);a.bv=b;}
function AUU(a,b,c,d){var e,f;e=0;a:{while((b+a.bv.cg()|0)<=d.J()){f=a.bv.bH(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.k.e(b,c,d);if(f>=0)break;b=b-a.bv.cg()|0;e=e+(-1)|0;}return f;}
function AXS(a){return B(316);}
var Ee=D(CF);
function Bbm(a,b,c){var d=new Ee();Nr(d,a,b,c);return d;}
function Nr(a,b,c,d){E4(a,b,c,d);}
function A3r(a,b,c,d){var e;e=a.Y.e(b,c,d);if(e<0)e=a.k.e(b,c,d);return e;}
function AUd(a,b){LJ(a,b);a.Y.Q(b);}
var TW=D(Ee);
function Bc$(a,b,c){var d=new TW();A$s(d,a,b,c);return d;}
function A$s(a,b,c,d){Nr(a,b,c,d);}
function ANe(a,b,c,d){var e;if((b+a.bv.cg()|0)<=d.J()){e=a.bv.bH(b,c);if(e>=1)b=b+e|0;}return a.k.e(b,c,d);}
var Hw=D(0);
var V=D();
function BM(a){J(a);}
function AIA(a,b,c){return 0;}
function ABr(){var a=this;C.call(a);a.fg=null;a.is=null;a.lB=0;a.lv=null;a.oO=0;a.di=0;a.j4=null;a.b9=null;}
function Ber(){var a=new ABr();AL2(a);return a;}
function AL2(a){J(a);a.lB=7;a.di=0;a.lv=Y(C,256);a.j4=Bc(40);a.b9=Bc(40);}
function AUW(a,b,c,d,e){var f,g,h,i,j,k,l,m,n;f=b.data;a.di=0;AKQ(f.length,d,e);g=e-d|0;if(g<2)return;if(g<32){h=UE(b,d,e,c);AB8(b,d,e,d+h|0,c);return;}a.fg=b;a.is=c;a.oO=0;i=AVc(g);while(true){j=UE(b,d,e,c);if(j>=i)k=j;else{k=g>i?i:g;AB8(b,d,d+k|0,d+j|0,c);}Z1(a,d,k);X3(a);d=d+k|0;g=g-k|0;if(!g)break;}TN(a);a.fg=null;a.is=null;l=a.lv;m=0;n=a.oO;while(m<n){l.data[m]=null;m=m+1|0;}}
function AB8(b,c,d,e,f){var g,h,i,j,k,l;if(e==c)e=e+1|0;while(e<d){g=b.data;h=g[e];i=e;j=c;while(j<i){k=(j+i|0)>>>1;if(f.cX(h,g[k])<0)i=k;else j=k+1|0;}a:{b:{l=e-j|0;switch(l){case 1:break b;case 2:g[j+2|0]=g[j+1|0];break b;default:}X(b,j,b,j+1|0,l);break a;}g[j+1|0]=g[j];}g[j]=h;e=e+1|0;}}
function UE(b,c,d,e){var f,g,h;f=c+1|0;if(f==d)return 1;a:{g=b.data;h=f+1|0;if(e.cX(g[f],g[c])>=0)while(h<d){if(e.cX(g[h],g[h-1|0])<0)break a;h=h+1|0;}else{while(h<d&&e.cX(g[h],g[h-1|0])<0){h=h+1|0;}A7w(b,c,h);}}return h-c|0;}
function A7w(b,c,d){var e,f,g,h,i;e=d+(-1)|0;while(c<e){f=b.data;g=f[c];h=c+1|0;f[c]=f[e];i=e+(-1)|0;f[e]=g;c=h;e=i;}}
function AVc(b){var c;c=0;while(b>=32){c=c|b&1;b=b>>1;}return b+c|0;}
function Z1(a,b,c){a.j4.data[a.di]=b;a.b9.data[a.di]=c;a.di=a.di+1|0;}
function X3(a){var b;a:{while(true){if(a.di<=1)break a;b=a.di-2|0;if(!(b>=1&&a.b9.data[b-1|0]<=(a.b9.data[b]+a.b9.data[b+1|0]|0))&&!(b>=2&&a.b9.data[b-2|0]<=(a.b9.data[b]+a.b9.data[b-1|0]|0))){if(a.b9.data[b]>a.b9.data[b+1|0])break;}else if(a.b9.data[b-1|0]<a.b9.data[b+1|0])b=b+(-1)|0;M0(a,b);}}}
function TN(a){var b;while(a.di>1){b=a.di-2|0;if(b>0&&a.b9.data[b-1|0]<a.b9.data[b+1|0])b=b+(-1)|0;M0(a,b);}}
function M0(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.j4.data[b];d=a.b9.data[b];e=a.j4.data;f=b+1|0;g=e[f];h=a.b9.data[f];a.b9.data[b]=d+h|0;if(b==(a.di-3|0)){i=a.j4.data;e=a.j4.data;j=b+2|0;i[f]=e[j];a.b9.data[f]=a.b9.data[j];}a.di=a.di-1|0;k=Nz(a.fg.data[g],a.fg,c,d,0,a.is);j=c+k|0;l=d-k|0;if(!l)return;m=JR(a.fg.data[(j+l|0)-1|0],a.fg,g,h,h-1|0,a.is);if(!m)return;if(l>m)Uq(a,j,l,g,m);else We(a,j,l,g,m);}
function JR(b,c,d,e,f,g){var h,i,j,k,l,m,n,o;h=c.data;i=0;j=1;k=d+f|0;if(g.cX(b,h[k])>0){l=e-f|0;while(true){m=B9(j,l);if(m>=0)break;if(g.cX(b,h[k+j|0])<=0)break;n=(j<<1)+1|0;if(n>0){i=j;j=n;continue;}n=l;i=j;j=n;}if(m<=0)l=j;n=i+f|0;k=l+f|0;}else{l=f+1|0;while(true){n=B9(j,l);if(n>=0)break;if(g.cX(b,h[k-j|0])>0)break;n=(j<<1)+1|0;if(n>0){i=j;j=n;continue;}n=l;i=j;j=n;}if(n<=0)l=j;n=f-l|0;k=f-i|0;}n=n+1|0;while(n<k){o=n+((k-n|0)>>>1)|0;if(g.cX(b,h[d+o|0])>0){n=o+1|0;o=k;}k=o;}return k;}
function Nz(b,c,d,e,f,g){var h,i,j,k,l,m,n,o;h=c.data;i=1;j=0;k=d+f|0;if(g.cX(b,h[k])>=0){l=e-f|0;while(true){m=B9(i,l);if(m>=0)break;if(g.cX(b,h[k+i|0])<0)break;m=(i<<1)+1|0;if(m>0){j=i;i=m;continue;}m=l;j=i;i=m;}if(m<=0)l=i;m=j+f|0;n=l+f|0;}else{l=f+1|0;while(true){m=B9(i,l);if(m>=0)break;if(g.cX(b,h[k-i|0])>=0)break;m=(i<<1)+1|0;if(m>0){j=i;i=m;continue;}m=l;j=i;i=m;}if(m<=0)l=i;m=f-l|0;n=f-j|0;}m=m+1|0;while(m<n){o=m+((n-m|0)>>>1)|0;if(g.cX(b,h[d+o|0])<0)n=o;else m=o+1|0;}return n;}
function We(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;f=a.fg;g=f.data;h=Ok(a,c);X(f,b,h,0,c);i=0;j=b+1|0;k=d+1|0;g[b]=g[d];l=e+(-1)|0;if(!l){X(h,i,f,j,c);return;}if(c==1){m=h.data;X(f,k,f,j,l);g[j+l|0]=m[i];return;}n=a.is;o=a.lB;a:{b:while(true){p=0;q=0;r=j;s=k;t=i;while(true){m=h.data;if(n.cX(g[s],m[t])<0){j=r+1|0;k=s+1|0;g[r]=g[s];q=q+1|0;p=0;l=l+(-1)|0;if(!l)break a;s=k;i=t;}else{j=r+1|0;i=t+1|0;g[r]=m[t];p=p+1|0;q=0;c=c+(-1)|0;if(c==1){t=i;k=s;break a;}}if((p|q)>=o)break;r=j;t=i;}k=s;while(true){r
=Nz(g[k],h,i,c,0,n);if(!r){s=j;t=i;}else{X(h,i,f,j,r);j=j+r|0;t=i+r|0;c=c-r|0;if(c<=1)break a;s=j;}j=s+1|0;u=k+1|0;g[s]=g[k];l=l+(-1)|0;if(!l){k=u;break a;}s=JR(m[t],f,u,l,0,n);if(!s){v=j;k=u;}else{X(f,u,f,j,s);j=j+s|0;k=u+s|0;l=l-s|0;if(!l)break b;v=j;}j=v+1|0;i=t+1|0;g[v]=m[t];c=c+(-1)|0;if(c==1){t=i;break a;}o=o+(-1)|0;if(!((r<7?0:1)|(s<7?0:1)))break;}if(o<0)o=0;o=o+2|0;}}if(o<1)o=1;a.lB=o;if(c==1){X(f,k,f,j,l);g[j+l|0]=m[t];}else{if(!c)G(W(B(317)));X(h,t,f,j,c);}}
function Uq(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;f=a.fg;g=f.data;h=Ok(a,e);X(f,d,h,0,e);i=(b+c|0)-1|0;j=e-1|0;k=(d+e|0)-1|0;l=k+(-1)|0;m=i+(-1)|0;g[k]=g[i];n=c+(-1)|0;if(!n){X(h,0,f,l-j|0,e);return;}if(e==1){o=h.data;p=l-n|0;q=m-n|0;X(f,q+1|0,f,p+1|0,n);g[p]=o[j];return;}r=a.is;s=a.lB;a:{b:while(true){t=0;u=0;v=l;while(true){o=h.data;if(r.cX(o[j],g[m])<0){l=v+(-1)|0;q=m+(-1)|0;g[v]=g[m];t=t+1|0;u=0;n=n+(-1)|0;if(!n)break a;m=q;p=j;}else{l=v+(-1)|0;p=j+(-1)|0;g[v]=o[j];u=u+1|0;t=0;e=e+(-1)|0;if
(e==1){q=m;j=p;break a;}}if((t|u)>=s)break;v=l;j=p;}j=p;while(true){v=n-Nz(o[j],f,b,n,n-1|0,r)|0;if(!v){p=l;q=m;}else{l=l-v|0;q=m-v|0;n=n-v|0;X(f,q+1|0,f,l+1|0,v);if(!n)break a;p=l;}l=p+(-1)|0;m=j+(-1)|0;g[p]=o[j];e=e+(-1)|0;if(e==1){j=m;break a;}w=e-JR(g[q],h,0,e,e-1|0,r)|0;if(!w){p=l;j=m;}else{l=l-w|0;j=m-w|0;e=e-w|0;X(h,j+1|0,f,l+1|0,w);if(e<=1)break b;p=l;}l=p+(-1)|0;m=q+(-1)|0;g[p]=g[q];n=n+(-1)|0;if(!n){q=m;break a;}s=s+(-1)|0;if(!((v<7?0:1)|(w<7?0:1)))break;}if(s<0)s=0;s=s+2|0;}}if(s<1)s=1;a.lB=s;if(e
==1){p=l-n|0;q=q-n|0;X(f,q+1|0,f,p+1|0,n);g[p]=o[j];}else{if(!e)G(W(B(317)));X(h,0,f,l-(e-1|0)|0,e);}}
function Ok(a,b){var c,d;a.oO=Bf(a.oO,b);if(a.lv.data.length<b){c=b|b>>1;c=c|c>>2;c=c|c>>4;c=c|c>>8;c=c|c>>16;c=c+1|0;if(c>=0)b=Bq(c,a.fg.data.length>>>1);d=Y(C,b);a.lv=d;}return a.lv;}
function AKQ(b,c,d){if(c<=d){if(c<0)G(AJ7(c));if(d<=b)return;G(AJ7(d));}G(W(((((((I()).a(B(318))).j(c)).a(B(319))).j(d)).a(B(24))).b()));}
var XC=D();
function Bfv(b){var c,d,e,f,$$je;a:{try{c=BcN(B(320));d=AOq();if(d!==null){e=d;ABp(new H1,e,c);}}catch($$e){$$je=R($$e);if($$je instanceof Db){f=$$je;break a;}else{throw $$e;}}return;}f.FE();G(f);}
function AOq(){return Bft();}
var Nl=D(0);
var Hg=D(Bm);
var GF=D(BT);
var BjJ=null;function AJK(){AJK=N(GF);AVi();}
function BjK(){var a=new GF();Jg(a);return a;}
function Bbs(a){var b=new GF();Pl(b,a);return b;}
function Jg(a){AJK();B_(a);a.dZ(X7(),1);}
function Pl(a,b){AJK();B_(a);}
function AVi(){BjJ=Bbs(0);}
function X7(){var jsObj=new Bullet.btCollisionWorld();return Bullet.getPointer(jsObj);}
var FT=D(GF);
var BjL=null;function AG6(){AG6=N(FT);AIt();}
function Beo(a){var b=new FT();Tm(b,a);return b;}
function BjM(){var a=new FT();HM(a);return a;}
function Tm(a,b){AG6();Jg(a);}
function HM(a){AG6();Jg(a);}
function A0q(a,b){return U7(a.bY,b);}
function AY0(a,b){var c,d;c=a.bY;d=b.de();Uw(c,d);}
function AXD(a,b){var c,d;c=a.bY;d=b.de();Zx(c,d);}
function ASU(a,b){var c,d,e;Fl();Gq(b,BgU);c=BgU;d=a.bY;e=c.de();Qi(d,e);}
function AIt(){BjL=Beo(0);}
function U7(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btDynamicsWorld);var returnedJSObj=jsObj.stepSimulation(c);return returnedJSObj;}
function Uw(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btDynamicsWorld);jsObj.addRigidBody(c);}
function Zx(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btDynamicsWorld);jsObj.removeRigidBody(c);}
function Qi(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btDynamicsWorld);jsObj.setGravity(c);}
var GB=D();
var BjN=null;function UK(a){J(a);}
function DW(){return BjN;}
function AMb(b){BjN=b;}
var Xg=D();
function Nj(b){var c,d,e,f,g;if(b===null)return null;c=b.data;d=c.length;e=new Array(d);f=0;while(f<d){g=c[f];e[f]=g;f=f+1|0;}return e;}
function BS(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Gk(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function OX(){Q.call(this);this.QU=null;}
function Bel(a){var b=new OX();A6U(b,a);return b;}
function A6U(a,b){a.QU=b;Be(a);}
function AGY(a,b){return Uv(b);}
function C0(){var a=this;C.call(a);a.Az=null;a.M0=null;}
function GH(a,b,c){var d,e,f,g;d=c.data;J(a);LC(b);e=d.length;f=0;while(f<e){g=d[f];LC(g);f=f+1|0;}a.Az=b;a.M0=c.go();}
function LC(b){var c,d;if(b.bN())G(Yj(b));if(!AAV(b.f(0)))G(Yj(b));c=1;while(c<b.i()){a:{d=b.f(c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AAV(d))break a;else G(Yj(b));}}c=c+1|0;}}
function AAV(b){var c;a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}c=1;break a;}c=0;}return c;}
function OY(b){var c;if(b===null)G(W(B(321)));LC(b);c=(Vl()).W(b.F1());if(c!==null)return c;G(BfU(b));}
function Z9(a){return a.Az;}
function ZI(a,b){var c,d,e,$$je;a:{try{c=a.lK();Di();d=BgK;d=Oc(c,d);c=BgK;d=Le(d,c);d=WU(d,b);}catch($$e){$$je=R($$e);if($$je instanceof D1){e=$$je;break a;}else{throw $$e;}}return d;}G(AZP(B(322),e));}
function UH(a,b){var c,d,e,$$je;a:{try{c=a.mv();Di();d=BgK;d=K2(c,d);c=BgK;d=LQ(d,c);d=XU(d,b);}catch($$e){$$je=R($$e);if($$je instanceof D1){e=$$je;break a;}else{throw $$e;}}return d;}G(AZP(B(322),e));}
function RN(){var a=this;C0.call(a);a.uH=0;a.s0=0;}
function RE(a,b,c){var d=new RN();AE_(d,a,b,c);return d;}
function AE_(a,b,c,d){GH(a,b,Y(BN,0));a.uH=c;a.s0=d;}
function AKC(a){return Bc8(a,a.uH,a.s0);}
function ADW(a){return Bc5(a,a.uH,a.s0);}
var B7=D();
function Bb7(){var a=new B7();Dq(a);return a;}
function Dq(a){J(a);}
function AQv(a,b){}
function AWf(a,b){}
function PD(){var a=this;B7.call(a);a.EK=null;a.ri=null;}
function A_R(a,b){var c=new PD();AYY(c,a,b);return c;}
function AYY(a,b,c){a.ri=b;a.EK=c;Dq(a);}
function A4l(a,b){}
function AZh(a,b){(C_()).fu((((I()).a(B(323))).a(a.EK)).b());}
function ANb(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=c.FD(B(324));e=d.data;f=new E5;g=e.length;Op(f,g);h=0;while(true){if(h>=g){i=0;while(i<f.h){j=f.l(i);if(a.ri.KM(j.sw)){j.J5=j.BN;j.JR=1;}else a.ri.Go(1,j.sw,j.D0,j.xx,BaW(a));i=i+1|0;}return 0;}k=e[h];l=k.FD(B(13));m=l.data;if(m.length!=4)break;H5();n=BjO;if(m[0].z(B(325)))n=BjP;if(m[0].z(B(326)))n=BjQ;if(m[0].z(B(327)))n=BjR;if(m[0].z(B(135)))n=BjS;o=ACc(m[2]);if(n===BjR&&!(CS()).OH())o=Ba;f.F(Bd2(m[1].MH(),n,o,m[3]));h=h+1|0;}G(U(B(328)));}
function AFE(a,b,c){return a.I_(b,c);}
var PU=D();
function A$j(b){var c,d,e,f,g,h,i,j,k;c=Bb2(b.rx());d=Wv(c);e=Bc(d*2|0);f=0;g=0;h=0;i=0;while(i<d){j=e.data;g=g+Pc(c)|0;h=h+Pc(c)|0;k=f+1|0;j[f]=g;f=k+1|0;j[k]=h;i=i+1|0;}return e;}
function I$(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function AUc(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=Y(Mr,16384);d=Cj(16384);e=0;f=0;g=0;h=0;while(h<b.i()){i=I$(b.f(h));if(i==64){h=h+1|0;i=I$(b.f(h));j=0;k=1;l=0;while(l<3){h=h+1|0;m=I$(b.f(h));j=j|Cg(k,m);k=k*64|0;l=l+1|0;}}else if(i<32)j=1;else{i=(i-32|0)<<24>>24;h=h+1|0;j=I$(b.f(h));}if(!i&&j>=128){if(e>0){n=c.data;o=f+1|0;n[f]=AIy(g,g+e|0,Oh(d,e));f=o;}g=g+(e+j|0)|0;e=0;}else{p=d.data;o=e+j|0;if(o<p.length)q=f;else{n=c.data;q=f+1|0;n[f]=AIy(g,g+e|0,Oh(d,e));g=g+o|0;e=0;}while(true){o=j+(-1)|0;if(j<=0)break;r
=e+1|0;p[e]=i;e=r;j=o;}f=q;}h=h+1|0;}return I8(c,f);}
var Hj=D(0);
function Sg(){var a=this;C.call(a);a.wM=null;a.wN=null;a.wK=0;a.wL=null;}
function BcE(a,b,c,d){var e=new Sg();A0f(e,a,b,c,d);return e;}
function A0f(a,b,c,d,e){J(a);a.wM=b;a.wN=c;a.wK=d;a.wL=e;}
function AKz(a){ANi(a.wM,a.wN,a.wK,a.wL);}
function PE(){var a=this;B7.call(a);a.o8=null;a.BX=null;a.EN=null;}
function BbF(a,b,c){var d=new PE();AVJ(d,a,b,c);return d;}
function AVJ(a,b,c,d){a.EN=b;a.o8=c;a.BX=d;Dq(a);}
function A39(a,b){a.o8.ek(b);}
function A2_(a,b){a.o8.cx(b);}
function A7o(a,b,c){var d;d=a.EN;H5();d.yH(BjQ,a.BX,c);a.o8.cE(b,c);return 0;}
function A8l(a,b,c){return a.hY(b,c);}
var LB=D(0);
function WY(){C.call(this);this.me=null;}
function BcL(a){var b=new WY();ANH(b,a);return b;}
function ANH(a,b){a.me=b;J(a);}
function A0r(a,b){a.me.gW.fx();QM(b,a.me.gW);a.me.In(a.me.gW);}
function A4g(a,b){a.PE(b);}
function PF(){var a=this;B7.call(a);a.m8=null;a.BT=null;a.Ez=null;a.wo=null;}
function Bcy(a,b,c,d){var e=new PF();ADZ(e,a,b,c,d);return e;}
function ADZ(a,b,c,d,e){a.wo=b;a.m8=c;a.BT=d;a.Ez=e;Dq(a);}
function ALC(a,b){a.m8.ek(b);}
function A7v(a,b){a.m8.cx(b);}
function APm(a,b,c){a.wo.yH(a.BT,a.Ez,c);a.m8.cE(b,c);return 0;}
var J5=D();
var BjT=null;function BdR(){BdR=N(J5);AQf();}
function AQf(){BjT=Bc((Mh()).data.length);BjT.data[BC(BjO)]=1;BjT.data[BC(BjP)]=2;BjT.data[BC(BjQ)]=3;BjT.data[BC(BjR)]=4;BjT.data[BC(BjS)]=5;}
var ABE=D();
function A5p(b,c){if(b===c)return 1;return b!==null?b.z(c):c!==null?0:1;}
function Uu(){C.call(this);this.cf=null;}
function APh(){var a=new Uu();A6K(a);return a;}
function A_t(b){if(b<0.0)b=0.0;else if(b>1.0)b=1.0;return b;}
function A6K(a){J(a);a.cf=Ca(18);}
function AWT(a,b){return a.P_(b.s,b.r,b.t);}
function AV3(a,b,c,d){var e;e=0;while(e<18){a.cf.data[e]=b;a.cf.data[e+1|0]=c;a.cf.data[e+2|0]=d;e=e+3|0;}return a;}
function A9_(a){var b;b=0;while(b<a.cf.data.length){a.cf.data[b]=A_t(a.cf.data[b]);b=b+1|0;}return a;}
function A7W(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s;h=e*e;i=f*f;j=g*g;k=h+i+j;if(k===0.0)return a;l=1.0/k*(k+1.0);m=b*l;n=c*l;o=d*l;p=e<=0.0?3:0;q=a.cf.data;q[p]=q[p]+h*m;q=a.cf.data;r=p+1|0;q[r]=q[r]+h*n;q=a.cf.data;r=p+2|0;q[r]=q[r]+h*o;r=f<=0.0?9:6;q=a.cf.data;q[r]=q[r]+i*m;q=a.cf.data;s=r+1|0;q[s]=q[s]+i*n;q=a.cf.data;r=r+2|0;q[r]=q[r]+i*o;r=g<=0.0?15:12;q=a.cf.data;q[r]=q[r]+j*m;q=a.cf.data;s=r+1|0;q[s]=q[s]+j*n;q=a.cf.data;r=r+2|0;q[r]=q[r]+j*o;return a;}
function A4a(a,b,c){return a.EY(b.s,b.r,b.t,c.n,c.o,c.q);}
function AFY(a,b,c,d,e){var f;f=e/(1.0+d.GS(c));return a.EY(b.s*f,b.r*f,b.t*f,d.n-c.n,d.o-c.o,d.q-c.q);}
var H$=D(Ja);
function Bew(){var a=new H$();Rv(a);return a;}
function Rv(a){Qb(a);}
function QW(a){return (P5(a)).bF(48,57);}
var JI=D(H$);
function Bdk(){var a=new JI();S$(a);return a;}
function S$(a){Rv(a);}
function Vp(a){return (((QW(a)).bF(33,64)).bF(91,96)).bF(123,126);}
var Za=D(JI);
function Bda(){var a=new Za();AQZ(a);return a;}
function AQZ(a){S$(a);}
function AM4(a){return (Vp(a)).cG(32);}
var AAW=D(T);
function Bfo(){var a=new AAW();A4F(a);return a;}
function A4F(a){Bo(a);}
function ARN(a){return Bcu(a);}
var YU=D(Ds);
function Bae(a,b){var c=new YU();AQ8(c,a,b);return c;}
function AQ8(a,b,c){Gc(a,b,c);}
function AGa(a,b,c,d){var e,f,g,h,i;e=a.bQ.df();f=!d.lH()?d.dI():0;a:{g=a.k.e(b,c,d);if(g>=0){d.by(a.bm,b);h=0;while(true){if(h>=e)break a;i=a.bQ.l(h);if(i.cI(f,b,c,d)>=0){d.by(a.bm,(-1));return g;}h=h+1|0;}}}return (-1);}
function A_v(a,b){return 0;}
function AN9(a){return B(329);}
function Zd(){var a=this;BJ.call(a);a.cy=null;a.tC=null;a.rO=null;}
function BaU(a){var b=new Zd();AYH(b,a);return b;}
function AYH(a,b){var c;C2(a);a.cy=b.b();a.bO=b.i();a.tC=A4S(a.bO);a.rO=A4S(a.bO);c=0;while(c<(a.bO-1|0)){a.tC.os(a.cy.f(c),(a.bO-c|0)-1|0);a.rO.os(a.cy.f((a.bO-c|0)-1|0),(a.bO-c|0)-1|0);c=c+1|0;}}
function AG5(a,b,c){return !a.u_(c,b)?(-1):a.bO;}
function AWI(a,b,c,d){var e,f;e=d.J();while(true){if(b>e)return (-1);f=a.N8(c,b,e);if(f<0)return (-1);if(a.k.e(f+a.bO|0,c,d)>=0)break;b=f+1|0;}return f;}
function A0t(a,b,c,d,e){var f;while(true){if(c<b)return (-1);f=a.LC(d,b,c);if(f<0)return (-1);if(a.k.e(f+a.bO|0,d,e)>=0)break;c=f+(-1)|0;}return f;}
function AOw(a){return (((I()).a(B(330))).a(a.cy)).b();}
function AJV(a,b){var c,d,e,f,g;if(b instanceof DA)return b.ps()!=a.cy.f(0)?0:1;if(b instanceof Dy)return b.bH(0,a.cy.ce(0,1))<=0?0:1;if(!(b instanceof C4)){if(!(b instanceof Dw))return 1;a:{if(a.cy.i()>1){c=b;d=c.sS();e=a.cy.f(0);c=a.cy;f=c.f(1);if(d==Dh(e,f)){e=1;break a;}}e=0;}return e;}b:{c:{c=b;if(!c.p(a.cy.f(0))){g=a.cy;if(g.i()<=1)break c;g=a.cy;e=Dh(g.f(0),a.cy.f(1));if(!c.p(e))break c;}e=1;break b;}e=0;}return e;}
function A88(a,b,c,d){var e,f;e=a.cy.f(a.bO-1|0);while(true){if(c>(d-a.bO|0))return (-1);f=b.f((c+a.bO|0)-1|0);if(f==e&&a.u_(b,c))break;c=c+a.tC.b2(f)|0;}return c;}
function A8f(a,b,c,d){var e,f,g,h;e=a.cy.f(0);f=b.i();g=(f-d|0)-a.bO|0;if(g<=0)d=d+g|0;while(true){if(d<c)return (-1);h=b.f(d);if(h==e&&a.u_(b,d))break;d=d-a.rO.b2(h)|0;}return d;}
function AKi(a,b,c){var d;d=0;while(d<a.bO){if(b.f(d+c|0)!=a.cy.f(d))return 0;d=d+1|0;}return 1;}
var RF=D(C0);
function BbU(){var a=new RF();AID(a);return a;}
function AID(a){GH(a,B(331),Y(BN,0));}
function AXE(a){return Bfi(a);}
function AUE(a){return Bd$(a);}
function Ne(){var a=this;C.call(a);a.cP=null;a.b8=0;}
var BjU=null;function C5(){C5=N(Ne);A4u();}
function ATm(a){var b=new Ne();XJ(b,a);return b;}
function Wl(b,c){var d;C5();d=b>=0?1:2;while(true){b=b/c|0;if(!b)break;d=d+1|0;}return d;}
function XJ(a,b){C5();J(a);if(b>=0){a.cP=BW(b);return;}G(A9B());}
function IP(a,b){var c,d;c=((a.cP.data.length>>1)+a.cP.data.length|0)+2|0;if(b>c)c=b;d=BW(c);X(a.cP,0,d,0,a.b8);a.cP=d;}
function N4(a){var b,c,d,e;b=a.b8+4|0;if(b>a.cP.data.length)IP(a,b);c=a.cP.data;d=a.b8;a.b8=d+1|0;c[d]=110;c=a.cP.data;e=a.b8;a.b8=e+1|0;c[e]=117;c=a.cP.data;e=a.b8;a.b8=e+1|0;c[e]=108;c=a.cP.data;e=a.b8;a.b8=e+1|0;c[e]=108;}
function CI(a,b){var c,d;if(a.b8==a.cP.data.length)IP(a,a.b8+1|0);c=a.cP.data;d=a.b8;a.b8=d+1|0;c[d]=b;}
function II(a,b){var c,d;if(b===null){N4(a);return;}c=b.i();d=a.b8+c|0;if(d>a.cP.data.length)IP(a,d);b.pv(0,c,a.cP,a.b8);a.b8=d;}
function AD3(a){if(!a.b8)return B(101);return F1(a.cP,0,a.b8);}
function APr(a,b){CI(a,b);return a;}
function AP4(a,b){return a.GV(b,0);}
function AGI(a,b,c){return a.PZ(b,c,48);}
function AEg(a,b,c,d){var e;if(b==(-2147483648)){II(a,B(332));return a;}if(b<0){CI(a,45);b= -b|0;}a:{if(c>1){e=c-Wl(b,10)|0;while(true){if(e<=0)break a;a.lx(d);e=e+(-1)|0;}}}if(b>=10000){if(b>=1000000000){C5();CI(a,BjU.data[Cp(E_(AU6(O(b),Cd(1410065408, 2)),O(1000000000)))]);}if(b>=100000000){C5();CI(a,BjU.data[(b%1000000000|0)/100000000|0]);}if(b>=10000000){C5();CI(a,BjU.data[(b%100000000|0)/10000000|0]);}if(b>=1000000){C5();CI(a,BjU.data[(b%10000000|0)/1000000|0]);}if(b>=100000){C5();CI(a,BjU.data[(b%1000000
|0)/100000|0]);}C5();CI(a,BjU.data[(b%100000|0)/10000|0]);}if(b>=1000){C5();CI(a,BjU.data[(b%10000|0)/1000|0]);}if(b>=100){C5();CI(a,BjU.data[(b%1000|0)/100|0]);}if(b>=10){C5();CI(a,BjU.data[(b%100|0)/10|0]);}C5();CI(a,BjU.data[b%10|0]);return a;}
function A3A(a,b){if(b===null)N4(a);else II(a,b.b());return a;}
function A0I(a,b){II(a,b);return a;}
function A4u(){BjU=I5([48,49,50,51,52,53,54,55,56,57]);}
var DE=D();
var BgO=0;var BgP=0;var BjV=0;var BjW=null;var BjX=null;var BjY=null;var BjZ=null;function H3(){H3=N(DE);AYN();}
function XT(){H3();AA5(0);}
function AA5(b){H3();ABR(b,1);}
function ABR(b,c){H3();if(BjV)return;BjV=1;BgO=b;BgP=c;SJ();}
function SJ(){var b;H3();b=BgQ;b.yA();}
function AYN(){BgO=0;BgP=1;BjV=0;BjW=BaM();BjX=Bp();BjY=BL();BjZ=BL();}
var Uc=D(Bm);
function Qy(){var a=new Uc();AZW(a);return a;}
function AZW(a){Cx(a);}
var My=D(B4);
function Ex(a,b){var c=new My();A64(c,a,b);return c;}
function A64(a,b,c){JV(a,b,c);}
var FP=D(CH);
function Bf5(a,b,c){var d=new FP();Mj(d,a,b,c);return d;}
function Mj(a,b,c,d){Fd(a,b,c,d);}
function A7V(a,b,c,d){var e;if(!a.Y.ba(d))return a.k.e(b,c,d);e=a.Y.e(b,c,d);if(e>=0)return e;return a.k.e(b,c,d);}
function A9v(a,b){LJ(a,b);a.Y.Q(b);}
var Ij=D(0);
function NT(){var a=this;C.call(a);a.dA=null;a.lf=null;a.ug=null;a.nG=null;a.wz=0;a.nB=0;a.to=0;a.FR=0;a.eb=0;a.ID=0;a.N0=0;a.d5=0;a.PP=0;a.hv=0;a.uX=0;}
function Bj0(a,b,c,d,e,f){var g=new NT();Sm(g,a,b,c,d,e,f);return g;}
function Sm(a,b,c,d,e,f,g){var h;J(a);a.hv=(-1);h=e+1|0;a.wz=h;a.dA=Bc(h*2|0);a.lf=Bc(g);IH(a.lf,(-1));if(f>0)a.ug=Bc(f);IH(a.dA,(-1));a.tH(b,c,d);}
function ASc(a,b,c){a.lf.data[b]=c;}
function A25(a,b){return a.lf.data[b];}
function AUF(a){return a.pc(0);}
function ALJ(a,b){Nd(a,b);return a.dA.data[(b*2|0)+1|0];}
function AYq(a,b,c){a.dA.data[b*2|0]=c;}
function AWJ(a,b,c){a.dA.data[(b*2|0)+1|0]=c;}
function A6h(a,b){return a.dA.data[b*2|0];}
function APz(a,b){return a.dA.data[(b*2|0)+1|0];}
function AEG(a,b){if(a.lC(b)<0)return null;return (a.nG.d_(a.lC(b),a.pc(b))).b();}
function A2g(a,b){var c,d;c=a.jq(b);d=a.nE(b);if((d|c|(d-c|0))>=0&&d<=a.nG.i())return (a.nG.d_(c,d)).b();return null;}
function APs(a){return a.lC(0);}
function AGo(a,b){Nd(a,b);return a.dA.data[b*2|0];}
function AME(a){if(a.dA.data[0]==(-1)){a.dA.data[0]=a.eb;a.dA.data[1]=a.eb;}a.hv=a.pQ();}
function AU9(a,b){return a.ug.data[b];}
function AXR(a,b,c){a.ug.data[b]=c;}
function Nd(a,b){if(!a.nB)G(GY());if(b>=0&&b<a.wz)return;G(Bg(Ji(b)));}
function A9E(a){a.nB=1;}
function A9G(a){return a.nB;}
function A$x(a,b,c,d){a.nB=0;a.uX=2;IH(a.dA,(-1));IH(a.lf,(-1));if(b!==null)a.nG=b;if(c>=0)Ui(a,c,d);a.eb=a.to;}
function AGZ(a){a.tH(null,(-1),(-1));}
function Ui(a,b,c){a.to=b;a.FR=c;}
function A7f(a,b){a.eb=b;if(a.hv>=0)b=a.hv;a.hv=b;}
function AXh(a){return a.to;}
function A3s(a){return a.FR;}
function AY7(a,b){a.uX=b;}
function AIU(a){return a.uX;}
function A1b(a){return a.N0;}
function AU7(a){return a.ID;}
function AV1(a){return a.hv;}
function Q1(){var a=this;C.call(a);a.dy=null;a.cS=null;a.da=null;a.cu=null;a.dJ=null;a.kO=null;a.BS=null;}
function A_X(){var a=new Q1();A3X(a);return a;}
function A3X(a){J(a);a.dy=BL();a.cS=A8D();}
function PX(){var a=this;BJ.call(a);a.t7=null;a.xp=0;}
function AJM(a){var b=new PX();AN1(b,a);return b;}
function AN1(a,b){C2(a);a.t7=b.mg();a.xp=b.bD;}
function A2o(a,b,c){var d,e;d=a.t7;e=DC(c.f(b));return !d.p(Dr(e))?(-1):1;}
function AW8(a){return ((((I()).a(B(333))).a(!a.xp?B(56):B(57))).a(a.t7.b())).b();}
function JB(){var a=this;C.call(a);a.e0=0;a.td=0;a.te=0;a.ct=0;a.cN=0;a.vD=0.0;a.p9=0.0;a.Bo=0.0;a.tk=0.0;a.dr=0;a.jg=0;a.gz=0;a.iH=null;a.op=0;a.jX=0;}
function AFz(){var a=new JB();A7X(a);return a;}
function A7X(a){J(a);a.jX=0;}
function A2I(a,b){var c;if(a.iH!==null){c=a.iH.data[b>>>9];if(c!==null)return c.data[b&511];}return 0;}
function A6b(a,b,c){var d,e,f;if(a.iH===null)a.iH=Y($rt_arraycls($rt_bytecls()),128);d=a.iH.data;e=b>>>9;f=d[e];if(f===null){d=a.iH.data;f=Cj(512);d[e]=f;}f.data[b&511]=c<<24>>24;}
function AJz(a){return In(a.e0&65535);}
function Vk(){var a=this;B7.call(a);a.FV=null;a.ya=null;}
function Bbk(a,b){var c=new Vk();A3z(c,a,b);return c;}
function A3z(a,b,c){a.ya=b;a.FV=c;Dq(a);}
function A75(a,b,c){var d;d=51321;(C_()).yZ(d);AIr(a.ya,a.FV);return 1;}
function AHX(a,b){(CS()).fJ();}
function Vj(){B7.call(this);this.PG=null;}
function Bdm(a){var b=new Vj();ASn(b,a);return b;}
function ASn(a,b){a.PG=b;Dq(a);}
function APE(a,b,c){var d,e;d=Wp(c);e=687521;(C_()).yZ(e);AWb(d,Be$(a));return 1;}
function A3E(a,b){(CS()).fJ();}
function AOX(a,b,c){return a.hY(b,c);}
function Vz(){Q.call(this);this.FZ=null;}
function BbC(a){var b=new Vz();ALd(b,a);return b;}
function ALd(a,b){a.FZ=b;Be(a);}
function A$V(a,b){return UW(b);}
var KJ=D(Bm);
function Jd(a,b){var c=new KJ();AD6(c,a,b);return c;}
function U(a){var b=new KJ();QC(b,a);return b;}
function AD6(a,b,c){P1(a,b,c);}
function QC(a,b){EF(a,b);}
function Fo(){var a=this;C.call(a);a.ej=0;a.pb=0;a.lU=null;a.lp=null;a.oz=null;a.nm=null;a.mC=0.0;}
var Bj1=0.0;function NZ(){NZ=N(Fo);AJT();}
function KC(a,b,c){NZ();J(a);P6();a.lU=Bj2;a.lp=Bj2;AUD();a.oz=Bj3;a.nm=Bj3;a.mC=1.0;a.ej=b;a.pb=c;}
function A3T(a){Bid.sD(a.ej,a.pb);}
function ARf(a,b){Bid.rE(33984+b|0);Bid.sD(a.ej,a.pb);}
function AJe(a){return a.pb;}
function ASH(a,b,c){a.wt(b,c,0);}
function AOV(a,b,c,d){if(b!==null&&!(!d&&a.oz===b)){Bid.ji(a.ej,10242,G9(b));a.oz=b;}if(c!==null&&!(!d&&a.nm===c)){Bid.ji(a.ej,10243,G9(c));a.nm=c;}}
function AE0(a,b,c){a.Dn(b,c,0);}
function ADA(a,b,c,d){if(b!==null&&!(!d&&a.lU===b)){Bid.ji(a.ej,10241,EE(b));a.lU=b;}if(c!==null&&!(!d&&a.lp===c)){Bid.ji(a.ej,10240,EE(c));a.lp=c;}}
function AZR(a,b,c){a.lU=b;a.lp=c;a.ew();Bid.ji(a.ej,10241,EE(b));Bid.ji(a.ej,10240,EE(c));}
function AIV(a,b,c){var d,e;d=Yu();if(d===1.0)return 1.0;e=Ju(b,d);if(!c&&SK(e,a.mC,0.10000000149011612))return a.mC;Bie.OS(3553,34046,e);a.mC=e;return e;}
function Yu(){var b,c;NZ();if(Bj1>0.0)return Bj1;if(!Bia.tX(B(334))){Bj1=1.0;return 1.0;}b=HY(16);b.c0(0);b.cl(CV(b));Bie.MF(34047,b);c=b.oa(0);Bj1=c;return c;}
function ACs(b,c){NZ();ACq(b,c,0);}
function ACq(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;NZ();if(c===null)return;if(!c.x0())c.zY();e=c.Of();O5();if(e===Bh7){c.Hd(b);return;}f=c.Qs();g=c.Fl();if(c.f9()===f.f9())h=f;else{h=O0(f.bo(),f.bl(),c.f9());Gv();h.D4(Bjz);h.zh(f,0,0,0,0,f.bo(),f.bl());if(c.Fl())f.iz();g=1;}Bid.GQ(3317,1);if(c.QN())AAU(b,h,h.bo(),h.bl());else{i=Bid;j=h.kx();k=h.bo();l=h.bl();m=h.lZ();n=h.ld();o=h.kz();i.kA(b,d,j,k,l,0,m,n,o);}if(g)h.iz();}
function AJT(){Bj1=0.0;}
function LE(){Fo.call(this);this.hP=null;}
var Bj4=null;function FY(){FY=N(LE);A6s();}
function Beh(a){var b=new LE();YX(b,a);return b;}
function ARK(a,b){var c=new LE();AAt(c,a,b);return c;}
function Bj5(a,b,c){var d=new LE();Ia(d,a,b,c);return d;}
function Bj6(a){var b=new LE();JM(b,a);return b;}
function Bj7(a,b,c){var d=new LE();NH(d,a,b,c);return d;}
function YX(a,b){FY();Ia(a,b,null,0);}
function AAt(a,b,c){FY();Ia(a,b,null,c);}
function Ia(a,b,c,d){FY();JM(a,AS2(b,c,d));}
function JM(a,b){FY();NH(a,3553,Bid.I9(),b);}
function NH(a,b,c,d){FY();KC(a,b,c);a.M9(d);if(d.qG())Pq(BgQ,a);}
function AR$(a,b){if(a.hP!==null&&b.qG()!=a.hP.qG())G(U(B(335)));a.hP=b;if(!b.x0())b.zY();a.ew();ACs(3553,b);a.Dn(a.lU,a.lp,1);a.wt(a.oz,a.nm,1);a.P3(a.mC,1);Bid.sD(a.ej,0);}
function AOb(a){return a.hP.bo();}
function A8H(a){return a.hP.bl();}
function ANs(a){if(!(a.hP instanceof Hp))return PW(a);return a.hP.b();}
function Pq(b,c){var d;FY();d=Bj4.W(b);if(d===null)d=Bp();d.F(c);Bj4.x(b,d);}
function A6s(){Bj4=C6();}
var LA=D(0);
function WZ(){C.call(this);this.mp=null;}
function Bb4(a){var b=new WZ();ANd(b,a);return b;}
function ANd(a,b){a.mp=b;J(a);}
function A4H(a,b){a.mp.gW.fx();a.mp.QW(a.mp.gW);SL(a.mp.gW,b);}
function ATH(a,b){a.Nn(b);}
var WJ=D();
function ADw(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function A4E(b,c){return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&Z$(b.constructor,c)?1:0;}
function Z$(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(Z$(d[e],c))return 1;e=e+1|0;}return 0;}
function Bdj(b){b.fd();}
function AMI(b){AQE(b,0);}
function AQE(b,c){return setTimeout(function(){Bdj(b);},c);}
function ADh(){return ALq();}
function AA7(b){return A0d(String.fromCharCode(b));}
function A7O(b){return b.$meta.primitive?1:0;}
function ACw(b){return b.$meta.item;}
function AQA(b){return $rt_str(b.$meta.name);}
function ALq(){return [];}
function F5(){C.call(this);this.Kt=null;}
var BgL=null;var BgK=null;var BgJ=null;function Di(){Di=N(F5);AMO();}
function Up(a){var b=new F5();AAP(b,a);return b;}
function AAP(a,b){Di();J(a);a.Kt=b;}
function AMO(){BgL=Up(B(336));BgK=Up(B(337));BgJ=Up(B(338));}
function Ge(){C.call(this);this.zZ=0;}
var Bj8=null;var Bj9=null;var Bj$=null;function A_Q(){A_Q=N(Ge);AWN();}
function AO0(a){var b=new Ge();SZ(b,a);return b;}
function SZ(a,b){A_Q();J(a);a.zZ=b;}
function A0O(a){return a.zZ;}
function AWN(){Bj8=AO0(1);Bj9=AO0(0);Bj$=F($rt_booleancls());}
var C3=D(Bm);
function CK(){var a=new C3();FX(a);return a;}
function W(a){var b=new C3();ACU(b,a);return b;}
function FX(a){Cx(a);}
function ACU(a,b){EF(a,b);}
function Tu(){C3.call(this);this.Gz=null;}
function Yj(a){var b=new Tu();ARg(b,a);return b;}
function ARg(a,b){FX(a);a.Gz=b;}
function Ua(){var a=this;C.call(a);a.bA=null;a.ks=0;a.f4=null;a.ec=null;a.bM=null;a.bL=null;a.o3=null;a.o4=null;a.nv=null;a.mF=0;a.lw=null;a.nH=0;a.ok=null;a.oD=null;a.bB=null;a.fh=Ba;a.ju=0;}
function Bav(a){var b=new Ua();AHM(b,a);return b;}
function AJ6(b){var c,d,e,f,g;c=AWk();d=0.0;e=b.detail;f=b.wheelDelta;if(c.firefox?1:0)d=(c.macOS?1:0)?1.0*e:1.0*e/3.0;else if(c.opera?1:0)d=!(c.linux?1:0)?(-1.0)*f/40.0:(-1.0)*f/80.0;else if(!(!(c.chrome?1:0)&&!(c.safari?1:0)&&!(c.IE?1:0))){d=(-1.0)*f;g=d/120.0;if(CG(g)>=1.0)d=g;else if(!(c.windows?1:0))d=!(c.macOS?1:0)?g:d/3.0;}return d;}
function AHM(a,b){J(a);a.ks=0;a.f4=Bdt(20);a.ec=OC(20);a.bM=Bc(20);a.bL=Bc(20);a.o3=Bc(20);a.o4=Bc(20);a.nv=BfK();a.mF=0;a.lw=OC(256);a.nH=0;a.ok=OC(256);a.oD=OC(5);a.ju=1;a.bA=b;Y5(a);}
function Y5(a){var b;b=a.bA.ownerDocument;b.addEventListener("mousedown",BS(a,"handleEvent"),!!0);b.addEventListener("mouseup",BS(a,"handleEvent"),!!0);b.addEventListener("mousemove",BS(a,"handleEvent"),!!0);b.addEventListener("wheel",BS(a,"handleEvent"),!!0);b.addEventListener("keydown",BS(a,"handleEvent"),!!0);b.addEventListener("keyup",BS(a,"handleEvent"),!!0);b.addEventListener("keypress",BS(a,"handleEvent"),!!0);a.bA.addEventListener("touchstart",BS(a,"handleEvent"),!!1);a.bA.addEventListener("touchmove",
BS(a,"handleEvent"),!!1);a.bA.addEventListener("touchcancel",BS(a,"handleEvent"),!!1);a.bA.addEventListener("touchend",BS(a,"handleEvent"),!!1);}
function A2x(a,b){ACH(a,b);YE(a,b);}
function ACH(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;a:{c=$rt_str(b.type);if(c.z(B(339))){d=b;e=b.target;f=a.bA;g=e!==f?0:1;if(g&&!a.ec.data[0]){a.ju=1;a.ks=1;a.ec.data[0]=1;h=Js(d.button);a.nv.Jy(h);a.oD.data[h]=1;a.o3.data[0]=0;a.o4.data[0]=0;if(!a.sm()){i=a.kn(d,a.bA);j=a.kg(d,a.bA);a.bM.data[0]=i;a.bL.data[0]=j;}else{k=a.bM.data;k[0]=k[0]+Ff(a,d)|0;k=a.bL.data;k[0]=k[0]+EQ(a,d)|0;}a.fh=CD();if(a.bB!==null)a.bB.iq(a.bM.data[0],a.bL.data[0],0,Js(d.button));b.preventDefault();b.stopPropagation();break a;}l
=a.kn(d,a.bA);m=a.kg(d,a.bA);if(!(l>=0.0&&l<=Bia.bo()&&m>=0.0&&m<=Bia.bl()))a.ju=0;return;}if(c.z(B(340))){d=b;if(!a.ec.data[0])return;a.nv.M8(Js(d.button));k=a.ec;k.data[0]=a.nv.ex<=0?0:1;if(a.sm()){a.g5(0,Ff(a,d)|0,EQ(a,d)|0);k=a.bM.data;k[0]=k[0]+Ff(a,d)|0;k=a.bL.data;k[0]=k[0]+EQ(a,d)|0;}else{a.g5(0,a.kn(d,a.bA)-a.bM.data[0]|0,a.kg(d,a.bA)-a.bL.data[0]|0);a.bM.data[0]=a.kn(d,a.bA);a.bL.data[0]=a.kg(d,a.bA);}a.fh=CD();a.ec.data[0]=0;if(a.bB!==null)a.bB.hQ(a.bM.data[0],a.bL.data[0],0,Js(d.button));}else if
(!c.z(B(341))){if(c.z(B(342))){n=b;if(a.bB!==null){o=AJ6(n);a.bB.oJ(0.0,o|0);}a.fh=CD();}else if(c.z(B(343))){a.ks=1;p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;v=a.f4;w=ABi(a);v.Lh(u,Bn(w));a.ec.data[w]=1;a.bM.data[w]=a.mx(t,a.bA);a.bL.data[w]=a.kH(t,a.bA);a.o3.data[w]=0;a.o4.data[w]=0;if(a.bB!==null)a.bB.iq(a.bM.data[w],a.bL.data[w],w,0);r=r+1|0;}a.fh=CD();b.preventDefault();}}else{d=b;if(a.sm()){a.g5(0,Ff(a,d)|0,EQ(a,d)|0);k=a.bM.data;k[0]=k[0]+Ff(a,d)|0;k=a.bL.data;k[0]=k[0]
+EQ(a,d)|0;}else{i=a.kn(d,a.bA);j=a.kg(d,a.bA);a.g5(0,i-a.bM.data[0]|0,j-a.bL.data[0]|0);a.bM.data[0]=i;a.bL.data[0]=j;}a.fh=CD();if(a.bB!==null){if(!a.ec.data[0])a.bB.m_(a.bM.data[0],a.bL.data[0]);else a.bB.i_(a.bM.data[0],a.bL.data[0],0);}}}if(c.z(B(344))){p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;x=(a.f4.l(u)).ll();a.g5(x,a.mx(t,a.bA)-a.bM.data[x]|0,a.kH(t,a.bA)-a.bL.data[x]|0);a.bM.data[x]=a.mx(t,a.bA);a.bL.data[x]=a.kH(t,a.bA);if(a.bB!==null)a.bB.i_(a.bM.data[x],a.bL.data[x],
x);r=r+1|0;}a.fh=CD();b.preventDefault();}if(c.z(B(345))){p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;x=(a.f4.l(u)).ll();a.f4.mB(u);a.ec.data[x]=0;i=a.mx(t,a.bA);j=a.kH(t,a.bA);a.g5(x,i-a.bM.data[x]|0,j-a.bL.data[x]|0);a.bM.data[x]=i;a.bL.data[x]=j;if(a.bB!==null)a.bB.hQ(a.bM.data[x],a.bL.data[x],x,0);r=r+1|0;}a.fh=CD();b.preventDefault();}if(c.z(B(346))){p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;x=(a.f4.l(u)).ll();a.f4.mB(u);a.ec.data[x]=0;i
=a.mx(t,a.bA);j=a.kH(t,a.bA);a.g5(x,i-a.bM.data[x]|0,j-a.bL.data[x]|0);a.bM.data[x]=i;a.bL.data[x]=j;if(a.bB!==null)a.bB.hQ(a.bM.data[x],a.bL.data[x],x,0);r=r+1|0;}a.fh=CD();b.preventDefault();}}
function YE(a,b){var c,d,e,f,g;c=$rt_str(b.type);if(!(c.z(B(347))&&a.ju)){if(c.z(B(348))&&a.ju){d=b.charCode&65535;if(a.bB!==null)a.bB.lr(d);}else if(c.z(B(349))&&a.ju){e=Sl(b.keyCode);if(a.lw.data[e]){a.mF=a.mF-1|0;a.lw.data[e]=0;}if(a.bB!==null)a.bB.oF(e);}}else{a:{f=b;e=Sl(f.keyCode);g=0;switch(e){case 67:g=8;break a;case 112:g=127;break a;default:}}if(!(e!=67&&e!=112)){b.preventDefault();if(a.bB!==null){a.bB.lG(e);a.bB.lr(g);}}else if(!a.lw.data[e]){a.mF=a.mF+1|0;a.lw.data[e]=1;a.nH=1;a.ok.data[e]=1;if(a.bB
!==null)a.bB.lG(e);}}}
function ABi(a){var b;b=0;while(true){if(b>=20)return (-1);if(!a.f4.F8(Bn(b),0))break;b=b+1|0;}return b;}
function AKU(a){var b;a:{if(a.ks){a.ks=0;b=0;while(true){if(b>=a.oD.data.length)break a;a.oD.data[b]=0;b=b+1|0;}}}b:{if(a.nH){a.nH=0;b=0;while(true){if(b>=a.ok.data.length)break b;a.ok.data[b]=0;b=b+1|0;}}}}
function A8Q(a,b,c,d){a.o3.data[b]=c;a.o4.data[b]=d;}
function Ff(a,b){return b.movementX;}
function EQ(a,b){return b.movementY;}
function Kl(a,b){var c,d;c=$rt_str(b.compatMode);d=c.z(B(350));if(d)b=b.documentElement;return b;}
function Hv(a,b){var c;c=b.scrollTop;return HO(c);}
function J9(a,b){var c;c=Kl(a,b);return Hv(a,c);}
function Ii(a,b){var c;c=b.scrollLeft;return HO(c);}
function LR(a,b){var c;c=Kl(a,b);return Ii(a,c);}
function R3(a,b,c){var d;d=(c.clientX-Or(a,b)|0)+Ii(a,b)|0;d=d+LR(a,b.ownerDocument)|0;return d;}
function AAr(a,b,c){var d;d=(c.clientY-NN(a,b)|0)+Hv(a,b)|0;d=d+J9(a,b.ownerDocument)|0;return d;}
function AMy(a,b,c){var d,e;d=c.width*1.0/KR(a,c);e=d*(((b.clientX-Or(a,c)|0)+Ii(a,c)|0)+LR(a,c.ownerDocument)|0);return Dg(e);}
function AKe(a,b,c){var d,e;d=c.height*1.0/N2(a,c);e=d*(((b.clientY-NN(a,c)|0)+Hv(a,c)|0)+J9(a,c.ownerDocument)|0);return Dg(e);}
function A$t(a,b,c){var d;d=c.width*1.0/KR(a,c);return Dg(d*R3(a,c,b));}
function A05(a,b,c){var d;d=c.height*1.0/N2(a,c);return Dg(d*AAr(a,c,b));}
function KR(a,b){return b.clientWidth;}
function N2(a,b){return b.clientHeight;}
function NN(a,b){return HO(SA(a,b));}
function SA(a,b){var c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollTop;d=d.parentNode;}while(b!==null){c=c+b.offsetTop;b=d.offsetParent;}return c;}
function Or(a,b){return HO(ZQ(a,b));}
function ZQ(a,b){var c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollLeft;d=d.parentNode;}while(b!==null){c=c+b.offsetLeft;b=d.offsetParent;}return c;}
function HO(b){return b|0;}
function AV5(a,b){return a.ec.data[b];}
function AHC(a){return a.fh;}
function AGm(a,b){a.bB=b;}
function A_w(a){return 0;}
function APp(a,b){a.dU(b);}
var U5=D(Bm);
function Ban(){var a=new U5();A3$(a);return a;}
function Bc0(a){var b=new U5();A16(b,a);return b;}
function A3$(a){Cx(a);}
function A16(a,b){EF(a,b);}
function ID(){DT.call(this);this.vw=null;}
function Bj_(a){var b=new ID();O1(b,a);return b;}
function O1(a,b){Ha(a);a.vw=b;}
function HB(){var a=this;ID.call(a);a.Jq=0;a.rn=0;a.el=null;a.kt=null;a.y4=null;}
function Bka(a,b){var c=new HB();Oe(c,a,b);return c;}
function Oe(a,b,c){O1(a,b);a.el=I();a.kt=BW(32);a.Jq=c;Hx();a.y4=Bkb;}
function A4O(a,b,c,d){var $$je;if(!ABc(a))return;a:{try{a.vw.nb(b,c,d);break a;}catch($$e){$$je=R($$e);if($$je instanceof De){}else{throw $$e;}}a.rn=1;}}
function ABc(a){if(a.vw===null)a.rn=1;return a.rn?0:1;}
function MA(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.data;f=Zj(b,c,d-c|0);g=Cj(Bf(16,Bq(e.length,1024)));h=Hu(g);i=a.y4.mv();Di();j=BgK;i=K2(i,j);j=BgK;k=LQ(i,j);while(true){l=(IE(k,f,h,1)).h5();a.nb(g,0,B8(h));J4(h);if(!l)break;}while(true){l=(JN(k,h)).h5();a.nb(g,0,B8(h));J4(h);if(!l)break;}}
function AY4(a,b){a.kt.data[0]=b;MA(a,a.kt,0,1);}
function A1U(a,b){a.el.a(b);GC(a);}
function AKo(a,b){(a.el.j(b)).T(10);GC(a);}
function AXQ(a,b){(a.el.a(b)).T(10);GC(a);}
function ALj(a,b){(a.el.dD(b)).T(10);GC(a);}
function A6E(a){a.GR(10);}
function GC(a){var b;b=a.el.i()<=a.kt.data.length?a.kt:BW(a.el.i());a.el.pv(0,a.el.i(),b,0);MA(a,b,0,a.el.i());a.el.uw(0);}
var Su=D(Ds);
function Bd0(a,b){var c=new Su();AVr(c,a,b);return c;}
function AVr(a,b,c){Gc(a,b,c);}
function AUT(a,b,c,d){var e,f,g,h;e=a.bQ.df();d.by(a.bm,b);f=0;while(true){if(f>=e)return a.k.e(b,c,d);g=a.bQ.l(f);h=g.cI(0,b,c,d);if(h>=0)break;f=f+1|0;}return (-1);}
function A67(a,b){return 0;}
function AFJ(a){return B(351);}
function Pm(){var a=this;C.call(a);a.E3=null;a.sY=null;}
function Bcm(a,b){var c=new Pm();ASy(c,a,b);return c;}
function ASy(a,b,c){a.sY=b;a.E3=c;J(a);}
function AR0(a){AKh(a.sY.nk,A_2(a.E3));Bib=A9m(a.sY.nk);(CS()).fJ();}
function A9i(a){(CS()).fJ();}
function ANU(a){a.HP();}
function AHg(a){a.GY();}
var Fy=D(IN);
function MG(a,b,c,d){AAf(a,b,c,d);}
function ARm(a){var b;if(a.C>=a.bb)G(UA());b=a.C;a.C=b+1|0;return a.p1(b);}
function A4i(a,b){var c;if(a.b_())G(C8());if(a.C>=a.bb)G(F0());c=a.C;a.C=c+1|0;a.nQ(c,b);return a;}
function AMK(a,b){if(b>=0&&b<a.bb)return a.p1(b);G(Bg(((((((I()).a(B(352))).j(b)).a(B(64))).j(a.bb)).a(B(24))).b()));}
function A8R(a,b,c){if(a.b_())G(C8());if(b>=0&&b<a.bb){a.nQ(b,c);return a;}G(Bg(((((((I()).a(B(352))).j(b)).a(B(64))).j(a.bb)).a(B(24))).b()));}
function AMa(a){return a.e1();}
function FI(){var a=this;Fy.call(a);a.cs=null;a.xW=0;a.ck=0;}
function JO(a,b,c,d,e,f,g){MG(a,c,e,f);a.ck=b;a.cs=d;a.xW=g;}
function ALU(a){return a.xW;}
var Px=D(FI);
function BeY(a,b,c,d,e,f){var g=new Px();AZm(g,a,b,c,d,e,f);return g;}
function AZm(a,b,c,d,e,f,g){JO(a,b,c,d,e,f,g);}
function AIN(a,b){var c,d,e;c=a.cs.A.data;d=a.ck;e=b*4|0;return c[d+e|0]&255|(a.cs.A.data[(a.ck+e|0)+1|0]&255)<<8|(a.cs.A.data[(a.ck+e|0)+2|0]&255)<<16|(a.cs.A.data[(a.ck+e|0)+3|0]&255)<<24;}
function ADa(a,b,c){var d,e,f;d=a.cs.A.data;e=a.ck;f=b*4|0;d[e+f|0]=c<<24>>24;a.cs.A.data[(a.ck+f|0)+1|0]=c>>8<<24>>24;a.cs.A.data[(a.ck+f|0)+2|0]=c>>16<<24>>24;a.cs.A.data[(a.ck+f|0)+3|0]=c>>24<<24>>24;}
var ABQ=D(FM);
function Bdd(a,b){var c=new ABQ();A9d(c,a,b);return c;}
function A9d(a,b,c){Kg(a,b,c);}
function AGz(a,b,c,d){var e,f;e=a.j9(d);if(e!==null&&(b+e.i()|0)<=d.J()){f=!(c.b()).zM(e,b)?(-1):e.i();if(f<0)return (-1);d.by(a.je,f);return a.k.e(b+f|0,c,d);}return (-1);}
function ARV(a,b,c,d){var e,f,g,h;e=a.j9(d);f=d.dI();if(e!==null&&(b+e.i()|0)<=f){g=c.b();while(true){if(b>f)return (-1);h=g.uv(e,b);if(h<0)return (-1);if(a.k.e(h+e.i()|0,c,d)>=0)break;b=h+1|0;}return h;}return (-1);}
function AD2(a,b,c,d,e){var f,g,h;f=a.j9(e);if(f===null)return (-1);g=d.b();a:{while(true){if(c<b)return (-1);h=g.Ab(f,c);if(h<0)break a;if(h<b)break a;if(a.k.e(h+f.i()|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function A3U(a,b){return 1;}
function A9p(a){return (((I()).a(B(353))).j(a.bm)).b();}
function Wu(){Dd.call(this);this.q6=null;}
function A_7(a,b,c,d){var e=new Wu();A51(e,a,b,c,d);return e;}
function A51(a,b,c,d,e){FW(a,b,c,d);a.q6=e;}
function AOH(a,b,c,d){var e,f;e=d.J();f=NO(a,b,e,c);if(f>=0)e=f;if(e>b)return a.k.cI(b,e,c,d);return a.k.e(b,c,d);}
function ADk(a,b,c,d){var e,f,g,h,i;e=d.J();f=a.k.cD(b,c,d);if(f<0)return (-1);g=NO(a,f,e,c);if(g>=0)e=g;h=a.k.cI(f,e,c,d);h=Bf(f,h);i=h>0?ABV(a,b,h-1|0,c):h?(-1):0;if(i>=b)b=i>=h?i:i+1|0;return b;}
function NO(a,b,c,d){while(true){if(b>=c)return (-1);if(a.q6.k0(d.f(b)))break;b=b+1|0;}return b;}
function ABV(a,b,c,d){while(true){if(c<b)return (-1);if(a.q6.k0(d.f(c)))break;c=c+(-1)|0;}return c;}
function A7h(a){return B(354);}
var Tr=D(T);
function BfY(){var a=new Tr();A1k(a);return a;}
function A1k(a){Bo(a);}
function ALK(a){var b;b=BbC(a);b.be=1;return b;}
var IT=D();
var Bkc=null;var Bkd=null;function ACF(){ACF=N(IT);AZO();}
function ZR(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;ACF();d=$rt_floatToIntBits(b);c.v_=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.rb=0;c.qM=0;return;}g=0;if(f)h=e|8388608;else{h=e<<1;while(Z(Br(O(h),O(8388608)),Ba)){h=h<<1;f=f+(-1)|0;g=g+1|0;}}i=A4C(Bkd,f);if(i<0)i=( -i|0)-2|0;j=f-Bkd.data[i]|0;k=9+j|0;l=O(h);m=Cp(CM(Cf(l,O(Bkc.data[i])),32-k|0));if(m>=1000000000){i=i+1|0;n=f-Bkd.data[i]|0;k=9+n|0;m=Cp(CM(Cf(l,O(Bkc.data[i])),32-k|0));}n=(31-k|0)-g|0;o=n>=0?Bkc.data[i]>>>n:Bkc.data[i]<<( -n
|0);p=(o+1|0)>>1;q=o>>1;if(h==4194304)q=q>>2;r=ZU(m,q);s=QV(m,p);h=B9(r,s);h=h>0?Cg(m/r|0,r):h<0?Cg(m/s|0,s)+s|0:Cg((m+(s/2|0)|0)/s|0,s);if(h>=1000000000){i=i+1|0;h=h/10|0;}else if(h<100000000){i=i+(-1)|0;h=h*10|0;}c.rb=h;c.qM=i-50|0;}
function ZU(b,c){var d,e;ACF();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if(e>=(c/2|0))d=d/10|0;return d;}
function QV(b,c){var d,e;ACF();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if((d-e|0)>(c/2|0))d=d/10|0;return d;}
function AZO(){var b,c,d,e,f,g,h,i,j,k,l;Bkc=Bc(100);Bkd=Bc(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=Bkc.data;g=d+50|0;f[g]=$rt_udiv(e,20);Bkd.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}i=214748364;e=127;d=0;while(d<50){j=0;k=b;while(k>i){k=k>>1;j=j+1|0;e=e+(-1)|0;}k=k*10|0;if(j<=0)b=k;else{l=O(b&((1<<j)-1|0));b=Cp(CA(O(k),M$(Cf(l,O(10)),j)));}f=Bkc.data;k=(50-d|0)-1|0;f[k]=$rt_udiv(b,20);Bkd.data[k]=e;d=d+1|0;}}
function Cs(){Bx.call(this);this.zw=null;}
var Bjy=null;var Bke=null;var Bkf=null;var Bkg=null;var Bkh=null;var Bki=null;var Bkj=null;var Bkk=null;var Bkl=null;var Bjx=null;var Bkm=null;var Bkn=null;function Iz(){Iz=N(Cs);A0z();}
function Dm(a,b,c){var d=new Cs();S1(d,a,b,c);return d;}
function S1(a,b,c,d){Iz();Cw(a,b,c);a.zw=d;}
function E6(a){return a.zw;}
function A0z(){Bjy=Dm(B(355),0,B(356));Bke=Dm(B(357),1,B(358));Bkf=Dm(B(359),2,B(360));Bkg=Dm(B(361),3,B(362));Bkh=Dm(B(363),4,B(364));Bki=Dm(B(365),5,B(366));Bkj=Dm(B(367),6,B(368));Bkk=Dm(B(369),7,B(370));Bkl=Dm(B(371),8,B(372));Bjx=Dm(B(373),9,B(374));Bkm=Dm(B(375),10,B(376));Bkn=H(Cs,[Bjy,Bke,Bkf,Bkg,Bkh,Bki,Bkj,Bkk,Bkl,Bjx,Bkm]);}
function Bi(){var a=this;C.call(a);a.s=0.0;a.r=0.0;a.t=0.0;a.G=0.0;}
var BiN=null;var BiO=null;var BiP=null;var BiQ=null;var BiM=null;var Bko=0.0;var BiL=null;var BiR=null;var BiS=null;var BiT=null;var BiU=null;var BiV=null;var BiW=null;var BiX=null;var BiY=null;var BiZ=null;var Bi0=null;var Bi1=null;var Bi2=null;var Bi3=null;var Bi4=null;var Bi5=null;var Bi6=null;var Bi7=null;var Bi8=null;var Bi9=null;var Bi$=null;var Bi_=null;var Bja=null;var Bjb=null;var Bjc=null;var Bjd=null;var Bje=null;var Bjf=null;var Bjg=null;function Bv(){Bv=N(Bi);AUI();}
function D3(){var a=new Bi();U2(a);return a;}
function BK(a){var b=new Bi();ABU(b,a);return b;}
function CO(a,b,c,d){var e=new Bi();SI(e,a,b,c,d);return e;}
function A5K(a){var b=new Bi();T_(b,a);return b;}
function U2(a){Bv();J(a);}
function ABU(a,b){Bv();J(a);If(a,b);}
function SI(a,b,c,d,e){Bv();J(a);a.s=b;a.r=c;a.t=d;a.G=e;a.dL();}
function T_(a,b){Bv();J(a);a.eR(b);}
function AEQ(a,b){a.s=b.s;a.r=b.r;a.t=b.t;a.G=b.G;return a;}
function A$J(a,b){a.s=a.s*b.s;a.r=a.r*b.r;a.t=a.t*b.t;a.G=a.G*b.G;return a.dL();}
function AEx(a,b){a.s=a.s*b;a.r=a.r*b;a.t=a.t*b;a.G=a.G*b;return a.dL();}
function A5z(a,b){a.s=a.s+b.s;a.r=a.r+b.r;a.t=a.t+b.t;a.G=a.G+b.G;return a.dL();}
function AV0(a,b){a.s=a.s-b.s;a.r=a.r-b.r;a.t=a.t-b.t;a.G=a.G-b.G;return a.dL();}
function A7x(a){if(a.s<0.0)a.s=0.0;else if(a.s>1.0)a.s=1.0;if(a.r<0.0)a.r=0.0;else if(a.r>1.0)a.r=1.0;if(a.t<0.0)a.t=0.0;else if(a.t>1.0)a.t=1.0;if(a.G<0.0)a.G=0.0;else if(a.G>1.0)a.G=1.0;return a;}
function A4q(a,b,c,d,e){a.s=b;a.r=c;a.t=d;a.G=e;return a.dL();}
function AON(a,b){If(a,b);return a;}
function ADS(a,b,c,d,e){a.s=a.s+b;a.r=a.r+c;a.t=a.t+d;a.G=a.G+e;return a.dL();}
function AQI(a,b,c,d,e){a.s=a.s-b;a.r=a.r-c;a.t=a.t-d;a.G=a.G-e;return a.dL();}
function A8d(a,b,c,d,e){a.s=a.s*b;a.r=a.r*c;a.t=a.t*d;a.G=a.G*e;return a.dL();}
function ANR(a,b,c){a.s=a.s+c*(b.s-a.s);a.r=a.r+c*(b.r-a.r);a.t=a.t+c*(b.t-a.t);a.G=a.G+c*(b.G-a.G);return a.dL();}
function AXu(a,b,c,d,e,f){a.s=a.s+f*(b-a.s);a.r=a.r+f*(c-a.r);a.t=a.t+f*(d-a.t);a.G=a.G+f*(e-a.G);return a.dL();}
function AMH(a){a.s=a.s*a.G;a.r=a.r*a.G;a.t=a.t*a.G;return a;}
function AZb(a,b){var c;if(a===b)return 1;if(b!==null&&Ck(a)===Ck(b)){c=b;return a.r0()!=c.r0()?0:1;}return 0;}
function AMf(a){var b,c;b=a.s===0.0?0:CE(a.s);c=(31*b|0)+(a.r===0.0?0:CE(a.r))|0;c=(31*c|0)+(a.t===0.0?0:CE(a.t))|0;c=(31*c|0)+(a.G===0.0?0:CE(a.G))|0;return c;}
function AR2(a){var b;b=(255.0*a.G|0)<<24|(255.0*a.t|0)<<16|(255.0*a.r|0)<<8|255.0*a.s|0;return J$(b);}
function ATT(a){return (255.0*a.G|0)<<24|(255.0*a.t|0)<<16|(255.0*a.r|0)<<8|255.0*a.s|0;}
function AGS(a){var b,c;b=(255.0*a.s|0)<<24|(255.0*a.r|0)<<16|(255.0*a.t|0)<<8|255.0*a.G|0;c=OB(b);while(c.i()<8){c=(((I()).a(B(315))).a(c)).b();}return c;}
function AF5(b){Bv();return ACS(b,D3());}
function ACS(b,c){Bv();if(b.f(0)==35)b=b.ei(1);c.s=Du(b.ce(0,2),16)/255.0;c.r=Du(b.ce(2,4),16)/255.0;c.t=Du(b.ce(4,6),16)/255.0;c.G=b.i()!=8?1.0:Du(b.ce(6,8),16)/255.0;return c;}
function AFU(b,c,d,e){var f,g;Bv();f=e<<24|d<<16|c<<8|b;g=J$(f);return g;}
function AIE(b,c,d,e){var f;Bv();f=(255.0*e|0)<<24|(255.0*d|0)<<16|(255.0*c|0)<<8|255.0*b|0;return J$(f);}
function AKM(b,c,d,e){Bv();return e<<24|d<<16|c<<8|b;}
function AIJ(b){Bv();return b*255.0|0;}
function A$0(b,c){Bv();return (b*255.0|0)<<8|c*255.0|0;}
function A2p(b,c,d){Bv();return (b*31.0|0)<<11|(c*63.0|0)<<5|d*31.0|0;}
function ALh(b,c,d,e){Bv();return (b*15.0|0)<<12|(c*15.0|0)<<8|(d*15.0|0)<<4|e*15.0|0;}
function AKK(b,c,d){Bv();return (b*255.0|0)<<16|(c*255.0|0)<<8|d*255.0|0;}
function A9s(b,c,d,e){Bv();return (b*255.0|0)<<24|(c*255.0|0)<<16|(d*255.0|0)<<8|e*255.0|0;}
function A1i(b,c,d,e){Bv();return (b*255.0|0)<<24|(c*255.0|0)<<16|(d*255.0|0)<<8|e*255.0|0;}
function AOL(b){Bv();return (b.s*31.0|0)<<11|(b.r*63.0|0)<<5|b.t*31.0|0;}
function A6G(b){Bv();return (b.s*15.0|0)<<12|(b.r*15.0|0)<<8|(b.t*15.0|0)<<4|b.G*15.0|0;}
function ANQ(b){Bv();return (b.s*255.0|0)<<16|(b.r*255.0|0)<<8|b.t*255.0|0;}
function AEH(b){Bv();return (b.s*255.0|0)<<24|(b.r*255.0|0)<<16|(b.t*255.0|0)<<8|b.G*255.0|0;}
function A14(b){Bv();return (b.G*255.0|0)<<24|(b.s*255.0|0)<<16|(b.r*255.0|0)<<8|b.t*255.0|0;}
function A90(b,c){Bv();b.s=((c&63488)>>>11)/31.0;b.r=((c&2016)>>>5)/63.0;b.t=((c&31)>>>0)/31.0;}
function A4D(b,c){Bv();b.s=((c&61440)>>>12)/15.0;b.r=((c&3840)>>>8)/15.0;b.t=((c&240)>>>4)/15.0;b.G=(c&15)/15.0;}
function A40(b,c){Bv();b.s=((c&16711680)>>>16)/255.0;b.r=((c&65280)>>>8)/255.0;b.t=(c&255)/255.0;}
function If(b,c){Bv();b.s=((c&(-16777216))>>>24)/255.0;b.r=((c&16711680)>>>16)/255.0;b.t=((c&65280)>>>8)/255.0;b.G=(c&255)/255.0;}
function APF(b,c){Bv();b.G=((c&(-16777216))>>>24)/255.0;b.s=((c&16711680)>>>16)/255.0;b.r=((c&65280)>>>8)/255.0;b.t=(c&255)/255.0;}
function Zs(b,c){var d;Bv();d=A0A(c);b.G=((d&(-16777216))>>>24)/255.0;b.t=((d&16711680)>>>16)/255.0;b.r=((d&65280)>>>8)/255.0;b.s=(d&255)/255.0;}
function A7a(a,b,c,d){var e,f,g,h,i,j;a:{e=(b/60.0+6.0)%6.0;f=e|0;g=e-f;h=d*(1.0-c);i=d*(1.0-c*g);j=d*(1.0-c*(1.0-g));switch(f){case 0:break;case 1:a.s=i;a.r=d;a.t=h;break a;case 2:a.s=h;a.r=d;a.t=j;break a;case 3:a.s=h;a.r=i;a.t=d;break a;case 4:a.s=j;a.r=h;a.t=d;break a;default:a.s=d;a.r=h;a.t=i;break a;}a.s=d;a.r=j;a.t=h;}return a.dL();}
function AU0(a,b){var c;c=b.data;return a.Pb(c[0],c[1],c[2]);}
function A6Q(a,b){var c,d,e;c=Ei(Ei(a.s,a.r),a.t);d=Ju(Ju(a.s,a.r),a.t);e=c-d;if(e===0.0)b.data[0]=0.0;else if(c===a.s)b.data[0]=(60.0*(a.r-a.t)/e+360.0)%360.0;else if(c!==a.r)b.data[0]=60.0*(a.s-a.r)/e+240.0;else b.data[0]=60.0*(a.t-a.s)/e+120.0;if(c<=0.0)b.data[1]=0.0;else b.data[1]=1.0-d/c;b.data[2]=c;return b;}
function A8$(a){return A5K(a);}
function AUI(){BiN=CO(1.0,1.0,1.0,1.0);BiO=BK((-1077952513));BiP=BK(2139062271);BiQ=BK(1061109759);BiM=CO(0.0,0.0,0.0,1.0);Bko=BiN.ny();BiL=CO(0.0,0.0,0.0,0.0);BiR=CO(0.0,0.0,1.0,1.0);BiS=CO(0.0,0.0,0.5,1.0);BiT=BK(1097458175);BiU=BK(1887473919);BiV=BK((-2016482305));BiW=CO(0.0,1.0,1.0,1.0);BiX=CO(0.0,0.5,0.5,1.0);BiY=BK(16711935);BiZ=BK(2147418367);Bi0=BK(852308735);Bi1=BK(579543807);Bi2=BK(1804477439);Bi3=BK((-65281));Bi4=BK((-2686721));Bi5=BK((-626712321));Bi6=BK((-5963521));Bi7=BK((-1958407169));Bi8=BK((-759919361));Bi9
=BK((-1306385665));Bi$=BK((-16776961));Bi_=BK((-13361921));Bja=BK((-8433409));Bjb=BK((-92245249));Bjc=BK((-9849601));Bjd=CO(1.0,0.0,1.0,1.0);Bje=BK((-1608453889));Bjf=BK((-293409025));Bjg=BK((-1339006721));}
function Fc(){var a=this;C.call(a);a.fm=0;a.cK=0;a.im=0;a.hT=0;a.cV=0;a.et=null;a.jT=0;a.DM=0;}
function EB(a,b,c){var d=new Fc();ANA(d,a,b,c);return d;}
function Bkp(a,b,c,d){var e=new Fc();ACC(e,a,b,c,d);return e;}
function Bkq(a,b,c,d,e,f){var g=new Fc();AAC(g,a,b,c,d,e,f);return g;}
function ANA(a,b,c,d){ACC(a,b,c,d,0);}
function ACC(a,b,c,d,e){var f;f=B9(b,4);AAC(a,b,c,f?5126:5121,f?0:1,d,e);}
function AAC(a,b,c,d,e,f,g){J(a);a.fm=b;a.cK=c;a.hT=d;a.im=e;a.et=f;a.jT=g;a.DM=E3(b);}
function ANE(a,b){if(!(b instanceof Fc))return 0;return KH(a,b);}
function KH(a,b){var c,d,e;a:{if(b!==null&&a.fm==b.fm&&a.cK==b.cK&&a.hT==b.hT&&a.im==b.im){c=a.et;d=b.et;if(c.z(d)&&a.jT==b.jT){e=1;break a;}}e=0;}return e;}
function IU(a){return (a.DM<<8)+(a.jT&255)|0;}
function QD(a){a:{switch(a.hT){case 5120:case 5121:break;case 5122:case 5123:return 2*a.cK|0;case 5124:case 5125:case 5127:case 5128:case 5129:case 5130:case 5131:break a;case 5126:case 5132:return 4*a.cK|0;default:break a;}return a.cK;}return 0;}
function AYK(a){var b,c;b=IU(a);c=(541*b|0)+a.cK|0;c=(541*c|0)+a.et.bp()|0;return c;}
var IC=D();
function Bkr(){var a=new IC();UO(a);return a;}
function UO(a){J(a);}
function Gd(){var a=this;IC.call(a);a.fT=null;a.cH=null;a.uK=null;}
function AVe(a,b,c){var d=new Gd();Ho(d,a,b,c);return d;}
function Ho(a,b,c,d){UO(a);GS();if(d!==Bjm&&d!==Bjn)G(U(((((I()).a(B(296))).dD(d)).a(B(377))).b()));a.fT=b;a.cH=A2n(c);a.uK=d;}
function AH8(a){return a.cH;}
function AKt(a){var b;b=a.cH.xz(47);if(b<0)return a.cH;return a.cH.ei(b+1|0);}
function A7K(a){var b,c;b=a.x8();c=b.xz(46);if(c==(-1))return b;return b.ce(0,c);}
function AGj(a){return a.uK;}
function ASl(a){var b;b=a.fT.Qd(a.cH);if(b!==null)return b;G(U((((I()).a(a.cH)).a(B(378))).b()));}
function AHZ(a){return a.Mw(null);}
function A9U(a,b){var c,$$je;if(a.fT.LQ(a.cH))return a.fT.ey.W(a.cH);a:{try{c=Bbl(a.Iy(),B(379));}catch($$e){$$je=R($$e);if($$je instanceof GL){break a;}else{throw $$e;}}return c;}return null;}
function A78(a){var b,c,d,e,f,g,h,i,j,$$je;b=Cp((a.HA()));if(!b)b=512;c=Cj(b);d=0;e=a.qx();a:{try{try{while(true){f=c.data.length;g=e.ru(c,d,f-d|0);if(g==(-1))break;d=d+g|0;if(d==f){h=Cj(f*2|0);X(c,0,h,0,d);c=h;}}break a;}catch($$e){$$je=R($$e);if($$je instanceof De){i=$$je;}else{throw $$e;}}G(Jd((((I()).a(B(380))).dD(a)).b(),i));}catch($$e){$$je=R($$e);j=$$je;}b:{try{if(e!==null)e.fQ();break b;}catch($$e){$$je=R($$e);if($$je instanceof De){}else{throw $$e;}}}G(j);}c:{try{if(e!==null)e.fQ();break c;}catch($$e)
{$$je=R($$e);if($$je instanceof De){}else{throw $$e;}}}if(d>=f)h=c;else{h=Cj(d);X(c,0,h,0,d);}return h;}
function AOp(a,b){var c,d,e;c=new Gd;d=a.fT;e=(((I()).a(a.cH.bN()?B(101):(((I()).a(a.cH)).a(!a.cH.yR(B(381))?B(381):B(101))).b())).a(b)).b();GS();Ho(c,d,e,Bjm);return c;}
function AG$(a){var b,c;b=a.cH.H3(B(381));c=B(101);if(b>0)c=a.cH.ce(0,b);return AVe(a.fT,c,a.uK);}
function A8V(a){return a.fT.N_(a.cH);}
function A4A(a){return a.cH;}
function A2n(b){var c;c=b.uE(B(382),B(381));if(c.yR(B(381)))c=c.ce(0,c.i()-1|0);return c;}
function F6(){BT.call(this);this.gW=null;}
var Bks=null;function AKO(){AKO=N(F6);AF1();}
function Bkt(){var a=new F6();Nw(a);return a;}
function BaZ(a){var b=new F6();S2(b,a);return b;}
function Nw(a){AKO();B_(a);a.gW=BL();Vb(a);}
function Vb(a){var b,c,d;b=BcL(a);c=Bb4(a);d=Uo(BS(b,"setWorldTransformJS"),BS(c,"getWorldTransformJS"));a.dZ(d,1);}
function S2(a,b){AKO();B_(a);a.gW=BL();}
function AF1(){Bks=BaZ(0);}
function Uo(b,c){var jsMotionState=new Bullet.MyMotionState();jsMotionState.setWorldTransform=b;jsMotionState.getWorldTransform=c;return Bullet.getPointer(jsMotionState);}
function ABb(){F6.call(this);this.qd=null;}
function Bah(a){var b=new ABb();A5v(b,a);return b;}
function A5v(a,b){Nw(a);a.qd=b;}
function ARx(a,b){b.ch(a.qd);}
function AMV(a,b){a.qd.ch(b);}
var T1=D(CF);
function A__(a){var b=new T1();AKR(b,a);return b;}
function AKR(a,b){E4(a,b.pV(),b.Ju(),b.i6());a.Y.Q(a);}
function A$U(a,b,c,d){var e;while((b+a.bv.cg()|0)<=d.J()){e=a.bv;if(e.bH(b,c)<=0)break;b=b+a.bv.cg()|0;}return a.k.e(b,c,d);}
function AND(a,b,c,d){var e,f,g;e=a.k.cD(b,c,d);if(e<0)return (-1);f=e-a.bv.cg()|0;while(f>=b&&a.bv.bH(f,c)>0){g=f-a.bv.cg()|0;e=f;f=g;}return e;}
function Ew(){var a=this;C.call(a);a.fl=null;a.ja=0;a.oy=null;a.CI=null;a.D5=null;a.C8=null;a.k8=null;a.C6=null;a.y_=null;a.Cc=null;a.dE=0;a.q5=0;a.s2=0;a.Qe=null;a.Bb=null;a.wE=null;a.yF=0;a.Kn=0;a.cO=null;a.hG=null;}
var Bku=0;var Bkv=null;var Bkw=null;var Bkx=null;var Bky=null;function UU(){UU=N(Ew);APG();}
function AIS(a,b){var c=new Ew();UX(c,a,b);return c;}
function UX(a,b,c){UU();J(a);a.fl=B(101);a.oy=Gr();a.CI=Gr();a.D5=Gr();a.k8=Gr();a.C6=Gr();a.y_=Gr();a.Kn=0;a.cO=Fk(1);a.hG=Fk(1);if(b===null)G(W(B(383)));if(c===null)G(W(B(384)));if(Bkv!==null&&Bkv.i()>0)b=(((I()).a(Bkv)).a(b)).b();if(Bkw!==null&&Bkw.i()>0)c=(((I()).a(Bkw)).a(c)).b();a.Bb=b;a.wE=c;a.Qe=HY(16);Kr(a,b,c);if(a.r$()){QR(a);R8(a);AAg(a,BgQ,a);}}
function Kr(a,b,c){a.q5=OE(a,35633,b);a.s2=OE(a,35632,c);if(a.q5!=(-1)&&a.s2!=(-1)){a.dE=ABz(a,a.IE());if(a.dE!=(-1)){a.ja=1;return;}a.ja=0;return;}a.ja=0;}
function OE(a,b,c){var d,e,f,g,h;d=Bie;e=Fk(1);f=d.On(b);if(!f)return (-1);d.QC(f,c);d.Io(f);d.NL(f,35713,e);g=e.b2(0);if(g)return f;h=d.NU(f);a.fl=(((I()).a(a.fl)).a(b!=35633?B(385):B(386))).b();a.fl=(((I()).a(a.fl)).a(h)).b();return (-1);}
function AKI(a){var b,c;b=Bie;c=b.MV();if(!c)c=(-1);return c;}
function ABz(a,b){var c,d,e,f;c=Bie;if(b==(-1))return (-1);c.xg(b,a.q5);c.xg(b,a.s2);c.Lm(b);d=FV(4);FH(d,EV());e=d.yJ();c.qn(b,35714,e);f=e.b2(0);if(f)return b;a.fl=Bie.An(b);return (-1);}
function A8c(a){if(!a.ja)return a.fl;a.fl=Bie.An(a.dE);return a.fl;}
function A9e(a){return a.ja;}
function Rk(a,b){var c,d;c=Bie;d=a.k8.tG(b,(-2));if(d==(-2)){d=c.Db(a.dE,b);a.k8.gA(b,d);}return d;}
function JW(a,b){UU();return a.AN(b,Bku);}
function A23(a,b,c){var d;d=a.oy.tG(b,(-2));if(d==(-2)){d=Bie.AO(a.dE,b);if(d==(-1)&&c){if(!a.ja)G(DS((((I()).a(B(387))).a(a.q0())).b()));G(W(((((I()).a(B(388))).a(b)).a(B(389))).b()));}a.oy.gA(b,d);}return d;}
function A1x(a,b,c){var d,e;d=Bie;Cm(a);e=JW(a,b);d.Cu(e,c);}
function A0n(a,b,c){var d;d=Bie;Cm(a);d.Cu(b,c);}
function APN(a,b,c){var d;d=Bie;Cm(a);d.MQ(b,c);}
function ADT(a,b,c,d){var e;e=Bie;Cm(a);e.OL(b,c,d);}
function AFM(a,b,c,d,e){var f;f=Bie;Cm(a);f.G7(b,c,d,e);}
function AQe(a,b,c,d,e,f){var g;g=Bie;Cm(a);g.GN(b,c,d,e,f);}
function ARO(a,b,c,d,e){var f;f=Bie;Cm(a);f.F0(b,e/3|0,c,d);}
function AZy(a,b,c){a.IL(b,c,0);}
function AVP(a,b,c,d){a.zx(JW(a,b),c,d);}
function ALY(a,b,c){a.zx(b,c,0);}
function A32(a,b,c,d){var e;e=Bie;Cm(a);e.yd(b,1,d,c.c,0);}
function A9r(a,b,c){a.Lv(b,c,0);}
function AIa(a,b,c,d){var e;e=Bie;Cm(a);e.I1(b,1,d,c.gT,0);}
function AWL(a,b,c,d,e){var f;f=Bie;Cm(a);f.yd(b,e/16|0,0,c,d);}
function ADd(a,b,c){a.jh(b,c.n,c.o,c.q);}
function A59(a,b,c){a.ys(b,c.s,c.r,c.t,c.G);}
function A$K(a,b,c,d,e,f,g){var h;h=Bie;Cm(a);h.Pg(b,c,d,e,f,g);}
function AVZ(a){var b;b=Bie;Cm(a);b.Kc(a.dE);}
function AFc(a,b){var c,d;c=Bie;Cm(a);d=Rk(a,b);if(d==(-1))return;c.xG(d);}
function A2V(a,b){var c;c=Bie;Cm(a);c.xG(b);}
function A57(a,b){var c;c=Bie;Cm(a);c.Qw(b);}
function Cm(a){if(a.yF){Kr(a,a.Bb,a.wE);a.yF=0;}}
function AAg(a,b,c){var d;UU();d=Bkx.W(b);if(d===null)d=Bp();d.F(c);Bkx.x(b,d);}
function R8(a){var b,c,d,e;a.cO.c2();Bie.qn(a.dE,35718,a.cO);b=a.cO.b2(0);a.C8=Y(BN,b);c=0;while(c<b){a.cO.c2();a.cO.th(0,1);a.hG.c2();d=Bie.P$(a.dE,c,a.cO,a.hG);e=Bie.AO(a.dE,d);a.oy.gA(d,e);a.CI.gA(d,a.hG.b2(0));a.D5.gA(d,a.cO.b2(0));a.C8.data[c]=d;c=c+1|0;}}
function QR(a){var b,c,d,e;a.cO.c2();Bie.qn(a.dE,35721,a.cO);b=a.cO.b2(0);a.Cc=Y(BN,b);c=0;while(c<b){a.cO.c2();a.cO.th(0,1);a.hG.c2();d=Bie.PM(a.dE,c,a.cO,a.hG);e=Bie.Db(a.dE,d);a.k8.gA(d,e);a.C6.gA(d,a.hG.b2(0));a.y_.gA(d,a.cO.b2(0));a.Cc.data[c]=d;c=c+1|0;}}
function AE7(a,b){return a.k8.tG(b,(-1));}
function APG(){Bku=1;Bkv=B(101);Bkw=B(101);Bkx=DH();Bky=Fk(1);}
var DP=D(Bx);
var Bjn=null;var Bjm=null;var Bkz=null;var BkA=null;var BkB=null;var BkC=null;function GS(){GS=N(DP);AH9();}
function H_(a,b){var c=new DP();Wt(c,a,b);return c;}
function Wt(a,b,c){GS();Cw(a,b,c);}
function AH9(){Bjn=H_(B(390),0);Bjm=H_(B(391),1);Bkz=H_(B(392),2);BkA=H_(B(393),3);BkB=H_(B(394),4);BkC=H(DP,[Bjn,Bjm,Bkz,BkA,BkB]);}
var Me=D(0);
function Jx(){var a=this;C.call(a);a.qT=null;a.g_=null;a.iN=null;}
var BkD=0;function Bfa(a){var b=new Jx();A79(b,a);return b;}
function A79(a,b){var c;J(a);a.g_=b;c=a;b.classObject=c;}
function Lg(b){var c;if(b===null)return null;c=b.classObject;if(c===null)c=Bfa(b);return c;}
function AMk(a){return (((I()).a(B(395))).j(Iu(a))).b();}
function AWC(a){return a.g_;}
function AY3(a,b){return A4E(b,a.g_);}
function A2A(a){if(a.qT===null)a.qT=AQA(a.g_);return a.qT;}
function AJo(a){return A7O(a.g_);}
function ASP(a){return ACw(a.g_)===null?0:1;}
function A3B(a){return Lg(ACw(a.g_));}
function AZA(){if(!BkD){BkD=1;A2u();}}
function A2u(){EI.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){ACh(obj);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Q8,FO],returnType:$rt_voidcls(),callable:function(obj,args){PJ(obj,args[0],args[1]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Q8,FO,Bi,$rt_floatcls(),$rt_intcls(),$rt_booleancls()],returnType:$rt_voidcls(),callable:function(obj,args){S9(obj,args[0],args[1],
args[2],A8M(args[3]),AV8(args[4]),A0O(args[5]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Q8,FO,$rt_intcls(),$rt_intcls(),Bi,$rt_floatcls(),$rt_intcls(),$rt_booleancls(),BN],returnType:$rt_voidcls(),callable:function(obj,args){AA2(obj,args[0],args[1],AV8(args[2]),AV8(args[3]),args[4],A8M(args[5]),AV8(args[6]),A0O(args[7]),args[8]);return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[Q8,FO],returnType:$rt_voidcls(),callable:function(obj,args){A7y(obj,args[0],
args[1]);return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[Q8,FO,Bi,$rt_floatcls(),$rt_intcls(),$rt_booleancls()],returnType:$rt_voidcls(),callable:function(obj,args){A3u(obj,args[0],args[1],args[2],A8M(args[3]),AV8(args[4]),A0O(args[5]));return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[Q8,FO,$rt_intcls(),$rt_intcls(),Bi,$rt_floatcls(),$rt_intcls(),$rt_booleancls(),BN],returnType:$rt_voidcls(),callable:function(obj,args){AG0(obj,args[0],args[1],AV8(args[2]),AV8(args[3]),
args[4],A8M(args[5]),AV8(args[6]),A0O(args[7]),args[8]);return null;}},{name:"truncate",modifiers:0,accessLevel:1,parameterTypes:[Rb,Hi,$rt_floatcls(),BN,$rt_intcls(),D6],returnType:$rt_voidcls(),callable:function(obj,args){ABn(obj,args[0],args[1],A8M(args[2]),args[3],AV8(args[4]),args[5]);return null;}},{name:"wrap",modifiers:0,accessLevel:1,parameterTypes:[Rb,Hi,$rt_intcls(),$rt_intcls()],returnType:Hi,callable:function(obj,args){return QQ(obj,args[0],args[1],AV8(args[2]),AV8(args[3]));}},{name:"adjustLastGlyph",modifiers
:0,accessLevel:1,parameterTypes:[Rb,Hi],returnType:$rt_voidcls(),callable:function(obj,args){EP(obj,args[0],args[1]);return null;}},{name:"parseColorMarkup",modifiers:0,accessLevel:1,parameterTypes:[FO,$rt_intcls(),$rt_intcls(),D6],returnType:$rt_intcls(),callable:function(obj,args){return Pz(obj,args[0],AV8(args[1]),AV8(args[2]),args[3]);}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){A8t(obj);return null;}},{name:"toString",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:BN,callable:function(obj,args){return AN$(obj);}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){DJ();AYF();return null;}}];Hi.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){A0u(obj);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){ALt(obj);return null;}},
{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BN,callable:function(obj,args){return AEn(obj);}}];Bi.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){U2(obj);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){ABU(obj,AV8(args[0]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),
$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:function(obj,args){SI(obj,A8M(args[0]),A8M(args[1]),A8M(args[2]),A8M(args[3]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Bi],returnType:$rt_voidcls(),callable:function(obj,args){T_(obj,args[0]);return null;}},{name:"set",modifiers:0,accessLevel:3,parameterTypes:[Bi],returnType:Bi,callable:function(obj,args){return AEQ(obj,args[0]);}},{name:"mul",modifiers:0,accessLevel:3,parameterTypes:[Bi],returnType:Bi,callable:
function(obj,args){return A$J(obj,args[0]);}},{name:"mul",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls()],returnType:Bi,callable:function(obj,args){return AEx(obj,A8M(args[0]));}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[Bi],returnType:Bi,callable:function(obj,args){return A5z(obj,args[0]);}},{name:"sub",modifiers:0,accessLevel:3,parameterTypes:[Bi],returnType:Bi,callable:function(obj,args){return AV0(obj,args[0]);}},{name:"clamp",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:Bi,callable:function(obj,args){return A7x(obj);}},{name:"set",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:Bi,callable:function(obj,args){return A4q(obj,A8M(args[0]),A8M(args[1]),A8M(args[2]),A8M(args[3]));}},{name:"set",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:Bi,callable:function(obj,args){return AON(obj,AV8(args[0]));}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),
$rt_floatcls()],returnType:Bi,callable:function(obj,args){return ADS(obj,A8M(args[0]),A8M(args[1]),A8M(args[2]),A8M(args[3]));}},{name:"sub",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:Bi,callable:function(obj,args){return AQI(obj,A8M(args[0]),A8M(args[1]),A8M(args[2]),A8M(args[3]));}},{name:"mul",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:Bi,callable:function(obj,args)
{return A8d(obj,A8M(args[0]),A8M(args[1]),A8M(args[2]),A8M(args[3]));}},{name:"lerp",modifiers:0,accessLevel:3,parameterTypes:[Bi,$rt_floatcls()],returnType:Bi,callable:function(obj,args){return ANR(obj,args[0],A8M(args[1]));}},{name:"lerp",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:Bi,callable:function(obj,args){return AXu(obj,A8M(args[0]),A8M(args[1]),A8M(args[2]),A8M(args[3]),A8M(args[4]));}},{name:"premultiplyAlpha",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:Bi,callable:function(obj,args){return AMH(obj);}},{name:"equals",modifiers:0,accessLevel:3,parameterTypes:[C],returnType:$rt_booleancls(),callable:function(obj,args){return AZb(obj,args[0]);}},{name:"hashCode",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:function(obj,args){return AMf(obj);}},{name:"toFloatBits",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_floatcls(),callable:function(obj,args){return AR2(obj);}},{name
:"toIntBits",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:function(obj,args){return ATT(obj);}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BN,callable:function(obj,args){return AGS(obj);}},{name:"valueOf",modifiers:512,accessLevel:3,parameterTypes:[BN],returnType:Bi,callable:function(obj,args){Bv();return AF5(args[0]);}},{name:"valueOf",modifiers:512,accessLevel:3,parameterTypes:[BN,Bi],returnType:Bi,callable:function(obj,args){Bv();return ACS(args[0],
args[1]);}},{name:"toFloatBits",modifiers:512,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_floatcls(),callable:function(obj,args){Bv();return AFU(AV8(args[0]),AV8(args[1]),AV8(args[2]),AV8(args[3]));}},{name:"toFloatBits",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_floatcls(),callable:function(obj,args){Bv();return AIE(A8M(args[0]),A8M(args[1]),A8M(args[2]),A8M(args[3]));}},{name:
"toIntBits",modifiers:512,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_intcls(),callable:function(obj,args){Bv();return AKM(AV8(args[0]),AV8(args[1]),AV8(args[2]),AV8(args[3]));}},{name:"alpha",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bv();return AIJ(A8M(args[0]));}},{name:"luminanceAlpha",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable
:function(obj,args){Bv();return A$0(A8M(args[0]),A8M(args[1]));}},{name:"rgb565",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bv();return A2p(A8M(args[0]),A8M(args[1]),A8M(args[2]));}},{name:"rgba4444",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bv();return ALh(A8M(args[0]),A8M(args[1]),A8M(args[2]),A8M(args[3]));}},
{name:"rgb888",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bv();return AKK(A8M(args[0]),A8M(args[1]),A8M(args[2]));}},{name:"rgba8888",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bv();return A9s(A8M(args[0]),A8M(args[1]),A8M(args[2]),A8M(args[3]));}},{name:"argb8888",modifiers:512,accessLevel:3,parameterTypes
:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bv();return A1i(A8M(args[0]),A8M(args[1]),A8M(args[2]),A8M(args[3]));}},{name:"rgb565",modifiers:512,accessLevel:3,parameterTypes:[Bi],returnType:$rt_intcls(),callable:function(obj,args){Bv();return AOL(args[0]);}},{name:"rgba4444",modifiers:512,accessLevel:3,parameterTypes:[Bi],returnType:$rt_intcls(),callable:function(obj,args){Bv();return A6G(args[0]);}},{name:"rgb888",modifiers:512,accessLevel
:3,parameterTypes:[Bi],returnType:$rt_intcls(),callable:function(obj,args){Bv();return ANQ(args[0]);}},{name:"rgba8888",modifiers:512,accessLevel:3,parameterTypes:[Bi],returnType:$rt_intcls(),callable:function(obj,args){Bv();return AEH(args[0]);}},{name:"argb8888",modifiers:512,accessLevel:3,parameterTypes:[Bi],returnType:$rt_intcls(),callable:function(obj,args){Bv();return A14(args[0]);}},{name:"rgb565ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bi,$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,
args){Bv();A90(args[0],AV8(args[1]));return null;}},{name:"rgba4444ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bi,$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){Bv();A4D(args[0],AV8(args[1]));return null;}},{name:"rgb888ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bi,$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){Bv();A40(args[0],AV8(args[1]));return null;}},{name:"rgba8888ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bi,$rt_intcls()],returnType
:$rt_voidcls(),callable:function(obj,args){Bv();If(args[0],AV8(args[1]));return null;}},{name:"argb8888ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bi,$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){Bv();APF(args[0],AV8(args[1]));return null;}},{name:"abgr8888ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bi,$rt_floatcls()],returnType:$rt_voidcls(),callable:function(obj,args){Bv();Zs(args[0],A8M(args[1]));return null;}},{name:"fromHsv",modifiers:0,accessLevel:3,parameterTypes
:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:Bi,callable:function(obj,args){return A7a(obj,A8M(args[0]),A8M(args[1]),A8M(args[2]));}},{name:"fromHsv",modifiers:0,accessLevel:3,parameterTypes:[$rt_arraycls($rt_floatcls())],returnType:Bi,callable:function(obj,args){return AU0(obj,args[0]);}},{name:"toHsv",modifiers:0,accessLevel:3,parameterTypes:[$rt_arraycls($rt_floatcls())],returnType:$rt_arraycls($rt_floatcls()),callable:function(obj,args){return A6Q(obj,args[0]);}},{name:"cpy",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:Bi,callable:function(obj,args){return A8$(obj);}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){Bv();AUI();return null;}}];}
function A_c(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!a.hf()&&!a.GP()){if(a.iN===null){AZA();b=(a.z6()).$meta;c=b.methods;a.iN=Y(FA,c.length);d=0;e=0;while(e<c.length){f=c[e];if($rt_str(f.name).z(B(396))){g=f.parameterTypes;h=Y(Jx,g.length);i=0;while(true){j=h.data;if(i>=j.length)break;j[i]=Lg(g[i]);i=i+1|0;}j=a.iN.data;k=d+1|0;l=new FA;b=$rt_str(f.name);m=f.modifiers;AAD(l,a,b,m,f.accessLevel,h,Gk(f.callable,"call"));j[d]=l;d=k;}e=e+1|0;}a.iN=I8(a.iN,d);}return a.iN.go();}return Y(FA,0);}
function AS4(a){var b,c,d,e,f,g,h,i,j;b=a.rq();c=b.data;d=c.length;e=Y(FA,d);f=0;g=0;while(g<d){h=c[g];if(Kq(h.so())){i=e.data;j=f+1|0;i[f]=h;f=j;}g=g+1|0;}if(f<e.data.length)e=I8(e,f);return e;}
function A7G(a,b){var c,d,e,f;c=(a.rq()).data;d=c.length;e=0;while(true){if(e>=d)G(ASW());f=c[e];if(ABj(f.vv(),b))break;e=e+1|0;}return f;}
function A7E(a,b){var c,d,e,f;c=(a.rq()).data;d=c.length;e=0;while(true){if(e>=d)G(ASW());f=c[e];if(Kq(f.so())&&ABj(f.vv(),b))break;e=e+1|0;}return f;}
var CN=D();
var Zh=D(CN);
var DN=D(0);
function AB_(){var a=this;C.call(a);a.H=null;a.br=0;}
function A_A(){var a=new AB_();AXv(a);return a;}
function Bfd(a){var b=new AB_();AVg(b,a);return b;}
function AXv(a){J(a);a.H=Bc(0);}
function AVg(a,b){J(a);a.H=Bc(((b+32|0)-1|0)/32|0);}
function APv(a,b){var c,d;c=b/32|0;if(b>=a.br){GZ(a,c+1|0);a.br=b+1|0;}d=a.H.data;d[c]=d[c]|1<<(b%32|0);}
function AJX(a,b,c){var d,e,f,g;if(b>c)G(C9());d=b/32|0;e=c/32|0;if(c>a.br){GZ(a,e+1|0);a.br=c;}if(d==e){f=a.H.data;f[d]=f[d]|F8(a,b)&GR(a,c);}else{f=a.H.data;f[d]=f[d]|F8(a,b);g=d+1|0;while(g<e){a.H.data[g]=(-1);g=g+1|0;}if(c&31){f=a.H.data;f[e]=f[e]|GR(a,c);}}}
function F8(a,b){var c;c=b%32|0;return (-1)<<c;}
function GR(a,b){var c;c=b%32|0;return !c?0:(-1)>>>(32-c|0);}
function A_y(a,b){var c,d;c=b/32|0;if(c<a.H.data.length){d=a.H.data;d[c]=d[c]&Yi((-2),b%32|0);if(b==(a.br-1|0))Fj(a);}}
function AVt(a,b,c){var d,e,f,g,h;if(b>c)G(C9());if(b>=a.br)return;d=Bq(a.br,c);e=b/32|0;f=d/32|0;if(e==f){g=a.H.data;g[e]=g[e]&(GR(a,b)|F8(a,d));}else{g=a.H.data;g[e]=g[e]&GR(a,b);h=e+1|0;while(h<f){a.H.data[h]=0;h=h+1|0;}if(d&31){g=a.H.data;g[f]=g[f]&F8(a,d);}}Fj(a);}
function AVz(a,b){var c;c=b/32|0;return c<a.H.data.length&&a.H.data[c]&1<<(b%32|0)?1:0;}
function A$M(a,b){var c,d,e,f,g;if(b>=a.br)return (-1);c=b/32|0;d=a.H.data[c];e=d>>>(b%32|0);if(e)return E3(e)+b|0;f=(a.br+31|0)/32|0;g=c+1|0;while(g<f){if(a.H.data[g])return (g*32|0)+E3(a.H.data[g])|0;g=g+1|0;}return (-1);}
function AO5(a,b){var c,d,e,f,g;if(b>=a.br)return b;c=b/32|0;d=a.H.data[c]^(-1);e=d>>>(b%32|0);if(e)return E3(e)+b|0;f=(a.br+31|0)/32|0;g=c+1|0;while(g<f){if(a.H.data[g]!=(-1))return (g*32|0)+E3(a.H.data[g]^(-1))|0;g=g+1|0;}return a.br;}
function GZ(a,b){var c;if(a.H.data.length>=b)return;c=Bf((b*3|0)/2|0,(a.H.data.length*2|0)+1|0);a.H=ATz(a.H,c);}
function Fj(a){var b,c,d;b=(a.br+31|0)/32|0;a.br=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Mu(a.H.data[c]);if(d<32)break;c=c+(-1)|0;a.br=a.br-32|0;}a.br=a.br-d|0;}}
function AOE(a,b){var c,d;c=Bq(a.H.data.length,b.H.data.length);d=0;while(d<c){if(a.H.data[d]&b.H.data[d])return 1;d=d+1|0;}return 0;}
function A9O(a,b){var c,d,e;c=Bq(a.H.data.length,b.H.data.length);d=0;while(d<c){e=a.H.data;e[d]=e[d]&b.H.data[d];d=d+1|0;}while(c<a.H.data.length){a.H.data[c]=0;c=c+1|0;}a.br=Bq(a.br,b.br);Fj(a);}
function ATP(a,b){var c,d,e;c=Bq(a.H.data.length,b.H.data.length);d=0;while(d<c){e=a.H.data;e[d]=e[d]&(b.H.data[d]^(-1));d=d+1|0;}Fj(a);}
function A9F(a,b){var c,d,e;a.br=Bf(a.br,b.br);GZ(a,(a.br+31|0)/32|0);c=Bq(a.H.data.length,b.H.data.length);d=0;while(d<c){e=a.H.data;e[d]=e[d]|b.H.data[d];d=d+1|0;}}
function A2J(a,b){var c,d,e;a.br=Bf(a.br,b.br);GZ(a,(a.br+31|0)/32|0);c=Bq(a.H.data.length,b.H.data.length);d=0;while(d<c){e=a.H.data;e[d]=e[d]^b.H.data[d];d=d+1|0;}Fj(a);}
function A9Y(a){return a.br?0:1;}
function VC(){Q.call(this);this.Jb=null;}
function Bam(a){var b=new VC();A_d(b,a);return b;}
function A_d(a,b){a.Jb=b;Be(a);}
function AHh(a,b){return Rw(b);}
var NU=D(0);
function FN(){var a=this;C.call(a);a.cp=null;a.c9=null;a.ds=null;a.jA=null;a.hs=null;a.eK=null;a.hS=null;a.k_=0.0;a.jP=0.0;a.kw=0.0;a.md=0.0;a.r1=null;a.c6=null;a.Gm=null;}
function Lu(a){J(a);a.cp=S();a.c9=Cl(0.0,0.0,(-1.0));a.ds=Cl(0.0,1.0,0.0);a.jA=BL();a.hs=BL();a.eK=BL();a.hS=BL();a.k_=1.0;a.jP=100.0;a.kw=0.0;a.md=0.0;a.r1=Be6();a.c6=S();a.Gm=A_Z(S(),S());}
function AIK(a,b,c,d){var e;((a.c6.I(b,c,d)).gl(a.cp)).bU();if(!a.c6.yo()){e=a.c6.yy(a.ds);if(CG(e-1.0)<9.999999717180685E-10)(a.ds.M(a.c9)).en((-1.0));else if(CG(e+1.0)<9.999999717180685E-10)a.ds.M(a.c9);a.c9.M(a.c6);a.HT();}}
function A0F(a){(a.c6.M(a.c9)).iC(a.ds);((a.ds.M(a.c6)).iC(a.c9)).bU();}
function A5Z(a,b,c){a.c9.rz(b,c);a.ds.rz(b,c);}
function APc(a,b,c,d){a.c6.M(b);a.c6.gl(a.cp);a.k$(a.c6);a.Gd(c,d);a.c6.rz(c,d);a.Kr( -a.c6.n, -a.c6.o, -a.c6.q);}
function APH(a,b,c,d){a.cp.AR(b,c,d);}
function A_a(a,b){a.cp.fB(b);}
function QG(){var a=this;FN.call(a);a.lI=0.0;a.yS=null;}
function Bef(){var a=new QG();AF4(a);return a;}
function AF4(a){Lu(a);a.lI=1.0;a.yS=S();a.k_=0.0;}
function AYs(a){a.p$(1);}
function A_o(a,b){a.jA.zf(a.lI* -a.kw/2.0,a.lI*a.kw/2.0,a.lI* -(a.md/2.0),a.lI*a.md/2.0,a.k_,a.jP);a.hs.B4(a.cp,(a.yS.M(a.cp)).fB(a.c9),a.ds);a.eK.ch(a.jA);G$(a.eK.c,a.hs.c);if(b){a.hS.ch(a.eK);MY(a.hS.c);a.r1.AK(a.hS);}}
var Hd=D(0);
function HP(){var a=this;C.call(a);a.c5=null;a.oR=0;a.w3=0;a.ii=0;a.l7=0;a.nN=0;}
function A0K(a,b){var c=new HP();AYu(c,a,b);return c;}
function BkE(a){var b=new HP();ABt(b,a);return b;}
function AYu(a,b,c){J(a);a.ii=1;a.l7=0;a.w3=1;a.c5=AAS(c);a.c5.db();a.oR=Bie.i5();a.nN=!b?35048:35044;}
function ABt(a,b){J(a);a.ii=1;a.l7=0;a.w3=1;a.c5=AAS(b);a.c5.db();a.oR=Bie.i5();a.nN=35044;}
function AJ3(a){return BD(a.c5);}
function AVs(a){return CV(a.c5);}
function ANS(a,b,c,d){a.ii=1;a.c5.c2();a.c5.DG(b,c,d);a.c5.db();if(a.l7){Bie.fD(34963,BD(a.c5),a.c5,a.nN);a.ii=0;}}
function AUH(a){a.ii=1;return a.c5;}
function A9H(a){if(!a.oR)G(U(B(397)));Bie.c$(34963,a.oR);if(a.ii){Bie.fD(34963,BD(a.c5),a.c5,a.nN);a.ii=0;}a.l7=1;}
function A63(a){Bie.c$(34963,0);a.l7=0;}
var Qu=D(HP);
function Bcz(a){var b=new Qu();A5c(b,a);return b;}
function A5c(a,b){ABt(a,b);}
function JA(){D4.call(this);this.LA=0.0;}
var BkF=0.0;var BkG=null;function Qx(){Qx=N(JA);AOW();}
function A8M(a){return a.LA;}
function Ea(b){var c,d,e,f,g,h,i,j,k,l,m,n;Qx();if(b.bN())G(Ed());c=0;d=b.i();while(true){if(b.f(c)>32){while(b.f(d-1|0)<=32){d=d+(-1)|0;}e=0;if(b.f(c)==45){c=c+1|0;e=1;}else if(b.f(c)==43)c=c+1|0;if(c==d)G(Ed());a:{f=b.f(c);g=0;h=0;i=0;if(f!=46){i=1;if(f>=48&&f<=57){b:{while(c<d){if(b.f(c)!=48)break b;c=c+1|0;}}while(c<d){j=b.f(c);if(j<48)break a;if(j>57)break a;if(g>=214748355)h=h+1|0;else g=(g*10|0)+(j-48|0)|0;c=c+1|0;}}else G(Ed());}}if(c<d&&b.f(c)==46){c=c+1|0;c:{while(true){if(c>=d)break c;k=b.f(c);if
(k<48)break c;if(k>57)break;if(g<214748355){g=(g*10|0)+(k-48|0)|0;h=h+(-1)|0;}c=c+1|0;i=1;}}if(!i)G(Ed());}if(c<d){j=b.f(c);if(j!=101&&j!=69)G(Ed());j=c+1|0;l=0;if(j==d)G(Ed());if(b.f(j)==45){j=j+1|0;l=1;}else if(b.f(j)==43)j=j+1|0;m=0;n=0;d:{while(true){if(j>=d)break d;k=b.f(j);if(k<48)break d;if(k>57)break;m=(10*m|0)+(k-48|0)|0;n=1;j=j+1|0;}}if(!n)G(Ed());if(l)m= -m|0;h=h+m|0;}e:{j=B9(h,38);if(j<=0){if(j)break e;if(g<=34028234)break e;}return e?(-Infinity):Infinity;}if(e)g= -g|0;return g*AAM(h);}c=c+1|0;if
(c==d)break;}G(Ed());}
function AAM(b){var c,d;Qx();if(b>=0)c=10.0;else{c=0.1;b= -b|0;}d=1.0;while(b){if(b%2|0)d=d*c;c=c*c;b=b/2|0;}return d;}
function Oj(b){Qx();return $rt_floatToIntBits(b);}
function AOW(){BkF=NaN;BkG=F($rt_floatcls());}
var V9=D();
function JX(b,c){var d,e,f,g;d=b.data;e=BW(c);f=Bq(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Oh(b,c){var d,e,f,g;d=b.data;e=Cj(c);f=Bq(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function ATz(b,c){var d,e,f,g;d=b.data;e=Bc(c);f=Bq(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function I8(b,c){var d,e,f,g;d=b.data;e=Lt((Ck(b)).gq(),c);f=Bq(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function AZN(b,c,d,e){var f,g;if(c>d)G(CK());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function IH(b,c){AZN(b,0,b.data.length,c);}
function AQK(b,c,d,e){var f,g;if(c>d)G(CK());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function APn(b,c){AQK(b,0,b.data.length,c);}
function Hl(b,c,d,e){var f,g;if(c>d)G(CK());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function U9(b,c){Hl(b,0,b.data.length,c);}
function A4C(b,c){return A5A(b,0,b.data.length,c);}
function A5A(b,c,d,e){var f,g,h,i,j;f=B9(c,d);if(f>0)G(CK());if(!f)return (-1);g=d-1|0;while(true){h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>g)return ( -i|0)-2|0;}else{g=i-1|0;if(g<c)return ( -i|0)-1|0;}}return i;}
function ABj(b,c){var d,e,f,g;if(b===c)return 1;if(b!==null&&c!==null){d=c.data;e=b.data;f=e.length;if(f==d.length){g=0;while(g<f){if(!A5p(e[g],d[g]))return 0;g=g+1|0;}return 1;}}return 0;}
function DA(){BJ.call(this);this.fi=0;}
function Qo(a){var b=new DA();APj(b,a);return b;}
function APj(a,b){C2(a);a.fi=b;}
function A1$(a){return 1;}
function AJI(a,b,c){return a.fi!=c.f(b)?(-1):1;}
function AH1(a,b,c,d){var e,f,g,h;if(!(c instanceof BN))return F3(a,b,c,d);e=c;f=d.J();while(true){if(b>=f)return (-1);g=e.eH(a.fi,b);if(g<0)return (-1);h=a.k;b=g+1|0;if(h.e(b,c,d)>=0)break;}return g;}
function ALf(a,b,c,d,e){var f,g;if(!(d instanceof BN))return Gb(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.mJ(a.fi,c);if(g<0)break a;if(g<b)break a;if(a.k.e(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AR1(a){return (((I()).a(B(101))).T(a.fi)).b();}
function AFk(a){return a.fi;}
function ARp(a,b){if(b instanceof DA)return b.ps()!=a.fi?0:1;if(!(b instanceof Dy)){if(b instanceof C4)return b.p(a.fi);if(!(b instanceof Dw))return 1;return 0;}return b.bH(0,In(a.fi))<=0?0:1;}
function VW(){B7.call(this);this.nk=null;}
function BdG(a){var b=new VW();AE4(b,a);return b;}
function AE4(a,b){a.nk=b;Dq(a);}
function A_b(a,b,c){var d,e;d=El();e=d.AM();e.G5(AER(a.nk),Bcm(a,e));d.AM();return 1;}
var Ms=D();
var BkH=null;function BdA(){BdA=N(Ms);AJ$();}
function AJ$(){BkH=Bc((QK()).data.length);BkH.data[BC(BkI)]=1;BkH.data[BC(BkJ)]=2;BkH.data[BC(BkK)]=3;BkH.data[BC(BkL)]=4;}
function Ww(){var a=this;Q.call(a);a.sX=0;a.BP=null;a.tR=null;}
function BcW(a,b,c){var d=new Ww();ATt(d,a,b,c);return d;}
function ATt(a,b,c,d){a.tR=b;a.sX=c;a.BP=d;Be(a);}
function AQj(a,b){return !(a.sX^a.tR.bc.eL(b))&&!(a.sX^a.tR.e$^a.BP.p(b))?0:1;}
function WD(){var a=this;Q.call(a);a.xS=0;a.CS=null;a.CA=null;a.QA=null;}
function BcT(a,b,c,d){var e=new WD();AZ8(e,a,b,c,d);return e;}
function AZ8(a,b,c,d,e){a.QA=b;a.xS=c;a.CS=d;a.CA=e;Be(a);}
function AC3(a,b){return a.xS^(!a.CS.p(b)&&!a.CA.p(b)?0:1)?0:1;}
function Wy(){var a=this;Q.call(a);a.CX=null;a.N4=null;}
function BaA(a,b){var c=new Wy();ADe(c,a,b);return c;}
function ADe(a,b,c){a.N4=b;a.CX=c;Be(a);}
function A6W(a,b){return a.CX.p(b);}
var M7=D(0);
function Wx(){var a=this;Q.call(a);a.qh=0;a.zy=null;a.r5=null;}
function Bal(a,b,c){var d=new Wx();ADq(d,a,b,c);return d;}
function ADq(a,b,c,d){a.r5=b;a.qh=c;a.zy=d;Be(a);}
function A3o(a,b){return !(a.qh^a.r5.bc.eL(b))&&!(a.qh^a.r5.e$^a.zy.p(b))?1:0;}
function Wz(){var a=this;Q.call(a);a.xi=null;a.QO=null;}
function Bax(a,b){var c=new Wz();ADn(c,a,b);return c;}
function ADn(a,b,c){a.QO=b;a.xi=c;Be(a);}
function AJp(a,b){return a.xi.p(b);}
function WG(){var a=this;Q.call(a);a.yv=null;a.DH=0;a.yn=null;}
function A_S(a,b,c){var d=new WG();AHa(d,a,b,c);return d;}
function AHa(a,b,c,d){a.yn=b;a.yv=c;a.DH=d;Be(a);}
function AYo(a,b){return !a.yv.p(b)&&!(a.DH^a.yn.bc.eL(b))?1:0;}
var GT=D(0);
function WB(){var a=this;Q.call(a);a.Fk=0;a.zz=null;a.zs=null;a.Mc=null;}
function BfL(a,b,c,d){var e=new WB();ADN(e,a,b,c,d);return e;}
function ADN(a,b,c,d,e){a.Mc=b;a.Fk=c;a.zz=d;a.zs=e;Be(a);}
function AY5(a,b){return a.Fk^(!a.zz.p(b)&&!a.zs.p(b)?0:1);}
function WA(){var a=this;Q.call(a);a.EZ=null;a.MA=null;}
function BfV(a,b){var c=new WA();AUR(c,a,b);return c;}
function AUR(a,b,c){a.MA=b;a.EZ=c;Be(a);}
function AMB(a,b){return a.EZ.p(b)?0:1;}
function P3(){BB.call(this);this.rB=null;}
function Bb0(a){var b=new P3();AGs(b,a);return b;}
function AGs(a,b){CP(a);a.rB=b;}
function A47(a,b,c,d){var e,f,g,h,i;e=d.J();f=b+1|0;if(f>e){d.d5=1;return (-1);}g=c.f(b);if(BY(g)){h=b+2|0;if(h<=e){i=c.f(f);if(GA(g,i))return a.rB.k0(Dh(g,i))?(-1):a.k.e(h,c,d);}}return a.rB.k0(g)?(-1):a.k.e(f,c,d);}
function AYf(a){return B(398);}
function A7g(a,b){a.k=b;}
function AC1(a){return (-2147483602);}
function ATN(a,b){return 1;}
function WE(){var a=this;Q.call(a);a.x$=null;a.CV=0;a.y5=null;}
function Bds(a,b,c){var d=new WE();A0E(d,a,b,c);return d;}
function A0E(a,b,c,d){a.y5=b;a.x$=c;a.CV=d;Be(a);}
function ARZ(a,b){return !a.x$.p(b)&&!(a.CV^a.y5.bc.eL(b))?0:1;}
var DL=D();
var BkM=null;var BkN=null;var BkO=null;var BkP=null;var BkQ=null;var BkR=null;function Bd(){Bd=N(DL);AVR();}
function In(b){var c,d;Bd();c=new BN;d=BW(1);d.data[0]=b;IA(c,d);return c;}
function VG(b){Bd();return b>0&&b<=65535?1:0;}
function Im(b){Bd();return b>=65536&&b<=1114111?1:0;}
function BY(b){Bd();return (b&64512)!=55296?0:1;}
function BG(b){Bd();return (b&64512)!=56320?0:1;}
function Jz(b){Bd();return !BY(b)&&!BG(b)?0:1;}
function GA(b,c){Bd();return BY(b)&&BG(c)?1:0;}
function Dh(b,c){Bd();return ((b&1023)<<10|c&1023)+65536|0;}
function ST(b,c){Bd();return WF(b,c,b.data.length);}
function WF(b,c,d){var e,f;Bd();if(c<(d-1|0)){e=b.data;if(BY(e[c])){f=c+1|0;if(BG(e[f]))return Dh(e[c],e[f]);}}return b.data[c];}
function FB(b){var c;Bd();c=b-65536|0;return (55296|c>>10&1023)&65535;}
function Fi(b){Bd();return (56320|b&1023)&65535;}
function Dr(b){Bd();return EX(b)&65535;}
function EX(b){Bd();return (AA7(b)).toLowerCase().charCodeAt(0);}
function DC(b){Bd();return En(b)&65535;}
function En(b){Bd();return (AA7(b)).toUpperCase().charCodeAt(0);}
function NL(b,c){Bd();return ABa(b,c);}
function ABa(b,c){var d;Bd();if(c>=2&&c<=36){d=MH(b);if(d>=c)d=(-1);return d;}return (-1);}
function Nn(b){Bd();return MH(b);}
function MH(b){var c,d,e,f,g,h,i,j;Bd();c=OS();d=c.data;e=0;f=(d.length/2|0)-1|0;while(f>=e){g=(e+f|0)/2|0;h=g*2|0;i=d[h];j=B9(b,i);if(j>0)e=g+1|0;else{if(j>=0)return d[h+1|0];f=g-1|0;}}return (-1);}
function FQ(b,c){Bd();if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function ACG(b){Bd();return Cv(b)!=9?0:1;}
function OS(){Bd();if(BkN===null)BkN=A$j(((R5()).value!==null?$rt_str((R5()).value):null));return BkN;}
function R5(){Bd();if(BkQ===null)BkQ=YQ();return BkQ;}
function YS(){Bd();if(BkO===null)BkO=AUc(((Yf()).value!==null?$rt_str((Yf()).value):null));return BkO;}
function Yf(){Bd();if(BkR===null)BkR=U0();return BkR;}
function Eu(b){var c;Bd();if(b<65536){c=BW(1);c.data[0]=b&65535;return c;}return I5([FB(b),Fi(b)]);}
function Q9(b){var c;Bd();a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}c=1;break a;}c=0;}return c;}
function F_(b){Bd();return Cv(b);}
function Cv(b){var c,d,e,f,g,h;Bd();if(VG(b)&&Jz(b&65535))return 19;c=YS();d=c.data;e=0;f=d.length-1|0;while(e<=f){g=(e+f|0)/2|0;h=d[g];if(b>=h.yc)e=g+1|0;else{if(b>=h.tK)return h.Cr.data[b-h.tK|0];f=g-1|0;}}return 0;}
function Ug(b){Bd();return Cv(b)!=2?0:1;}
function Vq(b){Bd();return Cv(b)!=1?0:1;}
function O6(b){Bd();return Cv(b)!=3?0:1;}
function RL(b){Bd();return !Cv(b)?0:1;}
function Ud(b){Bd();switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:break;default:return 0;}return 1;}
function M9(b){Bd();return J0(b);}
function J0(b){Bd();a:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Rw(b){Bd();a:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return Fx(b);}
function UW(b){Bd();a:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return Fx(b);}
function Uv(b){Bd();a:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break a;default:break a;}return 1;}return Fx(b);}
function Yh(b){Bd();a:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break a;default:break a;}return 1;}return Fx(b);}
function Fx(b){Bd();a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Cv(b)!=16?0:1;}
function MS(b){Bd();switch(Cv(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function S_(b){Bd();return KK(b);}
function KK(b){Bd();switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return MS(b);}return 1;}
function AVR(){BkM=F($rt_charcls());BkP=Y(DL,128);}
function YQ(){return {"value":"{?*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%slG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%sTEG%%%%%%%%%%%%%%%%%%&5G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%VR#G%%%%%%%%%%%%%"
+"%%%%%"};}
function U0(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
function OQ(){var a=this;BJ.call(a);a.sI=0;a.A2=0;}
function AXC(a){var b=new OQ();APV(b,a);return b;}
function APV(a,b){C2(a);a.sI=b;a.A2=GG(b);}
function ADF(a,b,c){return a.sI!=c.f(b)&&a.A2!=c.f(b)?(-1):1;}
function AKb(a){return (((I()).a(B(399))).T(a.sI)).b();}
function Dw(){var a=this;BJ.call(a);a.mK=0;a.lV=0;a.m2=0;}
function A_3(a){var b=new Dw();ATL(b,a);return b;}
function ATL(a,b){var c,d;C2(a);a.bO=2;a.m2=b;c=Eu(b);d=c.data;a.mK=d[0];a.lV=d[1];}
function A6S(a,b,c){var d,e,f;d=b+1|0;e=c.f(b);f=c.f(d);return a.mK==e&&a.lV==f?2:(-1);}
function A4B(a,b,c,d){var e,f,g,h;if(!(c instanceof BN))return F3(a,b,c,d);e=c;f=d.J();while(b<f){g=e.eH(a.mK,b);if(g<0)return (-1);b=g+1|0;if(b>=f)continue;h=e.f(b);if(a.lV==h&&a.k.e(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AFX(a,b,c,d,e){var f,g,h;if(!(d instanceof BN))return Gb(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.mJ(a.lV,c);h=g+(-1)|0;if(h<0)break a;if(h<b)break a;if(a.mK==f.f(h)&&a.k.e(h+2|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function A9w(a){return ((((I()).a(B(101))).T(a.mK)).T(a.lV)).b();}
function AUV(a){return a.m2;}
function A6y(a,b){if(b instanceof Dw)return b.sS()!=a.m2?0:1;if(b instanceof C4)return b.p(a.m2);if(b instanceof DA)return 0;if(!(b instanceof Dy))return 1;return 0;}
function Zb(){var a=this;T.call(a);a.ss=0;a.qi=0;a.vT=0;}
function G7(a,b){var c=new Zb();AHH(c,a,b);return c;}
function Beb(a,b,c){var d=new Zb();AUy(d,a,b,c);return d;}
function AHH(a,b,c){Bo(a);a.qi=c;a.ss=b;}
function AUy(a,b,c,d){Bo(a);a.vT=d;a.qi=c;a.ss=b;}
function AC$(a){var b;b=A_Y(a.ss);if(a.vT)b.bG.n4(0,2048);b.be=a.qi;return b;}
var Sv=D();
function Sd(){var a=this;C.call(a);a.y0=null;a.gC=null;a.gp=null;a.fR=null;}
function Bfj(){var a=new Sd();A5_(a);return a;}
function A5_(a){J(a);a.gC=null;a.gp=null;a.fR=null;}
var D$=D();
var BkS=null;var BkT=null;function Km(a){J(a);}
function MO(b){if(!(b&1)){if(BkT!==null)return BkT;BkT=Bfz();return BkT;}if(BkS!==null)return BkS;BkS=Be7();return BkS;}
var HV=D(CT);
function ZB(a,b,c,d){FJ(a,b);a.C=c;a.bb=d;}
function UQ(b){if(b>=0)return Bdi(b);G(W((((I()).a(B(400))).j(b)).b()));}
function Zj(b,c,d){return BbR(0,b.data.length,b,c,c+d|0,0);}
function La(b){return Zj(b,0,b.data.length);}
function AEp(a,b,c,d){var e,f,g,h,i;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bg((((((I()).a(B(401))).j(g)).a(B(402))).j(f)).b()));if(Bb(a)<d)G(UA());if(d<0)G(Bg(((((I()).a(B(403))).j(d)).a(B(404))).b()));h=a.C;i=0;while(i<d){g=c+1|0;f=h+1|0;e[c]=a.z1(h);i=i+1|0;c=g;h=f;}a.C=a.C+d|0;return a;}}e=b.data;G(Bg(((((((I()).a(B(405))).j(c)).a(B(64))).j(e.length)).a(B(24))).b()));}
function APA(a,b){return a.rj(b,0,b.data.length);}
function A_e(a,b,c,d){var e,f,g,h,i;if(a.b_())G(C8());if(Bb(a)<d)G(F0());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bg((((((I()).a(B(406))).j(g)).a(B(402))).j(f)).b()));if(d<0)G(Bg(((((I()).a(B(403))).j(d)).a(B(404))).b()));h=a.C;i=0;while(i<d){g=h+1|0;f=c+1|0;a.sb(h,e[c]);i=i+1|0;h=g;c=f;}a.C=a.C+d|0;return a;}}e=b.data;G(Bg(((((((I()).a(B(405))).j(c)).a(B(64))).j(e.length)).a(B(24))).b()));}
function AWv(a,b,c,d){var e,f,g,h,i,j;if(a.b_())G(C8());e=d-c|0;if(Bb(a)<e)G(F0());if(c>=0&&c<b.i()){if(d>b.i()){f=new Ej;g=(((I()).a(B(406))).j(d)).a(B(407));M6(f,(g.j(b.i())).b());G(f);}if(c>d)G(Bg((((((I()).a(B(408))).j(c)).a(B(409))).j(d)).b()));h=a.C;while(c<d){i=h+1|0;j=c+1|0;a.sb(h,b.f(c));h=i;c=j;}a.C=a.C+e|0;return a;}G(Bg(((((((I()).a(B(408))).j(c)).a(B(64))).j(b.i())).a(B(24))).b()));}
function IV(a,b){return a.H0(b,0,b.i());}
function WH(a){return a.Or();}
function NK(a){return a.Ny();}
function K$(a){G8(a);return a;}
function AMm(a,b){GM(a,b);return a;}
var Ht=D(HV);
function Qd(a,b,c,d){ZB(a,b,c,d);}
function AEs(a){var b,c,d,e;if(a.b_())G(C8());a:{b=Bb(a);if(a.C>0){c=a.C;d=0;while(true){if(d>=b)break a;e=c+1|0;a.sb(d,a.z1(c));d=d+1|0;c=e;}}}a.C=b;a.bb=a.hB;a.fE=(-1);return a;}
function A$H(a){return a.e1();}
function Ro(){var a=this;Ht.call(a);a.Fw=0;a.u5=0;a.nC=null;}
function Bdi(a){var b=new Ro();A5S(b,a);return b;}
function BbR(a,b,c,d,e,f){var g=new Ro();U_(g,a,b,c,d,e,f);return g;}
function A5S(a,b){U_(a,0,b,BW(b),0,b,0);}
function U_(a,b,c,d,e,f,g){Qd(a,c,e,f);a.u5=b;a.Fw=g;a.nC=d;}
function A4_(a,b){return a.nC.data[b+a.u5|0];}
function A3b(a,b,c){a.nC.data[b+a.u5|0]=c;}
function AN_(a){return 1;}
function AIQ(a){return a.nC;}
function ATl(a){return a.Fw;}
function S7(){var a=this;C.call(a);a.fq=0;a.eI=null;a.eM=null;a.gV=null;a.ik=0;a.xe=0.0;a.qb=0;a.q3=0;a.h3=0;}
function Bdt(a){var b=new S7();AQi(b,a);return b;}
function BkU(a,b){var c=new S7();Q4(c,a,b);return c;}
function AQi(a,b){Q4(a,b,0.800000011920929);}
function Q4(a,b,c){var d;J(a);if(c>0.0&&c<1.0){a.xe=c;d=G4(b,c);a.qb=d*c|0;a.h3=d-1|0;a.q3=CW(O(a.h3));a.eI=Bc(d);a.eM=Y(C,d);return;}G(W((((I()).a(B(40))).cC(c)).b()));}
function AJh(a,b){return Cp(CM(Cf(O(b),Cd(2135587861, 2654435769)),a.q3));}
function IO(a,b){var c,d,e;c=a.eI;d=a.e7(b);while(true){e=c.data[d];if(!e)return  -(d+1|0)|0;if(e==b)break;d=(d+1|0)&a.h3;}return d;}
function A0R(a,b,c){var d,e,f;if(!b){d=a.gV;a.gV=c;if(!a.ik){a.ik=1;a.fq=a.fq+1|0;}return d;}e=IO(a,b);if(e>=0){d=a.eM.data[e];a.eM.data[e]=c;return d;}f= -(e+1|0)|0;a.eI.data[f]=b;a.eM.data[f]=c;f=a.fq+1|0;a.fq=f;if(f>=a.qb)TJ(a,a.eI.data.length<<1);return null;}
function Xm(a,b,c){var d,e,f;d=a.eI;e=a.e7(b);while(true){f=d.data;if(!f[e])break;e=(e+1|0)&a.h3;}f[e]=b;a.eM.data[e]=c;}
function AT1(a,b){var c;if(!b)return !a.ik?null:a.gV;c=IO(a,b);return c<0?null:a.eM.data[c];}
function A9x(a,b){var c,d,e,f,g,h,i,j,k,l;if(!b){if(!a.ik)return null;a.ik=0;c=a.gV;a.gV=null;a.fq=a.fq-1|0;return c;}d=IO(a,b);if(d<0)return null;e=a.eI;f=a.eM;g=f.data;c=g[d];h=a.h3;i=(d+1|0)&h;while(true){j=e.data;k=j[i];if(!k)break;l=a.e7(k);if(((i-l|0)&h)>((d-l|0)&h)){j[d]=k;g[d]=g[i];d=i;}i=(i+1|0)&h;}j[d]=0;g[d]=null;a.fq=a.fq-1|0;return c;}
function ATF(a,b,c){var d,e,f,g;a:{d=a.eM;if(b===null){if(a.ik&&a.gV===null)return 1;e=d.data;f=a.eI;g=e.length-1|0;while(true){if(g<0)break a;if(f.data[g]&&e[g]===null)break;g=g+(-1)|0;}return 1;}if(c){if(b===a.gV)return 1;e=d.data;g=e.length-1|0;while(true){if(g<0)break a;if(e[g]===b)break;g=g+(-1)|0;}return 1;}if(a.ik&&b.z(a.gV))return 1;e=d.data;g=e.length-1|0;while(true){if(g<0)break a;if(b.z(e[g]))return 1;g=g+(-1)|0;}}return 0;}
function TJ(a,b){var c,d,e,f,g;a:{c=a.eI.data.length;a.qb=b*a.xe|0;a.h3=b-1|0;a.q3=CW(O(a.h3));d=a.eI;e=a.eM;a.eI=Bc(b);a.eM=Y(C,b);if(a.fq>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g)Xm(a,g,e.data[f]);f=f+1|0;}}}}
var ABA=D(Do);
function Bdq(a){var b=new ABA();AHD(b,a);return b;}
function AHD(a,b){GI(a,b,1.0,1.0);}
function AP$(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(BY(l)){if(j==d){if(h.dO(2)){j=j+(-1)|0;break a;}Bj();i=BgN;break a;}m=k[j];if(!BG(m)){i=BV(1);break a;}j=j+(-1)|0;i=F$(2);break a;}if(BG(l))i=BV(1);if(l>=256){j=j+(-1)|0;i=F$(1);break a;}k=e.data;n=f+1|0;k[f]=l<<24>>24;c=j;f=n;}j=c;}h.em(j);h.dR(f);return i;}
function EA(){var a=this;C.call(a);a.ff=Ba;a.cz=null;a.n2=0;}
function ATC(){var a=new EA();Lx(a);return a;}
function Lx(a){J(a);a.cz=Bp();a.n2=1;}
function GQ(a){if(!a.n2){a.cz.Dw(a);a.n2=1;}}
function Eh(a){return a.ff;}
function BA(a,b){var c;a:{if(Ct(a,b)){c=0;while(true){if(c>=a.cz.h)break a;if(Z((a.cz.l(c)).dc,b))return a.cz.l(c);c=c+1|0;}}}return null;}
function HL(a,b,c){return BA(a,c);}
function AKl(a){a.ff=Ba;a.cz.K();}
function Xu(a,b){a.ff=BP(a.ff,b);}
function Ep(a,b){var c;c=a.KQ(b.dc);if(c>=0)a.cz.k3(c,b);else{Xu(a,b.dc);a.cz.F(b);a.n2=0;}GQ(a);}
function X4(a,b){var c,d,e,f;c=b.data;d=c.length;e=0;while(e<d){f=c[e];Ep(a,f);e=e+1|0;}}
function F7(a,b){var c,d;c=b.fs();while(c.bC()){d=c.bz();Ep(a,d);}}
function Ct(a,b){return Dx(b,Ba)&&Z(Br(a.ff,b),b)?1:0;}
function AQB(a,b){var c;a:{if(Ct(a,b)){c=0;while(true){if(c>=a.cz.h)break a;if(Z((a.cz.l(c)).dc,b))break;c=c+1|0;}return c;}}return (-1);}
function RW(a,b,c){var d;if(b===a)return 1;if(b!==null&&Z(a.ff,b.ff)){if(!c)return 1;GQ(a);GQ(b);d=0;while(d<a.cz.h){if(!(a.cz.l(d)).zJ(b.cz.l(d)))return 0;d=d+1|0;}return 1;}return 0;}
function Q2(a,b,c){return Cp(D7(b.dc,c.dc));}
function Kb(a){return a.cz.bZ();}
function AWQ(a){var b,c,d,e,f;GQ(a);b=a.cz.h;c=CA(O(71),a.ff);d=1;e=0;while(e<b){f=Cf(a.ff,O((a.cz.l(e)).bp()));d=(d*7|0)&65535;c=CA(c,Cf(f,O(d)));e=e+1|0;}return Cp(ARo(c,M$(c,32)));}
function Wa(a){return a.Ge();}
function Vu(a,b){if(!(b instanceof EA))return 0;if(b===a)return 1;return RW(a,b,1);}
function AWx(a,b,c){return Q2(a,b,c);}
function F4(){EA.call(this);this.mu=null;}
var BkV=0;function Jn(){Jn=N(F4);A9C();}
function BkW(){var a=new F4();Kz(a);return a;}
function BkX(a){var b=new F4();Jl(b,a);return b;}
function BdM(a){var b=new F4();NG(b,a);return b;}
function BcY(a){var b=new F4();AB$(b,a);return b;}
function BkY(a,b){var c=new F4();KM(c,a,b);return c;}
function Kz(a){var b,c;Jn();b=(I()).a(B(410));c=BkV+1|0;BkV=c;Jl(a,(b.j(c)).b());}
function Jl(a,b){Jn();Lx(a);a.mu=b;}
function NG(a,b){Jn();Kz(a);X4(a,b);}
function AB$(a,b){Jn();KM(a,b.mu,b);}
function KM(a,b,c){var d,e;Jn();Jl(a,b);d=Kb(c);while(d.bC()){e=d.bz();Ep(a,e.pf());}}
function A7j(a){return BcY(a);}
function AL7(a){return Wa(a)+(3*a.mu.bp()|0)|0;}
function AH_(a,b){var c;a:{b:{if(b instanceof F4){if(b===a)break b;if(b.mu.z(a.mu)&&Vu(a,b))break b;}c=0;break a;}c=1;}return c;}
function A9C(){BkV=0;}
function D6(){var a=this;C.call(a);a.rQ=0;a.pF=0;a.hg=null;}
function N5(a){L_(a,16,2147483647);}
function L_(a,b,c){J(a);a.hg=AXL(0,b);a.rQ=c;}
function OV(a){return !a.hg.h?a.tV():a.hg.vp();}
function AGC(a,b){if(b===null)G(W(B(411)));if(a.hg.h>=a.rQ)a.Dc(b);else{a.hg.F(b);a.pF=Bf(a.pF,a.hg.h);a.zl(b);}}
function AJN(a,b){if(ARb(b,EJ))b.fW();}
function AYg(a,b){}
function UN(a,b){var c,d,e,f,g;if(b===null)G(W(B(41)));c=a.hg;d=a.rQ;e=0;f=b.h;while(e<f){g=b.l(e);if(g!==null){if(c.h>=d)a.Dc(g);else{c.F(g);a.zl(g);}}e=e+1|0;}a.pF=Bf(a.pF,c.h);}
function DY(){D6.call(this);this.n1=null;}
function Jh(a){N5(a);a.n1=Bp();}
function Wg(a){var b;b=OV(a);a.n1.F(b);return b;}
function AMA(a){UN(a,a.n1);a.n1.K();}
var TC=D(DY);
function Bdz(){var a=new TC();AEb(a);return a;}
function AEb(a){Jh(a);}
function AM7(a){return A_X();}
function A9c(a){var b;b=Wg(a);b.cu=null;b.da=null;b.cS.FY(B(101),null,0,0,0);b.kO=null;b.BS=null;return b;}
function AGF(a){return a.K1();}
function ANF(a){return a.ON();}
function AAa(){Q.call(this);this.O3=null;}
function BcJ(a){var b=new AAa();ADi(b,a);return b;}
function ADi(a,b){a.O3=b;Be(a);}
function A82(a,b){return O6(b);}
function JG(){var a=this;C.call(a);a.dl=0.0;a.dj=0.0;a.dk=0.0;a.d7=0.0;}
var BkZ=null;var Bk0=null;function APR(){APR=N(JG);AJ2();}
function AAK(a,b,c,d){var e=new JG();Yb(e,a,b,c,d);return e;}
function AWd(){var a=new JG();Rs(a);return a;}
function Yb(a,b,c,d,e){APR();J(a);a.nx(b,c,d,e);}
function Rs(a){APR();J(a);a.Cj();}
function AH0(a,b,c,d,e){a.dl=b;a.dj=c;a.dk=d;a.d7=e;return a;}
function AM2(a,b){return a.nx(b.dl,b.dj,b.dk,b.d7);}
function AYO(a,b,c){return a.J$(b.n,b.o,b.q,c);}
function A4j(a){return a.dl*a.dl+a.dj*a.dj+a.dk*a.dk+a.d7*a.d7;}
function ANm(a){var b,c;b=a.t_();if(b!==0.0&&!Dl(b,1.0)){c=FR(b);a.d7=a.d7/c;a.dl=a.dl/c;a.dj=a.dj/c;a.dk=a.dk/c;}return a;}
function A2W(a,b){var c,d,e,f,g,h,i,j,k,l;c=b.data;d=a.dl*a.dl;e=a.dl*a.dj;f=a.dl*a.dk;g=a.dl*a.d7;h=a.dj*a.dj;i=a.dj*a.dk;j=a.dj*a.d7;k=a.dk*a.dk;l=a.dk*a.d7;c[0]=1.0-2.0*(h+k);c[4]=2.0*(e-l);c[8]=2.0*(f+j);c[12]=0.0;c[1]=2.0*(e+l);c[5]=1.0-2.0*(d+k);c[9]=2.0*(i-g);c[13]=0.0;c[2]=2.0*(f-j);c[6]=2.0*(i+g);c[10]=1.0-2.0*(d+h);c[14]=0.0;c[3]=0.0;c[7]=0.0;c[11]=0.0;c[15]=1.0;}
function A$F(a){return a.nx(0.0,0.0,0.0,1.0);}
function AEf(a,b,c,d,e){return a.JZ(b,c,d,e*0.01745329238474369);}
function ARC(a,b,c,d,e){var f,g,h,i,j,k;f=TU(b,c,d);if(f===0.0)return a.Cj();g=1.0/f;h=e>=0.0?e%6.2831854820251465:6.2831854820251465- -e%6.2831854820251465;i=h/2.0;j=A8n(i);k=AEt(i);return (a.nx(g*b*j,g*c*j,g*d*j,k)).JO();}
function AJ2(){BkZ=AAK(0.0,0.0,0.0,0.0);Bk0=AAK(0.0,0.0,0.0,0.0);}
var Ec=D();
var Bk1=null;var Bk2=null;var Bk3=null;var Bk4=null;var Bk5=null;var Bk6=null;function BdQ(){BdQ=N(Ec);ANM();}
function ANM(){Hx();Bk1=Bkb;Bk2=BbU();Bk3=Bbf();Bk4=RE(B(412),1,0);Bk5=RE(B(413),0,0);Bk6=RE(B(414),0,1);}
var NB=D();
var Bk7=0;function Lb(){Lb=N(NB);A2S();}
function AAU(b,c,d,e){var f;Lb();if(!Bk7){MT(b,c,d,e);return;}a:{f=BgQ.u1();Vw();if(f!==BhL&&BgQ.u1()!==BhP){f=BgQ;if(f.u1()!==BhQ){AAA(b,c,d,e);break a;}}XG(b,c);}}
function XG(b,c){var d,e,f,g,h,i,j;Lb();d=Bid;e=c.kx();f=c.bo();g=c.bl();h=c.lZ();i=c.ld();j=c.kz();d.kA(b,0,e,f,g,0,h,i,j);Bie.w9(b);}
function AAA(b,c,d,e){var f,g,h,i,j,k,l;Lb();a:{if(!Bia.tX(B(415))){f=Bia;if(!f.tX(B(416))&&Bif===null){MT(b,c,d,e);break a;}}f=Bid;g=c.kx();h=c.bo();i=c.bl();j=c.lZ();k=c.ld();l=c.kz();f.kA(b,0,g,h,i,0,j,k,l);Bie.w9(b);}}
function MT(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;Lb();f=Bid;g=c.kx();h=c.bo();i=c.bl();j=c.lZ();k=c.ld();l=c.kz();f.kA(b,0,g,h,i,0,j,k,l);if(Bie===null&&d!=e)G(U(B(417)));m=c.bo()/2|0;n=c.bl()/2|0;o=1;while(m>0&&n>0){p=O0(m,n,c.f9());Gv();p.D4(Bjz);p.Lp(c,0,0,c.bo(),c.bl(),0,0,m,n);if(o>1)c.iz();f=Bid;j=p.kx();k=p.bo();q=p.bl();g=p.lZ();h=p.ld();l=p.kz();f.kA(b,o,j,k,q,0,g,h,l);m=p.bo()/2|0;n=p.bl()/2|0;o=o+1|0;c=p;}}
function A2S(){Bk7=1;}
function RH(){Q.call(this);this.Hl=null;}
function BbL(a){var b=new RH();A0a(b,a);return b;}
function A0a(a,b){a.Hl=b;Be(a);}
function AZ5(a,b){return 0;}
var G5=D();
var Bk8=null;function R2(a){J(a);}
function El(){return Bk8;}
function Y3(){C3.call(this);this.NS=null;}
function BfU(a){var b=new Y3();AEX(b,a);return b;}
function AEX(a,b){FX(a);a.NS=b;}
var GJ=D(CT);
function Py(a,b,c,d){FJ(a,b);a.C=c;a.bb=d;}
function AIs(b,c,d){return BeS(0,b.data.length,b,c,c+d|0,0);}
function A3N(b){return AIs(b,0,b.data.length);}
function A8o(a,b,c,d){var e,f,g,h,i;if(a.b_())G(C8());if(Bb(a)<d)G(F0());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bg((((((I()).a(B(418))).j(g)).a(B(402))).j(f)).b()));if(d<0)G(Bg(((((I()).a(B(403))).j(d)).a(B(404))).b()));h=a.C;i=0;while(i<d){g=h+1|0;f=c+1|0;a.qU(h,e[c]);i=i+1|0;h=g;c=f;}a.C=a.C+d|0;return a;}}e=b.data;G(Bg(((((((I()).a(B(405))).j(c)).a(B(64))).j(e.length)).a(B(24))).b()));}
function Un(a){FZ(a);return a;}
function AB7(a){G8(a);return a;}
function APO(a,b){IZ(a,b);return a;}
function A7p(a,b){GM(a,b);return a;}
function A8v(a){return AB7(a);}
function ATJ(a){return Un(a);}
function A3t(a,b){return a.H5(b);}
function AVv(a,b){return a.HM(b);}
var Fh=D(GJ);
function Lq(a,b,c,d){Py(a,b,c,d);}
function A6u(a,b){if(b>=0&&b<a.bb)return a.vk(b);G(Bg(((((((I()).a(B(352))).j(b)).a(B(64))).j(a.bb)).a(B(24))).b()));}
function A2s(a){return a.e1();}
function Fr(){var a=this;Fh.call(a);a.fH=null;a.wH=0;a.fC=0;}
function Ls(a,b,c,d,e,f,g){Lq(a,c,e,f);a.fC=b;a.fH=d;a.wH=g;}
function A1c(a){return a.wH;}
var VO=D(Fr);
function BfP(a,b,c,d,e,f){var g=new VO();A29(g,a,b,c,d,e,f);return g;}
function A29(a,b,c,d,e,f,g){Ls(a,b,c,d,e,f,g);}
function AYn(a,b){var c,d,e,f;c=a.fH.A.data;d=a.fC;e=b*2|0;f=c[d+e|0]&255|(a.fH.A.data[(a.fC+e|0)+1|0]&255)<<8;return f<<16>>16;}
function AXI(a,b,c){var d,e,f;d=a.fH.A.data;e=a.fC;f=b*2|0;d[e+f|0]=c<<24>>24;a.fH.A.data[(a.fC+f|0)+1|0]=c>>8<<24>>24;}
function YF(){Q.call(this);this.Iw=null;}
function Baf(a){var b=new YF();A0b(b,a);return b;}
function A0b(a,b){a.Iw=b;Be(a);}
function APZ(a,b){return Q9(b);}
var DX=D(CT);
function AAw(a,b,c,d){FJ(a,b);a.C=c;a.bb=d;}
function A9Z(b,c,d){return Ba7(0,b.data.length,b,c,c+d|0,0);}
function AVo(b){return A9Z(b,0,b.data.length);}
function ANy(a,b,c,d){var e,f,g,h,i;if(a.b_())G(C8());if(Bb(a)<d)G(F0());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bg((((((I()).a(B(419))).j(g)).a(B(402))).j(f)).b()));if(d<0)G(Bg(((((I()).a(B(403))).j(d)).a(B(404))).b()));h=a.C;i=0;while(i<d){g=h+1|0;f=c+1|0;a.nh(h,e[c]);i=i+1|0;h=g;c=f;}a.C=a.C+d|0;return a;}}e=b.data;G(Bg(((((((I()).a(B(405))).j(c)).a(B(64))).j(e.length)).a(B(24))).b()));}
function R4(a){FZ(a);return a;}
function Wk(a){G8(a);return a;}
function AJg(a,b){IZ(a,b);return a;}
function A4M(a,b){GM(a,b);return a;}
function AJy(a){return Wk(a);}
function ATY(a){return R4(a);}
function AOS(a,b){return a.OT(b);}
function AS7(a,b){return a.ME(b);}
var Fu=D(DX);
function K3(a,b,c,d){AAw(a,b,c,d);}
function AK4(a,b){if(b>=0&&b<a.bb)return a.vl(b);G(Bg(((((((I()).a(B(352))).j(b)).a(B(64))).j(a.bb)).a(B(24))).b()));}
function A$D(a,b,c){if(a.b_())G(C8());if(b>=0&&b<a.bb){a.nh(b,c);return a;}G(Bg(((((((I()).a(B(352))).j(b)).a(B(64))).j(a.bb)).a(B(24))).b()));}
function AYJ(a){return a.e1();}
function ER(){var a=this;Fu.call(a);a.cv=null;a.Fj=0;a.cj=0;}
function LO(a,b,c,d,e,f,g){K3(a,c,e,f);a.cj=b;a.cv=d;a.Fj=g;}
function A5w(a){return a.Fj;}
function ABJ(){Bt.call(this);this.l_=0;}
function Bbg(a){var b=new ABJ();A0o(b,a);return b;}
function A0o(a,b){Co(a);a.l_=b;}
function ALy(a,b,c,d){var e;e=!d.jB()?c.i():d.J();if(b>=e){d.by(a.l_,0);return a.k.e(b,c,d);}if((e-b|0)==1&&c.f(b)==10){d.by(a.l_,1);return a.k.e(b+1|0,c,d);}return (-1);}
function A0k(a,b){var c;c=!b.ev(a.l_)?0:1;b.by(a.l_,(-1));return c;}
function AMj(a){return B(420);}
function Us(){BJ.call(this);this.sW=0;}
function A6v(a){var b=new Us();A4n(b,a);return b;}
function A4n(a,b){C2(a);a.sW=Dr(DC(b));}
function AUu(a,b,c){return a.sW!=Dr(DC(c.f(b)))?(-1):1;}
function A5l(a){return (((I()).a(B(421))).T(a.sW)).b();}
function Hq(){BH.call(this);this.Eb=null;}
var Bk9=Ba;function A3J(){A3J=N(Hq);A6c();}
function A6c(){Bk9=BQ(B(422));}
function E5(){var a=this;C.call(a);a.P=null;a.h=0;a.gQ=0;a.qq=null;}
function Bp(){var a=new E5();AFN(a);return a;}
function DM(a){var b=new E5();Op(b,a);return b;}
function AXL(a,b){var c=new E5();Kj(c,a,b);return c;}
function Bk$(a,b,c){var d=new E5();Vm(d,a,b,c);return d;}
function Bfh(a){var b=new E5();A76(b,a);return b;}
function Bk_(a,b,c,d){var e=new E5();Rq(e,a,b,c,d);return e;}
function AFN(a){Kj(a,1,16);}
function Op(a,b){Kj(a,1,b);}
function Kj(a,b,c){J(a);a.gQ=b;a.P=Y(C,c);}
function Vm(a,b,c,d){J(a);a.gQ=b;a.P=EW(d,c);}
function A76(a,b){Rq(a,1,b,0,b.data.length);}
function Rq(a,b,c,d,e){Vm(a,b,e,(Ck(c)).gq());a.h=e;X(c,d,a.P,0,a.h);}
function AP1(a,b){var c,d,e;c=a.P;d=c.data;if(a.h==d.length)c=a.j_(Bf(8,a.h*1.75|0));d=c.data;e=a.h;a.h=e+1|0;d[e]=b;}
function AJ4(a,b){a.rK(b.P,0,b.h);}
function ADR(a,b,c,d){if((c+d|0)<=b.h){a.rK(b.P,c,d);return;}G(W((((((((I()).a(B(423))).j(c)).a(B(424))).j(d)).a(B(425))).j(b.h)).b()));}
function AJj(a,b){a.rK(b,0,b.data.length);}
function AFA(a,b,c,d){var e,f,g;e=a.P;f=e.data;g=a.h+d|0;if(g>f.length)e=a.j_(Bf(Bf(8,g),a.h*1.75|0));X(b,c,e,a.h,d);a.h=g;}
function A9N(a,b){if(b<a.h)return a.P.data[b];G(Bg((((((I()).a(B(426))).j(b)).a(B(427))).j(a.h)).b()));}
function APJ(a,b,c){if(b<a.h){a.P.data[b]=c;return;}G(Bg((((((I()).a(B(426))).j(b)).a(B(427))).j(a.h)).b()));}
function A3C(a,b,c){var d,e;if(b>a.h)G(Bg((((((I()).a(B(428))).j(b)).a(B(429))).j(a.h)).b()));d=a.P;e=d.data;if(a.h==e.length)d=a.j_(Bf(8,a.h*1.75|0));if(!a.gQ){e=d.data;e[a.h]=e[b];}else X(d,b,d,b+1|0,a.h-b|0);e=d.data;a.h=a.h+1|0;e[b]=c;}
function AZJ(a,b,c){var d,e,f,g;a:{d=a.P;e=a.h-1|0;if(!(!c&&b!==null)){while(true){if(e<0)break a;f=d.data;g=e+(-1)|0;if(f[e]===b)break;e=g;}return 1;}while(true){if(e<0)break a;f=d.data;g=e+(-1)|0;if(b.z(f[e]))return 1;e=g;}}return 0;}
function AGU(a,b,c){var d,e,f;a:{d=a.P;if(!c&&b!==null){e=0;f=a.h;while(true){if(e>=f)break a;if(b.z(d.data[e]))break;e=e+1|0;}return e;}e=0;f=a.h;while(true){if(e>=f)break a;if(d.data[e]===b)break;e=e+1|0;}return e;}return (-1);}
function AGV(a,b,c){var d,e,f;a:{d=a.P;if(!(!c&&b!==null)){e=0;f=a.h;while(e<f){if(d.data[e]===b){a.st(e);return 1;}e=e+1|0;}}else{e=0;f=a.h;while(true){if(e>=f)break a;if(b.z(d.data[e])){a.st(e);return 1;}e=e+1|0;}}}return 0;}
function AO$(a,b){var c,d,e;if(b>=a.h)G(Bg((((((I()).a(B(426))).j(b)).a(B(427))).j(a.h)).b()));c=a.P;d=c.data;e=d[b];a.h=a.h-1|0;if(!a.gQ)d[b]=d[a.h];else X(c,b+1|0,c,b,a.h-b|0);d[a.h]=null;return e;}
function AHq(a,b,c){var d,e,f,g,h,i;d=a.h;if(c>=d)G(Bg((((((I()).a(B(430))).j(c)).a(B(427))).j(a.h)).b()));if(b>c)G(Bg((((((I()).a(B(431))).j(b)).a(B(429))).j(c)).b()));e=a.P;f=(c-b|0)+1|0;g=d-f|0;if(a.gQ){h=b+f|0;X(e,h,e,b,d-h|0);}else{i=Bf(g,c+1|0);X(e,i,e,b,d-i|0);}i=g;while(i<d){e.data[i]=null;i=i+1|0;}a.h=g;}
function AVx(a){var b;if(!a.h)G(DS(B(432)));a.h=a.h-1|0;b=a.P.data[a.h];a.P.data[a.h]=null;return b;}
function ATy(a){if(!a.h)G(DS(B(432)));return a.P.data[a.h-1|0];}
function A_x(a){if(!a.h)G(DS(B(432)));return a.P.data[0];}
function AZB(a){Hl(a.P,0,a.h,null);a.h=0;}
function ARs(a,b){var c;if(b<0)G(W((((I()).a(B(433))).j(b)).b()));c=a.h+b|0;if(c>a.P.data.length)a.j_(Bf(Bf(8,c),a.h*1.75|0));return a.P;}
function AYZ(a,b){var c,d,e;c=a.P;d=EW((Ck(c)).gq(),b);e=d.data;X(c,0,d,0,Bq(a.h,e.length));a.P=d;return d;}
function ATD(a,b){(AIi()).Pa(a.P,b,0,a.h);}
function AKA(a){if(Bla)return K6(a,1);if(a.qq===null)a.qq=BcQ(a);return a.qq.bZ();}
function AD8(a,b){var c;if(b<0)G(W((((I()).a(B(434))).j(b)).b()));if(a.h<=b)return;c=b;while(c<a.h){a.P.data[c]=null;c=c+1|0;}a.h=b;}
function AWy(a){var b,c,d,e,f,g;if(!a.gQ)return MN(a);b=a.P;c=1;d=0;e=a.h;while(d<e){f=b.data;c=c*31|0;g=f[d];if(g!==null)c=c+g.bp()|0;d=d+1|0;}return c;}
function ALP(a,b){var c,d,e,f,g,h,i,j;if(b===a)return 1;if(!a.gQ)return 0;if(!(b instanceof E5))return 0;c=b;if(!c.gQ)return 0;d=a.h;if(d!=c.h)return 0;e=a.P;f=c.P;g=0;a:{while(g<d){b:{h=f.data;i=e.data[g];j=h[g];if(i!==null){if(i.z(j))break b;else break a;}if(j!==null)break a;}g=g+1|0;}return 1;}return 0;}
function ARt(a){var b,c,d,e;if(!a.h)return B(435);b=a.P;c=b.data;d=ATm(32);d.lx(91);d.yq(c[0]);e=1;while(e<a.h){d.CK(B(436));d.yq(c[e]);e=e+1|0;}d.lx(93);return d.b();}
function AEz(b){return Bfh(b);}
function AFT(a){return a.bZ();}
var QE=D(C0);
function Bbf(){var a=new QE();AYj(a);return a;}
function AYj(a){GH(a,B(437),Y(BN,0));}
function A$C(a){return Bac(a);}
function A7M(a){return Bdq(a);}
function EC(){Bx.call(this);this.Ah=0;}
var Blb=null;var Bj3=null;var Blc=null;var Bld=null;function AUD(){AUD=N(EC);A1l();}
function X_(a,b,c){var d=new EC();Zl(d,a,b,c);return d;}
function Zl(a,b,c,d){AUD();Cw(a,b,c);a.Ah=d;}
function G9(a){return a.Ah;}
function A1l(){Blb=X_(B(438),0,33648);Bj3=X_(B(439),1,33071);Blc=X_(B(440),2,10497);Bld=H(EC,[Blb,Bj3,Blc]);}
function K8(){Cy.call(this);this.AP=0;}
function Ble(a){var b=new K8();UP(b,a);return b;}
function UP(a,b){Et(a,b);}
function AVK(a,b,c,d){var e;e=a.ka();d.by(e,b-d.ev(e)|0);a.AP=b;return b;}
function AFP(a){return a.AP;}
function AQJ(a){return B(441);}
function A5I(a,b){return 0;}
function Je(){BB.call(this);this.hp=0;}
function AN7(a){var b=new Je();AFV(b,a);return b;}
function AFV(a,b){CP(a);a.hp=b;}
function A5u(a,b){a.k=b;}
function AX2(a,b,c,d){var e,f,g;e=b+1|0;if(e>d.J()){d.d5=1;return (-1);}f=c.f(b);if(b>d.dI()){g=c.f(b-1|0);if(BY(g))return (-1);}if(a.hp!=f)return (-1);return a.k.e(e,c,d);}
function AJR(a,b,c,d){var e,f,g,h,i;if(!(c instanceof BN))return F3(a,b,c,d);e=c;f=d.dI();g=d.J();while(true){if(b>=g)return (-1);h=e.eH(a.hp,b);if(h<0)return (-1);if(h>f&&BY(e.f(h-1|0))){b=h+1|0;continue;}i=a.k;b=h+1|0;if(i.e(b,c,d)>=0)break;}return h;}
function AYU(a,b,c,d,e){var f,g,h;if(!(d instanceof BN))return Gb(a,b,c,d,e);f=e.dI();g=d;a:{while(true){if(c<b)return (-1);h=g.mJ(a.hp,c);if(h<0)break a;if(h<b)break a;if(h>f&&BY(g.f(h-1|0))){c=h+(-2)|0;continue;}if(a.k.e(h+1|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function AQ9(a){return (((I()).a(B(101))).T(a.hp)).b();}
function ADX(a,b){if(b instanceof DA)return 0;if(b instanceof Dy)return 0;if(b instanceof C4)return 0;if(b instanceof Dw)return 0;if(b instanceof Jj)return 0;if(!(b instanceof Je))return 1;return b.hp!=a.hp?0:1;}
function ARe(a,b){return 1;}
var ACM=D();
var MC=D(0);
function Xd(){var a=this;C.call(a);a.ut=null;a.sr=null;a.sq=null;}
function A_T(){var a=new Xd();AS0(a);return a;}
function AS0(a){J(a);a.sr=S();a.sq=S();}
function A0y(a,b,c){a.ut=b;c.Dw(a);}
function L3(a,b,c,d){if(c.yo())b.ux(d);else if(b.MS())(d.M(c)).kM(b);else (b.ux(d)).fB(c);return d;}
function AYz(a,b,c){var d,e,f,g,h,i;d=b.da;GP();e=Ct(d,BjF)&&(BA(b.da,BjF)).Fo?1:0;f=Ct(c.da,BjF)&&(BA(c.da,BjF)).Fo?1:0;if(e!=f)return !e?(-1):1;L3(a,b.dy,b.cS.f2,a.sr);L3(a,c.dy,c.cS.f2,a.sq);g=(1000.0*a.ut.cp.BZ(a.sr)|0)-(1000.0*a.ut.cp.BZ(a.sq)|0)|0;h=B9(g,0.0);i=h<0?(-1):h<=0?0:1;if(e)i= -i|0;return i;}
function A7u(a,b,c){return a.IZ(b,c);}
var ACf=D(D8);
function AZP(a,b){var c=new ACf();AHl(c,a,b);return c;}
function AHl(a,b,c){SU(a,b,c);}
function Es(){var a=this;CH.call(a);a.fZ=null;a.ea=0;}
function Blf(a,b,c,d,e){var f=new Es();Iv(f,a,b,c,d,e);return f;}
function Iv(a,b,c,d,e,f){Fd(a,c,d,e);a.fZ=b;a.ea=f;}
function A_n(a,b,c,d){var e,f,g,h;e=d.zj(a.ea);if(!a.Y.ba(d))return a.k.e(b,c,d);if(e>=a.fZ.iJ())return a.k.e(b,c,d);f=a.ea;g=e+1|0;d.fO(f,g);h=a.Y.e(b,c,d);if(h>=0){d.fO(a.ea,0);return h;}f=a.ea;g=g+(-1)|0;d.fO(f,g);if(g>=a.fZ.jd())return a.k.e(b,c,d);d.fO(a.ea,0);return (-1);}
function ASs(a){return a.fZ.b();}
var Lw=D(Es);
function Blg(a,b,c,d,e){var f=new Lw();So(f,a,b,c,d,e);return f;}
function So(a,b,c,d,e,f){Iv(a,b,c,d,e,f);}
function AVO(a,b,c,d){var e,f;e=d.zj(a.ea);if(!a.Y.ba(d))return a.k.e(b,c,d);if(e>=a.fZ.iJ()){d.fO(a.ea,0);return a.k.e(b,c,d);}if(e<a.fZ.jd()){d.fO(a.ea,e+1|0);f=a.Y.e(b,c,d);}else{f=a.k.e(b,c,d);if(f>=0){d.fO(a.ea,0);return f;}d.fO(a.ea,e+1|0);f=a.Y.e(b,c,d);}return f;}
var U1=D();
function Sl(b){a:{switch(b){case 8:break;case 9:return 61;case 10:case 11:case 12:case 14:case 15:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 41:case 42:case 43:case 44:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 93:case 94:case 95:case 108:case 124:case 125:case 126:case 127:case 128:case 129:case 130:case 131:case 132:case 133:case 134:case 135:case 136:case 137:case 138:case 139:case 140:case 141:case 142:case 143:case 146:case 147:case 148:case 149:case 150:case 151:case 152:case 153:case 154:case 155:case 156:case 157:case 158:case 159:case 160:case 161:case 162:case 163:case 164:case 165:case 166:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 177:case 178:case 179:case 180:case 181:case 182:case 183:case 184:case 185:case 193:case 194:case 195:case 196:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 207:case 208:case 209:case 210:case 211:case 212:case 213:case 214:case 215:case 216:case 217:case 218:break a;case 13:return 66;case 16:return 59;case 17:return 129;case 18:return 57;case 19:return 0;case 20:return 0;case 27:return 111;case 32:return 62;case 33:return 92;case 34:return 93;case 35:return 123;case 36:return 3;case 37:return 21;case 38:return 19;case 39:return 22;case 40:return 20;case 45:return 124;case 46:return 112;case 48:return 7;case 49:return 8;case 50:return 9;case 51:return 10;case 52:return 11;case 53:return 12;case 54:return 13;case 55:return 14;case 56:return 15;case 57:return 16;case 65:return 29;case 66:return 30;case 67:return 31;case 68:return 32;case 69:return 33;case 70:return 34;case 71:return 35;case 72:return 36;case 73:return 37;case 74:return 38;case 75:return 39;case 76:return 40;case 77:return 41;case 78:return 42;case 79:return 43;case 80:return 44;case 81:return 45;case 82:return 46;case 83:return 47;case 84:return 48;case 85:return 49;case 86:return 50;case 87:return 51;case 88:return 52;case 89:return 53;case 90:return 54;case 91:return 0;case 92:return 0;case 96:return 144;case 97:return 145;case 98:return 146;case 99:return 147;case 100:return 148;case 101:return 149;case 102:return 150;case 103:return 151;case 104:return 152;case 105:return 153;case 106:return 0;case 107:return 81;case 109:return 69;case 110:return 56;case 111:return 0;case 112:return 131;case 113:return 132;case 114:return 133;case 115:return 134;case 116:return 135;case 117:return 136;case 118:return 137;case 119:return 138;case 120:return 139;case 121:return 140;case 122:return 141;case 123:return 142;case 144:return 78;case 145:return 0;case 186:return 74;case 187:return 70;case 188:return 55;case 189:return 69;case 190:return 56;case 191:return 76;case 192:return 0;case 219:return 71;case 220:return 73;case 221:return 72;case 222:return 75;default:break a;}return 67;}return 0;}
function Js(b){if(b==1)return 0;if(b==2)return 1;if(b!=4)return 0;return 2;}
var MM=D(0);
var Ml=D(0);
function IG(){Jb.call(this);this.gR=0;}
function Y9(a){Ul(a);}
function AIe(a){return Bdh(a);}
var Ln=D(0);
function Wc(){var a=this;IG.call(a);a.cR=null;a.c7=0;}
function SF(){var a=new Wc();AIH(a);return a;}
function Blh(a){var b=new Wc();OR(b,a);return b;}
function AIH(a){OR(a,10);}
function OR(a,b){Y9(a);a.cR=Y(C,b);}
function AVQ(a,b){var c;if(a.cR.data.length<b){c=a.cR.data.length>=1073741823?2147483647:Bf(b,Bf(a.cR.data.length*2|0,5));a.cR=I8(a.cR,c);}}
function A6O(a,b){JL(a,b);return a.cR.data[b];}
function A5x(a){return a.c7;}
function ASo(a,b){var c,d;a.gY(a.c7+1|0);c=a.cR.data;d=a.c7;a.c7=d+1|0;c[d]=b;a.gR=a.gR+1|0;return 1;}
function A1X(a,b,c){var d;Ql(a,b);a.gY(a.c7+1|0);d=a.c7;while(d>b){a.cR.data[d]=a.cR.data[d-1|0];d=d+(-1)|0;}a.cR.data[b]=c;a.c7=a.c7+1|0;a.gR=a.gR+1|0;}
function AP3(a,b){var c,d,e,f;JL(a,b);c=a.cR.data[b];a.c7=a.c7-1|0;while(b<a.c7){d=a.cR.data;e=a.cR.data;f=b+1|0;d[b]=e[f];b=f;}a.cR.data[a.c7]=null;a.gR=a.gR+1|0;return c;}
function JL(a,b){if(b>=0&&b<a.c7)return;G(C9());}
function Ql(a,b){if(b>=0&&b<=a.c7)return;G(C9());}
var Yz=D(Bm);
function AQh(){var a=new Yz();A3c(a);return a;}
function A3c(a){Cx(a);}
function Eg(){CF.call(this);this.gh=null;}
function BdO(a,b,c,d){var e=new Eg();K0(e,a,b,c,d);return e;}
function K0(a,b,c,d,e){E4(a,c,d,e);a.gh=b;}
function AWn(a,b,c,d){var e,f,g,h;e=a.gh.jd();f=a.gh.iJ();g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.bv.cg()|0)>d.J())break a;h=a.bv.bH(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.k.e(b,c,d);if(h>=0)break;b=b-a.bv.cg()|0;g=g+(-1)|0;}return h;}if((b+a.bv.cg()|0)>d.J()){d.d5=1;return (-1);}h=a.bv.bH(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function AWZ(a){return a.gh.b();}
function C4(){var a=this;BB.call(a);a.d1=null;a.rF=0;}
function A2f(a){var b=new C4();AAs(b,a);return b;}
function AAs(a,b){CP(a);a.d1=b.mg();a.rF=b.bD;}
function AZs(a,b,c,d){var e,f,g,h,i,j;e=d.J();if(b<e){f=b+1|0;g=c.f(b);if(a.p(g)){h=a.k.e(f,c,d);if(h>0)return h;}if(f<e){i=f+1|0;j=c.f(f);if(GA(g,j)&&a.p(Dh(g,j)))return a.k.e(i,c,d);}}return (-1);}
function A98(a){return ((((I()).a(B(55))).a(!a.rF?B(56):B(57))).a(a.d1.b())).b();}
function AII(a,b){return a.d1.p(b);}
function AEF(a,b){if(b instanceof Dw)return IY(a.d1,b.sS());if(b instanceof DA)return IY(a.d1,b.ps());if(b instanceof C4)return GV(a.d1,b.d1);if(!(b instanceof Dy))return 1;return GV(a.d1,b.uJ());}
function ALc(a){return a.d1;}
function A72(a,b){a.k=b;}
function AIj(a,b){return 1;}
var Yv=D(FP);
function Bau(a,b,c){var d=new Yv();AOP(d,a,b,c);return d;}
function AOP(a,b,c,d){Mj(a,b,c,d);}
function AFR(a,b,c,d){var e;if(!a.Y.ba(d))return a.k.e(b,c,d);e=a.k.e(b,c,d);if(e<0)e=a.Y.e(b,c,d);return e;}
var Qm=D();
function AHR(b,c){var d,e,f;a:{d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}e=b>>>6;f=d|e&8;f=f|b<<2&16;e=f|e&32;e=e|b>>>8&64;e=e|b>>>5&128;e=e|b&256;e=e|b<<8&512;e=e|b<<10&1024;e=e|b<<1&2048;return e;}
function BN(){var a=this;C.call(a);a.S=null;a.mP=0;}
var Bli=null;function Em(){Em=N(BN);ART();}
function Mf(a){var b=new BN();IA(b,a);return b;}
function F1(a,b,c){var d=new BN();OF(d,a,b,c);return d;}
function Blj(a,b,c,d){var e=new BN();J1(e,a,b,c,d);return e;}
function Blk(a,b,c,d){var e=new BN();KL(e,a,b,c,d);return e;}
function Bbl(a,b){var c=new BN();TH(c,a,b);return c;}
function BfO(a,b,c){var d=new BN();OJ(d,a,b,c);return d;}
function IA(a,b){var c,d,e;Em();c=b.data;J(a);d=c.length;a.S=BW(d);e=0;while(e<d){a.S.data[e]=c[e];e=e+1|0;}}
function OF(a,b,c,d){var e,f;Em();J(a);a.S=BW(d);e=0;while(e<d){f=b.data;a.S.data[e]=f[e+c|0];e=e+1|0;}}
function J1(a,b,c,d,e){Em();KL(a,b,c,d,OY(e.b()));}
function KL(a,b,c,d,e){Em();J(a);S8(a,b,c,d,e);}
function TH(a,b,c){Em();J1(a,b,0,b.data.length,c);}
function OJ(a,b,c,d){var e,f,g,h,i,j,k;Em();J(a);a.S=BW(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.S.data;j=e+1|0;g[e]=i&65535;}else{g=a.S.data;k=e+1|0;g[e]=FB(i);g=a.S.data;j=k+1|0;g[k]=Fi(i);}f=f+1|0;c=h;e=j;}if(e<a.S.data.length)a.S=JX(a.S,e);}
function S8(a,b,c,d,e){var f;f=ZI(e,Y_(b,c,d));if(WH(f)&&!B8(f)&&BD(f)==CV(f))a.S=NK(f);else{a.S=BW(Bb(f));f.Mr(a.S);}}
function AWj(a,b){if(b>=0&&b<a.S.data.length)return a.S.data[b];G(Ki());}
function A0j(a){return a.S.data.length;}
function A18(a){return a.S.data.length?0:1;}
function AH4(a,b,c,d,e){var f,g,h;if(b>=0&&b<=c&&c<=a.i()&&e>=0){f=d.data;if((e+(c-b|0)|0)<=f.length){while(b<c){g=e+1|0;h=b+1|0;f[e]=a.f(b);e=g;b=h;}return;}}G(C9());}
function A9q(a,b){var c,d,e,f,g;if(a===b)return 0;c=Bq(a.i(),b.i());d=0;while(true){if(d>=c)return a.i()-b.i()|0;e=a.f(d);f=b.f(d);g=e-f|0;if(g)break;d=d+1|0;}return g;}
function A5X(a,b,c){var d,e,f;if((c+b.i()|0)>a.i())return 0;d=0;while(d<b.i()){e=b.f(d);f=c+1|0;if(e!=a.f(c))return 0;d=d+1|0;c=f;}return 1;}
function A2b(a,b){if(a===b)return 1;return a.zM(b,0);}
function AZq(a,b){var c,d,e,f;if(a===b)return 1;if(b.i()>a.i())return 0;c=0;d=a.i()-b.i()|0;while(d<a.i()){e=a.f(d);f=c+1|0;if(e!=b.f(c))return 0;d=d+1|0;c=f;}return 1;}
function A4U(a,b,c){var d,e,f,g;d=Bf(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.S.data.length)return (-1);if(a.S.data[d]==e)break;d=d+1|0;}return d;}f=FB(b);g=Fi(b);while(true){if(d>=(a.S.data.length-1|0))return (-1);if(a.S.data[d]==f&&a.S.data[d+1|0]==g)break;d=d+1|0;}return d;}
function AZp(a,b){return a.eH(b,0);}
function AWr(a,b,c){var d,e,f,g,h,i;d=Bq(c,a.i()-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.S.data[d]==e)break;d=d+(-1)|0;}return d;}f=FB(b);g=Fi(b);while(true){if(d<1)return (-1);if(a.S.data[d]==g){h=a.S.data;i=d-1|0;if(h[i]==f)break;}d=d+(-1)|0;}return i;}
function AKu(a,b){return a.mJ(b,a.i()-1|0);}
function AY6(a,b,c){var d,e,f;d=Bf(0,c);e=a.i()-b.i()|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=b.i())break a;if(a.f(d+f|0)!=b.f(f))break;f=f+1|0;}d=d+1|0;}return d;}
function A5s(a,b){return a.uv(b,0);}
function AHU(a,b,c){var d,e;d=Bq(c,a.i()-b.i()|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.i())break a;if(a.f(d+e|0)!=b.f(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AJ8(a,b){return a.Ab(b,a.i());}
function ADM(a,b,c){if(b>c)G(C9());return F1(a.S,b,c-b|0);}
function AKx(a,b){return a.ce(b,a.i());}
function AIc(a,b,c){return a.ce(b,c);}
function AUj(a,b){var c,d,e;c=a.i()-b.i()|0;d=0;while(d<=c){e=0;while(true){if(e>=b.i())return 1;if(a.f(d+e|0)!=b.f(e))break;e=e+1|0;}d=d+1|0;}return 0;}
function A6N(a,b,c){var d,e,f,g;d=I();e=a.i()-b.i()|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=b.i()){d.dD(c);f=f+(b.i()-1|0)|0;break a;}if(a.f(f+g|0)!=b.f(g))break;g=g+1|0;}d.T(a.f(f));}f=f+1|0;}d.dD(a.ei(f));return d.b();}
function A2w(a){var b,c;b=0;c=a.i()-1|0;a:{while(b<=c){if(a.f(b)>32)break a;b=b+1|0;}}while(b<=c&&a.f(c)<=32){c=c+(-1)|0;}return a.ce(b,c+1|0);}
function AFS(a){return a;}
function A2a(a){var b,c,d;b=BW(a.S.data.length);c=0;while(true){d=b.data;if(c>=d.length)break;d[c]=a.S.data[c];c=c+1|0;}return b;}
function Zn(b){var c,d;Em();c=new BN;d=BW(1);d.data[0]=b;IA(c,d);return c;}
function Ji(b){Em();return ((I()).j(b)).b();}
function ASi(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BN))return 0;c=b;if(c.i()!=a.i())return 0;d=0;while(d<c.i()){if(a.f(d)!=c.f(d))return 0;d=d+1|0;}return 1;}
function A9M(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(a.i()!=b.i())return 0;c=0;while(c<a.i()){if(Dr(a.f(c))!=Dr(b.f(c)))return 0;c=c+1|0;}return 1;}
function ANv(a,b){return a.AW(OY(b.b()));}
function ANr(a){Hx();return a.AW(Bkb);}
function A4X(a,b){var c,d;c=UH(b,La(a.S));if(c.Cq()&&!B8(c)&&BD(c)==CV(c))return HI(c);d=Cj(Bb(c));c.IR(d);return d;}
function A44(a){var b,c,d,e;a:{if(!a.mP){b=a.S.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.mP=(31*a.mP|0)+e|0;d=d+1|0;}}}return a.mP;}
function A4h(a){var b,c,d,e,f,g,h,i;if(a.bN())return a;b=Bc(a.S.data.length);c=0;d=0;while(d<a.S.data.length){a:{if(d!=(a.S.data.length-1|0)&&BY(a.S.data[d])){e=a.S.data;f=d+1|0;g=e[f];if(BG(g)){h=b.data;i=c+1|0;h[c]=En(Dh(a.S.data[d],a.S.data[f]));d=f;break a;}}h=b.data;i=c+1|0;h[c]=DC(a.S.data[d]);}d=d+1|0;c=i;}return BfO(b,0,c);}
function A2M(a,b){return VU(GK(b),a.b());}
function ASb(a,b,c){return Mq(GK(b),a.b(),c);}
function AIm(a,b,c){return ACn(GN(GK(b),a.b()),c);}
function ART(){Bli=Bd8();}
var Ng=D(DT);
var Bll=null;function A3g(){A3g=N(Ng);AUh();}
function BdD(){var a=new Ng();SY(a);return a;}
function SY(a){A3g();Ha(a);}
function A2X(a,b){ATx(b);}
function AUh(){Bll=BdD();}
var LM=D();
var Blm=null;function Bej(){Bej=N(LM);AQg();}
function Vl(){Bej();return Blm;}
function AQg(){var b,c,d,e,f;Blm=C6();b=Y(C0,6);c=b.data;BdQ();c[0]=Bk1;c[1]=Bk2;c[2]=Bk3;c[3]=Bk4;c[4]=Bk5;c[5]=Bk6;d=c.length;e=0;while(e<d){f=c[e];Blm.x(Z9(f),f);e=e+1|0;}}
var D_=D(0);
var MP=D(0);
function Yw(){var a=this;Fy.call(a);a.zR=0;a.uF=0;a.ti=null;}
function BeP(a,b,c,d,e,f){var g=new Yw();AJY(g,a,b,c,d,e,f);return g;}
function AJY(a,b,c,d,e,f,g){MG(a,c,e,f);a.uF=b;a.zR=g;a.ti=d;}
function A41(a,b){return a.ti.data[b+a.uF|0];}
function A3e(a,b,c){a.ti.data[b+a.uF|0]=c;}
function ADb(a){return a.zR;}
var Qn=D(Do);
function Bb_(a){var b=new Qn();AQM(b,a);return b;}
function AQM(a,b){GI(a,b,2.0,4.0);}
function ALL(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(h.ef(2))break a;Bj();i=BgM;break a;}k=e.data;n=f+1|0;k[f]=(192|l>>6)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else if(!Jz(l)){if((f+3|0)>g){j=j+(-1)|0;if(h.ef(3))break a;Bj();i=BgM;break a;}k=e.data;o=f+1|0;k[f]=(224|l>>12)<<24>>24;n=o+1|0;k[o]=(128|l>>6&63)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else{if
(!BY(l)){i=BV(1);break a;}if(j>=d){if(h.tI())break a;Bj();i=BgN;break a;}n=j+1|0;p=k[j];if(!BG(p)){j=n+(-2)|0;i=BV(1);break a;}if((f+4|0)>g){j=n+(-2)|0;if(h.ef(4))break a;Bj();i=BgM;break a;}k=e.data;q=Dh(l,p);j=f+1|0;k[f]=(240|q>>18)<<24>>24;o=j+1|0;k[j]=(128|q>>12&63)<<24>>24;j=o+1|0;k[o]=(128|q>>6&63)<<24>>24;m=j+1|0;k[j]=(128|q&63)<<24>>24;j=n;}c=j;f=m;}j=c;}h.em(j);h.dR(f);return i;}
var I6=D();
function XZ(a){J(a);}
var HU=D(0);
function Fm(){var a=this;I6.call(a);a.s6=0;a.dW=null;a.De=0.0;a.Bk=0;a.lm=0;a.mb=0;a.FH=0;}
var Bln=null;var Blo=null;function TI(){TI=N(Fm);A$I();}
function Blp(){var a=new Fm();HH(a);return a;}
function Blq(a){var b=new Fm();ME(b,a);return b;}
function ABm(b,c,d){TI();return BeZ(b,c);}
function HH(a){TI();ME(a,11);}
function ME(a,b){TI();XZ(a);a.mb=(-1);if(b<0)G(CK());a.s6=0;if(!b)b=1;a.dW=OD(a,b);a.lm=a.dW.data.length;a.De=0.75;Mt(a);}
function OD(a,b){return Y(MR,b);}
function Mt(a){a.Bk=a.dW.data.length*a.De|0;}
function AO1(a,b,c){var d,e,f,g,h,i,j;Eq(a);try{if(b!==null&&c!==null){d=b.bp();e=d&2147483647;f=e%a.dW.data.length|0;g=a.dW.data[f];while(g!==null&&!g.MT(b,d)){g=g.pD;}if(g!==null){h=g.hb;g.hb=c;return h;}a.FH=a.FH+1|0;i=a.s6+1|0;a.s6=i;if(i>a.Bk){a.oU();f=e%a.dW.data.length|0;}if(f<a.lm)a.lm=f;if(f>a.mb)a.mb=f;j=ABm(b,c,d);j.pD=a.dW.data[f];a.dW.data[f]=j;return null;}G(IK());}finally{Ch(a);}}
function AMD(a){var b,c,d,e,f,g,h,i,j;b=(a.dW.data.length<<1)+1|0;if(!b)b=1;c=(-1);d=OD(a,b);e=a.mb+1|0;f=b;while(true){e=e+(-1)|0;if(e<a.lm)break;g=a.dW.data[e];while(g!==null){h=(g.N7()&2147483647)%b|0;if(h<f)f=h;if(h>c)c=h;i=d.data;j=g.pD;g.pD=i[h];i[h]=g;g=j;}}a.lm=f;a.mb=c;a.dW=d;Mt(a);}
function A$I(){Bln=Be_();Blo=Ba2();}
function Tc(){Fm.call(this);this.Jh=null;}
function Bba(){var a=new Tc();AOx(a);return a;}
function Bbe(a){var b=new Tc();AKJ(b,a);return b;}
function AOx(a){HH(a);}
function AKJ(a,b){HH(a);a.Jh=b;}
function ABS(){var a=this;Fu.call(a);a.C0=0;a.vg=0;a.t9=null;}
function Ba7(a,b,c,d,e,f){var g=new ABS();AXV(g,a,b,c,d,e,f);return g;}
function AXV(a,b,c,d,e,f,g){K3(a,c,e,f);a.vg=b;a.C0=g;a.t9=d;}
function AO8(a,b){return a.t9.data[b+a.vg|0];}
function AOe(a,b,c){a.t9.data[b+a.vg|0]=c;}
function A5q(a){return a.C0;}
var Wo=D(Bt);
function Baa(){var a=new Wo();A$6(a);return a;}
function A$6(a){Co(a);}
function ALu(a,b,c,d){return b;}
function A5t(a){return B(442);}
function A5C(a,b){return 0;}
function Oi(){V.call(this);this.iD=null;}
var Blr=null;function A0N(){A0N=N(Oi);AUl();}
function Bec(a){var b=new Oi();YM(b,a);return b;}
function YM(a,b){A0N();BM(a);a.iD=Ca(b*16|0);}
function AUC(a,b,c,d,e){var f,g;f=0;while(f<a.iD.data.length){g=f/16|0;if(d.dJ!==null&&g<d.dJ.data.length&&d.dJ.data[g]!==null)X(d.dJ.data[g].c,0,a.iD,f,16);else{A0N();X(Blr.c,0,a.iD,f,16);}f=f+16|0;}b.bh.PI(B0(b,c),a.iD,0,a.iD.data.length);}
function AUl(){Blr=BL();}
var JP=D(Es);
function Bls(a,b,c,d,e){var f=new JP();Sr(f,a,b,c,d,e);return f;}
function Sr(a,b,c,d,e,f){Iv(a,b,c,d,e,f);JF();c.Q(Bh$);}
function AKr(a,b,c,d){var e,f,g;e=0;f=a.fZ.iJ();a:{while(true){g=a.Y.e(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.fZ.jd())return (-1);return a.k.e(b,c,d);}
function CX(){Bx.call(this);this.C4=0;}
var Bj2=null;var Blt=null;var Blu=null;var Blv=null;var Blw=null;var Blx=null;var Bly=null;var Blz=null;function P6(){P6=N(CX);AFv();}
function E7(a,b,c){var d=new CX();OI(d,a,b,c);return d;}
function OI(a,b,c,d){P6();Cw(a,b,c);a.C4=d;}
function EE(a){return a.C4;}
function AFv(){Bj2=E7(B(443),0,9728);Blt=E7(B(444),1,9729);Blu=E7(B(445),2,9987);Blv=E7(B(446),3,9984);Blw=E7(B(447),4,9985);Blx=E7(B(448),5,9986);Bly=E7(B(449),6,9987);Blz=H(CX,[Bj2,Blt,Blu,Blv,Blw,Blx,Bly]);}
var L4=D(C0);
var Bkb=null;function Hx(){Hx=N(L4);AH$();}
function Bcx(){var a=new L4();Uz(a);return a;}
function Uz(a){Hx();GH(a,B(379),Y(BN,0));}
function AQq(a){return BbY(a);}
function ASY(a){return Bb_(a);}
function AH$(){Bkb=Bcx();}
var M5=D(0);
function Vt(){Bt.call(this);this.ic=0;}
function A_P(a){var b=new Vt();A_r(b,a);return b;}
function A_r(a,b){Co(a);a.ic=b;}
function A1H(a,b,c,d){var e,f,g;e=!d.jB()?c.i()-b|0:d.dI()-b|0;if(!e){d.by(a.ic,0);return a.k.e(b,c,d);}if(e<2){f=c.f(b);g=97;}else{f=c.f(b);g=c.f(b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:d.by(a.ic,0);return a.k.e(b,c,d);case 13:if(g!=10){d.by(a.ic,0);return a.k.e(b,c,d);}d.by(a.ic,0);return a.k.e(b,c,d);default:}return (-1);}
function AGv(a,b){var c;c=!b.ev(a.ic)?0:1;b.by(a.ic,(-1));return c;}
function AI9(a){return B(450);}
function SN(){C.call(this);this.Qt=null;}
function A_2(a){var b=new SN();A5M(b,a);return b;}
function A5M(a,b){J(a);a.Qt=b;}
function EO(){C.call(this);this.HL=null;}
function Lh(a){AB4(a,Qq());}
function AB4(a,b){J(a);a.HL=b;}
function Si(){var a=this;EO.call(a);a.mE=null;a.jD=null;a.fM=0;a.ng=0;a.us=0;a.zg=0;}
function BbH(a,b){var c=new Si();AY1(c,a,b);return c;}
function AY1(a,b,c){Lh(a);a.zg=(-1);if(c<0)G(CK());a.mE=b;a.jD=BW(Bf(64,c));}
function ALR(a){N_(a);a.mE.fQ();a.mE=null;}
function ATR(a){var b,c,d,e;N_(a);if(a.us&&a.fM>=a.ng)return null;b=I();a:{while(true){if(a.fM>=a.ng&&!K9(a,0))break a;c=a.jD.data;d=a.fM;a.fM=d+1|0;e=c[d];if(e==10)break;if(e==13){if(a.fM>=a.ng&&!K9(a,0))break a;if(a.jD.data[a.fM]!=10)break a;a.fM=a.fM+1|0;break a;}b.T(e);}}return b.b();}
function K9(a,b){var c;if(a.us)return 0;a:{while(true){if(b>=a.jD.data.length)break a;c=a.mE.JF(a.jD,b,a.jD.data.length-b|0);if(c==(-1)){a.us=1;break a;}if(!c)break;b=b+c|0;}}a.ng=b;a.fM=0;a.zg=(-1);return 1;}
function N_(a){if(a.mE!==null)return;G(Bby());}
function WW(){Q.call(this);this.OB=null;}
function BeL(a){var b=new WW();A3h(b,a);return b;}
function A3h(a,b){a.OB=b;Be(a);}
function A9j(a,b){return ACG(b);}
var I0=D(Dn);
function ASW(){var a=new I0();A1T(a);return a;}
function A1T(a){Jt(a);}
var Yn=D();
var ZW=D(FI);
function Bdn(a,b,c,d,e,f){var g=new ZW();AZg(g,a,b,c,d,e,f);return g;}
function AZg(a,b,c,d,e,f,g){JO(a,b,c,d,e,f,g);}
function AQ5(a,b){var c,d,e;c=a.cs.A.data;d=a.ck;e=b*4|0;return (c[d+e|0]&255)<<24|(a.cs.A.data[(a.ck+e|0)+1|0]&255)<<16|(a.cs.A.data[(a.ck+e|0)+2|0]&255)<<8|a.cs.A.data[(a.ck+e|0)+3|0]&255;}
function AET(a,b,c){var d,e,f;d=a.cs.A.data;e=a.ck;f=b*4|0;d[e+f|0]=c>>24<<24>>24;a.cs.A.data[(a.ck+f|0)+1|0]=c>>16<<24>>24;a.cs.A.data[(a.ck+f|0)+2|0]=c>>8<<24>>24;a.cs.A.data[(a.ck+f|0)+3|0]=c<<24>>24;}
var GO=D(BT);
var BlA=null;function A_l(){A_l=N(GO);A1s();}
function BdY(a){var b=new GO();AAL(b,a);return b;}
function BlB(){var a=new GO();Jr(a);return a;}
function AAL(a,b){A_l();B_(a);}
function Jr(a){A_l();B_(a);}
function A1s(){BlA=BdY(0);}
var R7=D(Bm);
function APC(a){var b=new R7();A71(b,a);return b;}
function IK(){var a=new R7();AGf(a);return a;}
function A71(a,b){EF(a,b);}
function AGf(a){Cx(a);}
function XK(){Q.call(this);this.HQ=null;}
function Bcu(a){var b=new XK();AI1(b,a);return b;}
function AI1(a,b){a.HQ=b;Be(a);}
function A6m(a,b){return MS(b);}
function Qa(){var a=this;C.call(a);a.d0=null;a.yB=null;a.cB=null;a.cU=0;}
function Ba1(){var a=new Qa();AT4(a);return a;}
function AT4(a){J(a);a.cB=Dt();}
var YW=D();
function A8n(b){return Math.sin(b);}
function AEt(b){return Math.cos(b);}
function AQN(b){return Math.tan(b);}
function FR(b){return Math.sqrt(b);}
function AYS(b){return Math.ceil(b);}
function Dg(b){return b+ALz(b)*0.5|0;}
function Bq(b,c){if(b<c)c=b;return c;}
function Bf(b,c){if(b>c)c=b;return c;}
function T4(b,c){if(Kt(b,c))c=b;return c;}
function AW7(b,c){if(Hr(b,c))c=b;return c;}
function Ju(b,c){if(b<c)c=b;return c;}
function Ei(b,c){if(b>c)c=b;return c;}
function Vx(b){if(b<=0)b= -b|0;return b;}
function CG(b){if(b<=0.0)b= -b;return b;}
function ALz(b){var c;c=B9(b,0.0);if(c>0)b=1.0;else if(c<0)b=(-1.0);return b;}
function WX(){var a=this;C.call(a);a.eq=null;a.fj=null;a.du=null;a.vQ=0;a.wf=0;a.LL=0;a.tb=0;a.kT=0;a.oV=0;}
function BfW(a,b,c){var d=new WX();AM8(d,a,b,c);return d;}
function AM8(a,b,c,d){J(a);a.kT=0;a.oV=0;a.LL=b;a.eq=d;a.du=ML(Cg(a.eq.cQ,c));a.wf=1;a.tb=!b?35048:35044;a.fj=a.du.sP();a.vQ=ACx(a);a.fj.db();a.du.db();}
function ACx(a){var b;b=Bie.i5();Bie.c$(34962,b);Bie.fD(34962,CV(a.du),null,a.tb);Bie.c$(34962,0);return b;}
function AXH(a){return a.eq;}
function AJQ(a){return CV(a.du)/a.eq.cQ|0;}
function Z6(a){if(a.oV){Bie.qp(34962,0,BD(a.du),a.du);a.kT=0;}}
function AFg(a,b,c,d){a.kT=1;if(a.wf){Oa(b,a.du,d,c);a.fj.c0(0);a.fj.cl(d);}else{a.fj.c2();a.fj.wx(b,c,d);a.fj.db();a.du.c0(0);a.du.cl(BD(a.fj)<<2);}Z6(a);}
function ANG(a,b,c){var d,e,f,g,h,i;d=Bie;d.c$(34962,a.vQ);if(a.kT){a.du.cl(BD(a.fj)*4|0);d.fD(34962,BD(a.du),a.du,a.tb);a.kT=0;}a:{e=CU(a.eq);if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data;h=CB(a.eq,f);i=g[f];if(i>=0){b.lS(i);b.id(i,h.cK,h.hT,h.im,a.eq.cQ,h.cV);}f=f+1|0;}}f=0;while(f<e){h=CB(a.eq,f);i=b.lY(h.et);if(i>=0){b.lS(i);b.id(i,h.cK,h.hT,h.im,a.eq.cQ,h.cV);}f=f+1|0;}}a.oV=1;}
function AIk(a,b,c){var d,e,f,g;a:{d=Bie;e=CU(a.eq);if(c===null){f=0;while(f<e){b.BI((CB(a.eq,f)).et);f=f+1|0;}}else{f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0)b.tN(g);f=f+1|0;}}}d.c$(34962,0);a.oV=0;}
var GU=D(BT);
var BlC=null;function ANx(){ANx=N(GU);A1v();}
function BeD(a){var b=new GU();YH(b,a);return b;}
function BlD(){var a=new GU();Iy(a);return a;}
function YH(a,b){ANx();B_(a);}
function Iy(a){ANx();B_(a);}
function A1v(){BlC=BeD(0);}
var OK=D();
function A9T(){var b;b=AQt();return b;}
function AQt(){var userAgent=navigator.userAgent.toLowerCase();return {firefox:userAgent.indexOf('firefox')!= -1,chrome:userAgent.indexOf('chrome')!= -1,safari:userAgent.indexOf('safari')!= -1,opera:userAgent.indexOf('opera')!= -1,IE:userAgent.indexOf('msie')!= -1,macOS:userAgent.indexOf('mac')!= -1,linux:userAgent.indexOf('linux')!= -1,windows:userAgent.indexOf('win')!= -1};}
var QN=D(T);
function A_8(){var a=new QN();A6Z(a);return a;}
function A6Z(a){Bo(a);}
function ANP(a){var b;b=Bbo(a);b.be=1;return b;}
function Og(){var a=this;C3.call(a);a.yQ=null;a.nL=null;a.kG=0;}
function BR(a,b,c){var d=new Og();VV(d,a,b,c);return d;}
function VV(a,b,c,d){FX(a);a.kG=(-1);a.yQ=b;a.nL=c;a.kG=d;}
function A$a(a){var b,c;b=B(101);if(a.kG>=1){c=BW(a.kG);APn(c,32);b=Mf(c);}return (((I()).a(a.yQ)).a(a.nL!==null&&a.nL.i()?((((((I()).j(a.kG)).a(B(436))).a(a.nL)).a(B(436))).a(b)).b():B(101))).b();}
function P7(){D6.call(this);this.oC=null;}
function Bf4(a,b,c){var d=new P7();AS3(d,a,b,c);return d;}
function AS3(a,b,c,d){L_(a,c,d);a.oC=Qk(a,b);if(a.oC!==null)return;G(Qg((((I()).a(B(451))).a(b.u())).b()));}
function Qk(a,b){var c,d,$$je;a:{try{c=ANN(b,null);}catch($$e){$$je=R($$e);if($$je instanceof B4){break a;}else{throw $$e;}}return c;}b:{try{d=AZi(b,null);Te(d,1);}catch($$e){$$je=R($$e);if($$je instanceof My){break b;}else{throw $$e;}}return d;}return null;}
function A1z(a){var b,c,$$je;a:{try{b=ACT(a.oC,null);}catch($$e){$$je=R($$e);if($$je instanceof B4){c=$$je;break a;}else{throw $$e;}}return b;}G(Jd((((I()).a(B(452))).a((FF(a.oC)).u())).b(),c));}
var LI=D(0);
var YY=D();
function A_V(){var a=new YY();APW(a);return a;}
function APW(a){J(a);}
function A0h(a){return devicePixelRatio||1;}
function AX5(a){return screen.width;}
function ADG(a){return screen.height;}
function AMe(a,b,c,d,e){var f;f=Bf3(a);return AIZ(BS(f,"fullscreenChanged"),c,d,e)?1:0;}
function AMG(a){AIM();}
function ASX(a){return A9S()?1:0;}
function AIZ(b,c,d,e){if(c.requestFullscreen){c.width=d;c.height=e;c.requestFullscreen();document.addEventListener("fullscreenchange",b,false);return true;}if(c.webkitRequestFullScreen){c.width=d;c.height=e;c.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);document.addEventListener("webkitfullscreenchange",b,false);return true;}if(c.mozRequestFullScreen){c.width=d;c.height=e;c.mozRequestFullScreen();document.addEventListener("mozfullscreenchange",b,false);return true;}if(c.msRequestFullscreen){c.width
=d;c.height=e;c.msRequestFullscreen();document.addEventListener("msfullscreenchange",b,false);return true;}return false;}
function AIM(){if(document.exitFullscreen)document.exitFullscreen();if(document.msExitFullscreen)document.msExitFullscreen();if(document.webkitExitFullscreen)document.webkitExitFullscreen();if(document.mozExitFullscreen)document.mozExitFullscreen();if(document.webkitCancelFullScreen)document.webkitCancelFullScreen();}
function A9S(){if("fullscreenElement" in document){return document.fullscreenElement!=null;}if("msFullscreenElement" in document){return document.msFullscreenElement!=null;}if("webkitFullscreenElement" in document){return document.webkitFullscreenElement!=null;}if("mozFullScreenElement" in document){return document.mozFullScreenElement!=null;}if("webkitIsFullScreen" in document){return document.webkitIsFullScreen;}if("mozFullScreen" in document){return document.mozFullScreen;}return false;}
function HG(){var a=this;C.call(a);a.pO=null;a.hZ=0;a.hm=0;a.g2=0;a.b7=null;a.f2=null;a.g1=null;a.iV=0.0;}
var BlE=null;function A3_(){A3_=N(HG);ALp();}
function A8D(){var a=new HG();AAG(a);return a;}
function BfH(a){var b=new HG();YL(b,a);return b;}
function AAG(a){A3_();J(a);a.f2=S();a.g1=S();a.iV=(-1.0);}
function YL(a,b){A3_();J(a);a.f2=S();a.g1=S();a.iV=(-1.0);a.Cx(b);}
function A31(a,b){a.pO=b.pO;a.b7=b.b7;a.hm=b.hm;a.g2=b.g2;a.hZ=b.hZ;a.f2.M(b.f2);a.g1.M(b.g1);a.iV=b.iV;return a;}
function AOK(a,b,c,d,e,f){a.pO=b;a.b7=c;a.hm=d;a.g2=e;a.hZ=f;a.f2.I(0.0,0.0,0.0);a.g1.I(0.0,0.0,0.0);a.iV=(-1.0);return a;}
function AI_(a,b){var c;a:{b:{if(b!==a){if(b===null)break b;if(b.b7!==a.b7)break b;if(b.hZ!=a.hZ)break b;if(b.hm!=a.hm)break b;if(b.g2!=a.g2)break b;}c=1;break a;}c=0;}return c;}
function AEY(a,b){if(b===null)return 0;if(b===a)return 1;if(!(b instanceof HG))return 0;return a.Hx(b);}
function AVD(a,b,c){a.b7.Dd(b,a.hZ,a.hm,a.g2,c);}
function ALp(){BlE=AMh();}
var TR=D(T);
function Beu(){var a=new TR();AGx(a);return a;}
function AGx(a){Bo(a);}
function AYB(a){var b;b=Bf9(a);b.bG.n4(0,2048);b.be=1;return b;}
var HQ=D(0);
function HD(){var a=this;BH.call(a);a.MC=0;a.Kz=0.0;a.I5=0.0;a.OG=0;}
var BlF=Ba;var BlG=Ba;function AJr(){AJr=N(HD);A4J();}
function A4J(){BlF=BQ(B(453));BlG=BlF;}
var DZ=D(Bx);
var BlH=null;var BlI=null;var BlJ=null;var BlK=null;var BlL=null;function M2(){M2=N(DZ);ASE();}
function Mm(a,b){var c=new DZ();Wb(c,a,b);return c;}
function UI(){M2();return BlL.go();}
function Wb(a,b,c){M2();Cw(a,b,c);}
function ASE(){BlH=Mm(B(454),0);BlI=Mm(B(455),1);BlJ=Mm(B(456),2);BlK=Mm(B(457),3);BlL=H(DZ,[BlH,BlI,BlJ,BlK]);}
var KT=D(0);
function L8(){var a=this;C.call(a);a.mk=0;a.fz=null;a.fn=null;a.CP=0.0;a.sT=0;a.u2=0;a.i1=0;}
var BlM=null;function A7b(){A7b=N(L8);AHL();}
function DH(){var a=new L8();TP(a);return a;}
function BlN(a,b){var c=new L8();Nt(c,a,b);return c;}
function TP(a){A7b();Nt(a,51,0.800000011920929);}
function Nt(a,b,c){var d;A7b();J(a);if(c>0.0&&c<1.0){a.CP=c;d=G4(b,c);a.sT=d*c|0;a.i1=d-1|0;a.u2=CW(O(a.i1));a.fz=Y(C,d);a.fn=Y(C,d);return;}G(W((((I()).a(B(40))).cC(c)).b()));}
function AXF(a,b){return Cp(CM(Cf(O(b.bp()),Cd(2135587861, 2654435769)),a.u2));}
function A02(a,b){var c,d,e;if(b===null)G(W(B(458)));c=a.fz;d=a.kp(b);while(true){e=c.data[d];if(e===null)return  -(d+1|0)|0;if(e.z(b))break;d=(d+1|0)&a.i1;}return d;}
function AQu(a,b,c){var d,e,f;d=a.j6(b);if(d>=0){e=a.fn.data[d];a.fn.data[d]=c;return e;}f= -(d+1|0)|0;a.fz.data[f]=b;a.fn.data[f]=c;f=a.mk+1|0;a.mk=f;if(f>=a.sT)W6(a,a.fz.data.length<<1);return null;}
function Qp(a,b,c){var d,e,f;d=a.fz;e=a.kp(b);while(true){f=d.data;if(f[e]===null)break;e=(e+1|0)&a.i1;}f[e]=b;a.fn.data[e]=c;}
function AWU(a,b){var c;c=a.j6(b);return c<0?null:a.fn.data[c];}
function AVG(a){if(!a.mk)return;a.mk=0;U9(a.fz,null);U9(a.fn,null);}
function A9k(a,b){return a.j6(b)<0?0:1;}
function W6(a,b){var c,d,e,f,g;a:{c=a.fz.data.length;a.sT=b*a.CP|0;a.i1=b-1|0;a.u2=CW(O(a.i1));d=a.fz;e=a.fn;a.fz=Y(C,b);a.fn=Y(C,b);if(a.mk>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g!==null)Qp(a,g,e.data[f]);f=f+1|0;}}}}
function AHL(){BlM=Qq();}
function YT(){var a=this;C.call(a);a.g=null;a.c_=0;a.qF=null;a.vY=0;a.fF=0;a.gH=0;a.bR=0;a.rM=null;}
function Bc9(){var a=new YT();ADB(a);return a;}
function GN(a,b){return BaD(a,b);}
function Mq(a,b,c){var d,e,f,g,h,i;d=SF();e=GN(a,b);f=0;g=0;if(!b.i()){h=Y(BN,1);h.data[0]=B(101);return h;}while(Ga(e)){i=f+1|0;if(i>=c&&c>0)break;d.h4((b.d_(g,LS(e))).b());g=MX(e);f=i;}a:{d.h4((b.d_(g,b.i())).b());i=f+1|0;if(!c)while(true){i=i+(-1)|0;if(i<0)break;if(((d.l(i)).b()).i())break a;d.mB(i);}}if(i<0)i=0;return d.IH(Y(BN,i));}
function VU(a,b){return Mq(a,b,0);}
function IQ(a){return a.g.b();}
function AZc(b,c){if(b===null)G(APC(B(459)));if(c&&(c|255)!=255)G(W(B(101)));W2();BgH=1;return Ye(Bc9(),b,c);}
function Ye(a,b,c){a.g=BdU(b,c);a.c_=c;a.rM=L1(a,(-1),a.c_,null);if(a.g.bN()){QI(a);return a;}G(BR(B(101),a.g.b(),a.g.dM()));}
function ACm(a,b){var c,d,e;c=BfQ(BX(a,2),BX(a,64));while(!a.g.bN()){d=a.g;if(!d.hy())break;d=a.g;if(d.cM()&&a.g.cM()!=(-536870788)){d=a.g;if(d.cM()!=(-536870871))break;}c.cG(a.g.E());if(a.g.bV()!=(-536870788))continue;a.g.E();}e=HR(a,c);e.Q(b);return e;}
function L1(a,b,c,d){var e,f,g,h,i,j;e=SF();f=a.c_;g=0;if(c!=a.c_)a.c_=c;a:{switch(b){case -1073741784:h=new KX;i=a.bR+1|0;a.bR=i;ZP(h,i);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Ks;i=a.bR+1|0;a.bR=i;AB2(h,i);break a;case -33554392:h=new K8;i=a.bR+1|0;a.bR=i;UP(h,i);break a;default:a.fF=a.fF+1|0;if(d!==null)h=Bfl(a.fF);else{h=Bd7();g=1;}if(a.fF<=(-1))break a;if(a.fF>=10)break a;a.qF.data[a.fF]=h;break a;}h=Bc4();}while(true){if(a.g.hy()&&a.g.cM()==(-536870788))j=ACm(a,
h);else if(a.g.bV()==(-536870788)){j=FG(h);a.g.E();}else{j=MI(a,h);if(a.g.bV()==(-536870788))a.g.E();}if(j!==null)e.h4(j);if(a.g.bN())break;if(a.g.bV()==(-536870871))break;}if(a.g.Hn()==(-536870788))e.h4(FG(h));if(a.c_!=f&&!g){a.c_=f;a.g.G_(a.c_);}switch(b){case -1073741784:break;case -536870872:return BdK(e,h);case -268435416:return BcZ(e,h);case -134217688:return Bae(e,h);case -67108824:return Bd0(e,h);case -33554392:return Bde(e,h);default:switch(e.df()){case 0:break;case 1:return BeU(e.l(0),h);default:return Ba$(e,
h);}return FG(h);}return BcF(e,h);}
function AAZ(a){var b,c,d;b=A6A();while(!a.g.bN()){c=a.g;if(!c.hy())break;c=a.g;if(c.Ew())break;c=a.g;if(c.Fy())break;c=a.g;if(!(!c.tm()&&!a.g.cM())){c=a.g;if(!(!c.tm()&&I2(a.g.cM()))){c=a.g;if(c.cM()!=(-536870871)){c=a.g;if((c.cM()&(-2147418113))!=(-2147483608)){c=a.g;if(c.cM()!=(-536870788)){c=a.g;if(c.cM()!=(-536870876))break;}}}}}d=a.g.E();if(!Im(d))b.I8(d&65535);else b.Ps(Eu(d));}if(!BX(a,2))return BaU(b);if(BX(a,64))return Bgb(b);return Bgg(b);}
function AA3(a){var b,c,d,e,f,g,h,i,j,k;b=Bc(4);c=0;d=(-1);e=(-1);if(!a.g.bN()&&a.g.hy()){f=b.data;d=a.g.E();f[c]=d;e=d-4352|0;}if(e>=0&&e<19){g=BW(3);f=g.data;f[c]=d&65535;h=a.g.bV();i=h-4449|0;if(i>=0&&i<21){f[1]=h&65535;a.g.E();j=a.g.bV();h=j-4519|0;if(h>=0&&h<28){f[2]=j&65535;a.g.E();return A8T(g,3);}return A8T(g,2);}if(!BX(a,2))return Qo(f[0]);if(BX(a,64))return A6v(f[0]);return AXC(f[0]);}k=1;while(k<4&&!a.g.bN()&&a.g.hy()){f=b.data;j=k+1|0;f[k]=a.g.E();k=j;}if(k==1){f=b.data;if(!AMl(f[0]))return LU(a,
f[0]);}if(!BX(a,2))return Bgd(b,k);if(BX(a,64))return BfT(b,k);return Ba_(b,k);}
function MI(a,b){var c,d,e,f;if(a.g.hy()&&!a.g.tm()&&I2(a.g.cM())){if(!BX(a,128)){if(!a.g.Ew()&&!a.g.Fy())c=AAZ(a);else{d=Ou(a,b);c=Ip(a,b,d);}}else{c=AA3(a);if(!a.g.bN()){e=a.g;if(!(e.bV()==(-536870871)&&!(b instanceof EZ))){e=a.g;if(e.bV()!=(-536870788)&&!a.g.hy())c=Ip(a,b,c);}}}}else if(a.g.bV()!=(-536870871)){d=Ou(a,b);c=Ip(a,b,d);}else{if(b instanceof EZ)G(BR(B(101),a.g.b(),a.g.dM()));c=FG(b);}a:{if(!a.g.bN()){e=a.g;if(!(e.bV()==(-536870871)&&!(b instanceof EZ))){e=a.g;if(e.bV()!=(-536870788)){f=MI(a,b);if
(c instanceof CF&&!(c instanceof Eg)&&!(c instanceof CH)&&!(c instanceof Ee)){e=c;if(!f.ca(e.pV()))c=A__(e);}if((f.i6()&65535)!=43)c.Q(f);else c.Q(f.pV());break a;}}}if(c===null)return null;c.Q(b);}if((c.i6()&65535)!=43)return c;return c.pV();}
function Ip(a,b,c){var d,e,f,g,h,i,j;d=a.g.bV();if(c!==null&&!(c instanceof BJ)){switch(d){case -2147483606:a.g.E();return Bca(c,b,d);case -2147483605:a.g.E();return BeC(c,b,(-2147483606));case -2147483585:a.g.E();return BeO(c,b,(-536870849));case -2147483525:e=new JP;f=a.g.jn();g=a.gH+1|0;a.gH=g;Sr(e,f,c,b,(-536870849),g);return e;case -1073741782:case -1073741781:a.g.E();h=BdX(c,b,d);c.Q(h);return h;case -1073741761:a.g.E();h=Bau(c,b,(-536870849));c.Q(b);return h;case -1073741701:h=new Lw;e=a.g;e=e.jn();i
=a.gH+1|0;a.gH=i;So(h,e,c,b,(-536870849),i);c.Q(h);return h;case -536870870:case -536870869:a.g.E();h=c.i6()!=(-2147483602)?BdB(c,b,d):BX(a,32)?BaI(c,b,d):A_7(c,b,d,MO(a.c_));c.Q(h);return h;case -536870849:a.g.E();h=Bf5(c,b,(-536870849));c.Q(b);return h;case -536870789:h=new Es;e=a.g;e=e.jn();g=a.gH+1|0;a.gH=g;Iv(h,e,c,b,(-536870849),g);c.Q(h);return h;default:}return c;}j=null;if(c!==null)j=c;switch(d){case -2147483606:case -2147483605:a.g.E();h=Bb3(j,b,d);j.Q(h);return h;case -2147483585:a.g.E();return Bc$(j,
b,(-2147483585));case -2147483525:return Bcq(a.g.jn(),j,b,(-2147483525));case -1073741782:case -1073741781:a.g.E();h=BfF(j,b,d);j.Q(h);return h;case -1073741761:a.g.E();return Bfs(j,b,(-1073741761));case -1073741701:return BaP(a.g.jn(),j,b,(-1073741701));case -536870870:case -536870869:a.g.E();h=BbT(j,b,d);j.Q(h);return h;case -536870849:a.g.E();return Bbm(j,b,(-536870849));case -536870789:return BdO(a.g.jn(),j,b,(-536870789));default:}return c;}
function Ou(a,b){var c,d,e,f,g,h,i,j,k,l;c=null;while(true){a:{d=a.g.bV();if((d&(-2147418113))==(-2147483608)){a.g.E();e=(d&16711680)>>16;d=d&(-16711681);if(d==(-16777176))a.c_=e;else{if(d!=(-1073741784))e=a.c_;c=L1(a,d,e,b);if(a.g.bV()!=(-536870871))G(BR(B(101),a.g.b(),a.g.dM()));a.g.E();}}else{b:{c:{switch(d){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:a.g.E();c
=A8x(0);break a;case -2147483577:a.g.E();c=Bar();break a;case -2147483558:a.g.E();c=new LP;f=a.bR+1|0;a.bR=f;ABv(c,f);break a;case -2147483550:a.g.E();c=A8x(1);break a;case -2147483526:a.g.E();c=Bck();break a;case -536870876:a.g.E();a.bR=a.bR+1|0;if(BX(a,8)){if(BX(a,1)){c=BaN(a.bR);break a;}c=A_P(a.bR);break a;}if(BX(a,1)){c=Bbg(a.bR);break a;}c=Bb9(a.bR);break a;case -536870866:a.g.E();if(BX(a,32)){c=BcA();break a;}c=Bb0(MO(a.c_));break a;case -536870821:a.g.E();g=0;if(a.g.bV()==(-536870818)){g=1;a.g.E();}c
=St(a,g,b);if(a.g.bV()!=(-536870819))G(BR(B(101),a.g.b(),a.g.dM()));a.g.pN(1);a.g.E();break a;case -536870818:a.g.E();a.bR=a.bR+1|0;if(!BX(a,8)){c=ARB();break a;}c=BfE(MO(a.c_));break a;case 0:h=a.g.se();if(h!==null)c=HR(a,h);else{if(a.g.bN()){c=FG(b);break a;}c=Qo(d&65535);}a.g.E();break a;default:break b;}a.g.E();c=ARB();break a;}i=(d&2147483647)-48|0;if(a.fF<i)G(BR(B(101),a.g.b(),a.g.dM()));a.g.E();a.bR=a.bR+1|0;c=!BX(a,2)?Bdd(i,a.bR):BX(a,64)?BaO(i,a.bR):Bf8(i,a.bR);a.qF.data[i].tj=1;a.vY=1;break a;}if(d
>=0&&!a.g.kZ()){c=LU(a,d);a.g.E();}else if(d==(-536870788))c=FG(b);else{if(d!=(-536870871)){j=new Og;k=!a.g.kZ()?In(d&65535):(a.g.se()).b();l=a.g;VV(j,k,l.b(),a.g.dM());G(j);}if(b instanceof EZ)G(BR(B(101),a.g.b(),a.g.dM()));c=FG(b);}}}if(d!=(-16777176))break;}return c;}
function St(a,b,c){var d,e;d=Fq(a,b);e=HR(a,d);e.Q(c);return e;}
function Fq(a,b){var c,d,e,f,g,h,i,j,k,$$je;c=Bfy(b,BX(a,2),BX(a,64));d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(a.g.bN())break a;f=a.g.bV()==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.g.bV()){case -536870874:if(d>=0)c.cG(d);d=a.g.E();if(a.g.bV()!=(-536870874)){d=38;break d;}if(a.g.cM()==(-536870821)){a.g.E();e=1;d=(-1);break d;}a.g.E();if(g){c=Fq(a,0);break d;}if(a.g.bV()==(-536870819))break d;c.x1(Fq(a,0));break d;case -536870867:if(!g&&a.g.cM()!=(-536870819)){h=a.g;if(h.cM()!=(-536870821)&&d>=0){a.g.E();i
=a.g.bV();if(a.g.kZ())break c;if(i<0){h=a.g;if(h.cM()!=(-536870819)){h=a.g;if(h.cM()!=(-536870821)&&d>=0)break c;}}e:{try{if(I2(i))break e;i=i&65535;break e;}catch($$e){$$je=R($$e);if($$je instanceof B4){break b;}else{throw $$e;}}}try{c.bF(d,i);}catch($$e){$$je=R($$e);if($$je instanceof B4){break b;}else{throw $$e;}}a.g.E();d=(-1);break d;}}if(d>=0)c.cG(d);d=45;a.g.E();break d;case -536870821:if(d>=0){c.cG(d);d=(-1);}a.g.E();j=0;if(a.g.bV()==(-536870818)){a.g.E();j=1;}if(!e)c.LM(Fq(a,j));else c.x1(Fq(a,j));e
=0;a.g.E();break d;case -536870819:if(d>=0)c.cG(d);d=93;a.g.E();break d;case -536870818:if(d>=0)c.cG(d);d=94;a.g.E();break d;case 0:if(d>=0)c.cG(d);k=a.g.se();if(k===null)d=0;else{c.NG(k);d=(-1);}a.g.E();break d;default:}if(d>=0)c.cG(d);d=a.g.E();}g=0;}G(BR(B(101),IQ(a),a.g.dM()));}G(BR(B(101),IQ(a),a.g.dM()));}if(!f){if(d>=0)c.cG(d);return c;}G(BR(B(101),IQ(a),a.g.dM()-1|0));}
function LU(a,b){var c;c=Im(b);if(BX(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AXC(b&65535);}if(BX(a,64)&&b>128){if(c)return BbD(b);if(Kh(b))return AN7(b&65535);if(!K5(b))return A6v(b&65535);return A1L(b&65535);}}if(c)return A_3(b);if(Kh(b))return AN7(b&65535);if(!K5(b))return Qo(b&65535);return A1L(b&65535);}
function HR(a,b){var c,d;if(!b.Ga()){if(!b.Dg()){if(b.g8())return AJM(b);return ARl(b);}if(b.g8())return A4z(b);return A2f(b);}c=b.N2();d=Bc2(c);if(!b.Dg()){if(b.g8())return Lp(AJM(b.mQ()),d);return Lp(ARl(b.mQ()),d);}if(b.g8())return Lp(A4z(b.mQ()),d);return Lp(A2f(b.mQ()),d);}
function GK(b){return AZc(b,0);}
function QI(a){if(a.vY)a.rM.ed();}
function A2k(b){var c,d,e,f;c=(I()).a(B(460));d=0;while(true){e=b.uv(B(461),d);if(e<0)break;f=e+2|0;(c.a(b.ce(d,f))).a(B(462));d=f;}return ((c.a(b.ei(d))).a(B(461))).b();}
function VH(a){return a.fF;}
function ABT(a){return a.gH+1|0;}
function SH(a){return a.bR+1|0;}
function GG(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function BX(a,b){return (a.c_&b)!=b?0:1;}
function ADB(a){J(a);a.qF=Y(Cy,10);a.fF=(-1);a.gH=(-1);a.bR=(-1);}
var De=D(B4);
function Bby(){var a=new De();V3(a);return a;}
function V3(a){E$(a);}
var GL=D(De);
var Ot=D(0);
function V0(){var a=this;C.call(a);a.z3=0;a.A1=null;}
function BeF(a,b){var c=new V0();AUQ(c,a,b);return c;}
function AUQ(a,b,c){a.A1=b;a.z3=c;J(a);}
function AXj(a){A24(a.A1,a.z3);}
function AO2(a){a.HO();}
var Qh=D(FP);
function BeO(a,b,c){var d=new Qh();ARk(d,a,b,c);return d;}
function ARk(a,b,c,d){Mj(a,b,c,d);JF();b.Q(Bh$);}
function ALb(a,b,c,d){var e;e=a.Y.e(b,c,d);if(e<=0)e=b;return a.k.e(e,c,d);}
function A4K(a,b){a.k=b;}
function Jo(){var a=this;C.call(a);a.o1=0;a.n0=0;a.JB=0;a.NX=0;}
function BlO(a,b,c,d){var e=new Jo();Ts(e,a,b,c,d);return e;}
function Ts(a,b,c,d,e){J(a);a.o1=b;a.n0=c;a.JB=d;a.NX=e;}
var YJ=D(Bm);
function F0(){var a=new YJ();A0m(a);return a;}
function A0m(a){Cx(a);}
var UJ=D(T);
function Bfu(){var a=new UJ();ALZ(a);return a;}
function ALZ(a){Bo(a);}
function A2K(a){var b;b=BcG(a);b.be=1;return b;}
function Mr(){var a=this;C.call(a);a.tK=0;a.yc=0;a.Cr=null;}
function AIy(a,b,c){var d=new Mr();AQW(d,a,b,c);return d;}
function AQW(a,b,c,d){J(a);a.tK=b;a.yc=c;a.Cr=d;}
function SG(){EA.call(this);this.iU=null;}
function Bc_(){var a=new SG();A9J(a);return a;}
function A9J(a){Lx(a);}
function AWz(a,b){var c;JD();c=BA(a,BlP);if(c===null){c=Ba0();Ep(a,c);}c.hl.F(b);return a;}
var AAY=D(D$);
function Bfz(){var a=new AAY();AJP(a);return a;}
function AJP(a){Km(a);}
function A7H(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AS$(a,b,c){var d;a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}d=1;break a;}d=0;}return d;}
var AAX=D(D$);
function Be7(){var a=new AAX();AWD(a);return a;}
function AWD(a){Km(a);}
function AF6(a,b){return b!=10?0:1;}
function APK(a,b,c){return b!=10?0:1;}
var YO=D(FS);
var Vd=D(T);
function Bfe(){var a=new Vd();A1g(a);return a;}
function A1g(a){Bo(a);}
function A69(a){var b;b=Bel(a);b.be=1;return b;}
var K_=D();
var Bla=0;function KW(){C.call(this);this.qv=null;}
var BlQ=null;function Bap(){var a=new KW();AZo(a);return a;}
function AZo(a){J(a);}
function A0l(a,b,c,d,e){if(a.qv===null)a.qv=Ber();a.qv.GA(b,c,d,e);}
function AIi(){if(BlQ===null)BlQ=Bap();return BlQ;}
function Tn(){var a=this;C.call(a);a.Br=null;a.CM=0;}
function Bb2(a){var b=new Tn();AYQ(b,a);return b;}
function AYQ(a,b){J(a);a.Br=b;}
function Dy(){var a=this;BJ.call(a);a.gy=null;a.yz=0;}
function ARl(a){var b=new Dy();APa(b,a);return b;}
function APa(a,b){C2(a);a.gy=b.mg();a.yz=b.bD;}
function AUm(a,b,c){return !a.gy.p(c.f(b))?(-1):1;}
function ALE(a){return ((((I()).a(B(55))).a(!a.yz?B(56):B(57))).a(a.gy.b())).b();}
function AOG(a,b){if(b instanceof DA)return IY(a.gy,b.ps());if(b instanceof Dy)return GV(a.gy,b.gy);if(b instanceof C4)return GV(a.gy,b.uJ());if(!(b instanceof Dw))return 1;return 0;}
function A5r(a){return a.gy;}
function Iq(){Q.call(this);this.rV=0;}
function BcH(a){var b=new Iq();Sx(b,a);return b;}
function Sx(a,b){Be(a);a.rV=b;}
function AOA(a,b){return a.bD^(a.rV!=F_(b&65535)?0:1);}
var Zk=D(Iq);
function A_Y(a){var b=new Zk();ANw(b,a);return b;}
function ANw(a,b){Sx(a,b);}
function A74(a,b){return a.bD^(!(a.rV>>F_(b&65535)&1)?0:1);}
function LH(){var a=this;C.call(a);a.sJ=null;a.l2=null;a.dC=0;a.mO=null;a.Af=0.0;a.AY=0.0;a.fN=0;a.Eu=null;a.nZ=null;a.pR=null;a.uP=0;a.sg=0;a.wS=0;a.Cm=0;a.vC=0;a.il=null;a.gu=null;a.LN=0;a.Og=null;a.P2=0.0;a.nn=0;a.rd=0;a.va=0;}
var BlR=null;function TG(){TG=N(LH);A34();}
function Bc6(){var a=new LH();ABu(a);return a;}
function BlS(a,b){var c=new LH();Kf(c,a,b);return c;}
function ABu(a){TG();Kf(a,1000,null);}
function Kf(a,b,c){var d,e,f,g,h,i,j,k,l,m;TG();J(a);a.dC=0;a.mO=null;a.Af=0.0;a.AY=0.0;a.fN=0;a.Eu=BL();a.nZ=BL();a.pR=BL();a.uP=0;a.sg=770;a.wS=771;a.Cm=770;a.vC=771;a.gu=null;a.Og=CO(1.0,1.0,1.0,1.0);a.P2=Bko;a.nn=0;a.rd=0;a.va=0;if(b>8191)G(W((((I()).a(B(463))).j(b)).b()));if(Bif===null)d=BlR;else{M2();d=BlK;}e=new HT;f=b*4|0;g=b*6|0;M4(e,d,0,f,g,H(Fc,[EB(1,2,B(464)),EB(4,4,B(465)),EB(16,2,B(466))]));a.sJ=e;a.nZ.L2(0.0,0.0,Bia.bo(),Bia.bl());a.l2=Ca(b*20|0);h=MW(g);i=0;j=0;while(j<g){k=h.data;k[j]=i;k[j
+1|0]=(i+1|0)<<16>>16;l=j+2|0;m=(i+2|0)<<16>>16;k[l]=m;k[j+3|0]=m;k[j+4|0]=(i+3|0)<<16>>16;k[j+5|0]=i;j=j+6|0;i=(i+4|0)<<16>>16;}a.sJ.NI(h);if(c!==null)a.il=c;else{a.il=S4();a.LN=1;}}
function S4(){var b,c,d;TG();b=B(467);c=B(468);d=AIS(b,c);if(d.r$())return d;G(W((((I()).a(B(469))).a(d.q0())).b()));}
function A04(a){if(a.fN)G(DS(B(470)));a.nn=0;Bid.kS(0);if(a.gu===null)a.il.ew();else a.gu.ew();a.z5();a.fN=1;}
function AQU(a){var b;if(!a.fN)G(DS(B(471)));if(a.dC>0)a.ep();a.mO=null;a.fN=0;b=Bid;b.kS(1);if(a.Jv())b.eh(3042);}
function AK$(a,b,c,d,e){var f,g,h;if(!a.fN)G(DS(B(472)));f=a.l2.data.length;if(b!==a.mO){a.Km(b);g=f;}else{g=f-a.dC|0;if(!g){a.ep();g=f;}}h=Bq(g,e);X(c,d,a.l2,a.dC,h);a.dC=a.dC+h|0;g=e-h|0;while(g>0){d=d+h|0;a.ep();h=Bq(f,g);X(c,d,a.l2,0,h);a.dC=a.dC+h|0;g=g-h|0;}}
function AKy(a){var b,c,d;if(!a.dC)return;a.nn=a.nn+1|0;a.rd=a.rd+1|0;b=a.dC/20|0;if(b>a.va)a.va=b;c=b*6|0;a.mO.ew();d=a.sJ;d.FN(a.l2,0,a.dC);(d.Au()).c0(0);(d.Au()).cl(c);if(a.uP)Bid.eh(3042);else{Bid.o5(3042);if(a.sg!=(-1))Bid.JV(a.sg,a.wS,a.Cm,a.vC);}d.NJ(a.gu===null?a.il:a.gu,4,0,c);a.dC=0;}
function AJb(a,b){if(a.fN)a.ep();a.nZ.ch(b);if(a.fN)a.z5();}
function AHv(a){(a.pR.ch(a.nZ)).hC(a.Eu);if(a.gu===null){a.il.Ff(B(473),a.pR);a.il.yf(B(474),0);}else{a.gu.Ff(B(473),a.pR);a.gu.yf(B(474),0);}}
function A5i(a,b){a.ep();a.mO=b;a.Af=1.0/b.bo();a.AY=1.0/b.bl();}
function AD7(a){return a.uP?0:1;}
function A34(){M2();BlR=BlH;}
var L$=D();
var BlT=null;function BeT(){BeT=N(L$);A7d();}
function A7d(){BlT=Bc((UI()).data.length);BlT.data[BC(BlI)]=1;BlT.data[BC(BlJ)]=2;BlT.data[BC(BlK)]=3;BlT.data[BC(BlH)]=4;}
var XQ=D(CN);
var N7=D(0);
function LV(){var a=this;C.call(a);a.jE=null;a.e6=null;a.xI=null;a.JT=null;a.eC=null;a.NP=null;}
var BlU=0;function VL(){VL=N(LV);AY2();}
function BfG(a){var b=new LV();ACX(b,a);return b;}
function BlV(a,b){var c=new LV();Ka(c,a,b);return c;}
function BlW(a,b,c){var d=new LV();Nm(d,a,b,c);return d;}
function ACX(a,b){VL();Ka(a,b,null);}
function Ka(a,b,c){VL();Nm(a,b,null,c);}
function Nm(a,b,c,d){VL();J(a);a.jE=Bp();a.e6=Bp();a.xI=Bp();a.JT=b;if(c===null)c=BL();a.eC=c;if(d!==null)Pe(a,b.j3,d);else Q$(a,b.j3);a.Hc(b.AB,BlU);a.PW();}
function Q$(a,b){var c,d,e;c=0;d=b.h;while(c<d){e=b.l(c);a.e6.F(e.u6());c=c+1|0;}Ob(a);}
function Pe(a,b,c){var d,e,f,g,h,i,j;d=0;e=b.h;while(d<e){f=c.data;g=b.l(d);h=f.length;i=0;a:{while(true){if(i>=h)break a;j=f[i];if(j.z(g.gn))break;i=i+1|0;}a.e6.F(g.u6());}d=d+1|0;}Ob(a);}
function On(a,b){var c,d,e,f,g,h,i,j;c=0;d=b.d9.h;while(c<d){a:{e=b.d9.l(c);f=e.cJ;if(f!==null){g=0;while(true){if(g>=f.cb)break a;f.er.data[g]=a.yE(f.er.data[g].gn);g=g+1|0;}}}if(!a.jE.iv(e.dY,1)){h=a.jE.K4(e.dY,0);if(h>=0)e.dY=a.jE.l(h);else{i=a.jE;j=e.dY.Ja();e.dY=j;i.F(j);}}c=c+1|0;}c=0;d=b.IQ();while(c<d){On(a,b.Qb(c));c=c+1|0;}}
function Ob(a){var b,c;b=0;c=a.e6.h;while(b<c){On(a,a.e6.l(b));b=b+1|0;}}
function AMJ(a,b,c){var d,e;d=b.fs();while(d.bC()){e=d.bz();a.Hw(e,c);}}
function AFd(a,b,c){var d,e,f,g,h,i,j;d=BfX();d.DT=b.DT;d.wi=b.wi;e=b.mV.bZ();while(e.bC()){f=e.bz();g=a.yE(f.y0.gn);if(g===null)continue;a:{h=Bfj();h.y0=g;if(c){h.gC=f.gC;h.gp=f.gp;h.fR=f.fR;}else{b:{if(f.gC!==null){h.gC=Bp();i=f.gC.bZ();while(true){if(!i.bC())break b;j=i.bz();h.gC.F(Rp(j.no,j.ox));}}}c:{if(f.gp!==null){h.gp=Bp();i=f.gp.bZ();while(true){if(!i.bC())break c;j=i.bz();h.gp.F(Rp(j.no,j.ox));}}}if(f.fR!==null){h.fR=Bp();i=f.fR.bZ();while(true){if(!i.bC())break a;j=i.bz();h.fR.F(Rp(j.no,j.ox));}}}}if
(!(h.gC===null&&h.gp===null&&h.fR===null))d.mV.F(h);}if(d.mV.h>0)a.xI.F(d);}
function APi(a,b,c){var d,e;d=a.e6.bZ();while(d.bC()){e=d.bz();a.z7(e,b,c);}}
function A99(a,b,c,d){d.II(b);if(d.dz===null&&a.eC!==null)(b.dy.ch(a.eC)).hC(c.fI);else if(a.eC===null)b.dy.fx();else b.dy.ch(a.eC);b.BS=a.NP;return b;}
function ANI(a,b,c,d){var e,f,g,h;a:{if(b.d9.h>0){e=b.d9.bZ();while(true){if(!e.bC())break a;f=e.bz();if(f.ly)c.F(a.Jp(d.eT(),b,f));}}}g=(b.rC()).fs();while(g.bC()){h=g.bz();a.z7(h,c,d);}}
function ADc(a){var b,c;b=a.e6.h;c=0;while(c<b){(a.e6.l(c)).Dh(1);c=c+1|0;}c=0;while(c<b){(a.e6.l(c)).y2(1);c=c+1|0;}}
function AC5(a,b){return a.Oe(b,1);}
function AM3(a,b,c){return a.Po(b,c,0);}
function AZd(a,b,c,d){return ZL(a.e6,b,c,d);}
function AY2(){BlU=1;}
var D1=D(De);
function BlX(){var a=new D1();Kp(a);return a;}
function Kp(a){V3(a);}
function QL(){D1.call(this);this.E5=0;}
function BaC(a){var b=new QL();A1J(b,a);return b;}
function A1J(a,b){Kp(a);a.E5=b;}
function AHj(a){return (((I()).a(B(475))).j(a.E5)).b();}
function P4(){var a=this;Q.call(a);a.ur=0;a.vR=0;a.pA=0;a.rp=0;a.e$=0;a.hX=0;a.bc=null;a.bE=null;}
function CR(){var a=new P4();ATX(a);return a;}
function BfQ(a,b){var c=new P4();P$(c,a,b);return c;}
function Bfy(a,b,c){var d=new P4();AVh(d,a,b,c);return d;}
function ATX(a){Be(a);a.bc=A_A();}
function P$(a,b,c){Be(a);a.bc=A_A();a.ur=b;a.vR=c;}
function AVh(a,b,c,d){P$(a,c,d);a.f$(b);}
function AC2(a,b){a:{if(a.ur){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.e$){a.bc.rU(GG(b&65535));break a;}a.bc.sQ(GG(b&65535));break a;}if(a.vR&&b>128){a.pA=1;b=EX(En(b));}}}if(!(!K5(b)&&!Kh(b))){if(a.rp)a.bG.rU(b-55296|0);else a.bG.sQ(b-55296|0);}if(a.e$)a.bc.rU(b);else a.bc.sQ(b);if(!a.be&&Im(b))a.be=1;return a;}
function A_q(a,b){var c,d;if(!a.be&&b.be)a.be=1;if(a.rp){if(!b.b5)a.bG.iI(b.ci());else a.bG.dN(b.ci());}else if(!b.b5)a.bG.iQ(b.ci());else{a.bG.i8(b.ci());a.bG.dN(b.ci());a.b5=a.b5?0:1;a.rp=1;}if(!a.hX&&b.bK()!==null){if(a.e$){if(!b.jH())a.bc.iI(b.bK());else a.bc.dN(b.bK());}else if(!b.jH())a.bc.iQ(b.bK());else{a.bc.i8(b.bK());a.bc.dN(b.bK());a.bD=a.bD?0:1;a.e$=1;}}else{c=a.bD;if(a.bE!==null){d=a.bE;if(!c)a.bE=BfL(a,c,d,b);else a.bE=BcT(a,c,d,b);}else{if(c&&!a.e$&&a.bc.bN())a.bE=BaA(a,b);else if(!c)a.bE=BcW(a,
c,b);else a.bE=Bal(a,c,b);a.hX=1;}}return a;}
function A8W(a,b,c){if(b>c)G(CK());a:{b:{if(!a.ur){if(c<55296)break b;if(b>57343)break b;}while(true){if(b>=(c+1|0))break a;a.cG(b);b=b+1|0;}}if(a.e$)a.bc.Ot(b,c+1|0);else a.bc.n4(b,c+1|0);}return a;}
function AUL(a,b){var c,d;if(!a.be&&b.be)a.be=1;if(b.g8())a.pA=1;if(!(a.b5^b.b5)){if(!a.b5)a.bG.iQ(b.ci());else a.bG.dN(b.ci());}else if(a.b5)a.bG.iI(b.ci());else{a.bG.i8(b.ci());a.bG.dN(b.ci());a.b5=1;}if(!a.hX&&b.bK()!==null){if(!(a.bD^b.jH())){if(!a.bD)a.bc.iQ(b.bK());else a.bc.dN(b.bK());}else if(a.bD)a.bc.iI(b.bK());else{a.bc.i8(b.bK());a.bc.dN(b.bK());a.bD=1;}}else{c=a.bD;if(a.bE!==null){d=a.bE;if(!c)a.bE=Bcc(a,c,d,b);else a.bE=Bge(a,c,d,b);}else{if(!a.e$&&a.bc.bN()){if(!c)a.bE=Bax(a,b);else a.bE=BfV(a,
b);}else if(!c)a.bE=Bds(a,b,c);else a.bE=A_S(a,b,c);a.hX=1;}}}
function AR8(a,b){var c,d;if(!a.be&&b.be)a.be=1;if(b.g8())a.pA=1;if(!(a.b5^b.b5)){if(!a.b5)a.bG.dN(b.ci());else a.bG.iQ(b.ci());}else if(!a.b5)a.bG.iI(b.ci());else{a.bG.i8(b.ci());a.bG.dN(b.ci());a.b5=0;}if(!a.hX&&b.bK()!==null){if(!(a.bD^b.jH())){if(!a.bD)a.bc.dN(b.bK());else a.bc.iQ(b.bK());}else if(!a.bD)a.bc.iI(b.bK());else{a.bc.i8(b.bK());a.bc.dN(b.bK());a.bD=0;}}else{c=a.bD;if(a.bE!==null){d=a.bE;if(!c)a.bE=Bga(a,c,d,b);else a.bE=Bb8(a,c,d,b);}else{if(!a.e$&&a.bc.bN()){if(!c)a.bE=BeJ(a,b);else a.bE=Be2(a,
b);}else if(!c)a.bE=A_5(a,b,c);else a.bE=Bf_(a,b,c);a.hX=1;}}}
function AGq(a,b){if(a.bE!==null)return a.bD^a.bE.p(b);return a.bD^a.bc.eL(b);}
function AT8(a){if(!a.hX)return a.bc;return null;}
function AZD(a){return a.bG;}
function ARz(a){var b,c;if(a.bE!==null)return a;b=a.bK();c=BdT(a,b);return c.f$(a.jH());}
function A4x(a){var b,c;b=I();c=a.bc.lb(0);while(c>=0){b.qZ(Eu(c));b.T(124);c=a.bc.lb(c+1|0);}if(b.i()>0)b.E_(b.i()-1|0);return b.b();}
function AIw(a){return a.pA;}
function P0(){var a=this;C.call(a);a.vh=null;a.Cs=null;a.oB=null;}
function BcD(a,b,c){var d=new P0();A6z(d,a,b,c);return d;}
function A6z(a,b,c,d){a.oB=b;a.vh=c;a.Cs=d;J(a);}
function A4L(a,b){if($rt_str(b.type).z(B(476)))a.oB.mA.cx(a.vh);else a.oB.mA.cE(a.vh,a.Cs);a.oB.m3.fJ();}
function A$n(a,b){a.dU(b);}
var ABI=D(Bm);
function UA(){var a=new ABI();ASz(a);return a;}
function ASz(a){Cx(a);}
function Tz(){var a=this;C.call(a);a.rb=0;a.qM=0;a.v_=0;}
function Bd1(){var a=new Tz();AC9(a);return a;}
function AC9(a){J(a);}
var UF=D(Ek);
function BfT(a,b){var c=new UF();A1q(c,a,b);return c;}
function A1q(a,b,c){J3(a,b,c);}
var Oy=D(0);
var I4=D();
function BlY(){var a=new I4();Ti(a);return a;}
function Ti(a){J(a);}
function AHF(a,b,c,d,e){return 0;}
function ANW(a){}
function ZD(){var a=this;I4.call(a);a.wU=null;a.q4=0.0;}
function Bfg(){var a=new ZD();AKE(a);return a;}
function AKE(a){Ti(a);}
function A1S(a,b,c,d,e){a.q4=0.0;return 0;}
function AHW(a,b,c,d,e){return 0;}
function A6_(a,b,c){return 0;}
function A5Y(a,b,c,d){return 0;}
function A2v(a,b,c,d,e){return 0;}
function A9A(a,b,c){var d,e,f,g,h;d=c-b;e=d-a.q4;a.q4=d;f=Bia.bo();g=Bia.bl();h=a.wU;if(f>g)f=g;return h.M$(e/f);}
function AYW(a,b,c,d,e){return 0;}
var Pi=D(ER);
function Bfr(a,b,c,d,e,f){var g=new Pi();A3Z(g,a,b,c,d,e,f);return g;}
function A3Z(a,b,c,d,e,f,g){LO(a,b,c,d,e,f,g);}
function AL5(a,b){var c,d,e,f;c=a.cv.A.data;d=a.cj;e=b*4|0;f=(c[d+e|0]&255)<<24|(a.cv.A.data[(a.cj+e|0)+1|0]&255)<<16|(a.cv.A.data[(a.cj+e|0)+2|0]&255)<<8|a.cv.A.data[(a.cj+e|0)+3|0]&255;return $rt_intBitsToFloat(f);}
function A6o(a,b,c){var d,e,f,g;d=$rt_floatToIntBits(c);e=a.cv.A.data;f=a.cj;g=b*4|0;e[f+g|0]=d>>24<<24>>24;a.cv.A.data[(a.cj+g|0)+1|0]=d>>16<<24>>24;a.cv.A.data[(a.cj+g|0)+2|0]=d>>8<<24>>24;a.cv.A.data[(a.cj+g|0)+3|0]=d<<24>>24;}
var Mv=D(0);
function Hb(){var a=this;C.call(a);a.hi=null;a.mf=null;a.fK=null;a.bu=null;a.px=null;a.po=null;a.qj=null;a.bh=null;a.cZ=null;a.cW=null;a.fe=null;a.hW=null;a.kF=null;}
function AA_(a){J(a);a.hi=Bp();a.mf=Bp();a.fK=Bp();a.px=G_();a.po=G_();a.qj=BaG();a.hW=G_();a.kF=ATC();}
function ADC(a,b,c,d){var e;if(a.bu!==null)G(U(B(477)));e=a.N5(b);if(e>=0){a.mf.k3(e,c);a.fK.k3(e,d);return e;}a.hi.F(b);a.mf.F(c);a.fK.F(d);return a.hi.h-1|0;}
function A_f(a,b,c){return a.I7(b.v7,b,c);}
function ASA(a,b){return a.bf(b,null);}
function AH2(a,b){var c,d;c=a.hi.h;d=0;while(true){if(d>=c)return (-1);if((a.hi.l(d)).z(b))break;d=d+1|0;}return d;}
function AZw(a,b,c){var d,e,f,g,h,i,j,k,l;if(a.bu!==null)G(U(B(478)));if(!b.r$())G(U(b.q0()));a.bh=b;d=a.hi.h;a.bu=Bc(d);e=0;while(e<d){f=a.hi.l(e);g=a.mf.l(e);h=a.fK.l(e);if(g!==null&&!g.L5(a,e,c))a.bu.data[e]=(-1);else{a.bu.data[e]=b.AN(f,0);if(a.bu.data[e]>=0&&h!==null){if(!h.xZ(a,e))a.po.iY(e);else a.px.iY(e);}}if(a.bu.data[e]<0){a.mf.k3(e,null);a.fK.k3(e,null);}e=e+1|0;}a:{if(c!==null){i=c.cS.b7.gS();j=CU(i);e=0;while(true){if(e>=j)break a;k=CB(i,e);l=b.lY(k.et);if(l>=0)a.qj.os(IU(k),l);e=e+1|0;}}}}
function X0(a,b,c){var d,e,f;a.cW=b;a.cZ=c;a.bh.ew();a.fe=null;d=0;while(d<a.px.bS){e=a.fK;f=a.px.b2(d);if(e.l(f)!==null)(a.fK.l(f)).bg(a,f,null,null);d=d+1|0;}}
function WR(a,b){var c,d;a.hW.K();c=CU(b);d=0;while(d<c){a.hW.iY(a.qj.KN(IU(CB(b,d)),(-1)));d=d+1|0;}a.hW.Hz();return a.hW.co;}
function A0D(a,b){if(b.dy.PO()===0.0)return;a.kF.K();if(b.cu!==null)F7(a.kF,b.cu);if(b.da!==null)F7(a.kF,b.da);a.y8(b,a.kF);}
function Vs(a,b,c){var d,e,f;d=0;while(d<a.po.bS){e=a.fK;f=a.po.b2(d);if(e.l(f)!==null)(a.fK.l(f)).bg(a,f,b,c);d=d+1|0;}if(a.fe!==b.cS.b7){if(a.fe!==null)a.fe.gO(a.bh,a.hW.co);a.fe=b.cS.b7;a.fe.ih(a.bh,WR(a,b.cS.b7.gS()));}b.cS.Jx(a.bh,0);}
function WI(a){if(a.fe!==null){a.fe.gO(a.bh,a.hW.co);a.fe=null;}}
function Ie(a,b){return b>=0&&b<a.bu.data.length&&a.bu.data[b]>=0?1:0;}
function B0(a,b){return b>=0&&b<a.bu.data.length?a.bu.data[b]:(-1);}
function D2(a,b,c){if(a.bu.data[b]<0)return 0;a.bh.GU(a.bu.data[b],c);return 1;}
function Q5(a,b,c){if(a.bu.data[b]<0)return 0;a.bh.HV(a.bu.data[b],c);return 1;}
function Ly(a,b,c){if(a.bu.data[b]<0)return 0;a.bh.sp(a.bu.data[b],c);return 1;}
function Fv(a,b,c){if(a.bu.data[b]<0)return 0;a.bh.KI(a.bu.data[b],c);return 1;}
function Fn(a,b,c){if(a.bu.data[b]<0)return 0;a.bh.kc(a.bu.data[b],c);return 1;}
function WC(a,b,c,d){if(a.bu.data[b]<0)return 0;a.bh.Gf(a.bu.data[b],c,d);return 1;}
function DR(a,b,c,d,e,f){if(a.bu.data[b]<0)return 0;a.bh.ys(a.bu.data[b],c,d,e,f);return 1;}
function DV(a,b,c){if(a.bu.data[b]<0)return 0;a.bh.Dl(a.bu.data[b],c);return 1;}
function ZC(a,b,c){if(a.bu.data[b]<0)return 0;a.bh.Dl(a.bu.data[b],a.cZ.d6.gE(c));return 1;}
function RI(){Q.call(this);this.M7=null;}
function Bag(a){var b=new RI();AVw(b,a);return b;}
function AVw(a,b){a.M7=b;Be(a);}
function AEu(a,b){return KK(b);}
function Tp(){D1.call(this);this.zW=0;}
function BdC(a){var b=new Tp();AOh(b,a);return b;}
function AOh(a,b){Kp(a);a.zW=b;}
function AIg(a){return (((I()).a(B(479))).j(a.zW)).b();}
var X6=D(T);
function BdF(){var a=new X6();AD$(a);return a;}
function AD$(a){Bo(a);}
function AHG(a){var b;b=Bam(a);b.be=1;return b;}
var Fg=D(Bx);
var Bjz=null;var Bju=null;var BlZ=null;function Gv(){Gv=N(Fg);A0G();}
function AHY(a,b){var c=new Fg();Z_(c,a,b);return c;}
function Z_(a,b,c){Gv();Cw(a,b,c);}
function A0G(){Bjz=AHY(B(480),0);Bju=AHY(B(481),1);BlZ=H(Fg,[Bjz,Bju]);}
var EG=D(Bx);
var Bl0=null;var Bjv=null;var Bl1=null;function SM(){SM=N(EG);A7B();}
function ANV(a,b){var c=new EG();Ze(c,a,b);return c;}
function Ze(a,b,c){SM();Cw(a,b,c);}
function A7B(){Bl0=ANV(B(482),0);Bjv=ANV(B(483),1);Bl1=H(EG,[Bl0,Bjv]);}
function H0(){BH.call(this);this.mn=0.0;}
var Bl2=Ba;var Bl3=Ba;function ET(){ET=N(H0);AD0();}
function A3p(a,b){var c=new H0();VA(c,a,b);return c;}
function N9(b){ET();return A3p(Bl2,b);}
function VA(a,b,c){ET();Fb(a,b);a.mn=c;}
function APd(a){return A3p(a.dc,a.mn);}
function ASO(a){var b,c;b=F2(a);c=(977*b|0)+G1(a.mn)|0;return c;}
function AD0(){Bl2=BQ(B(484));Bl3=BQ(B(485));}
function Io(){var a=this;C.call(a);a.qX=0;a.qB=0;a.AJ=0;a.Fx=0;a.xo=0;a.D_=0;a.FW=0;a.Np=0;a.NO=0;a.Be=0;}
function Zc(a){J(a);a.qX=(-1);a.qB=(-1);a.AJ=0;a.Fx=0;a.xo=0;a.D_=0;a.FW=0;a.Np=0;a.NO=0;}
var TE=D(B4);
function Bbu(){var a=new TE();A1O(a);return a;}
function A1O(a){E$(a);}
var Rh=D(CN);
var Ni=D(D4);
var Bl4=null;function N3(){N3=N(Ni);A0V();}
function ACv(b,c){var d,e,f,g,h;N3();if(c>=2&&c<=36){if(b!==null&&!b.bN()){a:{d=0;e=0;switch(b.f(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=Ba;while(e<b.i()){g=e+1|0;h=Nn(b.f(e));if(h<0)G(DI((((I()).a(B(6))).a(b)).b()));if(h>=c)G(DI((((((I()).a(B(7))).j(c)).a(B(8))).a(b)).b()));f=CA(Cf(O(c),f),O(h));if(Kt(f,Ba)){if(g==b.i()&&Z(f,Cd(0, 2147483648))&&d)return Cd(0, 2147483648);G(DI((((I()).a(B(9))).a(b)).b()));}e=g;}if(d)f=A37(f);return f;}G(DI(B(10)));}G(DI((((I()).a(B(11))).j(c)).b()));}
function ACc(b){N3();return ACv(b,10);}
function CW(b){var c,d,e;N3();if(Z(b,Ba))return 64;c=0;d=CM(b,32);if(Dx(d,Ba))c=32;else d=b;e=CM(d,16);if(Z(e,Ba))e=d;else c=c|16;d=CM(e,8);if(Z(d,Ba))d=e;else c=c|8;e=CM(d,4);if(Z(e,Ba))e=d;else c=c|4;d=CM(e,2);if(Z(d,Ba))d=e;else c=c|2;if(Dx(CM(d,1),Ba))c=c|1;return (64-c|0)-1|0;}
function Xf(b){var c,d,e;N3();if(Z(b,Ba))return 64;c=0;d=D9(b,32);if(Dx(d,Ba))c=32;else d=b;e=D9(d,16);if(Z(e,Ba))e=d;else c=c|16;d=D9(e,8);if(Z(d,Ba))d=e;else c=c|8;e=D9(d,4);if(Z(e,Ba))e=d;else c=c|4;d=D9(e,2);if(Z(d,Ba))d=e;else c=c|2;if(Dx(D9(d,1),Ba))c=c|1;return (64-c|0)-1|0;}
function A0V(){Bl4=F($rt_longcls());}
var Gu=D(BT);
var Bl5=null;function AMv(){AMv=N(Gu);AIF();}
function Bd6(a){var b=new Gu();Se(b,a);return b;}
function Bl6(){var a=new Gu();HN(a);return a;}
function Se(a,b){AMv();B_(a);}
function HN(a){AMv();B_(a);}
function AIF(){Bl5=Bd6(0);}
var Kw=D(Gu);
var Bl7=null;function A$l(){A$l=N(Kw);A$X();}
function BbE(){var a=new Kw();Y$(a);return a;}
function Bad(a){var b=new Kw();RD(b,a);return b;}
function Y$(a){A$l();HN(a);a.dZ(Tf(),1);}
function RD(a,b){A$l();HN(a);}
function A$X(){Bl7=Bad(0);}
function Tf(){var jsObj=new Bullet.btDbvtBroadphase();return Bullet.getPointer(jsObj);}
var Nf=D(0);
function Rf(){C.call(this);this.zp=null;}
function BeQ(){var a=new Rf();ATj(a);return a;}
function ATj(a){J(a);a.zp=A0U();}
function ALB(a,b,c){AVm(a.zp,$rt_ustr(b),c);}
function A0U(){var soundManager=new SoundManager();soundManager.debugMode=false;return soundManager;}
function AVm(b,c,d){b.setup({url:c,onready:function(){d.onready();},ontimeout:function(status){d.ontimeout();}});}
function Tb(){var a=this;C.call(a);a.lk=null;a.qg=null;a.dp=0;a.Ae=0;}
function A4S(a){var b=new Tb();AK1(b,a);return b;}
function AK1(a,b){J(a);while(b>=a.dp){a.dp=a.dp<<1|1;}a.dp=a.dp<<1|1;a.lk=Bc(a.dp+1|0);a.qg=Bc(a.dp+1|0);a.Ae=b;}
function AKp(a,b,c){var d,e,f;d=0;e=b&a.dp;while(a.lk.data[e]&&a.lk.data[e]!=b){f=d+1|0;d=f&a.dp;f=e+d|0;e=f&a.dp;}a.lk.data[e]=b;a.qg.data[e]=c;}
function A3v(a,b){var c,d,e,f;c=b&a.dp;d=0;while(true){e=a.lk.data[c];if(!e)break;if(e==b)return a.qg.data[c];f=d+1|0;d=f&a.dp;f=c+d|0;c=f&a.dp;}return a.Ae;}
var Hn=D(0);
var QY=D();
function A$2(a,b){return a.Mm(b);}
function AF8(a){return a.O7();}
function G6(){var a=this;C.call(a);a.jW=null;a.zQ=0.0;a.zT=0.0;a.Qj=0.0;a.Qh=0.0;a.n$=0;a.mZ=0;}
function AUS(a){var b=new G6();AV4(b,a);return b;}
function AV4(a,b){J(a);if(b===null)G(W(B(486)));a.jW=b;a.Nb(0,0,b.bo(),b.bl());}
function A7N(a,b,c,d,e){var f,g;f=1.0/a.jW.bo();g=1.0/a.jW.bl();a.Nq(b*f,c*g,(b+d|0)*f,(c+e|0)*g);a.n$=Vx(d);a.mZ=Vx(e);}
function AFu(a,b,c,d,e){var f,g,h,i,j,k,l;f=a.jW.bo();g=a.jW.bl();h=CG(d-b);i=f;a.n$=Dg(h*i);h=CG(e-c);j=g;a.mZ=Dg(h*j);if(a.n$==1&&a.mZ==1){k=0.25/i;b=b+k;d=d-k;l=0.25/j;c=c+l;e=e-l;}a.zQ=b;a.zT=c;a.Qj=d;a.Qh=e;}
function ATb(a){return a.jW;}
function AGL(a){return a.n$;}
function ADJ(a){return a.mZ;}
function Sa(){JH.call(this);this.tf=0.0;}
function A_1(){var a=new Sa();AUK(a);return a;}
function Bce(a){var b=new Sa();UV(b,a);return b;}
function AUK(a){UV(a,Bef());}
function UV(a,b){Tk(a);a.tf=1.0;a.GD(b);}
function AYM(a,b,c,d){a.HJ(0,0,b,c);a.Ki(b*a.tf,c*a.tf);a.PF(d);}
function VQ(){var a=this;C.call(a);a.er=null;a.gL=null;a.cb=0;a.J8=0;}
function Bdc(a,b,c,d){var e=new VQ();APY(e,a,b,c,d);return e;}
function APY(a,b,c,d,e){J(a);a.J8=b;a.er=EW(d,c);a.gL=EW(e,c);}
function AMQ(a,b){a.Nf(b,0,b.cb);}
function AVk(a,b,c,d){var e;if((c+d|0)>b.cb)G(W((((((((I()).a(B(487))).j(c)).a(B(424))).j(d)).a(B(425))).j(b.cb)).b()));e=(a.cb+d|0)-c|0;if(e>=a.er.data.length)a.jJ(Bf(8,e*1.75|0));X(b.er,c,a.er,a.cb,d);X(b.gL,c,a.gL,a.cb,d);a.cb=a.cb+d|0;}
function A3l(a){Hl(a.er,0,a.cb,null);Hl(a.gL,0,a.cb,null);a.cb=0;}
function ASV(a,b){var c,d,e;c=EW((Ck(a.er)).gq(),b);d=c.data;X(a.er,0,c,0,Bq(a.cb,d.length));a.er=c;e=EW((Ck(a.gL)).gq(),b);d=e.data;X(a.gL,0,e,0,Bq(a.cb,d.length));a.gL=e;}
var QF=D(IR);
function BaL(){var a=new QF();A2m(a);return a;}
function A2m(a){TS(a);}
function AJB(a){var b;b=(ZA(a)).f$(1);b.be=1;return b;}
function Q8(){var a=this;C.call(a);a.kh=null;a.gI=null;a.j8=null;a.L_=0;a.FM=0;a.u0=0;}
function Bbv(){var a=new Q8();AGk(a);return a;}
function Bl8(a,b,c,d){var e=new Q8();OL(e,a,b,c,d);return e;}
function Bl9(a,b,c){var d=new Q8();Uj(d,a,b,c);return d;}
function Bl$(a,b,c){var d=new Q8();YA(d,a,b,c);return d;}
function AGk(a){OL(a,Bic.oc(B(488)),Bic.oc(B(489)),0,1);}
function OL(a,b,c,d,e){Uj(a,Bdg(b,d),AUS(ARK(c,0)),e);a.u0=1;}
function Uj(a,b,c,d){var e,f;if(c===null)e=null;else{f=Y(G6,1);f.data[0]=c;e=AEz(f);}YA(a,b,e,d);}
function YA(a,b,c,d){var e,f,g;J(a);a.L_=b.rf;a.kh=b;a.FM=d;if(c!==null&&c.h){a.gI=c;a.u0=0;}else{if(b.hA===null)G(W(B(490)));e=b.hA.data.length;a.gI=DM(e);f=0;while(f<e){g=b.sn===null?Bic.Fp(b.hA.data[f]):Bic.Oj(b.hA.data[f],b.sn.Ox());a.gI.F(AUS(ARK(g,0)));f=f+1|0;}a.u0=1;}a.j8=a.KA();a.HF(b);}
function AT3(a,b){var c,d,e,f,g,h,i,j;c=b.he.data;d=c.length;e=0;while(e<d){a:{f=c[e];if(f!==null){g=f.data;h=g.length;i=0;while(true){if(i>=h)break a;j=g[i];if(j!==null)b.E2(j,a.gI.l(j.jX));i=i+1|0;}}}e=e+1|0;}if(b.iu!==null)b.E2(b.iu,a.gI.l(b.iu.jX));}
function AI7(a,b,c,d,e){var f;a.j8.K();f=a.j8.JC(c,d,e);a.j8.Nt(b);return f;}
function A97(a,b,c,d,e){(a.j8.yN()).hV(b,c,d,e);}
function AQF(a){return a.gI;}
function A9R(a){return BfA(a,a.FM);}
var Gy=D(GO);
var Bl_=null;function AHt(){AHt=N(Gy);A$R();}
function Bgc(a){var b=new Gy();Vh(b,a);return b;}
function Bma(){var a=new Gy();KS(a);return a;}
function Vh(a,b){AHt();Jr(a);}
function KS(a){AHt();Jr(a);}
function A$R(){Bl_=Bgc(0);}
var Hf=D(Gy);
function Bmb(){var a=new Hf();RP(a);return a;}
function RP(a){KS(a);}
var Is=D(Hf);
function Bmc(){var a=new Is();Lr(a);return a;}
function Lr(a){RP(a);}
var LT=D(Is);
var Bmd=null;function AFi(){AFi=N(LT);AIb();}
function Bfp(a){var b=new LT();Sh(b,a);return b;}
function Bbh(a){var b=new LT();AAn(b,a);return b;}
function Sh(a,b){var c;AFi();Lr(a);Fl();c=BgU;Gq(b,c);a.dZ(ZF(c.de()),1);}
function A9I(a,b,c){var d,e,f;Fl();d=BgU;Gq(c,d);e=a.bY;f=d.de();ABH(e,b,f);Wn(d,c);}
function AAn(a,b){AFi();Lr(a);}
function AIb(){Bmd=Bbh(0);}
function ZF(b){var boxHalfExtentsJSObj=Bullet.wrapPointer(b,Bullet.btVector3);var jsObj=new Bullet.btBoxShape(boxHalfExtentsJSObj);return Bullet.getPointer(jsObj);}
function ABH(b,c,d){var jsObj=Bullet.wrapPointer(b,Bullet.btBoxShape);var inertiaJSObj=Bullet.wrapPointer(d,Bullet.btVector3);jsObj.calculateLocalInertia(c,inertiaJSObj);}
function Zg(){var a=this;C.call(a);a.fk=null;a.dY=null;a.cJ=null;a.dz=null;a.ly=0;}
function BdJ(){var a=new Zg();AEi(a);return a;}
function Bf$(a,b){var c=new Zg();AZK(c,a,b);return c;}
function AEi(a){J(a);a.ly=1;}
function AZK(a,b,c){J(a);a.ly=1;a.fk=b;a.dY=c;}
function APf(a,b){b.da=a.dY;b.cS.Cx(a.fk);b.dJ=a.dz;return b;}
function AQn(a){return (BdJ()).Qk(a);}
function A4Y(a,b){var c;a:{a.fk=BfH(b.fk);a.dY=b.dY;a.ly=b.ly;if(b.cJ===null){a.cJ=null;a.dz=null;}else{if(a.cJ!==null)a.cJ.K();else a.cJ=Bdc(1,b.cJ.cb,F(L0),F(Cu));a.cJ.Pe(b.cJ);if(!(a.dz!==null&&a.dz.data.length==a.cJ.cb))a.dz=Y(Cu,a.cJ.cb);c=0;while(true){if(c>=a.dz.data.length)break a;if(a.dz.data[c]===null)a.dz.data[c]=BL();c=c+1|0;}}}return a;}
function TZ(){var a=this;Q.call(a);a.A_=null;a.P0=null;}
function BcU(a,b){var c=new TZ();AT2(c,a,b);return c;}
function AT2(a,b,c){a.P0=b;a.A_=c;Be(a);}
function AId(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.b5^a.A_.eL(c):0;}
function TY(){var a=this;Q.call(a);a.EH=null;a.zK=null;a.JA=null;}
function Bbb(a,b,c){var d=new TY();A4V(d,a,b,c);return d;}
function A4V(a,b,c,d){a.JA=b;a.EH=c;a.zK=d;Be(a);}
function AU_(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.b5^a.EH.eL(c):0;return a.zK.p(b)&&!d?1:0;}
var C7=D(Bx);
var Bme=null;var Bmf=null;var Bmg=null;var Bmh=null;var Bmi=null;var Bmj=null;var Bjw=null;var Bmk=null;function AYt(){AYt=N(C7);AUA();}
function FC(a,b){var c=new C7();Ve(c,a,b);return c;}
function Ve(a,b,c){AYt();Cw(a,b,c);}
function AUA(){Bme=FC(B(105),0);Bmf=FC(B(491),1);Bmg=FC(B(492),2);Bmh=FC(B(493),3);Bmi=FC(B(494),4);Bmj=FC(B(495),5);Bjw=FC(B(496),6);Bmk=H(C7,[Bme,Bmf,Bmg,Bmh,Bmi,Bmj,Bjw]);}
var ABf=D(T);
function BbQ(){var a=new ABf();AWm(a);return a;}
function AWm(a){Bo(a);}
function A4P(a){var b;b=BbX(a);b.be=1;return b;}
var Os=D(0);
var W0=D(Eg);
function Bcq(a,b,c,d){var e=new W0();A33(e,a,b,c,d);return e;}
function A33(a,b,c,d,e){K0(a,b,c,d,e);}
function A7q(a,b,c,d){var e,f,g,h;e=a.gh.jd();f=a.gh.iJ();g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.bv.cg()|0)>d.J())break a;h=a.bv.bH(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.k.e(b,c,d);}if((b+a.bv.cg()|0)>d.J()){d.d5=1;return (-1);}h=a.bv.bH(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function Rc(){Io.call(this);this.Cw=null;}
function BcN(a){var b=new Rc();AEA(b,a);return b;}
function AEA(a,b){var c,d,e,f;Zc(a);c=AZk();d=c.pg();e=A9T();f=d.getElementById($rt_ustr(b));a.Cw=Bat(e,f);T0(new OG);}
function AVa(a){return a.Cw;}
var Lf=D(0);
var Lk=D(0);
function XY(){var a=this;C.call(a);a.kD=0;a.ga=null;a.h1=null;a.x3=0;a.sA=0;a.v5=0.0;a.sy=0;a.r9=0;a.iX=0;}
function BaG(){var a=new XY();ASv(a);return a;}
function Bml(a,b){var c=new XY();AAp(c,a,b);return c;}
function ASv(a){AAp(a,51,0.800000011920929);}
function AAp(a,b,c){var d;J(a);if(c>0.0&&c<1.0){a.v5=c;d=G4(b,c);a.sy=d*c|0;a.iX=d-1|0;a.r9=CW(O(a.iX));a.ga=Bc(d);a.h1=Bc(d);return;}G(W((((I()).a(B(40))).cC(c)).b()));}
function AOo(a,b){return Cp(CM(Cf(O(b),Cd(2135587861, 2654435769)),a.r9));}
function Na(a,b){var c,d,e;c=a.ga;d=a.e7(b);while(true){e=c.data[d];if(!e)return  -(d+1|0)|0;if(e==b)break;d=(d+1|0)&a.iX;}return d;}
function AHS(a,b,c){var d,e;if(!b){a.x3=c;if(!a.sA){a.sA=1;a.kD=a.kD+1|0;}return;}d=Na(a,b);if(d>=0){a.h1.data[d]=c;return;}e= -(d+1|0)|0;a.ga.data[e]=b;a.h1.data[e]=c;e=a.kD+1|0;a.kD=e;if(e>=a.sy)RX(a,a.ga.data.length<<1);}
function Qv(a,b,c){var d,e,f;d=a.ga;e=a.e7(b);while(true){f=d.data;if(!f[e])break;e=(e+1|0)&a.iX;}f[e]=b;a.h1.data[e]=c;}
function ALN(a,b,c){var d;if(!b){if(a.sA)c=a.x3;return c;}d=Na(a,b);if(d>=0)c=a.h1.data[d];return c;}
function RX(a,b){var c,d,e,f,g;a:{c=a.ga.data.length;a.sy=b*a.v5|0;a.iX=b-1|0;a.r9=CW(O(a.iX));d=a.ga;e=a.h1;a.ga=Bc(b);a.h1=Bc(b);if(a.kD>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g)Qv(a,g,e.data[f]);f=f+1|0;}}}}
function XE(){Q.call(this);this.P9=null;}
function BcG(a){var b=new XE();ASZ(b,a);return b;}
function ASZ(a,b){a.P9=b;Be(a);}
function A3I(a,b){return J0(b);}
function PQ(){var a=this;Q.call(a);a.oY=null;a.Ls=null;}
function BdT(a,b){var c=new PQ();AS8(c,a,b);return c;}
function AS8(a,b,c){a.Ls=b;a.oY=c;Be(a);}
function AL4(a,b){return a.bD^a.oY.eL(b);}
function A0C(a){var b,c;b=I();c=a.oY.lb(0);while(c>=0){b.qZ(Eu(c));b.T(124);c=a.oY.lb(c+1|0);}if(b.i()>0)b.E_(b.i()-1|0);return b.b();}
var Vf=D(CH);
function Bca(a,b,c){var d=new Vf();ARj(d,a,b,c);return d;}
function ARj(a,b,c,d){Fd(a,b,c,d);JF();b.Q(Bh$);}
function AYh(a,b,c,d){var e;while(true){e=a.Y.e(b,c,d);if(e<=0)break;b=e;}return a.k.e(b,c,d);}
function T5(){var a=this;C.call(a);a.JR=0;a.J5=Ba;a.sw=null;a.D0=null;a.BN=Ba;a.xx=null;}
function Bd2(a,b,c,d){var e=new T5();ADo(e,a,b,c,d);return e;}
function ADo(a,b,c,d,e){J(a);a.sw=b;a.D0=c;a.BN=d;a.xx=e;}
function CY(){BH.call(this);this.dX=null;}
var Bmm=Ba;var Bmn=Ba;var Bmo=Ba;var Bmp=Ba;var Bmq=Ba;var Bmr=Ba;var Bms=Ba;var Bmt=Ba;function Ce(){Ce=N(CY);A1P();}
function Bmu(a){var b=new CY();Jk(b,a);return b;}
function Bmv(a,b){var c=new CY();JQ(c,a,b);return c;}
function A0e(a,b,c,d,e){var f=new CY();NF(f,a,b,c,d,e);return f;}
function BcO(a){var b=new CY();Z5(b,a);return b;}
function UL(b){Ce();return Z(Br(b,Bmt),Ba)?0:1;}
function KY(b,c,d,e){Ce();return A0e(Bmm,b,c,d,e);}
function Zv(b,c,d,e){Ce();return A0e(Bmn,b,c,d,e);}
function Jk(a,b){Ce();Fb(a,b);a.dX=D3();if(UL(b))return;G(U(B(497)));}
function JQ(a,b,c){Ce();Jk(a,b);if(c!==null)a.dX.eR(c);}
function NF(a,b,c,d,e,f){Ce();Jk(a,b);a.dX.hV(c,d,e,f);}
function Z5(a,b){Ce();JQ(a,b.dc,b.dX);}
function AJs(a){return BcO(a);}
function ASF(a){var b,c;b=F2(a);c=(953*b|0)+a.dX.r0()|0;return c;}
function A1P(){Bmm=BQ(B(498));Bmn=BQ(B(499));Bmo=BQ(B(500));Bmp=BQ(B(501));Bmq=BQ(B(502));Bmr=BQ(B(503));Bms=BQ(B(504));Bmt=BP(BP(BP(BP(BP(BP(Bmo,Bmm),Bmn),Bmp),Bmq),Bmr),Bms);}
function Hh(){var a=this;V.call(a);a.ia=null;a.DJ=0;a.zr=0;}
var Bmw=null;var Bmx=null;function PA(){PA=N(Hh);A38();}
function Bfb(a,b){var c=new Hh();Qj(c,a,b);return c;}
function Qj(a,b,c){PA();BM(a);a.ia=APh();a.DJ=b;a.zr=c;}
function A4m(a,b,c,d,e){var f,g,h,i,j,k;if(d.cu===null){f=b.bh;g=B0(b,c);PA();f.z$(g,Bmw,0,Bmw.data.length);}else{h=d.dy;PA();h.ux(Bmx);Ce();if(Ct(e,Bmr))a.ia.Iz((BA(e,Bmr)).dX);a:{JD();if(Ct(e,BlP)){i=BlP;j=(BA(e,i)).hl;k=a.DJ;while(true){if(k>=j.h)break a;a.ia.Qi((j.l(k)).bk,(j.l(k)).fc);k=k+1|0;}}}b:{A3J();if(Ct(e,Bk9)){j=(BA(e,Bk9)).Eb;k=a.zr;while(true){if(k>=j.h)break b;a.ia.Mo((j.l(k)).bk,(j.l(k)).eD,Bmx,(j.l(k)).dx);k=k+1|0;}}}a.ia.Nc();b.bh.z$(B0(b,c),a.ia.cf,0,a.ia.cf.data.length);}}
function A38(){Bmw=BcC([1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0]);Bmx=S();}
function NX(){var a=this;C.call(a);a.hz=null;a.Co=0;a.sR=null;a.o2=null;a.zS=0;a.G2=0.0;a.G1=0.0;a.vd=null;a.Hj=0.0;a.dw=null;a.dF=null;a.cL=null;a.s5=null;}
var Bmy=null;function BeA(){BeA=N(NX);AMn();}
function BfA(a,b){var c=new NX();ACg(c,a,b);return c;}
function ACg(a,b,c){var d,e,f;BeA();J(a);a.sR=Bp();a.o2=Bp();a.vd=CO(1.0,1.0,1.0,1.0);a.hz=b;a.Co=c;d=b.gI.h;if(!d)G(W(B(505)));a:{a.dw=Y($rt_arraycls($rt_floatcls()),d);a.dF=Bc(d);if(d>1){a.cL=Y(GW,d);e=0;f=a.cL.data.length;while(true){if(e>=f)break a;a.cL.data[e]=G_();e=e+1|0;}}}a.s5=Bc(d);}
function A52(a){return a.vd;}
function AHI(a,b){var c,d,e,f;c=a.hz.Oo();d=0;e=a.dw.data.length;while(d<e){if(a.dF.data[d]>0){f=a.dw.data[d];b.Hv((c.l(d)).Ba(),f,0,a.dF.data[d]);}d=d+1|0;}}
function A5a(a){var b,c;a.G2=0.0;a.G1=0.0;Sp(a.o2,1);a.o2.K();a.sR.K();b=0;c=a.dF.data.length;while(b<c){if(a.cL!==null)a.cL.data[b].K();a.dF.data[b]=0;b=b+1|0;}}
function V2(a,b){var c,d,e,f,g,h,i,j,k,l;a:{if(a.dw.data.length==1){c=0;d=0;e=b.cm.h;while(d<e){c=c+(b.cm.l(d)).bi.h|0;d=d+1|0;}NR(a,0,c);}else{f=a.s5;g=f.data;d=0;e=g.length;while(d<e){g[d]=0;d=d+1|0;}d=0;h=b.cm.h;while(d<h){i=(b.cm.l(d)).bi;j=0;k=i.h;while(j<k){l=(i.l(j)).jX;g[l]=g[l]+1|0;j=j+1|0;}d=d+1|0;}d=0;while(true){if(d>=e)break a;NR(a,d,g[d]);d=d+1|0;}}}}
function NR(a,b,c){var d,e,f;if(a.cL!==null&&c>a.cL.data[b].co.data.length)a.cL.data[b].O8(c-a.cL.data[b].bS|0);d=a.dF.data[b]+(c*20|0)|0;e=a.dw.data[b];if(e===null)a.dw.data[b]=Ca(d);else if(e.data.length<d){f=Ca(d);X(e,0,f,0,a.dF.data[b]);a.dw.data[b]=f;}}
function Sc(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=a.hz.gI.h;if(a.dw.data.length<e){f=Y($rt_arraycls($rt_floatcls()),e);X(a.dw,0,f,0,a.dw.data.length);a.dw=f;g=Bc(e);X(a.dF,0,g,0,a.dF.data.length);a.dF=g;h=Y(GW,e);i=0;if(a.cL!==null){i=a.cL.data.length;X(a.cL,0,h,0,a.cL.data.length);}while(i<e){h.data[i]=G_();i=i+1|0;}a.cL=h;a.s5=Bc(e);}a.sR.F(b);V2(a,b);i=0;j=b.cm.h;while(i<j){k=b.cm.l(i);l=k.bi;m=k.bn;n=k.j2.ny();o=c+k.dh;p=d+k.iL;q=0;r=l.h;while(q<r){s=l.l(q);o=o+m.oa(q);Tt(a,s,o,p,n);q=q+1|0;}i=i+
1|0;}Bv();a.Hj=Bko;}
function Tt(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;f=a.hz.kh.eQ;g=a.hz.kh.z_;h=c+b.dr*f;i=d+b.jg*g;j=b.ct*f;k=b.cN*g;l=b.vD;m=b.Bo;n=b.p9;o=b.tk;if(a.Co){h=Dg(h);i=Dg(i);j=Dg(j);k=Dg(k);}p=h+j;q=i+k;r=b.jX;s=a.dF.data[r];t=a.dF.data;t[r]=t[r]+20|0;if(a.cL!==null){u=a.cL.data[r];v=a.zS;a.zS=v+1|0;u.iY(v);}w=a.dw.data[r];t=w.data;x=s+1|0;t[s]=h;v=x+1|0;t[x]=i;x=v+1|0;t[v]=e;v=x+1|0;t[x]=l;y=v+1|0;t[v]=n;x=y+1|0;t[y]=h;v=x+1|0;t[x]=q;x=v+1|0;t[v]=e;v=x+1|0;t[x]=l;x=v+1|0;t[v]=o;v=x+1|0;t[x]=p;x
=v+1|0;t[v]=q;v=x+1|0;t[x]=e;x=v+1|0;t[v]=m;v=x+1|0;t[x]=o;x=v+1|0;t[v]=p;y=x+1|0;t[x]=i;v=y+1|0;t[y]=e;x=v+1|0;t[v]=m;t[x]=n;}
function AT_(a,b,c,d){return a.Ir(b,c,d,0,b.i(),0.0,8,0,null);}
function A$1(a,b,c,d,e,f,g,h,i,j){var k;k=To(F(EI));a.o2.F(k);k.pJ(a.hz,b,e,f,a.vd,g,h,i,j);a.HU(k,c,d);return k;}
function AGy(a,b,c,d){Sc(a,b,c,d+a.hz.kh.l4);}
function AMn(){Bmy=CO(1.0,1.0,1.0,1.0);}
function PN(){var a=this;Q.call(a);a.Ce=null;a.Hi=null;}
function BeJ(a,b){var c=new PN();A68(c,a,b);return c;}
function A68(a,b,c){a.Hi=b;a.Ce=c;Be(a);}
function AGG(a,b){return a.Ce.p(b);}
function PO(){var a=this;Q.call(a);a.w8=null;a.Qu=null;}
function Be2(a,b){var c=new PO();AM$(c,a,b);return c;}
function AM$(a,b,c){a.Qu=b;a.w8=c;Be(a);}
function A0i(a,b){return a.w8.p(b)?0:1;}
function PP(){var a=this;Q.call(a);a.y3=0;a.ET=null;a.zN=null;a.Gj=null;}
function Bcc(a,b,c,d){var e=new PP();AGR(e,a,b,c,d);return e;}
function AGR(a,b,c,d,e){a.Gj=b;a.y3=c;a.ET=d;a.zN=e;Be(a);}
function A_D(a,b){return !(a.y3^a.ET.p(b))&&!a.zN.p(b)?0:1;}
var MD=D(0);
var YI=D();
function Wv(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.Br.data;f=b.CM;b.CM=f+1|0;g=A5j(e[f]);h=(g%2|0)!=1?0:1;c=c+Cg(d,g/2|0)|0;d=d*46|0;if(!h)break;}return c;}
function Pc(b){var c,d;c=Wv(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function A5j(b){if(b<34)return b-32|0;if(b>=92)return (b-32|0)-2|0;return (b-32|0)-1|0;}
function P8(){var a=this;Q.call(a);a.E7=0;a.vI=null;a.vU=null;a.G9=null;}
function Bge(a,b,c,d){var e=new P8();A0c(e,a,b,c,d);return e;}
function A0c(a,b,c,d,e){a.G9=b;a.E7=c;a.vI=d;a.vU=e;Be(a);}
function AJt(a,b){return !(a.E7^a.vI.p(b))&&!a.vU.p(b)?1:0;}
function PR(){var a=this;Q.call(a);a.El=0;a.A9=null;a.xQ=null;a.Ma=null;}
function Bga(a,b,c,d){var e=new PR();AY9(e,a,b,c,d);return e;}
function AY9(a,b,c,d,e){a.Ma=b;a.El=c;a.A9=d;a.xQ=e;Be(a);}
function AW2(a,b){return a.El^a.A9.p(b)&&a.xQ.p(b)?1:0;}
function ON(){BJ.call(this);this.mc=null;}
function Bgb(a){var b=new ON();A8E(b,a);return b;}
function A8E(a,b){var c,d;C2(a);c=I();d=0;while(d<b.i()){c.T(Dr(DC(b.f(d))));d=d+1|0;}a.mc=c.b();a.bO=c.i();}
function AMz(a,b,c){var d;d=0;while(true){if(d>=a.mc.i())return a.mc.i();if(a.mc.f(d)!=Dr(DC(c.f(b+d|0))))break;d=d+1|0;}return (-1);}
function AKc(a){return (((I()).a(B(506))).a(a.mc)).b();}
function PS(){var a=this;Q.call(a);a.DX=0;a.AI=null;a.Ei=null;a.MK=null;}
function Bb8(a,b,c,d){var e=new PS();ADY(e,a,b,c,d);return e;}
function ADY(a,b,c,d,e){a.MK=b;a.DX=c;a.AI=d;a.Ei=e;Be(a);}
function AO9(a,b){return a.DX^a.AI.p(b)&&a.Ei.p(b)?0:1;}
function PT(){var a=this;Q.call(a);a.Fh=null;a.yr=0;a.FS=null;}
function A_5(a,b,c){var d=new PT();AOa(d,a,b,c);return d;}
function AOa(a,b,c,d){a.FS=b;a.Fh=c;a.yr=d;Be(a);}
function AK6(a,b){return a.Fh.p(b)&&a.yr^a.FS.bc.eL(b)?1:0;}
function Uf(){Q.call(this);this.Kg=null;}
function Bf9(a){var b=new Uf();AUq(b,a);return b;}
function AUq(a,b){a.Kg=b;Be(a);}
function AKT(a,b){return RL(b);}
function HA(){DQ.call(this);this.fc=null;}
function AJG(){var a=new HA();A10(a);return a;}
function A10(a){HW(a);a.fc=S();}
function AEE(a,b){return a.OJ(b.bk,b.fc);}
function AGg(a,b,c){if(b!==null)a.bk.eR(b);if(c!==null)(a.fc.M(c)).bU();return a;}
function AP6(a,b,c,d,e,f,g){a.bk.hV(b,c,d,1.0);(a.fc.I(e,f,g)).bU();return a;}
function AEq(a,b){return b instanceof HA&&a.EE(b)?1:0;}
function A43(a,b){var c;a:{b:{if(b!==null){if(b===a)break b;if(a.bk.z(b.bk)&&a.fc.z(b.fc))break b;}c=0;break a;}c=1;}return c;}
function PM(){var a=this;Q.call(a);a.D6=null;a.C3=0;a.yp=null;}
function Bf_(a,b,c){var d=new PM();A3w(d,a,b,c);return d;}
function A3w(a,b,c,d){a.yp=b;a.D6=c;a.C3=d;Be(a);}
function A8y(a,b){return a.D6.p(b)&&a.C3^a.yp.bc.eL(b)?0:1;}
var Z4=D(CN);
var LF=D();
var Bmz=null;function ACy(){ACy=N(LF);AD4();}
function Zt(b,c,d,e){var f;ACy();a:{b:{f=Bmz;RS();if(f===BmA){if(Bia.bo()!=Bia.w$())break b;f=Bia;if(f.bl()!=Bia.EJ())break b;}Bid.oK(b,c,d,e);break a;}Bid.oK(L9(b),Ma(c),L9(d),Ma(e));}}
function L9(b){ACy();return Cg(b,Bia.w$())/Bia.bo()|0;}
function Ma(b){ACy();return Cg(b,Bia.EJ())/Bia.bl()|0;}
function AD4(){RS();Bmz=BmA;}
var ZE=D(ES);
function Gf(a){var b=new ZE();ALg(b,a);return b;}
function I(){var a=new ZE();A$g(a);return a;}
function ALg(a,b){JT(a,b);}
function A$g(a){J6(a);}
function A3Y(a,b){Y2(a,b);return a;}
function ADH(a,b){Lj(a,b);return a;}
function ANC(a,b){PH(a,b);return a;}
function A0M(a,b){ACe(a,b);return a;}
function AJD(a,b){TL(a,b);return a;}
function ADv(a,b){Nb(a,b);return a;}
function AGT(a,b,c,d){Oq(a,b,c,d);return a;}
function A7Q(a,b){ND(a,b);return a;}
function AWH(a,b){Tg(a,b);return a;}
function AZ0(a,b,c){RM(a,b,c);return a;}
function A8b(a,b,c){Z3(a,b,c);return a;}
function A6F(a,b,c,d,e){Mo(a,b,c,d,e);return a;}
function A$G(a,b,c){QJ(a,b,c);return a;}
function A4y(a,b,c){OH(a,b,c);return a;}
function AN8(a,b,c){Ow(a,b,c);return a;}
function ASt(a,b,c){ACd(a,b,c);return a;}
function AQ_(a,b){ABY(a,b);return a;}
function A2z(a,b,c){NW(a,b,c);return a;}
function A9L(a,b,c){return Xa(a,b,c);}
function A2F(a,b){ABK(a,b);}
function AH5(a,b,c,d,e){Yr(a,b,c,d,e);}
function A6M(a,b,c){return AA8(a,b,c);}
function A2r(a,b,c,d,e){return a.Le(b,c,d,e);}
function AHw(a,b,c,d){return a.I4(b,c,d);}
function AWO(a){return M3(a);}
function AFI(a){return Nv(a);}
function ALO(a,b){Mx(a,b);}
function ALX(a,b,c){return a.Gs(b,c);}
function A3V(a,b,c){return a.OM(b,c);}
function A3k(a,b,c){return a.KS(b,c);}
function A0Z(a,b,c){return a.P5(b,c);}
function AGe(a,b,c){return a.J6(b,c);}
function AT5(a,b,c){return a.GB(b,c);}
function QX(){var a=this;BB.call(a);a.og=null;a.py=null;}
function Lp(a,b){var c=new QX();ATk(c,a,b);return c;}
function ATk(a,b,c){CP(a);a.og=b;a.py=c;}
function AEO(a,b,c,d){var e;e=a.og.e(b,c,d);if(e<0)e=a.py.e(b,c,d);if(e>=0)return e;return (-1);}
function A5m(a,b){a.k=b;a.py.Q(b);a.og.Q(b);}
function A54(a){return (((((I()).a(B(507))).dD(a.og)).a(B(508))).dD(a.py)).b();}
function AFQ(a,b){return 1;}
function AFm(a,b){return 1;}
var ABO=D(Bm);
function A_$(){var a=new ABO();ATO(a);return a;}
function ATO(a){Cx(a);}
var O9=D();
function Be_(){var a=new O9();ALI(a);return a;}
function ALI(a){J(a);}
var Gt=D(0);
var O8=D();
function Ba2(){var a=new O8();AXf(a);return a;}
function AXf(a){J(a);}
var Mc=D(0);
function EU(){var a=this;C.call(a);a.hJ=null;a.hb=null;}
function BmB(a,b){var c=new EU();L5(c,a,b);return c;}
function L5(a,b,c){J(a);a.hJ=b;a.hb=c;}
function MR(){var a=this;EU.call(a);a.pD=null;a.yC=0;}
function BeZ(a,b){var c=new MR();AO4(c,a,b);return c;}
function AO4(a,b,c){L5(a,b,c);a.yC=b.bp();}
function AE9(a){return a.hJ.bp();}
function ARW(a,b,c){return a.yC==b.bp()&&a.hJ.z(b)?1:0;}
var EZ=D(Cy);
function Bd7(){var a=new EZ();A8F(a);return a;}
function A8F(a){Et(a,0);}
function ASf(a,b,c,d){if(d.Cv()!=1&&b!=d.J())return (-1);d.LP();d.uY(0,b);return b;}
function AXt(a){return B(509);}
function AAc(){var a=this;C.call(a);a.sk=null;a.iO=null;a.kk=null;a.ey=null;a.g$=null;a.lO=null;}
function BfB(a){var b=new AAc();A2R(b,a);return b;}
function A2R(a,b){J(a);a.sk=DH();a.iO=DH();a.kk=DH();a.ey=DH();a.g$=DH();a.lO=b;}
function A0s(a,b){(CS()).D7(1,(((I()).a(a.lO)).a(b)).b(),A_R(a,b));}
function A1I(a,b,c,d){var e,f;e=CS();f=(((I()).a(a.lO)).a(c)).b();H5();e.v1(b,f,BjQ,null,BbF(a,d,c));}
function AVN(a,b,c,d,e,f){(CS()).v1(b,(((I()).a(a.lO)).a(c)).b(),d,e,Bcy(a,f,d,c));}
function A7Z(a,b,c){(CS()).nd((((I()).a(a.lO)).a(b)).b(),c);}
function AYE(a,b,c,d){a:{BdR();switch(BjT.data[BC(b)]){case 1:a.ey.x(c,d);break a;case 2:break;case 3:a.g$.x(c,d);break a;case 4:a.kk.x(c,d);break a;case 5:a.sk.x(c,null);break a;default:break a;}a.iO.x(c,d);}}
function AM6(a,b){var c,$$je;if(a.ey.c1(b)){a:{try{c=XA((a.ey.W(b)).x2(B(379)));}catch($$e){$$je=R($$e);if($$je instanceof GL){break a;}else{throw $$e;}}return c;}return null;}if(a.iO.c1(b))return XA(Cj(1));if(a.g$.c1(b))return PZ(a.g$.W(b));if(!a.kk.c1(b))return null;return XA(Cj(1));}
function AJv(a,b){var c,d;a:{if(!a.ey.c1(b)&&!a.iO.c1(b)&&!a.g$.c1(b)&&!a.kk.c1(b)){c=a.sk;if(!c.c1(b)){d=0;break a;}}d=1;}return d;}
function A6T(a,b){return a.ey.c1(b);}
function AW_(a,b){var c,$$je;if(a.ey.c1(b)){a:{try{c=O(((a.ey.W(b)).x2(B(379))).data.length);}catch($$e){$$je=R($$e);if($$je instanceof GL){break a;}else{throw $$e;}}return c;}return O(((a.ey.W(b)).QM()).data.length);}if(a.iO.c1(b))return O(1);if(a.g$.c1(b))return O(N8(a.g$.W(b)));if(!a.kk.c1(b))return Ba;return O(1);}
var TO=D(BJ);
function FG(a){var b=new TO();A3R(b,a);return b;}
function A3R(a,b){VP(a,b);a.bO=0;}
function A7D(a,b,c){return 0;}
function AZU(a,b,c,d){var e,f,g,h,i;e=d.J();f=d.dI();while(true){g=B9(b,e);if(g>0)return (-1);if(g<0){h=c.f(b);if(BG(h)&&b>f){i=c.f(b-1|0);if(BY(i)){b=b+1|0;continue;}}}if(a.k.e(b,c,d)>=0)break;b=b+1|0;}return b;}
function AXX(a,b,c,d,e){var f,g,h,i;f=e.J();g=e.dI();while(true){if(c<b)return (-1);if(c<f){h=d.f(c);if(BG(h)&&c>g){i=d.f(c-1|0);if(BY(i)){c=c+(-1)|0;continue;}}}if(a.k.e(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AJ0(a){return B(510);}
function AVC(a,b){return 0;}
function J2(){BH.call(this);this.Ia=0;}
var BmC=Ba;function AGE(){AGE=N(J2);A8B();}
function A8B(){BmC=BQ(B(511));}
function Vn(){var a=this;C.call(a);a.dv=null;a.gB=null;a.su=0;a.bT=0;}
function T6(a,b){var c=new Vn();A9a(c,a,b);return c;}
function BmD(a,b,c){var d=new Vn();UD(d,a,b,c);return d;}
function A9a(a,b,c){UD(a,b,c,0);}
function UD(a,b,c,d){J(a);if(b===null)G(IK());a.dv=b;a.gB=c;a.su=d;a.bT=0;}
function A_u(a){var b,c;if(a.gB===null)G(IK());a:{b=a.dv.i();if(a.bT<b){if(a.su)return 1;c=a.bT;while(true){if(c>=b)break a;if(a.gB.eH(a.dv.f(c),0)==(-1))return 1;c=c+1|0;}}}return 0;}
function AE$(a){var b,c,d,e,f;if(a.gB===null)G(IK());b=a.bT;c=a.dv.i();if(b<c){if(a.su){if(a.gB.eH(a.dv.f(a.bT),0)>=0){d=a.dv;e=a.bT;a.bT=e+1|0;return Zn(d.f(e));}a.bT=a.bT+1|0;while(a.bT<c){if(a.gB.eH(a.dv.f(a.bT),0)>=0)return a.dv.ce(b,a.bT);a.bT=a.bT+1|0;}return a.dv.ei(b);}while(true){f=B9(b,c);if(f>=0)break;if(a.gB.eH(a.dv.f(b),0)<0)break;b=b+1|0;}a.bT=b;if(f<0){a.bT=a.bT+1|0;while(a.bT<c){if(a.gB.eH(a.dv.f(a.bT),0)>=0)return a.dv.ce(b,a.bT);a.bT=a.bT+1|0;}return a.dv.ei(b);}}G(Ban());}
function J_(){var a=this;C.call(a);a.dg=null;a.cQ=0;a.m4=Ba;}
function A0S(a){var b=new J_();A3P(b,a);return b;}
function A3P(a,b){var c,d,e,f;c=b.data;J(a);a.m4=O(-1);d=c.length;if(!d)G(W(B(512)));e=Y(Fc,d);f=0;while(f<d){e.data[f]=c[f];f=f+1|0;}a.dg=e;a.cQ=V5(a);}
function D0(a,b){var c,d;c=CU(a);d=0;while(d<c){if((CB(a,d)).fm==b)return CB(a,d);d=d+1|0;}return null;}
function V5(a){var b,c,d;b=0;c=0;while(c<a.dg.data.length){d=a.dg.data[c];d.cV=b;b=b+QD(d)|0;c=c+1|0;}return b;}
function CU(a){return a.dg.data.length;}
function CB(a,b){return a.dg.data[b];}
function NV(a,b){var c,d;if(b===a)return 1;if(!(b instanceof J_))return 0;c=b;if(a.dg.data.length!=c.dg.data.length)return 0;d=0;while(d<a.dg.data.length){if(!KH(a.dg.data[d],c.dg.data[d]))return 0;d=d+1|0;}return 1;}
function IM(a){var b,c;if(Z(a.m4,O(-1))){b=Ba;c=0;while(c<a.dg.data.length){b=BP(b,O(a.dg.data[c].fm));c=c+1|0;}a.m4=b;}return a.m4;}
function NQ(a){return BP(IM(a),D9(O(a.dg.data.length),32));}
function KB(){var a=this;G6.call(a);a.NV=0.0;a.NT=0.0;a.OR=0;a.MJ=0;}
function ACK(){var a=this;C.call(a);a.kN=null;a.sM=null;a.fp=null;a.ou=null;a.rG=0;a.DN=null;a.vZ=null;}
function BmE(a,b,c){var d=new ACK();TQ(d,a,b,c);return d;}
function Be3(){var a=new ACK();A$w(a);return a;}
function TQ(a,b,c,d){J(a);a.sM=Bdz();a.fp=Bp();if(d===null)d=A_T();a.vZ=d;a.rG=b!==null?0:1;if(b===null)b=Bdv(Bcp(1,1));a.ou=b;if(c===null)c=Be1();a.DN=c;}
function A$w(a){TQ(a,null,null,null);}
function A4f(a,b){if(a.kN!==null)G(U(B(513)));a.kN=b;if(a.rG)a.ou.g6();}
function A1C(a){var b,c,d;a.vZ.Hq(a.kN,a.fp);b=null;c=0;while(c<a.fp.h){d=a.fp.l(c);if(b!==d.kO){if(b!==null)b.bd();b=d.kO;b.C9(a.kN,a.ou);}b.NR(d);c=c+1|0;}if(b!==null)b.bd();a.sM.ep();a.fp.K();}
function A7z(a){a.ep();if(a.rG)a.ou.bd();a.kN=null;}
function ARr(a,b,c){var d,e;d=a.fp.h;b.IA(a.fp,a.sM);while(d<a.fp.h){e=a.fp.l(d);e.cu=c;e.kO=a.DN.JW(e);d=d+1|0;}}
var Re=D(ER);
function A_L(a,b,c,d,e,f){var g=new Re();AVp(g,a,b,c,d,e,f);return g;}
function AVp(a,b,c,d,e,f,g){LO(a,b,c,d,e,f,g);}
function AUM(a,b){var c,d,e,f;c=a.cv.A.data;d=a.cj;e=b*4|0;f=c[d+e|0]&255|(a.cv.A.data[(a.cj+e|0)+1|0]&255)<<8|(a.cv.A.data[(a.cj+e|0)+2|0]&255)<<16|(a.cv.A.data[(a.cj+e|0)+3|0]&255)<<24;return $rt_intBitsToFloat(f);}
function A2L(a,b,c){var d,e,f,g;d=$rt_floatToIntBits(c);e=a.cv.A.data;f=a.cj;g=b*4|0;e[f+g|0]=d<<24>>24;a.cv.A.data[(a.cj+g|0)+1|0]=d>>8<<24>>24;a.cv.A.data[(a.cj+g|0)+2|0]=d>>16<<24>>24;a.cv.A.data[(a.cj+g|0)+3|0]=d>>24<<24>>24;}
function VM(){var a=this;C.call(a);a.CR=null;a.eY=null;a.uN=null;a.kW=null;a.uU=0.0;a.rA=Ba;a.sZ=Ba;a.oT=0.0;a.kI=0.0;a.pl=0;a.gg=null;}
function Baq(a){var b=new VM();AUB(b,a);return b;}
function AUB(a,b){var c;J(a);a.uU=0.0;a.rA=Eb();a.sZ=O(-1);a.oT=0.0;a.kI=0.0;c=El();a.uN=b;a.eY=c.ES();a.CR=c.Oa(b);a.gg=c.L9();a.kW=BdI(a.CR);a.kW.oK(0,0,a.eY.width,a.eY.height);a.kW.v8(0.0,0.0,0.0,1.0);a.kW.ED(16384);if(!(b.qX<0&&b.qB<0))a.wC(b.qX,b.qB);}
function AUf(a){var b;b=Eb();a.oT=Ry(D7(b,a.rA))/1000.0;a.rA=b;a.kI=a.kI+a.oT;a.pl=a.pl+1|0;if(a.kI>1.0){a.uU=a.pl;a.kI=0.0;a.pl=0;}}
function ASK(a){return a.kW;}
function AL9(a){return a.eY.width;}
function AQY(a){return a.eY.height;}
function A5J(a){return a.eY.width;}
function A42(a){return a.eY.height;}
function A$7(a){return a.oT;}
function AU4(a){return a.uU|0;}
function AWh(a){var b;b=!a.uN.Be?1.0:a.gg.wD();return Bcb(a,a.gg.Gh()*b|0,a.gg.QB()*b|0,60,8);}
function AHc(a,b){var c;c=a.FB();if(b.o1!=c.o1&&b.n0!=c.n0)return 0;return a.gg.QG(a,a.eY,b.o1,b.n0);}
function ALw(a,b,c){var d,e,f;if(a.vN())a.gg.PU();if(b>0&&c>0)a.x6(b,c);else{d=(El()).hu();e=d.Q0();f=d.Lb();a.x6(e,f);}return 1;}
function AFL(a,b,c){var d,e,f;d=!a.uN.Be?1.0:a.gg.wD();e=a.eY;f=b*d|0;e.width=f;e=a.eY;f=c*d|0;e.height=f;}
function AEc(a,b){return 0;}
function A27(a){return a.gg.NB();}
var Ys=D(FL);
function BmF(a){var b=new Ys();AGl(b,a);return b;}
function AGl(a,b){KF(a,b);}
var TB=D(T);
function Bfw(){var a=new TB();AFa(a);return a;}
function AFa(a){Bo(a);}
function AH7(a){return (CR()).bF(0,127);}
function EI(){var a=this;C.call(a);a.cm=null;a.pI=0.0;a.nA=0.0;}
var BmG=null;var BmH=null;var BmI=null;function DJ(){DJ=N(EI);AYF();}
function BmJ(){var a=new EI();ACh(a);return a;}
function BmK(a,b){var c=new EI();PJ(c,a,b);return c;}
function BmL(a,b,c,d,e,f){var g=new EI();S9(g,a,b,c,d,e,f);return g;}
function BmM(a,b,c,d,e,f,g,h,i){var j=new EI();AA2(j,a,b,c,d,e,f,g,h,i);return j;}
function ACh(a){DJ();J(a);a.cm=DM(1);}
function PJ(a,b,c){DJ();J(a);a.cm=DM(1);a.Mt(b,c);}
function S9(a,b,c,d,e,f,g){DJ();J(a);a.cm=DM(1);a.OZ(b,c,d,e,f,g);}
function AA2(a,b,c,d,e,f,g,h,i,j){DJ();J(a);a.cm=DM(1);a.pJ(b,c,d,e,f,g,h,i,j);}
function A7y(a,b,c){a.pJ(b,c,0,c.i(),b.yN(),0.0,8,0,null);}
function A3u(a,b,c,d,e,f,g){a.pJ(b,c,0,c.i(),d,e,f,g,null);}
function AG0(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by;k=a.cm;DJ();BmG.Ef(k);k.K();l=b.kh;if(d==e){a.pI=0.0;a.nA=l.e5;return;}if(j!==null)i=1;else if(g<=l.vr*3.0)i=0;m=l.Du;if(m){n=1;o=BmI.h;while(n<o){BmH.jr(BmI.l(n));n=n+1|0;}BmI.K();BmI.F(f);}p=0.0;q=0.0;r=l.kj;s=null;t=d;u=f;a:{b:while(true){c:{v=(-1);w=0;if(d==e){if(t==e)break b;v=e;}else{x=d+1|0;switch(c.f(d)){case 10:v=x-1|0;w=1;d=x;break c;case 91:if(!m){d=x;break c;}y
=Pz(a,c,x,e,BmH);if(y<0){if(y==(-2)){d=x+1|0;continue b;}d=x;break c;}v=x-1|0;d=x+(y+1|0)|0;f=BmI.qr();break c;default:}d=x;}}if(v!=(-1)){d:{z=B9(v,t);if(z){ba=BmG.eT();ba.j2.eR(u);l.FO(ba,c,t,v,s);if(!ba.bi.h)BmG.jr(ba);else{if(s!==null)p=p-(s.op?s.gz*l.eQ:(s.ct+s.dr|0)*l.eQ-l.hU);s=ba.bi.qr();ba.dh=p;ba.iL=q;if(!(!w&&v!=e))EP(a,l,ba);k.F(ba);o=ba.bn.Z;bb=ba.bn.R;if(i&&o){bc=bb.data;p=p+bc[0]+bc[1];n=2;while(n<o){bd=ba.bi;be=n-1|0;bf=bd.l(be);bg=(bf.ct+bf.dr|0)*l.eQ-l.hU;if(p+bg-9.999999747378752E-5<=g)p=p
+bb.data[n];else{if(j!==null){ABn(a,l,ba,g,j,n,BmG);break a;}q=q+r;s=null;bh=l.KJ(ba.bi,n);if(!(!bh&&ba.dh===0.0)&&bh<ba.bi.h)be=bh;if(be){ba=QQ(a,l,ba,be,n);if(ba===null){p=0.0;break d;}k.F(ba);}else{bi=ba.bi.h;e:{while(true){if(be>=bi)break e;if(!l.jt((ba.bi.l(be)).e0&65535))break;be=be+1|0;}}if(be>0){ba.bi.lW(0,be-1|0);ba.bn.lW(1,be);}bb.data[0]=( -(ba.bi.Fq()).dr|0)*l.eQ-l.i0;if(k.h>1){bj=k.l(k.h-2|0);bk=bj.bi.h-1|0;f:{while(true){if(bk<=0)break f;if(!l.jt((bj.bi.l(bk)).e0&65535))break;bk=bk+(-1)|0;}}bj.bi.h6(bk
+1|0);bj.bn.h6(bk+2|0);EP(a,l,bj);}}o=ba.bn.Z;bb=ba.bn.R;bc=bb.data;p=bc[0];if(o>1)p=p+bc[1];ba.dh=0.0;ba.iL=q;n=1;}n=n+1|0;}}else if(m){n=0;while(n<o){p=p+bb.data[n];n=n+1|0;}}}}}if(w){p=0.0;q=z?q+r:q+r*l.xl;s=null;}t=d;u=f;}}}a.nA=l.e5+CG(q);bl=0.0;bm=k.P;bn=k.h;n=0;while(n<bn){bo=bm.data[n];bb=bo.bn.R;bc=bb.data;bp=bc[0];bq=0.0;br=bo.bi.P;bs=0;bt=bo.bi.h;while(bs<bt){bf=br.data[bs];bg=(bf.ct+bf.dr|0)*l.eQ-l.hU;bq=Ei(bq,bp+bg);bs=bs+1|0;bp=bp+bc[bs];}bo.j7=Ei(bp,bq);bl=Ei(bl,bo.dh+bo.j7);n=n+1|0;}g:{a.pI=
bl;if(!(h&8)){bu=!(h&1)?0:1;bv=0.0;bw=(-2.147483648E9);bx=0;n=0;while(n<bn){bc=bm.data;bo=bc[n];if(bo.iL===bw)bv=Ei(bv,bo.dh+bo.j7);else{bw=bo.iL;by=g-bv;if(bu)by=by/2.0;while(bx<n){x=bx+1|0;bd=bc[bx];bd.dh=bd.dh+by;bx=x;}bv=bo.dh+bo.j7;}n=n+1|0;}by=g-bv;if(bu)by=by/2.0;while(true){if(bx>=bn)break g;bc=bm.data;x=bx+1|0;bd=bc[bx];bd.dh=bd.dh+by;bx=x;}}}}
function ABn(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=g.eT();b.FO(h,e,0,e.i(),null);i=0.0;if(h.bn.Z>0){EP(a,b,h);j=h.bn.R;k=1;l=h.bn.Z;while(k<l){i=i+j.data[k];k=k+1|0;}}m=d-i;n=0;o=c.dh;j=c.bn.R;a:{while(true){if(n>=c.bn.Z)break a;p=j.data[n];o=o+p;if(o>m)break;n=n+1|0;}}if(n<=1){c.bi.K();c.bn.K();c.bn.GO(h.bn);}else{c.bi.h6(n-1|0);c.bn.h6(n);EP(a,b,c);if(h.bn.Z>0)c.bn.xX(h.bn,1,h.bn.Z-1|0);}c.bi.qz(h.bi);g.jr(h);}
function QQ(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=c.bi;g=c.bi.h;h=c.bn;i=d;a:{while(true){if(i<=0)break a;if(!b.jt((f.l(i-1|0)).e0&65535))break;i=i+(-1)|0;}}b:{while(true){j=B9(d,g);if(j>=0)break b;if(!b.jt((f.l(d)).e0&65535))break;d=d+1|0;}}k=null;if(j>=0){f.h6(i);h.h6(i+1|0);}else{DJ();k=BmG.eT();k.j2.eR(c.j2);l=k.bi;l.Jw(f,0,i);f.lW(0,d-1|0);c.bi=l;k.bi=f;m=k.bn;m.xX(h,0,i+1|0);h.lW(1,d);h.R.data[0]=( -(f.Fq()).dr|0)*b.eQ-b.i0;c.bn=m;k.bn=h;}if(i)EP(a,b,c);else{DJ();BmG.jr(c);a.cm.vp();}return k;}
function EP(a,b,c){var d,e;d=c.bi.qr();if(d.op)return;e=(d.ct+d.dr|0)*b.eQ-b.hU;c.bn.R.data[c.bn.Z-1|0]=e;}
function Pz(a,b,c,d,e){var f,g,h,i,j,k,l,m;if(c==d)return (-1);switch(b.f(c)){case 35:f=0;g=c+1|0;a:{while(true){if(g>=d)break a;h=b.f(g);if(h==93)break;if(h>=48&&h<=57)f=(f*16|0)+(h-48|0)|0;else if(h>=97&&h<=102)f=(f*16|0)+(h-87|0)|0;else{if(h<65)break a;if(h>70)break a;f=(f*16|0)+(h-55|0)|0;}g=g+1|0;}if(g>=(c+2|0)&&g<=(c+9|0)){i=g-c|0;if(i<=7){j=0;k=9-i|0;while(j<k){f=f<<4;j=j+1|0;}f=f|255;}l=e.eT();DJ();BmI.F(l);If(l,f);return i;}}return (-1);case 91:break;case 93:DJ();if(BmI.h>1)e.jr(BmI.vp());return 0;default:g
=c+1|0;while(g<d){h=b.f(g);if(h==93){m=Qf((b.d_(c,g)).b());if(m===null)return (-1);l=e.eT();DJ();BmI.F(l);l.eR(m);return g-c|0;}g=g+1|0;}return (-1);}return (-2);}
function A8t(a){(Go(F(Hi))).Ef(a.cm);a.cm.K();a.pI=0.0;a.nA=0.0;}
function AN$(a){var b,c,d;if(!a.cm.h)return B(101);b=Gf(128);b.cC(a.pI);b.T(120);b.cC(a.nA);b.T(10);c=0;d=a.cm.h;while(c<d){b.a((a.cm.l(c)).b());b.T(10);c=c+1|0;}b.uw(b.i()-1|0);return b.b();}
function AYF(){BmG=Go(F(Hi));BmH=Go(F(Bi));BmI=DM(4);}
var ABW=D(Ej);
function AJ7(a){var b=new ABW();AEV(b,a);return b;}
function AEV(a,b){M6(a,NE(b));}
function Pt(){var a=this;EO.call(a);a.uM=null;a.u8=null;a.FC=null;a.c8=null;a.B2=null;a.eo=null;a.pU=0;a.u4=0;}
function BmN(a,b){var c=new Pt();QA(c,a,b);return c;}
function Bdx(a){var b=new Pt();ADs(b,a);return b;}
function BmO(a,b){var c=new Pt();AAE(c,a,b);return c;}
function QA(a,b,c){var d,e;d=c.lK();Di();e=BgK;e=Oc(d,e);d=BgK;e=Le(e,d);AAE(a,b,e);}
function ADs(a,b){Hx();QA(a,b,Bkb);}
function AAE(a,b,c){Lh(a);a.FC=Cj(8192);a.c8=Hu(a.FC);a.B2=BW(1024);a.eo=La(a.B2);a.uM=b;a.u8=c;a.eo.oP(BD(a.eo));a.c8.f5(BD(a.c8));}
function A8q(a){a.uM.fQ();}
function AKm(a,b,c,d){var e,f;if(a.u4&&!Cb(a.eo))return (-1);e=0;a:{while(d>0){f=Bq(d,Bb(a.eo));a.eo.rj(b,c+e|0,f);d=d-f|0;e=e+f|0;if(!Cb(a.eo)&&!ACi(a))break a;}}return e;}
function ACi(a){if(a.u4)return 0;a.eo.JK();a:{while(true){if(!Cb(a.c8)&&!AAJ(a))break a;if(!(IX(a.u8,a.c8,a.eo,a.pU)).h5())continue;else break;}}if(!Cb(a.c8)&&a.pU&&(KV(a.u8,a.eo)).jK())a.u4=1;K$(a.eo);return 1;}
function AAJ(a){var b;if(a.pU)return 0;a.c8.Qz();a:{while(true){if(!Cb(a.c8))break a;b=a.uM.ru(HI(a.c8),B8(a.c8),Bb(a.c8));if(b==(-1)){a.pU=1;break a;}a.c8.f5(B8(a.c8)+b|0);if(!b)break;}}Jv(a.c8);return 1;}
var Fa=D(Bx);
var BmA=null;var BmP=null;var BmQ=null;function RS(){RS=N(Fa);AFl();}
function A1W(a,b){var c=new Fa();Q6(c,a,b);return c;}
function Q6(a,b,c){RS();Cw(a,b,c);}
function AFl(){BmA=A1W(B(514),0);BmP=A1W(B(515),1);BmQ=H(Fa,[BmA,BmP]);}
var YZ=D();
function AS2(b,c,d){if(b===null)return null;return Bed(b,APy(b),c,d);}
function VZ(){var a=this;C.call(a);a.pX=0;a.E6=0;a.Cz=0;a.Ds=0;a.lJ=null;}
function Bdh(a){var b=new VZ();AOR(b,a);return b;}
function AOR(a,b){a.lJ=b;J(a);a.E6=a.lJ.gR;a.Cz=a.lJ.df();a.Ds=(-1);}
function A4k(a){return a.pX>=a.Cz?0:1;}
function A8N(a){var b,c;P_(a);a.Ds=a.pX;b=a.lJ;c=a.pX;a.pX=c+1|0;return b.l(c);}
function P_(a){if(a.E6>=a.lJ.gR)return;G(A_$());}
function L0(){var a=this;C.call(a);a.gn=null;a.o0=0;a.uV=0;a.nj=null;a.pi=null;a.oS=null;a.hq=null;a.fI=null;a.d9=null;a.fU=null;a.dm=null;}
function AGi(){var a=new L0();A$P(a);return a;}
function A$P(a){J(a);a.o0=1;a.nj=S();a.pi=AAK(0.0,0.0,0.0,1.0);a.oS=Cl(1.0,1.0,1.0);a.hq=BL();a.fI=BL();a.d9=DM(2);a.dm=DM(2);}
function A8C(a){if(!a.uV)a.hq.Gn(a.nj,a.pi,a.oS);return a.hq;}
function APX(a){if(a.o0&&a.fU!==null)(a.fI.ch(a.fU.fI)).hC(a.hq);else a.fI.ch(a.hq);return a.fI;}
function AFH(a,b){var c,d;a:{a.PJ();a.Ow();if(b){c=a.dm.bZ();while(true){if(!c.bC())break a;d=c.bz();d.Dh(1);}}}}
function A6V(a,b){var c,d,e,f,g;c=a.d9.bZ();while(c.bC()){d=c.bz();if(d.cJ===null)continue;if(d.dz===null)continue;if(d.cJ.cb!=d.dz.data.length)continue;e=d.cJ.cb;f=0;while(f<e){(d.dz.data[f].ch(d.cJ.er.data[f].fI)).hC(d.cJ.gL.data[f]);f=f+1|0;}}a:{if(b){c=a.dm.bZ();while(true){if(!c.bC())break a;g=c.bz();g.y2(1);}}}}
function AUz(a){if(a.fU!==null){a.fU.FF(a);a.fU=null;}}
function A6r(a){return a.dm.h;}
function AL3(a,b){return a.dm.l(b);}
function AEr(a,b){return a.M6((-1),b);}
function AOT(a,b,c){var d;d=a;while(true){if(d===null){d=c.xj();if(d!==null&&!d.FF(c))G(U(B(516)));if(b>=0&&b<a.dm.h)a.dm.K$(b,c);else{b=a.dm.h;a.dm.F(c);}c.fU=a;return b;}if(d===c)break;d=d.xj();}G(U(B(517)));}
function A11(a,b){if(!a.dm.Lr(b,1))return 0;b.fU=null;return 1;}
function A3m(a){return a.dm;}
function A9y(a){return a.fU;}
function AZI(a){return (AGi()).ML(a);}
function A65(a,b){var c,d,e;a.F9();a.gn=b.gn;a.uV=b.uV;a.o0=b.o0;a.nj.M(b.nj);a.pi.Pd(b.pi);a.oS.M(b.oS);a.hq.ch(b.hq);a.fI.ch(b.fI);a.d9.K();c=b.d9.bZ();while(c.bC()){d=c.bz();a.d9.F(d.My());}a.dm.K();c=(b.rC()).fs();while(c.bC()){e=c.bz();a.Ie(e.u6());}return a;}
function ZL(b,c,d,e){var f,g,h,i;a:{f=b.h;if(!e){g=0;while(true){if(g>=f)break a;h=b.l(g);if(h.gn.z(c))break;g=g+1|0;}return h;}g=0;while(true){if(g>=f)break a;i=b.l(g);if(i.gn.Gt(c))break;g=g+1|0;}return i;}b:{if(d){g=0;while(true){if(g>=f)break b;i=ZL((b.l(g)).dm,c,1,e);if(i!==null)break;g=g+1|0;}return i;}}return null;}
var LN=D(0);
function Hy(){var a=this;C.call(a);a.A4=0;a.f_=null;a.D8=null;a.qA=null;a.k5=null;a.l8=null;a.A3=null;a.kv=null;a.jz=null;a.lP=null;a.mi=null;a.s4=null;a.EP=null;a.xK=null;a.x9=null;a.ob=null;a.Fu=null;a.qt=Ba;a.kU=Ba;a.tP=0;a.kb=0;a.J0=null;a.lD=null;a.q$=0;a.pz=null;}
var BmR=null;var BmS=null;function BaX(){BaX=N(Hy);AYT();}
function Bft(){var a=new Hy();VE(a);return a;}
function VE(a){BaX();J(a);a.k5=Bp();a.l8=Bp();a.tP=1;a.kb=0;a.J0=BL();a.q$=500;a.pz=S();}
function AZC(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;XT();a.A4=Bullet.MyClassHelper.prototype.getBTVersion();a.s4=Bbz();a.EP=BaR(a.s4);a.xK=BbE();a.x9=BbV();a.mi=A_4(a.EP,a.xK,a.x9,a.s4);b=Cl(0.0,(-10.0),0.0);a.mi.HK(b);a.f_=BcV();a.D8=Bce(a.f_);a.qA=A_1();a.kv=Be3();a.lP=Bc_();c=a.lP;d=new CY;Ce();NF(d,Bmr,0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);Ep(c,d);e=(AJG()).xL(1.0,1.0,1.0,(-1.0),(-1.0),(-0.4000000059604645));a.lP.GF(e);a.jz=Bc6();a.f_.cp.q=43.0;a.f_.cp.o=2.0;a.f_.MY(0.0,0.0,0.0);f
=Bci();g=1.0;h=1.0;i=1.0;j=1.0;k=Beh(Bic.Fp(B(518)));P6();k.OO(Blt,Blt);l=new F4;m=H(BH,[Z0(k),N9(4.0)]);NG(l,m);a.Fu=f.Cp(1.0,1.0,1.0,l,O(25));n=60.0;o=0.30000001192092896;p=60.0;q=f.Cp(n,o,p,BdM(H(BH,[KY(g,h,i,j),Zv(g,h,i,j),N9(16.0)])),O(9));a.A3=a.v0(B(519),0,0.0,0.0,(-2.0),0.0,0.0,0.0,0.0,q,n,o,p,0.0,0.0,1.0);a.Ft();a.ob=Bbv();a.ob.Gv(1.0,0.0,0.0,1.0);a.kU=Eb();a.lD=BaF(a.f_);a.lD.oX=0;a.lD.q1=0;a.lD.uQ=0;BhW.JX(Bfn(H(Fp,[a,a.lD])));}
function A8h(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r,s,t,u,v,w;r=BfG(k);s=KY(o,p,q,1.0);Ep(r.jE.l(0),s);r.eC.LE(e,f,g);t=r.eC;H2();t.vq(BmT,h);r.eC.vq(BmU,i);r.eC.vq(BmV,j);u=Bah(r.eC);v=Bfp(a.pz.I(l/2.0,m/2.0,n/2.0));v.NA(d,a.pz.LV());w=BfZ(d,u,v,a.pz);if(c)a.l8.F(w);w.J2(0.699999988079071);a.mi.Ix(w);return r;}
function AZ$(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=0;while(b<a.l8.h){c=a.l8.l(b);a.mi.Ha(c);c.iz();b=b+1|0;}a.l8.K();a.k5.K();d=0;b=0;while(b<a.q$){e=HF((-5.0),5.0);f=HF(19.0,24.0);g=HF((-5.0),5.0);h=IL(0,360);i=IL(0,360);j=IL(0,360);k=1.0;l=1.0;m=1.0;n=a.v0((((I()).a(B(520))).j(d)).b(),1,0.4000000059604645,e,f,g,h,i,j,a.Fu,1.0,1.0,1.0,k,l,m);d=d+1|0;a.k5.F(n);b=b+1|0;}}
function AC6(a){var b,c,d,e,f,g,h;a.f_.f7();Bid.v8(0.8999999761581421,0.8999999761581421,0.8999999761581421,1.0);Bid.ED(16640);if(!a.kb){a.qt=Eb();if(Hr(D7(a.qt,a.kU),O(8000))){a.tP=a.tP?0:1;a.Ft();a.kU=Eb();}a.mi.IM(Bia.Fd());}a.kv.HN(a.f_);b=0;while(b<a.k5.h){c=a.k5.l(b);a.kv.C2(c,a.lP);b=b+1|0;}a.kv.C2(a.A3,a.lP);a.kv.bd();a.jz.g6();d=a.ob;e=a.jz;f=((((((((I()).a(B(521))).j(Bia.Ng())).a(B(522))).j(a.q$)).a(B(523))).j(a.A4)).a(B(524))).b();g=Bia;h=g.bl()-14|0;d.yg(e,f,30.0,h);a.ob.yg(a.jz,B(525),20.0,30.0);a.jz.bd();}
function A8r(a,b,c){var d;a.D8.wG(b,c,0);a.qA.wG(b,c,1);d=a.qA.NN();d.f7();a.jz.PD(d.eK);}
function AOc(a,b){if(b==62){a.kb=a.kb?0:1;if(!a.kb)a.kU=CA(Eb(),D7(a.kU,a.qt));}else if(b==66){if(!Bia.vN())Bia.Mg(Bia.FB());else Bia.wC(0,0);}return 0;}
function A4w(a,b){return 0;}
function AW3(a,b){return 0;}
function A7Y(a,b,c,d,e){return 0;}
function A1N(a,b,c,d,e){return 0;}
function APq(a,b,c,d){return 0;}
function AXG(a,b,c){return 0;}
function AMR(a,b,c){return 0;}
function AYT(){BmR=S();BmS=S();}
function VI(){var a=this;E8.call(a);a.uj=0;a.pd=0;}
function Be5(a,b){var c=new VI();AKH(c,a,b);return c;}
function AKH(a,b,c){Mg(a);a.uj=b;a.pd=c;}
function A0B(a){return a.uj;}
function A83(a){return a.pd;}
function A4G(a){return ((((((I()).a(B(526))).j(a.uj)).a(B(23))).a(a.pd==2147483647?B(101):(ABL(a.pd)).b())).a(B(527))).b();}
var W4=D(V);
function BfN(){var a=new W4();AJq(a);return a;}
function AJq(a){BM(a);}
function ATo(a,b,c,d,e){var f,g,h,i;f=b.cZ.d6;B1();g=BmW;h=(BA(e,g)).d3;i=f.gE(h);DV(b,c,i);}
var W1=D(V);
function Be0(){var a=new W1();A8S(a);return a;}
function A8S(a){BM(a);}
function AYd(a,b,c,d,e){var f;B1();f=BA(e,BmW);DR(b,c,f.eP,f.eO,f.e_,f.fa);}
function VD(){Q.call(this);this.N9=null;}
function Bdf(a){var b=new VD();AQQ(b,a);return b;}
function AQQ(a,b){a.N9=b;Be(a);}
function AWw(a,b){return Vq(b);}
var W9=D(V);
function Bbn(){var a=new W9();AK7(a);return a;}
function AK7(a){BM(a);}
function A$r(a,b,c,d,e){var f;B1();f=BA(e,BmX);DR(b,c,f.eP,f.eO,f.e_,f.fa);}
var W5=D(V);
function BbJ(){var a=new W5();AVb(a);return a;}
function AVb(a){BM(a);}
function AN4(a,b,c,d,e){var f,g,h,i;f=b.cZ.d6;B1();g=BmY;h=(BA(e,g)).d3;i=f.gE(h);DV(b,c,i);}
var W3=D(V);
function BaV(){var a=new W3();A7U(a);return a;}
function A7U(a){BM(a);}
function A21(a,b,c,d,e){Ce();Fv(b,c,(BA(e,Bmq)).dX);}
var W8=D(V);
function Bbq(){var a=new W8();AXg(a);return a;}
function AXg(a){BM(a);}
function APL(a,b,c,d,e){var f,g,h,i;f=b.cZ.d6;B1();g=BmX;h=(BA(e,g)).d3;i=f.gE(h);DV(b,c,i);}
var Ta=D();
function Bee(){var a=new Ta();A36(a);return a;}
function A36(a){J(a);}
function AY_(a,b){var c;c=b.yA();c.nd(B(528),Bbk(a,c));}
function Po(a,b){b.Nw(1,B(529),Bdm(a));}
function AIr(b,c){Po(b,c);}
function AWb(b,c){AK2(b,BS(c,"onBulletPhysicsLoaded"));}
function AK2(b,c){(BulletLib({wasmBinary:b,async:false})).then(function(BulletLib){c();window.Bullet=BulletLib;console.log("test");});}
var Sk=D();
function Bcs(){var a=new Sk();AUX(a);return a;}
function AUX(a){J(a);}
function A8_(a,b){if(b<=0)G(CK());return a.xH()*b|0;}
function AE8(a){return a.xH();}
function AZM(a){return Math.random();}
var Nq=D(0);
var Lc=D(GU);
var BmZ=null;function AGD(){AGD=N(Lc);A$u();}
function BbV(){var a=new Lc();R_(a);return a;}
function A_K(a){var b=new Lc();ACl(b,a);return b;}
function R_(a){AGD();Iy(a);a.dZ(AAy(),1);}
function ACl(a,b){AGD();Iy(a);}
function A$u(){BmZ=A_K(0);}
function AAy(){var jsObj=new Bullet.btSequentialImpulseConstraintSolver();return Bullet.getPointer(jsObj);}
var XI=D();
var Ss=D(Da);
function BbY(a){var b=new Ss();A2G(b,a);return b;}
function A2G(a,b){GE(a,b,0.3333333432674408,0.5);}
function A91(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(h.dO(2))break a;Bj();i=BgN;break a;}n=k+1|0;o=j[k];if(!ED(a,o)){c=n+(-2)|0;i=BV(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|o&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(h.dO(3))break a;Bj();i=BgN;break a;}n=k+1|0;o=j[k];k=n+1|0;p=j[n];if(!ED(a,o))break b;if(!ED(a,p))break b;q
=((l&15)<<12|(o&63)<<6|p&63)&65535;if(Jz(q)){c=k+(-3)|0;i=BV(3);break a;}j=e.data;m=f+1|0;j[f]=q;}else{if((l&248)!=240){c=k+(-1)|0;i=BV(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(h.dO(4))break a;Bj();i=BgN;break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.ef(2))break a;Bj();i=BgM;break a;}n=k+1|0;o=j[k];m=n+1|0;p=j[n];k=m+1|0;r=j[m];if(!ED(a,o))break c;if(!ED(a,p))break c;if(!ED(a,r))break c;j=e.data;s=(l&7)<<18|(o&63)<<12|(p&63)<<6|r&63;n=f+1|0;j[f]=FB(s);m=n+1|0;j[n]=Fi(s);}c=k;f=m;}break a;}c=k+(-3)|0;i=BV(1);break a;}c
=k+(-3)|0;i=BV(1);}h.em(c);h.dR(f);return i;}
function ED(a,b){return (b&192)!=128?0:1;}
function AA$(){var a=this;C.call(a);a.CF=null;a.e3=null;}
function Bfc(a,b){var c=new AA$();ADO(c,a,b);return c;}
function ADO(a,b,c){J(a);a.e3=c;a.CF=b;}
function Wp(a){return a.CF;}
function N8(a){return a.e3.length;}
function Rj(a,b){return a.e3[b];}
function PZ(a){return Bgf(a);}
function SC(a){var b,c,d,e,f,g;b=a.e3.length;c=B(530);d=Gf(((b*4|0)/3|0)+2|0);e=0;while(e<b){f=b-e|0;if(f>=3){g=(((a.e3[e]&255)<<16)+((a.e3[e+1|0]&255)<<8)|0)+(a.e3[e+2|0]&255)|0;d.T(c.f(g>>18&63));d.T(c.f(g>>12&63));d.T(c.f(g>>6&63));d.T(c.f(g&63));}else if(f<2){g=(a.e3[e]&255)<<16;d.T(c.f(g>>18&63));d.T(c.f(g>>12&63));d.a(B(531));}else{g=((a.e3[e]&255)<<16)+((a.e3[e+1|0]&255)<<8)|0;d.T(c.f(g>>18&63));d.T(c.f(g>>12&63));d.T(c.f(g>>6&63));d.a(B(532));}e=e+3|0;}return d.b();}
var AC0=D(CF);
function Bb3(a,b,c){var d=new AC0();APB(d,a,b,c);return d;}
function APB(a,b,c,d){E4(a,b,c,d);}
function AEl(a,b,c,d){var e;a:{while(true){if((b+a.bv.cg()|0)>d.J())break a;e=a.bv.bH(b,c);if(e<1)break;b=b+e|0;}}return a.k.e(b,c,d);}
function AAO(){var a=this;C.call(a);a.rN=null;a.EI=null;a.z9=0;a.qy=0;}
function BbP(a,b){var c=new AAO();A4v(c,a,b);return c;}
function A4v(a,b,c){J(a);a.rN=b;a.EI=c;}
function A4p(a){return Cb(a.rN);}
function A1B(a,b){return Bb(a.rN)<b?0:1;}
function AW0(a,b){return Bb(a.EI)<b?0:1;}
function A80(a,b){a.z9=b;}
function A6J(a,b){a.qy=b;}
function PG(){Q.call(this);this.K0=null;}
function BaE(a){var b=new PG();AMN(b,a);return b;}
function AMN(a,b){a.K0=b;Be(a);}
function AOv(a,b){return Fx(b);}
var JS=D(0);
var RJ=D();
function BfC(){var a=new RJ();AWR(a);return a;}
function AWR(a){J(a);}
var Xb=D(V);
function Bf7(){var a=new Xb();ALs(a);return a;}
function ALs(a){BM(a);}
function AQV(a,b,c,d,e){var f;B1();f=BA(e,Bm0);DR(b,c,f.eP,f.eO,f.e_,f.fa);}
var Li=D(Dn);
function Bf1(){var a=new Li();A2Q(a);return a;}
function A2Q(a){Jt(a);}
var W$=D(V);
function Baj(){var a=new W$();A7n(a);return a;}
function A7n(a){BM(a);}
function A$5(a,b,c,d,e){var f,g,h;ABD();if(Ct(e,BjB)){f=b.cZ.d6;g=BjB;h=(BA(e,g)).IK;DV(b,c,f.gE(h));}}
var W7=D(V);
function Bei(){var a=new W7();ATG(a);return a;}
function ATG(a){BM(a);}
function AWi(a,b,c,d,e){var f;B1();f=BA(e,BmY);DR(b,c,f.eP,f.eO,f.e_,f.fa);}
var W_=D(V);
function Bfm(){var a=new W_();AW1(a);return a;}
function AW1(a){BM(a);}
function A1h(a,b,c,d,e){var f,g,h,i;f=b.cZ.d6;B1();g=Bm0;h=(BA(e,g)).d3;i=f.gE(h);DV(b,c,i);}
function Ps(){Q.call(this);this.Kf=null;}
function Bak(a){var b=new Ps();A$L(b,a);return b;}
function A$L(a,b){a.Kf=b;Be(a);}
function ASB(a,b){return Ud(b);}
var JU=D(0);
function Sq(){var a=this;C.call(a);a.kE=null;a.tg=null;a.wP=null;}
function AZk(){var a=new Sq();AJO(a);return a;}
function AJO(a){J(a);a.kE=window;a.wP=Ba9();}
function A6j(a){var b;b=a.kE.document;return b;}
function A7$(a,b){a.tg=b;requestAnimationFrame(BS(a,"onAnimationFrame"));}
function AZ4(a,b){var c;c=a.tg;a.tg=null;c.fd();}
function A56(a){return a.wP;}
function ATU(a){var b;b=a.kE.location;return b;}
function AY$(a){return a.kE.document.documentElement.clientWidth;}
function AXl(a){return a.kE.document.documentElement.clientHeight;}
function A5G(a,b){a.Kj(b);}
var Yq=D(CF);
function BfF(a,b,c){var d=new Yq();AUg(d,a,b,c);return d;}
function AUg(a,b,c,d){E4(a,b,c,d);}
function AOD(a,b,c,d){var e;while(true){e=a.k.e(b,c,d);if(e>=0)break;if((b+a.bv.cg()|0)<=d.J()){e=a.bv.bH(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var X$=D();
function EW(b,c){return Lt(b,c);}
function Zz(){var a=this;C.call(a);a.DT=null;a.wi=0.0;a.mV=null;}
function BfX(){var a=new Zz();ARy(a);return a;}
function ARy(a){J(a);a.mV=Bp();}
var SD=D(Da);
function Bac(a){var b=new SD();AO3(b,a);return b;}
function AO3(a,b){GE(a,b,1.0,1.0);}
function AIL(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;while(c<d&&f<g){j=e.data;k=b.data;l=c+1|0;m=k[c]&255;n=f+1|0;j[f]=m&65535;c=l;f=n;}h.em(c);h.dR(f);return i;}
function HT(){var a=this;C.call(a);a.fb=null;a.cc=null;a.tv=0;a.jR=0;a.hR=null;a.mw=0;a.yP=null;}
var Bm1=null;function Kk(){Kk=N(HT);ATM();}
function Bes(a,b,c,d){var e=new HT();Yc(e,a,b,c,d);return e;}
function Bm2(a,b,c,d,e){var f=new HT();M4(f,a,b,c,d,e);return f;}
function Bm3(a,b,c,d,e){var f=new HT();Om(f,a,b,c,d,e);return f;}
function Yc(a,b,c,d,e){Kk();J(a);a.tv=1;a.mw=0;a.yP=S();a.fb=Zr(a,b,c,e);a.cc=A0K(b,d);a.jR=0;KU(BgQ,a);}
function Zr(a,b,c,d){if(Bif===null)return A3d(b,c,d);return A2y(b,c,d);}
function M4(a,b,c,d,e,f){Kk();Om(a,b,c,d,e,A0S(f));}
function Om(a,b,c,d,e,f){Kk();a:{b:{J(a);a.tv=1;a.mw=0;a.yP=S();BeT();switch(BlT.data[BC(b)]){case 1:break;case 2:a.fb=BfW(c,d,f);a.cc=A$W(c,e);a.jR=0;break a;case 3:a.fb=A2y(c,d,f);a.cc=A$W(c,e);a.jR=0;break a;case 4:break b;default:break b;}a.fb=A3d(c,d,f);a.cc=A0K(c,e);a.jR=0;break a;}a.fb=Bcn(d,f);a.cc=Bcz(e);a.jR=1;}KU(BgQ,a);}
function APD(a,b,c,d){a.fb.up(b,c,d);return a;}
function AGp(a,b){var c;c=b.data;a.cc.uA(b,0,c.length);return a;}
function AKs(a,b,c,d){a.cc.uA(b,c,d);return a;}
function ASp(a){return a.fb.uL();}
function A8a(a){return a.cc.ne();}
function AHf(a,b){a.ih(b,null);}
function AQG(a,b,c){a.fb.ih(b,c);if(a.hR!==null&&a.hR.Aa()>0)a.hR.ih(b,c);if(a.cc.l1()>0)a.cc.ew();}
function A7I(a,b){a.gO(b,null);}
function AED(a,b,c){a.fb.gO(b,c);if(a.hR!==null&&a.hR.Aa()>0)a.hR.gO(b,c);if(a.cc.l1()>0)a.cc.Ed();}
function AUe(a,b,c,d,e){a.Dd(b,c,d,e,a.tv);}
function A3W(a,b,c,d,e,f){var g,h,i,j,k,l,m;if(!e)return;if(f)a.Kw(b);if(a.jR){if(a.cc.l1()<=0)Bie.xa(c,d,e);else{g=a.cc.uk();h=B8(g);i=BD(g);g.c0(d);g.cl(d+e|0);Bie.Nr(c,e,5123,g);g.c0(h);g.cl(i);}}else{j=0;if(a.mw)j=a.hR.Aa();if(a.cc.l1()<=0){if(a.mw&&j>0)Bif.XI(c,d,e,j);else Bie.xa(c,d,e);}else{if((e+d|0)>a.cc.ne()){k=new KJ;l=(((((I()).a(B(533))).j(e)).a(B(534))).j(d)).a(B(535));m=a.cc;QC(k,((l.j(m.ne())).a(B(24))).b());G(k);}if(a.mw&&j>0)Bif.Tw(c,e,5123,d*2|0,j);else Bie.O4(c,e,5123,d*2|0);}}if(f)a.JU(b);}
function AYl(a){return a.fb.jI();}
function ALr(a){return a.cc.uk();}
function KU(b,c){var d;Kk();d=Bm1.W(b);if(d===null)d=Bp();d.F(c);Bm1.x(b,d);}
function ATM(){Bm1=C6();}
function Nu(){var a=this;EU.call(a);a.pq=0;a.e9=null;}
function Bcd(a,b){var c=new Nu();AO6(c,a,b);return c;}
function AO6(a,b,c){L5(a,b,null);a.pq=c;}
var FU=D(BT);
var Bm4=null;function ATc(){ATc=N(FU);A8L();}
function BcP(a){var b=new FU();X2(b,a);return b;}
function Bm5(){var a=new FU();Jp(a);return a;}
function X2(a,b){ATc();B_(a);}
function Jp(a){ATc();B_(a);}
function A8L(){Bm4=BcP(0);}
var Wi=D();
function G4(b,c){var d;if(b<0)G(W((((I()).a(B(536))).j(b)).b()));d=IW(Bf(2,AYS(b/c)|0));if(d<=1073741824)return d;G(W((((I()).a(B(537))).j(b)).b()));}
var AB0=D(Bt);
function Bck(){var a=new AB0();AKP(a);return a;}
function AKP(a){Co(a);}
function A5f(a,b,c,d){var e;e=!d.lH()?d.J():c.i();if(b<e)return (-1);d.d5=1;d.PP=1;return a.k.e(b,c,d);}
function AUs(a,b){return 0;}
function AJl(a){return B(538);}
function AAH(){var a=this;C.call(a);a.ta=0;a.gt=null;a.hD=null;a.wV=0.0;a.ts=0;a.u9=0;a.jV=0;}
function Gr(){var a=new AAH();A2T(a);return a;}
function Bm6(a,b){var c=new AAH();YG(c,a,b);return c;}
function A2T(a){YG(a,51,0.800000011920929);}
function YG(a,b,c){var d;J(a);if(c>0.0&&c<1.0){a.wV=c;d=G4(b,c);a.ts=d*c|0;a.jV=d-1|0;a.u9=CW(O(a.jV));a.gt=Y(C,d);a.hD=Bc(d);return;}G(W((((I()).a(B(40))).cC(c)).b()));}
function AML(a,b){return Cp(CM(Cf(O(b.bp()),Cd(2135587861, 2654435769)),a.u9));}
function AYk(a,b){var c,d,e;if(b===null)G(W(B(458)));c=a.gt;d=a.kp(b);while(true){e=c.data[d];if(e===null)return  -(d+1|0)|0;if(e.z(b))break;d=(d+1|0)&a.jV;}return d;}
function AQH(a,b,c){var d,e;d=a.j6(b);if(d>=0){a.hD.data[d]=c;return;}e= -(d+1|0)|0;a.gt.data[e]=b;a.hD.data[e]=c;e=a.ta+1|0;a.ta=e;if(e>=a.ts)TT(a,a.gt.data.length<<1);}
function Y8(a,b,c){var d,e,f;d=a.gt;e=a.kp(b);while(true){f=d.data;if(f[e]===null)break;e=(e+1|0)&a.jV;}f[e]=b;a.hD.data[e]=c;}
function AXn(a,b,c){var d;d=a.j6(b);if(d>=0)c=a.hD.data[d];return c;}
function TT(a,b){var c,d,e,f,g;a:{c=a.gt.data.length;a.ts=b*a.wV|0;a.jV=b-1|0;a.u9=CW(O(a.jV));d=a.gt;e=a.hD;a.gt=Y(C,b);a.hD=Bc(b);if(a.ta>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g!==null)Y8(a,g,e.data[f]);f=f+1|0;}}}}
var TA=D(T);
function A_N(){var a=new TA();AK9(a);return a;}
function AK9(a){Bo(a);}
function ARh(a){return (CR()).bF(65,90);}
function Ft(){var a=this;CT.call(a);a.bI=0;a.A=null;a.hh=null;}
function V1(a,b,c,d,e,f){FJ(a,c);Ev();a.hh=Bh4;a.bI=b;a.A=d;a.C=e;a.bb=f;}
function FV(b){if(b>=0)return A2N(b,1);G(W((((I()).a(B(400))).j(b)).b()));}
function RK(b){if(b>=0)return A2N(b,0);G(W((((I()).a(B(400))).j(b)).b()));}
function Y_(b,c,d){return BdV(0,b.data.length,b,c,c+d|0,0,0);}
function Hu(b){return Y_(b,0,b.data.length);}
function AYw(a,b,c,d){var e,f,g,h,i,j;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bg((((((I()).a(B(539))).j(g)).a(B(402))).j(f)).b()));if(Bb(a)<d)G(UA());if(d<0)G(Bg(((((I()).a(B(403))).j(d)).a(B(404))).b()));h=a.C+a.bI|0;i=0;while(i<d){g=c+1|0;j=a.A.data;f=h+1|0;e[c]=j[h];i=i+1|0;c=g;h=f;}a.C=a.C+d|0;return a;}}e=b.data;G(Bg(((((((I()).a(B(405))).j(c)).a(B(64))).j(e.length)).a(B(24))).b()));}
function AOz(a,b){return a.z0(b,0,b.data.length);}
function A9o(a,b,c,d){var e,f,g,h,i,j;if(!d)return a;if(a.b_())G(C8());if(Bb(a)<d)G(F0());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bg((((((I()).a(B(540))).j(g)).a(B(402))).j(f)).b()));if(d<0)G(Bg(((((I()).a(B(403))).j(d)).a(B(404))).b()));h=a.C+a.bI|0;i=0;while(i<d){j=a.A.data;g=h+1|0;f=c+1|0;j[h]=e[c];i=i+1|0;h=g;c=f;}a.C=a.C+d|0;return a;}}e=b.data;G(Bg(((((((I()).a(B(405))).j(c)).a(B(64))).j(e.length)).a(B(24))).b()));}
function Yk(a,b){return a.wX(b,0,b.data.length);}
function AWE(a){return 1;}
function HI(a){return a.A;}
function FH(a,b){a.hh=b;return a;}
function J4(a){FZ(a);return a;}
function Jv(a){G8(a);return a;}
function AZt(a,b){IZ(a,b);return a;}
function AQ4(a,b){GM(a,b);return a;}
function AFZ(a){return Jv(a);}
function AOQ(a,b){return a.M3(b);}
function AVy(a,b){return a.f5(b);}
function AB9(){var a=this;Ft.call(a);a.IG=0;a.oE=0;}
function A2N(a,b){var c=new AB9();A1t(c,a,b);return c;}
function BdV(a,b,c,d,e,f,g){var h=new AB9();O7(h,a,b,c,d,e,f,g);return h;}
function A1t(a,b,c){O7(a,0,b,Cj(b),0,b,c,0);}
function O7(a,b,c,d,e,f,g,h){V1(a,b,c,d,e,f);a.IG=g;a.oE=h;}
function ADg(a,b){if(b>=0&&b<a.bb)return a.A.data[a.bI+b|0];G(Bg(((((((I()).a(B(352))).j(b)).a(B(64))).j(a.bb)).a(B(24))).b()));}
function AMM(a){var b,c,d,e,f,g,h,i;if(a.oE)G(C8());a:{b=Bb(a);if(a.C>0){c=a.bI;d=a.bI+a.C|0;e=0;while(true){if(e>=b)break a;f=a.A.data;g=c+1|0;h=a.A.data;i=d+1|0;f[c]=h[d];e=e+1|0;c=g;d=i;}}}a.C=b;a.bb=a.hB;a.fE=(-1);return a;}
function AR5(a){return a.oE;}
function A$Z(a){var b,c;b=Bb(a)/2|0;c=a.hh;Ev();if(c!==Bh4)return BfP(a.bI+a.C|0,b,a,0,b,a.b_());return BcX(a.bI+a.C|0,b,a,0,b,a.b_());}
function A8i(a,b){var c,d,e,f,g;if(b>=0&&(b+3|0)<a.bb){c=a.A.data[a.bI+b|0]&255;d=a.A.data[(a.bI+b|0)+1|0]&255;e=a.A.data[(a.bI+b|0)+2|0]&255;f=a.A.data[(a.bI+b|0)+3|0]&255;g=a.hh;Ev();if(g!==Bh4)return f<<24|e<<16|d<<8|c;return c<<24|d<<16|e<<8|f;}G(Bg(((((((I()).a(B(352))).j(b)).a(B(64))).j(a.bb-3|0)).a(B(24))).b()));}
function AI0(a,b,c){var d;if(a.oE)G(C8());if(b>=0&&(b+3|0)<a.bb){d=a.hh;Ev();if(d!==Bh4){a.A.data[a.bI+b|0]=c<<24>>24;a.A.data[(a.bI+b|0)+1|0]=c>>8<<24>>24;a.A.data[(a.bI+b|0)+2|0]=c>>16<<24>>24;a.A.data[(a.bI+b|0)+3|0]=c>>24<<24>>24;}else{a.A.data[a.bI+b|0]=c>>24<<24>>24;a.A.data[(a.bI+b|0)+1|0]=c>>16<<24>>24;a.A.data[(a.bI+b|0)+2|0]=c>>8<<24>>24;a.A.data[(a.bI+b|0)+3|0]=c<<24>>24;}return a;}G(Bg(((((((I()).a(B(352))).j(b)).a(B(64))).j(a.bb-3|0)).a(B(24))).b()));}
function ATW(a){var b,c;b=Bb(a)/4|0;c=a.hh;Ev();if(c!==Bh4)return BeY(a.bI+a.C|0,b,a,0,b,a.b_());return Bdn(a.bI+a.C|0,b,a,0,b,a.b_());}
function ANt(a){var b,c;b=Bb(a)/4|0;c=a.hh;Ev();if(c!==Bh5)return Bfr(a.bI+a.C|0,b,a,0,b,a.b_());return A_L(a.bI+a.C|0,b,a,0,b,a.b_());}
function RY(){var a=this;E9.call(a);a.sC=0;a.sB=null;}
function Bgf(a){var b=new RY();AKD(b,a);return b;}
function AKD(a,b){a.sB=b;Kv(a);}
function A2d(a){var b,c;if(a.sC==N8(a.sB))return (-1);b=a.sB;c=a.sC;a.sC=c+1|0;return Rj(b,c)&255;}
function LL(){var a=this;C.call(a);a.m6=null;a.s9=0.0;}
function BbZ(a,b){var c=new LL();AI6(c,a,b);return c;}
function AI6(a,b,c){J(a);a.m6=S();a.s9=0.0;(a.m6.M(b)).bU();a.s9=c;}
function A20(a,b,c,d){(((a.m6.M(b)).gl(c)).HW(c.n-d.n,c.o-d.o,c.q-d.q)).bU();a.s9= -b.yy(a.m6);}
function VR(){var a=this;C.call(a);a.p8=null;a.uR=null;a.mq=0;a.l9=0;a.nq=0;a.gX=0;a.rX=0;a.uT=0;a.p5=0;}
function BcB(){var a=new VR();A8w(a);return a;}
function A8w(a){J(a);a.p8=null;a.uR=null;a.mq=2;a.l9=5;a.nq=0;a.gX=12;a.rX=1;a.uT=(-1);a.p5=(-1);}
function Gs(){var a=this;C.call(a);a.gm=null;a.b1=null;a.jY=null;}
var Bm7=null;var Bm8=null;var Bm9=null;function AKX(){AKX=N(Gs);A2D();}
function Be6(){var a=new Gs();VN(a);return a;}
function VN(a){var b;AKX();J(a);a.gm=Y(LL,6);a.b1=H(DD,[S(),S(),S(),S(),S(),S(),S(),S()]);a.jY=Ca(24);b=0;while(b<6){a.gm.data[b]=BbZ(S(),0.0);b=b+1|0;}}
function A49(a,b){var c,d,e,f,g,h;AKX();X(Bm8,0,a.jY,0,Bm8.data.length);TX(b.c,a.jY,0,8,3);c=0;d=0;while(c<8){e=a.b1.data[c];f=a.jY.data;g=d+1|0;e.n=f[d];f=a.jY.data;h=g+1|0;e.o=f[g];f=a.jY.data;d=h+1|0;e.q=f[h];c=c+1|0;}a.gm.data[0].iy(a.b1.data[1],a.b1.data[0],a.b1.data[2]);a.gm.data[1].iy(a.b1.data[4],a.b1.data[5],a.b1.data[7]);a.gm.data[2].iy(a.b1.data[0],a.b1.data[4],a.b1.data[3]);a.gm.data[3].iy(a.b1.data[5],a.b1.data[1],a.b1.data[6]);a.gm.data[4].iy(a.b1.data[2],a.b1.data[3],a.b1.data[6]);a.gm.data[5].iy(a.b1.data[4],
a.b1.data[0],a.b1.data[1]);}
function A2D(){var b,c,d,e,f,g,h,i;Bm7=H(DD,[Cl((-1.0),(-1.0),(-1.0)),Cl(1.0,(-1.0),(-1.0)),Cl(1.0,1.0,(-1.0)),Cl((-1.0),1.0,(-1.0)),Cl((-1.0),(-1.0),1.0),Cl(1.0,(-1.0),1.0),Cl(1.0,1.0,1.0),Cl((-1.0),1.0,1.0)]);Bm8=Ca(24);b=0;c=Bm7.data;d=c.length;e=0;while(e<d){f=c[e];g=Bm8.data;h=b+1|0;g[b]=f.n;g=Bm8.data;i=h+1|0;g[h]=f.o;g=Bm8.data;b=i+1|0;g[i]=f.q;e=e+1|0;}Bm9=S();}
function M_(){var a=this;C.call(a);a.Bu=null;a.Es=null;}
var Bm$=null;function BeE(){BeE=N(M_);AQo();}
function A_Z(a,b){var c=new M_();AB5(c,a,b);return c;}
function AB5(a,b,c){BeE();J(a);a.Bu=S();a.Es=S();a.Bu.M(b);(a.Es.M(c)).bU();}
function AQo(){Bm$=S();}
var ABy=D(By);
function AT9(b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s;b.um(8);k=b.dH(c);l=b.dH(e);m=b.dH(f);n=b.dH(d);o=b.dH(g);p=b.dH(i);q=b.dH(j);r=b.dH(h);s=b.Ml();if(s==1){b.hn(24);b.d2(k,l,m,n);b.d2(p,o,r,q);b.EQ(k,o,n,r,m,q,l,p);}else if(!s){b.r4(2);b.d2(k,l,m,n);b.d2(p,o,r,q);}else{b.r4(6);b.d2(k,l,m,n);b.d2(p,o,r,q);b.d2(k,n,r,o);b.d2(p,q,m,l);b.d2(p,l,k,o);b.d2(m,q,r,n);}}
function A9u(b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u;if(Z(Br(IM(b.jI()),O(408)),Ba)){J8();k=Biy.dK(c,null,null,null);l=Biz.dK(d,null,null,null);m=BiA;n=null;o=null;p=null;n=m.dK(e,n,o,p);o=BiB.dK(f,null,null,null);p=BiC;q=null;r=null;m=null;p=p.dK(g,q,r,m);q=BiD.dK(h,null,null,null);r=BiE;s=null;t=null;m=null;r=r.dK(i,s,t,m);m=BiF.dK(j,null,null,null);AT9(b,k,l,n,o,p,q,r,m);}else{b.um(24);b.r4(6);J8();u=(((Biq.M(c)).i3(f,0.5)).gl((Bir.M(g)).i3(j,0.5))).bU();b.jp(c,d,f,e,u);b.jp(h,g,i,j,u.en((-1.0)));k=
(((Biq.M(c)).i3(i,0.5)).gl((Bir.M(d)).i3(j,0.5))).bU();b.jp(g,c,e,i,k);b.jp(d,h,j,f,k.en((-1.0)));k=(((Biq.M(c)).i3(h,0.5)).gl((Bir.M(e)).i3(j,0.5))).bU();b.jp(g,h,d,c,k);b.jp(e,f,j,i,k.en((-1.0)));}}
function A6D(b,c,d,e){AU1(b,0.0,0.0,0.0,c,d,e);}
function AU1(b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;i=f*0.5;j=g*0.5;k=h*0.5;l=c-i;m=d-j;n=e-k;o=c+i;p=d+j;q=e+k;r=(Dz()).I(l,m,n);s=(Dz()).I(l,p,n);t=(Dz()).I(o,m,n);u=(Dz()).I(o,p,n);v=(Dz()).I(l,m,q);w=(Dz()).I(l,p,q);x=(Dz()).I(o,m,q);y=(Dz()).I(o,p,q);A9u(b,r,s,t,u,v,w,x,y);US();}
var QT=D(Bm);
function BaB(){var a=new QT();A96(a);return a;}
function A96(a){Cx(a);}
function VT(){Bt.call(this);this.C$=null;}
function BfE(a){var b=new VT();A6i(b,a);return b;}
function A6i(a,b){Co(a);a.C$=b;}
function AXT(a,b,c,d){var e,f;a:{if(b!=d.J()){if(!b)break a;if(d.jB()&&b==d.dI())break a;e=a.C$;f=b-1|0;if(e.D1(c.f(f),c.f(b)))break a;}return (-1);}return a.k.e(b,c,d);}
function AI4(a,b){return 0;}
function AV9(a){return B(541);}
var Ci=D();
function DU(a){J(a);}
function AU5(a,b,c){return 1;}
var TM=D();
function Xh(){V.call(this);this.yl=null;}
function BdW(){var a=new Xh();A58(a);return a;}
function A58(a){BM(a);a.yl=BL();}
function AZ1(a,b,c,d,e){D2(b,c,(a.yl.ch(b.cW.eK)).hC(d.dy));}
var MK=D();
var BjA=null;function BfI(){BfI=N(MK);AFB();}
function AFB(){BjA=Bc((Yy()).data.length);BjA.data[BC(Bjo)]=1;BjA.data[BC(Bjp)]=2;}
function Yt(){var a=this;C.call(a);a.fY=null;a.iR=null;a.iT=null;a.Nl=null;}
function Bci(){var a=new Yt();A6H(a);return a;}
function A6H(a){J(a);a.iT=Bp();a.Nl=BL();}
function Rx(a,b){var c,d,e;c=a.iT.bZ();while(true){if(!c.bC()){d=Bcr();d.Ph(b);a.iT.F(d);return d;}e=c.bz();if(NV(e.jI(),b)&&e.I0()<16383)break;}return e;}
function ADy(a){if(a.fY!==null)G(U(B(542)));a.iR=null;a.fY=BaH();a.iT.K();}
function AWe(a){var b,c,d;if(a.fY===null)G(U(B(543)));b=a.fY;NY(a);a.fY=null;c=a.iT.bZ();while(c.bC()){d=c.bz();d.NZ();}a.iT.K();AX9(b);return b;}
function NY(a){if(a.iR!==null)a.iR=null;}
function AVM(a,b){if(a.fY===null)G(U(B(543)));NY(a);a.fY.j3.F(b);a.iR=b;return b;}
function AF9(a){var b;b=AGi();a.PX(b);b.gn=(((I()).a(B(544))).j(a.fY.j3.h)).b();return b;}
function A8m(a,b,c){if(a.iR===null)a.Jo();a.iR.d9.F(Bf$(b,c));}
function AKa(a,b,c,d,e){var f;f=Rx(a,d);a.Nk(f.Qq(b,c),e);return f;}
function ASJ(a,b,c,d,e){return a.Ka(b,c,RO(d),e);}
function ARu(a,b,c,d,e,f){return a.JY(b,c,d,4,e,f);}
function A3n(a,b,c,d,e,f,g){a.g6();(a.Ks(B(545),e,g,f)).Ld(b,c,d);return a.H6();}
function AX9(b){var c,d;b.pY.K();b.p3.K();b.oA.K();c=b.j3.bZ();while(c.bC()){d=c.bz();T7(b,d);}}
function T7(b,c){var d,e,f;d=c.d9.bZ();while(d.bC()){e=d.bz();if(!b.pY.iv(e.dY,1))b.pY.F(e.dY);if(!b.oA.iv(e.fk,1)){b.oA.F(e.fk);if(!b.p3.iv(e.fk.b7,1))b.p3.F(e.fk.b7);b.MD(e.fk.b7);}}d=(c.rC()).fs();while(d.bC()){f=d.bz();T7(b,f);}}
function I9(){var a=this;C.call(a);a.dt=null;a.eN=null;a.ye=0;a.KE=0;a.t$=0;a.k2=0;a.oH=0;}
function A3d(a,b,c){var d=new I9();Z2(d,a,b,c);return d;}
function Z2(a,b,c,d){J(a);a.k2=0;a.oH=0;a.KE=b;a.dt=d;a.eN=HY(Cg(a.dt.cQ/4|0,c));a.eN.db();a.ye=Bie.i5();a.t$=!b?35048:35044;}
function AI3(a){return a.dt;}
function ATE(a){return CV(a.eN)/(a.dt.cQ/4|0)|0;}
function ACN(a){if(a.oH){Bie.fD(34962,BD(a.eN),a.eN,a.t$);a.k2=0;}}
function A45(a,b,c,d){a.k2=1;Oa(b,a.eN,d,c);a.eN.c0(0);a.eN.cl(d);ACN(a);}
function AZL(a,b,c){var d,e,f,g,h,i;d=Bie;d.c$(34962,a.ye);if(a.k2){d.fD(34962,BD(a.eN),a.eN,a.t$);a.k2=0;}a:{e=CU(a.dt);if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data;h=CB(a.dt,f);i=g[f];if(i>=0){b.lS(i);if(h.fm!=4)b.id(i,h.cK,5126,0,a.dt.cQ,h.cV);else b.id(i,h.cK,5121,1,a.dt.cQ,h.cV);}f=f+1|0;}}f=0;while(f<e){h=CB(a.dt,f);i=b.lY(h.et);if(i>=0){b.lS(i);if(h.fm!=4)b.id(i,h.cK,5126,0,a.dt.cQ,h.cV);else b.id(i,h.cK,5121,1,a.dt.cQ,h.cV);}f=f+1|0;}}a.oH=1;}
function AWg(a,b,c){var d,e,f,g;a:{d=Bie;e=CU(a.dt);if(c===null){f=0;while(f<e){b.BI((CB(a.dt,f)).et);f=f+1|0;}}else{f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0)b.tN(g);f=f+1|0;}}}d.c$(34962,0);a.oH=0;}
var Wf=D(I9);
function Bcn(a,b){var c=new Wf();A6$(c,a,b);return c;}
function A6$(a,b,c){Z2(a,0,b,c);}
var Xn=D(V);
function BaQ(){var a=new Xn();AQO(a);return a;}
function AQO(a){BM(a);}
function ATw(a,b,c,d,e){Ce();Fv(b,c,(BA(e,Bmm)).dX);}
var Xj=D(V);
function BeH(){var a=new Xj();ARP(a);return a;}
function ARP(a){BM(a);}
function AVf(a,b,c,d,e){var f,g,h,i;f=b.cZ.d6;B1();g=Bm_;h=(BA(e,g)).d3;i=f.gE(h);DV(b,c,i);}
var S6=D(T);
function BcM(){var a=new S6();AJn(a);return a;}
function AJn(a){Bo(a);}
function A7i(a){return (CR()).bF(97,122);}
function Xi(){V.call(this);this.Bd=null;}
function Bch(){var a=new Xi();AK8(a);return a;}
function AK8(a){BM(a);a.Bd=Ph();}
function ALM(a,b,c,d,e){Q5(b,c,((a.Bd.D$(d.dy)).CT()).AE());}
var KO=D(0);
var Xl=D(V);
function BbO(){var a=new Xl();AZx(a);return a;}
function AZx(a){BM(a);}
function AG1(a,b,c,d,e){ET();Fn(b,c,(BA(e,Bl2)).mn);}
var ABC=D();
function Y1(){var a=this;C.call(a);a.d6=null;a.oq=0;a.s7=0;a.qD=0;a.ha=0;a.AQ=0.0;a.w2=0.0;a.pH=0;a.o_=0;}
function Bdv(a){var b=new Y1();A$h(b,a);return b;}
function A$h(a,b){J(a);a.d6=b;}
function A8u(a){Bid.eh(2929);a.ha=0;Bid.kS(1);a.pH=1;Bid.eh(3042);a.oq=0;Bid.eh(2884);a.qD=0;a.s7=0;a.o_=0;a.d6.g6();}
function A$O(a){if(a.ha)Bid.eh(2929);if(!a.pH)Bid.kS(1);if(a.oq)Bid.eh(3042);if(a.o_>0)Bid.eh(2884);a.d6.bd();}
function AGK(a,b){var c;if(a.pH!=b){c=Bid;a.pH=b;c.kS(b);}}
function AXN(a,b,c,d){var e,f,g;e=!a.ha?0:1;f=!b?0:1;if(a.ha!=b){a.ha=b;if(!f)Bid.eh(2929);else{Bid.o5(2929);Bid.vA(b);}}if(f){if(!(e&&a.ha==b)){g=Bid;a.ha=b;g.vA(b);}if(!(e&&a.AQ===c&&a.w2===d)){g=Bid;a.AQ=c;a.w2=d;g.J3(c,d);}}}
function A93(a,b,c,d){if(b!=a.oq){a.oq=b;if(!b)Bid.eh(3042);else Bid.o5(3042);}if(b&&!(a.s7==c&&a.qD==d)){Bid.PN(c,d);a.s7=c;a.qD=d;}}
function AJ_(a,b){if(b!=a.o_){a.o_=b;if(b!=1028&&b!=1029&&b!=1032)Bid.eh(2884);else{Bid.o5(2884);Bid.Je(b);}}}
var Rd=D(T);
function Bct(){var a=new Rd();AF3(a);return a;}
function AF3(a){Bo(a);}
function APk(a){return BcJ(a);}
var Hm=D();
function XN(a){J(a);}
function Zp(){var a=this;C.call(a);a.fv=null;a.dS=null;a.rR=0;a.H9=0;a.jj=0;a.oW=0;a.yV=0;}
function A$W(a,b){var c=new Zp();AZf(c,a,b);return c;}
function AZf(a,b,c){J(a);a.jj=1;a.oW=0;a.dS=ML(c*2|0);a.H9=1;a.yV=!b?35048:35044;a.fv=a.dS.v3();a.fv.db();a.dS.db();a.rR=ACA(a);}
function ACA(a){var b;b=Bie.i5();Bie.c$(34963,b);Bie.fD(34963,CV(a.dS),null,a.yV);Bie.c$(34963,0);return b;}
function APw(a){return BD(a.fv);}
function AUN(a){return CV(a.fv);}
function A1M(a,b,c,d){a.jj=1;a.fv.c2();a.fv.DG(b,c,d);a.fv.db();a.dS.c0(0);a.dS.cl(d<<1);if(a.oW){Bie.qp(34963,0,BD(a.dS),a.dS);a.jj=0;}}
function ASM(a){a.jj=1;return a.fv;}
function ALo(a){if(!a.rR)G(U(B(546)));Bie.c$(34963,a.rR);if(a.jj){a.dS.cl(BD(a.fv)*2|0);Bie.qp(34963,0,BD(a.dS),a.dS);a.jj=0;}a.oW=1;}
function AFO(a){Bie.c$(34963,0);a.oW=0;}
var Gn=D(BT);
var Bna=null;function A4W(){A4W=N(Gn);AH3();}
function Bey(a){var b=new Gn();Y6(b,a);return b;}
function Bnb(){var a=new Gn();H4(a);return a;}
function Y6(a,b){A4W();B_(a);}
function H4(a){A4W();B_(a);}
function AH3(){Bna=Bey(0);}
var Wr=D(Bt);
function Bar(){var a=new Wr();AQT(a);return a;}
function AQT(a){Co(a);}
function AK3(a,b,c,d){if(b!=d.Nu())return (-1);return a.k.e(b,c,d);}
function AT0(a,b){return 0;}
function AWt(a){return B(547);}
var Xr=D(V);
function Bd4(){var a=new Xr();AEK(a);return a;}
function AEK(a){BM(a);}
function A7r(a,b,c,d,e){var f,g,h,i;f=b.cZ.d6;B1();g=Bnc;h=(BA(e,g)).d3;i=f.gE(h);DV(b,c,i);}
var Xo=D(V);
function Bao(){var a=new Xo();A9K(a);return a;}
function A9K(a){BM(a);}
function ATh(a,b,c,d,e){var f;B1();f=BA(e,Bnc);DR(b,c,f.eP,f.eO,f.e_,f.fa);}
var C$=D(BT);
var Bnd=null;var BgU=null;var Bne=null;var Bnf=null;var Bng=null;var Bnh=null;var Bni=null;var Bnj=null;function Fl(){Fl=N(C$);AFb();}
function Fe(a){var b=new C$();S0(b,a);return b;}
function S0(a,b){Fl();B_(a);a.dZ(!b?0:PB(0.0,0.0,0.0),b);}
function AFW(a){return Rn(a.bY);}
function AQa(a){return AAq(a.bY);}
function A1j(a){return XL(a.bY);}
function AHN(a,b,c,d){AAm(a.bY,b,c,d);}
function Gq(b,c){Fl();c.M5(b.n,b.o,b.q);}
function Wn(b,c){var d,e,f;Fl();d=b.LG();e=b.JM();f=b.Kb();c.I(d,e,f);}
function AFb(){Bnd=Fe(0);BgU=Fe(1);Bne=Fe(1);Bnf=Fe(1);Bng=Fe(1);Bnh=Fe(1);Bni=Fe(0);Bnj=S();}
function PB(b,c,d){var jsObj=new Bullet.btVector3(b,c,d);return Bullet.getPointer(jsObj);}
function Rn(b){var vec3=Bullet.wrapPointer(b,Bullet.btVector3);return vec3.x();}
function AAq(b){var vec3=Bullet.wrapPointer(b,Bullet.btVector3);return vec3.y();}
function XL(b){var vec3=Bullet.wrapPointer(b,Bullet.btVector3);return vec3.z();}
function AAm(b,c,d,e){var vec3=Bullet.wrapPointer(b,Bullet.btVector3);vec3.setValue(c,d,e);}
var Xk=D(V);
function BeK(){var a=new Xk();AEI(a);return a;}
function AEI(a){BM(a);}
function AN0(a,b,c,d,e){var f;B1();f=BA(e,Bm_);DR(b,c,f.eP,f.eO,f.e_,f.fa);}
var Xq=D(V);
function BeM(){var a=new Xq();AWo(a);return a;}
function AWo(a){BM(a);}
function AJH(a,b,c,d,e){Ce();Fv(b,c,(BA(e,Bmn)).dX);}
var KX=D(Cy);
function Bnk(a){var b=new KX();ZP(b,a);return b;}
function ZP(a,b){Et(a,b);}
function AVu(a,b,c,d){var e;e=a.ka();d.by(e,b-d.ev(e)|0);return a.k.e(b,c,d);}
function AYr(a){return B(548);}
function A7k(a,b){return 0;}
var Xp=D(V);
function Bco(){var a=new Xp();AI5(a);return a;}
function AI5(a){BM(a);}
function AYy(a,b,c,d,e){Ce();Fv(b,c,(BA(e,Bmp)).dX);}
var Ll=D();
var Bnl=null;function E1(){E1=N(Ll);AK_();}
function IL(b,c){E1();return b+Bnl.MI((c-b|0)+1|0)|0;}
function HF(b,c){E1();return b+Bnl.Gb()*(c-b);}
function IW(b){var c,d;E1();if(!b)return 1;c=b+(-1)|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function K7(b){E1();return b&&!(b&(b-1|0))?1:0;}
function DG(b){E1();return CG(b)>9.999999974752427E-7?0:1;}
function Dl(b,c){E1();return CG(b-c)>9.999999974752427E-7?0:1;}
function SK(b,c,d){E1();return CG(b-c)>d?0:1;}
function AK_(){Bnl=Bcs();}
var NC=D(0);
var L2=D(0);
function Vr(){BJ.call(this);this.rr=0;}
function BbD(a){var b=new Vr();A73(b,a);return b;}
function A73(a,b){C2(a);a.bO=2;a.rr=EX(En(b));}
function AQk(a,b,c){var d,e,f;d=b+1|0;e=c.f(b);f=c.f(d);return a.rr!=EX(En(Dh(e,f)))?(-1):2;}
function A_g(a){return (((I()).a(B(421))).a(Mf(Eu(a.rr)))).b();}
function U$(){var a=this;It.call(a);a.x4=0;a.uI=0.0;a.wI=0;a.kV=0.0;a.BB=0;a.jx=0;a.iG=0;a.Cb=0;a.DR=0.0;a.A6=0.0;a.oX=0;a.i9=null;a.uQ=0;a.q1=0;a.y7=0;a.rT=0;a.yt=0;a.s_=0;a.Fi=0;a.rJ=0;a.Aw=0;a.qI=0;a.w7=0;a.cA=null;a.fy=0;a.tp=0.0;a.tq=0.0;a.fA=null;a.tu=null;a.BY=null;a.ir=0;a.sL=0;}
function Bnm(a,b){var c=new U$();Qr(c,a,b);return c;}
function BaF(a){var b=new U$();AFC(b,a);return b;}
function Qr(a,b,c){Vy(a,b);a.x4=0;a.uI=360.0;a.wI=1;a.kV=10.0;a.BB=2;a.jx=0;a.Cb=1;a.DR=(-0.10000000149011612);a.A6=10.0;a.oX=1;a.i9=S();a.uQ=1;a.q1=1;a.y7=0;a.rT=51;a.s_=47;a.rJ=29;a.qI=32;a.fy=(-1);a.fA=S();a.tu=S();a.BY=b;a.BY.wU=a;a.cA=c;}
function AFC(a,b){Qr(a,Bfg(),b);}
function AKn(a,b,c,d,e){a.ir=a.ir|1<<d;a.sL=K7(a.ir)?0:1;if(a.sL)a.fy=(-1);else if(a.fy<0&&!(a.jx&&!a.iG)){a.tp=b;a.tq=c;a.fy=e;}return !OP(a,b,c,d,e)&&a.jx&&!a.iG?0:1;}
function A1y(a,b,c,d,e){a.ir=a.ir&((-1)^1<<d);a.sL=K7(a.ir)?0:1;if(e==a.fy)a.fy=(-1);return !AAu(a,b,c,d,e)&&!a.iG?0:1;}
function AYX(a,b,c,d){if(d==a.x4){((a.fA.M(a.cA.c9)).iC(a.cA.ds)).o=0.0;a.cA.zk(a.i9,a.fA.bU(),c*a.uI);a.cA.zk(a.i9,BmU,b* -a.uI);}else if(d==a.wI){a.cA.k$((((a.fA.M(a.cA.c9)).iC(a.cA.ds)).bU()).en( -b*a.kV));a.cA.k$((a.tu.M(a.cA.ds)).en( -c*a.kV));if(a.uQ)(a.i9.fB(a.fA)).fB(a.tu);}else if(d==a.BB){a.cA.k$((a.fA.M(a.cA.c9)).en(c*a.kV));if(a.q1)a.i9.fB(a.fA);}if(a.oX)a.cA.f7();return 1;}
function AKv(a,b,c,d){var e,f,g,h,i,j;e=VS(a,b,c,d);if(!e&&a.fy>=0){f=b;g=(f-a.tp)/Bia.bo();h=a.tq;i=c;j=(h-i)/Bia.bl();a.tp=f;a.tq=i;return a.Iq(g,j,a.fy);}return e;}
function ASh(a,b,c){return a.y9(c*a.DR*a.kV);}
function A3i(a,b){if(!a.Cb&&a.jx&&!a.iG)return 0;a.cA.k$((a.fA.M(a.cA.c9)).en(b));if(a.y7)a.i9.fB(a.fA);if(a.oX)a.cA.f7();return 1;}
function ASm(a,b){return a.y9(a.A6*b);}
function AEa(a,b){if(b==a.jx)a.iG=1;if(b==a.rT)a.yt=1;else if(b==a.s_)a.Fi=1;else if(b==a.rJ)a.Aw=1;else if(b==a.qI)a.w7=1;return 0;}
function A2i(a,b){if(b==a.jx){a.iG=0;a.fy=(-1);}if(b==a.rT)a.yt=0;else if(b==a.s_)a.Fi=0;else if(b==a.rJ)a.Aw=0;else if(b==a.qI)a.w7=0;return 0;}
var Gm=D();
var Bnn=null;var Bno=null;var Bnp=null;function C_(){var b;if(Bnn===null){b=new HB;ATn();Oe(b,Bh9,0);Bnn=b;}return Bnn;}
function TF(){var b;if(Bno===null){b=new HB;A3g();Oe(b,Bll,0);Bno=b;}return Bno;}
function X(b,c,d,e,f){var g,h,i,j,k,l,m,n;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=AAx(b)){g=e+f|0;if(g<=AAx(d)){a:{b:{if(b!==d){h=(Ck(b)).gq();i=(Ck(d)).gq();if(h!==null&&i!==null){if(h===i)break b;if(!h.hf()&&!i.hf()){j=b;k=0;g=c;while(k<f){l=j.data;m=g+1|0;n=l[g];if(!i.vW(n)){Nc(b,c,d,e,k);G(Qy());}k=k+1|0;g=m;}Nc(b,c,d,e,f);return;}if(!h.hf())break a;if(i.hf())break b;else break a;}G(Qy());}}Nc(b,c,d,e,f);return;}G(Qy());}}G(C9());}G(APC(B(549)));}
function Nc(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Eb(){return Long_fromNumber(new Date().getTime());}
function AZH(){var b;if(Bnp===null){b=Bba();b.x(B(550),B(551));b.x(B(552),B(553));b.x(B(554),B(381));b.x(B(555),B(13));b.x(B(556),AZE());b.x(B(557),ARi());b.x(B(558),B(551));b.x(B(559),A$E());Bnp=Bbe(b);}}
function ARi(){return B(560);}
function A$E(){return B(381);}
function Gp(b,c){AZH();return Bnp.x(b,c);}
function AZE(){return B(324);}
function S3(){var a=this;C.call(a);a.eU=null;a.mL=null;a.lL=null;a.lz=null;a.mr=null;}
function A6L(){var a=new S3();A8z(a);return a;}
function A8z(a){J(a);a.eU=null;}
function AD9(a,b){a.eU=b.eU;a.mL=b.mL;a.lL=b.lL;a.lz=b.lz;a.mr=b.mr;}
function AFr(a){var b,c;b=O(a.eU===null?0:a.eU.ej);c=CA(Cf(O(811),b),O(a.eU===null?0:a.eU.N3()));c=CA(Cf(O(811),c),O(a.mL===null?0:EE(a.mL)));c=CA(Cf(O(811),c),O(a.lL===null?0:EE(a.lL)));c=CA(Cf(O(811),c),O(a.lz===null?0:G9(a.lz)));c=CA(Cf(O(811),c),O(a.mr===null?0:G9(a.mr)));return Cp(ARo(c,M$(c,32)));}
function Rb(){var a=this;C.call(a);a.Oz=null;a.hA=null;a.sn=null;a.rf=0;a.zL=0.0;a.hU=0.0;a.qK=0.0;a.i0=0.0;a.sc=0.0;a.e5=0.0;a.l4=0.0;a.iA=0.0;a.kj=0.0;a.xl=0.0;a.eQ=0.0;a.z_=0.0;a.Du=0;a.he=null;a.iu=null;a.vr=0.0;a.tJ=0.0;a.Dz=null;a.wk=null;a.xt=null;}
function Bdg(a,b){var c=new Rb();A4r(c,a,b);return c;}
function A4r(a,b,c){J(a);a.e5=1.0;a.xl=1.0;a.eQ=1.0;a.z_=1.0;a.he=Y($rt_arraycls(JB),128);a.tJ=1.0;a.wk=I5([120,101,97,111,110,115,114,99,117,109,118,119,122]);a.xt=I5([77,78,66,68,67,69,70,75,65,71,72,73,74,76,79,80,81,82,83,84,85,86,87,88,89,90]);a.sn=b;a.rf=c;a.PY(b,c);}
function AGr(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,$$je;if(a.hA!==null)G(DS(B(561)));a.Oz=b.Oi();d=BbH(Bdx(b.qx()),512);a:{b:{try{e=d.le();if(e===null)G(U(B(562)));f=e.ei(e.Nm(B(563))+8|0);g=(f.ce(0,f.Li(32))).vB(B(23),4);h=g.data;if(h.length!=4)G(U(B(564)));a.zL=BU(h[0]);a.hU=BU(h[1]);a.qK=BU(h[2]);a.i0=BU(h[3]);i=a.zL+a.qK;f=d.le();if(f===null)G(U(B(565)));j=f.vB(B(56),9);h=j.data;k=h.length;if(k<3)G(U(B(566)));if(!h[1].e2(B(567)))G(U(B(568)));a.sc
=BU(h[1].ei(11));if(!h[2].e2(B(569)))G(U(B(570)));c:{l=BU(h[2].ei(5));m=1;if(k<6)n=m;else if(h[5]===null)n=m;else if(!h[5].e2(B(571)))n=m;else{try{n=Bf(1,BU(h[5].ei(6)));m=n;break c;}catch($$e){$$je=R($$e);if($$je instanceof Dv){}else{throw $$e;}}n=m;}}a.hA=Y(BN,n);o=0;d:{e:{f:{while(true){if(o>=n)break d;f=d.le();if(f===null)G(U(B(572)));g:{p=GN(GK(B(573)),f);if(Ga(p)){q=Gh(p,1);try{r=BU(q);if(r!=o)break f;break g;}catch($$e){$$je=R($$e);if($$je instanceof Dv){s=$$je;break e;}else{throw $$e;}}}}f=GN(GK(B(574)),
f);if(!Ga(f))break;t=Gh(f,1);a.hA.data[o]=(((b.K6()).Kx(t)).rw()).GG(B(575),B(381));o=o+1|0;}G(U(B(576)));}try{G(U((((I()).a(B(577))).a(q)).b()));}catch($$e){$$je=R($$e);if($$je instanceof Dv){s=$$je;}else{throw $$e;}}}G(Jd((((I()).a(B(578))).a(q)).b(),s));}a.iA=0.0;h:{while(true){f=d.le();if(f===null)break;if(f.e2(B(579)))break h;if(f.e2(B(580)))break h;if(!f.e2(B(581)))continue;u=AFz();v=T6(f,B(582));v.O();v.O();w=BU(v.O());if(w<=0)a.iu=u;else{if(w>65535)continue;a.yj(w,u);}u.e0=w;v.O();u.td=BU(v.O());v.O();u.te
=BU(v.O());v.O();u.ct=BU(v.O());v.O();u.cN=BU(v.O());v.O();u.dr=BU(v.O());v.O();if(c)u.jg=BU(v.O());else u.jg= -(u.cN+BU(v.O())|0)|0;v.O();u.gz=BU(v.O());if(v.wq())v.O();i:{if(v.wq())try{u.jX=BU(v.O());break i;}catch($$e){$$je=R($$e);if($$je instanceof Dv){}else{throw $$e;}}}if(u.ct>0&&u.cN>0)a.iA=Ju(l+u.jg,a.iA);}}a.iA=a.iA+a.qK;j:{while(true){f=d.le();if(f===null)break;if(!f.e2(B(583)))break j;v=T6(f,B(582));v.O();v.O();x=BU(v.O());v.O();y=BU(v.O());if(x<0)continue;if(x>65535)continue;if(y<0)continue;if(y
>65535)continue;u=a.it(x&65535);v.O();z=BU(v.O());if(u!==null)u.GE(y,z);}}ba=0;bb=0.0;bc=0.0;bd=0.0;be=0.0;bf=0.0;bg=0.0;bh=0.0;if(f!==null&&f.e2(B(580))){ba=1;v=T6(f,B(582));v.O();v.O();bb=Ea(v.O());v.O();bc=Ea(v.O());v.O();bd=Ea(v.O());v.O();be=Ea(v.O());v.O();bf=Ea(v.O());v.O();bg=Ea(v.O());v.O();bh=Ea(v.O());}bi=a.it(32);if(bi===null){bi=AFz();bi.e0=32;bj=a.it(108);if(bj===null)bj=a.CQ();bi.gz=bj.gz;a.yj(32,bi);}if(!bi.ct){bi.ct=a.i0+bi.gz+a.hU|0;bi.dr= -a.i0|0;}a.vr=bi.gz;bk=null;h=a.wk.data;k=h.length;bl
=0;k:{while(bl<k){bm=h[bl];bk=a.it(bm);if(bk!==null)break k;bl=bl+1|0;}}if(bk===null)bk=a.CQ();a.tJ=bk.cN-i;bn=null;h=a.xt.data;n=h.length;k=0;l:{while(k<n){bo=h[k];bn=a.it(bo);if(bn!==null)break l;k=k+1|0;}}if(bn!==null)a.e5=bn.cN;else{h=a.he.data;n=h.length;k=0;while(k<n){m:{bp=h[k];if(bp!==null){bq=bp.data;bl=bq.length;br=0;while(true){if(br>=bl)break m;u=bq[br];if(u!==null&&u.cN&&u.ct)a.e5=Ei(a.e5,u.cN);br=br+1|0;}}}k=k+1|0;}}a.e5=a.e5-i;a.l4=l-a.e5;a.kj= -a.sc;if(c){a.l4= -a.l4;a.kj= -a.kj;}if(ba){a.l4
=bb;a.iA=bc;a.kj=bd;a.e5=be;a.sc=bf;a.vr=bg;a.tJ=bh;}}catch($$e){$$je=R($$e);if($$je instanceof B4){s=$$je;break b;}else{f=$$je;break a;}}LZ(d);return;}try{G(Jd((((I()).a(B(584))).dD(b)).b(),s));}catch($$e){$$je=R($$e);f=$$je;}}LZ(d);G(f);}
function AVI(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=c.Ba();e=1.0/d.bo();f=1.0/d.bl();g=0.0;h=0.0;i=c.zQ;j=c.zT;k=c.Ig();l=c.Lz();if(c instanceof KB){m=c;g=m.NV;h=(m.MJ-m.OR|0)-m.NT;}n=b.td;o=b.td+b.ct|0;p=b.te;q=b.te+b.cN|0;if(g<=0.0)k=o;else{n=n-g;if(n<0.0){b.ct=b.ct+n|0;b.dr=b.dr-n|0;n=0.0;}r=o-g;if(r<=k)k=r;else b.ct=b.ct-(r-k)|0;}if(h<=0.0)l=q;else{p=p-h;if(p<0.0){b.cN=b.cN+p|0;if(b.cN<0)b.cN=0;p=0.0;}r=q-h;if(r<=l)l=r;else{s=r-l;b.cN=b.cN-s|0;b.jg=b.jg+s|0;}}b.vD=i+n*e;b.Bo=i+k*e;if(!a.rf){b.tk=j
+p*f;b.p9=j+l*f;}else{b.p9=j+p*f;b.tk=j+l*f;}}
function ATB(a,b,c){var d,e,f;d=a.he.data;e=b/512|0;f=d[e];if(f===null){d=a.he.data;f=Y(JB,512);d[e]=f;}f.data[b&511]=c;}
function A3M(a){var b,c,d,e,f,g,h,i;b=a.he.data;c=b.length;d=0;a:while(true){if(d>=c)G(U(B(585)));b:{e=b[d];if(e!==null){f=e.data;g=f.length;h=0;while(true){if(h>=g)break b;i=f[h];if(i!==null&&i.cN&&i.ct)break a;h=h+1|0;}}}d=d+1|0;}return i;}
function AGW(a,b){var c;c=a.he.data[b/512|0];if(c===null)return null;return c.data[b&511];}
function AGb(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q;g=e-d|0;if(!g)return;h=a.Du;i=a.eQ;j=b.bi;k=b.bn;j.xq(g);b.bn.D9(g+1|0);while(true){a:{l=d+1|0;m=c.f(d);if(m!=13){n=a.it(m);if(n===null){if(a.iu===null)break a;n=a.iu;}j.F(n);if(f!==null){o=f.gz;p=(o+f.Ke(m)|0)*i;}else p=n.op?0.0:( -n.dr|0)*i-a.i0;k.Al(p);if(!h)f=n;else if(m!=91)f=n;else if(l>=e)f=n;else if(c.f(l)!=91)f=n;else{l=l+1|0;f=n;}}}if(l>=e)break;d=l;}if(f!==null){q=f.op?f.gz*i:(f.ct+f.dr|0)*i-a.hU;k.Al(q);}}
function ADm(a,b,c){var d,e,f,g,h;d=c-1|0;e=b.P;f=e.data;g=f[d].e0&65535;if(a.jt(g))return d;if(a.xD(g))d=d+(-1)|0;a:{while(d>0){h=f[d].e0&65535;if(a.jt(h))break a;if(a.xD(h))break a;d=d+(-1)|0;}return 0;}return d+1|0;}
function AGH(a,b){var c,d,e,f;if(a.Dz===null)return 0;c=a.Dz.data;d=c.length;e=0;while(e<d){f=c[e];if(b==f)return 1;e=e+1|0;}return 0;}
function AHo(a,b){switch(b){case 9:case 10:case 13:case 32:break;default:return 0;}return 1;}
var Nx=D();
var Bnq=null;function CS(){return Bnq;}
function ALT(b){Bnq=b;}
function Xz(){var a=this;T.call(a);a.xF=0;a.C5=0;}
function M(a,b){var c=new Xz();A94(c,a,b);return c;}
function A94(a,b,c){Bo(a);a.xF=b;a.C5=c;}
function AMd(a){var b;b=(CR()).bF(a.xF,a.C5);return b;}
function UG(){var a=this;C.call(a);a.fX=0;a.qP=0.0;a.qQ=0.0;a.oi=0.0;a.oh=0.0;a.uB=Ba;a.gw=0;a.pC=null;a.pB=null;a.kr=null;}
function Be9(){var a=new UG();ADt(a);return a;}
function ADt(a){J(a);a.fX=10;a.pC=Ca(a.fX);a.pB=Ca(a.fX);a.kr=BfR(a.fX);}
function ANc(a,b,c,d){var e;a.qP=b;a.qQ=c;a.oi=0.0;a.oh=0.0;a.gw=0;e=0;while(e<a.fX){a.pC.data[e]=0.0;a.pB.data[e]=0.0;a.kr.data[e]=Ba;e=e+1|0;}a.uB=d;}
function AMs(a,b,c,d){var e,f;a.oi=b-a.qP;a.oh=c-a.qQ;a.qP=b;a.qQ=c;e=D7(d,a.uB);a.uB=d;f=a.gw%a.fX|0;a.pC.data[f]=a.oi;a.pB.data[f]=a.oh;a.kr.data[f]=e;a.gw=a.gw+1|0;}
function A2j(a){var b,c;b=No(a,a.pC,a.gw);c=Ry(MJ(a,a.kr,a.gw))/1.0E9;if(c!==0.0)return b/c;return 0.0;}
function A6a(a){var b,c;b=No(a,a.pB,a.gw);c=Ry(MJ(a,a.kr,a.gw))/1.0E9;if(c!==0.0)return b/c;return 0.0;}
function No(a,b,c){var d,e,f;d=Bq(a.fX,c);e=0.0;f=0;while(f<d){e=e+b.data[f];f=f+1|0;}return e/d;}
function MJ(a,b,c){var d,e,f;d=Bq(a.fX,c);e=Ba;f=0;while(f<d){e=CA(e,b.data[f]);f=f+1|0;}if(!d)return Ba;return E_(e,O(d));}
function ACD(){HK.call(this);this.jl=null;}
function Bdr(a){var b=new ACD();A50(b,a);return b;}
function A50(a,b){a.jl=b;P9(a);}
function A5k(a){if(!a.jl.mI)a.jl.mI=a.jl.dV.OE(a.jl.d8.eW,a.jl.d8.eV);}
var Xs=D(T);
function Bdo(){var a=new Xs();AFy(a);return a;}
function AFy(a){Bo(a);}
function ATa(a){return (((CR()).bF(48,57)).bF(97,102)).bF(65,70);}
function Zw(){var a=this;C.call(a);a.G3=null;a.EU=null;a.e4=null;a.bJ=null;a.iB=0;a.jy=0;a.o6=0;a.m7=null;a.qO=null;a.e8=null;}
function BaD(a,b){var c=new Zw();AC8(c,a,b);return c;}
function X8(a,b,c){a.qO=AAl(a,c);b.Bx(a.e4.d_(a.o6,LS(a)));b.IJ(a.qO);a.o6=MX(a);return a;}
function AAl(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$$je;if(a.m7!==null&&a.m7.z(b)){if(a.e8===null)return a.qO;c=I();d=0;while(d<a.e8.df()){c.dD(a.e8.l(d));d=d+1|0;}return c.b();}a.m7=b;e=b.rx();f=I();a.e8=null;g=0;h=0;i=0;a:{b:while(true){j=e.data;k=j.length;if(g>=k){if(a.e8!==null&&h!=f.i())a.e8.h4(f.d_(h,f.i()));return f.b();}if(j[g]==92&&!i){i=1;g=g+1|0;}c:{if(i){if(g>=k)break b;f.T(j[g]);i=0;}else if(j[g]!=36)f.T(j[g]);else{if(a.e8===null)a.e8=SF();d:{try{l=new BN;g=g+1|0;OF(l,e,g,1);m=BU(l);if(h==f.i())break d;a.e8.h4(f.d_(h,
f.i()));h=f.i();break d;}catch($$e){$$je=R($$e);if($$je instanceof B4){break a;}else{throw $$e;}}}try{a.e8.h4(Bbi(a,m));n=Gh(a,m);h=h+n.i()|0;f.a(n);break c;}catch($$e){$$je=R($$e);if($$je instanceof B4){break a;}else{throw $$e;}}}}g=g+1|0;}G(C9());}G(W(B(101)));}
function ABe(a){a.iB=0;a.jy=a.e4.i();a.bJ.tH(a.e4,a.iB,a.jy);a.o6=0;a.m7=null;a.bJ.hv=(-1);return a;}
function ABG(a,b){return b.Bx(a.e4.d_(a.o6,a.e4.i()));}
function ACn(a,b){var c;c=A6A();ABe(a);while(Ga(a)){X8(a,c,b);}return (ABG(a,c)).b();}
function Gh(a,b){return a.bJ.BV(b);}
function JJ(a,b){var c,d;c=a.e4.i();if(b>=0&&b<=c){d=AAQ(a,b);if(d>=0&&a.bJ.Lw()){a.bJ.MB();return 1;}a.bJ.eb=(-1);return 0;}G(Bg(Ji(b)));}
function AAQ(a,b){var c;a.bJ.fW();a.bJ.pN(1);a.bJ.G$(b);c=a.EU.cD(b,a.e4,a.bJ);if(c==(-1))a.bJ.d5=1;return c;}
function Ga(a){var b,c;b=a.e4.i();if(!Pg(a))b=a.jy;if(a.bJ.eb>=0&&a.bJ.Cv()==1){a.bJ.eb=a.bJ.pQ();if(a.bJ.pQ()==a.bJ.ww()){c=a.bJ;c.eb=c.eb+1|0;}return a.bJ.eb<=b&&JJ(a,a.bJ.eb)?1:0;}return JJ(a,a.iB);}
function U6(a,b){return a.bJ.lC(b);}
function Pa(a,b){return a.bJ.pc(b);}
function LS(a){return U6(a,0);}
function MX(a){return Pa(a,0);}
function Pg(a){return a.bJ.lH();}
function AC8(a,b,c){var d,e,f,g,h;J(a);a.iB=(-1);a.jy=(-1);a.G3=b;a.EU=b.rM;a.e4=c;a.iB=0;a.jy=a.e4.i();d=new NT;e=a.iB;f=a.jy;g=VH(b);h=ABT(b);Sm(d,c,e,f,g,h,SH(b));a.bJ=d;}
var T8=D(BB);
function BcA(){var a=new T8();A4Z(a);return a;}
function A4Z(a){CP(a);}
function ATA(a,b,c,d){var e,f,g,h,i;e=d.J();f=b+1|0;if(f>e){d.d5=1;return (-1);}g=c.f(b);if(BY(g)){h=b+2|0;if(h<=e){i=c.f(f);if(GA(g,i))return a.k.e(h,c,d);}}return a.k.e(f,c,d);}
function AHs(a){return B(586);}
function AXd(a,b){a.k=b;}
function A4T(a){return (-2147483602);}
function AXa(a,b){return 1;}
function ZN(){Q.call(this);this.NQ=null;}
function BbX(a){var b=new ZN();AQz(b,a);return b;}
function AQz(a,b){a.NQ=b;Be(a);}
function ASe(a,b){return Ug(b);}
function O3(){var a=this;FN.call(a);a.Am=0.0;a.za=null;}
function BcV(){var a=new O3();A0P(a);return a;}
function A0P(a){Lu(a);a.Am=67.0;a.za=S();}
function AGn(a){a.p$(1);}
function AQy(a,b){var c;c=a.kw/a.md;a.jA.Ky(CG(a.k_),CG(a.jP),a.Am,c);a.hs.B4(a.cp,(a.za.M(a.cp)).fB(a.c9),a.ds);a.eK.ch(a.jA);G$(a.eK.c,a.hs.c);if(b){a.hS.ch(a.eK);MY(a.hS.c);a.r1.AK(a.hS);}}
function UR(){C.call(this);this.CB=null;}
function Baw(a){var b=new UR();A1m(b,a);return b;}
function A1m(a,b){J(a);a.CB=b;}
function A84(a){A2t(a.CB);}
var VF=D(C4);
function A4z(a){var b=new VF();AG2(b,a);return b;}
function AG2(a,b){AAs(a,b);}
function AK0(a,b){return a.d1.p(EX(En(b)));}
function ATq(a){return ((((I()).a(B(333))).a(!a.rF?B(56):B(57))).a(a.d1.b())).b();}
var Vg=D(T);
function A_I(){var a=new Vg();API(a);return a;}
function API(a){Bo(a);}
function AUG(a){var b;b=Bdf(a);b.be=1;return b;}
function MF(){var a=this;BB.call(a);a.gr=null;a.uW=null;a.k1=0;}
function A8T(a,b){var c=new MF();AVj(c,a,b);return c;}
function AVj(a,b,c){CP(a);a.gr=b;a.k1=c;}
function AMC(a,b){a.k=b;}
function HC(a){if(a.uW===null)a.uW=Mf(a.gr);return a.uW;}
function AP5(a){return (((I()).a(B(587))).a(HC(a))).b();}
function ADf(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;e=d.J();f=0;g=Bc(3);h=(-1);i=(-1);if(b>=e)return (-1);j=b+1|0;k=c.f(b);l=AG3(k);if(l!==null){m=l.data;n=0;if(m.length!=a.k1)return (-1);while(true){if(n>=a.k1)return a.k.e(j,c,d);if(m[n]!=a.gr.data[n])break;n=n+1|0;}return (-1);}o=g.data;o[f]=k;p=k-4352|0;if(p>=0&&p<19){if(j<e){k=c.f(j);h=k-4449|0;}if(h>=0&&h<21){q=j+1|0;o[1]=k;if(q<e){k=c.f(q);i=k-4519|0;}if(i>=0&&i<28){r=q+1|0;o[2]=k;r=a.k1==3&&o[0]==a.gr.data[0]&&o[1]==a.gr.data[1]&&o[2]==a.gr.data[2]
?a.k.e(r,c,d):(-1);return r;}r=a.k1==2&&o[0]==a.gr.data[0]&&o[1]==a.gr.data[1]?a.k.e(q,c,d):(-1);return r;}return (-1);}return (-1);}
function AXb(a,b){var c,d;a:{if(b instanceof MF){c=b;if(!(HC(c)).z(HC(a))){d=0;break a;}}d=1;}return d;}
function ARF(a,b){return 1;}
var Va=D(T);
function Ba4(){var a=new Va();A4d(a);return a;}
function A4d(a){Bo(a);}
function A1a(a){return (((CR()).bF(33,64)).bF(91,96)).bF(123,126);}
function Ky(){var a=this;C.call(a);a.fw=null;a.dQ=null;a.r6=0;a.KK=0;a.un=0;a.kY=0;a.p4=0;a.tA=0;a.d4=null;}
var Bnr=null;function AIR(){AIR=N(Ky);A$$();}
function A2y(a,b,c){var d=new Ky();XD(d,a,b,c);return d;}
function XD(a,b,c,d){AIR();J(a);a.kY=0;a.p4=0;a.tA=(-1);a.d4=G_();a.KK=b;a.fw=d;a.dQ=HY(Cg(a.fw.cQ/4|0,c));a.dQ.db();a.r6=Bie.i5();a.un=!b?35048:35044;QZ(a);}
function AWs(a){return a.fw;}
function ARJ(a){return (CV(a.dQ)*4|0)/a.fw.cQ|0;}
function Wj(a){if(a.p4){Bie.fD(34962,BD(a.dQ),a.dQ,a.un);a.kY=0;}}
function AWK(a,b,c,d){a.kY=1;Oa(b,a.dQ,d,c);a.dQ.c0(0);a.dQ.cl(d);Wj(a);}
function AQ6(a,b,c){var d;d=Bif;d.QF(a.tA);ABg(a,b,c);ABk(a,d);a.p4=1;}
function ABg(a,b,c){var d,e,f,g,h,i;d=!a.d4.bS?0:1;a:{e=CU(a.fw);if(d){if(c===null){f=0;while(d&&f<e){g=CB(a.fw,f);h=b.lY(g.et);d=h!=a.d4.b2(f)?0:1;f=f+1|0;}}else{i=c.data;d=i.length!=a.d4.bS?0:1;f=0;while(d){if(f>=e)break a;d=i[f]!=a.d4.b2(f)?0:1;f=f+1|0;}}}}b:{if(!d){Bid.c$(34962,a.r6);UT(a,b);a.d4.K();f=0;while(true){if(f>=e)break b;g=CB(a.fw,f);if(c!==null){i=c.data;a.d4.iY(i[f]);}else a.d4.iY(b.lY(g.et));h=a.d4.b2(f);if(h>=0){b.lS(h);b.id(h,g.cK,g.hT,g.im,a.fw.cQ,g.cV);}f=f+1|0;}}}}
function UT(a,b){var c,d,e;if(a.d4===null)return;c=CU(a.fw);d=0;while(d<c){e=a.d4.b2(d);if(e>=0)b.tN(e);d=d+1|0;}}
function ABk(a,b){if(a.kY){b.c$(34962,a.r6);a.dQ.cl(BD(a.dQ));b.fD(34962,BD(a.dQ),a.dQ,a.un);a.kY=0;}}
function AHy(a,b,c){var d;d=Bif;d.QF(0);a.p4=0;}
function QZ(a){AIR();Bnr.c2();Bif.U6(1,Bnr);a.tA=Bnr.Lc();}
function A$$(){Bnr=Fk(1);}
var QP=D();
function ATx(b){$rt_putStderr(b);}
function A70(b){$rt_putStdout(b);}
function Hi(){var a=this;C.call(a);a.bi=null;a.bn=null;a.dh=0.0;a.iL=0.0;a.j7=0.0;a.j2=null;}
function Bns(){var a=new Hi();A0u(a);return a;}
function A0u(a){J(a);a.bi=Bp();a.bn=Sy();a.j2=D3();}
function ALt(a){a.bi.K();a.bn.K();a.j7=0.0;}
function AEn(a){var b,c,d,e,f;b=Gf(a.bi.h+32|0);c=a.bi;d=0;e=c.h;while(d<e){f=c.l(d);b.T(f.e0&65535);d=d+1|0;}b.a(B(588));b.dD(a.j2);b.a(B(436));b.cC(a.dh);b.a(B(436));b.cC(a.iL);b.a(B(436));b.cC(a.j7);return b.b();}
var Mp=D(Dn);
function SV(){var a=this;B7.call(a);a.of=null;a.IT=null;}
function BcI(a,b){var c=new SV();A8g(c,a,b);return c;}
function A8g(a,b,c){a.IT=b;a.of=c;Dq(a);}
function A$Q(a,b){a.of.ek(b);}
function AMc(a,b){a.of.cx(b);}
function AMT(a,b,c){return a.of.cE(b,null);}
function AKY(a,b,c){return a.hY(b,c);}
function AA9(){B7.call(this);this.Oc=null;}
function BaW(a){var b=new AA9();AX6(b,a);return b;}
function AX6(a,b){a.Oc=b;Dq(a);}
function AUp(a,b){}
function AHk(a,b){}
function A87(a,b,c){return 0;}
var FK=D(0);
function SR(){var a=this;C.call(a);a.nK=null;a.uc=null;a.n8=null;a.qY=null;}
function BbB(a,b,c,d){var e=new SR();AJk(e,a,b,c,d);return e;}
function AJk(a,b,c,d,e){a.qY=b;a.nK=c;a.uc=d;a.n8=e;J(a);}
function AIu(a,b){var c,d;if(a.nK.readyState==4){if(a.nK.status!=200)a.uc.cx(a.n8);else{if(NP(a.qY))(C_()).fu((((I()).a(B(589))).a(a.n8)).b());c=a.nK.response;d=(DW()).QR(c);a.uc.cE(a.n8,Bfc(c,d));}a.qY.fJ();}}
function A1w(a,b){a.dU(b);}
function SQ(){var a=this;B7.call(a);a.mA=null;a.qu=null;a.xd=0;a.Dp=null;a.m3=null;}
function Bf2(a,b,c,d,e){var f=new SQ();ARA(f,a,b,c,d,e);return f;}
function ARA(a,b,c,d,e,f){a.m3=b;a.mA=c;a.qu=d;a.xd=e;a.Dp=f;Dq(a);}
function A_E(a,b){a.mA.ek(b);}
function A$A(a,b){a.mA.cx(b);}
function AE6(a,b,c){var d,e,f;d=(Qc(a.m3)).P8();if(a.qu!==null){e=a.qu;d.setAttribute("crossOrigin",$rt_ustr(e));}a.m3.nJ();AGc(d,BcD(a,b,d));if(!a.xd){f=$rt_ustr(b);d.src=f;}else{f=$rt_ustr((((((I()).a(B(590))).a(a.Dp)).a(B(591))).a(SC(c))).b());d.src=f;}return 0;}
function AS6(a,b,c){return a.hY(b,c);}
function SP(){var a=this;C.call(a);a.y$=null;a.Gp=null;}
function Bdb(a,b){var c=new SP();AVU(c,a,b);return c;}
function AVU(a,b,c){a.Gp=b;a.y$=c;J(a);}
function A7R(a,b){a.y$.ek(b.loaded);}
function AXO(a,b){a.dU(b);}
var Lo=D();
var BhJ=null;function Bd_(){Bd_=N(Lo);AVq();}
function AVq(){BhJ=Bc((Mh()).data.length);BhJ.data[BC(BjO)]=1;BhJ.data[BC(BjP)]=2;BhJ.data[BC(BjQ)]=3;BhJ.data[BC(BjR)]=4;BhJ.data[BC(BjS)]=5;}
function U4(){var a=this;C.call(a);a.pY=null;a.j3=null;a.AB=null;a.p3=null;a.oA=null;a.si=null;a.M4=null;}
function BaH(){var a=new U4();ADp(a);return a;}
function ADp(a){J(a);a.pY=Bp();a.j3=Bp();a.AB=Bp();a.p3=Bp();a.oA=Bp();a.si=Bp();a.M4=DH();}
function A81(a,b){if(!a.si.iv(b,1))a.si.F(b);}
function SX(){var a=this;C.call(a);a.nu=null;a.tE=null;a.n7=null;a.ty=null;}
function Bcl(a,b,c,d){var e=new SX();AI8(e,a,b,c,d);return e;}
function AI8(a,b,c,d,e){a.ty=b;a.nu=c;a.tE=d;a.n7=e;J(a);}
function AZe(a,b){if(a.nu.readyState==4){if(a.nu.status!=200)a.tE.cx(a.n7);else{if(NP(a.ty))(C_()).fu((((I()).a(B(589))).a(a.n7)).b());a.tE.cE(a.n7,$rt_str(a.nu.responseText));}a.ty.fJ();}}
function AIl(a,b){a.dU(b);}
function Qw(){Bt.call(this);this.zC=0;}
function A8x(a){var b=new Qw();AK5(b,a);return b;}
function AK5(a,b){Co(a);a.zC=b;}
function AWS(a,b,c,d){var e,f,g,h,i;e=b<d.J()?c.f(b):32;f=!b?32:c.f(b-1|0);g=!d.lH()?d.dI():0;h=e!=32&&!M1(a,e,b,g,c)?0:1;i=f!=32&&!M1(a,f,b-1|0,g,c)?0:1;return h^i^a.zC?(-1):a.k.e(b,c,d);}
function AW9(a,b){return 0;}
function A_k(a){return B(592);}
function M1(a,b,c,d,e){var f;if(!M9(b)&&b!=95){a:{if(F_(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=e.f(c);if(M9(f))return 0;if(F_(f)!=6)return 1;}}return 1;}return 0;}
function Fs(){var a=this;C.call(a);a.En=null;a.Eo=null;a.Eq=null;a.Er=null;a.q9=null;a.gk=null;a.bw=null;a.bt=null;a.gM=0;a.ph=0;a.nf=0;a.gb=0;a.jU=0;a.hd=0;a.uC=0;a.t4=0;a.d$=0;a.tn=0;a.jm=0;a.fG=0;a.c3=null;a.k7=null;a.hH=null;a.rv=0;a.gi=0;a.pn=0.0;a.pG=0.0;a.n3=0.0;a.ow=0.0;a.lR=0;a.cr=null;a.oL=0;a.ov=null;a.jS=null;a.j1=null;a.mD=0;a.B9=null;}
var Bnt=null;var Bnu=null;var Bnv=null;var Bnw=null;function Lz(){Lz=N(Fs);AZY();}
function Bcr(){var a=new Fs();Vv(a);return a;}
function Vv(a){Lz();J(a);a.En=CL();a.Eo=CL();a.Eq=CL();a.Er=CL();a.q9=D3();a.bw=Sy();a.bt=AU$();a.k7=Bp();a.hH=A5K(BiN);a.rv=0;a.pn=0.0;a.pG=1.0;a.n3=0.0;a.ow=1.0;a.lR=0;a.oL=0;a.ov=BL();a.jS=Ph();a.j1=AMh();a.mD=(-1);a.B9=S();}
function RO(b){var c,d,e,f;Lz();c=Bp();if(Z(Br(b,O(1)),O(1)))c.F(EB(1,3,B(464)));if(Z(Br(b,O(2)),O(2)))c.F(EB(2,4,B(465)));if(Z(Br(b,O(4)),O(4)))c.F(EB(4,4,B(465)));if(Z(Br(b,O(8)),O(8)))c.F(EB(8,3,B(593)));if(Z(Br(b,O(16)),O(16)))c.F(EB(16,2,B(466)));d=Y(Fc,c.h);e=0;while(true){f=d.data;if(e>=f.length)break;f[e]=c.l(e);e=e+1|0;}return A0S(d);}
function ATQ(a,b){a.Q1(b,(-1));}
function A00(a,b,c){var d,e;if(a.gk!==null)G(Qg(B(542)));a.gk=b;a.bw.K();a.bt.K();a.k7.K();a.ph=0;a.mD=(-1);a.nf=0;a.c3=null;a.gM=b.cQ/4|0;if(!(a.cr!==null&&a.cr.data.length>=a.gM))a.cr=Ca(a.gM);d=D0(b,1);if(d===null)G(U(B(594)));a.gb=d.cV/4|0;a.jU=d.cK;e=D0(b,8);a.hd=e===null?(-1):e.cV/4|0;e=D0(b,256);a.uC=e===null?(-1):e.cV/4|0;e=D0(b,128);a.t4=e===null?(-1):e.cV/4|0;e=D0(b,2);a.d$=e===null?(-1):e.cV/4|0;a.tn=e!==null?e.cK:0;e=D0(b,4);a.jm=e===null?(-1):e.cV/4|0;e=D0(b,16);a.fG=e===null?(-1):e.cV/4|0;a.xR(null);a.x7(null);a.Dj(null);a.gi
=c;a.j1.wO();}
function LG(a){if(a.c3!==null){a.j1.MG(a.c3.f2);(a.j1.GJ(a.c3.g1)).en(0.5);a.c3.iV=a.c3.g1.IO();a.j1.wO();a.c3.hm=a.nf;a.c3.g2=a.bt.c4-a.nf|0;a.nf=a.bt.c4;a.c3=null;}}
function AKf(a,b,c){return a.L8(b,c,A8D());}
function AGA(a,b,c,d){if(a.gk===null)G(Qg(B(543)));LG(a);a.c3=d;a.c3.pO=b;a.c3.hZ=c;a.gi=c;a.k7.F(a.c3);a.xR(null);a.x7(null);a.Dj(null);return a.c3;}
function ALm(a,b){var c,d;LG(a);if(a.gk===null)G(U(B(543)));if(!NV(a.gk,b.gS()))G(U(B(595)));if(Cg(b.v4(),a.gM)<a.bw.Z)G(U((((((((I()).a(B(596))).j(b.v4())).a(B(597))).j(a.gM)).a(B(598))).j(a.bw.Z)).b()));if(b.xb()<a.bt.c4)G(U((((((I()).a(B(599))).j(b.xb())).a(B(598))).j(a.bt.c4)).b()));b.FN(a.bw.R,0,a.bw.Z);b.OI(a.bt.hM,0,a.bt.c4);c=a.k7.bZ();while(c.bC()){d=c.bz();d.b7=b;}a.k7.K();a.gk=null;a.bw.K();a.bt.K();return b;}
function AEk(a){return a.Ln(Bes(1,a.bw.Z/a.gM|0,a.bt.c4,a.gk));}
function AGP(a){return a.gk;}
function AQ0(a){return a.gi;}
function AVX(a,b){var c,d;c=a.hH;d=b===null?0:1;a.rv=d;if(!d){Bv();b=BiN;}c.eR(b);}
function AEB(a,b,c,d,e){a.pn=b;a.n3=c;a.pG=d-b;a.ow=e-c;a.lR=DG(b)&&DG(c)&&Dl(d,1.0)&&Dl(e,1.0)?0:1;}
function AHz(a,b){if(b!==null){a.lR=1;a.MU(b.RL(),b.Sk(),b.Tv(),b.Rm());}else{a.lR=0;a.n3=0.0;a.pn=0.0;a.ow=1.0;a.pG=1.0;}}
function AO7(a,b){a.oL=b===null?0:1;if(!a.oL){a.ov.fx();a.jS.Ax();}else{a.ov.ch(b);((a.jS.D$(b)).CT()).AE();}}
function AIz(a,b){a.bw.D9(Cg(a.gM,b));}
function AXM(a,b){a.bt.O$(b);}
function AN6(a,b){if(!a.gi)a.hn(4*b|0);else if(a.gi!=1)a.hn(6*b|0);else a.hn(8*b|0);}
function AJw(a){return a.mD<<16>>16;}
function ACZ(b,c,d,e){var f,g,h,i,j,k,l;Lz();if(d>2){f=b.data;g=Bnv;h=f[c];i=c+1|0;j=f[i];k=c+2|0;(g.I(h,j,f[k])).kM(e);f[c]=Bnv.n;f[i]=Bnv.o;f[k]=Bnv.q;}else if(d<=1){f=b.data;f[c]=((Bnv.I(f[c],0.0,0.0)).kM(e)).n;}else{f=b.data;g=Bnv;l=f[c];k=c+1|0;(g.I(l,f[k],0.0)).kM(e);f[c]=Bnv.n;f[k]=Bnv.o;}}
function IB(b,c,d,e){var f,g,h,i,j,k;Lz();if(d>2){f=b.data;g=Bnv;h=f[c];i=c+1|0;j=f[i];k=c+2|0;((g.I(h,j,f[k])).qV(e)).bU();f[c]=Bnv.n;f[i]=Bnv.o;f[k]=Bnv.q;}else if(d<=1){f=b.data;f[c]=(((Bnv.I(f[c],0.0,0.0)).qV(e)).bU()).n;}else{f=b.data;g=Bnv;j=f[c];i=c+1|0;((g.I(j,f[i],0.0)).qV(e)).bU();f[c]=Bnv.n;f[i]=Bnv.o;}}
function RU(a,b,c){var d,e,f,g,h,i,j;d=a.bw.Z;a.bw.rH(b,c,a.gM);e=a.ph;a.ph=e+1|0;a.mD=e;if(a.oL){ACZ(a.bw.R,d+a.gb|0,a.jU,a.ov);if(a.hd>=0)IB(a.bw.R,d+a.hd|0,3,a.jS);if(a.uC>=0)IB(a.bw.R,d+a.uC|0,3,a.jS);if(a.t4>=0)IB(a.bw.R,d+a.t4|0,3,a.jS);}f=a.bw.R.data[d+a.gb|0];g=a.jU<=1?0.0:a.bw.R.data[(d+a.gb|0)+1|0];h=a.jU<=2?0.0:a.bw.R.data[(d+a.gb|0)+2|0];a.j1.NM(f,g,h);if(a.rv){if(a.d$>=0){i=a.bw.R.data;j=d+a.d$|0;i[j]=i[j]*a.hH.s;i=a.bw.R.data;j=(d+a.d$|0)+1|0;i[j]=i[j]*a.hH.r;i=a.bw.R.data;j=(d+a.d$|0)+2|0;i[j]
=i[j]*a.hH.t;if(a.tn>3){i=a.bw.R.data;j=(d+a.d$|0)+3|0;i[j]=i[j]*a.hH.G;}}else if(a.jm>=0){Zs(a.q9,a.bw.R.data[d+a.jm|0]);a.bw.R.data[d+a.jm|0]=(a.q9.Jg(a.hH)).ny();}}if(a.lR&&a.fG>=0){a.bw.R.data[d+a.fG|0]=a.pn+a.pG*a.bw.R.data[d+a.fG|0];a.bw.R.data[(d+a.fG|0)+1|0]=a.n3+a.ow*a.bw.R.data[(d+a.fG|0)+1|0];}}
function AYL(a,b,c,d,e){if(a.ph>65535)G(U(B(600)));a.cr.data[a.gb]=b.n;if(a.jU>1)a.cr.data[a.gb+1|0]=b.o;if(a.jU>2)a.cr.data[a.gb+2|0]=b.q;if(a.hd>=0){if(c===null)c=(a.B9.M(b)).bU();a.cr.data[a.hd]=c.n;a.cr.data[a.hd+1|0]=c.o;a.cr.data[a.hd+2|0]=c.q;}if(a.d$>=0){if(d===null){Bv();d=BiN;}a.cr.data[a.d$]=d.s;a.cr.data[a.d$+1|0]=d.r;a.cr.data[a.d$+2|0]=d.t;if(a.tn>3)a.cr.data[a.d$+3|0]=d.G;}else if(a.jm>0){if(d===null){Bv();d=BiN;}a.cr.data[a.jm]=d.ny();}if(e!==null&&a.fG>=0){a.cr.data[a.fG]=e.eW;a.cr.data[a.fG
+1|0]=e.eV;}RU(a,a.cr,0);return a.mD<<16>>16;}
function AMF(a,b){return a.KT(!b.q2?null:b.mY,!b.t3?null:b.pj,!b.rh?null:b.oI,!b.pr?null:b.ke);}
function A1E(a,b,c,d,e){a.hn(4);a.bt.cd(b);a.bt.cd(c);a.bt.cd(d);a.bt.cd(e);}
function A1K(a,b,c,d,e,f,g){a.hn(6);a.bt.cd(b);a.bt.cd(c);a.bt.cd(d);a.bt.cd(e);a.bt.cd(f);a.bt.cd(g);}
function AW4(a,b,c,d,e,f,g,h,i){a.hn(8);a.bt.cd(b);a.bt.cd(c);a.bt.cd(d);a.bt.cd(e);a.bt.cd(f);a.bt.cd(g);a.bt.cd(h);a.bt.cd(i);}
function AOZ(a,b,c,d,e){if(a.gi==4)a.Oy(b,c,d,d,e,b);else if(a.gi==1)a.EQ(b,c,c,d,d,e,e,b);else{if(a.gi)G(U(B(601)));a.Hr(b,c,d,e);}}
function A6I(a,b,c,d,e){a.um(4);a.d2(a.dH(b),a.dH(c),a.dH(d),a.dH(e));}
function ALH(a,b,c,d,e,f){var g,h,i,j,k;g=(a.En.dK(b,f,null,null)).n6(0.0,1.0);h=(a.Eo.dK(c,f,null,null)).n6(1.0,1.0);i=a.Eq;j=null;k=null;i=(i.dK(d,f,j,k)).n6(1.0,0.0);k=(a.Er.dK(e,f,null,null)).n6(0.0,0.0);a.NE(g,h,i,k);}
function AHp(a,b,c,d){A6D(a,b,c,d);}
function AZY(){Bnt=AU$();Bnu=Sy();Bnv=S();Bnw=null;}
function Hc(){BH.call(this);this.PR=null;}
var Bnx=Ba;function BbW(){BbW=N(Hc);AI2();}
function AI2(){Bnx=BQ(B(602));}
function SW(){var a=this;C.call(a);a.lt=null;a.uq=null;a.or=null;a.pE=null;}
function Bc1(a,b,c,d){var e=new SW();A5B(e,a,b,c,d);return e;}
function A5B(a,b,c,d,e){a.pE=b;a.lt=c;a.uq=d;a.or=e;J(a);}
function AQx(a,b){var c,d,e,f,g,h;if(a.lt.readyState==4){c=1;if(a.lt.status!=200)a.uq.cx(a.or);else{if(NP(a.pE))(C_()).fu((((I()).a(B(603))).a(a.or)).b());d=a.lt.response;e=(Qc(a.pE)).hu();f=e.pg();g=f.createElement("script");h=f.createTextNode(d);g.appendChild(h);f.body.appendChild(g);c=a.uq.cE(a.or,$rt_str(a.lt.responseText))?0:1;}if(c)a.pE.fJ();}}
function AZz(a,b){a.dU(b);}
var Jc=D(T);
function Bcf(){var a=new Jc();Rr(a);return a;}
function Rr(a){Bo(a);}
function YV(a){return ((CR()).bF(9,13)).cG(32);}
var Pn=D(DY);
function Be4(){var a=new Pn();AOj(a);return a;}
function AOj(a){Jh(a);}
var Pp=D(DY);
function BaT(){var a=new Pp();A03(a);return a;}
function A03(a){Jh(a);}
function Y7(a){return S();}
function AL6(a){return Y7(a);}
var AAF=D();
function Oa(b,c,d,e){var f;f=AQr(c);f.c2();c.c0(0);f.wx(b,e,d);c.c0(0);if(!(c instanceof Ft))c.cl(d);else c.cl(d<<2);}
function AQr(b){var c;c=null;if(b instanceof Ft)c=b.sP();else if(b instanceof DX)c=b;if(c!==null)return c;G(U(B(604)));}
function HY(b){var c;if(!HZ())return AVo(Ca(b));c=FV(b*4|0);FH(c,EV());return c.sP();}
function ML(b){var c;if(!HZ())return Hu(Cj(b));c=FV(b);FH(c,EV());return c;}
function AAS(b){var c;if(!HZ())return A3N(MW(b));c=FV(b*2|0);FH(c,EV());return c.v3();}
function Fk(b){var c;if(!HZ())return A0J(Bc(b));c=FV(b*4|0);FH(c,EV());return c.yJ();}
var KN=D(0);
var NM=D(0);
var Kc=D(0);
var Pj=D();
function AMp(a,b,c){a.WD($rt_str(b),Gk(c,"handleEvent"));}
function AMU(a,b,c){a.VR($rt_str(b),Gk(c,"handleEvent"));}
function AEL(a,b){return a.Mm(b);}
function AOk(a,b,c,d){a.Rp($rt_str(b),Gk(c,"handleEvent"),d?1:0);}
function ASu(a,b){return !!a.WG(b);}
function AF_(a){return a.O7();}
function ADu(a,b,c,d){a.SK($rt_str(b),Gk(c,"handleEvent"),d?1:0);}
function YC(){var a=this;C.call(a);a.gT=null;a.FL=null;}
function Ph(){var a=new YC();ALV(a);return a;}
function ALV(a){J(a);a.gT=Ca(9);a.FL=Ca(9);a.Ax();}
function A4R(a){var b,c;b=a.gT;c=b.data;c[0]=1.0;c[1]=0.0;c[2]=0.0;c[3]=0.0;c[4]=1.0;c[5]=0.0;c[6]=0.0;c[7]=0.0;c[8]=1.0;return a;}
function ALe(a){var b,c;b=a.gT;c=b.data;return c[0]*c[4]*c[8]+c[3]*c[7]*c[2]+c[6]*c[1]*c[5]-c[0]*c[7]*c[5]-c[3]*c[1]*c[8]-c[6]*c[4]*c[2];}
function A5P(a){var b,c,d,e,f,g;b=a.H2();if(b===0.0)G(U(B(605)));c=1.0/b;d=a.FL;e=d.data;f=a.gT;g=f.data;e[0]=g[4]*g[8]-g[5]*g[7];e[1]=g[2]*g[7]-g[1]*g[8];e[2]=g[1]*g[5]-g[2]*g[4];e[3]=g[5]*g[6]-g[3]*g[8];e[4]=g[0]*g[8]-g[2]*g[6];e[5]=g[2]*g[3]-g[0]*g[5];e[6]=g[3]*g[7]-g[4]*g[6];e[7]=g[1]*g[6]-g[0]*g[7];e[8]=g[0]*g[4]-g[1]*g[3];g[0]=c*e[0];g[1]=c*e[1];g[2]=c*e[2];g[3]=c*e[3];g[4]=c*e[4];g[5]=c*e[5];g[6]=c*e[6];g[7]=c*e[7];g[8]=c*e[8];return a;}
function A_h(a,b){var c,d;c=a.gT;d=c.data;d[0]=b.c.data[0];d[1]=b.c.data[1];d[2]=b.c.data[2];d[3]=b.c.data[4];d[4]=b.c.data[5];d[5]=b.c.data[6];d[6]=b.c.data[8];d[7]=b.c.data[9];d[8]=b.c.data[10];return a;}
function AUx(a){var b,c,d,e,f,g,h,i;b=a.gT;c=b.data;d=c[1];e=c[2];f=c[3];g=c[5];h=c[6];i=c[7];c[3]=d;c[6]=e;c[1]=f;c[7]=g;c[2]=h;c[5]=i;return a;}
function T9(){var a=this;G5.call(a);a.Ck=null;a.sG=null;a.xB=null;a.Ca=null;}
function Bat(a,b){var c=new T9();ARE(c,a,b);return c;}
function ARE(a,b,c){R2(a);a.Ck=b;a.sG=c;a.xB=A_V();a.Ca=Bee();}
function A1R(a,b){var c,d,e;c=AHA();d=!!b.xo;c.alpha=d;d=!!b.Fx;c.antialias=d;d=!!b.AJ;c.stencil=d;d=!!b.D_;c.premultipliedAlpha=d;d=!!b.FW;c.preserveDrawingBuffer=d;e=a.sG;d=e.getContext("webgl",c);return d;}
function A1A(a){return a.sG;}
function AUb(a){return AZk();}
function A3L(a){return a.Ck;}
function A1p(a){var b;b=(a.hu()).pg();return b.createElement("img");}
function A8G(a){return new XMLHttpRequest();}
function A$m(a){return BeQ();}
function A9W(a){return a.xB;}
function AUZ(a){return a.Ca;}
var Pf=D();
function Cu(){C.call(this);this.c=null;}
var Bny=null;var Bnz=null;var BnA=null;var BnB=null;var BnC=null;var BnD=null;var BnE=null;var BnF=null;var BnG=null;var BnH=null;var BnI=null;function CC(){CC=N(Cu);AVH();}
function BL(){var a=new Cu();Tl(a);return a;}
function Tl(a){CC();J(a);a.c=Ca(16);a.c.data[0]=1.0;a.c.data[5]=1.0;a.c.data[10]=1.0;a.c.data[15]=1.0;}
function A_s(a,b){return a.Ex(b.c);}
function AFD(a,b){var c;c=b.data;a.c.data[0]=c[0];a.c.data[1]=c[1];a.c.data[2]=c[2];a.c.data[3]=c[3];a.c.data[4]=c[4];a.c.data[5]=c[5];a.c.data[6]=c[6];a.c.data[7]=c[7];a.c.data[8]=c[8];a.c.data[9]=c[9];a.c.data[10]=c[10];a.c.data[11]=c[11];a.c.data[12]=c[12];a.c.data[13]=c[13];a.c.data[14]=c[14];a.c.data[15]=c[15];return a;}
function A9X(a,b){return a.HZ(b.dl,b.dj,b.dk,b.d7);}
function AZ2(a,b,c,d,e){return a.ND(0.0,0.0,0.0,b,c,d,e);}
function A6w(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t;i=e*2.0;j=f*2.0;k=g*2.0;l=h*i;m=h*j;n=h*k;o=e*i;p=e*j;q=e*k;r=f*j;s=f*k;t=g*k;a.c.data[0]=1.0-(r+t);a.c.data[4]=p-n;a.c.data[8]=q+m;a.c.data[12]=b;a.c.data[1]=p+n;a.c.data[5]=1.0-(o+t);a.c.data[9]=s-l;a.c.data[13]=c;a.c.data[2]=q-m;a.c.data[6]=s+l;a.c.data[10]=1.0-(o+r);a.c.data[14]=d;a.c.data[3]=0.0;a.c.data[7]=0.0;a.c.data[11]=0.0;a.c.data[15]=1.0;return a;}
function AWF(a,b,c,d){return a.JQ(b.n,b.o,b.q,c.dl,c.dj,c.dk,c.d7,d.n,d.o,d.q);}
function ATr(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o,p,q,r,s,t,u,v,w;l=e*2.0;m=f*2.0;n=g*2.0;o=h*l;p=h*m;q=h*n;r=e*l;s=e*m;t=e*n;u=f*m;v=f*n;w=g*n;a.c.data[0]=i*(1.0-(u+w));a.c.data[4]=j*(s-q);a.c.data[8]=k*(t+p);a.c.data[12]=b;a.c.data[1]=i*(s+q);a.c.data[5]=j*(1.0-(r+w));a.c.data[9]=k*(v-o);a.c.data[13]=c;a.c.data[2]=i*(t-p);a.c.data[6]=j*(v+o);a.c.data[10]=k*(1.0-(r+u));a.c.data[14]=d;a.c.data[3]=0.0;a.c.data[7]=0.0;a.c.data[11]=0.0;a.c.data[15]=1.0;return a;}
function ANa(a,b){CC();Bny.data[0]=a.c.data[0]*b.c.data[0]+a.c.data[4]*b.c.data[1]+a.c.data[8]*b.c.data[2]+a.c.data[12]*b.c.data[3];Bny.data[4]=a.c.data[0]*b.c.data[4]+a.c.data[4]*b.c.data[5]+a.c.data[8]*b.c.data[6]+a.c.data[12]*b.c.data[7];Bny.data[8]=a.c.data[0]*b.c.data[8]+a.c.data[4]*b.c.data[9]+a.c.data[8]*b.c.data[10]+a.c.data[12]*b.c.data[11];Bny.data[12]=a.c.data[0]*b.c.data[12]+a.c.data[4]*b.c.data[13]+a.c.data[8]*b.c.data[14]+a.c.data[12]*b.c.data[15];Bny.data[1]=a.c.data[1]*b.c.data[0]+a.c.data[5]
*b.c.data[1]+a.c.data[9]*b.c.data[2]+a.c.data[13]*b.c.data[3];Bny.data[5]=a.c.data[1]*b.c.data[4]+a.c.data[5]*b.c.data[5]+a.c.data[9]*b.c.data[6]+a.c.data[13]*b.c.data[7];Bny.data[9]=a.c.data[1]*b.c.data[8]+a.c.data[5]*b.c.data[9]+a.c.data[9]*b.c.data[10]+a.c.data[13]*b.c.data[11];Bny.data[13]=a.c.data[1]*b.c.data[12]+a.c.data[5]*b.c.data[13]+a.c.data[9]*b.c.data[14]+a.c.data[13]*b.c.data[15];Bny.data[2]=a.c.data[2]*b.c.data[0]+a.c.data[6]*b.c.data[1]+a.c.data[10]*b.c.data[2]+a.c.data[14]*b.c.data[3];Bny.data[6]
=a.c.data[2]*b.c.data[4]+a.c.data[6]*b.c.data[5]+a.c.data[10]*b.c.data[6]+a.c.data[14]*b.c.data[7];Bny.data[10]=a.c.data[2]*b.c.data[8]+a.c.data[6]*b.c.data[9]+a.c.data[10]*b.c.data[10]+a.c.data[14]*b.c.data[11];Bny.data[14]=a.c.data[2]*b.c.data[12]+a.c.data[6]*b.c.data[13]+a.c.data[10]*b.c.data[14]+a.c.data[14]*b.c.data[15];Bny.data[3]=a.c.data[3]*b.c.data[0]+a.c.data[7]*b.c.data[1]+a.c.data[11]*b.c.data[2]+a.c.data[15]*b.c.data[3];Bny.data[7]=a.c.data[3]*b.c.data[4]+a.c.data[7]*b.c.data[5]+a.c.data[11]*b.c.data[6]
+a.c.data[15]*b.c.data[7];Bny.data[11]=a.c.data[3]*b.c.data[8]+a.c.data[7]*b.c.data[9]+a.c.data[11]*b.c.data[10]+a.c.data[15]*b.c.data[11];Bny.data[15]=a.c.data[3]*b.c.data[12]+a.c.data[7]*b.c.data[13]+a.c.data[11]*b.c.data[14]+a.c.data[15]*b.c.data[15];return a.Ex(Bny);}
function AHJ(a){a.c.data[0]=1.0;a.c.data[4]=0.0;a.c.data[8]=0.0;a.c.data[12]=0.0;a.c.data[1]=0.0;a.c.data[5]=1.0;a.c.data[9]=0.0;a.c.data[13]=0.0;a.c.data[2]=0.0;a.c.data[6]=0.0;a.c.data[10]=1.0;a.c.data[14]=0.0;a.c.data[3]=0.0;a.c.data[7]=0.0;a.c.data[11]=0.0;a.c.data[15]=1.0;return a;}
function A66(a){return a.c.data[0]*a.c.data[5]*a.c.data[10]+a.c.data[4]*a.c.data[9]*a.c.data[2]+a.c.data[8]*a.c.data[1]*a.c.data[6]-a.c.data[0]*a.c.data[9]*a.c.data[6]-a.c.data[4]*a.c.data[1]*a.c.data[10]-a.c.data[8]*a.c.data[5]*a.c.data[2];}
function AE2(a,b,c,d,e){var f,g,h,i,j;a.fx();f=1.0/AQN(d*0.017453292519943295/2.0);g=c+b;h=b-c;i=g/h;j=2.0*c*b/h;a.c.data[0]=f/e;a.c.data[1]=0.0;a.c.data[2]=0.0;a.c.data[3]=0.0;a.c.data[4]=0.0;a.c.data[5]=f;a.c.data[6]=0.0;a.c.data[7]=0.0;a.c.data[8]=0.0;a.c.data[9]=0.0;a.c.data[10]=i;a.c.data[11]=(-1.0);a.c.data[12]=0.0;a.c.data[13]=0.0;a.c.data[14]=j;a.c.data[15]=0.0;return a;}
function A3S(a,b,c,d,e){a.zf(b,b+d,c,c+e,0.0,1.0);return a;}
function A4s(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a.fx();h=c-b;i=2.0/h;j=e-d;k=2.0/j;l=g-f;m=(-2.0)/l;n= -(c+b)/h;o= -(e+d)/j;p= -(g+f)/l;a.c.data[0]=i;a.c.data[1]=0.0;a.c.data[2]=0.0;a.c.data[3]=0.0;a.c.data[4]=0.0;a.c.data[5]=k;a.c.data[6]=0.0;a.c.data[7]=0.0;a.c.data[8]=0.0;a.c.data[9]=0.0;a.c.data[10]=m;a.c.data[11]=0.0;a.c.data[12]=n;a.c.data[13]=o;a.c.data[14]=p;a.c.data[15]=1.0;return a;}
function AF7(a,b,c,d){a.fx();a.c.data[12]=b;a.c.data[13]=c;a.c.data[14]=d;return a;}
function AWp(a,b,c){if(c===0.0){a.fx();return a;}CC();return a.Gw(Bnz.wp(b,c));}
function AIh(a,b,c){CC();(BnB.M(b)).bU();(BnC.M(b)).bU();(BnC.iC(c)).bU();((BnD.M(BnC)).iC(BnB)).bU();a.fx();a.c.data[0]=BnC.n;a.c.data[4]=BnC.o;a.c.data[8]=BnC.q;a.c.data[1]=BnD.n;a.c.data[5]=BnD.o;a.c.data[9]=BnD.q;a.c.data[2]= -BnB.n;a.c.data[6]= -BnB.o;a.c.data[10]= -BnB.q;return a;}
function AZT(a,b,c,d){CC();(BnE.M(c)).gl(b);a.QE(BnE,d);a.hC(BnF.IX( -b.n, -b.o, -b.q));return a;}
function AFh(a,b){b.n=a.c.data[12];b.o=a.c.data[13];b.q=a.c.data[14];return b;}
function OZ(b,c){var d,e,f,g;CC();d=c.data;e=b.data;f=Ca(16);g=f.data;g[0]=e[0]*d[0]+e[4]*d[1]+e[8]*d[2]+e[12]*d[3];g[4]=e[0]*d[4]+e[4]*d[5]+e[8]*d[6]+e[12]*d[7];g[8]=e[0]*d[8]+e[4]*d[9]+e[8]*d[10]+e[12]*d[11];g[12]=e[0]*d[12]+e[4]*d[13]+e[8]*d[14]+e[12]*d[15];g[1]=e[1]*d[0]+e[5]*d[1]+e[9]*d[2]+e[13]*d[3];g[5]=e[1]*d[4]+e[5]*d[5]+e[9]*d[6]+e[13]*d[7];g[9]=e[1]*d[8]+e[5]*d[9]+e[9]*d[10]+e[13]*d[11];g[13]=e[1]*d[12]+e[5]*d[13]+e[9]*d[14]+e[13]*d[15];g[2]=e[2]*d[0]+e[6]*d[1]+e[10]*d[2]+e[14]*d[3];g[6]=e[2]*d[4]
+e[6]*d[5]+e[10]*d[6]+e[14]*d[7];g[10]=e[2]*d[8]+e[6]*d[9]+e[10]*d[10]+e[14]*d[11];g[14]=e[2]*d[12]+e[6]*d[13]+e[10]*d[14]+e[14]*d[15];g[3]=e[3]*d[0]+e[7]*d[1]+e[11]*d[2]+e[15]*d[3];g[7]=e[3]*d[4]+e[7]*d[5]+e[11]*d[6]+e[15]*d[7];g[11]=e[3]*d[8]+e[7]*d[9]+e[11]*d[10]+e[15]*d[11];g[15]=e[3]*d[12]+e[7]*d[13]+e[11]*d[14]+e[15]*d[15];X(f,0,b,0,16);}
function Uk(b){var c;CC();c=b.data;return c[3]*c[6]*c[9]*c[12]-c[2]*c[7]*c[9]*c[12]-c[3]*c[5]*c[10]*c[12]+c[1]*c[7]*c[10]*c[12]+c[2]*c[5]*c[11]*c[12]-c[1]*c[6]*c[11]*c[12]-c[3]*c[6]*c[8]*c[13]+c[2]*c[7]*c[8]*c[13]+c[3]*c[4]*c[10]*c[13]-c[0]*c[7]*c[10]*c[13]-c[2]*c[4]*c[11]*c[13]+c[0]*c[6]*c[11]*c[13]+c[3]*c[5]*c[8]*c[14]-c[1]*c[7]*c[8]*c[14]-c[3]*c[4]*c[9]*c[14]+c[0]*c[7]*c[9]*c[14]+c[1]*c[4]*c[11]*c[14]-c[0]*c[5]*c[11]*c[14]-c[2]*c[5]*c[8]*c[15]+c[1]*c[6]*c[8]*c[15]+c[2]*c[4]*c[9]*c[15]-c[0]*c[6]*c[9]*c[15]
-c[1]*c[4]*c[10]*c[15]+c[0]*c[5]*c[10]*c[15];}
function QS(b){var c,d,e,f,g;CC();c=Ca(16);d=Uk(b);if(d===0.0)return 0;e=c.data;f=b.data;e[0]=f[9]*f[14]*f[7]-f[13]*f[10]*f[7]+f[13]*f[6]*f[11]-f[5]*f[14]*f[11]-f[9]*f[6]*f[15]+f[5]*f[10]*f[15];e[4]=f[12]*f[10]*f[7]-f[8]*f[14]*f[7]-f[12]*f[6]*f[11]+f[4]*f[14]*f[11]+f[8]*f[6]*f[15]-f[4]*f[10]*f[15];e[8]=f[8]*f[13]*f[7]-f[12]*f[9]*f[7]+f[12]*f[5]*f[11]-f[4]*f[13]*f[11]-f[8]*f[5]*f[15]+f[4]*f[9]*f[15];e[12]=f[12]*f[9]*f[6]-f[8]*f[13]*f[6]-f[12]*f[5]*f[10]+f[4]*f[13]*f[10]+f[8]*f[5]*f[14]-f[4]*f[9]*f[14];e[1]=f[13]
*f[10]*f[3]-f[9]*f[14]*f[3]-f[13]*f[2]*f[11]+f[1]*f[14]*f[11]+f[9]*f[2]*f[15]-f[1]*f[10]*f[15];e[5]=f[8]*f[14]*f[3]-f[12]*f[10]*f[3]+f[12]*f[2]*f[11]-f[0]*f[14]*f[11]-f[8]*f[2]*f[15]+f[0]*f[10]*f[15];e[9]=f[12]*f[9]*f[3]-f[8]*f[13]*f[3]-f[12]*f[1]*f[11]+f[0]*f[13]*f[11]+f[8]*f[1]*f[15]-f[0]*f[9]*f[15];e[13]=f[8]*f[13]*f[2]-f[12]*f[9]*f[2]+f[12]*f[1]*f[10]-f[0]*f[13]*f[10]-f[8]*f[1]*f[14]+f[0]*f[9]*f[14];e[2]=f[5]*f[14]*f[3]-f[13]*f[6]*f[3]+f[13]*f[2]*f[7]-f[1]*f[14]*f[7]-f[5]*f[2]*f[15]+f[1]*f[6]*f[15];e[6]
=f[12]*f[6]*f[3]-f[4]*f[14]*f[3]-f[12]*f[2]*f[7]+f[0]*f[14]*f[7]+f[4]*f[2]*f[15]-f[0]*f[6]*f[15];e[10]=f[4]*f[13]*f[3]-f[12]*f[5]*f[3]+f[12]*f[1]*f[7]-f[0]*f[13]*f[7]-f[4]*f[1]*f[15]+f[0]*f[5]*f[15];e[14]=f[12]*f[5]*f[2]-f[4]*f[13]*f[2]-f[12]*f[1]*f[6]+f[0]*f[13]*f[6]+f[4]*f[1]*f[14]-f[0]*f[5]*f[14];e[3]=f[9]*f[6]*f[3]-f[5]*f[10]*f[3]-f[9]*f[2]*f[7]+f[1]*f[10]*f[7]+f[5]*f[2]*f[11]-f[1]*f[6]*f[11];e[7]=f[4]*f[10]*f[3]-f[8]*f[6]*f[3]+f[8]*f[2]*f[7]-f[0]*f[10]*f[7]-f[4]*f[2]*f[11]+f[0]*f[6]*f[11];e[11]=f[8]*f[5]
*f[3]-f[4]*f[9]*f[3]-f[8]*f[1]*f[7]+f[0]*f[9]*f[7]+f[4]*f[1]*f[11]-f[0]*f[5]*f[11];e[15]=f[4]*f[9]*f[2]-f[8]*f[5]*f[2]+f[8]*f[1]*f[6]-f[0]*f[9]*f[6]-f[4]*f[1]*f[10]+f[0]*f[5]*f[10];g=1.0/d;f[0]=e[0]*g;f[4]=e[4]*g;f[8]=e[8]*g;f[12]=e[12]*g;f[1]=e[1]*g;f[5]=e[5]*g;f[9]=e[9]*g;f[13]=e[13]*g;f[2]=e[2]*g;f[6]=e[6]*g;f[10]=e[10]*g;f[14]=e[14]*g;f[3]=e[3]*g;f[7]=e[7]*g;f[11]=e[11]*g;f[15]=e[15]*g;return 1;}
function Y0(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;CC();e=b.data;f=c.data;g=d+0|0;h=f[g]*e[3];i=d+1|0;j=h+f[i]*e[7];k=d+2|0;l=1.0/(j+f[k]*e[11]+e[15]);m=(f[g]*e[0]+f[i]*e[4]+f[k]*e[8]+e[12])*l;n=(f[g]*e[1]+f[i]*e[5]+f[k]*e[9]+e[13])*l;o=(f[g]*e[2]+f[i]*e[6]+f[k]*e[10]+e[14])*l;f[g]=m;f[i]=n;f[k]=o;}
function G$(b,c){CC();OZ(b,c);}
function TX(b,c,d,e,f){var g;CC();g=0;while(g<e){Y0(b,c,d);d=d+f|0;g=g+1|0;}}
function MY(b){CC();return QS(b);}
function A2q(a,b,c,d){CC();Bny.data[0]=1.0;Bny.data[4]=0.0;Bny.data[8]=0.0;Bny.data[12]=b;Bny.data[1]=0.0;Bny.data[5]=1.0;Bny.data[9]=0.0;Bny.data[13]=c;Bny.data[2]=0.0;Bny.data[6]=0.0;Bny.data[10]=1.0;Bny.data[14]=d;Bny.data[3]=0.0;Bny.data[7]=0.0;Bny.data[11]=0.0;Bny.data[15]=1.0;G$(a.c,Bny);return a;}
function AWc(a,b,c){if(c===0.0)return a;CC();Bnz.wp(b,c);return a.Mk(Bnz);}
function APU(a,b){CC();b.J7(Bny);G$(a.c,Bny);return a;}
function A5g(a){var b,c;a:{b:{if(!Dl(a.c.data[0],1.0))break b;if(!Dl(a.c.data[5],1.0))break b;if(!Dl(a.c.data[10],1.0))break b;b=a.c.data[4];if(!DG(b))break b;if(!DG(a.c.data[8]))break b;if(!DG(a.c.data[1]))break b;if(!DG(a.c.data[9]))break b;b=a.c.data[2];if(!DG(b))break b;if(DG(a.c.data[6])){c=0;break a;}}c=1;}return c;}
function AVH(){Bny=Ca(16);Bnz=AWd();BnA=AWd();BnB=S();BnC=S();BnD=S();BnE=S();BnF=BL();BnG=S();BnH=S();BnI=S();}
var ACY=D(Bm);
function A9B(){var a=new ACY();A5F(a);return a;}
function A5F(a){Cx(a);}
var AAi=D(Ee);
function Bfs(a,b,c){var d=new AAi();AZ3(d,a,b,c);return d;}
function AZ3(a,b,c,d){Nr(a,b,c,d);}
function AEw(a,b,c,d){var e;e=a.k.e(b,c,d);if(e>=0)return e;return a.Y.e(b,c,d);}
var AAB=D(T);
function BfJ(){var a=new AAB();AFf(a);return a;}
function AFf(a){Bo(a);}
function AKB(a){return Bag(a);}
function ZS(){var a=this;C.call(a);a.Bt=0;a.E1=0;a.Ej=null;}
function Bbi(a,b){var c=new ZS();AHr(c,a,b);return c;}
function AHr(a,b,c){a.Ej=b;a.E1=c;J(a);a.Bt=a.E1;}
function AMg(a){return Gh(a.Ej,a.Bt);}
function Gz(){C.call(this);this.eZ=null;}
var BhK=null;var BnJ=null;var BnK=null;function EH(){EH=N(Gz);ANl();}
function AXA(){var a=new Gz();UM(a);return a;}
function Q0(){EH();if(BnK===null)BnK=AXA();return BnK;}
function UM(a){EH();J(a);a.eZ=AXL(0,8);a.G8();}
function A9n(a,b,c){return a.Gg(b,c,0.0,0);}
function A9Q(a,b,c,d,e){var f,g,$$je;if(b.dB!=(-1))G(W(B(606)));b.ij=CA(E_(CD(),O(1000000)),Bgy(c*1000.0));b.sK=Bgy(d*1000.0);b.dB=e;f=a.eZ;Eq(f);a:{try{a.eZ.F(b);Ch(f);}catch($$e){$$je=R($$e);g=$$je;break a;}M8();return b;}Ch(f);G(g);}
function ASS(a){var b,c,d,$$je;EH();b=BhK;Eq(b);a:{b:{try{if(!BhK.iv(a,1))break b;Ch(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}c:{try{BhK.F(a);if(BnJ!==null)break c;d=(El()).hu();BnJ=BcS(d.P6());break c;}catch($$e){$$je=R($$e);c=$$je;break a;}}try{M8();Ch(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}Ch(b);G(c);}
function ARq(a,b,c){var d,e,f,g,h,$$je;d=a.eZ;Eq(d);a:{try{e=0;f=a.eZ.h;while(e<f){g=a.eZ.l(e);if(Hr(g.ij,b))c=T4(c,D7(g.ij,b));else{if(g.dB!=(-1)){if(!g.dB)g.dB=(-1);BgQ.Mq(g);}if(g.dB==(-1)){a.eZ.st(e);e=e+(-1)|0;f=f+(-1)|0;}else{g.ij=CA(b,g.sK);c=T4(c,g.sK);if(g.dB>0)g.dB=g.dB-1|0;}}e=e+1|0;}Ch(d);}catch($$e){$$je=R($$e);h=$$je;break a;}return c;}Ch(d);G(h);}
function AOm(a,b){var c,d,e,f,g,$$je;c=a.eZ;Eq(c);a:{try{d=0;e=a.eZ.h;while(d<e){f=a.eZ.l(d);f.ij=CA(f.ij,b);d=d+1|0;}Ch(c);}catch($$e){$$je=R($$e);g=$$je;break a;}return;}Ch(c);G(g);}
function M8(){var b,c,$$je;EH();b=BhK;Eq(b);a:{try{BnJ.nU(0);Ch(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}Ch(b);G(c);}
function ACB(b,c){EH();return (Q0()).FX(b,c);}
function ANl(){BhK=DM(1);BnK=AXA();}
var Dv=D(C3);
function Ed(){var a=new Dv();AV7(a);return a;}
function DI(a){var b=new Dv();AL1(b,a);return b;}
function AV7(a){FX(a);}
function AL1(a,b){ACU(a,b);}
function XX(){var a=this;C.call(a);a.pS=null;a.N1=0;a.g4=0;a.gx=0;}
function K6(a,b){var c=new XX();ANB(c,a,b);return c;}
function ANB(a,b,c){J(a);a.gx=1;a.pS=b;a.N1=c;}
function A1_(a){if(!a.gx)G(U(B(607)));return a.g4>=a.pS.h?0:1;}
function AX4(a){var b,c;if(a.g4>=a.pS.h)G(Bc0(Ji(a.g4)));if(!a.gx)G(U(B(607)));b=a.pS.P.data;c=a.g4;a.g4=c+1|0;return b[c];}
function AAT(){Jo.call(this);this.LB=null;}
function Bcb(a,b,c,d,e){var f=new AAT();A8K(f,a,b,c,d,e);return f;}
function A8K(a,b,c,d,e,f){a.LB=b;Ts(a,c,d,e,f);}
var Wh=D();
function R1(){var a=this;Da.call(a);a.tO=0;a.pK=0;}
function Bc8(a,b,c){var d=new R1();A53(d,a,b,c);return d;}
function A53(a,b,c,d){GE(a,b,0.5,0.5);a.tO=c;a.pK=d;}
function ASa(a,b,c,d,e,f,g,h){var i,j,k,l;if(a.tO){if((c+2|0)>d){if(h.tI())i=null;else{Bj();i=BgN;}return i;}j=b.data;a.tO=0;k=c+1|0;l=j[c];if(l==(-1)){if(j[k]!=(-2))c=k+(-1)|0;else{c=k+1|0;a.pK=1;}}else if(l!=(-2))c=k+(-1)|0;else if(j[k]!=(-1))c=k+(-1)|0;else{c=k+1|0;a.pK=0;}}return !a.pK?RB(a,b,c,d,e,f,g,h):ABN(a,b,c,d,e,f,g,h);}
function ABN(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=null;a:{while(c<d){if(f>=g)break a;if((c+2|0)>d){if(h.dO(2))break a;Bj();i=BgN;break a;}j=b.data;k=c+1|0;l=j[c]&255;c=k+1|0;m=j[k]&255;n=(l|m<<8)&65535;if(!BY(n)){if(BG(n)){c=c+(-2)|0;i=BV(2);break a;}j=e.data;k=f+1|0;j[f]=n;f=k;}else{if((c+2|0)>=d){if(!h.dO(4)){Bj();i=BgN;}c=c+(-2)|0;break a;}k=c+1|0;o=j[c]&255;c=k+1|0;k=j[k]&255;p=(o|k<<8)&65535;if(!BG(p)){c=c+(-4)|0;i=BV(4);break a;}if((f+2|0)>g){if(h.ef(2))break a;Bj();i=BgM;break a;}j=e.data;k=f+1|0;j[f]
=n;f=k+1|0;j[k]=p;}}}h.em(c);h.dR(f);return i;}
function RB(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=null;a:{while(c<d){if(f>=g)break a;if((c+2|0)>d){if(h.dO(2))break a;Bj();i=BgN;break a;}j=b.data;k=c+1|0;l=j[c]&255;c=k+1|0;m=j[k]&255;n=(m|l<<8)&65535;if(!BY(n)){if(BG(n)){c=c+(-2)|0;i=BV(2);break a;}j=e.data;k=f+1|0;j[f]=n;f=k;}else{if((c+2|0)>=d){if(!h.dO(4)){Bj();i=BgN;}c=c+(-2)|0;break a;}k=c+1|0;o=j[c]&255;c=k+1|0;k=j[k]&255;p=(k|o<<8)&65535;if(!BG(p)){c=c+(-4)|0;i=BV(4);break a;}if((f+2|0)>g){if(h.ef(2))break a;Bj();i=BgM;break a;}j=e.data;k=f+1|0;j[f]
=n;f=k+1|0;j[k]=p;}}}h.em(c);h.dR(f);return i;}
var ABd=D(Jw);
function Ba9(){var a=new ABd();A2h(a);return a;}
function A2h(a){Xe(a);}
function Yl(a,b){var c;c=BeF(a,b);return c;}
function AMP(a,b,c){return setTimeout(BS(Yl(a,b),"onTimer"),c);}
function AL0(a,b){clearInterval(b);}
function AKF(a,b){clearTimeout(b);}
function A24(b,c){Zi(b,c);}
var SS=D(T);
function Bas(){var a=new SS();AMZ(a);return a;}
function AMZ(a){Bo(a);}
function APS(a){return BbL(a);}
function Wm(){var a=this;C.call(a);a.nz=null;a.pT=0;a.h2=null;a.mh=null;}
function BcQ(a){var b=new Wm();A6d(b,a);return b;}
function BnL(a,b){var c=new Wm();ACR(c,a,b);return c;}
function A6d(a,b){ACR(a,b,1);}
function ACR(a,b,c){J(a);a.nz=b;a.pT=c;}
function A1r(a){if(Bla)return K6(a.nz,a.pT);if(a.h2===null){a.h2=K6(a.nz,a.pT);a.mh=K6(a.nz,a.pT);}if(a.h2.gx){a.mh.g4=0;a.mh.gx=1;a.h2.gx=0;return a.mh;}a.h2.g4=0;a.h2.gx=1;a.mh.gx=0;return a.h2;}
var AAN=D(T);
function A_9(){var a=new AAN();ANj(a);return a;}
function ANj(a){Bo(a);}
function AUv(a){return Baf(a);}
var ZX=D(B4);
function GY(){var a=new ZX();A7P(a);return a;}
function DS(a){var b=new ZX();A5y(b,a);return b;}
function A7P(a){E$(a);}
function A5y(a,b){Mi(a,b);}
function YK(){var a=this;C.call(a);a.mY=null;a.q2=0;a.pj=null;a.t3=0;a.oI=null;a.rh=0;a.ke=null;a.pr=0;}
function CL(){var a=new YK();A_p(a);return a;}
function A_p(a){J(a);a.mY=S();a.pj=Cl(0.0,1.0,0.0);a.oI=CO(1.0,1.0,1.0,1.0);a.ke=Iw();}
function AOU(a){a.mY.I(0.0,0.0,0.0);a.pj.I(0.0,1.0,0.0);a.oI.hV(1.0,1.0,1.0,1.0);a.ke.ix(0.0,0.0);}
function ALQ(a,b,c,d,e){a.fW();a.q2=b===null?0:1;if(a.q2)a.mY.M(b);a.t3=c===null?0:1;if(a.t3)a.pj.M(c);a.rh=d===null?0:1;if(a.rh)a.oI.eR(d);a.pr=e===null?0:1;if(a.pr)a.ke.k6(e);return a;}
function AL8(a,b,c){a.ke.ix(b,c);a.pr=1;return a;}
function Z8(){var a=this;C.call(a);a.no=0.0;a.ox=null;}
function Rp(a,b){var c=new Z8();A9f(c,a,b);return c;}
function A9f(a,b,c){J(a);a.no=b;a.ox=c;}
var OG=D(GB);
function BnM(){var a=new OG();T0(a);return a;}
function T0(a){UK(a);AMb(a);}
function A8s(a,b){var c;c=new Float32Array(b);return c;}
function ATV(a,b){var c;c=new Int32Array(b);return c;}
function AMt(a,b){var c;c=new Int16Array(b);return c;}
function AWa(a,b){var c;c=new Int8Array(b);return c;}
function AGN(a,b){var c;c=new Uint8Array(b);return c;}
function Jj(){BB.call(this);this.g9=0;}
function A1L(a){var b=new Jj();AOd(b,a);return b;}
function AOd(a,b){CP(a);a.g9=b;}
function AXq(a,b){a.k=b;}
function ADr(a,b,c,d){var e,f,g,h,i;e=d.J();f=b+1|0;g=B9(f,e);if(g>0){d.d5=1;return (-1);}h=c.f(b);if(g<0){i=c.f(f);if(BG(i))return (-1);}if(a.g9!=h)return (-1);return a.k.e(f,c,d);}
function A5V(a,b,c,d){var e,f,g;if(!(c instanceof BN))return F3(a,b,c,d);e=c;f=d.J();while(true){if(b>=f)return (-1);g=e.eH(a.g9,b);if(g<0)return (-1);b=g+1|0;if(b<f&&BG(e.f(b))){b=g+2|0;continue;}if(a.k.e(b,c,d)>=0)break;}return g;}
function AQd(a,b,c,d,e){var f,g,h,i;if(!(d instanceof BN))return Gb(a,b,c,d,e);f=d;g=e.J();a:{while(true){if(c<b)return (-1);h=f.mJ(a.g9,c);if(h<0)break a;if(h<b)break a;i=h+1|0;if(i<g&&BG(f.f(i))){c=h+(-1)|0;continue;}if(a.k.e(i,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function A$z(a){return (((I()).a(B(101))).T(a.g9)).b();}
function AG8(a,b){if(b instanceof DA)return 0;if(b instanceof Dy)return 0;if(b instanceof C4)return 0;if(b instanceof Dw)return 0;if(b instanceof Je)return 0;if(!(b instanceof Jj))return 1;return b.g9!=a.g9?0:1;}
function A55(a,b){return 1;}
var Rl=D(Eg);
function BaP(a,b,c,d){var e=new Rl();A5T(e,a,b,c,d);return e;}
function A5T(a,b,c,d,e){K0(a,b,c,d,e);}
function A7F(a,b,c,d){var e,f,g,h,i;e=a.gh.jd();f=a.gh.iJ();g=0;while(true){if(g>=e){a:{while(true){h=a.k.e(b,c,d);if(h>=0)break;if((b+a.bv.cg()|0)<=d.J()){h=a.bv.bH(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.bv.cg()|0)>d.J()){d.d5=1;return (-1);}i=a.bv.bH(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
var Rm=D(Bt);
function ARB(){var a=new Rm();AHi(a);return a;}
function AHi(a){Co(a);}
function A2Z(a,b,c,d){if(b&&!(d.jB()&&b==d.dI()))return (-1);return a.k.e(b,c,d);}
function A1Q(a,b){return 0;}
function ANg(a){return B(608);}
function YR(){C.call(this);this.vs=null;}
function Bcv(a){var b=new YR();ASR(b,a);return b;}
function ASR(a,b){J(a);a.vs=b;}
function Bbc(b){return Bcv(b);}
function A2l(a,b){a.vs.nP(b);}
function ATp(a,b){a.vs.OK(b);}
function DD(){var a=this;C.call(a);a.n=0.0;a.o=0.0;a.q=0.0;}
var BmT=null;var BmU=null;var BmV=null;var BnN=null;var BnO=null;function H2(){H2=N(DD);AEJ();}
function S(){var a=new DD();ZH(a);return a;}
function Cl(a,b,c){var d=new DD();Rt(d,a,b,c);return d;}
function ZH(a){H2();J(a);}
function Rt(a,b,c,d){H2();J(a);a.I(b,c,d);}
function A3a(a,b,c,d){a.n=b;a.o=c;a.q=d;return a;}
function AG_(a,b){return a.I(b.n,b.o,b.q);}
function ARw(a,b){return a.AR(b.n,b.o,b.q);}
function ALG(a,b,c,d){return a.I(a.n+b,a.o+c,a.q+d);}
function ANq(a,b){return a.JE(b.n,b.o,b.q);}
function AQX(a,b,c,d){return a.I(a.n-b,a.o-c,a.q-d);}
function A7C(a,b){return a.I(a.n*b,a.o*b,a.q*b);}
function TU(b,c,d){H2();return FR(b*b+c*c+d*d);}
function A_j(a){return FR(a.n*a.n+a.o*a.o+a.q*a.q);}
function AGw(a){return a.n*a.n+a.o*a.o+a.q*a.q;}
function AZj(a,b){var c,d,e;c=b.n-a.n;d=b.o-a.o;e=b.q-a.q;return FR(c*c+d*d+e*e);}
function AIO(a,b){var c,d,e;c=b.n-a.n;d=b.o-a.o;e=b.q-a.q;return c*c+d*d+e*e;}
function A_F(a){var b;b=a.t_();if(b!==0.0&&b!==1.0)return a.en(1.0/FR(b));return a;}
function ARS(a,b){return a.n*b.n+a.o*b.o+a.q*b.q;}
function AYG(a,b){return a.I(a.o*b.q-a.q*b.o,a.q*b.n-a.n*b.q,a.n*b.o-a.o*b.n);}
function A3G(a,b,c,d){return a.I(a.o*d-a.q*c,a.q*b-a.n*d,a.n*c-a.o*b);}
function AQL(a,b){var c,d;c=b.c;d=c.data;return a.I(a.n*d[0]+a.o*d[4]+a.q*d[8]+d[12],a.n*d[1]+a.o*d[5]+a.q*d[9]+d[13],a.n*d[2]+a.o*d[6]+a.q*d[10]+d[14]);}
function AV2(a,b){var c,d;c=b.gT;d=c.data;return a.I(a.n*d[0]+a.o*d[3]+a.q*d[6],a.n*d[1]+a.o*d[4]+a.q*d[7],a.n*d[2]+a.o*d[5]+a.q*d[8]);}
function AHm(a,b,c){H2();BnO.Pj(b,c);return a.kM(BnO);}
function A_z(a){return a.n===0.0&&a.o===0.0&&a.q===0.0?1:0;}
function ANT(a,b,c){a.n=a.n+c*(b.n-a.n);a.o=a.o+c*(b.o-a.o);a.q=a.q+c*(b.q-a.q);return a;}
function AFp(a){return ((((((((I()).a(B(22))).cC(a.n)).a(B(23))).cC(a.o)).a(B(23))).cC(a.q)).a(B(24))).b();}
function A7J(a){var b;b=31+CE(a.n)|0;b=(31*b|0)+CE(a.o)|0;b=(31*b|0)+CE(a.q)|0;return b;}
function AG7(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(Ck(a)!==Ck(b))return 0;c=b;if(CE(a.n)!=CE(c.n))return 0;if(CE(a.o)!=CE(c.o))return 0;if(CE(a.q)==CE(c.q))return 1;return 0;}
function AIT(a){a.n=0.0;a.o=0.0;a.q=0.0;return a;}
function AEJ(){BmT=Cl(1.0,0.0,0.0);BmU=Cl(0.0,1.0,0.0);BmV=Cl(0.0,0.0,1.0);BnN=Cl(0.0,0.0,0.0);BnO=BL();}
function GD(){var a=this;C.call(a);a.eW=0.0;a.eV=0.0;}
var BnP=null;var BnQ=null;var BnR=null;function AOJ(){AOJ=N(GD);AX1();}
function Iw(){var a=new GD();Sb(a);return a;}
function V$(a,b){var c=new GD();Tx(c,a,b);return c;}
function Sb(a){AOJ();J(a);}
function Tx(a,b,c){AOJ();J(a);a.eW=b;a.eV=c;}
function AXw(a,b){a.eW=b.eW;a.eV=b.eV;return a;}
function AC7(a,b,c){a.eW=b;a.eV=c;return a;}
function AOY(a,b){var c,d;c=b.eW-a.eW;d=b.eV-a.eV;return FR(c*c+d*d);}
function AX1(){BnP=V$(1.0,0.0);BnQ=V$(0.0,1.0);BnR=V$(0.0,0.0);}
function EY(){var a=this;C.call(a);a.v7=null;a.tF=Ba;a.p7=Ba;a.r2=Ba;}
function BnS(a,b,c,d){var e=new EY();Oo(e,a,b,c,d);return e;}
function BnT(a,b,c){var d=new EY();Vi(d,a,b,c);return d;}
function CJ(a,b){var c=new EY();G2(c,a,b);return c;}
function Bk(a){var b=new EY();ARv(b,a);return b;}
function Oo(a,b,c,d,e){J(a);a.v7=b;a.tF=c;a.p7=d;a.r2=e;}
function Vi(a,b,c,d){Oo(a,b,c,d,Ba);}
function G2(a,b,c){Oo(a,b,Ba,Ba,c);}
function ARv(a,b){Vi(a,b,Ba,Ba);}
function AOB(a,b,c,d){var e,f;e=d!==null&&d.da!==null?Eh(d.da):Ba;f=d!==null&&d.cu!==null?Eh(d.cu):Ba;return Z(Br(e,a.tF),a.tF)&&Z(Br(f,a.p7),a.p7)&&Z(Br(BP(e,f),a.r2),a.r2)?1:0;}
function GW(){var a=this;C.call(a);a.co=null;a.bS=0;a.na=0;}
function G_(){var a=new GW();AJU(a);return a;}
function BnU(a,b){var c=new GW();Uh(c,a,b);return c;}
function AJU(a){Uh(a,1,16);}
function Uh(a,b,c){J(a);a.na=b;a.co=Bc(c);}
function A17(a,b){var c,d,e;c=a.co;d=c.data;if(a.bS==d.length)c=a.t0(Bf(8,a.bS*1.75|0));d=c.data;e=a.bS;a.bS=e+1|0;d[e]=b;}
function AQP(a,b){if(b<a.bS)return a.co.data[b];G(Bg((((((I()).a(B(426))).j(b)).a(B(427))).j(a.bS)).b()));}
function AZG(a){a.bS=0;}
function ANL(a){if(a.co.data.length!=a.bS)a.t0(a.bS);return a.co;}
function AN2(a,b){var c;if(b<0)G(W((((I()).a(B(433))).j(b)).b()));c=a.bS+b|0;if(c>a.co.data.length)a.t0(Bf(Bf(8,c),a.bS*1.75|0));return a.co;}
function AE5(a,b){var c,d,e;c=Bc(b);d=c.data;e=a.co;X(e,0,c,0,Bq(a.bS,d.length));a.co=c;return c;}
function AMi(a){var b,c,d,e,f;if(!a.na)return MN(a);b=a.co;c=1;d=0;e=a.bS;while(d<e){f=b.data;c=(c*31|0)+f[d]|0;d=d+1|0;}return c;}
function A9l(a,b){var c,d,e,f,g,h;if(b===a)return 1;if(!a.na)return 0;if(!(b instanceof GW))return 0;c=b;if(!c.na)return 0;d=a.bS;if(d!=c.bS)return 0;e=a.co;f=c.co;g=0;while(g<d){h=f.data;if(e.data[g]!=h[g])return 0;g=g+1|0;}return 1;}
function A2P(a){var b,c,d,e;if(!a.bS)return B(435);b=a.co;c=b.data;d=ATm(32);d.lx(91);d.Ac(c[0]);e=1;while(e<a.bS){d.CK(B(436));d.Ac(c[e]);e=e+1|0;}d.lx(93);return d.b();}
function H1(){var a=this;C.call(a);a.iM=null;a.ul=null;a.Ad=null;a.Fa=null;a.Bq=null;a.EB=null;a.zI=null;a.s8=null;a.iK=null;a.tB=0;a.sO=0;a.EV=null;a.lq=null;a.HG=null;a.o7=null;a.kL=null;a.f8=null;a.wl=null;}
var BnV=null;function BnW(a,b){var c=new H1();ABp(c,a,b);return c;}
function AWk(){return BnV;}
function ABp(a,b,c){var d;J(a);Gl();a.iK=BkI;a.tB=(-1);a.sO=1;a.HG=DH();a.o7=Bp();a.kL=Bp();d=c.Id();Bk8=d;a.s8=d.hu();a.zI=b;a.EB=c;a.Bq=d.ES();a.wl=d.Ns();Ra(a);}
function Ra(a){var b,c;BnV=(El()).Na();Gp(B(609),B(101));if((BnV.windows?1:0)==1)Gp(B(552),B(610));else if((BnV.macOS?1:0)==1)Gp(B(552),B(611));else if((BnV.linux?1:0)!=1)Gp(B(552),B(612));else Gp(B(552),B(613));ALT(BdL(El()));b=CS();a.f8=b.HS();if(a.f8.M1(B(614))){a.f8=a.f8.uE(B(615),B(101));a.f8=a.f8.uE(B(616),B(101));}a.lq=BfB((((I()).a(a.f8)).a(B(617))).b());c=Bb7();a.lq.Mx(B(618));a.iM=Baq(a.EB);a.ul=Bav(a.Bq);a.Ad=Bdu(a.lq);a.EV=Bfq();PC(a);ACW(a);BgQ=a;Bia=a.iM;Bid=a.iM.vH();Bie=a.iM.vH();BhW=a.ul;Bic
=a.Ad;a.s8.vE(a);}
function A2$(a){var b,c,$$je;b=a.iK;a:{try{b:{BdA();switch(BkH.data[BC(b)]){case 1:if((CS()).KO())break b;Gl();a.iK=BkL;break b;case 2:case 3:break;case 4:Gl();a.iK=BkJ;break b;default:break b;}Z7(a,a.zI);}}catch($$e){$$je=R($$e);if($$je instanceof Db){c=$$je;break a;}else{throw $$e;}}a.s8.vE(a);return;}c.FE();G(c);}
function Z7(a,b){var c,d,e,f;a.iM.f7();c=Bia.bo();d=Bia.bl();if(!(c==a.tB&&d==a.sO)){a.tB=c;a.sO=d;Bid.oK(0,0,c,d);e=a.iK;Gl();if(e===BkJ){a.iK=BkK;b.w1();}b.QJ(c,d);}a.kL.qz(a.o7);a.o7.K();f=0;while(f<a.kL.h){(a.kL.l(f)).fd();f=f+1|0;}a.kL.K();e=a.iM;e.sZ=CA(e.sZ,O(1));b.Ob();a.ul.fW();}
function PC(a){a.lq.nd(B(619),BdG(a));}
function ACW(a){a.wl.O_(a);}
function ANh(a){return a.lq;}
function AFx(a,b,c){a.EV.qC(b,c);}
function A5h(a){Vw();return BhP;}
function A3q(a,b){a.o7.F(b);}
function AKN(a,b){}
function AER(b){return b.f8;}
function AKh(b,c){b.Fa=c;return c;}
function A9m(b){return b.Fa;}
function Il(){BH.call(this);this.hl=null;}
var BlP=Ba;function JD(){JD=N(Il);A07();}
function Ba0(){var a=new Il();JK(a);return a;}
function Ben(a){var b=new Il();R9(b,a);return b;}
function JK(a){JD();Fb(a,BlP);a.hl=DM(1);}
function R9(a,b){JD();JK(a);a.hl.qz(b.hl);}
function A4$(a){return Ben(a);}
function ANJ(a){var b,c,d;b=F2(a);c=a.hl.bZ();while(c.bC()){d=c.bz();b=(1229*b|0)+(d!==null?d.bp():0)|0;}return b;}
function A77(a){return a.QP();}
function A07(){BlP=BQ(B(620));}
function Df(){var a=this;Hb.call(a);a.NW=0;a.I6=0;a.Nd=0;a.Nz=0;a.OP=0;a.Is=0;a.Op=0;a.vb=0;a.Ql=0;a.Qp=0;a.HC=0;a.NH=0;a.KP=0;a.Ok=0;a.CY=0;a.Iv=0;a.Jk=0;a.GZ=0;a.Ly=0;a.GW=0;a.Hk=0;a.Jz=0;a.Pc=0;a.Qy=0;a.Nh=0;a.G6=0;a.OU=0;a.LW=0;a.MN=0;a.La=0;a.Nj=0;a.EX=0;a.GT=0;a.Gy=0;a.vj=0;a.xV=0;a.z4=0;a.sf=0;a.zu=0;a.sa=0;a.Cf=0;a.tQ=0;a.wA=0;a.tY=0;a.y6=0;a.E9=0;a.wd=0;a.ym=0;a.EG=0;a.vG=0;a.yU=0;a.Em=0;a.jQ=0;a.xr=0;a.vJ=0;a.ma=0;a.ho=0;a.wj=0;a.Fs=0;a.tl=0;a.lc=0;a.eX=0;a.vz=0;a.zV=0;a.EL=0;a.vf=0;a.zc=0;a.BJ=0;a.lF
=0;a.ft=0;a.DU=0;a.PQ=0;a.Jm=null;a.cw=null;a.b$=null;a.b4=null;a.rI=null;a.k9=Ba;a.Dm=Ba;a.hk=null;a.IY=null;a.vS=0.0;a.gZ=0;a.Lt=null;}
var BnX=null;var BnY=null;var BnZ=Ba;var Bn0=0;var Bn1=0;var Bn2=Ba;var Bn3=null;function CQ(){CQ=N(Df);AQw();}
function BaK(a,b){var c=new Df();Xc(c,a,b);return c;}
function Bn4(a,b,c){var d=new Df();L6(d,a,b,c);return d;}
function Bn5(a,b,c,d,e){var f=new Df();Kx(f,a,b,c,d,e);return f;}
function Bn6(a,b,c){var d=new Df();Mw(d,a,b,c);return d;}
function Yg(){CQ();if(BnX===null)BnX=(Bic.oc(B(621))).vK();return BnX;}
function Sn(){CQ();if(BnY===null)BnY=(Bic.oc(B(622))).vK();return BnY;}
function Xc(a,b,c){CQ();L6(a,b,c,ZG(b,c));}
function L6(a,b,c,d){CQ();Kx(a,b,c,d,c.p8===null?Yg():c.p8,c.uR===null?Sn():c.uR);}
function Kx(a,b,c,d,e,f){CQ();Mw(a,b,c,AIS((((I()).a(d)).a(e)).b(),(((I()).a(d)).a(f)).b()));}
function Mw(a,b,c,d){var e,f,g,h,i;CQ();AA_(a);a.vj=a.b0(Bk(B(623)));a.xV=a.b0(Bk(B(624)));a.z4=a.b0(Bk(B(625)));a.sf=a.b0(Bk(B(626)));a.zu=a.b0(Bk(B(627)));a.sa=a.b0(Bk(B(628)));a.Cf=a.b0(Bk(B(629)));a.tQ=a.b0(Bk(B(630)));a.wA=a.b0(Bk(B(631)));a.tY=a.b0(Bk(B(632)));a.y6=a.b0(Bk(B(633)));a.E9=a.b0(Bk(B(634)));a.wd=a.b0(Bk(B(635)));a.ym=a.b0(Bk(B(636)));a.EG=a.b0(Bk(B(637)));a.vG=a.b0(Bk(B(638)));a.yU=a.b0(Bk(B(639)));a.Em=a.b0(Bk(B(640)));a.Jm=APh();a.IY=Ph();a.Lt=S();e=KD(b);a.hk=c;a.bh=d;f=b.cu===null?0:1;a:
{b:{a.ft=f;ABD();if(!Ct(e,BjB)){if(!a.ft)break b;g=BjB;if(!Ct(e,g))break b;}f=1;break a;}f=0;}a.DU=f;a.PQ=a.ft&&b.cu.iU!==null?1:0;a.rI=b;a.k9=BP(Eh(e),Bn2);a.Dm=NQ(b.cS.b7.gS());a.cw=Y(HA,a.ft&&c.mq>0?c.mq:0);h=0;while(h<a.cw.data.length){a.cw.data[h]=AJG();h=h+1|0;}a.b$=Y(OA,a.ft&&c.l9>0?c.l9:0);h=0;while(h<a.b$.data.length){a.b$.data[h]=BeW();h=h+1|0;}a.b4=Y(KI,a.ft&&c.nq>0?c.nq:0);h=0;while(h<a.b4.data.length){a.b4.data[h]=A_H();h=h+1|0;}if(!c.rX&&Dx(Br(BnZ,a.k9),a.k9))G(U(((((I()).a(B(641))).Ne(a.k9)).a(B(24))).b()));if
(b.dJ!==null&&b.dJ.data.length>c.gX)G(U((((((I()).a(B(642))).j(b.dJ.data.length)).a(B(643))).j(c.gX)).b()));Be8();i=Bn7;BbM();a.NW=a.bf(i,Bg9);a.I6=a.bf(Bn8,Bg$);a.Nd=a.bf(Bn9,Bg_);a.Nz=a.bf(Bn$,Bha);a.OP=a.bf(Bn_,Bhb);a.Is=a.bf(Boa,Bhc);a.Op=a.bf(Bob,Bhd);a.vb=a.b0(Bk(B(644)));a.Ql=a.bf(Boc,Bhe);a.Qp=a.bf(Bod,Bhf);a.HC=a.bf(Boe,Bhg);a.NH=a.bf(Bof,Bhh);a.KP=b.dJ!==null&&c.gX>0?a.bf(Bog,Bec(c.gX)):(-1);a.Ok=a.bf(Boh,Bhi);a.CY=a.b0(Boi);a.Iv=a.bf(Boj,Bhj);a.Jk=a.bf(Bok,Bhk);a.GZ=a.bf(Bol,Bhl);a.Ly=a.bf(Bom,Bhm);a.GW
=a.bf(Bon,Bhn);a.Hk=a.bf(Boo,Bho);a.Jz=a.bf(Bop,Bhp);a.Pc=a.bf(Boq,Bhq);a.Qy=a.bf(Bor,Bhr);a.Nh=a.bf(Bos,Bhs);a.G6=a.bf(Bot,Bht);a.OU=a.bf(Bou,Bhu);a.LW=a.bf(Bov,Bhv);a.MN=a.bf(Bow,Bhw);a.La=a.bf(Box,Bhx);a.Nj=a.bf(Boy,Bhy);a.EX=a.b0(Boz);a.GT=!a.ft?(-1):a.bf(BoA,Bfb(c.mq,c.l9));a.Gy=!a.DU?(-1):a.bf(BoB,Bhz);}
function AXr(a){var b;b=a.bh;a.bh=null;a.Mz(b,a.rI);a.rI=null;a.jQ=B0(a,a.vj);a.xr=B0(a,a.vj)-a.jQ|0;a.vJ=B0(a,a.xV)-a.jQ|0;a.ma=B0(a,a.z4)-a.jQ|0;if(a.ma<0)a.ma=0;a.ho=B0(a,a.sf);a.wj=B0(a,a.sf)-a.ho|0;a.Fs=B0(a,a.zu)-a.ho|0;a.tl=!Ie(a,a.sa)?(-1):B0(a,a.sa)-a.ho|0;a.lc=B0(a,a.Cf)-a.ho|0;if(a.lc<0)a.lc=0;a.eX=B0(a,a.tQ);a.vz=B0(a,a.tQ)-a.eX|0;a.zV=B0(a,a.wA)-a.eX|0;a.EL=B0(a,a.y6)-a.eX|0;a.vf=!Ie(a,a.tY)?(-1):B0(a,a.tY)-a.eX|0;a.zc=B0(a,a.E9)-a.eX|0;a.BJ=B0(a,a.wd)-a.eX|0;a.lF=B0(a,a.ym)-a.eX|0;if(a.lF<0)a.lF
=0;}
function Er(b,c){CQ();return Dx(Br(b,c),c)?0:1;}
function TK(b,c){CQ();return Z(Br(b,c),Ba)?0:1;}
function KD(b){CQ();Bn3.K();if(b.cu!==null)F7(Bn3,b.cu);if(b.da!==null)F7(Bn3,b.da);return Bn3;}
function Sf(b){var c;CQ();c=Ba;if(b.cu!==null)c=BP(c,Eh(b.cu));if(b.da!==null)c=BP(c,Eh(b.da));return c;}
function ZG(b,c){var d,e,f,g,h,i,j,k;CQ();d=KD(b);e=B(101);f=Eh(d);g=IM(b.cS.b7.gS());if(Er(g,O(1)))e=(((I()).a(e)).a(B(645))).b();if(TK(g,O(6)))e=(((I()).a(e)).a(B(646))).b();if(Er(g,O(256)))e=(((I()).a(e)).a(B(647))).b();if(Er(g,O(128)))e=(((I()).a(e)).a(B(648))).b();if(Er(g,O(8)))e=(((I()).a(e)).a(B(649))).b();if(!(!Er(g,O(8))&&!Er(g,O(384)))&&b.cu!==null){h=(((I()).a(e)).a(B(650))).b();h=(((I()).a(h)).a(B(651))).b();h=(((((I()).a(h)).a(B(652))).j(c.mq)).a(B(324))).b();h=(((((I()).a(h)).a(B(653))).j(c.l9)).a(B(324))).b();e
=(((((I()).a(h)).a(B(654))).j(c.nq)).a(B(324))).b();Ce();if(Ct(d,Bms))e=(((I()).a(e)).a(B(655))).b();if(b.cu.iU!==null)e=(((I()).a(e)).a(B(656))).b();ABD();if(Ct(d,BjB))e=(((I()).a(e)).a(B(657))).b();}i=CU(b.cS.b7.gS());j=0;while(j<i){k=CB(b.cS.b7.gS(),j);if(k.fm==64)e=(((((I()).a(e)).a(B(658))).j(k.jT)).a(B(659))).b();else if(k.fm==16)e=(((((I()).a(e)).a(B(660))).j(k.jT)).a(B(659))).b();j=j+1|0;}GP();if(Z(Br(f,BjF),BjF))e=(((I()).a(e)).a(B(661))).b();B1();if(Z(Br(f,Bm_),Bm_)){h=(((I()).a(e)).a(B(662))).b();e
=(((I()).a(h)).a(B(663))).b();}if(Z(Br(f,Bnc),Bnc)){h=(((I()).a(e)).a(B(664))).b();e=(((I()).a(h)).a(B(665))).b();}if(Z(Br(f,BmY),BmY)){h=(((I()).a(e)).a(B(666))).b();e=(((I()).a(h)).a(B(667))).b();}if(Z(Br(f,BmW),BmW)){h=(((I()).a(e)).a(B(668))).b();e=(((I()).a(h)).a(B(669))).b();}if(Z(Br(f,BmX),BmX)){h=(((I()).a(e)).a(B(670))).b();e=(((I()).a(h)).a(B(671))).b();}if(Z(Br(f,Bm0),Bm0)){h=(((I()).a(e)).a(B(672))).b();e=(((I()).a(h)).a(B(673))).b();}Ce();if(Z(Br(f,Bmm),Bmm))e=(((I()).a(e)).a(B(674))).b();if(Z(Br(f,
Bmn),Bmn))e=(((I()).a(e)).a(B(675))).b();if(Z(Br(f,Bmp),Bmp))e=(((I()).a(e)).a(B(676))).b();if(Z(Br(f,Bmq),Bmq))e=(((I()).a(e)).a(B(677))).b();ET();if(Z(Br(f,Bl2),Bl2))e=(((I()).a(e)).a(B(678))).b();if(Z(Br(f,Bl3),Bl3))e=(((I()).a(e)).a(B(679))).b();if(b.dJ!==null&&c.gX>0)e=(((((I()).a(e)).a(B(680))).j(c.gX)).a(B(324))).b();return e;}
function A3O(a,b){var c,d,e,f;if(b.dJ!==null&&b.dJ.data.length>a.hk.gX)return 0;a:{c=Sf(b);if(Z(a.k9,BP(c,Bn2))){d=a.Dm;e=b.cS.b7;if(Z(d,NQ(e.gS()))&&(b.cu===null?0:1)==a.ft){f=1;break a;}}f=0;}return f;}
function A6l(a,b){return b instanceof Df&&a.PH(b)?1:0;}
function AST(a,b){return b!==a?0:1;}
function AGM(a,b,c){var d,e,f,g,h,i,j;X0(a,b,c);d=a.cw.data;e=d.length;f=0;while(f<e){g=d[f];g.xL(0.0,0.0,0.0,0.0,(-1.0),0.0);f=f+1|0;}d=a.b$.data;e=d.length;f=0;while(f<e){h=d[f];h.Ij(0.0,0.0,0.0,0.0,0.0,0.0,0.0);f=f+1|0;}d=a.b4.data;e=d.length;f=0;while(f<e){i=d[f];i.Pt(0.0,0.0,0.0,0.0,0.0,0.0,0.0,(-1.0),0.0,0.0,1.0,0.0);f=f+1|0;}a.gZ=0;if(Ie(a,a.vb)){e=a.vb;j=a.vS+Bia.Fd();a.vS=j;Fn(a,e,j);}}
function A$B(a,b,c){GP();if(!Ct(c,BjF))a.cZ.xh(0,770,771);a.If(c);if(a.ft)a.J1(b,c);Vs(a,b,c);}
function AEe(a){WI(a);}
function A2C(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a.hk.uT!=(-1))c=a.hk.uT;else{CQ();c=Bn0;}if(a.hk.p5!=(-1))d=a.hk.p5;else{CQ();d=Bn1;}e=0.0;f=1.0;g=1;h=Kb(b);while(h.bC()){i=h.bz();j=i.dc;if(Ur(j)){k=a.cZ;l=i;k.xh(1,l.Kl,l.K2);Fn(a,a.CY,l.HY);}else{AGE();if(Z(Br(j,BmC),BmC))c=i.Ia;else{ET();if(Z(Br(j,Bl3),Bl3))Fn(a,a.EX,i.mn);else{AJr();if(Z(Br(j,BlF),BlF)){m=i;d=m.MC;e=m.Kz;f=m.I5;g=m.OG;}else if(!a.hk.rX)G(U((((I()).a(B(681))).a(i.b())).b()));}}}}a.cZ.H8(c);a.cZ.L6(d,e,f);a.cZ.M2(g);}
function A3j(a,b,c){var d,e,f,g,h,i,j,k,l;d=b.cu;JD();e=HL(c,F(Il),BlP);f=e!==null?e.hl:null;A3J();g=HL(c,F(Hq),Bk9);h=g!==null?g.Eb:null;BbW();i=HL(c,F(Hc),Bnx);j=i!==null?i.PR:null;a:{if(a.jQ>=0){k=0;b:while(true){if(k>=a.cw.data.length)break a;c:{if(f!==null&&k<f.h){if(a.gZ&&a.cw.data[k].EE(f.l(k)))break c;a.cw.data[k].Jc(f.l(k));}else{if(a.gZ&&a.cw.data[k].bk.s===0.0&&a.cw.data[k].bk.r===0.0&&a.cw.data[k].bk.t===0.0)break c;a.cw.data[k].bk.hV(0.0,0.0,0.0,1.0);}l=a.jQ+Cg(k,a.ma)|0;a.bh.jh(l+a.xr|0,a.cw.data[k].bk.s,
a.cw.data[k].bk.r,a.cw.data[k].bk.t);a.bh.jh(l+a.vJ|0,a.cw.data[k].fc.n,a.cw.data[k].fc.o,a.cw.data[k].fc.q);if(a.ma<=0)break b;}k=k+1|0;}}}d:{if(a.ho>=0){k=0;e:while(true){if(k>=a.b$.data.length)break d;f:{if(h!==null&&k<h.h){if(a.gZ&&a.b$.data[k].F6(h.l(k)))break f;a.b$.data[k].Lo(h.l(k));}else{if(a.gZ&&a.b$.data[k].dx===0.0)break f;a.b$.data[k].dx=0.0;}l=a.ho+Cg(k,a.lc)|0;a.bh.jh(l+a.wj|0,a.b$.data[k].bk.s*a.b$.data[k].dx,a.b$.data[k].bk.r*a.b$.data[k].dx,a.b$.data[k].bk.t*a.b$.data[k].dx);a.bh.jh(l+a.Fs
|0,a.b$.data[k].eD.n,a.b$.data[k].eD.o,a.b$.data[k].eD.q);if(a.tl>=0)a.bh.kc(l+a.tl|0,a.b$.data[k].dx);if(a.lc<=0)break e;}k=k+1|0;}}}g:{if(a.eX>=0){k=0;h:while(true){if(k>=a.b4.data.length)break g;i:{if(j!==null&&k<j.h){if(a.gZ&&a.b4.data[k].Ik(j.l(k)))break i;a.b4.data[k].J9(j.l(k));}else{if(a.gZ&&a.b4.data[k].eg===0.0)break i;a.b4.data[k].eg=0.0;}l=a.eX+Cg(k,a.lF)|0;a.bh.jh(l+a.vz|0,a.b4.data[k].bk.s*a.b4.data[k].eg,a.b4.data[k].bk.r*a.b4.data[k].eg,a.b4.data[k].bk.t*a.b4.data[k].eg);a.bh.sp(l+a.zV|0,a.b4.data[k].hE);a.bh.sp(l
+a.EL|0,a.b4.data[k].h_);a.bh.kc(l+a.zc|0,a.b4.data[k].iZ);a.bh.kc(l+a.BJ|0,a.b4.data[k].jf);if(a.vf>=0)a.bh.kc(l+a.vf|0,a.b4.data[k].eg);if(a.lF<=0)break h;}k=k+1|0;}}}Ce();if(Ct(c,Bms))Fv(a,a.EG,(BA(c,Bms)).dX);if(d!==null&&d.iU!==null){D2(a,a.vG,d.iU.Xo());ZC(a,a.yU,d.iU.PT());Fn(a,a.Em,1.0/(2.0*(d.iU.PT()).eU.bo()));}a.gZ=1;}
function AQw(){var b,c;BnX=null;BnY=null;GP();b=BjF;B1();c=BP(b,Bm_);Ce();c=BP(BP(c,Bmm),Bmn);ET();BnZ=BP(c,Bl2);Bn0=1029;Bn1=515;AGE();c=BmC;AJr();Bn2=BP(c,BlF);Bn3=ATC();}
function KI(){var a=this;DQ.call(a);a.hE=null;a.h_=null;a.eg=0.0;a.iZ=0.0;a.jf=0.0;}
function A_H(){var a=new KI();A6e(a);return a;}
function A6e(a){HW(a);a.hE=S();a.h_=S();}
function A2B(a,b){return a.Hm(b.bk,b.hE,b.h_,b.eg,b.iZ,b.jf);}
function A5e(a,b,c,d,e,f,g){if(b!==null)a.bk.eR(b);if(c!==null)a.hE.M(c);if(d!==null)(a.h_.M(d)).bU();a.eg=e;a.iZ=f;a.jf=g;return a;}
function A$b(a,b,c,d,e,f,g,h,i,j,k,l,m){a.bk.hV(b,c,d,1.0);a.hE.I(e,f,g);(a.h_.I(h,i,j)).bU();a.eg=k;a.iZ=l;a.jf=m;return a;}
function ALl(a,b){var c,d,e,f,g;a:{b:{if(b!==null){if(b===a)break b;if(a.bk.z(b.bk)&&a.hE.z(b.hE)){c=a.h_;d=b.h_;if(c.z(d)&&Dl(a.eg,b.eg)&&Dl(a.iZ,b.iZ)){e=a.jf;f=b.jf;if(Dl(e,f))break b;}}}g=0;break a;}g=1;}return g;}
function Xt(){C.call(this);this.FG=0;}
function Bfq(){var a=new Xt();AHO(a);return a;}
function AHO(a){J(a);a.FG=2;}
function A2Y(a,b,c){if(a.FG>=1)(TF()).fu(((((I()).a(b)).a(B(8))).a(c)).b());}
var Md=D(Dn);
function Bbp(){var a=new Md();A86(a);return a;}
function A86(a){Jt(a);}
var L7=D(FU);
var BoC=null;function AP_(){AP_=N(L7);A6x();}
function BaR(a){var b=new L7();R$(b,a);return b;}
function BeB(a){var b=new L7();UB(b,a);return b;}
function R$(a,b){AP_();Jp(a);a.dZ(AAv(b.de()),1);}
function UB(a,b){AP_();Jp(a);}
function A6x(){BoC=BeB(0);}
function AAv(b){var otherJSObj=Bullet.wrapPointer(b,Bullet.btCollisionConfiguration);var jsObj=new Bullet.btCollisionDispatcher(otherJSObj);return Bullet.getPointer(jsObj);}
function AA4(){var a=this;E5.call(a);a.g7=null;a.g0=null;a.lQ=0;}
function BeN(a){var b=new AA4();AXW(b,a);return b;}
function AXW(a,b){Op(a,b);}
function AZ_(a){O_(a);a.g7=a.P;a.lQ=a.lQ+1|0;return a.P;}
function AXU(a){var b,c;a.lQ=Bf(0,a.lQ-1|0);if(a.g7===null)return;a:{if(a.g7!==a.P&&!a.lQ){a.g0=a.g7;b=0;c=a.g0.data.length;while(true){if(b>=c)break a;a.g0.data[b]=null;b=b+1|0;}}}a.g7=null;}
function O_(a){if(a.g7!==null&&a.g7===a.P){if(a.g0!==null&&a.g0.data.length>=a.h){X(a.P,0,a.g0,0,a.h);a.P=a.g0;a.g0=null;}else a.j_(a.P.data.length);return;}}
function P2(){C.call(this);this.pw=null;}
function PK(a){var b=new P2();AR4(b,a);return b;}
function AR4(a,b){J(a);a.pw=b;}
function FF(a){return a.pw.BA();}
function Te(a,b){a.pw.Ai(b);}
function ACT(a,b){var c,d,$$je;if(b===null)b=Y(C,0);a:{b:{c:{try{c=a.pw.Cy(b);}catch($$e){$$je=R($$e);if($$je instanceof C3){d=$$je;break c;}else if($$je instanceof Li){d=$$je;break a;}else if($$je instanceof Md){d=$$je;break b;}else if($$je instanceof Mp){d=$$je;G(Ex((((I()).a(B(682))).a((FF(a)).u())).b(),d));}else{throw $$e;}}return c;}G(Ex((((I()).a(B(683))).a((FF(a)).u())).b(),d));}G(Ex((((I()).a(B(684))).a((FF(a)).u())).b(),d));}G(Ex((((I()).a(B(684))).a((FF(a)).u())).b(),d));}
function AB1(){var a=this;Fh.call(a);a.AA=0;a.sh=0;a.tU=null;}
function BeS(a,b,c,d,e,f){var g=new AB1();A_i(g,a,b,c,d,e,f);return g;}
function A_i(a,b,c,d,e,f,g){Lq(a,c,e,f);a.sh=b;a.AA=g;a.tU=d;}
function AIW(a,b){return a.tU.data[b+a.sh|0];}
function A13(a,b,c){a.tU.data[b+a.sh|0]=c;}
function AYA(a){return a.AA;}
var DB=D(Bx);
var BkI=null;var BkL=null;var BoD=null;var BkJ=null;var BkK=null;var BoE=null;function Gl(){Gl=N(DB);AJF();}
function H6(a,b){var c=new DB();Zu(c,a,b);return c;}
function QK(){Gl();return BoE.go();}
function Zu(a,b,c){Gl();Cw(a,b,c);}
function AJF(){BkI=H6(B(685),0);BkL=H6(B(686),1);BoD=H6(B(687),2);BkJ=H6(B(688),3);BkK=H6(B(689),4);BoE=H(DB,[BkI,BkL,BoD,BkJ,BkK]);}
var I7=D();
var BoF=null;var BoG=null;function Tq(){Tq=N(I7);AVB();}
function Kq(b){Tq();return !(b&1)?0:1;}
function ABw(b){var c,d,e,f,g,h,i;Tq();c=I();d=AA0();e=0;f=BoG.data;g=f.length;h=0;while(h<g){i=f[h];if(b&i){if(c.i()>0)c.T(32);c.a(d.data[e]);}e=e+1|0;h=h+1|0;}return c.b();}
function AA0(){Tq();if(BoF===null)BoF=H(BN,[B(690),B(691),B(692),B(693),B(694),B(695),B(696),B(697),B(698),B(699),B(700),B(701)]);return BoF;}
function AVB(){BoG=MB([1,4,2,1024,8,16,128,64,32,256,2048,512]);}
function ZJ(){var a=this;C.call(a);a.hM=null;a.c4=0;a.Gx=0;}
function AU$(){var a=new ZJ();ASd(a);return a;}
function BoH(a,b){var c=new ZJ();AAI(c,a,b);return c;}
function ASd(a){AAI(a,1,16);}
function AAI(a,b,c){J(a);a.Gx=b;a.hM=MW(c);}
function A3f(a,b){var c,d,e;c=a.hM;d=c.data;if(a.c4==d.length)c=a.CC(Bf(8,a.c4*1.75|0));d=c.data;e=a.c4;a.c4=e+1|0;d[e]=b;}
function ASx(a){a.c4=0;}
function AWM(a,b){var c;if(b<0)G(W((((I()).a(B(433))).j(b)).b()));c=a.c4+b|0;if(c>a.hM.data.length)a.CC(Bf(Bf(8,c),a.c4*1.75|0));return a.hM;}
function AYR(a,b){var c,d,e;c=MW(b);d=c.data;e=a.hM;X(e,0,c,0,Bq(a.c4,d.length));a.hM=c;return c;}
var Tw=D();
function CE(b){return $rt_floatToIntBits(b);}
function G1(b){return Oj(b);}
function A0A(b){var c,d;c=Oj(b);d=c|((c>>>24)*1.003937005996704|0)<<24;return d;}
function J$(b){return $rt_intBitsToFloat(b&(-16777217));}
var VJ=D(T);
function Bev(){var a=new VJ();AMw(a);return a;}
function AMw(a){Bo(a);}
function A95(a){var b;b=BaE(a);b.be=1;return b;}
function RC(){var a=this;Hm.call(a);a.hI=0;a.cq=null;a.j5=0;a.FI=0.0;a.rm=0;}
function C6(){var a=new RC();AHE(a);return a;}
function BoI(a){var b=new RC();OM(b,a);return b;}
function BoJ(a,b){var c=new RC();ACp(c,a,b);return c;}
function A0Q(a,b){return Y(Nu,b);}
function AHE(a){OM(a,16);}
function OM(a,b){ACp(a,b,0.75);}
function Ut(b){var c,d;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function ACp(a,b,c){var d;XN(a);if(b>=0&&c>0.0){d=Ut(b);a.hI=0;a.cq=a.Bj(d);a.FI=c;Lv(a);return;}G(CK());}
function Lv(a){a.rm=a.cq.data.length*a.FI|0;}
function AR9(a,b){var c;c=ZV(a,b);if(c===null)return null;return c.hb;}
function ZV(a,b){var c,d,e;if(b===null)c=K1(a);else{d=Ke(b);e=d&(a.cq.data.length-1|0);c=KA(a,b,e,d);}return c;}
function KA(a,b,c,d){var e,f;e=a.cq.data[c];while(e!==null){if(e.pq==d){f=e.hJ;if(V6(b,f))break;}e=e.e9;}return e;}
function K1(a){var b;b=a.cq.data[0];while(b!==null&&b.hJ!==null){b=b.e9;}return b;}
function ANz(a,b,c){return a.Qr(b,c);}
function ARM(a,b,c){var d,e,f,g,h;if(b===null){d=K1(a);if(d===null){a.j5=a.j5+1|0;d=a.wu(null,0,0);e=a.hI+1|0;a.hI=e;if(e>a.rm)a.oU();}}else{f=Ke(b);g=f&(a.cq.data.length-1|0);d=KA(a,b,g,f);if(d===null){a.j5=a.j5+1|0;d=a.wu(b,g,f);e=a.hI+1|0;a.hI=e;if(e>a.rm)a.oU();}}h=d.hb;d.hb=c;return h;}
function APl(a,b,c,d){var e;e=Bcd(b,d);e.e9=a.cq.data[c];a.cq.data[c]=e;return e;}
function A0w(a,b){var c,d,e,f,g,h,i;c=Ut(!b?1:b<<1);d=a.Bj(c);e=0;while(e<a.cq.data.length){f=a.cq.data[e];a.cq.data[e]=null;while(f!==null){g=d.data;h=f.pq&(c-1|0);i=f.e9;f.e9=g[h];g[h]=f;f=i;}e=e+1|0;}a.cq=d;Lv(a);}
function A6C(a){a.Mj(a.cq.data.length);}
function AM5(a,b){var c;c=SO(a,b);if(c===null)return null;return c.hb;}
function SO(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.cq.data[0];while(e!==null){if(e.hJ===null)break a;f=e.e9;d=e;e=f;}}else{g=Ke(b);c=g&(a.cq.data.length-1|0);e=a.cq.data[c];while(e!==null&&!(e.pq==g&&V6(b,e.hJ))){f=e.e9;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.e9=e.e9;else a.cq.data[c]=e.e9;a.j5=a.j5+1|0;a.hI=a.hI-1|0;return e;}
function Ke(b){return b.bp();}
function V6(b,c){return b!==c&&!b.z(c)?0:1;}
function DF(){Bx.call(this);this.Oq=null;}
var BjP=null;var BjR=null;var BjO=null;var BjQ=null;var BjS=null;var BoK=null;function H5(){H5=N(DF);APg();}
function IJ(a,b,c){var d=new DF();AB6(d,a,b,c);return d;}
function Mh(){H5();return BoK.go();}
function AB6(a,b,c,d){H5();Cw(a,b,c);a.Oq=d;}
function APg(){BjP=IJ(B(702),0,B(325));BjR=IJ(B(703),1,B(327));BjO=IJ(B(704),2,B(705));BjQ=IJ(B(706),3,B(326));BjS=IJ(B(707),4,B(135));BoK=H(DF,[BjP,BjR,BjO,BjQ,BjS]);}
function ZK(){Bt.call(this);this.kQ=0;}
function BaN(a){var b=new ZK();A09(b,a);return b;}
function A09(a,b){Co(a);a.kQ=b;}
function AOf(a,b,c,d){var e;e=!d.jB()?c.i()-b|0:d.J()-b|0;if(e<=0){d.by(a.kQ,0);return a.k.e(b,c,d);}if(c.f(b)!=10)return (-1);d.by(a.kQ,1);return a.k.e(b+1|0,c,d);}
function AZ9(a,b){var c;c=!b.ev(a.kQ)?0:1;b.by(a.kQ,(-1));return c;}
function AD1(a){return B(708);}
function Dp(){var a=this;BH.call(a);a.d3=null;a.eP=0.0;a.eO=0.0;a.e_=0.0;a.fa=0.0;a.oG=0;}
var Bm_=Ba;var Bnc=Ba;var BoL=Ba;var BmY=Ba;var Bm0=Ba;var BmW=Ba;var BmX=Ba;var BoM=Ba;function B1(){B1=N(Dp);AJ5();}
function BoN(a){var b=new Dp();JE(b,a);return b;}
function BoO(a,b){var c=new Dp();Kn(c,a,b);return c;}
function BoP(a,b,c,d,e,f,g){var h=new Dp();Od(h,a,b,c,d,e,f,g);return h;}
function BaJ(a,b){var c=new Dp();Zq(c,a,b);return c;}
function Bd9(a){var b=new Dp();ACP(b,a);return b;}
function R0(b){B1();return Z(Br(b,BoM),Ba)?0:1;}
function Z0(b){B1();return BaJ(Bm_,b);}
function JE(a,b){B1();Fb(a,b);a.eP=0.0;a.eO=0.0;a.e_=1.0;a.fa=1.0;a.oG=0;if(R0(b)){a.d3=A6L();return;}G(U(B(497)));}
function Kn(a,b,c){B1();JE(a,b);a.d3.JS(c);}
function Od(a,b,c,d,e,f,g,h){B1();Kn(a,b,c);a.eP=d;a.eO=e;a.e_=f;a.fa=g;a.oG=h;}
function Zq(a,b,c){B1();JE(a,b);a.d3.eU=c;}
function ACP(a,b){B1();Od(a,b.dc,b.d3,b.eP,b.eO,b.e_,b.fa,b.oG);}
function A60(a){return Bd9(a);}
function AUi(a){var b,c;b=F2(a);c=(991*b|0)+a.d3.bp()|0;c=(991*c|0)+G1(a.eP)|0;c=(991*c|0)+G1(a.eO)|0;c=(991*c|0)+G1(a.e_)|0;c=(991*c|0)+G1(a.fa)|0;c=(991*c|0)+a.oG|0;return c;}
function AJ5(){Bm_=BQ(B(709));Bnc=BQ(B(710));BoL=BQ(B(711));BmY=BQ(B(712));Bm0=BQ(B(713));BmW=BQ(B(714));BmX=BQ(B(715));BoM=BP(BP(BP(BP(BP(BP(Bm_,Bnc),BoL),BmY),Bm0),BmW),BmX);}
function ABq(){var a=this;C.call(a);a.R=null;a.Z=0;a.z8=0;}
function Sy(){var a=new ABq();AO_(a);return a;}
function BoQ(a,b){var c=new ABq();Ub(c,a,b);return c;}
function AO_(a){Ub(a,1,16);}
function Ub(a,b,c){J(a);a.z8=b;a.R=Ca(c);}
function AXP(a,b){var c,d,e;c=a.R;d=c.data;if(a.Z==d.length)c=a.t1(Bf(8,a.Z*1.75|0));d=c.data;e=a.Z;a.Z=e+1|0;d[e]=b;}
function AES(a,b){a.rH(b.R,0,b.Z);}
function AQ3(a,b,c,d){if((c+d|0)<=b.Z){a.rH(b.R,c,d);return;}G(W((((((((I()).a(B(487))).j(c)).a(B(424))).j(d)).a(B(425))).j(b.Z)).b()));}
function AD_(a,b,c,d){var e,f,g;e=a.R;f=e.data;g=a.Z+d|0;if(g>f.length)e=a.t1(Bf(Bf(8,g),a.Z*1.75|0));X(b,c,e,a.Z,d);a.Z=a.Z+d|0;}
function AYi(a,b){if(b<a.Z)return a.R.data[b];G(Bg((((((I()).a(B(426))).j(b)).a(B(427))).j(a.Z)).b()));}
function AU2(a,b,c){var d,e,f,g,h,i;d=a.Z;if(c>=d)G(Bg((((((I()).a(B(430))).j(c)).a(B(427))).j(a.Z)).b()));if(b>c)G(Bg((((((I()).a(B(431))).j(b)).a(B(429))).j(c)).b()));e=(c-b|0)+1|0;f=d-e|0;if(a.z8){g=a.R;h=b+e|0;X(g,h,a.R,b,d-h|0);}else{i=Bf(f,c+1|0);X(a.R,i,a.R,b,d-i|0);}a.Z=f;}
function AWA(a){a.Z=0;}
function AP2(a,b){var c;if(b<0)G(W((((I()).a(B(433))).j(b)).b()));c=a.Z+b|0;if(c>a.R.data.length)a.t1(Bf(Bf(8,c),a.Z*1.75|0));return a.R;}
function ANK(a,b){var c,d,e;c=Ca(b);d=c.data;e=a.R;X(e,0,c,0,Bq(a.Z,d.length));a.R=c;return c;}
function AGh(a,b){if(a.Z>b)a.Z=b;}
var Bh=D();
var Bn7=null;var Bn8=null;var Bn9=null;var Bn$=null;var Bn_=null;var Boa=null;var Bob=null;var Boc=null;var Bod=null;var Boe=null;var Bof=null;var Bog=null;var Boh=null;var Boi=null;var Boj=null;var Bok=null;var Bol=null;var Bom=null;var Bon=null;var Boo=null;var Bop=null;var Boq=null;var Bor=null;var Bos=null;var Bot=null;var Bou=null;var Bov=null;var Bow=null;var Box=null;var Boy=null;var Boz=null;var BoA=null;var BoR=null;var BoS=null;var BoT=null;var BoB=null;function Be8(){Be8=N(Bh);AWl();}
function AWl(){var b;Bn7=Bk(B(473));Bn8=Bk(B(716));Bn9=Bk(B(717));Bn$=Bk(B(718));Bn_=Bk(B(719));Boa=Bk(B(720));Bob=Bk(B(721));Boc=Bk(B(722));Bod=Bk(B(723));Boe=Bk(B(724));Bof=Bk(B(725));Bog=Bk(B(726));b=new EY;ET();G2(b,B(727),Bl2);Boh=b;b=new EY;GP();G2(b,B(728),BjF);Boi=b;b=new EY;Ce();G2(b,B(729),Bmm);Boj=b;b=new EY;B1();G2(b,B(730),Bm_);Bok=b;Bol=CJ(B(731),Bm_);Bom=CJ(B(732),Bmn);Bon=CJ(B(733),Bnc);Boo=CJ(B(734),Bnc);Bop=CJ(B(735),Bmp);Boq=CJ(B(736),BmW);Bor=CJ(B(737),BmW);Bos=CJ(B(738),Bmq);Bot=CJ(B(739),
BmX);Bou=CJ(B(740),BmX);Bov=CJ(B(741),BmY);Bow=CJ(B(742),BmY);Box=CJ(B(743),Bm0);Boy=CJ(B(744),Bm0);Boz=Bk(B(745));BoA=Bk(B(746));BoR=Bk(B(747));BoS=Bk(B(748));BoT=Bk(B(749));BoB=Bk(B(750));}
var NA=D(FT);
var BoU=null;function A9t(){A9t=N(NA);AT$();}
function A_4(a,b,c,d){var e=new NA();Td(e,a,b,c,d);return e;}
function Bc7(a){var b=new NA();AA1(b,a);return b;}
function Td(a,b,c,d,e){var f,g,h,i;A9t();HM(a);f=b.de();g=c.de();h=d.de();i=e.de();a.dZ(AAz(f,g,h,i),1);}
function AA1(a,b){A9t();HM(a);}
function AT$(){BoU=Bc7(0);}
function AAz(b,c,d,e){var dispatcherJSObj=Bullet.wrapPointer(b,Bullet.btDispatcher);var broadphaceJSObj=Bullet.wrapPointer(c,Bullet.btBroadphaseInterface);var solverJSObj=Bullet.wrapPointer(d,Bullet.btConstraintSolver);var configJSObj=Bullet.wrapPointer(e,Bullet.btCollisionConfiguration);var jsObj=new Bullet.btDiscreteDynamicsWorld(dispatcherJSObj,broadphaceJSObj,solverJSObj,configJSObj);return Bullet.getPointer(jsObj);}
function Jq(){var a=this;C.call(a);a.j0=0;a.m9=0;}
var BgN=null;var BgM=null;function Bj(){Bj=N(Jq);AZn();}
function J7(a,b){var c=new Jq();Xx(c,a,b);return c;}
function Xx(a,b,c){Bj();J(a);a.j0=b;a.m9=c;}
function ANk(a){return a.j0?0:1;}
function A89(a){return a.j0!=1?0:1;}
function A2E(a){return !a.zo()&&!a.t2()?0:1;}
function AJC(a){return a.j0!=2?0:1;}
function ASg(a){return a.j0!=3?0:1;}
function AIp(a){if(a.my())return a.m9;G(BfM());}
function BV(b){Bj();return J7(2,b);}
function F$(b){Bj();return J7(3,b);}
function AP9(a){switch(a.j0){case 0:G(BaB());case 1:G(BcK());case 2:G(BdC(a.m9));case 3:G(BaC(a.m9));default:}}
function AZn(){BgN=J7(0,0);BgM=J7(1,0);}
var Qz=D(D6);
function BaM(){var a=new Qz();AZZ(a);return a;}
function AZZ(a){N5(a);}
var WT=D(Ci);
function Bcw(){var a=new WT();A$o(a);return a;}
function A$o(a){DU(a);}
function AQ$(a,b,c,d,e){D2(b,c,b.cW.jA);}
function LP(){Bt.call(this);this.iF=0;}
function Bb9(a){var b=new LP();ABv(b,a);return b;}
function ABv(a,b){Co(a);a.iF=b;}
function A6g(a,b,c,d){var e,f,g,h;e=!d.jB()?c.i():d.J();if(b>=e){d.by(a.iF,0);return a.k.e(b,c,d);}f=e-b|0;if(f==2&&c.f(b)==13){g=b+1|0;if(c.f(g)==10){d.by(a.iF,0);return a.k.e(b,c,d);}}a:{if(f==1){h=c.f(b);if(h==10)break a;if(h==13)break a;if(h==133)break a;if((h|1)==8233)break a;}return (-1);}d.by(a.iF,0);return a.k.e(b,c,d);}
function AX3(a,b){var c;c=!b.ev(a.iF)?0:1;b.by(a.iF,(-1));return c;}
function A3x(a){return B(420);}
var WQ=D(Ci);
function A_J(){var a=new WQ();AUY(a);return a;}
function AUY(a){DU(a);}
function AOr(a,b,c,d,e){D2(b,c,b.cW.eK);}
var WS=D(Ci);
function BdE(){var a=new WS();ADI(a);return a;}
function ADI(a){DU(a);}
function A8J(a,b,c,d,e){D2(b,c,b.cW.hs);}
var MQ=D(Gn);
var BoV=null;function AQc(){AQc=N(MQ);APQ();}
function Bbz(){var a=new MQ();ZT(a);return a;}
function Bb$(a){var b=new MQ();YN(b,a);return b;}
function ZT(a){AQc();H4(a);a.dZ(Rg(),1);}
function YN(a,b){AQc();H4(a);}
function APQ(){BoV=Bb$(0);}
function Rg(){var jsObj=new Bullet.btDefaultCollisionConfiguration();return Bullet.getPointer(jsObj);}
var WO=D(Ci);
function Bf6(){var a=new WO();AR3(a);return a;}
function AR3(a){DU(a);}
function A4c(a,b,c,d,e){Ly(b,c,b.cW.c9);}
var WP=D(Ci);
function Bdw(){var a=new WP();AFq(a);return a;}
function AFq(a){DU(a);}
function AEo(a,b,c,d,e){DR(b,c,b.cW.cp.n,b.cW.cp.o,b.cW.cp.q,1.188099980354309/(b.cW.jP*b.cW.jP));}
var WM=D(Ci);
function Baz(){var a=new WM();A01(a);return a;}
function A01(a){DU(a);}
function A6k(a,b,c,d,e){WC(b,c,b.cW.k_,b.cW.jP);}
function TD(){var a=this;C.call(a);a.kq=0;a.f0=0;a.hx=null;a.gd=null;a.E8=0;a.lg=0;a.r7=0;a.t8=0;a.Iu=null;a.hw=0;}
function Bcp(a,b){var c=new TD();A$k(c,a,b);return c;}
function BoW(a,b,c){var d=new TD();YB(d,a,b,c);return d;}
function A$k(a,b,c){YB(a,b,c,(-1));}
function YB(a,b,c,d){var e;J(a);a.r7=0;a.t8=0;a.Iu=A6L();a.hw=0;e=Bq(A2O(),32);if(d<0)d=e-c|0;if(c>=0&&d>=0&&(c+d|0)<=e){a.E8=b;a.kq=c;a.f0=d;a.hx=Y(Fo,d);a.gd=b!=1?null:Bc(d);return;}G(U(B(751)));}
function A2O(){var b;b=Fk(16);Bid.Ol(34930,b);return b.b2(0);}
function A0p(a){var b;b=0;while(b<a.f0){a.hx.data[b]=null;if(a.gd!==null)a.gd.data[b]=b;b=b+1|0;}}
function AJW(a){Bid.rE(33984);}
function AEM(a,b){return Sj(a,b,0);}
function Sj(a,b,c){var d,e;a:{d=b.eU;a.lg=0;switch(a.E8){case 0:e=a.kq+Th(a,d)|0;break a;case 1:e=a.kq+UY(a,d)|0;break a;default:}return (-1);}if(!a.lg)a.t8=a.t8+1|0;else{a.r7=a.r7+1|0;if(c)d.rS(e);else Bid.rE(33984+e|0);}d.LJ(b.lz,b.mr);d.Qf(b.mL,b.lL);return e;}
function Th(a,b){var c,d;c=0;while(true){if(c>=a.f0){a.hw=(a.hw+1|0)%a.f0|0;a.hx.data[a.hw]=b;b.rS(a.kq+a.hw|0);return a.hw;}d=(a.hw+c|0)%a.f0|0;if(a.hx.data[d]===b)break;c=c+1|0;}a.lg=1;return d;}
function UY(a,b){var c,d;c=0;a:{while(true){if(c>=a.f0)break a;d=a.gd.data[c];if(a.hx.data[d]===b){a.lg=1;break a;}if(a.hx.data[d]===null)break;c=c+1|0;}}if(c>=a.f0)c=a.f0-1|0;d=a.gd.data[c];while(c>0){a.gd.data[c]=a.gd.data[c-1|0];c=c+(-1)|0;}a.gd.data[0]=d;if(!a.lg){a.hx.data[d]=b;b.rS(a.kq+d|0);}return d;}
var WN=D(Ci);
function Bfx(){var a=new WN();AR_(a);return a;}
function AR_(a){DU(a);}
function ASQ(a,b,c,d,e){Ly(b,c,b.cW.ds);}
function WK(){V.call(this);this.yT=null;}
function Bbw(){var a=new WK();A4I(a);return a;}
function A4I(a){BM(a);a.yT=BL();}
function AFw(a,b,c,d,e){D2(b,c,(a.yT.ch(b.cW.hs)).hC(d.dy));}
function Gj(){var a=this;C.call(a);a.L=null;a.iE=0;a.eE=0;a.zF=0;a.q7=0;a.ee=0;a.m=0;a.Dq=0;a.i4=null;a.f6=null;a.y=0;a.mG=0;a.lo=0;a.l$=0;a.Bn=null;}
var BoX=null;var BoY=null;var BoZ=0;function BdU(a,b){var c=new Gj();A8Y(c,a,b);return c;}
function A8Y(a,b,c){J(a);a.eE=1;a.Bn=b;if((c&16)>0)b=A2k(b);else if((c&128)>0)b=AYv(b);a.L=BW(b.i()+2|0);X(b.rx(),0,a.L,0,b.i());a.L.data[a.L.data.length-1|0]=0;a.L.data[a.L.data.length-2|0]=0;a.Dq=a.L.data.length;a.iE=c;Ef(a);Ef(a);}
function A2H(a){return a.ee;}
function AXJ(a,b){if(b>0&&b<3)a.eE=b;if(b==1)YD(a);}
function AXk(a,b){a.iE=b;a.m=a.ee;a.f6=a.i4;a.y=a.lo+1|0;a.l$=a.lo;Ef(a);}
function AHd(a){return a.i4;}
function APb(a){return a.i4===null?0:1;}
function AFG(a){return a.f6===null?0:1;}
function A61(a){Ef(a);return a.q7;}
function AYb(a){var b;b=a.i4;Ef(a);return b;}
function AV_(a){return a.m;}
function AIn(a){return a.q7;}
function AYv(b){return b;}
function YD(a){a.m=a.ee;a.f6=a.i4;a.y=a.l$;a.l$=a.lo;Ef(a);}
function Ef(a){var b,c,d,e,f,g,h,$$je;a.q7=a.ee;a.ee=a.m;a.i4=a.f6;a.lo=a.l$;a.l$=a.y;while(true){b=0;a.m=a.y>=a.L.data.length?0:Ic(a);a.f6=null;if(a.eE==4){if(a.m!=92)return;a.m=a.y>=a.L.data.length?0:a.L.data[BF(a)];switch(a.m){case 69:break;default:a.m=92;a.y=a.mG;return;}a.eE=a.zF;a.m=a.y>(a.L.data.length-2|0)?0:Ic(a);}a:{if(a.m!=92){if(a.eE==1)switch(a.m){case 36:a.m=(-536870876);break a;case 40:if(a.L.data[a.y]!=63){a.m=(-2147483608);break a;}BF(a);c=a.L.data[a.y];d=0;while(true){b:{if(d){d=0;switch(c)
{case 33:break;case 61:a.m=(-134217688);BF(a);break b;default:G(BR(B(101),a.b(),a.y));}a.m=(-67108824);BF(a);}else{switch(c){case 33:break;case 60:BF(a);c=a.L.data[a.y];d=1;break b;case 61:a.m=(-536870872);BF(a);break b;case 62:a.m=(-33554392);BF(a);break b;default:a.m=ACI(a);if(a.m<256){a.iE=a.m;a.m=a.m<<16;a.m=(-1073741784)|a.m;break b;}a.m=a.m&255;a.iE=a.m;a.m=a.m<<16;a.m=(-16777176)|a.m;break b;}a.m=(-268435416);BF(a);}}if(!d)break;}break a;case 41:a.m=(-536870871);break a;case 42:case 43:case 63:e=a.y>=
a.L.data.length?42:a.L.data[a.y];switch(e){case 43:a.m=a.m|(-2147483648);BF(a);break a;case 63:a.m=a.m|(-1073741824);BF(a);break a;default:}a.m=a.m|(-536870912);break a;case 46:a.m=(-536870866);break a;case 91:a.m=(-536870821);a.pN(2);break a;case 93:if(a.eE!=2)break a;a.m=(-536870819);break a;case 94:a.m=(-536870818);break a;case 123:a.f6=Ue(a,a.m);break a;case 124:a.m=(-536870788);break a;default:}else if(a.eE==2)switch(a.m){case 38:a.m=(-536870874);break a;case 45:a.m=(-536870867);break a;case 91:a.m=(-536870821);break a;case 93:a.m
=(-536870819);break a;case 94:a.m=(-536870818);break a;default:}}else{f=a.y>=(a.L.data.length-2|0)?(-1):Ic(a);c:{a.m=f;switch(a.m){case -1:G(BR(B(101),a.b(),a.y));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.m
=Sw(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.eE!=1)break a;a.m=(-2147483648)|a.m;break a;case 65:a.m=(-2147483583);break a;case 66:a.m=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:G(BR(B(101),a.b(),a.y));case 68:case 83:case 87:case 100:case 115:case 119:a.f6=KZ(F1(a.L,
a.mG,1),0);a.m=0;break a;case 71:a.m=(-2147483577);break a;case 80:case 112:break c;case 81:a.zF=a.eE;a.eE=4;b=1;break a;case 90:a.m=(-2147483558);break a;case 97:a.m=7;break a;case 98:a.m=(-2147483550);break a;case 99:if(a.y>=(a.L.data.length-2|0))G(BR(B(101),a.b(),a.y));a.m=a.L.data[BF(a)]&31;break a;case 101:a.m=27;break a;case 102:a.m=12;break a;case 110:a.m=10;break a;case 114:a.m=13;break a;case 116:a.m=9;break a;case 117:a.m=MU(a,4);break a;case 120:a.m=MU(a,2);break a;case 122:a.m=(-2147483526);break a;default:}break a;}g
=ZY(a);h=0;if(a.m==80)h=1;try{a.f6=KZ(g,h);}catch($$e){$$je=R($$e);if($$je instanceof Mn){G(BR(B(101),a.b(),a.y));}else{throw $$e;}}a.m=0;}}if(b)continue;else break;}}
function ZY(a){var b,c,d;b=Gf(10);if(a.y<(a.L.data.length-2|0)){if(a.L.data[a.y]!=123)return (((I()).a(B(752))).a(F1(a.L,BF(a),1))).b();BF(a);c=0;a:{while(a.y<(a.L.data.length-2|0)){c=a.L.data[BF(a)];if(c==125)break a;b.T(c);}}if(c!=125)G(BR(B(101),a.b(),a.y));}if(!b.i())G(BR(B(101),a.b(),a.y));d=b.b();if(d.i()==1)return (((I()).a(B(752))).a(d)).b();b:{c:{if(d.i()>3){if(d.e2(B(752)))break c;if(d.e2(B(753)))break c;}break b;}d=d.ei(2);}return d;}
function Ue(a,b){var c,d,e,f,$$je;c=Gf(4);d=(-1);e=2147483647;a:{while(true){if(a.y>=a.L.data.length)break a;b=a.L.data[BF(a)];if(b==125)break a;if(b==44&&d<0)try{d=Du(c.b(),10);c.L1(0,c.i());continue;}catch($$e){$$je=R($$e);if($$je instanceof Dv){break;}else{throw $$e;}}c.T(b&65535);}G(BR(B(101),a.b(),a.y));}if(b!=125)G(BR(B(101),a.b(),a.y));if(c.i()>0)b:{try{e=Du(c.b(),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=R($$e);if($$je instanceof Dv){}else{throw $$e;}}G(BR(B(101),a.b(),a.y));}else if(d<0)G(BR(B(101),
a.b(),a.y));if((d|e|(e-d|0))<0)G(BR(B(101),a.b(),a.y));f=a.y>=a.L.data.length?42:a.L.data[a.y];c:{switch(f){case 43:a.m=(-2147483525);BF(a);break c;case 63:a.m=(-1073741701);BF(a);break c;default:}a.m=(-536870789);}return Be5(d,e);}
function AIX(a){return a.Bn;}
function A1u(a){return !a.ee&&!a.m&&a.y==a.Dq&&!a.kZ()?1:0;}
function I2(b){return b<0?0:1;}
function ATe(a){return !a.bN()&&!a.kZ()&&I2(a.ee)?1:0;}
function AWW(a){return a.ee<=56319&&a.ee>=55296?1:0;}
function A6X(a){return a.ee<=57343&&a.ee>=56320?1:0;}
function K5(b){return b<=56319&&b>=55296?1:0;}
function Kh(b){return b<=57343&&b>=56320?1:0;}
function MU(a,b){var c,d,e,f,$$je;c=Gf(b);d=a.L.data.length-2|0;e=0;while(true){f=B9(e,b);if(f>=0)break;if(a.y>=d)break;c.T(a.L.data[BF(a)]);e=e+1|0;}if(!f)a:{try{f=Du(c.b(),16);}catch($$e){$$je=R($$e);if($$je instanceof Dv){break a;}else{throw $$e;}}return f;}G(BR(B(101),a.b(),a.y));}
function Sw(a){var b,c,d,e,f;b=3;c=1;d=a.L.data.length-2|0;e=NL(a.L.data[a.y],8);switch(e){case -1:break;default:if(e>3)b=2;BF(a);a:{while(true){if(c>=b)break a;if(a.y>=d)break a;f=NL(a.L.data[a.y],8);if(f<0)break;e=(e*8|0)+f|0;BF(a);c=c+1|0;}}return e;}G(BR(B(101),a.b(),a.y));}
function ACI(a){var b,c,d;b=1;c=a.iE;a:while(true){if(a.y>=a.L.data.length)G(BR(B(101),a.b(),a.y));b:{c:{d=a.L.data[a.y];switch(d){case 41:BF(a);return c|256;case 45:if(!b)G(BR(B(101),a.b(),a.y));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BF(a);}BF(a);return c;}
function BF(a){a.mG=a.y;if(a.iE&4)VX(a);else a.y=a.y+1|0;return a.mG;}
function VX(a){var b;b=a.L.data.length-2|0;a.y=a.y+1|0;a:while(true){if(a.y<b&&S_(a.L.data[a.y])){a.y=a.y+1|0;continue;}if(a.y>=b)break;if(a.L.data[a.y]!=35)break;a.y=a.y+1|0;while(true){if(a.y>=b)continue a;if(Q3(a,a.L.data[a.y]))continue a;a.y=a.y+1|0;}}return a.y;}
function Q3(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function ABM(b){return BoX.SD(b);}
function AG3(b){var c,d,e,f,g,h;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;if(!f)g=MB([d,e]);else{h=4519+f|0;g=MB([d,e,h]);}return g;}return null;}
function AMl(b){var c;c=BoY.b2(b);return c==BoZ?0:1;}
function A5L(b){return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);}
function Ic(a){var b,c,d;b=a.L.data[BF(a)];if(BY(b)){c=a.mG+1|0;if(c<a.L.data.length){d=a.L.data[c];if(BG(d)){BF(a);return Dh(b,d);}}}return b;}
function AFn(a){return a.lo;}
var WL=D(V);
function BbN(){var a=new WL();AJ9(a);return a;}
function AJ9(a){BM(a);}
function AHK(a,b,c,d,e){D2(b,c,d.dy);}
var XV=D(T);
function Bdp(){var a=new XV();ATg(a);return a;}
function ATg(a){Bo(a);}
function ASG(a){return ((CR()).bF(65279,65279)).bF(65520,65533);}
var Zf=D(Jc);
function A_G(){var a=new Zf();ASq(a);return a;}
function ASq(a){Rr(a);}
function AWB(a){var b;b=(YV(a)).f$(1);b.be=1;return b;}
var Xw=D(CN);
var Yp=D();
function HZ(){return 1;}
function U8(){var a=this;C.call(a);a.w=null;a.dG=null;a.ro=0;a.gG=null;a.tr=0;a.uO=null;a.qe=0;a.O6=null;a.LR=0;a.Gq=null;a.QD=0;a.ry=null;a.s$=0;a.oM=null;a.tc=0;a.uo=0;a.kC=null;a.NK=null;a.la=null;a.l0=null;}
function BdI(a){var b=new U8();A35(b,a);return b;}
function A35(a,b){J(a);a.dG=C6();a.ro=1;a.gG=C6();a.tr=1;a.uO=C6();a.qe=1;a.O6=C6();a.LR=1;a.Gq=C6();a.QD=1;a.ry=C6();a.s$=1;a.oM=C6();a.tc=1;a.uo=0;a.w=b;a.kC=(DW()).Fn(40000);a.la=(DW()).DC(12000);a.NK=(DW()).LT(12000);a.l0=(DW()).AZ(240000);a.w.pixelStorei(37441,0);}
function Ux(a,b){if(Bb(b)>a.kC.length)a.kC=(DW()).Fn(Bb(b));}
function ACr(a,b){if(Bb(b)>a.la.length)a.la=(DW()).DC(Bb(b));}
function ABF(a,b){if(Bb(b)>a.l0.length)a.l0=(DW()).AZ(Bb(b));}
function A0W(a,b){var c,d,e,f,g;Ux(a,b);c=B8(b);d=0;while(c<BD(b)){e=a.kC;f=b.oa(c);e[d]=f;c=c+1|0;d=d+1|0;}e=a.kC;g=Bb(b);return e.subarray(0,g);}
function ATS(a,b){var c,d,e,f,g;ACr(a,b);c=B8(b);d=0;while(c<BD(b)){e=a.la;f=b.Kh(c);e[d]=f;c=c+1|0;d=d+1|0;}e=a.la;g=Bb(b);return e.subarray(0,g);}
function AM_(a,b){var c,d,e,f,g;ABF(a,b);c=B8(b);d=0;while(c<BD(b)){e=a.l0;f=b.zn(c);e[d]=f;c=c+1|0;d=d+1|0;}e=a.l0;g=Bb(b);return e.subarray(0,g);}
function XO(a,b,c){var d,e;d=a.oM.W(Bn(b));if(d===null){d=C6();a.oM.x(Bn(b),d);}e=a.tc;a.tc=e+1|0;d.x(Bn(e),c);return e;}
function DO(a,b){return (a.oM.W(Bn(a.uo))).W(Bn(b));}
function Um(a,b){var c;c=a.tr;a.tr=c+1|0;a.gG.x(Bn(c),b);return c;}
function Pk(a,b){var c;c=a.ro;a.ro=c+1|0;a.dG.x(Bn(c),b);return c;}
function Tj(a,b){var c;c=a.qe;a.qe=c+1|0;a.uO.x(Bn(c),b);return c;}
function Q_(a,b){var c;c=a.s$;a.s$=c+1|0;a.ry.x(Bn(c),b);return c;}
function A5H(a,b){a.w.activeTexture(b);}
function ALn(a,b,c){var d,e;d=a.w;e=a.ry.W(Bn(c));d.bindTexture(b,e);}
function AKk(a,b,c){a.w.blendFunc(b,c);}
function ANY(a,b){a.w.clear(b);}
function A$p(a,b,c,d,e){a.w.clearColor(b,c,d,e);}
function AEW(a,b){a.w.cullFace(b);}
function A9$(a,b){a.w.depthFunc(b);}
function A0H(a,b){a.w.depthMask(!!b);}
function AXp(a,b,c){a.w.depthRange(b,c);}
function A28(a,b){a.w.disable(b);}
function A$9(a,b,c,d){a.w.drawArrays(b,c,d);}
function A5R(a,b,c,d,e){var f,g;f=a.w;g=B8(e);f.drawElements(b,c,d,g);}
function ATZ(a,b){a.w.enable(b);}
function A0L(a){var b;b=a.w.createTexture();return Q_(a,b);}
function AZr(a,b,c){var d;a:{if(b==34016)break a;if(b==3413)break a;if(b==32970)break a;if(b==32968)break a;if(b==34877)break a;if(b==32777)break a;if(b==32971)break a;if(b==32969)break a;if(b==3412)break a;if(b==2885)break a;if(b==3414)break a;if(b==2932)break a;if(b==2886)break a;if(b==33170)break a;if(b==3411)break a;if(b==35739)break a;if(b==35738)break a;if(b==35661)break a;if(b==34076)break a;if(b==36349)break a;if(b==34024)break a;if(b==34930)break a;if(b==3379)break a;if(b==36348)break a;if(b==34921)break a;if
(b==35660)break a;if(b==36347)break a;if(b==34466)break a;if(b==3333)break a;if(b==3410)break a;if(b==32936)break a;if(b==32937)break a;if(b==34817)break a;if(b==34816)break a;if(b==34818)break a;if(b==34819)break a;if(b==36003)break a;if(b==36004)break a;if(b==36005)break a;if(b==3415)break a;if(b==2961)break a;if(b==2964)break a;if(b==2962)break a;if(b==2965)break a;if(b==2966)break a;if(b==2967)break a;if(b==2963)break a;if(b==2968)break a;if(b==3408)break a;if(b==3317)break a;G(U(B(754)));}d=a.w.getParameter(b);c.th(0,
d);}
function AUn(a,b,c){a.w.pixelStorei(b,c);}
function AJL(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q;if(j===null){k=a.w;l=null;k.texImage2D(b,c,d,e,f,g,h,i,l);}else if(BD(j)>4){m=!(j instanceof DX)?a.H$(j):a.uu(j);a.w.texImage2D(b,c,d,e,f,g,h,i,m);}else{n=j.O0(0);FD();o=Bjr.W(Bn(n));if(o.Qx()){p=a.w;q=o.N$();p.texImage2D(b,c,d,h,i,q);}else if(!o.JL()){p=a.w;q=o.sU();p.texImage2D(b,c,d,h,i,q);}else{p=a.w;q=o.Jn();p.texImage2D(b,c,d,h,i,q);}}}
function A6n(a,b,c,d){a.w.texParameterf(b,c,d);}
function AXY(a,b,c,d,e){a.w.viewport(b,c,d,e);}
function ALA(a,b,c){var d,e;d=a.dG.W(Bn(b));e=a.gG.W(Bn(c));a.w.attachShader(d,e);}
function AOy(a,b,c){var d,e;d=a.w;e=a.uO.W(Bn(c));d.bindBuffer(b,e);}
function AZQ(a,b,c,d,e){a.w.blendFuncSeparate(b,c,d,e);}
function AZa(a,b,c,d,e){var f,g,h,i;if(d instanceof DX){f=d;g=a.uu(f);a.w.bufferData(b,g,e);}else{if(!(d instanceof GJ))G(U(B(755)));h=a.w;i=a.KR(d);h.bufferData(b,i,e);}}
function AM0(a,b,c,d,e){var f,g;if(e instanceof DX){f=a.w;g=a.uu(e);f.bufferSubData(b,c,g);}}
function AIB(a,b){var c;c=a.gG.W(Bn(b));a.w.compileShader(c);}
function AGO(a){var b;b=a.w.createProgram();return Pk(a,b);}
function A1n(a,b){var c;c=a.w.createShader(b);return Um(a,c);}
function AQl(a,b){a.w.disableVertexAttribArray(b);}
function A6B(a,b,c,d,e){a.w.drawElements(b,c,d,e);}
function ARD(a,b){a.w.enableVertexAttribArray(b);}
function AZv(a){var b;b=a.w.createBuffer();return Tj(a,b);}
function A5Q(a,b){a.w.generateMipmap(b);}
function AN3(a,b,c,d,e){var f,g,h;f=a.w;g=a.dG.W(Bn(b));h=f.getActiveAttrib(g,c);d.gs(h.size);e.gs(h.type);return $rt_str(h.name);}
function ADQ(a,b,c,d,e){var f,g,h;f=a.w;g=a.dG.W(Bn(b));h=f.getActiveUniform(g,c);d.gs(h.size);e.gs(h.type);return $rt_str(h.name);}
function AIY(a,b,c){var d;d=a.dG.W(Bn(b));return a.w.getAttribLocation(d,$rt_ustr(c));}
function ALW(a,b,c){if(b!=2931&&b!=2849&&b!=32824&&b!=10752&&b!=32938)G(U(B(756)));c.Kv(0,a.w.getParameter(b));}
function AJS(a,b,c,d){var e,f,g,h,i;if(c!=35712&&c!=35714&&c!=35715){e=a.w;f=a.dG.W(Bn(b));d.gs(e.getProgramParameter(f,c));}else{g=a.w;h=a.dG.W(Bn(b));i=g.getProgramParameter(h,c)?1:0;d.gs(!i?0:1);}}
function AYV(a,b){var c,d;c=a.w;d=a.dG.W(Bn(b));return $rt_str(c.getProgramInfoLog(d));}
function A5O(a,b,c,d){var e,f,g,h;if(c!=35713&&c!=35712){e=a.w;f=a.gG.W(Bn(b));g=e.getShaderParameter(f,c);d.gs(g);}else{h=a.w;e=a.gG.W(Bn(b));g=h.getShaderParameter(e,c)?1:0;d.gs(!g?0:1);}}
function A$N(a,b){var c,d;c=a.w;d=a.gG.W(Bn(b));return $rt_str(c.getShaderInfoLog(d));}
function AGX(a,b,c){var d,e,f;d=a.w;e=a.dG.W(Bn(b));f=d.getUniformLocation(e,$rt_ustr(c));if(f!==null)return XO(a,b,f);return (-1);}
function AUw(a,b){var c,d;c=a.w;d=a.dG.W(Bn(b));c.linkProgram(d);}
function AVT(a,b,c){var d,e;d=a.w;e=a.gG.W(Bn(b));d.shaderSource(e,$rt_ustr(c));}
function AOi(a,b,c,d){var e,f;e=a.w;f=d;e.texParameterf(b,c,f);}
function AV$(a,b,c){var d;d=DO(a,b);a.w.uniform1f(d,c);}
function AOO(a,b,c){var d;d=DO(a,b);a.w.uniform1i(d,c);}
function AL$(a,b,c,d){var e;e=DO(a,b);a.w.uniform2f(e,c,d);}
function AZ7(a,b,c,d,e){var f;f=DO(a,b);a.w.uniform3f(f,c,d,e);}
function AX_(a,b,c,d,e){var f;f=DO(a,b);a.w.uniform3fv(f,Nj(d));}
function AEd(a,b,c,d,e,f){var g;g=DO(a,b);a.w.uniform4f(g,c,d,e,f);}
function AQS(a,b,c,d,e,f){var g;g=DO(a,b);a.w.uniformMatrix3fv(g,!!d,Nj(e));}
function A0T(a,b,c,d,e,f){var g;g=DO(a,b);a.w.uniformMatrix4fv(g,!!d,Nj(e));}
function A1V(a,b){var c,d;a.uo=b;c=a.w;d=a.dG.W(Bn(b));c.useProgram(d);}
function A9P(a,b,c,d,e,f,g){a.w.vertexAttribPointer(b,c,d,!!e,f,g);}
var XW=D(Fr);
function BcX(a,b,c,d,e,f){var g=new XW();AEh(g,a,b,c,d,e,f);return g;}
function AEh(a,b,c,d,e,f,g){Ls(a,b,c,d,e,f,g);}
function A4Q(a,b){var c,d,e,f;c=a.fH.A.data;d=a.fC;e=b*2|0;f=(c[d+e|0]&255)<<8|a.fH.A.data[(a.fC+e|0)+1|0]&255;return f<<16>>16;}
function AYp(a,b,c){var d,e,f;d=a.fH.A.data;e=a.fC;f=b*2|0;d[e+f|0]=c>>8<<24>>24;a.fH.A.data[(a.fC+f|0)+1|0]=c<<24>>24;}
function QH(){C.call(this);this.Qg=null;}
function Be$(a){var b=new QH();AL_(b,a);return b;}
function AL_(a,b){a.Qg=b;J(a);}
function AHP(a){(C_()).fu(B(757));(CS()).fJ();}
function AVl(a){a.Gl();}
$rt_packages([-1,"com",0,"badlogic",1,"gdx",2,"utils",3,"reflect",2,"graphics",5,"g2d",-1,"java",7,"util",8,"regex",7,"nio",10,"charset",7,"io",7,"lang"]);
$rt_metadata([C,"Object",13,0,[],0,3,0,0,["RJ",Bgm(EM),"T5",Bgm(Ck),"bp",Bgm(MN),"z",Bgn(AMS),"b",Bgm(PW),"UL",Bgm(Iu),"go",Bgm(ALS)],T,0,C,[],1,0,0,0,["d",Bgm(Bo),"Ht",Bgn(A6Y)],RR,0,T,[],0,0,0,0,["d",Bgm(A7t),"U",Bgm(AYC)],Qs,0,T,[],0,0,0,0,["d",Bgm(A9V),"U",Bgm(AMX)],I1,0,C,[],3,3,0,0,0,V4,0,C,[],0,3,0,0,["Q9",Bgo(ARd),"tI",Bgm(AHV),"dO",Bgn(A92),"Lj",Bgm(AJi),"ef",Bgn(A7L),"em",Bgn(A0g),"dR",Bgn(A_C)],E2,0,C,[],3,3,0,0,0,HK,0,C,[E2],1,3,0,0,["d",Bgm(P9),"jk",Bgm(A1f),"Pq",Bgm(AXe)],Wq,0,C,[],4,3,0,0,0,B3,
0,C,[],3,3,0,0,0,D4,0,C,[B3],1,3,0,0,["d",Bgm(ACo)],B$,0,C,[],3,3,0,0,0,D5,0,D4,[B$],0,3,0,C1,["bj",Bgn(Hs),"ll",Bgm(AV8),"b",Bgm(ASC),"bp",Bgm(AUO),"z",Bgn(A$y)],Ez,0,C,[],0,0,0,Bai,0,Bt,0,C,[],1,0,0,W2,["d",Bgm(Co),"xc",Bgn(I_),"cD",Bgp(F3),"cI",Bgq(Gb),"AF",Bgn(AYc),"i6",Bgm(AXi),"F5",Bgm(ANf),"b",Bgm(APT),"Ju",Bgm(AQC),"Q",Bgn(LJ),"ca",Bgn(A8X),"h8",Bgm(A$e),"ed",Bgm(OO)],BB,0,Bt,[],0,0,0,0,["d",Bgm(CP),"iS",Bgo(Sz),"e",Bgp(AJm),"Q",Bgn(AOF),"u",Bgm(ALa),"ca",Bgn(A22),"ba",Bgn(APx),"ed",Bgm(AGd)],Fz,0,BB,
[],0,0,0,0,["Xz",Bgo(Qe),"e",Bgp(ADL),"cD",Bgp(AMx),"cI",Bgq(A7l),"ca",Bgn(A2U),"h8",Bgm(A5D),"ed",Bgm(ATf)],HS,0,C,[],1,3,0,0,["XR",Bgq(ACk),"uz",Bgp(Yx),"Tl",Bgn(K2),"ve",Bgn(ATs),"SJ",Bgn(LQ),"qR",Bgn(A1F),"Um",Bgp(IE),"F4",Bgn(XU),"Tf",Bgn(JN),"Lu",Bgn(A3D),"Xa",Bgm(OU),"uS",Bgm(AOt)],Do,0,HS,[],1,3,0,0,["uz",Bgp(GI),"OQ",Bgo(AE1)],Xv,0,Do,[],0,3,0,0,["Ji",Bgp(A5U),"mW",function(b,c,d,e,f,g,h){return A62(this,b,c,d,e,f,g,h);}],Cr,0,C,[],3,3,0,0,0,BT,0,C,[Cr],1,3,0,0,["d",Bgm(B_),"dZ",Bgo(AWq),"yG",Bgn(AKd),
"z",Bgn(AC_),"bp",Bgm(A5b),"de",Bgm(AWX),"iz",Bgm(AKS),"b",Bgm(AVE)],F9,0,BT,[],0,3,0,AH6,["b6",Bgn(XB),"d",Bgm(Ih),"J2",Bgn(ASw)],Of,0,F9,[],0,3,0,ARG,["TM",Bgq(SB),"I2",Bgm(AKj),"b6",Bgn(AB3)],Dj,0,BT,[],0,3,0,H7,["b6",Bgn(AAR),"Om",Bgn(ARn),"Ko",Bgn(AS9)],Ey,0,C,[E2],0,3,0,LW,["bP",Bgn(Ws),"Wq",Bgo(NS)],Ja,0,T,[],0,0,0,0,["d",Bgm(Qb),"U",Bgm(P5)],Bw,0,C,[],0,3,0,BbM,0,O$,0,Fz,[],0,0,0,0,["RT",Bgn(APM),"cD",Bgp(AIC),"cI",Bgq(A_m),"h8",Bgm(AGt)],Db,0,C,[],0,3,0,0,["oe",Bgm(AZX),"mR",Bgm(AP8),"GC",Bgm(AJf),
"FE",Bgm(A1e),"y1",Bgn(ATI)],B4,0,Db,[],0,3,0,0,["d",Bgm(E$),"jb",Bgo(JV),"bP",Bgn(Mi)],Bm,"RuntimeException",13,B4,[],0,3,0,0,["d",Bgm(Cx),"jb",Bgo(P1),"bP",Bgn(EF)],Uy,"BufferOverflowException",11,Bm,[],0,3,0,0,["d",Bgm(ANO)],LK,0,C,[],3,3,0,0,0,ZM,0,C,[LK],0,3,0,0,["VZ",Bgn(AC4),"OH",Bgm(A8Z),"HS",Bgm(AVS),"KO",Bgm(AJJ),"fJ",Bgm(APu),"nJ",Bgm(AWG),"v1",function(b,c,d,e,f){A6f(this,b,c,d,e,f);},"D7",Bgp(AOs),"nd",Bgo(AI$),"GK",Bgp(AHb),"tT",Bgp(ASj),"Mb",Bgq(A4t),"LF",function(b,c,d,e,f){AS5(this,b,c,d,e,
f);}],B2,0,C,[],3,3,0,0,0,VK,0,C,[B2],1,3,0,0,0,He,0,T,[],0,0,0,0,["d",Bgm(QB),"U",Bgm(RT)],ABB,0,He,[],0,0,0,0,["d",Bgm(A1o),"U",Bgm(ANo)],Ov,0,C,[],3,3,0,0,0,V_,0,C,[E2,Ov],0,0,0,0,["TB",Bgn(ADP),"nU",Bgn(ASL),"fd",Bgm(A9g),"PV",Bgm(AR7)],Bx,0,C,[B$,B3],1,3,0,0,["dT",Bgo(Cw),"Re",Bgm(BC),"b",Bgm(A0X)],Dk,0,Bx,[],12,3,0,Vw,0,BJ,0,Bt,[],1,0,0,0,["xc",Bgn(VP),"d",Bgm(C2),"e",Bgp(A$Y),"cg",Bgm(A8j),"ba",Bgn(AKZ)],Pd,0,BJ,[],0,0,0,0,["E$",Bgn(A06),"bH",Bgo(A7s),"u",Bgm(A8I)],Fp,0,C,[],3,3,0,0,0,Jf,0,C,[Fp],0,3,
0,0,["d",Bgm(ACQ),"lr",Bgn(AVY),"m_",Bgo(ARL)],It,0,Jf,[],0,3,0,0,["Tn",Bgn(Vy),"VK",function(b,c,d,e,f){ABX(this,b,c,d,e,f);},"U3",function(b,c,d,e,f,g){O2(this,b,c,d,e,f,g);},"iq",Bgq(OP),"rY",Bgq(AOI),"i_",Bgp(VS),"QQ",Bgp(ADx),"hQ",Bgq(AAu),"N6",Bgq(ADl)],FO,"CharSequence",13,C,[],3,3,0,0,0,D8,0,Db,[],0,3,0,0,["jb",Bgo(SU),"bP",Bgn(XM),"EW",Bgn(AAj)]]);
$rt_metadata([FS,0,D8,[],0,3,0,0,["bP",Bgn(OW)],RG,0,C,[],0,3,0,0,["d",Bgm(AHu),"ms",Bgo(XR),"e7",Bgn(ARU),"Jy",Bgn(AYx),"M8",Bgn(AR6)],Ej,"IndexOutOfBoundsException",13,Bm,[],0,3,0,0,["d",Bgm(PY),"bP",Bgn(M6)],ACu,"StringIndexOutOfBoundsException",13,Ej,[],0,3,0,0,["d",Bgm(ARc)],Mn,"MissingResourceException",8,Bm,[],0,3,0,0,["Xd",Bgp(AZS)],KE,0,C,[],0,3,0,MZ,0,Jy,0,C,[],1,3,0,0,["uz",Bgp(UZ),"Wp",Bgn(Oc),"ve",Bgn(A85),"WX",Bgn(Le),"qR",Bgn(A0_),"Vn",Bgp(IX),"Uy",Bgn(KV),"XV",Bgm(ACb),"Qv",Bgn(WU),"Hg",Bgn(ANp),
"uS",Bgm(AZl)],KG,0,C,[],4,3,0,BcR,0,FM,0,BB,[],0,0,0,0,["fV",Bgo(Kg),"e",Bgp(AEm),"Q",Bgn(A6p),"j9",Bgn(AGJ),"u",Bgm(AVA),"ba",Bgn(APP)],YP,0,FM,[],0,0,0,0,["fV",Bgo(AIP),"e",Bgp(AMr),"u",Bgm(AW$)],LX,0,C,[B2],3,3,0,0,0,I3,0,C,[],4,3,0,Ev,0,EL,0,Bx,[],12,3,0,O5,0,Y4,0,T,[],0,0,0,0,["wg",Bgo(AGu),"KG",Bgp(AS1),"U",Bgm(AZ6)],LY,0,C,[],3,3,0,0,0,Gi,0,C,[LY],3,3,0,0,0,NI,0,C,[],3,3,0,0,0,DT,0,C,[Gi,NI],1,3,0,0,["d",Bgm(Ha),"nb",Bgp(ADU)],Lm,0,DT,[],0,3,0,ATn,["vV",Bgn(A48)],Dd,0,Bt,[],1,0,0,0,["gD",Bgp(FW),"pV",
Bgm(A$8),"ca",Bgn(AQb),"ba",Bgn(A9b),"ed",Bgm(AM1)],RA,0,Dd,[],0,0,0,0,["gD",Bgp(AEy),"e",Bgp(A$4),"cD",Bgp(AQ1),"u",Bgm(A5$)],Cy,0,Bt,[],0,0,0,JF,["bj",Bgn(Et),"e",Bgp(AEU),"ka",Bgm(A3H),"u",Bgm(AJZ),"ba",Bgn(AFt)],Ks,0,Cy,[],0,0,0,0,["bj",Bgn(AB2),"e",Bgp(AFF),"u",Bgm(A8O)],Mz,0,C,[Cr],3,3,0,0,0,OT,0,BB,[],0,0,0,0,["o9",Bgn(ARI),"Q",Bgn(AZV),"e",Bgp(AKg),"u",Bgm(A5N)],CH,0,Dd,[],0,0,0,0,["gD",Bgp(Fd),"e",Bgp(AVd),"u",Bgm(A1D)],Rz,0,CH,[],0,0,0,0,["gD",Bgp(AXz),"e",Bgp(ATv)],Ko,0,C,[],3,3,0,0,0,AAo,0,Do,[],
0,3,0,0,["kd",Bgn(AS_),"mW",function(b,c,d,e,f,g,h){return AJx(this,b,c,d,e,f,g,h);}],Dc,0,C,[],0,3,0,0,0,BH,0,C,[B$],1,3,0,NJ,["FT",Bgn(Fb),"zJ",Bgn(AWu),"z",Bgn(AUt),"b",Bgm(ARH),"bp",Bgm(F2)],Dn,0,B4,[],0,3,0,0,["d",Bgm(Jt)],Ix,0,C,[],3,3,0,0,0,H9,0,C,[Ix],0,3,0,0,["d",Bgm(QO),"Ai",Bgn(AVn)],KP,0,C,[],3,3,0,0,0,FA,0,H9,[KP],0,3,0,0,["XW",function(b,c,d,e,f,g){AAD(this,b,c,d,e,f,g);},"BA",Bgm(AUk),"so",Bgm(AOM),"vv",Bgm(AJE),"b",Bgm(AEP),"Cy",Bgn(A7S)],AAe,"CoderMalfunctionError",11,D8,[],0,3,0,0,["EW",Bgn(AM9)],Mk,
0,C,[B2],3,3,0,0,0,XS,0,C,[Mk],0,0,0,0,["S7",Bgn(ALx),"Il",Bgm(AP7),"T0",Bgm(AOu)],XP,0,CH,[],0,0,0,0,["gD",Bgp(A2e),"e",Bgp(A4b)],By,0,C,[],0,3,0,J8,0,ES,0,C,[B3,FO],0,0,0,0,["d",Bgm(J6),"bj",Bgn(JT),"Ur",Bgn(Y2),"Wi",Bgn(Lj),"k4",Bgo(NW),"XX",Bgn(PH),"AX",Bgo(AVV),"LD",Bgp(A1G),"RN",Bgn(ACe),"DW",Bgo(RM),"MX",Bgp(AMY),"VQ",Bgn(TL),"CU",Bgo(Z3),"S2",Bgn(Nb),"u$",Bgo(Ow),"wR",Bgo(QJ),"Sz",Bgn(Tg),"xu",Bgo(OH),"gY",Bgn(Mx),"b",Bgm(Nv),"i",Bgm(M3),"f",Bgn(O4),"E0",Bgp(PL),"vx",Bgq(ZO),"Xs",Bgn(ACO),"tW",Bgp(Oq),
"uD",Bgq(Mo),"We",Bgn(ND),"d_",Bgo(AA8),"pv",Bgq(Yr),"uw",Bgn(ABK),"Vy",Bgn(ABY),"VB",Bgo(ACd),"ce",Bgo(Xa)],Fw,0,C,[],3,3,0,0,0,PI,0,ES,[Fw],0,3,0,0,["d",Bgm(A1d),"IJ",Bgn(AG9),"I8",Bgn(AQ2),"Lg",Bgp(ATu),"Ps",Bgn(AHT),"No",Bgp(AV6),"Bx",Bgn(A8U),"IC",Bgq(A3y),"Ov",Bgq(A3Q),"QL",Bgo(A9z),"HH",Bgo(A7e),"uD",Bgq(AIx),"tW",Bgp(AWY),"vx",Bgq(A0v),"E0",Bgp(A6P),"f",Bgn(AUP),"i",Bgm(A$3),"b",Bgm(AXc),"gY",Bgn(AXs),"u$",Bgo(A8e),"k4",Bgo(AU3)],EJ,0,C,[],3,3,0,0,0,CT,0,C,[],1,3,0,0,["bj",Bgn(FJ),"Wn",Bgm(CV),"SI",
Bgm(B8),"c0",Bgn(GM),"Tb",Bgm(BD),"cl",Bgn(IZ),"c2",Bgm(FZ),"db",Bgm(G8),"VI",Bgm(Bb),"Vo",Bgm(Cb)],N6,0,C,[],4,3,0,AIo,0,E8,0,C,[],1,0,0,0,["d",Bgm(Mg)],Q,0,E8,[],1,0,0,Kd,["d",Bgm(Be),"bK",Bgm(AWV),"ci",Bgm(AVW),"Ga",Bgm(A3F),"Dg",Bgm(A08),"mg",Bgm(A7_),"N2",Bgm(AEN),"mQ",Bgm(AW5),"g8",Bgm(A$c),"f$",Bgn(ARQ),"jH",Bgm(AIv)],Zy,0,Q,[],0,0,0,0,["WQ",Bgn(A2c),"p",Bgn(ATi)]]);
$rt_metadata([Gw,0,C,[],4,0,0,AP0,["d",Bgm(TV),"Wf",Bgn(ACa)],Ny,0,C,[],3,3,0,0,0,JZ,0,C,[B3],0,3,0,Vc,["MG",Bgn(ADE),"GJ",Bgn(A$S),"d",Bgm(Qt),"DL",Bgo(A5o),"wO",Bgm(A0Y),"K9",Bgm(AQR),"NM",Bgp(AUa)],K4,0,C,[],3,3,0,0,0,ABs,0,C,[K4],0,3,0,0,["Tj",Bgn(ASI),"Oj",Bgo(AYe),"oc",Bgn(A9D),"Fp",Bgn(AWP)],EN,0,Bx,[],12,0,0,AA6,0,IR,0,T,[],0,0,0,0,["d",Bgm(TS),"U",Bgm(ZA)],RZ,0,T,[],0,0,0,0,["d",Bgm(AF$),"U",Bgm(A0x)],Nk,0,C,[],3,3,0,0,0,Ek,0,BB,[],0,0,0,0,["yi",Bgo(J3),"Q",Bgn(A$i),"e",Bgp(AOl),"u",Bgm(A46),"vo",Bgp(AKL),
"ca",Bgn(ALv),"ba",Bgn(A6t)],AAd,0,Ek,[],0,0,0,0,["yi",Bgo(AXm)],Jw,0,C,[],1,3,0,0,["d",Bgm(Xe),"IW",Bgn(ALi),"Xx",Bgm(N$),"jk",Bgm(ANX),"nU",Bgn(APe),"R1",Bgn(Zi)],Zo,0,C,[B2],1,3,0,0,0,Da,0,Jy,[],1,3,0,0,["uz",Bgp(GE),"F_",Bgo(ARR)],X9,0,Da,[],0,3,0,0,["kd",Bgn(AGB),"nc",function(b,c,d,e,f,g,h){return AT7(this,b,c,d,e,f,g,h);}],Ym,0,C,[],4,3,0,0,0,Gg,0,C,[Cr],0,3,0,FD,["Nx",Bgn(Pb),"Vb",Bgp(T$),"D4",Bgn(ADD),"f9",Bgm(AG4),"kx",Bgm(AKV),"lZ",Bgm(ANu),"ld",Bgm(AQs),"bo",Bgm(AJu),"bl",Bgm(AMW),"kz",Bgm(A7c),
"iz",Bgm(AXK),"sU",Bgm(ADV),"Qx",Bgm(AFs),"N$",Bgm(ARa),"JL",Bgm(A5d),"Jn",Bgm(A$v),"zh",function(b,c,d,e,f,g,h){AY8(this,b,c,d,e,f,g,h);},"Lp",function(b,c,d,e,f,g,h,i,j){APo(this,b,c,d,e,f,g,h,i,j);}],HE,0,BH,[],0,3,0,ABD,0,ACE,0,Cy,[],0,0,0,0,["d",Bgm(AUr),"e",Bgp(AX$),"u",Bgm(A15)],KQ,0,C,[],3,3,0,0,0,JC,0,BB,[],0,0,0,0,["iS",Bgo(VY),"e",Bgp(AOn),"u",Bgm(AMo),"ba",Bgn(A6R)],Ds,0,JC,[],0,0,0,0,["iS",Bgo(Gc),"e",Bgp(AYP),"Q",Bgn(A6q),"u",Bgm(AD5)],VB,0,Ds,[],0,0,0,0,["iS",Bgo(AJd),"e",Bgp(AOC),"ba",Bgn(ARY),
"u",Bgm(A$d)],Gx,0,C,[],3,3,0,0,0,Pv,0,C,[Gx],0,3,0,0,["d",Bgm(A5E)],Ig,0,C,[Mz],1,3,0,0,["d",Bgm(SE),"JW",Bgn(A19)],Pu,0,Ig,[],0,3,0,0,["S4",Bgn(WV),"d",Bgm(A$f),"Gc",Bgn(ASk)],ABx,0,Ds,[],0,0,0,0,["iS",Bgo(AIq),"e",Bgp(AFj),"ba",Bgn(A8p),"u",Bgm(AJa)],Ld,0,C,[],3,3,0,0,0,Hp,0,C,[Ld],0,3,0,0,["X0",Bgq(AX7),"x0",Bgm(AUJ),"zY",Bgm(AX8),"Qs",Bgm(AMu),"Fl",Bgm(A1Z),"bo",Bgm(ALD),"bl",Bgm(AYm),"f9",Bgm(AIf),"QN",Bgm(AVL),"qG",Bgm(AHn),"Of",Bgm(A4e),"Hd",Bgn(AYD)],Hz,"UnsupportedOperationException",13,Bm,[],0,3,
0,0,["d",Bgm(R6)],ACJ,"ReadOnlyBufferException",10,Hz,[],0,3,0,0,["d",Bgm(A12)],N1,0,BH,[],0,3,0,GP,0,ZZ,0,C,[],4,3,0,0,0,DQ,0,C,[],1,3,0,0,["d",Bgm(HW)],OA,0,DQ,[],0,3,0,0,["d",Bgm(AKq),"Lo",Bgn(AKw),"H4",Bgp(ANZ),"Ij",function(b,c,d,e,f,g,h){return AFe(this,b,c,d,e,f,g,h);},"F6",Bgn(AXx)],AAk,0,C,[],0,3,0,0,["d",Bgm(AFK)],UC,0,C,[Fp],0,3,0,0,["RE",Bgn(AEZ),"lG",Bgn(AKG),"oF",Bgn(AT6),"lr",Bgn(AUo),"iq",Bgq(AEv),"hQ",Bgq(AQp),"i_",Bgp(AIG),"m_",Bgo(ARX),"oJ",Bgo(A30)],FL,0,FS,[],0,3,0,0,["bP",Bgn(KF)],AAb,
0,FL,[],0,3,0,0,["bP",Bgn(AF0)],Pr,0,T,[],0,0,0,0,["d",Bgm(AF2),"U",Bgm(AHx)],IS,0,C,[B2],3,3,0,0,0,Cz,0,C,[],3,3,0,0,0,IF,0,C,[Cz],3,3,0,0,0,Jb,0,C,[IF],1,3,0,0,["d",Bgm(Ul),"IH",Bgn(AZu)],E9,0,C,[Gi],1,3,0,0,["d",Bgm(Kv),"ru",Bgp(A8P),"fQ",Bgm(A0$)],ABh,0,E9,[],0,3,0,0,["W3",Bgp(ACV),"TZ",Bgn(AFo),"Bg",Bgm(AXZ),"ru",Bgp(A$q),"fQ",Bgm(AJ1)],Tv,0,C,[],4,3,0,0,0,IN,0,CT,[B$],1,3,0,0,["ge",Bgp(AAf),"Sm",Bgm(Ty),"c2",Bgm(A4o)],JH,0,C,[],1,3,0,0,["d",Bgm(Tk),"PF",Bgn(A8A),"NN",Bgm(A8k),"GD",Bgn(AJc),"Ki",Bgo(AHe),
"HJ",Bgq(AXo)]]);
$rt_metadata([CF,0,Dd,[],0,0,0,0,["lj",Bgp(E4),"e",Bgp(AUU),"u",Bgm(AXS)],Ee,0,CF,[],0,0,0,0,["lj",Bgp(Nr),"e",Bgp(A3r),"Q",Bgn(AUd)],TW,0,Ee,[],0,0,0,0,["lj",Bgp(A$s),"e",Bgp(ANe)],Hw,0,C,[],3,3,0,0,0,V,0,C,[Hw],1,3,0,0,["d",Bgm(BM),"xZ",Bgo(AIA)],ABr,0,C,[],0,0,0,0,["d",Bgm(AL2),"GA",Bgq(AUW)],XC,0,C,[],0,3,0,0,0,Nl,0,C,[],3,3,0,0,0,Hg,0,Bm,[],0,3,0,0,0,GF,0,BT,[],0,3,0,AJK,["d",Bgm(Jg),"b6",Bgn(Pl)],FT,0,GF,[],0,3,0,AG6,["b6",Bgn(Tm),"d",Bgm(HM),"IM",Bgn(A0q),"Ix",Bgn(AY0),"Ha",Bgn(AXD),"HK",Bgn(ASU)],GB,
0,C,[],1,3,0,0,["d",Bgm(UK)],Xg,0,C,[],4,0,0,0,0,OX,0,Q,[],0,0,0,0,["RD",Bgn(A6U),"p",Bgn(AGY)],C0,0,C,[B$],1,3,0,0,["Sd",Bgo(GH),"x8",Bgm(Z9),"Qv",Bgn(ZI),"F4",Bgn(UH)],RN,0,C0,[],0,3,0,0,["WM",Bgp(AE_),"lK",Bgm(AKC),"mv",Bgm(ADW)],B7,0,C,[],0,3,0,0,["d",Bgm(Dq),"ek",Bgn(AQv),"cx",Bgn(AWf)],PD,0,B7,[],0,0,0,0,["Tm",Bgo(AYY),"ek",Bgn(A4l),"cx",Bgn(AZh),"I_",Bgo(ANb),"cE",Bgo(AFE)],PU,0,C,[],4,3,0,0,0,Hj,0,C,[],3,3,0,0,0,Sg,0,C,[Hj],0,3,0,0,["X5",Bgq(A0f),"fd",Bgm(AKz)],PE,0,B7,[],0,0,0,0,["XF",Bgp(AVJ),"ek",
Bgn(A39),"cx",Bgn(A2_),"hY",Bgo(A7o),"cE",Bgo(A8l)],LB,0,C,[B2],3,3,0,0,0,WY,0,C,[LB],0,0,0,0,["QY",Bgn(ANH),"PE",Bgn(A0r),"Xg",Bgn(A4g)],PF,0,B7,[],0,0,0,0,["RV",Bgq(ADZ),"ek",Bgn(ALC),"cx",Bgn(A7v),"cE",Bgo(APm)],J5,0,C,[],32,0,0,BdR,0,ABE,0,C,[],4,3,0,0,0,Uu,0,C,[],0,3,0,0,["d",Bgm(A6K),"Iz",Bgn(AWT),"P_",Bgp(AV3),"Nc",Bgm(A9_),"EY",function(b,c,d,e,f,g){return A7W(this,b,c,d,e,f,g);},"Qi",Bgo(A4a),"Mo",Bgq(AFY)],H$,0,Ja,[],0,0,0,0,["d",Bgm(Rv),"U",Bgm(QW)],JI,0,H$,[],0,0,0,0,["d",Bgm(S$),"U",Bgm(Vp)],Za,
0,JI,[],0,0,0,0,["d",Bgm(AQZ),"U",Bgm(AM4)],AAW,0,T,[],0,0,0,0,["d",Bgm(A4F),"U",Bgm(ARN)],YU,0,Ds,[],0,0,0,0,["iS",Bgo(AQ8),"e",Bgp(AGa),"ba",Bgn(A_v),"u",Bgm(AN9)],Zd,0,BJ,[],0,0,0,0,["E$",Bgn(AYH),"bH",Bgo(AG5),"cD",Bgp(AWI),"cI",Bgq(A0t),"u",Bgm(AOw),"ca",Bgn(AJV),"N8",Bgp(A88),"LC",Bgp(A8f),"u_",Bgo(AKi)],RF,0,C0,[],0,3,0,0,["d",Bgm(AID),"lK",Bgm(AXE),"mv",Bgm(AUE)],Ne,0,C,[Fw,FO],0,3,0,C5,["bj",Bgn(XJ),"V7",Bgm(N4),"Rv",Bgn(CI),"TW",Bgn(II),"b",Bgm(AD3),"lx",Bgn(APr),"Ac",Bgn(AP4),"GV",Bgo(AGI),"PZ",Bgp(AEg),
"yq",Bgn(A3A),"CK",Bgn(A0I)],DE,0,C,[],0,3,0,H3,0,Uc,"ArrayStoreException",13,Bm,[],0,3,0,0,["d",Bgm(AZW)],My,"ReflectionException",4,B4,[],0,3,0,0,["jb",Bgo(A64)],FP,0,CH,[],0,0,0,0,["gD",Bgp(Mj),"e",Bgp(A7V),"Q",Bgn(A9v)],Ij,0,C,[],3,3,0,0,0,NT,0,C,[Ij],0,0,0,0,["Si",function(b,c,d,e,f,g){Sm(this,b,c,d,e,f,g);},"by",Bgo(ASc),"ev",Bgn(A25),"pQ",Bgm(AUF),"pc",Bgn(ALJ),"eA",Bgo(AYq),"uY",Bgo(AWJ),"jq",Bgn(A6h),"nE",Bgn(APz),"BV",Bgn(AEG),"OF",Bgn(A2g),"ww",Bgm(APs),"lC",Bgn(AGo),"MB",Bgm(AME),"zj",Bgn(AU9),"fO",
Bgo(AXR),"LP",Bgm(A9E),"Lw",Bgm(A9G),"tH",Bgp(A$x),"fW",Bgm(AGZ),"G$",Bgn(A7f),"dI",Bgm(AXh),"J",Bgm(A3s),"pN",Bgn(AY7),"Cv",Bgm(AIU),"jB",Bgm(A1b),"lH",Bgm(AU7),"Nu",Bgm(AV1)],Q1,0,C,[],0,3,0,0,["d",Bgm(A3X)],PX,0,BJ,[],0,0,0,0,["o9",Bgn(AN1),"bH",Bgo(A2o),"u",Bgm(AW8)],JB,0,C,[],0,3,0,0,["d",Bgm(A7X),"Ke",Bgn(A2I),"GE",Bgo(A6b),"b",Bgm(AJz)],Vk,0,B7,[],0,0,0,0,["XH",Bgo(A3z),"cE",Bgo(A75),"cx",Bgn(AHX)],Vj,0,B7,[],0,0,0,0,["To",Bgn(ASn),"hY",Bgo(APE),"cx",Bgn(A3E),"cE",Bgo(AOX)],Vz,0,Q,[],0,0,0,0,["Q2",Bgn(ALd),
"p",Bgn(A$V)],KJ,"GdxRuntimeException",3,Bm,[],0,3,0,0,["jb",Bgo(AD6),"bP",Bgn(QC)],Fo,0,C,[Cr],1,3,0,NZ,["fV",Bgo(KC),"ew",Bgm(A3T),"rS",Bgn(ARf),"N3",Bgm(AJe),"LJ",Bgo(ASH),"wt",Bgp(AOV),"Qf",Bgo(AE0),"Dn",Bgp(ADA),"OO",Bgo(AZR),"P3",Bgo(AIV)]]);
$rt_metadata([LE,0,Fo,[],0,3,0,FY,["Nx",Bgn(YX),"Kk",Bgo(AAt),"Xj",Bgp(Ia),"S9",Bgn(JM),"RF",Bgp(NH),"M9",Bgn(AR$),"bo",Bgm(AOb),"bl",Bgm(A8H),"b",Bgm(ANs)],LA,0,C,[B2],3,3,0,0,0,WZ,0,C,[LA],0,0,0,0,["QY",Bgn(ANd),"Nn",Bgn(A4H),"VU",Bgn(ATH)],WJ,0,C,[],4,3,0,0,0,F5,0,C,[],0,3,0,Di,["bP",Bgn(AAP)],Ge,0,C,[B3,B$],0,3,0,A_Q,["b6",Bgn(SZ),"VL",Bgm(A0O)],C3,"IllegalArgumentException",13,Bm,[],0,3,0,0,["d",Bgm(FX),"bP",Bgn(ACU)],Tu,"IllegalCharsetNameException",11,C3,[],0,3,0,0,["bP",Bgn(ARg)],Ua,0,C,[Ny,IS],0,3,
0,0,["TY",Bgn(AHM),"dU",Bgn(A2x),"fW",Bgm(AKU),"g5",Bgp(A8Q),"kn",Bgo(AMy),"kg",Bgo(AKe),"mx",Bgo(A$t),"kH",Bgo(A05),"L3",Bgn(AV5),"kR",Bgm(AHC),"JX",Bgn(AGm),"sm",Bgm(A_w),"lE",Bgn(APp)],U5,"NoSuchElementException",8,Bm,[],0,3,0,0,["d",Bgm(A3$),"bP",Bgn(A16)],ID,0,DT,[],0,3,0,0,["Ud",Bgn(O1)],HB,0,ID,[],0,3,0,0,["Uf",Bgo(Oe),"nb",Bgp(A4O),"GR",Bgn(AY4),"pp",Bgn(A1U),"yZ",Bgn(AKo),"fu",Bgn(AXQ),"KY",Bgn(ALj),"Nv",Bgm(A6E)],Su,0,Ds,[],0,0,0,0,["iS",Bgo(AVr),"e",Bgp(AUT),"ba",Bgn(A67),"u",Bgm(AFJ)],Pm,0,C,[LX],
0,0,0,0,["WP",Bgo(ASy),"HP",Bgm(AR0),"GY",Bgm(A9i),"T1",Bgm(ANU),"Rk",Bgm(AHg)],Fy,0,IN,[],1,0,0,0,["ge",Bgp(MG),"Lc",Bgm(ARm),"gs",Bgn(A4i),"b2",Bgn(AMK),"th",Bgo(A8R),"b_",Bgm(AMa)],FI,0,Fy,[],1,0,0,0,["fP",function(b,c,d,e,f,g){JO(this,b,c,d,e,f,g);},"e1",Bgm(ALU)],Px,0,FI,[],0,0,0,0,["fP",function(b,c,d,e,f,g){AZm(this,b,c,d,e,f,g);},"p1",Bgn(AIN),"nQ",Bgo(ADa)],ABQ,0,FM,[],0,0,0,0,["fV",Bgo(A9d),"e",Bgp(AGz),"cD",Bgp(ARV),"cI",Bgq(AD2),"ca",Bgn(A3U),"u",Bgm(A9p)],Wu,0,Dd,[],0,0,0,0,["X2",Bgq(A51),"e",Bgp(AOH),
"cD",Bgp(ADk),"u",Bgm(A7h)],Tr,0,T,[],0,0,0,0,["d",Bgm(A1k),"U",Bgm(ALK)],IT,0,C,[],4,3,0,ACF,0,Cs,0,Bx,[],12,3,0,Iz,["R0",Bgm(E6)],Bi,"Color",5,C,[],0,3,0,Bv,["d",Bgm(U2),"bj",Bgn(ABU),"F2",Bgq(SI),"Td",Bgn(T_),"eR",Bgn(AEQ),"Jg",Bgn(A$J),"VE",Bgn(AEx),"TC",Bgn(A5z),"Rh",Bgn(AV0),"dL",Bgm(A7x),"hV",Bgq(A4q),"S$",Bgn(AON),"Xl",Bgq(ADS),"Rr",Bgq(AQI),"Wk",Bgq(A8d),"Vi",Bgo(ANR),"Ry",function(b,c,d,e,f){return AXu(this,b,c,d,e,f);},"X4",Bgm(AMH),"z",Bgn(AZb),"bp",Bgm(AMf),"ny",Bgm(AR2),"r0",Bgm(ATT),"b",Bgm(AGS),
"Pb",Bgp(A7a),"RR",Bgn(AU0),"Vh",Bgn(A6Q),"Ss",Bgm(A8$)],Fc,0,C,[],4,3,0,0,["TO",Bgp(ANA),"Tp",Bgq(ACC),"S3",function(b,c,d,e,f,g){AAC(this,b,c,d,e,f,g);},"z",Bgn(ANE),"Xu",Bgn(KH),"Sv",Bgm(IU),"RY",Bgm(QD),"bp",Bgm(AYK)],IC,0,C,[],0,3,0,0,["d",Bgm(UO)],Gd,0,IC,[],0,3,0,0,["Sb",Bgp(Ho),"rw",Bgm(AH8),"x8",Bgm(AKt),"Oi",Bgm(A7K),"Ox",Bgm(AGj),"qx",Bgm(ASl),"vK",Bgm(AHZ),"Mw",Bgn(A9U),"Iy",Bgm(A78),"Kx",Bgn(AOp),"K6",Bgm(AG$),"HA",Bgm(A8V),"b",Bgm(A4A)],F6,0,BT,[],0,3,0,AKO,["d",Bgm(Nw),"b6",Bgn(S2)],ABb,0,F6,
[],0,3,0,0,["Vz",Bgn(A5v),"QW",Bgn(ARx),"In",Bgn(AMV)],T1,0,CF,[],0,0,0,0,["WK",Bgn(AKR),"e",Bgp(A$U),"cD",Bgp(AND)],Ew,0,C,[Cr],0,3,0,UU,["IV",Bgo(UX),"IE",Bgm(AKI),"q0",Bgm(A8c),"r$",Bgm(A9e),"AN",Bgo(A23),"yf",Bgo(A1x),"Dl",Bgo(A0n),"kc",Bgo(APN),"Gf",Bgp(ADT),"jh",Bgq(AFM),"ys",function(b,c,d,e,f){AQe(this,b,c,d,e,f);},"z$",Bgq(ARO),"Ff",Bgo(AZy),"IL",Bgp(AVP),"GU",Bgo(ALY),"zx",Bgp(A32),"HV",Bgo(A9r),"Lv",Bgp(AIa),"PI",Bgq(AWL),"sp",Bgo(ADd),"KI",Bgo(A59),"id",function(b,c,d,e,f,g){A$K(this,b,c,d,e,f,g);
},"ew",Bgm(AVZ),"BI",Bgn(AFc),"tN",Bgn(A2V),"lS",Bgn(A57),"lY",Bgn(AE7)],DP,0,Bx,[],12,3,0,GS,0,Me,0,C,[],3,3,0,0,0,Jx,0,C,[Ix,Me],0,3,0,0,["b",Bgm(AMk),"z6",Bgm(AWC),"vW",Bgn(AY3),"u",Bgm(A2A),"hf",Bgm(AJo),"GP",Bgm(ASP),"gq",Bgm(A3B),"rq",Bgm(A_c),"LZ",Bgm(AS4),"GM",Bgn(A7G),"Hy",Bgn(A7E)],CN,0,C,[B2],1,3,0,0,0,Zh,0,CN,[],1,3,0,0,0,DN,0,C,[],3,3,0,0,0,AB_,0,C,[DN,B3],0,3,0,0,["d",Bgm(AXv),"bj",Bgn(AVg),"sQ",Bgn(APv),"n4",Bgo(AJX),"rU",Bgn(A_y),"Ot",Bgo(AVt),"eL",Bgn(AVz),"lb",Bgn(A$M),"P7",Bgn(AO5),"L7",Bgn(AOE),
"dN",Bgn(A9O),"iI",Bgn(ATP),"iQ",Bgn(A9F),"i8",Bgn(A2J),"bN",Bgm(A9Y)],VC,0,Q,[],0,0,0,0,["Xm",Bgn(A_d),"p",Bgn(AHh)],NU,0,C,[],3,3,0,0,0,FN,0,C,[],1,3,0,0,["d",Bgm(Lu),"MY",Bgp(AIK),"HT",Bgm(A0F),"Gd",Bgo(A5Z),"zk",Bgp(APc),"Kr",Bgp(APH),"k$",Bgn(A_a)],QG,0,FN,[],0,3,0,0,["d",Bgm(AF4),"f7",Bgm(AYs),"p$",Bgn(A_o)],Hd,0,C,[Cr],3,3,0,0,0,HP,0,C,[Hd],0,3,0,0,["mM",Bgo(AYu),"bj",Bgn(ABt),"l1",Bgm(AJ3),"ne",Bgm(AVs),"uA",Bgp(ANS),"uk",Bgm(AUH),"ew",Bgm(A9H),"Ed",Bgm(A63)],Qu,0,HP,[],0,3,0,0,["bj",Bgn(A5c)],JA,0,
D4,[B$],0,3,0,Qx,["RA",Bgm(A8M)],V9,0,C,[],0,3,0,0,0,DA,0,BJ,[],0,0,0,0,["nY",Bgn(APj),"cg",Bgm(A1$),"bH",Bgo(AJI),"cD",Bgp(AH1),"cI",Bgq(ALf),"u",Bgm(AR1),"ps",Bgm(AFk),"ca",Bgn(ARp)],VW,0,B7,[],0,0,0,0,["U1",Bgn(AE4),"cE",Bgo(A_b)],Ms,0,C,[],32,0,0,BdA,0,Ww,0,Q,[],0,0,0,0,["GI",Bgp(ATt),"p",Bgn(AQj)]]);
$rt_metadata([WD,0,Q,[],0,0,0,0,["kl",Bgq(AZ8),"p",Bgn(AC3)],Wy,0,Q,[],0,0,0,0,["nF",Bgo(ADe),"p",Bgn(A6W)],M7,0,C,[B2],3,3,0,0,0,Wx,0,Q,[],0,0,0,0,["GI",Bgp(ADq),"p",Bgn(A3o)],Wz,0,Q,[],0,0,0,0,["nF",Bgo(ADn),"p",Bgn(AJp)],WG,0,Q,[],0,0,0,0,["qk",Bgp(AHa),"p",Bgn(AYo)],GT,0,C,[Cr],3,3,0,0,0,WB,0,Q,[],0,0,0,0,["kl",Bgq(ADN),"p",Bgn(AY5)],WA,0,Q,[],0,0,0,0,["nF",Bgo(AUR),"p",Bgn(AMB)],P3,0,BB,[],4,0,0,0,["HE",Bgn(AGs),"e",Bgp(A47),"u",Bgm(AYf),"Q",Bgn(A7g),"i6",Bgm(AC1),"ba",Bgn(ATN)],WE,0,Q,[],0,0,0,0,["qk",
Bgp(A0E),"p",Bgn(ARZ)],DL,0,C,[B$],0,3,0,Bd,0,OQ,0,BJ,[],0,0,0,0,["nY",Bgn(APV),"bH",Bgo(ADF),"u",Bgm(AKb)],Dw,0,BJ,[],0,0,0,0,["bj",Bgn(ATL),"bH",Bgo(A6S),"cD",Bgp(A4B),"cI",Bgq(AFX),"u",Bgm(A9w),"sS",Bgm(AUV),"ca",Bgn(A6y)],Zb,0,T,[],0,0,0,0,["wg",Bgo(AHH),"KG",Bgp(AUy),"U",Bgm(AC$)],Sv,0,C,[B2],1,3,0,0,0,Sd,0,C,[],0,3,0,0,["d",Bgm(A5_)],D$,0,C,[],1,0,0,0,["d",Bgm(Km)],HV,0,CT,[B$,Fw,FO,Nl],1,3,0,0,["ge",Bgp(ZB),"rj",Bgp(AEp),"Mr",Bgn(APA),"P1",Bgp(A_e),"H0",Bgp(AWv),"XO",Bgn(IV),"Cq",Bgm(WH),"XT",Bgm(NK),
"XA",Bgm(K$),"oP",Bgn(AMm)],Ht,0,HV,[],1,0,0,0,["ge",Bgp(Qd),"JK",Bgm(AEs),"b_",Bgm(A$H)],Ro,0,Ht,[],0,0,0,0,["bj",Bgn(A5S),"Xp",function(b,c,d,e,f,g){U_(this,b,c,d,e,f,g);},"z1",Bgn(A4_),"sb",Bgo(A3b),"Or",Bgm(AN_),"Ny",Bgm(AIQ),"e1",Bgm(ATl)],S7,0,C,[Cz],0,3,0,0,["bj",Bgn(AQi),"ms",Bgo(Q4),"e7",Bgn(AJh),"Lh",Bgo(A0R),"l",Bgn(AT1),"mB",Bgn(A9x),"F8",Bgo(ATF)],ABA,0,Do,[],0,3,0,0,["kd",Bgn(AHD),"mW",function(b,c,d,e,f,g,h){return AP$(this,b,c,d,e,f,g,h);}],EA,0,C,[Cz,Gx,B$],0,3,0,0,["d",Bgm(Lx),"Vg",Bgm(GQ),
"L0",Bgm(Eh),"VF",Bgn(BA),"UK",Bgo(HL),"K",Bgm(AKl),"T$",Bgn(Ep),"T4",Bgn(X4),"TJ",Bgn(F7),"UN",Bgn(Ct),"KQ",Bgn(AQB),"XL",Bgo(RW),"Te",Bgo(Q2),"fs",Bgm(Kb),"Ge",Bgm(AWQ),"bp",Bgm(Wa),"z",Bgn(Vu),"cX",Bgo(AWx)],F4,0,EA,[],0,3,0,Jn,["d",Bgm(Kz),"bP",Bgn(Jl),"Rl",Bgn(NG),"Tr",Bgn(AB$),"WI",Bgo(KM),"Ja",Bgm(A7j),"bp",Bgm(AL7),"z",Bgn(AH_)],D6,"Pool",3,C,[],1,3,0,0,["d",Bgm(N5),"fV",Bgo(L_),"eT",Bgm(OV),"jr",Bgn(AGC),"zl",Bgn(AJN),"Dc",Bgn(AYg),"Ef",Bgn(UN)],DY,0,D6,[],1,3,0,0,["d",Bgm(Jh),"eT",Bgm(Wg),"ep",Bgm(AMA)],TC,
0,DY,[],0,3,0,0,["d",Bgm(AEb),"ON",Bgm(AM7),"K1",Bgm(A9c),"eT",Bgm(AGF),"tV",Bgm(ANF)],AAa,0,Q,[],0,0,0,0,["Vw",Bgn(ADi),"p",Bgn(A82)],JG,0,C,[B3],0,3,0,APR,["F2",Bgq(Yb),"d",Bgm(Rs),"nx",Bgq(AH0),"Pd",Bgn(AM2),"wp",Bgo(AYO),"t_",Bgm(A4j),"JO",Bgm(ANm),"J7",Bgn(A2W),"Cj",Bgm(A$F),"J$",Bgq(AEf),"JZ",Bgq(ARC)],Ec,0,C,[],4,3,0,BdQ,0,NB,0,C,[],0,3,0,Lb,0,RH,0,Q,[],0,0,0,0,["Sq",Bgn(A0a),"p",Bgn(AZ5)],G5,0,C,[],1,3,0,0,["d",Bgm(R2)],Y3,"UnsupportedCharsetException",11,C3,[],0,3,0,0,["bP",Bgn(AEX)],GJ,0,CT,[B$],1,
3,0,0,["ge",Bgp(Py),"DG",Bgp(A8o),"TX",Bgm(Un),"TG",Bgm(AB7),"H5",Bgn(APO),"HM",Bgn(A7p),"db",Bgm(A8v),"c2",Bgm(ATJ),"cl",Bgn(A3t),"c0",Bgn(AVv)],Fh,0,GJ,[],1,0,0,0,["ge",Bgp(Lq),"Kh",Bgn(A6u),"b_",Bgm(A2s)],Fr,0,Fh,[],1,0,0,0,["fP",function(b,c,d,e,f,g){Ls(this,b,c,d,e,f,g);},"e1",Bgm(A1c)],VO,0,Fr,[],0,0,0,0,["fP",function(b,c,d,e,f,g){A29(this,b,c,d,e,f,g);},"vk",Bgn(AYn),"qU",Bgo(AXI)],YF,0,Q,[],0,0,0,0,["Ui",Bgn(A0b),"p",Bgn(APZ)],DX,0,CT,[B$],1,3,0,0,["ge",Bgp(AAw),"wx",Bgp(ANy),"Xq",Bgm(R4),"VO",Bgm(Wk),
"OT",Bgn(AJg),"ME",Bgn(A4M),"db",Bgm(AJy),"c2",Bgm(ATY),"cl",Bgn(AOS),"c0",Bgn(AS7)],Fu,0,DX,[],1,0,0,0,["ge",Bgp(K3),"oa",Bgn(AK4),"Kv",Bgo(A$D),"b_",Bgm(AYJ)],ER,0,Fu,[],1,0,0,0,["fP",function(b,c,d,e,f,g){LO(this,b,c,d,e,f,g);},"e1",Bgm(A5w)],ABJ,0,Bt,[],4,0,0,0,["bj",Bgn(A0o),"e",Bgp(ALy),"ba",Bgn(A0k),"u",Bgm(AMj)],Us,0,BJ,[],0,0,0,0,["nY",Bgn(A4n),"bH",Bgo(AUu),"u",Bgm(A5l)],Hq,0,BH,[],0,3,0,A3J,0,E5,0,C,[Cz],0,3,0,0,["d",Bgm(AFN),"bj",Bgn(Op),"mM",Bgo(Kj),"Xv",Bgp(Vm),"SV",Bgn(A76),"Sc",Bgq(Rq),"F",Bgn(AP1),
"qz",Bgn(AJ4),"Jw",Bgp(ADR),"I$",Bgn(AJj),"rK",Bgp(AFA),"l",Bgn(A9N),"k3",Bgo(APJ),"K$",Bgo(A3C),"iv",Bgo(AZJ),"K4",Bgo(AGU),"Lr",Bgo(AGV),"st",Bgn(AO$),"lW",Bgo(AHq),"vp",Bgm(AVx),"qr",Bgm(ATy),"Fq",Bgm(A_x),"K",Bgm(AZB),"xq",Bgn(ARs),"j_",Bgn(AYZ),"Dw",Bgn(ATD),"bZ",Bgm(AKA),"h6",Bgn(AD8),"bp",Bgm(AWy),"z",Bgn(ALP),"b",Bgm(ARt),"fs",Bgm(AFT)],QE,0,C0,[],0,3,0,0,["d",Bgm(AYj),"lK",Bgm(A$C),"mv",Bgm(A7M)],EC,0,Bx,[],12,3,0,AUD,["F7",Bgm(G9)],K8,0,Cy,[],0,0,0,0,["bj",Bgn(UP),"e",Bgp(AVK),"dM",Bgm(AFP),"u",Bgm(AQJ),
"ba",Bgn(A5I)]]);
$rt_metadata([Je,0,BB,[],0,0,0,0,["nY",Bgn(AFV),"Q",Bgn(A5u),"e",Bgp(AX2),"cD",Bgp(AJR),"cI",Bgq(AYU),"u",Bgm(AQ9),"ca",Bgn(ADX),"ba",Bgn(ARe)],ACM,0,C,[],0,3,0,0,0,MC,0,C,[],3,3,0,0,0,Xd,0,C,[MC,Gx],0,3,0,0,["d",Bgm(AS0),"Hq",Bgo(A0y),"IZ",Bgo(AYz),"cX",Bgo(A7u)],ACf,"AssertionError",13,D8,[],0,3,0,0,["jb",Bgo(AHl)],Es,0,CH,[],0,0,0,0,["D2",function(b,c,d,e,f){Iv(this,b,c,d,e,f);},"e",Bgp(A_n),"u",Bgm(ASs)],Lw,0,Es,[],0,0,0,0,["D2",function(b,c,d,e,f){So(this,b,c,d,e,f);},"e",Bgp(AVO)],U1,0,C,[],0,3,0,0,0,MM,
0,C,[Cr],3,3,0,0,0,Ml,0,C,[IF],3,3,0,0,0,IG,0,Jb,[Ml],1,3,0,0,["d",Bgm(Y9),"fs",Bgm(AIe)],Ln,0,C,[],3,3,0,0,0,Wc,0,IG,[DN,B3,Ln],0,3,0,0,["d",Bgm(AIH),"bj",Bgn(OR),"gY",Bgn(AVQ),"l",Bgn(A6O),"df",Bgm(A5x),"h4",Bgn(ASo),"K_",Bgo(A1X),"mB",Bgn(AP3)],Yz,"IllegalMonitorStateException",13,Bm,[],0,3,0,0,["d",Bgm(A3c)],Eg,0,CF,[],0,0,0,0,["yX",Bgq(K0),"e",Bgp(AWn),"u",Bgm(AWZ)],C4,0,BB,[],0,0,0,0,["o9",Bgn(AAs),"e",Bgp(AZs),"u",Bgm(A98),"p",Bgn(AII),"ca",Bgn(AEF),"uJ",Bgm(ALc),"Q",Bgn(A72),"ba",Bgn(AIj)],Yv,0,FP,[],
0,0,0,0,["gD",Bgp(AOP),"e",Bgp(AFR)],Qm,0,C,[],4,3,0,0,0,BN,"String",13,C,[B3,B$,FO],0,3,0,Em,["KU",Bgn(IA),"Sx",Bgp(OF),"Tg",Bgq(J1),"XE",Bgq(KL),"SE",Bgo(TH),"S0",Bgp(OJ),"f",Bgn(AWj),"i",Bgm(A0j),"bN",Bgm(A18),"pv",Bgq(AH4),"PL",Bgn(A9q),"zM",Bgo(A5X),"e2",Bgn(A2b),"yR",Bgn(AZq),"eH",Bgo(A4U),"Li",Bgn(AZp),"mJ",Bgo(AWr),"xz",Bgn(AKu),"uv",Bgo(AY6),"Nm",Bgn(A5s),"Ab",Bgo(AHU),"H3",Bgn(AJ8),"ce",Bgo(ADM),"ei",Bgn(AKx),"d_",Bgo(AIc),"M1",Bgn(AUj),"uE",Bgo(A6N),"MH",Bgm(A2w),"b",Bgm(AFS),"rx",Bgm(A2a),"z",Bgn(ASi),
"Gt",Bgn(A9M),"x2",Bgn(ANv),"QM",Bgm(ANr),"AW",Bgn(A4X),"bp",Bgm(A44),"F1",Bgm(A4h),"FD",Bgn(A2M),"vB",Bgo(ASb),"GG",Bgo(AIm)],Ng,0,DT,[],0,3,0,A3g,["vV",Bgn(A2X)],LM,0,C,[],0,0,0,Bej,0,D_,0,C,[B2],3,3,0,0,0,MP,0,C,[D_],3,3,0,0,0,Yw,0,Fy,[],0,0,0,0,["UD",function(b,c,d,e,f,g){AJY(this,b,c,d,e,f,g);},"p1",Bgn(A41),"nQ",Bgo(A3e),"e1",Bgm(ADb)],Qn,0,Do,[],0,3,0,0,["kd",Bgn(AQM),"mW",function(b,c,d,e,f,g,h){return ALL(this,b,c,d,e,f,g,h);}],I6,0,C,[],1,3,0,0,["d",Bgm(XZ)],HU,0,C,[],3,3,0,0,0,Fm,0,I6,[HU,DN,B3],
0,3,0,TI,["d",Bgm(HH),"bj",Bgn(ME),"x",Bgo(AO1),"oU",Bgm(AMD)],Tc,0,Fm,[],0,3,0,0,["d",Bgm(AOx),"UX",Bgn(AKJ)],ABS,0,Fu,[],0,0,0,0,["Wa",function(b,c,d,e,f,g){AXV(this,b,c,d,e,f,g);},"vl",Bgn(AO8),"nh",Bgo(AOe),"e1",Bgm(A5q)],Wo,0,Bt,[],0,0,0,0,["d",Bgm(A$6),"e",Bgp(ALu),"u",Bgm(A5t),"ba",Bgn(A5C)],Oi,0,V,[],0,3,0,A0N,["bj",Bgn(YM),"bg",Bgq(AUC)],JP,0,Es,[],0,0,0,0,["D2",function(b,c,d,e,f){Sr(this,b,c,d,e,f);},"e",Bgp(AKr)],CX,0,Bx,[],12,3,0,P6,["F7",Bgm(EE)],L4,0,C0,[],0,3,0,Hx,["lK",Bgm(AQq),"mv",Bgm(ASY)],M5,
0,C,[D_],3,3,0,0,0,Vt,0,Bt,[],0,0,0,0,["bj",Bgn(A_r),"e",Bgp(A1H),"ba",Bgn(AGv),"u",Bgm(AI9)],SN,0,C,[NU],0,3,0,0,["XC",Bgn(A5M)],EO,0,C,[Gi],1,3,0,0,["d",Bgm(Lh),"LI",Bgn(AB4)],Si,0,EO,[],0,3,0,0,["V4",Bgo(AY1),"fQ",Bgm(ALR),"le",Bgm(ATR)],WW,0,Q,[],0,0,0,0,["Rs",Bgn(A3h),"p",Bgn(A9j)],I0,"NoSuchMethodException",13,Dn,[],0,3,0,0,["d",Bgm(A1T)],Yn,0,C,[],4,3,0,0,0,ZW,0,FI,[],0,0,0,0,["fP",function(b,c,d,e,f,g){AZg(this,b,c,d,e,f,g);},"p1",Bgn(AQ5),"nQ",Bgo(AET)],GO,0,BT,[],0,3,0,A_l,["b6",Bgn(AAL),"d",Bgm(Jr)],R7,
"NullPointerException",13,Bm,[],0,3,0,0,["bP",Bgn(A71),"d",Bgm(AGf)],XK,0,Q,[],0,0,0,0,["Q_",Bgn(AI1),"p",Bgn(A6m)],Qa,0,C,[],0,0,0,0,["d",Bgm(AT4)],YW,0,C,[],4,3,0,0,0,WX,0,C,[GT],0,3,0,0,["Bs",Bgp(AM8),"jI",Bgm(AXH),"uL",Bgm(AJQ),"up",Bgp(AFg),"ih",Bgo(ANG),"gO",Bgo(AIk)]]);
$rt_metadata([GU,0,BT,[],0,3,0,ANx,["b6",Bgn(YH),"d",Bgm(Iy)],OK,0,C,[],0,3,0,0,0,QN,0,T,[],0,0,0,0,["d",Bgm(A6Z),"U",Bgm(ANP)],Og,"PatternSyntaxException",9,C3,[],0,3,0,0,["RU",Bgp(VV),"mR",Bgm(A$a)],P7,0,D6,[],0,3,0,0,["SR",Bgp(AS3),"tV",Bgm(A1z)],LI,0,C,[],3,3,0,0,0,YY,0,C,[LI],0,3,0,0,["d",Bgm(APW),"wD",Bgm(A0h),"Gh",Bgm(AX5),"QB",Bgm(ADG),"QG",Bgq(AMe),"PU",Bgm(AMG),"NB",Bgm(ASX)],HG,0,C,[],0,3,0,A3_,["d",Bgm(AAG),"St",Bgn(YL),"Cx",Bgn(A31),"FY",function(b,c,d,e,f){return AOK(this,b,c,d,e,f);},"Hx",Bgn(AI_),
"z",Bgn(AEY),"Jx",Bgo(AVD)],TR,0,T,[],0,0,0,0,["d",Bgm(AGx),"U",Bgm(AYB)],HQ,0,C,[],3,3,0,0,0,HD,0,BH,[],0,3,0,AJr,0,DZ,0,Bx,[],12,3,0,M2,0,KT,0,C,[],3,3,0,0,0,L8,0,C,[Cz],0,3,0,A7b,["d",Bgm(TP),"ms",Bgo(Nt),"kp",Bgn(AXF),"j6",Bgn(A02),"x",Bgo(AQu),"W",Bgn(AWU),"K",Bgm(AVG),"c1",Bgn(A9k),"jJ",Bgn(W6)],YT,0,C,[B3],4,3,0,0,["TH",Bgn(GN),"UY",Bgo(Mq),"TR",Bgn(VU),"Ux",Bgm(IQ),"Wy",Bgm(VH),"U_",Bgm(ABT),"W$",Bgm(SH)],De,"IOException",12,B4,[],0,3,0,0,["d",Bgm(V3)],GL,0,De,[],0,3,0,0,0,Ot,0,C,[B2],3,3,0,0,0,V0,0,
C,[Ot],0,0,0,0,["Vp",Bgo(AUQ),"HO",Bgm(AXj),"SQ",Bgm(AO2)],Qh,0,FP,[],0,0,0,0,["gD",Bgp(ARk),"e",Bgp(ALb),"Q",Bgn(A4K)],Jo,0,C,[],0,3,0,0,["X7",Bgq(Ts)],YJ,"BufferOverflowException",10,Bm,[],0,3,0,0,["d",Bgm(A0m)],UJ,0,T,[],0,0,0,0,["d",Bgm(ALZ),"U",Bgm(A2K)],Mr,0,C,[],0,3,0,0,["RW",Bgp(AQW)],SG,0,EA,[],0,3,0,0,["d",Bgm(A9J),"GF",Bgn(AWz)],AAY,0,D$,[],0,0,0,0,["d",Bgm(AJP),"k0",Bgn(A7H),"D1",Bgo(AS$)],AAX,0,D$,[],0,0,0,0,["d",Bgm(AWD),"k0",Bgn(AF6),"D1",Bgo(APK)],YO,0,FS,[],0,3,0,0,0,Vd,0,T,[],0,0,0,0,["d",
Bgm(A1g),"U",Bgm(A69)],K_,0,C,[],0,3,0,0,0,KW,0,C,[],0,3,0,0,["d",Bgm(AZo),"Pa",Bgq(A0l)],Tn,0,C,[],0,3,0,0,["KU",Bgn(AYQ)],Dy,0,BJ,[],0,0,0,0,["o9",Bgn(APa),"bH",Bgo(AUm),"u",Bgm(ALE),"ca",Bgn(AOG),"uJ",Bgm(A5r)],Iq,0,Q,[],0,0,0,0,["bj",Bgn(Sx),"p",Bgn(AOA)],Zk,0,Iq,[],0,0,0,0,["bj",Bgn(ANw),"p",Bgn(A74)],LH,0,C,[MM],0,3,0,TG,["d",Bgm(ABu),"Tq",Bgo(Kf),"g6",Bgm(A04),"bd",Bgm(AQU),"Hv",Bgq(AK$),"ep",Bgm(AKy),"PD",Bgn(AJb),"z5",Bgm(AHv),"Km",Bgn(A5i),"Jv",Bgm(AD7)],L$,0,C,[],32,0,0,BeT,0,XQ,0,CN,[],1,3,0,0,0,N7,
0,C,[],3,3,0,0,0,LV,0,C,[N7],0,3,0,VL,["VN",Bgn(ACX),"U7",Bgo(Ka),"SY",Bgp(Nm),"Hc",Bgo(AMJ),"Hw",Bgo(AFd),"IA",Bgo(APi),"Jp",Bgp(A99),"z7",Bgp(ANI),"PW",Bgm(ADc),"yE",Bgn(AC5),"Oe",Bgo(AM3),"Po",Bgp(AZd)],D1,0,De,[],0,3,0,0,["d",Bgm(Kp)],QL,"UnmappableCharacterException",11,D1,[],0,3,0,0,["bj",Bgn(A1J),"mR",Bgm(AHj)],P4,0,Q,[],0,0,0,0,["d",Bgm(ATX),"Yf",Bgo(P$),"WF",Bgp(AVh),"cG",Bgn(AC2),"NG",Bgn(A_q),"bF",Bgo(A8W),"LM",Bgn(AUL),"x1",Bgn(AR8),"p",Bgn(AGq),"bK",Bgm(AT8),"ci",Bgm(AZD),"mg",Bgm(ARz),"b",Bgm(A4x),
"g8",Bgm(AIw)],P0,0,C,[IS],0,0,0,0,["WW",Bgp(A6z),"dU",Bgn(A4L),"lE",Bgn(A$n)],ABI,"BufferUnderflowException",10,Bm,[],0,3,0,0,["d",Bgm(ASz)],Tz,0,C,[],0,3,0,0,["d",Bgm(AC9)],UF,0,Ek,[],0,0,0,0,["yi",Bgo(A1q)],Oy,0,C,[],3,3,0,0,0,I4,0,C,[Oy],0,3,0,0,["d",Bgm(Ti),"G4",Bgq(AHF),"G0",Bgm(ANW)],ZD,0,I4,[],0,3,0,0,["d",Bgm(AKE),"rY",Bgq(A1S),"Os",Bgq(AHW),"OE",Bgo(A6_),"QI",Bgp(A5Y),"J_",Bgq(A2v),"Hp",Bgo(A9A),"QZ",Bgq(AYW)]]);
$rt_metadata([Pi,0,ER,[],0,0,0,0,["fP",function(b,c,d,e,f,g){A3Z(this,b,c,d,e,f,g);},"vl",Bgn(AL5),"nh",Bgo(A6o)],Mv,0,C,[Cr],3,3,0,0,0,Hb,0,C,[Mv],1,3,0,0,["d",Bgm(AA_),"I7",Bgp(ADC),"bf",Bgo(A_f),"b0",Bgn(ASA),"N5",Bgn(AH2),"Mz",Bgo(AZw),"C9",Bgo(X0),"NR",Bgn(A0D),"y8",Bgo(Vs),"bd",Bgm(WI),"V3",Bgn(Ie),"Ri",Bgn(B0),"Uz",Bgo(D2),"Ti",Bgo(Q5),"TF",Bgo(Ly),"Xc",Bgo(Fv),"Wc",Bgo(Fn),"V_",Bgp(WC),"WU",function(b,c,d,e,f){return DR(this,b,c,d,e,f);},"TT",Bgo(DV),"VD",Bgo(ZC)],RI,0,Q,[],0,0,0,0,["UT",Bgn(AVw),"p",
Bgn(AEu)],Tp,"MalformedInputException",11,D1,[],0,3,0,0,["bj",Bgn(AOh),"mR",Bgm(AIg)],X6,0,T,[],0,0,0,0,["d",Bgm(AD$),"U",Bgm(AHG)],Fg,0,Bx,[],12,3,0,Gv,0,EG,0,Bx,[],12,3,0,SM,0,H0,0,BH,[],0,3,0,ET,["V9",Bgo(VA),"pf",Bgm(APd),"bp",Bgm(ASO)],Io,0,C,[],1,3,0,0,["d",Bgm(Zc)],TE,"CloneNotSupportedException",13,B4,[],0,3,0,0,["d",Bgm(A1O)],Rh,0,CN,[],1,3,0,0,0,Ni,0,D4,[B$],0,3,0,N3,0,Gu,0,BT,[],0,3,0,AMv,["b6",Bgn(Se),"d",Bgm(HN)],Kw,0,Gu,[],0,3,0,A$l,["d",Bgm(Y$),"b6",Bgn(RD)],Nf,0,C,[],3,3,0,0,0,Rf,0,C,[Nf],0,
3,0,0,["d",Bgm(ATj),"G5",Bgo(ALB)],Tb,0,C,[],0,0,0,0,["bj",Bgn(AK1),"os",Bgo(AKp),"b2",Bgn(A3v)],Hn,0,C,[B2],3,3,0,0,0,QY,0,C,[Hn],1,3,0,0,["Uj",Bgn(A$2),"Xw",Bgm(AF8)],G6,0,C,[],0,3,0,0,["S_",Bgn(AV4),"Nb",Bgq(A7N),"Nq",Bgq(AFu),"Ba",Bgm(ATb),"Ig",Bgm(AGL),"Lz",Bgm(ADJ)],Sa,0,JH,[],0,3,0,0,["d",Bgm(AUK),"JH",Bgn(UV),"wG",Bgp(AYM)],VQ,0,C,[Cz],0,3,0,0,["RH",Bgq(APY),"Pe",Bgn(AMQ),"Nf",Bgp(AVk),"K",Bgm(A3l),"jJ",Bgn(ASV)],QF,0,IR,[],0,0,0,0,["d",Bgm(A2m),"U",Bgm(AJB)],Q8,"BitmapFont",6,C,[Cr],0,3,0,0,["d",Bgm(AGk),
"W5",Bgq(OL),"W1",Bgp(Uj),"WR",Bgp(YA),"HF",Bgn(AT3),"yg",Bgq(AI7),"Gv",Bgq(A97),"Oo",Bgm(AQF),"KA",Bgm(A9R)],Gy,0,GO,[],0,3,0,AHt,["b6",Bgn(Vh),"d",Bgm(KS)],Hf,0,Gy,[],0,3,0,0,["d",Bgm(RP)],Is,0,Hf,[],0,3,0,0,["d",Bgm(Lr)],LT,0,Is,[],0,3,0,AFi,["Sy",Bgn(Sh),"NA",Bgo(A9I),"b6",Bgn(AAn)],Zg,0,C,[],0,3,0,0,["d",Bgm(AEi),"XB",Bgo(AZK),"II",Bgn(APf),"My",Bgm(AQn),"Qk",Bgn(A4Y)],TZ,0,Q,[],0,0,0,0,["UQ",Bgo(AT2),"p",Bgn(AId)],TY,0,Q,[],0,0,0,0,["TD",Bgp(A4V),"p",Bgn(AU_)],C7,0,Bx,[],12,3,0,AYt,0,ABf,0,T,[],0,0,0,
0,["d",Bgm(AWm),"U",Bgm(A4P)],Os,0,C,[D_],3,3,0,0,0,W0,0,Eg,[],0,0,0,0,["yX",Bgq(A33),"e",Bgp(A7q)],Rc,0,Io,[],0,3,0,0,["bP",Bgn(AEA),"Id",Bgm(AVa)],Lf,0,C,[D_],3,3,0,0,0,Lk,0,C,[],3,3,0,0,0,XY,0,C,[Cz],0,3,0,0,["d",Bgm(ASv),"ms",Bgo(AAp),"e7",Bgn(AOo),"os",Bgo(AHS),"KN",Bgo(ALN)],XE,0,Q,[],0,0,0,0,["Ta",Bgn(ASZ),"p",Bgn(A3I)],PQ,0,Q,[],0,0,0,0,["Sj",Bgo(AS8),"p",Bgn(AL4),"b",Bgm(A0C)],Vf,0,CH,[],0,0,0,0,["gD",Bgp(ARj),"e",Bgp(AYh)],T5,0,C,[],0,3,0,0,["Sl",Bgq(ADo)],CY,0,BH,[],0,3,0,Ce,["FT",Bgn(Jk),"TV",Bgo(JQ),
"W_",function(b,c,d,e,f){NF(this,b,c,d,e,f);},"SO",Bgn(Z5),"pf",Bgm(AJs),"bp",Bgm(ASF)],Hh,0,V,[],0,3,0,PA,["fV",Bgo(Qj),"bg",Bgq(A4m)],NX,0,C,[],0,3,0,BeA,["WH",Bgo(ACg),"yN",Bgm(A52),"Nt",Bgn(AHI),"K",Bgm(A5a),"JC",Bgp(AT_),"Ir",function(b,c,d,e,f,g,h,i,j){return A$1(this,b,c,d,e,f,g,h,i,j);},"HU",Bgp(AGy)],PN,0,Q,[],0,0,0,0,["nF",Bgo(A68),"p",Bgn(AGG)],PO,0,Q,[],0,0,0,0,["nF",Bgo(AM$),"p",Bgn(A0i)],PP,0,Q,[],0,0,0,0,["kl",Bgq(AGR),"p",Bgn(A_D)]]);
$rt_metadata([MD,0,C,[B2],3,3,0,0,0,YI,0,C,[],4,3,0,0,0,P8,0,Q,[],0,0,0,0,["kl",Bgq(A0c),"p",Bgn(AJt)],PR,0,Q,[],0,0,0,0,["kl",Bgq(AY9),"p",Bgn(AW2)],ON,0,BJ,[],0,0,0,0,["E$",Bgn(A8E),"bH",Bgo(AMz),"u",Bgm(AKc)],PS,0,Q,[],0,0,0,0,["kl",Bgq(ADY),"p",Bgn(AO9)],PT,0,Q,[],0,0,0,0,["qk",Bgp(AOa),"p",Bgn(AK6)],Uf,0,Q,[],0,0,0,0,["Sr",Bgn(AUq),"p",Bgn(AKT)],HA,0,DQ,[],0,3,0,0,["d",Bgm(A10),"Jc",Bgn(AEE),"OJ",Bgo(AGg),"xL",function(b,c,d,e,f,g){return AP6(this,b,c,d,e,f,g);},"z",Bgn(AEq),"EE",Bgn(A43)],PM,0,Q,[],0,
0,0,0,["qk",Bgp(A3w),"p",Bgn(A8y)],Z4,0,CN,[],1,3,0,0,0,LF,0,C,[],0,3,0,ACy,0,ZE,0,ES,[Fw],0,3,0,0,["bj",Bgn(ALg),"d",Bgm(A$g),"dD",Bgn(A3Y),"a",Bgn(ADH),"j",Bgn(ANC),"Ne",Bgn(A0M),"cC",Bgn(AJD),"T",Bgn(ADv),"I4",Bgp(AGT),"qZ",Bgn(A7Q),"Jr",Bgn(AWH),"J6",Bgo(AZ0),"P5",Bgo(A8b),"Le",Bgq(A6F),"OM",Bgo(A$G),"Gs",Bgo(A4y),"KS",Bgo(AN8),"L1",Bgo(ASt),"E_",Bgn(AQ_),"GB",Bgo(A2z),"ce",Bgo(A9L),"uw",Bgn(A2F),"pv",Bgq(AH5),"d_",Bgo(A6M),"uD",Bgq(A2r),"tW",Bgp(AHw),"i",Bgm(AWO),"b",Bgm(AFI),"gY",Bgn(ALO),"xu",Bgo(ALX),
"wR",Bgo(A3V),"u$",Bgo(A3k),"CU",Bgo(A0Z),"DW",Bgo(AGe),"k4",Bgo(AT5)],QX,0,BB,[],0,0,0,0,["UU",Bgo(ATk),"e",Bgp(AEO),"Q",Bgn(A5m),"u",Bgm(A54),"ba",Bgn(AFQ),"ca",Bgn(AFm)],ABO,"ConcurrentModificationException",8,Bm,[],0,3,0,0,["d",Bgm(ATO)],O9,0,C,[I1],0,0,0,0,["d",Bgm(ALI)],Gt,0,C,[],3,3,0,0,0,O8,0,C,[Gt],0,0,0,0,["d",Bgm(AXf)],Mc,0,C,[],3,3,0,0,0,EU,0,C,[Mc,DN],0,0,0,0,["Ip",Bgo(L5)],MR,0,EU,[],0,0,0,0,["Ip",Bgo(AO4),"N7",Bgm(AE9),"MT",Bgo(ARW)],EZ,0,Cy,[],0,0,0,0,["d",Bgm(A8F),"e",Bgp(ASf),"u",Bgm(AXt)],AAc,
0,C,[],0,3,0,0,["bP",Bgn(A2R),"Mx",Bgn(A0s),"Nw",Bgp(A1I),"Go",function(b,c,d,e,f){AVN(this,b,c,d,e,f);},"nd",Bgo(A7Z),"yH",Bgp(AYE),"Qd",Bgn(AM6),"KM",Bgn(AJv),"LQ",Bgn(A6T),"N_",Bgn(AW_)],TO,0,BJ,[],0,0,0,0,["xc",Bgn(A3R),"bH",Bgo(A7D),"cD",Bgp(AZU),"cI",Bgq(AXX),"u",Bgm(AJ0),"ba",Bgn(AVC)],J2,0,BH,[],0,3,0,AGE,0,Vn,0,C,[I1],0,3,0,0,["IV",Bgo(A9a),"R2",Bgp(UD),"wq",Bgm(A_u),"O",Bgm(AE$)],J_,0,C,[Cz,B$],4,3,0,0,["Q8",Bgn(A3P),"Xn",Bgn(D0),"df",Bgm(CU),"Sh",Bgn(CB),"z",Bgn(NV),"L0",Bgm(IM),"VG",Bgm(NQ)],KB,
0,G6,[],0,3,0,0,0,ACK,0,C,[Cr],0,3,0,0,["WA",Bgp(TQ),"d",Bgm(A$w),"HN",Bgn(A4f),"ep",Bgm(A1C),"bd",Bgm(A7z),"C2",Bgo(ARr)],Re,0,ER,[],0,0,0,0,["fP",function(b,c,d,e,f,g){AVp(this,b,c,d,e,f,g);},"vl",Bgn(AUM),"nh",Bgo(A2L)],VM,0,C,[Lk],0,3,0,0,["SM",Bgn(AUB),"f7",Bgm(AUf),"vH",Bgm(ASK),"bo",Bgm(AL9),"bl",Bgm(AQY),"w$",Bgm(A5J),"EJ",Bgm(A42),"Fd",Bgm(A$7),"Ng",Bgm(AU4),"FB",Bgm(AWh),"Mg",Bgn(AHc),"wC",Bgo(ALw),"x6",Bgo(AFL),"tX",Bgn(AEc),"vN",Bgm(A27)],Ys,0,FL,[],0,3,0,0,["bP",Bgn(AGl)],TB,0,T,[],0,0,0,0,["d",
Bgm(AFa),"U",Bgm(AH7)],EI,"GlyphLayout",6,C,[EJ],0,3,0,DJ,["d",Bgm(ACh),"XG",Bgo(PJ),"SL",function(b,c,d,e,f,g){S9(this,b,c,d,e,f,g);},"V8",function(b,c,d,e,f,g,h,i,j){AA2(this,b,c,d,e,f,g,h,i,j);},"Mt",Bgo(A7y),"OZ",function(b,c,d,e,f,g){A3u(this,b,c,d,e,f,g);},"pJ",function(b,c,d,e,f,g,h,i,j){AG0(this,b,c,d,e,f,g,h,i,j);},"fW",Bgm(A8t),"b",Bgm(AN$)],ABW,"ArrayIndexOutOfBoundsException",13,Ej,[],0,3,0,0,["bj",Bgn(AEV)],Pt,0,EO,[],0,3,0,0,["Vl",Bgo(QA),"W0",Bgn(ADs),"Tc",Bgo(AAE),"fQ",Bgm(A8q),"JF",Bgp(AKm)],Fa,
0,Bx,[],12,3,0,RS,0,YZ,0,C,[],0,3,0,0,0,VZ,0,C,[Gt],0,0,0,0,["Vv",Bgn(AOR),"bC",Bgm(A4k),"bz",Bgm(A8N)],L0,0,C,[],0,3,0,0,["d",Bgm(A$P),"PJ",Bgm(A8C),"Ow",Bgm(APX),"Dh",Bgn(AFH),"y2",Bgn(A6V),"F9",Bgm(AUz),"IQ",Bgm(A6r),"Qb",Bgn(AL3),"Ie",Bgn(AEr),"M6",Bgo(AOT),"FF",Bgn(A11),"rC",Bgm(A3m),"xj",Bgm(A9y),"u6",Bgm(AZI),"ML",Bgn(A65)],LN,0,C,[],3,3,0,0,0,Hy,0,C,[LN,Fp],0,3,0,BaX,["d",Bgm(VE),"w1",Bgm(AZC),"v0",function(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){return A8h(this,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);},"Ft",Bgm(AZ$),
"Ob",Bgm(AC6),"QJ",Bgo(A8r),"lG",Bgn(AOc),"oF",Bgn(A4w),"lr",Bgn(AW3),"iq",Bgq(A7Y),"hQ",Bgq(A1N),"i_",Bgp(APq),"m_",Bgo(AXG),"oJ",Bgo(AMR)],VI,0,E8,[DN],0,0,0,0,["fV",Bgo(AKH),"jd",Bgm(A0B),"iJ",Bgm(A83),"b",Bgm(A4G)],W4,0,V,[],4,0,0,0,["d",Bgm(AJq),"bg",Bgq(ATo)],W1,0,V,[],4,0,0,0,["d",Bgm(A8S),"bg",Bgq(AYd)],VD,0,Q,[],0,0,0,0,["UJ",Bgn(AQQ),"p",Bgn(AWw)],W9,0,V,[],4,0,0,0,["d",Bgm(AK7),"bg",Bgq(A$r)],W5,0,V,[],4,0,0,0,["d",Bgm(AVb),"bg",Bgq(AN4)],W3,0,V,[],4,0,0,0,["d",Bgm(A7U),"bg",Bgq(A21)],W8,0,V,[],4,
0,0,0,["d",Bgm(AXg),"bg",Bgq(APL)]]);
$rt_metadata([Ta,0,C,[Nk],0,3,0,0,["d",Bgm(A36),"O_",Bgn(AY_)],Sk,0,C,[B3],0,3,0,0,["d",Bgm(AUX),"MI",Bgn(A8_),"Gb",Bgm(AE8),"xH",Bgm(AZM)],Nq,0,C,[],3,3,0,0,0,Lc,0,GU,[],0,3,0,AGD,["d",Bgm(R_),"b6",Bgn(ACl)],XI,0,C,[],4,0,0,0,0,Ss,0,Da,[],0,3,0,0,["kd",Bgn(A2G),"nc",function(b,c,d,e,f,g,h){return A91(this,b,c,d,e,f,g,h);}],AA$,0,C,[],4,3,0,0,["Rq",Bgo(ADO),"R5",Bgm(Wp),"i",Bgm(N8),"zn",Bgn(Rj),"qx",Bgm(PZ),"Tz",Bgm(SC)],AC0,0,CF,[],0,0,0,0,["lj",Bgp(APB),"e",Bgp(AEl)],AAO,0,C,[],0,3,0,0,["UA",Bgo(A4v),"tI",
Bgm(A4p),"dO",Bgn(A1B),"ef",Bgn(AW0),"em",Bgn(A80),"dR",Bgn(A6J)],PG,0,Q,[],0,0,0,0,["Xy",Bgn(AMN),"p",Bgn(AOv)],JS,0,C,[],3,3,0,0,0,RJ,0,C,[JS],0,3,0,0,["d",Bgm(AWR)],Xb,0,V,[],4,0,0,0,["d",Bgm(ALs),"bg",Bgq(AQV)],Li,"InstantiationException",13,Dn,[],0,3,0,0,["d",Bgm(A2Q)],W$,0,V,[],4,0,0,0,["d",Bgm(A7n),"bg",Bgq(A$5)],W7,0,V,[],4,0,0,0,["d",Bgm(ATG),"bg",Bgq(AWi)],W_,0,V,[],4,0,0,0,["d",Bgm(AW1),"bg",Bgq(A1h)],Ps,0,Q,[],0,0,0,0,["T6",Bgn(A$L),"p",Bgn(ASB)],JU,0,C,[],3,3,0,0,0,Sq,0,C,[JU,M7],0,3,0,0,["d",Bgm(AJO),
"pg",Bgm(A6j),"vE",Bgn(A7$),"Kj",Bgn(AZ4),"P6",Bgm(A56),"Ms",Bgm(ATU),"Q0",Bgm(AY$),"Lb",Bgm(AXl),"S6",Bgn(A5G)],Yq,0,CF,[],0,0,0,0,["lj",Bgp(AUg),"e",Bgp(AOD)],X$,0,C,[],4,3,0,0,0,Zz,0,C,[],0,3,0,0,["d",Bgm(ARy)],SD,0,Da,[],0,3,0,0,["kd",Bgn(AO3),"nc",function(b,c,d,e,f,g,h){return AIL(this,b,c,d,e,f,g,h);}],HT,0,C,[Cr],0,3,0,Kk,["Ul",Bgq(Yc),"UW",function(b,c,d,e,f){M4(this,b,c,d,e,f);},"SZ",function(b,c,d,e,f){Om(this,b,c,d,e,f);},"FN",Bgp(APD),"NI",Bgn(AGp),"OI",Bgp(AKs),"v4",Bgm(ASp),"xb",Bgm(A8a),"Kw",
Bgn(AHf),"ih",Bgo(AQG),"JU",Bgn(A7I),"gO",Bgo(AED),"NJ",Bgq(AUe),"Dd",function(b,c,d,e,f){A3W(this,b,c,d,e,f);},"gS",Bgm(AYl),"Au",Bgm(ALr)],Nu,0,EU,[],0,0,0,0,["Vk",Bgo(AO6)],FU,0,BT,[],0,3,0,ATc,["b6",Bgn(X2),"d",Bgm(Jp)],Wi,0,C,[Cz],0,3,0,0,0,AB0,0,Bt,[],0,0,0,0,["d",Bgm(AKP),"e",Bgp(A5f),"ba",Bgn(AUs),"u",Bgm(AJl)],AAH,0,C,[Cz],0,3,0,0,["d",Bgm(A2T),"ms",Bgo(YG),"kp",Bgn(AML),"j6",Bgn(AYk),"gA",Bgo(AQH),"tG",Bgo(AXn),"jJ",Bgn(TT)],TA,0,T,[],0,0,0,0,["d",Bgm(AK9),"U",Bgm(ARh)],Ft,0,CT,[B$],1,3,0,0,["UI",
function(b,c,d,e,f){V1(this,b,c,d,e,f);},"z0",Bgp(AYw),"IR",Bgn(AOz),"wX",Bgp(A9o),"WS",Bgn(Yk),"Cq",Bgm(AWE),"XU",Bgm(HI),"Ra",Bgn(FH),"VJ",Bgm(J4),"UG",Bgm(Jv),"M3",Bgn(AZt),"f5",Bgn(AQ4),"db",Bgm(AFZ),"cl",Bgn(AOQ),"c0",Bgn(AVy)],AB9,0,Ft,[],0,0,0,0,["wg",Bgo(A1t),"Wu",function(b,c,d,e,f,g,h){O7(this,b,c,d,e,f,g,h);},"zn",Bgn(ADg),"Qz",Bgm(AMM),"b_",Bgm(AR5),"v3",Bgm(A$Z),"O0",Bgn(A8i),"K5",Bgo(AI0),"yJ",Bgm(ATW),"sP",Bgm(ANt)],RY,0,E9,[],0,0,0,0,["Wl",Bgn(AKD),"Bg",Bgm(A2d)],LL,0,C,[B3],0,3,0,0,["U2",Bgo(AI6),
"iy",Bgp(A20)],VR,0,C,[],0,3,0,0,["d",Bgm(A8w)],Gs,0,C,[],0,3,0,AKX,["d",Bgm(VN),"AK",Bgn(A49)],M_,0,C,[B3],0,3,0,BeE,["VM",Bgo(AB5)],ABy,0,By,[],0,3,0,0,0,QT,"BufferUnderflowException",11,Bm,[],0,3,0,0,["d",Bgm(A96)],VT,0,Bt,[],0,0,0,0,["HE",Bgn(A6i),"e",Bgp(AXT),"ba",Bgn(AI4),"u",Bgm(AV9)],Ci,0,C,[Hw],1,3,0,0,["d",Bgm(DU),"xZ",Bgo(AU5)],TM,0,C,[B2],1,3,0,0,0,Xh,0,V,[],4,0,0,0,["d",Bgm(A58),"bg",Bgq(AZ1)],MK,0,C,[],32,0,0,BfI,0,Yt,0,C,[],0,3,0,0,["d",Bgm(A6H),"g6",Bgm(ADy),"H6",Bgm(AWe),"PX",Bgn(AVM),"Jo",
Bgm(AF9),"Nk",Bgo(A8m),"Ka",Bgq(AKa),"Ks",Bgq(ASJ),"Cp",function(b,c,d,e,f){return ARu(this,b,c,d,e,f);},"JY",function(b,c,d,e,f,g){return A3n(this,b,c,d,e,f,g);}],I9,0,C,[GT],0,3,0,0,["Bs",Bgp(Z2),"jI",Bgm(AI3),"uL",Bgm(ATE),"up",Bgp(A45),"ih",Bgo(AZL),"gO",Bgo(AWg)],Wf,0,I9,[],0,3,0,0,["R7",Bgo(A6$)],Xn,0,V,[],4,0,0,0,["d",Bgm(AQO),"bg",Bgq(ATw)],Xj,0,V,[],4,0,0,0,["d",Bgm(ARP),"bg",Bgq(AVf)]]);
$rt_metadata([S6,0,T,[],0,0,0,0,["d",Bgm(AJn),"U",Bgm(A7i)],Xi,0,V,[],4,0,0,0,["d",Bgm(AK8),"bg",Bgq(ALM)],KO,0,C,[],3,3,0,0,0,Xl,0,V,[],4,0,0,0,["d",Bgm(AZx),"bg",Bgq(AG1)],ABC,0,C,[B2],1,3,0,0,0,Y1,0,C,[],0,3,0,0,["W6",Bgn(A$h),"g6",Bgm(A8u),"bd",Bgm(A$O),"M2",Bgn(AGK),"L6",Bgp(AXN),"xh",Bgp(A93),"H8",Bgn(AJ_)],Rd,0,T,[],0,0,0,0,["d",Bgm(AF3),"U",Bgm(APk)],Hm,0,C,[HU],1,3,0,0,["d",Bgm(XN)],Zp,0,C,[Hd],0,3,0,0,["mM",Bgo(AZf),"l1",Bgm(APw),"ne",Bgm(AUN),"uA",Bgp(A1M),"uk",Bgm(ASM),"ew",Bgm(ALo),"Ed",Bgm(AFO)],Gn,
0,BT,[],0,3,0,A4W,["b6",Bgn(Y6),"d",Bgm(H4)],Wr,0,Bt,[],0,0,0,0,["d",Bgm(AQT),"e",Bgp(AK3),"ba",Bgn(AT0),"u",Bgm(AWt)],Xr,0,V,[],4,0,0,0,["d",Bgm(AEK),"bg",Bgq(A7r)],Xo,0,V,[],4,0,0,0,["d",Bgm(A9K),"bg",Bgq(ATh)],C$,0,BT,[],0,3,0,Fl,["b6",Bgn(S0),"LG",Bgm(AFW),"JM",Bgm(AQa),"Kb",Bgm(A1j),"M5",Bgp(AHN)],Xk,0,V,[],4,0,0,0,["d",Bgm(AEI),"bg",Bgq(AN0)],Xq,0,V,[],4,0,0,0,["d",Bgm(AWo),"bg",Bgq(AJH)],KX,0,Cy,[],0,0,0,0,["bj",Bgn(ZP),"e",Bgp(AVu),"u",Bgm(AYr),"ba",Bgn(A7k)],Xp,0,V,[],4,0,0,0,["d",Bgm(AI5),"bg",Bgq(AYy)],Ll,
0,C,[],4,3,0,E1,0,NC,0,C,[],3,3,0,0,0,L2,0,C,[],3,3,0,0,0,Vr,0,BJ,[],0,0,0,0,["bj",Bgn(A73),"bH",Bgo(AQk),"u",Bgm(A_g)],U$,0,It,[],0,3,0,0,["R8",Bgo(Qr),"JH",Bgn(AFC),"iq",Bgq(AKn),"hQ",Bgq(A1y),"Iq",Bgp(AYX),"i_",Bgp(AKv),"oJ",Bgo(ASh),"y9",Bgn(A3i),"M$",Bgn(ASm),"lG",Bgn(AEa),"oF",Bgn(A2i)],Gm,0,C,[],4,3,0,0,0,S3,0,C,[B$],0,3,0,0,["d",Bgm(A8z),"JS",Bgn(AD9),"bp",Bgm(AFr)],Rb,"BitmapFont$BitmapFontData",6,C,[],0,3,0,0,["Kk",Bgo(A4r),"PY",Bgo(AGr),"E2",Bgo(AVI),"yj",Bgo(ATB),"CQ",Bgm(A3M),"it",Bgn(AGW),"FO",
function(b,c,d,e,f){AGb(this,b,c,d,e,f);},"KJ",Bgo(ADm),"xD",Bgn(AGH),"jt",Bgn(AHo)],Nx,0,C,[],0,3,0,0,0,Xz,0,T,[],0,0,0,0,["fV",Bgo(A94),"U",Bgm(AMd)],UG,0,C,[],0,0,0,0,["d",Bgm(ADt),"u7",Bgp(ANc),"B6",Bgp(AMs),"Lk",Bgm(A2j),"QX",Bgm(A6a)],ACD,0,HK,[],0,0,0,0,["XD",Bgn(A50),"fd",Bgm(A5k)],Xs,0,T,[],0,0,0,0,["d",Bgm(AFy),"U",Bgm(ATa)],Zw,0,C,[Ij],4,3,0,0,["TP",Bgo(X8),"Rn",Bgm(ABe),"UO",Bgn(ABG),"V$",Bgn(ACn),"BV",Bgn(Gh),"Sa",Bgn(JJ),"Vf",Bgm(Ga),"lC",Bgn(U6),"pc",Bgn(Pa),"ww",Bgm(LS),"pQ",Bgm(MX),"lH",Bgm(Pg),
"U$",Bgo(AC8)],T8,0,BB,[],0,0,0,0,["d",Bgm(A4Z),"e",Bgp(ATA),"u",Bgm(AHs),"Q",Bgn(AXd),"i6",Bgm(A4T),"ba",Bgn(AXa)],ZN,0,Q,[],0,0,0,0,["U8",Bgn(AQz),"p",Bgn(ASe)],O3,0,FN,[],0,3,0,0,["d",Bgm(A0P),"f7",Bgm(AGn),"p$",Bgn(AQy)],UR,0,C,[Hj],0,3,0,0,["LI",Bgn(A1m),"fd",Bgm(A84)],VF,0,C4,[],0,0,0,0,["o9",Bgn(AG2),"p",Bgn(AK0),"u",Bgm(ATq)],Vg,0,T,[],0,0,0,0,["d",Bgm(API),"U",Bgm(AUG)],MF,0,BB,[],0,0,0,0,["TE",Bgo(AVj),"Q",Bgn(AMC),"u",Bgm(AP5),"e",Bgp(ADf),"ca",Bgn(AXb),"ba",Bgn(ARF)],Va,0,T,[],0,0,0,0,["d",Bgm(A4d),
"U",Bgm(A1a)],Ky,0,C,[GT],0,3,0,AIR,["Bs",Bgp(XD),"jI",Bgm(AWs),"uL",Bgm(ARJ),"up",Bgp(AWK),"ih",Bgo(AQ6),"gO",Bgo(AHy)],QP,0,C,[],4,3,0,0,0,Hi,"GlyphLayout$GlyphRun",6,C,[EJ],0,3,0,0,["d",Bgm(A0u),"fW",Bgm(ALt),"b",Bgm(AEn)],Mp,0,Dn,[],0,3,0,0,0,SV,0,B7,[],0,0,0,0,["QS",Bgo(A8g),"ek",Bgn(A$Q),"cx",Bgn(AMc),"hY",Bgo(AMT),"cE",Bgo(AKY)],AA9,0,B7,[],0,0,0,0,["SP",Bgn(AX6),"ek",Bgn(AUp),"cx",Bgn(AHk),"cE",Bgo(A87)],FK,0,C,[B2],3,3,0,0,0,SR,0,C,[FK],0,0,0,0,["yu",Bgq(AJk),"dU",Bgn(AIu),"lE",Bgn(A1w)],SQ,0,B7,[],
0,0,0,0,["R4",function(b,c,d,e,f){ARA(this,b,c,d,e,f);},"ek",Bgn(A_E),"cx",Bgn(A$A),"hY",Bgo(AE6),"cE",Bgo(AS6)],SP,0,C,[FK],0,0,0,0,["QS",Bgo(AVU),"dU",Bgn(A7R),"lE",Bgn(AXO)]]);
$rt_metadata([Lo,0,C,[],32,0,0,Bd_,0,U4,0,C,[Cr],0,3,0,0,["d",Bgm(ADp),"MD",Bgn(A81)],SX,0,C,[FK],0,0,0,0,["yu",Bgq(AI8),"dU",Bgn(AZe),"lE",Bgn(AIl)],Qw,0,Bt,[],0,0,0,0,["b6",Bgn(AK5),"e",Bgp(AWS),"ba",Bgn(AW9),"u",Bgm(A_k)],Fs,0,C,[KT],0,3,0,Lz,["d",Bgm(Vv),"Ph",Bgn(ATQ),"Q1",Bgo(A00),"Qq",Bgo(AKf),"L8",Bgp(AGA),"Ln",Bgn(ALm),"NZ",Bgm(AEk),"jI",Bgm(AGP),"Ml",Bgm(AQ0),"xR",Bgn(AVX),"MU",Bgq(AEB),"Dj",Bgn(AHz),"x7",Bgn(AO7),"um",Bgn(AIz),"hn",Bgn(AXM),"r4",Bgn(AN6),"I0",Bgm(AJw),"KT",Bgq(AYL),"dH",Bgn(AMF),"Hr",
Bgq(A1E),"Oy",function(b,c,d,e,f,g){A1K(this,b,c,d,e,f,g);},"EQ",function(b,c,d,e,f,g,h,i){AW4(this,b,c,d,e,f,g,h,i);},"d2",Bgq(AOZ),"NE",Bgq(A6I),"jp",function(b,c,d,e,f){ALH(this,b,c,d,e,f);},"Ld",Bgp(AHp)],Hc,0,BH,[],0,3,0,BbW,0,SW,0,C,[FK],0,0,0,0,["yu",Bgq(A5B),"dU",Bgn(AQx),"lE",Bgn(AZz)],Jc,0,T,[],0,0,0,0,["d",Bgm(Rr),"U",Bgm(YV)],Pn,0,DY,[],4,0,0,0,["d",Bgm(AOj)],Pp,0,DY,[],4,0,0,0,["d",Bgm(A03),"WL",Bgm(Y7),"tV",Bgm(AL6)],AAF,0,C,[],4,3,0,0,0,KN,0,C,[D_],3,3,0,0,0,NM,0,C,[D_,MP,KN,M5,Lf,Os],3,3,0,0,
0,Kc,0,C,[],3,3,0,0,0,Pj,0,C,[B2,NM,Kc,Hn],1,3,0,0,["WZ",Bgo(AMp),"XM",Bgo(AMU),"UP",Bgn(AEL),"S5",Bgp(AOk),"Se",Bgn(ASu),"VY",Bgm(AF_),"Vm",Bgp(ADu)],YC,0,C,[B3],0,3,0,0,["d",Bgm(ALV),"Ax",Bgm(A4R),"H2",Bgm(ALe),"CT",Bgm(A5P),"D$",Bgn(A_h),"AE",Bgm(AUx)],T9,0,G5,[B2],0,3,0,0,["Rf",Bgo(ARE),"Oa",Bgn(A1R),"ES",Bgm(A1A),"hu",Bgm(AUb),"Na",Bgm(A3L),"P8",Bgm(A1p),"ui",Bgm(A8G),"AM",Bgm(A$m),"L9",Bgm(A9W),"Ns",Bgm(AUZ)],Pf,0,C,[],0,0,0,0,0,Cu,0,C,[B3],0,3,0,CC,["d",Bgm(Tl),"ch",Bgn(A_s),"Ex",Bgn(AFD),"Gw",Bgn(A9X),
"HZ",Bgq(AZ2),"ND",function(b,c,d,e,f,g,h){return A6w(this,b,c,d,e,f,g,h);},"Gn",Bgp(AWF),"JQ",function(b,c,d,e,f,g,h,i,j,k){return ATr(this,b,c,d,e,f,g,h,i,j,k);},"hC",Bgn(ANa),"fx",Bgm(AHJ),"PO",Bgm(A66),"Ky",Bgq(AE2),"L2",Bgq(A3S),"zf",function(b,c,d,e,f,g){return A4s(this,b,c,d,e,f,g);},"IX",Bgp(AF7),"Pj",Bgo(AWp),"QE",Bgo(AIh),"B4",Bgp(AZT),"ux",Bgn(AFh),"LE",Bgp(A2q),"vq",Bgo(AWc),"Mk",Bgn(APU),"MS",Bgm(A5g)],ACY,"NegativeArraySizeException",13,Bm,[],0,3,0,0,["d",Bgm(A5F)],AAi,0,Ee,[],0,0,0,0,["lj",Bgp(AZ3),
"e",Bgp(AEw)],AAB,0,T,[],0,0,0,0,["d",Bgm(AFf),"U",Bgm(AKB)],ZS,0,C,[],0,0,0,0,["Wj",Bgo(AHr),"b",Bgm(AMg)],Gz,"Timer",3,C,[],0,3,0,EH,["d",Bgm(UM),"FX",Bgo(A9n),"Gg",Bgq(A9Q),"G8",Bgm(ASS),"M_",Bgo(ARq),"Ii",Bgn(AOm)],Dv,"NumberFormatException",13,C3,[],0,3,0,0,["d",Bgm(AV7),"bP",Bgn(AL1)],XX,0,C,[Gt,Cz],0,3,0,0,["KB",Bgo(ANB),"bC",Bgm(A1_),"bz",Bgm(AX4)],AAT,0,Jo,[],0,0,0,0,["UE",function(b,c,d,e,f){A8K(this,b,c,d,e,f);}],Wh,0,C,[],0,0,0,0,0,R1,0,Da,[],0,3,0,0,["Ji",Bgp(A53),"nc",function(b,c,d,e,f,g,h){return ASa(this,
b,c,d,e,f,g,h);}],ABd,0,Jw,[],0,3,0,0,["d",Bgm(A2h),"Mp",Bgo(AMP),"Mu",Bgn(AL0),"Ni",Bgn(AKF)],SS,0,T,[],0,0,0,0,["d",Bgm(AMZ),"U",Bgm(APS)],Wm,0,C,[Cz],0,3,0,0,["Ut",Bgn(A6d),"KB",Bgo(ACR),"bZ",Bgm(A1r)],AAN,0,T,[],0,0,0,0,["d",Bgm(ANj),"U",Bgm(AUv)],ZX,"IllegalStateException",13,B4,[],0,3,0,0,["d",Bgm(A7P),"bP",Bgn(A5y)],YK,0,C,[EJ],0,3,0,0,["d",Bgm(A_p),"fW",Bgm(AOU),"dK",Bgq(ALQ),"n6",Bgo(AL8)],Z8,0,C,[],0,3,0,0,["XQ",Bgo(A9f)],OG,0,GB,[],0,3,0,0,["d",Bgm(T0),"Fn",Bgn(A8s),"LT",Bgn(ATV),"DC",Bgn(AMt),"QR",
Bgn(AWa),"AZ",Bgn(AGN)],Jj,0,BB,[],0,0,0,0,["nY",Bgn(AOd),"Q",Bgn(AXq),"e",Bgp(ADr),"cD",Bgp(A5V),"cI",Bgq(AQd),"u",Bgm(A$z),"ca",Bgn(AG8),"ba",Bgn(A55)],Rl,0,Eg,[],0,0,0,0,["yX",Bgq(A5T),"e",Bgp(A7F)],Rm,0,Bt,[],4,0,0,0,["d",Bgm(AHi),"e",Bgp(A2Z),"ba",Bgn(A1Q),"u",Bgm(ANg)],YR,0,C,[KO],0,0,0,0,["XN",Bgn(ASR),"nP",Bgn(A2l),"OK",Bgn(ATp)],DD,0,C,[B3,HQ],0,3,0,H2,["d",Bgm(ZH),"Ve",Bgp(Rt),"I",Bgp(A3a),"M",Bgn(AG_),"fB",Bgn(ARw),"AR",Bgp(ALG),"gl",Bgn(ANq),"JE",Bgp(AQX),"en",Bgn(A7C),"IO",Bgm(A_j),"t_",Bgm(AGw),
"GS",Bgn(AZj),"BZ",Bgn(AIO),"bU",Bgm(A_F),"yy",Bgn(ARS),"iC",Bgn(AYG),"HW",Bgp(A3G),"kM",Bgn(AQL),"qV",Bgn(AV2),"rz",Bgo(AHm),"yo",Bgm(A_z),"i3",Bgo(ANT),"b",Bgm(AFp),"bp",Bgm(A7J),"z",Bgn(AG7),"LV",Bgm(AIT)],GD,0,C,[B3,HQ],0,3,0,AOJ,["d",Bgm(Sb),"T7",Bgo(Tx),"k6",Bgn(AXw),"ix",Bgo(AC7),"wZ",Bgn(AOY)],EY,0,C,[KQ],0,3,0,0,["Rj",Bgq(Oo),"Wv",Bgp(Vi),"Q5",Bgo(G2),"bP",Bgn(ARv),"L5",Bgp(AOB)],GW,0,C,[],0,3,0,0,["d",Bgm(AJU),"mM",Bgo(Uh),"iY",Bgn(A17),"b2",Bgn(AQP),"K",Bgm(AZG),"Hz",Bgm(ANL),"O8",Bgn(AN2),"t0",Bgn(AE5),
"bp",Bgm(AMi),"z",Bgn(A9l),"b",Bgm(A2P)],H1,0,C,[Ko,E2],0,3,0,0,["SS",Bgo(ABp),"fd",Bgm(A2$),"yA",Bgm(ANh),"qC",Bgo(AFx),"u1",Bgm(A5h),"Mq",Bgn(A3q),"OD",Bgn(AKN)],Il,0,BH,[],0,3,0,JD,["d",Bgm(JK),"Uk",Bgn(R9),"QP",Bgm(A4$),"bp",Bgm(ANJ),"pf",Bgm(A77)],Df,0,Hb,[],0,3,0,CQ,["RB",Bgo(Xc),"T2",Bgp(L6),"Wt",function(b,c,d,e,f){Kx(this,b,c,d,e,f);},"Up",Bgp(Mw),"Eh",Bgm(AXr),"uG",Bgn(A3O),"z",Bgn(A6l),"PH",Bgn(AST),"C9",Bgo(AGM),"y8",Bgo(A$B),"bd",Bgm(AEe),"If",Bgn(A2C),"J1",Bgo(A3j)],KI,0,DQ,[],0,3,0,0,["d",Bgm(A6e),
"J9",Bgn(A2B),"Hm",function(b,c,d,e,f,g){return A5e(this,b,c,d,e,f,g);},"Pt",function(b,c,d,e,f,g,h,i,j,k,l,m){return A$b(this,b,c,d,e,f,g,h,i,j,k,l,m);},"Ik",Bgn(ALl)],Xt,0,C,[NC],0,3,0,0,["d",Bgm(AHO),"qC",Bgo(A2Y)]]);
$rt_metadata([Md,"IllegalAccessException",13,Dn,[],0,3,0,0,["d",Bgm(A86)],L7,0,FU,[],0,3,0,AP_,["TQ",Bgn(R$),"b6",Bgn(UB)],AA4,0,E5,[],0,3,0,0,["bj",Bgn(AXW),"f1",Bgm(AZ_),"bd",Bgm(AXU)],P2,0,C,[],4,3,0,0,["Ub",Bgn(AR4),"BA",Bgm(FF),"Ai",Bgn(Te),"Cy",Bgn(ACT)],AB1,0,Fh,[],0,0,0,0,["TS",function(b,c,d,e,f,g){A_i(this,b,c,d,e,f,g);},"vk",Bgn(AIW),"qU",Bgo(A13),"e1",Bgm(AYA)],DB,0,Bx,[],12,3,0,Gl,0,I7,0,C,[],0,3,0,Tq,0,ZJ,0,C,[],0,3,0,0,["d",Bgm(ASd),"mM",Bgo(AAI),"cd",Bgn(A3f),"K",Bgm(ASx),"O$",Bgn(AWM),"CC",
Bgn(AYR)],Tw,0,C,[],4,3,0,0,0,VJ,0,T,[],0,0,0,0,["d",Bgm(AMw),"U",Bgm(A95)],RC,0,Hm,[DN,B3],0,3,0,0,["Bj",Bgn(A0Q),"d",Bgm(AHE),"bj",Bgn(OM),"ms",Bgo(ACp),"W",Bgn(AR9),"V0",Bgn(ZV),"V6",Bgp(KA),"X1",Bgm(K1),"x",Bgo(ANz),"Qr",Bgo(ARM),"wu",Bgp(APl),"Mj",Bgn(A0w),"oU",Bgm(A6C),"IN",Bgn(AM5),"Su",Bgn(SO)],DF,0,Bx,[],12,3,0,H5,0,ZK,0,Bt,[],0,0,0,0,["bj",Bgn(A09),"e",Bgp(AOf),"ba",Bgn(AZ9),"u",Bgm(AD1)],Dp,0,BH,[],0,3,0,B1,["FT",Bgn(JE),"V1",Bgo(Kn),"T_",function(b,c,d,e,f,g,h){Od(this,b,c,d,e,f,g,h);},"US",Bgo(Zq),
"R6",Bgn(ACP),"pf",Bgm(A60),"bp",Bgm(AUi)],ABq,0,C,[],0,3,0,0,["d",Bgm(AO_),"mM",Bgo(Ub),"Al",Bgn(AXP),"GO",Bgn(AES),"xX",Bgp(AQ3),"rH",Bgp(AD_),"oa",Bgn(AYi),"lW",Bgo(AU2),"K",Bgm(AWA),"D9",Bgn(AP2),"t1",Bgn(ANK),"h6",Bgn(AGh)],Bh,0,C,[],0,3,0,Be8,0,NA,0,FT,[],0,3,0,A9t,["Tx",Bgq(Td),"b6",Bgn(AA1)],Jq,0,C,[],0,3,0,Bj,["Ts",Bgo(Xx),"jK",Bgm(ANk),"h5",Bgm(A89),"my",Bgm(A2E),"zo",Bgm(AJC),"t2",Bgm(ASg),"i",Bgm(AIp),"nS",Bgm(AP9)],Qz,0,D6,[],4,0,0,0,["d",Bgm(AZZ)],WT,0,Ci,[],4,0,0,0,["d",Bgm(A$o),"bg",Bgq(AQ$)],LP,
0,Bt,[],4,0,0,0,["bj",Bgn(ABv),"e",Bgp(A6g),"ba",Bgn(AX3),"u",Bgm(A3x)],WQ,0,Ci,[],4,0,0,0,["d",Bgm(AUY),"bg",Bgq(AOr)],WS,0,Ci,[],4,0,0,0,["d",Bgm(ADI),"bg",Bgq(A8J)],MQ,0,Gn,[],0,3,0,AQc,["d",Bgm(ZT),"b6",Bgn(YN)],WO,0,Ci,[],4,0,0,0,["d",Bgm(AR3),"bg",Bgq(A4c)],WP,0,Ci,[],4,0,0,0,["d",Bgm(AFq),"bg",Bgq(AEo)],WM,0,Ci,[],4,0,0,0,["d",Bgm(A01),"bg",Bgq(A6k)],TD,0,C,[L2],4,3,0,0,["fV",Bgo(A$k),"ge",Bgp(YB),"g6",Bgm(A0p),"bd",Bgm(AJW),"gE",Bgn(AEM)],WN,0,Ci,[],4,0,0,0,["d",Bgm(AR_),"bg",Bgq(ASQ)],WK,0,V,[],4,0,
0,0,["d",Bgm(A4I),"bg",Bgq(AFw)],Gj,0,C,[],0,0,0,0,["dT",Bgo(A8Y),"bV",Bgm(A2H),"pN",Bgn(AXJ),"G_",Bgn(AXk),"se",Bgm(AHd),"kZ",Bgm(APb),"tm",Bgm(AFG),"E",Bgm(A61),"jn",Bgm(AYb),"cM",Bgm(AV_),"Hn",Bgm(AIn),"b",Bgm(AIX),"bN",Bgm(A1u),"hy",Bgm(ATe),"Ew",Bgm(AWW),"Fy",Bgm(A6X),"dM",Bgm(AFn)],WL,0,V,[],4,0,0,0,["d",Bgm(AJ9),"bg",Bgq(AHK)],XV,0,T,[],0,0,0,0,["d",Bgm(ATg),"U",Bgm(ASG)],Zf,0,Jc,[],0,0,0,0,["d",Bgm(ASq),"U",Bgm(AWB)],Xw,0,CN,[],1,3,0,0,0,Yp,0,C,[],0,3,0,0,0,U8,0,C,[Nq],0,3,0,0,["Sg",Bgn(A35),"uu",Bgn(A0W),
"KR",Bgn(ATS),"H$",Bgn(AM_),"rE",Bgn(A5H),"sD",Bgo(ALn),"PN",Bgo(AKk),"ED",Bgn(ANY),"v8",Bgq(A$p),"Je",Bgn(AEW),"vA",Bgn(A9$),"kS",Bgn(A0H),"J3",Bgo(AXp),"eh",Bgn(A28),"xa",Bgp(A$9),"Nr",Bgq(A5R),"o5",Bgn(ATZ),"I9",Bgm(A0L),"Ol",Bgo(AZr),"GQ",Bgo(AUn),"kA",function(b,c,d,e,f,g,h,i,j){AJL(this,b,c,d,e,f,g,h,i,j);},"OS",Bgp(A6n),"oK",Bgq(AXY),"xg",Bgo(ALA),"c$",Bgo(AOy),"JV",Bgq(AZQ),"fD",Bgq(AZa),"qp",Bgq(AM0),"Io",Bgn(AIB),"MV",Bgm(AGO),"On",Bgn(A1n),"xG",Bgn(AQl),"O4",Bgq(A6B),"Qw",Bgn(ARD),"i5",Bgm(AZv),"w9",
Bgn(A5Q),"PM",Bgq(AN3),"P$",Bgq(ADQ),"Db",Bgo(AIY),"MF",Bgo(ALW),"qn",Bgp(AJS),"An",Bgn(AYV),"NL",Bgp(A5O),"NU",Bgn(A$N),"AO",Bgo(AGX),"Lm",Bgn(AUw),"QC",Bgo(AVT),"ji",Bgp(AOi),"MQ",Bgo(AV$),"Cu",Bgo(AOO),"OL",Bgp(AL$),"G7",Bgq(AZ7),"F0",Bgq(AX_),"GN",function(b,c,d,e,f){AEd(this,b,c,d,e,f);},"I1",function(b,c,d,e,f){AQS(this,b,c,d,e,f);},"yd",function(b,c,d,e,f){A0T(this,b,c,d,e,f);},"Kc",Bgn(A1V),"Pg",function(b,c,d,e,f,g){A9P(this,b,c,d,e,f,g);}],XW,0,Fr,[],0,0,0,0,["fP",function(b,c,d,e,f,g){AEh(this,b,
c,d,e,f,g);},"vk",Bgn(A4Q),"qU",Bgo(AYp)],QH,0,C,[MD],0,0,0,0,["S1",Bgn(AL_),"Gl",Bgm(AHP),"TI",Bgm(AVl)]]);
function $rt_array(cls,data){this.bx=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["Can\'t enter monitor from another thread synchronously","<java_object>@","Constructor not found for class: ","Security violation occurred while getting constructor for class: \'","\'.","Security violation while getting constructor for class: ","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","String is null or empty","Illegal radix: ",
"<",":",">","JointSet","Replacement preconditions do not hold","Action must be non-null","Bullet","Disposing "," while it still has "," references.","(",",",")","main","\tat ","Caused by: ","Unsupported asset type ","Loading asset : ","Loading script : ","Task failed: ","Android","Desktop","HeadlessDesktop","Applet","WebGL","iOS","CI sequence: ","listener cannot be null.","loadFactor must be > 0 and < 1: ","objects cannot be null.","�","averageCharsPerByte must be positive. Actual value is ","maxCharsPerByte must be positive. Actual value is ",
"newAction must be non-null","CI back reference: ","UCI back reference: ","BIG_ENDIAN","LITTLE_ENDIAN","Pixmap","Custom","<DotAllQuant>","fSet","BehindFSet","range:"," ","^ ","<GroupQuant>","null","false","true","Index out of bounds","New position "," is outside of range [0;","]","New limit ","CLEAR","BLACK","WHITE","LIGHT_GRAY","GRAY","DARK_GRAY","BLUE","NAVY","ROYAL","SLATE","SKY","CYAN","TEAL","GREEN","CHARTREUSE","LIME","FOREST","OLIVE","YELLOW","GOLD","GOLDENROD","ORANGE","BROWN","TAN","FIREBRICK","RED",
"SCARLET","CORAL","SALMON","PINK","MAGENTA","PURPLE","VIOLET","MAROON","","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin",
"Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid",
"Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes",
"MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended",
"CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants",
"ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","FileType \'","\' not supported in Dragome backend","FILL","STROKE","decomposed char:","must be non-negative","Couldn\'t load image \'","\', file does not exist","rgba(","environmentCubemap","AheadFSet","NonCapJointSet","PosLookaheadJointSet","unable to provide a shader for this renderable",
"NegLookaheadJointSet","Already prepared","Call prepare() before calling getPixmap()","This TextureData implementation does not upload data itself","blended","0","<Quant>","Comparison method violates its general contract!","fromIndex(",") > toIndex(","canvas","charsetName is null","Should never been thrown","ErrorLoading: ","\n","i","b","a","Invalid assets description file.","PosBehindJointSet","sequence: ","US-ASCII","-2147483648","UCI range:","GL_EXT_texture_filter_anisotropic","New data must have the same managed status as the old data",
"IGNORE","REPLACE","REPORT","mousedown","mouseup","mousemove","wheel","touchstart","touchmove","touchcancel","touchend","keydown","keypress","keyup","CSS1Compat","NegBehindJointSet","Index ","back reference: ","<DotQuant>","COPY","copy","DESTINATION_ATOP","destination-atop","DESTINATION_IN","destination-in","DESTINATION_OUT","destination-out","DESTINATION_OVER","destination-over","LIGHTER","lighter","SOURCE_ATOP","source-atop","SOURCE_IN","source-in","SOURCE_OUT","source-out","SOURCE_OVER","source-over","XOR",
"xor","\' Not supported in Dragome backend"," does not exist","UTF-8","Error reading file: ","/","\\","vertex shader must not be null","fragment shader must not be null","Fragment shader:\n","Vertex shader\n","An attempted fetch uniform from uncompiled shader \n","No uniform with name \'","\' in shader","Classpath","Internal","External","Absolute","Local","javaClass@","<init>","No buffer allocated!",".","CI ","Capacity is negative: ","The last char in dst "," is outside of array of size ","Length "," must be non-negative",
"Offset ","The last char in src "," is outside of string of size ","Start "," must be before end ","mtl","object cannot be null.","UTF-16","UTF-16BE","UTF-16LE","GL_ARB_framebuffer_object","GL_EXT_framebuffer_object","texture width and height must be square when using mipmapping.","The last short in src ","The last float in src ","<EOL>","UCI ","pointLights","start + count must be <= size: "," + "," <= ","index can\'t be >= size: "," >= ","index can\'t be > size: "," > ","end can\'t be >= size: ","start can\'t be > end: ",
"Array is empty.","additionalCapacity must be >= 0: ","newSize must be >= 0: ","[]",", ","ISO-8859-1","MirroredRepeat","ClampToEdge","Repeat","AtomicFSet","posFSet","Nearest","Linear","MipMap","MipMapNearestNearest","MipMapLinearNearest","MipMapNearestLinear","MipMapLinearLinear","<MultiLine $>","Class cannot be created (missing no-arg constructor): ","Unable to create new instance: ","depthStencil","VertexArray","VertexBufferObject","VertexBufferObjectSubData","VertexBufferObjectWithVAO","key cannot be null.",
"Patter is null","\\Q","\\E","\\\\E\\Q","Can\'t have more than 8191 sprites per batch: ","a_position","a_color","a_texCoord0","attribute vec4 a_position;\nattribute vec4 a_color;\nattribute vec2 a_texCoord0;\nuniform mat4 u_projTrans;\nvarying vec4 v_color;\nvarying vec2 v_texCoords;\n\nvoid main()\n{\n   v_color = a_color;\n   v_color.a = v_color.a * (255.0/254.0);\n   v_texCoords = a_texCoord0;\n   gl_Position =  u_projTrans * a_position;\n}\n","#ifdef GL_ES\n#define LOWP lowp\nprecision mediump float;\n#else\n#define LOWP \n#endif\nvarying LOWP vec4 v_color;\nvarying vec2 v_texCoords;\nuniform sampler2D u_texture;\nvoid main()\n{\n  gl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n}",
"Error compiling shader: ","SpriteBatch.end must be called before begin.","SpriteBatch.begin must be called before end.","SpriteBatch.begin must be called before draw.","u_projTrans","u_texture","Unmappable characters of length ","error","Cannot register an uniform after initialization","Already initialized","Malformed input of length ","None","SourceOver","NearestNeighbour","BiLinear","shininess","alphaTest","texture cannot be null.","offset + length must be <= size: ","com/badlogic/gdx/utils/arial-15.fnt",
"com/badlogic/gdx/utils/arial-15.png","If no regions are specified, the font data must have an images path.","Intensity","LuminanceAlpha","RGB565","RGBA4444","RGB888","RGBA8888","Invalid type specified","diffuseColor","specularColor","ambientColor","emissiveColor","reflectionColor","ambientLightColor","fogColor","The specified font must contain at least one texture page.","UCI sequence: ","CompositeRangeSet:  <nonsurrogate> "," <surrogate> ","FinalSet","<Empty set>","cullface","attributes must be >= 1","Call end() first.",
"Logical","Pixels","Could not remove child from its current parent","Cannot add a parent as a child","data/badlogic.jpg","ground","ID: ","\nFPS: ","\nTotal Boxes: ","\nBullet Version: ","\nInputs: Enter for fullscreen, Space to un/freeze simulation\nHold Left/Right mouse to manipulate camera","Libgdx teaVM Backend + teaVM Bullet Extension by xpenatan","{","}","scripts/bullet.wasm.js","scripts/bullet.wasm.wasm","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/","==","=","Mesh attempting to access memory outside of the index buffer (count: ",
", offset: ",", max: ","capacity must be >= 0: ","The required capacity is too large: ","EOI","The last byte in dst ","The last byte in src ","^","Call end() first","Call begin() first","node","box","IndexBufferObject cannot be used after it has been disposed.","PreviousMatch","NonCapFSet","Either src or dest is null","java.version","1.8","os.name","TeaVM","file.separator","path.separator","line.separator","java.io.tmpdir","java.vm.version","user.home","/tmp","Already loaded.","File is empty.","padding=","Invalid padding.",
"Missing common header.","Invalid common header.","lineHeight=","Missing: lineHeight","base=","Missing: base","pages=","Missing additional page definitions.",".*id=(\\d+)",".*file=\"?([^\"]+)\"?","\\\\","Missing: file","Page IDs must be indices starting at 0: ","Invalid page id: ","kernings ","metrics ","char "," =","kerning ","Error loading font file: ","No glyphs found.","DotAll","decomposed Hangul syllable:",", #","Asset loaded: ","data:",";base64,","WordBoundary","a_normal","Cannot build mesh without position attribute",
"Mesh attributes don\'t match","Mesh can\'t hold enough vertices: "," * "," < ","Mesh can\'t hold enough indices: ","Too many vertices used","Incorrect primitive type","spotLights","Script loaded: ","data must be a ByteBuffer or FloatBuffer","Can\'t invert a singular matrix","The same task may not be scheduled twice.","#iterator() cannot be used nested.","<SOL>","java.runtime.name","Windows","OS X","no OS","Linux",".html","index.html","index-debug.html","assets/","assets.txt","scripts/soundmanager2-jsmin.js",
"directionalLights","com/badlogic/gdx/graphics/g3d/shaders/default.vertex.glsl","com/badlogic/gdx/graphics/g3d/shaders/default.fragment.glsl","u_dirLights[0].color","u_dirLights[0].direction","u_dirLights[1].color","u_pointLights[0].color","u_pointLights[0].position","u_pointLights[0].intensity","u_pointLights[1].color","u_spotLights[0].color","u_spotLights[0].position","u_spotLights[0].intensity","u_spotLights[0].direction","u_spotLights[0].cutoffAngle","u_spotLights[0].exponent","u_spotLights[1].color","u_fogColor",
"u_shadowMapProjViewTrans","u_shadowTexture","u_shadowPCFOffset","Some attributes not implemented yet (","too many bones: ",", max configured: ","u_time","#define positionFlag\n","#define colorFlag\n","#define binormalFlag\n","#define tangentFlag\n","#define normalFlag\n","#define lightingFlag\n","#define ambientCubemapFlag\n","#define numDirectionalLights ","#define numPointLights ","#define numSpotLights ","#define fogFlag\n","#define shadowMapFlag\n","#define environmentCubemapFlag\n","#define boneWeight",
"Flag\n","#define texCoord","#define blendedFlag\n","#define diffuseTextureFlag\n","#define diffuseTextureCoord texCoord0\n","#define specularTextureFlag\n","#define specularTextureCoord texCoord0\n","#define normalTextureFlag\n","#define normalTextureCoord texCoord0\n","#define emissiveTextureFlag\n","#define emissiveTextureCoord texCoord0\n","#define reflectionTextureFlag\n","#define reflectionTextureCoord texCoord0\n","#define ambientTextureFlag\n","#define ambientTextureCoord texCoord0\n","#define diffuseColorFlag\n",
"#define specularColorFlag\n","#define emissiveColorFlag\n","#define reflectionColorFlag\n","#define shininessFlag\n","#define alphaTestFlag\n","#define numBones ","Unknown material attribute: ","Exception occurred in constructor for class: ","Illegal argument(s) supplied to constructor for class: ","Could not instantiate instance of class: ","IDLE","QUEUE_ASSETS_LOADED","INIT_SOUND","APP_CREATE","APP_READY","public","protected","private","abstract","static","final","transient","volatile","synchronized","native",
"strictfp","interface","Image","Audio","Text","t","Binary","Directory","<Unix MultiLine $>","diffuseTexture","specularTexture","bumpTexture","normalTexture","ambientTexture","emissiveTexture","reflectionTexture","u_viewTrans","u_projViewTrans","u_cameraPosition","u_cameraDirection","u_cameraUp","u_cameraNearFar","u_worldTrans","u_viewWorldTrans","u_projViewWorldTrans","u_normalMatrix","u_bones","u_shininess","u_opacity","u_diffuseColor","u_diffuseTexture","u_diffuseUVTransform","u_specularColor","u_specularTexture",
"u_specularUVTransform","u_emissiveColor","u_emissiveTexture","u_emissiveUVTransform","u_reflectionColor","u_reflectionTexture","u_reflectionUVTransform","u_normalTexture","u_normalUVTransform","u_ambientTexture","u_ambientUVTransform","u_alphaTest","u_ambientCubemap","u_dirLights","u_pointLights","u_spotLights","u_environmentCubemap","Illegal arguments","Is","In","glGetFloat not supported by Dragome WebGL backend","Can only cope with FloatBuffer and ShortBuffer at the moment","glGetFloat not supported by WebGL backend",
"1111111111111"]);
BN.prototype.toString=function(){return $rt_ustr(this);};
BN.prototype.valueOf=BN.prototype.toString;C.prototype.toString=function(){return $rt_ustr(PW(this));};
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
~a);};}var CA=Long_add;var D7=Long_sub;var Cf=Long_mul;var E_=Long_div;var AU6=Long_rem;var BP=Long_or;var Br=Long_and;var ARo=Long_xor;var D9=Long_shl;var M$=Long_shr;var CM=Long_shru;var Bo0=Long_compare;var Z=Long_eq;var Dx=Long_ne;var Kt=Long_lt;var Ku=Long_le;var Hr=Long_gt;var Bo1=Long_ge;var Bo2=Long_not;var A37=Long_neg;
function TeaVMThread(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}TeaVMThread.prototype.push=function(){for(var i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};TeaVMThread.prototype.s=TeaVMThread.prototype.push;TeaVMThread.prototype.pop=function(){return this.stack.pop();};TeaVMThread.prototype.l=TeaVMThread.prototype.pop;TeaVMThread.prototype.isResuming=function(){return this.status===2;};TeaVMThread.prototype.isSuspending
=function(){return this.status===1;};TeaVMThread.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};TeaVMThread.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if($rt_currentNativeThread!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:function(result){if(result instanceof Error){throw result;}};this.run();};TeaVMThread.prototype.resume=function(){if($rt_currentNativeThread
!==null){throw new Error("Another thread is running");}this.status=2;this.run();};TeaVMThread.prototype.run=function(){$rt_currentNativeThread=this;var result;try {result=this.runner();}catch(e){result=e;}finally {$rt_currentNativeThread=null;}if(this.suspendCallback!==null){var self=this;var callback=this.suspendCallback;this.suspendCallback=null;callback(function(){self.resume();});}else if(this.status===0){this.completeCallback(result);}};function $rt_suspending(){var thread=$rt_nativeThread();return thread
!=null&&thread.isSuspending();}function $rt_resuming(){var thread=$rt_nativeThread();return thread!=null&&thread.isResuming();}function $rt_suspend(callback){var nativeThread=$rt_nativeThread();if(nativeThread===null){throw new Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);}function $rt_startThread(runner,callback){(new TeaVMThread(runner)).start(callback);}var $rt_currentNativeThread=null;function $rt_nativeThread(){return $rt_currentNativeThread;}function $rt_invalidPointer()
{throw new Error("Invalid recorded state");}main=$rt_mainStarter(Bfv);
main.javaException=$rt_javaException;
(function(){var c;c=XS.prototype;c.fullscreenChanged=c.T0;c=WY.prototype;c.setWorldTransformJS=c.Xg;c=WZ.prototype;c.getWorldTransformJS=c.VU;c=Ua.prototype;c.handleEvent=c.lE;c=Pm.prototype;c.onready=c.T1;c.ontimeout=c.Rk;c=V0.prototype;c.onTimer=c.SQ;c=P0.prototype;c.handleEvent=c.lE;c=QY.prototype;c.getLength=c.Xw;c.get=c.Uj;c=Sq.prototype;c.onAnimationFrame=c.S6;c=SR.prototype;c.handleEvent=c.lE;c=SP.prototype;c.handleEvent=c.lE;c=SX.prototype;c.handleEvent=c.lE;c=SW.prototype;c.handleEvent=c.lE;c=Pj.prototype;c.dispatchEvent
=c.Se;c.addEventListener=c.WZ;c.removeEventListener=c.XM;c.getLength=c.VY;c.get=c.UP;c.addEventListener=c.Vm;c.removeEventListener=c.S5;c=QH.prototype;c.onBulletPhysicsLoaded=c.TI;})();
})();
