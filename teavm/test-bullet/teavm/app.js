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
{if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.gn=f;}
function $rt_cls(cls){return Lg(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Mf(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.S.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return BfP;}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(IJ());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return Dq();}
function $rt_setThread(t){return H6(t);}
function $rt_createException(message){return Qc(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var G=$rt_throw;var B8=$rt_compare;var BfQ=$rt_nullCheck;var F=$rt_cls;var Y=$rt_createArray;var AQY=$rt_isInstance;var A6_=$rt_nativeThread;var Bdx=$rt_suspending;var BdC=$rt_resuming;var BcC=$rt_invalidPointer;var B=$rt_s;var N=$rt_eraseClinit;var Cf=$rt_imul;var R=$rt_wrapException;var BfR=$rt_checkBounds;var BfS=$rt_checkUpperBound;var BfT=$rt_checkLowerBound;var BfU=$rt_wrapFunction0;var BfV=$rt_wrapFunction1;var BfW=$rt_wrapFunction2;var BfX=$rt_wrapFunction3;var BfY=$rt_wrapFunction4;var D=$rt_classWithoutFields;var H
=$rt_createArrayFromData;var I5=$rt_createCharArrayFromData;var BfZ=$rt_createByteArrayFromData;var Bf0=$rt_createShortArrayFromData;var MB=$rt_createIntArrayFromData;var Bf1=$rt_createBooleanArrayFromData;var Bcb=$rt_createFloatArrayFromData;var Bf2=$rt_createDoubleArrayFromData;var AXg=$rt_createLongArrayFromData;var OA=$rt_createBooleanArray;var Ci=$rt_createByteArray;var MV=$rt_createShortArray;var BW=$rt_createCharArray;var Bc=$rt_createIntArray;var Bfm=$rt_createLongArray;var B_=$rt_createFloatArray;var Bf3
=$rt_createDoubleArray;var B8=$rt_compare;var Bf4=$rt_castToClass;var Bf5=$rt_castToInterface;var Ru=Long_toNumber;var O=Long_fromInt;var Bf6=Long_fromNumber;var Cc=Long_create;var Ba=Long_ZERO;var Bf7=Long_hi;var Cp=Long_lo;
function C(){this.bx=null;this.$id$=0;}
function Qm(){var a=new C();J(a);return a;}
function Eq(b){var c;if(b.bx===null)Nn(b);if(b.bx.cA===null)b.bx.cA=Dq();else if(b.bx.cA!==Dq())G(DP(B(0)));c=b.bx;c.cS=c.cS+1|0;}
function Cg(b){var c,d;if(!EM(b)&&b.bx.cA===Dq()){c=b.bx;d=c.cS-1|0;c.cS=d;if(!d)b.bx.cA=null;EM(b);return;}G(AP3());}
function Bbi(b){AJo(b,1);}
function AJo(b,c){var d,$p,$z;$p=0;if(BdC()){var $T=A6_();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.bx===null)Nn(b);if(b.bx.cA===null)b.bx.cA=Dq();if(b.bx.cA===Dq()){d=b.bx;d.cS=d.cS+c|0;return;}$p=1;case 1:AK8(b,c);if(Bdx()){break _;}return;default:BcC();}}A6_().s(b,c,d,$p);}
function Nn(b){b.bx=BaD();}
function AK8(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.nM=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.Oz=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaQ(callback);return thread.suspend(function(){try{BdW(b,c,callback);}catch($e){callback.Oz($rt_exception($e));}});}
function BdW(b,c,d){var e,f,g;e=Dq();if(b.bx===null){Nn(b);H6(e);f=b.bx;f.cS=f.cS+c|0;d.nM(null);return;}if(b.bx.cA===null){b.bx.cA=e;H6(e);f=b.bx;f.cS=f.cS+c|0;d.nM(null);return;}g=b.bx;if(g.d0===null)g.d0=ADb();A3o(g.d0,Bcd(e,b,c,d));}
function Beu(b){ADE(b,1);}
function ADE(b,c){var d;if(!EM(b)&&b.bx.cA===Dq()){d=b.bx;d.cS=d.cS-c|0;if(d.cS>0)return;d.cA=null;if(d.d0!==null&&!H_(d.d0))AMv(A_9(b));else EM(b);return;}G(AP3());}
function AQn(b){var c,d,e;if(!EM(b)&&b.bx.cA===null){c=b.bx;if(c.d0!==null&&!H_(c.d0)){d=c.d0;e=A41(d);c.d0=null;e.fc();}return;}}
function EM(a){var b,c;b=a.bx;if(b===null)return 1;a:{b:{if(b.cA===null){if(b.d0!==null){c=b.d0;if(!H_(c))break b;}if(b.yv===null)break a;c=b.yv;if(H_(c))break a;}}return 0;}ACo(a);return 1;}
function ACo(a){a.bx=null;}
function J(a){}
function Cj(a){return Lg(a.constructor);}
function MM(a){return Is(a);}
function AMF(a,b){return a!==b?0:1;}
function PS(a){return (((I()).a(B(1))).a(Oz(Is(a)))).b();}
function Is(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function ALD(a){var b,c,d;if(!AQY(a,DK)){b=a;if(b.constructor.$meta.item===null)G(Ba7());}c=ADq(a);b=c;d=$rt_nextId();b.$id$=d;return c;}
function A19(b){AQn(b);}
function AM8(b,c,d,e){var f;H6(b);c.bx.cA=b;f=c.bx;f.cS=f.cS+d|0;e.nM(null);}
function T(){var a=this;C.call(a);a.r9=null;a.q$=null;}
function Bo(a){J(a);}
function A6z(a,b){if(!b&&a.r9===null)a.r9=a.T();else if(b&&a.q$===null)a.q$=(a.T()).f8(1);if(b)return a.q$;return a.r9;}
var RN=D(T);
function A_H(){var a=new RN();A65(a);return a;}
function A65(a){Bo(a);}
function AYi(a){return ((CR()).cE(32)).cE(9);}
var Qo=D(T);
function A__(){var a=new Qo();A9v(a);return a;}
function A9v(a){Bo(a);}
function AMK(a){return ((CR()).bF(0,31)).cE(127);}
var I1=D(0);
function VZ(){var a=this;C.call(a);a.p$=null;a.tX=null;a.ze=0;a.zU=0;}
function Bes(a,b){var c=new VZ();AQ0(c,a,b);return c;}
function AQ0(a,b,c){J(a);a.p$=b;a.tX=c;}
function AHL(a){return Ca(a.p$);}
function A9C(a,b){return Bb(a.p$)<b?0:1;}
function AI8(a){return Ca(a.tX);}
function A7l(a,b){return Bb(a.tX)<b?0:1;}
function AZX(a,b){a.ze=b;}
function A_d(a,b){a.zU=b;}
var E2=D(0);
function HJ(){var a=this;C.call(a);a.ig=Ba;a.sI=Ba;a.dB=0;}
function P5(a){J(a);a.dB=(-1);}
function A0W(a){a.ig=Ba;a.dB=(-1);}
function AWV(a){return a.dB==(-1)?0:1;}
var Wk=D();
function A_c(b){var c,d;c=b.LO();d=c.data;if(d.length<=0)return null;return PG(d[0]);}
function ANB(b,c){var d,e,f,$$je;if(c!==null&&c.data.length){a:{b:{try{d=b.Hk(c);e=PG(d);}catch($$e){$$je=R($$e);if($$je instanceof Hf){f=$$je;break a;}else if($$je instanceof I0){f=$$je;break b;}else{throw $$e;}}return e;}G(Ex((((I()).a(B(2))).a(b.u())).b(),f));}G(Ex(((((I()).a(B(3))).a(b.u())).a(B(4))).b(),f));}return A_c(b);}
function AYZ(b,c){var d,e,f,$$je;a:{try{d=b.Gx(c);e=PG(d);}catch($$e){$$je=R($$e);if($$je instanceof Hf){f=$$je;break a;}else if($$je instanceof I0){f=$$je;G(Ex((((I()).a(B(2))).a(b.u())).b(),f));}else{throw $$e;}}return e;}G(Ex((((I()).a(B(5))).a(b.u())).b(),f));}
var B2=D(0);
var D1=D();
function ACj(a){J(a);}
var B9=D(0);
function D2(){D1.call(this);this.i_=0;}
var Bf8=null;var Bf9=null;function C0(){C0=N(D2);A7t();}
function ABG(a){var b=new D2();Hr(b,a);return b;}
function Hr(a,b){C0();ACj(a);a.i_=b;}
function Xs(b,c){C0();if(!(c>=2&&c<=36))c=10;return ((Bfv(20)).AP(b,c)).b();}
function ABK(b){C0();return b>>>4^b<<28^b<<8^b>>>24;}
function Oz(b){C0();return ADt(b,4);}
function NC(b){C0();return Xs(b,10);}
function Dr(b,c){var d,e,f,g,h;C0();if(c>=2&&c<=36){if(b!==null&&!b.bN()){a:{d=0;e=0;switch(b.f(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==b.i())G(Ec());while(e<b.i()){g=e+1|0;h=Nl(b.f(e));if(h<0)G(DF((((I()).a(B(6))).a(b)).b()));if(h>=c)G(DF((((((I()).a(B(7))).j(c)).a(B(8))).a(b)).b()));f=Cf(c,f)+h|0;if(f<0){if(g==b.i()&&f==(-2147483648)&&d)return (-2147483648);G(DF((((I()).a(B(9))).a(b)).b()));}e=g;}if(d)f= -f|0;return f;}G(DF(B(10)));}G(DF((((I()).a(B(11))).j(c)).b()));}
function BS(b){C0();return Dr(b,10);}
function Bn(b){C0();if(b>=(-128)&&b<=127){V3();return Bf9.data[b+128|0];}return ABG(b);}
function V3(){var b;C0();a:{if(Bf9===null){Bf9=Y(D2,256);b=0;while(true){if(b>=Bf9.data.length)break a;Bf9.data[b]=ABG(b-128|0);b=b+1|0;}}}}
function AVN(a){return a.i_;}
function ASm(a){return NC(a.i_);}
function AUx(a){return ABK(a.i_);}
function A9$(a,b){if(a===b)return 1;return b instanceof D2&&b.i_==a.i_?1:0;}
function Mu(b){var c,d,e;C0();if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;e=d>>>8;if(!e)e=d;else c=c|8;d=e>>>4;if(!d)d=e;else c=c|4;e=d>>>2;if(!e)e=d;else c=c|2;if(e>>>1)c=c|1;return (32-c|0)-1|0;}
function E3(b){var c,d,e;C0();if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;e=d<<8;if(!e)e=d;else c=c|8;d=e<<4;if(!d)d=e;else c=c|4;e=d<<2;if(!e)e=d;else c=c|2;if(e<<1)c=c|1;return (32-c|0)-1|0;}
function Yc(b,c){var d;C0();d=c&31;return b<<d|b>>>(32-d|0);}
function A7t(){Bf8=F($rt_intcls());}
var Ez=D();
var Bf$=null;var Bf_=null;var Bga=null;var Bgb=null;var Bgc=null;function A_V(){A_V=N(Ez);A1C();}
function A1C(){Bf$=MB([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);Bf_=AXg([O(1),O(10),O(100),O(1000),O(10000),O(100000),O(1000000),O(10000000),O(100000000),O(1000000000),Cc(1410065408, 2),Cc(1215752192, 23),Cc(3567587328, 232),Cc(1316134912, 2328),Cc(276447232, 23283),Cc(2764472320, 232830),Cc(1874919424, 2328306),Cc(1569325056, 23283064),Cc(2808348672, 232830643)]);Bga=AXg([O(1),O(10),O(100),O(10000),O(100000000),Cc(1874919424, 2328306)]);Bgb=Bef();Bgc=Bdz();}
function Bt(){var a=this;C.call(a);a.k=null;a.cD=0;a.tv=null;a.Ea=0;}
var Bgd=0;function WW(){WW=N(Bt);ATt();}
function Co(a){var b,c;WW();J(a);b=new D2;c=Bgd;Bgd=c+1|0;Hr(b,c);a.tv=b.b();}
function I_(a,b){var c,d;WW();J(a);c=new D2;d=Bgd;Bgd=d+1|0;Hr(c,d);a.tv=c.b();a.k=b;}
function F3(a,b,c,d){var e;e=d.J();while(true){if(b>e)return (-1);if(a.e(b,c,d)>=0)break;b=b+1|0;}return b;}
function Gb(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.e(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AXT(a,b){a.Ea=b;}
function AWZ(a){return a.Ea;}
function AM4(a){return ((((((I()).a(B(12))).a(a.tv)).a(B(13))).a(a.u())).a(B(14))).b();}
function APE(a){return a.FT();}
function AQm(a){return a.k;}
function LJ(a,b){a.k=b;}
function A8x(a,b){return 1;}
function A9Q(a){return null;}
function OM(a){var b;a.cD=1;if(a.k!==null){if(!a.k.cD){b=a.k.h5();if(b!==null){a.k.cD=1;a.k=b;}a.k.ed();}else if(a.k instanceof Fz&&a.k.dm.th)a.k=a.k.k;}}
function ATt(){Bgd=1;}
function BC(){var a=this;Bt.call(a);a.bQ=null;a.dm=null;a.bm=0;}
function Bge(){var a=new BC();CP(a);return a;}
function BaM(a,b){var c=new BC();Sv(c,a,b);return c;}
function CP(a){Co(a);}
function Sv(a,b,c){Co(a);a.bQ=b;a.dm=c;a.bm=c.j$();}
function AJa(a,b,c,d){var e,f,g,h,i;if(a.bQ===null)return (-1);e=d.jn(a.bm);d.ey(a.bm,b);f=a.bQ.de();g=0;while(true){if(g>=f){d.ey(a.bm,e);return (-1);}h=a.bQ.l(g);i=h.e(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function AOt(a,b){a.dm.Q(b);}
function AKY(a){return B(15);}
function A2H(a,b){var c;a:{if(a.bQ!==null){c=a.bQ.fr();while(true){if(!c.bC())break a;if(!(c.bz()).ca(b))continue;else return 1;}}}return 0;}
function APj(a,b){var c,d;a:{if(b.nB(a.bm)>=0){c=b.jn(a.bm);d=a.bm;if(c==b.nB(d)){c=0;break a;}}c=1;}return c;}
function AF7(a){var b,c,d,e;a.cD=1;if(a.dm!==null&&!a.dm.cD)a.dm.ed();a:{if(a.bQ!==null){b=a.bQ.de();c=0;while(true){if(c>=b)break a;d=a.bQ.l(c);e=d.h5();if(e===null)e=d;else{d.cD=1;a.bQ.mz(c);a.bQ.K0(c,e);}if(!e.cD)e.ed();c=c+1|0;}}}if(a.k!==null)OM(a);}
function Fz(){BC.call(this);this.cW=null;}
function Ber(a,b){var c=new Fz();Qa(c,a,b);return c;}
function Qa(a,b,c){CP(a);a.cW=b;a.dm=c;a.bm=c.j$();}
function ADF(a,b,c,d){var e,f;e=d.jn(a.bm);d.ey(a.bm,b);f=a.cW.e(b,c,d);if(f>=0)return f;d.ey(a.bm,e);return (-1);}
function AMk(a,b,c,d){var e;e=a.cW.cC(b,c,d);if(e>=0)d.ey(a.bm,e);return e;}
function A6Y(a,b,c,d,e){var f;f=a.cW.cG(b,c,d,e);if(f>=0)e.ey(a.bm,f);return f;}
function A2y(a,b){return a.cW.ca(b);}
function A5f(a){var b;b=Bbg(a);a.k=b;return b;}
function AS0(a){var b;a.cD=1;if(a.dm!==null&&!a.dm.cD)a.dm.ed();if(a.cW!==null&&!a.cW.cD){b=a.cW.h5();if(b!==null){a.cW.cD=1;a.cW=b;}a.cW.ed();}}
function HR(){var a=this;C.call(a);a.LJ=null;a.re=null;a.yx=0.0;a.An=0.0;a.sb=null;a.rq=null;a.hM=0;}
function ACf(a,b,c,d,e){J(a);Dg();a.sb=Bgf;a.rq=Bgf;Re(a,e);a.LJ=b;a.re=e.gn();a.yx=c;a.An=d;}
function Yr(a,b,c,d){var e;e=Ci(1);e.data[0]=63;ACf(a,b,c,d,e);}
function Re(a,b){var c;if(b!==null){c=b.data.length;if(c&&c>=a.An)return;}G(W(B(16)));}
function K2(a,b){if(b!==null){a.sb=b;a.vd(b);return a;}G(W(B(17)));}
function ATb(a,b){}
function LQ(a,b){if(b!==null){a.rq=b;a.qP(b);return a;}G(W(B(17)));}
function A1k(a,b){}
function ID(a,b,c,d){var e,f,g,h,$$je;a:{if(a.hM!=3){if(d)break a;if(a.hM!=2)break a;}G(GX());}a.hM=!d?1:2;while(true){try{e=a.OF(b,c);}catch($$e){$$je=R($$e);if($$je instanceof Bm){f=$$je;G(AYo(f));}else{throw $$e;}}if(e.jH()){if(!d)return e;g=Bb(b);if(g<=0)return e;e=BU(g);}else if(e.h2())break;h=!e.t0()?a.sb:a.rq;b:{Dg();if(h!==Bgg){if(h===Bgh)break b;else return e;}if(Bb(c)<a.re.data.length)return Bgi;Ye(c,a.re);}b.oM(B7(b)+e.i()|0);}return e;}
function XO(a,b){var c,d,e;if(!Bb(b))return RG(0);OS(a);c=RG(Bb(b)*a.yx|0);while(true){d=ID(a,b,c,0);Bj();if(d===Bgj)break;if(d===Bgi){c=JY(a,c);continue;}if(!d.mw())continue;d.nP();}e=ID(a,b,c,1);if(e.mw())e.nP();while(true){e=JN(a,c);if(e.jH())break;if(!e.h2())continue;c=JY(a,c);}Jv(c);return c;}
function JY(a,b){var c,d,e;c=HH(b);d=c.data;d=Of(c,d.length*2|0);e=Ht(d);e.f3(B7(b));return e;}
function JN(a,b){var c;if(a.hM!=2&&a.hM!=4)G(GX());c=a.Lj(b);Bj();if(c===Bgj)a.hM=3;return c;}
function A3i(a,b){Bj();return Bgj;}
function OS(a){a.hM=0;a.uR();return a;}
function AOh(a){}
function Dm(){var a=this;HR.call(a);a.B$=null;a.v_=null;}
function GH(a,b,c,d){Yr(a,b,c,d);a.B$=BW(512);a.v_=Ci(512);}
function AET(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.B$;e=0;f=0;g=a.v_;a:{while(true){if((e+32|0)>f&&Ca(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Bq(Bb(b)+j|0,i.length);b.rh(d,j,f-j|0);e=0;}if(!Ca(c)){if(!Ca(b)&&e>=f){Bj();k=Bgj;}else{Bj();k=Bgi;}break a;}i=g.data;l=0;m=Bq(Bb(c),i.length);n=Bes(b,c);k=a.mU(d,e,f,g,l,m,n);e=n.ze;j=n.zU;if(k===null){if(!Ca(b)&&e>=f){Bj();k=Bgj;}else if(!Ca(c)&&e>=f){Bj();k=Bgi;}}c.wT(g,0,j);if(k!==null)break;}}b.oM(B7(b)-(f-e|0)|0);return k;}
function Xp(){var a=this;Dm.call(a);a.tL=0;a.rr=0;}
function BcE(a,b,c){var d=new Xp();A5w(d,a,b,c);return d;}
function A5w(a,b,c,d){GH(a,b,2.0,4.0);a.tL=c;a.rr=d;}
function A6D(a,b,c,d,e,f,g,h){var i,j,k;if(a.tL){if((f+2|0)>g){if(h.K$())i=null;else{Bj();i=Bgi;}return i;}a.tL=0;if(!a.rr){j=e.data;k=f+1|0;j[f]=(-2);f=k+1|0;j[k]=(-1);}else{j=e.data;k=f+1|0;j[f]=(-1);f=k+1|0;j[k]=(-2);}}return !a.rr?Pt(a,b,c,d,e,f,g,h):V2(a,b,c,d,e,f,g,h);}
function V2(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c];if(!BY(l)){if(BH(l)){c=k+(-1)|0;i=BU(1);break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.ef(2))break a;Bj();i=Bgi;break a;}j=e.data;m=f+1|0;j[f]=(l&255)<<24>>24;f=m+1|0;j[m]=l>>8<<24>>24;c=k;}else{if(k==d){c=k+(-1)|0;if(h.dO(2))break a;Bj();i=Bgj;break a;}c=k+1|0;n=j[k];if(!BH(n)){c=c+(-2)|0;i=BU(1);break a;}if((f+4|0)>g){c=c+(-2)|0;if(h.ef(4))break a;Bj();i=Bgi;break a;}j=e.data;m=f+1|0;j[f]=(l&255)<<24>>24;o=
m+1|0;j[m]=l>>8<<24>>24;m=o+1|0;j[o]=(n&255)<<24>>24;f=m+1|0;j[m]=n>>8<<24>>24;}}}h.ek(c);h.dR(f);return i;}
function Pt(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c];if(!BY(l)){if(BH(l)){c=k+(-1)|0;i=BU(1);break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.ef(2))break a;Bj();i=Bgi;break a;}j=e.data;m=f+1|0;j[f]=l>>8<<24>>24;f=m+1|0;j[m]=(l&255)<<24>>24;c=k;}else{if(k==d){c=k+(-1)|0;if(h.dO(2))break a;Bj();i=Bgj;break a;}c=k+1|0;n=j[k];if(!BH(n)){c=c+(-2)|0;i=BU(1);break a;}if((f+4|0)>g){c=c+(-2)|0;if(h.ef(4))break a;Bj();i=Bgi;break a;}j=e.data;m=f+1|0;j[f]=l>>8<<24>>24;o=m+1
|0;j[m]=(l&255)<<24>>24;m=o+1|0;j[o]=n>>8<<24>>24;f=m+1|0;j[m]=(n&255)<<24>>24;}}}h.ek(c);h.dR(f);return i;}
var Cr=D(0);
function BR(){var a=this;C.call(a);a.bY=0;a.mS=0;a.La=0;a.KO=null;a.zM=0;}
function B$(a){J(a);}
function AV6(a,b,c){a.mS=c;a.bY=b;}
function AJ3(a,b){if(!a.mS)a.bY=b;}
function AC5(a,b){return b instanceof BR&&b.bY==a.bY?1:0;}
function A4P(a){return a.bY;}
function AWC(a){return a.bY;}
function AKF(a){if(a.zM>0){H2();if(Bgk&&Bgl)Bgm.qA(B(18),((((((I()).a(B(19))).a(a.b())).a(B(20))).j(a.zM)).a(B(21))).b());}if(a.mS){a.La=1;a.IO();a.bY=0;}}
function AVl(a){return (((((((I()).a(a.KO)).a(B(22))).j(a.bY)).a(B(23))).Jf(a.mS)).a(B(24))).b();}
var F9=D(BR);
var Bgn=null;function AHV(){AHV=N(F9);AEb();}
function BeR(a){var b=new F9();Xv(b,a);return b;}
function Bgo(){var a=new F9();If(a);return a;}
function Xv(a,b){AHV();B$(a);}
function If(a){AHV();B$(a);}
function ASg(a,b){U0(a.bY,b);}
function AEb(){Bgn=BeR(0);}
function U0(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btCollisionObject);jsObj.setRestitution(c);}
var Od=D(F9);
var Bgp=null;function ARs(){ARs=N(Od);ASY();}
function Bfu(a,b,c,d){var e=new Od();Sx(e,a,b,c,d);return e;}
function BaK(a){var b=new Od();ABY(b,a);return b;}
function Sx(a,b,c,d,e){var f,g,h,i;ARs();If(a);Fl();f=Bgq;Gq(e,f);g=c.dd();h=d.dd();i=f.dd();a.dZ(S2(b,g,h,i),1);}
function AJ9(a){ACG(a.bY);}
function ABY(a,b){ARs();If(a);}
function ASY(){Bgp=BaK(0);}
function S2(b,c,d,e){var motionStateJSObj=Bullet.wrapPointer(c,Bullet.btMotionState);var collisionShapeJSObj=Bullet.wrapPointer(d,Bullet.btCollisionShape);var localInertiaJSObj=Bullet.wrapPointer(e,Bullet.btVector3);var jsObj=new Bullet.btRigidBody(b,motionStateJSObj,collisionShapeJSObj,localInertiaJSObj);return Bullet.getPointer(jsObj);}
function ACG(b){var jsObj=Bullet.wrapPointer(b,Bullet.btRigidBody);Bullet.destroy(jsObj);}
var Dh=D(BR);
var Bgr=null;var Bgs=null;var Bgt=null;var Bgu=null;var Bgv=null;var Bgw=null;var Bgx=null;var Bgy=null;function H5(){H5=N(Dh);ASn();}
function FE(a){var b=new Dh();AAM(b,a);return b;}
function AAM(a,b){H5();B$(a);a.dZ(!b?0:RR(),b);}
function AQ$(a,b){Yi(a.bY,b.data);}
function ASS(a,b){ABg(a.bY,b.data);}
function X9(b,c){H5();c.Ob(b.c);}
function X6(b,c){H5();b.Kd(c.c);}
function SH(b,c){H5();Bgx.yA(c);X9(b,Bgx);}
function QI(b,c){H5();Bgx.yA(b);X6(Bgx,c);}
function ASn(){Bgr=FE(0);Bgs=FE(1);Bgt=FE(1);Bgu=FE(1);Bgv=FE(1);Bgw=FE(1);Bgx=FE(0);Bgy=BF();}
function RR(){var jsObj=new Bullet.btTransform();return Bullet.getPointer(jsObj);}
function Yi(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btTransform);jsObj.setFromOpenGLMatrix(c);}
function ABg(b,c){var worldTrans=Bullet.wrapPointer(b,Bullet.btTransform);var origin=worldTrans.getOrigin();var matrix3x3=worldTrans.getBasis();var row0=matrix3x3.getRow(0);var row1=matrix3x3.getRow(1);var row2=matrix3x3.getRow(2);c[0]=row0.x();c[1]=row1.x();c[2]=row2.x();c[3]=0;c[4]=row0.y();c[5]=row1.y();c[6]=row2.y();c[7]=0;c[8]=row0.z();c[9]=row1.z();c[10]=row2.z();c[11]=0;c[12]=origin.x();c[13]=origin.y();c[14]=origin.z();c[15]=1.0;}
function Ey(){var a=this;C.call(a);a.Qb=Ba;a.NN=Ba;a.LT=null;a.Hg=null;a.Lw=0;a.Qx=null;}
var Bgz=null;var BgA=null;var BgB=0;var BgC=0;var BgD=null;function LW(){LW=N(Ey);AEV();}
function Bd2(a){var b=new Ey();Wm(b,a);return b;}
function BgE(a,b){var c=new Ey();NQ(c,a,b);return c;}
function Wm(a,b){LW();NQ(a,null,b);}
function NQ(a,b,c){var d;LW();J(a);a.LT=Qm();a.Lw=1;a.Hg=c;a.Qx=b;d=BgB;BgB=d+1|0;a.Qb=O(d);}
function H6(b){LW();if(BgA!==b)BgA=b;BgA.NN=D$();}
function Dq(){LW();return BgA;}
function AEV(){Bgz=Bd2(B(25));BgA=Bgz;BgB=1;BgC=1;BgD=Be9();}
var Ja=D(T);
function Bfn(){var a=new Ja();P9(a);return a;}
function P9(a){Bo(a);}
function P1(a){return ((CR()).bF(97,122)).bF(65,90);}
var Bw=D();
var BgF=null;var BgG=null;var BgH=null;var BgI=null;var BgJ=null;var BgK=null;var BgL=null;var BgM=null;var BgN=null;var BgO=null;var BgP=null;var BgQ=null;var BgR=null;var BgS=null;var BgT=null;var BgU=null;var BgV=null;var BgW=null;var BgX=null;var BgY=null;var BgZ=null;var Bg0=null;var Bg1=null;var Bg2=null;var Bg3=null;var Bg4=null;var Bg5=null;var Bg6=null;var Bg7=null;function Bbm(){Bbm=N(Bw);A2L();}
function A2L(){BgF=Bb8();BgG=Bdc();BgH=A_k();BgI=Bc6();BgJ=BfB();BgK=Be4();BgL=Baa();BgM=Bbn();BgN=Ba9();BgO=Bdu();BgP=BbT();BgQ=Bbo();BgR=Bar();BgS=Bee();BgT=Beh();BgU=Bej();BgV=BdD();BgW=A_1();BgX=Bb0();BgY=Bfi();BgZ=Bex();Bg0=Baw();Bg1=Ba3();Bg2=Ba0();Bg3=Bbj();Bg4=BdS();Bg5=BeT();Bg6=BfC();Bg7=A_W();}
var O8=D(Fz);
function Bbg(a){var b=new O8();APx(b,a);return b;}
function APx(a,b){Qa(a,b.cW,b.dm);}
function AIq(a,b,c,d){var e,f,g;e=0;f=d.J();a:{while(true){if(b>f){b=e;break a;}g=d.jn(a.bm);d.ey(a.bm,b);e=a.cW.e(b,c,d);if(e>=0)break;d.ey(a.bm,g);b=b+1|0;}}return b;}
function A$Z(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=e.jn(a.bm);e.ey(a.bm,c);f=a.cW.e(c,d,e);if(f>=0)break;e.ey(a.bm,g);c=c+(-1)|0;}}return c;}
function AGl(a){return null;}
function C_(){var a=this;C.call(a);a.sh=null;a.kH=null;a.nT=0;a.oq=0;a.wu=null;}
function Bg8(){var a=new C_();Q3(a);return a;}
function Bg9(a){var b=new C_();Ov(b,a);return b;}
function Bg$(a,b){var c=new C_();Ng(c,a,b);return c;}
function Bg_(a){var b=new C_();ABU(b,a);return b;}
function Q3(a){a.nT=1;a.oq=1;a.ob();}
function Ov(a,b){a.nT=1;a.oq=1;a.ob();a.sh=b;}
function Ng(a,b,c){a.nT=1;a.oq=1;a.ob();a.sh=b;a.kH=c;}
function ABU(a,b){a.nT=1;a.oq=1;a.ob();a.kH=b;}
function AZC(a){return a;}
function APT(a){return a.sh;}
function AI5(a){return a.mP();}
function A0V(a){a.yT(TC());}
function ATr(a,b){var c,d,e,f,g;b.pn((Cj(a)).u());c=a.Go();if(c!==null)b.pn((((I()).a(B(8))).a(c)).b());a:{b.Nl();if(a.wu!==null){d=a.wu.data;e=d.length;f=0;while(true){if(f>=e)break a;g=d[f];b.pn(B(26));b.KN(g);f=f+1|0;}}}if(a.kH!==null&&a.kH!==a){b.pn(B(27));a.kH.yT(b);}}
var B3=D(C_);
function Bha(){var a=new B3();E$(a);return a;}
function Bhb(a,b){var c=new B3();JV(c,a,b);return c;}
function Bhc(a){var b=new B3();Mi(b,a);return b;}
function E$(a){Q3(a);}
function JV(a,b,c){Ng(a,b,c);}
function Mi(a,b){Ov(a,b);}
var Bm=D(B3);
function Bhd(){var a=new Bm();Cx(a);return a;}
function Bhe(a,b){var c=new Bm();PX(c,a,b);return c;}
function Qc(a){var b=new Bm();EF(b,a);return b;}
function Cx(a){E$(a);}
function PX(a,b,c){JV(a,b,c);}
function EF(a,b){Mi(a,b);}
var Uv=D(Bm);
function Bcj(){var a=new Uv();ANC(a);return a;}
function ANC(a){Cx(a);}
var LK=D(0);
function ZH(){var a=this;C.call(a);a.jW=null;a.lf=0;a.N8=0;a.kz=0;}
function Bdj(a){var b=new ZH();ACY(b,a);return b;}
function ACY(a,b){J(a);a.N8=1;a.kz=1;a.jW=b;}
function A8z(a){return 0;}
function AVx(a){var b,c,d;b=a.jW.hs();c=b.Mi();d=$rt_str(c.href);return d;}
function AJx(a){return a.lf;}
function APg(a){a.lf=a.lf-1|0;}
function AWk(a){a.lf=a.lf+1|0;}
function ARp(a,b,c,d,e){a:{BdK();switch(Bhf.data[BD(c)]){case 1:break;case 2:a.Ls(b,d,e);break a;case 3:a.tp(b,e);break a;case 4:a.GB(b,e);break a;case 5:e.dn(b,null);break a;default:G(U((((I()).a(B(28))).dD(c)).b()));}a.AX(b,e);}}
function AM6(a,b,c){var d,e;if(a.kz)(Eh()).gg((((I()).a(B(29))).a(b)).b());d=a.jW.uh();e=BV(BbX(a,d,c,b),"handleEvent");d.onreadystatechange=e;a.nG();Hj(a,d,c);d.open("GET",$rt_ustr(b));d.setRequestHeader("Content-Type","text/plain; charset=utf-8");d.send();}
function AIY(a,b,c){var d,e;if(a.kz)(Eh()).gg((((I()).a(B(30))).a(b)).b());d=a.jW.uh();e=BV(BcA(a,d,c,b),"handleEvent");d.onreadystatechange=e;a.nG();Hj(a,d,c);d.open("GET",$rt_ustr(b),!!0);d.setRequestHeader("Content-Type","text/plain; charset=utf-8");d.send();}
function ALX(a,b,c){a.tp(b,Bch(a,c));}
function AWl(a,b,c){var d,e;if(a.kz)(Eh()).gg((((I()).a(B(29))).a(b)).b());d=a.jW.uh();e=BV(Bbc(a,d,c,b),"handleEvent");d.onreadystatechange=e;a.nG();Hj(a,d,c);d.open("GET",$rt_ustr(b));e="arraybuffer";d.responseType=e;d.send();}
function ALZ(a,b,c,d){a.JM(b,c,null,d);}
function AYe(a,b,c,d,e){var f;f=0;a.tp(b,Bfx(a,e,d,f,c));}
function AF6(b,c){b.addEventListener("load",BV(c,"handleEvent"),!!0);b.addEventListener("error",BV(c,"handleEvent"),!!0);}
function Hj(a,b,c){var d;d=BV(BcM(a,c),"handleEvent");b.onprogress=d;}
function NN(b){return b.kz;}
function P$(b){return b.jW;}
var B6=D(0);
function AZU(b){return b;}
var VF=D();
function ANb(b){return b;}
function H_(b){return b.length?0:1;}
function A3o(b,c){var d;d=ANb(c);b.push(d);}
function A41(b){return b.shift();}
var Hd=D(T);
function Bbb(){var a=new Hd();Qy(a);return a;}
function Qy(a){Bo(a);}
function RP(a){return ((((CR()).bF(97,122)).bF(65,90)).bF(48,57)).cE(95);}
var ABw=D(Hd);
function BcW(){var a=new ABw();A05(a);return a;}
function A05(a){Qy(a);}
function ANc(a){var b;b=(RP(a)).f8(1);b.be=1;return b;}
var Ot=D(0);
function V6(){var a=this;C.call(a);a.uc=null;a.QG=Ba;a.CF=null;}
function Bcr(a){var b=new V6();ADI(b,a);return b;}
function ADI(a,b){J(a);a.CF=b;b.II(a);Bgm.Os(a);a.PI();}
function ASv(a,b){a.CF.nR(b);}
function A8S(a){var b,c,d,e,f,g,h,$$je;EH();b=Bhg;Eq(b);a:{b:{try{if(a.uc===Bgm)break b;Cg(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}try{d=E_(CD(),O(1000000));e=O(5000);f=0;g=Bhg.h;c:{while(true){if(f>=g)break c;try{e=(Bhg.l(f)).M2(d,e);}catch($$e){$$je=R($$e);if($$je instanceof C_){h=$$je;break;}else{throw $$e;}}f=f+1|0;}G(Jd((((I()).a(B(31))).a((Cj(Bhg.l(f))).u())).b(),h));}}catch($$e){$$je=R($$e);c=$$je;break a;}d:{try{if(a.uc===Bgm)break d;Cg(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}try
{a.nR(Cp((AWM(Ba,e))));Cg(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}Cg(b);G(c);}
function ART(a){var b,c,d,e,f,$$je;b=D4(E_(CD(),O(1000000)),a.QG);EH();c=Bhg;Eq(c);a:{try{d=0;e=Bhg.h;while(d<e){(Bhg.l(d)).H6(b);d=d+1|0;}Cg(c);break a;}catch($$e){$$je=R($$e);f=$$je;}Cg(c);G(f);}a.uc=Bgm;a.fc();}
function Bx(){var a=this;C.call(a);a.A1=null;a.Eo=0;}
function Cw(a,b,c){J(a);a.A1=b;a.Eo=c;}
function BD(a){return a.Eo;}
function A0C(a){return a.A1.b();}
var Di=D(Bx);
var Bhh=null;var Bhi=null;var Bhj=null;var Bhk=null;var Bhl=null;var Bhm=null;var Bhn=null;function Vr(){Vr=N(Di);AXR();}
function GW(a,b){var c=new Di();V$(c,a,b);return c;}
function V$(a,b,c){Vr();Cw(a,b,c);}
function AXR(){Bhh=GW(B(32),0);Bhi=GW(B(33),1);Bhj=GW(B(34),2);Bhk=GW(B(35),3);Bhl=GW(B(36),4);Bhm=GW(B(37),5);Bhn=H(Di,[Bhh,Bhi,Bhj,Bhk,Bhl,Bhm]);}
function BJ(){Bt.call(this);this.bO=0;}
function VK(a,b){I_(a,b);a.bO=1;a.Ax(1);}
function C1(a){Co(a);a.bO=1;}
function A$z(a,b,c,d){var e;if((b+a.cg()|0)>d.J()){d.d5=1;return (-1);}e=a.bH(b,c);if(e<0)return (-1);return a.k.e(b+e|0,c,d);}
function A7V(a){return a.bO;}
function AKM(a,b){return 1;}
function Pb(){BJ.call(this);this.jD=null;}
function BfO(a){var b=new Pb();A0L(b,a);return b;}
function A0L(a,b){C1(a);a.jD=b.b();a.bO=b.i();}
function A64(a,b,c){var d,e,f,g;d=0;while(true){if(d>=a.jD.i())return a.jD.i();e=a.jD.f(d);f=b+d|0;if(e!=c.f(f)){g=a.jD;if(GF(g.f(d))!=c.f(f))break;}d=d+1|0;}return (-1);}
function A8i(a){return (((I()).a(B(38))).a(a.jD)).b();}
var Fp=D(0);
var Jf=D();
function Bho(){var a=new Jf();ACL(a);return a;}
function ACL(a){J(a);}
function AVD(a,b){return 0;}
function ARx(a,b,c){return 0;}
function Ir(){var a=this;Jf.call(a);a.dV=null;a.xb=0.0;a.Fp=0.0;a.yr=Ba;a.Ba=0.0;a.zH=Ba;a.fJ=0;a.pN=0;a.Fy=Ba;a.AN=0.0;a.AM=0.0;a.xI=0;a.w2=0;a.mG=0;a.jz=0;a.kI=0;a.eE=null;a.vl=0.0;a.vm=0.0;a.l4=Ba;a.d8=null;a.fq=null;a.mj=null;a.mk=null;a.hX=null;}
function Bhp(a){var b=new Ir();Vt(b,a);return b;}
function Bhq(a,b,c,d,e){var f=new Ir();ABS(f,a,b,c,d,e);return f;}
function Bhr(a,b,c,d,e,f){var g=new Ir();O0(g,a,b,c,d,e,f);return g;}
function Vt(a,b){ABS(a,20.0,0.4000000059604645,1.100000023841858,2.147483648E9,b);}
function ABS(a,b,c,d,e,f){O0(a,b,b,c,d,e,f);}
function O0(a,b,c,d,e,f,g){ACL(a);a.eE=BeG();a.d8=Iu();a.fq=Iu();a.mj=Iu();a.mk=Iu();a.hX=Bc1(a);if(g===null)G(W(B(39)));a.xb=b;a.Fp=c;a.yr=Bf6(d*1.0E9);a.Ba=e;a.zH=Bf6(f*1.0E9);a.dV=g;}
function ON(a,b,c,d,e){return a.rW(b,c,d,e);}
function AOw(a,b,c,d,e){if(d>1)return 0;if(d){a.fq.iu(b,c);a.fJ=0;a.jz=1;a.mj.k4(a.d8);a.mk.k4(a.fq);a.hX.jh();}else{a.d8.iu(b,c);a.l4=Bhs.kP();a.eE.u6(b,c,a.l4);if(Bhs.LS(1)){a.fJ=0;a.jz=1;a.mj.k4(a.d8);a.mk.k4(a.fq);a.hX.jh();}else{a.fJ=1;a.jz=0;a.mG=0;a.vl=b;a.vm=c;if(!a.hX.Pe())ACw(a.hX,a.Ba);}}return a.dV.rW(b,c,d,e);}
function VN(a,b,c,d){return a.QD(b,c,d);}
function ADr(a,b,c,d){var e;if(d>1)return 0;if(a.mG)return 0;if(d)a.fq.iu(b,c);else a.d8.iu(b,c);if(a.jz){if(a.dV===null)return 0;e=a.dV.QM(a.mj,a.mk,a.d8,a.fq);return !a.dV.Hb(a.mj.wV(a.mk),a.d8.wV(a.fq))&&!e?0:1;}a.eE.BY(b,c,Bhs.kP());if(a.fJ&&!HW(a,b,c,a.vl,a.vm)){a.hX.jh();a.fJ=0;}if(a.fJ)return 0;a.kI=1;return a.dV.J0(b,c,a.eE.of,a.eE.oe);}
function AAp(a,b,c,d,e){return a.NV(b,c,d,e);}
function ADf(a,b,c,d,e){var f,g,h,i,j;if(d>1)return 0;if(a.fJ&&!HW(a,b,c,a.vl,a.vm))a.fJ=0;f=a.kI;a.kI=0;a.hX.jh();if(a.mG)return 0;if(a.fJ){a:{if(a.xI==e&&a.w2==d&&Ku(D4(CD(),a.Fy),a.yr)){g=a.AN;h=a.AM;if(HW(a,b,c,g,h))break a;}a.pN=0;}a.pN=a.pN+1|0;a.Fy=CD();a.AN=b;a.AM=c;a.xI=e;a.w2=d;a.l4=Ba;return a.dV.Oh(b,c,a.pN,e);}if(a.jz){a.jz=0;a.dV.GM();a.kI=1;if(d)a.eE.u6(a.d8.eU,a.d8.eT,Bhs.kP());else a.eE.u6(a.fq.eU,a.fq.eT,Bhs.kP());return 0;}i=0;if(f&&!a.kI)i=a.dV.GQ(b,c,d,e);j=Bhs.kP();if(Ku(D4(j,a.l4),a.zH))
{a.eE.BY(b,c,j);i=!a.dV.Qv(a.eE.K_(),a.eE.QK(),e)&&!i?0:1;}a.l4=Ba;return i;}
function HW(a,b,c,d,e){return CG(b-d)<a.xb&&CG(c-e)<a.Fp?1:0;}
var FO=D(0);
var D5=D(C_);
function Bht(a,b){var c=new D5();SR(c,a,b);return c;}
function Bhu(a){var b=new D5();XG(b,a);return b;}
function Bhv(a){var b=new D5();AAe(b,a);return b;}
function SR(a,b,c){Ng(a,b,c);}
function XG(a,b){Ov(a,b);}
function AAe(a,b){ABU(a,b);}
var FS=D(D5);
function Bhw(a){var b=new FS();OU(b,a);return b;}
function OU(a,b){XG(a,b);}
function RC(){var a=this;C.call(a);a.ev=0;a.fn=null;a.pr=0;a.Fk=0.0;a.qu=0;a.qU=0;a.hL=0;}
function Bff(){var a=new RC();AHl(a);return a;}
function Bhx(a,b){var c=new RC();XL(c,a,b);return c;}
function AHl(a){XL(a,51,0.800000011920929);}
function XL(a,b,c){var d;J(a);if(c>0.0&&c<1.0){a.Fk=c;d=G3(b,c);a.qu=d*c|0;a.hL=d-1|0;a.qU=CV(O(a.hL));a.fn=Bc(d);return;}G(W((((I()).a(B(40))).cB(c)).b()));}
function ARG(a,b){return Cp(CM(Ce(O(b),Cc(2135587861, 2654435769)),a.qU));}
function MU(a,b){var c,d,e;c=a.fn;d=a.e6(b);while(true){e=c.data[d];if(!e)return  -(d+1|0)|0;if(e==b)break;d=(d+1|0)&a.hL;}return d;}
function AYc(a,b){var c,d;if(!b){if(a.pr)return 0;a.pr=1;a.ev=a.ev+1|0;return 1;}c=MU(a,b);if(c>=0)return 0;d= -(c+1|0)|0;a.fn.data[d]=b;d=a.ev+1|0;a.ev=d;if(d>=a.qu)Xz(a,a.fn.data.length<<1);return 1;}
function XZ(a,b){var c,d,e;c=a.fn;d=a.e6(b);while(true){e=c.data;if(!e[d])break;d=(d+1|0)&a.hL;}e[d]=b;}
function ARS(a,b){var c,d,e,f,g,h,i;if(!b){if(!a.pr)return 0;a.pr=0;a.ev=a.ev-1|0;return 1;}c=MU(a,b);if(c<0)return 0;d=a.fn;e=a.hL;f=(c+1|0)&e;while(true){g=d.data;h=g[f];if(!h)break;i=a.e6(h);if(((f-i|0)&e)>((c-i|0)&e)){g[c]=h;c=f;}f=(f+1|0)&e;}g[c]=0;a.ev=a.ev-1|0;return 1;}
function Xz(a,b){var c,d,e,f;a:{c=a.fn.data.length;a.qu=b*a.Fk|0;a.hL=b-1|0;a.qU=CV(O(a.hL));d=a.fn;a.fn=Bc(b);if(a.ev>0){e=0;while(true){if(e>=c)break a;f=d.data[e];if(f)XZ(a,f);e=e+1|0;}}}}
var Ej=D(Bm);
function C8(){var a=new Ej();PU(a);return a;}
function Bg(a){var b=new Ej();M5(b,a);return b;}
function PU(a){Cx(a);}
function M5(a,b){EF(a,b);}
var ACp=D(Ej);
function Ki(){var a=new ACp();AQZ(a);return a;}
function AQZ(a){PU(a);}
function Mn(){var a=this;Bm.call(a);a.KL=null;a.PR=null;}
function Ba6(a,b,c){var d=new Mn();AZx(d,a,b,c);return d;}
function AZx(a,b,c,d){EF(a,b);a.KL=c;a.PR=d;}
var KE=D();
var Bhy=null;function MY(){MY=N(KE);A4p();}
function T0(b,c){var d;MY();d=Bhy.W(b);if(d===null){d=Bfz(b,4,c);Bhy.x(b,d);}return d;}
function Go(b){MY();return T0(b,100);}
function Tl(b){MY();return (Go(b)).eR();}
function Sl(b,c){var d,e,f,g;MY();if(b===null)G(W(B(41)));d=null;e=0;f=b.h;while(e<f){a:{g=b.l(e);if(g!==null){if(d===null){d=Bhy.W(Cj(g));if(d===null)break a;}d.jo(g);if(!c)d=null;}}e=e+1|0;}}
function A4p(){Bhy=DE();}
function Jy(){var a=this;C.call(a);a.MD=null;a.Aq=0.0;a.HT=0.0;a.hI=null;a.jt=null;a.n2=null;a.ez=0;}
function UW(a,b,c,d){J(a);a.hI=B(42);Dg();a.jt=Bgf;a.n2=Bgf;if(c<=0.0)G(W((((I()).a(B(43))).cB(c)).b()));if(d>0.0){a.MD=b;a.Aq=c;a.HT=d;return;}G(W((((I()).a(B(44))).cB(d)).b()));}
function Oa(a,b){if(b!==null){a.jt=b;a.vd(b);return a;}G(W(B(45)));}
function A8F(a,b){}
function Le(a,b){if(b!==null){a.n2=b;a.qP(b);return a;}G(W(B(45)));}
function A0Q(a,b){}
function IX(a,b,c,d){var e,f,g,$$je;if(!(a.ez==2&&!d)&&a.ez!=3){a.ez=d?2:1;while(true){try{e=a.FZ(b,c);}catch($$e){$$je=R($$e);if($$je instanceof Bm){f=$$je;G(AYo(f));}else{throw $$e;}}if(e.h2())return e;if(e.jH()){if(d&&Ca(b)){g=a.jt;Dg();if(g===Bgf)return BU(Bb(b));if(Bb(c)<=a.hI.i())return Bgi;b.f3(B7(b)+Bb(b)|0);if(a.jt===Bgg)IU(c,a.hI);}return e;}if(e.zg()){g=a.jt;Dg();if(g===Bgf)return e;if(a.jt===Bgg){if(Bb(c)<a.hI.i())return Bgi;IU(c,a.hI);}b.f3(B7(b)+e.i()|0);}else if(e.t0()){g=a.n2;Dg();if(g===Bgf)break;if
(a.n2===Bgg){if(Bb(c)<a.hI.i())return Bgi;IU(c,a.hI);}b.f3(B7(b)+e.i()|0);}}return e;}G(GX());}
function KV(a,b){if(a.ez!=3&&a.ez!=2)G(GX());a.ez=3;return a.G4(b);}
function AB8(a){a.ez=0;a.uR();return a;}
function WO(a,b){var c,d,e;if(a.ez&&a.ez!=3)G(GX());if(!Bb(b))return UN(0);if(a.ez)AB8(a);c=UN(Bf(8,Bb(b)*a.Aq|0));while(true){d=IX(a,b,c,0);if(d.jH())break;if(d.h2())c=Nq(a,c);if(!d.mw())continue;d.nP();}e=IX(a,b,c,1);if(e.mw())e.nP();while(true){e=KV(a,c);if(e.jH())break;c=Nq(a,c);}K$(c);return c;}
function Nq(a,b){var c,d,e;c=NI(b);d=c.data;d=JX(c,Bf(8,d.length*2|0));e=La(d);e.oM(B7(b));return e;}
function ANd(a,b){Bj();return Bgj;}
function AY2(a){}
var KG=D();
var Bhz=null;function Bcq(){Bcq=N(KG);AP8();}
function LZ(b){var $$je;Bcq();a:{if(b!==null)try{b.fO();break a;}catch($$e){$$je=R($$e);if($$je instanceof C_){}else{throw $$e;}}}}
function AP8(){Bhz=Ci(0);}
function FM(){var a=this;BC.call(a);a.vN=0;a.jb=0;}
function BfD(a,b){var c=new FM();Kg(c,a,b);return c;}
function Kg(a,b,c){CP(a);a.vN=b;a.jb=c;}
function AEe(a,b,c,d){var e,f,g,h;e=a.j7(d);if(e!==null&&(b+e.i()|0)<=d.J()){f=0;while(true){if(f>=e.i()){d.by(a.jb,e.i());return a.k.e(b+e.i()|0,c,d);}g=e.f(f);h=b+f|0;if(g!=c.f(h)&&GF(e.f(f))!=c.f(h))break;f=f+1|0;}return (-1);}return (-1);}
function A52(a,b){a.k=b;}
function AGB(a,b){var c;c=b.Ou(a.vN);return c;}
function AVh(a){return (((I()).a(B(46))).j(a.bm)).b();}
function APA(a,b){var c;c=!b.et(a.jb)?0:1;b.by(a.jb,(-1));return c;}
function YJ(){FM.call(this);this.Gd=0;}
function Bap(a,b){var c=new YJ();AID(c,a,b);return c;}
function AID(a,b,c){Kg(a,b,c);}
function AMe(a,b,c,d){var e,f,g,h;e=a.j7(d);if(e!==null&&(b+e.i()|0)<=d.J()){f=0;while(true){if(f>=e.i()){d.by(a.jb,e.i());return a.k.e(b+e.i()|0,c,d);}g=Do(Dz(e.f(f)));h=b+f|0;h=Dz(c.f(h));if(g!=Do(h))break;f=f+1|0;}return (-1);}return (-1);}
function AWP(a){return (((I()).a(B(47))).j(a.Gd)).b();}
var LX=D(0);
function I3(){C.call(this);this.I8=null;}
var BhA=null;var BhB=null;function Ev(){Ev=N(I3);A$M();}
function AHG(a){var b=new I3();Vj(b,a);return b;}
function Vj(a,b){Ev();J(a);a.I8=b;}
function EV(){Ev();return BhA;}
function A$M(){BhA=AHG(B(48));BhB=AHG(B(49));}
var EL=D(Bx);
var BhC=null;var BhD=null;var BhE=null;function O3(){O3=N(EL);AXF();}
function A5y(a,b){var c=new EL();TZ(c,a,b);return c;}
function TZ(a,b,c){O3();Cw(a,b,c);}
function AXF(){BhC=A5y(B(50),0);BhD=A5y(B(51),1);BhE=H(EL,[BhC,BhD]);}
function YY(){var a=this;T.call(a);a.uY=0;a.sT=0;a.BT=0;}
function Bz(a,b){var c=new YY();AGm(c,a,b);return c;}
function BaR(a,b,c){var d=new YY();ASL(d,a,b,c);return d;}
function AGm(a,b,c){Bo(a);a.sT=c;a.uY=b;}
function ASL(a,b,c,d){Bo(a);a.BT=d;a.sT=c;a.uY=b;}
function AZL(a){var b;b=Bcg(a.uY);if(a.BT)b.bG.n1(0,2048);b.be=a.sT;return b;}
var LY=D(0);
var Gi=D(0);
var NG=D(0);
var DQ=D();
function G_(a){J(a);}
function ADN(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.vU(f[c]);e=e+1|0;c=g;}}
var Lm=D(DQ);
var BhF=null;function AS8(){AS8=N(Lm);APf();}
function Bbs(){var a=new Lm();ACe(a);return a;}
function ACe(a){AS8();G_(a);}
function A4K(a,b){A7A(b);}
function APf(){BhF=Bbs();}
function Db(){Bt.call(this);this.Y=null;}
function FW(a,b,c,d){I_(a,c);a.Y=b;a.Ax(d);}
function A$J(a){return a.Y;}
function APY(a,b){return !a.Y.ca(b)&&!a.k.ca(b)?0:1;}
function A8N(a,b){return 1;}
function AMO(a){var b;a.cD=1;if(a.k!==null&&!a.k.cD){b=a.k.h5();if(b!==null){a.k.cD=1;a.k=b;}a.k.ed();}if(a.Y!==null){if(!a.Y.cD){b=a.Y.h5();if(b!==null){a.Y.cD=1;a.Y=b;}a.Y.ed();}else if(a.Y instanceof Fz&&a.Y.dm.th)a.Y=a.Y.k;}}
var Rw=D(Db);
function Baj(a,b,c){var d=new Rw();AEq(d,a,b,c);return d;}
function AEq(a,b,c,d){FW(a,b,c,d);}
function A$F(a,b,c,d){var e;e=d.J();if(e>b)return a.k.cG(b,e,c,d);return a.k.e(b,c,d);}
function AQL(a,b,c,d){var e;e=d.J();if(a.k.cG(b,e,c,d)>=0)return b;return (-1);}
function A5M(a){return B(52);}
function Cy(){var a=this;Bt.call(a);a.th=0;a.ly=0;}
var BhG=null;function JF(){JF=N(Cy);AZk();}
function BeS(a){var b=new Cy();Et(b,a);return b;}
function Et(a,b){JF();Co(a);a.ly=b;}
function AEM(a,b,c,d){var e,f;e=d.nB(a.ly);d.uX(a.ly,b);f=a.k.e(b,c,d);if(f<0)d.uX(a.ly,e);return f;}
function A3l(a){return a.ly;}
function AJN(a){return B(53);}
function AFl(a,b){return 0;}
function AZk(){BhG=A_N();}
var Ks=D(Cy);
function BhH(a){var b=new Ks();ABX(b,a);return b;}
function ABX(a,b){Et(a,b);}
function AFx(a,b,c,d){var e,f;e=a.j$();f=d.et(e);if(f!=b)b=(-1);return b;}
function A8o(a){return B(54);}
var Mz=D(0);
function OR(){var a=this;BC.call(a);a.q9=null;a.Az=0;}
function BcB(a){var b=new OR();ARu(b,a);return b;}
function ARu(a,b){CP(a);a.q9=b.me();a.Az=b.bD;}
function AZA(a,b){a.k=b;}
function AJ6(a,b,c,d){var e,f,g,h,i,j,k;e=d.dI();f=d.J();g=b+1|0;h=B8(g,f);if(h>0){d.d5=1;return (-1);}i=c.f(b);if(!a.q9.p(i))return (-1);if(BY(i)){if(h<0){j=c.f(g);if(BH(j))return (-1);}}else if(BH(i)&&b>e){k=c.f(b-1|0);if(BY(k))return (-1);}return a.k.e(g,c,d);}
function A5p(a){return ((((I()).a(B(55))).a(!a.Az?B(56):B(57))).a(a.q9.b())).b();}
var CH=D(Db);
function Bc_(a,b,c){var d=new CH();Fd(d,a,b,c);return d;}
function Fd(a,b,c,d){FW(a,b,c,d);}
function AUX(a,b,c,d){var e;if(!a.Y.ba(d))return a.k.e(b,c,d);e=a.Y.e(b,c,d);if(e>=0)return e;return a.k.e(b,c,d);}
function A1i(a){return B(58);}
var Rv=D(CH);
function Bdv(a,b,c){var d=new Rv();AXe(d,a,b,c);return d;}
function AXe(a,b,c,d){Fd(a,b,c,d);}
function ATe(a,b,c,d){var e;if(!a.Y.ba(d))return a.k.e(b,c,d);e=a.k.e(b,c,d);if(e>=0)return e;return a.Y.e(b,c,d);}
var Ko=D(0);
var AAj=D(Dm);
function BdJ(a){var b=new AAj();ASU(b,a);return b;}
function ASU(a,b){GH(a,b,1.0,1.0);}
function AJl(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(BY(l)){if(j>=d){if(h.dO(2)){j=j+(-1)|0;break a;}Bj();i=Bgj;break a;}m=k[j];if(!BH(m)){i=BU(1);break a;}j=j+(-1)|0;i=F$(2);break a;}if(BH(l))i=BU(1);if(l>=128){i=F$(1);j=j+(-1)|0;break a;}k=e.data;n=f+1|0;k[f]=l<<24>>24;c=j;f=n;}j=c;}h.ek(j);h.dR(f);return i;}
var Da=D();
var Bgm=null;var BhI=null;var BhJ=null;var Bhs=null;var BhK=null;var BhL=null;var BhM=null;var BhN=null;function BI(){var a=this;C.call(a);a.da=Ba;a.Dw=0;}
var BhO=null;function NH(){NH=N(BI);AXd();}
function QQ(b){var c;NH();c=0;while(c<BhO.h){if(!(BhO.l(c)).Py(b))return D6(O(1),c);c=c+1|0;}return Ba;}
function PR(b){var c;NH();c=(-1);a:{while(Du(b,Ba)){c=c+1|0;if(c>=63)break a;if(Du(Br(M9(b,c),O(1)),Ba))break a;}}return c>=0&&c<BhO.h?BhO.l(c):null;}
function BO(b){var c;NH();c=QQ(b);if(Hq(c,Ba))return c;BhO.F(b);return D6(O(1),BhO.h-1|0);}
function Fb(a,b){NH();J(a);a.da=b;a.Dw=W_(b);}
function AV$(a,b){return b.bp()!=a.bp()?0:1;}
function AUc(a,b){var c;if(b===null)return 0;if(b===a)return 1;if(!(b instanceof BI))return 0;c=b;if(Z(a.da,c.da))return a.zB(c);return 0;}
function ARt(a){return PR(a.da);}
function F2(a){return 7489*a.Dw|0;}
function AXd(){BhO=Bp();}
var Dl=D(B3);
function BhP(){var a=new Dl();Jt(a);return a;}
function Jt(a){E$(a);}
var Iv=D(0);
var H7=D();
function BhQ(){var a=new H7();QK(a);return a;}
function QK(a){J(a);}
function AU6(a,b){}
var KP=D(0);
function FA(){var a=this;H7.call(a);a.np=null;a.MN=null;a.r1=0;a.Cx=0;a.jJ=null;a.st=null;}
function BhR(a,b,c,d,e,f){var g=new FA();AAy(g,a,b,c,d,e,f);return g;}
function AAy(a,b,c,d,e,f,g){QK(a);a.np=b;a.MN=c;a.r1=d;a.Cx=e;a.jJ=f;a.st=g;}
function AT5(a){return a.np;}
function AOA(a){return AHH(a.r1,a.Cx);}
function AJs(a){return a.jJ.gn();}
function AEH(a){var b,c,d,e;b=I();b.a(ABr(a.sm()));if(b.i()>0)b.U(32);(b.a((a.np.u()).b())).U(40);c=a.vu();d=0;while(true){e=c.data;if(d>=e.length)break;if(d>0)b.U(44);b.a(e[d].u());d=d+1|0;}return (b.U(41)).b();}
function A7s(a,b){var c,d,e,f,g,h,i;if(a.r1&1)G(Bfw());if(a.st===null)G(Ba2());c=b.data;d=c.length;if(d!=a.jJ.data.length)G(CK());e=0;while(true){if(e>=d){f=b.data;g=new (a.np.g9);a.st.call(g,f);return g;}if(!a.jJ.data[e].hd()&&c[e]!==null){h=a.jJ.data[e];i=c[e];if(!h.vV(i))G(CK());}if(a.jJ.data[e].hd()&&c[e]===null)break;e=e+1|0;}G(CK());}
var Z_=D(D5);
function AYo(a){var b=new Z_();AMW(b,a);return b;}
function AMW(a,b){AAe(a,b);}
var Mk=D(0);
function XM(){C.call(this);this.Hp=null;}
function Bfy(a){var b=new XM();ALj(b,a);return b;}
function ALj(a,b){a.Hp=b;J(a);}
function APS(a){}
function AOi(a){a.H9();}
var XJ=D(CH);
function Bd_(a,b,c){var d=new XJ();A1U(d,a,b,c);return d;}
function A1U(a,b,c,d){Fd(a,b,c,d);JF();b.Q(BhG);}
function A3Q(a,b,c,d){var e,f;e=a.Y.e(b,c,d);if(e<0)return (-1);if(e>b){while(true){f=a.Y.e(e,c,d);if(f<=e)break;e=f;}b=e;}return a.k.e(b,c,d);}
var By=D();
var BhS=null;var BhT=null;var BhU=null;var BhV=null;var BhW=null;var BhX=null;var BhY=null;var BhZ=null;var Bh0=null;var Bh1=null;var Bh2=null;var Bh3=null;var Bh4=null;var Bh5=null;var Bh6=null;var Bh7=null;var Bh8=null;var Bh9=null;var Bh$=null;var Bh_=null;var Bia=null;var Bib=null;var Bic=null;var Bid=null;var Bie=null;function J8(){J8=N(By);AUQ();}
function Dw(){J8();return Bid.eR();}
function UP(){J8();Bid.en();Bie.en();}
function AUQ(){BhS=D0();BhT=D0();BhU=D0();BhV=D0();BhW=D0();BhX=S();BhY=S();BhZ=S();Bh0=S();Bh1=S();Bh2=S();Bh3=S();Bh4=S();Bh5=CL();Bh6=CL();Bh7=CL();Bh8=CL();Bh9=CL();Bh$=CL();Bh_=CL();Bia=CL();Bib=CL();Bic=BF();Bid=Bau();Bie=BeB();}
function ES(){var a=this;C.call(a);a.B=null;a.bq=0;}
function Bif(){var a=new ES();J6(a);return a;}
function Bfv(a){var b=new ES();JT(b,a);return b;}
function J6(a){JT(a,16);}
function JT(a,b){J(a);a.B=BW(b);}
function YW(a,b){return a.wN(a.bq,b);}
function Lj(a,b){return a.k2(a.bq,b);}
function NU(a,b,c){var d,e,f;if(b>=0&&b<=a.bq){if(c===null)c=B(59);else if(c.bN())return a;a.gX(a.bq+c.i()|0);d=a.bq-1|0;while(d>=b){a.B.data[d+c.i()|0]=a.B.data[d];d=d+(-1)|0;}a.bq=a.bq+c.i()|0;d=0;while(d<c.i()){e=a.B.data;f=b+1|0;e[b]=c.f(d);d=d+1|0;b=f;}return a;}G(Ki());}
function PD(a,b){return a.AP(b,10);}
function AVA(a,b,c){return a.Lt(a.bq,b,c);}
function A1l(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(c<0){e=0;c= -c|0;}a:{if(c<d){if(e)Cn(a,b,b+1|0);else{Cn(a,b,b+2|0);f=a.B.data;g=b+1|0;f[b]=45;b=g;}a.B.data[b]=FQ(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Cf(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;Cn(a,b,b+i|0);if(e)l=b;else{f=a.B.data;l=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.B.data;g=l+1|0;f[l]=FQ(c/k|0,d);c=c%k|0;k=k/d|0;l=g;}}}return a;}
function AB_(a,b){return a.DN(a.bq,b);}
function RI(a,b,c){return a.MO(b,c,10);}
function AML(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(Kt(c,Ba)){e=0;c=A3K(c);}a:{f=O(d);if(Kt(c,f)){if(e)Cn(a,b,b+1|0);else{Cn(a,b,b+2|0);g=a.B.data;h=b+1|0;g[b]=45;b=h;}a.B.data[b]=FQ(Cp(c),d);}else{i=1;j=O(1);while(true){k=Ce(j,f);if(Ku(k,j))break;if(Hq(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;Cn(a,b,b+i|0);if(e)l=b;else{g=a.B.data;l=b+1|0;g[b]=45;}while(true){if(Ku(j,Ba))break a;g=a.B.data;h=l+1|0;g[l]=FQ(Cp(E_(c,j)),d);c=AUO(c,j);j=E_(j,f);l=h;}}}return a;}
function TI(a,b){return a.CL(a.bq,b);}
function ZY(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=B8(c,0.0);if(!d){Cn(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=48;e=a.B.data;f=d+1|0;e[d]=46;a.B.data[f]=48;return a;}if(!d){Cn(a,b,b+4|0);e=a.B.data;d=b+1|0;e[b]=45;e=a.B.data;f=d+1|0;e[d]=48;e=a.B.data;d=f+1|0;e[f]=46;a.B.data[d]=48;return a;}if(isNaN(c)?1:0){Cn(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=78;e=a.B.data;f=d+1|0;e[d]=97;a.B.data[f]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Cn(a,b,b+8|0);d=b;}else{Cn(a,b,b+9|0);e=a.B.data;d=b+1|0;e[b]=45;}e=a.B.data;f=d+
1|0;e[d]=73;e=a.B.data;d=f+1|0;e[f]=110;e=a.B.data;f=d+1|0;e[d]=102;e=a.B.data;d=f+1|0;e[f]=105;e=a.B.data;f=d+1|0;e[d]=110;e=a.B.data;d=f+1|0;e[f]=105;e=a.B.data;f=d+1|0;e[d]=116;a.B.data[f]=121;return a;}A_V();g=Bgc;ZM(c,g);h=g.q_;i=g.qK;j=g.v9;k=1;l=1;if(j)l=2;m=9;n=AQS(h);if(n>0)m=m-n|0;if(i<7&&i>=(-3)){if(i>=0){k=i+1|0;m=Bf(m,k+1|0);i=0;}else{h=h/Bf$.data[ -i|0]|0;m=m-i|0;i=0;}}if(i){l=l+2|0;if(!(i>(-10)&&i<10))l=l+1|0;if(i<0)l=l+1|0;}if(i&&m==k)m=m+1|0;d=l+m|0;Cn(a,b,b+d|0);if(!j)f=b;else{e=a.B.data;f
=b+1|0;e[b]=45;}o=100000000;p=0;while(p<m){if(o<=0)q=0;else{q=h/o|0;h=h%o|0;}e=a.B.data;d=f+1|0;e[f]=(48+q|0)&65535;k=k+(-1)|0;if(k)f=d;else{e=a.B.data;f=d+1|0;e[d]=46;}o=o/10|0;p=p+1|0;}if(i){e=a.B.data;d=f+1|0;e[f]=69;if(i>=0)f=d;else{i= -i|0;e=a.B.data;f=d+1|0;e[d]=45;}if(i<10)r=f;else{e=a.B.data;r=f+1|0;e[f]=(48+(i/10|0)|0)&65535;}a.B.data[r]=(48+(i%10|0)|0)&65535;}return a;}
function AQS(b){var c,d,e,f;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;f=e*100|0;if(b%f|0)f=e;else c=c|2;if(!(b%(f*10|0)|0))c=c|1;return c;}
function Na(a,b){return a.u9(a.bq,b);}
function Ou(a,b,c){Cn(a,b,b+1|0);a.B.data[b]=c;return a;}
function QF(a,b,c){return a.k2(b,c===null?B(59):c.b());}
function Td(a,b){return a.xq(a.bq,b);}
function OF(a,b,c){return a.k2(b,!c?B(60):B(61));}
function Mx(a,b){var c;if(a.B.data.length>=b)return;c=a.B.data.length>=1073741823?2147483647:Bf(b,Bf(a.B.data.length*2|0,5));a.B=JX(a.B,c);}
function Nt(a){return F1(a.B,0,a.bq);}
function M2(a){return a.bq;}
function O2(a,b){if(b>=0&&b<a.bq)return a.B.data[b];G(C8());}
function PH(a,b,c,d){return a.vw(a.bq,b,c,d);}
function ZJ(a,b,c,d,e){var f,g;if(d<=e&&e<=c.i()&&d>=0){Cn(a,b,(b+e|0)-d|0);while(d<e){f=a.B.data;g=b+1|0;f[b]=c.f(d);d=d+1|0;b=g;}return a;}G(C8());}
function ACJ(a,b){return a.EP(b,0,b.i());}
function Oo(a,b,c,d){return a.uC(a.bq,b,c,d);}
function Mo(a,b,c,d,e){var f,g,h,i,j;Cn(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.B.data;i=b+1|0;j=d+1|0;h[b]=g[d];b=i;d=j;}return a;}
function NB(a,b){return a.tU(b,0,b.data.length);}
function AA3(a,b,c){return a.ce(b,c);}
function Yl(a,b,c,d,e){var f,g,h,i;if(b>c)G(Bg(B(62)));while(b<c){f=d.data;g=e+1|0;h=a.B.data;i=b+1|0;f[e]=h[b];e=g;b=i;}}
function ABF(a,b){a.bq=b;}
function ABT(a,b){var c,d,e;if(b>=0&&b<a.bq){a.bq=a.bq-1|0;while(b<a.bq){c=a.B.data;d=a.B.data;e=b+1|0;c[b]=d[e];b=e;}return a;}G(Ki());}
function AB$(a,b,c){var d,e,f,g,h,i;d=B8(b,c);if(d<=0&&b<=a.bq){if(!d)return a;e=a.bq-c|0;a.bq=a.bq-(c-b|0)|0;f=0;while(f<e){g=a.B.data;d=b+1|0;h=a.B.data;i=c+1|0;g[b]=h[c];f=f+1|0;b=d;c=i;}return a;}G(Ki());}
function Cn(a,b,c){var d,e;d=a.bq-b|0;a.gX((a.bq+c|0)-b|0);e=d-1|0;while(e>=0){a.B.data[c+e|0]=a.B.data[b+e|0];e=e+(-1)|0;}a.bq=a.bq+(c-b|0)|0;}
function W6(a,b,c){if(b<=c&&b>=0&&c<=a.bq)return F1(a.B,b,c-b|0);G(C8());}
var Fw=D(0);
var PE=D(ES);
function A6b(){var a=new PE();A0U(a);return a;}
function A0U(a){J6(a);}
function AG1(a,b){Lj(a,b);return a;}
function AQM(a,b){Na(a,b);return a;}
function ATd(a,b,c,d){Oo(a,b,c,d);return a;}
function AHJ(a,b){NB(a,b);return a;}
function AVL(a,b,c,d){PH(a,b,c,d);return a;}
function A8u(a,b){ACJ(a,b);return a;}
function A3e(a,b,c,d,e){ZJ(a,b,c,d,e);return a;}
function A3u(a,b,c,d,e){Mo(a,b,c,d,e);return a;}
function A8_(a,b,c){Ou(a,b,c);return a;}
function A6R(a,b,c){NU(a,b,c);return a;}
function AIl(a,b,c,d,e){return a.Ok(b,c,d,e);}
function AWD(a,b,c,d){return a.K7(b,c,d);}
function A0a(a,b,c,d,e){return a.Io(b,c,d,e);}
function A6q(a,b,c,d){return a.Nf(b,c,d);}
function AUy(a,b){return O2(a,b);}
function A$E(a){return M2(a);}
function AWT(a){return Nt(a);}
function AW9(a,b){Mx(a,b);}
function A7Q(a,b,c){return a.Qy(b,c);}
function AUL(a,b,c){return a.Ht(b,c);}
var EJ=D(0);
function CS(){var a=this;C.call(a);a.hz=0;a.C=0;a.bb=0;a.fD=0;}
function FJ(a,b){J(a);a.fD=(-1);a.hz=b;a.bb=b;}
function CU(a){return a.hz;}
function B7(a){return a.C;}
function GL(a,b){if(b>=0&&b<=a.bb){a.C=b;if(b<a.fD)a.fD=0;return a;}G(W(((((((I()).a(B(63))).j(b)).a(B(64))).j(a.bb)).a(B(65))).b()));}
function BE(a){return a.bb;}
function IZ(a,b){if(b>=0&&b<=a.hz){if(a.fD>b)a.fD=(-1);a.bb=b;if(a.C>a.bb)a.C=a.bb;return a;}G(W(((((((I()).a(B(66))).j(b)).a(B(64))).j(a.hz)).a(B(65))).b()));}
function FZ(a){a.C=0;a.bb=a.hz;a.fD=(-1);return a;}
function G7(a){a.bb=a.C;a.C=0;a.fD=(-1);return a;}
function Bb(a){return a.bb-a.C|0;}
function Ca(a){return a.C>=a.bb?0:1;}
var N4=D();
var Big=null;function AId(){AId=N(N4);ADd();}
function Qb(b){AId();return Big.W(b);}
function ACu(){var b;AId();Big.K();b=Big;Bv();b.x(B(67),Bih);Big.x(B(68),Bii);Big.x(B(69),Bij);Big.x(B(70),Bik);Big.x(B(71),Bil);Big.x(B(72),Bim);Big.x(B(73),Bin);Big.x(B(74),Bio);Big.x(B(75),Bip);Big.x(B(76),Biq);Big.x(B(77),Bir);Big.x(B(78),Bis);Big.x(B(79),Bit);Big.x(B(80),Biu);Big.x(B(81),Biv);Big.x(B(82),Biw);Big.x(B(83),Bix);Big.x(B(84),Biy);Big.x(B(85),Biz);Big.x(B(86),BiA);Big.x(B(87),BiB);Big.x(B(88),BiC);Big.x(B(89),BiD);Big.x(B(90),BiE);Big.x(B(91),BiF);Big.x(B(92),BiG);Big.x(B(93),BiH);Big.x(B(94),
BiI);Big.x(B(95),BiJ);Big.x(B(96),BiK);Big.x(B(97),BiL);Big.x(B(98),BiM);Big.x(B(99),BiN);Big.x(B(100),BiO);}
function ADd(){Big=DE();ACu();}
var E8=D();
function Mg(a){J(a);}
function Q(){var a=this;E8.call(a);a.bD=0;a.b5=0;a.bG=null;a.mx=null;a.mZ=null;a.be=0;}
var BiP=null;function Kd(){Kd=N(Q);AGI();}
function Be(a){Kd();Mg(a);a.bG=BeK(2048);}
function AWA(a){return null;}
function AVB(a){return a.bG;}
function A3j(a){return !a.b5?(a.bG.k_(0)>=2048?0:1):a.bG.PU(0)>=2048?0:1;}
function A0N(a){return a.be;}
function A7L(a){return a;}
function AEF(a){var b;if(a.mZ===null){b=a.ci();a.mZ=Bct(a,b);a.mZ.f8(a.b5);}return a.mZ;}
function AWK(a){var b;if(a.mx===null){b=a.ci();a.mx=BaP(a,b,a);a.mx.f8(a.jE());a.mx.be=a.be;}return a.mx;}
function A9O(a){return 0;}
function ARC(a,b){if(a.bD^b){a.bD=a.bD?0:1;a.b5=a.b5?0:1;}if(!a.be)a.be=1;return a;}
function AIj(a){return a.bD;}
function IY(b,c){Kd();return b.p(c);}
function GU(b,c){Kd();if(b.bK()!==null&&c.bK()!==null)return (b.bK()).LW(c.bK());return 1;}
function KZ(b,c){Kd();return (AB7(BiP,b)).Hf(c);}
function AGI(){BiP=Bat();}
function Zt(){Q.call(this);this.FR=null;}
function Ba1(a){var b=new Zt();A1S(b,a);return b;}
function A1S(a,b){a.FR=b;Be(a);}
function AS3(a,b){return Yb(b);}
var Gw=D();
var BiQ=null;var BiR=null;var BiS=null;function APL(){APL=N(Gw);AHs();}
function Bat(){var a=new Gw();TS(a);return a;}
function TS(a){APL();J(a);}
function AB7(a,b){var c,d,e;c=0;while(true){APL();if(c>=BiS.data.length)G(Ba6(B(101),B(101),b));d=BiS.data[c];e=d.data;if(b.z(e[0]))break;c=c+1|0;}return e[1];}
function AHs(){BiQ=BbR();BiR=BdQ();BiS=H($rt_arraycls(C),[H(C,[B(102),Bcl()]),H(C,[B(103),A_o()]),H(C,[B(104),Be3()]),H(C,[B(105),Bfn()]),H(C,[B(106),BiR]),H(C,[B(107),Bd5()]),H(C,[B(108),BaG()]),H(C,[B(109),BcV()]),H(C,[B(110),BcL()]),H(C,[B(111),A_H()]),H(C,[B(112),A__()]),H(C,[B(113),BcY()]),H(C,[B(114),Bbq()]),H(C,[B(115),A_j()]),H(C,[B(116),Bfe()]),H(C,[B(117),A_5()]),H(C,[B(118),Bd3()]),H(C,[B(119),Bdl()]),H(C,[B(120),Bd4()]),H(C,[B(121),A_K()]),H(C,[B(122),Bft()]),H(C,[B(123),Bdd()]),H(C,[B(124),Ba4()]),
H(C,[B(125),Be1()]),H(C,[B(126),BeV()]),H(C,[B(127),Bb5()]),H(C,[B(128),A_J()]),H(C,[B(129),BeL()]),H(C,[B(130),BiQ]),H(C,[B(131),Bbb()]),H(C,[B(132),BcW()]),H(C,[B(133),BiQ]),H(C,[B(134),A_h()]),H(C,[B(135),BiR]),H(C,[B(136),Bam()]),H(C,[B(137),M(0,127)]),H(C,[B(138),M(128,255)]),H(C,[B(139),M(256,383)]),H(C,[B(140),M(384,591)]),H(C,[B(141),M(592,687)]),H(C,[B(142),M(688,767)]),H(C,[B(143),M(768,879)]),H(C,[B(144),M(880,1023)]),H(C,[B(145),M(1024,1279)]),H(C,[B(146),M(1280,1327)]),H(C,[B(147),M(1328,1423)]),
H(C,[B(148),M(1424,1535)]),H(C,[B(149),M(1536,1791)]),H(C,[B(150),M(1792,1871)]),H(C,[B(151),M(1872,1919)]),H(C,[B(152),M(1920,1983)]),H(C,[B(153),M(2304,2431)]),H(C,[B(154),M(2432,2559)]),H(C,[B(155),M(2560,2687)]),H(C,[B(156),M(2688,2815)]),H(C,[B(157),M(2816,2943)]),H(C,[B(158),M(2944,3071)]),H(C,[B(159),M(3072,3199)]),H(C,[B(160),M(3200,3327)]),H(C,[B(161),M(3328,3455)]),H(C,[B(162),M(3456,3583)]),H(C,[B(163),M(3584,3711)]),H(C,[B(164),M(3712,3839)]),H(C,[B(165),M(3840,4095)]),H(C,[B(166),M(4096,4255)]),
H(C,[B(167),M(4256,4351)]),H(C,[B(168),M(4352,4607)]),H(C,[B(169),M(4608,4991)]),H(C,[B(170),M(4992,5023)]),H(C,[B(171),M(5024,5119)]),H(C,[B(172),M(5120,5759)]),H(C,[B(173),M(5760,5791)]),H(C,[B(174),M(5792,5887)]),H(C,[B(175),M(5888,5919)]),H(C,[B(176),M(5920,5951)]),H(C,[B(177),M(5952,5983)]),H(C,[B(178),M(5984,6015)]),H(C,[B(179),M(6016,6143)]),H(C,[B(180),M(6144,6319)]),H(C,[B(181),M(6400,6479)]),H(C,[B(182),M(6480,6527)]),H(C,[B(183),M(6528,6623)]),H(C,[B(184),M(6624,6655)]),H(C,[B(185),M(6656,6687)]),
H(C,[B(186),M(7424,7551)]),H(C,[B(187),M(7552,7615)]),H(C,[B(188),M(7616,7679)]),H(C,[B(189),M(7680,7935)]),H(C,[B(190),M(7936,8191)]),H(C,[B(191),M(8192,8303)]),H(C,[B(192),M(8304,8351)]),H(C,[B(193),M(8352,8399)]),H(C,[B(194),M(8400,8447)]),H(C,[B(195),M(8448,8527)]),H(C,[B(196),M(8528,8591)]),H(C,[B(197),M(8592,8703)]),H(C,[B(198),M(8704,8959)]),H(C,[B(199),M(8960,9215)]),H(C,[B(200),M(9216,9279)]),H(C,[B(201),M(9280,9311)]),H(C,[B(202),M(9312,9471)]),H(C,[B(203),M(9472,9599)]),H(C,[B(204),M(9600,9631)]),
H(C,[B(205),M(9632,9727)]),H(C,[B(206),M(9728,9983)]),H(C,[B(207),M(9984,10175)]),H(C,[B(208),M(10176,10223)]),H(C,[B(209),M(10224,10239)]),H(C,[B(210),M(10240,10495)]),H(C,[B(211),M(10496,10623)]),H(C,[B(212),M(10624,10751)]),H(C,[B(213),M(10752,11007)]),H(C,[B(214),M(11008,11263)]),H(C,[B(215),M(11264,11359)]),H(C,[B(216),M(11392,11519)]),H(C,[B(217),M(11520,11567)]),H(C,[B(218),M(11568,11647)]),H(C,[B(219),M(11648,11743)]),H(C,[B(220),M(11776,11903)]),H(C,[B(221),M(11904,12031)]),H(C,[B(222),M(12032,12255)]),
H(C,[B(223),M(12272,12287)]),H(C,[B(224),M(12288,12351)]),H(C,[B(225),M(12352,12447)]),H(C,[B(226),M(12448,12543)]),H(C,[B(227),M(12544,12591)]),H(C,[B(228),M(12592,12687)]),H(C,[B(229),M(12688,12703)]),H(C,[B(230),M(12704,12735)]),H(C,[B(231),M(12736,12783)]),H(C,[B(232),M(12784,12799)]),H(C,[B(233),M(12800,13055)]),H(C,[B(234),M(13056,13311)]),H(C,[B(235),M(13312,19893)]),H(C,[B(236),M(19904,19967)]),H(C,[B(237),M(19968,40959)]),H(C,[B(238),M(40960,42127)]),H(C,[B(239),M(42128,42191)]),H(C,[B(240),M(42752,
42783)]),H(C,[B(241),M(43008,43055)]),H(C,[B(242),M(44032,55203)]),H(C,[B(243),M(55296,56191)]),H(C,[B(244),M(56192,56319)]),H(C,[B(245),M(56320,57343)]),H(C,[B(246),M(57344,63743)]),H(C,[B(247),M(63744,64255)]),H(C,[B(248),M(64256,64335)]),H(C,[B(249),M(64336,65023)]),H(C,[B(250),M(65024,65039)]),H(C,[B(251),M(65040,65055)]),H(C,[B(252),M(65056,65071)]),H(C,[B(253),M(65072,65103)]),H(C,[B(254),M(65104,65135)]),H(C,[B(255),M(65136,65279)]),H(C,[B(256),M(65280,65519)]),H(C,[B(257),M(0,1114111)]),H(C,[B(258),
BcZ()]),H(C,[B(259),Bz(0,1)]),H(C,[B(260),G6(62,1)]),H(C,[B(261),Bz(1,1)]),H(C,[B(262),Bz(2,1)]),H(C,[B(263),Bz(3,0)]),H(C,[B(264),Bz(4,0)]),H(C,[B(265),Bz(5,1)]),H(C,[B(266),G6(448,1)]),H(C,[B(267),Bz(6,1)]),H(C,[B(268),Bz(7,0)]),H(C,[B(269),Bz(8,1)]),H(C,[B(270),G6(3584,1)]),H(C,[B(271),Bz(9,1)]),H(C,[B(272),Bz(10,1)]),H(C,[B(273),Bz(11,1)]),H(C,[B(274),G6(28672,0)]),H(C,[B(275),Bz(12,0)]),H(C,[B(276),Bz(13,0)]),H(C,[B(277),Bz(14,0)]),H(C,[B(278),BdM(983040,1,1)]),H(C,[B(279),Bz(15,0)]),H(C,[B(280),Bz(16,
1)]),H(C,[B(281),Bz(18,1)]),H(C,[B(282),BaR(19,0,1)]),H(C,[B(283),G6(1643118592,1)]),H(C,[B(284),Bz(20,0)]),H(C,[B(285),Bz(21,0)]),H(C,[B(286),Bz(22,0)]),H(C,[B(287),Bz(23,0)]),H(C,[B(288),Bz(24,1)]),H(C,[B(289),G6(2113929216,1)]),H(C,[B(290),Bz(25,1)]),H(C,[B(291),Bz(26,0)]),H(C,[B(292),Bz(27,0)]),H(C,[B(293),Bz(28,1)]),H(C,[B(294),Bz(29,0)]),H(C,[B(295),Bz(30,0)])]);}
var Nw=D(0);
function JZ(){var a=this;C.call(a);a.eD=null;a.eH=null;a.nA=null;a.ps=null;}
var BiT=null;function U_(){U_=N(JZ);A6Z();}
function AL6(){var a=new JZ();Qp(a);return a;}
function ADy(a,b){return b.M(a.nA);}
function A$t(a,b){return b.M(a.ps);}
function Qp(a){U_();J(a);a.eD=S();a.eH=S();a.nA=S();a.ps=S();a.KY();}
function A42(a,b,c){a.eD.I(b.n>=c.n?c.n:b.n,b.o>=c.o?c.o:b.o,b.q>=c.q?c.q:b.q);a.eH.I(b.n<=c.n?c.n:b.n,b.o<=c.o?c.o:b.o,b.q<=c.q?c.q:b.q);((a.nA.M(a.eD)).fA(a.eH)).el(0.5);(a.ps.M(a.eH)).gk(a.eD);return a;}
function A0D(a){a.eD.I(Infinity,Infinity,Infinity);a.eH.I((-Infinity),(-Infinity),(-Infinity));a.nA.I(0.0,0.0,0.0);a.ps.I(0.0,0.0,0.0);return a;}
function AQB(a){return a.DC(a.eD.I(0.0,0.0,0.0),a.eH.I(0.0,0.0,0.0));}
function ATV(a,b,c,d){return a.DC(a.eD.I(HI(a.eD.n,b),HI(a.eD.o,c),HI(a.eD.q,d)),a.eH.I(Ib(a.eH.n,b),Ib(a.eH.o,c),Ib(a.eH.q,d)));}
function HI(b,c){U_();if(b>c)b=c;return b;}
function Ib(b,c){U_();if(b>c)c=b;return c;}
function A6Z(){BiT=S();}
var K4=D(0);
function ABn(){C.call(this);this.no=null;}
function Bc4(a){var b=new ABn();ASs(b,a);return b;}
function ASs(a,b){J(a);a.no=b;}
function AXV(a,b,c){GR();if(c===BiU)return AUY(a.no,b,c);G(U(((((I()).a(B(296))).dD(c)).a(B(297))).b()));}
function A9d(a,b){var c,d;c=new Gd;d=a.no;GR();Hn(c,d,b,BiV);return c;}
function AWu(a,b){var c,d;c=new Gd;d=a.no;GR();Hn(c,d,b,BiU);return c;}
var EN=D(Bx);
var BiW=null;var BiX=null;var BiY=null;function AA1(){AA1=N(EN);AVm();}
function AWL(a,b){var c=new EN();AAc(c,a,b);return c;}
function Ys(){AA1();return BiY.gn();}
function AAc(a,b,c){AA1();Cw(a,b,c);}
function AVm(){BiW=AWL(B(298),0);BiX=AWL(B(299),1);BiY=H(EN,[BiW,BiX]);}
var IQ=D(T);
function BdQ(){var a=new IQ();TP(a);return a;}
function TP(a){Bo(a);}
function Zv(a){return (CR()).bF(48,57);}
var RV=D(T);
function Ba4(){var a=new RV();AF2(a);return a;}
function AF2(a){Bo(a);}
function A0c(a){var b;b=A_X(a);b.be=1;return b;}
function Ek(){var a=this;BC.call(a);a.mh=0;a.qQ=null;a.p9=null;a.p4=0;}
function BfL(a,b){var c=new Ek();J3(c,a,b);return c;}
function J3(a,b,c){CP(a);a.mh=1;a.p9=b;a.p4=c;}
function A9U(a,b){a.k=b;}
function AOa(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=Bc(4);f=0;g=d.J();if(b>=g)return (-1);h=a.vn(b,c,g);i=b+a.mh|0;j=ABH(h);if(j===null){k=e.data;l=1;k[f]=h;}else{l=j.data.length;X(j,0,e,0,l);l=f+l|0;}a:{if(i<g){m=a.vn(i,c,g);while(l<4){if(!A5n(m)){k=e.data;n=l+1|0;k[l]=m;}else{k=(ABH(m)).data;if(k.length!=2){o=e.data;n=l+1|0;o[l]=k[0];}else{o=e.data;m=l+1|0;o[l]=k[0];n=m+1|0;o[m]=k[1];}}i=i+a.mh|0;if(i>=g){l=n;break a;}m=a.vn(i,c,g);l=n;}}}if(l!=a.p4)return (-1);p=0;while(true){if(p>=l)return a.k.e(i,c,d);if
(e.data[p]!=a.p9.data[p])break;p=p+1|0;}return (-1);}
function Ii(a){var b,c;if(a.qQ===null){b=I();c=0;while(c<a.p4){b.qX(Eu(a.p9.data[c]));c=c+1|0;}a.qQ=b.b();}return a.qQ;}
function A4I(a){return (((I()).a(B(300))).a(Ii(a))).b();}
function AKy(a,b,c,d){var e,f,g,h;a.mh=1;if(b>=(d-1|0))e=c.f(b);else{f=b+1|0;e=c.f(b);g=c.f(f);if(GA(e,g)){h=I5([e,g]);e=SQ(h,0);a.mh=2;}}return e;}
function ALh(a,b){var c,d;a:{if(b instanceof Ek){c=b;if(!(Ii(c)).z(Ii(a))){d=0;break a;}}d=1;}return d;}
function A56(a,b){return 1;}
var Z$=D(Ek);
function BaN(a,b){var c=new Z$();AW3(c,a,b);return c;}
function AW3(a,b,c){J3(a,b,c);}
function Jw(){var a=this;C.call(a);a.sj=0;a.t$=null;a.ic=null;a.lK=0;}
function W$(a){J(a);a.ic=null;a.lK=0;}
function AK6(a,b){a.t$=b;}
function N8(a){return a.ic===null?0:1;}
function ANL(a){if(!N8(a))return;a.lK=a.lK+1|0;if(!a.sj)a.M_(a.ic.lj());else a.Mk(a.ic.lj());a.ic=null;}
function AO3(a,b){if(b<0)G(W(B(301)));if(N8(a))a.jh();a.sj=0;a.ic=Bn(a.Mf(a.lK,b));}
function Zd(a,b){if(b!=a.lK)return;if(!a.sj)a.ic=null;if(a.t$!==null)a.t$.fc();}
var Zj=D();
function AHr(){return {};}
function C$(){var a=this;Jy.call(a);a.Bf=null;a.DH=null;}
function GD(a,b,c,d){UW(a,b,c,d);a.Bf=Ci(512);a.DH=BW(512);}
function ARD(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.Bf;e=0;f=0;g=a.DH;a:{while(true){if((e+32|0)>f&&Ca(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Bq(Bb(b)+j|0,i.length);b.zS(d,j,f-j|0);e=0;}if(!Ca(c)){if(!Ca(b)&&e>=f){Bj();k=Bgj;}else{Bj();k=Bgi;}break a;}i=g.data;l=0;m=Bq(Bb(c),i.length);n=Bbp(b,c);k=a.m_(d,e,f,g,l,m,n);e=n.z1;if(k===null&&l==n.qw){Bj();k=Bgj;}j=n.qw;c.PO(g,0,j);if(k!==null)break;}}b.f3(B7(b)-(f-e|0)|0);return k;}
var X3=D(C$);
function BeP(a){var b=new X3();AGt(b,a);return b;}
function AGt(a,b){GD(a,b,1.0,1.0);}
function ATQ(a,b,c,d,e,f,g,h){var i,j,k,l,m;i=null;a:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(l&128){i=BU(1);c=k+(-1)|0;break a;}j=e.data;m=f+1|0;j[f]=l&65535;c=k;f=m;}}h.ek(c);h.dR(f);return i;}
var Yg=D();
function CD(){return Ce(D$(),O(1000000));}
function Gg(){var a=this;C.call(a);a.kg=0;a.kw=0;a.Cv=null;a.gT=null;a.bX=null;a.oX=0;a.sv=null;a.oi=0;a.oj=0;a.ok=0;a.zG=0.0;a.m7=null;a.pc=null;a.zl=null;a.J4=null;a.it=null;a.kk=null;}
var BiZ=null;var Bi0=0;var Bi1=null;function FD(){FD=N(Gg);ALq();}
function APk(a){var b=new Gg();O_(b,a);return b;}
function OY(a,b,c){var d=new Gg();T7(d,a,b,c);return d;}
function O_(a,b){var c,d,e;FD();J(a);a.oi=255;a.oj=255;a.ok=255;a.m7=Jm(a.oi,a.oj,a.ok,a.zG);Gv();a.pc=Bi2;SI();a.zl=Bi3;c=b;d=c.ru();e=c.fR.iL.W(d);Mb(a,(-1),(-1),e,null);if(a.it!==null)return;G(U(((((I()).a(B(302))).a(b.ru())).a(B(303))).b()));}
function T7(a,b,c,d){FD();J(a);a.oi=255;a.oj=255;a.ok=255;a.m7=Jm(a.oi,a.oj,a.ok,a.zG);Gv();a.pc=Bi2;SI();a.zl=Bi3;Mb(a,b,c,null,null);}
function Mb(a,b,c,d,e){var f;if(e!==null){a.kk=e;a.kg=e.getWidth();a.kw=e.getHeight();}else if(d===null){a.kg=b;a.kw=c;}else{a.it=d;a.kg=d.width;a.kw=d.height;}AX$();a.Cv=Bi4;a.sv=MK(4);FD();f=Bi0;Bi0=f+1|0;a.oX=f;a.sv.KU(0,a.oX);BiZ.x(Bn(a.oX),a);}
function Rq(a){var b,c,d,e,f;b=(El()).hs();c=b.pe();d=c.createElement("canvas");a.gT=d;e=a.gT;f=a.kg;e.width=f;e=a.gT;f=a.kw;e.height=f;a.bX=a.gT.getContext("2d");e=a.bX;f=$rt_ustr((G2()).b());e.globalCompositeOperation=f;}
function G2(){FD();Ix();return Bi5;}
function Jm(b,c,d,e){FD();return ((((((((((I()).a(B(304))).j(b)).a(B(23))).j(c)).a(B(23))).j(d)).a(B(23))).cB(e)).a(B(24))).b();}
function ADx(a,b){var c,d;a.pc=b;GZ(a);c=a.bX;d=$rt_ustr((G2()).b());c.globalCompositeOperation=d;}
function AGW(a){return a.Cv;}
function AKI(a){return 6408;}
function ANi(a){return 6408;}
function AQc(a){return 5121;}
function AJi(a){return a.kg;}
function AMJ(a){return a.kw;}
function A6P(a){return a.sv;}
function AXp(a){FD();BiZ.Iz(Bn(a.oX));}
function ADO(a){GZ(a);return a.gT;}
function GZ(a){var b,c;if(a.gT===null){Rq(a);if(a.it!==null){b=a.bX;Ix();c=$rt_ustr(E6(Bi6));b.globalCompositeOperation=c;b=a.bX;c=a.it;b.drawImage(c,0.0,0.0);b=a.bX;c=$rt_ustr(E6(G2()));b.globalCompositeOperation=c;}if(a.kk!==null){c=a.bX;Ix();b=$rt_ustr(E6(Bi6));c.globalCompositeOperation=b;b=a.bX;c=a.kk;b.drawImage(c,0.0,0.0);b=a.bX;c=$rt_ustr(E6(G2()));b.globalCompositeOperation=c;}}}
function AFk(a){return a.gT===null&&a.it!==null?1:0;}
function AQX(a){return a.it;}
function A4R(a){return a.gT===null&&a.kk!==null?1:0;}
function A97(a){return a.kk;}
function AYO(a,b,c,d,e,f,g,h){var i;i=b.sS();Oj(a,i,e,f,g,h,c,d,g,h);}
function APa(a,b,c,d,e,f,g,h,i,j){Oj(a,b.sS(),c,d,e,f,g,h,i,j);}
function Oj(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u;GZ(a);k=a.pc;Gv();if(k===Bi7){l=a.bX;k=$rt_ustr(Bi1);l.fillStyle=k;l=a.bX;k=$rt_ustr(Bi1);l.strokeStyle=k;l=a.bX;k="destination-out";l.globalCompositeOperation=k;a.bX.beginPath();l=a.bX;m=g;n=h;o=i;p=j;l.rect(m,n,o,p);AA1();RM(a,BiW);a.bX.closePath();l=a.bX;k=$rt_ustr(a.m7);l.fillStyle=k;q=a.bX;l=$rt_ustr(a.m7);q.strokeStyle=l;q=a.bX;Ix();l=$rt_ustr(E6(Bi5));q.globalCompositeOperation=l;}if(e&&f&&i&&j){l=a.bX;m=c;n=d;o=e;p=f;r=g;s=h;t=i;u=j;l.drawImage(b,
m,n,o,p,r,s,t,u);}a.J4=null;}
function RM(a,b){a:{GZ(a);Bfd();switch(Bi8.data[BD(b)]){case 1:break;case 2:a.bX.stroke();break a;default:break a;}a.bX.fill();}}
function ALq(){BiZ=C5();Bi0=0;Bi1=Jm(255,255,255,1.0);}
function HD(){BI.call(this);this.Iw=null;}
var Bi9=Ba;var Bi$=Ba;function ABy(){ABy=N(HD);A$u();}
function A$u(){Bi9=BO(B(305));Bi$=Bi9;}
var ACz=D(Cy);
function BcD(){var a=new ACz();AUa(a);return a;}
function AUa(a){Et(a,(-1));}
function AXP(a,b,c,d){return b;}
function A1J(a){return B(306);}
var KQ=D(0);
var JC=D(BC);
function Bce(a,b){var c=new JC();VT(c,a,b);return c;}
function VT(a,b,c){Sv(a,b,c);}
function AOc(a,b,c,d){var e,f,g,h,i;e=d.et(a.bm);d.by(a.bm,b);f=a.bQ.de();g=0;while(true){if(g>=f){d.by(a.bm,e);return (-1);}h=a.bQ.l(g);i=h.e(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function AMb(a){return B(307);}
function A6s(a,b){var c;c=b.et(a.bm);return !c?0:1;}
var Dp=D(JC);
function BcP(a,b){var c=new Dp();Gc(c,a,b);return c;}
function Gc(a,b,c){VT(a,b,c);}
function AYv(a,b,c,d){var e,f,g,h,i;e=d.et(a.bm);d.by(a.bm,b);f=a.bQ.de();g=0;while(g<f){h=a.bQ.l(g);i=h.e(b,c,d);if(i>=0)return a.k.e(a.dm.dM(),c,d);g=g+1|0;}d.by(a.bm,e);return (-1);}
function A53(a,b){a.k=b;}
function ADX(a){return B(307);}
var Vw=D(Dp);
function Bdi(a,b){var c=new Vw();AI3(c,a,b);return c;}
function AI3(a,b,c){Gc(a,b,c);}
function AOq(a,b,c,d){var e,f,g,h;e=a.bQ.de();f=0;while(f<e){g=a.bQ.l(f);h=g.e(b,c,d);if(h>=0)return a.k.e(b,c,d);f=f+1|0;}return (-1);}
function ARK(a,b){return 0;}
function A9P(a){return B(308);}
var Gx=D(0);
var Ps=D();
function BdH(){var a=new Ps();A5g(a);return a;}
function A5g(a){J(a);}
function Ie(){C.call(this);this.qa=null;}
function SA(a){J(a);a.qa=Bp();}
function A1N(a,b){var c,d,e;c=b.kM;if(c!==null&&c.uF(b))return c;d=a.qa.bZ();while(true){if(!d.bC()){e=a.F2(b);if(e.uF(b)){e.D9();a.qa.F(e);return e;}G(U(B(309)));}e=d.bz();if(e.uF(b))break;}return e;}
function Pr(){Ie.call(this);this.wf=null;}
function Bi_(a){var b=new Pr();WP(b,a);return b;}
function Bey(){var a=new Pr();A9R(a);return a;}
function WP(a,b){SA(a);if(b===null)b=Bca();a.wf=b;}
function A9R(a){WP(a,null);}
function AR7(a,b){return Bal(b,a.wf);}
var ABs=D(Dp);
function Bcy(a,b){var c=new ABs();AIf(c,a,b);return c;}
function AIf(a,b,c){Gc(a,b,c);}
function AFb(a,b,c,d){var e,f,g;e=a.bQ.de();f=0;while(true){if(f>=e)return a.k.e(b,c,d);g=a.bQ.l(f);if(g.e(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A71(a,b){return 0;}
function AI0(a){return B(310);}
var Ld=D(0);
function Ho(){var a=this;C.call(a);a.Ce=null;a.o$=0;a.oN=0;a.ks=null;a.db=null;a.C8=0;a.jK=0;}
var Bja=0;function BdO(a,b,c,d){var e=new Ho();AXM(e,a,b,c,d);return e;}
function AXM(a,b,c,d,e){J(a);a.o$=0;a.oN=0;a.jK=0;a.Ce=b;a.db=c;a.ks=d;a.C8=e;if(a.db!==null){a.db=NY(a,a.db);a.o$=a.db.bo();a.oN=a.db.bl();if(d===null)a.ks=a.db.f7();}}
function AUs(a){return a.jK;}
function AXN(a){if(a.jK)G(U(B(311)));if(a.db===null){a.db=NY(a,APk(a.Ce));a.o$=a.db.bo();a.oN=a.db.bl();if(a.ks===null)a.ks=a.db.f7();}a.jK=1;}
function NY(a,b){var c,d,e,f,g;a:{if(BhM===null&&Bja){c=b.bo();d=b.bl();e=IV(c);f=IV(d);if(c!=e)break a;if(d!=f)break a;}return b;}g=OY(e,f,b.f7());g.y_(b,0,0,0,0,c,d);b.iw();return g;}
function AMh(a){var b;if(!a.jK)G(U(B(312)));a.jK=0;b=a.db;a.db=null;return b;}
function A1D(a){return 1;}
function ALo(a){return a.o$;}
function AX3(a){return a.oN;}
function AH6(a){return a.ks;}
function AVr(a){return a.C8;}
function AHe(a){return 1;}
function A3T(a){O3();return BhC;}
function AYj(a,b){G(U(B(313)));}
var Hy=D(Bm);
function Bfh(){var a=new Hy();R2(a);return a;}
function R2(a){Cx(a);}
var ACE=D(Hy);
function C7(){var a=new ACE();A1G(a);return a;}
function A1G(a){R2(a);}
function NZ(){var a=this;BI.call(a);a.Fd=0;a.Ka=0;a.KR=0;a.HK=0.0;}
var Bjb=Ba;function GO(){GO=N(NZ);AN7();}
function Uo(b){GO();return Du(Br(b,Bjb),b)?0:1;}
function AN7(){Bjb=BO(B(314));}
var ZU=D();
function AAs(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(CK());}return b.data.length;}
function Lt(b,c){if(b===null)G(IJ());if(b===F($rt_voidcls()))G(CK());if(c<0)G(A9b());return ASx(b.zY(),c);}
function ASx(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function DN(){C.call(this);this.bk=null;}
function HV(a){J(a);a.bk=CO(0.0,0.0,0.0,1.0);}
function Oy(){var a=this;DN.call(a);a.eB=null;a.dx=0.0;}
function Bet(){var a=new Oy();AKd(a);return a;}
function AKd(a){HV(a);a.eB=S();}
function AKj(a,b){return a.HQ(b.bk,b.eB,b.dx);}
function ANN(a,b,c,d){if(b!==null)a.bk.eP(b);if(c!==null)a.eB.M(c);a.dx=d;return a;}
function AE8(a,b,c,d,e,f,g,h){a.bk.hT(b,c,d,1.0);a.eB.I(e,f,g);a.dx=h;return a;}
function AXc(a,b){var c;a:{b:{if(b!==null){if(b===a)break b;if(a.bk.z(b.bk)&&a.eB.z(b.eB)&&a.dx===b.dx)break b;}c=0;break a;}c=1;}return c;}
var AAf=D();
function Bef(){var a=new AAf();AFC(a);return a;}
function AFC(a){J(a);}
function Uz(){C.call(this);this.N=null;}
function BeU(a){var b=new Uz();AER(b,a);return b;}
function AER(a,b){J(a);a.N=Bek(4);a.N.IX(b);}
function AKt(a,b){var c,d,e,f,$$je;c=a.N.fZ();a:{try{d=0;e=a.N.h;}catch($$e){$$je=R($$e);f=$$je;break a;}b:{try{while(d<e){if(c.data[d].lE(b))break b;d=d+1|0;}}catch($$e){$$je=R($$e);f=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);f=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(f);}
function ATP(a,b){var c,d,e,f,$$je;c=a.N.fZ();a:{try{d=0;e=a.N.h;}catch($$e){$$je=R($$e);f=$$je;break a;}b:{try{while(d<e){if(c.data[d].oC(b))break b;d=d+1|0;}}catch($$e){$$je=R($$e);f=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);f=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(f);}
function AT9(a,b){var c,d,e,f,$$je;c=a.N.fZ();a:{try{d=0;e=a.N.h;}catch($$e){$$je=R($$e);f=$$je;break a;}b:{try{while(d<e){if(c.data[d].lp(b))break b;d=d+1|0;}}catch($$e){$$je=R($$e);f=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);f=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(f);}
function AEn(a,b,c,d,e){var f,g,h,i,$$je;f=a.N.fZ();a:{try{g=0;h=a.N.h;}catch($$e){$$je=R($$e);i=$$je;break a;}b:{try{while(g<h){if(f.data[g].im(b,c,d,e))break b;g=g+1|0;}}catch($$e){$$je=R($$e);i=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);i=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(i);}
function AP_(a,b,c,d,e){var f,g,h,i,$$je;f=a.N.fZ();a:{try{g=0;h=a.N.h;}catch($$e){$$je=R($$e);i=$$je;break a;}b:{try{while(g<h){if(f.data[g].hO(b,c,d,e))break b;g=g+1|0;}}catch($$e){$$je=R($$e);i=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);i=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(i);}
function AIu(a,b,c,d){var e,f,g,h,$$je;e=a.N.fZ();a:{try{f=0;g=a.N.h;}catch($$e){$$je=R($$e);h=$$je;break a;}b:{try{while(f<g){if(e.data[f].i8(b,c,d))break b;f=f+1|0;}}catch($$e){$$je=R($$e);h=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);h=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(h);}
function ARJ(a,b,c){var d,e,f,g,$$je;d=a.N.fZ();a:{try{e=0;f=a.N.h;}catch($$e){$$je=R($$e);g=$$je;break a;}b:{try{while(e<f){if(d.data[e].m8(b,c))break b;e=e+1|0;}}catch($$e){$$je=R($$e);g=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);g=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(g);}
function A3E(a,b,c){var d,e,f,g,$$je;d=a.N.fZ();a:{try{e=0;f=a.N.h;}catch($$e){$$je=R($$e);g=$$je;break a;}b:{try{while(e<f){if(d.data[e].oG(b,c))break b;e=e+1|0;}}catch($$e){$$je=R($$e);g=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);g=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(g);}
var FL=D(FS);
function Bjc(a){var b=new FL();KF(b,a);return b;}
function KF(a,b){OU(a,b);}
var Z8=D(FL);
function Bjd(a){var b=new Z8();AFS(b,a);return b;}
function AFS(a,b){KF(a,b);}
var Po=D(T);
function Bdl(){var a=new Po();AFU(a);return a;}
function AFU(a){Bo(a);}
function AHo(a){var b;b=Bei(a);b.be=1;return b;}
var IR=D(0);
var Cz=D(0);
var IE=D(0);
var Jb=D();
function Ui(a){J(a);}
function AY_(a,b){var c,d,e,f;c=b.data;d=a.de();e=c.length;if(e<d)b=Lt((Cj(b)).gp(),d);else while(d<e){c[d]=null;d=d+1|0;}d=0;f=a.fr();while(f.bC()){c=b.data;e=d+1|0;c[d]=f.bz();d=e;}return b;}
var E9=D();
function Kv(a){J(a);}
function A8p(a,b,c,d){var e,f,g,h;e=0;while(e<d){f=a.A_();if(f<0){if(!e)e=(-1);return e;}g=b.data;h=c+1|0;g[c]=f<<24>>24;e=e+1|0;c=h;}if(d<=0)d=(-1);return d;}
function A0P(a){}
function ABc(){var a=this;E9.call(a);a.tC=null;a.h4=0;a.H0=0;a.qH=0;}
function Bje(a,b,c){var d=new ABc();ACQ(d,a,b,c);return d;}
function Xu(a){var b=new ABc();AFg(b,a);return b;}
function ACQ(a,b,c,d){Kv(a);a.tC=b;a.h4=c;a.H0=c;a.qH=c+d|0;}
function AFg(a,b){ACQ(a,b,0,b.data.length);}
function AXE(a){var b,c,d;if(a.h4>=a.qH)b=(-1);else{c=a.tC.data;d=a.h4;a.h4=d+1|0;b=c[d]&255;}return b;}
function A92(a,b,c,d){var e,f,g,h,i,j;e=Bq(d,a.qH-a.h4|0);f=0;while(f<e){g=b.data;h=c+1|0;i=a.tC.data;j=a.h4;a.h4=j+1|0;g[c]=i[j];f=f+1|0;c=h;}if(e<=0)e=(-1);return e;}
function AJP(a){}
var Ts=D();
function ADt(b,c){var d,e,f,g,h,i,j,k;if(!b)return B(315);d=1<<c;e=d-1|0;f=(((32-Mu(b)|0)+c|0)-1|0)/c|0;g=BW(f);h=Cf(f-1|0,c);i=0;while(h>=0){j=g.data;k=i+1|0;j[i]=FQ(b>>>h&e,d);h=h-c|0;i=k;}return Mf(g);}
var IM=D(CS);
function AAa(a,b,c,d){FJ(a,b);a.C=c;a.bb=d;}
function AKJ(b,c,d){return Bem(0,b.data.length,b,c,c+d|0,0);}
function A0o(b){return AKJ(b,0,b.data.length);}
function Tv(a){FZ(a);return a;}
function A33(a){return Tv(a);}
function JH(){var a=this;C.call(a);a.jl=null;a.u2=0.0;a.vh=0.0;a.Au=0;a.Av=0;a.ys=0;a.ED=0;a.Hn=null;}
function Th(a){J(a);a.Hn=S();}
function A8a(a,b){Zo(a.Au,a.Av,a.ys,a.ED);a.jl.ku=a.u2;a.jl.mb=a.vh;if(b)a.jl.cp.I(a.u2/2.0,a.vh/2.0,0.0);a.jl.f5();}
function A7W(a){return a.jl;}
function AI2(a,b){a.jl=b;}
function AG7(a,b,c){a.u2=b;a.vh=c;}
function AW5(a,b,c,d,e){a.Au=b;a.Av=c;a.ys=d;a.ED=e;}
function CF(){Db.call(this);this.bv=null;}
function Bbt(a,b,c){var d=new CF();E4(d,a,b,c);return d;}
function E4(a,b,c,d){FW(a,b,c,d);a.bv=b;}
function AUD(a,b,c,d){var e,f;e=0;a:{while((b+a.bv.cg()|0)<=d.J()){f=a.bv.bH(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.k.e(b,c,d);if(f>=0)break;b=b-a.bv.cg()|0;e=e+(-1)|0;}return f;}
function AXx(a){return B(316);}
var Ed=D(CF);
function BaZ(a,b,c){var d=new Ed();Np(d,a,b,c);return d;}
function Np(a,b,c,d){E4(a,b,c,d);}
function A29(a,b,c,d){var e;e=a.Y.e(b,c,d);if(e<0)e=a.k.e(b,c,d);return e;}
function ATY(a,b){LJ(a,b);a.Y.Q(b);}
var TT=D(Ed);
function BcJ(a,b,c){var d=new TT();A94(d,a,b,c);return d;}
function A94(a,b,c,d){Np(a,b,c,d);}
function AM3(a,b,c,d){var e;if((b+a.bv.cg()|0)<=d.J()){e=a.bv.bH(b,c);if(e>=1)b=b+e|0;}return a.k.e(b,c,d);}
var Hv=D(0);
var V=D();
function BL(a){J(a);}
function AIo(a,b,c){return 0;}
function ABm(){var a=this;C.call(a);a.ff=null;a.ip=null;a.lz=0;a.lt=null;a.oL=0;a.dh=0;a.j2=null;a.b9=null;}
function Bd0(){var a=new ABm();ALO(a);return a;}
function ALO(a){J(a);a.lz=7;a.dh=0;a.lt=Y(C,256);a.j2=Bc(40);a.b9=Bc(40);}
function AUF(a,b,c,d,e){var f,g,h,i,j,k,l,m,n;f=b.data;a.dh=0;AKD(f.length,d,e);g=e-d|0;if(g<2)return;if(g<32){h=UB(b,d,e,c);AB3(b,d,e,d+h|0,c);return;}a.ff=b;a.ip=c;a.oL=0;i=AUW(g);while(true){j=UB(b,d,e,c);if(j>=i)k=j;else{k=g>i?i:g;AB3(b,d,d+k|0,d+j|0,c);}ZW(a,d,k);XX(a);d=d+k|0;g=g-k|0;if(!g)break;}TK(a);a.ff=null;a.ip=null;l=a.lt;m=0;n=a.oL;while(m<n){l.data[m]=null;m=m+1|0;}}
function AB3(b,c,d,e,f){var g,h,i,j,k,l;if(e==c)e=e+1|0;while(e<d){g=b.data;h=g[e];i=e;j=c;while(j<i){k=(j+i|0)>>>1;if(f.cV(h,g[k])<0)i=k;else j=k+1|0;}a:{b:{l=e-j|0;switch(l){case 1:break b;case 2:g[j+2|0]=g[j+1|0];break b;default:}X(b,j,b,j+1|0,l);break a;}g[j+1|0]=g[j];}g[j]=h;e=e+1|0;}}
function UB(b,c,d,e){var f,g,h;f=c+1|0;if(f==d)return 1;a:{g=b.data;h=f+1|0;if(e.cV(g[f],g[c])>=0)while(h<d){if(e.cV(g[h],g[h-1|0])<0)break a;h=h+1|0;}else{while(h<d&&e.cV(g[h],g[h-1|0])<0){h=h+1|0;}A67(b,c,h);}}return h-c|0;}
function A67(b,c,d){var e,f,g,h,i;e=d+(-1)|0;while(c<e){f=b.data;g=f[c];h=c+1|0;f[c]=f[e];i=e+(-1)|0;f[e]=g;c=h;e=i;}}
function AUW(b){var c;c=0;while(b>=32){c=c|b&1;b=b>>1;}return b+c|0;}
function ZW(a,b,c){a.j2.data[a.dh]=b;a.b9.data[a.dh]=c;a.dh=a.dh+1|0;}
function XX(a){var b;a:{while(true){if(a.dh<=1)break a;b=a.dh-2|0;if(!(b>=1&&a.b9.data[b-1|0]<=(a.b9.data[b]+a.b9.data[b+1|0]|0))&&!(b>=2&&a.b9.data[b-2|0]<=(a.b9.data[b]+a.b9.data[b-1|0]|0))){if(a.b9.data[b]>a.b9.data[b+1|0])break;}else if(a.b9.data[b-1|0]<a.b9.data[b+1|0])b=b+(-1)|0;MZ(a,b);}}}
function TK(a){var b;while(a.dh>1){b=a.dh-2|0;if(b>0&&a.b9.data[b-1|0]<a.b9.data[b+1|0])b=b+(-1)|0;MZ(a,b);}}
function MZ(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.j2.data[b];d=a.b9.data[b];e=a.j2.data;f=b+1|0;g=e[f];h=a.b9.data[f];a.b9.data[b]=d+h|0;if(b==(a.dh-3|0)){i=a.j2.data;e=a.j2.data;j=b+2|0;i[f]=e[j];a.b9.data[f]=a.b9.data[j];}a.dh=a.dh-1|0;k=Nx(a.ff.data[g],a.ff,c,d,0,a.ip);j=c+k|0;l=d-k|0;if(!l)return;m=JR(a.ff.data[(j+l|0)-1|0],a.ff,g,h,h-1|0,a.ip);if(!m)return;if(l>m)Un(a,j,l,g,m);else V_(a,j,l,g,m);}
function JR(b,c,d,e,f,g){var h,i,j,k,l,m,n,o;h=c.data;i=0;j=1;k=d+f|0;if(g.cV(b,h[k])>0){l=e-f|0;while(true){m=B8(j,l);if(m>=0)break;if(g.cV(b,h[k+j|0])<=0)break;n=(j<<1)+1|0;if(n>0){i=j;j=n;continue;}n=l;i=j;j=n;}if(m<=0)l=j;n=i+f|0;k=l+f|0;}else{l=f+1|0;while(true){n=B8(j,l);if(n>=0)break;if(g.cV(b,h[k-j|0])>0)break;n=(j<<1)+1|0;if(n>0){i=j;j=n;continue;}n=l;i=j;j=n;}if(n<=0)l=j;n=f-l|0;k=f-i|0;}n=n+1|0;while(n<k){o=n+((k-n|0)>>>1)|0;if(g.cV(b,h[d+o|0])>0){n=o+1|0;o=k;}k=o;}return k;}
function Nx(b,c,d,e,f,g){var h,i,j,k,l,m,n,o;h=c.data;i=1;j=0;k=d+f|0;if(g.cV(b,h[k])>=0){l=e-f|0;while(true){m=B8(i,l);if(m>=0)break;if(g.cV(b,h[k+i|0])<0)break;m=(i<<1)+1|0;if(m>0){j=i;i=m;continue;}m=l;j=i;i=m;}if(m<=0)l=i;m=j+f|0;n=l+f|0;}else{l=f+1|0;while(true){m=B8(i,l);if(m>=0)break;if(g.cV(b,h[k-i|0])>=0)break;m=(i<<1)+1|0;if(m>0){j=i;i=m;continue;}m=l;j=i;i=m;}if(m<=0)l=i;m=f-l|0;n=f-j|0;}m=m+1|0;while(m<n){o=m+((n-m|0)>>>1)|0;if(g.cV(b,h[d+o|0])<0)n=o;else m=o+1|0;}return n;}
function V_(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;f=a.ff;g=f.data;h=Oi(a,c);X(f,b,h,0,c);i=0;j=b+1|0;k=d+1|0;g[b]=g[d];l=e+(-1)|0;if(!l){X(h,i,f,j,c);return;}if(c==1){m=h.data;X(f,k,f,j,l);g[j+l|0]=m[i];return;}n=a.ip;o=a.lz;a:{b:while(true){p=0;q=0;r=j;s=k;t=i;while(true){m=h.data;if(n.cV(g[s],m[t])<0){j=r+1|0;k=s+1|0;g[r]=g[s];q=q+1|0;p=0;l=l+(-1)|0;if(!l)break a;s=k;i=t;}else{j=r+1|0;i=t+1|0;g[r]=m[t];p=p+1|0;q=0;c=c+(-1)|0;if(c==1){t=i;k=s;break a;}}if((p|q)>=o)break;r=j;t=i;}k=s;while(true){r
=Nx(g[k],h,i,c,0,n);if(!r){s=j;t=i;}else{X(h,i,f,j,r);j=j+r|0;t=i+r|0;c=c-r|0;if(c<=1)break a;s=j;}j=s+1|0;u=k+1|0;g[s]=g[k];l=l+(-1)|0;if(!l){k=u;break a;}s=JR(m[t],f,u,l,0,n);if(!s){v=j;k=u;}else{X(f,u,f,j,s);j=j+s|0;k=u+s|0;l=l-s|0;if(!l)break b;v=j;}j=v+1|0;i=t+1|0;g[v]=m[t];c=c+(-1)|0;if(c==1){t=i;break a;}o=o+(-1)|0;if(!((r<7?0:1)|(s<7?0:1)))break;}if(o<0)o=0;o=o+2|0;}}if(o<1)o=1;a.lz=o;if(c==1){X(f,k,f,j,l);g[j+l|0]=m[t];}else{if(!c)G(W(B(317)));X(h,t,f,j,c);}}
function Un(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;f=a.ff;g=f.data;h=Oi(a,e);X(f,d,h,0,e);i=(b+c|0)-1|0;j=e-1|0;k=(d+e|0)-1|0;l=k+(-1)|0;m=i+(-1)|0;g[k]=g[i];n=c+(-1)|0;if(!n){X(h,0,f,l-j|0,e);return;}if(e==1){o=h.data;p=l-n|0;q=m-n|0;X(f,q+1|0,f,p+1|0,n);g[p]=o[j];return;}r=a.ip;s=a.lz;a:{b:while(true){t=0;u=0;v=l;while(true){o=h.data;if(r.cV(o[j],g[m])<0){l=v+(-1)|0;q=m+(-1)|0;g[v]=g[m];t=t+1|0;u=0;n=n+(-1)|0;if(!n)break a;m=q;p=j;}else{l=v+(-1)|0;p=j+(-1)|0;g[v]=o[j];u=u+1|0;t=0;e=e+(-1)|0;if
(e==1){q=m;j=p;break a;}}if((t|u)>=s)break;v=l;j=p;}j=p;while(true){v=n-Nx(o[j],f,b,n,n-1|0,r)|0;if(!v){p=l;q=m;}else{l=l-v|0;q=m-v|0;n=n-v|0;X(f,q+1|0,f,l+1|0,v);if(!n)break a;p=l;}l=p+(-1)|0;m=j+(-1)|0;g[p]=o[j];e=e+(-1)|0;if(e==1){j=m;break a;}w=e-JR(g[q],h,0,e,e-1|0,r)|0;if(!w){p=l;j=m;}else{l=l-w|0;j=m-w|0;e=e-w|0;X(h,j+1|0,f,l+1|0,w);if(e<=1)break b;p=l;}l=p+(-1)|0;m=q+(-1)|0;g[p]=g[q];n=n+(-1)|0;if(!n){q=m;break a;}s=s+(-1)|0;if(!((v<7?0:1)|(w<7?0:1)))break;}if(s<0)s=0;s=s+2|0;}}if(s<1)s=1;a.lz=s;if(e
==1){p=l-n|0;q=q-n|0;X(f,q+1|0,f,p+1|0,n);g[p]=o[j];}else{if(!e)G(W(B(317)));X(h,0,f,l-(e-1|0)|0,e);}}
function Oi(a,b){var c,d;a.oL=Bf(a.oL,b);if(a.lt.data.length<b){c=b|b>>1;c=c|c>>2;c=c|c>>4;c=c|c>>8;c=c|c>>16;c=c+1|0;if(c>=0)b=Bq(c,a.ff.data.length>>>1);d=Y(C,b);a.lt=d;}return a.lt;}
function AKD(b,c,d){if(c<=d){if(c<0)G(AJV(c));if(d<=b)return;G(AJV(d));}G(W(((((((I()).a(B(318))).j(c)).a(B(319))).j(d)).a(B(24))).b()));}
var Xw=D();
function Be2(b){var c,d,e,f,$$je;a:{try{c=Bcm(B(320));d=AOf();if(d!==null){e=d;ABk(new H0,e,c);}}catch($$e){$$je=R($$e);if($$je instanceof C_){f=$$je;break a;}else{throw $$e;}}return;}f.Ft();G(f);}
function AOf(){return Be0();}
var Nj=D(0);
var Hf=D(Bm);
var GE=D(BR);
var Bjf=null;function AJy(){AJy=N(GE);AU2();}
function Bjg(){var a=new GE();Jg(a);return a;}
function Ba5(a){var b=new GE();Pj(b,a);return b;}
function Jg(a){AJy();B$(a);a.dZ(X1(),1);}
function Pj(a,b){AJy();B$(a);}
function AU2(){Bjf=Ba5(0);}
function X1(){var jsObj=new Bullet.btCollisionWorld();return Bullet.getPointer(jsObj);}
var FT=D(GE);
var Bjh=null;function AGY(){AGY=N(FT);AIh();}
function BdY(a){var b=new FT();Tj(b,a);return b;}
function Bji(){var a=new FT();HL(a);return a;}
function Tj(a,b){AGY();Jg(a);}
function HL(a){AGY();Jg(a);}
function AZ7(a,b){return U4(a.bY,b);}
function AYG(a,b){var c,d;c=a.bY;d=b.dd();Ut(c,d);}
function AXi(a,b){var c,d;c=a.bY;d=b.dd();Zs(c,d);}
function ASE(a,b){var c,d,e;Fl();Gq(b,Bgq);c=Bgq;d=a.bY;e=c.dd();Qe(d,e);}
function AIh(){Bjh=BdY(0);}
function U4(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btDynamicsWorld);var returnedJSObj=jsObj.stepSimulation(c);return returnedJSObj;}
function Ut(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btDynamicsWorld);jsObj.addRigidBody(c);}
function Zs(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btDynamicsWorld);jsObj.removeRigidBody(c);}
function Qe(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btDynamicsWorld);jsObj.setGravity(c);}
var GB=D();
var Bjj=null;function UH(a){J(a);}
function DT(){return Bjj;}
function AL0(b){Bjj=b;}
var Xa=D();
function Ni(b){var c,d,e,f,g;if(b===null)return null;c=b.data;d=c.length;e=new Array(d);f=0;while(f<d){g=c[f];e[f]=g;f=f+1|0;}return e;}
function BV(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Gk(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function OV(){Q.call(this);this.QH=null;}
function BdV(a){var b=new OV();A6v(b,a);return b;}
function A6v(a,b){a.QH=b;Be(a);}
function AGQ(a,b){return Us(b);}
function CZ(){var a=this;C.call(a);a.Ar=null;a.MR=null;}
function GG(a,b,c){var d,e,f,g;d=c.data;J(a);LC(b);e=d.length;f=0;while(f<e){g=d[f];LC(g);f=f+1|0;}a.Ar=b;a.MR=c.gn();}
function LC(b){var c,d;if(b.bN())G(Yd(b));if(!AAQ(b.f(0)))G(Yd(b));c=1;while(c<b.i()){a:{d=b.f(c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AAQ(d))break a;else G(Yd(b));}}c=c+1|0;}}
function AAQ(b){var c;a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}c=1;break a;}c=0;}return c;}
function OW(b){var c;if(b===null)G(W(B(321)));LC(b);c=(Vg()).W(b.FP());if(c!==null)return c;G(Bfp(b));}
function Z4(a){return a.Ar;}
function ZD(a,b){var c,d,e,$$je;a:{try{c=a.lI();Dg();d=Bgg;d=Oa(c,d);c=Bgg;d=Le(d,c);d=WO(d,b);}catch($$e){$$je=R($$e);if($$je instanceof DY){e=$$je;break a;}else{throw $$e;}}return d;}G(AZu(B(322),e));}
function UE(a,b){var c,d,e,$$je;a:{try{c=a.mt();Dg();d=Bgg;d=K2(c,d);c=Bgg;d=LQ(d,c);d=XO(d,b);}catch($$e){$$je=R($$e);if($$je instanceof DY){e=$$je;break a;}else{throw $$e;}}return d;}G(AZu(B(322),e));}
function RJ(){var a=this;CZ.call(a);a.uG=0;a.sY=0;}
function RA(a,b,c){var d=new RJ();AE3(d,a,b,c);return d;}
function AE3(a,b,c,d){GG(a,b,Y(BM,0));a.uG=c;a.sY=d;}
function AKp(a){return BcH(a,a.uG,a.sY);}
function ADP(a){return BcE(a,a.uG,a.sY);}
var Cl=D();
function BbH(){var a=new Cl();D_(a);return a;}
function D_(a){J(a);}
function AQf(a,b){}
function AVV(a,b){}
function PA(){var a=this;Cl.call(a);a.Ez=null;a.rg=null;}
function A_s(a,b){var c=new PA();AYE(c,a,b);return c;}
function AYE(a,b,c){a.rg=b;a.Ez=c;D_(a);}
function A30(a,b){}
function AYY(a,b){(Eh()).gg((((I()).a(B(323))).a(a.Ez)).b());}
function AM0(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=c.Fs(B(324));e=d.data;f=new E5;g=e.length;On(f,g);h=0;while(true){if(h>=g){i=0;while(i<f.h){j=f.l(i);if(a.rg.KB(j.su)){j.JU=j.BG;j.JF=1;}else a.rg.P4(j.su,j.DR,j.xt,Bax(a));i=i+1|0;}return 0;}k=e[h];l=k.Fs(B(13));m=l.data;if(m.length!=4)break;SL();n=Bjk;if(m[0].z(B(325)))n=Bjl;if(m[0].z(B(326)))n=Bjm;if(m[0].z(B(327)))n=Bjn;if(m[0].z(B(135)))n=Bjo;o=AB9(m[2]);if(n===Bjn&&!(Ea()).Ow())o=Ba;f.F(BdB(m[1].My(),n,o,m[3]));h=h+1|0;}G(U(B(328)));}
function AFw(a,b,c){return a.IY(b,c);}
var PQ=D();
function A9V(b){var c,d,e,f,g,h,i,j,k;c=BbC(b.rv());d=Wp(c);e=Bc(d*2|0);f=0;g=0;h=0;i=0;while(i<d){j=e.data;g=g+Pa(c)|0;h=h+Pa(c)|0;k=f+1|0;j[f]=g;f=k+1|0;j[k]=h;i=i+1|0;}return e;}
function I$(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function ATX(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=Y(Mr,16384);d=Ci(16384);e=0;f=0;g=0;h=0;while(h<b.i()){i=I$(b.f(h));if(i==64){h=h+1|0;i=I$(b.f(h));j=0;k=1;l=0;while(l<3){h=h+1|0;m=I$(b.f(h));j=j|Cf(k,m);k=k*64|0;l=l+1|0;}}else if(i<32)j=1;else{i=(i-32|0)<<24>>24;h=h+1|0;j=I$(b.f(h));}if(!i&&j>=128){if(e>0){n=c.data;o=f+1|0;n[f]=AIm(g,g+e|0,Of(d,e));f=o;}g=g+(e+j|0)|0;e=0;}else{p=d.data;o=e+j|0;if(o<p.length)q=f;else{n=c.data;q=f+1|0;n[f]=AIm(g,g+e|0,Of(d,e));g=g+o|0;e=0;}while(true){o=j+(-1)|0;if(j<=0)break;r
=e+1|0;p[e]=i;e=r;j=o;}f=q;}h=h+1|0;}return I8(c,f);}
var Hi=D(0);
function Sc(){var a=this;C.call(a);a.wI=null;a.wJ=null;a.wG=0;a.wH=null;}
function Bcd(a,b,c,d){var e=new Sc();AZW(e,a,b,c,d);return e;}
function AZW(a,b,c,d,e){J(a);a.wI=b;a.wJ=c;a.wG=d;a.wH=e;}
function AKm(a){AM8(a.wI,a.wJ,a.wG,a.wH);}
function PB(){var a=this;Cl.call(a);a.o6=null;a.Cs=null;a.BP=null;a.EC=null;}
function Bay(a,b,c,d){var e=new PB();ALG(e,a,b,c,d);return e;}
function ALG(a,b,c,d,e){a.EC=b;a.o6=c;a.Cs=d;a.BP=e;D_(a);}
function A3M(a,b){a.o6.fz(b);}
function A2Q(a,b){a.o6.dc(b);}
function A7X(a,b,c){a.EC.I$(a.Cs,a.BP,c);a.o6.dn(b,c);return 0;}
var LB=D(0);
function WS(){C.call(this);this.mc=null;}
function Bck(a){var b=new WS();ANv(b,a);return b;}
function ANv(a,b){a.mc=b;J(a);}
function AZ8(a,b){a.mc.gV.fv();QI(b,a.mc.gV);a.mc.H_(a.mc.gV);}
function A3V(a,b){a.Ps(b);}
var J5=D();
var Bjp=null;function Bdp(){Bdp=N(J5);A2V();}
function A2V(){Bjp=Bc((Mh()).data.length);Bjp.data[BD(Bjk)]=1;Bjp.data[BD(Bjl)]=2;Bjp.data[BD(Bjm)]=3;Bjp.data[BD(Bjn)]=4;Bjp.data[BD(Bjo)]=5;}
var ABz=D();
function A43(b,c){if(b===c)return 1;return b!==null?b.z(c):c!==null?0:1;}
function Ur(){C.call(this);this.cf=null;}
function AO6(){var a=new Ur();A6l(a);return a;}
function A$6(b){if(b<0.0)b=0.0;else if(b>1.0)b=1.0;return b;}
function A6l(a){J(a);a.cf=B_(18);}
function AWy(a,b){return a.PY(b.s,b.r,b.t);}
function AVI(a,b,c,d){var e;e=0;while(e<18){a.cf.data[e]=b;a.cf.data[e+1|0]=c;a.cf.data[e+2|0]=d;e=e+3|0;}return a;}
function A9L(a){var b;b=0;while(b<a.cf.data.length){a.cf.data[b]=A$6(a.cf.data[b]);b=b+1|0;}return a;}
function A7w(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s;h=e*e;i=f*f;j=g*g;k=h+i+j;if(k===0.0)return a;l=1.0/k*(k+1.0);m=b*l;n=c*l;o=d*l;p=e<=0.0?3:0;q=a.cf.data;q[p]=q[p]+h*m;q=a.cf.data;r=p+1|0;q[r]=q[r]+h*n;q=a.cf.data;r=p+2|0;q[r]=q[r]+h*o;r=f<=0.0?9:6;q=a.cf.data;q[r]=q[r]+i*m;q=a.cf.data;s=r+1|0;q[s]=q[s]+i*n;q=a.cf.data;r=r+2|0;q[r]=q[r]+i*o;r=g<=0.0?15:12;q=a.cf.data;q[r]=q[r]+j*m;q=a.cf.data;s=r+1|0;q[s]=q[s]+j*n;q=a.cf.data;r=r+2|0;q[r]=q[r]+j*o;return a;}
function A3P(a,b,c){return a.EN(b.s,b.r,b.t,c.n,c.o,c.q);}
function AFQ(a,b,c,d,e){var f;f=e/(1.0+d.GE(c));return a.EN(b.s*f,b.r*f,b.t*f,d.n-c.n,d.o-c.o,d.q-c.q);}
var H8=D(Ja);
function Bd5(){var a=new H8();Rr(a);return a;}
function Rr(a){P9(a);}
function QS(a){return (P1(a)).bF(48,57);}
var JI=D(H8);
function BcV(){var a=new JI();S7(a);return a;}
function S7(a){Rr(a);}
function Vk(a){return (((QS(a)).bF(33,64)).bF(91,96)).bF(123,126);}
var Y6=D(JI);
function BcL(){var a=new Y6();AQJ(a);return a;}
function AQJ(a){S7(a);}
function AMR(a){return (Vk(a)).cE(32);}
var AAR=D(T);
function BeV(){var a=new AAR();A4h(a);return a;}
function A4h(a){Bo(a);}
function ARz(a){return Bb6(a);}
var YO=D(Dp);
function A_R(a,b){var c=new YO();AQT(c,a,b);return c;}
function AQT(a,b,c){Gc(a,b,c);}
function AF4(a,b,c,d){var e,f,g,h,i;e=a.bQ.de();f=!d.lF()?d.dI():0;a:{g=a.k.e(b,c,d);if(g>=0){d.by(a.bm,b);h=0;while(true){if(h>=e)break a;i=a.bQ.l(h);if(i.cG(f,b,c,d)>=0){d.by(a.bm,(-1));return g;}h=h+1|0;}}}return (-1);}
function A$8(a,b){return 0;}
function ANX(a){return B(329);}
function Y9(){var a=this;BJ.call(a);a.cx=null;a.tB=null;a.rM=null;}
function Bav(a){var b=new Y9();AYn(b,a);return b;}
function AYn(a,b){var c;C1(a);a.cx=b.b();a.bO=b.i();a.tB=A4u(a.bO);a.rM=A4u(a.bO);c=0;while(c<(a.bO-1|0)){a.tB.op(a.cx.f(c),(a.bO-c|0)-1|0);a.rM.op(a.cx.f((a.bO-c|0)-1|0),(a.bO-c|0)-1|0);c=c+1|0;}}
function AGX(a,b,c){return !a.u$(c,b)?(-1):a.bO;}
function AWn(a,b,c,d){var e,f;e=d.J();while(true){if(b>e)return (-1);f=a.NX(c,b,e);if(f<0)return (-1);if(a.k.e(f+a.bO|0,c,d)>=0)break;b=f+1|0;}return f;}
function AZ$(a,b,c,d,e){var f;while(true){if(c<b)return (-1);f=a.Lr(d,b,c);if(f<0)return (-1);if(a.k.e(f+a.bO|0,d,e)>=0)break;c=f+(-1)|0;}return f;}
function AOk(a){return (((I()).a(B(330))).a(a.cx)).b();}
function AJJ(a,b){var c,d,e,f,g;if(b instanceof Dx)return b.pq()!=a.cx.f(0)?0:1;if(b instanceof Dv)return b.bH(0,a.cx.ce(0,1))<=0?0:1;if(!(b instanceof C3)){if(!(b instanceof Dt))return 1;a:{if(a.cx.i()>1){c=b;d=c.sQ();e=a.cx.f(0);c=a.cx;f=c.f(1);if(d==Df(e,f)){e=1;break a;}}e=0;}return e;}b:{c:{c=b;if(!c.p(a.cx.f(0))){g=a.cx;if(g.i()<=1)break c;g=a.cx;e=Df(g.f(0),a.cx.f(1));if(!c.p(e))break c;}e=1;break b;}e=0;}return e;}
function A8I(a,b,c,d){var e,f;e=a.cx.f(a.bO-1|0);while(true){if(c>(d-a.bO|0))return (-1);f=b.f((c+a.bO|0)-1|0);if(f==e&&a.u$(b,c))break;c=c+a.tB.b2(f)|0;}return c;}
function A7R(a,b,c,d){var e,f,g,h;e=a.cx.f(0);f=b.i();g=(f-d|0)-a.bO|0;if(g<=0)d=d+g|0;while(true){if(d<c)return (-1);h=b.f(d);if(h==e&&a.u$(b,d))break;d=d-a.rM.b2(h)|0;}return d;}
function AJ8(a,b,c){var d;d=0;while(d<a.bO){if(b.f(d+c|0)!=a.cx.f(d))return 0;d=d+1|0;}return 1;}
var RB=D(CZ);
function Bbu(){var a=new RB();AIr(a);return a;}
function AIr(a){GG(a,B(331),Y(BM,0));}
function AXj(a){return BeP(a);}
function AUn(a){return BdJ(a);}
function Nd(){var a=this;C.call(a);a.cN=null;a.b8=0;}
var Bjq=null;function C4(){C4=N(Nd);A38();}
function AS7(a){var b=new Nd();XD(b,a);return b;}
function Wg(b,c){var d;C4();d=b>=0?1:2;while(true){b=b/c|0;if(!b)break;d=d+1|0;}return d;}
function XD(a,b){C4();J(a);if(b>=0){a.cN=BW(b);return;}G(A9b());}
function IO(a,b){var c,d;c=((a.cN.data.length>>1)+a.cN.data.length|0)+2|0;if(b>c)c=b;d=BW(c);X(a.cN,0,d,0,a.b8);a.cN=d;}
function N2(a){var b,c,d,e;b=a.b8+4|0;if(b>a.cN.data.length)IO(a,b);c=a.cN.data;d=a.b8;a.b8=d+1|0;c[d]=110;c=a.cN.data;e=a.b8;a.b8=e+1|0;c[e]=117;c=a.cN.data;e=a.b8;a.b8=e+1|0;c[e]=108;c=a.cN.data;e=a.b8;a.b8=e+1|0;c[e]=108;}
function CI(a,b){var c,d;if(a.b8==a.cN.data.length)IO(a,a.b8+1|0);c=a.cN.data;d=a.b8;a.b8=d+1|0;c[d]=b;}
function IH(a,b){var c,d;if(b===null){N2(a);return;}c=b.i();d=a.b8+c|0;if(d>a.cN.data.length)IO(a,d);b.pt(0,c,a.cN,a.b8);a.b8=d;}
function ADV(a){if(!a.b8)return B(101);return F1(a.cN,0,a.b8);}
function APd(a,b){CI(a,b);return a;}
function APP(a,b){return a.GH(b,0);}
function AGA(a,b,c){return a.PM(b,c,48);}
function AD$(a,b,c,d){var e;if(b==(-2147483648)){IH(a,B(332));return a;}if(b<0){CI(a,45);b= -b|0;}a:{if(c>1){e=c-Wg(b,10)|0;while(true){if(e<=0)break a;a.lv(d);e=e+(-1)|0;}}}if(b>=10000){if(b>=1000000000){C4();CI(a,Bjq.data[Cp(E_(AUO(O(b),Cc(1410065408, 2)),O(1000000000)))]);}if(b>=100000000){C4();CI(a,Bjq.data[(b%1000000000|0)/100000000|0]);}if(b>=10000000){C4();CI(a,Bjq.data[(b%100000000|0)/10000000|0]);}if(b>=1000000){C4();CI(a,Bjq.data[(b%10000000|0)/1000000|0]);}if(b>=100000){C4();CI(a,Bjq.data[(b%1000000
|0)/100000|0]);}C4();CI(a,Bjq.data[(b%100000|0)/10000|0]);}if(b>=1000){C4();CI(a,Bjq.data[(b%10000|0)/1000|0]);}if(b>=100){C4();CI(a,Bjq.data[(b%1000|0)/100|0]);}if(b>=10){C4();CI(a,Bjq.data[(b%100|0)/10|0]);}C4();CI(a,Bjq.data[b%10|0]);return a;}
function A3f(a,b){if(b===null)N2(a);else IH(a,b.b());return a;}
function A0n(a,b){IH(a,b);return a;}
function A38(){Bjq=I5([48,49,50,51,52,53,54,55,56,57]);}
var DB=D();
var Bgk=0;var Bgl=0;var Bjr=0;var Bjs=null;var Bjt=null;var Bju=null;var Bjv=null;function H2(){H2=N(DB);AYt();}
function XN(){H2();AA0(0);}
function AA0(b){H2();ABM(b,1);}
function ABM(b,c){var d;H2();if(Bjr)return;Bjr=1;Bgk=b;Bgl=c;SF();d=Bullet.MyClassHelper.prototype.getBTVersion();if(d==285)return;G(U(((((((I()).a(B(333))).j(d)).a(B(334))).j(285)).a(B(24))).b()));}
function SF(){var b,c;H2();b=Bgm;c=b.IS();c.na(B(335),Ban());}
function AYt(){Bgk=0;Bgl=1;Bjr=0;Bjs=BdA();Bjt=Bp();Bju=BF();Bjv=BF();}
var T_=D(Bm);
function Qu(){var a=new T_();AZB(a);return a;}
function AZB(a){Cx(a);}
var My=D(B3);
function Ex(a,b){var c=new My();A6F(c,a,b);return c;}
function A6F(a,b,c){JV(a,b,c);}
var FP=D(CH);
function BfA(a,b,c){var d=new FP();Mj(d,a,b,c);return d;}
function Mj(a,b,c,d){Fd(a,b,c,d);}
function A7v(a,b,c,d){var e;if(!a.Y.ba(d))return a.k.e(b,c,d);e=a.Y.e(b,c,d);if(e>=0)return e;return a.k.e(b,c,d);}
function A87(a,b){LJ(a,b);a.Y.Q(b);}
var Ih=D(0);
function NR(){var a=this;C.call(a);a.dA=null;a.ld=null;a.ue=null;a.nD=null;a.wv=0;a.ny=0;a.tm=0;a.FG=0;a.eb=0;a.Ip=0;a.NP=0;a.d5=0;a.PC=0;a.ht=0;a.uW=0;}
function Bjw(a,b,c,d,e,f){var g=new NR();Si(g,a,b,c,d,e,f);return g;}
function Si(a,b,c,d,e,f,g){var h;J(a);a.ht=(-1);h=e+1|0;a.wv=h;a.dA=Bc(h*2|0);a.ld=Bc(g);IG(a.ld,(-1));if(f>0)a.ue=Bc(f);IG(a.dA,(-1));a.tG(b,c,d);}
function AR0(a,b,c){a.ld.data[b]=c;}
function A2K(a,b){return a.ld.data[b];}
function AUo(a){return a.pa(0);}
function ALu(a,b){Nc(a,b);return a.dA.data[(b*2|0)+1|0];}
function AX7(a,b,c){a.dA.data[b*2|0]=c;}
function AWo(a,b,c){a.dA.data[(b*2|0)+1|0]=c;}
function A5U(a,b){return a.dA.data[b*2|0];}
function APl(a,b){return a.dA.data[(b*2|0)+1|0];}
function AEy(a,b){if(a.lA(b)<0)return null;return (a.nD.d_(a.lA(b),a.pa(b))).b();}
function A1W(a,b){var c,d;c=a.jn(b);d=a.nB(b);if((d|c|(d-c|0))>=0&&d<=a.nD.i())return (a.nD.d_(c,d)).b();return null;}
function APe(a){return a.lA(0);}
function AGg(a,b){Nc(a,b);return a.dA.data[b*2|0];}
function AMr(a){if(a.dA.data[0]==(-1)){a.dA.data[0]=a.eb;a.dA.data[1]=a.eb;}a.ht=a.pO();}
function AUR(a,b){return a.ue.data[b];}
function AXw(a,b,c){a.ue.data[b]=c;}
function Nc(a,b){if(!a.ny)G(GX());if(b>=0&&b<a.wv)return;G(Bg(Ji(b)));}
function A9e(a){a.ny=1;}
function A9g(a){return a.ny;}
function A99(a,b,c,d){a.ny=0;a.uW=2;IG(a.dA,(-1));IG(a.ld,(-1));if(b!==null)a.nD=b;if(c>=0)Uf(a,c,d);a.eb=a.tm;}
function AGR(a){a.tG(null,(-1),(-1));}
function Uf(a,b,c){a.tm=b;a.FG=c;}
function A6S(a,b){a.eb=b;if(a.ht>=0)b=a.ht;a.ht=b;}
function AWY(a){return a.tm;}
function A2$(a){return a.FG;}
function AYN(a,b){a.uW=b;}
function AII(a){return a.uW;}
function A0S(a){return a.NP;}
function AUP(a){return a.Ip;}
function AVG(a){return a.ht;}
function QX(){var a=this;C.call(a);a.dy=null;a.cQ=null;a.c$=null;a.cu=null;a.dJ=null;a.kM=null;a.BL=null;}
function A_y(){var a=new QX();A3B(a);return a;}
function A3B(a){J(a);a.dy=BF();a.cQ=A8d();}
function PT(){var a=this;BJ.call(a);a.t5=null;a.xl=0;}
function AJA(a){var b=new PT();ANP(b,a);return b;}
function ANP(a,b){C1(a);a.t5=b.me();a.xl=b.bD;}
function A14(a,b,c){var d,e;d=a.t5;e=Dz(c.f(b));return !d.p(Do(e))?(-1):1;}
function AWN(a){return ((((I()).a(B(336))).a(!a.xl?B(56):B(57))).a(a.t5.b())).b();}
function JB(){var a=this;C.call(a);a.eY=0;a.tb=0;a.tc=0;a.ct=0;a.cL=0;a.vC=0.0;a.p7=0.0;a.Bh=0.0;a.ti=0.0;a.dr=0;a.jd=0;a.gy=0;a.iE=null;a.om=0;a.jU=0;}
function AFr(){var a=new JB();A7x(a);return a;}
function A7x(a){J(a);a.jU=0;}
function A2m(a,b){var c;if(a.iE!==null){c=a.iE.data[b>>>9];if(c!==null)return c.data[b&511];}return 0;}
function A5P(a,b,c){var d,e,f;if(a.iE===null)a.iE=Y($rt_arraycls($rt_bytecls()),128);d=a.iE.data;e=b>>>9;f=d[e];if(f===null){d=a.iE.data;f=Ci(512);d[e]=f;}f.data[b&511]=c<<24>>24;}
function AJn(a){return Il(a.eY&65535);}
function Vu(){Q.call(this);this.FN=null;}
function Bbd(a){var b=new Vu();AK1(b,a);return b;}
function AK1(a,b){a.FN=b;Be(a);}
function A$w(a,b){return UT(b);}
var KJ=D(Bm);
function Jd(a,b){var c=new KJ();ADY(c,a,b);return c;}
function U(a){var b=new KJ();Qz(b,a);return b;}
function ADY(a,b,c){PX(a,b,c);}
function Qz(a,b){EF(a,b);}
function Fo(){var a=this;C.call(a);a.ej=0;a.o_=0;a.lS=null;a.ln=null;a.ow=null;a.nj=null;a.mA=0.0;}
var Bjx=0.0;function NX(){NX=N(Fo);AJH();}
function KC(a,b,c){NX();J(a);P2();a.lS=Bjy;a.ln=Bjy;AUm();a.ow=Bjz;a.nj=Bjz;a.mA=1.0;a.ej=b;a.o_=c;}
function A3x(a){BhL.sB(a.ej,a.o_);}
function AQ2(a,b){BhL.rC(33984+b|0);BhL.sB(a.ej,a.o_);}
function AI4(a){return a.o_;}
function ASr(a,b,c){a.wp(b,c,0);}
function AOJ(a,b,c,d){if(b!==null&&!(!d&&a.ow===b)){BhL.jf(a.ej,10242,G8(b));a.ow=b;}if(c!==null&&!(!d&&a.nj===c)){BhL.jf(a.ej,10243,G8(c));a.nj=c;}}
function AES(a,b,c){a.De(b,c,0);}
function ADu(a,b,c,d){if(b!==null&&!(!d&&a.lS===b)){BhL.jf(a.ej,10241,EE(b));a.lS=b;}if(c!==null&&!(!d&&a.ln===c)){BhL.jf(a.ej,10240,EE(c));a.ln=c;}}
function AZw(a,b,c){a.lS=b;a.ln=c;a.eu();BhL.jf(a.ej,10241,EE(b));BhL.jf(a.ej,10240,EE(c));}
function AIJ(a,b,c){var d,e;d=Yo();if(d===1.0)return 1.0;e=Ju(b,d);if(!c&&SG(e,a.mA,0.10000000149011612))return a.mA;BhM.OH(3553,34046,e);a.mA=e;return e;}
function Yo(){var b,c;NX();if(Bjx>0.0)return Bjx;if(!BhI.tV(B(337))){Bjx=1.0;return 1.0;}b=HX(16);b.cY(0);b.cl(CU(b));BhM.Mw(34047,b);c=b.n9(0);Bjx=c;return c;}
function ACn(b,c){NX();ACl(b,c,0);}
function ACl(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;NX();if(c===null)return;if(!c.xW())c.zQ();e=c.N6();O3();if(e===BhD){c.G1(b);return;}f=c.Qf();g=c.Fa();if(c.f7()===f.f7())h=f;else{h=OY(f.bo(),f.bl(),c.f7());Gv();h.DV(Bi7);h.y_(f,0,0,0,0,f.bo(),f.bl());if(c.Fa())f.iw();g=1;}BhL.GC(3317,1);if(c.QA())AAP(b,h,h.bo(),h.bl());else{i=BhL;j=h.kv();k=h.bo();l=h.bl();m=h.lX();n=h.lb();o=h.kx();i.ky(b,d,j,k,l,0,m,n,o);}if(g)h.iw();}
function AJH(){Bjx=0.0;}
function LE(){Fo.call(this);this.hN=null;}
var BjA=null;function FY(){FY=N(LE);A55();}
function BdR(a){var b=new LE();YR(b,a);return b;}
function ARw(a,b){var c=new LE();AAo(c,a,b);return c;}
function BjB(a,b,c){var d=new LE();H$(d,a,b,c);return d;}
function BjC(a){var b=new LE();JM(b,a);return b;}
function BjD(a,b,c){var d=new LE();NF(d,a,b,c);return d;}
function YR(a,b){FY();H$(a,b,null,0);}
function AAo(a,b,c){FY();H$(a,b,null,c);}
function H$(a,b,c,d){FY();JM(a,ASM(b,c,d));}
function JM(a,b){FY();NF(a,3553,BhL.IW(),b);}
function NF(a,b,c,d){FY();KC(a,b,c);a.M0(d);if(d.qE())Pn(Bgm,a);}
function ARW(a,b){if(a.hN!==null&&b.qE()!=a.hN.qE())G(U(B(338)));a.hN=b;if(!b.xW())b.zQ();a.eu();ACn(3553,b);a.De(a.lS,a.ln,1);a.wp(a.ow,a.nj,1);a.PQ(a.mA,1);BhL.sB(a.ej,0);}
function AN1(a){return a.hN.bo();}
function A8h(a){return a.hN.bl();}
function ANg(a){if(!(a.hN instanceof Ho))return PS(a);return a.hN.b();}
function Pn(b,c){var d;FY();d=BjA.W(b);if(d===null)d=Bp();d.F(c);BjA.x(b,d);}
function A55(){BjA=C5();}
var LA=D(0);
function WT(){C.call(this);this.mn=null;}
function BbE(a){var b=new WT();AM2(b,a);return b;}
function AM2(a,b){a.mn=b;J(a);}
function A4j(a,b){a.mn.gV.fv();a.mn.QJ(a.mn.gV);SH(a.mn.gV,b);}
function ATq(a,b){a.Ne(b);}
var WD=D();
function ADq(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function A4g(b,c){return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&Z5(b.constructor,c)?1:0;}
function Z5(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(Z5(d[e],c))return 1;e=e+1|0;}return 0;}
function BcU(b){b.fc();}
function AMv(b){AQo(b,0);}
function AQo(b,c){return setTimeout(function(){BcU(b);},c);}
function ADb(){return ALc();}
function AA2(b){return AZU(String.fromCharCode(b));}
function A7o(b){return b.$meta.primitive?1:0;}
function ACr(b){return b.$meta.item;}
function AQk(b){return $rt_str(b.$meta.name);}
function ALc(){return [];}
function F5(){C.call(this);this.Ki=null;}
var Bgh=null;var Bgg=null;var Bgf=null;function Dg(){Dg=N(F5);AMB();}
function Um(a){var b=new F5();AAK(b,a);return b;}
function AAK(a,b){Dg();J(a);a.Ki=b;}
function AMB(){Bgh=Um(B(339));Bgg=Um(B(340));Bgf=Um(B(341));}
function Ge(){C.call(this);this.zR=0;}
var BjE=null;var BjF=null;var BjG=null;function A_r(){A_r=N(Ge);AWs();}
function AON(a){var b=new Ge();SW(b,a);return b;}
function SW(a,b){A_r();J(a);a.zR=b;}
function A0t(a){return a.zR;}
function AWs(){BjE=AON(1);BjF=AON(0);BjG=F($rt_booleancls());}
var C2=D(Bm);
function CK(){var a=new C2();FX(a);return a;}
function W(a){var b=new C2();ACP(b,a);return b;}
function FX(a){Cx(a);}
function ACP(a,b){EF(a,b);}
function Tr(){C2.call(this);this.Gl=null;}
function Yd(a){var b=new Tr();AQ3(b,a);return b;}
function AQ3(a,b){FX(a);a.Gl=b;}
function T9(){var a=this;C.call(a);a.bA=null;a.kq=0;a.f2=null;a.ec=null;a.bM=null;a.bL=null;a.o1=null;a.o2=null;a.ns=null;a.mD=0;a.lu=null;a.nE=0;a.oh=null;a.oA=null;a.bB=null;a.fg=Ba;a.jr=0;}
function A_8(a){var b=new T9();AHD(b,a);return b;}
function AJU(b){var c,d,e,f,g;c=AV0();d=0.0;e=b.detail;f=b.wheelDelta;if(c.firefox?1:0)d=(c.macOS?1:0)?1.0*e:1.0*e/3.0;else if(c.opera?1:0)d=!(c.linux?1:0)?(-1.0)*f/40.0:(-1.0)*f/80.0;else if(!(!(c.chrome?1:0)&&!(c.safari?1:0)&&!(c.IE?1:0))){d=(-1.0)*f;g=d/120.0;if(CG(g)>=1.0)d=g;else if(!(c.windows?1:0))d=!(c.macOS?1:0)?g:d/3.0;}return d;}
function AHD(a,b){J(a);a.kq=0;a.f2=Bc3(20);a.ec=OA(20);a.bM=Bc(20);a.bL=Bc(20);a.o1=Bc(20);a.o2=Bc(20);a.ns=Bff();a.mD=0;a.lu=OA(256);a.nE=0;a.oh=OA(256);a.oA=OA(5);a.jr=1;a.bA=b;YZ(a);}
function YZ(a){var b;b=a.bA.ownerDocument;b.addEventListener("mousedown",BV(a,"handleEvent"),!!0);b.addEventListener("mouseup",BV(a,"handleEvent"),!!0);b.addEventListener("mousemove",BV(a,"handleEvent"),!!0);b.addEventListener("wheel",BV(a,"handleEvent"),!!0);b.addEventListener("keydown",BV(a,"handleEvent"),!!0);b.addEventListener("keyup",BV(a,"handleEvent"),!!0);b.addEventListener("keypress",BV(a,"handleEvent"),!!0);a.bA.addEventListener("touchstart",BV(a,"handleEvent"),!!1);a.bA.addEventListener("touchmove",
BV(a,"handleEvent"),!!1);a.bA.addEventListener("touchcancel",BV(a,"handleEvent"),!!1);a.bA.addEventListener("touchend",BV(a,"handleEvent"),!!1);}
function A2b(a,b){ACC(a,b);Yy(a,b);}
function ACC(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;a:{c=$rt_str(b.type);if(c.z(B(342))){d=b;e=b.target;f=a.bA;g=e!==f?0:1;if(g&&!a.ec.data[0]){a.jr=1;a.kq=1;a.ec.data[0]=1;h=Js(d.button);a.ns.Jm(h);a.oA.data[h]=1;a.o1.data[0]=0;a.o2.data[0]=0;if(!a.sk()){i=a.kl(d,a.bA);j=a.ke(d,a.bA);a.bM.data[0]=i;a.bL.data[0]=j;}else{k=a.bM.data;k[0]=k[0]+Ff(a,d)|0;k=a.bL.data;k[0]=k[0]+EQ(a,d)|0;}a.fg=CD();if(a.bB!==null)a.bB.im(a.bM.data[0],a.bL.data[0],0,Js(d.button));b.preventDefault();b.stopPropagation();break a;}l
=a.kl(d,a.bA);m=a.ke(d,a.bA);if(!(l>=0.0&&l<=BhI.bo()&&m>=0.0&&m<=BhI.bl()))a.jr=0;return;}if(c.z(B(343))){d=b;if(!a.ec.data[0])return;a.ns.MZ(Js(d.button));k=a.ec;k.data[0]=a.ns.ev<=0?0:1;if(a.sk()){a.g3(0,Ff(a,d)|0,EQ(a,d)|0);k=a.bM.data;k[0]=k[0]+Ff(a,d)|0;k=a.bL.data;k[0]=k[0]+EQ(a,d)|0;}else{a.g3(0,a.kl(d,a.bA)-a.bM.data[0]|0,a.ke(d,a.bA)-a.bL.data[0]|0);a.bM.data[0]=a.kl(d,a.bA);a.bL.data[0]=a.ke(d,a.bA);}a.fg=CD();a.ec.data[0]=0;if(a.bB!==null)a.bB.hO(a.bM.data[0],a.bL.data[0],0,Js(d.button));}else if
(!c.z(B(344))){if(c.z(B(345))){n=b;if(a.bB!==null){o=AJU(n);a.bB.oG(0.0,o|0);}a.fg=CD();}else if(c.z(B(346))){a.kq=1;p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;v=a.f2;w=ABd(a);v.K8(u,Bn(w));a.ec.data[w]=1;a.bM.data[w]=a.mv(t,a.bA);a.bL.data[w]=a.kF(t,a.bA);a.o1.data[w]=0;a.o2.data[w]=0;if(a.bB!==null)a.bB.im(a.bM.data[w],a.bL.data[w],w,0);r=r+1|0;}a.fg=CD();b.preventDefault();}}else{d=b;if(a.sk()){a.g3(0,Ff(a,d)|0,EQ(a,d)|0);k=a.bM.data;k[0]=k[0]+Ff(a,d)|0;k=a.bL.data;k[0]=k[0]
+EQ(a,d)|0;}else{i=a.kl(d,a.bA);j=a.ke(d,a.bA);a.g3(0,i-a.bM.data[0]|0,j-a.bL.data[0]|0);a.bM.data[0]=i;a.bL.data[0]=j;}a.fg=CD();if(a.bB!==null){if(!a.ec.data[0])a.bB.m8(a.bM.data[0],a.bL.data[0]);else a.bB.i8(a.bM.data[0],a.bL.data[0],0);}}}if(c.z(B(347))){p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;x=(a.f2.l(u)).lj();a.g3(x,a.mv(t,a.bA)-a.bM.data[x]|0,a.kF(t,a.bA)-a.bL.data[x]|0);a.bM.data[x]=a.mv(t,a.bA);a.bL.data[x]=a.kF(t,a.bA);if(a.bB!==null)a.bB.i8(a.bM.data[x],a.bL.data[x],
x);r=r+1|0;}a.fg=CD();b.preventDefault();}if(c.z(B(348))){p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;x=(a.f2.l(u)).lj();a.f2.mz(u);a.ec.data[x]=0;i=a.mv(t,a.bA);j=a.kF(t,a.bA);a.g3(x,i-a.bM.data[x]|0,j-a.bL.data[x]|0);a.bM.data[x]=i;a.bL.data[x]=j;if(a.bB!==null)a.bB.hO(a.bM.data[x],a.bL.data[x],x,0);r=r+1|0;}a.fg=CD();b.preventDefault();}if(c.z(B(349))){p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;x=(a.f2.l(u)).lj();a.f2.mz(u);a.ec.data[x]=0;i
=a.mv(t,a.bA);j=a.kF(t,a.bA);a.g3(x,i-a.bM.data[x]|0,j-a.bL.data[x]|0);a.bM.data[x]=i;a.bL.data[x]=j;if(a.bB!==null)a.bB.hO(a.bM.data[x],a.bL.data[x],x,0);r=r+1|0;}a.fg=CD();b.preventDefault();}}
function Yy(a,b){var c,d,e,f,g;c=$rt_str(b.type);if(!(c.z(B(350))&&a.jr)){if(c.z(B(351))&&a.jr){d=b.charCode&65535;if(a.bB!==null)a.bB.lp(d);}else if(c.z(B(352))&&a.jr){e=Sh(b.keyCode);if(a.lu.data[e]){a.mD=a.mD-1|0;a.lu.data[e]=0;}if(a.bB!==null)a.bB.oC(e);}}else{a:{f=b;e=Sh(f.keyCode);g=0;switch(e){case 67:g=8;break a;case 112:g=127;break a;default:}}if(!(e!=67&&e!=112)){b.preventDefault();if(a.bB!==null){a.bB.lE(e);a.bB.lp(g);}}else if(!a.lu.data[e]){a.mD=a.mD+1|0;a.lu.data[e]=1;a.nE=1;a.oh.data[e]=1;if(a.bB
!==null)a.bB.lE(e);}}}
function ABd(a){var b;b=0;while(true){if(b>=20)return (-1);if(!a.f2.FW(Bn(b),0))break;b=b+1|0;}return b;}
function AKH(a){var b;a:{if(a.kq){a.kq=0;b=0;while(true){if(b>=a.oA.data.length)break a;a.oA.data[b]=0;b=b+1|0;}}}b:{if(a.nE){a.nE=0;b=0;while(true){if(b>=a.oh.data.length)break b;a.oh.data[b]=0;b=b+1|0;}}}}
function A8q(a,b,c,d){a.o1.data[b]=c;a.o2.data[b]=d;}
function Ff(a,b){return b.movementX;}
function EQ(a,b){return b.movementY;}
function Kl(a,b){var c,d;c=$rt_str(b.compatMode);d=c.z(B(353));if(d)b=b.documentElement;return b;}
function Hu(a,b){var c;c=b.scrollTop;return HN(c);}
function J9(a,b){var c;c=Kl(a,b);return Hu(a,c);}
function Ig(a,b){var c;c=b.scrollLeft;return HN(c);}
function LR(a,b){var c;c=Kl(a,b);return Ig(a,c);}
function RZ(a,b,c){var d;d=(c.clientX-Op(a,b)|0)+Ig(a,b)|0;d=d+LR(a,b.ownerDocument)|0;return d;}
function AAm(a,b,c){var d;d=(c.clientY-NL(a,b)|0)+Hu(a,b)|0;d=d+J9(a,b.ownerDocument)|0;return d;}
function AMl(a,b,c){var d,e;d=c.width*1.0/KR(a,c);e=d*(((b.clientX-Op(a,c)|0)+Ig(a,c)|0)+LR(a,c.ownerDocument)|0);return De(e);}
function AJ4(a,b,c){var d,e;d=c.height*1.0/N0(a,c);e=d*(((b.clientY-NL(a,c)|0)+Hu(a,c)|0)+J9(a,c.ownerDocument)|0);return De(e);}
function A95(a,b,c){var d;d=c.width*1.0/KR(a,c);return De(d*RZ(a,c,b));}
function A0K(a,b,c){var d;d=c.height*1.0/N0(a,c);return De(d*AAm(a,c,b));}
function KR(a,b){return b.clientWidth;}
function N0(a,b){return b.clientHeight;}
function NL(a,b){return HN(Sw(a,b));}
function Sw(a,b){var c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollTop;d=d.parentNode;}while(b!==null){c=c+b.offsetTop;b=d.offsetParent;}return c;}
function Op(a,b){return HN(ZL(a,b));}
function ZL(a,b){var c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollLeft;d=d.parentNode;}while(b!==null){c=c+b.offsetLeft;b=d.offsetParent;}return c;}
function HN(b){return b|0;}
function AVK(a,b){return a.ec.data[b];}
function AHt(a){return a.fg;}
function AGe(a,b){a.bB=b;}
function A$9(a){return 0;}
function APb(a,b){a.dU(b);}
var U2=D(Bm);
function A_0(){var a=new U2();A3N(a);return a;}
function Bcz(a){var b=new U2();A1K(b,a);return b;}
function A3N(a){Cx(a);}
function A1K(a,b){EF(a,b);}
function IB(){DQ.call(this);this.vv=null;}
function BjH(a){var b=new IB();OZ(b,a);return b;}
function OZ(a,b){G_(a);a.vv=b;}
function HA(){var a=this;IB.call(a);a.Je=0;a.rl=0;a.e1=null;a.kr=null;a.yW=null;}
function BjI(a,b){var c=new HA();Oc(c,a,b);return c;}
function Oc(a,b,c){OZ(a,b);a.e1=I();a.kr=BW(32);a.Je=c;Hw();a.yW=BjJ;}
function A4q(a,b,c,d){var $$je;if(!AA9(a))return;a:{try{a.vv.m$(b,c,d);break a;}catch($$e){$$je=R($$e);if($$je instanceof Dc){}else{throw $$e;}}a.rl=1;}}
function AA9(a){if(a.vv===null)a.rl=1;return a.rl?0:1;}
function MA(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.data;f=Ze(b,c,d-c|0);g=Ci(Bf(16,Bq(e.length,1024)));h=Ht(g);i=a.yW.mt();Dg();j=Bgg;i=K2(i,j);j=Bgg;k=LQ(i,j);while(true){l=(ID(k,f,h,1)).h2();a.m$(g,0,B7(h));J4(h);if(!l)break;}while(true){l=(JN(k,h)).h2();a.m$(g,0,B7(h));J4(h);if(!l)break;}}
function AYK(a,b){a.kr.data[0]=b;MA(a,a.kr,0,1);}
function A1y(a,b){a.e1.a(b);IC(a);}
function AXv(a,b){(a.e1.a(b)).U(10);IC(a);}
function AK7(a,b){(a.e1.dD(b)).U(10);IC(a);}
function A6f(a){a.GD(10);}
function IC(a){var b;b=a.e1.i()<=a.kr.data.length?a.kr:BW(a.e1.i());a.e1.pt(0,a.e1.i(),b,0);MA(a,b,0,a.e1.i());a.e1.uv(0);}
var Sq=D(Dp);
function Bdy(a,b){var c=new Sq();AU$(c,a,b);return c;}
function AU$(a,b,c){Gc(a,b,c);}
function AUC(a,b,c,d){var e,f,g,h;e=a.bQ.de();d.by(a.bm,b);f=0;while(true){if(f>=e)return a.k.e(b,c,d);g=a.bQ.l(f);h=g.cG(0,b,c,d);if(h>=0)break;f=f+1|0;}return (-1);}
function A6I(a,b){return 0;}
function AFB(a){return B(354);}
function Pk(){var a=this;C.call(a);a.ES=null;a.sW=null;}
function BbY(a,b){var c=new Pk();ASi(c,a,b);return c;}
function ASi(a,b,c){a.sW=b;a.ES=c;J(a);}
function ARM(a){AJ7(a.sW.nh,A_D(a.ES));BhJ=A8Y(a.sW.nh);(Ea()).jY();}
function A8U(a){(Ea()).jY();}
function ANI(a){a.HB();}
function AG9(a){a.GK();}
var Fy=D(IM);
function MF(a,b,c,d){AAa(a,b,c,d);}
function AQ9(a){var b;if(a.C>=a.bb)G(Ux());b=a.C;a.C=b+1|0;return a.pZ(b);}
function A3X(a,b){var c;if(a.b_())G(C7());if(a.C>=a.bb)G(F0());c=a.C;a.C=c+1|0;a.nN(c,b);return a;}
function AMx(a,b){if(b>=0&&b<a.bb)return a.pZ(b);G(Bg(((((((I()).a(B(355))).j(b)).a(B(64))).j(a.bb)).a(B(24))).b()));}
function A8r(a,b,c){if(a.b_())G(C7());if(b>=0&&b<a.bb){a.nN(b,c);return a;}G(Bg(((((((I()).a(B(355))).j(b)).a(B(64))).j(a.bb)).a(B(24))).b()));}
function ALY(a){return a.eZ();}
function FI(){var a=this;Fy.call(a);a.cs=null;a.xS=0;a.ck=0;}
function JO(a,b,c,d,e,f,g){MF(a,c,e,f);a.ck=b;a.cs=d;a.xS=g;}
function ALF(a){return a.xS;}
var Pu=D(FI);
function Bev(a,b,c,d,e,f){var g=new Pu();AY3(g,a,b,c,d,e,f);return g;}
function AY3(a,b,c,d,e,f,g){JO(a,b,c,d,e,f,g);}
function AIB(a,b){var c,d,e;c=a.cs.A.data;d=a.ck;e=b*4|0;return c[d+e|0]&255|(a.cs.A.data[(a.ck+e|0)+1|0]&255)<<8|(a.cs.A.data[(a.ck+e|0)+2|0]&255)<<16|(a.cs.A.data[(a.ck+e|0)+3|0]&255)<<24;}
function AC6(a,b,c){var d,e,f;d=a.cs.A.data;e=a.ck;f=b*4|0;d[e+f|0]=c<<24>>24;a.cs.A.data[(a.ck+f|0)+1|0]=c>>8<<24>>24;a.cs.A.data[(a.ck+f|0)+2|0]=c>>16<<24>>24;a.cs.A.data[(a.ck+f|0)+3|0]=c>>24<<24>>24;}
var ABL=D(FM);
function BcO(a,b){var c=new ABL();A8P(c,a,b);return c;}
function A8P(a,b,c){Kg(a,b,c);}
function AGr(a,b,c,d){var e,f;e=a.j7(d);if(e!==null&&(b+e.i()|0)<=d.J()){f=!(c.b()).zE(e,b)?(-1):e.i();if(f<0)return (-1);d.by(a.jb,f);return a.k.e(b+f|0,c,d);}return (-1);}
function ARH(a,b,c,d){var e,f,g,h;e=a.j7(d);f=d.dI();if(e!==null&&(b+e.i()|0)<=f){g=c.b();while(true){if(b>f)return (-1);h=g.uu(e,b);if(h<0)return (-1);if(a.k.e(h+e.i()|0,c,d)>=0)break;b=h+1|0;}return h;}return (-1);}
function ADU(a,b,c,d,e){var f,g,h;f=a.j7(e);if(f===null)return (-1);g=d.b();a:{while(true){if(c<b)return (-1);h=g.z5(f,c);if(h<0)break a;if(h<b)break a;if(a.k.e(h+f.i()|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function A3y(a,b){return 1;}
function A81(a){return (((I()).a(B(356))).j(a.bm)).b();}
function Wo(){Db.call(this);this.q4=null;}
function A_I(a,b,c,d){var e=new Wo();A5D(e,a,b,c,d);return e;}
function A5D(a,b,c,d,e){FW(a,b,c,d);a.q4=e;}
function AOv(a,b,c,d){var e,f;e=d.J();f=NM(a,b,e,c);if(f>=0)e=f;if(e>b)return a.k.cG(b,e,c,d);return a.k.e(b,c,d);}
function ADe(a,b,c,d){var e,f,g,h,i;e=d.J();f=a.k.cC(b,c,d);if(f<0)return (-1);g=NM(a,f,e,c);if(g>=0)e=g;h=a.k.cG(f,e,c,d);h=Bf(f,h);i=h>0?ABQ(a,b,h-1|0,c):h?(-1):0;if(i>=b)b=i>=h?i:i+1|0;return b;}
function NM(a,b,c,d){while(true){if(b>=c)return (-1);if(a.q4.kY(d.f(b)))break;b=b+1|0;}return b;}
function ABQ(a,b,c,d){while(true){if(c<b)return (-1);if(a.q4.kY(d.f(c)))break;c=c+(-1)|0;}return c;}
function A6U(a){return B(357);}
var To=D(T);
function Bft(){var a=new To();A01(a);return a;}
function A01(a){Bo(a);}
function ALv(a){var b;b=Bbd(a);b.be=1;return b;}
var IS=D();
var BjK=null;var BjL=null;function ACA(){ACA=N(IS);AZt();}
function ZM(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;ACA();d=$rt_floatToIntBits(b);c.v9=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.q_=0;c.qK=0;return;}g=0;if(f)h=e|8388608;else{h=e<<1;while(Z(Br(O(h),O(8388608)),Ba)){h=h<<1;f=f+(-1)|0;g=g+1|0;}}i=A4e(BjL,f);if(i<0)i=( -i|0)-2|0;j=f-BjL.data[i]|0;k=9+j|0;l=O(h);m=Cp(CM(Ce(l,O(BjK.data[i])),32-k|0));if(m>=1000000000){i=i+1|0;n=f-BjL.data[i]|0;k=9+n|0;m=Cp(CM(Ce(l,O(BjK.data[i])),32-k|0));}n=(31-k|0)-g|0;o=n>=0?BjK.data[i]>>>n:BjK.data[i]<<( -n
|0);p=(o+1|0)>>1;q=o>>1;if(h==4194304)q=q>>2;r=ZP(m,q);s=QR(m,p);h=B8(r,s);h=h>0?Cf(m/r|0,r):h<0?Cf(m/s|0,s)+s|0:Cf((m+(s/2|0)|0)/s|0,s);if(h>=1000000000){i=i+1|0;h=h/10|0;}else if(h<100000000){i=i+(-1)|0;h=h*10|0;}c.q_=h;c.qK=i-50|0;}
function ZP(b,c){var d,e;ACA();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if(e>=(c/2|0))d=d/10|0;return d;}
function QR(b,c){var d,e;ACA();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if((d-e|0)>(c/2|0))d=d/10|0;return d;}
function AZt(){var b,c,d,e,f,g,h,i,j,k,l;BjK=Bc(100);BjL=Bc(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=BjK.data;g=d+50|0;f[g]=$rt_udiv(e,20);BjL.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}i=214748364;e=127;d=0;while(d<50){j=0;k=b;while(k>i){k=k>>1;j=j+1|0;e=e+(-1)|0;}k=k*10|0;if(j<=0)b=k;else{l=O(b&((1<<j)-1|0));b=Cp(CA(O(k),M9(Ce(l,O(10)),j)));}f=BjK.data;k=(50-d|0)-1|0;f[k]=$rt_udiv(b,20);BjL.data[k]=e;d=d+1|0;}}
function Cs(){Bx.call(this);this.zo=null;}
var Bi6=null;var BjM=null;var BjN=null;var BjO=null;var BjP=null;var BjQ=null;var BjR=null;var BjS=null;var BjT=null;var Bi5=null;var BjU=null;var BjV=null;function Ix(){Ix=N(Cs);A0e();}
function Dk(a,b,c){var d=new Cs();SY(d,a,b,c);return d;}
function SY(a,b,c,d){Ix();Cw(a,b,c);a.zo=d;}
function E6(a){return a.zo;}
function A0e(){Bi6=Dk(B(358),0,B(359));BjM=Dk(B(360),1,B(361));BjN=Dk(B(362),2,B(363));BjO=Dk(B(364),3,B(365));BjP=Dk(B(366),4,B(367));BjQ=Dk(B(368),5,B(369));BjR=Dk(B(370),6,B(371));BjS=Dk(B(372),7,B(373));BjT=Dk(B(374),8,B(375));Bi5=Dk(B(376),9,B(377));BjU=Dk(B(378),10,B(379));BjV=H(Cs,[Bi6,BjM,BjN,BjO,BjP,BjQ,BjR,BjS,BjT,Bi5,BjU]);}
function Bi(){var a=this;C.call(a);a.s=0.0;a.r=0.0;a.t=0.0;a.G=0.0;}
var Bij=null;var Bik=null;var Bil=null;var Bim=null;var Bii=null;var BjW=0.0;var Bih=null;var Bin=null;var Bio=null;var Bip=null;var Biq=null;var Bir=null;var Bis=null;var Bit=null;var Biu=null;var Biv=null;var Biw=null;var Bix=null;var Biy=null;var Biz=null;var BiA=null;var BiB=null;var BiC=null;var BiD=null;var BiE=null;var BiF=null;var BiG=null;var BiH=null;var BiI=null;var BiJ=null;var BiK=null;var BiL=null;var BiM=null;var BiN=null;var BiO=null;function Bv(){Bv=N(Bi);AUr();}
function D0(){var a=new Bi();UZ(a);return a;}
function BK(a){var b=new Bi();ABP(b,a);return b;}
function CO(a,b,c,d){var e=new Bi();SE(e,a,b,c,d);return e;}
function A5m(a){var b=new Bi();T8(b,a);return b;}
function UZ(a){Bv();J(a);}
function ABP(a,b){Bv();J(a);Id(a,b);}
function SE(a,b,c,d,e){Bv();J(a);a.s=b;a.r=c;a.t=d;a.G=e;a.dL();}
function T8(a,b){Bv();J(a);a.eP(b);}
function AEI(a,b){a.s=b.s;a.r=b.r;a.t=b.t;a.G=b.G;return a;}
function A$j(a,b){a.s=a.s*b.s;a.r=a.r*b.r;a.t=a.t*b.t;a.G=a.G*b.G;return a.dL();}
function AEp(a,b){a.s=a.s*b;a.r=a.r*b;a.t=a.t*b;a.G=a.G*b;return a.dL();}
function A5b(a,b){a.s=a.s+b.s;a.r=a.r+b.r;a.t=a.t+b.t;a.G=a.G+b.G;return a.dL();}
function AVF(a,b){a.s=a.s-b.s;a.r=a.r-b.r;a.t=a.t-b.t;a.G=a.G-b.G;return a.dL();}
function A68(a){if(a.s<0.0)a.s=0.0;else if(a.s>1.0)a.s=1.0;if(a.r<0.0)a.r=0.0;else if(a.r>1.0)a.r=1.0;if(a.t<0.0)a.t=0.0;else if(a.t>1.0)a.t=1.0;if(a.G<0.0)a.G=0.0;else if(a.G>1.0)a.G=1.0;return a;}
function A35(a,b,c,d,e){a.s=b;a.r=c;a.t=d;a.G=e;return a.dL();}
function AOB(a,b){Id(a,b);return a;}
function ADL(a,b,c,d,e){a.s=a.s+b;a.r=a.r+c;a.t=a.t+d;a.G=a.G+e;return a.dL();}
function AQs(a,b,c,d,e){a.s=a.s-b;a.r=a.r-c;a.t=a.t-d;a.G=a.G-e;return a.dL();}
function A7P(a,b,c,d,e){a.s=a.s*b;a.r=a.r*c;a.t=a.t*d;a.G=a.G*e;return a.dL();}
function ANF(a,b,c){a.s=a.s+c*(b.s-a.s);a.r=a.r+c*(b.r-a.r);a.t=a.t+c*(b.t-a.t);a.G=a.G+c*(b.G-a.G);return a.dL();}
function AW_(a,b,c,d,e,f){a.s=a.s+f*(b-a.s);a.r=a.r+f*(c-a.r);a.t=a.t+f*(d-a.t);a.G=a.G+f*(e-a.G);return a.dL();}
function AMu(a){a.s=a.s*a.G;a.r=a.r*a.G;a.t=a.t*a.G;return a;}
function AYS(a,b){var c;if(a===b)return 1;if(b!==null&&Cj(a)===Cj(b)){c=b;return a.rY()!=c.rY()?0:1;}return 0;}
function AL4(a){var b,c;b=a.s===0.0?0:CE(a.s);c=(31*b|0)+(a.r===0.0?0:CE(a.r))|0;c=(31*c|0)+(a.t===0.0?0:CE(a.t))|0;c=(31*c|0)+(a.G===0.0?0:CE(a.G))|0;return c;}
function ARO(a){var b;b=(255.0*a.G|0)<<24|(255.0*a.t|0)<<16|(255.0*a.r|0)<<8|255.0*a.s|0;return J$(b);}
function ATC(a){return (255.0*a.G|0)<<24|(255.0*a.t|0)<<16|(255.0*a.r|0)<<8|255.0*a.s|0;}
function AGK(a){var b,c;b=(255.0*a.s|0)<<24|(255.0*a.r|0)<<16|(255.0*a.t|0)<<8|255.0*a.G|0;c=Oz(b);while(c.i()<8){c=(((I()).a(B(315))).a(c)).b();}return c;}
function AFX(b){Bv();return ACN(b,D0());}
function ACN(b,c){Bv();if(b.f(0)==35)b=b.ei(1);c.s=Dr(b.ce(0,2),16)/255.0;c.r=Dr(b.ce(2,4),16)/255.0;c.t=Dr(b.ce(4,6),16)/255.0;c.G=b.i()!=8?1.0:Dr(b.ce(6,8),16)/255.0;return c;}
function AFM(b,c,d,e){var f,g;Bv();f=e<<24|d<<16|c<<8|b;g=J$(f);return g;}
function AIs(b,c,d,e){var f;Bv();f=(255.0*e|0)<<24|(255.0*d|0)<<16|(255.0*c|0)<<8|255.0*b|0;return J$(f);}
function AKz(b,c,d,e){Bv();return e<<24|d<<16|c<<8|b;}
function AIx(b){Bv();return b*255.0|0;}
function A$B(b,c){Bv();return (b*255.0|0)<<8|c*255.0|0;}
function A15(b,c,d){Bv();return (b*31.0|0)<<11|(c*63.0|0)<<5|d*31.0|0;}
function AK5(b,c,d,e){Bv();return (b*15.0|0)<<12|(c*15.0|0)<<8|(d*15.0|0)<<4|e*15.0|0;}
function AKx(b,c,d){Bv();return (b*255.0|0)<<16|(c*255.0|0)<<8|d*255.0|0;}
function A84(b,c,d,e){Bv();return (b*255.0|0)<<24|(c*255.0|0)<<16|(d*255.0|0)<<8|e*255.0|0;}
function A0Z(b,c,d,e){Bv();return (b*255.0|0)<<24|(c*255.0|0)<<16|(d*255.0|0)<<8|e*255.0|0;}
function AOz(b){Bv();return (b.s*31.0|0)<<11|(b.r*63.0|0)<<5|b.t*31.0|0;}
function A6h(b){Bv();return (b.s*15.0|0)<<12|(b.r*15.0|0)<<8|(b.t*15.0|0)<<4|b.G*15.0|0;}
function ANE(b){Bv();return (b.s*255.0|0)<<16|(b.r*255.0|0)<<8|b.t*255.0|0;}
function AEz(b){Bv();return (b.s*255.0|0)<<24|(b.r*255.0|0)<<16|(b.t*255.0|0)<<8|b.G*255.0|0;}
function A1I(b){Bv();return (b.G*255.0|0)<<24|(b.s*255.0|0)<<16|(b.r*255.0|0)<<8|b.t*255.0|0;}
function A9A(b,c){Bv();b.s=((c&63488)>>>11)/31.0;b.r=((c&2016)>>>5)/63.0;b.t=((c&31)>>>0)/31.0;}
function A4f(b,c){Bv();b.s=((c&61440)>>>12)/15.0;b.r=((c&3840)>>>8)/15.0;b.t=((c&240)>>>4)/15.0;b.G=(c&15)/15.0;}
function A4C(b,c){Bv();b.s=((c&16711680)>>>16)/255.0;b.r=((c&65280)>>>8)/255.0;b.t=(c&255)/255.0;}
function Id(b,c){Bv();b.s=((c&(-16777216))>>>24)/255.0;b.r=((c&16711680)>>>16)/255.0;b.t=((c&65280)>>>8)/255.0;b.G=(c&255)/255.0;}
function APq(b,c){Bv();b.G=((c&(-16777216))>>>24)/255.0;b.s=((c&16711680)>>>16)/255.0;b.r=((c&65280)>>>8)/255.0;b.t=(c&255)/255.0;}
function Zn(b,c){var d;Bv();d=A0f(c);b.G=((d&(-16777216))>>>24)/255.0;b.t=((d&16711680)>>>16)/255.0;b.r=((d&65280)>>>8)/255.0;b.s=(d&255)/255.0;}
function A6N(a,b,c,d){var e,f,g,h,i,j;a:{e=(b/60.0+6.0)%6.0;f=e|0;g=e-f;h=d*(1.0-c);i=d*(1.0-c*g);j=d*(1.0-c*(1.0-g));switch(f){case 0:break;case 1:a.s=i;a.r=d;a.t=h;break a;case 2:a.s=h;a.r=d;a.t=j;break a;case 3:a.s=h;a.r=i;a.t=d;break a;case 4:a.s=j;a.r=h;a.t=d;break a;default:a.s=d;a.r=h;a.t=i;break a;}a.s=d;a.r=j;a.t=h;}return a.dL();}
function AUI(a,b){var c;c=b.data;return a.O1(c[0],c[1],c[2]);}
function A6r(a,b){var c,d,e;c=Ei(Ei(a.s,a.r),a.t);d=Ju(Ju(a.s,a.r),a.t);e=c-d;if(e===0.0)b.data[0]=0.0;else if(c===a.s)b.data[0]=(60.0*(a.r-a.t)/e+360.0)%360.0;else if(c!==a.r)b.data[0]=60.0*(a.s-a.r)/e+240.0;else b.data[0]=60.0*(a.t-a.s)/e+120.0;if(c<=0.0)b.data[1]=0.0;else b.data[1]=1.0-d/c;b.data[2]=c;return b;}
function A8K(a){return A5m(a);}
function AUr(){Bij=CO(1.0,1.0,1.0,1.0);Bik=BK((-1077952513));Bil=BK(2139062271);Bim=BK(1061109759);Bii=CO(0.0,0.0,0.0,1.0);BjW=Bij.nv();Bih=CO(0.0,0.0,0.0,0.0);Bin=CO(0.0,0.0,1.0,1.0);Bio=CO(0.0,0.0,0.5,1.0);Bip=BK(1097458175);Biq=BK(1887473919);Bir=BK((-2016482305));Bis=CO(0.0,1.0,1.0,1.0);Bit=CO(0.0,0.5,0.5,1.0);Biu=BK(16711935);Biv=BK(2147418367);Biw=BK(852308735);Bix=BK(579543807);Biy=BK(1804477439);Biz=BK((-65281));BiA=BK((-2686721));BiB=BK((-626712321));BiC=BK((-5963521));BiD=BK((-1958407169));BiE=BK((-759919361));BiF
=BK((-1306385665));BiG=BK((-16776961));BiH=BK((-13361921));BiI=BK((-8433409));BiJ=BK((-92245249));BiK=BK((-9849601));BiL=CO(1.0,0.0,1.0,1.0);BiM=BK((-1608453889));BiN=BK((-293409025));BiO=BK((-1339006721));}
function Fc(){var a=this;C.call(a);a.fl=0;a.cI=0;a.ij=0;a.hR=0;a.cT=0;a.er=null;a.jQ=0;a.DD=0;}
function EB(a,b,c){var d=new Fc();ANo(d,a,b,c);return d;}
function BjX(a,b,c,d){var e=new Fc();ACx(e,a,b,c,d);return e;}
function BjY(a,b,c,d,e,f){var g=new Fc();AAx(g,a,b,c,d,e,f);return g;}
function ANo(a,b,c,d){ACx(a,b,c,d,0);}
function ACx(a,b,c,d,e){var f;f=B8(b,4);AAx(a,b,c,f?5126:5121,f?0:1,d,e);}
function AAx(a,b,c,d,e,f,g){J(a);a.fl=b;a.cI=c;a.hR=d;a.ij=e;a.er=f;a.jQ=g;a.DD=E3(b);}
function ANs(a,b){if(!(b instanceof Fc))return 0;return KH(a,b);}
function KH(a,b){var c,d,e;a:{if(b!==null&&a.fl==b.fl&&a.cI==b.cI&&a.hR==b.hR&&a.ij==b.ij){c=a.er;d=b.er;if(c.z(d)&&a.jQ==b.jQ){e=1;break a;}}e=0;}return e;}
function IT(a){return (a.DD<<8)+(a.jQ&255)|0;}
function QA(a){a:{switch(a.hR){case 5120:case 5121:break;case 5122:case 5123:return 2*a.cI|0;case 5124:case 5125:case 5127:case 5128:case 5129:case 5130:case 5131:break a;case 5126:case 5132:return 4*a.cI|0;default:break a;}return a.cI;}return 0;}
function AYq(a){var b,c;b=IT(a);c=(541*b|0)+a.cI|0;c=(541*c|0)+a.er.bp()|0;return c;}
var IA=D();
function BjZ(){var a=new IA();UL(a);return a;}
function UL(a){J(a);}
function Gd(){var a=this;IA.call(a);a.fR=null;a.cF=null;a.uJ=null;}
function AUY(a,b,c){var d=new Gd();Hn(d,a,b,c);return d;}
function Hn(a,b,c,d){UL(a);GR();if(d!==BiU&&d!==BiV)G(U(((((I()).a(B(296))).dD(d)).a(B(380))).b()));a.fR=b;a.cF=A13(c);a.uJ=d;}
function AHX(a){return a.cF;}
function AKg(a){var b;b=a.cF.xv(47);if(b<0)return a.cF;return a.cF.ei(b+1|0);}
function A7k(a){var b,c;b=a.x4();c=b.xv(46);if(c==(-1))return b;return b.ce(0,c);}
function AGb(a){return a.uJ;}
function AR8(a){var b;b=a.fR.P2(a.cF);if(b!==null)return b;G(U((((I()).a(a.cF)).a(B(381))).b()));}
function AHO(a){return a.Mm(null);}
function A9u(a,b){var c,$$je;if(a.fR.LF(a.cF))return a.fR.ew.W(a.cF);a:{try{c=BaY(a.Ik(),B(382));}catch($$e){$$je=R($$e);if($$je instanceof GK){break a;}else{throw $$e;}}return c;}return null;}
function A7I(a){var b,c,d,e,f,g,h,i,j,$$je;b=Cp((a.Hm()));if(!b)b=512;c=Ci(b);d=0;e=a.qv();a:{try{try{while(true){f=c.data.length;g=e.rs(c,d,f-d|0);if(g==(-1))break;d=d+g|0;if(d==f){h=Ci(f*2|0);X(c,0,h,0,d);c=h;}}break a;}catch($$e){$$je=R($$e);if($$je instanceof Dc){i=$$je;}else{throw $$e;}}G(Jd((((I()).a(B(383))).dD(a)).b(),i));}catch($$e){$$je=R($$e);j=$$je;}b:{try{if(e!==null)e.fO();break b;}catch($$e){$$je=R($$e);if($$je instanceof Dc){}else{throw $$e;}}}G(j);}c:{try{if(e!==null)e.fO();break c;}catch($$e)
{$$je=R($$e);if($$je instanceof Dc){}else{throw $$e;}}}if(d>=f)h=c;else{h=Ci(d);X(c,0,h,0,d);}return h;}
function AOe(a,b){var c,d,e;c=new Gd;d=a.fR;e=(((I()).a(a.cF.bN()?B(101):(((I()).a(a.cF)).a(!a.cF.yK(B(384))?B(384):B(101))).b())).a(b)).b();GR();Hn(c,d,e,BiU);return c;}
function AG2(a){var b,c;b=a.cF.HP(B(384));c=B(101);if(b>0)c=a.cF.ce(0,b);return AUY(a.fR,c,a.uJ);}
function A8v(a){return a.fR.N0(a.cF);}
function A4c(a){return a.cF;}
function A13(b){var c;c=b.uD(B(385),B(384));if(c.yK(B(384)))c=c.ce(0,c.i()-1|0);return c;}
function F6(){BR.call(this);this.gV=null;}
var Bj0=null;function AKB(){AKB=N(F6);AFT();}
function Bj1(){var a=new F6();Nu(a);return a;}
function BaB(a){var b=new F6();SZ(b,a);return b;}
function Nu(a){AKB();B$(a);a.gV=BF();U$(a);}
function U$(a){var b,c,d;b=Bck(a);c=BbE(a);d=Ul(BV(b,"setWorldTransformJS"),BV(c,"getWorldTransformJS"));a.dZ(d,1);}
function SZ(a,b){AKB();B$(a);a.gV=BF();}
function AFT(){Bj0=BaB(0);}
function Ul(b,c){var jsMotionState=new Bullet.MyMotionState();jsMotionState.setWorldTransform=b;jsMotionState.getWorldTransform=c;return Bullet.getPointer(jsMotionState);}
function IW(){F6.call(this);this.Ma=null;}
function Bj2(){var a=new IW();Y_(a);return a;}
function Bj3(a){var b=new IW();Tb(b,a);return b;}
function Y_(a){Tb(a,BF());}
function Tb(a,b){Nu(a);a.Ma=b;}
function AA8(){IW.call(this);this.qb=null;}
function A_U(a){var b=new AA8();A49(b,a);return b;}
function A49(a,b){Y_(a);a.qb=b;}
function ARi(a,b){b.ch(a.qb);}
function AMI(a,b){a.qb.ch(b);}
var TY=D(CF);
function A_M(a){var b=new TY();AKE(b,a);return b;}
function AKE(a,b){E4(a,b.pT(),b.Ji(),b.i3());a.Y.Q(a);}
function A$v(a,b,c,d){var e;while((b+a.bv.cg()|0)<=d.J()){e=a.bv;if(e.bH(b,c)<=0)break;b=b+a.bv.cg()|0;}return a.k.e(b,c,d);}
function ANr(a,b,c,d){var e,f,g;e=a.k.cC(b,c,d);if(e<0)return (-1);f=e-a.bv.cg()|0;while(f>=b&&a.bv.bH(f,c)>0){g=f-a.bv.cg()|0;e=f;f=g;}return e;}
function Ew(){var a=this;C.call(a);a.fk=null;a.i9=0;a.ov=null;a.Cz=null;a.DW=null;a.CZ=null;a.k6=null;a.CX=null;a.y3=null;a.B5=null;a.dE=0;a.q3=0;a.s0=0;a.P3=null;a.A6=null;a.wA=null;a.yz=0;a.Kc=0;a.cM=null;a.hE=null;}
var Bj4=0;var Bj5=null;var Bj6=null;var Bj7=null;var Bj8=null;function UR(){UR=N(Ew);APr();}
function AIG(a,b){var c=new Ew();UU(c,a,b);return c;}
function UU(a,b,c){UR();J(a);a.fk=B(101);a.ov=Gr();a.Cz=Gr();a.DW=Gr();a.k6=Gr();a.CX=Gr();a.y3=Gr();a.Kc=0;a.cM=Fk(1);a.hE=Fk(1);if(b===null)G(W(B(386)));if(c===null)G(W(B(387)));if(Bj5!==null&&Bj5.i()>0)b=(((I()).a(Bj5)).a(b)).b();if(Bj6!==null&&Bj6.i()>0)c=(((I()).a(Bj6)).a(c)).b();a.A6=b;a.wA=c;a.P3=HX(16);Kr(a,b,c);if(a.r8()){QN(a);R4(a);AAb(a,Bgm,a);}}
function Kr(a,b,c){a.q3=OC(a,35633,b);a.s0=OC(a,35632,c);if(a.q3!=(-1)&&a.s0!=(-1)){a.dE=ABu(a,a.Iq());if(a.dE!=(-1)){a.i9=1;return;}a.i9=0;return;}a.i9=0;}
function OC(a,b,c){var d,e,f,g,h;d=BhM;e=Fk(1);f=d.Oc(b);if(!f)return (-1);d.Qp(f,c);d.Ia(f);d.NA(f,35713,e);g=e.b2(0);if(g)return f;h=d.NJ(f);a.fk=(((I()).a(a.fk)).a(b!=35633?B(388):B(389))).b();a.fk=(((I()).a(a.fk)).a(h)).b();return (-1);}
function AKv(a){var b,c;b=BhM;c=b.MM();if(!c)c=(-1);return c;}
function ABu(a,b){var c,d,e,f;c=BhM;if(b==(-1))return (-1);c.xc(b,a.q3);c.xc(b,a.s0);c.Lb(b);d=FV(4);FH(d,EV());e=d.yC();c.ql(b,35714,e);f=e.b2(0);if(f)return b;a.fk=BhM.Af(b);return (-1);}
function A7O(a){if(!a.i9)return a.fk;a.fk=BhM.Af(a.dE);return a.fk;}
function A8Q(a){return a.i9;}
function Rg(a,b){var c,d;c=BhM;d=a.k6.tF(b,(-2));if(d==(-2)){d=c.C4(a.dE,b);a.k6.gz(b,d);}return d;}
function JW(a,b){UR();return a.AF(b,Bj4);}
function A2I(a,b,c){var d;d=a.ov.tF(b,(-2));if(d==(-2)){d=BhM.AG(a.dE,b);if(d==(-1)&&c){if(!a.i9)G(DP((((I()).a(B(390))).a(a.qY())).b()));G(W(((((I()).a(B(391))).a(b)).a(B(392))).b()));}a.ov.gz(b,d);}return d;}
function A1c(a,b,c){var d,e;d=BhM;Cm(a);e=JW(a,b);d.Cl(e,c);}
function AZ4(a,b,c){var d;d=BhM;Cm(a);d.Cl(b,c);}
function APy(a,b,c){var d;d=BhM;Cm(a);d.MH(b,c);}
function ADM(a,b,c,d){var e;e=BhM;Cm(a);e.OA(b,c,d);}
function AFE(a,b,c,d,e){var f;f=BhM;Cm(a);f.GT(b,c,d,e);}
function AP1(a,b,c,d,e,f){var g;g=BhM;Cm(a);g.Gy(b,c,d,e,f);}
function ARA(a,b,c,d,e){var f;f=BhM;Cm(a);f.FO(b,e/3|0,c,d);}
function AZd(a,b,c){a.Ix(b,c,0);}
function AVu(a,b,c,d){a.zp(JW(a,b),c,d);}
function ALK(a,b,c){a.zp(b,c,0);}
function A3G(a,b,c,d){var e;e=BhM;Cm(a);e.x$(b,1,d,c.c,0);}
function A83(a,b,c){a.Lk(b,c,0);}
function AH1(a,b,c,d){var e;e=BhM;Cm(a);e.IN(b,1,d,c.gS,0);}
function AWq(a,b,c,d,e){var f;f=BhM;Cm(a);f.x$(b,e/16|0,0,c,d);}
function AC9(a,b,c){a.je(b,c.n,c.o,c.q);}
function A5L(a,b,c){a.yn(b,c.s,c.r,c.t,c.G);}
function A$k(a,b,c,d,e,f,g){var h;h=BhM;Cm(a);h.O6(b,c,d,e,f,g);}
function AVE(a){var b;b=BhM;Cm(a);b.J3(a.dE);}
function AE6(a,b){var c,d;c=BhM;Cm(a);d=Rg(a,b);if(d==(-1))return;c.xC(d);}
function A2A(a,b){var c;c=BhM;Cm(a);c.xC(b);}
function A5J(a,b){var c;c=BhM;Cm(a);c.Qj(b);}
function Cm(a){if(a.yz){Kr(a,a.A6,a.wA);a.yz=0;}}
function AAb(a,b,c){var d;UR();d=Bj7.W(b);if(d===null)d=Bp();d.F(c);Bj7.x(b,d);}
function R4(a){var b,c,d,e;a.cM.c0();BhM.ql(a.dE,35718,a.cM);b=a.cM.b2(0);a.CZ=Y(BM,b);c=0;while(c<b){a.cM.c0();a.cM.tf(0,1);a.hE.c0();d=BhM.PX(a.dE,c,a.cM,a.hE);e=BhM.AG(a.dE,d);a.ov.gz(d,e);a.Cz.gz(d,a.hE.b2(0));a.DW.gz(d,a.cM.b2(0));a.CZ.data[c]=d;c=c+1|0;}}
function QN(a){var b,c,d,e;a.cM.c0();BhM.ql(a.dE,35721,a.cM);b=a.cM.b2(0);a.B5=Y(BM,b);c=0;while(c<b){a.cM.c0();a.cM.tf(0,1);a.hE.c0();d=BhM.Pz(a.dE,c,a.cM,a.hE);e=BhM.C4(a.dE,d);a.k6.gz(d,e);a.CX.gz(d,a.hE.b2(0));a.y3.gz(d,a.cM.b2(0));a.B5.data[c]=d;c=c+1|0;}}
function AEZ(a,b){return a.k6.tF(b,(-1));}
function APr(){Bj4=1;Bj5=B(101);Bj6=B(101);Bj7=DE();Bj8=Fk(1);}
var DM=D(Bx);
var BiV=null;var BiU=null;var Bj9=null;var Bj$=null;var Bj_=null;var Bka=null;function GR(){GR=N(DM);AHY();}
function H9(a,b){var c=new DM();Wn(c,a,b);return c;}
function Wn(a,b,c){GR();Cw(a,b,c);}
function AHY(){BiV=H9(B(393),0);BiU=H9(B(394),1);Bj9=H9(B(395),2);Bj$=H9(B(396),3);Bj_=H9(B(397),4);Bka=H(DM,[BiV,BiU,Bj9,Bj$,Bj_]);}
var Me=D(0);
function Jx(){var a=this;C.call(a);a.qR=null;a.g9=null;a.iK=null;}
var Bkb=0;function BeI(a){var b=new Jx();A7J(b,a);return b;}
function A7J(a,b){var c;J(a);a.g9=b;c=a;b.classObject=c;}
function Lg(b){var c;if(b===null)return null;c=b.classObject;if(c===null)c=BeI(b);return c;}
function AL9(a){return (((I()).a(B(398))).j(Is(a))).b();}
function AWg(a){return a.g9;}
function AYJ(a,b){return A4g(b,a.g9);}
function A2e(a){if(a.qR===null)a.qR=AQk(a.g9);return a.qR;}
function AJc(a){return A7o(a.g9);}
function ASz(a){return ACr(a.g9)===null?0:1;}
function A3g(a){return Lg(ACr(a.g9));}
function AZf(){if(!Bkb){Bkb=1;A1$();}}
function A1$(){EI.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){ACc(obj);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Q4,FO],returnType:$rt_voidcls(),callable:function(obj,args){PF(obj,args[0],args[1]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Q4,FO,Bi,$rt_floatcls(),$rt_intcls(),$rt_booleancls()],returnType:$rt_voidcls(),callable:function(obj,args){S6(obj,args[0],args[1],
args[2],A8m(args[3]),AVN(args[4]),A0t(args[5]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Q4,FO,$rt_intcls(),$rt_intcls(),Bi,$rt_floatcls(),$rt_intcls(),$rt_booleancls(),BM],returnType:$rt_voidcls(),callable:function(obj,args){AAX(obj,args[0],args[1],AVN(args[2]),AVN(args[3]),args[4],A8m(args[5]),AVN(args[6]),A0t(args[7]),args[8]);return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[Q4,FO],returnType:$rt_voidcls(),callable:function(obj,args){A69(obj,args[0],
args[1]);return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[Q4,FO,Bi,$rt_floatcls(),$rt_intcls(),$rt_booleancls()],returnType:$rt_voidcls(),callable:function(obj,args){A3a(obj,args[0],args[1],args[2],A8m(args[3]),AVN(args[4]),A0t(args[5]));return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[Q4,FO,$rt_intcls(),$rt_intcls(),Bi,$rt_floatcls(),$rt_intcls(),$rt_booleancls(),BM],returnType:$rt_voidcls(),callable:function(obj,args){AGS(obj,args[0],args[1],AVN(args[2]),AVN(args[3]),
args[4],A8m(args[5]),AVN(args[6]),A0t(args[7]),args[8]);return null;}},{name:"truncate",modifiers:0,accessLevel:1,parameterTypes:[Q9,Hh,$rt_floatcls(),BM,$rt_intcls(),D3],returnType:$rt_voidcls(),callable:function(obj,args){ABi(obj,args[0],args[1],A8m(args[2]),args[3],AVN(args[4]),args[5]);return null;}},{name:"wrap",modifiers:0,accessLevel:1,parameterTypes:[Q9,Hh,$rt_intcls(),$rt_intcls()],returnType:Hh,callable:function(obj,args){return QM(obj,args[0],args[1],AVN(args[2]),AVN(args[3]));}},{name:"adjustLastGlyph",modifiers
:0,accessLevel:1,parameterTypes:[Q9,Hh],returnType:$rt_voidcls(),callable:function(obj,args){EP(obj,args[0],args[1]);return null;}},{name:"parseColorMarkup",modifiers:0,accessLevel:1,parameterTypes:[FO,$rt_intcls(),$rt_intcls(),D3],returnType:$rt_intcls(),callable:function(obj,args){return Pw(obj,args[0],AVN(args[1]),AVN(args[2]),args[3]);}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){A75(obj);return null;}},{name:"toString",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:BM,callable:function(obj,args){return ANY(obj);}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){DG();AYl();return null;}}];Hh.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){AZ_(obj);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){ALf(obj);return null;}},
{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BM,callable:function(obj,args){return AEf(obj);}}];Bi.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){UZ(obj);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){ABP(obj,AVN(args[0]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),
$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:function(obj,args){SE(obj,A8m(args[0]),A8m(args[1]),A8m(args[2]),A8m(args[3]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Bi],returnType:$rt_voidcls(),callable:function(obj,args){T8(obj,args[0]);return null;}},{name:"set",modifiers:0,accessLevel:3,parameterTypes:[Bi],returnType:Bi,callable:function(obj,args){return AEI(obj,args[0]);}},{name:"mul",modifiers:0,accessLevel:3,parameterTypes:[Bi],returnType:Bi,callable:
function(obj,args){return A$j(obj,args[0]);}},{name:"mul",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls()],returnType:Bi,callable:function(obj,args){return AEp(obj,A8m(args[0]));}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[Bi],returnType:Bi,callable:function(obj,args){return A5b(obj,args[0]);}},{name:"sub",modifiers:0,accessLevel:3,parameterTypes:[Bi],returnType:Bi,callable:function(obj,args){return AVF(obj,args[0]);}},{name:"clamp",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:Bi,callable:function(obj,args){return A68(obj);}},{name:"set",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:Bi,callable:function(obj,args){return A35(obj,A8m(args[0]),A8m(args[1]),A8m(args[2]),A8m(args[3]));}},{name:"set",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:Bi,callable:function(obj,args){return AOB(obj,AVN(args[0]));}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),
$rt_floatcls()],returnType:Bi,callable:function(obj,args){return ADL(obj,A8m(args[0]),A8m(args[1]),A8m(args[2]),A8m(args[3]));}},{name:"sub",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:Bi,callable:function(obj,args){return AQs(obj,A8m(args[0]),A8m(args[1]),A8m(args[2]),A8m(args[3]));}},{name:"mul",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:Bi,callable:function(obj,args)
{return A7P(obj,A8m(args[0]),A8m(args[1]),A8m(args[2]),A8m(args[3]));}},{name:"lerp",modifiers:0,accessLevel:3,parameterTypes:[Bi,$rt_floatcls()],returnType:Bi,callable:function(obj,args){return ANF(obj,args[0],A8m(args[1]));}},{name:"lerp",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:Bi,callable:function(obj,args){return AW_(obj,A8m(args[0]),A8m(args[1]),A8m(args[2]),A8m(args[3]),A8m(args[4]));}},{name:"premultiplyAlpha",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:Bi,callable:function(obj,args){return AMu(obj);}},{name:"equals",modifiers:0,accessLevel:3,parameterTypes:[C],returnType:$rt_booleancls(),callable:function(obj,args){return AYS(obj,args[0]);}},{name:"hashCode",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:function(obj,args){return AL4(obj);}},{name:"toFloatBits",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_floatcls(),callable:function(obj,args){return ARO(obj);}},{name
:"toIntBits",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:function(obj,args){return ATC(obj);}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BM,callable:function(obj,args){return AGK(obj);}},{name:"valueOf",modifiers:512,accessLevel:3,parameterTypes:[BM],returnType:Bi,callable:function(obj,args){Bv();return AFX(args[0]);}},{name:"valueOf",modifiers:512,accessLevel:3,parameterTypes:[BM,Bi],returnType:Bi,callable:function(obj,args){Bv();return ACN(args[0],
args[1]);}},{name:"toFloatBits",modifiers:512,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_floatcls(),callable:function(obj,args){Bv();return AFM(AVN(args[0]),AVN(args[1]),AVN(args[2]),AVN(args[3]));}},{name:"toFloatBits",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_floatcls(),callable:function(obj,args){Bv();return AIs(A8m(args[0]),A8m(args[1]),A8m(args[2]),A8m(args[3]));}},{name:
"toIntBits",modifiers:512,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_intcls(),callable:function(obj,args){Bv();return AKz(AVN(args[0]),AVN(args[1]),AVN(args[2]),AVN(args[3]));}},{name:"alpha",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bv();return AIx(A8m(args[0]));}},{name:"luminanceAlpha",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable
:function(obj,args){Bv();return A$B(A8m(args[0]),A8m(args[1]));}},{name:"rgb565",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bv();return A15(A8m(args[0]),A8m(args[1]),A8m(args[2]));}},{name:"rgba4444",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bv();return AK5(A8m(args[0]),A8m(args[1]),A8m(args[2]),A8m(args[3]));}},
{name:"rgb888",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bv();return AKx(A8m(args[0]),A8m(args[1]),A8m(args[2]));}},{name:"rgba8888",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bv();return A84(A8m(args[0]),A8m(args[1]),A8m(args[2]),A8m(args[3]));}},{name:"argb8888",modifiers:512,accessLevel:3,parameterTypes
:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bv();return A0Z(A8m(args[0]),A8m(args[1]),A8m(args[2]),A8m(args[3]));}},{name:"rgb565",modifiers:512,accessLevel:3,parameterTypes:[Bi],returnType:$rt_intcls(),callable:function(obj,args){Bv();return AOz(args[0]);}},{name:"rgba4444",modifiers:512,accessLevel:3,parameterTypes:[Bi],returnType:$rt_intcls(),callable:function(obj,args){Bv();return A6h(args[0]);}},{name:"rgb888",modifiers:512,accessLevel
:3,parameterTypes:[Bi],returnType:$rt_intcls(),callable:function(obj,args){Bv();return ANE(args[0]);}},{name:"rgba8888",modifiers:512,accessLevel:3,parameterTypes:[Bi],returnType:$rt_intcls(),callable:function(obj,args){Bv();return AEz(args[0]);}},{name:"argb8888",modifiers:512,accessLevel:3,parameterTypes:[Bi],returnType:$rt_intcls(),callable:function(obj,args){Bv();return A1I(args[0]);}},{name:"rgb565ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bi,$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,
args){Bv();A9A(args[0],AVN(args[1]));return null;}},{name:"rgba4444ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bi,$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){Bv();A4f(args[0],AVN(args[1]));return null;}},{name:"rgb888ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bi,$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){Bv();A4C(args[0],AVN(args[1]));return null;}},{name:"rgba8888ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bi,$rt_intcls()],returnType
:$rt_voidcls(),callable:function(obj,args){Bv();Id(args[0],AVN(args[1]));return null;}},{name:"argb8888ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bi,$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){Bv();APq(args[0],AVN(args[1]));return null;}},{name:"abgr8888ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bi,$rt_floatcls()],returnType:$rt_voidcls(),callable:function(obj,args){Bv();Zn(args[0],A8m(args[1]));return null;}},{name:"fromHsv",modifiers:0,accessLevel:3,parameterTypes
:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:Bi,callable:function(obj,args){return A6N(obj,A8m(args[0]),A8m(args[1]),A8m(args[2]));}},{name:"fromHsv",modifiers:0,accessLevel:3,parameterTypes:[$rt_arraycls($rt_floatcls())],returnType:Bi,callable:function(obj,args){return AUI(obj,args[0]);}},{name:"toHsv",modifiers:0,accessLevel:3,parameterTypes:[$rt_arraycls($rt_floatcls())],returnType:$rt_arraycls($rt_floatcls()),callable:function(obj,args){return A6r(obj,args[0]);}},{name:"cpy",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:Bi,callable:function(obj,args){return A8K(obj);}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){Bv();AUr();return null;}}];}
function A$P(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!a.hd()&&!a.GA()){if(a.iK===null){AZf();b=(a.zY()).$meta;c=b.methods;a.iK=Y(FA,c.length);d=0;e=0;while(e<c.length){f=c[e];if($rt_str(f.name).z(B(399))){g=f.parameterTypes;h=Y(Jx,g.length);i=0;while(true){j=h.data;if(i>=j.length)break;j[i]=Lg(g[i]);i=i+1|0;}j=a.iK.data;k=d+1|0;l=new FA;b=$rt_str(f.name);m=f.modifiers;AAy(l,a,b,m,f.accessLevel,h,Gk(f.callable,"call"));j[d]=l;d=k;}e=e+1|0;}a.iK=I8(a.iK,d);}return a.iK.gn();}return Y(FA,0);}
function ASO(a){var b,c,d,e,f,g,h,i,j;b=a.ro();c=b.data;d=c.length;e=Y(FA,d);f=0;g=0;while(g<d){h=c[g];if(Kq(h.sm())){i=e.data;j=f+1|0;i[f]=h;f=j;}g=g+1|0;}if(f<e.data.length)e=I8(e,f);return e;}
function A7g(a,b){var c,d,e,f;c=(a.ro()).data;d=c.length;e=0;while(true){if(e>=d)G(ASG());f=c[e];if(ABe(f.vu(),b))break;e=e+1|0;}return f;}
function A7e(a,b){var c,d,e,f;c=(a.ro()).data;d=c.length;e=0;while(true){if(e>=d)G(ASG());f=c[e];if(Kq(f.sm())&&ABe(f.vu(),b))break;e=e+1|0;}return f;}
var CN=D();
var Zc=D(CN);
var DK=D(0);
function AB6(){var a=this;C.call(a);a.H=null;a.br=0;}
function A_b(){var a=new AB6();AXa(a);return a;}
function BeK(a){var b=new AB6();AU0(b,a);return b;}
function AXa(a){J(a);a.H=Bc(0);}
function AU0(a,b){J(a);a.H=Bc(((b+32|0)-1|0)/32|0);}
function APh(a,b){var c,d;c=b/32|0;if(b>=a.br){GY(a,c+1|0);a.br=b+1|0;}d=a.H.data;d[c]=d[c]|1<<(b%32|0);}
function AJL(a,b,c){var d,e,f,g;if(b>c)G(C8());d=b/32|0;e=c/32|0;if(c>a.br){GY(a,e+1|0);a.br=c;}if(d==e){f=a.H.data;f[d]=f[d]|F8(a,b)&GQ(a,c);}else{f=a.H.data;f[d]=f[d]|F8(a,b);g=d+1|0;while(g<e){a.H.data[g]=(-1);g=g+1|0;}if(c&31){f=a.H.data;f[e]=f[e]|GQ(a,c);}}}
function F8(a,b){var c;c=b%32|0;return (-1)<<c;}
function GQ(a,b){var c;c=b%32|0;return !c?0:(-1)>>>(32-c|0);}
function A$_(a,b){var c,d;c=b/32|0;if(c<a.H.data.length){d=a.H.data;d[c]=d[c]&Yc((-2),b%32|0);if(b==(a.br-1|0))Fj(a);}}
function AVa(a,b,c){var d,e,f,g,h;if(b>c)G(C8());if(b>=a.br)return;d=Bq(a.br,c);e=b/32|0;f=d/32|0;if(e==f){g=a.H.data;g[e]=g[e]&(GQ(a,b)|F8(a,d));}else{g=a.H.data;g[e]=g[e]&GQ(a,b);h=e+1|0;while(h<f){a.H.data[h]=0;h=h+1|0;}if(d&31){g=a.H.data;g[f]=g[f]&F8(a,d);}}Fj(a);}
function AVg(a,b){var c;c=b/32|0;return c<a.H.data.length&&a.H.data[c]&1<<(b%32|0)?1:0;}
function A$m(a,b){var c,d,e,f,g;if(b>=a.br)return (-1);c=b/32|0;d=a.H.data[c];e=d>>>(b%32|0);if(e)return E3(e)+b|0;f=(a.br+31|0)/32|0;g=c+1|0;while(g<f){if(a.H.data[g])return (g*32|0)+E3(a.H.data[g])|0;g=g+1|0;}return (-1);}
function AOS(a,b){var c,d,e,f,g;if(b>=a.br)return b;c=b/32|0;d=a.H.data[c]^(-1);e=d>>>(b%32|0);if(e)return E3(e)+b|0;f=(a.br+31|0)/32|0;g=c+1|0;while(g<f){if(a.H.data[g]!=(-1))return (g*32|0)+E3(a.H.data[g]^(-1))|0;g=g+1|0;}return a.br;}
function GY(a,b){var c;if(a.H.data.length>=b)return;c=Bf((b*3|0)/2|0,(a.H.data.length*2|0)+1|0);a.H=ATi(a.H,c);}
function Fj(a){var b,c,d;b=(a.br+31|0)/32|0;a.br=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Mu(a.H.data[c]);if(d<32)break;c=c+(-1)|0;a.br=a.br-32|0;}a.br=a.br-d|0;}}
function AOs(a,b){var c,d;c=Bq(a.H.data.length,b.H.data.length);d=0;while(d<c){if(a.H.data[d]&b.H.data[d])return 1;d=d+1|0;}return 0;}
function A9o(a,b){var c,d,e;c=Bq(a.H.data.length,b.H.data.length);d=0;while(d<c){e=a.H.data;e[d]=e[d]&b.H.data[d];d=d+1|0;}while(c<a.H.data.length){a.H.data[c]=0;c=c+1|0;}a.br=Bq(a.br,b.br);Fj(a);}
function ATy(a,b){var c,d,e;c=Bq(a.H.data.length,b.H.data.length);d=0;while(d<c){e=a.H.data;e[d]=e[d]&(b.H.data[d]^(-1));d=d+1|0;}Fj(a);}
function A9f(a,b){var c,d,e;a.br=Bf(a.br,b.br);GY(a,(a.br+31|0)/32|0);c=Bq(a.H.data.length,b.H.data.length);d=0;while(d<c){e=a.H.data;e[d]=e[d]|b.H.data[d];d=d+1|0;}}
function A2n(a,b){var c,d,e;a.br=Bf(a.br,b.br);GY(a,(a.br+31|0)/32|0);c=Bq(a.H.data.length,b.H.data.length);d=0;while(d<c){e=a.H.data;e[d]=e[d]^b.H.data[d];d=d+1|0;}Fj(a);}
function A9y(a){return a.br?0:1;}
function Vx(){Q.call(this);this.I0=null;}
function A_Z(a){var b=new Vx();A$Q(b,a);return b;}
function A$Q(a,b){a.I0=b;Be(a);}
function AG$(a,b){return Rs(b);}
var NS=D(0);
function FN(){var a=this;C.call(a);a.cp=null;a.c7=null;a.ds=null;a.jx=null;a.hq=null;a.eI=null;a.hQ=null;a.k9=0.0;a.jM=0.0;a.ku=0.0;a.mb=0.0;a.rZ=null;a.c4=null;a.F_=null;}
function Lu(a){J(a);a.cp=S();a.c7=Ck(0.0,0.0,(-1.0));a.ds=Ck(0.0,1.0,0.0);a.jx=BF();a.hq=BF();a.eI=BF();a.hQ=BF();a.k9=1.0;a.jM=100.0;a.ku=0.0;a.mb=0.0;a.rZ=BeD();a.c4=S();a.F_=A_A(S(),S());}
function AIy(a,b,c,d){var e;((a.c4.I(b,c,d)).gk(a.cp)).bU();if(!a.c4.yj()){e=a.c4.yt(a.ds);if(CG(e-1.0)<9.999999717180685E-10)(a.ds.M(a.c7)).el((-1.0));else if(CG(e+1.0)<9.999999717180685E-10)a.ds.M(a.c7);a.c7.M(a.c4);a.HF();}}
function A0k(a){(a.c4.M(a.c7)).iz(a.ds);((a.ds.M(a.c4)).iz(a.c7)).bU();}
function A5B(a,b,c){a.c7.rx(b,c);a.ds.rx(b,c);}
function AO1(a,b,c,d){a.c4.M(b);a.c4.gk(a.cp);a.k8(a.c4);a.F3(c,d);a.c4.rx(c,d);a.Kg( -a.c4.n, -a.c4.o, -a.c4.q);}
function APs(a,b,c,d){a.cp.AJ(b,c,d);}
function A$N(a,b){a.cp.fA(b);}
function QD(){var a=this;FN.call(a);a.lG=0.0;a.yL=null;}
function BdP(){var a=new QD();AFW(a);return a;}
function AFW(a){Lu(a);a.lG=1.0;a.yL=S();a.k9=0.0;}
function AX9(a){a.p8(1);}
function A$1(a,b){a.jx.y9(a.lG* -a.ku/2.0,a.lG*a.ku/2.0,a.lG* -(a.mb/2.0),a.lG*a.mb/2.0,a.k9,a.jM);a.hq.BW(a.cp,(a.yL.M(a.cp)).fA(a.c7),a.ds);a.eI.ch(a.jx);G9(a.eI.c,a.hq.c);if(b){a.hQ.ch(a.eI);MX(a.hQ.c);a.rZ.AC(a.hQ);}}
var Hc=D(0);
function HO(){var a=this;C.call(a);a.c3=null;a.oO=0;a.wZ=0;a.ie=0;a.l5=0;a.nK=0;}
function A0p(a,b){var c=new HO();AX_(c,a,b);return c;}
function Bkc(a){var b=new HO();ABo(b,a);return b;}
function AX_(a,b,c){J(a);a.ie=1;a.l5=0;a.wZ=1;a.c3=AAN(c);a.c3.c_();a.oO=BhM.i2();a.nK=!b?35048:35044;}
function ABo(a,b){J(a);a.ie=1;a.l5=0;a.wZ=1;a.c3=AAN(b);a.c3.c_();a.oO=BhM.i2();a.nK=35044;}
function AJR(a){return BE(a.c3);}
function AU_(a){return CU(a.c3);}
function ANG(a,b,c,d){a.ie=1;a.c3.c0();a.c3.Dx(b,c,d);a.c3.c_();if(a.l5){BhM.fC(34963,BE(a.c3),a.c3,a.nK);a.ie=0;}}
function AUq(a){a.ie=1;return a.c3;}
function A9h(a){if(!a.oO)G(U(B(400)));BhM.c8(34963,a.oO);if(a.ie){BhM.fC(34963,BE(a.c3),a.c3,a.nK);a.ie=0;}a.l5=1;}
function A6E(a){BhM.c8(34963,0);a.l5=0;}
var Qq=D(HO);
function Bb$(a){var b=new Qq();A4Q(b,a);return b;}
function A4Q(a,b){ABo(a,b);}
function JA(){D1.call(this);this.Lp=0.0;}
var Bkd=0.0;var Bke=null;function Qt(){Qt=N(JA);AOK();}
function A8m(a){return a.Lp;}
function D9(b){var c,d,e,f,g,h,i,j,k,l,m,n;Qt();if(b.bN())G(Ec());c=0;d=b.i();while(true){if(b.f(c)>32){while(b.f(d-1|0)<=32){d=d+(-1)|0;}e=0;if(b.f(c)==45){c=c+1|0;e=1;}else if(b.f(c)==43)c=c+1|0;if(c==d)G(Ec());a:{f=b.f(c);g=0;h=0;i=0;if(f!=46){i=1;if(f>=48&&f<=57){b:{while(c<d){if(b.f(c)!=48)break b;c=c+1|0;}}while(c<d){j=b.f(c);if(j<48)break a;if(j>57)break a;if(g>=214748355)h=h+1|0;else g=(g*10|0)+(j-48|0)|0;c=c+1|0;}}else G(Ec());}}if(c<d&&b.f(c)==46){c=c+1|0;c:{while(true){if(c>=d)break c;k=b.f(c);if
(k<48)break c;if(k>57)break;if(g<214748355){g=(g*10|0)+(k-48|0)|0;h=h+(-1)|0;}c=c+1|0;i=1;}}if(!i)G(Ec());}if(c<d){j=b.f(c);if(j!=101&&j!=69)G(Ec());j=c+1|0;l=0;if(j==d)G(Ec());if(b.f(j)==45){j=j+1|0;l=1;}else if(b.f(j)==43)j=j+1|0;m=0;n=0;d:{while(true){if(j>=d)break d;k=b.f(j);if(k<48)break d;if(k>57)break;m=(10*m|0)+(k-48|0)|0;n=1;j=j+1|0;}}if(!n)G(Ec());if(l)m= -m|0;h=h+m|0;}e:{j=B8(h,38);if(j<=0){if(j)break e;if(g<=34028234)break e;}return e?(-Infinity):Infinity;}if(e)g= -g|0;return g*AAH(h);}c=c+1|0;if
(c==d)break;}G(Ec());}
function AAH(b){var c,d;Qt();if(b>=0)c=10.0;else{c=0.1;b= -b|0;}d=1.0;while(b){if(b%2|0)d=d*c;c=c*c;b=b/2|0;}return d;}
function Oh(b){Qt();return $rt_floatToIntBits(b);}
function AOK(){Bkd=NaN;Bke=F($rt_floatcls());}
var V4=D();
function JX(b,c){var d,e,f,g;d=b.data;e=BW(c);f=Bq(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Of(b,c){var d,e,f,g;d=b.data;e=Ci(c);f=Bq(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function ATi(b,c){var d,e,f,g;d=b.data;e=Bc(c);f=Bq(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function I8(b,c){var d,e,f,g;d=b.data;e=Lt((Cj(b)).gp(),c);f=Bq(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function AZs(b,c,d,e){var f,g;if(c>d)G(CK());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function IG(b,c){AZs(b,0,b.data.length,c);}
function AQu(b,c,d,e){var f,g;if(c>d)G(CK());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function AO_(b,c){AQu(b,0,b.data.length,c);}
function Hk(b,c,d,e){var f,g;if(c>d)G(CK());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function U6(b,c){Hk(b,0,b.data.length,c);}
function A4e(b,c){return A5c(b,0,b.data.length,c);}
function A5c(b,c,d,e){var f,g,h,i,j;f=B8(c,d);if(f>0)G(CK());if(!f)return (-1);g=d-1|0;while(true){h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>g)return ( -i|0)-2|0;}else{g=i-1|0;if(g<c)return ( -i|0)-1|0;}}return i;}
function ABe(b,c){var d,e,f,g;if(b===c)return 1;if(b!==null&&c!==null){d=c.data;e=b.data;f=e.length;if(f==d.length){g=0;while(g<f){if(!A43(e[g],d[g]))return 0;g=g+1|0;}return 1;}}return 0;}
function Dx(){BJ.call(this);this.fh=0;}
function Qk(a){var b=new Dx();AO8(b,a);return b;}
function AO8(a,b){C1(a);a.fh=b;}
function A1O(a){return 1;}
function AJw(a,b,c){return a.fh!=c.f(b)?(-1):1;}
function AHQ(a,b,c,d){var e,f,g,h;if(!(c instanceof BM))return F3(a,b,c,d);e=c;f=d.J();while(true){if(b>=f)return (-1);g=e.eF(a.fh,b);if(g<0)return (-1);h=a.k;b=g+1|0;if(h.e(b,c,d)>=0)break;}return g;}
function AK3(a,b,c,d,e){var f,g;if(!(d instanceof BM))return Gb(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.mH(a.fh,c);if(g<0)break a;if(g<b)break a;if(a.k.e(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ARN(a){return (((I()).a(B(101))).U(a.fh)).b();}
function AFc(a){return a.fh;}
function ARa(a,b){if(b instanceof Dx)return b.pq()!=a.fh?0:1;if(!(b instanceof Dv)){if(b instanceof C3)return b.p(a.fh);if(!(b instanceof Dt))return 1;return 0;}return b.bH(0,Il(a.fh))<=0?0:1;}
function VR(){Cl.call(this);this.nh=null;}
function Bde(a){var b=new VR();AEW(b,a);return b;}
function AEW(a,b){a.nh=b;D_(a);}
function A$O(a,b,c){var d,e;d=El();e=d.AE();e.GR(AEJ(a.nh),BbY(a,e));d.AE();return 1;}
var Ms=D();
var Bkf=null;function Bc$(){Bc$=N(Ms);AJY();}
function AJY(){Bkf=Bc((QG()).data.length);Bkf.data[BD(Bkg)]=1;Bkf.data[BD(Bkh)]=2;Bkf.data[BD(Bki)]=3;Bkf.data[BD(Bkj)]=4;}
function Wq(){var a=this;Q.call(a);a.sV=0;a.BI=null;a.tQ=null;}
function Bcv(a,b,c){var d=new Wq();ATc(d,a,b,c);return d;}
function ATc(a,b,c,d){a.tQ=b;a.sV=c;a.BI=d;Be(a);}
function AP5(a,b){return !(a.sV^a.tQ.bc.eJ(b))&&!(a.sV^a.tQ.e9^a.BI.p(b))?0:1;}
function Wx(){var a=this;Q.call(a);a.xO=0;a.CJ=null;a.Cr=null;a.Qn=null;}
function Bcs(a,b,c,d){var e=new Wx();AZN(e,a,b,c,d);return e;}
function AZN(a,b,c,d,e){a.Qn=b;a.xO=c;a.CJ=d;a.Cr=e;Be(a);}
function ACX(a,b){return a.xO^(!a.CJ.p(b)&&!a.Cr.p(b)?0:1)?0:1;}
function Ws(){var a=this;Q.call(a);a.CO=null;a.NT=null;}
function Bab(a,b){var c=new Ws();AC$(c,a,b);return c;}
function AC$(a,b,c){a.NT=b;a.CO=c;Be(a);}
function A6x(a,b){return a.CO.p(b);}
var M6=D(0);
function Wr(){var a=this;Q.call(a);a.qf=0;a.zq=null;a.r3=null;}
function A_Y(a,b,c){var d=new Wr();ADk(d,a,b,c);return d;}
function ADk(a,b,c,d){a.r3=b;a.qf=c;a.zq=d;Be(a);}
function A26(a,b){return !(a.qf^a.r3.bc.eJ(b))&&!(a.qf^a.r3.e9^a.zq.p(b))?1:0;}
function Wt(){var a=this;Q.call(a);a.xe=null;a.QB=null;}
function A_$(a,b){var c=new Wt();ADh(c,a,b);return c;}
function ADh(a,b,c){a.QB=b;a.xe=c;Be(a);}
function AJd(a,b){return a.xe.p(b);}
function WA(){var a=this;Q.call(a);a.yq=null;a.Dy=0;a.yi=null;}
function A_t(a,b,c){var d=new WA();AG4(d,a,b,c);return d;}
function AG4(a,b,c,d){a.yi=b;a.yq=c;a.Dy=d;Be(a);}
function AX5(a,b){return !a.yq.p(b)&&!(a.Dy^a.yi.bc.eJ(b))?1:0;}
var GS=D(0);
function Wv(){var a=this;Q.call(a);a.E_=0;a.zr=null;a.zk=null;a.L2=null;}
function Bfg(a,b,c,d){var e=new Wv();ADH(e,a,b,c,d);return e;}
function ADH(a,b,c,d,e){a.L2=b;a.E_=c;a.zr=d;a.zk=e;Be(a);}
function AYL(a,b){return a.E_^(!a.zr.p(b)&&!a.zk.p(b)?0:1);}
function Wu(){var a=this;Q.call(a);a.EO=null;a.Mr=null;}
function Bfq(a,b){var c=new Wu();AUA(c,a,b);return c;}
function AUA(a,b,c){a.Mr=b;a.EO=c;Be(a);}
function AMo(a,b){return a.EO.p(b)?0:1;}
function PZ(){BC.call(this);this.rz=null;}
function BbA(a){var b=new PZ();AGk(b,a);return b;}
function AGk(a,b){CP(a);a.rz=b;}
function A4J(a,b,c,d){var e,f,g,h,i;e=d.J();f=b+1|0;if(f>e){d.d5=1;return (-1);}g=c.f(b);if(BY(g)){h=b+2|0;if(h<=e){i=c.f(f);if(GA(g,i))return a.rz.kY(Df(g,i))?(-1):a.k.e(h,c,d);}}return a.rz.kY(g)?(-1):a.k.e(f,c,d);}
function AXW(a){return B(401);}
function A6T(a,b){a.k=b;}
function ACV(a){return (-2147483602);}
function ATw(a,b){return 1;}
function Wy(){var a=this;Q.call(a);a.x6=null;a.CM=0;a.yX=null;}
function Bc2(a,b,c){var d=new Wy();A0j(d,a,b,c);return d;}
function A0j(a,b,c,d){a.yX=b;a.x6=c;a.CM=d;Be(a);}
function ARL(a,b){return !a.x6.p(b)&&!(a.CM^a.yX.bc.eJ(b))?0:1;}
var DI=D();
var Bkk=null;var Bkl=null;var Bkm=null;var Bkn=null;var Bko=null;var Bkp=null;function Bd(){Bd=N(DI);AVw();}
function Il(b){var c,d;Bd();c=new BM;d=BW(1);d.data[0]=b;Iy(c,d);return c;}
function VB(b){Bd();return b>0&&b<=65535?1:0;}
function Ik(b){Bd();return b>=65536&&b<=1114111?1:0;}
function BY(b){Bd();return (b&64512)!=55296?0:1;}
function BH(b){Bd();return (b&64512)!=56320?0:1;}
function Jz(b){Bd();return !BY(b)&&!BH(b)?0:1;}
function GA(b,c){Bd();return BY(b)&&BH(c)?1:0;}
function Df(b,c){Bd();return ((b&1023)<<10|c&1023)+65536|0;}
function SQ(b,c){Bd();return Wz(b,c,b.data.length);}
function Wz(b,c,d){var e,f;Bd();if(c<(d-1|0)){e=b.data;if(BY(e[c])){f=c+1|0;if(BH(e[f]))return Df(e[c],e[f]);}}return b.data[c];}
function FB(b){var c;Bd();c=b-65536|0;return (55296|c>>10&1023)&65535;}
function Fi(b){Bd();return (56320|b&1023)&65535;}
function Do(b){Bd();return EX(b)&65535;}
function EX(b){Bd();return (AA2(b)).toLowerCase().charCodeAt(0);}
function Dz(b){Bd();return En(b)&65535;}
function En(b){Bd();return (AA2(b)).toUpperCase().charCodeAt(0);}
function NJ(b,c){Bd();return AA7(b,c);}
function AA7(b,c){var d;Bd();if(c>=2&&c<=36){d=MG(b);if(d>=c)d=(-1);return d;}return (-1);}
function Nl(b){Bd();return MG(b);}
function MG(b){var c,d,e,f,g,h,i,j;Bd();c=OQ();d=c.data;e=0;f=(d.length/2|0)-1|0;while(f>=e){g=(e+f|0)/2|0;h=g*2|0;i=d[h];j=B8(b,i);if(j>0)e=g+1|0;else{if(j>=0)return d[h+1|0];f=g-1|0;}}return (-1);}
function FQ(b,c){Bd();if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function ACB(b){Bd();return Cv(b)!=9?0:1;}
function OQ(){Bd();if(Bkl===null)Bkl=A9V(((R1()).value!==null?$rt_str((R1()).value):null));return Bkl;}
function R1(){Bd();if(Bko===null)Bko=YK();return Bko;}
function YM(){Bd();if(Bkm===null)Bkm=ATX(((X_()).value!==null?$rt_str((X_()).value):null));return Bkm;}
function X_(){Bd();if(Bkp===null)Bkp=UX();return Bkp;}
function Eu(b){var c;Bd();if(b<65536){c=BW(1);c.data[0]=b&65535;return c;}return I5([FB(b),Fi(b)]);}
function Q5(b){var c;Bd();a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}c=1;break a;}c=0;}return c;}
function F_(b){Bd();return Cv(b);}
function Cv(b){var c,d,e,f,g,h;Bd();if(VB(b)&&Jz(b&65535))return 19;c=YM();d=c.data;e=0;f=d.length-1|0;while(e<=f){g=(e+f|0)/2|0;h=d[g];if(b>=h.x9)e=g+1|0;else{if(b>=h.tJ)return h.Ci.data[b-h.tJ|0];f=g-1|0;}}return 0;}
function Ud(b){Bd();return Cv(b)!=2?0:1;}
function Vl(b){Bd();return Cv(b)!=1?0:1;}
function O4(b){Bd();return Cv(b)!=3?0:1;}
function RH(b){Bd();return !Cv(b)?0:1;}
function Ua(b){Bd();switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:break;default:return 0;}return 1;}
function M8(b){Bd();return J0(b);}
function J0(b){Bd();a:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Rs(b){Bd();a:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return Fx(b);}
function UT(b){Bd();a:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return Fx(b);}
function Us(b){Bd();a:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break a;default:break a;}return 1;}return Fx(b);}
function Yb(b){Bd();a:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break a;default:break a;}return 1;}return Fx(b);}
function Fx(b){Bd();a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Cv(b)!=16?0:1;}
function MR(b){Bd();switch(Cv(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function S8(b){Bd();return KK(b);}
function KK(b){Bd();switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return MR(b);}return 1;}
function AVw(){Bkk=F($rt_charcls());Bkn=Y(DI,128);}
function YK(){return {"value":"{?*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%slG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%sTEG%%%%%%%%%%%%%%%%%%&5G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%VR#G%%%%%%%%%%%%%"
+"%%%%%"};}
function UX(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
function OO(){var a=this;BJ.call(a);a.sG=0;a.AU=0;}
function AXh(a){var b=new OO();APG(b,a);return b;}
function APG(a,b){C1(a);a.sG=b;a.AU=GF(b);}
function ADz(a,b,c){return a.sG!=c.f(b)&&a.AU!=c.f(b)?(-1):1;}
function AJ1(a){return (((I()).a(B(402))).U(a.sG)).b();}
function Dt(){var a=this;BJ.call(a);a.mI=0;a.lT=0;a.m0=0;}
function A_E(a){var b=new Dt();ATu(b,a);return b;}
function ATu(a,b){var c,d;C1(a);a.bO=2;a.m0=b;c=Eu(b);d=c.data;a.mI=d[0];a.lT=d[1];}
function A6t(a,b,c){var d,e,f;d=b+1|0;e=c.f(b);f=c.f(d);return a.mI==e&&a.lT==f?2:(-1);}
function A4d(a,b,c,d){var e,f,g,h;if(!(c instanceof BM))return F3(a,b,c,d);e=c;f=d.J();while(b<f){g=e.eF(a.mI,b);if(g<0)return (-1);b=g+1|0;if(b>=f)continue;h=e.f(b);if(a.lT==h&&a.k.e(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AFP(a,b,c,d,e){var f,g,h;if(!(d instanceof BM))return Gb(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.mH(a.lT,c);h=g+(-1)|0;if(h<0)break a;if(h<b)break a;if(a.mI==f.f(h)&&a.k.e(h+2|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function A88(a){return ((((I()).a(B(101))).U(a.mI)).U(a.lT)).b();}
function AUE(a){return a.m0;}
function A5_(a,b){if(b instanceof Dt)return b.sQ()!=a.m0?0:1;if(b instanceof C3)return b.p(a.m0);if(b instanceof Dx)return 0;if(!(b instanceof Dv))return 1;return 0;}
function Y7(){var a=this;T.call(a);a.sq=0;a.qg=0;a.vS=0;}
function G6(a,b){var c=new Y7();AHy(c,a,b);return c;}
function BdM(a,b,c){var d=new Y7();AUh(d,a,b,c);return d;}
function AHy(a,b,c){Bo(a);a.qg=c;a.sq=b;}
function AUh(a,b,c,d){Bo(a);a.vS=d;a.qg=c;a.sq=b;}
function AC4(a){var b;b=A_z(a.sq);if(a.vS)b.bG.n1(0,2048);b.be=a.qg;return b;}
var Sr=D();
function R_(){var a=this;C.call(a);a.yS=null;a.gB=null;a.go=null;a.fP=null;}
function BeQ(){var a=new R_();A5N(a);return a;}
function A5N(a){J(a);a.gB=null;a.go=null;a.fP=null;}
var D7=D();
var Bkq=null;var Bkr=null;function Km(a){J(a);}
function MN(b){if(!(b&1)){if(Bkr!==null)return Bkr;Bkr=Be6();return Bkr;}if(Bkq!==null)return Bkq;Bkq=BeE();return Bkq;}
var HU=D(CS);
function Zw(a,b,c,d){FJ(a,b);a.C=c;a.bb=d;}
function UN(b){if(b>=0)return BcT(b);G(W((((I()).a(B(403))).j(b)).b()));}
function Ze(b,c,d){return Bbr(0,b.data.length,b,c,c+d|0,0);}
function La(b){return Ze(b,0,b.data.length);}
function AEh(a,b,c,d){var e,f,g,h,i;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bg((((((I()).a(B(404))).j(g)).a(B(405))).j(f)).b()));if(Bb(a)<d)G(Ux());if(d<0)G(Bg(((((I()).a(B(406))).j(d)).a(B(407))).b()));h=a.C;i=0;while(i<d){g=c+1|0;f=h+1|0;e[c]=a.zT(h);i=i+1|0;c=g;h=f;}a.C=a.C+d|0;return a;}}e=b.data;G(Bg(((((((I()).a(B(408))).j(c)).a(B(64))).j(e.length)).a(B(24))).b()));}
function APm(a,b){return a.rh(b,0,b.data.length);}
function A$R(a,b,c,d){var e,f,g,h,i;if(a.b_())G(C7());if(Bb(a)<d)G(F0());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bg((((((I()).a(B(409))).j(g)).a(B(405))).j(f)).b()));if(d<0)G(Bg(((((I()).a(B(406))).j(d)).a(B(407))).b()));h=a.C;i=0;while(i<d){g=h+1|0;f=c+1|0;a.r_(h,e[c]);i=i+1|0;h=g;c=f;}a.C=a.C+d|0;return a;}}e=b.data;G(Bg(((((((I()).a(B(408))).j(c)).a(B(64))).j(e.length)).a(B(24))).b()));}
function AV_(a,b,c,d){var e,f,g,h,i,j;if(a.b_())G(C7());e=d-c|0;if(Bb(a)<e)G(F0());if(c>=0&&c<b.i()){if(d>b.i()){f=new Ej;g=(((I()).a(B(409))).j(d)).a(B(410));M5(f,(g.j(b.i())).b());G(f);}if(c>d)G(Bg((((((I()).a(B(411))).j(c)).a(B(412))).j(d)).b()));h=a.C;while(c<d){i=h+1|0;j=c+1|0;a.r_(h,b.f(c));h=i;c=j;}a.C=a.C+e|0;return a;}G(Bg(((((((I()).a(B(411))).j(c)).a(B(64))).j(b.i())).a(B(24))).b()));}
function IU(a,b){return a.HM(b,0,b.i());}
function WB(a){return a.Og();}
function NI(a){return a.Nn();}
function K$(a){G7(a);return a;}
function AL_(a,b){GL(a,b);return a;}
var Hs=D(HU);
function P_(a,b,c,d){Zw(a,b,c,d);}
function AEk(a){var b,c,d,e;if(a.b_())G(C7());a:{b=Bb(a);if(a.C>0){c=a.C;d=0;while(true){if(d>=b)break a;e=c+1|0;a.r_(d,a.zT(c));d=d+1|0;c=e;}}}a.C=b;a.bb=a.hz;a.fD=(-1);return a;}
function A$h(a){return a.eZ();}
function Rk(){var a=this;Hs.call(a);a.Fl=0;a.u4=0;a.nz=null;}
function BcT(a){var b=new Rk();A5u(b,a);return b;}
function Bbr(a,b,c,d,e,f){var g=new Rk();U8(g,a,b,c,d,e,f);return g;}
function A5u(a,b){U8(a,0,b,BW(b),0,b,0);}
function U8(a,b,c,d,e,f,g){P_(a,c,e,f);a.u4=b;a.Fl=g;a.nz=d;}
function A4N(a,b){return a.nz.data[b+a.u4|0];}
function A2S(a,b,c){a.nz.data[b+a.u4|0]=c;}
function ANZ(a){return 1;}
function AIE(a){return a.nz;}
function AS6(a){return a.Fl;}
function S4(){var a=this;C.call(a);a.fp=0;a.eG=null;a.eK=null;a.gU=null;a.ih=0;a.xa=0.0;a.p_=0;a.q1=0;a.h0=0;}
function Bc3(a){var b=new S4();AP4(b,a);return b;}
function Bks(a,b){var c=new S4();Q0(c,a,b);return c;}
function AP4(a,b){Q0(a,b,0.800000011920929);}
function Q0(a,b,c){var d;J(a);if(c>0.0&&c<1.0){a.xa=c;d=G3(b,c);a.p_=d*c|0;a.h0=d-1|0;a.q1=CV(O(a.h0));a.eG=Bc(d);a.eK=Y(C,d);return;}G(W((((I()).a(B(40))).cB(c)).b()));}
function AI7(a,b){return Cp(CM(Ce(O(b),Cc(2135587861, 2654435769)),a.q1));}
function IN(a,b){var c,d,e;c=a.eG;d=a.e6(b);while(true){e=c.data[d];if(!e)return  -(d+1|0)|0;if(e==b)break;d=(d+1|0)&a.h0;}return d;}
function A0w(a,b,c){var d,e,f;if(!b){d=a.gU;a.gU=c;if(!a.ih){a.ih=1;a.fp=a.fp+1|0;}return d;}e=IN(a,b);if(e>=0){d=a.eK.data[e];a.eK.data[e]=c;return d;}f= -(e+1|0)|0;a.eG.data[f]=b;a.eK.data[f]=c;f=a.fp+1|0;a.fp=f;if(f>=a.p_)TG(a,a.eG.data.length<<1);return null;}
function Xg(a,b,c){var d,e,f;d=a.eG;e=a.e6(b);while(true){f=d.data;if(!f[e])break;e=(e+1|0)&a.h0;}f[e]=b;a.eK.data[e]=c;}
function ATK(a,b){var c;if(!b)return !a.ih?null:a.gU;c=IN(a,b);return c<0?null:a.eK.data[c];}
function A89(a,b){var c,d,e,f,g,h,i,j,k,l;if(!b){if(!a.ih)return null;a.ih=0;c=a.gU;a.gU=null;a.fp=a.fp-1|0;return c;}d=IN(a,b);if(d<0)return null;e=a.eG;f=a.eK;g=f.data;c=g[d];h=a.h0;i=(d+1|0)&h;while(true){j=e.data;k=j[i];if(!k)break;l=a.e6(k);if(((i-l|0)&h)>((d-l|0)&h)){j[d]=k;g[d]=g[i];d=i;}i=(i+1|0)&h;}j[d]=0;g[d]=null;a.fp=a.fp-1|0;return c;}
function ATo(a,b,c){var d,e,f,g;a:{d=a.eK;if(b===null){if(a.ih&&a.gU===null)return 1;e=d.data;f=a.eG;g=e.length-1|0;while(true){if(g<0)break a;if(f.data[g]&&e[g]===null)break;g=g+(-1)|0;}return 1;}if(c){if(b===a.gU)return 1;e=d.data;g=e.length-1|0;while(true){if(g<0)break a;if(e[g]===b)break;g=g+(-1)|0;}return 1;}if(a.ih&&b.z(a.gU))return 1;e=d.data;g=e.length-1|0;while(true){if(g<0)break a;if(b.z(e[g]))return 1;g=g+(-1)|0;}}return 0;}
function TG(a,b){var c,d,e,f,g;a:{c=a.eG.data.length;a.p_=b*a.xa|0;a.h0=b-1|0;a.q1=CV(O(a.h0));d=a.eG;e=a.eK;a.eG=Bc(b);a.eK=Y(C,b);if(a.fp>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g)Xg(a,g,e.data[f]);f=f+1|0;}}}}
var ABv=D(Dm);
function Bc0(a){var b=new ABv();AHu(b,a);return b;}
function AHu(a,b){GH(a,b,1.0,1.0);}
function APV(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(BY(l)){if(j==d){if(h.dO(2)){j=j+(-1)|0;break a;}Bj();i=Bgj;break a;}m=k[j];if(!BH(m)){i=BU(1);break a;}j=j+(-1)|0;i=F$(2);break a;}if(BH(l))i=BU(1);if(l>=256){j=j+(-1)|0;i=F$(1);break a;}k=e.data;n=f+1|0;k[f]=l<<24>>24;c=j;f=n;}j=c;}h.ek(j);h.dR(f);return i;}
function EA(){var a=this;C.call(a);a.fe=Ba;a.cy=null;a.nZ=0;}
function ATl(){var a=new EA();Lx(a);return a;}
function Lx(a){J(a);a.cy=Bp();a.nZ=1;}
function GP(a){if(!a.nZ){a.cy.Dn(a);a.nZ=1;}}
function Eg(a){return a.fe;}
function BB(a,b){var c;a:{if(Ct(a,b)){c=0;while(true){if(c>=a.cy.h)break a;if(Z((a.cy.l(c)).da,b))return a.cy.l(c);c=c+1|0;}}}return null;}
function HK(a,b,c){return BB(a,c);}
function AJ_(a){a.fe=Ba;a.cy.K();}
function Xo(a,b){a.fe=BN(a.fe,b);}
function Ep(a,b){var c;c=a.KF(b.da);if(c>=0)a.cy.k1(c,b);else{Xo(a,b.da);a.cy.F(b);a.nZ=0;}GP(a);}
function XY(a,b){var c,d,e,f;c=b.data;d=c.length;e=0;while(e<d){f=c[e];Ep(a,f);e=e+1|0;}}
function F7(a,b){var c,d;c=b.fr();while(c.bC()){d=c.bz();Ep(a,d);}}
function Ct(a,b){return Du(b,Ba)&&Z(Br(a.fe,b),b)?1:0;}
function AQl(a,b){var c;a:{if(Ct(a,b)){c=0;while(true){if(c>=a.cy.h)break a;if(Z((a.cy.l(c)).da,b))break;c=c+1|0;}return c;}}return (-1);}
function RS(a,b,c){var d;if(b===a)return 1;if(b!==null&&Z(a.fe,b.fe)){if(!c)return 1;GP(a);GP(b);d=0;while(d<a.cy.h){if(!(a.cy.l(d)).zB(b.cy.l(d)))return 0;d=d+1|0;}return 1;}return 0;}
function QY(a,b,c){return Cp(D4(b.da,c.da));}
function Kb(a){return a.cy.bZ();}
function AWv(a){var b,c,d,e,f;GP(a);b=a.cy.h;c=CA(O(71),a.fe);d=1;e=0;while(e<b){f=Ce(a.fe,O((a.cy.l(e)).bp()));d=(d*7|0)&65535;c=CA(c,Ce(f,O(d)));e=e+1|0;}return Cp(AQ_(c,M9(c,32)));}
function V7(a){return a.F4();}
function Vp(a,b){if(!(b instanceof EA))return 0;if(b===a)return 1;return RS(a,b,1);}
function AWb(a,b,c){return QY(a,b,c);}
function F4(){EA.call(this);this.ms=null;}
var Bkt=0;function Jn(){Jn=N(F4);A9c();}
function Bku(){var a=new F4();Kz(a);return a;}
function Bkv(a){var b=new F4();Jl(b,a);return b;}
function Bdk(a){var b=new F4();NE(b,a);return b;}
function Bcx(a){var b=new F4();AB5(b,a);return b;}
function Bkw(a,b){var c=new F4();KM(c,a,b);return c;}
function Kz(a){var b,c;Jn();b=(I()).a(B(413));c=Bkt+1|0;Bkt=c;Jl(a,(b.j(c)).b());}
function Jl(a,b){Jn();Lx(a);a.ms=b;}
function NE(a,b){Jn();Kz(a);XY(a,b);}
function AB5(a,b){Jn();KM(a,b.ms,b);}
function KM(a,b,c){var d,e;Jn();Jl(a,b);d=Kb(c);while(d.bC()){e=d.bz();Ep(a,e.pd());}}
function A6W(a){return Bcx(a);}
function ALT(a){return V7(a)+(3*a.ms.bp()|0)|0;}
function AH0(a,b){var c;a:{b:{if(b instanceof F4){if(b===a)break b;if(b.ms.z(a.ms)&&Vp(a,b))break b;}c=0;break a;}c=1;}return c;}
function A9c(){Bkt=0;}
function D3(){var a=this;C.call(a);a.rO=0;a.pD=0;a.he=null;}
function N3(a){L_(a,16,2147483647);}
function L_(a,b,c){J(a);a.he=AXq(0,b);a.rO=c;}
function OT(a){return !a.he.h?a.tT():a.he.vo();}
function AGu(a,b){if(b===null)G(W(B(414)));if(a.he.h>=a.rO)a.C5(b);else{a.he.F(b);a.pD=Bf(a.pD,a.he.h);a.zd(b);}}
function AJB(a,b){if(AQY(b,EJ))b.fU();}
function AXX(a,b){}
function UK(a,b){var c,d,e,f,g;if(b===null)G(W(B(41)));c=a.he;d=a.rO;e=0;f=b.h;while(e<f){g=b.l(e);if(g!==null){if(c.h>=d)a.C5(g);else{c.F(g);a.zd(g);}}e=e+1|0;}a.pD=Bf(a.pD,c.h);}
function DV(){D3.call(this);this.nY=null;}
function Jh(a){N3(a);a.nY=Bp();}
function Wb(a){var b;b=OT(a);a.nY.F(b);return b;}
function AMn(a){UK(a,a.nY);a.nY.K();}
var Tz=D(DV);
function Bc9(){var a=new Tz();AD5(a);return a;}
function AD5(a){Jh(a);}
function AMU(a){return A_y();}
function A8O(a){var b;b=Wb(a);b.cu=null;b.c$=null;b.cQ.FM(B(101),null,0,0,0);b.kM=null;b.BL=null;return b;}
function AGx(a){return a.KQ();}
function ANt(a){return a.OC();}
function Z7(){Q.call(this);this.OS=null;}
function Bci(a){var b=new Z7();ADc(b,a);return b;}
function ADc(a,b){a.OS=b;Be(a);}
function A8C(a,b){return O4(b);}
function JG(){var a=this;C.call(a);a.dk=0.0;a.di=0.0;a.dj=0.0;a.d7=0.0;}
var Bkx=null;var Bky=null;function APC(){APC=N(JG);AJQ();}
function AAF(a,b,c,d){var e=new JG();X7(e,a,b,c,d);return e;}
function AVT(){var a=new JG();Ro(a);return a;}
function X7(a,b,c,d,e){APC();J(a);a.nu(b,c,d,e);}
function Ro(a){APC();J(a);a.Ca();}
function AHP(a,b,c,d,e){a.dk=b;a.di=c;a.dj=d;a.d7=e;return a;}
function AMP(a,b){return a.nu(b.dk,b.di,b.dj,b.d7);}
function AYu(a,b,c){return a.JZ(b.n,b.o,b.q,c);}
function A3Y(a){return a.dk*a.dk+a.di*a.di+a.dj*a.dj+a.d7*a.d7;}
function ANa(a){var b,c;b=a.t9();if(b!==0.0&&!Dj(b,1.0)){c=FR(b);a.d7=a.d7/c;a.dk=a.dk/c;a.di=a.di/c;a.dj=a.dj/c;}return a;}
function A2B(a,b){var c,d,e,f,g,h,i,j,k,l;c=b.data;d=a.dk*a.dk;e=a.dk*a.di;f=a.dk*a.dj;g=a.dk*a.d7;h=a.di*a.di;i=a.di*a.dj;j=a.di*a.d7;k=a.dj*a.dj;l=a.dj*a.d7;c[0]=1.0-2.0*(h+k);c[4]=2.0*(e-l);c[8]=2.0*(f+j);c[12]=0.0;c[1]=2.0*(e+l);c[5]=1.0-2.0*(d+k);c[9]=2.0*(i-g);c[13]=0.0;c[2]=2.0*(f-j);c[6]=2.0*(i+g);c[10]=1.0-2.0*(d+h);c[14]=0.0;c[3]=0.0;c[7]=0.0;c[11]=0.0;c[15]=1.0;}
function A$f(a){return a.nu(0.0,0.0,0.0,1.0);}
function AD9(a,b,c,d,e){return a.JO(b,c,d,e*0.01745329238474369);}
function ARn(a,b,c,d,e){var f,g,h,i,j,k;f=TR(b,c,d);if(f===0.0)return a.Ca();g=1.0/f;h=e>=0.0?e%6.2831854820251465:6.2831854820251465- -e%6.2831854820251465;i=h/2.0;j=A7Z(i);k=AEl(i);return (a.nu(g*b*j,g*c*j,g*d*j,k)).JC();}
function AJQ(){Bkx=AAF(0.0,0.0,0.0,0.0);Bky=AAF(0.0,0.0,0.0,0.0);}
var Eb=D();
var Bkz=null;var BkA=null;var BkB=null;var BkC=null;var BkD=null;var BkE=null;function Bdo(){Bdo=N(Eb);ANA();}
function ANA(){Hw();Bkz=BjJ;BkA=Bbu();BkB=BaT();BkC=RA(B(415),1,0);BkD=RA(B(416),0,0);BkE=RA(B(417),0,1);}
var Nz=D();
var BkF=0;function Lb(){Lb=N(Nz);A2w();}
function AAP(b,c,d,e){var f;Lb();if(!BkF){MS(b,c,d,e);return;}a:{f=Bgm.u0();Vr();if(f!==Bhh&&Bgm.u0()!==Bhl){f=Bgm;if(f.u0()!==Bhm){AAv(b,c,d,e);break a;}}XA(b,c);}}
function XA(b,c){var d,e,f,g,h,i,j;Lb();d=BhL;e=c.kv();f=c.bo();g=c.bl();h=c.lX();i=c.lb();j=c.kx();d.ky(b,0,e,f,g,0,h,i,j);BhM.w5(b);}
function AAv(b,c,d,e){var f,g,h,i,j,k,l;Lb();a:{if(!BhI.tV(B(418))){f=BhI;if(!f.tV(B(419))&&BhN===null){MS(b,c,d,e);break a;}}f=BhL;g=c.kv();h=c.bo();i=c.bl();j=c.lX();k=c.lb();l=c.kx();f.ky(b,0,g,h,i,0,j,k,l);BhM.w5(b);}}
function MS(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;Lb();f=BhL;g=c.kv();h=c.bo();i=c.bl();j=c.lX();k=c.lb();l=c.kx();f.ky(b,0,g,h,i,0,j,k,l);if(BhM===null&&d!=e)G(U(B(420)));m=c.bo()/2|0;n=c.bl()/2|0;o=1;while(m>0&&n>0){p=OY(m,n,c.f7());Gv();p.DV(Bi7);p.Le(c,0,0,c.bo(),c.bl(),0,0,m,n);if(o>1)c.iw();f=BhL;j=p.kv();k=p.bo();q=p.bl();g=p.lX();h=p.lb();l=p.kx();f.ky(b,o,j,k,q,0,g,h,l);m=p.bo()/2|0;n=p.bl()/2|0;o=o+1|0;c=p;}}
function A2w(){BkF=1;}
function RD(){Q.call(this);this.G9=null;}
function Bbl(a){var b=new RD();AZR(b,a);return b;}
function AZR(a,b){a.G9=b;Be(a);}
function AZK(a,b){return 0;}
var G4=D();
var BkG=null;function RY(a){J(a);}
function El(){return BkG;}
function YX(){C2.call(this);this.NH=null;}
function Bfp(a){var b=new YX();AEP(b,a);return b;}
function AEP(a,b){FX(a);a.NH=b;}
var GI=D(CS);
function Pv(a,b,c,d){FJ(a,b);a.C=c;a.bb=d;}
function AIg(b,c,d){return Bep(0,b.data.length,b,c,c+d|0,0);}
function A3r(b){return AIg(b,0,b.data.length);}
function A70(a,b,c,d){var e,f,g,h,i;if(a.b_())G(C7());if(Bb(a)<d)G(F0());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bg((((((I()).a(B(421))).j(g)).a(B(405))).j(f)).b()));if(d<0)G(Bg(((((I()).a(B(406))).j(d)).a(B(407))).b()));h=a.C;i=0;while(i<d){g=h+1|0;f=c+1|0;a.qS(h,e[c]);i=i+1|0;h=g;c=f;}a.C=a.C+d|0;return a;}}e=b.data;G(Bg(((((((I()).a(B(408))).j(c)).a(B(64))).j(e.length)).a(B(24))).b()));}
function Uk(a){FZ(a);return a;}
function AB2(a){G7(a);return a;}
function APz(a,b){IZ(a,b);return a;}
function A61(a,b){GL(a,b);return a;}
function A77(a){return AB2(a);}
function ATs(a){return Uk(a);}
function A2_(a,b){return a.HR(b);}
function AVc(a,b){return a.Hy(b);}
var Fh=D(GI);
function Lq(a,b,c,d){Pv(a,b,c,d);}
function A57(a,b){if(b>=0&&b<a.bb)return a.vj(b);G(Bg(((((((I()).a(B(355))).j(b)).a(B(64))).j(a.bb)).a(B(24))).b()));}
function A18(a){return a.eZ();}
function Fr(){var a=this;Fh.call(a);a.fG=null;a.wD=0;a.fB=0;}
function Ls(a,b,c,d,e,f,g){Lq(a,c,e,f);a.fB=b;a.fG=d;a.wD=g;}
function A0T(a){return a.wD;}
var VJ=D(Fr);
function Bfk(a,b,c,d,e,f){var g=new VJ();A2O(g,a,b,c,d,e,f);return g;}
function A2O(a,b,c,d,e,f,g){Ls(a,b,c,d,e,f,g);}
function AX4(a,b){var c,d,e,f;c=a.fG.A.data;d=a.fB;e=b*2|0;f=c[d+e|0]&255|(a.fG.A.data[(a.fB+e|0)+1|0]&255)<<8;return f<<16>>16;}
function AXn(a,b,c){var d,e,f;d=a.fG.A.data;e=a.fB;f=b*2|0;d[e+f|0]=c<<24>>24;a.fG.A.data[(a.fB+f|0)+1|0]=c>>8<<24>>24;}
function Yz(){Q.call(this);this.Ii=null;}
function A_S(a){var b=new Yz();AZS(b,a);return b;}
function AZS(a,b){a.Ii=b;Be(a);}
function APK(a,b){return Q5(b);}
var DU=D(CS);
function AAr(a,b,c,d){FJ(a,b);a.C=c;a.bb=d;}
function A9z(b,c,d){return BaJ(0,b.data.length,b,c,c+d|0,0);}
function AU7(b){return A9z(b,0,b.data.length);}
function ANm(a,b,c,d){var e,f,g,h,i;if(a.b_())G(C7());if(Bb(a)<d)G(F0());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bg((((((I()).a(B(422))).j(g)).a(B(405))).j(f)).b()));if(d<0)G(Bg(((((I()).a(B(406))).j(d)).a(B(407))).b()));h=a.C;i=0;while(i<d){g=h+1|0;f=c+1|0;a.ne(h,e[c]);i=i+1|0;h=g;c=f;}a.C=a.C+d|0;return a;}}e=b.data;G(Bg(((((((I()).a(B(408))).j(c)).a(B(64))).j(e.length)).a(B(24))).b()));}
function R0(a){FZ(a);return a;}
function Wf(a){G7(a);return a;}
function AI6(a,b){IZ(a,b);return a;}
function A4o(a,b){GL(a,b);return a;}
function AJm(a){return Wf(a);}
function ATH(a){return R0(a);}
function AOG(a,b){return a.OI(b);}
function ASQ(a,b){return a.Mv(b);}
var Fu=D(DU);
function K3(a,b,c,d){AAr(a,b,c,d);}
function AKQ(a,b){if(b>=0&&b<a.bb)return a.vk(b);G(Bg(((((((I()).a(B(355))).j(b)).a(B(64))).j(a.bb)).a(B(24))).b()));}
function A$d(a,b,c){if(a.b_())G(C7());if(b>=0&&b<a.bb){a.ne(b,c);return a;}G(Bg(((((((I()).a(B(355))).j(b)).a(B(64))).j(a.bb)).a(B(24))).b()));}
function AYp(a){return a.eZ();}
function ER(){var a=this;Fu.call(a);a.cv=null;a.E$=0;a.cj=0;}
function LO(a,b,c,d,e,f,g){K3(a,c,e,f);a.cj=b;a.cv=d;a.E$=g;}
function A4$(a){return a.E$;}
function ABE(){Bt.call(this);this.l9=0;}
function BaU(a){var b=new ABE();AZ5(b,a);return b;}
function AZ5(a,b){Co(a);a.l9=b;}
function ALk(a,b,c,d){var e;e=!d.jy()?c.i():d.J();if(b>=e){d.by(a.l9,0);return a.k.e(b,c,d);}if((e-b|0)==1&&c.f(b)==10){d.by(a.l9,1);return a.k.e(b+1|0,c,d);}return (-1);}
function AZ1(a,b){var c;c=!b.et(a.l9)?0:1;b.by(a.l9,(-1));return c;}
function AL8(a){return B(423);}
function Up(){BJ.call(this);this.sU=0;}
function A58(a){var b=new Up();A32(b,a);return b;}
function A32(a,b){C1(a);a.sU=Do(Dz(b));}
function AUd(a,b,c){return a.sU!=Do(Dz(c.f(b)))?(-1):1;}
function A4Z(a){return (((I()).a(B(424))).U(a.sU)).b();}
function Hp(){BI.call(this);this.D3=null;}
var BkH=Ba;function A3n(){A3n=N(Hp);A5Q();}
function A5Q(){BkH=BO(B(425));}
function E5(){var a=this;C.call(a);a.P=null;a.h=0;a.gP=0;a.qo=null;}
function Bp(){var a=new E5();AFF(a);return a;}
function DJ(a){var b=new E5();On(b,a);return b;}
function AXq(a,b){var c=new E5();Kj(c,a,b);return c;}
function BkI(a,b,c){var d=new E5();Vh(d,a,b,c);return d;}
function BeO(a){var b=new E5();A7F(b,a);return b;}
function BkJ(a,b,c,d){var e=new E5();Rm(e,a,b,c,d);return e;}
function AFF(a){Kj(a,1,16);}
function On(a,b){Kj(a,1,b);}
function Kj(a,b,c){J(a);a.gP=b;a.P=Y(C,c);}
function Vh(a,b,c,d){J(a);a.gP=b;a.P=EW(d,c);}
function A7F(a,b){Rm(a,1,b,0,b.data.length);}
function Rm(a,b,c,d,e){Vh(a,b,e,(Cj(c)).gp());a.h=e;X(c,d,a.P,0,a.h);}
function APM(a,b){var c,d,e;c=a.P;d=c.data;if(a.h==d.length)c=a.j9(Bf(8,a.h*1.75|0));d=c.data;e=a.h;a.h=e+1|0;d[e]=b;}
function AJS(a,b){a.rI(b.P,0,b.h);}
function ADK(a,b,c,d){if((c+d|0)<=b.h){a.rI(b.P,c,d);return;}G(W((((((((I()).a(B(426))).j(c)).a(B(427))).j(d)).a(B(428))).j(b.h)).b()));}
function AI9(a,b){a.rI(b,0,b.data.length);}
function AFs(a,b,c,d){var e,f,g;e=a.P;f=e.data;g=a.h+d|0;if(g>f.length)e=a.j9(Bf(Bf(8,g),a.h*1.75|0));X(b,c,e,a.h,d);a.h=g;}
function A9n(a,b){if(b<a.h)return a.P.data[b];G(Bg((((((I()).a(B(429))).j(b)).a(B(430))).j(a.h)).b()));}
function APu(a,b,c){if(b<a.h){a.P.data[b]=c;return;}G(Bg((((((I()).a(B(429))).j(b)).a(B(430))).j(a.h)).b()));}
function A3h(a,b,c){var d,e;if(b>a.h)G(Bg((((((I()).a(B(431))).j(b)).a(B(432))).j(a.h)).b()));d=a.P;e=d.data;if(a.h==e.length)d=a.j9(Bf(8,a.h*1.75|0));if(!a.gP){e=d.data;e[a.h]=e[b];}else X(d,b,d,b+1|0,a.h-b|0);e=d.data;a.h=a.h+1|0;e[b]=c;}
function AZo(a,b,c){var d,e,f,g;a:{d=a.P;e=a.h-1|0;if(!(!c&&b!==null)){while(true){if(e<0)break a;f=d.data;g=e+(-1)|0;if(f[e]===b)break;e=g;}return 1;}while(true){if(e<0)break a;f=d.data;g=e+(-1)|0;if(b.z(f[e]))return 1;e=g;}}return 0;}
function AGM(a,b,c){var d,e,f;a:{d=a.P;if(!c&&b!==null){e=0;f=a.h;while(true){if(e>=f)break a;if(b.z(d.data[e]))break;e=e+1|0;}return e;}e=0;f=a.h;while(true){if(e>=f)break a;if(d.data[e]===b)break;e=e+1|0;}return e;}return (-1);}
function AGN(a,b,c){var d,e,f;a:{d=a.P;if(!(!c&&b!==null)){e=0;f=a.h;while(e<f){if(d.data[e]===b){a.sr(e);return 1;}e=e+1|0;}}else{e=0;f=a.h;while(true){if(e>=f)break a;if(b.z(d.data[e])){a.sr(e);return 1;}e=e+1|0;}}}return 0;}
function AOX(a,b){var c,d,e;if(b>=a.h)G(Bg((((((I()).a(B(429))).j(b)).a(B(430))).j(a.h)).b()));c=a.P;d=c.data;e=d[b];a.h=a.h-1|0;if(!a.gP)d[b]=d[a.h];else X(c,b+1|0,c,b,a.h-b|0);d[a.h]=null;return e;}
function AHh(a,b,c){var d,e,f,g,h,i;d=a.h;if(c>=d)G(Bg((((((I()).a(B(433))).j(c)).a(B(430))).j(a.h)).b()));if(b>c)G(Bg((((((I()).a(B(434))).j(b)).a(B(432))).j(c)).b()));e=a.P;f=(c-b|0)+1|0;g=d-f|0;if(a.gP){h=b+f|0;X(e,h,e,b,d-h|0);}else{i=Bf(g,c+1|0);X(e,i,e,b,d-i|0);}i=g;while(i<d){e.data[i]=null;i=i+1|0;}a.h=g;}
function AVe(a){var b;if(!a.h)G(DP(B(435)));a.h=a.h-1|0;b=a.P.data[a.h];a.P.data[a.h]=null;return b;}
function ATh(a){if(!a.h)G(DP(B(435)));return a.P.data[a.h-1|0];}
function A$$(a){if(!a.h)G(DP(B(435)));return a.P.data[0];}
function AZg(a){Hk(a.P,0,a.h,null);a.h=0;}
function ARd(a,b){var c;if(b<0)G(W((((I()).a(B(436))).j(b)).b()));c=a.h+b|0;if(c>a.P.data.length)a.j9(Bf(Bf(8,c),a.h*1.75|0));return a.P;}
function AYF(a,b){var c,d,e;c=a.P;d=EW((Cj(c)).gp(),b);e=d.data;X(c,0,d,0,Bq(a.h,e.length));a.P=d;return d;}
function ATm(a,b){(AH9()).O0(a.P,b,0,a.h);}
function AKn(a){if(BkK)return K6(a,1);if(a.qo===null)a.qo=Bcp(a);return a.qo.bZ();}
function AD0(a,b){var c;if(b<0)G(W((((I()).a(B(437))).j(b)).b()));if(a.h<=b)return;c=b;while(c<a.h){a.P.data[c]=null;c=c+1|0;}a.h=b;}
function AWc(a){var b,c,d,e,f,g;if(!a.gP)return MM(a);b=a.P;c=1;d=0;e=a.h;while(d<e){f=b.data;c=c*31|0;g=f[d];if(g!==null)c=c+g.bp()|0;d=d+1|0;}return c;}
function ALA(a,b){var c,d,e,f,g,h,i,j;if(b===a)return 1;if(!a.gP)return 0;if(!(b instanceof E5))return 0;c=b;if(!c.gP)return 0;d=a.h;if(d!=c.h)return 0;e=a.P;f=c.P;g=0;a:{while(g<d){b:{h=f.data;i=e.data[g];j=h[g];if(i!==null){if(i.z(j))break b;else break a;}if(j!==null)break a;}g=g+1|0;}return 1;}return 0;}
function ARe(a){var b,c,d,e;if(!a.h)return B(438);b=a.P;c=b.data;d=AS7(32);d.lv(91);d.yl(c[0]);e=1;while(e<a.h){d.CB(B(439));d.yl(c[e]);e=e+1|0;}d.lv(93);return d.b();}
function AEr(b){return BeO(b);}
function AFL(a){return a.bZ();}
var QB=D(CZ);
function BaT(){var a=new QB();AX0(a);return a;}
function AX0(a){GG(a,B(440),Y(BM,0));}
function A$c(a){return A_P(a);}
function A7m(a){return Bc0(a);}
function EC(){Bx.call(this);this.z_=0;}
var BkL=null;var Bjz=null;var BkM=null;var BkN=null;function AUm(){AUm=N(EC);A02();}
function X5(a,b,c){var d=new EC();Zg(d,a,b,c);return d;}
function Zg(a,b,c,d){AUm();Cw(a,b,c);a.z_=d;}
function G8(a){return a.z_;}
function A02(){BkL=X5(B(441),0,33648);Bjz=X5(B(442),1,33071);BkM=X5(B(443),2,10497);BkN=H(EC,[BkL,Bjz,BkM]);}
function K8(){Cy.call(this);this.AH=0;}
function BkO(a){var b=new K8();UM(b,a);return b;}
function UM(a,b){Et(a,b);}
function AVq(a,b,c,d){var e;e=a.j$();d.by(e,b-d.et(e)|0);a.AH=b;return b;}
function AFH(a){return a.AH;}
function AQt(a){return B(444);}
function A5k(a,b){return 0;}
function Je(){BC.call(this);this.hn=0;}
function ANV(a){var b=new Je();AFN(b,a);return b;}
function AFN(a,b){CP(a);a.hn=b;}
function A48(a,b){a.k=b;}
function AXH(a,b,c,d){var e,f,g;e=b+1|0;if(e>d.J()){d.d5=1;return (-1);}f=c.f(b);if(b>d.dI()){g=c.f(b-1|0);if(BY(g))return (-1);}if(a.hn!=f)return (-1);return a.k.e(e,c,d);}
function AJF(a,b,c,d){var e,f,g,h,i;if(!(c instanceof BM))return F3(a,b,c,d);e=c;f=d.dI();g=d.J();while(true){if(b>=g)return (-1);h=e.eF(a.hn,b);if(h<0)return (-1);if(h>f&&BY(e.f(h-1|0))){b=h+1|0;continue;}i=a.k;b=h+1|0;if(i.e(b,c,d)>=0)break;}return h;}
function AYA(a,b,c,d,e){var f,g,h;if(!(d instanceof BM))return Gb(a,b,c,d,e);f=e.dI();g=d;a:{while(true){if(c<b)return (-1);h=g.mH(a.hn,c);if(h<0)break a;if(h<b)break a;if(h>f&&BY(g.f(h-1|0))){c=h+(-2)|0;continue;}if(a.k.e(h+1|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function AQU(a){return (((I()).a(B(101))).U(a.hn)).b();}
function ADQ(a,b){if(b instanceof Dx)return 0;if(b instanceof Dv)return 0;if(b instanceof C3)return 0;if(b instanceof Dt)return 0;if(b instanceof Jj)return 0;if(!(b instanceof Je))return 1;return b.hn!=a.hn?0:1;}
function AQ1(a,b){return 1;}
var ACH=D();
var MC=D(0);
function W9(){var a=this;C.call(a);a.us=null;a.sp=null;a.so=null;}
function A_u(){var a=new W9();ASK(a);return a;}
function ASK(a){J(a);a.sp=S();a.so=S();}
function A0d(a,b,c){a.us=b;c.Dn(a);}
function L3(a,b,c,d){if(c.yj())b.uw(d);else if(b.MJ())(d.M(c)).kK(b);else (b.uw(d)).fA(c);return d;}
function AYf(a,b,c){var d,e,f,g,h,i;d=b.c$;GO();e=Ct(d,Bjb)&&(BB(b.c$,Bjb)).Fd?1:0;f=Ct(c.c$,Bjb)&&(BB(c.c$,Bjb)).Fd?1:0;if(e!=f)return !e?(-1):1;L3(a,b.dy,b.cQ.f0,a.sp);L3(a,c.dy,c.cQ.f0,a.so);g=(1000.0*a.us.cp.BR(a.sp)|0)-(1000.0*a.us.cp.BR(a.so)|0)|0;h=B8(g,0.0);i=h<0?(-1):h<=0?0:1;if(e)i= -i|0;return i;}
function A66(a,b,c){return a.IL(b,c);}
var ACa=D(D5);
function AZu(a,b){var c=new ACa();AHc(c,a,b);return c;}
function AHc(a,b,c){SR(a,b,c);}
function Es(){var a=this;CH.call(a);a.fX=null;a.ea=0;}
function BkP(a,b,c,d,e){var f=new Es();It(f,a,b,c,d,e);return f;}
function It(a,b,c,d,e,f){Fd(a,c,d,e);a.fX=b;a.ea=f;}
function A$0(a,b,c,d){var e,f,g,h;e=d.zb(a.ea);if(!a.Y.ba(d))return a.k.e(b,c,d);if(e>=a.fX.iG())return a.k.e(b,c,d);f=a.ea;g=e+1|0;d.fM(f,g);h=a.Y.e(b,c,d);if(h>=0){d.fM(a.ea,0);return h;}f=a.ea;g=g+(-1)|0;d.fM(f,g);if(g>=a.fX.ja())return a.k.e(b,c,d);d.fM(a.ea,0);return (-1);}
function ASc(a){return a.fX.b();}
var Lw=D(Es);
function BkQ(a,b,c,d,e){var f=new Lw();Sk(f,a,b,c,d,e);return f;}
function Sk(a,b,c,d,e,f){It(a,b,c,d,e,f);}
function AVt(a,b,c,d){var e,f;e=d.zb(a.ea);if(!a.Y.ba(d))return a.k.e(b,c,d);if(e>=a.fX.iG()){d.fM(a.ea,0);return a.k.e(b,c,d);}if(e<a.fX.ja()){d.fM(a.ea,e+1|0);f=a.Y.e(b,c,d);}else{f=a.k.e(b,c,d);if(f>=0){d.fM(a.ea,0);return f;}d.fM(a.ea,e+1|0);f=a.Y.e(b,c,d);}return f;}
var UY=D();
function Sh(b){a:{switch(b){case 8:break;case 9:return 61;case 10:case 11:case 12:case 14:case 15:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 41:case 42:case 43:case 44:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 93:case 94:case 95:case 108:case 124:case 125:case 126:case 127:case 128:case 129:case 130:case 131:case 132:case 133:case 134:case 135:case 136:case 137:case 138:case 139:case 140:case 141:case 142:case 143:case 146:case 147:case 148:case 149:case 150:case 151:case 152:case 153:case 154:case 155:case 156:case 157:case 158:case 159:case 160:case 161:case 162:case 163:case 164:case 165:case 166:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 177:case 178:case 179:case 180:case 181:case 182:case 183:case 184:case 185:case 193:case 194:case 195:case 196:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 207:case 208:case 209:case 210:case 211:case 212:case 213:case 214:case 215:case 216:case 217:case 218:break a;case 13:return 66;case 16:return 59;case 17:return 129;case 18:return 57;case 19:return 0;case 20:return 0;case 27:return 111;case 32:return 62;case 33:return 92;case 34:return 93;case 35:return 123;case 36:return 3;case 37:return 21;case 38:return 19;case 39:return 22;case 40:return 20;case 45:return 124;case 46:return 112;case 48:return 7;case 49:return 8;case 50:return 9;case 51:return 10;case 52:return 11;case 53:return 12;case 54:return 13;case 55:return 14;case 56:return 15;case 57:return 16;case 65:return 29;case 66:return 30;case 67:return 31;case 68:return 32;case 69:return 33;case 70:return 34;case 71:return 35;case 72:return 36;case 73:return 37;case 74:return 38;case 75:return 39;case 76:return 40;case 77:return 41;case 78:return 42;case 79:return 43;case 80:return 44;case 81:return 45;case 82:return 46;case 83:return 47;case 84:return 48;case 85:return 49;case 86:return 50;case 87:return 51;case 88:return 52;case 89:return 53;case 90:return 54;case 91:return 0;case 92:return 0;case 96:return 144;case 97:return 145;case 98:return 146;case 99:return 147;case 100:return 148;case 101:return 149;case 102:return 150;case 103:return 151;case 104:return 152;case 105:return 153;case 106:return 0;case 107:return 81;case 109:return 69;case 110:return 56;case 111:return 0;case 112:return 131;case 113:return 132;case 114:return 133;case 115:return 134;case 116:return 135;case 117:return 136;case 118:return 137;case 119:return 138;case 120:return 139;case 121:return 140;case 122:return 141;case 123:return 142;case 144:return 78;case 145:return 0;case 186:return 74;case 187:return 70;case 188:return 55;case 189:return 69;case 190:return 56;case 191:return 76;case 192:return 0;case 219:return 71;case 220:return 73;case 221:return 72;case 222:return 75;default:break a;}return 67;}return 0;}
function Js(b){if(b==1)return 0;if(b==2)return 1;if(b!=4)return 0;return 2;}
var ML=D(0);
var Ml=D(0);
function IF(){Jb.call(this);this.gQ=0;}
function Y3(a){Ui(a);}
function AH5(a){return BcS(a);}
var Ln=D(0);
function V9(){var a=this;IF.call(a);a.cP=null;a.c5=0;}
function SB(){var a=new V9();AIv(a);return a;}
function BkR(a){var b=new V9();OP(b,a);return b;}
function AIv(a){OP(a,10);}
function OP(a,b){Y3(a);a.cP=Y(C,b);}
function AVv(a,b){var c;if(a.cP.data.length<b){c=a.cP.data.length>=1073741823?2147483647:Bf(b,Bf(a.cP.data.length*2|0,5));a.cP=I8(a.cP,c);}}
function A6p(a,b){JL(a,b);return a.cP.data[b];}
function A4_(a){return a.c5;}
function AR$(a,b){var c,d;a.gX(a.c5+1|0);c=a.cP.data;d=a.c5;a.c5=d+1|0;c[d]=b;a.gQ=a.gQ+1|0;return 1;}
function A1B(a,b,c){var d;Qh(a,b);a.gX(a.c5+1|0);d=a.c5;while(d>b){a.cP.data[d]=a.cP.data[d-1|0];d=d+(-1)|0;}a.cP.data[b]=c;a.c5=a.c5+1|0;a.gQ=a.gQ+1|0;}
function APO(a,b){var c,d,e,f;JL(a,b);c=a.cP.data[b];a.c5=a.c5-1|0;while(b<a.c5){d=a.cP.data;e=a.cP.data;f=b+1|0;d[b]=e[f];b=f;}a.cP.data[a.c5]=null;a.gQ=a.gQ+1|0;return c;}
function JL(a,b){if(b>=0&&b<a.c5)return;G(C8());}
function Qh(a,b){if(b>=0&&b<=a.c5)return;G(C8());}
var Yt=D(Bm);
function AP3(){var a=new Yt();A2T(a);return a;}
function A2T(a){Cx(a);}
function Ef(){CF.call(this);this.gf=null;}
function Bdm(a,b,c,d){var e=new Ef();K0(e,a,b,c,d);return e;}
function K0(a,b,c,d,e){E4(a,c,d,e);a.gf=b;}
function AV3(a,b,c,d){var e,f,g,h;e=a.gf.ja();f=a.gf.iG();g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.bv.cg()|0)>d.J())break a;h=a.bv.bH(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.k.e(b,c,d);if(h>=0)break;b=b-a.bv.cg()|0;g=g+(-1)|0;}return h;}if((b+a.bv.cg()|0)>d.J()){d.d5=1;return (-1);}h=a.bv.bH(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function AWE(a){return a.gf.b();}
function C3(){var a=this;BC.call(a);a.d1=null;a.rD=0;}
function A1V(a){var b=new C3();AAn(b,a);return b;}
function AAn(a,b){CP(a);a.d1=b.me();a.rD=b.bD;}
function AY9(a,b,c,d){var e,f,g,h,i,j;e=d.J();if(b<e){f=b+1|0;g=c.f(b);if(a.p(g)){h=a.k.e(f,c,d);if(h>0)return h;}if(f<e){i=f+1|0;j=c.f(f);if(GA(g,j)&&a.p(Df(g,j)))return a.k.e(i,c,d);}}return (-1);}
function A9I(a){return ((((I()).a(B(55))).a(!a.rD?B(56):B(57))).a(a.d1.b())).b();}
function AIw(a,b){return a.d1.p(b);}
function AEx(a,b){if(b instanceof Dt)return IY(a.d1,b.sQ());if(b instanceof Dx)return IY(a.d1,b.pq());if(b instanceof C3)return GU(a.d1,b.d1);if(!(b instanceof Dv))return 1;return GU(a.d1,b.uI());}
function AK0(a){return a.d1;}
function A7C(a,b){a.k=b;}
function AH$(a,b){return 1;}
var Yp=D(FP);
function A_7(a,b,c){var d=new Yp();AOD(d,a,b,c);return d;}
function AOD(a,b,c,d){Mj(a,b,c,d);}
function AFJ(a,b,c,d){var e;if(!a.Y.ba(d))return a.k.e(b,c,d);e=a.k.e(b,c,d);if(e<0)e=a.Y.e(b,c,d);return e;}
var Qi=D();
function AHH(b,c){var d,e,f;a:{d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}e=b>>>6;f=d|e&8;f=f|b<<2&16;e=f|e&32;e=e|b>>>8&64;e=e|b>>>5&128;e=e|b&256;e=e|b<<8&512;e=e|b<<10&1024;e=e|b<<1&2048;return e;}
function BM(){var a=this;C.call(a);a.S=null;a.mN=0;}
var BkS=null;function Em(){Em=N(BM);ARF();}
function Mf(a){var b=new BM();Iy(b,a);return b;}
function F1(a,b,c){var d=new BM();OD(d,a,b,c);return d;}
function BkT(a,b,c,d){var e=new BM();J1(e,a,b,c,d);return e;}
function BkU(a,b,c,d){var e=new BM();KL(e,a,b,c,d);return e;}
function BaY(a,b){var c=new BM();TE(c,a,b);return c;}
function Bfj(a,b,c){var d=new BM();OH(d,a,b,c);return d;}
function Iy(a,b){var c,d,e;Em();c=b.data;J(a);d=c.length;a.S=BW(d);e=0;while(e<d){a.S.data[e]=c[e];e=e+1|0;}}
function OD(a,b,c,d){var e,f;Em();J(a);a.S=BW(d);e=0;while(e<d){f=b.data;a.S.data[e]=f[e+c|0];e=e+1|0;}}
function J1(a,b,c,d,e){Em();KL(a,b,c,d,OW(e.b()));}
function KL(a,b,c,d,e){Em();J(a);S5(a,b,c,d,e);}
function TE(a,b,c){Em();J1(a,b,0,b.data.length,c);}
function OH(a,b,c,d){var e,f,g,h,i,j,k;Em();J(a);a.S=BW(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.S.data;j=e+1|0;g[e]=i&65535;}else{g=a.S.data;k=e+1|0;g[e]=FB(i);g=a.S.data;j=k+1|0;g[k]=Fi(i);}f=f+1|0;c=h;e=j;}if(e<a.S.data.length)a.S=JX(a.S,e);}
function S5(a,b,c,d,e){var f;f=ZD(e,Y5(b,c,d));if(WB(f)&&!B7(f)&&BE(f)==CU(f))a.S=NI(f);else{a.S=BW(Bb(f));f.Mh(a.S);}}
function AVZ(a,b){if(b>=0&&b<a.S.data.length)return a.S.data[b];G(Ki());}
function AZ0(a){return a.S.data.length;}
function A1M(a){return a.S.data.length?0:1;}
function AHT(a,b,c,d,e){var f,g,h;if(b>=0&&b<=c&&c<=a.i()&&e>=0){f=d.data;if((e+(c-b|0)|0)<=f.length){while(b<c){g=e+1|0;h=b+1|0;f[e]=a.f(b);e=g;b=h;}return;}}G(C8());}
function A82(a,b){var c,d,e,f,g;if(a===b)return 0;c=Bq(a.i(),b.i());d=0;while(true){if(d>=c)return a.i()-b.i()|0;e=a.f(d);f=b.f(d);g=e-f|0;if(g)break;d=d+1|0;}return g;}
function A5z(a,b,c){var d,e,f;if((c+b.i()|0)>a.i())return 0;d=0;while(d<b.i()){e=b.f(d);f=c+1|0;if(e!=a.f(c))return 0;d=d+1|0;c=f;}return 1;}
function A1R(a,b){if(a===b)return 1;return a.zE(b,0);}
function AY7(a,b){var c,d,e,f;if(a===b)return 1;if(b.i()>a.i())return 0;c=0;d=a.i()-b.i()|0;while(d<a.i()){e=a.f(d);f=c+1|0;if(e!=b.f(c))return 0;d=d+1|0;c=f;}return 1;}
function A4w(a,b,c){var d,e,f,g;d=Bf(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.S.data.length)return (-1);if(a.S.data[d]==e)break;d=d+1|0;}return d;}f=FB(b);g=Fi(b);while(true){if(d>=(a.S.data.length-1|0))return (-1);if(a.S.data[d]==f&&a.S.data[d+1|0]==g)break;d=d+1|0;}return d;}
function AY6(a,b){return a.eF(b,0);}
function AV7(a,b,c){var d,e,f,g,h,i;d=Bq(c,a.i()-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.S.data[d]==e)break;d=d+(-1)|0;}return d;}f=FB(b);g=Fi(b);while(true){if(d<1)return (-1);if(a.S.data[d]==g){h=a.S.data;i=d-1|0;if(h[i]==f)break;}d=d+(-1)|0;}return i;}
function AKh(a,b){return a.mH(b,a.i()-1|0);}
function AYM(a,b,c){var d,e,f;d=Bf(0,c);e=a.i()-b.i()|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=b.i())break a;if(a.f(d+f|0)!=b.f(f))break;f=f+1|0;}d=d+1|0;}return d;}
function A46(a,b){return a.uu(b,0);}
function AHK(a,b,c){var d,e;d=Bq(c,a.i()-b.i()|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.i())break a;if(a.f(d+e|0)!=b.f(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AJW(a,b){return a.z5(b,a.i());}
function ADG(a,b,c){if(b>c)G(C8());return F1(a.S,b,c-b|0);}
function AKk(a,b){return a.ce(b,a.i());}
function AH3(a,b,c){return a.ce(b,c);}
function AT4(a,b){var c,d,e;c=a.i()-b.i()|0;d=0;while(d<=c){e=0;while(true){if(e>=b.i())return 1;if(a.f(d+e|0)!=b.f(e))break;e=e+1|0;}d=d+1|0;}return 0;}
function A6o(a,b,c){var d,e,f,g;d=I();e=a.i()-b.i()|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=b.i()){d.dD(c);f=f+(b.i()-1|0)|0;break a;}if(a.f(f+g|0)!=b.f(g))break;g=g+1|0;}d.U(a.f(f));}f=f+1|0;}d.dD(a.ei(f));return d.b();}
function A2a(a){var b,c;b=0;c=a.i()-1|0;a:{while(b<=c){if(a.f(b)>32)break a;b=b+1|0;}}while(b<=c&&a.f(c)<=32){c=c+(-1)|0;}return a.ce(b,c+1|0);}
function AFK(a){return a;}
function A1Q(a){var b,c,d;b=BW(a.S.data.length);c=0;while(true){d=b.data;if(c>=d.length)break;d[c]=a.S.data[c];c=c+1|0;}return b;}
function Zi(b){var c,d;Em();c=new BM;d=BW(1);d.data[0]=b;Iy(c,d);return c;}
function Ji(b){Em();return ((I()).j(b)).b();}
function AR6(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BM))return 0;c=b;if(c.i()!=a.i())return 0;d=0;while(d<c.i()){if(a.f(d)!=c.f(d))return 0;d=d+1|0;}return 1;}
function A9m(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(a.i()!=b.i())return 0;c=0;while(c<a.i()){if(Do(a.f(c))!=Do(b.f(c)))return 0;c=c+1|0;}return 1;}
function ANj(a,b){return a.AO(OW(b.b()));}
function ANf(a){Hw();return a.AO(BjJ);}
function A4z(a,b){var c,d;c=UE(b,La(a.S));if(c.Ch()&&!B7(c)&&BE(c)==CU(c))return HH(c);d=Ci(Bb(c));c.ID(d);return d;}
function A4G(a){var b,c,d,e;a:{if(!a.mN){b=a.S.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.mN=(31*a.mN|0)+e|0;d=d+1|0;}}}return a.mN;}
function A3W(a){var b,c,d,e,f,g,h,i;if(a.bN())return a;b=Bc(a.S.data.length);c=0;d=0;while(d<a.S.data.length){a:{if(d!=(a.S.data.length-1|0)&&BY(a.S.data[d])){e=a.S.data;f=d+1|0;g=e[f];if(BH(g)){h=b.data;i=c+1|0;h[c]=En(Df(a.S.data[d],a.S.data[f]));d=f;break a;}}h=b.data;i=c+1|0;h[c]=Dz(a.S.data[d]);}d=d+1|0;c=i;}return Bfj(b,0,c);}
function A2q(a,b){return VP(GJ(b),a.b());}
function ARZ(a,b,c){return Mq(GJ(b),a.b(),c);}
function AIb(a,b,c){return ACi(GM(GJ(b),a.b()),c);}
function ARF(){BkS=BdH();}
var Nf=D(DQ);
var BkV=null;function A2Y(){A2Y=N(Nf);AT2();}
function Bdb(){var a=new Nf();SV(a);return a;}
function SV(a){A2Y();G_(a);}
function A2C(a,b){ATg(b);}
function AT2(){BkV=Bdb();}
var LM=D();
var BkW=null;function BdT(){BdT=N(LM);AP2();}
function Vg(){BdT();return BkW;}
function AP2(){var b,c,d,e,f;BkW=C5();b=Y(CZ,6);c=b.data;Bdo();c[0]=Bkz;c[1]=BkA;c[2]=BkB;c[3]=BkC;c[4]=BkD;c[5]=BkE;d=c.length;e=0;while(e<d){f=c[e];BkW.x(Z4(f),f);e=e+1|0;}}
var D8=D(0);
var MO=D(0);
function Yq(){var a=this;Fy.call(a);a.zJ=0;a.uE=0;a.tg=null;}
function Bem(a,b,c,d,e,f){var g=new Yq();AJM(g,a,b,c,d,e,f);return g;}
function AJM(a,b,c,d,e,f,g){MF(a,c,e,f);a.uE=b;a.zJ=g;a.tg=d;}
function A4D(a,b){return a.tg.data[b+a.uE|0];}
function A2W(a,b,c){a.tg.data[b+a.uE|0]=c;}
function AC7(a){return a.zJ;}
var Qj=D(Dm);
function BbL(a){var b=new Qj();AQw(b,a);return b;}
function AQw(a,b){GH(a,b,2.0,4.0);}
function ALw(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(h.ef(2))break a;Bj();i=Bgi;break a;}k=e.data;n=f+1|0;k[f]=(192|l>>6)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else if(!Jz(l)){if((f+3|0)>g){j=j+(-1)|0;if(h.ef(3))break a;Bj();i=Bgi;break a;}k=e.data;o=f+1|0;k[f]=(224|l>>12)<<24>>24;n=o+1|0;k[o]=(128|l>>6&63)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else{if
(!BY(l)){i=BU(1);break a;}if(j>=d){if(h.tH())break a;Bj();i=Bgj;break a;}n=j+1|0;p=k[j];if(!BH(p)){j=n+(-2)|0;i=BU(1);break a;}if((f+4|0)>g){j=n+(-2)|0;if(h.ef(4))break a;Bj();i=Bgi;break a;}k=e.data;q=Df(l,p);j=f+1|0;k[f]=(240|q>>18)<<24>>24;o=j+1|0;k[j]=(128|q>>12&63)<<24>>24;j=o+1|0;k[o]=(128|q>>6&63)<<24>>24;m=j+1|0;k[j]=(128|q&63)<<24>>24;j=n;}c=j;f=m;}j=c;}h.ek(j);h.dR(f);return i;}
var I6=D();
function XT(a){J(a);}
var HT=D(0);
function Fm(){var a=this;I6.call(a);a.s4=0;a.dW=null;a.C7=0.0;a.Bd=0;a.lk=0;a.l_=0;a.Fw=0;}
var BkX=null;var BkY=null;function TF(){TF=N(Fm);A$i();}
function BkZ(){var a=new Fm();HG(a);return a;}
function Bk0(a){var b=new Fm();MD(b,a);return b;}
function ABh(b,c,d){TF();return Bew(b,c);}
function HG(a){TF();MD(a,11);}
function MD(a,b){TF();XT(a);a.l_=(-1);if(b<0)G(CK());a.s4=0;if(!b)b=1;a.dW=OB(a,b);a.lk=a.dW.data.length;a.C7=0.75;Mt(a);}
function OB(a,b){return Y(MQ,b);}
function Mt(a){a.Bd=a.dW.data.length*a.C7|0;}
function AOO(a,b,c){var d,e,f,g,h,i,j;Eq(a);try{if(b!==null&&c!==null){d=b.bp();e=d&2147483647;f=e%a.dW.data.length|0;g=a.dW.data[f];while(g!==null&&!g.MK(b,d)){g=g.pB;}if(g!==null){h=g.g_;g.g_=c;return h;}a.Fw=a.Fw+1|0;i=a.s4+1|0;a.s4=i;if(i>a.Bd){a.oS();f=e%a.dW.data.length|0;}if(f<a.lk)a.lk=f;if(f>a.l_)a.l_=f;j=ABh(b,c,d);j.pB=a.dW.data[f];a.dW.data[f]=j;return null;}G(IJ());}finally{Cg(a);}}
function AMq(a){var b,c,d,e,f,g,h,i,j;b=(a.dW.data.length<<1)+1|0;if(!b)b=1;c=(-1);d=OB(a,b);e=a.l_+1|0;f=b;while(true){e=e+(-1)|0;if(e<a.lk)break;g=a.dW.data[e];while(g!==null){h=(g.NW()&2147483647)%b|0;if(h<f)f=h;if(h>c)c=h;i=d.data;j=g.pB;g.pB=i[h];i[h]=g;g=j;}}a.lk=f;a.l_=c;a.dW=d;Mt(a);}
function A$i(){BkX=BeH();BkY=BaE();}
function S$(){Fm.call(this);this.I6=null;}
function BaO(){var a=new S$();AOl(a);return a;}
function BaS(a){var b=new S$();AKw(b,a);return b;}
function AOl(a){HG(a);}
function AKw(a,b){HG(a);a.I6=b;}
function ABN(){var a=this;Fu.call(a);a.CR=0;a.vf=0;a.t7=null;}
function BaJ(a,b,c,d,e,f){var g=new ABN();AXA(g,a,b,c,d,e,f);return g;}
function AXA(a,b,c,d,e,f,g){K3(a,c,e,f);a.vf=b;a.CR=g;a.t7=d;}
function AOV(a,b){return a.t7.data[b+a.vf|0];}
function AN5(a,b,c){a.t7.data[b+a.vf|0]=c;}
function A44(a){return a.CR;}
var Wj=D(Bt);
function A_N(){var a=new Wj();A$H(a);return a;}
function A$H(a){Co(a);}
function ALg(a,b,c,d){return b;}
function A47(a){return B(445);}
function A5e(a,b){return 0;}
function Og(){V.call(this);this.iA=null;}
var Bk1=null;function A0s(){A0s=N(Og);AT6();}
function BdN(a){var b=new Og();YG(b,a);return b;}
function YG(a,b){A0s();BL(a);a.iA=B_(b*16|0);}
function AUl(a,b,c,d,e){var f,g;f=0;while(f<a.iA.data.length){g=f/16|0;if(d.dJ!==null&&g<d.dJ.data.length&&d.dJ.data[g]!==null)X(d.dJ.data[g].c,0,a.iA,f,16);else{A0s();X(Bk1.c,0,a.iA,f,16);}f=f+16|0;}b.bh.Pv(B0(b,c),a.iA,0,a.iA.data.length);}
function AT6(){Bk1=BF();}
var JP=D(Es);
function Bk2(a,b,c,d,e){var f=new JP();Sn(f,a,b,c,d,e);return f;}
function Sn(a,b,c,d,e,f){It(a,b,c,d,e,f);JF();c.Q(BhG);}
function AKe(a,b,c,d){var e,f,g;e=0;f=a.fX.iG();a:{while(true){g=a.Y.e(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.fX.ja())return (-1);return a.k.e(b,c,d);}
function CW(){Bx.call(this);this.CV=0;}
var Bjy=null;var Bk3=null;var Bk4=null;var Bk5=null;var Bk6=null;var Bk7=null;var Bk8=null;var Bk9=null;function P2(){P2=N(CW);AFn();}
function E7(a,b,c){var d=new CW();OG(d,a,b,c);return d;}
function OG(a,b,c,d){P2();Cw(a,b,c);a.CV=d;}
function EE(a){return a.CV;}
function AFn(){Bjy=E7(B(446),0,9728);Bk3=E7(B(447),1,9729);Bk4=E7(B(448),2,9987);Bk5=E7(B(449),3,9984);Bk6=E7(B(450),4,9985);Bk7=E7(B(451),5,9986);Bk8=E7(B(452),6,9987);Bk9=H(CW,[Bjy,Bk3,Bk4,Bk5,Bk6,Bk7,Bk8]);}
var L4=D(CZ);
var BjJ=null;function Hw(){Hw=N(L4);AHZ();}
function Bb9(){var a=new L4();Uw(a);return a;}
function Uw(a){Hw();GG(a,B(382),Y(BM,0));}
function AQa(a){return Bby(a);}
function ASI(a){return BbL(a);}
function AHZ(){BjJ=Bb9();}
var M4=D(0);
function Vo(){Bt.call(this);this.h_=0;}
function A_q(a){var b=new Vo();A$4(b,a);return b;}
function A$4(a,b){Co(a);a.h_=b;}
function A1m(a,b,c,d){var e,f,g;e=!d.jy()?c.i()-b|0:d.dI()-b|0;if(!e){d.by(a.h_,0);return a.k.e(b,c,d);}if(e<2){f=c.f(b);g=97;}else{f=c.f(b);g=c.f(b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:d.by(a.h_,0);return a.k.e(b,c,d);case 13:if(g!=10){d.by(a.h_,0);return a.k.e(b,c,d);}d.by(a.h_,0);return a.k.e(b,c,d);default:}return (-1);}
function AGn(a,b){var c;c=!b.et(a.h_)?0:1;b.by(a.h_,(-1));return c;}
function AIX(a){return B(453);}
function SJ(){C.call(this);this.Qg=null;}
function A_D(a){var b=new SJ();A5o(b,a);return b;}
function A5o(a,b){J(a);a.Qg=b;}
function EO(){C.call(this);this.Hx=null;}
function Lh(a){ABZ(a,Qm());}
function ABZ(a,b){J(a);a.Hx=b;}
function Se(){var a=this;EO.call(a);a.mC=null;a.jA=null;a.fK=0;a.nd=0;a.ur=0;a.y$=0;}
function Bbh(a,b){var c=new Se();AYH(c,a,b);return c;}
function AYH(a,b,c){Lh(a);a.y$=(-1);if(c<0)G(CK());a.mC=b;a.jA=BW(Bf(64,c));}
function ALC(a){N9(a);a.mC.fO();a.mC=null;}
function ATA(a){var b,c,d,e;N9(a);if(a.ur&&a.fK>=a.nd)return null;b=I();a:{while(true){if(a.fK>=a.nd&&!K9(a,0))break a;c=a.jA.data;d=a.fK;a.fK=d+1|0;e=c[d];if(e==10)break;if(e==13){if(a.fK>=a.nd&&!K9(a,0))break a;if(a.jA.data[a.fK]!=10)break a;a.fK=a.fK+1|0;break a;}b.U(e);}}return b.b();}
function K9(a,b){var c;if(a.ur)return 0;a:{while(true){if(b>=a.jA.data.length)break a;c=a.mC.Jt(a.jA,b,a.jA.data.length-b|0);if(c==(-1)){a.ur=1;break a;}if(!c)break;b=b+c|0;}}a.nd=b;a.fK=0;a.y$=(-1);return 1;}
function N9(a){if(a.mC!==null)return;G(Ba_());}
function WQ(){Q.call(this);this.Oq=null;}
function Bei(a){var b=new WQ();A2Z(b,a);return b;}
function A2Z(a,b){a.Oq=b;Be(a);}
function A8V(a,b){return ACB(b);}
var I0=D(Dl);
function ASG(){var a=new I0();A1x(a);return a;}
function A1x(a){Jt(a);}
var Yh=D();
var ZR=D(FI);
function BcX(a,b,c,d,e,f){var g=new ZR();AYX(g,a,b,c,d,e,f);return g;}
function AYX(a,b,c,d,e,f,g){JO(a,b,c,d,e,f,g);}
function AQQ(a,b){var c,d,e;c=a.cs.A.data;d=a.ck;e=b*4|0;return (c[d+e|0]&255)<<24|(a.cs.A.data[(a.ck+e|0)+1|0]&255)<<16|(a.cs.A.data[(a.ck+e|0)+2|0]&255)<<8|a.cs.A.data[(a.ck+e|0)+3|0]&255;}
function AEL(a,b,c){var d,e,f;d=a.cs.A.data;e=a.ck;f=b*4|0;d[e+f|0]=c>>24<<24>>24;a.cs.A.data[(a.ck+f|0)+1|0]=c>>16<<24>>24;a.cs.A.data[(a.ck+f|0)+2|0]=c>>8<<24>>24;a.cs.A.data[(a.ck+f|0)+3|0]=c<<24>>24;}
var GN=D(BR);
var Bk$=null;function A$Y(){A$Y=N(GN);A09();}
function Bdw(a){var b=new GN();AAG(b,a);return b;}
function Bk_(){var a=new GN();Jr(a);return a;}
function AAG(a,b){A$Y();B$(a);}
function Jr(a){A$Y();B$(a);}
function A09(){Bk$=Bdw(0);}
var R3=D(Bm);
function APo(a){var b=new R3();A7B(b,a);return b;}
function IJ(){var a=new R3();AF9(a);return a;}
function A7B(a,b){EF(a,b);}
function AF9(a){Cx(a);}
function XE(){Q.call(this);this.HC=null;}
function Bb6(a){var b=new XE();AIP(b,a);return b;}
function AIP(a,b){a.HC=b;Be(a);}
function A5Z(a,b){return MR(b);}
function P8(){var a=this;C.call(a);a.d0=null;a.yv=null;a.cA=null;a.cS=0;}
function BaD(){var a=new P8();ATN(a);return a;}
function ATN(a){J(a);a.cA=Dq();}
var YQ=D();
function A7Z(b){return Math.sin(b);}
function AEl(b){return Math.cos(b);}
function AQx(b){return Math.tan(b);}
function FR(b){return Math.sqrt(b);}
function AYy(b){return Math.ceil(b);}
function De(b){return b+ALl(b)*0.5|0;}
function Bq(b,c){if(b<c)c=b;return c;}
function Bf(b,c){if(b>c)c=b;return c;}
function T1(b,c){if(Kt(b,c))c=b;return c;}
function AWM(b,c){if(Hq(b,c))c=b;return c;}
function Ju(b,c){if(b<c)c=b;return c;}
function Ei(b,c){if(b>c)c=b;return c;}
function Vs(b){if(b<=0)b= -b|0;return b;}
function CG(b){if(b<=0.0)b= -b;return b;}
function ALl(b){var c;c=B8(b,0.0);if(c>0)b=1.0;else if(c<0)b=(-1.0);return b;}
function WR(){var a=this;C.call(a);a.eo=null;a.fi=null;a.du=null;a.vP=0;a.wd=0;a.LA=0;a.s_=0;a.kR=0;a.oT=0;}
function Bfr(a,b,c){var d=new WR();AMV(d,a,b,c);return d;}
function AMV(a,b,c,d){J(a);a.kR=0;a.oT=0;a.LA=b;a.eo=d;a.du=MK(Cf(a.eo.cO,c));a.wd=1;a.s_=!b?35048:35044;a.fi=a.du.sN();a.vP=ACs(a);a.fi.c_();a.du.c_();}
function ACs(a){var b;b=BhM.i2();BhM.c8(34962,b);BhM.fC(34962,CU(a.du),null,a.s_);BhM.c8(34962,0);return b;}
function AXm(a){return a.eo;}
function AJE(a){return CU(a.du)/a.eo.cO|0;}
function Z1(a){if(a.oT){BhM.qn(34962,0,BE(a.du),a.du);a.kR=0;}}
function AE$(a,b,c,d){a.kR=1;if(a.wd){N$(b,a.du,d,c);a.fi.cY(0);a.fi.cl(d);}else{a.fi.c0();a.fi.wt(b,c,d);a.fi.c_();a.du.cY(0);a.du.cl(BE(a.fi)<<2);}Z1(a);}
function ANu(a,b,c){var d,e,f,g,h,i;d=BhM;d.c8(34962,a.vP);if(a.kR){a.du.cl(BE(a.fi)*4|0);d.fC(34962,BE(a.du),a.du,a.s_);a.kR=0;}a:{e=CT(a.eo);if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data;h=CB(a.eo,f);i=g[f];if(i>=0){b.lQ(i);b.ia(i,h.cI,h.hR,h.ij,a.eo.cO,h.cT);}f=f+1|0;}}f=0;while(f<e){h=CB(a.eo,f);i=b.lW(h.er);if(i>=0){b.lQ(i);b.ia(i,h.cI,h.hR,h.ij,a.eo.cO,h.cT);}f=f+1|0;}}a.oT=1;}
function AH_(a,b,c){var d,e,f,g;a:{d=BhM;e=CT(a.eo);if(c===null){f=0;while(f<e){b.BB((CB(a.eo,f)).er);f=f+1|0;}}else{f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0)b.tM(g);f=f+1|0;}}}d.c8(34962,0);a.oT=0;}
var GT=D(BR);
var Bla=null;function ANl(){ANl=N(GT);A1a();}
function Bea(a){var b=new GT();YB(b,a);return b;}
function Blb(){var a=new GT();Iw(a);return a;}
function YB(a,b){ANl();B$(a);}
function Iw(a){ANl();B$(a);}
function A1a(){Bla=Bea(0);}
var OI=D();
function A9t(){var b;b=AQd();return b;}
function AQd(){var userAgent=navigator.userAgent.toLowerCase();return {firefox:userAgent.indexOf('firefox')!= -1,chrome:userAgent.indexOf('chrome')!= -1,safari:userAgent.indexOf('safari')!= -1,opera:userAgent.indexOf('opera')!= -1,IE:userAgent.indexOf('msie')!= -1,macOS:userAgent.indexOf('mac')!= -1,linux:userAgent.indexOf('linux')!= -1,windows:userAgent.indexOf('win')!= -1};}
var QJ=D(T);
function A_J(){var a=new QJ();A6A(a);return a;}
function A6A(a){Bo(a);}
function AND(a){var b;b=Ba1(a);b.be=1;return b;}
function Oe(){var a=this;C2.call(a);a.yJ=null;a.nI=null;a.kE=0;}
function BP(a,b,c){var d=new Oe();VQ(d,a,b,c);return d;}
function VQ(a,b,c,d){FX(a);a.kE=(-1);a.yJ=b;a.nI=c;a.kE=d;}
function A9M(a){var b,c;b=B(101);if(a.kE>=1){c=BW(a.kE);AO_(c,32);b=Mf(c);}return (((I()).a(a.yJ)).a(a.nI!==null&&a.nI.i()?((((((I()).j(a.kE)).a(B(439))).a(a.nI)).a(B(439))).a(b)).b():B(101))).b();}
function P3(){D3.call(this);this.oz=null;}
function Bfz(a,b,c){var d=new P3();ASN(d,a,b,c);return d;}
function ASN(a,b,c,d){L_(a,c,d);a.oz=Qg(a,b);if(a.oz!==null)return;G(Qc((((I()).a(B(454))).a(b.u())).b()));}
function Qg(a,b){var c,d,$$je;a:{try{c=ANB(b,null);}catch($$e){$$je=R($$e);if($$je instanceof B3){break a;}else{throw $$e;}}return c;}b:{try{d=AYZ(b,null);Ta(d,1);}catch($$e){$$je=R($$e);if($$je instanceof My){break b;}else{throw $$e;}}return d;}return null;}
function A1e(a){var b,c,$$je;a:{try{b=ACO(a.oz,null);}catch($$e){$$je=R($$e);if($$je instanceof B3){c=$$je;break a;}else{throw $$e;}}return b;}G(Jd((((I()).a(B(455))).a((FF(a.oz)).u())).b(),c));}
var LI=D(0);
var YS=D();
function A_w(){var a=new YS();APH(a);return a;}
function APH(a){J(a);}
function AZY(a){return devicePixelRatio||1;}
function AXK(a){return screen.width;}
function ADA(a){return screen.height;}
function AL3(a,b,c,d,e){var f;f=Bfy(a);return AIN(BV(f,"fullscreenChanged"),c,d,e)?1:0;}
function AMt(a){AIA();}
function ASH(a){return A9s()?1:0;}
function AIN(b,c,d,e){if(c.requestFullscreen){c.width=d;c.height=e;c.requestFullscreen();document.addEventListener("fullscreenchange",b,false);return true;}if(c.webkitRequestFullScreen){c.width=d;c.height=e;c.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);document.addEventListener("webkitfullscreenchange",b,false);return true;}if(c.mozRequestFullScreen){c.width=d;c.height=e;c.mozRequestFullScreen();document.addEventListener("mozfullscreenchange",b,false);return true;}if(c.msRequestFullscreen){c.width
=d;c.height=e;c.msRequestFullscreen();document.addEventListener("msfullscreenchange",b,false);return true;}return false;}
function AIA(){if(document.exitFullscreen)document.exitFullscreen();if(document.msExitFullscreen)document.msExitFullscreen();if(document.webkitExitFullscreen)document.webkitExitFullscreen();if(document.mozExitFullscreen)document.mozExitFullscreen();if(document.webkitCancelFullScreen)document.webkitCancelFullScreen();}
function A9s(){if("fullscreenElement" in document){return document.fullscreenElement!=null;}if("msFullscreenElement" in document){return document.msFullscreenElement!=null;}if("webkitFullscreenElement" in document){return document.webkitFullscreenElement!=null;}if("mozFullScreenElement" in document){return document.mozFullScreenElement!=null;}if("webkitIsFullScreen" in document){return document.webkitIsFullScreen;}if("mozFullScreen" in document){return document.mozFullScreen;}return false;}
function HF(){var a=this;C.call(a);a.pM=null;a.hW=0;a.hk=0;a.g1=0;a.b7=null;a.f0=null;a.g0=null;a.iS=0.0;}
var Blc=null;function A3O(){A3O=N(HF);ALb();}
function A8d(){var a=new HF();AAB(a);return a;}
function Bfc(a){var b=new HF();YF(b,a);return b;}
function AAB(a){A3O();J(a);a.f0=S();a.g0=S();a.iS=(-1.0);}
function YF(a,b){A3O();J(a);a.f0=S();a.g0=S();a.iS=(-1.0);a.Co(b);}
function A3F(a,b){a.pM=b.pM;a.b7=b.b7;a.hk=b.hk;a.g1=b.g1;a.hW=b.hW;a.f0.M(b.f0);a.g0.M(b.g0);a.iS=b.iS;return a;}
function AOy(a,b,c,d,e,f){a.pM=b;a.b7=c;a.hk=d;a.g1=e;a.hW=f;a.f0.I(0.0,0.0,0.0);a.g0.I(0.0,0.0,0.0);a.iS=(-1.0);return a;}
function AIZ(a,b){var c;a:{b:{if(b!==a){if(b===null)break b;if(b.b7!==a.b7)break b;if(b.hW!=a.hW)break b;if(b.hk!=a.hk)break b;if(b.g1!=a.g1)break b;}c=1;break a;}c=0;}return c;}
function AEQ(a,b){if(b===null)return 0;if(b===a)return 1;if(!(b instanceof HF))return 0;return a.Hj(b);}
function AVk(a,b,c){a.b7.C6(b,a.hW,a.hk,a.g1,c);}
function ALb(){Blc=AL6();}
var TO=D(T);
function Bd3(){var a=new TO();AGp(a);return a;}
function AGp(a){Bo(a);}
function AYh(a){var b;b=BfE(a);b.bG.n1(0,2048);b.be=1;return b;}
var HP=D(0);
function HC(){var a=this;BI.call(a);a.Mt=0;a.Ko=0.0;a.IR=0.0;a.Ov=0;}
var Bld=Ba;var Ble=Ba;function AJf(){AJf=N(HC);A4l();}
function A4l(){Bld=BO(B(456));Ble=Bld;}
var DW=D(Bx);
var Blf=null;var Blg=null;var Blh=null;var Bli=null;var Blj=null;function M1(){M1=N(DW);ASo();}
function Mm(a,b){var c=new DW();V8(c,a,b);return c;}
function UF(){M1();return Blj.gn();}
function V8(a,b,c){M1();Cw(a,b,c);}
function ASo(){Blf=Mm(B(457),0);Blg=Mm(B(458),1);Blh=Mm(B(459),2);Bli=Mm(B(460),3);Blj=H(DW,[Blf,Blg,Blh,Bli]);}
var KT=D(0);
function L8(){var a=this;C.call(a);a.mi=0;a.fx=null;a.fm=null;a.CG=0.0;a.sR=0;a.u1=0;a.iY=0;}
var Blk=null;function A6O(){A6O=N(L8);AHC();}
function DE(){var a=new L8();TM(a);return a;}
function Bll(a,b){var c=new L8();Nr(c,a,b);return c;}
function TM(a){A6O();Nr(a,51,0.800000011920929);}
function Nr(a,b,c){var d;A6O();J(a);if(c>0.0&&c<1.0){a.CG=c;d=G3(b,c);a.sR=d*c|0;a.iY=d-1|0;a.u1=CV(O(a.iY));a.fx=Y(C,d);a.fm=Y(C,d);return;}G(W((((I()).a(B(40))).cB(c)).b()));}
function AXk(a,b){return Cp(CM(Ce(O(b.bp()),Cc(2135587861, 2654435769)),a.u1));}
function A0H(a,b){var c,d,e;if(b===null)G(W(B(461)));c=a.fx;d=a.kn(b);while(true){e=c.data[d];if(e===null)return  -(d+1|0)|0;if(e.z(b))break;d=(d+1|0)&a.iY;}return d;}
function AQe(a,b,c){var d,e,f;d=a.j4(b);if(d>=0){e=a.fm.data[d];a.fm.data[d]=c;return e;}f= -(d+1|0)|0;a.fx.data[f]=b;a.fm.data[f]=c;f=a.mi+1|0;a.mi=f;if(f>=a.sR)W0(a,a.fx.data.length<<1);return null;}
function Ql(a,b,c){var d,e,f;d=a.fx;e=a.kn(b);while(true){f=d.data;if(f[e]===null)break;e=(e+1|0)&a.iY;}f[e]=b;a.fm.data[e]=c;}
function AWz(a,b){var c;c=a.j4(b);return c<0?null:a.fm.data[c];}
function AVn(a){if(!a.mi)return;a.mi=0;U6(a.fx,null);U6(a.fm,null);}
function A8W(a,b){return a.j4(b)<0?0:1;}
function W0(a,b){var c,d,e,f,g;a:{c=a.fx.data.length;a.sR=b*a.CG|0;a.iY=b-1|0;a.u1=CV(O(a.iY));d=a.fx;e=a.fm;a.fx=Y(C,b);a.fm=Y(C,b);if(a.mi>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g!==null)Ql(a,g,e.data[f]);f=f+1|0;}}}}
function AHC(){Blk=Qm();}
function YN(){var a=this;C.call(a);a.g=null;a.c9=0;a.qD=null;a.vX=0;a.fE=0;a.gG=0;a.bR=0;a.rK=null;}
function BcI(){var a=new YN();ADv(a);return a;}
function GM(a,b){return Bae(a,b);}
function Mq(a,b,c){var d,e,f,g,h,i;d=SB();e=GM(a,b);f=0;g=0;if(!b.i()){h=Y(BM,1);h.data[0]=B(101);return h;}while(Ga(e)){i=f+1|0;if(i>=c&&c>0)break;d.h1((b.d_(g,LS(e))).b());g=MW(e);f=i;}a:{d.h1((b.d_(g,b.i())).b());i=f+1|0;if(!c)while(true){i=i+(-1)|0;if(i<0)break;if(((d.l(i)).b()).i())break a;d.mz(i);}}if(i<0)i=0;return d.It(Y(BM,i));}
function VP(a,b){return Mq(a,b,0);}
function IP(a){return a.g.b();}
function AYT(b,c){if(b===null)G(APo(B(462)));if(c&&(c|255)!=255)G(W(B(101)));WW();Bgd=1;return X$(BcI(),b,c);}
function X$(a,b,c){a.g=Bds(b,c);a.c9=c;a.rK=L1(a,(-1),a.c9,null);if(a.g.bN()){QE(a);return a;}G(BP(B(101),a.g.b(),a.g.dM()));}
function ACh(a,b){var c,d,e;c=Bfl(BX(a,2),BX(a,64));while(!a.g.bN()){d=a.g;if(!d.hw())break;d=a.g;if(d.cK()&&a.g.cK()!=(-536870788)){d=a.g;if(d.cK()!=(-536870871))break;}c.cE(a.g.E());if(a.g.bV()!=(-536870788))continue;a.g.E();}e=HQ(a,c);e.Q(b);return e;}
function L1(a,b,c,d){var e,f,g,h,i,j;e=SB();f=a.c9;g=0;if(c!=a.c9)a.c9=c;a:{switch(b){case -1073741784:h=new KX;i=a.bR+1|0;a.bR=i;ZK(h,i);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Ks;i=a.bR+1|0;a.bR=i;ABX(h,i);break a;case -33554392:h=new K8;i=a.bR+1|0;a.bR=i;UM(h,i);break a;default:a.fE=a.fE+1|0;if(d!==null)h=BeS(a.fE);else{h=BdG();g=1;}if(a.fE<=(-1))break a;if(a.fE>=10)break a;a.qD.data[a.fE]=h;break a;}h=BcD();}while(true){if(a.g.hw()&&a.g.cK()==(-536870788))j=ACh(a,
h);else if(a.g.bV()==(-536870788)){j=FG(h);a.g.E();}else{j=MH(a,h);if(a.g.bV()==(-536870788))a.g.E();}if(j!==null)e.h1(j);if(a.g.bN())break;if(a.g.bV()==(-536870871))break;}if(a.g.G_()==(-536870788))e.h1(FG(h));if(a.c9!=f&&!g){a.c9=f;a.g.GX(a.c9);}switch(b){case -1073741784:break;case -536870872:return Bdi(e,h);case -268435416:return Bcy(e,h);case -134217688:return A_R(e,h);case -67108824:return Bdy(e,h);case -33554392:return BcP(e,h);default:switch(e.de()){case 0:break;case 1:return Ber(e.l(0),h);default:return BaM(e,
h);}return FG(h);}return Bce(e,h);}
function AAU(a){var b,c,d;b=A6b();while(!a.g.bN()){c=a.g;if(!c.hw())break;c=a.g;if(c.Em())break;c=a.g;if(c.Fn())break;c=a.g;if(!(!c.tk()&&!a.g.cK())){c=a.g;if(!(!c.tk()&&I2(a.g.cK()))){c=a.g;if(c.cK()!=(-536870871)){c=a.g;if((c.cK()&(-2147418113))!=(-2147483608)){c=a.g;if(c.cK()!=(-536870788)){c=a.g;if(c.cK()!=(-536870876))break;}}}}}d=a.g.E();if(!Ik(d))b.IV(d&65535);else b.Pg(Eu(d));}if(!BX(a,2))return Bav(b);if(BX(a,64))return BfJ(b);return BfO(b);}
function AAY(a){var b,c,d,e,f,g,h,i,j,k;b=Bc(4);c=0;d=(-1);e=(-1);if(!a.g.bN()&&a.g.hw()){f=b.data;d=a.g.E();f[c]=d;e=d-4352|0;}if(e>=0&&e<19){g=BW(3);f=g.data;f[c]=d&65535;h=a.g.bV();i=h-4449|0;if(i>=0&&i<21){f[1]=h&65535;a.g.E();j=a.g.bV();h=j-4519|0;if(h>=0&&h<28){f[2]=j&65535;a.g.E();return A8t(g,3);}return A8t(g,2);}if(!BX(a,2))return Qk(f[0]);if(BX(a,64))return A58(f[0]);return AXh(f[0]);}k=1;while(k<4&&!a.g.bN()&&a.g.hw()){f=b.data;j=k+1|0;f[k]=a.g.E();k=j;}if(k==1){f=b.data;if(!AL$(f[0]))return LU(a,
f[0]);}if(!BX(a,2))return BfL(b,k);if(BX(a,64))return Bfo(b,k);return BaN(b,k);}
function MH(a,b){var c,d,e,f;if(a.g.hw()&&!a.g.tk()&&I2(a.g.cK())){if(!BX(a,128)){if(!a.g.Em()&&!a.g.Fn())c=AAU(a);else{d=Os(a,b);c=In(a,b,d);}}else{c=AAY(a);if(!a.g.bN()){e=a.g;if(!(e.bV()==(-536870871)&&!(b instanceof EZ))){e=a.g;if(e.bV()!=(-536870788)&&!a.g.hw())c=In(a,b,c);}}}}else if(a.g.bV()!=(-536870871)){d=Os(a,b);c=In(a,b,d);}else{if(b instanceof EZ)G(BP(B(101),a.g.b(),a.g.dM()));c=FG(b);}a:{if(!a.g.bN()){e=a.g;if(!(e.bV()==(-536870871)&&!(b instanceof EZ))){e=a.g;if(e.bV()!=(-536870788)){f=MH(a,b);if
(c instanceof CF&&!(c instanceof Ef)&&!(c instanceof CH)&&!(c instanceof Ed)){e=c;if(!f.ca(e.pT()))c=A_M(e);}if((f.i3()&65535)!=43)c.Q(f);else c.Q(f.pT());break a;}}}if(c===null)return null;c.Q(b);}if((c.i3()&65535)!=43)return c;return c.pT();}
function In(a,b,c){var d,e,f,g,h,i,j;d=a.g.bV();if(c!==null&&!(c instanceof BJ)){switch(d){case -2147483606:a.g.E();return BbM(c,b,d);case -2147483605:a.g.E();return Bd_(c,b,(-2147483606));case -2147483585:a.g.E();return Bel(c,b,(-536870849));case -2147483525:e=new JP;f=a.g.jk();g=a.gG+1|0;a.gG=g;Sn(e,f,c,b,(-536870849),g);return e;case -1073741782:case -1073741781:a.g.E();h=Bdv(c,b,d);c.Q(h);return h;case -1073741761:a.g.E();h=A_7(c,b,(-536870849));c.Q(b);return h;case -1073741701:h=new Lw;e=a.g;e=e.jk();i
=a.gG+1|0;a.gG=i;Sk(h,e,c,b,(-536870849),i);c.Q(h);return h;case -536870870:case -536870869:a.g.E();h=c.i3()!=(-2147483602)?Bc_(c,b,d):BX(a,32)?Baj(c,b,d):A_I(c,b,d,MN(a.c9));c.Q(h);return h;case -536870849:a.g.E();h=BfA(c,b,(-536870849));c.Q(b);return h;case -536870789:h=new Es;e=a.g;e=e.jk();g=a.gG+1|0;a.gG=g;It(h,e,c,b,(-536870849),g);c.Q(h);return h;default:}return c;}j=null;if(c!==null)j=c;switch(d){case -2147483606:case -2147483605:a.g.E();h=BbD(j,b,d);j.Q(h);return h;case -2147483585:a.g.E();return BcJ(j,
b,(-2147483585));case -2147483525:return Bb2(a.g.jk(),j,b,(-2147483525));case -1073741782:case -1073741781:a.g.E();h=Bfa(j,b,d);j.Q(h);return h;case -1073741761:a.g.E();return BeZ(j,b,(-1073741761));case -1073741701:return Baq(a.g.jk(),j,b,(-1073741701));case -536870870:case -536870869:a.g.E();h=Bbt(j,b,d);j.Q(h);return h;case -536870849:a.g.E();return BaZ(j,b,(-536870849));case -536870789:return Bdm(a.g.jk(),j,b,(-536870789));default:}return c;}
function Os(a,b){var c,d,e,f,g,h,i,j,k,l;c=null;while(true){a:{d=a.g.bV();if((d&(-2147418113))==(-2147483608)){a.g.E();e=(d&16711680)>>16;d=d&(-16711681);if(d==(-16777176))a.c9=e;else{if(d!=(-1073741784))e=a.c9;c=L1(a,d,e,b);if(a.g.bV()!=(-536870871))G(BP(B(101),a.g.b(),a.g.dM()));a.g.E();}}else{b:{c:{switch(d){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:a.g.E();c
=A79(0);break a;case -2147483577:a.g.E();c=A_4();break a;case -2147483558:a.g.E();c=new LP;f=a.bR+1|0;a.bR=f;ABq(c,f);break a;case -2147483550:a.g.E();c=A79(1);break a;case -2147483526:a.g.E();c=BbW();break a;case -536870876:a.g.E();a.bR=a.bR+1|0;if(BX(a,8)){if(BX(a,1)){c=Bao(a.bR);break a;}c=A_q(a.bR);break a;}if(BX(a,1)){c=BaU(a.bR);break a;}c=BbJ(a.bR);break a;case -536870866:a.g.E();if(BX(a,32)){c=Bb_();break a;}c=BbA(MN(a.c9));break a;case -536870821:a.g.E();g=0;if(a.g.bV()==(-536870818)){g=1;a.g.E();}c
=Sp(a,g,b);if(a.g.bV()!=(-536870819))G(BP(B(101),a.g.b(),a.g.dM()));a.g.pL(1);a.g.E();break a;case -536870818:a.g.E();a.bR=a.bR+1|0;if(!BX(a,8)){c=ARm();break a;}c=Be_(MN(a.c9));break a;case 0:h=a.g.sc();if(h!==null)c=HQ(a,h);else{if(a.g.bN()){c=FG(b);break a;}c=Qk(d&65535);}a.g.E();break a;default:break b;}a.g.E();c=ARm();break a;}i=(d&2147483647)-48|0;if(a.fE<i)G(BP(B(101),a.g.b(),a.g.dM()));a.g.E();a.bR=a.bR+1|0;c=!BX(a,2)?BcO(i,a.bR):BX(a,64)?Bap(i,a.bR):BfD(i,a.bR);a.qD.data[i].th=1;a.vX=1;break a;}if(d
>=0&&!a.g.kX()){c=LU(a,d);a.g.E();}else if(d==(-536870788))c=FG(b);else{if(d!=(-536870871)){j=new Oe;k=!a.g.kX()?Il(d&65535):(a.g.sc()).b();l=a.g;VQ(j,k,l.b(),a.g.dM());G(j);}if(b instanceof EZ)G(BP(B(101),a.g.b(),a.g.dM()));c=FG(b);}}}if(d!=(-16777176))break;}return c;}
function Sp(a,b,c){var d,e;d=Fq(a,b);e=HQ(a,d);e.Q(c);return e;}
function Fq(a,b){var c,d,e,f,g,h,i,j,k,$$je;c=Be5(b,BX(a,2),BX(a,64));d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(a.g.bN())break a;f=a.g.bV()==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.g.bV()){case -536870874:if(d>=0)c.cE(d);d=a.g.E();if(a.g.bV()!=(-536870874)){d=38;break d;}if(a.g.cK()==(-536870821)){a.g.E();e=1;d=(-1);break d;}a.g.E();if(g){c=Fq(a,0);break d;}if(a.g.bV()==(-536870819))break d;c.xX(Fq(a,0));break d;case -536870867:if(!g&&a.g.cK()!=(-536870819)){h=a.g;if(h.cK()!=(-536870821)&&d>=0){a.g.E();i
=a.g.bV();if(a.g.kX())break c;if(i<0){h=a.g;if(h.cK()!=(-536870819)){h=a.g;if(h.cK()!=(-536870821)&&d>=0)break c;}}e:{try{if(I2(i))break e;i=i&65535;break e;}catch($$e){$$je=R($$e);if($$je instanceof B3){break b;}else{throw $$e;}}}try{c.bF(d,i);}catch($$e){$$je=R($$e);if($$je instanceof B3){break b;}else{throw $$e;}}a.g.E();d=(-1);break d;}}if(d>=0)c.cE(d);d=45;a.g.E();break d;case -536870821:if(d>=0){c.cE(d);d=(-1);}a.g.E();j=0;if(a.g.bV()==(-536870818)){a.g.E();j=1;}if(!e)c.LB(Fq(a,j));else c.xX(Fq(a,j));e
=0;a.g.E();break d;case -536870819:if(d>=0)c.cE(d);d=93;a.g.E();break d;case -536870818:if(d>=0)c.cE(d);d=94;a.g.E();break d;case 0:if(d>=0)c.cE(d);k=a.g.sc();if(k===null)d=0;else{c.Nv(k);d=(-1);}a.g.E();break d;default:}if(d>=0)c.cE(d);d=a.g.E();}g=0;}G(BP(B(101),IP(a),a.g.dM()));}G(BP(B(101),IP(a),a.g.dM()));}if(!f){if(d>=0)c.cE(d);return c;}G(BP(B(101),IP(a),a.g.dM()-1|0));}
function LU(a,b){var c;c=Ik(b);if(BX(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AXh(b&65535);}if(BX(a,64)&&b>128){if(c)return Bbe(b);if(Kh(b))return ANV(b&65535);if(!K5(b))return A58(b&65535);return A1p(b&65535);}}if(c)return A_E(b);if(Kh(b))return ANV(b&65535);if(!K5(b))return Qk(b&65535);return A1p(b&65535);}
function HQ(a,b){var c,d;if(!b.F0()){if(!b.C9()){if(b.g6())return AJA(b);return AQ8(b);}if(b.g6())return A4b(b);return A1V(b);}c=b.NR();d=BcB(c);if(!b.C9()){if(b.g6())return Lp(AJA(b.mO()),d);return Lp(AQ8(b.mO()),d);}if(b.g6())return Lp(A4b(b.mO()),d);return Lp(A1V(b.mO()),d);}
function GJ(b){return AYT(b,0);}
function QE(a){if(a.vX)a.rK.ed();}
function A10(b){var c,d,e,f;c=(I()).a(B(463));d=0;while(true){e=b.uu(B(464),d);if(e<0)break;f=e+2|0;(c.a(b.ce(d,f))).a(B(465));d=f;}return ((c.a(b.ei(d))).a(B(464))).b();}
function VC(a){return a.fE;}
function ABO(a){return a.gG+1|0;}
function SD(a){return a.bR+1|0;}
function GF(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function BX(a,b){return (a.c9&b)!=b?0:1;}
function ADv(a){J(a);a.qD=Y(Cy,10);a.fE=(-1);a.gG=(-1);a.bR=(-1);}
var Dc=D(B3);
function Ba_(){var a=new Dc();VY(a);return a;}
function VY(a){E$(a);}
var GK=D(Dc);
var Or=D(0);
function VV(){var a=this;C.call(a);a.zV=0;a.AT=null;}
function Bec(a,b){var c=new VV();AUz(c,a,b);return c;}
function AUz(a,b,c){a.AT=b;a.zV=c;J(a);}
function AW0(a){A2J(a.AT,a.zV);}
function AOP(a){a.HA();}
var Qd=D(FP);
function Bel(a,b,c){var d=new Qd();AQ7(d,a,b,c);return d;}
function AQ7(a,b,c,d){Mj(a,b,c,d);JF();b.Q(BhG);}
function AKZ(a,b,c,d){var e;e=a.Y.e(b,c,d);if(e<=0)e=b;return a.k.e(e,c,d);}
function A4m(a,b){a.k=b;}
function Jo(){var a=this;C.call(a);a.oZ=0;a.nX=0;a.Jp=0;a.NM=0;}
function Blm(a,b,c,d){var e=new Jo();Tp(e,a,b,c,d);return e;}
function Tp(a,b,c,d,e){J(a);a.oZ=b;a.nX=c;a.Jp=d;a.NM=e;}
var YD=D(Bm);
function F0(){var a=new YD();AZ3(a);return a;}
function AZ3(a){Cx(a);}
var UG=D(T);
function Be1(){var a=new UG();ALL(a);return a;}
function ALL(a){Bo(a);}
function A2o(a){var b;b=Bcf(a);b.be=1;return b;}
function Mr(){var a=this;C.call(a);a.tJ=0;a.x9=0;a.Ci=null;}
function AIm(a,b,c){var d=new Mr();AQG(d,a,b,c);return d;}
function AQG(a,b,c,d){J(a);a.tJ=b;a.x9=c;a.Ci=d;}
function SC(){EA.call(this);this.iR=null;}
function BcK(){var a=new SC();A9j(a);return a;}
function A9j(a){Lx(a);}
function AWd(a,b){var c;JD();c=BB(a,Bln);if(c===null){c=BaC();Ep(a,c);}c.hj.F(b);return a;}
var AAT=D(D7);
function Be6(){var a=new AAT();AJD(a);return a;}
function AJD(a){Km(a);}
function A7h(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AST(a,b,c){var d;a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}d=1;break a;}d=0;}return d;}
var AAS=D(D7);
function BeE(){var a=new AAS();AWh(a);return a;}
function AWh(a){Km(a);}
function AFY(a,b){return b!=10?0:1;}
function APv(a,b,c){return b!=10?0:1;}
var YI=D(FS);
var Va=D(T);
function BeL(){var a=new Va();A0X(a);return a;}
function A0X(a){Bo(a);}
function A6K(a){var b;b=BdV(a);b.be=1;return b;}
var K_=D();
var BkK=0;function KW(){C.call(this);this.qt=null;}
var Blo=null;function A_2(){var a=new KW();AY5(a);return a;}
function AY5(a){J(a);}
function AZ2(a,b,c,d,e){if(a.qt===null)a.qt=Bd0();a.qt.Gm(b,c,d,e);}
function AH9(){if(Blo===null)Blo=A_2();return Blo;}
function Tk(){var a=this;C.call(a);a.Bk=null;a.CD=0;}
function BbC(a){var b=new Tk();AYw(b,a);return b;}
function AYw(a,b){J(a);a.Bk=b;}
function Dv(){var a=this;BJ.call(a);a.gx=null;a.yu=0;}
function AQ8(a){var b=new Dv();AOZ(b,a);return b;}
function AOZ(a,b){C1(a);a.gx=b.me();a.yu=b.bD;}
function AT7(a,b,c){return !a.gx.p(c.f(b))?(-1):1;}
function ALp(a){return ((((I()).a(B(55))).a(!a.yu?B(56):B(57))).a(a.gx.b())).b();}
function AOu(a,b){if(b instanceof Dx)return IY(a.gx,b.pq());if(b instanceof Dv)return GU(a.gx,b.gx);if(b instanceof C3)return GU(a.gx,b.uI());if(!(b instanceof Dt))return 1;return 0;}
function A45(a){return a.gx;}
function Io(){Q.call(this);this.rT=0;}
function Bcg(a){var b=new Io();St(b,a);return b;}
function St(a,b){Be(a);a.rT=b;}
function AOo(a,b){return a.bD^(a.rT!=F_(b&65535)?0:1);}
var Zf=D(Io);
function A_z(a){var b=new Zf();ANk(b,a);return b;}
function ANk(a,b){St(a,b);}
function A7E(a,b){return a.bD^(!(a.rT>>F_(b&65535)&1)?0:1);}
function LH(){var a=this;C.call(a);a.sH=null;a.l0=null;a.dC=0;a.mM=null;a.z9=0.0;a.AQ=0.0;a.fL=0;a.Ek=null;a.nW=null;a.pP=null;a.uO=0;a.se=0;a.wO=0;a.Cd=0;a.vB=0;a.ii=null;a.gt=null;a.LC=0;a.N7=null;a.PP=0.0;a.nk=0;a.rb=0;a.u_=0;}
var Blp=null;function TD(){TD=N(LH);A3I();}
function BcF(){var a=new LH();ABp(a);return a;}
function Blq(a,b){var c=new LH();Kf(c,a,b);return c;}
function ABp(a){TD();Kf(a,1000,null);}
function Kf(a,b,c){var d,e,f,g,h,i,j,k,l,m;TD();J(a);a.dC=0;a.mM=null;a.z9=0.0;a.AQ=0.0;a.fL=0;a.Ek=BF();a.nW=BF();a.pP=BF();a.uO=0;a.se=770;a.wO=771;a.Cd=770;a.vB=771;a.gt=null;a.N7=CO(1.0,1.0,1.0,1.0);a.PP=BjW;a.nk=0;a.rb=0;a.u_=0;if(b>8191)G(W((((I()).a(B(466))).j(b)).b()));if(BhN===null)d=Blp;else{M1();d=Bli;}e=new HS;f=b*4|0;g=b*6|0;M3(e,d,0,f,g,H(Fc,[EB(1,2,B(467)),EB(4,4,B(468)),EB(16,2,B(469))]));a.sH=e;a.nW.LR(0.0,0.0,BhI.bo(),BhI.bl());a.l0=B_(b*20|0);h=MV(g);i=0;j=0;while(j<g){k=h.data;k[j]=i;k[j
+1|0]=(i+1|0)<<16>>16;l=j+2|0;m=(i+2|0)<<16>>16;k[l]=m;k[j+3|0]=m;k[j+4|0]=(i+3|0)<<16>>16;k[j+5|0]=i;j=j+6|0;i=(i+4|0)<<16>>16;}a.sH.Nx(h);if(c!==null)a.ii=c;else{a.ii=S1();a.LC=1;}}
function S1(){var b,c,d;TD();b=B(470);c=B(471);d=AIG(b,c);if(d.r8())return d;G(W((((I()).a(B(472))).a(d.qY())).b()));}
function A0J(a){if(a.fL)G(DP(B(473)));a.nk=0;BhL.kQ(0);if(a.gt===null)a.ii.eu();else a.gt.eu();a.zX();a.fL=1;}
function AQE(a){var b;if(!a.fL)G(DP(B(474)));if(a.dC>0)a.en();a.mM=null;a.fL=0;b=BhL;b.kQ(1);if(a.Jj())b.eh(3042);}
function AKW(a,b,c,d,e){var f,g,h;if(!a.fL)G(DP(B(475)));f=a.l0.data.length;if(b!==a.mM){a.Kb(b);g=f;}else{g=f-a.dC|0;if(!g){a.en();g=f;}}h=Bq(g,e);X(c,d,a.l0,a.dC,h);a.dC=a.dC+h|0;g=e-h|0;while(g>0){d=d+h|0;a.en();h=Bq(f,g);X(c,d,a.l0,0,h);a.dC=a.dC+h|0;g=g-h|0;}}
function AKl(a){var b,c,d;if(!a.dC)return;a.nk=a.nk+1|0;a.rb=a.rb+1|0;b=a.dC/20|0;if(b>a.u_)a.u_=b;c=b*6|0;a.mM.eu();d=a.sH;d.FC(a.l0,0,a.dC);(d.Am()).cY(0);(d.Am()).cl(c);if(a.uO)BhL.eh(3042);else{BhL.o3(3042);if(a.se!=(-1))BhL.JJ(a.se,a.wO,a.Cd,a.vB);}d.Ny(a.gt===null?a.ii:a.gt,4,0,c);a.dC=0;}
function AI1(a,b){if(a.fL)a.en();a.nW.ch(b);if(a.fL)a.zX();}
function AHm(a){(a.pP.ch(a.nW)).hA(a.Ek);if(a.gt===null){a.ii.E6(B(476),a.pP);a.ii.ya(B(477),0);}else{a.gt.E6(B(476),a.pP);a.gt.ya(B(477),0);}}
function A4W(a,b){a.en();a.mM=b;a.z9=1.0/b.bo();a.AQ=1.0/b.bl();}
function ADZ(a){return a.uO?0:1;}
function A3I(){M1();Blp=Blf;}
var L$=D();
var Blr=null;function Beq(){Beq=N(L$);A6Q();}
function A6Q(){Blr=Bc((UF()).data.length);Blr.data[BD(Blg)]=1;Blr.data[BD(Blh)]=2;Blr.data[BD(Bli)]=3;Blr.data[BD(Blf)]=4;}
var XK=D(CN);
var N5=D(0);
function LV(){var a=this;C.call(a);a.jB=null;a.e5=null;a.xE=null;a.JH=null;a.eA=null;a.NE=null;}
var Bls=0;function VG(){VG=N(LV);AYI();}
function Bfb(a){var b=new LV();ACR(b,a);return b;}
function Blt(a,b){var c=new LV();Ka(c,a,b);return c;}
function Blu(a,b,c){var d=new LV();Nk(d,a,b,c);return d;}
function ACR(a,b){VG();Ka(a,b,null);}
function Ka(a,b,c){VG();Nk(a,b,null,c);}
function Nk(a,b,c,d){VG();J(a);a.jB=Bp();a.e5=Bp();a.xE=Bp();a.JH=b;if(c===null)c=BF();a.eA=c;if(d!==null)Pc(a,b.j1,d);else Q6(a,b.j1);a.G0(b.At,Bls);a.PJ();}
function Q6(a,b){var c,d,e;c=0;d=b.h;while(c<d){e=b.l(c);a.e5.F(e.u5());c=c+1|0;}N_(a);}
function Pc(a,b,c){var d,e,f,g,h,i,j;d=0;e=b.h;while(d<e){f=c.data;g=b.l(d);h=f.length;i=0;a:{while(true){if(i>=h)break a;j=f[i];if(j.z(g.gm))break;i=i+1|0;}a.e5.F(g.u5());}d=d+1|0;}N_(a);}
function Ol(a,b){var c,d,e,f,g,h,i,j;c=0;d=b.d9.h;while(c<d){a:{e=b.d9.l(c);f=e.cH;if(f!==null){g=0;while(true){if(g>=f.cb)break a;f.ep.data[g]=a.yy(f.ep.data[g].gm);g=g+1|0;}}}if(!a.jB.is(e.dY,1)){h=a.jB.KT(e.dY,0);if(h>=0)e.dY=a.jB.l(h);else{i=a.jB;j=e.dY.IZ();e.dY=j;i.F(j);}}c=c+1|0;}c=0;d=b.IC();while(c<d){Ol(a,b.P0(c));c=c+1|0;}}
function N_(a){var b,c;b=0;c=a.e5.h;while(b<c){Ol(a,a.e5.l(b));b=b+1|0;}}
function AMw(a,b,c){var d,e;d=b.fr();while(d.bC()){e=d.bz();a.Hi(e,c);}}
function AE7(a,b,c){var d,e,f,g,h,i,j;d=Bfs();d.DK=b.DK;d.wg=b.wg;e=b.mT.bZ();while(e.bC()){f=e.bz();g=a.yy(f.yS.gm);if(g===null)continue;a:{h=BeQ();h.yS=g;if(c){h.gB=f.gB;h.go=f.go;h.fP=f.fP;}else{b:{if(f.gB!==null){h.gB=Bp();i=f.gB.bZ();while(true){if(!i.bC())break b;j=i.bz();h.gB.F(Rl(j.nl,j.ou));}}}c:{if(f.go!==null){h.go=Bp();i=f.go.bZ();while(true){if(!i.bC())break c;j=i.bz();h.go.F(Rl(j.nl,j.ou));}}}if(f.fP!==null){h.fP=Bp();i=f.fP.bZ();while(true){if(!i.bC())break a;j=i.bz();h.fP.F(Rl(j.nl,j.ou));}}}}if
(!(h.gB===null&&h.go===null&&h.fP===null))d.mT.F(h);}if(d.mT.h>0)a.xE.F(d);}
function AO7(a,b,c){var d,e;d=a.e5.bZ();while(d.bC()){e=d.bz();a.zZ(e,b,c);}}
function A9J(a,b,c,d){d.Iu(b);if(d.dz===null&&a.eA!==null)(b.dy.ch(a.eA)).hA(c.fH);else if(a.eA===null)b.dy.fv();else b.dy.ch(a.eA);b.BL=a.NE;return b;}
function ANw(a,b,c,d){var e,f,g,h;a:{if(b.d9.h>0){e=b.d9.bZ();while(true){if(!e.bC())break a;f=e.bz();if(f.lw)c.F(a.Jd(d.eR(),b,f));}}}g=(b.rA()).fr();while(g.bC()){h=g.bz();a.zZ(h,c,d);}}
function AC8(a){var b,c;b=a.e5.h;c=0;while(c<b){(a.e5.l(c)).C$(1);c=c+1|0;}c=0;while(c<b){(a.e5.l(c)).yU(1);c=c+1|0;}}
function ACZ(a,b){return a.N5(b,1);}
function AMQ(a,b,c){return a.Pc(b,c,0);}
function AYU(a,b,c,d){return ZG(a.e5,b,c,d);}
function AYI(){Bls=1;}
var DY=D(Dc);
function Blv(){var a=new DY();Kp(a);return a;}
function Kp(a){VY(a);}
function QH(){DY.call(this);this.EU=0;}
function Bad(a){var b=new QH();A1n(b,a);return b;}
function A1n(a,b){Kp(a);a.EU=b;}
function AHa(a){return (((I()).a(B(478))).j(a.EU)).b();}
function P0(){var a=this;Q.call(a);a.uq=0;a.vQ=0;a.py=0;a.rn=0;a.e9=0;a.hV=0;a.bc=null;a.bE=null;}
function CR(){var a=new P0();ATG(a);return a;}
function Bfl(a,b){var c=new P0();P6(c,a,b);return c;}
function Be5(a,b,c){var d=new P0();AU1(d,a,b,c);return d;}
function ATG(a){Be(a);a.bc=A_b();}
function P6(a,b,c){Be(a);a.bc=A_b();a.uq=b;a.vQ=c;}
function AU1(a,b,c,d){P6(a,c,d);a.f8(b);}
function ACW(a,b){a:{if(a.uq){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.e9){a.bc.rS(GF(b&65535));break a;}a.bc.sO(GF(b&65535));break a;}if(a.vQ&&b>128){a.py=1;b=EX(En(b));}}}if(!(!K5(b)&&!Kh(b))){if(a.rn)a.bG.rS(b-55296|0);else a.bG.sO(b-55296|0);}if(a.e9)a.bc.rS(b);else a.bc.sO(b);if(!a.be&&Ik(b))a.be=1;return a;}
function A$3(a,b){var c,d;if(!a.be&&b.be)a.be=1;if(a.rn){if(!b.b5)a.bG.iF(b.ci());else a.bG.dN(b.ci());}else if(!b.b5)a.bG.iN(b.ci());else{a.bG.i5(b.ci());a.bG.dN(b.ci());a.b5=a.b5?0:1;a.rn=1;}if(!a.hV&&b.bK()!==null){if(a.e9){if(!b.jE())a.bc.iF(b.bK());else a.bc.dN(b.bK());}else if(!b.jE())a.bc.iN(b.bK());else{a.bc.i5(b.bK());a.bc.dN(b.bK());a.bD=a.bD?0:1;a.e9=1;}}else{c=a.bD;if(a.bE!==null){d=a.bE;if(!c)a.bE=Bfg(a,c,d,b);else a.bE=Bcs(a,c,d,b);}else{if(c&&!a.e9&&a.bc.bN())a.bE=Bab(a,b);else if(!c)a.bE=Bcv(a,
c,b);else a.bE=A_Y(a,c,b);a.hV=1;}}return a;}
function A8w(a,b,c){if(b>c)G(CK());a:{b:{if(!a.uq){if(c<55296)break b;if(b>57343)break b;}while(true){if(b>=(c+1|0))break a;a.cE(b);b=b+1|0;}}if(a.e9)a.bc.Oi(b,c+1|0);else a.bc.n1(b,c+1|0);}return a;}
function AUu(a,b){var c,d;if(!a.be&&b.be)a.be=1;if(b.g6())a.py=1;if(!(a.b5^b.b5)){if(!a.b5)a.bG.iN(b.ci());else a.bG.dN(b.ci());}else if(a.b5)a.bG.iF(b.ci());else{a.bG.i5(b.ci());a.bG.dN(b.ci());a.b5=1;}if(!a.hV&&b.bK()!==null){if(!(a.bD^b.jE())){if(!a.bD)a.bc.iN(b.bK());else a.bc.dN(b.bK());}else if(a.bD)a.bc.iF(b.bK());else{a.bc.i5(b.bK());a.bc.dN(b.bK());a.bD=1;}}else{c=a.bD;if(a.bE!==null){d=a.bE;if(!c)a.bE=BbO(a,c,d,b);else a.bE=BfM(a,c,d,b);}else{if(!a.e9&&a.bc.bN()){if(!c)a.bE=A_$(a,b);else a.bE=Bfq(a,
b);}else if(!c)a.bE=Bc2(a,b,c);else a.bE=A_t(a,b,c);a.hV=1;}}}
function ARU(a,b){var c,d;if(!a.be&&b.be)a.be=1;if(b.g6())a.py=1;if(!(a.b5^b.b5)){if(!a.b5)a.bG.dN(b.ci());else a.bG.iN(b.ci());}else if(!a.b5)a.bG.iF(b.ci());else{a.bG.i5(b.ci());a.bG.dN(b.ci());a.b5=0;}if(!a.hV&&b.bK()!==null){if(!(a.bD^b.jE())){if(!a.bD)a.bc.dN(b.bK());else a.bc.iN(b.bK());}else if(!a.bD)a.bc.iF(b.bK());else{a.bc.i5(b.bK());a.bc.dN(b.bK());a.bD=0;}}else{c=a.bD;if(a.bE!==null){d=a.bE;if(!c)a.bE=BfI(a,c,d,b);else a.bE=BbI(a,c,d,b);}else{if(!a.e9&&a.bc.bN()){if(!c)a.bE=Beg(a,b);else a.bE=Bez(a,
b);}else if(!c)a.bE=A_G(a,b,c);else a.bE=BfH(a,b,c);a.hV=1;}}}
function AGi(a,b){if(a.bE!==null)return a.bD^a.bE.p(b);return a.bD^a.bc.eJ(b);}
function ATR(a){if(!a.hV)return a.bc;return null;}
function AZi(a){return a.bG;}
function ARk(a){var b,c;if(a.bE!==null)return a;b=a.bK();c=Bdr(a,b);return c.f8(a.jE());}
function A3_(a){var b,c;b=I();c=a.bc.k_(0);while(c>=0){b.qX(Eu(c));b.U(124);c=a.bc.k_(c+1|0);}if(b.i()>0)b.E0(b.i()-1|0);return b.b();}
function AIk(a){return a.py;}
function PW(){var a=this;C.call(a);a.vg=null;a.Cj=null;a.oy=null;}
function Bcc(a,b,c){var d=new PW();A6a(d,a,b,c);return d;}
function A6a(a,b,c,d){a.oy=b;a.vg=c;a.Cj=d;J(a);}
function A4n(a,b){if($rt_str(b.type).z(B(479)))a.oy.my.dc(a.vg);else a.oy.my.dn(a.vg,a.Cj);a.oy.m1.jY();}
function A9Z(a,b){a.dU(b);}
var ABD=D(Bm);
function Ux(){var a=new ABD();ASj(a);return a;}
function ASj(a){Cx(a);}
function Tw(){var a=this;C.call(a);a.q_=0;a.qK=0;a.v9=0;}
function Bdz(){var a=new Tw();AC3(a);return a;}
function AC3(a){J(a);}
var UC=D(Ek);
function Bfo(a,b){var c=new UC();A07(c,a,b);return c;}
function A07(a,b,c){J3(a,b,c);}
var Ow=D(0);
var I4=D();
function Blw(){var a=new I4();Tf(a);return a;}
function Tf(a){J(a);}
function AHw(a,b,c,d,e){return 0;}
function ANK(a){}
function Zy(){var a=this;I4.call(a);a.wQ=null;a.q2=0.0;}
function BeN(){var a=new Zy();AKr(a);return a;}
function AKr(a){Tf(a);}
function A1w(a,b,c,d,e){a.q2=0.0;return 0;}
function AHM(a,b,c,d,e){return 0;}
function A6M(a,b,c){return 0;}
function A5A(a,b,c,d){return 0;}
function A1_(a,b,c,d,e){return 0;}
function A9a(a,b,c){var d,e,f,g,h;d=c-b;e=d-a.q2;a.q2=d;f=BhI.bo();g=BhI.bl();h=a.wQ;if(f>g)f=g;return h.M1(e/f);}
function AYC(a,b,c,d,e){return 0;}
var Pg=D(ER);
function BeY(a,b,c,d,e,f){var g=new Pg();A3D(g,a,b,c,d,e,f);return g;}
function A3D(a,b,c,d,e,f,g){LO(a,b,c,d,e,f,g);}
function ALR(a,b){var c,d,e,f;c=a.cv.A.data;d=a.cj;e=b*4|0;f=(c[d+e|0]&255)<<24|(a.cv.A.data[(a.cj+e|0)+1|0]&255)<<16|(a.cv.A.data[(a.cj+e|0)+2|0]&255)<<8|a.cv.A.data[(a.cj+e|0)+3|0]&255;return $rt_intBitsToFloat(f);}
function A51(a,b,c){var d,e,f,g;d=$rt_floatToIntBits(c);e=a.cv.A.data;f=a.cj;g=b*4|0;e[f+g|0]=d>>24<<24>>24;a.cv.A.data[(a.cj+g|0)+1|0]=d>>16<<24>>24;a.cv.A.data[(a.cj+g|0)+2|0]=d>>8<<24>>24;a.cv.A.data[(a.cj+g|0)+3|0]=d<<24>>24;}
var Mv=D(0);
function Ha(){var a=this;C.call(a);a.hg=null;a.md=null;a.fI=null;a.bu=null;a.pv=null;a.pm=null;a.qh=null;a.bh=null;a.cX=null;a.cU=null;a.fd=null;a.hU=null;a.kD=null;}
function AA6(a){J(a);a.hg=Bp();a.md=Bp();a.fI=Bp();a.pv=G$();a.pm=G$();a.qh=Bah();a.hU=G$();a.kD=ATl();}
function ADw(a,b,c,d){var e;if(a.bu!==null)G(U(B(480)));e=a.NU(b);if(e>=0){a.md.k1(e,c);a.fI.k1(e,d);return e;}a.hg.F(b);a.md.F(c);a.fI.F(d);return a.hg.h-1|0;}
function A$S(a,b,c){return a.IU(b.v5,b,c);}
function ASk(a,b){return a.bf(b,null);}
function AHR(a,b){var c,d;c=a.hg.h;d=0;while(true){if(d>=c)return (-1);if((a.hg.l(d)).z(b))break;d=d+1|0;}return d;}
function AZb(a,b,c){var d,e,f,g,h,i,j,k,l;if(a.bu!==null)G(U(B(481)));if(!b.r8())G(U(b.qY()));a.bh=b;d=a.hg.h;a.bu=Bc(d);e=0;while(e<d){f=a.hg.l(e);g=a.md.l(e);h=a.fI.l(e);if(g!==null&&!g.LU(a,e,c))a.bu.data[e]=(-1);else{a.bu.data[e]=b.AF(f,0);if(a.bu.data[e]>=0&&h!==null){if(!h.xV(a,e))a.pm.iV(e);else a.pv.iV(e);}}if(a.bu.data[e]<0){a.md.k1(e,null);a.fI.k1(e,null);}e=e+1|0;}a:{if(c!==null){i=c.cQ.b7.gR();j=CT(i);e=0;while(true){if(e>=j)break a;k=CB(i,e);l=b.lW(k.er);if(l>=0)a.qh.op(IT(k),l);e=e+1|0;}}}}
function XU(a,b,c){var d,e,f;a.cU=b;a.cX=c;a.bh.eu();a.fd=null;d=0;while(d<a.pv.bS){e=a.fI;f=a.pv.b2(d);if(e.l(f)!==null)(a.fI.l(f)).bg(a,f,null,null);d=d+1|0;}}
function WL(a,b){var c,d;a.hU.K();c=CT(b);d=0;while(d<c){a.hU.iV(a.qh.KC(IT(CB(b,d)),(-1)));d=d+1|0;}a.hU.Hl();return a.hU.co;}
function A0i(a,b){if(b.dy.PB()===0.0)return;a.kD.K();if(b.cu!==null)F7(a.kD,b.cu);if(b.c$!==null)F7(a.kD,b.c$);a.y0(b,a.kD);}
function Vn(a,b,c){var d,e,f;d=0;while(d<a.pm.bS){e=a.fI;f=a.pm.b2(d);if(e.l(f)!==null)(a.fI.l(f)).bg(a,f,b,c);d=d+1|0;}if(a.fd!==b.cQ.b7){if(a.fd!==null)a.fd.gN(a.bh,a.hU.co);a.fd=b.cQ.b7;a.fd.id(a.bh,WL(a,b.cQ.b7.gR()));}b.cQ.Jl(a.bh,0);}
function WC(a){if(a.fd!==null){a.fd.gN(a.bh,a.hU.co);a.fd=null;}}
function Ic(a,b){return b>=0&&b<a.bu.data.length&&a.bu.data[b]>=0?1:0;}
function B0(a,b){return b>=0&&b<a.bu.data.length?a.bu.data[b]:(-1);}
function DZ(a,b,c){if(a.bu.data[b]<0)return 0;a.bh.GG(a.bu.data[b],c);return 1;}
function Q1(a,b,c){if(a.bu.data[b]<0)return 0;a.bh.HH(a.bu.data[b],c);return 1;}
function Ly(a,b,c){if(a.bu.data[b]<0)return 0;a.bh.sn(a.bu.data[b],c);return 1;}
function Fv(a,b,c){if(a.bu.data[b]<0)return 0;a.bh.Kx(a.bu.data[b],c);return 1;}
function Fn(a,b,c){if(a.bu.data[b]<0)return 0;a.bh.ka(a.bu.data[b],c);return 1;}
function Ww(a,b,c,d){if(a.bu.data[b]<0)return 0;a.bh.F5(a.bu.data[b],c,d);return 1;}
function DO(a,b,c,d,e,f){if(a.bu.data[b]<0)return 0;a.bh.yn(a.bu.data[b],c,d,e,f);return 1;}
function DS(a,b,c){if(a.bu.data[b]<0)return 0;a.bh.Dc(a.bu.data[b],c);return 1;}
function Zx(a,b,c){if(a.bu.data[b]<0)return 0;a.bh.Dc(a.bu.data[b],a.cX.d6.gD(c));return 1;}
function RE(){Q.call(this);this.MY=null;}
function A_T(a){var b=new RE();AVd(b,a);return b;}
function AVd(a,b){a.MY=b;Be(a);}
function AEm(a,b){return KK(b);}
function Tm(){DY.call(this);this.zO=0;}
function Bda(a){var b=new Tm();AN8(b,a);return b;}
function AN8(a,b){Kp(a);a.zO=b;}
function AH7(a){return (((I()).a(B(482))).j(a.zO)).b();}
var X0=D(T);
function Bdd(){var a=new X0();AD2(a);return a;}
function AD2(a){Bo(a);}
function AHx(a){var b;b=A_Z(a);b.be=1;return b;}
var Fg=D(Bx);
var Bi7=null;var Bi2=null;var Blx=null;function Gv(){Gv=N(Fg);A0l();}
function AHN(a,b){var c=new Fg();Z6(c,a,b);return c;}
function Z6(a,b,c){Gv();Cw(a,b,c);}
function A0l(){Bi7=AHN(B(483),0);Bi2=AHN(B(484),1);Blx=H(Fg,[Bi7,Bi2]);}
var EG=D(Bx);
var Bly=null;var Bi3=null;var Blz=null;function SI(){SI=N(EG);A7b();}
function ANJ(a,b){var c=new EG();Y$(c,a,b);return c;}
function Y$(a,b,c){SI();Cw(a,b,c);}
function A7b(){Bly=ANJ(B(485),0);Bi3=ANJ(B(486),1);Blz=H(EG,[Bly,Bi3]);}
function HZ(){BI.call(this);this.ml=0.0;}
var BlA=Ba;var BlB=Ba;function ET(){ET=N(HZ);ADS();}
function A27(a,b){var c=new HZ();Vv(c,a,b);return c;}
function N7(b){ET();return A27(BlA,b);}
function Vv(a,b,c){ET();Fb(a,b);a.ml=c;}
function AO2(a){return A27(a.da,a.ml);}
function ASy(a){var b,c;b=F2(a);c=(977*b|0)+G0(a.ml)|0;return c;}
function ADS(){BlA=BO(B(487));BlB=BO(B(488));}
function Im(){var a=this;C.call(a);a.qV=0;a.qz=0;a.AB=0;a.Fm=0;a.xk=0;a.D1=0;a.FK=0;a.Ng=0;a.ND=0;a.A9=0;}
function Y8(a){J(a);a.qV=(-1);a.qz=(-1);a.AB=0;a.Fm=0;a.xk=0;a.D1=0;a.FK=0;a.Ng=0;a.ND=0;}
var TB=D(B3);
function Ba7(){var a=new TB();A1s(a);return a;}
function A1s(a){E$(a);}
var Rd=D(CN);
var Nh=D(D1);
var BlC=null;function N1(){N1=N(Nh);A0A();}
function ACq(b,c){var d,e,f,g,h;N1();if(c>=2&&c<=36){if(b!==null&&!b.bN()){a:{d=0;e=0;switch(b.f(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=Ba;while(e<b.i()){g=e+1|0;h=Nl(b.f(e));if(h<0)G(DF((((I()).a(B(6))).a(b)).b()));if(h>=c)G(DF((((((I()).a(B(7))).j(c)).a(B(8))).a(b)).b()));f=CA(Ce(O(c),f),O(h));if(Kt(f,Ba)){if(g==b.i()&&Z(f,Cc(0, 2147483648))&&d)return Cc(0, 2147483648);G(DF((((I()).a(B(9))).a(b)).b()));}e=g;}if(d)f=A3K(f);return f;}G(DF(B(10)));}G(DF((((I()).a(B(11))).j(c)).b()));}
function AB9(b){N1();return ACq(b,10);}
function CV(b){var c,d,e;N1();if(Z(b,Ba))return 64;c=0;d=CM(b,32);if(Du(d,Ba))c=32;else d=b;e=CM(d,16);if(Z(e,Ba))e=d;else c=c|16;d=CM(e,8);if(Z(d,Ba))d=e;else c=c|8;e=CM(d,4);if(Z(e,Ba))e=d;else c=c|4;d=CM(e,2);if(Z(d,Ba))d=e;else c=c|2;if(Du(CM(d,1),Ba))c=c|1;return (64-c|0)-1|0;}
function W_(b){var c,d,e;N1();if(Z(b,Ba))return 64;c=0;d=D6(b,32);if(Du(d,Ba))c=32;else d=b;e=D6(d,16);if(Z(e,Ba))e=d;else c=c|16;d=D6(e,8);if(Z(d,Ba))d=e;else c=c|8;e=D6(d,4);if(Z(e,Ba))e=d;else c=c|4;d=D6(e,2);if(Z(d,Ba))d=e;else c=c|2;if(Du(D6(d,1),Ba))c=c|1;return (64-c|0)-1|0;}
function A0A(){BlC=F($rt_longcls());}
var Gu=D(BR);
var BlD=null;function AMi(){AMi=N(Gu);AIt();}
function BdF(a){var b=new Gu();Sa(b,a);return b;}
function BlE(){var a=new Gu();HM(a);return a;}
function Sa(a,b){AMi();B$(a);}
function HM(a){AMi();B$(a);}
function AIt(){BlD=BdF(0);}
var Kw=D(Gu);
var BlF=null;function A9X(){A9X=N(Kw);A$y();}
function Bbf(){var a=new Kw();Y4(a);return a;}
function A_Q(a){var b=new Kw();Rz(b,a);return b;}
function Y4(a){A9X();HM(a);a.dZ(Tc(),1);}
function Rz(a,b){A9X();HM(a);}
function A$y(){BlF=A_Q(0);}
function Tc(){var jsObj=new Bullet.btDbvtBroadphase();return Bullet.getPointer(jsObj);}
var Ne=D(0);
function Rb(){C.call(this);this.zh=null;}
function Ben(){var a=new Rb();AS4(a);return a;}
function AS4(a){J(a);a.zh=A0z();}
function ALn(a,b,c){AU5(a.zh,$rt_ustr(b),c);}
function A0z(){var soundManager=new SoundManager();soundManager.debugMode=false;return soundManager;}
function AU5(b,c,d){b.setup({url:c,onready:function(){d.onready();},ontimeout:function(status){d.ontimeout();}});}
function S9(){var a=this;C.call(a);a.li=null;a.qe=null;a.dp=0;a.z8=0;}
function A4u(a){var b=new S9();AKO(b,a);return b;}
function AKO(a,b){J(a);while(b>=a.dp){a.dp=a.dp<<1|1;}a.dp=a.dp<<1|1;a.li=Bc(a.dp+1|0);a.qe=Bc(a.dp+1|0);a.z8=b;}
function AKc(a,b,c){var d,e,f;d=0;e=b&a.dp;while(a.li.data[e]&&a.li.data[e]!=b){f=d+1|0;d=f&a.dp;f=e+d|0;e=f&a.dp;}a.li.data[e]=b;a.qe.data[e]=c;}
function A3b(a,b){var c,d,e,f;c=b&a.dp;d=0;while(true){e=a.li.data[c];if(!e)break;if(e==b)return a.qe.data[c];f=d+1|0;d=f&a.dp;f=c+d|0;c=f&a.dp;}return a.z8;}
var Hm=D(0);
var QU=D();
function A$D(a,b){return a.Mc(b);}
function AF0(a){return a.OW();}
function G5(){var a=this;C.call(a);a.jT=null;a.zI=0.0;a.zL=0.0;a.P8=0.0;a.P6=0.0;a.n7=0;a.mX=0;}
function AUB(a){var b=new G5();AVJ(b,a);return b;}
function AVJ(a,b){J(a);if(b===null)G(W(B(489)));a.jT=b;a.M4(0,0,b.bo(),b.bl());}
function A7n(a,b,c,d,e){var f,g;f=1.0/a.jT.bo();g=1.0/a.jT.bl();a.Nh(b*f,c*g,(b+d|0)*f,(c+e|0)*g);a.n7=Vs(d);a.mX=Vs(e);}
function AFm(a,b,c,d,e){var f,g,h,i,j,k,l;f=a.jT.bo();g=a.jT.bl();h=CG(d-b);i=f;a.n7=De(h*i);h=CG(e-c);j=g;a.mX=De(h*j);if(a.n7==1&&a.mX==1){k=0.25/i;b=b+k;d=d-k;l=0.25/j;c=c+l;e=e-l;}a.zI=b;a.zL=c;a.P8=d;a.P6=e;}
function ASW(a){return a.jT;}
function AGD(a){return a.n7;}
function ADD(a){return a.mX;}
function R8(){JH.call(this);this.td=0.0;}
function A_C(){var a=new R8();AUt(a);return a;}
function BbQ(a){var b=new R8();US(b,a);return b;}
function AUt(a){US(a,BdP());}
function US(a,b){Th(a);a.td=1.0;a.Gp(b);}
function AYs(a,b,c,d){a.Hv(0,0,b,c);a.J9(b*a.td,c*a.td);a.Pt(d);}
function VL(){var a=this;C.call(a);a.ep=null;a.gK=null;a.cb=0;a.JX=0;}
function BcN(a,b,c,d){var e=new VL();APJ(e,a,b,c,d);return e;}
function APJ(a,b,c,d,e){J(a);a.JX=b;a.ep=EW(d,c);a.gK=EW(e,c);}
function AMD(a,b){a.M8(b,0,b.cb);}
function AU4(a,b,c,d){var e;if((c+d|0)>b.cb)G(W((((((((I()).a(B(490))).j(c)).a(B(427))).j(d)).a(B(428))).j(b.cb)).b()));e=(a.cb+d|0)-c|0;if(e>=a.ep.data.length)a.jG(Bf(8,e*1.75|0));X(b.ep,c,a.ep,a.cb,d);X(b.gK,c,a.gK,a.cb,d);a.cb=a.cb+d|0;}
function A23(a){Hk(a.ep,0,a.cb,null);Hk(a.gK,0,a.cb,null);a.cb=0;}
function ASF(a,b){var c,d,e;c=EW((Cj(a.ep)).gp(),b);d=c.data;X(a.ep,0,c,0,Bq(a.cb,d.length));a.ep=c;e=EW((Cj(a.gK)).gp(),b);d=e.data;X(a.gK,0,e,0,Bq(a.cb,d.length));a.gK=e;}
var QC=D(IQ);
function Bam(){var a=new QC();A12(a);return a;}
function A12(a){TP(a);}
function AJp(a){var b;b=(Zv(a)).f8(1);b.be=1;return b;}
function Q4(){var a=this;C.call(a);a.kf=null;a.gH=null;a.j6=null;a.L0=0;a.FB=0;a.uZ=0;}
function Ba8(){var a=new Q4();AGc(a);return a;}
function BlG(a,b,c,d){var e=new Q4();OJ(e,a,b,c,d);return e;}
function BlH(a,b,c){var d=new Q4();Ug(d,a,b,c);return d;}
function BlI(a,b,c){var d=new Q4();Yu(d,a,b,c);return d;}
function AGc(a){OJ(a,BhK.n_(B(491)),BhK.n_(B(492)),0,1);}
function OJ(a,b,c,d,e){Ug(a,BcR(b,d),AUB(ARw(c,0)),e);a.uZ=1;}
function Ug(a,b,c,d){var e,f;if(c===null)e=null;else{f=Y(G5,1);f.data[0]=c;e=AEr(f);}Yu(a,b,e,d);}
function Yu(a,b,c,d){var e,f,g;J(a);a.L0=b.rd;a.kf=b;a.FB=d;if(c!==null&&c.h){a.gH=c;a.uZ=0;}else{if(b.hy===null)G(W(B(493)));e=b.hy.data.length;a.gH=DJ(e);f=0;while(f<e){g=b.sl===null?BhK.Fe(b.hy.data[f]):BhK.N$(b.hy.data[f],b.sl.Om());a.gH.F(AUB(ARw(g,0)));f=f+1|0;}a.uZ=1;}a.j6=a.Kp();a.Hr(b);}
function ATM(a,b){var c,d,e,f,g,h,i,j;c=b.hc.data;d=c.length;e=0;while(e<d){a:{f=c[e];if(f!==null){g=f.data;h=g.length;i=0;while(true){if(i>=h)break a;j=g[i];if(j!==null)b.ER(j,a.gH.l(j.jU));i=i+1|0;}}}e=e+1|0;}if(b.ir!==null)b.ER(b.ir,a.gH.l(b.ir.jU));}
function AIV(a,b,c,d,e){var f;a.j6.K();f=a.j6.Jq(c,d,e);a.j6.Nj(b);return f;}
function A9H(a,b,c,d,e){(a.j6.yG()).hT(b,c,d,e);}
function AQp(a){return a.gH;}
function A9r(a){return Be7(a,a.FB);}
var Gy=D(GN);
var BlJ=null;function AHk(){AHk=N(Gy);A$s();}
function BfK(a){var b=new Gy();Ve(b,a);return b;}
function BlK(){var a=new Gy();KS(a);return a;}
function Ve(a,b){AHk();Jr(a);}
function KS(a){AHk();Jr(a);}
function A$s(){BlJ=BfK(0);}
var He=D(Gy);
function BlL(){var a=new He();RL(a);return a;}
function RL(a){KS(a);}
var Iq=D(He);
function BlM(){var a=new Iq();Lr(a);return a;}
function Lr(a){RL(a);}
var LT=D(Iq);
var BlN=null;function AFa(){AFa=N(LT);AH2();}
function BeW(a){var b=new LT();Sd(b,a);return b;}
function BaV(a){var b=new LT();AAi(b,a);return b;}
function Sd(a,b){var c;AFa();Lr(a);Fl();c=Bgq;Gq(b,c);a.dZ(ZA(c.dd()),1);}
function A9i(a,b,c){var d,e,f;Fl();d=Bgq;Gq(c,d);e=a.bY;f=d.dd();ABC(e,b,f);Wi(d,c);}
function AAi(a,b){AFa();Lr(a);}
function AH2(){BlN=BaV(0);}
function ZA(b){var boxHalfExtentsJSObj=Bullet.wrapPointer(b,Bullet.btVector3);var jsObj=new Bullet.btBoxShape(boxHalfExtentsJSObj);return Bullet.getPointer(jsObj);}
function ABC(b,c,d){var jsObj=Bullet.wrapPointer(b,Bullet.btBoxShape);var inertiaJSObj=Bullet.wrapPointer(d,Bullet.btVector3);jsObj.calculateLocalInertia(c,inertiaJSObj);}
function Zb(){var a=this;C.call(a);a.fj=null;a.dY=null;a.cH=null;a.dz=null;a.lw=0;}
function Bdh(){var a=new Zb();AEa(a);return a;}
function BfG(a,b){var c=new Zb();AZp(c,a,b);return c;}
function AEa(a){J(a);a.lw=1;}
function AZp(a,b,c){J(a);a.lw=1;a.fj=b;a.dY=c;}
function AO4(a,b){b.c$=a.dY;b.cQ.Co(a.fj);b.dJ=a.dz;return b;}
function AP9(a){return (Bdh()).P9(a);}
function A4A(a,b){var c;a:{a.fj=Bfc(b.fj);a.dY=b.dY;a.lw=b.lw;if(b.cH===null){a.cH=null;a.dz=null;}else{if(a.cH!==null)a.cH.K();else a.cH=BcN(1,b.cH.cb,F(L0),F(Cu));a.cH.O4(b.cH);if(!(a.dz!==null&&a.dz.data.length==a.cH.cb))a.dz=Y(Cu,a.cH.cb);c=0;while(true){if(c>=a.dz.data.length)break a;if(a.dz.data[c]===null)a.dz.data[c]=BF();c=c+1|0;}}}return a;}
function TW(){var a=this;Q.call(a);a.A4=null;a.PN=null;}
function Bct(a,b){var c=new TW();ATL(c,a,b);return c;}
function ATL(a,b,c){a.PN=b;a.A4=c;Be(a);}
function AH4(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.b5^a.A4.eJ(c):0;}
function TV(){var a=this;Q.call(a);a.Ew=null;a.zC=null;a.Jo=null;}
function BaP(a,b,c){var d=new TV();A4x(d,a,b,c);return d;}
function A4x(a,b,c,d){a.Jo=b;a.Ew=c;a.zC=d;Be(a);}
function AUT(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.b5^a.Ew.eJ(c):0;return a.zC.p(b)&&!d?1:0;}
var C6=D(Bx);
var BlO=null;var BlP=null;var BlQ=null;var BlR=null;var BlS=null;var BlT=null;var Bi4=null;var BlU=null;function AX$(){AX$=N(C6);AUj();}
function FC(a,b){var c=new C6();Vb(c,a,b);return c;}
function Vb(a,b,c){AX$();Cw(a,b,c);}
function AUj(){BlO=FC(B(105),0);BlP=FC(B(494),1);BlQ=FC(B(495),2);BlR=FC(B(496),3);BlS=FC(B(497),4);BlT=FC(B(498),5);Bi4=FC(B(499),6);BlU=H(C6,[BlO,BlP,BlQ,BlR,BlS,BlT,Bi4]);}
var ABa=D(T);
function Bbq(){var a=new ABa();AV2(a);return a;}
function AV2(a){Bo(a);}
function A4r(a){var b;b=Bbx(a);b.be=1;return b;}
var Oq=D(0);
var WU=D(Ef);
function Bb2(a,b,c,d){var e=new WU();A3H(e,a,b,c,d);return e;}
function A3H(a,b,c,d,e){K0(a,b,c,d,e);}
function A62(a,b,c,d){var e,f,g,h;e=a.gf.ja();f=a.gf.iG();g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.bv.cg()|0)>d.J())break a;h=a.bv.bH(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.k.e(b,c,d);}if((b+a.bv.cg()|0)>d.J()){d.d5=1;return (-1);}h=a.bv.bH(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function Q$(){Im.call(this);this.Cn=null;}
function Bcm(a){var b=new Q$();AEs(b,a);return b;}
function AEs(a,b){var c,d,e,f;Y8(a);c=AY1();d=c.pe();e=A9t();f=d.getElementById($rt_ustr(b));a.Cn=A_6(e,f);TX(new OE);}
function AUU(a){return a.Cn;}
var Lf=D(0);
var Lk=D(0);
function XS(){var a=this;C.call(a);a.kB=0;a.f$=null;a.hY=null;a.xZ=0;a.sy=0;a.v3=0.0;a.sw=0;a.r7=0;a.iU=0;}
function Bah(){var a=new XS();ASf(a);return a;}
function BlV(a,b){var c=new XS();AAk(c,a,b);return c;}
function ASf(a){AAk(a,51,0.800000011920929);}
function AAk(a,b,c){var d;J(a);if(c>0.0&&c<1.0){a.v3=c;d=G3(b,c);a.sw=d*c|0;a.iU=d-1|0;a.r7=CV(O(a.iU));a.f$=Bc(d);a.hY=Bc(d);return;}G(W((((I()).a(B(40))).cB(c)).b()));}
function AOd(a,b){return Cp(CM(Ce(O(b),Cc(2135587861, 2654435769)),a.r7));}
function M_(a,b){var c,d,e;c=a.f$;d=a.e6(b);while(true){e=c.data[d];if(!e)return  -(d+1|0)|0;if(e==b)break;d=(d+1|0)&a.iU;}return d;}
function AHI(a,b,c){var d,e;if(!b){a.xZ=c;if(!a.sy){a.sy=1;a.kB=a.kB+1|0;}return;}d=M_(a,b);if(d>=0){a.hY.data[d]=c;return;}e= -(d+1|0)|0;a.f$.data[e]=b;a.hY.data[e]=c;e=a.kB+1|0;a.kB=e;if(e>=a.sw)RT(a,a.f$.data.length<<1);}
function Qr(a,b,c){var d,e,f;d=a.f$;e=a.e6(b);while(true){f=d.data;if(!f[e])break;e=(e+1|0)&a.iU;}f[e]=b;a.hY.data[e]=c;}
function ALy(a,b,c){var d;if(!b){if(a.sy)c=a.xZ;return c;}d=M_(a,b);if(d>=0)c=a.hY.data[d];return c;}
function RT(a,b){var c,d,e,f,g;a:{c=a.f$.data.length;a.sw=b*a.v3|0;a.iU=b-1|0;a.r7=CV(O(a.iU));d=a.f$;e=a.hY;a.f$=Bc(b);a.hY=Bc(b);if(a.kB>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g)Qr(a,g,e.data[f]);f=f+1|0;}}}}
function Xy(){Q.call(this);this.PW=null;}
function Bcf(a){var b=new Xy();ASJ(b,a);return b;}
function ASJ(a,b){a.PW=b;Be(a);}
function A3m(a,b){return J0(b);}
function PM(){var a=this;Q.call(a);a.oW=null;a.Lh=null;}
function Bdr(a,b){var c=new PM();ASR(c,a,b);return c;}
function ASR(a,b,c){a.Lh=b;a.oW=c;Be(a);}
function ALQ(a,b){return a.bD^a.oW.eJ(b);}
function A0h(a){var b,c;b=I();c=a.oW.k_(0);while(c>=0){b.qX(Eu(c));b.U(124);c=a.oW.k_(c+1|0);}if(b.i()>0)b.E0(b.i()-1|0);return b.b();}
var Vc=D(CH);
function BbM(a,b,c){var d=new Vc();AQ6(d,a,b,c);return d;}
function AQ6(a,b,c,d){Fd(a,b,c,d);JF();b.Q(BhG);}
function AXY(a,b,c,d){var e;while(true){e=a.Y.e(b,c,d);if(e<=0)break;b=e;}return a.k.e(b,c,d);}
function T2(){var a=this;C.call(a);a.JF=0;a.JU=Ba;a.su=null;a.DR=null;a.BG=Ba;a.xt=null;}
function BdB(a,b,c,d){var e=new T2();ADi(e,a,b,c,d);return e;}
function ADi(a,b,c,d,e){J(a);a.su=b;a.DR=c;a.BG=d;a.xt=e;}
function CX(){BI.call(this);this.dX=null;}
var BlW=Ba;var BlX=Ba;var BlY=Ba;var BlZ=Ba;var Bl0=Ba;var Bl1=Ba;var Bl2=Ba;var Bl3=Ba;function Cd(){Cd=N(CX);A1t();}
function Bl4(a){var b=new CX();Jk(b,a);return b;}
function Bl5(a,b){var c=new CX();JQ(c,a,b);return c;}
function AZV(a,b,c,d,e){var f=new CX();ND(f,a,b,c,d,e);return f;}
function Bcn(a){var b=new CX();Z0(b,a);return b;}
function UI(b){Cd();return Z(Br(b,Bl3),Ba)?0:1;}
function KY(b,c,d,e){Cd();return AZV(BlW,b,c,d,e);}
function Zq(b,c,d,e){Cd();return AZV(BlX,b,c,d,e);}
function Jk(a,b){Cd();Fb(a,b);a.dX=D0();if(UI(b))return;G(U(B(500)));}
function JQ(a,b,c){Cd();Jk(a,b);if(c!==null)a.dX.eP(c);}
function ND(a,b,c,d,e,f){Cd();Jk(a,b);a.dX.hT(c,d,e,f);}
function Z0(a,b){Cd();JQ(a,b.da,b.dX);}
function AJg(a){return Bcn(a);}
function ASp(a){var b,c;b=F2(a);c=(953*b|0)+a.dX.rY()|0;return c;}
function A1t(){BlW=BO(B(501));BlX=BO(B(502));BlY=BO(B(503));BlZ=BO(B(504));Bl0=BO(B(505));Bl1=BO(B(506));Bl2=BO(B(507));Bl3=BN(BN(BN(BN(BN(BN(BlY,BlW),BlX),BlZ),Bl0),Bl1),Bl2);}
function Hg(){var a=this;V.call(a);a.h9=null;a.DA=0;a.zj=0;}
var Bl6=null;var Bl7=null;function Px(){Px=N(Hg);A3L();}
function BeJ(a,b){var c=new Hg();Qf(c,a,b);return c;}
function Qf(a,b,c){Px();BL(a);a.h9=AO6();a.DA=b;a.zj=c;}
function A31(a,b,c,d,e){var f,g,h,i,j,k;if(d.cu===null){f=b.bh;g=B0(b,c);Px();f.z2(g,Bl6,0,Bl6.data.length);}else{h=d.dy;Px();h.uw(Bl7);Cd();if(Ct(e,Bl1))a.h9.Il((BB(e,Bl1)).dX);a:{JD();if(Ct(e,Bln)){i=Bln;j=(BB(e,i)).hj;k=a.DA;while(true){if(k>=j.h)break a;a.h9.P7((j.l(k)).bk,(j.l(k)).fb);k=k+1|0;}}}b:{A3n();if(Ct(e,BkH)){j=(BB(e,BkH)).D3;k=a.zj;while(true){if(k>=j.h)break b;a.h9.Me((j.l(k)).bk,(j.l(k)).eB,Bl7,(j.l(k)).dx);k=k+1|0;}}}a.h9.M5();b.bh.z2(B0(b,c),a.h9.cf,0,a.h9.cf.data.length);}}
function A3L(){Bl6=Bcb([1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0]);Bl7=S();}
function NV(){var a=this;C.call(a);a.hx=null;a.Cf=0;a.sP=null;a.o0=null;a.zK=0;a.GO=0.0;a.GN=0.0;a.vc=null;a.G7=0.0;a.dw=null;a.dF=null;a.cJ=null;a.s3=null;}
var Bl8=null;function Bd9(){Bd9=N(NV);AMa();}
function Be7(a,b){var c=new NV();ACb(c,a,b);return c;}
function ACb(a,b,c){var d,e,f;Bd9();J(a);a.sP=Bp();a.o0=Bp();a.vc=CO(1.0,1.0,1.0,1.0);a.hx=b;a.Cf=c;d=b.gH.h;if(!d)G(W(B(508)));a:{a.dw=Y($rt_arraycls($rt_floatcls()),d);a.dF=Bc(d);if(d>1){a.cJ=Y(GV,d);e=0;f=a.cJ.data.length;while(true){if(e>=f)break a;a.cJ.data[e]=G$();e=e+1|0;}}}a.s3=Bc(d);}
function A5E(a){return a.vc;}
function AHz(a,b){var c,d,e,f;c=a.hx.Od();d=0;e=a.dw.data.length;while(d<e){if(a.dF.data[d]>0){f=a.dw.data[d];b.Hh((c.l(d)).A5(),f,0,a.dF.data[d]);}d=d+1|0;}}
function A4O(a){var b,c;a.GO=0.0;a.GN=0.0;Sl(a.o0,1);a.o0.K();a.sP.K();b=0;c=a.dF.data.length;while(b<c){if(a.cJ!==null)a.cJ.data[b].K();a.dF.data[b]=0;b=b+1|0;}}
function VX(a,b){var c,d,e,f,g,h,i,j,k,l;a:{if(a.dw.data.length==1){c=0;d=0;e=b.cm.h;while(d<e){c=c+(b.cm.l(d)).bi.h|0;d=d+1|0;}NP(a,0,c);}else{f=a.s3;g=f.data;d=0;e=g.length;while(d<e){g[d]=0;d=d+1|0;}d=0;h=b.cm.h;while(d<h){i=(b.cm.l(d)).bi;j=0;k=i.h;while(j<k){l=(i.l(j)).jU;g[l]=g[l]+1|0;j=j+1|0;}d=d+1|0;}d=0;while(true){if(d>=e)break a;NP(a,d,g[d]);d=d+1|0;}}}}
function NP(a,b,c){var d,e,f;if(a.cJ!==null&&c>a.cJ.data[b].co.data.length)a.cJ.data[b].OX(c-a.cJ.data[b].bS|0);d=a.dF.data[b]+(c*20|0)|0;e=a.dw.data[b];if(e===null)a.dw.data[b]=B_(d);else if(e.data.length<d){f=B_(d);X(e,0,f,0,a.dF.data[b]);a.dw.data[b]=f;}}
function R$(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=a.hx.gH.h;if(a.dw.data.length<e){f=Y($rt_arraycls($rt_floatcls()),e);X(a.dw,0,f,0,a.dw.data.length);a.dw=f;g=Bc(e);X(a.dF,0,g,0,a.dF.data.length);a.dF=g;h=Y(GV,e);i=0;if(a.cJ!==null){i=a.cJ.data.length;X(a.cJ,0,h,0,a.cJ.data.length);}while(i<e){h.data[i]=G$();i=i+1|0;}a.cJ=h;a.s3=Bc(e);}a.sP.F(b);VX(a,b);i=0;j=b.cm.h;while(i<j){k=b.cm.l(i);l=k.bi;m=k.bn;n=k.j0.nv();o=c+k.dg;p=d+k.iI;q=0;r=l.h;while(q<r){s=l.l(q);o=o+m.n9(q);Tq(a,s,o,p,n);q=q+1|0;}i=i+
1|0;}Bv();a.G7=BjW;}
function Tq(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;f=a.hx.kf.eO;g=a.hx.kf.z3;h=c+b.dr*f;i=d+b.jd*g;j=b.ct*f;k=b.cL*g;l=b.vC;m=b.Bh;n=b.p7;o=b.ti;if(a.Cf){h=De(h);i=De(i);j=De(j);k=De(k);}p=h+j;q=i+k;r=b.jU;s=a.dF.data[r];t=a.dF.data;t[r]=t[r]+20|0;if(a.cJ!==null){u=a.cJ.data[r];v=a.zK;a.zK=v+1|0;u.iV(v);}w=a.dw.data[r];t=w.data;x=s+1|0;t[s]=h;v=x+1|0;t[x]=i;x=v+1|0;t[v]=e;v=x+1|0;t[x]=l;y=v+1|0;t[v]=n;x=y+1|0;t[y]=h;v=x+1|0;t[x]=q;x=v+1|0;t[v]=e;v=x+1|0;t[x]=l;x=v+1|0;t[v]=o;v=x+1|0;t[x]=p;x
=v+1|0;t[v]=q;v=x+1|0;t[x]=e;x=v+1|0;t[v]=m;v=x+1|0;t[x]=o;x=v+1|0;t[v]=p;y=x+1|0;t[x]=i;v=y+1|0;t[y]=e;x=v+1|0;t[v]=m;t[x]=n;}
function ATU(a,b,c,d){return a.Id(b,c,d,0,b.i(),0.0,8,0,null);}
function A$C(a,b,c,d,e,f,g,h,i,j){var k;k=Tl(F(EI));a.o0.F(k);k.pH(a.hx,b,e,f,a.vc,g,h,i,j);a.HG(k,c,d);return k;}
function AGq(a,b,c,d){R$(a,b,c,d+a.hx.kf.l2);}
function AMa(){Bl8=CO(1.0,1.0,1.0,1.0);}
function PJ(){var a=this;Q.call(a);a.B7=null;a.G6=null;}
function Beg(a,b){var c=new PJ();A6J(c,a,b);return c;}
function A6J(a,b,c){a.G6=b;a.B7=c;Be(a);}
function AGy(a,b){return a.B7.p(b);}
function PK(){var a=this;Q.call(a);a.w4=null;a.Qh=null;}
function Bez(a,b){var c=new PK();AMX(c,a,b);return c;}
function AMX(a,b,c){a.Qh=b;a.w4=c;Be(a);}
function AZZ(a,b){return a.w4.p(b)?0:1;}
function PL(){var a=this;Q.call(a);a.yV=0;a.EI=null;a.zF=null;a.F9=null;}
function BbO(a,b,c,d){var e=new PL();AGJ(e,a,b,c,d);return e;}
function AGJ(a,b,c,d,e){a.F9=b;a.yV=c;a.EI=d;a.zF=e;Be(a);}
function A_e(a,b){return !(a.yV^a.EI.p(b))&&!a.zF.p(b)?0:1;}
var YC=D();
function Wp(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.Bk.data;f=b.CD;b.CD=f+1|0;g=A4X(e[f]);h=(g%2|0)!=1?0:1;c=c+Cf(d,g/2|0)|0;d=d*46|0;if(!h)break;}return c;}
function Pa(b){var c,d;c=Wp(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function A4X(b){if(b<34)return b-32|0;if(b>=92)return (b-32|0)-2|0;return (b-32|0)-1|0;}
function P4(){var a=this;Q.call(a);a.EW=0;a.vH=null;a.vT=null;a.GV=null;}
function BfM(a,b,c,d){var e=new P4();AZT(e,a,b,c,d);return e;}
function AZT(a,b,c,d,e){a.GV=b;a.EW=c;a.vH=d;a.vT=e;Be(a);}
function AJh(a,b){return !(a.EW^a.vH.p(b))&&!a.vT.p(b)?1:0;}
function PN(){var a=this;Q.call(a);a.Eb=0;a.A2=null;a.xM=null;a.L1=null;}
function BfI(a,b,c,d){var e=new PN();AYP(e,a,b,c,d);return e;}
function AYP(a,b,c,d,e){a.L1=b;a.Eb=c;a.A2=d;a.xM=e;Be(a);}
function AWH(a,b){return a.Eb^a.A2.p(b)&&a.xM.p(b)?1:0;}
function OL(){BJ.call(this);this.ma=null;}
function BfJ(a){var b=new OL();A8e(b,a);return b;}
function A8e(a,b){var c,d;C1(a);c=I();d=0;while(d<b.i()){c.U(Do(Dz(b.f(d))));d=d+1|0;}a.ma=c.b();a.bO=c.i();}
function AMm(a,b,c){var d;d=0;while(true){if(d>=a.ma.i())return a.ma.i();if(a.ma.f(d)!=Do(Dz(c.f(b+d|0))))break;d=d+1|0;}return (-1);}
function AJ2(a){return (((I()).a(B(509))).a(a.ma)).b();}
function PO(){var a=this;Q.call(a);a.DO=0;a.AA=null;a.D$=null;a.MB=null;}
function BbI(a,b,c,d){var e=new PO();ADR(e,a,b,c,d);return e;}
function ADR(a,b,c,d,e){a.MB=b;a.DO=c;a.AA=d;a.D$=e;Be(a);}
function AOW(a,b){return a.DO^a.AA.p(b)&&a.D$.p(b)?0:1;}
function PP(){var a=this;Q.call(a);a.E8=null;a.ym=0;a.FH=null;}
function A_G(a,b,c){var d=new PP();AN0(d,a,b,c);return d;}
function AN0(a,b,c,d){a.FH=b;a.E8=c;a.ym=d;Be(a);}
function AKS(a,b){return a.E8.p(b)&&a.ym^a.FH.bc.eJ(b)?1:0;}
function Uc(){Q.call(this);this.J7=null;}
function BfE(a){var b=new Uc();AT_(b,a);return b;}
function AT_(a,b){a.J7=b;Be(a);}
function AKG(a,b){return RH(b);}
function Hz(){DN.call(this);this.fb=null;}
function AJu(){var a=new Hz();A1E(a);return a;}
function A1E(a){HV(a);a.fb=S();}
function AEw(a,b){return a.Oy(b.bk,b.fb);}
function AF$(a,b,c){if(b!==null)a.bk.eP(b);if(c!==null)(a.fb.M(c)).bU();return a;}
function APR(a,b,c,d,e,f,g){a.bk.hT(b,c,d,1.0);(a.fb.I(e,f,g)).bU();return a;}
function AEi(a,b){return b instanceof Hz&&a.Et(b)?1:0;}
function A4F(a,b){var c;a:{b:{if(b!==null){if(b===a)break b;if(a.bk.z(b.bk)&&a.fb.z(b.fb))break b;}c=0;break a;}c=1;}return c;}
function PI(){var a=this;Q.call(a);a.DX=null;a.CU=0;a.yk=null;}
function BfH(a,b,c){var d=new PI();A3c(d,a,b,c);return d;}
function A3c(a,b,c,d){a.yk=b;a.DX=c;a.CU=d;Be(a);}
function A7$(a,b){return a.DX.p(b)&&a.CU^a.yk.bc.eJ(b)?0:1;}
var ZZ=D(CN);
var LF=D();
var Bl9=null;function ACt(){ACt=N(LF);ADW();}
function Zo(b,c,d,e){var f;ACt();a:{b:{f=Bl9;RO();if(f===Bl$){if(BhI.bo()!=BhI.w6())break b;f=BhI;if(f.bl()!=BhI.Ey())break b;}BhL.oH(b,c,d,e);break a;}BhL.oH(L9(b),Ma(c),L9(d),Ma(e));}}
function L9(b){ACt();return Cf(b,BhI.w6())/BhI.bo()|0;}
function Ma(b){ACt();return Cf(b,BhI.Ey())/BhI.bl()|0;}
function ADW(){RO();Bl9=Bl$;}
var Zz=D(ES);
function Gf(a){var b=new Zz();AK4(b,a);return b;}
function I(){var a=new Zz();A9S(a);return a;}
function AK4(a,b){JT(a,b);}
function A9S(a){J6(a);}
function A3C(a,b){YW(a,b);return a;}
function ADB(a,b){Lj(a,b);return a;}
function ANq(a,b){PD(a,b);return a;}
function A0r(a,b){AB_(a,b);return a;}
function AJr(a,b){TI(a,b);return a;}
function ADp(a,b){Na(a,b);return a;}
function AGL(a,b,c,d){Oo(a,b,c,d);return a;}
function A7q(a,b){NB(a,b);return a;}
function AWm(a,b){Td(a,b);return a;}
function AZF(a,b,c){RI(a,b,c);return a;}
function A7N(a,b,c){ZY(a,b,c);return a;}
function A6g(a,b,c,d,e){Mo(a,b,c,d,e);return a;}
function A$g(a,b,c){QF(a,b,c);return a;}
function A4a(a,b,c){OF(a,b,c);return a;}
function ANW(a,b,c){Ou(a,b,c);return a;}
function ASd(a,b,c){AB$(a,b,c);return a;}
function AQW(a,b){ABT(a,b);return a;}
function A2d(a,b,c){NU(a,b,c);return a;}
function A9l(a,b,c){return W6(a,b,c);}
function A2j(a,b){ABF(a,b);}
function AHU(a,b,c,d,e){Yl(a,b,c,d,e);}
function A6n(a,b,c){return AA3(a,b,c);}
function A17(a,b,c,d,e){return a.K5(b,c,d,e);}
function AHn(a,b,c,d){return a.IQ(b,c,d);}
function AWt(a){return M2(a);}
function AFA(a){return Nt(a);}
function ALz(a,b){Mx(a,b);}
function ALJ(a,b,c){return a.Ge(b,c);}
function A3z(a,b,c){return a.OB(b,c);}
function A22(a,b,c){return a.KH(b,c);}
function A0E(a,b,c){return a.PS(b,c);}
function AF8(a,b,c){return a.JV(b,c);}
function ATO(a,b,c){return a.Gn(b,c);}
function QT(){var a=this;BC.call(a);a.od=null;a.pw=null;}
function Lp(a,b){var c=new QT();AS5(c,a,b);return c;}
function AS5(a,b,c){CP(a);a.od=b;a.pw=c;}
function AEG(a,b,c,d){var e;e=a.od.e(b,c,d);if(e<0)e=a.pw.e(b,c,d);if(e>=0)return e;return (-1);}
function A40(a,b){a.k=b;a.pw.Q(b);a.od.Q(b);}
function A5G(a){return (((((I()).a(B(510))).dD(a.od)).a(B(511))).dD(a.pw)).b();}
function AFI(a,b){return 1;}
function AFe(a,b){return 1;}
var ABJ=D(Bm);
function A_L(){var a=new ABJ();ATx(a);return a;}
function ATx(a){Cx(a);}
var O7=D();
function BeH(){var a=new O7();ALt(a);return a;}
function ALt(a){J(a);}
var Gt=D(0);
var O6=D();
function BaE(){var a=new O6();AWW(a);return a;}
function AWW(a){J(a);}
var Mc=D(0);
function EU(){var a=this;C.call(a);a.hH=null;a.g_=null;}
function Bl_(a,b){var c=new EU();L5(c,a,b);return c;}
function L5(a,b,c){J(a);a.hH=b;a.g_=c;}
function MQ(){var a=this;EU.call(a);a.pB=null;a.yw=0;}
function Bew(a,b){var c=new MQ();AOR(c,a,b);return c;}
function AOR(a,b,c){L5(a,b,c);a.yw=b.bp();}
function AE1(a){return a.hH.bp();}
function ARI(a,b,c){return a.yw==b.bp()&&a.hH.z(b)?1:0;}
var EZ=D(Cy);
function BdG(){var a=new EZ();A8f(a);return a;}
function A8f(a){Et(a,0);}
function AR3(a,b,c,d){if(d.Cm()!=1&&b!=d.J())return (-1);d.LE();d.uX(0,b);return b;}
function AW$(a){return B(512);}
function Z9(){var a=this;C.call(a);a.si=null;a.iL=null;a.ki=null;a.ew=null;a.g8=null;a.oQ=null;}
function Be8(a){var b=new Z9();A2v(b,a);return b;}
function A2v(a,b){J(a);a.si=DE();a.iL=DE();a.ki=DE();a.ew=DE();a.g8=DE();a.oQ=b;}
function AZ9(a,b){(Ea()).AX((((I()).a(a.oQ)).a(b)).b(),A_s(a,b));}
function AN4(a,b,c,d,e){(Ea()).L9((((I()).a(a.oQ)).a(b)).b(),c,d,Bay(a,e,c,b));}
function A7z(a,b,c){(Ea()).na((((I()).a(a.oQ)).a(b)).b(),c);}
function AYk(a,b,c,d){a:{Bdp();switch(Bjp.data[BD(b)]){case 1:a.ew.x(c,d);break a;case 2:break;case 3:a.g8.x(c,d);break a;case 4:a.ki.x(c,d);break a;case 5:a.si.x(c,null);break a;default:break a;}a.iL.x(c,d);}}
function AMT(a,b){var c,$$je;if(a.ew.cZ(b)){a:{try{c=Xu((a.ew.W(b)).xY(B(382)));}catch($$e){$$je=R($$e);if($$je instanceof GK){break a;}else{throw $$e;}}return c;}return null;}if(a.iL.cZ(b))return Xu(Ci(1));if(a.g8.cZ(b))return PV(a.g8.W(b));if(!a.ki.cZ(b))return null;return Xu(Ci(1));}
function AJj(a,b){var c,d;a:{if(!a.ew.cZ(b)&&!a.iL.cZ(b)&&!a.g8.cZ(b)&&!a.ki.cZ(b)){c=a.si;if(!c.cZ(b)){d=0;break a;}}d=1;}return d;}
function A6u(a,b){return a.ew.cZ(b);}
function AWQ(a,b){var c,$$je;if(a.ew.cZ(b)){a:{try{c=O(((a.ew.W(b)).xY(B(382))).data.length);}catch($$e){$$je=R($$e);if($$je instanceof GK){break a;}else{throw $$e;}}return c;}return O(((a.ew.W(b)).Qz()).data.length);}if(a.iL.cZ(b))return O(1);if(a.g8.cZ(b))return O(N6(a.g8.W(b)));if(!a.ki.cZ(b))return Ba;return O(1);}
var TL=D(BJ);
function FG(a){var b=new TL();A3v(b,a);return b;}
function A3v(a,b){VK(a,b);a.bO=0;}
function A7d(a,b,c){return 0;}
function AZz(a,b,c,d){var e,f,g,h,i;e=d.J();f=d.dI();while(true){g=B8(b,e);if(g>0)return (-1);if(g<0){h=c.f(b);if(BH(h)&&b>f){i=c.f(b-1|0);if(BY(i)){b=b+1|0;continue;}}}if(a.k.e(b,c,d)>=0)break;b=b+1|0;}return b;}
function AXC(a,b,c,d,e){var f,g,h,i;f=e.J();g=e.dI();while(true){if(c<b)return (-1);if(c<f){h=d.f(c);if(BH(h)&&c>g){i=d.f(c-1|0);if(BY(i)){c=c+(-1)|0;continue;}}}if(a.k.e(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AJO(a){return B(513);}
function AVj(a,b){return 0;}
function J2(){BI.call(this);this.HY=0;}
var Bma=Ba;function AGw(){AGw=N(J2);A8b();}
function A8b(){Bma=BO(B(514));}
function Vi(){var a=this;C.call(a);a.dv=null;a.gA=null;a.ss=0;a.bT=0;}
function T3(a,b){var c=new Vi();A8M(c,a,b);return c;}
function Bmb(a,b,c){var d=new Vi();UA(d,a,b,c);return d;}
function A8M(a,b,c){UA(a,b,c,0);}
function UA(a,b,c,d){J(a);if(b===null)G(IJ());a.dv=b;a.gA=c;a.ss=d;a.bT=0;}
function A$7(a){var b,c;if(a.gA===null)G(IJ());a:{b=a.dv.i();if(a.bT<b){if(a.ss)return 1;c=a.bT;while(true){if(c>=b)break a;if(a.gA.eF(a.dv.f(c),0)==(-1))return 1;c=c+1|0;}}}return 0;}
function AE2(a){var b,c,d,e,f;if(a.gA===null)G(IJ());b=a.bT;c=a.dv.i();if(b<c){if(a.ss){if(a.gA.eF(a.dv.f(a.bT),0)>=0){d=a.dv;e=a.bT;a.bT=e+1|0;return Zi(d.f(e));}a.bT=a.bT+1|0;while(a.bT<c){if(a.gA.eF(a.dv.f(a.bT),0)>=0)return a.dv.ce(b,a.bT);a.bT=a.bT+1|0;}return a.dv.ei(b);}while(true){f=B8(b,c);if(f>=0)break;if(a.gA.eF(a.dv.f(b),0)<0)break;b=b+1|0;}a.bT=b;if(f<0){a.bT=a.bT+1|0;while(a.bT<c){if(a.gA.eF(a.dv.f(a.bT),0)>=0)return a.dv.ce(b,a.bT);a.bT=a.bT+1|0;}return a.dv.ei(b);}}G(A_0());}
function J_(){var a=this;C.call(a);a.df=null;a.cO=0;a.m2=Ba;}
function A0x(a){var b=new J_();A3t(b,a);return b;}
function A3t(a,b){var c,d,e,f;c=b.data;J(a);a.m2=O(-1);d=c.length;if(!d)G(W(B(515)));e=Y(Fc,d);f=0;while(f<d){e.data[f]=c[f];f=f+1|0;}a.df=e;a.cO=V0(a);}
function DX(a,b){var c,d;c=CT(a);d=0;while(d<c){if((CB(a,d)).fl==b)return CB(a,d);d=d+1|0;}return null;}
function V0(a){var b,c,d;b=0;c=0;while(c<a.df.data.length){d=a.df.data[c];d.cT=b;b=b+QA(d)|0;c=c+1|0;}return b;}
function CT(a){return a.df.data.length;}
function CB(a,b){return a.df.data[b];}
function NT(a,b){var c,d;if(b===a)return 1;if(!(b instanceof J_))return 0;c=b;if(a.df.data.length!=c.df.data.length)return 0;d=0;while(d<a.df.data.length){if(!KH(a.df.data[d],c.df.data[d]))return 0;d=d+1|0;}return 1;}
function IL(a){var b,c;if(Z(a.m2,O(-1))){b=Ba;c=0;while(c<a.df.data.length){b=BN(b,O(a.df.data[c].fl));c=c+1|0;}a.m2=b;}return a.m2;}
function NO(a){return BN(IL(a),D6(O(a.df.data.length),32));}
function KB(){var a=this;G5.call(a);a.NK=0.0;a.NI=0.0;a.OG=0;a.MA=0;}
function ACF(){var a=this;C.call(a);a.kL=null;a.sK=null;a.fo=null;a.or=null;a.rE=0;a.DE=null;a.vY=null;}
function Bmc(a,b,c){var d=new ACF();TN(d,a,b,c);return d;}
function BeA(){var a=new ACF();A98(a);return a;}
function TN(a,b,c,d){J(a);a.sK=Bc9();a.fo=Bp();if(d===null)d=A_u();a.vY=d;a.rE=b!==null?0:1;if(b===null)b=Bc5(Bb1(1,1));a.or=b;if(c===null)c=Bey();a.DE=c;}
function A98(a){TN(a,null,null,null);}
function A3U(a,b){if(a.kL!==null)G(U(B(516)));a.kL=b;if(a.rE)a.or.g4();}
function A1h(a){var b,c,d;a.vY.Hc(a.kL,a.fo);b=null;c=0;while(c<a.fo.h){d=a.fo.l(c);if(b!==d.kM){if(b!==null)b.bd();b=d.kM;b.C0(a.kL,a.or);}b.NG(d);c=c+1|0;}if(b!==null)b.bd();a.sK.en();a.fo.K();}
function A6$(a){a.en();if(a.rE)a.or.bd();a.kL=null;}
function ARc(a,b,c){var d,e;d=a.fo.h;b.Im(a.fo,a.sK);while(d<a.fo.h){e=a.fo.l(d);e.cu=c;e.kM=a.DE.JK(e);d=d+1|0;}}
var Ra=D(ER);
function A_m(a,b,c,d,e,f){var g=new Ra();AU8(g,a,b,c,d,e,f);return g;}
function AU8(a,b,c,d,e,f,g){LO(a,b,c,d,e,f,g);}
function AUv(a,b){var c,d,e,f;c=a.cv.A.data;d=a.cj;e=b*4|0;f=c[d+e|0]&255|(a.cv.A.data[(a.cj+e|0)+1|0]&255)<<8|(a.cv.A.data[(a.cj+e|0)+2|0]&255)<<16|(a.cv.A.data[(a.cj+e|0)+3|0]&255)<<24;return $rt_intBitsToFloat(f);}
function A2p(a,b,c){var d,e,f,g;d=$rt_floatToIntBits(c);e=a.cv.A.data;f=a.cj;g=b*4|0;e[f+g|0]=d<<24>>24;a.cv.A.data[(a.cj+g|0)+1|0]=d>>8<<24>>24;a.cv.A.data[(a.cj+g|0)+2|0]=d>>16<<24>>24;a.cv.A.data[(a.cj+g|0)+3|0]=d>>24<<24>>24;}
function VH(){var a=this;C.call(a);a.CI=null;a.eW=null;a.uM=null;a.kU=null;a.uT=0.0;a.ry=Ba;a.sX=Ba;a.oR=0.0;a.kG=0.0;a.pj=0;a.ge=null;}
function A_3(a){var b=new VH();AUk(b,a);return b;}
function AUk(a,b){var c;J(a);a.uT=0.0;a.ry=D$();a.sX=O(-1);a.oR=0.0;a.kG=0.0;c=El();a.uM=b;a.eW=c.EH();a.CI=c.N1(b);a.ge=c.LY();a.kU=Bdg(a.CI);a.kU.oH(0,0,a.eW.width,a.eW.height);a.kU.v6(0.0,0.0,0.0,1.0);a.kU.Es(16384);if(!(b.qV<0&&b.qz<0))a.wy(b.qV,b.qz);}
function AT0(a){var b;b=D$();a.oR=Ru(D4(b,a.ry))/1000.0;a.ry=b;a.kG=a.kG+a.oR;a.pj=a.pj+1|0;if(a.kG>1.0){a.uT=a.pj;a.kG=0.0;a.pj=0;}}
function ASu(a){return a.kU;}
function ALV(a){return a.eW.width;}
function AQI(a){return a.eW.height;}
function A5l(a){return a.eW.width;}
function A4E(a){return a.eW.height;}
function A$I(a){return a.oR;}
function AUM(a){return a.uT|0;}
function AVX(a){var b;b=!a.uM.A9?1.0:a.ge.wz();return BbN(a,a.ge.F7()*b|0,a.ge.Qo()*b|0,60,8);}
function AG5(a,b){var c;c=a.Fq();if(b.oZ!=c.oZ&&b.nX!=c.nX)return 0;return a.ge.Qt(a,a.eW,b.oZ,b.nX);}
function ALi(a,b,c){var d,e,f;if(a.vM())a.ge.PH();if(b>0&&c>0)a.x2(b,c);else{d=(El()).hs();e=d.QN();f=d.K2();a.x2(e,f);}return 1;}
function AFD(a,b,c){var d,e,f;d=!a.uM.A9?1.0:a.ge.wz();e=a.eW;f=b*d|0;e.width=f;e=a.eW;f=c*d|0;e.height=f;}
function AD6(a,b){return 0;}
function A2M(a){return a.ge.Nq();}
var Ym=D(FL);
function Bmd(a){var b=new Ym();AGd(b,a);return b;}
function AGd(a,b){KF(a,b);}
var Ty=D(T);
function Be3(){var a=new Ty();AE4(a);return a;}
function AE4(a){Bo(a);}
function AHW(a){return (CR()).bF(0,127);}
function EI(){var a=this;C.call(a);a.cm=null;a.pG=0.0;a.nx=0.0;}
var Bme=null;var Bmf=null;var Bmg=null;function DG(){DG=N(EI);AYl();}
function Bmh(){var a=new EI();ACc(a);return a;}
function Bmi(a,b){var c=new EI();PF(c,a,b);return c;}
function Bmj(a,b,c,d,e,f){var g=new EI();S6(g,a,b,c,d,e,f);return g;}
function Bmk(a,b,c,d,e,f,g,h,i){var j=new EI();AAX(j,a,b,c,d,e,f,g,h,i);return j;}
function ACc(a){DG();J(a);a.cm=DJ(1);}
function PF(a,b,c){DG();J(a);a.cm=DJ(1);a.Mj(b,c);}
function S6(a,b,c,d,e,f,g){DG();J(a);a.cm=DJ(1);a.OO(b,c,d,e,f,g);}
function AAX(a,b,c,d,e,f,g,h,i,j){DG();J(a);a.cm=DJ(1);a.pH(b,c,d,e,f,g,h,i,j);}
function A69(a,b,c){a.pH(b,c,0,c.i(),b.yG(),0.0,8,0,null);}
function A3a(a,b,c,d,e,f,g){a.pH(b,c,0,c.i(),d,e,f,g,null);}
function AGS(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by;k=a.cm;DG();Bme.D7(k);k.K();l=b.kf;if(d==e){a.pG=0.0;a.nx=l.e4;return;}if(j!==null)i=1;else if(g<=l.vq*3.0)i=0;m=l.Dl;if(m){n=1;o=Bmg.h;while(n<o){Bmf.jo(Bmg.l(n));n=n+1|0;}Bmg.K();Bmg.F(f);}p=0.0;q=0.0;r=l.kh;s=null;t=d;u=f;a:{b:while(true){c:{v=(-1);w=0;if(d==e){if(t==e)break b;v=e;}else{x=d+1|0;switch(c.f(d)){case 10:v=x-1|0;w=1;d=x;break c;case 91:if(!m){d=x;break c;}y
=Pw(a,c,x,e,Bmf);if(y<0){if(y==(-2)){d=x+1|0;continue b;}d=x;break c;}v=x-1|0;d=x+(y+1|0)|0;f=Bmg.qp();break c;default:}d=x;}}if(v!=(-1)){d:{z=B8(v,t);if(z){ba=Bme.eR();ba.j0.eP(u);l.FD(ba,c,t,v,s);if(!ba.bi.h)Bme.jo(ba);else{if(s!==null)p=p-(s.om?s.gy*l.eO:(s.ct+s.dr|0)*l.eO-l.hS);s=ba.bi.qp();ba.dg=p;ba.iI=q;if(!(!w&&v!=e))EP(a,l,ba);k.F(ba);o=ba.bn.Z;bb=ba.bn.R;if(i&&o){bc=bb.data;p=p+bc[0]+bc[1];n=2;while(n<o){bd=ba.bi;be=n-1|0;bf=bd.l(be);bg=(bf.ct+bf.dr|0)*l.eO-l.hS;if(p+bg-9.999999747378752E-5<=g)p=p
+bb.data[n];else{if(j!==null){ABi(a,l,ba,g,j,n,Bme);break a;}q=q+r;s=null;bh=l.Ky(ba.bi,n);if(!(!bh&&ba.dg===0.0)&&bh<ba.bi.h)be=bh;if(be){ba=QM(a,l,ba,be,n);if(ba===null){p=0.0;break d;}k.F(ba);}else{bi=ba.bi.h;e:{while(true){if(be>=bi)break e;if(!l.jq((ba.bi.l(be)).eY&65535))break;be=be+1|0;}}if(be>0){ba.bi.lU(0,be-1|0);ba.bn.lU(1,be);}bb.data[0]=( -(ba.bi.Ff()).dr|0)*l.eO-l.iX;if(k.h>1){bj=k.l(k.h-2|0);bk=bj.bi.h-1|0;f:{while(true){if(bk<=0)break f;if(!l.jq((bj.bi.l(bk)).eY&65535))break;bk=bk+(-1)|0;}}bj.bi.h3(bk
+1|0);bj.bn.h3(bk+2|0);EP(a,l,bj);}}o=ba.bn.Z;bb=ba.bn.R;bc=bb.data;p=bc[0];if(o>1)p=p+bc[1];ba.dg=0.0;ba.iI=q;n=1;}n=n+1|0;}}else if(m){n=0;while(n<o){p=p+bb.data[n];n=n+1|0;}}}}}if(w){p=0.0;q=z?q+r:q+r*l.xh;s=null;}t=d;u=f;}}}a.nx=l.e4+CG(q);bl=0.0;bm=k.P;bn=k.h;n=0;while(n<bn){bo=bm.data[n];bb=bo.bn.R;bc=bb.data;bp=bc[0];bq=0.0;br=bo.bi.P;bs=0;bt=bo.bi.h;while(bs<bt){bf=br.data[bs];bg=(bf.ct+bf.dr|0)*l.eO-l.hS;bq=Ei(bq,bp+bg);bs=bs+1|0;bp=bp+bc[bs];}bo.j5=Ei(bp,bq);bl=Ei(bl,bo.dg+bo.j5);n=n+1|0;}g:{a.pG=
bl;if(!(h&8)){bu=!(h&1)?0:1;bv=0.0;bw=(-2.147483648E9);bx=0;n=0;while(n<bn){bc=bm.data;bo=bc[n];if(bo.iI===bw)bv=Ei(bv,bo.dg+bo.j5);else{bw=bo.iI;by=g-bv;if(bu)by=by/2.0;while(bx<n){x=bx+1|0;bd=bc[bx];bd.dg=bd.dg+by;bx=x;}bv=bo.dg+bo.j5;}n=n+1|0;}by=g-bv;if(bu)by=by/2.0;while(true){if(bx>=bn)break g;bc=bm.data;x=bx+1|0;bd=bc[bx];bd.dg=bd.dg+by;bx=x;}}}}
function ABi(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=g.eR();b.FD(h,e,0,e.i(),null);i=0.0;if(h.bn.Z>0){EP(a,b,h);j=h.bn.R;k=1;l=h.bn.Z;while(k<l){i=i+j.data[k];k=k+1|0;}}m=d-i;n=0;o=c.dg;j=c.bn.R;a:{while(true){if(n>=c.bn.Z)break a;p=j.data[n];o=o+p;if(o>m)break;n=n+1|0;}}if(n<=1){c.bi.K();c.bn.K();c.bn.Gz(h.bn);}else{c.bi.h3(n-1|0);c.bn.h3(n);EP(a,b,c);if(h.bn.Z>0)c.bn.xT(h.bn,1,h.bn.Z-1|0);}c.bi.qx(h.bi);g.jo(h);}
function QM(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=c.bi;g=c.bi.h;h=c.bn;i=d;a:{while(true){if(i<=0)break a;if(!b.jq((f.l(i-1|0)).eY&65535))break;i=i+(-1)|0;}}b:{while(true){j=B8(d,g);if(j>=0)break b;if(!b.jq((f.l(d)).eY&65535))break;d=d+1|0;}}k=null;if(j>=0){f.h3(i);h.h3(i+1|0);}else{DG();k=Bme.eR();k.j0.eP(c.j0);l=k.bi;l.Jk(f,0,i);f.lU(0,d-1|0);c.bi=l;k.bi=f;m=k.bn;m.xT(h,0,i+1|0);h.lU(1,d);h.R.data[0]=( -(f.Ff()).dr|0)*b.eO-b.iX;c.bn=m;k.bn=h;}if(i)EP(a,b,c);else{DG();Bme.jo(c);a.cm.vo();}return k;}
function EP(a,b,c){var d,e;d=c.bi.qp();if(d.om)return;e=(d.ct+d.dr|0)*b.eO-b.hS;c.bn.R.data[c.bn.Z-1|0]=e;}
function Pw(a,b,c,d,e){var f,g,h,i,j,k,l,m;if(c==d)return (-1);switch(b.f(c)){case 35:f=0;g=c+1|0;a:{while(true){if(g>=d)break a;h=b.f(g);if(h==93)break;if(h>=48&&h<=57)f=(f*16|0)+(h-48|0)|0;else if(h>=97&&h<=102)f=(f*16|0)+(h-87|0)|0;else{if(h<65)break a;if(h>70)break a;f=(f*16|0)+(h-55|0)|0;}g=g+1|0;}if(g>=(c+2|0)&&g<=(c+9|0)){i=g-c|0;if(i<=7){j=0;k=9-i|0;while(j<k){f=f<<4;j=j+1|0;}f=f|255;}l=e.eR();DG();Bmg.F(l);Id(l,f);return i;}}return (-1);case 91:break;case 93:DG();if(Bmg.h>1)e.jo(Bmg.vo());return 0;default:g
=c+1|0;while(g<d){h=b.f(g);if(h==93){m=Qb((b.d_(c,g)).b());if(m===null)return (-1);l=e.eR();DG();Bmg.F(l);l.eP(m);return g-c|0;}g=g+1|0;}return (-1);}return (-2);}
function A75(a){(Go(F(Hh))).D7(a.cm);a.cm.K();a.pG=0.0;a.nx=0.0;}
function ANY(a){var b,c,d;if(!a.cm.h)return B(101);b=Gf(128);b.cB(a.pG);b.U(120);b.cB(a.nx);b.U(10);c=0;d=a.cm.h;while(c<d){b.a((a.cm.l(c)).b());b.U(10);c=c+1|0;}b.uv(b.i()-1|0);return b.b();}
function AYl(){Bme=Go(F(Hh));Bmf=Go(F(Bi));Bmg=DJ(4);}
var ABR=D(Ej);
function AJV(a){var b=new ABR();AEN(b,a);return b;}
function AEN(a,b){M5(a,NC(b));}
function Pq(){var a=this;EO.call(a);a.uL=null;a.u7=null;a.Fr=null;a.c6=null;a.BU=null;a.em=null;a.pS=0;a.u3=0;}
function Bml(a,b){var c=new Pq();Qx(c,a,b);return c;}
function Bc7(a){var b=new Pq();ADm(b,a);return b;}
function Bmm(a,b){var c=new Pq();AAz(c,a,b);return c;}
function Qx(a,b,c){var d,e;d=c.lI();Dg();e=Bgg;e=Oa(d,e);d=Bgg;e=Le(e,d);AAz(a,b,e);}
function ADm(a,b){Hw();Qx(a,b,BjJ);}
function AAz(a,b,c){Lh(a);a.Fr=Ci(8192);a.c6=Ht(a.Fr);a.BU=BW(1024);a.em=La(a.BU);a.uL=b;a.u7=c;a.em.oM(BE(a.em));a.c6.f3(BE(a.c6));}
function A72(a){a.uL.fO();}
function AKa(a,b,c,d){var e,f;if(a.u3&&!Ca(a.em))return (-1);e=0;a:{while(d>0){f=Bq(d,Bb(a.em));a.em.rh(b,c+e|0,f);d=d-f|0;e=e+f|0;if(!Ca(a.em)&&!ACd(a))break a;}}return e;}
function ACd(a){if(a.u3)return 0;a.em.Jy();a:{while(true){if(!Ca(a.c6)&&!AAE(a))break a;if(!(IX(a.u7,a.c6,a.em,a.pS)).h2())continue;else break;}}if(!Ca(a.c6)&&a.pS&&(KV(a.u7,a.em)).jH())a.u3=1;K$(a.em);return 1;}
function AAE(a){var b;if(a.pS)return 0;a.c6.Qm();a:{while(true){if(!Ca(a.c6))break a;b=a.uL.rs(HH(a.c6),B7(a.c6),Bb(a.c6));if(b==(-1)){a.pS=1;break a;}a.c6.f3(B7(a.c6)+b|0);if(!b)break;}}Jv(a.c6);return 1;}
var Fa=D(Bx);
var Bl$=null;var Bmn=null;var Bmo=null;function RO(){RO=N(Fa);AFd();}
function A1A(a,b){var c=new Fa();Q2(c,a,b);return c;}
function Q2(a,b,c){RO();Cw(a,b,c);}
function AFd(){Bl$=A1A(B(517),0);Bmn=A1A(B(518),1);Bmo=H(Fa,[Bl$,Bmn]);}
var YT=D();
function ASM(b,c,d){if(b===null)return null;return BdO(b,APk(b),c,d);}
function VU(){var a=this;C.call(a);a.pV=0;a.EV=0;a.Cq=0;a.Dj=0;a.lH=null;}
function BcS(a){var b=new VU();AOF(b,a);return b;}
function AOF(a,b){a.lH=b;J(a);a.EV=a.lH.gQ;a.Cq=a.lH.de();a.Dj=(-1);}
function A3Z(a){return a.pV>=a.Cq?0:1;}
function A8n(a){var b,c;P7(a);a.Dj=a.pV;b=a.lH;c=a.pV;a.pV=c+1|0;return b.l(c);}
function P7(a){if(a.EV>=a.lH.gQ)return;G(A_L());}
function L0(){var a=this;C.call(a);a.gm=null;a.oY=0;a.uU=0;a.ng=null;a.pg=null;a.oP=null;a.ho=null;a.fH=null;a.d9=null;a.fS=null;a.dl=null;}
function AGa(){var a=new L0();A$q(a);return a;}
function A$q(a){J(a);a.oY=1;a.ng=S();a.pg=AAF(0.0,0.0,0.0,1.0);a.oP=Ck(1.0,1.0,1.0);a.ho=BF();a.fH=BF();a.d9=DJ(2);a.dl=DJ(2);}
function A8c(a){if(!a.uU)a.ho.Ga(a.ng,a.pg,a.oP);return a.ho;}
function API(a){if(a.oY&&a.fS!==null)(a.fH.ch(a.fS.fH)).hA(a.ho);else a.fH.ch(a.ho);return a.fH;}
function AFz(a,b){var c,d;a:{a.Pw();a.Ol();if(b){c=a.dl.bZ();while(true){if(!c.bC())break a;d=c.bz();d.C$(1);}}}}
function A6w(a,b){var c,d,e,f,g;c=a.d9.bZ();while(c.bC()){d=c.bz();if(d.cH===null)continue;if(d.dz===null)continue;if(d.cH.cb!=d.dz.data.length)continue;e=d.cH.cb;f=0;while(f<e){(d.dz.data[f].ch(d.cH.ep.data[f].fH)).hA(d.cH.gK.data[f]);f=f+1|0;}}a:{if(b){c=a.dl.bZ();while(true){if(!c.bC())break a;g=c.bz();g.yU(1);}}}}
function AUi(a){if(a.fS!==null){a.fS.Fu(a);a.fS=null;}}
function A54(a){return a.dl.h;}
function ALP(a,b){return a.dl.l(b);}
function AEj(a,b){return a.MX((-1),b);}
function AOH(a,b,c){var d;d=a;while(true){if(d===null){d=c.xf();if(d!==null&&!d.Fu(c))G(U(B(519)));if(b>=0&&b<a.dl.h)a.dl.KZ(b,c);else{b=a.dl.h;a.dl.F(c);}c.fS=a;return b;}if(d===c)break;d=d.xf();}G(U(B(520)));}
function A1F(a,b){if(!a.dl.Lg(b,1))return 0;b.fS=null;return 1;}
function A24(a){return a.dl;}
function A8$(a){return a.fS;}
function AZn(a){return (AGa()).MC(a);}
function A6G(a,b){var c,d,e;a.FX();a.gm=b.gm;a.uU=b.uU;a.oY=b.oY;a.ng.M(b.ng);a.pg.O3(b.pg);a.oP.M(b.oP);a.ho.ch(b.ho);a.fH.ch(b.fH);a.d9.K();c=b.d9.bZ();while(c.bC()){d=c.bz();a.d9.F(d.Mp());}a.dl.K();c=(b.rA()).fr();while(c.bC()){e=c.bz();a.H2(e.u5());}return a;}
function ZG(b,c,d,e){var f,g,h,i;a:{f=b.h;if(!e){g=0;while(true){if(g>=f)break a;h=b.l(g);if(h.gm.z(c))break;g=g+1|0;}return h;}g=0;while(true){if(g>=f)break a;i=b.l(g);if(i.gm.Gf(c))break;g=g+1|0;}return i;}b:{if(d){g=0;while(true){if(g>=f)break b;i=ZG((b.l(g)).dl,c,1,e);if(i!==null)break;g=g+1|0;}return i;}}return null;}
var LN=D(0);
function Hx(){var a=this;C.call(a);a.AW=0;a.f9=null;a.DY=null;a.qy=null;a.k3=null;a.l6=null;a.AV=null;a.kt=null;a.jw=null;a.lM=null;a.mg=null;a.s2=null;a.EE=null;a.xG=null;a.x5=null;a.n$=null;a.Fj=null;a.qr=Ba;a.kS=Ba;a.tO=0;a.j_=0;a.JP=null;a.lB=null;a.q8=0;a.px=null;}
var Bmp=null;var Bmq=null;function Baz(){Baz=N(Hx);AYz();}
function Be0(){var a=new Hx();Vz(a);return a;}
function Vz(a){Baz();J(a);a.k3=Bp();a.l6=Bp();a.tO=1;a.j_=0;a.JP=BF();a.q8=500;a.px=S();}
function AZh(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;XN();a.AW=Bullet.MyClassHelper.prototype.getBTVersion();a.s2=Bba();a.EE=Bas(a.s2);a.xG=Bbf();a.x5=Bbv();a.mg=A_F(a.EE,a.xG,a.x5,a.s2);b=Ck(0.0,(-10.0),0.0);a.mg.Hw(b);a.f9=Bcu();a.DY=BbQ(a.f9);a.qy=A_C();a.kt=BeA();a.lM=BcK();c=a.lM;d=new CX;Cd();ND(d,Bl1,0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);Ep(c,d);e=(AJu()).xH(1.0,1.0,1.0,(-1.0),(-1.0),(-0.4000000059604645));a.lM.Gr(e);a.jw=BcF();a.f9.cp.q=43.0;a.f9.cp.o=2.0;a.f9.MP(0.0,0.0,0.0);f
=BbU();g=1.0;h=1.0;i=1.0;j=1.0;k=BdR(BhK.Fe(B(521)));P2();k.OD(Bk3,Bk3);l=new F4;m=H(BI,[ZV(k),N7(4.0)]);NE(l,m);a.Fj=f.Cg(1.0,1.0,1.0,l,O(25));n=60.0;o=0.30000001192092896;p=60.0;q=f.Cg(n,o,p,Bdk(H(BI,[KY(g,h,i,j),Zq(g,h,i,j),N7(16.0)])),O(9));a.AV=a.vZ(B(522),0,0.0,0.0,(-2.0),0.0,0.0,0.0,0.0,q,n,o,p,0.0,0.0,1.0);a.Fi();a.n$=Ba8();a.n$.Gh(1.0,0.0,0.0,1.0);a.kS=D$();a.lB=Bag(a.f9);a.lB.oV=0;a.lB.qZ=0;a.lB.uP=0;Bhs.JL(BeU(H(Fp,[a,a.lB])));}
function A7T(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r,s,t,u,v,w;r=Bfb(k);s=KY(o,p,q,1.0);Ep(r.jB.l(0),s);r.eA.Lu(e,f,g);t=r.eA;H1();t.vp(Bmr,h);r.eA.vp(Bms,i);r.eA.vp(Bmt,j);u=A_U(r.eA);v=BeW(a.px.I(l/2.0,m/2.0,n/2.0));v.Np(d,a.px.LK());w=Bfu(d,u,v,a.px);if(c)a.l6.F(w);w.JR(0.699999988079071);a.mg.Ij(w);return r;}
function AZP(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=0;while(b<a.l6.h){c=a.l6.l(b);a.mg.GY(c);c.iw();b=b+1|0;}a.l6.K();a.k3.K();d=0;b=0;while(b<a.q8){e=HE((-5.0),5.0);f=HE(19.0,24.0);g=HE((-5.0),5.0);h=IK(0,360);i=IK(0,360);j=IK(0,360);k=1.0;l=1.0;m=1.0;n=a.vZ((((I()).a(B(523))).j(d)).b(),1,0.4000000059604645,e,f,g,h,i,j,a.Fj,1.0,1.0,1.0,k,l,m);d=d+1|0;a.k3.F(n);b=b+1|0;}}
function AC0(a){var b,c,d,e,f,g,h;a.f9.f5();BhL.v6(0.8999999761581421,0.8999999761581421,0.8999999761581421,1.0);BhL.Es(16640);if(!a.j_){a.qr=D$();if(Hq(D4(a.qr,a.kS),O(8000))){a.tO=a.tO?0:1;a.Fi();a.kS=D$();}a.mg.Iy(BhI.E4());}a.kt.Hz(a.f9);b=0;while(b<a.k3.h){c=a.k3.l(b);a.kt.CT(c,a.lM);b=b+1|0;}a.kt.CT(a.AV,a.lM);a.kt.bd();a.jw.g4();d=a.n$;e=a.jw;f=((((((((I()).a(B(524))).j(BhI.M9())).a(B(525))).j(a.q8)).a(B(526))).j(a.AW)).a(B(527))).b();g=BhI;h=g.bl()-14|0;d.yb(e,f,30.0,h);a.n$.yb(a.jw,B(528),20.0,30.0);a.jw.bd();}
function A73(a,b,c){var d;a.DY.wC(b,c,0);a.qy.wC(b,c,1);d=a.qy.NC();d.f5();a.jw.Pr(d.eI);}
function AN2(a,b){if(b==62){a.j_=a.j_?0:1;if(!a.j_)a.kS=CA(D$(),D4(a.kS,a.qr));}else if(b==66){if(!BhI.vM())BhI.L6(BhI.Fq());else BhI.wy(0,0);}return 0;}
function A3$(a,b){return 0;}
function AWI(a,b){return 0;}
function A7y(a,b,c,d,e){return 0;}
function A1r(a,b,c,d,e){return 0;}
function APc(a,b,c,d){return 0;}
function AXl(a,b,c){return 0;}
function AME(a,b,c){return 0;}
function AYz(){Bmp=S();Bmq=S();}
function VD(){var a=this;E8.call(a);a.ui=0;a.pb=0;}
function BeC(a,b){var c=new VD();AKu(c,a,b);return c;}
function AKu(a,b,c){Mg(a);a.ui=b;a.pb=c;}
function A0g(a){return a.ui;}
function A8D(a){return a.pb;}
function A4i(a){return ((((((I()).a(B(529))).j(a.ui)).a(B(23))).a(a.pb==2147483647?B(101):(ABG(a.pb)).b())).a(B(530))).b();}
var WY=D(V);
function Bfi(){var a=new WY();AJe(a);return a;}
function AJe(a){BL(a);}
function AS9(a,b,c,d,e){var f,g,h,i;f=b.cX.d6;B1();g=Bmu;h=(BB(e,g)).d3;i=f.gD(h);DS(b,c,i);}
var WV=D(V);
function Bex(){var a=new WV();A8s(a);return a;}
function A8s(a){BL(a);}
function AXU(a,b,c,d,e){var f;B1();f=BB(e,Bmu);DO(b,c,f.eN,f.eM,f.e$,f.e_);}
function Vy(){Q.call(this);this.NY=null;}
function BcQ(a){var b=new Vy();AQA(b,a);return b;}
function AQA(a,b){a.NY=b;Be(a);}
function AWa(a,b){return Vl(b);}
var W3=D(V);
function Ba0(){var a=new W3();AKT(a);return a;}
function AKT(a){BL(a);}
function A93(a,b,c,d,e){var f;B1();f=BB(e,Bmv);DO(b,c,f.eN,f.eM,f.e$,f.e_);}
var WZ=D(V);
function Bbj(){var a=new WZ();AUV(a);return a;}
function AUV(a){BL(a);}
function ANS(a,b,c,d,e){var f,g,h,i;f=b.cX.d6;B1();g=Bmw;h=(BB(e,g)).d3;i=f.gD(h);DS(b,c,i);}
var WX=D(V);
function Baw(){var a=new WX();A7u(a);return a;}
function A7u(a){BL(a);}
function A2G(a,b,c,d,e){Cd();Fv(b,c,(BB(e,Bl0)).dX);}
var W2=D(V);
function Ba3(){var a=new W2();AWX(a);return a;}
function AWX(a){BL(a);}
function APw(a,b,c,d,e){var f,g,h,i;f=b.cX.d6;B1();g=Bmv;h=(BB(e,g)).d3;i=f.gD(h);DS(b,c,i);}
var Sg=D();
function Bb4(){var a=new Sg();AUG(a);return a;}
function AUG(a){J(a);}
function A8L(a,b){if(b<=0)G(CK());return a.xD()*b|0;}
function AE0(a){return a.xD();}
function AZr(a){return Math.random();}
var No=D(0);
var Lc=D(GT);
var Bmx=null;function AGv(){AGv=N(Lc);A96();}
function Bbv(){var a=new Lc();R7(a);return a;}
function A_l(a){var b=new Lc();ACg(b,a);return b;}
function R7(a){AGv();Iw(a);a.dZ(AAt(),1);}
function ACg(a,b){AGv();Iw(a);}
function A96(){Bmx=A_l(0);}
function AAt(){var jsObj=new Bullet.btSequentialImpulseConstraintSolver();return Bullet.getPointer(jsObj);}
var XC=D();
var So=D(C$);
function Bby(a){var b=new So();A2k(b,a);return b;}
function A2k(a,b){GD(a,b,0.3333333432674408,0.5);}
function A9B(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(h.dO(2))break a;Bj();i=Bgj;break a;}n=k+1|0;o=j[k];if(!ED(a,o)){c=n+(-2)|0;i=BU(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|o&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(h.dO(3))break a;Bj();i=Bgj;break a;}n=k+1|0;o=j[k];k=n+1|0;p=j[n];if(!ED(a,o))break b;if(!ED(a,p))break b;q
=((l&15)<<12|(o&63)<<6|p&63)&65535;if(Jz(q)){c=k+(-3)|0;i=BU(3);break a;}j=e.data;m=f+1|0;j[f]=q;}else{if((l&248)!=240){c=k+(-1)|0;i=BU(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(h.dO(4))break a;Bj();i=Bgj;break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.ef(2))break a;Bj();i=Bgi;break a;}n=k+1|0;o=j[k];m=n+1|0;p=j[n];k=m+1|0;r=j[m];if(!ED(a,o))break c;if(!ED(a,p))break c;if(!ED(a,r))break c;j=e.data;s=(l&7)<<18|(o&63)<<12|(p&63)<<6|r&63;n=f+1|0;j[f]=FB(s);m=n+1|0;j[n]=Fi(s);}c=k;f=m;}break a;}c=k+(-3)|0;i=BU(1);break a;}c
=k+(-3)|0;i=BU(1);}h.ek(c);h.dR(f);return i;}
function ED(a,b){return (b&192)!=128?0:1;}
function AA5(){C.call(this);this.e2=null;}
function BfF(a){var b=new AA5();AQO(b,a);return b;}
function AQO(a,b){J(a);a.e2=b;}
function N6(a){return a.e2.length;}
function Rf(a,b){return a.e2[b];}
function PV(a){return BfN(a);}
function Sy(a){var b,c,d,e,f,g;b=a.e2.length;c=B(531);d=Gf(((b*4|0)/3|0)+2|0);e=0;while(e<b){f=b-e|0;if(f>=3){g=(((a.e2[e]&255)<<16)+((a.e2[e+1|0]&255)<<8)|0)+(a.e2[e+2|0]&255)|0;d.U(c.f(g>>18&63));d.U(c.f(g>>12&63));d.U(c.f(g>>6&63));d.U(c.f(g&63));}else if(f<2){g=(a.e2[e]&255)<<16;d.U(c.f(g>>18&63));d.U(c.f(g>>12&63));d.a(B(532));}else{g=((a.e2[e]&255)<<16)+((a.e2[e+1|0]&255)<<8)|0;d.U(c.f(g>>18&63));d.U(c.f(g>>12&63));d.U(c.f(g>>6&63));d.a(B(533));}e=e+3|0;}return d.b();}
var ACU=D(CF);
function BbD(a,b,c){var d=new ACU();APn(d,a,b,c);return d;}
function APn(a,b,c,d){E4(a,b,c,d);}
function AEd(a,b,c,d){var e;a:{while(true){if((b+a.bv.cg()|0)>d.J())break a;e=a.bv.bH(b,c);if(e<1)break;b=b+e|0;}}return a.k.e(b,c,d);}
function AAJ(){var a=this;C.call(a);a.rL=null;a.Ex=null;a.z1=0;a.qw=0;}
function Bbp(a,b){var c=new AAJ();A39(c,a,b);return c;}
function A39(a,b,c){J(a);a.rL=b;a.Ex=c;}
function A34(a){return Ca(a.rL);}
function A1g(a,b){return Bb(a.rL)<b?0:1;}
function AWF(a,b){return Bb(a.Ex)<b?0:1;}
function A8A(a,b){a.z1=b;}
function A6k(a,b){a.qw=b;}
function PC(){Q.call(this);this.KP=null;}
function Baf(a){var b=new PC();AMA(b,a);return b;}
function AMA(a,b){a.KP=b;Be(a);}
function AOj(a,b){return Fx(b);}
var JS=D(0);
var RF=D();
function Be9(){var a=new RF();AWw(a);return a;}
function AWw(a){J(a);}
var W7=D(V);
function BfC(){var a=new W7();ALe(a);return a;}
function ALe(a){BL(a);}
function AQF(a,b,c,d,e){var f;B1();f=BB(e,Bmy);DO(b,c,f.eN,f.eM,f.e$,f.e_);}
var Li=D(Dl);
function Bfw(){var a=new Li();A2u(a);return a;}
function A2u(a){Jt(a);}
var W4=D(V);
function A_W(){var a=new W4();A60(a);return a;}
function A60(a){BL(a);}
function A$G(a,b,c,d,e){var f,g,h;ABy();if(Ct(e,Bi9)){f=b.cX.d6;g=Bi9;h=(BB(e,g)).Iw;DS(b,c,f.gD(h));}}
var W1=D(V);
function BdS(){var a=new W1();ATp(a);return a;}
function ATp(a){BL(a);}
function AVY(a,b,c,d,e){var f;B1();f=BB(e,Bmw);DO(b,c,f.eN,f.eM,f.e$,f.e_);}
var W5=D(V);
function BeT(){var a=new W5();AWG(a);return a;}
function AWG(a){BL(a);}
function A0Y(a,b,c,d,e){var f,g,h,i;f=b.cX.d6;B1();g=Bmy;h=(BB(e,g)).d3;i=f.gD(h);DS(b,c,i);}
function Pp(){Q.call(this);this.J6=null;}
function A_X(a){var b=new Pp();A$l(b,a);return b;}
function A$l(a,b){a.J6=b;Be(a);}
function ASl(a,b){return Ua(b);}
var JU=D(0);
function Sm(){var a=this;C.call(a);a.kC=null;a.te=null;a.wL=null;}
function AY1(){var a=new Sm();AJC(a);return a;}
function AJC(a){J(a);a.kC=window;a.wL=BaL();}
function A5W(a){var b;b=a.kC.document;return b;}
function A7K(a,b){a.te=b;requestAnimationFrame(BV(a,"onAnimationFrame"));}
function AZJ(a,b){var c;c=a.te;a.te=null;c.fc();}
function A5I(a){return a.wL;}
function ATD(a){var b;b=a.kC.location;return b;}
function AYQ(a){return a.kC.document.documentElement.clientWidth;}
function AW2(a){return a.kC.document.documentElement.clientHeight;}
function A5i(a,b){a.J$(b);}
var Yk=D(CF);
function Bfa(a,b,c){var d=new Yk();AT1(d,a,b,c);return d;}
function AT1(a,b,c,d){E4(a,b,c,d);}
function AOr(a,b,c,d){var e;while(true){e=a.k.e(b,c,d);if(e>=0)break;if((b+a.bv.cg()|0)<=d.J()){e=a.bv.bH(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var X4=D();
function EW(b,c){return Lt(b,c);}
function Zu(){var a=this;C.call(a);a.DK=null;a.wg=0.0;a.mT=null;}
function Bfs(){var a=new Zu();ARj(a);return a;}
function ARj(a){J(a);a.mT=Bp();}
var Sz=D(C$);
function A_P(a){var b=new Sz();AOQ(b,a);return b;}
function AOQ(a,b){GD(a,b,1.0,1.0);}
function AIz(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;while(c<d&&f<g){j=e.data;k=b.data;l=c+1|0;m=k[c]&255;n=f+1|0;j[f]=m&65535;c=l;f=n;}h.ek(c);h.dR(f);return i;}
function HS(){var a=this;C.call(a);a.fa=null;a.cc=null;a.tu=0;a.jO=0;a.hP=null;a.mu=0;a.yI=null;}
var Bmz=null;function Kk(){Kk=N(HS);ATv();}
function Bd1(a,b,c,d){var e=new HS();X8(e,a,b,c,d);return e;}
function BmA(a,b,c,d,e){var f=new HS();M3(f,a,b,c,d,e);return f;}
function BmB(a,b,c,d,e){var f=new HS();Ok(f,a,b,c,d,e);return f;}
function X8(a,b,c,d,e){Kk();J(a);a.tu=1;a.mu=0;a.yI=S();a.fa=Zm(a,b,c,e);a.cc=A0p(b,d);a.jO=0;KU(Bgm,a);}
function Zm(a,b,c,d){if(BhN===null)return A2U(b,c,d);return A2c(b,c,d);}
function M3(a,b,c,d,e,f){Kk();Ok(a,b,c,d,e,A0x(f));}
function Ok(a,b,c,d,e,f){Kk();a:{b:{J(a);a.tu=1;a.mu=0;a.yI=S();Beq();switch(Blr.data[BD(b)]){case 1:break;case 2:a.fa=Bfr(c,d,f);a.cc=A$x(c,e);a.jO=0;break a;case 3:a.fa=A2c(c,d,f);a.cc=A$x(c,e);a.jO=0;break a;case 4:break b;default:break b;}a.fa=A2U(c,d,f);a.cc=A0p(c,e);a.jO=0;break a;}a.fa=BbZ(d,f);a.cc=Bb$(e);a.jO=1;}KU(Bgm,a);}
function APp(a,b,c,d){a.fa.uo(b,c,d);return a;}
function AGh(a,b){var c;c=b.data;a.cc.uz(b,0,c.length);return a;}
function AKf(a,b,c,d){a.cc.uz(b,c,d);return a;}
function AR_(a){return a.fa.uK();}
function A7M(a){return a.cc.nb();}
function AG8(a,b){a.id(b,null);}
function AQq(a,b,c){a.fa.id(b,c);if(a.hP!==null&&a.hP.z4()>0)a.hP.id(b,c);if(a.cc.lZ()>0)a.cc.eu();}
function A7i(a,b){a.gN(b,null);}
function AEv(a,b,c){a.fa.gN(b,c);if(a.hP!==null&&a.hP.z4()>0)a.hP.gN(b,c);if(a.cc.lZ()>0)a.cc.D5();}
function ATZ(a,b,c,d,e){a.C6(b,c,d,e,a.tu);}
function A3A(a,b,c,d,e,f){var g,h,i,j,k,l,m;if(!e)return;if(f)a.Kl(b);if(a.jO){if(a.cc.lZ()<=0)BhM.w8(c,d,e);else{g=a.cc.uj();h=B7(g);i=BE(g);g.cY(d);g.cl(d+e|0);BhM.Ni(c,e,5123,g);g.cY(h);g.cl(i);}}else{j=0;if(a.mu)j=a.hP.z4();if(a.cc.lZ()<=0){if(a.mu&&j>0)BhN.Xm(c,d,e,j);else BhM.w8(c,d,e);}else{if((e+d|0)>a.cc.nb()){k=new KJ;l=(((((I()).a(B(534))).j(e)).a(B(535))).j(d)).a(B(536));m=a.cc;Qz(k,((l.j(m.nb())).a(B(24))).b());G(k);}if(a.mu&&j>0)BhN.Tf(c,e,5123,d*2|0,j);else BhM.OT(c,e,5123,d*2|0);}}if(f)a.JI(b);}
function AX2(a){return a.fa.jF();}
function ALd(a){return a.cc.uj();}
function KU(b,c){var d;Kk();d=Bmz.W(b);if(d===null)d=Bp();d.F(c);Bmz.x(b,d);}
function ATv(){Bmz=C5();}
function Ns(){var a=this;EU.call(a);a.po=0;a.e8=null;}
function BbP(a,b){var c=new Ns();AOT(c,a,b);return c;}
function AOT(a,b,c){L5(a,b,null);a.po=c;}
var FU=D(BR);
var BmC=null;function ASX(){ASX=N(FU);A8l();}
function Bco(a){var b=new FU();XW(b,a);return b;}
function BmD(){var a=new FU();Jp(a);return a;}
function XW(a,b){ASX();B$(a);}
function Jp(a){ASX();B$(a);}
function A8l(){BmC=Bco(0);}
var Wd=D();
function G3(b,c){var d;if(b<0)G(W((((I()).a(B(537))).j(b)).b()));d=IV(Bf(2,AYy(b/c)|0));if(d<=1073741824)return d;G(W((((I()).a(B(538))).j(b)).b()));}
var ABV=D(Bt);
function BbW(){var a=new ABV();AKC(a);return a;}
function AKC(a){Co(a);}
function A4T(a,b,c,d){var e;e=!d.lF()?d.J():c.i();if(b<e)return (-1);d.d5=1;d.PC=1;return a.k.e(b,c,d);}
function AUb(a,b){return 0;}
function AI_(a){return B(539);}
function AAC(){var a=this;C.call(a);a.s$=0;a.gs=null;a.hB=null;a.wR=0.0;a.tr=0;a.u8=0;a.jS=0;}
function Gr(){var a=new AAC();A2x(a);return a;}
function BmE(a,b){var c=new AAC();YA(c,a,b);return c;}
function A2x(a){YA(a,51,0.800000011920929);}
function YA(a,b,c){var d;J(a);if(c>0.0&&c<1.0){a.wR=c;d=G3(b,c);a.tr=d*c|0;a.jS=d-1|0;a.u8=CV(O(a.jS));a.gs=Y(C,d);a.hB=Bc(d);return;}G(W((((I()).a(B(40))).cB(c)).b()));}
function AMy(a,b){return Cp(CM(Ce(O(b.bp()),Cc(2135587861, 2654435769)),a.u8));}
function AX1(a,b){var c,d,e;if(b===null)G(W(B(461)));c=a.gs;d=a.kn(b);while(true){e=c.data[d];if(e===null)return  -(d+1|0)|0;if(e.z(b))break;d=(d+1|0)&a.jS;}return d;}
function AQr(a,b,c){var d,e;d=a.j4(b);if(d>=0){a.hB.data[d]=c;return;}e= -(d+1|0)|0;a.gs.data[e]=b;a.hB.data[e]=c;e=a.s$+1|0;a.s$=e;if(e>=a.tr)TQ(a,a.gs.data.length<<1);}
function Y2(a,b,c){var d,e,f;d=a.gs;e=a.kn(b);while(true){f=d.data;if(f[e]===null)break;e=(e+1|0)&a.jS;}f[e]=b;a.hB.data[e]=c;}
function AW4(a,b,c){var d;d=a.j4(b);if(d>=0)c=a.hB.data[d];return c;}
function TQ(a,b){var c,d,e,f,g;a:{c=a.gs.data.length;a.tr=b*a.wR|0;a.jS=b-1|0;a.u8=CV(O(a.jS));d=a.gs;e=a.hB;a.gs=Y(C,b);a.hB=Bc(b);if(a.s$>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g!==null)Y2(a,g,e.data[f]);f=f+1|0;}}}}
var Tx=D(T);
function A_o(){var a=new Tx();AKV(a);return a;}
function AKV(a){Bo(a);}
function AQ4(a){return (CR()).bF(65,90);}
function Ft(){var a=this;CS.call(a);a.bI=0;a.A=null;a.hf=null;}
function VW(a,b,c,d,e,f){FJ(a,c);Ev();a.hf=BhA;a.bI=b;a.A=d;a.C=e;a.bb=f;}
function FV(b){if(b>=0)return A2r(b,1);G(W((((I()).a(B(403))).j(b)).b()));}
function RG(b){if(b>=0)return A2r(b,0);G(W((((I()).a(B(403))).j(b)).b()));}
function Y5(b,c,d){return Bdt(0,b.data.length,b,c,c+d|0,0,0);}
function Ht(b){return Y5(b,0,b.data.length);}
function AYb(a,b,c,d){var e,f,g,h,i,j;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bg((((((I()).a(B(540))).j(g)).a(B(405))).j(f)).b()));if(Bb(a)<d)G(Ux());if(d<0)G(Bg(((((I()).a(B(406))).j(d)).a(B(407))).b()));h=a.C+a.bI|0;i=0;while(i<d){g=c+1|0;j=a.A.data;f=h+1|0;e[c]=j[h];i=i+1|0;c=g;h=f;}a.C=a.C+d|0;return a;}}e=b.data;G(Bg(((((((I()).a(B(408))).j(c)).a(B(64))).j(e.length)).a(B(24))).b()));}
function AOn(a,b){return a.zS(b,0,b.data.length);}
function A80(a,b,c,d){var e,f,g,h,i,j;if(!d)return a;if(a.b_())G(C7());if(Bb(a)<d)G(F0());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bg((((((I()).a(B(541))).j(g)).a(B(405))).j(f)).b()));if(d<0)G(Bg(((((I()).a(B(406))).j(d)).a(B(407))).b()));h=a.C+a.bI|0;i=0;while(i<d){j=a.A.data;g=h+1|0;f=c+1|0;j[h]=e[c];i=i+1|0;h=g;c=f;}a.C=a.C+d|0;return a;}}e=b.data;G(Bg(((((((I()).a(B(408))).j(c)).a(B(64))).j(e.length)).a(B(24))).b()));}
function Ye(a,b){return a.wT(b,0,b.data.length);}
function AWi(a){return 1;}
function HH(a){return a.A;}
function FH(a,b){a.hf=b;return a;}
function J4(a){FZ(a);return a;}
function Jv(a){G7(a);return a;}
function AY$(a,b){IZ(a,b);return a;}
function AQP(a,b){GL(a,b);return a;}
function AFR(a){return Jv(a);}
function AOE(a,b){return a.MU(b);}
function AVf(a,b){return a.f3(b);}
function AB4(){var a=this;Ft.call(a);a.Is=0;a.oB=0;}
function A2r(a,b){var c=new AB4();A0$(c,a,b);return c;}
function Bdt(a,b,c,d,e,f,g){var h=new AB4();O5(h,a,b,c,d,e,f,g);return h;}
function A0$(a,b,c){O5(a,0,b,Ci(b),0,b,c,0);}
function O5(a,b,c,d,e,f,g,h){VW(a,b,c,d,e,f);a.Is=g;a.oB=h;}
function ADa(a,b){if(b>=0&&b<a.bb)return a.A.data[a.bI+b|0];G(Bg(((((((I()).a(B(355))).j(b)).a(B(64))).j(a.bb)).a(B(24))).b()));}
function AMz(a){var b,c,d,e,f,g,h,i;if(a.oB)G(C7());a:{b=Bb(a);if(a.C>0){c=a.bI;d=a.bI+a.C|0;e=0;while(true){if(e>=b)break a;f=a.A.data;g=c+1|0;h=a.A.data;i=d+1|0;f[c]=h[d];e=e+1|0;c=g;d=i;}}}a.C=b;a.bb=a.hz;a.fD=(-1);return a;}
function ARR(a){return a.oB;}
function A$A(a){var b,c;b=Bb(a)/2|0;c=a.hf;Ev();if(c!==BhA)return Bfk(a.bI+a.C|0,b,a,0,b,a.b_());return Bcw(a.bI+a.C|0,b,a,0,b,a.b_());}
function A7U(a,b){var c,d,e,f,g;if(b>=0&&(b+3|0)<a.bb){c=a.A.data[a.bI+b|0]&255;d=a.A.data[(a.bI+b|0)+1|0]&255;e=a.A.data[(a.bI+b|0)+2|0]&255;f=a.A.data[(a.bI+b|0)+3|0]&255;g=a.hf;Ev();if(g!==BhA)return f<<24|e<<16|d<<8|c;return c<<24|d<<16|e<<8|f;}G(Bg(((((((I()).a(B(355))).j(b)).a(B(64))).j(a.bb-3|0)).a(B(24))).b()));}
function AIO(a,b,c){var d;if(a.oB)G(C7());if(b>=0&&(b+3|0)<a.bb){d=a.hf;Ev();if(d!==BhA){a.A.data[a.bI+b|0]=c<<24>>24;a.A.data[(a.bI+b|0)+1|0]=c>>8<<24>>24;a.A.data[(a.bI+b|0)+2|0]=c>>16<<24>>24;a.A.data[(a.bI+b|0)+3|0]=c>>24<<24>>24;}else{a.A.data[a.bI+b|0]=c>>24<<24>>24;a.A.data[(a.bI+b|0)+1|0]=c>>16<<24>>24;a.A.data[(a.bI+b|0)+2|0]=c>>8<<24>>24;a.A.data[(a.bI+b|0)+3|0]=c<<24>>24;}return a;}G(Bg(((((((I()).a(B(355))).j(b)).a(B(64))).j(a.bb-3|0)).a(B(24))).b()));}
function ATF(a){var b,c;b=Bb(a)/4|0;c=a.hf;Ev();if(c!==BhA)return Bev(a.bI+a.C|0,b,a,0,b,a.b_());return BcX(a.bI+a.C|0,b,a,0,b,a.b_());}
function ANh(a){var b,c;b=Bb(a)/4|0;c=a.hf;Ev();if(c!==BhB)return BeY(a.bI+a.C|0,b,a,0,b,a.b_());return A_m(a.bI+a.C|0,b,a,0,b,a.b_());}
function RU(){var a=this;E9.call(a);a.sA=0;a.sz=null;}
function BfN(a){var b=new RU();AKq(b,a);return b;}
function AKq(a,b){a.sz=b;Kv(a);}
function A1T(a){var b,c;if(a.sA==N6(a.sz))return (-1);b=a.sz;c=a.sA;a.sA=c+1|0;return Rf(b,c)&255;}
function LL(){var a=this;C.call(a);a.m4=null;a.s7=0.0;}
function Bbz(a,b){var c=new LL();AIU(c,a,b);return c;}
function AIU(a,b,c){J(a);a.m4=S();a.s7=0.0;(a.m4.M(b)).bU();a.s7=c;}
function A2F(a,b,c,d){(((a.m4.M(b)).gk(c)).HI(c.n-d.n,c.o-d.o,c.q-d.q)).bU();a.s7= -b.yt(a.m4);}
function VM(){var a=this;C.call(a);a.p6=null;a.uQ=null;a.mo=0;a.l7=0;a.nn=0;a.gW=0;a.rV=0;a.uS=0;a.p3=0;}
function Bca(){var a=new VM();A78(a);return a;}
function A78(a){J(a);a.p6=null;a.uQ=null;a.mo=2;a.l7=5;a.nn=0;a.gW=12;a.rV=1;a.uS=(-1);a.p3=(-1);}
function Gs(){var a=this;C.call(a);a.gl=null;a.b1=null;a.jV=null;}
var BmF=null;var BmG=null;var BmH=null;function AKK(){AKK=N(Gs);A2h();}
function BeD(){var a=new Gs();VI(a);return a;}
function VI(a){var b;AKK();J(a);a.gl=Y(LL,6);a.b1=H(DA,[S(),S(),S(),S(),S(),S(),S(),S()]);a.jV=B_(24);b=0;while(b<6){a.gl.data[b]=Bbz(S(),0.0);b=b+1|0;}}
function A4L(a,b){var c,d,e,f,g,h;AKK();X(BmG,0,a.jV,0,BmG.data.length);TU(b.c,a.jV,0,8,3);c=0;d=0;while(c<8){e=a.b1.data[c];f=a.jV.data;g=d+1|0;e.n=f[d];f=a.jV.data;h=g+1|0;e.o=f[g];f=a.jV.data;d=h+1|0;e.q=f[h];c=c+1|0;}a.gl.data[0].iv(a.b1.data[1],a.b1.data[0],a.b1.data[2]);a.gl.data[1].iv(a.b1.data[4],a.b1.data[5],a.b1.data[7]);a.gl.data[2].iv(a.b1.data[0],a.b1.data[4],a.b1.data[3]);a.gl.data[3].iv(a.b1.data[5],a.b1.data[1],a.b1.data[6]);a.gl.data[4].iv(a.b1.data[2],a.b1.data[3],a.b1.data[6]);a.gl.data[5].iv(a.b1.data[4],
a.b1.data[0],a.b1.data[1]);}
function A2h(){var b,c,d,e,f,g,h,i;BmF=H(DA,[Ck((-1.0),(-1.0),(-1.0)),Ck(1.0,(-1.0),(-1.0)),Ck(1.0,1.0,(-1.0)),Ck((-1.0),1.0,(-1.0)),Ck((-1.0),(-1.0),1.0),Ck(1.0,(-1.0),1.0),Ck(1.0,1.0,1.0),Ck((-1.0),1.0,1.0)]);BmG=B_(24);b=0;c=BmF.data;d=c.length;e=0;while(e<d){f=c[e];g=BmG.data;h=b+1|0;g[b]=f.n;g=BmG.data;i=h+1|0;g[h]=f.o;g=BmG.data;b=i+1|0;g[i]=f.q;e=e+1|0;}BmH=S();}
function M$(){var a=this;C.call(a);a.Bn=null;a.Ei=null;}
var BmI=null;function Beb(){Beb=N(M$);AP$();}
function A_A(a,b){var c=new M$();AB0(c,a,b);return c;}
function AB0(a,b,c){Beb();J(a);a.Bn=S();a.Ei=S();a.Bn.M(b);(a.Ei.M(c)).bU();}
function AP$(){BmI=S();}
var ABt=D(By);
function ATS(b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s;b.ul(8);k=b.dH(c);l=b.dH(e);m=b.dH(f);n=b.dH(d);o=b.dH(g);p=b.dH(i);q=b.dH(j);r=b.dH(h);s=b.Mb();if(s==1){b.hl(24);b.d2(k,l,m,n);b.d2(p,o,r,q);b.EF(k,o,n,r,m,q,l,p);}else if(!s){b.r2(2);b.d2(k,l,m,n);b.d2(p,o,r,q);}else{b.r2(6);b.d2(k,l,m,n);b.d2(p,o,r,q);b.d2(k,n,r,o);b.d2(p,q,m,l);b.d2(p,l,k,o);b.d2(m,q,r,n);}}
function A86(b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u;if(Z(Br(IL(b.jF()),O(408)),Ba)){J8();k=Bh6.dK(c,null,null,null);l=Bh7.dK(d,null,null,null);m=Bh8;n=null;o=null;p=null;n=m.dK(e,n,o,p);o=Bh9.dK(f,null,null,null);p=Bh$;q=null;r=null;m=null;p=p.dK(g,q,r,m);q=Bh_.dK(h,null,null,null);r=Bia;s=null;t=null;m=null;r=r.dK(i,s,t,m);m=Bib.dK(j,null,null,null);ATS(b,k,l,n,o,p,q,r,m);}else{b.ul(24);b.r2(6);J8();u=(((BhY.M(c)).i0(f,0.5)).gk((BhZ.M(g)).i0(j,0.5))).bU();b.jm(c,d,f,e,u);b.jm(h,g,i,j,u.el((-1.0)));k=
(((BhY.M(c)).i0(i,0.5)).gk((BhZ.M(d)).i0(j,0.5))).bU();b.jm(g,c,e,i,k);b.jm(d,h,j,f,k.el((-1.0)));k=(((BhY.M(c)).i0(h,0.5)).gk((BhZ.M(e)).i0(j,0.5))).bU();b.jm(g,h,d,c,k);b.jm(e,f,j,i,k.el((-1.0)));}}
function A6e(b,c,d,e){AUJ(b,0.0,0.0,0.0,c,d,e);}
function AUJ(b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;i=f*0.5;j=g*0.5;k=h*0.5;l=c-i;m=d-j;n=e-k;o=c+i;p=d+j;q=e+k;r=(Dw()).I(l,m,n);s=(Dw()).I(l,p,n);t=(Dw()).I(o,m,n);u=(Dw()).I(o,p,n);v=(Dw()).I(l,m,q);w=(Dw()).I(l,p,q);x=(Dw()).I(o,m,q);y=(Dw()).I(o,p,q);A86(b,r,s,t,u,v,w,x,y);UP();}
var QP=D(Bm);
function Bac(){var a=new QP();A9G(a);return a;}
function A9G(a){Cx(a);}
function VO(){Bt.call(this);this.C1=null;}
function Be_(a){var b=new VO();A5V(b,a);return b;}
function A5V(a,b){Co(a);a.C1=b;}
function AXy(a,b,c,d){var e,f;a:{if(b!=d.J()){if(!b)break a;if(d.jy()&&b==d.dI())break a;e=a.C1;f=b-1|0;if(e.DS(c.f(f),c.f(b)))break a;}return (-1);}return a.k.e(b,c,d);}
function AIS(a,b){return 0;}
function AVO(a){return B(542);}
var Ch=D();
function DR(a){J(a);}
function AUN(a,b,c){return 1;}
var TJ=D();
function Xb(){V.call(this);this.yg=null;}
function Bdu(){var a=new Xb();A5K(a);return a;}
function A5K(a){BL(a);a.yg=BF();}
function AZG(a,b,c,d,e){DZ(b,c,(a.yg.ch(b.cU.eI)).hA(d.dy));}
var MJ=D();
var Bi8=null;function Bfd(){Bfd=N(MJ);AFt();}
function AFt(){Bi8=Bc((Ys()).data.length);Bi8.data[BD(BiW)]=1;Bi8.data[BD(BiX)]=2;}
function Yn(){var a=this;C.call(a);a.fW=null;a.iO=null;a.iQ=null;a.Nc=null;}
function BbU(){var a=new Yn();A6i(a);return a;}
function A6i(a){J(a);a.iQ=Bp();a.Nc=BF();}
function Rt(a,b){var c,d,e;c=a.iQ.bZ();while(true){if(!c.bC()){d=Bb3();d.O7(b);a.iQ.F(d);return d;}e=c.bz();if(NT(e.jF(),b)&&e.IM()<16383)break;}return e;}
function ADs(a){if(a.fW!==null)G(U(B(543)));a.iO=null;a.fW=Bai();a.iQ.K();}
function AVU(a){var b,c,d;if(a.fW===null)G(U(B(544)));b=a.fW;NW(a);a.fW=null;c=a.iQ.bZ();while(c.bC()){d=c.bz();d.NO();}a.iQ.K();AXO(b);return b;}
function NW(a){if(a.iO!==null)a.iO=null;}
function AVs(a,b){if(a.fW===null)G(U(B(544)));NW(a);a.fW.j1.F(b);a.iO=b;return b;}
function AF1(a){var b;b=AGa();a.PK(b);b.gm=(((I()).a(B(545))).j(a.fW.j1.h)).b();return b;}
function A7Y(a,b,c){if(a.iO===null)a.Jc();a.iO.d9.F(BfG(b,c));}
function AJ0(a,b,c,d,e){var f;f=Rt(a,d);a.Nb(f.Qd(b,c),e);return f;}
function ASt(a,b,c,d,e){return a.J1(b,c,RK(d),e);}
function ARf(a,b,c,d,e,f){return a.JN(b,c,d,4,e,f);}
function A25(a,b,c,d,e,f,g){a.g4();(a.Kh(B(546),e,g,f)).K4(b,c,d);return a.HS();}
function AXO(b){var c,d;b.pW.K();b.p1.K();b.ox.K();c=b.j1.bZ();while(c.bC()){d=c.bz();T4(b,d);}}
function T4(b,c){var d,e,f;d=c.d9.bZ();while(d.bC()){e=d.bz();if(!b.pW.is(e.dY,1))b.pW.F(e.dY);if(!b.ox.is(e.fj,1)){b.ox.F(e.fj);if(!b.p1.is(e.fj.b7,1))b.p1.F(e.fj.b7);b.Mu(e.fj.b7);}}d=(c.rA()).fr();while(d.bC()){f=d.bz();T4(b,f);}}
function I9(){var a=this;C.call(a);a.dt=null;a.eL=null;a.x_=0;a.Kt=0;a.t8=0;a.k0=0;a.oE=0;}
function A2U(a,b,c){var d=new I9();ZX(d,a,b,c);return d;}
function ZX(a,b,c,d){J(a);a.k0=0;a.oE=0;a.Kt=b;a.dt=d;a.eL=HX(Cf(a.dt.cO/4|0,c));a.eL.c_();a.x_=BhM.i2();a.t8=!b?35048:35044;}
function AIR(a){return a.dt;}
function ATn(a){return CU(a.eL)/(a.dt.cO/4|0)|0;}
function ACI(a){if(a.oE){BhM.fC(34962,BE(a.eL),a.eL,a.t8);a.k0=0;}}
function A4H(a,b,c,d){a.k0=1;N$(b,a.eL,d,c);a.eL.cY(0);a.eL.cl(d);ACI(a);}
function AZq(a,b,c){var d,e,f,g,h,i;d=BhM;d.c8(34962,a.x_);if(a.k0){d.fC(34962,BE(a.eL),a.eL,a.t8);a.k0=0;}a:{e=CT(a.dt);if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data;h=CB(a.dt,f);i=g[f];if(i>=0){b.lQ(i);if(h.fl!=4)b.ia(i,h.cI,5126,0,a.dt.cO,h.cT);else b.ia(i,h.cI,5121,1,a.dt.cO,h.cT);}f=f+1|0;}}f=0;while(f<e){h=CB(a.dt,f);i=b.lW(h.er);if(i>=0){b.lQ(i);if(h.fl!=4)b.ia(i,h.cI,5126,0,a.dt.cO,h.cT);else b.ia(i,h.cI,5121,1,a.dt.cO,h.cT);}f=f+1|0;}}a.oE=1;}
function AVW(a,b,c){var d,e,f,g;a:{d=BhM;e=CT(a.dt);if(c===null){f=0;while(f<e){b.BB((CB(a.dt,f)).er);f=f+1|0;}}else{f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0)b.tM(g);f=f+1|0;}}}d.c8(34962,0);a.oE=0;}
var Wa=D(I9);
function BbZ(a,b){var c=new Wa();A6L(c,a,b);return c;}
function A6L(a,b,c){ZX(a,0,b,c);}
var Xh=D(V);
function Bar(){var a=new Xh();AQy(a);return a;}
function AQy(a){BL(a);}
function ATf(a,b,c,d,e){Cd();Fv(b,c,(BB(e,BlW)).dX);}
var Xd=D(V);
function Bee(){var a=new Xd();ARB(a);return a;}
function ARB(a){BL(a);}
function AUZ(a,b,c,d,e){var f,g,h,i;f=b.cX.d6;B1();g=BmJ;h=(BB(e,g)).d3;i=f.gD(h);DS(b,c,i);}
var S3=D(T);
function Bcl(){var a=new S3();AJb(a);return a;}
function AJb(a){Bo(a);}
function A6V(a){return (CR()).bF(97,122);}
function Xc(){V.call(this);this.A8=null;}
function BbT(){var a=new Xc();AKU(a);return a;}
function AKU(a){BL(a);a.A8=Pf();}
function ALx(a,b,c,d,e){Q1(b,c,((a.A8.D0(d.dy)).CK()).Aw());}
var KO=D(0);
var Xf=D(V);
function Bbo(){var a=new Xf();AZc(a);return a;}
function AZc(a){BL(a);}
function AGT(a,b,c,d,e){ET();Fn(b,c,(BB(e,BlA)).ml);}
var ABx=D();
function YV(){var a=this;C.call(a);a.d6=null;a.on=0;a.s5=0;a.qB=0;a.g$=0;a.AI=0.0;a.wY=0.0;a.pF=0;a.o9=0;}
function Bc5(a){var b=new YV();A9T(b,a);return b;}
function A9T(a,b){J(a);a.d6=b;}
function A76(a){BhL.eh(2929);a.g$=0;BhL.kQ(1);a.pF=1;BhL.eh(3042);a.on=0;BhL.eh(2884);a.qB=0;a.s5=0;a.o9=0;a.d6.g4();}
function A$p(a){if(a.g$)BhL.eh(2929);if(!a.pF)BhL.kQ(1);if(a.on)BhL.eh(3042);if(a.o9>0)BhL.eh(2884);a.d6.bd();}
function AGC(a,b){var c;if(a.pF!=b){c=BhL;a.pF=b;c.kQ(b);}}
function AXs(a,b,c,d){var e,f,g;e=!a.g$?0:1;f=!b?0:1;if(a.g$!=b){a.g$=b;if(!f)BhL.eh(2929);else{BhL.o3(2929);BhL.vz(b);}}if(f){if(!(e&&a.g$==b)){g=BhL;a.g$=b;g.vz(b);}if(!(e&&a.AI===c&&a.wY===d)){g=BhL;a.AI=c;a.wY=d;g.JS(c,d);}}}
function A9D(a,b,c,d){if(b!=a.on){a.on=b;if(!b)BhL.eh(3042);else BhL.o3(3042);}if(b&&!(a.s5==c&&a.qB==d)){BhL.PA(c,d);a.s5=c;a.qB=d;}}
function AJZ(a,b){if(b!=a.o9){a.o9=b;if(b!=1028&&b!=1029&&b!=1032)BhL.eh(2884);else{BhL.o3(2884);BhL.I3(b);}}}
var Q_=D(T);
function Bb5(){var a=new Q_();AFV(a);return a;}
function AFV(a){Bo(a);}
function AO9(a){return Bci(a);}
var Hl=D();
function XH(a){J(a);}
function Zk(){var a=this;C.call(a);a.ft=null;a.dS=null;a.rP=0;a.HV=0;a.jg=0;a.oU=0;a.yO=0;}
function A$x(a,b){var c=new Zk();AYW(c,a,b);return c;}
function AYW(a,b,c){J(a);a.jg=1;a.oU=0;a.dS=MK(c*2|0);a.HV=1;a.yO=!b?35048:35044;a.ft=a.dS.v1();a.ft.c_();a.dS.c_();a.rP=ACv(a);}
function ACv(a){var b;b=BhM.i2();BhM.c8(34963,b);BhM.fC(34963,CU(a.dS),null,a.yO);BhM.c8(34963,0);return b;}
function APi(a){return BE(a.ft);}
function AUw(a){return CU(a.ft);}
function A1q(a,b,c,d){a.jg=1;a.ft.c0();a.ft.Dx(b,c,d);a.ft.c_();a.dS.cY(0);a.dS.cl(d<<1);if(a.oU){BhM.qn(34963,0,BE(a.dS),a.dS);a.jg=0;}}
function ASw(a){a.jg=1;return a.ft;}
function ALa(a){if(!a.rP)G(U(B(547)));BhM.c8(34963,a.rP);if(a.jg){a.dS.cl(BE(a.ft)*2|0);BhM.qn(34963,0,BE(a.dS),a.dS);a.jg=0;}a.oU=1;}
function AFG(a){BhM.c8(34963,0);a.oU=0;}
var Gn=D(BR);
var BmK=null;function A4y(){A4y=N(Gn);AHS();}
function Bd7(a){var b=new Gn();Y0(b,a);return b;}
function BmL(){var a=new Gn();H3(a);return a;}
function Y0(a,b){A4y();B$(a);}
function H3(a){A4y();B$(a);}
function AHS(){BmK=Bd7(0);}
var Wl=D(Bt);
function A_4(){var a=new Wl();AQD(a);return a;}
function AQD(a){Co(a);}
function AKP(a,b,c,d){if(b!=d.Nk())return (-1);return a.k.e(b,c,d);}
function ATJ(a,b){return 0;}
function AV9(a){return B(548);}
var Xl=D(V);
function BdD(){var a=new Xl();AEC(a);return a;}
function AEC(a){BL(a);}
function A63(a,b,c,d,e){var f,g,h,i;f=b.cX.d6;B1();g=BmM;h=(BB(e,g)).d3;i=f.gD(h);DS(b,c,i);}
var Xi=D(V);
function A_1(){var a=new Xi();A9k(a);return a;}
function A9k(a){BL(a);}
function AS2(a,b,c,d,e){var f;B1();f=BB(e,BmM);DO(b,c,f.eN,f.eM,f.e$,f.e_);}
var C9=D(BR);
var BmN=null;var Bgq=null;var BmO=null;var BmP=null;var BmQ=null;var BmR=null;var BmS=null;var BmT=null;function Fl(){Fl=N(C9);AE5();}
function Fe(a){var b=new C9();SX(b,a);return b;}
function SX(a,b){Fl();B$(a);a.dZ(!b?0:Py(0.0,0.0,0.0),b);}
function AFO(a){return Rj(a.bY);}
function APX(a){return AAl(a.bY);}
function A00(a){return XF(a.bY);}
function AHE(a,b,c,d){AAh(a.bY,b,c,d);}
function Gq(b,c){Fl();c.MW(b.n,b.o,b.q);}
function Wi(b,c){var d,e,f;Fl();d=b.Lv();e=b.JA();f=b.J2();c.I(d,e,f);}
function AE5(){BmN=Fe(0);Bgq=Fe(1);BmO=Fe(1);BmP=Fe(1);BmQ=Fe(1);BmR=Fe(1);BmS=Fe(0);BmT=S();}
function Py(b,c,d){var jsObj=new Bullet.btVector3(b,c,d);return Bullet.getPointer(jsObj);}
function Rj(b){var vec3=Bullet.wrapPointer(b,Bullet.btVector3);return vec3.x();}
function AAl(b){var vec3=Bullet.wrapPointer(b,Bullet.btVector3);return vec3.y();}
function XF(b){var vec3=Bullet.wrapPointer(b,Bullet.btVector3);return vec3.z();}
function AAh(b,c,d,e){var vec3=Bullet.wrapPointer(b,Bullet.btVector3);vec3.setValue(c,d,e);}
var Xe=D(V);
function Beh(){var a=new Xe();AEA(a);return a;}
function AEA(a){BL(a);}
function ANO(a,b,c,d,e){var f;B1();f=BB(e,BmJ);DO(b,c,f.eN,f.eM,f.e$,f.e_);}
var Xk=D(V);
function Bej(){var a=new Xk();AV4(a);return a;}
function AV4(a){BL(a);}
function AJv(a,b,c,d,e){Cd();Fv(b,c,(BB(e,BlX)).dX);}
var KX=D(Cy);
function BmU(a){var b=new KX();ZK(b,a);return b;}
function ZK(a,b){Et(a,b);}
function AVb(a,b,c,d){var e;e=a.j$();d.by(e,b-d.et(e)|0);return a.k.e(b,c,d);}
function AX8(a){return B(549);}
function A6X(a,b){return 0;}
var Xj=D(V);
function Bb0(){var a=new Xj();AIT(a);return a;}
function AIT(a){BL(a);}
function AYd(a,b,c,d,e){Cd();Fv(b,c,(BB(e,BlZ)).dX);}
var Ll=D();
var BmV=null;function E1(){E1=N(Ll);AKX();}
function IK(b,c){E1();return b+BmV.Mz((c-b|0)+1|0)|0;}
function HE(b,c){E1();return b+BmV.F1()*(c-b);}
function IV(b){var c,d;E1();if(!b)return 1;c=b+(-1)|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function K7(b){E1();return b&&!(b&(b-1|0))?1:0;}
function DD(b){E1();return CG(b)>9.999999974752427E-7?0:1;}
function Dj(b,c){E1();return CG(b-c)>9.999999974752427E-7?0:1;}
function SG(b,c,d){E1();return CG(b-c)>d?0:1;}
function AKX(){BmV=Bb4();}
var NA=D(0);
var L2=D(0);
function Vm(){BJ.call(this);this.rp=0;}
function Bbe(a){var b=new Vm();A7D(b,a);return b;}
function A7D(a,b){C1(a);a.bO=2;a.rp=EX(En(b));}
function AP6(a,b,c){var d,e,f;d=b+1|0;e=c.f(b);f=c.f(d);return a.rp!=EX(En(Df(e,f)))?(-1):2;}
function A$T(a){return (((I()).a(B(424))).a(Mf(Eu(a.rp)))).b();}
function U7(){var a=this;Ir.call(a);a.x0=0;a.uH=0.0;a.wE=0;a.kT=0.0;a.Bu=0;a.ju=0;a.iD=0;a.B4=0;a.DI=0.0;a.AZ=0.0;a.oV=0;a.i6=null;a.uP=0;a.qZ=0;a.yZ=0;a.rR=0;a.yo=0;a.s9=0;a.E9=0;a.rH=0;a.Ao=0;a.qG=0;a.w3=0;a.cz=null;a.fw=0;a.tn=0.0;a.to=0.0;a.fy=null;a.tt=null;a.BQ=null;a.io=0;a.sJ=0;}
function BmW(a,b){var c=new U7();Qn(c,a,b);return c;}
function Bag(a){var b=new U7();AFu(b,a);return b;}
function Qn(a,b,c){Vt(a,b);a.x0=0;a.uH=360.0;a.wE=1;a.kT=10.0;a.Bu=2;a.ju=0;a.B4=1;a.DI=(-0.10000000149011612);a.AZ=10.0;a.oV=1;a.i6=S();a.uP=1;a.qZ=1;a.yZ=0;a.rR=51;a.s9=47;a.rH=29;a.qG=32;a.fw=(-1);a.fy=S();a.tt=S();a.BQ=b;a.BQ.wQ=a;a.cz=c;}
function AFu(a,b){Qn(a,BeN(),b);}
function AKb(a,b,c,d,e){a.io=a.io|1<<d;a.sJ=K7(a.io)?0:1;if(a.sJ)a.fw=(-1);else if(a.fw<0&&!(a.ju&&!a.iD)){a.tn=b;a.to=c;a.fw=e;}return !ON(a,b,c,d,e)&&a.ju&&!a.iD?0:1;}
function A1d(a,b,c,d,e){a.io=a.io&((-1)^1<<d);a.sJ=K7(a.io)?0:1;if(e==a.fw)a.fw=(-1);return !AAp(a,b,c,d,e)&&!a.iD?0:1;}
function AYD(a,b,c,d){if(d==a.x0){((a.fy.M(a.cz.c7)).iz(a.cz.ds)).o=0.0;a.cz.zc(a.i6,a.fy.bU(),c*a.uH);a.cz.zc(a.i6,Bms,b* -a.uH);}else if(d==a.wE){a.cz.k8((((a.fy.M(a.cz.c7)).iz(a.cz.ds)).bU()).el( -b*a.kT));a.cz.k8((a.tt.M(a.cz.ds)).el( -c*a.kT));if(a.uP)(a.i6.fA(a.fy)).fA(a.tt);}else if(d==a.Bu){a.cz.k8((a.fy.M(a.cz.c7)).el(c*a.kT));if(a.qZ)a.i6.fA(a.fy);}if(a.oV)a.cz.f5();return 1;}
function AKi(a,b,c,d){var e,f,g,h,i,j;e=VN(a,b,c,d);if(!e&&a.fw>=0){f=b;g=(f-a.tn)/BhI.bo();h=a.to;i=c;j=(h-i)/BhI.bl();a.tn=f;a.to=i;return a.Ic(g,j,a.fw);}return e;}
function AR5(a,b,c){return a.y1(c*a.DI*a.kT);}
function A20(a,b){if(!a.B4&&a.ju&&!a.iD)return 0;a.cz.k8((a.fy.M(a.cz.c7)).el(b));if(a.yZ)a.i6.fA(a.fy);if(a.oV)a.cz.f5();return 1;}
function AR9(a,b){return a.y1(a.AZ*b);}
function AD4(a,b){if(b==a.ju)a.iD=1;if(b==a.rR)a.yo=1;else if(b==a.s9)a.E9=1;else if(b==a.rH)a.Ao=1;else if(b==a.qG)a.w3=1;return 0;}
function A1Y(a,b){if(b==a.ju){a.iD=0;a.fw=(-1);}if(b==a.rR)a.yo=0;else if(b==a.s9)a.E9=0;else if(b==a.rH)a.Ao=0;else if(b==a.qG)a.w3=0;return 0;}
var Gm=D();
var BmX=null;var BmY=null;var BmZ=null;function Eh(){var b;if(BmX===null){b=new HA;AS8();Oc(b,BhF,0);BmX=b;}return BmX;}
function TC(){var b;if(BmY===null){b=new HA;A2Y();Oc(b,BkV,0);BmY=b;}return BmY;}
function X(b,c,d,e,f){var g,h,i,j,k,l,m,n;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=AAs(b)){g=e+f|0;if(g<=AAs(d)){a:{b:{if(b!==d){h=(Cj(b)).gp();i=(Cj(d)).gp();if(h!==null&&i!==null){if(h===i)break b;if(!h.hd()&&!i.hd()){j=b;k=0;g=c;while(k<f){l=j.data;m=g+1|0;n=l[g];if(!i.vV(n)){Nb(b,c,d,e,k);G(Qu());}k=k+1|0;g=m;}Nb(b,c,d,e,f);return;}if(!h.hd())break a;if(i.hd())break b;else break a;}G(Qu());}}Nb(b,c,d,e,f);return;}G(Qu());}}G(C8());}G(APo(B(550)));}
function Nb(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function D$(){return Long_fromNumber(new Date().getTime());}
function AZm(){var b;if(BmZ===null){b=BaO();b.x(B(551),B(552));b.x(B(553),B(554));b.x(B(555),B(384));b.x(B(556),B(13));b.x(B(557),AZj());b.x(B(558),AQ5());b.x(B(559),B(552));b.x(B(560),A$e());BmZ=BaS(b);}}
function AQ5(){return B(561);}
function A$e(){return B(384);}
function Gp(b,c){AZm();return BmZ.x(b,c);}
function AZj(){return B(324);}
function S0(){var a=this;C.call(a);a.eS=null;a.mJ=null;a.lJ=null;a.lx=null;a.mp=null;}
function A6m(){var a=new S0();A7_(a);return a;}
function A7_(a){J(a);a.eS=null;}
function AD1(a,b){a.eS=b.eS;a.mJ=b.mJ;a.lJ=b.lJ;a.lx=b.lx;a.mp=b.mp;}
function AFj(a){var b,c;b=O(a.eS===null?0:a.eS.ej);c=CA(Ce(O(811),b),O(a.eS===null?0:a.eS.NS()));c=CA(Ce(O(811),c),O(a.mJ===null?0:EE(a.mJ)));c=CA(Ce(O(811),c),O(a.lJ===null?0:EE(a.lJ)));c=CA(Ce(O(811),c),O(a.lx===null?0:G8(a.lx)));c=CA(Ce(O(811),c),O(a.mp===null?0:G8(a.mp)));return Cp(AQ_(c,M9(c,32)));}
function Q9(){var a=this;C.call(a);a.Oo=null;a.hy=null;a.sl=null;a.rd=0;a.zD=0.0;a.hS=0.0;a.qI=0.0;a.iX=0.0;a.sa=0.0;a.e4=0.0;a.l2=0.0;a.ix=0.0;a.kh=0.0;a.xh=0.0;a.eO=0.0;a.z3=0.0;a.Dl=0;a.hc=null;a.ir=null;a.vq=0.0;a.tI=0.0;a.Dq=null;a.wi=null;a.xp=null;}
function BcR(a,b){var c=new Q9();A36(c,a,b);return c;}
function A36(a,b,c){J(a);a.e4=1.0;a.xh=1.0;a.eO=1.0;a.z3=1.0;a.hc=Y($rt_arraycls(JB),128);a.tI=1.0;a.wi=I5([120,101,97,111,110,115,114,99,117,109,118,119,122]);a.xp=I5([77,78,66,68,67,69,70,75,65,71,72,73,74,76,79,80,81,82,83,84,85,86,87,88,89,90]);a.sl=b;a.rd=c;a.PL(b,c);}
function AGj(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,$$je;if(a.hy!==null)G(DP(B(562)));a.Oo=b.N9();d=Bbh(Bc7(b.qv()),512);a:{b:{try{e=d.lc();if(e===null)G(U(B(563)));f=e.ei(e.Nd(B(564))+8|0);g=(f.ce(0,f.K9(32))).vA(B(23),4);h=g.data;if(h.length!=4)G(U(B(565)));a.zD=BS(h[0]);a.hS=BS(h[1]);a.qI=BS(h[2]);a.iX=BS(h[3]);i=a.zD+a.qI;f=d.lc();if(f===null)G(U(B(566)));j=f.vA(B(56),9);h=j.data;k=h.length;if(k<3)G(U(B(567)));if(!h[1].e0(B(568)))G(U(B(569)));a.sa
=BS(h[1].ei(11));if(!h[2].e0(B(570)))G(U(B(571)));c:{l=BS(h[2].ei(5));m=1;if(k<6)n=m;else if(h[5]===null)n=m;else if(!h[5].e0(B(572)))n=m;else{try{n=Bf(1,BS(h[5].ei(6)));m=n;break c;}catch($$e){$$je=R($$e);if($$je instanceof Ds){}else{throw $$e;}}n=m;}}a.hy=Y(BM,n);o=0;d:{e:{f:{while(true){if(o>=n)break d;f=d.lc();if(f===null)G(U(B(573)));g:{p=GM(GJ(B(574)),f);if(Ga(p)){q=Gh(p,1);try{r=BS(q);if(r!=o)break f;break g;}catch($$e){$$je=R($$e);if($$je instanceof Ds){s=$$je;break e;}else{throw $$e;}}}}f=GM(GJ(B(575)),
f);if(!Ga(f))break;t=Gh(f,1);a.hy.data[o]=(((b.KV()).Km(t)).ru()).Gs(B(576),B(384));o=o+1|0;}G(U(B(577)));}try{G(U((((I()).a(B(578))).a(q)).b()));}catch($$e){$$je=R($$e);if($$je instanceof Ds){s=$$je;}else{throw $$e;}}}G(Jd((((I()).a(B(579))).a(q)).b(),s));}a.ix=0.0;h:{while(true){f=d.lc();if(f===null)break;if(f.e0(B(580)))break h;if(f.e0(B(581)))break h;if(!f.e0(B(582)))continue;u=AFr();v=T3(f,B(583));v.O();v.O();w=BS(v.O());if(w<=0)a.ir=u;else{if(w>65535)continue;a.ye(w,u);}u.eY=w;v.O();u.tb=BS(v.O());v.O();u.tc
=BS(v.O());v.O();u.ct=BS(v.O());v.O();u.cL=BS(v.O());v.O();u.dr=BS(v.O());v.O();if(c)u.jd=BS(v.O());else u.jd= -(u.cL+BS(v.O())|0)|0;v.O();u.gy=BS(v.O());if(v.wm())v.O();i:{if(v.wm())try{u.jU=BS(v.O());break i;}catch($$e){$$je=R($$e);if($$je instanceof Ds){}else{throw $$e;}}}if(u.ct>0&&u.cL>0)a.ix=Ju(l+u.jd,a.ix);}}a.ix=a.ix+a.qI;j:{while(true){f=d.lc();if(f===null)break;if(!f.e0(B(584)))break j;v=T3(f,B(583));v.O();v.O();x=BS(v.O());v.O();y=BS(v.O());if(x<0)continue;if(x>65535)continue;if(y<0)continue;if(y
>65535)continue;u=a.iq(x&65535);v.O();z=BS(v.O());if(u!==null)u.Gq(y,z);}}ba=0;bb=0.0;bc=0.0;bd=0.0;be=0.0;bf=0.0;bg=0.0;bh=0.0;if(f!==null&&f.e0(B(581))){ba=1;v=T3(f,B(583));v.O();v.O();bb=D9(v.O());v.O();bc=D9(v.O());v.O();bd=D9(v.O());v.O();be=D9(v.O());v.O();bf=D9(v.O());v.O();bg=D9(v.O());v.O();bh=D9(v.O());}bi=a.iq(32);if(bi===null){bi=AFr();bi.eY=32;bj=a.iq(108);if(bj===null)bj=a.CH();bi.gy=bj.gy;a.ye(32,bi);}if(!bi.ct){bi.ct=a.iX+bi.gy+a.hS|0;bi.dr= -a.iX|0;}a.vq=bi.gy;bk=null;h=a.wi.data;k=h.length;bl
=0;k:{while(bl<k){bm=h[bl];bk=a.iq(bm);if(bk!==null)break k;bl=bl+1|0;}}if(bk===null)bk=a.CH();a.tI=bk.cL-i;bn=null;h=a.xp.data;n=h.length;k=0;l:{while(k<n){bo=h[k];bn=a.iq(bo);if(bn!==null)break l;k=k+1|0;}}if(bn!==null)a.e4=bn.cL;else{h=a.hc.data;n=h.length;k=0;while(k<n){m:{bp=h[k];if(bp!==null){bq=bp.data;bl=bq.length;br=0;while(true){if(br>=bl)break m;u=bq[br];if(u!==null&&u.cL&&u.ct)a.e4=Ei(a.e4,u.cL);br=br+1|0;}}}k=k+1|0;}}a.e4=a.e4-i;a.l2=l-a.e4;a.kh= -a.sa;if(c){a.l2= -a.l2;a.kh= -a.kh;}if(ba){a.l2
=bb;a.ix=bc;a.kh=bd;a.e4=be;a.sa=bf;a.vq=bg;a.tI=bh;}}catch($$e){$$je=R($$e);if($$je instanceof B3){s=$$je;break b;}else{f=$$je;break a;}}LZ(d);return;}try{G(Jd((((I()).a(B(585))).dD(b)).b(),s));}catch($$e){$$je=R($$e);f=$$je;}}LZ(d);G(f);}
function AVp(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=c.A5();e=1.0/d.bo();f=1.0/d.bl();g=0.0;h=0.0;i=c.zI;j=c.zL;k=c.H4();l=c.Lo();if(c instanceof KB){m=c;g=m.NK;h=(m.MA-m.OG|0)-m.NI;}n=b.tb;o=b.tb+b.ct|0;p=b.tc;q=b.tc+b.cL|0;if(g<=0.0)k=o;else{n=n-g;if(n<0.0){b.ct=b.ct+n|0;b.dr=b.dr-n|0;n=0.0;}r=o-g;if(r<=k)k=r;else b.ct=b.ct-(r-k)|0;}if(h<=0.0)l=q;else{p=p-h;if(p<0.0){b.cL=b.cL+p|0;if(b.cL<0)b.cL=0;p=0.0;}r=q-h;if(r<=l)l=r;else{s=r-l;b.cL=b.cL-s|0;b.jd=b.jd+s|0;}}b.vC=i+n*e;b.Bh=i+k*e;if(!a.rd){b.ti=j
+p*f;b.p7=j+l*f;}else{b.p7=j+p*f;b.ti=j+l*f;}}
function ATk(a,b,c){var d,e,f;d=a.hc.data;e=b/512|0;f=d[e];if(f===null){d=a.hc.data;f=Y(JB,512);d[e]=f;}f.data[b&511]=c;}
function A3q(a){var b,c,d,e,f,g,h,i;b=a.hc.data;c=b.length;d=0;a:while(true){if(d>=c)G(U(B(586)));b:{e=b[d];if(e!==null){f=e.data;g=f.length;h=0;while(true){if(h>=g)break b;i=f[h];if(i!==null&&i.cL&&i.ct)break a;h=h+1|0;}}}d=d+1|0;}return i;}
function AGO(a,b){var c;c=a.hc.data[b/512|0];if(c===null)return null;return c.data[b&511];}
function AF5(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q;g=e-d|0;if(!g)return;h=a.Dl;i=a.eO;j=b.bi;k=b.bn;j.xm(g);b.bn.DZ(g+1|0);while(true){a:{l=d+1|0;m=c.f(d);if(m!=13){n=a.iq(m);if(n===null){if(a.ir===null)break a;n=a.ir;}j.F(n);if(f!==null){o=f.gy;p=(o+f.J5(m)|0)*i;}else p=n.om?0.0:( -n.dr|0)*i-a.iX;k.Ad(p);if(!h)f=n;else if(m!=91)f=n;else if(l>=e)f=n;else if(c.f(l)!=91)f=n;else{l=l+1|0;f=n;}}}if(l>=e)break;d=l;}if(f!==null){q=f.om?f.gy*i:(f.ct+f.dr|0)*i-a.hS;k.Ad(q);}}
function ADg(a,b,c){var d,e,f,g,h;d=c-1|0;e=b.P;f=e.data;g=f[d].eY&65535;if(a.jq(g))return d;if(a.xz(g))d=d+(-1)|0;a:{while(d>0){h=f[d].eY&65535;if(a.jq(h))break a;if(a.xz(h))break a;d=d+(-1)|0;}return 0;}return d+1|0;}
function AGz(a,b){var c,d,e,f;if(a.Dq===null)return 0;c=a.Dq.data;d=c.length;e=0;while(e<d){f=c[e];if(b==f)return 1;e=e+1|0;}return 0;}
function AHf(a,b){switch(b){case 9:case 10:case 13:case 32:break;default:return 0;}return 1;}
var Nv=D();
var Bm0=null;function Ea(){return Bm0;}
function ALE(b){Bm0=b;}
function Xt(){var a=this;T.call(a);a.xB=0;a.CW=0;}
function M(a,b){var c=new Xt();A9E(c,a,b);return c;}
function A9E(a,b,c){Bo(a);a.xB=b;a.CW=c;}
function AL2(a){var b;b=(CR()).bF(a.xB,a.CW);return b;}
function UD(){var a=this;C.call(a);a.fV=0;a.qN=0.0;a.qO=0.0;a.of=0.0;a.oe=0.0;a.uA=Ba;a.gv=0;a.pA=null;a.pz=null;a.kp=null;}
function BeG(){var a=new UD();ADn(a);return a;}
function ADn(a){J(a);a.fV=10;a.pA=B_(a.fV);a.pz=B_(a.fV);a.kp=Bfm(a.fV);}
function AM1(a,b,c,d){var e;a.qN=b;a.qO=c;a.of=0.0;a.oe=0.0;a.gv=0;e=0;while(e<a.fV){a.pA.data[e]=0.0;a.pz.data[e]=0.0;a.kp.data[e]=Ba;e=e+1|0;}a.uA=d;}
function AMf(a,b,c,d){var e,f;a.of=b-a.qN;a.oe=c-a.qO;a.qN=b;a.qO=c;e=D4(d,a.uA);a.uA=d;f=a.gv%a.fV|0;a.pA.data[f]=a.of;a.pz.data[f]=a.oe;a.kp.data[f]=e;a.gv=a.gv+1|0;}
function A1Z(a){var b,c;b=Nm(a,a.pA,a.gv);c=Ru(MI(a,a.kp,a.gv))/1.0E9;if(c!==0.0)return b/c;return 0.0;}
function A5O(a){var b,c;b=Nm(a,a.pz,a.gv);c=Ru(MI(a,a.kp,a.gv))/1.0E9;if(c!==0.0)return b/c;return 0.0;}
function Nm(a,b,c){var d,e,f;d=Bq(a.fV,c);e=0.0;f=0;while(f<d){e=e+b.data[f];f=f+1|0;}return e/d;}
function MI(a,b,c){var d,e,f;d=Bq(a.fV,c);e=Ba;f=0;while(f<d){e=CA(e,b.data[f]);f=f+1|0;}if(!d)return Ba;return E_(e,O(d));}
function ACy(){HJ.call(this);this.ji=null;}
function Bc1(a){var b=new ACy();A5C(b,a);return b;}
function A5C(a,b){a.ji=b;P5(a);}
function A4Y(a){if(!a.ji.mG)a.ji.mG=a.ji.dV.Ot(a.ji.d8.eU,a.ji.d8.eT);}
var Xm=D(T);
function BcY(){var a=new Xm();AFq(a);return a;}
function AFq(a){Bo(a);}
function ASV(a){return (((CR()).bF(48,57)).bF(97,102)).bF(65,70);}
function Zr(){var a=this;C.call(a);a.GP=null;a.EJ=null;a.e3=null;a.bJ=null;a.iy=0;a.jv=0;a.o4=0;a.m5=null;a.qM=null;a.e7=null;}
function Bae(a,b){var c=new Zr();AC2(c,a,b);return c;}
function X2(a,b,c){a.qM=AAg(a,c);b.Bq(a.e3.d_(a.o4,LS(a)));b.Iv(a.qM);a.o4=MW(a);return a;}
function AAg(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$$je;if(a.m5!==null&&a.m5.z(b)){if(a.e7===null)return a.qM;c=I();d=0;while(d<a.e7.de()){c.dD(a.e7.l(d));d=d+1|0;}return c.b();}a.m5=b;e=b.rv();f=I();a.e7=null;g=0;h=0;i=0;a:{b:while(true){j=e.data;k=j.length;if(g>=k){if(a.e7!==null&&h!=f.i())a.e7.h1(f.d_(h,f.i()));return f.b();}if(j[g]==92&&!i){i=1;g=g+1|0;}c:{if(i){if(g>=k)break b;f.U(j[g]);i=0;}else if(j[g]!=36)f.U(j[g]);else{if(a.e7===null)a.e7=SB();d:{try{l=new BM;g=g+1|0;OD(l,e,g,1);m=BS(l);if(h==f.i())break d;a.e7.h1(f.d_(h,
f.i()));h=f.i();break d;}catch($$e){$$je=R($$e);if($$je instanceof B3){break a;}else{throw $$e;}}}try{a.e7.h1(BaW(a,m));n=Gh(a,m);h=h+n.i()|0;f.a(n);break c;}catch($$e){$$je=R($$e);if($$je instanceof B3){break a;}else{throw $$e;}}}}g=g+1|0;}G(C8());}G(W(B(101)));}
function AA_(a){a.iy=0;a.jv=a.e3.i();a.bJ.tG(a.e3,a.iy,a.jv);a.o4=0;a.m5=null;a.bJ.ht=(-1);return a;}
function ABB(a,b){return b.Bq(a.e3.d_(a.o4,a.e3.i()));}
function ACi(a,b){var c;c=A6b();AA_(a);while(Ga(a)){X2(a,c,b);}return (ABB(a,c)).b();}
function Gh(a,b){return a.bJ.BN(b);}
function JJ(a,b){var c,d;c=a.e3.i();if(b>=0&&b<=c){d=AAL(a,b);if(d>=0&&a.bJ.Ll()){a.bJ.Ms();return 1;}a.bJ.eb=(-1);return 0;}G(Bg(Ji(b)));}
function AAL(a,b){var c;a.bJ.fU();a.bJ.pL(1);a.bJ.GW(b);c=a.EJ.cC(b,a.e3,a.bJ);if(c==(-1))a.bJ.d5=1;return c;}
function Ga(a){var b,c;b=a.e3.i();if(!Pe(a))b=a.jv;if(a.bJ.eb>=0&&a.bJ.Cm()==1){a.bJ.eb=a.bJ.pO();if(a.bJ.pO()==a.bJ.ws()){c=a.bJ;c.eb=c.eb+1|0;}return a.bJ.eb<=b&&JJ(a,a.bJ.eb)?1:0;}return JJ(a,a.iy);}
function U3(a,b){return a.bJ.lA(b);}
function O$(a,b){return a.bJ.pa(b);}
function LS(a){return U3(a,0);}
function MW(a){return O$(a,0);}
function Pe(a){return a.bJ.lF();}
function AC2(a,b,c){var d,e,f,g,h;J(a);a.iy=(-1);a.jv=(-1);a.GP=b;a.EJ=b.rK;a.e3=c;a.iy=0;a.jv=a.e3.i();d=new NR;e=a.iy;f=a.jv;g=VC(b);h=ABO(b);Si(d,c,e,f,g,h,SD(b));a.bJ=d;}
var T5=D(BC);
function Bb_(){var a=new T5();A4B(a);return a;}
function A4B(a){CP(a);}
function ATj(a,b,c,d){var e,f,g,h,i;e=d.J();f=b+1|0;if(f>e){d.d5=1;return (-1);}g=c.f(b);if(BY(g)){h=b+2|0;if(h<=e){i=c.f(f);if(GA(g,i))return a.k.e(h,c,d);}}return a.k.e(f,c,d);}
function AHj(a){return B(587);}
function AWU(a,b){a.k=b;}
function A4v(a){return (-2147483602);}
function AWR(a,b){return 1;}
function ZI(){Q.call(this);this.NF=null;}
function Bbx(a){var b=new ZI();AQj(b,a);return b;}
function AQj(a,b){a.NF=b;Be(a);}
function AR2(a,b){return Ud(b);}
function O1(){var a=this;FN.call(a);a.Ae=0.0;a.y4=null;}
function Bcu(){var a=new O1();A0u(a);return a;}
function A0u(a){Lu(a);a.Ae=67.0;a.y4=S();}
function AGf(a){a.p8(1);}
function AQi(a,b){var c;c=a.ku/a.mb;a.jx.Kn(CG(a.k9),CG(a.jM),a.Ae,c);a.hq.BW(a.cp,(a.y4.M(a.cp)).fA(a.c7),a.ds);a.eI.ch(a.jx);G9(a.eI.c,a.hq.c);if(b){a.hQ.ch(a.eI);MX(a.hQ.c);a.rZ.AC(a.hQ);}}
function UO(){C.call(this);this.Ct=null;}
function A_9(a){var b=new UO();A03(b,a);return b;}
function A03(a,b){J(a);a.Ct=b;}
function A8E(a){A19(a.Ct);}
var VA=D(C3);
function A4b(a){var b=new VA();AGU(b,a);return b;}
function AGU(a,b){AAn(a,b);}
function AKN(a,b){return a.d1.p(EX(En(b)));}
function AS_(a){return ((((I()).a(B(336))).a(!a.rD?B(56):B(57))).a(a.d1.b())).b();}
var Vd=D(T);
function A_j(){var a=new Vd();APt(a);return a;}
function APt(a){Bo(a);}
function AUp(a){var b;b=BcQ(a);b.be=1;return b;}
function ME(){var a=this;BC.call(a);a.gq=null;a.uV=null;a.kZ=0;}
function A8t(a,b){var c=new ME();AU3(c,a,b);return c;}
function AU3(a,b,c){CP(a);a.gq=b;a.kZ=c;}
function AMp(a,b){a.k=b;}
function HB(a){if(a.uV===null)a.uV=Mf(a.gq);return a.uV;}
function APQ(a){return (((I()).a(B(588))).a(HB(a))).b();}
function AC_(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;e=d.J();f=0;g=Bc(3);h=(-1);i=(-1);if(b>=e)return (-1);j=b+1|0;k=c.f(b);l=AGV(k);if(l!==null){m=l.data;n=0;if(m.length!=a.kZ)return (-1);while(true){if(n>=a.kZ)return a.k.e(j,c,d);if(m[n]!=a.gq.data[n])break;n=n+1|0;}return (-1);}o=g.data;o[f]=k;p=k-4352|0;if(p>=0&&p<19){if(j<e){k=c.f(j);h=k-4449|0;}if(h>=0&&h<21){q=j+1|0;o[1]=k;if(q<e){k=c.f(q);i=k-4519|0;}if(i>=0&&i<28){r=q+1|0;o[2]=k;r=a.kZ==3&&o[0]==a.gq.data[0]&&o[1]==a.gq.data[1]&&o[2]==a.gq.data[2]
?a.k.e(r,c,d):(-1);return r;}r=a.kZ==2&&o[0]==a.gq.data[0]&&o[1]==a.gq.data[1]?a.k.e(q,c,d):(-1);return r;}return (-1);}return (-1);}
function AWS(a,b){var c,d;a:{if(b instanceof ME){c=b;if(!(HB(c)).z(HB(a))){d=0;break a;}}d=1;}return d;}
function ARr(a,b){return 1;}
var U9=D(T);
function BaG(){var a=new U9();A3S(a);return a;}
function A3S(a){Bo(a);}
function A0R(a){return (((CR()).bF(33,64)).bF(91,96)).bF(123,126);}
function Ky(){var a=this;C.call(a);a.fu=null;a.dQ=null;a.r4=0;a.Kz=0;a.um=0;a.kW=0;a.p2=0;a.tz=0;a.d4=null;}
var Bm1=null;function AIF(){AIF=N(Ky);A$L();}
function A2c(a,b,c){var d=new Ky();Xx(d,a,b,c);return d;}
function Xx(a,b,c,d){AIF();J(a);a.kW=0;a.p2=0;a.tz=(-1);a.d4=G$();a.Kz=b;a.fu=d;a.dQ=HX(Cf(a.fu.cO/4|0,c));a.dQ.c_();a.r4=BhM.i2();a.um=!b?35048:35044;QV(a);}
function AV8(a){return a.fu;}
function ARv(a){return (CU(a.dQ)*4|0)/a.fu.cO|0;}
function We(a){if(a.p2){BhM.fC(34962,BE(a.dQ),a.dQ,a.um);a.kW=0;}}
function AWp(a,b,c,d){a.kW=1;N$(b,a.dQ,d,c);a.dQ.cY(0);a.dQ.cl(d);We(a);}
function AQR(a,b,c){var d;d=BhN;d.Qs(a.tz);ABb(a,b,c);ABf(a,d);a.p2=1;}
function ABb(a,b,c){var d,e,f,g,h,i;d=!a.d4.bS?0:1;a:{e=CT(a.fu);if(d){if(c===null){f=0;while(d&&f<e){g=CB(a.fu,f);h=b.lW(g.er);d=h!=a.d4.b2(f)?0:1;f=f+1|0;}}else{i=c.data;d=i.length!=a.d4.bS?0:1;f=0;while(d){if(f>=e)break a;d=i[f]!=a.d4.b2(f)?0:1;f=f+1|0;}}}}b:{if(!d){BhL.c8(34962,a.r4);UQ(a,b);a.d4.K();f=0;while(true){if(f>=e)break b;g=CB(a.fu,f);if(c!==null){i=c.data;a.d4.iV(i[f]);}else a.d4.iV(b.lW(g.er));h=a.d4.b2(f);if(h>=0){b.lQ(h);b.ia(h,g.cI,g.hR,g.ij,a.fu.cO,g.cT);}f=f+1|0;}}}}
function UQ(a,b){var c,d,e;if(a.d4===null)return;c=CT(a.fu);d=0;while(d<c){e=a.d4.b2(d);if(e>=0)b.tM(e);d=d+1|0;}}
function ABf(a,b){if(a.kW){b.c8(34962,a.r4);a.dQ.cl(BE(a.dQ));b.fC(34962,BE(a.dQ),a.dQ,a.um);a.kW=0;}}
function AHp(a,b,c){var d;d=BhN;d.Qs(0);a.p2=0;}
function QV(a){AIF();Bm1.c0();BhN.UO(1,Bm1);a.tz=Bm1.K3();}
function A$L(){Bm1=Fk(1);}
var QL=D();
function ATg(b){$rt_putStderr(b);}
function A7A(b){$rt_putStdout(b);}
function Hh(){var a=this;C.call(a);a.bi=null;a.bn=null;a.dg=0.0;a.iI=0.0;a.j5=0.0;a.j0=null;}
function Bm2(){var a=new Hh();AZ_(a);return a;}
function AZ_(a){J(a);a.bi=Bp();a.bn=Su();a.j0=D0();}
function ALf(a){a.bi.K();a.bn.K();a.j5=0.0;}
function AEf(a){var b,c,d,e,f;b=Gf(a.bi.h+32|0);c=a.bi;d=0;e=c.h;while(d<e){f=c.l(d);b.U(f.eY&65535);d=d+1|0;}b.a(B(589));b.dD(a.j0);b.a(B(439));b.cB(a.dg);b.a(B(439));b.cB(a.iI);b.a(B(439));b.cB(a.j5);return b.b();}
var Mp=D(Dl);
function SS(){var a=this;Cl.call(a);a.oc=null;a.IF=null;}
function Bch(a,b){var c=new SS();A7S(c,a,b);return c;}
function A7S(a,b,c){a.IF=b;a.oc=c;D_(a);}
function A$r(a,b){a.oc.fz(b);}
function AL1(a,b){a.oc.dc(b);}
function AMG(a,b,c){return a.oc.dn(b,null);}
function AKL(a,b,c){return a.ug(b,c);}
function AA4(){Cl.call(this);this.N3=null;}
function Bax(a){var b=new AA4();AXL(b,a);return b;}
function AXL(a,b){a.N3=b;D_(a);}
function AT$(a,b){}
function AHb(a,b){}
function A8H(a,b,c){return 0;}
var FK=D(0);
function SO(){var a=this;C.call(a);a.nH=null;a.ua=null;a.n5=null;a.qW=null;}
function Bbc(a,b,c,d){var e=new SO();AI$(e,a,b,c,d);return e;}
function AI$(a,b,c,d,e){a.qW=b;a.nH=c;a.ua=d;a.n5=e;J(a);}
function AIi(a,b){var c,d;if(a.nH.readyState==4){if(a.nH.status!=200)a.ua.dc(a.n5);else{if(NN(a.qW))(Eh()).gg((((I()).a(B(590))).a(a.n5)).b());c=a.nH.response;d=(DT()).QE(c);a.ua.dn(a.n5,BfF(d));}a.qW.jY();}}
function A1b(a,b){a.dU(b);}
function SN(){var a=this;Cl.call(a);a.my=null;a.qs=null;a.w_=0;a.Dg=null;a.m1=null;}
function Bfx(a,b,c,d,e){var f=new SN();ARl(f,a,b,c,d,e);return f;}
function ARl(a,b,c,d,e,f){a.m1=b;a.my=c;a.qs=d;a.w_=e;a.Dg=f;D_(a);}
function A_f(a,b){a.my.fz(b);}
function A$a(a,b){a.my.dc(b);}
function AEY(a,b,c){var d,e,f;d=(P$(a.m1)).PV();if(a.qs!==null){e=a.qs;d.setAttribute("crossOrigin",$rt_ustr(e));}a.m1.nG();AF6(d,Bcc(a,b,d));if(!a.w_){f=$rt_ustr(b);d.src=f;}else{f=$rt_ustr((((((I()).a(B(591))).a(a.Dg)).a(B(592))).a(Sy(c))).b());d.src=f;}return 0;}
function ASP(a,b,c){return a.ug(b,c);}
function SM(){var a=this;C.call(a);a.y2=null;a.Gb=null;}
function BcM(a,b){var c=new SM();AVz(c,a,b);return c;}
function AVz(a,b,c){a.Gb=b;a.y2=c;J(a);}
function A7r(a,b){a.y2.fz(b.loaded);}
function AXt(a,b){a.dU(b);}
var Lo=D();
var Bhf=null;function BdK(){BdK=N(Lo);AU9();}
function AU9(){Bhf=Bc((Mh()).data.length);Bhf.data[BD(Bjk)]=1;Bhf.data[BD(Bjl)]=2;Bhf.data[BD(Bjm)]=3;Bhf.data[BD(Bjn)]=4;Bhf.data[BD(Bjo)]=5;}
function U1(){var a=this;C.call(a);a.pW=null;a.j1=null;a.At=null;a.p1=null;a.ox=null;a.sg=null;a.MV=null;}
function Bai(){var a=new U1();ADj(a);return a;}
function ADj(a){J(a);a.pW=Bp();a.j1=Bp();a.At=Bp();a.p1=Bp();a.ox=Bp();a.sg=Bp();a.MV=DE();}
function A8B(a,b){if(!a.sg.is(b,1))a.sg.F(b);}
function SU(){var a=this;C.call(a);a.nr=null;a.tD=null;a.n4=null;a.tx=null;}
function BbX(a,b,c,d){var e=new SU();AIW(e,a,b,c,d);return e;}
function AIW(a,b,c,d,e){a.tx=b;a.nr=c;a.tD=d;a.n4=e;J(a);}
function AYV(a,b){if(a.nr.readyState==4){if(a.nr.status!=200)a.tD.dc(a.n4);else{if(NN(a.tx))(Eh()).gg((((I()).a(B(590))).a(a.n4)).b());a.tD.dn(a.n4,$rt_str(a.nr.responseText));}a.tx.jY();}}
function AIa(a,b){a.dU(b);}
function Qs(){Bt.call(this);this.zu=0;}
function A79(a){var b=new Qs();AKR(b,a);return b;}
function AKR(a,b){Co(a);a.zu=b;}
function AWx(a,b,c,d){var e,f,g,h,i;e=b<d.J()?c.f(b):32;f=!b?32:c.f(b-1|0);g=!d.lF()?d.dI():0;h=e!=32&&!M0(a,e,b,g,c)?0:1;i=f!=32&&!M0(a,f,b-1|0,g,c)?0:1;return h^i^a.zu?(-1):a.k.e(b,c,d);}
function AWO(a,b){return 0;}
function A$X(a){return B(593);}
function M0(a,b,c,d,e){var f;if(!M8(b)&&b!=95){a:{if(F_(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=e.f(c);if(M8(f))return 0;if(F_(f)!=6)return 1;}}return 1;}return 0;}
function Fs(){var a=this;C.call(a);a.Ed=null;a.Ee=null;a.Eg=null;a.Eh=null;a.q7=null;a.gj=null;a.bw=null;a.bt=null;a.gL=0;a.pf=0;a.nc=0;a.f_=0;a.jR=0;a.hb=0;a.uB=0;a.t2=0;a.d$=0;a.tl=0;a.jj=0;a.fF=0;a.c1=null;a.k5=null;a.hF=null;a.rt=0;a.gh=0;a.pl=0.0;a.pE=0.0;a.n0=0.0;a.ot=0.0;a.lO=0;a.cr=null;a.oI=0;a.os=null;a.jP=null;a.jZ=null;a.mB=0;a.B1=null;}
var Bm3=null;var Bm4=null;var Bm5=null;var Bm6=null;function Lz(){Lz=N(Fs);AZD();}
function Bb3(){var a=new Fs();Vq(a);return a;}
function Vq(a){Lz();J(a);a.Ed=CL();a.Ee=CL();a.Eg=CL();a.Eh=CL();a.q7=D0();a.bw=Su();a.bt=AUS();a.k5=Bp();a.hF=A5m(Bij);a.rt=0;a.pl=0.0;a.pE=1.0;a.n0=0.0;a.ot=1.0;a.lO=0;a.oI=0;a.os=BF();a.jP=Pf();a.jZ=AL6();a.mB=(-1);a.B1=S();}
function RK(b){var c,d,e,f;Lz();c=Bp();if(Z(Br(b,O(1)),O(1)))c.F(EB(1,3,B(467)));if(Z(Br(b,O(2)),O(2)))c.F(EB(2,4,B(468)));if(Z(Br(b,O(4)),O(4)))c.F(EB(4,4,B(468)));if(Z(Br(b,O(8)),O(8)))c.F(EB(8,3,B(594)));if(Z(Br(b,O(16)),O(16)))c.F(EB(16,2,B(469)));d=Y(Fc,c.h);e=0;while(true){f=d.data;if(e>=f.length)break;f[e]=c.l(e);e=e+1|0;}return A0x(d);}
function ATz(a,b){a.QO(b,(-1));}
function A0F(a,b,c){var d,e;if(a.gj!==null)G(Qc(B(543)));a.gj=b;a.bw.K();a.bt.K();a.k5.K();a.pf=0;a.mB=(-1);a.nc=0;a.c1=null;a.gL=b.cO/4|0;if(!(a.cr!==null&&a.cr.data.length>=a.gL))a.cr=B_(a.gL);d=DX(b,1);if(d===null)G(U(B(595)));a.f_=d.cT/4|0;a.jR=d.cI;e=DX(b,8);a.hb=e===null?(-1):e.cT/4|0;e=DX(b,256);a.uB=e===null?(-1):e.cT/4|0;e=DX(b,128);a.t2=e===null?(-1):e.cT/4|0;e=DX(b,2);a.d$=e===null?(-1):e.cT/4|0;a.tl=e!==null?e.cI:0;e=DX(b,4);a.jj=e===null?(-1):e.cT/4|0;e=DX(b,16);a.fF=e===null?(-1):e.cT/4|0;a.xN(null);a.x3(null);a.Da(null);a.gh
=c;a.jZ.wK();}
function LG(a){if(a.c1!==null){a.jZ.Mx(a.c1.f0);(a.jZ.Gv(a.c1.g0)).el(0.5);a.c1.iS=a.c1.g0.IA();a.jZ.wK();a.c1.hk=a.nc;a.c1.g1=a.bt.c2-a.nc|0;a.nc=a.bt.c2;a.c1=null;}}
function AJ5(a,b,c){return a.LX(b,c,A8d());}
function AGs(a,b,c,d){if(a.gj===null)G(Qc(B(544)));LG(a);a.c1=d;a.c1.pM=b;a.c1.hW=c;a.gh=c;a.k5.F(a.c1);a.xN(null);a.x3(null);a.Da(null);return a.c1;}
function AK$(a,b){var c,d;LG(a);if(a.gj===null)G(U(B(544)));if(!NT(a.gj,b.gR()))G(U(B(596)));if(Cf(b.v2(),a.gL)<a.bw.Z)G(U((((((((I()).a(B(597))).j(b.v2())).a(B(598))).j(a.gL)).a(B(599))).j(a.bw.Z)).b()));if(b.w9()<a.bt.c2)G(U((((((I()).a(B(600))).j(b.w9())).a(B(599))).j(a.bt.c2)).b()));b.FC(a.bw.R,0,a.bw.Z);b.Ox(a.bt.hK,0,a.bt.c2);c=a.k5.bZ();while(c.bC()){d=c.bz();d.b7=b;}a.k5.K();a.gj=null;a.bw.K();a.bt.K();return b;}
function AEc(a){return a.Lc(Bd1(1,a.bw.Z/a.gL|0,a.bt.c2,a.gj));}
function AGH(a){return a.gj;}
function AQK(a){return a.gh;}
function AVC(a,b){var c,d;c=a.hF;d=b===null?0:1;a.rt=d;if(!d){Bv();b=Bij;}c.eP(b);}
function AEt(a,b,c,d,e){a.pl=b;a.n0=c;a.pE=d-b;a.ot=e-c;a.lO=DD(b)&&DD(c)&&Dj(d,1.0)&&Dj(e,1.0)?0:1;}
function AHq(a,b){if(b!==null){a.lO=1;a.ML(b.Rx(),b.R7(),b.Te(),b.Q_());}else{a.lO=0;a.n0=0.0;a.pl=0.0;a.ot=1.0;a.pE=1.0;}}
function AOU(a,b){a.oI=b===null?0:1;if(!a.oI){a.os.fv();a.jP.Ap();}else{a.os.ch(b);((a.jP.D0(b)).CK()).Aw();}}
function AIn(a,b){a.bw.DZ(Cf(a.gL,b));}
function AXr(a,b){a.bt.OZ(b);}
function ANU(a,b){if(!a.gh)a.hl(4*b|0);else if(a.gh!=1)a.hl(6*b|0);else a.hl(8*b|0);}
function AJk(a){return a.mB<<16>>16;}
function ACT(b,c,d,e){var f,g,h,i,j,k,l;Lz();if(d>2){f=b.data;g=Bm5;h=f[c];i=c+1|0;j=f[i];k=c+2|0;(g.I(h,j,f[k])).kK(e);f[c]=Bm5.n;f[i]=Bm5.o;f[k]=Bm5.q;}else if(d<=1){f=b.data;f[c]=((Bm5.I(f[c],0.0,0.0)).kK(e)).n;}else{f=b.data;g=Bm5;l=f[c];k=c+1|0;(g.I(l,f[k],0.0)).kK(e);f[c]=Bm5.n;f[k]=Bm5.o;}}
function Iz(b,c,d,e){var f,g,h,i,j,k;Lz();if(d>2){f=b.data;g=Bm5;h=f[c];i=c+1|0;j=f[i];k=c+2|0;((g.I(h,j,f[k])).qT(e)).bU();f[c]=Bm5.n;f[i]=Bm5.o;f[k]=Bm5.q;}else if(d<=1){f=b.data;f[c]=(((Bm5.I(f[c],0.0,0.0)).qT(e)).bU()).n;}else{f=b.data;g=Bm5;j=f[c];i=c+1|0;((g.I(j,f[i],0.0)).qT(e)).bU();f[c]=Bm5.n;f[i]=Bm5.o;}}
function RQ(a,b,c){var d,e,f,g,h,i,j;d=a.bw.Z;a.bw.rF(b,c,a.gL);e=a.pf;a.pf=e+1|0;a.mB=e;if(a.oI){ACT(a.bw.R,d+a.f_|0,a.jR,a.os);if(a.hb>=0)Iz(a.bw.R,d+a.hb|0,3,a.jP);if(a.uB>=0)Iz(a.bw.R,d+a.uB|0,3,a.jP);if(a.t2>=0)Iz(a.bw.R,d+a.t2|0,3,a.jP);}f=a.bw.R.data[d+a.f_|0];g=a.jR<=1?0.0:a.bw.R.data[(d+a.f_|0)+1|0];h=a.jR<=2?0.0:a.bw.R.data[(d+a.f_|0)+2|0];a.jZ.NB(f,g,h);if(a.rt){if(a.d$>=0){i=a.bw.R.data;j=d+a.d$|0;i[j]=i[j]*a.hF.s;i=a.bw.R.data;j=(d+a.d$|0)+1|0;i[j]=i[j]*a.hF.r;i=a.bw.R.data;j=(d+a.d$|0)+2|0;i[j]
=i[j]*a.hF.t;if(a.tl>3){i=a.bw.R.data;j=(d+a.d$|0)+3|0;i[j]=i[j]*a.hF.G;}}else if(a.jj>=0){Zn(a.q7,a.bw.R.data[d+a.jj|0]);a.bw.R.data[d+a.jj|0]=(a.q7.I5(a.hF)).nv();}}if(a.lO&&a.fF>=0){a.bw.R.data[d+a.fF|0]=a.pl+a.pE*a.bw.R.data[d+a.fF|0];a.bw.R.data[(d+a.fF|0)+1|0]=a.n0+a.ot*a.bw.R.data[(d+a.fF|0)+1|0];}}
function AYr(a,b,c,d,e){if(a.pf>65535)G(U(B(601)));a.cr.data[a.f_]=b.n;if(a.jR>1)a.cr.data[a.f_+1|0]=b.o;if(a.jR>2)a.cr.data[a.f_+2|0]=b.q;if(a.hb>=0){if(c===null)c=(a.B1.M(b)).bU();a.cr.data[a.hb]=c.n;a.cr.data[a.hb+1|0]=c.o;a.cr.data[a.hb+2|0]=c.q;}if(a.d$>=0){if(d===null){Bv();d=Bij;}a.cr.data[a.d$]=d.s;a.cr.data[a.d$+1|0]=d.r;a.cr.data[a.d$+2|0]=d.t;if(a.tl>3)a.cr.data[a.d$+3|0]=d.G;}else if(a.jj>0){if(d===null){Bv();d=Bij;}a.cr.data[a.jj]=d.nv();}if(e!==null&&a.fF>=0){a.cr.data[a.fF]=e.eU;a.cr.data[a.fF
+1|0]=e.eT;}RQ(a,a.cr,0);return a.mB<<16>>16;}
function AMs(a,b){return a.KI(!b.q0?null:b.mW,!b.t1?null:b.ph,!b.rf?null:b.oF,!b.pp?null:b.kc);}
function A1j(a,b,c,d,e){a.hl(4);a.bt.cd(b);a.bt.cd(c);a.bt.cd(d);a.bt.cd(e);}
function A1o(a,b,c,d,e,f,g){a.hl(6);a.bt.cd(b);a.bt.cd(c);a.bt.cd(d);a.bt.cd(e);a.bt.cd(f);a.bt.cd(g);}
function AWJ(a,b,c,d,e,f,g,h,i){a.hl(8);a.bt.cd(b);a.bt.cd(c);a.bt.cd(d);a.bt.cd(e);a.bt.cd(f);a.bt.cd(g);a.bt.cd(h);a.bt.cd(i);}
function AOM(a,b,c,d,e){if(a.gh==4)a.On(b,c,d,d,e,b);else if(a.gh==1)a.EF(b,c,c,d,d,e,e,b);else{if(a.gh)G(U(B(602)));a.Hd(b,c,d,e);}}
function A6j(a,b,c,d,e){a.ul(4);a.d2(a.dH(b),a.dH(c),a.dH(d),a.dH(e));}
function ALs(a,b,c,d,e,f){var g,h,i,j,k;g=(a.Ed.dK(b,f,null,null)).n3(0.0,1.0);h=(a.Ee.dK(c,f,null,null)).n3(1.0,1.0);i=a.Eg;j=null;k=null;i=(i.dK(d,f,j,k)).n3(1.0,0.0);k=(a.Eh.dK(e,f,null,null)).n3(0.0,0.0);a.Nt(g,h,i,k);}
function AHg(a,b,c,d){A6e(a,b,c,d);}
function AZD(){Bm3=AUS();Bm4=Su();Bm5=S();Bm6=null;}
function Hb(){BI.call(this);this.PE=null;}
var Bm7=Ba;function Bbw(){Bbw=N(Hb);AIQ();}
function AIQ(){Bm7=BO(B(603));}
function ST(){var a=this;C.call(a);a.lr=null;a.up=null;a.oo=null;a.pC=null;}
function BcA(a,b,c,d){var e=new ST();A5d(e,a,b,c,d);return e;}
function A5d(a,b,c,d,e){a.pC=b;a.lr=c;a.up=d;a.oo=e;J(a);}
function AQh(a,b){var c,d,e,f,g,h;if(a.lr.readyState==4){c=1;if(a.lr.status!=200)a.up.dc(a.oo);else{if(NN(a.pC))(Eh()).gg((((I()).a(B(604))).a(a.oo)).b());d=a.lr.response;e=(P$(a.pC)).hs();f=e.pe();g=f.createElement("script");h=f.createTextNode(d);g.appendChild(h);f.body.appendChild(g);c=a.up.dn(a.oo,$rt_str(a.lr.responseText))?0:1;}if(c)a.pC.jY();}}
function AZe(a,b){a.dU(b);}
var Jc=D(T);
function BbR(){var a=new Jc();Rn(a);return a;}
function Rn(a){Bo(a);}
function YP(a){return ((CR()).bF(9,13)).cE(32);}
var Pl=D(DV);
function BeB(){var a=new Pl();AN$(a);return a;}
function AN$(a){Jh(a);}
var Pm=D(DV);
function Bau(){var a=new Pm();A0I(a);return a;}
function A0I(a){Jh(a);}
function Y1(a){return S();}
function ALS(a){return Y1(a);}
var AAA=D();
function N$(b,c,d,e){var f;f=AQb(c);f.c0();c.cY(0);f.wt(b,e,d);c.cY(0);if(!(c instanceof Ft))c.cl(d);else c.cl(d<<2);}
function AQb(b){var c;c=null;if(b instanceof Ft)c=b.sN();else if(b instanceof DU)c=b;if(c!==null)return c;G(U(B(605)));}
function HX(b){var c;if(!HY())return AU7(B_(b));c=FV(b*4|0);FH(c,EV());return c.sN();}
function MK(b){var c;if(!HY())return Ht(Ci(b));c=FV(b);FH(c,EV());return c;}
function AAN(b){var c;if(!HY())return A3r(MV(b));c=FV(b*2|0);FH(c,EV());return c.v1();}
function Fk(b){var c;if(!HY())return A0o(Bc(b));c=FV(b*4|0);FH(c,EV());return c.yC();}
var KN=D(0);
var NK=D(0);
var Kc=D(0);
var Ph=D();
function AMc(a,b,c){a.Wk($rt_str(b),Gk(c,"handleEvent"));}
function AMH(a,b,c){a.Vy($rt_str(b),Gk(c,"handleEvent"));}
function AED(a,b){return a.Mc(b);}
function AN_(a,b,c,d){a.Rc($rt_str(b),Gk(c,"handleEvent"),d?1:0);}
function ASe(a,b){return !!a.Wn(b);}
function AF3(a){return a.OW();}
function ADo(a,b,c,d){a.Sv($rt_str(b),Gk(c,"handleEvent"),d?1:0);}
function Yw(){var a=this;C.call(a);a.gS=null;a.FA=null;}
function Pf(){var a=new Yw();ALH(a);return a;}
function ALH(a){J(a);a.gS=B_(9);a.FA=B_(9);a.Ap();}
function A4t(a){var b,c;b=a.gS;c=b.data;c[0]=1.0;c[1]=0.0;c[2]=0.0;c[3]=0.0;c[4]=1.0;c[5]=0.0;c[6]=0.0;c[7]=0.0;c[8]=1.0;return a;}
function AK2(a){var b,c;b=a.gS;c=b.data;return c[0]*c[4]*c[8]+c[3]*c[7]*c[2]+c[6]*c[1]*c[5]-c[0]*c[7]*c[5]-c[3]*c[1]*c[8]-c[6]*c[4]*c[2];}
function A5r(a){var b,c,d,e,f,g;b=a.HO();if(b===0.0)G(U(B(606)));c=1.0/b;d=a.FA;e=d.data;f=a.gS;g=f.data;e[0]=g[4]*g[8]-g[5]*g[7];e[1]=g[2]*g[7]-g[1]*g[8];e[2]=g[1]*g[5]-g[2]*g[4];e[3]=g[5]*g[6]-g[3]*g[8];e[4]=g[0]*g[8]-g[2]*g[6];e[5]=g[2]*g[3]-g[0]*g[5];e[6]=g[3]*g[7]-g[4]*g[6];e[7]=g[1]*g[6]-g[0]*g[7];e[8]=g[0]*g[4]-g[1]*g[3];g[0]=c*e[0];g[1]=c*e[1];g[2]=c*e[2];g[3]=c*e[3];g[4]=c*e[4];g[5]=c*e[5];g[6]=c*e[6];g[7]=c*e[7];g[8]=c*e[8];return a;}
function A$U(a,b){var c,d;c=a.gS;d=c.data;d[0]=b.c.data[0];d[1]=b.c.data[1];d[2]=b.c.data[2];d[3]=b.c.data[4];d[4]=b.c.data[5];d[5]=b.c.data[6];d[6]=b.c.data[8];d[7]=b.c.data[9];d[8]=b.c.data[10];return a;}
function AUg(a){var b,c,d,e,f,g,h,i;b=a.gS;c=b.data;d=c[1];e=c[2];f=c[3];g=c[5];h=c[6];i=c[7];c[3]=d;c[6]=e;c[1]=f;c[7]=g;c[2]=h;c[5]=i;return a;}
function T6(){var a=this;G4.call(a);a.Cb=null;a.sE=null;a.xx=null;}
function A_6(a,b){var c=new T6();ARq(c,a,b);return c;}
function ARq(a,b,c){RY(a);a.Cb=b;a.sE=c;a.xx=A_w();}
function A1v(a,b){var c,d,e;c=AHr();d=!!b.xk;c.alpha=d;d=!!b.Fm;c.antialias=d;d=!!b.AB;c.stencil=d;d=!!b.D1;c.premultipliedAlpha=d;d=!!b.FK;c.preserveDrawingBuffer=d;e=a.sE;d=e.getContext("webgl",c);return d;}
function A1f(a){return a.sE;}
function ATW(a){return AY1();}
function A3p(a){return a.Cb;}
function A06(a){var b;b=(a.hs()).pe();return b.createElement("img");}
function A8g(a){return new XMLHttpRequest();}
function A9Y(a){return Ben();}
function A9w(a){return a.xx;}
var Pd=D();
function Cu(){C.call(this);this.c=null;}
var Bm8=null;var Bm9=null;var Bm$=null;var Bm_=null;var Bna=null;var Bnb=null;var Bnc=null;var Bnd=null;var Bne=null;var Bnf=null;var Bng=null;function CC(){CC=N(Cu);AVo();}
function BF(){var a=new Cu();Ti(a);return a;}
function Ti(a){CC();J(a);a.c=B_(16);a.c.data[0]=1.0;a.c.data[5]=1.0;a.c.data[10]=1.0;a.c.data[15]=1.0;}
function A$5(a,b){return a.En(b.c);}
function AFv(a,b){var c;c=b.data;a.c.data[0]=c[0];a.c.data[1]=c[1];a.c.data[2]=c[2];a.c.data[3]=c[3];a.c.data[4]=c[4];a.c.data[5]=c[5];a.c.data[6]=c[6];a.c.data[7]=c[7];a.c.data[8]=c[8];a.c.data[9]=c[9];a.c.data[10]=c[10];a.c.data[11]=c[11];a.c.data[12]=c[12];a.c.data[13]=c[13];a.c.data[14]=c[14];a.c.data[15]=c[15];return a;}
function A9x(a,b){return a.HL(b.dk,b.di,b.dj,b.d7);}
function AZH(a,b,c,d,e){return a.Ns(0.0,0.0,0.0,b,c,d,e);}
function A59(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t;i=e*2.0;j=f*2.0;k=g*2.0;l=h*i;m=h*j;n=h*k;o=e*i;p=e*j;q=e*k;r=f*j;s=f*k;t=g*k;a.c.data[0]=1.0-(r+t);a.c.data[4]=p-n;a.c.data[8]=q+m;a.c.data[12]=b;a.c.data[1]=p+n;a.c.data[5]=1.0-(o+t);a.c.data[9]=s-l;a.c.data[13]=c;a.c.data[2]=q-m;a.c.data[6]=s+l;a.c.data[10]=1.0-(o+r);a.c.data[14]=d;a.c.data[3]=0.0;a.c.data[7]=0.0;a.c.data[11]=0.0;a.c.data[15]=1.0;return a;}
function AWj(a,b,c,d){return a.JE(b.n,b.o,b.q,c.dk,c.di,c.dj,c.d7,d.n,d.o,d.q);}
function ATa(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o,p,q,r,s,t,u,v,w;l=e*2.0;m=f*2.0;n=g*2.0;o=h*l;p=h*m;q=h*n;r=e*l;s=e*m;t=e*n;u=f*m;v=f*n;w=g*n;a.c.data[0]=i*(1.0-(u+w));a.c.data[4]=j*(s-q);a.c.data[8]=k*(t+p);a.c.data[12]=b;a.c.data[1]=i*(s+q);a.c.data[5]=j*(1.0-(r+w));a.c.data[9]=k*(v-o);a.c.data[13]=c;a.c.data[2]=i*(t-p);a.c.data[6]=j*(v+o);a.c.data[10]=k*(1.0-(r+u));a.c.data[14]=d;a.c.data[3]=0.0;a.c.data[7]=0.0;a.c.data[11]=0.0;a.c.data[15]=1.0;return a;}
function AMZ(a,b){CC();Bm8.data[0]=a.c.data[0]*b.c.data[0]+a.c.data[4]*b.c.data[1]+a.c.data[8]*b.c.data[2]+a.c.data[12]*b.c.data[3];Bm8.data[4]=a.c.data[0]*b.c.data[4]+a.c.data[4]*b.c.data[5]+a.c.data[8]*b.c.data[6]+a.c.data[12]*b.c.data[7];Bm8.data[8]=a.c.data[0]*b.c.data[8]+a.c.data[4]*b.c.data[9]+a.c.data[8]*b.c.data[10]+a.c.data[12]*b.c.data[11];Bm8.data[12]=a.c.data[0]*b.c.data[12]+a.c.data[4]*b.c.data[13]+a.c.data[8]*b.c.data[14]+a.c.data[12]*b.c.data[15];Bm8.data[1]=a.c.data[1]*b.c.data[0]+a.c.data[5]
*b.c.data[1]+a.c.data[9]*b.c.data[2]+a.c.data[13]*b.c.data[3];Bm8.data[5]=a.c.data[1]*b.c.data[4]+a.c.data[5]*b.c.data[5]+a.c.data[9]*b.c.data[6]+a.c.data[13]*b.c.data[7];Bm8.data[9]=a.c.data[1]*b.c.data[8]+a.c.data[5]*b.c.data[9]+a.c.data[9]*b.c.data[10]+a.c.data[13]*b.c.data[11];Bm8.data[13]=a.c.data[1]*b.c.data[12]+a.c.data[5]*b.c.data[13]+a.c.data[9]*b.c.data[14]+a.c.data[13]*b.c.data[15];Bm8.data[2]=a.c.data[2]*b.c.data[0]+a.c.data[6]*b.c.data[1]+a.c.data[10]*b.c.data[2]+a.c.data[14]*b.c.data[3];Bm8.data[6]
=a.c.data[2]*b.c.data[4]+a.c.data[6]*b.c.data[5]+a.c.data[10]*b.c.data[6]+a.c.data[14]*b.c.data[7];Bm8.data[10]=a.c.data[2]*b.c.data[8]+a.c.data[6]*b.c.data[9]+a.c.data[10]*b.c.data[10]+a.c.data[14]*b.c.data[11];Bm8.data[14]=a.c.data[2]*b.c.data[12]+a.c.data[6]*b.c.data[13]+a.c.data[10]*b.c.data[14]+a.c.data[14]*b.c.data[15];Bm8.data[3]=a.c.data[3]*b.c.data[0]+a.c.data[7]*b.c.data[1]+a.c.data[11]*b.c.data[2]+a.c.data[15]*b.c.data[3];Bm8.data[7]=a.c.data[3]*b.c.data[4]+a.c.data[7]*b.c.data[5]+a.c.data[11]*b.c.data[6]
+a.c.data[15]*b.c.data[7];Bm8.data[11]=a.c.data[3]*b.c.data[8]+a.c.data[7]*b.c.data[9]+a.c.data[11]*b.c.data[10]+a.c.data[15]*b.c.data[11];Bm8.data[15]=a.c.data[3]*b.c.data[12]+a.c.data[7]*b.c.data[13]+a.c.data[11]*b.c.data[14]+a.c.data[15]*b.c.data[15];return a.En(Bm8);}
function AHA(a){a.c.data[0]=1.0;a.c.data[4]=0.0;a.c.data[8]=0.0;a.c.data[12]=0.0;a.c.data[1]=0.0;a.c.data[5]=1.0;a.c.data[9]=0.0;a.c.data[13]=0.0;a.c.data[2]=0.0;a.c.data[6]=0.0;a.c.data[10]=1.0;a.c.data[14]=0.0;a.c.data[3]=0.0;a.c.data[7]=0.0;a.c.data[11]=0.0;a.c.data[15]=1.0;return a;}
function A6H(a){return a.c.data[0]*a.c.data[5]*a.c.data[10]+a.c.data[4]*a.c.data[9]*a.c.data[2]+a.c.data[8]*a.c.data[1]*a.c.data[6]-a.c.data[0]*a.c.data[9]*a.c.data[6]-a.c.data[4]*a.c.data[1]*a.c.data[10]-a.c.data[8]*a.c.data[5]*a.c.data[2];}
function AEU(a,b,c,d,e){var f,g,h,i,j;a.fv();f=1.0/AQx(d*0.017453292519943295/2.0);g=c+b;h=b-c;i=g/h;j=2.0*c*b/h;a.c.data[0]=f/e;a.c.data[1]=0.0;a.c.data[2]=0.0;a.c.data[3]=0.0;a.c.data[4]=0.0;a.c.data[5]=f;a.c.data[6]=0.0;a.c.data[7]=0.0;a.c.data[8]=0.0;a.c.data[9]=0.0;a.c.data[10]=i;a.c.data[11]=(-1.0);a.c.data[12]=0.0;a.c.data[13]=0.0;a.c.data[14]=j;a.c.data[15]=0.0;return a;}
function A3w(a,b,c,d,e){a.y9(b,b+d,c,c+e,0.0,1.0);return a;}
function A37(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a.fv();h=c-b;i=2.0/h;j=e-d;k=2.0/j;l=g-f;m=(-2.0)/l;n= -(c+b)/h;o= -(e+d)/j;p= -(g+f)/l;a.c.data[0]=i;a.c.data[1]=0.0;a.c.data[2]=0.0;a.c.data[3]=0.0;a.c.data[4]=0.0;a.c.data[5]=k;a.c.data[6]=0.0;a.c.data[7]=0.0;a.c.data[8]=0.0;a.c.data[9]=0.0;a.c.data[10]=m;a.c.data[11]=0.0;a.c.data[12]=n;a.c.data[13]=o;a.c.data[14]=p;a.c.data[15]=1.0;return a;}
function AFZ(a,b,c,d){a.fv();a.c.data[12]=b;a.c.data[13]=c;a.c.data[14]=d;return a;}
function AV5(a,b,c){if(c===0.0){a.fv();return a;}CC();return a.Gi(Bm9.wl(b,c));}
function AH8(a,b,c){CC();(Bm_.M(b)).bU();(Bna.M(b)).bU();(Bna.iz(c)).bU();((Bnb.M(Bna)).iz(Bm_)).bU();a.fv();a.c.data[0]=Bna.n;a.c.data[4]=Bna.o;a.c.data[8]=Bna.q;a.c.data[1]=Bnb.n;a.c.data[5]=Bnb.o;a.c.data[9]=Bnb.q;a.c.data[2]= -Bm_.n;a.c.data[6]= -Bm_.o;a.c.data[10]= -Bm_.q;return a;}
function AZy(a,b,c,d){CC();(Bnc.M(c)).gk(b);a.Qr(Bnc,d);a.hA(Bnd.IJ( -b.n, -b.o, -b.q));return a;}
function AE_(a,b){b.n=a.c.data[12];b.o=a.c.data[13];b.q=a.c.data[14];return b;}
function OX(b,c){var d,e,f,g;CC();d=c.data;e=b.data;f=B_(16);g=f.data;g[0]=e[0]*d[0]+e[4]*d[1]+e[8]*d[2]+e[12]*d[3];g[4]=e[0]*d[4]+e[4]*d[5]+e[8]*d[6]+e[12]*d[7];g[8]=e[0]*d[8]+e[4]*d[9]+e[8]*d[10]+e[12]*d[11];g[12]=e[0]*d[12]+e[4]*d[13]+e[8]*d[14]+e[12]*d[15];g[1]=e[1]*d[0]+e[5]*d[1]+e[9]*d[2]+e[13]*d[3];g[5]=e[1]*d[4]+e[5]*d[5]+e[9]*d[6]+e[13]*d[7];g[9]=e[1]*d[8]+e[5]*d[9]+e[9]*d[10]+e[13]*d[11];g[13]=e[1]*d[12]+e[5]*d[13]+e[9]*d[14]+e[13]*d[15];g[2]=e[2]*d[0]+e[6]*d[1]+e[10]*d[2]+e[14]*d[3];g[6]=e[2]*d[4]
+e[6]*d[5]+e[10]*d[6]+e[14]*d[7];g[10]=e[2]*d[8]+e[6]*d[9]+e[10]*d[10]+e[14]*d[11];g[14]=e[2]*d[12]+e[6]*d[13]+e[10]*d[14]+e[14]*d[15];g[3]=e[3]*d[0]+e[7]*d[1]+e[11]*d[2]+e[15]*d[3];g[7]=e[3]*d[4]+e[7]*d[5]+e[11]*d[6]+e[15]*d[7];g[11]=e[3]*d[8]+e[7]*d[9]+e[11]*d[10]+e[15]*d[11];g[15]=e[3]*d[12]+e[7]*d[13]+e[11]*d[14]+e[15]*d[15];X(f,0,b,0,16);}
function Uh(b){var c;CC();c=b.data;return c[3]*c[6]*c[9]*c[12]-c[2]*c[7]*c[9]*c[12]-c[3]*c[5]*c[10]*c[12]+c[1]*c[7]*c[10]*c[12]+c[2]*c[5]*c[11]*c[12]-c[1]*c[6]*c[11]*c[12]-c[3]*c[6]*c[8]*c[13]+c[2]*c[7]*c[8]*c[13]+c[3]*c[4]*c[10]*c[13]-c[0]*c[7]*c[10]*c[13]-c[2]*c[4]*c[11]*c[13]+c[0]*c[6]*c[11]*c[13]+c[3]*c[5]*c[8]*c[14]-c[1]*c[7]*c[8]*c[14]-c[3]*c[4]*c[9]*c[14]+c[0]*c[7]*c[9]*c[14]+c[1]*c[4]*c[11]*c[14]-c[0]*c[5]*c[11]*c[14]-c[2]*c[5]*c[8]*c[15]+c[1]*c[6]*c[8]*c[15]+c[2]*c[4]*c[9]*c[15]-c[0]*c[6]*c[9]*c[15]
-c[1]*c[4]*c[10]*c[15]+c[0]*c[5]*c[10]*c[15];}
function QO(b){var c,d,e,f,g;CC();c=B_(16);d=Uh(b);if(d===0.0)return 0;e=c.data;f=b.data;e[0]=f[9]*f[14]*f[7]-f[13]*f[10]*f[7]+f[13]*f[6]*f[11]-f[5]*f[14]*f[11]-f[9]*f[6]*f[15]+f[5]*f[10]*f[15];e[4]=f[12]*f[10]*f[7]-f[8]*f[14]*f[7]-f[12]*f[6]*f[11]+f[4]*f[14]*f[11]+f[8]*f[6]*f[15]-f[4]*f[10]*f[15];e[8]=f[8]*f[13]*f[7]-f[12]*f[9]*f[7]+f[12]*f[5]*f[11]-f[4]*f[13]*f[11]-f[8]*f[5]*f[15]+f[4]*f[9]*f[15];e[12]=f[12]*f[9]*f[6]-f[8]*f[13]*f[6]-f[12]*f[5]*f[10]+f[4]*f[13]*f[10]+f[8]*f[5]*f[14]-f[4]*f[9]*f[14];e[1]=f[13]
*f[10]*f[3]-f[9]*f[14]*f[3]-f[13]*f[2]*f[11]+f[1]*f[14]*f[11]+f[9]*f[2]*f[15]-f[1]*f[10]*f[15];e[5]=f[8]*f[14]*f[3]-f[12]*f[10]*f[3]+f[12]*f[2]*f[11]-f[0]*f[14]*f[11]-f[8]*f[2]*f[15]+f[0]*f[10]*f[15];e[9]=f[12]*f[9]*f[3]-f[8]*f[13]*f[3]-f[12]*f[1]*f[11]+f[0]*f[13]*f[11]+f[8]*f[1]*f[15]-f[0]*f[9]*f[15];e[13]=f[8]*f[13]*f[2]-f[12]*f[9]*f[2]+f[12]*f[1]*f[10]-f[0]*f[13]*f[10]-f[8]*f[1]*f[14]+f[0]*f[9]*f[14];e[2]=f[5]*f[14]*f[3]-f[13]*f[6]*f[3]+f[13]*f[2]*f[7]-f[1]*f[14]*f[7]-f[5]*f[2]*f[15]+f[1]*f[6]*f[15];e[6]
=f[12]*f[6]*f[3]-f[4]*f[14]*f[3]-f[12]*f[2]*f[7]+f[0]*f[14]*f[7]+f[4]*f[2]*f[15]-f[0]*f[6]*f[15];e[10]=f[4]*f[13]*f[3]-f[12]*f[5]*f[3]+f[12]*f[1]*f[7]-f[0]*f[13]*f[7]-f[4]*f[1]*f[15]+f[0]*f[5]*f[15];e[14]=f[12]*f[5]*f[2]-f[4]*f[13]*f[2]-f[12]*f[1]*f[6]+f[0]*f[13]*f[6]+f[4]*f[1]*f[14]-f[0]*f[5]*f[14];e[3]=f[9]*f[6]*f[3]-f[5]*f[10]*f[3]-f[9]*f[2]*f[7]+f[1]*f[10]*f[7]+f[5]*f[2]*f[11]-f[1]*f[6]*f[11];e[7]=f[4]*f[10]*f[3]-f[8]*f[6]*f[3]+f[8]*f[2]*f[7]-f[0]*f[10]*f[7]-f[4]*f[2]*f[11]+f[0]*f[6]*f[11];e[11]=f[8]*f[5]
*f[3]-f[4]*f[9]*f[3]-f[8]*f[1]*f[7]+f[0]*f[9]*f[7]+f[4]*f[1]*f[11]-f[0]*f[5]*f[11];e[15]=f[4]*f[9]*f[2]-f[8]*f[5]*f[2]+f[8]*f[1]*f[6]-f[0]*f[9]*f[6]-f[4]*f[1]*f[10]+f[0]*f[5]*f[10];g=1.0/d;f[0]=e[0]*g;f[4]=e[4]*g;f[8]=e[8]*g;f[12]=e[12]*g;f[1]=e[1]*g;f[5]=e[5]*g;f[9]=e[9]*g;f[13]=e[13]*g;f[2]=e[2]*g;f[6]=e[6]*g;f[10]=e[10]*g;f[14]=e[14]*g;f[3]=e[3]*g;f[7]=e[7]*g;f[11]=e[11]*g;f[15]=e[15]*g;return 1;}
function YU(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;CC();e=b.data;f=c.data;g=d+0|0;h=f[g]*e[3];i=d+1|0;j=h+f[i]*e[7];k=d+2|0;l=1.0/(j+f[k]*e[11]+e[15]);m=(f[g]*e[0]+f[i]*e[4]+f[k]*e[8]+e[12])*l;n=(f[g]*e[1]+f[i]*e[5]+f[k]*e[9]+e[13])*l;o=(f[g]*e[2]+f[i]*e[6]+f[k]*e[10]+e[14])*l;f[g]=m;f[i]=n;f[k]=o;}
function G9(b,c){CC();OX(b,c);}
function TU(b,c,d,e,f){var g;CC();g=0;while(g<e){YU(b,c,d);d=d+f|0;g=g+1|0;}}
function MX(b){CC();return QO(b);}
function A16(a,b,c,d){CC();Bm8.data[0]=1.0;Bm8.data[4]=0.0;Bm8.data[8]=0.0;Bm8.data[12]=b;Bm8.data[1]=0.0;Bm8.data[5]=1.0;Bm8.data[9]=0.0;Bm8.data[13]=c;Bm8.data[2]=0.0;Bm8.data[6]=0.0;Bm8.data[10]=1.0;Bm8.data[14]=d;Bm8.data[3]=0.0;Bm8.data[7]=0.0;Bm8.data[11]=0.0;Bm8.data[15]=1.0;G9(a.c,Bm8);return a;}
function AVS(a,b,c){if(c===0.0)return a;CC();Bm9.wl(b,c);return a.L_(Bm9);}
function APF(a,b){CC();b.JW(Bm8);G9(a.c,Bm8);return a;}
function A4U(a){var b,c;a:{b:{if(!Dj(a.c.data[0],1.0))break b;if(!Dj(a.c.data[5],1.0))break b;if(!Dj(a.c.data[10],1.0))break b;b=a.c.data[4];if(!DD(b))break b;if(!DD(a.c.data[8]))break b;if(!DD(a.c.data[1]))break b;if(!DD(a.c.data[9]))break b;b=a.c.data[2];if(!DD(b))break b;if(DD(a.c.data[6])){c=0;break a;}}c=1;}return c;}
function AVo(){Bm8=B_(16);Bm9=AVT();Bm$=AVT();Bm_=S();Bna=S();Bnb=S();Bnc=S();Bnd=BF();Bne=S();Bnf=S();Bng=S();}
var ACS=D(Bm);
function A9b(){var a=new ACS();A5h(a);return a;}
function A5h(a){Cx(a);}
var AAd=D(Ed);
function BeZ(a,b,c){var d=new AAd();AZI(d,a,b,c);return d;}
function AZI(a,b,c,d){Np(a,b,c,d);}
function AEo(a,b,c,d){var e;e=a.k.e(b,c,d);if(e>=0)return e;return a.Y.e(b,c,d);}
var AAw=D(T);
function Bfe(){var a=new AAw();AE9(a);return a;}
function AE9(a){Bo(a);}
function AKo(a){return A_T(a);}
function ZN(){var a=this;C.call(a);a.Bm=0;a.EQ=0;a.D_=null;}
function BaW(a,b){var c=new ZN();AHi(c,a,b);return c;}
function AHi(a,b,c){a.D_=b;a.EQ=c;J(a);a.Bm=a.EQ;}
function AL5(a){return Gh(a.D_,a.Bm);}
function Gz(){C.call(this);this.eX=null;}
var Bhg=null;var Bnh=null;var Bni=null;function EH(){EH=N(Gz);AM_();}
function AXf(){var a=new Gz();UJ(a);return a;}
function QW(){EH();if(Bni===null)Bni=AXf();return Bni;}
function UJ(a){EH();J(a);a.eX=AXq(0,8);a.GU();}
function A8Z(a,b,c){return a.F6(b,c,0.0,0);}
function A9q(a,b,c,d,e){var f,g,$$je;if(b.dB!=(-1))G(W(B(607)));b.ig=CA(E_(CD(),O(1000000)),Bf6(c*1000.0));b.sI=Bf6(d*1000.0);b.dB=e;f=a.eX;Eq(f);a:{try{a.eX.F(b);Cg(f);}catch($$e){$$je=R($$e);g=$$je;break a;}M7();return b;}Cg(f);G(g);}
function ASC(a){var b,c,d,$$je;EH();b=Bhg;Eq(b);a:{b:{try{if(!Bhg.is(a,1))break b;Cg(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}c:{try{Bhg.F(a);if(Bnh!==null)break c;d=(El()).hs();Bnh=Bcr(d.PT());break c;}catch($$e){$$je=R($$e);c=$$je;break a;}}try{M7();Cg(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}Cg(b);G(c);}
function ARb(a,b,c){var d,e,f,g,h,$$je;d=a.eX;Eq(d);a:{try{e=0;f=a.eX.h;while(e<f){g=a.eX.l(e);if(Hq(g.ig,b))c=T1(c,D4(g.ig,b));else{if(g.dB!=(-1)){if(!g.dB)g.dB=(-1);Bgm.Mg(g);}if(g.dB==(-1)){a.eX.sr(e);e=e+(-1)|0;f=f+(-1)|0;}else{g.ig=CA(b,g.sI);c=T1(c,g.sI);if(g.dB>0)g.dB=g.dB-1|0;}}e=e+1|0;}Cg(d);}catch($$e){$$je=R($$e);h=$$je;break a;}return c;}Cg(d);G(h);}
function AOb(a,b){var c,d,e,f,g,$$je;c=a.eX;Eq(c);a:{try{d=0;e=a.eX.h;while(d<e){f=a.eX.l(d);f.ig=CA(f.ig,b);d=d+1|0;}Cg(c);}catch($$e){$$je=R($$e);g=$$je;break a;}return;}Cg(c);G(g);}
function M7(){var b,c,$$je;EH();b=Bhg;Eq(b);a:{try{Bnh.nR(0);Cg(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}Cg(b);G(c);}
function ACw(b,c){EH();return (QW()).FL(b,c);}
function AM_(){Bhg=DJ(1);Bni=AXf();}
var Ds=D(C2);
function Ec(){var a=new Ds();AVM(a);return a;}
function DF(a){var b=new Ds();ALN(b,a);return b;}
function AVM(a){FX(a);}
function ALN(a,b){ACP(a,b);}
function XR(){var a=this;C.call(a);a.pQ=null;a.NQ=0;a.g2=0;a.gw=0;}
function K6(a,b){var c=new XR();ANp(c,a,b);return c;}
function ANp(a,b,c){J(a);a.gw=1;a.pQ=b;a.NQ=c;}
function A1P(a){if(!a.gw)G(U(B(608)));return a.g2>=a.pQ.h?0:1;}
function AXJ(a){var b,c;if(a.g2>=a.pQ.h)G(Bcz(Ji(a.g2)));if(!a.gw)G(U(B(608)));b=a.pQ.P.data;c=a.g2;a.g2=c+1|0;return b[c];}
function AAO(){Jo.call(this);this.Lq=null;}
function BbN(a,b,c,d,e){var f=new AAO();A8k(f,a,b,c,d,e);return f;}
function A8k(a,b,c,d,e,f){a.Lq=b;Tp(a,c,d,e,f);}
var Wc=D();
function RX(){var a=this;C$.call(a);a.tN=0;a.pI=0;}
function BcH(a,b,c){var d=new RX();A5F(d,a,b,c);return d;}
function A5F(a,b,c,d){GD(a,b,0.5,0.5);a.tN=c;a.pI=d;}
function ARY(a,b,c,d,e,f,g,h){var i,j,k,l;if(a.tN){if((c+2|0)>d){if(h.tH())i=null;else{Bj();i=Bgj;}return i;}j=b.data;a.tN=0;k=c+1|0;l=j[c];if(l==(-1)){if(j[k]!=(-2))c=k+(-1)|0;else{c=k+1|0;a.pI=1;}}else if(l!=(-2))c=k+(-1)|0;else if(j[k]!=(-1))c=k+(-1)|0;else{c=k+1|0;a.pI=0;}}return !a.pI?Rx(a,b,c,d,e,f,g,h):ABI(a,b,c,d,e,f,g,h);}
function ABI(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=null;a:{while(c<d){if(f>=g)break a;if((c+2|0)>d){if(h.dO(2))break a;Bj();i=Bgj;break a;}j=b.data;k=c+1|0;l=j[c]&255;c=k+1|0;m=j[k]&255;n=(l|m<<8)&65535;if(!BY(n)){if(BH(n)){c=c+(-2)|0;i=BU(2);break a;}j=e.data;k=f+1|0;j[f]=n;f=k;}else{if((c+2|0)>=d){if(!h.dO(4)){Bj();i=Bgj;}c=c+(-2)|0;break a;}k=c+1|0;o=j[c]&255;c=k+1|0;k=j[k]&255;p=(o|k<<8)&65535;if(!BH(p)){c=c+(-4)|0;i=BU(4);break a;}if((f+2|0)>g){if(h.ef(2))break a;Bj();i=Bgi;break a;}j=e.data;k=f+1|0;j[f]
=n;f=k+1|0;j[k]=p;}}}h.ek(c);h.dR(f);return i;}
function Rx(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=null;a:{while(c<d){if(f>=g)break a;if((c+2|0)>d){if(h.dO(2))break a;Bj();i=Bgj;break a;}j=b.data;k=c+1|0;l=j[c]&255;c=k+1|0;m=j[k]&255;n=(m|l<<8)&65535;if(!BY(n)){if(BH(n)){c=c+(-2)|0;i=BU(2);break a;}j=e.data;k=f+1|0;j[f]=n;f=k;}else{if((c+2|0)>=d){if(!h.dO(4)){Bj();i=Bgj;}c=c+(-2)|0;break a;}k=c+1|0;o=j[c]&255;c=k+1|0;k=j[k]&255;p=(k|o<<8)&65535;if(!BH(p)){c=c+(-4)|0;i=BU(4);break a;}if((f+2|0)>g){if(h.ef(2))break a;Bj();i=Bgi;break a;}j=e.data;k=f+1|0;j[f]
=n;f=k+1|0;j[k]=p;}}}h.ek(c);h.dR(f);return i;}
var AA$=D(Jw);
function BaL(){var a=new AA$();A1X(a);return a;}
function A1X(a){W$(a);}
function Yf(a,b){var c;c=Bec(a,b);return c;}
function AMC(a,b,c){return setTimeout(BV(Yf(a,b),"onTimer"),c);}
function ALM(a,b){clearInterval(b);}
function AKs(a,b){clearTimeout(b);}
function A2J(b,c){Zd(b,c);}
var SP=D(T);
function A_5(){var a=new SP();AMM(a);return a;}
function AMM(a){Bo(a);}
function APD(a){return Bbl(a);}
function Wh(){var a=this;C.call(a);a.nw=null;a.pR=0;a.hZ=null;a.mf=null;}
function Bcp(a){var b=new Wh();A5R(b,a);return b;}
function Bnj(a,b){var c=new Wh();ACM(c,a,b);return c;}
function A5R(a,b){ACM(a,b,1);}
function ACM(a,b,c){J(a);a.nw=b;a.pR=c;}
function A08(a){if(BkK)return K6(a.nw,a.pR);if(a.hZ===null){a.hZ=K6(a.nw,a.pR);a.mf=K6(a.nw,a.pR);}if(a.hZ.gw){a.mf.g2=0;a.mf.gw=1;a.hZ.gw=0;return a.mf;}a.hZ.g2=0;a.hZ.gw=1;a.mf.gw=0;return a.hZ;}
var AAI=D(T);
function A_K(){var a=new AAI();AM9(a);return a;}
function AM9(a){Bo(a);}
function AUe(a){return A_S(a);}
var ZS=D(B3);
function GX(){var a=new ZS();A7p(a);return a;}
function DP(a){var b=new ZS();A5a(b,a);return b;}
function A7p(a){E$(a);}
function A5a(a,b){Mi(a,b);}
function YE(){var a=this;C.call(a);a.mW=null;a.q0=0;a.ph=null;a.t1=0;a.oF=null;a.rf=0;a.kc=null;a.pp=0;}
function CL(){var a=new YE();A$2(a);return a;}
function A$2(a){J(a);a.mW=S();a.ph=Ck(0.0,1.0,0.0);a.oF=CO(1.0,1.0,1.0,1.0);a.kc=Iu();}
function AOI(a){a.mW.I(0.0,0.0,0.0);a.ph.I(0.0,1.0,0.0);a.oF.hT(1.0,1.0,1.0,1.0);a.kc.iu(0.0,0.0);}
function ALB(a,b,c,d,e){a.fU();a.q0=b===null?0:1;if(a.q0)a.mW.M(b);a.t1=c===null?0:1;if(a.t1)a.ph.M(c);a.rf=d===null?0:1;if(a.rf)a.oF.eP(d);a.pp=e===null?0:1;if(a.pp)a.kc.k4(e);return a;}
function ALU(a,b,c){a.kc.iu(b,c);a.pp=1;return a;}
function Z3(){var a=this;C.call(a);a.nl=0.0;a.ou=null;}
function Rl(a,b){var c=new Z3();A8R(c,a,b);return c;}
function A8R(a,b,c){J(a);a.nl=b;a.ou=c;}
var OE=D(GB);
function Bnk(){var a=new OE();TX(a);return a;}
function TX(a){UH(a);AL0(a);}
function A74(a,b){var c;c=new Float32Array(b);return c;}
function ATE(a,b){var c;c=new Int32Array(b);return c;}
function AMg(a,b){var c;c=new Int16Array(b);return c;}
function AVR(a,b){var c;c=new Int8Array(b);return c;}
function AGF(a,b){var c;c=new Uint8Array(b);return c;}
function Jj(){BC.call(this);this.g7=0;}
function A1p(a){var b=new Jj();AN3(b,a);return b;}
function AN3(a,b){CP(a);a.g7=b;}
function AW7(a,b){a.k=b;}
function ADl(a,b,c,d){var e,f,g,h,i;e=d.J();f=b+1|0;g=B8(f,e);if(g>0){d.d5=1;return (-1);}h=c.f(b);if(g<0){i=c.f(f);if(BH(i))return (-1);}if(a.g7!=h)return (-1);return a.k.e(f,c,d);}
function A5x(a,b,c,d){var e,f,g;if(!(c instanceof BM))return F3(a,b,c,d);e=c;f=d.J();while(true){if(b>=f)return (-1);g=e.eF(a.g7,b);if(g<0)return (-1);b=g+1|0;if(b<f&&BH(e.f(b))){b=g+2|0;continue;}if(a.k.e(b,c,d)>=0)break;}return g;}
function AP0(a,b,c,d,e){var f,g,h,i;if(!(d instanceof BM))return Gb(a,b,c,d,e);f=d;g=e.J();a:{while(true){if(c<b)return (-1);h=f.mH(a.g7,c);if(h<0)break a;if(h<b)break a;i=h+1|0;if(i<g&&BH(f.f(i))){c=h+(-1)|0;continue;}if(a.k.e(i,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function A9_(a){return (((I()).a(B(101))).U(a.g7)).b();}
function AG0(a,b){if(b instanceof Dx)return 0;if(b instanceof Dv)return 0;if(b instanceof C3)return 0;if(b instanceof Dt)return 0;if(b instanceof Je)return 0;if(!(b instanceof Jj))return 1;return b.g7!=a.g7?0:1;}
function A5H(a,b){return 1;}
var Rh=D(Ef);
function Baq(a,b,c,d){var e=new Rh();A5v(e,a,b,c,d);return e;}
function A5v(a,b,c,d,e){K0(a,b,c,d,e);}
function A7f(a,b,c,d){var e,f,g,h,i;e=a.gf.ja();f=a.gf.iG();g=0;while(true){if(g>=e){a:{while(true){h=a.k.e(b,c,d);if(h>=0)break;if((b+a.bv.cg()|0)<=d.J()){h=a.bv.bH(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.bv.cg()|0)>d.J()){d.d5=1;return (-1);}i=a.bv.bH(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
var Ri=D(Bt);
function ARm(){var a=new Ri();AG_(a);return a;}
function AG_(a){Co(a);}
function A2E(a,b,c,d){if(b&&!(d.jy()&&b==d.dI()))return (-1);return a.k.e(b,c,d);}
function A1u(a,b){return 0;}
function AM5(a){return B(609);}
function YL(){C.call(this);this.vr=null;}
function Bb7(a){var b=new YL();ASB(b,a);return b;}
function ASB(a,b){J(a);a.vr=b;}
function BaQ(b){return Bb7(b);}
function A11(a,b){a.vr.nM(b);}
function AS$(a,b){a.vr.Oz(b);}
function DA(){var a=this;C.call(a);a.n=0.0;a.o=0.0;a.q=0.0;}
var Bmr=null;var Bms=null;var Bmt=null;var Bnl=null;var Bnm=null;function H1(){H1=N(DA);AEB();}
function S(){var a=new DA();ZC(a);return a;}
function Ck(a,b,c){var d=new DA();Rp(d,a,b,c);return d;}
function ZC(a){H1();J(a);}
function Rp(a,b,c,d){H1();J(a);a.I(b,c,d);}
function A2R(a,b,c,d){a.n=b;a.o=c;a.q=d;return a;}
function AG3(a,b){return a.I(b.n,b.o,b.q);}
function ARh(a,b){return a.AJ(b.n,b.o,b.q);}
function ALr(a,b,c,d){return a.I(a.n+b,a.o+c,a.q+d);}
function ANe(a,b){return a.Js(b.n,b.o,b.q);}
function AQH(a,b,c,d){return a.I(a.n-b,a.o-c,a.q-d);}
function A7c(a,b){return a.I(a.n*b,a.o*b,a.q*b);}
function TR(b,c,d){H1();return FR(b*b+c*c+d*d);}
function A$W(a){return FR(a.n*a.n+a.o*a.o+a.q*a.q);}
function AGo(a){return a.n*a.n+a.o*a.o+a.q*a.q;}
function AY0(a,b){var c,d,e;c=b.n-a.n;d=b.o-a.o;e=b.q-a.q;return FR(c*c+d*d+e*e);}
function AIC(a,b){var c,d,e;c=b.n-a.n;d=b.o-a.o;e=b.q-a.q;return c*c+d*d+e*e;}
function A_g(a){var b;b=a.t9();if(b!==0.0&&b!==1.0)return a.el(1.0/FR(b));return a;}
function ARE(a,b){return a.n*b.n+a.o*b.o+a.q*b.q;}
function AYm(a,b){return a.I(a.o*b.q-a.q*b.o,a.q*b.n-a.n*b.q,a.n*b.o-a.o*b.n);}
function A3k(a,b,c,d){return a.I(a.o*d-a.q*c,a.q*b-a.n*d,a.n*c-a.o*b);}
function AQv(a,b){var c,d;c=b.c;d=c.data;return a.I(a.n*d[0]+a.o*d[4]+a.q*d[8]+d[12],a.n*d[1]+a.o*d[5]+a.q*d[9]+d[13],a.n*d[2]+a.o*d[6]+a.q*d[10]+d[14]);}
function AVH(a,b){var c,d;c=b.gS;d=c.data;return a.I(a.n*d[0]+a.o*d[3]+a.q*d[6],a.n*d[1]+a.o*d[4]+a.q*d[7],a.n*d[2]+a.o*d[5]+a.q*d[8]);}
function AHd(a,b,c){H1();Bnm.O9(b,c);return a.kK(Bnm);}
function A_a(a){return a.n===0.0&&a.o===0.0&&a.q===0.0?1:0;}
function ANH(a,b,c){a.n=a.n+c*(b.n-a.n);a.o=a.o+c*(b.o-a.o);a.q=a.q+c*(b.q-a.q);return a;}
function AFh(a){return ((((((((I()).a(B(22))).cB(a.n)).a(B(23))).cB(a.o)).a(B(23))).cB(a.q)).a(B(24))).b();}
function A7j(a){var b;b=31+CE(a.n)|0;b=(31*b|0)+CE(a.o)|0;b=(31*b|0)+CE(a.q)|0;return b;}
function AGZ(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(Cj(a)!==Cj(b))return 0;c=b;if(CE(a.n)!=CE(c.n))return 0;if(CE(a.o)!=CE(c.o))return 0;if(CE(a.q)==CE(c.q))return 1;return 0;}
function AIH(a){a.n=0.0;a.o=0.0;a.q=0.0;return a;}
function AEB(){Bmr=Ck(1.0,0.0,0.0);Bms=Ck(0.0,1.0,0.0);Bmt=Ck(0.0,0.0,1.0);Bnl=Ck(0.0,0.0,0.0);Bnm=BF();}
function GC(){var a=this;C.call(a);a.eU=0.0;a.eT=0.0;}
var Bnn=null;var Bno=null;var Bnp=null;function AOx(){AOx=N(GC);AXG();}
function Iu(){var a=new GC();R9(a);return a;}
function V5(a,b){var c=new GC();Tu(c,a,b);return c;}
function R9(a){AOx();J(a);}
function Tu(a,b,c){AOx();J(a);a.eU=b;a.eT=c;}
function AXb(a,b){a.eU=b.eU;a.eT=b.eT;return a;}
function AC1(a,b,c){a.eU=b;a.eT=c;return a;}
function AOL(a,b){var c,d;c=b.eU-a.eU;d=b.eT-a.eT;return FR(c*c+d*d);}
function AXG(){Bnn=V5(1.0,0.0);Bno=V5(0.0,1.0);Bnp=V5(0.0,0.0);}
function EY(){var a=this;C.call(a);a.v5=null;a.tE=Ba;a.p5=Ba;a.r0=Ba;}
function Bnq(a,b,c,d){var e=new EY();Om(e,a,b,c,d);return e;}
function Bnr(a,b,c){var d=new EY();Vf(d,a,b,c);return d;}
function CJ(a,b){var c=new EY();G1(c,a,b);return c;}
function Bk(a){var b=new EY();ARg(b,a);return b;}
function Om(a,b,c,d,e){J(a);a.v5=b;a.tE=c;a.p5=d;a.r0=e;}
function Vf(a,b,c,d){Om(a,b,c,d,Ba);}
function G1(a,b,c){Om(a,b,Ba,Ba,c);}
function ARg(a,b){Vf(a,b,Ba,Ba);}
function AOp(a,b,c,d){var e,f;e=d!==null&&d.c$!==null?Eg(d.c$):Ba;f=d!==null&&d.cu!==null?Eg(d.cu):Ba;return Z(Br(e,a.tE),a.tE)&&Z(Br(f,a.p5),a.p5)&&Z(Br(BN(e,f),a.r0),a.r0)?1:0;}
function GV(){var a=this;C.call(a);a.co=null;a.bS=0;a.m9=0;}
function G$(){var a=new GV();AJI(a);return a;}
function Bns(a,b){var c=new GV();Ue(c,a,b);return c;}
function AJI(a){Ue(a,1,16);}
function Ue(a,b,c){J(a);a.m9=b;a.co=Bc(c);}
function A1L(a,b){var c,d,e;c=a.co;d=c.data;if(a.bS==d.length)c=a.tY(Bf(8,a.bS*1.75|0));d=c.data;e=a.bS;a.bS=e+1|0;d[e]=b;}
function AQz(a,b){if(b<a.bS)return a.co.data[b];G(Bg((((((I()).a(B(429))).j(b)).a(B(430))).j(a.bS)).b()));}
function AZl(a){a.bS=0;}
function ANz(a){if(a.co.data.length!=a.bS)a.tY(a.bS);return a.co;}
function ANQ(a,b){var c;if(b<0)G(W((((I()).a(B(436))).j(b)).b()));c=a.bS+b|0;if(c>a.co.data.length)a.tY(Bf(Bf(8,c),a.bS*1.75|0));return a.co;}
function AEX(a,b){var c,d,e;c=Bc(b);d=c.data;e=a.co;X(e,0,c,0,Bq(a.bS,d.length));a.co=c;return c;}
function AL7(a){var b,c,d,e,f;if(!a.m9)return MM(a);b=a.co;c=1;d=0;e=a.bS;while(d<e){f=b.data;c=(c*31|0)+f[d]|0;d=d+1|0;}return c;}
function A8X(a,b){var c,d,e,f,g,h;if(b===a)return 1;if(!a.m9)return 0;if(!(b instanceof GV))return 0;c=b;if(!c.m9)return 0;d=a.bS;if(d!=c.bS)return 0;e=a.co;f=c.co;g=0;while(g<d){h=f.data;if(e.data[g]!=h[g])return 0;g=g+1|0;}return 1;}
function A2t(a){var b,c,d,e;if(!a.bS)return B(438);b=a.co;c=b.data;d=AS7(32);d.lv(91);d.z6(c[0]);e=1;while(e<a.bS){d.CB(B(439));d.z6(c[e]);e=e+1|0;}d.lv(93);return d.b();}
function H0(){var a=this;C.call(a);a.iJ=null;a.uk=null;a.z7=null;a.E1=null;a.Bj=null;a.Eq=null;a.zA=null;a.s6=null;a.iH=null;a.tA=0;a.sM=0;a.EK=null;a.lo=null;a.Hs=null;a.o5=null;a.kJ=null;a.f6=null;}
var Bnt=null;function Bnu(a,b){var c=new H0();ABk(c,a,b);return c;}
function AV0(){return Bnt;}
function ABk(a,b,c){var d;J(a);Gl();a.iH=Bkg;a.tA=(-1);a.sM=1;a.Hs=DE();a.o5=Bp();a.kJ=Bp();d=c.H1();BkG=d;a.s6=d.hs();a.zA=b;a.Eq=c;a.Bj=d.EH();Q8(a);}
function Q8(a){var b,c;Bnt=(El()).M3();Gp(B(610),B(101));if((Bnt.windows?1:0)==1)Gp(B(553),B(611));else if((Bnt.macOS?1:0)==1)Gp(B(553),B(612));else if((Bnt.linux?1:0)!=1)Gp(B(553),B(613));else Gp(B(553),B(614));ALE(Bdj(El()));b=Ea();a.f6=b.HE();if(a.f6.MS(B(615))){a.f6=a.f6.uD(B(616),B(101));a.f6=a.f6.uD(B(617),B(101));}a.lo=Be8((((I()).a(a.f6)).a(B(618))).b());c=BbH();a.lo.Mo(B(619));a.iJ=A_3(a.Eq);a.uk=A_8(a.Bj);a.z7=Bc4(a.lo);a.EK=BeX();Pz(a);Bgm=a;BhI=a.iJ;BhL=a.iJ.vG();BhM=a.iJ.vG();Bhs=a.uk;BhK=a.z7;a.s6.vD(a);}
function A2P(a){var b,c,$$je;b=a.iH;a:{try{b:{Bc$();switch(Bkf.data[BD(b)]){case 1:if((Ea()).KD())break b;Gl();a.iH=Bkj;break b;case 2:case 3:break;case 4:Gl();a.iH=Bkh;break b;default:break b;}Z2(a,a.zA);}}catch($$e){$$je=R($$e);if($$je instanceof C_){c=$$je;break a;}else{throw $$e;}}a.s6.vD(a);return;}c.Ft();G(c);}
function Z2(a,b){var c,d,e,f;a.iJ.f5();c=BhI.bo();d=BhI.bl();if(!(c==a.tA&&d==a.sM)){a.tA=c;a.sM=d;BhL.oH(0,0,c,d);e=a.iH;Gl();if(e===Bkh){a.iH=Bki;b.wX();}b.Qw(c,d);}a.kJ.qx(a.o5);a.o5.K();f=0;while(f<a.kJ.h){(a.kJ.l(f)).fc();f=f+1|0;}a.kJ.K();e=a.iJ;e.sX=CA(e.sX,O(1));b.N2();a.uk.fU();}
function Pz(a){a.lo.na(B(620),Bde(a));}
function AM7(a){return a.lo;}
function AFp(a,b,c){a.EK.qA(b,c);}
function A4V(a){Vr();return Bhl;}
function A28(a,b){a.o5.F(b);}
function AKA(a,b){}
function AEJ(b){return b.f6;}
function AJ7(b,c){b.E1=c;return c;}
function A8Y(b){return b.E1;}
function Ij(){BI.call(this);this.hj=null;}
var Bln=Ba;function JD(){JD=N(Ij);A0M();}
function BaC(){var a=new Ij();JK(a);return a;}
function BdX(a){var b=new Ij();R5(b,a);return b;}
function JK(a){JD();Fb(a,Bln);a.hj=DJ(1);}
function R5(a,b){JD();JK(a);a.hj.qx(b.hj);}
function A4M(a){return BdX(a);}
function ANx(a){var b,c,d;b=F2(a);c=a.hj.bZ();while(c.bC()){d=c.bz();b=(1229*b|0)+(d!==null?d.bp():0)|0;}return b;}
function A7G(a){return a.QC();}
function A0M(){Bln=BO(B(621));}
function Dd(){var a=this;Ha.call(a);a.NL=0;a.IT=0;a.M6=0;a.No=0;a.OE=0;a.Ie=0;a.Oe=0;a.va=0;a.P$=0;a.Qc=0;a.Ho=0;a.Nw=0;a.KE=0;a.N_=0;a.CP=0;a.Ih=0;a.I9=0;a.GL=0;a.Ln=0;a.GI=0;a.G8=0;a.Jn=0;a.O2=0;a.Ql=0;a.M$=0;a.GS=0;a.OJ=0;a.LL=0;a.ME=0;a.K1=0;a.Na=0;a.EM=0;a.GF=0;a.Gk=0;a.vi=0;a.xR=0;a.zW=0;a.sd=0;a.zm=0;a.r$=0;a.B8=0;a.tP=0;a.ww=0;a.tW=0;a.yY=0;a.EY=0;a.wb=0;a.yh=0;a.Ev=0;a.vF=0;a.yN=0;a.Ec=0;a.jN=0;a.xn=0;a.vI=0;a.l$=0;a.hm=0;a.wh=0;a.Fh=0;a.tj=0;a.la=0;a.eV=0;a.vy=0;a.zN=0;a.EA=0;a.ve=0;a.y6=0;a.BC=0;a.lD
=0;a.fs=0;a.DL=0;a.PD=0;a.Ja=null;a.cw=null;a.b$=null;a.b4=null;a.rG=null;a.k7=Ba;a.Dd=Ba;a.hi=null;a.IK=null;a.vR=0.0;a.gY=0;a.Li=null;}
var Bnv=null;var Bnw=null;var Bnx=Ba;var Bny=0;var Bnz=0;var BnA=Ba;var BnB=null;function CQ(){CQ=N(Dd);AQg();}
function Bal(a,b){var c=new Dd();W8(c,a,b);return c;}
function BnC(a,b,c){var d=new Dd();L6(d,a,b,c);return d;}
function BnD(a,b,c,d,e){var f=new Dd();Kx(f,a,b,c,d,e);return f;}
function BnE(a,b,c){var d=new Dd();Mw(d,a,b,c);return d;}
function Ya(){CQ();if(Bnv===null)Bnv=(BhK.n_(B(622))).vJ();return Bnv;}
function Sj(){CQ();if(Bnw===null)Bnw=(BhK.n_(B(623))).vJ();return Bnw;}
function W8(a,b,c){CQ();L6(a,b,c,ZB(b,c));}
function L6(a,b,c,d){CQ();Kx(a,b,c,d,c.p6===null?Ya():c.p6,c.uQ===null?Sj():c.uQ);}
function Kx(a,b,c,d,e,f){CQ();Mw(a,b,c,AIG((((I()).a(d)).a(e)).b(),(((I()).a(d)).a(f)).b()));}
function Mw(a,b,c,d){var e,f,g,h,i;CQ();AA6(a);a.vi=a.b0(Bk(B(624)));a.xR=a.b0(Bk(B(625)));a.zW=a.b0(Bk(B(626)));a.sd=a.b0(Bk(B(627)));a.zm=a.b0(Bk(B(628)));a.r$=a.b0(Bk(B(629)));a.B8=a.b0(Bk(B(630)));a.tP=a.b0(Bk(B(631)));a.ww=a.b0(Bk(B(632)));a.tW=a.b0(Bk(B(633)));a.yY=a.b0(Bk(B(634)));a.EY=a.b0(Bk(B(635)));a.wb=a.b0(Bk(B(636)));a.yh=a.b0(Bk(B(637)));a.Ev=a.b0(Bk(B(638)));a.vF=a.b0(Bk(B(639)));a.yN=a.b0(Bk(B(640)));a.Ec=a.b0(Bk(B(641)));a.Ja=AO6();a.IK=Pf();a.Li=S();e=KD(b);a.hi=c;a.bh=d;f=b.cu===null?0:1;a:
{b:{a.fs=f;ABy();if(!Ct(e,Bi9)){if(!a.fs)break b;g=Bi9;if(!Ct(e,g))break b;}f=1;break a;}f=0;}a.DL=f;a.PD=a.fs&&b.cu.iR!==null?1:0;a.rG=b;a.k7=BN(Eg(e),BnA);a.Dd=NO(b.cQ.b7.gR());a.cw=Y(Hz,a.fs&&c.mo>0?c.mo:0);h=0;while(h<a.cw.data.length){a.cw.data[h]=AJu();h=h+1|0;}a.b$=Y(Oy,a.fs&&c.l7>0?c.l7:0);h=0;while(h<a.b$.data.length){a.b$.data[h]=Bet();h=h+1|0;}a.b4=Y(KI,a.fs&&c.nn>0?c.nn:0);h=0;while(h<a.b4.data.length){a.b4.data[h]=A_i();h=h+1|0;}if(!c.rV&&Du(Br(Bnx,a.k7),a.k7))G(U(((((I()).a(B(642))).M7(a.k7)).a(B(24))).b()));if
(b.dJ!==null&&b.dJ.data.length>c.gW)G(U((((((I()).a(B(643))).j(b.dJ.data.length)).a(B(644))).j(c.gW)).b()));BeF();i=BnF;Bbm();a.NL=a.bf(i,BgF);a.IT=a.bf(BnG,BgG);a.M6=a.bf(BnH,BgH);a.No=a.bf(BnI,BgI);a.OE=a.bf(BnJ,BgJ);a.Ie=a.bf(BnK,BgK);a.Oe=a.bf(BnL,BgL);a.va=a.b0(Bk(B(645)));a.P$=a.bf(BnM,BgM);a.Qc=a.bf(BnN,BgN);a.Ho=a.bf(BnO,BgO);a.Nw=a.bf(BnP,BgP);a.KE=b.dJ!==null&&c.gW>0?a.bf(BnQ,BdN(c.gW)):(-1);a.N_=a.bf(BnR,BgQ);a.CP=a.b0(BnS);a.Ih=a.bf(BnT,BgR);a.I9=a.bf(BnU,BgS);a.GL=a.bf(BnV,BgT);a.Ln=a.bf(BnW,BgU);a.GI
=a.bf(BnX,BgV);a.G8=a.bf(BnY,BgW);a.Jn=a.bf(BnZ,BgX);a.O2=a.bf(Bn0,BgY);a.Ql=a.bf(Bn1,BgZ);a.M$=a.bf(Bn2,Bg0);a.GS=a.bf(Bn3,Bg1);a.OJ=a.bf(Bn4,Bg2);a.LL=a.bf(Bn5,Bg3);a.ME=a.bf(Bn6,Bg4);a.K1=a.bf(Bn7,Bg5);a.Na=a.bf(Bn8,Bg6);a.EM=a.b0(Bn9);a.GF=!a.fs?(-1):a.bf(Bn$,BeJ(c.mo,c.l7));a.Gk=!a.DL?(-1):a.bf(Bn_,Bg7);}
function AW8(a){var b;b=a.bh;a.bh=null;a.Mq(b,a.rG);a.rG=null;a.jN=B0(a,a.vi);a.xn=B0(a,a.vi)-a.jN|0;a.vI=B0(a,a.xR)-a.jN|0;a.l$=B0(a,a.zW)-a.jN|0;if(a.l$<0)a.l$=0;a.hm=B0(a,a.sd);a.wh=B0(a,a.sd)-a.hm|0;a.Fh=B0(a,a.zm)-a.hm|0;a.tj=!Ic(a,a.r$)?(-1):B0(a,a.r$)-a.hm|0;a.la=B0(a,a.B8)-a.hm|0;if(a.la<0)a.la=0;a.eV=B0(a,a.tP);a.vy=B0(a,a.tP)-a.eV|0;a.zN=B0(a,a.ww)-a.eV|0;a.EA=B0(a,a.yY)-a.eV|0;a.ve=!Ic(a,a.tW)?(-1):B0(a,a.tW)-a.eV|0;a.y6=B0(a,a.EY)-a.eV|0;a.BC=B0(a,a.wb)-a.eV|0;a.lD=B0(a,a.yh)-a.eV|0;if(a.lD<0)a.lD
=0;}
function Er(b,c){CQ();return Du(Br(b,c),c)?0:1;}
function TH(b,c){CQ();return Z(Br(b,c),Ba)?0:1;}
function KD(b){CQ();BnB.K();if(b.cu!==null)F7(BnB,b.cu);if(b.c$!==null)F7(BnB,b.c$);return BnB;}
function Sb(b){var c;CQ();c=Ba;if(b.cu!==null)c=BN(c,Eg(b.cu));if(b.c$!==null)c=BN(c,Eg(b.c$));return c;}
function ZB(b,c){var d,e,f,g,h,i,j,k;CQ();d=KD(b);e=B(101);f=Eg(d);g=IL(b.cQ.b7.gR());if(Er(g,O(1)))e=(((I()).a(e)).a(B(646))).b();if(TH(g,O(6)))e=(((I()).a(e)).a(B(647))).b();if(Er(g,O(256)))e=(((I()).a(e)).a(B(648))).b();if(Er(g,O(128)))e=(((I()).a(e)).a(B(649))).b();if(Er(g,O(8)))e=(((I()).a(e)).a(B(650))).b();if(!(!Er(g,O(8))&&!Er(g,O(384)))&&b.cu!==null){h=(((I()).a(e)).a(B(651))).b();h=(((I()).a(h)).a(B(652))).b();h=(((((I()).a(h)).a(B(653))).j(c.mo)).a(B(324))).b();h=(((((I()).a(h)).a(B(654))).j(c.l7)).a(B(324))).b();e
=(((((I()).a(h)).a(B(655))).j(c.nn)).a(B(324))).b();Cd();if(Ct(d,Bl2))e=(((I()).a(e)).a(B(656))).b();if(b.cu.iR!==null)e=(((I()).a(e)).a(B(657))).b();ABy();if(Ct(d,Bi9))e=(((I()).a(e)).a(B(658))).b();}i=CT(b.cQ.b7.gR());j=0;while(j<i){k=CB(b.cQ.b7.gR(),j);if(k.fl==64)e=(((((I()).a(e)).a(B(659))).j(k.jQ)).a(B(660))).b();else if(k.fl==16)e=(((((I()).a(e)).a(B(661))).j(k.jQ)).a(B(660))).b();j=j+1|0;}GO();if(Z(Br(f,Bjb),Bjb))e=(((I()).a(e)).a(B(662))).b();B1();if(Z(Br(f,BmJ),BmJ)){h=(((I()).a(e)).a(B(663))).b();e
=(((I()).a(h)).a(B(664))).b();}if(Z(Br(f,BmM),BmM)){h=(((I()).a(e)).a(B(665))).b();e=(((I()).a(h)).a(B(666))).b();}if(Z(Br(f,Bmw),Bmw)){h=(((I()).a(e)).a(B(667))).b();e=(((I()).a(h)).a(B(668))).b();}if(Z(Br(f,Bmu),Bmu)){h=(((I()).a(e)).a(B(669))).b();e=(((I()).a(h)).a(B(670))).b();}if(Z(Br(f,Bmv),Bmv)){h=(((I()).a(e)).a(B(671))).b();e=(((I()).a(h)).a(B(672))).b();}if(Z(Br(f,Bmy),Bmy)){h=(((I()).a(e)).a(B(673))).b();e=(((I()).a(h)).a(B(674))).b();}Cd();if(Z(Br(f,BlW),BlW))e=(((I()).a(e)).a(B(675))).b();if(Z(Br(f,
BlX),BlX))e=(((I()).a(e)).a(B(676))).b();if(Z(Br(f,BlZ),BlZ))e=(((I()).a(e)).a(B(677))).b();if(Z(Br(f,Bl0),Bl0))e=(((I()).a(e)).a(B(678))).b();ET();if(Z(Br(f,BlA),BlA))e=(((I()).a(e)).a(B(679))).b();if(Z(Br(f,BlB),BlB))e=(((I()).a(e)).a(B(680))).b();if(b.dJ!==null&&c.gW>0)e=(((((I()).a(e)).a(B(681))).j(c.gW)).a(B(324))).b();return e;}
function A3s(a,b){var c,d,e,f;if(b.dJ!==null&&b.dJ.data.length>a.hi.gW)return 0;a:{c=Sb(b);if(Z(a.k7,BN(c,BnA))){d=a.Dd;e=b.cQ.b7;if(Z(d,NO(e.gR()))&&(b.cu===null?0:1)==a.fs){f=1;break a;}}f=0;}return f;}
function A5Y(a,b){return b instanceof Dd&&a.Pu(b)?1:0;}
function ASD(a,b){return b!==a?0:1;}
function AGE(a,b,c){var d,e,f,g,h,i,j;XU(a,b,c);d=a.cw.data;e=d.length;f=0;while(f<e){g=d[f];g.xH(0.0,0.0,0.0,0.0,(-1.0),0.0);f=f+1|0;}d=a.b$.data;e=d.length;f=0;while(f<e){h=d[f];h.H7(0.0,0.0,0.0,0.0,0.0,0.0,0.0);f=f+1|0;}d=a.b4.data;e=d.length;f=0;while(f<e){i=d[f];i.Ph(0.0,0.0,0.0,0.0,0.0,0.0,0.0,(-1.0),0.0,0.0,1.0,0.0);f=f+1|0;}a.gY=0;if(Ic(a,a.va)){e=a.va;j=a.vR+BhI.E4();a.vR=j;Fn(a,e,j);}}
function A$b(a,b,c){GO();if(!Ct(c,Bjb))a.cX.xd(0,770,771);a.H3(c);if(a.fs)a.JQ(b,c);Vn(a,b,c);}
function AD8(a){WC(a);}
function A2g(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a.hi.uS!=(-1))c=a.hi.uS;else{CQ();c=Bny;}if(a.hi.p3!=(-1))d=a.hi.p3;else{CQ();d=Bnz;}e=0.0;f=1.0;g=1;h=Kb(b);while(h.bC()){i=h.bz();j=i.da;if(Uo(j)){k=a.cX;l=i;k.xd(1,l.Ka,l.KR);Fn(a,a.CP,l.HK);}else{AGw();if(Z(Br(j,Bma),Bma))c=i.HY;else{ET();if(Z(Br(j,BlB),BlB))Fn(a,a.EM,i.ml);else{AJf();if(Z(Br(j,Bld),Bld)){m=i;d=m.Mt;e=m.Ko;f=m.IR;g=m.Ov;}else if(!a.hi.rV)G(U((((I()).a(B(682))).a(i.b())).b()));}}}}a.cX.HU(c);a.cX.LV(d,e,f);a.cX.MT(g);}
function A21(a,b,c){var d,e,f,g,h,i,j,k,l;d=b.cu;JD();e=HK(c,F(Ij),Bln);f=e!==null?e.hj:null;A3n();g=HK(c,F(Hp),BkH);h=g!==null?g.D3:null;Bbw();i=HK(c,F(Hb),Bm7);j=i!==null?i.PE:null;a:{if(a.jN>=0){k=0;b:while(true){if(k>=a.cw.data.length)break a;c:{if(f!==null&&k<f.h){if(a.gY&&a.cw.data[k].Et(f.l(k)))break c;a.cw.data[k].I1(f.l(k));}else{if(a.gY&&a.cw.data[k].bk.s===0.0&&a.cw.data[k].bk.r===0.0&&a.cw.data[k].bk.t===0.0)break c;a.cw.data[k].bk.hT(0.0,0.0,0.0,1.0);}l=a.jN+Cf(k,a.l$)|0;a.bh.je(l+a.xn|0,a.cw.data[k].bk.s,
a.cw.data[k].bk.r,a.cw.data[k].bk.t);a.bh.je(l+a.vI|0,a.cw.data[k].fb.n,a.cw.data[k].fb.o,a.cw.data[k].fb.q);if(a.l$<=0)break b;}k=k+1|0;}}}d:{if(a.hm>=0){k=0;e:while(true){if(k>=a.b$.data.length)break d;f:{if(h!==null&&k<h.h){if(a.gY&&a.b$.data[k].FU(h.l(k)))break f;a.b$.data[k].Ld(h.l(k));}else{if(a.gY&&a.b$.data[k].dx===0.0)break f;a.b$.data[k].dx=0.0;}l=a.hm+Cf(k,a.la)|0;a.bh.je(l+a.wh|0,a.b$.data[k].bk.s*a.b$.data[k].dx,a.b$.data[k].bk.r*a.b$.data[k].dx,a.b$.data[k].bk.t*a.b$.data[k].dx);a.bh.je(l+a.Fh
|0,a.b$.data[k].eB.n,a.b$.data[k].eB.o,a.b$.data[k].eB.q);if(a.tj>=0)a.bh.ka(l+a.tj|0,a.b$.data[k].dx);if(a.la<=0)break e;}k=k+1|0;}}}g:{if(a.eV>=0){k=0;h:while(true){if(k>=a.b4.data.length)break g;i:{if(j!==null&&k<j.h){if(a.gY&&a.b4.data[k].H8(j.l(k)))break i;a.b4.data[k].JY(j.l(k));}else{if(a.gY&&a.b4.data[k].eg===0.0)break i;a.b4.data[k].eg=0.0;}l=a.eV+Cf(k,a.lD)|0;a.bh.je(l+a.vy|0,a.b4.data[k].bk.s*a.b4.data[k].eg,a.b4.data[k].bk.r*a.b4.data[k].eg,a.b4.data[k].bk.t*a.b4.data[k].eg);a.bh.sn(l+a.zN|0,a.b4.data[k].hC);a.bh.sn(l
+a.EA|0,a.b4.data[k].h8);a.bh.ka(l+a.y6|0,a.b4.data[k].iW);a.bh.ka(l+a.BC|0,a.b4.data[k].jc);if(a.ve>=0)a.bh.ka(l+a.ve|0,a.b4.data[k].eg);if(a.lD<=0)break h;}k=k+1|0;}}}Cd();if(Ct(c,Bl2))Fv(a,a.Ev,(BB(c,Bl2)).dX);if(d!==null&&d.iR!==null){DZ(a,a.vF,d.iR.W6());Zx(a,a.yN,d.iR.PG());Fn(a,a.Ec,1.0/(2.0*(d.iR.PG()).eS.bo()));}a.gY=1;}
function AQg(){var b,c;Bnv=null;Bnw=null;GO();b=Bjb;B1();c=BN(b,BmJ);Cd();c=BN(BN(c,BlW),BlX);ET();Bnx=BN(c,BlA);Bny=1029;Bnz=515;AGw();c=Bma;AJf();BnA=BN(c,Bld);BnB=ATl();}
function KI(){var a=this;DN.call(a);a.hC=null;a.h8=null;a.eg=0.0;a.iW=0.0;a.jc=0.0;}
function A_i(){var a=new KI();A5S(a);return a;}
function A5S(a){HV(a);a.hC=S();a.h8=S();}
function A2f(a,b){return a.G$(b.bk,b.hC,b.h8,b.eg,b.iW,b.jc);}
function A4S(a,b,c,d,e,f,g){if(b!==null)a.bk.eP(b);if(c!==null)a.hC.M(c);if(d!==null)(a.h8.M(d)).bU();a.eg=e;a.iW=f;a.jc=g;return a;}
function A9N(a,b,c,d,e,f,g,h,i,j,k,l,m){a.bk.hT(b,c,d,1.0);a.hC.I(e,f,g);(a.h8.I(h,i,j)).bU();a.eg=k;a.iW=l;a.jc=m;return a;}
function AK9(a,b){var c,d,e,f,g;a:{b:{if(b!==null){if(b===a)break b;if(a.bk.z(b.bk)&&a.hC.z(b.hC)){c=a.h8;d=b.h8;if(c.z(d)&&Dj(a.eg,b.eg)&&Dj(a.iW,b.iW)){e=a.jc;f=b.jc;if(Dj(e,f))break b;}}}g=0;break a;}g=1;}return g;}
function Xn(){C.call(this);this.Fv=0;}
function BeX(){var a=new Xn();AHF(a);return a;}
function AHF(a){J(a);a.Fv=2;}
function A2D(a,b,c){if(a.Fv>=1)(TC()).gg(((((I()).a(b)).a(B(8))).a(c)).b());}
var Md=D(Dl);
function Ba2(){var a=new Md();A8G(a);return a;}
function A8G(a){Jt(a);}
var L7=D(FU);
var Boa=null;function APW(){APW=N(L7);A5$();}
function Bas(a){var b=new L7();R6(b,a);return b;}
function Bd$(a){var b=new L7();Uy(b,a);return b;}
function R6(a,b){APW();Jp(a);a.dZ(AAq(b.dd()),1);}
function Uy(a,b){APW();Jp(a);}
function A5$(){Boa=Bd$(0);}
function AAq(b){var otherJSObj=Bullet.wrapPointer(b,Bullet.btCollisionConfiguration);var jsObj=new Bullet.btCollisionDispatcher(otherJSObj);return Bullet.getPointer(jsObj);}
function AAZ(){var a=this;E5.call(a);a.g5=null;a.gZ=null;a.lN=0;}
function Bek(a){var b=new AAZ();AXB(b,a);return b;}
function AXB(a,b){On(a,b);}
function AZQ(a){O9(a);a.g5=a.P;a.lN=a.lN+1|0;return a.P;}
function AXz(a){var b,c;a.lN=Bf(0,a.lN-1|0);if(a.g5===null)return;a:{if(a.g5!==a.P&&!a.lN){a.gZ=a.g5;b=0;c=a.gZ.data.length;while(true){if(b>=c)break a;a.gZ.data[b]=null;b=b+1|0;}}}a.g5=null;}
function O9(a){if(a.g5!==null&&a.g5===a.P){if(a.gZ!==null&&a.gZ.data.length>=a.h){X(a.P,0,a.gZ,0,a.h);a.P=a.gZ;a.gZ=null;}else a.j9(a.P.data.length);return;}}
function PY(){C.call(this);this.pu=null;}
function PG(a){var b=new PY();ARQ(b,a);return b;}
function ARQ(a,b){J(a);a.pu=b;}
function FF(a){return a.pu.Bt();}
function Ta(a,b){a.pu.Aa(b);}
function ACO(a,b){var c,d,$$je;if(b===null)b=Y(C,0);a:{b:{c:{try{c=a.pu.Cp(b);}catch($$e){$$je=R($$e);if($$je instanceof C2){d=$$je;break c;}else if($$je instanceof Li){d=$$je;break a;}else if($$je instanceof Md){d=$$je;break b;}else if($$je instanceof Mp){d=$$je;G(Ex((((I()).a(B(683))).a((FF(a)).u())).b(),d));}else{throw $$e;}}return c;}G(Ex((((I()).a(B(684))).a((FF(a)).u())).b(),d));}G(Ex((((I()).a(B(685))).a((FF(a)).u())).b(),d));}G(Ex((((I()).a(B(685))).a((FF(a)).u())).b(),d));}
function ABW(){var a=this;Fh.call(a);a.As=0;a.sf=0;a.tS=null;}
function Bep(a,b,c,d,e,f){var g=new ABW();A$V(g,a,b,c,d,e,f);return g;}
function A$V(a,b,c,d,e,f,g){Lq(a,c,e,f);a.sf=b;a.As=g;a.tS=d;}
function AIK(a,b){return a.tS.data[b+a.sf|0];}
function A1H(a,b,c){a.tS.data[b+a.sf|0]=c;}
function AYg(a){return a.As;}
var Dy=D(Bx);
var Bkg=null;var Bkj=null;var Bob=null;var Bkh=null;var Bki=null;var Boc=null;function Gl(){Gl=N(Dy);AJt();}
function H4(a,b){var c=new Dy();Zp(c,a,b);return c;}
function QG(){Gl();return Boc.gn();}
function Zp(a,b,c){Gl();Cw(a,b,c);}
function AJt(){Bkg=H4(B(686),0);Bkj=H4(B(687),1);Bob=H4(B(688),2);Bkh=H4(B(689),3);Bki=H4(B(690),4);Boc=H(Dy,[Bkg,Bkj,Bob,Bkh,Bki]);}
var I7=D();
var Bod=null;var Boe=null;function Tn(){Tn=N(I7);AVi();}
function Kq(b){Tn();return !(b&1)?0:1;}
function ABr(b){var c,d,e,f,g,h,i;Tn();c=I();d=AAV();e=0;f=Boe.data;g=f.length;h=0;while(h<g){i=f[h];if(b&i){if(c.i()>0)c.U(32);c.a(d.data[e]);}e=e+1|0;h=h+1|0;}return c.b();}
function AAV(){Tn();if(Bod===null)Bod=H(BM,[B(691),B(692),B(693),B(694),B(695),B(696),B(697),B(698),B(699),B(700),B(701),B(702)]);return Bod;}
function AVi(){Boe=MB([1,4,2,1024,8,16,128,64,32,256,2048,512]);}
function ZE(){var a=this;C.call(a);a.hK=null;a.c2=0;a.Gj=0;}
function AUS(){var a=new ZE();AR1(a);return a;}
function Bof(a,b){var c=new ZE();AAD(c,a,b);return c;}
function AR1(a){AAD(a,1,16);}
function AAD(a,b,c){J(a);a.Gj=b;a.hK=MV(c);}
function A2X(a,b){var c,d,e;c=a.hK;d=c.data;if(a.c2==d.length)c=a.Cu(Bf(8,a.c2*1.75|0));d=c.data;e=a.c2;a.c2=e+1|0;d[e]=b;}
function ASh(a){a.c2=0;}
function AWr(a,b){var c;if(b<0)G(W((((I()).a(B(436))).j(b)).b()));c=a.c2+b|0;if(c>a.hK.data.length)a.Cu(Bf(Bf(8,c),a.c2*1.75|0));return a.hK;}
function AYx(a,b){var c,d,e;c=MV(b);d=c.data;e=a.hK;X(e,0,c,0,Bq(a.c2,d.length));a.hK=c;return c;}
var Tt=D();
function CE(b){return $rt_floatToIntBits(b);}
function G0(b){return Oh(b);}
function A0f(b){var c,d;c=Oh(b);d=c|((c>>>24)*1.003937005996704|0)<<24;return d;}
function J$(b){return $rt_intBitsToFloat(b&(-16777217));}
var VE=D(T);
function Bd4(){var a=new VE();AMj(a);return a;}
function AMj(a){Bo(a);}
function A9F(a){var b;b=Baf(a);b.be=1;return b;}
function Ry(){var a=this;Hl.call(a);a.hG=0;a.cq=null;a.j3=0;a.Fx=0.0;a.rk=0;}
function C5(){var a=new Ry();AHv(a);return a;}
function Bog(a){var b=new Ry();OK(b,a);return b;}
function Boh(a,b){var c=new Ry();ACk(c,a,b);return c;}
function A0v(a,b){return Y(Ns,b);}
function AHv(a){OK(a,16);}
function OK(a,b){ACk(a,b,0.75);}
function Uq(b){var c,d;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function ACk(a,b,c){var d;XH(a);if(b>=0&&c>0.0){d=Uq(b);a.hG=0;a.cq=a.Bc(d);a.Fx=c;Lv(a);return;}G(CK());}
function Lv(a){a.rk=a.cq.data.length*a.Fx|0;}
function ARV(a,b){var c;c=ZQ(a,b);if(c===null)return null;return c.g_;}
function ZQ(a,b){var c,d,e;if(b===null)c=K1(a);else{d=Ke(b);e=d&(a.cq.data.length-1|0);c=KA(a,b,e,d);}return c;}
function KA(a,b,c,d){var e,f;e=a.cq.data[c];while(e!==null){if(e.po==d){f=e.hH;if(V1(b,f))break;}e=e.e8;}return e;}
function K1(a){var b;b=a.cq.data[0];while(b!==null&&b.hH!==null){b=b.e8;}return b;}
function ANn(a,b,c){return a.Qe(b,c);}
function ARy(a,b,c){var d,e,f,g,h;if(b===null){d=K1(a);if(d===null){a.j3=a.j3+1|0;d=a.wq(null,0,0);e=a.hG+1|0;a.hG=e;if(e>a.rk)a.oS();}}else{f=Ke(b);g=f&(a.cq.data.length-1|0);d=KA(a,b,g,f);if(d===null){a.j3=a.j3+1|0;d=a.wq(b,g,f);e=a.hG+1|0;a.hG=e;if(e>a.rk)a.oS();}}h=d.g_;d.g_=c;return h;}
function AO$(a,b,c,d){var e;e=BbP(b,d);e.e8=a.cq.data[c];a.cq.data[c]=e;return e;}
function A0b(a,b){var c,d,e,f,g,h,i;c=Uq(!b?1:b<<1);d=a.Bc(c);e=0;while(e<a.cq.data.length){f=a.cq.data[e];a.cq.data[e]=null;while(f!==null){g=d.data;h=f.po&(c-1|0);i=f.e8;f.e8=g[h];g[h]=f;f=i;}e=e+1|0;}a.cq=d;Lv(a);}
function A6d(a){a.L$(a.cq.data.length);}
function AMS(a,b){var c;c=SK(a,b);if(c===null)return null;return c.g_;}
function SK(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.cq.data[0];while(e!==null){if(e.hH===null)break a;f=e.e8;d=e;e=f;}}else{g=Ke(b);c=g&(a.cq.data.length-1|0);e=a.cq.data[c];while(e!==null&&!(e.po==g&&V1(b,e.hH))){f=e.e8;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.e8=e.e8;else a.cq.data[c]=e.e8;a.j3=a.j3+1|0;a.hG=a.hG-1|0;return e;}
function Ke(b){return b.bp();}
function V1(b,c){return b!==c&&!b.z(c)?0:1;}
function DC(){Bx.call(this);this.Of=null;}
var Bjl=null;var Bjn=null;var Bjk=null;var Bjm=null;var Bjo=null;var Boi=null;function SL(){SL=N(DC);AO5();}
function II(a,b,c){var d=new DC();AB1(d,a,b,c);return d;}
function Mh(){SL();return Boi.gn();}
function AB1(a,b,c,d){SL();Cw(a,b,c);a.Of=d;}
function AO5(){Bjl=II(B(703),0,B(325));Bjn=II(B(704),1,B(327));Bjk=II(B(705),2,B(706));Bjm=II(B(707),3,B(326));Bjo=II(B(708),4,B(135));Boi=H(DC,[Bjl,Bjn,Bjk,Bjm,Bjo]);}
function ZF(){Bt.call(this);this.kO=0;}
function Bao(a){var b=new ZF();A0O(b,a);return b;}
function A0O(a,b){Co(a);a.kO=b;}
function AN6(a,b,c,d){var e;e=!d.jy()?c.i()-b|0:d.J()-b|0;if(e<=0){d.by(a.kO,0);return a.k.e(b,c,d);}if(c.f(b)!=10)return (-1);d.by(a.kO,1);return a.k.e(b+1|0,c,d);}
function AZO(a,b){var c;c=!b.et(a.kO)?0:1;b.by(a.kO,(-1));return c;}
function ADT(a){return B(709);}
function Dn(){var a=this;BI.call(a);a.d3=null;a.eN=0.0;a.eM=0.0;a.e$=0.0;a.e_=0.0;a.oD=0;}
var BmJ=Ba;var BmM=Ba;var Boj=Ba;var Bmw=Ba;var Bmy=Ba;var Bmu=Ba;var Bmv=Ba;var Bok=Ba;function B1(){B1=N(Dn);AJT();}
function Bol(a){var b=new Dn();JE(b,a);return b;}
function Bom(a,b){var c=new Dn();Kn(c,a,b);return c;}
function Bon(a,b,c,d,e,f,g){var h=new Dn();Ob(h,a,b,c,d,e,f,g);return h;}
function Bak(a,b){var c=new Dn();Zl(c,a,b);return c;}
function BdI(a){var b=new Dn();ACK(b,a);return b;}
function RW(b){B1();return Z(Br(b,Bok),Ba)?0:1;}
function ZV(b){B1();return Bak(BmJ,b);}
function JE(a,b){B1();Fb(a,b);a.eN=0.0;a.eM=0.0;a.e$=1.0;a.e_=1.0;a.oD=0;if(RW(b)){a.d3=A6m();return;}G(U(B(500)));}
function Kn(a,b,c){B1();JE(a,b);a.d3.JG(c);}
function Ob(a,b,c,d,e,f,g,h){B1();Kn(a,b,c);a.eN=d;a.eM=e;a.e$=f;a.e_=g;a.oD=h;}
function Zl(a,b,c){B1();JE(a,b);a.d3.eS=c;}
function ACK(a,b){B1();Ob(a,b.da,b.d3,b.eN,b.eM,b.e$,b.e_,b.oD);}
function A6B(a){return BdI(a);}
function AT3(a){var b,c;b=F2(a);c=(991*b|0)+a.d3.bp()|0;c=(991*c|0)+G0(a.eN)|0;c=(991*c|0)+G0(a.eM)|0;c=(991*c|0)+G0(a.e$)|0;c=(991*c|0)+G0(a.e_)|0;c=(991*c|0)+a.oD|0;return c;}
function AJT(){BmJ=BO(B(710));BmM=BO(B(711));Boj=BO(B(712));Bmw=BO(B(713));Bmy=BO(B(714));Bmu=BO(B(715));Bmv=BO(B(716));Bok=BN(BN(BN(BN(BN(BN(BmJ,BmM),Boj),Bmw),Bmy),Bmu),Bmv);}
function ABl(){var a=this;C.call(a);a.R=null;a.Z=0;a.z0=0;}
function Su(){var a=new ABl();AOY(a);return a;}
function Boo(a,b){var c=new ABl();T$(c,a,b);return c;}
function AOY(a){T$(a,1,16);}
function T$(a,b,c){J(a);a.z0=b;a.R=B_(c);}
function AXu(a,b){var c,d,e;c=a.R;d=c.data;if(a.Z==d.length)c=a.tZ(Bf(8,a.Z*1.75|0));d=c.data;e=a.Z;a.Z=e+1|0;d[e]=b;}
function AEK(a,b){a.rF(b.R,0,b.Z);}
function AQN(a,b,c,d){if((c+d|0)<=b.Z){a.rF(b.R,c,d);return;}G(W((((((((I()).a(B(490))).j(c)).a(B(427))).j(d)).a(B(428))).j(b.Z)).b()));}
function AD3(a,b,c,d){var e,f,g;e=a.R;f=e.data;g=a.Z+d|0;if(g>f.length)e=a.tZ(Bf(Bf(8,g),a.Z*1.75|0));X(b,c,e,a.Z,d);a.Z=a.Z+d|0;}
function AXZ(a,b){if(b<a.Z)return a.R.data[b];G(Bg((((((I()).a(B(429))).j(b)).a(B(430))).j(a.Z)).b()));}
function AUK(a,b,c){var d,e,f,g,h,i;d=a.Z;if(c>=d)G(Bg((((((I()).a(B(433))).j(c)).a(B(430))).j(a.Z)).b()));if(b>c)G(Bg((((((I()).a(B(434))).j(b)).a(B(432))).j(c)).b()));e=(c-b|0)+1|0;f=d-e|0;if(a.z0){g=a.R;h=b+e|0;X(g,h,a.R,b,d-h|0);}else{i=Bf(f,c+1|0);X(a.R,i,a.R,b,d-i|0);}a.Z=f;}
function AWe(a){a.Z=0;}
function APN(a,b){var c;if(b<0)G(W((((I()).a(B(436))).j(b)).b()));c=a.Z+b|0;if(c>a.R.data.length)a.tZ(Bf(Bf(8,c),a.Z*1.75|0));return a.R;}
function ANy(a,b){var c,d,e;c=B_(b);d=c.data;e=a.R;X(e,0,c,0,Bq(a.Z,d.length));a.R=c;return c;}
function AF_(a,b){if(a.Z>b)a.Z=b;}
var Bh=D();
var BnF=null;var BnG=null;var BnH=null;var BnI=null;var BnJ=null;var BnK=null;var BnL=null;var BnM=null;var BnN=null;var BnO=null;var BnP=null;var BnQ=null;var BnR=null;var BnS=null;var BnT=null;var BnU=null;var BnV=null;var BnW=null;var BnX=null;var BnY=null;var BnZ=null;var Bn0=null;var Bn1=null;var Bn2=null;var Bn3=null;var Bn4=null;var Bn5=null;var Bn6=null;var Bn7=null;var Bn8=null;var Bn9=null;var Bn$=null;var Bop=null;var Boq=null;var Bor=null;var Bn_=null;function BeF(){BeF=N(Bh);AV1();}
function AV1(){var b;BnF=Bk(B(476));BnG=Bk(B(717));BnH=Bk(B(718));BnI=Bk(B(719));BnJ=Bk(B(720));BnK=Bk(B(721));BnL=Bk(B(722));BnM=Bk(B(723));BnN=Bk(B(724));BnO=Bk(B(725));BnP=Bk(B(726));BnQ=Bk(B(727));b=new EY;ET();G1(b,B(728),BlA);BnR=b;b=new EY;GO();G1(b,B(729),Bjb);BnS=b;b=new EY;Cd();G1(b,B(730),BlW);BnT=b;b=new EY;B1();G1(b,B(731),BmJ);BnU=b;BnV=CJ(B(732),BmJ);BnW=CJ(B(733),BlX);BnX=CJ(B(734),BmM);BnY=CJ(B(735),BmM);BnZ=CJ(B(736),BlZ);Bn0=CJ(B(737),Bmu);Bn1=CJ(B(738),Bmu);Bn2=CJ(B(739),Bl0);Bn3=CJ(B(740),
Bmv);Bn4=CJ(B(741),Bmv);Bn5=CJ(B(742),Bmw);Bn6=CJ(B(743),Bmw);Bn7=CJ(B(744),Bmy);Bn8=CJ(B(745),Bmy);Bn9=Bk(B(746));Bn$=Bk(B(747));Bop=Bk(B(748));Boq=Bk(B(749));Bor=Bk(B(750));Bn_=Bk(B(751));}
var Ny=D(FT);
var Bos=null;function A85(){A85=N(Ny);ATT();}
function A_F(a,b,c,d){var e=new Ny();S_(e,a,b,c,d);return e;}
function BcG(a){var b=new Ny();AAW(b,a);return b;}
function S_(a,b,c,d,e){var f,g,h,i;A85();HL(a);f=b.dd();g=c.dd();h=d.dd();i=e.dd();a.dZ(AAu(f,g,h,i),1);}
function AAW(a,b){A85();HL(a);}
function ATT(){Bos=BcG(0);}
function AAu(b,c,d,e){var dispatcherJSObj=Bullet.wrapPointer(b,Bullet.btDispatcher);var broadphaceJSObj=Bullet.wrapPointer(c,Bullet.btBroadphaseInterface);var solverJSObj=Bullet.wrapPointer(d,Bullet.btConstraintSolver);var configJSObj=Bullet.wrapPointer(e,Bullet.btCollisionConfiguration);var jsObj=new Bullet.btDiscreteDynamicsWorld(dispatcherJSObj,broadphaceJSObj,solverJSObj,configJSObj);return Bullet.getPointer(jsObj);}
var Qv=D(D3);
function BdA(){var a=new Qv();A7a(a);return a;}
function A7a(a){N3(a);}
function Jq(){var a=this;C.call(a);a.jX=0;a.m6=0;}
var Bgj=null;var Bgi=null;function Bj(){Bj=N(Jq);AY4();}
function J7(a,b){var c=new Jq();Xr(c,a,b);return c;}
function Xr(a,b,c){Bj();J(a);a.jX=b;a.m6=c;}
function AM$(a){return a.jX?0:1;}
function A8J(a){return a.jX!=1?0:1;}
function A2i(a){return !a.zg()&&!a.t0()?0:1;}
function AJq(a){return a.jX!=2?0:1;}
function AR4(a){return a.jX!=3?0:1;}
function AIe(a){if(a.mw())return a.m6;G(Bfh());}
function BU(b){Bj();return J7(2,b);}
function F$(b){Bj();return J7(3,b);}
function APU(a){switch(a.jX){case 0:G(Bac());case 1:G(Bcj());case 2:G(Bda(a.m6));case 3:G(Bad(a.m6));default:}}
function AY4(){Bgj=J7(0,0);Bgi=J7(1,0);}
var Qw=D(Cl);
function Ban(){var a=new Qw();AZE(a);return a;}
function AZE(a){D_(a);}
function A$o(a,b,c){return 1;}
function A7H(a,b){}
var WN=D(Ch);
function Bb8(){var a=new WN();A90(a);return a;}
function A90(a){DR(a);}
function AQV(a,b,c,d,e){DZ(b,c,b.cU.jx);}
function LP(){Bt.call(this);this.iC=0;}
function BbJ(a){var b=new LP();ABq(b,a);return b;}
function ABq(a,b){Co(a);a.iC=b;}
function A5T(a,b,c,d){var e,f,g,h;e=!d.jy()?c.i():d.J();if(b>=e){d.by(a.iC,0);return a.k.e(b,c,d);}f=e-b|0;if(f==2&&c.f(b)==13){g=b+1|0;if(c.f(g)==10){d.by(a.iC,0);return a.k.e(b,c,d);}}a:{if(f==1){h=c.f(b);if(h==10)break a;if(h==13)break a;if(h==133)break a;if((h|1)==8233)break a;}return (-1);}d.by(a.iC,0);return a.k.e(b,c,d);}
function AXI(a,b){var c;c=!b.et(a.iC)?0:1;b.by(a.iC,(-1));return c;}
function A3d(a){return B(423);}
var WK=D(Ch);
function A_k(){var a=new WK();AUH(a);return a;}
function AUH(a){DR(a);}
function AOg(a,b,c,d,e){DZ(b,c,b.cU.eI);}
var WM=D(Ch);
function Bdc(){var a=new WM();ADC(a);return a;}
function ADC(a){DR(a);}
function A8j(a,b,c,d,e){DZ(b,c,b.cU.hq);}
var MP=D(Gn);
var Bot=null;function APZ(){APZ=N(MP);APB();}
function Bba(){var a=new MP();ZO(a);return a;}
function BbK(a){var b=new MP();YH(b,a);return b;}
function ZO(a){APZ();H3(a);a.dZ(Rc(),1);}
function YH(a,b){APZ();H3(a);}
function APB(){Bot=BbK(0);}
function Rc(){var jsObj=new Bullet.btDefaultCollisionConfiguration();return Bullet.getPointer(jsObj);}
var WI=D(Ch);
function BfB(){var a=new WI();ARP(a);return a;}
function ARP(a){DR(a);}
function A3R(a,b,c,d,e){Ly(b,c,b.cU.c7);}
var WJ=D(Ch);
function Bc6(){var a=new WJ();AFi(a);return a;}
function AFi(a){DR(a);}
function AEg(a,b,c,d,e){DO(b,c,b.cU.cp.n,b.cU.cp.o,b.cU.cp.q,1.188099980354309/(b.cU.jM*b.cU.jM));}
var WG=D(Ch);
function Baa(){var a=new WG();A0G(a);return a;}
function A0G(a){DR(a);}
function A5X(a,b,c,d,e){Ww(b,c,b.cU.k9,b.cU.jM);}
function TA(){var a=this;C.call(a);a.ko=0;a.fY=0;a.hv=null;a.gb=null;a.EX=0;a.le=0;a.r5=0;a.t6=0;a.Ig=null;a.hu=0;}
function Bb1(a,b){var c=new TA();A9W(c,a,b);return c;}
function Bou(a,b,c){var d=new TA();Yv(d,a,b,c);return d;}
function A9W(a,b,c){Yv(a,b,c,(-1));}
function Yv(a,b,c,d){var e;J(a);a.r5=0;a.t6=0;a.Ig=A6m();a.hu=0;e=Bq(A2s(),32);if(d<0)d=e-c|0;if(c>=0&&d>=0&&(c+d|0)<=e){a.EX=b;a.ko=c;a.fY=d;a.hv=Y(Fo,d);a.gb=b!=1?null:Bc(d);return;}G(U(B(752)));}
function A2s(){var b;b=Fk(16);BhL.Oa(34930,b);return b.b2(0);}
function AZ6(a){var b;b=0;while(b<a.fY){a.hv.data[b]=null;if(a.gb!==null)a.gb.data[b]=b;b=b+1|0;}}
function AJK(a){BhL.rC(33984);}
function AEE(a,b){return Sf(a,b,0);}
function Sf(a,b,c){var d,e;a:{d=b.eS;a.le=0;switch(a.EX){case 0:e=a.ko+Te(a,d)|0;break a;case 1:e=a.ko+UV(a,d)|0;break a;default:}return (-1);}if(!a.le)a.t6=a.t6+1|0;else{a.r5=a.r5+1|0;if(c)d.rQ(e);else BhL.rC(33984+e|0);}d.Ly(b.lx,b.mp);d.P5(b.mJ,b.lJ);return e;}
function Te(a,b){var c,d;c=0;while(true){if(c>=a.fY){a.hu=(a.hu+1|0)%a.fY|0;a.hv.data[a.hu]=b;b.rQ(a.ko+a.hu|0);return a.hu;}d=(a.hu+c|0)%a.fY|0;if(a.hv.data[d]===b)break;c=c+1|0;}a.le=1;return d;}
function UV(a,b){var c,d;c=0;a:{while(true){if(c>=a.fY)break a;d=a.gb.data[c];if(a.hv.data[d]===b){a.le=1;break a;}if(a.hv.data[d]===null)break;c=c+1|0;}}if(c>=a.fY)c=a.fY-1|0;d=a.gb.data[c];while(c>0){a.gb.data[c]=a.gb.data[c-1|0];c=c+(-1)|0;}a.gb.data[0]=d;if(!a.le){a.hv.data[d]=b;b.rQ(a.ko+d|0);}return d;}
var WH=D(Ch);
function Be4(){var a=new WH();ARX(a);return a;}
function ARX(a){DR(a);}
function ASA(a,b,c,d,e){Ly(b,c,b.cU.ds);}
function WE(){V.call(this);this.yM=null;}
function Ba9(){var a=new WE();A4k(a);return a;}
function A4k(a){BL(a);a.yM=BF();}
function AFo(a,b,c,d,e){DZ(b,c,(a.yM.ch(b.cU.hq)).hA(d.dy));}
function Gj(){var a=this;C.call(a);a.L=null;a.iB=0;a.eC=0;a.zx=0;a.q5=0;a.ee=0;a.m=0;a.Dh=0;a.i1=null;a.f4=null;a.y=0;a.mE=0;a.lm=0;a.l8=0;a.Bg=null;}
var Bov=null;var Bow=null;var Box=0;function Bds(a,b){var c=new Gj();A8y(c,a,b);return c;}
function A8y(a,b,c){J(a);a.eC=1;a.Bg=b;if((c&16)>0)b=A10(b);else if((c&128)>0)b=AYa(b);a.L=BW(b.i()+2|0);X(b.rv(),0,a.L,0,b.i());a.L.data[a.L.data.length-1|0]=0;a.L.data[a.L.data.length-2|0]=0;a.Dh=a.L.data.length;a.iB=c;Ee(a);Ee(a);}
function A2l(a){return a.ee;}
function AXo(a,b){if(b>0&&b<3)a.eC=b;if(b==1)Yx(a);}
function AW1(a,b){a.iB=b;a.m=a.ee;a.f4=a.i1;a.y=a.lm+1|0;a.l8=a.lm;Ee(a);}
function AG6(a){return a.i1;}
function AO0(a){return a.i1===null?0:1;}
function AFy(a){return a.f4===null?0:1;}
function A6C(a){Ee(a);return a.q5;}
function AXS(a){var b;b=a.i1;Ee(a);return b;}
function AVQ(a){return a.m;}
function AIc(a){return a.q5;}
function AYa(b){return b;}
function Yx(a){a.m=a.ee;a.f4=a.i1;a.y=a.l8;a.l8=a.lm;Ee(a);}
function Ee(a){var b,c,d,e,f,g,h,$$je;a.q5=a.ee;a.ee=a.m;a.i1=a.f4;a.lm=a.l8;a.l8=a.y;while(true){b=0;a.m=a.y>=a.L.data.length?0:Ia(a);a.f4=null;if(a.eC==4){if(a.m!=92)return;a.m=a.y>=a.L.data.length?0:a.L.data[BG(a)];switch(a.m){case 69:break;default:a.m=92;a.y=a.mE;return;}a.eC=a.zx;a.m=a.y>(a.L.data.length-2|0)?0:Ia(a);}a:{if(a.m!=92){if(a.eC==1)switch(a.m){case 36:a.m=(-536870876);break a;case 40:if(a.L.data[a.y]!=63){a.m=(-2147483608);break a;}BG(a);c=a.L.data[a.y];d=0;while(true){b:{if(d){d=0;switch(c)
{case 33:break;case 61:a.m=(-134217688);BG(a);break b;default:G(BP(B(101),a.b(),a.y));}a.m=(-67108824);BG(a);}else{switch(c){case 33:break;case 60:BG(a);c=a.L.data[a.y];d=1;break b;case 61:a.m=(-536870872);BG(a);break b;case 62:a.m=(-33554392);BG(a);break b;default:a.m=ACD(a);if(a.m<256){a.iB=a.m;a.m=a.m<<16;a.m=(-1073741784)|a.m;break b;}a.m=a.m&255;a.iB=a.m;a.m=a.m<<16;a.m=(-16777176)|a.m;break b;}a.m=(-268435416);BG(a);}}if(!d)break;}break a;case 41:a.m=(-536870871);break a;case 42:case 43:case 63:e=a.y>=
a.L.data.length?42:a.L.data[a.y];switch(e){case 43:a.m=a.m|(-2147483648);BG(a);break a;case 63:a.m=a.m|(-1073741824);BG(a);break a;default:}a.m=a.m|(-536870912);break a;case 46:a.m=(-536870866);break a;case 91:a.m=(-536870821);a.pL(2);break a;case 93:if(a.eC!=2)break a;a.m=(-536870819);break a;case 94:a.m=(-536870818);break a;case 123:a.f4=Ub(a,a.m);break a;case 124:a.m=(-536870788);break a;default:}else if(a.eC==2)switch(a.m){case 38:a.m=(-536870874);break a;case 45:a.m=(-536870867);break a;case 91:a.m=(-536870821);break a;case 93:a.m
=(-536870819);break a;case 94:a.m=(-536870818);break a;default:}}else{f=a.y>=(a.L.data.length-2|0)?(-1):Ia(a);c:{a.m=f;switch(a.m){case -1:G(BP(B(101),a.b(),a.y));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.m
=Ss(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.eC!=1)break a;a.m=(-2147483648)|a.m;break a;case 65:a.m=(-2147483583);break a;case 66:a.m=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:G(BP(B(101),a.b(),a.y));case 68:case 83:case 87:case 100:case 115:case 119:a.f4=KZ(F1(a.L,
a.mE,1),0);a.m=0;break a;case 71:a.m=(-2147483577);break a;case 80:case 112:break c;case 81:a.zx=a.eC;a.eC=4;b=1;break a;case 90:a.m=(-2147483558);break a;case 97:a.m=7;break a;case 98:a.m=(-2147483550);break a;case 99:if(a.y>=(a.L.data.length-2|0))G(BP(B(101),a.b(),a.y));a.m=a.L.data[BG(a)]&31;break a;case 101:a.m=27;break a;case 102:a.m=12;break a;case 110:a.m=10;break a;case 114:a.m=13;break a;case 116:a.m=9;break a;case 117:a.m=MT(a,4);break a;case 120:a.m=MT(a,2);break a;case 122:a.m=(-2147483526);break a;default:}break a;}g
=ZT(a);h=0;if(a.m==80)h=1;try{a.f4=KZ(g,h);}catch($$e){$$je=R($$e);if($$je instanceof Mn){G(BP(B(101),a.b(),a.y));}else{throw $$e;}}a.m=0;}}if(b)continue;else break;}}
function ZT(a){var b,c,d;b=Gf(10);if(a.y<(a.L.data.length-2|0)){if(a.L.data[a.y]!=123)return (((I()).a(B(753))).a(F1(a.L,BG(a),1))).b();BG(a);c=0;a:{while(a.y<(a.L.data.length-2|0)){c=a.L.data[BG(a)];if(c==125)break a;b.U(c);}}if(c!=125)G(BP(B(101),a.b(),a.y));}if(!b.i())G(BP(B(101),a.b(),a.y));d=b.b();if(d.i()==1)return (((I()).a(B(753))).a(d)).b();b:{c:{if(d.i()>3){if(d.e0(B(753)))break c;if(d.e0(B(754)))break c;}break b;}d=d.ei(2);}return d;}
function Ub(a,b){var c,d,e,f,$$je;c=Gf(4);d=(-1);e=2147483647;a:{while(true){if(a.y>=a.L.data.length)break a;b=a.L.data[BG(a)];if(b==125)break a;if(b==44&&d<0)try{d=Dr(c.b(),10);c.LQ(0,c.i());continue;}catch($$e){$$je=R($$e);if($$je instanceof Ds){break;}else{throw $$e;}}c.U(b&65535);}G(BP(B(101),a.b(),a.y));}if(b!=125)G(BP(B(101),a.b(),a.y));if(c.i()>0)b:{try{e=Dr(c.b(),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=R($$e);if($$je instanceof Ds){}else{throw $$e;}}G(BP(B(101),a.b(),a.y));}else if(d<0)G(BP(B(101),
a.b(),a.y));if((d|e|(e-d|0))<0)G(BP(B(101),a.b(),a.y));f=a.y>=a.L.data.length?42:a.L.data[a.y];c:{switch(f){case 43:a.m=(-2147483525);BG(a);break c;case 63:a.m=(-1073741701);BG(a);break c;default:}a.m=(-536870789);}return BeC(d,e);}
function AIL(a){return a.Bg;}
function A0_(a){return !a.ee&&!a.m&&a.y==a.Dh&&!a.kX()?1:0;}
function I2(b){return b<0?0:1;}
function ASZ(a){return !a.bN()&&!a.kX()&&I2(a.ee)?1:0;}
function AWB(a){return a.ee<=56319&&a.ee>=55296?1:0;}
function A6y(a){return a.ee<=57343&&a.ee>=56320?1:0;}
function K5(b){return b<=56319&&b>=55296?1:0;}
function Kh(b){return b<=57343&&b>=56320?1:0;}
function MT(a,b){var c,d,e,f,$$je;c=Gf(b);d=a.L.data.length-2|0;e=0;while(true){f=B8(e,b);if(f>=0)break;if(a.y>=d)break;c.U(a.L.data[BG(a)]);e=e+1|0;}if(!f)a:{try{f=Dr(c.b(),16);}catch($$e){$$je=R($$e);if($$je instanceof Ds){break a;}else{throw $$e;}}return f;}G(BP(B(101),a.b(),a.y));}
function Ss(a){var b,c,d,e,f;b=3;c=1;d=a.L.data.length-2|0;e=NJ(a.L.data[a.y],8);switch(e){case -1:break;default:if(e>3)b=2;BG(a);a:{while(true){if(c>=b)break a;if(a.y>=d)break a;f=NJ(a.L.data[a.y],8);if(f<0)break;e=(e*8|0)+f|0;BG(a);c=c+1|0;}}return e;}G(BP(B(101),a.b(),a.y));}
function ACD(a){var b,c,d;b=1;c=a.iB;a:while(true){if(a.y>=a.L.data.length)G(BP(B(101),a.b(),a.y));b:{c:{d=a.L.data[a.y];switch(d){case 41:BG(a);return c|256;case 45:if(!b)G(BP(B(101),a.b(),a.y));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BG(a);}BG(a);return c;}
function BG(a){a.mE=a.y;if(a.iB&4)VS(a);else a.y=a.y+1|0;return a.mE;}
function VS(a){var b;b=a.L.data.length-2|0;a.y=a.y+1|0;a:while(true){if(a.y<b&&S8(a.L.data[a.y])){a.y=a.y+1|0;continue;}if(a.y>=b)break;if(a.L.data[a.y]!=35)break;a.y=a.y+1|0;while(true){if(a.y>=b)continue a;if(QZ(a,a.L.data[a.y]))continue a;a.y=a.y+1|0;}}return a.y;}
function QZ(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function ABH(b){return Bov.So(b);}
function AGV(b){var c,d,e,f,g,h;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;if(!f)g=MB([d,e]);else{h=4519+f|0;g=MB([d,e,h]);}return g;}return null;}
function AL$(b){var c;c=Bow.b2(b);return c==Box?0:1;}
function A5n(b){return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);}
function Ia(a){var b,c,d;b=a.L.data[BG(a)];if(BY(b)){c=a.mE+1|0;if(c<a.L.data.length){d=a.L.data[c];if(BH(d)){BG(a);return Df(b,d);}}}return b;}
function AFf(a){return a.lm;}
var WF=D(V);
function Bbn(){var a=new WF();AJX(a);return a;}
function AJX(a){BL(a);}
function AHB(a,b,c,d,e){DZ(b,c,d.dy);}
var XP=D(T);
function BcZ(){var a=new XP();AS1(a);return a;}
function AS1(a){Bo(a);}
function ASq(a){return ((CR()).bF(65279,65279)).bF(65520,65533);}
var Za=D(Jc);
function A_h(){var a=new Za();ASa(a);return a;}
function ASa(a){Rn(a);}
function AWf(a){var b;b=(YP(a)).f8(1);b.be=1;return b;}
var Xq=D(CN);
var Yj=D();
function HY(){return 1;}
function U5(){var a=this;C.call(a);a.w=null;a.dG=null;a.rm=0;a.gF=null;a.tq=0;a.uN=null;a.qc=0;a.OV=null;a.LG=0;a.Gc=null;a.Qq=0;a.rw=null;a.s8=0;a.oJ=null;a.ta=0;a.un=0;a.kA=null;a.Nz=null;a.k$=null;a.lY=null;}
function Bdg(a){var b=new U5();A3J(b,a);return b;}
function A3J(a,b){J(a);a.dG=C5();a.rm=1;a.gF=C5();a.tq=1;a.uN=C5();a.qc=1;a.OV=C5();a.LG=1;a.Gc=C5();a.Qq=1;a.rw=C5();a.s8=1;a.oJ=C5();a.ta=1;a.un=0;a.w=b;a.kA=(DT()).Fc(40000);a.k$=(DT()).Dt(12000);a.Nz=(DT()).LI(12000);a.lY=(DT()).AR(240000);a.w.pixelStorei(37441,0);}
function Uu(a,b){if(Bb(b)>a.kA.length)a.kA=(DT()).Fc(Bb(b));}
function ACm(a,b){if(Bb(b)>a.k$.length)a.k$=(DT()).Dt(Bb(b));}
function ABA(a,b){if(Bb(b)>a.lY.length)a.lY=(DT()).AR(Bb(b));}
function A0B(a,b){var c,d,e,f,g;Uu(a,b);c=B7(b);d=0;while(c<BE(b)){e=a.kA;f=b.n9(c);e[d]=f;c=c+1|0;d=d+1|0;}e=a.kA;g=Bb(b);return e.subarray(0,g);}
function ATB(a,b){var c,d,e,f,g;ACm(a,b);c=B7(b);d=0;while(c<BE(b)){e=a.k$;f=b.J8(c);e[d]=f;c=c+1|0;d=d+1|0;}e=a.k$;g=Bb(b);return e.subarray(0,g);}
function AMY(a,b){var c,d,e,f,g;ABA(a,b);c=B7(b);d=0;while(c<BE(b)){e=a.lY;f=b.zf(c);e[d]=f;c=c+1|0;d=d+1|0;}e=a.lY;g=Bb(b);return e.subarray(0,g);}
function XI(a,b,c){var d,e;d=a.oJ.W(Bn(b));if(d===null){d=C5();a.oJ.x(Bn(b),d);}e=a.ta;a.ta=e+1|0;d.x(Bn(e),c);return e;}
function DL(a,b){return (a.oJ.W(Bn(a.un))).W(Bn(b));}
function Uj(a,b){var c;c=a.tq;a.tq=c+1|0;a.gF.x(Bn(c),b);return c;}
function Pi(a,b){var c;c=a.rm;a.rm=c+1|0;a.dG.x(Bn(c),b);return c;}
function Tg(a,b){var c;c=a.qc;a.qc=c+1|0;a.uN.x(Bn(c),b);return c;}
function Q7(a,b){var c;c=a.s8;a.s8=c+1|0;a.rw.x(Bn(c),b);return c;}
function A5j(a,b){a.w.activeTexture(b);}
function AK_(a,b,c){var d,e;d=a.w;e=a.rw.W(Bn(c));d.bindTexture(b,e);}
function AJ$(a,b,c){a.w.blendFunc(b,c);}
function ANM(a,b){a.w.clear(b);}
function A91(a,b,c,d,e){a.w.clearColor(b,c,d,e);}
function AEO(a,b){a.w.cullFace(b);}
function A9K(a,b){a.w.depthFunc(b);}
function A0m(a,b){a.w.depthMask(!!b);}
function AW6(a,b,c){a.w.depthRange(b,c);}
function A2N(a,b){a.w.disable(b);}
function A$K(a,b,c,d){a.w.drawArrays(b,c,d);}
function A5t(a,b,c,d,e){var f,g;f=a.w;g=B7(e);f.drawElements(b,c,d,g);}
function ATI(a,b){a.w.enable(b);}
function A0q(a){var b;b=a.w.createTexture();return Q7(a,b);}
function AY8(a,b,c){var d;a:{if(b==34016)break a;if(b==3413)break a;if(b==32970)break a;if(b==32968)break a;if(b==34877)break a;if(b==32777)break a;if(b==32971)break a;if(b==32969)break a;if(b==3412)break a;if(b==2885)break a;if(b==3414)break a;if(b==2932)break a;if(b==2886)break a;if(b==33170)break a;if(b==3411)break a;if(b==35739)break a;if(b==35738)break a;if(b==35661)break a;if(b==34076)break a;if(b==36349)break a;if(b==34024)break a;if(b==34930)break a;if(b==3379)break a;if(b==36348)break a;if(b==34921)break a;if
(b==35660)break a;if(b==36347)break a;if(b==34466)break a;if(b==3333)break a;if(b==3410)break a;if(b==32936)break a;if(b==32937)break a;if(b==34817)break a;if(b==34816)break a;if(b==34818)break a;if(b==34819)break a;if(b==36003)break a;if(b==36004)break a;if(b==36005)break a;if(b==3415)break a;if(b==2961)break a;if(b==2964)break a;if(b==2962)break a;if(b==2965)break a;if(b==2966)break a;if(b==2967)break a;if(b==2963)break a;if(b==2968)break a;if(b==3408)break a;if(b==3317)break a;G(U(B(755)));}d=a.w.getParameter(b);c.tf(0,
d);}
function AT8(a,b,c){a.w.pixelStorei(b,c);}
function AJz(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q;if(j===null){k=a.w;l=null;k.texImage2D(b,c,d,e,f,g,h,i,l);}else if(BE(j)>4){m=!(j instanceof DU)?a.HW(j):a.ut(j);a.w.texImage2D(b,c,d,e,f,g,h,i,m);}else{n=j.OP(0);FD();o=BiZ.W(Bn(n));if(o.Qk()){p=a.w;q=o.NZ();p.texImage2D(b,c,d,h,i,q);}else if(!o.Jz()){p=a.w;q=o.sS();p.texImage2D(b,c,d,h,i,q);}else{p=a.w;q=o.Jb();p.texImage2D(b,c,d,h,i,q);}}}
function A50(a,b,c,d){a.w.texParameterf(b,c,d);}
function AXD(a,b,c,d,e){a.w.viewport(b,c,d,e);}
function ALm(a,b,c){var d,e;d=a.dG.W(Bn(b));e=a.gF.W(Bn(c));a.w.attachShader(d,e);}
function AOm(a,b,c){var d,e;d=a.w;e=a.uN.W(Bn(c));d.bindBuffer(b,e);}
function AZv(a,b,c,d,e){a.w.blendFuncSeparate(b,c,d,e);}
function AYR(a,b,c,d,e){var f,g,h,i;if(d instanceof DU){f=d;g=a.ut(f);a.w.bufferData(b,g,e);}else{if(!(d instanceof GI))G(U(B(756)));h=a.w;i=a.KG(d);h.bufferData(b,i,e);}}
function AMN(a,b,c,d,e){var f,g;if(e instanceof DU){f=a.w;g=a.ut(e);f.bufferSubData(b,c,g);}}
function AIp(a,b){var c;c=a.gF.W(Bn(b));a.w.compileShader(c);}
function AGG(a){var b;b=a.w.createProgram();return Pi(a,b);}
function A04(a,b){var c;c=a.w.createShader(b);return Uj(a,c);}
function AP7(a,b){a.w.disableVertexAttribArray(b);}
function A6c(a,b,c,d,e){a.w.drawElements(b,c,d,e);}
function ARo(a,b){a.w.enableVertexAttribArray(b);}
function AZa(a){var b;b=a.w.createBuffer();return Tg(a,b);}
function A5s(a,b){a.w.generateMipmap(b);}
function ANR(a,b,c,d,e){var f,g,h;f=a.w;g=a.dG.W(Bn(b));h=f.getActiveAttrib(g,c);d.gr(h.size);e.gr(h.type);return $rt_str(h.name);}
function ADJ(a,b,c,d,e){var f,g,h;f=a.w;g=a.dG.W(Bn(b));h=f.getActiveUniform(g,c);d.gr(h.size);e.gr(h.type);return $rt_str(h.name);}
function AIM(a,b,c){var d;d=a.dG.W(Bn(b));return a.w.getAttribLocation(d,$rt_ustr(c));}
function ALI(a,b,c){if(b!=2931&&b!=2849&&b!=32824&&b!=10752&&b!=32938)G(U(B(757)));c.Kk(0,a.w.getParameter(b));}
function AJG(a,b,c,d){var e,f,g,h,i;if(c!=35712&&c!=35714&&c!=35715){e=a.w;f=a.dG.W(Bn(b));d.gr(e.getProgramParameter(f,c));}else{g=a.w;h=a.dG.W(Bn(b));i=g.getProgramParameter(h,c)?1:0;d.gr(!i?0:1);}}
function AYB(a,b){var c,d;c=a.w;d=a.dG.W(Bn(b));return $rt_str(c.getProgramInfoLog(d));}
function A5q(a,b,c,d){var e,f,g,h;if(c!=35713&&c!=35712){e=a.w;f=a.gF.W(Bn(b));g=e.getShaderParameter(f,c);d.gr(g);}else{h=a.w;e=a.gF.W(Bn(b));g=h.getShaderParameter(e,c)?1:0;d.gr(!g?0:1);}}
function A$n(a,b){var c,d;c=a.w;d=a.gF.W(Bn(b));return $rt_str(c.getShaderInfoLog(d));}
function AGP(a,b,c){var d,e,f;d=a.w;e=a.dG.W(Bn(b));f=d.getUniformLocation(e,$rt_ustr(c));if(f!==null)return XI(a,b,f);return (-1);}
function AUf(a,b){var c,d;c=a.w;d=a.dG.W(Bn(b));c.linkProgram(d);}
function AVy(a,b,c){var d,e;d=a.w;e=a.gF.W(Bn(b));d.shaderSource(e,$rt_ustr(c));}
function AN9(a,b,c,d){var e,f;e=a.w;f=d;e.texParameterf(b,c,f);}
function AVP(a,b,c){var d;d=DL(a,b);a.w.uniform1f(d,c);}
function AOC(a,b,c){var d;d=DL(a,b);a.w.uniform1i(d,c);}
function ALW(a,b,c,d){var e;e=DL(a,b);a.w.uniform2f(e,c,d);}
function AZM(a,b,c,d,e){var f;f=DL(a,b);a.w.uniform3f(f,c,d,e);}
function AXQ(a,b,c,d,e){var f;f=DL(a,b);a.w.uniform3fv(f,Ni(d));}
function AD7(a,b,c,d,e,f){var g;g=DL(a,b);a.w.uniform4f(g,c,d,e,f);}
function AQC(a,b,c,d,e,f){var g;g=DL(a,b);a.w.uniformMatrix3fv(g,!!d,Ni(e));}
function A0y(a,b,c,d,e,f){var g;g=DL(a,b);a.w.uniformMatrix4fv(g,!!d,Ni(e));}
function A1z(a,b){var c,d;a.un=b;c=a.w;d=a.dG.W(Bn(b));c.useProgram(d);}
function A9p(a,b,c,d,e,f,g){a.w.vertexAttribPointer(b,c,d,!!e,f,g);}
var XQ=D(Fr);
function Bcw(a,b,c,d,e,f){var g=new XQ();AD_(g,a,b,c,d,e,f);return g;}
function AD_(a,b,c,d,e,f,g){Ls(a,b,c,d,e,f,g);}
function A4s(a,b){var c,d,e,f;c=a.fG.A.data;d=a.fB;e=b*2|0;f=(c[d+e|0]&255)<<8|a.fG.A.data[(a.fB+e|0)+1|0]&255;return f<<16>>16;}
function AX6(a,b,c){var d,e,f;d=a.fG.A.data;e=a.fB;f=b*2|0;d[e+f|0]=c>>8<<24>>24;a.fG.A.data[(a.fB+f|0)+1|0]=c<<24>>24;}
$rt_packages([-1,"com",0,"badlogic",1,"gdx",2,"utils",3,"reflect",2,"graphics",5,"g2d",-1,"java",7,"util",8,"regex",7,"nio",10,"charset",7,"io",7,"lang"]);
$rt_metadata([C,"Object",13,0,[],0,3,0,0,["Rv",BfU(EM),"TN",BfU(Cj),"bp",BfU(MM),"z",BfV(AMF),"b",BfU(PS),"Ut",BfU(Is),"gn",BfU(ALD)],T,0,C,[],1,0,0,0,["d",BfU(Bo),"Hf",BfV(A6z)],RN,0,T,[],0,0,0,0,["d",BfU(A65),"T",BfU(AYi)],Qo,0,T,[],0,0,0,0,["d",BfU(A9v),"T",BfU(AMK)],I1,0,C,[],3,3,0,0,0,VZ,0,C,[],0,3,0,0,["QW",BfW(AQ0),"tH",BfU(AHL),"dO",BfV(A9C),"K$",BfU(AI8),"ef",BfV(A7l),"ek",BfV(AZX),"dR",BfV(A_d)],E2,0,C,[],3,3,0,0,0,HJ,0,C,[E2],1,3,0,0,["d",BfU(P5),"jh",BfU(A0W),"Pe",BfU(AWV)],Wk,0,C,[],4,3,0,0,0,B2,
0,C,[],3,3,0,0,0,D1,0,C,[B2],1,3,0,0,["d",BfU(ACj)],B9,0,C,[],3,3,0,0,0,D2,0,D1,[B9],0,3,0,C0,["bj",BfV(Hr),"lj",BfU(AVN),"b",BfU(ASm),"bp",BfU(AUx),"z",BfV(A9$)],Ez,0,C,[],0,0,0,A_V,0,Bt,0,C,[],1,0,0,WW,["d",BfU(Co),"w$",BfV(I_),"cC",BfX(F3),"cG",BfY(Gb),"Ax",BfV(AXT),"i3",BfU(AWZ),"FT",BfU(AM4),"b",BfU(APE),"Ji",BfU(AQm),"Q",BfV(LJ),"ca",BfV(A8x),"h5",BfU(A9Q),"ed",BfU(OM)],BC,0,Bt,[],0,0,0,0,["d",BfU(CP),"iP",BfW(Sv),"e",BfX(AJa),"Q",BfV(AOt),"u",BfU(AKY),"ca",BfV(A2H),"ba",BfV(APj),"ed",BfU(AF7)],Fz,0,BC,
[],0,0,0,0,["Xf",BfW(Qa),"e",BfX(ADF),"cC",BfX(AMk),"cG",BfY(A6Y),"ca",BfV(A2y),"h5",BfU(A5f),"ed",BfU(AS0)],HR,0,C,[],1,3,0,0,["Xv",BfY(ACf),"uy",BfX(Yr),"S7",BfV(K2),"vd",BfV(ATb),"Su",BfV(LQ),"qP",BfV(A1k),"T6",BfX(ID),"FS",BfV(XO),"S1",BfV(JN),"Lj",BfV(A3i),"WT",BfU(OS),"uR",BfU(AOh)],Dm,0,HR,[],1,3,0,0,["uy",BfX(GH),"OF",BfW(AET)],Xp,0,Dm,[],0,3,0,0,["I7",BfX(A5w),"mU",function(b,c,d,e,f,g,h){return A6D(this,b,c,d,e,f,g,h);}],Cr,0,C,[],3,3,0,0,0,BR,0,C,[Cr],1,3,0,0,["d",BfU(B$),"dZ",BfW(AV6),"yA",BfV(AJ3),
"z",BfV(AC5),"bp",BfU(A4P),"dd",BfU(AWC),"iw",BfU(AKF),"b",BfU(AVl)],F9,0,BR,[],0,3,0,AHV,["b6",BfV(Xv),"d",BfU(If),"JR",BfV(ASg)],Od,0,F9,[],0,3,0,ARs,["Tu",BfY(Sx),"IO",BfU(AJ9),"b6",BfV(ABY)],Dh,0,BR,[],0,3,0,H5,["b6",BfV(AAM),"Ob",BfV(AQ$),"Kd",BfV(ASS)],Ey,0,C,[E2],0,3,0,LW,["bP",BfV(Wm),"V9",BfW(NQ)],Ja,0,T,[],0,0,0,0,["d",BfU(P9),"T",BfU(P1)],Bw,0,C,[],0,3,0,Bbm,0,O8,0,Fz,[],0,0,0,0,["RF",BfV(APx),"cC",BfX(AIq),"cG",BfY(A$Z),"h5",BfU(AGl)],C_,0,C,[],0,3,0,0,["ob",BfU(AZC),"mP",BfU(APT),"Go",BfU(AI5),
"Ft",BfU(A0V),"yT",BfV(ATr)],B3,0,C_,[],0,3,0,0,["d",BfU(E$),"i$",BfW(JV),"bP",BfV(Mi)],Bm,"RuntimeException",13,B3,[],0,3,0,0,["d",BfU(Cx),"i$",BfW(PX),"bP",BfV(EF)],Uv,"BufferOverflowException",11,Bm,[],0,3,0,0,["d",BfU(ANC)],LK,0,C,[],3,3,0,0,0,ZH,0,C,[LK],0,3,0,0,["VG",BfV(ACY),"Ow",BfU(A8z),"HE",BfU(AVx),"KD",BfU(AJx),"jY",BfU(APg),"nG",BfU(AWk),"L9",BfY(ARp),"AX",BfW(AM6),"na",BfW(AIY),"GB",BfW(ALX),"tp",BfW(AWl),"Ls",BfX(ALZ),"JM",BfY(AYe)],B6,0,C,[],3,3,0,0,0,VF,0,C,[B6],1,3,0,0,0,Hd,0,T,[],0,0,0,0,
["d",BfU(Qy),"T",BfU(RP)],ABw,0,Hd,[],0,0,0,0,["d",BfU(A05),"T",BfU(ANc)],Ot,0,C,[],3,3,0,0,0,V6,0,C,[E2,Ot],0,0,0,0,["Tk",BfV(ADI),"nR",BfV(ASv),"fc",BfU(A8S),"PI",BfU(ART)],Bx,0,C,[B9,B2],1,3,0,0,["dT",BfW(Cw),"Q3",BfU(BD),"b",BfU(A0C)],Di,0,Bx,[],12,3,0,Vr,0,BJ,0,Bt,[],1,0,0,0,["w$",BfV(VK),"d",BfU(C1),"e",BfX(A$z),"cg",BfU(A7V),"ba",BfV(AKM)],Pb,0,BJ,[],0,0,0,0,["EZ",BfV(A0L),"bH",BfW(A64),"u",BfU(A8i)],Fp,0,C,[],3,3,0,0,0,Jf,0,C,[Fp],0,3,0,0,["d",BfU(ACL),"lp",BfV(AVD),"m8",BfW(ARx)],Ir,0,Jf,[],0,3,0,0,
["S9",BfV(Vt),"Vr",function(b,c,d,e,f){ABS(this,b,c,d,e,f);},"UL",function(b,c,d,e,f,g){O0(this,b,c,d,e,f,g);},"im",BfY(ON),"rW",BfY(AOw),"i8",BfX(VN),"QD",BfX(ADr),"hO",BfY(AAp),"NV",BfY(ADf)],FO,"CharSequence",13,C,[],3,3,0,0,0,D5,0,C_,[],0,3,0,0,["i$",BfW(SR),"bP",BfV(XG),"EL",BfV(AAe)]]);
$rt_metadata([FS,0,D5,[],0,3,0,0,["bP",BfV(OU)],RC,0,C,[],0,3,0,0,["d",BfU(AHl),"mq",BfW(XL),"e6",BfV(ARG),"Jm",BfV(AYc),"MZ",BfV(ARS)],Ej,"IndexOutOfBoundsException",13,Bm,[],0,3,0,0,["d",BfU(PU),"bP",BfV(M5)],ACp,"StringIndexOutOfBoundsException",13,Ej,[],0,3,0,0,["d",BfU(AQZ)],Mn,"MissingResourceException",8,Bm,[],0,3,0,0,["WW",BfX(AZx)],KE,0,C,[],0,3,0,MY,0,Jy,0,C,[],1,3,0,0,["uy",BfX(UW),"V8",BfV(Oa),"vd",BfV(A8F),"WE",BfV(Le),"qP",BfV(A0Q),"U7",BfX(IX),"Ug",BfV(KV),"Xz",BfU(AB8),"Qi",BfV(WO),"G4",BfV(ANd),
"uR",BfU(AY2)],KG,0,C,[],4,3,0,Bcq,0,FM,0,BC,[],0,0,0,0,["fT",BfW(Kg),"e",BfX(AEe),"Q",BfV(A52),"j7",BfV(AGB),"u",BfU(AVh),"ba",BfV(APA)],YJ,0,FM,[],0,0,0,0,["fT",BfW(AID),"e",BfX(AMe),"u",BfU(AWP)],LX,0,C,[B6],3,3,0,0,0,I3,0,C,[],4,3,0,Ev,0,EL,0,Bx,[],12,3,0,O3,0,YY,0,T,[],0,0,0,0,["we",BfW(AGm),"Kv",BfX(ASL),"T",BfU(AZL)],LY,0,C,[],3,3,0,0,0,Gi,0,C,[LY],3,3,0,0,0,NG,0,C,[],3,3,0,0,0,DQ,0,C,[Gi,NG],1,3,0,0,["d",BfU(G_),"m$",BfX(ADN)],Lm,0,DQ,[],0,3,0,AS8,["vU",BfV(A4K)],Db,0,Bt,[],1,0,0,0,["gC",BfX(FW),"pT",
BfU(A$J),"ca",BfV(APY),"ba",BfV(A8N),"ed",BfU(AMO)],Rw,0,Db,[],0,0,0,0,["gC",BfX(AEq),"e",BfX(A$F),"cC",BfX(AQL),"u",BfU(A5M)],Cy,0,Bt,[],0,0,0,JF,["bj",BfV(Et),"e",BfX(AEM),"j$",BfU(A3l),"u",BfU(AJN),"ba",BfV(AFl)],Ks,0,Cy,[],0,0,0,0,["bj",BfV(ABX),"e",BfX(AFx),"u",BfU(A8o)],Mz,0,C,[Cr],3,3,0,0,0,OR,0,BC,[],0,0,0,0,["o7",BfV(ARu),"Q",BfV(AZA),"e",BfX(AJ6),"u",BfU(A5p)],CH,0,Db,[],0,0,0,0,["gC",BfX(Fd),"e",BfX(AUX),"u",BfU(A1i)],Rv,0,CH,[],0,0,0,0,["gC",BfX(AXe),"e",BfX(ATe)],Ko,0,C,[],3,3,0,0,0,AAj,0,Dm,[],
0,3,0,0,["kb",BfV(ASU),"mU",function(b,c,d,e,f,g,h){return AJl(this,b,c,d,e,f,g,h);}],Da,0,C,[],0,3,0,0,0,BI,0,C,[B9],1,3,0,NH,["FI",BfV(Fb),"zB",BfV(AV$),"z",BfV(AUc),"b",BfU(ARt),"bp",BfU(F2)],Dl,0,B3,[],0,3,0,0,["d",BfU(Jt)],Iv,0,C,[],3,3,0,0,0,H7,0,C,[Iv],0,3,0,0,["d",BfU(QK),"Aa",BfV(AU6)],KP,0,C,[],3,3,0,0,0,FA,0,H7,[KP],0,3,0,0,["XA",function(b,c,d,e,f,g){AAy(this,b,c,d,e,f,g);},"Bt",BfU(AT5),"sm",BfU(AOA),"vu",BfU(AJs),"b",BfU(AEH),"Cp",BfV(A7s)],Z_,"CoderMalfunctionError",11,D5,[],0,3,0,0,["EL",BfV(AMW)],Mk,
0,C,[B6],3,3,0,0,0,XM,0,C,[Mk],0,0,0,0,["SR",BfV(ALj),"H9",BfU(APS),"TI",BfU(AOi)],XJ,0,CH,[],0,0,0,0,["gC",BfX(A1U),"e",BfX(A3Q)],By,0,C,[],0,3,0,J8,0,ES,0,C,[B2,FO],0,0,0,0,["d",BfU(J6),"bj",BfV(JT),"T_",BfV(YW),"V1",BfV(Lj),"k2",BfW(NU),"XB",BfV(PD),"AP",BfW(AVA),"Lt",BfX(A1l),"Rz",BfV(AB_),"DN",BfW(RI),"MO",BfX(AML),"Vx",BfV(TI),"CL",BfW(ZY),"SM",BfV(Na),"u9",BfW(Ou),"wN",BfW(QF),"Sk",BfV(Td),"xq",BfW(OF),"gX",BfV(Mx),"b",BfU(Nt),"i",BfU(M2),"f",BfV(O2),"EP",BfX(PH),"vw",BfY(ZJ),"W$",BfV(ACJ),"tU",BfX(Oo),
"uC",BfY(Mo),"VX",BfV(NB),"d_",BfW(AA3),"pt",BfY(Yl),"uv",BfV(ABF),"Vg",BfV(ABT),"Vi",BfW(AB$),"ce",BfW(W6)],Fw,0,C,[],3,3,0,0,0,PE,0,ES,[Fw],0,3,0,0,["d",BfU(A0U),"Iv",BfV(AG1),"IV",BfV(AQM),"K7",BfX(ATd),"Pg",BfV(AHJ),"Nf",BfX(AVL),"Bq",BfV(A8u),"Io",BfY(A3e),"Ok",BfY(A3u),"Qy",BfW(A8_),"Ht",BfW(A6R),"uC",BfY(AIl),"tU",BfX(AWD),"vw",BfY(A0a),"EP",BfX(A6q),"f",BfV(AUy),"i",BfU(A$E),"b",BfU(AWT),"gX",BfV(AW9),"u9",BfW(A7Q),"k2",BfW(AUL)],EJ,0,C,[],3,3,0,0,0,CS,0,C,[],1,3,0,0,["bj",BfV(FJ),"V6",BfU(CU),"St",
BfU(B7),"cY",BfV(GL),"SX",BfU(BE),"cl",BfV(IZ),"c0",BfU(FZ),"c_",BfU(G7),"Vp",BfU(Bb),"U8",BfU(Ca)],N4,0,C,[],4,3,0,AId,0,E8,0,C,[],1,0,0,0,["d",BfU(Mg)],Q,0,E8,[],1,0,0,Kd,["d",BfU(Be),"bK",BfU(AWA),"ci",BfU(AVB),"F0",BfU(A3j),"C9",BfU(A0N),"me",BfU(A7L),"NR",BfU(AEF),"mO",BfU(AWK),"g6",BfU(A9O),"f8",BfV(ARC),"jE",BfU(AIj)],Zt,0,Q,[],0,0,0,0,["Wx",BfV(A1S),"p",BfV(AS3)]]);
$rt_metadata([Gw,0,C,[],4,0,0,APL,["d",BfU(TS),"VY",BfV(AB7)],Nw,0,C,[],3,3,0,0,0,JZ,0,C,[B2],0,3,0,U_,["Mx",BfV(ADy),"Gv",BfV(A$t),"d",BfU(Qp),"DC",BfW(A42),"wK",BfU(A0D),"KY",BfU(AQB),"NB",BfX(ATV)],K4,0,C,[],3,3,0,0,0,ABn,0,C,[K4],0,3,0,0,["S5",BfV(ASs),"N$",BfW(AXV),"n_",BfV(A9d),"Fe",BfV(AWu)],EN,0,Bx,[],12,0,0,AA1,0,IQ,0,T,[],0,0,0,0,["d",BfU(TP),"T",BfU(Zv)],RV,0,T,[],0,0,0,0,["d",BfU(AF2),"T",BfU(A0c)],Ek,0,BC,[],0,0,0,0,["yd",BfW(J3),"Q",BfV(A9U),"e",BfX(AOa),"u",BfU(A4I),"vn",BfX(AKy),"ca",BfV(ALh),
"ba",BfV(A56)],Z$,0,Ek,[],0,0,0,0,["yd",BfW(AW3)],Jw,0,C,[],1,3,0,0,["d",BfU(W$),"II",BfV(AK6),"Xd",BfU(N8),"jh",BfU(ANL),"nR",BfV(AO3),"RN",BfV(Zd)],Zj,0,C,[B6],1,3,0,0,0,C$,0,Jy,[],1,3,0,0,["uy",BfX(GD),"FZ",BfW(ARD)],X3,0,C$,[],0,3,0,0,["kb",BfV(AGt),"m_",function(b,c,d,e,f,g,h){return ATQ(this,b,c,d,e,f,g,h);}],Yg,0,C,[],4,3,0,0,0,Gg,0,C,[Cr],0,3,0,FD,["Nm",BfV(O_),"UV",BfX(T7),"DV",BfV(ADx),"f7",BfU(AGW),"kv",BfU(AKI),"lX",BfU(ANi),"lb",BfU(AQc),"bo",BfU(AJi),"bl",BfU(AMJ),"kx",BfU(A6P),"iw",BfU(AXp),"sS",
BfU(ADO),"Qk",BfU(AFk),"NZ",BfU(AQX),"Jz",BfU(A4R),"Jb",BfU(A97),"y_",function(b,c,d,e,f,g,h){AYO(this,b,c,d,e,f,g,h);},"Le",function(b,c,d,e,f,g,h,i,j){APa(this,b,c,d,e,f,g,h,i,j);}],HD,0,BI,[],0,3,0,ABy,0,ACz,0,Cy,[],0,0,0,0,["d",BfU(AUa),"e",BfX(AXP),"u",BfU(A1J)],KQ,0,C,[],3,3,0,0,0,JC,0,BC,[],0,0,0,0,["iP",BfW(VT),"e",BfX(AOc),"u",BfU(AMb),"ba",BfV(A6s)],Dp,0,JC,[],0,0,0,0,["iP",BfW(Gc),"e",BfX(AYv),"Q",BfV(A53),"u",BfU(ADX)],Vw,0,Dp,[],0,0,0,0,["iP",BfW(AI3),"e",BfX(AOq),"ba",BfV(ARK),"u",BfU(A9P)],Gx,
0,C,[],3,3,0,0,0,Ps,0,C,[Gx],0,3,0,0,["d",BfU(A5g)],Ie,0,C,[Mz],1,3,0,0,["d",BfU(SA),"JK",BfV(A1N)],Pr,0,Ie,[],0,3,0,0,["SO",BfV(WP),"d",BfU(A9R),"F2",BfV(AR7)],ABs,0,Dp,[],0,0,0,0,["iP",BfW(AIf),"e",BfX(AFb),"ba",BfV(A71),"u",BfU(AI0)],Ld,0,C,[],3,3,0,0,0,Ho,0,C,[Ld],0,3,0,0,["XE",BfY(AXM),"xW",BfU(AUs),"zQ",BfU(AXN),"Qf",BfU(AMh),"Fa",BfU(A1D),"bo",BfU(ALo),"bl",BfU(AX3),"f7",BfU(AH6),"QA",BfU(AVr),"qE",BfU(AHe),"N6",BfU(A3T),"G1",BfV(AYj)],Hy,"UnsupportedOperationException",13,Bm,[],0,3,0,0,["d",BfU(R2)],ACE,
"ReadOnlyBufferException",10,Hy,[],0,3,0,0,["d",BfU(A1G)],NZ,0,BI,[],0,3,0,GO,0,ZU,0,C,[],4,3,0,0,0,DN,0,C,[],1,3,0,0,["d",BfU(HV)],Oy,0,DN,[],0,3,0,0,["d",BfU(AKd),"Ld",BfV(AKj),"HQ",BfX(ANN),"H7",function(b,c,d,e,f,g,h){return AE8(this,b,c,d,e,f,g,h);},"FU",BfV(AXc)],AAf,0,C,[],0,3,0,0,["d",BfU(AFC)],Uz,0,C,[Fp],0,3,0,0,["Rq",BfV(AER),"lE",BfV(AKt),"oC",BfV(ATP),"lp",BfV(AT9),"im",BfY(AEn),"hO",BfY(AP_),"i8",BfX(AIu),"m8",BfW(ARJ),"oG",BfW(A3E)],FL,0,FS,[],0,3,0,0,["bP",BfV(KF)],Z8,0,FL,[],0,3,0,0,["bP",BfV(AFS)],Po,
0,T,[],0,0,0,0,["d",BfU(AFU),"T",BfU(AHo)],IR,0,C,[B6],3,3,0,0,0,Cz,0,C,[],3,3,0,0,0,IE,0,C,[Cz],3,3,0,0,0,Jb,0,C,[IE],1,3,0,0,["d",BfU(Ui),"It",BfV(AY_)],E9,0,C,[Gi],1,3,0,0,["d",BfU(Kv),"rs",BfX(A8p),"fO",BfU(A0P)],ABc,0,E9,[],0,3,0,0,["WK",BfX(ACQ),"TH",BfV(AFg),"A_",BfU(AXE),"rs",BfX(A92),"fO",BfU(AJP)],Ts,0,C,[],4,3,0,0,0,IM,0,CS,[B9],1,3,0,0,["gc",BfX(AAa),"R9",BfU(Tv),"c0",BfU(A33)],JH,0,C,[],1,3,0,0,["d",BfU(Th),"Pt",BfV(A8a),"NC",BfU(A7W),"Gp",BfV(AI2),"J9",BfW(AG7),"Hv",BfY(AW5)],CF,0,Db,[],0,0,0,
0,["lh",BfX(E4),"e",BfX(AUD),"u",BfU(AXx)]]);
$rt_metadata([Ed,0,CF,[],0,0,0,0,["lh",BfX(Np),"e",BfX(A29),"Q",BfV(ATY)],TT,0,Ed,[],0,0,0,0,["lh",BfX(A94),"e",BfX(AM3)],Hv,0,C,[],3,3,0,0,0,V,0,C,[Hv],1,3,0,0,["d",BfU(BL),"xV",BfW(AIo)],ABm,0,C,[],0,0,0,0,["d",BfU(ALO),"Gm",BfY(AUF)],Xw,0,C,[],0,3,0,0,0,Nj,0,C,[],3,3,0,0,0,Hf,0,Bm,[],0,3,0,0,0,GE,0,BR,[],0,3,0,AJy,["d",BfU(Jg),"b6",BfV(Pj)],FT,0,GE,[],0,3,0,AGY,["b6",BfV(Tj),"d",BfU(HL),"Iy",BfV(AZ7),"Ij",BfV(AYG),"GY",BfV(AXi),"Hw",BfV(ASE)],GB,0,C,[],1,3,0,0,["d",BfU(UH)],Xa,0,C,[],4,0,0,0,0,OV,0,Q,[],
0,0,0,0,["Rp",BfV(A6v),"p",BfV(AGQ)],CZ,0,C,[B9],1,3,0,0,["R0",BfW(GG),"x4",BfU(Z4),"Qi",BfV(ZD),"FS",BfV(UE)],RJ,0,CZ,[],0,3,0,0,["Wt",BfX(AE3),"lI",BfU(AKp),"mt",BfU(ADP)],Cl,0,C,[],0,3,0,0,["d",BfU(D_),"fz",BfV(AQf),"dc",BfV(AVV)],PA,0,Cl,[],0,0,0,0,["S8",BfW(AYE),"fz",BfV(A30),"dc",BfV(AYY),"IY",BfW(AM0),"dn",BfW(AFw)],PQ,0,C,[],4,3,0,0,0,Hi,0,C,[],3,3,0,0,0,Sc,0,C,[Hi],0,3,0,0,["XJ",BfY(AZW),"fc",BfU(AKm)],PB,0,Cl,[],0,0,0,0,["RH",BfY(ALG),"fz",BfV(A3M),"dc",BfV(A2Q),"dn",BfW(A7X)],LB,0,C,[B6],3,3,0,0,
0,WS,0,C,[LB],0,0,0,0,["QL",BfV(ANv),"Ps",BfV(AZ8),"WZ",BfV(A3V)],J5,0,C,[],32,0,0,Bdp,0,ABz,0,C,[],4,3,0,0,0,Ur,0,C,[],0,3,0,0,["d",BfU(A6l),"Il",BfV(AWy),"PY",BfX(AVI),"M5",BfU(A9L),"EN",function(b,c,d,e,f,g){return A7w(this,b,c,d,e,f,g);},"P7",BfW(A3P),"Me",BfY(AFQ)],H8,0,Ja,[],0,0,0,0,["d",BfU(Rr),"T",BfU(QS)],JI,0,H8,[],0,0,0,0,["d",BfU(S7),"T",BfU(Vk)],Y6,0,JI,[],0,0,0,0,["d",BfU(AQJ),"T",BfU(AMR)],AAR,0,T,[],0,0,0,0,["d",BfU(A4h),"T",BfU(ARz)],YO,0,Dp,[],0,0,0,0,["iP",BfW(AQT),"e",BfX(AF4),"ba",BfV(A$8),
"u",BfU(ANX)],Y9,0,BJ,[],0,0,0,0,["EZ",BfV(AYn),"bH",BfW(AGX),"cC",BfX(AWn),"cG",BfY(AZ$),"u",BfU(AOk),"ca",BfV(AJJ),"NX",BfX(A8I),"Lr",BfX(A7R),"u$",BfW(AJ8)],RB,0,CZ,[],0,3,0,0,["d",BfU(AIr),"lI",BfU(AXj),"mt",BfU(AUn)],Nd,0,C,[Fw,FO],0,3,0,C4,["bj",BfV(XD),"VO",BfU(N2),"Rh",BfV(CI),"TE",BfV(IH),"b",BfU(ADV),"lv",BfV(APd),"z6",BfV(APP),"GH",BfW(AGA),"PM",BfX(AD$),"yl",BfV(A3f),"CB",BfV(A0n)],DB,0,C,[],0,3,0,H2,0,T_,"ArrayStoreException",13,Bm,[],0,3,0,0,["d",BfU(AZB)],My,"ReflectionException",4,B3,[],0,3,
0,0,["i$",BfW(A6F)],FP,0,CH,[],0,0,0,0,["gC",BfX(Mj),"e",BfX(A7v),"Q",BfV(A87)],Ih,0,C,[],3,3,0,0,0,NR,0,C,[Ih],0,0,0,0,["R5",function(b,c,d,e,f,g){Si(this,b,c,d,e,f,g);},"by",BfW(AR0),"et",BfV(A2K),"pO",BfU(AUo),"pa",BfV(ALu),"ey",BfW(AX7),"uX",BfW(AWo),"jn",BfV(A5U),"nB",BfV(APl),"BN",BfV(AEy),"Ou",BfV(A1W),"ws",BfU(APe),"lA",BfV(AGg),"Ms",BfU(AMr),"zb",BfV(AUR),"fM",BfW(AXw),"LE",BfU(A9e),"Ll",BfU(A9g),"tG",BfX(A99),"fU",BfU(AGR),"GW",BfV(A6S),"dI",BfU(AWY),"J",BfU(A2$),"pL",BfV(AYN),"Cm",BfU(AII),"jy",BfU(A0S),
"lF",BfU(AUP),"Nk",BfU(AVG)],QX,0,C,[],0,3,0,0,["d",BfU(A3B)],PT,0,BJ,[],0,0,0,0,["o7",BfV(ANP),"bH",BfW(A14),"u",BfU(AWN)],JB,0,C,[],0,3,0,0,["d",BfU(A7x),"J5",BfV(A2m),"Gq",BfW(A5P),"b",BfU(AJn)],Vu,0,Q,[],0,0,0,0,["QP",BfV(AK1),"p",BfV(A$w)],KJ,"GdxRuntimeException",3,Bm,[],0,3,0,0,["i$",BfW(ADY),"bP",BfV(Qz)],Fo,0,C,[Cr],1,3,0,NX,["fT",BfW(KC),"eu",BfU(A3x),"rQ",BfV(AQ2),"NS",BfU(AI4),"Ly",BfW(ASr),"wp",BfX(AOJ),"P5",BfW(AES),"De",BfX(ADu),"OD",BfW(AZw),"PQ",BfW(AIJ)],LE,0,Fo,[],0,3,0,FY,["Nm",BfV(YR),"J_",
BfW(AAo),"W1",BfX(H$),"ST",BfV(JM),"Rr",BfX(NF),"M0",BfV(ARW),"bo",BfU(AN1),"bl",BfU(A8h),"b",BfU(ANg)],LA,0,C,[B6],3,3,0,0,0,WT,0,C,[LA],0,0,0,0,["QL",BfV(AM2),"Ne",BfV(A4j),"VB",BfV(ATq)],WD,0,C,[],4,3,0,0,0]);
$rt_metadata([F5,0,C,[],0,3,0,Dg,["bP",BfV(AAK)],Ge,0,C,[B2,B9],0,3,0,A_r,["b6",BfV(SW),"Vs",BfU(A0t)],C2,"IllegalArgumentException",13,Bm,[],0,3,0,0,["d",BfU(FX),"bP",BfV(ACP)],Tr,"IllegalCharsetNameException",11,C2,[],0,3,0,0,["bP",BfV(AQ3)],T9,0,C,[Nw,IR],0,3,0,0,["TG",BfV(AHD),"dU",BfV(A2b),"fU",BfU(AKH),"g3",BfX(A8q),"kl",BfW(AMl),"ke",BfW(AJ4),"mv",BfW(A95),"kF",BfW(A0K),"LS",BfV(AVK),"kP",BfU(AHt),"JL",BfV(AGe),"sk",BfU(A$9),"lC",BfV(APb)],U2,"NoSuchElementException",8,Bm,[],0,3,0,0,["d",BfU(A3N),"bP",
BfV(A1K)],IB,0,DQ,[],0,3,0,0,["TX",BfV(OZ)],HA,0,IB,[],0,3,0,0,["TZ",BfW(Oc),"m$",BfX(A4q),"GD",BfV(AYK),"pn",BfV(A1y),"gg",BfV(AXv),"KN",BfV(AK7),"Nl",BfU(A6f)],Sq,0,Dp,[],0,0,0,0,["iP",BfW(AU$),"e",BfX(AUC),"ba",BfV(A6I),"u",BfU(AFB)],Pk,0,C,[LX],0,0,0,0,["Ww",BfW(ASi),"HB",BfU(ARM),"GK",BfU(A8U),"TJ",BfU(ANI),"Q9",BfU(AG9)],Fy,0,IM,[],1,0,0,0,["gc",BfX(MF),"K3",BfU(AQ9),"gr",BfV(A3X),"b2",BfV(AMx),"tf",BfW(A8r),"b_",BfU(ALY)],FI,0,Fy,[],1,0,0,0,["fN",function(b,c,d,e,f,g){JO(this,b,c,d,e,f,g);},"eZ",BfU(ALF)],Pu,
0,FI,[],0,0,0,0,["fN",function(b,c,d,e,f,g){AY3(this,b,c,d,e,f,g);},"pZ",BfV(AIB),"nN",BfW(AC6)],ABL,0,FM,[],0,0,0,0,["fT",BfW(A8P),"e",BfX(AGr),"cC",BfX(ARH),"cG",BfY(ADU),"ca",BfV(A3y),"u",BfU(A81)],Wo,0,Db,[],0,0,0,0,["XG",BfY(A5D),"e",BfX(AOv),"cC",BfX(ADe),"u",BfU(A6U)],To,0,T,[],0,0,0,0,["d",BfU(A01),"T",BfU(ALv)],IS,0,C,[],4,3,0,ACA,0,Cs,0,Bx,[],12,3,0,Ix,["RM",BfU(E6)],Bi,"Color",5,C,[],0,3,0,Bv,["d",BfU(UZ),"bj",BfV(ABP),"FQ",BfY(SE),"SZ",BfV(T8),"eP",BfV(AEI),"I5",BfV(A$j),"Vl",BfV(AEp),"Tl",BfV(A5b),
"Q6",BfV(AVF),"dL",BfU(A68),"hT",BfY(A35),"SU",BfV(AOB),"W3",BfY(ADL),"Rd",BfY(AQs),"V3",BfY(A7P),"U2",BfW(ANF),"Rk",function(b,c,d,e,f){return AW_(this,b,c,d,e,f);},"XI",BfU(AMu),"z",BfV(AYS),"bp",BfU(AL4),"nv",BfU(ARO),"rY",BfU(ATC),"b",BfU(AGK),"O1",BfX(A6N),"RD",BfV(AUI),"U1",BfV(A6r),"Sd",BfU(A8K)],Fc,0,C,[],4,3,0,0,["Tw",BfX(ANo),"S$",BfY(ACx),"SN",function(b,c,d,e,f,g){AAx(this,b,c,d,e,f,g);},"z",BfV(ANs),"Xa",BfV(KH),"Sg",BfU(IT),"RK",BfU(QA),"bp",BfU(AYq)],IA,0,C,[],0,3,0,0,["d",BfU(UL)],Gd,0,IA,[],
0,3,0,0,["RY",BfX(Hn),"ru",BfU(AHX),"x4",BfU(AKg),"N9",BfU(A7k),"Om",BfU(AGb),"qv",BfU(AR8),"vJ",BfU(AHO),"Mm",BfV(A9u),"Ik",BfU(A7I),"Km",BfV(AOe),"KV",BfU(AG2),"Hm",BfU(A8v),"b",BfU(A4c)],F6,0,BR,[],0,3,0,AKB,["d",BfU(Nu),"b6",BfV(SZ)],IW,0,F6,[],0,3,0,0,["d",BfU(Y_),"Mn",BfV(Tb)],AA8,0,IW,[],0,3,0,0,["Mn",BfV(A49),"QJ",BfV(ARi),"H_",BfV(AMI)],TY,0,CF,[],0,0,0,0,["Wr",BfV(AKE),"e",BfX(A$v),"cC",BfX(ANr)],Ew,0,C,[Cr],0,3,0,UR,["IH",BfW(UU),"Iq",BfU(AKv),"qY",BfU(A7O),"r8",BfU(A8Q),"AF",BfW(A2I),"ya",BfW(A1c),
"Dc",BfW(AZ4),"ka",BfW(APy),"F5",BfX(ADM),"je",BfY(AFE),"yn",function(b,c,d,e,f){AP1(this,b,c,d,e,f);},"z2",BfY(ARA),"E6",BfW(AZd),"Ix",BfX(AVu),"GG",BfW(ALK),"zp",BfX(A3G),"HH",BfW(A83),"Lk",BfX(AH1),"Pv",BfY(AWq),"sn",BfW(AC9),"Kx",BfW(A5L),"ia",function(b,c,d,e,f,g){A$k(this,b,c,d,e,f,g);},"eu",BfU(AVE),"BB",BfV(AE6),"tM",BfV(A2A),"lQ",BfV(A5J),"lW",BfV(AEZ)],DM,0,Bx,[],12,3,0,GR,0,Me,0,C,[],3,3,0,0,0,Jx,0,C,[Iv,Me],0,3,0,0,["b",BfU(AL9),"zY",BfU(AWg),"vV",BfV(AYJ),"u",BfU(A2e),"hd",BfU(AJc),"GA",BfU(ASz),
"gp",BfU(A3g),"ro",BfU(A$P),"LO",BfU(ASO),"Gx",BfV(A7g),"Hk",BfV(A7e)],CN,0,C,[B6],1,3,0,0,0,Zc,0,CN,[],1,3,0,0,0,DK,0,C,[],3,3,0,0,0,AB6,0,C,[DK,B2],0,3,0,0,["d",BfU(AXa),"bj",BfV(AU0),"sO",BfV(APh),"n1",BfW(AJL),"rS",BfV(A$_),"Oi",BfW(AVa),"eJ",BfV(AVg),"k_",BfV(A$m),"PU",BfV(AOS),"LW",BfV(AOs),"dN",BfV(A9o),"iF",BfV(ATy),"iN",BfV(A9f),"i5",BfV(A2n),"bN",BfU(A9y)],Vx,0,Q,[],0,0,0,0,["W4",BfV(A$Q),"p",BfV(AG$)],NS,0,C,[],3,3,0,0,0,FN,0,C,[],1,3,0,0,["d",BfU(Lu),"MP",BfX(AIy),"HF",BfU(A0k),"F3",BfW(A5B),"zc",
BfX(AO1),"Kg",BfX(APs),"k8",BfV(A$N)],QD,0,FN,[],0,3,0,0,["d",BfU(AFW),"f5",BfU(AX9),"p8",BfV(A$1)],Hc,0,C,[Cr],3,3,0,0,0,HO,0,C,[Hc],0,3,0,0,["mK",BfW(AX_),"bj",BfV(ABo),"lZ",BfU(AJR),"nb",BfU(AU_),"uz",BfX(ANG),"uj",BfU(AUq),"eu",BfU(A9h),"D5",BfU(A6E)],Qq,0,HO,[],0,3,0,0,["bj",BfV(A4Q)],JA,0,D1,[B9],0,3,0,Qt,["Rm",BfU(A8m)],V4,0,C,[],0,3,0,0,0,Dx,0,BJ,[],0,0,0,0,["nV",BfV(AO8),"cg",BfU(A1O),"bH",BfW(AJw),"cC",BfX(AHQ),"cG",BfY(AK3),"u",BfU(ARN),"pq",BfU(AFc),"ca",BfV(ARa)],VR,0,Cl,[],0,0,0,0,["UJ",BfV(AEW),
"dn",BfW(A$O)],Ms,0,C,[],32,0,0,Bc$,0,Wq,0,Q,[],0,0,0,0,["Gu",BfX(ATc),"p",BfV(AP5)],Wx,0,Q,[],0,0,0,0,["kj",BfY(AZN),"p",BfV(ACX)],Ws,0,Q,[],0,0,0,0,["nC",BfW(AC$),"p",BfV(A6x)],M6,0,C,[B6],3,3,0,0,0]);
$rt_metadata([Wr,0,Q,[],0,0,0,0,["Gu",BfX(ADk),"p",BfV(A26)],Wt,0,Q,[],0,0,0,0,["nC",BfW(ADh),"p",BfV(AJd)],WA,0,Q,[],0,0,0,0,["qi",BfX(AG4),"p",BfV(AX5)],GS,0,C,[Cr],3,3,0,0,0,Wv,0,Q,[],0,0,0,0,["kj",BfY(ADH),"p",BfV(AYL)],Wu,0,Q,[],0,0,0,0,["nC",BfW(AUA),"p",BfV(AMo)],PZ,0,BC,[],4,0,0,0,["Hq",BfV(AGk),"e",BfX(A4J),"u",BfU(AXW),"Q",BfV(A6T),"i3",BfU(ACV),"ba",BfV(ATw)],Wy,0,Q,[],0,0,0,0,["qi",BfX(A0j),"p",BfV(ARL)],DI,0,C,[B9],0,3,0,Bd,0,OO,0,BJ,[],0,0,0,0,["nV",BfV(APG),"bH",BfW(ADz),"u",BfU(AJ1)],Dt,0,BJ,
[],0,0,0,0,["bj",BfV(ATu),"bH",BfW(A6t),"cC",BfX(A4d),"cG",BfY(AFP),"u",BfU(A88),"sQ",BfU(AUE),"ca",BfV(A5_)],Y7,0,T,[],0,0,0,0,["we",BfW(AHy),"Kv",BfX(AUh),"T",BfU(AC4)],Sr,0,C,[B6],1,3,0,0,0,R_,0,C,[],0,3,0,0,["d",BfU(A5N)],D7,0,C,[],1,0,0,0,["d",BfU(Km)],HU,0,CS,[B9,Fw,FO,Nj],1,3,0,0,["gc",BfX(Zw),"rh",BfX(AEh),"Mh",BfV(APm),"PO",BfX(A$R),"HM",BfX(AV_),"Xs",BfV(IU),"Ch",BfU(WB),"Xx",BfU(NI),"Xg",BfU(K$),"oM",BfV(AL_)],Hs,0,HU,[],1,0,0,0,["gc",BfX(P_),"Jy",BfU(AEk),"b_",BfU(A$h)],Rk,0,Hs,[],0,0,0,0,["bj",
BfV(A5u),"W7",function(b,c,d,e,f,g){U8(this,b,c,d,e,f,g);},"zT",BfV(A4N),"r_",BfW(A2S),"Og",BfU(ANZ),"Nn",BfU(AIE),"eZ",BfU(AS6)],S4,0,C,[Cz],0,3,0,0,["bj",BfV(AP4),"mq",BfW(Q0),"e6",BfV(AI7),"K8",BfW(A0w),"l",BfV(ATK),"mz",BfV(A89),"FW",BfW(ATo)],ABv,0,Dm,[],0,3,0,0,["kb",BfV(AHu),"mU",function(b,c,d,e,f,g,h){return APV(this,b,c,d,e,f,g,h);}],EA,0,C,[Cz,Gx,B9],0,3,0,0,["d",BfU(Lx),"U0",BfU(GP),"LP",BfU(Eg),"Vm",BfV(BB),"Us",BfW(HK),"K",BfU(AJ_),"TS",BfV(Ep),"TM",BfV(XY),"Tr",BfV(F7),"Uv",BfV(Ct),"KF",BfV(AQl),
"Xp",BfW(RS),"S0",BfW(QY),"fr",BfU(Kb),"F4",BfU(AWv),"bp",BfU(V7),"z",BfV(Vp),"cV",BfW(AWb)],F4,0,EA,[],0,3,0,Jn,["d",BfU(Kz),"bP",BfV(Jl),"Q$",BfV(NE),"Ta",BfV(AB5),"Wp",BfW(KM),"IZ",BfU(A6W),"bp",BfU(ALT),"z",BfV(AH0)],D3,"Pool",3,C,[],1,3,0,0,["d",BfU(N3),"fT",BfW(L_),"eR",BfU(OT),"jo",BfV(AGu),"zd",BfV(AJB),"C5",BfV(AXX),"D7",BfV(UK)],DV,0,D3,[],1,3,0,0,["d",BfU(Jh),"eR",BfU(Wb),"en",BfU(AMn)],Tz,0,DV,[],0,3,0,0,["d",BfU(AD5),"OC",BfU(AMU),"KQ",BfU(A8O),"eR",BfU(AGx),"tT",BfU(ANt)],Z7,0,Q,[],0,0,0,0,["Ve",
BfV(ADc),"p",BfV(A8C)],JG,0,C,[B2],0,3,0,APC,["FQ",BfY(X7),"d",BfU(Ro),"nu",BfY(AHP),"O3",BfV(AMP),"wl",BfW(AYu),"t9",BfU(A3Y),"JC",BfU(ANa),"JW",BfV(A2B),"Ca",BfU(A$f),"JZ",BfY(AD9),"JO",BfY(ARn)],Eb,0,C,[],4,3,0,Bdo,0,Nz,0,C,[],0,3,0,Lb,0,RD,0,Q,[],0,0,0,0,["Sb",BfV(AZR),"p",BfV(AZK)],G4,0,C,[],1,3,0,0,["d",BfU(RY)],YX,"UnsupportedCharsetException",11,C2,[],0,3,0,0,["bP",BfV(AEP)],GI,0,CS,[B9],1,3,0,0,["gc",BfX(Pv),"Dx",BfX(A70),"TF",BfU(Uk),"Tp",BfU(AB2),"HR",BfV(APz),"Hy",BfV(A61),"c_",BfU(A77),"c0",BfU(ATs),
"cl",BfV(A2_),"cY",BfV(AVc)],Fh,0,GI,[],1,0,0,0,["gc",BfX(Lq),"J8",BfV(A57),"b_",BfU(A18)],Fr,0,Fh,[],1,0,0,0,["fN",function(b,c,d,e,f,g){Ls(this,b,c,d,e,f,g);},"eZ",BfU(A0T)],VJ,0,Fr,[],0,0,0,0,["fN",function(b,c,d,e,f,g){A2O(this,b,c,d,e,f,g);},"vj",BfV(AX4),"qS",BfW(AXn)],Yz,0,Q,[],0,0,0,0,["T2",BfV(AZS),"p",BfV(APK)],DU,0,CS,[B9],1,3,0,0,["gc",BfX(AAr),"wt",BfX(ANm),"W8",BfU(R0),"Vv",BfU(Wf),"OI",BfV(AI6),"Mv",BfV(A4o),"c_",BfU(AJm),"c0",BfU(ATH),"cl",BfV(AOG),"cY",BfV(ASQ)],Fu,0,DU,[],1,0,0,0,["gc",BfX(K3),
"n9",BfV(AKQ),"Kk",BfW(A$d),"b_",BfU(AYp)],ER,0,Fu,[],1,0,0,0,["fN",function(b,c,d,e,f,g){LO(this,b,c,d,e,f,g);},"eZ",BfU(A4$)],ABE,0,Bt,[],4,0,0,0,["bj",BfV(AZ5),"e",BfX(ALk),"ba",BfV(AZ1),"u",BfU(AL8)],Up,0,BJ,[],0,0,0,0,["nV",BfV(A32),"bH",BfW(AUd),"u",BfU(A4Z)],Hp,0,BI,[],0,3,0,A3n,0,E5,0,C,[Cz],0,3,0,0,["d",BfU(AFF),"bj",BfV(On),"mK",BfW(Kj),"Xb",BfX(Vh),"SG",BfV(A7F),"RZ",BfY(Rm),"F",BfV(APM),"qx",BfV(AJS),"Jk",BfX(ADK),"IX",BfV(AI9),"rI",BfX(AFs),"l",BfV(A9n),"k1",BfW(APu),"KZ",BfW(A3h),"is",BfW(AZo),
"KT",BfW(AGM),"Lg",BfW(AGN),"sr",BfV(AOX),"lU",BfW(AHh),"vo",BfU(AVe),"qp",BfU(ATh),"Ff",BfU(A$$),"K",BfU(AZg),"xm",BfV(ARd),"j9",BfV(AYF),"Dn",BfV(ATm),"bZ",BfU(AKn),"h3",BfV(AD0),"bp",BfU(AWc),"z",BfV(ALA),"b",BfU(ARe),"fr",BfU(AFL)],QB,0,CZ,[],0,3,0,0,["d",BfU(AX0),"lI",BfU(A$c),"mt",BfU(A7m)],EC,0,Bx,[],12,3,0,AUm,["FV",BfU(G8)],K8,0,Cy,[],0,0,0,0,["bj",BfV(UM),"e",BfX(AVq),"dM",BfU(AFH),"u",BfU(AQt),"ba",BfV(A5k)],Je,0,BC,[],0,0,0,0,["nV",BfV(AFN),"Q",BfV(A48),"e",BfX(AXH),"cC",BfX(AJF),"cG",BfY(AYA),"u",
BfU(AQU),"ca",BfV(ADQ),"ba",BfV(AQ1)],ACH,0,C,[],0,3,0,0,0,MC,0,C,[],3,3,0,0,0]);
$rt_metadata([W9,0,C,[MC,Gx],0,3,0,0,["d",BfU(ASK),"Hc",BfW(A0d),"IL",BfW(AYf),"cV",BfW(A66)],ACa,"AssertionError",13,D5,[],0,3,0,0,["i$",BfW(AHc)],Es,0,CH,[],0,0,0,0,["DT",function(b,c,d,e,f){It(this,b,c,d,e,f);},"e",BfX(A$0),"u",BfU(ASc)],Lw,0,Es,[],0,0,0,0,["DT",function(b,c,d,e,f){Sk(this,b,c,d,e,f);},"e",BfX(AVt)],UY,0,C,[],0,3,0,0,0,ML,0,C,[Cr],3,3,0,0,0,Ml,0,C,[IE],3,3,0,0,0,IF,0,Jb,[Ml],1,3,0,0,["d",BfU(Y3),"fr",BfU(AH5)],Ln,0,C,[],3,3,0,0,0,V9,0,IF,[DK,B2,Ln],0,3,0,0,["d",BfU(AIv),"bj",BfV(OP),"gX",
BfV(AVv),"l",BfV(A6p),"de",BfU(A4_),"h1",BfV(AR$),"K0",BfW(A1B),"mz",BfV(APO)],Yt,"IllegalMonitorStateException",13,Bm,[],0,3,0,0,["d",BfU(A2T)],Ef,0,CF,[],0,0,0,0,["yQ",BfY(K0),"e",BfX(AV3),"u",BfU(AWE)],C3,0,BC,[],0,0,0,0,["o7",BfV(AAn),"e",BfX(AY9),"u",BfU(A9I),"p",BfV(AIw),"ca",BfV(AEx),"uI",BfU(AK0),"Q",BfV(A7C),"ba",BfV(AH$)],Yp,0,FP,[],0,0,0,0,["gC",BfX(AOD),"e",BfX(AFJ)],Qi,0,C,[],4,3,0,0,0,BM,"String",13,C,[B2,B9,FO],0,3,0,Em,["KJ",BfV(Iy),"Si",BfX(OD),"S2",BfY(J1),"Xk",BfY(KL),"Sp",BfW(TE),"SL",BfX(OH),
"f",BfV(AVZ),"i",BfU(AZ0),"bN",BfU(A1M),"pt",BfY(AHT),"Py",BfV(A82),"zE",BfW(A5z),"e0",BfV(A1R),"yK",BfV(AY7),"eF",BfW(A4w),"K9",BfV(AY6),"mH",BfW(AV7),"xv",BfV(AKh),"uu",BfW(AYM),"Nd",BfV(A46),"z5",BfW(AHK),"HP",BfV(AJW),"ce",BfW(ADG),"ei",BfV(AKk),"d_",BfW(AH3),"MS",BfV(AT4),"uD",BfW(A6o),"My",BfU(A2a),"b",BfU(AFK),"rv",BfU(A1Q),"z",BfV(AR6),"Gf",BfV(A9m),"xY",BfV(ANj),"Qz",BfU(ANf),"AO",BfV(A4z),"bp",BfU(A4G),"FP",BfU(A3W),"Fs",BfV(A2q),"vA",BfW(ARZ),"Gs",BfW(AIb)],Nf,0,DQ,[],0,3,0,A2Y,["vU",BfV(A2C)],LM,
0,C,[],0,0,0,BdT,0,D8,0,C,[B6],3,3,0,0,0,MO,0,C,[D8],3,3,0,0,0,Yq,0,Fy,[],0,0,0,0,["Ul",function(b,c,d,e,f,g){AJM(this,b,c,d,e,f,g);},"pZ",BfV(A4D),"nN",BfW(A2W),"eZ",BfU(AC7)],Qj,0,Dm,[],0,3,0,0,["kb",BfV(AQw),"mU",function(b,c,d,e,f,g,h){return ALw(this,b,c,d,e,f,g,h);}],I6,0,C,[],1,3,0,0,["d",BfU(XT)],HT,0,C,[],3,3,0,0,0,Fm,0,I6,[HT,DK,B2],0,3,0,TF,["d",BfU(HG),"bj",BfV(MD),"x",BfW(AOO),"oS",BfU(AMq)],S$,0,Fm,[],0,3,0,0,["d",BfU(AOl),"UF",BfV(AKw)],ABN,0,Fu,[],0,0,0,0,["VT",function(b,c,d,e,f,g){AXA(this,
b,c,d,e,f,g);},"vk",BfV(AOV),"ne",BfW(AN5),"eZ",BfU(A44)],Wj,0,Bt,[],0,0,0,0,["d",BfU(A$H),"e",BfX(ALg),"u",BfU(A47),"ba",BfV(A5e)],Og,0,V,[],0,3,0,A0s,["bj",BfV(YG),"bg",BfY(AUl)],JP,0,Es,[],0,0,0,0,["DT",function(b,c,d,e,f){Sn(this,b,c,d,e,f);},"e",BfX(AKe)],CW,0,Bx,[],12,3,0,P2,["FV",BfU(EE)],L4,0,CZ,[],0,3,0,Hw,["lI",BfU(AQa),"mt",BfU(ASI)],M4,0,C,[D8],3,3,0,0,0,Vo,0,Bt,[],0,0,0,0,["bj",BfV(A$4),"e",BfX(A1m),"ba",BfV(AGn),"u",BfU(AIX)],SJ,0,C,[NS],0,3,0,0,["Xi",BfV(A5o)],EO,0,C,[Gi],1,3,0,0,["d",BfU(Lh),
"Lx",BfV(ABZ)],Se,0,EO,[],0,3,0,0,["VL",BfW(AYH),"fO",BfU(ALC),"lc",BfU(ATA)],WQ,0,Q,[],0,0,0,0,["Re",BfV(A2Z),"p",BfV(A8V)],I0,"NoSuchMethodException",13,Dl,[],0,3,0,0,["d",BfU(A1x)],Yh,0,C,[],4,3,0,0,0,ZR,0,FI,[],0,0,0,0,["fN",function(b,c,d,e,f,g){AYX(this,b,c,d,e,f,g);},"pZ",BfV(AQQ),"nN",BfW(AEL)],GN,0,BR,[],0,3,0,A$Y,["b6",BfV(AAG),"d",BfU(Jr)],R3,"NullPointerException",13,Bm,[],0,3,0,0,["bP",BfV(A7B),"d",BfU(AF9)],XE,0,Q,[],0,0,0,0,["QY",BfV(AIP),"p",BfV(A5Z)],P8,0,C,[],0,0,0,0,["d",BfU(ATN)],YQ,0,C,
[],4,3,0,0,0,WR,0,C,[GS],0,3,0,0,["Bl",BfX(AMV),"jF",BfU(AXm),"uK",BfU(AJE),"uo",BfX(AE$),"id",BfW(ANu),"gN",BfW(AH_)],GT,0,BR,[],0,3,0,ANl,["b6",BfV(YB),"d",BfU(Iw)],OI,0,C,[],0,3,0,0,0,QJ,0,T,[],0,0,0,0,["d",BfU(A6A),"T",BfU(AND)]]);
$rt_metadata([Oe,"PatternSyntaxException",9,C2,[],0,3,0,0,["RG",BfX(VQ),"mP",BfU(A9M)],P3,0,D3,[],0,3,0,0,["SC",BfX(ASN),"tT",BfU(A1e)],LI,0,C,[],3,3,0,0,0,YS,0,C,[LI],0,3,0,0,["d",BfU(APH),"wz",BfU(AZY),"F7",BfU(AXK),"Qo",BfU(ADA),"Qt",BfY(AL3),"PH",BfU(AMt),"Nq",BfU(ASH)],HF,0,C,[],0,3,0,A3O,["d",BfU(AAB),"Se",BfV(YF),"Co",BfV(A3F),"FM",function(b,c,d,e,f){return AOy(this,b,c,d,e,f);},"Hj",BfV(AIZ),"z",BfV(AEQ),"Jl",BfW(AVk)],TO,0,T,[],0,0,0,0,["d",BfU(AGp),"T",BfU(AYh)],HP,0,C,[],3,3,0,0,0,HC,0,BI,[],0,3,
0,AJf,0,DW,0,Bx,[],12,3,0,M1,0,KT,0,C,[],3,3,0,0,0,L8,0,C,[Cz],0,3,0,A6O,["d",BfU(TM),"mq",BfW(Nr),"kn",BfV(AXk),"j4",BfV(A0H),"x",BfW(AQe),"W",BfV(AWz),"K",BfU(AVn),"cZ",BfV(A8W),"jG",BfV(W0)],YN,0,C,[B2],4,3,0,0,["Tq",BfV(GM),"UG",BfW(Mq),"Tz",BfV(VP),"Uf",BfU(IP),"Wf",BfU(VC),"UT",BfU(ABO),"WR",BfU(SD)],Dc,"IOException",12,B3,[],0,3,0,0,["d",BfU(VY)],GK,0,Dc,[],0,3,0,0,0,Or,0,C,[B6],3,3,0,0,0,VV,0,C,[Or],0,0,0,0,["U9",BfW(AUz),"HA",BfU(AW0),"SB",BfU(AOP)],Qd,0,FP,[],0,0,0,0,["gC",BfX(AQ7),"e",BfX(AKZ),"Q",
BfV(A4m)],Jo,0,C,[],0,3,0,0,["XM",BfY(Tp)],YD,"BufferOverflowException",10,Bm,[],0,3,0,0,["d",BfU(AZ3)],UG,0,T,[],0,0,0,0,["d",BfU(ALL),"T",BfU(A2o)],Mr,0,C,[],0,3,0,0,["RI",BfX(AQG)],SC,0,EA,[],0,3,0,0,["d",BfU(A9j),"Gr",BfV(AWd)],AAT,0,D7,[],0,0,0,0,["d",BfU(AJD),"kY",BfV(A7h),"DS",BfW(AST)],AAS,0,D7,[],0,0,0,0,["d",BfU(AWh),"kY",BfV(AFY),"DS",BfW(APv)],YI,0,FS,[],0,3,0,0,0,Va,0,T,[],0,0,0,0,["d",BfU(A0X),"T",BfU(A6K)],K_,0,C,[],0,3,0,0,0,KW,0,C,[],0,3,0,0,["d",BfU(AY5),"O0",BfY(AZ2)],Tk,0,C,[],0,3,0,0,["KJ",
BfV(AYw)],Dv,0,BJ,[],0,0,0,0,["o7",BfV(AOZ),"bH",BfW(AT7),"u",BfU(ALp),"ca",BfV(AOu),"uI",BfU(A45)],Io,0,Q,[],0,0,0,0,["bj",BfV(St),"p",BfV(AOo)],Zf,0,Io,[],0,0,0,0,["bj",BfV(ANk),"p",BfV(A7E)],LH,0,C,[ML],0,3,0,TD,["d",BfU(ABp),"S_",BfW(Kf),"g4",BfU(A0J),"bd",BfU(AQE),"Hh",BfY(AKW),"en",BfU(AKl),"Pr",BfV(AI1),"zX",BfU(AHm),"Kb",BfV(A4W),"Jj",BfU(ADZ)],L$,0,C,[],32,0,0,Beq,0,XK,0,CN,[],1,3,0,0,0,N5,0,C,[],3,3,0,0,0,LV,0,C,[N5],0,3,0,VG,["Vu",BfV(ACR),"UP",BfW(Ka),"SJ",BfX(Nk),"G0",BfW(AMw),"Hi",BfW(AE7),"Im",
BfW(AO7),"Jd",BfX(A9J),"zZ",BfX(ANw),"PJ",BfU(AC8),"yy",BfV(ACZ),"N5",BfW(AMQ),"Pc",BfX(AYU)],DY,0,Dc,[],0,3,0,0,["d",BfU(Kp)],QH,"UnmappableCharacterException",11,DY,[],0,3,0,0,["bj",BfV(A1n),"mP",BfU(AHa)],P0,0,Q,[],0,0,0,0,["d",BfU(ATG),"XV",BfW(P6),"Wm",BfX(AU1),"cE",BfV(ACW),"Nv",BfV(A$3),"bF",BfW(A8w),"LB",BfV(AUu),"xX",BfV(ARU),"p",BfV(AGi),"bK",BfU(ATR),"ci",BfU(AZi),"me",BfU(ARk),"b",BfU(A3_),"g6",BfU(AIk)],PW,0,C,[IR],0,0,0,0,["WD",BfX(A6a),"dU",BfV(A4n),"lC",BfV(A9Z)],ABD,"BufferUnderflowException",
10,Bm,[],0,3,0,0,["d",BfU(ASj)],Tw,0,C,[],0,3,0,0,["d",BfU(AC3)],UC,0,Ek,[],0,0,0,0,["yd",BfW(A07)],Ow,0,C,[],3,3,0,0,0,I4,0,C,[Ow],0,3,0,0,["d",BfU(Tf),"GQ",BfY(AHw),"GM",BfU(ANK)],Zy,0,I4,[],0,3,0,0,["d",BfU(AKr),"rW",BfY(A1w),"Oh",BfY(AHM),"Ot",BfW(A6M),"Qv",BfX(A5A),"J0",BfY(A1_),"Hb",BfW(A9a),"QM",BfY(AYC)],Pg,0,ER,[],0,0,0,0,["fN",function(b,c,d,e,f,g){A3D(this,b,c,d,e,f,g);},"vk",BfV(ALR),"ne",BfW(A51)],Mv,0,C,[Cr],3,3,0,0,0,Ha,0,C,[Mv],1,3,0,0,["d",BfU(AA6),"IU",BfX(ADw),"bf",BfW(A$S),"b0",BfV(ASk),
"NU",BfV(AHR),"Mq",BfW(AZb),"C0",BfW(XU),"NG",BfV(A0i),"y0",BfW(Vn),"bd",BfU(WC),"VK",BfV(Ic),"Q7",BfV(B0),"Uh",BfW(DZ),"S4",BfW(Q1),"To",BfW(Ly),"WV",BfW(Fv),"VV",BfW(Fn),"VS",BfX(Ww),"WB",function(b,c,d,e,f){return DO(this,b,c,d,e,f);},"TB",BfW(DS),"Vk",BfW(Zx)]]);
$rt_metadata([RE,0,Q,[],0,0,0,0,["UB",BfV(AVd),"p",BfV(AEm)],Tm,"MalformedInputException",11,DY,[],0,3,0,0,["bj",BfV(AN8),"mP",BfU(AH7)],X0,0,T,[],0,0,0,0,["d",BfU(AD2),"T",BfU(AHx)],Fg,0,Bx,[],12,3,0,Gv,0,EG,0,Bx,[],12,3,0,SI,0,HZ,0,BI,[],0,3,0,ET,["VQ",BfW(Vv),"pd",BfU(AO2),"bp",BfU(ASy)],Im,0,C,[],1,3,0,0,["d",BfU(Y8)],TB,"CloneNotSupportedException",13,B3,[],0,3,0,0,["d",BfU(A1s)],Rd,0,CN,[],1,3,0,0,0,Nh,0,D1,[B9],0,3,0,N1,0,Gu,0,BR,[],0,3,0,AMi,["b6",BfV(Sa),"d",BfU(HM)],Kw,0,Gu,[],0,3,0,A9X,["d",BfU(Y4),
"b6",BfV(Rz)],Ne,0,C,[],3,3,0,0,0,Rb,0,C,[Ne],0,3,0,0,["d",BfU(AS4),"GR",BfW(ALn)],S9,0,C,[],0,0,0,0,["bj",BfV(AKO),"op",BfW(AKc),"b2",BfV(A3b)],Hm,0,C,[B6],3,3,0,0,0,QU,0,C,[Hm],1,3,0,0,["T3",BfV(A$D),"Xc",BfU(AF0)],G5,0,C,[],0,3,0,0,["SV",BfV(AVJ),"M4",BfY(A7n),"Nh",BfY(AFm),"A5",BfU(ASW),"H4",BfU(AGD),"Lo",BfU(ADD)],R8,0,JH,[],0,3,0,0,["d",BfU(AUt),"Jv",BfV(US),"wC",BfX(AYs)],VL,0,C,[Cz],0,3,0,0,["Rt",BfY(APJ),"O4",BfV(AMD),"M8",BfX(AU4),"K",BfU(A23),"jG",BfV(ASF)],QC,0,IQ,[],0,0,0,0,["d",BfU(A12),"T",BfU(AJp)],Q4,
"BitmapFont",6,C,[Cr],0,3,0,0,["d",BfU(AGc),"WM",BfY(OJ),"WI",BfX(Ug),"Wy",BfX(Yu),"Hr",BfV(ATM),"yb",BfY(AIV),"Gh",BfY(A9H),"Od",BfU(AQp),"Kp",BfU(A9r)],Gy,0,GN,[],0,3,0,AHk,["b6",BfV(Ve),"d",BfU(KS)],He,0,Gy,[],0,3,0,0,["d",BfU(RL)],Iq,0,He,[],0,3,0,0,["d",BfU(Lr)],LT,0,Iq,[],0,3,0,AFa,["Sj",BfV(Sd),"Np",BfW(A9i),"b6",BfV(AAi)],Zb,0,C,[],0,3,0,0,["d",BfU(AEa),"Xh",BfW(AZp),"Iu",BfV(AO4),"Mp",BfU(AP9),"P9",BfV(A4A)],TW,0,Q,[],0,0,0,0,["Uy",BfW(ATL),"p",BfV(AH4)],TV,0,Q,[],0,0,0,0,["Tm",BfX(A4x),"p",BfV(AUT)],C6,
0,Bx,[],12,3,0,AX$,0,ABa,0,T,[],0,0,0,0,["d",BfU(AV2),"T",BfU(A4r)],Oq,0,C,[D8],3,3,0,0,0,WU,0,Ef,[],0,0,0,0,["yQ",BfY(A3H),"e",BfX(A62)],Q$,0,Im,[],0,3,0,0,["bP",BfV(AEs),"H1",BfU(AUU)],Lf,0,C,[D8],3,3,0,0,0,Lk,0,C,[],3,3,0,0,0,XS,0,C,[Cz],0,3,0,0,["d",BfU(ASf),"mq",BfW(AAk),"e6",BfV(AOd),"op",BfW(AHI),"KC",BfW(ALy)],Xy,0,Q,[],0,0,0,0,["SW",BfV(ASJ),"p",BfV(A3m)],PM,0,Q,[],0,0,0,0,["R6",BfW(ASR),"p",BfV(ALQ),"b",BfU(A0h)],Vc,0,CH,[],0,0,0,0,["gC",BfX(AQ6),"e",BfX(AXY)],T2,0,C,[],0,3,0,0,["R8",BfY(ADi)],CX,
0,BI,[],0,3,0,Cd,["FI",BfV(Jk),"TD",BfW(JQ),"WS",function(b,c,d,e,f){ND(this,b,c,d,e,f);},"Sz",BfV(Z0),"pd",BfU(AJg),"bp",BfU(ASp)],Hg,0,V,[],0,3,0,Px,["fT",BfW(Qf),"bg",BfY(A31)],NV,0,C,[],0,3,0,Bd9,["Wo",BfW(ACb),"yG",BfU(A5E),"Nj",BfV(AHz),"K",BfU(A4O),"Jq",BfX(ATU),"Id",function(b,c,d,e,f,g,h,i,j){return A$C(this,b,c,d,e,f,g,h,i,j);},"HG",BfX(AGq)],PJ,0,Q,[],0,0,0,0,["nC",BfW(A6J),"p",BfV(AGy)],PK,0,Q,[],0,0,0,0,["nC",BfW(AMX),"p",BfV(AZZ)],PL,0,Q,[],0,0,0,0,["kj",BfY(AGJ),"p",BfV(A_e)],YC,0,C,[],4,3,0,
0,0,P4,0,Q,[],0,0,0,0,["kj",BfY(AZT),"p",BfV(AJh)],PN,0,Q,[],0,0,0,0,["kj",BfY(AYP),"p",BfV(AWH)]]);
$rt_metadata([OL,0,BJ,[],0,0,0,0,["EZ",BfV(A8e),"bH",BfW(AMm),"u",BfU(AJ2)],PO,0,Q,[],0,0,0,0,["kj",BfY(ADR),"p",BfV(AOW)],PP,0,Q,[],0,0,0,0,["qi",BfX(AN0),"p",BfV(AKS)],Uc,0,Q,[],0,0,0,0,["Sc",BfV(AT_),"p",BfV(AKG)],Hz,0,DN,[],0,3,0,0,["d",BfU(A1E),"I1",BfV(AEw),"Oy",BfW(AF$),"xH",function(b,c,d,e,f,g){return APR(this,b,c,d,e,f,g);},"z",BfV(AEi),"Et",BfV(A4F)],PI,0,Q,[],0,0,0,0,["qi",BfX(A3c),"p",BfV(A7$)],ZZ,0,CN,[],1,3,0,0,0,LF,0,C,[],0,3,0,ACt,0,Zz,0,ES,[Fw],0,3,0,0,["bj",BfV(AK4),"d",BfU(A9S),"dD",BfV(A3C),
"a",BfV(ADB),"j",BfV(ANq),"M7",BfV(A0r),"cB",BfV(AJr),"U",BfV(ADp),"IQ",BfX(AGL),"qX",BfV(A7q),"Jf",BfV(AWm),"JV",BfW(AZF),"PS",BfW(A7N),"K5",BfY(A6g),"OB",BfW(A$g),"Ge",BfW(A4a),"KH",BfW(ANW),"LQ",BfW(ASd),"E0",BfV(AQW),"Gn",BfW(A2d),"ce",BfW(A9l),"uv",BfV(A2j),"pt",BfY(AHU),"d_",BfW(A6n),"uC",BfY(A17),"tU",BfX(AHn),"i",BfU(AWt),"b",BfU(AFA),"gX",BfV(ALz),"xq",BfW(ALJ),"wN",BfW(A3z),"u9",BfW(A22),"CL",BfW(A0E),"DN",BfW(AF8),"k2",BfW(ATO)],QT,0,BC,[],0,0,0,0,["UC",BfW(AS5),"e",BfX(AEG),"Q",BfV(A40),"u",BfU(A5G),
"ba",BfV(AFI),"ca",BfV(AFe)],ABJ,"ConcurrentModificationException",8,Bm,[],0,3,0,0,["d",BfU(ATx)],O7,0,C,[I1],0,0,0,0,["d",BfU(ALt)],Gt,0,C,[],3,3,0,0,0,O6,0,C,[Gt],0,0,0,0,["d",BfU(AWW)],Mc,0,C,[],3,3,0,0,0,EU,0,C,[Mc,DK],0,0,0,0,["Ib",BfW(L5)],MQ,0,EU,[],0,0,0,0,["Ib",BfW(AOR),"NW",BfU(AE1),"MK",BfW(ARI)],EZ,0,Cy,[],0,0,0,0,["d",BfU(A8f),"e",BfX(AR3),"u",BfU(AW$)],Z9,0,C,[],0,3,0,0,["bP",BfV(A2v),"Mo",BfV(AZ9),"P4",BfY(AN4),"na",BfW(A7z),"I$",BfX(AYk),"P2",BfV(AMT),"KB",BfV(AJj),"LF",BfV(A6u),"N0",BfV(AWQ)],TL,
0,BJ,[],0,0,0,0,["w$",BfV(A3v),"bH",BfW(A7d),"cC",BfX(AZz),"cG",BfY(AXC),"u",BfU(AJO),"ba",BfV(AVj)],J2,0,BI,[],0,3,0,AGw,0,Vi,0,C,[I1],0,3,0,0,["IH",BfW(A8M),"RO",BfX(UA),"wm",BfU(A$7),"O",BfU(AE2)],J_,0,C,[Cz,B9],4,3,0,0,["QV",BfV(A3t),"W5",BfV(DX),"de",BfU(CT),"R4",BfV(CB),"z",BfV(NT),"LP",BfU(IL),"Vn",BfU(NO)],KB,0,G5,[],0,3,0,0,0,ACF,0,C,[Cr],0,3,0,0,["Wh",BfX(TN),"d",BfU(A98),"Hz",BfV(A3U),"en",BfU(A1h),"bd",BfU(A6$),"CT",BfW(ARc)],Ra,0,ER,[],0,0,0,0,["fN",function(b,c,d,e,f,g){AU8(this,b,c,d,e,f,g);},
"vk",BfV(AUv),"ne",BfW(A2p)],VH,0,C,[Lk],0,3,0,0,["Sx",BfV(AUk),"f5",BfU(AT0),"vG",BfU(ASu),"bo",BfU(ALV),"bl",BfU(AQI),"w6",BfU(A5l),"Ey",BfU(A4E),"E4",BfU(A$I),"M9",BfU(AUM),"Fq",BfU(AVX),"L6",BfV(AG5),"wy",BfW(ALi),"x2",BfW(AFD),"tV",BfV(AD6),"vM",BfU(A2M)],Ym,0,FL,[],0,3,0,0,["bP",BfV(AGd)],Ty,0,T,[],0,0,0,0,["d",BfU(AE4),"T",BfU(AHW)],EI,"GlyphLayout",6,C,[EJ],0,3,0,DG,["d",BfU(ACc),"Xl",BfW(PF),"Sw",function(b,c,d,e,f,g){S6(this,b,c,d,e,f,g);},"VP",function(b,c,d,e,f,g,h,i,j){AAX(this,b,c,d,e,f,g,h,i,
j);},"Mj",BfW(A69),"OO",function(b,c,d,e,f,g){A3a(this,b,c,d,e,f,g);},"pH",function(b,c,d,e,f,g,h,i,j){AGS(this,b,c,d,e,f,g,h,i,j);},"fU",BfU(A75),"b",BfU(ANY)],ABR,"ArrayIndexOutOfBoundsException",13,Ej,[],0,3,0,0,["bj",BfV(AEN)],Pq,0,EO,[],0,3,0,0,["U5",BfW(Qx),"WH",BfV(ADm),"SY",BfW(AAz),"fO",BfU(A72),"Jt",BfX(AKa)],Fa,0,Bx,[],12,3,0,RO,0,YT,0,C,[],0,3,0,0,0,VU,0,C,[Gt],0,0,0,0,["Vd",BfV(AOF),"bC",BfU(A3Z),"bz",BfU(A8n)],L0,0,C,[],0,3,0,0,["d",BfU(A$q),"Pw",BfU(A8c),"Ol",BfU(API),"C$",BfV(AFz),"yU",BfV(A6w),
"FX",BfU(AUi),"IC",BfU(A54),"P0",BfV(ALP),"H2",BfV(AEj),"MX",BfW(AOH),"Fu",BfV(A1F),"rA",BfU(A24),"xf",BfU(A8$),"u5",BfU(AZn),"MC",BfV(A6G)],LN,0,C,[],3,3,0,0,0,Hx,0,C,[LN,Fp],0,3,0,Baz,["d",BfU(Vz),"wX",BfU(AZh),"vZ",function(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){return A7T(this,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);},"Fi",BfU(AZP),"N2",BfU(AC0),"Qw",BfW(A73),"lE",BfV(AN2),"oC",BfV(A3$),"lp",BfV(AWI),"im",BfY(A7y),"hO",BfY(A1r),"i8",BfX(APc),"m8",BfW(AXl),"oG",BfW(AME)],VD,0,E8,[DK],0,0,0,0,["fT",BfW(AKu),"ja",BfU(A0g),
"iG",BfU(A8D),"b",BfU(A4i)],WY,0,V,[],4,0,0,0,["d",BfU(AJe),"bg",BfY(AS9)],WV,0,V,[],4,0,0,0,["d",BfU(A8s),"bg",BfY(AXU)],Vy,0,Q,[],0,0,0,0,["Ur",BfV(AQA),"p",BfV(AWa)],W3,0,V,[],4,0,0,0,["d",BfU(AKT),"bg",BfY(A93)],WZ,0,V,[],4,0,0,0,["d",BfU(AUV),"bg",BfY(ANS)],WX,0,V,[],4,0,0,0,["d",BfU(A7u),"bg",BfY(A2G)],W2,0,V,[],4,0,0,0,["d",BfU(AWX),"bg",BfY(APw)],Sg,0,C,[B2],0,3,0,0,["d",BfU(AUG),"Mz",BfV(A8L),"F1",BfU(AE0),"xD",BfU(AZr)],No,0,C,[],3,3,0,0,0,Lc,0,GT,[],0,3,0,AGv,["d",BfU(R7),"b6",BfV(ACg)],XC,0,C,[],
4,0,0,0,0]);
$rt_metadata([So,0,C$,[],0,3,0,0,["kb",BfV(A2k),"m_",function(b,c,d,e,f,g,h){return A9B(this,b,c,d,e,f,g,h);}],AA5,0,C,[],4,3,0,0,["XK",BfV(AQO),"i",BfU(N6),"zf",BfV(Rf),"qv",BfU(PV),"Ti",BfU(Sy)],ACU,0,CF,[],0,0,0,0,["lh",BfX(APn),"e",BfX(AEd)],AAJ,0,C,[],0,3,0,0,["Ui",BfW(A39),"tH",BfU(A34),"dO",BfV(A1g),"ef",BfV(AWF),"ek",BfV(A8A),"dR",BfV(A6k)],PC,0,Q,[],0,0,0,0,["Xe",BfV(AMA),"p",BfV(AOj)],JS,0,C,[],3,3,0,0,0,RF,0,C,[JS],0,3,0,0,["d",BfU(AWw)],W7,0,V,[],4,0,0,0,["d",BfU(ALe),"bg",BfY(AQF)],Li,"InstantiationException",
13,Dl,[],0,3,0,0,["d",BfU(A2u)],W4,0,V,[],4,0,0,0,["d",BfU(A60),"bg",BfY(A$G)],W1,0,V,[],4,0,0,0,["d",BfU(ATp),"bg",BfY(AVY)],W5,0,V,[],4,0,0,0,["d",BfU(AWG),"bg",BfY(A0Y)],Pp,0,Q,[],0,0,0,0,["TO",BfV(A$l),"p",BfV(ASl)],JU,0,C,[],3,3,0,0,0,Sm,0,C,[JU,M6],0,3,0,0,["d",BfU(AJC),"pe",BfU(A5W),"vD",BfV(A7K),"J$",BfV(AZJ),"PT",BfU(A5I),"Mi",BfU(ATD),"QN",BfU(AYQ),"K2",BfU(AW2),"SQ",BfV(A5i)],Yk,0,CF,[],0,0,0,0,["lh",BfX(AT1),"e",BfX(AOr)],X4,0,C,[],4,3,0,0,0,Zu,0,C,[],0,3,0,0,["d",BfU(ARj)],Sz,0,C$,[],0,3,0,0,["kb",
BfV(AOQ),"m_",function(b,c,d,e,f,g,h){return AIz(this,b,c,d,e,f,g,h);}],HS,0,C,[Cr],0,3,0,Kk,["T5",BfY(X8),"UE",function(b,c,d,e,f){M3(this,b,c,d,e,f);},"SK",function(b,c,d,e,f){Ok(this,b,c,d,e,f);},"FC",BfX(APp),"Nx",BfV(AGh),"Ox",BfX(AKf),"v2",BfU(AR_),"w9",BfU(A7M),"Kl",BfV(AG8),"id",BfW(AQq),"JI",BfV(A7i),"gN",BfW(AEv),"Ny",BfY(ATZ),"C6",function(b,c,d,e,f){A3A(this,b,c,d,e,f);},"gR",BfU(AX2),"Am",BfU(ALd)],Ns,0,EU,[],0,0,0,0,["U4",BfW(AOT)],FU,0,BR,[],0,3,0,ASX,["b6",BfV(XW),"d",BfU(Jp)],Wd,0,C,[Cz],0,
3,0,0,0,ABV,0,Bt,[],0,0,0,0,["d",BfU(AKC),"e",BfX(A4T),"ba",BfV(AUb),"u",BfU(AI_)],AAC,0,C,[Cz],0,3,0,0,["d",BfU(A2x),"mq",BfW(YA),"kn",BfV(AMy),"j4",BfV(AX1),"gz",BfW(AQr),"tF",BfW(AW4),"jG",BfV(TQ)],Tx,0,T,[],0,0,0,0,["d",BfU(AKV),"T",BfU(AQ4)],Ft,0,CS,[B9],1,3,0,0,["Uq",function(b,c,d,e,f){VW(this,b,c,d,e,f);},"zS",BfX(AYb),"ID",BfV(AOn),"wT",BfX(A80),"Wz",BfV(Ye),"Ch",BfU(AWi),"Xy",BfU(HH),"QZ",BfV(FH),"Vq",BfU(J4),"Uo",BfU(Jv),"MU",BfV(AY$),"f3",BfV(AQP),"c_",BfU(AFR),"cl",BfV(AOE),"cY",BfV(AVf)],AB4,0,
Ft,[],0,0,0,0,["we",BfW(A0$),"Wb",function(b,c,d,e,f,g,h){O5(this,b,c,d,e,f,g,h);},"zf",BfV(ADa),"Qm",BfU(AMz),"b_",BfU(ARR),"v1",BfU(A$A),"OP",BfV(A7U),"KU",BfW(AIO),"yC",BfU(ATF),"sN",BfU(ANh)],RU,0,E9,[],0,0,0,0,["V4",BfV(AKq),"A_",BfU(A1T)],LL,0,C,[B2],0,3,0,0,["UK",BfW(AIU),"iv",BfX(A2F)],VM,0,C,[],0,3,0,0,["d",BfU(A78)],Gs,0,C,[],0,3,0,AKK,["d",BfU(VI),"AC",BfV(A4L)],M$,0,C,[B2],0,3,0,Beb,["Vt",BfW(AB0)],ABt,0,By,[],0,3,0,0,0,QP,"BufferUnderflowException",11,Bm,[],0,3,0,0,["d",BfU(A9G)],VO,0,Bt,[],0,0,
0,0,["Hq",BfV(A5V),"e",BfX(AXy),"ba",BfV(AIS),"u",BfU(AVO)],Ch,0,C,[Hv],1,3,0,0,["d",BfU(DR),"xV",BfW(AUN)],TJ,0,C,[B6],1,3,0,0,0,Xb,0,V,[],4,0,0,0,["d",BfU(A5K),"bg",BfY(AZG)],MJ,0,C,[],32,0,0,Bfd,0,Yn,0,C,[],0,3,0,0,["d",BfU(A6i),"g4",BfU(ADs),"HS",BfU(AVU),"PK",BfV(AVs),"Jc",BfU(AF1),"Nb",BfW(A7Y),"J1",BfY(AJ0),"Kh",BfY(ASt),"Cg",function(b,c,d,e,f){return ARf(this,b,c,d,e,f);},"JN",function(b,c,d,e,f,g){return A25(this,b,c,d,e,f,g);}],I9,0,C,[GS],0,3,0,0,["Bl",BfX(ZX),"jF",BfU(AIR),"uK",BfU(ATn),"uo",BfX(A4H),
"id",BfW(AZq),"gN",BfW(AVW)],Wa,0,I9,[],0,3,0,0,["RS",BfW(A6L)],Xh,0,V,[],4,0,0,0,["d",BfU(AQy),"bg",BfY(ATf)],Xd,0,V,[],4,0,0,0,["d",BfU(ARB),"bg",BfY(AUZ)],S3,0,T,[],0,0,0,0,["d",BfU(AJb),"T",BfU(A6V)],Xc,0,V,[],4,0,0,0,["d",BfU(AKU),"bg",BfY(ALx)],KO,0,C,[],3,3,0,0,0,Xf,0,V,[],4,0,0,0,["d",BfU(AZc),"bg",BfY(AGT)],ABx,0,C,[B6],1,3,0,0,0]);
$rt_metadata([YV,0,C,[],0,3,0,0,["WN",BfV(A9T),"g4",BfU(A76),"bd",BfU(A$p),"MT",BfV(AGC),"LV",BfX(AXs),"xd",BfX(A9D),"HU",BfV(AJZ)],Q_,0,T,[],0,0,0,0,["d",BfU(AFV),"T",BfU(AO9)],Hl,0,C,[HT],1,3,0,0,["d",BfU(XH)],Zk,0,C,[Hc],0,3,0,0,["mK",BfW(AYW),"lZ",BfU(APi),"nb",BfU(AUw),"uz",BfX(A1q),"uj",BfU(ASw),"eu",BfU(ALa),"D5",BfU(AFG)],Gn,0,BR,[],0,3,0,A4y,["b6",BfV(Y0),"d",BfU(H3)],Wl,0,Bt,[],0,0,0,0,["d",BfU(AQD),"e",BfX(AKP),"ba",BfV(ATJ),"u",BfU(AV9)],Xl,0,V,[],4,0,0,0,["d",BfU(AEC),"bg",BfY(A63)],Xi,0,V,[],4,
0,0,0,["d",BfU(A9k),"bg",BfY(AS2)],C9,0,BR,[],0,3,0,Fl,["b6",BfV(SX),"Lv",BfU(AFO),"JA",BfU(APX),"J2",BfU(A00),"MW",BfX(AHE)],Xe,0,V,[],4,0,0,0,["d",BfU(AEA),"bg",BfY(ANO)],Xk,0,V,[],4,0,0,0,["d",BfU(AV4),"bg",BfY(AJv)],KX,0,Cy,[],0,0,0,0,["bj",BfV(ZK),"e",BfX(AVb),"u",BfU(AX8),"ba",BfV(A6X)],Xj,0,V,[],4,0,0,0,["d",BfU(AIT),"bg",BfY(AYd)],Ll,0,C,[],4,3,0,E1,0,NA,0,C,[],3,3,0,0,0,L2,0,C,[],3,3,0,0,0,Vm,0,BJ,[],0,0,0,0,["bj",BfV(A7D),"bH",BfW(AP6),"u",BfU(A$T)],U7,0,Ir,[],0,3,0,0,["RT",BfW(Qn),"Jv",BfV(AFu),"im",
BfY(AKb),"hO",BfY(A1d),"Ic",BfX(AYD),"i8",BfX(AKi),"oG",BfW(AR5),"y1",BfV(A20),"M1",BfV(AR9),"lE",BfV(AD4),"oC",BfV(A1Y)],Gm,0,C,[],4,3,0,0,0,S0,0,C,[B9],0,3,0,0,["d",BfU(A7_),"JG",BfV(AD1),"bp",BfU(AFj)],Q9,"BitmapFont$BitmapFontData",6,C,[],0,3,0,0,["J_",BfW(A36),"PL",BfW(AGj),"ER",BfW(AVp),"ye",BfW(ATk),"CH",BfU(A3q),"iq",BfV(AGO),"FD",function(b,c,d,e,f){AF5(this,b,c,d,e,f);},"Ky",BfW(ADg),"xz",BfV(AGz),"jq",BfV(AHf)],Nv,0,C,[],0,3,0,0,0,Xt,0,T,[],0,0,0,0,["fT",BfW(A9E),"T",BfU(AL2)],UD,0,C,[],0,0,0,0,["d",
BfU(ADn),"u6",BfX(AM1),"BY",BfX(AMf),"K_",BfU(A1Z),"QK",BfU(A5O)],ACy,0,HJ,[],0,0,0,0,["Xj",BfV(A5C),"fc",BfU(A4Y)],Xm,0,T,[],0,0,0,0,["d",BfU(AFq),"T",BfU(ASV)],Zr,0,C,[Ih],4,3,0,0,["Tx",BfW(X2),"Ra",BfU(AA_),"Uw",BfV(ABB),"VR",BfV(ACi),"BN",BfV(Gh),"RX",BfV(JJ),"UZ",BfU(Ga),"lA",BfV(U3),"pa",BfV(O$),"ws",BfU(LS),"pO",BfU(MW),"lF",BfU(Pe),"US",BfW(AC2)],T5,0,BC,[],0,0,0,0,["d",BfU(A4B),"e",BfX(ATj),"u",BfU(AHj),"Q",BfV(AWU),"i3",BfU(A4v),"ba",BfV(AWR)],ZI,0,Q,[],0,0,0,0,["UQ",BfV(AQj),"p",BfV(AR2)],O1,0,FN,
[],0,3,0,0,["d",BfU(A0u),"f5",BfU(AGf),"p8",BfV(AQi)],UO,0,C,[Hi],0,3,0,0,["Lx",BfV(A03),"fc",BfU(A8E)],VA,0,C3,[],0,0,0,0,["o7",BfV(AGU),"p",BfV(AKN),"u",BfU(AS_)],Vd,0,T,[],0,0,0,0,["d",BfU(APt),"T",BfU(AUp)],ME,0,BC,[],0,0,0,0,["Tn",BfW(AU3),"Q",BfV(AMp),"u",BfU(APQ),"e",BfX(AC_),"ca",BfV(AWS),"ba",BfV(ARr)],U9,0,T,[],0,0,0,0,["d",BfU(A3S),"T",BfU(A0R)],Ky,0,C,[GS],0,3,0,AIF,["Bl",BfX(Xx),"jF",BfU(AV8),"uK",BfU(ARv),"uo",BfX(AWp),"id",BfW(AQR),"gN",BfW(AHp)],QL,0,C,[],4,3,0,0,0,Hh,"GlyphLayout$GlyphRun",
6,C,[EJ],0,3,0,0,["d",BfU(AZ_),"fU",BfU(ALf),"b",BfU(AEf)],Mp,0,Dl,[],0,3,0,0,0,SS,0,Cl,[],0,0,0,0,["QF",BfW(A7S),"fz",BfV(A$r),"dc",BfV(AL1),"ug",BfW(AMG),"dn",BfW(AKL)],AA4,0,Cl,[],0,0,0,0,["SA",BfV(AXL),"fz",BfV(AT$),"dc",BfV(AHb),"dn",BfW(A8H)],FK,0,C,[B6],3,3,0,0,0,SO,0,C,[FK],0,0,0,0,["yp",BfY(AI$),"dU",BfV(AIi),"lC",BfV(A1b)],SN,0,Cl,[],0,0,0,0,["RQ",function(b,c,d,e,f){ARl(this,b,c,d,e,f);},"fz",BfV(A_f),"dc",BfV(A$a),"ug",BfW(AEY),"dn",BfW(ASP)],SM,0,C,[FK],0,0,0,0,["QF",BfW(AVz),"dU",BfV(A7r),"lC",
BfV(AXt)],Lo,0,C,[],32,0,0,BdK,0,U1,0,C,[Cr],0,3,0,0,["d",BfU(ADj),"Mu",BfV(A8B)],SU,0,C,[FK],0,0,0,0,["yp",BfY(AIW),"dU",BfV(AYV),"lC",BfV(AIa)],Qs,0,Bt,[],0,0,0,0,["b6",BfV(AKR),"e",BfX(AWx),"ba",BfV(AWO),"u",BfU(A$X)],Fs,0,C,[KT],0,3,0,Lz,["d",BfU(Vq),"O7",BfV(ATz),"QO",BfW(A0F),"Qd",BfW(AJ5),"LX",BfX(AGs),"Lc",BfV(AK$),"NO",BfU(AEc),"jF",BfU(AGH),"Mb",BfU(AQK),"xN",BfV(AVC),"ML",BfY(AEt),"Da",BfV(AHq),"x3",BfV(AOU),"ul",BfV(AIn),"hl",BfV(AXr),"r2",BfV(ANU),"IM",BfU(AJk),"KI",BfY(AYr),"dH",BfV(AMs),"Hd",
BfY(A1j),"On",function(b,c,d,e,f,g){A1o(this,b,c,d,e,f,g);},"EF",function(b,c,d,e,f,g,h,i){AWJ(this,b,c,d,e,f,g,h,i);},"d2",BfY(AOM),"Nt",BfY(A6j),"jm",function(b,c,d,e,f){ALs(this,b,c,d,e,f);},"K4",BfX(AHg)]]);
$rt_metadata([Hb,0,BI,[],0,3,0,Bbw,0,ST,0,C,[FK],0,0,0,0,["yp",BfY(A5d),"dU",BfV(AQh),"lC",BfV(AZe)],Jc,0,T,[],0,0,0,0,["d",BfU(Rn),"T",BfU(YP)],Pl,0,DV,[],4,0,0,0,["d",BfU(AN$)],Pm,0,DV,[],4,0,0,0,["d",BfU(A0I),"Ws",BfU(Y1),"tT",BfU(ALS)],AAA,0,C,[],4,3,0,0,0,KN,0,C,[D8],3,3,0,0,0,NK,0,C,[D8,MO,KN,M4,Lf,Oq],3,3,0,0,0,Kc,0,C,[],3,3,0,0,0,Ph,0,C,[B6,NK,Kc,Hm],1,3,0,0,["WG",BfW(AMc),"Xq",BfW(AMH),"Ux",BfV(AED),"SP",BfX(AN_),"R1",BfV(ASe),"VF",BfU(AF3),"U6",BfX(ADo)],Yw,0,C,[B2],0,3,0,0,["d",BfU(ALH),"Ap",BfU(A4t),
"HO",BfU(AK2),"CK",BfU(A5r),"D0",BfV(A$U),"Aw",BfU(AUg)],T6,0,G4,[B6],0,3,0,0,["Q4",BfW(ARq),"N1",BfV(A1v),"EH",BfU(A1f),"hs",BfU(ATW),"M3",BfU(A3p),"PV",BfU(A06),"uh",BfU(A8g),"AE",BfU(A9Y),"LY",BfU(A9w)],Pd,0,C,[],0,0,0,0,0,Cu,0,C,[B2],0,3,0,CC,["d",BfU(Ti),"ch",BfV(A$5),"En",BfV(AFv),"Gi",BfV(A9x),"HL",BfY(AZH),"Ns",function(b,c,d,e,f,g,h){return A59(this,b,c,d,e,f,g,h);},"Ga",BfX(AWj),"JE",function(b,c,d,e,f,g,h,i,j,k){return ATa(this,b,c,d,e,f,g,h,i,j,k);},"hA",BfV(AMZ),"fv",BfU(AHA),"PB",BfU(A6H),"Kn",
BfY(AEU),"LR",BfY(A3w),"y9",function(b,c,d,e,f,g){return A37(this,b,c,d,e,f,g);},"IJ",BfX(AFZ),"O9",BfW(AV5),"Qr",BfW(AH8),"BW",BfX(AZy),"uw",BfV(AE_),"Lu",BfX(A16),"vp",BfW(AVS),"L_",BfV(APF),"MJ",BfU(A4U)],ACS,"NegativeArraySizeException",13,Bm,[],0,3,0,0,["d",BfU(A5h)],AAd,0,Ed,[],0,0,0,0,["lh",BfX(AZI),"e",BfX(AEo)],AAw,0,T,[],0,0,0,0,["d",BfU(AE9),"T",BfU(AKo)],ZN,0,C,[],0,0,0,0,["V2",BfW(AHi),"b",BfU(AL5)],Gz,"Timer",3,C,[],0,3,0,EH,["d",BfU(UJ),"FL",BfW(A8Z),"F6",BfY(A9q),"GU",BfU(ASC),"M2",BfW(ARb),
"H6",BfV(AOb)],Ds,"NumberFormatException",13,C2,[],0,3,0,0,["d",BfU(AVM),"bP",BfV(ALN)],XR,0,C,[Gt,Cz],0,3,0,0,["Kq",BfW(ANp),"bC",BfU(A1P),"bz",BfU(AXJ)],AAO,0,Jo,[],0,0,0,0,["Um",function(b,c,d,e,f){A8k(this,b,c,d,e,f);}],Wc,0,C,[],0,0,0,0,0,RX,0,C$,[],0,3,0,0,["I7",BfX(A5F),"m_",function(b,c,d,e,f,g,h){return ARY(this,b,c,d,e,f,g,h);}],AA$,0,Jw,[],0,3,0,0,["d",BfU(A1X),"Mf",BfW(AMC),"Mk",BfV(ALM),"M_",BfV(AKs)],SP,0,T,[],0,0,0,0,["d",BfU(AMM),"T",BfU(APD)],Wh,0,C,[Cz],0,3,0,0,["Ub",BfV(A5R),"Kq",BfW(ACM),
"bZ",BfU(A08)],AAI,0,T,[],0,0,0,0,["d",BfU(AM9),"T",BfU(AUe)],ZS,"IllegalStateException",13,B3,[],0,3,0,0,["d",BfU(A7p),"bP",BfV(A5a)],YE,0,C,[EJ],0,3,0,0,["d",BfU(A$2),"fU",BfU(AOI),"dK",BfY(ALB),"n3",BfW(ALU)],Z3,0,C,[],0,3,0,0,["Xu",BfW(A8R)],OE,0,GB,[],0,3,0,0,["d",BfU(TX),"Fc",BfV(A74),"LI",BfV(ATE),"Dt",BfV(AMg),"QE",BfV(AVR),"AR",BfV(AGF)],Jj,0,BC,[],0,0,0,0,["nV",BfV(AN3),"Q",BfV(AW7),"e",BfX(ADl),"cC",BfX(A5x),"cG",BfY(AP0),"u",BfU(A9_),"ca",BfV(AG0),"ba",BfV(A5H)],Rh,0,Ef,[],0,0,0,0,["yQ",BfY(A5v),
"e",BfX(A7f)],Ri,0,Bt,[],4,0,0,0,["d",BfU(AG_),"e",BfX(A2E),"ba",BfV(A1u),"u",BfU(AM5)],YL,0,C,[KO],0,0,0,0,["Xr",BfV(ASB),"nM",BfV(A11),"Oz",BfV(AS$)],DA,0,C,[B2,HP],0,3,0,H1,["d",BfU(ZC),"UY",BfX(Rp),"I",BfX(A2R),"M",BfV(AG3),"fA",BfV(ARh),"AJ",BfX(ALr),"gk",BfV(ANe),"Js",BfX(AQH),"el",BfV(A7c),"IA",BfU(A$W),"t9",BfU(AGo),"GE",BfV(AY0),"BR",BfV(AIC),"bU",BfU(A_g),"yt",BfV(ARE),"iz",BfV(AYm),"HI",BfX(A3k),"kK",BfV(AQv),"qT",BfV(AVH),"rx",BfW(AHd),"yj",BfU(A_a),"i0",BfW(ANH),"b",BfU(AFh),"bp",BfU(A7j),"z",BfV(AGZ),
"LK",BfU(AIH)],GC,0,C,[B2,HP],0,3,0,AOx,["d",BfU(R9),"TP",BfW(Tu),"k4",BfV(AXb),"iu",BfW(AC1),"wV",BfV(AOL)],EY,0,C,[KQ],0,3,0,0,["Q8",BfY(Om),"Wc",BfX(Vf),"QS",BfW(G1),"bP",BfV(ARg),"LU",BfX(AOp)],GV,0,C,[],0,3,0,0,["d",BfU(AJI),"mK",BfW(Ue),"iV",BfV(A1L),"b2",BfV(AQz),"K",BfU(AZl),"Hl",BfU(ANz),"OX",BfV(ANQ),"tY",BfV(AEX),"bp",BfU(AL7),"z",BfV(A8X),"b",BfU(A2t)],H0,0,C,[Ko,E2],0,3,0,0,["SD",BfW(ABk),"fc",BfU(A2P),"IS",BfU(AM7),"qA",BfW(AFp),"u0",BfU(A4V),"Mg",BfV(A28),"Os",BfV(AKA)],Ij,0,BI,[],0,3,0,JD,["d",
BfU(JK),"T4",BfV(R5),"QC",BfU(A4M),"bp",BfU(ANx),"pd",BfU(A7G)],Dd,0,Ha,[],0,3,0,CQ,["Rn",BfW(W8),"TK",BfX(L6),"Wa",function(b,c,d,e,f){Kx(this,b,c,d,e,f);},"T9",BfX(Mw),"D9",BfU(AW8),"uF",BfV(A3s),"z",BfV(A5Y),"Pu",BfV(ASD),"C0",BfW(AGE),"y0",BfW(A$b),"bd",BfU(AD8),"H3",BfV(A2g),"JQ",BfW(A21)],KI,0,DN,[],0,3,0,0,["d",BfU(A5S),"JY",BfV(A2f),"G$",function(b,c,d,e,f,g){return A4S(this,b,c,d,e,f,g);},"Ph",function(b,c,d,e,f,g,h,i,j,k,l,m){return A9N(this,b,c,d,e,f,g,h,i,j,k,l,m);},"H8",BfV(AK9)],Xn,0,C,[NA],0,
3,0,0,["d",BfU(AHF),"qA",BfW(A2D)],Md,"IllegalAccessException",13,Dl,[],0,3,0,0,["d",BfU(A8G)],L7,0,FU,[],0,3,0,APW,["Ty",BfV(R6),"b6",BfV(Uy)],AAZ,0,E5,[],0,3,0,0,["bj",BfV(AXB),"fZ",BfU(AZQ),"bd",BfU(AXz)],PY,0,C,[],4,3,0,0,["TV",BfV(ARQ),"Bt",BfU(FF),"Aa",BfV(Ta),"Cp",BfV(ACO)],ABW,0,Fh,[],0,0,0,0,["TA",function(b,c,d,e,f,g){A$V(this,b,c,d,e,f,g);},"vj",BfV(AIK),"qS",BfW(A1H),"eZ",BfU(AYg)]]);
$rt_metadata([Dy,0,Bx,[],12,3,0,Gl,0,I7,0,C,[],0,3,0,Tn,0,ZE,0,C,[],0,3,0,0,["d",BfU(AR1),"mK",BfW(AAD),"cd",BfV(A2X),"K",BfU(ASh),"OZ",BfV(AWr),"Cu",BfV(AYx)],Tt,0,C,[],4,3,0,0,0,VE,0,T,[],0,0,0,0,["d",BfU(AMj),"T",BfU(A9F)],Ry,0,Hl,[DK,B2],0,3,0,0,["Bc",BfV(A0v),"d",BfU(AHv),"bj",BfV(OK),"mq",BfW(ACk),"W",BfV(ARV),"VH",BfV(ZQ),"VN",BfX(KA),"XF",BfU(K1),"x",BfW(ANn),"Qe",BfW(ARy),"wq",BfX(AO$),"L$",BfV(A0b),"oS",BfU(A6d),"Iz",BfV(AMS),"Sf",BfV(SK)],DC,0,Bx,[],12,3,0,SL,0,ZF,0,Bt,[],0,0,0,0,["bj",BfV(A0O),"e",
BfX(AN6),"ba",BfV(AZO),"u",BfU(ADT)],Dn,0,BI,[],0,3,0,B1,["FI",BfV(JE),"VI",BfW(Kn),"TT",function(b,c,d,e,f,g,h){Ob(this,b,c,d,e,f,g,h);},"UA",BfW(Zl),"RR",BfV(ACK),"pd",BfU(A6B),"bp",BfU(AT3)],ABl,0,C,[],0,3,0,0,["d",BfU(AOY),"mK",BfW(T$),"Ad",BfV(AXu),"Gz",BfV(AEK),"xT",BfX(AQN),"rF",BfX(AD3),"n9",BfV(AXZ),"lU",BfW(AUK),"K",BfU(AWe),"DZ",BfV(APN),"tZ",BfV(ANy),"h3",BfV(AF_)],Bh,0,C,[],0,3,0,BeF,0,Ny,0,FT,[],0,3,0,A85,["Tg",BfY(S_),"b6",BfV(AAW)],Qv,0,D3,[],4,0,0,0,["d",BfU(A7a)],Jq,0,C,[],0,3,0,Bj,["Tb",BfW(Xr),
"jH",BfU(AM$),"h2",BfU(A8J),"mw",BfU(A2i),"zg",BfU(AJq),"t0",BfU(AR4),"i",BfU(AIe),"nP",BfU(APU)],Qw,0,Cl,[],4,0,0,0,["d",BfU(AZE),"dn",BfW(A$o),"dc",BfV(A7H)],WN,0,Ch,[],4,0,0,0,["d",BfU(A90),"bg",BfY(AQV)],LP,0,Bt,[],4,0,0,0,["bj",BfV(ABq),"e",BfX(A5T),"ba",BfV(AXI),"u",BfU(A3d)],WK,0,Ch,[],4,0,0,0,["d",BfU(AUH),"bg",BfY(AOg)],WM,0,Ch,[],4,0,0,0,["d",BfU(ADC),"bg",BfY(A8j)],MP,0,Gn,[],0,3,0,APZ,["d",BfU(ZO),"b6",BfV(YH)],WI,0,Ch,[],4,0,0,0,["d",BfU(ARP),"bg",BfY(A3R)],WJ,0,Ch,[],4,0,0,0,["d",BfU(AFi),"bg",
BfY(AEg)],WG,0,Ch,[],4,0,0,0,["d",BfU(A0G),"bg",BfY(A5X)],TA,0,C,[L2],4,3,0,0,["fT",BfW(A9W),"gc",BfX(Yv),"g4",BfU(AZ6),"bd",BfU(AJK),"gD",BfV(AEE)],WH,0,Ch,[],4,0,0,0,["d",BfU(ARX),"bg",BfY(ASA)],WE,0,V,[],4,0,0,0,["d",BfU(A4k),"bg",BfY(AFo)],Gj,0,C,[],0,0,0,0,["dT",BfW(A8y),"bV",BfU(A2l),"pL",BfV(AXo),"GX",BfV(AW1),"sc",BfU(AG6),"kX",BfU(AO0),"tk",BfU(AFy),"E",BfU(A6C),"jk",BfU(AXS),"cK",BfU(AVQ),"G_",BfU(AIc),"b",BfU(AIL),"bN",BfU(A0_),"hw",BfU(ASZ),"Em",BfU(AWB),"Fn",BfU(A6y),"dM",BfU(AFf)],WF,0,V,[],4,
0,0,0,["d",BfU(AJX),"bg",BfY(AHB)],XP,0,T,[],0,0,0,0,["d",BfU(AS1),"T",BfU(ASq)],Za,0,Jc,[],0,0,0,0,["d",BfU(ASa),"T",BfU(AWf)],Xq,0,CN,[],1,3,0,0,0,Yj,0,C,[],0,3,0,0,0,U5,0,C,[No],0,3,0,0,["R3",BfV(A3J),"ut",BfV(A0B),"KG",BfV(ATB),"HW",BfV(AMY),"rC",BfV(A5j),"sB",BfW(AK_),"PA",BfW(AJ$),"Es",BfV(ANM),"v6",BfY(A91),"I3",BfV(AEO),"vz",BfV(A9K),"kQ",BfV(A0m),"JS",BfW(AW6),"eh",BfV(A2N),"w8",BfX(A$K),"Ni",BfY(A5t),"o3",BfV(ATI),"IW",BfU(A0q),"Oa",BfW(AY8),"GC",BfW(AT8),"ky",function(b,c,d,e,f,g,h,i,j){AJz(this,
b,c,d,e,f,g,h,i,j);},"OH",BfX(A50),"oH",BfY(AXD),"xc",BfW(ALm),"c8",BfW(AOm),"JJ",BfY(AZv),"fC",BfY(AYR),"qn",BfY(AMN),"Ia",BfV(AIp),"MM",BfU(AGG),"Oc",BfV(A04),"xC",BfV(AP7),"OT",BfY(A6c),"Qj",BfV(ARo),"i2",BfU(AZa),"w5",BfV(A5s),"Pz",BfY(ANR),"PX",BfY(ADJ),"C4",BfW(AIM),"Mw",BfW(ALI),"ql",BfX(AJG),"Af",BfV(AYB),"NA",BfX(A5q),"NJ",BfV(A$n),"AG",BfW(AGP),"Lb",BfV(AUf),"Qp",BfW(AVy),"jf",BfX(AN9),"MH",BfW(AVP),"Cl",BfW(AOC),"OA",BfX(ALW),"GT",BfY(AZM),"FO",BfY(AXQ),"Gy",function(b,c,d,e,f){AD7(this,b,c,d,e,f);
},"IN",function(b,c,d,e,f){AQC(this,b,c,d,e,f);},"x$",function(b,c,d,e,f){A0y(this,b,c,d,e,f);},"J3",BfV(A1z),"O6",function(b,c,d,e,f,g){A9p(this,b,c,d,e,f,g);}],XQ,0,Fr,[],0,0,0,0,["fN",function(b,c,d,e,f,g){AD_(this,b,c,d,e,f,g);},"vj",BfV(A4s),"qS",BfW(AX6)]]);
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
"NegLookaheadJointSet","Already prepared","Call prepare() before calling getPixmap()","This TextureData implementation does not upload data itself","blended","0","<Quant>","Comparison method violates its general contract!","fromIndex(",") > toIndex(","canvas","charsetName is null","Should never been thrown","ErrorLoading: ","\n","i","b","a","Invalid assets description file.","PosBehindJointSet","sequence: ","US-ASCII","-2147483648","Bullet binaries version (",") does not match source version (","scripts/bullet.js",
"UCI range:","GL_EXT_texture_filter_anisotropic","New data must have the same managed status as the old data","IGNORE","REPLACE","REPORT","mousedown","mouseup","mousemove","wheel","touchstart","touchmove","touchcancel","touchend","keydown","keypress","keyup","CSS1Compat","NegBehindJointSet","Index ","back reference: ","<DotQuant>","COPY","copy","DESTINATION_ATOP","destination-atop","DESTINATION_IN","destination-in","DESTINATION_OUT","destination-out","DESTINATION_OVER","destination-over","LIGHTER","lighter",
"SOURCE_ATOP","source-atop","SOURCE_IN","source-in","SOURCE_OUT","source-out","SOURCE_OVER","source-over","XOR","xor","\' Not supported in Dragome backend"," does not exist","UTF-8","Error reading file: ","/","\\","vertex shader must not be null","fragment shader must not be null","Fragment shader:\n","Vertex shader\n","An attempted fetch uniform from uncompiled shader \n","No uniform with name \'","\' in shader","Classpath","Internal","External","Absolute","Local","javaClass@","<init>","No buffer allocated!",
".","CI ","Capacity is negative: ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","The last char in src "," is outside of string of size ","Start "," must be before end ","mtl","object cannot be null.","UTF-16","UTF-16BE","UTF-16LE","GL_ARB_framebuffer_object","GL_EXT_framebuffer_object","texture width and height must be square when using mipmapping.","The last short in src ","The last float in src ","<EOL>","UCI ","pointLights","start + count must be <= size: ",
" + "," <= ","index can\'t be >= size: "," >= ","index can\'t be > size: "," > ","end can\'t be >= size: ","start can\'t be > end: ","Array is empty.","additionalCapacity must be >= 0: ","newSize must be >= 0: ","[]",", ","ISO-8859-1","MirroredRepeat","ClampToEdge","Repeat","AtomicFSet","posFSet","Nearest","Linear","MipMap","MipMapNearestNearest","MipMapLinearNearest","MipMapNearestLinear","MipMapLinearLinear","<MultiLine $>","Class cannot be created (missing no-arg constructor): ","Unable to create new instance: ",
"depthStencil","VertexArray","VertexBufferObject","VertexBufferObjectSubData","VertexBufferObjectWithVAO","key cannot be null.","Patter is null","\\Q","\\E","\\\\E\\Q","Can\'t have more than 8191 sprites per batch: ","a_position","a_color","a_texCoord0","attribute vec4 a_position;\nattribute vec4 a_color;\nattribute vec2 a_texCoord0;\nuniform mat4 u_projTrans;\nvarying vec4 v_color;\nvarying vec2 v_texCoords;\n\nvoid main()\n{\n   v_color = a_color;\n   v_color.a = v_color.a * (255.0/254.0);\n   v_texCoords = a_texCoord0;\n   gl_Position =  u_projTrans * a_position;\n}\n",
"#ifdef GL_ES\n#define LOWP lowp\nprecision mediump float;\n#else\n#define LOWP \n#endif\nvarying LOWP vec4 v_color;\nvarying vec2 v_texCoords;\nuniform sampler2D u_texture;\nvoid main()\n{\n  gl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n}","Error compiling shader: ","SpriteBatch.end must be called before begin.","SpriteBatch.begin must be called before end.","SpriteBatch.begin must be called before draw.","u_projTrans","u_texture","Unmappable characters of length ","error","Cannot register an uniform after initialization",
"Already initialized","Malformed input of length ","None","SourceOver","NearestNeighbour","BiLinear","shininess","alphaTest","texture cannot be null.","offset + length must be <= size: ","com/badlogic/gdx/utils/arial-15.fnt","com/badlogic/gdx/utils/arial-15.png","If no regions are specified, the font data must have an images path.","Intensity","LuminanceAlpha","RGB565","RGBA4444","RGB888","RGBA8888","Invalid type specified","diffuseColor","specularColor","ambientColor","emissiveColor","reflectionColor","ambientLightColor",
"fogColor","The specified font must contain at least one texture page.","UCI sequence: ","CompositeRangeSet:  <nonsurrogate> "," <surrogate> ","FinalSet","<Empty set>","cullface","attributes must be >= 1","Call end() first.","Logical","Pixels","Could not remove child from its current parent","Cannot add a parent as a child","data/badlogic.jpg","ground","ID: ","\nFPS: ","\nTotal Boxes: ","\nBullet Version: ","\nInputs: Enter for fullscreen, Space to un/freeze simulation\nHold Left/Right mouse to manipulate camera",
"Libgdx teaVM Backend + teaVM Bullet Extension by xpenatan","{","}","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/","==","=","Mesh attempting to access memory outside of the index buffer (count: ",", offset: ",", max: ","capacity must be >= 0: ","The required capacity is too large: ","EOI","The last byte in dst ","The last byte in src ","^","Call end() first","Call begin() first","node","box","IndexBufferObject cannot be used after it has been disposed.","PreviousMatch","NonCapFSet","Either src or dest is null",
"java.version","1.8","os.name","TeaVM","file.separator","path.separator","line.separator","java.io.tmpdir","java.vm.version","user.home","/tmp","Already loaded.","File is empty.","padding=","Invalid padding.","Missing common header.","Invalid common header.","lineHeight=","Missing: lineHeight","base=","Missing: base","pages=","Missing additional page definitions.",".*id=(\\d+)",".*file=\"?([^\"]+)\"?","\\\\","Missing: file","Page IDs must be indices starting at 0: ","Invalid page id: ","kernings ","metrics ",
"char "," =","kerning ","Error loading font file: ","No glyphs found.","DotAll","decomposed Hangul syllable:",", #","Asset loaded: ","data:",";base64,","WordBoundary","a_normal","Cannot build mesh without position attribute","Mesh attributes don\'t match","Mesh can\'t hold enough vertices: "," * "," < ","Mesh can\'t hold enough indices: ","Too many vertices used","Incorrect primitive type","spotLights","Script loaded: ","data must be a ByteBuffer or FloatBuffer","Can\'t invert a singular matrix","The same task may not be scheduled twice.",
"#iterator() cannot be used nested.","<SOL>","java.runtime.name","Windows","OS X","no OS","Linux",".html","index.html","index-debug.html","assets/","assets.txt","scripts/soundmanager2-jsmin.js","directionalLights","com/badlogic/gdx/graphics/g3d/shaders/default.vertex.glsl","com/badlogic/gdx/graphics/g3d/shaders/default.fragment.glsl","u_dirLights[0].color","u_dirLights[0].direction","u_dirLights[1].color","u_pointLights[0].color","u_pointLights[0].position","u_pointLights[0].intensity","u_pointLights[1].color",
"u_spotLights[0].color","u_spotLights[0].position","u_spotLights[0].intensity","u_spotLights[0].direction","u_spotLights[0].cutoffAngle","u_spotLights[0].exponent","u_spotLights[1].color","u_fogColor","u_shadowMapProjViewTrans","u_shadowTexture","u_shadowPCFOffset","Some attributes not implemented yet (","too many bones: ",", max configured: ","u_time","#define positionFlag\n","#define colorFlag\n","#define binormalFlag\n","#define tangentFlag\n","#define normalFlag\n","#define lightingFlag\n","#define ambientCubemapFlag\n",
"#define numDirectionalLights ","#define numPointLights ","#define numSpotLights ","#define fogFlag\n","#define shadowMapFlag\n","#define environmentCubemapFlag\n","#define boneWeight","Flag\n","#define texCoord","#define blendedFlag\n","#define diffuseTextureFlag\n","#define diffuseTextureCoord texCoord0\n","#define specularTextureFlag\n","#define specularTextureCoord texCoord0\n","#define normalTextureFlag\n","#define normalTextureCoord texCoord0\n","#define emissiveTextureFlag\n","#define emissiveTextureCoord texCoord0\n",
"#define reflectionTextureFlag\n","#define reflectionTextureCoord texCoord0\n","#define ambientTextureFlag\n","#define ambientTextureCoord texCoord0\n","#define diffuseColorFlag\n","#define specularColorFlag\n","#define emissiveColorFlag\n","#define reflectionColorFlag\n","#define shininessFlag\n","#define alphaTestFlag\n","#define numBones ","Unknown material attribute: ","Exception occurred in constructor for class: ","Illegal argument(s) supplied to constructor for class: ","Could not instantiate instance of class: ",
"IDLE","QUEUE_ASSETS_LOADED","INIT_SOUND","APP_CREATE","APP_READY","public","protected","private","abstract","static","final","transient","volatile","synchronized","native","strictfp","interface","Image","Audio","Text","t","Binary","Directory","<Unix MultiLine $>","diffuseTexture","specularTexture","bumpTexture","normalTexture","ambientTexture","emissiveTexture","reflectionTexture","u_viewTrans","u_projViewTrans","u_cameraPosition","u_cameraDirection","u_cameraUp","u_cameraNearFar","u_worldTrans","u_viewWorldTrans",
"u_projViewWorldTrans","u_normalMatrix","u_bones","u_shininess","u_opacity","u_diffuseColor","u_diffuseTexture","u_diffuseUVTransform","u_specularColor","u_specularTexture","u_specularUVTransform","u_emissiveColor","u_emissiveTexture","u_emissiveUVTransform","u_reflectionColor","u_reflectionTexture","u_reflectionUVTransform","u_normalTexture","u_normalUVTransform","u_ambientTexture","u_ambientUVTransform","u_alphaTest","u_ambientCubemap","u_dirLights","u_pointLights","u_spotLights","u_environmentCubemap","Illegal arguments",
"Is","In","glGetFloat not supported by Dragome WebGL backend","Can only cope with FloatBuffer and ShortBuffer at the moment","glGetFloat not supported by WebGL backend"]);
BM.prototype.toString=function(){return $rt_ustr(this);};
BM.prototype.valueOf=BM.prototype.toString;C.prototype.toString=function(){return $rt_ustr(PS(this));};
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
~a);};}var CA=Long_add;var D4=Long_sub;var Ce=Long_mul;var E_=Long_div;var AUO=Long_rem;var BN=Long_or;var Br=Long_and;var AQ_=Long_xor;var D6=Long_shl;var M9=Long_shr;var CM=Long_shru;var Boy=Long_compare;var Z=Long_eq;var Du=Long_ne;var Kt=Long_lt;var Ku=Long_le;var Hq=Long_gt;var Boz=Long_ge;var BoA=Long_not;var A3K=Long_neg;
function TeaVMThread(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}TeaVMThread.prototype.push=function(){for(var i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};TeaVMThread.prototype.s=TeaVMThread.prototype.push;TeaVMThread.prototype.pop=function(){return this.stack.pop();};TeaVMThread.prototype.l=TeaVMThread.prototype.pop;TeaVMThread.prototype.isResuming=function(){return this.status===2;};TeaVMThread.prototype.isSuspending
=function(){return this.status===1;};TeaVMThread.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};TeaVMThread.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if($rt_currentNativeThread!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:function(result){if(result instanceof Error){throw result;}};this.run();};TeaVMThread.prototype.resume=function(){if($rt_currentNativeThread
!==null){throw new Error("Another thread is running");}this.status=2;this.run();};TeaVMThread.prototype.run=function(){$rt_currentNativeThread=this;var result;try {result=this.runner();}catch(e){result=e;}finally {$rt_currentNativeThread=null;}if(this.suspendCallback!==null){var self=this;var callback=this.suspendCallback;this.suspendCallback=null;callback(function(){self.resume();});}else if(this.status===0){this.completeCallback(result);}};function $rt_suspending(){var thread=$rt_nativeThread();return thread
!=null&&thread.isSuspending();}function $rt_resuming(){var thread=$rt_nativeThread();return thread!=null&&thread.isResuming();}function $rt_suspend(callback){var nativeThread=$rt_nativeThread();if(nativeThread===null){throw new Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);}function $rt_startThread(runner,callback){(new TeaVMThread(runner)).start(callback);}var $rt_currentNativeThread=null;function $rt_nativeThread(){return $rt_currentNativeThread;}function $rt_invalidPointer()
{throw new Error("Invalid recorded state");}main=$rt_mainStarter(Be2);
main.javaException=$rt_javaException;
(function(){var c;c=XM.prototype;c.fullscreenChanged=c.TI;c=WS.prototype;c.setWorldTransformJS=c.WZ;c=WT.prototype;c.getWorldTransformJS=c.VB;c=T9.prototype;c.handleEvent=c.lC;c=Pk.prototype;c.onready=c.TJ;c.ontimeout=c.Q9;c=VV.prototype;c.onTimer=c.SB;c=PW.prototype;c.handleEvent=c.lC;c=QU.prototype;c.getLength=c.Xc;c.get=c.T3;c=Sm.prototype;c.onAnimationFrame=c.SQ;c=SO.prototype;c.handleEvent=c.lC;c=SM.prototype;c.handleEvent=c.lC;c=SU.prototype;c.handleEvent=c.lC;c=ST.prototype;c.handleEvent=c.lC;c=Ph.prototype;c.dispatchEvent
=c.R1;c.addEventListener=c.WG;c.removeEventListener=c.Xq;c.getLength=c.VF;c.get=c.Ux;c.addEventListener=c.U6;c.removeEventListener=c.SP;})();
})();
