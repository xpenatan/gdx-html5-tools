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
function $rt_cls(cls){return Lh(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Mh(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.S.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return Bgt;}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(IJ());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return Ds();}
function $rt_setThread(t){return H6(t);}
function $rt_createException(message){return Qg(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var G=$rt_throw;var B9=$rt_compare;var Bgu=$rt_nullCheck;var F=$rt_cls;var Y=$rt_createArray;var ARc=$rt_isInstance;var A7J=$rt_nativeThread;var Bd_=$rt_suspending;var Bed=$rt_resuming;var Bde=$rt_invalidPointer;var B=$rt_s;var N=$rt_eraseClinit;var Cg=$rt_imul;var R=$rt_wrapException;var Bgv=$rt_checkBounds;var Bgw=$rt_checkUpperBound;var Bgx=$rt_checkLowerBound;var Bgy=$rt_wrapFunction0;var Bgz=$rt_wrapFunction1;var BgA=$rt_wrapFunction2;var BgB=$rt_wrapFunction3;var BgC=$rt_wrapFunction4;var D=$rt_classWithoutFields;var H
=$rt_createArrayFromData;var I5=$rt_createCharArrayFromData;var BgD=$rt_createByteArrayFromData;var BgE=$rt_createShortArrayFromData;var MD=$rt_createIntArrayFromData;var BgF=$rt_createBooleanArrayFromData;var BcO=$rt_createFloatArrayFromData;var BgG=$rt_createDoubleArrayFromData;var AXG=$rt_createLongArrayFromData;var OD=$rt_createBooleanArray;var Cj=$rt_createByteArray;var MX=$rt_createShortArray;var BW=$rt_createCharArray;var Bc=$rt_createIntArray;var Bf2=$rt_createLongArray;var Ca=$rt_createFloatArray;var BgH
=$rt_createDoubleArray;var B9=$rt_compare;var BgI=$rt_castToClass;var BgJ=$rt_castToInterface;var Ry=Long_toNumber;var O=Long_fromInt;var BgK=Long_fromNumber;var Cd=Long_create;var Ba=Long_ZERO;var BgL=Long_hi;var Cp=Long_lo;
function C(){this.bx=null;this.$id$=0;}
function Qq(){var a=new C();J(a);return a;}
function Eq(b){var c;if(b.bx===null)Nq(b);if(b.bx.cC===null)b.bx.cC=Ds();else if(b.bx.cC!==Ds())G(DR(B(0)));c=b.bx;c.cT=c.cT+1|0;}
function Ch(b){var c,d;if(!EM(b)&&b.bx.cC===Ds()){c=b.bx;d=c.cT-1|0;c.cT=d;if(!d)b.bx.cC=null;EM(b);return;}G(AQi());}
function BbU(b){AJC(b,1);}
function AJC(b,c){var d,$p,$z;$p=0;if(Bed()){var $T=A7J();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.bx===null)Nq(b);if(b.bx.cC===null)b.bx.cC=Ds();if(b.bx.cC===Ds()){d=b.bx;d.cT=d.cT+c|0;return;}$p=1;case 1:ALm(b,c);if(Bd_()){break _;}return;default:Bde();}}A7J().s(b,c,d,$p);}
function Nq(b){b.bx=Bbc();}
function ALm(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.nP=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.OQ=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=Bbp(callback);return thread.suspend(function(){try{Bey(b,c,callback);}catch($e){callback.OQ($rt_exception($e));}});}
function Bey(b,c,d){var e,f,g;e=Ds();if(b.bx===null){Nq(b);H6(e);f=b.bx;f.cT=f.cT+c|0;d.nP(null);return;}if(b.bx.cC===null){b.bx.cC=e;H6(e);f=b.bx;f.cT=f.cT+c|0;d.nP(null);return;}g=b.bx;if(g.d0===null)g.d0=ADj();A3Q(g.d0,BcQ(e,b,c,d));}
function Be9(b){ADM(b,1);}
function ADM(b,c){var d;if(!EM(b)&&b.bx.cC===Ds()){d=b.bx;d.cT=d.cT-c|0;if(d.cT>0)return;d.cC=null;if(d.d0!==null&&!H_(d.d0))AMJ(BaI(b));else EM(b);return;}G(AQi());}
function AQE(b){var c,d,e;if(!EM(b)&&b.bx.cC===null){c=b.bx;if(c.d0!==null&&!H_(c.d0)){d=c.d0;e=A5u(d);c.d0=null;e.fe();}return;}}
function EM(a){var b,c;b=a.bx;if(b===null)return 1;a:{b:{if(b.cC===null){if(b.d0!==null){c=b.d0;if(!H_(c))break b;}if(b.yD===null)break a;c=b.yD;if(H_(c))break a;}}return 0;}ACv(a);return 1;}
function ACv(a){a.bx=null;}
function J(a){}
function Ck(a){return Lh(a.constructor);}
function MO(a){return Is(a);}
function AMT(a,b){return a!==b?0:1;}
function PW(a){return (((I()).a(B(1))).a(OC(Is(a)))).b();}
function Is(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function ALU(a){var b,c,d;if(!ARc(a,DM)){b=a;if(b.constructor.$meta.item===null)G(BbG());}c=ADy(a);b=c;d=$rt_nextId();b.$id$=d;return c;}
function A2z(b){AQE(b);}
function ANk(b,c,d,e){var f;H6(b);c.bx.cC=b;f=c.bx;f.cT=f.cT+d|0;e.nP(null);}
function T(){var a=this;C.call(a);a.sb=null;a.rc=null;}
function Bo(a){J(a);}
function A67(a,b){if(!b&&a.sb===null)a.sb=a.T();else if(b&&a.rc===null)a.rc=(a.T()).f9(1);if(b)return a.rc;return a.sb;}
var RS=D(T);
function Bag(){var a=new RS();A7C(a);return a;}
function A7C(a){Bo(a);}
function AYH(a){return ((CS()).cG(32)).cG(9);}
var Qs=D(T);
function BaK(){var a=new Qs();A96(a);return a;}
function A96(a){Bo(a);}
function AMY(a){return ((CS()).bF(0,31)).cG(127);}
var I1=D(0);
function V6(){var a=this;C.call(a);a.qb=null;a.t1=null;a.zn=0;a.z3=0;}
function Be7(a,b){var c=new V6();ARe(c,a,b);return c;}
function ARe(a,b,c){J(a);a.qb=b;a.t1=c;}
function AHY(a){return Cb(a.qb);}
function A$b(a,b){return Bb(a.qb)<b?0:1;}
function AJk(a){return Cb(a.t1);}
function A7V(a,b){return Bb(a.t1)<b?0:1;}
function A0l(a,b){a.zn=b;}
function A_N(a,b){a.z3=b;}
var E2=D(0);
function HJ(){var a=this;C.call(a);a.ij=Ba;a.sM=Ba;a.dB=0;}
function P9(a){J(a);a.dB=(-1);}
function A1k(a){a.ij=Ba;a.dB=(-1);}
function AXj(a){return a.dB==(-1)?0:1;}
var Ws=D();
function A_M(b){var c,d;c=b.L5();d=c.data;if(d.length<=0)return null;return PK(d[0]);}
function ANP(b,c){var d,e,f,$$je;if(c!==null&&c.data.length){a:{b:{try{d=b.Hx(c);e=PK(d);}catch($$e){$$je=R($$e);if($$je instanceof Hf){f=$$je;break a;}else if($$je instanceof I0){f=$$je;break b;}else{throw $$e;}}return e;}G(Ex((((I()).a(B(2))).a(b.u())).b(),f));}G(Ex(((((I()).a(B(3))).a(b.u())).a(B(4))).b(),f));}return A_M(b);}
function AZn(b,c){var d,e,f,$$je;a:{try{d=b.GL(c);e=PK(d);}catch($$e){$$je=R($$e);if($$je instanceof Hf){f=$$je;break a;}else if($$je instanceof I0){f=$$je;G(Ex((((I()).a(B(2))).a(b.u())).b(),f));}else{throw $$e;}}return e;}G(Ex((((I()).a(B(5))).a(b.u())).b(),f));}
var B4=D(0);
var D3=D();
function ACq(a){J(a);}
var B$=D(0);
function D4(){D3.call(this);this.jc=0;}
var BgM=null;var BgN=null;function C1(){C1=N(D4);A73();}
function ABN(a){var b=new D4();Hr(b,a);return b;}
function Hr(a,b){C1();ACq(a);a.jc=b;}
function XA(b,c){C1();if(!(c>=2&&c<=36))c=10;return ((Bga(20)).AY(b,c)).b();}
function ABR(b){C1();return b>>>4^b<<28^b<<8^b>>>24;}
function OC(b){C1();return ADB(b,4);}
function NF(b){C1();return XA(b,10);}
function Dt(b,c){var d,e,f,g,h;C1();if(c>=2&&c<=36){if(b!==null&&!b.bN()){a:{d=0;e=0;switch(b.f(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==b.i())G(Ec());while(e<b.i()){g=e+1|0;h=No(b.f(e));if(h<0)G(DH((((I()).a(B(6))).a(b)).b()));if(h>=c)G(DH((((((I()).a(B(7))).j(c)).a(B(8))).a(b)).b()));f=Cg(c,f)+h|0;if(f<0){if(g==b.i()&&f==(-2147483648)&&d)return (-2147483648);G(DH((((I()).a(B(9))).a(b)).b()));}e=g;}if(d)f= -f|0;return f;}G(DH(B(10)));}G(DH((((I()).a(B(11))).j(c)).b()));}
function BU(b){C1();return Dt(b,10);}
function Bn(b){C1();if(b>=(-128)&&b<=127){V$();return BgN.data[b+128|0];}return ABN(b);}
function V$(){var b;C1();a:{if(BgN===null){BgN=Y(D4,256);b=0;while(true){if(b>=BgN.data.length)break a;BgN.data[b]=ABN(b-128|0);b=b+1|0;}}}}
function AV_(a){return a.jc;}
function ASD(a){return NF(a.jc);}
function AUR(a){return ABR(a.jc);}
function A$J(a,b){if(a===b)return 1;return b instanceof D4&&b.jc==a.jc?1:0;}
function Mw(b){var c,d,e;C1();if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;e=d>>>8;if(!e)e=d;else c=c|8;d=e>>>4;if(!d)d=e;else c=c|4;e=d>>>2;if(!e)e=d;else c=c|2;if(e>>>1)c=c|1;return (32-c|0)-1|0;}
function E3(b){var c,d,e;C1();if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;e=d<<8;if(!e)e=d;else c=c|8;d=e<<4;if(!d)d=e;else c=c|4;e=d<<2;if(!e)e=d;else c=c|2;if(e<<1)c=c|1;return (32-c|0)-1|0;}
function Yk(b,c){var d;C1();d=c&31;return b<<d|b>>>(32-d|0);}
function A73(){BgM=F($rt_intcls());}
var Ez=D();
var BgO=null;var BgP=null;var BgQ=null;var BgR=null;var BgS=null;function Bau(){Bau=N(Ez);A14();}
function A14(){BgO=MD([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);BgP=AXG([O(1),O(10),O(100),O(1000),O(10000),O(100000),O(1000000),O(10000000),O(100000000),O(1000000000),Cd(1410065408, 2),Cd(1215752192, 23),Cd(3567587328, 232),Cd(1316134912, 2328),Cd(276447232, 23283),Cd(2764472320, 232830),Cd(1874919424, 2328306),Cd(1569325056, 23283064),Cd(2808348672, 232830643)]);BgQ=AXG([O(1),O(10),O(100),O(10000),O(100000000),Cd(1874919424, 2328306)]);BgR=BeU();BgS=Beb();}
function Bt(){var a=this;C.call(a);a.k=null;a.cF=0;a.ty=null;a.El=0;}
var BgT=0;function W4(){W4=N(Bt);ATM();}
function Co(a){var b,c;W4();J(a);b=new D4;c=BgT;BgT=c+1|0;Hr(b,c);a.ty=b.b();}
function I_(a,b){var c,d;W4();J(a);c=new D4;d=BgT;BgT=d+1|0;Hr(c,d);a.ty=c.b();a.k=b;}
function F3(a,b,c,d){var e;e=d.J();while(true){if(b>e)return (-1);if(a.e(b,c,d)>=0)break;b=b+1|0;}return b;}
function Gb(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.e(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AYh(a,b){a.El=b;}
function AXn(a){return a.El;}
function ANg(a){return ((((((I()).a(B(12))).a(a.ty)).a(B(13))).a(a.u())).a(B(14))).b();}
function APU(a){return a.F5();}
function AQD(a){return a.k;}
function LL(a,b){a.k=b;}
function A87(a,b){return 1;}
function A$p(a){return null;}
function OP(a){var b;a.cF=1;if(a.k!==null){if(!a.k.cF){b=a.k.h8();if(b!==null){a.k.cF=1;a.k=b;}a.k.ed();}else if(a.k instanceof Fz&&a.k.dn.tl)a.k=a.k.k;}}
function ATM(){BgT=1;}
function BB(){var a=this;Bt.call(a);a.bQ=null;a.dn=null;a.bm=0;}
function BgU(){var a=new BB();CQ(a);return a;}
function Bbl(a,b){var c=new BB();SA(c,a,b);return c;}
function CQ(a){Co(a);}
function SA(a,b,c){Co(a);a.bQ=b;a.dn=c;a.bm=c.ka();}
function AJo(a,b,c,d){var e,f,g,h,i;if(a.bQ===null)return (-1);e=d.jq(a.bm);d.eA(a.bm,b);f=a.bQ.df();g=0;while(true){if(g>=f){d.eA(a.bm,e);return (-1);}h=a.bQ.l(g);i=h.e(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function AOH(a,b){a.dn.Q(b);}
function ALc(a){return B(15);}
function A29(a,b){var c;a:{if(a.bQ!==null){c=a.bQ.ft();while(true){if(!c.bC())break a;if(!(c.bz()).ca(b))continue;else return 1;}}}return 0;}
function APz(a,b){var c,d;a:{if(b.nE(a.bm)>=0){c=b.jq(a.bm);d=a.bm;if(c==b.nE(d)){c=0;break a;}}c=1;}return c;}
function AGh(a){var b,c,d,e;a.cF=1;if(a.dn!==null&&!a.dn.cF)a.dn.ed();a:{if(a.bQ!==null){b=a.bQ.df();c=0;while(true){if(c>=b)break a;d=a.bQ.l(c);e=d.h8();if(e===null)e=d;else{d.cF=1;a.bQ.mC(c);a.bQ.Lf(c,e);}if(!e.cF)e.ed();c=c+1|0;}}}if(a.k!==null)OP(a);}
function Fz(){BB.call(this);this.cX=null;}
function Be6(a,b){var c=new Fz();Qe(c,a,b);return c;}
function Qe(a,b,c){CQ(a);a.cX=b;a.dn=c;a.bm=c.ka();}
function ADN(a,b,c,d){var e,f;e=d.jq(a.bm);d.eA(a.bm,b);f=a.cX.e(b,c,d);if(f>=0)return f;d.eA(a.bm,e);return (-1);}
function AMy(a,b,c,d){var e;e=a.cX.cE(b,c,d);if(e>=0)d.eA(a.bm,e);return e;}
function A7u(a,b,c,d,e){var f;f=a.cX.cI(b,c,d,e);if(f>=0)e.eA(a.bm,f);return f;}
function A20(a,b){return a.cX.ca(b);}
function A5K(a){var b;b=BbS(a);a.k=b;return b;}
function ATg(a){var b;a.cF=1;if(a.dn!==null&&!a.dn.cF)a.dn.ed();if(a.cX!==null&&!a.cX.cF){b=a.cX.h8();if(b!==null){a.cX.cF=1;a.cX=b;}a.cX.ed();}}
function HR(){var a=this;C.call(a);a.L0=null;a.ri=null;a.yF=0.0;a.Aw=0.0;a.sf=null;a.ru=null;a.hO=0;}
function ACm(a,b,c,d,e){J(a);Di();a.sf=BgV;a.ru=BgV;Ri(a,e);a.L0=b;a.ri=e.go();a.yF=c;a.Aw=d;}
function Yz(a,b,c,d){var e;e=Cj(1);e.data[0]=63;ACm(a,b,c,d,e);}
function Ri(a,b){var c;if(b!==null){c=b.data.length;if(c&&c>=a.Aw)return;}G(W(B(16)));}
function K3(a,b){if(b!==null){a.sf=b;a.vi(b);return a;}G(W(B(17)));}
function ATt(a,b){}
function LS(a,b){if(b!==null){a.ru=b;a.qT(b);return a;}G(W(B(17)));}
function A1L(a,b){}
function ID(a,b,c,d){var e,f,g,h,$$je;a:{if(a.hO!=3){if(d)break a;if(a.hO!=2)break a;}G(GX());}a.hO=!d?1:2;while(true){try{e=a.OW(b,c);}catch($$e){$$je=R($$e);if($$je instanceof Bm){f=$$je;G(AYN(f));}else{throw $$e;}}if(e.jK()){if(!d)return e;g=Bb(b);if(g<=0)return e;e=BV(g);}else if(e.h5())break;h=!e.t4()?a.sf:a.ru;b:{Di();if(h!==BgW){if(h===BgX)break b;else return e;}if(Bb(c)<a.ri.data.length)return BgY;Ym(c,a.ri);}b.oP(B8(b)+e.i()|0);}return e;}
function XW(a,b){var c,d,e;if(!Bb(b))return RL(0);OV(a);c=RL(Bb(b)*a.yF|0);while(true){d=ID(a,b,c,0);Bj();if(d===BgZ)break;if(d===BgY){c=JZ(a,c);continue;}if(!d.mz())continue;d.nS();}e=ID(a,b,c,1);if(e.mz())e.nS();while(true){e=JN(a,c);if(e.jK())break;if(!e.h5())continue;c=JZ(a,c);}Jv(c);return c;}
function JZ(a,b){var c,d,e;c=HH(b);d=c.data;d=Oi(c,d.length*2|0);e=Ht(d);e.f4(B8(b));return e;}
function JN(a,b){var c;if(a.hO!=2&&a.hO!=4)G(GX());c=a.LA(b);Bj();if(c===BgZ)a.hO=3;return c;}
function A3J(a,b){Bj();return BgZ;}
function OV(a){a.hO=0;a.uW();return a;}
function AOv(a){}
function Do(){var a=this;HR.call(a);a.Ci=null;a.wf=null;}
function GH(a,b,c,d){Yz(a,b,c,d);a.Ci=BW(512);a.wf=Cj(512);}
function AE3(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.Ci;e=0;f=0;g=a.wf;a:{while(true){if((e+32|0)>f&&Cb(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Bq(Bb(b)+j|0,i.length);b.rl(d,j,f-j|0);e=0;}if(!Cb(c)){if(!Cb(b)&&e>=f){Bj();k=BgZ;}else{Bj();k=BgY;}break a;}i=g.data;l=0;m=Bq(Bb(c),i.length);n=Be7(b,c);k=a.mX(d,e,f,g,l,m,n);e=n.zn;j=n.z3;if(k===null){if(!Cb(b)&&e>=f){Bj();k=BgZ;}else if(!Cb(c)&&e>=f){Bj();k=BgY;}}c.w1(g,0,j);if(k!==null)break;}}b.oP(B8(b)-(f-e|0)|0);return k;}
function Xx(){var a=this;Do.call(a);a.tO=0;a.rv=0;}
function Bdg(a,b,c){var d=new Xx();A52(d,a,b,c);return d;}
function A52(a,b,c,d){GH(a,b,2.0,4.0);a.tO=c;a.rv=d;}
function A6_(a,b,c,d,e,f,g,h){var i,j,k;if(a.tO){if((f+2|0)>g){if(h.Lp())i=null;else{Bj();i=BgY;}return i;}a.tO=0;if(!a.rv){j=e.data;k=f+1|0;j[f]=(-2);f=k+1|0;j[k]=(-1);}else{j=e.data;k=f+1|0;j[f]=(-1);f=k+1|0;j[k]=(-2);}}return !a.rv?Pw(a,b,c,d,e,f,g,h):V9(a,b,c,d,e,f,g,h);}
function V9(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c];if(!BY(l)){if(BG(l)){c=k+(-1)|0;i=BV(1);break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.ef(2))break a;Bj();i=BgY;break a;}j=e.data;m=f+1|0;j[f]=(l&255)<<24>>24;f=m+1|0;j[m]=l>>8<<24>>24;c=k;}else{if(k==d){c=k+(-1)|0;if(h.dO(2))break a;Bj();i=BgZ;break a;}c=k+1|0;n=j[k];if(!BG(n)){c=c+(-2)|0;i=BV(1);break a;}if((f+4|0)>g){c=c+(-2)|0;if(h.ef(4))break a;Bj();i=BgY;break a;}j=e.data;m=f+1|0;j[f]=(l&255)<<24>>24;o=
m+1|0;j[m]=l>>8<<24>>24;m=o+1|0;j[o]=(n&255)<<24>>24;f=m+1|0;j[m]=n>>8<<24>>24;}}}h.el(c);h.dR(f);return i;}
function Pw(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c];if(!BY(l)){if(BG(l)){c=k+(-1)|0;i=BV(1);break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.ef(2))break a;Bj();i=BgY;break a;}j=e.data;m=f+1|0;j[f]=l>>8<<24>>24;f=m+1|0;j[m]=(l&255)<<24>>24;c=k;}else{if(k==d){c=k+(-1)|0;if(h.dO(2))break a;Bj();i=BgZ;break a;}c=k+1|0;n=j[k];if(!BG(n)){c=c+(-2)|0;i=BV(1);break a;}if((f+4|0)>g){c=c+(-2)|0;if(h.ef(4))break a;Bj();i=BgY;break a;}j=e.data;m=f+1|0;j[f]=l>>8<<24>>24;o=m+1
|0;j[m]=(l&255)<<24>>24;m=o+1|0;j[o]=n>>8<<24>>24;f=m+1|0;j[m]=(n&255)<<24>>24;}}}h.el(c);h.dR(f);return i;}
var Cr=D(0);
function BT(){var a=this;C.call(a);a.bY=0;a.mV=0;a.Lr=0;a.K5=null;a.zV=0;}
function B_(a){J(a);}
function AWt(a,b,c){a.mV=c;a.bY=b;}
function AKf(a,b){if(!a.mV)a.bY=b;}
function ADb(a,b){return b instanceof BT&&b.bY==a.bY?1:0;}
function A5i(a){return a.bY;}
function AW2(a){return a.bY;}
function AKU(a){if(a.zV>0){Lp();if(Bg0&&Bg1)Bg2.qE(B(18),((((((I()).a(B(19))).a(a.b())).a(B(20))).j(a.zV)).a(B(21))).b());}if(a.mV){a.Lr=1;a.I3();a.bY=0;}}
function AVH(a){return (((((((I()).a(a.K5)).a(B(22))).j(a.bY)).a(B(23))).Jv(a.mV)).a(B(24))).b();}
var F9=D(BT);
var Bg3=null;function AH9(){AH9=N(F9);AEl();}
function Bfv(a){var b=new F9();XD(b,a);return b;}
function Bg4(){var a=new F9();If(a);return a;}
function XD(a,b){AH9();B_(a);}
function If(a){AH9();B_(a);}
function ASx(a,b){U4(a.bY,b);}
function AEl(){Bg3=Bfv(0);}
function U4(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btCollisionObject);jsObj.setRestitution(c);}
var Og=D(F9);
var Bg5=null;function ARH(){ARH=N(Og);ATe();}
function Bf_(a,b,c,d){var e=new Og();SC(e,a,b,c,d);return e;}
function Bbj(a){var b=new Og();AB5(b,a);return b;}
function SC(a,b,c,d,e){var f,g,h,i;ARH();If(a);Fl();f=Bg6;Gq(e,f);g=c.de();h=d.de();i=f.de();a.dZ(S6(b,g,h,i),1);}
function AKl(a){ACN(a.bY);}
function AB5(a,b){ARH();If(a);}
function ATe(){Bg5=Bbj(0);}
function S6(b,c,d,e){var motionStateJSObj=Bullet.wrapPointer(c,Bullet.btMotionState);var collisionShapeJSObj=Bullet.wrapPointer(d,Bullet.btCollisionShape);var localInertiaJSObj=Bullet.wrapPointer(e,Bullet.btVector3);var jsObj=new Bullet.btRigidBody(b,motionStateJSObj,collisionShapeJSObj,localInertiaJSObj);return Bullet.getPointer(jsObj);}
function ACN(b){var jsObj=Bullet.wrapPointer(b,Bullet.btRigidBody);Bullet.destroy(jsObj);}
var Dj=D(BT);
var Bg7=null;var Bg8=null;var Bg9=null;var Bg$=null;var Bg_=null;var Bha=null;var Bhb=null;var Bhc=null;function H5(){H5=N(Dj);ASE();}
function FE(a){var b=new Dj();AAT(b,a);return b;}
function AAT(a,b){H5();B_(a);a.dZ(!b?0:RW(),b);}
function ARo(a,b){Yq(a.bY,b.data);}
function AS$(a,b){ABn(a.bY,b.data);}
function Yf(b,c){H5();c.Os(b.c);}
function Yc(b,c){H5();b.Ku(c.c);}
function SL(b,c){H5();Bhb.yI(c);Yf(b,Bhb);}
function QL(b,c){H5();Bhb.yI(b);Yc(Bhb,c);}
function ASE(){Bg7=FE(0);Bg8=FE(1);Bg9=FE(1);Bg$=FE(1);Bg_=FE(1);Bha=FE(1);Bhb=FE(0);Bhc=BL();}
function RW(){var jsObj=new Bullet.btTransform();return Bullet.getPointer(jsObj);}
function Yq(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btTransform);jsObj.setFromOpenGLMatrix(c);}
function ABn(b,c){var worldTrans=Bullet.wrapPointer(b,Bullet.btTransform);var origin=worldTrans.getOrigin();var matrix3x3=worldTrans.getBasis();var row0=matrix3x3.getRow(0);var row1=matrix3x3.getRow(1);var row2=matrix3x3.getRow(2);c[0]=row0.x();c[1]=row1.x();c[2]=row2.x();c[3]=0;c[4]=row0.y();c[5]=row1.y();c[6]=row2.y();c[7]=0;c[8]=row0.z();c[9]=row1.z();c[10]=row2.z();c[11]=0;c[12]=origin.x();c[13]=origin.y();c[14]=origin.z();c[15]=1.0;}
function Ey(){var a=this;C.call(a);a.Qs=Ba;a.N4=Ba;a.L$=null;a.Ht=null;a.LN=0;a.QO=null;}
var Bhd=null;var Bhe=null;var Bhf=0;var Bhg=0;var Bhh=null;function LY(){LY=N(Ey);AE5();}
function BeE(a){var b=new Ey();Wu(b,a);return b;}
function Bhi(a,b){var c=new Ey();NT(c,a,b);return c;}
function Wu(a,b){LY();NT(a,null,b);}
function NT(a,b,c){var d;LY();J(a);a.L$=Qq();a.LN=1;a.Ht=c;a.QO=b;d=Bhf;Bhf=d+1|0;a.Qs=O(d);}
function H6(b){LY();if(Bhe!==b)Bhe=b;Bhe.N4=Ea();}
function Ds(){LY();return Bhe;}
function AE5(){Bhd=BeE(B(25));Bhe=Bhd;Bhf=1;Bhg=1;Bhh=BfN();}
var Ja=D(T);
function Bf3(){var a=new Ja();Qb(a);return a;}
function Qb(a){Bo(a);}
function P5(a){return ((CS()).bF(97,122)).bF(65,90);}
var Bw=D();
var Bhj=null;var Bhk=null;var Bhl=null;var Bhm=null;var Bhn=null;var Bho=null;var Bhp=null;var Bhq=null;var Bhr=null;var Bhs=null;var Bht=null;var Bhu=null;var Bhv=null;var Bhw=null;var Bhx=null;var Bhy=null;var Bhz=null;var BhA=null;var BhB=null;var BhC=null;var BhD=null;var BhE=null;var BhF=null;var BhG=null;var BhH=null;var BhI=null;var BhJ=null;var BhK=null;var BhL=null;function BbY(){BbY=N(Bw);A3b();}
function A3b(){Bhj=BcI();Bhk=BdQ();Bhl=A_U();Bhm=BdI();Bhn=Bgg();Bho=BfI();Bhp=BaL();Bhq=BbZ();Bhr=BbI();Bhs=Bd8();Bht=Bct();Bhu=Bb0();Bhv=Ba3();Bhw=BeT();Bhx=BeW();Bhy=BeY();Bhz=Bee();BhA=BaA();BhB=BcA();BhC=BfY();BhD=Bfa();BhE=Ba8();BhF=BbC();BhG=Bbz();BhH=BbV();BhI=Beu();BhJ=Bfx();BhK=Bgh();BhL=Bav();}
var O_=D(Fz);
function BbS(a){var b=new O_();APN(b,a);return b;}
function APN(a,b){Qe(a,b.cX,b.dn);}
function AIE(a,b,c,d){var e,f,g;e=0;f=d.J();a:{while(true){if(b>f){b=e;break a;}g=d.jq(a.bm);d.eA(a.bm,b);e=a.cX.e(b,c,d);if(e>=0)break;d.eA(a.bm,g);b=b+1|0;}}return b;}
function A_x(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=e.jq(a.bm);e.eA(a.bm,c);f=a.cX.e(c,d,e);if(f>=0)break;e.eA(a.bm,g);c=c+(-1)|0;}}return c;}
function AGx(a){return null;}
function Db(){var a=this;C.call(a);a.sl=null;a.kK=null;a.nW=0;a.ot=0;a.wC=null;}
function BhM(){var a=new Db();Q6(a);return a;}
function BhN(a){var b=new Db();Oy(b,a);return b;}
function BhO(a,b){var c=new Db();Ni(c,a,b);return c;}
function BhP(a){var b=new Db();AB1(b,a);return b;}
function Q6(a){a.nW=1;a.ot=1;a.oe();}
function Oy(a,b){a.nW=1;a.ot=1;a.oe();a.sl=b;}
function Ni(a,b,c){a.nW=1;a.ot=1;a.oe();a.sl=b;a.kK=c;}
function AB1(a,b){a.nW=1;a.ot=1;a.oe();a.kK=b;}
function AZ2(a){return a;}
function AP9(a){return a.sl;}
function AJh(a){return a.mS();}
function A1j(a){a.y2(TG());}
function ATK(a,b){var c,d,e,f,g;b.pp((Ck(a)).u());c=a.GB();if(c!==null)b.pp((((I()).a(B(8))).a(c)).b());a:{b.NB();if(a.wC!==null){d=a.wC.data;e=d.length;f=0;while(true){if(f>=e)break a;g=d[f];b.pp(B(26));b.K4(g);f=f+1|0;}}}if(a.kK!==null&&a.kK!==a){b.pp(B(27));a.kK.y2(b);}}
var B5=D(Db);
function BhQ(){var a=new B5();E$(a);return a;}
function BhR(a,b){var c=new B5();JV(c,a,b);return c;}
function BhS(a){var b=new B5();Mk(b,a);return b;}
function E$(a){Q6(a);}
function JV(a,b,c){Ni(a,b,c);}
function Mk(a,b){Oy(a,b);}
var Bm=D(B5);
function BhT(){var a=new Bm();Cx(a);return a;}
function BhU(a,b){var c=new Bm();P1(c,a,b);return c;}
function Qg(a){var b=new Bm();EF(b,a);return b;}
function Cx(a){E$(a);}
function P1(a,b,c){JV(a,b,c);}
function EF(a,b){Mk(a,b);}
var Uz=D(Bm);
function BcX(){var a=new Uz();ANQ(a);return a;}
function ANQ(a){Cx(a);}
var LM=D(0);
function ZO(){var a=this;C.call(a);a.jZ=null;a.li=0;a.On=0;a.kC=0;}
function BdX(a){var b=new ZO();AC6(b,a);return b;}
function AC6(a,b){J(a);a.On=1;a.kC=1;a.jZ=b;}
function A89(a){return 0;}
function AVV(a){var b,c,d;b=a.jZ.hu();c=b.My();d=$rt_str(c.href);return d;}
function AJL(a){return a.li;}
function APw(a){a.li=a.li-1|0;}
function AWL(a){a.li=a.li+1|0;}
function A6n(a,b,c,d,e,f){a:{Bel();switch(BhV.data[BC(d)]){case 1:break;case 2:a.Mh(b,c,e,f);break a;case 3:a.tV(b,c,f);break a;case 4:a.GJ(b,c,f);break a;case 5:f.ct(c,null);break a;default:G(U((((I()).a(B(28))).dD(d)).b()));}a.D8(b,c,f);}}
function AOu(a,b,c,d){var e,f;if(a.kC)(Eh()).gh((((I()).a(B(29))).a(c)).b());e=a.jZ.ul();f=BP(Bcx(a,e,d,c),"handleEvent");e.onreadystatechange=f;a.nJ();Hj(a,e,d);e.open("GET",$rt_ustr(c),!!b);e.setRequestHeader("Content-Type","text/plain; charset=utf-8");e.send();}
function AJa(a,b,c){var d,e;if(a.kC)(Eh()).gh((((I()).a(B(30))).a(b)).b());d=a.jZ.ul();e=BP(Bdc(a,d,c,b),"handleEvent");d.onreadystatechange=e;a.nJ();Hj(a,d,c);d.open("GET",$rt_ustr(b),!!0);d.setRequestHeader("Content-Type","text/plain; charset=utf-8");d.send();}
function AHf(a,b,c,d){a.tV(b,c,BcV(a,d));}
function ASl(a,b,c,d){var e,f;if(a.kC)(Eh()).gh((((I()).a(B(29))).a(c)).b());e=a.jZ.ul();f=BP(BbN(a,e,d,c),"handleEvent");e.onreadystatechange=f;a.nJ();Hj(a,e,d);e.open("GET",$rt_ustr(c),!!b);if(b){f="arraybuffer";e.responseType=f;}e.send();}
function A4z(a,b,c,d,e){a.LL(b,c,d,null,e);}
function AS6(a,b,c,d,e,f){var g;g=0;a.tV(b,c,Bgc(a,f,e,g,d));}
function AGg(b,c){b.addEventListener("load",BP(c,"handleEvent"),!!0);b.addEventListener("error",BP(c,"handleEvent"),!!0);}
function Hj(a,b,c){var d;d=BP(Bdo(a,c),"handleEvent");b.onprogress=d;}
function NQ(b){return b.kC;}
function Qc(b){return b.jZ;}
var B3=D(0);
function A0i(b){return b;}
var VM=D();
function ANp(b){return b;}
function H_(b){return b.length?0:1;}
function A3Q(b,c){var d;d=ANp(c);b.push(d);}
function A5u(b){return b.shift();}
var Hd=D(T);
function BbM(){var a=new Hd();QB(a);return a;}
function QB(a){Bo(a);}
function RU(a){return ((((CS()).bF(97,122)).bF(65,90)).bF(48,57)).cG(95);}
var ABD=D(Hd);
function Bdy(){var a=new ABD();A1u(a);return a;}
function A1u(a){QB(a);}
function ANq(a){var b;b=(RU(a)).f9(1);b.be=1;return b;}
var Ow=D(0);
function Wb(){var a=this;C.call(a);a.ug=null;a.QX=Ba;a.CP=null;}
function Bc5(a){var b=new Wb();ADR(b,a);return b;}
function ADR(a,b){J(a);a.CP=b;b.IX(a);Bg2.OJ(a);a.P0();}
function ASM(a,b){a.CP.nU(b);}
function A9q(a){var b,c,d,e,f,g,h,$$je;EH();b=BhW;Eq(b);a:{b:{try{if(a.ug===Bg2)break b;Ch(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}try{d=E_(CE(),O(1000000));e=O(5000);f=0;g=BhW.h;c:{while(true){if(f>=g)break c;try{e=(BhW.l(f)).Nf(d,e);}catch($$e){$$je=R($$e);if($$je instanceof Db){h=$$je;break;}else{throw $$e;}}f=f+1|0;}G(Jd((((I()).a(B(31))).a((Ck(BhW.l(f))).u())).b(),h));}}catch($$e){$$je=R($$e);c=$$je;break a;}d:{try{if(a.ug===Bg2)break d;Ch(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}try
{a.nU(Cp((AXa(Ba,e))));Ch(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}Ch(b);G(c);}
function AR8(a){var b,c,d,e,f,$$je;b=D6(E_(CE(),O(1000000)),a.QX);EH();c=BhW;Eq(c);a:{try{d=0;e=BhW.h;while(d<e){(BhW.l(d)).Ii(b);d=d+1|0;}Ch(c);break a;}catch($$e){$$je=R($$e);f=$$je;}Ch(c);G(f);}a.ug=Bg2;a.fe();}
function Bx(){var a=this;C.call(a);a.A9=null;a.Ez=0;}
function Cw(a,b,c){J(a);a.A9=b;a.Ez=c;}
function BC(a){return a.Ez;}
function A02(a){return a.A9.b();}
var Dk=D(Bx);
var BhX=null;var BhY=null;var BhZ=null;var Bh0=null;var Bh1=null;var Bh2=null;var Bh3=null;function Vy(){Vy=N(Dk);AYf();}
function GW(a,b){var c=new Dk();Wf(c,a,b);return c;}
function Wf(a,b,c){Vy();Cw(a,b,c);}
function AYf(){BhX=GW(B(32),0);BhY=GW(B(33),1);BhZ=GW(B(34),2);Bh0=GW(B(35),3);Bh1=GW(B(36),4);Bh2=GW(B(37),5);Bh3=H(Dk,[BhX,BhY,BhZ,Bh0,Bh1,Bh2]);}
function BJ(){Bt.call(this);this.bO=0;}
function VR(a,b){I_(a,b);a.bO=1;a.AG(1);}
function C2(a){Co(a);a.bO=1;}
function A$9(a,b,c,d){var e;if((b+a.cg()|0)>d.J()){d.d5=1;return (-1);}e=a.bH(b,c);if(e<0)return (-1);return a.k.e(b+e|0,c,d);}
function A8t(a){return a.bO;}
function AK1(a,b){return 1;}
function Pe(){BJ.call(this);this.jG=null;}
function Bgs(a){var b=new Pe();A0_(b,a);return b;}
function A0_(a,b){C2(a);a.jG=b.b();a.bO=b.i();}
function A7B(a,b,c){var d,e,f,g;d=0;while(true){if(d>=a.jG.i())return a.jG.i();e=a.jG.f(d);f=b+d|0;if(e!=c.f(f)){g=a.jG;if(GF(g.f(d))!=c.f(f))break;}d=d+1|0;}return (-1);}
function A8S(a){return (((I()).a(B(38))).a(a.jG)).b();}
var Fp=D(0);
var Jf=D();
function Bh4(){var a=new Jf();ACS(a);return a;}
function ACS(a){J(a);}
function AV1(a,b){return 0;}
function ARM(a,b,c){return 0;}
function Ir(){var a=this;Jf.call(a);a.dV=null;a.xj=0.0;a.FB=0.0;a.yz=Ba;a.Bi=0.0;a.zQ=Ba;a.fK=0;a.pQ=0;a.FK=Ba;a.AW=0.0;a.AV=0.0;a.xQ=0;a.w$=0;a.mJ=0;a.jC=0;a.kL=0;a.eG=null;a.vq=0.0;a.vr=0.0;a.l7=Ba;a.d8=null;a.fs=null;a.mm=null;a.mn=null;a.h0=null;}
function Bh5(a){var b=new Ir();VA(b,a);return b;}
function Bh6(a,b,c,d,e){var f=new Ir();ABZ(f,a,b,c,d,e);return f;}
function Bh7(a,b,c,d,e,f){var g=new Ir();O3(g,a,b,c,d,e,f);return g;}
function VA(a,b){ABZ(a,20.0,0.4000000059604645,1.100000023841858,2.147483648E9,b);}
function ABZ(a,b,c,d,e,f){O3(a,b,b,c,d,e,f);}
function O3(a,b,c,d,e,f,g){ACS(a);a.eG=Bfj();a.d8=Iu();a.fs=Iu();a.mm=Iu();a.mn=Iu();a.h0=BdD(a);if(g===null)G(W(B(39)));a.xj=b;a.FB=c;a.yz=BgK(d*1.0E9);a.Bi=e;a.zQ=BgK(f*1.0E9);a.dV=g;}
function OQ(a,b,c,d,e){return a.r0(b,c,d,e);}
function AOK(a,b,c,d,e){if(d>1)return 0;if(d){a.fs.ix(b,c);a.fK=0;a.jC=1;a.mm.k7(a.d8);a.mn.k7(a.fs);a.h0.jk();}else{a.d8.ix(b,c);a.l7=Bh8.kS();a.eG.u_(b,c,a.l7);if(Bh8.L9(1)){a.fK=0;a.jC=1;a.mm.k7(a.d8);a.mn.k7(a.fs);a.h0.jk();}else{a.fK=1;a.jC=0;a.mJ=0;a.vq=b;a.vr=c;if(!a.h0.Pw())ACD(a.h0,a.Bi);}}return a.dV.r0(b,c,d,e);}
function VU(a,b,c,d){return a.QU(b,c,d);}
function ADz(a,b,c,d){var e;if(d>1)return 0;if(a.mJ)return 0;if(d)a.fs.ix(b,c);else a.d8.ix(b,c);if(a.jC){if(a.dV===null)return 0;e=a.dV.Q3(a.mm,a.mn,a.d8,a.fs);return !a.dV.Ho(a.mm.w3(a.mn),a.d8.w3(a.fs))&&!e?0:1;}a.eG.B7(b,c,Bh8.kS());if(a.fK&&!HW(a,b,c,a.vq,a.vr)){a.h0.jk();a.fK=0;}if(a.fK)return 0;a.kL=1;return a.dV.Ke(b,c,a.eG.oi,a.eG.oh);}
function AAw(a,b,c,d,e){return a.Oa(b,c,d,e);}
function ADn(a,b,c,d,e){var f,g,h,i,j;if(d>1)return 0;if(a.fK&&!HW(a,b,c,a.vq,a.vr))a.fK=0;f=a.kL;a.kL=0;a.h0.jk();if(a.mJ)return 0;if(a.fK){a:{if(a.xQ==e&&a.w$==d&&Kv(D6(CE(),a.FK),a.yz)){g=a.AW;h=a.AV;if(HW(a,b,c,g,h))break a;}a.pQ=0;}a.pQ=a.pQ+1|0;a.FK=CE();a.AW=b;a.AV=c;a.xQ=e;a.w$=d;a.l7=Ba;return a.dV.Oy(b,c,a.pQ,e);}if(a.jC){a.jC=0;a.dV.GZ();a.kL=1;if(d)a.eG.u_(a.d8.eW,a.d8.eV,Bh8.kS());else a.eG.u_(a.fs.eW,a.fs.eV,Bh8.kS());return 0;}i=0;if(f&&!a.kL)i=a.dV.G3(b,c,d,e);j=Bh8.kS();if(Kv(D6(j,a.l7),a.zQ))
{a.eG.B7(b,c,j);i=!a.dV.QM(a.eG.Lq(),a.eG.Q1(),e)&&!i?0:1;}a.l7=Ba;return i;}
function HW(a,b,c,d,e){return CH(b-d)<a.xj&&CH(c-e)<a.FB?1:0;}
var FO=D(0);
var D7=D(Db);
function Bh9(a,b){var c=new D7();SU(c,a,b);return c;}
function Bh$(a){var b=new D7();XO(b,a);return b;}
function Bh_(a){var b=new D7();AAl(b,a);return b;}
function SU(a,b,c){Ni(a,b,c);}
function XO(a,b){Oy(a,b);}
function AAl(a,b){AB1(a,b);}
var FS=D(D7);
function Bia(a){var b=new FS();OX(b,a);return b;}
function OX(a,b){XO(a,b);}
function RH(){var a=this;C.call(a);a.ex=0;a.fp=null;a.pt=0;a.Fw=0.0;a.qy=0;a.qY=0;a.hN=0;}
function BfV(){var a=new RH();AHy(a);return a;}
function Bib(a,b){var c=new RH();XT(c,a,b);return c;}
function AHy(a){XT(a,51,0.800000011920929);}
function XT(a,b,c){var d;J(a);if(c>0.0&&c<1.0){a.Fw=c;d=G3(b,c);a.qy=d*c|0;a.hN=d-1|0;a.qY=CW(O(a.hN));a.fp=Bc(d);return;}G(W((((I()).a(B(40))).cD(c)).b()));}
function ARV(a,b){return Cp(CN(Cf(O(b),Cd(2135587861, 2654435769)),a.qY));}
function MW(a,b){var c,d,e;c=a.fp;d=a.e8(b);while(true){e=c.data[d];if(!e)return  -(d+1|0)|0;if(e==b)break;d=(d+1|0)&a.hN;}return d;}
function AYC(a,b){var c,d;if(!b){if(a.pt)return 0;a.pt=1;a.ex=a.ex+1|0;return 1;}c=MW(a,b);if(c>=0)return 0;d= -(c+1|0)|0;a.fp.data[d]=b;d=a.ex+1|0;a.ex=d;if(d>=a.qy)XH(a,a.fp.data.length<<1);return 1;}
function X7(a,b){var c,d,e;c=a.fp;d=a.e8(b);while(true){e=c.data;if(!e[d])break;d=(d+1|0)&a.hN;}e[d]=b;}
function AR7(a,b){var c,d,e,f,g,h,i;if(!b){if(!a.pt)return 0;a.pt=0;a.ex=a.ex-1|0;return 1;}c=MW(a,b);if(c<0)return 0;d=a.fp;e=a.hN;f=(c+1|0)&e;while(true){g=d.data;h=g[f];if(!h)break;i=a.e8(h);if(((f-i|0)&e)>((c-i|0)&e)){g[c]=h;c=f;}f=(f+1|0)&e;}g[c]=0;a.ex=a.ex-1|0;return 1;}
function XH(a,b){var c,d,e,f;a:{c=a.fp.data.length;a.qy=b*a.Fw|0;a.hN=b-1|0;a.qY=CW(O(a.hN));d=a.fp;a.fp=Bc(b);if(a.ex>0){e=0;while(true){if(e>=c)break a;f=d.data[e];if(f)X7(a,f);e=e+1|0;}}}}
var Ej=D(Bm);
function C$(){var a=new Ej();PY(a);return a;}
function Bg(a){var b=new Ej();M7(b,a);return b;}
function PY(a){Cx(a);}
function M7(a,b){EF(a,b);}
var ACw=D(Ej);
function Kj(){var a=new ACw();ARd(a);return a;}
function ARd(a){PY(a);}
function Mp(){var a=this;Bm.call(a);a.K2=null;a.P9=null;}
function BbF(a,b,c){var d=new Mp();AZX(d,a,b,c);return d;}
function AZX(a,b,c,d){EF(a,b);a.K2=c;a.P9=d;}
var KF=D();
var Bic=null;function M0(){M0=N(KF);A4T();}
function T4(b,c){var d;M0();d=Bic.W(b);if(d===null){d=Bge(b,4,c);Bic.x(b,d);}return d;}
function Go(b){M0();return T4(b,100);}
function Tp(b){M0();return (Go(b)).eT();}
function Sq(b,c){var d,e,f,g;M0();if(b===null)G(W(B(41)));d=null;e=0;f=b.h;while(e<f){a:{g=b.l(e);if(g!==null){if(d===null){d=Bic.W(Ck(g));if(d===null)break a;}d.jr(g);if(!c)d=null;}}e=e+1|0;}}
function A4T(){Bic=DG();}
function Jy(){var a=this;C.call(a);a.MS=null;a.Az=0.0;a.H7=0.0;a.hK=null;a.jw=null;a.n5=null;a.eB=0;}
function U0(a,b,c,d){J(a);a.hK=B(42);Di();a.jw=BgV;a.n5=BgV;if(c<=0.0)G(W((((I()).a(B(43))).cD(c)).b()));if(d>0.0){a.MS=b;a.Az=c;a.H7=d;return;}G(W((((I()).a(B(44))).cD(d)).b()));}
function Od(a,b){if(b!==null){a.jw=b;a.vi(b);return a;}G(W(B(45)));}
function A9d(a,b){}
function Lf(a,b){if(b!==null){a.n5=b;a.qT(b);return a;}G(W(B(45)));}
function A1e(a,b){}
function IX(a,b,c,d){var e,f,g,$$je;if(!(a.eB==2&&!d)&&a.eB!=3){a.eB=d?2:1;while(true){try{e=a.F_(b,c);}catch($$e){$$je=R($$e);if($$je instanceof Bm){f=$$je;G(AYN(f));}else{throw $$e;}}if(e.h5())return e;if(e.jK()){if(d&&Cb(b)){g=a.jw;Di();if(g===BgV)return BV(Bb(b));if(Bb(c)<=a.hK.i())return BgY;b.f4(B8(b)+Bb(b)|0);if(a.jw===BgW)IV(c,a.hK);}return e;}if(e.zp()){g=a.jw;Di();if(g===BgV)return e;if(a.jw===BgW){if(Bb(c)<a.hK.i())return BgY;IV(c,a.hK);}b.f4(B8(b)+e.i()|0);}else if(e.t4()){g=a.n5;Di();if(g===BgV)break;if
(a.n5===BgW){if(Bb(c)<a.hK.i())return BgY;IV(c,a.hK);}b.f4(B8(b)+e.i()|0);}}return e;}G(GX());}
function KW(a,b){if(a.eB!=3&&a.eB!=2)G(GX());a.eB=3;return a.Hf(b);}
function ACd(a){a.eB=0;a.uW();return a;}
function WW(a,b){var c,d,e;if(a.eB&&a.eB!=3)G(GX());if(!Bb(b))return UR(0);if(a.eB)ACd(a);c=UR(Bf(8,Bb(b)*a.Az|0));while(true){d=IX(a,b,c,0);if(d.jK())break;if(d.h5())c=Nt(a,c);if(!d.mz())continue;d.nS();}e=IX(a,b,c,1);if(e.mz())e.nS();while(true){e=KW(a,c);if(e.jK())break;c=Nt(a,c);}K_(c);return c;}
function Nt(a,b){var c,d,e;c=NL(b);d=c.data;d=JY(c,Bf(8,d.length*2|0));e=Lb(d);e.oP(B8(b));return e;}
function ANr(a,b){Bj();return BgZ;}
function AZq(a){}
var KH=D();
var Bid=null;function Bc4(){Bc4=N(KH);AQn();}
function L1(b){var $$je;Bc4();a:{if(b!==null)try{b.fP();break a;}catch($$e){$$je=R($$e);if($$je instanceof Db){}else{throw $$e;}}}}
function AQn(){Bid=Cj(0);}
function FM(){var a=this;BB.call(a);a.vS=0;a.je=0;}
function Bgi(a,b){var c=new FM();Kh(c,a,b);return c;}
function Kh(a,b,c){CQ(a);a.vS=b;a.je=c;}
function AEo(a,b,c,d){var e,f,g,h;e=a.j9(d);if(e!==null&&(b+e.i()|0)<=d.J()){f=0;while(true){if(f>=e.i()){d.by(a.je,e.i());return a.k.e(b+e.i()|0,c,d);}g=e.f(f);h=b+f|0;if(g!=c.f(h)&&GF(e.f(f))!=c.f(h))break;f=f+1|0;}return (-1);}return (-1);}
function A6x(a,b){a.k=b;}
function AGN(a,b){var c;c=b.OL(a.vS);return c;}
function AVD(a){return (((I()).a(B(46))).j(a.bm)).b();}
function APQ(a,b){var c;c=!b.ev(a.je)?0:1;b.by(a.je,(-1));return c;}
function YR(){FM.call(this);this.Gq=0;}
function Ba0(a,b){var c=new YR();AIR(c,a,b);return c;}
function AIR(a,b,c){Kh(a,b,c);}
function AMs(a,b,c,d){var e,f,g,h;e=a.j9(d);if(e!==null&&(b+e.i()|0)<=d.J()){f=0;while(true){if(f>=e.i()){d.by(a.je,e.i());return a.k.e(b+e.i()|0,c,d);}g=Dq(DB(e.f(f)));h=b+f|0;h=DB(c.f(h));if(g!=Dq(h))break;f=f+1|0;}return (-1);}return (-1);}
function AXd(a){return (((I()).a(B(47))).j(a.Gq)).b();}
var LZ=D(0);
function I3(){C.call(this);this.Jn=null;}
var Bie=null;var Bif=null;function Ev(){Ev=N(I3);A_k();}
function AHT(a){var b=new I3();Vq(b,a);return b;}
function Vq(a,b){Ev();J(a);a.Jn=b;}
function EV(){Ev();return Bie;}
function A_k(){Bie=AHT(B(48));Bif=AHT(B(49));}
var EL=D(Bx);
var Big=null;var Bih=null;var Bii=null;function O6(){O6=N(EL);AX5();}
function A54(a,b){var c=new EL();T3(c,a,b);return c;}
function T3(a,b,c){O6();Cw(a,b,c);}
function AX5(){Big=A54(B(50),0);Bih=A54(B(51),1);Bii=H(EL,[Big,Bih]);}
function Y6(){var a=this;T.call(a);a.u3=0;a.sX=0;a.B2=0;}
function Bz(a,b){var c=new Y6();AGy(c,a,b);return c;}
function Bbq(a,b,c){var d=new Y6();AS2(d,a,b,c);return d;}
function AGy(a,b,c){Bo(a);a.sX=c;a.u3=b;}
function AS2(a,b,c,d){Bo(a);a.B2=d;a.sX=c;a.u3=b;}
function AZ_(a){var b;b=BcU(a.u3);if(a.B2)b.bG.n4(0,2048);b.be=a.sX;return b;}
var L0=D(0);
var Gi=D(0);
var NJ=D(0);
var DS=D();
function G_(a){J(a);}
function ADW(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.vZ(f[c]);e=e+1|0;c=g;}}
var Ln=D(DS);
var Bij=null;function ATo(){ATo=N(Ln);APv();}
function Bb4(){var a=new Ln();ACl(a);return a;}
function ACl(a){ATo();G_(a);}
function A5d(a,b){A7$(b);}
function APv(){Bij=Bb4();}
function Dd(){Bt.call(this);this.Y=null;}
function FW(a,b,c,d){I_(a,c);a.Y=b;a.AG(d);}
function A_h(a){return a.Y;}
function AQc(a,b){return !a.Y.ca(b)&&!a.k.ca(b)?0:1;}
function A9l(a,b){return 1;}
function AM2(a){var b;a.cF=1;if(a.k!==null&&!a.k.cF){b=a.k.h8();if(b!==null){a.k.cF=1;a.k=b;}a.k.ed();}if(a.Y!==null){if(!a.Y.cF){b=a.Y.h8();if(b!==null){a.Y.cF=1;a.Y=b;}a.Y.ed();}else if(a.Y instanceof Fz&&a.Y.dn.tl)a.Y=a.Y.k;}}
var RA=D(Dd);
function BaU(a,b,c){var d=new RA();AEA(d,a,b,c);return d;}
function AEA(a,b,c,d){FW(a,b,c,d);}
function A_d(a,b,c,d){var e;e=d.J();if(e>b)return a.k.cI(b,e,c,d);return a.k.e(b,c,d);}
function AQ2(a,b,c,d){var e;e=d.J();if(a.k.cI(b,e,c,d)>=0)return b;return (-1);}
function A6g(a){return B(52);}
var IL=D(0);
function SY(){C.call(this);this.Kr=null;}
function BeM(a){var b=new SY();A43(b,a);return b;}
function A43(a,b){a.Kr=b;J(a);}
function AUV(a){(CD()).eu();}
function AF0(a){a.qn();}
function Cy(){var a=this;Bt.call(a);a.tl=0;a.lB=0;}
var Bik=null;function JF(){JF=N(Cy);AZK();}
function Bfw(a){var b=new Cy();Et(b,a);return b;}
function Et(a,b){JF();Co(a);a.lB=b;}
function AEW(a,b,c,d){var e,f;e=d.nE(a.lB);d.u2(a.lB,b);f=a.k.e(b,c,d);if(f<0)d.u2(a.lB,e);return f;}
function A3N(a){return a.lB;}
function AJ1(a){return B(53);}
function AFw(a,b){return 0;}
function AZK(){Bik=Bam();}
var Kt=D(Cy);
function Bil(a){var b=new Kt();AB4(b,a);return b;}
function AB4(a,b){Et(a,b);}
function AFI(a,b,c,d){var e,f;e=a.ka();f=d.ev(e);if(f!=b)b=(-1);return b;}
function A8Y(a){return B(54);}
var MB=D(0);
function OU(){var a=this;BB.call(a);a.rb=null;a.AI=0;}
function Bdd(a){var b=new OU();ARJ(b,a);return b;}
function ARJ(a,b){CQ(a);a.rb=b.mh();a.AI=b.bD;}
function AZ0(a,b){a.k=b;}
function AKi(a,b,c,d){var e,f,g,h,i,j,k;e=d.dI();f=d.J();g=b+1|0;h=B9(g,f);if(h>0){d.d5=1;return (-1);}i=c.f(b);if(!a.rb.p(i))return (-1);if(BY(i)){if(h<0){j=c.f(g);if(BG(j))return (-1);}}else if(BG(i)&&b>e){k=c.f(b-1|0);if(BY(k))return (-1);}return a.k.e(g,c,d);}
function A5V(a){return ((((I()).a(B(55))).a(!a.AI?B(56):B(57))).a(a.rb.b())).b();}
var CI=D(Dd);
function BdN(a,b,c){var d=new CI();Fd(d,a,b,c);return d;}
function Fd(a,b,c,d){FW(a,b,c,d);}
function AVh(a,b,c,d){var e;if(!a.Y.ba(d))return a.k.e(b,c,d);e=a.Y.e(b,c,d);if(e>=0)return e;return a.k.e(b,c,d);}
function A1J(a){return B(58);}
var Rz=D(CI);
function Bd9(a,b,c){var d=new Rz();AXE(d,a,b,c);return d;}
function AXE(a,b,c,d){Fd(a,b,c,d);}
function ATw(a,b,c,d){var e;if(!a.Y.ba(d))return a.k.e(b,c,d);e=a.k.e(b,c,d);if(e>=0)return e;return a.Y.e(b,c,d);}
var Kp=D(0);
var AAq=D(Do);
function Bek(a){var b=new AAq();ATa(b,a);return b;}
function ATa(a,b){GH(a,b,1.0,1.0);}
function AJz(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(BY(l)){if(j>=d){if(h.dO(2)){j=j+(-1)|0;break a;}Bj();i=BgZ;break a;}m=k[j];if(!BG(m)){i=BV(1);break a;}j=j+(-1)|0;i=F$(2);break a;}if(BG(l))i=BV(1);if(l>=128){i=F$(1);j=j+(-1)|0;break a;}k=e.data;n=f+1|0;k[f]=l<<24>>24;c=j;f=n;}j=c;}h.el(j);h.dR(f);return i;}
var Dc=D();
var Bg2=null;var Bim=null;var Bin=null;var Bh8=null;var Bio=null;var Bip=null;var Biq=null;var Bir=null;function BH(){var a=this;C.call(a);a.dc=Ba;a.DG=0;}
var Bis=null;function NK(){NK=N(BH);AXD();}
function QT(b){var c;NK();c=0;while(c<Bis.h){if(!(Bis.l(c)).PQ(b))return D8(O(1),c);c=c+1|0;}return Ba;}
function PV(b){var c;NK();c=(-1);a:{while(Dw(b,Ba)){c=c+1|0;if(c>=63)break a;if(Dw(Br(M_(b,c),O(1)),Ba))break a;}}return c>=0&&c<Bis.h?Bis.l(c):null;}
function BR(b){var c;NK();c=QT(b);if(Hq(c,Ba))return c;Bis.F(b);return D8(O(1),Bis.h-1|0);}
function Fb(a,b){NK();J(a);a.dc=b;a.DG=Xh(b);}
function AWy(a,b){return b.bp()!=a.bp()?0:1;}
function AUv(a,b){var c;if(b===null)return 0;if(b===a)return 1;if(!(b instanceof BH))return 0;c=b;if(Z(a.dc,c.dc))return a.zK(c);return 0;}
function ARI(a){return PV(a.dc);}
function F2(a){return 7489*a.DG|0;}
function AXD(){Bis=Bp();}
var Dn=D(B5);
function Bit(){var a=new Dn();Jt(a);return a;}
function Jt(a){E$(a);}
var Iv=D(0);
var H7=D();
function Biu(){var a=new H7();QN(a);return a;}
function QN(a){J(a);}
function AVq(a,b){}
var KQ=D(0);
function FA(){var a=this;H7.call(a);a.ns=null;a.M2=null;a.r5=0;a.CH=0;a.jM=null;a.sx=null;}
function Biv(a,b,c,d,e,f){var g=new FA();AAF(g,a,b,c,d,e,f);return g;}
function AAF(a,b,c,d,e,f,g){QN(a);a.ns=b;a.M2=c;a.r5=d;a.CH=e;a.jM=f;a.sx=g;}
function AUm(a){return a.ns;}
function AOO(a){return AHU(a.r5,a.CH);}
function AJG(a){return a.jM.go();}
function AER(a){var b,c,d,e;b=I();b.a(ABy(a.sq()));if(b.i()>0)b.U(32);(b.a((a.ns.u()).b())).U(40);c=a.vz();d=0;while(true){e=c.data;if(d>=e.length)break;if(d>0)b.U(44);b.a(e[d].u());d=d+1|0;}return (b.U(41)).b();}
function A72(a,b){var c,d,e,f,g,h,i;if(a.r5&1)G(Bgb());if(a.sx===null)G(BbB());c=b.data;d=c.length;if(d!=a.jM.data.length)G(CL());e=0;while(true){if(e>=d){f=b.data;g=new (a.ns.g_);a.sx.call(g,f);return g;}if(!a.jM.data[e].hf()&&c[e]!==null){h=a.jM.data[e];i=c[e];if(!h.v0(i))G(CL());}if(a.jM.data[e].hf()&&c[e]===null)break;e=e+1|0;}G(CL());}
var AAg=D(D7);
function AYN(a){var b=new AAg();AM$(b,a);return b;}
function AM$(a,b){AAl(a,b);}
var Mm=D(0);
function XU(){C.call(this);this.HC=null;}
function Bgd(a){var b=new XU();ALz(b,a);return b;}
function ALz(a,b){a.HC=b;J(a);}
function AP8(a){}
function AOw(a){a.Il();}
var XR=D(CI);
function BeO(a,b,c){var d=new XR();A2k(d,a,b,c);return d;}
function A2k(a,b,c,d){Fd(a,b,c,d);JF();b.Q(Bik);}
function A4h(a,b,c,d){var e,f;e=a.Y.e(b,c,d);if(e<0)return (-1);if(e>b){while(true){f=a.Y.e(e,c,d);if(f<=e)break;e=f;}b=e;}return a.k.e(b,c,d);}
var By=D();
var Biw=null;var Bix=null;var Biy=null;var Biz=null;var BiA=null;var BiB=null;var BiC=null;var BiD=null;var BiE=null;var BiF=null;var BiG=null;var BiH=null;var BiI=null;var BiJ=null;var BiK=null;var BiL=null;var BiM=null;var BiN=null;var BiO=null;var BiP=null;var BiQ=null;var BiR=null;var BiS=null;var BiT=null;var BiU=null;function J9(){J9=N(By);AVa();}
function Dy(){J9();return BiT.eT();}
function UT(){J9();BiT.eo();BiU.eo();}
function AVa(){Biw=D2();Bix=D2();Biy=D2();Biz=D2();BiA=D2();BiB=S();BiC=S();BiD=S();BiE=S();BiF=S();BiG=S();BiH=S();BiI=S();BiJ=CM();BiK=CM();BiL=CM();BiM=CM();BiN=CM();BiO=CM();BiP=CM();BiQ=CM();BiR=CM();BiS=BL();BiT=Ba6();BiU=Bfe();}
function ES(){var a=this;C.call(a);a.B=null;a.bq=0;}
function BiV(){var a=new ES();J7(a);return a;}
function Bga(a){var b=new ES();JT(b,a);return b;}
function J7(a){JT(a,16);}
function JT(a,b){J(a);a.B=BW(b);}
function Y4(a,b){return a.wV(a.bq,b);}
function Lk(a,b){return a.k5(a.bq,b);}
function NX(a,b,c){var d,e,f;if(b>=0&&b<=a.bq){if(c===null)c=B(59);else if(c.bN())return a;a.gY(a.bq+c.i()|0);d=a.bq-1|0;while(d>=b){a.B.data[d+c.i()|0]=a.B.data[d];d=d+(-1)|0;}a.bq=a.bq+c.i()|0;d=0;while(d<c.i()){e=a.B.data;f=b+1|0;e[b]=c.f(d);d=d+1|0;b=f;}return a;}G(Kj());}
function PH(a,b){return a.AY(b,10);}
function AVY(a,b,c){return a.LJ(a.bq,b,c);}
function A1M(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(c<0){e=0;c= -c|0;}a:{if(c<d){if(e)Cn(a,b,b+1|0);else{Cn(a,b,b+2|0);f=a.B.data;g=b+1|0;f[b]=45;b=g;}a.B.data[b]=FQ(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Cg(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;Cn(a,b,b+i|0);if(e)l=b;else{f=a.B.data;l=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.B.data;g=l+1|0;f[l]=FQ(c/k|0,d);c=c%k|0;k=k/d|0;l=g;}}}return a;}
function ACg(a,b){return a.DX(a.bq,b);}
function RN(a,b,c){return a.M3(b,c,10);}
function AMZ(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(Ku(c,Ba)){e=0;c=A4b(c);}a:{f=O(d);if(Ku(c,f)){if(e)Cn(a,b,b+1|0);else{Cn(a,b,b+2|0);g=a.B.data;h=b+1|0;g[b]=45;b=h;}a.B.data[b]=FQ(Cp(c),d);}else{i=1;j=O(1);while(true){k=Cf(j,f);if(Kv(k,j))break;if(Hq(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;Cn(a,b,b+i|0);if(e)l=b;else{g=a.B.data;l=b+1|0;g[b]=45;}while(true){if(Kv(j,Ba))break a;g=a.B.data;h=l+1|0;g[l]=FQ(Cp(E_(c,j)),d);c=AU$(c,j);j=E_(j,f);l=h;}}}return a;}
function TM(a,b){return a.CV(a.bq,b);}
function Z5(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=B9(c,0.0);if(!d){Cn(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=48;e=a.B.data;f=d+1|0;e[d]=46;a.B.data[f]=48;return a;}if(!d){Cn(a,b,b+4|0);e=a.B.data;d=b+1|0;e[b]=45;e=a.B.data;f=d+1|0;e[d]=48;e=a.B.data;d=f+1|0;e[f]=46;a.B.data[d]=48;return a;}if(isNaN(c)?1:0){Cn(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=78;e=a.B.data;f=d+1|0;e[d]=97;a.B.data[f]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Cn(a,b,b+8|0);d=b;}else{Cn(a,b,b+9|0);e=a.B.data;d=b+1|0;e[b]=45;}e=a.B.data;f=d+
1|0;e[d]=73;e=a.B.data;d=f+1|0;e[f]=110;e=a.B.data;f=d+1|0;e[d]=102;e=a.B.data;d=f+1|0;e[f]=105;e=a.B.data;f=d+1|0;e[d]=110;e=a.B.data;d=f+1|0;e[f]=105;e=a.B.data;f=d+1|0;e[d]=116;a.B.data[f]=121;return a;}Bau();g=BgS;ZT(c,g);h=g.rd;i=g.qO;j=g.wd;k=1;l=1;if(j)l=2;m=9;n=AQ8(h);if(n>0)m=m-n|0;if(i<7&&i>=(-3)){if(i>=0){k=i+1|0;m=Bf(m,k+1|0);i=0;}else{h=h/BgO.data[ -i|0]|0;m=m-i|0;i=0;}}if(i){l=l+2|0;if(!(i>(-10)&&i<10))l=l+1|0;if(i<0)l=l+1|0;}if(i&&m==k)m=m+1|0;d=l+m|0;Cn(a,b,b+d|0);if(!j)f=b;else{e=a.B.data;f
=b+1|0;e[b]=45;}o=100000000;p=0;while(p<m){if(o<=0)q=0;else{q=h/o|0;h=h%o|0;}e=a.B.data;d=f+1|0;e[f]=(48+q|0)&65535;k=k+(-1)|0;if(k)f=d;else{e=a.B.data;f=d+1|0;e[d]=46;}o=o/10|0;p=p+1|0;}if(i){e=a.B.data;d=f+1|0;e[f]=69;if(i>=0)f=d;else{i= -i|0;e=a.B.data;f=d+1|0;e[d]=45;}if(i<10)r=f;else{e=a.B.data;r=f+1|0;e[f]=(48+(i/10|0)|0)&65535;}a.B.data[r]=(48+(i%10|0)|0)&65535;}return a;}
function AQ8(b){var c,d,e,f;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;f=e*100|0;if(b%f|0)f=e;else c=c|2;if(!(b%(f*10|0)|0))c=c|1;return c;}
function Nc(a,b){return a.vc(a.bq,b);}
function Ox(a,b,c){Cn(a,b,b+1|0);a.B.data[b]=c;return a;}
function QI(a,b,c){return a.k5(b,c===null?B(59):c.b());}
function Th(a,b){return a.xy(a.bq,b);}
function OI(a,b,c){return a.k5(b,!c?B(60):B(61));}
function Mz(a,b){var c;if(a.B.data.length>=b)return;c=a.B.data.length>=1073741823?2147483647:Bf(b,Bf(a.B.data.length*2|0,5));a.B=JY(a.B,c);}
function Nw(a){return F1(a.B,0,a.bq);}
function M4(a){return a.bq;}
function O5(a,b){if(b>=0&&b<a.bq)return a.B.data[b];G(C$());}
function PL(a,b,c,d){return a.vB(a.bq,b,c,d);}
function ZQ(a,b,c,d,e){var f,g;if(d<=e&&e<=c.i()&&d>=0){Cn(a,b,(b+e|0)-d|0);while(d<e){f=a.B.data;g=b+1|0;f[b]=c.f(d);d=d+1|0;b=g;}return a;}G(C$());}
function ACQ(a,b){return a.E1(b,0,b.i());}
function Or(a,b,c,d){return a.uH(a.bq,b,c,d);}
function Mq(a,b,c,d,e){var f,g,h,i,j;Cn(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.B.data;i=b+1|0;j=d+1|0;h[b]=g[d];b=i;d=j;}return a;}
function NE(a,b){return a.tY(b,0,b.data.length);}
function AA$(a,b,c){return a.ce(b,c);}
function Yt(a,b,c,d,e){var f,g,h,i;if(b>c)G(Bg(B(62)));while(b<c){f=d.data;g=e+1|0;h=a.B.data;i=b+1|0;f[e]=h[b];e=g;b=i;}}
function ABM(a,b){a.bq=b;}
function AB0(a,b){var c,d,e;if(b>=0&&b<a.bq){a.bq=a.bq-1|0;while(b<a.bq){c=a.B.data;d=a.B.data;e=b+1|0;c[b]=d[e];b=e;}return a;}G(Kj());}
function ACf(a,b,c){var d,e,f,g,h,i;d=B9(b,c);if(d<=0&&b<=a.bq){if(!d)return a;e=a.bq-c|0;a.bq=a.bq-(c-b|0)|0;f=0;while(f<e){g=a.B.data;d=b+1|0;h=a.B.data;i=c+1|0;g[b]=h[c];f=f+1|0;b=d;c=i;}return a;}G(Kj());}
function Cn(a,b,c){var d,e;d=a.bq-b|0;a.gY((a.bq+c|0)-b|0);e=d-1|0;while(e>=0){a.B.data[c+e|0]=a.B.data[b+e|0];e=e+(-1)|0;}a.bq=a.bq+(c-b|0)|0;}
function Xc(a,b,c){if(b<=c&&b>=0&&c<=a.bq)return F1(a.B,b,c-b|0);G(C$());}
var Fw=D(0);
var PI=D(ES);
function A6I(){var a=new PI();A1i(a);return a;}
function A1i(a){J7(a);}
function AHb(a,b){Lk(a,b);return a;}
function AQ3(a,b){Nc(a,b);return a;}
function ATv(a,b,c,d){Or(a,b,c,d);return a;}
function AHW(a,b){NE(a,b);return a;}
function AV9(a,b,c,d){PL(a,b,c,d);return a;}
function A84(a,b){ACQ(a,b);return a;}
function A3F(a,b,c,d,e){ZQ(a,b,c,d,e);return a;}
function A3W(a,b,c,d,e){Mq(a,b,c,d,e);return a;}
function A9K(a,b,c){Ox(a,b,c);return a;}
function A7n(a,b,c){NX(a,b,c);return a;}
function AIz(a,b,c,d,e){return a.OB(b,c,d,e);}
function AW3(a,b,c,d){return a.Lm(b,c,d);}
function A0A(a,b,c,d,e){return a.IC(b,c,d,e);}
function A6Y(a,b,c,d){return a.Nu(b,c,d);}
function AUS(a,b){return O5(a,b);}
function A_c(a){return M4(a);}
function AXh(a){return Nw(a);}
function AXx(a,b){Mz(a,b);}
function A8o(a,b,c){return a.QP(b,c);}
function AU7(a,b,c){return a.HG(b,c);}
var EJ=D(0);
function CT(){var a=this;C.call(a);a.hB=0;a.C=0;a.bb=0;a.fE=0;}
function FJ(a,b){J(a);a.fE=(-1);a.hB=b;a.bb=b;}
function CV(a){return a.hB;}
function B8(a){return a.C;}
function GL(a,b){if(b>=0&&b<=a.bb){a.C=b;if(b<a.fE)a.fE=0;return a;}G(W(((((((I()).a(B(63))).j(b)).a(B(64))).j(a.bb)).a(B(65))).b()));}
function BD(a){return a.bb;}
function IZ(a,b){if(b>=0&&b<=a.hB){if(a.fE>b)a.fE=(-1);a.bb=b;if(a.C>a.bb)a.C=a.bb;return a;}G(W(((((((I()).a(B(66))).j(b)).a(B(64))).j(a.hB)).a(B(65))).b()));}
function FZ(a){a.C=0;a.bb=a.hB;a.fE=(-1);return a;}
function G7(a){a.bb=a.C;a.C=0;a.fE=(-1);return a;}
function Bb(a){return a.bb-a.C|0;}
function Cb(a){return a.C>=a.bb?0:1;}
var N7=D();
var BiW=null;function AIr(){AIr=N(N7);ADl();}
function Qf(b){AIr();return BiW.W(b);}
function ACB(){var b;AIr();BiW.K();b=BiW;Bv();b.x(B(67),BiX);BiW.x(B(68),BiY);BiW.x(B(69),BiZ);BiW.x(B(70),Bi0);BiW.x(B(71),Bi1);BiW.x(B(72),Bi2);BiW.x(B(73),Bi3);BiW.x(B(74),Bi4);BiW.x(B(75),Bi5);BiW.x(B(76),Bi6);BiW.x(B(77),Bi7);BiW.x(B(78),Bi8);BiW.x(B(79),Bi9);BiW.x(B(80),Bi$);BiW.x(B(81),Bi_);BiW.x(B(82),Bja);BiW.x(B(83),Bjb);BiW.x(B(84),Bjc);BiW.x(B(85),Bjd);BiW.x(B(86),Bje);BiW.x(B(87),Bjf);BiW.x(B(88),Bjg);BiW.x(B(89),Bjh);BiW.x(B(90),Bji);BiW.x(B(91),Bjj);BiW.x(B(92),Bjk);BiW.x(B(93),Bjl);BiW.x(B(94),
Bjm);BiW.x(B(95),Bjn);BiW.x(B(96),Bjo);BiW.x(B(97),Bjp);BiW.x(B(98),Bjq);BiW.x(B(99),Bjr);BiW.x(B(100),Bjs);}
function ADl(){BiW=DG();ACB();}
var E8=D();
function Mi(a){J(a);}
function Q(){var a=this;E8.call(a);a.bD=0;a.b5=0;a.bG=null;a.mA=null;a.m2=null;a.be=0;}
var Bjt=null;function Ke(){Ke=N(Q);AGU();}
function Be(a){Ke();Mi(a);a.bG=Bfo(2048);}
function AW0(a){return null;}
function AVZ(a){return a.bG;}
function A3L(a){return !a.b5?(a.bG.lc(0)>=2048?0:1):a.bG.Qa(0)>=2048?0:1;}
function A1b(a){return a.be;}
function A8j(a){return a;}
function AEP(a){var b;if(a.m2===null){b=a.ci();a.m2=Bc7(a,b);a.m2.f9(a.b5);}return a.m2;}
function AW$(a){var b;if(a.mA===null){b=a.ci();a.mA=Bbo(a,b,a);a.mA.f9(a.jH());a.mA.be=a.be;}return a.mA;}
function A$n(a){return 0;}
function ARR(a,b){if(a.bD^b){a.bD=a.bD?0:1;a.b5=a.b5?0:1;}if(!a.be)a.be=1;return a;}
function AIx(a){return a.bD;}
function IY(b,c){Ke();return b.p(c);}
function GU(b,c){Ke();if(b.bK()!==null&&c.bK()!==null)return (b.bK()).Mb(c.bK());return 1;}
function K0(b,c){Ke();return (ACc(Bjt,b)).Hs(c);}
function AGU(){Bjt=Ba5();}
function ZA(){Q.call(this);this.F3=null;}
function BbA(a){var b=new ZA();A2i(b,a);return b;}
function A2i(a,b){a.F3=b;Be(a);}
function ATj(a,b){return Yj(b);}
var Gw=D();
var Bju=null;var Bjv=null;var Bjw=null;function AP1(){AP1=N(Gw);AHF();}
function Ba5(){var a=new Gw();TW(a);return a;}
function TW(a){AP1();J(a);}
function ACc(a,b){var c,d,e;c=0;while(true){AP1();if(c>=Bjw.data.length)G(BbF(B(101),B(101),b));d=Bjw.data[c];e=d.data;if(b.z(e[0]))break;c=c+1|0;}return e[1];}
function AHF(){Bju=Bcr();Bjv=Bes();Bjw=H($rt_arraycls(C),[H(C,[B(102),BcZ()]),H(C,[B(103),A_Y()]),H(C,[B(104),BfH()]),H(C,[B(105),Bf3()]),H(C,[B(106),Bjv]),H(C,[B(107),BeH()]),H(C,[B(108),Bbf()]),H(C,[B(109),Bdx()]),H(C,[B(110),Bdn()]),H(C,[B(111),Bag()]),H(C,[B(112),BaK()]),H(C,[B(113),BdA()]),H(C,[B(114),Bb2()]),H(C,[B(115),A_T()]),H(C,[B(116),BfU()]),H(C,[B(117),BaE()]),H(C,[B(118),BeF()]),H(C,[B(119),BdZ()]),H(C,[B(120),BeG()]),H(C,[B(121),Baj()]),H(C,[B(122),Bf$()]),H(C,[B(123),BdR()]),H(C,[B(124),BbD()]),
H(C,[B(125),BfF()]),H(C,[B(126),Bfz()]),H(C,[B(127),BcF()]),H(C,[B(128),Bai()]),H(C,[B(129),Bfp()]),H(C,[B(130),Bju]),H(C,[B(131),BbM()]),H(C,[B(132),Bdy()]),H(C,[B(133),Bju]),H(C,[B(134),A_R()]),H(C,[B(135),Bjv]),H(C,[B(136),BaX()]),H(C,[B(137),M(0,127)]),H(C,[B(138),M(128,255)]),H(C,[B(139),M(256,383)]),H(C,[B(140),M(384,591)]),H(C,[B(141),M(592,687)]),H(C,[B(142),M(688,767)]),H(C,[B(143),M(768,879)]),H(C,[B(144),M(880,1023)]),H(C,[B(145),M(1024,1279)]),H(C,[B(146),M(1280,1327)]),H(C,[B(147),M(1328,1423)]),
H(C,[B(148),M(1424,1535)]),H(C,[B(149),M(1536,1791)]),H(C,[B(150),M(1792,1871)]),H(C,[B(151),M(1872,1919)]),H(C,[B(152),M(1920,1983)]),H(C,[B(153),M(2304,2431)]),H(C,[B(154),M(2432,2559)]),H(C,[B(155),M(2560,2687)]),H(C,[B(156),M(2688,2815)]),H(C,[B(157),M(2816,2943)]),H(C,[B(158),M(2944,3071)]),H(C,[B(159),M(3072,3199)]),H(C,[B(160),M(3200,3327)]),H(C,[B(161),M(3328,3455)]),H(C,[B(162),M(3456,3583)]),H(C,[B(163),M(3584,3711)]),H(C,[B(164),M(3712,3839)]),H(C,[B(165),M(3840,4095)]),H(C,[B(166),M(4096,4255)]),
H(C,[B(167),M(4256,4351)]),H(C,[B(168),M(4352,4607)]),H(C,[B(169),M(4608,4991)]),H(C,[B(170),M(4992,5023)]),H(C,[B(171),M(5024,5119)]),H(C,[B(172),M(5120,5759)]),H(C,[B(173),M(5760,5791)]),H(C,[B(174),M(5792,5887)]),H(C,[B(175),M(5888,5919)]),H(C,[B(176),M(5920,5951)]),H(C,[B(177),M(5952,5983)]),H(C,[B(178),M(5984,6015)]),H(C,[B(179),M(6016,6143)]),H(C,[B(180),M(6144,6319)]),H(C,[B(181),M(6400,6479)]),H(C,[B(182),M(6480,6527)]),H(C,[B(183),M(6528,6623)]),H(C,[B(184),M(6624,6655)]),H(C,[B(185),M(6656,6687)]),
H(C,[B(186),M(7424,7551)]),H(C,[B(187),M(7552,7615)]),H(C,[B(188),M(7616,7679)]),H(C,[B(189),M(7680,7935)]),H(C,[B(190),M(7936,8191)]),H(C,[B(191),M(8192,8303)]),H(C,[B(192),M(8304,8351)]),H(C,[B(193),M(8352,8399)]),H(C,[B(194),M(8400,8447)]),H(C,[B(195),M(8448,8527)]),H(C,[B(196),M(8528,8591)]),H(C,[B(197),M(8592,8703)]),H(C,[B(198),M(8704,8959)]),H(C,[B(199),M(8960,9215)]),H(C,[B(200),M(9216,9279)]),H(C,[B(201),M(9280,9311)]),H(C,[B(202),M(9312,9471)]),H(C,[B(203),M(9472,9599)]),H(C,[B(204),M(9600,9631)]),
H(C,[B(205),M(9632,9727)]),H(C,[B(206),M(9728,9983)]),H(C,[B(207),M(9984,10175)]),H(C,[B(208),M(10176,10223)]),H(C,[B(209),M(10224,10239)]),H(C,[B(210),M(10240,10495)]),H(C,[B(211),M(10496,10623)]),H(C,[B(212),M(10624,10751)]),H(C,[B(213),M(10752,11007)]),H(C,[B(214),M(11008,11263)]),H(C,[B(215),M(11264,11359)]),H(C,[B(216),M(11392,11519)]),H(C,[B(217),M(11520,11567)]),H(C,[B(218),M(11568,11647)]),H(C,[B(219),M(11648,11743)]),H(C,[B(220),M(11776,11903)]),H(C,[B(221),M(11904,12031)]),H(C,[B(222),M(12032,12255)]),
H(C,[B(223),M(12272,12287)]),H(C,[B(224),M(12288,12351)]),H(C,[B(225),M(12352,12447)]),H(C,[B(226),M(12448,12543)]),H(C,[B(227),M(12544,12591)]),H(C,[B(228),M(12592,12687)]),H(C,[B(229),M(12688,12703)]),H(C,[B(230),M(12704,12735)]),H(C,[B(231),M(12736,12783)]),H(C,[B(232),M(12784,12799)]),H(C,[B(233),M(12800,13055)]),H(C,[B(234),M(13056,13311)]),H(C,[B(235),M(13312,19893)]),H(C,[B(236),M(19904,19967)]),H(C,[B(237),M(19968,40959)]),H(C,[B(238),M(40960,42127)]),H(C,[B(239),M(42128,42191)]),H(C,[B(240),M(42752,
42783)]),H(C,[B(241),M(43008,43055)]),H(C,[B(242),M(44032,55203)]),H(C,[B(243),M(55296,56191)]),H(C,[B(244),M(56192,56319)]),H(C,[B(245),M(56320,57343)]),H(C,[B(246),M(57344,63743)]),H(C,[B(247),M(63744,64255)]),H(C,[B(248),M(64256,64335)]),H(C,[B(249),M(64336,65023)]),H(C,[B(250),M(65024,65039)]),H(C,[B(251),M(65040,65055)]),H(C,[B(252),M(65056,65071)]),H(C,[B(253),M(65072,65103)]),H(C,[B(254),M(65104,65135)]),H(C,[B(255),M(65136,65279)]),H(C,[B(256),M(65280,65519)]),H(C,[B(257),M(0,1114111)]),H(C,[B(258),
BdB()]),H(C,[B(259),Bz(0,1)]),H(C,[B(260),G6(62,1)]),H(C,[B(261),Bz(1,1)]),H(C,[B(262),Bz(2,1)]),H(C,[B(263),Bz(3,0)]),H(C,[B(264),Bz(4,0)]),H(C,[B(265),Bz(5,1)]),H(C,[B(266),G6(448,1)]),H(C,[B(267),Bz(6,1)]),H(C,[B(268),Bz(7,0)]),H(C,[B(269),Bz(8,1)]),H(C,[B(270),G6(3584,1)]),H(C,[B(271),Bz(9,1)]),H(C,[B(272),Bz(10,1)]),H(C,[B(273),Bz(11,1)]),H(C,[B(274),G6(28672,0)]),H(C,[B(275),Bz(12,0)]),H(C,[B(276),Bz(13,0)]),H(C,[B(277),Bz(14,0)]),H(C,[B(278),Ben(983040,1,1)]),H(C,[B(279),Bz(15,0)]),H(C,[B(280),Bz(16,
1)]),H(C,[B(281),Bz(18,1)]),H(C,[B(282),Bbq(19,0,1)]),H(C,[B(283),G6(1643118592,1)]),H(C,[B(284),Bz(20,0)]),H(C,[B(285),Bz(21,0)]),H(C,[B(286),Bz(22,0)]),H(C,[B(287),Bz(23,0)]),H(C,[B(288),Bz(24,1)]),H(C,[B(289),G6(2113929216,1)]),H(C,[B(290),Bz(25,1)]),H(C,[B(291),Bz(26,0)]),H(C,[B(292),Bz(27,0)]),H(C,[B(293),Bz(28,1)]),H(C,[B(294),Bz(29,0)]),H(C,[B(295),Bz(30,0)])]);}
var Nz=D(0);
function J0(){var a=this;C.call(a);a.eF=null;a.eJ=null;a.nD=null;a.pu=null;}
var Bjx=null;function Vd(){Vd=N(J0);A7v();}
function AMi(){var a=new J0();Qt(a);return a;}
function ADG(a,b){return b.M(a.nD);}
function A$3(a,b){return b.M(a.pu);}
function Qt(a){Vd();J(a);a.eF=S();a.eJ=S();a.nD=S();a.pu=S();a.Ld();}
function A5v(a,b,c){a.eF.I(b.n>=c.n?c.n:b.n,b.o>=c.o?c.o:b.o,b.q>=c.q?c.q:b.q);a.eJ.I(b.n<=c.n?c.n:b.n,b.o<=c.o?c.o:b.o,b.q<=c.q?c.q:b.q);((a.nD.M(a.eF)).fB(a.eJ)).em(0.5);(a.pu.M(a.eJ)).gl(a.eF);return a;}
function A03(a){a.eF.I(Infinity,Infinity,Infinity);a.eJ.I((-Infinity),(-Infinity),(-Infinity));a.nD.I(0.0,0.0,0.0);a.pu.I(0.0,0.0,0.0);return a;}
function AQS(a){return a.DM(a.eF.I(0.0,0.0,0.0),a.eJ.I(0.0,0.0,0.0));}
function AUc(a,b,c,d){return a.DM(a.eF.I(HI(a.eF.n,b),HI(a.eF.o,c),HI(a.eF.q,d)),a.eJ.I(Ib(a.eJ.n,b),Ib(a.eJ.o,c),Ib(a.eJ.q,d)));}
function HI(b,c){Vd();if(b>c)b=c;return b;}
function Ib(b,c){Vd();if(b>c)c=b;return c;}
function A7v(){Bjx=S();}
var K5=D(0);
function ABu(){C.call(this);this.nr=null;}
function BdG(a){var b=new ABu();ASJ(b,a);return b;}
function ASJ(a,b){J(a);a.nr=b;}
function AYj(a,b,c){GR();if(c===Bjy)return AVi(a.nr,b,c);G(U(((((I()).a(B(296))).dD(c)).a(B(297))).b()));}
function A9O(a,b){var c,d;c=new Gd;d=a.nr;GR();Hn(c,d,b,Bjz);return c;}
function AWU(a,b){var c,d;c=new Gd;d=a.nr;GR();Hn(c,d,b,Bjy);return c;}
var EN=D(Bx);
var BjA=null;var BjB=null;var BjC=null;function AA8(){AA8=N(EN);AVI();}
function AW_(a,b){var c=new EN();AAj(c,a,b);return c;}
function YA(){AA8();return BjC.go();}
function AAj(a,b,c){AA8();Cw(a,b,c);}
function AVI(){BjA=AW_(B(298),0);BjB=AW_(B(299),1);BjC=H(EN,[BjA,BjB]);}
var IR=D(T);
function Bes(){var a=new IR();TT(a);return a;}
function TT(a){Bo(a);}
function ZC(a){return (CS()).bF(48,57);}
var R0=D(T);
function BbD(){var a=new R0();AGc(a);return a;}
function AGc(a){Bo(a);}
function A0C(a){var b;b=Baw(a);b.be=1;return b;}
var Nl=D(0);
function Ek(){var a=this;BB.call(a);a.mk=0;a.qU=null;a.qa=null;a.p7=0;}
function Bgp(a,b){var c=new Ek();J4(c,a,b);return c;}
function J4(a,b,c){CQ(a);a.mk=1;a.qa=b;a.p7=c;}
function A$t(a,b){a.k=b;}
function AOn(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=Bc(4);f=0;g=d.J();if(b>=g)return (-1);h=a.vs(b,c,g);i=b+a.mk|0;j=ABO(h);if(j===null){k=e.data;l=1;k[f]=h;}else{l=j.data.length;X(j,0,e,0,l);l=f+l|0;}a:{if(i<g){m=a.vs(i,c,g);while(l<4){if(!A5T(m)){k=e.data;n=l+1|0;k[l]=m;}else{k=(ABO(m)).data;if(k.length!=2){o=e.data;n=l+1|0;o[l]=k[0];}else{o=e.data;m=l+1|0;o[l]=k[0];n=m+1|0;o[m]=k[1];}}i=i+a.mk|0;if(i>=g){l=n;break a;}m=a.vs(i,c,g);l=n;}}}if(l!=a.p7)return (-1);p=0;while(true){if(p>=l)return a.k.e(i,c,d);if
(e.data[p]!=a.qa.data[p])break;p=p+1|0;}return (-1);}
function Ii(a){var b,c;if(a.qU===null){b=I();c=0;while(c<a.p7){b.q1(Eu(a.qa.data[c]));c=c+1|0;}a.qU=b.b();}return a.qU;}
function A5b(a){return (((I()).a(B(300))).a(Ii(a))).b();}
function AKN(a,b,c,d){var e,f,g,h;a.mk=1;if(b>=(d-1|0))e=c.f(b);else{f=b+1|0;e=c.f(b);g=c.f(f);if(GA(e,g)){h=I5([e,g]);e=ST(h,0);a.mk=2;}}return e;}
function ALx(a,b){var c,d;a:{if(b instanceof Ek){c=b;if(!(Ii(c)).z(Ii(a))){d=0;break a;}}d=1;}return d;}
function A6B(a,b){return 1;}
var AAf=D(Ek);
function Bbm(a,b){var c=new AAf();AXr(c,a,b);return c;}
function AXr(a,b,c){J4(a,b,c);}
function Jw(){var a=this;C.call(a);a.sn=0;a.uc=null;a.ig=null;a.lN=0;}
function Xg(a){J(a);a.ig=null;a.lN=0;}
function ALk(a,b){a.uc=b;}
function N_(a){return a.ig===null?0:1;}
function ANZ(a){if(!N_(a))return;a.lN=a.lN+1|0;if(!a.sn)a.No(a.ig.lm());else a.MA(a.ig.lm());a.ig=null;}
function APg(a,b){if(b<0)G(W(B(301)));if(N_(a))a.jk();a.sn=0;a.ig=Bn(a.Mv(a.lN,b));}
function Zk(a,b){if(b!=a.lN)return;if(!a.sn)a.ig=null;if(a.uc!==null)a.uc.fe();}
var Zq=D();
function AHE(){return {};}
function Da(){var a=this;Jy.call(a);a.Bn=null;a.DR=null;}
function GD(a,b,c,d){U0(a,b,c,d);a.Bn=Cj(512);a.DR=BW(512);}
function ARS(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.Bn;e=0;f=0;g=a.DR;a:{while(true){if((e+32|0)>f&&Cb(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Bq(Bb(b)+j|0,i.length);b.z1(d,j,f-j|0);e=0;}if(!Cb(c)){if(!Cb(b)&&e>=f){Bj();k=BgZ;}else{Bj();k=BgY;}break a;}i=g.data;l=0;m=Bq(Bb(c),i.length);n=Bb1(b,c);k=a.nd(d,e,f,g,l,m,n);e=n.z$;if(k===null&&l==n.qA){Bj();k=BgZ;}j=n.qA;c.P6(g,0,j);if(k!==null)break;}}b.f4(B8(b)-(f-e|0)|0);return k;}
var X_=D(Da);
function Bft(a){var b=new X_();AGF(b,a);return b;}
function AGF(a,b){GD(a,b,1.0,1.0);}
function AT9(a,b,c,d,e,f,g,h){var i,j,k,l,m;i=null;a:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(l&128){i=BV(1);c=k+(-1)|0;break a;}j=e.data;m=f+1|0;j[f]=l&65535;c=k;f=m;}}h.el(c);h.dR(f);return i;}
var Yo=D();
function CE(){return Cf(Ea(),O(1000000));}
function Gg(){var a=this;C.call(a);a.ki=0;a.kz=0;a.CE=null;a.gU=null;a.bX=null;a.oZ=0;a.sz=null;a.ol=0;a.om=0;a.on=0;a.zP=0.0;a.m_=null;a.pe=null;a.zu=null;a.Ki=null;a.iw=null;a.km=null;}
var BjD=null;var BjE=0;var BjF=null;function FD(){FD=N(Gg);ALH();}
function APA(a){var b=new Gg();Pc(b,a);return b;}
function O1(a,b,c){var d=new Gg();T_(d,a,b,c);return d;}
function Pc(a,b){var c,d,e;FD();J(a);a.ol=255;a.om=255;a.on=255;a.m_=Jm(a.ol,a.om,a.on,a.zP);Gv();a.pe=BjG;SM();a.zu=BjH;c=b;d=c.ry();e=c.fS.iO.W(d);Md(a,(-1),(-1),e,null);if(a.iw!==null)return;G(U(((((I()).a(B(302))).a(b.ry())).a(B(303))).b()));}
function T_(a,b,c,d){FD();J(a);a.ol=255;a.om=255;a.on=255;a.m_=Jm(a.ol,a.om,a.on,a.zP);Gv();a.pe=BjG;SM();a.zu=BjH;Md(a,b,c,null,null);}
function Md(a,b,c,d,e){var f;if(e!==null){a.km=e;a.ki=e.getWidth();a.kz=e.getHeight();}else if(d===null){a.ki=b;a.kz=c;}else{a.iw=d;a.ki=d.width;a.kz=d.height;}AYy();a.CE=BjI;a.sz=MM(4);FD();f=BjE;BjE=f+1|0;a.oZ=f;a.sz.K_(0,a.oZ);BjD.x(Bn(a.oZ),a);}
function Ru(a){var b,c,d,e,f;b=(El()).hu();c=b.pg();d=c.createElement("canvas");a.gU=d;e=a.gU;f=a.ki;e.width=f;e=a.gU;f=a.kz;e.height=f;a.bX=a.gU.getContext("2d");e=a.bX;f=$rt_ustr((G2()).b());e.globalCompositeOperation=f;}
function G2(){FD();Ix();return BjJ;}
function Jm(b,c,d,e){FD();return ((((((((((I()).a(B(304))).j(b)).a(B(23))).j(c)).a(B(23))).j(d)).a(B(23))).cD(e)).a(B(24))).b();}
function ADF(a,b){var c,d;a.pe=b;GZ(a);c=a.bX;d=$rt_ustr((G2()).b());c.globalCompositeOperation=d;}
function AG8(a){return a.CE;}
function AKX(a){return 6408;}
function ANw(a){return 6408;}
function AQt(a){return 5121;}
function AJw(a){return a.ki;}
function AMX(a){return a.kz;}
function A7l(a){return a.sz;}
function AXP(a){FD();BjD.IO(Bn(a.oZ));}
function ADX(a){GZ(a);return a.gU;}
function GZ(a){var b,c;if(a.gU===null){Ru(a);if(a.iw!==null){b=a.bX;Ix();c=$rt_ustr(E6(BjK));b.globalCompositeOperation=c;b=a.bX;c=a.iw;b.drawImage(c,0.0,0.0);b=a.bX;c=$rt_ustr(E6(G2()));b.globalCompositeOperation=c;}if(a.km!==null){c=a.bX;Ix();b=$rt_ustr(E6(BjK));c.globalCompositeOperation=b;b=a.bX;c=a.km;b.drawImage(c,0.0,0.0);b=a.bX;c=$rt_ustr(E6(G2()));b.globalCompositeOperation=c;}}}
function AFv(a){return a.gU===null&&a.iw!==null?1:0;}
function ARb(a){return a.iw;}
function A5k(a){return a.gU===null&&a.km!==null?1:0;}
function A$G(a){return a.km;}
function AZb(a,b,c,d,e,f,g,h){var i;i=b.sW();Om(a,i,e,f,g,h,c,d,g,h);}
function APq(a,b,c,d,e,f,g,h,i,j){Om(a,b.sW(),c,d,e,f,g,h,i,j);}
function Om(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u;GZ(a);k=a.pe;Gv();if(k===BjL){l=a.bX;k=$rt_ustr(BjF);l.fillStyle=k;l=a.bX;k=$rt_ustr(BjF);l.strokeStyle=k;l=a.bX;k="destination-out";l.globalCompositeOperation=k;a.bX.beginPath();l=a.bX;m=g;n=h;o=i;p=j;l.rect(m,n,o,p);AA8();RR(a,BjA);a.bX.closePath();l=a.bX;k=$rt_ustr(a.m_);l.fillStyle=k;q=a.bX;l=$rt_ustr(a.m_);q.strokeStyle=l;q=a.bX;Ix();l=$rt_ustr(E6(BjJ));q.globalCompositeOperation=l;}if(e&&f&&i&&j){l=a.bX;m=c;n=d;o=e;p=f;r=g;s=h;t=i;u=j;l.drawImage(b,
m,n,o,p,r,s,t,u);}a.Ki=null;}
function RR(a,b){a:{GZ(a);BfT();switch(BjM.data[BC(b)]){case 1:break;case 2:a.bX.stroke();break a;default:break a;}a.bX.fill();}}
function ALH(){BjD=C6();BjE=0;BjF=Jm(255,255,255,1.0);}
function HD(){BH.call(this);this.IL=null;}
var BjN=Ba;var BjO=Ba;function ABF(){ABF=N(HD);A$4();}
function A$4(){BjN=BR(B(305));BjO=BjN;}
var ACG=D(Cy);
function Bdf(){var a=new ACG();AUt(a);return a;}
function AUt(a){Et(a,(-1));}
function AYd(a,b,c,d){return b;}
function A1_(a){return B(306);}
var KR=D(0);
var JC=D(BB);
function BcS(a,b){var c=new JC();V0(c,a,b);return c;}
function V0(a,b,c){SA(a,b,c);}
function AOp(a,b,c,d){var e,f,g,h,i;e=d.ev(a.bm);d.by(a.bm,b);f=a.bQ.df();g=0;while(true){if(g>=f){d.by(a.bm,e);return (-1);}h=a.bQ.l(g);i=h.e(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function AMp(a){return B(307);}
function A60(a,b){var c;c=b.ev(a.bm);return !c?0:1;}
var Dr=D(JC);
function Bdr(a,b){var c=new Dr();Gc(c,a,b);return c;}
function Gc(a,b,c){V0(a,b,c);}
function AYU(a,b,c,d){var e,f,g,h,i;e=d.ev(a.bm);d.by(a.bm,b);f=a.bQ.df();g=0;while(g<f){h=a.bQ.l(g);i=h.e(b,c,d);if(i>=0)return a.k.e(a.dn.dM(),c,d);g=g+1|0;}d.by(a.bm,e);return (-1);}
function A6y(a,b){a.k=b;}
function AD7(a){return B(307);}
var VD=D(Dr);
function BdW(a,b){var c=new VD();AJf(c,a,b);return c;}
function AJf(a,b,c){Gc(a,b,c);}
function AOE(a,b,c,d){var e,f,g,h;e=a.bQ.df();f=0;while(f<e){g=a.bQ.l(f);h=g.e(b,c,d);if(h>=0)return a.k.e(b,c,d);f=f+1|0;}return (-1);}
function ARZ(a,b){return 0;}
function A$o(a){return B(308);}
var Gx=D(0);
var Pv=D();
function Bei(){var a=new Pv();A5L(a);return a;}
function A5L(a){J(a);}
function Ie(){C.call(this);this.qd=null;}
function SF(a){J(a);a.qd=Bp();}
function A2d(a,b){var c,d,e;c=b.kP;if(c!==null&&c.uK(b))return c;d=a.qd.bZ();while(true){if(!d.bC()){e=a.Gc(b);if(e.uK(b)){e.Ei();a.qd.F(e);return e;}G(U(B(309)));}e=d.bz();if(e.uK(b))break;}return e;}
function Pu(){Ie.call(this);this.wl=null;}
function BjP(a){var b=new Pu();WX(b,a);return b;}
function Bfb(){var a=new Pu();A$q(a);return a;}
function WX(a,b){SF(a);if(b===null)b=BcN();a.wl=b;}
function A$q(a){WX(a,null);}
function ASm(a,b){return BaW(b,a.wl);}
var ABz=D(Dr);
function Bda(a,b){var c=new ABz();AIt(c,a,b);return c;}
function AIt(a,b,c){Gc(a,b,c);}
function AFm(a,b,c,d){var e,f,g;e=a.bQ.df();f=0;while(true){if(f>=e)return a.k.e(b,c,d);g=a.bQ.l(f);if(g.e(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A8z(a,b){return 0;}
function AJc(a){return B(310);}
var Le=D(0);
function Ho(){var a=this;C.call(a);a.Co=null;a.pa=0;a.oQ=0;a.kv=null;a.dd=null;a.Dg=0;a.jN=0;}
var BjQ=0;function Bep(a,b,c,d){var e=new Ho();AYa(e,a,b,c,d);return e;}
function AYa(a,b,c,d,e){J(a);a.pa=0;a.oQ=0;a.jN=0;a.Co=b;a.dd=c;a.kv=d;a.Dg=e;if(a.dd!==null){a.dd=N1(a,a.dd);a.pa=a.dd.bo();a.oQ=a.dd.bl();if(d===null)a.kv=a.dd.f8();}}
function AUM(a){return a.jN;}
function AYb(a){if(a.jN)G(U(B(311)));if(a.dd===null){a.dd=N1(a,APA(a.Co));a.pa=a.dd.bo();a.oQ=a.dd.bl();if(a.kv===null)a.kv=a.dd.f8();}a.jN=1;}
function N1(a,b){var c,d,e,f,g;a:{if(Biq===null&&BjQ){c=b.bo();d=b.bl();e=IW(c);f=IW(d);if(c!=e)break a;if(d!=f)break a;}return b;}g=O1(e,f,b.f8());g.zi(b,0,0,0,0,c,d);b.iz();return g;}
function AMv(a){var b;if(!a.jN)G(U(B(312)));a.jN=0;b=a.dd;a.dd=null;return b;}
function A15(a){return 1;}
function ALF(a){return a.pa;}
function AYr(a){return a.oQ;}
function AIi(a){return a.kv;}
function AVO(a){return a.Dg;}
function AHr(a){return 1;}
function A4k(a){O6();return Big;}
function AYI(a,b){G(U(B(313)));}
var Hy=D(Bm);
function BfX(){var a=new Hy();R7(a);return a;}
function R7(a){Cx(a);}
var ACL=D(Hy);
function C9(){var a=new ACL();A18(a);return a;}
function A18(a){R7(a);}
function N2(){var a=this;BH.call(a);a.Fp=0;a.Kq=0;a.K8=0;a.HY=0.0;}
var BjR=Ba;function GO(){GO=N(N2);AOi();}
function Us(b){GO();return Dw(Br(b,BjR),b)?0:1;}
function AOi(){BjR=BR(B(314));}
var Z1=D();
function AAz(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(CL());}return b.data.length;}
function Lv(b,c){if(b===null)G(IJ());if(b===F($rt_voidcls()))G(CL());if(c<0)G(A9M());return ASO(b.z7(),c);}
function ASO(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function DP(){C.call(this);this.bk=null;}
function HV(a){J(a);a.bk=CP(0.0,0.0,0.0,1.0);}
function OB(){var a=this;DP.call(a);a.eD=null;a.dx=0.0;}
function Be8(){var a=new OB();AKr(a);return a;}
function AKr(a){HV(a);a.eD=S();}
function AKx(a,b){return a.H4(b.bk,b.eD,b.dx);}
function AN1(a,b,c,d){if(b!==null)a.bk.eR(b);if(c!==null)a.eD.M(c);a.dx=d;return a;}
function AFh(a,b,c,d,e,f,g,h){a.bk.hV(b,c,d,1.0);a.eD.I(e,f,g);a.dx=h;return a;}
function AXC(a,b){var c;a:{b:{if(b!==null){if(b===a)break b;if(a.bk.z(b.bk)&&a.eD.z(b.eD)&&a.dx===b.dx)break b;}c=0;break a;}c=1;}return c;}
var AAm=D();
function BeU(){var a=new AAm();AFN(a);return a;}
function AFN(a){J(a);}
function UD(){C.call(this);this.N=null;}
function Bfy(a){var b=new UD();AE1(b,a);return b;}
function AE1(a,b){J(a);a.N=BeZ(4);a.N.Jb(b);}
function AKI(a,b){var c,d,e,f,$$je;c=a.N.f0();a:{try{d=0;e=a.N.h;}catch($$e){$$je=R($$e);f=$$je;break a;}b:{try{while(d<e){if(c.data[d].lH(b))break b;d=d+1|0;}}catch($$e){$$je=R($$e);f=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);f=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(f);}
function AT8(a,b){var c,d,e,f,$$je;c=a.N.f0();a:{try{d=0;e=a.N.h;}catch($$e){$$je=R($$e);f=$$je;break a;}b:{try{while(d<e){if(c.data[d].oF(b))break b;d=d+1|0;}}catch($$e){$$je=R($$e);f=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);f=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(f);}
function AUq(a,b){var c,d,e,f,$$je;c=a.N.f0();a:{try{d=0;e=a.N.h;}catch($$e){$$je=R($$e);f=$$je;break a;}b:{try{while(d<e){if(c.data[d].ls(b))break b;d=d+1|0;}}catch($$e){$$je=R($$e);f=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);f=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(f);}
function AEx(a,b,c,d,e){var f,g,h,i,$$je;f=a.N.f0();a:{try{g=0;h=a.N.h;}catch($$e){$$je=R($$e);i=$$je;break a;}b:{try{while(g<h){if(f.data[g].iq(b,c,d,e))break b;g=g+1|0;}}catch($$e){$$je=R($$e);i=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);i=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(i);}
function AQq(a,b,c,d,e){var f,g,h,i,$$je;f=a.N.f0();a:{try{g=0;h=a.N.h;}catch($$e){$$je=R($$e);i=$$je;break a;}b:{try{while(g<h){if(f.data[g].hQ(b,c,d,e))break b;g=g+1|0;}}catch($$e){$$je=R($$e);i=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);i=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(i);}
function AII(a,b,c,d){var e,f,g,h,$$je;e=a.N.f0();a:{try{f=0;g=a.N.h;}catch($$e){$$je=R($$e);h=$$je;break a;}b:{try{while(f<g){if(e.data[f].i_(b,c,d))break b;f=f+1|0;}}catch($$e){$$je=R($$e);h=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);h=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(h);}
function ARY(a,b,c){var d,e,f,g,$$je;d=a.N.f0();a:{try{e=0;f=a.N.h;}catch($$e){$$je=R($$e);g=$$je;break a;}b:{try{while(e<f){if(d.data[e].na(b,c))break b;e=e+1|0;}}catch($$e){$$je=R($$e);g=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);g=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(g);}
function A36(a,b,c){var d,e,f,g,$$je;d=a.N.f0();a:{try{e=0;f=a.N.h;}catch($$e){$$je=R($$e);g=$$je;break a;}b:{try{while(e<f){if(d.data[e].oJ(b,c))break b;e=e+1|0;}}catch($$e){$$je=R($$e);g=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);g=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(g);}
var FL=D(FS);
function BjS(a){var b=new FL();KG(b,a);return b;}
function KG(a,b){OX(a,b);}
var AAd=D(FL);
function BjT(a){var b=new AAd();AF4(b,a);return b;}
function AF4(a,b){KG(a,b);}
var Pr=D(T);
function BdZ(){var a=new Pr();AF6(a);return a;}
function AF6(a){Bo(a);}
function AHB(a){var b;b=BeX(a);b.be=1;return b;}
var IS=D(0);
var Cz=D(0);
var IE=D(0);
var Jb=D();
function Um(a){J(a);}
function AZz(a,b){var c,d,e,f;c=b.data;d=a.df();e=c.length;if(e<d)b=Lv((Ck(b)).gq(),d);else while(d<e){c[d]=null;d=d+1|0;}d=0;f=a.ft();while(f.bC()){c=b.data;e=d+1|0;c[d]=f.bz();d=e;}return b;}
var E9=D();
function Kw(a){J(a);}
function A8Z(a,b,c,d){var e,f,g,h;e=0;while(e<d){f=a.Bh();if(f<0){if(!e)e=(-1);return e;}g=b.data;h=c+1|0;g[c]=f<<24>>24;e=e+1|0;c=h;}if(d<=0)d=(-1);return d;}
function A1d(a){}
function ABj(){var a=this;E9.call(a);a.tF=null;a.h7=0;a.Ic=0;a.qL=0;}
function BjU(a,b,c){var d=new ABj();ACX(d,a,b,c);return d;}
function XC(a){var b=new ABj();AFr(b,a);return b;}
function ACX(a,b,c,d){Kw(a);a.tF=b;a.h7=c;a.Ic=c;a.qL=c+d|0;}
function AFr(a,b){ACX(a,b,0,b.data.length);}
function AX4(a){var b,c,d;if(a.h7>=a.qL)b=(-1);else{c=a.tF.data;d=a.h7;a.h7=d+1|0;b=c[d]&255;}return b;}
function A$B(a,b,c,d){var e,f,g,h,i,j;e=Bq(d,a.qL-a.h7|0);f=0;while(f<e){g=b.data;h=c+1|0;i=a.tF.data;j=a.h7;a.h7=j+1|0;g[c]=i[j];f=f+1|0;c=h;}if(e<=0)e=(-1);return e;}
function AJ3(a){}
var Tw=D();
function ADB(b,c){var d,e,f,g,h,i,j,k;if(!b)return B(315);d=1<<c;e=d-1|0;f=(((32-Mw(b)|0)+c|0)-1|0)/c|0;g=BW(f);h=Cg(f-1|0,c);i=0;while(h>=0){j=g.data;k=i+1|0;j[i]=FQ(b>>>h&e,d);h=h-c|0;i=k;}return Mh(g);}
var IN=D(CT);
function AAh(a,b,c,d){FJ(a,b);a.C=c;a.bb=d;}
function AKY(b,c,d){return Be1(0,b.data.length,b,c,c+d|0,0);}
function A0O(b){return AKY(b,0,b.data.length);}
function Tz(a){FZ(a);return a;}
function A4u(a){return Tz(a);}
function JH(){var a=this;C.call(a);a.jo=null;a.u7=0.0;a.vm=0.0;a.AD=0;a.AE=0;a.yA=0;a.EP=0;a.HA=null;}
function Tl(a){J(a);a.HA=S();}
function A8K(a,b){Zv(a.AD,a.AE,a.yA,a.EP);a.jo.kx=a.u7;a.jo.me=a.vm;if(b)a.jo.cq.I(a.u7/2.0,a.vm/2.0,0.0);a.jo.f6();}
function A8u(a){return a.jo;}
function AJe(a,b){a.jo=b;}
function AHi(a,b,c){a.u7=b;a.vm=c;}
function AXt(a,b,c,d,e){a.AD=b;a.AE=c;a.yA=d;a.EP=e;}
function CG(){Dd.call(this);this.bv=null;}
function Bb5(a,b,c){var d=new CG();E4(d,a,b,c);return d;}
function E4(a,b,c,d){FW(a,b,c,d);a.bv=b;}
function AUY(a,b,c,d){var e,f;e=0;a:{while((b+a.bv.cg()|0)<=d.J()){f=a.bv.bH(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.k.e(b,c,d);if(f>=0)break;b=b-a.bv.cg()|0;e=e+(-1)|0;}return f;}
function AXX(a){return B(316);}
var Ed=D(CG);
function Bby(a,b,c){var d=new Ed();Ns(d,a,b,c);return d;}
function Ns(a,b,c,d){E4(a,b,c,d);}
function A3y(a,b,c,d){var e;e=a.Y.e(b,c,d);if(e<0)e=a.k.e(b,c,d);return e;}
function AUf(a,b){LL(a,b);a.Y.Q(b);}
var TX=D(Ed);
function Bdl(a,b,c){var d=new TX();A$D(d,a,b,c);return d;}
function A$D(a,b,c,d){Ns(a,b,c,d);}
function ANf(a,b,c,d){var e;if((b+a.bv.cg()|0)<=d.J()){e=a.bv.bH(b,c);if(e>=1)b=b+e|0;}return a.k.e(b,c,d);}
var Hv=D(0);
var V=D();
function BM(a){J(a);}
function AIC(a,b,c){return 0;}
function ABt(){var a=this;C.call(a);a.fh=null;a.is=null;a.lC=0;a.lw=null;a.oO=0;a.di=0;a.j4=null;a.b9=null;}
function BeC(){var a=new ABt();AL4(a);return a;}
function AL4(a){J(a);a.lC=7;a.di=0;a.lw=Y(C,256);a.j4=Bc(40);a.b9=Bc(40);}
function AU0(a,b,c,d,e){var f,g,h,i,j,k,l,m,n;f=b.data;a.di=0;AKS(f.length,d,e);g=e-d|0;if(g<2)return;if(g<32){h=UF(b,d,e,c);AB$(b,d,e,d+h|0,c);return;}a.fh=b;a.is=c;a.oO=0;i=AVg(g);while(true){j=UF(b,d,e,c);if(j>=i)k=j;else{k=g>i?i:g;AB$(b,d,d+k|0,d+j|0,c);}Z3(a,d,k);X5(a);d=d+k|0;g=g-k|0;if(!g)break;}TO(a);a.fh=null;a.is=null;l=a.lw;m=0;n=a.oO;while(m<n){l.data[m]=null;m=m+1|0;}}
function AB$(b,c,d,e,f){var g,h,i,j,k,l;if(e==c)e=e+1|0;while(e<d){g=b.data;h=g[e];i=e;j=c;while(j<i){k=(j+i|0)>>>1;if(f.cW(h,g[k])<0)i=k;else j=k+1|0;}a:{b:{l=e-j|0;switch(l){case 1:break b;case 2:g[j+2|0]=g[j+1|0];break b;default:}X(b,j,b,j+1|0,l);break a;}g[j+1|0]=g[j];}g[j]=h;e=e+1|0;}}
function UF(b,c,d,e){var f,g,h;f=c+1|0;if(f==d)return 1;a:{g=b.data;h=f+1|0;if(e.cW(g[f],g[c])>=0)while(h<d){if(e.cW(g[h],g[h-1|0])<0)break a;h=h+1|0;}else{while(h<d&&e.cW(g[h],g[h-1|0])<0){h=h+1|0;}A7F(b,c,h);}}return h-c|0;}
function A7F(b,c,d){var e,f,g,h,i;e=d+(-1)|0;while(c<e){f=b.data;g=f[c];h=c+1|0;f[c]=f[e];i=e+(-1)|0;f[e]=g;c=h;e=i;}}
function AVg(b){var c;c=0;while(b>=32){c=c|b&1;b=b>>1;}return b+c|0;}
function Z3(a,b,c){a.j4.data[a.di]=b;a.b9.data[a.di]=c;a.di=a.di+1|0;}
function X5(a){var b;a:{while(true){if(a.di<=1)break a;b=a.di-2|0;if(!(b>=1&&a.b9.data[b-1|0]<=(a.b9.data[b]+a.b9.data[b+1|0]|0))&&!(b>=2&&a.b9.data[b-2|0]<=(a.b9.data[b]+a.b9.data[b-1|0]|0))){if(a.b9.data[b]>a.b9.data[b+1|0])break;}else if(a.b9.data[b-1|0]<a.b9.data[b+1|0])b=b+(-1)|0;M1(a,b);}}}
function TO(a){var b;while(a.di>1){b=a.di-2|0;if(b>0&&a.b9.data[b-1|0]<a.b9.data[b+1|0])b=b+(-1)|0;M1(a,b);}}
function M1(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.j4.data[b];d=a.b9.data[b];e=a.j4.data;f=b+1|0;g=e[f];h=a.b9.data[f];a.b9.data[b]=d+h|0;if(b==(a.di-3|0)){i=a.j4.data;e=a.j4.data;j=b+2|0;i[f]=e[j];a.b9.data[f]=a.b9.data[j];}a.di=a.di-1|0;k=NA(a.fh.data[g],a.fh,c,d,0,a.is);j=c+k|0;l=d-k|0;if(!l)return;m=JR(a.fh.data[(j+l|0)-1|0],a.fh,g,h,h-1|0,a.is);if(!m)return;if(l>m)Ur(a,j,l,g,m);else Wg(a,j,l,g,m);}
function JR(b,c,d,e,f,g){var h,i,j,k,l,m,n,o;h=c.data;i=0;j=1;k=d+f|0;if(g.cW(b,h[k])>0){l=e-f|0;while(true){m=B9(j,l);if(m>=0)break;if(g.cW(b,h[k+j|0])<=0)break;n=(j<<1)+1|0;if(n>0){i=j;j=n;continue;}n=l;i=j;j=n;}if(m<=0)l=j;n=i+f|0;k=l+f|0;}else{l=f+1|0;while(true){n=B9(j,l);if(n>=0)break;if(g.cW(b,h[k-j|0])>0)break;n=(j<<1)+1|0;if(n>0){i=j;j=n;continue;}n=l;i=j;j=n;}if(n<=0)l=j;n=f-l|0;k=f-i|0;}n=n+1|0;while(n<k){o=n+((k-n|0)>>>1)|0;if(g.cW(b,h[d+o|0])>0){n=o+1|0;o=k;}k=o;}return k;}
function NA(b,c,d,e,f,g){var h,i,j,k,l,m,n,o;h=c.data;i=1;j=0;k=d+f|0;if(g.cW(b,h[k])>=0){l=e-f|0;while(true){m=B9(i,l);if(m>=0)break;if(g.cW(b,h[k+i|0])<0)break;m=(i<<1)+1|0;if(m>0){j=i;i=m;continue;}m=l;j=i;i=m;}if(m<=0)l=i;m=j+f|0;n=l+f|0;}else{l=f+1|0;while(true){m=B9(i,l);if(m>=0)break;if(g.cW(b,h[k-i|0])>=0)break;m=(i<<1)+1|0;if(m>0){j=i;i=m;continue;}m=l;j=i;i=m;}if(m<=0)l=i;m=f-l|0;n=f-j|0;}m=m+1|0;while(m<n){o=m+((n-m|0)>>>1)|0;if(g.cW(b,h[d+o|0])<0)n=o;else m=o+1|0;}return n;}
function Wg(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;f=a.fh;g=f.data;h=Ol(a,c);X(f,b,h,0,c);i=0;j=b+1|0;k=d+1|0;g[b]=g[d];l=e+(-1)|0;if(!l){X(h,i,f,j,c);return;}if(c==1){m=h.data;X(f,k,f,j,l);g[j+l|0]=m[i];return;}n=a.is;o=a.lC;a:{b:while(true){p=0;q=0;r=j;s=k;t=i;while(true){m=h.data;if(n.cW(g[s],m[t])<0){j=r+1|0;k=s+1|0;g[r]=g[s];q=q+1|0;p=0;l=l+(-1)|0;if(!l)break a;s=k;i=t;}else{j=r+1|0;i=t+1|0;g[r]=m[t];p=p+1|0;q=0;c=c+(-1)|0;if(c==1){t=i;k=s;break a;}}if((p|q)>=o)break;r=j;t=i;}k=s;while(true){r
=NA(g[k],h,i,c,0,n);if(!r){s=j;t=i;}else{X(h,i,f,j,r);j=j+r|0;t=i+r|0;c=c-r|0;if(c<=1)break a;s=j;}j=s+1|0;u=k+1|0;g[s]=g[k];l=l+(-1)|0;if(!l){k=u;break a;}s=JR(m[t],f,u,l,0,n);if(!s){v=j;k=u;}else{X(f,u,f,j,s);j=j+s|0;k=u+s|0;l=l-s|0;if(!l)break b;v=j;}j=v+1|0;i=t+1|0;g[v]=m[t];c=c+(-1)|0;if(c==1){t=i;break a;}o=o+(-1)|0;if(!((r<7?0:1)|(s<7?0:1)))break;}if(o<0)o=0;o=o+2|0;}}if(o<1)o=1;a.lC=o;if(c==1){X(f,k,f,j,l);g[j+l|0]=m[t];}else{if(!c)G(W(B(317)));X(h,t,f,j,c);}}
function Ur(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;f=a.fh;g=f.data;h=Ol(a,e);X(f,d,h,0,e);i=(b+c|0)-1|0;j=e-1|0;k=(d+e|0)-1|0;l=k+(-1)|0;m=i+(-1)|0;g[k]=g[i];n=c+(-1)|0;if(!n){X(h,0,f,l-j|0,e);return;}if(e==1){o=h.data;p=l-n|0;q=m-n|0;X(f,q+1|0,f,p+1|0,n);g[p]=o[j];return;}r=a.is;s=a.lC;a:{b:while(true){t=0;u=0;v=l;while(true){o=h.data;if(r.cW(o[j],g[m])<0){l=v+(-1)|0;q=m+(-1)|0;g[v]=g[m];t=t+1|0;u=0;n=n+(-1)|0;if(!n)break a;m=q;p=j;}else{l=v+(-1)|0;p=j+(-1)|0;g[v]=o[j];u=u+1|0;t=0;e=e+(-1)|0;if
(e==1){q=m;j=p;break a;}}if((t|u)>=s)break;v=l;j=p;}j=p;while(true){v=n-NA(o[j],f,b,n,n-1|0,r)|0;if(!v){p=l;q=m;}else{l=l-v|0;q=m-v|0;n=n-v|0;X(f,q+1|0,f,l+1|0,v);if(!n)break a;p=l;}l=p+(-1)|0;m=j+(-1)|0;g[p]=o[j];e=e+(-1)|0;if(e==1){j=m;break a;}w=e-JR(g[q],h,0,e,e-1|0,r)|0;if(!w){p=l;j=m;}else{l=l-w|0;j=m-w|0;e=e-w|0;X(h,j+1|0,f,l+1|0,w);if(e<=1)break b;p=l;}l=p+(-1)|0;m=q+(-1)|0;g[p]=g[q];n=n+(-1)|0;if(!n){q=m;break a;}s=s+(-1)|0;if(!((v<7?0:1)|(w<7?0:1)))break;}if(s<0)s=0;s=s+2|0;}}if(s<1)s=1;a.lC=s;if(e
==1){p=l-n|0;q=q-n|0;X(f,q+1|0,f,p+1|0,n);g[p]=o[j];}else{if(!e)G(W(B(317)));X(h,0,f,l-(e-1|0)|0,e);}}
function Ol(a,b){var c,d;a.oO=Bf(a.oO,b);if(a.lw.data.length<b){c=b|b>>1;c=c|c>>2;c=c|c>>4;c=c|c>>8;c=c|c>>16;c=c+1|0;if(c>=0)b=Bq(c,a.fh.data.length>>>1);d=Y(C,b);a.lw=d;}return a.lw;}
function AKS(b,c,d){if(c<=d){if(c<0)G(AJ9(c));if(d<=b)return;G(AJ9(d));}G(W(((((((I()).a(B(318))).j(c)).a(B(319))).j(d)).a(B(24))).b()));}
var XE=D();
function BfG(b){var c,d,e,f,$$je;a:{try{c=Bc0(B(320));d=AOs();if(d!==null){e=d;ABr(new H0,e,c);}}catch($$e){$$je=R($$e);if($$je instanceof Db){f=$$je;break a;}else{throw $$e;}}return;}f.FF();G(f);}
function AOs(){return BfE();}
var Nm=D(0);
var Hf=D(Bm);
var GE=D(BT);
var BjV=null;function AJM(){AJM=N(GE);AVm();}
function BjW(){var a=new GE();Jg(a);return a;}
function BbE(a){var b=new GE();Pm(b,a);return b;}
function Jg(a){AJM();B_(a);a.dZ(X9(),1);}
function Pm(a,b){AJM();B_(a);}
function AVm(){BjV=BbE(0);}
function X9(){var jsObj=new Bullet.btCollisionWorld();return Bullet.getPointer(jsObj);}
var FT=D(GE);
var BjX=null;function AG$(){AG$=N(FT);AIv();}
function BeA(a){var b=new FT();Tn(b,a);return b;}
function BjY(){var a=new FT();HL(a);return a;}
function Tn(a,b){AG$();Jg(a);}
function HL(a){AG$();Jg(a);}
function A0v(a,b){return U8(a.bY,b);}
function AY5(a,b){var c,d;c=a.bY;d=b.de();Ux(c,d);}
function AXI(a,b){var c,d;c=a.bY;d=b.de();Zz(c,d);}
function ASV(a,b){var c,d,e;Fl();Gq(b,Bg6);c=Bg6;d=a.bY;e=c.de();Qi(d,e);}
function AIv(){BjX=BeA(0);}
function U8(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btDynamicsWorld);var returnedJSObj=jsObj.stepSimulation(c);return returnedJSObj;}
function Ux(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btDynamicsWorld);jsObj.addRigidBody(c);}
function Zz(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btDynamicsWorld);jsObj.removeRigidBody(c);}
function Qi(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btDynamicsWorld);jsObj.setGravity(c);}
var GB=D();
var BjZ=null;function UL(a){J(a);}
function DV(){return BjZ;}
function AMc(b){BjZ=b;}
var Xi=D();
function Nk(b){var c,d,e,f,g;if(b===null)return null;c=b.data;d=c.length;e=new Array(d);f=0;while(f<d){g=c[f];e[f]=g;f=f+1|0;}return e;}
function BP(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Gk(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function OY(){Q.call(this);this.QY=null;}
function Bex(a){var b=new OY();A63(b,a);return b;}
function A63(a,b){a.QY=b;Be(a);}
function AG2(a,b){return Uw(b);}
function C0(){var a=this;C.call(a);a.AA=null;a.M6=null;}
function GG(a,b,c){var d,e,f,g;d=c.data;J(a);LE(b);e=d.length;f=0;while(f<e){g=d[f];LE(g);f=f+1|0;}a.AA=b;a.M6=c.go();}
function LE(b){var c,d;if(b.bN())G(Yl(b));if(!AAX(b.f(0)))G(Yl(b));c=1;while(c<b.i()){a:{d=b.f(c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AAX(d))break a;else G(Yl(b));}}c=c+1|0;}}
function AAX(b){var c;a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}c=1;break a;}c=0;}return c;}
function OZ(b){var c;if(b===null)G(W(B(321)));LE(b);c=(Vn()).W(b.F1());if(c!==null)return c;G(Bf5(b));}
function Z_(a){return a.AA;}
function ZK(a,b){var c,d,e,$$je;a:{try{c=a.lL();Di();d=BgW;d=Od(c,d);c=BgW;d=Lf(d,c);d=WW(d,b);}catch($$e){$$je=R($$e);if($$je instanceof D0){e=$$je;break a;}else{throw $$e;}}return d;}G(AZU(B(322),e));}
function UI(a,b){var c,d,e,$$je;a:{try{c=a.mw();Di();d=BgW;d=K3(c,d);c=BgW;d=LS(d,c);d=XW(d,b);}catch($$e){$$je=R($$e);if($$je instanceof D0){e=$$je;break a;}else{throw $$e;}}return d;}G(AZU(B(322),e));}
function RO(){var a=this;C0.call(a);a.uL=0;a.s2=0;}
function RF(a,b,c){var d=new RO();AFb(d,a,b,c);return d;}
function AFb(a,b,c,d){GG(a,b,Y(BN,0));a.uL=c;a.s2=d;}
function AKE(a){return Bdj(a,a.uL,a.s2);}
function ADY(a){return Bdg(a,a.uL,a.s2);}
var BZ=D();
function Bch(){var a=new BZ();C7(a);return a;}
function C7(a){J(a);}
function AQw(a,b){}
function AWi(a,b){}
function PD(){var a=this;BZ.call(a);a.EL=null;a.rk=null;}
function A_2(a,b){var c=new PD();AY3(c,a,b);return c;}
function AY3(a,b,c){a.rk=b;a.EL=c;C7(a);}
function A4r(a,b){}
function AZm(a,b){(Eh()).gh((((I()).a(B(323))).a(a.EL)).b());}
function ANc(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=c.FE(B(324));e=d.data;f=new E5;g=e.length;Oq(f,g);h=0;while(true){if(h>=g){i=0;while(i<f.h){j=f.l(i);if(a.rk.KS(j.sy)){j.J$=j.BO;j.JW=1;}else a.rk.Gn(1,j.sy,j.D1,j.xB,Ba9(a));i=i+1|0;}return 0;}k=e[h];l=k.FE(B(13));m=l.data;if(m.length!=4)break;H3();n=Bj0;if(m[0].z(B(325)))n=Bj1;if(m[0].z(B(326)))n=Bj2;if(m[0].z(B(327)))n=Bj3;if(m[0].z(B(135)))n=Bj4;o=ACe(m[2]);if(n===Bj3&&!(CD()).ON())o=Ba;f.F(Bec(m[1].MN(),n,o,m[3]));h=h+1|0;}G(U(B(328)));}
function AFH(a,b,c){return a.Jd(b,c);}
var PU=D();
function A$u(b){var c,d,e,f,g,h,i,j,k;c=Bcc(b.rz());d=Wx(c);e=Bc(d*2|0);f=0;g=0;h=0;i=0;while(i<d){j=e.data;g=g+Pd(c)|0;h=h+Pd(c)|0;k=f+1|0;j[f]=g;f=k+1|0;j[k]=h;i=i+1|0;}return e;}
function I$(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function AUe(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=Y(Mt,16384);d=Cj(16384);e=0;f=0;g=0;h=0;while(h<b.i()){i=I$(b.f(h));if(i==64){h=h+1|0;i=I$(b.f(h));j=0;k=1;l=0;while(l<3){h=h+1|0;m=I$(b.f(h));j=j|Cg(k,m);k=k*64|0;l=l+1|0;}}else if(i<32)j=1;else{i=(i-32|0)<<24>>24;h=h+1|0;j=I$(b.f(h));}if(!i&&j>=128){if(e>0){n=c.data;o=f+1|0;n[f]=AIA(g,g+e|0,Oi(d,e));f=o;}g=g+(e+j|0)|0;e=0;}else{p=d.data;o=e+j|0;if(o<p.length)q=f;else{n=c.data;q=f+1|0;n[f]=AIA(g,g+e|0,Oi(d,e));g=g+o|0;e=0;}while(true){o=j+(-1)|0;if(j<=0)break;r
=e+1|0;p[e]=i;e=r;j=o;}f=q;}h=h+1|0;}return I8(c,f);}
var Hi=D(0);
function Sh(){var a=this;C.call(a);a.wQ=null;a.wR=null;a.wO=0;a.wP=null;}
function BcQ(a,b,c,d){var e=new Sh();A0k(e,a,b,c,d);return e;}
function A0k(a,b,c,d,e){J(a);a.wQ=b;a.wR=c;a.wO=d;a.wP=e;}
function AKA(a){ANk(a.wQ,a.wR,a.wO,a.wP);}
function PE(){var a=this;BZ.call(a);a.o8=null;a.BY=null;a.EO=null;}
function BbR(a,b,c){var d=new PE();AVM(d,a,b,c);return d;}
function AVM(a,b,c,d){a.EO=b;a.o8=c;a.BY=d;C7(a);}
function A4d(a,b){a.o8.ek(b);}
function A3g(a,b){a.o8.ck(b);}
function A7x(a,b,c){var d;d=a.EO;H3();d.yJ(Bj2,a.BY,c);a.o8.ct(b,c);return 0;}
function A8v(a,b,c){return a.hY(b,c);}
var LD=D(0);
function W0(){C.call(this);this.mf=null;}
function BcY(a){var b=new W0();ANJ(b,a);return b;}
function ANJ(a,b){a.mf=b;J(a);}
function A0w(a,b){a.mf.gW.fx();QL(b,a.mf.gW);a.mf.In(a.mf.gW);}
function A4m(a,b){a.PK(b);}
function PF(){var a=this;BZ.call(a);a.m9=null;a.BU=null;a.EA=null;a.ws=null;}
function BcK(a,b,c,d){var e=new PF();AD1(e,a,b,c,d);return e;}
function AD1(a,b,c,d,e){a.ws=b;a.m9=c;a.BU=d;a.EA=e;C7(a);}
function ALE(a,b){a.m9.ek(b);}
function A7E(a,b){a.m9.ck(b);}
function APo(a,b,c){a.ws.yJ(a.BU,a.EA,c);a.m9.ct(b,c);return 0;}
var J6=D();
var Bj5=null;function Bd3(){Bd3=N(J6);AQg();}
function AQg(){Bj5=Bc((Mj()).data.length);Bj5.data[BC(Bj0)]=1;Bj5.data[BC(Bj1)]=2;Bj5.data[BC(Bj2)]=3;Bj5.data[BC(Bj3)]=4;Bj5.data[BC(Bj4)]=5;}
var ABG=D();
function A5w(b,c){if(b===c)return 1;return b!==null?b.z(c):c!==null?0:1;}
function Uv(){C.call(this);this.cf=null;}
function APj(){var a=new Uv();A6S(a);return a;}
function A_E(b){if(b<0.0)b=0.0;else if(b>1.0)b=1.0;return b;}
function A6S(a){J(a);a.cf=Ca(18);}
function AWY(a,b){return a.Qe(b.s,b.r,b.t);}
function AV6(a,b,c,d){var e;e=0;while(e<18){a.cf.data[e]=b;a.cf.data[e+1|0]=c;a.cf.data[e+2|0]=d;e=e+3|0;}return a;}
function A$k(a){var b;b=0;while(b<a.cf.data.length){a.cf.data[b]=A_E(a.cf.data[b]);b=b+1|0;}return a;}
function A76(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s;h=e*e;i=f*f;j=g*g;k=h+i+j;if(k===0.0)return a;l=1.0/k*(k+1.0);m=b*l;n=c*l;o=d*l;p=e<=0.0?3:0;q=a.cf.data;q[p]=q[p]+h*m;q=a.cf.data;r=p+1|0;q[r]=q[r]+h*n;q=a.cf.data;r=p+2|0;q[r]=q[r]+h*o;r=f<=0.0?9:6;q=a.cf.data;q[r]=q[r]+i*m;q=a.cf.data;s=r+1|0;q[s]=q[s]+i*n;q=a.cf.data;r=r+2|0;q[r]=q[r]+i*o;r=g<=0.0?15:12;q=a.cf.data;q[r]=q[r]+j*m;q=a.cf.data;s=r+1|0;q[s]=q[s]+j*n;q=a.cf.data;r=r+2|0;q[r]=q[r]+j*o;return a;}
function A4g(a,b,c){return a.EZ(b.s,b.r,b.t,c.n,c.o,c.q);}
function AF2(a,b,c,d,e){var f;f=e/(1.0+d.GR(c));return a.EZ(b.s*f,b.r*f,b.t*f,d.n-c.n,d.o-c.o,d.q-c.q);}
var H8=D(Ja);
function BeH(){var a=new H8();Rv(a);return a;}
function Rv(a){Qb(a);}
function QV(a){return (P5(a)).bF(48,57);}
var JI=D(H8);
function Bdx(){var a=new JI();S_(a);return a;}
function S_(a){Rv(a);}
function Vr(a){return (((QV(a)).bF(33,64)).bF(91,96)).bF(123,126);}
var Zc=D(JI);
function Bdn(){var a=new Zc();AQ0(a);return a;}
function AQ0(a){S_(a);}
function AM5(a){return (Vr(a)).cG(32);}
var AAY=D(T);
function Bfz(){var a=new AAY();A4L(a);return a;}
function A4L(a){Bo(a);}
function ARO(a){return BcG(a);}
var YW=D(Dr);
function Baq(a,b){var c=new YW();AQ9(c,a,b);return c;}
function AQ9(a,b,c){Gc(a,b,c);}
function AGe(a,b,c,d){var e,f,g,h,i;e=a.bQ.df();f=!d.lI()?d.dI():0;a:{g=a.k.e(b,c,d);if(g>=0){d.by(a.bm,b);h=0;while(true){if(h>=e)break a;i=a.bQ.l(h);if(i.cI(f,b,c,d)>=0){d.by(a.bm,(-1));return g;}h=h+1|0;}}}return (-1);}
function A_G(a,b){return 0;}
function AN_(a){return B(329);}
function Zf(){var a=this;BJ.call(a);a.cz=null;a.tE=null;a.rQ=null;}
function Ba7(a){var b=new Zf();AYM(b,a);return b;}
function AYM(a,b){var c;C2(a);a.cz=b.b();a.bO=b.i();a.tE=A4Y(a.bO);a.rQ=A4Y(a.bO);c=0;while(c<(a.bO-1|0)){a.tE.os(a.cz.f(c),(a.bO-c|0)-1|0);a.rQ.os(a.cz.f((a.bO-c|0)-1|0),(a.bO-c|0)-1|0);c=c+1|0;}}
function AG9(a,b,c){return !a.vd(c,b)?(-1):a.bO;}
function AWN(a,b,c,d){var e,f;e=d.J();while(true){if(b>e)return (-1);f=a.Oc(c,b,e);if(f<0)return (-1);if(a.k.e(f+a.bO|0,c,d)>=0)break;b=f+1|0;}return f;}
function A0y(a,b,c,d,e){var f;while(true){if(c<b)return (-1);f=a.LI(d,b,c);if(f<0)return (-1);if(a.k.e(f+a.bO|0,d,e)>=0)break;c=f+(-1)|0;}return f;}
function AOy(a){return (((I()).a(B(330))).a(a.cz)).b();}
function AJX(a,b){var c,d,e,f,g;if(b instanceof Dz)return b.ps()!=a.cz.f(0)?0:1;if(b instanceof Dx)return b.bH(0,a.cz.ce(0,1))<=0?0:1;if(!(b instanceof C4)){if(!(b instanceof Dv))return 1;a:{if(a.cz.i()>1){c=b;d=c.sU();e=a.cz.f(0);c=a.cz;f=c.f(1);if(d==Dh(e,f)){e=1;break a;}}e=0;}return e;}b:{c:{c=b;if(!c.p(a.cz.f(0))){g=a.cz;if(g.i()<=1)break c;g=a.cz;e=Dh(g.f(0),a.cz.f(1));if(!c.p(e))break c;}e=1;break b;}e=0;}return e;}
function A9g(a,b,c,d){var e,f;e=a.cz.f(a.bO-1|0);while(true){if(c>(d-a.bO|0))return (-1);f=b.f((c+a.bO|0)-1|0);if(f==e&&a.vd(b,c))break;c=c+a.tE.b2(f)|0;}return c;}
function A8p(a,b,c,d){var e,f,g,h;e=a.cz.f(0);f=b.i();g=(f-d|0)-a.bO|0;if(g<=0)d=d+g|0;while(true){if(d<c)return (-1);h=b.f(d);if(h==e&&a.vd(b,d))break;d=d-a.rQ.b2(h)|0;}return d;}
function AKk(a,b,c){var d;d=0;while(d<a.bO){if(b.f(d+c|0)!=a.cz.f(d))return 0;d=d+1|0;}return 1;}
var RG=D(C0);
function Bb6(){var a=new RG();AIF(a);return a;}
function AIF(a){GG(a,B(331),Y(BN,0));}
function AXJ(a){return Bft(a);}
function AUH(a){return Bek(a);}
function Nf(){var a=this;C.call(a);a.cP=null;a.b8=0;}
var Bj6=null;function C5(){C5=N(Nf);A4A();}
function ATn(a){var b=new Nf();XL(b,a);return b;}
function Wn(b,c){var d;C5();d=b>=0?1:2;while(true){b=b/c|0;if(!b)break;d=d+1|0;}return d;}
function XL(a,b){C5();J(a);if(b>=0){a.cP=BW(b);return;}G(A9M());}
function IP(a,b){var c,d;c=((a.cP.data.length>>1)+a.cP.data.length|0)+2|0;if(b>c)c=b;d=BW(c);X(a.cP,0,d,0,a.b8);a.cP=d;}
function N5(a){var b,c,d,e;b=a.b8+4|0;if(b>a.cP.data.length)IP(a,b);c=a.cP.data;d=a.b8;a.b8=d+1|0;c[d]=110;c=a.cP.data;e=a.b8;a.b8=e+1|0;c[e]=117;c=a.cP.data;e=a.b8;a.b8=e+1|0;c[e]=108;c=a.cP.data;e=a.b8;a.b8=e+1|0;c[e]=108;}
function CJ(a,b){var c,d;if(a.b8==a.cP.data.length)IP(a,a.b8+1|0);c=a.cP.data;d=a.b8;a.b8=d+1|0;c[d]=b;}
function IH(a,b){var c,d;if(b===null){N5(a);return;}c=b.i();d=a.b8+c|0;if(d>a.cP.data.length)IP(a,d);b.pv(0,c,a.cP,a.b8);a.b8=d;}
function AD5(a){if(!a.b8)return B(101);return F1(a.cP,0,a.b8);}
function APt(a,b){CJ(a,b);return a;}
function AP5(a,b){return a.GU(b,0);}
function AGM(a,b,c){return a.P4(b,c,48);}
function AEi(a,b,c,d){var e;if(b==(-2147483648)){IH(a,B(332));return a;}if(b<0){CJ(a,45);b= -b|0;}a:{if(c>1){e=c-Wn(b,10)|0;while(true){if(e<=0)break a;a.ly(d);e=e+(-1)|0;}}}if(b>=10000){if(b>=1000000000){C5();CJ(a,Bj6.data[Cp(E_(AU$(O(b),Cd(1410065408, 2)),O(1000000000)))]);}if(b>=100000000){C5();CJ(a,Bj6.data[(b%1000000000|0)/100000000|0]);}if(b>=10000000){C5();CJ(a,Bj6.data[(b%100000000|0)/10000000|0]);}if(b>=1000000){C5();CJ(a,Bj6.data[(b%10000000|0)/1000000|0]);}if(b>=100000){C5();CJ(a,Bj6.data[(b%1000000
|0)/100000|0]);}C5();CJ(a,Bj6.data[(b%100000|0)/10000|0]);}if(b>=1000){C5();CJ(a,Bj6.data[(b%10000|0)/1000|0]);}if(b>=100){C5();CJ(a,Bj6.data[(b%1000|0)/100|0]);}if(b>=10){C5();CJ(a,Bj6.data[(b%100|0)/10|0]);}C5();CJ(a,Bj6.data[b%10|0]);return a;}
function A3G(a,b){if(b===null)N5(a);else IH(a,b.b());return a;}
function A0N(a,b){IH(a,b);return a;}
function A4A(){Bj6=I5([48,49,50,51,52,53,54,55,56,57]);}
var DD=D();
var Bg0=0;var Bg1=0;var Bj7=0;var Bj8=null;var Bj9=null;var Bj$=null;var Bj_=null;function Lp(){Lp=N(DD);AYS();}
function XV(){Lp();AA7(0);}
function AA7(b){Lp();ABT(b,1);}
function ABT(b,c){var d;Lp();if(Bj7)return;Bj7=1;Bg0=b;Bg1=c;d=Bullet.MyClassHelper.prototype.getBTVersion();if(d==285)return;G(U(((((((I()).a(B(333))).j(d)).a(B(334))).j(285)).a(B(24))).b()));}
function AYS(){Bg0=0;Bg1=1;Bj7=0;Bj8=BaY();Bj9=Bp();Bj$=BL();Bj_=BL();}
var Ud=D(Bm);
function Qy(){var a=new Ud();AZ1(a);return a;}
function AZ1(a){Cx(a);}
var MA=D(B5);
function Ex(a,b){var c=new MA();A7b(c,a,b);return c;}
function A7b(a,b,c){JV(a,b,c);}
var FP=D(CI);
function Bgf(a,b,c){var d=new FP();Ml(d,a,b,c);return d;}
function Ml(a,b,c,d){Fd(a,b,c,d);}
function A75(a,b,c,d){var e;if(!a.Y.ba(d))return a.k.e(b,c,d);e=a.Y.e(b,c,d);if(e>=0)return e;return a.k.e(b,c,d);}
function A9F(a,b){LL(a,b);a.Y.Q(b);}
var Ih=D(0);
function NU(){var a=this;C.call(a);a.dA=null;a.lg=null;a.ui=null;a.nG=null;a.wD=0;a.nB=0;a.tq=0;a.FS=0;a.eb=0;a.ID=0;a.N6=0;a.d5=0;a.PU=0;a.hv=0;a.u1=0;}
function Bka(a,b,c,d,e,f){var g=new NU();Sn(g,a,b,c,d,e,f);return g;}
function Sn(a,b,c,d,e,f,g){var h;J(a);a.hv=(-1);h=e+1|0;a.wD=h;a.dA=Bc(h*2|0);a.lg=Bc(g);IG(a.lg,(-1));if(f>0)a.ui=Bc(f);IG(a.dA,(-1));a.tJ(b,c,d);}
function ASd(a,b,c){a.lg.data[b]=c;}
function A3a(a,b){return a.lg.data[b];}
function AUI(a){return a.pc(0);}
function ALL(a,b){Ne(a,b);return a.dA.data[(b*2|0)+1|0];}
function AYv(a,b,c){a.dA.data[b*2|0]=c;}
function AWO(a,b,c){a.dA.data[(b*2|0)+1|0]=c;}
function A6p(a,b){return a.dA.data[b*2|0];}
function APB(a,b){return a.dA.data[(b*2|0)+1|0];}
function AEI(a,b){if(a.lD(b)<0)return null;return (a.nG.d_(a.lD(b),a.pc(b))).b();}
function A2m(a,b){var c,d;c=a.jq(b);d=a.nE(b);if((d|c|(d-c|0))>=0&&d<=a.nG.i())return (a.nG.d_(c,d)).b();return null;}
function APu(a){return a.lD(0);}
function AGs(a,b){Ne(a,b);return a.dA.data[b*2|0];}
function AMF(a){if(a.dA.data[0]==(-1)){a.dA.data[0]=a.eb;a.dA.data[1]=a.eb;}a.hv=a.pR();}
function AVb(a,b){return a.ui.data[b];}
function AXW(a,b,c){a.ui.data[b]=c;}
function Ne(a,b){if(!a.nB)G(GX());if(b>=0&&b<a.wD)return;G(Bg(Ji(b)));}
function A9P(a){a.nB=1;}
function A9R(a){return a.nB;}
function A$I(a,b,c,d){a.nB=0;a.u1=2;IG(a.dA,(-1));IG(a.lg,(-1));if(b!==null)a.nG=b;if(c>=0)Uj(a,c,d);a.eb=a.tq;}
function AG3(a){a.tJ(null,(-1),(-1));}
function Uj(a,b,c){a.tq=b;a.FS=c;}
function A7o(a,b){a.eb=b;if(a.hv>=0)b=a.hv;a.hv=b;}
function AXm(a){return a.tq;}
function A3z(a){return a.FS;}
function AZa(a,b){a.u1=b;}
function AIW(a){return a.u1;}
function A1g(a){return a.N6;}
function AU_(a){return a.ID;}
function AV4(a){return a.hv;}
function Q0(){var a=this;C.call(a);a.dy=null;a.cS=null;a.da=null;a.cw=null;a.dJ=null;a.kP=null;a.BT=null;}
function A_8(){var a=new Q0();A33(a);return a;}
function A33(a){J(a);a.dy=BL();a.cS=A8N();}
function PX(){var a=this;BJ.call(a);a.t9=null;a.xt=0;}
function AJO(a){var b=new PX();AN3(b,a);return b;}
function AN3(a,b){C2(a);a.t9=b.mh();a.xt=b.bD;}
function A2u(a,b,c){var d,e;d=a.t9;e=DB(c.f(b));return !d.p(Dq(e))?(-1):1;}
function AXb(a){return ((((I()).a(B(335))).a(!a.xt?B(56):B(57))).a(a.t9.b())).b();}
function JB(){var a=this;C.call(a);a.e0=0;a.tf=0;a.tg=0;a.cv=0;a.cN=0;a.vH=0.0;a.p$=0.0;a.Bp=0.0;a.tm=0.0;a.dr=0;a.jg=0;a.gz=0;a.iH=null;a.op=0;a.jX=0;}
function AFC(){var a=new JB();A77(a);return a;}
function A77(a){J(a);a.jX=0;}
function A2O(a,b){var c;if(a.iH!==null){c=a.iH.data[b>>>9];if(c!==null)return c.data[b&511];}return 0;}
function A6j(a,b,c){var d,e,f;if(a.iH===null)a.iH=Y($rt_arraycls($rt_bytecls()),128);d=a.iH.data;e=b>>>9;f=d[e];if(f===null){d=a.iH.data;f=Cj(512);d[e]=f;}f.data[b&511]=c<<24>>24;}
function AJB(a){return Il(a.e0&65535);}
function Vm(){BZ.call(this);this.IH=null;}
function Bf8(a){var b=new Vm();AWv(b,a);return b;}
function AWv(a,b){a.IH=b;C7(a);}
function A8d(a,b,c){A9I(BcR(a));return 1;}
function AH0(a,b){(CD()).eu();}
function Vk(){var a=this;BZ.call(a);a.uF=null;a.pN=null;}
function Ba1(a,b){var c=new Vk();ASi(c,a,b);return c;}
function ASi(a,b,c){a.pN=b;a.uF=c;C7(a);}
function AOZ(a,b,c){a.pN.uj=1;AFc(a.pN,a.uF);return 1;}
function A3K(a,b){(CD()).eu();A6U(a.pN,a.uF);}
function VB(){Q.call(this);this.FZ=null;}
function BbO(a){var b=new VB();ALf(b,a);return b;}
function ALf(a,b){a.FZ=b;Be(a);}
function A$6(a,b){return UX(b);}
function Vl(){BZ.call(this);this.HN=null;}
function Baa(a){var b=new Vl();AWD(b,a);return b;}
function AWD(a,b){a.HN=b;C7(a);}
function AKB(a,b,c){var d;d=Wr(c);A1l(d,BeM(a));return 1;}
function A7U(a,b){(CD()).eu();}
function AUG(a,b,c){return a.hY(b,c);}
var KK=D(Bm);
function Jd(a,b){var c=new KK();AD8(c,a,b);return c;}
function U(a){var b=new KK();QC(b,a);return b;}
function AD8(a,b,c){P1(a,b,c);}
function QC(a,b){EF(a,b);}
function Fo(){var a=this;C.call(a);a.ej=0;a.pb=0;a.lV=null;a.lq=null;a.oz=null;a.nm=null;a.mD=0.0;}
var Bkb=0.0;function N0(){N0=N(Fo);AJV();}
function KD(a,b,c){N0();J(a);P6();a.lV=Bkc;a.lq=Bkc;AUF();a.oz=Bkd;a.nm=Bkd;a.mD=1.0;a.ej=b;a.pb=c;}
function A3Z(a){Bip.sF(a.ej,a.pb);}
function ARg(a,b){Bip.rG(33984+b|0);Bip.sF(a.ej,a.pb);}
function AJg(a){return a.pb;}
function ASI(a,b,c){a.wx(b,c,0);}
function AOX(a,b,c,d){if(b!==null&&!(!d&&a.oz===b)){Bip.ji(a.ej,10242,G8(b));a.oz=b;}if(c!==null&&!(!d&&a.nm===c)){Bip.ji(a.ej,10243,G8(c));a.nm=c;}}
function AE2(a,b,c){a.Do(b,c,0);}
function ADC(a,b,c,d){if(b!==null&&!(!d&&a.lV===b)){Bip.ji(a.ej,10241,EE(b));a.lV=b;}if(c!==null&&!(!d&&a.lq===c)){Bip.ji(a.ej,10240,EE(c));a.lq=c;}}
function AZW(a,b,c){a.lV=b;a.lq=c;a.ew();Bip.ji(a.ej,10241,EE(b));Bip.ji(a.ej,10240,EE(c));}
function AIX(a,b,c){var d,e;d=Yw();if(d===1.0)return 1.0;e=Ju(b,d);if(!c&&SK(e,a.mD,0.10000000149011612))return a.mD;Biq.OY(3553,34046,e);a.mD=e;return e;}
function Yw(){var b,c;N0();if(Bkb>0.0)return Bkb;if(!Bim.tZ(B(336))){Bkb=1.0;return 1.0;}b=HX(16);b.cZ(0);b.cm(CV(b));Biq.ML(34047,b);c=b.oa(0);Bkb=c;return c;}
function ACu(b,c){N0();ACs(b,c,0);}
function ACs(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;N0();if(c===null)return;if(!c.x4())c.zZ();e=c.Ol();O6();if(e===Bih){c.Hc(b);return;}f=c.Qw();g=c.Fm();if(c.f8()===f.f8())h=f;else{h=O1(f.bo(),f.bl(),c.f8());Gv();h.D5(BjL);h.zi(f,0,0,0,0,f.bo(),f.bl());if(c.Fm())f.iz();g=1;}Bip.GP(3317,1);if(c.QR())AAW(b,h,h.bo(),h.bl());else{i=Bip;j=h.ky();k=h.bo();l=h.bl();m=h.l0();n=h.le();o=h.kA();i.kB(b,d,j,k,l,0,m,n,o);}if(g)h.iz();}
function AJV(){Bkb=0.0;}
function LG(){Fo.call(this);this.hP=null;}
var Bke=null;function FY(){FY=N(LG);A6A();}
function Bet(a){var b=new LG();YZ(b,a);return b;}
function ARL(a,b){var c=new LG();AAv(c,a,b);return c;}
function Bkf(a,b,c){var d=new LG();H$(d,a,b,c);return d;}
function Bkg(a){var b=new LG();JM(b,a);return b;}
function Bkh(a,b,c){var d=new LG();NI(d,a,b,c);return d;}
function YZ(a,b){FY();H$(a,b,null,0);}
function AAv(a,b,c){FY();H$(a,b,null,c);}
function H$(a,b,c,d){FY();JM(a,AS3(b,c,d));}
function JM(a,b){FY();NI(a,3553,Bip.Ja(),b);}
function NI(a,b,c,d){FY();KD(a,b,c);a.Nd(d);if(d.qI())Pq(Bg2,a);}
function AR_(a,b){if(a.hP!==null&&b.qI()!=a.hP.qI())G(U(B(337)));a.hP=b;if(!b.x4())b.zZ();a.ew();ACu(3553,b);a.Do(a.lV,a.lq,1);a.wx(a.oz,a.nm,1);a.P8(a.mD,1);Bip.sF(a.ej,0);}
function AOd(a){return a.hP.bo();}
function A8R(a){return a.hP.bl();}
function ANu(a){if(!(a.hP instanceof Ho))return PW(a);return a.hP.b();}
function Pq(b,c){var d;FY();d=Bke.W(b);if(d===null)d=Bp();d.F(c);Bke.x(b,d);}
function A6A(){Bke=C6();}
var LC=D(0);
function W1(){C.call(this);this.mq=null;}
function Bce(a){var b=new W1();ANe(b,a);return b;}
function ANe(a,b){a.mq=b;J(a);}
function A4N(a,b){a.mq.gW.fx();a.mq.Q0(a.mq.gW);SL(a.mq.gW,b);}
function ATJ(a,b){a.Nt(b);}
var WL=D();
function ADy(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function A4K(b,c){return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&AAa(b.constructor,c)?1:0;}
function AAa(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AAa(d[e],c))return 1;e=e+1|0;}return 0;}
function Bdw(b){b.fe();}
function AMJ(b){AQF(b,0);}
function AQF(b,c){return setTimeout(function(){Bdw(b);},c);}
function ADj(){return ALs();}
function AA9(b){return A0i(String.fromCharCode(b));}
function A7Y(b){return b.$meta.primitive?1:0;}
function ACy(b){return b.$meta.item;}
function AQB(b){return $rt_str(b.$meta.name);}
function ALs(){return [];}
function F5(){C.call(this);this.Kz=null;}
var BgX=null;var BgW=null;var BgV=null;function Di(){Di=N(F5);AMP();}
function Uq(a){var b=new F5();AAR(b,a);return b;}
function AAR(a,b){Di();J(a);a.Kz=b;}
function AMP(){BgX=Uq(B(338));BgW=Uq(B(339));BgV=Uq(B(340));}
function Ge(){C.call(this);this.z0=0;}
var Bki=null;var Bkj=null;var Bkk=null;function A_1(){A_1=N(Ge);AWS();}
function AO2(a){var b=new Ge();S0(b,a);return b;}
function S0(a,b){A_1();J(a);a.z0=b;}
function A0T(a){return a.z0;}
function AWS(){Bki=AO2(1);Bkj=AO2(0);Bkk=F($rt_booleancls());}
var C3=D(Bm);
function CL(){var a=new C3();FX(a);return a;}
function W(a){var b=new C3();ACW(b,a);return b;}
function FX(a){Cx(a);}
function ACW(a,b){EF(a,b);}
function Tv(){C3.call(this);this.Gy=null;}
function Yl(a){var b=new Tv();ARh(b,a);return b;}
function ARh(a,b){FX(a);a.Gy=b;}
function Ub(){var a=this;C.call(a);a.bA=null;a.kt=0;a.f3=null;a.ec=null;a.bM=null;a.bL=null;a.o3=null;a.o4=null;a.nv=null;a.mG=0;a.lx=null;a.nH=0;a.ok=null;a.oD=null;a.bB=null;a.fi=Ba;a.ju=0;}
function BaH(a){var b=new Ub();AHQ(b,a);return b;}
function AJ8(b){var c,d,e,f,g;c=AWn();d=0.0;e=b.detail;f=b.wheelDelta;if(c.firefox?1:0)d=(c.macOS?1:0)?1.0*e:1.0*e/3.0;else if(c.opera?1:0)d=!(c.linux?1:0)?(-1.0)*f/40.0:(-1.0)*f/80.0;else if(!(!(c.chrome?1:0)&&!(c.safari?1:0)&&!(c.IE?1:0))){d=(-1.0)*f;g=d/120.0;if(CH(g)>=1.0)d=g;else if(!(c.windows?1:0))d=!(c.macOS?1:0)?g:d/3.0;}return d;}
function AHQ(a,b){J(a);a.kt=0;a.f3=BdF(20);a.ec=OD(20);a.bM=Bc(20);a.bL=Bc(20);a.o3=Bc(20);a.o4=Bc(20);a.nv=BfV();a.mG=0;a.lx=OD(256);a.nH=0;a.ok=OD(256);a.oD=OD(5);a.ju=1;a.bA=b;Y7(a);}
function Y7(a){var b;b=a.bA.ownerDocument;b.addEventListener("mousedown",BP(a,"handleEvent"),!!0);b.addEventListener("mouseup",BP(a,"handleEvent"),!!0);b.addEventListener("mousemove",BP(a,"handleEvent"),!!0);b.addEventListener("wheel",BP(a,"handleEvent"),!!0);b.addEventListener("keydown",BP(a,"handleEvent"),!!0);b.addEventListener("keyup",BP(a,"handleEvent"),!!0);b.addEventListener("keypress",BP(a,"handleEvent"),!!0);a.bA.addEventListener("touchstart",BP(a,"handleEvent"),!!1);a.bA.addEventListener("touchmove",
BP(a,"handleEvent"),!!1);a.bA.addEventListener("touchcancel",BP(a,"handleEvent"),!!1);a.bA.addEventListener("touchend",BP(a,"handleEvent"),!!1);}
function A2D(a,b){ACJ(a,b);YG(a,b);}
function ACJ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;a:{c=$rt_str(b.type);if(c.z(B(341))){d=b;e=b.target;f=a.bA;g=e!==f?0:1;if(g&&!a.ec.data[0]){a.ju=1;a.kt=1;a.ec.data[0]=1;h=Js(d.button);a.nv.JC(h);a.oD.data[h]=1;a.o3.data[0]=0;a.o4.data[0]=0;if(!a.so()){i=a.ko(d,a.bA);j=a.kg(d,a.bA);a.bM.data[0]=i;a.bL.data[0]=j;}else{k=a.bM.data;k[0]=k[0]+Ff(a,d)|0;k=a.bL.data;k[0]=k[0]+EQ(a,d)|0;}a.fi=CE();if(a.bB!==null)a.bB.iq(a.bM.data[0],a.bL.data[0],0,Js(d.button));b.preventDefault();b.stopPropagation();break a;}l
=a.ko(d,a.bA);m=a.kg(d,a.bA);if(!(l>=0.0&&l<=Bim.bo()&&m>=0.0&&m<=Bim.bl()))a.ju=0;return;}if(c.z(B(342))){d=b;if(!a.ec.data[0])return;a.nv.Nc(Js(d.button));k=a.ec;k.data[0]=a.nv.ex<=0?0:1;if(a.so()){a.g5(0,Ff(a,d)|0,EQ(a,d)|0);k=a.bM.data;k[0]=k[0]+Ff(a,d)|0;k=a.bL.data;k[0]=k[0]+EQ(a,d)|0;}else{a.g5(0,a.ko(d,a.bA)-a.bM.data[0]|0,a.kg(d,a.bA)-a.bL.data[0]|0);a.bM.data[0]=a.ko(d,a.bA);a.bL.data[0]=a.kg(d,a.bA);}a.fi=CE();a.ec.data[0]=0;if(a.bB!==null)a.bB.hQ(a.bM.data[0],a.bL.data[0],0,Js(d.button));}else if
(!c.z(B(343))){if(c.z(B(344))){n=b;if(a.bB!==null){o=AJ8(n);a.bB.oJ(0.0,o|0);}a.fi=CE();}else if(c.z(B(345))){a.kt=1;p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;v=a.f3;w=ABk(a);v.Ln(u,Bn(w));a.ec.data[w]=1;a.bM.data[w]=a.my(t,a.bA);a.bL.data[w]=a.kI(t,a.bA);a.o3.data[w]=0;a.o4.data[w]=0;if(a.bB!==null)a.bB.iq(a.bM.data[w],a.bL.data[w],w,0);r=r+1|0;}a.fi=CE();b.preventDefault();}}else{d=b;if(a.so()){a.g5(0,Ff(a,d)|0,EQ(a,d)|0);k=a.bM.data;k[0]=k[0]+Ff(a,d)|0;k=a.bL.data;k[0]=k[0]
+EQ(a,d)|0;}else{i=a.ko(d,a.bA);j=a.kg(d,a.bA);a.g5(0,i-a.bM.data[0]|0,j-a.bL.data[0]|0);a.bM.data[0]=i;a.bL.data[0]=j;}a.fi=CE();if(a.bB!==null){if(!a.ec.data[0])a.bB.na(a.bM.data[0],a.bL.data[0]);else a.bB.i_(a.bM.data[0],a.bL.data[0],0);}}}if(c.z(B(346))){p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;x=(a.f3.l(u)).lm();a.g5(x,a.my(t,a.bA)-a.bM.data[x]|0,a.kI(t,a.bA)-a.bL.data[x]|0);a.bM.data[x]=a.my(t,a.bA);a.bL.data[x]=a.kI(t,a.bA);if(a.bB!==null)a.bB.i_(a.bM.data[x],a.bL.data[x],
x);r=r+1|0;}a.fi=CE();b.preventDefault();}if(c.z(B(347))){p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;x=(a.f3.l(u)).lm();a.f3.mC(u);a.ec.data[x]=0;i=a.my(t,a.bA);j=a.kI(t,a.bA);a.g5(x,i-a.bM.data[x]|0,j-a.bL.data[x]|0);a.bM.data[x]=i;a.bL.data[x]=j;if(a.bB!==null)a.bB.hQ(a.bM.data[x],a.bL.data[x],x,0);r=r+1|0;}a.fi=CE();b.preventDefault();}if(c.z(B(348))){p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;x=(a.f3.l(u)).lm();a.f3.mC(u);a.ec.data[x]=0;i
=a.my(t,a.bA);j=a.kI(t,a.bA);a.g5(x,i-a.bM.data[x]|0,j-a.bL.data[x]|0);a.bM.data[x]=i;a.bL.data[x]=j;if(a.bB!==null)a.bB.hQ(a.bM.data[x],a.bL.data[x],x,0);r=r+1|0;}a.fi=CE();b.preventDefault();}}
function YG(a,b){var c,d,e,f,g;c=$rt_str(b.type);if(!(c.z(B(349))&&a.ju)){if(c.z(B(350))&&a.ju){d=b.charCode&65535;if(a.bB!==null)a.bB.ls(d);}else if(c.z(B(351))&&a.ju){e=Sm(b.keyCode);if(a.lx.data[e]){a.mG=a.mG-1|0;a.lx.data[e]=0;}if(a.bB!==null)a.bB.oF(e);}}else{a:{f=b;e=Sm(f.keyCode);g=0;switch(e){case 67:g=8;break a;case 112:g=127;break a;default:}}if(!(e!=67&&e!=112)){b.preventDefault();if(a.bB!==null){a.bB.lH(e);a.bB.ls(g);}}else if(!a.lx.data[e]){a.mG=a.mG+1|0;a.lx.data[e]=1;a.nH=1;a.ok.data[e]=1;if(a.bB
!==null)a.bB.lH(e);}}}
function ABk(a){var b;b=0;while(true){if(b>=20)return (-1);if(!a.f3.F8(Bn(b),0))break;b=b+1|0;}return b;}
function AKW(a){var b;a:{if(a.kt){a.kt=0;b=0;while(true){if(b>=a.oD.data.length)break a;a.oD.data[b]=0;b=b+1|0;}}}b:{if(a.nH){a.nH=0;b=0;while(true){if(b>=a.ok.data.length)break b;a.ok.data[b]=0;b=b+1|0;}}}}
function A80(a,b,c,d){a.o3.data[b]=c;a.o4.data[b]=d;}
function Ff(a,b){return b.movementX;}
function EQ(a,b){return b.movementY;}
function Km(a,b){var c,d;c=$rt_str(b.compatMode);d=c.z(B(352));if(d)b=b.documentElement;return b;}
function Hu(a,b){var c;c=b.scrollTop;return HN(c);}
function J$(a,b){var c;c=Km(a,b);return Hu(a,c);}
function Ig(a,b){var c;c=b.scrollLeft;return HN(c);}
function LT(a,b){var c;c=Km(a,b);return Ig(a,c);}
function R4(a,b,c){var d;d=(c.clientX-Os(a,b)|0)+Ig(a,b)|0;d=d+LT(a,b.ownerDocument)|0;return d;}
function AAt(a,b,c){var d;d=(c.clientY-NO(a,b)|0)+Hu(a,b)|0;d=d+J$(a,b.ownerDocument)|0;return d;}
function AMz(a,b,c){var d,e;d=c.width*1.0/KS(a,c);e=d*(((b.clientX-Os(a,c)|0)+Ig(a,c)|0)+LT(a,c.ownerDocument)|0);return Dg(e);}
function AKg(a,b,c){var d,e;d=c.height*1.0/N3(a,c);e=d*(((b.clientY-NO(a,c)|0)+Hu(a,c)|0)+J$(a,c.ownerDocument)|0);return Dg(e);}
function A$E(a,b,c){var d;d=c.width*1.0/KS(a,c);return Dg(d*R4(a,c,b));}
function A0$(a,b,c){var d;d=c.height*1.0/N3(a,c);return Dg(d*AAt(a,c,b));}
function KS(a,b){return b.clientWidth;}
function N3(a,b){return b.clientHeight;}
function NO(a,b){return HN(SB(a,b));}
function SB(a,b){var c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollTop;d=d.parentNode;}while(b!==null){c=c+b.offsetTop;b=d.offsetParent;}return c;}
function Os(a,b){return HN(ZS(a,b));}
function ZS(a,b){var c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollLeft;d=d.parentNode;}while(b!==null){c=c+b.offsetLeft;b=d.offsetParent;}return c;}
function HN(b){return b|0;}
function AV8(a,b){return a.ec.data[b];}
function AHG(a){return a.fi;}
function AGq(a,b){a.bB=b;}
function A_H(a){return 0;}
function APr(a,b){a.dU(b);}
var U6=D(Bm);
function Baz(){var a=new U6();A4e(a);return a;}
function Bdb(a){var b=new U6();A2a(b,a);return b;}
function A4e(a){Cx(a);}
function A2a(a,b){EF(a,b);}
function IB(){DS.call(this);this.vA=null;}
function Bkl(a){var b=new IB();O2(b,a);return b;}
function O2(a,b){G_(a);a.vA=b;}
function HA(){var a=this;IB.call(a);a.Ju=0;a.rp=0;a.e3=null;a.ku=null;a.y5=null;}
function Bkm(a,b){var c=new HA();Of(c,a,b);return c;}
function Of(a,b,c){O2(a,b);a.e3=I();a.ku=BW(32);a.Ju=c;Hw();a.y5=Bkn;}
function A4U(a,b,c,d){var $$je;if(!ABe(a))return;a:{try{a.vA.nc(b,c,d);break a;}catch($$e){$$je=R($$e);if($$je instanceof De){}else{throw $$e;}}a.rp=1;}}
function ABe(a){if(a.vA===null)a.rp=1;return a.rp?0:1;}
function MC(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.data;f=Zl(b,c,d-c|0);g=Cj(Bf(16,Bq(e.length,1024)));h=Ht(g);i=a.y5.mw();Di();j=BgW;i=K3(i,j);j=BgW;k=LS(i,j);while(true){l=(ID(k,f,h,1)).h5();a.nc(g,0,B8(h));J5(h);if(!l)break;}while(true){l=(JN(k,h)).h5();a.nc(g,0,B8(h));J5(h);if(!l)break;}}
function AY9(a,b){a.ku.data[0]=b;MC(a,a.ku,0,1);}
function A10(a,b){a.e3.a(b);IC(a);}
function AXV(a,b){(a.e3.a(b)).U(10);IC(a);}
function ALl(a,b){(a.e3.dD(b)).U(10);IC(a);}
function A6M(a){a.GQ(10);}
function IC(a){var b;b=a.e3.i()<=a.ku.data.length?a.ku:BW(a.e3.i());a.e3.pv(0,a.e3.i(),b,0);MC(a,b,0,a.e3.i());a.e3.uz(0);}
var Sv=D(Dr);
function Bea(a,b){var c=new Sv();AVu(c,a,b);return c;}
function AVu(a,b,c){Gc(a,b,c);}
function AUX(a,b,c,d){var e,f,g,h;e=a.bQ.df();d.by(a.bm,b);f=0;while(true){if(f>=e)return a.k.e(b,c,d);g=a.bQ.l(f);h=g.cI(0,b,c,d);if(h>=0)break;f=f+1|0;}return (-1);}
function A7e(a,b){return 0;}
function AFM(a){return B(353);}
function Pn(){var a=this;C.call(a);a.E4=null;a.s0=null;}
function Bcy(a,b){var c=new Pn();ASz(c,a,b);return c;}
function ASz(a,b,c){a.s0=b;a.E4=c;J(a);}
function AR1(a){AKj(a.s0.nk,Bac(a.E4));Bin=A9w(a.s0.nk);(CD()).eu();}
function A9s(a){(CD()).eu();}
function ANW(a){a.HP();}
function AHk(a){a.GX();}
var Fy=D(IN);
function MH(a,b,c,d){AAh(a,b,c,d);}
function ARn(a){var b;if(a.C>=a.bb)G(UB());b=a.C;a.C=b+1|0;return a.p2(b);}
function A4o(a,b){var c;if(a.b_())G(C9());if(a.C>=a.bb)G(F0());c=a.C;a.C=c+1|0;a.nQ(c,b);return a;}
function AML(a,b){if(b>=0&&b<a.bb)return a.p2(b);G(Bg(((((((I()).a(B(354))).j(b)).a(B(64))).j(a.bb)).a(B(24))).b()));}
function A81(a,b,c){if(a.b_())G(C9());if(b>=0&&b<a.bb){a.nQ(b,c);return a;}G(Bg(((((((I()).a(B(354))).j(b)).a(B(64))).j(a.bb)).a(B(24))).b()));}
function AMb(a){return a.e1();}
function FI(){var a=this;Fy.call(a);a.cu=null;a.x0=0;a.cl=0;}
function JO(a,b,c,d,e,f,g){MH(a,c,e,f);a.cl=b;a.cu=d;a.x0=g;}
function ALW(a){return a.x0;}
var Px=D(FI);
function Be$(a,b,c,d,e,f){var g=new Px();AZr(g,a,b,c,d,e,f);return g;}
function AZr(a,b,c,d,e,f,g){JO(a,b,c,d,e,f,g);}
function AIP(a,b){var c,d,e;c=a.cu.A.data;d=a.cl;e=b*4|0;return c[d+e|0]&255|(a.cu.A.data[(a.cl+e|0)+1|0]&255)<<8|(a.cu.A.data[(a.cl+e|0)+2|0]&255)<<16|(a.cu.A.data[(a.cl+e|0)+3|0]&255)<<24;}
function ADc(a,b,c){var d,e,f;d=a.cu.A.data;e=a.cl;f=b*4|0;d[e+f|0]=c<<24>>24;a.cu.A.data[(a.cl+f|0)+1|0]=c>>8<<24>>24;a.cu.A.data[(a.cl+f|0)+2|0]=c>>16<<24>>24;a.cu.A.data[(a.cl+f|0)+3|0]=c>>24<<24>>24;}
var ABS=D(FM);
function Bdq(a,b){var c=new ABS();A9n(c,a,b);return c;}
function A9n(a,b,c){Kh(a,b,c);}
function AGD(a,b,c,d){var e,f;e=a.j9(d);if(e!==null&&(b+e.i()|0)<=d.J()){f=!(c.b()).zN(e,b)?(-1):e.i();if(f<0)return (-1);d.by(a.je,f);return a.k.e(b+f|0,c,d);}return (-1);}
function ARW(a,b,c,d){var e,f,g,h;e=a.j9(d);f=d.dI();if(e!==null&&(b+e.i()|0)<=f){g=c.b();while(true){if(b>f)return (-1);h=g.uy(e,b);if(h<0)return (-1);if(a.k.e(h+e.i()|0,c,d)>=0)break;b=h+1|0;}return h;}return (-1);}
function AD4(a,b,c,d,e){var f,g,h;f=a.j9(e);if(f===null)return (-1);g=d.b();a:{while(true){if(c<b)return (-1);h=g.Ac(f,c);if(h<0)break a;if(h<b)break a;if(a.k.e(h+f.i()|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function A30(a,b){return 1;}
function A9z(a){return (((I()).a(B(355))).j(a.bm)).b();}
function Ww(){Dd.call(this);this.q8=null;}
function Bah(a,b,c,d){var e=new Ww();A59(e,a,b,c,d);return e;}
function A59(a,b,c,d,e){FW(a,b,c,d);a.q8=e;}
function AOJ(a,b,c,d){var e,f;e=d.J();f=NP(a,b,e,c);if(f>=0)e=f;if(e>b)return a.k.cI(b,e,c,d);return a.k.e(b,c,d);}
function ADm(a,b,c,d){var e,f,g,h,i;e=d.J();f=a.k.cE(b,c,d);if(f<0)return (-1);g=NP(a,f,e,c);if(g>=0)e=g;h=a.k.cI(f,e,c,d);h=Bf(f,h);i=h>0?ABX(a,b,h-1|0,c):h?(-1):0;if(i>=b)b=i>=h?i:i+1|0;return b;}
function NP(a,b,c,d){while(true){if(b>=c)return (-1);if(a.q8.k1(d.f(b)))break;b=b+1|0;}return b;}
function ABX(a,b,c,d){while(true){if(c<b)return (-1);if(a.q8.k1(d.f(c)))break;c=c+(-1)|0;}return c;}
function A7q(a){return B(356);}
var Ts=D(T);
function Bf$(){var a=new Ts();A1q(a);return a;}
function A1q(a){Bo(a);}
function ALM(a){var b;b=BbO(a);b.be=1;return b;}
var IT=D();
var Bko=null;var Bkp=null;function ACH(){ACH=N(IT);AZT();}
function ZT(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;ACH();d=$rt_floatToIntBits(b);c.wd=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.rd=0;c.qO=0;return;}g=0;if(f)h=e|8388608;else{h=e<<1;while(Z(Br(O(h),O(8388608)),Ba)){h=h<<1;f=f+(-1)|0;g=g+1|0;}}i=A4I(Bkp,f);if(i<0)i=( -i|0)-2|0;j=f-Bkp.data[i]|0;k=9+j|0;l=O(h);m=Cp(CN(Cf(l,O(Bko.data[i])),32-k|0));if(m>=1000000000){i=i+1|0;n=f-Bkp.data[i]|0;k=9+n|0;m=Cp(CN(Cf(l,O(Bko.data[i])),32-k|0));}n=(31-k|0)-g|0;o=n>=0?Bko.data[i]>>>n:Bko.data[i]<<( -n
|0);p=(o+1|0)>>1;q=o>>1;if(h==4194304)q=q>>2;r=ZW(m,q);s=QU(m,p);h=B9(r,s);h=h>0?Cg(m/r|0,r):h<0?Cg(m/s|0,s)+s|0:Cg((m+(s/2|0)|0)/s|0,s);if(h>=1000000000){i=i+1|0;h=h/10|0;}else if(h<100000000){i=i+(-1)|0;h=h*10|0;}c.rd=h;c.qO=i-50|0;}
function ZW(b,c){var d,e;ACH();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if(e>=(c/2|0))d=d/10|0;return d;}
function QU(b,c){var d,e;ACH();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if((d-e|0)>(c/2|0))d=d/10|0;return d;}
function AZT(){var b,c,d,e,f,g,h,i,j,k,l;Bko=Bc(100);Bkp=Bc(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=Bko.data;g=d+50|0;f[g]=$rt_udiv(e,20);Bkp.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}i=214748364;e=127;d=0;while(d<50){j=0;k=b;while(k>i){k=k>>1;j=j+1|0;e=e+(-1)|0;}k=k*10|0;if(j<=0)b=k;else{l=O(b&((1<<j)-1|0));b=Cp(CA(O(k),M_(Cf(l,O(10)),j)));}f=Bko.data;k=(50-d|0)-1|0;f[k]=$rt_udiv(b,20);Bkp.data[k]=e;d=d+1|0;}}
function Cs(){Bx.call(this);this.zx=null;}
var BjK=null;var Bkq=null;var Bkr=null;var Bks=null;var Bkt=null;var Bku=null;var Bkv=null;var Bkw=null;var Bkx=null;var BjJ=null;var Bky=null;var Bkz=null;function Ix(){Ix=N(Cs);A0E();}
function Dm(a,b,c){var d=new Cs();S2(d,a,b,c);return d;}
function S2(a,b,c,d){Ix();Cw(a,b,c);a.zx=d;}
function E6(a){return a.zx;}
function A0E(){BjK=Dm(B(357),0,B(358));Bkq=Dm(B(359),1,B(360));Bkr=Dm(B(361),2,B(362));Bks=Dm(B(363),3,B(364));Bkt=Dm(B(365),4,B(366));Bku=Dm(B(367),5,B(368));Bkv=Dm(B(369),6,B(370));Bkw=Dm(B(371),7,B(372));Bkx=Dm(B(373),8,B(374));BjJ=Dm(B(375),9,B(376));Bky=Dm(B(377),10,B(378));Bkz=H(Cs,[BjK,Bkq,Bkr,Bks,Bkt,Bku,Bkv,Bkw,Bkx,BjJ,Bky]);}
function Bi(){var a=this;C.call(a);a.s=0.0;a.r=0.0;a.t=0.0;a.G=0.0;}
var BiZ=null;var Bi0=null;var Bi1=null;var Bi2=null;var BiY=null;var BkA=0.0;var BiX=null;var Bi3=null;var Bi4=null;var Bi5=null;var Bi6=null;var Bi7=null;var Bi8=null;var Bi9=null;var Bi$=null;var Bi_=null;var Bja=null;var Bjb=null;var Bjc=null;var Bjd=null;var Bje=null;var Bjf=null;var Bjg=null;var Bjh=null;var Bji=null;var Bjj=null;var Bjk=null;var Bjl=null;var Bjm=null;var Bjn=null;var Bjo=null;var Bjp=null;var Bjq=null;var Bjr=null;var Bjs=null;function Bv(){Bv=N(Bi);AUL();}
function D2(){var a=new Bi();U3(a);return a;}
function BK(a){var b=new Bi();ABW(b,a);return b;}
function CP(a,b,c,d){var e=new Bi();SJ(e,a,b,c,d);return e;}
function A5R(a){var b=new Bi();Ua(b,a);return b;}
function U3(a){Bv();J(a);}
function ABW(a,b){Bv();J(a);Id(a,b);}
function SJ(a,b,c,d,e){Bv();J(a);a.s=b;a.r=c;a.t=d;a.G=e;a.dL();}
function Ua(a,b){Bv();J(a);a.eR(b);}
function AES(a,b){a.s=b.s;a.r=b.r;a.t=b.t;a.G=b.G;return a;}
function A$U(a,b){a.s=a.s*b.s;a.r=a.r*b.r;a.t=a.t*b.t;a.G=a.G*b.G;return a.dL();}
function AEz(a,b){a.s=a.s*b;a.r=a.r*b;a.t=a.t*b;a.G=a.G*b;return a.dL();}
function A5G(a,b){a.s=a.s+b.s;a.r=a.r+b.r;a.t=a.t+b.t;a.G=a.G+b.G;return a.dL();}
function AV3(a,b){a.s=a.s-b.s;a.r=a.r-b.r;a.t=a.t-b.t;a.G=a.G-b.G;return a.dL();}
function A7G(a){if(a.s<0.0)a.s=0.0;else if(a.s>1.0)a.s=1.0;if(a.r<0.0)a.r=0.0;else if(a.r>1.0)a.r=1.0;if(a.t<0.0)a.t=0.0;else if(a.t>1.0)a.t=1.0;if(a.G<0.0)a.G=0.0;else if(a.G>1.0)a.G=1.0;return a;}
function A4w(a,b,c,d,e){a.s=b;a.r=c;a.t=d;a.G=e;return a.dL();}
function AOP(a,b){Id(a,b);return a;}
function ADU(a,b,c,d,e){a.s=a.s+b;a.r=a.r+c;a.t=a.t+d;a.G=a.G+e;return a.dL();}
function AQJ(a,b,c,d,e){a.s=a.s-b;a.r=a.r-c;a.t=a.t-d;a.G=a.G-e;return a.dL();}
function A8n(a,b,c,d,e){a.s=a.s*b;a.r=a.r*c;a.t=a.t*d;a.G=a.G*e;return a.dL();}
function ANT(a,b,c){a.s=a.s+c*(b.s-a.s);a.r=a.r+c*(b.r-a.r);a.t=a.t+c*(b.t-a.t);a.G=a.G+c*(b.G-a.G);return a.dL();}
function AXz(a,b,c,d,e,f){a.s=a.s+f*(b-a.s);a.r=a.r+f*(c-a.r);a.t=a.t+f*(d-a.t);a.G=a.G+f*(e-a.G);return a.dL();}
function AMI(a){a.s=a.s*a.G;a.r=a.r*a.G;a.t=a.t*a.G;return a;}
function AZg(a,b){var c;if(a===b)return 1;if(b!==null&&Ck(a)===Ck(b)){c=b;return a.r2()!=c.r2()?0:1;}return 0;}
function AMg(a){var b,c;b=a.s===0.0?0:CF(a.s);c=(31*b|0)+(a.r===0.0?0:CF(a.r))|0;c=(31*c|0)+(a.t===0.0?0:CF(a.t))|0;c=(31*c|0)+(a.G===0.0?0:CF(a.G))|0;return c;}
function AR3(a){var b;b=(255.0*a.G|0)<<24|(255.0*a.t|0)<<16|(255.0*a.r|0)<<8|255.0*a.s|0;return J_(b);}
function ATV(a){return (255.0*a.G|0)<<24|(255.0*a.t|0)<<16|(255.0*a.r|0)<<8|255.0*a.s|0;}
function AGW(a){var b,c;b=(255.0*a.s|0)<<24|(255.0*a.r|0)<<16|(255.0*a.t|0)<<8|255.0*a.G|0;c=OC(b);while(c.i()<8){c=(((I()).a(B(315))).a(c)).b();}return c;}
function AF9(b){Bv();return ACU(b,D2());}
function ACU(b,c){Bv();if(b.f(0)==35)b=b.ei(1);c.s=Dt(b.ce(0,2),16)/255.0;c.r=Dt(b.ce(2,4),16)/255.0;c.t=Dt(b.ce(4,6),16)/255.0;c.G=b.i()!=8?1.0:Dt(b.ce(6,8),16)/255.0;return c;}
function AFX(b,c,d,e){var f,g;Bv();f=e<<24|d<<16|c<<8|b;g=J_(f);return g;}
function AIG(b,c,d,e){var f;Bv();f=(255.0*e|0)<<24|(255.0*d|0)<<16|(255.0*c|0)<<8|255.0*b|0;return J_(f);}
function AKO(b,c,d,e){Bv();return e<<24|d<<16|c<<8|b;}
function AIL(b){Bv();return b*255.0|0;}
function A$_(b,c){Bv();return (b*255.0|0)<<8|c*255.0|0;}
function A2v(b,c,d){Bv();return (b*31.0|0)<<11|(c*63.0|0)<<5|d*31.0|0;}
function ALj(b,c,d,e){Bv();return (b*15.0|0)<<12|(c*15.0|0)<<8|(d*15.0|0)<<4|e*15.0|0;}
function AKM(b,c,d){Bv();return (b*255.0|0)<<16|(c*255.0|0)<<8|d*255.0|0;}
function A9C(b,c,d,e){Bv();return (b*255.0|0)<<24|(c*255.0|0)<<16|(d*255.0|0)<<8|e*255.0|0;}
function A1o(b,c,d,e){Bv();return (b*255.0|0)<<24|(c*255.0|0)<<16|(d*255.0|0)<<8|e*255.0|0;}
function AON(b){Bv();return (b.s*31.0|0)<<11|(b.r*63.0|0)<<5|b.t*31.0|0;}
function A6O(b){Bv();return (b.s*15.0|0)<<12|(b.r*15.0|0)<<8|(b.t*15.0|0)<<4|b.G*15.0|0;}
function ANS(b){Bv();return (b.s*255.0|0)<<16|(b.r*255.0|0)<<8|b.t*255.0|0;}
function AEJ(b){Bv();return (b.s*255.0|0)<<24|(b.r*255.0|0)<<16|(b.t*255.0|0)<<8|b.G*255.0|0;}
function A1$(b){Bv();return (b.G*255.0|0)<<24|(b.s*255.0|0)<<16|(b.r*255.0|0)<<8|b.t*255.0|0;}
function A9_(b,c){Bv();b.s=((c&63488)>>>11)/31.0;b.r=((c&2016)>>>5)/63.0;b.t=((c&31)>>>0)/31.0;}
function A4J(b,c){Bv();b.s=((c&61440)>>>12)/15.0;b.r=((c&3840)>>>8)/15.0;b.t=((c&240)>>>4)/15.0;b.G=(c&15)/15.0;}
function A47(b,c){Bv();b.s=((c&16711680)>>>16)/255.0;b.r=((c&65280)>>>8)/255.0;b.t=(c&255)/255.0;}
function Id(b,c){Bv();b.s=((c&(-16777216))>>>24)/255.0;b.r=((c&16711680)>>>16)/255.0;b.t=((c&65280)>>>8)/255.0;b.G=(c&255)/255.0;}
function APG(b,c){Bv();b.G=((c&(-16777216))>>>24)/255.0;b.s=((c&16711680)>>>16)/255.0;b.r=((c&65280)>>>8)/255.0;b.t=(c&255)/255.0;}
function Zu(b,c){var d;Bv();d=A0F(c);b.G=((d&(-16777216))>>>24)/255.0;b.t=((d&16711680)>>>16)/255.0;b.r=((d&65280)>>>8)/255.0;b.s=(d&255)/255.0;}
function A7j(a,b,c,d){var e,f,g,h,i,j;a:{e=(b/60.0+6.0)%6.0;f=e|0;g=e-f;h=d*(1.0-c);i=d*(1.0-c*g);j=d*(1.0-c*(1.0-g));switch(f){case 0:break;case 1:a.s=i;a.r=d;a.t=h;break a;case 2:a.s=h;a.r=d;a.t=j;break a;case 3:a.s=h;a.r=i;a.t=d;break a;case 4:a.s=j;a.r=h;a.t=d;break a;default:a.s=d;a.r=h;a.t=i;break a;}a.s=d;a.r=j;a.t=h;}return a.dL();}
function AU4(a,b){var c;c=b.data;return a.Ph(c[0],c[1],c[2]);}
function A6Z(a,b){var c,d,e;c=Ei(Ei(a.s,a.r),a.t);d=Ju(Ju(a.s,a.r),a.t);e=c-d;if(e===0.0)b.data[0]=0.0;else if(c===a.s)b.data[0]=(60.0*(a.r-a.t)/e+360.0)%360.0;else if(c!==a.r)b.data[0]=60.0*(a.s-a.r)/e+240.0;else b.data[0]=60.0*(a.t-a.s)/e+120.0;if(c<=0.0)b.data[1]=0.0;else b.data[1]=1.0-d/c;b.data[2]=c;return b;}
function A9i(a){return A5R(a);}
function AUL(){BiZ=CP(1.0,1.0,1.0,1.0);Bi0=BK((-1077952513));Bi1=BK(2139062271);Bi2=BK(1061109759);BiY=CP(0.0,0.0,0.0,1.0);BkA=BiZ.ny();BiX=CP(0.0,0.0,0.0,0.0);Bi3=CP(0.0,0.0,1.0,1.0);Bi4=CP(0.0,0.0,0.5,1.0);Bi5=BK(1097458175);Bi6=BK(1887473919);Bi7=BK((-2016482305));Bi8=CP(0.0,1.0,1.0,1.0);Bi9=CP(0.0,0.5,0.5,1.0);Bi$=BK(16711935);Bi_=BK(2147418367);Bja=BK(852308735);Bjb=BK(579543807);Bjc=BK(1804477439);Bjd=BK((-65281));Bje=BK((-2686721));Bjf=BK((-626712321));Bjg=BK((-5963521));Bjh=BK((-1958407169));Bji=BK((-759919361));Bjj
=BK((-1306385665));Bjk=BK((-16776961));Bjl=BK((-13361921));Bjm=BK((-8433409));Bjn=BK((-92245249));Bjo=BK((-9849601));Bjp=CP(1.0,0.0,1.0,1.0);Bjq=BK((-1608453889));Bjr=BK((-293409025));Bjs=BK((-1339006721));}
function Fc(){var a=this;C.call(a);a.fn=0;a.cK=0;a.im=0;a.hT=0;a.cU=0;a.es=null;a.jT=0;a.DN=0;}
function EB(a,b,c){var d=new Fc();ANC(d,a,b,c);return d;}
function BkB(a,b,c,d){var e=new Fc();ACE(e,a,b,c,d);return e;}
function BkC(a,b,c,d,e,f){var g=new Fc();AAE(g,a,b,c,d,e,f);return g;}
function ANC(a,b,c,d){ACE(a,b,c,d,0);}
function ACE(a,b,c,d,e){var f;f=B9(b,4);AAE(a,b,c,f?5126:5121,f?0:1,d,e);}
function AAE(a,b,c,d,e,f,g){J(a);a.fn=b;a.cK=c;a.hT=d;a.im=e;a.es=f;a.jT=g;a.DN=E3(b);}
function ANG(a,b){if(!(b instanceof Fc))return 0;return KI(a,b);}
function KI(a,b){var c,d,e;a:{if(b!==null&&a.fn==b.fn&&a.cK==b.cK&&a.hT==b.hT&&a.im==b.im){c=a.es;d=b.es;if(c.z(d)&&a.jT==b.jT){e=1;break a;}}e=0;}return e;}
function IU(a){return (a.DN<<8)+(a.jT&255)|0;}
function QD(a){a:{switch(a.hT){case 5120:case 5121:break;case 5122:case 5123:return 2*a.cK|0;case 5124:case 5125:case 5127:case 5128:case 5129:case 5130:case 5131:break a;case 5126:case 5132:return 4*a.cK|0;default:break a;}return a.cK;}return 0;}
function AYP(a){var b,c;b=IU(a);c=(541*b|0)+a.cK|0;c=(541*c|0)+a.es.bp()|0;return c;}
var IA=D();
function BkD(){var a=new IA();UP(a);return a;}
function UP(a){J(a);}
function Gd(){var a=this;IA.call(a);a.fS=null;a.cH=null;a.uO=null;}
function AVi(a,b,c){var d=new Gd();Hn(d,a,b,c);return d;}
function Hn(a,b,c,d){UP(a);GR();if(d!==Bjy&&d!==Bjz)G(U(((((I()).a(B(296))).dD(d)).a(B(379))).b()));a.fS=b;a.cH=A2t(c);a.uO=d;}
function AH_(a){return a.cH;}
function AKu(a){var b;b=a.cH.xD(47);if(b<0)return a.cH;return a.cH.ei(b+1|0);}
function A7T(a){var b,c;b=a.ya();c=b.xD(46);if(c==(-1))return b;return b.ce(0,c);}
function AGn(a){return a.uO;}
function ASn(a){var b;b=a.fS.Qi(a.cH);if(b!==null)return b;G(U((((I()).a(a.cH)).a(B(380))).b()));}
function AH2(a){return a.MC(null);}
function A95(a,b){var c,$$je;if(a.fS.LW(a.cH))return a.fS.ey.W(a.cH);a:{try{c=Bbx(a.Iy(),B(381));}catch($$e){$$je=R($$e);if($$je instanceof GK){break a;}else{throw $$e;}}return c;}return null;}
function A8g(a){var b,c,d,e,f,g,h,i,j,$$je;b=Cp((a.Hz()));if(!b)b=512;c=Cj(b);d=0;e=a.qz();a:{try{try{while(true){f=c.data.length;g=e.rw(c,d,f-d|0);if(g==(-1))break;d=d+g|0;if(d==f){h=Cj(f*2|0);X(c,0,h,0,d);c=h;}}break a;}catch($$e){$$je=R($$e);if($$je instanceof De){i=$$je;}else{throw $$e;}}G(Jd((((I()).a(B(382))).dD(a)).b(),i));}catch($$e){$$je=R($$e);j=$$je;}b:{try{if(e!==null)e.fP();break b;}catch($$e){$$je=R($$e);if($$je instanceof De){}else{throw $$e;}}}G(j);}c:{try{if(e!==null)e.fP();break c;}catch($$e)
{$$je=R($$e);if($$je instanceof De){}else{throw $$e;}}}if(d>=f)h=c;else{h=Cj(d);X(c,0,h,0,d);}return h;}
function AOr(a,b){var c,d,e;c=new Gd;d=a.fS;e=(((I()).a(a.cH.bN()?B(101):(((I()).a(a.cH)).a(!a.cH.yT(B(383))?B(383):B(101))).b())).a(b)).b();GR();Hn(c,d,e,Bjy);return c;}
function AHc(a){var b,c;b=a.cH.H3(B(383));c=B(101);if(b>0)c=a.cH.ce(0,b);return AVi(a.fS,c,a.uO);}
function A85(a){return a.fS.Of(a.cH);}
function A4G(a){return a.cH;}
function A2t(b){var c;c=b.uI(B(384),B(383));if(c.yT(B(383)))c=c.ce(0,c.i()-1|0);return c;}
function F6(){BT.call(this);this.gW=null;}
var BkE=null;function AKQ(){AKQ=N(F6);AF5();}
function BkF(){var a=new F6();Nx(a);return a;}
function Bba(a){var b=new F6();S3(b,a);return b;}
function Nx(a){AKQ();B_(a);a.gW=BL();Vc(a);}
function Vc(a){var b,c,d;b=BcY(a);c=Bce(a);d=Up(BP(b,"setWorldTransformJS"),BP(c,"getWorldTransformJS"));a.dZ(d,1);}
function S3(a,b){AKQ();B_(a);a.gW=BL();}
function AF5(){BkE=Bba(0);}
function Up(b,c){var jsMotionState=new Bullet.MyMotionState();jsMotionState.setWorldTransform=b;jsMotionState.getWorldTransform=c;return Bullet.getPointer(jsMotionState);}
function ABd(){F6.call(this);this.qe=null;}
function Bat(a){var b=new ABd();A5C(b,a);return b;}
function A5C(a,b){Nx(a);a.qe=b;}
function ARy(a,b){b.ch(a.qe);}
function AMW(a,b){a.qe.ch(b);}
var T2=D(CG);
function Bal(a){var b=new T2();AKT(b,a);return b;}
function AKT(a,b){E4(a,b.pW(),b.Jy(),b.i6());a.Y.Q(a);}
function A$5(a,b,c,d){var e;while((b+a.bv.cg()|0)<=d.J()){e=a.bv;if(e.bH(b,c)<=0)break;b=b+a.bv.cg()|0;}return a.k.e(b,c,d);}
function ANF(a,b,c,d){var e,f,g;e=a.k.cE(b,c,d);if(e<0)return (-1);f=e-a.bv.cg()|0;while(f>=b&&a.bv.bH(f,c)>0){g=f-a.bv.cg()|0;e=f;f=g;}return e;}
function Ew(){var a=this;C.call(a);a.fm=null;a.ja=0;a.oy=null;a.CJ=null;a.D6=null;a.C9=null;a.k9=null;a.C7=null;a.za=null;a.Cd=null;a.dE=0;a.q7=0;a.s4=0;a.Qj=null;a.Bc=null;a.wI=null;a.yH=0;a.Kt=0;a.cO=null;a.hG=null;}
var BkG=0;var BkH=null;var BkI=null;var BkJ=null;var BkK=null;function UV(){UV=N(Ew);APH();}
function AIU(a,b){var c=new Ew();UY(c,a,b);return c;}
function UY(a,b,c){UV();J(a);a.fm=B(101);a.oy=Gr();a.CJ=Gr();a.D6=Gr();a.k9=Gr();a.C7=Gr();a.za=Gr();a.Kt=0;a.cO=Fk(1);a.hG=Fk(1);if(b===null)G(W(B(385)));if(c===null)G(W(B(386)));if(BkH!==null&&BkH.i()>0)b=(((I()).a(BkH)).a(b)).b();if(BkI!==null&&BkI.i()>0)c=(((I()).a(BkI)).a(c)).b();a.Bc=b;a.wI=c;a.Qj=HX(16);Ks(a,b,c);if(a.sa()){QQ(a);R9(a);AAi(a,Bg2,a);}}
function Ks(a,b,c){a.q7=OF(a,35633,b);a.s4=OF(a,35632,c);if(a.q7!=(-1)&&a.s4!=(-1)){a.dE=ABB(a,a.IE());if(a.dE!=(-1)){a.ja=1;return;}a.ja=0;return;}a.ja=0;}
function OF(a,b,c){var d,e,f,g,h;d=Biq;e=Fk(1);f=d.Ot(b);if(!f)return (-1);d.QG(f,c);d.Io(f);d.NR(f,35713,e);g=e.b2(0);if(g)return f;h=d.N0(f);a.fm=(((I()).a(a.fm)).a(b!=35633?B(387):B(388))).b();a.fm=(((I()).a(a.fm)).a(h)).b();return (-1);}
function AKK(a){var b,c;b=Biq;c=b.M1();if(!c)c=(-1);return c;}
function ABB(a,b){var c,d,e,f;c=Biq;if(b==(-1))return (-1);c.xk(b,a.q7);c.xk(b,a.s4);c.Ls(b);d=FV(4);FH(d,EV());e=d.yL();c.qp(b,35714,e);f=e.b2(0);if(f)return b;a.fm=Biq.Ao(b);return (-1);}
function A8m(a){if(!a.ja)return a.fm;a.fm=Biq.Ao(a.dE);return a.fm;}
function A9o(a){return a.ja;}
function Rk(a,b){var c,d;c=Biq;d=a.k9.tI(b,(-2));if(d==(-2)){d=c.Dc(a.dE,b);a.k9.gA(b,d);}return d;}
function JW(a,b){UV();return a.AO(b,BkG);}
function A2$(a,b,c){var d;d=a.oy.tI(b,(-2));if(d==(-2)){d=Biq.AP(a.dE,b);if(d==(-1)&&c){if(!a.ja)G(DR((((I()).a(B(389))).a(a.q2())).b()));G(W(((((I()).a(B(390))).a(b)).a(B(391))).b()));}a.oy.gA(b,d);}return d;}
function A1D(a,b,c){var d,e;d=Biq;Cm(a);e=JW(a,b);d.Cv(e,c);}
function A0s(a,b,c){var d;d=Biq;Cm(a);d.Cv(b,c);}
function APO(a,b,c){var d;d=Biq;Cm(a);d.MW(b,c);}
function ADV(a,b,c,d){var e;e=Biq;Cm(a);e.OR(b,c,d);}
function AFP(a,b,c,d,e){var f;f=Biq;Cm(a);f.G6(b,c,d,e);}
function AQf(a,b,c,d,e,f){var g;g=Biq;Cm(a);g.GM(b,c,d,e,f);}
function ARP(a,b,c,d,e){var f;f=Biq;Cm(a);f.F0(b,e/3|0,c,d);}
function AZD(a,b,c){a.IM(b,c,0);}
function AVS(a,b,c,d){a.zy(JW(a,b),c,d);}
function AL0(a,b,c){a.zy(b,c,0);}
function A38(a,b,c,d){var e;e=Biq;Cm(a);e.yg(b,1,d,c.c,0);}
function A9B(a,b,c){a.LB(b,c,0);}
function AId(a,b,c,d){var e;e=Biq;Cm(a);e.I2(b,1,d,c.gT,0);}
function AWQ(a,b,c,d,e){var f;f=Biq;Cm(a);f.yg(b,e/16|0,0,c,d);}
function ADf(a,b,c){a.jh(b,c.n,c.o,c.q);}
function A6f(a,b,c){a.yv(b,c.s,c.r,c.t,c.G);}
function A$V(a,b,c,d,e,f,g){var h;h=Biq;Cm(a);h.Pm(b,c,d,e,f,g);}
function AV2(a){var b;b=Biq;Cm(a);b.Kh(a.dE);}
function AFf(a,b){var c,d;c=Biq;Cm(a);d=Rk(a,b);if(d==(-1))return;c.xK(d);}
function A22(a,b){var c;c=Biq;Cm(a);c.xK(b);}
function A6d(a,b){var c;c=Biq;Cm(a);c.QA(b);}
function Cm(a){if(a.yH){Ks(a,a.Bc,a.wI);a.yH=0;}}
function AAi(a,b,c){var d;UV();d=BkJ.W(b);if(d===null)d=Bp();d.F(c);BkJ.x(b,d);}
function R9(a){var b,c,d,e;a.cO.c1();Biq.qp(a.dE,35718,a.cO);b=a.cO.b2(0);a.C9=Y(BN,b);c=0;while(c<b){a.cO.c1();a.cO.tj(0,1);a.hG.c1();d=Biq.Qd(a.dE,c,a.cO,a.hG);e=Biq.AP(a.dE,d);a.oy.gA(d,e);a.CJ.gA(d,a.hG.b2(0));a.D6.gA(d,a.cO.b2(0));a.C9.data[c]=d;c=c+1|0;}}
function QQ(a){var b,c,d,e;a.cO.c1();Biq.qp(a.dE,35721,a.cO);b=a.cO.b2(0);a.Cd=Y(BN,b);c=0;while(c<b){a.cO.c1();a.cO.tj(0,1);a.hG.c1();d=Biq.PR(a.dE,c,a.cO,a.hG);e=Biq.Dc(a.dE,d);a.k9.gA(d,e);a.C7.gA(d,a.hG.b2(0));a.za.gA(d,a.cO.b2(0));a.Cd.data[c]=d;c=c+1|0;}}
function AE9(a,b){return a.k9.tI(b,(-1));}
function APH(){BkG=1;BkH=B(101);BkI=B(101);BkJ=DG();BkK=Fk(1);}
var DO=D(Bx);
var Bjz=null;var Bjy=null;var BkL=null;var BkM=null;var BkN=null;var BkO=null;function GR(){GR=N(DO);AIa();}
function H9(a,b){var c=new DO();Wv(c,a,b);return c;}
function Wv(a,b,c){GR();Cw(a,b,c);}
function AIa(){Bjz=H9(B(392),0);Bjy=H9(B(393),1);BkL=H9(B(394),2);BkM=H9(B(395),3);BkN=H9(B(396),4);BkO=H(DO,[Bjz,Bjy,BkL,BkM,BkN]);}
var Mg=D(0);
function Jx(){var a=this;C.call(a);a.qV=null;a.g_=null;a.iN=null;}
var BkP=0;function Bfl(a){var b=new Jx();A8h(b,a);return b;}
function A8h(a,b){var c;J(a);a.g_=b;c=a;b.classObject=c;}
function Lh(b){var c;if(b===null)return null;c=b.classObject;if(c===null)c=Bfl(b);return c;}
function AMl(a){return (((I()).a(B(397))).j(Is(a))).b();}
function AWH(a){return a.g_;}
function AY8(a,b){return A4K(b,a.g_);}
function A2G(a){if(a.qV===null)a.qV=AQB(a.g_);return a.qV;}
function AJq(a){return A7Y(a.g_);}
function ASQ(a){return ACy(a.g_)===null?0:1;}
function A3H(a){return Lh(ACy(a.g_));}
function AZF(){if(!BkP){BkP=1;A2A();}}
function A2A(){EI.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){ACj(obj);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Q7,FO],returnType:$rt_voidcls(),callable:function(obj,args){PJ(obj,args[0],args[1]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Q7,FO,Bi,$rt_floatcls(),$rt_intcls(),$rt_booleancls()],returnType:$rt_voidcls(),callable:function(obj,args){S$(obj,args[0],args[1],
args[2],A8W(args[3]),AV_(args[4]),A0T(args[5]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Q7,FO,$rt_intcls(),$rt_intcls(),Bi,$rt_floatcls(),$rt_intcls(),$rt_booleancls(),BN],returnType:$rt_voidcls(),callable:function(obj,args){AA4(obj,args[0],args[1],AV_(args[2]),AV_(args[3]),args[4],A8W(args[5]),AV_(args[6]),A0T(args[7]),args[8]);return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[Q7,FO],returnType:$rt_voidcls(),callable:function(obj,args){A7H(obj,args[0],
args[1]);return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[Q7,FO,Bi,$rt_floatcls(),$rt_intcls(),$rt_booleancls()],returnType:$rt_voidcls(),callable:function(obj,args){A3B(obj,args[0],args[1],args[2],A8W(args[3]),AV_(args[4]),A0T(args[5]));return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[Q7,FO,$rt_intcls(),$rt_intcls(),Bi,$rt_floatcls(),$rt_intcls(),$rt_booleancls(),BN],returnType:$rt_voidcls(),callable:function(obj,args){AG4(obj,args[0],args[1],AV_(args[2]),AV_(args[3]),
args[4],A8W(args[5]),AV_(args[6]),A0T(args[7]),args[8]);return null;}},{name:"truncate",modifiers:0,accessLevel:1,parameterTypes:[Rb,Hh,$rt_floatcls(),BN,$rt_intcls(),D5],returnType:$rt_voidcls(),callable:function(obj,args){ABp(obj,args[0],args[1],A8W(args[2]),args[3],AV_(args[4]),args[5]);return null;}},{name:"wrap",modifiers:0,accessLevel:1,parameterTypes:[Rb,Hh,$rt_intcls(),$rt_intcls()],returnType:Hh,callable:function(obj,args){return QP(obj,args[0],args[1],AV_(args[2]),AV_(args[3]));}},{name:"adjustLastGlyph",modifiers
:0,accessLevel:1,parameterTypes:[Rb,Hh],returnType:$rt_voidcls(),callable:function(obj,args){EP(obj,args[0],args[1]);return null;}},{name:"parseColorMarkup",modifiers:0,accessLevel:1,parameterTypes:[FO,$rt_intcls(),$rt_intcls(),D5],returnType:$rt_intcls(),callable:function(obj,args){return Pz(obj,args[0],AV_(args[1]),AV_(args[2]),args[3]);}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){A8D(obj);return null;}},{name:"toString",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:BN,callable:function(obj,args){return AOa(obj);}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){DI();AYK();return null;}}];Hh.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){A0z(obj);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){ALv(obj);return null;}},
{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BN,callable:function(obj,args){return AEp(obj);}}];Bi.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){U3(obj);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){ABW(obj,AV_(args[0]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),
$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:function(obj,args){SJ(obj,A8W(args[0]),A8W(args[1]),A8W(args[2]),A8W(args[3]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Bi],returnType:$rt_voidcls(),callable:function(obj,args){Ua(obj,args[0]);return null;}},{name:"set",modifiers:0,accessLevel:3,parameterTypes:[Bi],returnType:Bi,callable:function(obj,args){return AES(obj,args[0]);}},{name:"mul",modifiers:0,accessLevel:3,parameterTypes:[Bi],returnType:Bi,callable:
function(obj,args){return A$U(obj,args[0]);}},{name:"mul",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls()],returnType:Bi,callable:function(obj,args){return AEz(obj,A8W(args[0]));}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[Bi],returnType:Bi,callable:function(obj,args){return A5G(obj,args[0]);}},{name:"sub",modifiers:0,accessLevel:3,parameterTypes:[Bi],returnType:Bi,callable:function(obj,args){return AV3(obj,args[0]);}},{name:"clamp",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:Bi,callable:function(obj,args){return A7G(obj);}},{name:"set",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:Bi,callable:function(obj,args){return A4w(obj,A8W(args[0]),A8W(args[1]),A8W(args[2]),A8W(args[3]));}},{name:"set",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:Bi,callable:function(obj,args){return AOP(obj,AV_(args[0]));}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),
$rt_floatcls()],returnType:Bi,callable:function(obj,args){return ADU(obj,A8W(args[0]),A8W(args[1]),A8W(args[2]),A8W(args[3]));}},{name:"sub",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:Bi,callable:function(obj,args){return AQJ(obj,A8W(args[0]),A8W(args[1]),A8W(args[2]),A8W(args[3]));}},{name:"mul",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:Bi,callable:function(obj,args)
{return A8n(obj,A8W(args[0]),A8W(args[1]),A8W(args[2]),A8W(args[3]));}},{name:"lerp",modifiers:0,accessLevel:3,parameterTypes:[Bi,$rt_floatcls()],returnType:Bi,callable:function(obj,args){return ANT(obj,args[0],A8W(args[1]));}},{name:"lerp",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:Bi,callable:function(obj,args){return AXz(obj,A8W(args[0]),A8W(args[1]),A8W(args[2]),A8W(args[3]),A8W(args[4]));}},{name:"premultiplyAlpha",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:Bi,callable:function(obj,args){return AMI(obj);}},{name:"equals",modifiers:0,accessLevel:3,parameterTypes:[C],returnType:$rt_booleancls(),callable:function(obj,args){return AZg(obj,args[0]);}},{name:"hashCode",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:function(obj,args){return AMg(obj);}},{name:"toFloatBits",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_floatcls(),callable:function(obj,args){return AR3(obj);}},{name
:"toIntBits",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:function(obj,args){return ATV(obj);}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BN,callable:function(obj,args){return AGW(obj);}},{name:"valueOf",modifiers:512,accessLevel:3,parameterTypes:[BN],returnType:Bi,callable:function(obj,args){Bv();return AF9(args[0]);}},{name:"valueOf",modifiers:512,accessLevel:3,parameterTypes:[BN,Bi],returnType:Bi,callable:function(obj,args){Bv();return ACU(args[0],
args[1]);}},{name:"toFloatBits",modifiers:512,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_floatcls(),callable:function(obj,args){Bv();return AFX(AV_(args[0]),AV_(args[1]),AV_(args[2]),AV_(args[3]));}},{name:"toFloatBits",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_floatcls(),callable:function(obj,args){Bv();return AIG(A8W(args[0]),A8W(args[1]),A8W(args[2]),A8W(args[3]));}},{name:
"toIntBits",modifiers:512,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_intcls(),callable:function(obj,args){Bv();return AKO(AV_(args[0]),AV_(args[1]),AV_(args[2]),AV_(args[3]));}},{name:"alpha",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bv();return AIL(A8W(args[0]));}},{name:"luminanceAlpha",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable
:function(obj,args){Bv();return A$_(A8W(args[0]),A8W(args[1]));}},{name:"rgb565",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bv();return A2v(A8W(args[0]),A8W(args[1]),A8W(args[2]));}},{name:"rgba4444",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bv();return ALj(A8W(args[0]),A8W(args[1]),A8W(args[2]),A8W(args[3]));}},
{name:"rgb888",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bv();return AKM(A8W(args[0]),A8W(args[1]),A8W(args[2]));}},{name:"rgba8888",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bv();return A9C(A8W(args[0]),A8W(args[1]),A8W(args[2]),A8W(args[3]));}},{name:"argb8888",modifiers:512,accessLevel:3,parameterTypes
:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bv();return A1o(A8W(args[0]),A8W(args[1]),A8W(args[2]),A8W(args[3]));}},{name:"rgb565",modifiers:512,accessLevel:3,parameterTypes:[Bi],returnType:$rt_intcls(),callable:function(obj,args){Bv();return AON(args[0]);}},{name:"rgba4444",modifiers:512,accessLevel:3,parameterTypes:[Bi],returnType:$rt_intcls(),callable:function(obj,args){Bv();return A6O(args[0]);}},{name:"rgb888",modifiers:512,accessLevel
:3,parameterTypes:[Bi],returnType:$rt_intcls(),callable:function(obj,args){Bv();return ANS(args[0]);}},{name:"rgba8888",modifiers:512,accessLevel:3,parameterTypes:[Bi],returnType:$rt_intcls(),callable:function(obj,args){Bv();return AEJ(args[0]);}},{name:"argb8888",modifiers:512,accessLevel:3,parameterTypes:[Bi],returnType:$rt_intcls(),callable:function(obj,args){Bv();return A1$(args[0]);}},{name:"rgb565ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bi,$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,
args){Bv();A9_(args[0],AV_(args[1]));return null;}},{name:"rgba4444ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bi,$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){Bv();A4J(args[0],AV_(args[1]));return null;}},{name:"rgb888ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bi,$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){Bv();A47(args[0],AV_(args[1]));return null;}},{name:"rgba8888ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bi,$rt_intcls()],returnType
:$rt_voidcls(),callable:function(obj,args){Bv();Id(args[0],AV_(args[1]));return null;}},{name:"argb8888ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bi,$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){Bv();APG(args[0],AV_(args[1]));return null;}},{name:"abgr8888ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bi,$rt_floatcls()],returnType:$rt_voidcls(),callable:function(obj,args){Bv();Zu(args[0],A8W(args[1]));return null;}},{name:"fromHsv",modifiers:0,accessLevel:3,parameterTypes
:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:Bi,callable:function(obj,args){return A7j(obj,A8W(args[0]),A8W(args[1]),A8W(args[2]));}},{name:"fromHsv",modifiers:0,accessLevel:3,parameterTypes:[$rt_arraycls($rt_floatcls())],returnType:Bi,callable:function(obj,args){return AU4(obj,args[0]);}},{name:"toHsv",modifiers:0,accessLevel:3,parameterTypes:[$rt_arraycls($rt_floatcls())],returnType:$rt_arraycls($rt_floatcls()),callable:function(obj,args){return A6Z(obj,args[0]);}},{name:"cpy",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:Bi,callable:function(obj,args){return A9i(obj);}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){Bv();AUL();return null;}}];}
function A_n(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!a.hf()&&!a.GO()){if(a.iN===null){AZF();b=(a.z7()).$meta;c=b.methods;a.iN=Y(FA,c.length);d=0;e=0;while(e<c.length){f=c[e];if($rt_str(f.name).z(B(398))){g=f.parameterTypes;h=Y(Jx,g.length);i=0;while(true){j=h.data;if(i>=j.length)break;j[i]=Lh(g[i]);i=i+1|0;}j=a.iN.data;k=d+1|0;l=new FA;b=$rt_str(f.name);m=f.modifiers;AAF(l,a,b,m,f.accessLevel,h,Gk(f.callable,"call"));j[d]=l;d=k;}e=e+1|0;}a.iN=I8(a.iN,d);}return a.iN.go();}return Y(FA,0);}
function AS5(a){var b,c,d,e,f,g,h,i,j;b=a.rs();c=b.data;d=c.length;e=Y(FA,d);f=0;g=0;while(g<d){h=c[g];if(Kr(h.sq())){i=e.data;j=f+1|0;i[f]=h;f=j;}g=g+1|0;}if(f<e.data.length)e=I8(e,f);return e;}
function A7P(a,b){var c,d,e,f;c=(a.rs()).data;d=c.length;e=0;while(true){if(e>=d)G(ASX());f=c[e];if(ABl(f.vz(),b))break;e=e+1|0;}return f;}
function A7N(a,b){var c,d,e,f;c=(a.rs()).data;d=c.length;e=0;while(true){if(e>=d)G(ASX());f=c[e];if(Kr(f.sq())&&ABl(f.vz(),b))break;e=e+1|0;}return f;}
var CO=D();
var Zj=D(CO);
var DM=D(0);
function ACb(){var a=this;C.call(a);a.H=null;a.br=0;}
function A_L(){var a=new ACb();AXA(a);return a;}
function Bfo(a){var b=new ACb();AVk(b,a);return b;}
function AXA(a){J(a);a.H=Bc(0);}
function AVk(a,b){J(a);a.H=Bc(((b+32|0)-1|0)/32|0);}
function APx(a,b){var c,d;c=b/32|0;if(b>=a.br){GY(a,c+1|0);a.br=b+1|0;}d=a.H.data;d[c]=d[c]|1<<(b%32|0);}
function AJZ(a,b,c){var d,e,f,g;if(b>c)G(C$());d=b/32|0;e=c/32|0;if(c>a.br){GY(a,e+1|0);a.br=c;}if(d==e){f=a.H.data;f[d]=f[d]|F8(a,b)&GQ(a,c);}else{f=a.H.data;f[d]=f[d]|F8(a,b);g=d+1|0;while(g<e){a.H.data[g]=(-1);g=g+1|0;}if(c&31){f=a.H.data;f[e]=f[e]|GQ(a,c);}}}
function F8(a,b){var c;c=b%32|0;return (-1)<<c;}
function GQ(a,b){var c;c=b%32|0;return !c?0:(-1)>>>(32-c|0);}
function A_J(a,b){var c,d;c=b/32|0;if(c<a.H.data.length){d=a.H.data;d[c]=d[c]&Yk((-2),b%32|0);if(b==(a.br-1|0))Fj(a);}}
function AVw(a,b,c){var d,e,f,g,h;if(b>c)G(C$());if(b>=a.br)return;d=Bq(a.br,c);e=b/32|0;f=d/32|0;if(e==f){g=a.H.data;g[e]=g[e]&(GQ(a,b)|F8(a,d));}else{g=a.H.data;g[e]=g[e]&GQ(a,b);h=e+1|0;while(h<f){a.H.data[h]=0;h=h+1|0;}if(d&31){g=a.H.data;g[f]=g[f]&F8(a,d);}}Fj(a);}
function AVC(a,b){var c;c=b/32|0;return c<a.H.data.length&&a.H.data[c]&1<<(b%32|0)?1:0;}
function A$X(a,b){var c,d,e,f,g;if(b>=a.br)return (-1);c=b/32|0;d=a.H.data[c];e=d>>>(b%32|0);if(e)return E3(e)+b|0;f=(a.br+31|0)/32|0;g=c+1|0;while(g<f){if(a.H.data[g])return (g*32|0)+E3(a.H.data[g])|0;g=g+1|0;}return (-1);}
function AO7(a,b){var c,d,e,f,g;if(b>=a.br)return b;c=b/32|0;d=a.H.data[c]^(-1);e=d>>>(b%32|0);if(e)return E3(e)+b|0;f=(a.br+31|0)/32|0;g=c+1|0;while(g<f){if(a.H.data[g]!=(-1))return (g*32|0)+E3(a.H.data[g]^(-1))|0;g=g+1|0;}return a.br;}
function GY(a,b){var c;if(a.H.data.length>=b)return;c=Bf((b*3|0)/2|0,(a.H.data.length*2|0)+1|0);a.H=ATB(a.H,c);}
function Fj(a){var b,c,d;b=(a.br+31|0)/32|0;a.br=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Mw(a.H.data[c]);if(d<32)break;c=c+(-1)|0;a.br=a.br-32|0;}a.br=a.br-d|0;}}
function AOG(a,b){var c,d;c=Bq(a.H.data.length,b.H.data.length);d=0;while(d<c){if(a.H.data[d]&b.H.data[d])return 1;d=d+1|0;}return 0;}
function A9Z(a,b){var c,d,e;c=Bq(a.H.data.length,b.H.data.length);d=0;while(d<c){e=a.H.data;e[d]=e[d]&b.H.data[d];d=d+1|0;}while(c<a.H.data.length){a.H.data[c]=0;c=c+1|0;}a.br=Bq(a.br,b.br);Fj(a);}
function ATR(a,b){var c,d,e;c=Bq(a.H.data.length,b.H.data.length);d=0;while(d<c){e=a.H.data;e[d]=e[d]&(b.H.data[d]^(-1));d=d+1|0;}Fj(a);}
function A9Q(a,b){var c,d,e;a.br=Bf(a.br,b.br);GY(a,(a.br+31|0)/32|0);c=Bq(a.H.data.length,b.H.data.length);d=0;while(d<c){e=a.H.data;e[d]=e[d]|b.H.data[d];d=d+1|0;}}
function A2P(a,b){var c,d,e;a.br=Bf(a.br,b.br);GY(a,(a.br+31|0)/32|0);c=Bq(a.H.data.length,b.H.data.length);d=0;while(d<c){e=a.H.data;e[d]=e[d]^b.H.data[d];d=d+1|0;}Fj(a);}
function A99(a){return a.br?0:1;}
function VE(){Q.call(this);this.Jf=null;}
function Bay(a){var b=new VE();A_o(b,a);return b;}
function A_o(a,b){a.Jf=b;Be(a);}
function AHl(a,b){return Rw(b);}
var NV=D(0);
function FN(){var a=this;C.call(a);a.cq=null;a.c9=null;a.ds=null;a.jA=null;a.hs=null;a.eK=null;a.hS=null;a.la=0.0;a.jP=0.0;a.kx=0.0;a.me=0.0;a.r3=null;a.c6=null;a.Gl=null;}
function Lw(a){J(a);a.cq=S();a.c9=Cl(0.0,0.0,(-1.0));a.ds=Cl(0.0,1.0,0.0);a.jA=BL();a.hs=BL();a.eK=BL();a.hS=BL();a.la=1.0;a.jP=100.0;a.kx=0.0;a.me=0.0;a.r3=Bfg();a.c6=S();a.Gl=A_$(S(),S());}
function AIM(a,b,c,d){var e;((a.c6.I(b,c,d)).gl(a.cq)).bU();if(!a.c6.yr()){e=a.c6.yB(a.ds);if(CH(e-1.0)<9.999999717180685E-10)(a.ds.M(a.c9)).em((-1.0));else if(CH(e+1.0)<9.999999717180685E-10)a.ds.M(a.c9);a.c9.M(a.c6);a.HT();}}
function A0K(a){(a.c6.M(a.c9)).iC(a.ds);((a.ds.M(a.c6)).iC(a.c9)).bU();}
function A57(a,b,c){a.c9.rB(b,c);a.ds.rB(b,c);}
function APe(a,b,c,d){a.c6.M(b);a.c6.gl(a.cq);a.k_(a.c6);a.Gd(c,d);a.c6.rB(c,d);a.Kx( -a.c6.n, -a.c6.o, -a.c6.q);}
function API(a,b,c,d){a.cq.AS(b,c,d);}
function A_l(a,b){a.cq.fB(b);}
function QG(){var a=this;FN.call(a);a.lJ=0.0;a.yU=null;}
function Ber(){var a=new QG();AF8(a);return a;}
function AF8(a){Lw(a);a.lJ=1.0;a.yU=S();a.la=0.0;}
function AYx(a){a.p_(1);}
function A_z(a,b){a.jA.zg(a.lJ* -a.kx/2.0,a.lJ*a.kx/2.0,a.lJ* -(a.me/2.0),a.lJ*a.me/2.0,a.la,a.jP);a.hs.B5(a.cq,(a.yU.M(a.cq)).fB(a.c9),a.ds);a.eK.ch(a.jA);G9(a.eK.c,a.hs.c);if(b){a.hS.ch(a.eK);MZ(a.hS.c);a.r3.AL(a.hS);}}
var Hc=D(0);
function HO(){var a=this;C.call(a);a.c4=null;a.oR=0;a.w7=0;a.ii=0;a.l8=0;a.nN=0;}
function A0P(a,b){var c=new HO();AYz(c,a,b);return c;}
function BkQ(a){var b=new HO();ABv(b,a);return b;}
function AYz(a,b,c){J(a);a.ii=1;a.l8=0;a.w7=1;a.c4=AAU(c);a.c4.db();a.oR=Biq.i5();a.nN=!b?35048:35044;}
function ABv(a,b){J(a);a.ii=1;a.l8=0;a.w7=1;a.c4=AAU(b);a.c4.db();a.oR=Biq.i5();a.nN=35044;}
function AJ5(a){return BD(a.c4);}
function AVv(a){return CV(a.c4);}
function ANU(a,b,c,d){a.ii=1;a.c4.c1();a.c4.DH(b,c,d);a.c4.db();if(a.l8){Biq.fD(34963,BD(a.c4),a.c4,a.nN);a.ii=0;}}
function AUK(a){a.ii=1;return a.c4;}
function A9S(a){if(!a.oR)G(U(B(399)));Biq.c$(34963,a.oR);if(a.ii){Biq.fD(34963,BD(a.c4),a.c4,a.nN);a.ii=0;}a.l8=1;}
function A7a(a){Biq.c$(34963,0);a.l8=0;}
var Qu=D(HO);
function BcL(a){var b=new Qu();A5j(b,a);return b;}
function A5j(a,b){ABv(a,b);}
function JA(){D3.call(this);this.LG=0.0;}
var BkR=0.0;var BkS=null;function Qx(){Qx=N(JA);AOY();}
function A8W(a){return a.LG;}
function D_(b){var c,d,e,f,g,h,i,j,k,l,m,n;Qx();if(b.bN())G(Ec());c=0;d=b.i();while(true){if(b.f(c)>32){while(b.f(d-1|0)<=32){d=d+(-1)|0;}e=0;if(b.f(c)==45){c=c+1|0;e=1;}else if(b.f(c)==43)c=c+1|0;if(c==d)G(Ec());a:{f=b.f(c);g=0;h=0;i=0;if(f!=46){i=1;if(f>=48&&f<=57){b:{while(c<d){if(b.f(c)!=48)break b;c=c+1|0;}}while(c<d){j=b.f(c);if(j<48)break a;if(j>57)break a;if(g>=214748355)h=h+1|0;else g=(g*10|0)+(j-48|0)|0;c=c+1|0;}}else G(Ec());}}if(c<d&&b.f(c)==46){c=c+1|0;c:{while(true){if(c>=d)break c;k=b.f(c);if
(k<48)break c;if(k>57)break;if(g<214748355){g=(g*10|0)+(k-48|0)|0;h=h+(-1)|0;}c=c+1|0;i=1;}}if(!i)G(Ec());}if(c<d){j=b.f(c);if(j!=101&&j!=69)G(Ec());j=c+1|0;l=0;if(j==d)G(Ec());if(b.f(j)==45){j=j+1|0;l=1;}else if(b.f(j)==43)j=j+1|0;m=0;n=0;d:{while(true){if(j>=d)break d;k=b.f(j);if(k<48)break d;if(k>57)break;m=(10*m|0)+(k-48|0)|0;n=1;j=j+1|0;}}if(!n)G(Ec());if(l)m= -m|0;h=h+m|0;}e:{j=B9(h,38);if(j<=0){if(j)break e;if(g<=34028234)break e;}return e?(-Infinity):Infinity;}if(e)g= -g|0;return g*AAO(h);}c=c+1|0;if
(c==d)break;}G(Ec());}
function AAO(b){var c,d;Qx();if(b>=0)c=10.0;else{c=0.1;b= -b|0;}d=1.0;while(b){if(b%2|0)d=d*c;c=c*c;b=b/2|0;}return d;}
function Ok(b){Qx();return $rt_floatToIntBits(b);}
function AOY(){BkR=NaN;BkS=F($rt_floatcls());}
var V_=D();
function JY(b,c){var d,e,f,g;d=b.data;e=BW(c);f=Bq(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Oi(b,c){var d,e,f,g;d=b.data;e=Cj(c);f=Bq(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function ATB(b,c){var d,e,f,g;d=b.data;e=Bc(c);f=Bq(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function I8(b,c){var d,e,f,g;d=b.data;e=Lv((Ck(b)).gq(),c);f=Bq(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function AZS(b,c,d,e){var f,g;if(c>d)G(CL());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function IG(b,c){AZS(b,0,b.data.length,c);}
function AQL(b,c,d,e){var f,g;if(c>d)G(CL());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function APp(b,c){AQL(b,0,b.data.length,c);}
function Hk(b,c,d,e){var f,g;if(c>d)G(CL());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function U$(b,c){Hk(b,0,b.data.length,c);}
function A4I(b,c){return A5H(b,0,b.data.length,c);}
function A5H(b,c,d,e){var f,g,h,i,j;f=B9(c,d);if(f>0)G(CL());if(!f)return (-1);g=d-1|0;while(true){h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>g)return ( -i|0)-2|0;}else{g=i-1|0;if(g<c)return ( -i|0)-1|0;}}return i;}
function ABl(b,c){var d,e,f,g;if(b===c)return 1;if(b!==null&&c!==null){d=c.data;e=b.data;f=e.length;if(f==d.length){g=0;while(g<f){if(!A5w(e[g],d[g]))return 0;g=g+1|0;}return 1;}}return 0;}
function Dz(){BJ.call(this);this.fj=0;}
function Qo(a){var b=new Dz();APl(b,a);return b;}
function APl(a,b){C2(a);a.fj=b;}
function A2e(a){return 1;}
function AJK(a,b,c){return a.fj!=c.f(b)?(-1):1;}
function AH4(a,b,c,d){var e,f,g,h;if(!(c instanceof BN))return F3(a,b,c,d);e=c;f=d.J();while(true){if(b>=f)return (-1);g=e.eH(a.fj,b);if(g<0)return (-1);h=a.k;b=g+1|0;if(h.e(b,c,d)>=0)break;}return g;}
function ALh(a,b,c,d,e){var f,g;if(!(d instanceof BN))return Gb(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.mK(a.fj,c);if(g<0)break a;if(g<b)break a;if(a.k.e(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AR2(a){return (((I()).a(B(101))).U(a.fj)).b();}
function AFn(a){return a.fj;}
function ARq(a,b){if(b instanceof Dz)return b.ps()!=a.fj?0:1;if(!(b instanceof Dx)){if(b instanceof C4)return b.p(a.fj);if(!(b instanceof Dv))return 1;return 0;}return b.bH(0,Il(a.fj))<=0?0:1;}
function VY(){BZ.call(this);this.nk=null;}
function BdS(a){var b=new VY();AE6(b,a);return b;}
function AE6(a,b){a.nk=b;C7(a);}
function A_m(a,b,c){var d,e;d=El();e=d.AN();e.G4(AET(a.nk),Bcy(a,e));d.AN();return 1;}
var Mu=D();
var BkT=null;function BdM(){BdM=N(Mu);AKa();}
function AKa(){BkT=Bc((QJ()).data.length);BkT.data[BC(BkU)]=1;BkT.data[BC(BkV)]=2;BkT.data[BC(BkW)]=3;BkT.data[BC(BkX)]=4;}
function Wy(){var a=this;Q.call(a);a.sZ=0;a.BQ=null;a.tT=null;}
function Bc9(a,b,c){var d=new Wy();ATu(d,a,b,c);return d;}
function ATu(a,b,c,d){a.tT=b;a.sZ=c;a.BQ=d;Be(a);}
function AQk(a,b){return !(a.sZ^a.tT.bc.eL(b))&&!(a.sZ^a.tT.e_^a.BQ.p(b))?0:1;}
function WF(){var a=this;Q.call(a);a.xW=0;a.CT=null;a.CB=null;a.QE=null;}
function Bc6(a,b,c,d){var e=new WF();A0b(e,a,b,c,d);return e;}
function A0b(a,b,c,d,e){a.QE=b;a.xW=c;a.CT=d;a.CB=e;Be(a);}
function AC5(a,b){return a.xW^(!a.CT.p(b)&&!a.CB.p(b)?0:1)?0:1;}
function WA(){var a=this;Q.call(a);a.CY=null;a.N$=null;}
function BaM(a,b){var c=new WA();ADg(c,a,b);return c;}
function ADg(a,b,c){a.N$=b;a.CY=c;Be(a);}
function A65(a,b){return a.CY.p(b);}
var M8=D(0);
function Wz(){var a=this;Q.call(a);a.qi=0;a.zz=null;a.r7=null;}
function Bax(a,b,c){var d=new Wz();ADs(d,a,b,c);return d;}
function ADs(a,b,c,d){a.r7=b;a.qi=c;a.zz=d;Be(a);}
function A3v(a,b){return !(a.qi^a.r7.bc.eL(b))&&!(a.qi^a.r7.e_^a.zz.p(b))?1:0;}
function WB(){var a=this;Q.call(a);a.xm=null;a.QS=null;}
function BaJ(a,b){var c=new WB();ADp(c,a,b);return c;}
function ADp(a,b,c){a.QS=b;a.xm=c;Be(a);}
function AJr(a,b){return a.xm.p(b);}
function WI(){var a=this;Q.call(a);a.yy=null;a.DI=0;a.yq=null;}
function A_3(a,b,c){var d=new WI();AHe(d,a,b,c);return d;}
function AHe(a,b,c,d){a.yq=b;a.yy=c;a.DI=d;Be(a);}
function AYt(a,b){return !a.yy.p(b)&&!(a.DI^a.yq.bc.eL(b))?1:0;}
var GS=D(0);
function WD(){var a=this;Q.call(a);a.Fl=0;a.zA=null;a.zt=null;a.Mi=null;}
function BfW(a,b,c,d){var e=new WD();ADP(e,a,b,c,d);return e;}
function ADP(a,b,c,d,e){a.Mi=b;a.Fl=c;a.zA=d;a.zt=e;Be(a);}
function AY$(a,b){return a.Fl^(!a.zA.p(b)&&!a.zt.p(b)?0:1);}
function WC(){var a=this;Q.call(a);a.E0=null;a.MG=null;}
function Bf6(a,b){var c=new WC();AUU(c,a,b);return c;}
function AUU(a,b,c){a.MG=b;a.E0=c;Be(a);}
function AMC(a,b){return a.E0.p(b)?0:1;}
function P3(){BB.call(this);this.rD=null;}
function Bca(a){var b=new P3();AGw(b,a);return b;}
function AGw(a,b){CQ(a);a.rD=b;}
function A5c(a,b,c,d){var e,f,g,h,i;e=d.J();f=b+1|0;if(f>e){d.d5=1;return (-1);}g=c.f(b);if(BY(g)){h=b+2|0;if(h<=e){i=c.f(f);if(GA(g,i))return a.rD.k1(Dh(g,i))?(-1):a.k.e(h,c,d);}}return a.rD.k1(g)?(-1):a.k.e(f,c,d);}
function AYk(a){return B(400);}
function A7p(a,b){a.k=b;}
function AC3(a){return (-2147483602);}
function ATP(a,b){return 1;}
function WG(){var a=this;Q.call(a);a.yc=null;a.CW=0;a.y6=null;}
function BdE(a,b,c){var d=new WG();A0J(d,a,b,c);return d;}
function A0J(a,b,c,d){a.y6=b;a.yc=c;a.CW=d;Be(a);}
function AR0(a,b){return !a.yc.p(b)&&!(a.CW^a.y6.bc.eL(b))?0:1;}
var DK=D();
var BkY=null;var BkZ=null;var Bk0=null;var Bk1=null;var Bk2=null;var Bk3=null;function Bd(){Bd=N(DK);AVU();}
function Il(b){var c,d;Bd();c=new BN;d=BW(1);d.data[0]=b;Iy(c,d);return c;}
function VI(b){Bd();return b>0&&b<=65535?1:0;}
function Ik(b){Bd();return b>=65536&&b<=1114111?1:0;}
function BY(b){Bd();return (b&64512)!=55296?0:1;}
function BG(b){Bd();return (b&64512)!=56320?0:1;}
function Jz(b){Bd();return !BY(b)&&!BG(b)?0:1;}
function GA(b,c){Bd();return BY(b)&&BG(c)?1:0;}
function Dh(b,c){Bd();return ((b&1023)<<10|c&1023)+65536|0;}
function ST(b,c){Bd();return WH(b,c,b.data.length);}
function WH(b,c,d){var e,f;Bd();if(c<(d-1|0)){e=b.data;if(BY(e[c])){f=c+1|0;if(BG(e[f]))return Dh(e[c],e[f]);}}return b.data[c];}
function FB(b){var c;Bd();c=b-65536|0;return (55296|c>>10&1023)&65535;}
function Fi(b){Bd();return (56320|b&1023)&65535;}
function Dq(b){Bd();return EX(b)&65535;}
function EX(b){Bd();return (AA9(b)).toLowerCase().charCodeAt(0);}
function DB(b){Bd();return En(b)&65535;}
function En(b){Bd();return (AA9(b)).toUpperCase().charCodeAt(0);}
function NM(b,c){Bd();return ABc(b,c);}
function ABc(b,c){var d;Bd();if(c>=2&&c<=36){d=MI(b);if(d>=c)d=(-1);return d;}return (-1);}
function No(b){Bd();return MI(b);}
function MI(b){var c,d,e,f,g,h,i,j;Bd();c=OT();d=c.data;e=0;f=(d.length/2|0)-1|0;while(f>=e){g=(e+f|0)/2|0;h=g*2|0;i=d[h];j=B9(b,i);if(j>0)e=g+1|0;else{if(j>=0)return d[h+1|0];f=g-1|0;}}return (-1);}
function FQ(b,c){Bd();if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function ACI(b){Bd();return Cv(b)!=9?0:1;}
function OT(){Bd();if(BkZ===null)BkZ=A$u(((R6()).value!==null?$rt_str((R6()).value):null));return BkZ;}
function R6(){Bd();if(Bk2===null)Bk2=YS();return Bk2;}
function YU(){Bd();if(Bk0===null)Bk0=AUe(((Yh()).value!==null?$rt_str((Yh()).value):null));return Bk0;}
function Yh(){Bd();if(Bk3===null)Bk3=U1();return Bk3;}
function Eu(b){var c;Bd();if(b<65536){c=BW(1);c.data[0]=b&65535;return c;}return I5([FB(b),Fi(b)]);}
function Q8(b){var c;Bd();a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}c=1;break a;}c=0;}return c;}
function F_(b){Bd();return Cv(b);}
function Cv(b){var c,d,e,f,g,h;Bd();if(VI(b)&&Jz(b&65535))return 19;c=YU();d=c.data;e=0;f=d.length-1|0;while(e<=f){g=(e+f|0)/2|0;h=d[g];if(b>=h.yf)e=g+1|0;else{if(b>=h.tM)return h.Cs.data[b-h.tM|0];f=g-1|0;}}return 0;}
function Uh(b){Bd();return Cv(b)!=2?0:1;}
function Vs(b){Bd();return Cv(b)!=1?0:1;}
function O7(b){Bd();return Cv(b)!=3?0:1;}
function RM(b){Bd();return !Cv(b)?0:1;}
function Ue(b){Bd();switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:break;default:return 0;}return 1;}
function M$(b){Bd();return J1(b);}
function J1(b){Bd();a:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Rw(b){Bd();a:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return Fx(b);}
function UX(b){Bd();a:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return Fx(b);}
function Uw(b){Bd();a:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break a;default:break a;}return 1;}return Fx(b);}
function Yj(b){Bd();a:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break a;default:break a;}return 1;}return Fx(b);}
function Fx(b){Bd();a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Cv(b)!=16?0:1;}
function MT(b){Bd();switch(Cv(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Ta(b){Bd();return KL(b);}
function KL(b){Bd();switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return MT(b);}return 1;}
function AVU(){BkY=F($rt_charcls());Bk1=Y(DK,128);}
function YS(){return {"value":"{?*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%slG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%sTEG%%%%%%%%%%%%%%%%%%&5G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%VR#G%%%%%%%%%%%%%"
+"%%%%%"};}
function U1(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
function OR(){var a=this;BJ.call(a);a.sK=0;a.A3=0;}
function AXH(a){var b=new OR();APW(b,a);return b;}
function APW(a,b){C2(a);a.sK=b;a.A3=GF(b);}
function ADH(a,b,c){return a.sK!=c.f(b)&&a.A3!=c.f(b)?(-1):1;}
function AKd(a){return (((I()).a(B(401))).U(a.sK)).b();}
function Dv(){var a=this;BJ.call(a);a.mL=0;a.lW=0;a.m3=0;}
function Bad(a){var b=new Dv();ATN(b,a);return b;}
function ATN(a,b){var c,d;C2(a);a.bO=2;a.m3=b;c=Eu(b);d=c.data;a.mL=d[0];a.lW=d[1];}
function A61(a,b,c){var d,e,f;d=b+1|0;e=c.f(b);f=c.f(d);return a.mL==e&&a.lW==f?2:(-1);}
function A4H(a,b,c,d){var e,f,g,h;if(!(c instanceof BN))return F3(a,b,c,d);e=c;f=d.J();while(b<f){g=e.eH(a.mL,b);if(g<0)return (-1);b=g+1|0;if(b>=f)continue;h=e.f(b);if(a.lW==h&&a.k.e(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AF1(a,b,c,d,e){var f,g,h;if(!(d instanceof BN))return Gb(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.mK(a.lW,c);h=g+(-1)|0;if(h<0)break a;if(h<b)break a;if(a.mL==f.f(h)&&a.k.e(h+2|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function A9G(a){return ((((I()).a(B(101))).U(a.mL)).U(a.lW)).b();}
function AUZ(a){return a.m3;}
function A6G(a,b){if(b instanceof Dv)return b.sU()!=a.m3?0:1;if(b instanceof C4)return b.p(a.m3);if(b instanceof Dz)return 0;if(!(b instanceof Dx))return 1;return 0;}
function Zd(){var a=this;T.call(a);a.su=0;a.qj=0;a.vX=0;}
function G6(a,b){var c=new Zd();AHL(c,a,b);return c;}
function Ben(a,b,c){var d=new Zd();AUA(d,a,b,c);return d;}
function AHL(a,b,c){Bo(a);a.qj=c;a.su=b;}
function AUA(a,b,c,d){Bo(a);a.vX=d;a.qj=c;a.su=b;}
function ADa(a){var b;b=A_9(a.su);if(a.vX)b.bG.n4(0,2048);b.be=a.qj;return b;}
var Sw=D();
function Se(){var a=this;C.call(a);a.y1=null;a.gC=null;a.gp=null;a.fQ=null;}
function Bfu(){var a=new Se();A6h(a);return a;}
function A6h(a){J(a);a.gC=null;a.gp=null;a.fQ=null;}
var D9=D();
var Bk4=null;var Bk5=null;function Kn(a){J(a);}
function MP(b){if(!(b&1)){if(Bk5!==null)return Bk5;Bk5=BfK();return Bk5;}if(Bk4!==null)return Bk4;Bk4=Bfh();return Bk4;}
var HU=D(CT);
function ZD(a,b,c,d){FJ(a,b);a.C=c;a.bb=d;}
function UR(b){if(b>=0)return Bdv(b);G(W((((I()).a(B(402))).j(b)).b()));}
function Zl(b,c,d){return Bb3(0,b.data.length,b,c,c+d|0,0);}
function Lb(b){return Zl(b,0,b.data.length);}
function AEr(a,b,c,d){var e,f,g,h,i;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bg((((((I()).a(B(403))).j(g)).a(B(404))).j(f)).b()));if(Bb(a)<d)G(UB());if(d<0)G(Bg(((((I()).a(B(405))).j(d)).a(B(406))).b()));h=a.C;i=0;while(i<d){g=c+1|0;f=h+1|0;e[c]=a.z2(h);i=i+1|0;c=g;h=f;}a.C=a.C+d|0;return a;}}e=b.data;G(Bg(((((((I()).a(B(407))).j(c)).a(B(64))).j(e.length)).a(B(24))).b()));}
function APC(a,b){return a.rl(b,0,b.data.length);}
function A_p(a,b,c,d){var e,f,g,h,i;if(a.b_())G(C9());if(Bb(a)<d)G(F0());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bg((((((I()).a(B(408))).j(g)).a(B(404))).j(f)).b()));if(d<0)G(Bg(((((I()).a(B(405))).j(d)).a(B(406))).b()));h=a.C;i=0;while(i<d){g=h+1|0;f=c+1|0;a.sd(h,e[c]);i=i+1|0;h=g;c=f;}a.C=a.C+d|0;return a;}}e=b.data;G(Bg(((((((I()).a(B(407))).j(c)).a(B(64))).j(e.length)).a(B(24))).b()));}
function AWz(a,b,c,d){var e,f,g,h,i,j;if(a.b_())G(C9());e=d-c|0;if(Bb(a)<e)G(F0());if(c>=0&&c<b.i()){if(d>b.i()){f=new Ej;g=(((I()).a(B(408))).j(d)).a(B(409));M7(f,(g.j(b.i())).b());G(f);}if(c>d)G(Bg((((((I()).a(B(410))).j(c)).a(B(411))).j(d)).b()));h=a.C;while(c<d){i=h+1|0;j=c+1|0;a.sd(h,b.f(c));h=i;c=j;}a.C=a.C+e|0;return a;}G(Bg(((((((I()).a(B(410))).j(c)).a(B(64))).j(b.i())).a(B(24))).b()));}
function IV(a,b){return a.H0(b,0,b.i());}
function WJ(a){return a.Ox();}
function NL(a){return a.NE();}
function K_(a){G7(a);return a;}
function AMn(a,b){GL(a,b);return a;}
var Hs=D(HU);
function Qd(a,b,c,d){ZD(a,b,c,d);}
function AEu(a){var b,c,d,e;if(a.b_())G(C9());a:{b=Bb(a);if(a.C>0){c=a.C;d=0;while(true){if(d>=b)break a;e=c+1|0;a.sd(d,a.z2(c));d=d+1|0;c=e;}}}a.C=b;a.bb=a.hB;a.fE=(-1);return a;}
function A$S(a){return a.e1();}
function Ro(){var a=this;Hs.call(a);a.Fx=0;a.u9=0;a.nC=null;}
function Bdv(a){var b=new Ro();A50(b,a);return b;}
function Bb3(a,b,c,d,e,f){var g=new Ro();Va(g,a,b,c,d,e,f);return g;}
function A50(a,b){Va(a,0,b,BW(b),0,b,0);}
function Va(a,b,c,d,e,f,g){Qd(a,c,e,f);a.u9=b;a.Fx=g;a.nC=d;}
function A5g(a,b){return a.nC.data[b+a.u9|0];}
function A3i(a,b,c){a.nC.data[b+a.u9|0]=c;}
function AOb(a){return 1;}
function AIS(a){return a.nC;}
function ATm(a){return a.Fx;}
function S8(){var a=this;C.call(a);a.fr=0;a.eI=null;a.eM=null;a.gV=null;a.ik=0;a.xi=0.0;a.qc=0;a.q5=0;a.h3=0;}
function BdF(a){var b=new S8();AQj(b,a);return b;}
function Bk6(a,b){var c=new S8();Q3(c,a,b);return c;}
function AQj(a,b){Q3(a,b,0.800000011920929);}
function Q3(a,b,c){var d;J(a);if(c>0.0&&c<1.0){a.xi=c;d=G3(b,c);a.qc=d*c|0;a.h3=d-1|0;a.q5=CW(O(a.h3));a.eI=Bc(d);a.eM=Y(C,d);return;}G(W((((I()).a(B(40))).cD(c)).b()));}
function AJj(a,b){return Cp(CN(Cf(O(b),Cd(2135587861, 2654435769)),a.q5));}
function IO(a,b){var c,d,e;c=a.eI;d=a.e8(b);while(true){e=c.data[d];if(!e)return  -(d+1|0)|0;if(e==b)break;d=(d+1|0)&a.h3;}return d;}
function A0W(a,b,c){var d,e,f;if(!b){d=a.gV;a.gV=c;if(!a.ik){a.ik=1;a.fr=a.fr+1|0;}return d;}e=IO(a,b);if(e>=0){d=a.eM.data[e];a.eM.data[e]=c;return d;}f= -(e+1|0)|0;a.eI.data[f]=b;a.eM.data[f]=c;f=a.fr+1|0;a.fr=f;if(f>=a.qc)TK(a,a.eI.data.length<<1);return null;}
function Xo(a,b,c){var d,e,f;d=a.eI;e=a.e8(b);while(true){f=d.data;if(!f[e])break;e=(e+1|0)&a.h3;}f[e]=b;a.eM.data[e]=c;}
function AT3(a,b){var c;if(!b)return !a.ik?null:a.gV;c=IO(a,b);return c<0?null:a.eM.data[c];}
function A9H(a,b){var c,d,e,f,g,h,i,j,k,l;if(!b){if(!a.ik)return null;a.ik=0;c=a.gV;a.gV=null;a.fr=a.fr-1|0;return c;}d=IO(a,b);if(d<0)return null;e=a.eI;f=a.eM;g=f.data;c=g[d];h=a.h3;i=(d+1|0)&h;while(true){j=e.data;k=j[i];if(!k)break;l=a.e8(k);if(((i-l|0)&h)>((d-l|0)&h)){j[d]=k;g[d]=g[i];d=i;}i=(i+1|0)&h;}j[d]=0;g[d]=null;a.fr=a.fr-1|0;return c;}
function ATH(a,b,c){var d,e,f,g;a:{d=a.eM;if(b===null){if(a.ik&&a.gV===null)return 1;e=d.data;f=a.eI;g=e.length-1|0;while(true){if(g<0)break a;if(f.data[g]&&e[g]===null)break;g=g+(-1)|0;}return 1;}if(c){if(b===a.gV)return 1;e=d.data;g=e.length-1|0;while(true){if(g<0)break a;if(e[g]===b)break;g=g+(-1)|0;}return 1;}if(a.ik&&b.z(a.gV))return 1;e=d.data;g=e.length-1|0;while(true){if(g<0)break a;if(b.z(e[g]))return 1;g=g+(-1)|0;}}return 0;}
function TK(a,b){var c,d,e,f,g;a:{c=a.eI.data.length;a.qc=b*a.xi|0;a.h3=b-1|0;a.q5=CW(O(a.h3));d=a.eI;e=a.eM;a.eI=Bc(b);a.eM=Y(C,b);if(a.fr>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g)Xo(a,g,e.data[f]);f=f+1|0;}}}}
var ABC=D(Do);
function BdC(a){var b=new ABC();AHH(b,a);return b;}
function AHH(a,b){GH(a,b,1.0,1.0);}
function AP_(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(BY(l)){if(j==d){if(h.dO(2)){j=j+(-1)|0;break a;}Bj();i=BgZ;break a;}m=k[j];if(!BG(m)){i=BV(1);break a;}j=j+(-1)|0;i=F$(2);break a;}if(BG(l))i=BV(1);if(l>=256){j=j+(-1)|0;i=F$(1);break a;}k=e.data;n=f+1|0;k[f]=l<<24>>24;c=j;f=n;}j=c;}h.el(j);h.dR(f);return i;}
function EA(){var a=this;C.call(a);a.fg=Ba;a.cA=null;a.n2=0;}
function ATE(){var a=new EA();Lz(a);return a;}
function Lz(a){J(a);a.cA=Bp();a.n2=1;}
function GP(a){if(!a.n2){a.cA.Dx(a);a.n2=1;}}
function Eg(a){return a.fg;}
function BA(a,b){var c;a:{if(Ct(a,b)){c=0;while(true){if(c>=a.cA.h)break a;if(Z((a.cA.l(c)).dc,b))return a.cA.l(c);c=c+1|0;}}}return null;}
function HK(a,b,c){return BA(a,c);}
function AKn(a){a.fg=Ba;a.cA.K();}
function Xw(a,b){a.fg=BQ(a.fg,b);}
function Ep(a,b){var c;c=a.KW(b.dc);if(c>=0)a.cA.k4(c,b);else{Xw(a,b.dc);a.cA.F(b);a.n2=0;}GP(a);}
function X6(a,b){var c,d,e,f;c=b.data;d=c.length;e=0;while(e<d){f=c[e];Ep(a,f);e=e+1|0;}}
function F7(a,b){var c,d;c=b.ft();while(c.bC()){d=c.bz();Ep(a,d);}}
function Ct(a,b){return Dw(b,Ba)&&Z(Br(a.fg,b),b)?1:0;}
function AQC(a,b){var c;a:{if(Ct(a,b)){c=0;while(true){if(c>=a.cA.h)break a;if(Z((a.cA.l(c)).dc,b))break;c=c+1|0;}return c;}}return (-1);}
function RX(a,b,c){var d;if(b===a)return 1;if(b!==null&&Z(a.fg,b.fg)){if(!c)return 1;GP(a);GP(b);d=0;while(d<a.cA.h){if(!(a.cA.l(d)).zK(b.cA.l(d)))return 0;d=d+1|0;}return 1;}return 0;}
function Q1(a,b,c){return Cp(D6(b.dc,c.dc));}
function Kc(a){return a.cA.bZ();}
function AWV(a){var b,c,d,e,f;GP(a);b=a.cA.h;c=CA(O(71),a.fg);d=1;e=0;while(e<b){f=Cf(a.fg,O((a.cA.l(e)).bp()));d=(d*7|0)&65535;c=CA(c,Cf(f,O(d)));e=e+1|0;}return Cp(ARp(c,M_(c,32)));}
function Wc(a){return a.Ge();}
function Vw(a,b){if(!(b instanceof EA))return 0;if(b===a)return 1;return RX(a,b,1);}
function AWB(a,b,c){return Q1(a,b,c);}
function F4(){EA.call(this);this.mv=null;}
var Bk7=0;function Jn(){Jn=N(F4);A9N();}
function Bk8(){var a=new F4();KA(a);return a;}
function Bk9(a){var b=new F4();Jl(b,a);return b;}
function BdY(a){var b=new F4();NH(b,a);return b;}
function Bc_(a){var b=new F4();ACa(b,a);return b;}
function Bk$(a,b){var c=new F4();KN(c,a,b);return c;}
function KA(a){var b,c;Jn();b=(I()).a(B(412));c=Bk7+1|0;Bk7=c;Jl(a,(b.j(c)).b());}
function Jl(a,b){Jn();Lz(a);a.mv=b;}
function NH(a,b){Jn();KA(a);X6(a,b);}
function ACa(a,b){Jn();KN(a,b.mv,b);}
function KN(a,b,c){var d,e;Jn();Jl(a,b);d=Kc(c);while(d.bC()){e=d.bz();Ep(a,e.pf());}}
function A7s(a){return Bc_(a);}
function AL9(a){return Wc(a)+(3*a.mv.bp()|0)|0;}
function AIc(a,b){var c;a:{b:{if(b instanceof F4){if(b===a)break b;if(b.mv.z(a.mv)&&Vw(a,b))break b;}c=0;break a;}c=1;}return c;}
function A9N(){Bk7=0;}
function D5(){var a=this;C.call(a);a.rS=0;a.pF=0;a.hg=null;}
function N6(a){Mb(a,16,2147483647);}
function Mb(a,b,c){J(a);a.hg=AXQ(0,b);a.rS=c;}
function OW(a){return !a.hg.h?a.tX():a.hg.vt();}
function AGG(a,b){if(b===null)G(W(B(413)));if(a.hg.h>=a.rS)a.Dd(b);else{a.hg.F(b);a.pF=Bf(a.pF,a.hg.h);a.zm(b);}}
function AJP(a,b){if(ARc(b,EJ))b.fV();}
function AYl(a,b){}
function UO(a,b){var c,d,e,f,g;if(b===null)G(W(B(41)));c=a.hg;d=a.rS;e=0;f=b.h;while(e<f){g=b.l(e);if(g!==null){if(c.h>=d)a.Dd(g);else{c.F(g);a.zm(g);}}e=e+1|0;}a.pF=Bf(a.pF,c.h);}
function DX(){D5.call(this);this.n1=null;}
function Jh(a){N6(a);a.n1=Bp();}
function Wi(a){var b;b=OW(a);a.n1.F(b);return b;}
function AMB(a){UO(a,a.n1);a.n1.K();}
var TD=D(DX);
function BdL(){var a=new TD();AEd(a);return a;}
function AEd(a){Jh(a);}
function AM8(a){return A_8();}
function A9m(a){var b;b=Wi(a);b.cw=null;b.da=null;b.cS.FY(B(101),null,0,0,0);b.kP=null;b.BT=null;return b;}
function AGJ(a){return a.K7();}
function ANH(a){return a.OT();}
function AAc(){Q.call(this);this.O9=null;}
function BcW(a){var b=new AAc();ADk(b,a);return b;}
function ADk(a,b){a.O9=b;Be(a);}
function A9a(a,b){return O7(b);}
function JG(){var a=this;C.call(a);a.dl=0.0;a.dj=0.0;a.dk=0.0;a.d7=0.0;}
var Bk_=null;var Bla=null;function APS(){APS=N(JG);AJ4();}
function AAM(a,b,c,d){var e=new JG();Yd(e,a,b,c,d);return e;}
function AWg(){var a=new JG();Rs(a);return a;}
function Yd(a,b,c,d,e){APS();J(a);a.nx(b,c,d,e);}
function Rs(a){APS();J(a);a.Ck();}
function AH3(a,b,c,d,e){a.dl=b;a.dj=c;a.dk=d;a.d7=e;return a;}
function AM3(a,b){return a.nx(b.dl,b.dj,b.dk,b.d7);}
function AYT(a,b,c){return a.Kd(b.n,b.o,b.q,c);}
function A4p(a){return a.dl*a.dl+a.dj*a.dj+a.dk*a.dk+a.d7*a.d7;}
function ANo(a){var b,c;b=a.ub();if(b!==0.0&&!Dl(b,1.0)){c=FR(b);a.d7=a.d7/c;a.dl=a.dl/c;a.dj=a.dj/c;a.dk=a.dk/c;}return a;}
function A23(a,b){var c,d,e,f,g,h,i,j,k,l;c=b.data;d=a.dl*a.dl;e=a.dl*a.dj;f=a.dl*a.dk;g=a.dl*a.d7;h=a.dj*a.dj;i=a.dj*a.dk;j=a.dj*a.d7;k=a.dk*a.dk;l=a.dk*a.d7;c[0]=1.0-2.0*(h+k);c[4]=2.0*(e-l);c[8]=2.0*(f+j);c[12]=0.0;c[1]=2.0*(e+l);c[5]=1.0-2.0*(d+k);c[9]=2.0*(i-g);c[13]=0.0;c[2]=2.0*(f-j);c[6]=2.0*(i+g);c[10]=1.0-2.0*(d+h);c[14]=0.0;c[3]=0.0;c[7]=0.0;c[11]=0.0;c[15]=1.0;}
function A$Q(a){return a.nx(0.0,0.0,0.0,1.0);}
function AEh(a,b,c,d,e){return a.J4(b,c,d,e*0.01745329238474369);}
function ARD(a,b,c,d,e){var f,g,h,i,j,k;f=TV(b,c,d);if(f===0.0)return a.Ck();g=1.0/f;h=e>=0.0?e%6.2831854820251465:6.2831854820251465- -e%6.2831854820251465;i=h/2.0;j=A8x(i);k=AEv(i);return (a.nx(g*b*j,g*c*j,g*d*j,k)).JT();}
function AJ4(){Bk_=AAM(0.0,0.0,0.0,0.0);Bla=AAM(0.0,0.0,0.0,0.0);}
var Eb=D();
var Blb=null;var Blc=null;var Bld=null;var Ble=null;var Blf=null;var Blg=null;function Bd2(){Bd2=N(Eb);ANO();}
function ANO(){Hw();Blb=Bkn;Blc=Bb6();Bld=Bbs();Ble=RF(B(414),1,0);Blf=RF(B(415),0,0);Blg=RF(B(416),0,1);}
var NC=D();
var Blh=0;function Lc(){Lc=N(NC);A2Y();}
function AAW(b,c,d,e){var f;Lc();if(!Blh){MU(b,c,d,e);return;}a:{f=Bg2.u5();Vy();if(f!==BhX&&Bg2.u5()!==Bh1){f=Bg2;if(f.u5()!==Bh2){AAC(b,c,d,e);break a;}}XI(b,c);}}
function XI(b,c){var d,e,f,g,h,i,j;Lc();d=Bip;e=c.ky();f=c.bo();g=c.bl();h=c.l0();i=c.le();j=c.kA();d.kB(b,0,e,f,g,0,h,i,j);Biq.xb(b);}
function AAC(b,c,d,e){var f,g,h,i,j,k,l;Lc();a:{if(!Bim.tZ(B(417))){f=Bim;if(!f.tZ(B(418))&&Bir===null){MU(b,c,d,e);break a;}}f=Bip;g=c.ky();h=c.bo();i=c.bl();j=c.l0();k=c.le();l=c.kA();f.kB(b,0,g,h,i,0,j,k,l);Biq.xb(b);}}
function MU(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;Lc();f=Bip;g=c.ky();h=c.bo();i=c.bl();j=c.l0();k=c.le();l=c.kA();f.kB(b,0,g,h,i,0,j,k,l);if(Biq===null&&d!=e)G(U(B(419)));m=c.bo()/2|0;n=c.bl()/2|0;o=1;while(m>0&&n>0){p=O1(m,n,c.f8());Gv();p.D5(BjL);p.Lv(c,0,0,c.bo(),c.bl(),0,0,m,n);if(o>1)c.iz();f=Bip;j=p.ky();k=p.bo();q=p.bl();g=p.l0();h=p.le();l=p.kA();f.kB(b,o,j,k,q,0,g,h,l);m=p.bo()/2|0;n=p.bl()/2|0;o=o+1|0;c=p;}}
function A2Y(){Blh=1;}
function RI(){Q.call(this);this.Hk=null;}
function BbX(a){var b=new RI();A0f(b,a);return b;}
function A0f(a,b){a.Hk=b;Be(a);}
function AZ$(a,b){return 0;}
var G4=D();
var Bli=null;function R3(a){J(a);}
function El(){return Bli;}
function Y5(){C3.call(this);this.NY=null;}
function Bf5(a){var b=new Y5();AEZ(b,a);return b;}
function AEZ(a,b){FX(a);a.NY=b;}
var GI=D(CT);
function Py(a,b,c,d){FJ(a,b);a.C=c;a.bb=d;}
function AIu(b,c,d){return Be4(0,b.data.length,b,c,c+d|0,0);}
function A3T(b){return AIu(b,0,b.data.length);}
function A8y(a,b,c,d){var e,f,g,h,i;if(a.b_())G(C9());if(Bb(a)<d)G(F0());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bg((((((I()).a(B(420))).j(g)).a(B(404))).j(f)).b()));if(d<0)G(Bg(((((I()).a(B(405))).j(d)).a(B(406))).b()));h=a.C;i=0;while(i<d){g=h+1|0;f=c+1|0;a.qW(h,e[c]);i=i+1|0;h=g;c=f;}a.C=a.C+d|0;return a;}}e=b.data;G(Bg(((((((I()).a(B(407))).j(c)).a(B(64))).j(e.length)).a(B(24))).b()));}
function Uo(a){FZ(a);return a;}
function AB9(a){G7(a);return a;}
function APP(a,b){IZ(a,b);return a;}
function A7y(a,b){GL(a,b);return a;}
function A8F(a){return AB9(a);}
function ATL(a){return Uo(a);}
function A3A(a,b){return a.H5(b);}
function AVy(a,b){return a.HL(b);}
var Fh=D(GI);
function Ls(a,b,c,d){Py(a,b,c,d);}
function A6C(a,b){if(b>=0&&b<a.bb)return a.vo(b);G(Bg(((((((I()).a(B(354))).j(b)).a(B(64))).j(a.bb)).a(B(24))).b()));}
function A2y(a){return a.e1();}
function Fr(){var a=this;Fh.call(a);a.fH=null;a.wL=0;a.fC=0;}
function Lu(a,b,c,d,e,f,g){Ls(a,c,e,f);a.fC=b;a.fH=d;a.wL=g;}
function A1h(a){return a.wL;}
var VQ=D(Fr);
function Bf0(a,b,c,d,e,f){var g=new VQ();A3e(g,a,b,c,d,e,f);return g;}
function A3e(a,b,c,d,e,f,g){Lu(a,b,c,d,e,f,g);}
function AYs(a,b){var c,d,e,f;c=a.fH.A.data;d=a.fC;e=b*2|0;f=c[d+e|0]&255|(a.fH.A.data[(a.fC+e|0)+1|0]&255)<<8;return f<<16>>16;}
function AXN(a,b,c){var d,e,f;d=a.fH.A.data;e=a.fC;f=b*2|0;d[e+f|0]=c<<24>>24;a.fH.A.data[(a.fC+f|0)+1|0]=c>>8<<24>>24;}
function YH(){Q.call(this);this.Iw=null;}
function Bar(a){var b=new YH();A0g(b,a);return b;}
function A0g(a,b){a.Iw=b;Be(a);}
function AP0(a,b){return Q8(b);}
var DW=D(CT);
function AAy(a,b,c,d){FJ(a,b);a.C=c;a.bb=d;}
function A9$(b,c,d){return Bbi(0,b.data.length,b,c,c+d|0,0);}
function AVr(b){return A9$(b,0,b.data.length);}
function ANA(a,b,c,d){var e,f,g,h,i;if(a.b_())G(C9());if(Bb(a)<d)G(F0());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bg((((((I()).a(B(421))).j(g)).a(B(404))).j(f)).b()));if(d<0)G(Bg(((((I()).a(B(405))).j(d)).a(B(406))).b()));h=a.C;i=0;while(i<d){g=h+1|0;f=c+1|0;a.nh(h,e[c]);i=i+1|0;h=g;c=f;}a.C=a.C+d|0;return a;}}e=b.data;G(Bg(((((((I()).a(B(407))).j(c)).a(B(64))).j(e.length)).a(B(24))).b()));}
function R5(a){FZ(a);return a;}
function Wm(a){G7(a);return a;}
function AJi(a,b){IZ(a,b);return a;}
function A4S(a,b){GL(a,b);return a;}
function AJA(a){return Wm(a);}
function AT0(a){return R5(a);}
function AOU(a,b){return a.OZ(b);}
function AS8(a,b){return a.MK(b);}
var Fu=D(DW);
function K4(a,b,c,d){AAy(a,b,c,d);}
function AK5(a,b){if(b>=0&&b<a.bb)return a.vp(b);G(Bg(((((((I()).a(B(354))).j(b)).a(B(64))).j(a.bb)).a(B(24))).b()));}
function A$O(a,b,c){if(a.b_())G(C9());if(b>=0&&b<a.bb){a.nh(b,c);return a;}G(Bg(((((((I()).a(B(354))).j(b)).a(B(64))).j(a.bb)).a(B(24))).b()));}
function AYO(a){return a.e1();}
function ER(){var a=this;Fu.call(a);a.cx=null;a.Fk=0;a.cj=0;}
function LQ(a,b,c,d,e,f,g){K4(a,c,e,f);a.cj=b;a.cx=d;a.Fk=g;}
function A5D(a){return a.Fk;}
function ABL(){Bt.call(this);this.ma=0;}
function Bbt(a){var b=new ABL();A0t(b,a);return b;}
function A0t(a,b){Co(a);a.ma=b;}
function ALA(a,b,c,d){var e;e=!d.jB()?c.i():d.J();if(b>=e){d.by(a.ma,0);return a.k.e(b,c,d);}if((e-b|0)==1&&c.f(b)==10){d.by(a.ma,1);return a.k.e(b+1|0,c,d);}return (-1);}
function A0p(a,b){var c;c=!b.ev(a.ma)?0:1;b.by(a.ma,(-1));return c;}
function AMk(a){return B(422);}
function Ut(){BJ.call(this);this.sY=0;}
function A6D(a){var b=new Ut();A4t(b,a);return b;}
function A4t(a,b){C2(a);a.sY=Dq(DB(b));}
function AUw(a,b,c){return a.sY!=Dq(DB(c.f(b)))?(-1):1;}
function A5s(a){return (((I()).a(B(423))).U(a.sY)).b();}
function Hp(){BH.call(this);this.Ec=null;}
var Blj=Ba;function A3P(){A3P=N(Hp);A6k();}
function A6k(){Blj=BR(B(424));}
function E5(){var a=this;C.call(a);a.P=null;a.h=0;a.gQ=0;a.qs=null;}
function Bp(){var a=new E5();AFQ(a);return a;}
function DL(a){var b=new E5();Oq(b,a);return b;}
function AXQ(a,b){var c=new E5();Kk(c,a,b);return c;}
function Blk(a,b,c){var d=new E5();Vo(d,a,b,c);return d;}
function Bfs(a){var b=new E5();A8e(b,a);return b;}
function Bll(a,b,c,d){var e=new E5();Rq(e,a,b,c,d);return e;}
function AFQ(a){Kk(a,1,16);}
function Oq(a,b){Kk(a,1,b);}
function Kk(a,b,c){J(a);a.gQ=b;a.P=Y(C,c);}
function Vo(a,b,c,d){J(a);a.gQ=b;a.P=EW(d,c);}
function A8e(a,b){Rq(a,1,b,0,b.data.length);}
function Rq(a,b,c,d,e){Vo(a,b,e,(Ck(c)).gq());a.h=e;X(c,d,a.P,0,a.h);}
function AP2(a,b){var c,d,e;c=a.P;d=c.data;if(a.h==d.length)c=a.j_(Bf(8,a.h*1.75|0));d=c.data;e=a.h;a.h=e+1|0;d[e]=b;}
function AJ6(a,b){a.rM(b.P,0,b.h);}
function ADT(a,b,c,d){if((c+d|0)<=b.h){a.rM(b.P,c,d);return;}G(W((((((((I()).a(B(425))).j(c)).a(B(426))).j(d)).a(B(427))).j(b.h)).b()));}
function AJl(a,b){a.rM(b,0,b.data.length);}
function AFD(a,b,c,d){var e,f,g;e=a.P;f=e.data;g=a.h+d|0;if(g>f.length)e=a.j_(Bf(Bf(8,g),a.h*1.75|0));X(b,c,e,a.h,d);a.h=g;}
function A9Y(a,b){if(b<a.h)return a.P.data[b];G(Bg((((((I()).a(B(428))).j(b)).a(B(429))).j(a.h)).b()));}
function APK(a,b,c){if(b<a.h){a.P.data[b]=c;return;}G(Bg((((((I()).a(B(428))).j(b)).a(B(429))).j(a.h)).b()));}
function A3I(a,b,c){var d,e;if(b>a.h)G(Bg((((((I()).a(B(430))).j(b)).a(B(431))).j(a.h)).b()));d=a.P;e=d.data;if(a.h==e.length)d=a.j_(Bf(8,a.h*1.75|0));if(!a.gQ){e=d.data;e[a.h]=e[b];}else X(d,b,d,b+1|0,a.h-b|0);e=d.data;a.h=a.h+1|0;e[b]=c;}
function AZO(a,b,c){var d,e,f,g;a:{d=a.P;e=a.h-1|0;if(!(!c&&b!==null)){while(true){if(e<0)break a;f=d.data;g=e+(-1)|0;if(f[e]===b)break;e=g;}return 1;}while(true){if(e<0)break a;f=d.data;g=e+(-1)|0;if(b.z(f[e]))return 1;e=g;}}return 0;}
function AGY(a,b,c){var d,e,f;a:{d=a.P;if(!c&&b!==null){e=0;f=a.h;while(true){if(e>=f)break a;if(b.z(d.data[e]))break;e=e+1|0;}return e;}e=0;f=a.h;while(true){if(e>=f)break a;if(d.data[e]===b)break;e=e+1|0;}return e;}return (-1);}
function AGZ(a,b,c){var d,e,f;a:{d=a.P;if(!(!c&&b!==null)){e=0;f=a.h;while(e<f){if(d.data[e]===b){a.sv(e);return 1;}e=e+1|0;}}else{e=0;f=a.h;while(true){if(e>=f)break a;if(b.z(d.data[e])){a.sv(e);return 1;}e=e+1|0;}}}return 0;}
function APa(a,b){var c,d,e;if(b>=a.h)G(Bg((((((I()).a(B(428))).j(b)).a(B(429))).j(a.h)).b()));c=a.P;d=c.data;e=d[b];a.h=a.h-1|0;if(!a.gQ)d[b]=d[a.h];else X(c,b+1|0,c,b,a.h-b|0);d[a.h]=null;return e;}
function AHu(a,b,c){var d,e,f,g,h,i;d=a.h;if(c>=d)G(Bg((((((I()).a(B(432))).j(c)).a(B(429))).j(a.h)).b()));if(b>c)G(Bg((((((I()).a(B(433))).j(b)).a(B(431))).j(c)).b()));e=a.P;f=(c-b|0)+1|0;g=d-f|0;if(a.gQ){h=b+f|0;X(e,h,e,b,d-h|0);}else{i=Bf(g,c+1|0);X(e,i,e,b,d-i|0);}i=g;while(i<d){e.data[i]=null;i=i+1|0;}a.h=g;}
function AVA(a){var b;if(!a.h)G(DR(B(434)));a.h=a.h-1|0;b=a.P.data[a.h];a.P.data[a.h]=null;return b;}
function ATA(a){if(!a.h)G(DR(B(434)));return a.P.data[a.h-1|0];}
function A_I(a){if(!a.h)G(DR(B(434)));return a.P.data[0];}
function AZG(a){Hk(a.P,0,a.h,null);a.h=0;}
function ARt(a,b){var c;if(b<0)G(W((((I()).a(B(435))).j(b)).b()));c=a.h+b|0;if(c>a.P.data.length)a.j_(Bf(Bf(8,c),a.h*1.75|0));return a.P;}
function AY4(a,b){var c,d,e;c=a.P;d=EW((Ck(c)).gq(),b);e=d.data;X(c,0,d,0,Bq(a.h,e.length));a.P=d;return d;}
function ATF(a,b){(AIl()).Pg(a.P,b,0,a.h);}
function AKC(a){if(Blm)return K7(a,1);if(a.qs===null)a.qs=Bc3(a);return a.qs.bZ();}
function AD$(a,b){var c;if(b<0)G(W((((I()).a(B(436))).j(b)).b()));if(a.h<=b)return;c=b;while(c<a.h){a.P.data[c]=null;c=c+1|0;}a.h=b;}
function AWC(a){var b,c,d,e,f,g;if(!a.gQ)return MO(a);b=a.P;c=1;d=0;e=a.h;while(d<e){f=b.data;c=c*31|0;g=f[d];if(g!==null)c=c+g.bp()|0;d=d+1|0;}return c;}
function ALR(a,b){var c,d,e,f,g,h,i,j;if(b===a)return 1;if(!a.gQ)return 0;if(!(b instanceof E5))return 0;c=b;if(!c.gQ)return 0;d=a.h;if(d!=c.h)return 0;e=a.P;f=c.P;g=0;a:{while(g<d){b:{h=f.data;i=e.data[g];j=h[g];if(i!==null){if(i.z(j))break b;else break a;}if(j!==null)break a;}g=g+1|0;}return 1;}return 0;}
function ARu(a){var b,c,d,e;if(!a.h)return B(437);b=a.P;c=b.data;d=ATn(32);d.ly(91);d.yt(c[0]);e=1;while(e<a.h){d.CL(B(438));d.yt(c[e]);e=e+1|0;}d.ly(93);return d.b();}
function AEB(b){return Bfs(b);}
function AFW(a){return a.bZ();}
var QE=D(C0);
function Bbs(){var a=new QE();AYo(a);return a;}
function AYo(a){GG(a,B(439),Y(BN,0));}
function A$N(a){return Bao(a);}
function A7W(a){return BdC(a);}
function EC(){Bx.call(this);this.Ai=0;}
var Bln=null;var Bkd=null;var Blo=null;var Blp=null;function AUF(){AUF=N(EC);A1r();}
function Yb(a,b,c){var d=new EC();Zn(d,a,b,c);return d;}
function Zn(a,b,c,d){AUF();Cw(a,b,c);a.Ai=d;}
function G8(a){return a.Ai;}
function A1r(){Bln=Yb(B(440),0,33648);Bkd=Yb(B(441),1,33071);Blo=Yb(B(442),2,10497);Blp=H(EC,[Bln,Bkd,Blo]);}
function K9(){Cy.call(this);this.AQ=0;}
function Blq(a){var b=new K9();UQ(b,a);return b;}
function UQ(a,b){Et(a,b);}
function AVN(a,b,c,d){var e;e=a.ka();d.by(e,b-d.ev(e)|0);a.AQ=b;return b;}
function AFS(a){return a.AQ;}
function AQK(a){return B(443);}
function A5P(a,b){return 0;}
function Je(){BB.call(this);this.hp=0;}
function AN9(a){var b=new Je();AFY(b,a);return b;}
function AFY(a,b){CQ(a);a.hp=b;}
function A5B(a,b){a.k=b;}
function AX7(a,b,c,d){var e,f,g;e=b+1|0;if(e>d.J()){d.d5=1;return (-1);}f=c.f(b);if(b>d.dI()){g=c.f(b-1|0);if(BY(g))return (-1);}if(a.hp!=f)return (-1);return a.k.e(e,c,d);}
function AJT(a,b,c,d){var e,f,g,h,i;if(!(c instanceof BN))return F3(a,b,c,d);e=c;f=d.dI();g=d.J();while(true){if(b>=g)return (-1);h=e.eH(a.hp,b);if(h<0)return (-1);if(h>f&&BY(e.f(h-1|0))){b=h+1|0;continue;}i=a.k;b=h+1|0;if(i.e(b,c,d)>=0)break;}return h;}
function AYZ(a,b,c,d,e){var f,g,h;if(!(d instanceof BN))return Gb(a,b,c,d,e);f=e.dI();g=d;a:{while(true){if(c<b)return (-1);h=g.mK(a.hp,c);if(h<0)break a;if(h<b)break a;if(h>f&&BY(g.f(h-1|0))){c=h+(-2)|0;continue;}if(a.k.e(h+1|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function AQ$(a){return (((I()).a(B(101))).U(a.hp)).b();}
function ADZ(a,b){if(b instanceof Dz)return 0;if(b instanceof Dx)return 0;if(b instanceof C4)return 0;if(b instanceof Dv)return 0;if(b instanceof Jj)return 0;if(!(b instanceof Je))return 1;return b.hp!=a.hp?0:1;}
function ARf(a,b){return 1;}
var ACO=D();
var ME=D(0);
function Xf(){var a=this;C.call(a);a.uw=null;a.st=null;a.ss=null;}
function A_4(){var a=new Xf();AS1(a);return a;}
function AS1(a){J(a);a.st=S();a.ss=S();}
function A0D(a,b,c){a.uw=b;c.Dx(a);}
function L5(a,b,c,d){if(c.yr())b.uA(d);else if(b.MY())(d.M(c)).kN(b);else (b.uA(d)).fB(c);return d;}
function AYE(a,b,c){var d,e,f,g,h,i;d=b.da;GO();e=Ct(d,BjR)&&(BA(b.da,BjR)).Fp?1:0;f=Ct(c.da,BjR)&&(BA(c.da,BjR)).Fp?1:0;if(e!=f)return !e?(-1):1;L5(a,b.dy,b.cS.f1,a.st);L5(a,c.dy,c.cS.f1,a.ss);g=(1000.0*a.uw.cq.B0(a.st)|0)-(1000.0*a.uw.cq.B0(a.ss)|0)|0;h=B9(g,0.0);i=h<0?(-1):h<=0?0:1;if(e)i= -i|0;return i;}
function A7D(a,b,c){return a.I0(b,c);}
var ACh=D(D7);
function AZU(a,b){var c=new ACh();AHp(c,a,b);return c;}
function AHp(a,b,c){SU(a,b,c);}
function Es(){var a=this;CI.call(a);a.fY=null;a.ea=0;}
function Blr(a,b,c,d,e){var f=new Es();It(f,a,b,c,d,e);return f;}
function It(a,b,c,d,e,f){Fd(a,c,d,e);a.fY=b;a.ea=f;}
function A_y(a,b,c,d){var e,f,g,h;e=d.zk(a.ea);if(!a.Y.ba(d))return a.k.e(b,c,d);if(e>=a.fY.iJ())return a.k.e(b,c,d);f=a.ea;g=e+1|0;d.fN(f,g);h=a.Y.e(b,c,d);if(h>=0){d.fN(a.ea,0);return h;}f=a.ea;g=g+(-1)|0;d.fN(f,g);if(g>=a.fY.jd())return a.k.e(b,c,d);d.fN(a.ea,0);return (-1);}
function ASt(a){return a.fY.b();}
var Ly=D(Es);
function Bls(a,b,c,d,e){var f=new Ly();Sp(f,a,b,c,d,e);return f;}
function Sp(a,b,c,d,e,f){It(a,b,c,d,e,f);}
function AVR(a,b,c,d){var e,f;e=d.zk(a.ea);if(!a.Y.ba(d))return a.k.e(b,c,d);if(e>=a.fY.iJ()){d.fN(a.ea,0);return a.k.e(b,c,d);}if(e<a.fY.jd()){d.fN(a.ea,e+1|0);f=a.Y.e(b,c,d);}else{f=a.k.e(b,c,d);if(f>=0){d.fN(a.ea,0);return f;}d.fN(a.ea,e+1|0);f=a.Y.e(b,c,d);}return f;}
var U2=D();
function Sm(b){a:{switch(b){case 8:break;case 9:return 61;case 10:case 11:case 12:case 14:case 15:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 41:case 42:case 43:case 44:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 93:case 94:case 95:case 108:case 124:case 125:case 126:case 127:case 128:case 129:case 130:case 131:case 132:case 133:case 134:case 135:case 136:case 137:case 138:case 139:case 140:case 141:case 142:case 143:case 146:case 147:case 148:case 149:case 150:case 151:case 152:case 153:case 154:case 155:case 156:case 157:case 158:case 159:case 160:case 161:case 162:case 163:case 164:case 165:case 166:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 177:case 178:case 179:case 180:case 181:case 182:case 183:case 184:case 185:case 193:case 194:case 195:case 196:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 207:case 208:case 209:case 210:case 211:case 212:case 213:case 214:case 215:case 216:case 217:case 218:break a;case 13:return 66;case 16:return 59;case 17:return 129;case 18:return 57;case 19:return 0;case 20:return 0;case 27:return 111;case 32:return 62;case 33:return 92;case 34:return 93;case 35:return 123;case 36:return 3;case 37:return 21;case 38:return 19;case 39:return 22;case 40:return 20;case 45:return 124;case 46:return 112;case 48:return 7;case 49:return 8;case 50:return 9;case 51:return 10;case 52:return 11;case 53:return 12;case 54:return 13;case 55:return 14;case 56:return 15;case 57:return 16;case 65:return 29;case 66:return 30;case 67:return 31;case 68:return 32;case 69:return 33;case 70:return 34;case 71:return 35;case 72:return 36;case 73:return 37;case 74:return 38;case 75:return 39;case 76:return 40;case 77:return 41;case 78:return 42;case 79:return 43;case 80:return 44;case 81:return 45;case 82:return 46;case 83:return 47;case 84:return 48;case 85:return 49;case 86:return 50;case 87:return 51;case 88:return 52;case 89:return 53;case 90:return 54;case 91:return 0;case 92:return 0;case 96:return 144;case 97:return 145;case 98:return 146;case 99:return 147;case 100:return 148;case 101:return 149;case 102:return 150;case 103:return 151;case 104:return 152;case 105:return 153;case 106:return 0;case 107:return 81;case 109:return 69;case 110:return 56;case 111:return 0;case 112:return 131;case 113:return 132;case 114:return 133;case 115:return 134;case 116:return 135;case 117:return 136;case 118:return 137;case 119:return 138;case 120:return 139;case 121:return 140;case 122:return 141;case 123:return 142;case 144:return 78;case 145:return 0;case 186:return 74;case 187:return 70;case 188:return 55;case 189:return 69;case 190:return 56;case 191:return 76;case 192:return 0;case 219:return 71;case 220:return 73;case 221:return 72;case 222:return 75;default:break a;}return 67;}return 0;}
function Js(b){if(b==1)return 0;if(b==2)return 1;if(b!=4)return 0;return 2;}
var MN=D(0);
var Mn=D(0);
function IF(){Jb.call(this);this.gR=0;}
function Y_(a){Um(a);}
function AIh(a){return Bdu(a);}
var Lo=D(0);
function We(){var a=this;IF.call(a);a.cR=null;a.c7=0;}
function SG(){var a=new We();AIJ(a);return a;}
function Blt(a){var b=new We();OS(b,a);return b;}
function AIJ(a){OS(a,10);}
function OS(a,b){Y_(a);a.cR=Y(C,b);}
function AVT(a,b){var c;if(a.cR.data.length<b){c=a.cR.data.length>=1073741823?2147483647:Bf(b,Bf(a.cR.data.length*2|0,5));a.cR=I8(a.cR,c);}}
function A6X(a,b){JL(a,b);return a.cR.data[b];}
function A5E(a){return a.c7;}
function ASp(a,b){var c,d;a.gY(a.c7+1|0);c=a.cR.data;d=a.c7;a.c7=d+1|0;c[d]=b;a.gR=a.gR+1|0;return 1;}
function A13(a,b,c){var d;Ql(a,b);a.gY(a.c7+1|0);d=a.c7;while(d>b){a.cR.data[d]=a.cR.data[d-1|0];d=d+(-1)|0;}a.cR.data[b]=c;a.c7=a.c7+1|0;a.gR=a.gR+1|0;}
function AP4(a,b){var c,d,e,f;JL(a,b);c=a.cR.data[b];a.c7=a.c7-1|0;while(b<a.c7){d=a.cR.data;e=a.cR.data;f=b+1|0;d[b]=e[f];b=f;}a.cR.data[a.c7]=null;a.gR=a.gR+1|0;return c;}
function JL(a,b){if(b>=0&&b<a.c7)return;G(C$());}
function Ql(a,b){if(b>=0&&b<=a.c7)return;G(C$());}
var YB=D(Bm);
function AQi(){var a=new YB();A3j(a);return a;}
function A3j(a){Cx(a);}
function Ef(){CG.call(this);this.gg=null;}
function Bd0(a,b,c,d){var e=new Ef();K1(e,a,b,c,d);return e;}
function K1(a,b,c,d,e){E4(a,c,d,e);a.gg=b;}
function AWq(a,b,c,d){var e,f,g,h;e=a.gg.jd();f=a.gg.iJ();g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.bv.cg()|0)>d.J())break a;h=a.bv.bH(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.k.e(b,c,d);if(h>=0)break;b=b-a.bv.cg()|0;g=g+(-1)|0;}return h;}if((b+a.bv.cg()|0)>d.J()){d.d5=1;return (-1);}h=a.bv.bH(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function AW4(a){return a.gg.b();}
function C4(){var a=this;BB.call(a);a.d1=null;a.rH=0;}
function A2l(a){var b=new C4();AAu(b,a);return b;}
function AAu(a,b){CQ(a);a.d1=b.mh();a.rH=b.bD;}
function AZx(a,b,c,d){var e,f,g,h,i,j;e=d.J();if(b<e){f=b+1|0;g=c.f(b);if(a.p(g)){h=a.k.e(f,c,d);if(h>0)return h;}if(f<e){i=f+1|0;j=c.f(f);if(GA(g,j)&&a.p(Dh(g,j)))return a.k.e(i,c,d);}}return (-1);}
function A$h(a){return ((((I()).a(B(55))).a(!a.rH?B(56):B(57))).a(a.d1.b())).b();}
function AIK(a,b){return a.d1.p(b);}
function AEH(a,b){if(b instanceof Dv)return IY(a.d1,b.sU());if(b instanceof Dz)return IY(a.d1,b.ps());if(b instanceof C4)return GU(a.d1,b.d1);if(!(b instanceof Dx))return 1;return GU(a.d1,b.uN());}
function ALe(a){return a.d1;}
function A8a(a,b){a.k=b;}
function AIm(a,b){return 1;}
var Yx=D(FP);
function BaG(a,b,c){var d=new Yx();AOR(d,a,b,c);return d;}
function AOR(a,b,c,d){Ml(a,b,c,d);}
function AFU(a,b,c,d){var e;if(!a.Y.ba(d))return a.k.e(b,c,d);e=a.k.e(b,c,d);if(e<0)e=a.Y.e(b,c,d);return e;}
var Qm=D();
function AHU(b,c){var d,e,f;a:{d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}e=b>>>6;f=d|e&8;f=f|b<<2&16;e=f|e&32;e=e|b>>>8&64;e=e|b>>>5&128;e=e|b&256;e=e|b<<8&512;e=e|b<<10&1024;e=e|b<<1&2048;return e;}
function BN(){var a=this;C.call(a);a.S=null;a.mQ=0;}
var Blu=null;function Em(){Em=N(BN);ARU();}
function Mh(a){var b=new BN();Iy(b,a);return b;}
function F1(a,b,c){var d=new BN();OG(d,a,b,c);return d;}
function Blv(a,b,c,d){var e=new BN();J2(e,a,b,c,d);return e;}
function Blw(a,b,c,d){var e=new BN();KM(e,a,b,c,d);return e;}
function Bbx(a,b){var c=new BN();TI(c,a,b);return c;}
function BfZ(a,b,c){var d=new BN();OK(d,a,b,c);return d;}
function Iy(a,b){var c,d,e;Em();c=b.data;J(a);d=c.length;a.S=BW(d);e=0;while(e<d){a.S.data[e]=c[e];e=e+1|0;}}
function OG(a,b,c,d){var e,f;Em();J(a);a.S=BW(d);e=0;while(e<d){f=b.data;a.S.data[e]=f[e+c|0];e=e+1|0;}}
function J2(a,b,c,d,e){Em();KM(a,b,c,d,OZ(e.b()));}
function KM(a,b,c,d,e){Em();J(a);S9(a,b,c,d,e);}
function TI(a,b,c){Em();J2(a,b,0,b.data.length,c);}
function OK(a,b,c,d){var e,f,g,h,i,j,k;Em();J(a);a.S=BW(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.S.data;j=e+1|0;g[e]=i&65535;}else{g=a.S.data;k=e+1|0;g[e]=FB(i);g=a.S.data;j=k+1|0;g[k]=Fi(i);}f=f+1|0;c=h;e=j;}if(e<a.S.data.length)a.S=JY(a.S,e);}
function S9(a,b,c,d,e){var f;f=ZK(e,Zb(b,c,d));if(WJ(f)&&!B8(f)&&BD(f)==CV(f))a.S=NL(f);else{a.S=BW(Bb(f));f.Mx(a.S);}}
function AWm(a,b){if(b>=0&&b<a.S.data.length)return a.S.data[b];G(Kj());}
function A0o(a){return a.S.data.length;}
function A2c(a){return a.S.data.length?0:1;}
function AH7(a,b,c,d,e){var f,g,h;if(b>=0&&b<=c&&c<=a.i()&&e>=0){f=d.data;if((e+(c-b|0)|0)<=f.length){while(b<c){g=e+1|0;h=b+1|0;f[e]=a.f(b);e=g;b=h;}return;}}G(C$());}
function A9A(a,b){var c,d,e,f,g;if(a===b)return 0;c=Bq(a.i(),b.i());d=0;while(true){if(d>=c)return a.i()-b.i()|0;e=a.f(d);f=b.f(d);g=e-f|0;if(g)break;d=d+1|0;}return g;}
function A55(a,b,c){var d,e,f;if((c+b.i()|0)>a.i())return 0;d=0;while(d<b.i()){e=b.f(d);f=c+1|0;if(e!=a.f(c))return 0;d=d+1|0;c=f;}return 1;}
function A2h(a,b){if(a===b)return 1;return a.zN(b,0);}
function AZv(a,b){var c,d,e,f;if(a===b)return 1;if(b.i()>a.i())return 0;c=0;d=a.i()-b.i()|0;while(d<a.i()){e=a.f(d);f=c+1|0;if(e!=b.f(c))return 0;d=d+1|0;c=f;}return 1;}
function A40(a,b,c){var d,e,f,g;d=Bf(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.S.data.length)return (-1);if(a.S.data[d]==e)break;d=d+1|0;}return d;}f=FB(b);g=Fi(b);while(true){if(d>=(a.S.data.length-1|0))return (-1);if(a.S.data[d]==f&&a.S.data[d+1|0]==g)break;d=d+1|0;}return d;}
function AZu(a,b){return a.eH(b,0);}
function AWu(a,b,c){var d,e,f,g,h,i;d=Bq(c,a.i()-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.S.data[d]==e)break;d=d+(-1)|0;}return d;}f=FB(b);g=Fi(b);while(true){if(d<1)return (-1);if(a.S.data[d]==g){h=a.S.data;i=d-1|0;if(h[i]==f)break;}d=d+(-1)|0;}return i;}
function AKv(a,b){return a.mK(b,a.i()-1|0);}
function AY_(a,b,c){var d,e,f;d=Bf(0,c);e=a.i()-b.i()|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=b.i())break a;if(a.f(d+f|0)!=b.f(f))break;f=f+1|0;}d=d+1|0;}return d;}
function A5z(a,b){return a.uy(b,0);}
function AHX(a,b,c){var d,e;d=Bq(c,a.i()-b.i()|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.i())break a;if(a.f(d+e|0)!=b.f(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AJ$(a,b){return a.Ac(b,a.i());}
function ADO(a,b,c){if(b>c)G(C$());return F1(a.S,b,c-b|0);}
function AKy(a,b){return a.ce(b,a.i());}
function AIf(a,b,c){return a.ce(b,c);}
function AUl(a,b){var c,d,e;c=a.i()-b.i()|0;d=0;while(d<=c){e=0;while(true){if(e>=b.i())return 1;if(a.f(d+e|0)!=b.f(e))break;e=e+1|0;}d=d+1|0;}return 0;}
function A6W(a,b,c){var d,e,f,g;d=I();e=a.i()-b.i()|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=b.i()){d.dD(c);f=f+(b.i()-1|0)|0;break a;}if(a.f(f+g|0)!=b.f(g))break;g=g+1|0;}d.U(a.f(f));}f=f+1|0;}d.dD(a.ei(f));return d.b();}
function A2C(a){var b,c;b=0;c=a.i()-1|0;a:{while(b<=c){if(a.f(b)>32)break a;b=b+1|0;}}while(b<=c&&a.f(c)<=32){c=c+(-1)|0;}return a.ce(b,c+1|0);}
function AFV(a){return a;}
function A2g(a){var b,c,d;b=BW(a.S.data.length);c=0;while(true){d=b.data;if(c>=d.length)break;d[c]=a.S.data[c];c=c+1|0;}return b;}
function Zp(b){var c,d;Em();c=new BN;d=BW(1);d.data[0]=b;Iy(c,d);return c;}
function Ji(b){Em();return ((I()).j(b)).b();}
function ASk(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BN))return 0;c=b;if(c.i()!=a.i())return 0;d=0;while(d<c.i()){if(a.f(d)!=c.f(d))return 0;d=d+1|0;}return 1;}
function A9X(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(a.i()!=b.i())return 0;c=0;while(c<a.i()){if(Dq(a.f(c))!=Dq(b.f(c)))return 0;c=c+1|0;}return 1;}
function ANx(a,b){return a.AX(OZ(b.b()));}
function ANt(a){Hw();return a.AX(Bkn);}
function A44(a,b){var c,d;c=UI(b,Lb(a.S));if(c.Cr()&&!B8(c)&&BD(c)==CV(c))return HH(c);d=Cj(Bb(c));c.IS(d);return d;}
function A4_(a){var b,c,d,e;a:{if(!a.mQ){b=a.S.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.mQ=(31*a.mQ|0)+e|0;d=d+1|0;}}}return a.mQ;}
function A4n(a){var b,c,d,e,f,g,h,i;if(a.bN())return a;b=Bc(a.S.data.length);c=0;d=0;while(d<a.S.data.length){a:{if(d!=(a.S.data.length-1|0)&&BY(a.S.data[d])){e=a.S.data;f=d+1|0;g=e[f];if(BG(g)){h=b.data;i=c+1|0;h[c]=En(Dh(a.S.data[d],a.S.data[f]));d=f;break a;}}h=b.data;i=c+1|0;h[c]=DB(a.S.data[d]);}d=d+1|0;c=i;}return BfZ(b,0,c);}
function A2S(a,b){return VW(GJ(b),a.b());}
function ASc(a,b,c){return Ms(GJ(b),a.b(),c);}
function AIp(a,b,c){return ACp(GM(GJ(b),a.b()),c);}
function ARU(){Blu=Bei();}
var Nh=D(DS);
var Blx=null;function A3n(){A3n=N(Nh);AUj();}
function BdP(){var a=new Nh();SZ(a);return a;}
function SZ(a){A3n();G_(a);}
function A24(a,b){ATy(b);}
function AUj(){Blx=BdP();}
var LO=D();
var Bly=null;function Bev(){Bev=N(LO);AQh();}
function Vn(){Bev();return Bly;}
function AQh(){var b,c,d,e,f;Bly=C6();b=Y(C0,6);c=b.data;Bd2();c[0]=Blb;c[1]=Blc;c[2]=Bld;c[3]=Ble;c[4]=Blf;c[5]=Blg;d=c.length;e=0;while(e<d){f=c[e];Bly.x(Z_(f),f);e=e+1|0;}}
var D$=D(0);
var MQ=D(0);
function Yy(){var a=this;Fy.call(a);a.zS=0;a.uJ=0;a.tk=null;}
function Be1(a,b,c,d,e,f){var g=new Yy();AJ0(g,a,b,c,d,e,f);return g;}
function AJ0(a,b,c,d,e,f,g){MH(a,c,e,f);a.uJ=b;a.zS=g;a.tk=d;}
function A48(a,b){return a.tk.data[b+a.uJ|0];}
function A3l(a,b,c){a.tk.data[b+a.uJ|0]=c;}
function ADd(a){return a.zS;}
var Qn=D(Do);
function Bcl(a){var b=new Qn();AQN(b,a);return b;}
function AQN(a,b){GH(a,b,2.0,4.0);}
function ALN(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(h.ef(2))break a;Bj();i=BgY;break a;}k=e.data;n=f+1|0;k[f]=(192|l>>6)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else if(!Jz(l)){if((f+3|0)>g){j=j+(-1)|0;if(h.ef(3))break a;Bj();i=BgY;break a;}k=e.data;o=f+1|0;k[f]=(224|l>>12)<<24>>24;n=o+1|0;k[o]=(128|l>>6&63)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else{if
(!BY(l)){i=BV(1);break a;}if(j>=d){if(h.tK())break a;Bj();i=BgZ;break a;}n=j+1|0;p=k[j];if(!BG(p)){j=n+(-2)|0;i=BV(1);break a;}if((f+4|0)>g){j=n+(-2)|0;if(h.ef(4))break a;Bj();i=BgY;break a;}k=e.data;q=Dh(l,p);j=f+1|0;k[f]=(240|q>>18)<<24>>24;o=j+1|0;k[j]=(128|q>>12&63)<<24>>24;j=o+1|0;k[o]=(128|q>>6&63)<<24>>24;m=j+1|0;k[j]=(128|q&63)<<24>>24;j=n;}c=j;f=m;}j=c;}h.el(j);h.dR(f);return i;}
var I6=D();
function X1(a){J(a);}
var HT=D(0);
function Fm(){var a=this;I6.call(a);a.s8=0;a.dW=null;a.Df=0.0;a.Bl=0;a.ln=0;a.mc=0;a.FI=0;}
var Blz=null;var BlA=null;function TJ(){TJ=N(Fm);A$T();}
function BlB(){var a=new Fm();HG(a);return a;}
function BlC(a){var b=new Fm();MF(b,a);return b;}
function ABo(b,c,d){TJ();return Be_(b,c);}
function HG(a){TJ();MF(a,11);}
function MF(a,b){TJ();X1(a);a.mc=(-1);if(b<0)G(CL());a.s8=0;if(!b)b=1;a.dW=OE(a,b);a.ln=a.dW.data.length;a.Df=0.75;Mv(a);}
function OE(a,b){return Y(MS,b);}
function Mv(a){a.Bl=a.dW.data.length*a.Df|0;}
function AO3(a,b,c){var d,e,f,g,h,i,j;Eq(a);try{if(b!==null&&c!==null){d=b.bp();e=d&2147483647;f=e%a.dW.data.length|0;g=a.dW.data[f];while(g!==null&&!g.MZ(b,d)){g=g.pD;}if(g!==null){h=g.hb;g.hb=c;return h;}a.FI=a.FI+1|0;i=a.s8+1|0;a.s8=i;if(i>a.Bl){a.oU();f=e%a.dW.data.length|0;}if(f<a.ln)a.ln=f;if(f>a.mc)a.mc=f;j=ABo(b,c,d);j.pD=a.dW.data[f];a.dW.data[f]=j;return null;}G(IJ());}finally{Ch(a);}}
function AME(a){var b,c,d,e,f,g,h,i,j;b=(a.dW.data.length<<1)+1|0;if(!b)b=1;c=(-1);d=OE(a,b);e=a.mc+1|0;f=b;while(true){e=e+(-1)|0;if(e<a.ln)break;g=a.dW.data[e];while(g!==null){h=(g.Ob()&2147483647)%b|0;if(h<f)f=h;if(h>c)c=h;i=d.data;j=g.pD;g.pD=i[h];i[h]=g;g=j;}}a.ln=f;a.mc=c;a.dW=d;Mv(a);}
function A$T(){Blz=Bfk();BlA=Bbd();}
function Td(){Fm.call(this);this.Jl=null;}
function Bbn(){var a=new Td();AOz(a);return a;}
function Bbr(a){var b=new Td();AKL(b,a);return b;}
function AOz(a){HG(a);}
function AKL(a,b){HG(a);a.Jl=b;}
function ABU(){var a=this;Fu.call(a);a.C1=0;a.vk=0;a.t_=null;}
function Bbi(a,b,c,d,e,f){var g=new ABU();AX0(g,a,b,c,d,e,f);return g;}
function AX0(a,b,c,d,e,f,g){K4(a,c,e,f);a.vk=b;a.C1=g;a.t_=d;}
function AO$(a,b){return a.t_.data[b+a.vk|0];}
function AOg(a,b,c){a.t_.data[b+a.vk|0]=c;}
function A5x(a){return a.C1;}
var Wq=D(Bt);
function Bam(){var a=new Wq();A_f(a);return a;}
function A_f(a){Co(a);}
function ALw(a,b,c,d){return b;}
function A5A(a){return B(444);}
function A5J(a,b){return 0;}
function Oj(){V.call(this);this.iD=null;}
var BlD=null;function A0S(){A0S=N(Oj);AUn();}
function Beo(a){var b=new Oj();YO(b,a);return b;}
function YO(a,b){A0S();BM(a);a.iD=Ca(b*16|0);}
function AUE(a,b,c,d,e){var f,g;f=0;while(f<a.iD.data.length){g=f/16|0;if(d.dJ!==null&&g<d.dJ.data.length&&d.dJ.data[g]!==null)X(d.dJ.data[g].c,0,a.iD,f,16);else{A0S();X(BlD.c,0,a.iD,f,16);}f=f+16|0;}b.bh.PN(B1(b,c),a.iD,0,a.iD.data.length);}
function AUn(){BlD=BL();}
var JP=D(Es);
function BlE(a,b,c,d,e){var f=new JP();Ss(f,a,b,c,d,e);return f;}
function Ss(a,b,c,d,e,f){It(a,b,c,d,e,f);JF();c.Q(Bik);}
function AKs(a,b,c,d){var e,f,g;e=0;f=a.fY.iJ();a:{while(true){g=a.Y.e(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.fY.jd())return (-1);return a.k.e(b,c,d);}
function CX(){Bx.call(this);this.C5=0;}
var Bkc=null;var BlF=null;var BlG=null;var BlH=null;var BlI=null;var BlJ=null;var BlK=null;var BlL=null;function P6(){P6=N(CX);AFy();}
function E7(a,b,c){var d=new CX();OJ(d,a,b,c);return d;}
function OJ(a,b,c,d){P6();Cw(a,b,c);a.C5=d;}
function EE(a){return a.C5;}
function AFy(){Bkc=E7(B(445),0,9728);BlF=E7(B(446),1,9729);BlG=E7(B(447),2,9987);BlH=E7(B(448),3,9984);BlI=E7(B(449),4,9985);BlJ=E7(B(450),5,9986);BlK=E7(B(451),6,9987);BlL=H(CX,[Bkc,BlF,BlG,BlH,BlI,BlJ,BlK]);}
var L6=D(C0);
var Bkn=null;function Hw(){Hw=N(L6);AIb();}
function BcJ(){var a=new L6();UA(a);return a;}
function UA(a){Hw();GG(a,B(381),Y(BN,0));}
function AQr(a){return Bb$(a);}
function ASZ(a){return Bcl(a);}
function AIb(){Bkn=BcJ();}
var M6=D(0);
function Vv(){Bt.call(this);this.ic=0;}
function A_0(a){var b=new Vv();A_C(b,a);return b;}
function A_C(a,b){Co(a);a.ic=b;}
function A1N(a,b,c,d){var e,f,g;e=!d.jB()?c.i()-b|0:d.dI()-b|0;if(!e){d.by(a.ic,0);return a.k.e(b,c,d);}if(e<2){f=c.f(b);g=97;}else{f=c.f(b);g=c.f(b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:d.by(a.ic,0);return a.k.e(b,c,d);case 13:if(g!=10){d.by(a.ic,0);return a.k.e(b,c,d);}d.by(a.ic,0);return a.k.e(b,c,d);default:}return (-1);}
function AGz(a,b){var c;c=!b.ev(a.ic)?0:1;b.by(a.ic,(-1));return c;}
function AI_(a){return B(452);}
function SN(){C.call(this);this.Qx=null;}
function Bac(a){var b=new SN();A5U(b,a);return b;}
function A5U(a,b){J(a);a.Qx=b;}
function EO(){C.call(this);this.HK=null;}
function Li(a){AB6(a,Qq());}
function AB6(a,b){J(a);a.HK=b;}
function Sj(){var a=this;EO.call(a);a.mF=null;a.jD=null;a.fL=0;a.ng=0;a.uv=0;a.zh=0;}
function BbT(a,b){var c=new Sj();AY6(c,a,b);return c;}
function AY6(a,b,c){Li(a);a.zh=(-1);if(c<0)G(CL());a.mF=b;a.jD=BW(Bf(64,c));}
function ALT(a){Oa(a);a.mF.fP();a.mF=null;}
function ATT(a){var b,c,d,e;Oa(a);if(a.uv&&a.fL>=a.ng)return null;b=I();a:{while(true){if(a.fL>=a.ng&&!K$(a,0))break a;c=a.jD.data;d=a.fL;a.fL=d+1|0;e=c[d];if(e==10)break;if(e==13){if(a.fL>=a.ng&&!K$(a,0))break a;if(a.jD.data[a.fL]!=10)break a;a.fL=a.fL+1|0;break a;}b.U(e);}}return b.b();}
function K$(a,b){var c;if(a.uv)return 0;a:{while(true){if(b>=a.jD.data.length)break a;c=a.mF.JJ(a.jD,b,a.jD.data.length-b|0);if(c==(-1)){a.uv=1;break a;}if(!c)break;b=b+c|0;}}a.ng=b;a.fL=0;a.zh=(-1);return 1;}
function Oa(a){if(a.mF!==null)return;G(BbK());}
function WY(){Q.call(this);this.OH=null;}
function BeX(a){var b=new WY();A3o(b,a);return b;}
function A3o(a,b){a.OH=b;Be(a);}
function A9t(a,b){return ACI(b);}
var I0=D(Dn);
function ASX(){var a=new I0();A1Z(a);return a;}
function A1Z(a){Jt(a);}
var Yp=D();
var ZY=D(FI);
function Bdz(a,b,c,d,e,f){var g=new ZY();AZl(g,a,b,c,d,e,f);return g;}
function AZl(a,b,c,d,e,f,g){JO(a,b,c,d,e,f,g);}
function AQ6(a,b){var c,d,e;c=a.cu.A.data;d=a.cl;e=b*4|0;return (c[d+e|0]&255)<<24|(a.cu.A.data[(a.cl+e|0)+1|0]&255)<<16|(a.cu.A.data[(a.cl+e|0)+2|0]&255)<<8|a.cu.A.data[(a.cl+e|0)+3|0]&255;}
function AEV(a,b,c){var d,e,f;d=a.cu.A.data;e=a.cl;f=b*4|0;d[e+f|0]=c>>24<<24>>24;a.cu.A.data[(a.cl+f|0)+1|0]=c>>16<<24>>24;a.cu.A.data[(a.cl+f|0)+2|0]=c>>8<<24>>24;a.cu.A.data[(a.cl+f|0)+3|0]=c<<24>>24;}
var GN=D(BT);
var BlM=null;function A_w(){A_w=N(GN);A1y();}
function Bd$(a){var b=new GN();AAN(b,a);return b;}
function BlN(){var a=new GN();Jr(a);return a;}
function AAN(a,b){A_w();B_(a);}
function Jr(a){A_w();B_(a);}
function A1y(){BlM=Bd$(0);}
var R8=D(Bm);
function APE(a){var b=new R8();A7_(b,a);return b;}
function IJ(){var a=new R8();AGj(a);return a;}
function A7_(a,b){EF(a,b);}
function AGj(a){Cx(a);}
function XM(){Q.call(this);this.HQ=null;}
function BcG(a){var b=new XM();AI3(b,a);return b;}
function AI3(a,b){a.HQ=b;Be(a);}
function A6u(a,b){return MT(b);}
function Qa(){var a=this;C.call(a);a.d0=null;a.yD=null;a.cC=null;a.cT=0;}
function Bbc(){var a=new Qa();AT6(a);return a;}
function AT6(a){J(a);a.cC=Ds();}
var YY=D();
function A8x(b){return Math.sin(b);}
function AEv(b){return Math.cos(b);}
function AQO(b){return Math.tan(b);}
function FR(b){return Math.sqrt(b);}
function AYX(b){return Math.ceil(b);}
function Dg(b){return b+ALB(b)*0.5|0;}
function Bq(b,c){if(b<c)c=b;return c;}
function Bf(b,c){if(b>c)c=b;return c;}
function T5(b,c){if(Ku(b,c))c=b;return c;}
function AXa(b,c){if(Hq(b,c))c=b;return c;}
function Ju(b,c){if(b<c)c=b;return c;}
function Ei(b,c){if(b>c)c=b;return c;}
function Vz(b){if(b<=0)b= -b|0;return b;}
function CH(b){if(b<=0.0)b= -b;return b;}
function ALB(b){var c;c=B9(b,0.0);if(c>0)b=1.0;else if(c<0)b=(-1.0);return b;}
function WZ(){var a=this;C.call(a);a.ep=null;a.fk=null;a.du=null;a.vU=0;a.wj=0;a.LR=0;a.td=0;a.kU=0;a.oV=0;}
function Bf7(a,b,c){var d=new WZ();AM9(d,a,b,c);return d;}
function AM9(a,b,c,d){J(a);a.kU=0;a.oV=0;a.LR=b;a.ep=d;a.du=MM(Cg(a.ep.cQ,c));a.wj=1;a.td=!b?35048:35044;a.fk=a.du.sR();a.vU=ACz(a);a.fk.db();a.du.db();}
function ACz(a){var b;b=Biq.i5();Biq.c$(34962,b);Biq.fD(34962,CV(a.du),null,a.td);Biq.c$(34962,0);return b;}
function AXM(a){return a.ep;}
function AJS(a){return CV(a.du)/a.ep.cQ|0;}
function Z8(a){if(a.oV){Biq.qr(34962,0,BD(a.du),a.du);a.kU=0;}}
function AFj(a,b,c,d){a.kU=1;if(a.wj){Ob(b,a.du,d,c);a.fk.cZ(0);a.fk.cm(d);}else{a.fk.c1();a.fk.wB(b,c,d);a.fk.db();a.du.cZ(0);a.du.cm(BD(a.fk)<<2);}Z8(a);}
function ANI(a,b,c){var d,e,f,g,h,i;d=Biq;d.c$(34962,a.vU);if(a.kU){a.du.cm(BD(a.fk)*4|0);d.fD(34962,BD(a.du),a.du,a.td);a.kU=0;}a:{e=CU(a.ep);if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data;h=CB(a.ep,f);i=g[f];if(i>=0){b.lT(i);b.id(i,h.cK,h.hT,h.im,a.ep.cQ,h.cU);}f=f+1|0;}}f=0;while(f<e){h=CB(a.ep,f);i=b.lZ(h.es);if(i>=0){b.lT(i);b.id(i,h.cK,h.hT,h.im,a.ep.cQ,h.cU);}f=f+1|0;}}a.oV=1;}
function AIn(a,b,c){var d,e,f,g;a:{d=Biq;e=CU(a.ep);if(c===null){f=0;while(f<e){b.BJ((CB(a.ep,f)).es);f=f+1|0;}}else{f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0)b.tP(g);f=f+1|0;}}}d.c$(34962,0);a.oV=0;}
var GT=D(BT);
var BlO=null;function ANz(){ANz=N(GT);A1B();}
function BeP(a){var b=new GT();YJ(b,a);return b;}
function BlP(){var a=new GT();Iw(a);return a;}
function YJ(a,b){ANz();B_(a);}
function Iw(a){ANz();B_(a);}
function A1B(){BlO=BeP(0);}
var OL=D();
function A94(){var b;b=AQu();return b;}
function AQu(){var userAgent=navigator.userAgent.toLowerCase();return {firefox:userAgent.indexOf('firefox')!= -1,chrome:userAgent.indexOf('chrome')!= -1,safari:userAgent.indexOf('safari')!= -1,opera:userAgent.indexOf('opera')!= -1,IE:userAgent.indexOf('msie')!= -1,macOS:userAgent.indexOf('mac')!= -1,linux:userAgent.indexOf('linux')!= -1,windows:userAgent.indexOf('win')!= -1};}
var QM=D(T);
function Bai(){var a=new QM();A68(a);return a;}
function A68(a){Bo(a);}
function ANR(a){var b;b=BbA(a);b.be=1;return b;}
function Oh(){var a=this;C3.call(a);a.yS=null;a.nL=null;a.kH=0;}
function BS(a,b,c){var d=new Oh();VX(d,a,b,c);return d;}
function VX(a,b,c,d){FX(a);a.kH=(-1);a.yS=b;a.nL=c;a.kH=d;}
function A$l(a){var b,c;b=B(101);if(a.kH>=1){c=BW(a.kH);APp(c,32);b=Mh(c);}return (((I()).a(a.yS)).a(a.nL!==null&&a.nL.i()?((((((I()).j(a.kH)).a(B(438))).a(a.nL)).a(B(438))).a(b)).b():B(101))).b();}
function P7(){D5.call(this);this.oC=null;}
function Bge(a,b,c){var d=new P7();AS4(d,a,b,c);return d;}
function AS4(a,b,c,d){Mb(a,c,d);a.oC=Qk(a,b);if(a.oC!==null)return;G(Qg((((I()).a(B(453))).a(b.u())).b()));}
function Qk(a,b){var c,d,$$je;a:{try{c=ANP(b,null);}catch($$e){$$je=R($$e);if($$je instanceof B5){break a;}else{throw $$e;}}return c;}b:{try{d=AZn(b,null);Tf(d,1);}catch($$e){$$je=R($$e);if($$je instanceof MA){break b;}else{throw $$e;}}return d;}return null;}
function A1F(a){var b,c,$$je;a:{try{b=ACV(a.oC,null);}catch($$e){$$je=R($$e);if($$je instanceof B5){c=$$je;break a;}else{throw $$e;}}return b;}G(Jd((((I()).a(B(454))).a((FF(a.oC)).u())).b(),c));}
var LK=D(0);
var Y0=D();
function A_6(){var a=new Y0();APX(a);return a;}
function APX(a){J(a);}
function A0m(a){return devicePixelRatio||1;}
function AX$(a){return screen.width;}
function ADI(a){return screen.height;}
function AMf(a,b,c,d,e){var f;f=Bgd(a);return AI1(BP(f,"fullscreenChanged"),c,d,e)?1:0;}
function AMH(a){AIO();}
function ASY(a){return A93()?1:0;}
function AI1(b,c,d,e){if(c.requestFullscreen){c.width=d;c.height=e;c.requestFullscreen();document.addEventListener("fullscreenchange",b,false);return true;}if(c.webkitRequestFullScreen){c.width=d;c.height=e;c.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);document.addEventListener("webkitfullscreenchange",b,false);return true;}if(c.mozRequestFullScreen){c.width=d;c.height=e;c.mozRequestFullScreen();document.addEventListener("mozfullscreenchange",b,false);return true;}if(c.msRequestFullscreen){c.width
=d;c.height=e;c.msRequestFullscreen();document.addEventListener("msfullscreenchange",b,false);return true;}return false;}
function AIO(){if(document.exitFullscreen)document.exitFullscreen();if(document.msExitFullscreen)document.msExitFullscreen();if(document.webkitExitFullscreen)document.webkitExitFullscreen();if(document.mozExitFullscreen)document.mozExitFullscreen();if(document.webkitCancelFullScreen)document.webkitCancelFullScreen();}
function A93(){if("fullscreenElement" in document){return document.fullscreenElement!=null;}if("msFullscreenElement" in document){return document.msFullscreenElement!=null;}if("webkitFullscreenElement" in document){return document.webkitFullscreenElement!=null;}if("mozFullScreenElement" in document){return document.mozFullScreenElement!=null;}if("webkitIsFullScreen" in document){return document.webkitIsFullScreen;}if("mozFullScreen" in document){return document.mozFullScreen;}return false;}
function HF(){var a=this;C.call(a);a.pP=null;a.hZ=0;a.hm=0;a.g2=0;a.b7=null;a.f1=null;a.g1=null;a.iV=0.0;}
var BlQ=null;function A4f(){A4f=N(HF);ALr();}
function A8N(){var a=new HF();AAI(a);return a;}
function BfS(a){var b=new HF();YN(b,a);return b;}
function AAI(a){A4f();J(a);a.f1=S();a.g1=S();a.iV=(-1.0);}
function YN(a,b){A4f();J(a);a.f1=S();a.g1=S();a.iV=(-1.0);a.Cy(b);}
function A37(a,b){a.pP=b.pP;a.b7=b.b7;a.hm=b.hm;a.g2=b.g2;a.hZ=b.hZ;a.f1.M(b.f1);a.g1.M(b.g1);a.iV=b.iV;return a;}
function AOM(a,b,c,d,e,f){a.pP=b;a.b7=c;a.hm=d;a.g2=e;a.hZ=f;a.f1.I(0.0,0.0,0.0);a.g1.I(0.0,0.0,0.0);a.iV=(-1.0);return a;}
function AJb(a,b){var c;a:{b:{if(b!==a){if(b===null)break b;if(b.b7!==a.b7)break b;if(b.hZ!=a.hZ)break b;if(b.hm!=a.hm)break b;if(b.g2!=a.g2)break b;}c=1;break a;}c=0;}return c;}
function AE0(a,b){if(b===null)return 0;if(b===a)return 1;if(!(b instanceof HF))return 0;return a.Hw(b);}
function AVG(a,b,c){a.b7.De(b,a.hZ,a.hm,a.g2,c);}
function ALr(){BlQ=AMi();}
var TS=D(T);
function BeF(){var a=new TS();AGB(a);return a;}
function AGB(a){Bo(a);}
function AYG(a){var b;b=Bgj(a);b.bG.n4(0,2048);b.be=1;return b;}
var HP=D(0);
function HC(){var a=this;BH.call(a);a.MI=0;a.KF=0.0;a.I7=0.0;a.OM=0;}
var BlR=Ba;var BlS=Ba;function AJt(){AJt=N(HC);A4P();}
function A4P(){BlR=BR(B(455));BlS=BlR;}
var DY=D(Bx);
var BlT=null;var BlU=null;var BlV=null;var BlW=null;var BlX=null;function M3(){M3=N(DY);ASF();}
function Mo(a,b){var c=new DY();Wd(c,a,b);return c;}
function UJ(){M3();return BlX.go();}
function Wd(a,b,c){M3();Cw(a,b,c);}
function ASF(){BlT=Mo(B(456),0);BlU=Mo(B(457),1);BlV=Mo(B(458),2);BlW=Mo(B(459),3);BlX=H(DY,[BlT,BlU,BlV,BlW]);}
var KU=D(0);
function L$(){var a=this;C.call(a);a.ml=0;a.fz=null;a.fo=null;a.CQ=0.0;a.sV=0;a.u6=0;a.i1=0;}
var BlY=null;function A7k(){A7k=N(L$);AHP();}
function DG(){var a=new L$();TQ(a);return a;}
function BlZ(a,b){var c=new L$();Nu(c,a,b);return c;}
function TQ(a){A7k();Nu(a,51,0.800000011920929);}
function Nu(a,b,c){var d;A7k();J(a);if(c>0.0&&c<1.0){a.CQ=c;d=G3(b,c);a.sV=d*c|0;a.i1=d-1|0;a.u6=CW(O(a.i1));a.fz=Y(C,d);a.fo=Y(C,d);return;}G(W((((I()).a(B(40))).cD(c)).b()));}
function AXK(a,b){return Cp(CN(Cf(O(b.bp()),Cd(2135587861, 2654435769)),a.u6));}
function A07(a,b){var c,d,e;if(b===null)G(W(B(460)));c=a.fz;d=a.kq(b);while(true){e=c.data[d];if(e===null)return  -(d+1|0)|0;if(e.z(b))break;d=(d+1|0)&a.i1;}return d;}
function AQv(a,b,c){var d,e,f;d=a.j6(b);if(d>=0){e=a.fo.data[d];a.fo.data[d]=c;return e;}f= -(d+1|0)|0;a.fz.data[f]=b;a.fo.data[f]=c;f=a.ml+1|0;a.ml=f;if(f>=a.sV)W8(a,a.fz.data.length<<1);return null;}
function Qp(a,b,c){var d,e,f;d=a.fz;e=a.kq(b);while(true){f=d.data;if(f[e]===null)break;e=(e+1|0)&a.i1;}f[e]=b;a.fo.data[e]=c;}
function AWZ(a,b){var c;c=a.j6(b);return c<0?null:a.fo.data[c];}
function AVJ(a){if(!a.ml)return;a.ml=0;U$(a.fz,null);U$(a.fo,null);}
function A9u(a,b){return a.j6(b)<0?0:1;}
function W8(a,b){var c,d,e,f,g;a:{c=a.fz.data.length;a.sV=b*a.CQ|0;a.i1=b-1|0;a.u6=CW(O(a.i1));d=a.fz;e=a.fo;a.fz=Y(C,b);a.fo=Y(C,b);if(a.ml>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g!==null)Qp(a,g,e.data[f]);f=f+1|0;}}}}
function AHP(){BlY=Qq();}
function YV(){var a=this;C.call(a);a.g=null;a.c_=0;a.qH=null;a.v2=0;a.fF=0;a.gH=0;a.bR=0;a.rO=null;}
function Bdk(){var a=new YV();ADD(a);return a;}
function GM(a,b){return BaP(a,b);}
function Ms(a,b,c){var d,e,f,g,h,i;d=SG();e=GM(a,b);f=0;g=0;if(!b.i()){h=Y(BN,1);h.data[0]=B(101);return h;}while(Ga(e)){i=f+1|0;if(i>=c&&c>0)break;d.h4((b.d_(g,LU(e))).b());g=MY(e);f=i;}a:{d.h4((b.d_(g,b.i())).b());i=f+1|0;if(!c)while(true){i=i+(-1)|0;if(i<0)break;if(((d.l(i)).b()).i())break a;d.mC(i);}}if(i<0)i=0;return d.II(Y(BN,i));}
function VW(a,b){return Ms(a,b,0);}
function IQ(a){return a.g.b();}
function AZh(b,c){if(b===null)G(APE(B(461)));if(c&&(c|255)!=255)G(W(B(101)));W4();BgT=1;return Yg(Bdk(),b,c);}
function Yg(a,b,c){a.g=Bd6(b,c);a.c_=c;a.rO=L3(a,(-1),a.c_,null);if(a.g.bN()){QH(a);return a;}G(BS(B(101),a.g.b(),a.g.dM()));}
function ACo(a,b){var c,d,e;c=Bf1(BX(a,2),BX(a,64));while(!a.g.bN()){d=a.g;if(!d.hy())break;d=a.g;if(d.cM()&&a.g.cM()!=(-536870788)){d=a.g;if(d.cM()!=(-536870871))break;}c.cG(a.g.E());if(a.g.bV()!=(-536870788))continue;a.g.E();}e=HQ(a,c);e.Q(b);return e;}
function L3(a,b,c,d){var e,f,g,h,i,j;e=SG();f=a.c_;g=0;if(c!=a.c_)a.c_=c;a:{switch(b){case -1073741784:h=new KY;i=a.bR+1|0;a.bR=i;ZR(h,i);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Kt;i=a.bR+1|0;a.bR=i;AB4(h,i);break a;case -33554392:h=new K9;i=a.bR+1|0;a.bR=i;UQ(h,i);break a;default:a.fF=a.fF+1|0;if(d!==null)h=Bfw(a.fF);else{h=Beh();g=1;}if(a.fF<=(-1))break a;if(a.fF>=10)break a;a.qH.data[a.fF]=h;break a;}h=Bdf();}while(true){if(a.g.hy()&&a.g.cM()==(-536870788))j=ACo(a,
h);else if(a.g.bV()==(-536870788)){j=FG(h);a.g.E();}else{j=MJ(a,h);if(a.g.bV()==(-536870788))a.g.E();}if(j!==null)e.h4(j);if(a.g.bN())break;if(a.g.bV()==(-536870871))break;}if(a.g.Hm()==(-536870788))e.h4(FG(h));if(a.c_!=f&&!g){a.c_=f;a.g.G$(a.c_);}switch(b){case -1073741784:break;case -536870872:return BdW(e,h);case -268435416:return Bda(e,h);case -134217688:return Baq(e,h);case -67108824:return Bea(e,h);case -33554392:return Bdr(e,h);default:switch(e.df()){case 0:break;case 1:return Be6(e.l(0),h);default:return Bbl(e,
h);}return FG(h);}return BcS(e,h);}
function AA1(a){var b,c,d;b=A6I();while(!a.g.bN()){c=a.g;if(!c.hy())break;c=a.g;if(c.Ex())break;c=a.g;if(c.Fz())break;c=a.g;if(!(!c.to()&&!a.g.cM())){c=a.g;if(!(!c.to()&&I2(a.g.cM()))){c=a.g;if(c.cM()!=(-536870871)){c=a.g;if((c.cM()&(-2147418113))!=(-2147483608)){c=a.g;if(c.cM()!=(-536870788)){c=a.g;if(c.cM()!=(-536870876))break;}}}}}d=a.g.E();if(!Ik(d))b.I_(d&65535);else b.Py(Eu(d));}if(!BX(a,2))return Ba7(b);if(BX(a,64))return Bgn(b);return Bgs(b);}
function AA5(a){var b,c,d,e,f,g,h,i,j,k;b=Bc(4);c=0;d=(-1);e=(-1);if(!a.g.bN()&&a.g.hy()){f=b.data;d=a.g.E();f[c]=d;e=d-4352|0;}if(e>=0&&e<19){g=BW(3);f=g.data;f[c]=d&65535;h=a.g.bV();i=h-4449|0;if(i>=0&&i<21){f[1]=h&65535;a.g.E();j=a.g.bV();h=j-4519|0;if(h>=0&&h<28){f[2]=j&65535;a.g.E();return A83(g,3);}return A83(g,2);}if(!BX(a,2))return Qo(f[0]);if(BX(a,64))return A6D(f[0]);return AXH(f[0]);}k=1;while(k<4&&!a.g.bN()&&a.g.hy()){f=b.data;j=k+1|0;f[k]=a.g.E();k=j;}if(k==1){f=b.data;if(!AMm(f[0]))return LW(a,
f[0]);}if(!BX(a,2))return Bgp(b,k);if(BX(a,64))return Bf4(b,k);return Bbm(b,k);}
function MJ(a,b){var c,d,e,f;if(a.g.hy()&&!a.g.to()&&I2(a.g.cM())){if(!BX(a,128)){if(!a.g.Ex()&&!a.g.Fz())c=AA1(a);else{d=Ov(a,b);c=In(a,b,d);}}else{c=AA5(a);if(!a.g.bN()){e=a.g;if(!(e.bV()==(-536870871)&&!(b instanceof EZ))){e=a.g;if(e.bV()!=(-536870788)&&!a.g.hy())c=In(a,b,c);}}}}else if(a.g.bV()!=(-536870871)){d=Ov(a,b);c=In(a,b,d);}else{if(b instanceof EZ)G(BS(B(101),a.g.b(),a.g.dM()));c=FG(b);}a:{if(!a.g.bN()){e=a.g;if(!(e.bV()==(-536870871)&&!(b instanceof EZ))){e=a.g;if(e.bV()!=(-536870788)){f=MJ(a,b);if
(c instanceof CG&&!(c instanceof Ef)&&!(c instanceof CI)&&!(c instanceof Ed)){e=c;if(!f.ca(e.pW()))c=Bal(e);}if((f.i6()&65535)!=43)c.Q(f);else c.Q(f.pW());break a;}}}if(c===null)return null;c.Q(b);}if((c.i6()&65535)!=43)return c;return c.pW();}
function In(a,b,c){var d,e,f,g,h,i,j;d=a.g.bV();if(c!==null&&!(c instanceof BJ)){switch(d){case -2147483606:a.g.E();return Bcm(c,b,d);case -2147483605:a.g.E();return BeO(c,b,(-2147483606));case -2147483585:a.g.E();return Be0(c,b,(-536870849));case -2147483525:e=new JP;f=a.g.jn();g=a.gH+1|0;a.gH=g;Ss(e,f,c,b,(-536870849),g);return e;case -1073741782:case -1073741781:a.g.E();h=Bd9(c,b,d);c.Q(h);return h;case -1073741761:a.g.E();h=BaG(c,b,(-536870849));c.Q(b);return h;case -1073741701:h=new Ly;e=a.g;e=e.jn();i
=a.gH+1|0;a.gH=i;Sp(h,e,c,b,(-536870849),i);c.Q(h);return h;case -536870870:case -536870869:a.g.E();h=c.i6()!=(-2147483602)?BdN(c,b,d):BX(a,32)?BaU(c,b,d):Bah(c,b,d,MP(a.c_));c.Q(h);return h;case -536870849:a.g.E();h=Bgf(c,b,(-536870849));c.Q(b);return h;case -536870789:h=new Es;e=a.g;e=e.jn();g=a.gH+1|0;a.gH=g;It(h,e,c,b,(-536870849),g);c.Q(h);return h;default:}return c;}j=null;if(c!==null)j=c;switch(d){case -2147483606:case -2147483605:a.g.E();h=Bcd(j,b,d);j.Q(h);return h;case -2147483585:a.g.E();return Bdl(j,
b,(-2147483585));case -2147483525:return BcC(a.g.jn(),j,b,(-2147483525));case -1073741782:case -1073741781:a.g.E();h=BfQ(j,b,d);j.Q(h);return h;case -1073741761:a.g.E();return BfD(j,b,(-1073741761));case -1073741701:return Ba2(a.g.jn(),j,b,(-1073741701));case -536870870:case -536870869:a.g.E();h=Bb5(j,b,d);j.Q(h);return h;case -536870849:a.g.E();return Bby(j,b,(-536870849));case -536870789:return Bd0(a.g.jn(),j,b,(-536870789));default:}return c;}
function Ov(a,b){var c,d,e,f,g,h,i,j,k,l;c=null;while(true){a:{d=a.g.bV();if((d&(-2147418113))==(-2147483608)){a.g.E();e=(d&16711680)>>16;d=d&(-16711681);if(d==(-16777176))a.c_=e;else{if(d!=(-1073741784))e=a.c_;c=L3(a,d,e,b);if(a.g.bV()!=(-536870871))G(BS(B(101),a.g.b(),a.g.dM()));a.g.E();}}else{b:{c:{switch(d){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:a.g.E();c
=A8H(0);break a;case -2147483577:a.g.E();c=BaD();break a;case -2147483558:a.g.E();c=new LR;f=a.bR+1|0;a.bR=f;ABx(c,f);break a;case -2147483550:a.g.E();c=A8H(1);break a;case -2147483526:a.g.E();c=Bcw();break a;case -536870876:a.g.E();a.bR=a.bR+1|0;if(BX(a,8)){if(BX(a,1)){c=BaZ(a.bR);break a;}c=A_0(a.bR);break a;}if(BX(a,1)){c=Bbt(a.bR);break a;}c=Bcj(a.bR);break a;case -536870866:a.g.E();if(BX(a,32)){c=BcM();break a;}c=Bca(MP(a.c_));break a;case -536870821:a.g.E();g=0;if(a.g.bV()==(-536870818)){g=1;a.g.E();}c
=Su(a,g,b);if(a.g.bV()!=(-536870819))G(BS(B(101),a.g.b(),a.g.dM()));a.g.pO(1);a.g.E();break a;case -536870818:a.g.E();a.bR=a.bR+1|0;if(!BX(a,8)){c=ARC();break a;}c=BfP(MP(a.c_));break a;case 0:h=a.g.sg();if(h!==null)c=HQ(a,h);else{if(a.g.bN()){c=FG(b);break a;}c=Qo(d&65535);}a.g.E();break a;default:break b;}a.g.E();c=ARC();break a;}i=(d&2147483647)-48|0;if(a.fF<i)G(BS(B(101),a.g.b(),a.g.dM()));a.g.E();a.bR=a.bR+1|0;c=!BX(a,2)?Bdq(i,a.bR):BX(a,64)?Ba0(i,a.bR):Bgi(i,a.bR);a.qH.data[i].tl=1;a.v2=1;break a;}if(d
>=0&&!a.g.k0()){c=LW(a,d);a.g.E();}else if(d==(-536870788))c=FG(b);else{if(d!=(-536870871)){j=new Oh;k=!a.g.k0()?Il(d&65535):(a.g.sg()).b();l=a.g;VX(j,k,l.b(),a.g.dM());G(j);}if(b instanceof EZ)G(BS(B(101),a.g.b(),a.g.dM()));c=FG(b);}}}if(d!=(-16777176))break;}return c;}
function Su(a,b,c){var d,e;d=Fq(a,b);e=HQ(a,d);e.Q(c);return e;}
function Fq(a,b){var c,d,e,f,g,h,i,j,k,$$je;c=BfJ(b,BX(a,2),BX(a,64));d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(a.g.bN())break a;f=a.g.bV()==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.g.bV()){case -536870874:if(d>=0)c.cG(d);d=a.g.E();if(a.g.bV()!=(-536870874)){d=38;break d;}if(a.g.cM()==(-536870821)){a.g.E();e=1;d=(-1);break d;}a.g.E();if(g){c=Fq(a,0);break d;}if(a.g.bV()==(-536870819))break d;c.x5(Fq(a,0));break d;case -536870867:if(!g&&a.g.cM()!=(-536870819)){h=a.g;if(h.cM()!=(-536870821)&&d>=0){a.g.E();i
=a.g.bV();if(a.g.k0())break c;if(i<0){h=a.g;if(h.cM()!=(-536870819)){h=a.g;if(h.cM()!=(-536870821)&&d>=0)break c;}}e:{try{if(I2(i))break e;i=i&65535;break e;}catch($$e){$$je=R($$e);if($$je instanceof B5){break b;}else{throw $$e;}}}try{c.bF(d,i);}catch($$e){$$je=R($$e);if($$je instanceof B5){break b;}else{throw $$e;}}a.g.E();d=(-1);break d;}}if(d>=0)c.cG(d);d=45;a.g.E();break d;case -536870821:if(d>=0){c.cG(d);d=(-1);}a.g.E();j=0;if(a.g.bV()==(-536870818)){a.g.E();j=1;}if(!e)c.LS(Fq(a,j));else c.x5(Fq(a,j));e
=0;a.g.E();break d;case -536870819:if(d>=0)c.cG(d);d=93;a.g.E();break d;case -536870818:if(d>=0)c.cG(d);d=94;a.g.E();break d;case 0:if(d>=0)c.cG(d);k=a.g.sg();if(k===null)d=0;else{c.NM(k);d=(-1);}a.g.E();break d;default:}if(d>=0)c.cG(d);d=a.g.E();}g=0;}G(BS(B(101),IQ(a),a.g.dM()));}G(BS(B(101),IQ(a),a.g.dM()));}if(!f){if(d>=0)c.cG(d);return c;}G(BS(B(101),IQ(a),a.g.dM()-1|0));}
function LW(a,b){var c;c=Ik(b);if(BX(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AXH(b&65535);}if(BX(a,64)&&b>128){if(c)return BbP(b);if(Ki(b))return AN9(b&65535);if(!K6(b))return A6D(b&65535);return A1R(b&65535);}}if(c)return Bad(b);if(Ki(b))return AN9(b&65535);if(!K6(b))return Qo(b&65535);return A1R(b&65535);}
function HQ(a,b){var c,d;if(!b.Ga()){if(!b.Dh()){if(b.g8())return AJO(b);return ARm(b);}if(b.g8())return A4F(b);return A2l(b);}c=b.N8();d=Bdd(c);if(!b.Dh()){if(b.g8())return Lr(AJO(b.mR()),d);return Lr(ARm(b.mR()),d);}if(b.g8())return Lr(A4F(b.mR()),d);return Lr(A2l(b.mR()),d);}
function GJ(b){return AZh(b,0);}
function QH(a){if(a.v2)a.rO.ed();}
function A2q(b){var c,d,e,f;c=(I()).a(B(462));d=0;while(true){e=b.uy(B(463),d);if(e<0)break;f=e+2|0;(c.a(b.ce(d,f))).a(B(464));d=f;}return ((c.a(b.ei(d))).a(B(463))).b();}
function VJ(a){return a.fF;}
function ABV(a){return a.gH+1|0;}
function SI(a){return a.bR+1|0;}
function GF(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function BX(a,b){return (a.c_&b)!=b?0:1;}
function ADD(a){J(a);a.qH=Y(Cy,10);a.fF=(-1);a.gH=(-1);a.bR=(-1);}
var De=D(B5);
function BbK(){var a=new De();V5(a);return a;}
function V5(a){E$(a);}
var GK=D(De);
var Ou=D(0);
function V2(){var a=this;C.call(a);a.z4=0;a.A2=null;}
function BeR(a,b){var c=new V2();AUT(c,a,b);return c;}
function AUT(a,b,c){a.A2=b;a.z4=c;J(a);}
function AXo(a){A2_(a.A2,a.z4);}
function AO4(a){a.HO();}
var Qh=D(FP);
function Be0(a,b,c){var d=new Qh();ARl(d,a,b,c);return d;}
function ARl(a,b,c,d){Ml(a,b,c,d);JF();b.Q(Bik);}
function ALd(a,b,c,d){var e;e=a.Y.e(b,c,d);if(e<=0)e=b;return a.k.e(e,c,d);}
function A4Q(a,b){a.k=b;}
function Jo(){var a=this;C.call(a);a.o1=0;a.n0=0;a.JF=0;a.N3=0;}
function Bl0(a,b,c,d){var e=new Jo();Tt(e,a,b,c,d);return e;}
function Tt(a,b,c,d,e){J(a);a.o1=b;a.n0=c;a.JF=d;a.N3=e;}
var YL=D(Bm);
function F0(){var a=new YL();A0r(a);return a;}
function A0r(a){Cx(a);}
var UK=D(T);
function BfF(){var a=new UK();AL1(a);return a;}
function AL1(a){Bo(a);}
function A2Q(a){var b;b=BcT(a);b.be=1;return b;}
function Mt(){var a=this;C.call(a);a.tM=0;a.yf=0;a.Cs=null;}
function AIA(a,b,c){var d=new Mt();AQX(d,a,b,c);return d;}
function AQX(a,b,c,d){J(a);a.tM=b;a.yf=c;a.Cs=d;}
function SH(){EA.call(this);this.iU=null;}
function Bdm(){var a=new SH();A9U(a);return a;}
function A9U(a){Lz(a);}
function AWE(a,b){var c;JD();c=BA(a,Bl1);if(c===null){c=Bbb();Ep(a,c);}c.hl.F(b);return a;}
var AA0=D(D9);
function BfK(){var a=new AA0();AJR(a);return a;}
function AJR(a){Kn(a);}
function A7Q(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AS_(a,b,c){var d;a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}d=1;break a;}d=0;}return d;}
var AAZ=D(D9);
function Bfh(){var a=new AAZ();AWI(a);return a;}
function AWI(a){Kn(a);}
function AF$(a,b){return b!=10?0:1;}
function APL(a,b,c){return b!=10?0:1;}
var YQ=D(FS);
var Ve=D(T);
function Bfp(){var a=new Ve();A1m(a);return a;}
function A1m(a){Bo(a);}
function A7g(a){var b;b=Bex(a);b.be=1;return b;}
var La=D();
var Blm=0;function KX(){C.call(this);this.qx=null;}
var Bl2=null;function BaB(){var a=new KX();AZt(a);return a;}
function AZt(a){J(a);}
function A0q(a,b,c,d,e){if(a.qx===null)a.qx=BeC();a.qx.Gz(b,c,d,e);}
function AIl(){if(Bl2===null)Bl2=BaB();return Bl2;}
function To(){var a=this;C.call(a);a.Bs=null;a.CN=0;}
function Bcc(a){var b=new To();AYV(b,a);return b;}
function AYV(a,b){J(a);a.Bs=b;}
function Dx(){var a=this;BJ.call(a);a.gy=null;a.yC=0;}
function ARm(a){var b=new Dx();APc(b,a);return b;}
function APc(a,b){C2(a);a.gy=b.mh();a.yC=b.bD;}
function AUo(a,b,c){return !a.gy.p(c.f(b))?(-1):1;}
function ALG(a){return ((((I()).a(B(55))).a(!a.yC?B(56):B(57))).a(a.gy.b())).b();}
function AOI(a,b){if(b instanceof Dz)return IY(a.gy,b.ps());if(b instanceof Dx)return GU(a.gy,b.gy);if(b instanceof C4)return GU(a.gy,b.uN());if(!(b instanceof Dv))return 1;return 0;}
function A5y(a){return a.gy;}
function Io(){Q.call(this);this.rX=0;}
function BcU(a){var b=new Io();Sy(b,a);return b;}
function Sy(a,b){Be(a);a.rX=b;}
function AOC(a,b){return a.bD^(a.rX!=F_(b&65535)?0:1);}
var Zm=D(Io);
function A_9(a){var b=new Zm();ANy(b,a);return b;}
function ANy(a,b){Sy(a,b);}
function A8c(a,b){return a.bD^(!(a.rX>>F_(b&65535)&1)?0:1);}
function LJ(){var a=this;C.call(a);a.sL=null;a.l3=null;a.dC=0;a.mP=null;a.Ag=0.0;a.AZ=0.0;a.fM=0;a.Ev=null;a.nZ=null;a.pS=null;a.uT=0;a.si=0;a.wW=0;a.Cn=0;a.vG=0;a.il=null;a.gu=null;a.LT=0;a.Om=null;a.P7=0.0;a.nn=0;a.rf=0;a.ve=0;}
var Bl3=null;function TH(){TH=N(LJ);A3$();}
function Bdh(){var a=new LJ();ABw(a);return a;}
function Bl4(a,b){var c=new LJ();Kg(c,a,b);return c;}
function ABw(a){TH();Kg(a,1000,null);}
function Kg(a,b,c){var d,e,f,g,h,i,j,k,l,m;TH();J(a);a.dC=0;a.mP=null;a.Ag=0.0;a.AZ=0.0;a.fM=0;a.Ev=BL();a.nZ=BL();a.pS=BL();a.uT=0;a.si=770;a.wW=771;a.Cn=770;a.vG=771;a.gu=null;a.Om=CP(1.0,1.0,1.0,1.0);a.P7=BkA;a.nn=0;a.rf=0;a.ve=0;if(b>8191)G(W((((I()).a(B(465))).j(b)).b()));if(Bir===null)d=Bl3;else{M3();d=BlW;}e=new HS;f=b*4|0;g=b*6|0;M5(e,d,0,f,g,H(Fc,[EB(1,2,B(466)),EB(4,4,B(467)),EB(16,2,B(468))]));a.sL=e;a.nZ.L8(0.0,0.0,Bim.bo(),Bim.bl());a.l3=Ca(b*20|0);h=MX(g);i=0;j=0;while(j<g){k=h.data;k[j]=i;k[j
+1|0]=(i+1|0)<<16>>16;l=j+2|0;m=(i+2|0)<<16>>16;k[l]=m;k[j+3|0]=m;k[j+4|0]=(i+3|0)<<16>>16;k[j+5|0]=i;j=j+6|0;i=(i+4|0)<<16>>16;}a.sL.NO(h);if(c!==null)a.il=c;else{a.il=S5();a.LT=1;}}
function S5(){var b,c,d;TH();b=B(469);c=B(470);d=AIU(b,c);if(d.sa())return d;G(W((((I()).a(B(471))).a(d.q2())).b()));}
function A09(a){if(a.fM)G(DR(B(472)));a.nn=0;Bip.kT(0);if(a.gu===null)a.il.ew();else a.gu.ew();a.z6();a.fM=1;}
function AQV(a){var b;if(!a.fM)G(DR(B(473)));if(a.dC>0)a.eo();a.mP=null;a.fM=0;b=Bip;b.kT(1);if(a.Jz())b.eh(3042);}
function ALa(a,b,c,d,e){var f,g,h;if(!a.fM)G(DR(B(474)));f=a.l3.data.length;if(b!==a.mP){a.Ks(b);g=f;}else{g=f-a.dC|0;if(!g){a.eo();g=f;}}h=Bq(g,e);X(c,d,a.l3,a.dC,h);a.dC=a.dC+h|0;g=e-h|0;while(g>0){d=d+h|0;a.eo();h=Bq(f,g);X(c,d,a.l3,0,h);a.dC=a.dC+h|0;g=g-h|0;}}
function AKz(a){var b,c,d;if(!a.dC)return;a.nn=a.nn+1|0;a.rf=a.rf+1|0;b=a.dC/20|0;if(b>a.ve)a.ve=b;c=b*6|0;a.mP.ew();d=a.sL;d.FO(a.l3,0,a.dC);(d.Av()).cZ(0);(d.Av()).cm(c);if(a.uT)Bip.eh(3042);else{Bip.o5(3042);if(a.si!=(-1))Bip.J0(a.si,a.wW,a.Cn,a.vG);}d.NP(a.gu===null?a.il:a.gu,4,0,c);a.dC=0;}
function AJd(a,b){if(a.fM)a.eo();a.nZ.ch(b);if(a.fM)a.z6();}
function AHz(a){(a.pS.ch(a.nZ)).hC(a.Ev);if(a.gu===null){a.il.Fg(B(475),a.pS);a.il.yi(B(476),0);}else{a.gu.Fg(B(475),a.pS);a.gu.yi(B(476),0);}}
function A5p(a,b){a.eo();a.mP=b;a.Ag=1.0/b.bo();a.AZ=1.0/b.bl();}
function AD9(a){return a.uT?0:1;}
function A3$(){M3();Bl3=BlT;}
var Ma=D();
var Bl5=null;function Be5(){Be5=N(Ma);A7m();}
function A7m(){Bl5=Bc((UJ()).data.length);Bl5.data[BC(BlU)]=1;Bl5.data[BC(BlV)]=2;Bl5.data[BC(BlW)]=3;Bl5.data[BC(BlT)]=4;}
var XS=D(CO);
var N8=D(0);
function LX(){var a=this;C.call(a);a.jE=null;a.e7=null;a.xM=null;a.JY=null;a.eC=null;a.NV=null;}
var Bl6=0;function VN(){VN=N(LX);AY7();}
function BfR(a){var b=new LX();ACZ(b,a);return b;}
function Bl7(a,b){var c=new LX();Kb(c,a,b);return c;}
function Bl8(a,b,c){var d=new LX();Nn(d,a,b,c);return d;}
function ACZ(a,b){VN();Kb(a,b,null);}
function Kb(a,b,c){VN();Nn(a,b,null,c);}
function Nn(a,b,c,d){VN();J(a);a.jE=Bp();a.e7=Bp();a.xM=Bp();a.JY=b;if(c===null)c=BL();a.eC=c;if(d!==null)Pf(a,b.j3,d);else Q9(a,b.j3);a.Hb(b.AC,Bl6);a.P1();}
function Q9(a,b){var c,d,e;c=0;d=b.h;while(c<d){e=b.l(c);a.e7.F(e.u$());c=c+1|0;}Oc(a);}
function Pf(a,b,c){var d,e,f,g,h,i,j;d=0;e=b.h;while(d<e){f=c.data;g=b.l(d);h=f.length;i=0;a:{while(true){if(i>=h)break a;j=f[i];if(j.z(g.gn))break;i=i+1|0;}a.e7.F(g.u$());}d=d+1|0;}Oc(a);}
function Oo(a,b){var c,d,e,f,g,h,i,j;c=0;d=b.d9.h;while(c<d){a:{e=b.d9.l(c);f=e.cJ;if(f!==null){g=0;while(true){if(g>=f.cb)break a;f.eq.data[g]=a.yG(f.eq.data[g].gn);g=g+1|0;}}}if(!a.jE.iv(e.dY,1)){h=a.jE.K$(e.dY,0);if(h>=0)e.dY=a.jE.l(h);else{i=a.jE;j=e.dY.Je();e.dY=j;i.F(j);}}c=c+1|0;}c=0;d=b.IR();while(c<d){Oo(a,b.Qg(c));c=c+1|0;}}
function Oc(a){var b,c;b=0;c=a.e7.h;while(b<c){Oo(a,a.e7.l(b));b=b+1|0;}}
function AMK(a,b,c){var d,e;d=b.ft();while(d.bC()){e=d.bz();a.Hv(e,c);}}
function AFg(a,b,c){var d,e,f,g,h,i,j;d=Bf9();d.DU=b.DU;d.wm=b.wm;e=b.mW.bZ();while(e.bC()){f=e.bz();g=a.yG(f.y1.gn);if(g===null)continue;a:{h=Bfu();h.y1=g;if(c){h.gC=f.gC;h.gp=f.gp;h.fQ=f.fQ;}else{b:{if(f.gC!==null){h.gC=Bp();i=f.gC.bZ();while(true){if(!i.bC())break b;j=i.bz();h.gC.F(Rp(j.no,j.ox));}}}c:{if(f.gp!==null){h.gp=Bp();i=f.gp.bZ();while(true){if(!i.bC())break c;j=i.bz();h.gp.F(Rp(j.no,j.ox));}}}if(f.fQ!==null){h.fQ=Bp();i=f.fQ.bZ();while(true){if(!i.bC())break a;j=i.bz();h.fQ.F(Rp(j.no,j.ox));}}}}if
(!(h.gC===null&&h.gp===null&&h.fQ===null))d.mW.F(h);}if(d.mW.h>0)a.xM.F(d);}
function APk(a,b,c){var d,e;d=a.e7.bZ();while(d.bC()){e=d.bz();a.z8(e,b,c);}}
function A$i(a,b,c,d){d.IJ(b);if(d.dz===null&&a.eC!==null)(b.dy.ch(a.eC)).hC(c.fI);else if(a.eC===null)b.dy.fx();else b.dy.ch(a.eC);b.BT=a.NV;return b;}
function ANK(a,b,c,d){var e,f,g,h;a:{if(b.d9.h>0){e=b.d9.bZ();while(true){if(!e.bC())break a;f=e.bz();if(f.lz)c.F(a.Jt(d.eT(),b,f));}}}g=(b.rE()).ft();while(g.bC()){h=g.bz();a.z8(h,c,d);}}
function ADe(a){var b,c;b=a.e7.h;c=0;while(c<b){(a.e7.l(c)).Di(1);c=c+1|0;}c=0;while(c<b){(a.e7.l(c)).y3(1);c=c+1|0;}}
function AC7(a,b){return a.Ok(b,1);}
function AM4(a,b,c){return a.Pu(b,c,0);}
function AZi(a,b,c,d){return ZN(a.e7,b,c,d);}
function AY7(){Bl6=1;}
var D0=D(De);
function Bl9(){var a=new D0();Kq(a);return a;}
function Kq(a){V5(a);}
function QK(){D0.call(this);this.E6=0;}
function BaO(a){var b=new QK();A1P(b,a);return b;}
function A1P(a,b){Kq(a);a.E6=b;}
function AHn(a){return (((I()).a(B(477))).j(a.E6)).b();}
function P4(){var a=this;Q.call(a);a.uu=0;a.vV=0;a.pA=0;a.rr=0;a.e_=0;a.hX=0;a.bc=null;a.bE=null;}
function CS(){var a=new P4();ATZ(a);return a;}
function Bf1(a,b){var c=new P4();P$(c,a,b);return c;}
function BfJ(a,b,c){var d=new P4();AVl(d,a,b,c);return d;}
function ATZ(a){Be(a);a.bc=A_L();}
function P$(a,b,c){Be(a);a.bc=A_L();a.uu=b;a.vV=c;}
function AVl(a,b,c,d){P$(a,c,d);a.f9(b);}
function AC4(a,b){a:{if(a.uu){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.e_){a.bc.rW(GF(b&65535));break a;}a.bc.sS(GF(b&65535));break a;}if(a.vV&&b>128){a.pA=1;b=EX(En(b));}}}if(!(!K6(b)&&!Ki(b))){if(a.rr)a.bG.rW(b-55296|0);else a.bG.sS(b-55296|0);}if(a.e_)a.bc.rW(b);else a.bc.sS(b);if(!a.be&&Ik(b))a.be=1;return a;}
function A_B(a,b){var c,d;if(!a.be&&b.be)a.be=1;if(a.rr){if(!b.b5)a.bG.iI(b.ci());else a.bG.dN(b.ci());}else if(!b.b5)a.bG.iQ(b.ci());else{a.bG.i8(b.ci());a.bG.dN(b.ci());a.b5=a.b5?0:1;a.rr=1;}if(!a.hX&&b.bK()!==null){if(a.e_){if(!b.jH())a.bc.iI(b.bK());else a.bc.dN(b.bK());}else if(!b.jH())a.bc.iQ(b.bK());else{a.bc.i8(b.bK());a.bc.dN(b.bK());a.bD=a.bD?0:1;a.e_=1;}}else{c=a.bD;if(a.bE!==null){d=a.bE;if(!c)a.bE=BfW(a,c,d,b);else a.bE=Bc6(a,c,d,b);}else{if(c&&!a.e_&&a.bc.bN())a.bE=BaM(a,b);else if(!c)a.bE=Bc9(a,
c,b);else a.bE=Bax(a,c,b);a.hX=1;}}return a;}
function A86(a,b,c){if(b>c)G(CL());a:{b:{if(!a.uu){if(c<55296)break b;if(b>57343)break b;}while(true){if(b>=(c+1|0))break a;a.cG(b);b=b+1|0;}}if(a.e_)a.bc.Oz(b,c+1|0);else a.bc.n4(b,c+1|0);}return a;}
function AUO(a,b){var c,d;if(!a.be&&b.be)a.be=1;if(b.g8())a.pA=1;if(!(a.b5^b.b5)){if(!a.b5)a.bG.iQ(b.ci());else a.bG.dN(b.ci());}else if(a.b5)a.bG.iI(b.ci());else{a.bG.i8(b.ci());a.bG.dN(b.ci());a.b5=1;}if(!a.hX&&b.bK()!==null){if(!(a.bD^b.jH())){if(!a.bD)a.bc.iQ(b.bK());else a.bc.dN(b.bK());}else if(a.bD)a.bc.iI(b.bK());else{a.bc.i8(b.bK());a.bc.dN(b.bK());a.bD=1;}}else{c=a.bD;if(a.bE!==null){d=a.bE;if(!c)a.bE=Bco(a,c,d,b);else a.bE=Bgq(a,c,d,b);}else{if(!a.e_&&a.bc.bN()){if(!c)a.bE=BaJ(a,b);else a.bE=Bf6(a,
b);}else if(!c)a.bE=BdE(a,b,c);else a.bE=A_3(a,b,c);a.hX=1;}}}
function AR9(a,b){var c,d;if(!a.be&&b.be)a.be=1;if(b.g8())a.pA=1;if(!(a.b5^b.b5)){if(!a.b5)a.bG.dN(b.ci());else a.bG.iQ(b.ci());}else if(!a.b5)a.bG.iI(b.ci());else{a.bG.i8(b.ci());a.bG.dN(b.ci());a.b5=0;}if(!a.hX&&b.bK()!==null){if(!(a.bD^b.jH())){if(!a.bD)a.bc.dN(b.bK());else a.bc.iQ(b.bK());}else if(!a.bD)a.bc.iI(b.bK());else{a.bc.i8(b.bK());a.bc.dN(b.bK());a.bD=0;}}else{c=a.bD;if(a.bE!==null){d=a.bE;if(!c)a.bE=Bgm(a,c,d,b);else a.bE=Bci(a,c,d,b);}else{if(!a.e_&&a.bc.bN()){if(!c)a.bE=BeV(a,b);else a.bE=Bfc(a,
b);}else if(!c)a.bE=Baf(a,b,c);else a.bE=Bgl(a,b,c);a.hX=1;}}}
function AGu(a,b){if(a.bE!==null)return a.bD^a.bE.p(b);return a.bD^a.bc.eL(b);}
function AT$(a){if(!a.hX)return a.bc;return null;}
function AZI(a){return a.bG;}
function ARA(a){var b,c;if(a.bE!==null)return a;b=a.bK();c=Bd5(a,b);return c.f9(a.jH());}
function A4D(a){var b,c;b=I();c=a.bc.lc(0);while(c>=0){b.q1(Eu(c));b.U(124);c=a.bc.lc(c+1|0);}if(b.i()>0)b.Fa(b.i()-1|0);return b.b();}
function AIy(a){return a.pA;}
function P0(){var a=this;C.call(a);a.vl=null;a.Ct=null;a.oB=null;}
function BcP(a,b,c){var d=new P0();A6H(d,a,b,c);return d;}
function A6H(a,b,c,d){a.oB=b;a.vl=c;a.Ct=d;J(a);}
function A4R(a,b){if($rt_str(b.type).z(B(478)))a.oB.mB.ck(a.vl);else a.oB.mB.ct(a.vl,a.Ct);a.oB.m4.eu();}
function A$y(a,b){a.dU(b);}
var ABK=D(Bm);
function UB(){var a=new ABK();ASA(a);return a;}
function ASA(a){Cx(a);}
function TA(){var a=this;C.call(a);a.rd=0;a.qO=0;a.wd=0;}
function Beb(){var a=new TA();AC_(a);return a;}
function AC_(a){J(a);}
var UG=D(Ek);
function Bf4(a,b){var c=new UG();A1w(c,a,b);return c;}
function A1w(a,b,c){J4(a,b,c);}
var Oz=D(0);
var I4=D();
function Bl$(){var a=new I4();Tj(a);return a;}
function Tj(a){J(a);}
function AHJ(a,b,c,d,e){return 0;}
function ANY(a){}
function ZF(){var a=this;I4.call(a);a.wY=null;a.q6=0.0;}
function Bfr(){var a=new ZF();AKG(a);return a;}
function AKG(a){Tj(a);}
function A1Y(a,b,c,d,e){a.q6=0.0;return 0;}
function AHZ(a,b,c,d,e){return 0;}
function A7i(a,b,c){return 0;}
function A56(a,b,c,d){return 0;}
function A2B(a,b,c,d,e){return 0;}
function A9L(a,b,c){var d,e,f,g,h;d=c-b;e=d-a.q6;a.q6=d;f=Bim.bo();g=Bim.bl();h=a.wY;if(f>g)f=g;return h.Ne(e/f);}
function AY1(a,b,c,d,e){return 0;}
var Pj=D(ER);
function BfC(a,b,c,d,e,f){var g=new Pj();A35(g,a,b,c,d,e,f);return g;}
function A35(a,b,c,d,e,f,g){LQ(a,b,c,d,e,f,g);}
function AL7(a,b){var c,d,e,f;c=a.cx.A.data;d=a.cj;e=b*4|0;f=(c[d+e|0]&255)<<24|(a.cx.A.data[(a.cj+e|0)+1|0]&255)<<16|(a.cx.A.data[(a.cj+e|0)+2|0]&255)<<8|a.cx.A.data[(a.cj+e|0)+3|0]&255;return $rt_intBitsToFloat(f);}
function A6w(a,b,c){var d,e,f,g;d=$rt_floatToIntBits(c);e=a.cx.A.data;f=a.cj;g=b*4|0;e[f+g|0]=d>>24<<24>>24;a.cx.A.data[(a.cj+g|0)+1|0]=d>>16<<24>>24;a.cx.A.data[(a.cj+g|0)+2|0]=d>>8<<24>>24;a.cx.A.data[(a.cj+g|0)+3|0]=d<<24>>24;}
var Mx=D(0);
function Ha(){var a=this;C.call(a);a.hi=null;a.mg=null;a.fJ=null;a.bu=null;a.px=null;a.po=null;a.qk=null;a.bh=null;a.cY=null;a.cV=null;a.ff=null;a.hW=null;a.kG=null;}
function ABb(a){J(a);a.hi=Bp();a.mg=Bp();a.fJ=Bp();a.px=G$();a.po=G$();a.qk=BaS();a.hW=G$();a.kG=ATE();}
function ADE(a,b,c,d){var e;if(a.bu!==null)G(U(B(479)));e=a.N_(b);if(e>=0){a.mg.k4(e,c);a.fJ.k4(e,d);return e;}a.hi.F(b);a.mg.F(c);a.fJ.F(d);return a.hi.h-1|0;}
function A_q(a,b,c){return a.I$(b.v_,b,c);}
function ASB(a,b){return a.bf(b,null);}
function AH5(a,b){var c,d;c=a.hi.h;d=0;while(true){if(d>=c)return (-1);if((a.hi.l(d)).z(b))break;d=d+1|0;}return d;}
function AZB(a,b,c){var d,e,f,g,h,i,j,k,l;if(a.bu!==null)G(U(B(480)));if(!b.sa())G(U(b.q2()));a.bh=b;d=a.hi.h;a.bu=Bc(d);e=0;while(e<d){f=a.hi.l(e);g=a.mg.l(e);h=a.fJ.l(e);if(g!==null&&!g.L_(a,e,c))a.bu.data[e]=(-1);else{a.bu.data[e]=b.AO(f,0);if(a.bu.data[e]>=0&&h!==null){if(!h.x3(a,e))a.po.iY(e);else a.px.iY(e);}}if(a.bu.data[e]<0){a.mg.k4(e,null);a.fJ.k4(e,null);}e=e+1|0;}a:{if(c!==null){i=c.cS.b7.gS();j=CU(i);e=0;while(true){if(e>=j)break a;k=CB(i,e);l=b.lZ(k.es);if(l>=0)a.qk.os(IU(k),l);e=e+1|0;}}}}
function X2(a,b,c){var d,e,f;a.cV=b;a.cY=c;a.bh.ew();a.ff=null;d=0;while(d<a.px.bS){e=a.fJ;f=a.px.b2(d);if(e.l(f)!==null)(a.fJ.l(f)).bg(a,f,null,null);d=d+1|0;}}
function WT(a,b){var c,d;a.hW.K();c=CU(b);d=0;while(d<c){a.hW.iY(a.qk.KT(IU(CB(b,d)),(-1)));d=d+1|0;}a.hW.Hy();return a.hW.cp;}
function A0I(a,b){if(b.dy.PT()===0.0)return;a.kG.K();if(b.cw!==null)F7(a.kG,b.cw);if(b.da!==null)F7(a.kG,b.da);a.y9(b,a.kG);}
function Vu(a,b,c){var d,e,f;d=0;while(d<a.po.bS){e=a.fJ;f=a.po.b2(d);if(e.l(f)!==null)(a.fJ.l(f)).bg(a,f,b,c);d=d+1|0;}if(a.ff!==b.cS.b7){if(a.ff!==null)a.ff.gO(a.bh,a.hW.cp);a.ff=b.cS.b7;a.ff.ih(a.bh,WT(a,b.cS.b7.gS()));}b.cS.JB(a.bh,0);}
function WK(a){if(a.ff!==null){a.ff.gO(a.bh,a.hW.cp);a.ff=null;}}
function Ic(a,b){return b>=0&&b<a.bu.data.length&&a.bu.data[b]>=0?1:0;}
function B1(a,b){return b>=0&&b<a.bu.data.length?a.bu.data[b]:(-1);}
function D1(a,b,c){if(a.bu.data[b]<0)return 0;a.bh.GT(a.bu.data[b],c);return 1;}
function Q4(a,b,c){if(a.bu.data[b]<0)return 0;a.bh.HV(a.bu.data[b],c);return 1;}
function LA(a,b,c){if(a.bu.data[b]<0)return 0;a.bh.sr(a.bu.data[b],c);return 1;}
function Fv(a,b,c){if(a.bu.data[b]<0)return 0;a.bh.KO(a.bu.data[b],c);return 1;}
function Fn(a,b,c){if(a.bu.data[b]<0)return 0;a.bh.kc(a.bu.data[b],c);return 1;}
function WE(a,b,c,d){if(a.bu.data[b]<0)return 0;a.bh.Gf(a.bu.data[b],c,d);return 1;}
function DQ(a,b,c,d,e,f){if(a.bu.data[b]<0)return 0;a.bh.yv(a.bu.data[b],c,d,e,f);return 1;}
function DU(a,b,c){if(a.bu.data[b]<0)return 0;a.bh.Dm(a.bu.data[b],c);return 1;}
function ZE(a,b,c){if(a.bu.data[b]<0)return 0;a.bh.Dm(a.bu.data[b],a.cY.d6.gE(c));return 1;}
function RJ(){Q.call(this);this.Nb=null;}
function Bas(a){var b=new RJ();AVz(b,a);return b;}
function AVz(a,b){a.Nb=b;Be(a);}
function AEw(a,b){return KL(b);}
function Tq(){D0.call(this);this.zX=0;}
function BdO(a){var b=new Tq();AOj(b,a);return b;}
function AOj(a,b){Kq(a);a.zX=b;}
function AIj(a){return (((I()).a(B(481))).j(a.zX)).b();}
var X8=D(T);
function BdR(){var a=new X8();AEa(a);return a;}
function AEa(a){Bo(a);}
function AHK(a){var b;b=Bay(a);b.be=1;return b;}
var Fg=D(Bx);
var BjL=null;var BjG=null;var Bl_=null;function Gv(){Gv=N(Fg);A0L();}
function AH1(a,b){var c=new Fg();AAb(c,a,b);return c;}
function AAb(a,b,c){Gv();Cw(a,b,c);}
function A0L(){BjL=AH1(B(482),0);BjG=AH1(B(483),1);Bl_=H(Fg,[BjL,BjG]);}
var EG=D(Bx);
var Bma=null;var BjH=null;var Bmb=null;function SM(){SM=N(EG);A7K();}
function ANX(a,b){var c=new EG();Zg(c,a,b);return c;}
function Zg(a,b,c){SM();Cw(a,b,c);}
function A7K(){Bma=ANX(B(484),0);BjH=ANX(B(485),1);Bmb=H(EG,[Bma,BjH]);}
function HZ(){BH.call(this);this.mo=0.0;}
var Bmc=Ba;var Bmd=Ba;function ET(){ET=N(HZ);AD2();}
function A3w(a,b){var c=new HZ();VC(c,a,b);return c;}
function N$(b){ET();return A3w(Bmc,b);}
function VC(a,b,c){ET();Fb(a,b);a.mo=c;}
function APf(a){return A3w(a.dc,a.mo);}
function ASP(a){var b,c;b=F2(a);c=(977*b|0)+G0(a.mo)|0;return c;}
function AD2(){Bmc=BR(B(486));Bmd=BR(B(487));}
function Im(){var a=this;C.call(a);a.qZ=0;a.qD=0;a.AK=0;a.Fy=0;a.xs=0;a.Ea=0;a.FW=0;a.Nv=0;a.NU=0;a.Bf=0;}
function Ze(a){J(a);a.qZ=(-1);a.qD=(-1);a.AK=0;a.Fy=0;a.xs=0;a.Ea=0;a.FW=0;a.Nv=0;a.NU=0;}
var TF=D(B5);
function BbG(){var a=new TF();A1U(a);return a;}
function A1U(a){E$(a);}
var Rh=D(CO);
var Nj=D(D3);
var Bme=null;function N4(){N4=N(Nj);A00();}
function ACx(b,c){var d,e,f,g,h;N4();if(c>=2&&c<=36){if(b!==null&&!b.bN()){a:{d=0;e=0;switch(b.f(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=Ba;while(e<b.i()){g=e+1|0;h=No(b.f(e));if(h<0)G(DH((((I()).a(B(6))).a(b)).b()));if(h>=c)G(DH((((((I()).a(B(7))).j(c)).a(B(8))).a(b)).b()));f=CA(Cf(O(c),f),O(h));if(Ku(f,Ba)){if(g==b.i()&&Z(f,Cd(0, 2147483648))&&d)return Cd(0, 2147483648);G(DH((((I()).a(B(9))).a(b)).b()));}e=g;}if(d)f=A4b(f);return f;}G(DH(B(10)));}G(DH((((I()).a(B(11))).j(c)).b()));}
function ACe(b){N4();return ACx(b,10);}
function CW(b){var c,d,e;N4();if(Z(b,Ba))return 64;c=0;d=CN(b,32);if(Dw(d,Ba))c=32;else d=b;e=CN(d,16);if(Z(e,Ba))e=d;else c=c|16;d=CN(e,8);if(Z(d,Ba))d=e;else c=c|8;e=CN(d,4);if(Z(e,Ba))e=d;else c=c|4;d=CN(e,2);if(Z(d,Ba))d=e;else c=c|2;if(Dw(CN(d,1),Ba))c=c|1;return (64-c|0)-1|0;}
function Xh(b){var c,d,e;N4();if(Z(b,Ba))return 64;c=0;d=D8(b,32);if(Dw(d,Ba))c=32;else d=b;e=D8(d,16);if(Z(e,Ba))e=d;else c=c|16;d=D8(e,8);if(Z(d,Ba))d=e;else c=c|8;e=D8(d,4);if(Z(e,Ba))e=d;else c=c|4;d=D8(e,2);if(Z(d,Ba))d=e;else c=c|2;if(Dw(D8(d,1),Ba))c=c|1;return (64-c|0)-1|0;}
function A00(){Bme=F($rt_longcls());}
var Gu=D(BT);
var Bmf=null;function AMw(){AMw=N(Gu);AIH();}
function Beg(a){var b=new Gu();Sf(b,a);return b;}
function Bmg(){var a=new Gu();HM(a);return a;}
function Sf(a,b){AMw();B_(a);}
function HM(a){AMw();B_(a);}
function AIH(){Bmf=Beg(0);}
var Kx=D(Gu);
var Bmh=null;function A$w(){A$w=N(Kx);A$8();}
function BbQ(){var a=new Kx();Za(a);return a;}
function Bap(a){var b=new Kx();RE(b,a);return b;}
function Za(a){A$w();HM(a);a.dZ(Tg(),1);}
function RE(a,b){A$w();HM(a);}
function A$8(){Bmh=Bap(0);}
function Tg(){var jsObj=new Bullet.btDbvtBroadphase();return Bullet.getPointer(jsObj);}
var Ng=D(0);
function Rf(){C.call(this);this.zq=null;}
function Be2(){var a=new Rf();ATk(a);return a;}
function ATk(a){J(a);a.zq=A0Z();}
function ALD(a,b,c){AVp(a.zq,$rt_ustr(b),c);}
function A0Z(){var soundManager=new SoundManager();soundManager.debugMode=false;return soundManager;}
function AVp(b,c,d){b.setup({url:c,onready:function(){d.onready();},ontimeout:function(status){d.ontimeout();}});}
function Tc(){var a=this;C.call(a);a.ll=null;a.qh=null;a.dp=0;a.Af=0;}
function A4Y(a){var b=new Tc();AK3(b,a);return b;}
function AK3(a,b){J(a);while(b>=a.dp){a.dp=a.dp<<1|1;}a.dp=a.dp<<1|1;a.ll=Bc(a.dp+1|0);a.qh=Bc(a.dp+1|0);a.Af=b;}
function AKq(a,b,c){var d,e,f;d=0;e=b&a.dp;while(a.ll.data[e]&&a.ll.data[e]!=b){f=d+1|0;d=f&a.dp;f=e+d|0;e=f&a.dp;}a.ll.data[e]=b;a.qh.data[e]=c;}
function A3C(a,b){var c,d,e,f;c=b&a.dp;d=0;while(true){e=a.ll.data[c];if(!e)break;if(e==b)return a.qh.data[c];f=d+1|0;d=f&a.dp;f=c+d|0;c=f&a.dp;}return a.Af;}
var Hm=D(0);
var QX=D();
function A_b(a,b){return a.Ms(b);}
function AGa(a){return a.Pb();}
function G5(){var a=this;C.call(a);a.jW=null;a.zR=0.0;a.zU=0.0;a.Qn=0.0;a.Ql=0.0;a.n$=0;a.m0=0;}
function AUW(a){var b=new G5();AV7(b,a);return b;}
function AV7(a,b){J(a);if(b===null)G(W(B(488)));a.jW=b;a.Nh(0,0,b.bo(),b.bl());}
function A7X(a,b,c,d,e){var f,g;f=1.0/a.jW.bo();g=1.0/a.jW.bl();a.Nw(b*f,c*g,(b+d|0)*f,(c+e|0)*g);a.n$=Vz(d);a.m0=Vz(e);}
function AFx(a,b,c,d,e){var f,g,h,i,j,k,l;f=a.jW.bo();g=a.jW.bl();h=CH(d-b);i=f;a.n$=Dg(h*i);h=CH(e-c);j=g;a.m0=Dg(h*j);if(a.n$==1&&a.m0==1){k=0.25/i;b=b+k;d=d-k;l=0.25/j;c=c+l;e=e-l;}a.zR=b;a.zU=c;a.Qn=d;a.Ql=e;}
function ATc(a){return a.jW;}
function AGP(a){return a.n$;}
function ADL(a){return a.m0;}
function Sb(){JH.call(this);this.th=0.0;}
function Bab(){var a=new Sb();AUN(a);return a;}
function Bcq(a){var b=new Sb();UW(b,a);return b;}
function AUN(a){UW(a,Ber());}
function UW(a,b){Tl(a);a.th=1.0;a.GC(b);}
function AYR(a,b,c,d){a.HI(0,0,b,c);a.Kn(b*a.th,c*a.th);a.PL(d);}
function VS(){var a=this;C.call(a);a.eq=null;a.gL=null;a.cb=0;a.Kb=0;}
function Bdp(a,b,c,d){var e=new VS();APZ(e,a,b,c,d);return e;}
function APZ(a,b,c,d,e){J(a);a.Kb=b;a.eq=EW(d,c);a.gL=EW(e,c);}
function AMR(a,b){a.Nl(b,0,b.cb);}
function AVo(a,b,c,d){var e;if((c+d|0)>b.cb)G(W((((((((I()).a(B(489))).j(c)).a(B(426))).j(d)).a(B(427))).j(b.cb)).b()));e=(a.cb+d|0)-c|0;if(e>=a.eq.data.length)a.jJ(Bf(8,e*1.75|0));X(b.eq,c,a.eq,a.cb,d);X(b.gL,c,a.gL,a.cb,d);a.cb=a.cb+d|0;}
function A3s(a){Hk(a.eq,0,a.cb,null);Hk(a.gL,0,a.cb,null);a.cb=0;}
function ASW(a,b){var c,d,e;c=EW((Ck(a.eq)).gq(),b);d=c.data;X(a.eq,0,c,0,Bq(a.cb,d.length));a.eq=c;e=EW((Ck(a.gL)).gq(),b);d=e.data;X(a.gL,0,e,0,Bq(a.cb,d.length));a.gL=e;}
var QF=D(IR);
function BaX(){var a=new QF();A2s(a);return a;}
function A2s(a){TT(a);}
function AJD(a){var b;b=(ZC(a)).f9(1);b.be=1;return b;}
function Q7(){var a=this;C.call(a);a.kh=null;a.gI=null;a.j8=null;a.Mf=0;a.FN=0;a.u4=0;}
function BbH(){var a=new Q7();AGo(a);return a;}
function Bmi(a,b,c,d){var e=new Q7();OM(e,a,b,c,d);return e;}
function Bmj(a,b,c){var d=new Q7();Uk(d,a,b,c);return d;}
function Bmk(a,b,c){var d=new Q7();YC(d,a,b,c);return d;}
function AGo(a){OM(a,Bio.oc(B(490)),Bio.oc(B(491)),0,1);}
function OM(a,b,c,d,e){Uk(a,Bdt(b,d),AUW(ARL(c,0)),e);a.u4=1;}
function Uk(a,b,c,d){var e,f;if(c===null)e=null;else{f=Y(G5,1);f.data[0]=c;e=AEB(f);}YC(a,b,e,d);}
function YC(a,b,c,d){var e,f,g;J(a);a.Mf=b.rh;a.kh=b;a.FN=d;if(c!==null&&c.h){a.gI=c;a.u4=0;}else{if(b.hA===null)G(W(B(492)));e=b.hA.data.length;a.gI=DL(e);f=0;while(f<e){g=b.sp===null?Bio.Fq(b.hA.data[f]):Bio.Op(b.hA.data[f],b.sp.OD());a.gI.F(AUW(ARL(g,0)));f=f+1|0;}a.u4=1;}a.j8=a.KG();a.HE(b);}
function AT5(a,b){var c,d,e,f,g,h,i,j;c=b.he.data;d=c.length;e=0;while(e<d){a:{f=c[e];if(f!==null){g=f.data;h=g.length;i=0;while(true){if(i>=h)break a;j=g[i];if(j!==null)b.E3(j,a.gI.l(j.jX));i=i+1|0;}}}e=e+1|0;}if(b.iu!==null)b.E3(b.iu,a.gI.l(b.iu.jX));}
function AI9(a,b,c,d,e){var f;a.j8.K();f=a.j8.JG(c,d,e);a.j8.Nz(b);return f;}
function A$g(a,b,c,d,e){(a.j8.yP()).hV(b,c,d,e);}
function AQG(a){return a.gI;}
function A92(a){return BfL(a,a.FN);}
var Gy=D(GN);
var Bml=null;function AHx(){AHx=N(Gy);A$2();}
function Bgo(a){var b=new Gy();Vi(b,a);return b;}
function Bmm(){var a=new Gy();KT(a);return a;}
function Vi(a,b){AHx();Jr(a);}
function KT(a){AHx();Jr(a);}
function A$2(){Bml=Bgo(0);}
var He=D(Gy);
function Bmn(){var a=new He();RQ(a);return a;}
function RQ(a){KT(a);}
var Iq=D(He);
function Bmo(){var a=new Iq();Lt(a);return a;}
function Lt(a){RQ(a);}
var LV=D(Iq);
var Bmp=null;function AFl(){AFl=N(LV);AIe();}
function BfA(a){var b=new LV();Si(b,a);return b;}
function Bbu(a){var b=new LV();AAp(b,a);return b;}
function Si(a,b){var c;AFl();Lt(a);Fl();c=Bg6;Gq(b,c);a.dZ(ZH(c.de()),1);}
function A9T(a,b,c){var d,e,f;Fl();d=Bg6;Gq(c,d);e=a.bY;f=d.de();ABJ(e,b,f);Wp(d,c);}
function AAp(a,b){AFl();Lt(a);}
function AIe(){Bmp=Bbu(0);}
function ZH(b){var boxHalfExtentsJSObj=Bullet.wrapPointer(b,Bullet.btVector3);var jsObj=new Bullet.btBoxShape(boxHalfExtentsJSObj);return Bullet.getPointer(jsObj);}
function ABJ(b,c,d){var jsObj=Bullet.wrapPointer(b,Bullet.btBoxShape);var inertiaJSObj=Bullet.wrapPointer(d,Bullet.btVector3);jsObj.calculateLocalInertia(c,inertiaJSObj);}
function Zi(){var a=this;C.call(a);a.fl=null;a.dY=null;a.cJ=null;a.dz=null;a.lz=0;}
function BdV(){var a=new Zi();AEk(a);return a;}
function Bgk(a,b){var c=new Zi();AZP(c,a,b);return c;}
function AEk(a){J(a);a.lz=1;}
function AZP(a,b,c){J(a);a.lz=1;a.fl=b;a.dY=c;}
function APh(a,b){b.da=a.dY;b.cS.Cy(a.fl);b.dJ=a.dz;return b;}
function AQo(a){return (BdV()).Qo(a);}
function A45(a,b){var c;a:{a.fl=BfS(b.fl);a.dY=b.dY;a.lz=b.lz;if(b.cJ===null){a.cJ=null;a.dz=null;}else{if(a.cJ!==null)a.cJ.K();else a.cJ=Bdp(1,b.cJ.cb,F(L2),F(Cu));a.cJ.Pk(b.cJ);if(!(a.dz!==null&&a.dz.data.length==a.cJ.cb))a.dz=Y(Cu,a.cJ.cb);c=0;while(true){if(c>=a.dz.data.length)break a;if(a.dz.data[c]===null)a.dz.data[c]=BL();c=c+1|0;}}}return a;}
function T0(){var a=this;Q.call(a);a.Ba=null;a.P5=null;}
function Bc7(a,b){var c=new T0();AT4(c,a,b);return c;}
function AT4(a,b,c){a.P5=b;a.Ba=c;Be(a);}
function AIg(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.b5^a.Ba.eL(c):0;}
function TZ(){var a=this;Q.call(a);a.EI=null;a.zL=null;a.JE=null;}
function Bbo(a,b,c){var d=new TZ();A41(d,a,b,c);return d;}
function A41(a,b,c,d){a.JE=b;a.EI=c;a.zL=d;Be(a);}
function AVd(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.b5^a.EI.eL(c):0;return a.zL.p(b)&&!d?1:0;}
var C8=D(Bx);
var Bmq=null;var Bmr=null;var Bms=null;var Bmt=null;var Bmu=null;var Bmv=null;var BjI=null;var Bmw=null;function AYy(){AYy=N(C8);AUC();}
function FC(a,b){var c=new C8();Vf(c,a,b);return c;}
function Vf(a,b,c){AYy();Cw(a,b,c);}
function AUC(){Bmq=FC(B(105),0);Bmr=FC(B(493),1);Bms=FC(B(494),2);Bmt=FC(B(495),3);Bmu=FC(B(496),4);Bmv=FC(B(497),5);BjI=FC(B(498),6);Bmw=H(C8,[Bmq,Bmr,Bms,Bmt,Bmu,Bmv,BjI]);}
var ABh=D(T);
function Bb2(){var a=new ABh();AWp(a);return a;}
function AWp(a){Bo(a);}
function A4V(a){var b;b=Bb9(a);b.be=1;return b;}
var Ot=D(0);
var W2=D(Ef);
function BcC(a,b,c,d){var e=new W2();A39(e,a,b,c,d);return e;}
function A39(a,b,c,d,e){K1(a,b,c,d,e);}
function A7z(a,b,c,d){var e,f,g,h;e=a.gg.jd();f=a.gg.iJ();g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.bv.cg()|0)>d.J())break a;h=a.bv.bH(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.k.e(b,c,d);}if((b+a.bv.cg()|0)>d.J()){d.d5=1;return (-1);}h=a.bv.bH(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function Rc(){Im.call(this);this.Cx=null;}
function Bc0(a){var b=new Rc();AEC(b,a);return b;}
function AEC(a,b){var c,d,e,f;Ze(a);c=AZp();d=c.pg();e=A94();f=d.getElementById($rt_ustr(b));a.Cx=BaF(e,f);T1(new OH);}
function AVe(a){return a.Cx;}
var Lg=D(0);
var Ll=D(0);
function X0(){var a=this;C.call(a);a.kE=0;a.f_=null;a.h1=null;a.x7=0;a.sC=0;a.v9=0.0;a.sA=0;a.r_=0;a.iX=0;}
function BaS(){var a=new X0();ASw(a);return a;}
function Bmx(a,b){var c=new X0();AAr(c,a,b);return c;}
function ASw(a){AAr(a,51,0.800000011920929);}
function AAr(a,b,c){var d;J(a);if(c>0.0&&c<1.0){a.v9=c;d=G3(b,c);a.sA=d*c|0;a.iX=d-1|0;a.r_=CW(O(a.iX));a.f_=Bc(d);a.h1=Bc(d);return;}G(W((((I()).a(B(40))).cD(c)).b()));}
function AOq(a,b){return Cp(CN(Cf(O(b),Cd(2135587861, 2654435769)),a.r_));}
function Nb(a,b){var c,d,e;c=a.f_;d=a.e8(b);while(true){e=c.data[d];if(!e)return  -(d+1|0)|0;if(e==b)break;d=(d+1|0)&a.iX;}return d;}
function AHV(a,b,c){var d,e;if(!b){a.x7=c;if(!a.sC){a.sC=1;a.kE=a.kE+1|0;}return;}d=Nb(a,b);if(d>=0){a.h1.data[d]=c;return;}e= -(d+1|0)|0;a.f_.data[e]=b;a.h1.data[e]=c;e=a.kE+1|0;a.kE=e;if(e>=a.sA)RY(a,a.f_.data.length<<1);}
function Qv(a,b,c){var d,e,f;d=a.f_;e=a.e8(b);while(true){f=d.data;if(!f[e])break;e=(e+1|0)&a.iX;}f[e]=b;a.h1.data[e]=c;}
function ALP(a,b,c){var d;if(!b){if(a.sC)c=a.x7;return c;}d=Nb(a,b);if(d>=0)c=a.h1.data[d];return c;}
function RY(a,b){var c,d,e,f,g;a:{c=a.f_.data.length;a.sA=b*a.v9|0;a.iX=b-1|0;a.r_=CW(O(a.iX));d=a.f_;e=a.h1;a.f_=Bc(b);a.h1=Bc(b);if(a.kE>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g)Qv(a,g,e.data[f]);f=f+1|0;}}}}
function XG(){Q.call(this);this.Qc=null;}
function BcT(a){var b=new XG();AS0(b,a);return b;}
function AS0(a,b){a.Qc=b;Be(a);}
function A3O(a,b){return J1(b);}
function PQ(){var a=this;Q.call(a);a.oY=null;a.Ly=null;}
function Bd5(a,b){var c=new PQ();AS9(c,a,b);return c;}
function AS9(a,b,c){a.Ly=b;a.oY=c;Be(a);}
function AL6(a,b){return a.bD^a.oY.eL(b);}
function A0H(a){var b,c;b=I();c=a.oY.lc(0);while(c>=0){b.q1(Eu(c));b.U(124);c=a.oY.lc(c+1|0);}if(b.i()>0)b.Fa(b.i()-1|0);return b.b();}
var Vg=D(CI);
function Bcm(a,b,c){var d=new Vg();ARk(d,a,b,c);return d;}
function ARk(a,b,c,d){Fd(a,b,c,d);JF();b.Q(Bik);}
function AYm(a,b,c,d){var e;while(true){e=a.Y.e(b,c,d);if(e<=0)break;b=e;}return a.k.e(b,c,d);}
function T6(){var a=this;C.call(a);a.JW=0;a.J$=Ba;a.sy=null;a.D1=null;a.BO=Ba;a.xB=null;}
function Bec(a,b,c,d){var e=new T6();ADq(e,a,b,c,d);return e;}
function ADq(a,b,c,d,e){J(a);a.sy=b;a.D1=c;a.BO=d;a.xB=e;}
function CY(){BH.call(this);this.dX=null;}
var Bmy=Ba;var Bmz=Ba;var BmA=Ba;var BmB=Ba;var BmC=Ba;var BmD=Ba;var BmE=Ba;var BmF=Ba;function Ce(){Ce=N(CY);A1V();}
function BmG(a){var b=new CY();Jk(b,a);return b;}
function BmH(a,b){var c=new CY();JQ(c,a,b);return c;}
function A0j(a,b,c,d,e){var f=new CY();NG(f,a,b,c,d,e);return f;}
function Bc1(a){var b=new CY();Z7(b,a);return b;}
function UM(b){Ce();return Z(Br(b,BmF),Ba)?0:1;}
function KZ(b,c,d,e){Ce();return A0j(Bmy,b,c,d,e);}
function Zx(b,c,d,e){Ce();return A0j(Bmz,b,c,d,e);}
function Jk(a,b){Ce();Fb(a,b);a.dX=D2();if(UM(b))return;G(U(B(499)));}
function JQ(a,b,c){Ce();Jk(a,b);if(c!==null)a.dX.eR(c);}
function NG(a,b,c,d,e,f){Ce();Jk(a,b);a.dX.hV(c,d,e,f);}
function Z7(a,b){Ce();JQ(a,b.dc,b.dX);}
function AJu(a){return Bc1(a);}
function ASG(a){var b,c;b=F2(a);c=(953*b|0)+a.dX.r2()|0;return c;}
function A1V(){Bmy=BR(B(500));Bmz=BR(B(501));BmA=BR(B(502));BmB=BR(B(503));BmC=BR(B(504));BmD=BR(B(505));BmE=BR(B(506));BmF=BQ(BQ(BQ(BQ(BQ(BQ(BmA,Bmy),Bmz),BmB),BmC),BmD),BmE);}
function Hg(){var a=this;V.call(a);a.ia=null;a.DK=0;a.zs=0;}
var BmI=null;var BmJ=null;function PA(){PA=N(Hg);A4c();}
function Bfm(a,b){var c=new Hg();Qj(c,a,b);return c;}
function Qj(a,b,c){PA();BM(a);a.ia=APj();a.DK=b;a.zs=c;}
function A4s(a,b,c,d,e){var f,g,h,i,j,k;if(d.cw===null){f=b.bh;g=B1(b,c);PA();f.z_(g,BmI,0,BmI.data.length);}else{h=d.dy;PA();h.uA(BmJ);Ce();if(Ct(e,BmD))a.ia.Iz((BA(e,BmD)).dX);a:{JD();if(Ct(e,Bl1)){i=Bl1;j=(BA(e,i)).hl;k=a.DK;while(true){if(k>=j.h)break a;a.ia.Qm((j.l(k)).bk,(j.l(k)).fd);k=k+1|0;}}}b:{A3P();if(Ct(e,Blj)){j=(BA(e,Blj)).Ec;k=a.zs;while(true){if(k>=j.h)break b;a.ia.Mu((j.l(k)).bk,(j.l(k)).eD,BmJ,(j.l(k)).dx);k=k+1|0;}}}a.ia.Ni();b.bh.z_(B1(b,c),a.ia.cf,0,a.ia.cf.data.length);}}
function A4c(){BmI=BcO([1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0]);BmJ=S();}
function NY(){var a=this;C.call(a);a.hz=null;a.Cp=0;a.sT=null;a.o2=null;a.zT=0;a.G1=0.0;a.G0=0.0;a.vh=null;a.Hi=0.0;a.dw=null;a.dF=null;a.cL=null;a.s7=null;}
var BmK=null;function BeL(){BeL=N(NY);AMo();}
function BfL(a,b){var c=new NY();ACi(c,a,b);return c;}
function ACi(a,b,c){var d,e,f;BeL();J(a);a.sT=Bp();a.o2=Bp();a.vh=CP(1.0,1.0,1.0,1.0);a.hz=b;a.Cp=c;d=b.gI.h;if(!d)G(W(B(507)));a:{a.dw=Y($rt_arraycls($rt_floatcls()),d);a.dF=Bc(d);if(d>1){a.cL=Y(GV,d);e=0;f=a.cL.data.length;while(true){if(e>=f)break a;a.cL.data[e]=G$();e=e+1|0;}}}a.s7=Bc(d);}
function A5$(a){return a.vh;}
function AHM(a,b){var c,d,e,f;c=a.hz.Ou();d=0;e=a.dw.data.length;while(d<e){if(a.dF.data[d]>0){f=a.dw.data[d];b.Hu((c.l(d)).Bb(),f,0,a.dF.data[d]);}d=d+1|0;}}
function A5h(a){var b,c;a.G1=0.0;a.G0=0.0;Sq(a.o2,1);a.o2.K();a.sT.K();b=0;c=a.dF.data.length;while(b<c){if(a.cL!==null)a.cL.data[b].K();a.dF.data[b]=0;b=b+1|0;}}
function V4(a,b){var c,d,e,f,g,h,i,j,k,l;a:{if(a.dw.data.length==1){c=0;d=0;e=b.cn.h;while(d<e){c=c+(b.cn.l(d)).bi.h|0;d=d+1|0;}NS(a,0,c);}else{f=a.s7;g=f.data;d=0;e=g.length;while(d<e){g[d]=0;d=d+1|0;}d=0;h=b.cn.h;while(d<h){i=(b.cn.l(d)).bi;j=0;k=i.h;while(j<k){l=(i.l(j)).jX;g[l]=g[l]+1|0;j=j+1|0;}d=d+1|0;}d=0;while(true){if(d>=e)break a;NS(a,d,g[d]);d=d+1|0;}}}}
function NS(a,b,c){var d,e,f;if(a.cL!==null&&c>a.cL.data[b].cp.data.length)a.cL.data[b].Pc(c-a.cL.data[b].bS|0);d=a.dF.data[b]+(c*20|0)|0;e=a.dw.data[b];if(e===null)a.dw.data[b]=Ca(d);else if(e.data.length<d){f=Ca(d);X(e,0,f,0,a.dF.data[b]);a.dw.data[b]=f;}}
function Sd(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=a.hz.gI.h;if(a.dw.data.length<e){f=Y($rt_arraycls($rt_floatcls()),e);X(a.dw,0,f,0,a.dw.data.length);a.dw=f;g=Bc(e);X(a.dF,0,g,0,a.dF.data.length);a.dF=g;h=Y(GV,e);i=0;if(a.cL!==null){i=a.cL.data.length;X(a.cL,0,h,0,a.cL.data.length);}while(i<e){h.data[i]=G$();i=i+1|0;}a.cL=h;a.s7=Bc(e);}a.sT.F(b);V4(a,b);i=0;j=b.cn.h;while(i<j){k=b.cn.l(i);l=k.bi;m=k.bn;n=k.j2.ny();o=c+k.dh;p=d+k.iL;q=0;r=l.h;while(q<r){s=l.l(q);o=o+m.oa(q);Tu(a,s,o,p,n);q=q+1|0;}i=i+
1|0;}Bv();a.Hi=BkA;}
function Tu(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;f=a.hz.kh.eQ;g=a.hz.kh.Aa;h=c+b.dr*f;i=d+b.jg*g;j=b.cv*f;k=b.cN*g;l=b.vH;m=b.Bp;n=b.p$;o=b.tm;if(a.Cp){h=Dg(h);i=Dg(i);j=Dg(j);k=Dg(k);}p=h+j;q=i+k;r=b.jX;s=a.dF.data[r];t=a.dF.data;t[r]=t[r]+20|0;if(a.cL!==null){u=a.cL.data[r];v=a.zT;a.zT=v+1|0;u.iY(v);}w=a.dw.data[r];t=w.data;x=s+1|0;t[s]=h;v=x+1|0;t[x]=i;x=v+1|0;t[v]=e;v=x+1|0;t[x]=l;y=v+1|0;t[v]=n;x=y+1|0;t[y]=h;v=x+1|0;t[x]=q;x=v+1|0;t[v]=e;v=x+1|0;t[x]=l;x=v+1|0;t[v]=o;v=x+1|0;t[x]=p;x
=v+1|0;t[v]=q;v=x+1|0;t[x]=e;x=v+1|0;t[v]=m;v=x+1|0;t[x]=o;x=v+1|0;t[v]=p;y=x+1|0;t[x]=i;v=y+1|0;t[y]=e;x=v+1|0;t[v]=m;t[x]=n;}
function AUb(a,b,c,d){return a.Ir(b,c,d,0,b.i(),0.0,8,0,null);}
function A_a(a,b,c,d,e,f,g,h,i,j){var k;k=Tp(F(EI));a.o2.F(k);k.pJ(a.hz,b,e,f,a.vh,g,h,i,j);a.HU(k,c,d);return k;}
function AGC(a,b,c,d){Sd(a,b,c,d+a.hz.kh.l5);}
function AMo(){BmK=CP(1.0,1.0,1.0,1.0);}
function PN(){var a=this;Q.call(a);a.Cf=null;a.Hh=null;}
function BeV(a,b){var c=new PN();A7f(c,a,b);return c;}
function A7f(a,b,c){a.Hh=b;a.Cf=c;Be(a);}
function AGK(a,b){return a.Cf.p(b);}
function PO(){var a=this;Q.call(a);a.xa=null;a.Qy=null;}
function Bfc(a,b){var c=new PO();AM_(c,a,b);return c;}
function AM_(a,b,c){a.Qy=b;a.xa=c;Be(a);}
function A0n(a,b){return a.xa.p(b)?0:1;}
function PP(){var a=this;Q.call(a);a.y4=0;a.EU=null;a.zO=null;a.Gj=null;}
function Bco(a,b,c,d){var e=new PP();AGV(e,a,b,c,d);return e;}
function AGV(a,b,c,d,e){a.Gj=b;a.y4=c;a.EU=d;a.zO=e;Be(a);}
function A_O(a,b){return !(a.y4^a.EU.p(b))&&!a.zO.p(b)?0:1;}
var YK=D();
function Wx(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.Bs.data;f=b.CN;b.CN=f+1|0;g=A5q(e[f]);h=(g%2|0)!=1?0:1;c=c+Cg(d,g/2|0)|0;d=d*46|0;if(!h)break;}return c;}
function Pd(b){var c,d;c=Wx(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function A5q(b){if(b<34)return b-32|0;if(b>=92)return (b-32|0)-2|0;return (b-32|0)-1|0;}
function P8(){var a=this;Q.call(a);a.E8=0;a.vM=null;a.vY=null;a.G8=null;}
function Bgq(a,b,c,d){var e=new P8();A0h(e,a,b,c,d);return e;}
function A0h(a,b,c,d,e){a.G8=b;a.E8=c;a.vM=d;a.vY=e;Be(a);}
function AJv(a,b){return !(a.E8^a.vM.p(b))&&!a.vY.p(b)?1:0;}
function PR(){var a=this;Q.call(a);a.Em=0;a.A$=null;a.xU=null;a.Mg=null;}
function Bgm(a,b,c,d){var e=new PR();AZc(e,a,b,c,d);return e;}
function AZc(a,b,c,d,e){a.Mg=b;a.Em=c;a.A$=d;a.xU=e;Be(a);}
function AW7(a,b){return a.Em^a.A$.p(b)&&a.xU.p(b)?1:0;}
function OO(){BJ.call(this);this.md=null;}
function Bgn(a){var b=new OO();A8O(b,a);return b;}
function A8O(a,b){var c,d;C2(a);c=I();d=0;while(d<b.i()){c.U(Dq(DB(b.f(d))));d=d+1|0;}a.md=c.b();a.bO=c.i();}
function AMA(a,b,c){var d;d=0;while(true){if(d>=a.md.i())return a.md.i();if(a.md.f(d)!=Dq(DB(c.f(b+d|0))))break;d=d+1|0;}return (-1);}
function AKe(a){return (((I()).a(B(508))).a(a.md)).b();}
function PS(){var a=this;Q.call(a);a.DY=0;a.AJ=null;a.Ej=null;a.MQ=null;}
function Bci(a,b,c,d){var e=new PS();AD0(e,a,b,c,d);return e;}
function AD0(a,b,c,d,e){a.MQ=b;a.DY=c;a.AJ=d;a.Ej=e;Be(a);}
function AO_(a,b){return a.DY^a.AJ.p(b)&&a.Ej.p(b)?0:1;}
function PT(){var a=this;Q.call(a);a.Fi=null;a.yu=0;a.FT=null;}
function Baf(a,b,c){var d=new PT();AOc(d,a,b,c);return d;}
function AOc(a,b,c,d){a.FT=b;a.Fi=c;a.yu=d;Be(a);}
function AK7(a,b){return a.Fi.p(b)&&a.yu^a.FT.bc.eL(b)?1:0;}
function Ug(){Q.call(this);this.Kl=null;}
function Bgj(a){var b=new Ug();AUs(b,a);return b;}
function AUs(a,b){a.Kl=b;Be(a);}
function AKV(a,b){return RM(b);}
function Hz(){DP.call(this);this.fd=null;}
function AJI(){var a=new Hz();A16(a);return a;}
function A16(a){HV(a);a.fd=S();}
function AEG(a,b){return a.OP(b.bk,b.fd);}
function AGk(a,b,c){if(b!==null)a.bk.eR(b);if(c!==null)(a.fd.M(c)).bU();return a;}
function AP7(a,b,c,d,e,f,g){a.bk.hV(b,c,d,1.0);(a.fd.I(e,f,g)).bU();return a;}
function AEs(a,b){return b instanceof Hz&&a.EF(b)?1:0;}
function A4$(a,b){var c;a:{b:{if(b!==null){if(b===a)break b;if(a.bk.z(b.bk)&&a.fd.z(b.fd))break b;}c=0;break a;}c=1;}return c;}
function PM(){var a=this;Q.call(a);a.D7=null;a.C4=0;a.ys=null;}
function Bgl(a,b,c){var d=new PM();A3D(d,a,b,c);return d;}
function A3D(a,b,c,d){a.ys=b;a.D7=c;a.C4=d;Be(a);}
function A8I(a,b){return a.D7.p(b)&&a.C4^a.ys.bc.eL(b)?0:1;}
var Z6=D(CO);
var LH=D();
var BmL=null;function ACA(){ACA=N(LH);AD6();}
function Zv(b,c,d,e){var f;ACA();a:{b:{f=BmL;RT();if(f===BmM){if(Bim.bo()!=Bim.xc())break b;f=Bim;if(f.bl()!=Bim.EK())break b;}Bip.oK(b,c,d,e);break a;}Bip.oK(L_(b),Mc(c),L_(d),Mc(e));}}
function L_(b){ACA();return Cg(b,Bim.xc())/Bim.bo()|0;}
function Mc(b){ACA();return Cg(b,Bim.EK())/Bim.bl()|0;}
function AD6(){RT();BmL=BmM;}
var ZG=D(ES);
function Gf(a){var b=new ZG();ALi(b,a);return b;}
function I(){var a=new ZG();A$r(a);return a;}
function ALi(a,b){JT(a,b);}
function A$r(a){J7(a);}
function A34(a,b){Y4(a,b);return a;}
function ADJ(a,b){Lk(a,b);return a;}
function ANE(a,b){PH(a,b);return a;}
function A0R(a,b){ACg(a,b);return a;}
function AJF(a,b){TM(a,b);return a;}
function ADx(a,b){Nc(a,b);return a;}
function AGX(a,b,c,d){Or(a,b,c,d);return a;}
function A70(a,b){NE(a,b);return a;}
function AWM(a,b){Th(a,b);return a;}
function AZ5(a,b,c){RN(a,b,c);return a;}
function A8l(a,b,c){Z5(a,b,c);return a;}
function A6N(a,b,c,d,e){Mq(a,b,c,d,e);return a;}
function A$R(a,b,c){QI(a,b,c);return a;}
function A4E(a,b,c){OI(a,b,c);return a;}
function AN$(a,b,c){Ox(a,b,c);return a;}
function ASu(a,b,c){ACf(a,b,c);return a;}
function ARa(a,b){AB0(a,b);return a;}
function A2F(a,b,c){NX(a,b,c);return a;}
function A9W(a,b,c){return Xc(a,b,c);}
function A2L(a,b){ABM(a,b);}
function AH8(a,b,c,d,e){Yt(a,b,c,d,e);}
function A6V(a,b,c){return AA$(a,b,c);}
function A2x(a,b,c,d,e){return a.Lk(b,c,d,e);}
function AHA(a,b,c,d){return a.I5(b,c,d);}
function AWT(a){return M4(a);}
function AFL(a){return Nw(a);}
function ALQ(a,b){Mz(a,b);}
function ALZ(a,b,c){return a.Gr(b,c);}
function A31(a,b,c){return a.OS(b,c);}
function A3r(a,b,c){return a.KY(b,c);}
function A04(a,b,c){return a.P$(b,c);}
function AGi(a,b,c){return a.J_(b,c);}
function AT7(a,b,c){return a.GA(b,c);}
function QW(){var a=this;BB.call(a);a.og=null;a.py=null;}
function Lr(a,b){var c=new QW();ATl(c,a,b);return c;}
function ATl(a,b,c){CQ(a);a.og=b;a.py=c;}
function AEQ(a,b,c,d){var e;e=a.og.e(b,c,d);if(e<0)e=a.py.e(b,c,d);if(e>=0)return e;return (-1);}
function A5t(a,b){a.k=b;a.py.Q(b);a.og.Q(b);}
function A6a(a){return (((((I()).a(B(509))).dD(a.og)).a(B(510))).dD(a.py)).b();}
function AFT(a,b){return 1;}
function AFp(a,b){return 1;}
var ABQ=D(Bm);
function Bak(){var a=new ABQ();ATQ(a);return a;}
function ATQ(a){Cx(a);}
var O$=D();
function Bfk(){var a=new O$();ALK(a);return a;}
function ALK(a){J(a);}
var Gt=D(0);
var O9=D();
function Bbd(){var a=new O9();AXk(a);return a;}
function AXk(a){J(a);}
var Me=D(0);
function EU(){var a=this;C.call(a);a.hJ=null;a.hb=null;}
function BmN(a,b){var c=new EU();L7(c,a,b);return c;}
function L7(a,b,c){J(a);a.hJ=b;a.hb=c;}
function MS(){var a=this;EU.call(a);a.pD=null;a.yE=0;}
function Be_(a,b){var c=new MS();AO6(c,a,b);return c;}
function AO6(a,b,c){L7(a,b,c);a.yE=b.bp();}
function AE_(a){return a.hJ.bp();}
function ARX(a,b,c){return a.yE==b.bp()&&a.hJ.z(b)?1:0;}
var EZ=D(Cy);
function Beh(){var a=new EZ();A8P(a);return a;}
function A8P(a){Et(a,0);}
function ASg(a,b,c,d){if(d.Cw()!=1&&b!=d.J())return (-1);d.LV();d.u2(0,b);return b;}
function AXy(a){return B(511);}
function AAe(){var a=this;C.call(a);a.sm=null;a.iO=null;a.kk=null;a.ey=null;a.g$=null;a.lP=null;}
function BfM(a){var b=new AAe();A2X(b,a);return b;}
function A2X(a,b){J(a);a.sm=DG();a.iO=DG();a.kk=DG();a.ey=DG();a.g$=DG();a.lP=b;}
function A0x(a,b){(CD()).D8(1,(((I()).a(a.lP)).a(b)).b(),A_2(a,b));}
function A1O(a,b,c,d){var e,f;e=CD();f=(((I()).a(a.lP)).a(c)).b();H3();e.v5(b,f,Bj2,null,BbR(a,d,c));}
function AVQ(a,b,c,d,e,f){(CD()).v5(b,(((I()).a(a.lP)).a(c)).b(),d,e,BcK(a,f,d,c));}
function A79(a,b,c){(CD()).kn((((I()).a(a.lP)).a(b)).b(),c);}
function AYJ(a,b,c,d){a:{Bd3();switch(Bj5.data[BC(b)]){case 1:a.ey.x(c,d);break a;case 2:break;case 3:a.g$.x(c,d);break a;case 4:a.kk.x(c,d);break a;case 5:a.sm.x(c,null);break a;default:break a;}a.iO.x(c,d);}}
function AM7(a,b){var c,$$je;if(a.ey.c0(b)){a:{try{c=XC((a.ey.W(b)).x6(B(381)));}catch($$e){$$je=R($$e);if($$je instanceof GK){break a;}else{throw $$e;}}return c;}return null;}if(a.iO.c0(b))return XC(Cj(1));if(a.g$.c0(b))return PZ(a.g$.W(b));if(!a.kk.c0(b))return null;return XC(Cj(1));}
function AJx(a,b){var c,d;a:{if(!a.ey.c0(b)&&!a.iO.c0(b)&&!a.g$.c0(b)&&!a.kk.c0(b)){c=a.sm;if(!c.c0(b)){d=0;break a;}}d=1;}return d;}
function A62(a,b){return a.ey.c0(b);}
function AXe(a,b){var c,$$je;if(a.ey.c0(b)){a:{try{c=O(((a.ey.W(b)).x6(B(381))).data.length);}catch($$e){$$je=R($$e);if($$je instanceof GK){break a;}else{throw $$e;}}return c;}return O(((a.ey.W(b)).QQ()).data.length);}if(a.iO.c0(b))return O(1);if(a.g$.c0(b))return O(N9(a.g$.W(b)));if(!a.kk.c0(b))return Ba;return O(1);}
var TP=D(BJ);
function FG(a){var b=new TP();A3X(b,a);return b;}
function A3X(a,b){VR(a,b);a.bO=0;}
function A7M(a,b,c){return 0;}
function AZZ(a,b,c,d){var e,f,g,h,i;e=d.J();f=d.dI();while(true){g=B9(b,e);if(g>0)return (-1);if(g<0){h=c.f(b);if(BG(h)&&b>f){i=c.f(b-1|0);if(BY(i)){b=b+1|0;continue;}}}if(a.k.e(b,c,d)>=0)break;b=b+1|0;}return b;}
function AX2(a,b,c,d,e){var f,g,h,i;f=e.J();g=e.dI();while(true){if(c<b)return (-1);if(c<f){h=d.f(c);if(BG(h)&&c>g){i=d.f(c-1|0);if(BY(i)){c=c+(-1)|0;continue;}}}if(a.k.e(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AJ2(a){return B(512);}
function AVF(a,b){return 0;}
function J3(){BH.call(this);this.Ia=0;}
var BmO=Ba;function AGI(){AGI=N(J3);A8L();}
function A8L(){BmO=BR(B(513));}
function Vp(){var a=this;C.call(a);a.dv=null;a.gB=null;a.sw=0;a.bT=0;}
function T7(a,b){var c=new Vp();A9k(c,a,b);return c;}
function BmP(a,b,c){var d=new Vp();UE(d,a,b,c);return d;}
function A9k(a,b,c){UE(a,b,c,0);}
function UE(a,b,c,d){J(a);if(b===null)G(IJ());a.dv=b;a.gB=c;a.sw=d;a.bT=0;}
function A_F(a){var b,c;if(a.gB===null)G(IJ());a:{b=a.dv.i();if(a.bT<b){if(a.sw)return 1;c=a.bT;while(true){if(c>=b)break a;if(a.gB.eH(a.dv.f(c),0)==(-1))return 1;c=c+1|0;}}}return 0;}
function AFa(a){var b,c,d,e,f;if(a.gB===null)G(IJ());b=a.bT;c=a.dv.i();if(b<c){if(a.sw){if(a.gB.eH(a.dv.f(a.bT),0)>=0){d=a.dv;e=a.bT;a.bT=e+1|0;return Zp(d.f(e));}a.bT=a.bT+1|0;while(a.bT<c){if(a.gB.eH(a.dv.f(a.bT),0)>=0)return a.dv.ce(b,a.bT);a.bT=a.bT+1|0;}return a.dv.ei(b);}while(true){f=B9(b,c);if(f>=0)break;if(a.gB.eH(a.dv.f(b),0)<0)break;b=b+1|0;}a.bT=b;if(f<0){a.bT=a.bT+1|0;while(a.bT<c){if(a.gB.eH(a.dv.f(a.bT),0)>=0)return a.dv.ce(b,a.bT);a.bT=a.bT+1|0;}return a.dv.ei(b);}}G(Baz());}
function Ka(){var a=this;C.call(a);a.dg=null;a.cQ=0;a.m5=Ba;}
function A0X(a){var b=new Ka();A3V(b,a);return b;}
function A3V(a,b){var c,d,e,f;c=b.data;J(a);a.m5=O(-1);d=c.length;if(!d)G(W(B(514)));e=Y(Fc,d);f=0;while(f<d){e.data[f]=c[f];f=f+1|0;}a.dg=e;a.cQ=V7(a);}
function DZ(a,b){var c,d;c=CU(a);d=0;while(d<c){if((CB(a,d)).fn==b)return CB(a,d);d=d+1|0;}return null;}
function V7(a){var b,c,d;b=0;c=0;while(c<a.dg.data.length){d=a.dg.data[c];d.cU=b;b=b+QD(d)|0;c=c+1|0;}return b;}
function CU(a){return a.dg.data.length;}
function CB(a,b){return a.dg.data[b];}
function NW(a,b){var c,d;if(b===a)return 1;if(!(b instanceof Ka))return 0;c=b;if(a.dg.data.length!=c.dg.data.length)return 0;d=0;while(d<a.dg.data.length){if(!KI(a.dg.data[d],c.dg.data[d]))return 0;d=d+1|0;}return 1;}
function IM(a){var b,c;if(Z(a.m5,O(-1))){b=Ba;c=0;while(c<a.dg.data.length){b=BQ(b,O(a.dg.data[c].fn));c=c+1|0;}a.m5=b;}return a.m5;}
function NR(a){return BQ(IM(a),D8(O(a.dg.data.length),32));}
function KC(){var a=this;G5.call(a);a.N1=0.0;a.NZ=0.0;a.OX=0;a.MP=0;}
function ACM(){var a=this;C.call(a);a.kO=null;a.sO=null;a.fq=null;a.ou=null;a.rI=0;a.DO=null;a.v3=null;}
function BmQ(a,b,c){var d=new ACM();TR(d,a,b,c);return d;}
function Bfd(){var a=new ACM();A$H(a);return a;}
function TR(a,b,c,d){J(a);a.sO=BdL();a.fq=Bp();if(d===null)d=A_4();a.v3=d;a.rI=b!==null?0:1;if(b===null)b=BdH(BcB(1,1));a.ou=b;if(c===null)c=Bfb();a.DO=c;}
function A$H(a){TR(a,null,null,null);}
function A4l(a,b){if(a.kO!==null)G(U(B(515)));a.kO=b;if(a.rI)a.ou.g6();}
function A1I(a){var b,c,d;a.v3.Hp(a.kO,a.fq);b=null;c=0;while(c<a.fq.h){d=a.fq.l(c);if(b!==d.kP){if(b!==null)b.bd();b=d.kP;b.C$(a.kO,a.ou);}b.NX(d);c=c+1|0;}if(b!==null)b.bd();a.sO.eo();a.fq.K();}
function A7I(a){a.eo();if(a.rI)a.ou.bd();a.kO=null;}
function ARs(a,b,c){var d,e;d=a.fq.h;b.IA(a.fq,a.sO);while(d<a.fq.h){e=a.fq.l(d);e.cw=c;e.kP=a.DO.J1(e);d=d+1|0;}}
var Re=D(ER);
function A_W(a,b,c,d,e,f){var g=new Re();AVs(g,a,b,c,d,e,f);return g;}
function AVs(a,b,c,d,e,f,g){LQ(a,b,c,d,e,f,g);}
function AUP(a,b){var c,d,e,f;c=a.cx.A.data;d=a.cj;e=b*4|0;f=c[d+e|0]&255|(a.cx.A.data[(a.cj+e|0)+1|0]&255)<<8|(a.cx.A.data[(a.cj+e|0)+2|0]&255)<<16|(a.cx.A.data[(a.cj+e|0)+3|0]&255)<<24;return $rt_intBitsToFloat(f);}
function A2R(a,b,c){var d,e,f,g;d=$rt_floatToIntBits(c);e=a.cx.A.data;f=a.cj;g=b*4|0;e[f+g|0]=d<<24>>24;a.cx.A.data[(a.cj+g|0)+1|0]=d>>8<<24>>24;a.cx.A.data[(a.cj+g|0)+2|0]=d>>16<<24>>24;a.cx.A.data[(a.cj+g|0)+3|0]=d>>24<<24>>24;}
function VO(){var a=this;C.call(a);a.CS=null;a.eY=null;a.uR=null;a.kX=null;a.uY=0.0;a.rC=Ba;a.s1=Ba;a.oT=0.0;a.kJ=0.0;a.pl=0;a.gf=null;}
function BaC(a){var b=new VO();AUD(b,a);return b;}
function AUD(a,b){var c;J(a);a.uY=0.0;a.rC=Ea();a.s1=O(-1);a.oT=0.0;a.kJ=0.0;c=El();a.uR=b;a.eY=c.ET();a.CS=c.Og(b);a.gf=c.Md();a.kX=BdU(a.CS);a.kX.oK(0,0,a.eY.width,a.eY.height);a.kX.wa(0.0,0.0,0.0,1.0);a.kX.EE(16384);if(!(b.qZ<0&&b.qD<0))a.wG(b.qZ,b.qD);}
function AUh(a){var b;b=Ea();a.oT=Ry(D6(b,a.rC))/1000.0;a.rC=b;a.kJ=a.kJ+a.oT;a.pl=a.pl+1|0;if(a.kJ>1.0){a.uY=a.pl;a.kJ=0.0;a.pl=0;}}
function ASL(a){return a.kX;}
function AL_(a){return a.eY.width;}
function AQZ(a){return a.eY.height;}
function A5Q(a){return a.eY.width;}
function A49(a){return a.eY.height;}
function A_g(a){return a.oT;}
function AU8(a){return a.uY|0;}
function AWk(a){var b;b=!a.uR.Bf?1.0:a.gf.wH();return Bcn(a,a.gf.Gh()*b|0,a.gf.QF()*b|0,60,8);}
function AHg(a,b){var c;c=a.FC();if(b.o1!=c.o1&&b.n0!=c.n0)return 0;return a.gf.QK(a,a.eY,b.o1,b.n0);}
function ALy(a,b,c){var d,e,f;if(a.vR())a.gf.PZ();if(b>0&&c>0)a.x$(b,c);else{d=(El()).hu();e=d.Q4();f=d.Lh();a.x$(e,f);}return 1;}
function AFO(a,b,c){var d,e,f;d=!a.uR.Bf?1.0:a.gf.wH();e=a.eY;f=b*d|0;e.width=f;e=a.eY;f=c*d|0;e.height=f;}
function AEe(a,b){return 0;}
function A3c(a){return a.gf.NH();}
var Yu=D(FL);
function BmR(a){var b=new Yu();AGp(b,a);return b;}
function AGp(a,b){KG(a,b);}
var TC=D(T);
function BfH(){var a=new TC();AFd(a);return a;}
function AFd(a){Bo(a);}
function AH$(a){return (CS()).bF(0,127);}
function EI(){var a=this;C.call(a);a.cn=null;a.pI=0.0;a.nA=0.0;}
var BmS=null;var BmT=null;var BmU=null;function DI(){DI=N(EI);AYK();}
function BmV(){var a=new EI();ACj(a);return a;}
function BmW(a,b){var c=new EI();PJ(c,a,b);return c;}
function BmX(a,b,c,d,e,f){var g=new EI();S$(g,a,b,c,d,e,f);return g;}
function BmY(a,b,c,d,e,f,g,h,i){var j=new EI();AA4(j,a,b,c,d,e,f,g,h,i);return j;}
function ACj(a){DI();J(a);a.cn=DL(1);}
function PJ(a,b,c){DI();J(a);a.cn=DL(1);a.Mz(b,c);}
function S$(a,b,c,d,e,f,g){DI();J(a);a.cn=DL(1);a.O5(b,c,d,e,f,g);}
function AA4(a,b,c,d,e,f,g,h,i,j){DI();J(a);a.cn=DL(1);a.pJ(b,c,d,e,f,g,h,i,j);}
function A7H(a,b,c){a.pJ(b,c,0,c.i(),b.yP(),0.0,8,0,null);}
function A3B(a,b,c,d,e,f,g){a.pJ(b,c,0,c.i(),d,e,f,g,null);}
function AG4(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by;k=a.cn;DI();BmS.Eg(k);k.K();l=b.kh;if(d==e){a.pI=0.0;a.nA=l.e6;return;}if(j!==null)i=1;else if(g<=l.vv*3.0)i=0;m=l.Dv;if(m){n=1;o=BmU.h;while(n<o){BmT.jr(BmU.l(n));n=n+1|0;}BmU.K();BmU.F(f);}p=0.0;q=0.0;r=l.kj;s=null;t=d;u=f;a:{b:while(true){c:{v=(-1);w=0;if(d==e){if(t==e)break b;v=e;}else{x=d+1|0;switch(c.f(d)){case 10:v=x-1|0;w=1;d=x;break c;case 91:if(!m){d=x;break c;}y
=Pz(a,c,x,e,BmT);if(y<0){if(y==(-2)){d=x+1|0;continue b;}d=x;break c;}v=x-1|0;d=x+(y+1|0)|0;f=BmU.qt();break c;default:}d=x;}}if(v!=(-1)){d:{z=B9(v,t);if(z){ba=BmS.eT();ba.j2.eR(u);l.FP(ba,c,t,v,s);if(!ba.bi.h)BmS.jr(ba);else{if(s!==null)p=p-(s.op?s.gz*l.eQ:(s.cv+s.dr|0)*l.eQ-l.hU);s=ba.bi.qt();ba.dh=p;ba.iL=q;if(!(!w&&v!=e))EP(a,l,ba);k.F(ba);o=ba.bn.Z;bb=ba.bn.R;if(i&&o){bc=bb.data;p=p+bc[0]+bc[1];n=2;while(n<o){bd=ba.bi;be=n-1|0;bf=bd.l(be);bg=(bf.cv+bf.dr|0)*l.eQ-l.hU;if(p+bg-9.999999747378752E-5<=g)p=p
+bb.data[n];else{if(j!==null){ABp(a,l,ba,g,j,n,BmS);break a;}q=q+r;s=null;bh=l.KP(ba.bi,n);if(!(!bh&&ba.dh===0.0)&&bh<ba.bi.h)be=bh;if(be){ba=QP(a,l,ba,be,n);if(ba===null){p=0.0;break d;}k.F(ba);}else{bi=ba.bi.h;e:{while(true){if(be>=bi)break e;if(!l.jt((ba.bi.l(be)).e0&65535))break;be=be+1|0;}}if(be>0){ba.bi.lX(0,be-1|0);ba.bn.lX(1,be);}bb.data[0]=( -(ba.bi.Fr()).dr|0)*l.eQ-l.i0;if(k.h>1){bj=k.l(k.h-2|0);bk=bj.bi.h-1|0;f:{while(true){if(bk<=0)break f;if(!l.jt((bj.bi.l(bk)).e0&65535))break;bk=bk+(-1)|0;}}bj.bi.h6(bk
+1|0);bj.bn.h6(bk+2|0);EP(a,l,bj);}}o=ba.bn.Z;bb=ba.bn.R;bc=bb.data;p=bc[0];if(o>1)p=p+bc[1];ba.dh=0.0;ba.iL=q;n=1;}n=n+1|0;}}else if(m){n=0;while(n<o){p=p+bb.data[n];n=n+1|0;}}}}}if(w){p=0.0;q=z?q+r:q+r*l.xp;s=null;}t=d;u=f;}}}a.nA=l.e6+CH(q);bl=0.0;bm=k.P;bn=k.h;n=0;while(n<bn){bo=bm.data[n];bb=bo.bn.R;bc=bb.data;bp=bc[0];bq=0.0;br=bo.bi.P;bs=0;bt=bo.bi.h;while(bs<bt){bf=br.data[bs];bg=(bf.cv+bf.dr|0)*l.eQ-l.hU;bq=Ei(bq,bp+bg);bs=bs+1|0;bp=bp+bc[bs];}bo.j7=Ei(bp,bq);bl=Ei(bl,bo.dh+bo.j7);n=n+1|0;}g:{a.pI=
bl;if(!(h&8)){bu=!(h&1)?0:1;bv=0.0;bw=(-2.147483648E9);bx=0;n=0;while(n<bn){bc=bm.data;bo=bc[n];if(bo.iL===bw)bv=Ei(bv,bo.dh+bo.j7);else{bw=bo.iL;by=g-bv;if(bu)by=by/2.0;while(bx<n){x=bx+1|0;bd=bc[bx];bd.dh=bd.dh+by;bx=x;}bv=bo.dh+bo.j7;}n=n+1|0;}by=g-bv;if(bu)by=by/2.0;while(true){if(bx>=bn)break g;bc=bm.data;x=bx+1|0;bd=bc[bx];bd.dh=bd.dh+by;bx=x;}}}}
function ABp(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=g.eT();b.FP(h,e,0,e.i(),null);i=0.0;if(h.bn.Z>0){EP(a,b,h);j=h.bn.R;k=1;l=h.bn.Z;while(k<l){i=i+j.data[k];k=k+1|0;}}m=d-i;n=0;o=c.dh;j=c.bn.R;a:{while(true){if(n>=c.bn.Z)break a;p=j.data[n];o=o+p;if(o>m)break;n=n+1|0;}}if(n<=1){c.bi.K();c.bn.K();c.bn.GN(h.bn);}else{c.bi.h6(n-1|0);c.bn.h6(n);EP(a,b,c);if(h.bn.Z>0)c.bn.x1(h.bn,1,h.bn.Z-1|0);}c.bi.qB(h.bi);g.jr(h);}
function QP(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=c.bi;g=c.bi.h;h=c.bn;i=d;a:{while(true){if(i<=0)break a;if(!b.jt((f.l(i-1|0)).e0&65535))break;i=i+(-1)|0;}}b:{while(true){j=B9(d,g);if(j>=0)break b;if(!b.jt((f.l(d)).e0&65535))break;d=d+1|0;}}k=null;if(j>=0){f.h6(i);h.h6(i+1|0);}else{DI();k=BmS.eT();k.j2.eR(c.j2);l=k.bi;l.JA(f,0,i);f.lX(0,d-1|0);c.bi=l;k.bi=f;m=k.bn;m.x1(h,0,i+1|0);h.lX(1,d);h.R.data[0]=( -(f.Fr()).dr|0)*b.eQ-b.i0;c.bn=m;k.bn=h;}if(i)EP(a,b,c);else{DI();BmS.jr(c);a.cn.vt();}return k;}
function EP(a,b,c){var d,e;d=c.bi.qt();if(d.op)return;e=(d.cv+d.dr|0)*b.eQ-b.hU;c.bn.R.data[c.bn.Z-1|0]=e;}
function Pz(a,b,c,d,e){var f,g,h,i,j,k,l,m;if(c==d)return (-1);switch(b.f(c)){case 35:f=0;g=c+1|0;a:{while(true){if(g>=d)break a;h=b.f(g);if(h==93)break;if(h>=48&&h<=57)f=(f*16|0)+(h-48|0)|0;else if(h>=97&&h<=102)f=(f*16|0)+(h-87|0)|0;else{if(h<65)break a;if(h>70)break a;f=(f*16|0)+(h-55|0)|0;}g=g+1|0;}if(g>=(c+2|0)&&g<=(c+9|0)){i=g-c|0;if(i<=7){j=0;k=9-i|0;while(j<k){f=f<<4;j=j+1|0;}f=f|255;}l=e.eT();DI();BmU.F(l);Id(l,f);return i;}}return (-1);case 91:break;case 93:DI();if(BmU.h>1)e.jr(BmU.vt());return 0;default:g
=c+1|0;while(g<d){h=b.f(g);if(h==93){m=Qf((b.d_(c,g)).b());if(m===null)return (-1);l=e.eT();DI();BmU.F(l);l.eR(m);return g-c|0;}g=g+1|0;}return (-1);}return (-2);}
function A8D(a){(Go(F(Hh))).Eg(a.cn);a.cn.K();a.pI=0.0;a.nA=0.0;}
function AOa(a){var b,c,d;if(!a.cn.h)return B(101);b=Gf(128);b.cD(a.pI);b.U(120);b.cD(a.nA);b.U(10);c=0;d=a.cn.h;while(c<d){b.a((a.cn.l(c)).b());b.U(10);c=c+1|0;}b.uz(b.i()-1|0);return b.b();}
function AYK(){BmS=Go(F(Hh));BmT=Go(F(Bi));BmU=DL(4);}
var ABY=D(Ej);
function AJ9(a){var b=new ABY();AEX(b,a);return b;}
function AEX(a,b){M7(a,NF(b));}
function Pt(){var a=this;EO.call(a);a.uQ=null;a.va=null;a.FD=null;a.c8=null;a.B3=null;a.en=null;a.pV=0;a.u8=0;}
function BmZ(a,b){var c=new Pt();QA(c,a,b);return c;}
function BdJ(a){var b=new Pt();ADu(b,a);return b;}
function Bm0(a,b){var c=new Pt();AAG(c,a,b);return c;}
function QA(a,b,c){var d,e;d=c.lL();Di();e=BgW;e=Od(d,e);d=BgW;e=Lf(e,d);AAG(a,b,e);}
function ADu(a,b){Hw();QA(a,b,Bkn);}
function AAG(a,b,c){Li(a);a.FD=Cj(8192);a.c8=Ht(a.FD);a.B3=BW(1024);a.en=Lb(a.B3);a.uQ=b;a.va=c;a.en.oP(BD(a.en));a.c8.f4(BD(a.c8));}
function A8A(a){a.uQ.fP();}
function AKo(a,b,c,d){var e,f;if(a.u8&&!Cb(a.en))return (-1);e=0;a:{while(d>0){f=Bq(d,Bb(a.en));a.en.rl(b,c+e|0,f);d=d-f|0;e=e+f|0;if(!Cb(a.en)&&!ACk(a))break a;}}return e;}
function ACk(a){if(a.u8)return 0;a.en.JO();a:{while(true){if(!Cb(a.c8)&&!AAL(a))break a;if(!(IX(a.va,a.c8,a.en,a.pV)).h5())continue;else break;}}if(!Cb(a.c8)&&a.pV&&(KW(a.va,a.en)).jK())a.u8=1;K_(a.en);return 1;}
function AAL(a){var b;if(a.pV)return 0;a.c8.QD();a:{while(true){if(!Cb(a.c8))break a;b=a.uQ.rw(HH(a.c8),B8(a.c8),Bb(a.c8));if(b==(-1)){a.pV=1;break a;}a.c8.f4(B8(a.c8)+b|0);if(!b)break;}}Jv(a.c8);return 1;}
var Fa=D(Bx);
var BmM=null;var Bm1=null;var Bm2=null;function RT(){RT=N(Fa);AFo();}
function A12(a,b){var c=new Fa();Q5(c,a,b);return c;}
function Q5(a,b,c){RT();Cw(a,b,c);}
function AFo(){BmM=A12(B(516),0);Bm1=A12(B(517),1);Bm2=H(Fa,[BmM,Bm1]);}
var Y1=D();
function AS3(b,c,d){if(b===null)return null;return Bep(b,APA(b),c,d);}
function V1(){var a=this;C.call(a);a.pY=0;a.E7=0;a.CA=0;a.Dt=0;a.lK=null;}
function Bdu(a){var b=new V1();AOT(b,a);return b;}
function AOT(a,b){a.lK=b;J(a);a.E7=a.lK.gR;a.CA=a.lK.df();a.Dt=(-1);}
function A4q(a){return a.pY>=a.CA?0:1;}
function A8X(a){var b,c;P_(a);a.Dt=a.pY;b=a.lK;c=a.pY;a.pY=c+1|0;return b.l(c);}
function P_(a){if(a.E7>=a.lK.gR)return;G(Bak());}
function L2(){var a=this;C.call(a);a.gn=null;a.o0=0;a.uZ=0;a.nj=null;a.pi=null;a.oS=null;a.hq=null;a.fI=null;a.d9=null;a.fT=null;a.dm=null;}
function AGm(){var a=new L2();A$0(a);return a;}
function A$0(a){J(a);a.o0=1;a.nj=S();a.pi=AAM(0.0,0.0,0.0,1.0);a.oS=Cl(1.0,1.0,1.0);a.hq=BL();a.fI=BL();a.d9=DL(2);a.dm=DL(2);}
function A8M(a){if(!a.uZ)a.hq.Gm(a.nj,a.pi,a.oS);return a.hq;}
function APY(a){if(a.o0&&a.fT!==null)(a.fI.ch(a.fT.fI)).hC(a.hq);else a.fI.ch(a.hq);return a.fI;}
function AFK(a,b){var c,d;a:{a.PO();a.OC();if(b){c=a.dm.bZ();while(true){if(!c.bC())break a;d=c.bz();d.Di(1);}}}}
function A64(a,b){var c,d,e,f,g;c=a.d9.bZ();while(c.bC()){d=c.bz();if(d.cJ===null)continue;if(d.dz===null)continue;if(d.cJ.cb!=d.dz.data.length)continue;e=d.cJ.cb;f=0;while(f<e){(d.dz.data[f].ch(d.cJ.eq.data[f].fI)).hC(d.cJ.gL.data[f]);f=f+1|0;}}a:{if(b){c=a.dm.bZ();while(true){if(!c.bC())break a;g=c.bz();g.y3(1);}}}}
function AUB(a){if(a.fT!==null){a.fT.FG(a);a.fT=null;}}
function A6z(a){return a.dm.h;}
function AL5(a,b){return a.dm.l(b);}
function AEt(a,b){return a.Na((-1),b);}
function AOV(a,b,c){var d;d=a;while(true){if(d===null){d=c.xn();if(d!==null&&!d.FG(c))G(U(B(518)));if(b>=0&&b<a.dm.h)a.dm.Le(b,c);else{b=a.dm.h;a.dm.F(c);}c.fT=a;return b;}if(d===c)break;d=d.xn();}G(U(B(519)));}
function A17(a,b){if(!a.dm.Lx(b,1))return 0;b.fT=null;return 1;}
function A3t(a){return a.dm;}
function A9J(a){return a.fT;}
function AZN(a){return (AGm()).MR(a);}
function A7c(a,b){var c,d,e;a.F9();a.gn=b.gn;a.uZ=b.uZ;a.o0=b.o0;a.nj.M(b.nj);a.pi.Pj(b.pi);a.oS.M(b.oS);a.hq.ch(b.hq);a.fI.ch(b.fI);a.d9.K();c=b.d9.bZ();while(c.bC()){d=c.bz();a.d9.F(d.ME());}a.dm.K();c=(b.rE()).ft();while(c.bC()){e=c.bz();a.Ie(e.u$());}return a;}
function ZN(b,c,d,e){var f,g,h,i;a:{f=b.h;if(!e){g=0;while(true){if(g>=f)break a;h=b.l(g);if(h.gn.z(c))break;g=g+1|0;}return h;}g=0;while(true){if(g>=f)break a;i=b.l(g);if(i.gn.Gs(c))break;g=g+1|0;}return i;}b:{if(d){g=0;while(true){if(g>=f)break b;i=ZN((b.l(g)).dm,c,1,e);if(i!==null)break;g=g+1|0;}return i;}}return null;}
var LP=D(0);
function Hx(){var a=this;C.call(a);a.A5=0;a.f$=null;a.D9=null;a.qC=null;a.k6=null;a.l9=null;a.A4=null;a.kw=null;a.jz=null;a.lQ=null;a.mj=null;a.s6=null;a.EQ=null;a.xO=null;a.yb=null;a.ob=null;a.Fv=null;a.qv=Ba;a.kV=Ba;a.tR=0;a.kb=0;a.J5=null;a.lE=null;a.ra=0;a.pz=null;}
var Bm3=null;var Bm4=null;function Ba$(){Ba$=N(Hx);AYY();}
function BfE(){var a=new Hx();VG(a);return a;}
function VG(a){Ba$();J(a);a.k6=Bp();a.l9=Bp();a.tR=1;a.kb=0;a.J5=BL();a.ra=500;a.pz=S();}
function AZH(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;XV();a.A5=Bullet.MyClassHelper.prototype.getBTVersion();a.s6=BbL();a.EQ=Ba4(a.s6);a.xO=BbQ();a.yb=Bb7();a.mj=Bae(a.EQ,a.xO,a.yb,a.s6);b=Cl(0.0,(-10.0),0.0);a.mj.HJ(b);a.f$=Bc8();a.D9=Bcq(a.f$);a.qC=Bab();a.kw=Bfd();a.lQ=Bdm();c=a.lQ;d=new CY;Ce();NG(d,BmD,0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);Ep(c,d);e=(AJI()).xP(1.0,1.0,1.0,(-1.0),(-1.0),(-0.4000000059604645));a.lQ.GE(e);a.jz=Bdh();a.f$.cq.q=43.0;a.f$.cq.o=2.0;a.f$.M4(0.0,0.0,0.0);f
=Bcu();g=1.0;h=1.0;i=1.0;j=1.0;k=Bet(Bio.Fq(B(520)));P6();k.OU(BlF,BlF);l=new F4;m=H(BH,[Z2(k),N$(4.0)]);NH(l,m);a.Fv=f.Cq(1.0,1.0,1.0,l,O(25));n=60.0;o=0.30000001192092896;p=60.0;q=f.Cq(n,o,p,BdY(H(BH,[KZ(g,h,i,j),Zx(g,h,i,j),N$(16.0)])),O(9));a.A4=a.v4(B(521),0,0.0,0.0,(-2.0),0.0,0.0,0.0,0.0,q,n,o,p,0.0,0.0,1.0);a.Fu();a.ob=BbH();a.ob.Gu(1.0,0.0,0.0,1.0);a.kV=Ea();a.lE=BaR(a.f$);a.lE.oX=0;a.lE.q3=0;a.lE.uU=0;Bh8.J2(Bfy(H(Fp,[a,a.lE])));}
function A8r(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r,s,t,u,v,w;r=BfR(k);s=KZ(o,p,q,1.0);Ep(r.jE.l(0),s);r.eC.LK(e,f,g);t=r.eC;H1();t.vu(Bm5,h);r.eC.vu(Bm6,i);r.eC.vu(Bm7,j);u=Bat(r.eC);v=BfA(a.pz.I(l/2.0,m/2.0,n/2.0));v.NG(d,a.pz.L1());w=Bf_(d,u,v,a.pz);if(c)a.l9.F(w);w.J7(0.699999988079071);a.mj.Ix(w);return r;}
function A0d(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=0;while(b<a.l9.h){c=a.l9.l(b);a.mj.G_(c);c.iz();b=b+1|0;}a.l9.K();a.k6.K();d=0;b=0;while(b<a.ra){e=HE((-5.0),5.0);f=HE(19.0,24.0);g=HE((-5.0),5.0);h=IK(0,360);i=IK(0,360);j=IK(0,360);k=1.0;l=1.0;m=1.0;n=a.v4((((I()).a(B(522))).j(d)).b(),1,0.4000000059604645,e,f,g,h,i,j,a.Fv,1.0,1.0,1.0,k,l,m);d=d+1|0;a.k6.F(n);b=b+1|0;}}
function AC8(a){var b,c,d,e,f,g,h;a.f$.f6();Bip.wa(0.8999999761581421,0.8999999761581421,0.8999999761581421,1.0);Bip.EE(16640);if(!a.kb){a.qv=Ea();if(Hq(D6(a.qv,a.kV),O(8000))){a.tR=a.tR?0:1;a.Fu();a.kV=Ea();}a.mj.IN(Bim.Fe());}a.kw.HM(a.f$);b=0;while(b<a.k6.h){c=a.k6.l(b);a.kw.C3(c,a.lQ);b=b+1|0;}a.kw.C3(a.A4,a.lQ);a.kw.bd();a.jz.g6();d=a.ob;e=a.jz;f=((((((((I()).a(B(523))).j(Bim.Nm())).a(B(524))).j(a.ra)).a(B(525))).j(a.A5)).a(B(526))).b();g=Bim;h=g.bl()-14|0;d.yj(e,f,30.0,h);a.ob.yj(a.jz,B(527),20.0,30.0);a.jz.bd();}
function A8B(a,b,c){var d;a.D9.wK(b,c,0);a.qC.wK(b,c,1);d=a.qC.NT();d.f6();a.jz.PJ(d.eK);}
function AOe(a,b){if(b==62){a.kb=a.kb?0:1;if(!a.kb)a.kV=CA(Ea(),D6(a.kV,a.qv));}else if(b==66){if(!Bim.vR())Bim.Mm(Bim.FC());else Bim.wG(0,0);}return 0;}
function A4C(a,b){return 0;}
function AW8(a,b){return 0;}
function A78(a,b,c,d,e){return 0;}
function A1T(a,b,c,d,e){return 0;}
function APs(a,b,c,d){return 0;}
function AXL(a,b,c){return 0;}
function AMS(a,b,c){return 0;}
function AYY(){Bm3=S();Bm4=S();}
function VK(){var a=this;E8.call(a);a.um=0;a.pd=0;}
function Bff(a,b){var c=new VK();AKJ(c,a,b);return c;}
function AKJ(a,b,c){Mi(a);a.um=b;a.pd=c;}
function A0G(a){return a.um;}
function A9b(a){return a.pd;}
function A4M(a){return ((((((I()).a(B(528))).j(a.um)).a(B(23))).a(a.pd==2147483647?B(101):(ABN(a.pd)).b())).a(B(529))).b();}
var W6=D(V);
function BfY(){var a=new W6();AJs(a);return a;}
function AJs(a){BM(a);}
function ATp(a,b,c,d,e){var f,g,h,i;f=b.cY.d6;B2();g=Bm8;h=(BA(e,g)).d3;i=f.gE(h);DU(b,c,i);}
var W3=D(V);
function Bfa(){var a=new W3();A82(a);return a;}
function A82(a){BM(a);}
function AYi(a,b,c,d,e){var f;B2();f=BA(e,Bm8);DQ(b,c,f.eP,f.eO,f.fa,f.fb);}
function VF(){Q.call(this);this.Od=null;}
function Bds(a){var b=new VF();AQR(b,a);return b;}
function AQR(a,b){a.Od=b;Be(a);}
function AWA(a,b){return Vs(b);}
var W_=D(V);
function Bbz(){var a=new W_();AK8(a);return a;}
function AK8(a){BM(a);}
function A$C(a,b,c,d,e){var f;B2();f=BA(e,Bm9);DQ(b,c,f.eP,f.eO,f.fa,f.fb);}
var W7=D(V);
function BbV(){var a=new W7();AVf(a);return a;}
function AVf(a){BM(a);}
function AN6(a,b,c,d,e){var f,g,h,i;f=b.cY.d6;B2();g=Bm$;h=(BA(e,g)).d3;i=f.gE(h);DU(b,c,i);}
var W5=D(V);
function Ba8(){var a=new W5();A74(a);return a;}
function A74(a){BM(a);}
function A28(a,b,c,d,e){Ce();Fv(b,c,(BA(e,BmC)).dX);}
var W$=D(V);
function BbC(){var a=new W$();AXl(a);return a;}
function AXl(a){BM(a);}
function APM(a,b,c,d,e){var f,g,h,i;f=b.cY.d6;B2();g=Bm9;h=(BA(e,g)).d3;i=f.gE(h);DU(b,c,i);}
function Tb(){C.call(this);this.uj=0;}
function Beq(){var a=new Tb();A4a(a);return a;}
function A4a(a){J(a);a.uj=0;}
function AZe(a,b){var c;c=b.I8();JX(a,c);}
function Q$(a,b){b.kn(B(530),Bf8(a));}
function JX(a,b){b.kn(B(531),Ba1(a,b));if(a.uj)b.NC(1,B(532),Baa(a));}
function A9I(b){A5S(BP(b,"onBulletPhysicsLoaded"));}
function AFc(b,c){JX(b,c);}
function A6U(b,c){Q$(b,c);}
function A1l(b,c){ANi(b,BP(c,"onBulletPhysicsLoaded"));}
function A5S(b){(BulletLib()).then(function(BulletLib){window.Bullet=BulletLib;b();});}
function ANi(b,c){(BulletLib({wasmBinary:b,async:false})).then(function(BulletLib){window.Bullet=BulletLib;c();});}
var Sl=D();
function BcE(){var a=new Sl();AU1(a);return a;}
function AU1(a){J(a);}
function A9j(a,b){if(b<=0)G(CL());return a.xL()*b|0;}
function AE$(a){return a.xL();}
function AZR(a){return Math.random();}
var Nr=D(0);
var Ld=D(GT);
var Bm_=null;function AGH(){AGH=N(Ld);A$F();}
function Bb7(){var a=new Ld();Sa(a);return a;}
function A_V(a){var b=new Ld();ACn(b,a);return b;}
function Sa(a){AGH();Iw(a);a.dZ(AAA(),1);}
function ACn(a,b){AGH();Iw(a);}
function A$F(){Bm_=A_V(0);}
function AAA(){var jsObj=new Bullet.btSequentialImpulseConstraintSolver();return Bullet.getPointer(jsObj);}
var XK=D();
var St=D(Da);
function Bb$(a){var b=new St();A2M(b,a);return b;}
function A2M(a,b){GD(a,b,0.3333333432674408,0.5);}
function A$a(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(h.dO(2))break a;Bj();i=BgZ;break a;}n=k+1|0;o=j[k];if(!ED(a,o)){c=n+(-2)|0;i=BV(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|o&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(h.dO(3))break a;Bj();i=BgZ;break a;}n=k+1|0;o=j[k];k=n+1|0;p=j[n];if(!ED(a,o))break b;if(!ED(a,p))break b;q
=((l&15)<<12|(o&63)<<6|p&63)&65535;if(Jz(q)){c=k+(-3)|0;i=BV(3);break a;}j=e.data;m=f+1|0;j[f]=q;}else{if((l&248)!=240){c=k+(-1)|0;i=BV(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(h.dO(4))break a;Bj();i=BgZ;break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.ef(2))break a;Bj();i=BgY;break a;}n=k+1|0;o=j[k];m=n+1|0;p=j[n];k=m+1|0;r=j[m];if(!ED(a,o))break c;if(!ED(a,p))break c;if(!ED(a,r))break c;j=e.data;s=(l&7)<<18|(o&63)<<12|(p&63)<<6|r&63;n=f+1|0;j[f]=FB(s);m=n+1|0;j[n]=Fi(s);}c=k;f=m;}break a;}c=k+(-3)|0;i=BV(1);break a;}c
=k+(-3)|0;i=BV(1);}h.el(c);h.dR(f);return i;}
function ED(a,b){return (b&192)!=128?0:1;}
function ABa(){var a=this;C.call(a);a.CG=null;a.e4=null;}
function Bfn(a,b){var c=new ABa();ADQ(c,a,b);return c;}
function ADQ(a,b,c){J(a);a.e4=c;a.CG=b;}
function Wr(a){return a.CG;}
function N9(a){return a.e4.length;}
function Rj(a,b){return a.e4[b];}
function PZ(a){return Bgr(a);}
function SD(a){var b,c,d,e,f,g;b=a.e4.length;c=B(533);d=Gf(((b*4|0)/3|0)+2|0);e=0;while(e<b){f=b-e|0;if(f>=3){g=(((a.e4[e]&255)<<16)+((a.e4[e+1|0]&255)<<8)|0)+(a.e4[e+2|0]&255)|0;d.U(c.f(g>>18&63));d.U(c.f(g>>12&63));d.U(c.f(g>>6&63));d.U(c.f(g&63));}else if(f<2){g=(a.e4[e]&255)<<16;d.U(c.f(g>>18&63));d.U(c.f(g>>12&63));d.a(B(534));}else{g=((a.e4[e]&255)<<16)+((a.e4[e+1|0]&255)<<8)|0;d.U(c.f(g>>18&63));d.U(c.f(g>>12&63));d.U(c.f(g>>6&63));d.a(B(535));}e=e+3|0;}return d.b();}
var AC2=D(CG);
function Bcd(a,b,c){var d=new AC2();APD(d,a,b,c);return d;}
function APD(a,b,c,d){E4(a,b,c,d);}
function AEn(a,b,c,d){var e;a:{while(true){if((b+a.bv.cg()|0)>d.J())break a;e=a.bv.bH(b,c);if(e<1)break;b=b+e|0;}}return a.k.e(b,c,d);}
function AAQ(){var a=this;C.call(a);a.rP=null;a.EJ=null;a.z$=0;a.qA=0;}
function Bb1(a,b){var c=new AAQ();A4B(c,a,b);return c;}
function A4B(a,b,c){J(a);a.rP=b;a.EJ=c;}
function A4v(a){return Cb(a.rP);}
function A1H(a,b){return Bb(a.rP)<b?0:1;}
function AW5(a,b){return Bb(a.EJ)<b?0:1;}
function A8$(a,b){a.z$=b;}
function A6R(a,b){a.qA=b;}
function PG(){Q.call(this);this.K6=null;}
function BaQ(a){var b=new PG();AMO(b,a);return b;}
function AMO(a,b){a.K6=b;Be(a);}
function AOx(a,b){return Fx(b);}
var JS=D(0);
var RK=D();
function BfN(){var a=new RK();AWW(a);return a;}
function AWW(a){J(a);}
var Xd=D(V);
function Bgh(){var a=new Xd();ALu(a);return a;}
function ALu(a){BM(a);}
function AQW(a,b,c,d,e){var f;B2();f=BA(e,Bna);DQ(b,c,f.eP,f.eO,f.fa,f.fb);}
var Lj=D(Dn);
function Bgb(){var a=new Lj();A2W(a);return a;}
function A2W(a){Jt(a);}
var Xa=D(V);
function Bav(){var a=new Xa();A7w(a);return a;}
function A7w(a){BM(a);}
function A_e(a,b,c,d,e){var f,g,h;ABF();if(Ct(e,BjN)){f=b.cY.d6;g=BjN;h=(BA(e,g)).IL;DU(b,c,f.gE(h));}}
var W9=D(V);
function Beu(){var a=new W9();ATI(a);return a;}
function ATI(a){BM(a);}
function AWl(a,b,c,d,e){var f;B2();f=BA(e,Bm$);DQ(b,c,f.eP,f.eO,f.fa,f.fb);}
var Xb=D(V);
function Bfx(){var a=new Xb();AW6(a);return a;}
function AW6(a){BM(a);}
function A1n(a,b,c,d,e){var f,g,h,i;f=b.cY.d6;B2();g=Bna;h=(BA(e,g)).d3;i=f.gE(h);DU(b,c,i);}
function Ps(){Q.call(this);this.Kk=null;}
function Baw(a){var b=new Ps();A$W(b,a);return b;}
function A$W(a,b){a.Kk=b;Be(a);}
function ASC(a,b){return Ue(b);}
var JU=D(0);
function Sr(){var a=this;C.call(a);a.kF=null;a.ti=null;a.wT=null;}
function AZp(){var a=new Sr();AJQ(a);return a;}
function AJQ(a){J(a);a.kF=window;a.wT=Bbk();}
function A6r(a){var b;b=a.kF.document;return b;}
function A8i(a,b){a.ti=b;requestAnimationFrame(BP(a,"onAnimationFrame"));}
function AZ9(a,b){var c;c=a.ti;a.ti=null;c.fe();}
function A6c(a){return a.wT;}
function ATW(a){var b;b=a.kF.location;return b;}
function AZd(a){return a.kF.document.documentElement.clientWidth;}
function AXq(a){return a.kF.document.documentElement.clientHeight;}
function A5N(a,b){a.Ko(b);}
var Ys=D(CG);
function BfQ(a,b,c){var d=new Ys();AUi(d,a,b,c);return d;}
function AUi(a,b,c,d){E4(a,b,c,d);}
function AOF(a,b,c,d){var e;while(true){e=a.k.e(b,c,d);if(e>=0)break;if((b+a.bv.cg()|0)<=d.J()){e=a.bv.bH(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var Ya=D();
function EW(b,c){return Lv(b,c);}
function ZB(){var a=this;C.call(a);a.DU=null;a.wm=0.0;a.mW=null;}
function Bf9(){var a=new ZB();ARz(a);return a;}
function ARz(a){J(a);a.mW=Bp();}
var SE=D(Da);
function Bao(a){var b=new SE();AO5(b,a);return b;}
function AO5(a,b){GD(a,b,1.0,1.0);}
function AIN(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;while(c<d&&f<g){j=e.data;k=b.data;l=c+1|0;m=k[c]&255;n=f+1|0;j[f]=m&65535;c=l;f=n;}h.el(c);h.dR(f);return i;}
function HS(){var a=this;C.call(a);a.fc=null;a.cc=null;a.tx=0;a.jR=0;a.hR=null;a.mx=0;a.yR=null;}
var Bnb=null;function Kl(){Kl=N(HS);ATO();}
function BeD(a,b,c,d){var e=new HS();Ye(e,a,b,c,d);return e;}
function Bnc(a,b,c,d,e){var f=new HS();M5(f,a,b,c,d,e);return f;}
function Bnd(a,b,c,d,e){var f=new HS();On(f,a,b,c,d,e);return f;}
function Ye(a,b,c,d,e){Kl();J(a);a.tx=1;a.mx=0;a.yR=S();a.fc=Zt(a,b,c,e);a.cc=A0P(b,d);a.jR=0;KV(Bg2,a);}
function Zt(a,b,c,d){if(Bir===null)return A3k(b,c,d);return A2E(b,c,d);}
function M5(a,b,c,d,e,f){Kl();On(a,b,c,d,e,A0X(f));}
function On(a,b,c,d,e,f){Kl();a:{b:{J(a);a.tx=1;a.mx=0;a.yR=S();Be5();switch(Bl5.data[BC(b)]){case 1:break;case 2:a.fc=Bf7(c,d,f);a.cc=A$7(c,e);a.jR=0;break a;case 3:a.fc=A2E(c,d,f);a.cc=A$7(c,e);a.jR=0;break a;case 4:break b;default:break b;}a.fc=A3k(c,d,f);a.cc=A0P(c,e);a.jR=0;break a;}a.fc=Bcz(d,f);a.cc=BcL(e);a.jR=1;}KV(Bg2,a);}
function APF(a,b,c,d){a.fc.us(b,c,d);return a;}
function AGt(a,b){var c;c=b.data;a.cc.uD(b,0,c.length);return a;}
function AKt(a,b,c,d){a.cc.uD(b,c,d);return a;}
function ASq(a){return a.fc.uP();}
function A8k(a){return a.cc.ne();}
function AHj(a,b){a.ih(b,null);}
function AQH(a,b,c){a.fc.ih(b,c);if(a.hR!==null&&a.hR.Ab()>0)a.hR.ih(b,c);if(a.cc.l2()>0)a.cc.ew();}
function A7R(a,b){a.gO(b,null);}
function AEF(a,b,c){a.fc.gO(b,c);if(a.hR!==null&&a.hR.Ab()>0)a.hR.gO(b,c);if(a.cc.l2()>0)a.cc.Ee();}
function AUg(a,b,c,d,e){a.De(b,c,d,e,a.tx);}
function A32(a,b,c,d,e,f){var g,h,i,j,k,l,m;if(!e)return;if(f)a.KC(b);if(a.jR){if(a.cc.l2()<=0)Biq.xe(c,d,e);else{g=a.cc.un();h=B8(g);i=BD(g);g.cZ(d);g.cm(d+e|0);Biq.Nx(c,e,5123,g);g.cZ(h);g.cm(i);}}else{j=0;if(a.mx)j=a.hR.Ab();if(a.cc.l2()<=0){if(a.mx&&j>0)Bir.XM(c,d,e,j);else Biq.xe(c,d,e);}else{if((e+d|0)>a.cc.ne()){k=new KK;l=(((((I()).a(B(536))).j(e)).a(B(537))).j(d)).a(B(538));m=a.cc;QC(k,((l.j(m.ne())).a(B(24))).b());G(k);}if(a.mx&&j>0)Bir.Tz(c,e,5123,d*2|0,j);else Biq.O$(c,e,5123,d*2|0);}}if(f)a.JZ(b);}
function AYq(a){return a.fc.jI();}
function ALt(a){return a.cc.un();}
function KV(b,c){var d;Kl();d=Bnb.W(b);if(d===null)d=Bp();d.F(c);Bnb.x(b,d);}
function ATO(){Bnb=C6();}
function Nv(){var a=this;EU.call(a);a.pq=0;a.e$=null;}
function Bcp(a,b){var c=new Nv();AO8(c,a,b);return c;}
function AO8(a,b,c){L7(a,b,null);a.pq=c;}
var FU=D(BT);
var Bne=null;function ATd(){ATd=N(FU);A8V();}
function Bc2(a){var b=new FU();X4(b,a);return b;}
function Bnf(){var a=new FU();Jp(a);return a;}
function X4(a,b){ATd();B_(a);}
function Jp(a){ATd();B_(a);}
function A8V(){Bne=Bc2(0);}
var Wk=D();
function G3(b,c){var d;if(b<0)G(W((((I()).a(B(539))).j(b)).b()));d=IW(Bf(2,AYX(b/c)|0));if(d<=1073741824)return d;G(W((((I()).a(B(540))).j(b)).b()));}
var AB2=D(Bt);
function Bcw(){var a=new AB2();AKR(a);return a;}
function AKR(a){Co(a);}
function A5m(a,b,c,d){var e;e=!d.lI()?d.J():c.i();if(b<e)return (-1);d.d5=1;d.PU=1;return a.k.e(b,c,d);}
function AUu(a,b){return 0;}
function AJn(a){return B(541);}
function AAJ(){var a=this;C.call(a);a.tc=0;a.gt=null;a.hD=null;a.wZ=0.0;a.tu=0;a.vb=0;a.jV=0;}
function Gr(){var a=new AAJ();A2Z(a);return a;}
function Bng(a,b){var c=new AAJ();YI(c,a,b);return c;}
function A2Z(a){YI(a,51,0.800000011920929);}
function YI(a,b,c){var d;J(a);if(c>0.0&&c<1.0){a.wZ=c;d=G3(b,c);a.tu=d*c|0;a.jV=d-1|0;a.vb=CW(O(a.jV));a.gt=Y(C,d);a.hD=Bc(d);return;}G(W((((I()).a(B(40))).cD(c)).b()));}
function AMM(a,b){return Cp(CN(Cf(O(b.bp()),Cd(2135587861, 2654435769)),a.vb));}
function AYp(a,b){var c,d,e;if(b===null)G(W(B(460)));c=a.gt;d=a.kq(b);while(true){e=c.data[d];if(e===null)return  -(d+1|0)|0;if(e.z(b))break;d=(d+1|0)&a.jV;}return d;}
function AQI(a,b,c){var d,e;d=a.j6(b);if(d>=0){a.hD.data[d]=c;return;}e= -(d+1|0)|0;a.gt.data[e]=b;a.hD.data[e]=c;e=a.tc+1|0;a.tc=e;if(e>=a.tu)TU(a,a.gt.data.length<<1);}
function Y$(a,b,c){var d,e,f;d=a.gt;e=a.kq(b);while(true){f=d.data;if(f[e]===null)break;e=(e+1|0)&a.jV;}f[e]=b;a.hD.data[e]=c;}
function AXs(a,b,c){var d;d=a.j6(b);if(d>=0)c=a.hD.data[d];return c;}
function TU(a,b){var c,d,e,f,g;a:{c=a.gt.data.length;a.tu=b*a.wZ|0;a.jV=b-1|0;a.vb=CW(O(a.jV));d=a.gt;e=a.hD;a.gt=Y(C,b);a.hD=Bc(b);if(a.tc>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g!==null)Y$(a,g,e.data[f]);f=f+1|0;}}}}
var TB=D(T);
function A_Y(){var a=new TB();AK_(a);return a;}
function AK_(a){Bo(a);}
function ARi(a){return (CS()).bF(65,90);}
function Ft(){var a=this;CT.call(a);a.bI=0;a.A=null;a.hh=null;}
function V3(a,b,c,d,e,f){FJ(a,c);Ev();a.hh=Bie;a.bI=b;a.A=d;a.C=e;a.bb=f;}
function FV(b){if(b>=0)return A2T(b,1);G(W((((I()).a(B(402))).j(b)).b()));}
function RL(b){if(b>=0)return A2T(b,0);G(W((((I()).a(B(402))).j(b)).b()));}
function Zb(b,c,d){return Bd7(0,b.data.length,b,c,c+d|0,0,0);}
function Ht(b){return Zb(b,0,b.data.length);}
function AYB(a,b,c,d){var e,f,g,h,i,j;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bg((((((I()).a(B(542))).j(g)).a(B(404))).j(f)).b()));if(Bb(a)<d)G(UB());if(d<0)G(Bg(((((I()).a(B(405))).j(d)).a(B(406))).b()));h=a.C+a.bI|0;i=0;while(i<d){g=c+1|0;j=a.A.data;f=h+1|0;e[c]=j[h];i=i+1|0;c=g;h=f;}a.C=a.C+d|0;return a;}}e=b.data;G(Bg(((((((I()).a(B(407))).j(c)).a(B(64))).j(e.length)).a(B(24))).b()));}
function AOB(a,b){return a.z1(b,0,b.data.length);}
function A9y(a,b,c,d){var e,f,g,h,i,j;if(!d)return a;if(a.b_())G(C9());if(Bb(a)<d)G(F0());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bg((((((I()).a(B(543))).j(g)).a(B(404))).j(f)).b()));if(d<0)G(Bg(((((I()).a(B(405))).j(d)).a(B(406))).b()));h=a.C+a.bI|0;i=0;while(i<d){j=a.A.data;g=h+1|0;f=c+1|0;j[h]=e[c];i=i+1|0;h=g;c=f;}a.C=a.C+d|0;return a;}}e=b.data;G(Bg(((((((I()).a(B(407))).j(c)).a(B(64))).j(e.length)).a(B(24))).b()));}
function Ym(a,b){return a.w1(b,0,b.data.length);}
function AWJ(a){return 1;}
function HH(a){return a.A;}
function FH(a,b){a.hh=b;return a;}
function J5(a){FZ(a);return a;}
function Jv(a){G7(a);return a;}
function AZy(a,b){IZ(a,b);return a;}
function AQ5(a,b){GL(a,b);return a;}
function AF3(a){return Jv(a);}
function AOS(a,b){return a.M9(b);}
function AVB(a,b){return a.f4(b);}
function AB_(){var a=this;Ft.call(a);a.IG=0;a.oE=0;}
function A2T(a,b){var c=new AB_();A1z(c,a,b);return c;}
function Bd7(a,b,c,d,e,f,g){var h=new AB_();O8(h,a,b,c,d,e,f,g);return h;}
function A1z(a,b,c){O8(a,0,b,Cj(b),0,b,c,0);}
function O8(a,b,c,d,e,f,g,h){V3(a,b,c,d,e,f);a.IG=g;a.oE=h;}
function ADi(a,b){if(b>=0&&b<a.bb)return a.A.data[a.bI+b|0];G(Bg(((((((I()).a(B(354))).j(b)).a(B(64))).j(a.bb)).a(B(24))).b()));}
function AMN(a){var b,c,d,e,f,g,h,i;if(a.oE)G(C9());a:{b=Bb(a);if(a.C>0){c=a.bI;d=a.bI+a.C|0;e=0;while(true){if(e>=b)break a;f=a.A.data;g=c+1|0;h=a.A.data;i=d+1|0;f[c]=h[d];e=e+1|0;c=g;d=i;}}}a.C=b;a.bb=a.hB;a.fE=(-1);return a;}
function AR6(a){return a.oE;}
function A$$(a){var b,c;b=Bb(a)/2|0;c=a.hh;Ev();if(c!==Bie)return Bf0(a.bI+a.C|0,b,a,0,b,a.b_());return Bc$(a.bI+a.C|0,b,a,0,b,a.b_());}
function A8s(a,b){var c,d,e,f,g;if(b>=0&&(b+3|0)<a.bb){c=a.A.data[a.bI+b|0]&255;d=a.A.data[(a.bI+b|0)+1|0]&255;e=a.A.data[(a.bI+b|0)+2|0]&255;f=a.A.data[(a.bI+b|0)+3|0]&255;g=a.hh;Ev();if(g!==Bie)return f<<24|e<<16|d<<8|c;return c<<24|d<<16|e<<8|f;}G(Bg(((((((I()).a(B(354))).j(b)).a(B(64))).j(a.bb-3|0)).a(B(24))).b()));}
function AI2(a,b,c){var d;if(a.oE)G(C9());if(b>=0&&(b+3|0)<a.bb){d=a.hh;Ev();if(d!==Bie){a.A.data[a.bI+b|0]=c<<24>>24;a.A.data[(a.bI+b|0)+1|0]=c>>8<<24>>24;a.A.data[(a.bI+b|0)+2|0]=c>>16<<24>>24;a.A.data[(a.bI+b|0)+3|0]=c>>24<<24>>24;}else{a.A.data[a.bI+b|0]=c>>24<<24>>24;a.A.data[(a.bI+b|0)+1|0]=c>>16<<24>>24;a.A.data[(a.bI+b|0)+2|0]=c>>8<<24>>24;a.A.data[(a.bI+b|0)+3|0]=c<<24>>24;}return a;}G(Bg(((((((I()).a(B(354))).j(b)).a(B(64))).j(a.bb-3|0)).a(B(24))).b()));}
function ATY(a){var b,c;b=Bb(a)/4|0;c=a.hh;Ev();if(c!==Bie)return Be$(a.bI+a.C|0,b,a,0,b,a.b_());return Bdz(a.bI+a.C|0,b,a,0,b,a.b_());}
function ANv(a){var b,c;b=Bb(a)/4|0;c=a.hh;Ev();if(c!==Bif)return BfC(a.bI+a.C|0,b,a,0,b,a.b_());return A_W(a.bI+a.C|0,b,a,0,b,a.b_());}
function RZ(){var a=this;E9.call(a);a.sE=0;a.sD=null;}
function Bgr(a){var b=new RZ();AKF(b,a);return b;}
function AKF(a,b){a.sD=b;Kw(a);}
function A2j(a){var b,c;if(a.sE==N9(a.sD))return (-1);b=a.sD;c=a.sE;a.sE=c+1|0;return Rj(b,c)&255;}
function LN(){var a=this;C.call(a);a.m7=null;a.s_=0.0;}
function Bb_(a,b){var c=new LN();AI8(c,a,b);return c;}
function AI8(a,b,c){J(a);a.m7=S();a.s_=0.0;(a.m7.M(b)).bU();a.s_=c;}
function A27(a,b,c,d){(((a.m7.M(b)).gl(c)).HW(c.n-d.n,c.o-d.o,c.q-d.q)).bU();a.s_= -b.yB(a.m7);}
function VT(){var a=this;C.call(a);a.p9=null;a.uV=null;a.mr=0;a.l$=0;a.nq=0;a.gX=0;a.rZ=0;a.uX=0;a.p6=0;}
function BcN(){var a=new VT();A8G(a);return a;}
function A8G(a){J(a);a.p9=null;a.uV=null;a.mr=2;a.l$=5;a.nq=0;a.gX=12;a.rZ=1;a.uX=(-1);a.p6=(-1);}
function Gs(){var a=this;C.call(a);a.gm=null;a.b1=null;a.jY=null;}
var Bnh=null;var Bni=null;var Bnj=null;function AKZ(){AKZ=N(Gs);A2J();}
function Bfg(){var a=new Gs();VP(a);return a;}
function VP(a){var b;AKZ();J(a);a.gm=Y(LN,6);a.b1=H(DC,[S(),S(),S(),S(),S(),S(),S(),S()]);a.jY=Ca(24);b=0;while(b<6){a.gm.data[b]=Bb_(S(),0.0);b=b+1|0;}}
function A5e(a,b){var c,d,e,f,g,h;AKZ();X(Bni,0,a.jY,0,Bni.data.length);TY(b.c,a.jY,0,8,3);c=0;d=0;while(c<8){e=a.b1.data[c];f=a.jY.data;g=d+1|0;e.n=f[d];f=a.jY.data;h=g+1|0;e.o=f[g];f=a.jY.data;d=h+1|0;e.q=f[h];c=c+1|0;}a.gm.data[0].iy(a.b1.data[1],a.b1.data[0],a.b1.data[2]);a.gm.data[1].iy(a.b1.data[4],a.b1.data[5],a.b1.data[7]);a.gm.data[2].iy(a.b1.data[0],a.b1.data[4],a.b1.data[3]);a.gm.data[3].iy(a.b1.data[5],a.b1.data[1],a.b1.data[6]);a.gm.data[4].iy(a.b1.data[2],a.b1.data[3],a.b1.data[6]);a.gm.data[5].iy(a.b1.data[4],
a.b1.data[0],a.b1.data[1]);}
function A2J(){var b,c,d,e,f,g,h,i;Bnh=H(DC,[Cl((-1.0),(-1.0),(-1.0)),Cl(1.0,(-1.0),(-1.0)),Cl(1.0,1.0,(-1.0)),Cl((-1.0),1.0,(-1.0)),Cl((-1.0),(-1.0),1.0),Cl(1.0,(-1.0),1.0),Cl(1.0,1.0,1.0),Cl((-1.0),1.0,1.0)]);Bni=Ca(24);b=0;c=Bnh.data;d=c.length;e=0;while(e<d){f=c[e];g=Bni.data;h=b+1|0;g[b]=f.n;g=Bni.data;i=h+1|0;g[h]=f.o;g=Bni.data;b=i+1|0;g[i]=f.q;e=e+1|0;}Bnj=S();}
function Na(){var a=this;C.call(a);a.Bv=null;a.Et=null;}
var Bnk=null;function BeQ(){BeQ=N(Na);AQp();}
function A_$(a,b){var c=new Na();AB7(c,a,b);return c;}
function AB7(a,b,c){BeQ();J(a);a.Bv=S();a.Et=S();a.Bv.M(b);(a.Et.M(c)).bU();}
function AQp(){Bnk=S();}
var ABA=D(By);
function AT_(b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s;b.up(8);k=b.dH(c);l=b.dH(e);m=b.dH(f);n=b.dH(d);o=b.dH(g);p=b.dH(i);q=b.dH(j);r=b.dH(h);s=b.Mr();if(s==1){b.hn(24);b.d2(k,l,m,n);b.d2(p,o,r,q);b.ER(k,o,n,r,m,q,l,p);}else if(!s){b.r6(2);b.d2(k,l,m,n);b.d2(p,o,r,q);}else{b.r6(6);b.d2(k,l,m,n);b.d2(p,o,r,q);b.d2(k,n,r,o);b.d2(p,q,m,l);b.d2(p,l,k,o);b.d2(m,q,r,n);}}
function A9E(b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u;if(Z(Br(IM(b.jI()),O(408)),Ba)){J9();k=BiK.dK(c,null,null,null);l=BiL.dK(d,null,null,null);m=BiM;n=null;o=null;p=null;n=m.dK(e,n,o,p);o=BiN.dK(f,null,null,null);p=BiO;q=null;r=null;m=null;p=p.dK(g,q,r,m);q=BiP.dK(h,null,null,null);r=BiQ;s=null;t=null;m=null;r=r.dK(i,s,t,m);m=BiR.dK(j,null,null,null);AT_(b,k,l,n,o,p,q,r,m);}else{b.up(24);b.r6(6);J9();u=(((BiC.M(c)).i3(f,0.5)).gl((BiD.M(g)).i3(j,0.5))).bU();b.jp(c,d,f,e,u);b.jp(h,g,i,j,u.em((-1.0)));k=
(((BiC.M(c)).i3(i,0.5)).gl((BiD.M(d)).i3(j,0.5))).bU();b.jp(g,c,e,i,k);b.jp(d,h,j,f,k.em((-1.0)));k=(((BiC.M(c)).i3(h,0.5)).gl((BiD.M(e)).i3(j,0.5))).bU();b.jp(g,h,d,c,k);b.jp(e,f,j,i,k.em((-1.0)));}}
function A6L(b,c,d,e){AU5(b,0.0,0.0,0.0,c,d,e);}
function AU5(b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;i=f*0.5;j=g*0.5;k=h*0.5;l=c-i;m=d-j;n=e-k;o=c+i;p=d+j;q=e+k;r=(Dy()).I(l,m,n);s=(Dy()).I(l,p,n);t=(Dy()).I(o,m,n);u=(Dy()).I(o,p,n);v=(Dy()).I(l,m,q);w=(Dy()).I(l,p,q);x=(Dy()).I(o,m,q);y=(Dy()).I(o,p,q);A9E(b,r,s,t,u,v,w,x,y);UT();}
var QS=D(Bm);
function BaN(){var a=new QS();A$f(a);return a;}
function A$f(a){Cx(a);}
function VV(){Bt.call(this);this.C_=null;}
function BfP(a){var b=new VV();A6q(b,a);return b;}
function A6q(a,b){Co(a);a.C_=b;}
function AXY(a,b,c,d){var e,f;a:{if(b!=d.J()){if(!b)break a;if(d.jB()&&b==d.dI())break a;e=a.C_;f=b-1|0;if(e.D2(c.f(f),c.f(b)))break a;}return (-1);}return a.k.e(b,c,d);}
function AI6(a,b){return 0;}
function AWb(a){return B(544);}
var Ci=D();
function DT(a){J(a);}
function AU9(a,b,c){return 1;}
var TN=D();
function Xj(){V.call(this);this.yo=null;}
function Bd8(){var a=new Xj();A6e(a);return a;}
function A6e(a){BM(a);a.yo=BL();}
function AZ6(a,b,c,d,e){D1(b,c,(a.yo.ch(b.cV.eK)).hC(d.dy));}
var ML=D();
var BjM=null;function BfT(){BfT=N(ML);AFE();}
function AFE(){BjM=Bc((YA()).data.length);BjM.data[BC(BjA)]=1;BjM.data[BC(BjB)]=2;}
function Yv(){var a=this;C.call(a);a.fX=null;a.iR=null;a.iT=null;a.Nr=null;}
function Bcu(){var a=new Yv();A6P(a);return a;}
function A6P(a){J(a);a.iT=Bp();a.Nr=BL();}
function Rx(a,b){var c,d,e;c=a.iT.bZ();while(true){if(!c.bC()){d=BcD();d.Pn(b);a.iT.F(d);return d;}e=c.bz();if(NW(e.jI(),b)&&e.I1()<16383)break;}return e;}
function ADA(a){if(a.fX!==null)G(U(B(545)));a.iR=null;a.fX=BaT();a.iT.K();}
function AWh(a){var b,c,d;if(a.fX===null)G(U(B(546)));b=a.fX;NZ(a);a.fX=null;c=a.iT.bZ();while(c.bC()){d=c.bz();d.N5();}a.iT.K();AYc(b);return b;}
function NZ(a){if(a.iR!==null)a.iR=null;}
function AVP(a,b){if(a.fX===null)G(U(B(546)));NZ(a);a.fX.j3.F(b);a.iR=b;return b;}
function AGb(a){var b;b=AGm();a.P2(b);b.gn=(((I()).a(B(547))).j(a.fX.j3.h)).b();return b;}
function A8w(a,b,c){if(a.iR===null)a.Js();a.iR.d9.F(Bgk(b,c));}
function AKc(a,b,c,d,e){var f;f=Rx(a,d);a.Nq(f.Qu(b,c),e);return f;}
function ASK(a,b,c,d,e){return a.Kf(b,c,RP(d),e);}
function ARv(a,b,c,d,e,f){return a.J3(b,c,d,4,e,f);}
function A3u(a,b,c,d,e,f,g){a.g6();(a.Ky(B(548),e,g,f)).Lj(b,c,d);return a.H6();}
function AYc(b){var c,d;b.pZ.K();b.p4.K();b.oA.K();c=b.j3.bZ();while(c.bC()){d=c.bz();T8(b,d);}}
function T8(b,c){var d,e,f;d=c.d9.bZ();while(d.bC()){e=d.bz();if(!b.pZ.iv(e.dY,1))b.pZ.F(e.dY);if(!b.oA.iv(e.fl,1)){b.oA.F(e.fl);if(!b.p4.iv(e.fl.b7,1))b.p4.F(e.fl.b7);b.MJ(e.fl.b7);}}d=(c.rE()).ft();while(d.bC()){f=d.bz();T8(b,f);}}
function I9(){var a=this;C.call(a);a.dt=null;a.eN=null;a.yh=0;a.KK=0;a.ua=0;a.k3=0;a.oH=0;}
function A3k(a,b,c){var d=new I9();Z4(d,a,b,c);return d;}
function Z4(a,b,c,d){J(a);a.k3=0;a.oH=0;a.KK=b;a.dt=d;a.eN=HX(Cg(a.dt.cQ/4|0,c));a.eN.db();a.yh=Biq.i5();a.ua=!b?35048:35044;}
function AI5(a){return a.dt;}
function ATG(a){return CV(a.eN)/(a.dt.cQ/4|0)|0;}
function ACP(a){if(a.oH){Biq.fD(34962,BD(a.eN),a.eN,a.ua);a.k3=0;}}
function A5a(a,b,c,d){a.k3=1;Ob(b,a.eN,d,c);a.eN.cZ(0);a.eN.cm(d);ACP(a);}
function AZQ(a,b,c){var d,e,f,g,h,i;d=Biq;d.c$(34962,a.yh);if(a.k3){d.fD(34962,BD(a.eN),a.eN,a.ua);a.k3=0;}a:{e=CU(a.dt);if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data;h=CB(a.dt,f);i=g[f];if(i>=0){b.lT(i);if(h.fn!=4)b.id(i,h.cK,5126,0,a.dt.cQ,h.cU);else b.id(i,h.cK,5121,1,a.dt.cQ,h.cU);}f=f+1|0;}}f=0;while(f<e){h=CB(a.dt,f);i=b.lZ(h.es);if(i>=0){b.lT(i);if(h.fn!=4)b.id(i,h.cK,5126,0,a.dt.cQ,h.cU);else b.id(i,h.cK,5121,1,a.dt.cQ,h.cU);}f=f+1|0;}}a.oH=1;}
function AWj(a,b,c){var d,e,f,g;a:{d=Biq;e=CU(a.dt);if(c===null){f=0;while(f<e){b.BJ((CB(a.dt,f)).es);f=f+1|0;}}else{f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0)b.tP(g);f=f+1|0;}}}d.c$(34962,0);a.oH=0;}
var Wh=D(I9);
function Bcz(a,b){var c=new Wh();A7h(c,a,b);return c;}
function A7h(a,b,c){Z4(a,0,b,c);}
var Xp=D(V);
function Ba3(){var a=new Xp();AQP(a);return a;}
function AQP(a){BM(a);}
function ATx(a,b,c,d,e){Ce();Fv(b,c,(BA(e,Bmy)).dX);}
var Xl=D(V);
function BeT(){var a=new Xl();ARQ(a);return a;}
function ARQ(a){BM(a);}
function AVj(a,b,c,d,e){var f,g,h,i;f=b.cY.d6;B2();g=Bnl;h=(BA(e,g)).d3;i=f.gE(h);DU(b,c,i);}
var S7=D(T);
function BcZ(){var a=new S7();AJp(a);return a;}
function AJp(a){Bo(a);}
function A7r(a){return (CS()).bF(97,122);}
function Xk(){V.call(this);this.Be=null;}
function Bct(){var a=new Xk();AK$(a);return a;}
function AK$(a){BM(a);a.Be=Pi();}
function ALO(a,b,c,d,e){Q4(b,c,((a.Be.D_(d.dy)).CU()).AF());}
var KP=D(0);
var Xn=D(V);
function Bb0(){var a=new Xn();AZC(a);return a;}
function AZC(a){BM(a);}
function AG5(a,b,c,d,e){ET();Fn(b,c,(BA(e,Bmc)).mo);}
var ABE=D();
function Y3(){var a=this;C.call(a);a.d6=null;a.oq=0;a.s9=0;a.qF=0;a.ha=0;a.AR=0.0;a.w6=0.0;a.pH=0;a.o_=0;}
function BdH(a){var b=new Y3();A$s(b,a);return b;}
function A$s(a,b){J(a);a.d6=b;}
function A8E(a){Bip.eh(2929);a.ha=0;Bip.kT(1);a.pH=1;Bip.eh(3042);a.oq=0;Bip.eh(2884);a.qF=0;a.s9=0;a.o_=0;a.d6.g6();}
function A$Z(a){if(a.ha)Bip.eh(2929);if(!a.pH)Bip.kT(1);if(a.oq)Bip.eh(3042);if(a.o_>0)Bip.eh(2884);a.d6.bd();}
function AGO(a,b){var c;if(a.pH!=b){c=Bip;a.pH=b;c.kT(b);}}
function AXS(a,b,c,d){var e,f,g;e=!a.ha?0:1;f=!b?0:1;if(a.ha!=b){a.ha=b;if(!f)Bip.eh(2929);else{Bip.o5(2929);Bip.vE(b);}}if(f){if(!(e&&a.ha==b)){g=Bip;a.ha=b;g.vE(b);}if(!(e&&a.AR===c&&a.w6===d)){g=Bip;a.AR=c;a.w6=d;g.J8(c,d);}}}
function A$c(a,b,c,d){if(b!=a.oq){a.oq=b;if(!b)Bip.eh(3042);else Bip.o5(3042);}if(b&&!(a.s9==c&&a.qF==d)){Bip.PS(c,d);a.s9=c;a.qF=d;}}
function AKb(a,b){if(b!=a.o_){a.o_=b;if(b!=1028&&b!=1029&&b!=1032)Bip.eh(2884);else{Bip.o5(2884);Bip.Ji(b);}}}
var Rd=D(T);
function BcF(){var a=new Rd();AF7(a);return a;}
function AF7(a){Bo(a);}
function APm(a){return BcW(a);}
var Hl=D();
function XP(a){J(a);}
function Zr(){var a=this;C.call(a);a.fv=null;a.dS=null;a.rT=0;a.H9=0;a.jj=0;a.oW=0;a.yX=0;}
function A$7(a,b){var c=new Zr();AZk(c,a,b);return c;}
function AZk(a,b,c){J(a);a.jj=1;a.oW=0;a.dS=MM(c*2|0);a.H9=1;a.yX=!b?35048:35044;a.fv=a.dS.v7();a.fv.db();a.dS.db();a.rT=ACC(a);}
function ACC(a){var b;b=Biq.i5();Biq.c$(34963,b);Biq.fD(34963,CV(a.dS),null,a.yX);Biq.c$(34963,0);return b;}
function APy(a){return BD(a.fv);}
function AUQ(a){return CV(a.fv);}
function A1S(a,b,c,d){a.jj=1;a.fv.c1();a.fv.DH(b,c,d);a.fv.db();a.dS.cZ(0);a.dS.cm(d<<1);if(a.oW){Biq.qr(34963,0,BD(a.dS),a.dS);a.jj=0;}}
function ASN(a){a.jj=1;return a.fv;}
function ALq(a){if(!a.rT)G(U(B(549)));Biq.c$(34963,a.rT);if(a.jj){a.dS.cm(BD(a.fv)*2|0);Biq.qr(34963,0,BD(a.dS),a.dS);a.jj=0;}a.oW=1;}
function AFR(a){Biq.c$(34963,0);a.oW=0;}
var Gn=D(BT);
var Bnm=null;function A42(){A42=N(Gn);AH6();}
function BeJ(a){var b=new Gn();Y8(b,a);return b;}
function Bnn(){var a=new Gn();H2(a);return a;}
function Y8(a,b){A42();B_(a);}
function H2(a){A42();B_(a);}
function AH6(){Bnm=BeJ(0);}
var Wt=D(Bt);
function BaD(){var a=new Wt();AQU(a);return a;}
function AQU(a){Co(a);}
function AK4(a,b,c,d){if(b!=d.NA())return (-1);return a.k.e(b,c,d);}
function AT2(a,b){return 0;}
function AWx(a){return B(550);}
var Xt=D(V);
function Bee(){var a=new Xt();AEM(a);return a;}
function AEM(a){BM(a);}
function A7A(a,b,c,d,e){var f,g,h,i;f=b.cY.d6;B2();g=Bno;h=(BA(e,g)).d3;i=f.gE(h);DU(b,c,i);}
var Xq=D(V);
function BaA(){var a=new Xq();A9V(a);return a;}
function A9V(a){BM(a);}
function ATi(a,b,c,d,e){var f;B2();f=BA(e,Bno);DQ(b,c,f.eP,f.eO,f.fa,f.fb);}
var C_=D(BT);
var Bnp=null;var Bg6=null;var Bnq=null;var Bnr=null;var Bns=null;var Bnt=null;var Bnu=null;var Bnv=null;function Fl(){Fl=N(C_);AFe();}
function Fe(a){var b=new C_();S1(b,a);return b;}
function S1(a,b){Fl();B_(a);a.dZ(!b?0:PB(0.0,0.0,0.0),b);}
function AFZ(a){return Rn(a.bY);}
function AQb(a){return AAs(a.bY);}
function A1p(a){return XN(a.bY);}
function AHR(a,b,c,d){AAo(a.bY,b,c,d);}
function Gq(b,c){Fl();c.M_(b.n,b.o,b.q);}
function Wp(b,c){var d,e,f;Fl();d=b.LM();e=b.JR();f=b.Kg();c.I(d,e,f);}
function AFe(){Bnp=Fe(0);Bg6=Fe(1);Bnq=Fe(1);Bnr=Fe(1);Bns=Fe(1);Bnt=Fe(1);Bnu=Fe(0);Bnv=S();}
function PB(b,c,d){var jsObj=new Bullet.btVector3(b,c,d);return Bullet.getPointer(jsObj);}
function Rn(b){var vec3=Bullet.wrapPointer(b,Bullet.btVector3);return vec3.x();}
function AAs(b){var vec3=Bullet.wrapPointer(b,Bullet.btVector3);return vec3.y();}
function XN(b){var vec3=Bullet.wrapPointer(b,Bullet.btVector3);return vec3.z();}
function AAo(b,c,d,e){var vec3=Bullet.wrapPointer(b,Bullet.btVector3);vec3.setValue(c,d,e);}
var Xm=D(V);
function BeW(){var a=new Xm();AEK(a);return a;}
function AEK(a){BM(a);}
function AN2(a,b,c,d,e){var f;B2();f=BA(e,Bnl);DQ(b,c,f.eP,f.eO,f.fa,f.fb);}
var Xs=D(V);
function BeY(){var a=new Xs();AWr(a);return a;}
function AWr(a){BM(a);}
function AJJ(a,b,c,d,e){Ce();Fv(b,c,(BA(e,Bmz)).dX);}
var KY=D(Cy);
function Bnw(a){var b=new KY();ZR(b,a);return b;}
function ZR(a,b){Et(a,b);}
function AVx(a,b,c,d){var e;e=a.ka();d.by(e,b-d.ev(e)|0);return a.k.e(b,c,d);}
function AYw(a){return B(551);}
function A7t(a,b){return 0;}
var Xr=D(V);
function BcA(){var a=new Xr();AI7(a);return a;}
function AI7(a){BM(a);}
function AYD(a,b,c,d,e){Ce();Fv(b,c,(BA(e,BmB)).dX);}
var Lm=D();
var Bnx=null;function E1(){E1=N(Lm);ALb();}
function IK(b,c){E1();return b+Bnx.MO((c-b|0)+1|0)|0;}
function HE(b,c){E1();return b+Bnx.Gb()*(c-b);}
function IW(b){var c,d;E1();if(!b)return 1;c=b+(-1)|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function K8(b){E1();return b&&!(b&(b-1|0))?1:0;}
function DF(b){E1();return CH(b)>9.999999974752427E-7?0:1;}
function Dl(b,c){E1();return CH(b-c)>9.999999974752427E-7?0:1;}
function SK(b,c,d){E1();return CH(b-c)>d?0:1;}
function ALb(){Bnx=BcE();}
var ND=D(0);
var L4=D(0);
function Vt(){BJ.call(this);this.rt=0;}
function BbP(a){var b=new Vt();A8b(b,a);return b;}
function A8b(a,b){C2(a);a.bO=2;a.rt=EX(En(b));}
function AQl(a,b,c){var d,e,f;d=b+1|0;e=c.f(b);f=c.f(d);return a.rt!=EX(En(Dh(e,f)))?(-1):2;}
function A_r(a){return (((I()).a(B(423))).a(Mh(Eu(a.rt)))).b();}
function U_(){var a=this;Ir.call(a);a.x8=0;a.uM=0.0;a.wM=0;a.kW=0.0;a.BC=0;a.jx=0;a.iG=0;a.Cc=0;a.DS=0.0;a.A7=0.0;a.oX=0;a.i9=null;a.uU=0;a.q3=0;a.y8=0;a.rV=0;a.yw=0;a.tb=0;a.Fj=0;a.rL=0;a.Ax=0;a.qK=0;a.w_=0;a.cB=null;a.fy=0;a.tr=0.0;a.ts=0.0;a.fA=null;a.tw=null;a.BZ=null;a.ir=0;a.sN=0;}
function Bny(a,b){var c=new U_();Qr(c,a,b);return c;}
function BaR(a){var b=new U_();AFF(b,a);return b;}
function Qr(a,b,c){VA(a,b);a.x8=0;a.uM=360.0;a.wM=1;a.kW=10.0;a.BC=2;a.jx=0;a.Cc=1;a.DS=(-0.10000000149011612);a.A7=10.0;a.oX=1;a.i9=S();a.uU=1;a.q3=1;a.y8=0;a.rV=51;a.tb=47;a.rL=29;a.qK=32;a.fy=(-1);a.fA=S();a.tw=S();a.BZ=b;a.BZ.wY=a;a.cB=c;}
function AFF(a,b){Qr(a,Bfr(),b);}
function AKp(a,b,c,d,e){a.ir=a.ir|1<<d;a.sN=K8(a.ir)?0:1;if(a.sN)a.fy=(-1);else if(a.fy<0&&!(a.jx&&!a.iG)){a.tr=b;a.ts=c;a.fy=e;}return !OQ(a,b,c,d,e)&&a.jx&&!a.iG?0:1;}
function A1E(a,b,c,d,e){a.ir=a.ir&((-1)^1<<d);a.sN=K8(a.ir)?0:1;if(e==a.fy)a.fy=(-1);return !AAw(a,b,c,d,e)&&!a.iG?0:1;}
function AY2(a,b,c,d){if(d==a.x8){((a.fA.M(a.cB.c9)).iC(a.cB.ds)).o=0.0;a.cB.zl(a.i9,a.fA.bU(),c*a.uM);a.cB.zl(a.i9,Bm6,b* -a.uM);}else if(d==a.wM){a.cB.k_((((a.fA.M(a.cB.c9)).iC(a.cB.ds)).bU()).em( -b*a.kW));a.cB.k_((a.tw.M(a.cB.ds)).em( -c*a.kW));if(a.uU)(a.i9.fB(a.fA)).fB(a.tw);}else if(d==a.BC){a.cB.k_((a.fA.M(a.cB.c9)).em(c*a.kW));if(a.q3)a.i9.fB(a.fA);}if(a.oX)a.cB.f6();return 1;}
function AKw(a,b,c,d){var e,f,g,h,i,j;e=VU(a,b,c,d);if(!e&&a.fy>=0){f=b;g=(f-a.tr)/Bim.bo();h=a.ts;i=c;j=(h-i)/Bim.bl();a.tr=f;a.ts=i;return a.Iq(g,j,a.fy);}return e;}
function ASj(a,b,c){return a.y$(c*a.DS*a.kW);}
function A3p(a,b){if(!a.Cc&&a.jx&&!a.iG)return 0;a.cB.k_((a.fA.M(a.cB.c9)).em(b));if(a.y8)a.i9.fB(a.fA);if(a.oX)a.cB.f6();return 1;}
function ASo(a,b){return a.y$(a.A7*b);}
function AEc(a,b){if(b==a.jx)a.iG=1;if(b==a.rV)a.yw=1;else if(b==a.tb)a.Fj=1;else if(b==a.rL)a.Ax=1;else if(b==a.qK)a.w_=1;return 0;}
function A2o(a,b){if(b==a.jx){a.iG=0;a.fy=(-1);}if(b==a.rV)a.yw=0;else if(b==a.tb)a.Fj=0;else if(b==a.rL)a.Ax=0;else if(b==a.qK)a.w_=0;return 0;}
var Gm=D();
var Bnz=null;var BnA=null;var BnB=null;function Eh(){var b;if(Bnz===null){b=new HA;ATo();Of(b,Bij,0);Bnz=b;}return Bnz;}
function TG(){var b;if(BnA===null){b=new HA;A3n();Of(b,Blx,0);BnA=b;}return BnA;}
function X(b,c,d,e,f){var g,h,i,j,k,l,m,n;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=AAz(b)){g=e+f|0;if(g<=AAz(d)){a:{b:{if(b!==d){h=(Ck(b)).gq();i=(Ck(d)).gq();if(h!==null&&i!==null){if(h===i)break b;if(!h.hf()&&!i.hf()){j=b;k=0;g=c;while(k<f){l=j.data;m=g+1|0;n=l[g];if(!i.v0(n)){Nd(b,c,d,e,k);G(Qy());}k=k+1|0;g=m;}Nd(b,c,d,e,f);return;}if(!h.hf())break a;if(i.hf())break b;else break a;}G(Qy());}}Nd(b,c,d,e,f);return;}G(Qy());}}G(C$());}G(APE(B(552)));}
function Nd(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Ea(){return Long_fromNumber(new Date().getTime());}
function AZM(){var b;if(BnB===null){b=Bbn();b.x(B(553),B(554));b.x(B(555),B(556));b.x(B(557),B(383));b.x(B(558),B(13));b.x(B(559),AZJ());b.x(B(560),ARj());b.x(B(561),B(554));b.x(B(562),A$P());BnB=Bbr(b);}}
function ARj(){return B(563);}
function A$P(){return B(383);}
function Gp(b,c){AZM();return BnB.x(b,c);}
function AZJ(){return B(324);}
function S4(){var a=this;C.call(a);a.eU=null;a.mM=null;a.lM=null;a.lA=null;a.ms=null;}
function A6T(){var a=new S4();A8J(a);return a;}
function A8J(a){J(a);a.eU=null;}
function AD_(a,b){a.eU=b.eU;a.mM=b.mM;a.lM=b.lM;a.lA=b.lA;a.ms=b.ms;}
function AFu(a){var b,c;b=O(a.eU===null?0:a.eU.ej);c=CA(Cf(O(811),b),O(a.eU===null?0:a.eU.N9()));c=CA(Cf(O(811),c),O(a.mM===null?0:EE(a.mM)));c=CA(Cf(O(811),c),O(a.lM===null?0:EE(a.lM)));c=CA(Cf(O(811),c),O(a.lA===null?0:G8(a.lA)));c=CA(Cf(O(811),c),O(a.ms===null?0:G8(a.ms)));return Cp(ARp(c,M_(c,32)));}
function Rb(){var a=this;C.call(a);a.OF=null;a.hA=null;a.sp=null;a.rh=0;a.zM=0.0;a.hU=0.0;a.qM=0.0;a.i0=0.0;a.se=0.0;a.e6=0.0;a.l5=0.0;a.iA=0.0;a.kj=0.0;a.xp=0.0;a.eQ=0.0;a.Aa=0.0;a.Dv=0;a.he=null;a.iu=null;a.vv=0.0;a.tL=0.0;a.DA=null;a.wo=null;a.xx=null;}
function Bdt(a,b){var c=new Rb();A4x(c,a,b);return c;}
function A4x(a,b,c){J(a);a.e6=1.0;a.xp=1.0;a.eQ=1.0;a.Aa=1.0;a.he=Y($rt_arraycls(JB),128);a.tL=1.0;a.wo=I5([120,101,97,111,110,115,114,99,117,109,118,119,122]);a.xx=I5([77,78,66,68,67,69,70,75,65,71,72,73,74,76,79,80,81,82,83,84,85,86,87,88,89,90]);a.sp=b;a.rh=c;a.P3(b,c);}
function AGv(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,$$je;if(a.hA!==null)G(DR(B(564)));a.OF=b.Oo();d=BbT(BdJ(b.qz()),512);a:{b:{try{e=d.lf();if(e===null)G(U(B(565)));f=e.ei(e.Ns(B(566))+8|0);g=(f.ce(0,f.Lo(32))).vF(B(23),4);h=g.data;if(h.length!=4)G(U(B(567)));a.zM=BU(h[0]);a.hU=BU(h[1]);a.qM=BU(h[2]);a.i0=BU(h[3]);i=a.zM+a.qM;f=d.lf();if(f===null)G(U(B(568)));j=f.vF(B(56),9);h=j.data;k=h.length;if(k<3)G(U(B(569)));if(!h[1].e2(B(570)))G(U(B(571)));a.se
=BU(h[1].ei(11));if(!h[2].e2(B(572)))G(U(B(573)));c:{l=BU(h[2].ei(5));m=1;if(k<6)n=m;else if(h[5]===null)n=m;else if(!h[5].e2(B(574)))n=m;else{try{n=Bf(1,BU(h[5].ei(6)));m=n;break c;}catch($$e){$$je=R($$e);if($$je instanceof Du){}else{throw $$e;}}n=m;}}a.hA=Y(BN,n);o=0;d:{e:{f:{while(true){if(o>=n)break d;f=d.lf();if(f===null)G(U(B(575)));g:{p=GM(GJ(B(576)),f);if(Ga(p)){q=Gh(p,1);try{r=BU(q);if(r!=o)break f;break g;}catch($$e){$$je=R($$e);if($$je instanceof Du){s=$$je;break e;}else{throw $$e;}}}}f=GM(GJ(B(577)),
f);if(!Ga(f))break;t=Gh(f,1);a.hA.data[o]=(((b.La()).KD(t)).ry()).GF(B(578),B(383));o=o+1|0;}G(U(B(579)));}try{G(U((((I()).a(B(580))).a(q)).b()));}catch($$e){$$je=R($$e);if($$je instanceof Du){s=$$je;}else{throw $$e;}}}G(Jd((((I()).a(B(581))).a(q)).b(),s));}a.iA=0.0;h:{while(true){f=d.lf();if(f===null)break;if(f.e2(B(582)))break h;if(f.e2(B(583)))break h;if(!f.e2(B(584)))continue;u=AFC();v=T7(f,B(585));v.O();v.O();w=BU(v.O());if(w<=0)a.iu=u;else{if(w>65535)continue;a.ym(w,u);}u.e0=w;v.O();u.tf=BU(v.O());v.O();u.tg
=BU(v.O());v.O();u.cv=BU(v.O());v.O();u.cN=BU(v.O());v.O();u.dr=BU(v.O());v.O();if(c)u.jg=BU(v.O());else u.jg= -(u.cN+BU(v.O())|0)|0;v.O();u.gz=BU(v.O());if(v.wu())v.O();i:{if(v.wu())try{u.jX=BU(v.O());break i;}catch($$e){$$je=R($$e);if($$je instanceof Du){}else{throw $$e;}}}if(u.cv>0&&u.cN>0)a.iA=Ju(l+u.jg,a.iA);}}a.iA=a.iA+a.qM;j:{while(true){f=d.lf();if(f===null)break;if(!f.e2(B(586)))break j;v=T7(f,B(585));v.O();v.O();x=BU(v.O());v.O();y=BU(v.O());if(x<0)continue;if(x>65535)continue;if(y<0)continue;if(y
>65535)continue;u=a.it(x&65535);v.O();z=BU(v.O());if(u!==null)u.GD(y,z);}}ba=0;bb=0.0;bc=0.0;bd=0.0;be=0.0;bf=0.0;bg=0.0;bh=0.0;if(f!==null&&f.e2(B(583))){ba=1;v=T7(f,B(585));v.O();v.O();bb=D_(v.O());v.O();bc=D_(v.O());v.O();bd=D_(v.O());v.O();be=D_(v.O());v.O();bf=D_(v.O());v.O();bg=D_(v.O());v.O();bh=D_(v.O());}bi=a.it(32);if(bi===null){bi=AFC();bi.e0=32;bj=a.it(108);if(bj===null)bj=a.CR();bi.gz=bj.gz;a.ym(32,bi);}if(!bi.cv){bi.cv=a.i0+bi.gz+a.hU|0;bi.dr= -a.i0|0;}a.vv=bi.gz;bk=null;h=a.wo.data;k=h.length;bl
=0;k:{while(bl<k){bm=h[bl];bk=a.it(bm);if(bk!==null)break k;bl=bl+1|0;}}if(bk===null)bk=a.CR();a.tL=bk.cN-i;bn=null;h=a.xx.data;n=h.length;k=0;l:{while(k<n){bo=h[k];bn=a.it(bo);if(bn!==null)break l;k=k+1|0;}}if(bn!==null)a.e6=bn.cN;else{h=a.he.data;n=h.length;k=0;while(k<n){m:{bp=h[k];if(bp!==null){bq=bp.data;bl=bq.length;br=0;while(true){if(br>=bl)break m;u=bq[br];if(u!==null&&u.cN&&u.cv)a.e6=Ei(a.e6,u.cN);br=br+1|0;}}}k=k+1|0;}}a.e6=a.e6-i;a.l5=l-a.e6;a.kj= -a.se;if(c){a.l5= -a.l5;a.kj= -a.kj;}if(ba){a.l5
=bb;a.iA=bc;a.kj=bd;a.e6=be;a.se=bf;a.vv=bg;a.tL=bh;}}catch($$e){$$je=R($$e);if($$je instanceof B5){s=$$je;break b;}else{f=$$je;break a;}}L1(d);return;}try{G(Jd((((I()).a(B(587))).dD(b)).b(),s));}catch($$e){$$je=R($$e);f=$$je;}}L1(d);G(f);}
function AVL(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=c.Bb();e=1.0/d.bo();f=1.0/d.bl();g=0.0;h=0.0;i=c.zR;j=c.zU;k=c.Ig();l=c.LF();if(c instanceof KC){m=c;g=m.N1;h=(m.MP-m.OX|0)-m.NZ;}n=b.tf;o=b.tf+b.cv|0;p=b.tg;q=b.tg+b.cN|0;if(g<=0.0)k=o;else{n=n-g;if(n<0.0){b.cv=b.cv+n|0;b.dr=b.dr-n|0;n=0.0;}r=o-g;if(r<=k)k=r;else b.cv=b.cv-(r-k)|0;}if(h<=0.0)l=q;else{p=p-h;if(p<0.0){b.cN=b.cN+p|0;if(b.cN<0)b.cN=0;p=0.0;}r=q-h;if(r<=l)l=r;else{s=r-l;b.cN=b.cN-s|0;b.jg=b.jg+s|0;}}b.vH=i+n*e;b.Bp=i+k*e;if(!a.rh){b.tm=j
+p*f;b.p$=j+l*f;}else{b.p$=j+p*f;b.tm=j+l*f;}}
function ATD(a,b,c){var d,e,f;d=a.he.data;e=b/512|0;f=d[e];if(f===null){d=a.he.data;f=Y(JB,512);d[e]=f;}f.data[b&511]=c;}
function A3S(a){var b,c,d,e,f,g,h,i;b=a.he.data;c=b.length;d=0;a:while(true){if(d>=c)G(U(B(588)));b:{e=b[d];if(e!==null){f=e.data;g=f.length;h=0;while(true){if(h>=g)break b;i=f[h];if(i!==null&&i.cN&&i.cv)break a;h=h+1|0;}}}d=d+1|0;}return i;}
function AG0(a,b){var c;c=a.he.data[b/512|0];if(c===null)return null;return c.data[b&511];}
function AGf(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q;g=e-d|0;if(!g)return;h=a.Dv;i=a.eQ;j=b.bi;k=b.bn;j.xu(g);b.bn.D$(g+1|0);while(true){a:{l=d+1|0;m=c.f(d);if(m!=13){n=a.it(m);if(n===null){if(a.iu===null)break a;n=a.iu;}j.F(n);if(f!==null){o=f.gz;p=(o+f.Kj(m)|0)*i;}else p=n.op?0.0:( -n.dr|0)*i-a.i0;k.Am(p);if(!h)f=n;else if(m!=91)f=n;else if(l>=e)f=n;else if(c.f(l)!=91)f=n;else{l=l+1|0;f=n;}}}if(l>=e)break;d=l;}if(f!==null){q=f.op?f.gz*i:(f.cv+f.dr|0)*i-a.hU;k.Am(q);}}
function ADo(a,b,c){var d,e,f,g,h;d=c-1|0;e=b.P;f=e.data;g=f[d].e0&65535;if(a.jt(g))return d;if(a.xH(g))d=d+(-1)|0;a:{while(d>0){h=f[d].e0&65535;if(a.jt(h))break a;if(a.xH(h))break a;d=d+(-1)|0;}return 0;}return d+1|0;}
function AGL(a,b){var c,d,e,f;if(a.DA===null)return 0;c=a.DA.data;d=c.length;e=0;while(e<d){f=c[e];if(b==f)return 1;e=e+1|0;}return 0;}
function AHs(a,b){switch(b){case 9:case 10:case 13:case 32:break;default:return 0;}return 1;}
var Ny=D();
var BnC=null;function CD(){return BnC;}
function ALV(b){BnC=b;}
function XB(){var a=this;T.call(a);a.xJ=0;a.C6=0;}
function M(a,b){var c=new XB();A$d(c,a,b);return c;}
function A$d(a,b,c){Bo(a);a.xJ=b;a.C6=c;}
function AMe(a){var b;b=(CS()).bF(a.xJ,a.C6);return b;}
function UH(){var a=this;C.call(a);a.fW=0;a.qR=0.0;a.qS=0.0;a.oi=0.0;a.oh=0.0;a.uE=Ba;a.gw=0;a.pC=null;a.pB=null;a.ks=null;}
function Bfj(){var a=new UH();ADv(a);return a;}
function ADv(a){J(a);a.fW=10;a.pC=Ca(a.fW);a.pB=Ca(a.fW);a.ks=Bf2(a.fW);}
function ANd(a,b,c,d){var e;a.qR=b;a.qS=c;a.oi=0.0;a.oh=0.0;a.gw=0;e=0;while(e<a.fW){a.pC.data[e]=0.0;a.pB.data[e]=0.0;a.ks.data[e]=Ba;e=e+1|0;}a.uE=d;}
function AMt(a,b,c,d){var e,f;a.oi=b-a.qR;a.oh=c-a.qS;a.qR=b;a.qS=c;e=D6(d,a.uE);a.uE=d;f=a.gw%a.fW|0;a.pC.data[f]=a.oi;a.pB.data[f]=a.oh;a.ks.data[f]=e;a.gw=a.gw+1|0;}
function A2p(a){var b,c;b=Np(a,a.pC,a.gw);c=Ry(MK(a,a.ks,a.gw))/1.0E9;if(c!==0.0)return b/c;return 0.0;}
function A6i(a){var b,c;b=Np(a,a.pB,a.gw);c=Ry(MK(a,a.ks,a.gw))/1.0E9;if(c!==0.0)return b/c;return 0.0;}
function Np(a,b,c){var d,e,f;d=Bq(a.fW,c);e=0.0;f=0;while(f<d){e=e+b.data[f];f=f+1|0;}return e/d;}
function MK(a,b,c){var d,e,f;d=Bq(a.fW,c);e=Ba;f=0;while(f<d){e=CA(e,b.data[f]);f=f+1|0;}if(!d)return Ba;return E_(e,O(d));}
function ACF(){HJ.call(this);this.jl=null;}
function BdD(a){var b=new ACF();A58(b,a);return b;}
function A58(a,b){a.jl=b;P9(a);}
function A5r(a){if(!a.jl.mJ)a.jl.mJ=a.jl.dV.OK(a.jl.d8.eW,a.jl.d8.eV);}
var Xu=D(T);
function BdA(){var a=new Xu();AFB(a);return a;}
function AFB(a){Bo(a);}
function ATb(a){return (((CS()).bF(48,57)).bF(97,102)).bF(65,70);}
function Zy(){var a=this;C.call(a);a.G2=null;a.EV=null;a.e5=null;a.bJ=null;a.iB=0;a.jy=0;a.o6=0;a.m8=null;a.qQ=null;a.e9=null;}
function BaP(a,b){var c=new Zy();AC$(c,a,b);return c;}
function X$(a,b,c){a.qQ=AAn(a,c);b.By(a.e5.d_(a.o6,LU(a)));b.IK(a.qQ);a.o6=MY(a);return a;}
function AAn(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$$je;if(a.m8!==null&&a.m8.z(b)){if(a.e9===null)return a.qQ;c=I();d=0;while(d<a.e9.df()){c.dD(a.e9.l(d));d=d+1|0;}return c.b();}a.m8=b;e=b.rz();f=I();a.e9=null;g=0;h=0;i=0;a:{b:while(true){j=e.data;k=j.length;if(g>=k){if(a.e9!==null&&h!=f.i())a.e9.h4(f.d_(h,f.i()));return f.b();}if(j[g]==92&&!i){i=1;g=g+1|0;}c:{if(i){if(g>=k)break b;f.U(j[g]);i=0;}else if(j[g]!=36)f.U(j[g]);else{if(a.e9===null)a.e9=SG();d:{try{l=new BN;g=g+1|0;OG(l,e,g,1);m=BU(l);if(h==f.i())break d;a.e9.h4(f.d_(h,
f.i()));h=f.i();break d;}catch($$e){$$je=R($$e);if($$je instanceof B5){break a;}else{throw $$e;}}}try{a.e9.h4(Bbv(a,m));n=Gh(a,m);h=h+n.i()|0;f.a(n);break c;}catch($$e){$$je=R($$e);if($$je instanceof B5){break a;}else{throw $$e;}}}}g=g+1|0;}G(C$());}G(W(B(101)));}
function ABg(a){a.iB=0;a.jy=a.e5.i();a.bJ.tJ(a.e5,a.iB,a.jy);a.o6=0;a.m8=null;a.bJ.hv=(-1);return a;}
function ABI(a,b){return b.By(a.e5.d_(a.o6,a.e5.i()));}
function ACp(a,b){var c;c=A6I();ABg(a);while(Ga(a)){X$(a,c,b);}return (ABI(a,c)).b();}
function Gh(a,b){return a.bJ.BW(b);}
function JJ(a,b){var c,d;c=a.e5.i();if(b>=0&&b<=c){d=AAS(a,b);if(d>=0&&a.bJ.LC()){a.bJ.MH();return 1;}a.bJ.eb=(-1);return 0;}G(Bg(Ji(b)));}
function AAS(a,b){var c;a.bJ.fV();a.bJ.pO(1);a.bJ.G9(b);c=a.EV.cE(b,a.e5,a.bJ);if(c==(-1))a.bJ.d5=1;return c;}
function Ga(a){var b,c;b=a.e5.i();if(!Ph(a))b=a.jy;if(a.bJ.eb>=0&&a.bJ.Cw()==1){a.bJ.eb=a.bJ.pR();if(a.bJ.pR()==a.bJ.wA()){c=a.bJ;c.eb=c.eb+1|0;}return a.bJ.eb<=b&&JJ(a,a.bJ.eb)?1:0;}return JJ(a,a.iB);}
function U7(a,b){return a.bJ.lD(b);}
function Pb(a,b){return a.bJ.pc(b);}
function LU(a){return U7(a,0);}
function MY(a){return Pb(a,0);}
function Ph(a){return a.bJ.lI();}
function AC$(a,b,c){var d,e,f,g,h;J(a);a.iB=(-1);a.jy=(-1);a.G2=b;a.EV=b.rO;a.e5=c;a.iB=0;a.jy=a.e5.i();d=new NU;e=a.iB;f=a.jy;g=VJ(b);h=ABV(b);Sn(d,c,e,f,g,h,SI(b));a.bJ=d;}
var T9=D(BB);
function BcM(){var a=new T9();A46(a);return a;}
function A46(a){CQ(a);}
function ATC(a,b,c,d){var e,f,g,h,i;e=d.J();f=b+1|0;if(f>e){d.d5=1;return (-1);}g=c.f(b);if(BY(g)){h=b+2|0;if(h<=e){i=c.f(f);if(GA(g,i))return a.k.e(h,c,d);}}return a.k.e(f,c,d);}
function AHw(a){return B(589);}
function AXi(a,b){a.k=b;}
function A4Z(a){return (-2147483602);}
function AXf(a,b){return 1;}
function ZP(){Q.call(this);this.NW=null;}
function Bb9(a){var b=new ZP();AQA(b,a);return b;}
function AQA(a,b){a.NW=b;Be(a);}
function ASf(a,b){return Uh(b);}
function O4(){var a=this;FN.call(a);a.An=0.0;a.zb=null;}
function Bc8(){var a=new O4();A0U(a);return a;}
function A0U(a){Lw(a);a.An=67.0;a.zb=S();}
function AGr(a){a.p_(1);}
function AQz(a,b){var c;c=a.kx/a.me;a.jA.KE(CH(a.la),CH(a.jP),a.An,c);a.hs.B5(a.cq,(a.zb.M(a.cq)).fB(a.c9),a.ds);a.eK.ch(a.jA);G9(a.eK.c,a.hs.c);if(b){a.hS.ch(a.eK);MZ(a.hS.c);a.r3.AL(a.hS);}}
function US(){C.call(this);this.CC=null;}
function BaI(a){var b=new US();A1s(b,a);return b;}
function A1s(a,b){J(a);a.CC=b;}
function A9c(a){A2z(a.CC);}
var VH=D(C4);
function A4F(a){var b=new VH();AG6(b,a);return b;}
function AG6(a,b){AAu(a,b);}
function AK2(a,b){return a.d1.p(EX(En(b)));}
function ATr(a){return ((((I()).a(B(335))).a(!a.rH?B(56):B(57))).a(a.d1.b())).b();}
var Vh=D(T);
function A_T(){var a=new Vh();APJ(a);return a;}
function APJ(a){Bo(a);}
function AUJ(a){var b;b=Bds(a);b.be=1;return b;}
function MG(){var a=this;BB.call(a);a.gr=null;a.u0=null;a.k2=0;}
function A83(a,b){var c=new MG();AVn(c,a,b);return c;}
function AVn(a,b,c){CQ(a);a.gr=b;a.k2=c;}
function AMD(a,b){a.k=b;}
function HB(a){if(a.u0===null)a.u0=Mh(a.gr);return a.u0;}
function AP6(a){return (((I()).a(B(590))).a(HB(a))).b();}
function ADh(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;e=d.J();f=0;g=Bc(3);h=(-1);i=(-1);if(b>=e)return (-1);j=b+1|0;k=c.f(b);l=AG7(k);if(l!==null){m=l.data;n=0;if(m.length!=a.k2)return (-1);while(true){if(n>=a.k2)return a.k.e(j,c,d);if(m[n]!=a.gr.data[n])break;n=n+1|0;}return (-1);}o=g.data;o[f]=k;p=k-4352|0;if(p>=0&&p<19){if(j<e){k=c.f(j);h=k-4449|0;}if(h>=0&&h<21){q=j+1|0;o[1]=k;if(q<e){k=c.f(q);i=k-4519|0;}if(i>=0&&i<28){r=q+1|0;o[2]=k;r=a.k2==3&&o[0]==a.gr.data[0]&&o[1]==a.gr.data[1]&&o[2]==a.gr.data[2]
?a.k.e(r,c,d):(-1);return r;}r=a.k2==2&&o[0]==a.gr.data[0]&&o[1]==a.gr.data[1]?a.k.e(q,c,d):(-1);return r;}return (-1);}return (-1);}
function AXg(a,b){var c,d;a:{if(b instanceof MG){c=b;if(!(HB(c)).z(HB(a))){d=0;break a;}}d=1;}return d;}
function ARG(a,b){return 1;}
var Vb=D(T);
function Bbf(){var a=new Vb();A4j(a);return a;}
function A4j(a){Bo(a);}
function A1f(a){return (((CS()).bF(33,64)).bF(91,96)).bF(123,126);}
function Kz(){var a=this;C.call(a);a.fw=null;a.dQ=null;a.r8=0;a.KQ=0;a.uq=0;a.kZ=0;a.p5=0;a.tC=0;a.d4=null;}
var BnD=null;function AIT(){AIT=N(Kz);A_j();}
function A2E(a,b,c){var d=new Kz();XF(d,a,b,c);return d;}
function XF(a,b,c,d){AIT();J(a);a.kZ=0;a.p5=0;a.tC=(-1);a.d4=G$();a.KQ=b;a.fw=d;a.dQ=HX(Cg(a.fw.cQ/4|0,c));a.dQ.db();a.r8=Biq.i5();a.uq=!b?35048:35044;QY(a);}
function AWw(a){return a.fw;}
function ARK(a){return (CV(a.dQ)*4|0)/a.fw.cQ|0;}
function Wl(a){if(a.p5){Biq.fD(34962,BD(a.dQ),a.dQ,a.uq);a.kZ=0;}}
function AWP(a,b,c,d){a.kZ=1;Ob(b,a.dQ,d,c);a.dQ.cZ(0);a.dQ.cm(d);Wl(a);}
function AQ7(a,b,c){var d;d=Bir;d.QJ(a.tC);ABi(a,b,c);ABm(a,d);a.p5=1;}
function ABi(a,b,c){var d,e,f,g,h,i;d=!a.d4.bS?0:1;a:{e=CU(a.fw);if(d){if(c===null){f=0;while(d&&f<e){g=CB(a.fw,f);h=b.lZ(g.es);d=h!=a.d4.b2(f)?0:1;f=f+1|0;}}else{i=c.data;d=i.length!=a.d4.bS?0:1;f=0;while(d){if(f>=e)break a;d=i[f]!=a.d4.b2(f)?0:1;f=f+1|0;}}}}b:{if(!d){Bip.c$(34962,a.r8);UU(a,b);a.d4.K();f=0;while(true){if(f>=e)break b;g=CB(a.fw,f);if(c!==null){i=c.data;a.d4.iY(i[f]);}else a.d4.iY(b.lZ(g.es));h=a.d4.b2(f);if(h>=0){b.lT(h);b.id(h,g.cK,g.hT,g.im,a.fw.cQ,g.cU);}f=f+1|0;}}}}
function UU(a,b){var c,d,e;if(a.d4===null)return;c=CU(a.fw);d=0;while(d<c){e=a.d4.b2(d);if(e>=0)b.tP(e);d=d+1|0;}}
function ABm(a,b){if(a.kZ){b.c$(34962,a.r8);a.dQ.cm(BD(a.dQ));b.fD(34962,BD(a.dQ),a.dQ,a.uq);a.kZ=0;}}
function AHC(a,b,c){var d;d=Bir;d.QJ(0);a.p5=0;}
function QY(a){AIT();BnD.c1();Bir.U9(1,BnD);a.tC=BnD.Li();}
function A_j(){BnD=Fk(1);}
var QO=D();
function ATy(b){$rt_putStderr(b);}
function A7$(b){$rt_putStdout(b);}
function Hh(){var a=this;C.call(a);a.bi=null;a.bn=null;a.dh=0.0;a.iL=0.0;a.j7=0.0;a.j2=null;}
function BnE(){var a=new Hh();A0z(a);return a;}
function A0z(a){J(a);a.bi=Bp();a.bn=Sz();a.j2=D2();}
function ALv(a){a.bi.K();a.bn.K();a.j7=0.0;}
function AEp(a){var b,c,d,e,f;b=Gf(a.bi.h+32|0);c=a.bi;d=0;e=c.h;while(d<e){f=c.l(d);b.U(f.e0&65535);d=d+1|0;}b.a(B(591));b.dD(a.j2);b.a(B(438));b.cD(a.dh);b.a(B(438));b.cD(a.iL);b.a(B(438));b.cD(a.j7);return b.b();}
var Mr=D(Dn);
function SV(){var a=this;BZ.call(a);a.of=null;a.IU=null;}
function BcV(a,b){var c=new SV();A8q(c,a,b);return c;}
function A8q(a,b,c){a.IU=b;a.of=c;C7(a);}
function A$1(a,b){a.of.ek(b);}
function AMd(a,b){a.of.ck(b);}
function AMU(a,b,c){return a.of.ct(b,null);}
function AK0(a,b,c){return a.hY(b,c);}
function AA_(){BZ.call(this);this.Oi=null;}
function Ba9(a){var b=new AA_();AX_(b,a);return b;}
function AX_(a,b){a.Oi=b;C7(a);}
function AUr(a,b){}
function AHo(a,b){}
function A9f(a,b,c){return 0;}
var FK=D(0);
function SR(){var a=this;C.call(a);a.nK=null;a.ue=null;a.n8=null;a.q0=null;}
function BbN(a,b,c,d){var e=new SR();AJm(e,a,b,c,d);return e;}
function AJm(a,b,c,d,e){a.q0=b;a.nK=c;a.ue=d;a.n8=e;J(a);}
function AIw(a,b){var c,d;if(a.nK.readyState==4){if(a.nK.status!=200)a.ue.ck(a.n8);else{if(NQ(a.q0))(Eh()).gh((((I()).a(B(592))).a(a.n8)).b());c=a.nK.response;d=(DV()).QV(c);a.ue.ct(a.n8,Bfn(c,d));}a.q0.eu();}}
function A1C(a,b){a.dU(b);}
function SQ(){var a=this;BZ.call(a);a.mB=null;a.qw=null;a.xh=0;a.Dq=null;a.m4=null;}
function Bgc(a,b,c,d,e){var f=new SQ();ARB(f,a,b,c,d,e);return f;}
function ARB(a,b,c,d,e,f){a.m4=b;a.mB=c;a.qw=d;a.xh=e;a.Dq=f;C7(a);}
function A_P(a,b){a.mB.ek(b);}
function A$L(a,b){a.mB.ck(b);}
function AE8(a,b,c){var d,e,f;d=(Qc(a.m4)).Qb();if(a.qw!==null){e=a.qw;d.setAttribute("crossOrigin",$rt_ustr(e));}a.m4.nJ();AGg(d,BcP(a,b,d));if(!a.xh){f=$rt_ustr(b);d.src=f;}else{f=$rt_ustr((((((I()).a(B(593))).a(a.Dq)).a(B(594))).a(SD(c))).b());d.src=f;}return 0;}
function AS7(a,b,c){return a.hY(b,c);}
function SP(){var a=this;C.call(a);a.y_=null;a.Go=null;}
function Bdo(a,b){var c=new SP();AVX(c,a,b);return c;}
function AVX(a,b,c){a.Go=b;a.y_=c;J(a);}
function A71(a,b){a.y_.ek(b.loaded);}
function AXT(a,b){a.dU(b);}
var Lq=D();
var BhV=null;function Bel(){Bel=N(Lq);AVt();}
function AVt(){BhV=Bc((Mj()).data.length);BhV.data[BC(Bj0)]=1;BhV.data[BC(Bj1)]=2;BhV.data[BC(Bj2)]=3;BhV.data[BC(Bj3)]=4;BhV.data[BC(Bj4)]=5;}
function U5(){var a=this;C.call(a);a.pZ=null;a.j3=null;a.AC=null;a.p4=null;a.oA=null;a.sk=null;a.M$=null;}
function BaT(){var a=new U5();ADr(a);return a;}
function ADr(a){J(a);a.pZ=Bp();a.j3=Bp();a.AC=Bp();a.p4=Bp();a.oA=Bp();a.sk=Bp();a.M$=DG();}
function A8_(a,b){if(!a.sk.iv(b,1))a.sk.F(b);}
function SX(){var a=this;C.call(a);a.nu=null;a.tG=null;a.n7=null;a.tA=null;}
function Bcx(a,b,c,d){var e=new SX();AI$(e,a,b,c,d);return e;}
function AI$(a,b,c,d,e){a.tA=b;a.nu=c;a.tG=d;a.n7=e;J(a);}
function AZj(a,b){if(a.nu.readyState==4){if(a.nu.status!=200)a.tG.ck(a.n7);else{if(NQ(a.tA))(Eh()).gh((((I()).a(B(592))).a(a.n7)).b());a.tG.ct(a.n7,$rt_str(a.nu.responseText));}a.tA.eu();}}
function AIo(a,b){a.dU(b);}
function Qw(){Bt.call(this);this.zD=0;}
function A8H(a){var b=new Qw();AK6(b,a);return b;}
function AK6(a,b){Co(a);a.zD=b;}
function AWX(a,b,c,d){var e,f,g,h,i;e=b<d.J()?c.f(b):32;f=!b?32:c.f(b-1|0);g=!d.lI()?d.dI():0;h=e!=32&&!M2(a,e,b,g,c)?0:1;i=f!=32&&!M2(a,f,b-1|0,g,c)?0:1;return h^i^a.zD?(-1):a.k.e(b,c,d);}
function AXc(a,b){return 0;}
function A_v(a){return B(595);}
function M2(a,b,c,d,e){var f;if(!M$(b)&&b!=95){a:{if(F_(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=e.f(c);if(M$(f))return 0;if(F_(f)!=6)return 1;}}return 1;}return 0;}
function Fs(){var a=this;C.call(a);a.Eo=null;a.Ep=null;a.Er=null;a.Es=null;a.q_=null;a.gk=null;a.bw=null;a.bt=null;a.gM=0;a.ph=0;a.nf=0;a.ga=0;a.jU=0;a.hd=0;a.uG=0;a.t6=0;a.d$=0;a.tp=0;a.jm=0;a.fG=0;a.c2=null;a.k8=null;a.hH=null;a.rx=0;a.gi=0;a.pn=0.0;a.pG=0.0;a.n3=0.0;a.ow=0.0;a.lS=0;a.cs=null;a.oL=0;a.ov=null;a.jS=null;a.j1=null;a.mE=0;a.B$=null;}
var BnF=null;var BnG=null;var BnH=null;var BnI=null;function LB(){LB=N(Fs);AZ3();}
function BcD(){var a=new Fs();Vx(a);return a;}
function Vx(a){LB();J(a);a.Eo=CM();a.Ep=CM();a.Er=CM();a.Es=CM();a.q_=D2();a.bw=Sz();a.bt=AVc();a.k8=Bp();a.hH=A5R(BiZ);a.rx=0;a.pn=0.0;a.pG=1.0;a.n3=0.0;a.ow=1.0;a.lS=0;a.oL=0;a.ov=BL();a.jS=Pi();a.j1=AMi();a.mE=(-1);a.B$=S();}
function RP(b){var c,d,e,f;LB();c=Bp();if(Z(Br(b,O(1)),O(1)))c.F(EB(1,3,B(466)));if(Z(Br(b,O(2)),O(2)))c.F(EB(2,4,B(467)));if(Z(Br(b,O(4)),O(4)))c.F(EB(4,4,B(467)));if(Z(Br(b,O(8)),O(8)))c.F(EB(8,3,B(596)));if(Z(Br(b,O(16)),O(16)))c.F(EB(16,2,B(468)));d=Y(Fc,c.h);e=0;while(true){f=d.data;if(e>=f.length)break;f[e]=c.l(e);e=e+1|0;}return A0X(d);}
function ATS(a,b){a.Q5(b,(-1));}
function A05(a,b,c){var d,e;if(a.gk!==null)G(Qg(B(545)));a.gk=b;a.bw.K();a.bt.K();a.k8.K();a.ph=0;a.mE=(-1);a.nf=0;a.c2=null;a.gM=b.cQ/4|0;if(!(a.cs!==null&&a.cs.data.length>=a.gM))a.cs=Ca(a.gM);d=DZ(b,1);if(d===null)G(U(B(597)));a.ga=d.cU/4|0;a.jU=d.cK;e=DZ(b,8);a.hd=e===null?(-1):e.cU/4|0;e=DZ(b,256);a.uG=e===null?(-1):e.cU/4|0;e=DZ(b,128);a.t6=e===null?(-1):e.cU/4|0;e=DZ(b,2);a.d$=e===null?(-1):e.cU/4|0;a.tp=e!==null?e.cK:0;e=DZ(b,4);a.jm=e===null?(-1):e.cU/4|0;e=DZ(b,16);a.fG=e===null?(-1):e.cU/4|0;a.xV(null);a.x_(null);a.Dk(null);a.gi
=c;a.j1.wS();}
function LI(a){if(a.c2!==null){a.j1.MM(a.c2.f1);(a.j1.GI(a.c2.g1)).em(0.5);a.c2.iV=a.c2.g1.IP();a.j1.wS();a.c2.hm=a.nf;a.c2.g2=a.bt.c3-a.nf|0;a.nf=a.bt.c3;a.c2=null;}}
function AKh(a,b,c){return a.Mc(b,c,A8N());}
function AGE(a,b,c,d){if(a.gk===null)G(Qg(B(546)));LI(a);a.c2=d;a.c2.pP=b;a.c2.hZ=c;a.gi=c;a.k8.F(a.c2);a.xV(null);a.x_(null);a.Dk(null);return a.c2;}
function ALo(a,b){var c,d;LI(a);if(a.gk===null)G(U(B(546)));if(!NW(a.gk,b.gS()))G(U(B(598)));if(Cg(b.v8(),a.gM)<a.bw.Z)G(U((((((((I()).a(B(599))).j(b.v8())).a(B(600))).j(a.gM)).a(B(601))).j(a.bw.Z)).b()));if(b.xf()<a.bt.c3)G(U((((((I()).a(B(602))).j(b.xf())).a(B(601))).j(a.bt.c3)).b()));b.FO(a.bw.R,0,a.bw.Z);b.OO(a.bt.hM,0,a.bt.c3);c=a.k8.bZ();while(c.bC()){d=c.bz();d.b7=b;}a.k8.K();a.gk=null;a.bw.K();a.bt.K();return b;}
function AEm(a){return a.Lt(BeD(1,a.bw.Z/a.gM|0,a.bt.c3,a.gk));}
function AGT(a){return a.gk;}
function AQ1(a){return a.gi;}
function AV0(a,b){var c,d;c=a.hH;d=b===null?0:1;a.rx=d;if(!d){Bv();b=BiZ;}c.eR(b);}
function AED(a,b,c,d,e){a.pn=b;a.n3=c;a.pG=d-b;a.ow=e-c;a.lS=DF(b)&&DF(c)&&Dl(d,1.0)&&Dl(e,1.0)?0:1;}
function AHD(a,b){if(b!==null){a.lS=1;a.M0(b.RQ(),b.Sp(),b.Ty(),b.Rq());}else{a.lS=0;a.n3=0.0;a.pn=0.0;a.ow=1.0;a.pG=1.0;}}
function AO9(a,b){a.oL=b===null?0:1;if(!a.oL){a.ov.fx();a.jS.Ay();}else{a.ov.ch(b);((a.jS.D_(b)).CU()).AF();}}
function AIB(a,b){a.bw.D$(Cg(a.gM,b));}
function AXR(a,b){a.bt.Pe(b);}
function AN8(a,b){if(!a.gi)a.hn(4*b|0);else if(a.gi!=1)a.hn(6*b|0);else a.hn(8*b|0);}
function AJy(a){return a.mE<<16>>16;}
function AC1(b,c,d,e){var f,g,h,i,j,k,l;LB();if(d>2){f=b.data;g=BnH;h=f[c];i=c+1|0;j=f[i];k=c+2|0;(g.I(h,j,f[k])).kN(e);f[c]=BnH.n;f[i]=BnH.o;f[k]=BnH.q;}else if(d<=1){f=b.data;f[c]=((BnH.I(f[c],0.0,0.0)).kN(e)).n;}else{f=b.data;g=BnH;l=f[c];k=c+1|0;(g.I(l,f[k],0.0)).kN(e);f[c]=BnH.n;f[k]=BnH.o;}}
function Iz(b,c,d,e){var f,g,h,i,j,k;LB();if(d>2){f=b.data;g=BnH;h=f[c];i=c+1|0;j=f[i];k=c+2|0;((g.I(h,j,f[k])).qX(e)).bU();f[c]=BnH.n;f[i]=BnH.o;f[k]=BnH.q;}else if(d<=1){f=b.data;f[c]=(((BnH.I(f[c],0.0,0.0)).qX(e)).bU()).n;}else{f=b.data;g=BnH;j=f[c];i=c+1|0;((g.I(j,f[i],0.0)).qX(e)).bU();f[c]=BnH.n;f[i]=BnH.o;}}
function RV(a,b,c){var d,e,f,g,h,i,j;d=a.bw.Z;a.bw.rJ(b,c,a.gM);e=a.ph;a.ph=e+1|0;a.mE=e;if(a.oL){AC1(a.bw.R,d+a.ga|0,a.jU,a.ov);if(a.hd>=0)Iz(a.bw.R,d+a.hd|0,3,a.jS);if(a.uG>=0)Iz(a.bw.R,d+a.uG|0,3,a.jS);if(a.t6>=0)Iz(a.bw.R,d+a.t6|0,3,a.jS);}f=a.bw.R.data[d+a.ga|0];g=a.jU<=1?0.0:a.bw.R.data[(d+a.ga|0)+1|0];h=a.jU<=2?0.0:a.bw.R.data[(d+a.ga|0)+2|0];a.j1.NS(f,g,h);if(a.rx){if(a.d$>=0){i=a.bw.R.data;j=d+a.d$|0;i[j]=i[j]*a.hH.s;i=a.bw.R.data;j=(d+a.d$|0)+1|0;i[j]=i[j]*a.hH.r;i=a.bw.R.data;j=(d+a.d$|0)+2|0;i[j]
=i[j]*a.hH.t;if(a.tp>3){i=a.bw.R.data;j=(d+a.d$|0)+3|0;i[j]=i[j]*a.hH.G;}}else if(a.jm>=0){Zu(a.q_,a.bw.R.data[d+a.jm|0]);a.bw.R.data[d+a.jm|0]=(a.q_.Jk(a.hH)).ny();}}if(a.lS&&a.fG>=0){a.bw.R.data[d+a.fG|0]=a.pn+a.pG*a.bw.R.data[d+a.fG|0];a.bw.R.data[(d+a.fG|0)+1|0]=a.n3+a.ow*a.bw.R.data[(d+a.fG|0)+1|0];}}
function AYQ(a,b,c,d,e){if(a.ph>65535)G(U(B(603)));a.cs.data[a.ga]=b.n;if(a.jU>1)a.cs.data[a.ga+1|0]=b.o;if(a.jU>2)a.cs.data[a.ga+2|0]=b.q;if(a.hd>=0){if(c===null)c=(a.B$.M(b)).bU();a.cs.data[a.hd]=c.n;a.cs.data[a.hd+1|0]=c.o;a.cs.data[a.hd+2|0]=c.q;}if(a.d$>=0){if(d===null){Bv();d=BiZ;}a.cs.data[a.d$]=d.s;a.cs.data[a.d$+1|0]=d.r;a.cs.data[a.d$+2|0]=d.t;if(a.tp>3)a.cs.data[a.d$+3|0]=d.G;}else if(a.jm>0){if(d===null){Bv();d=BiZ;}a.cs.data[a.jm]=d.ny();}if(e!==null&&a.fG>=0){a.cs.data[a.fG]=e.eW;a.cs.data[a.fG
+1|0]=e.eV;}RV(a,a.cs,0);return a.mE<<16>>16;}
function AMG(a,b){return a.KZ(!b.q4?null:b.mZ,!b.t5?null:b.pj,!b.rj?null:b.oI,!b.pr?null:b.ke);}
function A1K(a,b,c,d,e){a.hn(4);a.bt.cd(b);a.bt.cd(c);a.bt.cd(d);a.bt.cd(e);}
function A1Q(a,b,c,d,e,f,g){a.hn(6);a.bt.cd(b);a.bt.cd(c);a.bt.cd(d);a.bt.cd(e);a.bt.cd(f);a.bt.cd(g);}
function AW9(a,b,c,d,e,f,g,h,i){a.hn(8);a.bt.cd(b);a.bt.cd(c);a.bt.cd(d);a.bt.cd(e);a.bt.cd(f);a.bt.cd(g);a.bt.cd(h);a.bt.cd(i);}
function AO1(a,b,c,d,e){if(a.gi==4)a.OE(b,c,d,d,e,b);else if(a.gi==1)a.ER(b,c,c,d,d,e,e,b);else{if(a.gi)G(U(B(604)));a.Hq(b,c,d,e);}}
function A6Q(a,b,c,d,e){a.up(4);a.d2(a.dH(b),a.dH(c),a.dH(d),a.dH(e));}
function ALJ(a,b,c,d,e,f){var g,h,i,j,k;g=(a.Eo.dK(b,f,null,null)).n6(0.0,1.0);h=(a.Ep.dK(c,f,null,null)).n6(1.0,1.0);i=a.Er;j=null;k=null;i=(i.dK(d,f,j,k)).n6(1.0,0.0);k=(a.Es.dK(e,f,null,null)).n6(0.0,0.0);a.NK(g,h,i,k);}
function AHt(a,b,c,d){A6L(a,b,c,d);}
function AZ3(){BnF=AVc();BnG=Sz();BnH=S();BnI=null;}
function Hb(){BH.call(this);this.PW=null;}
var BnJ=Ba;function Bb8(){Bb8=N(Hb);AI4();}
function AI4(){BnJ=BR(B(605));}
function SW(){var a=this;C.call(a);a.lu=null;a.ut=null;a.or=null;a.pE=null;}
function Bdc(a,b,c,d){var e=new SW();A5I(e,a,b,c,d);return e;}
function A5I(a,b,c,d,e){a.pE=b;a.lu=c;a.ut=d;a.or=e;J(a);}
function AQy(a,b){var c,d,e,f,g,h;if(a.lu.readyState==4){c=1;if(a.lu.status!=200)a.ut.ck(a.or);else{if(NQ(a.pE))(Eh()).gh((((I()).a(B(606))).a(a.or)).b());d=a.lu.response;e=(Qc(a.pE)).hu();f=e.pg();g=f.createElement("script");h=f.createTextNode(d);g.appendChild(h);f.body.appendChild(g);c=a.ut.ct(a.or,$rt_str(a.lu.responseText))?0:1;}if(c)a.pE.eu();}}
function AZE(a,b){a.dU(b);}
var Jc=D(T);
function Bcr(){var a=new Jc();Rr(a);return a;}
function Rr(a){Bo(a);}
function YX(a){return ((CS()).bF(9,13)).cG(32);}
var Po=D(DX);
function Bfe(){var a=new Po();AOl(a);return a;}
function AOl(a){Jh(a);}
var Pp=D(DX);
function Ba6(){var a=new Pp();A08(a);return a;}
function A08(a){Jh(a);}
function Y9(a){return S();}
function AL8(a){return Y9(a);}
var AAH=D();
function Ob(b,c,d,e){var f;f=AQs(c);f.c1();c.cZ(0);f.wB(b,e,d);c.cZ(0);if(!(c instanceof Ft))c.cm(d);else c.cm(d<<2);}
function AQs(b){var c;c=null;if(b instanceof Ft)c=b.sR();else if(b instanceof DW)c=b;if(c!==null)return c;G(U(B(607)));}
function HX(b){var c;if(!HY())return AVr(Ca(b));c=FV(b*4|0);FH(c,EV());return c.sR();}
function MM(b){var c;if(!HY())return Ht(Cj(b));c=FV(b);FH(c,EV());return c;}
function AAU(b){var c;if(!HY())return A3T(MX(b));c=FV(b*2|0);FH(c,EV());return c.v7();}
function Fk(b){var c;if(!HY())return A0O(Bc(b));c=FV(b*4|0);FH(c,EV());return c.yL();}
var KO=D(0);
var NN=D(0);
var Kd=D(0);
var Pk=D();
function AMq(a,b,c){a.WH($rt_str(b),Gk(c,"handleEvent"));}
function AMV(a,b,c){a.VU($rt_str(b),Gk(c,"handleEvent"));}
function AEN(a,b){return a.Ms(b);}
function AOm(a,b,c,d){a.Rt($rt_str(b),Gk(c,"handleEvent"),d?1:0);}
function ASv(a,b){return !!a.WK(b);}
function AGd(a){return a.Pb();}
function ADw(a,b,c,d){a.SP($rt_str(b),Gk(c,"handleEvent"),d?1:0);}
function YE(){var a=this;C.call(a);a.gT=null;a.FM=null;}
function Pi(){var a=new YE();ALX(a);return a;}
function ALX(a){J(a);a.gT=Ca(9);a.FM=Ca(9);a.Ay();}
function A4X(a){var b,c;b=a.gT;c=b.data;c[0]=1.0;c[1]=0.0;c[2]=0.0;c[3]=0.0;c[4]=1.0;c[5]=0.0;c[6]=0.0;c[7]=0.0;c[8]=1.0;return a;}
function ALg(a){var b,c;b=a.gT;c=b.data;return c[0]*c[4]*c[8]+c[3]*c[7]*c[2]+c[6]*c[1]*c[5]-c[0]*c[7]*c[5]-c[3]*c[1]*c[8]-c[6]*c[4]*c[2];}
function A5X(a){var b,c,d,e,f,g;b=a.H2();if(b===0.0)G(U(B(608)));c=1.0/b;d=a.FM;e=d.data;f=a.gT;g=f.data;e[0]=g[4]*g[8]-g[5]*g[7];e[1]=g[2]*g[7]-g[1]*g[8];e[2]=g[1]*g[5]-g[2]*g[4];e[3]=g[5]*g[6]-g[3]*g[8];e[4]=g[0]*g[8]-g[2]*g[6];e[5]=g[2]*g[3]-g[0]*g[5];e[6]=g[3]*g[7]-g[4]*g[6];e[7]=g[1]*g[6]-g[0]*g[7];e[8]=g[0]*g[4]-g[1]*g[3];g[0]=c*e[0];g[1]=c*e[1];g[2]=c*e[2];g[3]=c*e[3];g[4]=c*e[4];g[5]=c*e[5];g[6]=c*e[6];g[7]=c*e[7];g[8]=c*e[8];return a;}
function A_s(a,b){var c,d;c=a.gT;d=c.data;d[0]=b.c.data[0];d[1]=b.c.data[1];d[2]=b.c.data[2];d[3]=b.c.data[4];d[4]=b.c.data[5];d[5]=b.c.data[6];d[6]=b.c.data[8];d[7]=b.c.data[9];d[8]=b.c.data[10];return a;}
function AUz(a){var b,c,d,e,f,g,h,i;b=a.gT;c=b.data;d=c[1];e=c[2];f=c[3];g=c[5];h=c[6];i=c[7];c[3]=d;c[6]=e;c[1]=f;c[7]=g;c[2]=h;c[5]=i;return a;}
function T$(){var a=this;G4.call(a);a.Cl=null;a.sI=null;a.xF=null;a.Cb=null;}
function BaF(a,b){var c=new T$();ARF(c,a,b);return c;}
function ARF(a,b,c){R3(a);a.Cl=b;a.sI=c;a.xF=A_6();a.Cb=Beq();}
function A1X(a,b){var c,d,e;c=AHE();d=!!b.xs;c.alpha=d;d=!!b.Fy;c.antialias=d;d=!!b.AK;c.stencil=d;d=!!b.Ea;c.premultipliedAlpha=d;d=!!b.FW;c.preserveDrawingBuffer=d;e=a.sI;d=e.getContext("webgl",c);return d;}
function A1G(a){return a.sI;}
function AUd(a){return AZp();}
function A3R(a){return a.Cl;}
function A1v(a){var b;b=(a.hu()).pg();return b.createElement("img");}
function A8Q(a){return new XMLHttpRequest();}
function A$x(a){return Be2();}
function A97(a){return a.xF;}
function AU3(a){return a.Cb;}
var Pg=D();
function Cu(){C.call(this);this.c=null;}
var BnK=null;var BnL=null;var BnM=null;var BnN=null;var BnO=null;var BnP=null;var BnQ=null;var BnR=null;var BnS=null;var BnT=null;var BnU=null;function CC(){CC=N(Cu);AVK();}
function BL(){var a=new Cu();Tm(a);return a;}
function Tm(a){CC();J(a);a.c=Ca(16);a.c.data[0]=1.0;a.c.data[5]=1.0;a.c.data[10]=1.0;a.c.data[15]=1.0;}
function A_D(a,b){return a.Ey(b.c);}
function AFG(a,b){var c;c=b.data;a.c.data[0]=c[0];a.c.data[1]=c[1];a.c.data[2]=c[2];a.c.data[3]=c[3];a.c.data[4]=c[4];a.c.data[5]=c[5];a.c.data[6]=c[6];a.c.data[7]=c[7];a.c.data[8]=c[8];a.c.data[9]=c[9];a.c.data[10]=c[10];a.c.data[11]=c[11];a.c.data[12]=c[12];a.c.data[13]=c[13];a.c.data[14]=c[14];a.c.data[15]=c[15];return a;}
function A98(a,b){return a.HZ(b.dl,b.dj,b.dk,b.d7);}
function AZ7(a,b,c,d,e){return a.NJ(0.0,0.0,0.0,b,c,d,e);}
function A6E(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t;i=e*2.0;j=f*2.0;k=g*2.0;l=h*i;m=h*j;n=h*k;o=e*i;p=e*j;q=e*k;r=f*j;s=f*k;t=g*k;a.c.data[0]=1.0-(r+t);a.c.data[4]=p-n;a.c.data[8]=q+m;a.c.data[12]=b;a.c.data[1]=p+n;a.c.data[5]=1.0-(o+t);a.c.data[9]=s-l;a.c.data[13]=c;a.c.data[2]=q-m;a.c.data[6]=s+l;a.c.data[10]=1.0-(o+r);a.c.data[14]=d;a.c.data[3]=0.0;a.c.data[7]=0.0;a.c.data[11]=0.0;a.c.data[15]=1.0;return a;}
function AWK(a,b,c,d){return a.JV(b.n,b.o,b.q,c.dl,c.dj,c.dk,c.d7,d.n,d.o,d.q);}
function ATs(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o,p,q,r,s,t,u,v,w;l=e*2.0;m=f*2.0;n=g*2.0;o=h*l;p=h*m;q=h*n;r=e*l;s=e*m;t=e*n;u=f*m;v=f*n;w=g*n;a.c.data[0]=i*(1.0-(u+w));a.c.data[4]=j*(s-q);a.c.data[8]=k*(t+p);a.c.data[12]=b;a.c.data[1]=i*(s+q);a.c.data[5]=j*(1.0-(r+w));a.c.data[9]=k*(v-o);a.c.data[13]=c;a.c.data[2]=i*(t-p);a.c.data[6]=j*(v+o);a.c.data[10]=k*(1.0-(r+u));a.c.data[14]=d;a.c.data[3]=0.0;a.c.data[7]=0.0;a.c.data[11]=0.0;a.c.data[15]=1.0;return a;}
function ANb(a,b){CC();BnK.data[0]=a.c.data[0]*b.c.data[0]+a.c.data[4]*b.c.data[1]+a.c.data[8]*b.c.data[2]+a.c.data[12]*b.c.data[3];BnK.data[4]=a.c.data[0]*b.c.data[4]+a.c.data[4]*b.c.data[5]+a.c.data[8]*b.c.data[6]+a.c.data[12]*b.c.data[7];BnK.data[8]=a.c.data[0]*b.c.data[8]+a.c.data[4]*b.c.data[9]+a.c.data[8]*b.c.data[10]+a.c.data[12]*b.c.data[11];BnK.data[12]=a.c.data[0]*b.c.data[12]+a.c.data[4]*b.c.data[13]+a.c.data[8]*b.c.data[14]+a.c.data[12]*b.c.data[15];BnK.data[1]=a.c.data[1]*b.c.data[0]+a.c.data[5]
*b.c.data[1]+a.c.data[9]*b.c.data[2]+a.c.data[13]*b.c.data[3];BnK.data[5]=a.c.data[1]*b.c.data[4]+a.c.data[5]*b.c.data[5]+a.c.data[9]*b.c.data[6]+a.c.data[13]*b.c.data[7];BnK.data[9]=a.c.data[1]*b.c.data[8]+a.c.data[5]*b.c.data[9]+a.c.data[9]*b.c.data[10]+a.c.data[13]*b.c.data[11];BnK.data[13]=a.c.data[1]*b.c.data[12]+a.c.data[5]*b.c.data[13]+a.c.data[9]*b.c.data[14]+a.c.data[13]*b.c.data[15];BnK.data[2]=a.c.data[2]*b.c.data[0]+a.c.data[6]*b.c.data[1]+a.c.data[10]*b.c.data[2]+a.c.data[14]*b.c.data[3];BnK.data[6]
=a.c.data[2]*b.c.data[4]+a.c.data[6]*b.c.data[5]+a.c.data[10]*b.c.data[6]+a.c.data[14]*b.c.data[7];BnK.data[10]=a.c.data[2]*b.c.data[8]+a.c.data[6]*b.c.data[9]+a.c.data[10]*b.c.data[10]+a.c.data[14]*b.c.data[11];BnK.data[14]=a.c.data[2]*b.c.data[12]+a.c.data[6]*b.c.data[13]+a.c.data[10]*b.c.data[14]+a.c.data[14]*b.c.data[15];BnK.data[3]=a.c.data[3]*b.c.data[0]+a.c.data[7]*b.c.data[1]+a.c.data[11]*b.c.data[2]+a.c.data[15]*b.c.data[3];BnK.data[7]=a.c.data[3]*b.c.data[4]+a.c.data[7]*b.c.data[5]+a.c.data[11]*b.c.data[6]
+a.c.data[15]*b.c.data[7];BnK.data[11]=a.c.data[3]*b.c.data[8]+a.c.data[7]*b.c.data[9]+a.c.data[11]*b.c.data[10]+a.c.data[15]*b.c.data[11];BnK.data[15]=a.c.data[3]*b.c.data[12]+a.c.data[7]*b.c.data[13]+a.c.data[11]*b.c.data[14]+a.c.data[15]*b.c.data[15];return a.Ey(BnK);}
function AHN(a){a.c.data[0]=1.0;a.c.data[4]=0.0;a.c.data[8]=0.0;a.c.data[12]=0.0;a.c.data[1]=0.0;a.c.data[5]=1.0;a.c.data[9]=0.0;a.c.data[13]=0.0;a.c.data[2]=0.0;a.c.data[6]=0.0;a.c.data[10]=1.0;a.c.data[14]=0.0;a.c.data[3]=0.0;a.c.data[7]=0.0;a.c.data[11]=0.0;a.c.data[15]=1.0;return a;}
function A7d(a){return a.c.data[0]*a.c.data[5]*a.c.data[10]+a.c.data[4]*a.c.data[9]*a.c.data[2]+a.c.data[8]*a.c.data[1]*a.c.data[6]-a.c.data[0]*a.c.data[9]*a.c.data[6]-a.c.data[4]*a.c.data[1]*a.c.data[10]-a.c.data[8]*a.c.data[5]*a.c.data[2];}
function AE4(a,b,c,d,e){var f,g,h,i,j;a.fx();f=1.0/AQO(d*0.017453292519943295/2.0);g=c+b;h=b-c;i=g/h;j=2.0*c*b/h;a.c.data[0]=f/e;a.c.data[1]=0.0;a.c.data[2]=0.0;a.c.data[3]=0.0;a.c.data[4]=0.0;a.c.data[5]=f;a.c.data[6]=0.0;a.c.data[7]=0.0;a.c.data[8]=0.0;a.c.data[9]=0.0;a.c.data[10]=i;a.c.data[11]=(-1.0);a.c.data[12]=0.0;a.c.data[13]=0.0;a.c.data[14]=j;a.c.data[15]=0.0;return a;}
function A3Y(a,b,c,d,e){a.zg(b,b+d,c,c+e,0.0,1.0);return a;}
function A4y(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a.fx();h=c-b;i=2.0/h;j=e-d;k=2.0/j;l=g-f;m=(-2.0)/l;n= -(c+b)/h;o= -(e+d)/j;p= -(g+f)/l;a.c.data[0]=i;a.c.data[1]=0.0;a.c.data[2]=0.0;a.c.data[3]=0.0;a.c.data[4]=0.0;a.c.data[5]=k;a.c.data[6]=0.0;a.c.data[7]=0.0;a.c.data[8]=0.0;a.c.data[9]=0.0;a.c.data[10]=m;a.c.data[11]=0.0;a.c.data[12]=n;a.c.data[13]=o;a.c.data[14]=p;a.c.data[15]=1.0;return a;}
function AF_(a,b,c,d){a.fx();a.c.data[12]=b;a.c.data[13]=c;a.c.data[14]=d;return a;}
function AWs(a,b,c){if(c===0.0){a.fx();return a;}CC();return a.Gv(BnL.wt(b,c));}
function AIk(a,b,c){CC();(BnN.M(b)).bU();(BnO.M(b)).bU();(BnO.iC(c)).bU();((BnP.M(BnO)).iC(BnN)).bU();a.fx();a.c.data[0]=BnO.n;a.c.data[4]=BnO.o;a.c.data[8]=BnO.q;a.c.data[1]=BnP.n;a.c.data[5]=BnP.o;a.c.data[9]=BnP.q;a.c.data[2]= -BnN.n;a.c.data[6]= -BnN.o;a.c.data[10]= -BnN.q;return a;}
function AZY(a,b,c,d){CC();(BnQ.M(c)).gl(b);a.QI(BnQ,d);a.hC(BnR.IY( -b.n, -b.o, -b.q));return a;}
function AFk(a,b){b.n=a.c.data[12];b.o=a.c.data[13];b.q=a.c.data[14];return b;}
function O0(b,c){var d,e,f,g;CC();d=c.data;e=b.data;f=Ca(16);g=f.data;g[0]=e[0]*d[0]+e[4]*d[1]+e[8]*d[2]+e[12]*d[3];g[4]=e[0]*d[4]+e[4]*d[5]+e[8]*d[6]+e[12]*d[7];g[8]=e[0]*d[8]+e[4]*d[9]+e[8]*d[10]+e[12]*d[11];g[12]=e[0]*d[12]+e[4]*d[13]+e[8]*d[14]+e[12]*d[15];g[1]=e[1]*d[0]+e[5]*d[1]+e[9]*d[2]+e[13]*d[3];g[5]=e[1]*d[4]+e[5]*d[5]+e[9]*d[6]+e[13]*d[7];g[9]=e[1]*d[8]+e[5]*d[9]+e[9]*d[10]+e[13]*d[11];g[13]=e[1]*d[12]+e[5]*d[13]+e[9]*d[14]+e[13]*d[15];g[2]=e[2]*d[0]+e[6]*d[1]+e[10]*d[2]+e[14]*d[3];g[6]=e[2]*d[4]
+e[6]*d[5]+e[10]*d[6]+e[14]*d[7];g[10]=e[2]*d[8]+e[6]*d[9]+e[10]*d[10]+e[14]*d[11];g[14]=e[2]*d[12]+e[6]*d[13]+e[10]*d[14]+e[14]*d[15];g[3]=e[3]*d[0]+e[7]*d[1]+e[11]*d[2]+e[15]*d[3];g[7]=e[3]*d[4]+e[7]*d[5]+e[11]*d[6]+e[15]*d[7];g[11]=e[3]*d[8]+e[7]*d[9]+e[11]*d[10]+e[15]*d[11];g[15]=e[3]*d[12]+e[7]*d[13]+e[11]*d[14]+e[15]*d[15];X(f,0,b,0,16);}
function Ul(b){var c;CC();c=b.data;return c[3]*c[6]*c[9]*c[12]-c[2]*c[7]*c[9]*c[12]-c[3]*c[5]*c[10]*c[12]+c[1]*c[7]*c[10]*c[12]+c[2]*c[5]*c[11]*c[12]-c[1]*c[6]*c[11]*c[12]-c[3]*c[6]*c[8]*c[13]+c[2]*c[7]*c[8]*c[13]+c[3]*c[4]*c[10]*c[13]-c[0]*c[7]*c[10]*c[13]-c[2]*c[4]*c[11]*c[13]+c[0]*c[6]*c[11]*c[13]+c[3]*c[5]*c[8]*c[14]-c[1]*c[7]*c[8]*c[14]-c[3]*c[4]*c[9]*c[14]+c[0]*c[7]*c[9]*c[14]+c[1]*c[4]*c[11]*c[14]-c[0]*c[5]*c[11]*c[14]-c[2]*c[5]*c[8]*c[15]+c[1]*c[6]*c[8]*c[15]+c[2]*c[4]*c[9]*c[15]-c[0]*c[6]*c[9]*c[15]
-c[1]*c[4]*c[10]*c[15]+c[0]*c[5]*c[10]*c[15];}
function QR(b){var c,d,e,f,g;CC();c=Ca(16);d=Ul(b);if(d===0.0)return 0;e=c.data;f=b.data;e[0]=f[9]*f[14]*f[7]-f[13]*f[10]*f[7]+f[13]*f[6]*f[11]-f[5]*f[14]*f[11]-f[9]*f[6]*f[15]+f[5]*f[10]*f[15];e[4]=f[12]*f[10]*f[7]-f[8]*f[14]*f[7]-f[12]*f[6]*f[11]+f[4]*f[14]*f[11]+f[8]*f[6]*f[15]-f[4]*f[10]*f[15];e[8]=f[8]*f[13]*f[7]-f[12]*f[9]*f[7]+f[12]*f[5]*f[11]-f[4]*f[13]*f[11]-f[8]*f[5]*f[15]+f[4]*f[9]*f[15];e[12]=f[12]*f[9]*f[6]-f[8]*f[13]*f[6]-f[12]*f[5]*f[10]+f[4]*f[13]*f[10]+f[8]*f[5]*f[14]-f[4]*f[9]*f[14];e[1]=f[13]
*f[10]*f[3]-f[9]*f[14]*f[3]-f[13]*f[2]*f[11]+f[1]*f[14]*f[11]+f[9]*f[2]*f[15]-f[1]*f[10]*f[15];e[5]=f[8]*f[14]*f[3]-f[12]*f[10]*f[3]+f[12]*f[2]*f[11]-f[0]*f[14]*f[11]-f[8]*f[2]*f[15]+f[0]*f[10]*f[15];e[9]=f[12]*f[9]*f[3]-f[8]*f[13]*f[3]-f[12]*f[1]*f[11]+f[0]*f[13]*f[11]+f[8]*f[1]*f[15]-f[0]*f[9]*f[15];e[13]=f[8]*f[13]*f[2]-f[12]*f[9]*f[2]+f[12]*f[1]*f[10]-f[0]*f[13]*f[10]-f[8]*f[1]*f[14]+f[0]*f[9]*f[14];e[2]=f[5]*f[14]*f[3]-f[13]*f[6]*f[3]+f[13]*f[2]*f[7]-f[1]*f[14]*f[7]-f[5]*f[2]*f[15]+f[1]*f[6]*f[15];e[6]
=f[12]*f[6]*f[3]-f[4]*f[14]*f[3]-f[12]*f[2]*f[7]+f[0]*f[14]*f[7]+f[4]*f[2]*f[15]-f[0]*f[6]*f[15];e[10]=f[4]*f[13]*f[3]-f[12]*f[5]*f[3]+f[12]*f[1]*f[7]-f[0]*f[13]*f[7]-f[4]*f[1]*f[15]+f[0]*f[5]*f[15];e[14]=f[12]*f[5]*f[2]-f[4]*f[13]*f[2]-f[12]*f[1]*f[6]+f[0]*f[13]*f[6]+f[4]*f[1]*f[14]-f[0]*f[5]*f[14];e[3]=f[9]*f[6]*f[3]-f[5]*f[10]*f[3]-f[9]*f[2]*f[7]+f[1]*f[10]*f[7]+f[5]*f[2]*f[11]-f[1]*f[6]*f[11];e[7]=f[4]*f[10]*f[3]-f[8]*f[6]*f[3]+f[8]*f[2]*f[7]-f[0]*f[10]*f[7]-f[4]*f[2]*f[11]+f[0]*f[6]*f[11];e[11]=f[8]*f[5]
*f[3]-f[4]*f[9]*f[3]-f[8]*f[1]*f[7]+f[0]*f[9]*f[7]+f[4]*f[1]*f[11]-f[0]*f[5]*f[11];e[15]=f[4]*f[9]*f[2]-f[8]*f[5]*f[2]+f[8]*f[1]*f[6]-f[0]*f[9]*f[6]-f[4]*f[1]*f[10]+f[0]*f[5]*f[10];g=1.0/d;f[0]=e[0]*g;f[4]=e[4]*g;f[8]=e[8]*g;f[12]=e[12]*g;f[1]=e[1]*g;f[5]=e[5]*g;f[9]=e[9]*g;f[13]=e[13]*g;f[2]=e[2]*g;f[6]=e[6]*g;f[10]=e[10]*g;f[14]=e[14]*g;f[3]=e[3]*g;f[7]=e[7]*g;f[11]=e[11]*g;f[15]=e[15]*g;return 1;}
function Y2(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;CC();e=b.data;f=c.data;g=d+0|0;h=f[g]*e[3];i=d+1|0;j=h+f[i]*e[7];k=d+2|0;l=1.0/(j+f[k]*e[11]+e[15]);m=(f[g]*e[0]+f[i]*e[4]+f[k]*e[8]+e[12])*l;n=(f[g]*e[1]+f[i]*e[5]+f[k]*e[9]+e[13])*l;o=(f[g]*e[2]+f[i]*e[6]+f[k]*e[10]+e[14])*l;f[g]=m;f[i]=n;f[k]=o;}
function G9(b,c){CC();O0(b,c);}
function TY(b,c,d,e,f){var g;CC();g=0;while(g<e){Y2(b,c,d);d=d+f|0;g=g+1|0;}}
function MZ(b){CC();return QR(b);}
function A2w(a,b,c,d){CC();BnK.data[0]=1.0;BnK.data[4]=0.0;BnK.data[8]=0.0;BnK.data[12]=b;BnK.data[1]=0.0;BnK.data[5]=1.0;BnK.data[9]=0.0;BnK.data[13]=c;BnK.data[2]=0.0;BnK.data[6]=0.0;BnK.data[10]=1.0;BnK.data[14]=d;BnK.data[3]=0.0;BnK.data[7]=0.0;BnK.data[11]=0.0;BnK.data[15]=1.0;G9(a.c,BnK);return a;}
function AWf(a,b,c){if(c===0.0)return a;CC();BnL.wt(b,c);return a.Mq(BnL);}
function APV(a,b){CC();b.Ka(BnK);G9(a.c,BnK);return a;}
function A5n(a){var b,c;a:{b:{if(!Dl(a.c.data[0],1.0))break b;if(!Dl(a.c.data[5],1.0))break b;if(!Dl(a.c.data[10],1.0))break b;b=a.c.data[4];if(!DF(b))break b;if(!DF(a.c.data[8]))break b;if(!DF(a.c.data[1]))break b;if(!DF(a.c.data[9]))break b;b=a.c.data[2];if(!DF(b))break b;if(DF(a.c.data[6])){c=0;break a;}}c=1;}return c;}
function AVK(){BnK=Ca(16);BnL=AWg();BnM=AWg();BnN=S();BnO=S();BnP=S();BnQ=S();BnR=BL();BnS=S();BnT=S();BnU=S();}
var AC0=D(Bm);
function A9M(){var a=new AC0();A5M(a);return a;}
function A5M(a){Cx(a);}
var AAk=D(Ed);
function BfD(a,b,c){var d=new AAk();AZ8(d,a,b,c);return d;}
function AZ8(a,b,c,d){Ns(a,b,c,d);}
function AEy(a,b,c,d){var e;e=a.k.e(b,c,d);if(e>=0)return e;return a.Y.e(b,c,d);}
var AAD=D(T);
function BfU(){var a=new AAD();AFi(a);return a;}
function AFi(a){Bo(a);}
function AKD(a){return Bas(a);}
function ZU(){var a=this;C.call(a);a.Bu=0;a.E2=0;a.Ek=null;}
function Bbv(a,b){var c=new ZU();AHv(c,a,b);return c;}
function AHv(a,b,c){a.Ek=b;a.E2=c;J(a);a.Bu=a.E2;}
function AMh(a){return Gh(a.Ek,a.Bu);}
function Gz(){C.call(this);this.eZ=null;}
var BhW=null;var BnV=null;var BnW=null;function EH(){EH=N(Gz);ANn();}
function AXF(){var a=new Gz();UN(a);return a;}
function QZ(){EH();if(BnW===null)BnW=AXF();return BnW;}
function UN(a){EH();J(a);a.eZ=AXQ(0,8);a.G7();}
function A9x(a,b,c){return a.Gg(b,c,0.0,0);}
function A91(a,b,c,d,e){var f,g,$$je;if(b.dB!=(-1))G(W(B(609)));b.ij=CA(E_(CE(),O(1000000)),BgK(c*1000.0));b.sM=BgK(d*1000.0);b.dB=e;f=a.eZ;Eq(f);a:{try{a.eZ.F(b);Ch(f);}catch($$e){$$je=R($$e);g=$$je;break a;}M9();return b;}Ch(f);G(g);}
function AST(a){var b,c,d,$$je;EH();b=BhW;Eq(b);a:{b:{try{if(!BhW.iv(a,1))break b;Ch(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}c:{try{BhW.F(a);if(BnV!==null)break c;d=(El()).hu();BnV=Bc5(d.P_());break c;}catch($$e){$$je=R($$e);c=$$je;break a;}}try{M9();Ch(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}Ch(b);G(c);}
function ARr(a,b,c){var d,e,f,g,h,$$je;d=a.eZ;Eq(d);a:{try{e=0;f=a.eZ.h;while(e<f){g=a.eZ.l(e);if(Hq(g.ij,b))c=T5(c,D6(g.ij,b));else{if(g.dB!=(-1)){if(!g.dB)g.dB=(-1);Bg2.Mw(g);}if(g.dB==(-1)){a.eZ.sv(e);e=e+(-1)|0;f=f+(-1)|0;}else{g.ij=CA(b,g.sM);c=T5(c,g.sM);if(g.dB>0)g.dB=g.dB-1|0;}}e=e+1|0;}Ch(d);}catch($$e){$$je=R($$e);h=$$je;break a;}return c;}Ch(d);G(h);}
function AOo(a,b){var c,d,e,f,g,$$je;c=a.eZ;Eq(c);a:{try{d=0;e=a.eZ.h;while(d<e){f=a.eZ.l(d);f.ij=CA(f.ij,b);d=d+1|0;}Ch(c);}catch($$e){$$je=R($$e);g=$$je;break a;}return;}Ch(c);G(g);}
function M9(){var b,c,$$je;EH();b=BhW;Eq(b);a:{try{BnV.nU(0);Ch(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}Ch(b);G(c);}
function ACD(b,c){EH();return (QZ()).FX(b,c);}
function ANn(){BhW=DL(1);BnW=AXF();}
var Du=D(C3);
function Ec(){var a=new Du();AV$(a);return a;}
function DH(a){var b=new Du();AL3(b,a);return b;}
function AV$(a){FX(a);}
function AL3(a,b){ACW(a,b);}
function XZ(){var a=this;C.call(a);a.pT=null;a.N7=0;a.g4=0;a.gx=0;}
function K7(a,b){var c=new XZ();AND(c,a,b);return c;}
function AND(a,b,c){J(a);a.gx=1;a.pT=b;a.N7=c;}
function A2f(a){if(!a.gx)G(U(B(610)));return a.g4>=a.pT.h?0:1;}
function AX9(a){var b,c;if(a.g4>=a.pT.h)G(Bdb(Ji(a.g4)));if(!a.gx)G(U(B(610)));b=a.pT.P.data;c=a.g4;a.g4=c+1|0;return b[c];}
function AAV(){Jo.call(this);this.LH=null;}
function Bcn(a,b,c,d,e){var f=new AAV();A8U(f,a,b,c,d,e);return f;}
function A8U(a,b,c,d,e,f){a.LH=b;Tt(a,c,d,e,f);}
var Wj=D();
function R2(){var a=this;Da.call(a);a.tQ=0;a.pK=0;}
function Bdj(a,b,c){var d=new R2();A5_(d,a,b,c);return d;}
function A5_(a,b,c,d){GD(a,b,0.5,0.5);a.tQ=c;a.pK=d;}
function ASb(a,b,c,d,e,f,g,h){var i,j,k,l;if(a.tQ){if((c+2|0)>d){if(h.tK())i=null;else{Bj();i=BgZ;}return i;}j=b.data;a.tQ=0;k=c+1|0;l=j[c];if(l==(-1)){if(j[k]!=(-2))c=k+(-1)|0;else{c=k+1|0;a.pK=1;}}else if(l!=(-2))c=k+(-1)|0;else if(j[k]!=(-1))c=k+(-1)|0;else{c=k+1|0;a.pK=0;}}return !a.pK?RB(a,b,c,d,e,f,g,h):ABP(a,b,c,d,e,f,g,h);}
function ABP(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=null;a:{while(c<d){if(f>=g)break a;if((c+2|0)>d){if(h.dO(2))break a;Bj();i=BgZ;break a;}j=b.data;k=c+1|0;l=j[c]&255;c=k+1|0;m=j[k]&255;n=(l|m<<8)&65535;if(!BY(n)){if(BG(n)){c=c+(-2)|0;i=BV(2);break a;}j=e.data;k=f+1|0;j[f]=n;f=k;}else{if((c+2|0)>=d){if(!h.dO(4)){Bj();i=BgZ;}c=c+(-2)|0;break a;}k=c+1|0;o=j[c]&255;c=k+1|0;k=j[k]&255;p=(o|k<<8)&65535;if(!BG(p)){c=c+(-4)|0;i=BV(4);break a;}if((f+2|0)>g){if(h.ef(2))break a;Bj();i=BgY;break a;}j=e.data;k=f+1|0;j[f]
=n;f=k+1|0;j[k]=p;}}}h.el(c);h.dR(f);return i;}
function RB(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=null;a:{while(c<d){if(f>=g)break a;if((c+2|0)>d){if(h.dO(2))break a;Bj();i=BgZ;break a;}j=b.data;k=c+1|0;l=j[c]&255;c=k+1|0;m=j[k]&255;n=(m|l<<8)&65535;if(!BY(n)){if(BG(n)){c=c+(-2)|0;i=BV(2);break a;}j=e.data;k=f+1|0;j[f]=n;f=k;}else{if((c+2|0)>=d){if(!h.dO(4)){Bj();i=BgZ;}c=c+(-2)|0;break a;}k=c+1|0;o=j[c]&255;c=k+1|0;k=j[k]&255;p=(k|o<<8)&65535;if(!BG(p)){c=c+(-4)|0;i=BV(4);break a;}if((f+2|0)>g){if(h.ef(2))break a;Bj();i=BgY;break a;}j=e.data;k=f+1|0;j[f]
=n;f=k+1|0;j[k]=p;}}}h.el(c);h.dR(f);return i;}
var ABf=D(Jw);
function Bbk(){var a=new ABf();A2n(a);return a;}
function A2n(a){Xg(a);}
function Yn(a,b){var c;c=BeR(a,b);return c;}
function AMQ(a,b,c){return setTimeout(BP(Yn(a,b),"onTimer"),c);}
function AL2(a,b){clearInterval(b);}
function AKH(a,b){clearTimeout(b);}
function A2_(b,c){Zk(b,c);}
var SS=D(T);
function BaE(){var a=new SS();AM0(a);return a;}
function AM0(a){Bo(a);}
function APT(a){return BbX(a);}
function Wo(){var a=this;C.call(a);a.nz=null;a.pU=0;a.h2=null;a.mi=null;}
function Bc3(a){var b=new Wo();A6l(b,a);return b;}
function BnX(a,b){var c=new Wo();ACT(c,a,b);return c;}
function A6l(a,b){ACT(a,b,1);}
function ACT(a,b,c){J(a);a.nz=b;a.pU=c;}
function A1x(a){if(Blm)return K7(a.nz,a.pU);if(a.h2===null){a.h2=K7(a.nz,a.pU);a.mi=K7(a.nz,a.pU);}if(a.h2.gx){a.mi.g4=0;a.mi.gx=1;a.h2.gx=0;return a.mi;}a.h2.g4=0;a.h2.gx=1;a.mi.gx=0;return a.h2;}
var AAP=D(T);
function Baj(){var a=new AAP();ANl(a);return a;}
function ANl(a){Bo(a);}
function AUx(a){return Bar(a);}
var ZZ=D(B5);
function GX(){var a=new ZZ();A7Z(a);return a;}
function DR(a){var b=new ZZ();A5F(b,a);return b;}
function A7Z(a){E$(a);}
function A5F(a,b){Mk(a,b);}
function YM(){var a=this;C.call(a);a.mZ=null;a.q4=0;a.pj=null;a.t5=0;a.oI=null;a.rj=0;a.ke=null;a.pr=0;}
function CM(){var a=new YM();A_A(a);return a;}
function A_A(a){J(a);a.mZ=S();a.pj=Cl(0.0,1.0,0.0);a.oI=CP(1.0,1.0,1.0,1.0);a.ke=Iu();}
function AOW(a){a.mZ.I(0.0,0.0,0.0);a.pj.I(0.0,1.0,0.0);a.oI.hV(1.0,1.0,1.0,1.0);a.ke.ix(0.0,0.0);}
function ALS(a,b,c,d,e){a.fV();a.q4=b===null?0:1;if(a.q4)a.mZ.M(b);a.t5=c===null?0:1;if(a.t5)a.pj.M(c);a.rj=d===null?0:1;if(a.rj)a.oI.eR(d);a.pr=e===null?0:1;if(a.pr)a.ke.k7(e);return a;}
function AL$(a,b,c){a.ke.ix(b,c);a.pr=1;return a;}
function Z$(){var a=this;C.call(a);a.no=0.0;a.ox=null;}
function Rp(a,b){var c=new Z$();A9p(c,a,b);return c;}
function A9p(a,b,c){J(a);a.no=b;a.ox=c;}
var OH=D(GB);
function BnY(){var a=new OH();T1(a);return a;}
function T1(a){UL(a);AMc(a);}
function A8C(a,b){var c;c=new Float32Array(b);return c;}
function ATX(a,b){var c;c=new Int32Array(b);return c;}
function AMu(a,b){var c;c=new Int16Array(b);return c;}
function AWe(a,b){var c;c=new Int8Array(b);return c;}
function AGR(a,b){var c;c=new Uint8Array(b);return c;}
function Jj(){BB.call(this);this.g9=0;}
function A1R(a){var b=new Jj();AOf(b,a);return b;}
function AOf(a,b){CQ(a);a.g9=b;}
function AXv(a,b){a.k=b;}
function ADt(a,b,c,d){var e,f,g,h,i;e=d.J();f=b+1|0;g=B9(f,e);if(g>0){d.d5=1;return (-1);}h=c.f(b);if(g<0){i=c.f(f);if(BG(i))return (-1);}if(a.g9!=h)return (-1);return a.k.e(f,c,d);}
function A53(a,b,c,d){var e,f,g;if(!(c instanceof BN))return F3(a,b,c,d);e=c;f=d.J();while(true){if(b>=f)return (-1);g=e.eH(a.g9,b);if(g<0)return (-1);b=g+1|0;if(b<f&&BG(e.f(b))){b=g+2|0;continue;}if(a.k.e(b,c,d)>=0)break;}return g;}
function AQe(a,b,c,d,e){var f,g,h,i;if(!(d instanceof BN))return Gb(a,b,c,d,e);f=d;g=e.J();a:{while(true){if(c<b)return (-1);h=f.mK(a.g9,c);if(h<0)break a;if(h<b)break a;i=h+1|0;if(i<g&&BG(f.f(i))){c=h+(-1)|0;continue;}if(a.k.e(i,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function A$K(a){return (((I()).a(B(101))).U(a.g9)).b();}
function AHa(a,b){if(b instanceof Dz)return 0;if(b instanceof Dx)return 0;if(b instanceof C4)return 0;if(b instanceof Dv)return 0;if(b instanceof Je)return 0;if(!(b instanceof Jj))return 1;return b.g9!=a.g9?0:1;}
function A6b(a,b){return 1;}
var Rl=D(Ef);
function Ba2(a,b,c,d){var e=new Rl();A51(e,a,b,c,d);return e;}
function A51(a,b,c,d,e){K1(a,b,c,d,e);}
function A7O(a,b,c,d){var e,f,g,h,i;e=a.gg.jd();f=a.gg.iJ();g=0;while(true){if(g>=e){a:{while(true){h=a.k.e(b,c,d);if(h>=0)break;if((b+a.bv.cg()|0)<=d.J()){h=a.bv.bH(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.bv.cg()|0)>d.J()){d.d5=1;return (-1);}i=a.bv.bH(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
var Rm=D(Bt);
function ARC(){var a=new Rm();AHm(a);return a;}
function AHm(a){Co(a);}
function A26(a,b,c,d){if(b&&!(d.jB()&&b==d.dI()))return (-1);return a.k.e(b,c,d);}
function A1W(a,b){return 0;}
function ANh(a){return B(611);}
function YT(){C.call(this);this.vw=null;}
function BcH(a){var b=new YT();ASS(b,a);return b;}
function ASS(a,b){J(a);a.vw=b;}
function Bbp(b){return BcH(b);}
function A2r(a,b){a.vw.nP(b);}
function ATq(a,b){a.vw.OQ(b);}
function DC(){var a=this;C.call(a);a.n=0.0;a.o=0.0;a.q=0.0;}
var Bm5=null;var Bm6=null;var Bm7=null;var BnZ=null;var Bn0=null;function H1(){H1=N(DC);AEL();}
function S(){var a=new DC();ZJ(a);return a;}
function Cl(a,b,c){var d=new DC();Rt(d,a,b,c);return d;}
function ZJ(a){H1();J(a);}
function Rt(a,b,c,d){H1();J(a);a.I(b,c,d);}
function A3h(a,b,c,d){a.n=b;a.o=c;a.q=d;return a;}
function AHd(a,b){return a.I(b.n,b.o,b.q);}
function ARx(a,b){return a.AS(b.n,b.o,b.q);}
function ALI(a,b,c,d){return a.I(a.n+b,a.o+c,a.q+d);}
function ANs(a,b){return a.JI(b.n,b.o,b.q);}
function AQY(a,b,c,d){return a.I(a.n-b,a.o-c,a.q-d);}
function A7L(a,b){return a.I(a.n*b,a.o*b,a.q*b);}
function TV(b,c,d){H1();return FR(b*b+c*c+d*d);}
function A_u(a){return FR(a.n*a.n+a.o*a.o+a.q*a.q);}
function AGA(a){return a.n*a.n+a.o*a.o+a.q*a.q;}
function AZo(a,b){var c,d,e;c=b.n-a.n;d=b.o-a.o;e=b.q-a.q;return FR(c*c+d*d+e*e);}
function AIQ(a,b){var c,d,e;c=b.n-a.n;d=b.o-a.o;e=b.q-a.q;return c*c+d*d+e*e;}
function A_Q(a){var b;b=a.ub();if(b!==0.0&&b!==1.0)return a.em(1.0/FR(b));return a;}
function ART(a,b){return a.n*b.n+a.o*b.o+a.q*b.q;}
function AYL(a,b){return a.I(a.o*b.q-a.q*b.o,a.q*b.n-a.n*b.q,a.n*b.o-a.o*b.n);}
function A3M(a,b,c,d){return a.I(a.o*d-a.q*c,a.q*b-a.n*d,a.n*c-a.o*b);}
function AQM(a,b){var c,d;c=b.c;d=c.data;return a.I(a.n*d[0]+a.o*d[4]+a.q*d[8]+d[12],a.n*d[1]+a.o*d[5]+a.q*d[9]+d[13],a.n*d[2]+a.o*d[6]+a.q*d[10]+d[14]);}
function AV5(a,b){var c,d;c=b.gT;d=c.data;return a.I(a.n*d[0]+a.o*d[3]+a.q*d[6],a.n*d[1]+a.o*d[4]+a.q*d[7],a.n*d[2]+a.o*d[5]+a.q*d[8]);}
function AHq(a,b,c){H1();Bn0.Pp(b,c);return a.kN(Bn0);}
function A_K(a){return a.n===0.0&&a.o===0.0&&a.q===0.0?1:0;}
function ANV(a,b,c){a.n=a.n+c*(b.n-a.n);a.o=a.o+c*(b.o-a.o);a.q=a.q+c*(b.q-a.q);return a;}
function AFs(a){return ((((((((I()).a(B(22))).cD(a.n)).a(B(23))).cD(a.o)).a(B(23))).cD(a.q)).a(B(24))).b();}
function A7S(a){var b;b=31+CF(a.n)|0;b=(31*b|0)+CF(a.o)|0;b=(31*b|0)+CF(a.q)|0;return b;}
function AG_(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(Ck(a)!==Ck(b))return 0;c=b;if(CF(a.n)!=CF(c.n))return 0;if(CF(a.o)!=CF(c.o))return 0;if(CF(a.q)==CF(c.q))return 1;return 0;}
function AIV(a){a.n=0.0;a.o=0.0;a.q=0.0;return a;}
function AEL(){Bm5=Cl(1.0,0.0,0.0);Bm6=Cl(0.0,1.0,0.0);Bm7=Cl(0.0,0.0,1.0);BnZ=Cl(0.0,0.0,0.0);Bn0=BL();}
function GC(){var a=this;C.call(a);a.eW=0.0;a.eV=0.0;}
var Bn1=null;var Bn2=null;var Bn3=null;function AOL(){AOL=N(GC);AX6();}
function Iu(){var a=new GC();Sc(a);return a;}
function Wa(a,b){var c=new GC();Ty(c,a,b);return c;}
function Sc(a){AOL();J(a);}
function Ty(a,b,c){AOL();J(a);a.eW=b;a.eV=c;}
function AXB(a,b){a.eW=b.eW;a.eV=b.eV;return a;}
function AC9(a,b,c){a.eW=b;a.eV=c;return a;}
function AO0(a,b){var c,d;c=b.eW-a.eW;d=b.eV-a.eV;return FR(c*c+d*d);}
function AX6(){Bn1=Wa(1.0,0.0);Bn2=Wa(0.0,1.0);Bn3=Wa(0.0,0.0);}
function EY(){var a=this;C.call(a);a.v_=null;a.tH=Ba;a.p8=Ba;a.r4=Ba;}
function Bn4(a,b,c,d){var e=new EY();Op(e,a,b,c,d);return e;}
function Bn5(a,b,c){var d=new EY();Vj(d,a,b,c);return d;}
function CK(a,b){var c=new EY();G1(c,a,b);return c;}
function Bk(a){var b=new EY();ARw(b,a);return b;}
function Op(a,b,c,d,e){J(a);a.v_=b;a.tH=c;a.p8=d;a.r4=e;}
function Vj(a,b,c,d){Op(a,b,c,d,Ba);}
function G1(a,b,c){Op(a,b,Ba,Ba,c);}
function ARw(a,b){Vj(a,b,Ba,Ba);}
function AOD(a,b,c,d){var e,f;e=d!==null&&d.da!==null?Eg(d.da):Ba;f=d!==null&&d.cw!==null?Eg(d.cw):Ba;return Z(Br(e,a.tH),a.tH)&&Z(Br(f,a.p8),a.p8)&&Z(Br(BQ(e,f),a.r4),a.r4)?1:0;}
function GV(){var a=this;C.call(a);a.cp=null;a.bS=0;a.nb=0;}
function G$(){var a=new GV();AJW(a);return a;}
function Bn6(a,b){var c=new GV();Ui(c,a,b);return c;}
function AJW(a){Ui(a,1,16);}
function Ui(a,b,c){J(a);a.nb=b;a.cp=Bc(c);}
function A2b(a,b){var c,d,e;c=a.cp;d=c.data;if(a.bS==d.length)c=a.t2(Bf(8,a.bS*1.75|0));d=c.data;e=a.bS;a.bS=e+1|0;d[e]=b;}
function AQQ(a,b){if(b<a.bS)return a.cp.data[b];G(Bg((((((I()).a(B(428))).j(b)).a(B(429))).j(a.bS)).b()));}
function AZL(a){a.bS=0;}
function ANN(a){if(a.cp.data.length!=a.bS)a.t2(a.bS);return a.cp;}
function AN4(a,b){var c;if(b<0)G(W((((I()).a(B(435))).j(b)).b()));c=a.bS+b|0;if(c>a.cp.data.length)a.t2(Bf(Bf(8,c),a.bS*1.75|0));return a.cp;}
function AE7(a,b){var c,d,e;c=Bc(b);d=c.data;e=a.cp;X(e,0,c,0,Bq(a.bS,d.length));a.cp=c;return c;}
function AMj(a){var b,c,d,e,f;if(!a.nb)return MO(a);b=a.cp;c=1;d=0;e=a.bS;while(d<e){f=b.data;c=(c*31|0)+f[d]|0;d=d+1|0;}return c;}
function A9v(a,b){var c,d,e,f,g,h;if(b===a)return 1;if(!a.nb)return 0;if(!(b instanceof GV))return 0;c=b;if(!c.nb)return 0;d=a.bS;if(d!=c.bS)return 0;e=a.cp;f=c.cp;g=0;while(g<d){h=f.data;if(e.data[g]!=h[g])return 0;g=g+1|0;}return 1;}
function A2V(a){var b,c,d,e;if(!a.bS)return B(437);b=a.cp;c=b.data;d=ATn(32);d.ly(91);d.Ad(c[0]);e=1;while(e<a.bS){d.CL(B(438));d.Ad(c[e]);e=e+1|0;}d.ly(93);return d.b();}
function H0(){var a=this;C.call(a);a.iM=null;a.uo=null;a.Ae=null;a.Fb=null;a.Br=null;a.EC=null;a.zJ=null;a.s$=null;a.iK=null;a.tD=0;a.sQ=0;a.EW=null;a.lr=null;a.HF=null;a.o7=null;a.kM=null;a.f7=null;a.wp=null;}
var Bn7=null;function Bn8(a,b){var c=new H0();ABr(c,a,b);return c;}
function AWn(){return Bn7;}
function ABr(a,b,c){var d;J(a);Gl();a.iK=BkU;a.tD=(-1);a.sQ=1;a.HF=DG();a.o7=Bp();a.kM=Bp();d=c.Id();Bli=d;a.s$=d.hu();a.zJ=b;a.EC=c;a.Br=d.ET();a.wp=d.Ny();Ra(a);}
function Ra(a){var b,c;Bn7=(El()).Ng();Gp(B(612),B(101));if((Bn7.windows?1:0)==1)Gp(B(555),B(613));else if((Bn7.macOS?1:0)==1)Gp(B(555),B(614));else if((Bn7.linux?1:0)!=1)Gp(B(555),B(615));else Gp(B(555),B(616));ALV(BdX(El()));b=CD();a.f7=b.HS();if(a.f7.M7(B(617))){a.f7=a.f7.uI(B(618),B(101));a.f7=a.f7.uI(B(619),B(101));}a.lr=BfM((((I()).a(a.f7)).a(B(620))).b());c=Bch();a.lr.MD(B(621));a.iM=BaC(a.EC);a.uo=BaH(a.Br);a.Ae=BdG(a.lr);a.EW=BfB();PC(a);ACY(a);Bg2=a;Bim=a.iM;Bip=a.iM.vL();Biq=a.iM.vL();Bh8=a.uo;Bio
=a.Ae;a.s$.vI(a);}
function A3f(a){var b,c,$$je;b=a.iK;a:{try{b:{BdM();switch(BkT.data[BC(b)]){case 1:if((CD()).KU())break b;Gl();a.iK=BkX;break b;case 2:case 3:break;case 4:Gl();a.iK=BkV;break b;default:break b;}Z9(a,a.zJ);}}catch($$e){$$je=R($$e);if($$je instanceof Db){c=$$je;break a;}else{throw $$e;}}a.s$.vI(a);return;}c.FF();G(c);}
function Z9(a,b){var c,d,e,f;a.iM.f6();c=Bim.bo();d=Bim.bl();if(!(c==a.tD&&d==a.sQ)){a.tD=c;a.sQ=d;Bip.oK(0,0,c,d);e=a.iK;Gl();if(e===BkV){a.iK=BkW;b.w5();}b.QN(c,d);}a.kM.qB(a.o7);a.o7.K();f=0;while(f<a.kM.h){(a.kM.l(f)).fe();f=f+1|0;}a.kM.K();e=a.iM;e.s1=CA(e.s1,O(1));b.Oh();a.uo.fV();}
function PC(a){a.lr.kn(B(622),BdS(a));}
function ACY(a){a.wp.Pf(a);}
function ANj(a){return a.lr;}
function AFA(a,b,c){a.EW.qE(b,c);}
function A5o(a){Vy();return Bh1;}
function A3x(a,b){a.o7.F(b);}
function AKP(a,b){}
function AET(b){return b.f7;}
function AKj(b,c){b.Fb=c;return c;}
function A9w(b){return b.Fb;}
function Ij(){BH.call(this);this.hl=null;}
var Bl1=Ba;function JD(){JD=N(Ij);A1a();}
function Bbb(){var a=new Ij();JK(a);return a;}
function Bez(a){var b=new Ij();R$(b,a);return b;}
function JK(a){JD();Fb(a,Bl1);a.hl=DL(1);}
function R$(a,b){JD();JK(a);a.hl.qB(b.hl);}
function A5f(a){return Bez(a);}
function ANL(a){var b,c,d;b=F2(a);c=a.hl.bZ();while(c.bC()){d=c.bz();b=(1229*b|0)+(d!==null?d.bp():0)|0;}return b;}
function A8f(a){return a.QT();}
function A1a(){Bl1=BR(B(623));}
function Df(){var a=this;Ha.call(a);a.N2=0;a.I9=0;a.Nj=0;a.NF=0;a.OV=0;a.Is=0;a.Ov=0;a.vf=0;a.Qp=0;a.Qt=0;a.HB=0;a.NN=0;a.KV=0;a.Oq=0;a.CZ=0;a.Iv=0;a.Jo=0;a.GY=0;a.LE=0;a.GV=0;a.Hj=0;a.JD=0;a.Pi=0;a.QC=0;a.Nn=0;a.G5=0;a.O0=0;a.L2=0;a.MT=0;a.Lg=0;a.Np=0;a.EY=0;a.GS=0;a.Gx=0;a.vn=0;a.xZ=0;a.z5=0;a.sh=0;a.zv=0;a.sc=0;a.Cg=0;a.tS=0;a.wE=0;a.t0=0;a.y7=0;a.E$=0;a.wh=0;a.yp=0;a.EH=0;a.vK=0;a.yW=0;a.En=0;a.jQ=0;a.xv=0;a.vN=0;a.mb=0;a.ho=0;a.wn=0;a.Ft=0;a.tn=0;a.ld=0;a.eX=0;a.vD=0;a.zW=0;a.EM=0;a.vj=0;a.zd=0;a.BK=0;a.lG
=0;a.fu=0;a.DV=0;a.PV=0;a.Jq=null;a.cy=null;a.b$=null;a.b4=null;a.rK=null;a.k$=Ba;a.Dn=Ba;a.hk=null;a.IZ=null;a.vW=0.0;a.gZ=0;a.Lz=null;}
var Bn9=null;var Bn$=null;var Bn_=Ba;var Boa=0;var Bob=0;var Boc=Ba;var Bod=null;function CR(){CR=N(Df);AQx();}
function BaW(a,b){var c=new Df();Xe(c,a,b);return c;}
function Boe(a,b,c){var d=new Df();L8(d,a,b,c);return d;}
function Bof(a,b,c,d,e){var f=new Df();Ky(f,a,b,c,d,e);return f;}
function Bog(a,b,c){var d=new Df();My(d,a,b,c);return d;}
function Yi(){CR();if(Bn9===null)Bn9=(Bio.oc(B(624))).vO();return Bn9;}
function So(){CR();if(Bn$===null)Bn$=(Bio.oc(B(625))).vO();return Bn$;}
function Xe(a,b,c){CR();L8(a,b,c,ZI(b,c));}
function L8(a,b,c,d){CR();Ky(a,b,c,d,c.p9===null?Yi():c.p9,c.uV===null?So():c.uV);}
function Ky(a,b,c,d,e,f){CR();My(a,b,c,AIU((((I()).a(d)).a(e)).b(),(((I()).a(d)).a(f)).b()));}
function My(a,b,c,d){var e,f,g,h,i;CR();ABb(a);a.vn=a.b0(Bk(B(626)));a.xZ=a.b0(Bk(B(627)));a.z5=a.b0(Bk(B(628)));a.sh=a.b0(Bk(B(629)));a.zv=a.b0(Bk(B(630)));a.sc=a.b0(Bk(B(631)));a.Cg=a.b0(Bk(B(632)));a.tS=a.b0(Bk(B(633)));a.wE=a.b0(Bk(B(634)));a.t0=a.b0(Bk(B(635)));a.y7=a.b0(Bk(B(636)));a.E$=a.b0(Bk(B(637)));a.wh=a.b0(Bk(B(638)));a.yp=a.b0(Bk(B(639)));a.EH=a.b0(Bk(B(640)));a.vK=a.b0(Bk(B(641)));a.yW=a.b0(Bk(B(642)));a.En=a.b0(Bk(B(643)));a.Jq=APj();a.IZ=Pi();a.Lz=S();e=KE(b);a.hk=c;a.bh=d;f=b.cw===null?0:1;a:
{b:{a.fu=f;ABF();if(!Ct(e,BjN)){if(!a.fu)break b;g=BjN;if(!Ct(e,g))break b;}f=1;break a;}f=0;}a.DV=f;a.PV=a.fu&&b.cw.iU!==null?1:0;a.rK=b;a.k$=BQ(Eg(e),Boc);a.Dn=NR(b.cS.b7.gS());a.cy=Y(Hz,a.fu&&c.mr>0?c.mr:0);h=0;while(h<a.cy.data.length){a.cy.data[h]=AJI();h=h+1|0;}a.b$=Y(OB,a.fu&&c.l$>0?c.l$:0);h=0;while(h<a.b$.data.length){a.b$.data[h]=Be8();h=h+1|0;}a.b4=Y(KJ,a.fu&&c.nq>0?c.nq:0);h=0;while(h<a.b4.data.length){a.b4.data[h]=A_S();h=h+1|0;}if(!c.rZ&&Dw(Br(Bn_,a.k$),a.k$))G(U(((((I()).a(B(644))).Nk(a.k$)).a(B(24))).b()));if
(b.dJ!==null&&b.dJ.data.length>c.gX)G(U((((((I()).a(B(645))).j(b.dJ.data.length)).a(B(646))).j(c.gX)).b()));Bfi();i=Boh;BbY();a.N2=a.bf(i,Bhj);a.I9=a.bf(Boi,Bhk);a.Nj=a.bf(Boj,Bhl);a.NF=a.bf(Bok,Bhm);a.OV=a.bf(Bol,Bhn);a.Is=a.bf(Bom,Bho);a.Ov=a.bf(Bon,Bhp);a.vf=a.b0(Bk(B(647)));a.Qp=a.bf(Boo,Bhq);a.Qt=a.bf(Bop,Bhr);a.HB=a.bf(Boq,Bhs);a.NN=a.bf(Bor,Bht);a.KV=b.dJ!==null&&c.gX>0?a.bf(Bos,Beo(c.gX)):(-1);a.Oq=a.bf(Bot,Bhu);a.CZ=a.b0(Bou);a.Iv=a.bf(Bov,Bhv);a.Jo=a.bf(Bow,Bhw);a.GY=a.bf(Box,Bhx);a.LE=a.bf(Boy,Bhy);a.GV
=a.bf(Boz,Bhz);a.Hj=a.bf(BoA,BhA);a.JD=a.bf(BoB,BhB);a.Pi=a.bf(BoC,BhC);a.QC=a.bf(BoD,BhD);a.Nn=a.bf(BoE,BhE);a.G5=a.bf(BoF,BhF);a.O0=a.bf(BoG,BhG);a.L2=a.bf(BoH,BhH);a.MT=a.bf(BoI,BhI);a.Lg=a.bf(BoJ,BhJ);a.Np=a.bf(BoK,BhK);a.EY=a.b0(BoL);a.GS=!a.fu?(-1):a.bf(BoM,Bfm(c.mr,c.l$));a.Gx=!a.DV?(-1):a.bf(BoN,BhL);}
function AXw(a){var b;b=a.bh;a.bh=null;a.MF(b,a.rK);a.rK=null;a.jQ=B1(a,a.vn);a.xv=B1(a,a.vn)-a.jQ|0;a.vN=B1(a,a.xZ)-a.jQ|0;a.mb=B1(a,a.z5)-a.jQ|0;if(a.mb<0)a.mb=0;a.ho=B1(a,a.sh);a.wn=B1(a,a.sh)-a.ho|0;a.Ft=B1(a,a.zv)-a.ho|0;a.tn=!Ic(a,a.sc)?(-1):B1(a,a.sc)-a.ho|0;a.ld=B1(a,a.Cg)-a.ho|0;if(a.ld<0)a.ld=0;a.eX=B1(a,a.tS);a.vD=B1(a,a.tS)-a.eX|0;a.zW=B1(a,a.wE)-a.eX|0;a.EM=B1(a,a.y7)-a.eX|0;a.vj=!Ic(a,a.t0)?(-1):B1(a,a.t0)-a.eX|0;a.zd=B1(a,a.E$)-a.eX|0;a.BK=B1(a,a.wh)-a.eX|0;a.lG=B1(a,a.yp)-a.eX|0;if(a.lG<0)a.lG
=0;}
function Er(b,c){CR();return Dw(Br(b,c),c)?0:1;}
function TL(b,c){CR();return Z(Br(b,c),Ba)?0:1;}
function KE(b){CR();Bod.K();if(b.cw!==null)F7(Bod,b.cw);if(b.da!==null)F7(Bod,b.da);return Bod;}
function Sg(b){var c;CR();c=Ba;if(b.cw!==null)c=BQ(c,Eg(b.cw));if(b.da!==null)c=BQ(c,Eg(b.da));return c;}
function ZI(b,c){var d,e,f,g,h,i,j,k;CR();d=KE(b);e=B(101);f=Eg(d);g=IM(b.cS.b7.gS());if(Er(g,O(1)))e=(((I()).a(e)).a(B(648))).b();if(TL(g,O(6)))e=(((I()).a(e)).a(B(649))).b();if(Er(g,O(256)))e=(((I()).a(e)).a(B(650))).b();if(Er(g,O(128)))e=(((I()).a(e)).a(B(651))).b();if(Er(g,O(8)))e=(((I()).a(e)).a(B(652))).b();if(!(!Er(g,O(8))&&!Er(g,O(384)))&&b.cw!==null){h=(((I()).a(e)).a(B(653))).b();h=(((I()).a(h)).a(B(654))).b();h=(((((I()).a(h)).a(B(655))).j(c.mr)).a(B(324))).b();h=(((((I()).a(h)).a(B(656))).j(c.l$)).a(B(324))).b();e
=(((((I()).a(h)).a(B(657))).j(c.nq)).a(B(324))).b();Ce();if(Ct(d,BmE))e=(((I()).a(e)).a(B(658))).b();if(b.cw.iU!==null)e=(((I()).a(e)).a(B(659))).b();ABF();if(Ct(d,BjN))e=(((I()).a(e)).a(B(660))).b();}i=CU(b.cS.b7.gS());j=0;while(j<i){k=CB(b.cS.b7.gS(),j);if(k.fn==64)e=(((((I()).a(e)).a(B(661))).j(k.jT)).a(B(662))).b();else if(k.fn==16)e=(((((I()).a(e)).a(B(663))).j(k.jT)).a(B(662))).b();j=j+1|0;}GO();if(Z(Br(f,BjR),BjR))e=(((I()).a(e)).a(B(664))).b();B2();if(Z(Br(f,Bnl),Bnl)){h=(((I()).a(e)).a(B(665))).b();e
=(((I()).a(h)).a(B(666))).b();}if(Z(Br(f,Bno),Bno)){h=(((I()).a(e)).a(B(667))).b();e=(((I()).a(h)).a(B(668))).b();}if(Z(Br(f,Bm$),Bm$)){h=(((I()).a(e)).a(B(669))).b();e=(((I()).a(h)).a(B(670))).b();}if(Z(Br(f,Bm8),Bm8)){h=(((I()).a(e)).a(B(671))).b();e=(((I()).a(h)).a(B(672))).b();}if(Z(Br(f,Bm9),Bm9)){h=(((I()).a(e)).a(B(673))).b();e=(((I()).a(h)).a(B(674))).b();}if(Z(Br(f,Bna),Bna)){h=(((I()).a(e)).a(B(675))).b();e=(((I()).a(h)).a(B(676))).b();}Ce();if(Z(Br(f,Bmy),Bmy))e=(((I()).a(e)).a(B(677))).b();if(Z(Br(f,
Bmz),Bmz))e=(((I()).a(e)).a(B(678))).b();if(Z(Br(f,BmB),BmB))e=(((I()).a(e)).a(B(679))).b();if(Z(Br(f,BmC),BmC))e=(((I()).a(e)).a(B(680))).b();ET();if(Z(Br(f,Bmc),Bmc))e=(((I()).a(e)).a(B(681))).b();if(Z(Br(f,Bmd),Bmd))e=(((I()).a(e)).a(B(682))).b();if(b.dJ!==null&&c.gX>0)e=(((((I()).a(e)).a(B(683))).j(c.gX)).a(B(324))).b();return e;}
function A3U(a,b){var c,d,e,f;if(b.dJ!==null&&b.dJ.data.length>a.hk.gX)return 0;a:{c=Sg(b);if(Z(a.k$,BQ(c,Boc))){d=a.Dn;e=b.cS.b7;if(Z(d,NR(e.gS()))&&(b.cw===null?0:1)==a.fu){f=1;break a;}}f=0;}return f;}
function A6t(a,b){return b instanceof Df&&a.PM(b)?1:0;}
function ASU(a,b){return b!==a?0:1;}
function AGQ(a,b,c){var d,e,f,g,h,i,j;X2(a,b,c);d=a.cy.data;e=d.length;f=0;while(f<e){g=d[f];g.xP(0.0,0.0,0.0,0.0,(-1.0),0.0);f=f+1|0;}d=a.b$.data;e=d.length;f=0;while(f<e){h=d[f];h.Ij(0.0,0.0,0.0,0.0,0.0,0.0,0.0);f=f+1|0;}d=a.b4.data;e=d.length;f=0;while(f<e){i=d[f];i.Pz(0.0,0.0,0.0,0.0,0.0,0.0,0.0,(-1.0),0.0,0.0,1.0,0.0);f=f+1|0;}a.gZ=0;if(Ic(a,a.vf)){e=a.vf;j=a.vW+Bim.Fe();a.vW=j;Fn(a,e,j);}}
function A$M(a,b,c){GO();if(!Ct(c,BjR))a.cY.xl(0,770,771);a.If(c);if(a.fu)a.J6(b,c);Vu(a,b,c);}
function AEg(a){WK(a);}
function A2I(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a.hk.uX!=(-1))c=a.hk.uX;else{CR();c=Boa;}if(a.hk.p6!=(-1))d=a.hk.p6;else{CR();d=Bob;}e=0.0;f=1.0;g=1;h=Kc(b);while(h.bC()){i=h.bz();j=i.dc;if(Us(j)){k=a.cY;l=i;k.xl(1,l.Kq,l.K8);Fn(a,a.CZ,l.HY);}else{AGI();if(Z(Br(j,BmO),BmO))c=i.Ia;else{ET();if(Z(Br(j,Bmd),Bmd))Fn(a,a.EY,i.mo);else{AJt();if(Z(Br(j,BlR),BlR)){m=i;d=m.MI;e=m.KF;f=m.I7;g=m.OM;}else if(!a.hk.rZ)G(U((((I()).a(B(684))).a(i.b())).b()));}}}}a.cY.H8(c);a.cY.Ma(d,e,f);a.cY.M8(g);}
function A3q(a,b,c){var d,e,f,g,h,i,j,k,l;d=b.cw;JD();e=HK(c,F(Ij),Bl1);f=e!==null?e.hl:null;A3P();g=HK(c,F(Hp),Blj);h=g!==null?g.Ec:null;Bb8();i=HK(c,F(Hb),BnJ);j=i!==null?i.PW:null;a:{if(a.jQ>=0){k=0;b:while(true){if(k>=a.cy.data.length)break a;c:{if(f!==null&&k<f.h){if(a.gZ&&a.cy.data[k].EF(f.l(k)))break c;a.cy.data[k].Jg(f.l(k));}else{if(a.gZ&&a.cy.data[k].bk.s===0.0&&a.cy.data[k].bk.r===0.0&&a.cy.data[k].bk.t===0.0)break c;a.cy.data[k].bk.hV(0.0,0.0,0.0,1.0);}l=a.jQ+Cg(k,a.mb)|0;a.bh.jh(l+a.xv|0,a.cy.data[k].bk.s,
a.cy.data[k].bk.r,a.cy.data[k].bk.t);a.bh.jh(l+a.vN|0,a.cy.data[k].fd.n,a.cy.data[k].fd.o,a.cy.data[k].fd.q);if(a.mb<=0)break b;}k=k+1|0;}}}d:{if(a.ho>=0){k=0;e:while(true){if(k>=a.b$.data.length)break d;f:{if(h!==null&&k<h.h){if(a.gZ&&a.b$.data[k].F6(h.l(k)))break f;a.b$.data[k].Lu(h.l(k));}else{if(a.gZ&&a.b$.data[k].dx===0.0)break f;a.b$.data[k].dx=0.0;}l=a.ho+Cg(k,a.ld)|0;a.bh.jh(l+a.wn|0,a.b$.data[k].bk.s*a.b$.data[k].dx,a.b$.data[k].bk.r*a.b$.data[k].dx,a.b$.data[k].bk.t*a.b$.data[k].dx);a.bh.jh(l+a.Ft
|0,a.b$.data[k].eD.n,a.b$.data[k].eD.o,a.b$.data[k].eD.q);if(a.tn>=0)a.bh.kc(l+a.tn|0,a.b$.data[k].dx);if(a.ld<=0)break e;}k=k+1|0;}}}g:{if(a.eX>=0){k=0;h:while(true){if(k>=a.b4.data.length)break g;i:{if(j!==null&&k<j.h){if(a.gZ&&a.b4.data[k].Ik(j.l(k)))break i;a.b4.data[k].Kc(j.l(k));}else{if(a.gZ&&a.b4.data[k].eg===0.0)break i;a.b4.data[k].eg=0.0;}l=a.eX+Cg(k,a.lG)|0;a.bh.jh(l+a.vD|0,a.b4.data[k].bk.s*a.b4.data[k].eg,a.b4.data[k].bk.r*a.b4.data[k].eg,a.b4.data[k].bk.t*a.b4.data[k].eg);a.bh.sr(l+a.zW|0,a.b4.data[k].hE);a.bh.sr(l
+a.EM|0,a.b4.data[k].h_);a.bh.kc(l+a.zd|0,a.b4.data[k].iZ);a.bh.kc(l+a.BK|0,a.b4.data[k].jf);if(a.vj>=0)a.bh.kc(l+a.vj|0,a.b4.data[k].eg);if(a.lG<=0)break h;}k=k+1|0;}}}Ce();if(Ct(c,BmE))Fv(a,a.EH,(BA(c,BmE)).dX);if(d!==null&&d.iU!==null){D1(a,a.vK,d.iU.Xs());ZE(a,a.yW,d.iU.PY());Fn(a,a.En,1.0/(2.0*(d.iU.PY()).eU.bo()));}a.gZ=1;}
function AQx(){var b,c;Bn9=null;Bn$=null;GO();b=BjR;B2();c=BQ(b,Bnl);Ce();c=BQ(BQ(c,Bmy),Bmz);ET();Bn_=BQ(c,Bmc);Boa=1029;Bob=515;AGI();c=BmO;AJt();Boc=BQ(c,BlR);Bod=ATE();}
function KJ(){var a=this;DP.call(a);a.hE=null;a.h_=null;a.eg=0.0;a.iZ=0.0;a.jf=0.0;}
function A_S(){var a=new KJ();A6m(a);return a;}
function A6m(a){HV(a);a.hE=S();a.h_=S();}
function A2H(a,b){return a.Hl(b.bk,b.hE,b.h_,b.eg,b.iZ,b.jf);}
function A5l(a,b,c,d,e,f,g){if(b!==null)a.bk.eR(b);if(c!==null)a.hE.M(c);if(d!==null)(a.h_.M(d)).bU();a.eg=e;a.iZ=f;a.jf=g;return a;}
function A$m(a,b,c,d,e,f,g,h,i,j,k,l,m){a.bk.hV(b,c,d,1.0);a.hE.I(e,f,g);(a.h_.I(h,i,j)).bU();a.eg=k;a.iZ=l;a.jf=m;return a;}
function ALn(a,b){var c,d,e,f,g;a:{b:{if(b!==null){if(b===a)break b;if(a.bk.z(b.bk)&&a.hE.z(b.hE)){c=a.h_;d=b.h_;if(c.z(d)&&Dl(a.eg,b.eg)&&Dl(a.iZ,b.iZ)){e=a.jf;f=b.jf;if(Dl(e,f))break b;}}}g=0;break a;}g=1;}return g;}
function Xv(){C.call(this);this.FH=0;}
function BfB(){var a=new Xv();AHS(a);return a;}
function AHS(a){J(a);a.FH=2;}
function A25(a,b,c){if(a.FH>=1)(TG()).gh(((((I()).a(b)).a(B(8))).a(c)).b());}
var Mf=D(Dn);
function BbB(){var a=new Mf();A9e(a);return a;}
function A9e(a){Jt(a);}
var L9=D(FU);
var BoO=null;function AQa(){AQa=N(L9);A6F();}
function Ba4(a){var b=new L9();R_(b,a);return b;}
function BeN(a){var b=new L9();UC(b,a);return b;}
function R_(a,b){AQa();Jp(a);a.dZ(AAx(b.de()),1);}
function UC(a,b){AQa();Jp(a);}
function A6F(){BoO=BeN(0);}
function AAx(b){var otherJSObj=Bullet.wrapPointer(b,Bullet.btCollisionConfiguration);var jsObj=new Bullet.btCollisionDispatcher(otherJSObj);return Bullet.getPointer(jsObj);}
function AA6(){var a=this;E5.call(a);a.g7=null;a.g0=null;a.lR=0;}
function BeZ(a){var b=new AA6();AX1(b,a);return b;}
function AX1(a,b){Oq(a,b);}
function A0e(a){Pa(a);a.g7=a.P;a.lR=a.lR+1|0;return a.P;}
function AXZ(a){var b,c;a.lR=Bf(0,a.lR-1|0);if(a.g7===null)return;a:{if(a.g7!==a.P&&!a.lR){a.g0=a.g7;b=0;c=a.g0.data.length;while(true){if(b>=c)break a;a.g0.data[b]=null;b=b+1|0;}}}a.g7=null;}
function Pa(a){if(a.g7!==null&&a.g7===a.P){if(a.g0!==null&&a.g0.data.length>=a.h){X(a.P,0,a.g0,0,a.h);a.P=a.g0;a.g0=null;}else a.j_(a.P.data.length);return;}}
function P2(){C.call(this);this.pw=null;}
function PK(a){var b=new P2();AR5(b,a);return b;}
function AR5(a,b){J(a);a.pw=b;}
function FF(a){return a.pw.BB();}
function Tf(a,b){a.pw.Aj(b);}
function ACV(a,b){var c,d,$$je;if(b===null)b=Y(C,0);a:{b:{c:{try{c=a.pw.Cz(b);}catch($$e){$$je=R($$e);if($$je instanceof C3){d=$$je;break c;}else if($$je instanceof Lj){d=$$je;break a;}else if($$je instanceof Mf){d=$$je;break b;}else if($$je instanceof Mr){d=$$je;G(Ex((((I()).a(B(685))).a((FF(a)).u())).b(),d));}else{throw $$e;}}return c;}G(Ex((((I()).a(B(686))).a((FF(a)).u())).b(),d));}G(Ex((((I()).a(B(687))).a((FF(a)).u())).b(),d));}G(Ex((((I()).a(B(687))).a((FF(a)).u())).b(),d));}
function AB3(){var a=this;Fh.call(a);a.AB=0;a.sj=0;a.tW=null;}
function Be4(a,b,c,d,e,f){var g=new AB3();A_t(g,a,b,c,d,e,f);return g;}
function A_t(a,b,c,d,e,f,g){Ls(a,c,e,f);a.sj=b;a.AB=g;a.tW=d;}
function AIY(a,b){return a.tW.data[b+a.sj|0];}
function A19(a,b,c){a.tW.data[b+a.sj|0]=c;}
function AYF(a){return a.AB;}
var DA=D(Bx);
var BkU=null;var BkX=null;var BoP=null;var BkV=null;var BkW=null;var BoQ=null;function Gl(){Gl=N(DA);AJH();}
function H4(a,b){var c=new DA();Zw(c,a,b);return c;}
function QJ(){Gl();return BoQ.go();}
function Zw(a,b,c){Gl();Cw(a,b,c);}
function AJH(){BkU=H4(B(688),0);BkX=H4(B(689),1);BoP=H4(B(690),2);BkV=H4(B(691),3);BkW=H4(B(692),4);BoQ=H(DA,[BkU,BkX,BoP,BkV,BkW]);}
function RC(){C.call(this);this.I6=null;}
function BcR(a){var b=new RC();AWa(b,a);return b;}
function AWa(a,b){a.I6=b;J(a);}
function ATz(a){(CD()).eu();}
function AK9(a){a.qn();}
var I7=D();
var BoR=null;var BoS=null;function Tr(){Tr=N(I7);AVE();}
function Kr(b){Tr();return !(b&1)?0:1;}
function ABy(b){var c,d,e,f,g,h,i;Tr();c=I();d=AA2();e=0;f=BoS.data;g=f.length;h=0;while(h<g){i=f[h];if(b&i){if(c.i()>0)c.U(32);c.a(d.data[e]);}e=e+1|0;h=h+1|0;}return c.b();}
function AA2(){Tr();if(BoR===null)BoR=H(BN,[B(693),B(694),B(695),B(696),B(697),B(698),B(699),B(700),B(701),B(702),B(703),B(704)]);return BoR;}
function AVE(){BoS=MD([1,4,2,1024,8,16,128,64,32,256,2048,512]);}
function ZL(){var a=this;C.call(a);a.hM=null;a.c3=0;a.Gw=0;}
function AVc(){var a=new ZL();ASe(a);return a;}
function BoT(a,b){var c=new ZL();AAK(c,a,b);return c;}
function ASe(a){AAK(a,1,16);}
function AAK(a,b,c){J(a);a.Gw=b;a.hM=MX(c);}
function A3m(a,b){var c,d,e;c=a.hM;d=c.data;if(a.c3==d.length)c=a.CD(Bf(8,a.c3*1.75|0));d=c.data;e=a.c3;a.c3=e+1|0;d[e]=b;}
function ASy(a){a.c3=0;}
function AWR(a,b){var c;if(b<0)G(W((((I()).a(B(435))).j(b)).b()));c=a.c3+b|0;if(c>a.hM.data.length)a.CD(Bf(Bf(8,c),a.c3*1.75|0));return a.hM;}
function AYW(a,b){var c,d,e;c=MX(b);d=c.data;e=a.hM;X(e,0,c,0,Bq(a.c3,d.length));a.hM=c;return c;}
var Tx=D();
function CF(b){return $rt_floatToIntBits(b);}
function G0(b){return Ok(b);}
function A0F(b){var c,d;c=Ok(b);d=c|((c>>>24)*1.003937005996704|0)<<24;return d;}
function J_(b){return $rt_intBitsToFloat(b&(-16777217));}
var VL=D(T);
function BeG(){var a=new VL();AMx(a);return a;}
function AMx(a){Bo(a);}
function A$e(a){var b;b=BaQ(a);b.be=1;return b;}
function RD(){var a=this;Hl.call(a);a.hI=0;a.cr=null;a.j5=0;a.FJ=0.0;a.ro=0;}
function C6(){var a=new RD();AHI(a);return a;}
function BoU(a){var b=new RD();ON(b,a);return b;}
function BoV(a,b){var c=new RD();ACr(c,a,b);return c;}
function A0V(a,b){return Y(Nv,b);}
function AHI(a){ON(a,16);}
function ON(a,b){ACr(a,b,0.75);}
function Uu(b){var c,d;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function ACr(a,b,c){var d;XP(a);if(b>=0&&c>0.0){d=Uu(b);a.hI=0;a.cr=a.Bk(d);a.FJ=c;Lx(a);return;}G(CL());}
function Lx(a){a.ro=a.cr.data.length*a.FJ|0;}
function AR$(a,b){var c;c=ZX(a,b);if(c===null)return null;return c.hb;}
function ZX(a,b){var c,d,e;if(b===null)c=K2(a);else{d=Kf(b);e=d&(a.cr.data.length-1|0);c=KB(a,b,e,d);}return c;}
function KB(a,b,c,d){var e,f;e=a.cr.data[c];while(e!==null){if(e.pq==d){f=e.hJ;if(V8(b,f))break;}e=e.e$;}return e;}
function K2(a){var b;b=a.cr.data[0];while(b!==null&&b.hJ!==null){b=b.e$;}return b;}
function ANB(a,b,c){return a.Qv(b,c);}
function ARN(a,b,c){var d,e,f,g,h;if(b===null){d=K2(a);if(d===null){a.j5=a.j5+1|0;d=a.wy(null,0,0);e=a.hI+1|0;a.hI=e;if(e>a.ro)a.oU();}}else{f=Kf(b);g=f&(a.cr.data.length-1|0);d=KB(a,b,g,f);if(d===null){a.j5=a.j5+1|0;d=a.wy(b,g,f);e=a.hI+1|0;a.hI=e;if(e>a.ro)a.oU();}}h=d.hb;d.hb=c;return h;}
function APn(a,b,c,d){var e;e=Bcp(b,d);e.e$=a.cr.data[c];a.cr.data[c]=e;return e;}
function A0B(a,b){var c,d,e,f,g,h,i;c=Uu(!b?1:b<<1);d=a.Bk(c);e=0;while(e<a.cr.data.length){f=a.cr.data[e];a.cr.data[e]=null;while(f!==null){g=d.data;h=f.pq&(c-1|0);i=f.e$;f.e$=g[h];g[h]=f;f=i;}e=e+1|0;}a.cr=d;Lx(a);}
function A6K(a){a.Mp(a.cr.data.length);}
function AM6(a,b){var c;c=SO(a,b);if(c===null)return null;return c.hb;}
function SO(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.cr.data[0];while(e!==null){if(e.hJ===null)break a;f=e.e$;d=e;e=f;}}else{g=Kf(b);c=g&(a.cr.data.length-1|0);e=a.cr.data[c];while(e!==null&&!(e.pq==g&&V8(b,e.hJ))){f=e.e$;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.e$=e.e$;else a.cr.data[c]=e.e$;a.j5=a.j5+1|0;a.hI=a.hI-1|0;return e;}
function Kf(b){return b.bp();}
function V8(b,c){return b!==c&&!b.z(c)?0:1;}
function DE(){Bx.call(this);this.Ow=null;}
var Bj1=null;var Bj3=null;var Bj0=null;var Bj2=null;var Bj4=null;var BoW=null;function H3(){H3=N(DE);APi();}
function II(a,b,c){var d=new DE();AB8(d,a,b,c);return d;}
function Mj(){H3();return BoW.go();}
function AB8(a,b,c,d){H3();Cw(a,b,c);a.Ow=d;}
function APi(){Bj1=II(B(705),0,B(325));Bj3=II(B(706),1,B(327));Bj0=II(B(707),2,B(708));Bj2=II(B(709),3,B(326));Bj4=II(B(710),4,B(135));BoW=H(DE,[Bj1,Bj3,Bj0,Bj2,Bj4]);}
function ZM(){Bt.call(this);this.kR=0;}
function BaZ(a){var b=new ZM();A1c(b,a);return b;}
function A1c(a,b){Co(a);a.kR=b;}
function AOh(a,b,c,d){var e;e=!d.jB()?c.i()-b|0:d.J()-b|0;if(e<=0){d.by(a.kR,0);return a.k.e(b,c,d);}if(c.f(b)!=10)return (-1);d.by(a.kR,1);return a.k.e(b+1|0,c,d);}
function A0c(a,b){var c;c=!b.ev(a.kR)?0:1;b.by(a.kR,(-1));return c;}
function AD3(a){return B(711);}
function Dp(){var a=this;BH.call(a);a.d3=null;a.eP=0.0;a.eO=0.0;a.fa=0.0;a.fb=0.0;a.oG=0;}
var Bnl=Ba;var Bno=Ba;var BoX=Ba;var Bm$=Ba;var Bna=Ba;var Bm8=Ba;var Bm9=Ba;var BoY=Ba;function B2(){B2=N(Dp);AJ7();}
function BoZ(a){var b=new Dp();JE(b,a);return b;}
function Bo0(a,b){var c=new Dp();Ko(c,a,b);return c;}
function Bo1(a,b,c,d,e,f,g){var h=new Dp();Oe(h,a,b,c,d,e,f,g);return h;}
function BaV(a,b){var c=new Dp();Zs(c,a,b);return c;}
function Bej(a){var b=new Dp();ACR(b,a);return b;}
function R1(b){B2();return Z(Br(b,BoY),Ba)?0:1;}
function Z2(b){B2();return BaV(Bnl,b);}
function JE(a,b){B2();Fb(a,b);a.eP=0.0;a.eO=0.0;a.fa=1.0;a.fb=1.0;a.oG=0;if(R1(b)){a.d3=A6T();return;}G(U(B(499)));}
function Ko(a,b,c){B2();JE(a,b);a.d3.JX(c);}
function Oe(a,b,c,d,e,f,g,h){B2();Ko(a,b,c);a.eP=d;a.eO=e;a.fa=f;a.fb=g;a.oG=h;}
function Zs(a,b,c){B2();JE(a,b);a.d3.eU=c;}
function ACR(a,b){B2();Oe(a,b.dc,b.d3,b.eP,b.eO,b.fa,b.fb,b.oG);}
function A69(a){return Bej(a);}
function AUk(a){var b,c;b=F2(a);c=(991*b|0)+a.d3.bp()|0;c=(991*c|0)+G0(a.eP)|0;c=(991*c|0)+G0(a.eO)|0;c=(991*c|0)+G0(a.fa)|0;c=(991*c|0)+G0(a.fb)|0;c=(991*c|0)+a.oG|0;return c;}
function AJ7(){Bnl=BR(B(712));Bno=BR(B(713));BoX=BR(B(714));Bm$=BR(B(715));Bna=BR(B(716));Bm8=BR(B(717));Bm9=BR(B(718));BoY=BQ(BQ(BQ(BQ(BQ(BQ(Bnl,Bno),BoX),Bm$),Bna),Bm8),Bm9);}
function ABs(){var a=this;C.call(a);a.R=null;a.Z=0;a.z9=0;}
function Sz(){var a=new ABs();APb(a);return a;}
function Bo2(a,b){var c=new ABs();Uc(c,a,b);return c;}
function APb(a){Uc(a,1,16);}
function Uc(a,b,c){J(a);a.z9=b;a.R=Ca(c);}
function AXU(a,b){var c,d,e;c=a.R;d=c.data;if(a.Z==d.length)c=a.t3(Bf(8,a.Z*1.75|0));d=c.data;e=a.Z;a.Z=e+1|0;d[e]=b;}
function AEU(a,b){a.rJ(b.R,0,b.Z);}
function AQ4(a,b,c,d){if((c+d|0)<=b.Z){a.rJ(b.R,c,d);return;}G(W((((((((I()).a(B(489))).j(c)).a(B(426))).j(d)).a(B(427))).j(b.Z)).b()));}
function AEb(a,b,c,d){var e,f,g;e=a.R;f=e.data;g=a.Z+d|0;if(g>f.length)e=a.t3(Bf(Bf(8,g),a.Z*1.75|0));X(b,c,e,a.Z,d);a.Z=a.Z+d|0;}
function AYn(a,b){if(b<a.Z)return a.R.data[b];G(Bg((((((I()).a(B(428))).j(b)).a(B(429))).j(a.Z)).b()));}
function AU6(a,b,c){var d,e,f,g,h,i;d=a.Z;if(c>=d)G(Bg((((((I()).a(B(432))).j(c)).a(B(429))).j(a.Z)).b()));if(b>c)G(Bg((((((I()).a(B(433))).j(b)).a(B(431))).j(c)).b()));e=(c-b|0)+1|0;f=d-e|0;if(a.z9){g=a.R;h=b+e|0;X(g,h,a.R,b,d-h|0);}else{i=Bf(f,c+1|0);X(a.R,i,a.R,b,d-i|0);}a.Z=f;}
function AWF(a){a.Z=0;}
function AP3(a,b){var c;if(b<0)G(W((((I()).a(B(435))).j(b)).b()));c=a.Z+b|0;if(c>a.R.data.length)a.t3(Bf(Bf(8,c),a.Z*1.75|0));return a.R;}
function ANM(a,b){var c,d,e;c=Ca(b);d=c.data;e=a.R;X(e,0,c,0,Bq(a.Z,d.length));a.R=c;return c;}
function AGl(a,b){if(a.Z>b)a.Z=b;}
var Bh=D();
var Boh=null;var Boi=null;var Boj=null;var Bok=null;var Bol=null;var Bom=null;var Bon=null;var Boo=null;var Bop=null;var Boq=null;var Bor=null;var Bos=null;var Bot=null;var Bou=null;var Bov=null;var Bow=null;var Box=null;var Boy=null;var Boz=null;var BoA=null;var BoB=null;var BoC=null;var BoD=null;var BoE=null;var BoF=null;var BoG=null;var BoH=null;var BoI=null;var BoJ=null;var BoK=null;var BoL=null;var BoM=null;var Bo3=null;var Bo4=null;var Bo5=null;var BoN=null;function Bfi(){Bfi=N(Bh);AWo();}
function AWo(){var b;Boh=Bk(B(475));Boi=Bk(B(719));Boj=Bk(B(720));Bok=Bk(B(721));Bol=Bk(B(722));Bom=Bk(B(723));Bon=Bk(B(724));Boo=Bk(B(725));Bop=Bk(B(726));Boq=Bk(B(727));Bor=Bk(B(728));Bos=Bk(B(729));b=new EY;ET();G1(b,B(730),Bmc);Bot=b;b=new EY;GO();G1(b,B(731),BjR);Bou=b;b=new EY;Ce();G1(b,B(732),Bmy);Bov=b;b=new EY;B2();G1(b,B(733),Bnl);Bow=b;Box=CK(B(734),Bnl);Boy=CK(B(735),Bmz);Boz=CK(B(736),Bno);BoA=CK(B(737),Bno);BoB=CK(B(738),BmB);BoC=CK(B(739),Bm8);BoD=CK(B(740),Bm8);BoE=CK(B(741),BmC);BoF=CK(B(742),
Bm9);BoG=CK(B(743),Bm9);BoH=CK(B(744),Bm$);BoI=CK(B(745),Bm$);BoJ=CK(B(746),Bna);BoK=CK(B(747),Bna);BoL=Bk(B(748));BoM=Bk(B(749));Bo3=Bk(B(750));Bo4=Bk(B(751));Bo5=Bk(B(752));BoN=Bk(B(753));}
var NB=D(FT);
var Bo6=null;function A9D(){A9D=N(NB);AUa();}
function Bae(a,b,c,d){var e=new NB();Te(e,a,b,c,d);return e;}
function Bdi(a){var b=new NB();AA3(b,a);return b;}
function Te(a,b,c,d,e){var f,g,h,i;A9D();HL(a);f=b.de();g=c.de();h=d.de();i=e.de();a.dZ(AAB(f,g,h,i),1);}
function AA3(a,b){A9D();HL(a);}
function AUa(){Bo6=Bdi(0);}
function AAB(b,c,d,e){var dispatcherJSObj=Bullet.wrapPointer(b,Bullet.btDispatcher);var broadphaceJSObj=Bullet.wrapPointer(c,Bullet.btBroadphaseInterface);var solverJSObj=Bullet.wrapPointer(d,Bullet.btConstraintSolver);var configJSObj=Bullet.wrapPointer(e,Bullet.btCollisionConfiguration);var jsObj=new Bullet.btDiscreteDynamicsWorld(dispatcherJSObj,broadphaceJSObj,solverJSObj,configJSObj);return Bullet.getPointer(jsObj);}
function Jq(){var a=this;C.call(a);a.j0=0;a.m$=0;}
var BgZ=null;var BgY=null;function Bj(){Bj=N(Jq);AZs();}
function J8(a,b){var c=new Jq();Xz(c,a,b);return c;}
function Xz(a,b,c){Bj();J(a);a.j0=b;a.m$=c;}
function ANm(a){return a.j0?0:1;}
function A9h(a){return a.j0!=1?0:1;}
function A2K(a){return !a.zp()&&!a.t4()?0:1;}
function AJE(a){return a.j0!=2?0:1;}
function ASh(a){return a.j0!=3?0:1;}
function AIs(a){if(a.mz())return a.m$;G(BfX());}
function BV(b){Bj();return J8(2,b);}
function F$(b){Bj();return J8(3,b);}
function AP$(a){switch(a.j0){case 0:G(BaN());case 1:G(BcX());case 2:G(BdO(a.m$));case 3:G(BaO(a.m$));default:}}
function AZs(){BgZ=J8(0,0);BgY=J8(1,0);}
var Qz=D(D5);
function BaY(){var a=new Qz();AZ4(a);return a;}
function AZ4(a){N6(a);}
var WV=D(Ci);
function BcI(){var a=new WV();A$z(a);return a;}
function A$z(a){DT(a);}
function AQ_(a,b,c,d,e){D1(b,c,b.cV.jA);}
function LR(){Bt.call(this);this.iF=0;}
function Bcj(a){var b=new LR();ABx(b,a);return b;}
function ABx(a,b){Co(a);a.iF=b;}
function A6o(a,b,c,d){var e,f,g,h;e=!d.jB()?c.i():d.J();if(b>=e){d.by(a.iF,0);return a.k.e(b,c,d);}f=e-b|0;if(f==2&&c.f(b)==13){g=b+1|0;if(c.f(g)==10){d.by(a.iF,0);return a.k.e(b,c,d);}}a:{if(f==1){h=c.f(b);if(h==10)break a;if(h==13)break a;if(h==133)break a;if((h|1)==8233)break a;}return (-1);}d.by(a.iF,0);return a.k.e(b,c,d);}
function AX8(a,b){var c;c=!b.ev(a.iF)?0:1;b.by(a.iF,(-1));return c;}
function A3E(a){return B(422);}
var WS=D(Ci);
function A_U(){var a=new WS();AU2(a);return a;}
function AU2(a){DT(a);}
function AOt(a,b,c,d,e){D1(b,c,b.cV.eK);}
var WU=D(Ci);
function BdQ(){var a=new WU();ADK(a);return a;}
function ADK(a){DT(a);}
function A8T(a,b,c,d,e){D1(b,c,b.cV.hs);}
var MR=D(Gn);
var Bo7=null;function AQd(){AQd=N(MR);APR();}
function BbL(){var a=new MR();ZV(a);return a;}
function Bck(a){var b=new MR();YP(b,a);return b;}
function ZV(a){AQd();H2(a);a.dZ(Rg(),1);}
function YP(a,b){AQd();H2(a);}
function APR(){Bo7=Bck(0);}
function Rg(){var jsObj=new Bullet.btDefaultCollisionConfiguration();return Bullet.getPointer(jsObj);}
var WQ=D(Ci);
function Bgg(){var a=new WQ();AR4(a);return a;}
function AR4(a){DT(a);}
function A4i(a,b,c,d,e){LA(b,c,b.cV.c9);}
var WR=D(Ci);
function BdI(){var a=new WR();AFt(a);return a;}
function AFt(a){DT(a);}
function AEq(a,b,c,d,e){DQ(b,c,b.cV.cq.n,b.cV.cq.o,b.cV.cq.q,1.188099980354309/(b.cV.jP*b.cV.jP));}
var WO=D(Ci);
function BaL(){var a=new WO();A06(a);return a;}
function A06(a){DT(a);}
function A6s(a,b,c,d,e){WE(b,c,b.cV.la,b.cV.jP);}
function TE(){var a=this;C.call(a);a.kr=0;a.fZ=0;a.hx=null;a.gc=null;a.E9=0;a.lh=0;a.r9=0;a.t$=0;a.Iu=null;a.hw=0;}
function BcB(a,b){var c=new TE();A$v(c,a,b);return c;}
function Bo8(a,b,c){var d=new TE();YD(d,a,b,c);return d;}
function A$v(a,b,c){YD(a,b,c,(-1));}
function YD(a,b,c,d){var e;J(a);a.r9=0;a.t$=0;a.Iu=A6T();a.hw=0;e=Bq(A2U(),32);if(d<0)d=e-c|0;if(c>=0&&d>=0&&(c+d|0)<=e){a.E9=b;a.kr=c;a.fZ=d;a.hx=Y(Fo,d);a.gc=b!=1?null:Bc(d);return;}G(U(B(754)));}
function A2U(){var b;b=Fk(16);Bip.Or(34930,b);return b.b2(0);}
function A0u(a){var b;b=0;while(b<a.fZ){a.hx.data[b]=null;if(a.gc!==null)a.gc.data[b]=b;b=b+1|0;}}
function AJY(a){Bip.rG(33984);}
function AEO(a,b){return Sk(a,b,0);}
function Sk(a,b,c){var d,e;a:{d=b.eU;a.lh=0;switch(a.E9){case 0:e=a.kr+Ti(a,d)|0;break a;case 1:e=a.kr+UZ(a,d)|0;break a;default:}return (-1);}if(!a.lh)a.t$=a.t$+1|0;else{a.r9=a.r9+1|0;if(c)d.rU(e);else Bip.rG(33984+e|0);}d.LP(b.lA,b.ms);d.Qk(b.mM,b.lM);return e;}
function Ti(a,b){var c,d;c=0;while(true){if(c>=a.fZ){a.hw=(a.hw+1|0)%a.fZ|0;a.hx.data[a.hw]=b;b.rU(a.kr+a.hw|0);return a.hw;}d=(a.hw+c|0)%a.fZ|0;if(a.hx.data[d]===b)break;c=c+1|0;}a.lh=1;return d;}
function UZ(a,b){var c,d;c=0;a:{while(true){if(c>=a.fZ)break a;d=a.gc.data[c];if(a.hx.data[d]===b){a.lh=1;break a;}if(a.hx.data[d]===null)break;c=c+1|0;}}if(c>=a.fZ)c=a.fZ-1|0;d=a.gc.data[c];while(c>0){a.gc.data[c]=a.gc.data[c-1|0];c=c+(-1)|0;}a.gc.data[0]=d;if(!a.lh){a.hx.data[d]=b;b.rU(a.kr+d|0);}return d;}
var WP=D(Ci);
function BfI(){var a=new WP();ASa(a);return a;}
function ASa(a){DT(a);}
function ASR(a,b,c,d,e){LA(b,c,b.cV.ds);}
function WM(){V.call(this);this.yV=null;}
function BbI(){var a=new WM();A4O(a);return a;}
function A4O(a){BM(a);a.yV=BL();}
function AFz(a,b,c,d,e){D1(b,c,(a.yV.ch(b.cV.hs)).hC(d.dy));}
function Gj(){var a=this;C.call(a);a.L=null;a.iE=0;a.eE=0;a.zG=0;a.q9=0;a.ee=0;a.m=0;a.Dr=0;a.i4=null;a.f5=null;a.y=0;a.mH=0;a.lp=0;a.l_=0;a.Bo=null;}
var Bo9=null;var Bo$=null;var Bo_=0;function Bd6(a,b){var c=new Gj();A88(c,a,b);return c;}
function A88(a,b,c){J(a);a.eE=1;a.Bo=b;if((c&16)>0)b=A2q(b);else if((c&128)>0)b=AYA(b);a.L=BW(b.i()+2|0);X(b.rz(),0,a.L,0,b.i());a.L.data[a.L.data.length-1|0]=0;a.L.data[a.L.data.length-2|0]=0;a.Dr=a.L.data.length;a.iE=c;Ee(a);Ee(a);}
function A2N(a){return a.ee;}
function AXO(a,b){if(b>0&&b<3)a.eE=b;if(b==1)YF(a);}
function AXp(a,b){a.iE=b;a.m=a.ee;a.f5=a.i4;a.y=a.lp+1|0;a.l_=a.lp;Ee(a);}
function AHh(a){return a.i4;}
function APd(a){return a.i4===null?0:1;}
function AFJ(a){return a.f5===null?0:1;}
function A6$(a){Ee(a);return a.q9;}
function AYg(a){var b;b=a.i4;Ee(a);return b;}
function AWd(a){return a.m;}
function AIq(a){return a.q9;}
function AYA(b){return b;}
function YF(a){a.m=a.ee;a.f5=a.i4;a.y=a.l_;a.l_=a.lp;Ee(a);}
function Ee(a){var b,c,d,e,f,g,h,$$je;a.q9=a.ee;a.ee=a.m;a.i4=a.f5;a.lp=a.l_;a.l_=a.y;while(true){b=0;a.m=a.y>=a.L.data.length?0:Ia(a);a.f5=null;if(a.eE==4){if(a.m!=92)return;a.m=a.y>=a.L.data.length?0:a.L.data[BF(a)];switch(a.m){case 69:break;default:a.m=92;a.y=a.mH;return;}a.eE=a.zG;a.m=a.y>(a.L.data.length-2|0)?0:Ia(a);}a:{if(a.m!=92){if(a.eE==1)switch(a.m){case 36:a.m=(-536870876);break a;case 40:if(a.L.data[a.y]!=63){a.m=(-2147483608);break a;}BF(a);c=a.L.data[a.y];d=0;while(true){b:{if(d){d=0;switch(c)
{case 33:break;case 61:a.m=(-134217688);BF(a);break b;default:G(BS(B(101),a.b(),a.y));}a.m=(-67108824);BF(a);}else{switch(c){case 33:break;case 60:BF(a);c=a.L.data[a.y];d=1;break b;case 61:a.m=(-536870872);BF(a);break b;case 62:a.m=(-33554392);BF(a);break b;default:a.m=ACK(a);if(a.m<256){a.iE=a.m;a.m=a.m<<16;a.m=(-1073741784)|a.m;break b;}a.m=a.m&255;a.iE=a.m;a.m=a.m<<16;a.m=(-16777176)|a.m;break b;}a.m=(-268435416);BF(a);}}if(!d)break;}break a;case 41:a.m=(-536870871);break a;case 42:case 43:case 63:e=a.y>=
a.L.data.length?42:a.L.data[a.y];switch(e){case 43:a.m=a.m|(-2147483648);BF(a);break a;case 63:a.m=a.m|(-1073741824);BF(a);break a;default:}a.m=a.m|(-536870912);break a;case 46:a.m=(-536870866);break a;case 91:a.m=(-536870821);a.pO(2);break a;case 93:if(a.eE!=2)break a;a.m=(-536870819);break a;case 94:a.m=(-536870818);break a;case 123:a.f5=Uf(a,a.m);break a;case 124:a.m=(-536870788);break a;default:}else if(a.eE==2)switch(a.m){case 38:a.m=(-536870874);break a;case 45:a.m=(-536870867);break a;case 91:a.m=(-536870821);break a;case 93:a.m
=(-536870819);break a;case 94:a.m=(-536870818);break a;default:}}else{f=a.y>=(a.L.data.length-2|0)?(-1):Ia(a);c:{a.m=f;switch(a.m){case -1:G(BS(B(101),a.b(),a.y));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.m
=Sx(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.eE!=1)break a;a.m=(-2147483648)|a.m;break a;case 65:a.m=(-2147483583);break a;case 66:a.m=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:G(BS(B(101),a.b(),a.y));case 68:case 83:case 87:case 100:case 115:case 119:a.f5=K0(F1(a.L,
a.mH,1),0);a.m=0;break a;case 71:a.m=(-2147483577);break a;case 80:case 112:break c;case 81:a.zG=a.eE;a.eE=4;b=1;break a;case 90:a.m=(-2147483558);break a;case 97:a.m=7;break a;case 98:a.m=(-2147483550);break a;case 99:if(a.y>=(a.L.data.length-2|0))G(BS(B(101),a.b(),a.y));a.m=a.L.data[BF(a)]&31;break a;case 101:a.m=27;break a;case 102:a.m=12;break a;case 110:a.m=10;break a;case 114:a.m=13;break a;case 116:a.m=9;break a;case 117:a.m=MV(a,4);break a;case 120:a.m=MV(a,2);break a;case 122:a.m=(-2147483526);break a;default:}break a;}g
=Z0(a);h=0;if(a.m==80)h=1;try{a.f5=K0(g,h);}catch($$e){$$je=R($$e);if($$je instanceof Mp){G(BS(B(101),a.b(),a.y));}else{throw $$e;}}a.m=0;}}if(b)continue;else break;}}
function Z0(a){var b,c,d;b=Gf(10);if(a.y<(a.L.data.length-2|0)){if(a.L.data[a.y]!=123)return (((I()).a(B(755))).a(F1(a.L,BF(a),1))).b();BF(a);c=0;a:{while(a.y<(a.L.data.length-2|0)){c=a.L.data[BF(a)];if(c==125)break a;b.U(c);}}if(c!=125)G(BS(B(101),a.b(),a.y));}if(!b.i())G(BS(B(101),a.b(),a.y));d=b.b();if(d.i()==1)return (((I()).a(B(755))).a(d)).b();b:{c:{if(d.i()>3){if(d.e2(B(755)))break c;if(d.e2(B(756)))break c;}break b;}d=d.ei(2);}return d;}
function Uf(a,b){var c,d,e,f,$$je;c=Gf(4);d=(-1);e=2147483647;a:{while(true){if(a.y>=a.L.data.length)break a;b=a.L.data[BF(a)];if(b==125)break a;if(b==44&&d<0)try{d=Dt(c.b(),10);c.L7(0,c.i());continue;}catch($$e){$$je=R($$e);if($$je instanceof Du){break;}else{throw $$e;}}c.U(b&65535);}G(BS(B(101),a.b(),a.y));}if(b!=125)G(BS(B(101),a.b(),a.y));if(c.i()>0)b:{try{e=Dt(c.b(),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=R($$e);if($$je instanceof Du){}else{throw $$e;}}G(BS(B(101),a.b(),a.y));}else if(d<0)G(BS(B(101),
a.b(),a.y));if((d|e|(e-d|0))<0)G(BS(B(101),a.b(),a.y));f=a.y>=a.L.data.length?42:a.L.data[a.y];c:{switch(f){case 43:a.m=(-2147483525);BF(a);break c;case 63:a.m=(-1073741701);BF(a);break c;default:}a.m=(-536870789);}return Bff(d,e);}
function AIZ(a){return a.Bo;}
function A1A(a){return !a.ee&&!a.m&&a.y==a.Dr&&!a.k0()?1:0;}
function I2(b){return b<0?0:1;}
function ATf(a){return !a.bN()&&!a.k0()&&I2(a.ee)?1:0;}
function AW1(a){return a.ee<=56319&&a.ee>=55296?1:0;}
function A66(a){return a.ee<=57343&&a.ee>=56320?1:0;}
function K6(b){return b<=56319&&b>=55296?1:0;}
function Ki(b){return b<=57343&&b>=56320?1:0;}
function MV(a,b){var c,d,e,f,$$je;c=Gf(b);d=a.L.data.length-2|0;e=0;while(true){f=B9(e,b);if(f>=0)break;if(a.y>=d)break;c.U(a.L.data[BF(a)]);e=e+1|0;}if(!f)a:{try{f=Dt(c.b(),16);}catch($$e){$$je=R($$e);if($$je instanceof Du){break a;}else{throw $$e;}}return f;}G(BS(B(101),a.b(),a.y));}
function Sx(a){var b,c,d,e,f;b=3;c=1;d=a.L.data.length-2|0;e=NM(a.L.data[a.y],8);switch(e){case -1:break;default:if(e>3)b=2;BF(a);a:{while(true){if(c>=b)break a;if(a.y>=d)break a;f=NM(a.L.data[a.y],8);if(f<0)break;e=(e*8|0)+f|0;BF(a);c=c+1|0;}}return e;}G(BS(B(101),a.b(),a.y));}
function ACK(a){var b,c,d;b=1;c=a.iE;a:while(true){if(a.y>=a.L.data.length)G(BS(B(101),a.b(),a.y));b:{c:{d=a.L.data[a.y];switch(d){case 41:BF(a);return c|256;case 45:if(!b)G(BS(B(101),a.b(),a.y));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BF(a);}BF(a);return c;}
function BF(a){a.mH=a.y;if(a.iE&4)VZ(a);else a.y=a.y+1|0;return a.mH;}
function VZ(a){var b;b=a.L.data.length-2|0;a.y=a.y+1|0;a:while(true){if(a.y<b&&Ta(a.L.data[a.y])){a.y=a.y+1|0;continue;}if(a.y>=b)break;if(a.L.data[a.y]!=35)break;a.y=a.y+1|0;while(true){if(a.y>=b)continue a;if(Q2(a,a.L.data[a.y]))continue a;a.y=a.y+1|0;}}return a.y;}
function Q2(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function ABO(b){return Bo9.SI(b);}
function AG7(b){var c,d,e,f,g,h;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;if(!f)g=MD([d,e]);else{h=4519+f|0;g=MD([d,e,h]);}return g;}return null;}
function AMm(b){var c;c=Bo$.b2(b);return c==Bo_?0:1;}
function A5T(b){return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);}
function Ia(a){var b,c,d;b=a.L.data[BF(a)];if(BY(b)){c=a.mH+1|0;if(c<a.L.data.length){d=a.L.data[c];if(BG(d)){BF(a);return Dh(b,d);}}}return b;}
function AFq(a){return a.lp;}
var WN=D(V);
function BbZ(){var a=new WN();AJ_(a);return a;}
function AJ_(a){BM(a);}
function AHO(a,b,c,d,e){D1(b,c,d.dy);}
var XX=D(T);
function BdB(){var a=new XX();ATh(a);return a;}
function ATh(a){Bo(a);}
function ASH(a){return ((CS()).bF(65279,65279)).bF(65520,65533);}
var Zh=D(Jc);
function A_R(){var a=new Zh();ASr(a);return a;}
function ASr(a){Rr(a);}
function AWG(a){var b;b=(YX(a)).f9(1);b.be=1;return b;}
var Xy=D(CO);
var Yr=D();
function HY(){return 1;}
function U9(){var a=this;C.call(a);a.w=null;a.dG=null;a.rq=0;a.gG=null;a.tt=0;a.uS=null;a.qf=0;a.Pa=null;a.LX=0;a.Gp=null;a.QH=0;a.rA=null;a.ta=0;a.oM=null;a.te=0;a.ur=0;a.kD=null;a.NQ=null;a.lb=null;a.l1=null;}
function BdU(a){var b=new U9();A3_(b,a);return b;}
function A3_(a,b){J(a);a.dG=C6();a.rq=1;a.gG=C6();a.tt=1;a.uS=C6();a.qf=1;a.Pa=C6();a.LX=1;a.Gp=C6();a.QH=1;a.rA=C6();a.ta=1;a.oM=C6();a.te=1;a.ur=0;a.w=b;a.kD=(DV()).Fo(40000);a.lb=(DV()).DD(12000);a.NQ=(DV()).LZ(12000);a.l1=(DV()).A0(240000);a.w.pixelStorei(37441,0);}
function Uy(a,b){if(Bb(b)>a.kD.length)a.kD=(DV()).Fo(Bb(b));}
function ACt(a,b){if(Bb(b)>a.lb.length)a.lb=(DV()).DD(Bb(b));}
function ABH(a,b){if(Bb(b)>a.l1.length)a.l1=(DV()).A0(Bb(b));}
function A01(a,b){var c,d,e,f,g;Uy(a,b);c=B8(b);d=0;while(c<BD(b)){e=a.kD;f=b.oa(c);e[d]=f;c=c+1|0;d=d+1|0;}e=a.kD;g=Bb(b);return e.subarray(0,g);}
function ATU(a,b){var c,d,e,f,g;ACt(a,b);c=B8(b);d=0;while(c<BD(b)){e=a.lb;f=b.Km(c);e[d]=f;c=c+1|0;d=d+1|0;}e=a.lb;g=Bb(b);return e.subarray(0,g);}
function ANa(a,b){var c,d,e,f,g;ABH(a,b);c=B8(b);d=0;while(c<BD(b)){e=a.l1;f=b.zo(c);e[d]=f;c=c+1|0;d=d+1|0;}e=a.l1;g=Bb(b);return e.subarray(0,g);}
function XQ(a,b,c){var d,e;d=a.oM.W(Bn(b));if(d===null){d=C6();a.oM.x(Bn(b),d);}e=a.te;a.te=e+1|0;d.x(Bn(e),c);return e;}
function DN(a,b){return (a.oM.W(Bn(a.ur))).W(Bn(b));}
function Un(a,b){var c;c=a.tt;a.tt=c+1|0;a.gG.x(Bn(c),b);return c;}
function Pl(a,b){var c;c=a.rq;a.rq=c+1|0;a.dG.x(Bn(c),b);return c;}
function Tk(a,b){var c;c=a.qf;a.qf=c+1|0;a.uS.x(Bn(c),b);return c;}
function Q_(a,b){var c;c=a.ta;a.ta=c+1|0;a.rA.x(Bn(c),b);return c;}
function A5O(a,b){a.w.activeTexture(b);}
function ALp(a,b,c){var d,e;d=a.w;e=a.rA.W(Bn(c));d.bindTexture(b,e);}
function AKm(a,b,c){a.w.blendFunc(b,c);}
function AN0(a,b){a.w.clear(b);}
function A$A(a,b,c,d,e){a.w.clearColor(b,c,d,e);}
function AEY(a,b){a.w.cullFace(b);}
function A$j(a,b){a.w.depthFunc(b);}
function A0M(a,b){a.w.depthMask(!!b);}
function AXu(a,b,c){a.w.depthRange(b,c);}
function A3d(a,b){a.w.disable(b);}
function A_i(a,b,c,d){a.w.drawArrays(b,c,d);}
function A5Z(a,b,c,d,e){var f,g;f=a.w;g=B8(e);f.drawElements(b,c,d,g);}
function AT1(a,b){a.w.enable(b);}
function A0Q(a){var b;b=a.w.createTexture();return Q_(a,b);}
function AZw(a,b,c){var d;a:{if(b==34016)break a;if(b==3413)break a;if(b==32970)break a;if(b==32968)break a;if(b==34877)break a;if(b==32777)break a;if(b==32971)break a;if(b==32969)break a;if(b==3412)break a;if(b==2885)break a;if(b==3414)break a;if(b==2932)break a;if(b==2886)break a;if(b==33170)break a;if(b==3411)break a;if(b==35739)break a;if(b==35738)break a;if(b==35661)break a;if(b==34076)break a;if(b==36349)break a;if(b==34024)break a;if(b==34930)break a;if(b==3379)break a;if(b==36348)break a;if(b==34921)break a;if
(b==35660)break a;if(b==36347)break a;if(b==34466)break a;if(b==3333)break a;if(b==3410)break a;if(b==32936)break a;if(b==32937)break a;if(b==34817)break a;if(b==34816)break a;if(b==34818)break a;if(b==34819)break a;if(b==36003)break a;if(b==36004)break a;if(b==36005)break a;if(b==3415)break a;if(b==2961)break a;if(b==2964)break a;if(b==2962)break a;if(b==2965)break a;if(b==2966)break a;if(b==2967)break a;if(b==2963)break a;if(b==2968)break a;if(b==3408)break a;if(b==3317)break a;G(U(B(757)));}d=a.w.getParameter(b);c.tj(0,
d);}
function AUp(a,b,c){a.w.pixelStorei(b,c);}
function AJN(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q;if(j===null){k=a.w;l=null;k.texImage2D(b,c,d,e,f,g,h,i,l);}else if(BD(j)>4){m=!(j instanceof DW)?a.H$(j):a.ux(j);a.w.texImage2D(b,c,d,e,f,g,h,i,m);}else{n=j.O6(0);FD();o=BjD.W(Bn(n));if(o.QB()){p=a.w;q=o.Oe();p.texImage2D(b,c,d,h,i,q);}else if(!o.JP()){p=a.w;q=o.sW();p.texImage2D(b,c,d,h,i,q);}else{p=a.w;q=o.Jr();p.texImage2D(b,c,d,h,i,q);}}}
function A6v(a,b,c,d){a.w.texParameterf(b,c,d);}
function AX3(a,b,c,d,e){a.w.viewport(b,c,d,e);}
function ALC(a,b,c){var d,e;d=a.dG.W(Bn(b));e=a.gG.W(Bn(c));a.w.attachShader(d,e);}
function AOA(a,b,c){var d,e;d=a.w;e=a.uS.W(Bn(c));d.bindBuffer(b,e);}
function AZV(a,b,c,d,e){a.w.blendFuncSeparate(b,c,d,e);}
function AZf(a,b,c,d,e){var f,g,h,i;if(d instanceof DW){f=d;g=a.ux(f);a.w.bufferData(b,g,e);}else{if(!(d instanceof GI))G(U(B(758)));h=a.w;i=a.KX(d);h.bufferData(b,i,e);}}
function AM1(a,b,c,d,e){var f,g;if(e instanceof DW){f=a.w;g=a.ux(e);f.bufferSubData(b,c,g);}}
function AID(a,b){var c;c=a.gG.W(Bn(b));a.w.compileShader(c);}
function AGS(a){var b;b=a.w.createProgram();return Pl(a,b);}
function A1t(a,b){var c;c=a.w.createShader(b);return Un(a,c);}
function AQm(a,b){a.w.disableVertexAttribArray(b);}
function A6J(a,b,c,d,e){a.w.drawElements(b,c,d,e);}
function ARE(a,b){a.w.enableVertexAttribArray(b);}
function AZA(a){var b;b=a.w.createBuffer();return Tk(a,b);}
function A5Y(a,b){a.w.generateMipmap(b);}
function AN5(a,b,c,d,e){var f,g,h;f=a.w;g=a.dG.W(Bn(b));h=f.getActiveAttrib(g,c);d.gs(h.size);e.gs(h.type);return $rt_str(h.name);}
function ADS(a,b,c,d,e){var f,g,h;f=a.w;g=a.dG.W(Bn(b));h=f.getActiveUniform(g,c);d.gs(h.size);e.gs(h.type);return $rt_str(h.name);}
function AI0(a,b,c){var d;d=a.dG.W(Bn(b));return a.w.getAttribLocation(d,$rt_ustr(c));}
function ALY(a,b,c){if(b!=2931&&b!=2849&&b!=32824&&b!=10752&&b!=32938)G(U(B(759)));c.KB(0,a.w.getParameter(b));}
function AJU(a,b,c,d){var e,f,g,h,i;if(c!=35712&&c!=35714&&c!=35715){e=a.w;f=a.dG.W(Bn(b));d.gs(e.getProgramParameter(f,c));}else{g=a.w;h=a.dG.W(Bn(b));i=g.getProgramParameter(h,c)?1:0;d.gs(!i?0:1);}}
function AY0(a,b){var c,d;c=a.w;d=a.dG.W(Bn(b));return $rt_str(c.getProgramInfoLog(d));}
function A5W(a,b,c,d){var e,f,g,h;if(c!=35713&&c!=35712){e=a.w;f=a.gG.W(Bn(b));g=e.getShaderParameter(f,c);d.gs(g);}else{h=a.w;e=a.gG.W(Bn(b));g=h.getShaderParameter(e,c)?1:0;d.gs(!g?0:1);}}
function A$Y(a,b){var c,d;c=a.w;d=a.gG.W(Bn(b));return $rt_str(c.getShaderInfoLog(d));}
function AG1(a,b,c){var d,e,f;d=a.w;e=a.dG.W(Bn(b));f=d.getUniformLocation(e,$rt_ustr(c));if(f!==null)return XQ(a,b,f);return (-1);}
function AUy(a,b){var c,d;c=a.w;d=a.dG.W(Bn(b));c.linkProgram(d);}
function AVW(a,b,c){var d,e;d=a.w;e=a.gG.W(Bn(b));d.shaderSource(e,$rt_ustr(c));}
function AOk(a,b,c,d){var e,f;e=a.w;f=d;e.texParameterf(b,c,f);}
function AWc(a,b,c){var d;d=DN(a,b);a.w.uniform1f(d,c);}
function AOQ(a,b,c){var d;d=DN(a,b);a.w.uniform1i(d,c);}
function AMa(a,b,c,d){var e;e=DN(a,b);a.w.uniform2f(e,c,d);}
function A0a(a,b,c,d,e){var f;f=DN(a,b);a.w.uniform3f(f,c,d,e);}
function AYe(a,b,c,d,e){var f;f=DN(a,b);a.w.uniform3fv(f,Nk(d));}
function AEf(a,b,c,d,e,f){var g;g=DN(a,b);a.w.uniform4f(g,c,d,e,f);}
function AQT(a,b,c,d,e,f){var g;g=DN(a,b);a.w.uniformMatrix3fv(g,!!d,Nk(e));}
function A0Y(a,b,c,d,e,f){var g;g=DN(a,b);a.w.uniformMatrix4fv(g,!!d,Nk(e));}
function A11(a,b){var c,d;a.ur=b;c=a.w;d=a.dG.W(Bn(b));c.useProgram(d);}
function A90(a,b,c,d,e,f,g){a.w.vertexAttribPointer(b,c,d,!!e,f,g);}
var XY=D(Fr);
function Bc$(a,b,c,d,e,f){var g=new XY();AEj(g,a,b,c,d,e,f);return g;}
function AEj(a,b,c,d,e,f,g){Lu(a,b,c,d,e,f,g);}
function A4W(a,b){var c,d,e,f;c=a.fH.A.data;d=a.fC;e=b*2|0;f=(c[d+e|0]&255)<<8|a.fH.A.data[(a.fC+e|0)+1|0]&255;return f<<16>>16;}
function AYu(a,b,c){var d,e,f;d=a.fH.A.data;e=a.fC;f=b*2|0;d[e+f|0]=c>>8<<24>>24;a.fH.A.data[(a.fC+f|0)+1|0]=c<<24>>24;}
$rt_packages([-1,"com",0,"badlogic",1,"gdx",2,"utils",3,"reflect",2,"graphics",5,"g2d",-1,"java",7,"util",8,"regex",7,"nio",10,"charset",7,"io",7,"lang"]);
$rt_metadata([C,"Object",13,0,[],0,3,0,0,["RN",Bgy(EM),"T7",Bgy(Ck),"bp",Bgy(MO),"z",Bgz(AMT),"b",Bgy(PW),"UO",Bgy(Is),"go",Bgy(ALU)],T,0,C,[],1,0,0,0,["d",Bgy(Bo),"Hs",Bgz(A67)],RS,0,T,[],0,0,0,0,["d",Bgy(A7C),"T",Bgy(AYH)],Qs,0,T,[],0,0,0,0,["d",Bgy(A96),"T",Bgy(AMY)],I1,0,C,[],3,3,0,0,0,V6,0,C,[],0,3,0,0,["Rb",BgA(ARe),"tK",Bgy(AHY),"dO",Bgz(A$b),"Lp",Bgy(AJk),"ef",Bgz(A7V),"el",Bgz(A0l),"dR",Bgz(A_N)],E2,0,C,[],3,3,0,0,0,HJ,0,C,[E2],1,3,0,0,["d",Bgy(P9),"jk",Bgy(A1k),"Pw",Bgy(AXj)],Ws,0,C,[],4,3,0,0,0,B4,
0,C,[],3,3,0,0,0,D3,0,C,[B4],1,3,0,0,["d",Bgy(ACq)],B$,0,C,[],3,3,0,0,0,D4,0,D3,[B$],0,3,0,C1,["bj",Bgz(Hr),"lm",Bgy(AV_),"b",Bgy(ASD),"bp",Bgy(AUR),"z",Bgz(A$J)],Ez,0,C,[],0,0,0,Bau,0,Bt,0,C,[],1,0,0,W4,["d",Bgy(Co),"xg",Bgz(I_),"cE",BgB(F3),"cI",BgC(Gb),"AG",Bgz(AYh),"i6",Bgy(AXn),"F5",Bgy(ANg),"b",Bgy(APU),"Jy",Bgy(AQD),"Q",Bgz(LL),"ca",Bgz(A87),"h8",Bgy(A$p),"ed",Bgy(OP)],BB,0,Bt,[],0,0,0,0,["d",Bgy(CQ),"iS",BgA(SA),"e",BgB(AJo),"Q",Bgz(AOH),"u",Bgy(ALc),"ca",Bgz(A29),"ba",Bgz(APz),"ed",Bgy(AGh)],Fz,0,BB,
[],0,0,0,0,["XD",BgA(Qe),"e",BgB(ADN),"cE",BgB(AMy),"cI",BgC(A7u),"ca",Bgz(A20),"h8",Bgy(A5K),"ed",Bgy(ATg)],HR,0,C,[],1,3,0,0,["XV",BgC(ACm),"uC",BgB(Yz),"Tp",Bgz(K3),"vi",Bgz(ATt),"SO",Bgz(LS),"qT",Bgz(A1L),"Up",BgB(ID),"F4",Bgz(XW),"Tj",Bgz(JN),"LA",Bgz(A3J),"Xe",Bgy(OV),"uW",Bgy(AOv)],Do,0,HR,[],1,3,0,0,["uC",BgB(GH),"OW",BgA(AE3)],Xx,0,Do,[],0,3,0,0,["Jm",BgB(A52),"mX",function(b,c,d,e,f,g,h){return A6_(this,b,c,d,e,f,g,h);}],Cr,0,C,[],3,3,0,0,0,BT,0,C,[Cr],1,3,0,0,["d",Bgy(B_),"dZ",BgA(AWt),"yI",Bgz(AKf),
"z",Bgz(ADb),"bp",Bgy(A5i),"de",Bgy(AW2),"iz",Bgy(AKU),"b",Bgy(AVH)],F9,0,BT,[],0,3,0,AH9,["b6",Bgz(XD),"d",Bgy(If),"J7",Bgz(ASx)],Og,0,F9,[],0,3,0,ARH,["TO",BgC(SC),"I3",Bgy(AKl),"b6",Bgz(AB5)],Dj,0,BT,[],0,3,0,H5,["b6",Bgz(AAT),"Os",Bgz(ARo),"Ku",Bgz(AS$)],Ey,0,C,[E2],0,3,0,LY,["bP",Bgz(Wu),"Wu",BgA(NT)],Ja,0,T,[],0,0,0,0,["d",Bgy(Qb),"T",Bgy(P5)],Bw,0,C,[],0,3,0,BbY,0,O_,0,Fz,[],0,0,0,0,["RY",Bgz(APN),"cE",BgB(AIE),"cI",BgC(A_x),"h8",Bgy(AGx)],Db,0,C,[],0,3,0,0,["oe",Bgy(AZ2),"mS",Bgy(AP9),"GB",Bgy(AJh),
"FF",Bgy(A1j),"y2",Bgz(ATK)],B5,0,Db,[],0,3,0,0,["d",Bgy(E$),"jb",BgA(JV),"bP",Bgz(Mk)],Bm,"RuntimeException",13,B5,[],0,3,0,0,["d",Bgy(Cx),"jb",BgA(P1),"bP",Bgz(EF)],Uz,"BufferOverflowException",11,Bm,[],0,3,0,0,["d",Bgy(ANQ)],LM,0,C,[],3,3,0,0,0,ZO,0,C,[LM],0,3,0,0,["V2",Bgz(AC6),"ON",Bgy(A89),"HS",Bgy(AVV),"KU",Bgy(AJL),"eu",Bgy(APw),"nJ",Bgy(AWL),"v5",function(b,c,d,e,f){A6n(this,b,c,d,e,f);},"D8",BgB(AOu),"kn",BgA(AJa),"GJ",BgB(AHf),"tV",BgB(ASl),"Mh",BgC(A4z),"LL",function(b,c,d,e,f){AS6(this,b,c,d,e,
f);}],B3,0,C,[],3,3,0,0,0,VM,0,C,[B3],1,3,0,0,0,Hd,0,T,[],0,0,0,0,["d",Bgy(QB),"T",Bgy(RU)],ABD,0,Hd,[],0,0,0,0,["d",Bgy(A1u),"T",Bgy(ANq)],Ow,0,C,[],3,3,0,0,0,Wb,0,C,[E2,Ow],0,0,0,0,["TE",Bgz(ADR),"nU",Bgz(ASM),"fe",Bgy(A9q),"P0",Bgy(AR8)],Bx,0,C,[B$,B4],1,3,0,0,["dT",BgA(Cw),"Ri",Bgy(BC),"b",Bgy(A02)],Dk,0,Bx,[],12,3,0,Vy,0,BJ,0,Bt,[],1,0,0,0,["xg",Bgz(VR),"d",Bgy(C2),"e",BgB(A$9),"cg",Bgy(A8t),"ba",Bgz(AK1)],Pe,0,BJ,[],0,0,0,0,["E_",Bgz(A0_),"bH",BgA(A7B),"u",Bgy(A8S)],Fp,0,C,[],3,3,0,0,0,Jf,0,C,[Fp],0,3,
0,0,["d",Bgy(ACS),"ls",Bgz(AV1),"na",BgA(ARM)],Ir,0,Jf,[],0,3,0,0,["Tr",Bgz(VA),"VN",function(b,c,d,e,f){ABZ(this,b,c,d,e,f);},"U6",function(b,c,d,e,f,g){O3(this,b,c,d,e,f,g);},"iq",BgC(OQ),"r0",BgC(AOK),"i_",BgB(VU),"QU",BgB(ADz),"hQ",BgC(AAw),"Oa",BgC(ADn)],FO,"CharSequence",13,C,[],3,3,0,0,0,D7,0,Db,[],0,3,0,0,["jb",BgA(SU),"bP",Bgz(XO),"EX",Bgz(AAl)]]);
$rt_metadata([FS,0,D7,[],0,3,0,0,["bP",Bgz(OX)],RH,0,C,[],0,3,0,0,["d",Bgy(AHy),"mt",BgA(XT),"e8",Bgz(ARV),"JC",Bgz(AYC),"Nc",Bgz(AR7)],Ej,"IndexOutOfBoundsException",13,Bm,[],0,3,0,0,["d",Bgy(PY),"bP",Bgz(M7)],ACw,"StringIndexOutOfBoundsException",13,Ej,[],0,3,0,0,["d",Bgy(ARd)],Mp,"MissingResourceException",8,Bm,[],0,3,0,0,["Xh",BgB(AZX)],KF,0,C,[],0,3,0,M0,0,Jy,0,C,[],1,3,0,0,["uC",BgB(U0),"Wt",Bgz(Od),"vi",Bgz(A9d),"W1",Bgz(Lf),"qT",Bgz(A1e),"Vq",BgB(IX),"UB",Bgz(KW),"XZ",Bgy(ACd),"Qz",Bgz(WW),"Hf",Bgz(ANr),
"uW",Bgy(AZq)],KH,0,C,[],4,3,0,Bc4,0,FM,0,BB,[],0,0,0,0,["fU",BgA(Kh),"e",BgB(AEo),"Q",Bgz(A6x),"j9",Bgz(AGN),"u",Bgy(AVD),"ba",Bgz(APQ)],YR,0,FM,[],0,0,0,0,["fU",BgA(AIR),"e",BgB(AMs),"u",Bgy(AXd)],LZ,0,C,[B3],3,3,0,0,0,I3,0,C,[],4,3,0,Ev,0,EL,0,Bx,[],12,3,0,O6,0,Y6,0,T,[],0,0,0,0,["wk",BgA(AGy),"KM",BgB(AS2),"T",Bgy(AZ_)],L0,0,C,[],3,3,0,0,0,Gi,0,C,[L0],3,3,0,0,0,NJ,0,C,[],3,3,0,0,0,DS,0,C,[Gi,NJ],1,3,0,0,["d",Bgy(G_),"nc",BgB(ADW)],Ln,0,DS,[],0,3,0,ATo,["vZ",Bgz(A5d)],Dd,0,Bt,[],1,0,0,0,["gD",BgB(FW),"pW",
Bgy(A_h),"ca",Bgz(AQc),"ba",Bgz(A9l),"ed",Bgy(AM2)],RA,0,Dd,[],0,0,0,0,["gD",BgB(AEA),"e",BgB(A_d),"cE",BgB(AQ2),"u",Bgy(A6g)],IL,0,C,[B3],3,3,0,0,0,SY,0,C,[IL],0,0,0,0,["V8",Bgz(A43),"qn",Bgy(AUV),"JQ",Bgy(AF0)],Cy,0,Bt,[],0,0,0,JF,["bj",Bgz(Et),"e",BgB(AEW),"ka",Bgy(A3N),"u",Bgy(AJ1),"ba",Bgz(AFw)],Kt,0,Cy,[],0,0,0,0,["bj",Bgz(AB4),"e",BgB(AFI),"u",Bgy(A8Y)],MB,0,C,[Cr],3,3,0,0,0,OU,0,BB,[],0,0,0,0,["o9",Bgz(ARJ),"Q",Bgz(AZ0),"e",BgB(AKi),"u",Bgy(A5V)],CI,0,Dd,[],0,0,0,0,["gD",BgB(Fd),"e",BgB(AVh),"u",Bgy(A1J)],Rz,
0,CI,[],0,0,0,0,["gD",BgB(AXE),"e",BgB(ATw)],Kp,0,C,[],3,3,0,0,0,AAq,0,Do,[],0,3,0,0,["kd",Bgz(ATa),"mX",function(b,c,d,e,f,g,h){return AJz(this,b,c,d,e,f,g,h);}],Dc,0,C,[],0,3,0,0,0,BH,0,C,[B$],1,3,0,NK,["FU",Bgz(Fb),"zK",Bgz(AWy),"z",Bgz(AUv),"b",Bgy(ARI),"bp",Bgy(F2)],Dn,0,B5,[],0,3,0,0,["d",Bgy(Jt)],Iv,0,C,[],3,3,0,0,0,H7,0,C,[Iv],0,3,0,0,["d",Bgy(QN),"Aj",Bgz(AVq)],KQ,0,C,[],3,3,0,0,0,FA,0,H7,[KQ],0,3,0,0,["X0",function(b,c,d,e,f,g){AAF(this,b,c,d,e,f,g);},"BB",Bgy(AUm),"sq",Bgy(AOO),"vz",Bgy(AJG),"b",
Bgy(AER),"Cz",Bgz(A72)],AAg,"CoderMalfunctionError",11,D7,[],0,3,0,0,["EX",Bgz(AM$)],Mm,0,C,[B3],3,3,0,0,0,XU,0,C,[Mm],0,0,0,0,["S_",Bgz(ALz),"Il",Bgy(AP8),"T2",Bgy(AOw)],XR,0,CI,[],0,0,0,0,["gD",BgB(A2k),"e",BgB(A4h)],By,0,C,[],0,3,0,J9,0,ES,0,C,[B4,FO],0,0,0,0,["d",Bgy(J7),"bj",Bgz(JT),"Uu",Bgz(Y4),"Wm",Bgz(Lk),"k5",BgA(NX),"X1",Bgz(PH),"AY",BgA(AVY),"LJ",BgB(A1M),"RS",Bgz(ACg),"DX",BgA(RN),"M3",BgB(AMZ),"VT",Bgz(TM),"CV",BgA(Z5),"S6",Bgz(Nc),"vc",BgA(Ox),"wV",BgA(QI),"SE",Bgz(Th),"xy",BgA(OI),"gY",Bgz(Mz),
"b",Bgy(Nw),"i",Bgy(M4),"f",Bgz(O5),"E1",BgB(PL),"vB",BgC(ZQ),"Xw",Bgz(ACQ),"tY",BgB(Or),"uH",BgC(Mq),"Wi",Bgz(NE),"d_",BgA(AA$),"pv",BgC(Yt),"uz",Bgz(ABM),"VB",Bgz(AB0),"VE",BgA(ACf),"ce",BgA(Xc)],Fw,0,C,[],3,3,0,0,0,PI,0,ES,[Fw],0,3,0,0,["d",Bgy(A1i),"IK",Bgz(AHb),"I_",Bgz(AQ3),"Lm",BgB(ATv),"Py",Bgz(AHW),"Nu",BgB(AV9),"By",Bgz(A84),"IC",BgC(A3F),"OB",BgC(A3W),"QP",BgA(A9K),"HG",BgA(A7n),"uH",BgC(AIz),"tY",BgB(AW3),"vB",BgC(A0A),"E1",BgB(A6Y),"f",Bgz(AUS),"i",Bgy(A_c),"b",Bgy(AXh),"gY",Bgz(AXx),"vc",BgA(A8o),
"k5",BgA(AU7)],EJ,0,C,[],3,3,0,0,0,CT,0,C,[],1,3,0,0,["bj",Bgz(FJ),"Wr",Bgy(CV),"SN",Bgy(B8),"cZ",Bgz(GL),"Tf",Bgy(BD),"cm",Bgz(IZ),"c1",Bgy(FZ),"db",Bgy(G7),"VL",Bgy(Bb),"Vr",Bgy(Cb)],N7,0,C,[],4,3,0,AIr,0,E8,0,C,[],1,0,0,0,["d",Bgy(Mi)]]);
$rt_metadata([Q,0,E8,[],1,0,0,Ke,["d",Bgy(Be),"bK",Bgy(AW0),"ci",Bgy(AVZ),"Ga",Bgy(A3L),"Dh",Bgy(A1b),"mh",Bgy(A8j),"N8",Bgy(AEP),"mR",Bgy(AW$),"g8",Bgy(A$n),"f9",Bgz(ARR),"jH",Bgy(AIx)],ZA,0,Q,[],0,0,0,0,["WU",Bgz(A2i),"p",Bgz(ATj)],Gw,0,C,[],4,0,0,AP1,["d",Bgy(TW),"Wj",Bgz(ACc)],Nz,0,C,[],3,3,0,0,0,J0,0,C,[B4],0,3,0,Vd,["MM",Bgz(ADG),"GI",Bgz(A$3),"d",Bgy(Qt),"DM",BgA(A5v),"wS",Bgy(A03),"Ld",Bgy(AQS),"NS",BgB(AUc)],K5,0,C,[],3,3,0,0,0,ABu,0,C,[K5],0,3,0,0,["Tn",Bgz(ASJ),"Op",BgA(AYj),"oc",Bgz(A9O),"Fq",Bgz(AWU)],EN,
0,Bx,[],12,0,0,AA8,0,IR,0,T,[],0,0,0,0,["d",Bgy(TT),"T",Bgy(ZC)],R0,0,T,[],0,0,0,0,["d",Bgy(AGc),"T",Bgy(A0C)],Nl,0,C,[],3,3,0,0,0,Ek,0,BB,[],0,0,0,0,["yl",BgA(J4),"Q",Bgz(A$t),"e",BgB(AOn),"u",Bgy(A5b),"vs",BgB(AKN),"ca",Bgz(ALx),"ba",Bgz(A6B)],AAf,0,Ek,[],0,0,0,0,["yl",BgA(AXr)],Jw,0,C,[],1,3,0,0,["d",Bgy(Xg),"IX",Bgz(ALk),"XB",Bgy(N_),"jk",Bgy(ANZ),"nU",Bgz(APg),"R6",Bgz(Zk)],Zq,0,C,[B3],1,3,0,0,0,Da,0,Jy,[],1,3,0,0,["uC",BgB(GD),"F_",BgA(ARS)],X_,0,Da,[],0,3,0,0,["kd",Bgz(AGF),"nd",function(b,c,d,e,f,g,
h){return AT9(this,b,c,d,e,f,g,h);}],Yo,0,C,[],4,3,0,0,0,Gg,0,C,[Cr],0,3,0,FD,["ND",Bgz(Pc),"Ve",BgB(T_),"D5",Bgz(ADF),"f8",Bgy(AG8),"ky",Bgy(AKX),"l0",Bgy(ANw),"le",Bgy(AQt),"bo",Bgy(AJw),"bl",Bgy(AMX),"kA",Bgy(A7l),"iz",Bgy(AXP),"sW",Bgy(ADX),"QB",Bgy(AFv),"Oe",Bgy(ARb),"JP",Bgy(A5k),"Jr",Bgy(A$G),"zi",function(b,c,d,e,f,g,h){AZb(this,b,c,d,e,f,g,h);},"Lv",function(b,c,d,e,f,g,h,i,j){APq(this,b,c,d,e,f,g,h,i,j);}],HD,0,BH,[],0,3,0,ABF,0,ACG,0,Cy,[],0,0,0,0,["d",Bgy(AUt),"e",BgB(AYd),"u",Bgy(A1_)],KR,0,C,[],
3,3,0,0,0,JC,0,BB,[],0,0,0,0,["iS",BgA(V0),"e",BgB(AOp),"u",Bgy(AMp),"ba",Bgz(A60)],Dr,0,JC,[],0,0,0,0,["iS",BgA(Gc),"e",BgB(AYU),"Q",Bgz(A6y),"u",Bgy(AD7)],VD,0,Dr,[],0,0,0,0,["iS",BgA(AJf),"e",BgB(AOE),"ba",Bgz(ARZ),"u",Bgy(A$o)],Gx,0,C,[],3,3,0,0,0,Pv,0,C,[Gx],0,3,0,0,["d",Bgy(A5L)],Ie,0,C,[MB],1,3,0,0,["d",Bgy(SF),"J1",Bgz(A2d)],Pu,0,Ie,[],0,3,0,0,["S8",Bgz(WX),"d",Bgy(A$q),"Gc",Bgz(ASm)],ABz,0,Dr,[],0,0,0,0,["iS",BgA(AIt),"e",BgB(AFm),"ba",Bgz(A8z),"u",Bgy(AJc)],Le,0,C,[],3,3,0,0,0,Ho,0,C,[Le],0,3,0,0,
["X4",BgC(AYa),"x4",Bgy(AUM),"zZ",Bgy(AYb),"Qw",Bgy(AMv),"Fm",Bgy(A15),"bo",Bgy(ALF),"bl",Bgy(AYr),"f8",Bgy(AIi),"QR",Bgy(AVO),"qI",Bgy(AHr),"Ol",Bgy(A4k),"Hc",Bgz(AYI)],Hy,"UnsupportedOperationException",13,Bm,[],0,3,0,0,["d",Bgy(R7)],ACL,"ReadOnlyBufferException",10,Hy,[],0,3,0,0,["d",Bgy(A18)],N2,0,BH,[],0,3,0,GO,0,Z1,0,C,[],4,3,0,0,0,DP,0,C,[],1,3,0,0,["d",Bgy(HV)],OB,0,DP,[],0,3,0,0,["d",Bgy(AKr),"Lu",Bgz(AKx),"H4",BgB(AN1),"Ij",function(b,c,d,e,f,g,h){return AFh(this,b,c,d,e,f,g,h);},"F6",Bgz(AXC)],AAm,
0,C,[],0,3,0,0,["d",Bgy(AFN)],UD,0,C,[Fp],0,3,0,0,["RI",Bgz(AE1),"lH",Bgz(AKI),"oF",Bgz(AT8),"ls",Bgz(AUq),"iq",BgC(AEx),"hQ",BgC(AQq),"i_",BgB(AII),"na",BgA(ARY),"oJ",BgA(A36)],FL,0,FS,[],0,3,0,0,["bP",Bgz(KG)],AAd,0,FL,[],0,3,0,0,["bP",Bgz(AF4)],Pr,0,T,[],0,0,0,0,["d",Bgy(AF6),"T",Bgy(AHB)],IS,0,C,[B3],3,3,0,0,0,Cz,0,C,[],3,3,0,0,0,IE,0,C,[Cz],3,3,0,0,0,Jb,0,C,[IE],1,3,0,0,["d",Bgy(Um),"II",Bgz(AZz)],E9,0,C,[Gi],1,3,0,0,["d",Bgy(Kw),"rw",BgB(A8Z),"fP",Bgy(A1d)],ABj,0,E9,[],0,3,0,0,["W7",BgB(ACX),"T1",Bgz(AFr),
"Bh",Bgy(AX4),"rw",BgB(A$B),"fP",Bgy(AJ3)],Tw,0,C,[],4,3,0,0,0]);
$rt_metadata([IN,0,CT,[B$],1,3,0,0,["gd",BgB(AAh),"Sr",Bgy(Tz),"c1",Bgy(A4u)],JH,0,C,[],1,3,0,0,["d",Bgy(Tl),"PL",Bgz(A8K),"NT",Bgy(A8u),"GC",Bgz(AJe),"Kn",BgA(AHi),"HI",BgC(AXt)],CG,0,Dd,[],0,0,0,0,["lk",BgB(E4),"e",BgB(AUY),"u",Bgy(AXX)],Ed,0,CG,[],0,0,0,0,["lk",BgB(Ns),"e",BgB(A3y),"Q",Bgz(AUf)],TX,0,Ed,[],0,0,0,0,["lk",BgB(A$D),"e",BgB(ANf)],Hv,0,C,[],3,3,0,0,0,V,0,C,[Hv],1,3,0,0,["d",Bgy(BM),"x3",BgA(AIC)],ABt,0,C,[],0,0,0,0,["d",Bgy(AL4),"Gz",BgC(AU0)],XE,0,C,[],0,3,0,0,0,Nm,0,C,[],3,3,0,0,0,Hf,0,Bm,[],
0,3,0,0,0,GE,0,BT,[],0,3,0,AJM,["d",Bgy(Jg),"b6",Bgz(Pm)],FT,0,GE,[],0,3,0,AG$,["b6",Bgz(Tn),"d",Bgy(HL),"IN",Bgz(A0v),"Ix",Bgz(AY5),"G_",Bgz(AXI),"HJ",Bgz(ASV)],GB,0,C,[],1,3,0,0,["d",Bgy(UL)],Xi,0,C,[],4,0,0,0,0,OY,0,Q,[],0,0,0,0,["RH",Bgz(A63),"p",Bgz(AG2)],C0,0,C,[B$],1,3,0,0,["Si",BgA(GG),"ya",Bgy(Z_),"Qz",Bgz(ZK),"F4",Bgz(UI)],RO,0,C0,[],0,3,0,0,["WQ",BgB(AFb),"lL",Bgy(AKE),"mw",Bgy(ADY)],BZ,0,C,[],0,3,0,0,["d",Bgy(C7),"ek",Bgz(AQw),"ck",Bgz(AWi)],PD,0,BZ,[],0,0,0,0,["Tq",BgA(AY3),"ek",Bgz(A4r),"ck",Bgz(AZm),
"Jd",BgA(ANc),"ct",BgA(AFH)],PU,0,C,[],4,3,0,0,0,Hi,0,C,[],3,3,0,0,0,Sh,0,C,[Hi],0,3,0,0,["X9",BgC(A0k),"fe",Bgy(AKA)],PE,0,BZ,[],0,0,0,0,["XJ",BgB(AVM),"ek",Bgz(A4d),"ck",Bgz(A3g),"hY",BgA(A7x),"ct",BgA(A8v)],LD,0,C,[B3],3,3,0,0,0,W0,0,C,[LD],0,0,0,0,["Q2",Bgz(ANJ),"PK",Bgz(A0w),"Xk",Bgz(A4m)],PF,0,BZ,[],0,0,0,0,["R0",BgC(AD1),"ek",Bgz(ALE),"ck",Bgz(A7E),"ct",BgA(APo)],J6,0,C,[],32,0,0,Bd3,0,ABG,0,C,[],4,3,0,0,0,Uv,0,C,[],0,3,0,0,["d",Bgy(A6S),"Iz",Bgz(AWY),"Qe",BgB(AV6),"Ni",Bgy(A$k),"EZ",function(b,c,d,e,
f,g){return A76(this,b,c,d,e,f,g);},"Qm",BgA(A4g),"Mu",BgC(AF2)],H8,0,Ja,[],0,0,0,0,["d",Bgy(Rv),"T",Bgy(QV)],JI,0,H8,[],0,0,0,0,["d",Bgy(S_),"T",Bgy(Vr)],Zc,0,JI,[],0,0,0,0,["d",Bgy(AQ0),"T",Bgy(AM5)],AAY,0,T,[],0,0,0,0,["d",Bgy(A4L),"T",Bgy(ARO)],YW,0,Dr,[],0,0,0,0,["iS",BgA(AQ9),"e",BgB(AGe),"ba",Bgz(A_G),"u",Bgy(AN_)],Zf,0,BJ,[],0,0,0,0,["E_",Bgz(AYM),"bH",BgA(AG9),"cE",BgB(AWN),"cI",BgC(A0y),"u",Bgy(AOy),"ca",Bgz(AJX),"Oc",BgB(A9g),"LI",BgB(A8p),"vd",BgA(AKk)],RG,0,C0,[],0,3,0,0,["d",Bgy(AIF),"lL",Bgy(AXJ),
"mw",Bgy(AUH)],Nf,0,C,[Fw,FO],0,3,0,C5,["bj",Bgz(XL),"V_",Bgy(N5),"Rz",Bgz(CJ),"TY",Bgz(IH),"b",Bgy(AD5),"ly",Bgz(APt),"Ad",Bgz(AP5),"GU",BgA(AGM),"P4",BgB(AEi),"yt",Bgz(A3G),"CL",Bgz(A0N)],DD,0,C,[],0,3,0,Lp,0,Ud,"ArrayStoreException",13,Bm,[],0,3,0,0,["d",Bgy(AZ1)],MA,"ReflectionException",4,B5,[],0,3,0,0,["jb",BgA(A7b)],FP,0,CI,[],0,0,0,0,["gD",BgB(Ml),"e",BgB(A75),"Q",Bgz(A9F)],Ih,0,C,[],3,3,0,0,0,NU,0,C,[Ih],0,0,0,0,["Sn",function(b,c,d,e,f,g){Sn(this,b,c,d,e,f,g);},"by",BgA(ASd),"ev",Bgz(A3a),"pR",Bgy(AUI),
"pc",Bgz(ALL),"eA",BgA(AYv),"u2",BgA(AWO),"jq",Bgz(A6p),"nE",Bgz(APB),"BW",Bgz(AEI),"OL",Bgz(A2m),"wA",Bgy(APu),"lD",Bgz(AGs),"MH",Bgy(AMF),"zk",Bgz(AVb),"fN",BgA(AXW),"LV",Bgy(A9P),"LC",Bgy(A9R),"tJ",BgB(A$I),"fV",Bgy(AG3),"G9",Bgz(A7o),"dI",Bgy(AXm),"J",Bgy(A3z),"pO",Bgz(AZa),"Cw",Bgy(AIW),"jB",Bgy(A1g),"lI",Bgy(AU_),"NA",Bgy(AV4)],Q0,0,C,[],0,3,0,0,["d",Bgy(A33)],PX,0,BJ,[],0,0,0,0,["o9",Bgz(AN3),"bH",BgA(A2u),"u",Bgy(AXb)],JB,0,C,[],0,3,0,0,["d",Bgy(A77),"Kj",Bgz(A2O),"GD",BgA(A6j),"b",Bgy(AJB)],Vm,0,BZ,
[],0,0,0,0,["Jc",Bgz(AWv),"ct",BgA(A8d),"ck",Bgz(AH0)],Vk,0,BZ,[],0,0,0,0,["XL",BgA(ASi),"ct",BgA(AOZ),"ck",Bgz(A3K)],VB,0,Q,[],0,0,0,0,["Q6",Bgz(ALf),"p",Bgz(A$6)]]);
$rt_metadata([Vl,0,BZ,[],0,0,0,0,["Jc",Bgz(AWD),"hY",BgA(AKB),"ck",Bgz(A7U),"ct",BgA(AUG)],KK,"GdxRuntimeException",3,Bm,[],0,3,0,0,["jb",BgA(AD8),"bP",Bgz(QC)],Fo,0,C,[Cr],1,3,0,N0,["fU",BgA(KD),"ew",Bgy(A3Z),"rU",Bgz(ARg),"N9",Bgy(AJg),"LP",BgA(ASI),"wx",BgB(AOX),"Qk",BgA(AE2),"Do",BgB(ADC),"OU",BgA(AZW),"P8",BgA(AIX)],LG,0,Fo,[],0,3,0,FY,["ND",Bgz(YZ),"Kp",BgA(AAv),"Xn",BgB(H$),"Tb",Bgz(JM),"RJ",BgB(NI),"Nd",Bgz(AR_),"bo",Bgy(AOd),"bl",Bgy(A8R),"b",Bgy(ANu)],LC,0,C,[B3],3,3,0,0,0,W1,0,C,[LC],0,0,0,0,["Q2",
Bgz(ANe),"Nt",Bgz(A4N),"VX",Bgz(ATJ)],WL,0,C,[],4,3,0,0,0,F5,0,C,[],0,3,0,Di,["bP",Bgz(AAR)],Ge,0,C,[B4,B$],0,3,0,A_1,["b6",Bgz(S0),"VO",Bgy(A0T)],C3,"IllegalArgumentException",13,Bm,[],0,3,0,0,["d",Bgy(FX),"bP",Bgz(ACW)],Tv,"IllegalCharsetNameException",11,C3,[],0,3,0,0,["bP",Bgz(ARh)],Ub,0,C,[Nz,IS],0,3,0,0,["T0",Bgz(AHQ),"dU",Bgz(A2D),"fV",Bgy(AKW),"g5",BgB(A80),"ko",BgA(AMz),"kg",BgA(AKg),"my",BgA(A$E),"kI",BgA(A0$),"L9",Bgz(AV8),"kS",Bgy(AHG),"J2",Bgz(AGq),"so",Bgy(A_H),"lF",Bgz(APr)],U6,"NoSuchElementException",
8,Bm,[],0,3,0,0,["d",Bgy(A4e),"bP",Bgz(A2a)],IB,0,DS,[],0,3,0,0,["Ug",Bgz(O2)],HA,0,IB,[],0,3,0,0,["Ui",BgA(Of),"nc",BgB(A4U),"GQ",Bgz(AY9),"pp",Bgz(A10),"gh",Bgz(AXV),"K4",Bgz(ALl),"NB",Bgy(A6M)],Sv,0,Dr,[],0,0,0,0,["iS",BgA(AVu),"e",BgB(AUX),"ba",Bgz(A7e),"u",Bgy(AFM)],Pn,0,C,[LZ],0,0,0,0,["WT",BgA(ASz),"HP",Bgy(AR1),"GX",Bgy(A9s),"T3",Bgy(ANW),"Ro",Bgy(AHk)],Fy,0,IN,[],1,0,0,0,["gd",BgB(MH),"Li",Bgy(ARn),"gs",Bgz(A4o),"b2",Bgz(AML),"tj",BgA(A81),"b_",Bgy(AMb)],FI,0,Fy,[],1,0,0,0,["fO",function(b,c,d,e,f,
g){JO(this,b,c,d,e,f,g);},"e1",Bgy(ALW)],Px,0,FI,[],0,0,0,0,["fO",function(b,c,d,e,f,g){AZr(this,b,c,d,e,f,g);},"p2",Bgz(AIP),"nQ",BgA(ADc)],ABS,0,FM,[],0,0,0,0,["fU",BgA(A9n),"e",BgB(AGD),"cE",BgB(ARW),"cI",BgC(AD4),"ca",Bgz(A30),"u",Bgy(A9z)],Ww,0,Dd,[],0,0,0,0,["X6",BgC(A59),"e",BgB(AOJ),"cE",BgB(ADm),"u",Bgy(A7q)],Ts,0,T,[],0,0,0,0,["d",Bgy(A1q),"T",Bgy(ALM)],IT,0,C,[],4,3,0,ACH,0,Cs,0,Bx,[],12,3,0,Ix,["R5",Bgy(E6)],Bi,"Color",5,C,[],0,3,0,Bv,["d",Bgy(U3),"bj",Bgz(ABW),"F2",BgC(SJ),"Th",Bgz(Ua),"eR",Bgz(AES),
"Jk",Bgz(A$U),"VH",Bgz(AEz),"TF",Bgz(A5G),"Rl",Bgz(AV3),"dL",Bgy(A7G),"hV",BgC(A4w),"Tc",Bgz(AOP),"Xp",BgC(ADU),"Rv",BgC(AQJ),"Wo",BgC(A8n),"Vl",BgA(ANT),"RC",function(b,c,d,e,f){return AXz(this,b,c,d,e,f);},"X8",Bgy(AMI),"z",Bgz(AZg),"bp",Bgy(AMg),"ny",Bgy(AR3),"r2",Bgy(ATV),"b",Bgy(AGW),"Ph",BgB(A7j),"RW",Bgz(AU4),"Vk",Bgz(A6Z),"Sx",Bgy(A9i)],Fc,0,C,[],4,3,0,0,["TQ",BgB(ANC),"Ts",BgC(ACE),"S7",function(b,c,d,e,f,g){AAE(this,b,c,d,e,f,g);},"z",Bgz(ANG),"Xy",Bgz(KI),"SA",Bgy(IU),"R3",Bgy(QD),"bp",Bgy(AYP)],IA,
0,C,[],0,3,0,0,["d",Bgy(UP)],Gd,0,IA,[],0,3,0,0,["Sg",BgB(Hn),"ry",Bgy(AH_),"ya",Bgy(AKu),"Oo",Bgy(A7T),"OD",Bgy(AGn),"qz",Bgy(ASn),"vO",Bgy(AH2),"MC",Bgz(A95),"Iy",Bgy(A8g),"KD",Bgz(AOr),"La",Bgy(AHc),"Hz",Bgy(A85),"b",Bgy(A4G)],F6,0,BT,[],0,3,0,AKQ,["d",Bgy(Nx),"b6",Bgz(S3)],ABd,0,F6,[],0,3,0,0,["VC",Bgz(A5C),"Q0",Bgz(ARy),"In",Bgz(AMW)],T2,0,CG,[],0,0,0,0,["WO",Bgz(AKT),"e",BgB(A$5),"cE",BgB(ANF)],Ew,0,C,[Cr],0,3,0,UV,["IW",BgA(UY),"IE",Bgy(AKK),"q2",Bgy(A8m),"sa",Bgy(A9o),"AO",BgA(A2$),"yi",BgA(A1D),"Dm",
BgA(A0s),"kc",BgA(APO),"Gf",BgB(ADV),"jh",BgC(AFP),"yv",function(b,c,d,e,f){AQf(this,b,c,d,e,f);},"z_",BgC(ARP),"Fg",BgA(AZD),"IM",BgB(AVS),"GT",BgA(AL0),"zy",BgB(A38),"HV",BgA(A9B),"LB",BgB(AId),"PN",BgC(AWQ),"sr",BgA(ADf),"KO",BgA(A6f),"id",function(b,c,d,e,f,g){A$V(this,b,c,d,e,f,g);},"ew",Bgy(AV2),"BJ",Bgz(AFf),"tP",Bgz(A22),"lT",Bgz(A6d),"lZ",Bgz(AE9)],DO,0,Bx,[],12,3,0,GR,0,Mg,0,C,[],3,3,0,0,0,Jx,0,C,[Iv,Mg],0,3,0,0,["b",Bgy(AMl),"z7",Bgy(AWH),"v0",Bgz(AY8),"u",Bgy(A2G),"hf",Bgy(AJq),"GO",Bgy(ASQ),"gq",
Bgy(A3H),"rs",Bgy(A_n),"L5",Bgy(AS5),"GL",Bgz(A7P),"Hx",Bgz(A7N)],CO,0,C,[B3],1,3,0,0,0,Zj,0,CO,[],1,3,0,0,0,DM,0,C,[],3,3,0,0,0,ACb,0,C,[DM,B4],0,3,0,0,["d",Bgy(AXA),"bj",Bgz(AVk),"sS",Bgz(APx),"n4",BgA(AJZ),"rW",Bgz(A_J),"Oz",BgA(AVw),"eL",Bgz(AVC),"lc",Bgz(A$X),"Qa",Bgz(AO7),"Mb",Bgz(AOG),"dN",Bgz(A9Z),"iI",Bgz(ATR),"iQ",Bgz(A9Q),"i8",Bgz(A2P),"bN",Bgy(A99)],VE,0,Q,[],0,0,0,0,["Xq",Bgz(A_o),"p",Bgz(AHl)],NV,0,C,[],3,3,0,0,0,FN,0,C,[],1,3,0,0,["d",Bgy(Lw),"M4",BgB(AIM),"HT",Bgy(A0K),"Gd",BgA(A57),"zl",BgB(APe),
"Kx",BgB(API),"k_",Bgz(A_l)],QG,0,FN,[],0,3,0,0,["d",Bgy(AF8),"f6",Bgy(AYx),"p_",Bgz(A_z)],Hc,0,C,[Cr],3,3,0,0,0,HO,0,C,[Hc],0,3,0,0,["mN",BgA(AYz),"bj",Bgz(ABv),"l2",Bgy(AJ5),"ne",Bgy(AVv),"uD",BgB(ANU),"un",Bgy(AUK),"ew",Bgy(A9S),"Ee",Bgy(A7a)],Qu,0,HO,[],0,3,0,0,["bj",Bgz(A5j)],JA,0,D3,[B$],0,3,0,Qx,["RE",Bgy(A8W)],V_,0,C,[],0,3,0,0,0,Dz,0,BJ,[],0,0,0,0,["nY",Bgz(APl),"cg",Bgy(A2e),"bH",BgA(AJK),"cE",BgB(AH4),"cI",BgC(ALh),"u",Bgy(AR2),"ps",Bgy(AFn),"ca",Bgz(ARq)]]);
$rt_metadata([VY,0,BZ,[],0,0,0,0,["U4",Bgz(AE6),"ct",BgA(A_m)],Mu,0,C,[],32,0,0,BdM,0,Wy,0,Q,[],0,0,0,0,["GH",BgB(ATu),"p",Bgz(AQk)],WF,0,Q,[],0,0,0,0,["kl",BgC(A0b),"p",Bgz(AC5)],WA,0,Q,[],0,0,0,0,["nF",BgA(ADg),"p",Bgz(A65)],M8,0,C,[B3],3,3,0,0,0,Wz,0,Q,[],0,0,0,0,["GH",BgB(ADs),"p",Bgz(A3v)],WB,0,Q,[],0,0,0,0,["nF",BgA(ADp),"p",Bgz(AJr)],WI,0,Q,[],0,0,0,0,["ql",BgB(AHe),"p",Bgz(AYt)],GS,0,C,[Cr],3,3,0,0,0,WD,0,Q,[],0,0,0,0,["kl",BgC(ADP),"p",Bgz(AY$)],WC,0,Q,[],0,0,0,0,["nF",BgA(AUU),"p",Bgz(AMC)],P3,0,BB,
[],4,0,0,0,["HD",Bgz(AGw),"e",BgB(A5c),"u",Bgy(AYk),"Q",Bgz(A7p),"i6",Bgy(AC3),"ba",Bgz(ATP)],WG,0,Q,[],0,0,0,0,["ql",BgB(A0J),"p",Bgz(AR0)],DK,0,C,[B$],0,3,0,Bd,0,OR,0,BJ,[],0,0,0,0,["nY",Bgz(APW),"bH",BgA(ADH),"u",Bgy(AKd)],Dv,0,BJ,[],0,0,0,0,["bj",Bgz(ATN),"bH",BgA(A61),"cE",BgB(A4H),"cI",BgC(AF1),"u",Bgy(A9G),"sU",Bgy(AUZ),"ca",Bgz(A6G)],Zd,0,T,[],0,0,0,0,["wk",BgA(AHL),"KM",BgB(AUA),"T",Bgy(ADa)],Sw,0,C,[B3],1,3,0,0,0,Se,0,C,[],0,3,0,0,["d",Bgy(A6h)],D9,0,C,[],1,0,0,0,["d",Bgy(Kn)],HU,0,CT,[B$,Fw,FO,Nm],
1,3,0,0,["gd",BgB(ZD),"rl",BgB(AEr),"Mx",Bgz(APC),"P6",BgB(A_p),"H0",BgB(AWz),"XS",Bgz(IV),"Cr",Bgy(WJ),"XX",Bgy(NL),"XE",Bgy(K_),"oP",Bgz(AMn)],Hs,0,HU,[],1,0,0,0,["gd",BgB(Qd),"JO",Bgy(AEu),"b_",Bgy(A$S)],Ro,0,Hs,[],0,0,0,0,["bj",Bgz(A50),"Xt",function(b,c,d,e,f,g){Va(this,b,c,d,e,f,g);},"z2",Bgz(A5g),"sd",BgA(A3i),"Ox",Bgy(AOb),"NE",Bgy(AIS),"e1",Bgy(ATm)],S8,0,C,[Cz],0,3,0,0,["bj",Bgz(AQj),"mt",BgA(Q3),"e8",Bgz(AJj),"Ln",BgA(A0W),"l",Bgz(AT3),"mC",Bgz(A9H),"F8",BgA(ATH)],ABC,0,Do,[],0,3,0,0,["kd",Bgz(AHH),
"mX",function(b,c,d,e,f,g,h){return AP_(this,b,c,d,e,f,g,h);}],EA,0,C,[Cz,Gx,B$],0,3,0,0,["d",Bgy(Lz),"Vj",Bgy(GP),"L6",Bgy(Eg),"VI",Bgz(BA),"UN",BgA(HK),"K",Bgy(AKn),"Ua",Bgz(Ep),"T6",Bgz(X6),"TL",Bgz(F7),"UQ",Bgz(Ct),"KW",Bgz(AQC),"XP",BgA(RX),"Ti",BgA(Q1),"ft",Bgy(Kc),"Ge",Bgy(AWV),"bp",Bgy(Wc),"z",Bgz(Vw),"cW",BgA(AWB)],F4,0,EA,[],0,3,0,Jn,["d",Bgy(KA),"bP",Bgz(Jl),"Rp",Bgz(NH),"Tu",Bgz(ACa),"WM",BgA(KN),"Je",Bgy(A7s),"bp",Bgy(AL9),"z",Bgz(AIc)],D5,"Pool",3,C,[],1,3,0,0,["d",Bgy(N6),"fU",BgA(Mb),"eT",Bgy(OW),
"jr",Bgz(AGG),"zm",Bgz(AJP),"Dd",Bgz(AYl),"Eg",Bgz(UO)],DX,0,D5,[],1,3,0,0,["d",Bgy(Jh),"eT",Bgy(Wi),"eo",Bgy(AMB)],TD,0,DX,[],0,3,0,0,["d",Bgy(AEd),"OT",Bgy(AM8),"K7",Bgy(A9m),"eT",Bgy(AGJ),"tX",Bgy(ANH)],AAc,0,Q,[],0,0,0,0,["Vz",Bgz(ADk),"p",Bgz(A9a)],JG,0,C,[B4],0,3,0,APS,["F2",BgC(Yd),"d",Bgy(Rs),"nx",BgC(AH3),"Pj",Bgz(AM3),"wt",BgA(AYT),"ub",Bgy(A4p),"JT",Bgy(ANo),"Ka",Bgz(A23),"Ck",Bgy(A$Q),"Kd",BgC(AEh),"J4",BgC(ARD)],Eb,0,C,[],4,3,0,Bd2,0,NC,0,C,[],0,3,0,Lc,0,RI,0,Q,[],0,0,0,0,["Sv",Bgz(A0f),"p",Bgz(AZ$)],G4,
0,C,[],1,3,0,0,["d",Bgy(R3)],Y5,"UnsupportedCharsetException",11,C3,[],0,3,0,0,["bP",Bgz(AEZ)],GI,0,CT,[B$],1,3,0,0,["gd",BgB(Py),"DH",BgB(A8y),"TZ",Bgy(Uo),"TJ",Bgy(AB9),"H5",Bgz(APP),"HL",Bgz(A7y),"db",Bgy(A8F),"c1",Bgy(ATL),"cm",Bgz(A3A),"cZ",Bgz(AVy)],Fh,0,GI,[],1,0,0,0,["gd",BgB(Ls),"Km",Bgz(A6C),"b_",Bgy(A2y)],Fr,0,Fh,[],1,0,0,0,["fO",function(b,c,d,e,f,g){Lu(this,b,c,d,e,f,g);},"e1",Bgy(A1h)],VQ,0,Fr,[],0,0,0,0,["fO",function(b,c,d,e,f,g){A3e(this,b,c,d,e,f,g);},"vo",Bgz(AYs),"qW",BgA(AXN)],YH,0,Q,[],
0,0,0,0,["Ul",Bgz(A0g),"p",Bgz(AP0)],DW,0,CT,[B$],1,3,0,0,["gd",BgB(AAy),"wB",BgB(ANA),"Xu",Bgy(R5),"VR",Bgy(Wm),"OZ",Bgz(AJi),"MK",Bgz(A4S),"db",Bgy(AJA),"c1",Bgy(AT0),"cm",Bgz(AOU),"cZ",Bgz(AS8)],Fu,0,DW,[],1,0,0,0,["gd",BgB(K4),"oa",Bgz(AK5),"KB",BgA(A$O),"b_",Bgy(AYO)],ER,0,Fu,[],1,0,0,0,["fO",function(b,c,d,e,f,g){LQ(this,b,c,d,e,f,g);},"e1",Bgy(A5D)],ABL,0,Bt,[],4,0,0,0,["bj",Bgz(A0t),"e",BgB(ALA),"ba",Bgz(A0p),"u",Bgy(AMk)],Ut,0,BJ,[],0,0,0,0,["nY",Bgz(A4t),"bH",BgA(AUw),"u",Bgy(A5s)],Hp,0,BH,[],0,3,
0,A3P,0,E5,0,C,[Cz],0,3,0,0,["d",Bgy(AFQ),"bj",Bgz(Oq),"mN",BgA(Kk),"Xz",BgB(Vo),"S0",Bgz(A8e),"Sh",BgC(Rq),"F",Bgz(AP2),"qB",Bgz(AJ6),"JA",BgB(ADT),"Jb",Bgz(AJl),"rM",BgB(AFD),"l",Bgz(A9Y),"k4",BgA(APK),"Le",BgA(A3I),"iv",BgA(AZO),"K$",BgA(AGY),"Lx",BgA(AGZ),"sv",Bgz(APa),"lX",BgA(AHu),"vt",Bgy(AVA),"qt",Bgy(ATA),"Fr",Bgy(A_I),"K",Bgy(AZG),"xu",Bgz(ARt),"j_",Bgz(AY4),"Dx",Bgz(ATF),"bZ",Bgy(AKC),"h6",Bgz(AD$),"bp",Bgy(AWC),"z",Bgz(ALR),"b",Bgy(ARu),"ft",Bgy(AFW)]]);
$rt_metadata([QE,0,C0,[],0,3,0,0,["d",Bgy(AYo),"lL",Bgy(A$N),"mw",Bgy(A7W)],EC,0,Bx,[],12,3,0,AUF,["F7",Bgy(G8)],K9,0,Cy,[],0,0,0,0,["bj",Bgz(UQ),"e",BgB(AVN),"dM",Bgy(AFS),"u",Bgy(AQK),"ba",Bgz(A5P)],Je,0,BB,[],0,0,0,0,["nY",Bgz(AFY),"Q",Bgz(A5B),"e",BgB(AX7),"cE",BgB(AJT),"cI",BgC(AYZ),"u",Bgy(AQ$),"ca",Bgz(ADZ),"ba",Bgz(ARf)],ACO,0,C,[],0,3,0,0,0,ME,0,C,[],3,3,0,0,0,Xf,0,C,[ME,Gx],0,3,0,0,["d",Bgy(AS1),"Hp",BgA(A0D),"I0",BgA(AYE),"cW",BgA(A7D)],ACh,"AssertionError",13,D7,[],0,3,0,0,["jb",BgA(AHp)],Es,0,CI,
[],0,0,0,0,["D3",function(b,c,d,e,f){It(this,b,c,d,e,f);},"e",BgB(A_y),"u",Bgy(ASt)],Ly,0,Es,[],0,0,0,0,["D3",function(b,c,d,e,f){Sp(this,b,c,d,e,f);},"e",BgB(AVR)],U2,0,C,[],0,3,0,0,0,MN,0,C,[Cr],3,3,0,0,0,Mn,0,C,[IE],3,3,0,0,0,IF,0,Jb,[Mn],1,3,0,0,["d",Bgy(Y_),"ft",Bgy(AIh)],Lo,0,C,[],3,3,0,0,0,We,0,IF,[DM,B4,Lo],0,3,0,0,["d",Bgy(AIJ),"bj",Bgz(OS),"gY",Bgz(AVT),"l",Bgz(A6X),"df",Bgy(A5E),"h4",Bgz(ASp),"Lf",BgA(A13),"mC",Bgz(AP4)],YB,"IllegalMonitorStateException",13,Bm,[],0,3,0,0,["d",Bgy(A3j)],Ef,0,CG,[],
0,0,0,0,["yZ",BgC(K1),"e",BgB(AWq),"u",Bgy(AW4)],C4,0,BB,[],0,0,0,0,["o9",Bgz(AAu),"e",BgB(AZx),"u",Bgy(A$h),"p",Bgz(AIK),"ca",Bgz(AEH),"uN",Bgy(ALe),"Q",Bgz(A8a),"ba",Bgz(AIm)],Yx,0,FP,[],0,0,0,0,["gD",BgB(AOR),"e",BgB(AFU)],Qm,0,C,[],4,3,0,0,0,BN,"String",13,C,[B4,B$,FO],0,3,0,Em,["K0",Bgz(Iy),"SC",BgB(OG),"Tk",BgC(J2),"XI",BgC(KM),"SJ",BgA(TI),"S5",BgB(OK),"f",Bgz(AWm),"i",Bgy(A0o),"bN",Bgy(A2c),"pv",BgC(AH7),"PQ",Bgz(A9A),"zN",BgA(A55),"e2",Bgz(A2h),"yT",Bgz(AZv),"eH",BgA(A40),"Lo",Bgz(AZu),"mK",BgA(AWu),
"xD",Bgz(AKv),"uy",BgA(AY_),"Ns",Bgz(A5z),"Ac",BgA(AHX),"H3",Bgz(AJ$),"ce",BgA(ADO),"ei",Bgz(AKy),"d_",BgA(AIf),"M7",Bgz(AUl),"uI",BgA(A6W),"MN",Bgy(A2C),"b",Bgy(AFV),"rz",Bgy(A2g),"z",Bgz(ASk),"Gs",Bgz(A9X),"x6",Bgz(ANx),"QQ",Bgy(ANt),"AX",Bgz(A44),"bp",Bgy(A4_),"F1",Bgy(A4n),"FE",Bgz(A2S),"vF",BgA(ASc),"GF",BgA(AIp)],Nh,0,DS,[],0,3,0,A3n,["vZ",Bgz(A24)],LO,0,C,[],0,0,0,Bev,0,D$,0,C,[B3],3,3,0,0,0,MQ,0,C,[D$],3,3,0,0,0,Yy,0,Fy,[],0,0,0,0,["UG",function(b,c,d,e,f,g){AJ0(this,b,c,d,e,f,g);},"p2",Bgz(A48),"nQ",
BgA(A3l),"e1",Bgy(ADd)],Qn,0,Do,[],0,3,0,0,["kd",Bgz(AQN),"mX",function(b,c,d,e,f,g,h){return ALN(this,b,c,d,e,f,g,h);}],I6,0,C,[],1,3,0,0,["d",Bgy(X1)],HT,0,C,[],3,3,0,0,0,Fm,0,I6,[HT,DM,B4],0,3,0,TJ,["d",Bgy(HG),"bj",Bgz(MF),"x",BgA(AO3),"oU",Bgy(AME)],Td,0,Fm,[],0,3,0,0,["d",Bgy(AOz),"U0",Bgz(AKL)],ABU,0,Fu,[],0,0,0,0,["We",function(b,c,d,e,f,g){AX0(this,b,c,d,e,f,g);},"vp",Bgz(AO$),"nh",BgA(AOg),"e1",Bgy(A5x)],Wq,0,Bt,[],0,0,0,0,["d",Bgy(A_f),"e",BgB(ALw),"u",Bgy(A5A),"ba",Bgz(A5J)],Oj,0,V,[],0,3,0,A0S,
["bj",Bgz(YO),"bg",BgC(AUE)],JP,0,Es,[],0,0,0,0,["D3",function(b,c,d,e,f){Ss(this,b,c,d,e,f);},"e",BgB(AKs)],CX,0,Bx,[],12,3,0,P6,["F7",Bgy(EE)],L6,0,C0,[],0,3,0,Hw,["lL",Bgy(AQr),"mw",Bgy(ASZ)],M6,0,C,[D$],3,3,0,0,0,Vv,0,Bt,[],0,0,0,0,["bj",Bgz(A_C),"e",BgB(A1N),"ba",Bgz(AGz),"u",Bgy(AI_)],SN,0,C,[NV],0,3,0,0,["XG",Bgz(A5U)],EO,0,C,[Gi],1,3,0,0,["d",Bgy(Li),"LO",Bgz(AB6)],Sj,0,EO,[],0,3,0,0,["V7",BgA(AY6),"fP",Bgy(ALT),"lf",Bgy(ATT)],WY,0,Q,[],0,0,0,0,["Rw",Bgz(A3o),"p",Bgz(A9t)],I0,"NoSuchMethodException",
13,Dn,[],0,3,0,0,["d",Bgy(A1Z)],Yp,0,C,[],4,3,0,0,0,ZY,0,FI,[],0,0,0,0,["fO",function(b,c,d,e,f,g){AZl(this,b,c,d,e,f,g);},"p2",Bgz(AQ6),"nQ",BgA(AEV)],GN,0,BT,[],0,3,0,A_w,["b6",Bgz(AAN),"d",Bgy(Jr)],R8,"NullPointerException",13,Bm,[],0,3,0,0,["bP",Bgz(A7_),"d",Bgy(AGj)],XM,0,Q,[],0,0,0,0,["Rd",Bgz(AI3),"p",Bgz(A6u)]]);
$rt_metadata([Qa,0,C,[],0,0,0,0,["d",Bgy(AT6)],YY,0,C,[],4,3,0,0,0,WZ,0,C,[GS],0,3,0,0,["Bt",BgB(AM9),"jI",Bgy(AXM),"uP",Bgy(AJS),"us",BgB(AFj),"ih",BgA(ANI),"gO",BgA(AIn)],GT,0,BT,[],0,3,0,ANz,["b6",Bgz(YJ),"d",Bgy(Iw)],OL,0,C,[],0,3,0,0,0,QM,0,T,[],0,0,0,0,["d",Bgy(A68),"T",Bgy(ANR)],Oh,"PatternSyntaxException",9,C3,[],0,3,0,0,["RZ",BgB(VX),"mS",Bgy(A$l)],P7,0,D5,[],0,3,0,0,["SW",BgB(AS4),"tX",Bgy(A1F)],LK,0,C,[],3,3,0,0,0,Y0,0,C,[LK],0,3,0,0,["d",Bgy(APX),"wH",Bgy(A0m),"Gh",Bgy(AX$),"QF",Bgy(ADI),"QK",BgC(AMf),
"PZ",Bgy(AMH),"NH",Bgy(ASY)],HF,0,C,[],0,3,0,A4f,["d",Bgy(AAI),"Sy",Bgz(YN),"Cy",Bgz(A37),"FY",function(b,c,d,e,f){return AOM(this,b,c,d,e,f);},"Hw",Bgz(AJb),"z",Bgz(AE0),"JB",BgA(AVG)],TS,0,T,[],0,0,0,0,["d",Bgy(AGB),"T",Bgy(AYG)],HP,0,C,[],3,3,0,0,0,HC,0,BH,[],0,3,0,AJt,0,DY,0,Bx,[],12,3,0,M3,0,KU,0,C,[],3,3,0,0,0,L$,0,C,[Cz],0,3,0,A7k,["d",Bgy(TQ),"mt",BgA(Nu),"kq",Bgz(AXK),"j6",Bgz(A07),"x",BgA(AQv),"W",Bgz(AWZ),"K",Bgy(AVJ),"c0",Bgz(A9u),"jJ",Bgz(W8)],YV,0,C,[B4],4,3,0,0,["TK",Bgz(GM),"U1",BgA(Ms),"TT",
Bgz(VW),"UA",Bgy(IQ),"WC",Bgy(VJ),"Vc",Bgy(ABV),"Xc",Bgy(SI)],De,"IOException",12,B5,[],0,3,0,0,["d",Bgy(V5)],GK,0,De,[],0,3,0,0,0,Ou,0,C,[B3],3,3,0,0,0,V2,0,C,[Ou],0,0,0,0,["Vs",BgA(AUT),"HO",Bgy(AXo),"SV",Bgy(AO4)],Qh,0,FP,[],0,0,0,0,["gD",BgB(ARl),"e",BgB(ALd),"Q",Bgz(A4Q)],Jo,0,C,[],0,3,0,0,["X_",BgC(Tt)],YL,"BufferOverflowException",10,Bm,[],0,3,0,0,["d",Bgy(A0r)],UK,0,T,[],0,0,0,0,["d",Bgy(AL1),"T",Bgy(A2Q)],Mt,0,C,[],0,3,0,0,["R1",BgB(AQX)],SH,0,EA,[],0,3,0,0,["d",Bgy(A9U),"GE",Bgz(AWE)],AA0,0,D9,[],
0,0,0,0,["d",Bgy(AJR),"k1",Bgz(A7Q),"D2",BgA(AS_)],AAZ,0,D9,[],0,0,0,0,["d",Bgy(AWI),"k1",Bgz(AF$),"D2",BgA(APL)],YQ,0,FS,[],0,3,0,0,0,Ve,0,T,[],0,0,0,0,["d",Bgy(A1m),"T",Bgy(A7g)],La,0,C,[],0,3,0,0,0,KX,0,C,[],0,3,0,0,["d",Bgy(AZt),"Pg",BgC(A0q)],To,0,C,[],0,3,0,0,["K0",Bgz(AYV)],Dx,0,BJ,[],0,0,0,0,["o9",Bgz(APc),"bH",BgA(AUo),"u",Bgy(ALG),"ca",Bgz(AOI),"uN",Bgy(A5y)],Io,0,Q,[],0,0,0,0,["bj",Bgz(Sy),"p",Bgz(AOC)],Zm,0,Io,[],0,0,0,0,["bj",Bgz(ANy),"p",Bgz(A8c)],LJ,0,C,[MN],0,3,0,TH,["d",Bgy(ABw),"Tt",BgA(Kg),
"g6",Bgy(A09),"bd",Bgy(AQV),"Hu",BgC(ALa),"eo",Bgy(AKz),"PJ",Bgz(AJd),"z6",Bgy(AHz),"Ks",Bgz(A5p),"Jz",Bgy(AD9)],Ma,0,C,[],32,0,0,Be5,0,XS,0,CO,[],1,3,0,0,0,N8,0,C,[],3,3,0,0,0,LX,0,C,[N8],0,3,0,VN,["VQ",Bgz(ACZ),"U$",BgA(Kb),"S3",BgB(Nn),"Hb",BgA(AMK),"Hv",BgA(AFg),"IA",BgA(APk),"Jt",BgB(A$i),"z8",BgB(ANK),"P1",Bgy(ADe),"yG",Bgz(AC7),"Ok",BgA(AM4),"Pu",BgB(AZi)],D0,0,De,[],0,3,0,0,["d",Bgy(Kq)],QK,"UnmappableCharacterException",11,D0,[],0,3,0,0,["bj",Bgz(A1P),"mS",Bgy(AHn)],P4,0,Q,[],0,0,0,0,["d",Bgy(ATZ),
"Yj",BgA(P$),"WJ",BgB(AVl),"cG",Bgz(AC4),"NM",Bgz(A_B),"bF",BgA(A86),"LS",Bgz(AUO),"x5",Bgz(AR9),"p",Bgz(AGu),"bK",Bgy(AT$),"ci",Bgy(AZI),"mh",Bgy(ARA),"b",Bgy(A4D),"g8",Bgy(AIy)],P0,0,C,[IS],0,0,0,0,["W0",BgB(A6H),"dU",Bgz(A4R),"lF",Bgz(A$y)],ABK,"BufferUnderflowException",10,Bm,[],0,3,0,0,["d",Bgy(ASA)],TA,0,C,[],0,3,0,0,["d",Bgy(AC_)],UG,0,Ek,[],0,0,0,0,["yl",BgA(A1w)]]);
$rt_metadata([Oz,0,C,[],3,3,0,0,0,I4,0,C,[Oz],0,3,0,0,["d",Bgy(Tj),"G3",BgC(AHJ),"GZ",Bgy(ANY)],ZF,0,I4,[],0,3,0,0,["d",Bgy(AKG),"r0",BgC(A1Y),"Oy",BgC(AHZ),"OK",BgA(A7i),"QM",BgB(A56),"Ke",BgC(A2B),"Ho",BgA(A9L),"Q3",BgC(AY1)],Pj,0,ER,[],0,0,0,0,["fO",function(b,c,d,e,f,g){A35(this,b,c,d,e,f,g);},"vp",Bgz(AL7),"nh",BgA(A6w)],Mx,0,C,[Cr],3,3,0,0,0,Ha,0,C,[Mx],1,3,0,0,["d",Bgy(ABb),"I$",BgB(ADE),"bf",BgA(A_q),"b0",Bgz(ASB),"N_",Bgz(AH5),"MF",BgA(AZB),"C$",BgA(X2),"NX",Bgz(A0I),"y9",BgA(Vu),"bd",Bgy(WK),"V6",
Bgz(Ic),"Rm",Bgz(B1),"UC",BgA(D1),"Tm",BgA(Q4),"TI",BgA(LA),"Xg",BgA(Fv),"Wg",BgA(Fn),"Wd",BgB(WE),"WY",function(b,c,d,e,f){return DQ(this,b,c,d,e,f);},"TV",BgA(DU),"VG",BgA(ZE)],RJ,0,Q,[],0,0,0,0,["UW",Bgz(AVz),"p",Bgz(AEw)],Tq,"MalformedInputException",11,D0,[],0,3,0,0,["bj",Bgz(AOj),"mS",Bgy(AIj)],X8,0,T,[],0,0,0,0,["d",Bgy(AEa),"T",Bgy(AHK)],Fg,0,Bx,[],12,3,0,Gv,0,EG,0,Bx,[],12,3,0,SM,0,HZ,0,BH,[],0,3,0,ET,["Wb",BgA(VC),"pf",Bgy(APf),"bp",Bgy(ASP)],Im,0,C,[],1,3,0,0,["d",Bgy(Ze)],TF,"CloneNotSupportedException",
13,B5,[],0,3,0,0,["d",Bgy(A1U)],Rh,0,CO,[],1,3,0,0,0,Nj,0,D3,[B$],0,3,0,N4,0,Gu,0,BT,[],0,3,0,AMw,["b6",Bgz(Sf),"d",Bgy(HM)],Kx,0,Gu,[],0,3,0,A$w,["d",Bgy(Za),"b6",Bgz(RE)],Ng,0,C,[],3,3,0,0,0,Rf,0,C,[Ng],0,3,0,0,["d",Bgy(ATk),"G4",BgA(ALD)],Tc,0,C,[],0,0,0,0,["bj",Bgz(AK3),"os",BgA(AKq),"b2",Bgz(A3C)],Hm,0,C,[B3],3,3,0,0,0,QX,0,C,[Hm],1,3,0,0,["Um",Bgz(A_b),"XA",Bgy(AGa)],G5,0,C,[],0,3,0,0,["Td",Bgz(AV7),"Nh",BgC(A7X),"Nw",BgC(AFx),"Bb",Bgy(ATc),"Ig",Bgy(AGP),"LF",Bgy(ADL)],Sb,0,JH,[],0,3,0,0,["d",Bgy(AUN),
"JL",Bgz(UW),"wK",BgB(AYR)],VS,0,C,[Cz],0,3,0,0,["RL",BgC(APZ),"Pk",Bgz(AMR),"Nl",BgB(AVo),"K",Bgy(A3s),"jJ",Bgz(ASW)],QF,0,IR,[],0,0,0,0,["d",Bgy(A2s),"T",Bgy(AJD)],Q7,"BitmapFont",6,C,[Cr],0,3,0,0,["d",Bgy(AGo),"W9",BgC(OM),"W5",BgB(Uk),"WV",BgB(YC),"HE",Bgz(AT5),"yj",BgC(AI9),"Gu",BgC(A$g),"Ou",Bgy(AQG),"KG",Bgy(A92)],Gy,0,GN,[],0,3,0,AHx,["b6",Bgz(Vi),"d",Bgy(KT)],He,0,Gy,[],0,3,0,0,["d",Bgy(RQ)],Iq,0,He,[],0,3,0,0,["d",Bgy(Lt)],LV,0,Iq,[],0,3,0,AFl,["SD",Bgz(Si),"NG",BgA(A9T),"b6",Bgz(AAp)],Zi,0,C,[],0,
3,0,0,["d",Bgy(AEk),"XF",BgA(AZP),"IJ",Bgz(APh),"ME",Bgy(AQo),"Qo",Bgz(A45)],T0,0,Q,[],0,0,0,0,["UT",BgA(AT4),"p",Bgz(AIg)],TZ,0,Q,[],0,0,0,0,["TG",BgB(A41),"p",Bgz(AVd)],C8,0,Bx,[],12,3,0,AYy,0,ABh,0,T,[],0,0,0,0,["d",Bgy(AWp),"T",Bgy(A4V)],Ot,0,C,[D$],3,3,0,0,0,W2,0,Ef,[],0,0,0,0,["yZ",BgC(A39),"e",BgB(A7z)],Rc,0,Im,[],0,3,0,0,["bP",Bgz(AEC),"Id",Bgy(AVe)],Lg,0,C,[D$],3,3,0,0,0,Ll,0,C,[],3,3,0,0,0,X0,0,C,[Cz],0,3,0,0,["d",Bgy(ASw),"mt",BgA(AAr),"e8",Bgz(AOq),"os",BgA(AHV),"KT",BgA(ALP)],XG,0,Q,[],0,0,0,0,
["Te",Bgz(AS0),"p",Bgz(A3O)],PQ,0,Q,[],0,0,0,0,["So",BgA(AS9),"p",Bgz(AL6),"b",Bgy(A0H)],Vg,0,CI,[],0,0,0,0,["gD",BgB(ARk),"e",BgB(AYm)],T6,0,C,[],0,3,0,0,["Sq",BgC(ADq)],CY,0,BH,[],0,3,0,Ce,["FU",Bgz(Jk),"TX",BgA(JQ),"Xd",function(b,c,d,e,f){NG(this,b,c,d,e,f);},"ST",Bgz(Z7),"pf",Bgy(AJu),"bp",Bgy(ASG)],Hg,0,V,[],0,3,0,PA,["fU",BgA(Qj),"bg",BgC(A4s)],NY,0,C,[],0,3,0,BeL,["WL",BgA(ACi),"yP",Bgy(A5$),"Nz",Bgz(AHM),"K",Bgy(A5h),"JG",BgB(AUb),"Ir",function(b,c,d,e,f,g,h,i,j){return A_a(this,b,c,d,e,f,g,h,i,j);
},"HU",BgB(AGC)]]);
$rt_metadata([PN,0,Q,[],0,0,0,0,["nF",BgA(A7f),"p",Bgz(AGK)],PO,0,Q,[],0,0,0,0,["nF",BgA(AM_),"p",Bgz(A0n)],PP,0,Q,[],0,0,0,0,["kl",BgC(AGV),"p",Bgz(A_O)],YK,0,C,[],4,3,0,0,0,P8,0,Q,[],0,0,0,0,["kl",BgC(A0h),"p",Bgz(AJv)],PR,0,Q,[],0,0,0,0,["kl",BgC(AZc),"p",Bgz(AW7)],OO,0,BJ,[],0,0,0,0,["E_",Bgz(A8O),"bH",BgA(AMA),"u",Bgy(AKe)],PS,0,Q,[],0,0,0,0,["kl",BgC(AD0),"p",Bgz(AO_)],PT,0,Q,[],0,0,0,0,["ql",BgB(AOc),"p",Bgz(AK7)],Ug,0,Q,[],0,0,0,0,["Sw",Bgz(AUs),"p",Bgz(AKV)],Hz,0,DP,[],0,3,0,0,["d",Bgy(A16),"Jg",Bgz(AEG),
"OP",BgA(AGk),"xP",function(b,c,d,e,f,g){return AP7(this,b,c,d,e,f,g);},"z",Bgz(AEs),"EF",Bgz(A4$)],PM,0,Q,[],0,0,0,0,["ql",BgB(A3D),"p",Bgz(A8I)],Z6,0,CO,[],1,3,0,0,0,LH,0,C,[],0,3,0,ACA,0,ZG,0,ES,[Fw],0,3,0,0,["bj",Bgz(ALi),"d",Bgy(A$r),"dD",Bgz(A34),"a",Bgz(ADJ),"j",Bgz(ANE),"Nk",Bgz(A0R),"cD",Bgz(AJF),"U",Bgz(ADx),"I5",BgB(AGX),"q1",Bgz(A70),"Jv",Bgz(AWM),"J_",BgA(AZ5),"P$",BgA(A8l),"Lk",BgC(A6N),"OS",BgA(A$R),"Gr",BgA(A4E),"KY",BgA(AN$),"L7",BgA(ASu),"Fa",Bgz(ARa),"GA",BgA(A2F),"ce",BgA(A9W),"uz",Bgz(A2L),
"pv",BgC(AH8),"d_",BgA(A6V),"uH",BgC(A2x),"tY",BgB(AHA),"i",Bgy(AWT),"b",Bgy(AFL),"gY",Bgz(ALQ),"xy",BgA(ALZ),"wV",BgA(A31),"vc",BgA(A3r),"CV",BgA(A04),"DX",BgA(AGi),"k5",BgA(AT7)],QW,0,BB,[],0,0,0,0,["UX",BgA(ATl),"e",BgB(AEQ),"Q",Bgz(A5t),"u",Bgy(A6a),"ba",Bgz(AFT),"ca",Bgz(AFp)],ABQ,"ConcurrentModificationException",8,Bm,[],0,3,0,0,["d",Bgy(ATQ)],O$,0,C,[I1],0,0,0,0,["d",Bgy(ALK)],Gt,0,C,[],3,3,0,0,0,O9,0,C,[Gt],0,0,0,0,["d",Bgy(AXk)],Me,0,C,[],3,3,0,0,0,EU,0,C,[Me,DM],0,0,0,0,["Ip",BgA(L7)],MS,0,EU,[],0,
0,0,0,["Ip",BgA(AO6),"Ob",Bgy(AE_),"MZ",BgA(ARX)],EZ,0,Cy,[],0,0,0,0,["d",Bgy(A8P),"e",BgB(ASg),"u",Bgy(AXy)],AAe,0,C,[],0,3,0,0,["bP",Bgz(A2X),"MD",Bgz(A0x),"NC",BgB(A1O),"Gn",function(b,c,d,e,f){AVQ(this,b,c,d,e,f);},"kn",BgA(A79),"yJ",BgB(AYJ),"Qi",Bgz(AM7),"KS",Bgz(AJx),"LW",Bgz(A62),"Of",Bgz(AXe)],TP,0,BJ,[],0,0,0,0,["xg",Bgz(A3X),"bH",BgA(A7M),"cE",BgB(AZZ),"cI",BgC(AX2),"u",Bgy(AJ2),"ba",Bgz(AVF)],J3,0,BH,[],0,3,0,AGI,0,Vp,0,C,[I1],0,3,0,0,["IW",BgA(A9k),"R7",BgB(UE),"wu",Bgy(A_F),"O",Bgy(AFa)],Ka,0,
C,[Cz,B$],4,3,0,0,["Ra",Bgz(A3V),"Xr",Bgz(DZ),"df",Bgy(CU),"Sm",Bgz(CB),"z",Bgz(NW),"L6",Bgy(IM),"VJ",Bgy(NR)],KC,0,G5,[],0,3,0,0,0,ACM,0,C,[Cr],0,3,0,0,["WE",BgB(TR),"d",Bgy(A$H),"HM",Bgz(A4l),"eo",Bgy(A1I),"bd",Bgy(A7I),"C3",BgA(ARs)],Re,0,ER,[],0,0,0,0,["fO",function(b,c,d,e,f,g){AVs(this,b,c,d,e,f,g);},"vp",Bgz(AUP),"nh",BgA(A2R)],VO,0,C,[Ll],0,3,0,0,["SR",Bgz(AUD),"f6",Bgy(AUh),"vL",Bgy(ASL),"bo",Bgy(AL_),"bl",Bgy(AQZ),"xc",Bgy(A5Q),"EK",Bgy(A49),"Fe",Bgy(A_g),"Nm",Bgy(AU8),"FC",Bgy(AWk),"Mm",Bgz(AHg),
"wG",BgA(ALy),"x$",BgA(AFO),"tZ",Bgz(AEe),"vR",Bgy(A3c)],Yu,0,FL,[],0,3,0,0,["bP",Bgz(AGp)],TC,0,T,[],0,0,0,0,["d",Bgy(AFd),"T",Bgy(AH$)],EI,"GlyphLayout",6,C,[EJ],0,3,0,DI,["d",Bgy(ACj),"XK",BgA(PJ),"SQ",function(b,c,d,e,f,g){S$(this,b,c,d,e,f,g);},"Wa",function(b,c,d,e,f,g,h,i,j){AA4(this,b,c,d,e,f,g,h,i,j);},"Mz",BgA(A7H),"O5",function(b,c,d,e,f,g){A3B(this,b,c,d,e,f,g);},"pJ",function(b,c,d,e,f,g,h,i,j){AG4(this,b,c,d,e,f,g,h,i,j);},"fV",Bgy(A8D),"b",Bgy(AOa)],ABY,"ArrayIndexOutOfBoundsException",13,Ej,
[],0,3,0,0,["bj",Bgz(AEX)],Pt,0,EO,[],0,3,0,0,["Vo",BgA(QA),"W4",Bgz(ADu),"Tg",BgA(AAG),"fP",Bgy(A8A),"JJ",BgB(AKo)],Fa,0,Bx,[],12,3,0,RT,0,Y1,0,C,[],0,3,0,0,0,V1,0,C,[Gt],0,0,0,0,["Vy",Bgz(AOT),"bC",Bgy(A4q),"bz",Bgy(A8X)],L2,0,C,[],0,3,0,0,["d",Bgy(A$0),"PO",Bgy(A8M),"OC",Bgy(APY),"Di",Bgz(AFK),"y3",Bgz(A64),"F9",Bgy(AUB),"IR",Bgy(A6z),"Qg",Bgz(AL5),"Ie",Bgz(AEt),"Na",BgA(AOV),"FG",Bgz(A17),"rE",Bgy(A3t),"xn",Bgy(A9J),"u$",Bgy(AZN),"MR",Bgz(A7c)],LP,0,C,[],3,3,0,0,0,Hx,0,C,[LP,Fp],0,3,0,Ba$,["d",Bgy(VG),"w5",
Bgy(AZH),"v4",function(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){return A8r(this,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);},"Fu",Bgy(A0d),"Oh",Bgy(AC8),"QN",BgA(A8B),"lH",Bgz(AOe),"oF",Bgz(A4C),"ls",Bgz(AW8),"iq",BgC(A78),"hQ",BgC(A1T),"i_",BgB(APs),"na",BgA(AXL),"oJ",BgA(AMS)],VK,0,E8,[DM],0,0,0,0,["fU",BgA(AKJ),"jd",Bgy(A0G),"iJ",Bgy(A9b),"b",Bgy(A4M)],W6,0,V,[],4,0,0,0,["d",Bgy(AJs),"bg",BgC(ATp)],W3,0,V,[],4,0,0,0,["d",Bgy(A82),"bg",BgC(AYi)],VF,0,Q,[],0,0,0,0,["UM",Bgz(AQR),"p",Bgz(AWA)],W_,0,V,[],4,0,0,0,["d",Bgy(AK8),
"bg",BgC(A$C)],W7,0,V,[],4,0,0,0,["d",Bgy(AVf),"bg",BgC(AN6)]]);
$rt_metadata([W5,0,V,[],4,0,0,0,["d",Bgy(A74),"bg",BgC(A28)],W$,0,V,[],4,0,0,0,["d",Bgy(AXl),"bg",BgC(APM)],Tb,0,C,[Nl],0,3,0,0,["d",Bgy(A4a),"Pf",Bgz(AZe)],Sl,0,C,[B4],0,3,0,0,["d",Bgy(AU1),"MO",Bgz(A9j),"Gb",Bgy(AE$),"xL",Bgy(AZR)],Nr,0,C,[],3,3,0,0,0,Ld,0,GT,[],0,3,0,AGH,["d",Bgy(Sa),"b6",Bgz(ACn)],XK,0,C,[],4,0,0,0,0,St,0,Da,[],0,3,0,0,["kd",Bgz(A2M),"nd",function(b,c,d,e,f,g,h){return A$a(this,b,c,d,e,f,g,h);}],ABa,0,C,[],4,3,0,0,["Ru",BgA(ADQ),"R$",Bgy(Wr),"i",Bgy(N9),"zo",Bgz(Rj),"qz",Bgy(PZ),"TC",Bgy(SD)],AC2,
0,CG,[],0,0,0,0,["lk",BgB(APD),"e",BgB(AEn)],AAQ,0,C,[],0,3,0,0,["UD",BgA(A4B),"tK",Bgy(A4v),"dO",Bgz(A1H),"ef",Bgz(AW5),"el",Bgz(A8$),"dR",Bgz(A6R)],PG,0,Q,[],0,0,0,0,["XC",Bgz(AMO),"p",Bgz(AOx)],JS,0,C,[],3,3,0,0,0,RK,0,C,[JS],0,3,0,0,["d",Bgy(AWW)],Xd,0,V,[],4,0,0,0,["d",Bgy(ALu),"bg",BgC(AQW)],Lj,"InstantiationException",13,Dn,[],0,3,0,0,["d",Bgy(A2W)],Xa,0,V,[],4,0,0,0,["d",Bgy(A7w),"bg",BgC(A_e)],W9,0,V,[],4,0,0,0,["d",Bgy(ATI),"bg",BgC(AWl)],Xb,0,V,[],4,0,0,0,["d",Bgy(AW6),"bg",BgC(A1n)],Ps,0,Q,[],0,
0,0,0,["T8",Bgz(A$W),"p",Bgz(ASC)],JU,0,C,[],3,3,0,0,0,Sr,0,C,[JU,M8],0,3,0,0,["d",Bgy(AJQ),"pg",Bgy(A6r),"vI",Bgz(A8i),"Ko",Bgz(AZ9),"P_",Bgy(A6c),"My",Bgy(ATW),"Q4",Bgy(AZd),"Lh",Bgy(AXq),"S$",Bgz(A5N)],Ys,0,CG,[],0,0,0,0,["lk",BgB(AUi),"e",BgB(AOF)],Ya,0,C,[],4,3,0,0,0,ZB,0,C,[],0,3,0,0,["d",Bgy(ARz)],SE,0,Da,[],0,3,0,0,["kd",Bgz(AO5),"nd",function(b,c,d,e,f,g,h){return AIN(this,b,c,d,e,f,g,h);}],HS,0,C,[Cr],0,3,0,Kl,["Uo",BgC(Ye),"UZ",function(b,c,d,e,f){M5(this,b,c,d,e,f);},"S4",function(b,c,d,e,f){On(this,
b,c,d,e,f);},"FO",BgB(APF),"NO",Bgz(AGt),"OO",BgB(AKt),"v8",Bgy(ASq),"xf",Bgy(A8k),"KC",Bgz(AHj),"ih",BgA(AQH),"JZ",Bgz(A7R),"gO",BgA(AEF),"NP",BgC(AUg),"De",function(b,c,d,e,f){A32(this,b,c,d,e,f);},"gS",Bgy(AYq),"Av",Bgy(ALt)],Nv,0,EU,[],0,0,0,0,["Vn",BgA(AO8)],FU,0,BT,[],0,3,0,ATd,["b6",Bgz(X4),"d",Bgy(Jp)],Wk,0,C,[Cz],0,3,0,0,0,AB2,0,Bt,[],0,0,0,0,["d",Bgy(AKR),"e",BgB(A5m),"ba",Bgz(AUu),"u",Bgy(AJn)],AAJ,0,C,[Cz],0,3,0,0,["d",Bgy(A2Z),"mt",BgA(YI),"kq",Bgz(AMM),"j6",Bgz(AYp),"gA",BgA(AQI),"tI",BgA(AXs),
"jJ",Bgz(TU)],TB,0,T,[],0,0,0,0,["d",Bgy(AK_),"T",Bgy(ARi)],Ft,0,CT,[B$],1,3,0,0,["UL",function(b,c,d,e,f){V3(this,b,c,d,e,f);},"z1",BgB(AYB),"IS",Bgz(AOB),"w1",BgB(A9y),"WW",Bgz(Ym),"Cr",Bgy(AWJ),"XY",Bgy(HH),"Re",Bgz(FH),"VM",Bgy(J5),"UJ",Bgy(Jv),"M9",Bgz(AZy),"f4",Bgz(AQ5),"db",Bgy(AF3),"cm",Bgz(AOS),"cZ",Bgz(AVB)],AB_,0,Ft,[],0,0,0,0,["wk",BgA(A1z),"Wy",function(b,c,d,e,f,g,h){O8(this,b,c,d,e,f,g,h);},"zo",Bgz(ADi),"QD",Bgy(AMN),"b_",Bgy(AR6),"v7",Bgy(A$$),"O6",Bgz(A8s),"K_",BgA(AI2),"yL",Bgy(ATY),"sR",
Bgy(ANv)],RZ,0,E9,[],0,0,0,0,["Wp",Bgz(AKF),"Bh",Bgy(A2j)],LN,0,C,[B4],0,3,0,0,["U5",BgA(AI8),"iy",BgB(A27)],VT,0,C,[],0,3,0,0,["d",Bgy(A8G)],Gs,0,C,[],0,3,0,AKZ,["d",Bgy(VP),"AL",Bgz(A5e)],Na,0,C,[B4],0,3,0,BeQ,["VP",BgA(AB7)],ABA,0,By,[],0,3,0,0,0,QS,"BufferUnderflowException",11,Bm,[],0,3,0,0,["d",Bgy(A$f)],VV,0,Bt,[],0,0,0,0,["HD",Bgz(A6q),"e",BgB(AXY),"ba",Bgz(AI6),"u",Bgy(AWb)],Ci,0,C,[Hv],1,3,0,0,["d",Bgy(DT),"x3",BgA(AU9)],TN,0,C,[B3],1,3,0,0,0,Xj,0,V,[],4,0,0,0,["d",Bgy(A6e),"bg",BgC(AZ6)],ML,0,C,[],
32,0,0,BfT,0,Yv,0,C,[],0,3,0,0,["d",Bgy(A6P),"g6",Bgy(ADA),"H6",Bgy(AWh),"P2",Bgz(AVP),"Js",Bgy(AGb),"Nq",BgA(A8w),"Kf",BgC(AKc),"Ky",BgC(ASK),"Cq",function(b,c,d,e,f){return ARv(this,b,c,d,e,f);},"J3",function(b,c,d,e,f,g){return A3u(this,b,c,d,e,f,g);}],I9,0,C,[GS],0,3,0,0,["Bt",BgB(Z4),"jI",Bgy(AI5),"uP",Bgy(ATG),"us",BgB(A5a),"ih",BgA(AZQ),"gO",BgA(AWj)],Wh,0,I9,[],0,3,0,0,["Sa",BgA(A7h)]]);
$rt_metadata([Xp,0,V,[],4,0,0,0,["d",Bgy(AQP),"bg",BgC(ATx)],Xl,0,V,[],4,0,0,0,["d",Bgy(ARQ),"bg",BgC(AVj)],S7,0,T,[],0,0,0,0,["d",Bgy(AJp),"T",Bgy(A7r)],Xk,0,V,[],4,0,0,0,["d",Bgy(AK$),"bg",BgC(ALO)],KP,0,C,[],3,3,0,0,0,Xn,0,V,[],4,0,0,0,["d",Bgy(AZC),"bg",BgC(AG5)],ABE,0,C,[B3],1,3,0,0,0,Y3,0,C,[],0,3,0,0,["W$",Bgz(A$s),"g6",Bgy(A8E),"bd",Bgy(A$Z),"M8",Bgz(AGO),"Ma",BgB(AXS),"xl",BgB(A$c),"H8",Bgz(AKb)],Rd,0,T,[],0,0,0,0,["d",Bgy(AF7),"T",Bgy(APm)],Hl,0,C,[HT],1,3,0,0,["d",Bgy(XP)],Zr,0,C,[Hc],0,3,0,0,["mN",
BgA(AZk),"l2",Bgy(APy),"ne",Bgy(AUQ),"uD",BgB(A1S),"un",Bgy(ASN),"ew",Bgy(ALq),"Ee",Bgy(AFR)],Gn,0,BT,[],0,3,0,A42,["b6",Bgz(Y8),"d",Bgy(H2)],Wt,0,Bt,[],0,0,0,0,["d",Bgy(AQU),"e",BgB(AK4),"ba",Bgz(AT2),"u",Bgy(AWx)],Xt,0,V,[],4,0,0,0,["d",Bgy(AEM),"bg",BgC(A7A)],Xq,0,V,[],4,0,0,0,["d",Bgy(A9V),"bg",BgC(ATi)],C_,0,BT,[],0,3,0,Fl,["b6",Bgz(S1),"LM",Bgy(AFZ),"JR",Bgy(AQb),"Kg",Bgy(A1p),"M_",BgB(AHR)],Xm,0,V,[],4,0,0,0,["d",Bgy(AEK),"bg",BgC(AN2)],Xs,0,V,[],4,0,0,0,["d",Bgy(AWr),"bg",BgC(AJJ)],KY,0,Cy,[],0,0,0,
0,["bj",Bgz(ZR),"e",BgB(AVx),"u",Bgy(AYw),"ba",Bgz(A7t)],Xr,0,V,[],4,0,0,0,["d",Bgy(AI7),"bg",BgC(AYD)],Lm,0,C,[],4,3,0,E1,0,ND,0,C,[],3,3,0,0,0,L4,0,C,[],3,3,0,0,0,Vt,0,BJ,[],0,0,0,0,["bj",Bgz(A8b),"bH",BgA(AQl),"u",Bgy(A_r)],U_,0,Ir,[],0,3,0,0,["Sb",BgA(Qr),"JL",Bgz(AFF),"iq",BgC(AKp),"hQ",BgC(A1E),"Iq",BgB(AY2),"i_",BgB(AKw),"oJ",BgA(ASj),"y$",Bgz(A3p),"Ne",Bgz(ASo),"lH",Bgz(AEc),"oF",Bgz(A2o)],Gm,0,C,[],4,3,0,0,0,S4,0,C,[B$],0,3,0,0,["d",Bgy(A8J),"JX",Bgz(AD_),"bp",Bgy(AFu)],Rb,"BitmapFont$BitmapFontData",
6,C,[],0,3,0,0,["Kp",BgA(A4x),"P3",BgA(AGv),"E3",BgA(AVL),"ym",BgA(ATD),"CR",Bgy(A3S),"it",Bgz(AG0),"FP",function(b,c,d,e,f){AGf(this,b,c,d,e,f);},"KP",BgA(ADo),"xH",Bgz(AGL),"jt",Bgz(AHs)],Ny,0,C,[],0,3,0,0,0,XB,0,T,[],0,0,0,0,["fU",BgA(A$d),"T",Bgy(AMe)],UH,0,C,[],0,0,0,0,["d",Bgy(ADv),"u_",BgB(ANd),"B7",BgB(AMt),"Lq",Bgy(A2p),"Q1",Bgy(A6i)],ACF,0,HJ,[],0,0,0,0,["XH",Bgz(A58),"fe",Bgy(A5r)],Xu,0,T,[],0,0,0,0,["d",Bgy(AFB),"T",Bgy(ATb)],Zy,0,C,[Ih],4,3,0,0,["TR",BgA(X$),"Rr",Bgy(ABg),"UR",Bgz(ABI),"Wc",Bgz(ACp),
"BW",Bgz(Gh),"Sf",Bgz(JJ),"Vi",Bgy(Ga),"lD",Bgz(U7),"pc",Bgz(Pb),"wA",Bgy(LU),"pR",Bgy(MY),"lI",Bgy(Ph),"Vb",BgA(AC$)],T9,0,BB,[],0,0,0,0,["d",Bgy(A46),"e",BgB(ATC),"u",Bgy(AHw),"Q",Bgz(AXi),"i6",Bgy(A4Z),"ba",Bgz(AXf)],ZP,0,Q,[],0,0,0,0,["U_",Bgz(AQA),"p",Bgz(ASf)],O4,0,FN,[],0,3,0,0,["d",Bgy(A0U),"f6",Bgy(AGr),"p_",Bgz(AQz)],US,0,C,[Hi],0,3,0,0,["LO",Bgz(A1s),"fe",Bgy(A9c)],VH,0,C4,[],0,0,0,0,["o9",Bgz(AG6),"p",Bgz(AK2),"u",Bgy(ATr)],Vh,0,T,[],0,0,0,0,["d",Bgy(APJ),"T",Bgy(AUJ)],MG,0,BB,[],0,0,0,0,["TH",BgA(AVn),
"Q",Bgz(AMD),"u",Bgy(AP6),"e",BgB(ADh),"ca",Bgz(AXg),"ba",Bgz(ARG)],Vb,0,T,[],0,0,0,0,["d",Bgy(A4j),"T",Bgy(A1f)],Kz,0,C,[GS],0,3,0,AIT,["Bt",BgB(XF),"jI",Bgy(AWw),"uP",Bgy(ARK),"us",BgB(AWP),"ih",BgA(AQ7),"gO",BgA(AHC)],QO,0,C,[],4,3,0,0,0,Hh,"GlyphLayout$GlyphRun",6,C,[EJ],0,3,0,0,["d",Bgy(A0z),"fV",Bgy(ALv),"b",Bgy(AEp)],Mr,0,Dn,[],0,3,0,0,0,SV,0,BZ,[],0,0,0,0,["QW",BgA(A8q),"ek",Bgz(A$1),"ck",Bgz(AMd),"hY",BgA(AMU),"ct",BgA(AK0)],AA_,0,BZ,[],0,0,0,0,["SU",Bgz(AX_),"ek",Bgz(AUr),"ck",Bgz(AHo),"ct",BgA(A9f)],FK,
0,C,[B3],3,3,0,0,0,SR,0,C,[FK],0,0,0,0,["yx",BgC(AJm),"dU",Bgz(AIw),"lF",Bgz(A1C)]]);
$rt_metadata([SQ,0,BZ,[],0,0,0,0,["R9",function(b,c,d,e,f){ARB(this,b,c,d,e,f);},"ek",Bgz(A_P),"ck",Bgz(A$L),"hY",BgA(AE8),"ct",BgA(AS7)],SP,0,C,[FK],0,0,0,0,["QW",BgA(AVX),"dU",Bgz(A71),"lF",Bgz(AXT)],Lq,0,C,[],32,0,0,Bel,0,U5,0,C,[Cr],0,3,0,0,["d",Bgy(ADr),"MJ",Bgz(A8_)],SX,0,C,[FK],0,0,0,0,["yx",BgC(AI$),"dU",Bgz(AZj),"lF",Bgz(AIo)],Qw,0,Bt,[],0,0,0,0,["b6",Bgz(AK6),"e",BgB(AWX),"ba",Bgz(AXc),"u",Bgy(A_v)],Fs,0,C,[KU],0,3,0,LB,["d",Bgy(Vx),"Pn",Bgz(ATS),"Q5",BgA(A05),"Qu",BgA(AKh),"Mc",BgB(AGE),"Lt",Bgz(ALo),
"N5",Bgy(AEm),"jI",Bgy(AGT),"Mr",Bgy(AQ1),"xV",Bgz(AV0),"M0",BgC(AED),"Dk",Bgz(AHD),"x_",Bgz(AO9),"up",Bgz(AIB),"hn",Bgz(AXR),"r6",Bgz(AN8),"I1",Bgy(AJy),"KZ",BgC(AYQ),"dH",Bgz(AMG),"Hq",BgC(A1K),"OE",function(b,c,d,e,f,g){A1Q(this,b,c,d,e,f,g);},"ER",function(b,c,d,e,f,g,h,i){AW9(this,b,c,d,e,f,g,h,i);},"d2",BgC(AO1),"NK",BgC(A6Q),"jp",function(b,c,d,e,f){ALJ(this,b,c,d,e,f);},"Lj",BgB(AHt)],Hb,0,BH,[],0,3,0,Bb8,0,SW,0,C,[FK],0,0,0,0,["yx",BgC(A5I),"dU",Bgz(AQy),"lF",Bgz(AZE)],Jc,0,T,[],0,0,0,0,["d",Bgy(Rr),
"T",Bgy(YX)],Po,0,DX,[],4,0,0,0,["d",Bgy(AOl)],Pp,0,DX,[],4,0,0,0,["d",Bgy(A08),"WP",Bgy(Y9),"tX",Bgy(AL8)],AAH,0,C,[],4,3,0,0,0,KO,0,C,[D$],3,3,0,0,0,NN,0,C,[D$,MQ,KO,M6,Lg,Ot],3,3,0,0,0,Kd,0,C,[],3,3,0,0,0,Pk,0,C,[B3,NN,Kd,Hm],1,3,0,0,["W3",BgA(AMq),"XQ",BgA(AMV),"US",Bgz(AEN),"S9",BgB(AOm),"Sj",Bgz(ASv),"V1",Bgy(AGd),"Vp",BgB(ADw)],YE,0,C,[B4],0,3,0,0,["d",Bgy(ALX),"Ay",Bgy(A4X),"H2",Bgy(ALg),"CU",Bgy(A5X),"D_",Bgz(A_s),"AF",Bgy(AUz)],T$,0,G4,[B3],0,3,0,0,["Rj",BgA(ARF),"Og",Bgz(A1X),"ET",Bgy(A1G),"hu",Bgy(AUd),
"Ng",Bgy(A3R),"Qb",Bgy(A1v),"ul",Bgy(A8Q),"AN",Bgy(A$x),"Md",Bgy(A97),"Ny",Bgy(AU3)],Pg,0,C,[],0,0,0,0,0,Cu,0,C,[B4],0,3,0,CC,["d",Bgy(Tm),"ch",Bgz(A_D),"Ey",Bgz(AFG),"Gv",Bgz(A98),"HZ",BgC(AZ7),"NJ",function(b,c,d,e,f,g,h){return A6E(this,b,c,d,e,f,g,h);},"Gm",BgB(AWK),"JV",function(b,c,d,e,f,g,h,i,j,k){return ATs(this,b,c,d,e,f,g,h,i,j,k);},"hC",Bgz(ANb),"fx",Bgy(AHN),"PT",Bgy(A7d),"KE",BgC(AE4),"L8",BgC(A3Y),"zg",function(b,c,d,e,f,g){return A4y(this,b,c,d,e,f,g);},"IY",BgB(AF_),"Pp",BgA(AWs),"QI",BgA(AIk),
"B5",BgB(AZY),"uA",Bgz(AFk),"LK",BgB(A2w),"vu",BgA(AWf),"Mq",Bgz(APV),"MY",Bgy(A5n)],AC0,"NegativeArraySizeException",13,Bm,[],0,3,0,0,["d",Bgy(A5M)],AAk,0,Ed,[],0,0,0,0,["lk",BgB(AZ8),"e",BgB(AEy)],AAD,0,T,[],0,0,0,0,["d",Bgy(AFi),"T",Bgy(AKD)],ZU,0,C,[],0,0,0,0,["Wn",BgA(AHv),"b",Bgy(AMh)],Gz,"Timer",3,C,[],0,3,0,EH,["d",Bgy(UN),"FX",BgA(A9x),"Gg",BgC(A91),"G7",Bgy(AST),"Nf",BgA(ARr),"Ii",Bgz(AOo)],Du,"NumberFormatException",13,C3,[],0,3,0,0,["d",Bgy(AV$),"bP",Bgz(AL3)],XZ,0,C,[Gt,Cz],0,3,0,0,["KH",BgA(AND),
"bC",Bgy(A2f),"bz",Bgy(AX9)],AAV,0,Jo,[],0,0,0,0,["UH",function(b,c,d,e,f){A8U(this,b,c,d,e,f);}],Wj,0,C,[],0,0,0,0,0,R2,0,Da,[],0,3,0,0,["Jm",BgB(A5_),"nd",function(b,c,d,e,f,g,h){return ASb(this,b,c,d,e,f,g,h);}],ABf,0,Jw,[],0,3,0,0,["d",Bgy(A2n),"Mv",BgA(AMQ),"MA",Bgz(AL2),"No",Bgz(AKH)],SS,0,T,[],0,0,0,0,["d",Bgy(AM0),"T",Bgy(APT)],Wo,0,C,[Cz],0,3,0,0,["Uw",Bgz(A6l),"KH",BgA(ACT),"bZ",Bgy(A1x)],AAP,0,T,[],0,0,0,0,["d",Bgy(ANl),"T",Bgy(AUx)],ZZ,"IllegalStateException",13,B5,[],0,3,0,0,["d",Bgy(A7Z),"bP",
Bgz(A5F)],YM,0,C,[EJ],0,3,0,0,["d",Bgy(A_A),"fV",Bgy(AOW),"dK",BgC(ALS),"n6",BgA(AL$)],Z$,0,C,[],0,3,0,0,["XU",BgA(A9p)],OH,0,GB,[],0,3,0,0,["d",Bgy(T1),"Fo",Bgz(A8C),"LZ",Bgz(ATX),"DD",Bgz(AMu),"QV",Bgz(AWe),"A0",Bgz(AGR)],Jj,0,BB,[],0,0,0,0,["nY",Bgz(AOf),"Q",Bgz(AXv),"e",BgB(ADt),"cE",BgB(A53),"cI",BgC(AQe),"u",Bgy(A$K),"ca",Bgz(AHa),"ba",Bgz(A6b)],Rl,0,Ef,[],0,0,0,0,["yZ",BgC(A51),"e",BgB(A7O)],Rm,0,Bt,[],4,0,0,0,["d",Bgy(AHm),"e",BgB(A26),"ba",Bgz(A1W),"u",Bgy(ANh)],YT,0,C,[KP],0,0,0,0,["XR",Bgz(ASS),"nP",
Bgz(A2r),"OQ",Bgz(ATq)],DC,0,C,[B4,HP],0,3,0,H1,["d",Bgy(ZJ),"Vh",BgB(Rt),"I",BgB(A3h),"M",Bgz(AHd),"fB",Bgz(ARx),"AS",BgB(ALI),"gl",Bgz(ANs),"JI",BgB(AQY),"em",Bgz(A7L),"IP",Bgy(A_u),"ub",Bgy(AGA),"GR",Bgz(AZo),"B0",Bgz(AIQ),"bU",Bgy(A_Q),"yB",Bgz(ART),"iC",Bgz(AYL),"HW",BgB(A3M),"kN",Bgz(AQM),"qX",Bgz(AV5),"rB",BgA(AHq),"yr",Bgy(A_K),"i3",BgA(ANV),"b",Bgy(AFs),"bp",Bgy(A7S),"z",Bgz(AG_),"L1",Bgy(AIV)],GC,0,C,[B4,HP],0,3,0,AOL,["d",Bgy(Sc),"T9",BgA(Ty),"k7",Bgz(AXB),"ix",BgA(AC9),"w3",Bgz(AO0)],EY,0,C,[KR],
0,3,0,0,["Rn",BgC(Op),"Wz",BgB(Vj),"Q9",BgA(G1),"bP",Bgz(ARw),"L_",BgB(AOD)],GV,0,C,[],0,3,0,0,["d",Bgy(AJW),"mN",BgA(Ui),"iY",Bgz(A2b),"b2",Bgz(AQQ),"K",Bgy(AZL),"Hy",Bgy(ANN),"Pc",Bgz(AN4),"t2",Bgz(AE7),"bp",Bgy(AMj),"z",Bgz(A9v),"b",Bgy(A2V)],H0,0,C,[Kp,E2],0,3,0,0,["SX",BgA(ABr),"fe",Bgy(A3f),"I8",Bgy(ANj),"qE",BgA(AFA),"u5",Bgy(A5o),"Mw",Bgz(A3x),"OJ",Bgz(AKP)],Ij,0,BH,[],0,3,0,JD,["d",Bgy(JK),"Un",Bgz(R$),"QT",Bgy(A5f),"bp",Bgy(ANL),"pf",Bgy(A8f)],Df,0,Ha,[],0,3,0,CR,["RF",BgA(Xe),"T4",BgB(L8),"Wx",function(b,
c,d,e,f){Ky(this,b,c,d,e,f);},"Us",BgB(My),"Ei",Bgy(AXw),"uK",Bgz(A3U),"z",Bgz(A6t),"PM",Bgz(ASU),"C$",BgA(AGQ),"y9",BgA(A$M),"bd",Bgy(AEg),"If",Bgz(A2I),"J6",BgA(A3q)]]);
$rt_metadata([KJ,0,DP,[],0,3,0,0,["d",Bgy(A6m),"Kc",Bgz(A2H),"Hl",function(b,c,d,e,f,g){return A5l(this,b,c,d,e,f,g);},"Pz",function(b,c,d,e,f,g,h,i,j,k,l,m){return A$m(this,b,c,d,e,f,g,h,i,j,k,l,m);},"Ik",Bgz(ALn)],Xv,0,C,[ND],0,3,0,0,["d",Bgy(AHS),"qE",BgA(A25)],Mf,"IllegalAccessException",13,Dn,[],0,3,0,0,["d",Bgy(A9e)],L9,0,FU,[],0,3,0,AQa,["TS",Bgz(R_),"b6",Bgz(UC)],AA6,0,E5,[],0,3,0,0,["bj",Bgz(AX1),"f0",Bgy(A0e),"bd",Bgy(AXZ)],P2,0,C,[],4,3,0,0,["Ud",Bgz(AR5),"BB",Bgy(FF),"Aj",Bgz(Tf),"Cz",Bgz(ACV)],AB3,
0,Fh,[],0,0,0,0,["TU",function(b,c,d,e,f,g){A_t(this,b,c,d,e,f,g);},"vo",Bgz(AIY),"qW",BgA(A19),"e1",Bgy(AYF)],DA,0,Bx,[],12,3,0,Gl,0,RC,0,C,[IL],0,0,0,0,["RP",Bgz(AWa),"qn",Bgy(ATz),"JQ",Bgy(AK9)],I7,0,C,[],0,3,0,Tr,0,ZL,0,C,[],0,3,0,0,["d",Bgy(ASe),"mN",BgA(AAK),"cd",Bgz(A3m),"K",Bgy(ASy),"Pe",Bgz(AWR),"CD",Bgz(AYW)],Tx,0,C,[],4,3,0,0,0,VL,0,T,[],0,0,0,0,["d",Bgy(AMx),"T",Bgy(A$e)],RD,0,Hl,[DM,B4],0,3,0,0,["Bk",Bgz(A0V),"d",Bgy(AHI),"bj",Bgz(ON),"mt",BgA(ACr),"W",Bgz(AR$),"V3",Bgz(ZX),"V$",BgB(KB),"X5",Bgy(K2),
"x",BgA(ANB),"Qv",BgA(ARN),"wy",BgB(APn),"Mp",Bgz(A0B),"oU",Bgy(A6K),"IO",Bgz(AM6),"Sz",Bgz(SO)],DE,0,Bx,[],12,3,0,H3,0,ZM,0,Bt,[],0,0,0,0,["bj",Bgz(A1c),"e",BgB(AOh),"ba",Bgz(A0c),"u",Bgy(AD3)],Dp,0,BH,[],0,3,0,B2,["FU",Bgz(JE),"V4",BgA(Ko),"Ub",function(b,c,d,e,f,g,h){Oe(this,b,c,d,e,f,g,h);},"UV",BgA(Zs),"R_",Bgz(ACR),"pf",Bgy(A69),"bp",Bgy(AUk)],ABs,0,C,[],0,3,0,0,["d",Bgy(APb),"mN",BgA(Uc),"Am",Bgz(AXU),"GN",Bgz(AEU),"x1",BgB(AQ4),"rJ",BgB(AEb),"oa",Bgz(AYn),"lX",BgA(AU6),"K",Bgy(AWF),"D$",Bgz(AP3),"t3",
Bgz(ANM),"h6",Bgz(AGl)],Bh,0,C,[],0,3,0,Bfi,0,NB,0,FT,[],0,3,0,A9D,["TA",BgC(Te),"b6",Bgz(AA3)],Jq,0,C,[],0,3,0,Bj,["Tv",BgA(Xz),"jK",Bgy(ANm),"h5",Bgy(A9h),"mz",Bgy(A2K),"zp",Bgy(AJE),"t4",Bgy(ASh),"i",Bgy(AIs),"nS",Bgy(AP$)],Qz,0,D5,[],4,0,0,0,["d",Bgy(AZ4)],WV,0,Ci,[],4,0,0,0,["d",Bgy(A$z),"bg",BgC(AQ_)],LR,0,Bt,[],4,0,0,0,["bj",Bgz(ABx),"e",BgB(A6o),"ba",Bgz(AX8),"u",Bgy(A3E)],WS,0,Ci,[],4,0,0,0,["d",Bgy(AU2),"bg",BgC(AOt)],WU,0,Ci,[],4,0,0,0,["d",Bgy(ADK),"bg",BgC(A8T)],MR,0,Gn,[],0,3,0,AQd,["d",Bgy(ZV),
"b6",Bgz(YP)],WQ,0,Ci,[],4,0,0,0,["d",Bgy(AR4),"bg",BgC(A4i)],WR,0,Ci,[],4,0,0,0,["d",Bgy(AFt),"bg",BgC(AEq)],WO,0,Ci,[],4,0,0,0,["d",Bgy(A06),"bg",BgC(A6s)],TE,0,C,[L4],4,3,0,0,["fU",BgA(A$v),"gd",BgB(YD),"g6",Bgy(A0u),"bd",Bgy(AJY),"gE",Bgz(AEO)],WP,0,Ci,[],4,0,0,0,["d",Bgy(ASa),"bg",BgC(ASR)],WM,0,V,[],4,0,0,0,["d",Bgy(A4O),"bg",BgC(AFz)],Gj,0,C,[],0,0,0,0,["dT",BgA(A88),"bV",Bgy(A2N),"pO",Bgz(AXO),"G$",Bgz(AXp),"sg",Bgy(AHh),"k0",Bgy(APd),"to",Bgy(AFJ),"E",Bgy(A6$),"jn",Bgy(AYg),"cM",Bgy(AWd),"Hm",Bgy(AIq),
"b",Bgy(AIZ),"bN",Bgy(A1A),"hy",Bgy(ATf),"Ex",Bgy(AW1),"Fz",Bgy(A66),"dM",Bgy(AFq)],WN,0,V,[],4,0,0,0,["d",Bgy(AJ_),"bg",BgC(AHO)],XX,0,T,[],0,0,0,0,["d",Bgy(ATh),"T",Bgy(ASH)],Zh,0,Jc,[],0,0,0,0,["d",Bgy(ASr),"T",Bgy(AWG)],Xy,0,CO,[],1,3,0,0,0,Yr,0,C,[],0,3,0,0,0,U9,0,C,[Nr],0,3,0,0,["Sl",Bgz(A3_),"ux",Bgz(A01),"KX",Bgz(ATU),"H$",Bgz(ANa),"rG",Bgz(A5O),"sF",BgA(ALp),"PS",BgA(AKm),"EE",Bgz(AN0),"wa",BgC(A$A),"Ji",Bgz(AEY),"vE",Bgz(A$j),"kT",Bgz(A0M),"J8",BgA(AXu),"eh",Bgz(A3d),"xe",BgB(A_i),"Nx",BgC(A5Z),"o5",
Bgz(AT1),"Ja",Bgy(A0Q),"Or",BgA(AZw),"GP",BgA(AUp),"kB",function(b,c,d,e,f,g,h,i,j){AJN(this,b,c,d,e,f,g,h,i,j);},"OY",BgB(A6v),"oK",BgC(AX3),"xk",BgA(ALC),"c$",BgA(AOA),"J0",BgC(AZV),"fD",BgC(AZf),"qr",BgC(AM1),"Io",Bgz(AID),"M1",Bgy(AGS),"Ot",Bgz(A1t),"xK",Bgz(AQm),"O$",BgC(A6J),"QA",Bgz(ARE),"i5",Bgy(AZA),"xb",Bgz(A5Y),"PR",BgC(AN5),"Qd",BgC(ADS),"Dc",BgA(AI0),"ML",BgA(ALY),"qp",BgB(AJU),"Ao",Bgz(AY0),"NR",BgB(A5W),"N0",Bgz(A$Y),"AP",BgA(AG1),"Ls",Bgz(AUy),"QG",BgA(AVW),"ji",BgB(AOk),"MW",BgA(AWc),"Cv",BgA(AOQ),
"OR",BgB(AMa),"G6",BgC(A0a),"F0",BgC(AYe),"GM",function(b,c,d,e,f){AEf(this,b,c,d,e,f);},"I2",function(b,c,d,e,f){AQT(this,b,c,d,e,f);},"yg",function(b,c,d,e,f){A0Y(this,b,c,d,e,f);},"Kh",Bgz(A11),"Pm",function(b,c,d,e,f,g){A90(this,b,c,d,e,f,g);}],XY,0,Fr,[],0,0,0,0,["fO",function(b,c,d,e,f,g){AEj(this,b,c,d,e,f,g);},"vo",Bgz(A4W),"qW",BgA(AYu)]]);
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
"NegLookaheadJointSet","Already prepared","Call prepare() before calling getPixmap()","This TextureData implementation does not upload data itself","blended","0","<Quant>","Comparison method violates its general contract!","fromIndex(",") > toIndex(","canvas","charsetName is null","Should never been thrown","ErrorLoading: ","\n","i","b","a","Invalid assets description file.","PosBehindJointSet","sequence: ","US-ASCII","-2147483648","Bullet binaries version (",") does not match source version (","UCI range:",
"GL_EXT_texture_filter_anisotropic","New data must have the same managed status as the old data","IGNORE","REPLACE","REPORT","mousedown","mouseup","mousemove","wheel","touchstart","touchmove","touchcancel","touchend","keydown","keypress","keyup","CSS1Compat","NegBehindJointSet","Index ","back reference: ","<DotQuant>","COPY","copy","DESTINATION_ATOP","destination-atop","DESTINATION_IN","destination-in","DESTINATION_OUT","destination-out","DESTINATION_OVER","destination-over","LIGHTER","lighter","SOURCE_ATOP",
"source-atop","SOURCE_IN","source-in","SOURCE_OUT","source-out","SOURCE_OVER","source-over","XOR","xor","\' Not supported in Dragome backend"," does not exist","UTF-8","Error reading file: ","/","\\","vertex shader must not be null","fragment shader must not be null","Fragment shader:\n","Vertex shader\n","An attempted fetch uniform from uncompiled shader \n","No uniform with name \'","\' in shader","Classpath","Internal","External","Absolute","Local","javaClass@","<init>","No buffer allocated!",".","CI ","Capacity is negative: ",
"The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","The last char in src "," is outside of string of size ","Start "," must be before end ","mtl","object cannot be null.","UTF-16","UTF-16BE","UTF-16LE","GL_ARB_framebuffer_object","GL_EXT_framebuffer_object","texture width and height must be square when using mipmapping.","The last short in src ","The last float in src ","<EOL>","UCI ","pointLights","start + count must be <= size: "," + "," <= ","index can\'t be >= size: ",
" >= ","index can\'t be > size: "," > ","end can\'t be >= size: ","start can\'t be > end: ","Array is empty.","additionalCapacity must be >= 0: ","newSize must be >= 0: ","[]",", ","ISO-8859-1","MirroredRepeat","ClampToEdge","Repeat","AtomicFSet","posFSet","Nearest","Linear","MipMap","MipMapNearestNearest","MipMapLinearNearest","MipMapNearestLinear","MipMapLinearLinear","<MultiLine $>","Class cannot be created (missing no-arg constructor): ","Unable to create new instance: ","depthStencil","VertexArray","VertexBufferObject",
"VertexBufferObjectSubData","VertexBufferObjectWithVAO","key cannot be null.","Patter is null","\\Q","\\E","\\\\E\\Q","Can\'t have more than 8191 sprites per batch: ","a_position","a_color","a_texCoord0","attribute vec4 a_position;\nattribute vec4 a_color;\nattribute vec2 a_texCoord0;\nuniform mat4 u_projTrans;\nvarying vec4 v_color;\nvarying vec2 v_texCoords;\n\nvoid main()\n{\n   v_color = a_color;\n   v_color.a = v_color.a * (255.0/254.0);\n   v_texCoords = a_texCoord0;\n   gl_Position =  u_projTrans * a_position;\n}\n",
"#ifdef GL_ES\n#define LOWP lowp\nprecision mediump float;\n#else\n#define LOWP \n#endif\nvarying LOWP vec4 v_color;\nvarying vec2 v_texCoords;\nuniform sampler2D u_texture;\nvoid main()\n{\n  gl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n}","Error compiling shader: ","SpriteBatch.end must be called before begin.","SpriteBatch.begin must be called before end.","SpriteBatch.begin must be called before draw.","u_projTrans","u_texture","Unmappable characters of length ","error","Cannot register an uniform after initialization",
"Already initialized","Malformed input of length ","None","SourceOver","NearestNeighbour","BiLinear","shininess","alphaTest","texture cannot be null.","offset + length must be <= size: ","com/badlogic/gdx/utils/arial-15.fnt","com/badlogic/gdx/utils/arial-15.png","If no regions are specified, the font data must have an images path.","Intensity","LuminanceAlpha","RGB565","RGBA4444","RGB888","RGBA8888","Invalid type specified","diffuseColor","specularColor","ambientColor","emissiveColor","reflectionColor","ambientLightColor",
"fogColor","The specified font must contain at least one texture page.","UCI sequence: ","CompositeRangeSet:  <nonsurrogate> "," <surrogate> ","FinalSet","<Empty set>","cullface","attributes must be >= 1","Call end() first.","Logical","Pixels","Could not remove child from its current parent","Cannot add a parent as a child","data/badlogic.jpg","ground","ID: ","\nFPS: ","\nTotal Boxes: ","\nBullet Version: ","\nInputs: Enter for fullscreen, Space to un/freeze simulation\nHold Left/Right mouse to manipulate camera",
"Libgdx teaVM Backend + teaVM Bullet Extension by xpenatan","{","}","scripts/bullet.js","scripts/bullet.wasm.js","scripts/bullet.wasm.wasm","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/","==","=","Mesh attempting to access memory outside of the index buffer (count: ",", offset: ",", max: ","capacity must be >= 0: ","The required capacity is too large: ","EOI","The last byte in dst ","The last byte in src ","^","Call end() first","Call begin() first","node","box","IndexBufferObject cannot be used after it has been disposed.",
"PreviousMatch","NonCapFSet","Either src or dest is null","java.version","1.8","os.name","TeaVM","file.separator","path.separator","line.separator","java.io.tmpdir","java.vm.version","user.home","/tmp","Already loaded.","File is empty.","padding=","Invalid padding.","Missing common header.","Invalid common header.","lineHeight=","Missing: lineHeight","base=","Missing: base","pages=","Missing additional page definitions.",".*id=(\\d+)",".*file=\"?([^\"]+)\"?","\\\\","Missing: file","Page IDs must be indices starting at 0: ",
"Invalid page id: ","kernings ","metrics ","char "," =","kerning ","Error loading font file: ","No glyphs found.","DotAll","decomposed Hangul syllable:",", #","Asset loaded: ","data:",";base64,","WordBoundary","a_normal","Cannot build mesh without position attribute","Mesh attributes don\'t match","Mesh can\'t hold enough vertices: "," * "," < ","Mesh can\'t hold enough indices: ","Too many vertices used","Incorrect primitive type","spotLights","Script loaded: ","data must be a ByteBuffer or FloatBuffer","Can\'t invert a singular matrix",
"The same task may not be scheduled twice.","#iterator() cannot be used nested.","<SOL>","java.runtime.name","Windows","OS X","no OS","Linux",".html","index.html","index-debug.html","assets/","assets.txt","scripts/soundmanager2-jsmin.js","directionalLights","com/badlogic/gdx/graphics/g3d/shaders/default.vertex.glsl","com/badlogic/gdx/graphics/g3d/shaders/default.fragment.glsl","u_dirLights[0].color","u_dirLights[0].direction","u_dirLights[1].color","u_pointLights[0].color","u_pointLights[0].position","u_pointLights[0].intensity",
"u_pointLights[1].color","u_spotLights[0].color","u_spotLights[0].position","u_spotLights[0].intensity","u_spotLights[0].direction","u_spotLights[0].cutoffAngle","u_spotLights[0].exponent","u_spotLights[1].color","u_fogColor","u_shadowMapProjViewTrans","u_shadowTexture","u_shadowPCFOffset","Some attributes not implemented yet (","too many bones: ",", max configured: ","u_time","#define positionFlag\n","#define colorFlag\n","#define binormalFlag\n","#define tangentFlag\n","#define normalFlag\n","#define lightingFlag\n",
"#define ambientCubemapFlag\n","#define numDirectionalLights ","#define numPointLights ","#define numSpotLights ","#define fogFlag\n","#define shadowMapFlag\n","#define environmentCubemapFlag\n","#define boneWeight","Flag\n","#define texCoord","#define blendedFlag\n","#define diffuseTextureFlag\n","#define diffuseTextureCoord texCoord0\n","#define specularTextureFlag\n","#define specularTextureCoord texCoord0\n","#define normalTextureFlag\n","#define normalTextureCoord texCoord0\n","#define emissiveTextureFlag\n",
"#define emissiveTextureCoord texCoord0\n","#define reflectionTextureFlag\n","#define reflectionTextureCoord texCoord0\n","#define ambientTextureFlag\n","#define ambientTextureCoord texCoord0\n","#define diffuseColorFlag\n","#define specularColorFlag\n","#define emissiveColorFlag\n","#define reflectionColorFlag\n","#define shininessFlag\n","#define alphaTestFlag\n","#define numBones ","Unknown material attribute: ","Exception occurred in constructor for class: ","Illegal argument(s) supplied to constructor for class: ",
"Could not instantiate instance of class: ","IDLE","QUEUE_ASSETS_LOADED","INIT_SOUND","APP_CREATE","APP_READY","public","protected","private","abstract","static","final","transient","volatile","synchronized","native","strictfp","interface","Image","Audio","Text","t","Binary","Directory","<Unix MultiLine $>","diffuseTexture","specularTexture","bumpTexture","normalTexture","ambientTexture","emissiveTexture","reflectionTexture","u_viewTrans","u_projViewTrans","u_cameraPosition","u_cameraDirection","u_cameraUp",
"u_cameraNearFar","u_worldTrans","u_viewWorldTrans","u_projViewWorldTrans","u_normalMatrix","u_bones","u_shininess","u_opacity","u_diffuseColor","u_diffuseTexture","u_diffuseUVTransform","u_specularColor","u_specularTexture","u_specularUVTransform","u_emissiveColor","u_emissiveTexture","u_emissiveUVTransform","u_reflectionColor","u_reflectionTexture","u_reflectionUVTransform","u_normalTexture","u_normalUVTransform","u_ambientTexture","u_ambientUVTransform","u_alphaTest","u_ambientCubemap","u_dirLights","u_pointLights",
"u_spotLights","u_environmentCubemap","Illegal arguments","Is","In","glGetFloat not supported by Dragome WebGL backend","Can only cope with FloatBuffer and ShortBuffer at the moment","glGetFloat not supported by WebGL backend"]);
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
~a);};}var CA=Long_add;var D6=Long_sub;var Cf=Long_mul;var E_=Long_div;var AU$=Long_rem;var BQ=Long_or;var Br=Long_and;var ARp=Long_xor;var D8=Long_shl;var M_=Long_shr;var CN=Long_shru;var Bpa=Long_compare;var Z=Long_eq;var Dw=Long_ne;var Ku=Long_lt;var Kv=Long_le;var Hq=Long_gt;var Bpb=Long_ge;var Bpc=Long_not;var A4b=Long_neg;
function TeaVMThread(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}TeaVMThread.prototype.push=function(){for(var i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};TeaVMThread.prototype.s=TeaVMThread.prototype.push;TeaVMThread.prototype.pop=function(){return this.stack.pop();};TeaVMThread.prototype.l=TeaVMThread.prototype.pop;TeaVMThread.prototype.isResuming=function(){return this.status===2;};TeaVMThread.prototype.isSuspending
=function(){return this.status===1;};TeaVMThread.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};TeaVMThread.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if($rt_currentNativeThread!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:function(result){if(result instanceof Error){throw result;}};this.run();};TeaVMThread.prototype.resume=function(){if($rt_currentNativeThread
!==null){throw new Error("Another thread is running");}this.status=2;this.run();};TeaVMThread.prototype.run=function(){$rt_currentNativeThread=this;var result;try {result=this.runner();}catch(e){result=e;}finally {$rt_currentNativeThread=null;}if(this.suspendCallback!==null){var self=this;var callback=this.suspendCallback;this.suspendCallback=null;callback(function(){self.resume();});}else if(this.status===0){this.completeCallback(result);}};function $rt_suspending(){var thread=$rt_nativeThread();return thread
!=null&&thread.isSuspending();}function $rt_resuming(){var thread=$rt_nativeThread();return thread!=null&&thread.isResuming();}function $rt_suspend(callback){var nativeThread=$rt_nativeThread();if(nativeThread===null){throw new Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);}function $rt_startThread(runner,callback){(new TeaVMThread(runner)).start(callback);}var $rt_currentNativeThread=null;function $rt_nativeThread(){return $rt_currentNativeThread;}function $rt_invalidPointer()
{throw new Error("Invalid recorded state");}main=$rt_mainStarter(BfG);
main.javaException=$rt_javaException;
(function(){var c;c=SY.prototype;c.onBulletPhysicsLoaded=c.JQ;c=XU.prototype;c.fullscreenChanged=c.T2;c=W0.prototype;c.setWorldTransformJS=c.Xk;c=W1.prototype;c.getWorldTransformJS=c.VX;c=Ub.prototype;c.handleEvent=c.lF;c=Pn.prototype;c.onready=c.T3;c.ontimeout=c.Ro;c=V2.prototype;c.onTimer=c.SV;c=P0.prototype;c.handleEvent=c.lF;c=QX.prototype;c.getLength=c.XA;c.get=c.Um;c=Sr.prototype;c.onAnimationFrame=c.S$;c=SR.prototype;c.handleEvent=c.lF;c=SP.prototype;c.handleEvent=c.lF;c=SX.prototype;c.handleEvent=c.lF;c
=SW.prototype;c.handleEvent=c.lF;c=Pk.prototype;c.dispatchEvent=c.Sj;c.addEventListener=c.W3;c.removeEventListener=c.XQ;c.getLength=c.V1;c.get=c.US;c.addEventListener=c.Vp;c.removeEventListener=c.S9;c=RC.prototype;c.onBulletPhysicsLoaded=c.JQ;})();
})();
