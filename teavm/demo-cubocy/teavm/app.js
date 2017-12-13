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
{if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.fB=f;}
function $rt_cls(cls){return PO(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return JO(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bM.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return ATD;}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(WP());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return Cw();}
function $rt_setThread(t){return FY(t);}
function $rt_createException(message){return ATE(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var H=$rt_throw;var Cm=$rt_compare;var ATF=$rt_nullCheck;var E=$rt_cls;var Bh=$rt_createArray;var ASJ=$rt_isInstance;var AKe=$rt_nativeThread;var AQA=$rt_suspending;var AQH=$rt_resuming;var APj=$rt_invalidPointer;var B=$rt_s;var P=$rt_eraseClinit;var BP=$rt_imul;var CY=$rt_wrapException;var ATG=$rt_checkBounds;var ATH=$rt_checkUpperBound;var ATI=$rt_checkLowerBound;var ATJ=$rt_wrapFunction0;var ATK=$rt_wrapFunction1;var ATL=$rt_wrapFunction2;var ATM=$rt_wrapFunction3;var ATN=$rt_wrapFunction4;var F=$rt_classWithoutFields;var G
=$rt_createArrayFromData;var ACL=$rt_createCharArrayFromData;var ATO=$rt_createByteArrayFromData;var ATP=$rt_createShortArrayFromData;var Lg=$rt_createIntArrayFromData;var ATQ=$rt_createBooleanArrayFromData;var ATR=$rt_createFloatArrayFromData;var ATS=$rt_createDoubleArrayFromData;var Xl=$rt_createLongArrayFromData;var Ti=$rt_createBooleanArray;var Dv=$rt_createByteArray;var MO=$rt_createShortArray;var BR=$rt_createCharArray;var W=$rt_createIntArray;var ATT=$rt_createLongArray;var Cf=$rt_createFloatArray;var ATU
=$rt_createDoubleArray;var Cm=$rt_compare;var ATV=$rt_castToClass;var ATW=$rt_castToInterface;var AQV=Long_toNumber;var T=Long_fromInt;var ATX=Long_fromNumber;var BK=Long_create;var Cs=Long_ZERO;var ATY=Long_hi;var DB=Long_lo;
function C(){this.bg=null;this.$id$=0;}
function Y9(){var a=new C();J(a);return a;}
function ASl(b){var c;if(b.bg===null)Ib(b);if(b.bg.cb===null)b.bg.cb=Cw();else if(b.bg.cb!==Cw())H(BN(B(0)));c=b.bg;c.co=c.co+1|0;}
function ATi(b){var c,d;if(!Dy(b)&&b.bg.cb===Cw()){c=b.bg;d=c.co-1|0;c.co=d;if(!d)b.bg.cb=null;Dy(b);return;}H(AJ8());}
function ARQ(b){ABY(b,1);}
function ABY(b,c){var d,$p,$z;$p=0;if(AQH()){var $T=AKe();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.bg===null)Ib(b);if(b.bg.cb===null)b.bg.cb=Cw();if(b.bg.cb===Cw()){d=b.bg;d.co=d.co+c|0;return;}$p=1;case 1:ADS(b,c);if(AQA()){break _;}return;default:APj();}}AKe().s(b,c,d,$p);}
function Ib(b){b.bg=AQX();}
function ADS(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.j$=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.x3=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=ARf(callback);return thread.suspend(function(){try{ARd(b,c,callback);}catch($e){callback.x3($rt_exception($e));}});}
function ARd(b,c,d){var e,f,g;e=Cw();if(b.bg===null){Ib(b);FY(e);f=b.bg;f.co=f.co+c|0;d.j$(null);return;}if(b.bg.cb===null){b.bg.cb=e;FY(e);f=b.bg;f.co=f.co+c|0;d.j$(null);return;}g=b.bg;if(g.dc===null)g.dc=TX();AFR(g.dc,ATc(e,b,c,d));}
function ARW(b){Uz(b,1);}
function Uz(b,c){var d;if(!Dy(b)&&b.bg.cb===Cw()){d=b.bg;d.co=d.co-c|0;if(d.co>0)return;d.cb=null;if(d.dc!==null&&!F4(d.dc))AFx(AQo(b));else Dy(b);return;}H(AJ8());}
function AKy(b){var c,d,e;if(!Dy(b)&&b.bg.cb===null){c=b.bg;if(c.dc!==null&&!F4(c.dc)){d=c.dc;e=AHw(d);c.dc=null;e.g3();}return;}}
function Dy(a){var b,c;b=a.bg;if(b===null)return 1;a:{b:{if(b.cb===null){if(b.dc!==null){c=b.dc;if(!F4(c))break b;}if(b.rQ===null)break a;c=b.rQ;if(F4(c))break a;}}return 0;}SL(a);return 1;}
function SL(a){a.bg=null;}
function J(a){}
function Dl(a){return PO(a.constructor);}
function YK(a){return Gs(a);}
function AFH(a,b){return a!==b?0:1;}
function W8(a){return (((M()).a(B(1))).a(Te(Gs(a)))).d();}
function Gs(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AEx(a){var b,c,d;if(!ASJ(a,CK)){b=a;if(b.constructor.$meta.item===null)H(ARz());}c=Ul(a);b=c;d=$rt_nextId();b.$id$=d;return c;}
function AEa(b){AKy(b);}
function AGm(b,c,d,e){var f;FY(b);c.bg.cb=b;f=c.bg;f.co=f.co+d|0;e.j$(null);}
function O(){var a=this;C.call(a);a.nj=null;a.l8=null;}
function X(a){J(a);}
function AJw(a,b){if(!b&&a.nj===null)a.nj=a.H();else if(b&&a.l8===null)a.l8=(a.H()).eC(1);if(b)return a.l8;return a.nj;}
var OY=F(O);
function APQ(){var a=new OY();AJ7(a);return a;}
function AJ7(a){X(a);}
function YN(a){return ((B1()).cc(32)).cc(9);}
var Mw=F(O);
function AQq(){var a=new Mw();AM_(a);return a;}
function AM_(a){X(a);}
function AFT(a){return ((B1()).bq(0,31)).cc(127);}
var HH=F(0);
function KQ(){var a=this;C.call(a);a.oM=null;a.qF=null;a.sY=0;a.tF=0;}
function ARU(a,b){var c=new KQ();ALx(c,a,b);return c;}
function ALx(a,b,c){J(a);a.oM=b;a.qF=c;}
function ZN(a){return Dp(a.oM);}
function AKA(a,b){return Bq(a.qF)<b?0:1;}
function AA7(a,b){a.sY=b;}
function AO5(a,b){a.tF=b;}
var Bx=F(0);
var CT=F();
function SD(a){J(a);}
var BM=F(0);
function CU(){CT.call(this);this.gZ=0;}
var ATZ=null;var AT0=null;function Cj(){Cj=P(CU);AKK();}
function RN(a){var b=new CU();Fi(b,a);return b;}
function Fi(a,b){Cj();SD(a);a.gZ=b;}
function Mi(b,c){Cj();if(!(c>=2&&c<=36))c=10;return ((ATb(20)).o4(b,c)).d();}
function RU(b){Cj();return b>>>4^b<<28^b<<8^b>>>24;}
function Te(b){Cj();return Um(b,4);}
function Qe(b){Cj();return Mi(b,10);}
function E2(b,c){var d,e,f,g,h;Cj();if(c>=2&&c<=36){if(b!==null&&!b.bJ()){a:{d=0;e=0;switch(b.h(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==b.k())H(ATu());while(e<b.k()){g=e+1|0;h=H_(b.h(e));if(h<0)H(CC((((M()).a(B(2))).a(b)).d()));if(h>=c)H(CC((((((M()).a(B(3))).l(c)).a(B(4))).a(b)).d()));f=BP(c,f)+h|0;if(f<0){if(g==b.k()&&f==(-2147483648)&&d)return (-2147483648);H(CC((((M()).a(B(5))).a(b)).d()));}e=g;}if(d)f= -f|0;return f;}H(CC(B(6)));}H(CC((((M()).a(B(7))).l(c)).d()));}
function S(b){Cj();if(b>=(-128)&&b<=127){KT();return AT0.data[b+128|0];}return RN(b);}
function KT(){var b;Cj();a:{if(AT0===null){AT0=Bh(CU,256);b=0;while(true){if(b>=AT0.data.length)break a;AT0.data[b]=RN(b-128|0);b=b+1|0;}}}}
function VA(a){return a.gZ;}
function AM1(a){return Qe(a.gZ);}
function T9(a){return RU(a.gZ);}
function ANU(a,b){if(a===b)return 1;return b instanceof CU&&b.gZ==a.gZ?1:0;}
function GS(b){var c,d,e;Cj();if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;e=d>>>8;if(!e)e=d;else c=c|8;d=e>>>4;if(!d)d=e;else c=c|4;e=d>>>2;if(!e)e=d;else c=c|2;if(e>>>1)c=c|1;return (32-c|0)-1|0;}
function DW(b){var c,d,e;Cj();if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;e=d<<8;if(!e)e=d;else c=c|8;d=e<<4;if(!d)d=e;else c=c|4;e=d<<2;if(!e)e=d;else c=c|2;if(e<<1)c=c|1;return (32-c|0)-1|0;}
function Ng(b,c){var d;Cj();d=c&31;return b<<d|b>>>(32-d|0);}
function AKK(){ATZ=E($rt_intcls());}
var Dm=F();
var AT1=null;var AT2=null;var AT3=null;var AT4=null;var AT5=null;function AP9(){AP9=P(Dm);ADp();}
function ADp(){AT1=Lg([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);AT2=Xl([T(1),T(10),T(100),T(1000),T(10000),T(100000),T(1000000),T(10000000),T(100000000),T(1000000000),BK(1410065408, 2),BK(1215752192, 23),BK(3567587328, 232),BK(1316134912, 2328),BK(276447232, 23283),BK(2764472320, 232830),BK(1874919424, 2328306),BK(1569325056, 23283064),BK(2808348672, 232830643)]);AT3=Xl([T(1),T(10),T(100),T(10000),T(100000000),BK(1874919424, 2328306)]);AT4=ARE();AT5=AQE();}
function Ba(){var a=this;C.call(a);a.f=null;a.b$=0;a.pO=null;a.sx=0;}
var AT6=0;function LY(){LY=P(Ba);AOb();}
function BF(a){var b,c;LY();J(a);b=new CU;c=AT6;AT6=c+1|0;Fi(b,c);a.pO=b.d();}
function Fz(a,b){var c,d;LY();J(a);c=new CU;d=AT6;AT6=d+1|0;Fi(c,d);a.pO=c.d();a.f=b;}
function En(a,b,c,d){var e;e=d.A();while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function Es(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function Yc(a,b){a.sx=b;}
function WW(a){return a.sx;}
function AKw(a){return a.f;}
function I8(a,b){a.f=b;}
function AL7(a,b){return 1;}
function ANx(a){return null;}
function JU(a){var b;a.b$=1;if(a.f!==null){if(!a.f.b$){b=a.f.fg();if(b!==null){a.f.b$=1;a.f=b;}a.f.dn();}else if(a.f instanceof DO&&a.f.cP.lD)a.f=a.f.f;}}
function AOb(){AT6=1;}
function Bf(){var a=this;Ba.call(a);a.bA=null;a.cP=null;a.bc=0;}
function AT7(){var a=new Bf();BZ(a);return a;}
function AQ9(a,b){var c=new Bf();PV(c,a,b);return c;}
function BZ(a){BF(a);}
function PV(a,b,c){BF(a);a.bA=b;a.cP=c;a.bc=c.hc();}
function ABM(a,b,c,d){var e,f,g,h,i;if(a.bA===null)return (-1);e=d.fI(a.bc);d.dB(a.bc,b);f=a.bA.cT();g=0;while(true){if(g>=f){d.dB(a.bc,e);return (-1);}h=a.bA.R(g);i=h.c(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function AHR(a,b){a.cP.E(b);}
function AEP(a,b){var c;a:{if(a.bA!==null){c=a.bA.sw();while(true){if(!c.t2())break a;if(!(c.pk()).bT(b))continue;else return 1;}}}return 0;}
function AIN(a,b){var c,d;a:{if(b.jW(a.bc)>=0){c=b.fI(a.bc);d=a.bc;if(c==b.jW(d)){c=0;break a;}}c=1;}return c;}
function XK(a){var b,c,d,e;a.b$=1;if(a.cP!==null&&!a.cP.b$)a.cP.dn();a:{if(a.bA!==null){b=a.bA.cT();c=0;while(true){if(c>=b)break a;d=a.bA.R(c);e=d.fg();if(e===null)e=d;else{d.b$=1;a.bA.iz(c);a.bA.Ah(c,e);}if(!e.b$)e.dn();c=c+1|0;}}}if(a.f!==null)JU(a);}
function DO(){Bf.call(this);this.cu=null;}
function ARS(a,b){var c=new DO();Mb(c,a,b);return c;}
function Mb(a,b,c){BZ(a);a.cu=b;a.cP=c;a.bc=c.hc();}
function UC(a,b,c,d){var e,f;e=d.fI(a.bc);d.dB(a.bc,b);f=a.cu.c(b,c,d);if(f>=0)return f;d.dB(a.bc,e);return (-1);}
function AFf(a,b,c,d){var e;e=a.cu.cd(b,c,d);if(e>=0)d.dB(a.bc,e);return e;}
function AJX(a,b,c,d,e){var f;f=a.cu.ch(b,c,d,e);if(f>=0)e.dB(a.bc,f);return f;}
function AEI(a,b){return a.cu.bT(b);}
function AHT(a){var b;b=ARO(a);a.f=b;return b;}
function ANC(a){var b;a.b$=1;if(a.cP!==null&&!a.cP.b$)a.cP.dn();if(a.cu!==null&&!a.cu.b$){b=a.cu.fg();if(b!==null){a.cu.b$=1;a.cu=b;}a.cu.dn();}}
var FT=F(0);
function Dj(){var a=this;C.call(a);a.zN=Cs;a.xa=Cs;a.u1=null;a.v7=null;a.uz=0;a.Ac=null;}
var AT8=null;var AT9=null;var AT$=0;var AT_=0;var AUa=null;function Js(){Js=P(Dj);VY();}
function ARi(a){var b=new Dj();Lm(b,a);return b;}
function AUb(a,b){var c=new Dj();IQ(c,a,b);return c;}
function Lm(a,b){Js();IQ(a,null,b);}
function IQ(a,b,c){var d;Js();J(a);a.u1=Y9();a.uz=1;a.v7=c;a.Ac=b;d=AT$;AT$=d+1|0;a.zN=T(d);}
function FY(b){Js();if(AT9!==b)AT9=b;AT9.xa=F6();}
function Cw(){Js();return AT9;}
function VY(){AT8=ARi(B(8));AT9=AT8;AT$=1;AT_=1;AUa=ASM();}
var FE=F(O);
function ASZ(){var a=new FE();L7(a);return a;}
function L7(a){X(a);}
function LW(a){return ((B1()).bq(97,122)).bq(65,90);}
var Kj=F(DO);
function ARO(a){var b=new Kj();AJf(b,a);return b;}
function AJf(a,b){Mb(a,b.cu,b.cP);}
function AAS(a,b,c,d){var e,f,g;e=0;f=d.A();a:{while(true){if(b>f){b=e;break a;}g=d.fI(a.bc);d.dB(a.bc,b);e=a.cu.c(b,c,d);if(e>=0)break;d.dB(a.bc,g);b=b+1|0;}}return b;}
function AOI(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=e.fI(a.bc);e.dB(a.bc,c);f=a.cu.c(c,d,e);if(f>=0)break;e.dB(a.bc,g);c=c+(-1)|0;}}return c;}
function XY(a){return null;}
var BE=F(0);
function AA1(b){return b;}
var Kk=F();
function AGr(b){return b;}
function F4(b){return b.length?0:1;}
function AFR(b,c){var d;d=AGr(c);b.push(d);}
function AHw(b){return b.shift();}
var EZ=F(O);
function ARD(){var a=new EZ();MI(a);return a;}
function MI(a){X(a);}
function O0(a){return ((((B1()).bq(97,122)).bq(65,90)).bq(48,57)).cc(95);}
var RA=F(EZ);
function API(){var a=new RA();ACJ(a);return a;}
function ACJ(a){MI(a);}
function AGs(a){var b;b=(O0(a)).eC(1);b.U=1;return b;}
function Bk(){var a=this;C.call(a);a.o$=null;a.sO=0;}
function BX(a,b,c){J(a);a.o$=b;a.sO=c;}
function Y(a){return a.sO;}
function AB3(a){return a.o$.d();}
var Ch=F(Bk);
var AUc=null;var AUd=null;var AUe=null;var AUf=null;var AUg=null;var AUh=null;var AUi=null;function Gr(){Gr=P(Ch);Ya();}
function EF(a,b){var c=new Ch();K6(c,a,b);return c;}
function K6(a,b,c){Gr();BX(a,b,c);}
function Ya(){AUc=EF(B(9),0);AUd=EF(B(10),1);AUe=EF(B(11),2);AUf=EF(B(12),3);AUg=EF(B(13),4);AUh=EF(B(14),5);AUi=G(Ch,[AUc,AUd,AUe,AUf,AUg,AUh]);}
var Hr=F();
var AUj=null;function C7(){return AUj;}
function U$(b){AUj=b;}
function Bl(){Ba.call(this);this.bC=0;}
function Kr(a,b){Fz(a,b);a.bC=1;a.oH(1);}
function B8(a){BF(a);a.bC=1;}
function AOj(a,b,c,d){var e;if((b+a.bX()|0)>d.A()){d.dg=1;return (-1);}e=a.bt(b,c);if(e<0)return (-1);return a.f.c(b+e|0,c,d);}
function ALf(a){return a.bC;}
function ADs(a,b){return 1;}
function Kt(){Bl.call(this);this.hN=null;}
function ATC(a){var b=new Kt();AB9(b,a);return b;}
function AB9(a,b){B8(a);a.hN=b.d();a.bC=b.k();}
function AJ6(a,b,c){var d,e,f,g;d=0;while(true){if(d>=a.hN.k())return a.hN.k();e=a.hN.h(d);f=b+d|0;if(e!=c.h(f)){g=a.hN;if(Ek(g.h(d))!=c.h(f))break;}d=d+1|0;}return (-1);}
var ER=F(0);
function Dg(){var a=this;C.call(a);a.ss=null;a.jT=null;a.nl=0;a.on=0;a.pK=null;}
function AUk(){var a=new Dg();NE(a);return a;}
function AUl(a){var b=new Dg();Jq(b,a);return b;}
function AUm(a){var b=new Dg();R5(b,a);return b;}
function NE(a){a.nl=1;a.on=1;a.nU();}
function Jq(a,b){a.nl=1;a.on=1;a.nU();a.ss=b;}
function R5(a,b){a.nl=1;a.on=1;a.nU();a.jT=b;}
function AAD(a){return a;}
function AJS(a){return a.ss;}
function ABA(a){return a.oG();}
function ACp(a){a.sp(Q_());}
function AN_(a,b){var c,d,e,f,g;b.ka((Dl(a)).wm());c=a.uX();if(c!==null)b.ka((((M()).a(B(4))).a(c)).d());a:{b.wO();if(a.pK!==null){d=a.pK.data;e=d.length;f=0;while(true){if(f>=e)break a;g=d[f];b.ka(B(15));b.zU(g);f=f+1|0;}}}if(a.jT!==null&&a.jT!==a){b.ka(B(16));a.jT.sp(b);}}
var DJ=F(Dg);
function AUn(a){var b=new DJ();Mx(b,a);return b;}
function AUo(a){var b=new DJ();P7(b,a);return b;}
function Mx(a,b){Jq(a,b);}
function P7(a,b){R5(a,b);}
var Ed=F(DJ);
function AUp(a){var b=new Ed();J7(b,a);return b;}
function J7(a,b){Mx(a,b);}
function OO(){var a=this;C.call(a);a.dv=0;a.d2=null;a.ki=0;a.tM=0.0;a.lx=0;a.lW=0;a.e8=0;}
function ASS(){var a=new OO();Zg(a);return a;}
function AUq(a,b){var c=new OO();ME(c,a,b);return c;}
function Zg(a){ME(a,51,0.800000011920929);}
function ME(a,b,c){var d;J(a);if(c>0.0&&c<1.0){a.tM=c;d=F7(b,c);a.lx=d*c|0;a.e8=d-1|0;a.lW=CE(T(a.e8));a.d2=W(d);return;}H(Bp((((M()).a(B(17))).hF(c)).d()));}
function AL$(a,b){return DB(Cd(C1(T(b),BK(2135587861, 2654435769)),a.lW));}
function HB(a,b){var c,d,e;c=a.d2;d=a.e_(b);while(true){e=c.data[d];if(!e)return  -(d+1|0)|0;if(e==b)break;d=(d+1|0)&a.e8;}return d;}
function YC(a,b){var c,d;if(!b){if(a.ki)return 0;a.ki=1;a.dv=a.dv+1|0;return 1;}c=HB(a,b);if(c>=0)return 0;d= -(c+1|0)|0;a.d2.data[d]=b;d=a.dv+1|0;a.dv=d;if(d>=a.lx)Mn(a,a.d2.data.length<<1);return 1;}
function MU(a,b){var c,d,e;c=a.d2;d=a.e_(b);while(true){e=c.data;if(!e[d])break;d=(d+1|0)&a.e8;}e[d]=b;}
function AMn(a,b){var c,d,e,f,g,h,i;if(!b){if(!a.ki)return 0;a.ki=0;a.dv=a.dv-1|0;return 1;}c=HB(a,b);if(c<0)return 0;d=a.d2;e=a.e8;f=(c+1|0)&e;while(true){g=d.data;h=g[f];if(!h)break;i=a.e_(h);if(((f-i|0)&e)>((c-i|0)&e)){g[c]=h;c=f;}f=(f+1|0)&e;}g[c]=0;a.dv=a.dv-1|0;return 1;}
function Mn(a,b){var c,d,e,f;a:{c=a.d2.data.length;a.lx=b*a.tM|0;a.e8=b-1|0;a.lW=CE(T(a.e8));d=a.d2;a.d2=W(b);if(a.dv>0){e=0;while(true){if(e>=c)break a;f=d.data[e];if(f)MU(a,f);e=e+1|0;}}}}
var B3=F(Dg);
function AUr(){var a=new B3();FZ(a);return a;}
function AUs(a){var b=new B3();Gv(b,a);return b;}
function FZ(a){NE(a);}
function Gv(a,b){Jq(a,b);}
var Be=F(B3);
function AUt(){var a=new Be();B7(a);return a;}
function ATE(a){var b=new Be();Eb(b,a);return b;}
function B7(a){FZ(a);}
function Eb(a,b){Gv(a,b);}
var E$=F(Be);
function Dq(){var a=new E$();LO(a);return a;}
function Bg(a){var b=new E$();ACS(b,a);return b;}
function LO(a){B7(a);}
function ACS(a,b){Eb(a,b);}
var SM=F(E$);
function Hb(){var a=new SM();ALn(a);return a;}
function ALn(a){LO(a);}
function GD(){var a=this;Be.call(a);a.zO=null;a.zl=null;}
function ARy(a,b,c){var d=new GD();AAx(d,a,b,c);return d;}
function AAx(a,b,c,d){Eb(a,b);a.zO=c;a.zl=d;}
function D$(){var a=this;Bf.call(a);a.oS=0;a.g1=0;}
function ATk(a,b){var c=new D$();G_(c,a,b);return c;}
function G_(a,b,c){BZ(a);a.oS=b;a.g1=c;}
function Vg(a,b,c,d){var e,f,g,h;e=a.g7(d);if(e!==null&&(b+e.k()|0)<=d.A()){f=0;while(true){if(f>=e.k()){d.bh(a.g1,e.k());return a.f.c(b+e.k()|0,c,d);}g=e.h(f);h=b+f|0;if(g!=c.h(h)&&Ek(e.h(f))!=c.h(h))break;f=f+1|0;}return (-1);}return (-1);}
function AIR(a,b){a.f=b;}
function Ys(a,b){var c;c=b.xT(a.oS);return c;}
function AJp(a,b){var c;c=!b.ds(a.g1)?0:1;b.bh(a.g1,(-1));return c;}
var N1=F(D$);
function AQL(a,b){var c=new N1();AA9(c,a,b);return c;}
function AA9(a,b,c){G_(a,b,c);}
function AE_(a,b,c,d){var e,f,g,h;e=a.g7(d);if(e!==null&&(b+e.k()|0)<=d.A()){f=0;while(true){if(f>=e.k()){d.bh(a.g1,e.k());return a.f.c(b+e.k()|0,c,d);}g=C5(CP(e.h(f)));h=b+f|0;h=CP(c.h(h));if(g!=C5(h))break;f=f+1|0;}return (-1);}return (-1);}
function Ft(){C.call(this);this.x5=null;}
var AUu=null;var AUv=null;function Df(){Df=P(Ft);AOx();}
function ZJ(a){var b=new Ft();JJ(b,a);return b;}
function JJ(a,b){Df();J(a);a.x5=b;}
function DQ(){Df();return AUu;}
function AOx(){AUu=ZJ(B(18));AUv=ZJ(B(19));}
var Dw=F(Bk);
var AUw=null;var AUx=null;var AUy=null;function Kd(){Kd=P(Dw);XS();}
function AId(a,b){var c=new Dw();RT(c,a,b);return c;}
function RT(a,b,c){Kd();BX(a,b,c);}
function XS(){AUw=AId(B(20),0);AUx=AId(B(21),1);AUy=G(Dw,[AUw,AUx]);}
var CL=F(Bk);
var AUz=null;var AUA=null;var AUB=null;var AUC=null;var AUD=null;var AUE=null;function EN(){EN=P(CL);AKf();}
function Ff(a,b){var c=new CL();KA(c,a,b);return c;}
function NL(){EN();return AUE.fB();}
function KA(a,b,c){EN();BX(a,b,c);}
function AKf(){AUz=Ff(B(22),0);AUA=Ff(B(23),1);AUB=Ff(B(24),2);AUC=Ff(B(25),3);AUD=Ff(B(26),4);AUE=G(CL,[AUz,AUA,AUB,AUC,AUD]);}
function Op(){var a=this;O.call(a);a.nO=0;a.k1=0;a.pR=0;}
function Bc(a,b){var c=new Op();X5(c,a,b);return c;}
function ARg(a,b,c){var d=new Op();ANi(d,a,b,c);return d;}
function X5(a,b,c){X(a);a.k1=c;a.nO=b;}
function ANi(a,b,c,d){X(a);a.pR=d;a.k1=c;a.nO=b;}
function AAP(a){var b;b=ATf(a.nO);if(a.pR)b.br.kx(0,2048);b.U=a.k1;return b;}
var Jt=F(0);
var In=F(0);
var IH=F(0);
var CW=F();
function EU(a){J(a);}
function UM(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.o0(f[c]);e=e+1|0;c=g;}}
var IA=F(CW);
var AUF=null;function ANK(){ANK=P(IA);AIK();}
function AR6(){var a=new IA();Sw(a);return a;}
function Sw(a){ANK();EU(a);}
function AHg(a,b){AKQ(b);}
function AIK(){AUF=AR6();}
function Cr(){Ba.call(this);this.O=null;}
function Eh(a,b,c,d){Fz(a,c);a.O=b;a.oH(d);}
function AOt(a){return a.O;}
function AJZ(a,b){return !a.O.bT(b)&&!a.f.bT(b)?0:1;}
function AMt(a,b){return 1;}
function AFX(a){var b;a.b$=1;if(a.f!==null&&!a.f.b$){b=a.f.fg();if(b!==null){a.f.b$=1;a.f=b;}a.f.dn();}if(a.O!==null){if(!a.O.b$){b=a.O.fg();if(b!==null){a.O.b$=1;a.O=b;}a.O.dn();}else if(a.O instanceof DO&&a.O.cP.lD)a.O=a.O.f;}}
var Oy=F(Cr);
function AQC(a,b,c){var d=new Oy();Vq(d,a,b,c);return d;}
function Vq(a,b,c,d){Eh(a,b,c,d);}
function AOq(a,b,c,d){var e;e=d.A();if(e>b)return a.f.ch(b,e,c,d);return a.f.c(b,c,d);}
function AK8(a,b,c,d){var e;e=d.A();if(a.f.ch(b,e,c,d)>=0)return b;return (-1);}
function BO(){var a=this;Ba.call(a);a.lD=0;a.g$=0;}
var AUG=null;function Gk(){Gk=P(BO);AAe();}
function ASm(a){var b=new BO();De(b,a);return b;}
function De(a,b){Gk();BF(a);a.g$=b;}
function VQ(a,b,c,d){var e,f;e=d.jW(a.g$);d.nN(a.g$,b);f=a.f.c(b,c,d);if(f<0)d.nN(a.g$,e);return f;}
function AFN(a){return a.g$;}
function Wt(a,b){return 0;}
function AAe(){AUG=AP1();}
var HA=F(BO);
function AUH(a){var b=new HA();R_(b,a);return b;}
function R_(a,b){De(a,b);}
function WN(a,b,c,d){var e,f;e=a.hc();f=d.ds(e);if(f!=b)b=(-1);return b;}
var Ir=F(0);
var F9=F(0);
function NX(){var a=this;C.call(a);a.bj=null;a.h9=0;a.eL=null;a.dt=null;a.bu=null;a.bv=null;a.jP=null;a.jO=null;a.jJ=null;a.gu=0;a.gX=null;a.iX=0;a.jI=null;a.bl=null;a.en=Cs;a.gl=0;}
function APY(a){var b=new NX();Y2(b,a);return b;}
function AH2(b){var c,d,e,f,g;c=AOZ();d=0.0;e=b.detail;f=b.wheelDelta;if(c.firefox?1:0)d=(c.macOS?1:0)?1.0*e:1.0*e/3.0;else if(c.opera?1:0)d=!(c.linux?1:0)?(-1.0)*f/40.0:(-1.0)*f/80.0;else if(!(!(c.chrome?1:0)&&!(c.safari?1:0)&&!(c.IE?1:0))){d=(-1.0)*f;g=d/120.0;if(EE(g)>=1.0)d=g;else if(!(c.windows?1:0))d=!(c.macOS?1:0)?g:d/3.0;}return d;}
function Y2(a,b){J(a);a.h9=0;a.eL=APT(20);a.dt=Ti(20);a.bu=W(20);a.bv=W(20);a.jP=W(20);a.jO=W(20);a.jJ=ASS();a.gu=0;a.gX=Ti(256);a.iX=0;a.jI=Ti(256);a.gl=1;a.bj=b;KY(a);}
function KY(a){var b;b=a.bj.ownerDocument;b.addEventListener("mousedown",BA(a,"handleEvent"),!!0);b.addEventListener("mouseup",BA(a,"handleEvent"),!!0);b.addEventListener("mousemove",BA(a,"handleEvent"),!!0);b.addEventListener("wheel",BA(a,"handleEvent"),!!0);b.addEventListener("keydown",BA(a,"handleEvent"),!!0);b.addEventListener("keyup",BA(a,"handleEvent"),!!0);b.addEventListener("keypress",BA(a,"handleEvent"),!!0);a.bj.addEventListener("touchstart",BA(a,"handleEvent"),!!1);a.bj.addEventListener("touchmove",
BA(a,"handleEvent"),!!1);a.bj.addEventListener("touchcancel",BA(a,"handleEvent"),!!1);a.bj.addEventListener("touchend",BA(a,"handleEvent"),!!1);}
function AGk(a,b){PK(a,b);Sy(a,b);}
function PK(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;a:{c=$rt_str(b.type);if(c.X(B(27))){d=b;e=b.target;f=a.bj;g=e!==f?0:1;if(g&&!a.dt.data[0]){a.gl=1;a.h9=1;a.dt.data[0]=1;a.jJ.yp(Fn(d.button));a.jP.data[0]=0;a.jO.data[0]=0;if(!a.nF()){h=a.hT(d,a.bj);i=a.ho(d,a.bj);a.bu.data[0]=h;a.bv.data[0]=i;}else{j=a.bu.data;j[0]=j[0]+Dx(a,d)|0;j=a.bv.data;j[0]=j[0]+DK(a,d)|0;}a.en=Ci();if(a.bl!==null)a.bl.uC(a.bu.data[0],a.bv.data[0],0,Fn(d.button));b.preventDefault();b.stopPropagation();break a;}k=a.hT(d,a.bj);l
=a.ho(d,a.bj);if(!(k>=0.0&&k<=AUI.T()&&l>=0.0&&l<=AUI.F()))a.gl=0;return;}if(c.X(B(28))){d=b;if(!a.dt.data[0])return;a.jJ.wo(Fn(d.button));j=a.dt;j.data[0]=a.jJ.dv<=0?0:1;if(a.nF()){a.eW(0,Dx(a,d)|0,DK(a,d)|0);j=a.bu.data;j[0]=j[0]+Dx(a,d)|0;j=a.bv.data;j[0]=j[0]+DK(a,d)|0;}else{a.eW(0,a.hT(d,a.bj)-a.bu.data[0]|0,a.ho(d,a.bj)-a.bv.data[0]|0);a.bu.data[0]=a.hT(d,a.bj);a.bv.data[0]=a.ho(d,a.bj);}a.en=Ci();a.dt.data[0]=0;if(a.bl!==null)a.bl.qA(a.bu.data[0],a.bv.data[0],0,Fn(d.button));}else if(!c.X(B(29))){if(c.X(B(30)))
{m=b;if(a.bl!==null){n=AH2(m);a.bl.A3(0.0,n|0);}a.en=Ci();}else if(c.X(B(31))){a.h9=1;o=b;p=o.changedTouches;q=0;r=p.length;while(q<r){s=p.item(q);t=s.identifier;u=a.eL;v=Tc(a);u.t$(t,S(v));a.dt.data[v]=1;a.bu.data[v]=a.ix(s,a.bj);a.bv.data[v]=a.h6(s,a.bj);a.jP.data[v]=0;a.jO.data[v]=0;if(a.bl!==null)a.bl.uC(a.bu.data[v],a.bv.data[v],v,0);q=q+1|0;}a.en=Ci();b.preventDefault();}}else{d=b;if(a.nF()){a.eW(0,Dx(a,d)|0,DK(a,d)|0);j=a.bu.data;j[0]=j[0]+Dx(a,d)|0;j=a.bv.data;j[0]=j[0]+DK(a,d)|0;}else{h=a.hT(d,a.bj);i
=a.ho(d,a.bj);a.eW(0,h-a.bu.data[0]|0,i-a.bv.data[0]|0);a.bu.data[0]=h;a.bv.data[0]=i;}a.en=Ci();if(a.bl!==null){if(!a.dt.data[0])a.bl.Bq(a.bu.data[0],a.bv.data[0]);else a.bl.zy(a.bu.data[0],a.bv.data[0],0);}}}if(c.X(B(32))){o=b;p=o.changedTouches;q=0;r=p.length;while(q<r){s=p.item(q);t=s.identifier;w=(a.eL.R(t)).ok();a.eW(w,a.ix(s,a.bj)-a.bu.data[w]|0,a.h6(s,a.bj)-a.bv.data[w]|0);a.bu.data[w]=a.ix(s,a.bj);a.bv.data[w]=a.h6(s,a.bj);if(a.bl!==null)a.bl.zy(a.bu.data[w],a.bv.data[w],w);q=q+1|0;}a.en=Ci();b.preventDefault();}if
(c.X(B(33))){o=b;p=o.changedTouches;q=0;r=p.length;while(q<r){s=p.item(q);t=s.identifier;w=(a.eL.R(t)).ok();a.eL.iz(t);a.dt.data[w]=0;h=a.ix(s,a.bj);i=a.h6(s,a.bj);a.eW(w,h-a.bu.data[w]|0,i-a.bv.data[w]|0);a.bu.data[w]=h;a.bv.data[w]=i;if(a.bl!==null)a.bl.qA(a.bu.data[w],a.bv.data[w],w,0);q=q+1|0;}a.en=Ci();b.preventDefault();}if(c.X(B(34))){o=b;p=o.changedTouches;q=0;r=p.length;while(q<r){s=p.item(q);t=s.identifier;w=(a.eL.R(t)).ok();a.eL.iz(t);a.dt.data[w]=0;h=a.ix(s,a.bj);i=a.h6(s,a.bj);a.eW(w,h-a.bu.data[w]
|0,i-a.bv.data[w]|0);a.bu.data[w]=h;a.bv.data[w]=i;if(a.bl!==null)a.bl.qA(a.bu.data[w],a.bv.data[w],w,0);q=q+1|0;}a.en=Ci();b.preventDefault();}}
function Sy(a,b){var c,d,e,f,g;c=$rt_str(b.type);if(!(c.X(B(35))&&a.gl)){if(c.X(B(36))&&a.gl){d=b.charCode&65535;if(a.bl!==null)a.bl.ub(d);}else if(c.X(B(37))&&a.gl){e=Mc(b.keyCode);if(a.gX.data[e]){a.gu=a.gu-1|0;a.gX.data[e]=0;}if(a.bl!==null)a.bl.AX(e);}}else{a:{f=b;e=Mc(f.keyCode);g=0;switch(e){case 67:g=8;break a;case 112:g=127;break a;default:}}if(!(e!=67&&e!=112)){b.preventDefault();if(a.bl!==null){a.bl.uU(e);a.bl.ub(g);}}else if(!a.gX.data[e]){a.gu=a.gu+1|0;a.gX.data[e]=1;a.iX=1;a.jI.data[e]=1;if(a.bl
!==null)a.bl.uU(e);}}}
function Tc(a){var b;b=0;while(true){if(b>=20)return (-1);if(!a.eL.uk(S(b),0))break;b=b+1|0;}return b;}
function AD6(a){var b;a:{a.h9=0;if(a.iX){a.iX=0;b=0;while(true){if(b>=a.jI.data.length)break a;a.jI.data[b]=0;b=b+1|0;}}}}
function AIX(a,b,c,d){a.jP.data[b]=c;a.jO.data[b]=d;}
function Dx(a,b){return b.movementX;}
function DK(a,b){return b.movementY;}
function JA(a,b){var c,d;c=$rt_str(b.compatMode);d=c.X(B(38));if(d)b=b.documentElement;return b;}
function Gh(a,b){var c;c=b.scrollTop;return Ge(c);}
function H6(a,b){var c;c=JA(a,b);return Gh(a,c);}
function Gb(a,b){var c;c=b.scrollLeft;return Ge(c);}
function H3(a,b){var c;c=JA(a,b);return Gb(a,c);}
function Ql(a,b,c){var d;d=(c.clientX-IR(a,b)|0)+Gb(a,b)|0;d=d+H3(a,b.ownerDocument)|0;return d;}
function L8(a,b,c){var d;d=(c.clientY-I3(a,b)|0)+Gh(a,b)|0;d=d+H6(a,b.ownerDocument)|0;return d;}
function Uo(a,b,c){var d,e;d=c.width*1.0/IS(a,c);e=d*(((b.clientX-IR(a,c)|0)+Gb(a,c)|0)+H3(a,c.ownerDocument)|0);return C3(e);}
function ADa(a,b,c){var d,e;d=c.height*1.0/Hi(a,c);e=d*(((b.clientY-I3(a,c)|0)+Gh(a,c)|0)+H6(a,c.ownerDocument)|0);return C3(e);}
function AAM(a,b,c){var d;d=c.width*1.0/IS(a,c);return C3(d*Ql(a,c,b));}
function AGc(a,b,c){var d;d=c.height*1.0/Hi(a,c);return C3(d*L8(a,c,b));}
function IS(a,b){return b.clientWidth;}
function Hi(a,b){return b.clientHeight;}
function I3(a,b){return Ge(Kv(a,b));}
function Kv(a,b){var c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollTop;d=d.parentNode;}while(b!==null){c=c+b.offsetTop;b=d.offsetParent;}return c;}
function IR(a,b){return Ge(NH(a,b));}
function NH(a,b){var c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollLeft;d=d.parentNode;}while(b!==null){c=c+b.offsetLeft;b=d.offsetParent;}return c;}
function Ge(b){return b|0;}
function AMB(a,b){return a.bu.data[b];}
function V3(a,b){return a.bv.data[b];}
function YY(a){return a.h9;}
function AHK(a,b){return a.dt.data[b];}
function ACl(a,b){if(b==(-1))return a.gu<=0?0:1;if(b>=0&&b<=255)return a.gX.data[b];return 0;}
function ALu(a){return 0;}
function AFL(a,b){a.c8(b);}
function J2(){var a=this;Bf.call(a);a.qj=null;a.um=0;}
function APf(a){var b=new J2();ALY(b,a);return b;}
function ALY(a,b){BZ(a);a.qj=b.h0();a.um=b.bm;}
function AAB(a,b){a.f=b;}
function ACH(a,b,c,d){var e,f,g,h,i,j,k;e=d.cW();f=d.A();g=b+1|0;h=Cm(g,f);if(h>0){d.dg=1;return (-1);}i=c.h(b);if(!a.qj.n(i))return (-1);if(BH(i)){if(h<0){j=c.h(g);if(BV(j))return (-1);}}else if(BV(i)&&b>e){k=c.h(b-1|0);if(BH(k))return (-1);}return a.f.c(g,c,d);}
var BW=F(Cr);
function APZ(a,b,c){var d=new BW();D5(d,a,b,c);return d;}
function D5(a,b,c,d){Eh(a,b,c,d);}
function UA(a,b,c,d){var e;if(!a.O.P(d))return a.f.c(b,c,d);e=a.O.c(b,c,d);if(e>=0)return e;return a.f.c(b,c,d);}
var Ox=F(BW);
function AQz(a,b,c){var d=new Ox();Xj(d,a,b,c);return d;}
function Xj(a,b,c,d){D5(a,b,c,d);}
function ANQ(a,b,c,d){var e;if(!a.O.P(d))return a.f.c(b,c,d);e=a.f.c(b,c,d);if(e>=0)return e;return a.O.c(b,c,d);}
var Hj=F(0);
var Co=F();
var AUJ=null;var AUI=null;var AUK=null;var AUL=null;var AUM=null;var AUN=null;var AUO=null;var AUP=null;var P0=F(DJ);
function AP$(a){var b=new P0();AF6(b,a);return b;}
function AF6(a,b){P7(a,b);}
var IW=F(0);
function M5(){C.call(this);this.wu=null;}
function APD(a){var b=new M5();Z5(b,a);return b;}
function Z5(a,b){J(a);a.wu=b;}
var MA=F(BW);
function ARx(a,b,c){var d=new MA();ADT(d,a,b,c);return d;}
function ADT(a,b,c,d){D5(a,b,c,d);Gk();b.E(AUG);}
function AGl(a,b,c,d){var e,f;e=a.O.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){f=a.O.c(e,c,d);if(f<=e)break;e=f;}b=e;}return a.f.c(b,c,d);}
function FP(){var a=this;C.call(a);a.wi=null;a.vn=0;}
function NZ(a){J(a);a.wi=null;a.vn=0;}
function DF(){var a=this;C.call(a);a.v=null;a.bk=0;}
function AUQ(){var a=new DF();GY(a);return a;}
function ATb(a){var b=new DF();GK(b,a);return b;}
function GY(a){GK(a,16);}
function GK(a,b){J(a);a.v=BR(b);}
function Om(a,b){return a.p0(a.bk,b);}
function PY(a,b){return a.nP(a.bk,b);}
function Q5(a,b,c){var d,e,f;if(b>=0&&b<=a.bk){if(c===null)c=B(39);else if(c.bJ())return a;a.eO(a.bk+c.k()|0);d=a.bk-1|0;while(d>=b){a.v.data[d+c.k()|0]=a.v.data[d];d=d+(-1)|0;}a.bk=a.bk+c.k()|0;d=0;while(d<c.k()){e=a.v.data;f=b+1|0;e[b]=c.h(d);d=d+1|0;b=f;}return a;}H(Hb());}
function Lc(a,b){return a.o4(b,10);}
function Vh(a,b,c){return a.uw(a.bk,b,c);}
function ACX(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(c<0){e=0;c= -c|0;}a:{if(c<d){if(e)B2(a,b,b+1|0);else{B2(a,b,b+2|0);f=a.v.data;g=b+1|0;f[b]=45;b=g;}a.v.data[b]=Gj(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=BP(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;B2(a,b,b+i|0);if(e)l=b;else{f=a.v.data;l=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.v.data;g=l+1|0;f[l]=Gj(c/k|0,d);c=c%k|0;k=k/d|0;l=g;}}}return a;}
function Rj(a,b){return a.q0(a.bk,b);}
function PE(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=Cm(c,0.0);if(!d){B2(a,b,b+3|0);e=a.v.data;d=b+1|0;e[b]=48;e=a.v.data;f=d+1|0;e[d]=46;a.v.data[f]=48;return a;}if(!d){B2(a,b,b+4|0);e=a.v.data;d=b+1|0;e[b]=45;e=a.v.data;f=d+1|0;e[d]=48;e=a.v.data;d=f+1|0;e[f]=46;a.v.data[d]=48;return a;}if(isNaN(c)?1:0){B2(a,b,b+3|0);e=a.v.data;d=b+1|0;e[b]=78;e=a.v.data;f=d+1|0;e[d]=97;a.v.data[f]=78;return a;}if(!isFinite(c)?1:0){if(d>0){B2(a,b,b+8|0);d=b;}else{B2(a,b,b+9|0);e=a.v.data;d=b+1|0;e[b]=45;}e=a.v.data;f=d+
1|0;e[d]=73;e=a.v.data;d=f+1|0;e[f]=110;e=a.v.data;f=d+1|0;e[d]=102;e=a.v.data;d=f+1|0;e[f]=105;e=a.v.data;f=d+1|0;e[d]=110;e=a.v.data;d=f+1|0;e[f]=105;e=a.v.data;f=d+1|0;e[d]=116;a.v.data[f]=121;return a;}AP9();g=AT5;Pp(c,g);h=g.l_;i=g.lN;j=g.pi;k=1;l=1;if(j)l=2;m=9;n=ALi(h);if(n>0)m=m-n|0;if(i<7&&i>=(-3)){if(i>=0){k=i+1|0;m=BB(m,k+1|0);i=0;}else{h=h/AT1.data[ -i|0]|0;m=m-i|0;i=0;}}if(i){l=l+2|0;if(!(i>(-10)&&i<10))l=l+1|0;if(i<0)l=l+1|0;}if(i&&m==k)m=m+1|0;d=l+m|0;B2(a,b,b+d|0);if(!j)f=b;else{e=a.v.data;f
=b+1|0;e[b]=45;}o=100000000;p=0;while(p<m){if(o<=0)q=0;else{q=h/o|0;h=h%o|0;}e=a.v.data;d=f+1|0;e[f]=(48+q|0)&65535;k=k+(-1)|0;if(k)f=d;else{e=a.v.data;f=d+1|0;e[d]=46;}o=o/10|0;p=p+1|0;}if(i){e=a.v.data;d=f+1|0;e[f]=69;if(i>=0)f=d;else{i= -i|0;e=a.v.data;f=d+1|0;e[d]=45;}if(i<10)r=f;else{e=a.v.data;r=f+1|0;e[f]=(48+(i/10|0)|0)&65535;}a.v.data[r]=(48+(i%10|0)|0)&65535;}return a;}
function ALi(b){var c,d,e,f;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;f=e*100|0;if(b%f|0)f=e;else c=c|2;if(!(b%(f*10|0)|0))c=c|1;return c;}
function HX(a,b){return a.n5(a.bk,b);}
function Jo(a,b,c){B2(a,b,b+1|0);a.v.data[b]=c;return a;}
function MW(a,b,c){return a.nP(b,c===null?B(39):c.d());}
function GT(a,b){var c;if(a.v.data.length>=b)return;c=a.v.data.length>=1073741823?2147483647:BB(b,BB(a.v.data.length*2|0,5));a.v=VB(a.v,c);}
function Im(a){return G$(a.v,0,a.bk);}
function HK(a){return a.bk;}
function Kc(a,b){if(b>=0&&b<a.bk)return a.v.data[b];H(Dq());}
function Jj(a,b,c,d){return a.nc(a.bk,b,c,d);}
function GE(a,b,c,d,e){var f,g,h,i,j;B2(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.v.data;i=b+1|0;j=d+1|0;h[b]=g[d];b=i;d=j;}return a;}
function Iy(a,b){return a.mj(b,0,b.data.length);}
function Ns(a,b,c,d,e){var f,g,h,i;if(b>c)H(Bg(B(40)));while(b<c){f=d.data;g=e+1|0;h=a.v.data;i=b+1|0;f[e]=h[b];e=g;b=i;}}
function RL(a,b){a.bk=b;}
function R3(a,b){var c,d,e;if(b>=0&&b<a.bk){a.bk=a.bk-1|0;while(b<a.bk){c=a.v.data;d=a.v.data;e=b+1|0;c[b]=d[e];b=e;}return a;}H(Hb());}
function Sp(a,b,c){var d,e,f,g,h,i;d=Cm(b,c);if(d<=0&&b<=a.bk){if(!d)return a;e=a.bk-c|0;a.bk=a.bk-(c-b|0)|0;f=0;while(f<e){g=a.v.data;d=b+1|0;h=a.v.data;i=c+1|0;g[b]=h[c];f=f+1|0;b=d;c=i;}return a;}H(Hb());}
function B2(a,b,c){var d,e;d=a.bk-b|0;a.eO((a.bk+c|0)-b|0);e=d-1|0;while(e>=0){a.v.data[c+e|0]=a.v.data[b+e|0];e=e+(-1)|0;}a.bk=a.bk+(c-b|0)|0;}
var Et=F(0);
var Ld=F(DF);
function ASg(){var a=new Ld();ACm(a);return a;}
function ACm(a){GY(a);}
function AK$(a,b){HX(a,b);return a;}
function ANP(a,b,c,d){Jj(a,b,c,d);return a;}
function ZK(a,b){Iy(a,b);return a;}
function AFV(a,b,c,d,e){GE(a,b,c,d,e);return a;}
function AMP(a,b,c){Jo(a,b,c);return a;}
function AAK(a,b,c,d,e){return a.xG(b,c,d,e);}
function Wr(a,b,c,d){return a.Ar(b,c,d);}
function T$(a,b){return Kc(a,b);}
function AOo(a){return HK(a);}
function WJ(a){return Im(a);}
function Xd(a,b){GT(a,b);}
function AK_(a,b,c){return a.Ad(b,c);}
function B4(){var a=this;C.call(a);a.gY=0;a.C=0;a.Q=0;a.eE=0;}
function D6(a,b){J(a);a.eE=(-1);a.gY=b;a.Q=b;}
function DC(a){return a.gY;}
function Ca(a){return a.C;}
function Eq(a,b){if(b>=0&&b<=a.Q){a.C=b;if(b<a.eE)a.eE=0;return a;}H(Bp(((((((M()).a(B(41))).l(b)).a(B(42))).l(a.Q)).a(B(43))).d()));}
function Bi(a){return a.Q;}
function Fr(a,b){if(b>=0&&b<=a.gY){if(a.eE>b)a.eE=(-1);a.Q=b;if(a.C>a.Q)a.C=a.Q;return a;}H(Bp(((((((M()).a(B(44))).l(b)).a(B(42))).l(a.gY)).a(B(43))).d()));}
function Ej(a){a.C=0;a.Q=a.gY;a.eE=(-1);return a;}
function ES(a){a.Q=a.C;a.C=0;a.eE=(-1);return a;}
function Bq(a){return a.Q-a.C|0;}
function Dp(a){return a.C>=a.Q?0:1;}
var DZ=F();
function Gq(a){J(a);}
function N(){var a=this;DZ.call(a);a.bm=0;a.bK=0;a.br=null;a.iw=null;a.i6=null;a.U=0;}
var AUR=null;function G6(){G6=P(N);YA();}
function U(a){G6();Gq(a);a.br=ASc(2048);}
function Wp(a){return null;}
function Vl(a){return a.br;}
function AFI(a){return !a.bK?(a.br.iv(0)>=2048?0:1):a.br.zo(0)>=2048?0:1;}
function AB$(a){return a.U;}
function AK5(a){return a;}
function VI(a){var b;if(a.i6===null){b=a.b1();a.i6=ATB(a,b);a.i6.eC(a.bK);}return a.i6;}
function WA(a){var b;if(a.iw===null){b=a.b1();a.iw=ARb(a,b,a);a.iw.eC(a.gc());a.iw.U=a.U;}return a.iw;}
function ANu(a){return 0;}
function AL4(a,b){if(a.bm^b){a.bm=a.bm?0:1;a.bK=a.bK?0:1;}if(!a.U)a.U=1;return a;}
function AAF(a){return a.bm;}
function Fo(b,c){G6();return b.n(c);}
function EC(b,c){G6();if(b.by()!==null&&c.by()!==null)return (b.by()).u5(c.by());return 1;}
function H5(b,c){G6();return (Sn(AUR,b)).v5(c);}
function YA(){AUR=AQQ();}
function O9(){N.call(this);this.ug=null;}
function ARu(a){var b=new O9();ADL(b,a);return b;}
function ADL(a,b){a.ug=b;U(a);}
function ANF(a,b){return Nd(b);}
var EO=F();
var AUS=null;var AUT=null;var AUU=null;function AJD(){AJD=P(EO);Zt();}
function AQQ(){var a=new EO();RD(a);return a;}
function RD(a){AJD();J(a);}
function Sn(a,b){var c,d,e;c=0;while(true){AJD();if(c>=AUU.data.length)H(ARy(B(45),B(45),b));d=AUU.data[c];e=d.data;if(b.X(e[0]))break;c=c+1|0;}return e[1];}
function Zt(){AUS=ASF();AUT=AQ7();AUU=G($rt_arraycls(C),[G(C,[B(46),ATj()]),G(C,[B(47),APi()]),G(C,[B(48),ASD()]),G(C,[B(49),ASZ()]),G(C,[B(50),AUT]),G(C,[B(51),ARn()]),G(C,[B(52),AQ0()]),G(C,[B(53),APH()]),G(C,[B(54),APu()]),G(C,[B(55),APQ()]),G(C,[B(56),AQq()]),G(C,[B(57),APK()]),G(C,[B(58),AR3()]),G(C,[B(59),APc()]),G(C,[B(60),ASR()]),G(C,[B(61),AQl()]),G(C,[B(62),ARl()]),G(C,[B(63),AQh()]),G(C,[B(64),ARm()]),G(C,[B(65),APW()]),G(C,[B(66),AS_()]),G(C,[B(67),AP5()]),G(C,[B(68),ARw()]),G(C,[B(69),ASA()]),G(C,
[B(70),ASt()]),G(C,[B(71),AS4()]),G(C,[B(72),APV()]),G(C,[B(73),ASf()]),G(C,[B(74),AUS]),G(C,[B(75),ARD()]),G(C,[B(76),API()]),G(C,[B(77),AUS]),G(C,[B(78),AO_()]),G(C,[B(79),AUT]),G(C,[B(80),AQG()]),G(C,[B(81),K(0,127)]),G(C,[B(82),K(128,255)]),G(C,[B(83),K(256,383)]),G(C,[B(84),K(384,591)]),G(C,[B(85),K(592,687)]),G(C,[B(86),K(688,767)]),G(C,[B(87),K(768,879)]),G(C,[B(88),K(880,1023)]),G(C,[B(89),K(1024,1279)]),G(C,[B(90),K(1280,1327)]),G(C,[B(91),K(1328,1423)]),G(C,[B(92),K(1424,1535)]),G(C,[B(93),K(1536,
1791)]),G(C,[B(94),K(1792,1871)]),G(C,[B(95),K(1872,1919)]),G(C,[B(96),K(1920,1983)]),G(C,[B(97),K(2304,2431)]),G(C,[B(98),K(2432,2559)]),G(C,[B(99),K(2560,2687)]),G(C,[B(100),K(2688,2815)]),G(C,[B(101),K(2816,2943)]),G(C,[B(102),K(2944,3071)]),G(C,[B(103),K(3072,3199)]),G(C,[B(104),K(3200,3327)]),G(C,[B(105),K(3328,3455)]),G(C,[B(106),K(3456,3583)]),G(C,[B(107),K(3584,3711)]),G(C,[B(108),K(3712,3839)]),G(C,[B(109),K(3840,4095)]),G(C,[B(110),K(4096,4255)]),G(C,[B(111),K(4256,4351)]),G(C,[B(112),K(4352,4607)]),
G(C,[B(113),K(4608,4991)]),G(C,[B(114),K(4992,5023)]),G(C,[B(115),K(5024,5119)]),G(C,[B(116),K(5120,5759)]),G(C,[B(117),K(5760,5791)]),G(C,[B(118),K(5792,5887)]),G(C,[B(119),K(5888,5919)]),G(C,[B(120),K(5920,5951)]),G(C,[B(121),K(5952,5983)]),G(C,[B(122),K(5984,6015)]),G(C,[B(123),K(6016,6143)]),G(C,[B(124),K(6144,6319)]),G(C,[B(125),K(6400,6479)]),G(C,[B(126),K(6480,6527)]),G(C,[B(127),K(6528,6623)]),G(C,[B(128),K(6624,6655)]),G(C,[B(129),K(6656,6687)]),G(C,[B(130),K(7424,7551)]),G(C,[B(131),K(7552,7615)]),
G(C,[B(132),K(7616,7679)]),G(C,[B(133),K(7680,7935)]),G(C,[B(134),K(7936,8191)]),G(C,[B(135),K(8192,8303)]),G(C,[B(136),K(8304,8351)]),G(C,[B(137),K(8352,8399)]),G(C,[B(138),K(8400,8447)]),G(C,[B(139),K(8448,8527)]),G(C,[B(140),K(8528,8591)]),G(C,[B(141),K(8592,8703)]),G(C,[B(142),K(8704,8959)]),G(C,[B(143),K(8960,9215)]),G(C,[B(144),K(9216,9279)]),G(C,[B(145),K(9280,9311)]),G(C,[B(146),K(9312,9471)]),G(C,[B(147),K(9472,9599)]),G(C,[B(148),K(9600,9631)]),G(C,[B(149),K(9632,9727)]),G(C,[B(150),K(9728,9983)]),
G(C,[B(151),K(9984,10175)]),G(C,[B(152),K(10176,10223)]),G(C,[B(153),K(10224,10239)]),G(C,[B(154),K(10240,10495)]),G(C,[B(155),K(10496,10623)]),G(C,[B(156),K(10624,10751)]),G(C,[B(157),K(10752,11007)]),G(C,[B(158),K(11008,11263)]),G(C,[B(159),K(11264,11359)]),G(C,[B(160),K(11392,11519)]),G(C,[B(161),K(11520,11567)]),G(C,[B(162),K(11568,11647)]),G(C,[B(163),K(11648,11743)]),G(C,[B(164),K(11776,11903)]),G(C,[B(165),K(11904,12031)]),G(C,[B(166),K(12032,12255)]),G(C,[B(167),K(12272,12287)]),G(C,[B(168),K(12288,
12351)]),G(C,[B(169),K(12352,12447)]),G(C,[B(170),K(12448,12543)]),G(C,[B(171),K(12544,12591)]),G(C,[B(172),K(12592,12687)]),G(C,[B(173),K(12688,12703)]),G(C,[B(174),K(12704,12735)]),G(C,[B(175),K(12736,12783)]),G(C,[B(176),K(12784,12799)]),G(C,[B(177),K(12800,13055)]),G(C,[B(178),K(13056,13311)]),G(C,[B(179),K(13312,19893)]),G(C,[B(180),K(19904,19967)]),G(C,[B(181),K(19968,40959)]),G(C,[B(182),K(40960,42127)]),G(C,[B(183),K(42128,42191)]),G(C,[B(184),K(42752,42783)]),G(C,[B(185),K(43008,43055)]),G(C,[B(186),
K(44032,55203)]),G(C,[B(187),K(55296,56191)]),G(C,[B(188),K(56192,56319)]),G(C,[B(189),K(56320,57343)]),G(C,[B(190),K(57344,63743)]),G(C,[B(191),K(63744,64255)]),G(C,[B(192),K(64256,64335)]),G(C,[B(193),K(64336,65023)]),G(C,[B(194),K(65024,65039)]),G(C,[B(195),K(65040,65055)]),G(C,[B(196),K(65056,65071)]),G(C,[B(197),K(65072,65103)]),G(C,[B(198),K(65104,65135)]),G(C,[B(199),K(65136,65279)]),G(C,[B(200),K(65280,65519)]),G(C,[B(201),K(0,1114111)]),G(C,[B(202),APL()]),G(C,[B(203),Bc(0,1)]),G(C,[B(204),EQ(62,1)]),
G(C,[B(205),Bc(1,1)]),G(C,[B(206),Bc(2,1)]),G(C,[B(207),Bc(3,0)]),G(C,[B(208),Bc(4,0)]),G(C,[B(209),Bc(5,1)]),G(C,[B(210),EQ(448,1)]),G(C,[B(211),Bc(6,1)]),G(C,[B(212),Bc(7,0)]),G(C,[B(213),Bc(8,1)]),G(C,[B(214),EQ(3584,1)]),G(C,[B(215),Bc(9,1)]),G(C,[B(216),Bc(10,1)]),G(C,[B(217),Bc(11,1)]),G(C,[B(218),EQ(28672,0)]),G(C,[B(219),Bc(12,0)]),G(C,[B(220),Bc(13,0)]),G(C,[B(221),Bc(14,0)]),G(C,[B(222),AQS(983040,1,1)]),G(C,[B(223),Bc(15,0)]),G(C,[B(224),Bc(16,1)]),G(C,[B(225),Bc(18,1)]),G(C,[B(226),ARg(19,0,1)]),
G(C,[B(227),EQ(1643118592,1)]),G(C,[B(228),Bc(20,0)]),G(C,[B(229),Bc(21,0)]),G(C,[B(230),Bc(22,0)]),G(C,[B(231),Bc(23,0)]),G(C,[B(232),Bc(24,1)]),G(C,[B(233),EQ(2113929216,1)]),G(C,[B(234),Bc(25,1)]),G(C,[B(235),Bc(26,0)]),G(C,[B(236),Bc(27,0)]),G(C,[B(237),Bc(28,1)]),G(C,[B(238),Bc(29,0)]),G(C,[B(239),Bc(30,0)])]);}
var Fh=F(O);
function AQ7(){var a=new Fh();Rx(a);return a;}
function Rx(a){X(a);}
function O$(a){return (B1()).bq(48,57);}
var O3=F(O);
function ARw(){var a=new O3();XA(a);return a;}
function XA(a){X(a);}
function ABt(a){var b;b=AP_(a);b.U=1;return b;}
var Dz=F(Bk);
var AUV=null;var AUW=null;var AUX=null;function QZ(){QZ=P(Dz);U5();}
function WC(a,b){var c=new Dz();P5(c,a,b);return c;}
function ND(){QZ();return AUX.fB();}
function P5(a,b,c){QZ();BX(a,b,c);}
function U5(){AUV=WC(B(240),0);AUW=WC(B(241),1);AUX=G(Dz,[AUV,AUW]);}
function Dd(){var a=this;Bf.call(a);a.h4=0;a.lR=null;a.k9=null;a.k2=0;}
function ATv(a,b){var c=new Dd();GU(c,a,b);return c;}
function GU(a,b,c){BZ(a);a.h4=1;a.k9=b;a.k2=c;}
function ANz(a,b){a.f=b;}
function AHy(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=W(4);f=0;g=d.A();if(b>=g)return (-1);h=a.oj(b,c,g);i=b+a.h4|0;j=RO(h);if(j===null){k=e.data;l=1;k[f]=h;}else{l=j.data.length;CB(j,0,e,0,l);l=f+l|0;}a:{if(i<g){m=a.oj(i,c,g);while(l<4){if(!AH1(m)){k=e.data;n=l+1|0;k[l]=m;}else{k=(RO(m)).data;if(k.length!=2){o=e.data;n=l+1|0;o[l]=k[0];}else{o=e.data;m=l+1|0;o[l]=k[0];n=m+1|0;o[m]=k[1];}}i=i+a.h4|0;if(i>=g){l=n;break a;}m=a.oj(i,c,g);l=n;}}}if(l!=a.k2)return (-1);p=0;while(true){if(p>=l)return a.f.c(i,c,d);if
(e.data[p]!=a.k9.data[p])break;p=p+1|0;}return (-1);}
function I_(a){var b,c;if(a.lR===null){b=M();c=0;while(c<a.k2){b.lY(DL(a.k9.data[c]));c=c+1|0;}a.lR=b.d();}return a.lR;}
function ADb(a,b,c,d){var e,f,g,h;a.h4=1;if(b>=(d-1|0))e=c.h(b);else{f=b+1|0;e=c.h(b);g=c.h(f);if(Ee(e,g)){h=ACL([e,g]);e=Qi(h,0);a.h4=2;}}return e;}
function AD8(a,b){var c,d;a:{if(b instanceof Dd){c=b;if(!(I_(c)).X(I_(a))){d=0;break a;}}d=1;}return d;}
function AIY(a,b){return 1;}
var PX=F(Dd);
function AQ$(a,b){var c=new PX();W0(c,a,b);return c;}
function W0(a,b,c){GU(a,b,c);}
var OL=F();
function Zs(){return {};}
function JR(){var a=this;C.call(a);a.x=null;a.dR=null;a.dD=null;a.cf=null;a.fc=null;a.hV=null;a.mO=null;a.rk=null;a.rv=null;a.qz=null;a.qM=null;a.sF=null;a.tj=null;a.xR=null;a.lj=null;a.pT=null;a.qm=null;a.sA=null;a.p8=null;a.pj=null;a.sz=null;a.rO=null;a.s0=null;a.qQ=null;a.pL=null;a.pF=null;a.tD=null;a.sa=null;a.oc=0.0;a.oe=null;}
function AQr(a){var b=new JR();AAV(b,a);return b;}
function AAV(a,b){J(a);a.cf=AR9(5460);a.fc=AP3(0,1,0);a.sa=APR();a.oc=0.0;a.oe=Bb();a.x=b;a.dR=AS2(24.0,16.0);a.dR.gf.dx(b.D.cs.i,b.D.cs.j,0.0);a.dD=ATm(BP(a.x.w.data.length,a.x.w.data[0].data.length),0);a.hV=$rt_createIntMultiArray([Hs(a.x.w.data[0].data.length/16.0)|0,Hs(a.x.w.data.length/24.0)|0]);PP(a);Qd(a);}
function Qd(a){var b,c,d,e,f,g,h,i,j,k,l;b=a.x.w.data.length;c=a.x.w.data[0].data.length;d=0;while(d<a.hV.data[0].data.length){e=0;while(e<a.hV.data.length){a.dD.vF();f=d*16|0;g=f;while(g<(f+16|0)){h=e*24|0;i=h;while(i<(h+24|0)){if(i<=b&&g<=c){j=(c-g|0)-1|0;k=a.x;l=a.x.w.data[i].data[g];Cq();if(k.eM(l,AUY))a.dD.pc(a.mO,i,j,1.0,1.0);if(a.x.eM(a.x.w.data[i].data[g],AUZ))a.dD.pc(a.sz,i,j,1.0,1.0);}i=i+1|0;}g=g+1|0;}a.hV.data[e].data[d]=a.dD.zJ();e=e+1|0;}d=d+1|0;}AUJ.fk(B(242),B(243));}
function PP(a){var b,c,d,e,f,g,h,i,j;a.mO=Ew(Ex(AUM.fy(B(244))),0,0,20,20);b=Ex(AUM.fy(B(245)));c=((C$(b)).ev(20,20)).data[0];d=((C$(b)).ev(20,20)).data[0];e=d.data;f=e.length;g=0;while(g<f){h=e[g];h.uR(1,0);g=g+1|0;}i=c.data;a.sz=i[5];a.rv=Cg(0.10000000149011612,G(C,[i[0],i[1]]));a.rk=Cg(0.10000000149011612,G(C,[e[0],e[1]]));a.qM=Cg(0.10000000149011612,G(C,[i[2],i[3]]));a.qz=Cg(0.10000000149011612,G(C,[e[2],e[3]]));a.tj=Cg(0.5,G(C,[i[0],i[4]]));a.sF=Cg(0.5,G(C,[e[0],e[4]]));j=new JE;e=Bh(C,1);e.data[0]=i[0];Ol(j,
0.20000000298023224,e);a.xR=j;e=((C$(b)).ev(20,20)).data[1].data;a.lj=e[0];a.pT=Cg(1.0,G(C,[e[1],e[2],e[3],e[4],e[5]]));e=((C$(b)).ev(20,20)).data[2].data;a.qm=e[0];a.p8=Cg(0.10000000149011612,G(C,[e[4],e[3],e[2],e[1]]));a.pj=Cg(0.10000000149011612,G(C,[e[1],e[2],e[3],e[4]]));a.sA=e[5];i=((C$(b)).ev(20,20)).data[3].data;a.rO=Cg(0.10000000149011612,G(C,[i[0],i[1],i[2],i[3]]));a.qQ=i[4];i=((C$(b)).ev(20,20)).data[4].data;a.s0=Cg(0.10000000149011612,G(C,[i[0],i[1],i[2],i[3],i[4],i[4]]));e=((C$(b)).ev(20,20)).data[5].data;a.pL
=e[2];a.pF=e[0];a.tD=e[1];}
function AMZ(a,b){var c,d;if(a.x.V.bD==2)a.dR.gf.s3(a.oe.dx(a.x.V.b5.i,a.x.V.b5.j,0.0),2.0*b);else a.dR.gf.s3(a.oe.dx(a.x.D.cs.i,a.x.D.cs.j,0.0),2.0*b);a.dR.ga();G2(a);a.dD.nD(a.dR.fh);AUN.lu(3042);a.dD.el();c=0;while(c<4){d=0;while(d<6){a.dD.y9(a.hV.data[d].data[c]);d=d+1|0;}c=c+1|0;}a.dD.dM();a.oc=a.oc+b;a.cf.nD(a.dR.fh);a.cf.el();O2(a);if(a.x.hl!==null)a.cf.dT(a.pL,a.x.hl.ex.p,a.x.hl.ex.o,1.0,1.0);N5(a);NQ(a);OM(a);Ov(a);Od(a);a.cf.dM();G2(a);a.sa.x9();}
function OM(a){var b,c;b=null;c=1;if(a.x.D.S==1)b=a.x.D.dz!=(-1)?a.rv:a.rk;if(!a.x.D.S)b=a.x.D.dz!=(-1)?a.tj:a.sF;if(a.x.D.S==2)b=a.x.D.dz!=(-1)?a.qM:a.qz;if(a.x.D.S==3){b=a.p8;c=0;}if(a.x.D.S==4){b=a.pj;c=0;}a.cf.dT(b.jD(a.x.D.dh,c),a.x.D.cs.i,a.x.D.cs.j,1.0,1.0);}
function Ov(a){if(!a.x.V.bD)a.cf.dT(a.lj,a.x.V.b5.i,a.x.V.b5.j,1.5,1.5);if(a.x.V.bD==1)a.cf.dT(a.pT.jD(a.x.V.cl,0),a.x.V.b5.i,a.x.V.b5.j,1.5,1.5);if(a.x.V.bD==2)a.cf.dT(a.qm,a.x.V.b5.i,a.x.V.b5.j,1.5,1.5);}
function Od(a){var b,c,d;b=0;while(b<a.x.gT.z){c=a.x.gT.R(b);if(c.f8){d=a.s0.jD(c.er,0);a.cf.dT(d,c.cK.i,c.cK.j,1.0,1.0);}else{d=a.rO.jD(c.er,1);a.cf.ny(d,c.cK.i,c.cK.j,0.5,0.5,1.0,1.0,1.0,1.0,c.e9.Ag());}a.cf.dT(a.qQ,c.ik.i,c.ik.j,1.0,1.0);b=b+1|0;}}
function O2(a){var b,c;b=0;while(b<a.x.et.z){c=a.x.et.R(b);a.cf.dT(a.sA,c.cD.p,c.cD.o,1.0,1.0);b=b+1|0;}}
function NQ(a){var b,c;b=0;while(b<a.x.eF.z){c=a.x.eF.R(b);a.cf.ny(a.pF,c.cg.i,c.cg.j,0.5,0.5,1.0,1.0,1.0,1.0,c.fF);b=b+1|0;}}
function N5(a){var b,c;b=0;while(b<a.x.dA.z){c=a.x.dA.R(b);a.cf.ny(a.tD,c.cy.i,c.cy.j,0.5,0.5,1.0,1.0,1.0,1.0,c.cC);b=b+1|0;}}
function G2(a){var b,c,d,e,f,g;a.dR.oK(0);a.fc.zv(a.dR.fh,1);b=0;while(b<a.x.dA.z){c=a.x.dA.R(b);d=c.bp.i;e=c.bp.j;f=c.cZ.i;g=c.cZ.j;a.fc.sD(0.0,1.0,0.0,1.0);a.fc.tx(d,e,0.0);a.fc.sD(0.0,1.0,0.0,1.0);a.fc.tx(f,g,0.0);b=b+1|0;}a.fc.dM();}
function ABz(a){a.dD.J();a.cf.J();(a.mO.fL()).J();(a.lj.fL()).J();}
var Nq=F();
function Ci(){return C1(F6(),T(1000000));}
var MD=F();
function Mc(b){a:{switch(b){case 8:break;case 9:return 61;case 10:case 11:case 12:case 14:case 15:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 41:case 42:case 43:case 44:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 93:case 94:case 95:case 108:case 124:case 125:case 126:case 127:case 128:case 129:case 130:case 131:case 132:case 133:case 134:case 135:case 136:case 137:case 138:case 139:case 140:case 141:case 142:case 143:case 146:case 147:case 148:case 149:case 150:case 151:case 152:case 153:case 154:case 155:case 156:case 157:case 158:case 159:case 160:case 161:case 162:case 163:case 164:case 165:case 166:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 177:case 178:case 179:case 180:case 181:case 182:case 183:case 184:case 185:case 193:case 194:case 195:case 196:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 207:case 208:case 209:case 210:case 211:case 212:case 213:case 214:case 215:case 216:case 217:case 218:break a;case 13:return 66;case 16:return 59;case 17:return 129;case 18:return 57;case 19:return 0;case 20:return 0;case 27:return 111;case 32:return 62;case 33:return 92;case 34:return 93;case 35:return 123;case 36:return 3;case 37:return 21;case 38:return 19;case 39:return 22;case 40:return 20;case 45:return 124;case 46:return 112;case 48:return 7;case 49:return 8;case 50:return 9;case 51:return 10;case 52:return 11;case 53:return 12;case 54:return 13;case 55:return 14;case 56:return 15;case 57:return 16;case 65:return 29;case 66:return 30;case 67:return 31;case 68:return 32;case 69:return 33;case 70:return 34;case 71:return 35;case 72:return 36;case 73:return 37;case 74:return 38;case 75:return 39;case 76:return 40;case 77:return 41;case 78:return 42;case 79:return 43;case 80:return 44;case 81:return 45;case 82:return 46;case 83:return 47;case 84:return 48;case 85:return 49;case 86:return 50;case 87:return 51;case 88:return 52;case 89:return 53;case 90:return 54;case 91:return 0;case 92:return 0;case 96:return 144;case 97:return 145;case 98:return 146;case 99:return 147;case 100:return 148;case 101:return 149;case 102:return 150;case 103:return 151;case 104:return 152;case 105:return 153;case 106:return 0;case 107:return 81;case 109:return 69;case 110:return 56;case 111:return 0;case 112:return 131;case 113:return 132;case 114:return 133;case 115:return 134;case 116:return 135;case 117:return 136;case 118:return 137;case 119:return 138;case 120:return 139;case 121:return 140;case 122:return 141;case 123:return 142;case 144:return 78;case 145:return 0;case 186:return 74;case 187:return 70;case 188:return 55;case 189:return 69;case 190:return 56;case 191:return 76;case 192:return 0;case 219:return 71;case 220:return 73;case 221:return 72;case 222:return 75;default:break a;}return 67;}return 0;}
function Fn(b){if(b==1)return 0;if(b==2)return 1;if(b!=4)return 0;return 2;}
var Cn=F(0);
function Ez(){var a=this;C.call(a);a.hn=0;a.jF=0;a.qG=null;a.eK=null;a.bR=null;a.jA=0;a.nS=null;a.kI=0;a.kJ=0;a.kK=0;a.tq=0.0;a.jd=null;a.qV=null;a.fm=null;a.fT=null;a.pD=null;}
var AU0=null;var AU1=0;var AU2=null;function DU(){DU=P(Ez);AEi();}
function Qv(a){var b=new Ez();Km(b,a);return b;}
function J$(a,b,c){var d=new Ez();R4(d,a,b,c);return d;}
function Km(a,b){var c,d,e;DU();J(a);a.kI=255;a.kJ=255;a.kK=255;a.jd=FX(a.kI,a.kJ,a.kK,a.tq);c=b;d=c.q1();e=c.qa.iY.K(d);HL(a,(-1),(-1),e);if(a.fT!==null)return;H(BI(((((M()).a(B(246))).a(b.q1())).a(B(247))).d()));}
function R4(a,b,c,d){DU();J(a);a.kI=255;a.kJ=255;a.kK=255;a.jd=FX(a.kI,a.kJ,a.kK,a.tq);HL(a,b,c,null);}
function HL(a,b,c,d){var e;a.fT=d;if(d!==null)b=d.width;a.hn=b;if(d!==null)c=d.height;a.jF=c;Yx();a.qG=AU3;a.nS=Hm(4);DU();e=AU1;AU1=e+1|0;a.jA=e;a.nS.z5(0,a.jA);AU0.bn(S(a.jA),a);}
function Or(a){var b,c,d,e,f;b=AU4.ig();c=b.kR();d=c.createElement("canvas");a.eK=d;e=a.eK;f=a.hn;e.width=f;e=a.eK;f=a.jF;e.height=f;a.bR=a.eK.getContext("2d");e=a.bR;f=$rt_ustr(F2());e.globalCompositeOperation=f;}
function F2(){DU();Kp();return AU5;}
function FX(b,c,d,e){DU();return ((((((((((M()).a(B(248))).l(b)).a(B(249))).l(c)).a(B(249))).l(d)).a(B(249))).hF(e)).a(B(250))).d();}
function Ur(a,b){var c,d;a.qV=b;D1(a);c=a.bR;d=$rt_ustr(F2());c.globalCompositeOperation=d;}
function YV(a){return a.qG;}
function ADl(a){return 6408;}
function AGx(a){return 6408;}
function AKi(a){return 5121;}
function ABT(a){return a.hn;}
function AFQ(a){return a.jF;}
function AJP(a){return a.nS;}
function Xx(a){DU();AU0.gg(S(a.jA));}
function Vm(a){D1(a);return a.eK;}
function AOg(a){return a.pD;}
function Xz(a){return a.fT;}
function AHp(a){return a.eK===null&&a.pD!==null?1:0;}
function D1(a){var b,c;if(a.eK===null){Or(a);if(a.fT!==null){b=a.bR;Kp();c=$rt_ustr(AU6);b.globalCompositeOperation=c;c=a.bR;b=a.fT;c.drawImage(b,0.0,0.0);c=a.bR;b=$rt_ustr(F2());c.globalCompositeOperation=b;}}}
function Ws(a){return a.eK===null&&a.fT!==null?1:0;}
function Zv(a,b,c,d,e,f,g,h){var i;i=b.nw();Jl(a,i,e,f,g,h,c,d,g,h);}
function AIE(a,b,c,d,e,f,g,h,i,j){Jl(a,b.nw(),c,d,e,f,g,h,i,j);}
function Z7(a,b,c){var d,e,f,g,h,i,j,k,l;D1(a);if(a.fm===null){d=a.bR;e=a.hn;f=a.jF;g=d.getImageData(0.0,0.0,e,f);a.fm=g.data;}h=(b*4|0)+(BP(c,a.hn)*4|0)|0;i=a.fm[h+0|0]&255;j=a.fm[h+1|0]&255;k=a.fm[h+2|0]&255;l=a.fm[h+3|0]&255;return i<<24|j<<16|k<<8|l;}
function Jl(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u;D1(a);k=a.qV;I5();if(k===AU7){l=a.bR;k=$rt_ustr(AU2);l.fillStyle=k;l=a.bR;k=$rt_ustr(AU2);l.strokeStyle=k;l=a.bR;k="destination-out";l.globalCompositeOperation=k;a.bR.beginPath();l=a.bR;m=g;n=h;o=i;p=j;l.rect(m,n,o,p);QZ();OX(a,AUV);a.bR.closePath();l=a.bR;k=$rt_ustr(a.jd);l.fillStyle=k;k=a.bR;q=$rt_ustr(a.jd);k.strokeStyle=q;q=a.bR;Kp();l=$rt_ustr(AU5);q.globalCompositeOperation=l;}l=a.bR;m=c;n=d;o=e;p=f;r=g;s=h;t=i;u=j;l.drawImage(b,m,n,o,p,r,s,t,
u);a.fm=null;}
function OX(a,b){a:{D1(a);ASP();switch(AU8.data[Y(b)]){case 1:break;case 2:a.bR.stroke();break a;default:break a;}a.bR.fill();}}
function AEi(){AU0=Ck();AU1=0;AU2=FX(255,255,255,1.0);}
var SW=F(BO);
function APk(){var a=new SW();TB(a);return a;}
function TB(a){De(a,(-1));}
function X$(a,b,c,d){return b;}
var Gi=F(Bf);
function ATd(a,b){var c=new Gi();KN(c,a,b);return c;}
function KN(a,b,c){PV(a,b,c);}
function AHz(a,b,c,d){var e,f,g,h,i;e=d.ds(a.bc);d.bh(a.bc,b);f=a.bA.cT();g=0;while(true){if(g>=f){d.bh(a.bc,e);return (-1);}h=a.bA.R(g);i=h.c(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function AJo(a,b){var c;c=b.ds(a.bc);return !c?0:1;}
var Ct=F(Gi);
function APx(a,b){var c=new Ct();Eu(c,a,b);return c;}
function Eu(a,b,c){KN(a,b,c);}
function Y3(a,b,c,d){var e,f,g,h,i;e=d.ds(a.bc);d.bh(a.bc,b);f=a.bA.cT();g=0;while(g<f){h=a.bA.R(g);i=h.c(b,c,d);if(i>=0)return a.f.c(a.cP.c2(),c,d);g=g+1|0;}d.bh(a.bc,e);return (-1);}
function AIU(a,b){a.f=b;}
var JV=F(Ct);
function AQb(a,b){var c=new JV();ABx(c,a,b);return c;}
function ABx(a,b,c){Eu(a,b,c);}
function AHI(a,b,c,d){var e,f,g,h;e=a.bA.cT();f=0;while(f<e){g=a.bA.R(f);h=g.c(b,c,d);if(h>=0)return a.f.c(b,c,d);f=f+1|0;}return (-1);}
function AMe(a,b){return 0;}
var Jp=F(0);
var K3=F();
function AQN(){var a=new K3();AHV(a);return a;}
function AHV(a){J(a);}
var Ru=F(Ct);
function APd(a,b){var c=new Ru();AAw(c,a,b);return c;}
function AAw(a,b,c){Eu(a,b,c);}
function Wk(a,b,c,d){var e,f,g;e=a.bA.cT();f=0;while(true){if(f>=e)return a.f.c(b,c,d);g=a.bA.R(f);if(g.c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function ALs(a,b){return 0;}
var Ip=F(0);
function Ho(){var a=this;C.call(a);a.qk=null;a.jN=0;a.jf=0;a.hw=null;a.cE=null;a.rt=0;a.gn=0;}
var AU9=0;function AQ6(a,b,c,d){var e=new Ho();X7(e,a,b,c,d);return e;}
function X7(a,b,c,d,e){J(a);a.jN=0;a.jf=0;a.gn=0;a.qk=b;a.cE=c;a.hw=d;a.rt=e;if(a.cE!==null){a.cE=IY(a,a.cE);a.jN=a.cE.T();a.jf=a.cE.F();if(d===null)a.hw=a.cE.eA();}}
function T4(a){return a.gn;}
function X9(a){if(a.gn)H(BI(B(251)));if(a.cE===null){a.cE=IY(a,Qv(a.qk));a.jN=a.cE.T();a.jf=a.cE.F();if(a.hw===null)a.hw=a.cE.eA();}a.gn=1;}
function IY(a,b){var c,d,e,f,g;a:{if(AUO===null&&AU9){c=b.T();d=b.F();e=Fm(c);f=Fm(d);if(c!=e)break a;if(d!=f)break a;}return b;}g=J$(e,f,b.eA());g.sM(b,0,0,0,0,c,d);b.J();return g;}
function AFc(a){var b;if(!a.gn)H(BI(B(252)));a.gn=0;b=a.cE;a.cE=null;return b;}
function ADq(a){return 1;}
function AEg(a){return a.jN;}
function Ym(a){return a.jf;}
function AAh(a){return a.hw;}
function U9(a){return a.rt;}
function Za(a){return 1;}
function AGo(a){Kd();return AUw;}
function YO(a,b){H(BI(B(253)));}
var GV=F(0);
function SG(){var a=this;C.call(a);a.pB=null;a.m_=null;}
function ASE(a,b){var c=new SG();AJJ(c,a,b);return c;}
function AJJ(a,b,c){J(a);a.pB=b;a.m_=c;}
function Yq(a,b){var c,d,e;c=Zs();d=!!b.rF;c.alpha=d;d=!!b.rE;c.antialias=d;d=!!b.sK;c.stencil=d;d=!!b.sj;c.premultipliedAlpha=d;d=!!b.tI;c.preserveDrawingBuffer=d;e=a.m_;d=e.getContext("webgl",c);return d;}
function ANd(a){return a.m_;}
function TT(a){return ZL();}
function AHx(a){return a.pB;}
function AMO(a){var b;b=(a.ig()).kR();return b.createElement("img");}
function AKu(a){return new XMLHttpRequest();}
function ZG(a){return ARL();}
var Fp=F(Be);
function ASU(){var a=new Fp();Pe(a);return a;}
function Pe(a){B7(a);}
var S8=F(Fp);
function C9(){var a=new S8();ADu(a);return a;}
function ADu(a){Pe(a);}
var PA=F();
function Qo(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(CR());}return b.data.length;}
function II(b,c){if(b===null)H(WP());if(b===E($rt_voidcls()))H(CR());if(c<0)H(AS7());return AM$(b.zY(),c);}
function AM$(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var P9=F();
function ARE(){var a=new P9();WU(a);return a;}
function WU(a){J(a);}
var D8=F(Ed);
function AU$(a){var b=new D8();HI(b,a);return b;}
function HI(a,b){J7(a,b);}
var PW=F(D8);
function AU_(a){var b=new PW();Xh(b,a);return b;}
function Xh(a,b){HI(a,b);}
var KV=F(O);
function AQh(){var a=new KV();Xi(a);return a;}
function Xi(a){X(a);}
function Zj(a){var b;b=ARG(a);b.U=1;return b;}
var Hk=F(0);
function NV(){var a=this;C.call(a);a.rL=0;a.fY=0;a.sN=0;a.u3=0;a.jc=0;a.dl=null;a.hX=null;a.zn=0;a.tg=0;a.qx=0;a.yl=0;a.st=0;a.ur=0;a.mN=null;a.f_=null;a.mz=null;}
function AP3(a,b,c){var d=new NV();Yh(d,a,b,c);return d;}
function AVa(a,b,c,d,e){var f=new NV();O7(f,a,b,c,d,e);return f;}
function Yh(a,b,c,d){O7(a,5000,b,c,d,ALT(b,c,d));a.zn=1;}
function O7(a,b,c,d,e,f){var g,h,i,j;J(a);a.mN=B6();a.u3=b;a.tg=e;a.hX=f;g=K8(a,c,d,e);a.dl=Wz(0,b,0,g);a.f_=Cf(BP(b,(a.dl.sS()).ca/4|0));a.qx=(a.dl.sS()).ca/4|0;a.yl=a.dl.gt(8)===null?0:(a.dl.gt(8)).db/4|0;a.st=a.dl.gt(4)===null?0:(a.dl.gt(4)).db/4|0;if(a.dl.gt(16)===null)h=0;else{i=a.dl;h=(i.gt(16)).db/4|0;}a.ur=h;a.mz=Bh(Bv,e);j=0;while(j<e){a.mz.data[j]=(((M()).a(B(254))).l(j)).d();j=j+1|0;}}
function K8(a,b,c,d){var e,f,g;e=Cu();e.cr(CJ(1,3,B(255)));if(b)e.cr(CJ(8,3,B(256)));if(c)e.cr(CJ(4,4,B(257)));f=0;while(f<d){e.cr(CJ(16,2,(((M()).a(B(258))).l(f)).d()));f=f+1|0;}g=Bh(D4,e.z);f=0;while(f<e.z){g.data[f]=e.R(f);f=f+1|0;}return g;}
function XW(a,b,c){a.mN.fi(b);a.rL=c;}
function AL0(a,b,c,d,e){a.f_.data[a.fY+a.st|0]=Nb(b,c,d,e);}
function AFM(a,b,c,d){var e;e=a.fY;a.f_.data[e]=b;a.f_.data[e+1|0]=c;a.f_.data[e+2|0]=d;a.sN=0;a.fY=a.fY+a.qx|0;a.jc=a.jc+1|0;}
function ALX(a){var b;if(!a.jc)return;a.hX.cR();a.hX.fu(B(259),a.mN);b=0;while(b<a.tg){a.hX.hW(a.mz.data[b],b);b=b+1|0;}a.dl.t3(a.f_,0,a.fY);a.dl.yy(a.hX,a.rL);a.sN=0;a.fY=0;a.jc=0;}
function WM(a){a.fe();}
function TF(b,c,d){var e,f,g;e=((((M()).a(B(260))).a(!b?B(45):B(261))).a(!c?B(45):B(262))).d();f=0;while(f<d){e=(((((M()).a(e)).a(B(263))).l(f)).a(B(264))).d();f=f+1|0;}g=((((M()).a(e)).a(B(265))).a(!c?B(45):B(266))).d();f=0;while(f<d){g=(((((M()).a(g)).a(B(267))).l(f)).a(B(264))).d();f=f+1|0;}g=(((M()).a(g)).a(B(268))).d();if(c)g=(((M()).a(g)).a(B(269))).d();f=0;while(f<d){g=((((((((M()).a(g)).a(B(270))).l(f)).a(B(271))).a(B(258))).l(f)).a(B(264))).d();f=f+1|0;}g=(((M()).a(g)).a(B(272))).d();return g;}
function AFC(b,c,d){var e,f,g,h;e=B(273);if(c)e=(((M()).a(e)).a(B(266))).d();f=0;while(f<d){g=(((((M()).a(e)).a(B(267))).l(f)).a(B(264))).d();e=(((((M()).a(g)).a(B(274))).l(f)).a(B(264))).d();f=f+1|0;}g=((M()).a(e)).a(B(275));h=!c?B(276):B(277);g=(g.a(h)).d();if(d>0)g=(((M()).a(g)).a(B(278))).d();f=0;while(f<d){g=f!=(d-1|0)?(((((((M()).a(g)).a(B(279))).l(f)).a(B(280))).l(f)).a(B(281))).d():(((((((M()).a(g)).a(B(279))).l(f)).a(B(280))).l(f)).a(B(250))).d();f=f+1|0;}g=(((M()).a(g)).a(B(282))).d();return g;}
function ALT(b,c,d){var e,f,g;e=TF(b,c,d);f=AFC(b,c,d);g=Np(e,f);if(g.km())return g;H(BI((((M()).a(B(283))).a(g.jv())).d()));}
var CM=F(0);
var E3=F(0);
var FG=F();
function Sl(a){J(a);}
function Z0(a,b){var c,d,e,f;c=b.data;d=a.cT();e=c.length;if(e<d)b=II((Dl(b)).iL(),d);else while(d<e){c[d]=null;d=d+1|0;}d=0;f=a.sw();while(f.t2()){c=b.data;e=d+1|0;c[d]=f.pk();d=e;}return b;}
var Hv=F();
var AVb=null;function AQd(){AQd=P(Hv);ANH();}
function ANH(){AVb=W((M3()).data.length);AVb.data[Y(AVc)]=1;AVb.data[Y(AVd)]=2;AVb.data[Y(AVe)]=3;AVb.data[Y(AVf)]=4;AVb.data[Y(AVg)]=5;AVb.data[Y(AVh)]=6;}
var QU=F();
function Um(b,c){var d,e,f,g,h,i,j,k;if(!b)return B(284);d=1<<c;e=d-1|0;f=(((32-GS(b)|0)+c|0)-1|0)/c|0;g=BR(f);h=BP(f-1|0,c);i=0;while(h>=0){j=g.data;k=i+1|0;j[i]=Gj(b>>>h&e,d);h=h-c|0;i=k;}return JO(g);}
var E8=F(B4);
function P1(a,b,c,d){D6(a,b);a.C=c;a.Q=d;}
function ADn(b,c,d){return ARJ(0,b.data.length,b,c,c+d|0,0);}
function ABJ(b){return ADn(b,0,b.data.length);}
function QY(a){Ej(a);return a;}
function Tg(a){ES(a);return a;}
function Ux(a){return Tg(a);}
function AGF(a){return QY(a);}
function BU(){Cr.call(this);this.bd=null;}
function AR7(a,b,c){var d=new BU();DX(d,a,b,c);return d;}
function DX(a,b,c,d){Eh(a,b,c,d);a.bd=b;}
function Uf(a,b,c,d){var e,f;e=0;a:{while((b+a.bd.bX()|0)<=d.A()){f=a.bd.bt(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.f.c(b,c,d);if(f>=0)break;b=b-a.bd.bX()|0;e=e+(-1)|0;}return f;}
var C_=F(BU);
function ARs(a,b,c){var d=new C_();Ig(d,a,b,c);return d;}
function Ig(a,b,c,d){DX(a,b,c,d);}
function AFm(a,b,c,d){var e;e=a.O.c(b,c,d);if(e<0)e=a.f.c(b,c,d);return e;}
function AO2(a,b){I8(a,b);a.O.E(b);}
var RE=F(C_);
function APr(a,b,c){var d=new RE();ANM(d,a,b,c);return d;}
function ANM(a,b,c,d){Ig(a,b,c,d);}
function AGj(a,b,c,d){var e;if((b+a.bd.bX()|0)<=d.A()){e=a.bd.bt(b,c);if(e>=1)b=b+e|0;}return a.f.c(b,c,d);}
var Mk=F();
function ASB(b){var c,d,e;c=ATl(B(285));d=AHA();if(d!==null){e=d;Ks(new FK,e,c);}}
function AHA(){return APq();}
var H$=F(0);
var L9=F();
function AEA(b){var c,d,e,f,g;if(b===null)return null;c=b.data;d=c.length;e=new Array(d);f=0;while(f<d){g=c[f];e[f]=g;f=f+1|0;}return e;}
function BA(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function FU(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function J8(){N.call(this);this.Al=null;}
function ARa(a){var b=new J8();AJs(b,a);return b;}
function AJs(a,b){a.Al=b;U(a);}
function YL(a,b){return Sz(b);}
var LJ=F();
function ANB(b){var c,d,e,f,g,h,i,j,k;c=ASo(b.q5());d=Ly(c);e=W(d*2|0);f=0;g=0;h=0;i=0;while(i<d){j=e.data;g=g+Kn(c)|0;h=h+Kn(c)|0;k=f+1|0;j[f]=g;f=k+1|0;j[k]=h;i=i+1|0;}return e;}
function Fx(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function AOY(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=Bh(GL,16384);d=Dv(16384);e=0;f=0;g=0;h=0;while(h<b.k()){i=Fx(b.h(h));if(i==64){h=h+1|0;i=Fx(b.h(h));j=0;k=1;l=0;while(l<3){h=h+1|0;m=Fx(b.h(h));j=j|BP(k,m);k=k*64|0;l=l+1|0;}}else if(i<32)j=1;else{i=(i-32|0)<<24>>24;h=h+1|0;j=Fx(b.h(h));}if(!i&&j>=128){if(e>0){n=c.data;o=f+1|0;n[f]=AAN(g,g+e|0,Sd(d,e));f=o;}g=g+(e+j|0)|0;e=0;}else{p=d.data;o=e+j|0;if(o<p.length)q=f;else{n=c.data;q=f+1|0;n[f]=AAN(g,g+e|0,Sd(d,e));g=g+o|0;e=0;}while(true){o=j+(-1)|0;if(j<=
0)break;r=e+1|0;p[e]=i;e=r;j=o;}f=q;}h=h+1|0;}return Oq(c,f);}
var E9=F(0);
function Pm(){var a=this;C.call(a);a.pX=null;a.pZ=null;a.pV=0;a.pW=null;}
function ATc(a,b,c,d){var e=new Pm();AA3(e,a,b,c,d);return e;}
function AA3(a,b,c,d,e){J(a);a.pX=b;a.pZ=c;a.pV=d;a.pW=e;}
function AC3(a){AGm(a.pX,a.pZ,a.pV,a.pW);}
var BQ=F();
function ARk(){var a=new BQ();Di(a);return a;}
function Di(a){J(a);}
function AKo(a,b){}
function Zd(a,b){}
function OH(){BQ.call(this);this.xJ=null;}
function ASK(a){var b=new OH();ALq(b,a);return b;}
function ALq(a,b){a.xJ=b;Di(a);}
function AOW(a,b){}
function VZ(a,b){}
function AEV(a,b,c){return 0;}
var F0=F(FE);
function ARn(){var a=new F0();Ou(a);return a;}
function Ou(a){L7(a);}
function Nh(a){return (LW(a)).bq(48,57);}
var Gn=F(F0);
function APH(){var a=new Gn();Qs(a);return a;}
function Qs(a){Ou(a);}
function JK(a){return (((Nh(a)).bq(33,64)).bq(91,96)).bq(123,126);}
var OA=F(Gn);
function APu(){var a=new OA();AK2(a);return a;}
function AK2(a){Qs(a);}
function AFZ(a){return (JK(a)).cc(32);}
var QN=F(O);
function ASt(){var a=new QN();AGS(a);return a;}
function AGS(a){X(a);}
function AL3(a){return AS5(a);}
var N$=F(Ct);
function AP6(a,b){var c=new N$();ALj(c,a,b);return c;}
function ALj(a,b,c){Eu(a,b,c);}
function XE(a,b,c,d){var e,f,g,h,i;e=a.bA.cT();f=!d.hi()?d.cW():0;a:{g=a.f.c(b,c,d);if(g>=0){d.bh(a.bc,b);h=0;while(true){if(h>=e)break a;i=a.bA.R(h);if(i.ch(f,b,c,d)>=0){d.bh(a.bc,(-1));return g;}h=h+1|0;}}}return (-1);}
function AOV(a,b){return 0;}
function FF(){var a=this;C.call(a);a.uM=null;a.mi=null;a.xX=0.0;a.oy=0.0;a.nr=null;a.mB=null;a.f1=0;}
function SA(a,b,c,d,e){J(a);Ji();a.nr=AVi;a.mB=AVi;N8(a,e);a.uM=b;a.mi=e.fB();a.xX=c;a.oy=d;}
function NB(a,b,c,d){var e;e=Dv(1);e.data[0]=63;SA(a,b,c,d,e);}
function N8(a,b){var c;if(b!==null){c=b.data.length;if(c&&c>=a.oy)return;}H(Bp(B(286)));}
function O1(a,b){if(b!==null){a.nr=b;a.zC(b);return a;}H(Bp(B(287)));}
function ANN(a,b){}
function Su(a,b){if(b!==null){a.mB=b;a.vS(b);return a;}H(Bp(B(287)));}
function ACW(a,b){}
function K0(a,b,c,d){var e,f,g,h,$$je;a:{if(a.f1!=3){if(d)break a;if(a.f1!=2)break a;}H(P8());}a.f1=!d?1:2;while(true){try{e=a.x$(b,c);}catch($$e){$$je=CY($$e);if($$je instanceof Be){f=$$je;H(AP$(f));}else{throw $$e;}}if(e.w$()){if(!d)return e;g=Bq(b);if(g<=0)return e;e=FV(g);}else if(e.m8())break;h=!e.qI()?a.nr:a.mB;b:{Ji();if(h!==AVj){if(h===AVk)break b;else return e;}if(Bq(c)<a.mi.data.length)return AVl;Nn(c,a.mi);}b.pq(Ca(b)+e.k()|0);}return e;}
function J5(a,b){var c;if(a.f1!=2&&a.f1!=4)H(P8());c=a.uo(b);Cb();if(c===AVm)a.f1=3;return c;}
function AFF(a,b){Cb();return AVm;}
function OC(){var a=this;Bl.call(a);a.cn=null;a.l0=null;a.mW=null;}
function AQT(a){var b=new OC();YR(b,a);return b;}
function YR(a,b){var c;B8(a);a.cn=b.d();a.bC=b.k();a.l0=AG1(a.bC);a.mW=AG1(a.bC);c=0;while(c<(a.bC-1|0)){a.l0.tS(a.cn.h(c),(a.bC-c|0)-1|0);a.mW.tS(a.cn.h((a.bC-c|0)-1|0),(a.bC-c|0)-1|0);c=c+1|0;}}
function YX(a,b,c){return !a.n7(c,b)?(-1):a.bC;}
function V9(a,b,c,d){var e,f;e=d.A();while(true){if(b>e)return (-1);f=a.xm(c,b,e);if(f<0)return (-1);if(a.f.c(f+a.bC|0,c,d)>=0)break;b=f+1|0;}return f;}
function ABn(a,b,c,d,e){var f;while(true){if(c<b)return (-1);f=a.uv(d,b,c);if(f<0)return (-1);if(a.f.c(f+a.bC|0,d,e)>=0)break;c=f+(-1)|0;}return f;}
function ACo(a,b){var c,d,e,f,g;if(b instanceof CI)return b.kg()!=a.cn.h(0)?0:1;if(b instanceof CA)return b.bt(0,a.cn.gj(0,1))<=0?0:1;if(!(b instanceof B9)){if(!(b instanceof Cz))return 1;a:{if(a.cn.k()>1){c=b;d=c.or();e=a.cn.h(0);c=a.cn;f=c.h(1);if(d==CN(e,f)){e=1;break a;}}e=0;}return e;}b:{c:{c=b;if(!c.n(a.cn.h(0))){g=a.cn;if(g.k()<=1)break c;g=a.cn;e=CN(g.h(0),a.cn.h(1));if(!c.n(e))break c;}e=1;break b;}e=0;}return e;}
function AMl(a,b,c,d){var e,f;e=a.cn.h(a.bC-1|0);while(true){if(c>(d-a.bC|0))return (-1);f=b.h((c+a.bC|0)-1|0);if(f==e&&a.n7(b,c))break;c=c+a.l0.bU(f)|0;}return c;}
function ALa(a,b,c,d){var e,f,g,h;e=a.cn.h(0);f=b.k();g=(f-d|0)-a.bC|0;if(g<=0)d=d+g|0;while(true){if(d<c)return (-1);h=b.h(d);if(h==e&&a.n7(b,d))break;d=d-a.mW.bU(h)|0;}return d;}
function ACI(a,b,c){var d;d=0;while(d<a.bC){if(b.h(d+c|0)!=a.cn.h(d))return 0;d=d+1|0;}return 1;}
var G0=F(0);
var R8=F(Be);
function MF(){var a=new R8();AAC(a);return a;}
function AAC(a){B7(a);}
var Ec=F(BW);
function ATg(a,b,c){var d=new Ec();Gw(d,a,b,c);return d;}
function Gw(a,b,c,d){D5(a,b,c,d);}
function AKN(a,b,c,d){var e;if(!a.O.P(d))return a.f.c(b,c,d);e=a.O.c(b,c,d);if(e>=0)return e;return a.f.c(b,c,d);}
function AMI(a,b){I8(a,b);a.O.E(b);}
function S6(){var a=this;C.call(a);a.zS=0;a.vH=Cs;a.k3=null;a.sC=null;a.pC=Cs;a.sP=null;}
function ASW(a,b,c,d){var e=new S6();AE0(e,a,b,c,d);return e;}
function AE0(a,b,c,d,e){J(a);a.k3=b;a.sC=c;a.pC=d;a.sP=e;}
var F$=F(0);
function IT(){var a=this;C.call(a);a.c0=null;a.iA=null;a.mD=null;a.mJ=null;a.pN=0;a.jV=0;a.lI=0;a.t5=0;a.dk=0;a.xe=0;a.xc=0;a.dg=0;a.yX=0;a.gI=0;a.nK=0;}
function AVn(a,b,c,d,e,f){var g=new IT();PB(g,a,b,c,d,e,f);return g;}
function PB(a,b,c,d,e,f,g){var h;J(a);a.gI=(-1);h=e+1|0;a.pN=h;a.c0=W(h*2|0);a.iA=W(g);E5(a.iA,(-1));if(f>0)a.mD=W(f);E5(a.c0,(-1));a.qf(b,c,d);}
function AMw(a,b,c){a.iA.data[b]=c;}
function AEU(a,b){return a.iA.data[b];}
function TZ(a){return a.my(0);}
function AEn(a,b){H0(a,b);return a.c0.data[(b*2|0)+1|0];}
function Yr(a,b,c){a.c0.data[b*2|0]=c;}
function V$(a,b,c){a.c0.data[(b*2|0)+1|0]=c;}
function AIF(a,b){return a.c0.data[b*2|0];}
function AIT(a,b){return a.c0.data[(b*2|0)+1|0];}
function AD0(a,b){var c,d;c=a.fI(b);d=a.jW(b);if((d|c|(d-c|0))>=0&&d<=a.mJ.k())return (a.mJ.nC(c,d)).d();return null;}
function AIJ(a){return a.lm(0);}
function XT(a,b){H0(a,b);return a.c0.data[b*2|0];}
function AFp(a){if(a.c0.data[0]==(-1)){a.c0.data[0]=a.dk;a.c0.data[1]=a.dk;}a.gI=a.kC();}
function Uu(a,b){return a.mD.data[b];}
function XI(a,b,c){a.mD.data[b]=c;}
function H0(a,b){if(!a.jV)H(P8());if(b>=0&&b<a.pN)return;H(Bg(Is(b)));}
function AMU(a){a.jV=1;}
function AMW(a){return a.jV;}
function ANT(a,b,c,d){a.jV=0;a.nK=2;E5(a.c0,(-1));E5(a.iA,(-1));if(b!==null)a.mJ=b;if(c>=0)Se(a,c,d);a.dk=a.lI;}
function YM(a){a.qf(null,(-1),(-1));}
function Se(a,b,c){a.lI=b;a.t5=c;}
function AJR(a,b){a.dk=b;if(a.gI>=0)b=a.gI;a.gI=b;}
function WV(a){return a.lI;}
function AFn(a){return a.t5;}
function Zr(a,b){a.nK=b;}
function ABc(a){return a.nK;}
function ACi(a){return a.xc;}
function Ut(a){return a.xe;}
function Vs(a){return a.gI;}
function LL(){var a=this;Bl.call(a);a.qK=null;a.ww=0;}
function AB_(a){var b=new LL();AG2(b,a);return b;}
function AG2(a,b){B8(a);a.qK=b.h0();a.ww=b.bm;}
function AD7(a,b,c){var d,e;d=a.qK;e=CP(c.h(b));return !d.n(C5(e))?(-1):1;}
function Rn(){var a=this;C.call(a);a.fZ=0;a.bI=null;a.d7=null;a.cS=null;a.cg=null;a.fF=0.0;a.mZ=0;a.mY=0;a.mS=0;a.mR=0;}
function APA(a,b,c){var d=new Rn();ADo(d,a,b,c);return d;}
function ADo(a,b,c,d){var e;J(a);a.fZ=1;a.d7=Bu();a.cS=BG();a.cg=BG();a.fF=0.0;a.mZ=0;a.mY=0;a.mS=0;a.mR=0;a.bI=b;a.cg.i=c;a.cg.j=d;a.d7.p=c;a.d7.o=d;e=a.d7;a.d7.Y=1.0;e.be=1.0;}
function XM(a){var b,c,d,e,f,g;b=a.cg.i|0;c=a.cg.j|0;d=a.bI.w.data[b-1|0].data[(a.bI.w.data[0].data.length-1|0)-c|0];e=a.bI.w.data[b+1|0].data[(a.bI.w.data[0].data.length-1|0)-c|0];f=a.bI.w.data[b].data[((a.bI.w.data[0].data.length-1|0)-c|0)-1|0];g=a.bI.w.data[b].data[((a.bI.w.data[0].data.length-1|0)-c|0)+1|0];Cq();if(d==AUY){a.cS.i=10.0;a.fF=(-90.0);a.mZ=1;}if(e==AUY){a.cS.i=(-10.0);a.fF=90.0;a.mS=1;}if(f==AUY){a.cS.j=(-10.0);a.fF=180.0;a.mR=(-1);}if(g==AUY){a.cS.j=10.0;a.fF=0.0;a.mY=(-1);}}
function AFd(a,b){var c,d;a.cg.gr(a.cS.i*b,a.cS.j*b);if(a.fZ!=1){c=a.bI.w.data[(a.cg.i|0)+a.mS|0].data[((a.bI.w.data[0].data.length-1|0)-(a.cg.j|0)|0)+a.mR|0];Cq();c=c!=AUY?0:1;}else{c=a.bI.w.data[(a.cg.i|0)+a.mZ|0].data[((a.bI.w.data[0].data.length-1|0)-(a.cg.j|0)|0)+a.mY|0];Cq();c=c!=AUY?0:1;}if(c){d=a.cg;d.i=d.i-a.cS.i*b;d=a.cg;d.j=d.j-a.cS.j*b;a.fZ= -a.fZ|0;a.cS.c1((-1.0));if(a.fZ==1)(a.cS.kO()).c1(10.0);if(a.fZ==(-1))(a.cS.kO()).c1(4.0);}a.d7.p=a.cg.i;a.d7.o=a.cg.j;if(a.bI.D.N.c9(a.d7)&&a.bI.D.S!=4){a.bI.D.S
=4;a.bI.D.dh=0.0;}if(a.bI.V.L.c9(a.d7)){a.bI.V.bD=3;a.bI.V.cl=0.0;}}
function JT(){N.call(this);this.ua=null;}
function ARK(a){var b=new JT();ADO(b,a);return b;}
function ADO(a,b){a.ua=b;U(a);}
function AN$(a,b){return S3(b);}
var HM=F(Be);
function BI(a){var b=new HM();MK(b,a);return b;}
function MK(a,b){Eb(a,b);}
function ET(){var a=this;C.call(a);a.eX=0;a.f7=0;a.jq=null;a.kZ=null;a.iO=null;a.jt=null;a.iB=0.0;}
var AVo=0.0;function IX(){IX=P(ET);ACh();}
function HE(a,b,c){IX();J(a);X2();a.jq=AVp;a.kZ=AVp;TR();a.iO=AVq;a.jt=AVq;a.iB=1.0;a.eX=b;a.f7=c;}
function AF3(a){AUN.ti(a.eX,a.f7);}
function AH_(a,b,c,d){if(b!==null&&!(!d&&a.iO===b)){AUN.kU(a.eX,10242,Jv(b));a.iO=b;}if(c!==null&&!(!d&&a.jt===c)){AUN.kU(a.eX,10243,Jv(c));a.jt=c;}}
function Un(a,b,c,d){if(b!==null&&!(!d&&a.jq===b)){AUN.kU(a.eX,10241,I2(b));a.jq=b;}if(c!==null&&!(!d&&a.kZ===c)){AUN.kU(a.eX,10240,I2(c));a.kZ=c;}}
function ABd(a,b,c){var d,e;d=Ny();if(d===1.0)return 1.0;e=I4(b,d);if(!c&&P$(e,a.iB,0.10000000149011612))return a.iB;AUO.x_(3553,34046,e);a.iB=e;return e;}
function Ny(){var b,c;IX();if(AVo>0.0)return AVo;if(!AUI.mk(B(288))){AVo=1.0;return 1.0;}b=FO(16);b.cj(0);b.bY(DC(b));AUO.vQ(34047,b);c=b.s1(0);AVo=c;return c;}
function AME(a){if(a.f7){AUN.y2(a.f7);a.f7=0;}}
function SJ(b,c){IX();SH(b,c,0);}
function SH(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;IX();if(c===null)return;if(!c.rn())c.tE();e=c.xt();Kd();if(e===AUx){c.vI(b);return;}f=c.zV();g=c.tC();if(c.eA()===f.eA())h=f;else{h=J$(f.T(),f.F(),c.eA());I5();h.sb(AU7);h.sM(f,0,0,0,0,f.T(),f.F());if(c.tC())f.J();g=1;}AUN.va(3317,1);if(c.Ae())QK(b,h,h.T(),h.F());else{i=AUN;j=h.hz();k=h.T();l=h.F();m=h.hA();n=h.iy();o=h.hC();i.hD(b,d,j,k,l,0,m,n,o);}if(g)h.J();}
function ACh(){AVo=0.0;}
function EM(){ET.call(this);this.f2=null;}
var AVr=null;function E7(){E7=P(EM);AIV();}
function Ex(a){var b=new EM();Of(b,a);return b;}
function AVs(a,b,c){var d=new EM();IO(d,a,b,c);return d;}
function AVt(a){var b=new EM();Gy(b,a);return b;}
function AVu(a,b,c){var d=new EM();IG(d,a,b,c);return d;}
function Of(a,b){E7();IO(a,b,null,0);}
function IO(a,b,c,d){E7();Gy(a,ANj(b,c,d));}
function Gy(a,b){E7();IG(a,3553,AUN.xQ(),b);}
function IG(a,b,c,d){E7();HE(a,b,c);a.wp(d);if(d.jh())KU(AUJ,a);}
function AMs(a,b){if(a.f2!==null&&b.jh()!=a.f2.jh())H(BI(B(289)));a.f2=b;if(!b.rn())b.tE();a.cR();SJ(3553,b);a.xv(a.jq,a.kZ,1);a.vw(a.iO,a.jt,1);a.zk(a.iB,1);AUN.ti(a.eX,0);}
function AHh(a){return a.f2.T();}
function ALO(a){return a.f2.F();}
function ADe(a){if(!a.f7)return;a.z2();if(a.f2.jh()&&AVr.K(AUJ)!==null)(AVr.K(AUJ)).k8(a,1);}
function KU(b,c){var d;E7();d=AVr.K(b);if(d===null)d=Cu();d.cr(c);AVr.bn(b,d);}
function AIV(){AVr=Ck();}
var LK=F();
function Ul(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function AGR(b,c){return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&PQ(b.constructor,c)?1:0;}
function PQ(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(PQ(d[e],c))return 1;e=e+1|0;}return 0;}
function APE(b){b.g3();}
function AFx(b){AKz(b,0);}
function AKz(b,c){return setTimeout(function(){APE(b);},c);}
function TX(){return ADV();}
function Q0(b){return AA1(String.fromCharCode(b));}
function AKH(b){return b.$meta.primitive?1:0;}
function ANG(b){return b.$meta.item;}
function AKv(b){return $rt_str(b.$meta.name);}
function ADV(){return [];}
function EW(){var a=this;C.call(a);a.ue=null;a.wj=null;}
function LS(a,b,c){var d,e,f,g;d=c.data;J(a);QL(b);e=d.length;f=0;while(f<e){g=d[f];QL(g);f=f+1|0;}a.ue=b;a.wj=c.fB();}
function QL(b){var c,d;if(b.bJ())H(Nj(b));if(!QM(b.h(0)))H(Nj(b));c=1;while(c<b.k()){a:{d=b.h(c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(QM(d))break a;else H(Nj(b));}}c=c+1|0;}}
function QM(b){var c;a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}c=1;break a;}c=0;}return c;}
function Eo(){C.call(this);this.zg=null;}
var AVk=null;var AVj=null;var AVi=null;function Ji(){Ji=P(Eo);AFE();}
function Sr(a){var b=new Eo();QE(b,a);return b;}
function QE(a,b){Ji();J(a);a.zg=b;}
function AFE(){AVk=Sr(B(290));AVj=Sr(B(291));AVi=Sr(B(292));}
var CV=F(Be);
function CR(){var a=new CV();E6(a);return a;}
function Bp(a){var b=new CV();Tj(b,a);return b;}
function E6(a){B7(a);}
function Tj(a,b){Eb(a,b);}
function QT(){CV.call(this);this.uT=null;}
function Nj(a){var b=new QT();ALz(b,a);return b;}
function ALz(a,b){E6(a);a.uT=b;}
function E0(){CW.call(this);this.ot=null;}
function AVv(a){var b=new E0();J_(b,a);return b;}
function J_(a,b){EU(a);a.ot=b;}
function Fq(){var a=this;E0.call(a);a.yb=0;a.mw=0;a.dE=null;a.hv=null;a.su=null;}
function AVw(a,b){var c=new Fq();I9(c,a,b);return c;}
function I9(a,b,c){J_(a,b);a.dE=M();a.hv=BR(32);a.yb=c;AAR();a.su=AVx;}
function AGY(a,b,c,d){var $$je;if(!Q9(a))return;a:{try{a.ot.jg(b,c,d);break a;}catch($$e){$$je=CY($$e);if($$je instanceof IE){}else{throw $$e;}}a.mw=1;}}
function Q9(a){if(a.ot===null)a.mw=1;return a.mw?0:1;}
function GX(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.data;f=ADY(b,c,d-c|0);g=Dv(BB(16,By(e.length,1024)));h=MG(g);i=a.su.y6();Ji();j=AVj;i=O1(i,j);j=AVj;k=Su(i,j);while(true){l=(K0(k,f,h,1)).m8();a.jg(g,0,Ca(h));GW(h);if(!l)break;}while(true){l=(J5(k,h)).m8();a.jg(g,0,Ca(h));GW(h);if(!l)break;}}
function Zl(a,b){a.hv.data[0]=b;GX(a,a.hv,0,1);}
function ADg(a,b){a.dE.a(b);E1(a);}
function XF(a,b){(a.dE.a(b)).bZ(10);E1(a);}
function ADR(a,b){(a.dE.it(b)).bZ(10);E1(a);}
function AJa(a){a.vc(10);}
function E1(a){var b;b=a.dE.k()<=a.hv.data.length?a.hv:BR(a.dE.k());a.dE.rP(0,a.dE.k(),b,0);GX(a,b,0,a.dE.k());a.dE.rH(0);}
var PM=F(Ct);
function AQB(a,b){var c=new PM();UP(c,a,b);return c;}
function UP(a,b,c){Eu(a,b,c);}
function Ud(a,b,c,d){var e,f,g,h;e=a.bA.cT();d.bh(a.bc,b);f=0;while(true){if(f>=e)return a.f.c(b,c,d);g=a.bA.R(f);h=g.ch(0,b,c,d);if(h>=0)break;f=f+1|0;}return (-1);}
function AJE(a,b){return 0;}
var DI=F(E8);
function Hc(a,b,c,d){P1(a,b,c,d);}
function ALI(a){var b;if(a.C>=a.Q)H(ANe());b=a.C;a.C=b+1|0;return a.kP(b);}
function AGu(a,b){var c;if(a.ce())H(C9());if(a.C>=a.Q)H(G9());c=a.C;a.C=c+1|0;a.kb(c,b);return a;}
function AFy(a,b){if(b>=0&&b<a.Q)return a.kP(b);H(Bg(((((((M()).a(B(293))).l(b)).a(B(42))).l(a.Q)).a(B(250))).d()));}
function ALZ(a,b,c){if(a.ce())H(C9());if(b>=0&&b<a.Q){a.kb(b,c);return a;}H(Bg(((((((M()).a(B(293))).l(b)).a(B(42))).l(a.Q)).a(B(250))).d()));}
function AER(a){return a.ep();}
function D3(){var a=this;DI.call(a);a.b3=null;a.rg=0;a.b4=0;}
function GC(a,b,c,d,e,f,g){Hc(a,c,e,f);a.b4=b;a.b3=d;a.rg=g;}
function AEz(a){return a.rg;}
var K4=F(D3);
function ARY(a,b,c,d,e,f){var g=new K4();ZO(g,a,b,c,d,e,f);return g;}
function ZO(a,b,c,d,e,f,g){GC(a,b,c,d,e,f,g);}
function AA5(a,b){var c,d,e;c=a.b3.s.data;d=a.b4;e=b*4|0;return c[d+e|0]&255|(a.b3.s.data[(a.b4+e|0)+1|0]&255)<<8|(a.b3.s.data[(a.b4+e|0)+2|0]&255)<<16|(a.b3.s.data[(a.b4+e|0)+3|0]&255)<<24;}
function TM(a,b,c){var d,e,f;d=a.b3.s.data;e=a.b4;f=b*4|0;d[e+f|0]=c<<24>>24;a.b3.s.data[(a.b4+f|0)+1|0]=c>>8<<24>>24;a.b3.s.data[(a.b4+f|0)+2|0]=c>>16<<24>>24;a.b3.s.data[(a.b4+f|0)+3|0]=c>>24<<24>>24;}
var RV=F(D$);
function APw(a,b){var c=new RV();AMu(c,a,b);return c;}
function AMu(a,b,c){G_(a,b,c);}
function Ye(a,b,c,d){var e,f;e=a.g7(d);if(e!==null&&(b+e.k()|0)<=d.A()){f=!(c.d()).tn(e,b)?(-1):e.k();if(f<0)return (-1);d.bh(a.g1,f);return a.f.c(b+f|0,c,d);}return (-1);}
function AL_(a,b,c,d){var e,f,g,h;e=a.g7(d);f=d.cW();if(e!==null&&(b+e.k()|0)<=f){g=c.d();while(true){if(b>f)return (-1);h=g.rC(e,b);if(h<0)return (-1);if(a.f.c(h+e.k()|0,c,d)>=0)break;b=h+1|0;}return h;}return (-1);}
function UY(a,b,c,d,e){var f,g,h;f=a.g7(e);if(f===null)return (-1);g=d.d();a:{while(true){if(c<b)return (-1);h=g.z7(f,c);if(h<0)break a;if(h<b)break a;if(a.f.c(h+f.k()|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function AF7(a,b){return 1;}
function Lo(){Cr.call(this);this.l5=null;}
function APU(a,b,c,d){var e=new Lo();AIl(e,a,b,c,d);return e;}
function AIl(a,b,c,d,e){Eh(a,b,c,d);a.l5=e;}
function AHU(a,b,c,d){var e,f;e=d.A();f=IN(a,b,e,c);if(f>=0)e=f;if(e>b)return a.f.ch(b,e,c,d);return a.f.c(b,c,d);}
function T8(a,b,c,d){var e,f,g,h,i;e=d.A();f=a.f.cd(b,c,d);if(f<0)return (-1);g=IN(a,f,e,c);if(g>=0)e=g;h=a.f.ch(f,e,c,d);h=BB(f,h);i=h>0?R1(a,b,h-1|0,c):h?(-1):0;if(i>=b)b=i>=h?i:i+1|0;return b;}
function IN(a,b,c,d){while(true){if(b>=c)return (-1);if(a.l5.ic(d.h(b)))break;b=b+1|0;}return b;}
function R1(a,b,c,d){while(true){if(c<b)return (-1);if(a.l5.ic(d.h(c)))break;c=c+(-1)|0;}return c;}
var QS=F(O);
function AS_(){var a=new QS();ACB(a);return a;}
function ACB(a){X(a);}
function AEo(a){var b;b=ARK(a);b.U=1;return b;}
var Fk=F();
var AVy=null;var AVz=null;function S0(){S0=P(Fk);AAq();}
function Pp(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;S0();d=$rt_floatToIntBits(b);c.pi=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.l_=0;c.lN=0;return;}g=0;if(f)h=e|8388608;else{h=e<<1;while(DA(AO$(T(h),T(8388608)),Cs)){h=h<<1;f=f+(-1)|0;g=g+1|0;}}i=AGP(AVz,f);if(i<0)i=( -i|0)-2|0;j=f-AVz.data[i]|0;k=9+j|0;l=T(h);m=DB(Cd(C1(l,T(AVy.data[i])),32-k|0));if(m>=1000000000){i=i+1|0;n=f-AVz.data[i]|0;k=9+n|0;m=DB(Cd(C1(l,T(AVy.data[i])),32-k|0));}n=(31-k|0)-g|0;o=n>=0?AVy.data[i]>>>n:AVy.data[i]<<( -n
|0);p=(o+1|0)>>1;q=o>>1;if(h==4194304)q=q>>2;r=Pq(m,q);s=Ne(m,p);h=Cm(r,s);h=h>0?BP(m/r|0,r):h<0?BP(m/s|0,s)+s|0:BP((m+(s/2|0)|0)/s|0,s);if(h>=1000000000){i=i+1|0;h=h/10|0;}else if(h<100000000){i=i+(-1)|0;h=h*10|0;}c.l_=h;c.lN=i-50|0;}
function Pq(b,c){var d,e;S0();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if(e>=(c/2|0))d=d/10|0;return d;}
function Ne(b,c){var d,e;S0();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if((d-e|0)>(c/2|0))d=d/10|0;return d;}
function AAq(){var b,c,d,e,f,g,h,i,j,k,l;AVy=W(100);AVz=W(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=AVy.data;g=d+50|0;f[g]=$rt_udiv(e,20);AVz.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}i=214748364;e=127;d=0;while(d<50){j=0;k=b;while(k>i){k=k>>1;j=j+1|0;e=e+(-1)|0;}k=k*10|0;if(j<=0)b=k;else{l=T(b&((1<<j)-1|0));b=DB(J4(T(k),AQU(C1(l,T(10)),j)));}f=AVy.data;k=(50-d|0)-1|0;f[k]=$rt_udiv(b,20);AVz.data[k]=e;d=d+1|0;}}
var BS=F();
var AU6=null;var AVA=null;var AVB=null;var AVC=null;var AVD=null;var AVE=null;var AVF=null;var AVG=null;var AVH=null;var AU5=null;var AVI=null;function Kp(){Kp=P(BS);ABu();}
function ABu(){AU6=B(294);AVA=B(295);AVB=B(296);AVC=B(297);AVD=B(298);AVE=B(299);AVF=B(300);AVG=B(301);AVH=B(302);AU5=B(303);AVI=B(304);}
function CD(){Bk.call(this);this.xH=null;}
var AVJ=null;var AVK=null;var AVL=null;var AVM=null;var AVN=null;var AVO=null;function L6(){L6=P(CD);ALc();}
function FW(a,b,c){var d=new CD();QQ(d,a,b,c);return d;}
function Hz(){L6();return AVO.fB();}
function QQ(a,b,c,d){L6();BX(a,b,c);a.xH=d;}
function ALc(){AVJ=FW(B(305),0,B(306));AVK=FW(B(307),1,B(308));AVL=FW(B(309),2,B(310));AVM=FW(B(311),3,B(312));AVN=FW(B(313),4,B(79));AVO=G(CD,[AVJ,AVK,AVL,AVM,AVN]);}
function V(){var a=this;C.call(a);a.e5=0.0;a.e4=0.0;a.e3=0.0;a.e2=0.0;}
var AVP=null;var AVQ=null;var AVR=null;var AVS=null;var AVT=null;var AVU=0.0;var AVV=null;var AVW=null;var AVX=null;var AVY=null;var AVZ=null;var AV0=null;var AV1=null;var AV2=null;var AV3=null;var AV4=null;var AV5=null;var AV6=null;var AV7=null;var AV8=null;var AV9=null;var AV$=null;var AV_=null;var AWa=null;var AWb=null;var AWc=null;var AWd=null;var AWe=null;var AWf=null;var AWg=null;var AWh=null;var AWi=null;var AWj=null;var AWk=null;var AWl=null;function G1(){G1=P(V);T3();}
function Bm(a){var b=new V();R0(b,a);return b;}
function Cy(a,b,c,d){var e=new V();P4(e,a,b,c,d);return e;}
function R0(a,b){G1();J(a);RC(a,b);}
function P4(a,b,c,d,e){G1();J(a);a.e5=b;a.e4=c;a.e3=d;a.e2=e;a.w3();}
function AKd(a){if(a.e5<0.0)a.e5=0.0;else if(a.e5>1.0)a.e5=1.0;if(a.e4<0.0)a.e4=0.0;else if(a.e4>1.0)a.e4=1.0;if(a.e3<0.0)a.e3=0.0;else if(a.e3>1.0)a.e3=1.0;if(a.e2<0.0)a.e2=0.0;else if(a.e2>1.0)a.e2=1.0;return a;}
function AMk(a){var b;b=(255.0*a.e2|0)<<24|(255.0*a.e3|0)<<16|(255.0*a.e4|0)<<8|255.0*a.e5|0;return Lh(b);}
function Nb(b,c,d,e){var f;G1();f=(255.0*e|0)<<24|(255.0*d|0)<<16|(255.0*c|0)<<8|255.0*b|0;return Lh(f);}
function RC(b,c){G1();b.e5=((c&(-16777216))>>>24)/255.0;b.e4=((c&16711680)>>>16)/255.0;b.e3=((c&65280)>>>8)/255.0;b.e2=(c&255)/255.0;}
function T3(){AVP=Cy(1.0,1.0,1.0,1.0);AVQ=Bm((-1077952513));AVR=Bm(2139062271);AVS=Bm(1061109759);AVT=Cy(0.0,0.0,0.0,1.0);AVU=AVP.wI();AVV=Cy(0.0,0.0,0.0,0.0);AVW=Cy(0.0,0.0,1.0,1.0);AVX=Cy(0.0,0.0,0.5,1.0);AVY=Bm(1097458175);AVZ=Bm(1887473919);AV0=Bm((-2016482305));AV1=Cy(0.0,1.0,1.0,1.0);AV2=Cy(0.0,0.5,0.5,1.0);AV3=Bm(16711935);AV4=Bm(2147418367);AV5=Bm(852308735);AV6=Bm(579543807);AV7=Bm(1804477439);AV8=Bm((-65281));AV9=Bm((-2686721));AV$=Bm((-626712321));AV_=Bm((-5963521));AWa=Bm((-1958407169));AWb=Bm((-759919361));AWc
=Bm((-1306385665));AWd=Bm((-16776961));AWe=Bm((-13361921));AWf=Bm((-8433409));AWg=Bm((-92245249));AWh=Bm((-9849601));AWi=Cy(1.0,0.0,1.0,1.0);AWj=Bm((-1608453889));AWk=Bm((-293409025));AWl=Bm((-1339006721));}
function D4(){var a=this;C.call(a);a.j0=0;a.dr=0;a.iQ=0;a.hL=0;a.db=0;a.fn=null;a.yP=0;a.x2=0;}
function CJ(a,b,c){var d=new D4();AGD(d,a,b,c);return d;}
function AWm(a,b,c,d){var e=new D4();SV(e,a,b,c,d);return e;}
function AWn(a,b,c,d,e,f){var g=new D4();QA(g,a,b,c,d,e,f);return g;}
function AGD(a,b,c,d){SV(a,b,c,d,0);}
function SV(a,b,c,d,e){var f;f=Cm(b,4);QA(a,b,c,f?5126:5121,f?0:1,d,e);}
function QA(a,b,c,d,e,f,g){J(a);a.j0=b;a.dr=c;a.hL=d;a.iQ=e;a.fn=f;a.yP=g;a.x2=DW(b);}
function MM(a){a:{switch(a.hL){case 5120:case 5121:break;case 5122:case 5123:return 2*a.dr|0;case 5124:case 5125:case 5127:case 5128:case 5129:case 5130:case 5131:break a;case 5126:case 5132:return 4*a.dr|0;default:break a;}return a.dr;}return 0;}
function Pv(){var a=this;C.call(a);a.cD=null;a.u_=0;}
function X4(a,b){var c=new Pv();AMN(c,a,b);return c;}
function AMN(a,b,c){var d;J(a);a.cD=Bu();a.u_=0;a.cD.p=b;a.cD.o=c;d=a.cD;a.cD.Y=1.0;d.be=1.0;}
var RQ=F(BU);
function AP0(a){var b=new RQ();ADj(b,a);return b;}
function ADj(a,b){DX(a,b.kF(),b.yi(),b.gM());a.O.E(a);}
function AN9(a,b,c,d){var e;while((b+a.bd.bX()|0)<=d.A()){e=a.bd;if(e.bt(b,c)<=0)break;b=b+a.bd.bX()|0;}return a.f.c(b,c,d);}
function AGG(a,b,c,d){var e,f,g;e=a.f.cd(b,c,d);if(e<0)return (-1);f=e-a.bd.bX()|0;while(f>=b&&a.bd.bt(f,c)>0){g=f-a.bd.bX()|0;e=f;f=g;}return e;}
function Dh(){var a=this;C.call(a);a.dZ=null;a.gU=0;a.iN=null;a.qN=null;a.sc=null;a.rj=null;a.iq=null;a.ri=null;a.sG=null;a.p6=null;a.cN=0;a.jC=0;a.iW=0;a.zE=null;a.pe=null;a.pQ=null;a.rZ=0;a.zc=0;a.ck=null;a.eR=null;}
var AWo=0;var AWp=null;var AWq=null;var AWr=null;var AWs=null;function Ju(){Ju=P(Dh);AI9();}
function Np(a,b){var c=new Dh();S5(c,a,b);return c;}
function S5(a,b,c){Ju();J(a);a.dZ=B(45);a.iN=EJ();a.qN=EJ();a.sc=EJ();a.iq=EJ();a.ri=EJ();a.sG=EJ();a.zc=0;a.ck=EP(1);a.eR=EP(1);if(b===null)H(Bp(B(314)));if(c===null)H(Bp(B(315)));if(AWp!==null&&AWp.k()>0)b=(((M()).a(AWp)).a(b)).d();if(AWq!==null&&AWq.k()>0)c=(((M()).a(AWq)).a(c)).d();a.pe=b;a.pQ=c;a.zE=FO(16);Hx(a,b,c);if(a.km()){M9(a);Pg(a);P3(a,AUJ,a);}}
function Hx(a,b,c){a.jC=JD(a,35633,b);a.iW=JD(a,35632,c);if(a.jC!=(-1)&&a.iW!=(-1)){a.cN=Rw(a,a.xf());if(a.cN!=(-1)){a.gU=1;return;}a.gU=0;return;}a.gU=0;}
function JD(a,b,c){var d,e,f,g,h;d=AUO;e=EP(1);f=d.xB(b);if(!f)return (-1);d.z8(f,c);d.w1(f);d.w4(f,35713,e);g=e.bU(0);if(g)return f;h=d.w9(f);a.dZ=(((M()).a(a.dZ)).a(b!=35633?B(316):B(317))).d();a.dZ=(((M()).a(a.dZ)).a(h)).d();return (-1);}
function AC$(a){var b,c;b=AUO;c=b.wb();if(!c)c=(-1);return c;}
function Rw(a,b){var c,d,e,f;c=AUO;if(b==(-1))return (-1);c.qs(b,a.jC);c.qs(b,a.iW);c.ud(b);d=Eg(4);D2(d,DQ());e=d.r1();c.lo(b,35714,e);f=e.bU(0);if(f)return b;a.dZ=AUO.tW(b);return (-1);}
function AK9(a){if(!a.gU)return a.dZ;a.dZ=AUO.tW(a.cN);return a.dZ;}
function AMv(a){return a.gU;}
function N9(a,b){var c,d;c=AUO;d=a.iq.l4(b,(-2));if(d==(-2)){d=c.rp(a.cN,b);a.iq.es(b,d);}return d;}
function GP(a,b){Ju();return a.uF(b,AWo);}
function AEQ(a,b,c){var d;d=a.iN.l4(b,(-2));if(d==(-2)){d=AUO.oT(a.cN,b);if(d==(-1)&&c){if(!a.gU)H(BN((((M()).a(B(318))).a(a.jv())).d()));H(Bp(((((M()).a(B(319))).a(b)).a(B(320))).d()));}a.iN.es(b,d);}return d;}
function ACP(a,b,c){var d,e;d=AUO;CX(a);e=GP(a,b);d.wr(e,c);}
function Z_(a,b,c){a.xo(b,c,0);}
function Vb(a,b,c,d){a.zd(GP(a,b),c,d);}
function AGd(a,b,c,d){var e;e=AUO;CX(a);e.xp(b,1,d,c.b,0);}
function AN4(a,b,c,d,e,f,g){var h;h=AUO;CX(a);h.yF(b,c,d,e,f,g);}
function Vp(a){var b;b=AUO;CX(a);b.sW(a.cN);}
function AKM(a){var b;b=AUO;b.sW(0);b.q8(a.jC);b.q8(a.iW);b.we(a.cN);Ju();if(AWr.K(AUJ)!==null)(AWr.K(AUJ)).k8(a,1);}
function Wc(a,b){var c,d;c=AUO;CX(a);d=N9(a,b);if(d==(-1))return;c.qP(d);}
function AEJ(a,b){var c;c=AUO;CX(a);c.qP(b);}
function AIt(a,b){var c;c=AUO;CX(a);c.zZ(b);}
function CX(a){if(a.rZ){Hx(a,a.pe,a.pQ);a.rZ=0;}}
function P3(a,b,c){var d;Ju();d=AWr.K(b);if(d===null)d=Cu();d.cr(c);AWr.bn(b,d);}
function Pg(a){var b,c,d,e;a.ck.cm();AUO.lo(a.cN,35718,a.ck);b=a.ck.bU(0);a.rj=Bh(Bv,b);c=0;while(c<b){a.ck.cm();a.ck.pu(0,1);a.eR.cm();d=AUO.zu(a.cN,c,a.ck,a.eR);e=AUO.oT(a.cN,d);a.iN.es(d,e);a.qN.es(d,a.eR.bU(0));a.sc.es(d,a.ck.bU(0));a.rj.data[c]=d;c=c+1|0;}}
function M9(a){var b,c,d,e;a.ck.cm();AUO.lo(a.cN,35721,a.ck);b=a.ck.bU(0);a.p6=Bh(Bv,b);c=0;while(c<b){a.ck.cm();a.ck.pu(0,1);a.eR.cm();d=AUO.yU(a.cN,c,a.ck,a.eR);e=AUO.rp(a.cN,d);a.iq.es(d,e);a.ri.es(d,a.eR.bU(0));a.sG.es(d,a.ck.bU(0));a.p6.data[c]=d;c=c+1|0;}}
function V5(a,b){return a.iq.l4(b,(-1));}
function AI9(){AWo=1;AWp=B(45);AWq=B(45);AWr=DP();AWs=EP(1);}
var CO=F(Bk);
var AWt=null;var AWu=null;var AWv=null;var AWw=null;var AWx=null;var AWy=null;function Ps(){Ps=P(CO);Z1();}
function F1(a,b){var c=new CO();Ln(c,a,b);return c;}
function Ln(a,b,c){Ps();BX(a,b,c);}
function Z1(){AWt=F1(B(321),0);AWu=F1(B(322),1);AWv=F1(B(323),2);AWw=F1(B(324),3);AWx=F1(B(325),4);AWy=G(CO,[AWt,AWu,AWv,AWw,AWx]);}
var GF=F(0);
var Gp=F(0);
function RR(){var a=this;C.call(a);a.lS=null;a.fX=null;}
function ASa(a){var b=new RR();AK0(b,a);return b;}
function AK0(a,b){var c;J(a);a.fX=b;c=a;b.classObject=c;}
function PO(b){var c;if(b===null)return null;c=b.classObject;if(c===null)c=ASa(b);return c;}
function V4(a){return a.fX;}
function Zk(a,b){return AGR(b,a.fX);}
function AEh(a){if(a.lS===null)a.lS=AKv(a.fX);return a.lS;}
function ABO(a){return AKH(a.fX);}
function AFD(a){return PO(ANG(a.fX));}
var B5=F();
var OF=F(B5);
var HS=F(0);
function Cp(){C.call(this);this.c$=null;}
function El(a,b){J(a);a.c$=b;}
function AMK(a,b,c){}
function SY(){var a=this;Cp.call(a);a.la=null;a.gp=null;a.i7=0.0;}
function APl(a){var b=new SY();ACE(b,a);return b;}
function ACE(a,b){El(a,b);a.i7=0.0;}
function TS(a){a.la=Ew(Ex(AUM.fy(B(326))),0,0,480,320);a.gp=Gz();(a.gp.kf()).fM(0.0,0.0,480.0,320.0);}
function ACz(a,b){AUN.ij(16384);a.gp.el();a.gp.dd(a.la,0.0,0.0);a.gp.dM();a.i7=a.i7+b;if(a.i7>1.0&&!(!AUL.ct((-1))&&!AUL.nT()))a.c$.f6(PD(a.c$));}
function Tw(a){AUJ.fk(B(242),B(327));a.gp.J();(a.la.fL()).J();}
var CK=F(0);
function Sm(){var a=this;C.call(a);a.y=null;a.W=0;}
function AO0(){var a=new Sm();Xe(a);return a;}
function ASc(a){var b=new Sm();UE(b,a);return b;}
function Xe(a){J(a);a.y=W(0);}
function UE(a,b){J(a);a.y=W(((b+32|0)-1|0)/32|0);}
function AIL(a,b){var c,d;c=b/32|0;if(b>=a.W){EH(a,c+1|0);a.W=b+1|0;}d=a.y.data;d[c]=d[c]|1<<(b%32|0);}
function ACq(a,b,c){var d,e,f,g;if(b>c)H(Dq());d=b/32|0;e=c/32|0;if(c>a.W){EH(a,e+1|0);a.W=c;}if(d==e){f=a.y.data;f[d]=f[d]|Ep(a,b)&EA(a,c);}else{f=a.y.data;f[d]=f[d]|Ep(a,b);g=d+1|0;while(g<e){a.y.data[g]=(-1);g=g+1|0;}if(c&31){f=a.y.data;f[e]=f[e]|EA(a,c);}}}
function Ep(a,b){var c;c=b%32|0;return (-1)<<c;}
function EA(a,b){var c;c=b%32|0;return !c?0:(-1)>>>(32-c|0);}
function AOX(a,b){var c,d;c=b/32|0;if(c<a.y.data.length){d=a.y.data;d[c]=d[c]&Ng((-2),b%32|0);if(b==(a.W-1|0))D_(a);}}
function UU(a,b,c){var d,e,f,g,h;if(b>c)H(Dq());if(b>=a.W)return;d=By(a.W,c);e=b/32|0;f=d/32|0;if(e==f){g=a.y.data;g[e]=g[e]&(EA(a,b)|Ep(a,d));}else{g=a.y.data;g[e]=g[e]&EA(a,b);h=e+1|0;while(h<f){a.y.data[h]=0;h=h+1|0;}if(d&31){g=a.y.data;g[f]=g[f]&Ep(a,d);}}D_(a);}
function U1(a,b){var c;c=b/32|0;return c<a.y.data.length&&a.y.data[c]&1<<(b%32|0)?1:0;}
function AN7(a,b){var c,d,e,f,g;if(b>=a.W)return (-1);c=b/32|0;d=a.y.data[c];e=d>>>(b%32|0);if(e)return DW(e)+b|0;f=(a.W+31|0)/32|0;g=c+1|0;while(g<f){if(a.y.data[g])return (g*32|0)+DW(a.y.data[g])|0;g=g+1|0;}return (-1);}
function AIj(a,b){var c,d,e,f,g;if(b>=a.W)return b;c=b/32|0;d=a.y.data[c]^(-1);e=d>>>(b%32|0);if(e)return DW(e)+b|0;f=(a.W+31|0)/32|0;g=c+1|0;while(g<f){if(a.y.data[g]!=(-1))return (g*32|0)+DW(a.y.data[g]^(-1))|0;g=g+1|0;}return a.W;}
function EH(a,b){var c;if(a.y.data.length>=b)return;c=BB((b*3|0)/2|0,(a.y.data.length*2|0)+1|0);a.y=ANV(a.y,c);}
function D_(a){var b,c,d;b=(a.W+31|0)/32|0;a.W=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=GS(a.y.data[c]);if(d<32)break;c=c+(-1)|0;a.W=a.W-32|0;}a.W=a.W-d|0;}}
function AHO(a,b){var c,d;c=By(a.y.data.length,b.y.data.length);d=0;while(d<c){if(a.y.data[d]&b.y.data[d])return 1;d=d+1|0;}return 0;}
function AM6(a,b){var c,d,e;c=By(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]&b.y.data[d];d=d+1|0;}while(c<a.y.data.length){a.y.data[c]=0;c=c+1|0;}a.W=By(a.W,b.W);D_(a);}
function AOm(a,b){var c,d,e;c=By(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]&(b.y.data[d]^(-1));d=d+1|0;}D_(a);}
function AMV(a,b){var c,d,e;a.W=BB(a.W,b.W);EH(a,(a.W+31|0)/32|0);c=By(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]|b.y.data[d];d=d+1|0;}}
function AEs(a,b){var c,d,e;a.W=BB(a.W,b.W);EH(a,(a.W+31|0)/32|0);c=By(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]^b.y.data[d];d=d+1|0;}D_(a);}
function ANb(a){return a.W?0:1;}
function JX(){N.call(this);this.xZ=null;}
function AQe(a){var b=new JX();AOA(b,a);return b;}
function AOA(a,b){a.xZ=b;U(a);}
function Y7(a,b){return Ow(b);}
var EX=F(0);
function Fy(){var a=this;C.call(a);a.cv=null;a.fP=0;a.p$=0;a.fz=0;a.hI=0;a.j9=0;}
function ABL(a,b){var c=new Fy();Yy(c,a,b);return c;}
function AWz(a){var b=new Fy();Rp(b,a);return b;}
function Yy(a,b,c){J(a);a.fz=1;a.hI=0;a.p$=1;a.cv=QJ(c);a.cv.b8();a.fP=AUO.gL();a.j9=!b?35048:35044;}
function Rp(a,b){J(a);a.fz=1;a.hI=0;a.p$=1;a.cv=QJ(b);a.cv.b8();a.fP=AUO.gL();a.j9=35044;}
function ACu(a){return Bi(a.cv);}
function UQ(a){return DC(a.cv);}
function AGT(a,b,c,d){a.fz=1;a.cv.cm();a.cv.rV(b,c,d);a.cv.b8();if(a.hI){AUO.d4(34963,Bi(a.cv),a.cv,a.j9);a.fz=0;}}
function T2(a){a.fz=1;return a.cv;}
function AMX(a){if(!a.fP)H(BI(B(328)));AUO.bS(34963,a.fP);if(a.fz){AUO.d4(34963,Bi(a.cv),a.cv,a.j9);a.fz=0;}a.hI=1;}
function AJA(a){AUO.bS(34963,0);a.hI=0;}
function WX(a){var b;b=AUO;b.bS(34963,0);b.hh(a.fP);a.fP=0;}
var My=F(Fy);
function AS$(a){var b=new My();AHo(b,a);return b;}
function AHo(a,b){Rp(a,b);}
function Gc(){var a=this;C.call(a);a.gf=null;a.rm=null;a.r9=null;a.l9=null;a.nH=null;a.fh=null;a.jQ=null;a.n1=0.0;a.rX=0.0;a.jw=0.0;a.j6=0.0;a.rN=null;a.vs=null;a.uJ=null;}
function Qu(a){J(a);a.gf=Bb();a.rm=BY(0.0,0.0,(-1.0));a.r9=BY(0.0,1.0,0.0);a.l9=B6();a.nH=B6();a.fh=B6();a.jQ=B6();a.n1=1.0;a.rX=100.0;a.jw=0.0;a.j6=0.0;a.rN=AR2();a.vs=Bb();a.uJ=APF(Bb(),Bb());}
function MR(){var a=this;Gc.call(a);a.hk=0.0;a.sh=null;}
function AS2(a,b){var c=new MR();YP(c,a,b);return c;}
function YP(a,b,c){Qu(a);a.hk=1.0;a.sh=Bb();a.jw=b;a.j6=c;a.n1=0.0;a.ga();}
function Yu(a){a.oK(1);}
function AOL(a,b){a.l9.sH(a.hk* -a.jw/2.0,a.hk*a.jw/2.0,a.hk* -(a.j6/2.0),a.hk*a.j6/2.0,a.n1,a.rX);a.nH.v2(a.gf,(a.sh.d3(a.gf)).wA(a.rm),a.r9);a.fh.fi(a.l9);S4(a.fh.b,a.nH.b);if(b){a.jQ.fi(a.fh);MX(a.jQ.b);a.rN.uu(a.jQ);}}
var Si=F();
function Fl(){return 1;}
var Gd=F(CT);
var AWA=0.0;var AWB=null;function AWC(){AWC=P(Gd);AIa();}
function AIa(){AWA=NaN;AWB=E($rt_floatcls());}
var KX=F();
function VB(b,c){var d,e,f,g;d=b.data;e=BR(c);f=By(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Sd(b,c){var d,e,f,g;d=b.data;e=Dv(c);f=By(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function ANV(b,c){var d,e,f,g;d=b.data;e=W(c);f=By(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Oq(b,c){var d,e,f,g;d=b.data;e=II((Dl(b)).iL(),c);f=By(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function AAp(b,c,d,e){var f,g;if(c>d)H(CR());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function E5(b,c){AAp(b,0,b.data.length,c);}
function AKE(b,c,d,e){var f,g;if(c>d)H(CR());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function AIC(b,c){AKE(b,0,b.data.length,c);}
function Xv(b,c,d,e){var f,g;if(c>d)H(CR());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function AGP(b,c){return AHP(b,0,b.data.length,c);}
function AHP(b,c,d,e){var f,g,h,i,j;f=Cm(c,d);if(f>0)H(CR());if(!f)return (-1);g=d-1|0;while(true){h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>g)return ( -i|0)-2|0;}else{g=i-1|0;if(g<c)return ( -i|0)-1|0;}}return i;}
function CI(){Bl.call(this);this.em=0;}
function Mt(a){var b=new CI();AIw(b,a);return b;}
function AIw(a,b){B8(a);a.em=b;}
function ADG(a){return 1;}
function AB8(a,b,c){return a.em!=c.h(b)?(-1):1;}
function ZS(a,b,c,d){var e,f,g,h;if(!(c instanceof Bv))return En(a,b,c,d);e=c;f=d.A();while(true){if(b>=f)return (-1);g=e.ke(a.em,b);if(g<0)return (-1);h=a.f;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function ADP(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return Es(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.kT(a.em,c);if(g<0)break a;if(g<b)break a;if(a.f.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function Wl(a){return a.em;}
function ALK(a,b){if(b instanceof CI)return b.kg()!=a.em?0:1;if(!(b instanceof CA)){if(b instanceof B9)return b.n(a.em);if(!(b instanceof Cz))return 1;return 0;}return b.bt(0,Jd(a.em))<=0?0:1;}
function Lz(){var a=this;N.call(a);a.k4=0;a.pI=null;a.mc=null;}
function APa(a,b,c){var d=new Lz();ANO(d,a,b,c);return d;}
function ANO(a,b,c,d){a.mc=b;a.k4=c;a.pI=d;U(a);}
function AJ$(a,b){return !(a.k4^a.mc.M.dL(b))&&!(a.k4^a.mc.dK^a.pI.n(b))?0:1;}
function LF(){var a=this;N.call(a);a.rd=0;a.qZ=null;a.qC=null;a.z6=null;}
function ATy(a,b,c,d){var e=new LF();AAT(e,a,b,c,d);return e;}
function AAT(a,b,c,d,e){a.z6=b;a.rd=c;a.qZ=d;a.qC=e;U(a);}
function Tv(a,b){return a.rd^(!a.qZ.n(b)&&!a.qC.n(b)?0:1)?0:1;}
function LB(){var a=this;N.call(a);a.q7=null;a.xk=null;}
function AQt(a,b){var c=new LB();TU(c,a,b);return c;}
function TU(a,b,c){a.xk=b;a.q7=c;U(a);}
function AJt(a,b){return a.q7.n(b);}
var HR=F(0);
function LA(){var a=this;N.call(a);a.lc=0;a.s8=null;a.na=null;}
function AQa(a,b,c){var d=new LA();Ub(d,a,b,c);return d;}
function Ub(a,b,c,d){a.na=b;a.lc=c;a.s8=d;U(a);}
function AFg(a,b){return !(a.lc^a.na.M.dL(b))&&!(a.lc^a.na.dK^a.s8.n(b))?1:0;}
function LC(){var a=this;N.call(a);a.qv=null;a.Ai=null;}
function AQp(a,b){var c=new LC();T_(c,a,b);return c;}
function T_(a,b,c){a.Ai=b;a.qv=c;U(a);}
function ABP(a,b){return a.qv.n(b);}
function LI(){var a=this;N.call(a);a.rM=null;a.rY=0;a.rD=null;}
function APs(a,b,c){var d=new LI();Y1(d,a,b,c);return d;}
function Y1(a,b,c,d){a.rD=b;a.rM=c;a.rY=d;U(a);}
function Yo(a,b){return !a.rM.n(b)&&!(a.rY^a.rD.M.dL(b))?1:0;}
var EB=F(0);
function LE(){var a=this;N.call(a);a.tB=0;a.ta=null;a.s5=null;a.vf=null;}
function AST(a,b,c,d){var e=new LE();UF(e,a,b,c,d);return e;}
function UF(a,b,c,d,e){a.vf=b;a.tB=c;a.ta=d;a.s5=e;U(a);}
function Zn(a,b){return a.tB^(!a.ta.n(b)&&!a.s5.n(b)?0:1);}
function LD(){var a=this;N.call(a);a.th=null;a.vJ=null;}
function AS1(a,b){var c=new LD();Ua(c,a,b);return c;}
function Ua(a,b,c){a.vJ=b;a.th=c;U(a);}
function AFi(a,b){return a.th.n(b)?0:1;}
function LP(){Bf.call(this);this.mG=null;}
function ASk(a){var b=new LP();XX(b,a);return b;}
function XX(a,b){BZ(a);a.mG=b;}
function AHe(a,b,c,d){var e,f,g,h,i;e=d.A();f=b+1|0;if(f>e){d.dg=1;return (-1);}g=c.h(b);if(BH(g)){h=b+2|0;if(h<=e){i=c.h(f);if(Ee(g,i))return a.mG.ic(CN(g,i))?(-1):a.f.c(h,c,d);}}return a.mG.ic(g)?(-1):a.f.c(f,c,d);}
function AJT(a,b){a.f=b;}
function Ts(a){return (-2147483602);}
function AOh(a,b){return 1;}
function LG(){var a=this;N.call(a);a.rs=null;a.q2=0;a.sv=null;}
function APS(a,b,c){var d=new LG();ABG(d,a,b,c);return d;}
function ABG(a,b,c,d){a.sv=b;a.rs=c;a.q2=d;U(a);}
function AMf(a,b){return !a.rs.n(b)&&!(a.q2^a.sv.M.dL(b))?0:1;}
var CH=F();
var AWD=null;var AWE=null;var AWF=null;var AWG=null;var AWH=null;var AWI=null;function R(){R=P(CH);Vd();}
function Jd(b){var c,d;R();c=new Bv;d=BR(1);d.data[0]=b;GI(c,d);return c;}
function J6(b){R();return b>0&&b<=65535?1:0;}
function Ga(b){R();return b>=65536&&b<=1114111?1:0;}
function BH(b){R();return (b&64512)!=55296?0:1;}
function BV(b){R();return (b&64512)!=56320?0:1;}
function Jm(b){R();return !BH(b)&&!BV(b)?0:1;}
function Ee(b,c){R();return BH(b)&&BV(c)?1:0;}
function CN(b,c){R();return ((b&1023)<<10|c&1023)+65536|0;}
function Qi(b,c){R();return LH(b,c,b.data.length);}
function LH(b,c,d){var e,f;R();if(c<(d-1|0)){e=b.data;if(BH(e[c])){f=c+1|0;if(BV(e[f]))return CN(e[c],e[f]);}}return b.data[c];}
function FA(b){var c;R();c=b-65536|0;return (55296|c>>10&1023)&65535;}
function F_(b){R();return (56320|b&1023)&65535;}
function C5(b){R();return DS(b)&65535;}
function DS(b){R();return (Q0(b)).toLowerCase().charCodeAt(0);}
function CP(b){R();return DR(b)&65535;}
function DR(b){R();return (Q0(b)).toUpperCase().charCodeAt(0);}
function IJ(b,c){R();return Q8(b,c);}
function Q8(b,c){var d;R();if(c>=2&&c<=36){d=Hd(b);if(d>=c)d=(-1);return d;}return (-1);}
function H_(b){R();return Hd(b);}
function Hd(b){var c,d,e,f,g,h,i,j;R();c=J1();d=c.data;e=0;f=(d.length/2|0)-1|0;while(f>=e){g=(e+f|0)/2|0;h=g*2|0;i=d[h];j=Cm(b,i);if(j>0)e=g+1|0;else{if(j>=0)return d[h+1|0];f=g-1|0;}}return (-1);}
function Gj(b,c){R();if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function S1(b){R();return BL(b)!=9?0:1;}
function J1(){R();if(AWE===null)AWE=ANB(((Pd()).value!==null?$rt_str((Pd()).value):null));return AWE;}
function Pd(){R();if(AWH===null)AWH=N2();return AWH;}
function N6(){R();if(AWF===null)AWF=AOY(((Nc()).value!==null?$rt_str((Nc()).value):null));return AWF;}
function Nc(){R();if(AWI===null)AWI=Ta();return AWI;}
function DL(b){var c;R();if(b<65536){c=BR(1);c.data[0]=b&65535;return c;}return ACL([FA(b),F_(b)]);}
function NG(b){var c;R();a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}c=1;break a;}c=0;}return c;}
function Er(b){R();return BL(b);}
function BL(b){var c,d,e,f,g,h;R();if(J6(b)&&Jm(b&65535))return 19;c=N6();d=c.data;e=0;f=d.length-1|0;while(e<=f){g=(e+f|0)/2|0;h=d[g];if(b>=h.rx)e=g+1|0;else{if(b>=h.l7)return h.qn.data[b-h.l7|0];f=g-1|0;}}return 0;}
function Sc(b){R();return BL(b)!=2?0:1;}
function JL(b){R();return BL(b)!=1?0:1;}
function Kf(b){R();return BL(b)!=3?0:1;}
function OT(b){R();return !BL(b)?0:1;}
function R9(b){R();switch(BL(b)){case 1:case 2:case 3:case 4:case 5:break;default:return 0;}return 1;}
function HT(b){R();return GR(b);}
function GR(b){R();a:{switch(BL(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Ow(b){R();a:{switch(BL(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return DH(b);}
function S3(b){R();a:{switch(BL(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return DH(b);}
function Sz(b){R();a:{switch(BL(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break a;default:break a;}return 1;}return DH(b);}
function Nd(b){R();a:{switch(BL(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break a;default:break a;}return 1;}return DH(b);}
function DH(b){R();a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return BL(b)!=16?0:1;}
function Hu(b){R();switch(BL(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Qt(b){R();return HO(b);}
function HO(b){R();switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Hu(b);}return 1;}
function Vd(){AWD=E($rt_charcls());AWG=Bh(CH,128);}
function N2(){return {"value":"{?*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%slG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%sTEG%%%%%%%%%%%%%%%%%%&5G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%VR#G%%%%%%%%%%%%%"
+"%%%%%"};}
function Ta(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
function JW(){var a=this;Bl.call(a);a.tt=0;a.o8=0;}
function Xm(a){var b=new JW();AJz(b,a);return b;}
function AJz(a,b){B8(a);a.tt=b;a.o8=Ek(b);}
function Us(a,b,c){return a.tt!=c.h(b)&&a.o8!=c.h(b)?(-1):1;}
function Cz(){var a=this;Bl.call(a);a.kV=0;a.js=0;a.i8=0;}
function APN(a){var b=new Cz();AOe(b,a);return b;}
function AOe(a,b){var c,d;B8(a);a.bC=2;a.i8=b;c=DL(b);d=c.data;a.kV=d[0];a.js=d[1];}
function AJq(a,b,c){var d,e,f;d=b+1|0;e=c.h(b);f=c.h(d);return a.kV==e&&a.js==f?2:(-1);}
function AGO(a,b,c,d){var e,f,g,h;if(!(c instanceof Bv))return En(a,b,c,d);e=c;f=d.A();while(b<f){g=e.ke(a.kV,b);if(g<0)return (-1);b=g+1|0;if(b>=f)continue;h=e.h(b);if(a.js==h&&a.f.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function Xb(a,b,c,d,e){var f,g,h;if(!(d instanceof Bv))return Es(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.kT(a.js,c);h=g+(-1)|0;if(h<0)break a;if(h<b)break a;if(a.kV==f.h(h)&&a.f.c(h+2|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function Ug(a){return a.i8;}
function AI8(a,b){if(b instanceof Cz)return b.or()!=a.i8?0:1;if(b instanceof B9)return b.n(a.i8);if(b instanceof CI)return 0;if(!(b instanceof CA))return 1;return 0;}
function OB(){var a=this;O.call(a);a.nL=0;a.lf=0;a.oX=0;}
function EQ(a,b){var c=new OB();ZB(c,a,b);return c;}
function AQS(a,b,c){var d=new OB();TL(d,a,b,c);return d;}
function ZB(a,b,c){X(a);a.lf=c;a.nL=b;}
function TL(a,b,c,d){X(a);a.oX=d;a.lf=c;a.nL=b;}
function TK(a){var b;b=APC(a.nL);if(a.oX)b.br.kx(0,2048);b.U=a.lf;return b;}
var PN=F();
var CZ=F();
var AWJ=null;var AWK=null;function Hh(a){J(a);}
function Hp(b){if(!(b&1)){if(AWK!==null)return AWK;AWK=ASI();return AWK;}if(AWJ!==null)return AWJ;AWJ=AR5();return AWJ;}
function KF(){C.call(this);this.ex=null;}
function AQw(a,b){var c=new KF();AIp(c,a,b);return c;}
function AIp(a,b,c){var d;J(a);a.ex=Bu();a.ex.p=b;a.ex.o=c;d=a.ex;a.ex.Y=1.0;d.be=1.0;}
var FN=F(B4);
function Pb(a,b,c,d){D6(a,b);a.C=c;a.Q=d;}
function ADY(b,c,d){return AR4(0,b.data.length,b,c,c+d|0,0);}
function Vi(a,b,c,d){var e,f,g,h,i;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)H(Bg((((((M()).a(B(329))).l(g)).a(B(330))).l(f)).d()));if(Bq(a)<d)H(ANe());if(d<0)H(Bg(((((M()).a(B(331))).l(d)).a(B(332))).d()));h=a.C;i=0;while(i<d){g=c+1|0;f=h+1|0;e[c]=a.zP(h);i=i+1|0;c=g;h=f;}a.C=a.C+d|0;return a;}}e=b.data;H(Bg(((((((M()).a(B(333))).l(c)).a(B(42))).l(e.length)).a(B(250))).d()));}
function AE3(a,b){Eq(a,b);return a;}
var Fj=F(FN);
function L_(a,b,c,d){Pb(a,b,c,d);}
function Oe(){var a=this;Fj.call(a);a.z9=0;a.s$=0;a.q9=null;}
function AR4(a,b,c,d,e,f){var g=new Oe();AOM(g,a,b,c,d,e,f);return g;}
function AOM(a,b,c,d,e,f,g){L_(a,c,e,f);a.s$=b;a.z9=g;a.q9=d;}
function AHl(a,b){return a.q9.data[b+a.s$|0];}
function Qr(){var a=this;C.call(a);a.d6=0;a.dH=null;a.dO=null;a.eN=null;a.fD=0;a.qo=0.0;a.k$=0;a.l3=0;a.fd=0;}
function APT(a){var b=new Qr();AJ9(b,a);return b;}
function AWL(a,b){var c=new Qr();Nx(c,a,b);return c;}
function AJ9(a,b){Nx(a,b,0.800000011920929);}
function Nx(a,b,c){var d;J(a);if(c>0.0&&c<1.0){a.qo=c;d=F7(b,c);a.k$=d*c|0;a.fd=d-1|0;a.l3=CE(T(a.fd));a.dH=W(d);a.dO=Bh(C,d);return;}H(Bp((((M()).a(B(17))).hF(c)).d()));}
function ABD(a,b){return DB(Cd(C1(T(b),BK(2135587861, 2654435769)),a.l3));}
function Fe(a,b){var c,d,e;c=a.dH;d=a.e_(b);while(true){e=c.data[d];if(!e)return  -(d+1|0)|0;if(e==b)break;d=(d+1|0)&a.fd;}return d;}
function ABU(a,b,c){var d,e,f;if(!b){d=a.eN;a.eN=c;if(!a.fD){a.fD=1;a.d6=a.d6+1|0;}return d;}e=Fe(a,b);if(e>=0){d=a.dO.data[e];a.dO.data[e]=c;return d;}f= -(e+1|0)|0;a.dH.data[f]=b;a.dO.data[f]=c;f=a.d6+1|0;a.d6=f;if(f>=a.k$)Rg(a,a.dH.data.length<<1);return null;}
function L$(a,b,c){var d,e,f;d=a.dH;e=a.e_(b);while(true){f=d.data;if(!f[e])break;e=(e+1|0)&a.fd;}f[e]=b;a.dO.data[e]=c;}
function AOC(a,b){var c;if(!b)return !a.fD?null:a.eN;c=Fe(a,b);return c<0?null:a.dO.data[c];}
function AMJ(a,b){var c,d,e,f,g,h,i,j,k,l;if(!b){if(!a.fD)return null;a.fD=0;c=a.eN;a.eN=null;a.d6=a.d6-1|0;return c;}d=Fe(a,b);if(d<0)return null;e=a.dH;f=a.dO;g=f.data;c=g[d];h=a.fd;i=(d+1|0)&h;while(true){j=e.data;k=j[i];if(!k)break;l=a.e_(k);if(((i-l|0)&h)>((d-l|0)&h)){j[d]=k;g[d]=g[i];d=i;}i=(i+1|0)&h;}j[d]=0;g[d]=null;a.d6=a.d6-1|0;return c;}
function AN8(a,b,c){var d,e,f,g;a:{d=a.dO;if(b===null){if(a.fD&&a.eN===null)return 1;e=d.data;f=a.dH;g=e.length-1|0;while(true){if(g<0)break a;if(f.data[g]&&e[g]===null)break;g=g+(-1)|0;}return 1;}if(c){if(b===a.eN)return 1;e=d.data;g=e.length-1|0;while(true){if(g<0)break a;if(e[g]===b)break;g=g+(-1)|0;}return 1;}if(a.fD&&b.X(a.eN))return 1;e=d.data;g=e.length-1|0;while(true){if(g<0)break a;if(b.X(e[g]))return 1;g=g+(-1)|0;}}return 0;}
function Rg(a,b){var c,d,e,f,g;a:{c=a.dH.data.length;a.k$=b*a.qo|0;a.fd=b-1|0;a.l3=CE(T(a.fd));d=a.dH;e=a.dO;a.dH=W(b);a.dO=Bh(C,b);if(a.d6>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g)L$(a,g,e.data[f]);f=f+1|0;}}}}
function PU(){N.call(this);this.yg=null;}
function ATh(a){var b=new PU();TY(b,a);return b;}
function TY(a,b){a.yg=b;U(a);}
function AMg(a,b){return Kf(b);}
function Gm(){var a=this;C.call(a);a.yr=0.0;a.yn=0.0;a.yo=0.0;a.yq=0.0;}
var AWM=null;var AWN=null;function AJr(){AJr=P(Gm);ACt();}
function AI$(a,b,c,d){var e=new Gm();M4(e,a,b,c,d);return e;}
function VE(){var a=new Gm();Ok(a);return a;}
function M4(a,b,c,d,e){AJr();J(a);a.qL(b,c,d,e);}
function Ok(a){AJr();J(a);a.wf();}
function ZR(a,b,c,d,e){a.yr=b;a.yn=c;a.yo=d;a.yq=e;return a;}
function AN1(a){return a.qL(0.0,0.0,0.0,1.0);}
function ACt(){AWM=AI$(0.0,0.0,0.0,0.0);AWN=AI$(0.0,0.0,0.0,0.0);}
var Iv=F();
var AWO=0;function Io(){Io=P(Iv);AED();}
function QK(b,c,d,e){var f;Io();if(!AWO){Hw(b,c,d,e);return;}a:{f=AUJ.ip();Gr();if(f!==AUc&&AUJ.ip()!==AUg){f=AUJ;if(f.ip()!==AUh){Qw(b,c,d,e);break a;}}Mo(b,c);}}
function Mo(b,c){var d,e,f,g,h,i,j;Io();d=AUN;e=c.hz();f=c.T();g=c.F();h=c.hA();i=c.iy();j=c.hC();d.hD(b,0,e,f,g,0,h,i,j);AUO.qe(b);}
function Qw(b,c,d,e){var f,g,h,i,j,k,l;Io();a:{if(!AUI.mk(B(334))){f=AUI;if(!f.mk(B(335))&&AUP===null){Hw(b,c,d,e);break a;}}f=AUN;g=c.hz();h=c.T();i=c.F();j=c.hA();k=c.iy();l=c.hC();f.hD(b,0,g,h,i,0,j,k,l);AUO.qe(b);}}
function Hw(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;Io();f=AUN;g=c.hz();h=c.T();i=c.F();j=c.hA();k=c.iy();l=c.hC();f.hD(b,0,g,h,i,0,j,k,l);if(AUO===null&&d!=e)H(BI(B(336)));m=c.T()/2|0;n=c.F()/2|0;o=1;while(m>0&&n>0){p=J$(m,n,c.eA());I5();p.sb(AU7);p.uf(c,0,0,c.T(),c.F(),0,0,m,n);if(o>1)c.J();f=AUN;j=p.hz();k=p.T();q=p.F();g=p.hA();h=p.iy();l=p.hC();f.hD(b,o,j,k,q,0,g,h,l);m=p.T()/2|0;n=p.F()/2|0;o=o+1|0;c=p;}}
function AED(){AWO=1;}
function OP(){N.call(this);this.vT=null;}
function ARV(a){var b=new OP();AAW(b,a);return b;}
function AAW(a,b){a.vT=b;U(a);}
function AAO(a,b){return 0;}
var Em=F(B4);
function K5(a,b,c,d){D6(a,b);a.C=c;a.Q=d;}
function AAE(b,c,d){return ARP(0,b.data.length,b,c,c+d|0,0);}
function AFS(b){return AAE(b,0,b.data.length);}
function ALr(a,b,c,d){var e,f,g,h,i;if(a.ce())H(C9());if(Bq(a)<d)H(G9());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)H(Bg((((((M()).a(B(337))).l(g)).a(B(330))).l(f)).d()));if(d<0)H(Bg(((((M()).a(B(331))).l(d)).a(B(332))).d()));h=a.C;i=0;while(i<d){g=h+1|0;f=c+1|0;a.lT(h,e[c]);i=i+1|0;h=g;c=f;}a.C=a.C+d|0;return a;}}e=b.data;H(Bg(((((((M()).a(B(333))).l(c)).a(B(42))).l(e.length)).a(B(250))).d()));}
function Sq(a){Ej(a);return a;}
function Sj(a){ES(a);return a;}
function AJn(a,b){Fr(a,b);return a;}
function AJ1(a,b){Eq(a,b);return a;}
function ALC(a){return Sj(a);}
function AOa(a){return Sq(a);}
function AFs(a,b){return a.wG(b);}
function UW(a,b){return a.wq(b);}
var D9=F(Em);
function ID(a,b,c,d){K5(a,b,c,d);}
function AIZ(a,b){if(b>=0&&b<a.Q)return a.of(b);H(Bg(((((((M()).a(B(293))).l(b)).a(B(42))).l(a.Q)).a(B(250))).d()));}
function AD_(a){return a.ep();}
function Ds(){var a=this;D9.call(a);a.ea=null;a.pU=0;a.d1=0;}
function IF(a,b,c,d,e,f,g){ID(a,c,e,f);a.d1=b;a.ea=d;a.pU=g;}
function ACj(a){return a.pU;}
var Kq=F(Ds);
function ASV(a,b,c,d,e,f){var g=new Kq();AEX(g,a,b,c,d,e,f);return g;}
function AEX(a,b,c,d,e,f,g){IF(a,b,c,d,e,f,g);}
function Yn(a,b){var c,d,e,f;c=a.ea.s.data;d=a.d1;e=b*2|0;f=c[d+e|0]&255|(a.ea.s.data[(a.d1+e|0)+1|0]&255)<<8;return f<<16>>16;}
function Xu(a,b,c){var d,e,f;d=a.ea.s.data;e=a.d1;f=b*2|0;d[e+f|0]=c<<24>>24;a.ea.s.data[(a.d1+f|0)+1|0]=c>>8<<24>>24;}
function NM(){N.call(this);this.w7=null;}
function AP7(a){var b=new NM();AAZ(b,a);return b;}
function AAZ(a,b){a.w7=b;U(a);}
function AJC(a,b){return NG(b);}
var C2=F(B4);
function Qm(a,b,c,d){D6(a,b);a.C=c;a.Q=d;}
function ANc(b,c,d){return AQ4(0,b.data.length,b,c,c+d|0,0);}
function UL(b){return ANc(b,0,b.data.length);}
function AGA(a,b,c,d){var e,f,g,h,i;if(a.ce())H(C9());if(Bq(a)<d)H(G9());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)H(Bg((((((M()).a(B(338))).l(g)).a(B(330))).l(f)).d()));if(d<0)H(Bg(((((M()).a(B(331))).l(d)).a(B(332))).d()));h=a.C;i=0;while(i<d){g=h+1|0;f=c+1|0;a.hs(h,e[c]);i=i+1|0;h=g;c=f;}a.C=a.C+d|0;return a;}}e=b.data;H(Bg(((((((M()).a(B(333))).l(c)).a(B(42))).l(e.length)).a(B(250))).d()));}
function O_(a){Ej(a);return a;}
function Lb(a){ES(a);return a;}
function ABB(a,b){Fr(a,b);return a;}
function AGX(a,b){Eq(a,b);return a;}
function ABX(a){return Lb(a);}
function AOz(a){return O_(a);}
function AH9(a,b){return a.ya(b);}
function ANn(a,b){return a.vO(b);}
var DD=F(C2);
function Ia(a,b,c,d){Qm(a,b,c,d);}
function ADy(a,b){if(b>=0&&b<a.Q)return a.kQ(b);H(Bg(((((((M()).a(B(293))).l(b)).a(B(42))).l(a.Q)).a(B(250))).d()));}
function ANY(a,b,c){if(a.ce())H(C9());if(b>=0&&b<a.Q){a.hs(b,c);return a;}H(Bg(((((((M()).a(B(293))).l(b)).a(B(42))).l(a.Q)).a(B(250))).d()));}
function ACA(a){var b,c,d,e;if(a.ce())H(C9());a:{b=Bq(a);if(a.C>0){c=a.C;d=0;while(true){if(d>=b)break a;e=c+1|0;a.hs(d,a.kQ(c));d=d+1|0;c=e;}}}a.C=b;a.Q=a.gY;a.eE=(-1);return a;}
function YT(a){return a.ep();}
function DE(){var a=this;DD.call(a);a.b7=null;a.tA=0;a.b2=0;}
function Jf(a,b,c,d,e,f,g){Ia(a,c,e,f);a.b2=b;a.b7=d;a.tA=g;}
function AHJ(a){return a.tA;}
function RH(){Ba.call(this);this.hP=0;}
function ARj(a){var b=new RH();ABi(b,a);return b;}
function ABi(a,b){BF(a);a.hP=b;}
function AEc(a,b,c,d){var e;e=!d.f3()?c.k():d.A();if(b>=e){d.bh(a.hP,0);return a.f.c(b,c,d);}if((e-b|0)==1&&c.h(b)==10){d.bh(a.hP,1);return a.f.c(b+1|0,c,d);}return (-1);}
function ABa(a,b){var c;c=!b.ds(a.hP)?0:1;b.bh(a.hP,(-1));return c;}
function St(){Bl.call(this);this.oz=0;}
function AI4(a){var b=new St();AGB(b,a);return b;}
function AGB(a,b){B8(a);a.oz=C5(CP(b));}
function TH(a,b,c){return a.oz!=C5(CP(c.h(b)))?(-1):1;}
function It(){var a=this;C.call(a);a.dm=null;a.z=0;a.sE=0;}
function Cu(){var a=new It();W1(a);return a;}
function AR8(a){var b=new It();Sv(b,a);return b;}
function AWP(a,b){var c=new It();He(c,a,b);return c;}
function W1(a){He(a,1,16);}
function Sv(a,b){He(a,1,b);}
function He(a,b,c){J(a);a.sE=b;a.dm=Bh(C,c);}
function AJI(a,b){var c,d,e;c=a.dm;d=c.data;if(a.z==d.length)c=a.oR(BB(8,a.z*1.75|0));d=c.data;e=a.z;a.z=e+1|0;d[e]=b;}
function ACx(a,b){a.xd(b.dm,0,b.z);}
function WG(a,b,c,d){var e,f,g;e=a.dm;f=e.data;g=a.z+d|0;if(g>f.length)e=a.oR(BB(BB(8,g),a.z*1.75|0));CB(b,c,e,a.z,d);a.z=g;}
function AM4(a,b){if(b<a.z)return a.dm.data[b];H(Bg((((((M()).a(B(339))).l(b)).a(B(340))).l(a.z)).d()));}
function YF(a,b,c){var d,e,f;a:{d=a.dm;if(!(!c&&b!==null)){e=0;f=a.z;while(e<f){if(d.data[e]===b){a.sR(e);return 1;}e=e+1|0;}}else{e=0;f=a.z;while(true){if(e>=f)break a;if(b.X(d.data[e])){a.sR(e);return 1;}e=e+1|0;}}}return 0;}
function AIr(a,b){var c,d,e;if(b>=a.z)H(Bg((((((M()).a(B(339))).l(b)).a(B(340))).l(a.z)).d()));c=a.dm;d=c.data;e=d[b];a.z=a.z-1|0;if(!a.sE)d[b]=d[a.z];else CB(c,b+1|0,c,b,a.z-b|0);d[a.z]=null;return e;}
function AAa(a){Xv(a.dm,0,a.z,null);a.z=0;}
function Zf(a,b){var c,d,e;c=a.dm;d=O6((Dl(c)).iL(),b);e=d.data;CB(c,0,d,0,By(a.z,e.length));a.dm=d;return d;}
function WB(a,b){var c;c=O6(b,a.z);CB(a.dm,0,c,0,a.z);return c;}
function Ii(){BO.call(this);this.oW=0;}
function AWQ(a){var b=new Ii();ST(b,a);return b;}
function ST(a,b){De(a,b);}
function U8(a,b,c,d){var e;e=a.hc();d.bh(e,b-d.ds(e)|0);a.oW=b;return b;}
function W4(a){return a.oW;}
function AHY(a,b){return 0;}
function Do(){Bk.call(this);this.tR=0;}
var AWR=null;var AVq=null;var AWS=null;var AWT=null;function TR(){TR=P(Do);ACC();}
function M2(a,b,c){var d=new Do();OI(d,a,b,c);return d;}
function OI(a,b,c,d){TR();BX(a,b,c);a.tR=d;}
function Jv(a){return a.tR;}
function ACC(){AWR=M2(B(341),0,33648);AVq=M2(B(342),1,33071);AWS=M2(B(343),2,10497);AWT=G(Do,[AWR,AVq,AWS]);}
function FJ(){Bf.call(this);this.go=0;}
function AG7(a){var b=new FJ();W$(b,a);return b;}
function W$(a,b){BZ(a);a.go=b;}
function AHH(a,b){a.f=b;}
function X0(a,b,c,d){var e,f,g;e=b+1|0;if(e>d.A()){d.dg=1;return (-1);}f=c.h(b);if(b>d.cW()){g=c.h(b-1|0);if(BH(g))return (-1);}if(a.go!=f)return (-1);return a.f.c(e,c,d);}
function ACg(a,b,c,d){var e,f,g,h,i;if(!(c instanceof Bv))return En(a,b,c,d);e=c;f=d.cW();g=d.A();while(true){if(b>=g)return (-1);h=e.ke(a.go,b);if(h<0)return (-1);if(h>f&&BH(e.h(h-1|0))){b=h+1|0;continue;}i=a.f;b=h+1|0;if(i.c(b,c,d)>=0)break;}return h;}
function Y_(a,b,c,d,e){var f,g,h;if(!(d instanceof Bv))return Es(a,b,c,d,e);f=e.cW();g=d;a:{while(true){if(c<b)return (-1);h=g.kT(a.go,c);if(h<0)break a;if(h<b)break a;if(h>f&&BH(g.h(h-1|0))){c=h+(-2)|0;continue;}if(a.f.c(h+1|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function US(a,b){if(b instanceof CI)return 0;if(b instanceof CA)return 0;if(b instanceof B9)return 0;if(b instanceof Cz)return 0;if(b instanceof FS)return 0;if(!(b instanceof FJ))return 1;return b.go!=a.go?0:1;}
function ALy(a,b){return 1;}
function Dc(){var a=this;BW.call(a);a.e6=null;a.dj=0;}
function AWU(a,b,c,d,e){var f=new Dc();EV(f,a,b,c,d,e);return f;}
function EV(a,b,c,d,e,f){D5(a,c,d,e);a.e6=b;a.dj=f;}
function AOJ(a,b,c,d){var e,f,g,h;e=d.sU(a.dj);if(!a.O.P(d))return a.f.c(b,c,d);if(e>=a.e6.f9())return a.f.c(b,c,d);f=a.dj;g=e+1|0;d.ef(f,g);h=a.O.c(b,c,d);if(h>=0){d.ef(a.dj,0);return h;}f=a.dj;g=g+(-1)|0;d.ef(f,g);if(g>=a.e6.g0())return a.f.c(b,c,d);d.ef(a.dj,0);return (-1);}
var IM=F(Dc);
function AWV(a,b,c,d,e){var f=new IM();PG(f,a,b,c,d,e);return f;}
function PG(a,b,c,d,e,f){EV(a,b,c,d,e,f);}
function Va(a,b,c,d){var e,f;e=d.sU(a.dj);if(!a.O.P(d))return a.f.c(b,c,d);if(e>=a.e6.f9()){d.ef(a.dj,0);return a.f.c(b,c,d);}if(e<a.e6.g0()){d.ef(a.dj,e+1|0);f=a.O.c(b,c,d);}else{f=a.f.c(b,c,d);if(f>=0){d.ef(a.dj,0);return f;}d.ef(a.dj,e+1|0);f=a.O.c(b,c,d);}return f;}
var IP=F();
var AWW=null;function ALb(){ALb=P(IP);Ze();}
function Ze(){var b,c,d;AWW=Cf(16384);b=0;while(b<16384){AWW.data[b]=Rz((b+0.5)/16384.0*6.2831854820251465);b=b+1|0;}b=0;while(b<360){c=AWW.data;d=b;c[(d*45.511112213134766|0)&16383]=Rz(d*0.01745329238474369);b=b+90|0;}}
var Hn=F(0);
var GA=F(0);
function E4(){FG.call(this);this.eJ=0;}
function Ot(a){Sl(a);}
function AAg(a){return APB(a);}
var IB=F(0);
function K2(){var a=this;E4.call(a);a.cp=null;a.cw=0;}
function AHG(){var a=new K2();AAX(a);return a;}
function AWX(a){var b=new K2();JY(b,a);return b;}
function AAX(a){JY(a,10);}
function JY(a,b){Ot(a);a.cp=Bh(C,b);}
function Vc(a,b){var c;if(a.cp.data.length<b){c=a.cp.data.length>=1073741823?2147483647:BB(b,BB(a.cp.data.length*2|0,5));a.cp=Oq(a.cp,c);}}
function AJl(a,b){Gx(a,b);return a.cp.data[b];}
function AHL(a){return a.cw;}
function AML(a,b){var c,d;a.eO(a.cw+1|0);c=a.cp.data;d=a.cw;a.cw=d+1|0;c[d]=b;a.eJ=a.eJ+1|0;return 1;}
function ADm(a,b,c){var d;Mp(a,b);a.eO(a.cw+1|0);d=a.cw;while(d>b){a.cp.data[d]=a.cp.data[d-1|0];d=d+(-1)|0;}a.cp.data[b]=c;a.cw=a.cw+1|0;a.eJ=a.eJ+1|0;}
function AJK(a,b){var c,d,e,f;Gx(a,b);c=a.cp.data[b];a.cw=a.cw-1|0;while(b<a.cw){d=a.cp.data;e=a.cp.data;f=b+1|0;d[b]=e[f];b=f;}a.cp.data[a.cw]=null;a.eJ=a.eJ+1|0;return c;}
function Gx(a,b){if(b>=0&&b<a.cw)return;H(Dq());}
function Mp(a,b){if(b>=0&&b<=a.cw)return;H(Dq());}
var NF=F(Be);
function AJ8(){var a=new NF();AE1(a);return a;}
function AE1(a){B7(a);}
function Db(){BU.call(this);this.fj=null;}
function AQi(a,b,c,d){var e=new Db();H8(e,a,b,c,d);return e;}
function H8(a,b,c,d,e){DX(a,c,d,e);a.fj=b;}
function VS(a,b,c,d){var e,f,g,h;e=a.fj.g0();f=a.fj.f9();g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.bd.bX()|0)>d.A())break a;h=a.bd.bt(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.f.c(b,c,d);if(h>=0)break;b=b-a.bd.bX()|0;g=g+(-1)|0;}return h;}if((b+a.bd.bX()|0)>d.A()){d.dg=1;return (-1);}h=a.bd.bt(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function B9(){var a=this;Bf.call(a);a.dX=null;a.w8=0;}
function ADW(a){var b=new B9();Qh(b,a);return b;}
function Qh(a,b){BZ(a);a.dX=b.h0();a.w8=b.bm;}
function ZW(a,b,c,d){var e,f,g,h,i,j;e=d.A();if(b<e){f=b+1|0;g=c.h(b);if(a.n(g)){h=a.f.c(f,c,d);if(h>0)return h;}if(f<e){i=f+1|0;j=c.h(f);if(Ee(g,j)&&a.n(CN(g,j)))return a.f.c(i,c,d);}}return (-1);}
function AAY(a,b){return a.dX.n(b);}
function Vx(a,b){if(b instanceof Cz)return Fo(a.dX,b.or());if(b instanceof CI)return Fo(a.dX,b.kg());if(b instanceof B9)return EC(a.dX,b.dX);if(!(b instanceof CA))return 1;return EC(a.dX,b.nn());}
function ADM(a){return a.dX;}
function AKS(a,b){a.f=b;}
function AAk(a,b){return 1;}
var Nz=F(Ec);
function AQn(a,b,c){var d=new Nz();AH3(d,a,b,c);return d;}
function AH3(a,b,c,d){Gw(a,b,c,d);}
function W6(a,b,c,d){var e;if(!a.O.P(d))return a.f.c(b,c,d);e=a.f.c(b,c,d);if(e<0)e=a.O.c(b,c,d);return e;}
function Bv(){var a=this;C.call(a);a.bM=null;a.iP=0;}
var AWY=null;function OV(){OV=P(Bv);AL9();}
function JO(a){var b=new Bv();GI(b,a);return b;}
function G$(a,b,c){var d=new Bv();Tl(d,a,b,c);return d;}
function GI(a,b){var c,d,e;OV();c=b.data;J(a);d=c.length;a.bM=BR(d);e=0;while(e<d){a.bM.data[e]=c[e];e=e+1|0;}}
function Tl(a,b,c,d){var e,f;OV();J(a);a.bM=BR(d);e=0;while(e<d){f=b.data;a.bM.data[e]=f[e+c|0];e=e+1|0;}}
function VM(a,b){if(b>=0&&b<a.bM.data.length)return a.bM.data[b];H(Hb());}
function AA$(a){return a.bM.data.length;}
function ADE(a){return a.bM.data.length?0:1;}
function AIg(a,b,c){var d,e,f;if((c+b.k()|0)>a.k())return 0;d=0;while(d<b.k()){e=b.h(d);f=c+1|0;if(e!=a.h(c))return 0;d=d+1|0;c=f;}return 1;}
function ADK(a,b){if(a===b)return 1;return a.tn(b,0);}
function ZV(a,b){var c,d,e,f;if(a===b)return 1;if(b.k()>a.k())return 0;c=0;d=a.k()-b.k()|0;while(d<a.k()){e=a.h(d);f=c+1|0;if(e!=b.h(c))return 0;d=d+1|0;c=f;}return 1;}
function AG4(a,b,c){var d,e,f,g;d=BB(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.bM.data.length)return (-1);if(a.bM.data[d]==e)break;d=d+1|0;}return d;}f=FA(b);g=F_(b);while(true){if(d>=(a.bM.data.length-1|0))return (-1);if(a.bM.data[d]==f&&a.bM.data[d+1|0]==g)break;d=d+1|0;}return d;}
function VT(a,b,c){var d,e,f,g,h,i;d=By(c,a.k()-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bM.data[d]==e)break;d=d+(-1)|0;}return d;}f=FA(b);g=F_(b);while(true){if(d<1)return (-1);if(a.bM.data[d]==g){h=a.bM.data;i=d-1|0;if(h[i]==f)break;}d=d+(-1)|0;}return i;}
function Zo(a,b,c){var d,e,f;d=BB(0,c);e=a.k()-b.k()|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=b.k())break a;if(a.h(d+f|0)!=b.h(f))break;f=f+1|0;}d=d+1|0;}return d;}
function ZM(a,b,c){var d,e;d=By(c,a.k()-b.k()|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.k())break a;if(a.h(d+e|0)!=b.h(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function UD(a,b,c){if(b>c)H(Dq());return G$(a.bM,b,c-b|0);}
function AC0(a,b){return a.gj(b,a.k());}
function Z8(a,b,c){return a.gj(b,c);}
function Ty(a,b){var c,d,e;c=a.k()-b.k()|0;d=0;while(d<=c){e=0;while(true){if(e>=b.k())return 1;if(a.h(d+e|0)!=b.h(e))break;e=e+1|0;}d=d+1|0;}return 0;}
function AJk(a,b,c){var d,e,f,g;d=M();e=a.k()-b.k()|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=b.k()){d.it(c);f=f+(b.k()-1|0)|0;break a;}if(a.h(f+g|0)!=b.h(g))break;g=g+1|0;}d.bZ(a.h(f));}f=f+1|0;}d.it(a.lw(f));return d.d();}
function AEb(a){var b,c;b=0;c=a.k()-1|0;a:{while(b<=c){if(a.h(b)>32)break a;b=b+1|0;}}while(b<=c&&a.h(c)<=32){c=c+(-1)|0;}return a.gj(b,c+1|0);}
function W7(a){return a;}
function ADH(a){var b,c,d;b=BR(a.bM.data.length);c=0;while(true){d=b.data;if(c>=d.length)break;d[c]=a.bM.data[c];c=c+1|0;}return b;}
function Is(b){OV();return ((M()).l(b)).d();}
function AMH(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bv))return 0;c=b;if(c.k()!=a.k())return 0;d=0;while(d<c.k()){if(a.h(d)!=c.h(d))return 0;d=d+1|0;}return 1;}
function AHc(a){var b,c,d,e;a:{if(!a.iP){b=a.bM.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.iP=(31*a.iP|0)+e|0;d=d+1|0;}}}return a.iP;}
function AEy(a,b){return Kx(YW(b),a.d());}
function AL9(){AWY=AQN();}
var H4=F(CW);
var AWZ=null;function AE7(){AE7=P(H4);AO7();}
function AP4(){var a=new H4();Qk(a);return a;}
function Qk(a){AE7();EU(a);}
function AEK(a,b){ANR(b);}
function AO7(){AWZ=AP4();}
var C0=F(0);
var Hq=F(0);
function NA(){var a=this;DI.call(a);a.tw=0;a.ng=0;a.lC=null;}
function ARJ(a,b,c,d,e,f){var g=new NA();ACr(g,a,b,c,d,e,f);return g;}
function ACr(a,b,c,d,e,f,g){Hc(a,c,e,f);a.ng=b;a.tw=g;a.lC=d;}
function AHa(a,b){return a.lC.data[b+a.ng|0];}
function AE5(a,b,c){a.lC.data[b+a.ng|0]=c;}
function TN(a){return a.tw;}
function FD(){var a=this;FF.call(a);a.qb=null;a.pl=null;}
function LV(a,b,c,d){NB(a,b,c,d);a.qb=BR(512);a.pl=Dv(512);}
function VU(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.qb;e=0;f=0;g=a.pl;a:{while(true){if((e+32|0)>f&&Dp(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=By(Bq(b)+j|0,i.length);b.wD(d,j,f-j|0);e=0;}if(!Dp(c)){if(!Dp(b)&&e>=f){Cb();k=AVm;}else{Cb();k=AVl;}break a;}i=g.data;l=0;m=By(Bq(c),i.length);n=ARU(b,c);k=a.uy(d,e,f,g,l,m,n);e=n.sY;j=n.tF;if(k===null){if(!Dp(b)&&e>=f){Cb();k=AVm;}else if(!Dp(c)&&e>=f){Cb();k=AVl;}}c.p5(g,0,j);if(k!==null)break;}}b.pq(Ca(b)-(f-e|0)|0);return k;}
var Ms=F(FD);
function ASv(a){var b=new Ms();AKG(b,a);return b;}
function AKG(a,b){LV(a,b,2.0,4.0);}
function AEp(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(h.oi(2))break a;Cb();i=AVl;break a;}k=e.data;n=f+1|0;k[f]=(192|l>>6)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else if(!Jm(l)){if((f+3|0)>g){j=j+(-1)|0;if(h.oi(3))break a;Cb();i=AVl;break a;}k=e.data;o=f+1|0;k[f]=(224|l>>12)<<24>>24;n=o+1|0;k[o]=(128|l>>6&63)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else{if
(!BH(l)){i=FV(1);break a;}if(j>=d){if(h.wh())break a;Cb();i=AVm;break a;}n=j+1|0;p=k[j];if(!BV(p)){j=n+(-2)|0;i=FV(1);break a;}if((f+4|0)>g){j=n+(-2)|0;if(h.oi(4))break a;Cb();i=AVl;break a;}k=e.data;q=CN(l,p);j=f+1|0;k[f]=(240|q>>18)<<24>>24;o=j+1|0;k[j]=(128|q>>12&63)<<24>>24;j=o+1|0;k[o]=(128|q>>6&63)<<24>>24;m=j+1|0;k[j]=(128|q&63)<<24>>24;j=n;}c=j;f=m;}j=c;}h.wR(j);h.uh(f);return i;}
var Fu=F();
function MN(a){J(a);}
var FM=F(0);
function Ea(){var a=this;Fu.call(a);a.lk=0;a.c_=null;a.rr=0.0;a.ps=0;a.iI=0;a.hS=0;a.tX=0;}
var AW0=null;var AW1=null;function Rf(){Rf=P(Ea);AN3();}
function AW2(){var a=new Ea();Fv(a);return a;}
function AW3(a){var b=new Ea();G4(b,a);return b;}
function Rh(b,c,d){Rf();return ARZ(b,c);}
function Fv(a){Rf();G4(a,11);}
function G4(a,b){Rf();MN(a);a.hS=(-1);if(b<0)H(CR());a.lk=0;if(!b)b=1;a.c_=JB(a,b);a.iI=a.c_.data.length;a.rr=0.75;GQ(a);}
function JB(a,b){return Bh(Ht,b);}
function GQ(a){a.ps=a.c_.data.length*a.rr|0;}
function AIe(a,b,c){var d,e,f,g,h,i,j;ASl(a);try{if(b!==null&&c!==null){d=b.d9();e=d&2147483647;f=e%a.c_.data.length|0;g=a.c_.data[f];while(g!==null&&!g.wa(b,d)){g=g.ko;}if(g!==null){h=g.e7;g.e7=c;return h;}a.tX=a.tX+1|0;i=a.lk+1|0;a.lk=i;if(i>a.ps){a.jk();f=e%a.c_.data.length|0;}if(f<a.iI)a.iI=f;if(f>a.hS)a.hS=f;j=Rh(b,c,d);j.ko=a.c_.data[f];a.c_.data[f]=j;return null;}H(WP());}finally{ATi(a);}}
function AFo(a){var b,c,d,e,f,g,h,i,j;b=(a.c_.data.length<<1)+1|0;if(!b)b=1;c=(-1);d=JB(a,b);e=a.hS+1|0;f=b;while(true){e=e+(-1)|0;if(e<a.iI)break;g=a.c_.data[e];while(g!==null){h=(g.xl()&2147483647)%b|0;if(h<f)f=h;if(h>c)c=h;i=d.data;j=g.ko;g.ko=i[h];i[h]=g;g=j;}}a.iI=f;a.hS=c;a.c_=d;GQ(a);}
function AN3(){AW0=AR$();AW1=AQY();}
function Qz(){Ea.call(this);this.x4=null;}
function AQ_(){var a=new Qz();AHE(a);return a;}
function ARh(a){var b=new Qz();AC_(b,a);return b;}
function AHE(a){Fv(a);}
function AC_(a,b){Fv(a);a.x4=b;}
var Lf=F(Ba);
function AP1(){var a=new Lf();AOr(a);return a;}
function AOr(a){BF(a);}
function AD5(a,b,c,d){return b;}
function AHQ(a,b){return 0;}
function RW(){var a=this;DD.call(a);a.q_=0;a.oa=0;a.mt=null;}
function AQ4(a,b,c,d,e,f){var g=new RW();XQ(g,a,b,c,d,e,f);return g;}
function XQ(a,b,c,d,e,f,g){Ia(a,c,e,f);a.oa=b;a.q_=g;a.mt=d;}
function AIm(a,b){return a.mt.data[b+a.oa|0];}
function AHk(a,b,c){a.mt.data[b+a.oa|0]=c;}
function AHB(a){return a.q_;}
function Id(){var a=this;C.call(a);a.bN=null;a.eV=0;a.lU=null;a.h5=null;a.gi=null;a.iR=null;a.d0=null;a.eo=null;a.d8=null;a.eQ=null;a.xE=null;a.eI=0.0;a.c4=null;a.iZ=0;a.nu=0;}
var AW4=null;function Gu(){Gu=P(Id);Yt();}
function ATm(a,b){var c=new Id();M8(c,a,b);return c;}
function AW5(a,b,c){var d=new Id();Iu(d,a,b,c);return d;}
function M8(a,b,c){Gu();Iu(a,b,Lj(),c);}
function Iu(a,b,c,d){var e,f,g,h,i,j,k;Gu();J(a);a.lU=B6();a.h5=B6();a.gi=Cu();a.iR=B6();a.d8=AR8(8);a.eQ=AQP(8);a.xE=Cy(1.0,1.0,1.0,1.0);a.eI=AVU;a.c4=null;a.iZ=0;a.nu=0;a.d0=c;if(d&&b>8191)H(Bp((((M()).a(B(344))).l(b)).d()));a.bN=Wz(1,BP(b,!d?6:4),!d?0:b*6|0,G(D4,[CJ(1,2,B(255)),CJ(4,4,B(257)),CJ(16,2,B(345))]));a.bN.z_(0);if(d){e=b*6|0;f=MO(e);g=0;h=0;while(h<e){i=f.data;i[h+0|0]=g;i[h+1|0]=(g+1|0)<<16>>16;j=h+2|0;k=(g+2|0)<<16>>16;i[j]=k;i[h+3|0]=k;i[h+4|0]=(g+3|0)<<16>>16;i[h+5|0]=g;h=h+6|0;g=(g+4|0)<<
16>>16;}a.bN.q4(f);}a.h5.fM(0.0,0.0,AUI.T(),AUI.F());}
function ALk(a){if(a.eV)H(BN(B(346)));if(a.eo!==null)H(BN(B(347)));a.bN.cX();a.eo=ASn(a.gi.z,Bi(a.bN.gv()));a.gi.cr(a.eo);(a.bN.gv()).u6();}
function ACV(a){var b,c,d,e,f,g;if(a.eo===null)H(BN(B(348)));b=a.eo;c=Ca(a.bN.gv())-b.ji|0;if(b.gD===null){b.j3=c;b.dC=a.d8.z;b.gD=a.d8.v8(E(EM));b.fH=W(b.dC);d=0;e=a.eQ.cG;while(d<e){b.fH.data[d]=a.eQ.bU(d);d=d+1|0;}(a.bN.gv()).b8();}else{if(c>b.j3)H(BI(((((((M()).a(B(349))).l(c)).a(B(350))).l(b.j3)).a(B(351))).d()));b.dC=a.d8.z;if(b.gD.data.length<b.dC)b.gD=Bh(EM,b.dC);d=0;e=b.dC;while(d<e){b.gD.data[d]=a.d8.R(d);d=d+1|0;}if(b.fH.data.length<b.dC)b.fH=W(b.dC);d=0;e=b.dC;while(d<e){b.fH.data[d]=a.eQ.bU(d);d
=d+1|0;}f=a.bN.gv();f.cj(0);g=a.gi.R(a.gi.z-1|0);f.bY(g.ji+g.j3|0);}a.eo=null;a.d8.fJ();a.eQ.fJ();return b.qh;}
function Zq(a,b,c,d,e){var f,g,h;if(a.eo===null)H(BN(B(352)));f=a.bN.cX()<=0?6:4;g=(e/(f*5|0)|0)*6|0;h=a.d8.z-1|0;if(h>=0&&a.d8.R(h)===b)a.eQ.wX(h,g);else{a.d8.cr(b);a.eQ.no(g);}(a.bN.gv()).lM(c,d,e);}
function ACs(a,b,c,d,e,f){var g,h,i,j,k,l;g=c+e;h=d+f;i=b.ft;j=b.gV;k=b.gW;l=b.fv;Gu();AW4.data[0]=c;AW4.data[1]=d;AW4.data[2]=a.eI;AW4.data[3]=i;AW4.data[4]=j;AW4.data[5]=c;AW4.data[6]=h;AW4.data[7]=a.eI;AW4.data[8]=i;AW4.data[9]=l;AW4.data[10]=g;AW4.data[11]=h;AW4.data[12]=a.eI;AW4.data[13]=k;AW4.data[14]=l;if(a.bN.cX()>0){AW4.data[15]=g;AW4.data[16]=d;AW4.data[17]=a.eI;AW4.data[18]=k;AW4.data[19]=j;a.ts(b.cz,AW4,0,20);}else{AW4.data[15]=g;AW4.data[16]=h;AW4.data[17]=a.eI;AW4.data[18]=k;AW4.data[19]=l;AW4.data[20]
=g;AW4.data[21]=d;AW4.data[22]=a.eI;AW4.data[23]=k;AW4.data[24]=j;AW4.data[25]=c;AW4.data[26]=d;AW4.data[27]=a.eI;AW4.data[28]=i;AW4.data[29]=j;a.ts(b.cz,AW4,0,30);}}
function Zp(a){if(a.eV)H(BN(B(353)));if(a.eo!==null)H(BN(B(354)));a.iZ=0;(a.iR.fi(a.h5)).od(a.lU);AUO.kd(0);if(a.c4===null){a.d0.cR();a.d0.fu(B(355),a.iR);a.d0.hW(B(356),0);a.bN.n2(a.d0);}else{a.c4.cR();a.c4.fu(B(357),a.h5);a.c4.fu(B(358),a.lU);a.c4.fu(B(359),a.iR);a.c4.hW(B(356),0);a.bN.n2(a.c4);}a.eV=1;}
function AGi(a){var b;if(!a.eV)H(BN(B(360)));a.eV=0;b=AUO;b.kd(1);if(a.c4===null)a.bN.nE(a.d0);else a.bN.nE(a.c4);}
function AOu(a,b){var c,d,e,f,g,h,i,j,k;if(!a.eV)H(BN(B(361)));c=a.gi.R(b);d=a.bN.cX()<=0?6:4;e=(c.ji/(d*5|0)|0)*6|0;f=c.gD;g=c.fH;h=c.dC;i=0;while(i<h){j=f.data;k=g.data[i];j[i].cR();if(a.c4===null)a.bN.mE(a.d0,4,e,k);else a.bN.mE(a.c4,4,e,k);e=e+k|0;i=i+1|0;}a.iZ=a.iZ+h|0;a.nu=a.nu+h|0;}
function ANZ(a){a.bN.J();if(a.d0!==null)a.d0.J();}
function V1(a,b){if(!a.eV){a.h5.fi(b);return;}H(BN(B(362)));}
function Lj(){var b,c,d;Gu();b=B(363);c=B(364);d=Np(b,c);if(d.km())return d;H(Bp((((M()).a(B(283))).a(d.jv())).d()));}
function Yt(){AW4=Cf(30);}
var GG=F(Dc);
function AW6(a,b,c,d,e){var f=new GG();PJ(f,a,b,c,d,e);return f;}
function PJ(a,b,c,d,e,f){EV(a,b,c,d,e,f);Gk();c.E(AUG);}
function ACU(a,b,c,d){var e,f,g;e=0;f=a.e6.f9();a:{while(true){g=a.O.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.e6.g0())return (-1);return a.f.c(b,c,d);}
function Cc(){Bk.call(this);this.rf=0;}
var AVp=null;var AW7=null;var AW8=null;var AW9=null;var AW$=null;var AW_=null;var AXa=null;var AXb=null;function X2(){X2=P(Cc);Wy();}
function DY(a,b,c){var d=new Cc();JH(d,a,b,c);return d;}
function JH(a,b,c,d){X2();BX(a,b,c);a.rf=d;}
function I2(a){return a.rf;}
function Wy(){AVp=DY(B(365),0,9728);AW7=DY(B(366),1,9729);AW8=DY(B(367),2,9987);AW9=DY(B(368),3,9984);AW$=DY(B(369),4,9985);AW_=DY(B(370),5,9986);AXa=DY(B(371),6,9987);AXb=G(Cc,[AVp,AW7,AW8,AW9,AW$,AW_,AXa]);}
var Jx=F(EW);
var AVx=null;function AAR(){AAR=P(Jx);Z2();}
function AS9(){var a=new Jx();SC(a);return a;}
function SC(a){AAR();LS(a,B(372),Bh(Bv,0));}
function ANf(a){return ASv(a);}
function Z2(){AVx=AS9();}
var HQ=F(0);
function JQ(){Ba.call(this);this.fo=0;}
function APn(a){var b=new JQ();AOP(b,a);return b;}
function AOP(a,b){BF(a);a.fo=b;}
function ACY(a,b,c,d){var e,f,g;e=!d.f3()?c.k()-b|0:d.cW()-b|0;if(!e){d.bh(a.fo,0);return a.f.c(b,c,d);}if(e<2){f=c.h(b);g=97;}else{f=c.h(b);g=c.h(b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:d.bh(a.fo,0);return a.f.c(b,c,d);case 13:if(g!=10){d.bh(a.fo,0);return a.f.c(b,c,d);}d.bh(a.fo,0);return a.f.c(b,c,d);default:}return (-1);}
function X6(a,b){var c;c=!b.ds(a.fo)?0:1;b.bh(a.fo,(-1));return c;}
function S9(){var a=this;C.call(a);a.n6=null;a.iY=null;a.mg=null;a.mP=null;a.li=null;a.ks=null;}
function ARX(a){var b=new S9();AJm(b,a);return b;}
function AJm(a,b){J(a);a.n6=DP();a.iY=DP();a.mg=DP();a.mP=DP();a.li=DP();a.ks=b;}
function W3(a,b){(C7()).q$((((M()).a(a.ks)).a(b)).d(),APo(a,b));}
function AKr(a,b,c,d,e){(C7()).y_((((M()).a(a.ks)).a(b)).d(),c,d,AQ2(a,e,c,b));}
function AKa(a,b,c){(C7()).l2((((M()).a(a.ks)).a(b)).d(),c);}
function AEW(a,b){var c,d;a:{if(!a.mP.g_(b)&&!a.iY.g_(b)&&!a.li.g_(b)&&!a.mg.g_(b)){c=a.n6;if(!c.g_(b)){d=0;break a;}}d=1;}return d;}
function LR(){N.call(this);this.xO=null;}
function ARG(a){var b=new LR();AE9(b,a);return b;}
function AE9(a,b){a.xO=b;U(a);}
function AMC(a,b){return S1(b);}
var Pt=F(D3);
function APJ(a,b,c,d,e,f){var g=new Pt();ZI(g,a,b,c,d,e,f);return g;}
function ZI(a,b,c,d,e,f,g){GC(a,b,c,d,e,f,g);}
function ALg(a,b){var c,d,e;c=a.b3.s.data;d=a.b4;e=b*4|0;return (c[d+e|0]&255)<<24|(a.b3.s.data[(a.b4+e|0)+1|0]&255)<<16|(a.b3.s.data[(a.b4+e|0)+2|0]&255)<<8|a.b3.s.data[(a.b4+e|0)+3|0]&255;}
function VN(a,b,c){var d,e,f;d=a.b3.s.data;e=a.b4;f=b*4|0;d[e+f|0]=c>>24<<24>>24;a.b3.s.data[(a.b4+f|0)+1|0]=c>>16<<24>>24;a.b3.s.data[(a.b4+f|0)+2|0]=c>>8<<24>>24;a.b3.s.data[(a.b4+f|0)+3|0]=c<<24>>24;}
function Pj(){var a=this;Cp.call(a);a.np=null;a.gA=null;a.i9=0.0;}
function PD(a){var b=new Pj();AN5(b,a);return b;}
function AN5(a,b){El(a,b);a.i9=0.0;}
function AFa(a){a.np=Ew(Ex(AUM.fy(B(373))),0,0,480,320);a.gA=Gz();(a.gA.kf()).fM(0.0,0.0,480.0,320.0);}
function TE(a,b){AUN.ij(16384);a.gA.el();a.gA.dd(a.np,0.0,0.0);a.gA.dM();a.i9=a.i9+b;if(a.i9>1.0&&!(!AUL.ct((-1))&&!AUL.nT()))a.c$.f6(AQF(a.c$));}
function AFw(a){AUJ.fk(B(242),B(374));a.gA.J();(a.np.fL()).J();}
function O4(){var a=this;BQ.call(a);a.oO=null;a.ld=null;}
function APo(a,b){var c=new O4();X3(c,a,b);return c;}
function X3(a,b,c){a.ld=b;a.oO=c;Di(a);}
function AKD(a,b){}
function AGH(a,b){(CS()).d$((((M()).a(B(375))).a(a.oO)).d());}
function AGv(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=c.tT(B(376));e=d.data;f=new It;g=e.length;Sv(f,g);h=0;while(true){if(h>=g){i=0;while(i<f.z){j=f.R(i);if(a.ld.zB(j.k3)){j.vH=j.pC;j.zS=1;}else a.ld.zQ(j.k3,j.sC,j.sP,ASK(a));i=i+1|0;}return 0;}k=e[h];l=k.tT(B(377));m=l.data;if(m.length!=4)break;L6();n=AVL;if(m[0].X(B(306)))n=AVJ;if(m[0].X(B(312)))n=AVM;if(m[0].X(B(308)))n=AVK;if(m[0].X(B(79)))n=AVN;o=So(m[2]);if(n===AVK&&!(C7()).xY())o=Cs;f.cr(ASW(m[1].vU(),n,o,m[3]));h=h+1|0;}H(BI(B(378)));}
function AA_(a,b,c){return a.xW(b,c);}
var Pf=F(Be);
function AI6(a){var b=new Pf();AKR(b,a);return b;}
function WP(){var a=new Pf();XL(a);return a;}
function AKR(a,b){Eb(a,b);}
function XL(a){B7(a);}
var Il=F();
var AXc=null;function ATp(){ATp=P(Il);VX();}
function VX(){AXc=W((Hz()).data.length);AXc.data[Y(AVL)]=1;AXc.data[Y(AVJ)]=2;AXc.data[Y(AVM)]=3;AXc.data[Y(AVK)]=4;AXc.data[Y(AVN)]=5;}
function O5(){var a=this;BQ.call(a);a.k0=null;a.ox=null;a.gH=null;a.fR=null;}
function AQ2(a,b,c,d){var e=new O5();ACk(e,a,b,c,d);return e;}
function ACk(a,b,c,d,e){a.fR=b;a.k0=c;a.ox=d;a.gH=e;Di(a);}
function AMS(a,b){a.k0.dW(b);}
function WT(a,b){a.k0.cQ(b);}
function ALp(a,b,c){a:{ATp();switch(AXc.data[Y(a.ox)]){case 1:a.fR.mP.bn(a.gH,c);break a;case 2:break;case 3:a.fR.li.bn(a.gH,c);break a;case 4:a.fR.mg.bn(a.gH,null);break a;case 5:a.fR.n6.bn(a.gH,null);break a;default:break a;}a.fR.iY.bn(a.gH,c);}a.k0.cU(b,c);return 0;}
function Mv(){N.call(this);this.wt=null;}
function AS5(a){var b=new Mv();ABl(b,a);return b;}
function ABl(a,b){a.wt=b;U(a);}
function AIP(a,b){return Hu(b);}
function L5(){var a=this;C.call(a);a.dc=null;a.rQ=null;a.cb=null;a.co=0;}
function AQX(){var a=new L5();AOK(a);return a;}
function AOK(a){J(a);a.cb=Cw();}
var Ob=F();
function Rz(b){return Math.sin(b);}
function Gl(b){return Math.sqrt(b);}
function Hs(b){return Math.ceil(b);}
function DG(b){return Math.floor(b);}
function TP(b,c){return Math.atan2(b,c);}
function C3(b){return b+AEd(b)*0.5|0;}
function By(b,c){if(b<c)c=b;return c;}
function BB(b,c){if(b>c)c=b;return c;}
function I4(b,c){if(b<c)c=b;return c;}
function JS(b){if(b<=0)b= -b|0;return b;}
function EE(b){if(b<=0.0)b= -b;return b;}
function AEd(b){var c;c=Cm(b,0.0);if(c>0)b=1.0;else if(c<0)b=(-1.0);return b;}
function RX(){var a=this;C.call(a);a.nM=Cs;a.oD=0;}
function APR(){var a=new RX();AM7(a);return a;}
function AXd(a){var b=new RX();Pz(b,a);return b;}
function AM7(a){Pz(a,2147483647);}
function Pz(a,b){J(a);a.oD=b;a.nM=Ci();}
function X_(a){var b,c;b=Ci();if(AQc(ACT(b,a.nM),T(1000000000))){c=AUI.wB();if(c<a.oD){AUJ.nX(B(379),(((M()).a(B(380))).l(c)).d());a.nM=b;}}}
function LT(){var a=this;C.call(a);a.di=null;a.da=null;a.c6=null;a.i0=0;a.pr=0;a.uE=0;a.lt=0;a.gk=0;a.jp=0;}
function AS6(a,b,c){var d=new LT();AF5(d,a,b,c);return d;}
function AF5(a,b,c,d){J(a);a.gk=0;a.jp=0;a.uE=b;a.di=d;a.c6=Hm(BP(a.di.ca,c));a.pr=1;a.lt=!b?35048:35044;a.da=a.c6.om();a.i0=SR(a);a.da.b8();a.c6.b8();}
function SR(a){var b;b=AUO.gL();AUO.bS(34962,b);AUO.d4(34962,DC(a.c6),null,a.lt);AUO.bS(34962,0);return b;}
function Xq(a){return a.di;}
function Yv(a){return (Bi(a.da)*4|0)/a.di.ca|0;}
function AFj(a){a.gk=1;return a.da;}
function PH(a){if(a.jp){AUO.lq(34962,0,Bi(a.c6),a.c6);a.gk=0;}}
function Wg(a,b,c,d){a.gk=1;if(a.pr){I6(b,a.c6,d,c);a.da.cj(0);a.da.bY(d);}else{a.da.cm();a.da.lM(b,c,d);a.da.b8();a.c6.cj(0);a.c6.bY(Bi(a.da)<<2);}PH(a);}
function AGK(a,b,c){var d,e,f,g,h,i;d=AUO;d.bS(34962,a.i0);if(a.gk){a.c6.bY(Bi(a.da)*4|0);d.d4(34962,Bi(a.c6),a.c6,a.lt);a.gk=0;}a:{e=CQ(a.di);if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data;h=B$(a.di,f);i=g[f];if(i>=0){b.hx(i);b.fp(i,h.dr,h.hL,h.iQ,a.di.ca,h.db);}f=f+1|0;}}f=0;while(f<e){h=B$(a.di,f);i=b.jz(h.fn);if(i>=0){b.hx(i);b.fp(i,h.dr,h.hL,h.iQ,a.di.ca,h.db);}f=f+1|0;}}a.jp=1;}
function AAn(a,b,c){var d,e,f,g;a:{d=AUO;e=CQ(a.di);if(c===null){f=0;while(f<e){b.pE((B$(a.di,f)).fn);f=f+1|0;}}else{f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0)b.ma(g);f=f+1|0;}}}d.bS(34962,0);a.jp=0;}
function ABm(a){var b;b=AUO;b.bS(34962,0);b.hh(a.i0);a.i0=0;}
var Ic=F(0);
var JI=F();
function Tx(){var b;b=AKj();return b;}
function AKj(){var userAgent=navigator.userAgent.toLowerCase();return {firefox:userAgent.indexOf('firefox')!= -1,chrome:userAgent.indexOf('chrome')!= -1,safari:userAgent.indexOf('safari')!= -1,opera:userAgent.indexOf('opera')!= -1,IE:userAgent.indexOf('msie')!= -1,macOS:userAgent.indexOf('mac')!= -1,linux:userAgent.indexOf('linux')!= -1,windows:userAgent.indexOf('win')!= -1};}
var MY=F(O);
function APV(){var a=new MY();AJx(a);return a;}
function AJx(a){X(a);}
function AGQ(a){var b;b=ARu(a);b.U=1;return b;}
var GN=F(0);
function Ja(){var a=this;CV.call(a);a.sf=null;a.j4=null;a.hJ=0;}
function Bn(a,b,c){var d=new Ja();Kz(d,a,b,c);return d;}
function Kz(a,b,c,d){E6(a);a.hJ=(-1);a.sf=b;a.j4=c;a.hJ=d;}
function ANs(a){var b,c;b=B(45);if(a.hJ>=1){c=BR(a.hJ);AIC(c,32);b=JO(c);}return (((M()).a(a.sf)).a(a.j4!==null&&a.j4.k()?((((((M()).l(a.hJ)).a(B(381))).a(a.j4)).a(B(381))).a(b)).d():B(45))).d();}
var Rt=F(O);
function ARl(){var a=new Rt();Yd(a);return a;}
function Yd(a){X(a);}
function YJ(a){var b;b=ATo(a);b.br.kx(0,2048);b.U=1;return b;}
var FB=F(0);
var C8=F(Bk);
var AXe=null;var AXf=null;var AXg=null;var AXh=null;var AXi=null;function HJ(){HJ=P(C8);AM2();}
function GB(a,b){var c=new C8();K1(c,a,b);return c;}
function SK(){HJ();return AXi.fB();}
function K1(a,b,c){HJ();BX(a,b,c);}
function AM2(){AXe=GB(B(382),0);AXf=GB(B(383),1);AXg=GB(B(384),2);AXh=GB(B(385),3);AXi=G(C8,[AXe,AXf,AXg,AXh]);}
function Jz(){var a=this;C.call(a);a.m9=0;a.ek=null;a.ey=null;a.qW=0.0;a.os=0;a.nQ=0;a.gB=0;}
var AXj=null;function AJO(){AJO=P(Jz);ZF();}
function DP(){var a=new Jz();Rr(a);return a;}
function AXk(a,b){var c=new Jz();Ij(c,a,b);return c;}
function Rr(a){AJO();Ij(a,51,0.800000011920929);}
function Ij(a,b,c){var d;AJO();J(a);if(c>0.0&&c<1.0){a.qW=c;d=F7(b,c);a.os=d*c|0;a.gB=d-1|0;a.nQ=CE(T(a.gB));a.ek=Bh(C,d);a.ey=Bh(C,d);return;}H(Bp((((M()).a(B(17))).hF(c)).d()));}
function Xp(a,b){return DB(Cd(C1(T(b.d9()),BK(2135587861, 2654435769)),a.nQ));}
function AB6(a,b){var c,d,e;if(b===null)H(Bp(B(386)));c=a.ek;d=a.ht(b);while(true){e=c.data[d];if(e===null)return  -(d+1|0)|0;if(e.X(b))break;d=(d+1|0)&a.gB;}return d;}
function AKm(a,b,c){var d,e,f;d=a.g5(b);if(d>=0){e=a.ey.data[d];a.ey.data[d]=c;return e;}f= -(d+1|0)|0;a.ek.data[f]=b;a.ey.data[f]=c;f=a.m9+1|0;a.m9=f;if(f>=a.os)LZ(a,a.ek.data.length<<1);return null;}
function Mu(a,b,c){var d,e,f;d=a.ek;e=a.ht(b);while(true){f=d.data;if(f[e]===null)break;e=(e+1|0)&a.gB;}f[e]=b;a.ey.data[e]=c;}
function Wm(a,b){var c;c=a.g5(b);return c<0?null:a.ey.data[c];}
function AMD(a,b){return a.g5(b)<0?0:1;}
function LZ(a,b){var c,d,e,f,g;a:{c=a.ek.data.length;a.os=b*a.qW|0;a.gB=b-1|0;a.nQ=CE(T(a.gB));d=a.ek;e=a.ey;a.ek=Bh(C,b);a.ey=Bh(C,b);if(a.m9>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g!==null)Mu(a,g,e.data[f]);f=f+1|0;}}}}
function ZF(){AXj=Y9();}
function N7(){var a=this;C.call(a);a.e=null;a.cB=0;a.lG=null;a.o7=0;a.d5=0;a.eD=0;a.bB=0;a.mV=null;}
function APp(){var a=new N7();Up(a);return a;}
function NC(a,b){return AQx(a,b);}
function Ky(a,b,c){var d,e,f,g,h,i;d=AHG();e=NC(a,b);f=0;g=0;if(!b.k()){h=Bh(Bv,1);h.data[0]=B(45);return h;}while(Nu(e)){i=f+1|0;if(i>=c&&c>0)break;d.kh((b.nC(g,SI(e))).d());g=MQ(e);f=i;}a:{d.kh((b.nC(g,b.k())).d());i=f+1|0;if(!c)while(true){i=i+(-1)|0;if(i<0)break;if(((d.R(i)).d()).k())break a;d.iz(i);}}if(i<0)i=0;return d.xj(Bh(Bv,i));}
function Kx(a,b){return Ky(a,b,0);}
function Fg(a){return a.e.d();}
function ZE(b,c){if(b===null)H(AI6(B(387)));if(c&&(c|255)!=255)H(Bp(B(45)));LY();AT6=1;return Na(APp(),b,c);}
function Na(a,b,c){a.e=AQu(b,c);a.cB=c;a.mV=Jw(a,(-1),a.cB,null);if(a.e.bJ()){MV(a);return a;}H(Bn(B(45),a.e.d(),a.e.c2()));}
function SB(a,b){var c,d,e;c=ASX(Br(a,2),Br(a,64));while(!a.e.bJ()){d=a.e;if(!d.fq())break;d=a.e;if(d.ci()&&a.e.ci()!=(-536870788)){d=a.e;if(d.ci()!=(-536870871))break;}c.cc(a.e.u());if(a.e.bF()!=(-536870788))continue;a.e.u();}e=FC(a,c);e.E(b);return e;}
function Jw(a,b,c,d){var e,f,g,h,i,j;e=AHG();f=a.cB;g=0;if(c!=a.cB)a.cB=c;a:{switch(b){case -1073741784:h=new H1;i=a.bB+1|0;a.bB=i;Po(h,i);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new HA;i=a.bB+1|0;a.bB=i;R_(h,i);break a;case -33554392:h=new Ii;i=a.bB+1|0;a.bB=i;ST(h,i);break a;default:a.d5=a.d5+1|0;if(d!==null)h=ASm(a.d5);else{h=AQM();g=1;}if(a.d5<=(-1))break a;if(a.d5>=10)break a;a.lG.data[a.d5]=h;break a;}h=APk();}while(true){if(a.e.fq()&&a.e.ci()==(-536870788))j=SB(a,
h);else if(a.e.bF()==(-536870788)){j=D0(h);a.e.u();}else{j=Hf(a,h);if(a.e.bF()==(-536870788))a.e.u();}if(j!==null)e.kh(j);if(a.e.bJ())break;if(a.e.bF()==(-536870871))break;}if(a.e.vY()==(-536870788))e.kh(D0(h));if(a.cB!=f&&!g){a.cB=f;a.e.vD(a.cB);}switch(b){case -1073741784:break;case -536870872:return AQb(e,h);case -268435416:return APd(e,h);case -134217688:return AP6(e,h);case -67108824:return AQB(e,h);case -33554392:return APx(e,h);default:switch(e.cT()){case 0:break;case 1:return ARS(e.R(0),h);default:return AQ9(e,
h);}return D0(h);}return ATd(e,h);}
function QR(a){var b,c,d;b=ASg();while(!a.e.bJ()){c=a.e;if(!c.fq())break;c=a.e;if(c.sJ())break;c=a.e;if(c.tN())break;c=a.e;if(!(!c.lE()&&!a.e.ci())){c=a.e;if(!(!c.lE()&&Fs(a.e.ci()))){c=a.e;if(c.ci()!=(-536870871)){c=a.e;if((c.ci()&(-2147418113))!=(-2147483608)){c=a.e;if(c.ci()!=(-536870788)){c=a.e;if(c.ci()!=(-536870876))break;}}}}}d=a.e.u();if(!Ga(d))b.xP(d&65535);else b.yJ(DL(d));}if(!Br(a,2))return AQT(b);if(Br(a,64))return ATt(b);return ATC(b);}
function QX(a){var b,c,d,e,f,g,h,i,j,k;b=W(4);c=0;d=(-1);e=(-1);if(!a.e.bJ()&&a.e.fq()){f=b.data;d=a.e.u();f[c]=d;e=d-4352|0;}if(e>=0&&e<19){g=BR(3);f=g.data;f[c]=d&65535;h=a.e.bF();i=h-4449|0;if(i>=0&&i<21){f[1]=h&65535;a.e.u();j=a.e.bF();h=j-4519|0;if(h>=0&&h<28){f[2]=j&65535;a.e.u();return AL1(g,3);}return AL1(g,2);}if(!Br(a,2))return Mt(f[0]);if(Br(a,64))return AI4(f[0]);return Xm(f[0]);}k=1;while(k<4&&!a.e.bJ()&&a.e.fq()){f=b.data;j=k+1|0;f[k]=a.e.u();k=j;}if(k==1){f=b.data;if(!AEZ(f[0]))return Jr(a,f[0]);}if
(!Br(a,2))return ATv(b,k);if(Br(a,64))return AS0(b,k);return AQ$(b,k);}
function Hf(a,b){var c,d,e,f;if(a.e.fq()&&!a.e.lE()&&Fs(a.e.ci())){if(!Br(a,128)){if(!a.e.sJ()&&!a.e.tN())c=QR(a);else{d=Jn(a,b);c=Gf(a,b,d);}}else{c=QX(a);if(!a.e.bJ()){e=a.e;if(!(e.bF()==(-536870871)&&!(b instanceof DV))){e=a.e;if(e.bF()!=(-536870788)&&!a.e.fq())c=Gf(a,b,c);}}}}else if(a.e.bF()!=(-536870871)){d=Jn(a,b);c=Gf(a,b,d);}else{if(b instanceof DV)H(Bn(B(45),a.e.d(),a.e.c2()));c=D0(b);}a:{if(!a.e.bJ()){e=a.e;if(!(e.bF()==(-536870871)&&!(b instanceof DV))){e=a.e;if(e.bF()!=(-536870788)){f=Hf(a,b);if
(c instanceof BU&&!(c instanceof Db)&&!(c instanceof BW)&&!(c instanceof C_)){e=c;if(!f.bT(e.kF()))c=AP0(e);}if((f.gM()&65535)!=43)c.E(f);else c.E(f.kF());break a;}}}if(c===null)return null;c.E(b);}if((c.gM()&65535)!=43)return c;return c.kF();}
function Gf(a,b,c){var d,e,f,g,h,i,j;d=a.e.bF();if(c!==null&&!(c instanceof Bl)){switch(d){case -2147483606:a.e.u();return ASw(c,b,d);case -2147483605:a.e.u();return ARx(c,b,(-2147483606));case -2147483585:a.e.u();return ARI(c,b,(-536870849));case -2147483525:e=new GG;f=a.e.fE();g=a.eD+1|0;a.eD=g;PJ(e,f,c,b,(-536870849),g);return e;case -1073741782:case -1073741781:a.e.u();h=AQz(c,b,d);c.E(h);return h;case -1073741761:a.e.u();h=AQn(c,b,(-536870849));c.E(b);return h;case -1073741701:h=new IM;e=a.e;e=e.fE();i
=a.eD+1|0;a.eD=i;PG(h,e,c,b,(-536870849),i);c.E(h);return h;case -536870870:case -536870869:a.e.u();h=c.gM()!=(-2147483602)?APZ(c,b,d):Br(a,32)?AQC(c,b,d):APU(c,b,d,Hp(a.cB));c.E(h);return h;case -536870849:a.e.u();h=ATg(c,b,(-536870849));c.E(b);return h;case -536870789:h=new Dc;e=a.e;e=e.fE();g=a.eD+1|0;a.eD=g;EV(h,e,c,b,(-536870849),g);c.E(h);return h;default:}return c;}j=null;if(c!==null)j=c;switch(d){case -2147483606:case -2147483605:a.e.u();h=ASp(j,b,d);j.E(h);return h;case -2147483585:a.e.u();return APr(j,
b,(-2147483585));case -2147483525:return ASY(a.e.fE(),j,b,(-2147483525));case -1073741782:case -1073741781:a.e.u();h=ASO(j,b,d);j.E(h);return h;case -1073741761:a.e.u();return ASz(j,b,(-1073741761));case -1073741701:return AQO(a.e.fE(),j,b,(-1073741701));case -536870870:case -536870869:a.e.u();h=AR7(j,b,d);j.E(h);return h;case -536870849:a.e.u();return ARs(j,b,(-536870849));case -536870789:return AQi(a.e.fE(),j,b,(-536870789));default:}return c;}
function Jn(a,b){var c,d,e,f,g,h,i,j,k,l;c=null;while(true){a:{d=a.e.bF();if((d&(-2147418113))==(-2147483608)){a.e.u();e=(d&16711680)>>16;d=d&(-16711681);if(d==(-16777176))a.cB=e;else{if(d!=(-1073741784))e=a.cB;c=Jw(a,d,e,b);if(a.e.bF()!=(-536870871))H(Bn(B(45),a.e.d(),a.e.c2()));a.e.u();}}else{b:{c:{switch(d){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:a.e.u();c
=ALF(0);break a;case -2147483577:a.e.u();c=AQj();break a;case -2147483558:a.e.u();c=new Jh;f=a.bB+1|0;a.bB=f;Rs(c,f);break a;case -2147483550:a.e.u();c=ALF(1);break a;case -2147483526:a.e.u();c=ASL();break a;case -536870876:a.e.u();a.bB=a.bB+1|0;if(Br(a,8)){if(Br(a,1)){c=AQK(a.bB);break a;}c=APn(a.bB);break a;}if(Br(a,1)){c=ARj(a.bB);break a;}c=ASu(a.bB);break a;case -536870866:a.e.u();if(Br(a,32)){c=ATa();break a;}c=ASk(Hp(a.cB));break a;case -536870821:a.e.u();g=0;if(a.e.bF()==(-536870818)){g=1;a.e.u();}c
=PL(a,g,b);if(a.e.bF()!=(-536870819))H(Bn(B(45),a.e.d(),a.e.c2()));a.e.kw(1);a.e.u();break a;case -536870818:a.e.u();a.bB=a.bB+1|0;if(!Br(a,8)){c=ALQ();break a;}c=ASN(Hp(a.cB));break a;case 0:h=a.e.ns();if(h!==null)c=FC(a,h);else{if(a.e.bJ()){c=D0(b);break a;}c=Mt(d&65535);}a.e.u();break a;default:break b;}a.e.u();c=ALQ();break a;}i=(d&2147483647)-48|0;if(a.d5<i)H(Bn(B(45),a.e.d(),a.e.c2()));a.e.u();a.bB=a.bB+1|0;c=!Br(a,2)?APw(i,a.bB):Br(a,64)?AQL(i,a.bB):ATk(i,a.bB);a.lG.data[i].lD=1;a.o7=1;break a;}if(d>=
0&&!a.e.ia()){c=Jr(a,d);a.e.u();}else if(d==(-536870788))c=D0(b);else{if(d!=(-536870871)){j=new Ja;k=!a.e.ia()?Jd(d&65535):(a.e.ns()).d();l=a.e;Kz(j,k,l.d(),a.e.c2());H(j);}if(b instanceof DV)H(Bn(B(45),a.e.d(),a.e.c2()));c=D0(b);}}}if(d!=(-16777176))break;}return c;}
function PL(a,b,c){var d,e;d=Dr(a,b);e=FC(a,d);e.E(c);return e;}
function Dr(a,b){var c,d,e,f,g,h,i,j,k,$$je;c=ASG(b,Br(a,2),Br(a,64));d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(a.e.bJ())break a;f=a.e.bF()==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.e.bF()){case -536870874:if(d>=0)c.cc(d);d=a.e.u();if(a.e.bF()!=(-536870874)){d=38;break d;}if(a.e.ci()==(-536870821)){a.e.u();e=1;d=(-1);break d;}a.e.u();if(g){c=Dr(a,0);break d;}if(a.e.bF()==(-536870819))break d;c.ro(Dr(a,0));break d;case -536870867:if(!g&&a.e.ci()!=(-536870819)){h=a.e;if(h.ci()!=(-536870821)&&d>=0){a.e.u();i
=a.e.bF();if(a.e.ia())break c;if(i<0){h=a.e;if(h.ci()!=(-536870819)){h=a.e;if(h.ci()!=(-536870821)&&d>=0)break c;}}e:{try{if(Fs(i))break e;i=i&65535;break e;}catch($$e){$$je=CY($$e);if($$je instanceof B3){break b;}else{throw $$e;}}}try{c.bq(d,i);}catch($$e){$$je=CY($$e);if($$je instanceof B3){break b;}else{throw $$e;}}a.e.u();d=(-1);break d;}}if(d>=0)c.cc(d);d=45;a.e.u();break d;case -536870821:if(d>=0){c.cc(d);d=(-1);}a.e.u();j=0;if(a.e.bF()==(-536870818)){a.e.u();j=1;}if(!e)c.uG(Dr(a,j));else c.ro(Dr(a,j));e
=0;a.e.u();break d;case -536870819:if(d>=0)c.cc(d);d=93;a.e.u();break d;case -536870818:if(d>=0)c.cc(d);d=94;a.e.u();break d;case 0:if(d>=0)c.cc(d);k=a.e.ns();if(k===null)d=0;else{c.wY(k);d=(-1);}a.e.u();break d;default:}if(d>=0)c.cc(d);d=a.e.u();}g=0;}H(Bn(B(45),Fg(a),a.e.c2()));}H(Bn(B(45),Fg(a),a.e.c2()));}if(!f){if(d>=0)c.cc(d);return c;}H(Bn(B(45),Fg(a),a.e.c2()-1|0));}
function Jr(a,b){var c;c=Ga(b);if(Br(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return Xm(b&65535);}if(Br(a,64)&&b>128){if(c)return ARM(b);if(Ha(b))return AG7(b&65535);if(!Ie(b))return AI4(b&65535);return AC4(b&65535);}}if(c)return APN(b);if(Ha(b))return AG7(b&65535);if(!Ie(b))return Mt(b&65535);return AC4(b&65535);}
function FC(a,b){var c,d;if(!b.us()){if(!b.ru()){if(b.eY())return AB_(b);return ALG(b);}if(b.eY())return AGN(b);return ADW(b);}c=b.xg();d=APf(c);if(!b.ru()){if(b.eY())return IC(AB_(b.iS()),d);return IC(ALG(b.iS()),d);}if(b.eY())return IC(AGN(b.iS()),d);return IC(ADW(b.iS()),d);}
function YW(b){return ZE(b,0);}
function MV(a){if(a.o7)a.mV.dn();}
function AD2(b){var c,d,e,f;c=(M()).a(B(388));d=0;while(true){e=b.rC(B(389),d);if(e<0)break;f=e+2|0;(c.a(b.gj(d,f))).a(B(390));d=f;}return ((c.a(b.lw(d))).a(B(389))).d();}
function Ka(a){return a.d5;}
function RZ(a){return a.eD+1|0;}
function P2(a){return a.bB+1|0;}
function Ek(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Br(a,b){return (a.cB&b)!=b?0:1;}
function Up(a){J(a);a.lG=Bh(BO,10);a.d5=(-1);a.eD=(-1);a.bB=(-1);}
var Mf=F(Ec);
function ARI(a,b,c){var d=new Mf();ALE(d,a,b,c);return d;}
function ALE(a,b,c,d){Gw(a,b,c,d);Gk();b.E(AUG);}
function ADI(a,b,c,d){var e;e=a.O.c(b,c,d);if(e<=0)e=b;return a.f.c(e,c,d);}
function AGV(a,b){a.f=b;}
var NR=F(Be);
function G9(){var a=new NR();ABg(a);return a;}
function ABg(a){B7(a);}
function FK(){var a=this;C.call(a);a.gx=null;a.mh=null;a.o2=null;a.oA=null;a.tK=null;a.ra=null;a.p2=null;a.nq=null;a.gz=null;a.lX=0;a.nf=0;a.mA=null;a.je=null;a.zs=null;a.mf=null;a.hy=null;a.eu=null;}
var AXl=null;function AXm(a,b){var c=new FK();Ks(c,a,b);return c;}
function AOZ(){return AXl;}
function Ks(a,b,c){var d;J(a);EN();a.gz=AUz;a.lX=(-1);a.nf=1;a.zs=DP();a.mf=Cu();a.hy=Cu();d=AU4;a.nq=d.ig();a.p2=b;a.ra=c;a.tK=AU4.sX();Lq(a);}
function Lq(a){var b,c;AXl=AU4.wC();EI(B(391),B(45));if((AXl.windows?1:0)==1)EI(B(392),B(393));else if((AXl.macOS?1:0)==1)EI(B(392),B(394));else if((AXl.linux?1:0)!=1)EI(B(392),B(395));else EI(B(392),B(396));U$(ASe(AU4));b=C7();a.eu=b.wv();if(a.eu.wk(B(397))){a.eu=a.eu.ne(B(398),B(45));a.eu=a.eu.ne(B(399),B(45));}a.je=ARX((((M()).a(a.eu)).a(B(400))).d());c=ARk();a.je.vE(B(401));a.gx=ASi(a.ra);a.mh=APY(a.tK);a.o2=AQf(a.je);a.mA=APh();OJ(a);AUJ=a;AUI=a.gx;AUN=a.gx.oN();AUO=a.gx.oN();AUL=a.mh;AUM=a.o2;a.nq.oJ(a);}
function XD(a){var b,c,$$je;b=a.gz;a:{try{b:{ATr();switch(AXn.data[Y(b)]){case 1:if((C7()).zF())break b;EN();a.gz=AUA;break b;case 2:case 3:break;case 4:EN();a.gz=AUC;break b;default:break b;}Li(a,a.p2);}}catch($$e){$$je=CY($$e);if($$je instanceof Dg){c=$$je;break a;}else{throw $$e;}}a.nq.oJ(a);return;}c.Af();H(c);}
function Li(a,b){var c,d,e,f;a.gx.ga();c=AUI.T();d=AUI.F();if(!(c==a.lX&&d==a.nf)){a.lX=c;a.nf=d;AUN.o6(0,0,c,d);e=a.gz;EN();if(e===AUC){a.gz=AUD;b.p9();}b.kW(c,d);}a.hy.ve(a.mf);a.mf.fJ();f=0;while(f<a.hy.z){(a.hy.R(f)).g3();f=f+1|0;}a.hy.fJ();e=a.gx;e.ll=J4(e.ll,T(1));b.mX();a.mh.lH();}
function OJ(a){a.je.l2(B(402),ATz(a));}
function Zc(a,b,c){a.mA.nX(b,c);}
function AKn(a,b,c){a.mA.fk(b,c);}
function AOH(a){Gr();return AUg;}
function AA4(b){return b.eu;}
function AJj(b,c){b.oA=c;return c;}
function AIB(b){return b.oA;}
function Td(){var a=this;C.call(a);a.cY=null;a.er=0.0;a.f8=0;a.ik=null;a.cK=null;a.e9=null;a.bz=null;a.df=null;}
function ARt(a,b,c){var d=new Td();AIy(d,a,b,c);return d;}
function AIy(a,b,c,d){J(a);a.er=0.0;a.f8=0;a.ik=BG();a.cK=BG();a.e9=BG();a.bz=Bu();a.df=G(Dk,[Bu(),Bu(),Bu(),Bu()]);a.cY=b;a.ik.e1(c,d);a.cK.e1(c,d);a.bz.p=c+0.20000000298023224;a.bz.o=d+0.20000000298023224;a.bz.be=0.6000000238418579;a.bz.Y=0.6000000238418579;a.e9.e1((-6.0),0.0);}
function W_(a,b){if(!a.f8){a.e9.gK(a.cY.D.cs);((a.e9.tY(a.cK)).kO()).c1(6.0);a.cK.gr(a.e9.i*b,a.e9.j*b);a.bz.p=a.cK.i+0.20000000298023224;a.bz.o=a.cK.j+0.20000000298023224;if(M0(a)){a.f8=1;a.er=0.0;}}if(a.f8==1&&a.er>0.6000000238418579){a.f8=0;a.er=0.0;a.cK.gK(a.ik);a.bz.p=a.cK.i+0.20000000298023224;a.bz.o=a.cK.j+0.20000000298023224;}a.er=a.er+b;}
function M0(a){var b;Q4(a);b=0;while(true){if(b>=a.df.data.length){if(!a.bz.c9(a.cY.D.N)){if(!a.bz.c9(a.cY.V.L))return 0;return 1;}if(a.cY.D.S!=4){a.cY.D.S=4;a.cY.D.dh=0.0;}return 1;}if(a.bz.c9(a.df.data[b]))break;b=b+1|0;}return 1;}
function Q4(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=a.bz.p|0;c=DG(a.bz.o)|0;d=a.bz.p+a.bz.be|0;e=DG(a.bz.o)|0;f=a.bz.p+a.bz.be|0;g=a.bz.o+a.bz.Y|0;h=a.bz.p|0;i=a.bz.o+a.bz.Y|0;j=a.cY.w;k=j.data;l=k[b].data[(a.cY.w.data[0].data.length-1|0)-c|0];m=k[d].data[(a.cY.w.data[0].data.length-1|0)-e|0];n=k[f].data[(a.cY.w.data[0].data.length-1|0)-g|0];o=k[h].data[(a.cY.w.data[0].data.length-1|0)-i|0];Cq();if(l==AXo)a.df.data[0].bw((-1.0),(-1.0),0.0,0.0);else a.df.data[0].bw(b,c,1.0,1.0);if(m==AXo)a.df.data[1].bw((-1.0),
(-1.0),0.0,0.0);else a.df.data[1].bw(d,e,1.0,1.0);if(n==AXo)a.df.data[2].bw((-1.0),(-1.0),0.0,0.0);else a.df.data[2].bw(f,g,1.0,1.0);if(o==AXo)a.df.data[3].bw((-1.0),(-1.0),0.0,0.0);else a.df.data[3].bw(h,i,1.0,1.0);}
var HN=F(0);
function Dk(){var a=this;C.call(a);a.p=0.0;a.o=0.0;a.be=0.0;a.Y=0.0;}
var AXp=null;var AXq=null;function AKp(){AKp=P(Dk);AJ2();}
function Bu(){var a=new Dk();Nf(a);return a;}
function S$(a,b,c,d){var e=new Dk();JG(e,a,b,c,d);return e;}
function Nf(a){AKp();J(a);}
function JG(a,b,c,d,e){AKp();J(a);a.p=b;a.o=c;a.be=d;a.Y=e;}
function AAb(a,b,c,d,e){a.p=b;a.o=c;a.be=d;a.Y=e;return a;}
function ALS(a,b,c){return a.p<=b&&a.p+a.be>=b&&a.o<=c&&a.o+a.Y>=c?1:0;}
function ABI(a,b){return a.p<b.p+b.be&&a.p+a.be>b.p&&a.o<b.o+b.Y&&a.o+a.Y>b.o?1:0;}
function AJ2(){AXp=Bu();AXq=Bu();}
function Ri(){var a=this;C.call(a);a.ec=null;a.b5=null;a.cA=null;a.bs=null;a.L=null;a.bD=0;a.cl=0.0;a.nA=null;a.lQ=null;a.pH=null;a.eS=null;a.cH=null;}
function V8(a,b,c){var d=new Ri();ALt(d,a,b,c);return d;}
function ALt(a,b,c,d){var e;J(a);a.b5=BG();a.cA=BG();a.bs=BG();a.L=Bu();a.bD=0;a.cl=0.0;a.nA=S$(416.0,256.0,64.0,64.0);a.lQ=S$(416.0,182.0,64.0,64.0);a.pH=S$(0.0,0.0,128.0,128.0);a.eS=BG();a.cH=G(Dk,[Bu(),Bu(),Bu(),Bu()]);a.ec=b;a.b5.i=c;a.b5.j=d;a.L.p=a.b5.i+0.20000000298023224;a.L.o=a.b5.j+0.20000000298023224;e=a.L;a.L.Y=1.0;e.be=1.0;}
function XH(a,b){var c;Oo(a);if(!a.bD){a.eS.gK(a.ec.D.cs);if(a.ec.D.dz==1){c=a.eS;c.i=c.i-1.0;}if(a.ec.D.dz==(-1)){c=a.eS;c.i=c.i+1.0;}c=a.eS;c.j=c.j+0.20000000298023224;((a.bs.gK(a.eS)).tY(a.b5)).c1(I4(4.0,a.b5.v$(a.eS))*b);if(a.bs.ry()>4.0)(a.bs.kO()).c1(4.0);H2(a);}if(a.bD==2){a.cA.c1(b);a.bs.gr(a.cA.i,a.cA.j);if(a.cA.i===0.0){c=a.bs;c.i=c.i*0.800000011920929;}if(a.cA.j===0.0){c=a.bs;c.j=c.j*0.800000011920929;}if(a.bs.i>4.0)a.bs.i=4.0;if(a.bs.i<(-4.0))a.bs.i=(-4.0);if(a.bs.j>4.0)a.bs.j=4.0;if(a.bs.j<(-4.0))a.bs.j
=(-4.0);a.bs.c1(b);H2(a);a.bs.c1(1.0/b);}if(a.bD==1&&a.cl>5.0){a.cl=0.0;a.bD=0;}a.cl=a.cl+b;}
function Oo(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;a:{b:{b=AUL.i3(0)/AUI.T()*480.0;c=AUL.i3(1)/AUI.T()*480.0;d=320.0-AUL.n$(0)/AUI.F()*320.0;e=320.0-AUL.n$(1)/AUI.F()*320.0;if(!(AUL.cV(0)&&a.nA.h_(b,d))){f=AUL;if(!f.cV(1))break b;if(!a.nA.h_(c,e))break b;}g=1;break a;}g=0;}c:{d:{if(!(AUL.cV(0)&&a.lQ.h_(b,d))){f=AUL;if(!f.cV(1))break d;if(!a.lQ.h_(c,e))break d;}h=1;break c;}h=0;}if(!(!AUL.ct(62)&&!g)&&!a.bD&&a.cl>0.5){a.cl=0.0;a.bD=2;return;}if(!(!AUL.ct(62)&&!g)&&a.bD==2&&a.cl>0.5){a.cl=0.0;a.bD=1;return;}if
(!(!AUL.ct(62)&&!g)&&a.bD==1&&a.cl>0.5){a.cl=0.0;a.bD=2;return;}if(!(!AUL.ct(34)&&!h)&&a.cl>0.5){a.cl=0.0;a.bD=0;return;}e:{f:{i=AUL.cV(0);j=AUL.cV(1);if(!(i&&b>80.0&&b<128.0)){if(!j)break f;if(c<=80.0)break f;if(c>=128.0)break f;}k=1;break e;}k=0;}g:{h:{if(!(i&&d<60.0)){if(!j)break h;if(e>=60.0)break h;}l=1;break g;}l=0;}i:{j:{if(!(i&&d>80.0&&b<128.0)){if(!j)break j;if(e<=80.0)break j;if(e>=128.0)break j;}m=1;break i;}m=0;}if(a.bD==2){if(AUL.ct(29))a.cA.i=(-20.0);else if(!AUL.ct(32)&&!k)a.cA.i=0.0;else a.cA.i
=20.0;if(!AUL.ct(51)&&!m){if(!AUL.ct(47)&&!l)a.cA.j=0.0;else a.cA.j=(-20.0);}else a.cA.j=20.0;if(i){if(!a.pH.h_(b,d)){a.cA.i=0.0;a.cA.j=0.0;}else{n=(b-64.0)/64.0;o=(d-64.0)/64.0;p=Gl(n*n+o*o);if(p===0.0){q=0.0;r=0.0;}else{q=n/p;r=o/p;}a.bs.i=q*4.0;a.bs.j=r*4.0;}}}}
function H2(a){var b,c,d;b=a.L;b.p=b.p+a.bs.i;GH(a);c=0;while(c<a.cH.data.length){d=a.cH.data[c];if(a.L.c9(d)){if(a.bs.i<0.0)a.L.p=d.p+d.be+0.009999999776482582;else a.L.p=d.p-a.L.be-0.009999999776482582;a.bs.i=0.0;}c=c+1|0;}b=a.L;b.o=b.o+a.bs.j;GH(a);c=0;while(c<a.cH.data.length){d=a.cH.data[c];if(a.L.c9(d)){if(a.bs.j<0.0)a.L.o=d.o+d.Y+0.009999999776482582;else a.L.o=d.o-a.L.Y-0.009999999776482582;a.bs.j=0.0;}c=c+1|0;}a.b5.i=a.L.p-0.20000000298023224;a.b5.j=a.L.o-0.20000000298023224;}
function GH(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=a.L.p|0;c=DG(a.L.o)|0;d=a.L.p+a.L.be|0;e=DG(a.L.o)|0;f=a.L.p+a.L.be|0;g=a.L.o+a.L.Y|0;h=a.L.p|0;i=a.L.o+a.L.Y|0;j=a.ec.w;k=j.data;l=k[b].data[(a.ec.w.data[0].data.length-1|0)-c|0];m=k[d].data[(a.ec.w.data[0].data.length-1|0)-e|0];n=k[f].data[(a.ec.w.data[0].data.length-1|0)-g|0];o=k[h].data[(a.ec.w.data[0].data.length-1|0)-i|0];Cq();if(l==AXo)a.cH.data[0].bw((-1.0),(-1.0),0.0,0.0);else a.cH.data[0].bw(b,c,1.0,1.0);if(m==AXo)a.cH.data[1].bw((-1.0),(-1.0),0.0,0.0);else a.cH.data[1].bw(d,
e,1.0,1.0);if(n==AXo)a.cH.data[2].bw((-1.0),(-1.0),0.0,0.0);else a.cH.data[2].bw(f,g,1.0,1.0);if(o==AXo)a.cH.data[3].bw((-1.0),(-1.0),0.0,0.0);else a.cH.data[3].bw(h,i,1.0,1.0);}
var SO=F(O);
function ASA(){var a=new SO();AEC(a);return a;}
function AEC(a){X(a);}
function AEv(a){var b;b=ATe(a);b.U=1;return b;}
function GL(){var a=this;C.call(a);a.l7=0;a.rx=0;a.qn=null;}
function AAN(a,b,c){var d=new GL();AKX(d,a,b,c);return d;}
function AKX(a,b,c,d){J(a);a.l7=b;a.rx=c;a.qn=d;}
var QP=F(CZ);
function ASI(){var a=new QP();ACf(a);return a;}
function ACf(a){Hh(a);}
function AKq(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function ANp(a,b,c){var d;a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}d=1;break a;}d=0;}return d;}
var QO=F(CZ);
function AR5(){var a=new QO();V6(a);return a;}
function V6(a){Hh(a);}
function Xn(a,b){return b!=10?0:1;}
function AJe(a,b,c){return b!=10?0:1;}
var N0=F(Ed);
var Tm=F(O);
function ASf(){var a=new Tm();ACv(a);return a;}
function ACv(a){X(a);}
function AJL(a){var b;b=ARa(a);b.U=1;return b;}
function QI(){var a=this;C.call(a);a.py=null;a.qS=0;}
function ASo(a){var b=new QI();Y5(b,a);return b;}
function Y5(a,b){J(a);a.py=b;}
function CA(){var a=this;Bl.call(a);a.eZ=null;a.xL=0;}
function ALG(a){var b=new CA();AIu(b,a);return b;}
function AIu(a,b){B8(a);a.eZ=b.h0();a.xL=b.bm;}
function Tz(a,b,c){return !a.eZ.n(c.h(b))?(-1):1;}
function AHS(a,b){if(b instanceof CI)return Fo(a.eZ,b.kg());if(b instanceof CA)return EC(a.eZ,b.eZ);if(b instanceof B9)return EC(a.eZ,b.nn());if(!(b instanceof Cz))return 1;return 0;}
function AHC(a){return a.eZ;}
function Gg(){N.call(this);this.m6=0;}
function ATf(a){var b=new Gg();PT(b,a);return b;}
function PT(a,b){U(a);a.m6=b;}
function AHF(a,b){return a.bm^(a.m6!=Er(b&65535)?0:1);}
var OG=F(Gg);
function APC(a){var b=new OG();AGz(b,a);return b;}
function AGz(a,b){PT(a,b);}
function AKU(a,b){return a.bm^(!(a.m6>>Er(b&65535)&1)?0:1);}
function I0(){var a=this;C.call(a);a.kL=null;a.jH=null;a.c5=0;a.g6=null;a.tP=0.0;a.o5=0.0;a.dP=0;a.sI=null;a.h$=null;a.kE=null;a.nB=0;a.nv=0;a.p1=0;a.qi=0;a.oE=0;a.ei=null;a.ej=null;a.oU=0;a.xu=null;a.nZ=0.0;a.ju=0;a.mb=0;a.n8=0;}
var AXr=null;function IZ(){IZ=P(I0);AGh();}
function Gz(){var a=new I0();Rq(a);return a;}
function AR9(a){var b=new I0();NJ(b,a);return b;}
function AXs(a,b){var c=new I0();Fa(c,a,b);return c;}
function Rq(a){IZ();Fa(a,1000,null);}
function NJ(a,b){IZ();Fa(a,b,null);}
function Fa(a,b,c){var d,e,f,g,h,i,j,k,l,m;IZ();J(a);a.c5=0;a.g6=null;a.tP=0.0;a.o5=0.0;a.dP=0;a.sI=B6();a.h$=B6();a.kE=B6();a.nB=0;a.nv=770;a.p1=771;a.qi=770;a.oE=771;a.ej=null;a.xu=Cy(1.0,1.0,1.0,1.0);a.nZ=AVU;a.ju=0;a.mb=0;a.n8=0;if(b>8191)H(Bp((((M()).a(B(344))).l(b)).d()));if(AUP===null)d=AXr;else{HJ();d=AXh;}e=new FH;f=b*4|0;g=b*6|0;HP(e,d,0,f,g,G(D4,[CJ(1,2,B(255)),CJ(4,4,B(257)),CJ(16,2,B(345))]));a.kL=e;a.h$.fM(0.0,0.0,AUI.T(),AUI.F());a.jH=Cf(b*20|0);h=MO(g);i=0;j=0;while(j<g){k=h.data;k[j]=i;k[j+
1|0]=(i+1|0)<<16>>16;l=j+2|0;m=(i+2|0)<<16>>16;k[l]=m;k[j+3|0]=m;k[j+4|0]=(i+3|0)<<16>>16;k[j+5|0]=i;j=j+6|0;i=(i+4|0)<<16>>16;}a.kL.q4(h);if(c!==null)a.ei=c;else{a.ei=Qn();a.oU=1;}}
function Qn(){var b,c,d;IZ();b=B(403);c=B(404);d=Np(b,c);if(d.km())return d;H(Bp((((M()).a(B(283))).a(d.jv())).d()));}
function AB7(a){if(a.dP)H(BN(B(405)));a.ju=0;AUN.kd(0);if(a.ej===null)a.ei.cR();else a.ej.cR();a.tH();a.dP=1;}
function AKW(a){var b;if(!a.dP)H(BN(B(406)));if(a.c5>0)a.fe();a.g6=null;a.dP=0;b=AUN;b.kd(1);if(a.ym())b.lu(3042);}
function ABV(a,b,c,d){a.dT(b,c,d,b.wV(),b.ut());}
function WZ(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q;if(!a.dP)H(BN(B(407)));g=a.jH;h=b.cz;if(h!==a.g6)a.s6(h);else{i=g.data;if(a.c5==i.length)a.fe();}i=g.data;j=c+e;k=d+f;l=b.ft;m=b.gV;n=b.gW;o=b.fv;p=a.nZ;q=a.c5;i[q]=c;i[q+1|0]=d;i[q+2|0]=p;i[q+3|0]=l;i[q+4|0]=m;i[q+5|0]=c;i[q+6|0]=k;i[q+7|0]=p;i[q+8|0]=l;i[q+9|0]=o;i[q+10|0]=j;i[q+11|0]=k;i[q+12|0]=p;i[q+13|0]=n;i[q+14|0]=o;i[q+15|0]=j;i[q+16|0]=d;i[q+17|0]=p;i[q+18|0]=n;i[q+19|0]=m;a.c5=q+20|0;}
function Zw(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn;if(!a.dP)H(BN(B(407)));l=a.jH;m=b.cz;if(m!==a.g6)a.s6(m);else{n=l.data;if(a.c5==n.length)a.fe();}o=c+e;p=d+f;q= -e;r= -f;s=g-e;t=h-f;if(!(i===1.0&&j===1.0)){q=q*i;r=r*j;s=s*i;t=t*j;}if(k===0.0){u=q;v=r;w=t;x=s;}else{y=Qj(k);z=M6(k);ba=y*q;u=ba-z*r;bb=z*q;v=bb+y*r;bc=z*t;q=ba-bc;ba=y*t;w=bb+ba;x=y*s-bc;t=z*s+ba;s=u+x-q;r=t-(w-v);}n=l.data;ba=u+o;bb=v+p;bc=q+o;bd=w+p;be=x+o;bf=t+p;bg=s+o;bh=r+p;bi=b.ft;bj
=b.gV;bk=b.gW;bl=b.fv;bm=a.nZ;bn=a.c5;n[bn]=ba;n[bn+1|0]=bb;n[bn+2|0]=bm;n[bn+3|0]=bi;n[bn+4|0]=bj;n[bn+5|0]=bc;n[bn+6|0]=bd;n[bn+7|0]=bm;n[bn+8|0]=bi;n[bn+9|0]=bl;n[bn+10|0]=be;n[bn+11|0]=bf;n[bn+12|0]=bm;n[bn+13|0]=bk;n[bn+14|0]=bl;n[bn+15|0]=bg;n[bn+16|0]=bh;n[bn+17|0]=bm;n[bn+18|0]=bk;n[bn+19|0]=bj;a.c5=bn+20|0;}
function AC2(a){var b,c,d;if(!a.c5)return;a.ju=a.ju+1|0;a.mb=a.mb+1|0;b=a.c5/20|0;if(b>a.n8)a.n8=b;c=b*6|0;a.g6.cR();d=a.kL;d.t3(a.jH,0,a.c5);(d.ov()).cj(0);(d.ov()).bY(c);if(a.nB)AUN.lu(3042);else{AUN.wz(3042);if(a.nv!=(-1))AUN.yO(a.nv,a.p1,a.qi,a.oE);}d.mE(a.ej===null?a.ei:a.ej,4,0,c);a.c5=0;}
function ANv(a){a.kL.J();if(a.oU&&a.ei!==null)a.ei.J();}
function AIW(a){return a.h$;}
function ABw(a,b){if(a.dP)a.fe();a.h$.fi(b);if(a.dP)a.tH();}
function Zh(a){(a.kE.fi(a.h$)).od(a.sI);if(a.ej===null){a.ei.fu(B(359),a.kE);a.ei.hW(B(356),0);}else{a.ej.fu(B(359),a.kE);a.ej.hW(B(356),0);}}
function AHr(a,b){a.fe();a.g6=b;a.tP=1.0/b.T();a.o5=1.0/b.F();}
function U0(a){return a.nB?0:1;}
function AGh(){HJ();AXr=AXe;}
var JC=F();
var AXt=null;function ARR(){ARR=P(JC);AJQ();}
function AJQ(){AXt=W((SK()).data.length);AXt.data[Y(AXf)]=1;AXt.data[Y(AXg)]=2;AXt.data[Y(AXh)]=3;AXt.data[Y(AXe)]=4;}
var MB=F(B5);
function LQ(){var a=this;N.call(a);a.m4=0;a.oV=0;a.kk=0;a.mx=0;a.dK=0;a.e$=0;a.M=null;a.bo=null;}
function B1(){var a=new LQ();AOv(a);return a;}
function ASX(a,b){var c=new LQ();L2(c,a,b);return c;}
function ASG(a,b,c){var d=new LQ();UG(d,a,b,c);return d;}
function AOv(a){U(a);a.M=AO0();}
function L2(a,b,c){U(a);a.M=AO0();a.m4=b;a.oV=c;}
function UG(a,b,c,d){L2(a,c,d);a.eC(b);}
function Tt(a,b){a:{if(a.m4){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.dK){a.M.m5(Ek(b&65535));break a;}a.M.oo(Ek(b&65535));break a;}if(a.oV&&b>128){a.kk=1;b=DS(DR(b));}}}if(!(!Ie(b)&&!Ha(b))){if(a.mx)a.br.m5(b-55296|0);else a.br.oo(b-55296|0);}if(a.dK)a.M.m5(b);else a.M.oo(b);if(!a.U&&Ga(b))a.U=1;return a;}
function AOO(a,b){var c,d;if(!a.U&&b.U)a.U=1;if(a.mx){if(!b.bK)a.br.f5(b.b1());else a.br.c3(b.b1());}else if(!b.bK)a.br.gh(b.b1());else{a.br.gO(b.b1());a.br.c3(b.b1());a.bK=a.bK?0:1;a.mx=1;}if(!a.e$&&b.by()!==null){if(a.dK){if(!b.gc())a.M.f5(b.by());else a.M.c3(b.by());}else if(!b.gc())a.M.gh(b.by());else{a.M.gO(b.by());a.M.c3(b.by());a.bm=a.bm?0:1;a.dK=1;}}else{c=a.bm;if(a.bo!==null){d=a.bo;if(!c)a.bo=AST(a,c,d,b);else a.bo=ATy(a,c,d,b);}else{if(c&&!a.dK&&a.M.bJ())a.bo=AQt(a,b);else if(!c)a.bo=APa(a,c,b);else a.bo
=AQa(a,c,b);a.e$=1;}}return a;}
function AL6(a,b,c){if(b>c)H(CR());a:{b:{if(!a.m4){if(c<55296)break b;if(b>57343)break b;}while(true){if(b>=(c+1|0))break a;a.cc(b);b=b+1|0;}}if(a.dK)a.M.xF(b,c+1|0);else a.M.kx(b,c+1|0);}return a;}
function T5(a,b){var c,d;if(!a.U&&b.U)a.U=1;if(b.eY())a.kk=1;if(!(a.bK^b.bK)){if(!a.bK)a.br.gh(b.b1());else a.br.c3(b.b1());}else if(a.bK)a.br.f5(b.b1());else{a.br.gO(b.b1());a.br.c3(b.b1());a.bK=1;}if(!a.e$&&b.by()!==null){if(!(a.bm^b.gc())){if(!a.bm)a.M.gh(b.by());else a.M.c3(b.by());}else if(a.bm)a.M.f5(b.by());else{a.M.gO(b.by());a.M.c3(b.by());a.bm=1;}}else{c=a.bm;if(a.bo!==null){d=a.bo;if(!c)a.bo=ASy(a,c,d,b);else a.bo=ATw(a,c,d,b);}else{if(!a.dK&&a.M.bJ()){if(!c)a.bo=AQp(a,b);else a.bo=AS1(a,b);}else if
(!c)a.bo=APS(a,b,c);else a.bo=APs(a,b,c);a.e$=1;}}}
function AMq(a,b){var c,d;if(!a.U&&b.U)a.U=1;if(b.eY())a.kk=1;if(!(a.bK^b.bK)){if(!a.bK)a.br.c3(b.b1());else a.br.gh(b.b1());}else if(!a.bK)a.br.f5(b.b1());else{a.br.gO(b.b1());a.br.c3(b.b1());a.bK=0;}if(!a.e$&&b.by()!==null){if(!(a.bm^b.gc())){if(!a.bm)a.M.c3(b.by());else a.M.gh(b.by());}else if(!a.bm)a.M.f5(b.by());else{a.M.gO(b.by());a.M.c3(b.by());a.bm=0;}}else{c=a.bm;if(a.bo!==null){d=a.bo;if(!c)a.bo=ATs(a,c,d,b);else a.bo=ASs(a,c,d,b);}else{if(!a.dK&&a.M.bJ()){if(!c)a.bo=ARF(a,b);else a.bo=AR0(a,b);}else if
(!c)a.bo=APO(a,b,c);else a.bo=ATq(a,b,c);a.e$=1;}}}
function XV(a,b){if(a.bo!==null)return a.bm^a.bo.n(b);return a.bm^a.M.dL(b);}
function AOS(a){if(!a.e$)return a.M;return null;}
function AAc(a){return a.br;}
function ALP(a){var b,c;if(a.bo!==null)return a;b=a.by();c=AQs(a,b);return c.eC(a.gc());}
function AGL(a){var b,c;b=M();c=a.M.iv(0);while(c>=0){b.lY(DL(c));b.bZ(124);c=a.M.iv(c+1|0);}if(b.k()>0)b.tr(b.k()-1|0);return b.d();}
function AAG(a){return a.kk;}
var RG=F(Be);
function ANe(){var a=new RG();AMY(a);return a;}
function AMY(a){B7(a);}
function Q1(){var a=this;C.call(a);a.l_=0;a.lN=0;a.pi=0;}
function AQE(){var a=new Q1();TJ(a);return a;}
function TJ(a){J(a);}
var SF=F(Dd);
function AS0(a,b){var c=new SF();ACK(c,a,b);return c;}
function ACK(a,b,c){GU(a,b,c);}
var KD=F(DE);
function ASx(a,b,c,d,e,f){var g=new KD();AGa(g,a,b,c,d,e,f);return g;}
function AGa(a,b,c,d,e,f,g){Jf(a,b,c,d,e,f,g);}
function AEH(a,b){var c,d,e,f;c=a.b7.s.data;d=a.b2;e=b*4|0;f=(c[d+e|0]&255)<<24|(a.b7.s.data[(a.b2+e|0)+1|0]&255)<<16|(a.b7.s.data[(a.b2+e|0)+2|0]&255)<<8|a.b7.s.data[(a.b2+e|0)+3|0]&255;return $rt_intBitsToFloat(f);}
function AIQ(a,b,c){var d,e,f,g;d=$rt_floatToIntBits(c);e=a.b7.s.data;f=a.b2;g=b*4|0;e[f+g|0]=d>>24<<24>>24;a.b7.s.data[(a.b2+g|0)+1|0]=d>>16<<24>>24;a.b7.s.data[(a.b2+g|0)+2|0]=d>>8<<24>>24;a.b7.s.data[(a.b2+g|0)+3|0]=d<<24>>24;}
function OQ(){N.call(this);this.wn=null;}
function AP8(a){var b=new OQ();UX(b,a);return b;}
function UX(a,b){a.wn=b;U(a);}
function Vn(a,b){return HO(b);}
var MZ=F(O);
function AP5(){var a=new MZ();U2(a);return a;}
function U2(a){X(a);}
function ZA(a){var b;b=AQe(a);b.U=1;return b;}
var D7=F(Bk);
var AU7=null;var AXu=null;var AXv=null;function I5(){I5=P(D7);ABH();}
function ZP(a,b){var c=new D7();PR(c,a,b);return c;}
function PR(a,b,c){I5();BX(a,b,c);}
function ABH(){AU7=ZP(B(408),0);AXu=ZP(B(409),1);AXv=G(D7,[AU7,AXu]);}
var IV=F(0);
var Q$=F(B3);
function ARz(){var a=new Q$();AC7(a);return a;}
function AC7(a){FZ(a);}
var N3=F(B5);
var H7=F(CT);
var AXw=null;function Rl(){Rl=P(H7);AB2();}
function SN(b,c){var d,e,f,g,h;Rl();if(c>=2&&c<=36){if(b!==null&&!b.bJ()){a:{d=0;e=0;switch(b.h(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=Cs;while(e<b.k()){g=e+1|0;h=H_(b.h(e));if(h<0)H(CC((((M()).a(B(2))).a(b)).d()));if(h>=c)H(CC((((((M()).a(B(3))).l(c)).a(B(4))).a(b)).d()));f=J4(C1(T(c),f),T(h));if(AQg(f,Cs)){if(g==b.k()&&DA(f,BK(0, 2147483648))&&d)return BK(0, 2147483648);H(CC((((M()).a(B(5))).a(b)).d()));}e=g;}if(d)f=ARv(f);return f;}H(CC(B(6)));}H(CC((((M()).a(B(7))).l(c)).d()));}
function So(b){Rl();return SN(b,10);}
function CE(b){var c,d,e;Rl();if(DA(b,Cs))return 64;c=0;d=Cd(b,32);if(Z9(d,Cs))c=32;else d=b;e=Cd(d,16);if(DA(e,Cs))e=d;else c=c|16;d=Cd(e,8);if(DA(d,Cs))d=e;else c=c|8;e=Cd(d,4);if(DA(e,Cs))e=d;else c=c|4;d=Cd(e,2);if(DA(d,Cs))d=e;else c=c|2;if(Z9(Cd(d,1),Cs))c=c|1;return (64-c|0)-1|0;}
function AB2(){AXw=E($rt_longcls());}
var Ev=F();
var AXx=null;function Pc(a){J(a);}
function C4(){return AXx;}
function AJH(b){AXx=b;}
var GM=F(0);
function NY(){C.call(this);this.s2=null;}
function ARL(){var a=new NY();ANI(a);return a;}
function ANI(a){J(a);a.s2=AB0();}
function AH5(a,b,c){UK(a.s2,$rt_ustr(b),c);}
function AB0(){var soundManager=new SoundManager();soundManager.debugMode=false;return soundManager;}
function UK(b,c,d){b.setup({url:c,onready:function(){d.onready();},ontimeout:function(status){d.ontimeout();}});}
function Qx(){var a=this;C.call(a);a.iH=null;a.lb=null;a.cJ=0;a.tO=0;}
function AG1(a){var b=new Qx();ADv(b,a);return b;}
function ADv(a,b){J(a);while(b>=a.cJ){a.cJ=a.cJ<<1|1;}a.cJ=a.cJ<<1|1;a.iH=W(a.cJ+1|0);a.lb=W(a.cJ+1|0);a.tO=b;}
function ACR(a,b,c){var d,e,f;d=0;e=b&a.cJ;while(a.iH.data[e]&&a.iH.data[e]!=b){f=d+1|0;d=f&a.cJ;f=e+d|0;e=f&a.cJ;}a.iH.data[e]=b;a.lb.data[e]=c;}
function AFu(a,b){var c,d,e,f;c=b&a.cJ;d=0;while(true){e=a.iH.data[c];if(!e)break;if(e==b)return a.lb.data[c];f=d+1|0;d=f&a.cJ;f=c+d|0;c=f&a.cJ;}return a.tO;}
var Fb=F(0);
var Nk=F();
function AOl(a,b){return a.vp(b);}
function Xy(a){return a.yt();}
function Jc(){var a=this;C.call(a);a.cz=null;a.ft=0.0;a.fv=0.0;a.gW=0.0;a.gV=0.0;a.io=0;a.he=0;}
function C$(a){var b=new Jc();Vv(b,a);return b;}
function Ew(a,b,c,d,e){var f=new Jc();ACD(f,a,b,c,d,e);return f;}
function Vv(a,b){J(a);if(b===null)H(Bp(B(410)));a.cz=b;a.qw(0,0,b.T(),b.F());}
function ACD(a,b,c,d,e,f){J(a);a.cz=b;a.qw(c,d,e,f);}
function AKF(a,b,c,d,e){var f,g;f=1.0/a.cz.T();g=1.0/a.cz.F();a.wJ(b*f,c*g,(b+d|0)*f,(c+e|0)*g);a.io=JS(d);a.he=JS(e);}
function Wx(a,b,c,d,e){var f,g,h,i,j,k,l;f=a.cz.T();g=a.cz.F();h=EE(d-b);i=f;a.io=C3(h*i);h=EE(e-c);j=g;a.he=C3(h*j);if(a.io==1&&a.he==1){k=0.25/i;b=b+k;d=d-k;l=0.25/j;c=c+l;e=e-l;}a.ft=b;a.fv=c;a.gW=d;a.gV=e;}
function ANw(a){return a.cz;}
function AHt(a){return C3(a.ft*a.cz.T());}
function YE(a){return C3(a.fv*a.cz.F());}
function Yw(a){return a.io;}
function Uw(a){return a.he;}
function AGJ(a,b,c){var d;if(b){d=a.ft;a.ft=a.gW;a.gW=d;}if(c){d=a.fv;a.fv=a.gV;a.gV=d;}}
function Z4(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.yV();e=a.xS();f=a.io;g=a.he;h=g/c|0;i=f/b|0;j=$rt_createMultiArray(Jc,[i,h]);k=0;while(k<h){l=0;m=d;while(l<i){j.data[k].data[l]=Ew(a.cz,m,e,b,c);l=l+1|0;m=m+b|0;}k=k+1|0;e=e+c|0;}return j;}
function Sf(b,c,d){var e;e=C$(b);return e.ev(c,d);}
var MP=F(Fh);
function AQG(){var a=new MP();AD4(a);return a;}
function AD4(a){Rx(a);}
function ABZ(a){var b;b=(O$(a)).eC(1);b.U=1;return b;}
function RM(){var a=this;N.call(a);a.pd=null;a.ze=null;}
function ATB(a,b){var c=new RM();AOG(c,a,b);return c;}
function AOG(a,b,c){a.ze=b;a.pd=c;U(a);}
function Z$(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.bK^a.pd.dL(c):0;}
function RJ(){var a=this;N.call(a);a.sV=null;a.tk=null;a.yu=null;}
function ARb(a,b,c){var d=new RJ();AG5(d,a,b,c);return d;}
function AG5(a,b,c,d){a.yu=b;a.sV=c;a.tk=d;U(a);}
function Uy(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.bK^a.sV.dL(c):0;return a.tk.n(b)&&!d?1:0;}
var Ce=F(Bk);
var AXy=null;var AXz=null;var AXA=null;var AXB=null;var AXC=null;var AXD=null;var AU3=null;var AXE=null;function Yx(){Yx=P(Ce);TO();}
function DT(a,b){var c=new Ce();Tn(c,a,b);return c;}
function Tn(a,b,c){Yx();BX(a,b,c);}
function TO(){AXy=DT(B(49),0);AXz=DT(B(411),1);AXA=DT(B(412),2);AXB=DT(B(413),3);AXC=DT(B(414),4);AXD=DT(B(415),5);AU3=DT(B(416),6);AXE=G(Ce,[AXy,AXz,AXA,AXB,AXC,AXD,AU3]);}
var Rc=F(O);
function AR3(){var a=new Rc();VR(a);return a;}
function VR(a){X(a);}
function AGZ(a){var b;b=ASb(a);b.U=1;return b;}
var Jk=F(0);
var LX=F(Db);
function ASY(a,b,c,d){var e=new LX();AGe(e,a,b,c,d);return e;}
function AGe(a,b,c,d,e){H8(a,b,c,d,e);}
function AJ3(a,b,c,d){var e,f,g,h;e=a.fj.g0();f=a.fj.f9();g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.bd.bX()|0)>d.A())break a;h=a.bd.bt(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.f.c(b,c,d);}if((b+a.bd.bX()|0)>d.A()){d.dg=1;return (-1);}h=a.bd.bt(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function Ey(){var a=this;C.call(a);a.sK=0;a.rE=0;a.rF=0;a.sj=0;a.tI=0;a.za=0;a.wc=0;}
var AU4=null;function AXF(){var a=new Ey();Mg(a);return a;}
function Mg(a){J(a);a.sK=0;a.rE=0;a.rF=0;a.sj=0;a.tI=0;a.za=0;a.wc=0;}
var NT=F(Ey);
function ATl(a){var b=new NT();Vr(b,a);return b;}
function Vr(a,b){var c,d,e,f;Mg(a);c=ZL();d=c.kR();e=Tx();f=d.getElementById($rt_ustr(b));AU4=ASE(e,f);RP(new JF);}
var Iq=F(0);
var Iw=F(0);
function Mm(){N.call(this);this.zt=null;}
function ATe(a){var b=new Mm();ANg(b,a);return b;}
function ANg(a,b){a.zt=b;U(a);}
function AFP(a,b){return GR(b);}
function Lu(){var a=this;N.call(a);a.jx=null;a.un=null;}
function AQs(a,b){var c=new Lu();ANo(c,a,b);return c;}
function ANo(a,b,c){a.un=b;a.jx=c;U(a);}
function AEF(a,b){return a.bm^a.jx.dL(b);}
function ABE(a){var b,c;b=M();c=a.jx.iv(0);while(c>=0){b.lY(DL(c));b.bZ(124);c=a.jx.iv(c+1|0);}if(b.k()>0)b.tr(b.k()-1|0);return b.d();}
var Tp=F(BW);
function ASw(a,b,c){var d=new Tp();ALD(d,a,b,c);return d;}
function ALD(a,b,c,d){D5(a,b,c,d);Gk();b.E(AUG);}
function Yf(a,b,c,d){var e;while(true){e=a.O.c(b,c,d);if(e<=0)break;b=e;}return a.f.c(b,c,d);}
function Lr(){var a=this;N.call(a);a.p_=null;a.vR=null;}
function ARF(a,b){var c=new Lr();AJG(c,a,b);return c;}
function AJG(a,b,c){a.vR=b;a.p_=c;U(a);}
function Yl(a,b){return a.p_.n(b);}
function Ls(){var a=this;N.call(a);a.qc=null;a.zX=null;}
function AR0(a,b){var c=new Ls();AF$(c,a,b);return c;}
function AF$(a,b,c){a.zX=b;a.qc=c;U(a);}
function AA8(a,b){return a.qc.n(b)?0:1;}
function Lt(){var a=this;N.call(a);a.sr=0;a.s7=null;a.to=null;a.uB=null;}
function ASy(a,b,c,d){var e=new Lt();YB(e,a,b,c,d);return e;}
function YB(a,b,c,d,e){a.uB=b;a.sr=c;a.s7=d;a.to=e;U(a);}
function AO8(a,b){return !(a.sr^a.s7.n(b))&&!a.to.n(b)?0:1;}
var NP=F();
function Ly(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.py.data;f=b.qS;b.qS=f+1|0;g=AHs(e[f]);h=(g%2|0)!=1?0:1;c=c+BP(d,g/2|0)|0;d=d*46|0;if(!h)break;}return c;}
function Kn(b){var c,d;c=Ly(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function AHs(b){if(b<34)return b-32|0;if(b>=92)return (b-32|0)-2|0;return (b-32|0)-1|0;}
function L0(){var a=this;N.call(a);a.tm=0;a.oP=null;a.oY=null;a.vB=null;}
function ATw(a,b,c,d){var e=new L0();AA0(e,a,b,c,d);return e;}
function AA0(a,b,c,d,e){a.vB=b;a.tm=c;a.oP=d;a.oY=e;U(a);}
function ABS(a,b){return !(a.tm^a.oP.n(b))&&!a.oY.n(b)?1:0;}
function Lv(){var a=this;N.call(a);a.sy=0;a.o_=null;a.rc=null;a.vd=null;}
function ATs(a,b,c,d){var e=new Lv();Zx(e,a,b,c,d);return e;}
function Zx(a,b,c,d,e){a.vd=b;a.sy=c;a.o_=d;a.rc=e;U(a);}
function Wu(a,b){return a.sy^a.o_.n(b)&&a.rc.n(b)?1:0;}
function JP(){Bl.call(this);this.j5=null;}
function ATt(a){var b=new JP();ALL(b,a);return b;}
function ALL(a,b){var c,d;B8(a);c=M();d=0;while(d<b.k()){c.bZ(C5(CP(b.h(d))));d=d+1|0;}a.j5=c.d();a.bC=c.k();}
function AFh(a,b,c){var d;d=0;while(true){if(d>=a.j5.k())return a.j5.k();if(a.j5.h(d)!=C5(CP(c.h(b+d|0))))break;d=d+1|0;}return (-1);}
function Lw(){var a=this;N.call(a);a.r5=0;a.oL=null;a.sq=null;a.v0=null;}
function ASs(a,b,c,d){var e=new Lw();UT(e,a,b,c,d);return e;}
function UT(a,b,c,d,e){a.v0=b;a.r5=c;a.oL=d;a.sq=e;U(a);}
function AIn(a,b){return a.r5^a.oL.n(b)&&a.sq.n(b)?0:1;}
function Lx(){var a=this;N.call(a);a.tz=null;a.rK=0;a.t6=null;}
function APO(a,b,c){var d=new Lx();AHf(d,a,b,c);return d;}
function AHf(a,b,c,d){a.t6=b;a.tz=c;a.rK=d;U(a);}
function ADA(a,b){return a.tz.n(b)&&a.rK^a.t6.M.dL(b)?1:0;}
function Sb(){N.call(this);this.y7=null;}
function ATo(a){var b=new Sb();TA(b,a);return b;}
function TA(a,b){a.y7=b;U(a);}
function ADk(a,b){return OT(b);}
function Lp(){var a=this;N.call(a);a.sd=null;a.re=0;a.rI=null;}
function ATq(a,b,c){var d=new Lp();AFv(d,a,b,c);return d;}
function AFv(a,b,c,d){a.rI=b;a.sd=c;a.re=d;U(a);}
function ALH(a,b){return a.sd.n(b)&&a.re^a.rI.M.dL(b)?0:1;}
var PF=F(B5);
var Ph=F(DF);
function Ih(a){var b=new Ph();ADQ(b,a);return b;}
function M(){var a=new Ph();ANy(a);return a;}
function ADQ(a,b){GK(a,b);}
function ANy(a){GY(a);}
function AF_(a,b){Om(a,b);return a;}
function Uv(a,b){PY(a,b);return a;}
function AGE(a,b){Lc(a,b);return a;}
function AB4(a,b){Rj(a,b);return a;}
function Uk(a,b){HX(a,b);return a;}
function YD(a,b,c,d){Jj(a,b,c,d);return a;}
function AKJ(a,b){Iy(a,b);return a;}
function AK7(a,b,c){PE(a,b,c);return a;}
function AJc(a,b,c,d,e){GE(a,b,c,d,e);return a;}
function AN2(a,b,c){MW(a,b,c);return a;}
function AG8(a,b,c){Jo(a,b,c);return a;}
function AMQ(a,b,c){Sp(a,b,c);return a;}
function ALm(a,b){R3(a,b);return a;}
function AEf(a,b,c){Q5(a,b,c);return a;}
function AEq(a,b){RL(a,b);}
function ZU(a,b,c,d,e){Ns(a,b,c,d,e);}
function AD$(a,b,c,d,e){return a.Ap(b,c,d,e);}
function Zi(a,b,c,d){return a.xK(b,c,d);}
function We(a){return HK(a);}
function WS(a){return Im(a);}
function AEu(a,b){GT(a,b);}
function AF8(a,b,c){return a.x8(b,c);}
function AFb(a,b,c){return a.zK(b,c);}
function AB5(a,b,c){return a.zm(b,c);}
function AON(a,b,c){return a.uW(b,c);}
var EY=F();
function AXG(){var a=new EY();SS(a);return a;}
function SS(a){J(a);}
function GZ(){var a=this;EY.call(a);a.qa=null;a.rG=null;a.yS=null;}
function AXH(a,b,c){var d=new GZ();MT(d,a,b,c);return d;}
function MT(a,b,c,d){SS(a);Ps();if(d!==AWu&&d!==AWt)H(BI(((((M()).a(B(417))).it(d)).a(B(418))).d()));a.qa=b;a.rG=AIG(c);a.yS=d;}
function AFq(a){return a.rG;}
function AIG(b){var c;c=b.ne(B(419),B(420));if(c.ys(B(420)))c=c.gj(0,c.k()-1|0);return c;}
function SP(){var a=this;C.call(a);a.r3=null;a.cq=null;a.oq=null;a.sT=null;a.pa=null;a.qH=null;a.lB=null;a.ls=null;}
function AR_(a){var b=new SP();Vw(b,a);return b;}
function Vw(a,b){J(a);a.r3=b;Qp(a);}
function Qp(a){var b,c,d;b=Ex(AUM.fy(B(421)));c=(Sf(b,64,64)).data[0];d=c.data;a.sT=d[0];a.pa=d[1];a.qH=d[2];a.lB=d[3];a.ls=(Sf(b,64,64)).data[1].data[2];a.oq=Ew(b,0,64,128,128);a.cq=Gz();(a.cq.kf()).fM(0.0,0.0,480.0,320.0);}
function ANm(a){var b;b=AUJ.ip();Gr();if(b!==AUc&&AUJ.ip()!==AUh)return;if(a.r3.V.bD==2){a.cq.el();a.cq.dd(a.oq,0.0,0.0);a.cq.dd(a.ls,416.0,182.0);a.cq.dd(a.lB,416.0,256.0);a.cq.dM();}else{a.cq.el();a.cq.dd(a.sT,0.0,0.0);a.cq.dd(a.pa,70.0,0.0);a.cq.dd(a.lB,416.0,256.0);a.cq.dd(a.ls,416.0,182.0);a.cq.dd(a.qH,416.0,0.0);a.cq.dM();}}
function AAQ(a){(a.oq.fL()).J();a.cq.J();}
function Ni(){var a=this;Bf.call(a);a.nW=null;a.nb=null;}
function IC(a,b){var c=new Ni();ANJ(c,a,b);return c;}
function ANJ(a,b,c){BZ(a);a.nW=b;a.nb=c;}
function VJ(a,b,c,d){var e;e=a.nW.c(b,c,d);if(e<0)e=a.nb.c(b,c,d);if(e>=0)return e;return (-1);}
function AHv(a,b){a.f=b;a.nb.E(b);a.nW.E(b);}
function W5(a,b){return 1;}
function Wn(a,b){return 1;}
var RS=F(Be);
function APX(){var a=new RS();AOi(a);return a;}
function AOi(a){B7(a);}
var Ki=F();
function AR$(){var a=new Ki();AEm(a);return a;}
function AEm(a){J(a);}
var F3=F(0);
var Kh=F();
function AQY(){var a=new Kh();WQ(a);return a;}
function WQ(a){J(a);}
var Go=F(0);
function DN(){var a=this;C.call(a);a.e0=null;a.e7=null;}
function AXI(a,b){var c=new DN();Jy(c,a,b);return c;}
function Jy(a,b,c){J(a);a.e0=b;a.e7=c;}
function Ht(){var a=this;DN.call(a);a.ko=null;a.rU=0;}
function ARZ(a,b){var c=new Ht();AIh(c,a,b);return c;}
function AIh(a,b,c){Jy(a,b,c);a.rU=b.d9();}
function V7(a){return a.e0.d9();}
function AMb(a,b,c){return a.rU==b.d9()&&a.e0.X(b)?1:0;}
var DV=F(BO);
function AQM(){var a=new DV();ALM(a);return a;}
function ALM(a){De(a,0);}
function AMz(a,b,c,d){if(d.qt()!=1&&b!=d.A())return (-1);d.uI();d.nN(0,b);return b;}
var Ro=F(Bl);
function D0(a){var b=new Ro();AF1(b,a);return b;}
function AF1(a,b){Kr(a,b);a.bC=0;}
function AKh(a,b,c){return 0;}
function AAz(a,b,c,d){var e,f,g,h,i;e=d.A();f=d.cW();while(true){g=Cm(b,e);if(g>0)return (-1);if(g<0){h=c.h(b);if(BV(h)&&b>f){i=c.h(b-1|0);if(BH(i)){b=b+1|0;continue;}}}if(a.f.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function XR(a,b,c,d,e){var f,g,h,i;f=e.A();g=e.cW();while(true){if(c<b)return (-1);if(c<f){h=d.h(c);if(BV(h)&&c>g){i=d.h(c-1|0);if(BH(i)){c=c+(-1)|0;continue;}}}if(a.f.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function U3(a,b){return 0;}
function Ll(){var a=this;C.call(a);a.hj=null;a.ca=0;a.u0=Cs;}
function ABW(a){var b=new Ll();AFU(b,a);return b;}
function AFU(a,b){var c,d,e,f;c=b.data;J(a);a.u0=T(-1);d=c.length;if(!d)H(Bp(B(422)));e=Bh(D4,d);f=0;while(f<d){e.data[f]=c[f];f=f+1|0;}a.hj=e;a.ca=KR(a);}
function KR(a){var b,c,d;b=0;c=0;while(c<a.hj.data.length){d=a.hj.data[c];d.db=b;b=b+MM(d)|0;c=c+1|0;}return b;}
function CQ(a){return a.hj.data.length;}
function B$(a,b){return a.hj.data[b];}
var NW=F(DE);
function APe(a,b,c,d,e,f){var g=new NW();UO(g,a,b,c,d,e,f);return g;}
function UO(a,b,c,d,e,f,g){Jf(a,b,c,d,e,f,g);}
function T6(a,b){var c,d,e,f;c=a.b7.s.data;d=a.b2;e=b*4|0;f=c[d+e|0]&255|(a.b7.s.data[(a.b2+e|0)+1|0]&255)<<8|(a.b7.s.data[(a.b2+e|0)+2|0]&255)<<16|(a.b7.s.data[(a.b2+e|0)+3|0]&255)<<24;return $rt_intBitsToFloat(f);}
function AEw(a,b,c){var d,e,f,g;d=$rt_floatToIntBits(c);e=a.b7.s.data;f=a.b2;g=b*4|0;e[f+g|0]=d<<24>>24;a.b7.s.data[(a.b2+g|0)+1|0]=d>>8<<24>>24;a.b7.s.data[(a.b2+g|0)+2|0]=d>>16<<24>>24;a.b7.s.data[(a.b2+g|0)+3|0]=d>>24<<24>>24;}
var Nt=F(D8);
function AXJ(a){var b=new Nt();XP(b,a);return b;}
function XP(a,b){HI(a,b);}
var Q7=F(O);
function ASD(){var a=new Q7();V_(a);return a;}
function V_(a){X(a);}
function ZZ(a){return (B1()).bq(0,127);}
var IE=F(B3);
var Oh=F();
function ANj(b,c,d){if(b===null)return null;return AQ6(b,Qv(b),c,d);}
function KO(){var a=this;C.call(a);a.kH=0;a.tl=0;a.qB=0;a.rB=0;a.hm=null;}
function APB(a){var b=new KO();AH6(b,a);return b;}
function AH6(a,b){a.hm=b;J(a);a.tl=a.hm.eJ;a.qB=a.hm.cT();a.rB=(-1);}
function AGy(a){return a.kH>=a.qB?0:1;}
function ALU(a){var b,c;L4(a);a.rB=a.kH;b=a.hm;c=a.kH;a.kH=c+1|0;return b.R(c);}
function L4(a){if(a.tl>=a.hm.eJ)return;H(APX());}
function Kb(){var a=this;DZ.call(a);a.mK=0;a.jR=0;}
function AR1(a,b){var c=new Kb();AC9(c,a,b);return c;}
function AC9(a,b,c){Gq(a);a.mK=b;a.jR=c;}
function ABC(a){return a.mK;}
function AMh(a){return a.jR;}
function AGU(a){return ((((((M()).a(B(423))).l(a.mK)).a(B(249))).a(a.jR==2147483647?B(45):(RN(a.jR)).d())).a(B(424))).d();}
function JZ(){N.call(this);this.xn=null;}
function APz(a){var b=new JZ();AKP(b,a);return b;}
function AKP(a,b){a.xn=b;U(a);}
function VW(a,b){return JL(b);}
var Pw=F();
function AS3(){var a=new Pw();Ui(a);return a;}
function Ui(a){J(a);}
function AMp(a,b){if(b<=0)H(CR());return a.wS()*b|0;}
function AAm(a){return Math.random();}
var If=F(0);
var Mr=F();
var Tr=F(BU);
function ASp(a,b,c){var d=new Tr();AI5(d,a,b,c);return d;}
function AI5(a,b,c,d){DX(a,b,c,d);}
function Ve(a,b,c,d){var e;a:{while(true){if((b+a.bd.bX()|0)>d.A())break a;e=a.bd.bt(b,c);if(e<1)break;b=b+e|0;}}return a.f.c(b,c,d);}
function K_(){N.call(this);this.zW=null;}
function AQy(a){var b=new K_();AFB(b,a);return b;}
function AFB(a,b){a.zW=b;U(a);}
function AHD(a,b){return DH(b);}
var GJ=F(0);
var OR=F();
function ASM(){var a=new OR();Wi(a);return a;}
function Wi(a){J(a);}
function KW(){N.call(this);this.y3=null;}
function AP_(a){var b=new KW();AN6(b,a);return b;}
function AN6(a,b){a.y3=b;U(a);}
function AM0(a,b){return R9(b);}
function PI(){var a=this;C.call(a);a.ml=null;a.ly=null;a.vW=null;}
function ZL(){var a=new PI();ACe(a);return a;}
function ACe(a){J(a);a.ml=window;a.vW=AQ8();}
function ADD(a){var b;b=a.ml.document;return b;}
function AK3(a,b){a.ly=b;requestAnimationFrame(BA(a,"onAnimationFrame"));}
function AAJ(a,b){var c;c=a.ly;a.ly=null;c.g3();}
function Wv(a){var b;b=a.ml.location;return b;}
function AHX(a,b){a.y$(b);}
var Nr=F(BU);
function ASO(a,b,c){var d=new Nr();AO6(d,a,b,c);return d;}
function AO6(a,b,c,d){DX(a,b,c,d);}
function AHM(a,b,c,d){var e;while(true){e=a.f.c(b,c,d);if(e>=0)break;if((b+a.bd.bX()|0)<=d.A()){e=a.bd.bt(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
function JE(){var a=this;C.call(a);a.cI=null;a.jl=0.0;a.w0=0.0;a.pY=0;a.tf=0.0;a.cF=null;}
function Cg(a,b){var c=new JE();Ol(c,a,b);return c;}
function Ol(a,b,c){J(a);Fd();a.cF=AVc;a.jl=b;a.v6(c);}
function AIO(a,b,c){var d,e,f,g;a:{d=a.cF;if(c){e=a.cF;Fd();if(!(e!==AVc&&a.cF!==AVg)){if(a.cF!==AVc){a.cF=AVh;break a;}a.cF=AVd;break a;}}if(!c){f=a.cF;Fd();if(f!==AVc&&a.cF!==AVg){if(a.cF!==AVh)a.cF=AVd;else a.cF=AVg;}}}g=a.vP(b);a.cF=d;return g;}
function ANS(a,b){var c;c=a.xy(b);return a.cI.data[c];}
function AJB(a,b){var c,d,e;if(a.cI.data.length==1)return 0;a:{c=b/a.jl|0;AQd();switch(AVb.data[Y(a.cF)]){case 1:c=By(a.cI.data.length-1|0,c);break a;case 2:c=c%a.cI.data.length|0;break a;case 3:c=c%((a.cI.data.length*2|0)-2|0)|0;if(c<a.cI.data.length)break a;c=(a.cI.data.length-2|0)-(c-a.cI.data.length|0)|0;break a;case 4:d=a.tf/a.jl|0;if(d==c){c=a.pY;break a;}c=KG(a.cI.data.length-1|0);break a;case 5:c=BB((a.cI.data.length-c|0)-1|0,0);break a;case 6:e=c%a.cI.data.length|0;c=(a.cI.data.length-e|0)-1|0;break a;default:}}a.pY
=c;a.tf=b;return c;}
function ADJ(a,b){var c;c=b.data;a.cI=b;a.w0=c.length*a.jl;}
var M1=F();
function O6(b,c){return II(b,c);}
function FH(){var a=this;C.call(a);a.cO=null;a.bP=null;a.hu=0;a.gy=0;a.dY=null;a.ir=0;a.se=null;}
var AXK=null;function Fc(){Fc=P(FH);AOf();}
function Wz(a,b,c,d){var e=new FH();R6(e,a,b,c,d);return e;}
function AXL(a,b,c,d,e){var f=new FH();HP(f,a,b,c,d,e);return f;}
function AXM(a,b,c,d,e){var f=new FH();Jg(f,a,b,c,d,e);return f;}
function R6(a,b,c,d,e){Fc();J(a);a.hu=1;a.ir=0;a.se=Bb();a.cO=OW(a,b,c,ABW(e));a.bP=ABL(b,d);a.gy=0;HY(AUJ,a);}
function OW(a,b,c,d){if(AUP===null)return AE2(b,c,d);return AEe(b,c,d);}
function HP(a,b,c,d,e,f){Fc();Jg(a,b,c,d,e,ABW(f));}
function Jg(a,b,c,d,e,f){Fc();a:{b:{J(a);a.hu=1;a.ir=0;a.se=Bb();ARR();switch(AXt.data[Y(b)]){case 1:break;case 2:a.cO=AS6(c,d,f);a.bP=AOc(c,e);a.gy=0;break a;case 3:a.cO=AEe(c,d,f);a.bP=AOc(c,e);a.gy=0;break a;case 4:break b;default:break b;}a.cO=AE2(c,d,f);a.bP=ABL(c,e);a.gy=0;break a;}a.cO=ASQ(d,f);a.bP=AS$(e);a.gy=1;}HY(AUJ,a);}
function AI7(a,b,c,d){a.cO.m2(b,c,d);return a;}
function XU(a,b){var c;c=b.data;a.bP.rW(b,0,c.length);return a;}
function ZD(a){return a.bP.cX();}
function ANr(a){return a.cO.hf();}
function ANX(a,b){a.hu=b;}
function Y6(a,b){a.gR(b,null);}
function AKB(a,b,c){a.cO.gR(b,c);if(a.dY!==null&&a.dY.tJ()>0)a.dY.gR(b,c);if(a.bP.cX()>0)a.bP.cR();}
function AKs(a,b){a.gw(b,null);}
function Vu(a,b,c){a.cO.gw(b,c);if(a.dY!==null&&a.dY.tJ()>0)a.dY.gw(b,c);if(a.bP.cX()>0)a.bP.sn();}
function AAI(a,b,c){a.rq(b,c,0,a.bP.jj()<=0?a.hf():a.cX(),a.hu);}
function AO3(a,b,c,d,e){a.rq(b,c,d,e,a.hu);}
function AF9(a,b,c,d,e,f){var g,h,i,j,k,l,m;if(!e)return;if(f)a.n2(b);if(a.gy){if(a.bP.cX()<=0)AUO.qg(c,d,e);else{g=a.bP.mL();h=Ca(g);i=Bi(g);g.cj(d);g.bY(d+e|0);AUO.wL(c,e,5123,g);g.cj(h);g.bY(i);}}else{j=0;if(a.ir)j=a.dY.tJ();if(a.bP.cX()<=0){if(a.ir&&j>0)AUP.Eq(c,d,e,j);else AUO.qg(c,d,e);}else{if((e+d|0)>a.bP.jj()){k=new HM;l=(((((M()).a(B(425))).l(e)).a(B(426))).l(d)).a(B(427));m=a.bP;MK(k,((l.l(m.jj())).a(B(250))).d());H(k);}if(a.ir&&j>0)AUP.Dy(c,e,5123,d*2|0,j);else AUO.yk(c,e,5123,d*2|0);}}if(f)a.nE(b);}
function ACO(a){Fc();if(AXK.K(AUJ)!==null)(AXK.K(AUJ)).k8(a,1);a.cO.J();if(a.dY!==null)a.dY.J();a.bP.J();}
function AHm(a,b){var c,d,e;c=a.cO.jY();d=CQ(c);e=0;while(e<d){if((B$(c,e)).j0==b)return B$(c,e);e=e+1|0;}return null;}
function Yj(a){return a.cO.jY();}
function Zz(a){return a.cO.ms();}
function ADX(a){return a.bP.mL();}
function HY(b,c){var d;Fc();d=AXK.K(b);if(d===null)d=Cu();d.cr(c);AXK.bn(b,d);}
function AOf(){AXK=Ck();}
function OU(){C.call(this);this.oQ=null;}
function AQf(a){var b=new OU();AIH(b,a);return b;}
function AIH(a,b){J(a);a.oQ=b;}
function AK1(a,b){var c,d;c=new GZ;d=a.oQ;Ps();MT(c,d,b,AWu);return c;}
function Ik(){var a=this;DN.call(a);a.kc=0;a.dJ=null;}
function ASC(a,b){var c=new Ik();AIk(c,a,b);return c;}
function AIk(a,b,c){Jy(a,b,null);a.kc=c;}
var K$=F();
function F7(b,c){var d;if(b<0)H(Bp((((M()).a(B(428))).l(b)).d()));d=Fm(BB(2,Hs(b/c)|0));if(d<=1073741824)return d;H(Bp((((M()).a(B(429))).l(b)).d()));}
var R7=F(Ba);
function ASL(){var a=new R7();ADf(a);return a;}
function ADf(a){BF(a);}
function AHq(a,b,c,d){var e;e=!d.hi()?d.A():c.k();if(b<e)return (-1);d.dg=1;d.yX=1;return a.f.c(b,c,d);}
function TD(a,b){return 0;}
function QC(){var a=this;C.call(a);a.lr=0;a.eh=null;a.fx=null;a.p3=0.0;a.lK=0;a.n3=0;a.gE=0;}
function EJ(){var a=new QC();AEG(a);return a;}
function AXN(a,b){var c=new QC();NO(c,a,b);return c;}
function AEG(a){NO(a,51,0.800000011920929);}
function NO(a,b,c){var d;J(a);if(c>0.0&&c<1.0){a.p3=c;d=F7(b,c);a.lK=d*c|0;a.gE=d-1|0;a.n3=CE(T(a.gE));a.eh=Bh(C,d);a.fx=W(d);return;}H(Bp((((M()).a(B(17))).hF(c)).d()));}
function AFz(a,b){return DB(Cd(C1(T(b.d9()),BK(2135587861, 2654435769)),a.n3));}
function Yi(a,b){var c,d,e;if(b===null)H(Bp(B(386)));c=a.eh;d=a.ht(b);while(true){e=c.data[d];if(e===null)return  -(d+1|0)|0;if(e.X(b))break;d=(d+1|0)&a.gE;}return d;}
function AKC(a,b,c){var d,e;d=a.g5(b);if(d>=0){a.fx.data[d]=c;return;}e= -(d+1|0)|0;a.eh.data[e]=b;a.fx.data[e]=c;e=a.lr+1|0;a.lr=e;if(e>=a.lK)Ry(a,a.eh.data.length<<1);}
function Os(a,b,c){var d,e,f;d=a.eh;e=a.ht(b);while(true){f=d.data;if(f[e]===null)break;e=(e+1|0)&a.gE;}f[e]=b;a.fx.data[e]=c;}
function W9(a,b,c){var d;d=a.g5(b);if(d>=0)c=a.fx.data[d];return c;}
function Ry(a,b){var c,d,e,f,g;a:{c=a.eh.data.length;a.lK=b*a.p3|0;a.gE=b-1|0;a.n3=CE(T(a.gE));d=a.eh;e=a.fx;a.eh=Bh(C,b);a.fx=W(b);if(a.lr>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g!==null)Os(a,g,e.data[f]);f=f+1|0;}}}}
function Py(){var a=this;C.call(a);a.nR=null;a.ph=null;a.kS=null;}
function AQ5(a,b,c){var d=new Py();Z6(d,a,b,c);return d;}
function Z6(a,b,c,d){a.kS=b;a.nR=c;a.ph=d;J(a);}
function AKk(a,b){if($rt_str(b.type).X(B(430)))a.kS.hE.cQ(a.nR);else a.kS.hE.cU(a.nR,a.ph);a.kS.kD.gP();}
function AI3(a,b){a.c8(b);}
var Q3=F(O);
function APi(){var a=new Q3();ADB(a);return a;}
function ADB(a){X(a);}
function ALA(a){return (B1()).bq(65,90);}
function Du(){var a=this;B4.call(a);a.bG=0;a.s=null;a.fa=null;}
function KP(a,b,c,d,e,f){D6(a,c);Df();a.fa=AUu;a.bG=b;a.s=d;a.C=e;a.Q=f;}
function Eg(b){if(b>=0)return ARc(b,1);H(Bp((((M()).a(B(431))).l(b)).d()));}
function ADd(b,c,d){return AQv(0,b.data.length,b,c,c+d|0,0,0);}
function MG(b){return ADd(b,0,b.data.length);}
function AMG(a,b,c,d){var e,f,g,h,i,j;if(!d)return a;if(a.ce())H(C9());if(Bq(a)<d)H(G9());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)H(Bg((((((M()).a(B(432))).l(g)).a(B(330))).l(f)).d()));if(d<0)H(Bg(((((M()).a(B(331))).l(d)).a(B(332))).d()));h=a.C+a.bG|0;i=0;while(i<d){j=a.s.data;g=h+1|0;f=c+1|0;j[h]=e[c];i=i+1|0;h=g;c=f;}a.C=a.C+d|0;return a;}}e=b.data;H(Bg(((((((M()).a(B(333))).l(c)).a(B(42))).l(e.length)).a(B(250))).d()));}
function Nn(a,b){return a.p5(b,0,b.data.length);}
function D2(a,b){a.fa=b;return a;}
function GW(a){Ej(a);return a;}
function RK(a){ES(a);return a;}
function ZX(a,b){Fr(a,b);return a;}
function ALd(a,b){Eq(a,b);return a;}
function Xf(a){return RK(a);}
function AH4(a,b){return a.wl(b);}
function UZ(a,b){return a.wT(b);}
function Sk(){var a=this;Du.call(a);a.xi=0;a.le=0;}
function ARc(a,b){var c=new Sk();ACM(c,a,b);return c;}
function AQv(a,b,c,d,e,f,g){var h=new Sk();Kg(h,a,b,c,d,e,f,g);return h;}
function ACM(a,b,c){Kg(a,0,b,Dv(b),0,b,c,0);}
function Kg(a,b,c,d,e,f,g,h){KP(a,b,c,d,e,f);a.xi=g;a.le=h;}
function TW(a,b){if(b>=0&&b<a.Q)return a.s.data[a.bG+b|0];H(Bg(((((((M()).a(B(293))).l(b)).a(B(42))).l(a.Q)).a(B(250))).d()));}
function AMm(a){return a.le;}
function AOk(a){var b,c;b=Bq(a)/2|0;c=a.fa;Df();if(c!==AUu)return ASV(a.bG+a.C|0,b,a,0,b,a.ce());return APb(a.bG+a.C|0,b,a,0,b,a.ce());}
function ALe(a,b){var c,d,e,f,g;if(b>=0&&(b+3|0)<a.Q){c=a.s.data[a.bG+b|0]&255;d=a.s.data[(a.bG+b|0)+1|0]&255;e=a.s.data[(a.bG+b|0)+2|0]&255;f=a.s.data[(a.bG+b|0)+3|0]&255;g=a.fa;Df();if(g!==AUu)return f<<24|e<<16|d<<8|c;return c<<24|d<<16|e<<8|f;}H(Bg(((((((M()).a(B(293))).l(b)).a(B(42))).l(a.Q-3|0)).a(B(250))).d()));}
function ABk(a,b,c){var d;if(a.le)H(C9());if(b>=0&&(b+3|0)<a.Q){d=a.fa;Df();if(d!==AUu){a.s.data[a.bG+b|0]=c<<24>>24;a.s.data[(a.bG+b|0)+1|0]=c>>8<<24>>24;a.s.data[(a.bG+b|0)+2|0]=c>>16<<24>>24;a.s.data[(a.bG+b|0)+3|0]=c>>24<<24>>24;}else{a.s.data[a.bG+b|0]=c>>24<<24>>24;a.s.data[(a.bG+b|0)+1|0]=c>>16<<24>>24;a.s.data[(a.bG+b|0)+2|0]=c>>8<<24>>24;a.s.data[(a.bG+b|0)+3|0]=c<<24>>24;}return a;}H(Bg(((((((M()).a(B(293))).l(b)).a(B(42))).l(a.Q-3|0)).a(B(250))).d()));}
function AOs(a){var b,c;b=Bq(a)/4|0;c=a.fa;Df();if(c!==AUu)return ARY(a.bG+a.C|0,b,a,0,b,a.ce());return APJ(a.bG+a.C|0,b,a,0,b,a.ce());}
function AGw(a){var b,c;b=Bq(a)/4|0;c=a.fa;Df();if(c!==AUv)return ASx(a.bG+a.C|0,b,a,0,b,a.ce());return APe(a.bG+a.C|0,b,a,0,b,a.ce());}
function I$(){var a=this;C.call(a);a.ja=null;a.ln=0.0;}
function ASh(a,b){var c=new I$();ABr(c,a,b);return c;}
function ABr(a,b,c){J(a);a.ja=Bb();a.ln=0.0;(a.ja.d3(b)).fw();a.ln=c;}
function AEO(a,b,c,d){(((a.ja.d3(b)).ty(c)).wy(c.Z-d.Z,c.bb-d.bb,c.ba-d.ba)).fw();a.ln= -b.xM(a.ja);}
function EK(){var a=this;C.call(a);a.eP=null;a.bL=null;a.gN=null;}
var AXO=null;var AXP=null;var AXQ=null;function ADr(){ADr=P(EK);AEk();}
function AR2(){var a=new EK();Ko(a);return a;}
function Ko(a){var b;ADr();J(a);a.eP=Bh(I$,6);a.bL=G(Cx,[Bb(),Bb(),Bb(),Bb(),Bb(),Bb(),Bb(),Bb()]);a.gN=Cf(24);b=0;while(b<6){a.eP.data[b]=ASh(Bb(),0.0);b=b+1|0;}}
function AHi(a,b){var c,d,e,f,g,h;ADr();CB(AXP,0,a.gN,0,AXP.data.length);RF(b.b,a.gN,0,8,3);c=0;d=0;while(c<8){e=a.bL.data[c];f=a.gN.data;g=d+1|0;e.Z=f[d];f=a.gN.data;h=g+1|0;e.bb=f[g];f=a.gN.data;d=h+1|0;e.ba=f[h];c=c+1|0;}a.eP.data[0].fU(a.bL.data[1],a.bL.data[0],a.bL.data[2]);a.eP.data[1].fU(a.bL.data[4],a.bL.data[5],a.bL.data[7]);a.eP.data[2].fU(a.bL.data[0],a.bL.data[4],a.bL.data[3]);a.eP.data[3].fU(a.bL.data[5],a.bL.data[1],a.bL.data[6]);a.eP.data[4].fU(a.bL.data[2],a.bL.data[3],a.bL.data[6]);a.eP.data[5].fU(a.bL.data[4],
a.bL.data[0],a.bL.data[1]);}
function AEk(){var b,c,d,e,f,g,h,i;AXO=G(Cx,[BY((-1.0),(-1.0),(-1.0)),BY(1.0,(-1.0),(-1.0)),BY(1.0,1.0,(-1.0)),BY((-1.0),1.0,(-1.0)),BY((-1.0),(-1.0),1.0),BY(1.0,(-1.0),1.0),BY(1.0,1.0,1.0),BY((-1.0),1.0,1.0)]);AXP=Cf(24);b=0;c=AXO.data;d=c.length;e=0;while(e<d){f=c[e];g=AXP.data;h=b+1|0;g[b]=f.Z;g=AXP.data;i=h+1|0;g[h]=f.bb;g=AXP.data;b=i+1|0;g[i]=f.ba;e=e+1|0;}AXQ=Bb();}
function HW(){var a=this;C.call(a);a.pA=null;a.sB=null;}
var AXR=null;function ARA(){ARA=P(HW);AKb();}
function APF(a,b){var c=new HW();Sg(c,a,b);return c;}
function Sg(a,b,c){ARA();J(a);a.pA=Bb();a.sB=Bb();a.pA.d3(b);(a.sB.d3(c)).fw();}
function AKb(){AXR=Bb();}
function Kw(){Ba.call(this);this.rl=null;}
function ASN(a){var b=new Kw();AII(b,a);return b;}
function AII(a,b){BF(a);a.rl=b;}
function XJ(a,b,c,d){var e,f;a:{if(b!=d.A()){if(!b)break a;if(d.f3()&&b==d.cW())break a;e=a.rl;f=b-1|0;if(e.r$(c.h(f),c.h(b)))break a;}return (-1);}return a.f.c(b,c,d);}
function ABp(a,b){return 0;}
function J0(){var a=this;Cp.call(a);a.fS=null;a.l1=null;a.mm=null;}
function APM(a){var b=new J0();Xo(b,a);return b;}
function Xo(a,b){El(a,b);}
function VO(a){a.fS=ARH();a.l1=AQr(a.fS);a.mm=AR_(a.fS);}
function AEB(a,b){var c;c=I4(0.05999999865889549,AUI.tv());a.fS.eb(c);AUN.pf(0.10000000149011612,0.10000000149011612,0.10000000149011612,1.0);AUN.ij(16384);a.l1.gs(c);a.mm.mX();if(a.fS.D.N.c9(a.fS.hl.ex))a.c$.f6(APl(a.c$));if(AUL.ct(111))a.c$.f6(PD(a.c$));}
function Vk(a){AUJ.fk(B(242),B(433));a.l1.J();a.mm.J();}
var Rm=F();
var Hl=F();
var AU8=null;function ASP(){ASP=P(Hl);AEt();}
function AEt(){AU8=W((ND()).data.length);AU8.data[Y(AUV)]=1;AU8.data[Y(AUW)]=2;}
function Fw(){var a=this;C.call(a);a.cM=null;a.dp=null;a.j7=0;a.zr=0;a.mv=0;a.gC=0;a.i1=0;}
function AE2(a,b,c){var d=new Fw();PC(d,a,b,c);return d;}
function PC(a,b,c,d){J(a);a.gC=0;a.i1=0;a.zr=b;a.cM=d;a.dp=FO(BP(a.cM.ca/4|0,c));a.dp.b8();a.j7=AUO.gL();a.mv=!b?35048:35044;}
function ABo(a){return a.cM;}
function AJg(a){return Bi(a.dp)/(a.cM.ca/4|0)|0;}
function ABe(a){a.gC=1;return a.dp;}
function Tb(a){if(a.i1){AUO.d4(34962,Bi(a.dp),a.dp,a.mv);a.gC=0;}}
function AHd(a,b,c,d){a.gC=1;I6(b,a.dp,d,c);a.dp.cj(0);a.dp.bY(d);Tb(a);}
function AAl(a,b,c){var d,e,f,g,h,i;d=AUO;d.bS(34962,a.j7);if(a.gC){d.d4(34962,Bi(a.dp),a.dp,a.mv);a.gC=0;}a:{e=CQ(a.cM);if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data;h=B$(a.cM,f);i=g[f];if(i>=0){b.hx(i);if(h.j0!=4)b.fp(i,h.dr,5126,0,a.cM.ca,h.db);else b.fp(i,h.dr,5121,1,a.cM.ca,h.db);}f=f+1|0;}}f=0;while(f<e){h=B$(a.cM,f);i=b.jz(h.fn);if(i>=0){b.hx(i);if(h.j0!=4)b.fp(i,h.dr,5126,0,a.cM.ca,h.db);else b.fp(i,h.dr,5121,1,a.cM.ca,h.db);}f=f+1|0;}}a.i1=1;}
function VL(a,b,c){var d,e,f,g;a:{d=AUO;e=CQ(a.cM);if(c===null){f=0;while(f<e){b.pE((B$(a.cM,f)).fn);f=f+1|0;}}else{f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0)b.ma(g);f=f+1|0;}}}d.bS(34962,0);a.i1=0;}
function AMd(a){var b;b=AUO;b.bS(34962,0);b.hh(a.j7);a.j7=0;}
var K7=F(Fw);
function ASQ(a,b){var c=new K7();AJM(c,a,b);return c;}
function AJM(a,b,c){PC(a,0,b,c);}
var Je=F(0);
function FQ(){C.call(this);this.dN=null;}
function Oz(a){J(a);}
function ADi(a){if(a.dN!==null)a.dN.gs(AUI.tv());}
function VP(a,b,c){if(a.dN!==null)a.dN.kW(b,c);}
function AM3(a,b){if(a.dN!==null)a.dN.j_();a.dN=b;if(a.dN!==null){a.dN.kv();a.dN.kW(AUI.T(),AUI.F());}}
var Qq=F(O);
function ATj(){var a=new Qq();ABN(a);return a;}
function ABN(a){X(a);}
function AJU(a){return (B1()).bq(97,122);}
var HV=F(0);
var RB=F();
var RI=F(FQ);
function APq(){var a=new RI();ADZ(a);return a;}
function ADZ(a){Oz(a);}
function AOy(a){a.f6(PD(a));}
var NU=F(O);
function AS4(){var a=new NU();Xk(a);return a;}
function Xk(a){X(a);}
function AIx(a){return ATh(a);}
var E_=F();
function Mz(a){J(a);}
function ON(){var a=this;C.call(a);a.d_=null;a.c7=null;a.hY=0;a.wK=0;a.g4=0;a.jr=0;a.sk=0;}
function AOc(a,b){var c=new ON();ZH(c,a,b);return c;}
function ZH(a,b,c){J(a);a.g4=1;a.jr=0;a.c7=Hm(c*2|0);a.wK=1;a.sk=!b?35048:35044;a.d_=a.c7.o9();a.d_.b8();a.c7.b8();a.hY=SU(a);}
function SU(a){var b;b=AUO.gL();AUO.bS(34963,b);AUO.d4(34963,DC(a.c7),null,a.sk);AUO.bS(34963,0);return b;}
function AIM(a){return Bi(a.d_);}
function T7(a){return DC(a.d_);}
function AC5(a,b,c,d){a.g4=1;a.d_.cm();a.d_.rV(b,c,d);a.d_.b8();a.c7.cj(0);a.c7.bY(d<<1);if(a.jr){AUO.lq(34963,0,Bi(a.c7),a.c7);a.g4=0;}}
function AM9(a){a.g4=1;return a.d_;}
function ADU(a){if(!a.hY)H(BI(B(434)));AUO.bS(34963,a.hY);if(a.g4){a.c7.bY(Bi(a.d_)*2|0);AUO.lq(34963,0,Bi(a.c7),a.c7);a.g4=0;}a.jr=1;}
function W2(a){AUO.bS(34963,0);a.jr=0;}
function Xt(a){var b;b=AUO;b.bS(34963,0);b.hh(a.hY);a.hY=0;}
var Lk=F(Ba);
function AQj(){var a=new Lk();AKV(a);return a;}
function AKV(a){BF(a);}
function ADx(a,b,c,d){if(b!=d.wN())return (-1);return a.f.c(b,c,d);}
function AOB(a,b){return 0;}
function QF(){var a=this;C.call(a);a.qh=0;a.ji=0;a.j3=0;a.dC=0;a.gD=null;a.fH=null;}
function ASn(a,b){var c=new QF();Uq(c,a,b);return c;}
function Uq(a,b,c){J(a);a.qh=b;a.ji=c;}
var H1=F(BO);
function AXS(a){var b=new H1();Po(b,a);return b;}
function Po(a,b){De(a,b);}
function UV(a,b,c,d){var e;e=a.hc();d.bh(e,b-d.ds(e)|0);return a.f.c(b,c,d);}
function AJV(a,b){return 0;}
function SQ(){var a=this;C.call(a);a.yC=0;a.bQ=null;a.cy=null;a.du=null;a.cZ=null;a.cC=0.0;a.bp=null;}
function APm(a,b,c){var d=new SQ();ADc(d,a,b,c);return d;}
function ADc(a,b,c,d){J(a);a.yC=1;a.cy=BG();a.du=BG();a.cZ=BG();a.cC=0.0;a.bp=BG();a.bQ=b;a.cy.i=c;a.cy.j=d;}
function ADN(a){var b,c,d,e,f,g,h,i;a:{b=a.cy.i|0;c=(a.bQ.w.data[0].data.length-1|0)-(a.cy.j|0)|0;d=a.bQ.w.data[b-1|0].data[c];e=a.bQ.w.data[b+1|0].data[c];f=a.bQ.w.data[b].data[c-1|0];g=a.bQ.w.data[b].data[c+1|0];Cq();if(d==AUY){a.cC=(-90.0);h=b;while(true){if(h>=a.bQ.w.data.length)break a;if(a.bQ.w.data[h].data[c]==AUY)break;h=h+1|0;}a.du.e1(h,a.cy.j);}}b:{if(e==AUY){a.cC=90.0;h=b;while(true){if(h<0)break b;if(a.bQ.w.data[h].data[c]==AUY)break;h=h+(-1)|0;}a.du.e1(h,a.cy.j);}}c:{if(f==AUY){a.cC=180.0;i=c;while
(true){if(i>=a.bQ.w.data[0].data.length)break c;if(a.bQ.w.data[b].data[i]==AUY)break;i=i+1|0;}a.du.e1(a.cy.i,(a.bQ.w.data[0].data.length-i|0)-1|0);}}d:{if(g==AUY){a.cC=0.0;while(true){if(c<0)break d;if(a.bQ.w.data[b].data[c]==AUY)break;c=c+(-1)|0;}a.du.e1(a.cy.i,(a.bQ.w.data[0].data.length-c|0)-1|0);}}}
function AF4(a){var b,c,d;(a.bp.gK(a.cy)).gr(0.5,0.5);(a.cZ.gK(a.du)).gr(0.5,0.5);b=a.bQ.V.L;c=a.bQ.D.N;d=0;if(a.cC===(-90.0)&&a.bp.i<b.p&&a.du.i>b.p&&b.o<a.bp.j&&b.o+b.Y>a.bp.j)a.cZ.i=b.p;if(a.cC===90.0&&a.bp.i>b.p&&a.du.i<b.p&&b.o<a.bp.j&&b.o+b.Y>a.bp.j)a.cZ.i=b.p+b.be;if(a.cC===0.0&&a.bp.j<b.o&&a.du.j>b.o&&b.p<a.bp.i&&b.p+b.be>a.bp.i)a.cZ.j=b.o;if(a.cC===180.0&&a.bp.j>b.o&&a.du.j<b.o&&b.p<a.bp.i&&b.p+b.be>a.bp.i)a.cZ.j=b.o+b.Y;if(a.cC===(-90.0)&&a.bp.i<c.p&&c.o<a.bp.j&&c.o+c.Y>a.bp.j&&a.cZ.i>c.p)d=1;if(a.cC
===90.0&&a.bp.i>c.p&&c.o<a.bp.j&&c.o+c.Y>a.bp.j&&a.cZ.i<c.p+c.be)d=1;if(a.cC===0.0&&a.cy.j<c.o&&c.p<a.bp.i&&c.p+c.be>a.bp.i&&a.cZ.j>c.o)d=1;if(a.cC===180.0&&a.cy.j>c.o&&c.p<a.bp.i&&c.p+c.be>a.bp.i&&a.cZ.j<c.o+c.Y)d=1;if(d&&a.bQ.D.S!=4){a.bQ.D.S=4;a.bQ.D.dh=0.0;}}
var Iz=F();
var AXT=null;function FR(){FR=P(Iz);ADF();}
function M6(b){FR();ALb();return AWW.data[(b*45.511112213134766|0)&16383];}
function Qj(b){FR();ALb();return AWW.data[((b+90.0)*45.511112213134766|0)&16383];}
function KG(b){FR();return AXT.vX(b+1|0);}
function Fm(b){var c,d;FR();if(!b)return 1;c=b+(-1)|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function P$(b,c,d){FR();return EE(b-c)>d?0:1;}
function ADF(){AXT=AS3();}
var Ix=F(0);
function JN(){Bl.call(this);this.qX=0;}
function ARM(a){var b=new JN();AKT(b,a);return b;}
function AKT(a,b){B8(a);a.bC=2;a.qX=DS(DR(b));}
function AJ_(a,b,c){var d,e,f;d=b+1|0;e=c.h(b);f=c.h(d);return a.qX!=DS(DR(CN(e,f)))?(-1):2;}
var EG=F();
var AXU=null;var AXV=null;var AXW=null;function CS(){var b;if(AXU===null){b=new Fq;ANK();I9(b,AUF,0);AXU=b;}return AXU;}
function Q_(){var b;if(AXV===null){b=new Fq;AE7();I9(b,AWZ,0);AXV=b;}return AXV;}
function CB(b,c,d,e,f){var g,h,i,j,k,l,m,n;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Qo(b)){g=e+f|0;if(g<=Qo(d)){a:{b:{if(b!==d){h=(Dl(b)).iL();i=(Dl(d)).iL();if(h!==null&&i!==null){if(h===i)break b;if(!h.jS()&&!i.jS()){j=b;k=0;g=c;while(k<f){l=j.data;m=g+1|0;n=l[g];if(!i.uL(n)){HZ(b,c,d,e,k);H(MF());}k=k+1|0;g=m;}HZ(b,c,d,e,f);return;}if(!h.jS())break a;if(i.jS())break b;else break a;}H(MF());}}HZ(b,c,d,e,f);return;}H(MF());}}H(Dq());}H(AI6(B(435)));}
function HZ(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function F6(){return Long_fromNumber(new Date().getTime());}
function AAi(){var b;if(AXW===null){b=AQ_();b.bn(B(436),B(437));b.bn(B(392),B(438));b.bn(B(439),B(420));b.bn(B(440),B(377));b.bn(B(441),AAd());b.bn(B(442),ALB());b.bn(B(443),B(437));b.bn(B(444),AN0());AXW=ARh(b);}}
function ALB(){return B(445);}
function AN0(){return B(420);}
function EI(b,c){AAi();return AXW.bn(b,c);}
function AAd(){return B(376);}
function Mj(){var a=this;O.call(a);a.qO=0;a.rh=0;}
function K(a,b){var c=new Mj();ANh(c,a,b);return c;}
function ANh(a,b,c){X(a);a.qO=b;a.rh=c;}
function AET(a){var b;b=(B1()).bq(a.qO,a.rh);return b;}
var Ma=F(O);
function APK(){var a=new Ma();WE(a);return a;}
function WE(a){X(a);}
function ANt(a){return (((B1()).bq(48,57)).bq(97,102)).bq(65,70);}
function O8(){var a=this;C.call(a);a.vu=null;a.s9=null;a.hM=null;a.bH=null;a.jy=0;a.jE=0;}
function AQx(a,b){var c=new O8();TG(c,a,b);return c;}
function Gt(a,b){var c,d;c=a.hM.k();if(b>=0&&b<=c){d=QG(a,b);if(d>=0&&a.bH.up()){a.bH.vK();return 1;}a.bH.dk=(-1);return 0;}H(Bg(Is(b)));}
function QG(a,b){var c;a.bH.lH();a.bH.kw(1);a.bH.vC(b);c=a.s9.cd(b,a.hM,a.bH);if(c==(-1))a.bH.dg=1;return c;}
function Nu(a){var b,c;b=a.hM.k();if(!KC(a))b=a.jE;if(a.bH.dk>=0&&a.bH.qt()==1){a.bH.dk=a.bH.kC();if(a.bH.kC()==a.bH.pJ()){c=a.bH;c.dk=c.dk+1|0;}return a.bH.dk<=b&&Gt(a,a.bH.dk)?1:0;}return Gt(a,a.jy);}
function Tf(a,b){return a.bH.lm(b);}
function Kl(a,b){return a.bH.my(b);}
function SI(a){return Tf(a,0);}
function MQ(a){return Kl(a,0);}
function KC(a){return a.bH.hi();}
function TG(a,b,c){var d,e,f,g,h;J(a);a.jy=(-1);a.jE=(-1);a.vu=b;a.s9=b.mV;a.hM=c;a.jy=0;a.jE=a.hM.k();d=new IT;e=a.jy;f=a.jE;g=Ka(b);h=RZ(b);PB(d,c,e,f,g,h,P2(b));a.bH=d;}
var R2=F(Bf);
function ATa(){var a=new R2();AG$(a);return a;}
function AG$(a){BZ(a);}
function ANW(a,b,c,d){var e,f,g,h,i;e=d.A();f=b+1|0;if(f>e){d.dg=1;return (-1);}g=c.h(b);if(BH(g)){h=b+2|0;if(h<=e){i=c.h(f);if(Ee(g,i))return a.f.c(h,c,d);}}return a.f.c(f,c,d);}
function WK(a,b){a.f=b;}
function AG3(a){return (-2147483602);}
function WH(a,b){return 1;}
function Pn(){N.call(this);this.w6=null;}
function ASb(a){var b=new Pn();AKt(b,a);return b;}
function AKt(a,b){a.w6=b;U(a);}
function AMx(a,b){return Sc(b);}
function SZ(){C.call(this);this.qE=null;}
function AQo(a){var b=new SZ();ACG(b,a);return b;}
function ACG(a,b){J(a);a.qE=b;}
function AMi(a){AEa(a.qE);}
var J3=F(B9);
function AGN(a){var b=new J3();YS(b,a);return b;}
function YS(a,b){Qh(a,b);}
function ADt(a,b){return a.dX.n(DS(DR(b)));}
var Tq=F(O);
function APc(){var a=new Tq();AJb(a);return a;}
function AJb(a){X(a);}
function T0(a){var b;b=APz(a);b.U=1;return b;}
function G7(){var a=this;Bf.call(a);a.ee=null;a.nJ=null;a.ih=0;}
function AL1(a,b){var c=new G7();UH(c,a,b);return c;}
function UH(a,b,c){BZ(a);a.ee=b;a.ih=c;}
function AFl(a,b){a.f=b;}
function HF(a){if(a.nJ===null)a.nJ=JO(a.ee);return a.nJ;}
function TV(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;e=d.A();f=0;g=W(3);h=(-1);i=(-1);if(b>=e)return (-1);j=b+1|0;k=c.h(b);l=YU(k);if(l!==null){m=l.data;n=0;if(m.length!=a.ih)return (-1);while(true){if(n>=a.ih)return a.f.c(j,c,d);if(m[n]!=a.ee.data[n])break;n=n+1|0;}return (-1);}o=g.data;o[f]=k;p=k-4352|0;if(p>=0&&p<19){if(j<e){k=c.h(j);h=k-4449|0;}if(h>=0&&h<21){q=j+1|0;o[1]=k;if(q<e){k=c.h(q);i=k-4519|0;}if(i>=0&&i<28){r=q+1|0;o[2]=k;r=a.ih==3&&o[0]==a.ee.data[0]&&o[1]==a.ee.data[1]&&o[2]==a.ee.data[2]?a.f.c(r,
c,d):(-1);return r;}r=a.ih==2&&o[0]==a.ee.data[0]&&o[1]==a.ee.data[1]?a.f.c(q,c,d):(-1);return r;}return (-1);}return (-1);}
function WI(a,b){var c,d;a:{if(b instanceof G7){c=b;if(!(HF(c)).X(HF(a))){d=0;break a;}}d=1;}return d;}
function ALV(a,b){return 1;}
function OZ(){var a=this;C.call(a);a.t=null;a.cx=null;a.lL=0;a.dF=null;a.ni=0;a.h8=null;a.mF=0;a.vm=null;a.z4=0;a.yv=null;a.v1=0;a.id=null;a.mr=0;a.iG=null;a.og=0;a.mT=0;a.hO=null;a.z3=null;a.iC=null;a.hH=null;}
function ARr(a){var b=new OZ();T1(b,a);return b;}
function T1(a,b){J(a);a.cx=Ck();a.lL=1;a.dF=Ck();a.ni=1;a.h8=Ck();a.mF=1;a.vm=Ck();a.z4=1;a.yv=Ck();a.v1=1;a.id=Ck();a.mr=1;a.iG=Ck();a.og=1;a.mT=0;a.t=b;a.hO=(C4()).sQ(40000);a.iC=(C4()).qR(12000);a.z3=(C4()).xN(12000);a.hH=(C4()).rT(240000);a.t.pixelStorei(37441,0);}
function Me(a,b){if(Bq(b)>a.hO.length)a.hO=(C4()).sQ(Bq(b));}
function Nw(a,b){if(Bq(b)>a.iC.length)a.iC=(C4()).qR(Bq(b));}
function Nm(a,b){if(Bq(b)>a.hH.length)a.hH=(C4()).rT(Bq(b));}
function AG9(a,b){var c,d,e,f,g;Me(a,b);c=Ca(b);d=0;while(c<Bi(b)){e=a.hO;f=b.s1(c);e[d]=f;c=c+1|0;d=d+1|0;}e=a.hO;g=Bq(b);return e.subarray(0,g);}
function AHb(a,b){var c,d,e,f,g;Nw(a,b);c=Ca(b);d=0;while(c<Bi(b)){e=a.iC;f=b.y8(c);e[d]=f;c=c+1|0;d=d+1|0;}e=a.iC;g=Bq(b);return e.subarray(0,g);}
function AFr(a,b){var c,d,e,f,g;Nm(a,b);c=Ca(b);d=0;while(c<Bi(b)){e=a.hH;f=b.y4(c);e[d]=f;c=c+1|0;d=d+1|0;}e=a.hH;g=Bq(b);return e.subarray(0,g);}
function Q2(a,b,c){var d,e;d=a.iG.K(S(b));if(d===null){d=Ck();a.iG.bn(S(b),d);}e=a.og;a.og=e+1|0;d.bn(S(e),c);return e;}
function I7(a,b){return (a.iG.K(S(a.mT))).K(S(b));}
function NI(a,b){var c;c=a.ni;a.ni=c+1|0;a.dF.bn(S(c),b);return c;}
function LN(a,b){a.dF.gg(S(b));}
function P_(a,b){var c;c=a.lL;a.lL=c+1|0;a.cx.bn(S(c),b);return c;}
function Q6(a,b){a.iG.gg(S(b));a.cx.gg(S(b));}
function LM(a,b){var c;c=a.mF;a.mF=c+1|0;a.h8.bn(S(c),b);return c;}
function Ss(a,b){a.h8.gg(S(b));}
function Qf(a,b){var c;c=a.mr;a.mr=c+1|0;a.id.bn(S(c),b);return c;}
function Qc(a,b){a.id.gg(S(b));}
function AFt(a,b,c){var d,e;d=a.t;e=a.id.K(S(c));d.bindTexture(b,e);}
function AMc(a,b){a.t.clear(b);}
function AKx(a,b,c,d,e){a.t.clearColor(b,c,d,e);}
function AJW(a,b){var c;c=a.id.K(S(b));Qc(a,b);a.t.deleteTexture(c);}
function Xa(a,b){a.t.depthMask(!!b);}
function XC(a,b){a.t.disable(b);}
function AJF(a,b,c,d){a.t.drawArrays(b,c,d);}
function AD9(a,b,c,d,e){var f,g;f=a.t;g=Ca(e);f.drawElements(b,c,d,g);}
function ACZ(a,b){a.t.enable(b);}
function Ww(a){var b;b=a.t.createTexture();return Qf(a,b);}
function AFY(a,b,c){a.t.pixelStorei(b,c);}
function AA6(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q;if(j===null){k=a.t;l=null;k.texImage2D(b,c,d,e,f,g,h,i,l);}else if(Bi(j)>4){m=!(j instanceof C2)?a.vZ(j):a.nh(j);a.t.texImage2D(b,c,d,e,f,g,h,i,m);}else{n=j.yd(0);DU();o=AU0.K(S(n));if(o.z0()){p=a.t;q=o.yZ();p.texImage2D(b,c,d,h,i,q);}else if(!o.yB()){p=a.t;q=o.nw();p.texImage2D(b,c,d,h,i,q);}else{p=a.t;q=o.vL();p.texImage2D(b,c,d,h,i,q);}}}
function ABy(a,b,c,d){a.t.texParameterf(b,c,d);}
function AFO(a,b,c,d,e){a.t.viewport(b,c,d,e);}
function TQ(a,b,c){var d,e;d=a.cx.K(S(b));e=a.dF.K(S(c));a.t.attachShader(d,e);}
function YI(a,b,c){var d,e;d=a.t;e=a.h8.K(S(c));d.bindBuffer(b,e);}
function AKZ(a,b,c,d,e){a.t.blendFuncSeparate(b,c,d,e);}
function AAo(a,b,c,d,e){var f,g,h,i;if(d instanceof C2){f=d;g=a.nh(f);a.t.bufferData(b,g,e);}else{if(!(d instanceof Em))H(BI(B(446)));h=a.t;i=a.uc(d);h.bufferData(b,i,e);}}
function VD(a,b,c,d,e){var f,g;if(e instanceof C2){f=a.t;g=a.nh(e);f.bufferSubData(b,c,g);}}
function AIs(a,b){var c;c=a.dF.K(S(b));a.t.compileShader(c);}
function AFk(a){var b;b=a.t.createProgram();return P_(a,b);}
function ALw(a,b){var c;c=a.t.createShader(b);return NI(a,c);}
function ABv(a,b){var c;c=a.h8.K(S(b));Ss(a,b);a.t.deleteBuffer(c);}
function AOd(a,b){var c;c=a.cx.K(S(b));Q6(a,b);a.t.deleteProgram(c);}
function Vz(a,b){var c;c=a.dF.K(S(b));LN(a,b);a.t.deleteShader(c);}
function Uc(a,b){a.t.disableVertexAttribArray(b);}
function ACF(a,b,c,d,e){a.t.drawElements(b,c,d,e);}
function Xs(a,b){a.t.enableVertexAttribArray(b);}
function AEN(a){var b;b=a.t.createBuffer();return LM(a,b);}
function Zb(a,b){a.t.generateMipmap(b);}
function ACc(a,b,c,d,e){var f,g,h;f=a.t;g=a.cx.K(S(b));h=f.getActiveAttrib(g,c);d.dS(h.size);e.dS(h.type);return $rt_str(h.name);}
function UR(a,b,c,d,e){var f,g,h;f=a.t;g=a.cx.K(S(b));h=f.getActiveUniform(g,c);d.dS(h.size);e.dS(h.type);return $rt_str(h.name);}
function Wb(a,b,c){var d;d=a.cx.K(S(b));return a.t.getAttribLocation(d,$rt_ustr(c));}
function ACw(a,b,c){if(b!=2931&&b!=2849&&b!=32824&&b!=10752&&b!=32938)H(BI(B(447)));c.zi(0,a.t.getParameter(b));}
function AG_(a,b,c,d){var e,f,g,h,i;if(c!=35712&&c!=35714&&c!=35715){e=a.t;f=a.cx.K(S(b));d.dS(e.getProgramParameter(f,c));}else{g=a.t;h=a.cx.K(S(b));i=g.getProgramParameter(h,c)?1:0;d.dS(!i?0:1);}}
function AOU(a,b){var c,d;c=a.t;d=a.cx.K(S(b));return $rt_str(c.getProgramInfoLog(d));}
function WD(a,b,c,d){var e,f,g,h;if(c!=35713&&c!=35712){e=a.t;f=a.dF.K(S(b));g=e.getShaderParameter(f,c);d.dS(g);}else{h=a.t;e=a.dF.K(S(b));g=h.getShaderParameter(e,c)?1:0;d.dS(!g?0:1);}}
function AIS(a,b){var c,d;c=a.t;d=a.dF.K(S(b));return $rt_str(c.getShaderInfoLog(d));}
function AJ5(a,b,c){var d,e,f;d=a.t;e=a.cx.K(S(b));f=d.getUniformLocation(e,$rt_ustr(c));if(f!==null)return Q2(a,b,f);return (-1);}
function AFA(a,b){var c,d;c=a.t;d=a.cx.K(S(b));c.linkProgram(d);}
function ZT(a,b,c){var d,e;d=a.t;e=a.dF.K(S(b));d.shaderSource(e,$rt_ustr(c));}
function Y$(a,b,c,d){var e,f;e=a.t;f=d;e.texParameterf(b,c,f);}
function ANq(a,b,c){var d;d=I7(a,b);a.t.uniform1i(d,c);}
function UI(a,b,c,d,e,f){var g;g=I7(a,b);a.t.uniformMatrix4fv(g,!!d,AEA(e));}
function AIo(a,b){var c,d;a.mT=b;c=a.t;d=a.cx.K(S(b));c.useProgram(d);}
function AJh(a,b,c,d,e,f,g){a.t.vertexAttribPointer(b,c,d,!!e,f,g);}
function NS(){C.call(this);this.eq=null;}
function AQD(a){var b=new NS();AA2(b,a);return b;}
function AA2(a,b){J(a);a.eq=b;}
function Og(a){var b,c,d,e,f,g;b=a.eq.length;c=B(448);d=Ih(((b*4|0)/3|0)+2|0);e=0;while(e<b){f=b-e|0;if(f>=3){g=(((a.eq[e]&255)<<16)+((a.eq[e+1|0]&255)<<8)|0)+(a.eq[e+2|0]&255)|0;d.bZ(c.h(g>>18&63));d.bZ(c.h(g>>12&63));d.bZ(c.h(g>>6&63));d.bZ(c.h(g&63));}else if(f<2){g=(a.eq[e]&255)<<16;d.bZ(c.h(g>>18&63));d.bZ(c.h(g>>12&63));d.a(B(449));}else{g=((a.eq[e]&255)<<16)+((a.eq[e+1|0]&255)<<8)|0;d.bZ(c.h(g>>18&63));d.bZ(c.h(g>>12&63));d.bZ(c.h(g>>6&63));d.a(B(450));}e=e+3|0;}return d.d();}
var Th=F(O);
function AQ0(){var a=new Th();AGn(a);return a;}
function AGn(a){X(a);}
function ACd(a){return (((B1()).bq(33,64)).bq(91,96)).bq(123,126);}
function HC(){var a=this;C.call(a);a.dQ=null;a.cL=null;a.h7=0;a.zA=0;a.m0=0;a.gq=0;a.kY=0;a.fW=0;a.de=null;}
var AXX=null;function No(){No=P(HC);AOw();}
function AEe(a,b,c){var d=new HC();Ml(d,a,b,c);return d;}
function Ml(a,b,c,d){No();J(a);a.gq=0;a.kY=0;a.fW=(-1);a.de=ATA();a.zA=b;a.dQ=d;a.cL=FO(BP(a.dQ.ca/4|0,c));a.cL.b8();a.h7=AUO.gL();a.m0=!b?35048:35044;Nl(a);}
function VV(a){return a.dQ;}
function AGM(a){return (Bi(a.cL)*4|0)/a.dQ.ca|0;}
function XN(a){a.gq=1;return a.cL;}
function La(a){if(a.kY){AUO.d4(34962,Bi(a.cL),a.cL,a.m0);a.gq=0;}}
function Wa(a,b,c,d){a.gq=1;I6(b,a.cL,d,c);a.cL.cj(0);a.cL.bY(d);La(a);}
function ALh(a,b,c){var d;d=AUP;d.Aa(a.fW);Rd(a,b,c);Re(a,d);a.kY=1;}
function Rd(a,b,c){var d,e,f,g,h,i;d=!a.de.cG?0:1;a:{e=CQ(a.dQ);if(d){if(c===null){f=0;while(d&&f<e){g=B$(a.dQ,f);h=b.jz(g.fn);d=h!=a.de.bU(f)?0:1;f=f+1|0;}}else{i=c.data;d=i.length!=a.de.cG?0:1;f=0;while(d){if(f>=e)break a;d=i[f]!=a.de.bU(f)?0:1;f=f+1|0;}}}}b:{if(!d){AUN.bS(34962,a.h7);S2(a,b);a.de.fJ();f=0;while(true){if(f>=e)break b;g=B$(a.dQ,f);if(c!==null){i=c.data;a.de.no(i[f]);}else a.de.no(b.jz(g.fn));h=a.de.bU(f);if(h>=0){b.hx(h);b.fp(h,g.dr,g.hL,g.iQ,a.dQ.ca,g.db);}f=f+1|0;}}}}
function S2(a,b){var c,d,e;if(a.de===null)return;c=CQ(a.dQ);d=0;while(d<c){e=a.de.bU(d);if(e>=0)b.ma(e);d=d+1|0;}}
function Re(a,b){if(a.gq){b.bS(34962,a.h7);a.cL.bY(Bi(a.cL));b.d4(34962,Bi(a.cL),a.cL,a.m0);a.gq=0;}}
function Zm(a,b,c){var d;d=AUP;d.Aa(0);a.kY=0;}
function ZY(a){var b;b=AUP;b.bS(34962,0);b.hh(a.h7);a.h7=0;MH(a);}
function Nl(a){No();AXX.cm();AUP.A6(1,AXX);a.fW=AXX.An();}
function MH(a){if(a.fW!=(-1)){No();AXX.cm();AXX.dS(a.fW);AXX.b8();AUP.Dw(1,AXX);a.fW=(-1);}}
function AOw(){AXX=EP(1);}
var M7=F();
function ANR(b){$rt_putStderr(b);}
function AKQ(b){$rt_putStdout(b);}
function MC(){Ba.call(this);this.tc=0;}
function ALF(a){var b=new MC();ADz(b,a);return b;}
function ADz(a,b){BF(a);a.tc=b;}
function Wj(a,b,c,d){var e,f,g,h,i;e=b<d.A()?c.h(b):32;f=!b?32:c.h(b-1|0);g=!d.hi()?d.cW():0;h=e!=32&&!HG(a,e,b,g,c)?0:1;i=f!=32&&!HG(a,f,b-1|0,g,c)?0:1;return h^i^a.tc?(-1):a.f.c(b,c,d);}
function WF(a,b){return 0;}
function HG(a,b,c,d,e){var f;if(!HT(b)&&b!=95){a:{if(Er(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=e.h(c);if(HT(f))return 0;if(Er(f)!=6)return 1;}}return 1;}return 0;}
var FI=F(O);
function ASF(){var a=new FI();Oj(a);return a;}
function Oj(a){X(a);}
function Oa(a){return ((B1()).bq(9,13)).cc(32);}
var QB=F();
function I6(b,c,d,e){var f;f=AKc(c);f.cm();c.cj(0);f.lM(b,e,d);c.cj(0);if(!(c instanceof Du))c.bY(d);else c.bY(d<<2);}
function AKc(b){var c;c=null;if(b instanceof Du)c=b.om();else if(b instanceof C2)c=b;if(c!==null)return c;H(BI(B(451)));}
function FO(b){var c;if(!Fl())return UL(Cf(b));c=Eg(b*4|0);D2(c,DQ());return c.om();}
function Hm(b){var c;if(!Fl())return MG(Dv(b));c=Eg(b);D2(c,DQ());return c;}
function QJ(b){var c;if(!Fl())return AFS(MO(b));c=Eg(b*2|0);D2(c,DQ());return c.o9();}
function EP(b){var c;if(!Fl())return ABJ(W(b));c=Eg(b*4|0);D2(c,DQ());return c.r1();}
var HU=F(0);
var IK=F(0);
var G5=F(0);
var KE=F();
function AE8(a,b,c){a.Dc($rt_str(b),FU(c,"handleEvent"));}
function AFJ(a,b,c){a.B1($rt_str(b),FU(c,"handleEvent"));}
function VG(a,b){return a.vp(b);}
function AHu(a,b,c,d){a.A2($rt_str(b),FU(c,"handleEvent"),d?1:0);}
function AMT(a,b){return !!a.Dg(b);}
function XB(a){return a.yt();}
function Uj(a,b,c,d){a.CC($rt_str(b),FU(c,"handleEvent"),d?1:0);}
var Ku=F();
function BT(){C.call(this);this.b=null;}
var AXY=null;var AXZ=null;var AX0=null;var AX1=null;var AX2=null;var AX3=null;var AX4=null;var AX5=null;var AX6=null;var AX7=null;var AX8=null;function Cl(){Cl=P(BT);U7();}
function B6(){var a=new BT();QH(a);return a;}
function QH(a){Cl();J(a);a.b=Cf(16);a.b.data[0]=1.0;a.b.data[5]=1.0;a.b.data[10]=1.0;a.b.data[15]=1.0;}
function AOR(a,b){return a.sL(b.b);}
function WL(a,b){var c;c=b.data;a.b.data[0]=c[0];a.b.data[1]=c[1];a.b.data[2]=c[2];a.b.data[3]=c[3];a.b.data[4]=c[4];a.b.data[5]=c[5];a.b.data[6]=c[6];a.b.data[7]=c[7];a.b.data[8]=c[8];a.b.data[9]=c[9];a.b.data[10]=c[10];a.b.data[11]=c[11];a.b.data[12]=c[12];a.b.data[13]=c[13];a.b.data[14]=c[14];a.b.data[15]=c[15];return a;}
function AGb(a,b){Cl();AXY.data[0]=a.b.data[0]*b.b.data[0]+a.b.data[4]*b.b.data[1]+a.b.data[8]*b.b.data[2]+a.b.data[12]*b.b.data[3];AXY.data[4]=a.b.data[0]*b.b.data[4]+a.b.data[4]*b.b.data[5]+a.b.data[8]*b.b.data[6]+a.b.data[12]*b.b.data[7];AXY.data[8]=a.b.data[0]*b.b.data[8]+a.b.data[4]*b.b.data[9]+a.b.data[8]*b.b.data[10]+a.b.data[12]*b.b.data[11];AXY.data[12]=a.b.data[0]*b.b.data[12]+a.b.data[4]*b.b.data[13]+a.b.data[8]*b.b.data[14]+a.b.data[12]*b.b.data[15];AXY.data[1]=a.b.data[1]*b.b.data[0]+a.b.data[5]
*b.b.data[1]+a.b.data[9]*b.b.data[2]+a.b.data[13]*b.b.data[3];AXY.data[5]=a.b.data[1]*b.b.data[4]+a.b.data[5]*b.b.data[5]+a.b.data[9]*b.b.data[6]+a.b.data[13]*b.b.data[7];AXY.data[9]=a.b.data[1]*b.b.data[8]+a.b.data[5]*b.b.data[9]+a.b.data[9]*b.b.data[10]+a.b.data[13]*b.b.data[11];AXY.data[13]=a.b.data[1]*b.b.data[12]+a.b.data[5]*b.b.data[13]+a.b.data[9]*b.b.data[14]+a.b.data[13]*b.b.data[15];AXY.data[2]=a.b.data[2]*b.b.data[0]+a.b.data[6]*b.b.data[1]+a.b.data[10]*b.b.data[2]+a.b.data[14]*b.b.data[3];AXY.data[6]
=a.b.data[2]*b.b.data[4]+a.b.data[6]*b.b.data[5]+a.b.data[10]*b.b.data[6]+a.b.data[14]*b.b.data[7];AXY.data[10]=a.b.data[2]*b.b.data[8]+a.b.data[6]*b.b.data[9]+a.b.data[10]*b.b.data[10]+a.b.data[14]*b.b.data[11];AXY.data[14]=a.b.data[2]*b.b.data[12]+a.b.data[6]*b.b.data[13]+a.b.data[10]*b.b.data[14]+a.b.data[14]*b.b.data[15];AXY.data[3]=a.b.data[3]*b.b.data[0]+a.b.data[7]*b.b.data[1]+a.b.data[11]*b.b.data[2]+a.b.data[15]*b.b.data[3];AXY.data[7]=a.b.data[3]*b.b.data[4]+a.b.data[7]*b.b.data[5]+a.b.data[11]*b.b.data[6]
+a.b.data[15]*b.b.data[7];AXY.data[11]=a.b.data[3]*b.b.data[8]+a.b.data[7]*b.b.data[9]+a.b.data[11]*b.b.data[10]+a.b.data[15]*b.b.data[11];AXY.data[15]=a.b.data[3]*b.b.data[12]+a.b.data[7]*b.b.data[13]+a.b.data[11]*b.b.data[14]+a.b.data[15]*b.b.data[15];return a.sL(AXY);}
function ZC(a){a.b.data[0]=1.0;a.b.data[4]=0.0;a.b.data[8]=0.0;a.b.data[12]=0.0;a.b.data[1]=0.0;a.b.data[5]=1.0;a.b.data[9]=0.0;a.b.data[13]=0.0;a.b.data[2]=0.0;a.b.data[6]=0.0;a.b.data[10]=1.0;a.b.data[14]=0.0;a.b.data[3]=0.0;a.b.data[7]=0.0;a.b.data[11]=0.0;a.b.data[15]=1.0;return a;}
function AF2(a,b,c,d,e){a.sH(b,b+d,c,c+e,0.0,1.0);return a;}
function AGI(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a.k6();h=c-b;i=2.0/h;j=e-d;k=2.0/j;l=g-f;m=(-2.0)/l;n= -(c+b)/h;o= -(e+d)/j;p= -(g+f)/l;a.b.data[0]=i;a.b.data[1]=0.0;a.b.data[2]=0.0;a.b.data[3]=0.0;a.b.data[4]=0.0;a.b.data[5]=k;a.b.data[6]=0.0;a.b.data[7]=0.0;a.b.data[8]=0.0;a.b.data[9]=0.0;a.b.data[10]=m;a.b.data[11]=0.0;a.b.data[12]=n;a.b.data[13]=o;a.b.data[14]=p;a.b.data[15]=1.0;return a;}
function Xr(a,b,c,d){a.k6();a.b.data[12]=b;a.b.data[13]=c;a.b.data[14]=d;return a;}
function AAj(a,b,c){Cl();(AX1.d3(b)).fw();(AX2.d3(b)).fw();(AX2.qr(c)).fw();((AX3.d3(AX2)).qr(AX1)).fw();a.k6();a.b.data[0]=AX2.Z;a.b.data[4]=AX2.bb;a.b.data[8]=AX2.ba;a.b.data[1]=AX3.Z;a.b.data[5]=AX3.bb;a.b.data[9]=AX3.ba;a.b.data[2]= -AX1.Z;a.b.data[6]= -AX1.bb;a.b.data[10]= -AX1.ba;return a;}
function AAy(a,b,c,d){Cl();(AX4.d3(c)).ty(b);a.z$(AX4,d);a.od(AX5.xC( -b.Z, -b.bb, -b.ba));return a;}
function J9(b,c){var d,e,f,g;Cl();d=c.data;e=b.data;f=Cf(16);g=f.data;g[0]=e[0]*d[0]+e[4]*d[1]+e[8]*d[2]+e[12]*d[3];g[4]=e[0]*d[4]+e[4]*d[5]+e[8]*d[6]+e[12]*d[7];g[8]=e[0]*d[8]+e[4]*d[9]+e[8]*d[10]+e[12]*d[11];g[12]=e[0]*d[12]+e[4]*d[13]+e[8]*d[14]+e[12]*d[15];g[1]=e[1]*d[0]+e[5]*d[1]+e[9]*d[2]+e[13]*d[3];g[5]=e[1]*d[4]+e[5]*d[5]+e[9]*d[6]+e[13]*d[7];g[9]=e[1]*d[8]+e[5]*d[9]+e[9]*d[10]+e[13]*d[11];g[13]=e[1]*d[12]+e[5]*d[13]+e[9]*d[14]+e[13]*d[15];g[2]=e[2]*d[0]+e[6]*d[1]+e[10]*d[2]+e[14]*d[3];g[6]=e[2]*d[4]
+e[6]*d[5]+e[10]*d[6]+e[14]*d[7];g[10]=e[2]*d[8]+e[6]*d[9]+e[10]*d[10]+e[14]*d[11];g[14]=e[2]*d[12]+e[6]*d[13]+e[10]*d[14]+e[14]*d[15];g[3]=e[3]*d[0]+e[7]*d[1]+e[11]*d[2]+e[15]*d[3];g[7]=e[3]*d[4]+e[7]*d[5]+e[11]*d[6]+e[15]*d[7];g[11]=e[3]*d[8]+e[7]*d[9]+e[11]*d[10]+e[15]*d[11];g[15]=e[3]*d[12]+e[7]*d[13]+e[11]*d[14]+e[15]*d[15];CB(f,0,b,0,16);}
function Sh(b){var c;Cl();c=b.data;return c[3]*c[6]*c[9]*c[12]-c[2]*c[7]*c[9]*c[12]-c[3]*c[5]*c[10]*c[12]+c[1]*c[7]*c[10]*c[12]+c[2]*c[5]*c[11]*c[12]-c[1]*c[6]*c[11]*c[12]-c[3]*c[6]*c[8]*c[13]+c[2]*c[7]*c[8]*c[13]+c[3]*c[4]*c[10]*c[13]-c[0]*c[7]*c[10]*c[13]-c[2]*c[4]*c[11]*c[13]+c[0]*c[6]*c[11]*c[13]+c[3]*c[5]*c[8]*c[14]-c[1]*c[7]*c[8]*c[14]-c[3]*c[4]*c[9]*c[14]+c[0]*c[7]*c[9]*c[14]+c[1]*c[4]*c[11]*c[14]-c[0]*c[5]*c[11]*c[14]-c[2]*c[5]*c[8]*c[15]+c[1]*c[6]*c[8]*c[15]+c[2]*c[4]*c[9]*c[15]-c[0]*c[6]*c[9]*c[15]
-c[1]*c[4]*c[10]*c[15]+c[0]*c[5]*c[10]*c[15];}
function M$(b){var c,d,e,f,g;Cl();c=Cf(16);d=Sh(b);if(d===0.0)return 0;e=c.data;f=b.data;e[0]=f[9]*f[14]*f[7]-f[13]*f[10]*f[7]+f[13]*f[6]*f[11]-f[5]*f[14]*f[11]-f[9]*f[6]*f[15]+f[5]*f[10]*f[15];e[4]=f[12]*f[10]*f[7]-f[8]*f[14]*f[7]-f[12]*f[6]*f[11]+f[4]*f[14]*f[11]+f[8]*f[6]*f[15]-f[4]*f[10]*f[15];e[8]=f[8]*f[13]*f[7]-f[12]*f[9]*f[7]+f[12]*f[5]*f[11]-f[4]*f[13]*f[11]-f[8]*f[5]*f[15]+f[4]*f[9]*f[15];e[12]=f[12]*f[9]*f[6]-f[8]*f[13]*f[6]-f[12]*f[5]*f[10]+f[4]*f[13]*f[10]+f[8]*f[5]*f[14]-f[4]*f[9]*f[14];e[1]=f[13]
*f[10]*f[3]-f[9]*f[14]*f[3]-f[13]*f[2]*f[11]+f[1]*f[14]*f[11]+f[9]*f[2]*f[15]-f[1]*f[10]*f[15];e[5]=f[8]*f[14]*f[3]-f[12]*f[10]*f[3]+f[12]*f[2]*f[11]-f[0]*f[14]*f[11]-f[8]*f[2]*f[15]+f[0]*f[10]*f[15];e[9]=f[12]*f[9]*f[3]-f[8]*f[13]*f[3]-f[12]*f[1]*f[11]+f[0]*f[13]*f[11]+f[8]*f[1]*f[15]-f[0]*f[9]*f[15];e[13]=f[8]*f[13]*f[2]-f[12]*f[9]*f[2]+f[12]*f[1]*f[10]-f[0]*f[13]*f[10]-f[8]*f[1]*f[14]+f[0]*f[9]*f[14];e[2]=f[5]*f[14]*f[3]-f[13]*f[6]*f[3]+f[13]*f[2]*f[7]-f[1]*f[14]*f[7]-f[5]*f[2]*f[15]+f[1]*f[6]*f[15];e[6]
=f[12]*f[6]*f[3]-f[4]*f[14]*f[3]-f[12]*f[2]*f[7]+f[0]*f[14]*f[7]+f[4]*f[2]*f[15]-f[0]*f[6]*f[15];e[10]=f[4]*f[13]*f[3]-f[12]*f[5]*f[3]+f[12]*f[1]*f[7]-f[0]*f[13]*f[7]-f[4]*f[1]*f[15]+f[0]*f[5]*f[15];e[14]=f[12]*f[5]*f[2]-f[4]*f[13]*f[2]-f[12]*f[1]*f[6]+f[0]*f[13]*f[6]+f[4]*f[1]*f[14]-f[0]*f[5]*f[14];e[3]=f[9]*f[6]*f[3]-f[5]*f[10]*f[3]-f[9]*f[2]*f[7]+f[1]*f[10]*f[7]+f[5]*f[2]*f[11]-f[1]*f[6]*f[11];e[7]=f[4]*f[10]*f[3]-f[8]*f[6]*f[3]+f[8]*f[2]*f[7]-f[0]*f[10]*f[7]-f[4]*f[2]*f[11]+f[0]*f[6]*f[11];e[11]=f[8]*f[5]
*f[3]-f[4]*f[9]*f[3]-f[8]*f[1]*f[7]+f[0]*f[9]*f[7]+f[4]*f[1]*f[11]-f[0]*f[5]*f[11];e[15]=f[4]*f[9]*f[2]-f[8]*f[5]*f[2]+f[8]*f[1]*f[6]-f[0]*f[9]*f[6]-f[4]*f[1]*f[10]+f[0]*f[5]*f[10];g=1.0/d;f[0]=e[0]*g;f[4]=e[4]*g;f[8]=e[8]*g;f[12]=e[12]*g;f[1]=e[1]*g;f[5]=e[5]*g;f[9]=e[9]*g;f[13]=e[13]*g;f[2]=e[2]*g;f[6]=e[6]*g;f[10]=e[10]*g;f[14]=e[14]*g;f[3]=e[3]*g;f[7]=e[7]*g;f[11]=e[11]*g;f[15]=e[15]*g;return 1;}
function Oi(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;Cl();e=b.data;f=c.data;g=d+0|0;h=f[g]*e[3];i=d+1|0;j=h+f[i]*e[7];k=d+2|0;l=1.0/(j+f[k]*e[11]+e[15]);m=(f[g]*e[0]+f[i]*e[4]+f[k]*e[8]+e[12])*l;n=(f[g]*e[1]+f[i]*e[5]+f[k]*e[9]+e[13])*l;o=(f[g]*e[2]+f[i]*e[6]+f[k]*e[10]+e[14])*l;f[g]=m;f[i]=n;f[k]=o;}
function S4(b,c){Cl();J9(b,c);}
function RF(b,c,d,e,f){var g;Cl();g=0;while(g<e){Oi(b,c,d);d=d+f|0;g=g+1|0;}}
function MX(b){Cl();return M$(b);}
function U7(){AXY=Cf(16);AXZ=VE();AX0=VE();AX1=Bb();AX2=Bb();AX3=Bb();AX4=Bb();AX5=B6();AX6=Bb();AX7=Bb();AX8=Bb();}
var To=F(Be);
function AS7(){var a=new To();AHW(a);return a;}
function AHW(a){B7(a);}
var P6=F(C_);
function ASz(a,b,c){var d=new P6();AAH(d,a,b,c);return d;}
function AAH(a,b,c,d){Ig(a,b,c,d);}
function Vo(a,b,c,d){var e;e=a.f.c(b,c,d);if(e>=0)return e;return a.O.c(b,c,d);}
var Qy=F(O);
function ASR(){var a=new Qy();Wf(a);return a;}
function Wf(a){X(a);}
function AC6(a){return AP8(a);}
function KK(){var a=this;BQ.call(a);a.kz=null;a.t_=null;}
function ASd(a,b){var c=new KK();ABj(c,a,b);return c;}
function ABj(a,b,c){a.t_=b;a.kz=c;Di(a);}
function AOp(a,b){a.kz.dW(b);}
function AAA(a,b){a.kz.cQ(b);}
function ABs(a,b,c){return a.kz.cU(b,null);}
function ACy(a,b,c){return a.nz(b,c);}
var DM=F(0);
function KH(){var a=this;C.call(a);a.hQ=null;a.k5=null;a.jU=null;a.kN=null;}
function AQI(a,b,c,d){var e=new KH();ABK(e,a,b,c,d);return e;}
function ABK(a,b,c,d,e){a.kN=b;a.hQ=c;a.k5=d;a.jU=e;J(a);}
function ALv(a,b){var c,d,e,f,g,h;if(a.hQ.readyState==4){c=1;if(a.hQ.status!=200)a.k5.cQ(a.jU);else{if(G3(a.kN))(CS()).d$((((M()).a(B(452))).a(a.jU)).d());d=a.hQ.response;e=(LU(a.kN)).ig();f=e.kR();g=f.createElement("script");h=f.createTextNode(d);g.appendChild(h);f.body.appendChild(g);c=a.k5.cU(a.jU,$rt_str(a.hQ.responseText))?0:1;}if(c)a.kN.gP();}}
function AC1(a,b){a.c8(b);}
function KM(){var a=this;BQ.call(a);a.hE=null;a.k7=null;a.t9=0;a.pn=null;a.kD=null;}
function APP(a,b,c,d,e){var f=new KM();AJY(f,a,b,c,d,e);return f;}
function AJY(a,b,c,d,e,f){a.kD=b;a.hE=c;a.k7=d;a.t9=e;a.pn=f;Di(a);}
function AO4(a,b){a.hE.dW(b);}
function AKL(a,b){a.hE.cQ(b);}
function AK6(a,b,c){var d,e,f;d=(LU(a.kD)).yj();if(a.k7!==null){e=a.k7;d.setAttribute("crossOrigin",$rt_ustr(e));}a.kD.j2();AMF(d,AQ5(a,b,d));if(!a.t9){f=$rt_ustr(b);d.src=f;}else{f=$rt_ustr((((((M()).a(B(453))).a(a.pn)).a(B(454))).a(Og(c))).d());d.src=f;}return 0;}
function ANl(a,b,c){return a.nz(b,c);}
function KJ(){var a=this;C.call(a);a.kp=null;a.nG=null;a.jn=null;a.lO=null;}
function ATn(a,b,c,d){var e=new KJ();AJ0(e,a,b,c,d);return e;}
function AJ0(a,b,c,d,e){a.lO=b;a.kp=c;a.nG=d;a.jn=e;J(a);}
function AAr(a,b){var c,d;if(a.kp.readyState==4){if(a.kp.status!=200)a.nG.cQ(a.jn);else{if(G3(a.lO))(CS()).d$((((M()).a(B(455))).a(a.jn)).d());c=a.kp.response;d=(C4()).uZ(c);a.nG.cU(a.jn,AQD(d));}a.lO.gP();}}
function AK4(a,b){a.c8(b);}
var GO=F();
var AX9=null;function APv(){APv=P(GO);VK();}
function VK(){AX9=W((Hz()).data.length);AX9.data[Y(AVL)]=1;AX9.data[Y(AVJ)]=2;AX9.data[Y(AVM)]=3;AX9.data[Y(AVK)]=4;AX9.data[Y(AVN)]=5;}
function KL(){var a=this;C.call(a);a.tV=null;a.xs=null;}
function ATx(a,b){var c=new KL();AGf(c,a,b);return c;}
function AGf(a,b,c){a.xs=b;a.tV=c;J(a);}
function AJi(a,b){a.tV.dW(b.loaded);}
function AOn(a,b){a.c8(b);}
function B_(){var a=this;C.call(a);a.w=null;a.D=null;a.V=null;a.et=null;a.dU=null;a.gT=null;a.eF=null;a.dA=null;a.hl=null;}
var AXo=0;var AUY=0;var AX$=0;var AX_=0;var AYa=0;var AUZ=0;var AYb=0;var AYc=0;var AYd=0;function Cq(){Cq=P(B_);AI1();}
function ARH(){var a=new B_();Pa(a);return a;}
function Pa(a){Cq();J(a);a.et=Cu();a.dU=null;a.gT=Cu();a.eF=Cu();a.dA=Cu();NN(a);}
function NN(a){var b,c,d,e,f,g,h;b=Qv(AUM.fy(B(456)));a.w=$rt_createIntMultiArray([b.F(),b.T()]);c=0;while(c<35){d=0;while(d<150){e=b.uS(d,c)>>>8&16777215;Cq();if(a.eM(e,AX$)){f=X4(d,(b.F()-1|0)-c|0);a.et.cr(f);a.dU=f;a.D=ALW(a,a.dU.cD.p,a.dU.cD.o);a.D.S=3;a.V=V8(a,a.dU.cD.p,a.dU.cD.o);a.V.bD=3;}else if(a.eM(e,AYa)){f=X4(d,(b.F()-1|0)-c|0);a.et.cr(f);}else if(a.eM(e,AYb)){g=ARt(a,d,(b.F()-1|0)-c|0);a.gT.cr(g);}else if(a.eM(e,AYc))a.eF.cr(APA(a,d,(b.F()-1|0)-c|0));else if(a.eM(e,AYd))a.dA.cr(APm(a,d,(b.F()-1
|0)-c|0));else if(!a.eM(e,AX_))a.w.data[d].data[c]=e;else a.hl=AQw(d,(b.F()-1|0)-c|0);d=d+1|0;}c=c+1|0;}h=0;while(h<a.eF.z){(a.eF.R(h)).ku();h=h+1|0;}h=0;while(h<a.dA.z){(a.dA.R(h)).ku();h=h+1|0;}}
function AOD(a,b,c){return b!=c?0:1;}
function Vf(a,b){var c,d,e;a.D.eb(b);if(a.D.S==5)a.D=ALW(a,a.dU.cD.p,a.dU.cD.o);a.V.eb(b);if(a.V.bD==3)a.V=V8(a,a.D.N.p,a.D.N.o);c=0;while(c<a.et.z){if(a.D.N.c9((a.et.R(c)).cD))a.dU=a.et.R(c);c=c+1|0;}c=0;while(c<a.gT.z){d=a.gT.R(c);d.eb(b);c=c+1|0;}c=0;while(c<a.eF.z){e=a.eF.R(c);e.eb(b);c=c+1|0;}c=0;while(c<a.dA.z){(a.dA.R(c)).ga();c=c+1|0;}}
function AI2(a,b){Cq();return b!=AUZ?0:1;}
function AI1(){AXo=0;AUY=16777215;AX$=16711680;AX_=16711935;AYa=16711936;AUZ=65280;AYb=255;AYc=16776960;AYd=65535;}
var Ei=F(CV);
function ATu(){var a=new Ei();Vy(a);return a;}
function CC(a){var b=new Ei();AEE(b,a);return b;}
function Vy(a){E6(a);}
function AEE(a,b){Tj(a,b);}
function KI(){var a=this;C.call(a);a.jb=null;a.nI=null;a.jo=null;a.nt=null;}
function ASH(a,b,c,d){var e=new KI();AI0(e,a,b,c,d);return e;}
function AI0(a,b,c,d,e){a.nt=b;a.jb=c;a.nI=d;a.jo=e;J(a);}
function Yg(a,b){if(a.jb.readyState==4){if(a.jb.status!=200)a.nI.cQ(a.jo);else{if(G3(a.nt))(CS()).d$((((M()).a(B(455))).a(a.jo)).d());a.nI.cU(a.jo,$rt_str(a.jb.responseText));}a.nt.gP();}}
function AM8(a,b){a.c8(b);}
var K9=F();
var Ra=F(FP);
function AQ8(){var a=new Ra();AD1(a);return a;}
function AD1(a){NZ(a);}
var Qg=F(O);
function AQl(){var a=new Qg();AFW(a);return a;}
function AFW(a){X(a);}
function AJv(a){return ARV(a);}
var QD=F(O);
function APW(){var a=new QD();AGp(a);return a;}
function AGp(a){X(a);}
function TI(a){return AP7(a);}
var Pu=F(B3);
function P8(){var a=new Pu();AKI(a);return a;}
function BN(a){var b=new Pu();AHN(b,a);return b;}
function AKI(a){FZ(a);}
function AHN(a,b){Gv(a,b);}
var JF=F(Ev);
function AYe(){var a=new JF();RP(a);return a;}
function RP(a){Pc(a);AJH(a);}
function Tu(a,b){var c;c=new Float32Array(b);return c;}
function ABF(a,b){var c;c=new Int32Array(b);return c;}
function XO(a,b){var c;c=new Int16Array(b);return c;}
function Z3(a,b){var c;c=new Int8Array(b);return c;}
function AH8(a,b){var c;c=new Uint8Array(b);return c;}
function FS(){Bf.call(this);this.fQ=0;}
function AC4(a){var b=new FS();AHj(b,a);return b;}
function AHj(a,b){BZ(a);a.fQ=b;}
function Xc(a,b){a.f=b;}
function Ue(a,b,c,d){var e,f,g,h,i;e=d.A();f=b+1|0;g=Cm(f,e);if(g>0){d.dg=1;return (-1);}h=c.h(b);if(g<0){i=c.h(f);if(BV(i))return (-1);}if(a.fQ!=h)return (-1);return a.f.c(f,c,d);}
function AIb(a,b,c,d){var e,f,g;if(!(c instanceof Bv))return En(a,b,c,d);e=c;f=d.A();while(true){if(b>=f)return (-1);g=e.ke(a.fQ,b);if(g<0)return (-1);b=g+1|0;if(b<f&&BV(e.h(b))){b=g+2|0;continue;}if(a.f.c(b,c,d)>=0)break;}return g;}
function AJ4(a,b,c,d,e){var f,g,h,i;if(!(d instanceof Bv))return Es(a,b,c,d,e);f=d;g=e.A();a:{while(true){if(c<b)return (-1);h=f.kT(a.fQ,c);if(h<0)break a;if(h<b)break a;i=h+1|0;if(i<g&&BV(f.h(i))){c=h+(-1)|0;continue;}if(a.f.c(i,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function YZ(a,b){if(b instanceof CI)return 0;if(b instanceof CA)return 0;if(b instanceof B9)return 0;if(b instanceof Cz)return 0;if(b instanceof FJ)return 0;if(!(b instanceof FS))return 1;return b.fQ!=a.fQ?0:1;}
function AIq(a,b){return 1;}
var N_=F(Db);
function AQO(a,b,c,d){var e=new N_();AH$(e,a,b,c,d);return e;}
function AH$(a,b,c,d,e){H8(a,b,c,d,e);}
function AKl(a,b,c,d){var e,f,g,h,i;e=a.fj.g0();f=a.fj.f9();g=0;while(true){if(g>=e){a:{while(true){h=a.f.c(b,c,d);if(h>=0)break;if((b+a.bd.bX()|0)<=d.A()){h=a.bd.bt(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.bd.bX()|0)>d.A()){d.dg=1;return (-1);}i=a.bd.bt(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function M_(){C.call(this);this.lZ=0;}
function APh(){var a=new M_();AEL(a);return a;}
function AEL(a){J(a);a.lZ=2;}
function AOQ(a,b,c){if(a.lZ>=2)(CS()).d$(((((M()).a(b)).a(B(4))).a(c)).d());}
function YH(a,b,c){if(a.lZ>=3)(Q_()).d$(((((M()).a(b)).a(B(4))).a(c)).d());}
var Oc=F(Ba);
function ALQ(){var a=new Oc();Y8(a);return a;}
function Y8(a){BF(a);}
function AEM(a,b,c,d){if(b&&!(d.f3()&&b==d.cW()))return (-1);return a.f.c(b,c,d);}
function AC8(a,b){return 0;}
function N4(){C.call(this);this.ol=null;}
function AS8(a){var b=new N4();ANa(b,a);return b;}
function ANa(a,b){J(a);a.ol=b;}
function ARf(b){return AS8(b);}
function AD3(a,b){a.ol.j$(b);}
function ANL(a,b){a.ol.x3(b);}
function Cx(){var a=this;C.call(a);a.Z=0.0;a.bb=0.0;a.ba=0.0;}
var AYf=null;var AYg=null;var AYh=null;var AYi=null;var AYj=null;function AH0(){AH0=P(Cx);VF();}
function Bb(){var a=new Cx();Pi(a);return a;}
function BY(a,b,c){var d=new Cx();On(d,a,b,c);return d;}
function Pi(a){AH0();J(a);}
function On(a,b,c,d){AH0();J(a);a.dx(b,c,d);}
function AEY(a,b,c,d){a.Z=b;a.bb=c;a.ba=d;return a;}
function Y0(a,b){return a.dx(b.Z,b.bb,b.ba);}
function ALN(a,b){return a.uH(b.Z,b.bb,b.ba);}
function AEj(a,b,c,d){return a.dx(a.Z+b,a.bb+c,a.ba+d);}
function AGt(a,b){return a.yw(b.Z,b.bb,b.ba);}
function AKY(a,b,c,d){return a.dx(a.Z-b,a.bb-c,a.ba-d);}
function AKg(a,b){return a.dx(a.Z*b,a.bb*b,a.ba*b);}
function X8(a){return a.Z*a.Z+a.bb*a.bb+a.ba*a.ba;}
function AO9(a){var b;b=a.wM();if(b!==0.0&&b!==1.0)return a.xU(1.0/Gl(b));return a;}
function AL8(a,b){return a.Z*b.Z+a.bb*b.bb+a.ba*b.ba;}
function YQ(a,b){return a.dx(a.bb*b.ba-a.ba*b.bb,a.ba*b.Z-a.Z*b.ba,a.Z*b.bb-a.bb*b.Z);}
function AFK(a,b,c,d){return a.dx(a.bb*d-a.ba*c,a.ba*b-a.Z*d,a.Z*c-a.bb*b);}
function AGW(a,b,c){a.Z=a.Z+c*(b.Z-a.Z);a.bb=a.bb+c*(b.bb-a.bb);a.ba=a.ba+c*(b.ba-a.ba);return a;}
function VF(){AYf=BY(1.0,0.0,0.0);AYg=BY(0.0,1.0,0.0);AYh=BY(0.0,0.0,1.0);AYi=BY(0.0,0.0,0.0);AYj=B6();}
function Ef(){var a=this;C.call(a);a.i=0.0;a.j=0.0;}
var AYk=null;var AYl=null;var AYm=null;function AHZ(){AHZ=P(Ef);XZ();}
function BG(){var a=new Ef();Pk(a);return a;}
function KZ(a,b){var c=new Ef();QW(c,a,b);return c;}
function Pk(a){AHZ();J(a);}
function QW(a,b,c){AHZ();J(a);a.i=b;a.j=c;}
function ACb(a){return Gl(a.i*a.i+a.j*a.j);}
function Xg(a,b){a.i=b.i;a.j=b.j;return a;}
function TC(a,b,c){a.i=b;a.j=c;return a;}
function ABQ(a,b){a.i=a.i-b.i;a.j=a.j-b.j;return a;}
function ALl(a){var b;b=a.ry();if(b!==0.0){a.i=a.i/b;a.j=a.j/b;}return a;}
function AIi(a,b,c){a.i=a.i+b;a.j=a.j+c;return a;}
function AMj(a,b){a.i=a.i*b;a.j=a.j*b;return a;}
function AIc(a,b){var c,d;c=b.i-a.i;d=b.j-a.j;return Gl(c*c+d*d);}
function U6(a){var b;b=TP(a.j,a.i)*57.2957763671875;if(b<0.0)b=b+360.0;return b;}
function XZ(){AYk=KZ(1.0,0.0);AYl=KZ(0.0,1.0);AYm=KZ(0.0,0.0);}
function PZ(){var a=this;C.call(a);a.f$=null;a.cG=0;a.vl=0;}
function ATA(){var a=new PZ();ACn(a);return a;}
function AQP(a){var b=new PZ();AOE(b,a);return b;}
function AYn(a,b){var c=new PZ();Jb(c,a,b);return c;}
function ACn(a){Jb(a,1,16);}
function AOE(a,b){Jb(a,1,b);}
function Jb(a,b,c){J(a);a.vl=b;a.f$=W(c);}
function ADC(a,b){var c,d,e;c=a.f$;d=c.data;if(a.cG==d.length)c=a.wE(BB(8,a.cG*1.75|0));d=c.data;e=a.cG;a.cG=e+1|0;d[e]=b;}
function AKO(a,b){if(b<a.cG)return a.f$.data[b];H(Bg((((((M()).a(B(339))).l(b)).a(B(340))).l(a.cG)).d()));}
function XG(a,b,c){var d;if(b<a.cG){d=a.f$.data;d[b]=d[b]+c|0;return;}H(Bg((((((M()).a(B(339))).l(b)).a(B(340))).l(a.cG)).d()));}
function AAf(a){a.cG=0;}
function V0(a,b){var c,d,e;c=W(b);d=c.data;e=a.f$;CB(e,0,c,0,By(a.cG,d.length));a.f$=c;return c;}
function SX(){var a=this;Cp.call(a);a.lP=null;a.gF=null;a.kj=0.0;}
function AQF(a){var b=new SX();ALR(b,a);return b;}
function ALR(a,b){El(a,b);a.kj=0.0;}
function AFG(a){a.lP=Ew(Ex(AUM.fy(B(457))),0,0,480,320);a.gF=Gz();(a.gF.kf()).fM(0.0,0.0,480.0,320.0);}
function Zu(a,b){AUN.ij(16384);a.gF.el();a.gF.dd(a.lP,0.0,0.0);a.gF.dM();a.kj=a.kj+b;if(a.kj>1.0&&!(!AUL.ct((-1))&&!AUL.nT()))a.c$.f6(APM(a.c$));}
function AE4(a){AUJ.fk(B(242),B(327));a.gF.J();(a.lP.fL()).J();}
function R$(){var a=this;D9.call(a);a.oB=0;a.nx=0;a.me=null;}
function ARP(a,b,c,d,e,f){var g=new R$();AOF(g,a,b,c,d,e,f);return g;}
function AOF(a,b,c,d,e,f,g){ID(a,c,e,f);a.nx=b;a.oB=g;a.me=d;}
function ABf(a,b){return a.me.data[b+a.nx|0];}
function ADw(a,b,c){a.me.data[b+a.nx|0]=c;}
function YG(a){return a.oB;}
function Tk(){var a=this;C.call(a);a.fV=null;a.ii=0;a.wx=0;a.g8=0;}
function ASe(a){var b=new Tk();Vj(b,a);return b;}
function Vj(a,b){J(a);a.wx=1;a.g8=1;a.fV=b;}
function ALJ(a){return 0;}
function AOT(a){var b,c,d;b=a.fV.ig();c=b.u7();d=$rt_str(c.href);return d;}
function WR(a){return a.ii;}
function AGg(a){a.ii=a.ii-1|0;}
function UB(a){a.ii=a.ii+1|0;}
function AAL(a,b,c,d,e){a:{APv();switch(AX9.data[Y(c)]){case 1:break;case 2:a.wU(b,d,e);break a;case 3:a.n4(b,e);break a;case 4:a.yN(b,e);break a;case 5:e.cU(b,null);break a;default:H(BI((((M()).a(B(458))).it(c)).d()));}a.q$(b,e);}}
function UJ(a,b,c){var d,e;if(a.g8)(CS()).d$((((M()).a(B(459))).a(b)).d());d=a.fV.nm();e=BA(ASH(a,d,c,b),"handleEvent");d.onreadystatechange=e;a.j2();FL(a,d,c);d.open("GET",$rt_ustr(b));d.setRequestHeader("Content-Type","text/plain; charset=utf-8");d.send();}
function Yk(a,b,c){var d,e;if(a.g8)(CS()).d$((((M()).a(B(460))).a(b)).d());d=a.fV.nm();e=BA(AQI(a,d,c,b),"handleEvent");d.onreadystatechange=e;a.j2();FL(a,d,c);d.open("GET",$rt_ustr(b));d.setRequestHeader("Content-Type","text/plain; charset=utf-8");d.send();}
function Wd(a,b,c){a.n4(b,ASd(a,c));}
function ANE(a,b,c){var d,e;if(a.g8)(CS()).d$((((M()).a(B(459))).a(b)).d());d=a.fV.nm();e=BA(ATn(a,d,c,b),"handleEvent");d.onreadystatechange=e;a.j2();FL(a,d,c);d.open("GET",$rt_ustr(b));e="arraybuffer";d.responseType=e;d.send();}
function AES(a,b,c,d){a.vq(b,c,null,d);}
function ABb(a,b,c,d,e){var f;f=0;a.n4(b,APP(a,e,d,f,c));}
function AMF(b,c){b.addEventListener("load",BA(c,"handleEvent"),!!0);b.addEventListener("error",BA(c,"handleEvent"),!!0);}
function FL(a,b,c){var d;d=BA(ATx(a,c),"handleEvent");b.onprogress=d;}
function G3(b){return b.g8;}
function LU(b){return b.fV;}
var QV=F();
function Lh(b){return $rt_intBitsToFloat(b&(-16777217));}
var Ke=F(O);
function ARm(){var a=new Ke();AFe(a);return a;}
function AFe(a){X(a);}
function ANk(a){var b;b=AQy(a);b.U=1;return b;}
function OD(){var a=this;E_.call(a);a.eT=0;a.b6=null;a.g2=0;a.tZ=0.0;a.mu=0;}
function Ck(){var a=new OD();Zy(a);return a;}
function AYo(a){var b=new OD();JM(b,a);return b;}
function AYp(a,b){var c=new OD();SE(c,a,b);return c;}
function ABR(a,b){return Bh(Ik,b);}
function Zy(a){JM(a,16);}
function JM(a,b){SE(a,b,0.75);}
function Sx(b){var c,d;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function SE(a,b,c){var d;Mz(a);if(b>=0&&c>0.0){d=Sx(b);a.eT=0;a.b6=a.pp(d);a.tZ=c;IL(a);return;}H(CR());}
function IL(a){a.mu=a.b6.data.length*a.tZ|0;}
function AMr(a,b){var c;c=Pr(a,b);if(c===null)return null;return c.e7;}
function Pr(a,b){var c,d,e;if(b===null)c=H9(a);else{d=G8(b);e=d&(a.b6.data.length-1|0);c=HD(a,b,e,d);}return c;}
function HD(a,b,c,d){var e,f;e=a.b6.data[c];while(e!==null){if(e.kc==d){f=e.e0;if(KS(b,f))break;}e=e.dJ;}return e;}
function H9(a){var b;b=a.b6.data[0];while(b!==null&&b.e0!==null){b=b.dJ;}return b;}
function AGC(a,b,c){return a.zT(b,c);}
function AL2(a,b,c){var d,e,f,g,h;if(b===null){d=H9(a);if(d===null){a.g2=a.g2+1|0;d=a.pG(null,0,0);e=a.eT+1|0;a.eT=e;if(e>a.mu)a.jk();}}else{f=G8(b);g=f&(a.b6.data.length-1|0);d=HD(a,b,g,f);if(d===null){a.g2=a.g2+1|0;d=a.pG(b,g,f);e=a.eT+1|0;a.eT=e;if(e>a.mu)a.jk();}}h=d.e7;d.e7=c;return h;}
function AIz(a,b,c,d){var e;e=ASC(b,d);e.dJ=a.b6.data[c];a.b6.data[c]=e;return e;}
function ABq(a,b){var c,d,e,f,g,h,i;c=Sx(!b?1:b<<1);d=a.pp(c);e=0;while(e<a.b6.data.length){f=a.b6.data[e];a.b6.data[e]=null;while(f!==null){g=d.data;h=f.kc&(c-1|0);i=f.dJ;f.dJ=g[h];g[h]=f;f=i;}e=e+1|0;}a.b6=d;IL(a);}
function AI_(a){a.vg(a.b6.data.length);}
function AF0(a,b){var c;c=Qb(a,b);if(c===null)return null;return c.e7;}
function Qb(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.b6.data[0];while(e!==null){if(e.e0===null)break a;f=e.dJ;d=e;e=f;}}else{g=G8(b);c=g&(a.b6.data.length-1|0);e=a.b6.data[c];while(e!==null&&!(e.kc==g&&KS(b,e.e0))){f=e.dJ;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.dJ=e.dJ;else a.b6.data[c]=e.dJ;a.g2=a.g2+1|0;a.eT=a.eT-1|0;return e;}
function G8(b){return b.d9();}
function KS(b,c){return b!==c&&!b.X(c)?0:1;}
function RY(){var a=this;C.call(a);a.cs=null;a.dy=null;a.b9=null;a.N=null;a.S=0;a.dh=0.0;a.dz=0;a.b_=null;a.mQ=0;a.bW=null;}
function ALW(a,b,c){var d=new RY();AO1(d,a,b,c);return d;}
function AO1(a,b,c,d){J(a);a.cs=BG();a.dy=BG();a.b9=BG();a.N=Bu();a.S=3;a.dh=0.0;a.dz=(-1);a.mQ=0;a.bW=G(Dk,[Bu(),Bu(),Bu(),Bu(),Bu()]);a.b_=b;a.cs.i=c;a.cs.j=d;a.N.be=0.6000000238418579;a.N.Y=0.800000011920929;a.N.p=a.cs.i+0.20000000298023224;a.N.o=a.cs.j;a.S=3;a.dh=0.0;}
function AAs(a,b){var c;OS(a);a.dy.j=(-20.0);a.dy.c1(b);a.b9.gr(a.dy.i,a.dy.j);if(a.dy.i===0.0){c=a.b9;c.i=c.i*0.8999999761581421;}if(a.b9.i>6.0)a.b9.i=6.0;if(a.b9.i<(-6.0))a.b9.i=(-6.0);a.b9.c1(b);L3(a);a.b9.c1(1.0/b);if(a.S==3&&a.dh>0.4000000059604645)a.S=0;if(a.S==4&&a.dh>0.4000000059604645)a.S=5;a.dh=a.dh+b;}
function OS(a){var b,c,d,e,f,g,h;if(a.b_.V.bD!=2&&a.S!=3&&a.S!=4){a:{b:{b=AUL.i3(0)/AUI.T()*480.0;c=AUL.i3(1)/AUI.T()*480.0;d=320.0-AUL.n$(0)/AUI.F()*320.0;if(!(AUL.cV(0)&&b<70.0)){if(!AUL.cV(1))break b;if(c>=70.0)break b;}e=1;break a;}e=0;}c:{d:{if(!(AUL.cV(0)&&b>70.0&&b<134.0)){if(!AUL.cV(1))break d;if(c<=70.0)break d;if(c>=134.0)break d;}f=1;break c;}f=0;}e:{f:{if(!(AUL.cV(0)&&b>416.0&&b<480.0&&d<64.0)){g=AUL;if(!g.cV(1))break f;if(c<=416.0)break f;if(c>=480.0)break f;if(d>=64.0)break f;}h=1;break e;}h=0;}if
(!(!AUL.ct(51)&&!h)&&a.S!=2){a.S=2;a.b9.j=10.0;a.mQ=0;}if(!AUL.ct(29)&&!e){if(!AUL.ct(32)&&!f){if(a.S!=2)a.S=0;a.dy.i=0.0;}else{if(a.S!=2)a.S=1;a.dz=1;a.dy.i=20.0*a.dz;}}else{if(a.S!=2)a.S=1;a.dz=(-1);a.dy.i=20.0*a.dz;}return;}}
function L3(a){var b,c,d;b=a.N;b.p=b.p+a.b9.i;I1(a);c=0;while(c<a.bW.data.length){d=a.bW.data[c];if(a.N.c9(d)){if(a.b9.i<0.0)a.N.p=d.p+d.be+0.009999999776482582;else a.N.p=d.p-a.N.be-0.009999999776482582;a.b9.i=0.0;}c=c+1|0;}b=a.N;b.o=b.o+a.b9.j;I1(a);c=0;while(c<a.bW.data.length){d=a.bW.data[c];if(a.N.c9(d)){if(a.b9.j>=0.0)a.N.o=d.o-a.N.Y-0.009999999776482582;else{a.N.o=d.o+d.Y+0.009999999776482582;a.mQ=1;if(a.S!=4&&a.S!=3)a.S=EE(a.dy.i)<=0.10000000149011612?0:1;}a.b9.j=0.0;}c=c+1|0;}a.cs.i=a.N.p-0.20000000298023224;a.cs.j
=a.N.o;}
function I1(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=a.N.p|0;c=DG(a.N.o)|0;d=a.N.p+a.N.be|0;e=DG(a.N.o)|0;f=a.N.p+a.N.be|0;g=a.N.o+a.N.Y|0;h=a.N.p|0;i=a.N.o+a.N.Y|0;j=a.b_.w;k=j.data;l=k[b].data[(a.b_.w.data[0].data.length-1|0)-c|0];m=k[d].data[(a.b_.w.data[0].data.length-1|0)-e|0];n=k[f].data[(a.b_.w.data[0].data.length-1|0)-g|0];o=k[h].data[(a.b_.w.data[0].data.length-1|0)-i|0];if(a.S!=4&&!(!a.b_.kq(l)&&!a.b_.kq(m)&&!a.b_.kq(n)&&!a.b_.kq(o))){a.S=4;a.dh=0.0;}Cq();if(l!=AUY)a.bW.data[0].bw((-1.0),(-1.0),0.0,0.0);else a.bW.data[0].bw(b,
c,1.0,1.0);if(m!=AUY)a.bW.data[1].bw((-1.0),(-1.0),0.0,0.0);else a.bW.data[1].bw(d,e,1.0,1.0);if(n!=AUY)a.bW.data[2].bw((-1.0),(-1.0),0.0,0.0);else a.bW.data[2].bw(f,g,1.0,1.0);if(o!=AUY)a.bW.data[3].bw((-1.0),(-1.0),0.0,0.0);else a.bW.data[3].bw(h,i,1.0,1.0);if(a.b_.V.bD!=1)a.bW.data[4].bw((-1.0),(-1.0),0.0,0.0);else{a.bW.data[4].p=a.b_.V.L.p;a.bW.data[4].o=a.b_.V.L.o;a.bW.data[4].be=a.b_.V.L.be;a.bW.data[4].Y=a.b_.V.L.Y;}}
function Pl(){Ba.call(this);this.h1=0;}
function AQK(a){var b=new Pl();ACa(b,a);return b;}
function ACa(a,b){BF(a);a.h1=b;}
function AHn(a,b,c,d){var e;e=!d.f3()?c.k()-b|0:d.A()-b|0;if(e<=0){d.bh(a.h1,0);return a.f.c(b,c,d);}if(c.h(b)!=10)return (-1);d.bh(a.h1,1);return a.f.c(b+1|0,c,d);}
function AAU(a,b){var c;c=!b.ds(a.h1)?0:1;b.bh(a.h1,(-1));return c;}
function F8(){var a=this;C.call(a);a.iu=0;a.po=0;}
var AVm=null;var AVl=null;function Cb(){Cb=P(F8);ZQ();}
function Le(a,b){var c=new F8();Mh(c,a,b);return c;}
function Mh(a,b,c){Cb();J(a);a.iu=b;a.po=c;}
function AGq(a){return a.iu?0:1;}
function AMo(a){return a.iu!=1?0:1;}
function AEl(a){return !a.y5()&&!a.qI()?0:1;}
function AB1(a){return a.iu!=2?0:1;}
function AMA(a){return a.iu!=3?0:1;}
function AAu(a){if(a.zp())return a.po;H(ASU());}
function FV(b){Cb();return Le(2,b);}
function ZQ(){AVm=Le(0,0);AVl=Le(1,0);}
function Jh(){Ba.call(this);this.f4=0;}
function ASu(a){var b=new Jh();Rs(b,a);return b;}
function Rs(a,b){BF(a);a.f4=b;}
function AID(a,b,c,d){var e,f,g,h;e=!d.f3()?c.k():d.A();if(b>=e){d.bh(a.f4,0);return a.f.c(b,c,d);}f=e-b|0;if(f==2&&c.h(b)==13){g=b+1|0;if(c.h(g)==10){d.bh(a.f4,0);return a.f.c(b,c,d);}}a:{if(f==1){h=c.h(b);if(h==10)break a;if(h==13)break a;if(h==133)break a;if((h|1)==8233)break a;}return (-1);}d.bh(a.f4,0);return a.f.c(b,c,d);}
function X1(a,b){var c;c=!b.ds(a.f4)?0:1;b.bh(a.f4,(-1));return c;}
var Hg=F();
var AXn=null;function ATr(){ATr=P(Hg);UN();}
function UN(){AXn=W((NL()).data.length);AXn.data[Y(AUz)]=1;AXn.data[Y(AUC)]=2;AXn.data[Y(AUD)]=3;AXn.data[Y(AUA)]=4;}
function ED(){var a=this;C.call(a);a.B=null;a.f0=0;a.dG=0;a.td=0;a.l6=0;a.dq=0;a.m=0;a.rA=0;a.gJ=null;a.ew=null;a.r=0;a.iD=0;a.iK=0;a.hK=0;a.pw=null;}
var AYq=null;var AYr=null;var AYs=0;function AQu(a,b){var c=new ED();AMa(c,a,b);return c;}
function AMa(a,b,c){J(a);a.dG=1;a.pw=b;if((c&16)>0)b=AD2(b);else if((c&128)>0)b=Yz(b);a.B=BR(b.k()+2|0);CB(b.q5(),0,a.B,0,b.k());a.B.data[a.B.data.length-1|0]=0;a.B.data[a.B.data.length-2|0]=0;a.rA=a.B.data.length;a.f0=c;Da(a);Da(a);}
function AEr(a){return a.dq;}
function Xw(a,b){if(b>0&&b<3)a.dG=b;if(b==1)NK(a);}
function WY(a,b){a.f0=b;a.m=a.dq;a.ew=a.gJ;a.r=a.iK+1|0;a.hK=a.iK;Da(a);}
function Y4(a){return a.gJ;}
function AIv(a){return a.gJ===null?0:1;}
function WO(a){return a.ew===null?0:1;}
function AJy(a){Da(a);return a.l6;}
function Yb(a){var b;b=a.gJ;Da(a);return b;}
function VC(a){return a.m;}
function AAt(a){return a.l6;}
function Yz(b){return b;}
function NK(a){a.m=a.dq;a.ew=a.gJ;a.r=a.hK;a.hK=a.iK;Da(a);}
function Da(a){var b,c,d,e,f,g,h,$$je;a.l6=a.dq;a.dq=a.m;a.gJ=a.ew;a.iK=a.hK;a.hK=a.r;while(true){b=0;a.m=a.r>=a.B.data.length?0:F5(a);a.ew=null;if(a.dG==4){if(a.m!=92)return;a.m=a.r>=a.B.data.length?0:a.B.data[Bj(a)];switch(a.m){case 69:break;default:a.m=92;a.r=a.iD;return;}a.dG=a.td;a.m=a.r>(a.B.data.length-2|0)?0:F5(a);}a:{if(a.m!=92){if(a.dG==1)switch(a.m){case 36:a.m=(-536870876);break a;case 40:if(a.B.data[a.r]!=63){a.m=(-2147483608);break a;}Bj(a);c=a.B.data[a.r];d=0;while(true){b:{if(d){d=0;switch(c)
{case 33:break;case 61:a.m=(-134217688);Bj(a);break b;default:H(Bn(B(45),a.d(),a.r));}a.m=(-67108824);Bj(a);}else{switch(c){case 33:break;case 60:Bj(a);c=a.B.data[a.r];d=1;break b;case 61:a.m=(-536870872);Bj(a);break b;case 62:a.m=(-33554392);Bj(a);break b;default:a.m=S7(a);if(a.m<256){a.f0=a.m;a.m=a.m<<16;a.m=(-1073741784)|a.m;break b;}a.m=a.m&255;a.f0=a.m;a.m=a.m<<16;a.m=(-16777176)|a.m;break b;}a.m=(-268435416);Bj(a);}}if(!d)break;}break a;case 41:a.m=(-536870871);break a;case 42:case 43:case 63:e=a.r>=a.B.data.length
?42:a.B.data[a.r];switch(e){case 43:a.m=a.m|(-2147483648);Bj(a);break a;case 63:a.m=a.m|(-1073741824);Bj(a);break a;default:}a.m=a.m|(-536870912);break a;case 46:a.m=(-536870866);break a;case 91:a.m=(-536870821);a.kw(2);break a;case 93:if(a.dG!=2)break a;a.m=(-536870819);break a;case 94:a.m=(-536870818);break a;case 123:a.ew=Sa(a,a.m);break a;case 124:a.m=(-536870788);break a;default:}else if(a.dG==2)switch(a.m){case 38:a.m=(-536870874);break a;case 45:a.m=(-536870867);break a;case 91:a.m=(-536870821);break a;case 93:a.m
=(-536870819);break a;case 94:a.m=(-536870818);break a;default:}}else{f=a.r>=(a.B.data.length-2|0)?(-1):F5(a);c:{a.m=f;switch(a.m){case -1:H(Bn(B(45),a.d(),a.r));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.m
=PS(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.dG!=1)break a;a.m=(-2147483648)|a.m;break a;case 65:a.m=(-2147483583);break a;case 66:a.m=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:H(Bn(B(45),a.d(),a.r));case 68:case 83:case 87:case 100:case 115:case 119:a.ew=H5(G$(a.B,
a.iD,1),0);a.m=0;break a;case 71:a.m=(-2147483577);break a;case 80:case 112:break c;case 81:a.td=a.dG;a.dG=4;b=1;break a;case 90:a.m=(-2147483558);break a;case 97:a.m=7;break a;case 98:a.m=(-2147483550);break a;case 99:if(a.r>=(a.B.data.length-2|0))H(Bn(B(45),a.d(),a.r));a.m=a.B.data[Bj(a)]&31;break a;case 101:a.m=27;break a;case 102:a.m=12;break a;case 110:a.m=10;break a;case 114:a.m=13;break a;case 116:a.m=9;break a;case 117:a.m=Hy(a,4);break a;case 120:a.m=Hy(a,2);break a;case 122:a.m=(-2147483526);break a;default:}break a;}g
=Px(a);h=0;if(a.m==80)h=1;try{a.ew=H5(g,h);}catch($$e){$$je=CY($$e);if($$je instanceof GD){H(Bn(B(45),a.d(),a.r));}else{throw $$e;}}a.m=0;}}if(b)continue;else break;}}
function Px(a){var b,c,d;b=Ih(10);if(a.r<(a.B.data.length-2|0)){if(a.B.data[a.r]!=123)return (((M()).a(B(461))).a(G$(a.B,Bj(a),1))).d();Bj(a);c=0;a:{while(a.r<(a.B.data.length-2|0)){c=a.B.data[Bj(a)];if(c==125)break a;b.bZ(c);}}if(c!=125)H(Bn(B(45),a.d(),a.r));}if(!b.k())H(Bn(B(45),a.d(),a.r));d=b.d();if(d.k()==1)return (((M()).a(B(461))).a(d)).d();b:{c:{if(d.k()>3){if(d.qD(B(461)))break c;if(d.qD(B(462)))break c;}break b;}d=d.lw(2);}return d;}
function Sa(a,b){var c,d,e,f,$$je;c=Ih(4);d=(-1);e=2147483647;a:{while(true){if(a.r>=a.B.data.length)break a;b=a.B.data[Bj(a)];if(b==125)break a;if(b==44&&d<0)try{d=E2(c.d(),10);c.uV(0,c.k());continue;}catch($$e){$$je=CY($$e);if($$je instanceof Ei){break;}else{throw $$e;}}c.bZ(b&65535);}H(Bn(B(45),a.d(),a.r));}if(b!=125)H(Bn(B(45),a.d(),a.r));if(c.k()>0)b:{try{e=E2(c.d(),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=CY($$e);if($$je instanceof Ei){}else{throw $$e;}}H(Bn(B(45),a.d(),a.r));}else if(d<0)H(Bn(B(45),
a.d(),a.r));if((d|e|(e-d|0))<0)H(Bn(B(45),a.d(),a.r));f=a.r>=a.B.data.length?42:a.B.data[a.r];c:{switch(f){case 43:a.m=(-2147483525);Bj(a);break c;case 63:a.m=(-1073741701);Bj(a);break c;default:}a.m=(-536870789);}return AR1(d,e);}
function ABh(a){return a.pw;}
function ACN(a){return !a.dq&&!a.m&&a.r==a.rA&&!a.ia()?1:0;}
function Fs(b){return b<0?0:1;}
function ANA(a){return !a.bJ()&&!a.ia()&&Fs(a.dq)?1:0;}
function Wq(a){return a.dq<=56319&&a.dq>=55296?1:0;}
function AJu(a){return a.dq<=57343&&a.dq>=56320?1:0;}
function Ie(b){return b<=56319&&b>=55296?1:0;}
function Ha(b){return b<=57343&&b>=56320?1:0;}
function Hy(a,b){var c,d,e,f,$$je;c=Ih(b);d=a.B.data.length-2|0;e=0;while(true){f=Cm(e,b);if(f>=0)break;if(a.r>=d)break;c.bZ(a.B.data[Bj(a)]);e=e+1|0;}if(!f)a:{try{f=E2(c.d(),16);}catch($$e){$$je=CY($$e);if($$je instanceof Ei){break a;}else{throw $$e;}}return f;}H(Bn(B(45),a.d(),a.r));}
function PS(a){var b,c,d,e,f;b=3;c=1;d=a.B.data.length-2|0;e=IJ(a.B.data[a.r],8);switch(e){case -1:break;default:if(e>3)b=2;Bj(a);a:{while(true){if(c>=b)break a;if(a.r>=d)break a;f=IJ(a.B.data[a.r],8);if(f<0)break;e=(e*8|0)+f|0;Bj(a);c=c+1|0;}}return e;}H(Bn(B(45),a.d(),a.r));}
function S7(a){var b,c,d;b=1;c=a.f0;a:while(true){if(a.r>=a.B.data.length)H(Bn(B(45),a.d(),a.r));b:{c:{d=a.B.data[a.r];switch(d){case 41:Bj(a);return c|256;case 45:if(!b)H(Bn(B(45),a.d(),a.r));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}Bj(a);}Bj(a);return c;}
function Bj(a){a.iD=a.r;if(a.f0&4)KB(a);else a.r=a.r+1|0;return a.iD;}
function KB(a){var b;b=a.B.data.length-2|0;a.r=a.r+1|0;a:while(true){if(a.r<b&&Qt(a.B.data[a.r])){a.r=a.r+1|0;continue;}if(a.r>=b)break;if(a.B.data[a.r]!=35)break;a.r=a.r+1|0;while(true){if(a.r>=b)continue a;if(Nv(a,a.B.data[a.r]))continue a;a.r=a.r+1|0;}}return a.r;}
function Nv(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function RO(b){return AYq.Ct(b);}
function YU(b){var c,d,e,f,g,h;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;if(!f)g=Lg([d,e]);else{h=4519+f|0;g=Lg([d,e,h]);}return g;}return null;}
function AEZ(b){var c;c=AYr.bU(b);return c==AYs?0:1;}
function AH1(b){return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);}
function F5(a){var b,c,d;b=a.B.data[Bj(a)];if(BH(b)){c=a.iD+1|0;if(c<a.B.data.length){d=a.B.data[c];if(BV(d)){Bj(a);return CN(b,d);}}}return b;}
function Wo(a){return a.iK;}
var MJ=F(O);
function APL(){var a=new MJ();AND(a);return a;}
function AND(a){X(a);}
function AM5(a){return ((B1()).bq(65279,65279)).bq(65520,65533);}
var OE=F(FI);
function AO_(){var a=new OE();AMM(a);return a;}
function AMM(a){Oj(a);}
function V2(a){var b;b=(Oa(a)).eC(1);b.U=1;return b;}
var Md=F(B5);
function L1(){BQ.call(this);this.kt=null;}
function ATz(a){var b=new L1();AMR(b,a);return b;}
function AMR(a,b){a.kt=b;Di(a);}
function AL5(a,b,c){var d,e;d=AU4;e=d.tL();e.vV(AA4(a.kt),ARo(a,e));d.tL();return 1;}
function Rv(){var a=this;C.call(a);a.o3=null;a.m7=null;}
function ARo(a,b){var c=new Rv();ACQ(c,a,b);return c;}
function ACQ(a,b,c){a.m7=b;a.o3=c;J(a);}
function AE6(a){AJj(a.m7.kt,APD(a.o3));AUK=AIB(a.m7.kt);(C7()).gP();}
function ALo(a){(C7()).gP();}
function ADh(a){a.ws();}
function Uh(a){a.vk();}
var ML=F(Ds);
function APb(a,b,c,d,e,f){var g=new ML();U_(g,a,b,c,d,e,f);return g;}
function U_(a,b,c,d,e,f,g){IF(a,b,c,d,e,f,g);}
function AG0(a,b){var c,d,e,f;c=a.ea.s.data;d=a.d1;e=b*2|0;f=(c[d+e|0]&255)<<8|a.ea.s.data[(a.d1+e|0)+1|0]&255;return f<<16>>16;}
function Yp(a,b,c){var d,e,f;d=a.ea.s.data;e=a.d1;f=b*2|0;d[e+f|0]=c>>8<<24>>24;a.ea.s.data[(a.d1+f|0)+1|0]=c<<24>>24;}
function Qa(){var a=this;C.call(a);a.rS=null;a.ie=null;a.vh=null;a.is=null;a.nV=0.0;a.l$=Cs;a.ll=Cs;a.jL=0.0;a.g9=0.0;a.jB=0;}
function ASi(a){var b=new Qa();U4(b,a);return b;}
function U4(a,b){J(a);a.nV=0.0;a.l$=F6();a.ll=T(-1);a.jL=0.0;a.g9=0.0;a.vh=b;a.ie=AU4.sX();a.rS=AU4.uO(b);a.is=ARr(a.rS);a.is.o6(0,0,a.ie.width,a.ie.height);a.is.pf(0.0,0.0,0.0,1.0);a.is.ij(16384);}
function AH7(a){var b;b=F6();a.jL=AQV(ACT(b,a.l$))/1000.0;a.l$=b;a.g9=a.g9+a.jL;a.jB=a.jB+1|0;if(a.g9>1.0){a.nV=a.jB;a.g9=0.0;a.jB=0;}}
function AAv(a){return a.is;}
function AIf(a){return a.ie.width;}
function Wh(a){return a.ie.height;}
function VH(a){return a.jL;}
function AJd(a){return a.nV|0;}
function AIA(a,b){return 0;}
var Cv=F(Bk);
var AVc=null;var AVg=null;var AVd=null;var AVh=null;var AVe=null;var AVf=null;var AYt=null;function Fd(){Fd=P(Cv);AJN();}
function EL(a,b){var c=new Cv();Rb(c,a,b);return c;}
function M3(){Fd();return AYt.fB();}
function Rb(a,b,c){Fd();BX(a,b,c);}
function AJN(){AVc=EL(B(463),0);AVg=EL(B(464),1);AVd=EL(B(465),2);AVh=EL(B(466),3);AVe=EL(B(467),4);AVf=EL(B(468),5);AYt=G(Cv,[AVc,AVg,AVd,AVh,AVe,AVf]);}
$rt_packages([-1,"com",0,"badlogic",1,"gdx",2,"utils",-1,"java",4,"util",5,"regex",4,"nio",7,"charset",4,"lang"]);
$rt_metadata([C,0,0,[],0,3,0,0,["Bw",ATJ(Dy),"D_",ATJ(Dl),"d9",ATJ(YK),"X",ATK(AFH),"d",ATJ(W8),"Av",ATJ(Gs),"fB",ATJ(AEx)],O,0,C,[],1,0,0,0,["g",ATJ(X),"v5",ATK(AJw)],OY,0,O,[],0,0,0,0,["g",ATJ(AJ7),"H",ATJ(YN)],Mw,0,O,[],0,0,0,0,["g",ATJ(AM_),"H",ATJ(AFT)],HH,0,C,[],3,3,0,0,0,KQ,0,C,[],0,3,0,0,["AC",ATL(ALx),"wh",ATJ(ZN),"oi",ATK(AKA),"wR",ATK(AA7),"uh",ATK(AO5)],Bx,0,C,[],3,3,0,0,0,CT,0,C,[Bx],1,3,0,0,["g",ATJ(SD)],BM,0,C,[],3,3,0,0,0,CU,0,CT,[BM],0,3,0,Cj,["bi",ATK(Fi),"ok",ATJ(VA),"d",ATJ(AM1),"d9",ATJ(T9),
"X",ATK(ANU)],Dm,0,C,[],0,0,0,AP9,0,Ba,0,C,[],1,0,0,LY,["g",ATJ(BF),"ql",ATK(Fz),"cd",ATM(En),"ch",ATN(Es),"oH",ATK(Yc),"gM",ATJ(WW),"yi",ATJ(AKw),"E",ATK(I8),"bT",ATK(AL7),"fg",ATJ(ANx),"dn",ATJ(JU)],Bf,0,Ba,[],0,0,0,0,["g",ATJ(BZ),"gm",ATL(PV),"c",ATM(ABM),"E",ATK(AHR),"bT",ATK(AEP),"P",ATK(AIN),"dn",ATJ(XK)],DO,0,Bf,[],0,0,0,0,["Eh",ATL(Mb),"c",ATM(UC),"cd",ATM(AFf),"ch",ATN(AJX),"bT",ATK(AEI),"fg",ATJ(AHT),"dn",ATJ(ANC)],FT,0,C,[],3,3,0,0,0,Dj,0,C,[FT],0,3,0,Js,["bV",ATK(Lm),"CT",ATL(IQ)],FE,0,O,[],0,0,
0,0,["g",ATJ(L7),"H",ATJ(LW)],Kj,0,DO,[],0,0,0,0,["BL",ATK(AJf),"cd",ATM(AAS),"ch",ATN(AOI),"fg",ATJ(XY)],BE,0,C,[],3,3,0,0,0,Kk,0,C,[BE],1,3,0,0,0,EZ,0,O,[],0,0,0,0,["g",ATJ(MI),"H",ATJ(O0)],RA,0,EZ,[],0,0,0,0,["g",ATJ(ACJ),"H",ATJ(AGs)],Bk,0,C,[BM,Bx],1,3,0,0,["dw",ATL(BX),"AR",ATJ(Y),"d",ATJ(AB3)],Ch,0,Bk,[],12,3,0,Gr,0,Hr,0,C,[],0,3,0,0,0,Bl,0,Ba,[],1,0,0,0,["ql",ATK(Kr),"g",ATJ(B8),"c",ATM(AOj),"bX",ATJ(ALf),"P",ATK(ADs)],Kt,0,Bl,[],0,0,0,0,["tp",ATK(AB9),"bt",ATL(AJ6)],ER,0,C,[],3,3,0,0,0,Dg,0,C,[],0,
3,0,0,["nU",ATJ(AAD),"oG",ATJ(AJS),"uX",ATJ(ABA),"Af",ATJ(ACp),"sp",ATK(AN_)],DJ,0,Dg,[],0,3,0,0,["bV",ATK(Mx),"s_",ATK(P7)],Ed,0,DJ,[],0,3,0,0,["bV",ATK(J7)],OO,0,C,[],0,3,0,0,["g",ATJ(Zg),"ky",ATL(ME),"e_",ATK(AL$),"yp",ATK(YC),"wo",ATK(AMn)],B3,0,Dg,[],0,3,0,0,["g",ATJ(FZ),"bV",ATK(Gv)],Be,0,B3,[],0,3,0,0,["g",ATJ(B7),"bV",ATK(Eb)],E$,"IndexOutOfBoundsException",9,Be,[],0,3,0,0,["g",ATJ(LO),"bV",ATK(ACS)],SM,"StringIndexOutOfBoundsException",9,E$,[],0,3,0,0,["g",ATJ(ALn)],GD,"MissingResourceException",5,
Be,[],0,3,0,0,["DR",ATM(AAx)],D$,0,Bf,[],0,0,0,0,["fO",ATL(G_),"c",ATM(Vg),"E",ATK(AIR),"g7",ATK(Ys),"P",ATK(AJp)],N1,0,D$,[],0,0,0,0,["fO",ATL(AA9),"c",ATM(AE_)],Ft,0,C,[],4,3,0,Df,0,Dw,0,Bk,[],12,3,0,Kd,0,CL,0,Bk,[],12,3,0,EN,0,Op,0,O,[],0,0,0,0,["lz",ATL(X5),"zw",ATM(ANi),"H",ATJ(AAP)],Jt,0,C,[],3,3,0,0,0,In,0,C,[Jt],3,3,0,0,0,IH,0,C,[],3,3,0,0,0,CW,0,C,[In,IH],1,3,0,0,["g",ATJ(EU),"jg",ATM(UM)],IA,0,CW,[],0,3,0,ANK,["o0",ATK(AHg)],Cr,0,Ba,[],1,0,0,0,["ez",ATM(Eh),"kF",ATJ(AOt),"bT",ATK(AJZ),"P",ATK(AMt),
"dn",ATJ(AFX)],Oy,0,Cr,[],0,0,0,0,["ez",ATM(Vq),"c",ATM(AOq),"cd",ATM(AK8)]]);
$rt_metadata([BO,0,Ba,[],0,0,0,Gk,["bi",ATK(De),"c",ATM(VQ),"hc",ATJ(AFN),"P",ATK(Wt)],HA,0,BO,[],0,0,0,0,["bi",ATK(R_),"c",ATM(WN)],Ir,0,C,[],3,3,0,0,0,F9,0,C,[BE],3,3,0,0,0,NX,0,C,[Ir,F9],0,3,0,0,["DW",ATK(Y2),"c8",ATK(AGk),"lH",ATJ(AD6),"eW",ATM(AIX),"hT",ATL(Uo),"ho",ATL(ADa),"ix",ATL(AAM),"h6",ATL(AGc),"i3",ATK(AMB),"n$",ATK(V3),"nT",ATJ(YY),"cV",ATK(AHK),"ct",ATK(ACl),"nF",ATJ(ALu),"hd",ATK(AFL)],J2,0,Bf,[],0,0,0,0,["jM",ATK(ALY),"E",ATK(AAB),"c",ATM(ACH)],BW,0,Cr,[],0,0,0,0,["ez",ATM(D5),"c",ATM(UA)],Ox,
0,BW,[],0,0,0,0,["ez",ATM(Xj),"c",ATM(ANQ)],Hj,0,C,[],3,3,0,0,0,Co,0,C,[],0,3,0,0,0,P0,"CoderMalfunctionError",8,DJ,[],0,3,0,0,["s_",ATK(AF6)],IW,0,C,[],3,3,0,0,0,M5,0,C,[IW],0,3,0,0,["ED",ATK(Z5)],MA,0,BW,[],0,0,0,0,["ez",ATM(ADT),"c",ATM(AGl)],FP,0,C,[],1,3,0,0,["g",ATJ(NZ)],DF,0,C,[Bx,ER],0,0,0,0,["g",ATJ(GY),"bi",ATK(GK),"Ez",ATK(Om),"CI",ATK(PY),"nP",ATL(Q5),"EE",ATK(Lc),"o4",ATL(Vh),"uw",ATM(ACX),"B0",ATK(Rj),"q0",ATL(PE),"CR",ATK(HX),"n5",ATL(Jo),"p0",ATL(MW),"eO",ATK(GT),"d",ATJ(Im),"k",ATJ(HK),"h",
ATK(Kc),"mj",ATM(Jj),"nc",ATN(GE),"CE",ATK(Iy),"rP",ATN(Ns),"rH",ATK(RL),"BB",ATK(R3),"BG",ATL(Sp)],Et,0,C,[],3,3,0,0,0,Ld,0,DF,[Et],0,3,0,0,["g",ATJ(ACm),"xP",ATK(AK$),"Ar",ATM(ANP),"yJ",ATK(ZK),"xG",ATN(AFV),"Ad",ATL(AMP),"nc",ATN(AAK),"mj",ATM(Wr),"h",ATK(T$),"k",ATJ(AOo),"d",ATJ(WJ),"eO",ATK(Xd),"n5",ATL(AK_)],B4,0,C,[],1,3,0,0,["bi",ATK(D6),"CN",ATJ(DC),"CA",ATJ(Ca),"cj",ATK(Eq),"C3",ATJ(Bi),"bY",ATK(Fr),"cm",ATJ(Ej),"b8",ATJ(ES),"BN",ATJ(Bq),"Bo",ATJ(Dp)],DZ,0,C,[],1,0,0,0,["g",ATJ(Gq)],N,0,DZ,[],1,0,
0,G6,["g",ATJ(U),"by",ATJ(Wp),"b1",ATJ(Vl),"us",ATJ(AFI),"ru",ATJ(AB$),"h0",ATJ(AK5),"xg",ATJ(VI),"iS",ATJ(WA),"eY",ATJ(ANu),"eC",ATK(AL4),"gc",ATJ(AAF)],O9,0,N,[],0,0,0,0,["Ds",ATK(ADL),"n",ATK(ANF)],EO,0,C,[],4,0,0,AJD,["g",ATJ(RD),"CF",ATK(Sn)],Fh,0,O,[],0,0,0,0,["g",ATJ(Rx),"H",ATJ(O$)],O3,0,O,[],0,0,0,0,["g",ATJ(XA),"H",ATJ(ABt)],Dz,0,Bk,[],12,0,0,QZ,0,Dd,0,Bf,[],0,0,0,0,["rz",ATL(GU),"E",ATK(ANz),"c",ATM(AHy),"oj",ATM(ADb),"bT",ATK(AD8),"P",ATK(AIY)],PX,0,Dd,[],0,0,0,0,["rz",ATL(W0)],OL,0,C,[BE],1,3,0,
0,0,JR,0,C,[],0,3,0,0,["uK",ATK(AAV),"gs",ATK(AMZ),"J",ATJ(ABz)],Nq,0,C,[],4,3,0,0,0,MD,0,C,[],0,3,0,0,0,Cn,0,C,[],3,3,0,0,0,Ez,0,C,[Cn],0,3,0,DU,["wP",ATK(Km),"Bb",ATM(R4),"sb",ATK(Ur),"eA",ATJ(YV),"hz",ATJ(ADl),"hA",ATJ(AGx),"iy",ATJ(AKi),"T",ATJ(ABT),"F",ATJ(AFQ),"hC",ATJ(AJP),"J",ATJ(Xx),"nw",ATJ(Vm),"vL",ATJ(AOg),"yZ",ATJ(Xz),"yB",ATJ(AHp),"z0",ATJ(Ws),"sM",function(b,c,d,e,f,g,h){Zv(this,b,c,d,e,f,g,h);},"uf",function(b,c,d,e,f,g,h,i,j){AIE(this,b,c,d,e,f,g,h,i,j);},"uS",ATL(Z7)],SW,0,BO,[],0,0,0,0,["g",
ATJ(TB),"c",ATM(X$)],Gi,0,Bf,[],0,0,0,0,["gm",ATL(KN),"c",ATM(AHz),"P",ATK(AJo)],Ct,0,Gi,[],0,0,0,0,["gm",ATL(Eu),"c",ATM(Y3),"E",ATK(AIU)],JV,0,Ct,[],0,0,0,0,["gm",ATL(ABx),"c",ATM(AHI),"P",ATK(AMe)],Jp,0,C,[],3,3,0,0,0,K3,0,C,[Jp],0,3,0,0,["g",ATJ(AHV)],Ru,0,Ct,[],0,0,0,0,["gm",ATL(AAw),"c",ATM(Wk),"P",ATK(ALs)],Ip,0,C,[],3,3,0,0,0,Ho,0,C,[Ip],0,3,0,0,["EG",ATN(X7),"rn",ATJ(T4),"tE",ATJ(X9),"zV",ATJ(AFc),"tC",ATJ(ADq),"T",ATJ(AEg),"F",ATJ(Ym),"eA",ATJ(AAh),"Ae",ATJ(U9),"jh",ATJ(Za),"xt",ATJ(AGo),"vI",ATK(YO)],GV,
0,C,[],3,3,0,0,0,SG,0,C,[GV,BE],0,3,0,0,["Ej",ATL(AJJ),"uO",ATK(Yq),"sX",ATJ(ANd),"ig",ATJ(TT),"wC",ATJ(AHx),"yj",ATJ(AMO),"nm",ATJ(AKu),"tL",ATJ(ZG)],Fp,"UnsupportedOperationException",9,Be,[],0,3,0,0,["g",ATJ(Pe)],S8,"ReadOnlyBufferException",7,Fp,[],0,3,0,0,["g",ATJ(ADu)],PA,0,C,[],4,3,0,0,0,P9,0,C,[],0,3,0,0,["g",ATJ(WU)],D8,0,Ed,[],0,3,0,0,["bV",ATK(HI)]]);
$rt_metadata([PW,0,D8,[],0,3,0,0,["bV",ATK(Xh)],KV,0,O,[],0,0,0,0,["g",ATJ(Xi),"H",ATJ(Zj)],Hk,0,C,[],3,3,0,0,0,NV,0,C,[Hk],0,3,0,0,["Dh",ATM(Yh),"Bt",function(b,c,d,e,f){O7(this,b,c,d,e,f);},"zv",ATL(XW),"sD",ATN(AL0),"tx",ATM(AFM),"fe",ATJ(ALX),"dM",ATJ(WM)],CM,0,C,[],3,3,0,0,0,E3,0,C,[CM],3,3,0,0,0,FG,0,C,[E3],1,3,0,0,["g",ATJ(Sl),"xj",ATK(Z0)],Hv,0,C,[],32,0,0,AQd,0,QU,0,C,[],4,3,0,0,0,E8,0,B4,[BM],1,3,0,0,["ff",ATM(P1),"Cd",ATJ(QY),"D2",ATJ(Tg),"b8",ATJ(Ux),"cm",ATJ(AGF)],BU,0,Cr,[],0,0,0,0,["iF",ATM(DX),
"c",ATM(Uf)],C_,0,BU,[],0,0,0,0,["iF",ATM(Ig),"c",ATM(AFm),"E",ATK(AO2)],RE,0,C_,[],0,0,0,0,["iF",ATM(ANM),"c",ATM(AGj)],Mk,0,C,[],0,3,0,0,0,H$,0,C,[],3,3,0,0,0,L9,0,C,[],4,0,0,0,0,J8,0,N,[],0,0,0,0,["Bm",ATK(AJs),"n",ATK(YL)],LJ,0,C,[],4,3,0,0,0,E9,0,C,[],3,3,0,0,0,Pm,0,C,[E9],0,3,0,0,["EK",ATN(AA3),"g3",ATJ(AC3)],BQ,0,C,[],0,3,0,0,["g",ATJ(Di),"dW",ATK(AKo),"cQ",ATK(Zd)],OH,0,BQ,[],0,0,0,0,["D0",ATK(ALq),"dW",ATK(AOW),"cQ",ATK(VZ),"cU",ATL(AEV)],F0,0,FE,[],0,0,0,0,["g",ATJ(Ou),"H",ATJ(Nh)],Gn,0,F0,[],0,0,
0,0,["g",ATJ(Qs),"H",ATJ(JK)],OA,0,Gn,[],0,0,0,0,["g",ATJ(AK2),"H",ATJ(AFZ)],QN,0,O,[],0,0,0,0,["g",ATJ(AGS),"H",ATJ(AL3)],N$,0,Ct,[],0,0,0,0,["gm",ATL(ALj),"c",ATM(XE),"P",ATK(AOV)],FF,0,C,[],1,3,0,0,["Ey",ATN(SA),"xV",ATM(NB),"Dd",ATK(O1),"zC",ATK(ANN),"CB",ATK(Su),"vS",ATK(ACW),"Et",ATM(K0),"C6",ATK(J5),"uo",ATK(AFF)],OC,0,Bl,[],0,0,0,0,["tp",ATK(YR),"bt",ATL(YX),"cd",ATM(V9),"ch",ATN(ABn),"bT",ATK(ACo),"xm",ATM(AMl),"uv",ATM(ALa),"n7",ATL(ACI)],G0,0,C,[],3,3,0,0,0,R8,"ArrayStoreException",9,Be,[],0,3,0,
0,["g",ATJ(AAC)],Ec,0,BW,[],0,0,0,0,["ez",ATM(Gw),"c",ATM(AKN),"E",ATK(AMI)],S6,0,C,[],0,3,0,0,["Cu",ATN(AE0)],F$,0,C,[],3,3,0,0,0,IT,0,C,[F$],0,0,0,0,["Ca",function(b,c,d,e,f,g){PB(this,b,c,d,e,f,g);},"bh",ATL(AMw),"ds",ATK(AEU),"kC",ATJ(TZ),"my",ATK(AEn),"dB",ATL(Yr),"nN",ATL(V$),"fI",ATK(AIF),"jW",ATK(AIT),"xT",ATK(AD0),"pJ",ATJ(AIJ),"lm",ATK(XT),"vK",ATJ(AFp),"sU",ATK(Uu),"ef",ATL(XI),"uI",ATJ(AMU),"up",ATJ(AMW),"qf",ATM(ANT),"lH",ATJ(YM),"vC",ATK(AJR),"cW",ATJ(WV),"A",ATJ(AFn),"kw",ATK(Zr),"qt",ATJ(ABc),
"f3",ATJ(ACi),"hi",ATJ(Ut),"wN",ATJ(Vs)],LL,0,Bl,[],0,0,0,0,["jM",ATK(AG2),"bt",ATL(AD7)],Rn,0,C,[],0,3,0,0,["kn",ATM(ADo),"ku",ATJ(XM),"eb",ATK(AFd)],JT,0,N,[],0,0,0,0,["Au",ATK(ADO),"n",ATK(AN$)],HM,"GdxRuntimeException",3,Be,[],0,3,0,0,["bV",ATK(MK)],ET,0,C,[Cn],1,3,0,IX,["fO",ATL(HE),"cR",ATJ(AF3),"vw",ATM(AH_),"xv",ATM(Un),"zk",ATL(ABd),"z2",ATJ(AME)],EM,0,ET,[],0,3,0,E7,["wP",ATK(Of),"D1",ATM(IO),"CZ",ATK(Gy),"Br",ATM(IG),"wp",ATK(AMs),"T",ATJ(AHh),"F",ATJ(ALO),"J",ATJ(ADe)],LK,0,C,[],4,3,0,0,0,EW,0,C,
[BM],1,3,0,0,["B6",ATL(LS)],Eo,0,C,[],0,3,0,Ji,["bV",ATK(QE)],CV,"IllegalArgumentException",9,Be,[],0,3,0,0,["g",ATJ(E6),"bV",ATK(Tj)],QT,"IllegalCharsetNameException",8,CV,[],0,3,0,0,["bV",ATK(ALz)],E0,0,CW,[],0,3,0,0,["Ek",ATK(J_)],Fq,0,E0,[],0,3,0,0,["Eo",ATL(I9),"jg",ATM(AGY),"vc",ATK(Zl),"ka",ATK(ADg),"d$",ATK(XF),"zU",ATK(ADR),"wO",ATJ(AJa)],PM,0,Ct,[],0,0,0,0,["gm",ATL(UP),"c",ATM(Ud),"P",ATK(AJE)],DI,0,E8,[],1,0,0,0,["ff",ATM(Hc),"An",ATJ(ALI),"dS",ATK(AGu),"bU",ATK(AFy),"pu",ATL(ALZ),"ce",ATJ(AER)]]);
$rt_metadata([D3,0,DI,[],1,0,0,0,["eg",function(b,c,d,e,f,g){GC(this,b,c,d,e,f,g);},"ep",ATJ(AEz)],K4,0,D3,[],0,0,0,0,["eg",function(b,c,d,e,f,g){ZO(this,b,c,d,e,f,g);},"kP",ATK(AA5),"kb",ATL(TM)],RV,0,D$,[],0,0,0,0,["fO",ATL(AMu),"c",ATM(Ye),"cd",ATM(AL_),"ch",ATN(UY),"bT",ATK(AF7)],Lo,0,Cr,[],0,0,0,0,["EJ",ATN(AIl),"c",ATM(AHU),"cd",ATM(T8)],QS,0,O,[],0,0,0,0,["g",ATJ(ACB),"H",ATJ(AEo)],Fk,0,C,[],4,3,0,S0,0,BS,0,C,[],0,3,0,Kp,0,CD,0,Bk,[],12,3,0,L6,0,V,0,C,[],0,3,0,G1,["bi",ATK(R0),"oC",ATN(P4),"w3",ATJ(AKd),
"wI",ATJ(AMk)],D4,0,C,[],4,3,0,0,["DQ",ATM(AGD),"Dk",ATN(SV),"CS",function(b,c,d,e,f,g){QA(this,b,c,d,e,f,g);},"BV",ATJ(MM)],Pv,0,C,[],0,3,0,0,["n0",ATL(AMN)],RQ,0,BU,[],0,0,0,0,["Dn",ATK(ADj),"c",ATM(AN9),"cd",ATM(AGG)],Dh,0,C,[Cn],0,3,0,Ju,["C0",ATL(S5),"xf",ATJ(AC$),"jv",ATJ(AK9),"km",ATJ(AMv),"uF",ATL(AEQ),"hW",ATL(ACP),"fu",ATL(Z_),"xo",ATM(Vb),"zd",ATM(AGd),"fp",function(b,c,d,e,f,g){AN4(this,b,c,d,e,f,g);},"cR",ATJ(Vp),"J",ATJ(AKM),"pE",ATK(Wc),"ma",ATK(AEJ),"hx",ATK(AIt),"jz",ATK(V5)],CO,0,Bk,[],12,
3,0,Ps,0,GF,0,C,[],3,3,0,0,0,Gp,0,C,[],3,3,0,0,0,RR,0,C,[GF,Gp],0,3,0,0,["zY",ATJ(V4),"uL",ATK(Zk),"wm",ATJ(AEh),"jS",ATJ(ABO),"iL",ATJ(AFD)],B5,0,C,[BE],1,3,0,0,0,OF,0,B5,[],1,3,0,0,0,HS,0,C,[],3,3,0,0,0,Cp,0,C,[HS],1,3,0,0,["kl",ATK(El),"kW",ATL(AMK)],SY,0,Cp,[],0,3,0,0,["kl",ATK(ACE),"kv",ATJ(TS),"gs",ATK(ACz),"j_",ATJ(Tw)],CK,0,C,[],3,3,0,0,0,Sm,0,C,[CK,Bx],0,3,0,0,["g",ATJ(Xe),"bi",ATK(UE),"oo",ATK(AIL),"kx",ATL(ACq),"m5",ATK(AOX),"xF",ATL(UU),"dL",ATK(U1),"iv",ATK(AN7),"zo",ATK(AIj),"u5",ATK(AHO),"c3",
ATK(AM6),"f5",ATK(AOm),"gh",ATK(AMV),"gO",ATK(AEs),"bJ",ATJ(ANb)],JX,0,N,[],0,0,0,0,["D4",ATK(AOA),"n",ATK(Y7)],EX,0,C,[Cn],3,3,0,0,0,Fy,0,C,[EX],0,3,0,0,["op",ATL(Yy),"bi",ATK(Rp),"cX",ATJ(ACu),"jj",ATJ(UQ),"rW",ATM(AGT),"mL",ATJ(T2),"cR",ATJ(AMX),"sn",ATJ(AJA),"J",ATJ(WX)],My,0,Fy,[],0,3,0,0,["bi",ATK(AHo)],Gc,0,C,[],1,3,0,0,["g",ATJ(Qu)],MR,0,Gc,[],0,3,0,0,["n0",ATL(YP),"ga",ATJ(Yu),"oK",ATK(AOL)],Si,0,C,[],0,3,0,0,0,Gd,0,CT,[BM],0,3,0,AWC,0,KX,0,C,[],0,3,0,0,0,CI,0,Bl,[],0,0,0,0,["kr",ATK(AIw),"bX",ATJ(ADG),
"bt",ATL(AB8),"cd",ATM(ZS),"ch",ATN(ADP),"kg",ATJ(Wl),"bT",ATK(ALK)],Lz,0,N,[],0,0,0,0,["u4",ATM(ANO),"n",ATK(AJ$)],LF,0,N,[],0,0,0,0,["hp",ATN(AAT),"n",ATK(Tv)],LB,0,N,[],0,0,0,0,["jX",ATL(TU),"n",ATK(AJt)],HR,0,C,[BE],3,3,0,0,0,LA,0,N,[],0,0,0,0,["u4",ATM(Ub),"n",ATK(AFg)],LC,0,N,[],0,0,0,0,["jX",ATL(T_),"n",ATK(ABP)],LI,0,N,[],0,0,0,0,["lg",ATM(Y1),"n",ATK(Yo)],EB,0,C,[Cn],3,3,0,0,0,LE,0,N,[],0,0,0,0,["hp",ATN(UF),"n",ATK(Zn)],LD,0,N,[],0,0,0,0,["jX",ATL(Ua),"n",ATK(AFi)],LP,0,Bf,[],4,0,0,0,["wd",ATK(XX),
"c",ATM(AHe),"E",ATK(AJT),"gM",ATJ(Ts),"P",ATK(AOh)],LG,0,N,[],0,0,0,0,["lg",ATM(ABG),"n",ATK(AMf)],CH,0,C,[BM],0,3,0,R,0,JW,0,Bl,[],0,0,0,0,["kr",ATK(AJz),"bt",ATL(Us)],Cz,0,Bl,[],0,0,0,0,["bi",ATK(AOe),"bt",ATL(AJq),"cd",ATM(AGO),"ch",ATN(Xb),"or",ATJ(Ug),"bT",ATK(AI8)],OB,0,O,[],0,0,0,0,["lz",ATL(ZB),"zw",ATM(TL),"H",ATJ(TK)]]);
$rt_metadata([PN,0,C,[BE],1,3,0,0,0,CZ,0,C,[],1,0,0,0,["g",ATJ(Hh)],KF,0,C,[],0,3,0,0,["n0",ATL(AIp)],FN,0,B4,[BM,Et,ER,H$],1,3,0,0,["ff",ATM(Pb),"wD",ATM(Vi),"pq",ATK(AE3)],Fj,0,FN,[],1,0,0,0,["ff",ATM(L_)],Oe,0,Fj,[],0,0,0,0,["D5",function(b,c,d,e,f,g){AOM(this,b,c,d,e,f,g);},"zP",ATK(AHl)],Qr,0,C,[CM],0,3,0,0,["bi",ATK(AJ9),"ky",ATL(Nx),"e_",ATK(ABD),"t$",ATL(ABU),"R",ATK(AOC),"iz",ATK(AMJ),"uk",ATL(AN8)],PU,0,N,[],0,0,0,0,["Bz",ATK(TY),"n",ATK(AMg)],Gm,0,C,[Bx],0,3,0,AJr,["oC",ATN(M4),"g",ATJ(Ok),"qL",ATN(ZR),
"wf",ATJ(AN1)],Iv,0,C,[],0,3,0,Io,0,OP,0,N,[],0,0,0,0,["Ck",ATK(AAW),"n",ATK(AAO)],Em,0,B4,[BM],1,3,0,0,["ff",ATM(K5),"rV",ATM(ALr),"D3",ATJ(Sq),"DI",ATJ(Sj),"wG",ATK(AJn),"wq",ATK(AJ1),"b8",ATJ(ALC),"cm",ATJ(AOa),"bY",ATK(AFs),"cj",ATK(UW)],D9,0,Em,[],1,0,0,0,["ff",ATM(ID),"y8",ATK(AIZ),"ce",ATJ(AD_)],Ds,0,D9,[],1,0,0,0,["eg",function(b,c,d,e,f,g){IF(this,b,c,d,e,f,g);},"ep",ATJ(ACj)],Kq,0,Ds,[],0,0,0,0,["eg",function(b,c,d,e,f,g){AEX(this,b,c,d,e,f,g);},"of",ATK(Yn),"lT",ATL(Xu)],NM,0,N,[],0,0,0,0,["Ep",ATK(AAZ),
"n",ATK(AJC)],C2,0,B4,[BM],1,3,0,0,["ff",ATM(Qm),"lM",ATM(AGA),"D8",ATJ(O_),"BY",ATJ(Lb),"ya",ATK(ABB),"vO",ATK(AGX),"b8",ATJ(ABX),"cm",ATJ(AOz),"bY",ATK(AH9),"cj",ATK(ANn)],DD,0,C2,[],1,0,0,0,["ff",ATM(Ia),"s1",ATK(ADy),"zi",ATL(ANY),"u6",ATJ(ACA),"ce",ATJ(YT)],DE,0,DD,[],1,0,0,0,["eg",function(b,c,d,e,f,g){Jf(this,b,c,d,e,f,g);},"ep",ATJ(AHJ)],RH,0,Ba,[],4,0,0,0,["bi",ATK(ABi),"c",ATM(AEc),"P",ATK(ABa)],St,0,Bl,[],0,0,0,0,["kr",ATK(AGB),"bt",ATL(TH)],It,0,C,[CM],0,3,0,0,["g",ATJ(W1),"bi",ATK(Sv),"op",ATL(He),
"cr",ATK(AJI),"ve",ATK(ACx),"xd",ATM(WG),"R",ATK(AM4),"k8",ATL(YF),"sR",ATK(AIr),"fJ",ATJ(AAa),"oR",ATK(Zf),"v8",ATK(WB)],Ii,0,BO,[],0,0,0,0,["bi",ATK(ST),"c",ATM(U8),"c2",ATJ(W4),"P",ATK(AHY)],Do,0,Bk,[],12,3,0,TR,["uj",ATJ(Jv)],FJ,0,Bf,[],0,0,0,0,["kr",ATK(W$),"E",ATK(AHH),"c",ATM(X0),"cd",ATM(ACg),"ch",ATN(Y_),"bT",ATK(US),"P",ATK(ALy)],Dc,0,BW,[],0,0,0,0,["r_",function(b,c,d,e,f){EV(this,b,c,d,e,f);},"c",ATM(AOJ)],IM,0,Dc,[],0,0,0,0,["r_",function(b,c,d,e,f){PG(this,b,c,d,e,f);},"c",ATM(Va)],IP,0,C,[],0,
0,0,ALb,0,Hn,0,C,[Cn],3,3,0,0,0,GA,0,C,[E3],3,3,0,0,0,E4,0,FG,[GA],1,3,0,0,["g",ATJ(Ot),"sw",ATJ(AAg)],IB,0,C,[],3,3,0,0,0,K2,0,E4,[CK,Bx,IB],0,3,0,0,["g",ATJ(AAX),"bi",ATK(JY),"eO",ATK(Vc),"R",ATK(AJl),"cT",ATJ(AHL),"kh",ATK(AML),"Ah",ATL(ADm),"iz",ATK(AJK)],NF,"IllegalMonitorStateException",9,Be,[],0,3,0,0,["g",ATJ(AE1)],Db,0,BU,[],0,0,0,0,["so",ATN(H8),"c",ATM(VS)],B9,0,Bf,[],0,0,0,0,["jM",ATK(Qh),"c",ATM(ZW),"n",ATK(AAY),"bT",ATK(Vx),"nn",ATJ(ADM),"E",ATK(AKS),"P",ATK(AAk)],Nz,0,Ec,[],0,0,0,0,["ez",ATM(AH3),
"c",ATM(W6)],Bv,0,C,[Bx,BM,ER],0,3,0,OV,["zM",ATK(GI),"Cp",ATM(Tl),"h",ATK(VM),"k",ATJ(AA$),"bJ",ATJ(ADE),"tn",ATL(AIg),"qD",ATK(ADK),"ys",ATK(ZV),"ke",ATL(AG4),"kT",ATL(VT),"rC",ATL(Zo),"z7",ATL(ZM),"gj",ATL(UD),"lw",ATK(AC0),"nC",ATL(Z8),"wk",ATK(Ty),"ne",ATL(AJk),"vU",ATJ(AEb),"d",ATJ(W7),"q5",ATJ(ADH),"X",ATK(AMH),"d9",ATJ(AHc),"tT",ATK(AEy)],H4,0,CW,[],0,3,0,AE7,["o0",ATK(AEK)],C0,0,C,[BE],3,3,0,0,0,Hq,0,C,[C0],3,3,0,0,0,NA,0,DI,[],0,0,0,0,["ET",function(b,c,d,e,f,g){ACr(this,b,c,d,e,f,g);},"kP",ATK(AHa),
"kb",ATL(AE5),"ep",ATJ(TN)],FD,0,FF,[],1,3,0,0,["xV",ATM(LV),"x$",ATL(VU)],Ms,0,FD,[],0,3,0,0,["A5",ATK(AKG),"uy",function(b,c,d,e,f,g,h){return AEp(this,b,c,d,e,f,g,h);}],Fu,0,C,[],1,3,0,0,["g",ATJ(MN)],FM,0,C,[],3,3,0,0,0,Ea,0,Fu,[FM,CK,Bx],0,3,0,Rf,["g",ATJ(Fv),"bi",ATK(G4),"bn",ATL(AIe),"jk",ATJ(AFo)],Qz,0,Ea,[],0,3,0,0,["g",ATJ(AHE),"AU",ATK(AC_)],Lf,0,Ba,[],0,0,0,0,["g",ATJ(AOr),"c",ATM(AD5),"P",ATK(AHQ)],RW,0,DD,[],0,0,0,0,["Cv",function(b,c,d,e,f,g){XQ(this,b,c,d,e,f,g);},"kQ",ATK(AIm),"hs",ATL(AHk),
"ep",ATJ(AHB)]]);
$rt_metadata([Id,0,C,[Cn],0,3,0,Gu,["lz",ATL(M8),"DN",ATM(Iu),"vF",ATJ(ALk),"zJ",ATJ(ACV),"ts",ATN(Zq),"pc",function(b,c,d,e,f){ACs(this,b,c,d,e,f);},"el",ATJ(Zp),"dM",ATJ(AGi),"y9",ATK(AOu),"J",ATJ(ANZ),"nD",ATK(V1)],GG,0,Dc,[],0,0,0,0,["r_",function(b,c,d,e,f){PJ(this,b,c,d,e,f);},"c",ATM(ACU)],Cc,0,Bk,[],12,3,0,X2,["uj",ATJ(I2)],Jx,0,EW,[],0,3,0,AAR,["y6",ATJ(ANf)],HQ,0,C,[C0],3,3,0,0,0,JQ,0,Ba,[],0,0,0,0,["bi",ATK(AOP),"c",ATM(ACY),"P",ATK(X6)],S9,0,C,[],0,3,0,0,["bV",ATK(AJm),"vE",ATK(W3),"zQ",ATN(AKr),
"l2",ATL(AKa),"zB",ATK(AEW)],LR,0,N,[],0,0,0,0,["A9",ATK(AE9),"n",ATK(AMC)],Pt,0,D3,[],0,0,0,0,["eg",function(b,c,d,e,f,g){ZI(this,b,c,d,e,f,g);},"kP",ATK(ALg),"kb",ATL(VN)],Pj,0,Cp,[],0,3,0,0,["kl",ATK(AN5),"kv",ATJ(AFa),"gs",ATK(TE),"j_",ATJ(AFw)],O4,0,BQ,[],0,0,0,0,["Es",ATL(X3),"dW",ATK(AKD),"cQ",ATK(AGH),"xW",ATL(AGv),"cU",ATL(AA_)],Pf,"NullPointerException",9,Be,[],0,3,0,0,["bV",ATK(AKR),"g",ATJ(XL)],Il,0,C,[],32,0,0,ATp,0,O5,0,BQ,[],0,0,0,0,["A4",ATN(ACk),"dW",ATK(AMS),"cQ",ATK(WT),"cU",ATL(ALp)],Mv,
0,N,[],0,0,0,0,["AE",ATK(ABl),"n",ATK(AIP)],L5,0,C,[],0,0,0,0,["g",ATJ(AOK)],Ob,0,C,[],4,3,0,0,0,RX,0,C,[],0,3,0,0,["g",ATJ(AM7),"bi",ATK(Pz),"x9",ATJ(X_)],LT,0,C,[EB],0,3,0,0,["pz",ATM(AF5),"jY",ATJ(Xq),"hf",ATJ(Yv),"ms",ATJ(AFj),"m2",ATM(Wg),"gR",ATL(AGK),"gw",ATL(AAn),"J",ATJ(ABm)],Ic,0,C,[],3,3,0,0,0,JI,0,C,[],0,3,0,0,0,MY,0,O,[],0,0,0,0,["g",ATJ(AJx),"H",ATJ(AGQ)],GN,0,C,[],3,3,0,0,0,Ja,"PatternSyntaxException",6,CV,[],0,3,0,0,["BP",ATM(Kz),"oG",ATJ(ANs)],Rt,0,O,[],0,0,0,0,["g",ATJ(Yd),"H",ATJ(YJ)],FB,
0,C,[],3,3,0,0,0,C8,0,Bk,[],12,3,0,HJ,0,Jz,0,C,[CM],0,3,0,AJO,["g",ATJ(Rr),"ky",ATL(Ij),"ht",ATK(Xp),"g5",ATK(AB6),"bn",ATL(AKm),"K",ATK(Wm),"g_",ATK(AMD),"mI",ATK(LZ)],N7,0,C,[Bx],4,3,0,0,["DM",ATK(NC),"AV",ATL(Ky),"DS",ATK(Kx),"EM",ATJ(Fg),"C7",ATJ(Ka),"A_",ATJ(RZ),"DP",ATJ(P2)],Mf,0,Ec,[],0,0,0,0,["ez",ATM(ALE),"c",ATM(ADI),"E",ATK(AGV)],NR,"BufferOverflowException",7,Be,[],0,3,0,0,["g",ATJ(ABg)],FK,0,C,[Hj,FT],0,3,0,0,["AK",ATL(Ks),"g3",ATJ(XD),"nX",ATL(Zc),"fk",ATL(AKn),"ip",ATJ(AOH)],Td,0,C,[],0,3,0,0,
["kn",ATM(AIy),"eb",ATK(W_)],HN,0,C,[],3,3,0,0,0,Dk,0,C,[Bx,HN],0,3,0,AKp,["g",ATJ(Nf),"oC",ATN(JG),"bw",ATN(AAb),"h_",ATL(ALS),"c9",ATK(ABI)],Ri,0,C,[],0,3,0,0,["kn",ATM(ALt),"eb",ATK(XH)],SO,0,O,[],0,0,0,0,["g",ATJ(AEC),"H",ATJ(AEv)],GL,0,C,[],0,3,0,0,["BR",ATM(AKX)],QP,0,CZ,[],0,0,0,0,["g",ATJ(ACf),"ic",ATK(AKq),"r$",ATL(ANp)],QO,0,CZ,[],0,0,0,0,["g",ATJ(V6),"ic",ATK(Xn),"r$",ATL(AJe)],N0,0,Ed,[],0,3,0,0,0,Tm,0,O,[],0,0,0,0,["g",ATJ(ACv),"H",ATJ(AJL)],QI,0,C,[],0,3,0,0,["zM",ATK(Y5)],CA,0,Bl,[],0,0,0,0,["jM",
ATK(AIu),"bt",ATL(Tz),"bT",ATK(AHS),"nn",ATJ(AHC)],Gg,0,N,[],0,0,0,0,["bi",ATK(PT),"n",ATK(AHF)],OG,0,Gg,[],0,0,0,0,["bi",ATK(AGz),"n",ATK(AKU)],I0,0,C,[Hn],0,3,0,IZ,["g",ATJ(Rq),"bi",ATK(NJ),"Dl",ATL(Fa),"el",ATJ(AB7),"dM",ATJ(AKW),"dd",ATM(ABV),"dT",function(b,c,d,e,f){WZ(this,b,c,d,e,f);},"ny",function(b,c,d,e,f,g,h,i,j,k){Zw(this,b,c,d,e,f,g,h,i,j,k);},"fe",ATJ(AC2),"J",ATJ(ANv),"kf",ATJ(AIW),"nD",ATK(ABw),"tH",ATJ(Zh),"s6",ATK(AHr),"ym",ATJ(U0)],JC,0,C,[],32,0,0,ARR,0,MB,0,B5,[],1,3,0,0,0,LQ,0,N,[],0,0,
0,0,["g",ATJ(AOv),"EZ",ATL(L2),"Df",ATM(UG),"cc",ATK(Tt),"wY",ATK(AOO),"bq",ATL(AL6),"uG",ATK(T5),"ro",ATK(AMq),"n",ATK(XV),"by",ATJ(AOS),"b1",ATJ(AAc),"h0",ATJ(ALP),"d",ATJ(AGL),"eY",ATJ(AAG)]]);
$rt_metadata([RG,"BufferUnderflowException",7,Be,[],0,3,0,0,["g",ATJ(AMY)],Q1,0,C,[],0,3,0,0,["g",ATJ(TJ)],SF,0,Dd,[],0,0,0,0,["rz",ATL(ACK)],KD,0,DE,[],0,0,0,0,["eg",function(b,c,d,e,f,g){AGa(this,b,c,d,e,f,g);},"kQ",ATK(AEH),"hs",ATL(AIQ)],OQ,0,N,[],0,0,0,0,["AJ",ATK(UX),"n",ATK(Vn)],MZ,0,O,[],0,0,0,0,["g",ATJ(U2),"H",ATJ(ZA)],D7,0,Bk,[],12,3,0,I5,0,IV,0,C,[BE],3,3,0,0,0,Q$,"CloneNotSupportedException",9,B3,[],0,3,0,0,["g",ATJ(AC7)],N3,0,B5,[],1,3,0,0,0,H7,0,CT,[BM],0,3,0,Rl,0,Ev,0,C,[],1,3,0,0,["g",ATJ(Pc)],GM,
0,C,[],3,3,0,0,0,NY,0,C,[GM],0,3,0,0,["g",ATJ(ANI),"vV",ATL(AH5)],Qx,0,C,[],0,0,0,0,["bi",ATK(ADv),"tS",ATL(ACR),"bU",ATK(AFu)],Fb,0,C,[BE],3,3,0,0,0,Nk,0,C,[Fb],1,3,0,0,["Er",ATK(AOl),"Ee",ATJ(Xy)],Jc,0,C,[],0,3,0,0,["C1",ATK(Vv),"Cg",function(b,c,d,e,f){ACD(this,b,c,d,e,f);},"qw",ATN(AKF),"wJ",ATN(Wx),"fL",ATJ(ANw),"yV",ATJ(AHt),"xS",ATJ(YE),"wV",ATJ(Yw),"ut",ATJ(Uw),"uR",ATL(AGJ),"ev",ATL(Z4)],MP,0,Fh,[],0,0,0,0,["g",ATJ(AD4),"H",ATJ(ABZ)],RM,0,N,[],0,0,0,0,["AI",ATL(AOG),"n",ATK(Z$)],RJ,0,N,[],0,0,0,0,["DG",
ATM(AG5),"n",ATK(Uy)],Ce,0,Bk,[],12,3,0,Yx,0,Rc,0,O,[],0,0,0,0,["g",ATJ(VR),"H",ATJ(AGZ)],Jk,0,C,[C0],3,3,0,0,0,LX,0,Db,[],0,0,0,0,["so",ATN(AGe),"c",ATM(AJ3)],Ey,0,C,[],0,3,0,0,["g",ATJ(Mg)],NT,0,Ey,[],0,3,0,0,["bV",ATK(Vr)],Iq,0,C,[C0],3,3,0,0,0,Iw,0,C,[],3,3,0,0,0,Mm,0,N,[],0,0,0,0,["C2",ATK(ANg),"n",ATK(AFP)],Lu,0,N,[],0,0,0,0,["Cc",ATL(ANo),"n",ATK(AEF),"d",ATJ(ABE)],Tp,0,BW,[],0,0,0,0,["ez",ATM(ALD),"c",ATM(Yf)],Lr,0,N,[],0,0,0,0,["jX",ATL(AJG),"n",ATK(Yl)],Ls,0,N,[],0,0,0,0,["jX",ATL(AF$),"n",ATK(AA8)],Lt,
0,N,[],0,0,0,0,["hp",ATN(YB),"n",ATK(AO8)],NP,0,C,[],4,3,0,0,0,L0,0,N,[],0,0,0,0,["hp",ATN(AA0),"n",ATK(ABS)],Lv,0,N,[],0,0,0,0,["hp",ATN(Zx),"n",ATK(Wu)],JP,0,Bl,[],0,0,0,0,["tp",ATK(ALL),"bt",ATL(AFh)],Lw,0,N,[],0,0,0,0,["hp",ATN(UT),"n",ATK(AIn)],Lx,0,N,[],0,0,0,0,["lg",ATM(AHf),"n",ATK(ADA)],Sb,0,N,[],0,0,0,0,["Cn",ATK(TA),"n",ATK(ADk)],Lp,0,N,[],0,0,0,0,["lg",ATM(AFv),"n",ATK(ALH)],PF,0,B5,[],1,3,0,0,0,Ph,0,DF,[Et],0,3,0,0,["bi",ATK(ADQ),"g",ATJ(ANy),"it",ATK(AF_),"a",ATK(Uv),"l",ATK(AGE),"hF",ATK(AB4),
"bZ",ATK(Uk),"xK",ATM(YD),"lY",ATK(AKJ),"zm",ATL(AK7),"Ap",ATN(AJc),"x8",ATL(AN2),"zK",ATL(AG8),"uV",ATL(AMQ),"tr",ATK(ALm),"uW",ATL(AEf),"rH",ATK(AEq),"rP",ATN(ZU),"nc",ATN(AD$),"mj",ATM(Zi),"k",ATJ(We),"d",ATJ(WS),"eO",ATK(AEu),"p0",ATL(AF8),"n5",ATL(AFb),"q0",ATL(AB5),"nP",ATL(AON)],EY,0,C,[],0,3,0,0,["g",ATJ(SS)],GZ,0,EY,[],0,3,0,0,["EI",ATM(MT),"q1",ATJ(AFq)],SP,0,C,[],0,3,0,0,["uK",ATK(Vw),"mX",ATJ(ANm),"J",ATJ(AAQ)],Ni,0,Bf,[],0,0,0,0,["AM",ATL(ANJ),"c",ATM(VJ),"E",ATK(AHv),"P",ATK(W5),"bT",ATK(Wn)],RS,
"ConcurrentModificationException",5,Be,[],0,3,0,0,["g",ATJ(AOi)]]);
$rt_metadata([Ki,0,C,[HH],0,0,0,0,["g",ATJ(AEm)],F3,0,C,[],3,3,0,0,0,Kh,0,C,[F3],0,0,0,0,["g",ATJ(WQ)],Go,0,C,[],3,3,0,0,0,DN,0,C,[Go,CK],0,0,0,0,["w2",ATL(Jy)],Ht,0,DN,[],0,0,0,0,["w2",ATL(AIh),"xl",ATJ(V7),"wa",ATL(AMb)],DV,0,BO,[],0,0,0,0,["g",ATJ(ALM),"c",ATM(AMz)],Ro,0,Bl,[],0,0,0,0,["ql",ATK(AF1),"bt",ATL(AKh),"cd",ATM(AAz),"ch",ATN(XR),"P",ATK(U3)],Ll,0,C,[CM,BM],4,3,0,0,["AB",ATK(AFU),"cT",ATJ(CQ),"B_",ATK(B$)],NW,0,DE,[],0,0,0,0,["eg",function(b,c,d,e,f,g){UO(this,b,c,d,e,f,g);},"kQ",ATK(T6),"hs",ATL(AEw)],Nt,
0,D8,[],0,3,0,0,["bV",ATK(XP)],Q7,0,O,[],0,0,0,0,["g",ATJ(V_),"H",ATJ(ZZ)],IE,0,B3,[],0,3,0,0,0,Oh,0,C,[],0,3,0,0,0,KO,0,C,[F3],0,0,0,0,["By",ATK(AH6),"t2",ATJ(AGy),"pk",ATJ(ALU)],Kb,0,DZ,[CK],0,0,0,0,["fO",ATL(AC9),"g0",ATJ(ABC),"f9",ATJ(AMh),"d",ATJ(AGU)],JZ,0,N,[],0,0,0,0,["At",ATK(AKP),"n",ATK(VW)],Pw,0,C,[Bx],0,3,0,0,["g",ATJ(Ui),"vX",ATK(AMp),"wS",ATJ(AAm)],If,0,C,[],3,3,0,0,0,Mr,0,C,[],4,0,0,0,0,Tr,0,BU,[],0,0,0,0,["iF",ATM(AI5),"c",ATM(Ve)],K_,0,N,[],0,0,0,0,["Eg",ATK(AFB),"n",ATK(AHD)],GJ,0,C,[],3,
3,0,0,0,OR,0,C,[GJ],0,3,0,0,["g",ATJ(Wi)],KW,0,N,[],0,0,0,0,["Ea",ATK(AN6),"n",ATK(AM0)],PI,0,C,[GN,HR],0,3,0,0,["g",ATJ(ACe),"kR",ATJ(ADD),"oJ",ATK(AK3),"y$",ATK(AAJ),"u7",ATJ(Wv),"CW",ATK(AHX)],Nr,0,BU,[],0,0,0,0,["iF",ATM(AO6),"c",ATM(AHM)],JE,0,C,[],0,3,0,0,["Eb",ATL(Ol),"jD",ATL(AIO),"vP",ATK(ANS),"xy",ATK(AJB),"v6",ATK(ADJ)],M1,0,C,[],4,3,0,0,0,FH,0,C,[Cn],0,3,0,Fc,["DD",ATN(R6),"AT",function(b,c,d,e,f){HP(this,b,c,d,e,f);},"CO",function(b,c,d,e,f){Jg(this,b,c,d,e,f);},"t3",ATM(AI7),"q4",ATK(XU),"cX",
ATJ(ZD),"hf",ATJ(ANr),"z_",ATK(ANX),"n2",ATK(Y6),"gR",ATL(AKB),"nE",ATK(AKs),"gw",ATL(Vu),"yy",ATL(AAI),"mE",ATN(AO3),"rq",function(b,c,d,e,f){AF9(this,b,c,d,e,f);},"J",ATJ(ACO),"gt",ATK(AHm),"sS",ATJ(Yj),"gv",ATJ(Zz),"ov",ATJ(ADX)],OU,0,C,[Ic],0,3,0,0,["EO",ATK(AIH),"fy",ATK(AK1)],Ik,0,DN,[],0,0,0,0,["Bj",ATL(AIk)],K$,0,C,[CM],0,3,0,0,0,R7,0,Ba,[],0,0,0,0,["g",ATJ(ADf),"c",ATM(AHq),"P",ATK(TD)],QC,0,C,[CM],0,3,0,0,["g",ATJ(AEG),"ky",ATL(NO),"ht",ATK(AFz),"g5",ATK(Yi),"es",ATL(AKC),"l4",ATL(W9),"mI",ATK(Ry)],Py,
0,C,[F9],0,0,0,0,["C_",ATM(Z6),"c8",ATK(AKk),"hd",ATK(AI3)],Q3,0,O,[],0,0,0,0,["g",ATJ(ADB),"H",ATJ(ALA)],Du,0,B4,[BM],1,3,0,0,["As",function(b,c,d,e,f){KP(this,b,c,d,e,f);},"p5",ATM(AMG),"Dt",ATK(Nn),"AH",ATK(D2),"BO",ATJ(GW),"EY",ATJ(RK),"wl",ATK(ZX),"wT",ATK(ALd),"b8",ATJ(Xf),"bY",ATK(AH4),"cj",ATK(UZ)],Sk,0,Du,[],0,0,0,0,["lz",ATL(ACM),"CX",function(b,c,d,e,f,g,h){Kg(this,b,c,d,e,f,g,h);},"y4",ATK(TW),"ce",ATJ(AMm),"o9",ATJ(AOk),"yd",ATK(ALe),"z5",ATL(ABk),"r1",ATJ(AOs),"om",ATJ(AGw)],I$,0,C,[Bx],0,3,0,
0,["A0",ATL(ABr),"fU",ATM(AEO)],EK,0,C,[],0,3,0,ADr,["g",ATJ(Ko),"uu",ATK(AHi)],HW,0,C,[Bx],0,3,0,ARA,["BW",ATL(Sg)],Kw,0,Ba,[],0,0,0,0,["wd",ATK(AII),"c",ATM(XJ),"P",ATK(ABp)],J0,0,Cp,[],0,3,0,0,["kl",ATK(Xo),"kv",ATJ(VO),"gs",ATK(AEB),"j_",ATJ(Vk)],Rm,0,C,[BE],1,3,0,0,0,Hl,0,C,[],32,0,0,ASP,0,Fw,0,C,[EB],0,3,0,0,["pz",ATM(PC),"jY",ATJ(ABo),"hf",ATJ(AJg),"ms",ATJ(ABe),"m2",ATM(AHd),"gR",ATL(AAl),"gw",ATL(VL),"J",ATJ(AMd)],K7,0,Fw,[],0,3,0,0,["B3",ATL(AJM)],Je,0,C,[],3,3,0,0,0,FQ,0,C,[Je],1,3,0,0,["g",ATJ(Oz),
"mX",ATJ(ADi),"kW",ATL(VP),"f6",ATK(AM3)]]);
$rt_metadata([Qq,0,O,[],0,0,0,0,["g",ATJ(ABN),"H",ATJ(AJU)],HV,0,C,[],3,3,0,0,0,RB,0,C,[BE],1,3,0,0,0,RI,0,FQ,[],0,3,0,0,["g",ATJ(ADZ),"p9",ATJ(AOy)],NU,0,O,[],0,0,0,0,["g",ATJ(Xk),"H",ATJ(AIx)],E_,0,C,[FM],1,3,0,0,["g",ATJ(Mz)],ON,0,C,[EX],0,3,0,0,["op",ATL(ZH),"cX",ATJ(AIM),"jj",ATJ(T7),"rW",ATM(AC5),"mL",ATJ(AM9),"cR",ATJ(ADU),"sn",ATJ(W2),"J",ATJ(Xt)],Lk,0,Ba,[],0,0,0,0,["g",ATJ(AKV),"c",ATM(ADx),"P",ATK(AOB)],QF,0,C,[],0,0,0,0,["fO",ATL(Uq)],H1,0,BO,[],0,0,0,0,["bi",ATK(Po),"c",ATM(UV),"P",ATK(AJV)],SQ,
0,C,[],0,3,0,0,["kn",ATM(ADc),"ku",ATJ(ADN),"ga",ATJ(AF4)],Iz,0,C,[],4,3,0,FR,0,Ix,0,C,[],3,3,0,0,0,JN,0,Bl,[],0,0,0,0,["bi",ATK(AKT),"bt",ATL(AJ_)],EG,0,C,[],4,3,0,0,0,Mj,0,O,[],0,0,0,0,["fO",ATL(ANh),"H",ATJ(AET)],Ma,0,O,[],0,0,0,0,["g",ATJ(WE),"H",ATJ(ANt)],O8,0,C,[F$],4,3,0,0,["B5",ATK(Gt),"Bh",ATJ(Nu),"lm",ATK(Tf),"my",ATK(Kl),"pJ",ATJ(SI),"kC",ATJ(MQ),"hi",ATJ(KC),"A$",ATL(TG)],R2,0,Bf,[],0,0,0,0,["g",ATJ(AG$),"c",ATM(ANW),"E",ATK(WK),"gM",ATJ(AG3),"P",ATK(WH)],Pn,0,N,[],0,0,0,0,["A8",ATK(AKt),"n",ATK(AMx)],SZ,
0,C,[E9],0,3,0,0,["AW",ATK(ACG),"g3",ATJ(AMi)],J3,0,B9,[],0,0,0,0,["jM",ATK(YS),"n",ATK(ADt)],Tq,0,O,[],0,0,0,0,["g",ATJ(AJb),"H",ATJ(T0)],G7,0,Bf,[],0,0,0,0,["DH",ATL(UH),"E",ATK(AFl),"c",ATM(TV),"bT",ATK(WI),"P",ATK(ALV)],OZ,0,C,[If],0,3,0,0,["D$",ATK(T1),"nh",ATK(AG9),"uc",ATK(AHb),"vZ",ATK(AFr),"ti",ATL(AFt),"ij",ATK(AMc),"pf",ATN(AKx),"y2",ATK(AJW),"kd",ATK(Xa),"lu",ATK(XC),"qg",ATM(AJF),"wL",ATN(AD9),"wz",ATK(ACZ),"xQ",ATJ(Ww),"va",ATL(AFY),"hD",function(b,c,d,e,f,g,h,i,j){AA6(this,b,c,d,e,f,g,h,i,j);
},"x_",ATM(ABy),"o6",ATN(AFO),"qs",ATL(TQ),"bS",ATL(YI),"yO",ATN(AKZ),"d4",ATN(AAo),"lq",ATN(VD),"w1",ATK(AIs),"wb",ATJ(AFk),"xB",ATK(ALw),"hh",ATK(ABv),"we",ATK(AOd),"q8",ATK(Vz),"qP",ATK(Uc),"yk",ATN(ACF),"zZ",ATK(Xs),"gL",ATJ(AEN),"qe",ATK(Zb),"yU",ATN(ACc),"zu",ATN(UR),"rp",ATL(Wb),"vQ",ATL(ACw),"lo",ATM(AG_),"tW",ATK(AOU),"w4",ATM(WD),"w9",ATK(AIS),"oT",ATL(AJ5),"ud",ATK(AFA),"z8",ATL(ZT),"kU",ATM(Y$),"wr",ATL(ANq),"xp",function(b,c,d,e,f){UI(this,b,c,d,e,f);},"sW",ATK(AIo),"yF",function(b,c,d,e,f,g){AJh(this,
b,c,d,e,f,g);}],NS,0,C,[],4,3,0,0,["Bp",ATK(AA2),"DE",ATJ(Og)],Th,0,O,[],0,0,0,0,["g",ATJ(AGn),"H",ATJ(ACd)],HC,0,C,[EB],0,3,0,No,["pz",ATM(Ml),"jY",ATJ(VV),"hf",ATJ(AGM),"ms",ATJ(XN),"m2",ATM(Wa),"gR",ATL(ALh),"gw",ATL(Zm),"J",ATJ(ZY)],M7,0,C,[],4,3,0,0,0,MC,0,Ba,[],0,0,0,0,["El",ATK(ADz),"c",ATM(Wj),"P",ATK(WF)],FI,0,O,[],0,0,0,0,["g",ATJ(Oj),"H",ATJ(Oa)],QB,0,C,[],4,3,0,0,0,HU,0,C,[C0],3,3,0,0,0,IK,0,C,[C0,Hq,HU,HQ,Iq,Jk],3,3,0,0,0,G5,0,C,[],3,3,0,0,0,KE,0,C,[BE,IK,G5,Fb],1,3,0,0,["Dz",ATL(AE8),"Eu",ATL(AFJ),
"AF",ATK(VG),"CV",ATM(AHu),"B8",ATK(AMT),"Cb",ATJ(XB),"Bn",ATM(Uj)],Ku,0,C,[],0,0,0,0,0,BT,0,C,[Bx],0,3,0,Cl,["g",ATJ(QH),"fi",ATK(AOR),"sL",ATK(WL),"od",ATK(AGb),"k6",ATJ(ZC),"fM",ATN(AF2),"sH",function(b,c,d,e,f,g){return AGI(this,b,c,d,e,f,g);},"xC",ATM(Xr),"z$",ATL(AAj),"v2",ATM(AAy)],To,"NegativeArraySizeException",9,Be,[],0,3,0,0,["g",ATJ(AHW)],P6,0,C_,[],0,0,0,0,["iF",ATM(AAH),"c",ATM(Vo)],Qy,0,O,[],0,0,0,0,["g",ATJ(Wf),"H",ATJ(AC6)],KK,0,BQ,[],0,0,0,0,["Ao",ATL(ABj),"dW",ATK(AOp),"cQ",ATK(AAA),"nz",
ATL(ABs),"cU",ATL(ACy)],DM,0,C,[BE],3,3,0,0,0,KH,0,C,[DM],0,0,0,0,["t1",ATN(ABK),"c8",ATK(ALv),"hd",ATK(AC1)],KM,0,BQ,[],0,0,0,0,["Bc",function(b,c,d,e,f){AJY(this,b,c,d,e,f);},"dW",ATK(AO4),"cQ",ATK(AKL),"nz",ATL(AK6),"cU",ATL(ANl)],KJ,0,C,[DM],0,0,0,0,["t1",ATN(AJ0),"c8",ATK(AAr),"hd",ATK(AK4)],GO,0,C,[],32,0,0,APv,0,KL,0,C,[DM],0,0,0,0,["Ao",ATL(AGf),"c8",ATK(AJi),"hd",ATK(AOn)],B_,0,C,[],0,3,0,Cq,["g",ATJ(Pa),"eM",ATL(AOD),"eb",ATK(Vf),"kq",ATK(AI2)],Ei,"NumberFormatException",9,CV,[],0,3,0,0,["g",ATJ(Vy),
"bV",ATK(AEE)]]);
$rt_metadata([KI,0,C,[DM],0,0,0,0,["t1",ATN(AI0),"c8",ATK(Yg),"hd",ATK(AM8)],K9,0,C,[],0,0,0,0,0,Ra,0,FP,[],0,3,0,0,["g",ATJ(AD1)],Qg,0,O,[],0,0,0,0,["g",ATJ(AFW),"H",ATJ(AJv)],QD,0,O,[],0,0,0,0,["g",ATJ(AGp),"H",ATJ(TI)],Pu,"IllegalStateException",9,B3,[],0,3,0,0,["g",ATJ(AKI),"bV",ATK(AHN)],JF,0,Ev,[],0,3,0,0,["g",ATJ(RP),"sQ",ATK(Tu),"xN",ATK(ABF),"qR",ATK(XO),"uZ",ATK(Z3),"rT",ATK(AH8)],FS,0,Bf,[],0,0,0,0,["kr",ATK(AHj),"E",ATK(Xc),"c",ATM(Ue),"cd",ATM(AIb),"ch",ATN(AJ4),"bT",ATK(YZ),"P",ATK(AIq)],N_,0,
Db,[],0,0,0,0,["so",ATN(AH$),"c",ATM(AKl)],M_,0,C,[Ix],0,3,0,0,["g",ATJ(AEL),"nX",ATL(AOQ),"fk",ATL(YH)],Oc,0,Ba,[],4,0,0,0,["g",ATJ(Y8),"c",ATM(AEM),"P",ATK(AC8)],N4,0,C,[HV],0,0,0,0,["Ev",ATK(ANa),"j$",ATK(AD3),"x3",ATK(ANL)],Cx,0,C,[Bx,FB],0,3,0,AH0,["g",ATJ(Pi),"Bf",ATM(On),"dx",ATM(AEY),"d3",ATK(Y0),"wA",ATK(ALN),"uH",ATM(AEj),"ty",ATK(AGt),"yw",ATM(AKY),"xU",ATK(AKg),"wM",ATJ(X8),"fw",ATJ(AO9),"xM",ATK(AL8),"qr",ATK(YQ),"wy",ATM(AFK),"s3",ATL(AGW)],Ef,0,C,[Bx,FB],0,3,0,AHZ,["g",ATJ(Pk),"n0",ATL(QW),"ry",
ATJ(ACb),"gK",ATK(Xg),"e1",ATL(TC),"tY",ATK(ABQ),"kO",ATJ(ALl),"gr",ATL(AIi),"c1",ATK(AMj),"v$",ATK(AIc),"Ag",ATJ(U6)],PZ,0,C,[],0,3,0,0,["g",ATJ(ACn),"bi",ATK(AOE),"op",ATL(Jb),"no",ATK(ADC),"bU",ATK(AKO),"wX",ATL(XG),"fJ",ATJ(AAf),"wE",ATK(V0)],SX,0,Cp,[],0,3,0,0,["kl",ATK(ALR),"kv",ATJ(AFG),"gs",ATK(Zu),"j_",ATJ(AE4)],R$,0,D9,[],0,0,0,0,["DT",function(b,c,d,e,f,g){AOF(this,b,c,d,e,f,g);},"of",ATK(ABf),"lT",ATL(ADw),"ep",ATJ(YG)],Tk,0,C,[G0],0,3,0,0,["Do",ATK(Vj),"xY",ATJ(ALJ),"wv",ATJ(AOT),"zF",ATJ(WR),"gP",
ATJ(AGg),"j2",ATJ(UB),"y_",ATN(AAL),"q$",ATL(UJ),"l2",ATL(Yk),"yN",ATL(Wd),"n4",ATL(ANE),"wU",ATM(AES),"vq",ATN(ABb)],QV,0,C,[],4,3,0,0,0,Ke,0,O,[],0,0,0,0,["g",ATJ(AFe),"H",ATJ(ANk)],OD,0,E_,[CK,Bx],0,3,0,0,["pp",ATK(ABR),"g",ATJ(Zy),"bi",ATK(JM),"ky",ATL(SE),"K",ATK(AMr),"Cf",ATK(Pr),"Cm",ATM(HD),"EH",ATJ(H9),"bn",ATL(AGC),"zT",ATL(AL2),"pG",ATM(AIz),"vg",ATK(ABq),"jk",ATJ(AI_),"gg",ATK(AF0),"Co",ATK(Qb)],RY,0,C,[],0,3,0,0,["kn",ATM(AO1),"eb",ATK(AAs)],Pl,0,Ba,[],0,0,0,0,["bi",ATK(ACa),"c",ATM(AHn),"P",ATK(AAU)],F8,
0,C,[],0,3,0,Cb,["Dq",ATL(Mh),"w$",ATJ(AGq),"m8",ATJ(AMo),"zp",ATJ(AEl),"y5",ATJ(AB1),"qI",ATJ(AMA),"k",ATJ(AAu)],Jh,0,Ba,[],4,0,0,0,["bi",ATK(Rs),"c",ATM(AID),"P",ATK(X1)],Hg,0,C,[],32,0,0,ATr,0,ED,0,C,[],0,0,0,0,["dw",ATL(AMa),"bF",ATJ(AEr),"kw",ATK(Xw),"vD",ATK(WY),"ns",ATJ(Y4),"ia",ATJ(AIv),"lE",ATJ(WO),"u",ATJ(AJy),"fE",ATJ(Yb),"ci",ATJ(VC),"vY",ATJ(AAt),"d",ATJ(ABh),"bJ",ATJ(ACN),"fq",ATJ(ANA),"sJ",ATJ(Wq),"tN",ATJ(AJu),"c2",ATJ(Wo)],MJ,0,O,[],0,0,0,0,["g",ATJ(AND),"H",ATJ(AM5)],OE,0,FI,[],0,0,0,0,["g",
ATJ(AMM),"H",ATJ(V2)],Md,0,B5,[],1,3,0,0,0,L1,0,BQ,[],0,0,0,0,["AO",ATK(AMR),"cU",ATL(AL5)],Rv,0,C,[IV],0,0,0,0,["Du",ATL(ACQ),"ws",ATJ(AE6),"vk",ATJ(ALo),"D6",ATJ(ADh),"AY",ATJ(Uh)],ML,0,Ds,[],0,0,0,0,["eg",function(b,c,d,e,f,g){U_(this,b,c,d,e,f,g);},"of",ATK(AG0),"lT",ATL(Yp)],Qa,0,C,[Iw],0,3,0,0,["Da",ATK(U4),"ga",ATJ(AH7),"oN",ATJ(AAv),"T",ATJ(AIf),"F",ATJ(Wh),"tv",ATJ(VH),"wB",ATJ(AJd),"mk",ATK(AIA)],Cv,0,Bk,[],12,3,0,Fd,0]);
function $rt_array(cls,data){this.bg=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["Can\'t enter monitor from another thread synchronously","<java_object>@","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","String is null or empty","Illegal radix: ","main","Android","Desktop","HeadlessDesktop","Applet","WebGL","iOS","\tat ","Caused by: ","loadFactor must be > 0 and < 1: ","BIG_ENDIAN","LITTLE_ENDIAN","Pixmap",
"Custom","IDLE","QUEUE_ASSETS_LOADED","INIT_SOUND","APP_CREATE","APP_READY","mousedown","mouseup","mousemove","wheel","touchstart","touchmove","touchcancel","touchend","keydown","keypress","keyup","CSS1Compat","null","Index out of bounds","New position "," is outside of range [0;","]","New limit ","","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable",
"javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya",
"Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols",
"CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement",
"Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates",
"HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf",
"FILL","STROKE","Cubocy","blocks created","data/tile.png","data/bob.png","Couldn\'t load image \'","\', file does not exist","rgba(",",",")","Already prepared","Call prepare() before calling getPixmap()","This TextureData implementation does not upload data itself","u_sampler","a_position","a_normal","a_color","a_texCoord","u_projModelView","attribute vec4 a_position;\n","attribute vec3 a_normal;\n","attribute vec4 a_color;\n","attribute vec2 a_texCoord",";\n","uniform mat4 u_projModelView;\n","varying vec4 v_col;\n",
"varying vec2 v_tex","void main() {\n   gl_Position = u_projModelView * a_position;\n","   v_col = a_color;\n   v_col.a *= 255.0 / 254.0;\n","   v_tex"," = ","   gl_PointSize = 1.0;\n}\n","#ifdef GL_ES\nprecision mediump float;\n#endif\n","uniform sampler2D u_sampler","void main() {\n   gl_FragColor = ","vec4(1, 1, 1, 1)","v_col"," * "," texture2D(u_sampler",",  v_tex",") *",";\n}","Error compiling shader: ","0","canvas","Replacement preconditions do not hold","Action must be non-null","GL_EXT_texture_filter_anisotropic",
"New data must have the same managed status as the old data","IGNORE","REPLACE","REPORT","Index ","copy","destination-atop","destination-in","destination-out","destination-over","lighter","source-atop","source-in","source-out","source-over","xor","Image","i","Audio","a","Text","t","Binary","b","Directory","vertex shader must not be null","fragment shader must not be null","Fragment shader:\n","Vertex shader\n","An attempted fetch uniform from uncompiled shader \n","No uniform with name \'","\' in shader","Classpath",
"Internal","External","Absolute","Local","data/gameover.png","dispose intro","No buffer allocated!","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","GL_ARB_framebuffer_object","GL_EXT_framebuffer_object","texture width and height must be square when using mipmapping.","The last short in src ","The last float in src ","index can\'t be >= size: "," >= ","MirroredRepeat","ClampToEdge","Repeat","Can\'t have more than 8191 sprites per batch: ","a_texCoord0","end must be called before beginCache",
"endCache must be called before begin.","beginCache must be called before endCache.","If a cache is not the last created, it cannot be redefined with more entries than when it was first created: "," ("," max)","beginCache must be called before add.","end must be called before begin.","endCache must be called before begin","u_projectionViewMatrix","u_texture","u_proj","u_trans","u_projTrans","begin must be called before end.","SpriteCache.begin must be called before draw.","Can\'t set the matrix within begin/end.",
"attribute vec4 a_position;\nattribute vec4 a_color;\nattribute vec2 a_texCoord0;\nuniform mat4 u_projectionViewMatrix;\nvarying vec4 v_color;\nvarying vec2 v_texCoords;\n\nvoid main()\n{\n   v_color = a_color;\n   v_color.a = v_color.a * (255.0/254.0);\n   v_texCoords = a_texCoord0;\n   gl_Position =  u_projectionViewMatrix * a_position;\n}\n","#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec4 v_color;\nvarying vec2 v_texCoords;\nuniform sampler2D u_texture;\nvoid main()\n{\n  gl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n}",
"Nearest","Linear","MipMap","MipMapNearestNearest","MipMapLinearNearest","MipMapNearestLinear","MipMapLinearLinear","UTF-8","data/title.png","dispose main menu","ErrorLoading: ","\n",":","Invalid assets description file.","FPSLogger","fps: ",", ","VertexArray","VertexBufferObject","VertexBufferObjectSubData","VertexBufferObjectWithVAO","key cannot be null.","Patter is null","\\Q","\\E","\\\\E\\Q","java.runtime.name","os.name","Windows","OS X","no OS","Linux",".html","index.html","index-debug.html","assets/",
"assets.txt","scripts/soundmanager2-jsmin.js","attribute vec4 a_position;\nattribute vec4 a_color;\nattribute vec2 a_texCoord0;\nuniform mat4 u_projTrans;\nvarying vec4 v_color;\nvarying vec2 v_texCoords;\n\nvoid main()\n{\n   v_color = a_color;\n   v_color.a = v_color.a * (255.0/254.0);\n   v_texCoords = a_texCoord0;\n   gl_Position =  u_projTrans * a_position;\n}\n","#ifdef GL_ES\n#define LOWP lowp\nprecision mediump float;\n#else\n#define LOWP \n#endif\nvarying LOWP vec4 v_color;\nvarying vec2 v_texCoords;\nuniform sampler2D u_texture;\nvoid main()\n{\n  gl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n}",
"SpriteBatch.end must be called before begin.","SpriteBatch.begin must be called before end.","SpriteBatch.begin must be called before draw.","None","SourceOver","texture cannot be null.","Intensity","LuminanceAlpha","RGB565","RGBA4444","RGB888","RGBA8888","FileType \'","\' Not supported in Dragome backend","\\","/","data/controls.png","attributes must be >= 1","{","}","Mesh attempting to access memory outside of the index buffer (count: ",", offset: ",", max: ","capacity must be >= 0: ","The required capacity is too large: ",
"error","Capacity is negative: ","The last byte in src ","dispose game screen","IndexBufferObject cannot be used after it has been disposed.","Either src or dest is null","java.version","1.8","TeaVM","file.separator","path.separator","line.separator","java.io.tmpdir","java.vm.version","user.home","/tmp","Can only cope with FloatBuffer and ShortBuffer at the moment","glGetFloat not supported by WebGL backend","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/","==","=","data must be a ByteBuffer or FloatBuffer",
"Script loaded: ","data:",";base64,","Asset loaded: ","data/levels.png","data/intro.png","Unsupported asset type ","Loading asset : ","Loading script : ","Is","In","NORMAL","REVERSED","LOOP","LOOP_REVERSED","LOOP_PINGPONG","LOOP_RANDOM"]);
Bv.prototype.toString=function(){return $rt_ustr(this);};
Bv.prototype.valueOf=Bv.prototype.toString;C.prototype.toString=function(){return $rt_ustr(W8(this));};
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
~a);};}var J4=Long_add;var ACT=Long_sub;var C1=Long_mul;var AYu=Long_div;var AYv=Long_rem;var AYw=Long_or;var AO$=Long_and;var AYx=Long_xor;var AYy=Long_shl;var AQU=Long_shr;var Cd=Long_shru;var AYz=Long_compare;var DA=Long_eq;var Z9=Long_ne;var AQg=Long_lt;var AYA=Long_le;var AQc=Long_gt;var AYB=Long_ge;var AYC=Long_not;var ARv=Long_neg;
function TeaVMThread(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}TeaVMThread.prototype.push=function(){for(var i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};TeaVMThread.prototype.s=TeaVMThread.prototype.push;TeaVMThread.prototype.pop=function(){return this.stack.pop();};TeaVMThread.prototype.l=TeaVMThread.prototype.pop;TeaVMThread.prototype.isResuming=function(){return this.status===2;};TeaVMThread.prototype.isSuspending
=function(){return this.status===1;};TeaVMThread.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};TeaVMThread.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if($rt_currentNativeThread!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:function(result){if(result instanceof Error){throw result;}};this.run();};TeaVMThread.prototype.resume=function(){if($rt_currentNativeThread
!==null){throw new Error("Another thread is running");}this.status=2;this.run();};TeaVMThread.prototype.run=function(){$rt_currentNativeThread=this;var result;try {result=this.runner();}catch(e){result=e;}finally {$rt_currentNativeThread=null;}if(this.suspendCallback!==null){var self=this;var callback=this.suspendCallback;this.suspendCallback=null;callback(function(){self.resume();});}else if(this.status===0){this.completeCallback(result);}};function $rt_suspending(){var thread=$rt_nativeThread();return thread
!=null&&thread.isSuspending();}function $rt_resuming(){var thread=$rt_nativeThread();return thread!=null&&thread.isResuming();}function $rt_suspend(callback){var nativeThread=$rt_nativeThread();if(nativeThread===null){throw new Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);}function $rt_startThread(runner,callback){(new TeaVMThread(runner)).start(callback);}var $rt_currentNativeThread=null;function $rt_nativeThread(){return $rt_currentNativeThread;}function $rt_invalidPointer()
{throw new Error("Invalid recorded state");}main=$rt_mainStarter(ASB);
main.javaException=$rt_javaException;
(function(){var c;c=NX.prototype;c.handleEvent=c.hd;c=Nk.prototype;c.getLength=c.Ee;c.get=c.Er;c=PI.prototype;c.onAnimationFrame=c.CW;c=Py.prototype;c.handleEvent=c.hd;c=KE.prototype;c.dispatchEvent=c.B8;c.addEventListener=c.Dz;c.removeEventListener=c.Eu;c.getLength=c.Cb;c.get=c.AF;c.addEventListener=c.Bn;c.removeEventListener=c.CV;c=KH.prototype;c.handleEvent=c.hd;c=KJ.prototype;c.handleEvent=c.hd;c=KL.prototype;c.handleEvent=c.hd;c=KI.prototype;c.handleEvent=c.hd;c=Rv.prototype;c.onready=c.D6;c.ontimeout=
c.AY;})();
})();
