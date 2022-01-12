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
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Mg(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.S.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return Bgs;}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(IJ());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return Ds();}
function $rt_setThread(t){return H6(t);}
function $rt_createException(message){return Qg(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var G=$rt_throw;var B9=$rt_compare;var Bgt=$rt_nullCheck;var F=$rt_cls;var Y=$rt_createArray;var ARc=$rt_isInstance;var A7I=$rt_nativeThread;var Bd$=$rt_suspending;var Bec=$rt_resuming;var Bdd=$rt_invalidPointer;var B=$rt_s;var N=$rt_eraseClinit;var Cg=$rt_imul;var R=$rt_wrapException;var Bgu=$rt_checkBounds;var Bgv=$rt_checkUpperBound;var Bgw=$rt_checkLowerBound;var Bgx=$rt_wrapFunction0;var Bgy=$rt_wrapFunction1;var Bgz=$rt_wrapFunction2;var BgA=$rt_wrapFunction3;var BgB=$rt_wrapFunction4;var D=$rt_classWithoutFields;var H
=$rt_createArrayFromData;var I5=$rt_createCharArrayFromData;var BgC=$rt_createByteArrayFromData;var BgD=$rt_createShortArrayFromData;var MC=$rt_createIntArrayFromData;var BgE=$rt_createBooleanArrayFromData;var BcN=$rt_createFloatArrayFromData;var BgF=$rt_createDoubleArrayFromData;var AXH=$rt_createLongArrayFromData;var OC=$rt_createBooleanArray;var Cj=$rt_createByteArray;var MW=$rt_createShortArray;var BW=$rt_createCharArray;var Bc=$rt_createIntArray;var Bf1=$rt_createLongArray;var Ca=$rt_createFloatArray;var BgG
=$rt_createDoubleArray;var B9=$rt_compare;var BgH=$rt_castToClass;var BgI=$rt_castToInterface;var Ry=Long_toNumber;var O=Long_fromInt;var BgJ=Long_fromNumber;var Cd=Long_create;var Ba=Long_ZERO;var BgK=Long_hi;var Cp=Long_lo;
function C(){this.bx=null;this.$id$=0;}
function Qq(){var a=new C();J(a);return a;}
function Eq(b){var c;if(b.bx===null)Np(b);if(b.bx.cC===null)b.bx.cC=Ds();else if(b.bx.cC!==Ds())G(DR(B(0)));c=b.bx;c.cT=c.cT+1|0;}
function Ch(b){var c,d;if(!EM(b)&&b.bx.cC===Ds()){c=b.bx;d=c.cT-1|0;c.cT=d;if(!d)b.bx.cC=null;EM(b);return;}G(AQi());}
function BbT(b){AJC(b,1);}
function AJC(b,c){var d,$p,$z;$p=0;if(Bec()){var $T=A7I();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.bx===null)Np(b);if(b.bx.cC===null)b.bx.cC=Ds();if(b.bx.cC===Ds()){d=b.bx;d.cT=d.cT+c|0;return;}$p=1;case 1:ALm(b,c);if(Bd$()){break _;}return;default:Bdd();}}A7I().s(b,c,d,$p);}
function Np(b){b.bx=Bbb();}
function ALm(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.nP=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.OQ=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=Bbo(callback);return thread.suspend(function(){try{Bex(b,c,callback);}catch($e){callback.OQ($rt_exception($e));}});}
function Bex(b,c,d){var e,f,g;e=Ds();if(b.bx===null){Np(b);H6(e);f=b.bx;f.cT=f.cT+c|0;d.nP(null);return;}if(b.bx.cC===null){b.bx.cC=e;H6(e);f=b.bx;f.cT=f.cT+c|0;d.nP(null);return;}g=b.bx;if(g.d0===null)g.d0=ADj();A3Q(g.d0,BcP(e,b,c,d));}
function Be8(b){ADM(b,1);}
function ADM(b,c){var d;if(!EM(b)&&b.bx.cC===Ds()){d=b.bx;d.cT=d.cT-c|0;if(d.cT>0)return;d.cC=null;if(d.d0!==null&&!H_(d.d0))AMJ(BaH(b));else EM(b);return;}G(AQi());}
function AQE(b){var c,d,e;if(!EM(b)&&b.bx.cC===null){c=b.bx;if(c.d0!==null&&!H_(c.d0)){d=c.d0;e=A5u(d);c.d0=null;e.fe();}return;}}
function EM(a){var b,c;b=a.bx;if(b===null)return 1;a:{b:{if(b.cC===null){if(b.d0!==null){c=b.d0;if(!H_(c))break b;}if(b.yC===null)break a;c=b.yC;if(H_(c))break a;}}return 0;}ACv(a);return 1;}
function ACv(a){a.bx=null;}
function J(a){}
function Ck(a){return Lg(a.constructor);}
function MN(a){return Is(a);}
function AMT(a,b){return a!==b?0:1;}
function PW(a){return (((I()).a(B(1))).a(OB(Is(a)))).b();}
function Is(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function ALU(a){var b,c,d;if(!ARc(a,DM)){b=a;if(b.constructor.$meta.item===null)G(BbF());}c=ADy(a);b=c;d=$rt_nextId();b.$id$=d;return c;}
function A2z(b){AQE(b);}
function ANk(b,c,d,e){var f;H6(b);c.bx.cC=b;f=c.bx;f.cT=f.cT+d|0;e.nP(null);}
function T(){var a=this;C.call(a);a.sa=null;a.rb=null;}
function Bo(a){J(a);}
function A66(a,b){if(!b&&a.sa===null)a.sa=a.T();else if(b&&a.rb===null)a.rb=(a.T()).f9(1);if(b)return a.rb;return a.sa;}
var RS=D(T);
function Baf(){var a=new RS();A7B(a);return a;}
function A7B(a){Bo(a);}
function AYI(a){return ((CS()).cG(32)).cG(9);}
var Qs=D(T);
function BaJ(){var a=new Qs();A95(a);return a;}
function A95(a){Bo(a);}
function AMY(a){return ((CS()).bF(0,31)).cG(127);}
var I1=D(0);
function V6(){var a=this;C.call(a);a.qa=null;a.t0=null;a.zm=0;a.z2=0;}
function Be6(a,b){var c=new V6();ARe(c,a,b);return c;}
function ARe(a,b,c){J(a);a.qa=b;a.t0=c;}
function AHY(a){return Cb(a.qa);}
function A$a(a,b){return Bb(a.qa)<b?0:1;}
function AJk(a){return Cb(a.t0);}
function A7U(a,b){return Bb(a.t0)<b?0:1;}
function A0m(a,b){a.zm=b;}
function A_M(a,b){a.z2=b;}
var E2=D(0);
function HJ(){var a=this;C.call(a);a.ij=Ba;a.sL=Ba;a.dB=0;}
function P9(a){J(a);a.dB=(-1);}
function A1l(a){a.ij=Ba;a.dB=(-1);}
function AXk(a){return a.dB==(-1)?0:1;}
var Ws=D();
function A_L(b){var c,d;c=b.L5();d=c.data;if(d.length<=0)return null;return PK(d[0]);}
function ANP(b,c){var d,e,f,$$je;if(c!==null&&c.data.length){a:{b:{try{d=b.Hx(c);e=PK(d);}catch($$e){$$je=R($$e);if($$je instanceof Hf){f=$$je;break a;}else if($$je instanceof I0){f=$$je;break b;}else{throw $$e;}}return e;}G(Ex((((I()).a(B(2))).a(b.u())).b(),f));}G(Ex(((((I()).a(B(3))).a(b.u())).a(B(4))).b(),f));}return A_L(b);}
function AZo(b,c){var d,e,f,$$je;a:{try{d=b.GL(c);e=PK(d);}catch($$e){$$je=R($$e);if($$je instanceof Hf){f=$$je;break a;}else if($$je instanceof I0){f=$$je;G(Ex((((I()).a(B(2))).a(b.u())).b(),f));}else{throw $$e;}}return e;}G(Ex((((I()).a(B(5))).a(b.u())).b(),f));}
var B4=D(0);
var D3=D();
function ACq(a){J(a);}
var B$=D(0);
function D4(){D3.call(this);this.jc=0;}
var BgL=null;var BgM=null;function C1(){C1=N(D4);A72();}
function ABN(a){var b=new D4();Hr(b,a);return b;}
function Hr(a,b){C1();ACq(a);a.jc=b;}
function XA(b,c){C1();if(!(c>=2&&c<=36))c=10;return ((Bf_(20)).AX(b,c)).b();}
function ABR(b){C1();return b>>>4^b<<28^b<<8^b>>>24;}
function OB(b){C1();return ADB(b,4);}
function NE(b){C1();return XA(b,10);}
function Dt(b,c){var d,e,f,g,h;C1();if(c>=2&&c<=36){if(b!==null&&!b.bN()){a:{d=0;e=0;switch(b.f(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==b.i())G(Ec());while(e<b.i()){g=e+1|0;h=Nn(b.f(e));if(h<0)G(DH((((I()).a(B(6))).a(b)).b()));if(h>=c)G(DH((((((I()).a(B(7))).j(c)).a(B(8))).a(b)).b()));f=Cg(c,f)+h|0;if(f<0){if(g==b.i()&&f==(-2147483648)&&d)return (-2147483648);G(DH((((I()).a(B(9))).a(b)).b()));}e=g;}if(d)f= -f|0;return f;}G(DH(B(10)));}G(DH((((I()).a(B(11))).j(c)).b()));}
function BU(b){C1();return Dt(b,10);}
function Bn(b){C1();if(b>=(-128)&&b<=127){V$();return BgM.data[b+128|0];}return ABN(b);}
function V$(){var b;C1();a:{if(BgM===null){BgM=Y(D4,256);b=0;while(true){if(b>=BgM.data.length)break a;BgM.data[b]=ABN(b-128|0);b=b+1|0;}}}}
function AWa(a){return a.jc;}
function ASD(a){return NE(a.jc);}
function AUR(a){return ABR(a.jc);}
function A$I(a,b){if(a===b)return 1;return b instanceof D4&&b.jc==a.jc?1:0;}
function Mv(b){var c,d,e;C1();if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;e=d>>>8;if(!e)e=d;else c=c|8;d=e>>>4;if(!d)d=e;else c=c|4;e=d>>>2;if(!e)e=d;else c=c|2;if(e>>>1)c=c|1;return (32-c|0)-1|0;}
function E3(b){var c,d,e;C1();if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;e=d<<8;if(!e)e=d;else c=c|8;d=e<<4;if(!d)d=e;else c=c|4;e=d<<2;if(!e)e=d;else c=c|2;if(e<<1)c=c|1;return (32-c|0)-1|0;}
function Yk(b,c){var d;C1();d=c&31;return b<<d|b>>>(32-d|0);}
function A72(){BgL=F($rt_intcls());}
var Ez=D();
var BgN=null;var BgO=null;var BgP=null;var BgQ=null;var BgR=null;function Bat(){Bat=N(Ez);A14();}
function A14(){BgN=MC([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);BgO=AXH([O(1),O(10),O(100),O(1000),O(10000),O(100000),O(1000000),O(10000000),O(100000000),O(1000000000),Cd(1410065408, 2),Cd(1215752192, 23),Cd(3567587328, 232),Cd(1316134912, 2328),Cd(276447232, 23283),Cd(2764472320, 232830),Cd(1874919424, 2328306),Cd(1569325056, 23283064),Cd(2808348672, 232830643)]);BgP=AXH([O(1),O(10),O(100),O(10000),O(100000000),Cd(1874919424, 2328306)]);BgQ=BeT();BgR=Bea();}
function Bt(){var a=this;C.call(a);a.k=null;a.cF=0;a.tx=null;a.El=0;}
var BgS=0;function W4(){W4=N(Bt);ATM();}
function Co(a){var b,c;W4();J(a);b=new D4;c=BgS;BgS=c+1|0;Hr(b,c);a.tx=b.b();}
function I_(a,b){var c,d;W4();J(a);c=new D4;d=BgS;BgS=d+1|0;Hr(c,d);a.tx=c.b();a.k=b;}
function F3(a,b,c,d){var e;e=d.J();while(true){if(b>e)return (-1);if(a.e(b,c,d)>=0)break;b=b+1|0;}return b;}
function Gb(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.e(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AYi(a,b){a.El=b;}
function AXo(a){return a.El;}
function ANg(a){return ((((((I()).a(B(12))).a(a.tx)).a(B(13))).a(a.u())).a(B(14))).b();}
function APU(a){return a.F5();}
function AQD(a){return a.k;}
function LK(a,b){a.k=b;}
function A86(a,b){return 1;}
function A$o(a){return null;}
function OO(a){var b;a.cF=1;if(a.k!==null){if(!a.k.cF){b=a.k.h8();if(b!==null){a.k.cF=1;a.k=b;}a.k.ed();}else if(a.k instanceof Fz&&a.k.dn.tk)a.k=a.k.k;}}
function ATM(){BgS=1;}
function BB(){var a=this;Bt.call(a);a.bQ=null;a.dn=null;a.bm=0;}
function BgT(){var a=new BB();CQ(a);return a;}
function Bbk(a,b){var c=new BB();SA(c,a,b);return c;}
function CQ(a){Co(a);}
function SA(a,b,c){Co(a);a.bQ=b;a.dn=c;a.bm=c.ka();}
function AJo(a,b,c,d){var e,f,g,h,i;if(a.bQ===null)return (-1);e=d.jq(a.bm);d.eA(a.bm,b);f=a.bQ.df();g=0;while(true){if(g>=f){d.eA(a.bm,e);return (-1);}h=a.bQ.l(g);i=h.e(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function AOH(a,b){a.dn.Q(b);}
function ALc(a){return B(15);}
function A29(a,b){var c;a:{if(a.bQ!==null){c=a.bQ.ft();while(true){if(!c.bC())break a;if(!(c.bz()).ca(b))continue;else return 1;}}}return 0;}
function APz(a,b){var c,d;a:{if(b.nE(a.bm)>=0){c=b.jq(a.bm);d=a.bm;if(c==b.nE(d)){c=0;break a;}}c=1;}return c;}
function AGh(a){var b,c,d,e;a.cF=1;if(a.dn!==null&&!a.dn.cF)a.dn.ed();a:{if(a.bQ!==null){b=a.bQ.df();c=0;while(true){if(c>=b)break a;d=a.bQ.l(c);e=d.h8();if(e===null)e=d;else{d.cF=1;a.bQ.mC(c);a.bQ.Lf(c,e);}if(!e.cF)e.ed();c=c+1|0;}}}if(a.k!==null)OO(a);}
function Fz(){BB.call(this);this.cX=null;}
function Be5(a,b){var c=new Fz();Qe(c,a,b);return c;}
function Qe(a,b,c){CQ(a);a.cX=b;a.dn=c;a.bm=c.ka();}
function ADN(a,b,c,d){var e,f;e=d.jq(a.bm);d.eA(a.bm,b);f=a.cX.e(b,c,d);if(f>=0)return f;d.eA(a.bm,e);return (-1);}
function AMy(a,b,c,d){var e;e=a.cX.cE(b,c,d);if(e>=0)d.eA(a.bm,e);return e;}
function A7t(a,b,c,d,e){var f;f=a.cX.cI(b,c,d,e);if(f>=0)e.eA(a.bm,f);return f;}
function A20(a,b){return a.cX.ca(b);}
function A5K(a){var b;b=BbR(a);a.k=b;return b;}
function ATg(a){var b;a.cF=1;if(a.dn!==null&&!a.dn.cF)a.dn.ed();if(a.cX!==null&&!a.cX.cF){b=a.cX.h8();if(b!==null){a.cX.cF=1;a.cX=b;}a.cX.ed();}}
function HR(){var a=this;C.call(a);a.L0=null;a.rh=null;a.yE=0.0;a.Av=0.0;a.se=null;a.rt=null;a.hO=0;}
function ACm(a,b,c,d,e){J(a);Di();a.se=BgU;a.rt=BgU;Ri(a,e);a.L0=b;a.rh=e.go();a.yE=c;a.Av=d;}
function Yz(a,b,c,d){var e;e=Cj(1);e.data[0]=63;ACm(a,b,c,d,e);}
function Ri(a,b){var c;if(b!==null){c=b.data.length;if(c&&c>=a.Av)return;}G(W(B(16)));}
function K2(a,b){if(b!==null){a.se=b;a.vh(b);return a;}G(W(B(17)));}
function ATt(a,b){}
function LR(a,b){if(b!==null){a.rt=b;a.qS(b);return a;}G(W(B(17)));}
function A1L(a,b){}
function ID(a,b,c,d){var e,f,g,h,$$je;a:{if(a.hO!=3){if(d)break a;if(a.hO!=2)break a;}G(GX());}a.hO=!d?1:2;while(true){try{e=a.OW(b,c);}catch($$e){$$je=R($$e);if($$je instanceof Bm){f=$$je;G(AYO(f));}else{throw $$e;}}if(e.jK()){if(!d)return e;g=Bb(b);if(g<=0)return e;e=BV(g);}else if(e.h5())break;h=!e.t3()?a.se:a.rt;b:{Di();if(h!==BgV){if(h===BgW)break b;else return e;}if(Bb(c)<a.rh.data.length)return BgX;Ym(c,a.rh);}b.oP(B8(b)+e.i()|0);}return e;}
function XW(a,b){var c,d,e;if(!Bb(b))return RL(0);OU(a);c=RL(Bb(b)*a.yE|0);while(true){d=ID(a,b,c,0);Bj();if(d===BgY)break;if(d===BgX){c=JY(a,c);continue;}if(!d.mz())continue;d.nS();}e=ID(a,b,c,1);if(e.mz())e.nS();while(true){e=JN(a,c);if(e.jK())break;if(!e.h5())continue;c=JY(a,c);}Jv(c);return c;}
function JY(a,b){var c,d,e;c=HH(b);d=c.data;d=Oh(c,d.length*2|0);e=Ht(d);e.f4(B8(b));return e;}
function JN(a,b){var c;if(a.hO!=2&&a.hO!=4)G(GX());c=a.LA(b);Bj();if(c===BgY)a.hO=3;return c;}
function A3J(a,b){Bj();return BgY;}
function OU(a){a.hO=0;a.uU();return a;}
function AOv(a){}
function Do(){var a=this;HR.call(a);a.Ch=null;a.we=null;}
function GH(a,b,c,d){Yz(a,b,c,d);a.Ch=BW(512);a.we=Cj(512);}
function AE3(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.Ch;e=0;f=0;g=a.we;a:{while(true){if((e+32|0)>f&&Cb(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Bq(Bb(b)+j|0,i.length);b.rk(d,j,f-j|0);e=0;}if(!Cb(c)){if(!Cb(b)&&e>=f){Bj();k=BgY;}else{Bj();k=BgX;}break a;}i=g.data;l=0;m=Bq(Bb(c),i.length);n=Be6(b,c);k=a.mX(d,e,f,g,l,m,n);e=n.zm;j=n.z2;if(k===null){if(!Cb(b)&&e>=f){Bj();k=BgY;}else if(!Cb(c)&&e>=f){Bj();k=BgX;}}c.w0(g,0,j);if(k!==null)break;}}b.oP(B8(b)-(f-e|0)|0);return k;}
function Xx(){var a=this;Do.call(a);a.tN=0;a.ru=0;}
function Bdf(a,b,c){var d=new Xx();A52(d,a,b,c);return d;}
function A52(a,b,c,d){GH(a,b,2.0,4.0);a.tN=c;a.ru=d;}
function A6$(a,b,c,d,e,f,g,h){var i,j,k;if(a.tN){if((f+2|0)>g){if(h.Lp())i=null;else{Bj();i=BgX;}return i;}a.tN=0;if(!a.ru){j=e.data;k=f+1|0;j[f]=(-2);f=k+1|0;j[k]=(-1);}else{j=e.data;k=f+1|0;j[f]=(-1);f=k+1|0;j[k]=(-2);}}return !a.ru?Pw(a,b,c,d,e,f,g,h):V9(a,b,c,d,e,f,g,h);}
function V9(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c];if(!BY(l)){if(BG(l)){c=k+(-1)|0;i=BV(1);break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.ef(2))break a;Bj();i=BgX;break a;}j=e.data;m=f+1|0;j[f]=(l&255)<<24>>24;f=m+1|0;j[m]=l>>8<<24>>24;c=k;}else{if(k==d){c=k+(-1)|0;if(h.dO(2))break a;Bj();i=BgY;break a;}c=k+1|0;n=j[k];if(!BG(n)){c=c+(-2)|0;i=BV(1);break a;}if((f+4|0)>g){c=c+(-2)|0;if(h.ef(4))break a;Bj();i=BgX;break a;}j=e.data;m=f+1|0;j[f]=(l&255)<<24>>24;o=
m+1|0;j[m]=l>>8<<24>>24;m=o+1|0;j[o]=(n&255)<<24>>24;f=m+1|0;j[m]=n>>8<<24>>24;}}}h.el(c);h.dR(f);return i;}
function Pw(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c];if(!BY(l)){if(BG(l)){c=k+(-1)|0;i=BV(1);break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.ef(2))break a;Bj();i=BgX;break a;}j=e.data;m=f+1|0;j[f]=l>>8<<24>>24;f=m+1|0;j[m]=(l&255)<<24>>24;c=k;}else{if(k==d){c=k+(-1)|0;if(h.dO(2))break a;Bj();i=BgY;break a;}c=k+1|0;n=j[k];if(!BG(n)){c=c+(-2)|0;i=BV(1);break a;}if((f+4|0)>g){c=c+(-2)|0;if(h.ef(4))break a;Bj();i=BgX;break a;}j=e.data;m=f+1|0;j[f]=l>>8<<24>>24;o=m+1
|0;j[m]=(l&255)<<24>>24;m=o+1|0;j[o]=n>>8<<24>>24;f=m+1|0;j[m]=(n&255)<<24>>24;}}}h.el(c);h.dR(f);return i;}
var Cr=D(0);
function BT(){var a=this;C.call(a);a.bY=0;a.mV=0;a.Lr=0;a.K5=null;a.zU=0;}
function B_(a){J(a);}
function AWu(a,b,c){a.mV=c;a.bY=b;}
function AKf(a,b){if(!a.mV)a.bY=b;}
function ADb(a,b){return b instanceof BT&&b.bY==a.bY?1:0;}
function A5i(a){return a.bY;}
function AW3(a){return a.bY;}
function AKU(a){if(a.zU>0){Lo();if(BgZ&&Bg0)Bg1.qD(B(18),((((((I()).a(B(19))).a(a.b())).a(B(20))).j(a.zU)).a(B(21))).b());}if(a.mV){a.Lr=1;a.I3();a.bY=0;}}
function AVI(a){return (((((((I()).a(a.K5)).a(B(22))).j(a.bY)).a(B(23))).Jv(a.mV)).a(B(24))).b();}
var F9=D(BT);
var Bg2=null;function AH9(){AH9=N(F9);AEl();}
function Bfu(a){var b=new F9();XD(b,a);return b;}
function Bg3(){var a=new F9();If(a);return a;}
function XD(a,b){AH9();B_(a);}
function If(a){AH9();B_(a);}
function ASx(a,b){U4(a.bY,b);}
function AEl(){Bg2=Bfu(0);}
function U4(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btCollisionObject);jsObj.setRestitution(c);}
var Of=D(F9);
var Bg4=null;function ARH(){ARH=N(Of);ATe();}
function Bf$(a,b,c,d){var e=new Of();SC(e,a,b,c,d);return e;}
function Bbi(a){var b=new Of();AB5(b,a);return b;}
function SC(a,b,c,d,e){var f,g,h,i;ARH();If(a);Fl();f=Bg5;Gq(e,f);g=c.de();h=d.de();i=f.de();a.dZ(S6(b,g,h,i),1);}
function AKl(a){ACN(a.bY);}
function AB5(a,b){ARH();If(a);}
function ATe(){Bg4=Bbi(0);}
function S6(b,c,d,e){var motionStateJSObj=Bullet.wrapPointer(c,Bullet.btMotionState);var collisionShapeJSObj=Bullet.wrapPointer(d,Bullet.btCollisionShape);var localInertiaJSObj=Bullet.wrapPointer(e,Bullet.btVector3);var jsObj=new Bullet.btRigidBody(b,motionStateJSObj,collisionShapeJSObj,localInertiaJSObj);return Bullet.getPointer(jsObj);}
function ACN(b){var jsObj=Bullet.wrapPointer(b,Bullet.btRigidBody);Bullet.destroy(jsObj);}
var Dj=D(BT);
var Bg6=null;var Bg7=null;var Bg8=null;var Bg9=null;var Bg$=null;var Bg_=null;var Bha=null;var Bhb=null;function H5(){H5=N(Dj);ASE();}
function FE(a){var b=new Dj();AAT(b,a);return b;}
function AAT(a,b){H5();B_(a);a.dZ(!b?0:RW(),b);}
function ARo(a,b){Yq(a.bY,b.data);}
function AS$(a,b){ABn(a.bY,b.data);}
function Yf(b,c){H5();c.Os(b.c);}
function Yc(b,c){H5();b.Ku(c.c);}
function SL(b,c){H5();Bha.yH(c);Yf(b,Bha);}
function QL(b,c){H5();Bha.yH(b);Yc(Bha,c);}
function ASE(){Bg6=FE(0);Bg7=FE(1);Bg8=FE(1);Bg9=FE(1);Bg$=FE(1);Bg_=FE(1);Bha=FE(0);Bhb=BL();}
function RW(){var jsObj=new Bullet.btTransform();return Bullet.getPointer(jsObj);}
function Yq(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btTransform);jsObj.setFromOpenGLMatrix(c);}
function ABn(b,c){var worldTrans=Bullet.wrapPointer(b,Bullet.btTransform);var origin=worldTrans.getOrigin();var matrix3x3=worldTrans.getBasis();var row0=matrix3x3.getRow(0);var row1=matrix3x3.getRow(1);var row2=matrix3x3.getRow(2);c[0]=row0.x();c[1]=row1.x();c[2]=row2.x();c[3]=0;c[4]=row0.y();c[5]=row1.y();c[6]=row2.y();c[7]=0;c[8]=row0.z();c[9]=row1.z();c[10]=row2.z();c[11]=0;c[12]=origin.x();c[13]=origin.y();c[14]=origin.z();c[15]=1.0;}
function Ey(){var a=this;C.call(a);a.Qs=Ba;a.N4=Ba;a.L$=null;a.Ht=null;a.LN=0;a.QO=null;}
var Bhc=null;var Bhd=null;var Bhe=0;var Bhf=0;var Bhg=null;function LX(){LX=N(Ey);AE5();}
function BeD(a){var b=new Ey();Wu(b,a);return b;}
function Bhh(a,b){var c=new Ey();NS(c,a,b);return c;}
function Wu(a,b){LX();NS(a,null,b);}
function NS(a,b,c){var d;LX();J(a);a.L$=Qq();a.LN=1;a.Ht=c;a.QO=b;d=Bhe;Bhe=d+1|0;a.Qs=O(d);}
function H6(b){LX();if(Bhd!==b)Bhd=b;Bhd.N4=Ea();}
function Ds(){LX();return Bhd;}
function AE5(){Bhc=BeD(B(25));Bhd=Bhc;Bhe=1;Bhf=1;Bhg=BfM();}
var Ja=D(T);
function Bf2(){var a=new Ja();Qb(a);return a;}
function Qb(a){Bo(a);}
function P5(a){return ((CS()).bF(97,122)).bF(65,90);}
var Bw=D();
var Bhi=null;var Bhj=null;var Bhk=null;var Bhl=null;var Bhm=null;var Bhn=null;var Bho=null;var Bhp=null;var Bhq=null;var Bhr=null;var Bhs=null;var Bht=null;var Bhu=null;var Bhv=null;var Bhw=null;var Bhx=null;var Bhy=null;var Bhz=null;var BhA=null;var BhB=null;var BhC=null;var BhD=null;var BhE=null;var BhF=null;var BhG=null;var BhH=null;var BhI=null;var BhJ=null;var BhK=null;function BbX(){BbX=N(Bw);A3b();}
function A3b(){Bhi=BcH();Bhj=BdP();Bhk=A_T();Bhl=BdH();Bhm=Bgf();Bhn=BfH();Bho=BaK();Bhp=BbY();Bhq=BbH();Bhr=Bd7();Bhs=Bcs();Bht=BbZ();Bhu=Ba2();Bhv=BeS();Bhw=BeV();Bhx=BeX();Bhy=Bed();Bhz=Baz();BhA=Bcz();BhB=BfX();BhC=Be_();BhD=Ba7();BhE=BbB();BhF=Bby();BhG=BbU();BhH=Bet();BhI=Bfw();BhJ=Bgg();BhK=Bau();}
var O$=D(Fz);
function BbR(a){var b=new O$();APN(b,a);return b;}
function APN(a,b){Qe(a,b.cX,b.dn);}
function AIE(a,b,c,d){var e,f,g;e=0;f=d.J();a:{while(true){if(b>f){b=e;break a;}g=d.jq(a.bm);d.eA(a.bm,b);e=a.cX.e(b,c,d);if(e>=0)break;d.eA(a.bm,g);b=b+1|0;}}return b;}
function A_w(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=e.jq(a.bm);e.eA(a.bm,c);f=a.cX.e(c,d,e);if(f>=0)break;e.eA(a.bm,g);c=c+(-1)|0;}}return c;}
function AGx(a){return null;}
function Db(){var a=this;C.call(a);a.sk=null;a.kK=null;a.nW=0;a.ot=0;a.wB=null;}
function BhL(){var a=new Db();Q6(a);return a;}
function BhM(a){var b=new Db();Ox(b,a);return b;}
function BhN(a,b){var c=new Db();Nh(c,a,b);return c;}
function BhO(a){var b=new Db();AB1(b,a);return b;}
function Q6(a){a.nW=1;a.ot=1;a.oe();}
function Ox(a,b){a.nW=1;a.ot=1;a.oe();a.sk=b;}
function Nh(a,b,c){a.nW=1;a.ot=1;a.oe();a.sk=b;a.kK=c;}
function AB1(a,b){a.nW=1;a.ot=1;a.oe();a.kK=b;}
function AZ3(a){return a;}
function AP9(a){return a.sk;}
function AJh(a){return a.mS();}
function A1k(a){a.y1(TG());}
function ATK(a,b){var c,d,e,f,g;b.pp((Ck(a)).u());c=a.GB();if(c!==null)b.pp((((I()).a(B(8))).a(c)).b());a:{b.NB();if(a.wB!==null){d=a.wB.data;e=d.length;f=0;while(true){if(f>=e)break a;g=d[f];b.pp(B(26));b.K4(g);f=f+1|0;}}}if(a.kK!==null&&a.kK!==a){b.pp(B(27));a.kK.y1(b);}}
var B5=D(Db);
function BhP(){var a=new B5();E$(a);return a;}
function BhQ(a,b){var c=new B5();JV(c,a,b);return c;}
function BhR(a){var b=new B5();Mj(b,a);return b;}
function E$(a){Q6(a);}
function JV(a,b,c){Nh(a,b,c);}
function Mj(a,b){Ox(a,b);}
var Bm=D(B5);
function BhS(){var a=new Bm();Cx(a);return a;}
function BhT(a,b){var c=new Bm();P1(c,a,b);return c;}
function Qg(a){var b=new Bm();EF(b,a);return b;}
function Cx(a){E$(a);}
function P1(a,b,c){JV(a,b,c);}
function EF(a,b){Mj(a,b);}
var Uz=D(Bm);
function BcW(){var a=new Uz();ANQ(a);return a;}
function ANQ(a){Cx(a);}
var LL=D(0);
function ZO(){var a=this;C.call(a);a.jZ=null;a.li=0;a.On=0;a.kC=0;}
function BdW(a){var b=new ZO();AC6(b,a);return b;}
function AC6(a,b){J(a);a.On=1;a.kC=1;a.jZ=b;}
function A88(a){return 0;}
function AVW(a){var b,c,d;b=a.jZ.hu();c=b.My();d=$rt_str(c.href);return d;}
function AJL(a){return a.li;}
function APw(a){a.li=a.li-1|0;}
function AWM(a){a.li=a.li+1|0;}
function A6n(a,b,c,d,e,f){a:{Bek();switch(BhU.data[BC(d)]){case 1:break;case 2:a.Mh(b,c,e,f);break a;case 3:a.tU(b,c,f);break a;case 4:a.GJ(b,c,f);break a;case 5:f.ct(c,null);break a;default:G(U((((I()).a(B(28))).dD(d)).b()));}a.D8(b,c,f);}}
function AOu(a,b,c,d){var e,f;if(a.kC)(Eh()).gh((((I()).a(B(29))).a(c)).b());e=a.jZ.uk();f=BP(Bcw(a,e,d,c),"handleEvent");e.onreadystatechange=f;a.nJ();Hj(a,e,d);e.open("GET",$rt_ustr(c),!!b);e.setRequestHeader("Content-Type","text/plain; charset=utf-8");e.send();}
function AJa(a,b,c){var d,e;if(a.kC)(Eh()).gh((((I()).a(B(30))).a(b)).b());d=a.jZ.uk();e=BP(Bdb(a,d,c,b),"handleEvent");d.onreadystatechange=e;a.nJ();Hj(a,d,c);d.open("GET",$rt_ustr(b),!!0);d.setRequestHeader("Content-Type","text/plain; charset=utf-8");d.send();}
function AHf(a,b,c,d){a.tU(b,c,BcU(a,d));}
function ASl(a,b,c,d){var e,f;if(a.kC)(Eh()).gh((((I()).a(B(29))).a(c)).b());e=a.jZ.uk();f=BP(BbM(a,e,d,c),"handleEvent");e.onreadystatechange=f;a.nJ();Hj(a,e,d);e.open("GET",$rt_ustr(c),!!b);if(b){f="arraybuffer";e.responseType=f;}e.send();}
function A4z(a,b,c,d,e){a.LL(b,c,d,null,e);}
function AS6(a,b,c,d,e,f){var g;g=0;a.tU(b,c,Bgb(a,f,e,g,d));}
function AGg(b,c){b.addEventListener("load",BP(c,"handleEvent"),!!0);b.addEventListener("error",BP(c,"handleEvent"),!!0);}
function Hj(a,b,c){var d;d=BP(Bdn(a,c),"handleEvent");b.onprogress=d;}
function NP(b){return b.kC;}
function Qc(b){return b.jZ;}
var B3=D(0);
function A0j(b){return b;}
var VM=D();
function ANp(b){return b;}
function H_(b){return b.length?0:1;}
function A3Q(b,c){var d;d=ANp(c);b.push(d);}
function A5u(b){return b.shift();}
var Hd=D(T);
function BbL(){var a=new Hd();QB(a);return a;}
function QB(a){Bo(a);}
function RU(a){return ((((CS()).bF(97,122)).bF(65,90)).bF(48,57)).cG(95);}
var ABD=D(Hd);
function Bdx(){var a=new ABD();A1u(a);return a;}
function A1u(a){QB(a);}
function ANq(a){var b;b=(RU(a)).f9(1);b.be=1;return b;}
var Ov=D(0);
function Wb(){var a=this;C.call(a);a.uf=null;a.QX=Ba;a.CO=null;}
function Bc4(a){var b=new Wb();ADR(b,a);return b;}
function ADR(a,b){J(a);a.CO=b;b.IX(a);Bg1.OJ(a);a.P0();}
function ASM(a,b){a.CO.nU(b);}
function A9p(a){var b,c,d,e,f,g,h,$$je;EH();b=BhV;Eq(b);a:{b:{try{if(a.uf===Bg1)break b;Ch(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}try{d=E_(CE(),O(1000000));e=O(5000);f=0;g=BhV.h;c:{while(true){if(f>=g)break c;try{e=(BhV.l(f)).Nf(d,e);}catch($$e){$$je=R($$e);if($$je instanceof Db){h=$$je;break;}else{throw $$e;}}f=f+1|0;}G(Jd((((I()).a(B(31))).a((Ck(BhV.l(f))).u())).b(),h));}}catch($$e){$$je=R($$e);c=$$je;break a;}d:{try{if(a.uf===Bg1)break d;Ch(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}try
{a.nU(Cp((AXb(Ba,e))));Ch(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}Ch(b);G(c);}
function AR8(a){var b,c,d,e,f,$$je;b=D6(E_(CE(),O(1000000)),a.QX);EH();c=BhV;Eq(c);a:{try{d=0;e=BhV.h;while(d<e){(BhV.l(d)).Ii(b);d=d+1|0;}Ch(c);break a;}catch($$e){$$je=R($$e);f=$$je;}Ch(c);G(f);}a.uf=Bg1;a.fe();}
function Bx(){var a=this;C.call(a);a.A8=null;a.Ez=0;}
function Cw(a,b,c){J(a);a.A8=b;a.Ez=c;}
function BC(a){return a.Ez;}
function A03(a){return a.A8.b();}
var Dk=D(Bx);
var BhW=null;var BhX=null;var BhY=null;var BhZ=null;var Bh0=null;var Bh1=null;var Bh2=null;function Vy(){Vy=N(Dk);AYg();}
function GW(a,b){var c=new Dk();Wf(c,a,b);return c;}
function Wf(a,b,c){Vy();Cw(a,b,c);}
function AYg(){BhW=GW(B(32),0);BhX=GW(B(33),1);BhY=GW(B(34),2);BhZ=GW(B(35),3);Bh0=GW(B(36),4);Bh1=GW(B(37),5);Bh2=H(Dk,[BhW,BhX,BhY,BhZ,Bh0,Bh1]);}
function BJ(){Bt.call(this);this.bO=0;}
function VR(a,b){I_(a,b);a.bO=1;a.AF(1);}
function C2(a){Co(a);a.bO=1;}
function A$8(a,b,c,d){var e;if((b+a.cg()|0)>d.J()){d.d5=1;return (-1);}e=a.bH(b,c);if(e<0)return (-1);return a.k.e(b+e|0,c,d);}
function A8s(a){return a.bO;}
function AK1(a,b){return 1;}
function Pd(){BJ.call(this);this.jG=null;}
function Bgr(a){var b=new Pd();A1a(b,a);return b;}
function A1a(a,b){C2(a);a.jG=b.b();a.bO=b.i();}
function A7A(a,b,c){var d,e,f,g;d=0;while(true){if(d>=a.jG.i())return a.jG.i();e=a.jG.f(d);f=b+d|0;if(e!=c.f(f)){g=a.jG;if(GF(g.f(d))!=c.f(f))break;}d=d+1|0;}return (-1);}
function A8R(a){return (((I()).a(B(38))).a(a.jG)).b();}
var Fp=D(0);
var Jf=D();
function Bh3(){var a=new Jf();ACS(a);return a;}
function ACS(a){J(a);}
function AV2(a,b){return 0;}
function ARM(a,b,c){return 0;}
function Ir(){var a=this;Jf.call(a);a.dV=null;a.xi=0.0;a.FB=0.0;a.yy=Ba;a.Bh=0.0;a.zP=Ba;a.fK=0;a.pP=0;a.FK=Ba;a.AV=0.0;a.AU=0.0;a.xP=0;a.w9=0;a.mJ=0;a.jC=0;a.kL=0;a.eG=null;a.vp=0.0;a.vq=0.0;a.l7=Ba;a.d8=null;a.fs=null;a.mm=null;a.mn=null;a.h0=null;}
function Bh4(a){var b=new Ir();VA(b,a);return b;}
function Bh5(a,b,c,d,e){var f=new Ir();ABZ(f,a,b,c,d,e);return f;}
function Bh6(a,b,c,d,e,f){var g=new Ir();O2(g,a,b,c,d,e,f);return g;}
function VA(a,b){ABZ(a,20.0,0.4000000059604645,1.100000023841858,2.147483648E9,b);}
function ABZ(a,b,c,d,e,f){O2(a,b,b,c,d,e,f);}
function O2(a,b,c,d,e,f,g){ACS(a);a.eG=Bfi();a.d8=Iu();a.fs=Iu();a.mm=Iu();a.mn=Iu();a.h0=BdC(a);if(g===null)G(W(B(39)));a.xi=b;a.FB=c;a.yy=BgJ(d*1.0E9);a.Bh=e;a.zP=BgJ(f*1.0E9);a.dV=g;}
function OP(a,b,c,d,e){return a.rZ(b,c,d,e);}
function AOK(a,b,c,d,e){if(d>1)return 0;if(d){a.fs.ix(b,c);a.fK=0;a.jC=1;a.mm.k7(a.d8);a.mn.k7(a.fs);a.h0.jk();}else{a.d8.ix(b,c);a.l7=Bh7.kS();a.eG.u$(b,c,a.l7);if(Bh7.L9(1)){a.fK=0;a.jC=1;a.mm.k7(a.d8);a.mn.k7(a.fs);a.h0.jk();}else{a.fK=1;a.jC=0;a.mJ=0;a.vp=b;a.vq=c;if(!a.h0.Pw())ACD(a.h0,a.Bh);}}return a.dV.rZ(b,c,d,e);}
function VU(a,b,c,d){return a.QU(b,c,d);}
function ADz(a,b,c,d){var e;if(d>1)return 0;if(a.mJ)return 0;if(d)a.fs.ix(b,c);else a.d8.ix(b,c);if(a.jC){if(a.dV===null)return 0;e=a.dV.Q3(a.mm,a.mn,a.d8,a.fs);return !a.dV.Ho(a.mm.w2(a.mn),a.d8.w2(a.fs))&&!e?0:1;}a.eG.B6(b,c,Bh7.kS());if(a.fK&&!HW(a,b,c,a.vp,a.vq)){a.h0.jk();a.fK=0;}if(a.fK)return 0;a.kL=1;return a.dV.Ke(b,c,a.eG.oi,a.eG.oh);}
function AAw(a,b,c,d,e){return a.Oa(b,c,d,e);}
function ADn(a,b,c,d,e){var f,g,h,i,j;if(d>1)return 0;if(a.fK&&!HW(a,b,c,a.vp,a.vq))a.fK=0;f=a.kL;a.kL=0;a.h0.jk();if(a.mJ)return 0;if(a.fK){a:{if(a.xP==e&&a.w9==d&&Ku(D6(CE(),a.FK),a.yy)){g=a.AV;h=a.AU;if(HW(a,b,c,g,h))break a;}a.pP=0;}a.pP=a.pP+1|0;a.FK=CE();a.AV=b;a.AU=c;a.xP=e;a.w9=d;a.l7=Ba;return a.dV.Oy(b,c,a.pP,e);}if(a.jC){a.jC=0;a.dV.GZ();a.kL=1;if(d)a.eG.u$(a.d8.eW,a.d8.eV,Bh7.kS());else a.eG.u$(a.fs.eW,a.fs.eV,Bh7.kS());return 0;}i=0;if(f&&!a.kL)i=a.dV.G3(b,c,d,e);j=Bh7.kS();if(Ku(D6(j,a.l7),a.zP))
{a.eG.B6(b,c,j);i=!a.dV.QM(a.eG.Lq(),a.eG.Q1(),e)&&!i?0:1;}a.l7=Ba;return i;}
function HW(a,b,c,d,e){return CH(b-d)<a.xi&&CH(c-e)<a.FB?1:0;}
var FO=D(0);
var D7=D(Db);
function Bh8(a,b){var c=new D7();SU(c,a,b);return c;}
function Bh9(a){var b=new D7();XO(b,a);return b;}
function Bh$(a){var b=new D7();AAl(b,a);return b;}
function SU(a,b,c){Nh(a,b,c);}
function XO(a,b){Ox(a,b);}
function AAl(a,b){AB1(a,b);}
var FS=D(D7);
function Bh_(a){var b=new FS();OW(b,a);return b;}
function OW(a,b){XO(a,b);}
function RH(){var a=this;C.call(a);a.ex=0;a.fp=null;a.pt=0;a.Fw=0.0;a.qx=0;a.qX=0;a.hN=0;}
function BfU(){var a=new RH();AHy(a);return a;}
function Bia(a,b){var c=new RH();XT(c,a,b);return c;}
function AHy(a){XT(a,51,0.800000011920929);}
function XT(a,b,c){var d;J(a);if(c>0.0&&c<1.0){a.Fw=c;d=G3(b,c);a.qx=d*c|0;a.hN=d-1|0;a.qX=CW(O(a.hN));a.fp=Bc(d);return;}G(W((((I()).a(B(40))).cD(c)).b()));}
function ARV(a,b){return Cp(CN(Cf(O(b),Cd(2135587861, 2654435769)),a.qX));}
function MV(a,b){var c,d,e;c=a.fp;d=a.e8(b);while(true){e=c.data[d];if(!e)return  -(d+1|0)|0;if(e==b)break;d=(d+1|0)&a.hN;}return d;}
function AYD(a,b){var c,d;if(!b){if(a.pt)return 0;a.pt=1;a.ex=a.ex+1|0;return 1;}c=MV(a,b);if(c>=0)return 0;d= -(c+1|0)|0;a.fp.data[d]=b;d=a.ex+1|0;a.ex=d;if(d>=a.qx)XH(a,a.fp.data.length<<1);return 1;}
function X7(a,b){var c,d,e;c=a.fp;d=a.e8(b);while(true){e=c.data;if(!e[d])break;d=(d+1|0)&a.hN;}e[d]=b;}
function AR7(a,b){var c,d,e,f,g,h,i;if(!b){if(!a.pt)return 0;a.pt=0;a.ex=a.ex-1|0;return 1;}c=MV(a,b);if(c<0)return 0;d=a.fp;e=a.hN;f=(c+1|0)&e;while(true){g=d.data;h=g[f];if(!h)break;i=a.e8(h);if(((f-i|0)&e)>((c-i|0)&e)){g[c]=h;c=f;}f=(f+1|0)&e;}g[c]=0;a.ex=a.ex-1|0;return 1;}
function XH(a,b){var c,d,e,f;a:{c=a.fp.data.length;a.qx=b*a.Fw|0;a.hN=b-1|0;a.qX=CW(O(a.hN));d=a.fp;a.fp=Bc(b);if(a.ex>0){e=0;while(true){if(e>=c)break a;f=d.data[e];if(f)X7(a,f);e=e+1|0;}}}}
var Ej=D(Bm);
function C$(){var a=new Ej();PY(a);return a;}
function Bg(a){var b=new Ej();M6(b,a);return b;}
function PY(a){Cx(a);}
function M6(a,b){EF(a,b);}
var ACw=D(Ej);
function Ki(){var a=new ACw();ARd(a);return a;}
function ARd(a){PY(a);}
function Mo(){var a=this;Bm.call(a);a.K2=null;a.P9=null;}
function BbE(a,b,c){var d=new Mo();AZY(d,a,b,c);return d;}
function AZY(a,b,c,d){EF(a,b);a.K2=c;a.P9=d;}
var KE=D();
var Bib=null;function MZ(){MZ=N(KE);A4T();}
function T4(b,c){var d;MZ();d=Bib.W(b);if(d===null){d=Bgd(b,4,c);Bib.x(b,d);}return d;}
function Go(b){MZ();return T4(b,100);}
function Tp(b){MZ();return (Go(b)).eT();}
function Sq(b,c){var d,e,f,g;MZ();if(b===null)G(W(B(41)));d=null;e=0;f=b.h;while(e<f){a:{g=b.l(e);if(g!==null){if(d===null){d=Bib.W(Ck(g));if(d===null)break a;}d.jr(g);if(!c)d=null;}}e=e+1|0;}}
function A4T(){Bib=DG();}
function Jy(){var a=this;C.call(a);a.MS=null;a.Ay=0.0;a.H7=0.0;a.hK=null;a.jw=null;a.n5=null;a.eB=0;}
function U0(a,b,c,d){J(a);a.hK=B(42);Di();a.jw=BgU;a.n5=BgU;if(c<=0.0)G(W((((I()).a(B(43))).cD(c)).b()));if(d>0.0){a.MS=b;a.Ay=c;a.H7=d;return;}G(W((((I()).a(B(44))).cD(d)).b()));}
function Oc(a,b){if(b!==null){a.jw=b;a.vh(b);return a;}G(W(B(45)));}
function A9c(a,b){}
function Le(a,b){if(b!==null){a.n5=b;a.qS(b);return a;}G(W(B(45)));}
function A1f(a,b){}
function IX(a,b,c,d){var e,f,g,$$je;if(!(a.eB==2&&!d)&&a.eB!=3){a.eB=d?2:1;while(true){try{e=a.F_(b,c);}catch($$e){$$je=R($$e);if($$je instanceof Bm){f=$$je;G(AYO(f));}else{throw $$e;}}if(e.h5())return e;if(e.jK()){if(d&&Cb(b)){g=a.jw;Di();if(g===BgU)return BV(Bb(b));if(Bb(c)<=a.hK.i())return BgX;b.f4(B8(b)+Bb(b)|0);if(a.jw===BgV)IV(c,a.hK);}return e;}if(e.zo()){g=a.jw;Di();if(g===BgU)return e;if(a.jw===BgV){if(Bb(c)<a.hK.i())return BgX;IV(c,a.hK);}b.f4(B8(b)+e.i()|0);}else if(e.t3()){g=a.n5;Di();if(g===BgU)break;if
(a.n5===BgV){if(Bb(c)<a.hK.i())return BgX;IV(c,a.hK);}b.f4(B8(b)+e.i()|0);}}return e;}G(GX());}
function KV(a,b){if(a.eB!=3&&a.eB!=2)G(GX());a.eB=3;return a.Hf(b);}
function ACd(a){a.eB=0;a.uU();return a;}
function WW(a,b){var c,d,e;if(a.eB&&a.eB!=3)G(GX());if(!Bb(b))return UR(0);if(a.eB)ACd(a);c=UR(Bf(8,Bb(b)*a.Ay|0));while(true){d=IX(a,b,c,0);if(d.jK())break;if(d.h5())c=Ns(a,c);if(!d.mz())continue;d.nS();}e=IX(a,b,c,1);if(e.mz())e.nS();while(true){e=KV(a,c);if(e.jK())break;c=Ns(a,c);}K$(c);return c;}
function Ns(a,b){var c,d,e;c=NK(b);d=c.data;d=JX(c,Bf(8,d.length*2|0));e=La(d);e.oP(B8(b));return e;}
function ANr(a,b){Bj();return BgY;}
function AZr(a){}
var KG=D();
var Bic=null;function Bc3(){Bc3=N(KG);AQn();}
function L0(b){var $$je;Bc3();a:{if(b!==null)try{b.fP();break a;}catch($$e){$$je=R($$e);if($$je instanceof Db){}else{throw $$e;}}}}
function AQn(){Bic=Cj(0);}
function FM(){var a=this;BB.call(a);a.vR=0;a.je=0;}
function Bgh(a,b){var c=new FM();Kg(c,a,b);return c;}
function Kg(a,b,c){CQ(a);a.vR=b;a.je=c;}
function AEo(a,b,c,d){var e,f,g,h;e=a.j9(d);if(e!==null&&(b+e.i()|0)<=d.J()){f=0;while(true){if(f>=e.i()){d.by(a.je,e.i());return a.k.e(b+e.i()|0,c,d);}g=e.f(f);h=b+f|0;if(g!=c.f(h)&&GF(e.f(f))!=c.f(h))break;f=f+1|0;}return (-1);}return (-1);}
function A6x(a,b){a.k=b;}
function AGN(a,b){var c;c=b.OL(a.vR);return c;}
function AVE(a){return (((I()).a(B(46))).j(a.bm)).b();}
function APQ(a,b){var c;c=!b.ev(a.je)?0:1;b.by(a.je,(-1));return c;}
function YR(){FM.call(this);this.Gq=0;}
function BaZ(a,b){var c=new YR();AIR(c,a,b);return c;}
function AIR(a,b,c){Kg(a,b,c);}
function AMs(a,b,c,d){var e,f,g,h;e=a.j9(d);if(e!==null&&(b+e.i()|0)<=d.J()){f=0;while(true){if(f>=e.i()){d.by(a.je,e.i());return a.k.e(b+e.i()|0,c,d);}g=Dq(DB(e.f(f)));h=b+f|0;h=DB(c.f(h));if(g!=Dq(h))break;f=f+1|0;}return (-1);}return (-1);}
function AXe(a){return (((I()).a(B(47))).j(a.Gq)).b();}
var LY=D(0);
function I3(){C.call(this);this.Jn=null;}
var Bid=null;var Bie=null;function Ev(){Ev=N(I3);A_j();}
function AHT(a){var b=new I3();Vq(b,a);return b;}
function Vq(a,b){Ev();J(a);a.Jn=b;}
function EV(){Ev();return Bid;}
function A_j(){Bid=AHT(B(48));Bie=AHT(B(49));}
var EL=D(Bx);
var Bif=null;var Big=null;var Bih=null;function O5(){O5=N(EL);AX6();}
function A54(a,b){var c=new EL();T3(c,a,b);return c;}
function T3(a,b,c){O5();Cw(a,b,c);}
function AX6(){Bif=A54(B(50),0);Big=A54(B(51),1);Bih=H(EL,[Bif,Big]);}
function Y6(){var a=this;T.call(a);a.u2=0;a.sW=0;a.B1=0;}
function Bz(a,b){var c=new Y6();AGy(c,a,b);return c;}
function Bbp(a,b,c){var d=new Y6();AS2(d,a,b,c);return d;}
function AGy(a,b,c){Bo(a);a.sW=c;a.u2=b;}
function AS2(a,b,c,d){Bo(a);a.B1=d;a.sW=c;a.u2=b;}
function A0a(a){var b;b=BcT(a.u2);if(a.B1)b.bG.n4(0,2048);b.be=a.sW;return b;}
var LZ=D(0);
var Gi=D(0);
var NI=D(0);
var DS=D();
function G_(a){J(a);}
function ADW(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.vY(f[c]);e=e+1|0;c=g;}}
var Lm=D(DS);
var Bii=null;function ATo(){ATo=N(Lm);APv();}
function Bb3(){var a=new Lm();ACl(a);return a;}
function ACl(a){ATo();G_(a);}
function A5d(a,b){A79(b);}
function APv(){Bii=Bb3();}
function Dd(){Bt.call(this);this.Y=null;}
function FW(a,b,c,d){I_(a,c);a.Y=b;a.AF(d);}
function A_g(a){return a.Y;}
function AQc(a,b){return !a.Y.ca(b)&&!a.k.ca(b)?0:1;}
function A9k(a,b){return 1;}
function AM2(a){var b;a.cF=1;if(a.k!==null&&!a.k.cF){b=a.k.h8();if(b!==null){a.k.cF=1;a.k=b;}a.k.ed();}if(a.Y!==null){if(!a.Y.cF){b=a.Y.h8();if(b!==null){a.Y.cF=1;a.Y=b;}a.Y.ed();}else if(a.Y instanceof Fz&&a.Y.dn.tk)a.Y=a.Y.k;}}
var RA=D(Dd);
function BaT(a,b,c){var d=new RA();AEA(d,a,b,c);return d;}
function AEA(a,b,c,d){FW(a,b,c,d);}
function A_c(a,b,c,d){var e;e=d.J();if(e>b)return a.k.cI(b,e,c,d);return a.k.e(b,c,d);}
function AQ2(a,b,c,d){var e;e=d.J();if(a.k.cI(b,e,c,d)>=0)return b;return (-1);}
function A6g(a){return B(52);}
var IL=D(0);
function SY(){C.call(this);this.Kr=null;}
function BeL(a){var b=new SY();A43(b,a);return b;}
function A43(a,b){a.Kr=b;J(a);}
function AUV(a){(CD()).eu();}
function AF0(a){a.qm();}
function Cy(){var a=this;Bt.call(a);a.tk=0;a.lB=0;}
var Bij=null;function JF(){JF=N(Cy);AZL();}
function Bfv(a){var b=new Cy();Et(b,a);return b;}
function Et(a,b){JF();Co(a);a.lB=b;}
function AEW(a,b,c,d){var e,f;e=d.nE(a.lB);d.u1(a.lB,b);f=a.k.e(b,c,d);if(f<0)d.u1(a.lB,e);return f;}
function A3N(a){return a.lB;}
function AJ1(a){return B(53);}
function AFw(a,b){return 0;}
function AZL(){Bij=Bal();}
var Ks=D(Cy);
function Bik(a){var b=new Ks();AB4(b,a);return b;}
function AB4(a,b){Et(a,b);}
function AFI(a,b,c,d){var e,f;e=a.ka();f=d.ev(e);if(f!=b)b=(-1);return b;}
function A8X(a){return B(54);}
var MA=D(0);
function OT(){var a=this;BB.call(a);a.ra=null;a.AH=0;}
function Bdc(a){var b=new OT();ARJ(b,a);return b;}
function ARJ(a,b){CQ(a);a.ra=b.mh();a.AH=b.bD;}
function AZ1(a,b){a.k=b;}
function AKi(a,b,c,d){var e,f,g,h,i,j,k;e=d.dI();f=d.J();g=b+1|0;h=B9(g,f);if(h>0){d.d5=1;return (-1);}i=c.f(b);if(!a.ra.p(i))return (-1);if(BY(i)){if(h<0){j=c.f(g);if(BG(j))return (-1);}}else if(BG(i)&&b>e){k=c.f(b-1|0);if(BY(k))return (-1);}return a.k.e(g,c,d);}
function A5V(a){return ((((I()).a(B(55))).a(!a.AH?B(56):B(57))).a(a.ra.b())).b();}
var CI=D(Dd);
function BdM(a,b,c){var d=new CI();Fd(d,a,b,c);return d;}
function Fd(a,b,c,d){FW(a,b,c,d);}
function AVh(a,b,c,d){var e;if(!a.Y.ba(d))return a.k.e(b,c,d);e=a.Y.e(b,c,d);if(e>=0)return e;return a.k.e(b,c,d);}
function A1J(a){return B(58);}
var Rz=D(CI);
function Bd8(a,b,c){var d=new Rz();AXF(d,a,b,c);return d;}
function AXF(a,b,c,d){Fd(a,b,c,d);}
function ATw(a,b,c,d){var e;if(!a.Y.ba(d))return a.k.e(b,c,d);e=a.k.e(b,c,d);if(e>=0)return e;return a.Y.e(b,c,d);}
var Ko=D(0);
var AAq=D(Do);
function Bej(a){var b=new AAq();ATa(b,a);return b;}
function ATa(a,b){GH(a,b,1.0,1.0);}
function AJz(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(BY(l)){if(j>=d){if(h.dO(2)){j=j+(-1)|0;break a;}Bj();i=BgY;break a;}m=k[j];if(!BG(m)){i=BV(1);break a;}j=j+(-1)|0;i=F$(2);break a;}if(BG(l))i=BV(1);if(l>=128){i=F$(1);j=j+(-1)|0;break a;}k=e.data;n=f+1|0;k[f]=l<<24>>24;c=j;f=n;}j=c;}h.el(j);h.dR(f);return i;}
var Dc=D();
var Bg1=null;var Bil=null;var Bim=null;var Bh7=null;var Bin=null;var Bio=null;var Bip=null;var Biq=null;function BH(){var a=this;C.call(a);a.dc=Ba;a.DF=0;}
var Bir=null;function NJ(){NJ=N(BH);AXE();}
function QT(b){var c;NJ();c=0;while(c<Bir.h){if(!(Bir.l(c)).PQ(b))return D8(O(1),c);c=c+1|0;}return Ba;}
function PV(b){var c;NJ();c=(-1);a:{while(Dw(b,Ba)){c=c+1|0;if(c>=63)break a;if(Dw(Br(M$(b,c),O(1)),Ba))break a;}}return c>=0&&c<Bir.h?Bir.l(c):null;}
function BR(b){var c;NJ();c=QT(b);if(Hq(c,Ba))return c;Bir.F(b);return D8(O(1),Bir.h-1|0);}
function Fb(a,b){NJ();J(a);a.dc=b;a.DF=Xh(b);}
function AWz(a,b){return b.bp()!=a.bp()?0:1;}
function AUv(a,b){var c;if(b===null)return 0;if(b===a)return 1;if(!(b instanceof BH))return 0;c=b;if(Z(a.dc,c.dc))return a.zJ(c);return 0;}
function ARI(a){return PV(a.dc);}
function F2(a){return 7489*a.DF|0;}
function AXE(){Bir=Bp();}
var Dn=D(B5);
function Bis(){var a=new Dn();Jt(a);return a;}
function Jt(a){E$(a);}
var Iv=D(0);
var H7=D();
function Bit(){var a=new H7();QN(a);return a;}
function QN(a){J(a);}
function AVq(a,b){}
var KP=D(0);
function FA(){var a=this;H7.call(a);a.ns=null;a.M2=null;a.r4=0;a.CG=0;a.jM=null;a.sw=null;}
function Biu(a,b,c,d,e,f){var g=new FA();AAF(g,a,b,c,d,e,f);return g;}
function AAF(a,b,c,d,e,f,g){QN(a);a.ns=b;a.M2=c;a.r4=d;a.CG=e;a.jM=f;a.sw=g;}
function AUm(a){return a.ns;}
function AOO(a){return AHU(a.r4,a.CG);}
function AJG(a){return a.jM.go();}
function AER(a){var b,c,d,e;b=I();b.a(ABy(a.sp()));if(b.i()>0)b.U(32);(b.a((a.ns.u()).b())).U(40);c=a.vy();d=0;while(true){e=c.data;if(d>=e.length)break;if(d>0)b.U(44);b.a(e[d].u());d=d+1|0;}return (b.U(41)).b();}
function A71(a,b){var c,d,e,f,g,h,i;if(a.r4&1)G(Bga());if(a.sw===null)G(BbA());c=b.data;d=c.length;if(d!=a.jM.data.length)G(CL());e=0;while(true){if(e>=d){f=b.data;g=new (a.ns.g_);a.sw.call(g,f);return g;}if(!a.jM.data[e].hf()&&c[e]!==null){h=a.jM.data[e];i=c[e];if(!h.vZ(i))G(CL());}if(a.jM.data[e].hf()&&c[e]===null)break;e=e+1|0;}G(CL());}
var AAg=D(D7);
function AYO(a){var b=new AAg();AM$(b,a);return b;}
function AM$(a,b){AAl(a,b);}
var Ml=D(0);
function XU(){C.call(this);this.HC=null;}
function Bgc(a){var b=new XU();ALz(b,a);return b;}
function ALz(a,b){a.HC=b;J(a);}
function AP8(a){}
function AOw(a){a.Il();}
var XR=D(CI);
function BeN(a,b,c){var d=new XR();A2k(d,a,b,c);return d;}
function A2k(a,b,c,d){Fd(a,b,c,d);JF();b.Q(Bij);}
function A4h(a,b,c,d){var e,f;e=a.Y.e(b,c,d);if(e<0)return (-1);if(e>b){while(true){f=a.Y.e(e,c,d);if(f<=e)break;e=f;}b=e;}return a.k.e(b,c,d);}
var By=D();
var Biv=null;var Biw=null;var Bix=null;var Biy=null;var Biz=null;var BiA=null;var BiB=null;var BiC=null;var BiD=null;var BiE=null;var BiF=null;var BiG=null;var BiH=null;var BiI=null;var BiJ=null;var BiK=null;var BiL=null;var BiM=null;var BiN=null;var BiO=null;var BiP=null;var BiQ=null;var BiR=null;var BiS=null;var BiT=null;function J8(){J8=N(By);AVa();}
function Dy(){J8();return BiS.eT();}
function UT(){J8();BiS.eo();BiT.eo();}
function AVa(){Biv=D2();Biw=D2();Bix=D2();Biy=D2();Biz=D2();BiA=S();BiB=S();BiC=S();BiD=S();BiE=S();BiF=S();BiG=S();BiH=S();BiI=CM();BiJ=CM();BiK=CM();BiL=CM();BiM=CM();BiN=CM();BiO=CM();BiP=CM();BiQ=CM();BiR=BL();BiS=Ba5();BiT=Bfd();}
function ES(){var a=this;C.call(a);a.B=null;a.bq=0;}
function BiU(){var a=new ES();J6(a);return a;}
function Bf_(a){var b=new ES();JT(b,a);return b;}
function J6(a){JT(a,16);}
function JT(a,b){J(a);a.B=BW(b);}
function Y4(a,b){return a.wU(a.bq,b);}
function Lj(a,b){return a.k5(a.bq,b);}
function NW(a,b,c){var d,e,f;if(b>=0&&b<=a.bq){if(c===null)c=B(59);else if(c.bN())return a;a.gY(a.bq+c.i()|0);d=a.bq-1|0;while(d>=b){a.B.data[d+c.i()|0]=a.B.data[d];d=d+(-1)|0;}a.bq=a.bq+c.i()|0;d=0;while(d<c.i()){e=a.B.data;f=b+1|0;e[b]=c.f(d);d=d+1|0;b=f;}return a;}G(Ki());}
function PH(a,b){return a.AX(b,10);}
function AVZ(a,b,c){return a.LJ(a.bq,b,c);}
function A1M(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(c<0){e=0;c= -c|0;}a:{if(c<d){if(e)Cn(a,b,b+1|0);else{Cn(a,b,b+2|0);f=a.B.data;g=b+1|0;f[b]=45;b=g;}a.B.data[b]=FQ(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Cg(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;Cn(a,b,b+i|0);if(e)l=b;else{f=a.B.data;l=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.B.data;g=l+1|0;f[l]=FQ(c/k|0,d);c=c%k|0;k=k/d|0;l=g;}}}return a;}
function ACg(a,b){return a.DX(a.bq,b);}
function RN(a,b,c){return a.M3(b,c,10);}
function AMZ(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(Kt(c,Ba)){e=0;c=A4b(c);}a:{f=O(d);if(Kt(c,f)){if(e)Cn(a,b,b+1|0);else{Cn(a,b,b+2|0);g=a.B.data;h=b+1|0;g[b]=45;b=h;}a.B.data[b]=FQ(Cp(c),d);}else{i=1;j=O(1);while(true){k=Cf(j,f);if(Ku(k,j))break;if(Hq(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;Cn(a,b,b+i|0);if(e)l=b;else{g=a.B.data;l=b+1|0;g[b]=45;}while(true){if(Ku(j,Ba))break a;g=a.B.data;h=l+1|0;g[l]=FQ(Cp(E_(c,j)),d);c=AU$(c,j);j=E_(j,f);l=h;}}}return a;}
function TM(a,b){return a.CU(a.bq,b);}
function Z5(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=B9(c,0.0);if(!d){Cn(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=48;e=a.B.data;f=d+1|0;e[d]=46;a.B.data[f]=48;return a;}if(!d){Cn(a,b,b+4|0);e=a.B.data;d=b+1|0;e[b]=45;e=a.B.data;f=d+1|0;e[d]=48;e=a.B.data;d=f+1|0;e[f]=46;a.B.data[d]=48;return a;}if(isNaN(c)?1:0){Cn(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=78;e=a.B.data;f=d+1|0;e[d]=97;a.B.data[f]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Cn(a,b,b+8|0);d=b;}else{Cn(a,b,b+9|0);e=a.B.data;d=b+1|0;e[b]=45;}e=a.B.data;f=d+
1|0;e[d]=73;e=a.B.data;d=f+1|0;e[f]=110;e=a.B.data;f=d+1|0;e[d]=102;e=a.B.data;d=f+1|0;e[f]=105;e=a.B.data;f=d+1|0;e[d]=110;e=a.B.data;d=f+1|0;e[f]=105;e=a.B.data;f=d+1|0;e[d]=116;a.B.data[f]=121;return a;}Bat();g=BgR;ZT(c,g);h=g.rc;i=g.qN;j=g.wc;k=1;l=1;if(j)l=2;m=9;n=AQ8(h);if(n>0)m=m-n|0;if(i<7&&i>=(-3)){if(i>=0){k=i+1|0;m=Bf(m,k+1|0);i=0;}else{h=h/BgN.data[ -i|0]|0;m=m-i|0;i=0;}}if(i){l=l+2|0;if(!(i>(-10)&&i<10))l=l+1|0;if(i<0)l=l+1|0;}if(i&&m==k)m=m+1|0;d=l+m|0;Cn(a,b,b+d|0);if(!j)f=b;else{e=a.B.data;f
=b+1|0;e[b]=45;}o=100000000;p=0;while(p<m){if(o<=0)q=0;else{q=h/o|0;h=h%o|0;}e=a.B.data;d=f+1|0;e[f]=(48+q|0)&65535;k=k+(-1)|0;if(k)f=d;else{e=a.B.data;f=d+1|0;e[d]=46;}o=o/10|0;p=p+1|0;}if(i){e=a.B.data;d=f+1|0;e[f]=69;if(i>=0)f=d;else{i= -i|0;e=a.B.data;f=d+1|0;e[d]=45;}if(i<10)r=f;else{e=a.B.data;r=f+1|0;e[f]=(48+(i/10|0)|0)&65535;}a.B.data[r]=(48+(i%10|0)|0)&65535;}return a;}
function AQ8(b){var c,d,e,f;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;f=e*100|0;if(b%f|0)f=e;else c=c|2;if(!(b%(f*10|0)|0))c=c|1;return c;}
function Nb(a,b){return a.vb(a.bq,b);}
function Ow(a,b,c){Cn(a,b,b+1|0);a.B.data[b]=c;return a;}
function QI(a,b,c){return a.k5(b,c===null?B(59):c.b());}
function Th(a,b){return a.xx(a.bq,b);}
function OH(a,b,c){return a.k5(b,!c?B(60):B(61));}
function My(a,b){var c;if(a.B.data.length>=b)return;c=a.B.data.length>=1073741823?2147483647:Bf(b,Bf(a.B.data.length*2|0,5));a.B=JX(a.B,c);}
function Nv(a){return F1(a.B,0,a.bq);}
function M3(a){return a.bq;}
function O4(a,b){if(b>=0&&b<a.bq)return a.B.data[b];G(C$());}
function PL(a,b,c,d){return a.vA(a.bq,b,c,d);}
function ZQ(a,b,c,d,e){var f,g;if(d<=e&&e<=c.i()&&d>=0){Cn(a,b,(b+e|0)-d|0);while(d<e){f=a.B.data;g=b+1|0;f[b]=c.f(d);d=d+1|0;b=g;}return a;}G(C$());}
function ACQ(a,b){return a.E1(b,0,b.i());}
function Oq(a,b,c,d){return a.uF(a.bq,b,c,d);}
function Mp(a,b,c,d,e){var f,g,h,i,j;Cn(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.B.data;i=b+1|0;j=d+1|0;h[b]=g[d];b=i;d=j;}return a;}
function ND(a,b){return a.tX(b,0,b.data.length);}
function AA$(a,b,c){return a.ce(b,c);}
function Yt(a,b,c,d,e){var f,g,h,i;if(b>c)G(Bg(B(62)));while(b<c){f=d.data;g=e+1|0;h=a.B.data;i=b+1|0;f[e]=h[b];e=g;b=i;}}
function ABM(a,b){a.bq=b;}
function AB0(a,b){var c,d,e;if(b>=0&&b<a.bq){a.bq=a.bq-1|0;while(b<a.bq){c=a.B.data;d=a.B.data;e=b+1|0;c[b]=d[e];b=e;}return a;}G(Ki());}
function ACf(a,b,c){var d,e,f,g,h,i;d=B9(b,c);if(d<=0&&b<=a.bq){if(!d)return a;e=a.bq-c|0;a.bq=a.bq-(c-b|0)|0;f=0;while(f<e){g=a.B.data;d=b+1|0;h=a.B.data;i=c+1|0;g[b]=h[c];f=f+1|0;b=d;c=i;}return a;}G(Ki());}
function Cn(a,b,c){var d,e;d=a.bq-b|0;a.gY((a.bq+c|0)-b|0);e=d-1|0;while(e>=0){a.B.data[c+e|0]=a.B.data[b+e|0];e=e+(-1)|0;}a.bq=a.bq+(c-b|0)|0;}
function Xc(a,b,c){if(b<=c&&b>=0&&c<=a.bq)return F1(a.B,b,c-b|0);G(C$());}
var Fw=D(0);
var PI=D(ES);
function A6I(){var a=new PI();A1j(a);return a;}
function A1j(a){J6(a);}
function AHb(a,b){Lj(a,b);return a;}
function AQ3(a,b){Nb(a,b);return a;}
function ATv(a,b,c,d){Oq(a,b,c,d);return a;}
function AHW(a,b){ND(a,b);return a;}
function AV$(a,b,c,d){PL(a,b,c,d);return a;}
function A83(a,b){ACQ(a,b);return a;}
function A3F(a,b,c,d,e){ZQ(a,b,c,d,e);return a;}
function A3W(a,b,c,d,e){Mp(a,b,c,d,e);return a;}
function A9J(a,b,c){Ow(a,b,c);return a;}
function A7m(a,b,c){NW(a,b,c);return a;}
function AIz(a,b,c,d,e){return a.OB(b,c,d,e);}
function AW4(a,b,c,d){return a.Lm(b,c,d);}
function A0B(a,b,c,d,e){return a.IC(b,c,d,e);}
function A6X(a,b,c,d){return a.Nu(b,c,d);}
function AUS(a,b){return O4(a,b);}
function A_b(a){return M3(a);}
function AXi(a){return Nv(a);}
function AXy(a,b){My(a,b);}
function A8n(a,b,c){return a.QP(b,c);}
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
var N6=D();
var BiV=null;function AIr(){AIr=N(N6);ADl();}
function Qf(b){AIr();return BiV.W(b);}
function ACB(){var b;AIr();BiV.K();b=BiV;Bv();b.x(B(67),BiW);BiV.x(B(68),BiX);BiV.x(B(69),BiY);BiV.x(B(70),BiZ);BiV.x(B(71),Bi0);BiV.x(B(72),Bi1);BiV.x(B(73),Bi2);BiV.x(B(74),Bi3);BiV.x(B(75),Bi4);BiV.x(B(76),Bi5);BiV.x(B(77),Bi6);BiV.x(B(78),Bi7);BiV.x(B(79),Bi8);BiV.x(B(80),Bi9);BiV.x(B(81),Bi$);BiV.x(B(82),Bi_);BiV.x(B(83),Bja);BiV.x(B(84),Bjb);BiV.x(B(85),Bjc);BiV.x(B(86),Bjd);BiV.x(B(87),Bje);BiV.x(B(88),Bjf);BiV.x(B(89),Bjg);BiV.x(B(90),Bjh);BiV.x(B(91),Bji);BiV.x(B(92),Bjj);BiV.x(B(93),Bjk);BiV.x(B(94),
Bjl);BiV.x(B(95),Bjm);BiV.x(B(96),Bjn);BiV.x(B(97),Bjo);BiV.x(B(98),Bjp);BiV.x(B(99),Bjq);BiV.x(B(100),Bjr);}
function ADl(){BiV=DG();ACB();}
var E8=D();
function Mh(a){J(a);}
function Q(){var a=this;E8.call(a);a.bD=0;a.b5=0;a.bG=null;a.mA=null;a.m2=null;a.be=0;}
var Bjs=null;function Kd(){Kd=N(Q);AGU();}
function Be(a){Kd();Mh(a);a.bG=Bfn(2048);}
function AW1(a){return null;}
function AV0(a){return a.bG;}
function A3L(a){return !a.b5?(a.bG.lc(0)>=2048?0:1):a.bG.Qa(0)>=2048?0:1;}
function A1c(a){return a.be;}
function A8i(a){return a;}
function AEP(a){var b;if(a.m2===null){b=a.ci();a.m2=Bc6(a,b);a.m2.f9(a.b5);}return a.m2;}
function AW_(a){var b;if(a.mA===null){b=a.ci();a.mA=Bbn(a,b,a);a.mA.f9(a.jH());a.mA.be=a.be;}return a.mA;}
function A$m(a){return 0;}
function ARR(a,b){if(a.bD^b){a.bD=a.bD?0:1;a.b5=a.b5?0:1;}if(!a.be)a.be=1;return a;}
function AIx(a){return a.bD;}
function IY(b,c){Kd();return b.p(c);}
function GU(b,c){Kd();if(b.bK()!==null&&c.bK()!==null)return (b.bK()).Mb(c.bK());return 1;}
function KZ(b,c){Kd();return (ACc(Bjs,b)).Hs(c);}
function AGU(){Bjs=Ba4();}
function ZA(){Q.call(this);this.F3=null;}
function Bbz(a){var b=new ZA();A2i(b,a);return b;}
function A2i(a,b){a.F3=b;Be(a);}
function ATj(a,b){return Yj(b);}
var Gw=D();
var Bjt=null;var Bju=null;var Bjv=null;function AP1(){AP1=N(Gw);AHF();}
function Ba4(){var a=new Gw();TW(a);return a;}
function TW(a){AP1();J(a);}
function ACc(a,b){var c,d,e;c=0;while(true){AP1();if(c>=Bjv.data.length)G(BbE(B(101),B(101),b));d=Bjv.data[c];e=d.data;if(b.z(e[0]))break;c=c+1|0;}return e[1];}
function AHF(){Bjt=Bcq();Bju=Ber();Bjv=H($rt_arraycls(C),[H(C,[B(102),BcY()]),H(C,[B(103),A_X()]),H(C,[B(104),BfG()]),H(C,[B(105),Bf2()]),H(C,[B(106),Bju]),H(C,[B(107),BeG()]),H(C,[B(108),Bbe()]),H(C,[B(109),Bdw()]),H(C,[B(110),Bdm()]),H(C,[B(111),Baf()]),H(C,[B(112),BaJ()]),H(C,[B(113),Bdz()]),H(C,[B(114),Bb1()]),H(C,[B(115),A_S()]),H(C,[B(116),BfT()]),H(C,[B(117),BaD()]),H(C,[B(118),BeE()]),H(C,[B(119),BdY()]),H(C,[B(120),BeF()]),H(C,[B(121),Bai()]),H(C,[B(122),Bf9()]),H(C,[B(123),BdQ()]),H(C,[B(124),BbC()]),
H(C,[B(125),BfE()]),H(C,[B(126),Bfy()]),H(C,[B(127),BcE()]),H(C,[B(128),Bah()]),H(C,[B(129),Bfo()]),H(C,[B(130),Bjt]),H(C,[B(131),BbL()]),H(C,[B(132),Bdx()]),H(C,[B(133),Bjt]),H(C,[B(134),A_Q()]),H(C,[B(135),Bju]),H(C,[B(136),BaW()]),H(C,[B(137),M(0,127)]),H(C,[B(138),M(128,255)]),H(C,[B(139),M(256,383)]),H(C,[B(140),M(384,591)]),H(C,[B(141),M(592,687)]),H(C,[B(142),M(688,767)]),H(C,[B(143),M(768,879)]),H(C,[B(144),M(880,1023)]),H(C,[B(145),M(1024,1279)]),H(C,[B(146),M(1280,1327)]),H(C,[B(147),M(1328,1423)]),
H(C,[B(148),M(1424,1535)]),H(C,[B(149),M(1536,1791)]),H(C,[B(150),M(1792,1871)]),H(C,[B(151),M(1872,1919)]),H(C,[B(152),M(1920,1983)]),H(C,[B(153),M(2304,2431)]),H(C,[B(154),M(2432,2559)]),H(C,[B(155),M(2560,2687)]),H(C,[B(156),M(2688,2815)]),H(C,[B(157),M(2816,2943)]),H(C,[B(158),M(2944,3071)]),H(C,[B(159),M(3072,3199)]),H(C,[B(160),M(3200,3327)]),H(C,[B(161),M(3328,3455)]),H(C,[B(162),M(3456,3583)]),H(C,[B(163),M(3584,3711)]),H(C,[B(164),M(3712,3839)]),H(C,[B(165),M(3840,4095)]),H(C,[B(166),M(4096,4255)]),
H(C,[B(167),M(4256,4351)]),H(C,[B(168),M(4352,4607)]),H(C,[B(169),M(4608,4991)]),H(C,[B(170),M(4992,5023)]),H(C,[B(171),M(5024,5119)]),H(C,[B(172),M(5120,5759)]),H(C,[B(173),M(5760,5791)]),H(C,[B(174),M(5792,5887)]),H(C,[B(175),M(5888,5919)]),H(C,[B(176),M(5920,5951)]),H(C,[B(177),M(5952,5983)]),H(C,[B(178),M(5984,6015)]),H(C,[B(179),M(6016,6143)]),H(C,[B(180),M(6144,6319)]),H(C,[B(181),M(6400,6479)]),H(C,[B(182),M(6480,6527)]),H(C,[B(183),M(6528,6623)]),H(C,[B(184),M(6624,6655)]),H(C,[B(185),M(6656,6687)]),
H(C,[B(186),M(7424,7551)]),H(C,[B(187),M(7552,7615)]),H(C,[B(188),M(7616,7679)]),H(C,[B(189),M(7680,7935)]),H(C,[B(190),M(7936,8191)]),H(C,[B(191),M(8192,8303)]),H(C,[B(192),M(8304,8351)]),H(C,[B(193),M(8352,8399)]),H(C,[B(194),M(8400,8447)]),H(C,[B(195),M(8448,8527)]),H(C,[B(196),M(8528,8591)]),H(C,[B(197),M(8592,8703)]),H(C,[B(198),M(8704,8959)]),H(C,[B(199),M(8960,9215)]),H(C,[B(200),M(9216,9279)]),H(C,[B(201),M(9280,9311)]),H(C,[B(202),M(9312,9471)]),H(C,[B(203),M(9472,9599)]),H(C,[B(204),M(9600,9631)]),
H(C,[B(205),M(9632,9727)]),H(C,[B(206),M(9728,9983)]),H(C,[B(207),M(9984,10175)]),H(C,[B(208),M(10176,10223)]),H(C,[B(209),M(10224,10239)]),H(C,[B(210),M(10240,10495)]),H(C,[B(211),M(10496,10623)]),H(C,[B(212),M(10624,10751)]),H(C,[B(213),M(10752,11007)]),H(C,[B(214),M(11008,11263)]),H(C,[B(215),M(11264,11359)]),H(C,[B(216),M(11392,11519)]),H(C,[B(217),M(11520,11567)]),H(C,[B(218),M(11568,11647)]),H(C,[B(219),M(11648,11743)]),H(C,[B(220),M(11776,11903)]),H(C,[B(221),M(11904,12031)]),H(C,[B(222),M(12032,12255)]),
H(C,[B(223),M(12272,12287)]),H(C,[B(224),M(12288,12351)]),H(C,[B(225),M(12352,12447)]),H(C,[B(226),M(12448,12543)]),H(C,[B(227),M(12544,12591)]),H(C,[B(228),M(12592,12687)]),H(C,[B(229),M(12688,12703)]),H(C,[B(230),M(12704,12735)]),H(C,[B(231),M(12736,12783)]),H(C,[B(232),M(12784,12799)]),H(C,[B(233),M(12800,13055)]),H(C,[B(234),M(13056,13311)]),H(C,[B(235),M(13312,19893)]),H(C,[B(236),M(19904,19967)]),H(C,[B(237),M(19968,40959)]),H(C,[B(238),M(40960,42127)]),H(C,[B(239),M(42128,42191)]),H(C,[B(240),M(42752,
42783)]),H(C,[B(241),M(43008,43055)]),H(C,[B(242),M(44032,55203)]),H(C,[B(243),M(55296,56191)]),H(C,[B(244),M(56192,56319)]),H(C,[B(245),M(56320,57343)]),H(C,[B(246),M(57344,63743)]),H(C,[B(247),M(63744,64255)]),H(C,[B(248),M(64256,64335)]),H(C,[B(249),M(64336,65023)]),H(C,[B(250),M(65024,65039)]),H(C,[B(251),M(65040,65055)]),H(C,[B(252),M(65056,65071)]),H(C,[B(253),M(65072,65103)]),H(C,[B(254),M(65104,65135)]),H(C,[B(255),M(65136,65279)]),H(C,[B(256),M(65280,65519)]),H(C,[B(257),M(0,1114111)]),H(C,[B(258),
BdA()]),H(C,[B(259),Bz(0,1)]),H(C,[B(260),G6(62,1)]),H(C,[B(261),Bz(1,1)]),H(C,[B(262),Bz(2,1)]),H(C,[B(263),Bz(3,0)]),H(C,[B(264),Bz(4,0)]),H(C,[B(265),Bz(5,1)]),H(C,[B(266),G6(448,1)]),H(C,[B(267),Bz(6,1)]),H(C,[B(268),Bz(7,0)]),H(C,[B(269),Bz(8,1)]),H(C,[B(270),G6(3584,1)]),H(C,[B(271),Bz(9,1)]),H(C,[B(272),Bz(10,1)]),H(C,[B(273),Bz(11,1)]),H(C,[B(274),G6(28672,0)]),H(C,[B(275),Bz(12,0)]),H(C,[B(276),Bz(13,0)]),H(C,[B(277),Bz(14,0)]),H(C,[B(278),Bem(983040,1,1)]),H(C,[B(279),Bz(15,0)]),H(C,[B(280),Bz(16,
1)]),H(C,[B(281),Bz(18,1)]),H(C,[B(282),Bbp(19,0,1)]),H(C,[B(283),G6(1643118592,1)]),H(C,[B(284),Bz(20,0)]),H(C,[B(285),Bz(21,0)]),H(C,[B(286),Bz(22,0)]),H(C,[B(287),Bz(23,0)]),H(C,[B(288),Bz(24,1)]),H(C,[B(289),G6(2113929216,1)]),H(C,[B(290),Bz(25,1)]),H(C,[B(291),Bz(26,0)]),H(C,[B(292),Bz(27,0)]),H(C,[B(293),Bz(28,1)]),H(C,[B(294),Bz(29,0)]),H(C,[B(295),Bz(30,0)])]);}
var Ny=D(0);
function JZ(){var a=this;C.call(a);a.eF=null;a.eJ=null;a.nD=null;a.pu=null;}
var Bjw=null;function Vd(){Vd=N(JZ);A7u();}
function AMi(){var a=new JZ();Qt(a);return a;}
function ADG(a,b){return b.M(a.nD);}
function A$2(a,b){return b.M(a.pu);}
function Qt(a){Vd();J(a);a.eF=S();a.eJ=S();a.nD=S();a.pu=S();a.Ld();}
function A5v(a,b,c){a.eF.I(b.n>=c.n?c.n:b.n,b.o>=c.o?c.o:b.o,b.q>=c.q?c.q:b.q);a.eJ.I(b.n<=c.n?c.n:b.n,b.o<=c.o?c.o:b.o,b.q<=c.q?c.q:b.q);((a.nD.M(a.eF)).fB(a.eJ)).em(0.5);(a.pu.M(a.eJ)).gl(a.eF);return a;}
function A04(a){a.eF.I(Infinity,Infinity,Infinity);a.eJ.I((-Infinity),(-Infinity),(-Infinity));a.nD.I(0.0,0.0,0.0);a.pu.I(0.0,0.0,0.0);return a;}
function AQS(a){return a.DM(a.eF.I(0.0,0.0,0.0),a.eJ.I(0.0,0.0,0.0));}
function AUc(a,b,c,d){return a.DM(a.eF.I(HI(a.eF.n,b),HI(a.eF.o,c),HI(a.eF.q,d)),a.eJ.I(Ib(a.eJ.n,b),Ib(a.eJ.o,c),Ib(a.eJ.q,d)));}
function HI(b,c){Vd();if(b>c)b=c;return b;}
function Ib(b,c){Vd();if(b>c)c=b;return c;}
function A7u(){Bjw=S();}
var K4=D(0);
function ABu(){C.call(this);this.nr=null;}
function BdF(a){var b=new ABu();ASJ(b,a);return b;}
function ASJ(a,b){J(a);a.nr=b;}
function AYk(a,b,c){GR();if(c===Bjx)return AVi(a.nr,b,c);G(U(((((I()).a(B(296))).dD(c)).a(B(297))).b()));}
function A9N(a,b){var c,d;c=new Gd;d=a.nr;GR();Hn(c,d,b,Bjy);return c;}
function AWV(a,b){var c,d;c=new Gd;d=a.nr;GR();Hn(c,d,b,Bjx);return c;}
var EN=D(Bx);
var Bjz=null;var BjA=null;var BjB=null;function AA8(){AA8=N(EN);AVJ();}
function AXa(a,b){var c=new EN();AAj(c,a,b);return c;}
function YA(){AA8();return BjB.go();}
function AAj(a,b,c){AA8();Cw(a,b,c);}
function AVJ(){Bjz=AXa(B(298),0);BjA=AXa(B(299),1);BjB=H(EN,[Bjz,BjA]);}
var IR=D(T);
function Ber(){var a=new IR();TT(a);return a;}
function TT(a){Bo(a);}
function ZC(a){return (CS()).bF(48,57);}
var R0=D(T);
function BbC(){var a=new R0();AGc(a);return a;}
function AGc(a){Bo(a);}
function A0D(a){var b;b=Bav(a);b.be=1;return b;}
var Nk=D(0);
function Ek(){var a=this;BB.call(a);a.mk=0;a.qT=null;a.p_=null;a.p6=0;}
function Bgo(a,b){var c=new Ek();J3(c,a,b);return c;}
function J3(a,b,c){CQ(a);a.mk=1;a.p_=b;a.p6=c;}
function A$s(a,b){a.k=b;}
function AOn(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=Bc(4);f=0;g=d.J();if(b>=g)return (-1);h=a.vr(b,c,g);i=b+a.mk|0;j=ABO(h);if(j===null){k=e.data;l=1;k[f]=h;}else{l=j.data.length;X(j,0,e,0,l);l=f+l|0;}a:{if(i<g){m=a.vr(i,c,g);while(l<4){if(!A5T(m)){k=e.data;n=l+1|0;k[l]=m;}else{k=(ABO(m)).data;if(k.length!=2){o=e.data;n=l+1|0;o[l]=k[0];}else{o=e.data;m=l+1|0;o[l]=k[0];n=m+1|0;o[m]=k[1];}}i=i+a.mk|0;if(i>=g){l=n;break a;}m=a.vr(i,c,g);l=n;}}}if(l!=a.p6)return (-1);p=0;while(true){if(p>=l)return a.k.e(i,c,d);if
(e.data[p]!=a.p_.data[p])break;p=p+1|0;}return (-1);}
function Ii(a){var b,c;if(a.qT===null){b=I();c=0;while(c<a.p6){b.q0(Eu(a.p_.data[c]));c=c+1|0;}a.qT=b.b();}return a.qT;}
function A5b(a){return (((I()).a(B(300))).a(Ii(a))).b();}
function AKN(a,b,c,d){var e,f,g,h;a.mk=1;if(b>=(d-1|0))e=c.f(b);else{f=b+1|0;e=c.f(b);g=c.f(f);if(GA(e,g)){h=I5([e,g]);e=ST(h,0);a.mk=2;}}return e;}
function ALx(a,b){var c,d;a:{if(b instanceof Ek){c=b;if(!(Ii(c)).z(Ii(a))){d=0;break a;}}d=1;}return d;}
function A6B(a,b){return 1;}
var AAf=D(Ek);
function Bbl(a,b){var c=new AAf();AXs(c,a,b);return c;}
function AXs(a,b,c){J3(a,b,c);}
function Jw(){var a=this;C.call(a);a.sm=0;a.ub=null;a.ig=null;a.lN=0;}
function Xg(a){J(a);a.ig=null;a.lN=0;}
function ALk(a,b){a.ub=b;}
function N$(a){return a.ig===null?0:1;}
function ANZ(a){if(!N$(a))return;a.lN=a.lN+1|0;if(!a.sm)a.No(a.ig.lm());else a.MA(a.ig.lm());a.ig=null;}
function APg(a,b){if(b<0)G(W(B(301)));if(N$(a))a.jk();a.sm=0;a.ig=Bn(a.Mv(a.lN,b));}
function Zk(a,b){if(b!=a.lN)return;if(!a.sm)a.ig=null;if(a.ub!==null)a.ub.fe();}
var Zq=D();
function AHE(){return {};}
function Da(){var a=this;Jy.call(a);a.Bm=null;a.DR=null;}
function GD(a,b,c,d){U0(a,b,c,d);a.Bm=Cj(512);a.DR=BW(512);}
function ARS(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.Bm;e=0;f=0;g=a.DR;a:{while(true){if((e+32|0)>f&&Cb(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Bq(Bb(b)+j|0,i.length);b.z0(d,j,f-j|0);e=0;}if(!Cb(c)){if(!Cb(b)&&e>=f){Bj();k=BgY;}else{Bj();k=BgX;}break a;}i=g.data;l=0;m=Bq(Bb(c),i.length);n=Bb0(b,c);k=a.nd(d,e,f,g,l,m,n);e=n.z9;if(k===null&&l==n.qz){Bj();k=BgY;}j=n.qz;c.P6(g,0,j);if(k!==null)break;}}b.f4(B8(b)-(f-e|0)|0);return k;}
var X_=D(Da);
function Bfs(a){var b=new X_();AGF(b,a);return b;}
function AGF(a,b){GD(a,b,1.0,1.0);}
function AT9(a,b,c,d,e,f,g,h){var i,j,k,l,m;i=null;a:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(l&128){i=BV(1);c=k+(-1)|0;break a;}j=e.data;m=f+1|0;j[f]=l&65535;c=k;f=m;}}h.el(c);h.dR(f);return i;}
var Yo=D();
function CE(){return Cf(Ea(),O(1000000));}
function Gg(){var a=this;C.call(a);a.ki=0;a.kz=0;a.CD=null;a.gU=null;a.bX=null;a.oZ=0;a.sy=null;a.ol=0;a.om=0;a.on=0;a.zO=0.0;a.m_=null;a.pe=null;a.zt=null;a.Ki=null;a.iw=null;a.km=null;}
var BjC=null;var BjD=0;var BjE=null;function FD(){FD=N(Gg);ALH();}
function APA(a){var b=new Gg();Pb(b,a);return b;}
function O0(a,b,c){var d=new Gg();T_(d,a,b,c);return d;}
function Pb(a,b){var c,d,e;FD();J(a);a.ol=255;a.om=255;a.on=255;a.m_=Jm(a.ol,a.om,a.on,a.zO);Gv();a.pe=BjF;SM();a.zt=BjG;c=b;d=c.rx();e=c.fS.iO.W(d);Mc(a,(-1),(-1),e,null);if(a.iw!==null)return;G(U(((((I()).a(B(302))).a(b.rx())).a(B(303))).b()));}
function T_(a,b,c,d){FD();J(a);a.ol=255;a.om=255;a.on=255;a.m_=Jm(a.ol,a.om,a.on,a.zO);Gv();a.pe=BjF;SM();a.zt=BjG;Mc(a,b,c,null,null);}
function Mc(a,b,c,d,e){var f;if(e!==null){a.km=e;a.ki=e.getWidth();a.kz=e.getHeight();}else if(d===null){a.ki=b;a.kz=c;}else{a.iw=d;a.ki=d.width;a.kz=d.height;}AYz();a.CD=BjH;a.sy=ML(4);FD();f=BjD;BjD=f+1|0;a.oZ=f;a.sy.K_(0,a.oZ);BjC.x(Bn(a.oZ),a);}
function Ru(a){var b,c,d,e,f;b=(El()).hu();c=b.pg();d=c.createElement("canvas");a.gU=d;e=a.gU;f=a.ki;e.width=f;e=a.gU;f=a.kz;e.height=f;a.bX=a.gU.getContext("2d");e=a.bX;f=$rt_ustr((G2()).b());e.globalCompositeOperation=f;}
function G2(){FD();Ix();return BjI;}
function Jm(b,c,d,e){FD();return ((((((((((I()).a(B(304))).j(b)).a(B(23))).j(c)).a(B(23))).j(d)).a(B(23))).cD(e)).a(B(24))).b();}
function ADF(a,b){var c,d;a.pe=b;GZ(a);c=a.bX;d=$rt_ustr((G2()).b());c.globalCompositeOperation=d;}
function AG8(a){return a.CD;}
function AKX(a){return 6408;}
function ANw(a){return 6408;}
function AQt(a){return 5121;}
function AJw(a){return a.ki;}
function AMX(a){return a.kz;}
function A7k(a){return a.sy;}
function AXQ(a){FD();BjC.IO(Bn(a.oZ));}
function ADX(a){GZ(a);return a.gU;}
function GZ(a){var b,c;if(a.gU===null){Ru(a);if(a.iw!==null){b=a.bX;Ix();c=$rt_ustr(E6(BjJ));b.globalCompositeOperation=c;b=a.bX;c=a.iw;b.drawImage(c,0.0,0.0);b=a.bX;c=$rt_ustr(E6(G2()));b.globalCompositeOperation=c;}if(a.km!==null){c=a.bX;Ix();b=$rt_ustr(E6(BjJ));c.globalCompositeOperation=b;b=a.bX;c=a.km;b.drawImage(c,0.0,0.0);b=a.bX;c=$rt_ustr(E6(G2()));b.globalCompositeOperation=c;}}}
function AFv(a){return a.gU===null&&a.iw!==null?1:0;}
function ARb(a){return a.iw;}
function A5k(a){return a.gU===null&&a.km!==null?1:0;}
function A$F(a){return a.km;}
function AZc(a,b,c,d,e,f,g,h){var i;i=b.sV();Ol(a,i,e,f,g,h,c,d,g,h);}
function APq(a,b,c,d,e,f,g,h,i,j){Ol(a,b.sV(),c,d,e,f,g,h,i,j);}
function Ol(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u;GZ(a);k=a.pe;Gv();if(k===BjK){l=a.bX;k=$rt_ustr(BjE);l.fillStyle=k;l=a.bX;k=$rt_ustr(BjE);l.strokeStyle=k;l=a.bX;k="destination-out";l.globalCompositeOperation=k;a.bX.beginPath();l=a.bX;m=g;n=h;o=i;p=j;l.rect(m,n,o,p);AA8();RR(a,Bjz);a.bX.closePath();l=a.bX;k=$rt_ustr(a.m_);l.fillStyle=k;q=a.bX;l=$rt_ustr(a.m_);q.strokeStyle=l;q=a.bX;Ix();l=$rt_ustr(E6(BjI));q.globalCompositeOperation=l;}if(e&&f&&i&&j){l=a.bX;m=c;n=d;o=e;p=f;r=g;s=h;t=i;u=j;l.drawImage(b,
m,n,o,p,r,s,t,u);}a.Ki=null;}
function RR(a,b){a:{GZ(a);BfS();switch(BjL.data[BC(b)]){case 1:break;case 2:a.bX.stroke();break a;default:break a;}a.bX.fill();}}
function ALH(){BjC=C6();BjD=0;BjE=Jm(255,255,255,1.0);}
function HD(){BH.call(this);this.IL=null;}
var BjM=Ba;var BjN=Ba;function ABF(){ABF=N(HD);A$3();}
function A$3(){BjM=BR(B(305));BjN=BjM;}
var ACG=D(Cy);
function Bde(){var a=new ACG();AUt(a);return a;}
function AUt(a){Et(a,(-1));}
function AYe(a,b,c,d){return b;}
function A1_(a){return B(306);}
var KQ=D(0);
var JC=D(BB);
function BcR(a,b){var c=new JC();V0(c,a,b);return c;}
function V0(a,b,c){SA(a,b,c);}
function AOp(a,b,c,d){var e,f,g,h,i;e=d.ev(a.bm);d.by(a.bm,b);f=a.bQ.df();g=0;while(true){if(g>=f){d.by(a.bm,e);return (-1);}h=a.bQ.l(g);i=h.e(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function AMp(a){return B(307);}
function A6Z(a,b){var c;c=b.ev(a.bm);return !c?0:1;}
var Dr=D(JC);
function Bdq(a,b){var c=new Dr();Gc(c,a,b);return c;}
function Gc(a,b,c){V0(a,b,c);}
function AYV(a,b,c,d){var e,f,g,h,i;e=d.ev(a.bm);d.by(a.bm,b);f=a.bQ.df();g=0;while(g<f){h=a.bQ.l(g);i=h.e(b,c,d);if(i>=0)return a.k.e(a.dn.dM(),c,d);g=g+1|0;}d.by(a.bm,e);return (-1);}
function A6y(a,b){a.k=b;}
function AD7(a){return B(307);}
var VD=D(Dr);
function BdV(a,b){var c=new VD();AJf(c,a,b);return c;}
function AJf(a,b,c){Gc(a,b,c);}
function AOE(a,b,c,d){var e,f,g,h;e=a.bQ.df();f=0;while(f<e){g=a.bQ.l(f);h=g.e(b,c,d);if(h>=0)return a.k.e(b,c,d);f=f+1|0;}return (-1);}
function ARZ(a,b){return 0;}
function A$n(a){return B(308);}
var Gx=D(0);
var Pv=D();
function Beh(){var a=new Pv();A5L(a);return a;}
function A5L(a){J(a);}
function Ie(){C.call(this);this.qc=null;}
function SF(a){J(a);a.qc=Bp();}
function A2d(a,b){var c,d,e;c=b.kP;if(c!==null&&c.uI(b))return c;d=a.qc.bZ();while(true){if(!d.bC()){e=a.Gc(b);if(e.uI(b)){e.Ei();a.qc.F(e);return e;}G(U(B(309)));}e=d.bz();if(e.uI(b))break;}return e;}
function Pu(){Ie.call(this);this.wk=null;}
function BjO(a){var b=new Pu();WX(b,a);return b;}
function Bfa(){var a=new Pu();A$p(a);return a;}
function WX(a,b){SF(a);if(b===null)b=BcM();a.wk=b;}
function A$p(a){WX(a,null);}
function ASm(a,b){return BaV(b,a.wk);}
var ABz=D(Dr);
function Bc_(a,b){var c=new ABz();AIt(c,a,b);return c;}
function AIt(a,b,c){Gc(a,b,c);}
function AFm(a,b,c,d){var e,f,g;e=a.bQ.df();f=0;while(true){if(f>=e)return a.k.e(b,c,d);g=a.bQ.l(f);if(g.e(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A8y(a,b){return 0;}
function AJc(a){return B(310);}
var Ld=D(0);
function Ho(){var a=this;C.call(a);a.Cn=null;a.pa=0;a.oQ=0;a.kv=null;a.dd=null;a.Df=0;a.jN=0;}
var BjP=0;function Beo(a,b,c,d){var e=new Ho();AYb(e,a,b,c,d);return e;}
function AYb(a,b,c,d,e){J(a);a.pa=0;a.oQ=0;a.jN=0;a.Cn=b;a.dd=c;a.kv=d;a.Df=e;if(a.dd!==null){a.dd=N0(a,a.dd);a.pa=a.dd.bo();a.oQ=a.dd.bl();if(d===null)a.kv=a.dd.f8();}}
function AUM(a){return a.jN;}
function AYc(a){if(a.jN)G(U(B(311)));if(a.dd===null){a.dd=N0(a,APA(a.Cn));a.pa=a.dd.bo();a.oQ=a.dd.bl();if(a.kv===null)a.kv=a.dd.f8();}a.jN=1;}
function N0(a,b){var c,d,e,f,g;a:{if(Bip===null&&BjP){c=b.bo();d=b.bl();e=IW(c);f=IW(d);if(c!=e)break a;if(d!=f)break a;}return b;}g=O0(e,f,b.f8());g.zh(b,0,0,0,0,c,d);b.iz();return g;}
function AMv(a){var b;if(!a.jN)G(U(B(312)));a.jN=0;b=a.dd;a.dd=null;return b;}
function A15(a){return 1;}
function ALF(a){return a.pa;}
function AYs(a){return a.oQ;}
function AIi(a){return a.kv;}
function AVP(a){return a.Df;}
function AHr(a){return 1;}
function A4k(a){O5();return Bif;}
function AYJ(a,b){G(U(B(313)));}
var Hy=D(Bm);
function BfW(){var a=new Hy();R7(a);return a;}
function R7(a){Cx(a);}
var ACL=D(Hy);
function C9(){var a=new ACL();A18(a);return a;}
function A18(a){R7(a);}
function N1(){var a=this;BH.call(a);a.Fp=0;a.Kq=0;a.K8=0;a.HY=0.0;}
var BjQ=Ba;function GO(){GO=N(N1);AOi();}
function Us(b){GO();return Dw(Br(b,BjQ),b)?0:1;}
function AOi(){BjQ=BR(B(314));}
var Z1=D();
function AAz(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(CL());}return b.data.length;}
function Lu(b,c){if(b===null)G(IJ());if(b===F($rt_voidcls()))G(CL());if(c<0)G(A9L());return ASO(b.z6(),c);}
function ASO(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function DP(){C.call(this);this.bk=null;}
function HV(a){J(a);a.bk=CP(0.0,0.0,0.0,1.0);}
function OA(){var a=this;DP.call(a);a.eD=null;a.dx=0.0;}
function Be7(){var a=new OA();AKr(a);return a;}
function AKr(a){HV(a);a.eD=S();}
function AKx(a,b){return a.H4(b.bk,b.eD,b.dx);}
function AN1(a,b,c,d){if(b!==null)a.bk.eR(b);if(c!==null)a.eD.M(c);a.dx=d;return a;}
function AFh(a,b,c,d,e,f,g,h){a.bk.hV(b,c,d,1.0);a.eD.I(e,f,g);a.dx=h;return a;}
function AXD(a,b){var c;a:{b:{if(b!==null){if(b===a)break b;if(a.bk.z(b.bk)&&a.eD.z(b.eD)&&a.dx===b.dx)break b;}c=0;break a;}c=1;}return c;}
var AAm=D();
function BeT(){var a=new AAm();AFN(a);return a;}
function AFN(a){J(a);}
function UD(){C.call(this);this.N=null;}
function Bfx(a){var b=new UD();AE1(b,a);return b;}
function AE1(a,b){J(a);a.N=BeY(4);a.N.Jb(b);}
function AKI(a,b){var c,d,e,f,$$je;c=a.N.f0();a:{try{d=0;e=a.N.h;}catch($$e){$$je=R($$e);f=$$je;break a;}b:{try{while(d<e){if(c.data[d].lH(b))break b;d=d+1|0;}}catch($$e){$$je=R($$e);f=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);f=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(f);}
function AT8(a,b){var c,d,e,f,$$je;c=a.N.f0();a:{try{d=0;e=a.N.h;}catch($$e){$$je=R($$e);f=$$je;break a;}b:{try{while(d<e){if(c.data[d].oF(b))break b;d=d+1|0;}}catch($$e){$$je=R($$e);f=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);f=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(f);}
function AUq(a,b){var c,d,e,f,$$je;c=a.N.f0();a:{try{d=0;e=a.N.h;}catch($$e){$$je=R($$e);f=$$je;break a;}b:{try{while(d<e){if(c.data[d].ls(b))break b;d=d+1|0;}}catch($$e){$$je=R($$e);f=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);f=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(f);}
function AEx(a,b,c,d,e){var f,g,h,i,$$je;f=a.N.f0();a:{try{g=0;h=a.N.h;}catch($$e){$$je=R($$e);i=$$je;break a;}b:{try{while(g<h){if(f.data[g].iq(b,c,d,e))break b;g=g+1|0;}}catch($$e){$$je=R($$e);i=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);i=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(i);}
function AQq(a,b,c,d,e){var f,g,h,i,$$je;f=a.N.f0();a:{try{g=0;h=a.N.h;}catch($$e){$$je=R($$e);i=$$je;break a;}b:{try{while(g<h){if(f.data[g].hQ(b,c,d,e))break b;g=g+1|0;}}catch($$e){$$je=R($$e);i=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);i=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(i);}
function AII(a,b,c,d){var e,f,g,h,$$je;e=a.N.f0();a:{try{f=0;g=a.N.h;}catch($$e){$$je=R($$e);h=$$je;break a;}b:{try{while(f<g){if(e.data[f].i_(b,c,d))break b;f=f+1|0;}}catch($$e){$$je=R($$e);h=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);h=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(h);}
function ARY(a,b,c){var d,e,f,g,$$je;d=a.N.f0();a:{try{e=0;f=a.N.h;}catch($$e){$$je=R($$e);g=$$je;break a;}b:{try{while(e<f){if(d.data[e].na(b,c))break b;e=e+1|0;}}catch($$e){$$je=R($$e);g=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);g=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(g);}
function A36(a,b,c){var d,e,f,g,$$je;d=a.N.f0();a:{try{e=0;f=a.N.h;}catch($$e){$$je=R($$e);g=$$je;break a;}b:{try{while(e<f){if(d.data[e].oJ(b,c))break b;e=e+1|0;}}catch($$e){$$je=R($$e);g=$$je;break a;}a.N.bd();return 0;}try{}catch($$e){$$je=R($$e);g=$$je;break a;}a.N.bd();return 1;}a.N.bd();G(g);}
var FL=D(FS);
function BjR(a){var b=new FL();KF(b,a);return b;}
function KF(a,b){OW(a,b);}
var AAd=D(FL);
function BjS(a){var b=new AAd();AF4(b,a);return b;}
function AF4(a,b){KF(a,b);}
var Pr=D(T);
function BdY(){var a=new Pr();AF6(a);return a;}
function AF6(a){Bo(a);}
function AHB(a){var b;b=BeW(a);b.be=1;return b;}
var IS=D(0);
var Cz=D(0);
var IE=D(0);
var Jb=D();
function Um(a){J(a);}
function AZA(a,b){var c,d,e,f;c=b.data;d=a.df();e=c.length;if(e<d)b=Lu((Ck(b)).gq(),d);else while(d<e){c[d]=null;d=d+1|0;}d=0;f=a.ft();while(f.bC()){c=b.data;e=d+1|0;c[d]=f.bz();d=e;}return b;}
var E9=D();
function Kv(a){J(a);}
function A8Y(a,b,c,d){var e,f,g,h;e=0;while(e<d){f=a.Bg();if(f<0){if(!e)e=(-1);return e;}g=b.data;h=c+1|0;g[c]=f<<24>>24;e=e+1|0;c=h;}if(d<=0)d=(-1);return d;}
function A1e(a){}
function ABj(){var a=this;E9.call(a);a.tE=null;a.h7=0;a.Ic=0;a.qK=0;}
function BjT(a,b,c){var d=new ABj();ACX(d,a,b,c);return d;}
function XC(a){var b=new ABj();AFr(b,a);return b;}
function ACX(a,b,c,d){Kv(a);a.tE=b;a.h7=c;a.Ic=c;a.qK=c+d|0;}
function AFr(a,b){ACX(a,b,0,b.data.length);}
function AX5(a){var b,c,d;if(a.h7>=a.qK)b=(-1);else{c=a.tE.data;d=a.h7;a.h7=d+1|0;b=c[d]&255;}return b;}
function A$A(a,b,c,d){var e,f,g,h,i,j;e=Bq(d,a.qK-a.h7|0);f=0;while(f<e){g=b.data;h=c+1|0;i=a.tE.data;j=a.h7;a.h7=j+1|0;g[c]=i[j];f=f+1|0;c=h;}if(e<=0)e=(-1);return e;}
function AJ3(a){}
var Tw=D();
function ADB(b,c){var d,e,f,g,h,i,j,k;if(!b)return B(315);d=1<<c;e=d-1|0;f=(((32-Mv(b)|0)+c|0)-1|0)/c|0;g=BW(f);h=Cg(f-1|0,c);i=0;while(h>=0){j=g.data;k=i+1|0;j[i]=FQ(b>>>h&e,d);h=h-c|0;i=k;}return Mg(g);}
var IN=D(CT);
function AAh(a,b,c,d){FJ(a,b);a.C=c;a.bb=d;}
function AKY(b,c,d){return Be0(0,b.data.length,b,c,c+d|0,0);}
function A0P(b){return AKY(b,0,b.data.length);}
function Tz(a){FZ(a);return a;}
function A4u(a){return Tz(a);}
function JH(){var a=this;C.call(a);a.jo=null;a.u6=0.0;a.vl=0.0;a.AC=0;a.AD=0;a.yz=0;a.EP=0;a.HA=null;}
function Tl(a){J(a);a.HA=S();}
function A8J(a,b){Zv(a.AC,a.AD,a.yz,a.EP);a.jo.kx=a.u6;a.jo.me=a.vl;if(b)a.jo.cq.I(a.u6/2.0,a.vl/2.0,0.0);a.jo.f6();}
function A8t(a){return a.jo;}
function AJe(a,b){a.jo=b;}
function AHi(a,b,c){a.u6=b;a.vl=c;}
function AXu(a,b,c,d,e){a.AC=b;a.AD=c;a.yz=d;a.EP=e;}
function CG(){Dd.call(this);this.bv=null;}
function Bb4(a,b,c){var d=new CG();E4(d,a,b,c);return d;}
function E4(a,b,c,d){FW(a,b,c,d);a.bv=b;}
function AUY(a,b,c,d){var e,f;e=0;a:{while((b+a.bv.cg()|0)<=d.J()){f=a.bv.bH(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.k.e(b,c,d);if(f>=0)break;b=b-a.bv.cg()|0;e=e+(-1)|0;}return f;}
function AXY(a){return B(316);}
var Ed=D(CG);
function Bbx(a,b,c){var d=new Ed();Nr(d,a,b,c);return d;}
function Nr(a,b,c,d){E4(a,b,c,d);}
function A3y(a,b,c,d){var e;e=a.Y.e(b,c,d);if(e<0)e=a.k.e(b,c,d);return e;}
function AUf(a,b){LK(a,b);a.Y.Q(b);}
var TX=D(Ed);
function Bdk(a,b,c){var d=new TX();A$C(d,a,b,c);return d;}
function A$C(a,b,c,d){Nr(a,b,c,d);}
function ANf(a,b,c,d){var e;if((b+a.bv.cg()|0)<=d.J()){e=a.bv.bH(b,c);if(e>=1)b=b+e|0;}return a.k.e(b,c,d);}
var Hv=D(0);
var V=D();
function BM(a){J(a);}
function AIC(a,b,c){return 0;}
function ABt(){var a=this;C.call(a);a.fh=null;a.is=null;a.lC=0;a.lw=null;a.oO=0;a.di=0;a.j4=null;a.b9=null;}
function BeB(){var a=new ABt();AL4(a);return a;}
function AL4(a){J(a);a.lC=7;a.di=0;a.lw=Y(C,256);a.j4=Bc(40);a.b9=Bc(40);}
function AU0(a,b,c,d,e){var f,g,h,i,j,k,l,m,n;f=b.data;a.di=0;AKS(f.length,d,e);g=e-d|0;if(g<2)return;if(g<32){h=UF(b,d,e,c);AB$(b,d,e,d+h|0,c);return;}a.fh=b;a.is=c;a.oO=0;i=AVg(g);while(true){j=UF(b,d,e,c);if(j>=i)k=j;else{k=g>i?i:g;AB$(b,d,d+k|0,d+j|0,c);}Z3(a,d,k);X5(a);d=d+k|0;g=g-k|0;if(!g)break;}TO(a);a.fh=null;a.is=null;l=a.lw;m=0;n=a.oO;while(m<n){l.data[m]=null;m=m+1|0;}}
function AB$(b,c,d,e,f){var g,h,i,j,k,l;if(e==c)e=e+1|0;while(e<d){g=b.data;h=g[e];i=e;j=c;while(j<i){k=(j+i|0)>>>1;if(f.cW(h,g[k])<0)i=k;else j=k+1|0;}a:{b:{l=e-j|0;switch(l){case 1:break b;case 2:g[j+2|0]=g[j+1|0];break b;default:}X(b,j,b,j+1|0,l);break a;}g[j+1|0]=g[j];}g[j]=h;e=e+1|0;}}
function UF(b,c,d,e){var f,g,h;f=c+1|0;if(f==d)return 1;a:{g=b.data;h=f+1|0;if(e.cW(g[f],g[c])>=0)while(h<d){if(e.cW(g[h],g[h-1|0])<0)break a;h=h+1|0;}else{while(h<d&&e.cW(g[h],g[h-1|0])<0){h=h+1|0;}A7E(b,c,h);}}return h-c|0;}
function A7E(b,c,d){var e,f,g,h,i;e=d+(-1)|0;while(c<e){f=b.data;g=f[c];h=c+1|0;f[c]=f[e];i=e+(-1)|0;f[e]=g;c=h;e=i;}}
function AVg(b){var c;c=0;while(b>=32){c=c|b&1;b=b>>1;}return b+c|0;}
function Z3(a,b,c){a.j4.data[a.di]=b;a.b9.data[a.di]=c;a.di=a.di+1|0;}
function X5(a){var b;a:{while(true){if(a.di<=1)break a;b=a.di-2|0;if(!(b>=1&&a.b9.data[b-1|0]<=(a.b9.data[b]+a.b9.data[b+1|0]|0))&&!(b>=2&&a.b9.data[b-2|0]<=(a.b9.data[b]+a.b9.data[b-1|0]|0))){if(a.b9.data[b]>a.b9.data[b+1|0])break;}else if(a.b9.data[b-1|0]<a.b9.data[b+1|0])b=b+(-1)|0;M0(a,b);}}}
function TO(a){var b;while(a.di>1){b=a.di-2|0;if(b>0&&a.b9.data[b-1|0]<a.b9.data[b+1|0])b=b+(-1)|0;M0(a,b);}}
function M0(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.j4.data[b];d=a.b9.data[b];e=a.j4.data;f=b+1|0;g=e[f];h=a.b9.data[f];a.b9.data[b]=d+h|0;if(b==(a.di-3|0)){i=a.j4.data;e=a.j4.data;j=b+2|0;i[f]=e[j];a.b9.data[f]=a.b9.data[j];}a.di=a.di-1|0;k=Nz(a.fh.data[g],a.fh,c,d,0,a.is);j=c+k|0;l=d-k|0;if(!l)return;m=JR(a.fh.data[(j+l|0)-1|0],a.fh,g,h,h-1|0,a.is);if(!m)return;if(l>m)Ur(a,j,l,g,m);else Wg(a,j,l,g,m);}
function JR(b,c,d,e,f,g){var h,i,j,k,l,m,n,o;h=c.data;i=0;j=1;k=d+f|0;if(g.cW(b,h[k])>0){l=e-f|0;while(true){m=B9(j,l);if(m>=0)break;if(g.cW(b,h[k+j|0])<=0)break;n=(j<<1)+1|0;if(n>0){i=j;j=n;continue;}n=l;i=j;j=n;}if(m<=0)l=j;n=i+f|0;k=l+f|0;}else{l=f+1|0;while(true){n=B9(j,l);if(n>=0)break;if(g.cW(b,h[k-j|0])>0)break;n=(j<<1)+1|0;if(n>0){i=j;j=n;continue;}n=l;i=j;j=n;}if(n<=0)l=j;n=f-l|0;k=f-i|0;}n=n+1|0;while(n<k){o=n+((k-n|0)>>>1)|0;if(g.cW(b,h[d+o|0])>0){n=o+1|0;o=k;}k=o;}return k;}
function Nz(b,c,d,e,f,g){var h,i,j,k,l,m,n,o;h=c.data;i=1;j=0;k=d+f|0;if(g.cW(b,h[k])>=0){l=e-f|0;while(true){m=B9(i,l);if(m>=0)break;if(g.cW(b,h[k+i|0])<0)break;m=(i<<1)+1|0;if(m>0){j=i;i=m;continue;}m=l;j=i;i=m;}if(m<=0)l=i;m=j+f|0;n=l+f|0;}else{l=f+1|0;while(true){m=B9(i,l);if(m>=0)break;if(g.cW(b,h[k-i|0])>=0)break;m=(i<<1)+1|0;if(m>0){j=i;i=m;continue;}m=l;j=i;i=m;}if(m<=0)l=i;m=f-l|0;n=f-j|0;}m=m+1|0;while(m<n){o=m+((n-m|0)>>>1)|0;if(g.cW(b,h[d+o|0])<0)n=o;else m=o+1|0;}return n;}
function Wg(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;f=a.fh;g=f.data;h=Ok(a,c);X(f,b,h,0,c);i=0;j=b+1|0;k=d+1|0;g[b]=g[d];l=e+(-1)|0;if(!l){X(h,i,f,j,c);return;}if(c==1){m=h.data;X(f,k,f,j,l);g[j+l|0]=m[i];return;}n=a.is;o=a.lC;a:{b:while(true){p=0;q=0;r=j;s=k;t=i;while(true){m=h.data;if(n.cW(g[s],m[t])<0){j=r+1|0;k=s+1|0;g[r]=g[s];q=q+1|0;p=0;l=l+(-1)|0;if(!l)break a;s=k;i=t;}else{j=r+1|0;i=t+1|0;g[r]=m[t];p=p+1|0;q=0;c=c+(-1)|0;if(c==1){t=i;k=s;break a;}}if((p|q)>=o)break;r=j;t=i;}k=s;while(true){r
=Nz(g[k],h,i,c,0,n);if(!r){s=j;t=i;}else{X(h,i,f,j,r);j=j+r|0;t=i+r|0;c=c-r|0;if(c<=1)break a;s=j;}j=s+1|0;u=k+1|0;g[s]=g[k];l=l+(-1)|0;if(!l){k=u;break a;}s=JR(m[t],f,u,l,0,n);if(!s){v=j;k=u;}else{X(f,u,f,j,s);j=j+s|0;k=u+s|0;l=l-s|0;if(!l)break b;v=j;}j=v+1|0;i=t+1|0;g[v]=m[t];c=c+(-1)|0;if(c==1){t=i;break a;}o=o+(-1)|0;if(!((r<7?0:1)|(s<7?0:1)))break;}if(o<0)o=0;o=o+2|0;}}if(o<1)o=1;a.lC=o;if(c==1){X(f,k,f,j,l);g[j+l|0]=m[t];}else{if(!c)G(W(B(317)));X(h,t,f,j,c);}}
function Ur(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;f=a.fh;g=f.data;h=Ok(a,e);X(f,d,h,0,e);i=(b+c|0)-1|0;j=e-1|0;k=(d+e|0)-1|0;l=k+(-1)|0;m=i+(-1)|0;g[k]=g[i];n=c+(-1)|0;if(!n){X(h,0,f,l-j|0,e);return;}if(e==1){o=h.data;p=l-n|0;q=m-n|0;X(f,q+1|0,f,p+1|0,n);g[p]=o[j];return;}r=a.is;s=a.lC;a:{b:while(true){t=0;u=0;v=l;while(true){o=h.data;if(r.cW(o[j],g[m])<0){l=v+(-1)|0;q=m+(-1)|0;g[v]=g[m];t=t+1|0;u=0;n=n+(-1)|0;if(!n)break a;m=q;p=j;}else{l=v+(-1)|0;p=j+(-1)|0;g[v]=o[j];u=u+1|0;t=0;e=e+(-1)|0;if
(e==1){q=m;j=p;break a;}}if((t|u)>=s)break;v=l;j=p;}j=p;while(true){v=n-Nz(o[j],f,b,n,n-1|0,r)|0;if(!v){p=l;q=m;}else{l=l-v|0;q=m-v|0;n=n-v|0;X(f,q+1|0,f,l+1|0,v);if(!n)break a;p=l;}l=p+(-1)|0;m=j+(-1)|0;g[p]=o[j];e=e+(-1)|0;if(e==1){j=m;break a;}w=e-JR(g[q],h,0,e,e-1|0,r)|0;if(!w){p=l;j=m;}else{l=l-w|0;j=m-w|0;e=e-w|0;X(h,j+1|0,f,l+1|0,w);if(e<=1)break b;p=l;}l=p+(-1)|0;m=q+(-1)|0;g[p]=g[q];n=n+(-1)|0;if(!n){q=m;break a;}s=s+(-1)|0;if(!((v<7?0:1)|(w<7?0:1)))break;}if(s<0)s=0;s=s+2|0;}}if(s<1)s=1;a.lC=s;if(e
==1){p=l-n|0;q=q-n|0;X(f,q+1|0,f,p+1|0,n);g[p]=o[j];}else{if(!e)G(W(B(317)));X(h,0,f,l-(e-1|0)|0,e);}}
function Ok(a,b){var c,d;a.oO=Bf(a.oO,b);if(a.lw.data.length<b){c=b|b>>1;c=c|c>>2;c=c|c>>4;c=c|c>>8;c=c|c>>16;c=c+1|0;if(c>=0)b=Bq(c,a.fh.data.length>>>1);d=Y(C,b);a.lw=d;}return a.lw;}
function AKS(b,c,d){if(c<=d){if(c<0)G(AJ9(c));if(d<=b)return;G(AJ9(d));}G(W(((((((I()).a(B(318))).j(c)).a(B(319))).j(d)).a(B(24))).b()));}
var XE=D();
function BfF(b){var c,d,e,f,$$je;a:{try{c=BcZ(B(320));d=AOs();if(d!==null){e=d;ABr(new H0,e,c);}}catch($$e){$$je=R($$e);if($$je instanceof Db){f=$$je;break a;}else{throw $$e;}}return;}f.FF();G(f);}
function AOs(){return BfD();}
var Nl=D(0);
var Hf=D(Bm);
var GE=D(BT);
var BjU=null;function AJM(){AJM=N(GE);AVm();}
function BjV(){var a=new GE();Jg(a);return a;}
function BbD(a){var b=new GE();Pl(b,a);return b;}
function Jg(a){AJM();B_(a);a.dZ(X9(),1);}
function Pl(a,b){AJM();B_(a);}
function AVm(){BjU=BbD(0);}
function X9(){var jsObj=new Bullet.btCollisionWorld();return Bullet.getPointer(jsObj);}
var FT=D(GE);
var BjW=null;function AG$(){AG$=N(FT);AIv();}
function Bez(a){var b=new FT();Tn(b,a);return b;}
function BjX(){var a=new FT();HL(a);return a;}
function Tn(a,b){AG$();Jg(a);}
function HL(a){AG$();Jg(a);}
function A0w(a,b){return U8(a.bY,b);}
function AY6(a,b){var c,d;c=a.bY;d=b.de();Ux(c,d);}
function AXJ(a,b){var c,d;c=a.bY;d=b.de();Zz(c,d);}
function ASV(a,b){var c,d,e;Fl();Gq(b,Bg5);c=Bg5;d=a.bY;e=c.de();Qi(d,e);}
function AIv(){BjW=Bez(0);}
function U8(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btDynamicsWorld);var returnedJSObj=jsObj.stepSimulation(c);return returnedJSObj;}
function Ux(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btDynamicsWorld);jsObj.addRigidBody(c);}
function Zz(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btDynamicsWorld);jsObj.removeRigidBody(c);}
function Qi(b,c){var jsObj=Bullet.wrapPointer(b,Bullet.btDynamicsWorld);jsObj.setGravity(c);}
var GB=D();
var BjY=null;function UL(a){J(a);}
function DV(){return BjY;}
function AMc(b){BjY=b;}
var Xi=D();
function Nj(b){var c,d,e,f,g;if(b===null)return null;c=b.data;d=c.length;e=new Array(d);f=0;while(f<d){g=c[f];e[f]=g;f=f+1|0;}return e;}
function BP(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Gk(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function OX(){Q.call(this);this.QY=null;}
function Bew(a){var b=new OX();A62(b,a);return b;}
function A62(a,b){a.QY=b;Be(a);}
function AG2(a,b){return Uw(b);}
function C0(){var a=this;C.call(a);a.Az=null;a.M6=null;}
function GG(a,b,c){var d,e,f,g;d=c.data;J(a);LD(b);e=d.length;f=0;while(f<e){g=d[f];LD(g);f=f+1|0;}a.Az=b;a.M6=c.go();}
function LD(b){var c,d;if(b.bN())G(Yl(b));if(!AAX(b.f(0)))G(Yl(b));c=1;while(c<b.i()){a:{d=b.f(c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AAX(d))break a;else G(Yl(b));}}c=c+1|0;}}
function AAX(b){var c;a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}c=1;break a;}c=0;}return c;}
function OY(b){var c;if(b===null)G(W(B(321)));LD(b);c=(Vn()).W(b.F1());if(c!==null)return c;G(Bf4(b));}
function Z_(a){return a.Az;}
function ZK(a,b){var c,d,e,$$je;a:{try{c=a.lL();Di();d=BgV;d=Oc(c,d);c=BgV;d=Le(d,c);d=WW(d,b);}catch($$e){$$je=R($$e);if($$je instanceof D0){e=$$je;break a;}else{throw $$e;}}return d;}G(AZV(B(322),e));}
function UI(a,b){var c,d,e,$$je;a:{try{c=a.mw();Di();d=BgV;d=K2(c,d);c=BgV;d=LR(d,c);d=XW(d,b);}catch($$e){$$je=R($$e);if($$je instanceof D0){e=$$je;break a;}else{throw $$e;}}return d;}G(AZV(B(322),e));}
function RO(){var a=this;C0.call(a);a.uJ=0;a.s1=0;}
function RF(a,b,c){var d=new RO();AFb(d,a,b,c);return d;}
function AFb(a,b,c,d){GG(a,b,Y(BN,0));a.uJ=c;a.s1=d;}
function AKE(a){return Bdi(a,a.uJ,a.s1);}
function ADY(a){return Bdf(a,a.uJ,a.s1);}
var BZ=D();
function Bcg(){var a=new BZ();C7(a);return a;}
function C7(a){J(a);}
function AQw(a,b){}
function AWj(a,b){}
function PD(){var a=this;BZ.call(a);a.EL=null;a.rj=null;}
function A_1(a,b){var c=new PD();AY4(c,a,b);return c;}
function AY4(a,b,c){a.rj=b;a.EL=c;C7(a);}
function A4r(a,b){}
function AZn(a,b){(Eh()).gh((((I()).a(B(323))).a(a.EL)).b());}
function ANc(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=c.FE(B(324));e=d.data;f=new E5;g=e.length;Op(f,g);h=0;while(true){if(h>=g){i=0;while(i<f.h){j=f.l(i);if(a.rj.KS(j.sx)){j.J$=j.BN;j.JW=1;}else a.rj.Gn(1,j.sx,j.D1,j.xA,Ba8(a));i=i+1|0;}return 0;}k=e[h];l=k.FE(B(13));m=l.data;if(m.length!=4)break;H3();n=BjZ;if(m[0].z(B(325)))n=Bj0;if(m[0].z(B(326)))n=Bj1;if(m[0].z(B(327)))n=Bj2;if(m[0].z(B(135)))n=Bj3;o=ACe(m[2]);if(n===Bj2&&!(CD()).ON())o=Ba;f.F(Beb(m[1].MN(),n,o,m[3]));h=h+1|0;}G(U(B(328)));}
function AFH(a,b,c){return a.Jd(b,c);}
var PU=D();
function A$t(b){var c,d,e,f,g,h,i,j,k;c=Bcb(b.ry());d=Wx(c);e=Bc(d*2|0);f=0;g=0;h=0;i=0;while(i<d){j=e.data;g=g+Pc(c)|0;h=h+Pc(c)|0;k=f+1|0;j[f]=g;f=k+1|0;j[k]=h;i=i+1|0;}return e;}
function I$(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function AUe(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=Y(Ms,16384);d=Cj(16384);e=0;f=0;g=0;h=0;while(h<b.i()){i=I$(b.f(h));if(i==64){h=h+1|0;i=I$(b.f(h));j=0;k=1;l=0;while(l<3){h=h+1|0;m=I$(b.f(h));j=j|Cg(k,m);k=k*64|0;l=l+1|0;}}else if(i<32)j=1;else{i=(i-32|0)<<24>>24;h=h+1|0;j=I$(b.f(h));}if(!i&&j>=128){if(e>0){n=c.data;o=f+1|0;n[f]=AIA(g,g+e|0,Oh(d,e));f=o;}g=g+(e+j|0)|0;e=0;}else{p=d.data;o=e+j|0;if(o<p.length)q=f;else{n=c.data;q=f+1|0;n[f]=AIA(g,g+e|0,Oh(d,e));g=g+o|0;e=0;}while(true){o=j+(-1)|0;if(j<=0)break;r
=e+1|0;p[e]=i;e=r;j=o;}f=q;}h=h+1|0;}return I8(c,f);}
var Hi=D(0);
function Sh(){var a=this;C.call(a);a.wP=null;a.wQ=null;a.wN=0;a.wO=null;}
function BcP(a,b,c,d){var e=new Sh();A0l(e,a,b,c,d);return e;}
function A0l(a,b,c,d,e){J(a);a.wP=b;a.wQ=c;a.wN=d;a.wO=e;}
function AKA(a){ANk(a.wP,a.wQ,a.wN,a.wO);}
function PE(){var a=this;BZ.call(a);a.o8=null;a.BX=null;a.EO=null;}
function BbQ(a,b,c){var d=new PE();AVN(d,a,b,c);return d;}
function AVN(a,b,c,d){a.EO=b;a.o8=c;a.BX=d;C7(a);}
function A4d(a,b){a.o8.ek(b);}
function A3g(a,b){a.o8.ck(b);}
function A7w(a,b,c){var d;d=a.EO;H3();d.yI(Bj1,a.BX,c);a.o8.ct(b,c);return 0;}
function A8u(a,b,c){return a.hY(b,c);}
var LC=D(0);
function W0(){C.call(this);this.mf=null;}
function BcX(a){var b=new W0();ANJ(b,a);return b;}
function ANJ(a,b){a.mf=b;J(a);}
function A0x(a,b){a.mf.gW.fx();QL(b,a.mf.gW);a.mf.In(a.mf.gW);}
function A4m(a,b){a.PK(b);}
function PF(){var a=this;BZ.call(a);a.m9=null;a.BT=null;a.EA=null;a.wr=null;}
function BcJ(a,b,c,d){var e=new PF();AD1(e,a,b,c,d);return e;}
function AD1(a,b,c,d,e){a.wr=b;a.m9=c;a.BT=d;a.EA=e;C7(a);}
function ALE(a,b){a.m9.ek(b);}
function A7D(a,b){a.m9.ck(b);}
function APo(a,b,c){a.wr.yI(a.BT,a.EA,c);a.m9.ct(b,c);return 0;}
var J5=D();
var Bj4=null;function Bd2(){Bd2=N(J5);AQg();}
function AQg(){Bj4=Bc((Mi()).data.length);Bj4.data[BC(BjZ)]=1;Bj4.data[BC(Bj0)]=2;Bj4.data[BC(Bj1)]=3;Bj4.data[BC(Bj2)]=4;Bj4.data[BC(Bj3)]=5;}
var ABG=D();
function A5w(b,c){if(b===c)return 1;return b!==null?b.z(c):c!==null?0:1;}
function Uv(){C.call(this);this.cf=null;}
function APj(){var a=new Uv();A6S(a);return a;}
function A_D(b){if(b<0.0)b=0.0;else if(b>1.0)b=1.0;return b;}
function A6S(a){J(a);a.cf=Ca(18);}
function AWZ(a,b){return a.Qe(b.s,b.r,b.t);}
function AV7(a,b,c,d){var e;e=0;while(e<18){a.cf.data[e]=b;a.cf.data[e+1|0]=c;a.cf.data[e+2|0]=d;e=e+3|0;}return a;}
function A$j(a){var b;b=0;while(b<a.cf.data.length){a.cf.data[b]=A_D(a.cf.data[b]);b=b+1|0;}return a;}
function A75(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s;h=e*e;i=f*f;j=g*g;k=h+i+j;if(k===0.0)return a;l=1.0/k*(k+1.0);m=b*l;n=c*l;o=d*l;p=e<=0.0?3:0;q=a.cf.data;q[p]=q[p]+h*m;q=a.cf.data;r=p+1|0;q[r]=q[r]+h*n;q=a.cf.data;r=p+2|0;q[r]=q[r]+h*o;r=f<=0.0?9:6;q=a.cf.data;q[r]=q[r]+i*m;q=a.cf.data;s=r+1|0;q[s]=q[s]+i*n;q=a.cf.data;r=r+2|0;q[r]=q[r]+i*o;r=g<=0.0?15:12;q=a.cf.data;q[r]=q[r]+j*m;q=a.cf.data;s=r+1|0;q[s]=q[s]+j*n;q=a.cf.data;r=r+2|0;q[r]=q[r]+j*o;return a;}
function A4g(a,b,c){return a.EZ(b.s,b.r,b.t,c.n,c.o,c.q);}
function AF2(a,b,c,d,e){var f;f=e/(1.0+d.GR(c));return a.EZ(b.s*f,b.r*f,b.t*f,d.n-c.n,d.o-c.o,d.q-c.q);}
var H8=D(Ja);
function BeG(){var a=new H8();Rv(a);return a;}
function Rv(a){Qb(a);}
function QV(a){return (P5(a)).bF(48,57);}
var JI=D(H8);
function Bdw(){var a=new JI();S_(a);return a;}
function S_(a){Rv(a);}
function Vr(a){return (((QV(a)).bF(33,64)).bF(91,96)).bF(123,126);}
var Zc=D(JI);
function Bdm(){var a=new Zc();AQ0(a);return a;}
function AQ0(a){S_(a);}
function AM5(a){return (Vr(a)).cG(32);}
var AAY=D(T);
function Bfy(){var a=new AAY();A4L(a);return a;}
function A4L(a){Bo(a);}
function ARO(a){return BcF(a);}
var YW=D(Dr);
function Bap(a,b){var c=new YW();AQ9(c,a,b);return c;}
function AQ9(a,b,c){Gc(a,b,c);}
function AGe(a,b,c,d){var e,f,g,h,i;e=a.bQ.df();f=!d.lI()?d.dI():0;a:{g=a.k.e(b,c,d);if(g>=0){d.by(a.bm,b);h=0;while(true){if(h>=e)break a;i=a.bQ.l(h);if(i.cI(f,b,c,d)>=0){d.by(a.bm,(-1));return g;}h=h+1|0;}}}return (-1);}
function A_F(a,b){return 0;}
function AN_(a){return B(329);}
function Zf(){var a=this;BJ.call(a);a.cz=null;a.tD=null;a.rP=null;}
function Ba6(a){var b=new Zf();AYN(b,a);return b;}
function AYN(a,b){var c;C2(a);a.cz=b.b();a.bO=b.i();a.tD=A4Y(a.bO);a.rP=A4Y(a.bO);c=0;while(c<(a.bO-1|0)){a.tD.os(a.cz.f(c),(a.bO-c|0)-1|0);a.rP.os(a.cz.f((a.bO-c|0)-1|0),(a.bO-c|0)-1|0);c=c+1|0;}}
function AG9(a,b,c){return !a.vc(c,b)?(-1):a.bO;}
function AWO(a,b,c,d){var e,f;e=d.J();while(true){if(b>e)return (-1);f=a.Oc(c,b,e);if(f<0)return (-1);if(a.k.e(f+a.bO|0,c,d)>=0)break;b=f+1|0;}return f;}
function A0z(a,b,c,d,e){var f;while(true){if(c<b)return (-1);f=a.LI(d,b,c);if(f<0)return (-1);if(a.k.e(f+a.bO|0,d,e)>=0)break;c=f+(-1)|0;}return f;}
function AOy(a){return (((I()).a(B(330))).a(a.cz)).b();}
function AJX(a,b){var c,d,e,f,g;if(b instanceof Dz)return b.ps()!=a.cz.f(0)?0:1;if(b instanceof Dx)return b.bH(0,a.cz.ce(0,1))<=0?0:1;if(!(b instanceof C4)){if(!(b instanceof Dv))return 1;a:{if(a.cz.i()>1){c=b;d=c.sT();e=a.cz.f(0);c=a.cz;f=c.f(1);if(d==Dh(e,f)){e=1;break a;}}e=0;}return e;}b:{c:{c=b;if(!c.p(a.cz.f(0))){g=a.cz;if(g.i()<=1)break c;g=a.cz;e=Dh(g.f(0),a.cz.f(1));if(!c.p(e))break c;}e=1;break b;}e=0;}return e;}
function A9f(a,b,c,d){var e,f;e=a.cz.f(a.bO-1|0);while(true){if(c>(d-a.bO|0))return (-1);f=b.f((c+a.bO|0)-1|0);if(f==e&&a.vc(b,c))break;c=c+a.tD.b2(f)|0;}return c;}
function A8o(a,b,c,d){var e,f,g,h;e=a.cz.f(0);f=b.i();g=(f-d|0)-a.bO|0;if(g<=0)d=d+g|0;while(true){if(d<c)return (-1);h=b.f(d);if(h==e&&a.vc(b,d))break;d=d-a.rP.b2(h)|0;}return d;}
function AKk(a,b,c){var d;d=0;while(d<a.bO){if(b.f(d+c|0)!=a.cz.f(d))return 0;d=d+1|0;}return 1;}
var RG=D(C0);
function Bb5(){var a=new RG();AIF(a);return a;}
function AIF(a){GG(a,B(331),Y(BN,0));}
function AXK(a){return Bfs(a);}
function AUH(a){return Bej(a);}
function Ne(){var a=this;C.call(a);a.cP=null;a.b8=0;}
var Bj5=null;function C5(){C5=N(Ne);A4A();}
function ATn(a){var b=new Ne();XL(b,a);return b;}
function Wn(b,c){var d;C5();d=b>=0?1:2;while(true){b=b/c|0;if(!b)break;d=d+1|0;}return d;}
function XL(a,b){C5();J(a);if(b>=0){a.cP=BW(b);return;}G(A9L());}
function IP(a,b){var c,d;c=((a.cP.data.length>>1)+a.cP.data.length|0)+2|0;if(b>c)c=b;d=BW(c);X(a.cP,0,d,0,a.b8);a.cP=d;}
function N4(a){var b,c,d,e;b=a.b8+4|0;if(b>a.cP.data.length)IP(a,b);c=a.cP.data;d=a.b8;a.b8=d+1|0;c[d]=110;c=a.cP.data;e=a.b8;a.b8=e+1|0;c[e]=117;c=a.cP.data;e=a.b8;a.b8=e+1|0;c[e]=108;c=a.cP.data;e=a.b8;a.b8=e+1|0;c[e]=108;}
function CJ(a,b){var c,d;if(a.b8==a.cP.data.length)IP(a,a.b8+1|0);c=a.cP.data;d=a.b8;a.b8=d+1|0;c[d]=b;}
function IH(a,b){var c,d;if(b===null){N4(a);return;}c=b.i();d=a.b8+c|0;if(d>a.cP.data.length)IP(a,d);b.pv(0,c,a.cP,a.b8);a.b8=d;}
function AD5(a){if(!a.b8)return B(101);return F1(a.cP,0,a.b8);}
function APt(a,b){CJ(a,b);return a;}
function AP5(a,b){return a.GU(b,0);}
function AGM(a,b,c){return a.P4(b,c,48);}
function AEi(a,b,c,d){var e;if(b==(-2147483648)){IH(a,B(332));return a;}if(b<0){CJ(a,45);b= -b|0;}a:{if(c>1){e=c-Wn(b,10)|0;while(true){if(e<=0)break a;a.ly(d);e=e+(-1)|0;}}}if(b>=10000){if(b>=1000000000){C5();CJ(a,Bj5.data[Cp(E_(AU$(O(b),Cd(1410065408, 2)),O(1000000000)))]);}if(b>=100000000){C5();CJ(a,Bj5.data[(b%1000000000|0)/100000000|0]);}if(b>=10000000){C5();CJ(a,Bj5.data[(b%100000000|0)/10000000|0]);}if(b>=1000000){C5();CJ(a,Bj5.data[(b%10000000|0)/1000000|0]);}if(b>=100000){C5();CJ(a,Bj5.data[(b%1000000
|0)/100000|0]);}C5();CJ(a,Bj5.data[(b%100000|0)/10000|0]);}if(b>=1000){C5();CJ(a,Bj5.data[(b%10000|0)/1000|0]);}if(b>=100){C5();CJ(a,Bj5.data[(b%1000|0)/100|0]);}if(b>=10){C5();CJ(a,Bj5.data[(b%100|0)/10|0]);}C5();CJ(a,Bj5.data[b%10|0]);return a;}
function A3G(a,b){if(b===null)N4(a);else IH(a,b.b());return a;}
function A0O(a,b){IH(a,b);return a;}
function A4A(){Bj5=I5([48,49,50,51,52,53,54,55,56,57]);}
var DD=D();
var BgZ=0;var Bg0=0;var Bj6=0;var Bj7=null;var Bj8=null;var Bj9=null;var Bj$=null;function Lo(){Lo=N(DD);AYT();}
function XV(){Lo();AA7(0);}
function AA7(b){Lo();ABT(b,1);}
function ABT(b,c){var d;Lo();if(Bj6)return;Bj6=1;BgZ=b;Bg0=c;d=Bullet.MyClassHelper.prototype.getBTVersion();if(d==285)return;G(U(((((((I()).a(B(333))).j(d)).a(B(334))).j(285)).a(B(24))).b()));}
function AYT(){BgZ=0;Bg0=1;Bj6=0;Bj7=BaX();Bj8=Bp();Bj9=BL();Bj$=BL();}
var Ud=D(Bm);
function Qy(){var a=new Ud();AZ2(a);return a;}
function AZ2(a){Cx(a);}
var Mz=D(B5);
function Ex(a,b){var c=new Mz();A7a(c,a,b);return c;}
function A7a(a,b,c){JV(a,b,c);}
var FP=D(CI);
function Bge(a,b,c){var d=new FP();Mk(d,a,b,c);return d;}
function Mk(a,b,c,d){Fd(a,b,c,d);}
function A74(a,b,c,d){var e;if(!a.Y.ba(d))return a.k.e(b,c,d);e=a.Y.e(b,c,d);if(e>=0)return e;return a.k.e(b,c,d);}
function A9E(a,b){LK(a,b);a.Y.Q(b);}
var Ih=D(0);
function NT(){var a=this;C.call(a);a.dA=null;a.lg=null;a.uh=null;a.nG=null;a.wC=0;a.nB=0;a.tp=0;a.FS=0;a.eb=0;a.ID=0;a.N6=0;a.d5=0;a.PU=0;a.hv=0;a.u0=0;}
function Bj_(a,b,c,d,e,f){var g=new NT();Sn(g,a,b,c,d,e,f);return g;}
function Sn(a,b,c,d,e,f,g){var h;J(a);a.hv=(-1);h=e+1|0;a.wC=h;a.dA=Bc(h*2|0);a.lg=Bc(g);IG(a.lg,(-1));if(f>0)a.uh=Bc(f);IG(a.dA,(-1));a.tI(b,c,d);}
function ASd(a,b,c){a.lg.data[b]=c;}
function A3a(a,b){return a.lg.data[b];}
function AUI(a){return a.pc(0);}
function ALL(a,b){Nd(a,b);return a.dA.data[(b*2|0)+1|0];}
function AYw(a,b,c){a.dA.data[b*2|0]=c;}
function AWP(a,b,c){a.dA.data[(b*2|0)+1|0]=c;}
function A6p(a,b){return a.dA.data[b*2|0];}
function APB(a,b){return a.dA.data[(b*2|0)+1|0];}
function AEI(a,b){if(a.lD(b)<0)return null;return (a.nG.d_(a.lD(b),a.pc(b))).b();}
function A2m(a,b){var c,d;c=a.jq(b);d=a.nE(b);if((d|c|(d-c|0))>=0&&d<=a.nG.i())return (a.nG.d_(c,d)).b();return null;}
function APu(a){return a.lD(0);}
function AGs(a,b){Nd(a,b);return a.dA.data[b*2|0];}
function AMF(a){if(a.dA.data[0]==(-1)){a.dA.data[0]=a.eb;a.dA.data[1]=a.eb;}a.hv=a.pQ();}
function AVb(a,b){return a.uh.data[b];}
function AXX(a,b,c){a.uh.data[b]=c;}
function Nd(a,b){if(!a.nB)G(GX());if(b>=0&&b<a.wC)return;G(Bg(Ji(b)));}
function A9O(a){a.nB=1;}
function A9Q(a){return a.nB;}
function A$H(a,b,c,d){a.nB=0;a.u0=2;IG(a.dA,(-1));IG(a.lg,(-1));if(b!==null)a.nG=b;if(c>=0)Uj(a,c,d);a.eb=a.tp;}
function AG3(a){a.tI(null,(-1),(-1));}
function Uj(a,b,c){a.tp=b;a.FS=c;}
function A7n(a,b){a.eb=b;if(a.hv>=0)b=a.hv;a.hv=b;}
function AXn(a){return a.tp;}
function A3z(a){return a.FS;}
function AZb(a,b){a.u0=b;}
function AIW(a){return a.u0;}
function A1h(a){return a.N6;}
function AU_(a){return a.ID;}
function AV5(a){return a.hv;}
function Q0(){var a=this;C.call(a);a.dy=null;a.cS=null;a.da=null;a.cw=null;a.dJ=null;a.kP=null;a.BS=null;}
function A_7(){var a=new Q0();A33(a);return a;}
function A33(a){J(a);a.dy=BL();a.cS=A8M();}
function PX(){var a=this;BJ.call(a);a.t8=null;a.xs=0;}
function AJO(a){var b=new PX();AN3(b,a);return b;}
function AN3(a,b){C2(a);a.t8=b.mh();a.xs=b.bD;}
function A2u(a,b,c){var d,e;d=a.t8;e=DB(c.f(b));return !d.p(Dq(e))?(-1):1;}
function AXc(a){return ((((I()).a(B(335))).a(!a.xs?B(56):B(57))).a(a.t8.b())).b();}
function JB(){var a=this;C.call(a);a.e0=0;a.te=0;a.tf=0;a.cv=0;a.cN=0;a.vG=0.0;a.p9=0.0;a.Bo=0.0;a.tl=0.0;a.dr=0;a.jg=0;a.gz=0;a.iH=null;a.op=0;a.jX=0;}
function AFC(){var a=new JB();A76(a);return a;}
function A76(a){J(a);a.jX=0;}
function A2O(a,b){var c;if(a.iH!==null){c=a.iH.data[b>>>9];if(c!==null)return c.data[b&511];}return 0;}
function A6j(a,b,c){var d,e,f;if(a.iH===null)a.iH=Y($rt_arraycls($rt_bytecls()),128);d=a.iH.data;e=b>>>9;f=d[e];if(f===null){d=a.iH.data;f=Cj(512);d[e]=f;}f.data[b&511]=c<<24>>24;}
function AJB(a){return Il(a.e0&65535);}
function Vm(){BZ.call(this);this.IH=null;}
function Bf7(a){var b=new Vm();AWw(b,a);return b;}
function AWw(a,b){a.IH=b;C7(a);}
function A8c(a,b,c){A9H(BcQ(a));return 1;}
function AH0(a,b){(CD()).eu();}
function Vk(){var a=this;BZ.call(a);a.DK=null;a.uV=null;}
function Ba0(a,b){var c=new Vk();ASi(c,a,b);return c;}
function ASi(a,b,c){a.uV=b;a.DK=c;C7(a);}
function AOZ(a,b,c){a.uV.ui=1;return 1;}
function A3K(a,b){(CD()).eu();AFc(a.uV,a.DK);}
function VB(){Q.call(this);this.FZ=null;}
function BbN(a){var b=new VB();ALf(b,a);return b;}
function ALf(a,b){a.FZ=b;Be(a);}
function A$5(a,b){return UX(b);}
function Vl(){BZ.call(this);this.HN=null;}
function A__(a){var b=new Vl();AWE(b,a);return b;}
function AWE(a,b){a.HN=b;C7(a);}
function AKB(a,b,c){var d;d=Wr(c);AVt(d,BeL(a));return 1;}
function A7T(a,b){(CD()).eu();}
function AUG(a,b,c){return a.hY(b,c);}
var KJ=D(Bm);
function Jd(a,b){var c=new KJ();AD8(c,a,b);return c;}
function U(a){var b=new KJ();QC(b,a);return b;}
function AD8(a,b,c){P1(a,b,c);}
function QC(a,b){EF(a,b);}
function Fo(){var a=this;C.call(a);a.ej=0;a.pb=0;a.lV=null;a.lq=null;a.oz=null;a.nm=null;a.mD=0.0;}
var Bka=0.0;function NZ(){NZ=N(Fo);AJV();}
function KC(a,b,c){NZ();J(a);P6();a.lV=Bkb;a.lq=Bkb;AUF();a.oz=Bkc;a.nm=Bkc;a.mD=1.0;a.ej=b;a.pb=c;}
function A3Z(a){Bio.sE(a.ej,a.pb);}
function ARg(a,b){Bio.rF(33984+b|0);Bio.sE(a.ej,a.pb);}
function AJg(a){return a.pb;}
function ASI(a,b,c){a.ww(b,c,0);}
function AOX(a,b,c,d){if(b!==null&&!(!d&&a.oz===b)){Bio.ji(a.ej,10242,G8(b));a.oz=b;}if(c!==null&&!(!d&&a.nm===c)){Bio.ji(a.ej,10243,G8(c));a.nm=c;}}
function AE2(a,b,c){a.Dn(b,c,0);}
function ADC(a,b,c,d){if(b!==null&&!(!d&&a.lV===b)){Bio.ji(a.ej,10241,EE(b));a.lV=b;}if(c!==null&&!(!d&&a.lq===c)){Bio.ji(a.ej,10240,EE(c));a.lq=c;}}
function AZX(a,b,c){a.lV=b;a.lq=c;a.ew();Bio.ji(a.ej,10241,EE(b));Bio.ji(a.ej,10240,EE(c));}
function AIX(a,b,c){var d,e;d=Yw();if(d===1.0)return 1.0;e=Ju(b,d);if(!c&&SK(e,a.mD,0.10000000149011612))return a.mD;Bip.OY(3553,34046,e);a.mD=e;return e;}
function Yw(){var b,c;NZ();if(Bka>0.0)return Bka;if(!Bil.tY(B(336))){Bka=1.0;return 1.0;}b=HX(16);b.cZ(0);b.cm(CV(b));Bip.ML(34047,b);c=b.oa(0);Bka=c;return c;}
function ACu(b,c){NZ();ACs(b,c,0);}
function ACs(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;NZ();if(c===null)return;if(!c.x3())c.zY();e=c.Ol();O5();if(e===Big){c.Hc(b);return;}f=c.Qw();g=c.Fm();if(c.f8()===f.f8())h=f;else{h=O0(f.bo(),f.bl(),c.f8());Gv();h.D5(BjK);h.zh(f,0,0,0,0,f.bo(),f.bl());if(c.Fm())f.iz();g=1;}Bio.GP(3317,1);if(c.QR())AAW(b,h,h.bo(),h.bl());else{i=Bio;j=h.ky();k=h.bo();l=h.bl();m=h.l0();n=h.le();o=h.kA();i.kB(b,d,j,k,l,0,m,n,o);}if(g)h.iz();}
function AJV(){Bka=0.0;}
function LF(){Fo.call(this);this.hP=null;}
var Bkd=null;function FY(){FY=N(LF);A6A();}
function Bes(a){var b=new LF();YZ(b,a);return b;}
function ARL(a,b){var c=new LF();AAv(c,a,b);return c;}
function Bke(a,b,c){var d=new LF();H$(d,a,b,c);return d;}
function Bkf(a){var b=new LF();JM(b,a);return b;}
function Bkg(a,b,c){var d=new LF();NH(d,a,b,c);return d;}
function YZ(a,b){FY();H$(a,b,null,0);}
function AAv(a,b,c){FY();H$(a,b,null,c);}
function H$(a,b,c,d){FY();JM(a,AS3(b,c,d));}
function JM(a,b){FY();NH(a,3553,Bio.Ja(),b);}
function NH(a,b,c,d){FY();KC(a,b,c);a.Nd(d);if(d.qH())Pq(Bg1,a);}
function AR_(a,b){if(a.hP!==null&&b.qH()!=a.hP.qH())G(U(B(337)));a.hP=b;if(!b.x3())b.zY();a.ew();ACu(3553,b);a.Dn(a.lV,a.lq,1);a.ww(a.oz,a.nm,1);a.P8(a.mD,1);Bio.sE(a.ej,0);}
function AOd(a){return a.hP.bo();}
function A8Q(a){return a.hP.bl();}
function ANu(a){if(!(a.hP instanceof Ho))return PW(a);return a.hP.b();}
function Pq(b,c){var d;FY();d=Bkd.W(b);if(d===null)d=Bp();d.F(c);Bkd.x(b,d);}
function A6A(){Bkd=C6();}
var LB=D(0);
function W1(){C.call(this);this.mq=null;}
function Bcd(a){var b=new W1();ANe(b,a);return b;}
function ANe(a,b){a.mq=b;J(a);}
function A4N(a,b){a.mq.gW.fx();a.mq.Q0(a.mq.gW);SL(a.mq.gW,b);}
function ATJ(a,b){a.Nt(b);}
var WL=D();
function ADy(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function A4K(b,c){return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&AAa(b.constructor,c)?1:0;}
function AAa(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AAa(d[e],c))return 1;e=e+1|0;}return 0;}
function Bdv(b){b.fe();}
function AMJ(b){AQF(b,0);}
function AQF(b,c){return setTimeout(function(){Bdv(b);},c);}
function ADj(){return ALs();}
function AA9(b){return A0j(String.fromCharCode(b));}
function A7X(b){return b.$meta.primitive?1:0;}
function ACy(b){return b.$meta.item;}
function AQB(b){return $rt_str(b.$meta.name);}
function ALs(){return [];}
function F5(){C.call(this);this.Kz=null;}
var BgW=null;var BgV=null;var BgU=null;function Di(){Di=N(F5);AMP();}
function Uq(a){var b=new F5();AAR(b,a);return b;}
function AAR(a,b){Di();J(a);a.Kz=b;}
function AMP(){BgW=Uq(B(338));BgV=Uq(B(339));BgU=Uq(B(340));}
function Ge(){C.call(this);this.zZ=0;}
var Bkh=null;var Bki=null;var Bkj=null;function A_0(){A_0=N(Ge);AWT();}
function AO2(a){var b=new Ge();S0(b,a);return b;}
function S0(a,b){A_0();J(a);a.zZ=b;}
function A0U(a){return a.zZ;}
function AWT(){Bkh=AO2(1);Bki=AO2(0);Bkj=F($rt_booleancls());}
var C3=D(Bm);
function CL(){var a=new C3();FX(a);return a;}
function W(a){var b=new C3();ACW(b,a);return b;}
function FX(a){Cx(a);}
function ACW(a,b){EF(a,b);}
function Tv(){C3.call(this);this.Gy=null;}
function Yl(a){var b=new Tv();ARh(b,a);return b;}
function ARh(a,b){FX(a);a.Gy=b;}
function Ub(){var a=this;C.call(a);a.bA=null;a.kt=0;a.f3=null;a.ec=null;a.bM=null;a.bL=null;a.o3=null;a.o4=null;a.nv=null;a.mG=0;a.lx=null;a.nH=0;a.ok=null;a.oD=null;a.bB=null;a.fi=Ba;a.ju=0;}
function BaG(a){var b=new Ub();AHQ(b,a);return b;}
function AJ8(b){var c,d,e,f,g;c=AWo();d=0.0;e=b.detail;f=b.wheelDelta;if(c.firefox?1:0)d=(c.macOS?1:0)?1.0*e:1.0*e/3.0;else if(c.opera?1:0)d=!(c.linux?1:0)?(-1.0)*f/40.0:(-1.0)*f/80.0;else if(!(!(c.chrome?1:0)&&!(c.safari?1:0)&&!(c.IE?1:0))){d=(-1.0)*f;g=d/120.0;if(CH(g)>=1.0)d=g;else if(!(c.windows?1:0))d=!(c.macOS?1:0)?g:d/3.0;}return d;}
function AHQ(a,b){J(a);a.kt=0;a.f3=BdE(20);a.ec=OC(20);a.bM=Bc(20);a.bL=Bc(20);a.o3=Bc(20);a.o4=Bc(20);a.nv=BfU();a.mG=0;a.lx=OC(256);a.nH=0;a.ok=OC(256);a.oD=OC(5);a.ju=1;a.bA=b;Y7(a);}
function Y7(a){var b;b=a.bA.ownerDocument;b.addEventListener("mousedown",BP(a,"handleEvent"),!!0);b.addEventListener("mouseup",BP(a,"handleEvent"),!!0);b.addEventListener("mousemove",BP(a,"handleEvent"),!!0);b.addEventListener("wheel",BP(a,"handleEvent"),!!0);b.addEventListener("keydown",BP(a,"handleEvent"),!!0);b.addEventListener("keyup",BP(a,"handleEvent"),!!0);b.addEventListener("keypress",BP(a,"handleEvent"),!!0);a.bA.addEventListener("touchstart",BP(a,"handleEvent"),!!1);a.bA.addEventListener("touchmove",
BP(a,"handleEvent"),!!1);a.bA.addEventListener("touchcancel",BP(a,"handleEvent"),!!1);a.bA.addEventListener("touchend",BP(a,"handleEvent"),!!1);}
function A2D(a,b){ACJ(a,b);YG(a,b);}
function ACJ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;a:{c=$rt_str(b.type);if(c.z(B(341))){d=b;e=b.target;f=a.bA;g=e!==f?0:1;if(g&&!a.ec.data[0]){a.ju=1;a.kt=1;a.ec.data[0]=1;h=Js(d.button);a.nv.JC(h);a.oD.data[h]=1;a.o3.data[0]=0;a.o4.data[0]=0;if(!a.sn()){i=a.ko(d,a.bA);j=a.kg(d,a.bA);a.bM.data[0]=i;a.bL.data[0]=j;}else{k=a.bM.data;k[0]=k[0]+Ff(a,d)|0;k=a.bL.data;k[0]=k[0]+EQ(a,d)|0;}a.fi=CE();if(a.bB!==null)a.bB.iq(a.bM.data[0],a.bL.data[0],0,Js(d.button));b.preventDefault();b.stopPropagation();break a;}l
=a.ko(d,a.bA);m=a.kg(d,a.bA);if(!(l>=0.0&&l<=Bil.bo()&&m>=0.0&&m<=Bil.bl()))a.ju=0;return;}if(c.z(B(342))){d=b;if(!a.ec.data[0])return;a.nv.Nc(Js(d.button));k=a.ec;k.data[0]=a.nv.ex<=0?0:1;if(a.sn()){a.g5(0,Ff(a,d)|0,EQ(a,d)|0);k=a.bM.data;k[0]=k[0]+Ff(a,d)|0;k=a.bL.data;k[0]=k[0]+EQ(a,d)|0;}else{a.g5(0,a.ko(d,a.bA)-a.bM.data[0]|0,a.kg(d,a.bA)-a.bL.data[0]|0);a.bM.data[0]=a.ko(d,a.bA);a.bL.data[0]=a.kg(d,a.bA);}a.fi=CE();a.ec.data[0]=0;if(a.bB!==null)a.bB.hQ(a.bM.data[0],a.bL.data[0],0,Js(d.button));}else if
(!c.z(B(343))){if(c.z(B(344))){n=b;if(a.bB!==null){o=AJ8(n);a.bB.oJ(0.0,o|0);}a.fi=CE();}else if(c.z(B(345))){a.kt=1;p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;v=a.f3;w=ABk(a);v.Ln(u,Bn(w));a.ec.data[w]=1;a.bM.data[w]=a.my(t,a.bA);a.bL.data[w]=a.kI(t,a.bA);a.o3.data[w]=0;a.o4.data[w]=0;if(a.bB!==null)a.bB.iq(a.bM.data[w],a.bL.data[w],w,0);r=r+1|0;}a.fi=CE();b.preventDefault();}}else{d=b;if(a.sn()){a.g5(0,Ff(a,d)|0,EQ(a,d)|0);k=a.bM.data;k[0]=k[0]+Ff(a,d)|0;k=a.bL.data;k[0]=k[0]
+EQ(a,d)|0;}else{i=a.ko(d,a.bA);j=a.kg(d,a.bA);a.g5(0,i-a.bM.data[0]|0,j-a.bL.data[0]|0);a.bM.data[0]=i;a.bL.data[0]=j;}a.fi=CE();if(a.bB!==null){if(!a.ec.data[0])a.bB.na(a.bM.data[0],a.bL.data[0]);else a.bB.i_(a.bM.data[0],a.bL.data[0],0);}}}if(c.z(B(346))){p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;x=(a.f3.l(u)).lm();a.g5(x,a.my(t,a.bA)-a.bM.data[x]|0,a.kI(t,a.bA)-a.bL.data[x]|0);a.bM.data[x]=a.my(t,a.bA);a.bL.data[x]=a.kI(t,a.bA);if(a.bB!==null)a.bB.i_(a.bM.data[x],a.bL.data[x],
x);r=r+1|0;}a.fi=CE();b.preventDefault();}if(c.z(B(347))){p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;x=(a.f3.l(u)).lm();a.f3.mC(u);a.ec.data[x]=0;i=a.my(t,a.bA);j=a.kI(t,a.bA);a.g5(x,i-a.bM.data[x]|0,j-a.bL.data[x]|0);a.bM.data[x]=i;a.bL.data[x]=j;if(a.bB!==null)a.bB.hQ(a.bM.data[x],a.bL.data[x],x,0);r=r+1|0;}a.fi=CE();b.preventDefault();}if(c.z(B(348))){p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;x=(a.f3.l(u)).lm();a.f3.mC(u);a.ec.data[x]=0;i
=a.my(t,a.bA);j=a.kI(t,a.bA);a.g5(x,i-a.bM.data[x]|0,j-a.bL.data[x]|0);a.bM.data[x]=i;a.bL.data[x]=j;if(a.bB!==null)a.bB.hQ(a.bM.data[x],a.bL.data[x],x,0);r=r+1|0;}a.fi=CE();b.preventDefault();}}
function YG(a,b){var c,d,e,f,g;c=$rt_str(b.type);if(!(c.z(B(349))&&a.ju)){if(c.z(B(350))&&a.ju){d=b.charCode&65535;if(a.bB!==null)a.bB.ls(d);}else if(c.z(B(351))&&a.ju){e=Sm(b.keyCode);if(a.lx.data[e]){a.mG=a.mG-1|0;a.lx.data[e]=0;}if(a.bB!==null)a.bB.oF(e);}}else{a:{f=b;e=Sm(f.keyCode);g=0;switch(e){case 67:g=8;break a;case 112:g=127;break a;default:}}if(!(e!=67&&e!=112)){b.preventDefault();if(a.bB!==null){a.bB.lH(e);a.bB.ls(g);}}else if(!a.lx.data[e]){a.mG=a.mG+1|0;a.lx.data[e]=1;a.nH=1;a.ok.data[e]=1;if(a.bB
!==null)a.bB.lH(e);}}}
function ABk(a){var b;b=0;while(true){if(b>=20)return (-1);if(!a.f3.F8(Bn(b),0))break;b=b+1|0;}return b;}
function AKW(a){var b;a:{if(a.kt){a.kt=0;b=0;while(true){if(b>=a.oD.data.length)break a;a.oD.data[b]=0;b=b+1|0;}}}b:{if(a.nH){a.nH=0;b=0;while(true){if(b>=a.ok.data.length)break b;a.ok.data[b]=0;b=b+1|0;}}}}
function A8Z(a,b,c,d){a.o3.data[b]=c;a.o4.data[b]=d;}
function Ff(a,b){return b.movementX;}
function EQ(a,b){return b.movementY;}
function Kl(a,b){var c,d;c=$rt_str(b.compatMode);d=c.z(B(352));if(d)b=b.documentElement;return b;}
function Hu(a,b){var c;c=b.scrollTop;return HN(c);}
function J9(a,b){var c;c=Kl(a,b);return Hu(a,c);}
function Ig(a,b){var c;c=b.scrollLeft;return HN(c);}
function LS(a,b){var c;c=Kl(a,b);return Ig(a,c);}
function R4(a,b,c){var d;d=(c.clientX-Or(a,b)|0)+Ig(a,b)|0;d=d+LS(a,b.ownerDocument)|0;return d;}
function AAt(a,b,c){var d;d=(c.clientY-NN(a,b)|0)+Hu(a,b)|0;d=d+J9(a,b.ownerDocument)|0;return d;}
function AMz(a,b,c){var d,e;d=c.width*1.0/KR(a,c);e=d*(((b.clientX-Or(a,c)|0)+Ig(a,c)|0)+LS(a,c.ownerDocument)|0);return Dg(e);}
function AKg(a,b,c){var d,e;d=c.height*1.0/N2(a,c);e=d*(((b.clientY-NN(a,c)|0)+Hu(a,c)|0)+J9(a,c.ownerDocument)|0);return Dg(e);}
function A$D(a,b,c){var d;d=c.width*1.0/KR(a,c);return Dg(d*R4(a,c,b));}
function A0_(a,b,c){var d;d=c.height*1.0/N2(a,c);return Dg(d*AAt(a,c,b));}
function KR(a,b){return b.clientWidth;}
function N2(a,b){return b.clientHeight;}
function NN(a,b){return HN(SB(a,b));}
function SB(a,b){var c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollTop;d=d.parentNode;}while(b!==null){c=c+b.offsetTop;b=d.offsetParent;}return c;}
function Or(a,b){return HN(ZS(a,b));}
function ZS(a,b){var c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollLeft;d=d.parentNode;}while(b!==null){c=c+b.offsetLeft;b=d.offsetParent;}return c;}
function HN(b){return b|0;}
function AV9(a,b){return a.ec.data[b];}
function AHG(a){return a.fi;}
function AGq(a,b){a.bB=b;}
function A_G(a){return 0;}
function APr(a,b){a.dU(b);}
var U6=D(Bm);
function Bay(){var a=new U6();A4e(a);return a;}
function Bda(a){var b=new U6();A2a(b,a);return b;}
function A4e(a){Cx(a);}
function A2a(a,b){EF(a,b);}
function IB(){DS.call(this);this.vz=null;}
function Bkk(a){var b=new IB();O1(b,a);return b;}
function O1(a,b){G_(a);a.vz=b;}
function HA(){var a=this;IB.call(a);a.Ju=0;a.ro=0;a.e3=null;a.ku=null;a.y4=null;}
function Bkl(a,b){var c=new HA();Oe(c,a,b);return c;}
function Oe(a,b,c){O1(a,b);a.e3=I();a.ku=BW(32);a.Ju=c;Hw();a.y4=Bkm;}
function A4U(a,b,c,d){var $$je;if(!ABe(a))return;a:{try{a.vz.nc(b,c,d);break a;}catch($$e){$$je=R($$e);if($$je instanceof De){}else{throw $$e;}}a.ro=1;}}
function ABe(a){if(a.vz===null)a.ro=1;return a.ro?0:1;}
function MB(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.data;f=Zl(b,c,d-c|0);g=Cj(Bf(16,Bq(e.length,1024)));h=Ht(g);i=a.y4.mw();Di();j=BgV;i=K2(i,j);j=BgV;k=LR(i,j);while(true){l=(ID(k,f,h,1)).h5();a.nc(g,0,B8(h));J4(h);if(!l)break;}while(true){l=(JN(k,h)).h5();a.nc(g,0,B8(h));J4(h);if(!l)break;}}
function AY$(a,b){a.ku.data[0]=b;MB(a,a.ku,0,1);}
function A10(a,b){a.e3.a(b);IC(a);}
function AXW(a,b){(a.e3.a(b)).U(10);IC(a);}
function ALl(a,b){(a.e3.dD(b)).U(10);IC(a);}
function A6M(a){a.GQ(10);}
function IC(a){var b;b=a.e3.i()<=a.ku.data.length?a.ku:BW(a.e3.i());a.e3.pv(0,a.e3.i(),b,0);MB(a,b,0,a.e3.i());a.e3.uy(0);}
var Sv=D(Dr);
function Bd_(a,b){var c=new Sv();AVv(c,a,b);return c;}
function AVv(a,b,c){Gc(a,b,c);}
function AUX(a,b,c,d){var e,f,g,h;e=a.bQ.df();d.by(a.bm,b);f=0;while(true){if(f>=e)return a.k.e(b,c,d);g=a.bQ.l(f);h=g.cI(0,b,c,d);if(h>=0)break;f=f+1|0;}return (-1);}
function A7d(a,b){return 0;}
function AFM(a){return B(353);}
function Pm(){var a=this;C.call(a);a.E4=null;a.sZ=null;}
function Bcx(a,b){var c=new Pm();ASz(c,a,b);return c;}
function ASz(a,b,c){a.sZ=b;a.E4=c;J(a);}
function AR1(a){AKj(a.sZ.nk,Bab(a.E4));Bim=A9v(a.sZ.nk);(CD()).eu();}
function A9r(a){(CD()).eu();}
function ANW(a){a.HP();}
function AHk(a){a.GX();}
var Fy=D(IN);
function MG(a,b,c,d){AAh(a,b,c,d);}
function ARn(a){var b;if(a.C>=a.bb)G(UB());b=a.C;a.C=b+1|0;return a.p1(b);}
function A4o(a,b){var c;if(a.b_())G(C9());if(a.C>=a.bb)G(F0());c=a.C;a.C=c+1|0;a.nQ(c,b);return a;}
function AML(a,b){if(b>=0&&b<a.bb)return a.p1(b);G(Bg(((((((I()).a(B(354))).j(b)).a(B(64))).j(a.bb)).a(B(24))).b()));}
function A80(a,b,c){if(a.b_())G(C9());if(b>=0&&b<a.bb){a.nQ(b,c);return a;}G(Bg(((((((I()).a(B(354))).j(b)).a(B(64))).j(a.bb)).a(B(24))).b()));}
function AMb(a){return a.e1();}
function FI(){var a=this;Fy.call(a);a.cu=null;a.xZ=0;a.cl=0;}
function JO(a,b,c,d,e,f,g){MG(a,c,e,f);a.cl=b;a.cu=d;a.xZ=g;}
function ALW(a){return a.xZ;}
var Px=D(FI);
function Be9(a,b,c,d,e,f){var g=new Px();AZs(g,a,b,c,d,e,f);return g;}
function AZs(a,b,c,d,e,f,g){JO(a,b,c,d,e,f,g);}
function AIP(a,b){var c,d,e;c=a.cu.A.data;d=a.cl;e=b*4|0;return c[d+e|0]&255|(a.cu.A.data[(a.cl+e|0)+1|0]&255)<<8|(a.cu.A.data[(a.cl+e|0)+2|0]&255)<<16|(a.cu.A.data[(a.cl+e|0)+3|0]&255)<<24;}
function ADc(a,b,c){var d,e,f;d=a.cu.A.data;e=a.cl;f=b*4|0;d[e+f|0]=c<<24>>24;a.cu.A.data[(a.cl+f|0)+1|0]=c>>8<<24>>24;a.cu.A.data[(a.cl+f|0)+2|0]=c>>16<<24>>24;a.cu.A.data[(a.cl+f|0)+3|0]=c>>24<<24>>24;}
var ABS=D(FM);
function Bdp(a,b){var c=new ABS();A9m(c,a,b);return c;}
function A9m(a,b,c){Kg(a,b,c);}
function AGD(a,b,c,d){var e,f;e=a.j9(d);if(e!==null&&(b+e.i()|0)<=d.J()){f=!(c.b()).zM(e,b)?(-1):e.i();if(f<0)return (-1);d.by(a.je,f);return a.k.e(b+f|0,c,d);}return (-1);}
function ARW(a,b,c,d){var e,f,g,h;e=a.j9(d);f=d.dI();if(e!==null&&(b+e.i()|0)<=f){g=c.b();while(true){if(b>f)return (-1);h=g.ux(e,b);if(h<0)return (-1);if(a.k.e(h+e.i()|0,c,d)>=0)break;b=h+1|0;}return h;}return (-1);}
function AD4(a,b,c,d,e){var f,g,h;f=a.j9(e);if(f===null)return (-1);g=d.b();a:{while(true){if(c<b)return (-1);h=g.Ab(f,c);if(h<0)break a;if(h<b)break a;if(a.k.e(h+f.i()|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function A30(a,b){return 1;}
function A9y(a){return (((I()).a(B(355))).j(a.bm)).b();}
function Ww(){Dd.call(this);this.q7=null;}
function Bag(a,b,c,d){var e=new Ww();A59(e,a,b,c,d);return e;}
function A59(a,b,c,d,e){FW(a,b,c,d);a.q7=e;}
function AOJ(a,b,c,d){var e,f;e=d.J();f=NO(a,b,e,c);if(f>=0)e=f;if(e>b)return a.k.cI(b,e,c,d);return a.k.e(b,c,d);}
function ADm(a,b,c,d){var e,f,g,h,i;e=d.J();f=a.k.cE(b,c,d);if(f<0)return (-1);g=NO(a,f,e,c);if(g>=0)e=g;h=a.k.cI(f,e,c,d);h=Bf(f,h);i=h>0?ABX(a,b,h-1|0,c):h?(-1):0;if(i>=b)b=i>=h?i:i+1|0;return b;}
function NO(a,b,c,d){while(true){if(b>=c)return (-1);if(a.q7.k1(d.f(b)))break;b=b+1|0;}return b;}
function ABX(a,b,c,d){while(true){if(c<b)return (-1);if(a.q7.k1(d.f(c)))break;c=c+(-1)|0;}return c;}
function A7p(a){return B(356);}
var Ts=D(T);
function Bf9(){var a=new Ts();A1q(a);return a;}
function A1q(a){Bo(a);}
function ALM(a){var b;b=BbN(a);b.be=1;return b;}
var IT=D();
var Bkn=null;var Bko=null;function ACH(){ACH=N(IT);AZU();}
function ZT(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;ACH();d=$rt_floatToIntBits(b);c.wc=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.rc=0;c.qN=0;return;}g=0;if(f)h=e|8388608;else{h=e<<1;while(Z(Br(O(h),O(8388608)),Ba)){h=h<<1;f=f+(-1)|0;g=g+1|0;}}i=A4I(Bko,f);if(i<0)i=( -i|0)-2|0;j=f-Bko.data[i]|0;k=9+j|0;l=O(h);m=Cp(CN(Cf(l,O(Bkn.data[i])),32-k|0));if(m>=1000000000){i=i+1|0;n=f-Bko.data[i]|0;k=9+n|0;m=Cp(CN(Cf(l,O(Bkn.data[i])),32-k|0));}n=(31-k|0)-g|0;o=n>=0?Bkn.data[i]>>>n:Bkn.data[i]<<( -n
|0);p=(o+1|0)>>1;q=o>>1;if(h==4194304)q=q>>2;r=ZW(m,q);s=QU(m,p);h=B9(r,s);h=h>0?Cg(m/r|0,r):h<0?Cg(m/s|0,s)+s|0:Cg((m+(s/2|0)|0)/s|0,s);if(h>=1000000000){i=i+1|0;h=h/10|0;}else if(h<100000000){i=i+(-1)|0;h=h*10|0;}c.rc=h;c.qN=i-50|0;}
function ZW(b,c){var d,e;ACH();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if(e>=(c/2|0))d=d/10|0;return d;}
function QU(b,c){var d,e;ACH();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if((d-e|0)>(c/2|0))d=d/10|0;return d;}
function AZU(){var b,c,d,e,f,g,h,i,j,k,l;Bkn=Bc(100);Bko=Bc(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=Bkn.data;g=d+50|0;f[g]=$rt_udiv(e,20);Bko.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}i=214748364;e=127;d=0;while(d<50){j=0;k=b;while(k>i){k=k>>1;j=j+1|0;e=e+(-1)|0;}k=k*10|0;if(j<=0)b=k;else{l=O(b&((1<<j)-1|0));b=Cp(CA(O(k),M$(Cf(l,O(10)),j)));}f=Bkn.data;k=(50-d|0)-1|0;f[k]=$rt_udiv(b,20);Bko.data[k]=e;d=d+1|0;}}
function Cs(){Bx.call(this);this.zw=null;}
var BjJ=null;var Bkp=null;var Bkq=null;var Bkr=null;var Bks=null;var Bkt=null;var Bku=null;var Bkv=null;var Bkw=null;var BjI=null;var Bkx=null;var Bky=null;function Ix(){Ix=N(Cs);A0F();}
function Dm(a,b,c){var d=new Cs();S2(d,a,b,c);return d;}
function S2(a,b,c,d){Ix();Cw(a,b,c);a.zw=d;}
function E6(a){return a.zw;}
function A0F(){BjJ=Dm(B(357),0,B(358));Bkp=Dm(B(359),1,B(360));Bkq=Dm(B(361),2,B(362));Bkr=Dm(B(363),3,B(364));Bks=Dm(B(365),4,B(366));Bkt=Dm(B(367),5,B(368));Bku=Dm(B(369),6,B(370));Bkv=Dm(B(371),7,B(372));Bkw=Dm(B(373),8,B(374));BjI=Dm(B(375),9,B(376));Bkx=Dm(B(377),10,B(378));Bky=H(Cs,[BjJ,Bkp,Bkq,Bkr,Bks,Bkt,Bku,Bkv,Bkw,BjI,Bkx]);}
function Bi(){var a=this;C.call(a);a.s=0.0;a.r=0.0;a.t=0.0;a.G=0.0;}
var BiY=null;var BiZ=null;var Bi0=null;var Bi1=null;var BiX=null;var Bkz=0.0;var BiW=null;var Bi2=null;var Bi3=null;var Bi4=null;var Bi5=null;var Bi6=null;var Bi7=null;var Bi8=null;var Bi9=null;var Bi$=null;var Bi_=null;var Bja=null;var Bjb=null;var Bjc=null;var Bjd=null;var Bje=null;var Bjf=null;var Bjg=null;var Bjh=null;var Bji=null;var Bjj=null;var Bjk=null;var Bjl=null;var Bjm=null;var Bjn=null;var Bjo=null;var Bjp=null;var Bjq=null;var Bjr=null;function Bv(){Bv=N(Bi);AUL();}
function D2(){var a=new Bi();U3(a);return a;}
function BK(a){var b=new Bi();ABW(b,a);return b;}
function CP(a,b,c,d){var e=new Bi();SJ(e,a,b,c,d);return e;}
function A5R(a){var b=new Bi();Ua(b,a);return b;}
function U3(a){Bv();J(a);}
function ABW(a,b){Bv();J(a);Id(a,b);}
function SJ(a,b,c,d,e){Bv();J(a);a.s=b;a.r=c;a.t=d;a.G=e;a.dL();}
function Ua(a,b){Bv();J(a);a.eR(b);}
function AES(a,b){a.s=b.s;a.r=b.r;a.t=b.t;a.G=b.G;return a;}
function A$T(a,b){a.s=a.s*b.s;a.r=a.r*b.r;a.t=a.t*b.t;a.G=a.G*b.G;return a.dL();}
function AEz(a,b){a.s=a.s*b;a.r=a.r*b;a.t=a.t*b;a.G=a.G*b;return a.dL();}
function A5G(a,b){a.s=a.s+b.s;a.r=a.r+b.r;a.t=a.t+b.t;a.G=a.G+b.G;return a.dL();}
function AV4(a,b){a.s=a.s-b.s;a.r=a.r-b.r;a.t=a.t-b.t;a.G=a.G-b.G;return a.dL();}
function A7F(a){if(a.s<0.0)a.s=0.0;else if(a.s>1.0)a.s=1.0;if(a.r<0.0)a.r=0.0;else if(a.r>1.0)a.r=1.0;if(a.t<0.0)a.t=0.0;else if(a.t>1.0)a.t=1.0;if(a.G<0.0)a.G=0.0;else if(a.G>1.0)a.G=1.0;return a;}
function A4w(a,b,c,d,e){a.s=b;a.r=c;a.t=d;a.G=e;return a.dL();}
function AOP(a,b){Id(a,b);return a;}
function ADU(a,b,c,d,e){a.s=a.s+b;a.r=a.r+c;a.t=a.t+d;a.G=a.G+e;return a.dL();}
function AQJ(a,b,c,d,e){a.s=a.s-b;a.r=a.r-c;a.t=a.t-d;a.G=a.G-e;return a.dL();}
function A8m(a,b,c,d,e){a.s=a.s*b;a.r=a.r*c;a.t=a.t*d;a.G=a.G*e;return a.dL();}
function ANT(a,b,c){a.s=a.s+c*(b.s-a.s);a.r=a.r+c*(b.r-a.r);a.t=a.t+c*(b.t-a.t);a.G=a.G+c*(b.G-a.G);return a.dL();}
function AXA(a,b,c,d,e,f){a.s=a.s+f*(b-a.s);a.r=a.r+f*(c-a.r);a.t=a.t+f*(d-a.t);a.G=a.G+f*(e-a.G);return a.dL();}
function AMI(a){a.s=a.s*a.G;a.r=a.r*a.G;a.t=a.t*a.G;return a;}
function AZh(a,b){var c;if(a===b)return 1;if(b!==null&&Ck(a)===Ck(b)){c=b;return a.r1()!=c.r1()?0:1;}return 0;}
function AMg(a){var b,c;b=a.s===0.0?0:CF(a.s);c=(31*b|0)+(a.r===0.0?0:CF(a.r))|0;c=(31*c|0)+(a.t===0.0?0:CF(a.t))|0;c=(31*c|0)+(a.G===0.0?0:CF(a.G))|0;return c;}
function AR3(a){var b;b=(255.0*a.G|0)<<24|(255.0*a.t|0)<<16|(255.0*a.r|0)<<8|255.0*a.s|0;return J$(b);}
function ATV(a){return (255.0*a.G|0)<<24|(255.0*a.t|0)<<16|(255.0*a.r|0)<<8|255.0*a.s|0;}
function AGW(a){var b,c;b=(255.0*a.s|0)<<24|(255.0*a.r|0)<<16|(255.0*a.t|0)<<8|255.0*a.G|0;c=OB(b);while(c.i()<8){c=(((I()).a(B(315))).a(c)).b();}return c;}
function AF9(b){Bv();return ACU(b,D2());}
function ACU(b,c){Bv();if(b.f(0)==35)b=b.ei(1);c.s=Dt(b.ce(0,2),16)/255.0;c.r=Dt(b.ce(2,4),16)/255.0;c.t=Dt(b.ce(4,6),16)/255.0;c.G=b.i()!=8?1.0:Dt(b.ce(6,8),16)/255.0;return c;}
function AFX(b,c,d,e){var f,g;Bv();f=e<<24|d<<16|c<<8|b;g=J$(f);return g;}
function AIG(b,c,d,e){var f;Bv();f=(255.0*e|0)<<24|(255.0*d|0)<<16|(255.0*c|0)<<8|255.0*b|0;return J$(f);}
function AKO(b,c,d,e){Bv();return e<<24|d<<16|c<<8|b;}
function AIL(b){Bv();return b*255.0|0;}
function A$$(b,c){Bv();return (b*255.0|0)<<8|c*255.0|0;}
function A2v(b,c,d){Bv();return (b*31.0|0)<<11|(c*63.0|0)<<5|d*31.0|0;}
function ALj(b,c,d,e){Bv();return (b*15.0|0)<<12|(c*15.0|0)<<8|(d*15.0|0)<<4|e*15.0|0;}
function AKM(b,c,d){Bv();return (b*255.0|0)<<16|(c*255.0|0)<<8|d*255.0|0;}
function A9B(b,c,d,e){Bv();return (b*255.0|0)<<24|(c*255.0|0)<<16|(d*255.0|0)<<8|e*255.0|0;}
function A1o(b,c,d,e){Bv();return (b*255.0|0)<<24|(c*255.0|0)<<16|(d*255.0|0)<<8|e*255.0|0;}
function AON(b){Bv();return (b.s*31.0|0)<<11|(b.r*63.0|0)<<5|b.t*31.0|0;}
function A6O(b){Bv();return (b.s*15.0|0)<<12|(b.r*15.0|0)<<8|(b.t*15.0|0)<<4|b.G*15.0|0;}
function ANS(b){Bv();return (b.s*255.0|0)<<16|(b.r*255.0|0)<<8|b.t*255.0|0;}
function AEJ(b){Bv();return (b.s*255.0|0)<<24|(b.r*255.0|0)<<16|(b.t*255.0|0)<<8|b.G*255.0|0;}
function A1$(b){Bv();return (b.G*255.0|0)<<24|(b.s*255.0|0)<<16|(b.r*255.0|0)<<8|b.t*255.0|0;}
function A9$(b,c){Bv();b.s=((c&63488)>>>11)/31.0;b.r=((c&2016)>>>5)/63.0;b.t=((c&31)>>>0)/31.0;}
function A4J(b,c){Bv();b.s=((c&61440)>>>12)/15.0;b.r=((c&3840)>>>8)/15.0;b.t=((c&240)>>>4)/15.0;b.G=(c&15)/15.0;}
function A47(b,c){Bv();b.s=((c&16711680)>>>16)/255.0;b.r=((c&65280)>>>8)/255.0;b.t=(c&255)/255.0;}
function Id(b,c){Bv();b.s=((c&(-16777216))>>>24)/255.0;b.r=((c&16711680)>>>16)/255.0;b.t=((c&65280)>>>8)/255.0;b.G=(c&255)/255.0;}
function APG(b,c){Bv();b.G=((c&(-16777216))>>>24)/255.0;b.s=((c&16711680)>>>16)/255.0;b.r=((c&65280)>>>8)/255.0;b.t=(c&255)/255.0;}
function Zu(b,c){var d;Bv();d=A0G(c);b.G=((d&(-16777216))>>>24)/255.0;b.t=((d&16711680)>>>16)/255.0;b.r=((d&65280)>>>8)/255.0;b.s=(d&255)/255.0;}
function A7i(a,b,c,d){var e,f,g,h,i,j;a:{e=(b/60.0+6.0)%6.0;f=e|0;g=e-f;h=d*(1.0-c);i=d*(1.0-c*g);j=d*(1.0-c*(1.0-g));switch(f){case 0:break;case 1:a.s=i;a.r=d;a.t=h;break a;case 2:a.s=h;a.r=d;a.t=j;break a;case 3:a.s=h;a.r=i;a.t=d;break a;case 4:a.s=j;a.r=h;a.t=d;break a;default:a.s=d;a.r=h;a.t=i;break a;}a.s=d;a.r=j;a.t=h;}return a.dL();}
function AU4(a,b){var c;c=b.data;return a.Ph(c[0],c[1],c[2]);}
function A6Y(a,b){var c,d,e;c=Ei(Ei(a.s,a.r),a.t);d=Ju(Ju(a.s,a.r),a.t);e=c-d;if(e===0.0)b.data[0]=0.0;else if(c===a.s)b.data[0]=(60.0*(a.r-a.t)/e+360.0)%360.0;else if(c!==a.r)b.data[0]=60.0*(a.s-a.r)/e+240.0;else b.data[0]=60.0*(a.t-a.s)/e+120.0;if(c<=0.0)b.data[1]=0.0;else b.data[1]=1.0-d/c;b.data[2]=c;return b;}
function A9h(a){return A5R(a);}
function AUL(){BiY=CP(1.0,1.0,1.0,1.0);BiZ=BK((-1077952513));Bi0=BK(2139062271);Bi1=BK(1061109759);BiX=CP(0.0,0.0,0.0,1.0);Bkz=BiY.ny();BiW=CP(0.0,0.0,0.0,0.0);Bi2=CP(0.0,0.0,1.0,1.0);Bi3=CP(0.0,0.0,0.5,1.0);Bi4=BK(1097458175);Bi5=BK(1887473919);Bi6=BK((-2016482305));Bi7=CP(0.0,1.0,1.0,1.0);Bi8=CP(0.0,0.5,0.5,1.0);Bi9=BK(16711935);Bi$=BK(2147418367);Bi_=BK(852308735);Bja=BK(579543807);Bjb=BK(1804477439);Bjc=BK((-65281));Bjd=BK((-2686721));Bje=BK((-626712321));Bjf=BK((-5963521));Bjg=BK((-1958407169));Bjh=BK((-759919361));Bji
=BK((-1306385665));Bjj=BK((-16776961));Bjk=BK((-13361921));Bjl=BK((-8433409));Bjm=BK((-92245249));Bjn=BK((-9849601));Bjo=CP(1.0,0.0,1.0,1.0);Bjp=BK((-1608453889));Bjq=BK((-293409025));Bjr=BK((-1339006721));}
function Fc(){var a=this;C.call(a);a.fn=0;a.cK=0;a.im=0;a.hT=0;a.cU=0;a.es=null;a.jT=0;a.DN=0;}
function EB(a,b,c){var d=new Fc();ANC(d,a,b,c);return d;}
function BkA(a,b,c,d){var e=new Fc();ACE(e,a,b,c,d);return e;}
function BkB(a,b,c,d,e,f){var g=new Fc();AAE(g,a,b,c,d,e,f);return g;}
function ANC(a,b,c,d){ACE(a,b,c,d,0);}
function ACE(a,b,c,d,e){var f;f=B9(b,4);AAE(a,b,c,f?5126:5121,f?0:1,d,e);}
function AAE(a,b,c,d,e,f,g){J(a);a.fn=b;a.cK=c;a.hT=d;a.im=e;a.es=f;a.jT=g;a.DN=E3(b);}
function ANG(a,b){if(!(b instanceof Fc))return 0;return KH(a,b);}
function KH(a,b){var c,d,e;a:{if(b!==null&&a.fn==b.fn&&a.cK==b.cK&&a.hT==b.hT&&a.im==b.im){c=a.es;d=b.es;if(c.z(d)&&a.jT==b.jT){e=1;break a;}}e=0;}return e;}
function IU(a){return (a.DN<<8)+(a.jT&255)|0;}
function QD(a){a:{switch(a.hT){case 5120:case 5121:break;case 5122:case 5123:return 2*a.cK|0;case 5124:case 5125:case 5127:case 5128:case 5129:case 5130:case 5131:break a;case 5126:case 5132:return 4*a.cK|0;default:break a;}return a.cK;}return 0;}
function AYQ(a){var b,c;b=IU(a);c=(541*b|0)+a.cK|0;c=(541*c|0)+a.es.bp()|0;return c;}
var IA=D();
function BkC(){var a=new IA();UP(a);return a;}
function UP(a){J(a);}
function Gd(){var a=this;IA.call(a);a.fS=null;a.cH=null;a.uM=null;}
function AVi(a,b,c){var d=new Gd();Hn(d,a,b,c);return d;}
function Hn(a,b,c,d){UP(a);GR();if(d!==Bjx&&d!==Bjy)G(U(((((I()).a(B(296))).dD(d)).a(B(379))).b()));a.fS=b;a.cH=A2t(c);a.uM=d;}
function AH_(a){return a.cH;}
function AKu(a){var b;b=a.cH.xC(47);if(b<0)return a.cH;return a.cH.ei(b+1|0);}
function A7S(a){var b,c;b=a.x_();c=b.xC(46);if(c==(-1))return b;return b.ce(0,c);}
function AGn(a){return a.uM;}
function ASn(a){var b;b=a.fS.Qi(a.cH);if(b!==null)return b;G(U((((I()).a(a.cH)).a(B(380))).b()));}
function AH2(a){return a.MC(null);}
function A94(a,b){var c,$$je;if(a.fS.LW(a.cH))return a.fS.ey.W(a.cH);a:{try{c=Bbw(a.Iy(),B(381));}catch($$e){$$je=R($$e);if($$je instanceof GK){break a;}else{throw $$e;}}return c;}return null;}
function A8f(a){var b,c,d,e,f,g,h,i,j,$$je;b=Cp((a.Hz()));if(!b)b=512;c=Cj(b);d=0;e=a.qy();a:{try{try{while(true){f=c.data.length;g=e.rv(c,d,f-d|0);if(g==(-1))break;d=d+g|0;if(d==f){h=Cj(f*2|0);X(c,0,h,0,d);c=h;}}break a;}catch($$e){$$je=R($$e);if($$je instanceof De){i=$$je;}else{throw $$e;}}G(Jd((((I()).a(B(382))).dD(a)).b(),i));}catch($$e){$$je=R($$e);j=$$je;}b:{try{if(e!==null)e.fP();break b;}catch($$e){$$je=R($$e);if($$je instanceof De){}else{throw $$e;}}}G(j);}c:{try{if(e!==null)e.fP();break c;}catch($$e)
{$$je=R($$e);if($$je instanceof De){}else{throw $$e;}}}if(d>=f)h=c;else{h=Cj(d);X(c,0,h,0,d);}return h;}
function AOr(a,b){var c,d,e;c=new Gd;d=a.fS;e=(((I()).a(a.cH.bN()?B(101):(((I()).a(a.cH)).a(!a.cH.yS(B(383))?B(383):B(101))).b())).a(b)).b();GR();Hn(c,d,e,Bjx);return c;}
function AHc(a){var b,c;b=a.cH.H3(B(383));c=B(101);if(b>0)c=a.cH.ce(0,b);return AVi(a.fS,c,a.uM);}
function A84(a){return a.fS.Of(a.cH);}
function A4G(a){return a.cH;}
function A2t(b){var c;c=b.uG(B(384),B(383));if(c.yS(B(383)))c=c.ce(0,c.i()-1|0);return c;}
function F6(){BT.call(this);this.gW=null;}
var BkD=null;function AKQ(){AKQ=N(F6);AF5();}
function BkE(){var a=new F6();Nw(a);return a;}
function Ba_(a){var b=new F6();S3(b,a);return b;}
function Nw(a){AKQ();B_(a);a.gW=BL();Vc(a);}
function Vc(a){var b,c,d;b=BcX(a);c=Bcd(a);d=Up(BP(b,"setWorldTransformJS"),BP(c,"getWorldTransformJS"));a.dZ(d,1);}
function S3(a,b){AKQ();B_(a);a.gW=BL();}
function AF5(){BkD=Ba_(0);}
function Up(b,c){var jsMotionState=new Bullet.MyMotionState();jsMotionState.setWorldTransform=b;jsMotionState.getWorldTransform=c;return Bullet.getPointer(jsMotionState);}
function ABd(){F6.call(this);this.qd=null;}
function Bas(a){var b=new ABd();A5C(b,a);return b;}
function A5C(a,b){Nw(a);a.qd=b;}
function ARy(a,b){b.ch(a.qd);}
function AMW(a,b){a.qd.ch(b);}
var T2=D(CG);
function Bak(a){var b=new T2();AKT(b,a);return b;}
function AKT(a,b){E4(a,b.pV(),b.Jy(),b.i6());a.Y.Q(a);}
function A$4(a,b,c,d){var e;while((b+a.bv.cg()|0)<=d.J()){e=a.bv;if(e.bH(b,c)<=0)break;b=b+a.bv.cg()|0;}return a.k.e(b,c,d);}
function ANF(a,b,c,d){var e,f,g;e=a.k.cE(b,c,d);if(e<0)return (-1);f=e-a.bv.cg()|0;while(f>=b&&a.bv.bH(f,c)>0){g=f-a.bv.cg()|0;e=f;f=g;}return e;}
function Ew(){var a=this;C.call(a);a.fm=null;a.ja=0;a.oy=null;a.CI=null;a.D6=null;a.C8=null;a.k9=null;a.C6=null;a.y_=null;a.Cc=null;a.dE=0;a.q6=0;a.s3=0;a.Qj=null;a.Bb=null;a.wH=null;a.yG=0;a.Kt=0;a.cO=null;a.hG=null;}
var BkF=0;var BkG=null;var BkH=null;var BkI=null;var BkJ=null;function UV(){UV=N(Ew);APH();}
function AIU(a,b){var c=new Ew();UY(c,a,b);return c;}
function UY(a,b,c){UV();J(a);a.fm=B(101);a.oy=Gr();a.CI=Gr();a.D6=Gr();a.k9=Gr();a.C6=Gr();a.y_=Gr();a.Kt=0;a.cO=Fk(1);a.hG=Fk(1);if(b===null)G(W(B(385)));if(c===null)G(W(B(386)));if(BkG!==null&&BkG.i()>0)b=(((I()).a(BkG)).a(b)).b();if(BkH!==null&&BkH.i()>0)c=(((I()).a(BkH)).a(c)).b();a.Bb=b;a.wH=c;a.Qj=HX(16);Kr(a,b,c);if(a.r_()){QQ(a);R9(a);AAi(a,Bg1,a);}}
function Kr(a,b,c){a.q6=OE(a,35633,b);a.s3=OE(a,35632,c);if(a.q6!=(-1)&&a.s3!=(-1)){a.dE=ABB(a,a.IE());if(a.dE!=(-1)){a.ja=1;return;}a.ja=0;return;}a.ja=0;}
function OE(a,b,c){var d,e,f,g,h;d=Bip;e=Fk(1);f=d.Ot(b);if(!f)return (-1);d.QG(f,c);d.Io(f);d.NR(f,35713,e);g=e.b2(0);if(g)return f;h=d.N0(f);a.fm=(((I()).a(a.fm)).a(b!=35633?B(387):B(388))).b();a.fm=(((I()).a(a.fm)).a(h)).b();return (-1);}
function AKK(a){var b,c;b=Bip;c=b.M1();if(!c)c=(-1);return c;}
function ABB(a,b){var c,d,e,f;c=Bip;if(b==(-1))return (-1);c.xj(b,a.q6);c.xj(b,a.s3);c.Ls(b);d=FV(4);FH(d,EV());e=d.yK();c.qo(b,35714,e);f=e.b2(0);if(f)return b;a.fm=Bip.An(b);return (-1);}
function A8l(a){if(!a.ja)return a.fm;a.fm=Bip.An(a.dE);return a.fm;}
function A9n(a){return a.ja;}
function Rk(a,b){var c,d;c=Bip;d=a.k9.tH(b,(-2));if(d==(-2)){d=c.Db(a.dE,b);a.k9.gA(b,d);}return d;}
function JW(a,b){UV();return a.AN(b,BkF);}
function A2$(a,b,c){var d;d=a.oy.tH(b,(-2));if(d==(-2)){d=Bip.AO(a.dE,b);if(d==(-1)&&c){if(!a.ja)G(DR((((I()).a(B(389))).a(a.q1())).b()));G(W(((((I()).a(B(390))).a(b)).a(B(391))).b()));}a.oy.gA(b,d);}return d;}
function A1D(a,b,c){var d,e;d=Bip;Cm(a);e=JW(a,b);d.Cu(e,c);}
function A0t(a,b,c){var d;d=Bip;Cm(a);d.Cu(b,c);}
function APO(a,b,c){var d;d=Bip;Cm(a);d.MW(b,c);}
function ADV(a,b,c,d){var e;e=Bip;Cm(a);e.OR(b,c,d);}
function AFP(a,b,c,d,e){var f;f=Bip;Cm(a);f.G6(b,c,d,e);}
function AQf(a,b,c,d,e,f){var g;g=Bip;Cm(a);g.GM(b,c,d,e,f);}
function ARP(a,b,c,d,e){var f;f=Bip;Cm(a);f.F0(b,e/3|0,c,d);}
function AZE(a,b,c){a.IM(b,c,0);}
function AVT(a,b,c,d){a.zx(JW(a,b),c,d);}
function AL0(a,b,c){a.zx(b,c,0);}
function A38(a,b,c,d){var e;e=Bip;Cm(a);e.yf(b,1,d,c.c,0);}
function A9A(a,b,c){a.LB(b,c,0);}
function AId(a,b,c,d){var e;e=Bip;Cm(a);e.I2(b,1,d,c.gT,0);}
function AWR(a,b,c,d,e){var f;f=Bip;Cm(a);f.yf(b,e/16|0,0,c,d);}
function ADf(a,b,c){a.jh(b,c.n,c.o,c.q);}
function A6f(a,b,c){a.yu(b,c.s,c.r,c.t,c.G);}
function A$U(a,b,c,d,e,f,g){var h;h=Bip;Cm(a);h.Pm(b,c,d,e,f,g);}
function AV3(a){var b;b=Bip;Cm(a);b.Kh(a.dE);}
function AFf(a,b){var c,d;c=Bip;Cm(a);d=Rk(a,b);if(d==(-1))return;c.xJ(d);}
function A22(a,b){var c;c=Bip;Cm(a);c.xJ(b);}
function A6d(a,b){var c;c=Bip;Cm(a);c.QA(b);}
function Cm(a){if(a.yG){Kr(a,a.Bb,a.wH);a.yG=0;}}
function AAi(a,b,c){var d;UV();d=BkI.W(b);if(d===null)d=Bp();d.F(c);BkI.x(b,d);}
function R9(a){var b,c,d,e;a.cO.c1();Bip.qo(a.dE,35718,a.cO);b=a.cO.b2(0);a.C8=Y(BN,b);c=0;while(c<b){a.cO.c1();a.cO.ti(0,1);a.hG.c1();d=Bip.Qd(a.dE,c,a.cO,a.hG);e=Bip.AO(a.dE,d);a.oy.gA(d,e);a.CI.gA(d,a.hG.b2(0));a.D6.gA(d,a.cO.b2(0));a.C8.data[c]=d;c=c+1|0;}}
function QQ(a){var b,c,d,e;a.cO.c1();Bip.qo(a.dE,35721,a.cO);b=a.cO.b2(0);a.Cc=Y(BN,b);c=0;while(c<b){a.cO.c1();a.cO.ti(0,1);a.hG.c1();d=Bip.PR(a.dE,c,a.cO,a.hG);e=Bip.Db(a.dE,d);a.k9.gA(d,e);a.C6.gA(d,a.hG.b2(0));a.y_.gA(d,a.cO.b2(0));a.Cc.data[c]=d;c=c+1|0;}}
function AE9(a,b){return a.k9.tH(b,(-1));}
function APH(){BkF=1;BkG=B(101);BkH=B(101);BkI=DG();BkJ=Fk(1);}
var DO=D(Bx);
var Bjy=null;var Bjx=null;var BkK=null;var BkL=null;var BkM=null;var BkN=null;function GR(){GR=N(DO);AIa();}
function H9(a,b){var c=new DO();Wv(c,a,b);return c;}
function Wv(a,b,c){GR();Cw(a,b,c);}
function AIa(){Bjy=H9(B(392),0);Bjx=H9(B(393),1);BkK=H9(B(394),2);BkL=H9(B(395),3);BkM=H9(B(396),4);BkN=H(DO,[Bjy,Bjx,BkK,BkL,BkM]);}
var Mf=D(0);
function Jx(){var a=this;C.call(a);a.qU=null;a.g_=null;a.iN=null;}
var BkO=0;function Bfk(a){var b=new Jx();A8g(b,a);return b;}
function A8g(a,b){var c;J(a);a.g_=b;c=a;b.classObject=c;}
function Lg(b){var c;if(b===null)return null;c=b.classObject;if(c===null)c=Bfk(b);return c;}
function AMl(a){return (((I()).a(B(397))).j(Is(a))).b();}
function AWI(a){return a.g_;}
function AY9(a,b){return A4K(b,a.g_);}
function A2G(a){if(a.qU===null)a.qU=AQB(a.g_);return a.qU;}
function AJq(a){return A7X(a.g_);}
function ASQ(a){return ACy(a.g_)===null?0:1;}
function A3H(a){return Lg(ACy(a.g_));}
function AZG(){if(!BkO){BkO=1;A2A();}}
function A2A(){EI.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){ACj(obj);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Q7,FO],returnType:$rt_voidcls(),callable:function(obj,args){PJ(obj,args[0],args[1]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Q7,FO,Bi,$rt_floatcls(),$rt_intcls(),$rt_booleancls()],returnType:$rt_voidcls(),callable:function(obj,args){S$(obj,args[0],args[1],
args[2],A8V(args[3]),AWa(args[4]),A0U(args[5]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Q7,FO,$rt_intcls(),$rt_intcls(),Bi,$rt_floatcls(),$rt_intcls(),$rt_booleancls(),BN],returnType:$rt_voidcls(),callable:function(obj,args){AA4(obj,args[0],args[1],AWa(args[2]),AWa(args[3]),args[4],A8V(args[5]),AWa(args[6]),A0U(args[7]),args[8]);return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[Q7,FO],returnType:$rt_voidcls(),callable:function(obj,args){A7G(obj,args[0],
args[1]);return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[Q7,FO,Bi,$rt_floatcls(),$rt_intcls(),$rt_booleancls()],returnType:$rt_voidcls(),callable:function(obj,args){A3B(obj,args[0],args[1],args[2],A8V(args[3]),AWa(args[4]),A0U(args[5]));return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[Q7,FO,$rt_intcls(),$rt_intcls(),Bi,$rt_floatcls(),$rt_intcls(),$rt_booleancls(),BN],returnType:$rt_voidcls(),callable:function(obj,args){AG4(obj,args[0],args[1],AWa(args[2]),AWa(args[3]),
args[4],A8V(args[5]),AWa(args[6]),A0U(args[7]),args[8]);return null;}},{name:"truncate",modifiers:0,accessLevel:1,parameterTypes:[Rb,Hh,$rt_floatcls(),BN,$rt_intcls(),D5],returnType:$rt_voidcls(),callable:function(obj,args){ABp(obj,args[0],args[1],A8V(args[2]),args[3],AWa(args[4]),args[5]);return null;}},{name:"wrap",modifiers:0,accessLevel:1,parameterTypes:[Rb,Hh,$rt_intcls(),$rt_intcls()],returnType:Hh,callable:function(obj,args){return QP(obj,args[0],args[1],AWa(args[2]),AWa(args[3]));}},{name:"adjustLastGlyph",modifiers
:0,accessLevel:1,parameterTypes:[Rb,Hh],returnType:$rt_voidcls(),callable:function(obj,args){EP(obj,args[0],args[1]);return null;}},{name:"parseColorMarkup",modifiers:0,accessLevel:1,parameterTypes:[FO,$rt_intcls(),$rt_intcls(),D5],returnType:$rt_intcls(),callable:function(obj,args){return Pz(obj,args[0],AWa(args[1]),AWa(args[2]),args[3]);}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){A8C(obj);return null;}},{name:"toString",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:BN,callable:function(obj,args){return AOa(obj);}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){DI();AYL();return null;}}];Hh.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){A0A(obj);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){ALv(obj);return null;}},
{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BN,callable:function(obj,args){return AEp(obj);}}];Bi.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){U3(obj);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){ABW(obj,AWa(args[0]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),
$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:function(obj,args){SJ(obj,A8V(args[0]),A8V(args[1]),A8V(args[2]),A8V(args[3]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Bi],returnType:$rt_voidcls(),callable:function(obj,args){Ua(obj,args[0]);return null;}},{name:"set",modifiers:0,accessLevel:3,parameterTypes:[Bi],returnType:Bi,callable:function(obj,args){return AES(obj,args[0]);}},{name:"mul",modifiers:0,accessLevel:3,parameterTypes:[Bi],returnType:Bi,callable:
function(obj,args){return A$T(obj,args[0]);}},{name:"mul",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls()],returnType:Bi,callable:function(obj,args){return AEz(obj,A8V(args[0]));}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[Bi],returnType:Bi,callable:function(obj,args){return A5G(obj,args[0]);}},{name:"sub",modifiers:0,accessLevel:3,parameterTypes:[Bi],returnType:Bi,callable:function(obj,args){return AV4(obj,args[0]);}},{name:"clamp",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:Bi,callable:function(obj,args){return A7F(obj);}},{name:"set",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:Bi,callable:function(obj,args){return A4w(obj,A8V(args[0]),A8V(args[1]),A8V(args[2]),A8V(args[3]));}},{name:"set",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:Bi,callable:function(obj,args){return AOP(obj,AWa(args[0]));}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),
$rt_floatcls()],returnType:Bi,callable:function(obj,args){return ADU(obj,A8V(args[0]),A8V(args[1]),A8V(args[2]),A8V(args[3]));}},{name:"sub",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:Bi,callable:function(obj,args){return AQJ(obj,A8V(args[0]),A8V(args[1]),A8V(args[2]),A8V(args[3]));}},{name:"mul",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:Bi,callable:function(obj,args)
{return A8m(obj,A8V(args[0]),A8V(args[1]),A8V(args[2]),A8V(args[3]));}},{name:"lerp",modifiers:0,accessLevel:3,parameterTypes:[Bi,$rt_floatcls()],returnType:Bi,callable:function(obj,args){return ANT(obj,args[0],A8V(args[1]));}},{name:"lerp",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:Bi,callable:function(obj,args){return AXA(obj,A8V(args[0]),A8V(args[1]),A8V(args[2]),A8V(args[3]),A8V(args[4]));}},{name:"premultiplyAlpha",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:Bi,callable:function(obj,args){return AMI(obj);}},{name:"equals",modifiers:0,accessLevel:3,parameterTypes:[C],returnType:$rt_booleancls(),callable:function(obj,args){return AZh(obj,args[0]);}},{name:"hashCode",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:function(obj,args){return AMg(obj);}},{name:"toFloatBits",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_floatcls(),callable:function(obj,args){return AR3(obj);}},{name
:"toIntBits",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:function(obj,args){return ATV(obj);}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BN,callable:function(obj,args){return AGW(obj);}},{name:"valueOf",modifiers:512,accessLevel:3,parameterTypes:[BN],returnType:Bi,callable:function(obj,args){Bv();return AF9(args[0]);}},{name:"valueOf",modifiers:512,accessLevel:3,parameterTypes:[BN,Bi],returnType:Bi,callable:function(obj,args){Bv();return ACU(args[0],
args[1]);}},{name:"toFloatBits",modifiers:512,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_floatcls(),callable:function(obj,args){Bv();return AFX(AWa(args[0]),AWa(args[1]),AWa(args[2]),AWa(args[3]));}},{name:"toFloatBits",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_floatcls(),callable:function(obj,args){Bv();return AIG(A8V(args[0]),A8V(args[1]),A8V(args[2]),A8V(args[3]));}},{name:
"toIntBits",modifiers:512,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_intcls(),callable:function(obj,args){Bv();return AKO(AWa(args[0]),AWa(args[1]),AWa(args[2]),AWa(args[3]));}},{name:"alpha",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bv();return AIL(A8V(args[0]));}},{name:"luminanceAlpha",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable
:function(obj,args){Bv();return A$$(A8V(args[0]),A8V(args[1]));}},{name:"rgb565",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bv();return A2v(A8V(args[0]),A8V(args[1]),A8V(args[2]));}},{name:"rgba4444",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bv();return ALj(A8V(args[0]),A8V(args[1]),A8V(args[2]),A8V(args[3]));}},
{name:"rgb888",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bv();return AKM(A8V(args[0]),A8V(args[1]),A8V(args[2]));}},{name:"rgba8888",modifiers:512,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bv();return A9B(A8V(args[0]),A8V(args[1]),A8V(args[2]),A8V(args[3]));}},{name:"argb8888",modifiers:512,accessLevel:3,parameterTypes
:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_intcls(),callable:function(obj,args){Bv();return A1o(A8V(args[0]),A8V(args[1]),A8V(args[2]),A8V(args[3]));}},{name:"rgb565",modifiers:512,accessLevel:3,parameterTypes:[Bi],returnType:$rt_intcls(),callable:function(obj,args){Bv();return AON(args[0]);}},{name:"rgba4444",modifiers:512,accessLevel:3,parameterTypes:[Bi],returnType:$rt_intcls(),callable:function(obj,args){Bv();return A6O(args[0]);}},{name:"rgb888",modifiers:512,accessLevel
:3,parameterTypes:[Bi],returnType:$rt_intcls(),callable:function(obj,args){Bv();return ANS(args[0]);}},{name:"rgba8888",modifiers:512,accessLevel:3,parameterTypes:[Bi],returnType:$rt_intcls(),callable:function(obj,args){Bv();return AEJ(args[0]);}},{name:"argb8888",modifiers:512,accessLevel:3,parameterTypes:[Bi],returnType:$rt_intcls(),callable:function(obj,args){Bv();return A1$(args[0]);}},{name:"rgb565ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bi,$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,
args){Bv();A9$(args[0],AWa(args[1]));return null;}},{name:"rgba4444ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bi,$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){Bv();A4J(args[0],AWa(args[1]));return null;}},{name:"rgb888ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bi,$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){Bv();A47(args[0],AWa(args[1]));return null;}},{name:"rgba8888ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bi,$rt_intcls()],returnType
:$rt_voidcls(),callable:function(obj,args){Bv();Id(args[0],AWa(args[1]));return null;}},{name:"argb8888ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bi,$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){Bv();APG(args[0],AWa(args[1]));return null;}},{name:"abgr8888ToColor",modifiers:512,accessLevel:3,parameterTypes:[Bi,$rt_floatcls()],returnType:$rt_voidcls(),callable:function(obj,args){Bv();Zu(args[0],A8V(args[1]));return null;}},{name:"fromHsv",modifiers:0,accessLevel:3,parameterTypes
:[$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:Bi,callable:function(obj,args){return A7i(obj,A8V(args[0]),A8V(args[1]),A8V(args[2]));}},{name:"fromHsv",modifiers:0,accessLevel:3,parameterTypes:[$rt_arraycls($rt_floatcls())],returnType:Bi,callable:function(obj,args){return AU4(obj,args[0]);}},{name:"toHsv",modifiers:0,accessLevel:3,parameterTypes:[$rt_arraycls($rt_floatcls())],returnType:$rt_arraycls($rt_floatcls()),callable:function(obj,args){return A6Y(obj,args[0]);}},{name:"cpy",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:Bi,callable:function(obj,args){return A9h(obj);}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){Bv();AUL();return null;}}];}
function A_m(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!a.hf()&&!a.GO()){if(a.iN===null){AZG();b=(a.z6()).$meta;c=b.methods;a.iN=Y(FA,c.length);d=0;e=0;while(e<c.length){f=c[e];if($rt_str(f.name).z(B(398))){g=f.parameterTypes;h=Y(Jx,g.length);i=0;while(true){j=h.data;if(i>=j.length)break;j[i]=Lg(g[i]);i=i+1|0;}j=a.iN.data;k=d+1|0;l=new FA;b=$rt_str(f.name);m=f.modifiers;AAF(l,a,b,m,f.accessLevel,h,Gk(f.callable,"call"));j[d]=l;d=k;}e=e+1|0;}a.iN=I8(a.iN,d);}return a.iN.go();}return Y(FA,0);}
function AS5(a){var b,c,d,e,f,g,h,i,j;b=a.rr();c=b.data;d=c.length;e=Y(FA,d);f=0;g=0;while(g<d){h=c[g];if(Kq(h.sp())){i=e.data;j=f+1|0;i[f]=h;f=j;}g=g+1|0;}if(f<e.data.length)e=I8(e,f);return e;}
function A7O(a,b){var c,d,e,f;c=(a.rr()).data;d=c.length;e=0;while(true){if(e>=d)G(ASX());f=c[e];if(ABl(f.vy(),b))break;e=e+1|0;}return f;}
function A7M(a,b){var c,d,e,f;c=(a.rr()).data;d=c.length;e=0;while(true){if(e>=d)G(ASX());f=c[e];if(Kq(f.sp())&&ABl(f.vy(),b))break;e=e+1|0;}return f;}
var CO=D();
var Zj=D(CO);
var DM=D(0);
function ACb(){var a=this;C.call(a);a.H=null;a.br=0;}
function A_K(){var a=new ACb();AXB(a);return a;}
function Bfn(a){var b=new ACb();AVk(b,a);return b;}
function AXB(a){J(a);a.H=Bc(0);}
function AVk(a,b){J(a);a.H=Bc(((b+32|0)-1|0)/32|0);}
function APx(a,b){var c,d;c=b/32|0;if(b>=a.br){GY(a,c+1|0);a.br=b+1|0;}d=a.H.data;d[c]=d[c]|1<<(b%32|0);}
function AJZ(a,b,c){var d,e,f,g;if(b>c)G(C$());d=b/32|0;e=c/32|0;if(c>a.br){GY(a,e+1|0);a.br=c;}if(d==e){f=a.H.data;f[d]=f[d]|F8(a,b)&GQ(a,c);}else{f=a.H.data;f[d]=f[d]|F8(a,b);g=d+1|0;while(g<e){a.H.data[g]=(-1);g=g+1|0;}if(c&31){f=a.H.data;f[e]=f[e]|GQ(a,c);}}}
function F8(a,b){var c;c=b%32|0;return (-1)<<c;}
function GQ(a,b){var c;c=b%32|0;return !c?0:(-1)>>>(32-c|0);}
function A_I(a,b){var c,d;c=b/32|0;if(c<a.H.data.length){d=a.H.data;d[c]=d[c]&Yk((-2),b%32|0);if(b==(a.br-1|0))Fj(a);}}
function AVx(a,b,c){var d,e,f,g,h;if(b>c)G(C$());if(b>=a.br)return;d=Bq(a.br,c);e=b/32|0;f=d/32|0;if(e==f){g=a.H.data;g[e]=g[e]&(GQ(a,b)|F8(a,d));}else{g=a.H.data;g[e]=g[e]&GQ(a,b);h=e+1|0;while(h<f){a.H.data[h]=0;h=h+1|0;}if(d&31){g=a.H.data;g[f]=g[f]&F8(a,d);}}Fj(a);}
function AVD(a,b){var c;c=b/32|0;return c<a.H.data.length&&a.H.data[c]&1<<(b%32|0)?1:0;}
function A$W(a,b){var c,d,e,f,g;if(b>=a.br)return (-1);c=b/32|0;d=a.H.data[c];e=d>>>(b%32|0);if(e)return E3(e)+b|0;f=(a.br+31|0)/32|0;g=c+1|0;while(g<f){if(a.H.data[g])return (g*32|0)+E3(a.H.data[g])|0;g=g+1|0;}return (-1);}
function AO7(a,b){var c,d,e,f,g;if(b>=a.br)return b;c=b/32|0;d=a.H.data[c]^(-1);e=d>>>(b%32|0);if(e)return E3(e)+b|0;f=(a.br+31|0)/32|0;g=c+1|0;while(g<f){if(a.H.data[g]!=(-1))return (g*32|0)+E3(a.H.data[g]^(-1))|0;g=g+1|0;}return a.br;}
function GY(a,b){var c;if(a.H.data.length>=b)return;c=Bf((b*3|0)/2|0,(a.H.data.length*2|0)+1|0);a.H=ATB(a.H,c);}
function Fj(a){var b,c,d;b=(a.br+31|0)/32|0;a.br=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Mv(a.H.data[c]);if(d<32)break;c=c+(-1)|0;a.br=a.br-32|0;}a.br=a.br-d|0;}}
function AOG(a,b){var c,d;c=Bq(a.H.data.length,b.H.data.length);d=0;while(d<c){if(a.H.data[d]&b.H.data[d])return 1;d=d+1|0;}return 0;}
function A9Y(a,b){var c,d,e;c=Bq(a.H.data.length,b.H.data.length);d=0;while(d<c){e=a.H.data;e[d]=e[d]&b.H.data[d];d=d+1|0;}while(c<a.H.data.length){a.H.data[c]=0;c=c+1|0;}a.br=Bq(a.br,b.br);Fj(a);}
function ATR(a,b){var c,d,e;c=Bq(a.H.data.length,b.H.data.length);d=0;while(d<c){e=a.H.data;e[d]=e[d]&(b.H.data[d]^(-1));d=d+1|0;}Fj(a);}
function A9P(a,b){var c,d,e;a.br=Bf(a.br,b.br);GY(a,(a.br+31|0)/32|0);c=Bq(a.H.data.length,b.H.data.length);d=0;while(d<c){e=a.H.data;e[d]=e[d]|b.H.data[d];d=d+1|0;}}
function A2P(a,b){var c,d,e;a.br=Bf(a.br,b.br);GY(a,(a.br+31|0)/32|0);c=Bq(a.H.data.length,b.H.data.length);d=0;while(d<c){e=a.H.data;e[d]=e[d]^b.H.data[d];d=d+1|0;}Fj(a);}
function A98(a){return a.br?0:1;}
function VE(){Q.call(this);this.Jf=null;}
function Bax(a){var b=new VE();A_n(b,a);return b;}
function A_n(a,b){a.Jf=b;Be(a);}
function AHl(a,b){return Rw(b);}
var NU=D(0);
function FN(){var a=this;C.call(a);a.cq=null;a.c9=null;a.ds=null;a.jA=null;a.hs=null;a.eK=null;a.hS=null;a.la=0.0;a.jP=0.0;a.kx=0.0;a.me=0.0;a.r2=null;a.c6=null;a.Gl=null;}
function Lv(a){J(a);a.cq=S();a.c9=Cl(0.0,0.0,(-1.0));a.ds=Cl(0.0,1.0,0.0);a.jA=BL();a.hs=BL();a.eK=BL();a.hS=BL();a.la=1.0;a.jP=100.0;a.kx=0.0;a.me=0.0;a.r2=Bff();a.c6=S();a.Gl=A_9(S(),S());}
function AIM(a,b,c,d){var e;((a.c6.I(b,c,d)).gl(a.cq)).bU();if(!a.c6.yq()){e=a.c6.yA(a.ds);if(CH(e-1.0)<9.999999717180685E-10)(a.ds.M(a.c9)).em((-1.0));else if(CH(e+1.0)<9.999999717180685E-10)a.ds.M(a.c9);a.c9.M(a.c6);a.HT();}}
function A0L(a){(a.c6.M(a.c9)).iC(a.ds);((a.ds.M(a.c6)).iC(a.c9)).bU();}
function A57(a,b,c){a.c9.rA(b,c);a.ds.rA(b,c);}
function APe(a,b,c,d){a.c6.M(b);a.c6.gl(a.cq);a.k_(a.c6);a.Gd(c,d);a.c6.rA(c,d);a.Kx( -a.c6.n, -a.c6.o, -a.c6.q);}
function API(a,b,c,d){a.cq.AR(b,c,d);}
function A_k(a,b){a.cq.fB(b);}
function QG(){var a=this;FN.call(a);a.lJ=0.0;a.yT=null;}
function Beq(){var a=new QG();AF8(a);return a;}
function AF8(a){Lv(a);a.lJ=1.0;a.yT=S();a.la=0.0;}
function AYy(a){a.p$(1);}
function A_y(a,b){a.jA.zf(a.lJ* -a.kx/2.0,a.lJ*a.kx/2.0,a.lJ* -(a.me/2.0),a.lJ*a.me/2.0,a.la,a.jP);a.hs.B4(a.cq,(a.yT.M(a.cq)).fB(a.c9),a.ds);a.eK.ch(a.jA);G9(a.eK.c,a.hs.c);if(b){a.hS.ch(a.eK);MY(a.hS.c);a.r2.AK(a.hS);}}
var Hc=D(0);
function HO(){var a=this;C.call(a);a.c4=null;a.oR=0;a.w6=0;a.ii=0;a.l8=0;a.nN=0;}
function A0Q(a,b){var c=new HO();AYA(c,a,b);return c;}
function BkP(a){var b=new HO();ABv(b,a);return b;}
function AYA(a,b,c){J(a);a.ii=1;a.l8=0;a.w6=1;a.c4=AAU(c);a.c4.db();a.oR=Bip.i5();a.nN=!b?35048:35044;}
function ABv(a,b){J(a);a.ii=1;a.l8=0;a.w6=1;a.c4=AAU(b);a.c4.db();a.oR=Bip.i5();a.nN=35044;}
function AJ5(a){return BD(a.c4);}
function AVw(a){return CV(a.c4);}
function ANU(a,b,c,d){a.ii=1;a.c4.c1();a.c4.DG(b,c,d);a.c4.db();if(a.l8){Bip.fD(34963,BD(a.c4),a.c4,a.nN);a.ii=0;}}
function AUK(a){a.ii=1;return a.c4;}
function A9R(a){if(!a.oR)G(U(B(399)));Bip.c$(34963,a.oR);if(a.ii){Bip.fD(34963,BD(a.c4),a.c4,a.nN);a.ii=0;}a.l8=1;}
function A6_(a){Bip.c$(34963,0);a.l8=0;}
var Qu=D(HO);
function BcK(a){var b=new Qu();A5j(b,a);return b;}
function A5j(a,b){ABv(a,b);}
function JA(){D3.call(this);this.LG=0.0;}
var BkQ=0.0;var BkR=null;function Qx(){Qx=N(JA);AOY();}
function A8V(a){return a.LG;}
function D_(b){var c,d,e,f,g,h,i,j,k,l,m,n;Qx();if(b.bN())G(Ec());c=0;d=b.i();while(true){if(b.f(c)>32){while(b.f(d-1|0)<=32){d=d+(-1)|0;}e=0;if(b.f(c)==45){c=c+1|0;e=1;}else if(b.f(c)==43)c=c+1|0;if(c==d)G(Ec());a:{f=b.f(c);g=0;h=0;i=0;if(f!=46){i=1;if(f>=48&&f<=57){b:{while(c<d){if(b.f(c)!=48)break b;c=c+1|0;}}while(c<d){j=b.f(c);if(j<48)break a;if(j>57)break a;if(g>=214748355)h=h+1|0;else g=(g*10|0)+(j-48|0)|0;c=c+1|0;}}else G(Ec());}}if(c<d&&b.f(c)==46){c=c+1|0;c:{while(true){if(c>=d)break c;k=b.f(c);if
(k<48)break c;if(k>57)break;if(g<214748355){g=(g*10|0)+(k-48|0)|0;h=h+(-1)|0;}c=c+1|0;i=1;}}if(!i)G(Ec());}if(c<d){j=b.f(c);if(j!=101&&j!=69)G(Ec());j=c+1|0;l=0;if(j==d)G(Ec());if(b.f(j)==45){j=j+1|0;l=1;}else if(b.f(j)==43)j=j+1|0;m=0;n=0;d:{while(true){if(j>=d)break d;k=b.f(j);if(k<48)break d;if(k>57)break;m=(10*m|0)+(k-48|0)|0;n=1;j=j+1|0;}}if(!n)G(Ec());if(l)m= -m|0;h=h+m|0;}e:{j=B9(h,38);if(j<=0){if(j)break e;if(g<=34028234)break e;}return e?(-Infinity):Infinity;}if(e)g= -g|0;return g*AAO(h);}c=c+1|0;if
(c==d)break;}G(Ec());}
function AAO(b){var c,d;Qx();if(b>=0)c=10.0;else{c=0.1;b= -b|0;}d=1.0;while(b){if(b%2|0)d=d*c;c=c*c;b=b/2|0;}return d;}
function Oj(b){Qx();return $rt_floatToIntBits(b);}
function AOY(){BkQ=NaN;BkR=F($rt_floatcls());}
var V_=D();
function JX(b,c){var d,e,f,g;d=b.data;e=BW(c);f=Bq(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Oh(b,c){var d,e,f,g;d=b.data;e=Cj(c);f=Bq(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function ATB(b,c){var d,e,f,g;d=b.data;e=Bc(c);f=Bq(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function I8(b,c){var d,e,f,g;d=b.data;e=Lu((Ck(b)).gq(),c);f=Bq(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function AZT(b,c,d,e){var f,g;if(c>d)G(CL());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function IG(b,c){AZT(b,0,b.data.length,c);}
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
function BdR(a){var b=new VY();AE6(b,a);return b;}
function AE6(a,b){a.nk=b;C7(a);}
function A_l(a,b,c){var d,e;d=El();e=d.AM();e.G4(AET(a.nk),Bcx(a,e));d.AM();return 1;}
var Mt=D();
var BkS=null;function BdL(){BdL=N(Mt);AKa();}
function AKa(){BkS=Bc((QJ()).data.length);BkS.data[BC(BkT)]=1;BkS.data[BC(BkU)]=2;BkS.data[BC(BkV)]=3;BkS.data[BC(BkW)]=4;}
function Wy(){var a=this;Q.call(a);a.sY=0;a.BP=null;a.tS=null;}
function Bc8(a,b,c){var d=new Wy();ATu(d,a,b,c);return d;}
function ATu(a,b,c,d){a.tS=b;a.sY=c;a.BP=d;Be(a);}
function AQk(a,b){return !(a.sY^a.tS.bc.eL(b))&&!(a.sY^a.tS.e_^a.BP.p(b))?0:1;}
function WF(){var a=this;Q.call(a);a.xV=0;a.CS=null;a.CA=null;a.QE=null;}
function Bc5(a,b,c,d){var e=new WF();A0c(e,a,b,c,d);return e;}
function A0c(a,b,c,d,e){a.QE=b;a.xV=c;a.CS=d;a.CA=e;Be(a);}
function AC5(a,b){return a.xV^(!a.CS.p(b)&&!a.CA.p(b)?0:1)?0:1;}
function WA(){var a=this;Q.call(a);a.CX=null;a.N$=null;}
function BaL(a,b){var c=new WA();ADg(c,a,b);return c;}
function ADg(a,b,c){a.N$=b;a.CX=c;Be(a);}
function A64(a,b){return a.CX.p(b);}
var M7=D(0);
function Wz(){var a=this;Q.call(a);a.qh=0;a.zy=null;a.r6=null;}
function Baw(a,b,c){var d=new Wz();ADs(d,a,b,c);return d;}
function ADs(a,b,c,d){a.r6=b;a.qh=c;a.zy=d;Be(a);}
function A3v(a,b){return !(a.qh^a.r6.bc.eL(b))&&!(a.qh^a.r6.e_^a.zy.p(b))?1:0;}
function WB(){var a=this;Q.call(a);a.xl=null;a.QS=null;}
function BaI(a,b){var c=new WB();ADp(c,a,b);return c;}
function ADp(a,b,c){a.QS=b;a.xl=c;Be(a);}
function AJr(a,b){return a.xl.p(b);}
function WI(){var a=this;Q.call(a);a.yx=null;a.DH=0;a.yp=null;}
function A_2(a,b,c){var d=new WI();AHe(d,a,b,c);return d;}
function AHe(a,b,c,d){a.yp=b;a.yx=c;a.DH=d;Be(a);}
function AYu(a,b){return !a.yx.p(b)&&!(a.DH^a.yp.bc.eL(b))?1:0;}
var GS=D(0);
function WD(){var a=this;Q.call(a);a.Fl=0;a.zz=null;a.zs=null;a.Mi=null;}
function BfV(a,b,c,d){var e=new WD();ADP(e,a,b,c,d);return e;}
function ADP(a,b,c,d,e){a.Mi=b;a.Fl=c;a.zz=d;a.zs=e;Be(a);}
function AY_(a,b){return a.Fl^(!a.zz.p(b)&&!a.zs.p(b)?0:1);}
function WC(){var a=this;Q.call(a);a.E0=null;a.MG=null;}
function Bf5(a,b){var c=new WC();AUU(c,a,b);return c;}
function AUU(a,b,c){a.MG=b;a.E0=c;Be(a);}
function AMC(a,b){return a.E0.p(b)?0:1;}
function P3(){BB.call(this);this.rC=null;}
function Bb_(a){var b=new P3();AGw(b,a);return b;}
function AGw(a,b){CQ(a);a.rC=b;}
function A5c(a,b,c,d){var e,f,g,h,i;e=d.J();f=b+1|0;if(f>e){d.d5=1;return (-1);}g=c.f(b);if(BY(g)){h=b+2|0;if(h<=e){i=c.f(f);if(GA(g,i))return a.rC.k1(Dh(g,i))?(-1):a.k.e(h,c,d);}}return a.rC.k1(g)?(-1):a.k.e(f,c,d);}
function AYl(a){return B(400);}
function A7o(a,b){a.k=b;}
function AC3(a){return (-2147483602);}
function ATP(a,b){return 1;}
function WG(){var a=this;Q.call(a);a.yb=null;a.CV=0;a.y5=null;}
function BdD(a,b,c){var d=new WG();A0K(d,a,b,c);return d;}
function A0K(a,b,c,d){a.y5=b;a.yb=c;a.CV=d;Be(a);}
function AR0(a,b){return !a.yb.p(b)&&!(a.CV^a.y5.bc.eL(b))?0:1;}
var DK=D();
var BkX=null;var BkY=null;var BkZ=null;var Bk0=null;var Bk1=null;var Bk2=null;function Bd(){Bd=N(DK);AVV();}
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
function NL(b,c){Bd();return ABc(b,c);}
function ABc(b,c){var d;Bd();if(c>=2&&c<=36){d=MH(b);if(d>=c)d=(-1);return d;}return (-1);}
function Nn(b){Bd();return MH(b);}
function MH(b){var c,d,e,f,g,h,i,j;Bd();c=OS();d=c.data;e=0;f=(d.length/2|0)-1|0;while(f>=e){g=(e+f|0)/2|0;h=g*2|0;i=d[h];j=B9(b,i);if(j>0)e=g+1|0;else{if(j>=0)return d[h+1|0];f=g-1|0;}}return (-1);}
function FQ(b,c){Bd();if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function ACI(b){Bd();return Cv(b)!=9?0:1;}
function OS(){Bd();if(BkY===null)BkY=A$t(((R6()).value!==null?$rt_str((R6()).value):null));return BkY;}
function R6(){Bd();if(Bk1===null)Bk1=YS();return Bk1;}
function YU(){Bd();if(BkZ===null)BkZ=AUe(((Yh()).value!==null?$rt_str((Yh()).value):null));return BkZ;}
function Yh(){Bd();if(Bk2===null)Bk2=U1();return Bk2;}
function Eu(b){var c;Bd();if(b<65536){c=BW(1);c.data[0]=b&65535;return c;}return I5([FB(b),Fi(b)]);}
function Q8(b){var c;Bd();a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}c=1;break a;}c=0;}return c;}
function F_(b){Bd();return Cv(b);}
function Cv(b){var c,d,e,f,g,h;Bd();if(VI(b)&&Jz(b&65535))return 19;c=YU();d=c.data;e=0;f=d.length-1|0;while(e<=f){g=(e+f|0)/2|0;h=d[g];if(b>=h.ye)e=g+1|0;else{if(b>=h.tL)return h.Cr.data[b-h.tL|0];f=g-1|0;}}return 0;}
function Uh(b){Bd();return Cv(b)!=2?0:1;}
function Vs(b){Bd();return Cv(b)!=1?0:1;}
function O6(b){Bd();return Cv(b)!=3?0:1;}
function RM(b){Bd();return !Cv(b)?0:1;}
function Ue(b){Bd();switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:break;default:return 0;}return 1;}
function M9(b){Bd();return J0(b);}
function J0(b){Bd();a:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Rw(b){Bd();a:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return Fx(b);}
function UX(b){Bd();a:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return Fx(b);}
function Uw(b){Bd();a:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break a;default:break a;}return 1;}return Fx(b);}
function Yj(b){Bd();a:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break a;default:break a;}return 1;}return Fx(b);}
function Fx(b){Bd();a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Cv(b)!=16?0:1;}
function MS(b){Bd();switch(Cv(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Ta(b){Bd();return KK(b);}
function KK(b){Bd();switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return MS(b);}return 1;}
function AVV(){BkX=F($rt_charcls());Bk0=Y(DK,128);}
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
function OQ(){var a=this;BJ.call(a);a.sJ=0;a.A2=0;}
function AXI(a){var b=new OQ();APW(b,a);return b;}
function APW(a,b){C2(a);a.sJ=b;a.A2=GF(b);}
function ADH(a,b,c){return a.sJ!=c.f(b)&&a.A2!=c.f(b)?(-1):1;}
function AKd(a){return (((I()).a(B(401))).U(a.sJ)).b();}
function Dv(){var a=this;BJ.call(a);a.mL=0;a.lW=0;a.m3=0;}
function Bac(a){var b=new Dv();ATN(b,a);return b;}
function ATN(a,b){var c,d;C2(a);a.bO=2;a.m3=b;c=Eu(b);d=c.data;a.mL=d[0];a.lW=d[1];}
function A60(a,b,c){var d,e,f;d=b+1|0;e=c.f(b);f=c.f(d);return a.mL==e&&a.lW==f?2:(-1);}
function A4H(a,b,c,d){var e,f,g,h;if(!(c instanceof BN))return F3(a,b,c,d);e=c;f=d.J();while(b<f){g=e.eH(a.mL,b);if(g<0)return (-1);b=g+1|0;if(b>=f)continue;h=e.f(b);if(a.lW==h&&a.k.e(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AF1(a,b,c,d,e){var f,g,h;if(!(d instanceof BN))return Gb(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.mK(a.lW,c);h=g+(-1)|0;if(h<0)break a;if(h<b)break a;if(a.mL==f.f(h)&&a.k.e(h+2|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function A9F(a){return ((((I()).a(B(101))).U(a.mL)).U(a.lW)).b();}
function AUZ(a){return a.m3;}
function A6G(a,b){if(b instanceof Dv)return b.sT()!=a.m3?0:1;if(b instanceof C4)return b.p(a.m3);if(b instanceof Dz)return 0;if(!(b instanceof Dx))return 1;return 0;}
function Zd(){var a=this;T.call(a);a.st=0;a.qi=0;a.vW=0;}
function G6(a,b){var c=new Zd();AHL(c,a,b);return c;}
function Bem(a,b,c){var d=new Zd();AUA(d,a,b,c);return d;}
function AHL(a,b,c){Bo(a);a.qi=c;a.st=b;}
function AUA(a,b,c,d){Bo(a);a.vW=d;a.qi=c;a.st=b;}
function ADa(a){var b;b=A_8(a.st);if(a.vW)b.bG.n4(0,2048);b.be=a.qi;return b;}
var Sw=D();
function Se(){var a=this;C.call(a);a.y0=null;a.gC=null;a.gp=null;a.fQ=null;}
function Bft(){var a=new Se();A6h(a);return a;}
function A6h(a){J(a);a.gC=null;a.gp=null;a.fQ=null;}
var D9=D();
var Bk3=null;var Bk4=null;function Km(a){J(a);}
function MO(b){if(!(b&1)){if(Bk4!==null)return Bk4;Bk4=BfJ();return Bk4;}if(Bk3!==null)return Bk3;Bk3=Bfg();return Bk3;}
var HU=D(CT);
function ZD(a,b,c,d){FJ(a,b);a.C=c;a.bb=d;}
function UR(b){if(b>=0)return Bdu(b);G(W((((I()).a(B(402))).j(b)).b()));}
function Zl(b,c,d){return Bb2(0,b.data.length,b,c,c+d|0,0);}
function La(b){return Zl(b,0,b.data.length);}
function AEr(a,b,c,d){var e,f,g,h,i;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bg((((((I()).a(B(403))).j(g)).a(B(404))).j(f)).b()));if(Bb(a)<d)G(UB());if(d<0)G(Bg(((((I()).a(B(405))).j(d)).a(B(406))).b()));h=a.C;i=0;while(i<d){g=c+1|0;f=h+1|0;e[c]=a.z1(h);i=i+1|0;c=g;h=f;}a.C=a.C+d|0;return a;}}e=b.data;G(Bg(((((((I()).a(B(407))).j(c)).a(B(64))).j(e.length)).a(B(24))).b()));}
function APC(a,b){return a.rk(b,0,b.data.length);}
function A_o(a,b,c,d){var e,f,g,h,i;if(a.b_())G(C9());if(Bb(a)<d)G(F0());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bg((((((I()).a(B(408))).j(g)).a(B(404))).j(f)).b()));if(d<0)G(Bg(((((I()).a(B(405))).j(d)).a(B(406))).b()));h=a.C;i=0;while(i<d){g=h+1|0;f=c+1|0;a.sc(h,e[c]);i=i+1|0;h=g;c=f;}a.C=a.C+d|0;return a;}}e=b.data;G(Bg(((((((I()).a(B(407))).j(c)).a(B(64))).j(e.length)).a(B(24))).b()));}
function AWA(a,b,c,d){var e,f,g,h,i,j;if(a.b_())G(C9());e=d-c|0;if(Bb(a)<e)G(F0());if(c>=0&&c<b.i()){if(d>b.i()){f=new Ej;g=(((I()).a(B(408))).j(d)).a(B(409));M6(f,(g.j(b.i())).b());G(f);}if(c>d)G(Bg((((((I()).a(B(410))).j(c)).a(B(411))).j(d)).b()));h=a.C;while(c<d){i=h+1|0;j=c+1|0;a.sc(h,b.f(c));h=i;c=j;}a.C=a.C+e|0;return a;}G(Bg(((((((I()).a(B(410))).j(c)).a(B(64))).j(b.i())).a(B(24))).b()));}
function IV(a,b){return a.H0(b,0,b.i());}
function WJ(a){return a.Ox();}
function NK(a){return a.NE();}
function K$(a){G7(a);return a;}
function AMn(a,b){GL(a,b);return a;}
var Hs=D(HU);
function Qd(a,b,c,d){ZD(a,b,c,d);}
function AEu(a){var b,c,d,e;if(a.b_())G(C9());a:{b=Bb(a);if(a.C>0){c=a.C;d=0;while(true){if(d>=b)break a;e=c+1|0;a.sc(d,a.z1(c));d=d+1|0;c=e;}}}a.C=b;a.bb=a.hB;a.fE=(-1);return a;}
function A$R(a){return a.e1();}
function Ro(){var a=this;Hs.call(a);a.Fx=0;a.u8=0;a.nC=null;}
function Bdu(a){var b=new Ro();A50(b,a);return b;}
function Bb2(a,b,c,d,e,f){var g=new Ro();Va(g,a,b,c,d,e,f);return g;}
function A50(a,b){Va(a,0,b,BW(b),0,b,0);}
function Va(a,b,c,d,e,f,g){Qd(a,c,e,f);a.u8=b;a.Fx=g;a.nC=d;}
function A5g(a,b){return a.nC.data[b+a.u8|0];}
function A3i(a,b,c){a.nC.data[b+a.u8|0]=c;}
function AOb(a){return 1;}
function AIS(a){return a.nC;}
function ATm(a){return a.Fx;}
function S8(){var a=this;C.call(a);a.fr=0;a.eI=null;a.eM=null;a.gV=null;a.ik=0;a.xh=0.0;a.qb=0;a.q4=0;a.h3=0;}
function BdE(a){var b=new S8();AQj(b,a);return b;}
function Bk5(a,b){var c=new S8();Q3(c,a,b);return c;}
function AQj(a,b){Q3(a,b,0.800000011920929);}
function Q3(a,b,c){var d;J(a);if(c>0.0&&c<1.0){a.xh=c;d=G3(b,c);a.qb=d*c|0;a.h3=d-1|0;a.q4=CW(O(a.h3));a.eI=Bc(d);a.eM=Y(C,d);return;}G(W((((I()).a(B(40))).cD(c)).b()));}
function AJj(a,b){return Cp(CN(Cf(O(b),Cd(2135587861, 2654435769)),a.q4));}
function IO(a,b){var c,d,e;c=a.eI;d=a.e8(b);while(true){e=c.data[d];if(!e)return  -(d+1|0)|0;if(e==b)break;d=(d+1|0)&a.h3;}return d;}
function A0X(a,b,c){var d,e,f;if(!b){d=a.gV;a.gV=c;if(!a.ik){a.ik=1;a.fr=a.fr+1|0;}return d;}e=IO(a,b);if(e>=0){d=a.eM.data[e];a.eM.data[e]=c;return d;}f= -(e+1|0)|0;a.eI.data[f]=b;a.eM.data[f]=c;f=a.fr+1|0;a.fr=f;if(f>=a.qb)TK(a,a.eI.data.length<<1);return null;}
function Xo(a,b,c){var d,e,f;d=a.eI;e=a.e8(b);while(true){f=d.data;if(!f[e])break;e=(e+1|0)&a.h3;}f[e]=b;a.eM.data[e]=c;}
function AT3(a,b){var c;if(!b)return !a.ik?null:a.gV;c=IO(a,b);return c<0?null:a.eM.data[c];}
function A9G(a,b){var c,d,e,f,g,h,i,j,k,l;if(!b){if(!a.ik)return null;a.ik=0;c=a.gV;a.gV=null;a.fr=a.fr-1|0;return c;}d=IO(a,b);if(d<0)return null;e=a.eI;f=a.eM;g=f.data;c=g[d];h=a.h3;i=(d+1|0)&h;while(true){j=e.data;k=j[i];if(!k)break;l=a.e8(k);if(((i-l|0)&h)>((d-l|0)&h)){j[d]=k;g[d]=g[i];d=i;}i=(i+1|0)&h;}j[d]=0;g[d]=null;a.fr=a.fr-1|0;return c;}
function ATH(a,b,c){var d,e,f,g;a:{d=a.eM;if(b===null){if(a.ik&&a.gV===null)return 1;e=d.data;f=a.eI;g=e.length-1|0;while(true){if(g<0)break a;if(f.data[g]&&e[g]===null)break;g=g+(-1)|0;}return 1;}if(c){if(b===a.gV)return 1;e=d.data;g=e.length-1|0;while(true){if(g<0)break a;if(e[g]===b)break;g=g+(-1)|0;}return 1;}if(a.ik&&b.z(a.gV))return 1;e=d.data;g=e.length-1|0;while(true){if(g<0)break a;if(b.z(e[g]))return 1;g=g+(-1)|0;}}return 0;}
function TK(a,b){var c,d,e,f,g;a:{c=a.eI.data.length;a.qb=b*a.xh|0;a.h3=b-1|0;a.q4=CW(O(a.h3));d=a.eI;e=a.eM;a.eI=Bc(b);a.eM=Y(C,b);if(a.fr>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g)Xo(a,g,e.data[f]);f=f+1|0;}}}}
var ABC=D(Do);
function BdB(a){var b=new ABC();AHH(b,a);return b;}
function AHH(a,b){GH(a,b,1.0,1.0);}
function AP_(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(BY(l)){if(j==d){if(h.dO(2)){j=j+(-1)|0;break a;}Bj();i=BgY;break a;}m=k[j];if(!BG(m)){i=BV(1);break a;}j=j+(-1)|0;i=F$(2);break a;}if(BG(l))i=BV(1);if(l>=256){j=j+(-1)|0;i=F$(1);break a;}k=e.data;n=f+1|0;k[f]=l<<24>>24;c=j;f=n;}j=c;}h.el(j);h.dR(f);return i;}
function EA(){var a=this;C.call(a);a.fg=Ba;a.cA=null;a.n2=0;}
function ATE(){var a=new EA();Ly(a);return a;}
function Ly(a){J(a);a.cA=Bp();a.n2=1;}
function GP(a){if(!a.n2){a.cA.Dw(a);a.n2=1;}}
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
function RX(a,b,c){var d;if(b===a)return 1;if(b!==null&&Z(a.fg,b.fg)){if(!c)return 1;GP(a);GP(b);d=0;while(d<a.cA.h){if(!(a.cA.l(d)).zJ(b.cA.l(d)))return 0;d=d+1|0;}return 1;}return 0;}
function Q1(a,b,c){return Cp(D6(b.dc,c.dc));}
function Kb(a){return a.cA.bZ();}
function AWW(a){var b,c,d,e,f;GP(a);b=a.cA.h;c=CA(O(71),a.fg);d=1;e=0;while(e<b){f=Cf(a.fg,O((a.cA.l(e)).bp()));d=(d*7|0)&65535;c=CA(c,Cf(f,O(d)));e=e+1|0;}return Cp(ARp(c,M$(c,32)));}
function Wc(a){return a.Ge();}
function Vw(a,b){if(!(b instanceof EA))return 0;if(b===a)return 1;return RX(a,b,1);}
function AWC(a,b,c){return Q1(a,b,c);}
function F4(){EA.call(this);this.mv=null;}
var Bk6=0;function Jn(){Jn=N(F4);A9M();}
function Bk7(){var a=new F4();Kz(a);return a;}
function Bk8(a){var b=new F4();Jl(b,a);return b;}
function BdX(a){var b=new F4();NG(b,a);return b;}
function Bc$(a){var b=new F4();ACa(b,a);return b;}
function Bk9(a,b){var c=new F4();KM(c,a,b);return c;}
function Kz(a){var b,c;Jn();b=(I()).a(B(412));c=Bk6+1|0;Bk6=c;Jl(a,(b.j(c)).b());}
function Jl(a,b){Jn();Ly(a);a.mv=b;}
function NG(a,b){Jn();Kz(a);X6(a,b);}
function ACa(a,b){Jn();KM(a,b.mv,b);}
function KM(a,b,c){var d,e;Jn();Jl(a,b);d=Kb(c);while(d.bC()){e=d.bz();Ep(a,e.pf());}}
function A7r(a){return Bc$(a);}
function AL9(a){return Wc(a)+(3*a.mv.bp()|0)|0;}
function AIc(a,b){var c;a:{b:{if(b instanceof F4){if(b===a)break b;if(b.mv.z(a.mv)&&Vw(a,b))break b;}c=0;break a;}c=1;}return c;}
function A9M(){Bk6=0;}
function D5(){var a=this;C.call(a);a.rR=0;a.pF=0;a.hg=null;}
function N5(a){Ma(a,16,2147483647);}
function Ma(a,b,c){J(a);a.hg=AXR(0,b);a.rR=c;}
function OV(a){return !a.hg.h?a.tW():a.hg.vs();}
function AGG(a,b){if(b===null)G(W(B(413)));if(a.hg.h>=a.rR)a.Dc(b);else{a.hg.F(b);a.pF=Bf(a.pF,a.hg.h);a.zl(b);}}
function AJP(a,b){if(ARc(b,EJ))b.fV();}
function AYm(a,b){}
function UO(a,b){var c,d,e,f,g;if(b===null)G(W(B(41)));c=a.hg;d=a.rR;e=0;f=b.h;while(e<f){g=b.l(e);if(g!==null){if(c.h>=d)a.Dc(g);else{c.F(g);a.zl(g);}}e=e+1|0;}a.pF=Bf(a.pF,c.h);}
function DX(){D5.call(this);this.n1=null;}
function Jh(a){N5(a);a.n1=Bp();}
function Wi(a){var b;b=OV(a);a.n1.F(b);return b;}
function AMB(a){UO(a,a.n1);a.n1.K();}
var TD=D(DX);
function BdK(){var a=new TD();AEd(a);return a;}
function AEd(a){Jh(a);}
function AM8(a){return A_7();}
function A9l(a){var b;b=Wi(a);b.cw=null;b.da=null;b.cS.FY(B(101),null,0,0,0);b.kP=null;b.BS=null;return b;}
function AGJ(a){return a.K7();}
function ANH(a){return a.OT();}
function AAc(){Q.call(this);this.O9=null;}
function BcV(a){var b=new AAc();ADk(b,a);return b;}
function ADk(a,b){a.O9=b;Be(a);}
function A8_(a,b){return O6(b);}
function JG(){var a=this;C.call(a);a.dl=0.0;a.dj=0.0;a.dk=0.0;a.d7=0.0;}
var Bk$=null;var Bk_=null;function APS(){APS=N(JG);AJ4();}
function AAM(a,b,c,d){var e=new JG();Yd(e,a,b,c,d);return e;}
function AWh(){var a=new JG();Rs(a);return a;}
function Yd(a,b,c,d,e){APS();J(a);a.nx(b,c,d,e);}
function Rs(a){APS();J(a);a.Cj();}
function AH3(a,b,c,d,e){a.dl=b;a.dj=c;a.dk=d;a.d7=e;return a;}
function AM3(a,b){return a.nx(b.dl,b.dj,b.dk,b.d7);}
function AYU(a,b,c){return a.Kd(b.n,b.o,b.q,c);}
function A4p(a){return a.dl*a.dl+a.dj*a.dj+a.dk*a.dk+a.d7*a.d7;}
function ANo(a){var b,c;b=a.ua();if(b!==0.0&&!Dl(b,1.0)){c=FR(b);a.d7=a.d7/c;a.dl=a.dl/c;a.dj=a.dj/c;a.dk=a.dk/c;}return a;}
function A23(a,b){var c,d,e,f,g,h,i,j,k,l;c=b.data;d=a.dl*a.dl;e=a.dl*a.dj;f=a.dl*a.dk;g=a.dl*a.d7;h=a.dj*a.dj;i=a.dj*a.dk;j=a.dj*a.d7;k=a.dk*a.dk;l=a.dk*a.d7;c[0]=1.0-2.0*(h+k);c[4]=2.0*(e-l);c[8]=2.0*(f+j);c[12]=0.0;c[1]=2.0*(e+l);c[5]=1.0-2.0*(d+k);c[9]=2.0*(i-g);c[13]=0.0;c[2]=2.0*(f-j);c[6]=2.0*(i+g);c[10]=1.0-2.0*(d+h);c[14]=0.0;c[3]=0.0;c[7]=0.0;c[11]=0.0;c[15]=1.0;}
function A$P(a){return a.nx(0.0,0.0,0.0,1.0);}
function AEh(a,b,c,d,e){return a.J4(b,c,d,e*0.01745329238474369);}
function ARD(a,b,c,d,e){var f,g,h,i,j,k;f=TV(b,c,d);if(f===0.0)return a.Cj();g=1.0/f;h=e>=0.0?e%6.2831854820251465:6.2831854820251465- -e%6.2831854820251465;i=h/2.0;j=A8w(i);k=AEv(i);return (a.nx(g*b*j,g*c*j,g*d*j,k)).JT();}
function AJ4(){Bk$=AAM(0.0,0.0,0.0,0.0);Bk_=AAM(0.0,0.0,0.0,0.0);}
var Eb=D();
var Bla=null;var Blb=null;var Blc=null;var Bld=null;var Ble=null;var Blf=null;function Bd1(){Bd1=N(Eb);ANO();}
function ANO(){Hw();Bla=Bkm;Blb=Bb5();Blc=Bbr();Bld=RF(B(414),1,0);Ble=RF(B(415),0,0);Blf=RF(B(416),0,1);}
var NB=D();
var Blg=0;function Lb(){Lb=N(NB);A2Y();}
function AAW(b,c,d,e){var f;Lb();if(!Blg){MT(b,c,d,e);return;}a:{f=Bg1.u4();Vy();if(f!==BhW&&Bg1.u4()!==Bh0){f=Bg1;if(f.u4()!==Bh1){AAC(b,c,d,e);break a;}}XI(b,c);}}
function XI(b,c){var d,e,f,g,h,i,j;Lb();d=Bio;e=c.ky();f=c.bo();g=c.bl();h=c.l0();i=c.le();j=c.kA();d.kB(b,0,e,f,g,0,h,i,j);Bip.xa(b);}
function AAC(b,c,d,e){var f,g,h,i,j,k,l;Lb();a:{if(!Bil.tY(B(417))){f=Bil;if(!f.tY(B(418))&&Biq===null){MT(b,c,d,e);break a;}}f=Bio;g=c.ky();h=c.bo();i=c.bl();j=c.l0();k=c.le();l=c.kA();f.kB(b,0,g,h,i,0,j,k,l);Bip.xa(b);}}
function MT(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;Lb();f=Bio;g=c.ky();h=c.bo();i=c.bl();j=c.l0();k=c.le();l=c.kA();f.kB(b,0,g,h,i,0,j,k,l);if(Bip===null&&d!=e)G(U(B(419)));m=c.bo()/2|0;n=c.bl()/2|0;o=1;while(m>0&&n>0){p=O0(m,n,c.f8());Gv();p.D5(BjK);p.Lv(c,0,0,c.bo(),c.bl(),0,0,m,n);if(o>1)c.iz();f=Bio;j=p.ky();k=p.bo();q=p.bl();g=p.l0();h=p.le();l=p.kA();f.kB(b,o,j,k,q,0,g,h,l);m=p.bo()/2|0;n=p.bl()/2|0;o=o+1|0;c=p;}}
function A2Y(){Blg=1;}
function RI(){Q.call(this);this.Hk=null;}
function BbW(a){var b=new RI();A0g(b,a);return b;}
function A0g(a,b){a.Hk=b;Be(a);}
function AZ_(a,b){return 0;}
var G4=D();
var Blh=null;function R3(a){J(a);}
function El(){return Blh;}
function Y5(){C3.call(this);this.NY=null;}
function Bf4(a){var b=new Y5();AEZ(b,a);return b;}
function AEZ(a,b){FX(a);a.NY=b;}
var GI=D(CT);
function Py(a,b,c,d){FJ(a,b);a.C=c;a.bb=d;}
function AIu(b,c,d){return Be3(0,b.data.length,b,c,c+d|0,0);}
function A3T(b){return AIu(b,0,b.data.length);}
function A8x(a,b,c,d){var e,f,g,h,i;if(a.b_())G(C9());if(Bb(a)<d)G(F0());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bg((((((I()).a(B(420))).j(g)).a(B(404))).j(f)).b()));if(d<0)G(Bg(((((I()).a(B(405))).j(d)).a(B(406))).b()));h=a.C;i=0;while(i<d){g=h+1|0;f=c+1|0;a.qV(h,e[c]);i=i+1|0;h=g;c=f;}a.C=a.C+d|0;return a;}}e=b.data;G(Bg(((((((I()).a(B(407))).j(c)).a(B(64))).j(e.length)).a(B(24))).b()));}
function Uo(a){FZ(a);return a;}
function AB9(a){G7(a);return a;}
function APP(a,b){IZ(a,b);return a;}
function A7x(a,b){GL(a,b);return a;}
function A8E(a){return AB9(a);}
function ATL(a){return Uo(a);}
function A3A(a,b){return a.H5(b);}
function AVz(a,b){return a.HL(b);}
var Fh=D(GI);
function Lr(a,b,c,d){Py(a,b,c,d);}
function A6C(a,b){if(b>=0&&b<a.bb)return a.vn(b);G(Bg(((((((I()).a(B(354))).j(b)).a(B(64))).j(a.bb)).a(B(24))).b()));}
function A2y(a){return a.e1();}
function Fr(){var a=this;Fh.call(a);a.fH=null;a.wK=0;a.fC=0;}
function Lt(a,b,c,d,e,f,g){Lr(a,c,e,f);a.fC=b;a.fH=d;a.wK=g;}
function A1i(a){return a.wK;}
var VQ=D(Fr);
function BfZ(a,b,c,d,e,f){var g=new VQ();A3e(g,a,b,c,d,e,f);return g;}
function A3e(a,b,c,d,e,f,g){Lt(a,b,c,d,e,f,g);}
function AYt(a,b){var c,d,e,f;c=a.fH.A.data;d=a.fC;e=b*2|0;f=c[d+e|0]&255|(a.fH.A.data[(a.fC+e|0)+1|0]&255)<<8;return f<<16>>16;}
function AXO(a,b,c){var d,e,f;d=a.fH.A.data;e=a.fC;f=b*2|0;d[e+f|0]=c<<24>>24;a.fH.A.data[(a.fC+f|0)+1|0]=c>>8<<24>>24;}
function YH(){Q.call(this);this.Iw=null;}
function Baq(a){var b=new YH();A0h(b,a);return b;}
function A0h(a,b){a.Iw=b;Be(a);}
function AP0(a,b){return Q8(b);}
var DW=D(CT);
function AAy(a,b,c,d){FJ(a,b);a.C=c;a.bb=d;}
function A99(b,c,d){return Bbh(0,b.data.length,b,c,c+d|0,0);}
function AVr(b){return A99(b,0,b.data.length);}
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
function K3(a,b,c,d){AAy(a,b,c,d);}
function AK5(a,b){if(b>=0&&b<a.bb)return a.vo(b);G(Bg(((((((I()).a(B(354))).j(b)).a(B(64))).j(a.bb)).a(B(24))).b()));}
function A$N(a,b,c){if(a.b_())G(C9());if(b>=0&&b<a.bb){a.nh(b,c);return a;}G(Bg(((((((I()).a(B(354))).j(b)).a(B(64))).j(a.bb)).a(B(24))).b()));}
function AYP(a){return a.e1();}
function ER(){var a=this;Fu.call(a);a.cx=null;a.Fk=0;a.cj=0;}
function LP(a,b,c,d,e,f,g){K3(a,c,e,f);a.cj=b;a.cx=d;a.Fk=g;}
function A5D(a){return a.Fk;}
function ABL(){Bt.call(this);this.ma=0;}
function Bbs(a){var b=new ABL();A0u(b,a);return b;}
function A0u(a,b){Co(a);a.ma=b;}
function ALA(a,b,c,d){var e;e=!d.jB()?c.i():d.J();if(b>=e){d.by(a.ma,0);return a.k.e(b,c,d);}if((e-b|0)==1&&c.f(b)==10){d.by(a.ma,1);return a.k.e(b+1|0,c,d);}return (-1);}
function A0q(a,b){var c;c=!b.ev(a.ma)?0:1;b.by(a.ma,(-1));return c;}
function AMk(a){return B(422);}
function Ut(){BJ.call(this);this.sX=0;}
function A6D(a){var b=new Ut();A4t(b,a);return b;}
function A4t(a,b){C2(a);a.sX=Dq(DB(b));}
function AUw(a,b,c){return a.sX!=Dq(DB(c.f(b)))?(-1):1;}
function A5s(a){return (((I()).a(B(423))).U(a.sX)).b();}
function Hp(){BH.call(this);this.Ec=null;}
var Bli=Ba;function A3P(){A3P=N(Hp);A6k();}
function A6k(){Bli=BR(B(424));}
function E5(){var a=this;C.call(a);a.P=null;a.h=0;a.gQ=0;a.qr=null;}
function Bp(){var a=new E5();AFQ(a);return a;}
function DL(a){var b=new E5();Op(b,a);return b;}
function AXR(a,b){var c=new E5();Kj(c,a,b);return c;}
function Blj(a,b,c){var d=new E5();Vo(d,a,b,c);return d;}
function Bfr(a){var b=new E5();A8d(b,a);return b;}
function Blk(a,b,c,d){var e=new E5();Rq(e,a,b,c,d);return e;}
function AFQ(a){Kj(a,1,16);}
function Op(a,b){Kj(a,1,b);}
function Kj(a,b,c){J(a);a.gQ=b;a.P=Y(C,c);}
function Vo(a,b,c,d){J(a);a.gQ=b;a.P=EW(d,c);}
function A8d(a,b){Rq(a,1,b,0,b.data.length);}
function Rq(a,b,c,d,e){Vo(a,b,e,(Ck(c)).gq());a.h=e;X(c,d,a.P,0,a.h);}
function AP2(a,b){var c,d,e;c=a.P;d=c.data;if(a.h==d.length)c=a.j_(Bf(8,a.h*1.75|0));d=c.data;e=a.h;a.h=e+1|0;d[e]=b;}
function AJ6(a,b){a.rL(b.P,0,b.h);}
function ADT(a,b,c,d){if((c+d|0)<=b.h){a.rL(b.P,c,d);return;}G(W((((((((I()).a(B(425))).j(c)).a(B(426))).j(d)).a(B(427))).j(b.h)).b()));}
function AJl(a,b){a.rL(b,0,b.data.length);}
function AFD(a,b,c,d){var e,f,g;e=a.P;f=e.data;g=a.h+d|0;if(g>f.length)e=a.j_(Bf(Bf(8,g),a.h*1.75|0));X(b,c,e,a.h,d);a.h=g;}
function A9X(a,b){if(b<a.h)return a.P.data[b];G(Bg((((((I()).a(B(428))).j(b)).a(B(429))).j(a.h)).b()));}
function APK(a,b,c){if(b<a.h){a.P.data[b]=c;return;}G(Bg((((((I()).a(B(428))).j(b)).a(B(429))).j(a.h)).b()));}
function A3I(a,b,c){var d,e;if(b>a.h)G(Bg((((((I()).a(B(430))).j(b)).a(B(431))).j(a.h)).b()));d=a.P;e=d.data;if(a.h==e.length)d=a.j_(Bf(8,a.h*1.75|0));if(!a.gQ){e=d.data;e[a.h]=e[b];}else X(d,b,d,b+1|0,a.h-b|0);e=d.data;a.h=a.h+1|0;e[b]=c;}
function AZP(a,b,c){var d,e,f,g;a:{d=a.P;e=a.h-1|0;if(!(!c&&b!==null)){while(true){if(e<0)break a;f=d.data;g=e+(-1)|0;if(f[e]===b)break;e=g;}return 1;}while(true){if(e<0)break a;f=d.data;g=e+(-1)|0;if(b.z(f[e]))return 1;e=g;}}return 0;}
function AGY(a,b,c){var d,e,f;a:{d=a.P;if(!c&&b!==null){e=0;f=a.h;while(true){if(e>=f)break a;if(b.z(d.data[e]))break;e=e+1|0;}return e;}e=0;f=a.h;while(true){if(e>=f)break a;if(d.data[e]===b)break;e=e+1|0;}return e;}return (-1);}
function AGZ(a,b,c){var d,e,f;a:{d=a.P;if(!(!c&&b!==null)){e=0;f=a.h;while(e<f){if(d.data[e]===b){a.su(e);return 1;}e=e+1|0;}}else{e=0;f=a.h;while(true){if(e>=f)break a;if(b.z(d.data[e])){a.su(e);return 1;}e=e+1|0;}}}return 0;}
function APa(a,b){var c,d,e;if(b>=a.h)G(Bg((((((I()).a(B(428))).j(b)).a(B(429))).j(a.h)).b()));c=a.P;d=c.data;e=d[b];a.h=a.h-1|0;if(!a.gQ)d[b]=d[a.h];else X(c,b+1|0,c,b,a.h-b|0);d[a.h]=null;return e;}
function AHu(a,b,c){var d,e,f,g,h,i;d=a.h;if(c>=d)G(Bg((((((I()).a(B(432))).j(c)).a(B(429))).j(a.h)).b()));if(b>c)G(Bg((((((I()).a(B(433))).j(b)).a(B(431))).j(c)).b()));e=a.P;f=(c-b|0)+1|0;g=d-f|0;if(a.gQ){h=b+f|0;X(e,h,e,b,d-h|0);}else{i=Bf(g,c+1|0);X(e,i,e,b,d-i|0);}i=g;while(i<d){e.data[i]=null;i=i+1|0;}a.h=g;}
function AVB(a){var b;if(!a.h)G(DR(B(434)));a.h=a.h-1|0;b=a.P.data[a.h];a.P.data[a.h]=null;return b;}
function ATA(a){if(!a.h)G(DR(B(434)));return a.P.data[a.h-1|0];}
function A_H(a){if(!a.h)G(DR(B(434)));return a.P.data[0];}
function AZH(a){Hk(a.P,0,a.h,null);a.h=0;}
function ARt(a,b){var c;if(b<0)G(W((((I()).a(B(435))).j(b)).b()));c=a.h+b|0;if(c>a.P.data.length)a.j_(Bf(Bf(8,c),a.h*1.75|0));return a.P;}
function AY5(a,b){var c,d,e;c=a.P;d=EW((Ck(c)).gq(),b);e=d.data;X(c,0,d,0,Bq(a.h,e.length));a.P=d;return d;}
function ATF(a,b){(AIl()).Pg(a.P,b,0,a.h);}
function AKC(a){if(Bll)return K6(a,1);if(a.qr===null)a.qr=Bc2(a);return a.qr.bZ();}
function AD$(a,b){var c;if(b<0)G(W((((I()).a(B(436))).j(b)).b()));if(a.h<=b)return;c=b;while(c<a.h){a.P.data[c]=null;c=c+1|0;}a.h=b;}
function AWD(a){var b,c,d,e,f,g;if(!a.gQ)return MN(a);b=a.P;c=1;d=0;e=a.h;while(d<e){f=b.data;c=c*31|0;g=f[d];if(g!==null)c=c+g.bp()|0;d=d+1|0;}return c;}
function ALR(a,b){var c,d,e,f,g,h,i,j;if(b===a)return 1;if(!a.gQ)return 0;if(!(b instanceof E5))return 0;c=b;if(!c.gQ)return 0;d=a.h;if(d!=c.h)return 0;e=a.P;f=c.P;g=0;a:{while(g<d){b:{h=f.data;i=e.data[g];j=h[g];if(i!==null){if(i.z(j))break b;else break a;}if(j!==null)break a;}g=g+1|0;}return 1;}return 0;}
function ARu(a){var b,c,d,e;if(!a.h)return B(437);b=a.P;c=b.data;d=ATn(32);d.ly(91);d.ys(c[0]);e=1;while(e<a.h){d.CK(B(438));d.ys(c[e]);e=e+1|0;}d.ly(93);return d.b();}
function AEB(b){return Bfr(b);}
function AFW(a){return a.bZ();}
var QE=D(C0);
function Bbr(){var a=new QE();AYp(a);return a;}
function AYp(a){GG(a,B(439),Y(BN,0));}
function A$M(a){return Ban(a);}
function A7V(a){return BdB(a);}
function EC(){Bx.call(this);this.Ah=0;}
var Blm=null;var Bkc=null;var Bln=null;var Blo=null;function AUF(){AUF=N(EC);A1r();}
function Yb(a,b,c){var d=new EC();Zn(d,a,b,c);return d;}
function Zn(a,b,c,d){AUF();Cw(a,b,c);a.Ah=d;}
function G8(a){return a.Ah;}
function A1r(){Blm=Yb(B(440),0,33648);Bkc=Yb(B(441),1,33071);Bln=Yb(B(442),2,10497);Blo=H(EC,[Blm,Bkc,Bln]);}
function K8(){Cy.call(this);this.AP=0;}
function Blp(a){var b=new K8();UQ(b,a);return b;}
function UQ(a,b){Et(a,b);}
function AVO(a,b,c,d){var e;e=a.ka();d.by(e,b-d.ev(e)|0);a.AP=b;return b;}
function AFS(a){return a.AP;}
function AQK(a){return B(443);}
function A5P(a,b){return 0;}
function Je(){BB.call(this);this.hp=0;}
function AN9(a){var b=new Je();AFY(b,a);return b;}
function AFY(a,b){CQ(a);a.hp=b;}
function A5B(a,b){a.k=b;}
function AX8(a,b,c,d){var e,f,g;e=b+1|0;if(e>d.J()){d.d5=1;return (-1);}f=c.f(b);if(b>d.dI()){g=c.f(b-1|0);if(BY(g))return (-1);}if(a.hp!=f)return (-1);return a.k.e(e,c,d);}
function AJT(a,b,c,d){var e,f,g,h,i;if(!(c instanceof BN))return F3(a,b,c,d);e=c;f=d.dI();g=d.J();while(true){if(b>=g)return (-1);h=e.eH(a.hp,b);if(h<0)return (-1);if(h>f&&BY(e.f(h-1|0))){b=h+1|0;continue;}i=a.k;b=h+1|0;if(i.e(b,c,d)>=0)break;}return h;}
function AY0(a,b,c,d,e){var f,g,h;if(!(d instanceof BN))return Gb(a,b,c,d,e);f=e.dI();g=d;a:{while(true){if(c<b)return (-1);h=g.mK(a.hp,c);if(h<0)break a;if(h<b)break a;if(h>f&&BY(g.f(h-1|0))){c=h+(-2)|0;continue;}if(a.k.e(h+1|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function AQ$(a){return (((I()).a(B(101))).U(a.hp)).b();}
function ADZ(a,b){if(b instanceof Dz)return 0;if(b instanceof Dx)return 0;if(b instanceof C4)return 0;if(b instanceof Dv)return 0;if(b instanceof Jj)return 0;if(!(b instanceof Je))return 1;return b.hp!=a.hp?0:1;}
function ARf(a,b){return 1;}
var ACO=D();
var MD=D(0);
function Xf(){var a=this;C.call(a);a.uv=null;a.ss=null;a.sr=null;}
function A_3(){var a=new Xf();AS1(a);return a;}
function AS1(a){J(a);a.ss=S();a.sr=S();}
function A0E(a,b,c){a.uv=b;c.Dw(a);}
function L4(a,b,c,d){if(c.yq())b.uz(d);else if(b.MY())(d.M(c)).kN(b);else (b.uz(d)).fB(c);return d;}
function AYF(a,b,c){var d,e,f,g,h,i;d=b.da;GO();e=Ct(d,BjQ)&&(BA(b.da,BjQ)).Fp?1:0;f=Ct(c.da,BjQ)&&(BA(c.da,BjQ)).Fp?1:0;if(e!=f)return !e?(-1):1;L4(a,b.dy,b.cS.f1,a.ss);L4(a,c.dy,c.cS.f1,a.sr);g=(1000.0*a.uv.cq.BZ(a.ss)|0)-(1000.0*a.uv.cq.BZ(a.sr)|0)|0;h=B9(g,0.0);i=h<0?(-1):h<=0?0:1;if(e)i= -i|0;return i;}
function A7C(a,b,c){return a.I0(b,c);}
var ACh=D(D7);
function AZV(a,b){var c=new ACh();AHp(c,a,b);return c;}
function AHp(a,b,c){SU(a,b,c);}
function Es(){var a=this;CI.call(a);a.fY=null;a.ea=0;}
function Blq(a,b,c,d,e){var f=new Es();It(f,a,b,c,d,e);return f;}
function It(a,b,c,d,e,f){Fd(a,c,d,e);a.fY=b;a.ea=f;}
function A_x(a,b,c,d){var e,f,g,h;e=d.zj(a.ea);if(!a.Y.ba(d))return a.k.e(b,c,d);if(e>=a.fY.iJ())return a.k.e(b,c,d);f=a.ea;g=e+1|0;d.fN(f,g);h=a.Y.e(b,c,d);if(h>=0){d.fN(a.ea,0);return h;}f=a.ea;g=g+(-1)|0;d.fN(f,g);if(g>=a.fY.jd())return a.k.e(b,c,d);d.fN(a.ea,0);return (-1);}
function ASt(a){return a.fY.b();}
var Lx=D(Es);
function Blr(a,b,c,d,e){var f=new Lx();Sp(f,a,b,c,d,e);return f;}
function Sp(a,b,c,d,e,f){It(a,b,c,d,e,f);}
function AVS(a,b,c,d){var e,f;e=d.zj(a.ea);if(!a.Y.ba(d))return a.k.e(b,c,d);if(e>=a.fY.iJ()){d.fN(a.ea,0);return a.k.e(b,c,d);}if(e<a.fY.jd()){d.fN(a.ea,e+1|0);f=a.Y.e(b,c,d);}else{f=a.k.e(b,c,d);if(f>=0){d.fN(a.ea,0);return f;}d.fN(a.ea,e+1|0);f=a.Y.e(b,c,d);}return f;}
var U2=D();
function Sm(b){a:{switch(b){case 8:break;case 9:return 61;case 10:case 11:case 12:case 14:case 15:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 41:case 42:case 43:case 44:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 93:case 94:case 95:case 108:case 124:case 125:case 126:case 127:case 128:case 129:case 130:case 131:case 132:case 133:case 134:case 135:case 136:case 137:case 138:case 139:case 140:case 141:case 142:case 143:case 146:case 147:case 148:case 149:case 150:case 151:case 152:case 153:case 154:case 155:case 156:case 157:case 158:case 159:case 160:case 161:case 162:case 163:case 164:case 165:case 166:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 177:case 178:case 179:case 180:case 181:case 182:case 183:case 184:case 185:case 193:case 194:case 195:case 196:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 207:case 208:case 209:case 210:case 211:case 212:case 213:case 214:case 215:case 216:case 217:case 218:break a;case 13:return 66;case 16:return 59;case 17:return 129;case 18:return 57;case 19:return 0;case 20:return 0;case 27:return 111;case 32:return 62;case 33:return 92;case 34:return 93;case 35:return 123;case 36:return 3;case 37:return 21;case 38:return 19;case 39:return 22;case 40:return 20;case 45:return 124;case 46:return 112;case 48:return 7;case 49:return 8;case 50:return 9;case 51:return 10;case 52:return 11;case 53:return 12;case 54:return 13;case 55:return 14;case 56:return 15;case 57:return 16;case 65:return 29;case 66:return 30;case 67:return 31;case 68:return 32;case 69:return 33;case 70:return 34;case 71:return 35;case 72:return 36;case 73:return 37;case 74:return 38;case 75:return 39;case 76:return 40;case 77:return 41;case 78:return 42;case 79:return 43;case 80:return 44;case 81:return 45;case 82:return 46;case 83:return 47;case 84:return 48;case 85:return 49;case 86:return 50;case 87:return 51;case 88:return 52;case 89:return 53;case 90:return 54;case 91:return 0;case 92:return 0;case 96:return 144;case 97:return 145;case 98:return 146;case 99:return 147;case 100:return 148;case 101:return 149;case 102:return 150;case 103:return 151;case 104:return 152;case 105:return 153;case 106:return 0;case 107:return 81;case 109:return 69;case 110:return 56;case 111:return 0;case 112:return 131;case 113:return 132;case 114:return 133;case 115:return 134;case 116:return 135;case 117:return 136;case 118:return 137;case 119:return 138;case 120:return 139;case 121:return 140;case 122:return 141;case 123:return 142;case 144:return 78;case 145:return 0;case 186:return 74;case 187:return 70;case 188:return 55;case 189:return 69;case 190:return 56;case 191:return 76;case 192:return 0;case 219:return 71;case 220:return 73;case 221:return 72;case 222:return 75;default:break a;}return 67;}return 0;}
function Js(b){if(b==1)return 0;if(b==2)return 1;if(b!=4)return 0;return 2;}
var MM=D(0);
var Mm=D(0);
function IF(){Jb.call(this);this.gR=0;}
function Y_(a){Um(a);}
function AIh(a){return Bdt(a);}
var Ln=D(0);
function We(){var a=this;IF.call(a);a.cR=null;a.c7=0;}
function SG(){var a=new We();AIJ(a);return a;}
function Bls(a){var b=new We();OR(b,a);return b;}
function AIJ(a){OR(a,10);}
function OR(a,b){Y_(a);a.cR=Y(C,b);}
function AVU(a,b){var c;if(a.cR.data.length<b){c=a.cR.data.length>=1073741823?2147483647:Bf(b,Bf(a.cR.data.length*2|0,5));a.cR=I8(a.cR,c);}}
function A6W(a,b){JL(a,b);return a.cR.data[b];}
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
function BdZ(a,b,c,d){var e=new Ef();K0(e,a,b,c,d);return e;}
function K0(a,b,c,d,e){E4(a,c,d,e);a.gg=b;}
function AWr(a,b,c,d){var e,f,g,h;e=a.gg.jd();f=a.gg.iJ();g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.bv.cg()|0)>d.J())break a;h=a.bv.bH(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.k.e(b,c,d);if(h>=0)break;b=b-a.bv.cg()|0;g=g+(-1)|0;}return h;}if((b+a.bv.cg()|0)>d.J()){d.d5=1;return (-1);}h=a.bv.bH(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function AW5(a){return a.gg.b();}
function C4(){var a=this;BB.call(a);a.d1=null;a.rG=0;}
function A2l(a){var b=new C4();AAu(b,a);return b;}
function AAu(a,b){CQ(a);a.d1=b.mh();a.rG=b.bD;}
function AZy(a,b,c,d){var e,f,g,h,i,j;e=d.J();if(b<e){f=b+1|0;g=c.f(b);if(a.p(g)){h=a.k.e(f,c,d);if(h>0)return h;}if(f<e){i=f+1|0;j=c.f(f);if(GA(g,j)&&a.p(Dh(g,j)))return a.k.e(i,c,d);}}return (-1);}
function A$g(a){return ((((I()).a(B(55))).a(!a.rG?B(56):B(57))).a(a.d1.b())).b();}
function AIK(a,b){return a.d1.p(b);}
function AEH(a,b){if(b instanceof Dv)return IY(a.d1,b.sT());if(b instanceof Dz)return IY(a.d1,b.ps());if(b instanceof C4)return GU(a.d1,b.d1);if(!(b instanceof Dx))return 1;return GU(a.d1,b.uL());}
function ALe(a){return a.d1;}
function A7_(a,b){a.k=b;}
function AIm(a,b){return 1;}
var Yx=D(FP);
function BaF(a,b,c){var d=new Yx();AOR(d,a,b,c);return d;}
function AOR(a,b,c,d){Mk(a,b,c,d);}
function AFU(a,b,c,d){var e;if(!a.Y.ba(d))return a.k.e(b,c,d);e=a.k.e(b,c,d);if(e<0)e=a.Y.e(b,c,d);return e;}
var Qm=D();
function AHU(b,c){var d,e,f;a:{d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}e=b>>>6;f=d|e&8;f=f|b<<2&16;e=f|e&32;e=e|b>>>8&64;e=e|b>>>5&128;e=e|b&256;e=e|b<<8&512;e=e|b<<10&1024;e=e|b<<1&2048;return e;}
function BN(){var a=this;C.call(a);a.S=null;a.mQ=0;}
var Blt=null;function Em(){Em=N(BN);ARU();}
function Mg(a){var b=new BN();Iy(b,a);return b;}
function F1(a,b,c){var d=new BN();OF(d,a,b,c);return d;}
function Blu(a,b,c,d){var e=new BN();J1(e,a,b,c,d);return e;}
function Blv(a,b,c,d){var e=new BN();KL(e,a,b,c,d);return e;}
function Bbw(a,b){var c=new BN();TI(c,a,b);return c;}
function BfY(a,b,c){var d=new BN();OJ(d,a,b,c);return d;}
function Iy(a,b){var c,d,e;Em();c=b.data;J(a);d=c.length;a.S=BW(d);e=0;while(e<d){a.S.data[e]=c[e];e=e+1|0;}}
function OF(a,b,c,d){var e,f;Em();J(a);a.S=BW(d);e=0;while(e<d){f=b.data;a.S.data[e]=f[e+c|0];e=e+1|0;}}
function J1(a,b,c,d,e){Em();KL(a,b,c,d,OY(e.b()));}
function KL(a,b,c,d,e){Em();J(a);S9(a,b,c,d,e);}
function TI(a,b,c){Em();J1(a,b,0,b.data.length,c);}
function OJ(a,b,c,d){var e,f,g,h,i,j,k;Em();J(a);a.S=BW(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.S.data;j=e+1|0;g[e]=i&65535;}else{g=a.S.data;k=e+1|0;g[e]=FB(i);g=a.S.data;j=k+1|0;g[k]=Fi(i);}f=f+1|0;c=h;e=j;}if(e<a.S.data.length)a.S=JX(a.S,e);}
function S9(a,b,c,d,e){var f;f=ZK(e,Zb(b,c,d));if(WJ(f)&&!B8(f)&&BD(f)==CV(f))a.S=NK(f);else{a.S=BW(Bb(f));f.Mx(a.S);}}
function AWn(a,b){if(b>=0&&b<a.S.data.length)return a.S.data[b];G(Ki());}
function A0p(a){return a.S.data.length;}
function A2c(a){return a.S.data.length?0:1;}
function AH7(a,b,c,d,e){var f,g,h;if(b>=0&&b<=c&&c<=a.i()&&e>=0){f=d.data;if((e+(c-b|0)|0)<=f.length){while(b<c){g=e+1|0;h=b+1|0;f[e]=a.f(b);e=g;b=h;}return;}}G(C$());}
function A9z(a,b){var c,d,e,f,g;if(a===b)return 0;c=Bq(a.i(),b.i());d=0;while(true){if(d>=c)return a.i()-b.i()|0;e=a.f(d);f=b.f(d);g=e-f|0;if(g)break;d=d+1|0;}return g;}
function A55(a,b,c){var d,e,f;if((c+b.i()|0)>a.i())return 0;d=0;while(d<b.i()){e=b.f(d);f=c+1|0;if(e!=a.f(c))return 0;d=d+1|0;c=f;}return 1;}
function A2h(a,b){if(a===b)return 1;return a.zM(b,0);}
function AZw(a,b){var c,d,e,f;if(a===b)return 1;if(b.i()>a.i())return 0;c=0;d=a.i()-b.i()|0;while(d<a.i()){e=a.f(d);f=c+1|0;if(e!=b.f(c))return 0;d=d+1|0;c=f;}return 1;}
function A40(a,b,c){var d,e,f,g;d=Bf(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.S.data.length)return (-1);if(a.S.data[d]==e)break;d=d+1|0;}return d;}f=FB(b);g=Fi(b);while(true){if(d>=(a.S.data.length-1|0))return (-1);if(a.S.data[d]==f&&a.S.data[d+1|0]==g)break;d=d+1|0;}return d;}
function AZv(a,b){return a.eH(b,0);}
function AWv(a,b,c){var d,e,f,g,h,i;d=Bq(c,a.i()-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.S.data[d]==e)break;d=d+(-1)|0;}return d;}f=FB(b);g=Fi(b);while(true){if(d<1)return (-1);if(a.S.data[d]==g){h=a.S.data;i=d-1|0;if(h[i]==f)break;}d=d+(-1)|0;}return i;}
function AKv(a,b){return a.mK(b,a.i()-1|0);}
function AZa(a,b,c){var d,e,f;d=Bf(0,c);e=a.i()-b.i()|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=b.i())break a;if(a.f(d+f|0)!=b.f(f))break;f=f+1|0;}d=d+1|0;}return d;}
function A5z(a,b){return a.ux(b,0);}
function AHX(a,b,c){var d,e;d=Bq(c,a.i()-b.i()|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.i())break a;if(a.f(d+e|0)!=b.f(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AJ$(a,b){return a.Ab(b,a.i());}
function ADO(a,b,c){if(b>c)G(C$());return F1(a.S,b,c-b|0);}
function AKy(a,b){return a.ce(b,a.i());}
function AIf(a,b,c){return a.ce(b,c);}
function AUl(a,b){var c,d,e;c=a.i()-b.i()|0;d=0;while(d<=c){e=0;while(true){if(e>=b.i())return 1;if(a.f(d+e|0)!=b.f(e))break;e=e+1|0;}d=d+1|0;}return 0;}
function A6V(a,b,c){var d,e,f,g;d=I();e=a.i()-b.i()|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=b.i()){d.dD(c);f=f+(b.i()-1|0)|0;break a;}if(a.f(f+g|0)!=b.f(g))break;g=g+1|0;}d.U(a.f(f));}f=f+1|0;}d.dD(a.ei(f));return d.b();}
function A2C(a){var b,c;b=0;c=a.i()-1|0;a:{while(b<=c){if(a.f(b)>32)break a;b=b+1|0;}}while(b<=c&&a.f(c)<=32){c=c+(-1)|0;}return a.ce(b,c+1|0);}
function AFV(a){return a;}
function A2g(a){var b,c,d;b=BW(a.S.data.length);c=0;while(true){d=b.data;if(c>=d.length)break;d[c]=a.S.data[c];c=c+1|0;}return b;}
function Zp(b){var c,d;Em();c=new BN;d=BW(1);d.data[0]=b;Iy(c,d);return c;}
function Ji(b){Em();return ((I()).j(b)).b();}
function ASk(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BN))return 0;c=b;if(c.i()!=a.i())return 0;d=0;while(d<c.i()){if(a.f(d)!=c.f(d))return 0;d=d+1|0;}return 1;}
function A9W(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(a.i()!=b.i())return 0;c=0;while(c<a.i()){if(Dq(a.f(c))!=Dq(b.f(c)))return 0;c=c+1|0;}return 1;}
function ANx(a,b){return a.AW(OY(b.b()));}
function ANt(a){Hw();return a.AW(Bkm);}
function A44(a,b){var c,d;c=UI(b,La(a.S));if(c.Cq()&&!B8(c)&&BD(c)==CV(c))return HH(c);d=Cj(Bb(c));c.IS(d);return d;}
function A4_(a){var b,c,d,e;a:{if(!a.mQ){b=a.S.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.mQ=(31*a.mQ|0)+e|0;d=d+1|0;}}}return a.mQ;}
function A4n(a){var b,c,d,e,f,g,h,i;if(a.bN())return a;b=Bc(a.S.data.length);c=0;d=0;while(d<a.S.data.length){a:{if(d!=(a.S.data.length-1|0)&&BY(a.S.data[d])){e=a.S.data;f=d+1|0;g=e[f];if(BG(g)){h=b.data;i=c+1|0;h[c]=En(Dh(a.S.data[d],a.S.data[f]));d=f;break a;}}h=b.data;i=c+1|0;h[c]=DB(a.S.data[d]);}d=d+1|0;c=i;}return BfY(b,0,c);}
function A2S(a,b){return VW(GJ(b),a.b());}
function ASc(a,b,c){return Mr(GJ(b),a.b(),c);}
function AIp(a,b,c){return ACp(GM(GJ(b),a.b()),c);}
function ARU(){Blt=Beh();}
var Ng=D(DS);
var Blw=null;function A3n(){A3n=N(Ng);AUj();}
function BdO(){var a=new Ng();SZ(a);return a;}
function SZ(a){A3n();G_(a);}
function A24(a,b){ATy(b);}
function AUj(){Blw=BdO();}
var LN=D();
var Blx=null;function Beu(){Beu=N(LN);AQh();}
function Vn(){Beu();return Blx;}
function AQh(){var b,c,d,e,f;Blx=C6();b=Y(C0,6);c=b.data;Bd1();c[0]=Bla;c[1]=Blb;c[2]=Blc;c[3]=Bld;c[4]=Ble;c[5]=Blf;d=c.length;e=0;while(e<d){f=c[e];Blx.x(Z_(f),f);e=e+1|0;}}
var D$=D(0);
var MP=D(0);
function Yy(){var a=this;Fy.call(a);a.zR=0;a.uH=0;a.tj=null;}
function Be0(a,b,c,d,e,f){var g=new Yy();AJ0(g,a,b,c,d,e,f);return g;}
function AJ0(a,b,c,d,e,f,g){MG(a,c,e,f);a.uH=b;a.zR=g;a.tj=d;}
function A48(a,b){return a.tj.data[b+a.uH|0];}
function A3l(a,b,c){a.tj.data[b+a.uH|0]=c;}
function ADd(a){return a.zR;}
var Qn=D(Do);
function Bck(a){var b=new Qn();AQN(b,a);return b;}
function AQN(a,b){GH(a,b,2.0,4.0);}
function ALN(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(h.ef(2))break a;Bj();i=BgX;break a;}k=e.data;n=f+1|0;k[f]=(192|l>>6)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else if(!Jz(l)){if((f+3|0)>g){j=j+(-1)|0;if(h.ef(3))break a;Bj();i=BgX;break a;}k=e.data;o=f+1|0;k[f]=(224|l>>12)<<24>>24;n=o+1|0;k[o]=(128|l>>6&63)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else{if
(!BY(l)){i=BV(1);break a;}if(j>=d){if(h.tJ())break a;Bj();i=BgY;break a;}n=j+1|0;p=k[j];if(!BG(p)){j=n+(-2)|0;i=BV(1);break a;}if((f+4|0)>g){j=n+(-2)|0;if(h.ef(4))break a;Bj();i=BgX;break a;}k=e.data;q=Dh(l,p);j=f+1|0;k[f]=(240|q>>18)<<24>>24;o=j+1|0;k[j]=(128|q>>12&63)<<24>>24;j=o+1|0;k[o]=(128|q>>6&63)<<24>>24;m=j+1|0;k[j]=(128|q&63)<<24>>24;j=n;}c=j;f=m;}j=c;}h.el(j);h.dR(f);return i;}
var I6=D();
function X1(a){J(a);}
var HT=D(0);
function Fm(){var a=this;I6.call(a);a.s7=0;a.dW=null;a.De=0.0;a.Bk=0;a.ln=0;a.mc=0;a.FI=0;}
var Bly=null;var Blz=null;function TJ(){TJ=N(Fm);A$S();}
function BlA(){var a=new Fm();HG(a);return a;}
function BlB(a){var b=new Fm();ME(b,a);return b;}
function ABo(b,c,d){TJ();return Be$(b,c);}
function HG(a){TJ();ME(a,11);}
function ME(a,b){TJ();X1(a);a.mc=(-1);if(b<0)G(CL());a.s7=0;if(!b)b=1;a.dW=OD(a,b);a.ln=a.dW.data.length;a.De=0.75;Mu(a);}
function OD(a,b){return Y(MR,b);}
function Mu(a){a.Bk=a.dW.data.length*a.De|0;}
function AO3(a,b,c){var d,e,f,g,h,i,j;Eq(a);try{if(b!==null&&c!==null){d=b.bp();e=d&2147483647;f=e%a.dW.data.length|0;g=a.dW.data[f];while(g!==null&&!g.MZ(b,d)){g=g.pD;}if(g!==null){h=g.hb;g.hb=c;return h;}a.FI=a.FI+1|0;i=a.s7+1|0;a.s7=i;if(i>a.Bk){a.oU();f=e%a.dW.data.length|0;}if(f<a.ln)a.ln=f;if(f>a.mc)a.mc=f;j=ABo(b,c,d);j.pD=a.dW.data[f];a.dW.data[f]=j;return null;}G(IJ());}finally{Ch(a);}}
function AME(a){var b,c,d,e,f,g,h,i,j;b=(a.dW.data.length<<1)+1|0;if(!b)b=1;c=(-1);d=OD(a,b);e=a.mc+1|0;f=b;while(true){e=e+(-1)|0;if(e<a.ln)break;g=a.dW.data[e];while(g!==null){h=(g.Ob()&2147483647)%b|0;if(h<f)f=h;if(h>c)c=h;i=d.data;j=g.pD;g.pD=i[h];i[h]=g;g=j;}}a.ln=f;a.mc=c;a.dW=d;Mu(a);}
function A$S(){Bly=Bfj();Blz=Bbc();}
function Td(){Fm.call(this);this.Jl=null;}
function Bbm(){var a=new Td();AOz(a);return a;}
function Bbq(a){var b=new Td();AKL(b,a);return b;}
function AOz(a){HG(a);}
function AKL(a,b){HG(a);a.Jl=b;}
function ABU(){var a=this;Fu.call(a);a.C0=0;a.vj=0;a.t$=null;}
function Bbh(a,b,c,d,e,f){var g=new ABU();AX1(g,a,b,c,d,e,f);return g;}
function AX1(a,b,c,d,e,f,g){K3(a,c,e,f);a.vj=b;a.C0=g;a.t$=d;}
function AO$(a,b){return a.t$.data[b+a.vj|0];}
function AOg(a,b,c){a.t$.data[b+a.vj|0]=c;}
function A5x(a){return a.C0;}
var Wq=D(Bt);
function Bal(){var a=new Wq();A_e(a);return a;}
function A_e(a){Co(a);}
function ALw(a,b,c,d){return b;}
function A5A(a){return B(444);}
function A5J(a,b){return 0;}
function Oi(){V.call(this);this.iD=null;}
var BlC=null;function A0T(){A0T=N(Oi);AUn();}
function Ben(a){var b=new Oi();YO(b,a);return b;}
function YO(a,b){A0T();BM(a);a.iD=Ca(b*16|0);}
function AUE(a,b,c,d,e){var f,g;f=0;while(f<a.iD.data.length){g=f/16|0;if(d.dJ!==null&&g<d.dJ.data.length&&d.dJ.data[g]!==null)X(d.dJ.data[g].c,0,a.iD,f,16);else{A0T();X(BlC.c,0,a.iD,f,16);}f=f+16|0;}b.bh.PN(B1(b,c),a.iD,0,a.iD.data.length);}
function AUn(){BlC=BL();}
var JP=D(Es);
function BlD(a,b,c,d,e){var f=new JP();Ss(f,a,b,c,d,e);return f;}
function Ss(a,b,c,d,e,f){It(a,b,c,d,e,f);JF();c.Q(Bij);}
function AKs(a,b,c,d){var e,f,g;e=0;f=a.fY.iJ();a:{while(true){g=a.Y.e(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.fY.jd())return (-1);return a.k.e(b,c,d);}
function CX(){Bx.call(this);this.C4=0;}
var Bkb=null;var BlE=null;var BlF=null;var BlG=null;var BlH=null;var BlI=null;var BlJ=null;var BlK=null;function P6(){P6=N(CX);AFy();}
function E7(a,b,c){var d=new CX();OI(d,a,b,c);return d;}
function OI(a,b,c,d){P6();Cw(a,b,c);a.C4=d;}
function EE(a){return a.C4;}
function AFy(){Bkb=E7(B(445),0,9728);BlE=E7(B(446),1,9729);BlF=E7(B(447),2,9987);BlG=E7(B(448),3,9984);BlH=E7(B(449),4,9985);BlI=E7(B(450),5,9986);BlJ=E7(B(451),6,9987);BlK=H(CX,[Bkb,BlE,BlF,BlG,BlH,BlI,BlJ]);}
var L5=D(C0);
var Bkm=null;function Hw(){Hw=N(L5);AIb();}
function BcI(){var a=new L5();UA(a);return a;}
function UA(a){Hw();GG(a,B(381),Y(BN,0));}
function AQr(a){return Bb9(a);}
function ASZ(a){return Bck(a);}
function AIb(){Bkm=BcI();}
var M5=D(0);
function Vv(){Bt.call(this);this.ic=0;}
function A_Z(a){var b=new Vv();A_B(b,a);return b;}
function A_B(a,b){Co(a);a.ic=b;}
function A1N(a,b,c,d){var e,f,g;e=!d.jB()?c.i()-b|0:d.dI()-b|0;if(!e){d.by(a.ic,0);return a.k.e(b,c,d);}if(e<2){f=c.f(b);g=97;}else{f=c.f(b);g=c.f(b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:d.by(a.ic,0);return a.k.e(b,c,d);case 13:if(g!=10){d.by(a.ic,0);return a.k.e(b,c,d);}d.by(a.ic,0);return a.k.e(b,c,d);default:}return (-1);}
function AGz(a,b){var c;c=!b.ev(a.ic)?0:1;b.by(a.ic,(-1));return c;}
function AI_(a){return B(452);}
function SN(){C.call(this);this.Qx=null;}
function Bab(a){var b=new SN();A5U(b,a);return b;}
function A5U(a,b){J(a);a.Qx=b;}
function EO(){C.call(this);this.HK=null;}
function Lh(a){AB6(a,Qq());}
function AB6(a,b){J(a);a.HK=b;}
function Sj(){var a=this;EO.call(a);a.mF=null;a.jD=null;a.fL=0;a.ng=0;a.uu=0;a.zg=0;}
function BbS(a,b){var c=new Sj();AY7(c,a,b);return c;}
function AY7(a,b,c){Lh(a);a.zg=(-1);if(c<0)G(CL());a.mF=b;a.jD=BW(Bf(64,c));}
function ALT(a){N_(a);a.mF.fP();a.mF=null;}
function ATT(a){var b,c,d,e;N_(a);if(a.uu&&a.fL>=a.ng)return null;b=I();a:{while(true){if(a.fL>=a.ng&&!K9(a,0))break a;c=a.jD.data;d=a.fL;a.fL=d+1|0;e=c[d];if(e==10)break;if(e==13){if(a.fL>=a.ng&&!K9(a,0))break a;if(a.jD.data[a.fL]!=10)break a;a.fL=a.fL+1|0;break a;}b.U(e);}}return b.b();}
function K9(a,b){var c;if(a.uu)return 0;a:{while(true){if(b>=a.jD.data.length)break a;c=a.mF.JJ(a.jD,b,a.jD.data.length-b|0);if(c==(-1)){a.uu=1;break a;}if(!c)break;b=b+c|0;}}a.ng=b;a.fL=0;a.zg=(-1);return 1;}
function N_(a){if(a.mF!==null)return;G(BbJ());}
function WY(){Q.call(this);this.OH=null;}
function BeW(a){var b=new WY();A3o(b,a);return b;}
function A3o(a,b){a.OH=b;Be(a);}
function A9s(a,b){return ACI(b);}
var I0=D(Dn);
function ASX(){var a=new I0();A1Z(a);return a;}
function A1Z(a){Jt(a);}
var Yp=D();
var ZY=D(FI);
function Bdy(a,b,c,d,e,f){var g=new ZY();AZm(g,a,b,c,d,e,f);return g;}
function AZm(a,b,c,d,e,f,g){JO(a,b,c,d,e,f,g);}
function AQ6(a,b){var c,d,e;c=a.cu.A.data;d=a.cl;e=b*4|0;return (c[d+e|0]&255)<<24|(a.cu.A.data[(a.cl+e|0)+1|0]&255)<<16|(a.cu.A.data[(a.cl+e|0)+2|0]&255)<<8|a.cu.A.data[(a.cl+e|0)+3|0]&255;}
function AEV(a,b,c){var d,e,f;d=a.cu.A.data;e=a.cl;f=b*4|0;d[e+f|0]=c>>24<<24>>24;a.cu.A.data[(a.cl+f|0)+1|0]=c>>16<<24>>24;a.cu.A.data[(a.cl+f|0)+2|0]=c>>8<<24>>24;a.cu.A.data[(a.cl+f|0)+3|0]=c<<24>>24;}
var GN=D(BT);
var BlL=null;function A_v(){A_v=N(GN);A1y();}
function Bd9(a){var b=new GN();AAN(b,a);return b;}
function BlM(){var a=new GN();Jr(a);return a;}
function AAN(a,b){A_v();B_(a);}
function Jr(a){A_v();B_(a);}
function A1y(){BlL=Bd9(0);}
var R8=D(Bm);
function APE(a){var b=new R8();A7$(b,a);return b;}
function IJ(){var a=new R8();AGj(a);return a;}
function A7$(a,b){EF(a,b);}
function AGj(a){Cx(a);}
function XM(){Q.call(this);this.HQ=null;}
function BcF(a){var b=new XM();AI3(b,a);return b;}
function AI3(a,b){a.HQ=b;Be(a);}
function A6u(a,b){return MS(b);}
function Qa(){var a=this;C.call(a);a.d0=null;a.yC=null;a.cC=null;a.cT=0;}
function Bbb(){var a=new Qa();AT6(a);return a;}
function AT6(a){J(a);a.cC=Ds();}
var YY=D();
function A8w(b){return Math.sin(b);}
function AEv(b){return Math.cos(b);}
function AQO(b){return Math.tan(b);}
function FR(b){return Math.sqrt(b);}
function AYY(b){return Math.ceil(b);}
function Dg(b){return b+ALB(b)*0.5|0;}
function Bq(b,c){if(b<c)c=b;return c;}
function Bf(b,c){if(b>c)c=b;return c;}
function T5(b,c){if(Kt(b,c))c=b;return c;}
function AXb(b,c){if(Hq(b,c))c=b;return c;}
function Ju(b,c){if(b<c)c=b;return c;}
function Ei(b,c){if(b>c)c=b;return c;}
function Vz(b){if(b<=0)b= -b|0;return b;}
function CH(b){if(b<=0.0)b= -b;return b;}
function ALB(b){var c;c=B9(b,0.0);if(c>0)b=1.0;else if(c<0)b=(-1.0);return b;}
function WZ(){var a=this;C.call(a);a.ep=null;a.fk=null;a.du=null;a.vT=0;a.wi=0;a.LR=0;a.tc=0;a.kU=0;a.oV=0;}
function Bf6(a,b,c){var d=new WZ();AM9(d,a,b,c);return d;}
function AM9(a,b,c,d){J(a);a.kU=0;a.oV=0;a.LR=b;a.ep=d;a.du=ML(Cg(a.ep.cQ,c));a.wi=1;a.tc=!b?35048:35044;a.fk=a.du.sQ();a.vT=ACz(a);a.fk.db();a.du.db();}
function ACz(a){var b;b=Bip.i5();Bip.c$(34962,b);Bip.fD(34962,CV(a.du),null,a.tc);Bip.c$(34962,0);return b;}
function AXN(a){return a.ep;}
function AJS(a){return CV(a.du)/a.ep.cQ|0;}
function Z8(a){if(a.oV){Bip.qq(34962,0,BD(a.du),a.du);a.kU=0;}}
function AFj(a,b,c,d){a.kU=1;if(a.wi){Oa(b,a.du,d,c);a.fk.cZ(0);a.fk.cm(d);}else{a.fk.c1();a.fk.wA(b,c,d);a.fk.db();a.du.cZ(0);a.du.cm(BD(a.fk)<<2);}Z8(a);}
function ANI(a,b,c){var d,e,f,g,h,i;d=Bip;d.c$(34962,a.vT);if(a.kU){a.du.cm(BD(a.fk)*4|0);d.fD(34962,BD(a.du),a.du,a.tc);a.kU=0;}a:{e=CU(a.ep);if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data;h=CB(a.ep,f);i=g[f];if(i>=0){b.lT(i);b.id(i,h.cK,h.hT,h.im,a.ep.cQ,h.cU);}f=f+1|0;}}f=0;while(f<e){h=CB(a.ep,f);i=b.lZ(h.es);if(i>=0){b.lT(i);b.id(i,h.cK,h.hT,h.im,a.ep.cQ,h.cU);}f=f+1|0;}}a.oV=1;}
function AIn(a,b,c){var d,e,f,g;a:{d=Bip;e=CU(a.ep);if(c===null){f=0;while(f<e){b.BI((CB(a.ep,f)).es);f=f+1|0;}}else{f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0)b.tO(g);f=f+1|0;}}}d.c$(34962,0);a.oV=0;}
var GT=D(BT);
var BlN=null;function ANz(){ANz=N(GT);A1B();}
function BeO(a){var b=new GT();YJ(b,a);return b;}
function BlO(){var a=new GT();Iw(a);return a;}
function YJ(a,b){ANz();B_(a);}
function Iw(a){ANz();B_(a);}
function A1B(){BlN=BeO(0);}
var OK=D();
function A93(){var b;b=AQu();return b;}
function AQu(){var userAgent=navigator.userAgent.toLowerCase();return {firefox:userAgent.indexOf('firefox')!= -1,chrome:userAgent.indexOf('chrome')!= -1,safari:userAgent.indexOf('safari')!= -1,opera:userAgent.indexOf('opera')!= -1,IE:userAgent.indexOf('msie')!= -1,macOS:userAgent.indexOf('mac')!= -1,linux:userAgent.indexOf('linux')!= -1,windows:userAgent.indexOf('win')!= -1};}
var QM=D(T);
function Bah(){var a=new QM();A67(a);return a;}
function A67(a){Bo(a);}
function ANR(a){var b;b=Bbz(a);b.be=1;return b;}
function Og(){var a=this;C3.call(a);a.yR=null;a.nL=null;a.kH=0;}
function BS(a,b,c){var d=new Og();VX(d,a,b,c);return d;}
function VX(a,b,c,d){FX(a);a.kH=(-1);a.yR=b;a.nL=c;a.kH=d;}
function A$k(a){var b,c;b=B(101);if(a.kH>=1){c=BW(a.kH);APp(c,32);b=Mg(c);}return (((I()).a(a.yR)).a(a.nL!==null&&a.nL.i()?((((((I()).j(a.kH)).a(B(438))).a(a.nL)).a(B(438))).a(b)).b():B(101))).b();}
function P7(){D5.call(this);this.oC=null;}
function Bgd(a,b,c){var d=new P7();AS4(d,a,b,c);return d;}
function AS4(a,b,c,d){Ma(a,c,d);a.oC=Qk(a,b);if(a.oC!==null)return;G(Qg((((I()).a(B(453))).a(b.u())).b()));}
function Qk(a,b){var c,d,$$je;a:{try{c=ANP(b,null);}catch($$e){$$je=R($$e);if($$je instanceof B5){break a;}else{throw $$e;}}return c;}b:{try{d=AZo(b,null);Tf(d,1);}catch($$e){$$je=R($$e);if($$je instanceof Mz){break b;}else{throw $$e;}}return d;}return null;}
function A1F(a){var b,c,$$je;a:{try{b=ACV(a.oC,null);}catch($$e){$$je=R($$e);if($$je instanceof B5){c=$$je;break a;}else{throw $$e;}}return b;}G(Jd((((I()).a(B(454))).a((FF(a.oC)).u())).b(),c));}
var LJ=D(0);
var Y0=D();
function A_5(){var a=new Y0();APX(a);return a;}
function APX(a){J(a);}
function A0n(a){return devicePixelRatio||1;}
function AX_(a){return screen.width;}
function ADI(a){return screen.height;}
function AMf(a,b,c,d,e){var f;f=Bgc(a);return AI1(BP(f,"fullscreenChanged"),c,d,e)?1:0;}
function AMH(a){AIO();}
function ASY(a){return A92()?1:0;}
function AI1(b,c,d,e){if(c.requestFullscreen){c.width=d;c.height=e;c.requestFullscreen();document.addEventListener("fullscreenchange",b,false);return true;}if(c.webkitRequestFullScreen){c.width=d;c.height=e;c.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);document.addEventListener("webkitfullscreenchange",b,false);return true;}if(c.mozRequestFullScreen){c.width=d;c.height=e;c.mozRequestFullScreen();document.addEventListener("mozfullscreenchange",b,false);return true;}if(c.msRequestFullscreen){c.width
=d;c.height=e;c.msRequestFullscreen();document.addEventListener("msfullscreenchange",b,false);return true;}return false;}
function AIO(){if(document.exitFullscreen)document.exitFullscreen();if(document.msExitFullscreen)document.msExitFullscreen();if(document.webkitExitFullscreen)document.webkitExitFullscreen();if(document.mozExitFullscreen)document.mozExitFullscreen();if(document.webkitCancelFullScreen)document.webkitCancelFullScreen();}
function A92(){if("fullscreenElement" in document){return document.fullscreenElement!=null;}if("msFullscreenElement" in document){return document.msFullscreenElement!=null;}if("webkitFullscreenElement" in document){return document.webkitFullscreenElement!=null;}if("mozFullScreenElement" in document){return document.mozFullScreenElement!=null;}if("webkitIsFullScreen" in document){return document.webkitIsFullScreen;}if("mozFullScreen" in document){return document.mozFullScreen;}return false;}
function HF(){var a=this;C.call(a);a.pO=null;a.hZ=0;a.hm=0;a.g2=0;a.b7=null;a.f1=null;a.g1=null;a.iV=0.0;}
var BlP=null;function A4f(){A4f=N(HF);ALr();}
function A8M(){var a=new HF();AAI(a);return a;}
function BfR(a){var b=new HF();YN(b,a);return b;}
function AAI(a){A4f();J(a);a.f1=S();a.g1=S();a.iV=(-1.0);}
function YN(a,b){A4f();J(a);a.f1=S();a.g1=S();a.iV=(-1.0);a.Cx(b);}
function A37(a,b){a.pO=b.pO;a.b7=b.b7;a.hm=b.hm;a.g2=b.g2;a.hZ=b.hZ;a.f1.M(b.f1);a.g1.M(b.g1);a.iV=b.iV;return a;}
function AOM(a,b,c,d,e,f){a.pO=b;a.b7=c;a.hm=d;a.g2=e;a.hZ=f;a.f1.I(0.0,0.0,0.0);a.g1.I(0.0,0.0,0.0);a.iV=(-1.0);return a;}
function AJb(a,b){var c;a:{b:{if(b!==a){if(b===null)break b;if(b.b7!==a.b7)break b;if(b.hZ!=a.hZ)break b;if(b.hm!=a.hm)break b;if(b.g2!=a.g2)break b;}c=1;break a;}c=0;}return c;}
function AE0(a,b){if(b===null)return 0;if(b===a)return 1;if(!(b instanceof HF))return 0;return a.Hw(b);}
function AVH(a,b,c){a.b7.Dd(b,a.hZ,a.hm,a.g2,c);}
function ALr(){BlP=AMi();}
var TS=D(T);
function BeE(){var a=new TS();AGB(a);return a;}
function AGB(a){Bo(a);}
function AYH(a){var b;b=Bgi(a);b.bG.n4(0,2048);b.be=1;return b;}
var HP=D(0);
function HC(){var a=this;BH.call(a);a.MI=0;a.KF=0.0;a.I7=0.0;a.OM=0;}
var BlQ=Ba;var BlR=Ba;function AJt(){AJt=N(HC);A4P();}
function A4P(){BlQ=BR(B(455));BlR=BlQ;}
var DY=D(Bx);
var BlS=null;var BlT=null;var BlU=null;var BlV=null;var BlW=null;function M2(){M2=N(DY);ASF();}
function Mn(a,b){var c=new DY();Wd(c,a,b);return c;}
function UJ(){M2();return BlW.go();}
function Wd(a,b,c){M2();Cw(a,b,c);}
function ASF(){BlS=Mn(B(456),0);BlT=Mn(B(457),1);BlU=Mn(B(458),2);BlV=Mn(B(459),3);BlW=H(DY,[BlS,BlT,BlU,BlV]);}
var KT=D(0);
function L9(){var a=this;C.call(a);a.ml=0;a.fz=null;a.fo=null;a.CP=0.0;a.sU=0;a.u5=0;a.i1=0;}
var BlX=null;function A7j(){A7j=N(L9);AHP();}
function DG(){var a=new L9();TQ(a);return a;}
function BlY(a,b){var c=new L9();Nt(c,a,b);return c;}
function TQ(a){A7j();Nt(a,51,0.800000011920929);}
function Nt(a,b,c){var d;A7j();J(a);if(c>0.0&&c<1.0){a.CP=c;d=G3(b,c);a.sU=d*c|0;a.i1=d-1|0;a.u5=CW(O(a.i1));a.fz=Y(C,d);a.fo=Y(C,d);return;}G(W((((I()).a(B(40))).cD(c)).b()));}
function AXL(a,b){return Cp(CN(Cf(O(b.bp()),Cd(2135587861, 2654435769)),a.u5));}
function A08(a,b){var c,d,e;if(b===null)G(W(B(460)));c=a.fz;d=a.kq(b);while(true){e=c.data[d];if(e===null)return  -(d+1|0)|0;if(e.z(b))break;d=(d+1|0)&a.i1;}return d;}
function AQv(a,b,c){var d,e,f;d=a.j6(b);if(d>=0){e=a.fo.data[d];a.fo.data[d]=c;return e;}f= -(d+1|0)|0;a.fz.data[f]=b;a.fo.data[f]=c;f=a.ml+1|0;a.ml=f;if(f>=a.sU)W8(a,a.fz.data.length<<1);return null;}
function Qp(a,b,c){var d,e,f;d=a.fz;e=a.kq(b);while(true){f=d.data;if(f[e]===null)break;e=(e+1|0)&a.i1;}f[e]=b;a.fo.data[e]=c;}
function AW0(a,b){var c;c=a.j6(b);return c<0?null:a.fo.data[c];}
function AVK(a){if(!a.ml)return;a.ml=0;U$(a.fz,null);U$(a.fo,null);}
function A9t(a,b){return a.j6(b)<0?0:1;}
function W8(a,b){var c,d,e,f,g;a:{c=a.fz.data.length;a.sU=b*a.CP|0;a.i1=b-1|0;a.u5=CW(O(a.i1));d=a.fz;e=a.fo;a.fz=Y(C,b);a.fo=Y(C,b);if(a.ml>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g!==null)Qp(a,g,e.data[f]);f=f+1|0;}}}}
function AHP(){BlX=Qq();}
function YV(){var a=this;C.call(a);a.g=null;a.c_=0;a.qG=null;a.v1=0;a.fF=0;a.gH=0;a.bR=0;a.rN=null;}
function Bdj(){var a=new YV();ADD(a);return a;}
function GM(a,b){return BaO(a,b);}
function Mr(a,b,c){var d,e,f,g,h,i;d=SG();e=GM(a,b);f=0;g=0;if(!b.i()){h=Y(BN,1);h.data[0]=B(101);return h;}while(Ga(e)){i=f+1|0;if(i>=c&&c>0)break;d.h4((b.d_(g,LT(e))).b());g=MX(e);f=i;}a:{d.h4((b.d_(g,b.i())).b());i=f+1|0;if(!c)while(true){i=i+(-1)|0;if(i<0)break;if(((d.l(i)).b()).i())break a;d.mC(i);}}if(i<0)i=0;return d.II(Y(BN,i));}
function VW(a,b){return Mr(a,b,0);}
function IQ(a){return a.g.b();}
function AZi(b,c){if(b===null)G(APE(B(461)));if(c&&(c|255)!=255)G(W(B(101)));W4();BgS=1;return Yg(Bdj(),b,c);}
function Yg(a,b,c){a.g=Bd5(b,c);a.c_=c;a.rN=L2(a,(-1),a.c_,null);if(a.g.bN()){QH(a);return a;}G(BS(B(101),a.g.b(),a.g.dM()));}
function ACo(a,b){var c,d,e;c=Bf0(BX(a,2),BX(a,64));while(!a.g.bN()){d=a.g;if(!d.hy())break;d=a.g;if(d.cM()&&a.g.cM()!=(-536870788)){d=a.g;if(d.cM()!=(-536870871))break;}c.cG(a.g.E());if(a.g.bV()!=(-536870788))continue;a.g.E();}e=HQ(a,c);e.Q(b);return e;}
function L2(a,b,c,d){var e,f,g,h,i,j;e=SG();f=a.c_;g=0;if(c!=a.c_)a.c_=c;a:{switch(b){case -1073741784:h=new KX;i=a.bR+1|0;a.bR=i;ZR(h,i);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Ks;i=a.bR+1|0;a.bR=i;AB4(h,i);break a;case -33554392:h=new K8;i=a.bR+1|0;a.bR=i;UQ(h,i);break a;default:a.fF=a.fF+1|0;if(d!==null)h=Bfv(a.fF);else{h=Beg();g=1;}if(a.fF<=(-1))break a;if(a.fF>=10)break a;a.qG.data[a.fF]=h;break a;}h=Bde();}while(true){if(a.g.hy()&&a.g.cM()==(-536870788))j=ACo(a,
h);else if(a.g.bV()==(-536870788)){j=FG(h);a.g.E();}else{j=MI(a,h);if(a.g.bV()==(-536870788))a.g.E();}if(j!==null)e.h4(j);if(a.g.bN())break;if(a.g.bV()==(-536870871))break;}if(a.g.Hm()==(-536870788))e.h4(FG(h));if(a.c_!=f&&!g){a.c_=f;a.g.G$(a.c_);}switch(b){case -1073741784:break;case -536870872:return BdV(e,h);case -268435416:return Bc_(e,h);case -134217688:return Bap(e,h);case -67108824:return Bd_(e,h);case -33554392:return Bdq(e,h);default:switch(e.df()){case 0:break;case 1:return Be5(e.l(0),h);default:return Bbk(e,
h);}return FG(h);}return BcR(e,h);}
function AA1(a){var b,c,d;b=A6I();while(!a.g.bN()){c=a.g;if(!c.hy())break;c=a.g;if(c.Ex())break;c=a.g;if(c.Fz())break;c=a.g;if(!(!c.tn()&&!a.g.cM())){c=a.g;if(!(!c.tn()&&I2(a.g.cM()))){c=a.g;if(c.cM()!=(-536870871)){c=a.g;if((c.cM()&(-2147418113))!=(-2147483608)){c=a.g;if(c.cM()!=(-536870788)){c=a.g;if(c.cM()!=(-536870876))break;}}}}}d=a.g.E();if(!Ik(d))b.I_(d&65535);else b.Py(Eu(d));}if(!BX(a,2))return Ba6(b);if(BX(a,64))return Bgm(b);return Bgr(b);}
function AA5(a){var b,c,d,e,f,g,h,i,j,k;b=Bc(4);c=0;d=(-1);e=(-1);if(!a.g.bN()&&a.g.hy()){f=b.data;d=a.g.E();f[c]=d;e=d-4352|0;}if(e>=0&&e<19){g=BW(3);f=g.data;f[c]=d&65535;h=a.g.bV();i=h-4449|0;if(i>=0&&i<21){f[1]=h&65535;a.g.E();j=a.g.bV();h=j-4519|0;if(h>=0&&h<28){f[2]=j&65535;a.g.E();return A82(g,3);}return A82(g,2);}if(!BX(a,2))return Qo(f[0]);if(BX(a,64))return A6D(f[0]);return AXI(f[0]);}k=1;while(k<4&&!a.g.bN()&&a.g.hy()){f=b.data;j=k+1|0;f[k]=a.g.E();k=j;}if(k==1){f=b.data;if(!AMm(f[0]))return LV(a,
f[0]);}if(!BX(a,2))return Bgo(b,k);if(BX(a,64))return Bf3(b,k);return Bbl(b,k);}
function MI(a,b){var c,d,e,f;if(a.g.hy()&&!a.g.tn()&&I2(a.g.cM())){if(!BX(a,128)){if(!a.g.Ex()&&!a.g.Fz())c=AA1(a);else{d=Ou(a,b);c=In(a,b,d);}}else{c=AA5(a);if(!a.g.bN()){e=a.g;if(!(e.bV()==(-536870871)&&!(b instanceof EZ))){e=a.g;if(e.bV()!=(-536870788)&&!a.g.hy())c=In(a,b,c);}}}}else if(a.g.bV()!=(-536870871)){d=Ou(a,b);c=In(a,b,d);}else{if(b instanceof EZ)G(BS(B(101),a.g.b(),a.g.dM()));c=FG(b);}a:{if(!a.g.bN()){e=a.g;if(!(e.bV()==(-536870871)&&!(b instanceof EZ))){e=a.g;if(e.bV()!=(-536870788)){f=MI(a,b);if
(c instanceof CG&&!(c instanceof Ef)&&!(c instanceof CI)&&!(c instanceof Ed)){e=c;if(!f.ca(e.pV()))c=Bak(e);}if((f.i6()&65535)!=43)c.Q(f);else c.Q(f.pV());break a;}}}if(c===null)return null;c.Q(b);}if((c.i6()&65535)!=43)return c;return c.pV();}
function In(a,b,c){var d,e,f,g,h,i,j;d=a.g.bV();if(c!==null&&!(c instanceof BJ)){switch(d){case -2147483606:a.g.E();return Bcl(c,b,d);case -2147483605:a.g.E();return BeN(c,b,(-2147483606));case -2147483585:a.g.E();return BeZ(c,b,(-536870849));case -2147483525:e=new JP;f=a.g.jn();g=a.gH+1|0;a.gH=g;Ss(e,f,c,b,(-536870849),g);return e;case -1073741782:case -1073741781:a.g.E();h=Bd8(c,b,d);c.Q(h);return h;case -1073741761:a.g.E();h=BaF(c,b,(-536870849));c.Q(b);return h;case -1073741701:h=new Lx;e=a.g;e=e.jn();i
=a.gH+1|0;a.gH=i;Sp(h,e,c,b,(-536870849),i);c.Q(h);return h;case -536870870:case -536870869:a.g.E();h=c.i6()!=(-2147483602)?BdM(c,b,d):BX(a,32)?BaT(c,b,d):Bag(c,b,d,MO(a.c_));c.Q(h);return h;case -536870849:a.g.E();h=Bge(c,b,(-536870849));c.Q(b);return h;case -536870789:h=new Es;e=a.g;e=e.jn();g=a.gH+1|0;a.gH=g;It(h,e,c,b,(-536870849),g);c.Q(h);return h;default:}return c;}j=null;if(c!==null)j=c;switch(d){case -2147483606:case -2147483605:a.g.E();h=Bcc(j,b,d);j.Q(h);return h;case -2147483585:a.g.E();return Bdk(j,
b,(-2147483585));case -2147483525:return BcB(a.g.jn(),j,b,(-2147483525));case -1073741782:case -1073741781:a.g.E();h=BfP(j,b,d);j.Q(h);return h;case -1073741761:a.g.E();return BfC(j,b,(-1073741761));case -1073741701:return Ba1(a.g.jn(),j,b,(-1073741701));case -536870870:case -536870869:a.g.E();h=Bb4(j,b,d);j.Q(h);return h;case -536870849:a.g.E();return Bbx(j,b,(-536870849));case -536870789:return BdZ(a.g.jn(),j,b,(-536870789));default:}return c;}
function Ou(a,b){var c,d,e,f,g,h,i,j,k,l;c=null;while(true){a:{d=a.g.bV();if((d&(-2147418113))==(-2147483608)){a.g.E();e=(d&16711680)>>16;d=d&(-16711681);if(d==(-16777176))a.c_=e;else{if(d!=(-1073741784))e=a.c_;c=L2(a,d,e,b);if(a.g.bV()!=(-536870871))G(BS(B(101),a.g.b(),a.g.dM()));a.g.E();}}else{b:{c:{switch(d){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:a.g.E();c
=A8G(0);break a;case -2147483577:a.g.E();c=BaC();break a;case -2147483558:a.g.E();c=new LQ;f=a.bR+1|0;a.bR=f;ABx(c,f);break a;case -2147483550:a.g.E();c=A8G(1);break a;case -2147483526:a.g.E();c=Bcv();break a;case -536870876:a.g.E();a.bR=a.bR+1|0;if(BX(a,8)){if(BX(a,1)){c=BaY(a.bR);break a;}c=A_Z(a.bR);break a;}if(BX(a,1)){c=Bbs(a.bR);break a;}c=Bci(a.bR);break a;case -536870866:a.g.E();if(BX(a,32)){c=BcL();break a;}c=Bb_(MO(a.c_));break a;case -536870821:a.g.E();g=0;if(a.g.bV()==(-536870818)){g=1;a.g.E();}c
=Su(a,g,b);if(a.g.bV()!=(-536870819))G(BS(B(101),a.g.b(),a.g.dM()));a.g.pN(1);a.g.E();break a;case -536870818:a.g.E();a.bR=a.bR+1|0;if(!BX(a,8)){c=ARC();break a;}c=BfO(MO(a.c_));break a;case 0:h=a.g.sf();if(h!==null)c=HQ(a,h);else{if(a.g.bN()){c=FG(b);break a;}c=Qo(d&65535);}a.g.E();break a;default:break b;}a.g.E();c=ARC();break a;}i=(d&2147483647)-48|0;if(a.fF<i)G(BS(B(101),a.g.b(),a.g.dM()));a.g.E();a.bR=a.bR+1|0;c=!BX(a,2)?Bdp(i,a.bR):BX(a,64)?BaZ(i,a.bR):Bgh(i,a.bR);a.qG.data[i].tk=1;a.v1=1;break a;}if(d
>=0&&!a.g.k0()){c=LV(a,d);a.g.E();}else if(d==(-536870788))c=FG(b);else{if(d!=(-536870871)){j=new Og;k=!a.g.k0()?Il(d&65535):(a.g.sf()).b();l=a.g;VX(j,k,l.b(),a.g.dM());G(j);}if(b instanceof EZ)G(BS(B(101),a.g.b(),a.g.dM()));c=FG(b);}}}if(d!=(-16777176))break;}return c;}
function Su(a,b,c){var d,e;d=Fq(a,b);e=HQ(a,d);e.Q(c);return e;}
function Fq(a,b){var c,d,e,f,g,h,i,j,k,$$je;c=BfI(b,BX(a,2),BX(a,64));d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(a.g.bN())break a;f=a.g.bV()==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.g.bV()){case -536870874:if(d>=0)c.cG(d);d=a.g.E();if(a.g.bV()!=(-536870874)){d=38;break d;}if(a.g.cM()==(-536870821)){a.g.E();e=1;d=(-1);break d;}a.g.E();if(g){c=Fq(a,0);break d;}if(a.g.bV()==(-536870819))break d;c.x4(Fq(a,0));break d;case -536870867:if(!g&&a.g.cM()!=(-536870819)){h=a.g;if(h.cM()!=(-536870821)&&d>=0){a.g.E();i
=a.g.bV();if(a.g.k0())break c;if(i<0){h=a.g;if(h.cM()!=(-536870819)){h=a.g;if(h.cM()!=(-536870821)&&d>=0)break c;}}e:{try{if(I2(i))break e;i=i&65535;break e;}catch($$e){$$je=R($$e);if($$je instanceof B5){break b;}else{throw $$e;}}}try{c.bF(d,i);}catch($$e){$$je=R($$e);if($$je instanceof B5){break b;}else{throw $$e;}}a.g.E();d=(-1);break d;}}if(d>=0)c.cG(d);d=45;a.g.E();break d;case -536870821:if(d>=0){c.cG(d);d=(-1);}a.g.E();j=0;if(a.g.bV()==(-536870818)){a.g.E();j=1;}if(!e)c.LS(Fq(a,j));else c.x4(Fq(a,j));e
=0;a.g.E();break d;case -536870819:if(d>=0)c.cG(d);d=93;a.g.E();break d;case -536870818:if(d>=0)c.cG(d);d=94;a.g.E();break d;case 0:if(d>=0)c.cG(d);k=a.g.sf();if(k===null)d=0;else{c.NM(k);d=(-1);}a.g.E();break d;default:}if(d>=0)c.cG(d);d=a.g.E();}g=0;}G(BS(B(101),IQ(a),a.g.dM()));}G(BS(B(101),IQ(a),a.g.dM()));}if(!f){if(d>=0)c.cG(d);return c;}G(BS(B(101),IQ(a),a.g.dM()-1|0));}
function LV(a,b){var c;c=Ik(b);if(BX(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AXI(b&65535);}if(BX(a,64)&&b>128){if(c)return BbO(b);if(Kh(b))return AN9(b&65535);if(!K5(b))return A6D(b&65535);return A1R(b&65535);}}if(c)return Bac(b);if(Kh(b))return AN9(b&65535);if(!K5(b))return Qo(b&65535);return A1R(b&65535);}
function HQ(a,b){var c,d;if(!b.Ga()){if(!b.Dg()){if(b.g8())return AJO(b);return ARm(b);}if(b.g8())return A4F(b);return A2l(b);}c=b.N8();d=Bdc(c);if(!b.Dg()){if(b.g8())return Lq(AJO(b.mR()),d);return Lq(ARm(b.mR()),d);}if(b.g8())return Lq(A4F(b.mR()),d);return Lq(A2l(b.mR()),d);}
function GJ(b){return AZi(b,0);}
function QH(a){if(a.v1)a.rN.ed();}
function A2q(b){var c,d,e,f;c=(I()).a(B(462));d=0;while(true){e=b.ux(B(463),d);if(e<0)break;f=e+2|0;(c.a(b.ce(d,f))).a(B(464));d=f;}return ((c.a(b.ei(d))).a(B(463))).b();}
function VJ(a){return a.fF;}
function ABV(a){return a.gH+1|0;}
function SI(a){return a.bR+1|0;}
function GF(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function BX(a,b){return (a.c_&b)!=b?0:1;}
function ADD(a){J(a);a.qG=Y(Cy,10);a.fF=(-1);a.gH=(-1);a.bR=(-1);}
var De=D(B5);
function BbJ(){var a=new De();V5(a);return a;}
function V5(a){E$(a);}
var GK=D(De);
var Ot=D(0);
function V2(){var a=this;C.call(a);a.z3=0;a.A1=null;}
function BeQ(a,b){var c=new V2();AUT(c,a,b);return c;}
function AUT(a,b,c){a.A1=b;a.z3=c;J(a);}
function AXp(a){A2_(a.A1,a.z3);}
function AO4(a){a.HO();}
var Qh=D(FP);
function BeZ(a,b,c){var d=new Qh();ARl(d,a,b,c);return d;}
function ARl(a,b,c,d){Mk(a,b,c,d);JF();b.Q(Bij);}
function ALd(a,b,c,d){var e;e=a.Y.e(b,c,d);if(e<=0)e=b;return a.k.e(e,c,d);}
function A4Q(a,b){a.k=b;}
function Jo(){var a=this;C.call(a);a.o1=0;a.n0=0;a.JF=0;a.N3=0;}
function BlZ(a,b,c,d){var e=new Jo();Tt(e,a,b,c,d);return e;}
function Tt(a,b,c,d,e){J(a);a.o1=b;a.n0=c;a.JF=d;a.N3=e;}
var YL=D(Bm);
function F0(){var a=new YL();A0s(a);return a;}
function A0s(a){Cx(a);}
var UK=D(T);
function BfE(){var a=new UK();AL1(a);return a;}
function AL1(a){Bo(a);}
function A2Q(a){var b;b=BcS(a);b.be=1;return b;}
function Ms(){var a=this;C.call(a);a.tL=0;a.ye=0;a.Cr=null;}
function AIA(a,b,c){var d=new Ms();AQX(d,a,b,c);return d;}
function AQX(a,b,c,d){J(a);a.tL=b;a.ye=c;a.Cr=d;}
function SH(){EA.call(this);this.iU=null;}
function Bdl(){var a=new SH();A9T(a);return a;}
function A9T(a){Ly(a);}
function AWF(a,b){var c;JD();c=BA(a,Bl0);if(c===null){c=Bba();Ep(a,c);}c.hl.F(b);return a;}
var AA0=D(D9);
function BfJ(){var a=new AA0();AJR(a);return a;}
function AJR(a){Km(a);}
function A7P(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AS_(a,b,c){var d;a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}d=1;break a;}d=0;}return d;}
var AAZ=D(D9);
function Bfg(){var a=new AAZ();AWJ(a);return a;}
function AWJ(a){Km(a);}
function AF$(a,b){return b!=10?0:1;}
function APL(a,b,c){return b!=10?0:1;}
var YQ=D(FS);
var Ve=D(T);
function Bfo(){var a=new Ve();A1m(a);return a;}
function A1m(a){Bo(a);}
function A7f(a){var b;b=Bew(a);b.be=1;return b;}
var K_=D();
var Bll=0;function KW(){C.call(this);this.qw=null;}
var Bl1=null;function BaA(){var a=new KW();AZu(a);return a;}
function AZu(a){J(a);}
function A0r(a,b,c,d,e){if(a.qw===null)a.qw=BeB();a.qw.Gz(b,c,d,e);}
function AIl(){if(Bl1===null)Bl1=BaA();return Bl1;}
function To(){var a=this;C.call(a);a.Br=null;a.CM=0;}
function Bcb(a){var b=new To();AYW(b,a);return b;}
function AYW(a,b){J(a);a.Br=b;}
function Dx(){var a=this;BJ.call(a);a.gy=null;a.yB=0;}
function ARm(a){var b=new Dx();APc(b,a);return b;}
function APc(a,b){C2(a);a.gy=b.mh();a.yB=b.bD;}
function AUo(a,b,c){return !a.gy.p(c.f(b))?(-1):1;}
function ALG(a){return ((((I()).a(B(55))).a(!a.yB?B(56):B(57))).a(a.gy.b())).b();}
function AOI(a,b){if(b instanceof Dz)return IY(a.gy,b.ps());if(b instanceof Dx)return GU(a.gy,b.gy);if(b instanceof C4)return GU(a.gy,b.uL());if(!(b instanceof Dv))return 1;return 0;}
function A5y(a){return a.gy;}
function Io(){Q.call(this);this.rW=0;}
function BcT(a){var b=new Io();Sy(b,a);return b;}
function Sy(a,b){Be(a);a.rW=b;}
function AOC(a,b){return a.bD^(a.rW!=F_(b&65535)?0:1);}
var Zm=D(Io);
function A_8(a){var b=new Zm();ANy(b,a);return b;}
function ANy(a,b){Sy(a,b);}
function A8b(a,b){return a.bD^(!(a.rW>>F_(b&65535)&1)?0:1);}
function LI(){var a=this;C.call(a);a.sK=null;a.l3=null;a.dC=0;a.mP=null;a.Af=0.0;a.AY=0.0;a.fM=0;a.Ev=null;a.nZ=null;a.pR=null;a.uR=0;a.sh=0;a.wV=0;a.Cm=0;a.vF=0;a.il=null;a.gu=null;a.LT=0;a.Om=null;a.P7=0.0;a.nn=0;a.re=0;a.vd=0;}
var Bl2=null;function TH(){TH=N(LI);A3$();}
function Bdg(){var a=new LI();ABw(a);return a;}
function Bl3(a,b){var c=new LI();Kf(c,a,b);return c;}
function ABw(a){TH();Kf(a,1000,null);}
function Kf(a,b,c){var d,e,f,g,h,i,j,k,l,m;TH();J(a);a.dC=0;a.mP=null;a.Af=0.0;a.AY=0.0;a.fM=0;a.Ev=BL();a.nZ=BL();a.pR=BL();a.uR=0;a.sh=770;a.wV=771;a.Cm=770;a.vF=771;a.gu=null;a.Om=CP(1.0,1.0,1.0,1.0);a.P7=Bkz;a.nn=0;a.re=0;a.vd=0;if(b>8191)G(W((((I()).a(B(465))).j(b)).b()));if(Biq===null)d=Bl2;else{M2();d=BlV;}e=new HS;f=b*4|0;g=b*6|0;M4(e,d,0,f,g,H(Fc,[EB(1,2,B(466)),EB(4,4,B(467)),EB(16,2,B(468))]));a.sK=e;a.nZ.L8(0.0,0.0,Bil.bo(),Bil.bl());a.l3=Ca(b*20|0);h=MW(g);i=0;j=0;while(j<g){k=h.data;k[j]=i;k[j
+1|0]=(i+1|0)<<16>>16;l=j+2|0;m=(i+2|0)<<16>>16;k[l]=m;k[j+3|0]=m;k[j+4|0]=(i+3|0)<<16>>16;k[j+5|0]=i;j=j+6|0;i=(i+4|0)<<16>>16;}a.sK.NO(h);if(c!==null)a.il=c;else{a.il=S5();a.LT=1;}}
function S5(){var b,c,d;TH();b=B(469);c=B(470);d=AIU(b,c);if(d.r_())return d;G(W((((I()).a(B(471))).a(d.q1())).b()));}
function A0$(a){if(a.fM)G(DR(B(472)));a.nn=0;Bio.kT(0);if(a.gu===null)a.il.ew();else a.gu.ew();a.z5();a.fM=1;}
function AQV(a){var b;if(!a.fM)G(DR(B(473)));if(a.dC>0)a.eo();a.mP=null;a.fM=0;b=Bio;b.kT(1);if(a.Jz())b.eh(3042);}
function ALa(a,b,c,d,e){var f,g,h;if(!a.fM)G(DR(B(474)));f=a.l3.data.length;if(b!==a.mP){a.Ks(b);g=f;}else{g=f-a.dC|0;if(!g){a.eo();g=f;}}h=Bq(g,e);X(c,d,a.l3,a.dC,h);a.dC=a.dC+h|0;g=e-h|0;while(g>0){d=d+h|0;a.eo();h=Bq(f,g);X(c,d,a.l3,0,h);a.dC=a.dC+h|0;g=g-h|0;}}
function AKz(a){var b,c,d;if(!a.dC)return;a.nn=a.nn+1|0;a.re=a.re+1|0;b=a.dC/20|0;if(b>a.vd)a.vd=b;c=b*6|0;a.mP.ew();d=a.sK;d.FO(a.l3,0,a.dC);(d.Au()).cZ(0);(d.Au()).cm(c);if(a.uR)Bio.eh(3042);else{Bio.o5(3042);if(a.sh!=(-1))Bio.J0(a.sh,a.wV,a.Cm,a.vF);}d.NP(a.gu===null?a.il:a.gu,4,0,c);a.dC=0;}
function AJd(a,b){if(a.fM)a.eo();a.nZ.ch(b);if(a.fM)a.z5();}
function AHz(a){(a.pR.ch(a.nZ)).hC(a.Ev);if(a.gu===null){a.il.Fg(B(475),a.pR);a.il.yh(B(476),0);}else{a.gu.Fg(B(475),a.pR);a.gu.yh(B(476),0);}}
function A5p(a,b){a.eo();a.mP=b;a.Af=1.0/b.bo();a.AY=1.0/b.bl();}
function AD9(a){return a.uR?0:1;}
function A3$(){M2();Bl2=BlS;}
var L_=D();
var Bl4=null;function Be4(){Be4=N(L_);A7l();}
function A7l(){Bl4=Bc((UJ()).data.length);Bl4.data[BC(BlT)]=1;Bl4.data[BC(BlU)]=2;Bl4.data[BC(BlV)]=3;Bl4.data[BC(BlS)]=4;}
var XS=D(CO);
var N7=D(0);
function LW(){var a=this;C.call(a);a.jE=null;a.e7=null;a.xL=null;a.JY=null;a.eC=null;a.NV=null;}
var Bl5=0;function VN(){VN=N(LW);AY8();}
function BfQ(a){var b=new LW();ACZ(b,a);return b;}
function Bl6(a,b){var c=new LW();Ka(c,a,b);return c;}
function Bl7(a,b,c){var d=new LW();Nm(d,a,b,c);return d;}
function ACZ(a,b){VN();Ka(a,b,null);}
function Ka(a,b,c){VN();Nm(a,b,null,c);}
function Nm(a,b,c,d){VN();J(a);a.jE=Bp();a.e7=Bp();a.xL=Bp();a.JY=b;if(c===null)c=BL();a.eC=c;if(d!==null)Pe(a,b.j3,d);else Q9(a,b.j3);a.Hb(b.AB,Bl5);a.P1();}
function Q9(a,b){var c,d,e;c=0;d=b.h;while(c<d){e=b.l(c);a.e7.F(e.u9());c=c+1|0;}Ob(a);}
function Pe(a,b,c){var d,e,f,g,h,i,j;d=0;e=b.h;while(d<e){f=c.data;g=b.l(d);h=f.length;i=0;a:{while(true){if(i>=h)break a;j=f[i];if(j.z(g.gn))break;i=i+1|0;}a.e7.F(g.u9());}d=d+1|0;}Ob(a);}
function On(a,b){var c,d,e,f,g,h,i,j;c=0;d=b.d9.h;while(c<d){a:{e=b.d9.l(c);f=e.cJ;if(f!==null){g=0;while(true){if(g>=f.cb)break a;f.eq.data[g]=a.yF(f.eq.data[g].gn);g=g+1|0;}}}if(!a.jE.iv(e.dY,1)){h=a.jE.K$(e.dY,0);if(h>=0)e.dY=a.jE.l(h);else{i=a.jE;j=e.dY.Je();e.dY=j;i.F(j);}}c=c+1|0;}c=0;d=b.IR();while(c<d){On(a,b.Qg(c));c=c+1|0;}}
function Ob(a){var b,c;b=0;c=a.e7.h;while(b<c){On(a,a.e7.l(b));b=b+1|0;}}
function AMK(a,b,c){var d,e;d=b.ft();while(d.bC()){e=d.bz();a.Hv(e,c);}}
function AFg(a,b,c){var d,e,f,g,h,i,j;d=Bf8();d.DU=b.DU;d.wl=b.wl;e=b.mW.bZ();while(e.bC()){f=e.bz();g=a.yF(f.y0.gn);if(g===null)continue;a:{h=Bft();h.y0=g;if(c){h.gC=f.gC;h.gp=f.gp;h.fQ=f.fQ;}else{b:{if(f.gC!==null){h.gC=Bp();i=f.gC.bZ();while(true){if(!i.bC())break b;j=i.bz();h.gC.F(Rp(j.no,j.ox));}}}c:{if(f.gp!==null){h.gp=Bp();i=f.gp.bZ();while(true){if(!i.bC())break c;j=i.bz();h.gp.F(Rp(j.no,j.ox));}}}if(f.fQ!==null){h.fQ=Bp();i=f.fQ.bZ();while(true){if(!i.bC())break a;j=i.bz();h.fQ.F(Rp(j.no,j.ox));}}}}if
(!(h.gC===null&&h.gp===null&&h.fQ===null))d.mW.F(h);}if(d.mW.h>0)a.xL.F(d);}
function APk(a,b,c){var d,e;d=a.e7.bZ();while(d.bC()){e=d.bz();a.z7(e,b,c);}}
function A$h(a,b,c,d){d.IJ(b);if(d.dz===null&&a.eC!==null)(b.dy.ch(a.eC)).hC(c.fI);else if(a.eC===null)b.dy.fx();else b.dy.ch(a.eC);b.BS=a.NV;return b;}
function ANK(a,b,c,d){var e,f,g,h;a:{if(b.d9.h>0){e=b.d9.bZ();while(true){if(!e.bC())break a;f=e.bz();if(f.lz)c.F(a.Jt(d.eT(),b,f));}}}g=(b.rD()).ft();while(g.bC()){h=g.bz();a.z7(h,c,d);}}
function ADe(a){var b,c;b=a.e7.h;c=0;while(c<b){(a.e7.l(c)).Dh(1);c=c+1|0;}c=0;while(c<b){(a.e7.l(c)).y2(1);c=c+1|0;}}
function AC7(a,b){return a.Ok(b,1);}
function AM4(a,b,c){return a.Pu(b,c,0);}
function AZj(a,b,c,d){return ZN(a.e7,b,c,d);}
function AY8(){Bl5=1;}
var D0=D(De);
function Bl8(){var a=new D0();Kp(a);return a;}
function Kp(a){V5(a);}
function QK(){D0.call(this);this.E6=0;}
function BaN(a){var b=new QK();A1P(b,a);return b;}
function A1P(a,b){Kp(a);a.E6=b;}
function AHn(a){return (((I()).a(B(477))).j(a.E6)).b();}
function P4(){var a=this;Q.call(a);a.ut=0;a.vU=0;a.pA=0;a.rq=0;a.e_=0;a.hX=0;a.bc=null;a.bE=null;}
function CS(){var a=new P4();ATZ(a);return a;}
function Bf0(a,b){var c=new P4();P$(c,a,b);return c;}
function BfI(a,b,c){var d=new P4();AVl(d,a,b,c);return d;}
function ATZ(a){Be(a);a.bc=A_K();}
function P$(a,b,c){Be(a);a.bc=A_K();a.ut=b;a.vU=c;}
function AVl(a,b,c,d){P$(a,c,d);a.f9(b);}
function AC4(a,b){a:{if(a.ut){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.e_){a.bc.rV(GF(b&65535));break a;}a.bc.sR(GF(b&65535));break a;}if(a.vU&&b>128){a.pA=1;b=EX(En(b));}}}if(!(!K5(b)&&!Kh(b))){if(a.rq)a.bG.rV(b-55296|0);else a.bG.sR(b-55296|0);}if(a.e_)a.bc.rV(b);else a.bc.sR(b);if(!a.be&&Ik(b))a.be=1;return a;}
function A_A(a,b){var c,d;if(!a.be&&b.be)a.be=1;if(a.rq){if(!b.b5)a.bG.iI(b.ci());else a.bG.dN(b.ci());}else if(!b.b5)a.bG.iQ(b.ci());else{a.bG.i8(b.ci());a.bG.dN(b.ci());a.b5=a.b5?0:1;a.rq=1;}if(!a.hX&&b.bK()!==null){if(a.e_){if(!b.jH())a.bc.iI(b.bK());else a.bc.dN(b.bK());}else if(!b.jH())a.bc.iQ(b.bK());else{a.bc.i8(b.bK());a.bc.dN(b.bK());a.bD=a.bD?0:1;a.e_=1;}}else{c=a.bD;if(a.bE!==null){d=a.bE;if(!c)a.bE=BfV(a,c,d,b);else a.bE=Bc5(a,c,d,b);}else{if(c&&!a.e_&&a.bc.bN())a.bE=BaL(a,b);else if(!c)a.bE=Bc8(a,
c,b);else a.bE=Baw(a,c,b);a.hX=1;}}return a;}
function A85(a,b,c){if(b>c)G(CL());a:{b:{if(!a.ut){if(c<55296)break b;if(b>57343)break b;}while(true){if(b>=(c+1|0))break a;a.cG(b);b=b+1|0;}}if(a.e_)a.bc.Oz(b,c+1|0);else a.bc.n4(b,c+1|0);}return a;}
function AUO(a,b){var c,d;if(!a.be&&b.be)a.be=1;if(b.g8())a.pA=1;if(!(a.b5^b.b5)){if(!a.b5)a.bG.iQ(b.ci());else a.bG.dN(b.ci());}else if(a.b5)a.bG.iI(b.ci());else{a.bG.i8(b.ci());a.bG.dN(b.ci());a.b5=1;}if(!a.hX&&b.bK()!==null){if(!(a.bD^b.jH())){if(!a.bD)a.bc.iQ(b.bK());else a.bc.dN(b.bK());}else if(a.bD)a.bc.iI(b.bK());else{a.bc.i8(b.bK());a.bc.dN(b.bK());a.bD=1;}}else{c=a.bD;if(a.bE!==null){d=a.bE;if(!c)a.bE=Bcn(a,c,d,b);else a.bE=Bgp(a,c,d,b);}else{if(!a.e_&&a.bc.bN()){if(!c)a.bE=BaI(a,b);else a.bE=Bf5(a,
b);}else if(!c)a.bE=BdD(a,b,c);else a.bE=A_2(a,b,c);a.hX=1;}}}
function AR9(a,b){var c,d;if(!a.be&&b.be)a.be=1;if(b.g8())a.pA=1;if(!(a.b5^b.b5)){if(!a.b5)a.bG.dN(b.ci());else a.bG.iQ(b.ci());}else if(!a.b5)a.bG.iI(b.ci());else{a.bG.i8(b.ci());a.bG.dN(b.ci());a.b5=0;}if(!a.hX&&b.bK()!==null){if(!(a.bD^b.jH())){if(!a.bD)a.bc.dN(b.bK());else a.bc.iQ(b.bK());}else if(!a.bD)a.bc.iI(b.bK());else{a.bc.i8(b.bK());a.bc.dN(b.bK());a.bD=0;}}else{c=a.bD;if(a.bE!==null){d=a.bE;if(!c)a.bE=Bgl(a,c,d,b);else a.bE=Bch(a,c,d,b);}else{if(!a.e_&&a.bc.bN()){if(!c)a.bE=BeU(a,b);else a.bE=Bfb(a,
b);}else if(!c)a.bE=Bae(a,b,c);else a.bE=Bgk(a,b,c);a.hX=1;}}}
function AGu(a,b){if(a.bE!==null)return a.bD^a.bE.p(b);return a.bD^a.bc.eL(b);}
function AT$(a){if(!a.hX)return a.bc;return null;}
function AZJ(a){return a.bG;}
function ARA(a){var b,c;if(a.bE!==null)return a;b=a.bK();c=Bd4(a,b);return c.f9(a.jH());}
function A4D(a){var b,c;b=I();c=a.bc.lc(0);while(c>=0){b.q0(Eu(c));b.U(124);c=a.bc.lc(c+1|0);}if(b.i()>0)b.Fa(b.i()-1|0);return b.b();}
function AIy(a){return a.pA;}
function P0(){var a=this;C.call(a);a.vk=null;a.Cs=null;a.oB=null;}
function BcO(a,b,c){var d=new P0();A6H(d,a,b,c);return d;}
function A6H(a,b,c,d){a.oB=b;a.vk=c;a.Cs=d;J(a);}
function A4R(a,b){if($rt_str(b.type).z(B(478)))a.oB.mB.ck(a.vk);else a.oB.mB.ct(a.vk,a.Cs);a.oB.m4.eu();}
function A$x(a,b){a.dU(b);}
var ABK=D(Bm);
function UB(){var a=new ABK();ASA(a);return a;}
function ASA(a){Cx(a);}
function TA(){var a=this;C.call(a);a.rc=0;a.qN=0;a.wc=0;}
function Bea(){var a=new TA();AC_(a);return a;}
function AC_(a){J(a);}
var UG=D(Ek);
function Bf3(a,b){var c=new UG();A1w(c,a,b);return c;}
function A1w(a,b,c){J3(a,b,c);}
var Oy=D(0);
var I4=D();
function Bl9(){var a=new I4();Tj(a);return a;}
function Tj(a){J(a);}
function AHJ(a,b,c,d,e){return 0;}
function ANY(a){}
function ZF(){var a=this;I4.call(a);a.wX=null;a.q5=0.0;}
function Bfq(){var a=new ZF();AKG(a);return a;}
function AKG(a){Tj(a);}
function A1Y(a,b,c,d,e){a.q5=0.0;return 0;}
function AHZ(a,b,c,d,e){return 0;}
function A7h(a,b,c){return 0;}
function A56(a,b,c,d){return 0;}
function A2B(a,b,c,d,e){return 0;}
function A9K(a,b,c){var d,e,f,g,h;d=c-b;e=d-a.q5;a.q5=d;f=Bil.bo();g=Bil.bl();h=a.wX;if(f>g)f=g;return h.Ne(e/f);}
function AY2(a,b,c,d,e){return 0;}
var Pi=D(ER);
function BfB(a,b,c,d,e,f){var g=new Pi();A35(g,a,b,c,d,e,f);return g;}
function A35(a,b,c,d,e,f,g){LP(a,b,c,d,e,f,g);}
function AL7(a,b){var c,d,e,f;c=a.cx.A.data;d=a.cj;e=b*4|0;f=(c[d+e|0]&255)<<24|(a.cx.A.data[(a.cj+e|0)+1|0]&255)<<16|(a.cx.A.data[(a.cj+e|0)+2|0]&255)<<8|a.cx.A.data[(a.cj+e|0)+3|0]&255;return $rt_intBitsToFloat(f);}
function A6w(a,b,c){var d,e,f,g;d=$rt_floatToIntBits(c);e=a.cx.A.data;f=a.cj;g=b*4|0;e[f+g|0]=d>>24<<24>>24;a.cx.A.data[(a.cj+g|0)+1|0]=d>>16<<24>>24;a.cx.A.data[(a.cj+g|0)+2|0]=d>>8<<24>>24;a.cx.A.data[(a.cj+g|0)+3|0]=d<<24>>24;}
var Mw=D(0);
function Ha(){var a=this;C.call(a);a.hi=null;a.mg=null;a.fJ=null;a.bu=null;a.px=null;a.po=null;a.qj=null;a.bh=null;a.cY=null;a.cV=null;a.ff=null;a.hW=null;a.kG=null;}
function ABb(a){J(a);a.hi=Bp();a.mg=Bp();a.fJ=Bp();a.px=G$();a.po=G$();a.qj=BaR();a.hW=G$();a.kG=ATE();}
function ADE(a,b,c,d){var e;if(a.bu!==null)G(U(B(479)));e=a.N_(b);if(e>=0){a.mg.k4(e,c);a.fJ.k4(e,d);return e;}a.hi.F(b);a.mg.F(c);a.fJ.F(d);return a.hi.h-1|0;}
function A_p(a,b,c){return a.I$(b.v$,b,c);}
function ASB(a,b){return a.bf(b,null);}
function AH5(a,b){var c,d;c=a.hi.h;d=0;while(true){if(d>=c)return (-1);if((a.hi.l(d)).z(b))break;d=d+1|0;}return d;}
function AZC(a,b,c){var d,e,f,g,h,i,j,k,l;if(a.bu!==null)G(U(B(480)));if(!b.r_())G(U(b.q1()));a.bh=b;d=a.hi.h;a.bu=Bc(d);e=0;while(e<d){f=a.hi.l(e);g=a.mg.l(e);h=a.fJ.l(e);if(g!==null&&!g.L_(a,e,c))a.bu.data[e]=(-1);else{a.bu.data[e]=b.AN(f,0);if(a.bu.data[e]>=0&&h!==null){if(!h.x2(a,e))a.po.iY(e);else a.px.iY(e);}}if(a.bu.data[e]<0){a.mg.k4(e,null);a.fJ.k4(e,null);}e=e+1|0;}a:{if(c!==null){i=c.cS.b7.gS();j=CU(i);e=0;while(true){if(e>=j)break a;k=CB(i,e);l=b.lZ(k.es);if(l>=0)a.qj.os(IU(k),l);e=e+1|0;}}}}
function X2(a,b,c){var d,e,f;a.cV=b;a.cY=c;a.bh.ew();a.ff=null;d=0;while(d<a.px.bS){e=a.fJ;f=a.px.b2(d);if(e.l(f)!==null)(a.fJ.l(f)).bg(a,f,null,null);d=d+1|0;}}
function WT(a,b){var c,d;a.hW.K();c=CU(b);d=0;while(d<c){a.hW.iY(a.qj.KT(IU(CB(b,d)),(-1)));d=d+1|0;}a.hW.Hy();return a.hW.cp;}
function A0J(a,b){if(b.dy.PT()===0.0)return;a.kG.K();if(b.cw!==null)F7(a.kG,b.cw);if(b.da!==null)F7(a.kG,b.da);a.y8(b,a.kG);}
function Vu(a,b,c){var d,e,f;d=0;while(d<a.po.bS){e=a.fJ;f=a.po.b2(d);if(e.l(f)!==null)(a.fJ.l(f)).bg(a,f,b,c);d=d+1|0;}if(a.ff!==b.cS.b7){if(a.ff!==null)a.ff.gO(a.bh,a.hW.cp);a.ff=b.cS.b7;a.ff.ih(a.bh,WT(a,b.cS.b7.gS()));}b.cS.JB(a.bh,0);}
function WK(a){if(a.ff!==null){a.ff.gO(a.bh,a.hW.cp);a.ff=null;}}
function Ic(a,b){return b>=0&&b<a.bu.data.length&&a.bu.data[b]>=0?1:0;}
function B1(a,b){return b>=0&&b<a.bu.data.length?a.bu.data[b]:(-1);}
function D1(a,b,c){if(a.bu.data[b]<0)return 0;a.bh.GT(a.bu.data[b],c);return 1;}
function Q4(a,b,c){if(a.bu.data[b]<0)return 0;a.bh.HV(a.bu.data[b],c);return 1;}
function Lz(a,b,c){if(a.bu.data[b]<0)return 0;a.bh.sq(a.bu.data[b],c);return 1;}
function Fv(a,b,c){if(a.bu.data[b]<0)return 0;a.bh.KO(a.bu.data[b],c);return 1;}
function Fn(a,b,c){if(a.bu.data[b]<0)return 0;a.bh.kc(a.bu.data[b],c);return 1;}
function WE(a,b,c,d){if(a.bu.data[b]<0)return 0;a.bh.Gf(a.bu.data[b],c,d);return 1;}
function DQ(a,b,c,d,e,f){if(a.bu.data[b]<0)return 0;a.bh.yu(a.bu.data[b],c,d,e,f);return 1;}
function DU(a,b,c){if(a.bu.data[b]<0)return 0;a.bh.Dl(a.bu.data[b],c);return 1;}
function ZE(a,b,c){if(a.bu.data[b]<0)return 0;a.bh.Dl(a.bu.data[b],a.cY.d6.gE(c));return 1;}
function RJ(){Q.call(this);this.Nb=null;}
function Bar(a){var b=new RJ();AVA(b,a);return b;}
function AVA(a,b){a.Nb=b;Be(a);}
function AEw(a,b){return KK(b);}
function Tq(){D0.call(this);this.zW=0;}
function BdN(a){var b=new Tq();AOj(b,a);return b;}
function AOj(a,b){Kp(a);a.zW=b;}
function AIj(a){return (((I()).a(B(481))).j(a.zW)).b();}
var X8=D(T);
function BdQ(){var a=new X8();AEa(a);return a;}
function AEa(a){Bo(a);}
function AHK(a){var b;b=Bax(a);b.be=1;return b;}
var Fg=D(Bx);
var BjK=null;var BjF=null;var Bl$=null;function Gv(){Gv=N(Fg);A0M();}
function AH1(a,b){var c=new Fg();AAb(c,a,b);return c;}
function AAb(a,b,c){Gv();Cw(a,b,c);}
function A0M(){BjK=AH1(B(482),0);BjF=AH1(B(483),1);Bl$=H(Fg,[BjK,BjF]);}
var EG=D(Bx);
var Bl_=null;var BjG=null;var Bma=null;function SM(){SM=N(EG);A7J();}
function ANX(a,b){var c=new EG();Zg(c,a,b);return c;}
function Zg(a,b,c){SM();Cw(a,b,c);}
function A7J(){Bl_=ANX(B(484),0);BjG=ANX(B(485),1);Bma=H(EG,[Bl_,BjG]);}
function HZ(){BH.call(this);this.mo=0.0;}
var Bmb=Ba;var Bmc=Ba;function ET(){ET=N(HZ);AD2();}
function A3w(a,b){var c=new HZ();VC(c,a,b);return c;}
function N9(b){ET();return A3w(Bmb,b);}
function VC(a,b,c){ET();Fb(a,b);a.mo=c;}
function APf(a){return A3w(a.dc,a.mo);}
function ASP(a){var b,c;b=F2(a);c=(977*b|0)+G0(a.mo)|0;return c;}
function AD2(){Bmb=BR(B(486));Bmc=BR(B(487));}
function Im(){var a=this;C.call(a);a.qY=0;a.qC=0;a.AJ=0;a.Fy=0;a.xr=0;a.Ea=0;a.FW=0;a.Nv=0;a.NU=0;a.Be=0;}
function Ze(a){J(a);a.qY=(-1);a.qC=(-1);a.AJ=0;a.Fy=0;a.xr=0;a.Ea=0;a.FW=0;a.Nv=0;a.NU=0;}
var TF=D(B5);
function BbF(){var a=new TF();A1U(a);return a;}
function A1U(a){E$(a);}
var Rh=D(CO);
var Ni=D(D3);
var Bmd=null;function N3(){N3=N(Ni);A01();}
function ACx(b,c){var d,e,f,g,h;N3();if(c>=2&&c<=36){if(b!==null&&!b.bN()){a:{d=0;e=0;switch(b.f(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=Ba;while(e<b.i()){g=e+1|0;h=Nn(b.f(e));if(h<0)G(DH((((I()).a(B(6))).a(b)).b()));if(h>=c)G(DH((((((I()).a(B(7))).j(c)).a(B(8))).a(b)).b()));f=CA(Cf(O(c),f),O(h));if(Kt(f,Ba)){if(g==b.i()&&Z(f,Cd(0, 2147483648))&&d)return Cd(0, 2147483648);G(DH((((I()).a(B(9))).a(b)).b()));}e=g;}if(d)f=A4b(f);return f;}G(DH(B(10)));}G(DH((((I()).a(B(11))).j(c)).b()));}
function ACe(b){N3();return ACx(b,10);}
function CW(b){var c,d,e;N3();if(Z(b,Ba))return 64;c=0;d=CN(b,32);if(Dw(d,Ba))c=32;else d=b;e=CN(d,16);if(Z(e,Ba))e=d;else c=c|16;d=CN(e,8);if(Z(d,Ba))d=e;else c=c|8;e=CN(d,4);if(Z(e,Ba))e=d;else c=c|4;d=CN(e,2);if(Z(d,Ba))d=e;else c=c|2;if(Dw(CN(d,1),Ba))c=c|1;return (64-c|0)-1|0;}
function Xh(b){var c,d,e;N3();if(Z(b,Ba))return 64;c=0;d=D8(b,32);if(Dw(d,Ba))c=32;else d=b;e=D8(d,16);if(Z(e,Ba))e=d;else c=c|16;d=D8(e,8);if(Z(d,Ba))d=e;else c=c|8;e=D8(d,4);if(Z(e,Ba))e=d;else c=c|4;d=D8(e,2);if(Z(d,Ba))d=e;else c=c|2;if(Dw(D8(d,1),Ba))c=c|1;return (64-c|0)-1|0;}
function A01(){Bmd=F($rt_longcls());}
var Gu=D(BT);
var Bme=null;function AMw(){AMw=N(Gu);AIH();}
function Bef(a){var b=new Gu();Sf(b,a);return b;}
function Bmf(){var a=new Gu();HM(a);return a;}
function Sf(a,b){AMw();B_(a);}
function HM(a){AMw();B_(a);}
function AIH(){Bme=Bef(0);}
var Kw=D(Gu);
var Bmg=null;function A$v(){A$v=N(Kw);A$7();}
function BbP(){var a=new Kw();Za(a);return a;}
function Bao(a){var b=new Kw();RE(b,a);return b;}
function Za(a){A$v();HM(a);a.dZ(Tg(),1);}
function RE(a,b){A$v();HM(a);}
function A$7(){Bmg=Bao(0);}
function Tg(){var jsObj=new Bullet.btDbvtBroadphase();return Bullet.getPointer(jsObj);}
var Nf=D(0);
function Rf(){C.call(this);this.zp=null;}
function Be1(){var a=new Rf();ATk(a);return a;}
function ATk(a){J(a);a.zp=A00();}
function ALD(a,b,c){AVp(a.zp,$rt_ustr(b),c);}
function A00(){var soundManager=new SoundManager();soundManager.debugMode=false;return soundManager;}
function AVp(b,c,d){b.setup({url:c,onready:function(){d.onready();},ontimeout:function(status){d.ontimeout();}});}
function Tc(){var a=this;C.call(a);a.ll=null;a.qg=null;a.dp=0;a.Ae=0;}
function A4Y(a){var b=new Tc();AK3(b,a);return b;}
function AK3(a,b){J(a);while(b>=a.dp){a.dp=a.dp<<1|1;}a.dp=a.dp<<1|1;a.ll=Bc(a.dp+1|0);a.qg=Bc(a.dp+1|0);a.Ae=b;}
function AKq(a,b,c){var d,e,f;d=0;e=b&a.dp;while(a.ll.data[e]&&a.ll.data[e]!=b){f=d+1|0;d=f&a.dp;f=e+d|0;e=f&a.dp;}a.ll.data[e]=b;a.qg.data[e]=c;}
function A3C(a,b){var c,d,e,f;c=b&a.dp;d=0;while(true){e=a.ll.data[c];if(!e)break;if(e==b)return a.qg.data[c];f=d+1|0;d=f&a.dp;f=c+d|0;c=f&a.dp;}return a.Ae;}
var Hm=D(0);
var QX=D();
function A_a(a,b){return a.Ms(b);}
function AGa(a){return a.Pb();}
function G5(){var a=this;C.call(a);a.jW=null;a.zQ=0.0;a.zT=0.0;a.Qn=0.0;a.Ql=0.0;a.n$=0;a.m0=0;}
function AUW(a){var b=new G5();AV8(b,a);return b;}
function AV8(a,b){J(a);if(b===null)G(W(B(488)));a.jW=b;a.Nh(0,0,b.bo(),b.bl());}
function A7W(a,b,c,d,e){var f,g;f=1.0/a.jW.bo();g=1.0/a.jW.bl();a.Nw(b*f,c*g,(b+d|0)*f,(c+e|0)*g);a.n$=Vz(d);a.m0=Vz(e);}
function AFx(a,b,c,d,e){var f,g,h,i,j,k,l;f=a.jW.bo();g=a.jW.bl();h=CH(d-b);i=f;a.n$=Dg(h*i);h=CH(e-c);j=g;a.m0=Dg(h*j);if(a.n$==1&&a.m0==1){k=0.25/i;b=b+k;d=d-k;l=0.25/j;c=c+l;e=e-l;}a.zQ=b;a.zT=c;a.Qn=d;a.Ql=e;}
function ATc(a){return a.jW;}
function AGP(a){return a.n$;}
function ADL(a){return a.m0;}
function Sb(){JH.call(this);this.tg=0.0;}
function Baa(){var a=new Sb();AUN(a);return a;}
function Bcp(a){var b=new Sb();UW(b,a);return b;}
function AUN(a){UW(a,Beq());}
function UW(a,b){Tl(a);a.tg=1.0;a.GC(b);}
function AYS(a,b,c,d){a.HI(0,0,b,c);a.Kn(b*a.tg,c*a.tg);a.PL(d);}
function VS(){var a=this;C.call(a);a.eq=null;a.gL=null;a.cb=0;a.Kb=0;}
function Bdo(a,b,c,d){var e=new VS();APZ(e,a,b,c,d);return e;}
function APZ(a,b,c,d,e){J(a);a.Kb=b;a.eq=EW(d,c);a.gL=EW(e,c);}
function AMR(a,b){a.Nl(b,0,b.cb);}
function AVo(a,b,c,d){var e;if((c+d|0)>b.cb)G(W((((((((I()).a(B(489))).j(c)).a(B(426))).j(d)).a(B(427))).j(b.cb)).b()));e=(a.cb+d|0)-c|0;if(e>=a.eq.data.length)a.jJ(Bf(8,e*1.75|0));X(b.eq,c,a.eq,a.cb,d);X(b.gL,c,a.gL,a.cb,d);a.cb=a.cb+d|0;}
function A3s(a){Hk(a.eq,0,a.cb,null);Hk(a.gL,0,a.cb,null);a.cb=0;}
function ASW(a,b){var c,d,e;c=EW((Ck(a.eq)).gq(),b);d=c.data;X(a.eq,0,c,0,Bq(a.cb,d.length));a.eq=c;e=EW((Ck(a.gL)).gq(),b);d=e.data;X(a.gL,0,e,0,Bq(a.cb,d.length));a.gL=e;}
var QF=D(IR);
function BaW(){var a=new QF();A2s(a);return a;}
function A2s(a){TT(a);}
function AJD(a){var b;b=(ZC(a)).f9(1);b.be=1;return b;}
function Q7(){var a=this;C.call(a);a.kh=null;a.gI=null;a.j8=null;a.Mf=0;a.FN=0;a.u3=0;}
function BbG(){var a=new Q7();AGo(a);return a;}
function Bmh(a,b,c,d){var e=new Q7();OL(e,a,b,c,d);return e;}
function Bmi(a,b,c){var d=new Q7();Uk(d,a,b,c);return d;}
function Bmj(a,b,c){var d=new Q7();YC(d,a,b,c);return d;}
function AGo(a){OL(a,Bin.oc(B(490)),Bin.oc(B(491)),0,1);}
function OL(a,b,c,d,e){Uk(a,Bds(b,d),AUW(ARL(c,0)),e);a.u3=1;}
function Uk(a,b,c,d){var e,f;if(c===null)e=null;else{f=Y(G5,1);f.data[0]=c;e=AEB(f);}YC(a,b,e,d);}
function YC(a,b,c,d){var e,f,g;J(a);a.Mf=b.rg;a.kh=b;a.FN=d;if(c!==null&&c.h){a.gI=c;a.u3=0;}else{if(b.hA===null)G(W(B(492)));e=b.hA.data.length;a.gI=DL(e);f=0;while(f<e){g=b.so===null?Bin.Fq(b.hA.data[f]):Bin.Op(b.hA.data[f],b.so.OD());a.gI.F(AUW(ARL(g,0)));f=f+1|0;}a.u3=1;}a.j8=a.KG();a.HE(b);}
function AT5(a,b){var c,d,e,f,g,h,i,j;c=b.he.data;d=c.length;e=0;while(e<d){a:{f=c[e];if(f!==null){g=f.data;h=g.length;i=0;while(true){if(i>=h)break a;j=g[i];if(j!==null)b.E3(j,a.gI.l(j.jX));i=i+1|0;}}}e=e+1|0;}if(b.iu!==null)b.E3(b.iu,a.gI.l(b.iu.jX));}
function AI9(a,b,c,d,e){var f;a.j8.K();f=a.j8.JG(c,d,e);a.j8.Nz(b);return f;}
function A$f(a,b,c,d,e){(a.j8.yO()).hV(b,c,d,e);}
function AQG(a){return a.gI;}
function A91(a){return BfK(a,a.FN);}
var Gy=D(GN);
var Bmk=null;function AHx(){AHx=N(Gy);A$1();}
function Bgn(a){var b=new Gy();Vi(b,a);return b;}
function Bml(){var a=new Gy();KS(a);return a;}
function Vi(a,b){AHx();Jr(a);}
function KS(a){AHx();Jr(a);}
function A$1(){Bmk=Bgn(0);}
var He=D(Gy);
function Bmm(){var a=new He();RQ(a);return a;}
function RQ(a){KS(a);}
var Iq=D(He);
function Bmn(){var a=new Iq();Ls(a);return a;}
function Ls(a){RQ(a);}
var LU=D(Iq);
var Bmo=null;function AFl(){AFl=N(LU);AIe();}
function Bfz(a){var b=new LU();Si(b,a);return b;}
function Bbt(a){var b=new LU();AAp(b,a);return b;}
function Si(a,b){var c;AFl();Ls(a);Fl();c=Bg5;Gq(b,c);a.dZ(ZH(c.de()),1);}
function A9S(a,b,c){var d,e,f;Fl();d=Bg5;Gq(c,d);e=a.bY;f=d.de();ABJ(e,b,f);Wp(d,c);}
function AAp(a,b){AFl();Ls(a);}
function AIe(){Bmo=Bbt(0);}
function ZH(b){var boxHalfExtentsJSObj=Bullet.wrapPointer(b,Bullet.btVector3);var jsObj=new Bullet.btBoxShape(boxHalfExtentsJSObj);return Bullet.getPointer(jsObj);}
function ABJ(b,c,d){var jsObj=Bullet.wrapPointer(b,Bullet.btBoxShape);var inertiaJSObj=Bullet.wrapPointer(d,Bullet.btVector3);jsObj.calculateLocalInertia(c,inertiaJSObj);}
function Zi(){var a=this;C.call(a);a.fl=null;a.dY=null;a.cJ=null;a.dz=null;a.lz=0;}
function BdU(){var a=new Zi();AEk(a);return a;}
function Bgj(a,b){var c=new Zi();AZQ(c,a,b);return c;}
function AEk(a){J(a);a.lz=1;}
function AZQ(a,b,c){J(a);a.lz=1;a.fl=b;a.dY=c;}
function APh(a,b){b.da=a.dY;b.cS.Cx(a.fl);b.dJ=a.dz;return b;}
function AQo(a){return (BdU()).Qo(a);}
function A45(a,b){var c;a:{a.fl=BfR(b.fl);a.dY=b.dY;a.lz=b.lz;if(b.cJ===null){a.cJ=null;a.dz=null;}else{if(a.cJ!==null)a.cJ.K();else a.cJ=Bdo(1,b.cJ.cb,F(L1),F(Cu));a.cJ.Pk(b.cJ);if(!(a.dz!==null&&a.dz.data.length==a.cJ.cb))a.dz=Y(Cu,a.cJ.cb);c=0;while(true){if(c>=a.dz.data.length)break a;if(a.dz.data[c]===null)a.dz.data[c]=BL();c=c+1|0;}}}return a;}
function T0(){var a=this;Q.call(a);a.A_=null;a.P5=null;}
function Bc6(a,b){var c=new T0();AT4(c,a,b);return c;}
function AT4(a,b,c){a.P5=b;a.A_=c;Be(a);}
function AIg(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.b5^a.A_.eL(c):0;}
function TZ(){var a=this;Q.call(a);a.EI=null;a.zK=null;a.JE=null;}
function Bbn(a,b,c){var d=new TZ();A41(d,a,b,c);return d;}
function A41(a,b,c,d){a.JE=b;a.EI=c;a.zK=d;Be(a);}
function AVd(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.b5^a.EI.eL(c):0;return a.zK.p(b)&&!d?1:0;}
var C8=D(Bx);
var Bmp=null;var Bmq=null;var Bmr=null;var Bms=null;var Bmt=null;var Bmu=null;var BjH=null;var Bmv=null;function AYz(){AYz=N(C8);AUC();}
function FC(a,b){var c=new C8();Vf(c,a,b);return c;}
function Vf(a,b,c){AYz();Cw(a,b,c);}
function AUC(){Bmp=FC(B(105),0);Bmq=FC(B(493),1);Bmr=FC(B(494),2);Bms=FC(B(495),3);Bmt=FC(B(496),4);Bmu=FC(B(497),5);BjH=FC(B(498),6);Bmv=H(C8,[Bmp,Bmq,Bmr,Bms,Bmt,Bmu,BjH]);}
var ABh=D(T);
function Bb1(){var a=new ABh();AWq(a);return a;}
function AWq(a){Bo(a);}
function A4V(a){var b;b=Bb8(a);b.be=1;return b;}
var Os=D(0);
var W2=D(Ef);
function BcB(a,b,c,d){var e=new W2();A39(e,a,b,c,d);return e;}
function A39(a,b,c,d,e){K0(a,b,c,d,e);}
function A7y(a,b,c,d){var e,f,g,h;e=a.gg.jd();f=a.gg.iJ();g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.bv.cg()|0)>d.J())break a;h=a.bv.bH(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.k.e(b,c,d);}if((b+a.bv.cg()|0)>d.J()){d.d5=1;return (-1);}h=a.bv.bH(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function Rc(){Im.call(this);this.Cw=null;}
function BcZ(a){var b=new Rc();AEC(b,a);return b;}
function AEC(a,b){var c,d,e,f;Ze(a);c=AZq();d=c.pg();e=A93();f=d.getElementById($rt_ustr(b));a.Cw=BaE(e,f);T1(new OG);}
function AVe(a){return a.Cw;}
var Lf=D(0);
var Lk=D(0);
function X0(){var a=this;C.call(a);a.kE=0;a.f_=null;a.h1=null;a.x6=0;a.sB=0;a.v8=0.0;a.sz=0;a.r$=0;a.iX=0;}
function BaR(){var a=new X0();ASw(a);return a;}
function Bmw(a,b){var c=new X0();AAr(c,a,b);return c;}
function ASw(a){AAr(a,51,0.800000011920929);}
function AAr(a,b,c){var d;J(a);if(c>0.0&&c<1.0){a.v8=c;d=G3(b,c);a.sz=d*c|0;a.iX=d-1|0;a.r$=CW(O(a.iX));a.f_=Bc(d);a.h1=Bc(d);return;}G(W((((I()).a(B(40))).cD(c)).b()));}
function AOq(a,b){return Cp(CN(Cf(O(b),Cd(2135587861, 2654435769)),a.r$));}
function Na(a,b){var c,d,e;c=a.f_;d=a.e8(b);while(true){e=c.data[d];if(!e)return  -(d+1|0)|0;if(e==b)break;d=(d+1|0)&a.iX;}return d;}
function AHV(a,b,c){var d,e;if(!b){a.x6=c;if(!a.sB){a.sB=1;a.kE=a.kE+1|0;}return;}d=Na(a,b);if(d>=0){a.h1.data[d]=c;return;}e= -(d+1|0)|0;a.f_.data[e]=b;a.h1.data[e]=c;e=a.kE+1|0;a.kE=e;if(e>=a.sz)RY(a,a.f_.data.length<<1);}
function Qv(a,b,c){var d,e,f;d=a.f_;e=a.e8(b);while(true){f=d.data;if(!f[e])break;e=(e+1|0)&a.iX;}f[e]=b;a.h1.data[e]=c;}
function ALP(a,b,c){var d;if(!b){if(a.sB)c=a.x6;return c;}d=Na(a,b);if(d>=0)c=a.h1.data[d];return c;}
function RY(a,b){var c,d,e,f,g;a:{c=a.f_.data.length;a.sz=b*a.v8|0;a.iX=b-1|0;a.r$=CW(O(a.iX));d=a.f_;e=a.h1;a.f_=Bc(b);a.h1=Bc(b);if(a.kE>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g)Qv(a,g,e.data[f]);f=f+1|0;}}}}
function XG(){Q.call(this);this.Qc=null;}
function BcS(a){var b=new XG();AS0(b,a);return b;}
function AS0(a,b){a.Qc=b;Be(a);}
function A3O(a,b){return J0(b);}
function PQ(){var a=this;Q.call(a);a.oY=null;a.Ly=null;}
function Bd4(a,b){var c=new PQ();AS9(c,a,b);return c;}
function AS9(a,b,c){a.Ly=b;a.oY=c;Be(a);}
function AL6(a,b){return a.bD^a.oY.eL(b);}
function A0I(a){var b,c;b=I();c=a.oY.lc(0);while(c>=0){b.q0(Eu(c));b.U(124);c=a.oY.lc(c+1|0);}if(b.i()>0)b.Fa(b.i()-1|0);return b.b();}
var Vg=D(CI);
function Bcl(a,b,c){var d=new Vg();ARk(d,a,b,c);return d;}
function ARk(a,b,c,d){Fd(a,b,c,d);JF();b.Q(Bij);}
function AYn(a,b,c,d){var e;while(true){e=a.Y.e(b,c,d);if(e<=0)break;b=e;}return a.k.e(b,c,d);}
function T6(){var a=this;C.call(a);a.JW=0;a.J$=Ba;a.sx=null;a.D1=null;a.BN=Ba;a.xA=null;}
function Beb(a,b,c,d){var e=new T6();ADq(e,a,b,c,d);return e;}
function ADq(a,b,c,d,e){J(a);a.sx=b;a.D1=c;a.BN=d;a.xA=e;}
function CY(){BH.call(this);this.dX=null;}
var Bmx=Ba;var Bmy=Ba;var Bmz=Ba;var BmA=Ba;var BmB=Ba;var BmC=Ba;var BmD=Ba;var BmE=Ba;function Ce(){Ce=N(CY);A1V();}
function BmF(a){var b=new CY();Jk(b,a);return b;}
function BmG(a,b){var c=new CY();JQ(c,a,b);return c;}
function A0k(a,b,c,d,e){var f=new CY();NF(f,a,b,c,d,e);return f;}
function Bc0(a){var b=new CY();Z7(b,a);return b;}
function UM(b){Ce();return Z(Br(b,BmE),Ba)?0:1;}
function KY(b,c,d,e){Ce();return A0k(Bmx,b,c,d,e);}
function Zx(b,c,d,e){Ce();return A0k(Bmy,b,c,d,e);}
function Jk(a,b){Ce();Fb(a,b);a.dX=D2();if(UM(b))return;G(U(B(499)));}
function JQ(a,b,c){Ce();Jk(a,b);if(c!==null)a.dX.eR(c);}
function NF(a,b,c,d,e,f){Ce();Jk(a,b);a.dX.hV(c,d,e,f);}
function Z7(a,b){Ce();JQ(a,b.dc,b.dX);}
function AJu(a){return Bc0(a);}
function ASG(a){var b,c;b=F2(a);c=(953*b|0)+a.dX.r1()|0;return c;}
function A1V(){Bmx=BR(B(500));Bmy=BR(B(501));Bmz=BR(B(502));BmA=BR(B(503));BmB=BR(B(504));BmC=BR(B(505));BmD=BR(B(506));BmE=BQ(BQ(BQ(BQ(BQ(BQ(Bmz,Bmx),Bmy),BmA),BmB),BmC),BmD);}
function Hg(){var a=this;V.call(a);a.ia=null;a.DJ=0;a.zr=0;}
var BmH=null;var BmI=null;function PA(){PA=N(Hg);A4c();}
function Bfl(a,b){var c=new Hg();Qj(c,a,b);return c;}
function Qj(a,b,c){PA();BM(a);a.ia=APj();a.DJ=b;a.zr=c;}
function A4s(a,b,c,d,e){var f,g,h,i,j,k;if(d.cw===null){f=b.bh;g=B1(b,c);PA();f.z$(g,BmH,0,BmH.data.length);}else{h=d.dy;PA();h.uz(BmI);Ce();if(Ct(e,BmC))a.ia.Iz((BA(e,BmC)).dX);a:{JD();if(Ct(e,Bl0)){i=Bl0;j=(BA(e,i)).hl;k=a.DJ;while(true){if(k>=j.h)break a;a.ia.Qm((j.l(k)).bk,(j.l(k)).fd);k=k+1|0;}}}b:{A3P();if(Ct(e,Bli)){j=(BA(e,Bli)).Ec;k=a.zr;while(true){if(k>=j.h)break b;a.ia.Mu((j.l(k)).bk,(j.l(k)).eD,BmI,(j.l(k)).dx);k=k+1|0;}}}a.ia.Ni();b.bh.z$(B1(b,c),a.ia.cf,0,a.ia.cf.data.length);}}
function A4c(){BmH=BcN([1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0]);BmI=S();}
function NX(){var a=this;C.call(a);a.hz=null;a.Co=0;a.sS=null;a.o2=null;a.zS=0;a.G1=0.0;a.G0=0.0;a.vg=null;a.Hi=0.0;a.dw=null;a.dF=null;a.cL=null;a.s6=null;}
var BmJ=null;function BeK(){BeK=N(NX);AMo();}
function BfK(a,b){var c=new NX();ACi(c,a,b);return c;}
function ACi(a,b,c){var d,e,f;BeK();J(a);a.sS=Bp();a.o2=Bp();a.vg=CP(1.0,1.0,1.0,1.0);a.hz=b;a.Co=c;d=b.gI.h;if(!d)G(W(B(507)));a:{a.dw=Y($rt_arraycls($rt_floatcls()),d);a.dF=Bc(d);if(d>1){a.cL=Y(GV,d);e=0;f=a.cL.data.length;while(true){if(e>=f)break a;a.cL.data[e]=G$();e=e+1|0;}}}a.s6=Bc(d);}
function A5$(a){return a.vg;}
function AHM(a,b){var c,d,e,f;c=a.hz.Ou();d=0;e=a.dw.data.length;while(d<e){if(a.dF.data[d]>0){f=a.dw.data[d];b.Hu((c.l(d)).Ba(),f,0,a.dF.data[d]);}d=d+1|0;}}
function A5h(a){var b,c;a.G1=0.0;a.G0=0.0;Sq(a.o2,1);a.o2.K();a.sS.K();b=0;c=a.dF.data.length;while(b<c){if(a.cL!==null)a.cL.data[b].K();a.dF.data[b]=0;b=b+1|0;}}
function V4(a,b){var c,d,e,f,g,h,i,j,k,l;a:{if(a.dw.data.length==1){c=0;d=0;e=b.cn.h;while(d<e){c=c+(b.cn.l(d)).bi.h|0;d=d+1|0;}NR(a,0,c);}else{f=a.s6;g=f.data;d=0;e=g.length;while(d<e){g[d]=0;d=d+1|0;}d=0;h=b.cn.h;while(d<h){i=(b.cn.l(d)).bi;j=0;k=i.h;while(j<k){l=(i.l(j)).jX;g[l]=g[l]+1|0;j=j+1|0;}d=d+1|0;}d=0;while(true){if(d>=e)break a;NR(a,d,g[d]);d=d+1|0;}}}}
function NR(a,b,c){var d,e,f;if(a.cL!==null&&c>a.cL.data[b].cp.data.length)a.cL.data[b].Pc(c-a.cL.data[b].bS|0);d=a.dF.data[b]+(c*20|0)|0;e=a.dw.data[b];if(e===null)a.dw.data[b]=Ca(d);else if(e.data.length<d){f=Ca(d);X(e,0,f,0,a.dF.data[b]);a.dw.data[b]=f;}}
function Sd(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=a.hz.gI.h;if(a.dw.data.length<e){f=Y($rt_arraycls($rt_floatcls()),e);X(a.dw,0,f,0,a.dw.data.length);a.dw=f;g=Bc(e);X(a.dF,0,g,0,a.dF.data.length);a.dF=g;h=Y(GV,e);i=0;if(a.cL!==null){i=a.cL.data.length;X(a.cL,0,h,0,a.cL.data.length);}while(i<e){h.data[i]=G$();i=i+1|0;}a.cL=h;a.s6=Bc(e);}a.sS.F(b);V4(a,b);i=0;j=b.cn.h;while(i<j){k=b.cn.l(i);l=k.bi;m=k.bn;n=k.j2.ny();o=c+k.dh;p=d+k.iL;q=0;r=l.h;while(q<r){s=l.l(q);o=o+m.oa(q);Tu(a,s,o,p,n);q=q+1|0;}i=i+
1|0;}Bv();a.Hi=Bkz;}
function Tu(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;f=a.hz.kh.eQ;g=a.hz.kh.z_;h=c+b.dr*f;i=d+b.jg*g;j=b.cv*f;k=b.cN*g;l=b.vG;m=b.Bo;n=b.p9;o=b.tl;if(a.Co){h=Dg(h);i=Dg(i);j=Dg(j);k=Dg(k);}p=h+j;q=i+k;r=b.jX;s=a.dF.data[r];t=a.dF.data;t[r]=t[r]+20|0;if(a.cL!==null){u=a.cL.data[r];v=a.zS;a.zS=v+1|0;u.iY(v);}w=a.dw.data[r];t=w.data;x=s+1|0;t[s]=h;v=x+1|0;t[x]=i;x=v+1|0;t[v]=e;v=x+1|0;t[x]=l;y=v+1|0;t[v]=n;x=y+1|0;t[y]=h;v=x+1|0;t[x]=q;x=v+1|0;t[v]=e;v=x+1|0;t[x]=l;x=v+1|0;t[v]=o;v=x+1|0;t[x]=p;x
=v+1|0;t[v]=q;v=x+1|0;t[x]=e;x=v+1|0;t[v]=m;v=x+1|0;t[x]=o;x=v+1|0;t[v]=p;y=x+1|0;t[x]=i;v=y+1|0;t[y]=e;x=v+1|0;t[v]=m;t[x]=n;}
function AUb(a,b,c,d){return a.Ir(b,c,d,0,b.i(),0.0,8,0,null);}
function A$_(a,b,c,d,e,f,g,h,i,j){var k;k=Tp(F(EI));a.o2.F(k);k.pJ(a.hz,b,e,f,a.vg,g,h,i,j);a.HU(k,c,d);return k;}
function AGC(a,b,c,d){Sd(a,b,c,d+a.hz.kh.l5);}
function AMo(){BmJ=CP(1.0,1.0,1.0,1.0);}
function PN(){var a=this;Q.call(a);a.Ce=null;a.Hh=null;}
function BeU(a,b){var c=new PN();A7e(c,a,b);return c;}
function A7e(a,b,c){a.Hh=b;a.Ce=c;Be(a);}
function AGK(a,b){return a.Ce.p(b);}
function PO(){var a=this;Q.call(a);a.w_=null;a.Qy=null;}
function Bfb(a,b){var c=new PO();AM_(c,a,b);return c;}
function AM_(a,b,c){a.Qy=b;a.w_=c;Be(a);}
function A0o(a,b){return a.w_.p(b)?0:1;}
function PP(){var a=this;Q.call(a);a.y3=0;a.EU=null;a.zN=null;a.Gj=null;}
function Bcn(a,b,c,d){var e=new PP();AGV(e,a,b,c,d);return e;}
function AGV(a,b,c,d,e){a.Gj=b;a.y3=c;a.EU=d;a.zN=e;Be(a);}
function A_N(a,b){return !(a.y3^a.EU.p(b))&&!a.zN.p(b)?0:1;}
var YK=D();
function Wx(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.Br.data;f=b.CM;b.CM=f+1|0;g=A5q(e[f]);h=(g%2|0)!=1?0:1;c=c+Cg(d,g/2|0)|0;d=d*46|0;if(!h)break;}return c;}
function Pc(b){var c,d;c=Wx(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function A5q(b){if(b<34)return b-32|0;if(b>=92)return (b-32|0)-2|0;return (b-32|0)-1|0;}
function P8(){var a=this;Q.call(a);a.E8=0;a.vL=null;a.vX=null;a.G8=null;}
function Bgp(a,b,c,d){var e=new P8();A0i(e,a,b,c,d);return e;}
function A0i(a,b,c,d,e){a.G8=b;a.E8=c;a.vL=d;a.vX=e;Be(a);}
function AJv(a,b){return !(a.E8^a.vL.p(b))&&!a.vX.p(b)?1:0;}
function PR(){var a=this;Q.call(a);a.Em=0;a.A9=null;a.xT=null;a.Mg=null;}
function Bgl(a,b,c,d){var e=new PR();AZd(e,a,b,c,d);return e;}
function AZd(a,b,c,d,e){a.Mg=b;a.Em=c;a.A9=d;a.xT=e;Be(a);}
function AW8(a,b){return a.Em^a.A9.p(b)&&a.xT.p(b)?1:0;}
function ON(){BJ.call(this);this.md=null;}
function Bgm(a){var b=new ON();A8N(b,a);return b;}
function A8N(a,b){var c,d;C2(a);c=I();d=0;while(d<b.i()){c.U(Dq(DB(b.f(d))));d=d+1|0;}a.md=c.b();a.bO=c.i();}
function AMA(a,b,c){var d;d=0;while(true){if(d>=a.md.i())return a.md.i();if(a.md.f(d)!=Dq(DB(c.f(b+d|0))))break;d=d+1|0;}return (-1);}
function AKe(a){return (((I()).a(B(508))).a(a.md)).b();}
function PS(){var a=this;Q.call(a);a.DY=0;a.AI=null;a.Ej=null;a.MQ=null;}
function Bch(a,b,c,d){var e=new PS();AD0(e,a,b,c,d);return e;}
function AD0(a,b,c,d,e){a.MQ=b;a.DY=c;a.AI=d;a.Ej=e;Be(a);}
function AO_(a,b){return a.DY^a.AI.p(b)&&a.Ej.p(b)?0:1;}
function PT(){var a=this;Q.call(a);a.Fi=null;a.yt=0;a.FT=null;}
function Bae(a,b,c){var d=new PT();AOc(d,a,b,c);return d;}
function AOc(a,b,c,d){a.FT=b;a.Fi=c;a.yt=d;Be(a);}
function AK7(a,b){return a.Fi.p(b)&&a.yt^a.FT.bc.eL(b)?1:0;}
function Ug(){Q.call(this);this.Kl=null;}
function Bgi(a){var b=new Ug();AUs(b,a);return b;}
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
function PM(){var a=this;Q.call(a);a.D7=null;a.C3=0;a.yr=null;}
function Bgk(a,b,c){var d=new PM();A3D(d,a,b,c);return d;}
function A3D(a,b,c,d){a.yr=b;a.D7=c;a.C3=d;Be(a);}
function A8H(a,b){return a.D7.p(b)&&a.C3^a.yr.bc.eL(b)?0:1;}
var Z6=D(CO);
var LG=D();
var BmK=null;function ACA(){ACA=N(LG);AD6();}
function Zv(b,c,d,e){var f;ACA();a:{b:{f=BmK;RT();if(f===BmL){if(Bil.bo()!=Bil.xb())break b;f=Bil;if(f.bl()!=Bil.EK())break b;}Bio.oK(b,c,d,e);break a;}Bio.oK(L$(b),Mb(c),L$(d),Mb(e));}}
function L$(b){ACA();return Cg(b,Bil.xb())/Bil.bo()|0;}
function Mb(b){ACA();return Cg(b,Bil.EK())/Bil.bl()|0;}
function AD6(){RT();BmK=BmL;}
var ZG=D(ES);
function Gf(a){var b=new ZG();ALi(b,a);return b;}
function I(){var a=new ZG();A$q(a);return a;}
function ALi(a,b){JT(a,b);}
function A$q(a){J6(a);}
function A34(a,b){Y4(a,b);return a;}
function ADJ(a,b){Lj(a,b);return a;}
function ANE(a,b){PH(a,b);return a;}
function A0S(a,b){ACg(a,b);return a;}
function AJF(a,b){TM(a,b);return a;}
function ADx(a,b){Nb(a,b);return a;}
function AGX(a,b,c,d){Oq(a,b,c,d);return a;}
function A7Z(a,b){ND(a,b);return a;}
function AWN(a,b){Th(a,b);return a;}
function AZ6(a,b,c){RN(a,b,c);return a;}
function A8k(a,b,c){Z5(a,b,c);return a;}
function A6N(a,b,c,d,e){Mp(a,b,c,d,e);return a;}
function A$Q(a,b,c){QI(a,b,c);return a;}
function A4E(a,b,c){OH(a,b,c);return a;}
function AN$(a,b,c){Ow(a,b,c);return a;}
function ASu(a,b,c){ACf(a,b,c);return a;}
function ARa(a,b){AB0(a,b);return a;}
function A2F(a,b,c){NW(a,b,c);return a;}
function A9V(a,b,c){return Xc(a,b,c);}
function A2L(a,b){ABM(a,b);}
function AH8(a,b,c,d,e){Yt(a,b,c,d,e);}
function A6U(a,b,c){return AA$(a,b,c);}
function A2x(a,b,c,d,e){return a.Lk(b,c,d,e);}
function AHA(a,b,c,d){return a.I5(b,c,d);}
function AWU(a){return M3(a);}
function AFL(a){return Nv(a);}
function ALQ(a,b){My(a,b);}
function ALZ(a,b,c){return a.Gr(b,c);}
function A31(a,b,c){return a.OS(b,c);}
function A3r(a,b,c){return a.KY(b,c);}
function A05(a,b,c){return a.P$(b,c);}
function AGi(a,b,c){return a.J_(b,c);}
function AT7(a,b,c){return a.GA(b,c);}
function QW(){var a=this;BB.call(a);a.og=null;a.py=null;}
function Lq(a,b){var c=new QW();ATl(c,a,b);return c;}
function ATl(a,b,c){CQ(a);a.og=b;a.py=c;}
function AEQ(a,b,c,d){var e;e=a.og.e(b,c,d);if(e<0)e=a.py.e(b,c,d);if(e>=0)return e;return (-1);}
function A5t(a,b){a.k=b;a.py.Q(b);a.og.Q(b);}
function A6a(a){return (((((I()).a(B(509))).dD(a.og)).a(B(510))).dD(a.py)).b();}
function AFT(a,b){return 1;}
function AFp(a,b){return 1;}
var ABQ=D(Bm);
function Baj(){var a=new ABQ();ATQ(a);return a;}
function ATQ(a){Cx(a);}
var O9=D();
function Bfj(){var a=new O9();ALK(a);return a;}
function ALK(a){J(a);}
var Gt=D(0);
var O8=D();
function Bbc(){var a=new O8();AXl(a);return a;}
function AXl(a){J(a);}
var Md=D(0);
function EU(){var a=this;C.call(a);a.hJ=null;a.hb=null;}
function BmM(a,b){var c=new EU();L6(c,a,b);return c;}
function L6(a,b,c){J(a);a.hJ=b;a.hb=c;}
function MR(){var a=this;EU.call(a);a.pD=null;a.yD=0;}
function Be$(a,b){var c=new MR();AO6(c,a,b);return c;}
function AO6(a,b,c){L6(a,b,c);a.yD=b.bp();}
function AE_(a){return a.hJ.bp();}
function ARX(a,b,c){return a.yD==b.bp()&&a.hJ.z(b)?1:0;}
var EZ=D(Cy);
function Beg(){var a=new EZ();A8O(a);return a;}
function A8O(a){Et(a,0);}
function ASg(a,b,c,d){if(d.Cv()!=1&&b!=d.J())return (-1);d.LV();d.u1(0,b);return b;}
function AXz(a){return B(511);}
function AAe(){var a=this;C.call(a);a.sl=null;a.iO=null;a.kk=null;a.ey=null;a.g$=null;a.lP=null;}
function BfL(a){var b=new AAe();A2X(b,a);return b;}
function A2X(a,b){J(a);a.sl=DG();a.iO=DG();a.kk=DG();a.ey=DG();a.g$=DG();a.lP=b;}
function A0y(a,b){(CD()).D8(1,(((I()).a(a.lP)).a(b)).b(),A_1(a,b));}
function A1O(a,b,c,d){var e,f;e=CD();f=(((I()).a(a.lP)).a(c)).b();H3();e.v4(b,f,Bj1,null,BbQ(a,d,c));}
function AVR(a,b,c,d,e,f){(CD()).v4(b,(((I()).a(a.lP)).a(c)).b(),d,e,BcJ(a,f,d,c));}
function A78(a,b,c){(CD()).kn((((I()).a(a.lP)).a(b)).b(),c);}
function AYK(a,b,c,d){a:{Bd2();switch(Bj4.data[BC(b)]){case 1:a.ey.x(c,d);break a;case 2:break;case 3:a.g$.x(c,d);break a;case 4:a.kk.x(c,d);break a;case 5:a.sl.x(c,null);break a;default:break a;}a.iO.x(c,d);}}
function AM7(a,b){var c,$$je;if(a.ey.c0(b)){a:{try{c=XC((a.ey.W(b)).x5(B(381)));}catch($$e){$$je=R($$e);if($$je instanceof GK){break a;}else{throw $$e;}}return c;}return null;}if(a.iO.c0(b))return XC(Cj(1));if(a.g$.c0(b))return PZ(a.g$.W(b));if(!a.kk.c0(b))return null;return XC(Cj(1));}
function AJx(a,b){var c,d;a:{if(!a.ey.c0(b)&&!a.iO.c0(b)&&!a.g$.c0(b)&&!a.kk.c0(b)){c=a.sl;if(!c.c0(b)){d=0;break a;}}d=1;}return d;}
function A61(a,b){return a.ey.c0(b);}
function AXf(a,b){var c,$$je;if(a.ey.c0(b)){a:{try{c=O(((a.ey.W(b)).x5(B(381))).data.length);}catch($$e){$$je=R($$e);if($$je instanceof GK){break a;}else{throw $$e;}}return c;}return O(((a.ey.W(b)).QQ()).data.length);}if(a.iO.c0(b))return O(1);if(a.g$.c0(b))return O(N8(a.g$.W(b)));if(!a.kk.c0(b))return Ba;return O(1);}
var TP=D(BJ);
function FG(a){var b=new TP();A3X(b,a);return b;}
function A3X(a,b){VR(a,b);a.bO=0;}
function A7L(a,b,c){return 0;}
function AZ0(a,b,c,d){var e,f,g,h,i;e=d.J();f=d.dI();while(true){g=B9(b,e);if(g>0)return (-1);if(g<0){h=c.f(b);if(BG(h)&&b>f){i=c.f(b-1|0);if(BY(i)){b=b+1|0;continue;}}}if(a.k.e(b,c,d)>=0)break;b=b+1|0;}return b;}
function AX3(a,b,c,d,e){var f,g,h,i;f=e.J();g=e.dI();while(true){if(c<b)return (-1);if(c<f){h=d.f(c);if(BG(h)&&c>g){i=d.f(c-1|0);if(BY(i)){c=c+(-1)|0;continue;}}}if(a.k.e(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AJ2(a){return B(512);}
function AVG(a,b){return 0;}
function J2(){BH.call(this);this.Ia=0;}
var BmN=Ba;function AGI(){AGI=N(J2);A8K();}
function A8K(){BmN=BR(B(513));}
function Vp(){var a=this;C.call(a);a.dv=null;a.gB=null;a.sv=0;a.bT=0;}
function T7(a,b){var c=new Vp();A9j(c,a,b);return c;}
function BmO(a,b,c){var d=new Vp();UE(d,a,b,c);return d;}
function A9j(a,b,c){UE(a,b,c,0);}
function UE(a,b,c,d){J(a);if(b===null)G(IJ());a.dv=b;a.gB=c;a.sv=d;a.bT=0;}
function A_E(a){var b,c;if(a.gB===null)G(IJ());a:{b=a.dv.i();if(a.bT<b){if(a.sv)return 1;c=a.bT;while(true){if(c>=b)break a;if(a.gB.eH(a.dv.f(c),0)==(-1))return 1;c=c+1|0;}}}return 0;}
function AFa(a){var b,c,d,e,f;if(a.gB===null)G(IJ());b=a.bT;c=a.dv.i();if(b<c){if(a.sv){if(a.gB.eH(a.dv.f(a.bT),0)>=0){d=a.dv;e=a.bT;a.bT=e+1|0;return Zp(d.f(e));}a.bT=a.bT+1|0;while(a.bT<c){if(a.gB.eH(a.dv.f(a.bT),0)>=0)return a.dv.ce(b,a.bT);a.bT=a.bT+1|0;}return a.dv.ei(b);}while(true){f=B9(b,c);if(f>=0)break;if(a.gB.eH(a.dv.f(b),0)<0)break;b=b+1|0;}a.bT=b;if(f<0){a.bT=a.bT+1|0;while(a.bT<c){if(a.gB.eH(a.dv.f(a.bT),0)>=0)return a.dv.ce(b,a.bT);a.bT=a.bT+1|0;}return a.dv.ei(b);}}G(Bay());}
function J_(){var a=this;C.call(a);a.dg=null;a.cQ=0;a.m5=Ba;}
function A0Y(a){var b=new J_();A3V(b,a);return b;}
function A3V(a,b){var c,d,e,f;c=b.data;J(a);a.m5=O(-1);d=c.length;if(!d)G(W(B(514)));e=Y(Fc,d);f=0;while(f<d){e.data[f]=c[f];f=f+1|0;}a.dg=e;a.cQ=V7(a);}
function DZ(a,b){var c,d;c=CU(a);d=0;while(d<c){if((CB(a,d)).fn==b)return CB(a,d);d=d+1|0;}return null;}
function V7(a){var b,c,d;b=0;c=0;while(c<a.dg.data.length){d=a.dg.data[c];d.cU=b;b=b+QD(d)|0;c=c+1|0;}return b;}
function CU(a){return a.dg.data.length;}
function CB(a,b){return a.dg.data[b];}
function NV(a,b){var c,d;if(b===a)return 1;if(!(b instanceof J_))return 0;c=b;if(a.dg.data.length!=c.dg.data.length)return 0;d=0;while(d<a.dg.data.length){if(!KH(a.dg.data[d],c.dg.data[d]))return 0;d=d+1|0;}return 1;}
function IM(a){var b,c;if(Z(a.m5,O(-1))){b=Ba;c=0;while(c<a.dg.data.length){b=BQ(b,O(a.dg.data[c].fn));c=c+1|0;}a.m5=b;}return a.m5;}
function NQ(a){return BQ(IM(a),D8(O(a.dg.data.length),32));}
function KB(){var a=this;G5.call(a);a.N1=0.0;a.NZ=0.0;a.OX=0;a.MP=0;}
function ACM(){var a=this;C.call(a);a.kO=null;a.sN=null;a.fq=null;a.ou=null;a.rH=0;a.DO=null;a.v2=null;}
function BmP(a,b,c){var d=new ACM();TR(d,a,b,c);return d;}
function Bfc(){var a=new ACM();A$G(a);return a;}
function TR(a,b,c,d){J(a);a.sN=BdK();a.fq=Bp();if(d===null)d=A_3();a.v2=d;a.rH=b!==null?0:1;if(b===null)b=BdG(BcA(1,1));a.ou=b;if(c===null)c=Bfa();a.DO=c;}
function A$G(a){TR(a,null,null,null);}
function A4l(a,b){if(a.kO!==null)G(U(B(515)));a.kO=b;if(a.rH)a.ou.g6();}
function A1I(a){var b,c,d;a.v2.Hp(a.kO,a.fq);b=null;c=0;while(c<a.fq.h){d=a.fq.l(c);if(b!==d.kP){if(b!==null)b.bd();b=d.kP;b.C9(a.kO,a.ou);}b.NX(d);c=c+1|0;}if(b!==null)b.bd();a.sN.eo();a.fq.K();}
function A7H(a){a.eo();if(a.rH)a.ou.bd();a.kO=null;}
function ARs(a,b,c){var d,e;d=a.fq.h;b.IA(a.fq,a.sN);while(d<a.fq.h){e=a.fq.l(d);e.cw=c;e.kP=a.DO.J1(e);d=d+1|0;}}
var Re=D(ER);
function A_V(a,b,c,d,e,f){var g=new Re();AVs(g,a,b,c,d,e,f);return g;}
function AVs(a,b,c,d,e,f,g){LP(a,b,c,d,e,f,g);}
function AUP(a,b){var c,d,e,f;c=a.cx.A.data;d=a.cj;e=b*4|0;f=c[d+e|0]&255|(a.cx.A.data[(a.cj+e|0)+1|0]&255)<<8|(a.cx.A.data[(a.cj+e|0)+2|0]&255)<<16|(a.cx.A.data[(a.cj+e|0)+3|0]&255)<<24;return $rt_intBitsToFloat(f);}
function A2R(a,b,c){var d,e,f,g;d=$rt_floatToIntBits(c);e=a.cx.A.data;f=a.cj;g=b*4|0;e[f+g|0]=d<<24>>24;a.cx.A.data[(a.cj+g|0)+1|0]=d>>8<<24>>24;a.cx.A.data[(a.cj+g|0)+2|0]=d>>16<<24>>24;a.cx.A.data[(a.cj+g|0)+3|0]=d>>24<<24>>24;}
function VO(){var a=this;C.call(a);a.CR=null;a.eY=null;a.uP=null;a.kX=null;a.uX=0.0;a.rB=Ba;a.s0=Ba;a.oT=0.0;a.kJ=0.0;a.pl=0;a.gf=null;}
function BaB(a){var b=new VO();AUD(b,a);return b;}
function AUD(a,b){var c;J(a);a.uX=0.0;a.rB=Ea();a.s0=O(-1);a.oT=0.0;a.kJ=0.0;c=El();a.uP=b;a.eY=c.ET();a.CR=c.Og(b);a.gf=c.Md();a.kX=BdT(a.CR);a.kX.oK(0,0,a.eY.width,a.eY.height);a.kX.v_(0.0,0.0,0.0,1.0);a.kX.EE(16384);if(!(b.qY<0&&b.qC<0))a.wF(b.qY,b.qC);}
function AUh(a){var b;b=Ea();a.oT=Ry(D6(b,a.rB))/1000.0;a.rB=b;a.kJ=a.kJ+a.oT;a.pl=a.pl+1|0;if(a.kJ>1.0){a.uX=a.pl;a.kJ=0.0;a.pl=0;}}
function ASL(a){return a.kX;}
function AL_(a){return a.eY.width;}
function AQZ(a){return a.eY.height;}
function A5Q(a){return a.eY.width;}
function A49(a){return a.eY.height;}
function A_f(a){return a.oT;}
function AU8(a){return a.uX|0;}
function AWl(a){var b;b=!a.uP.Be?1.0:a.gf.wG();return Bcm(a,a.gf.Gh()*b|0,a.gf.QF()*b|0,60,8);}
function AHg(a,b){var c;c=a.FC();if(b.o1!=c.o1&&b.n0!=c.n0)return 0;return a.gf.QK(a,a.eY,b.o1,b.n0);}
function ALy(a,b,c){var d,e,f;if(a.vQ())a.gf.PZ();if(b>0&&c>0)a.x9(b,c);else{d=(El()).hu();e=d.Q4();f=d.Lh();a.x9(e,f);}return 1;}
function AFO(a,b,c){var d,e,f;d=!a.uP.Be?1.0:a.gf.wG();e=a.eY;f=b*d|0;e.width=f;e=a.eY;f=c*d|0;e.height=f;}
function AEe(a,b){return 0;}
function A3c(a){return a.gf.NH();}
var Yu=D(FL);
function BmQ(a){var b=new Yu();AGp(b,a);return b;}
function AGp(a,b){KF(a,b);}
var TC=D(T);
function BfG(){var a=new TC();AFd(a);return a;}
function AFd(a){Bo(a);}
function AH$(a){return (CS()).bF(0,127);}
function EI(){var a=this;C.call(a);a.cn=null;a.pI=0.0;a.nA=0.0;}
var BmR=null;var BmS=null;var BmT=null;function DI(){DI=N(EI);AYL();}
function BmU(){var a=new EI();ACj(a);return a;}
function BmV(a,b){var c=new EI();PJ(c,a,b);return c;}
function BmW(a,b,c,d,e,f){var g=new EI();S$(g,a,b,c,d,e,f);return g;}
function BmX(a,b,c,d,e,f,g,h,i){var j=new EI();AA4(j,a,b,c,d,e,f,g,h,i);return j;}
function ACj(a){DI();J(a);a.cn=DL(1);}
function PJ(a,b,c){DI();J(a);a.cn=DL(1);a.Mz(b,c);}
function S$(a,b,c,d,e,f,g){DI();J(a);a.cn=DL(1);a.O5(b,c,d,e,f,g);}
function AA4(a,b,c,d,e,f,g,h,i,j){DI();J(a);a.cn=DL(1);a.pJ(b,c,d,e,f,g,h,i,j);}
function A7G(a,b,c){a.pJ(b,c,0,c.i(),b.yO(),0.0,8,0,null);}
function A3B(a,b,c,d,e,f,g){a.pJ(b,c,0,c.i(),d,e,f,g,null);}
function AG4(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by;k=a.cn;DI();BmR.Eg(k);k.K();l=b.kh;if(d==e){a.pI=0.0;a.nA=l.e6;return;}if(j!==null)i=1;else if(g<=l.vu*3.0)i=0;m=l.Du;if(m){n=1;o=BmT.h;while(n<o){BmS.jr(BmT.l(n));n=n+1|0;}BmT.K();BmT.F(f);}p=0.0;q=0.0;r=l.kj;s=null;t=d;u=f;a:{b:while(true){c:{v=(-1);w=0;if(d==e){if(t==e)break b;v=e;}else{x=d+1|0;switch(c.f(d)){case 10:v=x-1|0;w=1;d=x;break c;case 91:if(!m){d=x;break c;}y
=Pz(a,c,x,e,BmS);if(y<0){if(y==(-2)){d=x+1|0;continue b;}d=x;break c;}v=x-1|0;d=x+(y+1|0)|0;f=BmT.qs();break c;default:}d=x;}}if(v!=(-1)){d:{z=B9(v,t);if(z){ba=BmR.eT();ba.j2.eR(u);l.FP(ba,c,t,v,s);if(!ba.bi.h)BmR.jr(ba);else{if(s!==null)p=p-(s.op?s.gz*l.eQ:(s.cv+s.dr|0)*l.eQ-l.hU);s=ba.bi.qs();ba.dh=p;ba.iL=q;if(!(!w&&v!=e))EP(a,l,ba);k.F(ba);o=ba.bn.Z;bb=ba.bn.R;if(i&&o){bc=bb.data;p=p+bc[0]+bc[1];n=2;while(n<o){bd=ba.bi;be=n-1|0;bf=bd.l(be);bg=(bf.cv+bf.dr|0)*l.eQ-l.hU;if(p+bg-9.999999747378752E-5<=g)p=p
+bb.data[n];else{if(j!==null){ABp(a,l,ba,g,j,n,BmR);break a;}q=q+r;s=null;bh=l.KP(ba.bi,n);if(!(!bh&&ba.dh===0.0)&&bh<ba.bi.h)be=bh;if(be){ba=QP(a,l,ba,be,n);if(ba===null){p=0.0;break d;}k.F(ba);}else{bi=ba.bi.h;e:{while(true){if(be>=bi)break e;if(!l.jt((ba.bi.l(be)).e0&65535))break;be=be+1|0;}}if(be>0){ba.bi.lX(0,be-1|0);ba.bn.lX(1,be);}bb.data[0]=( -(ba.bi.Fr()).dr|0)*l.eQ-l.i0;if(k.h>1){bj=k.l(k.h-2|0);bk=bj.bi.h-1|0;f:{while(true){if(bk<=0)break f;if(!l.jt((bj.bi.l(bk)).e0&65535))break;bk=bk+(-1)|0;}}bj.bi.h6(bk
+1|0);bj.bn.h6(bk+2|0);EP(a,l,bj);}}o=ba.bn.Z;bb=ba.bn.R;bc=bb.data;p=bc[0];if(o>1)p=p+bc[1];ba.dh=0.0;ba.iL=q;n=1;}n=n+1|0;}}else if(m){n=0;while(n<o){p=p+bb.data[n];n=n+1|0;}}}}}if(w){p=0.0;q=z?q+r:q+r*l.xo;s=null;}t=d;u=f;}}}a.nA=l.e6+CH(q);bl=0.0;bm=k.P;bn=k.h;n=0;while(n<bn){bo=bm.data[n];bb=bo.bn.R;bc=bb.data;bp=bc[0];bq=0.0;br=bo.bi.P;bs=0;bt=bo.bi.h;while(bs<bt){bf=br.data[bs];bg=(bf.cv+bf.dr|0)*l.eQ-l.hU;bq=Ei(bq,bp+bg);bs=bs+1|0;bp=bp+bc[bs];}bo.j7=Ei(bp,bq);bl=Ei(bl,bo.dh+bo.j7);n=n+1|0;}g:{a.pI=
bl;if(!(h&8)){bu=!(h&1)?0:1;bv=0.0;bw=(-2.147483648E9);bx=0;n=0;while(n<bn){bc=bm.data;bo=bc[n];if(bo.iL===bw)bv=Ei(bv,bo.dh+bo.j7);else{bw=bo.iL;by=g-bv;if(bu)by=by/2.0;while(bx<n){x=bx+1|0;bd=bc[bx];bd.dh=bd.dh+by;bx=x;}bv=bo.dh+bo.j7;}n=n+1|0;}by=g-bv;if(bu)by=by/2.0;while(true){if(bx>=bn)break g;bc=bm.data;x=bx+1|0;bd=bc[bx];bd.dh=bd.dh+by;bx=x;}}}}
function ABp(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=g.eT();b.FP(h,e,0,e.i(),null);i=0.0;if(h.bn.Z>0){EP(a,b,h);j=h.bn.R;k=1;l=h.bn.Z;while(k<l){i=i+j.data[k];k=k+1|0;}}m=d-i;n=0;o=c.dh;j=c.bn.R;a:{while(true){if(n>=c.bn.Z)break a;p=j.data[n];o=o+p;if(o>m)break;n=n+1|0;}}if(n<=1){c.bi.K();c.bn.K();c.bn.GN(h.bn);}else{c.bi.h6(n-1|0);c.bn.h6(n);EP(a,b,c);if(h.bn.Z>0)c.bn.x0(h.bn,1,h.bn.Z-1|0);}c.bi.qA(h.bi);g.jr(h);}
function QP(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=c.bi;g=c.bi.h;h=c.bn;i=d;a:{while(true){if(i<=0)break a;if(!b.jt((f.l(i-1|0)).e0&65535))break;i=i+(-1)|0;}}b:{while(true){j=B9(d,g);if(j>=0)break b;if(!b.jt((f.l(d)).e0&65535))break;d=d+1|0;}}k=null;if(j>=0){f.h6(i);h.h6(i+1|0);}else{DI();k=BmR.eT();k.j2.eR(c.j2);l=k.bi;l.JA(f,0,i);f.lX(0,d-1|0);c.bi=l;k.bi=f;m=k.bn;m.x0(h,0,i+1|0);h.lX(1,d);h.R.data[0]=( -(f.Fr()).dr|0)*b.eQ-b.i0;c.bn=m;k.bn=h;}if(i)EP(a,b,c);else{DI();BmR.jr(c);a.cn.vs();}return k;}
function EP(a,b,c){var d,e;d=c.bi.qs();if(d.op)return;e=(d.cv+d.dr|0)*b.eQ-b.hU;c.bn.R.data[c.bn.Z-1|0]=e;}
function Pz(a,b,c,d,e){var f,g,h,i,j,k,l,m;if(c==d)return (-1);switch(b.f(c)){case 35:f=0;g=c+1|0;a:{while(true){if(g>=d)break a;h=b.f(g);if(h==93)break;if(h>=48&&h<=57)f=(f*16|0)+(h-48|0)|0;else if(h>=97&&h<=102)f=(f*16|0)+(h-87|0)|0;else{if(h<65)break a;if(h>70)break a;f=(f*16|0)+(h-55|0)|0;}g=g+1|0;}if(g>=(c+2|0)&&g<=(c+9|0)){i=g-c|0;if(i<=7){j=0;k=9-i|0;while(j<k){f=f<<4;j=j+1|0;}f=f|255;}l=e.eT();DI();BmT.F(l);Id(l,f);return i;}}return (-1);case 91:break;case 93:DI();if(BmT.h>1)e.jr(BmT.vs());return 0;default:g
=c+1|0;while(g<d){h=b.f(g);if(h==93){m=Qf((b.d_(c,g)).b());if(m===null)return (-1);l=e.eT();DI();BmT.F(l);l.eR(m);return g-c|0;}g=g+1|0;}return (-1);}return (-2);}
function A8C(a){(Go(F(Hh))).Eg(a.cn);a.cn.K();a.pI=0.0;a.nA=0.0;}
function AOa(a){var b,c,d;if(!a.cn.h)return B(101);b=Gf(128);b.cD(a.pI);b.U(120);b.cD(a.nA);b.U(10);c=0;d=a.cn.h;while(c<d){b.a((a.cn.l(c)).b());b.U(10);c=c+1|0;}b.uy(b.i()-1|0);return b.b();}
function AYL(){BmR=Go(F(Hh));BmS=Go(F(Bi));BmT=DL(4);}
var ABY=D(Ej);
function AJ9(a){var b=new ABY();AEX(b,a);return b;}
function AEX(a,b){M6(a,NE(b));}
function Pt(){var a=this;EO.call(a);a.uO=null;a.u_=null;a.FD=null;a.c8=null;a.B2=null;a.en=null;a.pU=0;a.u7=0;}
function BmY(a,b){var c=new Pt();QA(c,a,b);return c;}
function BdI(a){var b=new Pt();ADu(b,a);return b;}
function BmZ(a,b){var c=new Pt();AAG(c,a,b);return c;}
function QA(a,b,c){var d,e;d=c.lL();Di();e=BgV;e=Oc(d,e);d=BgV;e=Le(e,d);AAG(a,b,e);}
function ADu(a,b){Hw();QA(a,b,Bkm);}
function AAG(a,b,c){Lh(a);a.FD=Cj(8192);a.c8=Ht(a.FD);a.B2=BW(1024);a.en=La(a.B2);a.uO=b;a.u_=c;a.en.oP(BD(a.en));a.c8.f4(BD(a.c8));}
function A8z(a){a.uO.fP();}
function AKo(a,b,c,d){var e,f;if(a.u7&&!Cb(a.en))return (-1);e=0;a:{while(d>0){f=Bq(d,Bb(a.en));a.en.rk(b,c+e|0,f);d=d-f|0;e=e+f|0;if(!Cb(a.en)&&!ACk(a))break a;}}return e;}
function ACk(a){if(a.u7)return 0;a.en.JO();a:{while(true){if(!Cb(a.c8)&&!AAL(a))break a;if(!(IX(a.u_,a.c8,a.en,a.pU)).h5())continue;else break;}}if(!Cb(a.c8)&&a.pU&&(KV(a.u_,a.en)).jK())a.u7=1;K$(a.en);return 1;}
function AAL(a){var b;if(a.pU)return 0;a.c8.QD();a:{while(true){if(!Cb(a.c8))break a;b=a.uO.rv(HH(a.c8),B8(a.c8),Bb(a.c8));if(b==(-1)){a.pU=1;break a;}a.c8.f4(B8(a.c8)+b|0);if(!b)break;}}Jv(a.c8);return 1;}
var Fa=D(Bx);
var BmL=null;var Bm0=null;var Bm1=null;function RT(){RT=N(Fa);AFo();}
function A12(a,b){var c=new Fa();Q5(c,a,b);return c;}
function Q5(a,b,c){RT();Cw(a,b,c);}
function AFo(){BmL=A12(B(516),0);Bm0=A12(B(517),1);Bm1=H(Fa,[BmL,Bm0]);}
var Y1=D();
function AS3(b,c,d){if(b===null)return null;return Beo(b,APA(b),c,d);}
function V1(){var a=this;C.call(a);a.pX=0;a.E7=0;a.Cz=0;a.Ds=0;a.lK=null;}
function Bdt(a){var b=new V1();AOT(b,a);return b;}
function AOT(a,b){a.lK=b;J(a);a.E7=a.lK.gR;a.Cz=a.lK.df();a.Ds=(-1);}
function A4q(a){return a.pX>=a.Cz?0:1;}
function A8W(a){var b,c;P_(a);a.Ds=a.pX;b=a.lK;c=a.pX;a.pX=c+1|0;return b.l(c);}
function P_(a){if(a.E7>=a.lK.gR)return;G(Baj());}
function L1(){var a=this;C.call(a);a.gn=null;a.o0=0;a.uY=0;a.nj=null;a.pi=null;a.oS=null;a.hq=null;a.fI=null;a.d9=null;a.fT=null;a.dm=null;}
function AGm(){var a=new L1();A$Z(a);return a;}
function A$Z(a){J(a);a.o0=1;a.nj=S();a.pi=AAM(0.0,0.0,0.0,1.0);a.oS=Cl(1.0,1.0,1.0);a.hq=BL();a.fI=BL();a.d9=DL(2);a.dm=DL(2);}
function A8L(a){if(!a.uY)a.hq.Gm(a.nj,a.pi,a.oS);return a.hq;}
function APY(a){if(a.o0&&a.fT!==null)(a.fI.ch(a.fT.fI)).hC(a.hq);else a.fI.ch(a.hq);return a.fI;}
function AFK(a,b){var c,d;a:{a.PO();a.OC();if(b){c=a.dm.bZ();while(true){if(!c.bC())break a;d=c.bz();d.Dh(1);}}}}
function A63(a,b){var c,d,e,f,g;c=a.d9.bZ();while(c.bC()){d=c.bz();if(d.cJ===null)continue;if(d.dz===null)continue;if(d.cJ.cb!=d.dz.data.length)continue;e=d.cJ.cb;f=0;while(f<e){(d.dz.data[f].ch(d.cJ.eq.data[f].fI)).hC(d.cJ.gL.data[f]);f=f+1|0;}}a:{if(b){c=a.dm.bZ();while(true){if(!c.bC())break a;g=c.bz();g.y2(1);}}}}
function AUB(a){if(a.fT!==null){a.fT.FG(a);a.fT=null;}}
function A6z(a){return a.dm.h;}
function AL5(a,b){return a.dm.l(b);}
function AEt(a,b){return a.Na((-1),b);}
function AOV(a,b,c){var d;d=a;while(true){if(d===null){d=c.xm();if(d!==null&&!d.FG(c))G(U(B(518)));if(b>=0&&b<a.dm.h)a.dm.Le(b,c);else{b=a.dm.h;a.dm.F(c);}c.fT=a;return b;}if(d===c)break;d=d.xm();}G(U(B(519)));}
function A17(a,b){if(!a.dm.Lx(b,1))return 0;b.fT=null;return 1;}
function A3t(a){return a.dm;}
function A9I(a){return a.fT;}
function AZO(a){return (AGm()).MR(a);}
function A7b(a,b){var c,d,e;a.F9();a.gn=b.gn;a.uY=b.uY;a.o0=b.o0;a.nj.M(b.nj);a.pi.Pj(b.pi);a.oS.M(b.oS);a.hq.ch(b.hq);a.fI.ch(b.fI);a.d9.K();c=b.d9.bZ();while(c.bC()){d=c.bz();a.d9.F(d.ME());}a.dm.K();c=(b.rD()).ft();while(c.bC()){e=c.bz();a.Ie(e.u9());}return a;}
function ZN(b,c,d,e){var f,g,h,i;a:{f=b.h;if(!e){g=0;while(true){if(g>=f)break a;h=b.l(g);if(h.gn.z(c))break;g=g+1|0;}return h;}g=0;while(true){if(g>=f)break a;i=b.l(g);if(i.gn.Gs(c))break;g=g+1|0;}return i;}b:{if(d){g=0;while(true){if(g>=f)break b;i=ZN((b.l(g)).dm,c,1,e);if(i!==null)break;g=g+1|0;}return i;}}return null;}
var LO=D(0);
function Hx(){var a=this;C.call(a);a.A4=0;a.f$=null;a.D9=null;a.qB=null;a.k6=null;a.l9=null;a.A3=null;a.kw=null;a.jz=null;a.lQ=null;a.mj=null;a.s5=null;a.EQ=null;a.xN=null;a.ya=null;a.ob=null;a.Fv=null;a.qu=Ba;a.kV=Ba;a.tQ=0;a.kb=0;a.J5=null;a.lE=null;a.q_=0;a.pz=null;}
var Bm2=null;var Bm3=null;function Ba9(){Ba9=N(Hx);AYZ();}
function BfD(){var a=new Hx();VG(a);return a;}
function VG(a){Ba9();J(a);a.k6=Bp();a.l9=Bp();a.tQ=1;a.kb=0;a.J5=BL();a.q_=500;a.pz=S();}
function AZI(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;XV();a.A4=Bullet.MyClassHelper.prototype.getBTVersion();a.s5=BbK();a.EQ=Ba3(a.s5);a.xN=BbP();a.ya=Bb6();a.mj=Bad(a.EQ,a.xN,a.ya,a.s5);b=Cl(0.0,(-10.0),0.0);a.mj.HJ(b);a.f$=Bc7();a.D9=Bcp(a.f$);a.qB=Baa();a.kw=Bfc();a.lQ=Bdl();c=a.lQ;d=new CY;Ce();NF(d,BmC,0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);Ep(c,d);e=(AJI()).xO(1.0,1.0,1.0,(-1.0),(-1.0),(-0.4000000059604645));a.lQ.GE(e);a.jz=Bdg();a.f$.cq.q=43.0;a.f$.cq.o=2.0;a.f$.M4(0.0,0.0,0.0);f
=Bct();g=1.0;h=1.0;i=1.0;j=1.0;k=Bes(Bin.Fq(B(520)));P6();k.OU(BlE,BlE);l=new F4;m=H(BH,[Z2(k),N9(4.0)]);NG(l,m);a.Fv=f.Cp(1.0,1.0,1.0,l,O(25));n=60.0;o=0.30000001192092896;p=60.0;q=f.Cp(n,o,p,BdX(H(BH,[KY(g,h,i,j),Zx(g,h,i,j),N9(16.0)])),O(9));a.A3=a.v3(B(521),0,0.0,0.0,(-2.0),0.0,0.0,0.0,0.0,q,n,o,p,0.0,0.0,1.0);a.Fu();a.ob=BbG();a.ob.Gu(1.0,0.0,0.0,1.0);a.kV=Ea();a.lE=BaQ(a.f$);a.lE.oX=0;a.lE.q2=0;a.lE.uS=0;Bh7.J2(Bfx(H(Fp,[a,a.lE])));}
function A8q(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r,s,t,u,v,w;r=BfQ(k);s=KY(o,p,q,1.0);Ep(r.jE.l(0),s);r.eC.LK(e,f,g);t=r.eC;H1();t.vt(Bm4,h);r.eC.vt(Bm5,i);r.eC.vt(Bm6,j);u=Bas(r.eC);v=Bfz(a.pz.I(l/2.0,m/2.0,n/2.0));v.NG(d,a.pz.L1());w=Bf$(d,u,v,a.pz);if(c)a.l9.F(w);w.J7(0.699999988079071);a.mj.Ix(w);return r;}
function A0e(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=0;while(b<a.l9.h){c=a.l9.l(b);a.mj.G_(c);c.iz();b=b+1|0;}a.l9.K();a.k6.K();d=0;b=0;while(b<a.q_){e=HE((-5.0),5.0);f=HE(19.0,24.0);g=HE((-5.0),5.0);h=IK(0,360);i=IK(0,360);j=IK(0,360);k=1.0;l=1.0;m=1.0;n=a.v3((((I()).a(B(522))).j(d)).b(),1,0.4000000059604645,e,f,g,h,i,j,a.Fv,1.0,1.0,1.0,k,l,m);d=d+1|0;a.k6.F(n);b=b+1|0;}}
function AC8(a){var b,c,d,e,f,g,h;a.f$.f6();Bio.v_(0.8999999761581421,0.8999999761581421,0.8999999761581421,1.0);Bio.EE(16640);if(!a.kb){a.qu=Ea();if(Hq(D6(a.qu,a.kV),O(8000))){a.tQ=a.tQ?0:1;a.Fu();a.kV=Ea();}a.mj.IN(Bil.Fe());}a.kw.HM(a.f$);b=0;while(b<a.k6.h){c=a.k6.l(b);a.kw.C2(c,a.lQ);b=b+1|0;}a.kw.C2(a.A3,a.lQ);a.kw.bd();a.jz.g6();d=a.ob;e=a.jz;f=((((((((I()).a(B(523))).j(Bil.Nm())).a(B(524))).j(a.q_)).a(B(525))).j(a.A4)).a(B(526))).b();g=Bil;h=g.bl()-14|0;d.yi(e,f,30.0,h);a.ob.yi(a.jz,B(527),20.0,30.0);a.jz.bd();}
function A8A(a,b,c){var d;a.D9.wJ(b,c,0);a.qB.wJ(b,c,1);d=a.qB.NT();d.f6();a.jz.PJ(d.eK);}
function AOe(a,b){if(b==62){a.kb=a.kb?0:1;if(!a.kb)a.kV=CA(Ea(),D6(a.kV,a.qu));}else if(b==66){if(!Bil.vQ())Bil.Mm(Bil.FC());else Bil.wF(0,0);}return 0;}
function A4C(a,b){return 0;}
function AW9(a,b){return 0;}
function A77(a,b,c,d,e){return 0;}
function A1T(a,b,c,d,e){return 0;}
function APs(a,b,c,d){return 0;}
function AXM(a,b,c){return 0;}
function AMS(a,b,c){return 0;}
function AYZ(){Bm2=S();Bm3=S();}
function VK(){var a=this;E8.call(a);a.ul=0;a.pd=0;}
function Bfe(a,b){var c=new VK();AKJ(c,a,b);return c;}
function AKJ(a,b,c){Mh(a);a.ul=b;a.pd=c;}
function A0H(a){return a.ul;}
function A9a(a){return a.pd;}
function A4M(a){return ((((((I()).a(B(528))).j(a.ul)).a(B(23))).a(a.pd==2147483647?B(101):(ABN(a.pd)).b())).a(B(529))).b();}
var W6=D(V);
function BfX(){var a=new W6();AJs(a);return a;}
function AJs(a){BM(a);}
function ATp(a,b,c,d,e){var f,g,h,i;f=b.cY.d6;B2();g=Bm7;h=(BA(e,g)).d3;i=f.gE(h);DU(b,c,i);}
var W3=D(V);
function Be_(){var a=new W3();A81(a);return a;}
function A81(a){BM(a);}
function AYj(a,b,c,d,e){var f;B2();f=BA(e,Bm7);DQ(b,c,f.eP,f.eO,f.fa,f.fb);}
function VF(){Q.call(this);this.Od=null;}
function Bdr(a){var b=new VF();AQR(b,a);return b;}
function AQR(a,b){a.Od=b;Be(a);}
function AWB(a,b){return Vs(b);}
var W_=D(V);
function Bby(){var a=new W_();AK8(a);return a;}
function AK8(a){BM(a);}
function A$B(a,b,c,d,e){var f;B2();f=BA(e,Bm8);DQ(b,c,f.eP,f.eO,f.fa,f.fb);}
var W7=D(V);
function BbU(){var a=new W7();AVf(a);return a;}
function AVf(a){BM(a);}
function AN6(a,b,c,d,e){var f,g,h,i;f=b.cY.d6;B2();g=Bm9;h=(BA(e,g)).d3;i=f.gE(h);DU(b,c,i);}
var W5=D(V);
function Ba7(){var a=new W5();A73(a);return a;}
function A73(a){BM(a);}
function A28(a,b,c,d,e){Ce();Fv(b,c,(BA(e,BmB)).dX);}
var W$=D(V);
function BbB(){var a=new W$();AXm(a);return a;}
function AXm(a){BM(a);}
function APM(a,b,c,d,e){var f,g,h,i;f=b.cY.d6;B2();g=Bm8;h=(BA(e,g)).d3;i=f.gE(h);DU(b,c,i);}
function Tb(){C.call(this);this.ui=0;}
function Bep(){var a=new Tb();A4a(a);return a;}
function A4a(a){J(a);a.ui=0;}
function AZf(a,b){var c;c=b.I8();Po(a,c);}
function Q$(a,b){b.kn(B(530),Bf7(a));}
function Po(a,b){b.kn(B(531),Ba0(a,b));if(a.ui)b.NC(1,B(532),A__(a));}
function A9H(b){A5S(BP(b,"onBulletPhysicsLoaded"));}
function AFc(b,c){Q$(b,c);}
function AVt(b,c){ANi(b,BP(c,"onBulletPhysicsLoaded"));}
function A5S(b){(BulletLib()).then(function(BulletLib){window.Bullet=BulletLib;b();});}
function ANi(b,c){(BulletLib({wasmBinary:b,async:false})).then(function(BulletLib){window.Bullet=BulletLib;c();});}
var Sl=D();
function BcD(){var a=new Sl();AU1(a);return a;}
function AU1(a){J(a);}
function A9i(a,b){if(b<=0)G(CL());return a.xK()*b|0;}
function AE$(a){return a.xK();}
function AZS(a){return Math.random();}
var Nq=D(0);
var Lc=D(GT);
var Bm$=null;function AGH(){AGH=N(Lc);A$E();}
function Bb6(){var a=new Lc();Sa(a);return a;}
function A_U(a){var b=new Lc();ACn(b,a);return b;}
function Sa(a){AGH();Iw(a);a.dZ(AAA(),1);}
function ACn(a,b){AGH();Iw(a);}
function A$E(){Bm$=A_U(0);}
function AAA(){var jsObj=new Bullet.btSequentialImpulseConstraintSolver();return Bullet.getPointer(jsObj);}
var XK=D();
var St=D(Da);
function Bb9(a){var b=new St();A2M(b,a);return b;}
function A2M(a,b){GD(a,b,0.3333333432674408,0.5);}
function A9_(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(h.dO(2))break a;Bj();i=BgY;break a;}n=k+1|0;o=j[k];if(!ED(a,o)){c=n+(-2)|0;i=BV(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|o&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(h.dO(3))break a;Bj();i=BgY;break a;}n=k+1|0;o=j[k];k=n+1|0;p=j[n];if(!ED(a,o))break b;if(!ED(a,p))break b;q
=((l&15)<<12|(o&63)<<6|p&63)&65535;if(Jz(q)){c=k+(-3)|0;i=BV(3);break a;}j=e.data;m=f+1|0;j[f]=q;}else{if((l&248)!=240){c=k+(-1)|0;i=BV(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(h.dO(4))break a;Bj();i=BgY;break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.ef(2))break a;Bj();i=BgX;break a;}n=k+1|0;o=j[k];m=n+1|0;p=j[n];k=m+1|0;r=j[m];if(!ED(a,o))break c;if(!ED(a,p))break c;if(!ED(a,r))break c;j=e.data;s=(l&7)<<18|(o&63)<<12|(p&63)<<6|r&63;n=f+1|0;j[f]=FB(s);m=n+1|0;j[n]=Fi(s);}c=k;f=m;}break a;}c=k+(-3)|0;i=BV(1);break a;}c
=k+(-3)|0;i=BV(1);}h.el(c);h.dR(f);return i;}
function ED(a,b){return (b&192)!=128?0:1;}
function ABa(){var a=this;C.call(a);a.CF=null;a.e4=null;}
function Bfm(a,b){var c=new ABa();ADQ(c,a,b);return c;}
function ADQ(a,b,c){J(a);a.e4=c;a.CF=b;}
function Wr(a){return a.CF;}
function N8(a){return a.e4.length;}
function Rj(a,b){return a.e4[b];}
function PZ(a){return Bgq(a);}
function SD(a){var b,c,d,e,f,g;b=a.e4.length;c=B(533);d=Gf(((b*4|0)/3|0)+2|0);e=0;while(e<b){f=b-e|0;if(f>=3){g=(((a.e4[e]&255)<<16)+((a.e4[e+1|0]&255)<<8)|0)+(a.e4[e+2|0]&255)|0;d.U(c.f(g>>18&63));d.U(c.f(g>>12&63));d.U(c.f(g>>6&63));d.U(c.f(g&63));}else if(f<2){g=(a.e4[e]&255)<<16;d.U(c.f(g>>18&63));d.U(c.f(g>>12&63));d.a(B(534));}else{g=((a.e4[e]&255)<<16)+((a.e4[e+1|0]&255)<<8)|0;d.U(c.f(g>>18&63));d.U(c.f(g>>12&63));d.U(c.f(g>>6&63));d.a(B(535));}e=e+3|0;}return d.b();}
var AC2=D(CG);
function Bcc(a,b,c){var d=new AC2();APD(d,a,b,c);return d;}
function APD(a,b,c,d){E4(a,b,c,d);}
function AEn(a,b,c,d){var e;a:{while(true){if((b+a.bv.cg()|0)>d.J())break a;e=a.bv.bH(b,c);if(e<1)break;b=b+e|0;}}return a.k.e(b,c,d);}
function AAQ(){var a=this;C.call(a);a.rO=null;a.EJ=null;a.z9=0;a.qz=0;}
function Bb0(a,b){var c=new AAQ();A4B(c,a,b);return c;}
function A4B(a,b,c){J(a);a.rO=b;a.EJ=c;}
function A4v(a){return Cb(a.rO);}
function A1H(a,b){return Bb(a.rO)<b?0:1;}
function AW6(a,b){return Bb(a.EJ)<b?0:1;}
function A89(a,b){a.z9=b;}
function A6R(a,b){a.qz=b;}
function PG(){Q.call(this);this.K6=null;}
function BaP(a){var b=new PG();AMO(b,a);return b;}
function AMO(a,b){a.K6=b;Be(a);}
function AOx(a,b){return Fx(b);}
var JS=D(0);
var RK=D();
function BfM(){var a=new RK();AWX(a);return a;}
function AWX(a){J(a);}
var Xd=D(V);
function Bgg(){var a=new Xd();ALu(a);return a;}
function ALu(a){BM(a);}
function AQW(a,b,c,d,e){var f;B2();f=BA(e,Bm_);DQ(b,c,f.eP,f.eO,f.fa,f.fb);}
var Li=D(Dn);
function Bga(){var a=new Li();A2W(a);return a;}
function A2W(a){Jt(a);}
var Xa=D(V);
function Bau(){var a=new Xa();A7v(a);return a;}
function A7v(a){BM(a);}
function A_d(a,b,c,d,e){var f,g,h;ABF();if(Ct(e,BjM)){f=b.cY.d6;g=BjM;h=(BA(e,g)).IL;DU(b,c,f.gE(h));}}
var W9=D(V);
function Bet(){var a=new W9();ATI(a);return a;}
function ATI(a){BM(a);}
function AWm(a,b,c,d,e){var f;B2();f=BA(e,Bm9);DQ(b,c,f.eP,f.eO,f.fa,f.fb);}
var Xb=D(V);
function Bfw(){var a=new Xb();AW7(a);return a;}
function AW7(a){BM(a);}
function A1n(a,b,c,d,e){var f,g,h,i;f=b.cY.d6;B2();g=Bm_;h=(BA(e,g)).d3;i=f.gE(h);DU(b,c,i);}
function Ps(){Q.call(this);this.Kk=null;}
function Bav(a){var b=new Ps();A$V(b,a);return b;}
function A$V(a,b){a.Kk=b;Be(a);}
function ASC(a,b){return Ue(b);}
var JU=D(0);
function Sr(){var a=this;C.call(a);a.kF=null;a.th=null;a.wS=null;}
function AZq(){var a=new Sr();AJQ(a);return a;}
function AJQ(a){J(a);a.kF=window;a.wS=Bbj();}
function A6r(a){var b;b=a.kF.document;return b;}
function A8h(a,b){a.th=b;requestAnimationFrame(BP(a,"onAnimationFrame"));}
function AZ$(a,b){var c;c=a.th;a.th=null;c.fe();}
function A6c(a){return a.wS;}
function ATW(a){var b;b=a.kF.location;return b;}
function AZe(a){return a.kF.document.documentElement.clientWidth;}
function AXr(a){return a.kF.document.documentElement.clientHeight;}
function A5N(a,b){a.Ko(b);}
var Ys=D(CG);
function BfP(a,b,c){var d=new Ys();AUi(d,a,b,c);return d;}
function AUi(a,b,c,d){E4(a,b,c,d);}
function AOF(a,b,c,d){var e;while(true){e=a.k.e(b,c,d);if(e>=0)break;if((b+a.bv.cg()|0)<=d.J()){e=a.bv.bH(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var Ya=D();
function EW(b,c){return Lu(b,c);}
function ZB(){var a=this;C.call(a);a.DU=null;a.wl=0.0;a.mW=null;}
function Bf8(){var a=new ZB();ARz(a);return a;}
function ARz(a){J(a);a.mW=Bp();}
var SE=D(Da);
function Ban(a){var b=new SE();AO5(b,a);return b;}
function AO5(a,b){GD(a,b,1.0,1.0);}
function AIN(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;while(c<d&&f<g){j=e.data;k=b.data;l=c+1|0;m=k[c]&255;n=f+1|0;j[f]=m&65535;c=l;f=n;}h.el(c);h.dR(f);return i;}
function HS(){var a=this;C.call(a);a.fc=null;a.cc=null;a.tw=0;a.jR=0;a.hR=null;a.mx=0;a.yQ=null;}
var Bna=null;function Kk(){Kk=N(HS);ATO();}
function BeC(a,b,c,d){var e=new HS();Ye(e,a,b,c,d);return e;}
function Bnb(a,b,c,d,e){var f=new HS();M4(f,a,b,c,d,e);return f;}
function Bnc(a,b,c,d,e){var f=new HS();Om(f,a,b,c,d,e);return f;}
function Ye(a,b,c,d,e){Kk();J(a);a.tw=1;a.mx=0;a.yQ=S();a.fc=Zt(a,b,c,e);a.cc=A0Q(b,d);a.jR=0;KU(Bg1,a);}
function Zt(a,b,c,d){if(Biq===null)return A3k(b,c,d);return A2E(b,c,d);}
function M4(a,b,c,d,e,f){Kk();Om(a,b,c,d,e,A0Y(f));}
function Om(a,b,c,d,e,f){Kk();a:{b:{J(a);a.tw=1;a.mx=0;a.yQ=S();Be4();switch(Bl4.data[BC(b)]){case 1:break;case 2:a.fc=Bf6(c,d,f);a.cc=A$6(c,e);a.jR=0;break a;case 3:a.fc=A2E(c,d,f);a.cc=A$6(c,e);a.jR=0;break a;case 4:break b;default:break b;}a.fc=A3k(c,d,f);a.cc=A0Q(c,e);a.jR=0;break a;}a.fc=Bcy(d,f);a.cc=BcK(e);a.jR=1;}KU(Bg1,a);}
function APF(a,b,c,d){a.fc.ur(b,c,d);return a;}
function AGt(a,b){var c;c=b.data;a.cc.uC(b,0,c.length);return a;}
function AKt(a,b,c,d){a.cc.uC(b,c,d);return a;}
function ASq(a){return a.fc.uN();}
function A8j(a){return a.cc.ne();}
function AHj(a,b){a.ih(b,null);}
function AQH(a,b,c){a.fc.ih(b,c);if(a.hR!==null&&a.hR.Aa()>0)a.hR.ih(b,c);if(a.cc.l2()>0)a.cc.ew();}
function A7Q(a,b){a.gO(b,null);}
function AEF(a,b,c){a.fc.gO(b,c);if(a.hR!==null&&a.hR.Aa()>0)a.hR.gO(b,c);if(a.cc.l2()>0)a.cc.Ee();}
function AUg(a,b,c,d,e){a.Dd(b,c,d,e,a.tw);}
function A32(a,b,c,d,e,f){var g,h,i,j,k,l,m;if(!e)return;if(f)a.KC(b);if(a.jR){if(a.cc.l2()<=0)Bip.xd(c,d,e);else{g=a.cc.um();h=B8(g);i=BD(g);g.cZ(d);g.cm(d+e|0);Bip.Nx(c,e,5123,g);g.cZ(h);g.cm(i);}}else{j=0;if(a.mx)j=a.hR.Aa();if(a.cc.l2()<=0){if(a.mx&&j>0)Biq.XM(c,d,e,j);else Bip.xd(c,d,e);}else{if((e+d|0)>a.cc.ne()){k=new KJ;l=(((((I()).a(B(536))).j(e)).a(B(537))).j(d)).a(B(538));m=a.cc;QC(k,((l.j(m.ne())).a(B(24))).b());G(k);}if(a.mx&&j>0)Biq.Tz(c,e,5123,d*2|0,j);else Bip.O$(c,e,5123,d*2|0);}}if(f)a.JZ(b);}
function AYr(a){return a.fc.jI();}
function ALt(a){return a.cc.um();}
function KU(b,c){var d;Kk();d=Bna.W(b);if(d===null)d=Bp();d.F(c);Bna.x(b,d);}
function ATO(){Bna=C6();}
function Nu(){var a=this;EU.call(a);a.pq=0;a.e$=null;}
function Bco(a,b){var c=new Nu();AO8(c,a,b);return c;}
function AO8(a,b,c){L6(a,b,null);a.pq=c;}
var FU=D(BT);
var Bnd=null;function ATd(){ATd=N(FU);A8U();}
function Bc1(a){var b=new FU();X4(b,a);return b;}
function Bne(){var a=new FU();Jp(a);return a;}
function X4(a,b){ATd();B_(a);}
function Jp(a){ATd();B_(a);}
function A8U(){Bnd=Bc1(0);}
var Wk=D();
function G3(b,c){var d;if(b<0)G(W((((I()).a(B(539))).j(b)).b()));d=IW(Bf(2,AYY(b/c)|0));if(d<=1073741824)return d;G(W((((I()).a(B(540))).j(b)).b()));}
var AB2=D(Bt);
function Bcv(){var a=new AB2();AKR(a);return a;}
function AKR(a){Co(a);}
function A5m(a,b,c,d){var e;e=!d.lI()?d.J():c.i();if(b<e)return (-1);d.d5=1;d.PU=1;return a.k.e(b,c,d);}
function AUu(a,b){return 0;}
function AJn(a){return B(541);}
function AAJ(){var a=this;C.call(a);a.tb=0;a.gt=null;a.hD=null;a.wY=0.0;a.tt=0;a.va=0;a.jV=0;}
function Gr(){var a=new AAJ();A2Z(a);return a;}
function Bnf(a,b){var c=new AAJ();YI(c,a,b);return c;}
function A2Z(a){YI(a,51,0.800000011920929);}
function YI(a,b,c){var d;J(a);if(c>0.0&&c<1.0){a.wY=c;d=G3(b,c);a.tt=d*c|0;a.jV=d-1|0;a.va=CW(O(a.jV));a.gt=Y(C,d);a.hD=Bc(d);return;}G(W((((I()).a(B(40))).cD(c)).b()));}
function AMM(a,b){return Cp(CN(Cf(O(b.bp()),Cd(2135587861, 2654435769)),a.va));}
function AYq(a,b){var c,d,e;if(b===null)G(W(B(460)));c=a.gt;d=a.kq(b);while(true){e=c.data[d];if(e===null)return  -(d+1|0)|0;if(e.z(b))break;d=(d+1|0)&a.jV;}return d;}
function AQI(a,b,c){var d,e;d=a.j6(b);if(d>=0){a.hD.data[d]=c;return;}e= -(d+1|0)|0;a.gt.data[e]=b;a.hD.data[e]=c;e=a.tb+1|0;a.tb=e;if(e>=a.tt)TU(a,a.gt.data.length<<1);}
function Y$(a,b,c){var d,e,f;d=a.gt;e=a.kq(b);while(true){f=d.data;if(f[e]===null)break;e=(e+1|0)&a.jV;}f[e]=b;a.hD.data[e]=c;}
function AXt(a,b,c){var d;d=a.j6(b);if(d>=0)c=a.hD.data[d];return c;}
function TU(a,b){var c,d,e,f,g;a:{c=a.gt.data.length;a.tt=b*a.wY|0;a.jV=b-1|0;a.va=CW(O(a.jV));d=a.gt;e=a.hD;a.gt=Y(C,b);a.hD=Bc(b);if(a.tb>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g!==null)Y$(a,g,e.data[f]);f=f+1|0;}}}}
var TB=D(T);
function A_X(){var a=new TB();AK_(a);return a;}
function AK_(a){Bo(a);}
function ARi(a){return (CS()).bF(65,90);}
function Ft(){var a=this;CT.call(a);a.bI=0;a.A=null;a.hh=null;}
function V3(a,b,c,d,e,f){FJ(a,c);Ev();a.hh=Bid;a.bI=b;a.A=d;a.C=e;a.bb=f;}
function FV(b){if(b>=0)return A2T(b,1);G(W((((I()).a(B(402))).j(b)).b()));}
function RL(b){if(b>=0)return A2T(b,0);G(W((((I()).a(B(402))).j(b)).b()));}
function Zb(b,c,d){return Bd6(0,b.data.length,b,c,c+d|0,0,0);}
function Ht(b){return Zb(b,0,b.data.length);}
function AYC(a,b,c,d){var e,f,g,h,i,j;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bg((((((I()).a(B(542))).j(g)).a(B(404))).j(f)).b()));if(Bb(a)<d)G(UB());if(d<0)G(Bg(((((I()).a(B(405))).j(d)).a(B(406))).b()));h=a.C+a.bI|0;i=0;while(i<d){g=c+1|0;j=a.A.data;f=h+1|0;e[c]=j[h];i=i+1|0;c=g;h=f;}a.C=a.C+d|0;return a;}}e=b.data;G(Bg(((((((I()).a(B(407))).j(c)).a(B(64))).j(e.length)).a(B(24))).b()));}
function AOB(a,b){return a.z0(b,0,b.data.length);}
function A9x(a,b,c,d){var e,f,g,h,i,j;if(!d)return a;if(a.b_())G(C9());if(Bb(a)<d)G(F0());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bg((((((I()).a(B(543))).j(g)).a(B(404))).j(f)).b()));if(d<0)G(Bg(((((I()).a(B(405))).j(d)).a(B(406))).b()));h=a.C+a.bI|0;i=0;while(i<d){j=a.A.data;g=h+1|0;f=c+1|0;j[h]=e[c];i=i+1|0;h=g;c=f;}a.C=a.C+d|0;return a;}}e=b.data;G(Bg(((((((I()).a(B(407))).j(c)).a(B(64))).j(e.length)).a(B(24))).b()));}
function Ym(a,b){return a.w0(b,0,b.data.length);}
function AWK(a){return 1;}
function HH(a){return a.A;}
function FH(a,b){a.hh=b;return a;}
function J4(a){FZ(a);return a;}
function Jv(a){G7(a);return a;}
function AZz(a,b){IZ(a,b);return a;}
function AQ5(a,b){GL(a,b);return a;}
function AF3(a){return Jv(a);}
function AOS(a,b){return a.M9(b);}
function AVC(a,b){return a.f4(b);}
function AB_(){var a=this;Ft.call(a);a.IG=0;a.oE=0;}
function A2T(a,b){var c=new AB_();A1z(c,a,b);return c;}
function Bd6(a,b,c,d,e,f,g){var h=new AB_();O7(h,a,b,c,d,e,f,g);return h;}
function A1z(a,b,c){O7(a,0,b,Cj(b),0,b,c,0);}
function O7(a,b,c,d,e,f,g,h){V3(a,b,c,d,e,f);a.IG=g;a.oE=h;}
function ADi(a,b){if(b>=0&&b<a.bb)return a.A.data[a.bI+b|0];G(Bg(((((((I()).a(B(354))).j(b)).a(B(64))).j(a.bb)).a(B(24))).b()));}
function AMN(a){var b,c,d,e,f,g,h,i;if(a.oE)G(C9());a:{b=Bb(a);if(a.C>0){c=a.bI;d=a.bI+a.C|0;e=0;while(true){if(e>=b)break a;f=a.A.data;g=c+1|0;h=a.A.data;i=d+1|0;f[c]=h[d];e=e+1|0;c=g;d=i;}}}a.C=b;a.bb=a.hB;a.fE=(-1);return a;}
function AR6(a){return a.oE;}
function A$9(a){var b,c;b=Bb(a)/2|0;c=a.hh;Ev();if(c!==Bid)return BfZ(a.bI+a.C|0,b,a,0,b,a.b_());return Bc9(a.bI+a.C|0,b,a,0,b,a.b_());}
function A8r(a,b){var c,d,e,f,g;if(b>=0&&(b+3|0)<a.bb){c=a.A.data[a.bI+b|0]&255;d=a.A.data[(a.bI+b|0)+1|0]&255;e=a.A.data[(a.bI+b|0)+2|0]&255;f=a.A.data[(a.bI+b|0)+3|0]&255;g=a.hh;Ev();if(g!==Bid)return f<<24|e<<16|d<<8|c;return c<<24|d<<16|e<<8|f;}G(Bg(((((((I()).a(B(354))).j(b)).a(B(64))).j(a.bb-3|0)).a(B(24))).b()));}
function AI2(a,b,c){var d;if(a.oE)G(C9());if(b>=0&&(b+3|0)<a.bb){d=a.hh;Ev();if(d!==Bid){a.A.data[a.bI+b|0]=c<<24>>24;a.A.data[(a.bI+b|0)+1|0]=c>>8<<24>>24;a.A.data[(a.bI+b|0)+2|0]=c>>16<<24>>24;a.A.data[(a.bI+b|0)+3|0]=c>>24<<24>>24;}else{a.A.data[a.bI+b|0]=c>>24<<24>>24;a.A.data[(a.bI+b|0)+1|0]=c>>16<<24>>24;a.A.data[(a.bI+b|0)+2|0]=c>>8<<24>>24;a.A.data[(a.bI+b|0)+3|0]=c<<24>>24;}return a;}G(Bg(((((((I()).a(B(354))).j(b)).a(B(64))).j(a.bb-3|0)).a(B(24))).b()));}
function ATY(a){var b,c;b=Bb(a)/4|0;c=a.hh;Ev();if(c!==Bid)return Be9(a.bI+a.C|0,b,a,0,b,a.b_());return Bdy(a.bI+a.C|0,b,a,0,b,a.b_());}
function ANv(a){var b,c;b=Bb(a)/4|0;c=a.hh;Ev();if(c!==Bie)return BfB(a.bI+a.C|0,b,a,0,b,a.b_());return A_V(a.bI+a.C|0,b,a,0,b,a.b_());}
function RZ(){var a=this;E9.call(a);a.sD=0;a.sC=null;}
function Bgq(a){var b=new RZ();AKF(b,a);return b;}
function AKF(a,b){a.sC=b;Kv(a);}
function A2j(a){var b,c;if(a.sD==N8(a.sC))return (-1);b=a.sC;c=a.sD;a.sD=c+1|0;return Rj(b,c)&255;}
function LM(){var a=this;C.call(a);a.m7=null;a.s$=0.0;}
function Bb$(a,b){var c=new LM();AI8(c,a,b);return c;}
function AI8(a,b,c){J(a);a.m7=S();a.s$=0.0;(a.m7.M(b)).bU();a.s$=c;}
function A27(a,b,c,d){(((a.m7.M(b)).gl(c)).HW(c.n-d.n,c.o-d.o,c.q-d.q)).bU();a.s$= -b.yA(a.m7);}
function VT(){var a=this;C.call(a);a.p8=null;a.uT=null;a.mr=0;a.l$=0;a.nq=0;a.gX=0;a.rY=0;a.uW=0;a.p5=0;}
function BcM(){var a=new VT();A8F(a);return a;}
function A8F(a){J(a);a.p8=null;a.uT=null;a.mr=2;a.l$=5;a.nq=0;a.gX=12;a.rY=1;a.uW=(-1);a.p5=(-1);}
function Gs(){var a=this;C.call(a);a.gm=null;a.b1=null;a.jY=null;}
var Bng=null;var Bnh=null;var Bni=null;function AKZ(){AKZ=N(Gs);A2J();}
function Bff(){var a=new Gs();VP(a);return a;}
function VP(a){var b;AKZ();J(a);a.gm=Y(LM,6);a.b1=H(DC,[S(),S(),S(),S(),S(),S(),S(),S()]);a.jY=Ca(24);b=0;while(b<6){a.gm.data[b]=Bb$(S(),0.0);b=b+1|0;}}
function A5e(a,b){var c,d,e,f,g,h;AKZ();X(Bnh,0,a.jY,0,Bnh.data.length);TY(b.c,a.jY,0,8,3);c=0;d=0;while(c<8){e=a.b1.data[c];f=a.jY.data;g=d+1|0;e.n=f[d];f=a.jY.data;h=g+1|0;e.o=f[g];f=a.jY.data;d=h+1|0;e.q=f[h];c=c+1|0;}a.gm.data[0].iy(a.b1.data[1],a.b1.data[0],a.b1.data[2]);a.gm.data[1].iy(a.b1.data[4],a.b1.data[5],a.b1.data[7]);a.gm.data[2].iy(a.b1.data[0],a.b1.data[4],a.b1.data[3]);a.gm.data[3].iy(a.b1.data[5],a.b1.data[1],a.b1.data[6]);a.gm.data[4].iy(a.b1.data[2],a.b1.data[3],a.b1.data[6]);a.gm.data[5].iy(a.b1.data[4],
a.b1.data[0],a.b1.data[1]);}
function A2J(){var b,c,d,e,f,g,h,i;Bng=H(DC,[Cl((-1.0),(-1.0),(-1.0)),Cl(1.0,(-1.0),(-1.0)),Cl(1.0,1.0,(-1.0)),Cl((-1.0),1.0,(-1.0)),Cl((-1.0),(-1.0),1.0),Cl(1.0,(-1.0),1.0),Cl(1.0,1.0,1.0),Cl((-1.0),1.0,1.0)]);Bnh=Ca(24);b=0;c=Bng.data;d=c.length;e=0;while(e<d){f=c[e];g=Bnh.data;h=b+1|0;g[b]=f.n;g=Bnh.data;i=h+1|0;g[h]=f.o;g=Bnh.data;b=i+1|0;g[i]=f.q;e=e+1|0;}Bni=S();}
function M_(){var a=this;C.call(a);a.Bu=null;a.Et=null;}
var Bnj=null;function BeP(){BeP=N(M_);AQp();}
function A_9(a,b){var c=new M_();AB7(c,a,b);return c;}
function AB7(a,b,c){BeP();J(a);a.Bu=S();a.Et=S();a.Bu.M(b);(a.Et.M(c)).bU();}
function AQp(){Bnj=S();}
var ABA=D(By);
function AT_(b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s;b.uo(8);k=b.dH(c);l=b.dH(e);m=b.dH(f);n=b.dH(d);o=b.dH(g);p=b.dH(i);q=b.dH(j);r=b.dH(h);s=b.Mr();if(s==1){b.hn(24);b.d2(k,l,m,n);b.d2(p,o,r,q);b.ER(k,o,n,r,m,q,l,p);}else if(!s){b.r5(2);b.d2(k,l,m,n);b.d2(p,o,r,q);}else{b.r5(6);b.d2(k,l,m,n);b.d2(p,o,r,q);b.d2(k,n,r,o);b.d2(p,q,m,l);b.d2(p,l,k,o);b.d2(m,q,r,n);}}
function A9D(b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u;if(Z(Br(IM(b.jI()),O(408)),Ba)){J8();k=BiJ.dK(c,null,null,null);l=BiK.dK(d,null,null,null);m=BiL;n=null;o=null;p=null;n=m.dK(e,n,o,p);o=BiM.dK(f,null,null,null);p=BiN;q=null;r=null;m=null;p=p.dK(g,q,r,m);q=BiO.dK(h,null,null,null);r=BiP;s=null;t=null;m=null;r=r.dK(i,s,t,m);m=BiQ.dK(j,null,null,null);AT_(b,k,l,n,o,p,q,r,m);}else{b.uo(24);b.r5(6);J8();u=(((BiB.M(c)).i3(f,0.5)).gl((BiC.M(g)).i3(j,0.5))).bU();b.jp(c,d,f,e,u);b.jp(h,g,i,j,u.em((-1.0)));k=
(((BiB.M(c)).i3(i,0.5)).gl((BiC.M(d)).i3(j,0.5))).bU();b.jp(g,c,e,i,k);b.jp(d,h,j,f,k.em((-1.0)));k=(((BiB.M(c)).i3(h,0.5)).gl((BiC.M(e)).i3(j,0.5))).bU();b.jp(g,h,d,c,k);b.jp(e,f,j,i,k.em((-1.0)));}}
function A6L(b,c,d,e){AU5(b,0.0,0.0,0.0,c,d,e);}
function AU5(b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;i=f*0.5;j=g*0.5;k=h*0.5;l=c-i;m=d-j;n=e-k;o=c+i;p=d+j;q=e+k;r=(Dy()).I(l,m,n);s=(Dy()).I(l,p,n);t=(Dy()).I(o,m,n);u=(Dy()).I(o,p,n);v=(Dy()).I(l,m,q);w=(Dy()).I(l,p,q);x=(Dy()).I(o,m,q);y=(Dy()).I(o,p,q);A9D(b,r,s,t,u,v,w,x,y);UT();}
var QS=D(Bm);
function BaM(){var a=new QS();A$e(a);return a;}
function A$e(a){Cx(a);}
function VV(){Bt.call(this);this.C$=null;}
function BfO(a){var b=new VV();A6q(b,a);return b;}
function A6q(a,b){Co(a);a.C$=b;}
function AXZ(a,b,c,d){var e,f;a:{if(b!=d.J()){if(!b)break a;if(d.jB()&&b==d.dI())break a;e=a.C$;f=b-1|0;if(e.D2(c.f(f),c.f(b)))break a;}return (-1);}return a.k.e(b,c,d);}
function AI6(a,b){return 0;}
function AWc(a){return B(544);}
var Ci=D();
function DT(a){J(a);}
function AU9(a,b,c){return 1;}
var TN=D();
function Xj(){V.call(this);this.yn=null;}
function Bd7(){var a=new Xj();A6e(a);return a;}
function A6e(a){BM(a);a.yn=BL();}
function AZ7(a,b,c,d,e){D1(b,c,(a.yn.ch(b.cV.eK)).hC(d.dy));}
var MK=D();
var BjL=null;function BfS(){BfS=N(MK);AFE();}
function AFE(){BjL=Bc((YA()).data.length);BjL.data[BC(Bjz)]=1;BjL.data[BC(BjA)]=2;}
function Yv(){var a=this;C.call(a);a.fX=null;a.iR=null;a.iT=null;a.Nr=null;}
function Bct(){var a=new Yv();A6P(a);return a;}
function A6P(a){J(a);a.iT=Bp();a.Nr=BL();}
function Rx(a,b){var c,d,e;c=a.iT.bZ();while(true){if(!c.bC()){d=BcC();d.Pn(b);a.iT.F(d);return d;}e=c.bz();if(NV(e.jI(),b)&&e.I1()<16383)break;}return e;}
function ADA(a){if(a.fX!==null)G(U(B(545)));a.iR=null;a.fX=BaS();a.iT.K();}
function AWi(a){var b,c,d;if(a.fX===null)G(U(B(546)));b=a.fX;NY(a);a.fX=null;c=a.iT.bZ();while(c.bC()){d=c.bz();d.N5();}a.iT.K();AYd(b);return b;}
function NY(a){if(a.iR!==null)a.iR=null;}
function AVQ(a,b){if(a.fX===null)G(U(B(546)));NY(a);a.fX.j3.F(b);a.iR=b;return b;}
function AGb(a){var b;b=AGm();a.P2(b);b.gn=(((I()).a(B(547))).j(a.fX.j3.h)).b();return b;}
function A8v(a,b,c){if(a.iR===null)a.Js();a.iR.d9.F(Bgj(b,c));}
function AKc(a,b,c,d,e){var f;f=Rx(a,d);a.Nq(f.Qu(b,c),e);return f;}
function ASK(a,b,c,d,e){return a.Kf(b,c,RP(d),e);}
function ARv(a,b,c,d,e,f){return a.J3(b,c,d,4,e,f);}
function A3u(a,b,c,d,e,f,g){a.g6();(a.Ky(B(548),e,g,f)).Lj(b,c,d);return a.H6();}
function AYd(b){var c,d;b.pY.K();b.p3.K();b.oA.K();c=b.j3.bZ();while(c.bC()){d=c.bz();T8(b,d);}}
function T8(b,c){var d,e,f;d=c.d9.bZ();while(d.bC()){e=d.bz();if(!b.pY.iv(e.dY,1))b.pY.F(e.dY);if(!b.oA.iv(e.fl,1)){b.oA.F(e.fl);if(!b.p3.iv(e.fl.b7,1))b.p3.F(e.fl.b7);b.MJ(e.fl.b7);}}d=(c.rD()).ft();while(d.bC()){f=d.bz();T8(b,f);}}
function I9(){var a=this;C.call(a);a.dt=null;a.eN=null;a.yg=0;a.KK=0;a.t_=0;a.k3=0;a.oH=0;}
function A3k(a,b,c){var d=new I9();Z4(d,a,b,c);return d;}
function Z4(a,b,c,d){J(a);a.k3=0;a.oH=0;a.KK=b;a.dt=d;a.eN=HX(Cg(a.dt.cQ/4|0,c));a.eN.db();a.yg=Bip.i5();a.t_=!b?35048:35044;}
function AI5(a){return a.dt;}
function ATG(a){return CV(a.eN)/(a.dt.cQ/4|0)|0;}
function ACP(a){if(a.oH){Bip.fD(34962,BD(a.eN),a.eN,a.t_);a.k3=0;}}
function A5a(a,b,c,d){a.k3=1;Oa(b,a.eN,d,c);a.eN.cZ(0);a.eN.cm(d);ACP(a);}
function AZR(a,b,c){var d,e,f,g,h,i;d=Bip;d.c$(34962,a.yg);if(a.k3){d.fD(34962,BD(a.eN),a.eN,a.t_);a.k3=0;}a:{e=CU(a.dt);if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data;h=CB(a.dt,f);i=g[f];if(i>=0){b.lT(i);if(h.fn!=4)b.id(i,h.cK,5126,0,a.dt.cQ,h.cU);else b.id(i,h.cK,5121,1,a.dt.cQ,h.cU);}f=f+1|0;}}f=0;while(f<e){h=CB(a.dt,f);i=b.lZ(h.es);if(i>=0){b.lT(i);if(h.fn!=4)b.id(i,h.cK,5126,0,a.dt.cQ,h.cU);else b.id(i,h.cK,5121,1,a.dt.cQ,h.cU);}f=f+1|0;}}a.oH=1;}
function AWk(a,b,c){var d,e,f,g;a:{d=Bip;e=CU(a.dt);if(c===null){f=0;while(f<e){b.BI((CB(a.dt,f)).es);f=f+1|0;}}else{f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0)b.tO(g);f=f+1|0;}}}d.c$(34962,0);a.oH=0;}
var Wh=D(I9);
function Bcy(a,b){var c=new Wh();A7g(c,a,b);return c;}
function A7g(a,b,c){Z4(a,0,b,c);}
var Xp=D(V);
function Ba2(){var a=new Xp();AQP(a);return a;}
function AQP(a){BM(a);}
function ATx(a,b,c,d,e){Ce();Fv(b,c,(BA(e,Bmx)).dX);}
var Xl=D(V);
function BeS(){var a=new Xl();ARQ(a);return a;}
function ARQ(a){BM(a);}
function AVj(a,b,c,d,e){var f,g,h,i;f=b.cY.d6;B2();g=Bnk;h=(BA(e,g)).d3;i=f.gE(h);DU(b,c,i);}
var S7=D(T);
function BcY(){var a=new S7();AJp(a);return a;}
function AJp(a){Bo(a);}
function A7q(a){return (CS()).bF(97,122);}
function Xk(){V.call(this);this.Bd=null;}
function Bcs(){var a=new Xk();AK$(a);return a;}
function AK$(a){BM(a);a.Bd=Ph();}
function ALO(a,b,c,d,e){Q4(b,c,((a.Bd.D_(d.dy)).CT()).AE());}
var KO=D(0);
var Xn=D(V);
function BbZ(){var a=new Xn();AZD(a);return a;}
function AZD(a){BM(a);}
function AG5(a,b,c,d,e){ET();Fn(b,c,(BA(e,Bmb)).mo);}
var ABE=D();
function Y3(){var a=this;C.call(a);a.d6=null;a.oq=0;a.s8=0;a.qE=0;a.ha=0;a.AQ=0.0;a.w5=0.0;a.pH=0;a.o_=0;}
function BdG(a){var b=new Y3();A$r(b,a);return b;}
function A$r(a,b){J(a);a.d6=b;}
function A8D(a){Bio.eh(2929);a.ha=0;Bio.kT(1);a.pH=1;Bio.eh(3042);a.oq=0;Bio.eh(2884);a.qE=0;a.s8=0;a.o_=0;a.d6.g6();}
function A$Y(a){if(a.ha)Bio.eh(2929);if(!a.pH)Bio.kT(1);if(a.oq)Bio.eh(3042);if(a.o_>0)Bio.eh(2884);a.d6.bd();}
function AGO(a,b){var c;if(a.pH!=b){c=Bio;a.pH=b;c.kT(b);}}
function AXT(a,b,c,d){var e,f,g;e=!a.ha?0:1;f=!b?0:1;if(a.ha!=b){a.ha=b;if(!f)Bio.eh(2929);else{Bio.o5(2929);Bio.vD(b);}}if(f){if(!(e&&a.ha==b)){g=Bio;a.ha=b;g.vD(b);}if(!(e&&a.AQ===c&&a.w5===d)){g=Bio;a.AQ=c;a.w5=d;g.J8(c,d);}}}
function A$b(a,b,c,d){if(b!=a.oq){a.oq=b;if(!b)Bio.eh(3042);else Bio.o5(3042);}if(b&&!(a.s8==c&&a.qE==d)){Bio.PS(c,d);a.s8=c;a.qE=d;}}
function AKb(a,b){if(b!=a.o_){a.o_=b;if(b!=1028&&b!=1029&&b!=1032)Bio.eh(2884);else{Bio.o5(2884);Bio.Ji(b);}}}
var Rd=D(T);
function BcE(){var a=new Rd();AF7(a);return a;}
function AF7(a){Bo(a);}
function APm(a){return BcV(a);}
var Hl=D();
function XP(a){J(a);}
function Zr(){var a=this;C.call(a);a.fv=null;a.dS=null;a.rS=0;a.H9=0;a.jj=0;a.oW=0;a.yW=0;}
function A$6(a,b){var c=new Zr();AZl(c,a,b);return c;}
function AZl(a,b,c){J(a);a.jj=1;a.oW=0;a.dS=ML(c*2|0);a.H9=1;a.yW=!b?35048:35044;a.fv=a.dS.v6();a.fv.db();a.dS.db();a.rS=ACC(a);}
function ACC(a){var b;b=Bip.i5();Bip.c$(34963,b);Bip.fD(34963,CV(a.dS),null,a.yW);Bip.c$(34963,0);return b;}
function APy(a){return BD(a.fv);}
function AUQ(a){return CV(a.fv);}
function A1S(a,b,c,d){a.jj=1;a.fv.c1();a.fv.DG(b,c,d);a.fv.db();a.dS.cZ(0);a.dS.cm(d<<1);if(a.oW){Bip.qq(34963,0,BD(a.dS),a.dS);a.jj=0;}}
function ASN(a){a.jj=1;return a.fv;}
function ALq(a){if(!a.rS)G(U(B(549)));Bip.c$(34963,a.rS);if(a.jj){a.dS.cm(BD(a.fv)*2|0);Bip.qq(34963,0,BD(a.dS),a.dS);a.jj=0;}a.oW=1;}
function AFR(a){Bip.c$(34963,0);a.oW=0;}
var Gn=D(BT);
var Bnl=null;function A42(){A42=N(Gn);AH6();}
function BeI(a){var b=new Gn();Y8(b,a);return b;}
function Bnm(){var a=new Gn();H2(a);return a;}
function Y8(a,b){A42();B_(a);}
function H2(a){A42();B_(a);}
function AH6(){Bnl=BeI(0);}
var Wt=D(Bt);
function BaC(){var a=new Wt();AQU(a);return a;}
function AQU(a){Co(a);}
function AK4(a,b,c,d){if(b!=d.NA())return (-1);return a.k.e(b,c,d);}
function AT2(a,b){return 0;}
function AWy(a){return B(550);}
var Xt=D(V);
function Bed(){var a=new Xt();AEM(a);return a;}
function AEM(a){BM(a);}
function A7z(a,b,c,d,e){var f,g,h,i;f=b.cY.d6;B2();g=Bnn;h=(BA(e,g)).d3;i=f.gE(h);DU(b,c,i);}
var Xq=D(V);
function Baz(){var a=new Xq();A9U(a);return a;}
function A9U(a){BM(a);}
function ATi(a,b,c,d,e){var f;B2();f=BA(e,Bnn);DQ(b,c,f.eP,f.eO,f.fa,f.fb);}
var C_=D(BT);
var Bno=null;var Bg5=null;var Bnp=null;var Bnq=null;var Bnr=null;var Bns=null;var Bnt=null;var Bnu=null;function Fl(){Fl=N(C_);AFe();}
function Fe(a){var b=new C_();S1(b,a);return b;}
function S1(a,b){Fl();B_(a);a.dZ(!b?0:PB(0.0,0.0,0.0),b);}
function AFZ(a){return Rn(a.bY);}
function AQb(a){return AAs(a.bY);}
function A1p(a){return XN(a.bY);}
function AHR(a,b,c,d){AAo(a.bY,b,c,d);}
function Gq(b,c){Fl();c.M_(b.n,b.o,b.q);}
function Wp(b,c){var d,e,f;Fl();d=b.LM();e=b.JR();f=b.Kg();c.I(d,e,f);}
function AFe(){Bno=Fe(0);Bg5=Fe(1);Bnp=Fe(1);Bnq=Fe(1);Bnr=Fe(1);Bns=Fe(1);Bnt=Fe(0);Bnu=S();}
function PB(b,c,d){var jsObj=new Bullet.btVector3(b,c,d);return Bullet.getPointer(jsObj);}
function Rn(b){var vec3=Bullet.wrapPointer(b,Bullet.btVector3);return vec3.x();}
function AAs(b){var vec3=Bullet.wrapPointer(b,Bullet.btVector3);return vec3.y();}
function XN(b){var vec3=Bullet.wrapPointer(b,Bullet.btVector3);return vec3.z();}
function AAo(b,c,d,e){var vec3=Bullet.wrapPointer(b,Bullet.btVector3);vec3.setValue(c,d,e);}
var Xm=D(V);
function BeV(){var a=new Xm();AEK(a);return a;}
function AEK(a){BM(a);}
function AN2(a,b,c,d,e){var f;B2();f=BA(e,Bnk);DQ(b,c,f.eP,f.eO,f.fa,f.fb);}
var Xs=D(V);
function BeX(){var a=new Xs();AWs(a);return a;}
function AWs(a){BM(a);}
function AJJ(a,b,c,d,e){Ce();Fv(b,c,(BA(e,Bmy)).dX);}
var KX=D(Cy);
function Bnv(a){var b=new KX();ZR(b,a);return b;}
function ZR(a,b){Et(a,b);}
function AVy(a,b,c,d){var e;e=a.ka();d.by(e,b-d.ev(e)|0);return a.k.e(b,c,d);}
function AYx(a){return B(551);}
function A7s(a,b){return 0;}
var Xr=D(V);
function Bcz(){var a=new Xr();AI7(a);return a;}
function AI7(a){BM(a);}
function AYE(a,b,c,d,e){Ce();Fv(b,c,(BA(e,BmA)).dX);}
var Ll=D();
var Bnw=null;function E1(){E1=N(Ll);ALb();}
function IK(b,c){E1();return b+Bnw.MO((c-b|0)+1|0)|0;}
function HE(b,c){E1();return b+Bnw.Gb()*(c-b);}
function IW(b){var c,d;E1();if(!b)return 1;c=b+(-1)|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function K7(b){E1();return b&&!(b&(b-1|0))?1:0;}
function DF(b){E1();return CH(b)>9.999999974752427E-7?0:1;}
function Dl(b,c){E1();return CH(b-c)>9.999999974752427E-7?0:1;}
function SK(b,c,d){E1();return CH(b-c)>d?0:1;}
function ALb(){Bnw=BcD();}
var NC=D(0);
var L3=D(0);
function Vt(){BJ.call(this);this.rs=0;}
function BbO(a){var b=new Vt();A8a(b,a);return b;}
function A8a(a,b){C2(a);a.bO=2;a.rs=EX(En(b));}
function AQl(a,b,c){var d,e,f;d=b+1|0;e=c.f(b);f=c.f(d);return a.rs!=EX(En(Dh(e,f)))?(-1):2;}
function A_q(a){return (((I()).a(B(423))).a(Mg(Eu(a.rs)))).b();}
function U_(){var a=this;Ir.call(a);a.x7=0;a.uK=0.0;a.wL=0;a.kW=0.0;a.BB=0;a.jx=0;a.iG=0;a.Cb=0;a.DS=0.0;a.A6=0.0;a.oX=0;a.i9=null;a.uS=0;a.q2=0;a.y7=0;a.rU=0;a.yv=0;a.ta=0;a.Fj=0;a.rK=0;a.Aw=0;a.qJ=0;a.w$=0;a.cB=null;a.fy=0;a.tq=0.0;a.tr=0.0;a.fA=null;a.tv=null;a.BY=null;a.ir=0;a.sM=0;}
function Bnx(a,b){var c=new U_();Qr(c,a,b);return c;}
function BaQ(a){var b=new U_();AFF(b,a);return b;}
function Qr(a,b,c){VA(a,b);a.x7=0;a.uK=360.0;a.wL=1;a.kW=10.0;a.BB=2;a.jx=0;a.Cb=1;a.DS=(-0.10000000149011612);a.A6=10.0;a.oX=1;a.i9=S();a.uS=1;a.q2=1;a.y7=0;a.rU=51;a.ta=47;a.rK=29;a.qJ=32;a.fy=(-1);a.fA=S();a.tv=S();a.BY=b;a.BY.wX=a;a.cB=c;}
function AFF(a,b){Qr(a,Bfq(),b);}
function AKp(a,b,c,d,e){a.ir=a.ir|1<<d;a.sM=K7(a.ir)?0:1;if(a.sM)a.fy=(-1);else if(a.fy<0&&!(a.jx&&!a.iG)){a.tq=b;a.tr=c;a.fy=e;}return !OP(a,b,c,d,e)&&a.jx&&!a.iG?0:1;}
function A1E(a,b,c,d,e){a.ir=a.ir&((-1)^1<<d);a.sM=K7(a.ir)?0:1;if(e==a.fy)a.fy=(-1);return !AAw(a,b,c,d,e)&&!a.iG?0:1;}
function AY3(a,b,c,d){if(d==a.x7){((a.fA.M(a.cB.c9)).iC(a.cB.ds)).o=0.0;a.cB.zk(a.i9,a.fA.bU(),c*a.uK);a.cB.zk(a.i9,Bm5,b* -a.uK);}else if(d==a.wL){a.cB.k_((((a.fA.M(a.cB.c9)).iC(a.cB.ds)).bU()).em( -b*a.kW));a.cB.k_((a.tv.M(a.cB.ds)).em( -c*a.kW));if(a.uS)(a.i9.fB(a.fA)).fB(a.tv);}else if(d==a.BB){a.cB.k_((a.fA.M(a.cB.c9)).em(c*a.kW));if(a.q2)a.i9.fB(a.fA);}if(a.oX)a.cB.f6();return 1;}
function AKw(a,b,c,d){var e,f,g,h,i,j;e=VU(a,b,c,d);if(!e&&a.fy>=0){f=b;g=(f-a.tq)/Bil.bo();h=a.tr;i=c;j=(h-i)/Bil.bl();a.tq=f;a.tr=i;return a.Iq(g,j,a.fy);}return e;}
function ASj(a,b,c){return a.y9(c*a.DS*a.kW);}
function A3p(a,b){if(!a.Cb&&a.jx&&!a.iG)return 0;a.cB.k_((a.fA.M(a.cB.c9)).em(b));if(a.y7)a.i9.fB(a.fA);if(a.oX)a.cB.f6();return 1;}
function ASo(a,b){return a.y9(a.A6*b);}
function AEc(a,b){if(b==a.jx)a.iG=1;if(b==a.rU)a.yv=1;else if(b==a.ta)a.Fj=1;else if(b==a.rK)a.Aw=1;else if(b==a.qJ)a.w$=1;return 0;}
function A2o(a,b){if(b==a.jx){a.iG=0;a.fy=(-1);}if(b==a.rU)a.yv=0;else if(b==a.ta)a.Fj=0;else if(b==a.rK)a.Aw=0;else if(b==a.qJ)a.w$=0;return 0;}
var Gm=D();
var Bny=null;var Bnz=null;var BnA=null;function Eh(){var b;if(Bny===null){b=new HA;ATo();Oe(b,Bii,0);Bny=b;}return Bny;}
function TG(){var b;if(Bnz===null){b=new HA;A3n();Oe(b,Blw,0);Bnz=b;}return Bnz;}
function X(b,c,d,e,f){var g,h,i,j,k,l,m,n;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=AAz(b)){g=e+f|0;if(g<=AAz(d)){a:{b:{if(b!==d){h=(Ck(b)).gq();i=(Ck(d)).gq();if(h!==null&&i!==null){if(h===i)break b;if(!h.hf()&&!i.hf()){j=b;k=0;g=c;while(k<f){l=j.data;m=g+1|0;n=l[g];if(!i.vZ(n)){Nc(b,c,d,e,k);G(Qy());}k=k+1|0;g=m;}Nc(b,c,d,e,f);return;}if(!h.hf())break a;if(i.hf())break b;else break a;}G(Qy());}}Nc(b,c,d,e,f);return;}G(Qy());}}G(C$());}G(APE(B(552)));}
function Nc(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Ea(){return Long_fromNumber(new Date().getTime());}
function AZN(){var b;if(BnA===null){b=Bbm();b.x(B(553),B(554));b.x(B(555),B(556));b.x(B(557),B(383));b.x(B(558),B(13));b.x(B(559),AZK());b.x(B(560),ARj());b.x(B(561),B(554));b.x(B(562),A$O());BnA=Bbq(b);}}
function ARj(){return B(563);}
function A$O(){return B(383);}
function Gp(b,c){AZN();return BnA.x(b,c);}
function AZK(){return B(324);}
function S4(){var a=this;C.call(a);a.eU=null;a.mM=null;a.lM=null;a.lA=null;a.ms=null;}
function A6T(){var a=new S4();A8I(a);return a;}
function A8I(a){J(a);a.eU=null;}
function AD_(a,b){a.eU=b.eU;a.mM=b.mM;a.lM=b.lM;a.lA=b.lA;a.ms=b.ms;}
function AFu(a){var b,c;b=O(a.eU===null?0:a.eU.ej);c=CA(Cf(O(811),b),O(a.eU===null?0:a.eU.N9()));c=CA(Cf(O(811),c),O(a.mM===null?0:EE(a.mM)));c=CA(Cf(O(811),c),O(a.lM===null?0:EE(a.lM)));c=CA(Cf(O(811),c),O(a.lA===null?0:G8(a.lA)));c=CA(Cf(O(811),c),O(a.ms===null?0:G8(a.ms)));return Cp(ARp(c,M$(c,32)));}
function Rb(){var a=this;C.call(a);a.OF=null;a.hA=null;a.so=null;a.rg=0;a.zL=0.0;a.hU=0.0;a.qL=0.0;a.i0=0.0;a.sd=0.0;a.e6=0.0;a.l5=0.0;a.iA=0.0;a.kj=0.0;a.xo=0.0;a.eQ=0.0;a.z_=0.0;a.Du=0;a.he=null;a.iu=null;a.vu=0.0;a.tK=0.0;a.Dz=null;a.wn=null;a.xw=null;}
function Bds(a,b){var c=new Rb();A4x(c,a,b);return c;}
function A4x(a,b,c){J(a);a.e6=1.0;a.xo=1.0;a.eQ=1.0;a.z_=1.0;a.he=Y($rt_arraycls(JB),128);a.tK=1.0;a.wn=I5([120,101,97,111,110,115,114,99,117,109,118,119,122]);a.xw=I5([77,78,66,68,67,69,70,75,65,71,72,73,74,76,79,80,81,82,83,84,85,86,87,88,89,90]);a.so=b;a.rg=c;a.P3(b,c);}
function AGv(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,$$je;if(a.hA!==null)G(DR(B(564)));a.OF=b.Oo();d=BbS(BdI(b.qy()),512);a:{b:{try{e=d.lf();if(e===null)G(U(B(565)));f=e.ei(e.Ns(B(566))+8|0);g=(f.ce(0,f.Lo(32))).vE(B(23),4);h=g.data;if(h.length!=4)G(U(B(567)));a.zL=BU(h[0]);a.hU=BU(h[1]);a.qL=BU(h[2]);a.i0=BU(h[3]);i=a.zL+a.qL;f=d.lf();if(f===null)G(U(B(568)));j=f.vE(B(56),9);h=j.data;k=h.length;if(k<3)G(U(B(569)));if(!h[1].e2(B(570)))G(U(B(571)));a.sd
=BU(h[1].ei(11));if(!h[2].e2(B(572)))G(U(B(573)));c:{l=BU(h[2].ei(5));m=1;if(k<6)n=m;else if(h[5]===null)n=m;else if(!h[5].e2(B(574)))n=m;else{try{n=Bf(1,BU(h[5].ei(6)));m=n;break c;}catch($$e){$$je=R($$e);if($$je instanceof Du){}else{throw $$e;}}n=m;}}a.hA=Y(BN,n);o=0;d:{e:{f:{while(true){if(o>=n)break d;f=d.lf();if(f===null)G(U(B(575)));g:{p=GM(GJ(B(576)),f);if(Ga(p)){q=Gh(p,1);try{r=BU(q);if(r!=o)break f;break g;}catch($$e){$$je=R($$e);if($$je instanceof Du){s=$$je;break e;}else{throw $$e;}}}}f=GM(GJ(B(577)),
f);if(!Ga(f))break;t=Gh(f,1);a.hA.data[o]=(((b.La()).KD(t)).rx()).GF(B(578),B(383));o=o+1|0;}G(U(B(579)));}try{G(U((((I()).a(B(580))).a(q)).b()));}catch($$e){$$je=R($$e);if($$je instanceof Du){s=$$je;}else{throw $$e;}}}G(Jd((((I()).a(B(581))).a(q)).b(),s));}a.iA=0.0;h:{while(true){f=d.lf();if(f===null)break;if(f.e2(B(582)))break h;if(f.e2(B(583)))break h;if(!f.e2(B(584)))continue;u=AFC();v=T7(f,B(585));v.O();v.O();w=BU(v.O());if(w<=0)a.iu=u;else{if(w>65535)continue;a.yl(w,u);}u.e0=w;v.O();u.te=BU(v.O());v.O();u.tf
=BU(v.O());v.O();u.cv=BU(v.O());v.O();u.cN=BU(v.O());v.O();u.dr=BU(v.O());v.O();if(c)u.jg=BU(v.O());else u.jg= -(u.cN+BU(v.O())|0)|0;v.O();u.gz=BU(v.O());if(v.wt())v.O();i:{if(v.wt())try{u.jX=BU(v.O());break i;}catch($$e){$$je=R($$e);if($$je instanceof Du){}else{throw $$e;}}}if(u.cv>0&&u.cN>0)a.iA=Ju(l+u.jg,a.iA);}}a.iA=a.iA+a.qL;j:{while(true){f=d.lf();if(f===null)break;if(!f.e2(B(586)))break j;v=T7(f,B(585));v.O();v.O();x=BU(v.O());v.O();y=BU(v.O());if(x<0)continue;if(x>65535)continue;if(y<0)continue;if(y
>65535)continue;u=a.it(x&65535);v.O();z=BU(v.O());if(u!==null)u.GD(y,z);}}ba=0;bb=0.0;bc=0.0;bd=0.0;be=0.0;bf=0.0;bg=0.0;bh=0.0;if(f!==null&&f.e2(B(583))){ba=1;v=T7(f,B(585));v.O();v.O();bb=D_(v.O());v.O();bc=D_(v.O());v.O();bd=D_(v.O());v.O();be=D_(v.O());v.O();bf=D_(v.O());v.O();bg=D_(v.O());v.O();bh=D_(v.O());}bi=a.it(32);if(bi===null){bi=AFC();bi.e0=32;bj=a.it(108);if(bj===null)bj=a.CQ();bi.gz=bj.gz;a.yl(32,bi);}if(!bi.cv){bi.cv=a.i0+bi.gz+a.hU|0;bi.dr= -a.i0|0;}a.vu=bi.gz;bk=null;h=a.wn.data;k=h.length;bl
=0;k:{while(bl<k){bm=h[bl];bk=a.it(bm);if(bk!==null)break k;bl=bl+1|0;}}if(bk===null)bk=a.CQ();a.tK=bk.cN-i;bn=null;h=a.xw.data;n=h.length;k=0;l:{while(k<n){bo=h[k];bn=a.it(bo);if(bn!==null)break l;k=k+1|0;}}if(bn!==null)a.e6=bn.cN;else{h=a.he.data;n=h.length;k=0;while(k<n){m:{bp=h[k];if(bp!==null){bq=bp.data;bl=bq.length;br=0;while(true){if(br>=bl)break m;u=bq[br];if(u!==null&&u.cN&&u.cv)a.e6=Ei(a.e6,u.cN);br=br+1|0;}}}k=k+1|0;}}a.e6=a.e6-i;a.l5=l-a.e6;a.kj= -a.sd;if(c){a.l5= -a.l5;a.kj= -a.kj;}if(ba){a.l5
=bb;a.iA=bc;a.kj=bd;a.e6=be;a.sd=bf;a.vu=bg;a.tK=bh;}}catch($$e){$$je=R($$e);if($$je instanceof B5){s=$$je;break b;}else{f=$$je;break a;}}L0(d);return;}try{G(Jd((((I()).a(B(587))).dD(b)).b(),s));}catch($$e){$$je=R($$e);f=$$je;}}L0(d);G(f);}
function AVM(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=c.Ba();e=1.0/d.bo();f=1.0/d.bl();g=0.0;h=0.0;i=c.zQ;j=c.zT;k=c.Ig();l=c.LF();if(c instanceof KB){m=c;g=m.N1;h=(m.MP-m.OX|0)-m.NZ;}n=b.te;o=b.te+b.cv|0;p=b.tf;q=b.tf+b.cN|0;if(g<=0.0)k=o;else{n=n-g;if(n<0.0){b.cv=b.cv+n|0;b.dr=b.dr-n|0;n=0.0;}r=o-g;if(r<=k)k=r;else b.cv=b.cv-(r-k)|0;}if(h<=0.0)l=q;else{p=p-h;if(p<0.0){b.cN=b.cN+p|0;if(b.cN<0)b.cN=0;p=0.0;}r=q-h;if(r<=l)l=r;else{s=r-l;b.cN=b.cN-s|0;b.jg=b.jg+s|0;}}b.vG=i+n*e;b.Bo=i+k*e;if(!a.rg){b.tl=j
+p*f;b.p9=j+l*f;}else{b.p9=j+p*f;b.tl=j+l*f;}}
function ATD(a,b,c){var d,e,f;d=a.he.data;e=b/512|0;f=d[e];if(f===null){d=a.he.data;f=Y(JB,512);d[e]=f;}f.data[b&511]=c;}
function A3S(a){var b,c,d,e,f,g,h,i;b=a.he.data;c=b.length;d=0;a:while(true){if(d>=c)G(U(B(588)));b:{e=b[d];if(e!==null){f=e.data;g=f.length;h=0;while(true){if(h>=g)break b;i=f[h];if(i!==null&&i.cN&&i.cv)break a;h=h+1|0;}}}d=d+1|0;}return i;}
function AG0(a,b){var c;c=a.he.data[b/512|0];if(c===null)return null;return c.data[b&511];}
function AGf(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q;g=e-d|0;if(!g)return;h=a.Du;i=a.eQ;j=b.bi;k=b.bn;j.xt(g);b.bn.D$(g+1|0);while(true){a:{l=d+1|0;m=c.f(d);if(m!=13){n=a.it(m);if(n===null){if(a.iu===null)break a;n=a.iu;}j.F(n);if(f!==null){o=f.gz;p=(o+f.Kj(m)|0)*i;}else p=n.op?0.0:( -n.dr|0)*i-a.i0;k.Al(p);if(!h)f=n;else if(m!=91)f=n;else if(l>=e)f=n;else if(c.f(l)!=91)f=n;else{l=l+1|0;f=n;}}}if(l>=e)break;d=l;}if(f!==null){q=f.op?f.gz*i:(f.cv+f.dr|0)*i-a.hU;k.Al(q);}}
function ADo(a,b,c){var d,e,f,g,h;d=c-1|0;e=b.P;f=e.data;g=f[d].e0&65535;if(a.jt(g))return d;if(a.xG(g))d=d+(-1)|0;a:{while(d>0){h=f[d].e0&65535;if(a.jt(h))break a;if(a.xG(h))break a;d=d+(-1)|0;}return 0;}return d+1|0;}
function AGL(a,b){var c,d,e,f;if(a.Dz===null)return 0;c=a.Dz.data;d=c.length;e=0;while(e<d){f=c[e];if(b==f)return 1;e=e+1|0;}return 0;}
function AHs(a,b){switch(b){case 9:case 10:case 13:case 32:break;default:return 0;}return 1;}
var Nx=D();
var BnB=null;function CD(){return BnB;}
function ALV(b){BnB=b;}
function XB(){var a=this;T.call(a);a.xI=0;a.C5=0;}
function M(a,b){var c=new XB();A$c(c,a,b);return c;}
function A$c(a,b,c){Bo(a);a.xI=b;a.C5=c;}
function AMe(a){var b;b=(CS()).bF(a.xI,a.C5);return b;}
function UH(){var a=this;C.call(a);a.fW=0;a.qQ=0.0;a.qR=0.0;a.oi=0.0;a.oh=0.0;a.uD=Ba;a.gw=0;a.pC=null;a.pB=null;a.ks=null;}
function Bfi(){var a=new UH();ADv(a);return a;}
function ADv(a){J(a);a.fW=10;a.pC=Ca(a.fW);a.pB=Ca(a.fW);a.ks=Bf1(a.fW);}
function ANd(a,b,c,d){var e;a.qQ=b;a.qR=c;a.oi=0.0;a.oh=0.0;a.gw=0;e=0;while(e<a.fW){a.pC.data[e]=0.0;a.pB.data[e]=0.0;a.ks.data[e]=Ba;e=e+1|0;}a.uD=d;}
function AMt(a,b,c,d){var e,f;a.oi=b-a.qQ;a.oh=c-a.qR;a.qQ=b;a.qR=c;e=D6(d,a.uD);a.uD=d;f=a.gw%a.fW|0;a.pC.data[f]=a.oi;a.pB.data[f]=a.oh;a.ks.data[f]=e;a.gw=a.gw+1|0;}
function A2p(a){var b,c;b=No(a,a.pC,a.gw);c=Ry(MJ(a,a.ks,a.gw))/1.0E9;if(c!==0.0)return b/c;return 0.0;}
function A6i(a){var b,c;b=No(a,a.pB,a.gw);c=Ry(MJ(a,a.ks,a.gw))/1.0E9;if(c!==0.0)return b/c;return 0.0;}
function No(a,b,c){var d,e,f;d=Bq(a.fW,c);e=0.0;f=0;while(f<d){e=e+b.data[f];f=f+1|0;}return e/d;}
function MJ(a,b,c){var d,e,f;d=Bq(a.fW,c);e=Ba;f=0;while(f<d){e=CA(e,b.data[f]);f=f+1|0;}if(!d)return Ba;return E_(e,O(d));}
function ACF(){HJ.call(this);this.jl=null;}
function BdC(a){var b=new ACF();A58(b,a);return b;}
function A58(a,b){a.jl=b;P9(a);}
function A5r(a){if(!a.jl.mJ)a.jl.mJ=a.jl.dV.OK(a.jl.d8.eW,a.jl.d8.eV);}
var Xu=D(T);
function Bdz(){var a=new Xu();AFB(a);return a;}
function AFB(a){Bo(a);}
function ATb(a){return (((CS()).bF(48,57)).bF(97,102)).bF(65,70);}
function Zy(){var a=this;C.call(a);a.G2=null;a.EV=null;a.e5=null;a.bJ=null;a.iB=0;a.jy=0;a.o6=0;a.m8=null;a.qP=null;a.e9=null;}
function BaO(a,b){var c=new Zy();AC$(c,a,b);return c;}
function X$(a,b,c){a.qP=AAn(a,c);b.Bx(a.e5.d_(a.o6,LT(a)));b.IK(a.qP);a.o6=MX(a);return a;}
function AAn(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$$je;if(a.m8!==null&&a.m8.z(b)){if(a.e9===null)return a.qP;c=I();d=0;while(d<a.e9.df()){c.dD(a.e9.l(d));d=d+1|0;}return c.b();}a.m8=b;e=b.ry();f=I();a.e9=null;g=0;h=0;i=0;a:{b:while(true){j=e.data;k=j.length;if(g>=k){if(a.e9!==null&&h!=f.i())a.e9.h4(f.d_(h,f.i()));return f.b();}if(j[g]==92&&!i){i=1;g=g+1|0;}c:{if(i){if(g>=k)break b;f.U(j[g]);i=0;}else if(j[g]!=36)f.U(j[g]);else{if(a.e9===null)a.e9=SG();d:{try{l=new BN;g=g+1|0;OF(l,e,g,1);m=BU(l);if(h==f.i())break d;a.e9.h4(f.d_(h,
f.i()));h=f.i();break d;}catch($$e){$$je=R($$e);if($$je instanceof B5){break a;}else{throw $$e;}}}try{a.e9.h4(Bbu(a,m));n=Gh(a,m);h=h+n.i()|0;f.a(n);break c;}catch($$e){$$je=R($$e);if($$je instanceof B5){break a;}else{throw $$e;}}}}g=g+1|0;}G(C$());}G(W(B(101)));}
function ABg(a){a.iB=0;a.jy=a.e5.i();a.bJ.tI(a.e5,a.iB,a.jy);a.o6=0;a.m8=null;a.bJ.hv=(-1);return a;}
function ABI(a,b){return b.Bx(a.e5.d_(a.o6,a.e5.i()));}
function ACp(a,b){var c;c=A6I();ABg(a);while(Ga(a)){X$(a,c,b);}return (ABI(a,c)).b();}
function Gh(a,b){return a.bJ.BV(b);}
function JJ(a,b){var c,d;c=a.e5.i();if(b>=0&&b<=c){d=AAS(a,b);if(d>=0&&a.bJ.LC()){a.bJ.MH();return 1;}a.bJ.eb=(-1);return 0;}G(Bg(Ji(b)));}
function AAS(a,b){var c;a.bJ.fV();a.bJ.pN(1);a.bJ.G9(b);c=a.EV.cE(b,a.e5,a.bJ);if(c==(-1))a.bJ.d5=1;return c;}
function Ga(a){var b,c;b=a.e5.i();if(!Pg(a))b=a.jy;if(a.bJ.eb>=0&&a.bJ.Cv()==1){a.bJ.eb=a.bJ.pQ();if(a.bJ.pQ()==a.bJ.wz()){c=a.bJ;c.eb=c.eb+1|0;}return a.bJ.eb<=b&&JJ(a,a.bJ.eb)?1:0;}return JJ(a,a.iB);}
function U7(a,b){return a.bJ.lD(b);}
function Pa(a,b){return a.bJ.pc(b);}
function LT(a){return U7(a,0);}
function MX(a){return Pa(a,0);}
function Pg(a){return a.bJ.lI();}
function AC$(a,b,c){var d,e,f,g,h;J(a);a.iB=(-1);a.jy=(-1);a.G2=b;a.EV=b.rN;a.e5=c;a.iB=0;a.jy=a.e5.i();d=new NT;e=a.iB;f=a.jy;g=VJ(b);h=ABV(b);Sn(d,c,e,f,g,h,SI(b));a.bJ=d;}
var T9=D(BB);
function BcL(){var a=new T9();A46(a);return a;}
function A46(a){CQ(a);}
function ATC(a,b,c,d){var e,f,g,h,i;e=d.J();f=b+1|0;if(f>e){d.d5=1;return (-1);}g=c.f(b);if(BY(g)){h=b+2|0;if(h<=e){i=c.f(f);if(GA(g,i))return a.k.e(h,c,d);}}return a.k.e(f,c,d);}
function AHw(a){return B(589);}
function AXj(a,b){a.k=b;}
function A4Z(a){return (-2147483602);}
function AXg(a,b){return 1;}
function ZP(){Q.call(this);this.NW=null;}
function Bb8(a){var b=new ZP();AQA(b,a);return b;}
function AQA(a,b){a.NW=b;Be(a);}
function ASf(a,b){return Uh(b);}
function O3(){var a=this;FN.call(a);a.Am=0.0;a.za=null;}
function Bc7(){var a=new O3();A0V(a);return a;}
function A0V(a){Lv(a);a.Am=67.0;a.za=S();}
function AGr(a){a.p$(1);}
function AQz(a,b){var c;c=a.kx/a.me;a.jA.KE(CH(a.la),CH(a.jP),a.Am,c);a.hs.B4(a.cq,(a.za.M(a.cq)).fB(a.c9),a.ds);a.eK.ch(a.jA);G9(a.eK.c,a.hs.c);if(b){a.hS.ch(a.eK);MY(a.hS.c);a.r2.AK(a.hS);}}
function US(){C.call(this);this.CB=null;}
function BaH(a){var b=new US();A1s(b,a);return b;}
function A1s(a,b){J(a);a.CB=b;}
function A9b(a){A2z(a.CB);}
var VH=D(C4);
function A4F(a){var b=new VH();AG6(b,a);return b;}
function AG6(a,b){AAu(a,b);}
function AK2(a,b){return a.d1.p(EX(En(b)));}
function ATr(a){return ((((I()).a(B(335))).a(!a.rG?B(56):B(57))).a(a.d1.b())).b();}
var Vh=D(T);
function A_S(){var a=new Vh();APJ(a);return a;}
function APJ(a){Bo(a);}
function AUJ(a){var b;b=Bdr(a);b.be=1;return b;}
function MF(){var a=this;BB.call(a);a.gr=null;a.uZ=null;a.k2=0;}
function A82(a,b){var c=new MF();AVn(c,a,b);return c;}
function AVn(a,b,c){CQ(a);a.gr=b;a.k2=c;}
function AMD(a,b){a.k=b;}
function HB(a){if(a.uZ===null)a.uZ=Mg(a.gr);return a.uZ;}
function AP6(a){return (((I()).a(B(590))).a(HB(a))).b();}
function ADh(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;e=d.J();f=0;g=Bc(3);h=(-1);i=(-1);if(b>=e)return (-1);j=b+1|0;k=c.f(b);l=AG7(k);if(l!==null){m=l.data;n=0;if(m.length!=a.k2)return (-1);while(true){if(n>=a.k2)return a.k.e(j,c,d);if(m[n]!=a.gr.data[n])break;n=n+1|0;}return (-1);}o=g.data;o[f]=k;p=k-4352|0;if(p>=0&&p<19){if(j<e){k=c.f(j);h=k-4449|0;}if(h>=0&&h<21){q=j+1|0;o[1]=k;if(q<e){k=c.f(q);i=k-4519|0;}if(i>=0&&i<28){r=q+1|0;o[2]=k;r=a.k2==3&&o[0]==a.gr.data[0]&&o[1]==a.gr.data[1]&&o[2]==a.gr.data[2]
?a.k.e(r,c,d):(-1);return r;}r=a.k2==2&&o[0]==a.gr.data[0]&&o[1]==a.gr.data[1]?a.k.e(q,c,d):(-1);return r;}return (-1);}return (-1);}
function AXh(a,b){var c,d;a:{if(b instanceof MF){c=b;if(!(HB(c)).z(HB(a))){d=0;break a;}}d=1;}return d;}
function ARG(a,b){return 1;}
var Vb=D(T);
function Bbe(){var a=new Vb();A4j(a);return a;}
function A4j(a){Bo(a);}
function A1g(a){return (((CS()).bF(33,64)).bF(91,96)).bF(123,126);}
function Ky(){var a=this;C.call(a);a.fw=null;a.dQ=null;a.r7=0;a.KQ=0;a.up=0;a.kZ=0;a.p4=0;a.tB=0;a.d4=null;}
var BnC=null;function AIT(){AIT=N(Ky);A_i();}
function A2E(a,b,c){var d=new Ky();XF(d,a,b,c);return d;}
function XF(a,b,c,d){AIT();J(a);a.kZ=0;a.p4=0;a.tB=(-1);a.d4=G$();a.KQ=b;a.fw=d;a.dQ=HX(Cg(a.fw.cQ/4|0,c));a.dQ.db();a.r7=Bip.i5();a.up=!b?35048:35044;QY(a);}
function AWx(a){return a.fw;}
function ARK(a){return (CV(a.dQ)*4|0)/a.fw.cQ|0;}
function Wl(a){if(a.p4){Bip.fD(34962,BD(a.dQ),a.dQ,a.up);a.kZ=0;}}
function AWQ(a,b,c,d){a.kZ=1;Oa(b,a.dQ,d,c);a.dQ.cZ(0);a.dQ.cm(d);Wl(a);}
function AQ7(a,b,c){var d;d=Biq;d.QJ(a.tB);ABi(a,b,c);ABm(a,d);a.p4=1;}
function ABi(a,b,c){var d,e,f,g,h,i;d=!a.d4.bS?0:1;a:{e=CU(a.fw);if(d){if(c===null){f=0;while(d&&f<e){g=CB(a.fw,f);h=b.lZ(g.es);d=h!=a.d4.b2(f)?0:1;f=f+1|0;}}else{i=c.data;d=i.length!=a.d4.bS?0:1;f=0;while(d){if(f>=e)break a;d=i[f]!=a.d4.b2(f)?0:1;f=f+1|0;}}}}b:{if(!d){Bio.c$(34962,a.r7);UU(a,b);a.d4.K();f=0;while(true){if(f>=e)break b;g=CB(a.fw,f);if(c!==null){i=c.data;a.d4.iY(i[f]);}else a.d4.iY(b.lZ(g.es));h=a.d4.b2(f);if(h>=0){b.lT(h);b.id(h,g.cK,g.hT,g.im,a.fw.cQ,g.cU);}f=f+1|0;}}}}
function UU(a,b){var c,d,e;if(a.d4===null)return;c=CU(a.fw);d=0;while(d<c){e=a.d4.b2(d);if(e>=0)b.tO(e);d=d+1|0;}}
function ABm(a,b){if(a.kZ){b.c$(34962,a.r7);a.dQ.cm(BD(a.dQ));b.fD(34962,BD(a.dQ),a.dQ,a.up);a.kZ=0;}}
function AHC(a,b,c){var d;d=Biq;d.QJ(0);a.p4=0;}
function QY(a){AIT();BnC.c1();Biq.U9(1,BnC);a.tB=BnC.Li();}
function A_i(){BnC=Fk(1);}
var QO=D();
function ATy(b){$rt_putStderr(b);}
function A79(b){$rt_putStdout(b);}
function Hh(){var a=this;C.call(a);a.bi=null;a.bn=null;a.dh=0.0;a.iL=0.0;a.j7=0.0;a.j2=null;}
function BnD(){var a=new Hh();A0A(a);return a;}
function A0A(a){J(a);a.bi=Bp();a.bn=Sz();a.j2=D2();}
function ALv(a){a.bi.K();a.bn.K();a.j7=0.0;}
function AEp(a){var b,c,d,e,f;b=Gf(a.bi.h+32|0);c=a.bi;d=0;e=c.h;while(d<e){f=c.l(d);b.U(f.e0&65535);d=d+1|0;}b.a(B(591));b.dD(a.j2);b.a(B(438));b.cD(a.dh);b.a(B(438));b.cD(a.iL);b.a(B(438));b.cD(a.j7);return b.b();}
var Mq=D(Dn);
function SV(){var a=this;BZ.call(a);a.of=null;a.IU=null;}
function BcU(a,b){var c=new SV();A8p(c,a,b);return c;}
function A8p(a,b,c){a.IU=b;a.of=c;C7(a);}
function A$0(a,b){a.of.ek(b);}
function AMd(a,b){a.of.ck(b);}
function AMU(a,b,c){return a.of.ct(b,null);}
function AK0(a,b,c){return a.hY(b,c);}
function AA_(){BZ.call(this);this.Oi=null;}
function Ba8(a){var b=new AA_();AYa(b,a);return b;}
function AYa(a,b){a.Oi=b;C7(a);}
function AUr(a,b){}
function AHo(a,b){}
function A9e(a,b,c){return 0;}
var FK=D(0);
function SR(){var a=this;C.call(a);a.nK=null;a.ud=null;a.n8=null;a.qZ=null;}
function BbM(a,b,c,d){var e=new SR();AJm(e,a,b,c,d);return e;}
function AJm(a,b,c,d,e){a.qZ=b;a.nK=c;a.ud=d;a.n8=e;J(a);}
function AIw(a,b){var c,d;if(a.nK.readyState==4){if(a.nK.status!=200)a.ud.ck(a.n8);else{if(NP(a.qZ))(Eh()).gh((((I()).a(B(592))).a(a.n8)).b());c=a.nK.response;d=(DV()).QV(c);a.ud.ct(a.n8,Bfm(c,d));}a.qZ.eu();}}
function A1C(a,b){a.dU(b);}
function SQ(){var a=this;BZ.call(a);a.mB=null;a.qv=null;a.xg=0;a.Dp=null;a.m4=null;}
function Bgb(a,b,c,d,e){var f=new SQ();ARB(f,a,b,c,d,e);return f;}
function ARB(a,b,c,d,e,f){a.m4=b;a.mB=c;a.qv=d;a.xg=e;a.Dp=f;C7(a);}
function A_O(a,b){a.mB.ek(b);}
function A$K(a,b){a.mB.ck(b);}
function AE8(a,b,c){var d,e,f;d=(Qc(a.m4)).Qb();if(a.qv!==null){e=a.qv;d.setAttribute("crossOrigin",$rt_ustr(e));}a.m4.nJ();AGg(d,BcO(a,b,d));if(!a.xg){f=$rt_ustr(b);d.src=f;}else{f=$rt_ustr((((((I()).a(B(593))).a(a.Dp)).a(B(594))).a(SD(c))).b());d.src=f;}return 0;}
function AS7(a,b,c){return a.hY(b,c);}
function SP(){var a=this;C.call(a);a.y$=null;a.Go=null;}
function Bdn(a,b){var c=new SP();AVY(c,a,b);return c;}
function AVY(a,b,c){a.Go=b;a.y$=c;J(a);}
function A70(a,b){a.y$.ek(b.loaded);}
function AXU(a,b){a.dU(b);}
var Lp=D();
var BhU=null;function Bek(){Bek=N(Lp);AVu();}
function AVu(){BhU=Bc((Mi()).data.length);BhU.data[BC(BjZ)]=1;BhU.data[BC(Bj0)]=2;BhU.data[BC(Bj1)]=3;BhU.data[BC(Bj2)]=4;BhU.data[BC(Bj3)]=5;}
function U5(){var a=this;C.call(a);a.pY=null;a.j3=null;a.AB=null;a.p3=null;a.oA=null;a.sj=null;a.M$=null;}
function BaS(){var a=new U5();ADr(a);return a;}
function ADr(a){J(a);a.pY=Bp();a.j3=Bp();a.AB=Bp();a.p3=Bp();a.oA=Bp();a.sj=Bp();a.M$=DG();}
function A8$(a,b){if(!a.sj.iv(b,1))a.sj.F(b);}
function SX(){var a=this;C.call(a);a.nu=null;a.tF=null;a.n7=null;a.tz=null;}
function Bcw(a,b,c,d){var e=new SX();AI$(e,a,b,c,d);return e;}
function AI$(a,b,c,d,e){a.tz=b;a.nu=c;a.tF=d;a.n7=e;J(a);}
function AZk(a,b){if(a.nu.readyState==4){if(a.nu.status!=200)a.tF.ck(a.n7);else{if(NP(a.tz))(Eh()).gh((((I()).a(B(592))).a(a.n7)).b());a.tF.ct(a.n7,$rt_str(a.nu.responseText));}a.tz.eu();}}
function AIo(a,b){a.dU(b);}
function Qw(){Bt.call(this);this.zC=0;}
function A8G(a){var b=new Qw();AK6(b,a);return b;}
function AK6(a,b){Co(a);a.zC=b;}
function AWY(a,b,c,d){var e,f,g,h,i;e=b<d.J()?c.f(b):32;f=!b?32:c.f(b-1|0);g=!d.lI()?d.dI():0;h=e!=32&&!M1(a,e,b,g,c)?0:1;i=f!=32&&!M1(a,f,b-1|0,g,c)?0:1;return h^i^a.zC?(-1):a.k.e(b,c,d);}
function AXd(a,b){return 0;}
function A_u(a){return B(595);}
function M1(a,b,c,d,e){var f;if(!M9(b)&&b!=95){a:{if(F_(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=e.f(c);if(M9(f))return 0;if(F_(f)!=6)return 1;}}return 1;}return 0;}
function Fs(){var a=this;C.call(a);a.Eo=null;a.Ep=null;a.Er=null;a.Es=null;a.q$=null;a.gk=null;a.bw=null;a.bt=null;a.gM=0;a.ph=0;a.nf=0;a.ga=0;a.jU=0;a.hd=0;a.uE=0;a.t5=0;a.d$=0;a.to=0;a.jm=0;a.fG=0;a.c2=null;a.k8=null;a.hH=null;a.rw=0;a.gi=0;a.pn=0.0;a.pG=0.0;a.n3=0.0;a.ow=0.0;a.lS=0;a.cs=null;a.oL=0;a.ov=null;a.jS=null;a.j1=null;a.mE=0;a.B9=null;}
var BnE=null;var BnF=null;var BnG=null;var BnH=null;function LA(){LA=N(Fs);AZ4();}
function BcC(){var a=new Fs();Vx(a);return a;}
function Vx(a){LA();J(a);a.Eo=CM();a.Ep=CM();a.Er=CM();a.Es=CM();a.q$=D2();a.bw=Sz();a.bt=AVc();a.k8=Bp();a.hH=A5R(BiY);a.rw=0;a.pn=0.0;a.pG=1.0;a.n3=0.0;a.ow=1.0;a.lS=0;a.oL=0;a.ov=BL();a.jS=Ph();a.j1=AMi();a.mE=(-1);a.B9=S();}
function RP(b){var c,d,e,f;LA();c=Bp();if(Z(Br(b,O(1)),O(1)))c.F(EB(1,3,B(466)));if(Z(Br(b,O(2)),O(2)))c.F(EB(2,4,B(467)));if(Z(Br(b,O(4)),O(4)))c.F(EB(4,4,B(467)));if(Z(Br(b,O(8)),O(8)))c.F(EB(8,3,B(596)));if(Z(Br(b,O(16)),O(16)))c.F(EB(16,2,B(468)));d=Y(Fc,c.h);e=0;while(true){f=d.data;if(e>=f.length)break;f[e]=c.l(e);e=e+1|0;}return A0Y(d);}
function ATS(a,b){a.Q5(b,(-1));}
function A06(a,b,c){var d,e;if(a.gk!==null)G(Qg(B(545)));a.gk=b;a.bw.K();a.bt.K();a.k8.K();a.ph=0;a.mE=(-1);a.nf=0;a.c2=null;a.gM=b.cQ/4|0;if(!(a.cs!==null&&a.cs.data.length>=a.gM))a.cs=Ca(a.gM);d=DZ(b,1);if(d===null)G(U(B(597)));a.ga=d.cU/4|0;a.jU=d.cK;e=DZ(b,8);a.hd=e===null?(-1):e.cU/4|0;e=DZ(b,256);a.uE=e===null?(-1):e.cU/4|0;e=DZ(b,128);a.t5=e===null?(-1):e.cU/4|0;e=DZ(b,2);a.d$=e===null?(-1):e.cU/4|0;a.to=e!==null?e.cK:0;e=DZ(b,4);a.jm=e===null?(-1):e.cU/4|0;e=DZ(b,16);a.fG=e===null?(-1):e.cU/4|0;a.xU(null);a.x$(null);a.Dj(null);a.gi
=c;a.j1.wR();}
function LH(a){if(a.c2!==null){a.j1.MM(a.c2.f1);(a.j1.GI(a.c2.g1)).em(0.5);a.c2.iV=a.c2.g1.IP();a.j1.wR();a.c2.hm=a.nf;a.c2.g2=a.bt.c3-a.nf|0;a.nf=a.bt.c3;a.c2=null;}}
function AKh(a,b,c){return a.Mc(b,c,A8M());}
function AGE(a,b,c,d){if(a.gk===null)G(Qg(B(546)));LH(a);a.c2=d;a.c2.pO=b;a.c2.hZ=c;a.gi=c;a.k8.F(a.c2);a.xU(null);a.x$(null);a.Dj(null);return a.c2;}
function ALo(a,b){var c,d;LH(a);if(a.gk===null)G(U(B(546)));if(!NV(a.gk,b.gS()))G(U(B(598)));if(Cg(b.v7(),a.gM)<a.bw.Z)G(U((((((((I()).a(B(599))).j(b.v7())).a(B(600))).j(a.gM)).a(B(601))).j(a.bw.Z)).b()));if(b.xe()<a.bt.c3)G(U((((((I()).a(B(602))).j(b.xe())).a(B(601))).j(a.bt.c3)).b()));b.FO(a.bw.R,0,a.bw.Z);b.OO(a.bt.hM,0,a.bt.c3);c=a.k8.bZ();while(c.bC()){d=c.bz();d.b7=b;}a.k8.K();a.gk=null;a.bw.K();a.bt.K();return b;}
function AEm(a){return a.Lt(BeC(1,a.bw.Z/a.gM|0,a.bt.c3,a.gk));}
function AGT(a){return a.gk;}
function AQ1(a){return a.gi;}
function AV1(a,b){var c,d;c=a.hH;d=b===null?0:1;a.rw=d;if(!d){Bv();b=BiY;}c.eR(b);}
function AED(a,b,c,d,e){a.pn=b;a.n3=c;a.pG=d-b;a.ow=e-c;a.lS=DF(b)&&DF(c)&&Dl(d,1.0)&&Dl(e,1.0)?0:1;}
function AHD(a,b){if(b!==null){a.lS=1;a.M0(b.RQ(),b.Sp(),b.Ty(),b.Rq());}else{a.lS=0;a.n3=0.0;a.pn=0.0;a.ow=1.0;a.pG=1.0;}}
function AO9(a,b){a.oL=b===null?0:1;if(!a.oL){a.ov.fx();a.jS.Ax();}else{a.ov.ch(b);((a.jS.D_(b)).CT()).AE();}}
function AIB(a,b){a.bw.D$(Cg(a.gM,b));}
function AXS(a,b){a.bt.Pe(b);}
function AN8(a,b){if(!a.gi)a.hn(4*b|0);else if(a.gi!=1)a.hn(6*b|0);else a.hn(8*b|0);}
function AJy(a){return a.mE<<16>>16;}
function AC1(b,c,d,e){var f,g,h,i,j,k,l;LA();if(d>2){f=b.data;g=BnG;h=f[c];i=c+1|0;j=f[i];k=c+2|0;(g.I(h,j,f[k])).kN(e);f[c]=BnG.n;f[i]=BnG.o;f[k]=BnG.q;}else if(d<=1){f=b.data;f[c]=((BnG.I(f[c],0.0,0.0)).kN(e)).n;}else{f=b.data;g=BnG;l=f[c];k=c+1|0;(g.I(l,f[k],0.0)).kN(e);f[c]=BnG.n;f[k]=BnG.o;}}
function Iz(b,c,d,e){var f,g,h,i,j,k;LA();if(d>2){f=b.data;g=BnG;h=f[c];i=c+1|0;j=f[i];k=c+2|0;((g.I(h,j,f[k])).qW(e)).bU();f[c]=BnG.n;f[i]=BnG.o;f[k]=BnG.q;}else if(d<=1){f=b.data;f[c]=(((BnG.I(f[c],0.0,0.0)).qW(e)).bU()).n;}else{f=b.data;g=BnG;j=f[c];i=c+1|0;((g.I(j,f[i],0.0)).qW(e)).bU();f[c]=BnG.n;f[i]=BnG.o;}}
function RV(a,b,c){var d,e,f,g,h,i,j;d=a.bw.Z;a.bw.rI(b,c,a.gM);e=a.ph;a.ph=e+1|0;a.mE=e;if(a.oL){AC1(a.bw.R,d+a.ga|0,a.jU,a.ov);if(a.hd>=0)Iz(a.bw.R,d+a.hd|0,3,a.jS);if(a.uE>=0)Iz(a.bw.R,d+a.uE|0,3,a.jS);if(a.t5>=0)Iz(a.bw.R,d+a.t5|0,3,a.jS);}f=a.bw.R.data[d+a.ga|0];g=a.jU<=1?0.0:a.bw.R.data[(d+a.ga|0)+1|0];h=a.jU<=2?0.0:a.bw.R.data[(d+a.ga|0)+2|0];a.j1.NS(f,g,h);if(a.rw){if(a.d$>=0){i=a.bw.R.data;j=d+a.d$|0;i[j]=i[j]*a.hH.s;i=a.bw.R.data;j=(d+a.d$|0)+1|0;i[j]=i[j]*a.hH.r;i=a.bw.R.data;j=(d+a.d$|0)+2|0;i[j]
=i[j]*a.hH.t;if(a.to>3){i=a.bw.R.data;j=(d+a.d$|0)+3|0;i[j]=i[j]*a.hH.G;}}else if(a.jm>=0){Zu(a.q$,a.bw.R.data[d+a.jm|0]);a.bw.R.data[d+a.jm|0]=(a.q$.Jk(a.hH)).ny();}}if(a.lS&&a.fG>=0){a.bw.R.data[d+a.fG|0]=a.pn+a.pG*a.bw.R.data[d+a.fG|0];a.bw.R.data[(d+a.fG|0)+1|0]=a.n3+a.ow*a.bw.R.data[(d+a.fG|0)+1|0];}}
function AYR(a,b,c,d,e){if(a.ph>65535)G(U(B(603)));a.cs.data[a.ga]=b.n;if(a.jU>1)a.cs.data[a.ga+1|0]=b.o;if(a.jU>2)a.cs.data[a.ga+2|0]=b.q;if(a.hd>=0){if(c===null)c=(a.B9.M(b)).bU();a.cs.data[a.hd]=c.n;a.cs.data[a.hd+1|0]=c.o;a.cs.data[a.hd+2|0]=c.q;}if(a.d$>=0){if(d===null){Bv();d=BiY;}a.cs.data[a.d$]=d.s;a.cs.data[a.d$+1|0]=d.r;a.cs.data[a.d$+2|0]=d.t;if(a.to>3)a.cs.data[a.d$+3|0]=d.G;}else if(a.jm>0){if(d===null){Bv();d=BiY;}a.cs.data[a.jm]=d.ny();}if(e!==null&&a.fG>=0){a.cs.data[a.fG]=e.eW;a.cs.data[a.fG
+1|0]=e.eV;}RV(a,a.cs,0);return a.mE<<16>>16;}
function AMG(a,b){return a.KZ(!b.q3?null:b.mZ,!b.t4?null:b.pj,!b.ri?null:b.oI,!b.pr?null:b.ke);}
function A1K(a,b,c,d,e){a.hn(4);a.bt.cd(b);a.bt.cd(c);a.bt.cd(d);a.bt.cd(e);}
function A1Q(a,b,c,d,e,f,g){a.hn(6);a.bt.cd(b);a.bt.cd(c);a.bt.cd(d);a.bt.cd(e);a.bt.cd(f);a.bt.cd(g);}
function AW$(a,b,c,d,e,f,g,h,i){a.hn(8);a.bt.cd(b);a.bt.cd(c);a.bt.cd(d);a.bt.cd(e);a.bt.cd(f);a.bt.cd(g);a.bt.cd(h);a.bt.cd(i);}
function AO1(a,b,c,d,e){if(a.gi==4)a.OE(b,c,d,d,e,b);else if(a.gi==1)a.ER(b,c,c,d,d,e,e,b);else{if(a.gi)G(U(B(604)));a.Hq(b,c,d,e);}}
function A6Q(a,b,c,d,e){a.uo(4);a.d2(a.dH(b),a.dH(c),a.dH(d),a.dH(e));}
function ALJ(a,b,c,d,e,f){var g,h,i,j,k;g=(a.Eo.dK(b,f,null,null)).n6(0.0,1.0);h=(a.Ep.dK(c,f,null,null)).n6(1.0,1.0);i=a.Er;j=null;k=null;i=(i.dK(d,f,j,k)).n6(1.0,0.0);k=(a.Es.dK(e,f,null,null)).n6(0.0,0.0);a.NK(g,h,i,k);}
function AHt(a,b,c,d){A6L(a,b,c,d);}
function AZ4(){BnE=AVc();BnF=Sz();BnG=S();BnH=null;}
function Hb(){BH.call(this);this.PW=null;}
var BnI=Ba;function Bb7(){Bb7=N(Hb);AI4();}
function AI4(){BnI=BR(B(605));}
function SW(){var a=this;C.call(a);a.lu=null;a.us=null;a.or=null;a.pE=null;}
function Bdb(a,b,c,d){var e=new SW();A5I(e,a,b,c,d);return e;}
function A5I(a,b,c,d,e){a.pE=b;a.lu=c;a.us=d;a.or=e;J(a);}
function AQy(a,b){var c,d,e,f,g,h;if(a.lu.readyState==4){c=1;if(a.lu.status!=200)a.us.ck(a.or);else{if(NP(a.pE))(Eh()).gh((((I()).a(B(606))).a(a.or)).b());d=a.lu.response;e=(Qc(a.pE)).hu();f=e.pg();g=f.createElement("script");h=f.createTextNode(d);g.appendChild(h);f.body.appendChild(g);c=a.us.ct(a.or,$rt_str(a.lu.responseText))?0:1;}if(c)a.pE.eu();}}
function AZF(a,b){a.dU(b);}
var Jc=D(T);
function Bcq(){var a=new Jc();Rr(a);return a;}
function Rr(a){Bo(a);}
function YX(a){return ((CS()).bF(9,13)).cG(32);}
var Pn=D(DX);
function Bfd(){var a=new Pn();AOl(a);return a;}
function AOl(a){Jh(a);}
var Pp=D(DX);
function Ba5(){var a=new Pp();A09(a);return a;}
function A09(a){Jh(a);}
function Y9(a){return S();}
function AL8(a){return Y9(a);}
var AAH=D();
function Oa(b,c,d,e){var f;f=AQs(c);f.c1();c.cZ(0);f.wA(b,e,d);c.cZ(0);if(!(c instanceof Ft))c.cm(d);else c.cm(d<<2);}
function AQs(b){var c;c=null;if(b instanceof Ft)c=b.sQ();else if(b instanceof DW)c=b;if(c!==null)return c;G(U(B(607)));}
function HX(b){var c;if(!HY())return AVr(Ca(b));c=FV(b*4|0);FH(c,EV());return c.sQ();}
function ML(b){var c;if(!HY())return Ht(Cj(b));c=FV(b);FH(c,EV());return c;}
function AAU(b){var c;if(!HY())return A3T(MW(b));c=FV(b*2|0);FH(c,EV());return c.v6();}
function Fk(b){var c;if(!HY())return A0P(Bc(b));c=FV(b*4|0);FH(c,EV());return c.yK();}
var KN=D(0);
var NM=D(0);
var Kc=D(0);
var Pj=D();
function AMq(a,b,c){a.WH($rt_str(b),Gk(c,"handleEvent"));}
function AMV(a,b,c){a.VU($rt_str(b),Gk(c,"handleEvent"));}
function AEN(a,b){return a.Ms(b);}
function AOm(a,b,c,d){a.Rt($rt_str(b),Gk(c,"handleEvent"),d?1:0);}
function ASv(a,b){return !!a.WK(b);}
function AGd(a){return a.Pb();}
function ADw(a,b,c,d){a.SP($rt_str(b),Gk(c,"handleEvent"),d?1:0);}
function YE(){var a=this;C.call(a);a.gT=null;a.FM=null;}
function Ph(){var a=new YE();ALX(a);return a;}
function ALX(a){J(a);a.gT=Ca(9);a.FM=Ca(9);a.Ax();}
function A4X(a){var b,c;b=a.gT;c=b.data;c[0]=1.0;c[1]=0.0;c[2]=0.0;c[3]=0.0;c[4]=1.0;c[5]=0.0;c[6]=0.0;c[7]=0.0;c[8]=1.0;return a;}
function ALg(a){var b,c;b=a.gT;c=b.data;return c[0]*c[4]*c[8]+c[3]*c[7]*c[2]+c[6]*c[1]*c[5]-c[0]*c[7]*c[5]-c[3]*c[1]*c[8]-c[6]*c[4]*c[2];}
function A5X(a){var b,c,d,e,f,g;b=a.H2();if(b===0.0)G(U(B(608)));c=1.0/b;d=a.FM;e=d.data;f=a.gT;g=f.data;e[0]=g[4]*g[8]-g[5]*g[7];e[1]=g[2]*g[7]-g[1]*g[8];e[2]=g[1]*g[5]-g[2]*g[4];e[3]=g[5]*g[6]-g[3]*g[8];e[4]=g[0]*g[8]-g[2]*g[6];e[5]=g[2]*g[3]-g[0]*g[5];e[6]=g[3]*g[7]-g[4]*g[6];e[7]=g[1]*g[6]-g[0]*g[7];e[8]=g[0]*g[4]-g[1]*g[3];g[0]=c*e[0];g[1]=c*e[1];g[2]=c*e[2];g[3]=c*e[3];g[4]=c*e[4];g[5]=c*e[5];g[6]=c*e[6];g[7]=c*e[7];g[8]=c*e[8];return a;}
function A_r(a,b){var c,d;c=a.gT;d=c.data;d[0]=b.c.data[0];d[1]=b.c.data[1];d[2]=b.c.data[2];d[3]=b.c.data[4];d[4]=b.c.data[5];d[5]=b.c.data[6];d[6]=b.c.data[8];d[7]=b.c.data[9];d[8]=b.c.data[10];return a;}
function AUz(a){var b,c,d,e,f,g,h,i;b=a.gT;c=b.data;d=c[1];e=c[2];f=c[3];g=c[5];h=c[6];i=c[7];c[3]=d;c[6]=e;c[1]=f;c[7]=g;c[2]=h;c[5]=i;return a;}
function T$(){var a=this;G4.call(a);a.Ck=null;a.sH=null;a.xE=null;a.Ca=null;}
function BaE(a,b){var c=new T$();ARF(c,a,b);return c;}
function ARF(a,b,c){R3(a);a.Ck=b;a.sH=c;a.xE=A_5();a.Ca=Bep();}
function A1X(a,b){var c,d,e;c=AHE();d=!!b.xr;c.alpha=d;d=!!b.Fy;c.antialias=d;d=!!b.AJ;c.stencil=d;d=!!b.Ea;c.premultipliedAlpha=d;d=!!b.FW;c.preserveDrawingBuffer=d;e=a.sH;d=e.getContext("webgl",c);return d;}
function A1G(a){return a.sH;}
function AUd(a){return AZq();}
function A3R(a){return a.Ck;}
function A1v(a){var b;b=(a.hu()).pg();return b.createElement("img");}
function A8P(a){return new XMLHttpRequest();}
function A$w(a){return Be1();}
function A96(a){return a.xE;}
function AU3(a){return a.Ca;}
var Pf=D();
function Cu(){C.call(this);this.c=null;}
var BnJ=null;var BnK=null;var BnL=null;var BnM=null;var BnN=null;var BnO=null;var BnP=null;var BnQ=null;var BnR=null;var BnS=null;var BnT=null;function CC(){CC=N(Cu);AVL();}
function BL(){var a=new Cu();Tm(a);return a;}
function Tm(a){CC();J(a);a.c=Ca(16);a.c.data[0]=1.0;a.c.data[5]=1.0;a.c.data[10]=1.0;a.c.data[15]=1.0;}
function A_C(a,b){return a.Ey(b.c);}
function AFG(a,b){var c;c=b.data;a.c.data[0]=c[0];a.c.data[1]=c[1];a.c.data[2]=c[2];a.c.data[3]=c[3];a.c.data[4]=c[4];a.c.data[5]=c[5];a.c.data[6]=c[6];a.c.data[7]=c[7];a.c.data[8]=c[8];a.c.data[9]=c[9];a.c.data[10]=c[10];a.c.data[11]=c[11];a.c.data[12]=c[12];a.c.data[13]=c[13];a.c.data[14]=c[14];a.c.data[15]=c[15];return a;}
function A97(a,b){return a.HZ(b.dl,b.dj,b.dk,b.d7);}
function AZ8(a,b,c,d,e){return a.NJ(0.0,0.0,0.0,b,c,d,e);}
function A6E(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t;i=e*2.0;j=f*2.0;k=g*2.0;l=h*i;m=h*j;n=h*k;o=e*i;p=e*j;q=e*k;r=f*j;s=f*k;t=g*k;a.c.data[0]=1.0-(r+t);a.c.data[4]=p-n;a.c.data[8]=q+m;a.c.data[12]=b;a.c.data[1]=p+n;a.c.data[5]=1.0-(o+t);a.c.data[9]=s-l;a.c.data[13]=c;a.c.data[2]=q-m;a.c.data[6]=s+l;a.c.data[10]=1.0-(o+r);a.c.data[14]=d;a.c.data[3]=0.0;a.c.data[7]=0.0;a.c.data[11]=0.0;a.c.data[15]=1.0;return a;}
function AWL(a,b,c,d){return a.JV(b.n,b.o,b.q,c.dl,c.dj,c.dk,c.d7,d.n,d.o,d.q);}
function ATs(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o,p,q,r,s,t,u,v,w;l=e*2.0;m=f*2.0;n=g*2.0;o=h*l;p=h*m;q=h*n;r=e*l;s=e*m;t=e*n;u=f*m;v=f*n;w=g*n;a.c.data[0]=i*(1.0-(u+w));a.c.data[4]=j*(s-q);a.c.data[8]=k*(t+p);a.c.data[12]=b;a.c.data[1]=i*(s+q);a.c.data[5]=j*(1.0-(r+w));a.c.data[9]=k*(v-o);a.c.data[13]=c;a.c.data[2]=i*(t-p);a.c.data[6]=j*(v+o);a.c.data[10]=k*(1.0-(r+u));a.c.data[14]=d;a.c.data[3]=0.0;a.c.data[7]=0.0;a.c.data[11]=0.0;a.c.data[15]=1.0;return a;}
function ANb(a,b){CC();BnJ.data[0]=a.c.data[0]*b.c.data[0]+a.c.data[4]*b.c.data[1]+a.c.data[8]*b.c.data[2]+a.c.data[12]*b.c.data[3];BnJ.data[4]=a.c.data[0]*b.c.data[4]+a.c.data[4]*b.c.data[5]+a.c.data[8]*b.c.data[6]+a.c.data[12]*b.c.data[7];BnJ.data[8]=a.c.data[0]*b.c.data[8]+a.c.data[4]*b.c.data[9]+a.c.data[8]*b.c.data[10]+a.c.data[12]*b.c.data[11];BnJ.data[12]=a.c.data[0]*b.c.data[12]+a.c.data[4]*b.c.data[13]+a.c.data[8]*b.c.data[14]+a.c.data[12]*b.c.data[15];BnJ.data[1]=a.c.data[1]*b.c.data[0]+a.c.data[5]
*b.c.data[1]+a.c.data[9]*b.c.data[2]+a.c.data[13]*b.c.data[3];BnJ.data[5]=a.c.data[1]*b.c.data[4]+a.c.data[5]*b.c.data[5]+a.c.data[9]*b.c.data[6]+a.c.data[13]*b.c.data[7];BnJ.data[9]=a.c.data[1]*b.c.data[8]+a.c.data[5]*b.c.data[9]+a.c.data[9]*b.c.data[10]+a.c.data[13]*b.c.data[11];BnJ.data[13]=a.c.data[1]*b.c.data[12]+a.c.data[5]*b.c.data[13]+a.c.data[9]*b.c.data[14]+a.c.data[13]*b.c.data[15];BnJ.data[2]=a.c.data[2]*b.c.data[0]+a.c.data[6]*b.c.data[1]+a.c.data[10]*b.c.data[2]+a.c.data[14]*b.c.data[3];BnJ.data[6]
=a.c.data[2]*b.c.data[4]+a.c.data[6]*b.c.data[5]+a.c.data[10]*b.c.data[6]+a.c.data[14]*b.c.data[7];BnJ.data[10]=a.c.data[2]*b.c.data[8]+a.c.data[6]*b.c.data[9]+a.c.data[10]*b.c.data[10]+a.c.data[14]*b.c.data[11];BnJ.data[14]=a.c.data[2]*b.c.data[12]+a.c.data[6]*b.c.data[13]+a.c.data[10]*b.c.data[14]+a.c.data[14]*b.c.data[15];BnJ.data[3]=a.c.data[3]*b.c.data[0]+a.c.data[7]*b.c.data[1]+a.c.data[11]*b.c.data[2]+a.c.data[15]*b.c.data[3];BnJ.data[7]=a.c.data[3]*b.c.data[4]+a.c.data[7]*b.c.data[5]+a.c.data[11]*b.c.data[6]
+a.c.data[15]*b.c.data[7];BnJ.data[11]=a.c.data[3]*b.c.data[8]+a.c.data[7]*b.c.data[9]+a.c.data[11]*b.c.data[10]+a.c.data[15]*b.c.data[11];BnJ.data[15]=a.c.data[3]*b.c.data[12]+a.c.data[7]*b.c.data[13]+a.c.data[11]*b.c.data[14]+a.c.data[15]*b.c.data[15];return a.Ey(BnJ);}
function AHN(a){a.c.data[0]=1.0;a.c.data[4]=0.0;a.c.data[8]=0.0;a.c.data[12]=0.0;a.c.data[1]=0.0;a.c.data[5]=1.0;a.c.data[9]=0.0;a.c.data[13]=0.0;a.c.data[2]=0.0;a.c.data[6]=0.0;a.c.data[10]=1.0;a.c.data[14]=0.0;a.c.data[3]=0.0;a.c.data[7]=0.0;a.c.data[11]=0.0;a.c.data[15]=1.0;return a;}
function A7c(a){return a.c.data[0]*a.c.data[5]*a.c.data[10]+a.c.data[4]*a.c.data[9]*a.c.data[2]+a.c.data[8]*a.c.data[1]*a.c.data[6]-a.c.data[0]*a.c.data[9]*a.c.data[6]-a.c.data[4]*a.c.data[1]*a.c.data[10]-a.c.data[8]*a.c.data[5]*a.c.data[2];}
function AE4(a,b,c,d,e){var f,g,h,i,j;a.fx();f=1.0/AQO(d*0.017453292519943295/2.0);g=c+b;h=b-c;i=g/h;j=2.0*c*b/h;a.c.data[0]=f/e;a.c.data[1]=0.0;a.c.data[2]=0.0;a.c.data[3]=0.0;a.c.data[4]=0.0;a.c.data[5]=f;a.c.data[6]=0.0;a.c.data[7]=0.0;a.c.data[8]=0.0;a.c.data[9]=0.0;a.c.data[10]=i;a.c.data[11]=(-1.0);a.c.data[12]=0.0;a.c.data[13]=0.0;a.c.data[14]=j;a.c.data[15]=0.0;return a;}
function A3Y(a,b,c,d,e){a.zf(b,b+d,c,c+e,0.0,1.0);return a;}
function A4y(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a.fx();h=c-b;i=2.0/h;j=e-d;k=2.0/j;l=g-f;m=(-2.0)/l;n= -(c+b)/h;o= -(e+d)/j;p= -(g+f)/l;a.c.data[0]=i;a.c.data[1]=0.0;a.c.data[2]=0.0;a.c.data[3]=0.0;a.c.data[4]=0.0;a.c.data[5]=k;a.c.data[6]=0.0;a.c.data[7]=0.0;a.c.data[8]=0.0;a.c.data[9]=0.0;a.c.data[10]=m;a.c.data[11]=0.0;a.c.data[12]=n;a.c.data[13]=o;a.c.data[14]=p;a.c.data[15]=1.0;return a;}
function AF_(a,b,c,d){a.fx();a.c.data[12]=b;a.c.data[13]=c;a.c.data[14]=d;return a;}
function AWt(a,b,c){if(c===0.0){a.fx();return a;}CC();return a.Gv(BnK.ws(b,c));}
function AIk(a,b,c){CC();(BnM.M(b)).bU();(BnN.M(b)).bU();(BnN.iC(c)).bU();((BnO.M(BnN)).iC(BnM)).bU();a.fx();a.c.data[0]=BnN.n;a.c.data[4]=BnN.o;a.c.data[8]=BnN.q;a.c.data[1]=BnO.n;a.c.data[5]=BnO.o;a.c.data[9]=BnO.q;a.c.data[2]= -BnM.n;a.c.data[6]= -BnM.o;a.c.data[10]= -BnM.q;return a;}
function AZZ(a,b,c,d){CC();(BnP.M(c)).gl(b);a.QI(BnP,d);a.hC(BnQ.IY( -b.n, -b.o, -b.q));return a;}
function AFk(a,b){b.n=a.c.data[12];b.o=a.c.data[13];b.q=a.c.data[14];return b;}
function OZ(b,c){var d,e,f,g;CC();d=c.data;e=b.data;f=Ca(16);g=f.data;g[0]=e[0]*d[0]+e[4]*d[1]+e[8]*d[2]+e[12]*d[3];g[4]=e[0]*d[4]+e[4]*d[5]+e[8]*d[6]+e[12]*d[7];g[8]=e[0]*d[8]+e[4]*d[9]+e[8]*d[10]+e[12]*d[11];g[12]=e[0]*d[12]+e[4]*d[13]+e[8]*d[14]+e[12]*d[15];g[1]=e[1]*d[0]+e[5]*d[1]+e[9]*d[2]+e[13]*d[3];g[5]=e[1]*d[4]+e[5]*d[5]+e[9]*d[6]+e[13]*d[7];g[9]=e[1]*d[8]+e[5]*d[9]+e[9]*d[10]+e[13]*d[11];g[13]=e[1]*d[12]+e[5]*d[13]+e[9]*d[14]+e[13]*d[15];g[2]=e[2]*d[0]+e[6]*d[1]+e[10]*d[2]+e[14]*d[3];g[6]=e[2]*d[4]
+e[6]*d[5]+e[10]*d[6]+e[14]*d[7];g[10]=e[2]*d[8]+e[6]*d[9]+e[10]*d[10]+e[14]*d[11];g[14]=e[2]*d[12]+e[6]*d[13]+e[10]*d[14]+e[14]*d[15];g[3]=e[3]*d[0]+e[7]*d[1]+e[11]*d[2]+e[15]*d[3];g[7]=e[3]*d[4]+e[7]*d[5]+e[11]*d[6]+e[15]*d[7];g[11]=e[3]*d[8]+e[7]*d[9]+e[11]*d[10]+e[15]*d[11];g[15]=e[3]*d[12]+e[7]*d[13]+e[11]*d[14]+e[15]*d[15];X(f,0,b,0,16);}
function Ul(b){var c;CC();c=b.data;return c[3]*c[6]*c[9]*c[12]-c[2]*c[7]*c[9]*c[12]-c[3]*c[5]*c[10]*c[12]+c[1]*c[7]*c[10]*c[12]+c[2]*c[5]*c[11]*c[12]-c[1]*c[6]*c[11]*c[12]-c[3]*c[6]*c[8]*c[13]+c[2]*c[7]*c[8]*c[13]+c[3]*c[4]*c[10]*c[13]-c[0]*c[7]*c[10]*c[13]-c[2]*c[4]*c[11]*c[13]+c[0]*c[6]*c[11]*c[13]+c[3]*c[5]*c[8]*c[14]-c[1]*c[7]*c[8]*c[14]-c[3]*c[4]*c[9]*c[14]+c[0]*c[7]*c[9]*c[14]+c[1]*c[4]*c[11]*c[14]-c[0]*c[5]*c[11]*c[14]-c[2]*c[5]*c[8]*c[15]+c[1]*c[6]*c[8]*c[15]+c[2]*c[4]*c[9]*c[15]-c[0]*c[6]*c[9]*c[15]
-c[1]*c[4]*c[10]*c[15]+c[0]*c[5]*c[10]*c[15];}
function QR(b){var c,d,e,f,g;CC();c=Ca(16);d=Ul(b);if(d===0.0)return 0;e=c.data;f=b.data;e[0]=f[9]*f[14]*f[7]-f[13]*f[10]*f[7]+f[13]*f[6]*f[11]-f[5]*f[14]*f[11]-f[9]*f[6]*f[15]+f[5]*f[10]*f[15];e[4]=f[12]*f[10]*f[7]-f[8]*f[14]*f[7]-f[12]*f[6]*f[11]+f[4]*f[14]*f[11]+f[8]*f[6]*f[15]-f[4]*f[10]*f[15];e[8]=f[8]*f[13]*f[7]-f[12]*f[9]*f[7]+f[12]*f[5]*f[11]-f[4]*f[13]*f[11]-f[8]*f[5]*f[15]+f[4]*f[9]*f[15];e[12]=f[12]*f[9]*f[6]-f[8]*f[13]*f[6]-f[12]*f[5]*f[10]+f[4]*f[13]*f[10]+f[8]*f[5]*f[14]-f[4]*f[9]*f[14];e[1]=f[13]
*f[10]*f[3]-f[9]*f[14]*f[3]-f[13]*f[2]*f[11]+f[1]*f[14]*f[11]+f[9]*f[2]*f[15]-f[1]*f[10]*f[15];e[5]=f[8]*f[14]*f[3]-f[12]*f[10]*f[3]+f[12]*f[2]*f[11]-f[0]*f[14]*f[11]-f[8]*f[2]*f[15]+f[0]*f[10]*f[15];e[9]=f[12]*f[9]*f[3]-f[8]*f[13]*f[3]-f[12]*f[1]*f[11]+f[0]*f[13]*f[11]+f[8]*f[1]*f[15]-f[0]*f[9]*f[15];e[13]=f[8]*f[13]*f[2]-f[12]*f[9]*f[2]+f[12]*f[1]*f[10]-f[0]*f[13]*f[10]-f[8]*f[1]*f[14]+f[0]*f[9]*f[14];e[2]=f[5]*f[14]*f[3]-f[13]*f[6]*f[3]+f[13]*f[2]*f[7]-f[1]*f[14]*f[7]-f[5]*f[2]*f[15]+f[1]*f[6]*f[15];e[6]
=f[12]*f[6]*f[3]-f[4]*f[14]*f[3]-f[12]*f[2]*f[7]+f[0]*f[14]*f[7]+f[4]*f[2]*f[15]-f[0]*f[6]*f[15];e[10]=f[4]*f[13]*f[3]-f[12]*f[5]*f[3]+f[12]*f[1]*f[7]-f[0]*f[13]*f[7]-f[4]*f[1]*f[15]+f[0]*f[5]*f[15];e[14]=f[12]*f[5]*f[2]-f[4]*f[13]*f[2]-f[12]*f[1]*f[6]+f[0]*f[13]*f[6]+f[4]*f[1]*f[14]-f[0]*f[5]*f[14];e[3]=f[9]*f[6]*f[3]-f[5]*f[10]*f[3]-f[9]*f[2]*f[7]+f[1]*f[10]*f[7]+f[5]*f[2]*f[11]-f[1]*f[6]*f[11];e[7]=f[4]*f[10]*f[3]-f[8]*f[6]*f[3]+f[8]*f[2]*f[7]-f[0]*f[10]*f[7]-f[4]*f[2]*f[11]+f[0]*f[6]*f[11];e[11]=f[8]*f[5]
*f[3]-f[4]*f[9]*f[3]-f[8]*f[1]*f[7]+f[0]*f[9]*f[7]+f[4]*f[1]*f[11]-f[0]*f[5]*f[11];e[15]=f[4]*f[9]*f[2]-f[8]*f[5]*f[2]+f[8]*f[1]*f[6]-f[0]*f[9]*f[6]-f[4]*f[1]*f[10]+f[0]*f[5]*f[10];g=1.0/d;f[0]=e[0]*g;f[4]=e[4]*g;f[8]=e[8]*g;f[12]=e[12]*g;f[1]=e[1]*g;f[5]=e[5]*g;f[9]=e[9]*g;f[13]=e[13]*g;f[2]=e[2]*g;f[6]=e[6]*g;f[10]=e[10]*g;f[14]=e[14]*g;f[3]=e[3]*g;f[7]=e[7]*g;f[11]=e[11]*g;f[15]=e[15]*g;return 1;}
function Y2(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;CC();e=b.data;f=c.data;g=d+0|0;h=f[g]*e[3];i=d+1|0;j=h+f[i]*e[7];k=d+2|0;l=1.0/(j+f[k]*e[11]+e[15]);m=(f[g]*e[0]+f[i]*e[4]+f[k]*e[8]+e[12])*l;n=(f[g]*e[1]+f[i]*e[5]+f[k]*e[9]+e[13])*l;o=(f[g]*e[2]+f[i]*e[6]+f[k]*e[10]+e[14])*l;f[g]=m;f[i]=n;f[k]=o;}
function G9(b,c){CC();OZ(b,c);}
function TY(b,c,d,e,f){var g;CC();g=0;while(g<e){Y2(b,c,d);d=d+f|0;g=g+1|0;}}
function MY(b){CC();return QR(b);}
function A2w(a,b,c,d){CC();BnJ.data[0]=1.0;BnJ.data[4]=0.0;BnJ.data[8]=0.0;BnJ.data[12]=b;BnJ.data[1]=0.0;BnJ.data[5]=1.0;BnJ.data[9]=0.0;BnJ.data[13]=c;BnJ.data[2]=0.0;BnJ.data[6]=0.0;BnJ.data[10]=1.0;BnJ.data[14]=d;BnJ.data[3]=0.0;BnJ.data[7]=0.0;BnJ.data[11]=0.0;BnJ.data[15]=1.0;G9(a.c,BnJ);return a;}
function AWg(a,b,c){if(c===0.0)return a;CC();BnK.ws(b,c);return a.Mq(BnK);}
function APV(a,b){CC();b.Ka(BnJ);G9(a.c,BnJ);return a;}
function A5n(a){var b,c;a:{b:{if(!Dl(a.c.data[0],1.0))break b;if(!Dl(a.c.data[5],1.0))break b;if(!Dl(a.c.data[10],1.0))break b;b=a.c.data[4];if(!DF(b))break b;if(!DF(a.c.data[8]))break b;if(!DF(a.c.data[1]))break b;if(!DF(a.c.data[9]))break b;b=a.c.data[2];if(!DF(b))break b;if(DF(a.c.data[6])){c=0;break a;}}c=1;}return c;}
function AVL(){BnJ=Ca(16);BnK=AWh();BnL=AWh();BnM=S();BnN=S();BnO=S();BnP=S();BnQ=BL();BnR=S();BnS=S();BnT=S();}
var AC0=D(Bm);
function A9L(){var a=new AC0();A5M(a);return a;}
function A5M(a){Cx(a);}
var AAk=D(Ed);
function BfC(a,b,c){var d=new AAk();AZ9(d,a,b,c);return d;}
function AZ9(a,b,c,d){Nr(a,b,c,d);}
function AEy(a,b,c,d){var e;e=a.k.e(b,c,d);if(e>=0)return e;return a.Y.e(b,c,d);}
var AAD=D(T);
function BfT(){var a=new AAD();AFi(a);return a;}
function AFi(a){Bo(a);}
function AKD(a){return Bar(a);}
function ZU(){var a=this;C.call(a);a.Bt=0;a.E2=0;a.Ek=null;}
function Bbu(a,b){var c=new ZU();AHv(c,a,b);return c;}
function AHv(a,b,c){a.Ek=b;a.E2=c;J(a);a.Bt=a.E2;}
function AMh(a){return Gh(a.Ek,a.Bt);}
function Gz(){C.call(this);this.eZ=null;}
var BhV=null;var BnU=null;var BnV=null;function EH(){EH=N(Gz);ANn();}
function AXG(){var a=new Gz();UN(a);return a;}
function QZ(){EH();if(BnV===null)BnV=AXG();return BnV;}
function UN(a){EH();J(a);a.eZ=AXR(0,8);a.G7();}
function A9w(a,b,c){return a.Gg(b,c,0.0,0);}
function A90(a,b,c,d,e){var f,g,$$je;if(b.dB!=(-1))G(W(B(609)));b.ij=CA(E_(CE(),O(1000000)),BgJ(c*1000.0));b.sL=BgJ(d*1000.0);b.dB=e;f=a.eZ;Eq(f);a:{try{a.eZ.F(b);Ch(f);}catch($$e){$$je=R($$e);g=$$je;break a;}M8();return b;}Ch(f);G(g);}
function AST(a){var b,c,d,$$je;EH();b=BhV;Eq(b);a:{b:{try{if(!BhV.iv(a,1))break b;Ch(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}c:{try{BhV.F(a);if(BnU!==null)break c;d=(El()).hu();BnU=Bc4(d.P_());break c;}catch($$e){$$je=R($$e);c=$$je;break a;}}try{M8();Ch(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}Ch(b);G(c);}
function ARr(a,b,c){var d,e,f,g,h,$$je;d=a.eZ;Eq(d);a:{try{e=0;f=a.eZ.h;while(e<f){g=a.eZ.l(e);if(Hq(g.ij,b))c=T5(c,D6(g.ij,b));else{if(g.dB!=(-1)){if(!g.dB)g.dB=(-1);Bg1.Mw(g);}if(g.dB==(-1)){a.eZ.su(e);e=e+(-1)|0;f=f+(-1)|0;}else{g.ij=CA(b,g.sL);c=T5(c,g.sL);if(g.dB>0)g.dB=g.dB-1|0;}}e=e+1|0;}Ch(d);}catch($$e){$$je=R($$e);h=$$je;break a;}return c;}Ch(d);G(h);}
function AOo(a,b){var c,d,e,f,g,$$je;c=a.eZ;Eq(c);a:{try{d=0;e=a.eZ.h;while(d<e){f=a.eZ.l(d);f.ij=CA(f.ij,b);d=d+1|0;}Ch(c);}catch($$e){$$je=R($$e);g=$$je;break a;}return;}Ch(c);G(g);}
function M8(){var b,c,$$je;EH();b=BhV;Eq(b);a:{try{BnU.nU(0);Ch(b);}catch($$e){$$je=R($$e);c=$$je;break a;}return;}Ch(b);G(c);}
function ACD(b,c){EH();return (QZ()).FX(b,c);}
function ANn(){BhV=DL(1);BnV=AXG();}
var Du=D(C3);
function Ec(){var a=new Du();AV_(a);return a;}
function DH(a){var b=new Du();AL3(b,a);return b;}
function AV_(a){FX(a);}
function AL3(a,b){ACW(a,b);}
function XZ(){var a=this;C.call(a);a.pS=null;a.N7=0;a.g4=0;a.gx=0;}
function K6(a,b){var c=new XZ();AND(c,a,b);return c;}
function AND(a,b,c){J(a);a.gx=1;a.pS=b;a.N7=c;}
function A2f(a){if(!a.gx)G(U(B(610)));return a.g4>=a.pS.h?0:1;}
function AX$(a){var b,c;if(a.g4>=a.pS.h)G(Bda(Ji(a.g4)));if(!a.gx)G(U(B(610)));b=a.pS.P.data;c=a.g4;a.g4=c+1|0;return b[c];}
function AAV(){Jo.call(this);this.LH=null;}
function Bcm(a,b,c,d,e){var f=new AAV();A8T(f,a,b,c,d,e);return f;}
function A8T(a,b,c,d,e,f){a.LH=b;Tt(a,c,d,e,f);}
var Wj=D();
function R2(){var a=this;Da.call(a);a.tP=0;a.pK=0;}
function Bdi(a,b,c){var d=new R2();A5_(d,a,b,c);return d;}
function A5_(a,b,c,d){GD(a,b,0.5,0.5);a.tP=c;a.pK=d;}
function ASb(a,b,c,d,e,f,g,h){var i,j,k,l;if(a.tP){if((c+2|0)>d){if(h.tJ())i=null;else{Bj();i=BgY;}return i;}j=b.data;a.tP=0;k=c+1|0;l=j[c];if(l==(-1)){if(j[k]!=(-2))c=k+(-1)|0;else{c=k+1|0;a.pK=1;}}else if(l!=(-2))c=k+(-1)|0;else if(j[k]!=(-1))c=k+(-1)|0;else{c=k+1|0;a.pK=0;}}return !a.pK?RB(a,b,c,d,e,f,g,h):ABP(a,b,c,d,e,f,g,h);}
function ABP(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=null;a:{while(c<d){if(f>=g)break a;if((c+2|0)>d){if(h.dO(2))break a;Bj();i=BgY;break a;}j=b.data;k=c+1|0;l=j[c]&255;c=k+1|0;m=j[k]&255;n=(l|m<<8)&65535;if(!BY(n)){if(BG(n)){c=c+(-2)|0;i=BV(2);break a;}j=e.data;k=f+1|0;j[f]=n;f=k;}else{if((c+2|0)>=d){if(!h.dO(4)){Bj();i=BgY;}c=c+(-2)|0;break a;}k=c+1|0;o=j[c]&255;c=k+1|0;k=j[k]&255;p=(o|k<<8)&65535;if(!BG(p)){c=c+(-4)|0;i=BV(4);break a;}if((f+2|0)>g){if(h.ef(2))break a;Bj();i=BgX;break a;}j=e.data;k=f+1|0;j[f]
=n;f=k+1|0;j[k]=p;}}}h.el(c);h.dR(f);return i;}
function RB(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=null;a:{while(c<d){if(f>=g)break a;if((c+2|0)>d){if(h.dO(2))break a;Bj();i=BgY;break a;}j=b.data;k=c+1|0;l=j[c]&255;c=k+1|0;m=j[k]&255;n=(m|l<<8)&65535;if(!BY(n)){if(BG(n)){c=c+(-2)|0;i=BV(2);break a;}j=e.data;k=f+1|0;j[f]=n;f=k;}else{if((c+2|0)>=d){if(!h.dO(4)){Bj();i=BgY;}c=c+(-2)|0;break a;}k=c+1|0;o=j[c]&255;c=k+1|0;k=j[k]&255;p=(k|o<<8)&65535;if(!BG(p)){c=c+(-4)|0;i=BV(4);break a;}if((f+2|0)>g){if(h.ef(2))break a;Bj();i=BgX;break a;}j=e.data;k=f+1|0;j[f]
=n;f=k+1|0;j[k]=p;}}}h.el(c);h.dR(f);return i;}
var ABf=D(Jw);
function Bbj(){var a=new ABf();A2n(a);return a;}
function A2n(a){Xg(a);}
function Yn(a,b){var c;c=BeQ(a,b);return c;}
function AMQ(a,b,c){return setTimeout(BP(Yn(a,b),"onTimer"),c);}
function AL2(a,b){clearInterval(b);}
function AKH(a,b){clearTimeout(b);}
function A2_(b,c){Zk(b,c);}
var SS=D(T);
function BaD(){var a=new SS();AM0(a);return a;}
function AM0(a){Bo(a);}
function APT(a){return BbW(a);}
function Wo(){var a=this;C.call(a);a.nz=null;a.pT=0;a.h2=null;a.mi=null;}
function Bc2(a){var b=new Wo();A6l(b,a);return b;}
function BnW(a,b){var c=new Wo();ACT(c,a,b);return c;}
function A6l(a,b){ACT(a,b,1);}
function ACT(a,b,c){J(a);a.nz=b;a.pT=c;}
function A1x(a){if(Bll)return K6(a.nz,a.pT);if(a.h2===null){a.h2=K6(a.nz,a.pT);a.mi=K6(a.nz,a.pT);}if(a.h2.gx){a.mi.g4=0;a.mi.gx=1;a.h2.gx=0;return a.mi;}a.h2.g4=0;a.h2.gx=1;a.mi.gx=0;return a.h2;}
var AAP=D(T);
function Bai(){var a=new AAP();ANl(a);return a;}
function ANl(a){Bo(a);}
function AUx(a){return Baq(a);}
var ZZ=D(B5);
function GX(){var a=new ZZ();A7Y(a);return a;}
function DR(a){var b=new ZZ();A5F(b,a);return b;}
function A7Y(a){E$(a);}
function A5F(a,b){Mj(a,b);}
function YM(){var a=this;C.call(a);a.mZ=null;a.q3=0;a.pj=null;a.t4=0;a.oI=null;a.ri=0;a.ke=null;a.pr=0;}
function CM(){var a=new YM();A_z(a);return a;}
function A_z(a){J(a);a.mZ=S();a.pj=Cl(0.0,1.0,0.0);a.oI=CP(1.0,1.0,1.0,1.0);a.ke=Iu();}
function AOW(a){a.mZ.I(0.0,0.0,0.0);a.pj.I(0.0,1.0,0.0);a.oI.hV(1.0,1.0,1.0,1.0);a.ke.ix(0.0,0.0);}
function ALS(a,b,c,d,e){a.fV();a.q3=b===null?0:1;if(a.q3)a.mZ.M(b);a.t4=c===null?0:1;if(a.t4)a.pj.M(c);a.ri=d===null?0:1;if(a.ri)a.oI.eR(d);a.pr=e===null?0:1;if(a.pr)a.ke.k7(e);return a;}
function AL$(a,b,c){a.ke.ix(b,c);a.pr=1;return a;}
function Z$(){var a=this;C.call(a);a.no=0.0;a.ox=null;}
function Rp(a,b){var c=new Z$();A9o(c,a,b);return c;}
function A9o(a,b,c){J(a);a.no=b;a.ox=c;}
var OG=D(GB);
function BnX(){var a=new OG();T1(a);return a;}
function T1(a){UL(a);AMc(a);}
function A8B(a,b){var c;c=new Float32Array(b);return c;}
function ATX(a,b){var c;c=new Int32Array(b);return c;}
function AMu(a,b){var c;c=new Int16Array(b);return c;}
function AWf(a,b){var c;c=new Int8Array(b);return c;}
function AGR(a,b){var c;c=new Uint8Array(b);return c;}
function Jj(){BB.call(this);this.g9=0;}
function A1R(a){var b=new Jj();AOf(b,a);return b;}
function AOf(a,b){CQ(a);a.g9=b;}
function AXw(a,b){a.k=b;}
function ADt(a,b,c,d){var e,f,g,h,i;e=d.J();f=b+1|0;g=B9(f,e);if(g>0){d.d5=1;return (-1);}h=c.f(b);if(g<0){i=c.f(f);if(BG(i))return (-1);}if(a.g9!=h)return (-1);return a.k.e(f,c,d);}
function A53(a,b,c,d){var e,f,g;if(!(c instanceof BN))return F3(a,b,c,d);e=c;f=d.J();while(true){if(b>=f)return (-1);g=e.eH(a.g9,b);if(g<0)return (-1);b=g+1|0;if(b<f&&BG(e.f(b))){b=g+2|0;continue;}if(a.k.e(b,c,d)>=0)break;}return g;}
function AQe(a,b,c,d,e){var f,g,h,i;if(!(d instanceof BN))return Gb(a,b,c,d,e);f=d;g=e.J();a:{while(true){if(c<b)return (-1);h=f.mK(a.g9,c);if(h<0)break a;if(h<b)break a;i=h+1|0;if(i<g&&BG(f.f(i))){c=h+(-1)|0;continue;}if(a.k.e(i,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function A$J(a){return (((I()).a(B(101))).U(a.g9)).b();}
function AHa(a,b){if(b instanceof Dz)return 0;if(b instanceof Dx)return 0;if(b instanceof C4)return 0;if(b instanceof Dv)return 0;if(b instanceof Je)return 0;if(!(b instanceof Jj))return 1;return b.g9!=a.g9?0:1;}
function A6b(a,b){return 1;}
var Rl=D(Ef);
function Ba1(a,b,c,d){var e=new Rl();A51(e,a,b,c,d);return e;}
function A51(a,b,c,d,e){K0(a,b,c,d,e);}
function A7N(a,b,c,d){var e,f,g,h,i;e=a.gg.jd();f=a.gg.iJ();g=0;while(true){if(g>=e){a:{while(true){h=a.k.e(b,c,d);if(h>=0)break;if((b+a.bv.cg()|0)<=d.J()){h=a.bv.bH(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.bv.cg()|0)>d.J()){d.d5=1;return (-1);}i=a.bv.bH(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
var Rm=D(Bt);
function ARC(){var a=new Rm();AHm(a);return a;}
function AHm(a){Co(a);}
function A26(a,b,c,d){if(b&&!(d.jB()&&b==d.dI()))return (-1);return a.k.e(b,c,d);}
function A1W(a,b){return 0;}
function ANh(a){return B(611);}
function YT(){C.call(this);this.vv=null;}
function BcG(a){var b=new YT();ASS(b,a);return b;}
function ASS(a,b){J(a);a.vv=b;}
function Bbo(b){return BcG(b);}
function A2r(a,b){a.vv.nP(b);}
function ATq(a,b){a.vv.OQ(b);}
function DC(){var a=this;C.call(a);a.n=0.0;a.o=0.0;a.q=0.0;}
var Bm4=null;var Bm5=null;var Bm6=null;var BnY=null;var BnZ=null;function H1(){H1=N(DC);AEL();}
function S(){var a=new DC();ZJ(a);return a;}
function Cl(a,b,c){var d=new DC();Rt(d,a,b,c);return d;}
function ZJ(a){H1();J(a);}
function Rt(a,b,c,d){H1();J(a);a.I(b,c,d);}
function A3h(a,b,c,d){a.n=b;a.o=c;a.q=d;return a;}
function AHd(a,b){return a.I(b.n,b.o,b.q);}
function ARx(a,b){return a.AR(b.n,b.o,b.q);}
function ALI(a,b,c,d){return a.I(a.n+b,a.o+c,a.q+d);}
function ANs(a,b){return a.JI(b.n,b.o,b.q);}
function AQY(a,b,c,d){return a.I(a.n-b,a.o-c,a.q-d);}
function A7K(a,b){return a.I(a.n*b,a.o*b,a.q*b);}
function TV(b,c,d){H1();return FR(b*b+c*c+d*d);}
function A_t(a){return FR(a.n*a.n+a.o*a.o+a.q*a.q);}
function AGA(a){return a.n*a.n+a.o*a.o+a.q*a.q;}
function AZp(a,b){var c,d,e;c=b.n-a.n;d=b.o-a.o;e=b.q-a.q;return FR(c*c+d*d+e*e);}
function AIQ(a,b){var c,d,e;c=b.n-a.n;d=b.o-a.o;e=b.q-a.q;return c*c+d*d+e*e;}
function A_P(a){var b;b=a.ua();if(b!==0.0&&b!==1.0)return a.em(1.0/FR(b));return a;}
function ART(a,b){return a.n*b.n+a.o*b.o+a.q*b.q;}
function AYM(a,b){return a.I(a.o*b.q-a.q*b.o,a.q*b.n-a.n*b.q,a.n*b.o-a.o*b.n);}
function A3M(a,b,c,d){return a.I(a.o*d-a.q*c,a.q*b-a.n*d,a.n*c-a.o*b);}
function AQM(a,b){var c,d;c=b.c;d=c.data;return a.I(a.n*d[0]+a.o*d[4]+a.q*d[8]+d[12],a.n*d[1]+a.o*d[5]+a.q*d[9]+d[13],a.n*d[2]+a.o*d[6]+a.q*d[10]+d[14]);}
function AV6(a,b){var c,d;c=b.gT;d=c.data;return a.I(a.n*d[0]+a.o*d[3]+a.q*d[6],a.n*d[1]+a.o*d[4]+a.q*d[7],a.n*d[2]+a.o*d[5]+a.q*d[8]);}
function AHq(a,b,c){H1();BnZ.Pp(b,c);return a.kN(BnZ);}
function A_J(a){return a.n===0.0&&a.o===0.0&&a.q===0.0?1:0;}
function ANV(a,b,c){a.n=a.n+c*(b.n-a.n);a.o=a.o+c*(b.o-a.o);a.q=a.q+c*(b.q-a.q);return a;}
function AFs(a){return ((((((((I()).a(B(22))).cD(a.n)).a(B(23))).cD(a.o)).a(B(23))).cD(a.q)).a(B(24))).b();}
function A7R(a){var b;b=31+CF(a.n)|0;b=(31*b|0)+CF(a.o)|0;b=(31*b|0)+CF(a.q)|0;return b;}
function AG_(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(Ck(a)!==Ck(b))return 0;c=b;if(CF(a.n)!=CF(c.n))return 0;if(CF(a.o)!=CF(c.o))return 0;if(CF(a.q)==CF(c.q))return 1;return 0;}
function AIV(a){a.n=0.0;a.o=0.0;a.q=0.0;return a;}
function AEL(){Bm4=Cl(1.0,0.0,0.0);Bm5=Cl(0.0,1.0,0.0);Bm6=Cl(0.0,0.0,1.0);BnY=Cl(0.0,0.0,0.0);BnZ=BL();}
function GC(){var a=this;C.call(a);a.eW=0.0;a.eV=0.0;}
var Bn0=null;var Bn1=null;var Bn2=null;function AOL(){AOL=N(GC);AX7();}
function Iu(){var a=new GC();Sc(a);return a;}
function Wa(a,b){var c=new GC();Ty(c,a,b);return c;}
function Sc(a){AOL();J(a);}
function Ty(a,b,c){AOL();J(a);a.eW=b;a.eV=c;}
function AXC(a,b){a.eW=b.eW;a.eV=b.eV;return a;}
function AC9(a,b,c){a.eW=b;a.eV=c;return a;}
function AO0(a,b){var c,d;c=b.eW-a.eW;d=b.eV-a.eV;return FR(c*c+d*d);}
function AX7(){Bn0=Wa(1.0,0.0);Bn1=Wa(0.0,1.0);Bn2=Wa(0.0,0.0);}
function EY(){var a=this;C.call(a);a.v$=null;a.tG=Ba;a.p7=Ba;a.r3=Ba;}
function Bn3(a,b,c,d){var e=new EY();Oo(e,a,b,c,d);return e;}
function Bn4(a,b,c){var d=new EY();Vj(d,a,b,c);return d;}
function CK(a,b){var c=new EY();G1(c,a,b);return c;}
function Bk(a){var b=new EY();ARw(b,a);return b;}
function Oo(a,b,c,d,e){J(a);a.v$=b;a.tG=c;a.p7=d;a.r3=e;}
function Vj(a,b,c,d){Oo(a,b,c,d,Ba);}
function G1(a,b,c){Oo(a,b,Ba,Ba,c);}
function ARw(a,b){Vj(a,b,Ba,Ba);}
function AOD(a,b,c,d){var e,f;e=d!==null&&d.da!==null?Eg(d.da):Ba;f=d!==null&&d.cw!==null?Eg(d.cw):Ba;return Z(Br(e,a.tG),a.tG)&&Z(Br(f,a.p7),a.p7)&&Z(Br(BQ(e,f),a.r3),a.r3)?1:0;}
function GV(){var a=this;C.call(a);a.cp=null;a.bS=0;a.nb=0;}
function G$(){var a=new GV();AJW(a);return a;}
function Bn5(a,b){var c=new GV();Ui(c,a,b);return c;}
function AJW(a){Ui(a,1,16);}
function Ui(a,b,c){J(a);a.nb=b;a.cp=Bc(c);}
function A2b(a,b){var c,d,e;c=a.cp;d=c.data;if(a.bS==d.length)c=a.t1(Bf(8,a.bS*1.75|0));d=c.data;e=a.bS;a.bS=e+1|0;d[e]=b;}
function AQQ(a,b){if(b<a.bS)return a.cp.data[b];G(Bg((((((I()).a(B(428))).j(b)).a(B(429))).j(a.bS)).b()));}
function AZM(a){a.bS=0;}
function ANN(a){if(a.cp.data.length!=a.bS)a.t1(a.bS);return a.cp;}
function AN4(a,b){var c;if(b<0)G(W((((I()).a(B(435))).j(b)).b()));c=a.bS+b|0;if(c>a.cp.data.length)a.t1(Bf(Bf(8,c),a.bS*1.75|0));return a.cp;}
function AE7(a,b){var c,d,e;c=Bc(b);d=c.data;e=a.cp;X(e,0,c,0,Bq(a.bS,d.length));a.cp=c;return c;}
function AMj(a){var b,c,d,e,f;if(!a.nb)return MN(a);b=a.cp;c=1;d=0;e=a.bS;while(d<e){f=b.data;c=(c*31|0)+f[d]|0;d=d+1|0;}return c;}
function A9u(a,b){var c,d,e,f,g,h;if(b===a)return 1;if(!a.nb)return 0;if(!(b instanceof GV))return 0;c=b;if(!c.nb)return 0;d=a.bS;if(d!=c.bS)return 0;e=a.cp;f=c.cp;g=0;while(g<d){h=f.data;if(e.data[g]!=h[g])return 0;g=g+1|0;}return 1;}
function A2V(a){var b,c,d,e;if(!a.bS)return B(437);b=a.cp;c=b.data;d=ATn(32);d.ly(91);d.Ac(c[0]);e=1;while(e<a.bS){d.CK(B(438));d.Ac(c[e]);e=e+1|0;}d.ly(93);return d.b();}
function H0(){var a=this;C.call(a);a.iM=null;a.un=null;a.Ad=null;a.Fb=null;a.Bq=null;a.EC=null;a.zI=null;a.s9=null;a.iK=null;a.tC=0;a.sP=0;a.EW=null;a.lr=null;a.HF=null;a.o7=null;a.kM=null;a.f7=null;a.wo=null;}
var Bn6=null;function Bn7(a,b){var c=new H0();ABr(c,a,b);return c;}
function AWo(){return Bn6;}
function ABr(a,b,c){var d;J(a);Gl();a.iK=BkT;a.tC=(-1);a.sP=1;a.HF=DG();a.o7=Bp();a.kM=Bp();d=c.Id();Blh=d;a.s9=d.hu();a.zI=b;a.EC=c;a.Bq=d.ET();a.wo=d.Ny();Ra(a);}
function Ra(a){var b,c;Bn6=(El()).Ng();Gp(B(612),B(101));if((Bn6.windows?1:0)==1)Gp(B(555),B(613));else if((Bn6.macOS?1:0)==1)Gp(B(555),B(614));else if((Bn6.linux?1:0)!=1)Gp(B(555),B(615));else Gp(B(555),B(616));ALV(BdW(El()));b=CD();a.f7=b.HS();if(a.f7.M7(B(617))){a.f7=a.f7.uG(B(618),B(101));a.f7=a.f7.uG(B(619),B(101));}a.lr=BfL((((I()).a(a.f7)).a(B(620))).b());c=Bcg();a.lr.MD(B(621));a.iM=BaB(a.EC);a.un=BaG(a.Bq);a.Ad=BdF(a.lr);a.EW=BfA();PC(a);ACY(a);Bg1=a;Bil=a.iM;Bio=a.iM.vK();Bip=a.iM.vK();Bh7=a.un;Bin
=a.Ad;a.s9.vH(a);}
function A3f(a){var b,c,$$je;b=a.iK;a:{try{b:{BdL();switch(BkS.data[BC(b)]){case 1:if((CD()).KU())break b;Gl();a.iK=BkW;break b;case 2:case 3:break;case 4:Gl();a.iK=BkU;break b;default:break b;}Z9(a,a.zI);}}catch($$e){$$je=R($$e);if($$je instanceof Db){c=$$je;break a;}else{throw $$e;}}a.s9.vH(a);return;}c.FF();G(c);}
function Z9(a,b){var c,d,e,f;a.iM.f6();c=Bil.bo();d=Bil.bl();if(!(c==a.tC&&d==a.sP)){a.tC=c;a.sP=d;Bio.oK(0,0,c,d);e=a.iK;Gl();if(e===BkU){a.iK=BkV;b.w4();}b.QN(c,d);}a.kM.qA(a.o7);a.o7.K();f=0;while(f<a.kM.h){(a.kM.l(f)).fe();f=f+1|0;}a.kM.K();e=a.iM;e.s0=CA(e.s0,O(1));b.Oh();a.un.fV();}
function PC(a){a.lr.kn(B(622),BdR(a));}
function ACY(a){a.wo.Pf(a);}
function ANj(a){return a.lr;}
function AFA(a,b,c){a.EW.qD(b,c);}
function A5o(a){Vy();return Bh0;}
function A3x(a,b){a.o7.F(b);}
function AKP(a,b){}
function AET(b){return b.f7;}
function AKj(b,c){b.Fb=c;return c;}
function A9v(b){return b.Fb;}
function Ij(){BH.call(this);this.hl=null;}
var Bl0=Ba;function JD(){JD=N(Ij);A1b();}
function Bba(){var a=new Ij();JK(a);return a;}
function Bey(a){var b=new Ij();R$(b,a);return b;}
function JK(a){JD();Fb(a,Bl0);a.hl=DL(1);}
function R$(a,b){JD();JK(a);a.hl.qA(b.hl);}
function A5f(a){return Bey(a);}
function ANL(a){var b,c,d;b=F2(a);c=a.hl.bZ();while(c.bC()){d=c.bz();b=(1229*b|0)+(d!==null?d.bp():0)|0;}return b;}
function A8e(a){return a.QT();}
function A1b(){Bl0=BR(B(623));}
function Df(){var a=this;Ha.call(a);a.N2=0;a.I9=0;a.Nj=0;a.NF=0;a.OV=0;a.Is=0;a.Ov=0;a.ve=0;a.Qp=0;a.Qt=0;a.HB=0;a.NN=0;a.KV=0;a.Oq=0;a.CY=0;a.Iv=0;a.Jo=0;a.GY=0;a.LE=0;a.GV=0;a.Hj=0;a.JD=0;a.Pi=0;a.QC=0;a.Nn=0;a.G5=0;a.O0=0;a.L2=0;a.MT=0;a.Lg=0;a.Np=0;a.EY=0;a.GS=0;a.Gx=0;a.vm=0;a.xY=0;a.z4=0;a.sg=0;a.zu=0;a.sb=0;a.Cf=0;a.tR=0;a.wD=0;a.tZ=0;a.y6=0;a.E$=0;a.wg=0;a.yo=0;a.EH=0;a.vJ=0;a.yV=0;a.En=0;a.jQ=0;a.xu=0;a.vM=0;a.mb=0;a.ho=0;a.wm=0;a.Ft=0;a.tm=0;a.ld=0;a.eX=0;a.vC=0;a.zV=0;a.EM=0;a.vi=0;a.zc=0;a.BJ=0;a.lG
=0;a.fu=0;a.DV=0;a.PV=0;a.Jq=null;a.cy=null;a.b$=null;a.b4=null;a.rJ=null;a.k$=Ba;a.Dm=Ba;a.hk=null;a.IZ=null;a.vV=0.0;a.gZ=0;a.Lz=null;}
var Bn8=null;var Bn9=null;var Bn$=Ba;var Bn_=0;var Boa=0;var Bob=Ba;var Boc=null;function CR(){CR=N(Df);AQx();}
function BaV(a,b){var c=new Df();Xe(c,a,b);return c;}
function Bod(a,b,c){var d=new Df();L7(d,a,b,c);return d;}
function Boe(a,b,c,d,e){var f=new Df();Kx(f,a,b,c,d,e);return f;}
function Bof(a,b,c){var d=new Df();Mx(d,a,b,c);return d;}
function Yi(){CR();if(Bn8===null)Bn8=(Bin.oc(B(624))).vN();return Bn8;}
function So(){CR();if(Bn9===null)Bn9=(Bin.oc(B(625))).vN();return Bn9;}
function Xe(a,b,c){CR();L7(a,b,c,ZI(b,c));}
function L7(a,b,c,d){CR();Kx(a,b,c,d,c.p8===null?Yi():c.p8,c.uT===null?So():c.uT);}
function Kx(a,b,c,d,e,f){CR();Mx(a,b,c,AIU((((I()).a(d)).a(e)).b(),(((I()).a(d)).a(f)).b()));}
function Mx(a,b,c,d){var e,f,g,h,i;CR();ABb(a);a.vm=a.b0(Bk(B(626)));a.xY=a.b0(Bk(B(627)));a.z4=a.b0(Bk(B(628)));a.sg=a.b0(Bk(B(629)));a.zu=a.b0(Bk(B(630)));a.sb=a.b0(Bk(B(631)));a.Cf=a.b0(Bk(B(632)));a.tR=a.b0(Bk(B(633)));a.wD=a.b0(Bk(B(634)));a.tZ=a.b0(Bk(B(635)));a.y6=a.b0(Bk(B(636)));a.E$=a.b0(Bk(B(637)));a.wg=a.b0(Bk(B(638)));a.yo=a.b0(Bk(B(639)));a.EH=a.b0(Bk(B(640)));a.vJ=a.b0(Bk(B(641)));a.yV=a.b0(Bk(B(642)));a.En=a.b0(Bk(B(643)));a.Jq=APj();a.IZ=Ph();a.Lz=S();e=KD(b);a.hk=c;a.bh=d;f=b.cw===null?0:1;a:
{b:{a.fu=f;ABF();if(!Ct(e,BjM)){if(!a.fu)break b;g=BjM;if(!Ct(e,g))break b;}f=1;break a;}f=0;}a.DV=f;a.PV=a.fu&&b.cw.iU!==null?1:0;a.rJ=b;a.k$=BQ(Eg(e),Bob);a.Dm=NQ(b.cS.b7.gS());a.cy=Y(Hz,a.fu&&c.mr>0?c.mr:0);h=0;while(h<a.cy.data.length){a.cy.data[h]=AJI();h=h+1|0;}a.b$=Y(OA,a.fu&&c.l$>0?c.l$:0);h=0;while(h<a.b$.data.length){a.b$.data[h]=Be7();h=h+1|0;}a.b4=Y(KI,a.fu&&c.nq>0?c.nq:0);h=0;while(h<a.b4.data.length){a.b4.data[h]=A_R();h=h+1|0;}if(!c.rY&&Dw(Br(Bn$,a.k$),a.k$))G(U(((((I()).a(B(644))).Nk(a.k$)).a(B(24))).b()));if
(b.dJ!==null&&b.dJ.data.length>c.gX)G(U((((((I()).a(B(645))).j(b.dJ.data.length)).a(B(646))).j(c.gX)).b()));Bfh();i=Bog;BbX();a.N2=a.bf(i,Bhi);a.I9=a.bf(Boh,Bhj);a.Nj=a.bf(Boi,Bhk);a.NF=a.bf(Boj,Bhl);a.OV=a.bf(Bok,Bhm);a.Is=a.bf(Bol,Bhn);a.Ov=a.bf(Bom,Bho);a.ve=a.b0(Bk(B(647)));a.Qp=a.bf(Bon,Bhp);a.Qt=a.bf(Boo,Bhq);a.HB=a.bf(Bop,Bhr);a.NN=a.bf(Boq,Bhs);a.KV=b.dJ!==null&&c.gX>0?a.bf(Bor,Ben(c.gX)):(-1);a.Oq=a.bf(Bos,Bht);a.CY=a.b0(Bot);a.Iv=a.bf(Bou,Bhu);a.Jo=a.bf(Bov,Bhv);a.GY=a.bf(Bow,Bhw);a.LE=a.bf(Box,Bhx);a.GV
=a.bf(Boy,Bhy);a.Hj=a.bf(Boz,Bhz);a.JD=a.bf(BoA,BhA);a.Pi=a.bf(BoB,BhB);a.QC=a.bf(BoC,BhC);a.Nn=a.bf(BoD,BhD);a.G5=a.bf(BoE,BhE);a.O0=a.bf(BoF,BhF);a.L2=a.bf(BoG,BhG);a.MT=a.bf(BoH,BhH);a.Lg=a.bf(BoI,BhI);a.Np=a.bf(BoJ,BhJ);a.EY=a.b0(BoK);a.GS=!a.fu?(-1):a.bf(BoL,Bfl(c.mr,c.l$));a.Gx=!a.DV?(-1):a.bf(BoM,BhK);}
function AXx(a){var b;b=a.bh;a.bh=null;a.MF(b,a.rJ);a.rJ=null;a.jQ=B1(a,a.vm);a.xu=B1(a,a.vm)-a.jQ|0;a.vM=B1(a,a.xY)-a.jQ|0;a.mb=B1(a,a.z4)-a.jQ|0;if(a.mb<0)a.mb=0;a.ho=B1(a,a.sg);a.wm=B1(a,a.sg)-a.ho|0;a.Ft=B1(a,a.zu)-a.ho|0;a.tm=!Ic(a,a.sb)?(-1):B1(a,a.sb)-a.ho|0;a.ld=B1(a,a.Cf)-a.ho|0;if(a.ld<0)a.ld=0;a.eX=B1(a,a.tR);a.vC=B1(a,a.tR)-a.eX|0;a.zV=B1(a,a.wD)-a.eX|0;a.EM=B1(a,a.y6)-a.eX|0;a.vi=!Ic(a,a.tZ)?(-1):B1(a,a.tZ)-a.eX|0;a.zc=B1(a,a.E$)-a.eX|0;a.BJ=B1(a,a.wg)-a.eX|0;a.lG=B1(a,a.yo)-a.eX|0;if(a.lG<0)a.lG
=0;}
function Er(b,c){CR();return Dw(Br(b,c),c)?0:1;}
function TL(b,c){CR();return Z(Br(b,c),Ba)?0:1;}
function KD(b){CR();Boc.K();if(b.cw!==null)F7(Boc,b.cw);if(b.da!==null)F7(Boc,b.da);return Boc;}
function Sg(b){var c;CR();c=Ba;if(b.cw!==null)c=BQ(c,Eg(b.cw));if(b.da!==null)c=BQ(c,Eg(b.da));return c;}
function ZI(b,c){var d,e,f,g,h,i,j,k;CR();d=KD(b);e=B(101);f=Eg(d);g=IM(b.cS.b7.gS());if(Er(g,O(1)))e=(((I()).a(e)).a(B(648))).b();if(TL(g,O(6)))e=(((I()).a(e)).a(B(649))).b();if(Er(g,O(256)))e=(((I()).a(e)).a(B(650))).b();if(Er(g,O(128)))e=(((I()).a(e)).a(B(651))).b();if(Er(g,O(8)))e=(((I()).a(e)).a(B(652))).b();if(!(!Er(g,O(8))&&!Er(g,O(384)))&&b.cw!==null){h=(((I()).a(e)).a(B(653))).b();h=(((I()).a(h)).a(B(654))).b();h=(((((I()).a(h)).a(B(655))).j(c.mr)).a(B(324))).b();h=(((((I()).a(h)).a(B(656))).j(c.l$)).a(B(324))).b();e
=(((((I()).a(h)).a(B(657))).j(c.nq)).a(B(324))).b();Ce();if(Ct(d,BmD))e=(((I()).a(e)).a(B(658))).b();if(b.cw.iU!==null)e=(((I()).a(e)).a(B(659))).b();ABF();if(Ct(d,BjM))e=(((I()).a(e)).a(B(660))).b();}i=CU(b.cS.b7.gS());j=0;while(j<i){k=CB(b.cS.b7.gS(),j);if(k.fn==64)e=(((((I()).a(e)).a(B(661))).j(k.jT)).a(B(662))).b();else if(k.fn==16)e=(((((I()).a(e)).a(B(663))).j(k.jT)).a(B(662))).b();j=j+1|0;}GO();if(Z(Br(f,BjQ),BjQ))e=(((I()).a(e)).a(B(664))).b();B2();if(Z(Br(f,Bnk),Bnk)){h=(((I()).a(e)).a(B(665))).b();e
=(((I()).a(h)).a(B(666))).b();}if(Z(Br(f,Bnn),Bnn)){h=(((I()).a(e)).a(B(667))).b();e=(((I()).a(h)).a(B(668))).b();}if(Z(Br(f,Bm9),Bm9)){h=(((I()).a(e)).a(B(669))).b();e=(((I()).a(h)).a(B(670))).b();}if(Z(Br(f,Bm7),Bm7)){h=(((I()).a(e)).a(B(671))).b();e=(((I()).a(h)).a(B(672))).b();}if(Z(Br(f,Bm8),Bm8)){h=(((I()).a(e)).a(B(673))).b();e=(((I()).a(h)).a(B(674))).b();}if(Z(Br(f,Bm_),Bm_)){h=(((I()).a(e)).a(B(675))).b();e=(((I()).a(h)).a(B(676))).b();}Ce();if(Z(Br(f,Bmx),Bmx))e=(((I()).a(e)).a(B(677))).b();if(Z(Br(f,
Bmy),Bmy))e=(((I()).a(e)).a(B(678))).b();if(Z(Br(f,BmA),BmA))e=(((I()).a(e)).a(B(679))).b();if(Z(Br(f,BmB),BmB))e=(((I()).a(e)).a(B(680))).b();ET();if(Z(Br(f,Bmb),Bmb))e=(((I()).a(e)).a(B(681))).b();if(Z(Br(f,Bmc),Bmc))e=(((I()).a(e)).a(B(682))).b();if(b.dJ!==null&&c.gX>0)e=(((((I()).a(e)).a(B(683))).j(c.gX)).a(B(324))).b();return e;}
function A3U(a,b){var c,d,e,f;if(b.dJ!==null&&b.dJ.data.length>a.hk.gX)return 0;a:{c=Sg(b);if(Z(a.k$,BQ(c,Bob))){d=a.Dm;e=b.cS.b7;if(Z(d,NQ(e.gS()))&&(b.cw===null?0:1)==a.fu){f=1;break a;}}f=0;}return f;}
function A6t(a,b){return b instanceof Df&&a.PM(b)?1:0;}
function ASU(a,b){return b!==a?0:1;}
function AGQ(a,b,c){var d,e,f,g,h,i,j;X2(a,b,c);d=a.cy.data;e=d.length;f=0;while(f<e){g=d[f];g.xO(0.0,0.0,0.0,0.0,(-1.0),0.0);f=f+1|0;}d=a.b$.data;e=d.length;f=0;while(f<e){h=d[f];h.Ij(0.0,0.0,0.0,0.0,0.0,0.0,0.0);f=f+1|0;}d=a.b4.data;e=d.length;f=0;while(f<e){i=d[f];i.Pz(0.0,0.0,0.0,0.0,0.0,0.0,0.0,(-1.0),0.0,0.0,1.0,0.0);f=f+1|0;}a.gZ=0;if(Ic(a,a.ve)){e=a.ve;j=a.vV+Bil.Fe();a.vV=j;Fn(a,e,j);}}
function A$L(a,b,c){GO();if(!Ct(c,BjQ))a.cY.xk(0,770,771);a.If(c);if(a.fu)a.J6(b,c);Vu(a,b,c);}
function AEg(a){WK(a);}
function A2I(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a.hk.uW!=(-1))c=a.hk.uW;else{CR();c=Bn_;}if(a.hk.p5!=(-1))d=a.hk.p5;else{CR();d=Boa;}e=0.0;f=1.0;g=1;h=Kb(b);while(h.bC()){i=h.bz();j=i.dc;if(Us(j)){k=a.cY;l=i;k.xk(1,l.Kq,l.K8);Fn(a,a.CY,l.HY);}else{AGI();if(Z(Br(j,BmN),BmN))c=i.Ia;else{ET();if(Z(Br(j,Bmc),Bmc))Fn(a,a.EY,i.mo);else{AJt();if(Z(Br(j,BlQ),BlQ)){m=i;d=m.MI;e=m.KF;f=m.I7;g=m.OM;}else if(!a.hk.rY)G(U((((I()).a(B(684))).a(i.b())).b()));}}}}a.cY.H8(c);a.cY.Ma(d,e,f);a.cY.M8(g);}
function A3q(a,b,c){var d,e,f,g,h,i,j,k,l;d=b.cw;JD();e=HK(c,F(Ij),Bl0);f=e!==null?e.hl:null;A3P();g=HK(c,F(Hp),Bli);h=g!==null?g.Ec:null;Bb7();i=HK(c,F(Hb),BnI);j=i!==null?i.PW:null;a:{if(a.jQ>=0){k=0;b:while(true){if(k>=a.cy.data.length)break a;c:{if(f!==null&&k<f.h){if(a.gZ&&a.cy.data[k].EF(f.l(k)))break c;a.cy.data[k].Jg(f.l(k));}else{if(a.gZ&&a.cy.data[k].bk.s===0.0&&a.cy.data[k].bk.r===0.0&&a.cy.data[k].bk.t===0.0)break c;a.cy.data[k].bk.hV(0.0,0.0,0.0,1.0);}l=a.jQ+Cg(k,a.mb)|0;a.bh.jh(l+a.xu|0,a.cy.data[k].bk.s,
a.cy.data[k].bk.r,a.cy.data[k].bk.t);a.bh.jh(l+a.vM|0,a.cy.data[k].fd.n,a.cy.data[k].fd.o,a.cy.data[k].fd.q);if(a.mb<=0)break b;}k=k+1|0;}}}d:{if(a.ho>=0){k=0;e:while(true){if(k>=a.b$.data.length)break d;f:{if(h!==null&&k<h.h){if(a.gZ&&a.b$.data[k].F6(h.l(k)))break f;a.b$.data[k].Lu(h.l(k));}else{if(a.gZ&&a.b$.data[k].dx===0.0)break f;a.b$.data[k].dx=0.0;}l=a.ho+Cg(k,a.ld)|0;a.bh.jh(l+a.wm|0,a.b$.data[k].bk.s*a.b$.data[k].dx,a.b$.data[k].bk.r*a.b$.data[k].dx,a.b$.data[k].bk.t*a.b$.data[k].dx);a.bh.jh(l+a.Ft
|0,a.b$.data[k].eD.n,a.b$.data[k].eD.o,a.b$.data[k].eD.q);if(a.tm>=0)a.bh.kc(l+a.tm|0,a.b$.data[k].dx);if(a.ld<=0)break e;}k=k+1|0;}}}g:{if(a.eX>=0){k=0;h:while(true){if(k>=a.b4.data.length)break g;i:{if(j!==null&&k<j.h){if(a.gZ&&a.b4.data[k].Ik(j.l(k)))break i;a.b4.data[k].Kc(j.l(k));}else{if(a.gZ&&a.b4.data[k].eg===0.0)break i;a.b4.data[k].eg=0.0;}l=a.eX+Cg(k,a.lG)|0;a.bh.jh(l+a.vC|0,a.b4.data[k].bk.s*a.b4.data[k].eg,a.b4.data[k].bk.r*a.b4.data[k].eg,a.b4.data[k].bk.t*a.b4.data[k].eg);a.bh.sq(l+a.zV|0,a.b4.data[k].hE);a.bh.sq(l
+a.EM|0,a.b4.data[k].h_);a.bh.kc(l+a.zc|0,a.b4.data[k].iZ);a.bh.kc(l+a.BJ|0,a.b4.data[k].jf);if(a.vi>=0)a.bh.kc(l+a.vi|0,a.b4.data[k].eg);if(a.lG<=0)break h;}k=k+1|0;}}}Ce();if(Ct(c,BmD))Fv(a,a.EH,(BA(c,BmD)).dX);if(d!==null&&d.iU!==null){D1(a,a.vJ,d.iU.Xs());ZE(a,a.yV,d.iU.PY());Fn(a,a.En,1.0/(2.0*(d.iU.PY()).eU.bo()));}a.gZ=1;}
function AQx(){var b,c;Bn8=null;Bn9=null;GO();b=BjQ;B2();c=BQ(b,Bnk);Ce();c=BQ(BQ(c,Bmx),Bmy);ET();Bn$=BQ(c,Bmb);Bn_=1029;Boa=515;AGI();c=BmN;AJt();Bob=BQ(c,BlQ);Boc=ATE();}
function KI(){var a=this;DP.call(a);a.hE=null;a.h_=null;a.eg=0.0;a.iZ=0.0;a.jf=0.0;}
function A_R(){var a=new KI();A6m(a);return a;}
function A6m(a){HV(a);a.hE=S();a.h_=S();}
function A2H(a,b){return a.Hl(b.bk,b.hE,b.h_,b.eg,b.iZ,b.jf);}
function A5l(a,b,c,d,e,f,g){if(b!==null)a.bk.eR(b);if(c!==null)a.hE.M(c);if(d!==null)(a.h_.M(d)).bU();a.eg=e;a.iZ=f;a.jf=g;return a;}
function A$l(a,b,c,d,e,f,g,h,i,j,k,l,m){a.bk.hV(b,c,d,1.0);a.hE.I(e,f,g);(a.h_.I(h,i,j)).bU();a.eg=k;a.iZ=l;a.jf=m;return a;}
function ALn(a,b){var c,d,e,f,g;a:{b:{if(b!==null){if(b===a)break b;if(a.bk.z(b.bk)&&a.hE.z(b.hE)){c=a.h_;d=b.h_;if(c.z(d)&&Dl(a.eg,b.eg)&&Dl(a.iZ,b.iZ)){e=a.jf;f=b.jf;if(Dl(e,f))break b;}}}g=0;break a;}g=1;}return g;}
function Xv(){C.call(this);this.FH=0;}
function BfA(){var a=new Xv();AHS(a);return a;}
function AHS(a){J(a);a.FH=2;}
function A25(a,b,c){if(a.FH>=1)(TG()).gh(((((I()).a(b)).a(B(8))).a(c)).b());}
var Me=D(Dn);
function BbA(){var a=new Me();A9d(a);return a;}
function A9d(a){Jt(a);}
var L8=D(FU);
var BoN=null;function AQa(){AQa=N(L8);A6F();}
function Ba3(a){var b=new L8();R_(b,a);return b;}
function BeM(a){var b=new L8();UC(b,a);return b;}
function R_(a,b){AQa();Jp(a);a.dZ(AAx(b.de()),1);}
function UC(a,b){AQa();Jp(a);}
function A6F(){BoN=BeM(0);}
function AAx(b){var otherJSObj=Bullet.wrapPointer(b,Bullet.btCollisionConfiguration);var jsObj=new Bullet.btCollisionDispatcher(otherJSObj);return Bullet.getPointer(jsObj);}
function AA6(){var a=this;E5.call(a);a.g7=null;a.g0=null;a.lR=0;}
function BeY(a){var b=new AA6();AX2(b,a);return b;}
function AX2(a,b){Op(a,b);}
function A0f(a){O_(a);a.g7=a.P;a.lR=a.lR+1|0;return a.P;}
function AX0(a){var b,c;a.lR=Bf(0,a.lR-1|0);if(a.g7===null)return;a:{if(a.g7!==a.P&&!a.lR){a.g0=a.g7;b=0;c=a.g0.data.length;while(true){if(b>=c)break a;a.g0.data[b]=null;b=b+1|0;}}}a.g7=null;}
function O_(a){if(a.g7!==null&&a.g7===a.P){if(a.g0!==null&&a.g0.data.length>=a.h){X(a.P,0,a.g0,0,a.h);a.P=a.g0;a.g0=null;}else a.j_(a.P.data.length);return;}}
function P2(){C.call(this);this.pw=null;}
function PK(a){var b=new P2();AR5(b,a);return b;}
function AR5(a,b){J(a);a.pw=b;}
function FF(a){return a.pw.BA();}
function Tf(a,b){a.pw.Ai(b);}
function ACV(a,b){var c,d,$$je;if(b===null)b=Y(C,0);a:{b:{c:{try{c=a.pw.Cy(b);}catch($$e){$$je=R($$e);if($$je instanceof C3){d=$$je;break c;}else if($$je instanceof Li){d=$$je;break a;}else if($$je instanceof Me){d=$$je;break b;}else if($$je instanceof Mq){d=$$je;G(Ex((((I()).a(B(685))).a((FF(a)).u())).b(),d));}else{throw $$e;}}return c;}G(Ex((((I()).a(B(686))).a((FF(a)).u())).b(),d));}G(Ex((((I()).a(B(687))).a((FF(a)).u())).b(),d));}G(Ex((((I()).a(B(687))).a((FF(a)).u())).b(),d));}
function AB3(){var a=this;Fh.call(a);a.AA=0;a.si=0;a.tV=null;}
function Be3(a,b,c,d,e,f){var g=new AB3();A_s(g,a,b,c,d,e,f);return g;}
function A_s(a,b,c,d,e,f,g){Lr(a,c,e,f);a.si=b;a.AA=g;a.tV=d;}
function AIY(a,b){return a.tV.data[b+a.si|0];}
function A19(a,b,c){a.tV.data[b+a.si|0]=c;}
function AYG(a){return a.AA;}
var DA=D(Bx);
var BkT=null;var BkW=null;var BoO=null;var BkU=null;var BkV=null;var BoP=null;function Gl(){Gl=N(DA);AJH();}
function H4(a,b){var c=new DA();Zw(c,a,b);return c;}
function QJ(){Gl();return BoP.go();}
function Zw(a,b,c){Gl();Cw(a,b,c);}
function AJH(){BkT=H4(B(688),0);BkW=H4(B(689),1);BoO=H4(B(690),2);BkU=H4(B(691),3);BkV=H4(B(692),4);BoP=H(DA,[BkT,BkW,BoO,BkU,BkV]);}
function RC(){C.call(this);this.I6=null;}
function BcQ(a){var b=new RC();AWb(b,a);return b;}
function AWb(a,b){a.I6=b;J(a);}
function ATz(a){(CD()).eu();}
function AK9(a){a.qm();}
var I7=D();
var BoQ=null;var BoR=null;function Tr(){Tr=N(I7);AVF();}
function Kq(b){Tr();return !(b&1)?0:1;}
function ABy(b){var c,d,e,f,g,h,i;Tr();c=I();d=AA2();e=0;f=BoR.data;g=f.length;h=0;while(h<g){i=f[h];if(b&i){if(c.i()>0)c.U(32);c.a(d.data[e]);}e=e+1|0;h=h+1|0;}return c.b();}
function AA2(){Tr();if(BoQ===null)BoQ=H(BN,[B(693),B(694),B(695),B(696),B(697),B(698),B(699),B(700),B(701),B(702),B(703),B(704)]);return BoQ;}
function AVF(){BoR=MC([1,4,2,1024,8,16,128,64,32,256,2048,512]);}
function ZL(){var a=this;C.call(a);a.hM=null;a.c3=0;a.Gw=0;}
function AVc(){var a=new ZL();ASe(a);return a;}
function BoS(a,b){var c=new ZL();AAK(c,a,b);return c;}
function ASe(a){AAK(a,1,16);}
function AAK(a,b,c){J(a);a.Gw=b;a.hM=MW(c);}
function A3m(a,b){var c,d,e;c=a.hM;d=c.data;if(a.c3==d.length)c=a.CC(Bf(8,a.c3*1.75|0));d=c.data;e=a.c3;a.c3=e+1|0;d[e]=b;}
function ASy(a){a.c3=0;}
function AWS(a,b){var c;if(b<0)G(W((((I()).a(B(435))).j(b)).b()));c=a.c3+b|0;if(c>a.hM.data.length)a.CC(Bf(Bf(8,c),a.c3*1.75|0));return a.hM;}
function AYX(a,b){var c,d,e;c=MW(b);d=c.data;e=a.hM;X(e,0,c,0,Bq(a.c3,d.length));a.hM=c;return c;}
var Tx=D();
function CF(b){return $rt_floatToIntBits(b);}
function G0(b){return Oj(b);}
function A0G(b){var c,d;c=Oj(b);d=c|((c>>>24)*1.003937005996704|0)<<24;return d;}
function J$(b){return $rt_intBitsToFloat(b&(-16777217));}
var VL=D(T);
function BeF(){var a=new VL();AMx(a);return a;}
function AMx(a){Bo(a);}
function A$d(a){var b;b=BaP(a);b.be=1;return b;}
function RD(){var a=this;Hl.call(a);a.hI=0;a.cr=null;a.j5=0;a.FJ=0.0;a.rn=0;}
function C6(){var a=new RD();AHI(a);return a;}
function BoT(a){var b=new RD();OM(b,a);return b;}
function BoU(a,b){var c=new RD();ACr(c,a,b);return c;}
function A0W(a,b){return Y(Nu,b);}
function AHI(a){OM(a,16);}
function OM(a,b){ACr(a,b,0.75);}
function Uu(b){var c,d;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function ACr(a,b,c){var d;XP(a);if(b>=0&&c>0.0){d=Uu(b);a.hI=0;a.cr=a.Bj(d);a.FJ=c;Lw(a);return;}G(CL());}
function Lw(a){a.rn=a.cr.data.length*a.FJ|0;}
function AR$(a,b){var c;c=ZX(a,b);if(c===null)return null;return c.hb;}
function ZX(a,b){var c,d,e;if(b===null)c=K1(a);else{d=Ke(b);e=d&(a.cr.data.length-1|0);c=KA(a,b,e,d);}return c;}
function KA(a,b,c,d){var e,f;e=a.cr.data[c];while(e!==null){if(e.pq==d){f=e.hJ;if(V8(b,f))break;}e=e.e$;}return e;}
function K1(a){var b;b=a.cr.data[0];while(b!==null&&b.hJ!==null){b=b.e$;}return b;}
function ANB(a,b,c){return a.Qv(b,c);}
function ARN(a,b,c){var d,e,f,g,h;if(b===null){d=K1(a);if(d===null){a.j5=a.j5+1|0;d=a.wx(null,0,0);e=a.hI+1|0;a.hI=e;if(e>a.rn)a.oU();}}else{f=Ke(b);g=f&(a.cr.data.length-1|0);d=KA(a,b,g,f);if(d===null){a.j5=a.j5+1|0;d=a.wx(b,g,f);e=a.hI+1|0;a.hI=e;if(e>a.rn)a.oU();}}h=d.hb;d.hb=c;return h;}
function APn(a,b,c,d){var e;e=Bco(b,d);e.e$=a.cr.data[c];a.cr.data[c]=e;return e;}
function A0C(a,b){var c,d,e,f,g,h,i;c=Uu(!b?1:b<<1);d=a.Bj(c);e=0;while(e<a.cr.data.length){f=a.cr.data[e];a.cr.data[e]=null;while(f!==null){g=d.data;h=f.pq&(c-1|0);i=f.e$;f.e$=g[h];g[h]=f;f=i;}e=e+1|0;}a.cr=d;Lw(a);}
function A6K(a){a.Mp(a.cr.data.length);}
function AM6(a,b){var c;c=SO(a,b);if(c===null)return null;return c.hb;}
function SO(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.cr.data[0];while(e!==null){if(e.hJ===null)break a;f=e.e$;d=e;e=f;}}else{g=Ke(b);c=g&(a.cr.data.length-1|0);e=a.cr.data[c];while(e!==null&&!(e.pq==g&&V8(b,e.hJ))){f=e.e$;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.e$=e.e$;else a.cr.data[c]=e.e$;a.j5=a.j5+1|0;a.hI=a.hI-1|0;return e;}
function Ke(b){return b.bp();}
function V8(b,c){return b!==c&&!b.z(c)?0:1;}
function DE(){Bx.call(this);this.Ow=null;}
var Bj0=null;var Bj2=null;var BjZ=null;var Bj1=null;var Bj3=null;var BoV=null;function H3(){H3=N(DE);APi();}
function II(a,b,c){var d=new DE();AB8(d,a,b,c);return d;}
function Mi(){H3();return BoV.go();}
function AB8(a,b,c,d){H3();Cw(a,b,c);a.Ow=d;}
function APi(){Bj0=II(B(705),0,B(325));Bj2=II(B(706),1,B(327));BjZ=II(B(707),2,B(708));Bj1=II(B(709),3,B(326));Bj3=II(B(710),4,B(135));BoV=H(DE,[Bj0,Bj2,BjZ,Bj1,Bj3]);}
function ZM(){Bt.call(this);this.kR=0;}
function BaY(a){var b=new ZM();A1d(b,a);return b;}
function A1d(a,b){Co(a);a.kR=b;}
function AOh(a,b,c,d){var e;e=!d.jB()?c.i()-b|0:d.J()-b|0;if(e<=0){d.by(a.kR,0);return a.k.e(b,c,d);}if(c.f(b)!=10)return (-1);d.by(a.kR,1);return a.k.e(b+1|0,c,d);}
function A0d(a,b){var c;c=!b.ev(a.kR)?0:1;b.by(a.kR,(-1));return c;}
function AD3(a){return B(711);}
function Dp(){var a=this;BH.call(a);a.d3=null;a.eP=0.0;a.eO=0.0;a.fa=0.0;a.fb=0.0;a.oG=0;}
var Bnk=Ba;var Bnn=Ba;var BoW=Ba;var Bm9=Ba;var Bm_=Ba;var Bm7=Ba;var Bm8=Ba;var BoX=Ba;function B2(){B2=N(Dp);AJ7();}
function BoY(a){var b=new Dp();JE(b,a);return b;}
function BoZ(a,b){var c=new Dp();Kn(c,a,b);return c;}
function Bo0(a,b,c,d,e,f,g){var h=new Dp();Od(h,a,b,c,d,e,f,g);return h;}
function BaU(a,b){var c=new Dp();Zs(c,a,b);return c;}
function Bei(a){var b=new Dp();ACR(b,a);return b;}
function R1(b){B2();return Z(Br(b,BoX),Ba)?0:1;}
function Z2(b){B2();return BaU(Bnk,b);}
function JE(a,b){B2();Fb(a,b);a.eP=0.0;a.eO=0.0;a.fa=1.0;a.fb=1.0;a.oG=0;if(R1(b)){a.d3=A6T();return;}G(U(B(499)));}
function Kn(a,b,c){B2();JE(a,b);a.d3.JX(c);}
function Od(a,b,c,d,e,f,g,h){B2();Kn(a,b,c);a.eP=d;a.eO=e;a.fa=f;a.fb=g;a.oG=h;}
function Zs(a,b,c){B2();JE(a,b);a.d3.eU=c;}
function ACR(a,b){B2();Od(a,b.dc,b.d3,b.eP,b.eO,b.fa,b.fb,b.oG);}
function A68(a){return Bei(a);}
function AUk(a){var b,c;b=F2(a);c=(991*b|0)+a.d3.bp()|0;c=(991*c|0)+G0(a.eP)|0;c=(991*c|0)+G0(a.eO)|0;c=(991*c|0)+G0(a.fa)|0;c=(991*c|0)+G0(a.fb)|0;c=(991*c|0)+a.oG|0;return c;}
function AJ7(){Bnk=BR(B(712));Bnn=BR(B(713));BoW=BR(B(714));Bm9=BR(B(715));Bm_=BR(B(716));Bm7=BR(B(717));Bm8=BR(B(718));BoX=BQ(BQ(BQ(BQ(BQ(BQ(Bnk,Bnn),BoW),Bm9),Bm_),Bm7),Bm8);}
function ABs(){var a=this;C.call(a);a.R=null;a.Z=0;a.z8=0;}
function Sz(){var a=new ABs();APb(a);return a;}
function Bo1(a,b){var c=new ABs();Uc(c,a,b);return c;}
function APb(a){Uc(a,1,16);}
function Uc(a,b,c){J(a);a.z8=b;a.R=Ca(c);}
function AXV(a,b){var c,d,e;c=a.R;d=c.data;if(a.Z==d.length)c=a.t2(Bf(8,a.Z*1.75|0));d=c.data;e=a.Z;a.Z=e+1|0;d[e]=b;}
function AEU(a,b){a.rI(b.R,0,b.Z);}
function AQ4(a,b,c,d){if((c+d|0)<=b.Z){a.rI(b.R,c,d);return;}G(W((((((((I()).a(B(489))).j(c)).a(B(426))).j(d)).a(B(427))).j(b.Z)).b()));}
function AEb(a,b,c,d){var e,f,g;e=a.R;f=e.data;g=a.Z+d|0;if(g>f.length)e=a.t2(Bf(Bf(8,g),a.Z*1.75|0));X(b,c,e,a.Z,d);a.Z=a.Z+d|0;}
function AYo(a,b){if(b<a.Z)return a.R.data[b];G(Bg((((((I()).a(B(428))).j(b)).a(B(429))).j(a.Z)).b()));}
function AU6(a,b,c){var d,e,f,g,h,i;d=a.Z;if(c>=d)G(Bg((((((I()).a(B(432))).j(c)).a(B(429))).j(a.Z)).b()));if(b>c)G(Bg((((((I()).a(B(433))).j(b)).a(B(431))).j(c)).b()));e=(c-b|0)+1|0;f=d-e|0;if(a.z8){g=a.R;h=b+e|0;X(g,h,a.R,b,d-h|0);}else{i=Bf(f,c+1|0);X(a.R,i,a.R,b,d-i|0);}a.Z=f;}
function AWG(a){a.Z=0;}
function AP3(a,b){var c;if(b<0)G(W((((I()).a(B(435))).j(b)).b()));c=a.Z+b|0;if(c>a.R.data.length)a.t2(Bf(Bf(8,c),a.Z*1.75|0));return a.R;}
function ANM(a,b){var c,d,e;c=Ca(b);d=c.data;e=a.R;X(e,0,c,0,Bq(a.Z,d.length));a.R=c;return c;}
function AGl(a,b){if(a.Z>b)a.Z=b;}
var Bh=D();
var Bog=null;var Boh=null;var Boi=null;var Boj=null;var Bok=null;var Bol=null;var Bom=null;var Bon=null;var Boo=null;var Bop=null;var Boq=null;var Bor=null;var Bos=null;var Bot=null;var Bou=null;var Bov=null;var Bow=null;var Box=null;var Boy=null;var Boz=null;var BoA=null;var BoB=null;var BoC=null;var BoD=null;var BoE=null;var BoF=null;var BoG=null;var BoH=null;var BoI=null;var BoJ=null;var BoK=null;var BoL=null;var Bo2=null;var Bo3=null;var Bo4=null;var BoM=null;function Bfh(){Bfh=N(Bh);AWp();}
function AWp(){var b;Bog=Bk(B(475));Boh=Bk(B(719));Boi=Bk(B(720));Boj=Bk(B(721));Bok=Bk(B(722));Bol=Bk(B(723));Bom=Bk(B(724));Bon=Bk(B(725));Boo=Bk(B(726));Bop=Bk(B(727));Boq=Bk(B(728));Bor=Bk(B(729));b=new EY;ET();G1(b,B(730),Bmb);Bos=b;b=new EY;GO();G1(b,B(731),BjQ);Bot=b;b=new EY;Ce();G1(b,B(732),Bmx);Bou=b;b=new EY;B2();G1(b,B(733),Bnk);Bov=b;Bow=CK(B(734),Bnk);Box=CK(B(735),Bmy);Boy=CK(B(736),Bnn);Boz=CK(B(737),Bnn);BoA=CK(B(738),BmA);BoB=CK(B(739),Bm7);BoC=CK(B(740),Bm7);BoD=CK(B(741),BmB);BoE=CK(B(742),
Bm8);BoF=CK(B(743),Bm8);BoG=CK(B(744),Bm9);BoH=CK(B(745),Bm9);BoI=CK(B(746),Bm_);BoJ=CK(B(747),Bm_);BoK=Bk(B(748));BoL=Bk(B(749));Bo2=Bk(B(750));Bo3=Bk(B(751));Bo4=Bk(B(752));BoM=Bk(B(753));}
var NA=D(FT);
var Bo5=null;function A9C(){A9C=N(NA);AUa();}
function Bad(a,b,c,d){var e=new NA();Te(e,a,b,c,d);return e;}
function Bdh(a){var b=new NA();AA3(b,a);return b;}
function Te(a,b,c,d,e){var f,g,h,i;A9C();HL(a);f=b.de();g=c.de();h=d.de();i=e.de();a.dZ(AAB(f,g,h,i),1);}
function AA3(a,b){A9C();HL(a);}
function AUa(){Bo5=Bdh(0);}
function AAB(b,c,d,e){var dispatcherJSObj=Bullet.wrapPointer(b,Bullet.btDispatcher);var broadphaceJSObj=Bullet.wrapPointer(c,Bullet.btBroadphaseInterface);var solverJSObj=Bullet.wrapPointer(d,Bullet.btConstraintSolver);var configJSObj=Bullet.wrapPointer(e,Bullet.btCollisionConfiguration);var jsObj=new Bullet.btDiscreteDynamicsWorld(dispatcherJSObj,broadphaceJSObj,solverJSObj,configJSObj);return Bullet.getPointer(jsObj);}
function Jq(){var a=this;C.call(a);a.j0=0;a.m$=0;}
var BgY=null;var BgX=null;function Bj(){Bj=N(Jq);AZt();}
function J7(a,b){var c=new Jq();Xz(c,a,b);return c;}
function Xz(a,b,c){Bj();J(a);a.j0=b;a.m$=c;}
function ANm(a){return a.j0?0:1;}
function A9g(a){return a.j0!=1?0:1;}
function A2K(a){return !a.zo()&&!a.t3()?0:1;}
function AJE(a){return a.j0!=2?0:1;}
function ASh(a){return a.j0!=3?0:1;}
function AIs(a){if(a.mz())return a.m$;G(BfW());}
function BV(b){Bj();return J7(2,b);}
function F$(b){Bj();return J7(3,b);}
function AP$(a){switch(a.j0){case 0:G(BaM());case 1:G(BcW());case 2:G(BdN(a.m$));case 3:G(BaN(a.m$));default:}}
function AZt(){BgY=J7(0,0);BgX=J7(1,0);}
var Qz=D(D5);
function BaX(){var a=new Qz();AZ5(a);return a;}
function AZ5(a){N5(a);}
var WV=D(Ci);
function BcH(){var a=new WV();A$y(a);return a;}
function A$y(a){DT(a);}
function AQ_(a,b,c,d,e){D1(b,c,b.cV.jA);}
function LQ(){Bt.call(this);this.iF=0;}
function Bci(a){var b=new LQ();ABx(b,a);return b;}
function ABx(a,b){Co(a);a.iF=b;}
function A6o(a,b,c,d){var e,f,g,h;e=!d.jB()?c.i():d.J();if(b>=e){d.by(a.iF,0);return a.k.e(b,c,d);}f=e-b|0;if(f==2&&c.f(b)==13){g=b+1|0;if(c.f(g)==10){d.by(a.iF,0);return a.k.e(b,c,d);}}a:{if(f==1){h=c.f(b);if(h==10)break a;if(h==13)break a;if(h==133)break a;if((h|1)==8233)break a;}return (-1);}d.by(a.iF,0);return a.k.e(b,c,d);}
function AX9(a,b){var c;c=!b.ev(a.iF)?0:1;b.by(a.iF,(-1));return c;}
function A3E(a){return B(422);}
var WS=D(Ci);
function A_T(){var a=new WS();AU2(a);return a;}
function AU2(a){DT(a);}
function AOt(a,b,c,d,e){D1(b,c,b.cV.eK);}
var WU=D(Ci);
function BdP(){var a=new WU();ADK(a);return a;}
function ADK(a){DT(a);}
function A8S(a,b,c,d,e){D1(b,c,b.cV.hs);}
var MQ=D(Gn);
var Bo6=null;function AQd(){AQd=N(MQ);APR();}
function BbK(){var a=new MQ();ZV(a);return a;}
function Bcj(a){var b=new MQ();YP(b,a);return b;}
function ZV(a){AQd();H2(a);a.dZ(Rg(),1);}
function YP(a,b){AQd();H2(a);}
function APR(){Bo6=Bcj(0);}
function Rg(){var jsObj=new Bullet.btDefaultCollisionConfiguration();return Bullet.getPointer(jsObj);}
var WQ=D(Ci);
function Bgf(){var a=new WQ();AR4(a);return a;}
function AR4(a){DT(a);}
function A4i(a,b,c,d,e){Lz(b,c,b.cV.c9);}
var WR=D(Ci);
function BdH(){var a=new WR();AFt(a);return a;}
function AFt(a){DT(a);}
function AEq(a,b,c,d,e){DQ(b,c,b.cV.cq.n,b.cV.cq.o,b.cV.cq.q,1.188099980354309/(b.cV.jP*b.cV.jP));}
var WO=D(Ci);
function BaK(){var a=new WO();A07(a);return a;}
function A07(a){DT(a);}
function A6s(a,b,c,d,e){WE(b,c,b.cV.la,b.cV.jP);}
function TE(){var a=this;C.call(a);a.kr=0;a.fZ=0;a.hx=null;a.gc=null;a.E9=0;a.lh=0;a.r8=0;a.t9=0;a.Iu=null;a.hw=0;}
function BcA(a,b){var c=new TE();A$u(c,a,b);return c;}
function Bo7(a,b,c){var d=new TE();YD(d,a,b,c);return d;}
function A$u(a,b,c){YD(a,b,c,(-1));}
function YD(a,b,c,d){var e;J(a);a.r8=0;a.t9=0;a.Iu=A6T();a.hw=0;e=Bq(A2U(),32);if(d<0)d=e-c|0;if(c>=0&&d>=0&&(c+d|0)<=e){a.E9=b;a.kr=c;a.fZ=d;a.hx=Y(Fo,d);a.gc=b!=1?null:Bc(d);return;}G(U(B(754)));}
function A2U(){var b;b=Fk(16);Bio.Or(34930,b);return b.b2(0);}
function A0v(a){var b;b=0;while(b<a.fZ){a.hx.data[b]=null;if(a.gc!==null)a.gc.data[b]=b;b=b+1|0;}}
function AJY(a){Bio.rF(33984);}
function AEO(a,b){return Sk(a,b,0);}
function Sk(a,b,c){var d,e;a:{d=b.eU;a.lh=0;switch(a.E9){case 0:e=a.kr+Ti(a,d)|0;break a;case 1:e=a.kr+UZ(a,d)|0;break a;default:}return (-1);}if(!a.lh)a.t9=a.t9+1|0;else{a.r8=a.r8+1|0;if(c)d.rT(e);else Bio.rF(33984+e|0);}d.LP(b.lA,b.ms);d.Qk(b.mM,b.lM);return e;}
function Ti(a,b){var c,d;c=0;while(true){if(c>=a.fZ){a.hw=(a.hw+1|0)%a.fZ|0;a.hx.data[a.hw]=b;b.rT(a.kr+a.hw|0);return a.hw;}d=(a.hw+c|0)%a.fZ|0;if(a.hx.data[d]===b)break;c=c+1|0;}a.lh=1;return d;}
function UZ(a,b){var c,d;c=0;a:{while(true){if(c>=a.fZ)break a;d=a.gc.data[c];if(a.hx.data[d]===b){a.lh=1;break a;}if(a.hx.data[d]===null)break;c=c+1|0;}}if(c>=a.fZ)c=a.fZ-1|0;d=a.gc.data[c];while(c>0){a.gc.data[c]=a.gc.data[c-1|0];c=c+(-1)|0;}a.gc.data[0]=d;if(!a.lh){a.hx.data[d]=b;b.rT(a.kr+d|0);}return d;}
var WP=D(Ci);
function BfH(){var a=new WP();ASa(a);return a;}
function ASa(a){DT(a);}
function ASR(a,b,c,d,e){Lz(b,c,b.cV.ds);}
function WM(){V.call(this);this.yU=null;}
function BbH(){var a=new WM();A4O(a);return a;}
function A4O(a){BM(a);a.yU=BL();}
function AFz(a,b,c,d,e){D1(b,c,(a.yU.ch(b.cV.hs)).hC(d.dy));}
function Gj(){var a=this;C.call(a);a.L=null;a.iE=0;a.eE=0;a.zF=0;a.q8=0;a.ee=0;a.m=0;a.Dq=0;a.i4=null;a.f5=null;a.y=0;a.mH=0;a.lp=0;a.l_=0;a.Bn=null;}
var Bo8=null;var Bo9=null;var Bo$=0;function Bd5(a,b){var c=new Gj();A87(c,a,b);return c;}
function A87(a,b,c){J(a);a.eE=1;a.Bn=b;if((c&16)>0)b=A2q(b);else if((c&128)>0)b=AYB(b);a.L=BW(b.i()+2|0);X(b.ry(),0,a.L,0,b.i());a.L.data[a.L.data.length-1|0]=0;a.L.data[a.L.data.length-2|0]=0;a.Dq=a.L.data.length;a.iE=c;Ee(a);Ee(a);}
function A2N(a){return a.ee;}
function AXP(a,b){if(b>0&&b<3)a.eE=b;if(b==1)YF(a);}
function AXq(a,b){a.iE=b;a.m=a.ee;a.f5=a.i4;a.y=a.lp+1|0;a.l_=a.lp;Ee(a);}
function AHh(a){return a.i4;}
function APd(a){return a.i4===null?0:1;}
function AFJ(a){return a.f5===null?0:1;}
function A69(a){Ee(a);return a.q8;}
function AYh(a){var b;b=a.i4;Ee(a);return b;}
function AWe(a){return a.m;}
function AIq(a){return a.q8;}
function AYB(b){return b;}
function YF(a){a.m=a.ee;a.f5=a.i4;a.y=a.l_;a.l_=a.lp;Ee(a);}
function Ee(a){var b,c,d,e,f,g,h,$$je;a.q8=a.ee;a.ee=a.m;a.i4=a.f5;a.lp=a.l_;a.l_=a.y;while(true){b=0;a.m=a.y>=a.L.data.length?0:Ia(a);a.f5=null;if(a.eE==4){if(a.m!=92)return;a.m=a.y>=a.L.data.length?0:a.L.data[BF(a)];switch(a.m){case 69:break;default:a.m=92;a.y=a.mH;return;}a.eE=a.zF;a.m=a.y>(a.L.data.length-2|0)?0:Ia(a);}a:{if(a.m!=92){if(a.eE==1)switch(a.m){case 36:a.m=(-536870876);break a;case 40:if(a.L.data[a.y]!=63){a.m=(-2147483608);break a;}BF(a);c=a.L.data[a.y];d=0;while(true){b:{if(d){d=0;switch(c)
{case 33:break;case 61:a.m=(-134217688);BF(a);break b;default:G(BS(B(101),a.b(),a.y));}a.m=(-67108824);BF(a);}else{switch(c){case 33:break;case 60:BF(a);c=a.L.data[a.y];d=1;break b;case 61:a.m=(-536870872);BF(a);break b;case 62:a.m=(-33554392);BF(a);break b;default:a.m=ACK(a);if(a.m<256){a.iE=a.m;a.m=a.m<<16;a.m=(-1073741784)|a.m;break b;}a.m=a.m&255;a.iE=a.m;a.m=a.m<<16;a.m=(-16777176)|a.m;break b;}a.m=(-268435416);BF(a);}}if(!d)break;}break a;case 41:a.m=(-536870871);break a;case 42:case 43:case 63:e=a.y>=
a.L.data.length?42:a.L.data[a.y];switch(e){case 43:a.m=a.m|(-2147483648);BF(a);break a;case 63:a.m=a.m|(-1073741824);BF(a);break a;default:}a.m=a.m|(-536870912);break a;case 46:a.m=(-536870866);break a;case 91:a.m=(-536870821);a.pN(2);break a;case 93:if(a.eE!=2)break a;a.m=(-536870819);break a;case 94:a.m=(-536870818);break a;case 123:a.f5=Uf(a,a.m);break a;case 124:a.m=(-536870788);break a;default:}else if(a.eE==2)switch(a.m){case 38:a.m=(-536870874);break a;case 45:a.m=(-536870867);break a;case 91:a.m=(-536870821);break a;case 93:a.m
=(-536870819);break a;case 94:a.m=(-536870818);break a;default:}}else{f=a.y>=(a.L.data.length-2|0)?(-1):Ia(a);c:{a.m=f;switch(a.m){case -1:G(BS(B(101),a.b(),a.y));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.m
=Sx(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.eE!=1)break a;a.m=(-2147483648)|a.m;break a;case 65:a.m=(-2147483583);break a;case 66:a.m=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:G(BS(B(101),a.b(),a.y));case 68:case 83:case 87:case 100:case 115:case 119:a.f5=KZ(F1(a.L,
a.mH,1),0);a.m=0;break a;case 71:a.m=(-2147483577);break a;case 80:case 112:break c;case 81:a.zF=a.eE;a.eE=4;b=1;break a;case 90:a.m=(-2147483558);break a;case 97:a.m=7;break a;case 98:a.m=(-2147483550);break a;case 99:if(a.y>=(a.L.data.length-2|0))G(BS(B(101),a.b(),a.y));a.m=a.L.data[BF(a)]&31;break a;case 101:a.m=27;break a;case 102:a.m=12;break a;case 110:a.m=10;break a;case 114:a.m=13;break a;case 116:a.m=9;break a;case 117:a.m=MU(a,4);break a;case 120:a.m=MU(a,2);break a;case 122:a.m=(-2147483526);break a;default:}break a;}g
=Z0(a);h=0;if(a.m==80)h=1;try{a.f5=KZ(g,h);}catch($$e){$$je=R($$e);if($$je instanceof Mo){G(BS(B(101),a.b(),a.y));}else{throw $$e;}}a.m=0;}}if(b)continue;else break;}}
function Z0(a){var b,c,d;b=Gf(10);if(a.y<(a.L.data.length-2|0)){if(a.L.data[a.y]!=123)return (((I()).a(B(755))).a(F1(a.L,BF(a),1))).b();BF(a);c=0;a:{while(a.y<(a.L.data.length-2|0)){c=a.L.data[BF(a)];if(c==125)break a;b.U(c);}}if(c!=125)G(BS(B(101),a.b(),a.y));}if(!b.i())G(BS(B(101),a.b(),a.y));d=b.b();if(d.i()==1)return (((I()).a(B(755))).a(d)).b();b:{c:{if(d.i()>3){if(d.e2(B(755)))break c;if(d.e2(B(756)))break c;}break b;}d=d.ei(2);}return d;}
function Uf(a,b){var c,d,e,f,$$je;c=Gf(4);d=(-1);e=2147483647;a:{while(true){if(a.y>=a.L.data.length)break a;b=a.L.data[BF(a)];if(b==125)break a;if(b==44&&d<0)try{d=Dt(c.b(),10);c.L7(0,c.i());continue;}catch($$e){$$je=R($$e);if($$je instanceof Du){break;}else{throw $$e;}}c.U(b&65535);}G(BS(B(101),a.b(),a.y));}if(b!=125)G(BS(B(101),a.b(),a.y));if(c.i()>0)b:{try{e=Dt(c.b(),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=R($$e);if($$je instanceof Du){}else{throw $$e;}}G(BS(B(101),a.b(),a.y));}else if(d<0)G(BS(B(101),
a.b(),a.y));if((d|e|(e-d|0))<0)G(BS(B(101),a.b(),a.y));f=a.y>=a.L.data.length?42:a.L.data[a.y];c:{switch(f){case 43:a.m=(-2147483525);BF(a);break c;case 63:a.m=(-1073741701);BF(a);break c;default:}a.m=(-536870789);}return Bfe(d,e);}
function AIZ(a){return a.Bn;}
function A1A(a){return !a.ee&&!a.m&&a.y==a.Dq&&!a.k0()?1:0;}
function I2(b){return b<0?0:1;}
function ATf(a){return !a.bN()&&!a.k0()&&I2(a.ee)?1:0;}
function AW2(a){return a.ee<=56319&&a.ee>=55296?1:0;}
function A65(a){return a.ee<=57343&&a.ee>=56320?1:0;}
function K5(b){return b<=56319&&b>=55296?1:0;}
function Kh(b){return b<=57343&&b>=56320?1:0;}
function MU(a,b){var c,d,e,f,$$je;c=Gf(b);d=a.L.data.length-2|0;e=0;while(true){f=B9(e,b);if(f>=0)break;if(a.y>=d)break;c.U(a.L.data[BF(a)]);e=e+1|0;}if(!f)a:{try{f=Dt(c.b(),16);}catch($$e){$$je=R($$e);if($$je instanceof Du){break a;}else{throw $$e;}}return f;}G(BS(B(101),a.b(),a.y));}
function Sx(a){var b,c,d,e,f;b=3;c=1;d=a.L.data.length-2|0;e=NL(a.L.data[a.y],8);switch(e){case -1:break;default:if(e>3)b=2;BF(a);a:{while(true){if(c>=b)break a;if(a.y>=d)break a;f=NL(a.L.data[a.y],8);if(f<0)break;e=(e*8|0)+f|0;BF(a);c=c+1|0;}}return e;}G(BS(B(101),a.b(),a.y));}
function ACK(a){var b,c,d;b=1;c=a.iE;a:while(true){if(a.y>=a.L.data.length)G(BS(B(101),a.b(),a.y));b:{c:{d=a.L.data[a.y];switch(d){case 41:BF(a);return c|256;case 45:if(!b)G(BS(B(101),a.b(),a.y));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BF(a);}BF(a);return c;}
function BF(a){a.mH=a.y;if(a.iE&4)VZ(a);else a.y=a.y+1|0;return a.mH;}
function VZ(a){var b;b=a.L.data.length-2|0;a.y=a.y+1|0;a:while(true){if(a.y<b&&Ta(a.L.data[a.y])){a.y=a.y+1|0;continue;}if(a.y>=b)break;if(a.L.data[a.y]!=35)break;a.y=a.y+1|0;while(true){if(a.y>=b)continue a;if(Q2(a,a.L.data[a.y]))continue a;a.y=a.y+1|0;}}return a.y;}
function Q2(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function ABO(b){return Bo8.SI(b);}
function AG7(b){var c,d,e,f,g,h;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;if(!f)g=MC([d,e]);else{h=4519+f|0;g=MC([d,e,h]);}return g;}return null;}
function AMm(b){var c;c=Bo9.b2(b);return c==Bo$?0:1;}
function A5T(b){return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);}
function Ia(a){var b,c,d;b=a.L.data[BF(a)];if(BY(b)){c=a.mH+1|0;if(c<a.L.data.length){d=a.L.data[c];if(BG(d)){BF(a);return Dh(b,d);}}}return b;}
function AFq(a){return a.lp;}
var WN=D(V);
function BbY(){var a=new WN();AJ_(a);return a;}
function AJ_(a){BM(a);}
function AHO(a,b,c,d,e){D1(b,c,d.dy);}
var XX=D(T);
function BdA(){var a=new XX();ATh(a);return a;}
function ATh(a){Bo(a);}
function ASH(a){return ((CS()).bF(65279,65279)).bF(65520,65533);}
var Zh=D(Jc);
function A_Q(){var a=new Zh();ASr(a);return a;}
function ASr(a){Rr(a);}
function AWH(a){var b;b=(YX(a)).f9(1);b.be=1;return b;}
var Xy=D(CO);
var Yr=D();
function HY(){return 1;}
function U9(){var a=this;C.call(a);a.w=null;a.dG=null;a.rp=0;a.gG=null;a.ts=0;a.uQ=null;a.qe=0;a.Pa=null;a.LX=0;a.Gp=null;a.QH=0;a.rz=null;a.s_=0;a.oM=null;a.td=0;a.uq=0;a.kD=null;a.NQ=null;a.lb=null;a.l1=null;}
function BdT(a){var b=new U9();A3_(b,a);return b;}
function A3_(a,b){J(a);a.dG=C6();a.rp=1;a.gG=C6();a.ts=1;a.uQ=C6();a.qe=1;a.Pa=C6();a.LX=1;a.Gp=C6();a.QH=1;a.rz=C6();a.s_=1;a.oM=C6();a.td=1;a.uq=0;a.w=b;a.kD=(DV()).Fo(40000);a.lb=(DV()).DC(12000);a.NQ=(DV()).LZ(12000);a.l1=(DV()).AZ(240000);a.w.pixelStorei(37441,0);}
function Uy(a,b){if(Bb(b)>a.kD.length)a.kD=(DV()).Fo(Bb(b));}
function ACt(a,b){if(Bb(b)>a.lb.length)a.lb=(DV()).DC(Bb(b));}
function ABH(a,b){if(Bb(b)>a.l1.length)a.l1=(DV()).AZ(Bb(b));}
function A02(a,b){var c,d,e,f,g;Uy(a,b);c=B8(b);d=0;while(c<BD(b)){e=a.kD;f=b.oa(c);e[d]=f;c=c+1|0;d=d+1|0;}e=a.kD;g=Bb(b);return e.subarray(0,g);}
function ATU(a,b){var c,d,e,f,g;ACt(a,b);c=B8(b);d=0;while(c<BD(b)){e=a.lb;f=b.Km(c);e[d]=f;c=c+1|0;d=d+1|0;}e=a.lb;g=Bb(b);return e.subarray(0,g);}
function ANa(a,b){var c,d,e,f,g;ABH(a,b);c=B8(b);d=0;while(c<BD(b)){e=a.l1;f=b.zn(c);e[d]=f;c=c+1|0;d=d+1|0;}e=a.l1;g=Bb(b);return e.subarray(0,g);}
function XQ(a,b,c){var d,e;d=a.oM.W(Bn(b));if(d===null){d=C6();a.oM.x(Bn(b),d);}e=a.td;a.td=e+1|0;d.x(Bn(e),c);return e;}
function DN(a,b){return (a.oM.W(Bn(a.uq))).W(Bn(b));}
function Un(a,b){var c;c=a.ts;a.ts=c+1|0;a.gG.x(Bn(c),b);return c;}
function Pk(a,b){var c;c=a.rp;a.rp=c+1|0;a.dG.x(Bn(c),b);return c;}
function Tk(a,b){var c;c=a.qe;a.qe=c+1|0;a.uQ.x(Bn(c),b);return c;}
function Q_(a,b){var c;c=a.s_;a.s_=c+1|0;a.rz.x(Bn(c),b);return c;}
function A5O(a,b){a.w.activeTexture(b);}
function ALp(a,b,c){var d,e;d=a.w;e=a.rz.W(Bn(c));d.bindTexture(b,e);}
function AKm(a,b,c){a.w.blendFunc(b,c);}
function AN0(a,b){a.w.clear(b);}
function A$z(a,b,c,d,e){a.w.clearColor(b,c,d,e);}
function AEY(a,b){a.w.cullFace(b);}
function A$i(a,b){a.w.depthFunc(b);}
function A0N(a,b){a.w.depthMask(!!b);}
function AXv(a,b,c){a.w.depthRange(b,c);}
function A3d(a,b){a.w.disable(b);}
function A_h(a,b,c,d){a.w.drawArrays(b,c,d);}
function A5Z(a,b,c,d,e){var f,g;f=a.w;g=B8(e);f.drawElements(b,c,d,g);}
function AT1(a,b){a.w.enable(b);}
function A0R(a){var b;b=a.w.createTexture();return Q_(a,b);}
function AZx(a,b,c){var d;a:{if(b==34016)break a;if(b==3413)break a;if(b==32970)break a;if(b==32968)break a;if(b==34877)break a;if(b==32777)break a;if(b==32971)break a;if(b==32969)break a;if(b==3412)break a;if(b==2885)break a;if(b==3414)break a;if(b==2932)break a;if(b==2886)break a;if(b==33170)break a;if(b==3411)break a;if(b==35739)break a;if(b==35738)break a;if(b==35661)break a;if(b==34076)break a;if(b==36349)break a;if(b==34024)break a;if(b==34930)break a;if(b==3379)break a;if(b==36348)break a;if(b==34921)break a;if
(b==35660)break a;if(b==36347)break a;if(b==34466)break a;if(b==3333)break a;if(b==3410)break a;if(b==32936)break a;if(b==32937)break a;if(b==34817)break a;if(b==34816)break a;if(b==34818)break a;if(b==34819)break a;if(b==36003)break a;if(b==36004)break a;if(b==36005)break a;if(b==3415)break a;if(b==2961)break a;if(b==2964)break a;if(b==2962)break a;if(b==2965)break a;if(b==2966)break a;if(b==2967)break a;if(b==2963)break a;if(b==2968)break a;if(b==3408)break a;if(b==3317)break a;G(U(B(757)));}d=a.w.getParameter(b);c.ti(0,
d);}
function AUp(a,b,c){a.w.pixelStorei(b,c);}
function AJN(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q;if(j===null){k=a.w;l=null;k.texImage2D(b,c,d,e,f,g,h,i,l);}else if(BD(j)>4){m=!(j instanceof DW)?a.H$(j):a.uw(j);a.w.texImage2D(b,c,d,e,f,g,h,i,m);}else{n=j.O6(0);FD();o=BjC.W(Bn(n));if(o.QB()){p=a.w;q=o.Oe();p.texImage2D(b,c,d,h,i,q);}else if(!o.JP()){p=a.w;q=o.sV();p.texImage2D(b,c,d,h,i,q);}else{p=a.w;q=o.Jr();p.texImage2D(b,c,d,h,i,q);}}}
function A6v(a,b,c,d){a.w.texParameterf(b,c,d);}
function AX4(a,b,c,d,e){a.w.viewport(b,c,d,e);}
function ALC(a,b,c){var d,e;d=a.dG.W(Bn(b));e=a.gG.W(Bn(c));a.w.attachShader(d,e);}
function AOA(a,b,c){var d,e;d=a.w;e=a.uQ.W(Bn(c));d.bindBuffer(b,e);}
function AZW(a,b,c,d,e){a.w.blendFuncSeparate(b,c,d,e);}
function AZg(a,b,c,d,e){var f,g,h,i;if(d instanceof DW){f=d;g=a.uw(f);a.w.bufferData(b,g,e);}else{if(!(d instanceof GI))G(U(B(758)));h=a.w;i=a.KX(d);h.bufferData(b,i,e);}}
function AM1(a,b,c,d,e){var f,g;if(e instanceof DW){f=a.w;g=a.uw(e);f.bufferSubData(b,c,g);}}
function AID(a,b){var c;c=a.gG.W(Bn(b));a.w.compileShader(c);}
function AGS(a){var b;b=a.w.createProgram();return Pk(a,b);}
function A1t(a,b){var c;c=a.w.createShader(b);return Un(a,c);}
function AQm(a,b){a.w.disableVertexAttribArray(b);}
function A6J(a,b,c,d,e){a.w.drawElements(b,c,d,e);}
function ARE(a,b){a.w.enableVertexAttribArray(b);}
function AZB(a){var b;b=a.w.createBuffer();return Tk(a,b);}
function A5Y(a,b){a.w.generateMipmap(b);}
function AN5(a,b,c,d,e){var f,g,h;f=a.w;g=a.dG.W(Bn(b));h=f.getActiveAttrib(g,c);d.gs(h.size);e.gs(h.type);return $rt_str(h.name);}
function ADS(a,b,c,d,e){var f,g,h;f=a.w;g=a.dG.W(Bn(b));h=f.getActiveUniform(g,c);d.gs(h.size);e.gs(h.type);return $rt_str(h.name);}
function AI0(a,b,c){var d;d=a.dG.W(Bn(b));return a.w.getAttribLocation(d,$rt_ustr(c));}
function ALY(a,b,c){if(b!=2931&&b!=2849&&b!=32824&&b!=10752&&b!=32938)G(U(B(759)));c.KB(0,a.w.getParameter(b));}
function AJU(a,b,c,d){var e,f,g,h,i;if(c!=35712&&c!=35714&&c!=35715){e=a.w;f=a.dG.W(Bn(b));d.gs(e.getProgramParameter(f,c));}else{g=a.w;h=a.dG.W(Bn(b));i=g.getProgramParameter(h,c)?1:0;d.gs(!i?0:1);}}
function AY1(a,b){var c,d;c=a.w;d=a.dG.W(Bn(b));return $rt_str(c.getProgramInfoLog(d));}
function A5W(a,b,c,d){var e,f,g,h;if(c!=35713&&c!=35712){e=a.w;f=a.gG.W(Bn(b));g=e.getShaderParameter(f,c);d.gs(g);}else{h=a.w;e=a.gG.W(Bn(b));g=h.getShaderParameter(e,c)?1:0;d.gs(!g?0:1);}}
function A$X(a,b){var c,d;c=a.w;d=a.gG.W(Bn(b));return $rt_str(c.getShaderInfoLog(d));}
function AG1(a,b,c){var d,e,f;d=a.w;e=a.dG.W(Bn(b));f=d.getUniformLocation(e,$rt_ustr(c));if(f!==null)return XQ(a,b,f);return (-1);}
function AUy(a,b){var c,d;c=a.w;d=a.dG.W(Bn(b));c.linkProgram(d);}
function AVX(a,b,c){var d,e;d=a.w;e=a.gG.W(Bn(b));d.shaderSource(e,$rt_ustr(c));}
function AOk(a,b,c,d){var e,f;e=a.w;f=d;e.texParameterf(b,c,f);}
function AWd(a,b,c){var d;d=DN(a,b);a.w.uniform1f(d,c);}
function AOQ(a,b,c){var d;d=DN(a,b);a.w.uniform1i(d,c);}
function AMa(a,b,c,d){var e;e=DN(a,b);a.w.uniform2f(e,c,d);}
function A0b(a,b,c,d,e){var f;f=DN(a,b);a.w.uniform3f(f,c,d,e);}
function AYf(a,b,c,d,e){var f;f=DN(a,b);a.w.uniform3fv(f,Nj(d));}
function AEf(a,b,c,d,e,f){var g;g=DN(a,b);a.w.uniform4f(g,c,d,e,f);}
function AQT(a,b,c,d,e,f){var g;g=DN(a,b);a.w.uniformMatrix3fv(g,!!d,Nj(e));}
function A0Z(a,b,c,d,e,f){var g;g=DN(a,b);a.w.uniformMatrix4fv(g,!!d,Nj(e));}
function A11(a,b){var c,d;a.uq=b;c=a.w;d=a.dG.W(Bn(b));c.useProgram(d);}
function A9Z(a,b,c,d,e,f,g){a.w.vertexAttribPointer(b,c,d,!!e,f,g);}
var XY=D(Fr);
function Bc9(a,b,c,d,e,f){var g=new XY();AEj(g,a,b,c,d,e,f);return g;}
function AEj(a,b,c,d,e,f,g){Lt(a,b,c,d,e,f,g);}
function A4W(a,b){var c,d,e,f;c=a.fH.A.data;d=a.fC;e=b*2|0;f=(c[d+e|0]&255)<<8|a.fH.A.data[(a.fC+e|0)+1|0]&255;return f<<16>>16;}
function AYv(a,b,c){var d,e,f;d=a.fH.A.data;e=a.fC;f=b*2|0;d[e+f|0]=c>>8<<24>>24;a.fH.A.data[(a.fC+f|0)+1|0]=c<<24>>24;}
$rt_packages([-1,"com",0,"badlogic",1,"gdx",2,"utils",3,"reflect",2,"graphics",5,"g2d",-1,"java",7,"util",8,"regex",7,"nio",10,"charset",7,"io",7,"lang"]);
$rt_metadata([C,"Object",13,0,[],0,3,0,0,["RN",Bgx(EM),"T7",Bgx(Ck),"bp",Bgx(MN),"z",Bgy(AMT),"b",Bgx(PW),"UO",Bgx(Is),"go",Bgx(ALU)],T,0,C,[],1,0,0,0,["d",Bgx(Bo),"Hs",Bgy(A66)],RS,0,T,[],0,0,0,0,["d",Bgx(A7B),"T",Bgx(AYI)],Qs,0,T,[],0,0,0,0,["d",Bgx(A95),"T",Bgx(AMY)],I1,0,C,[],3,3,0,0,0,V6,0,C,[],0,3,0,0,["Rb",Bgz(ARe),"tJ",Bgx(AHY),"dO",Bgy(A$a),"Lp",Bgx(AJk),"ef",Bgy(A7U),"el",Bgy(A0m),"dR",Bgy(A_M)],E2,0,C,[],3,3,0,0,0,HJ,0,C,[E2],1,3,0,0,["d",Bgx(P9),"jk",Bgx(A1l),"Pw",Bgx(AXk)],Ws,0,C,[],4,3,0,0,0,B4,
0,C,[],3,3,0,0,0,D3,0,C,[B4],1,3,0,0,["d",Bgx(ACq)],B$,0,C,[],3,3,0,0,0,D4,0,D3,[B$],0,3,0,C1,["bj",Bgy(Hr),"lm",Bgx(AWa),"b",Bgx(ASD),"bp",Bgx(AUR),"z",Bgy(A$I)],Ez,0,C,[],0,0,0,Bat,0,Bt,0,C,[],1,0,0,W4,["d",Bgx(Co),"xf",Bgy(I_),"cE",BgA(F3),"cI",BgB(Gb),"AF",Bgy(AYi),"i6",Bgx(AXo),"F5",Bgx(ANg),"b",Bgx(APU),"Jy",Bgx(AQD),"Q",Bgy(LK),"ca",Bgy(A86),"h8",Bgx(A$o),"ed",Bgx(OO)],BB,0,Bt,[],0,0,0,0,["d",Bgx(CQ),"iS",Bgz(SA),"e",BgA(AJo),"Q",Bgy(AOH),"u",Bgx(ALc),"ca",Bgy(A29),"ba",Bgy(APz),"ed",Bgx(AGh)],Fz,0,BB,
[],0,0,0,0,["XD",Bgz(Qe),"e",BgA(ADN),"cE",BgA(AMy),"cI",BgB(A7t),"ca",Bgy(A20),"h8",Bgx(A5K),"ed",Bgx(ATg)],HR,0,C,[],1,3,0,0,["XV",BgB(ACm),"uB",BgA(Yz),"Tp",Bgy(K2),"vh",Bgy(ATt),"SO",Bgy(LR),"qS",Bgy(A1L),"Up",BgA(ID),"F4",Bgy(XW),"Tj",Bgy(JN),"LA",Bgy(A3J),"Xe",Bgx(OU),"uU",Bgx(AOv)],Do,0,HR,[],1,3,0,0,["uB",BgA(GH),"OW",Bgz(AE3)],Xx,0,Do,[],0,3,0,0,["Jm",BgA(A52),"mX",function(b,c,d,e,f,g,h){return A6$(this,b,c,d,e,f,g,h);}],Cr,0,C,[],3,3,0,0,0,BT,0,C,[Cr],1,3,0,0,["d",Bgx(B_),"dZ",Bgz(AWu),"yH",Bgy(AKf),
"z",Bgy(ADb),"bp",Bgx(A5i),"de",Bgx(AW3),"iz",Bgx(AKU),"b",Bgx(AVI)],F9,0,BT,[],0,3,0,AH9,["b6",Bgy(XD),"d",Bgx(If),"J7",Bgy(ASx)],Of,0,F9,[],0,3,0,ARH,["TO",BgB(SC),"I3",Bgx(AKl),"b6",Bgy(AB5)],Dj,0,BT,[],0,3,0,H5,["b6",Bgy(AAT),"Os",Bgy(ARo),"Ku",Bgy(AS$)],Ey,0,C,[E2],0,3,0,LX,["bP",Bgy(Wu),"Wu",Bgz(NS)],Ja,0,T,[],0,0,0,0,["d",Bgx(Qb),"T",Bgx(P5)],Bw,0,C,[],0,3,0,BbX,0,O$,0,Fz,[],0,0,0,0,["RY",Bgy(APN),"cE",BgA(AIE),"cI",BgB(A_w),"h8",Bgx(AGx)],Db,0,C,[],0,3,0,0,["oe",Bgx(AZ3),"mS",Bgx(AP9),"GB",Bgx(AJh),
"FF",Bgx(A1k),"y1",Bgy(ATK)],B5,0,Db,[],0,3,0,0,["d",Bgx(E$),"jb",Bgz(JV),"bP",Bgy(Mj)],Bm,"RuntimeException",13,B5,[],0,3,0,0,["d",Bgx(Cx),"jb",Bgz(P1),"bP",Bgy(EF)],Uz,"BufferOverflowException",11,Bm,[],0,3,0,0,["d",Bgx(ANQ)],LL,0,C,[],3,3,0,0,0,ZO,0,C,[LL],0,3,0,0,["V2",Bgy(AC6),"ON",Bgx(A88),"HS",Bgx(AVW),"KU",Bgx(AJL),"eu",Bgx(APw),"nJ",Bgx(AWM),"v4",function(b,c,d,e,f){A6n(this,b,c,d,e,f);},"D8",BgA(AOu),"kn",Bgz(AJa),"GJ",BgA(AHf),"tU",BgA(ASl),"Mh",BgB(A4z),"LL",function(b,c,d,e,f){AS6(this,b,c,d,e,
f);}],B3,0,C,[],3,3,0,0,0,VM,0,C,[B3],1,3,0,0,0,Hd,0,T,[],0,0,0,0,["d",Bgx(QB),"T",Bgx(RU)],ABD,0,Hd,[],0,0,0,0,["d",Bgx(A1u),"T",Bgx(ANq)],Ov,0,C,[],3,3,0,0,0,Wb,0,C,[E2,Ov],0,0,0,0,["TE",Bgy(ADR),"nU",Bgy(ASM),"fe",Bgx(A9p),"P0",Bgx(AR8)],Bx,0,C,[B$,B4],1,3,0,0,["dT",Bgz(Cw),"Ri",Bgx(BC),"b",Bgx(A03)],Dk,0,Bx,[],12,3,0,Vy,0,BJ,0,Bt,[],1,0,0,0,["xf",Bgy(VR),"d",Bgx(C2),"e",BgA(A$8),"cg",Bgx(A8s),"ba",Bgy(AK1)],Pd,0,BJ,[],0,0,0,0,["E_",Bgy(A1a),"bH",Bgz(A7A),"u",Bgx(A8R)],Fp,0,C,[],3,3,0,0,0,Jf,0,C,[Fp],0,3,
0,0,["d",Bgx(ACS),"ls",Bgy(AV2),"na",Bgz(ARM)],Ir,0,Jf,[],0,3,0,0,["Tr",Bgy(VA),"VN",function(b,c,d,e,f){ABZ(this,b,c,d,e,f);},"U6",function(b,c,d,e,f,g){O2(this,b,c,d,e,f,g);},"iq",BgB(OP),"rZ",BgB(AOK),"i_",BgA(VU),"QU",BgA(ADz),"hQ",BgB(AAw),"Oa",BgB(ADn)],FO,"CharSequence",13,C,[],3,3,0,0,0,D7,0,Db,[],0,3,0,0,["jb",Bgz(SU),"bP",Bgy(XO),"EX",Bgy(AAl)]]);
$rt_metadata([FS,0,D7,[],0,3,0,0,["bP",Bgy(OW)],RH,0,C,[],0,3,0,0,["d",Bgx(AHy),"mt",Bgz(XT),"e8",Bgy(ARV),"JC",Bgy(AYD),"Nc",Bgy(AR7)],Ej,"IndexOutOfBoundsException",13,Bm,[],0,3,0,0,["d",Bgx(PY),"bP",Bgy(M6)],ACw,"StringIndexOutOfBoundsException",13,Ej,[],0,3,0,0,["d",Bgx(ARd)],Mo,"MissingResourceException",8,Bm,[],0,3,0,0,["Xh",BgA(AZY)],KE,0,C,[],0,3,0,MZ,0,Jy,0,C,[],1,3,0,0,["uB",BgA(U0),"Wt",Bgy(Oc),"vh",Bgy(A9c),"W1",Bgy(Le),"qS",Bgy(A1f),"Vq",BgA(IX),"UB",Bgy(KV),"XZ",Bgx(ACd),"Qz",Bgy(WW),"Hf",Bgy(ANr),
"uU",Bgx(AZr)],KG,0,C,[],4,3,0,Bc3,0,FM,0,BB,[],0,0,0,0,["fU",Bgz(Kg),"e",BgA(AEo),"Q",Bgy(A6x),"j9",Bgy(AGN),"u",Bgx(AVE),"ba",Bgy(APQ)],YR,0,FM,[],0,0,0,0,["fU",Bgz(AIR),"e",BgA(AMs),"u",Bgx(AXe)],LY,0,C,[B3],3,3,0,0,0,I3,0,C,[],4,3,0,Ev,0,EL,0,Bx,[],12,3,0,O5,0,Y6,0,T,[],0,0,0,0,["wj",Bgz(AGy),"KM",BgA(AS2),"T",Bgx(A0a)],LZ,0,C,[],3,3,0,0,0,Gi,0,C,[LZ],3,3,0,0,0,NI,0,C,[],3,3,0,0,0,DS,0,C,[Gi,NI],1,3,0,0,["d",Bgx(G_),"nc",BgA(ADW)],Lm,0,DS,[],0,3,0,ATo,["vY",Bgy(A5d)],Dd,0,Bt,[],1,0,0,0,["gD",BgA(FW),"pV",
Bgx(A_g),"ca",Bgy(AQc),"ba",Bgy(A9k),"ed",Bgx(AM2)],RA,0,Dd,[],0,0,0,0,["gD",BgA(AEA),"e",BgA(A_c),"cE",BgA(AQ2),"u",Bgx(A6g)],IL,0,C,[B3],3,3,0,0,0,SY,0,C,[IL],0,0,0,0,["V8",Bgy(A43),"qm",Bgx(AUV),"JQ",Bgx(AF0)],Cy,0,Bt,[],0,0,0,JF,["bj",Bgy(Et),"e",BgA(AEW),"ka",Bgx(A3N),"u",Bgx(AJ1),"ba",Bgy(AFw)],Ks,0,Cy,[],0,0,0,0,["bj",Bgy(AB4),"e",BgA(AFI),"u",Bgx(A8X)],MA,0,C,[Cr],3,3,0,0,0,OT,0,BB,[],0,0,0,0,["o9",Bgy(ARJ),"Q",Bgy(AZ1),"e",BgA(AKi),"u",Bgx(A5V)],CI,0,Dd,[],0,0,0,0,["gD",BgA(Fd),"e",BgA(AVh),"u",Bgx(A1J)],Rz,
0,CI,[],0,0,0,0,["gD",BgA(AXF),"e",BgA(ATw)],Ko,0,C,[],3,3,0,0,0,AAq,0,Do,[],0,3,0,0,["kd",Bgy(ATa),"mX",function(b,c,d,e,f,g,h){return AJz(this,b,c,d,e,f,g,h);}],Dc,0,C,[],0,3,0,0,0,BH,0,C,[B$],1,3,0,NJ,["FU",Bgy(Fb),"zJ",Bgy(AWz),"z",Bgy(AUv),"b",Bgx(ARI),"bp",Bgx(F2)],Dn,0,B5,[],0,3,0,0,["d",Bgx(Jt)],Iv,0,C,[],3,3,0,0,0,H7,0,C,[Iv],0,3,0,0,["d",Bgx(QN),"Ai",Bgy(AVq)],KP,0,C,[],3,3,0,0,0,FA,0,H7,[KP],0,3,0,0,["X0",function(b,c,d,e,f,g){AAF(this,b,c,d,e,f,g);},"BA",Bgx(AUm),"sp",Bgx(AOO),"vy",Bgx(AJG),"b",
Bgx(AER),"Cy",Bgy(A71)],AAg,"CoderMalfunctionError",11,D7,[],0,3,0,0,["EX",Bgy(AM$)],Ml,0,C,[B3],3,3,0,0,0,XU,0,C,[Ml],0,0,0,0,["S_",Bgy(ALz),"Il",Bgx(AP8),"T2",Bgx(AOw)],XR,0,CI,[],0,0,0,0,["gD",BgA(A2k),"e",BgA(A4h)],By,0,C,[],0,3,0,J8,0,ES,0,C,[B4,FO],0,0,0,0,["d",Bgx(J6),"bj",Bgy(JT),"Uu",Bgy(Y4),"Wm",Bgy(Lj),"k5",Bgz(NW),"X1",Bgy(PH),"AX",Bgz(AVZ),"LJ",BgA(A1M),"RS",Bgy(ACg),"DX",Bgz(RN),"M3",BgA(AMZ),"VT",Bgy(TM),"CU",Bgz(Z5),"S6",Bgy(Nb),"vb",Bgz(Ow),"wU",Bgz(QI),"SE",Bgy(Th),"xx",Bgz(OH),"gY",Bgy(My),
"b",Bgx(Nv),"i",Bgx(M3),"f",Bgy(O4),"E1",BgA(PL),"vA",BgB(ZQ),"Xw",Bgy(ACQ),"tX",BgA(Oq),"uF",BgB(Mp),"Wi",Bgy(ND),"d_",Bgz(AA$),"pv",BgB(Yt),"uy",Bgy(ABM),"VB",Bgy(AB0),"VE",Bgz(ACf),"ce",Bgz(Xc)],Fw,0,C,[],3,3,0,0,0,PI,0,ES,[Fw],0,3,0,0,["d",Bgx(A1j),"IK",Bgy(AHb),"I_",Bgy(AQ3),"Lm",BgA(ATv),"Py",Bgy(AHW),"Nu",BgA(AV$),"Bx",Bgy(A83),"IC",BgB(A3F),"OB",BgB(A3W),"QP",Bgz(A9J),"HG",Bgz(A7m),"uF",BgB(AIz),"tX",BgA(AW4),"vA",BgB(A0B),"E1",BgA(A6X),"f",Bgy(AUS),"i",Bgx(A_b),"b",Bgx(AXi),"gY",Bgy(AXy),"vb",Bgz(A8n),
"k5",Bgz(AU7)],EJ,0,C,[],3,3,0,0,0,CT,0,C,[],1,3,0,0,["bj",Bgy(FJ),"Wr",Bgx(CV),"SN",Bgx(B8),"cZ",Bgy(GL),"Tf",Bgx(BD),"cm",Bgy(IZ),"c1",Bgx(FZ),"db",Bgx(G7),"VL",Bgx(Bb),"Vr",Bgx(Cb)],N6,0,C,[],4,3,0,AIr,0,E8,0,C,[],1,0,0,0,["d",Bgx(Mh)]]);
$rt_metadata([Q,0,E8,[],1,0,0,Kd,["d",Bgx(Be),"bK",Bgx(AW1),"ci",Bgx(AV0),"Ga",Bgx(A3L),"Dg",Bgx(A1c),"mh",Bgx(A8i),"N8",Bgx(AEP),"mR",Bgx(AW_),"g8",Bgx(A$m),"f9",Bgy(ARR),"jH",Bgx(AIx)],ZA,0,Q,[],0,0,0,0,["WU",Bgy(A2i),"p",Bgy(ATj)],Gw,0,C,[],4,0,0,AP1,["d",Bgx(TW),"Wj",Bgy(ACc)],Ny,0,C,[],3,3,0,0,0,JZ,0,C,[B4],0,3,0,Vd,["MM",Bgy(ADG),"GI",Bgy(A$2),"d",Bgx(Qt),"DM",Bgz(A5v),"wR",Bgx(A04),"Ld",Bgx(AQS),"NS",BgA(AUc)],K4,0,C,[],3,3,0,0,0,ABu,0,C,[K4],0,3,0,0,["Tn",Bgy(ASJ),"Op",Bgz(AYk),"oc",Bgy(A9N),"Fq",Bgy(AWV)],EN,
0,Bx,[],12,0,0,AA8,0,IR,0,T,[],0,0,0,0,["d",Bgx(TT),"T",Bgx(ZC)],R0,0,T,[],0,0,0,0,["d",Bgx(AGc),"T",Bgx(A0D)],Nk,0,C,[],3,3,0,0,0,Ek,0,BB,[],0,0,0,0,["yk",Bgz(J3),"Q",Bgy(A$s),"e",BgA(AOn),"u",Bgx(A5b),"vr",BgA(AKN),"ca",Bgy(ALx),"ba",Bgy(A6B)],AAf,0,Ek,[],0,0,0,0,["yk",Bgz(AXs)],Jw,0,C,[],1,3,0,0,["d",Bgx(Xg),"IX",Bgy(ALk),"XB",Bgx(N$),"jk",Bgx(ANZ),"nU",Bgy(APg),"R6",Bgy(Zk)],Zq,0,C,[B3],1,3,0,0,0,Da,0,Jy,[],1,3,0,0,["uB",BgA(GD),"F_",Bgz(ARS)],X_,0,Da,[],0,3,0,0,["kd",Bgy(AGF),"nd",function(b,c,d,e,f,g,
h){return AT9(this,b,c,d,e,f,g,h);}],Yo,0,C,[],4,3,0,0,0,Gg,0,C,[Cr],0,3,0,FD,["ND",Bgy(Pb),"Ve",BgA(T_),"D5",Bgy(ADF),"f8",Bgx(AG8),"ky",Bgx(AKX),"l0",Bgx(ANw),"le",Bgx(AQt),"bo",Bgx(AJw),"bl",Bgx(AMX),"kA",Bgx(A7k),"iz",Bgx(AXQ),"sV",Bgx(ADX),"QB",Bgx(AFv),"Oe",Bgx(ARb),"JP",Bgx(A5k),"Jr",Bgx(A$F),"zh",function(b,c,d,e,f,g,h){AZc(this,b,c,d,e,f,g,h);},"Lv",function(b,c,d,e,f,g,h,i,j){APq(this,b,c,d,e,f,g,h,i,j);}],HD,0,BH,[],0,3,0,ABF,0,ACG,0,Cy,[],0,0,0,0,["d",Bgx(AUt),"e",BgA(AYe),"u",Bgx(A1_)],KQ,0,C,[],
3,3,0,0,0,JC,0,BB,[],0,0,0,0,["iS",Bgz(V0),"e",BgA(AOp),"u",Bgx(AMp),"ba",Bgy(A6Z)],Dr,0,JC,[],0,0,0,0,["iS",Bgz(Gc),"e",BgA(AYV),"Q",Bgy(A6y),"u",Bgx(AD7)],VD,0,Dr,[],0,0,0,0,["iS",Bgz(AJf),"e",BgA(AOE),"ba",Bgy(ARZ),"u",Bgx(A$n)],Gx,0,C,[],3,3,0,0,0,Pv,0,C,[Gx],0,3,0,0,["d",Bgx(A5L)],Ie,0,C,[MA],1,3,0,0,["d",Bgx(SF),"J1",Bgy(A2d)],Pu,0,Ie,[],0,3,0,0,["S8",Bgy(WX),"d",Bgx(A$p),"Gc",Bgy(ASm)],ABz,0,Dr,[],0,0,0,0,["iS",Bgz(AIt),"e",BgA(AFm),"ba",Bgy(A8y),"u",Bgx(AJc)],Ld,0,C,[],3,3,0,0,0,Ho,0,C,[Ld],0,3,0,0,
["X4",BgB(AYb),"x3",Bgx(AUM),"zY",Bgx(AYc),"Qw",Bgx(AMv),"Fm",Bgx(A15),"bo",Bgx(ALF),"bl",Bgx(AYs),"f8",Bgx(AIi),"QR",Bgx(AVP),"qH",Bgx(AHr),"Ol",Bgx(A4k),"Hc",Bgy(AYJ)],Hy,"UnsupportedOperationException",13,Bm,[],0,3,0,0,["d",Bgx(R7)],ACL,"ReadOnlyBufferException",10,Hy,[],0,3,0,0,["d",Bgx(A18)],N1,0,BH,[],0,3,0,GO,0,Z1,0,C,[],4,3,0,0,0,DP,0,C,[],1,3,0,0,["d",Bgx(HV)],OA,0,DP,[],0,3,0,0,["d",Bgx(AKr),"Lu",Bgy(AKx),"H4",BgA(AN1),"Ij",function(b,c,d,e,f,g,h){return AFh(this,b,c,d,e,f,g,h);},"F6",Bgy(AXD)],AAm,
0,C,[],0,3,0,0,["d",Bgx(AFN)],UD,0,C,[Fp],0,3,0,0,["RI",Bgy(AE1),"lH",Bgy(AKI),"oF",Bgy(AT8),"ls",Bgy(AUq),"iq",BgB(AEx),"hQ",BgB(AQq),"i_",BgA(AII),"na",Bgz(ARY),"oJ",Bgz(A36)],FL,0,FS,[],0,3,0,0,["bP",Bgy(KF)],AAd,0,FL,[],0,3,0,0,["bP",Bgy(AF4)],Pr,0,T,[],0,0,0,0,["d",Bgx(AF6),"T",Bgx(AHB)],IS,0,C,[B3],3,3,0,0,0,Cz,0,C,[],3,3,0,0,0,IE,0,C,[Cz],3,3,0,0,0,Jb,0,C,[IE],1,3,0,0,["d",Bgx(Um),"II",Bgy(AZA)],E9,0,C,[Gi],1,3,0,0,["d",Bgx(Kv),"rv",BgA(A8Y),"fP",Bgx(A1e)],ABj,0,E9,[],0,3,0,0,["W7",BgA(ACX),"T1",Bgy(AFr),
"Bg",Bgx(AX5),"rv",BgA(A$A),"fP",Bgx(AJ3)],Tw,0,C,[],4,3,0,0,0]);
$rt_metadata([IN,0,CT,[B$],1,3,0,0,["gd",BgA(AAh),"Sr",Bgx(Tz),"c1",Bgx(A4u)],JH,0,C,[],1,3,0,0,["d",Bgx(Tl),"PL",Bgy(A8J),"NT",Bgx(A8t),"GC",Bgy(AJe),"Kn",Bgz(AHi),"HI",BgB(AXu)],CG,0,Dd,[],0,0,0,0,["lk",BgA(E4),"e",BgA(AUY),"u",Bgx(AXY)],Ed,0,CG,[],0,0,0,0,["lk",BgA(Nr),"e",BgA(A3y),"Q",Bgy(AUf)],TX,0,Ed,[],0,0,0,0,["lk",BgA(A$C),"e",BgA(ANf)],Hv,0,C,[],3,3,0,0,0,V,0,C,[Hv],1,3,0,0,["d",Bgx(BM),"x2",Bgz(AIC)],ABt,0,C,[],0,0,0,0,["d",Bgx(AL4),"Gz",BgB(AU0)],XE,0,C,[],0,3,0,0,0,Nl,0,C,[],3,3,0,0,0,Hf,0,Bm,[],
0,3,0,0,0,GE,0,BT,[],0,3,0,AJM,["d",Bgx(Jg),"b6",Bgy(Pl)],FT,0,GE,[],0,3,0,AG$,["b6",Bgy(Tn),"d",Bgx(HL),"IN",Bgy(A0w),"Ix",Bgy(AY6),"G_",Bgy(AXJ),"HJ",Bgy(ASV)],GB,0,C,[],1,3,0,0,["d",Bgx(UL)],Xi,0,C,[],4,0,0,0,0,OX,0,Q,[],0,0,0,0,["RH",Bgy(A62),"p",Bgy(AG2)],C0,0,C,[B$],1,3,0,0,["Si",Bgz(GG),"x_",Bgx(Z_),"Qz",Bgy(ZK),"F4",Bgy(UI)],RO,0,C0,[],0,3,0,0,["WQ",BgA(AFb),"lL",Bgx(AKE),"mw",Bgx(ADY)],BZ,0,C,[],0,3,0,0,["d",Bgx(C7),"ek",Bgy(AQw),"ck",Bgy(AWj)],PD,0,BZ,[],0,0,0,0,["Tq",Bgz(AY4),"ek",Bgy(A4r),"ck",Bgy(AZn),
"Jd",Bgz(ANc),"ct",Bgz(AFH)],PU,0,C,[],4,3,0,0,0,Hi,0,C,[],3,3,0,0,0,Sh,0,C,[Hi],0,3,0,0,["X9",BgB(A0l),"fe",Bgx(AKA)],PE,0,BZ,[],0,0,0,0,["XJ",BgA(AVN),"ek",Bgy(A4d),"ck",Bgy(A3g),"hY",Bgz(A7w),"ct",Bgz(A8u)],LC,0,C,[B3],3,3,0,0,0,W0,0,C,[LC],0,0,0,0,["Q2",Bgy(ANJ),"PK",Bgy(A0x),"Xk",Bgy(A4m)],PF,0,BZ,[],0,0,0,0,["R0",BgB(AD1),"ek",Bgy(ALE),"ck",Bgy(A7D),"ct",Bgz(APo)],J5,0,C,[],32,0,0,Bd2,0,ABG,0,C,[],4,3,0,0,0,Uv,0,C,[],0,3,0,0,["d",Bgx(A6S),"Iz",Bgy(AWZ),"Qe",BgA(AV7),"Ni",Bgx(A$j),"EZ",function(b,c,d,e,
f,g){return A75(this,b,c,d,e,f,g);},"Qm",Bgz(A4g),"Mu",BgB(AF2)],H8,0,Ja,[],0,0,0,0,["d",Bgx(Rv),"T",Bgx(QV)],JI,0,H8,[],0,0,0,0,["d",Bgx(S_),"T",Bgx(Vr)],Zc,0,JI,[],0,0,0,0,["d",Bgx(AQ0),"T",Bgx(AM5)],AAY,0,T,[],0,0,0,0,["d",Bgx(A4L),"T",Bgx(ARO)],YW,0,Dr,[],0,0,0,0,["iS",Bgz(AQ9),"e",BgA(AGe),"ba",Bgy(A_F),"u",Bgx(AN_)],Zf,0,BJ,[],0,0,0,0,["E_",Bgy(AYN),"bH",Bgz(AG9),"cE",BgA(AWO),"cI",BgB(A0z),"u",Bgx(AOy),"ca",Bgy(AJX),"Oc",BgA(A9f),"LI",BgA(A8o),"vc",Bgz(AKk)],RG,0,C0,[],0,3,0,0,["d",Bgx(AIF),"lL",Bgx(AXK),
"mw",Bgx(AUH)],Ne,0,C,[Fw,FO],0,3,0,C5,["bj",Bgy(XL),"V_",Bgx(N4),"Rz",Bgy(CJ),"TY",Bgy(IH),"b",Bgx(AD5),"ly",Bgy(APt),"Ac",Bgy(AP5),"GU",Bgz(AGM),"P4",BgA(AEi),"ys",Bgy(A3G),"CK",Bgy(A0O)],DD,0,C,[],0,3,0,Lo,0,Ud,"ArrayStoreException",13,Bm,[],0,3,0,0,["d",Bgx(AZ2)],Mz,"ReflectionException",4,B5,[],0,3,0,0,["jb",Bgz(A7a)],FP,0,CI,[],0,0,0,0,["gD",BgA(Mk),"e",BgA(A74),"Q",Bgy(A9E)],Ih,0,C,[],3,3,0,0,0,NT,0,C,[Ih],0,0,0,0,["Sn",function(b,c,d,e,f,g){Sn(this,b,c,d,e,f,g);},"by",Bgz(ASd),"ev",Bgy(A3a),"pQ",Bgx(AUI),
"pc",Bgy(ALL),"eA",Bgz(AYw),"u1",Bgz(AWP),"jq",Bgy(A6p),"nE",Bgy(APB),"BV",Bgy(AEI),"OL",Bgy(A2m),"wz",Bgx(APu),"lD",Bgy(AGs),"MH",Bgx(AMF),"zj",Bgy(AVb),"fN",Bgz(AXX),"LV",Bgx(A9O),"LC",Bgx(A9Q),"tI",BgA(A$H),"fV",Bgx(AG3),"G9",Bgy(A7n),"dI",Bgx(AXn),"J",Bgx(A3z),"pN",Bgy(AZb),"Cv",Bgx(AIW),"jB",Bgx(A1h),"lI",Bgx(AU_),"NA",Bgx(AV5)],Q0,0,C,[],0,3,0,0,["d",Bgx(A33)],PX,0,BJ,[],0,0,0,0,["o9",Bgy(AN3),"bH",Bgz(A2u),"u",Bgx(AXc)],JB,0,C,[],0,3,0,0,["d",Bgx(A76),"Kj",Bgy(A2O),"GD",Bgz(A6j),"b",Bgx(AJB)],Vm,0,BZ,
[],0,0,0,0,["Jc",Bgy(AWw),"ct",Bgz(A8c),"ck",Bgy(AH0)],Vk,0,BZ,[],0,0,0,0,["XL",Bgz(ASi),"ct",Bgz(AOZ),"ck",Bgy(A3K)],VB,0,Q,[],0,0,0,0,["Q6",Bgy(ALf),"p",Bgy(A$5)]]);
$rt_metadata([Vl,0,BZ,[],0,0,0,0,["Jc",Bgy(AWE),"hY",Bgz(AKB),"ck",Bgy(A7T),"ct",Bgz(AUG)],KJ,"GdxRuntimeException",3,Bm,[],0,3,0,0,["jb",Bgz(AD8),"bP",Bgy(QC)],Fo,0,C,[Cr],1,3,0,NZ,["fU",Bgz(KC),"ew",Bgx(A3Z),"rT",Bgy(ARg),"N9",Bgx(AJg),"LP",Bgz(ASI),"ww",BgA(AOX),"Qk",Bgz(AE2),"Dn",BgA(ADC),"OU",Bgz(AZX),"P8",Bgz(AIX)],LF,0,Fo,[],0,3,0,FY,["ND",Bgy(YZ),"Kp",Bgz(AAv),"Xn",BgA(H$),"Tb",Bgy(JM),"RJ",BgA(NH),"Nd",Bgy(AR_),"bo",Bgx(AOd),"bl",Bgx(A8Q),"b",Bgx(ANu)],LB,0,C,[B3],3,3,0,0,0,W1,0,C,[LB],0,0,0,0,["Q2",
Bgy(ANe),"Nt",Bgy(A4N),"VX",Bgy(ATJ)],WL,0,C,[],4,3,0,0,0,F5,0,C,[],0,3,0,Di,["bP",Bgy(AAR)],Ge,0,C,[B4,B$],0,3,0,A_0,["b6",Bgy(S0),"VO",Bgx(A0U)],C3,"IllegalArgumentException",13,Bm,[],0,3,0,0,["d",Bgx(FX),"bP",Bgy(ACW)],Tv,"IllegalCharsetNameException",11,C3,[],0,3,0,0,["bP",Bgy(ARh)],Ub,0,C,[Ny,IS],0,3,0,0,["T0",Bgy(AHQ),"dU",Bgy(A2D),"fV",Bgx(AKW),"g5",BgA(A8Z),"ko",Bgz(AMz),"kg",Bgz(AKg),"my",Bgz(A$D),"kI",Bgz(A0_),"L9",Bgy(AV9),"kS",Bgx(AHG),"J2",Bgy(AGq),"sn",Bgx(A_G),"lF",Bgy(APr)],U6,"NoSuchElementException",
8,Bm,[],0,3,0,0,["d",Bgx(A4e),"bP",Bgy(A2a)],IB,0,DS,[],0,3,0,0,["Ug",Bgy(O1)],HA,0,IB,[],0,3,0,0,["Ui",Bgz(Oe),"nc",BgA(A4U),"GQ",Bgy(AY$),"pp",Bgy(A10),"gh",Bgy(AXW),"K4",Bgy(ALl),"NB",Bgx(A6M)],Sv,0,Dr,[],0,0,0,0,["iS",Bgz(AVv),"e",BgA(AUX),"ba",Bgy(A7d),"u",Bgx(AFM)],Pm,0,C,[LY],0,0,0,0,["WT",Bgz(ASz),"HP",Bgx(AR1),"GX",Bgx(A9r),"T3",Bgx(ANW),"Ro",Bgx(AHk)],Fy,0,IN,[],1,0,0,0,["gd",BgA(MG),"Li",Bgx(ARn),"gs",Bgy(A4o),"b2",Bgy(AML),"ti",Bgz(A80),"b_",Bgx(AMb)],FI,0,Fy,[],1,0,0,0,["fO",function(b,c,d,e,f,
g){JO(this,b,c,d,e,f,g);},"e1",Bgx(ALW)],Px,0,FI,[],0,0,0,0,["fO",function(b,c,d,e,f,g){AZs(this,b,c,d,e,f,g);},"p1",Bgy(AIP),"nQ",Bgz(ADc)],ABS,0,FM,[],0,0,0,0,["fU",Bgz(A9m),"e",BgA(AGD),"cE",BgA(ARW),"cI",BgB(AD4),"ca",Bgy(A30),"u",Bgx(A9y)],Ww,0,Dd,[],0,0,0,0,["X6",BgB(A59),"e",BgA(AOJ),"cE",BgA(ADm),"u",Bgx(A7p)],Ts,0,T,[],0,0,0,0,["d",Bgx(A1q),"T",Bgx(ALM)],IT,0,C,[],4,3,0,ACH,0,Cs,0,Bx,[],12,3,0,Ix,["R5",Bgx(E6)],Bi,"Color",5,C,[],0,3,0,Bv,["d",Bgx(U3),"bj",Bgy(ABW),"F2",BgB(SJ),"Th",Bgy(Ua),"eR",Bgy(AES),
"Jk",Bgy(A$T),"VH",Bgy(AEz),"TF",Bgy(A5G),"Rl",Bgy(AV4),"dL",Bgx(A7F),"hV",BgB(A4w),"Tc",Bgy(AOP),"Xp",BgB(ADU),"Rv",BgB(AQJ),"Wo",BgB(A8m),"Vl",Bgz(ANT),"RC",function(b,c,d,e,f){return AXA(this,b,c,d,e,f);},"X8",Bgx(AMI),"z",Bgy(AZh),"bp",Bgx(AMg),"ny",Bgx(AR3),"r1",Bgx(ATV),"b",Bgx(AGW),"Ph",BgA(A7i),"RW",Bgy(AU4),"Vk",Bgy(A6Y),"Sx",Bgx(A9h)],Fc,0,C,[],4,3,0,0,["TQ",BgA(ANC),"Ts",BgB(ACE),"S7",function(b,c,d,e,f,g){AAE(this,b,c,d,e,f,g);},"z",Bgy(ANG),"Xy",Bgy(KH),"SA",Bgx(IU),"R3",Bgx(QD),"bp",Bgx(AYQ)],IA,
0,C,[],0,3,0,0,["d",Bgx(UP)],Gd,0,IA,[],0,3,0,0,["Sg",BgA(Hn),"rx",Bgx(AH_),"x_",Bgx(AKu),"Oo",Bgx(A7S),"OD",Bgx(AGn),"qy",Bgx(ASn),"vN",Bgx(AH2),"MC",Bgy(A94),"Iy",Bgx(A8f),"KD",Bgy(AOr),"La",Bgx(AHc),"Hz",Bgx(A84),"b",Bgx(A4G)],F6,0,BT,[],0,3,0,AKQ,["d",Bgx(Nw),"b6",Bgy(S3)],ABd,0,F6,[],0,3,0,0,["VC",Bgy(A5C),"Q0",Bgy(ARy),"In",Bgy(AMW)],T2,0,CG,[],0,0,0,0,["WO",Bgy(AKT),"e",BgA(A$4),"cE",BgA(ANF)],Ew,0,C,[Cr],0,3,0,UV,["IW",Bgz(UY),"IE",Bgx(AKK),"q1",Bgx(A8l),"r_",Bgx(A9n),"AN",Bgz(A2$),"yh",Bgz(A1D),"Dl",
Bgz(A0t),"kc",Bgz(APO),"Gf",BgA(ADV),"jh",BgB(AFP),"yu",function(b,c,d,e,f){AQf(this,b,c,d,e,f);},"z$",BgB(ARP),"Fg",Bgz(AZE),"IM",BgA(AVT),"GT",Bgz(AL0),"zx",BgA(A38),"HV",Bgz(A9A),"LB",BgA(AId),"PN",BgB(AWR),"sq",Bgz(ADf),"KO",Bgz(A6f),"id",function(b,c,d,e,f,g){A$U(this,b,c,d,e,f,g);},"ew",Bgx(AV3),"BI",Bgy(AFf),"tO",Bgy(A22),"lT",Bgy(A6d),"lZ",Bgy(AE9)],DO,0,Bx,[],12,3,0,GR,0,Mf,0,C,[],3,3,0,0,0,Jx,0,C,[Iv,Mf],0,3,0,0,["b",Bgx(AMl),"z6",Bgx(AWI),"vZ",Bgy(AY9),"u",Bgx(A2G),"hf",Bgx(AJq),"GO",Bgx(ASQ),"gq",
Bgx(A3H),"rr",Bgx(A_m),"L5",Bgx(AS5),"GL",Bgy(A7O),"Hx",Bgy(A7M)],CO,0,C,[B3],1,3,0,0,0,Zj,0,CO,[],1,3,0,0,0,DM,0,C,[],3,3,0,0,0,ACb,0,C,[DM,B4],0,3,0,0,["d",Bgx(AXB),"bj",Bgy(AVk),"sR",Bgy(APx),"n4",Bgz(AJZ),"rV",Bgy(A_I),"Oz",Bgz(AVx),"eL",Bgy(AVD),"lc",Bgy(A$W),"Qa",Bgy(AO7),"Mb",Bgy(AOG),"dN",Bgy(A9Y),"iI",Bgy(ATR),"iQ",Bgy(A9P),"i8",Bgy(A2P),"bN",Bgx(A98)],VE,0,Q,[],0,0,0,0,["Xq",Bgy(A_n),"p",Bgy(AHl)],NU,0,C,[],3,3,0,0,0,FN,0,C,[],1,3,0,0,["d",Bgx(Lv),"M4",BgA(AIM),"HT",Bgx(A0L),"Gd",Bgz(A57),"zk",BgA(APe),
"Kx",BgA(API),"k_",Bgy(A_k)],QG,0,FN,[],0,3,0,0,["d",Bgx(AF8),"f6",Bgx(AYy),"p$",Bgy(A_y)],Hc,0,C,[Cr],3,3,0,0,0,HO,0,C,[Hc],0,3,0,0,["mN",Bgz(AYA),"bj",Bgy(ABv),"l2",Bgx(AJ5),"ne",Bgx(AVw),"uC",BgA(ANU),"um",Bgx(AUK),"ew",Bgx(A9R),"Ee",Bgx(A6_)],Qu,0,HO,[],0,3,0,0,["bj",Bgy(A5j)],JA,0,D3,[B$],0,3,0,Qx,["RE",Bgx(A8V)],V_,0,C,[],0,3,0,0,0,Dz,0,BJ,[],0,0,0,0,["nY",Bgy(APl),"cg",Bgx(A2e),"bH",Bgz(AJK),"cE",BgA(AH4),"cI",BgB(ALh),"u",Bgx(AR2),"ps",Bgx(AFn),"ca",Bgy(ARq)]]);
$rt_metadata([VY,0,BZ,[],0,0,0,0,["U4",Bgy(AE6),"ct",Bgz(A_l)],Mt,0,C,[],32,0,0,BdL,0,Wy,0,Q,[],0,0,0,0,["GH",BgA(ATu),"p",Bgy(AQk)],WF,0,Q,[],0,0,0,0,["kl",BgB(A0c),"p",Bgy(AC5)],WA,0,Q,[],0,0,0,0,["nF",Bgz(ADg),"p",Bgy(A64)],M7,0,C,[B3],3,3,0,0,0,Wz,0,Q,[],0,0,0,0,["GH",BgA(ADs),"p",Bgy(A3v)],WB,0,Q,[],0,0,0,0,["nF",Bgz(ADp),"p",Bgy(AJr)],WI,0,Q,[],0,0,0,0,["qk",BgA(AHe),"p",Bgy(AYu)],GS,0,C,[Cr],3,3,0,0,0,WD,0,Q,[],0,0,0,0,["kl",BgB(ADP),"p",Bgy(AY_)],WC,0,Q,[],0,0,0,0,["nF",Bgz(AUU),"p",Bgy(AMC)],P3,0,BB,
[],4,0,0,0,["HD",Bgy(AGw),"e",BgA(A5c),"u",Bgx(AYl),"Q",Bgy(A7o),"i6",Bgx(AC3),"ba",Bgy(ATP)],WG,0,Q,[],0,0,0,0,["qk",BgA(A0K),"p",Bgy(AR0)],DK,0,C,[B$],0,3,0,Bd,0,OQ,0,BJ,[],0,0,0,0,["nY",Bgy(APW),"bH",Bgz(ADH),"u",Bgx(AKd)],Dv,0,BJ,[],0,0,0,0,["bj",Bgy(ATN),"bH",Bgz(A60),"cE",BgA(A4H),"cI",BgB(AF1),"u",Bgx(A9F),"sT",Bgx(AUZ),"ca",Bgy(A6G)],Zd,0,T,[],0,0,0,0,["wj",Bgz(AHL),"KM",BgA(AUA),"T",Bgx(ADa)],Sw,0,C,[B3],1,3,0,0,0,Se,0,C,[],0,3,0,0,["d",Bgx(A6h)],D9,0,C,[],1,0,0,0,["d",Bgx(Km)],HU,0,CT,[B$,Fw,FO,Nl],
1,3,0,0,["gd",BgA(ZD),"rk",BgA(AEr),"Mx",Bgy(APC),"P6",BgA(A_o),"H0",BgA(AWA),"XS",Bgy(IV),"Cq",Bgx(WJ),"XX",Bgx(NK),"XE",Bgx(K$),"oP",Bgy(AMn)],Hs,0,HU,[],1,0,0,0,["gd",BgA(Qd),"JO",Bgx(AEu),"b_",Bgx(A$R)],Ro,0,Hs,[],0,0,0,0,["bj",Bgy(A50),"Xt",function(b,c,d,e,f,g){Va(this,b,c,d,e,f,g);},"z1",Bgy(A5g),"sc",Bgz(A3i),"Ox",Bgx(AOb),"NE",Bgx(AIS),"e1",Bgx(ATm)],S8,0,C,[Cz],0,3,0,0,["bj",Bgy(AQj),"mt",Bgz(Q3),"e8",Bgy(AJj),"Ln",Bgz(A0X),"l",Bgy(AT3),"mC",Bgy(A9G),"F8",Bgz(ATH)],ABC,0,Do,[],0,3,0,0,["kd",Bgy(AHH),
"mX",function(b,c,d,e,f,g,h){return AP_(this,b,c,d,e,f,g,h);}],EA,0,C,[Cz,Gx,B$],0,3,0,0,["d",Bgx(Ly),"Vj",Bgx(GP),"L6",Bgx(Eg),"VI",Bgy(BA),"UN",Bgz(HK),"K",Bgx(AKn),"Ua",Bgy(Ep),"T6",Bgy(X6),"TL",Bgy(F7),"UQ",Bgy(Ct),"KW",Bgy(AQC),"XP",Bgz(RX),"Ti",Bgz(Q1),"ft",Bgx(Kb),"Ge",Bgx(AWW),"bp",Bgx(Wc),"z",Bgy(Vw),"cW",Bgz(AWC)],F4,0,EA,[],0,3,0,Jn,["d",Bgx(Kz),"bP",Bgy(Jl),"Rp",Bgy(NG),"Tu",Bgy(ACa),"WM",Bgz(KM),"Je",Bgx(A7r),"bp",Bgx(AL9),"z",Bgy(AIc)],D5,"Pool",3,C,[],1,3,0,0,["d",Bgx(N5),"fU",Bgz(Ma),"eT",Bgx(OV),
"jr",Bgy(AGG),"zl",Bgy(AJP),"Dc",Bgy(AYm),"Eg",Bgy(UO)],DX,0,D5,[],1,3,0,0,["d",Bgx(Jh),"eT",Bgx(Wi),"eo",Bgx(AMB)],TD,0,DX,[],0,3,0,0,["d",Bgx(AEd),"OT",Bgx(AM8),"K7",Bgx(A9l),"eT",Bgx(AGJ),"tW",Bgx(ANH)],AAc,0,Q,[],0,0,0,0,["Vz",Bgy(ADk),"p",Bgy(A8_)],JG,0,C,[B4],0,3,0,APS,["F2",BgB(Yd),"d",Bgx(Rs),"nx",BgB(AH3),"Pj",Bgy(AM3),"ws",Bgz(AYU),"ua",Bgx(A4p),"JT",Bgx(ANo),"Ka",Bgy(A23),"Cj",Bgx(A$P),"Kd",BgB(AEh),"J4",BgB(ARD)],Eb,0,C,[],4,3,0,Bd1,0,NB,0,C,[],0,3,0,Lb,0,RI,0,Q,[],0,0,0,0,["Sv",Bgy(A0g),"p",Bgy(AZ_)],G4,
0,C,[],1,3,0,0,["d",Bgx(R3)],Y5,"UnsupportedCharsetException",11,C3,[],0,3,0,0,["bP",Bgy(AEZ)],GI,0,CT,[B$],1,3,0,0,["gd",BgA(Py),"DG",BgA(A8x),"TZ",Bgx(Uo),"TJ",Bgx(AB9),"H5",Bgy(APP),"HL",Bgy(A7x),"db",Bgx(A8E),"c1",Bgx(ATL),"cm",Bgy(A3A),"cZ",Bgy(AVz)],Fh,0,GI,[],1,0,0,0,["gd",BgA(Lr),"Km",Bgy(A6C),"b_",Bgx(A2y)],Fr,0,Fh,[],1,0,0,0,["fO",function(b,c,d,e,f,g){Lt(this,b,c,d,e,f,g);},"e1",Bgx(A1i)],VQ,0,Fr,[],0,0,0,0,["fO",function(b,c,d,e,f,g){A3e(this,b,c,d,e,f,g);},"vn",Bgy(AYt),"qV",Bgz(AXO)],YH,0,Q,[],
0,0,0,0,["Ul",Bgy(A0h),"p",Bgy(AP0)],DW,0,CT,[B$],1,3,0,0,["gd",BgA(AAy),"wA",BgA(ANA),"Xu",Bgx(R5),"VR",Bgx(Wm),"OZ",Bgy(AJi),"MK",Bgy(A4S),"db",Bgx(AJA),"c1",Bgx(AT0),"cm",Bgy(AOU),"cZ",Bgy(AS8)],Fu,0,DW,[],1,0,0,0,["gd",BgA(K3),"oa",Bgy(AK5),"KB",Bgz(A$N),"b_",Bgx(AYP)],ER,0,Fu,[],1,0,0,0,["fO",function(b,c,d,e,f,g){LP(this,b,c,d,e,f,g);},"e1",Bgx(A5D)],ABL,0,Bt,[],4,0,0,0,["bj",Bgy(A0u),"e",BgA(ALA),"ba",Bgy(A0q),"u",Bgx(AMk)],Ut,0,BJ,[],0,0,0,0,["nY",Bgy(A4t),"bH",Bgz(AUw),"u",Bgx(A5s)],Hp,0,BH,[],0,3,
0,A3P,0,E5,0,C,[Cz],0,3,0,0,["d",Bgx(AFQ),"bj",Bgy(Op),"mN",Bgz(Kj),"Xz",BgA(Vo),"S0",Bgy(A8d),"Sh",BgB(Rq),"F",Bgy(AP2),"qA",Bgy(AJ6),"JA",BgA(ADT),"Jb",Bgy(AJl),"rL",BgA(AFD),"l",Bgy(A9X),"k4",Bgz(APK),"Le",Bgz(A3I),"iv",Bgz(AZP),"K$",Bgz(AGY),"Lx",Bgz(AGZ),"su",Bgy(APa),"lX",Bgz(AHu),"vs",Bgx(AVB),"qs",Bgx(ATA),"Fr",Bgx(A_H),"K",Bgx(AZH),"xt",Bgy(ARt),"j_",Bgy(AY5),"Dw",Bgy(ATF),"bZ",Bgx(AKC),"h6",Bgy(AD$),"bp",Bgx(AWD),"z",Bgy(ALR),"b",Bgx(ARu),"ft",Bgx(AFW)]]);
$rt_metadata([QE,0,C0,[],0,3,0,0,["d",Bgx(AYp),"lL",Bgx(A$M),"mw",Bgx(A7V)],EC,0,Bx,[],12,3,0,AUF,["F7",Bgx(G8)],K8,0,Cy,[],0,0,0,0,["bj",Bgy(UQ),"e",BgA(AVO),"dM",Bgx(AFS),"u",Bgx(AQK),"ba",Bgy(A5P)],Je,0,BB,[],0,0,0,0,["nY",Bgy(AFY),"Q",Bgy(A5B),"e",BgA(AX8),"cE",BgA(AJT),"cI",BgB(AY0),"u",Bgx(AQ$),"ca",Bgy(ADZ),"ba",Bgy(ARf)],ACO,0,C,[],0,3,0,0,0,MD,0,C,[],3,3,0,0,0,Xf,0,C,[MD,Gx],0,3,0,0,["d",Bgx(AS1),"Hp",Bgz(A0E),"I0",Bgz(AYF),"cW",Bgz(A7C)],ACh,"AssertionError",13,D7,[],0,3,0,0,["jb",Bgz(AHp)],Es,0,CI,
[],0,0,0,0,["D3",function(b,c,d,e,f){It(this,b,c,d,e,f);},"e",BgA(A_x),"u",Bgx(ASt)],Lx,0,Es,[],0,0,0,0,["D3",function(b,c,d,e,f){Sp(this,b,c,d,e,f);},"e",BgA(AVS)],U2,0,C,[],0,3,0,0,0,MM,0,C,[Cr],3,3,0,0,0,Mm,0,C,[IE],3,3,0,0,0,IF,0,Jb,[Mm],1,3,0,0,["d",Bgx(Y_),"ft",Bgx(AIh)],Ln,0,C,[],3,3,0,0,0,We,0,IF,[DM,B4,Ln],0,3,0,0,["d",Bgx(AIJ),"bj",Bgy(OR),"gY",Bgy(AVU),"l",Bgy(A6W),"df",Bgx(A5E),"h4",Bgy(ASp),"Lf",Bgz(A13),"mC",Bgy(AP4)],YB,"IllegalMonitorStateException",13,Bm,[],0,3,0,0,["d",Bgx(A3j)],Ef,0,CG,[],
0,0,0,0,["yY",BgB(K0),"e",BgA(AWr),"u",Bgx(AW5)],C4,0,BB,[],0,0,0,0,["o9",Bgy(AAu),"e",BgA(AZy),"u",Bgx(A$g),"p",Bgy(AIK),"ca",Bgy(AEH),"uL",Bgx(ALe),"Q",Bgy(A7_),"ba",Bgy(AIm)],Yx,0,FP,[],0,0,0,0,["gD",BgA(AOR),"e",BgA(AFU)],Qm,0,C,[],4,3,0,0,0,BN,"String",13,C,[B4,B$,FO],0,3,0,Em,["K0",Bgy(Iy),"SC",BgA(OF),"Tk",BgB(J1),"XI",BgB(KL),"SJ",Bgz(TI),"S5",BgA(OJ),"f",Bgy(AWn),"i",Bgx(A0p),"bN",Bgx(A2c),"pv",BgB(AH7),"PQ",Bgy(A9z),"zM",Bgz(A55),"e2",Bgy(A2h),"yS",Bgy(AZw),"eH",Bgz(A40),"Lo",Bgy(AZv),"mK",Bgz(AWv),
"xC",Bgy(AKv),"ux",Bgz(AZa),"Ns",Bgy(A5z),"Ab",Bgz(AHX),"H3",Bgy(AJ$),"ce",Bgz(ADO),"ei",Bgy(AKy),"d_",Bgz(AIf),"M7",Bgy(AUl),"uG",Bgz(A6V),"MN",Bgx(A2C),"b",Bgx(AFV),"ry",Bgx(A2g),"z",Bgy(ASk),"Gs",Bgy(A9W),"x5",Bgy(ANx),"QQ",Bgx(ANt),"AW",Bgy(A44),"bp",Bgx(A4_),"F1",Bgx(A4n),"FE",Bgy(A2S),"vE",Bgz(ASc),"GF",Bgz(AIp)],Ng,0,DS,[],0,3,0,A3n,["vY",Bgy(A24)],LN,0,C,[],0,0,0,Beu,0,D$,0,C,[B3],3,3,0,0,0,MP,0,C,[D$],3,3,0,0,0,Yy,0,Fy,[],0,0,0,0,["UG",function(b,c,d,e,f,g){AJ0(this,b,c,d,e,f,g);},"p1",Bgy(A48),"nQ",
Bgz(A3l),"e1",Bgx(ADd)],Qn,0,Do,[],0,3,0,0,["kd",Bgy(AQN),"mX",function(b,c,d,e,f,g,h){return ALN(this,b,c,d,e,f,g,h);}],I6,0,C,[],1,3,0,0,["d",Bgx(X1)],HT,0,C,[],3,3,0,0,0,Fm,0,I6,[HT,DM,B4],0,3,0,TJ,["d",Bgx(HG),"bj",Bgy(ME),"x",Bgz(AO3),"oU",Bgx(AME)],Td,0,Fm,[],0,3,0,0,["d",Bgx(AOz),"U0",Bgy(AKL)],ABU,0,Fu,[],0,0,0,0,["We",function(b,c,d,e,f,g){AX1(this,b,c,d,e,f,g);},"vo",Bgy(AO$),"nh",Bgz(AOg),"e1",Bgx(A5x)],Wq,0,Bt,[],0,0,0,0,["d",Bgx(A_e),"e",BgA(ALw),"u",Bgx(A5A),"ba",Bgy(A5J)],Oi,0,V,[],0,3,0,A0T,
["bj",Bgy(YO),"bg",BgB(AUE)],JP,0,Es,[],0,0,0,0,["D3",function(b,c,d,e,f){Ss(this,b,c,d,e,f);},"e",BgA(AKs)],CX,0,Bx,[],12,3,0,P6,["F7",Bgx(EE)],L5,0,C0,[],0,3,0,Hw,["lL",Bgx(AQr),"mw",Bgx(ASZ)],M5,0,C,[D$],3,3,0,0,0,Vv,0,Bt,[],0,0,0,0,["bj",Bgy(A_B),"e",BgA(A1N),"ba",Bgy(AGz),"u",Bgx(AI_)],SN,0,C,[NU],0,3,0,0,["XG",Bgy(A5U)],EO,0,C,[Gi],1,3,0,0,["d",Bgx(Lh),"LO",Bgy(AB6)],Sj,0,EO,[],0,3,0,0,["V7",Bgz(AY7),"fP",Bgx(ALT),"lf",Bgx(ATT)],WY,0,Q,[],0,0,0,0,["Rw",Bgy(A3o),"p",Bgy(A9s)],I0,"NoSuchMethodException",
13,Dn,[],0,3,0,0,["d",Bgx(A1Z)],Yp,0,C,[],4,3,0,0,0,ZY,0,FI,[],0,0,0,0,["fO",function(b,c,d,e,f,g){AZm(this,b,c,d,e,f,g);},"p1",Bgy(AQ6),"nQ",Bgz(AEV)],GN,0,BT,[],0,3,0,A_v,["b6",Bgy(AAN),"d",Bgx(Jr)],R8,"NullPointerException",13,Bm,[],0,3,0,0,["bP",Bgy(A7$),"d",Bgx(AGj)],XM,0,Q,[],0,0,0,0,["Rd",Bgy(AI3),"p",Bgy(A6u)]]);
$rt_metadata([Qa,0,C,[],0,0,0,0,["d",Bgx(AT6)],YY,0,C,[],4,3,0,0,0,WZ,0,C,[GS],0,3,0,0,["Bs",BgA(AM9),"jI",Bgx(AXN),"uN",Bgx(AJS),"ur",BgA(AFj),"ih",Bgz(ANI),"gO",Bgz(AIn)],GT,0,BT,[],0,3,0,ANz,["b6",Bgy(YJ),"d",Bgx(Iw)],OK,0,C,[],0,3,0,0,0,QM,0,T,[],0,0,0,0,["d",Bgx(A67),"T",Bgx(ANR)],Og,"PatternSyntaxException",9,C3,[],0,3,0,0,["RZ",BgA(VX),"mS",Bgx(A$k)],P7,0,D5,[],0,3,0,0,["SW",BgA(AS4),"tW",Bgx(A1F)],LJ,0,C,[],3,3,0,0,0,Y0,0,C,[LJ],0,3,0,0,["d",Bgx(APX),"wG",Bgx(A0n),"Gh",Bgx(AX_),"QF",Bgx(ADI),"QK",BgB(AMf),
"PZ",Bgx(AMH),"NH",Bgx(ASY)],HF,0,C,[],0,3,0,A4f,["d",Bgx(AAI),"Sy",Bgy(YN),"Cx",Bgy(A37),"FY",function(b,c,d,e,f){return AOM(this,b,c,d,e,f);},"Hw",Bgy(AJb),"z",Bgy(AE0),"JB",Bgz(AVH)],TS,0,T,[],0,0,0,0,["d",Bgx(AGB),"T",Bgx(AYH)],HP,0,C,[],3,3,0,0,0,HC,0,BH,[],0,3,0,AJt,0,DY,0,Bx,[],12,3,0,M2,0,KT,0,C,[],3,3,0,0,0,L9,0,C,[Cz],0,3,0,A7j,["d",Bgx(TQ),"mt",Bgz(Nt),"kq",Bgy(AXL),"j6",Bgy(A08),"x",Bgz(AQv),"W",Bgy(AW0),"K",Bgx(AVK),"c0",Bgy(A9t),"jJ",Bgy(W8)],YV,0,C,[B4],4,3,0,0,["TK",Bgy(GM),"U1",Bgz(Mr),"TT",
Bgy(VW),"UA",Bgx(IQ),"WC",Bgx(VJ),"Vc",Bgx(ABV),"Xc",Bgx(SI)],De,"IOException",12,B5,[],0,3,0,0,["d",Bgx(V5)],GK,0,De,[],0,3,0,0,0,Ot,0,C,[B3],3,3,0,0,0,V2,0,C,[Ot],0,0,0,0,["Vs",Bgz(AUT),"HO",Bgx(AXp),"SV",Bgx(AO4)],Qh,0,FP,[],0,0,0,0,["gD",BgA(ARl),"e",BgA(ALd),"Q",Bgy(A4Q)],Jo,0,C,[],0,3,0,0,["X_",BgB(Tt)],YL,"BufferOverflowException",10,Bm,[],0,3,0,0,["d",Bgx(A0s)],UK,0,T,[],0,0,0,0,["d",Bgx(AL1),"T",Bgx(A2Q)],Ms,0,C,[],0,3,0,0,["R1",BgA(AQX)],SH,0,EA,[],0,3,0,0,["d",Bgx(A9T),"GE",Bgy(AWF)],AA0,0,D9,[],
0,0,0,0,["d",Bgx(AJR),"k1",Bgy(A7P),"D2",Bgz(AS_)],AAZ,0,D9,[],0,0,0,0,["d",Bgx(AWJ),"k1",Bgy(AF$),"D2",Bgz(APL)],YQ,0,FS,[],0,3,0,0,0,Ve,0,T,[],0,0,0,0,["d",Bgx(A1m),"T",Bgx(A7f)],K_,0,C,[],0,3,0,0,0,KW,0,C,[],0,3,0,0,["d",Bgx(AZu),"Pg",BgB(A0r)],To,0,C,[],0,3,0,0,["K0",Bgy(AYW)],Dx,0,BJ,[],0,0,0,0,["o9",Bgy(APc),"bH",Bgz(AUo),"u",Bgx(ALG),"ca",Bgy(AOI),"uL",Bgx(A5y)],Io,0,Q,[],0,0,0,0,["bj",Bgy(Sy),"p",Bgy(AOC)],Zm,0,Io,[],0,0,0,0,["bj",Bgy(ANy),"p",Bgy(A8b)],LI,0,C,[MM],0,3,0,TH,["d",Bgx(ABw),"Tt",Bgz(Kf),
"g6",Bgx(A0$),"bd",Bgx(AQV),"Hu",BgB(ALa),"eo",Bgx(AKz),"PJ",Bgy(AJd),"z5",Bgx(AHz),"Ks",Bgy(A5p),"Jz",Bgx(AD9)],L_,0,C,[],32,0,0,Be4,0,XS,0,CO,[],1,3,0,0,0,N7,0,C,[],3,3,0,0,0,LW,0,C,[N7],0,3,0,VN,["VQ",Bgy(ACZ),"U$",Bgz(Ka),"S3",BgA(Nm),"Hb",Bgz(AMK),"Hv",Bgz(AFg),"IA",Bgz(APk),"Jt",BgA(A$h),"z7",BgA(ANK),"P1",Bgx(ADe),"yF",Bgy(AC7),"Ok",Bgz(AM4),"Pu",BgA(AZj)],D0,0,De,[],0,3,0,0,["d",Bgx(Kp)],QK,"UnmappableCharacterException",11,D0,[],0,3,0,0,["bj",Bgy(A1P),"mS",Bgx(AHn)],P4,0,Q,[],0,0,0,0,["d",Bgx(ATZ),
"Yj",Bgz(P$),"WJ",BgA(AVl),"cG",Bgy(AC4),"NM",Bgy(A_A),"bF",Bgz(A85),"LS",Bgy(AUO),"x4",Bgy(AR9),"p",Bgy(AGu),"bK",Bgx(AT$),"ci",Bgx(AZJ),"mh",Bgx(ARA),"b",Bgx(A4D),"g8",Bgx(AIy)],P0,0,C,[IS],0,0,0,0,["W0",BgA(A6H),"dU",Bgy(A4R),"lF",Bgy(A$x)],ABK,"BufferUnderflowException",10,Bm,[],0,3,0,0,["d",Bgx(ASA)],TA,0,C,[],0,3,0,0,["d",Bgx(AC_)],UG,0,Ek,[],0,0,0,0,["yk",Bgz(A1w)]]);
$rt_metadata([Oy,0,C,[],3,3,0,0,0,I4,0,C,[Oy],0,3,0,0,["d",Bgx(Tj),"G3",BgB(AHJ),"GZ",Bgx(ANY)],ZF,0,I4,[],0,3,0,0,["d",Bgx(AKG),"rZ",BgB(A1Y),"Oy",BgB(AHZ),"OK",Bgz(A7h),"QM",BgA(A56),"Ke",BgB(A2B),"Ho",Bgz(A9K),"Q3",BgB(AY2)],Pi,0,ER,[],0,0,0,0,["fO",function(b,c,d,e,f,g){A35(this,b,c,d,e,f,g);},"vo",Bgy(AL7),"nh",Bgz(A6w)],Mw,0,C,[Cr],3,3,0,0,0,Ha,0,C,[Mw],1,3,0,0,["d",Bgx(ABb),"I$",BgA(ADE),"bf",Bgz(A_p),"b0",Bgy(ASB),"N_",Bgy(AH5),"MF",Bgz(AZC),"C9",Bgz(X2),"NX",Bgy(A0J),"y8",Bgz(Vu),"bd",Bgx(WK),"V6",
Bgy(Ic),"Rm",Bgy(B1),"UC",Bgz(D1),"Tm",Bgz(Q4),"TI",Bgz(Lz),"Xg",Bgz(Fv),"Wg",Bgz(Fn),"Wd",BgA(WE),"WY",function(b,c,d,e,f){return DQ(this,b,c,d,e,f);},"TV",Bgz(DU),"VG",Bgz(ZE)],RJ,0,Q,[],0,0,0,0,["UW",Bgy(AVA),"p",Bgy(AEw)],Tq,"MalformedInputException",11,D0,[],0,3,0,0,["bj",Bgy(AOj),"mS",Bgx(AIj)],X8,0,T,[],0,0,0,0,["d",Bgx(AEa),"T",Bgx(AHK)],Fg,0,Bx,[],12,3,0,Gv,0,EG,0,Bx,[],12,3,0,SM,0,HZ,0,BH,[],0,3,0,ET,["Wb",Bgz(VC),"pf",Bgx(APf),"bp",Bgx(ASP)],Im,0,C,[],1,3,0,0,["d",Bgx(Ze)],TF,"CloneNotSupportedException",
13,B5,[],0,3,0,0,["d",Bgx(A1U)],Rh,0,CO,[],1,3,0,0,0,Ni,0,D3,[B$],0,3,0,N3,0,Gu,0,BT,[],0,3,0,AMw,["b6",Bgy(Sf),"d",Bgx(HM)],Kw,0,Gu,[],0,3,0,A$v,["d",Bgx(Za),"b6",Bgy(RE)],Nf,0,C,[],3,3,0,0,0,Rf,0,C,[Nf],0,3,0,0,["d",Bgx(ATk),"G4",Bgz(ALD)],Tc,0,C,[],0,0,0,0,["bj",Bgy(AK3),"os",Bgz(AKq),"b2",Bgy(A3C)],Hm,0,C,[B3],3,3,0,0,0,QX,0,C,[Hm],1,3,0,0,["Um",Bgy(A_a),"XA",Bgx(AGa)],G5,0,C,[],0,3,0,0,["Td",Bgy(AV8),"Nh",BgB(A7W),"Nw",BgB(AFx),"Ba",Bgx(ATc),"Ig",Bgx(AGP),"LF",Bgx(ADL)],Sb,0,JH,[],0,3,0,0,["d",Bgx(AUN),
"JL",Bgy(UW),"wJ",BgA(AYS)],VS,0,C,[Cz],0,3,0,0,["RL",BgB(APZ),"Pk",Bgy(AMR),"Nl",BgA(AVo),"K",Bgx(A3s),"jJ",Bgy(ASW)],QF,0,IR,[],0,0,0,0,["d",Bgx(A2s),"T",Bgx(AJD)],Q7,"BitmapFont",6,C,[Cr],0,3,0,0,["d",Bgx(AGo),"W9",BgB(OL),"W5",BgA(Uk),"WV",BgA(YC),"HE",Bgy(AT5),"yi",BgB(AI9),"Gu",BgB(A$f),"Ou",Bgx(AQG),"KG",Bgx(A91)],Gy,0,GN,[],0,3,0,AHx,["b6",Bgy(Vi),"d",Bgx(KS)],He,0,Gy,[],0,3,0,0,["d",Bgx(RQ)],Iq,0,He,[],0,3,0,0,["d",Bgx(Ls)],LU,0,Iq,[],0,3,0,AFl,["SD",Bgy(Si),"NG",Bgz(A9S),"b6",Bgy(AAp)],Zi,0,C,[],0,
3,0,0,["d",Bgx(AEk),"XF",Bgz(AZQ),"IJ",Bgy(APh),"ME",Bgx(AQo),"Qo",Bgy(A45)],T0,0,Q,[],0,0,0,0,["UT",Bgz(AT4),"p",Bgy(AIg)],TZ,0,Q,[],0,0,0,0,["TG",BgA(A41),"p",Bgy(AVd)],C8,0,Bx,[],12,3,0,AYz,0,ABh,0,T,[],0,0,0,0,["d",Bgx(AWq),"T",Bgx(A4V)],Os,0,C,[D$],3,3,0,0,0,W2,0,Ef,[],0,0,0,0,["yY",BgB(A39),"e",BgA(A7y)],Rc,0,Im,[],0,3,0,0,["bP",Bgy(AEC),"Id",Bgx(AVe)],Lf,0,C,[D$],3,3,0,0,0,Lk,0,C,[],3,3,0,0,0,X0,0,C,[Cz],0,3,0,0,["d",Bgx(ASw),"mt",Bgz(AAr),"e8",Bgy(AOq),"os",Bgz(AHV),"KT",Bgz(ALP)],XG,0,Q,[],0,0,0,0,
["Te",Bgy(AS0),"p",Bgy(A3O)],PQ,0,Q,[],0,0,0,0,["So",Bgz(AS9),"p",Bgy(AL6),"b",Bgx(A0I)],Vg,0,CI,[],0,0,0,0,["gD",BgA(ARk),"e",BgA(AYn)],T6,0,C,[],0,3,0,0,["Sq",BgB(ADq)],CY,0,BH,[],0,3,0,Ce,["FU",Bgy(Jk),"TX",Bgz(JQ),"Xd",function(b,c,d,e,f){NF(this,b,c,d,e,f);},"ST",Bgy(Z7),"pf",Bgx(AJu),"bp",Bgx(ASG)],Hg,0,V,[],0,3,0,PA,["fU",Bgz(Qj),"bg",BgB(A4s)],NX,0,C,[],0,3,0,BeK,["WL",Bgz(ACi),"yO",Bgx(A5$),"Nz",Bgy(AHM),"K",Bgx(A5h),"JG",BgA(AUb),"Ir",function(b,c,d,e,f,g,h,i,j){return A$_(this,b,c,d,e,f,g,h,i,j);
},"HU",BgA(AGC)]]);
$rt_metadata([PN,0,Q,[],0,0,0,0,["nF",Bgz(A7e),"p",Bgy(AGK)],PO,0,Q,[],0,0,0,0,["nF",Bgz(AM_),"p",Bgy(A0o)],PP,0,Q,[],0,0,0,0,["kl",BgB(AGV),"p",Bgy(A_N)],YK,0,C,[],4,3,0,0,0,P8,0,Q,[],0,0,0,0,["kl",BgB(A0i),"p",Bgy(AJv)],PR,0,Q,[],0,0,0,0,["kl",BgB(AZd),"p",Bgy(AW8)],ON,0,BJ,[],0,0,0,0,["E_",Bgy(A8N),"bH",Bgz(AMA),"u",Bgx(AKe)],PS,0,Q,[],0,0,0,0,["kl",BgB(AD0),"p",Bgy(AO_)],PT,0,Q,[],0,0,0,0,["qk",BgA(AOc),"p",Bgy(AK7)],Ug,0,Q,[],0,0,0,0,["Sw",Bgy(AUs),"p",Bgy(AKV)],Hz,0,DP,[],0,3,0,0,["d",Bgx(A16),"Jg",Bgy(AEG),
"OP",Bgz(AGk),"xO",function(b,c,d,e,f,g){return AP7(this,b,c,d,e,f,g);},"z",Bgy(AEs),"EF",Bgy(A4$)],PM,0,Q,[],0,0,0,0,["qk",BgA(A3D),"p",Bgy(A8H)],Z6,0,CO,[],1,3,0,0,0,LG,0,C,[],0,3,0,ACA,0,ZG,0,ES,[Fw],0,3,0,0,["bj",Bgy(ALi),"d",Bgx(A$q),"dD",Bgy(A34),"a",Bgy(ADJ),"j",Bgy(ANE),"Nk",Bgy(A0S),"cD",Bgy(AJF),"U",Bgy(ADx),"I5",BgA(AGX),"q0",Bgy(A7Z),"Jv",Bgy(AWN),"J_",Bgz(AZ6),"P$",Bgz(A8k),"Lk",BgB(A6N),"OS",Bgz(A$Q),"Gr",Bgz(A4E),"KY",Bgz(AN$),"L7",Bgz(ASu),"Fa",Bgy(ARa),"GA",Bgz(A2F),"ce",Bgz(A9V),"uy",Bgy(A2L),
"pv",BgB(AH8),"d_",Bgz(A6U),"uF",BgB(A2x),"tX",BgA(AHA),"i",Bgx(AWU),"b",Bgx(AFL),"gY",Bgy(ALQ),"xx",Bgz(ALZ),"wU",Bgz(A31),"vb",Bgz(A3r),"CU",Bgz(A05),"DX",Bgz(AGi),"k5",Bgz(AT7)],QW,0,BB,[],0,0,0,0,["UX",Bgz(ATl),"e",BgA(AEQ),"Q",Bgy(A5t),"u",Bgx(A6a),"ba",Bgy(AFT),"ca",Bgy(AFp)],ABQ,"ConcurrentModificationException",8,Bm,[],0,3,0,0,["d",Bgx(ATQ)],O9,0,C,[I1],0,0,0,0,["d",Bgx(ALK)],Gt,0,C,[],3,3,0,0,0,O8,0,C,[Gt],0,0,0,0,["d",Bgx(AXl)],Md,0,C,[],3,3,0,0,0,EU,0,C,[Md,DM],0,0,0,0,["Ip",Bgz(L6)],MR,0,EU,[],0,
0,0,0,["Ip",Bgz(AO6),"Ob",Bgx(AE_),"MZ",Bgz(ARX)],EZ,0,Cy,[],0,0,0,0,["d",Bgx(A8O),"e",BgA(ASg),"u",Bgx(AXz)],AAe,0,C,[],0,3,0,0,["bP",Bgy(A2X),"MD",Bgy(A0y),"NC",BgA(A1O),"Gn",function(b,c,d,e,f){AVR(this,b,c,d,e,f);},"kn",Bgz(A78),"yI",BgA(AYK),"Qi",Bgy(AM7),"KS",Bgy(AJx),"LW",Bgy(A61),"Of",Bgy(AXf)],TP,0,BJ,[],0,0,0,0,["xf",Bgy(A3X),"bH",Bgz(A7L),"cE",BgA(AZ0),"cI",BgB(AX3),"u",Bgx(AJ2),"ba",Bgy(AVG)],J2,0,BH,[],0,3,0,AGI,0,Vp,0,C,[I1],0,3,0,0,["IW",Bgz(A9j),"R7",BgA(UE),"wt",Bgx(A_E),"O",Bgx(AFa)],J_,0,
C,[Cz,B$],4,3,0,0,["Ra",Bgy(A3V),"Xr",Bgy(DZ),"df",Bgx(CU),"Sm",Bgy(CB),"z",Bgy(NV),"L6",Bgx(IM),"VJ",Bgx(NQ)],KB,0,G5,[],0,3,0,0,0,ACM,0,C,[Cr],0,3,0,0,["WE",BgA(TR),"d",Bgx(A$G),"HM",Bgy(A4l),"eo",Bgx(A1I),"bd",Bgx(A7H),"C2",Bgz(ARs)],Re,0,ER,[],0,0,0,0,["fO",function(b,c,d,e,f,g){AVs(this,b,c,d,e,f,g);},"vo",Bgy(AUP),"nh",Bgz(A2R)],VO,0,C,[Lk],0,3,0,0,["SR",Bgy(AUD),"f6",Bgx(AUh),"vK",Bgx(ASL),"bo",Bgx(AL_),"bl",Bgx(AQZ),"xb",Bgx(A5Q),"EK",Bgx(A49),"Fe",Bgx(A_f),"Nm",Bgx(AU8),"FC",Bgx(AWl),"Mm",Bgy(AHg),
"wF",Bgz(ALy),"x9",Bgz(AFO),"tY",Bgy(AEe),"vQ",Bgx(A3c)],Yu,0,FL,[],0,3,0,0,["bP",Bgy(AGp)],TC,0,T,[],0,0,0,0,["d",Bgx(AFd),"T",Bgx(AH$)],EI,"GlyphLayout",6,C,[EJ],0,3,0,DI,["d",Bgx(ACj),"XK",Bgz(PJ),"SQ",function(b,c,d,e,f,g){S$(this,b,c,d,e,f,g);},"Wa",function(b,c,d,e,f,g,h,i,j){AA4(this,b,c,d,e,f,g,h,i,j);},"Mz",Bgz(A7G),"O5",function(b,c,d,e,f,g){A3B(this,b,c,d,e,f,g);},"pJ",function(b,c,d,e,f,g,h,i,j){AG4(this,b,c,d,e,f,g,h,i,j);},"fV",Bgx(A8C),"b",Bgx(AOa)],ABY,"ArrayIndexOutOfBoundsException",13,Ej,
[],0,3,0,0,["bj",Bgy(AEX)],Pt,0,EO,[],0,3,0,0,["Vo",Bgz(QA),"W4",Bgy(ADu),"Tg",Bgz(AAG),"fP",Bgx(A8z),"JJ",BgA(AKo)],Fa,0,Bx,[],12,3,0,RT,0,Y1,0,C,[],0,3,0,0,0,V1,0,C,[Gt],0,0,0,0,["Vy",Bgy(AOT),"bC",Bgx(A4q),"bz",Bgx(A8W)],L1,0,C,[],0,3,0,0,["d",Bgx(A$Z),"PO",Bgx(A8L),"OC",Bgx(APY),"Dh",Bgy(AFK),"y2",Bgy(A63),"F9",Bgx(AUB),"IR",Bgx(A6z),"Qg",Bgy(AL5),"Ie",Bgy(AEt),"Na",Bgz(AOV),"FG",Bgy(A17),"rD",Bgx(A3t),"xm",Bgx(A9I),"u9",Bgx(AZO),"MR",Bgy(A7b)],LO,0,C,[],3,3,0,0,0,Hx,0,C,[LO,Fp],0,3,0,Ba9,["d",Bgx(VG),"w4",
Bgx(AZI),"v3",function(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){return A8q(this,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);},"Fu",Bgx(A0e),"Oh",Bgx(AC8),"QN",Bgz(A8A),"lH",Bgy(AOe),"oF",Bgy(A4C),"ls",Bgy(AW9),"iq",BgB(A77),"hQ",BgB(A1T),"i_",BgA(APs),"na",Bgz(AXM),"oJ",Bgz(AMS)],VK,0,E8,[DM],0,0,0,0,["fU",Bgz(AKJ),"jd",Bgx(A0H),"iJ",Bgx(A9a),"b",Bgx(A4M)],W6,0,V,[],4,0,0,0,["d",Bgx(AJs),"bg",BgB(ATp)],W3,0,V,[],4,0,0,0,["d",Bgx(A81),"bg",BgB(AYj)],VF,0,Q,[],0,0,0,0,["UM",Bgy(AQR),"p",Bgy(AWB)],W_,0,V,[],4,0,0,0,["d",Bgx(AK8),
"bg",BgB(A$B)],W7,0,V,[],4,0,0,0,["d",Bgx(AVf),"bg",BgB(AN6)]]);
$rt_metadata([W5,0,V,[],4,0,0,0,["d",Bgx(A73),"bg",BgB(A28)],W$,0,V,[],4,0,0,0,["d",Bgx(AXm),"bg",BgB(APM)],Tb,0,C,[Nk],0,3,0,0,["d",Bgx(A4a),"Pf",Bgy(AZf)],Sl,0,C,[B4],0,3,0,0,["d",Bgx(AU1),"MO",Bgy(A9i),"Gb",Bgx(AE$),"xK",Bgx(AZS)],Nq,0,C,[],3,3,0,0,0,Lc,0,GT,[],0,3,0,AGH,["d",Bgx(Sa),"b6",Bgy(ACn)],XK,0,C,[],4,0,0,0,0,St,0,Da,[],0,3,0,0,["kd",Bgy(A2M),"nd",function(b,c,d,e,f,g,h){return A9_(this,b,c,d,e,f,g,h);}],ABa,0,C,[],4,3,0,0,["Ru",Bgz(ADQ),"R$",Bgx(Wr),"i",Bgx(N8),"zn",Bgy(Rj),"qy",Bgx(PZ),"TC",Bgx(SD)],AC2,
0,CG,[],0,0,0,0,["lk",BgA(APD),"e",BgA(AEn)],AAQ,0,C,[],0,3,0,0,["UD",Bgz(A4B),"tJ",Bgx(A4v),"dO",Bgy(A1H),"ef",Bgy(AW6),"el",Bgy(A89),"dR",Bgy(A6R)],PG,0,Q,[],0,0,0,0,["XC",Bgy(AMO),"p",Bgy(AOx)],JS,0,C,[],3,3,0,0,0,RK,0,C,[JS],0,3,0,0,["d",Bgx(AWX)],Xd,0,V,[],4,0,0,0,["d",Bgx(ALu),"bg",BgB(AQW)],Li,"InstantiationException",13,Dn,[],0,3,0,0,["d",Bgx(A2W)],Xa,0,V,[],4,0,0,0,["d",Bgx(A7v),"bg",BgB(A_d)],W9,0,V,[],4,0,0,0,["d",Bgx(ATI),"bg",BgB(AWm)],Xb,0,V,[],4,0,0,0,["d",Bgx(AW7),"bg",BgB(A1n)],Ps,0,Q,[],0,
0,0,0,["T8",Bgy(A$V),"p",Bgy(ASC)],JU,0,C,[],3,3,0,0,0,Sr,0,C,[JU,M7],0,3,0,0,["d",Bgx(AJQ),"pg",Bgx(A6r),"vH",Bgy(A8h),"Ko",Bgy(AZ$),"P_",Bgx(A6c),"My",Bgx(ATW),"Q4",Bgx(AZe),"Lh",Bgx(AXr),"S$",Bgy(A5N)],Ys,0,CG,[],0,0,0,0,["lk",BgA(AUi),"e",BgA(AOF)],Ya,0,C,[],4,3,0,0,0,ZB,0,C,[],0,3,0,0,["d",Bgx(ARz)],SE,0,Da,[],0,3,0,0,["kd",Bgy(AO5),"nd",function(b,c,d,e,f,g,h){return AIN(this,b,c,d,e,f,g,h);}],HS,0,C,[Cr],0,3,0,Kk,["Uo",BgB(Ye),"UZ",function(b,c,d,e,f){M4(this,b,c,d,e,f);},"S4",function(b,c,d,e,f){Om(this,
b,c,d,e,f);},"FO",BgA(APF),"NO",Bgy(AGt),"OO",BgA(AKt),"v7",Bgx(ASq),"xe",Bgx(A8j),"KC",Bgy(AHj),"ih",Bgz(AQH),"JZ",Bgy(A7Q),"gO",Bgz(AEF),"NP",BgB(AUg),"Dd",function(b,c,d,e,f){A32(this,b,c,d,e,f);},"gS",Bgx(AYr),"Au",Bgx(ALt)],Nu,0,EU,[],0,0,0,0,["Vn",Bgz(AO8)],FU,0,BT,[],0,3,0,ATd,["b6",Bgy(X4),"d",Bgx(Jp)],Wk,0,C,[Cz],0,3,0,0,0,AB2,0,Bt,[],0,0,0,0,["d",Bgx(AKR),"e",BgA(A5m),"ba",Bgy(AUu),"u",Bgx(AJn)],AAJ,0,C,[Cz],0,3,0,0,["d",Bgx(A2Z),"mt",Bgz(YI),"kq",Bgy(AMM),"j6",Bgy(AYq),"gA",Bgz(AQI),"tH",Bgz(AXt),
"jJ",Bgy(TU)],TB,0,T,[],0,0,0,0,["d",Bgx(AK_),"T",Bgx(ARi)],Ft,0,CT,[B$],1,3,0,0,["UL",function(b,c,d,e,f){V3(this,b,c,d,e,f);},"z0",BgA(AYC),"IS",Bgy(AOB),"w0",BgA(A9x),"WW",Bgy(Ym),"Cq",Bgx(AWK),"XY",Bgx(HH),"Re",Bgy(FH),"VM",Bgx(J4),"UJ",Bgx(Jv),"M9",Bgy(AZz),"f4",Bgy(AQ5),"db",Bgx(AF3),"cm",Bgy(AOS),"cZ",Bgy(AVC)],AB_,0,Ft,[],0,0,0,0,["wj",Bgz(A1z),"Wy",function(b,c,d,e,f,g,h){O7(this,b,c,d,e,f,g,h);},"zn",Bgy(ADi),"QD",Bgx(AMN),"b_",Bgx(AR6),"v6",Bgx(A$9),"O6",Bgy(A8r),"K_",Bgz(AI2),"yK",Bgx(ATY),"sQ",
Bgx(ANv)],RZ,0,E9,[],0,0,0,0,["Wp",Bgy(AKF),"Bg",Bgx(A2j)],LM,0,C,[B4],0,3,0,0,["U5",Bgz(AI8),"iy",BgA(A27)],VT,0,C,[],0,3,0,0,["d",Bgx(A8F)],Gs,0,C,[],0,3,0,AKZ,["d",Bgx(VP),"AK",Bgy(A5e)],M_,0,C,[B4],0,3,0,BeP,["VP",Bgz(AB7)],ABA,0,By,[],0,3,0,0,0,QS,"BufferUnderflowException",11,Bm,[],0,3,0,0,["d",Bgx(A$e)],VV,0,Bt,[],0,0,0,0,["HD",Bgy(A6q),"e",BgA(AXZ),"ba",Bgy(AI6),"u",Bgx(AWc)],Ci,0,C,[Hv],1,3,0,0,["d",Bgx(DT),"x2",Bgz(AU9)],TN,0,C,[B3],1,3,0,0,0,Xj,0,V,[],4,0,0,0,["d",Bgx(A6e),"bg",BgB(AZ7)],MK,0,C,[],
32,0,0,BfS,0,Yv,0,C,[],0,3,0,0,["d",Bgx(A6P),"g6",Bgx(ADA),"H6",Bgx(AWi),"P2",Bgy(AVQ),"Js",Bgx(AGb),"Nq",Bgz(A8v),"Kf",BgB(AKc),"Ky",BgB(ASK),"Cp",function(b,c,d,e,f){return ARv(this,b,c,d,e,f);},"J3",function(b,c,d,e,f,g){return A3u(this,b,c,d,e,f,g);}],I9,0,C,[GS],0,3,0,0,["Bs",BgA(Z4),"jI",Bgx(AI5),"uN",Bgx(ATG),"ur",BgA(A5a),"ih",Bgz(AZR),"gO",Bgz(AWk)],Wh,0,I9,[],0,3,0,0,["Sa",Bgz(A7g)]]);
$rt_metadata([Xp,0,V,[],4,0,0,0,["d",Bgx(AQP),"bg",BgB(ATx)],Xl,0,V,[],4,0,0,0,["d",Bgx(ARQ),"bg",BgB(AVj)],S7,0,T,[],0,0,0,0,["d",Bgx(AJp),"T",Bgx(A7q)],Xk,0,V,[],4,0,0,0,["d",Bgx(AK$),"bg",BgB(ALO)],KO,0,C,[],3,3,0,0,0,Xn,0,V,[],4,0,0,0,["d",Bgx(AZD),"bg",BgB(AG5)],ABE,0,C,[B3],1,3,0,0,0,Y3,0,C,[],0,3,0,0,["W$",Bgy(A$r),"g6",Bgx(A8D),"bd",Bgx(A$Y),"M8",Bgy(AGO),"Ma",BgA(AXT),"xk",BgA(A$b),"H8",Bgy(AKb)],Rd,0,T,[],0,0,0,0,["d",Bgx(AF7),"T",Bgx(APm)],Hl,0,C,[HT],1,3,0,0,["d",Bgx(XP)],Zr,0,C,[Hc],0,3,0,0,["mN",
Bgz(AZl),"l2",Bgx(APy),"ne",Bgx(AUQ),"uC",BgA(A1S),"um",Bgx(ASN),"ew",Bgx(ALq),"Ee",Bgx(AFR)],Gn,0,BT,[],0,3,0,A42,["b6",Bgy(Y8),"d",Bgx(H2)],Wt,0,Bt,[],0,0,0,0,["d",Bgx(AQU),"e",BgA(AK4),"ba",Bgy(AT2),"u",Bgx(AWy)],Xt,0,V,[],4,0,0,0,["d",Bgx(AEM),"bg",BgB(A7z)],Xq,0,V,[],4,0,0,0,["d",Bgx(A9U),"bg",BgB(ATi)],C_,0,BT,[],0,3,0,Fl,["b6",Bgy(S1),"LM",Bgx(AFZ),"JR",Bgx(AQb),"Kg",Bgx(A1p),"M_",BgA(AHR)],Xm,0,V,[],4,0,0,0,["d",Bgx(AEK),"bg",BgB(AN2)],Xs,0,V,[],4,0,0,0,["d",Bgx(AWs),"bg",BgB(AJJ)],KX,0,Cy,[],0,0,0,
0,["bj",Bgy(ZR),"e",BgA(AVy),"u",Bgx(AYx),"ba",Bgy(A7s)],Xr,0,V,[],4,0,0,0,["d",Bgx(AI7),"bg",BgB(AYE)],Ll,0,C,[],4,3,0,E1,0,NC,0,C,[],3,3,0,0,0,L3,0,C,[],3,3,0,0,0,Vt,0,BJ,[],0,0,0,0,["bj",Bgy(A8a),"bH",Bgz(AQl),"u",Bgx(A_q)],U_,0,Ir,[],0,3,0,0,["Sb",Bgz(Qr),"JL",Bgy(AFF),"iq",BgB(AKp),"hQ",BgB(A1E),"Iq",BgA(AY3),"i_",BgA(AKw),"oJ",Bgz(ASj),"y9",Bgy(A3p),"Ne",Bgy(ASo),"lH",Bgy(AEc),"oF",Bgy(A2o)],Gm,0,C,[],4,3,0,0,0,S4,0,C,[B$],0,3,0,0,["d",Bgx(A8I),"JX",Bgy(AD_),"bp",Bgx(AFu)],Rb,"BitmapFont$BitmapFontData",
6,C,[],0,3,0,0,["Kp",Bgz(A4x),"P3",Bgz(AGv),"E3",Bgz(AVM),"yl",Bgz(ATD),"CQ",Bgx(A3S),"it",Bgy(AG0),"FP",function(b,c,d,e,f){AGf(this,b,c,d,e,f);},"KP",Bgz(ADo),"xG",Bgy(AGL),"jt",Bgy(AHs)],Nx,0,C,[],0,3,0,0,0,XB,0,T,[],0,0,0,0,["fU",Bgz(A$c),"T",Bgx(AMe)],UH,0,C,[],0,0,0,0,["d",Bgx(ADv),"u$",BgA(ANd),"B6",BgA(AMt),"Lq",Bgx(A2p),"Q1",Bgx(A6i)],ACF,0,HJ,[],0,0,0,0,["XH",Bgy(A58),"fe",Bgx(A5r)],Xu,0,T,[],0,0,0,0,["d",Bgx(AFB),"T",Bgx(ATb)],Zy,0,C,[Ih],4,3,0,0,["TR",Bgz(X$),"Rr",Bgx(ABg),"UR",Bgy(ABI),"Wc",Bgy(ACp),
"BV",Bgy(Gh),"Sf",Bgy(JJ),"Vi",Bgx(Ga),"lD",Bgy(U7),"pc",Bgy(Pa),"wz",Bgx(LT),"pQ",Bgx(MX),"lI",Bgx(Pg),"Vb",Bgz(AC$)],T9,0,BB,[],0,0,0,0,["d",Bgx(A46),"e",BgA(ATC),"u",Bgx(AHw),"Q",Bgy(AXj),"i6",Bgx(A4Z),"ba",Bgy(AXg)],ZP,0,Q,[],0,0,0,0,["U_",Bgy(AQA),"p",Bgy(ASf)],O3,0,FN,[],0,3,0,0,["d",Bgx(A0V),"f6",Bgx(AGr),"p$",Bgy(AQz)],US,0,C,[Hi],0,3,0,0,["LO",Bgy(A1s),"fe",Bgx(A9b)],VH,0,C4,[],0,0,0,0,["o9",Bgy(AG6),"p",Bgy(AK2),"u",Bgx(ATr)],Vh,0,T,[],0,0,0,0,["d",Bgx(APJ),"T",Bgx(AUJ)],MF,0,BB,[],0,0,0,0,["TH",Bgz(AVn),
"Q",Bgy(AMD),"u",Bgx(AP6),"e",BgA(ADh),"ca",Bgy(AXh),"ba",Bgy(ARG)],Vb,0,T,[],0,0,0,0,["d",Bgx(A4j),"T",Bgx(A1g)],Ky,0,C,[GS],0,3,0,AIT,["Bs",BgA(XF),"jI",Bgx(AWx),"uN",Bgx(ARK),"ur",BgA(AWQ),"ih",Bgz(AQ7),"gO",Bgz(AHC)],QO,0,C,[],4,3,0,0,0,Hh,"GlyphLayout$GlyphRun",6,C,[EJ],0,3,0,0,["d",Bgx(A0A),"fV",Bgx(ALv),"b",Bgx(AEp)],Mq,0,Dn,[],0,3,0,0,0,SV,0,BZ,[],0,0,0,0,["QW",Bgz(A8p),"ek",Bgy(A$0),"ck",Bgy(AMd),"hY",Bgz(AMU),"ct",Bgz(AK0)],AA_,0,BZ,[],0,0,0,0,["SU",Bgy(AYa),"ek",Bgy(AUr),"ck",Bgy(AHo),"ct",Bgz(A9e)],FK,
0,C,[B3],3,3,0,0,0,SR,0,C,[FK],0,0,0,0,["yw",BgB(AJm),"dU",Bgy(AIw),"lF",Bgy(A1C)]]);
$rt_metadata([SQ,0,BZ,[],0,0,0,0,["R9",function(b,c,d,e,f){ARB(this,b,c,d,e,f);},"ek",Bgy(A_O),"ck",Bgy(A$K),"hY",Bgz(AE8),"ct",Bgz(AS7)],SP,0,C,[FK],0,0,0,0,["QW",Bgz(AVY),"dU",Bgy(A70),"lF",Bgy(AXU)],Lp,0,C,[],32,0,0,Bek,0,U5,0,C,[Cr],0,3,0,0,["d",Bgx(ADr),"MJ",Bgy(A8$)],SX,0,C,[FK],0,0,0,0,["yw",BgB(AI$),"dU",Bgy(AZk),"lF",Bgy(AIo)],Qw,0,Bt,[],0,0,0,0,["b6",Bgy(AK6),"e",BgA(AWY),"ba",Bgy(AXd),"u",Bgx(A_u)],Fs,0,C,[KT],0,3,0,LA,["d",Bgx(Vx),"Pn",Bgy(ATS),"Q5",Bgz(A06),"Qu",Bgz(AKh),"Mc",BgA(AGE),"Lt",Bgy(ALo),
"N5",Bgx(AEm),"jI",Bgx(AGT),"Mr",Bgx(AQ1),"xU",Bgy(AV1),"M0",BgB(AED),"Dj",Bgy(AHD),"x$",Bgy(AO9),"uo",Bgy(AIB),"hn",Bgy(AXS),"r5",Bgy(AN8),"I1",Bgx(AJy),"KZ",BgB(AYR),"dH",Bgy(AMG),"Hq",BgB(A1K),"OE",function(b,c,d,e,f,g){A1Q(this,b,c,d,e,f,g);},"ER",function(b,c,d,e,f,g,h,i){AW$(this,b,c,d,e,f,g,h,i);},"d2",BgB(AO1),"NK",BgB(A6Q),"jp",function(b,c,d,e,f){ALJ(this,b,c,d,e,f);},"Lj",BgA(AHt)],Hb,0,BH,[],0,3,0,Bb7,0,SW,0,C,[FK],0,0,0,0,["yw",BgB(A5I),"dU",Bgy(AQy),"lF",Bgy(AZF)],Jc,0,T,[],0,0,0,0,["d",Bgx(Rr),
"T",Bgx(YX)],Pn,0,DX,[],4,0,0,0,["d",Bgx(AOl)],Pp,0,DX,[],4,0,0,0,["d",Bgx(A09),"WP",Bgx(Y9),"tW",Bgx(AL8)],AAH,0,C,[],4,3,0,0,0,KN,0,C,[D$],3,3,0,0,0,NM,0,C,[D$,MP,KN,M5,Lf,Os],3,3,0,0,0,Kc,0,C,[],3,3,0,0,0,Pj,0,C,[B3,NM,Kc,Hm],1,3,0,0,["W3",Bgz(AMq),"XQ",Bgz(AMV),"US",Bgy(AEN),"S9",BgA(AOm),"Sj",Bgy(ASv),"V1",Bgx(AGd),"Vp",BgA(ADw)],YE,0,C,[B4],0,3,0,0,["d",Bgx(ALX),"Ax",Bgx(A4X),"H2",Bgx(ALg),"CT",Bgx(A5X),"D_",Bgy(A_r),"AE",Bgx(AUz)],T$,0,G4,[B3],0,3,0,0,["Rj",Bgz(ARF),"Og",Bgy(A1X),"ET",Bgx(A1G),"hu",Bgx(AUd),
"Ng",Bgx(A3R),"Qb",Bgx(A1v),"uk",Bgx(A8P),"AM",Bgx(A$w),"Md",Bgx(A96),"Ny",Bgx(AU3)],Pf,0,C,[],0,0,0,0,0,Cu,0,C,[B4],0,3,0,CC,["d",Bgx(Tm),"ch",Bgy(A_C),"Ey",Bgy(AFG),"Gv",Bgy(A97),"HZ",BgB(AZ8),"NJ",function(b,c,d,e,f,g,h){return A6E(this,b,c,d,e,f,g,h);},"Gm",BgA(AWL),"JV",function(b,c,d,e,f,g,h,i,j,k){return ATs(this,b,c,d,e,f,g,h,i,j,k);},"hC",Bgy(ANb),"fx",Bgx(AHN),"PT",Bgx(A7c),"KE",BgB(AE4),"L8",BgB(A3Y),"zf",function(b,c,d,e,f,g){return A4y(this,b,c,d,e,f,g);},"IY",BgA(AF_),"Pp",Bgz(AWt),"QI",Bgz(AIk),
"B4",BgA(AZZ),"uz",Bgy(AFk),"LK",BgA(A2w),"vt",Bgz(AWg),"Mq",Bgy(APV),"MY",Bgx(A5n)],AC0,"NegativeArraySizeException",13,Bm,[],0,3,0,0,["d",Bgx(A5M)],AAk,0,Ed,[],0,0,0,0,["lk",BgA(AZ9),"e",BgA(AEy)],AAD,0,T,[],0,0,0,0,["d",Bgx(AFi),"T",Bgx(AKD)],ZU,0,C,[],0,0,0,0,["Wn",Bgz(AHv),"b",Bgx(AMh)],Gz,"Timer",3,C,[],0,3,0,EH,["d",Bgx(UN),"FX",Bgz(A9w),"Gg",BgB(A90),"G7",Bgx(AST),"Nf",Bgz(ARr),"Ii",Bgy(AOo)],Du,"NumberFormatException",13,C3,[],0,3,0,0,["d",Bgx(AV_),"bP",Bgy(AL3)],XZ,0,C,[Gt,Cz],0,3,0,0,["KH",Bgz(AND),
"bC",Bgx(A2f),"bz",Bgx(AX$)],AAV,0,Jo,[],0,0,0,0,["UH",function(b,c,d,e,f){A8T(this,b,c,d,e,f);}],Wj,0,C,[],0,0,0,0,0,R2,0,Da,[],0,3,0,0,["Jm",BgA(A5_),"nd",function(b,c,d,e,f,g,h){return ASb(this,b,c,d,e,f,g,h);}],ABf,0,Jw,[],0,3,0,0,["d",Bgx(A2n),"Mv",Bgz(AMQ),"MA",Bgy(AL2),"No",Bgy(AKH)],SS,0,T,[],0,0,0,0,["d",Bgx(AM0),"T",Bgx(APT)],Wo,0,C,[Cz],0,3,0,0,["Uw",Bgy(A6l),"KH",Bgz(ACT),"bZ",Bgx(A1x)],AAP,0,T,[],0,0,0,0,["d",Bgx(ANl),"T",Bgx(AUx)],ZZ,"IllegalStateException",13,B5,[],0,3,0,0,["d",Bgx(A7Y),"bP",
Bgy(A5F)],YM,0,C,[EJ],0,3,0,0,["d",Bgx(A_z),"fV",Bgx(AOW),"dK",BgB(ALS),"n6",Bgz(AL$)],Z$,0,C,[],0,3,0,0,["XU",Bgz(A9o)],OG,0,GB,[],0,3,0,0,["d",Bgx(T1),"Fo",Bgy(A8B),"LZ",Bgy(ATX),"DC",Bgy(AMu),"QV",Bgy(AWf),"AZ",Bgy(AGR)],Jj,0,BB,[],0,0,0,0,["nY",Bgy(AOf),"Q",Bgy(AXw),"e",BgA(ADt),"cE",BgA(A53),"cI",BgB(AQe),"u",Bgx(A$J),"ca",Bgy(AHa),"ba",Bgy(A6b)],Rl,0,Ef,[],0,0,0,0,["yY",BgB(A51),"e",BgA(A7N)],Rm,0,Bt,[],4,0,0,0,["d",Bgx(AHm),"e",BgA(A26),"ba",Bgy(A1W),"u",Bgx(ANh)],YT,0,C,[KO],0,0,0,0,["XR",Bgy(ASS),"nP",
Bgy(A2r),"OQ",Bgy(ATq)],DC,0,C,[B4,HP],0,3,0,H1,["d",Bgx(ZJ),"Vh",BgA(Rt),"I",BgA(A3h),"M",Bgy(AHd),"fB",Bgy(ARx),"AR",BgA(ALI),"gl",Bgy(ANs),"JI",BgA(AQY),"em",Bgy(A7K),"IP",Bgx(A_t),"ua",Bgx(AGA),"GR",Bgy(AZp),"BZ",Bgy(AIQ),"bU",Bgx(A_P),"yA",Bgy(ART),"iC",Bgy(AYM),"HW",BgA(A3M),"kN",Bgy(AQM),"qW",Bgy(AV6),"rA",Bgz(AHq),"yq",Bgx(A_J),"i3",Bgz(ANV),"b",Bgx(AFs),"bp",Bgx(A7R),"z",Bgy(AG_),"L1",Bgx(AIV)],GC,0,C,[B4,HP],0,3,0,AOL,["d",Bgx(Sc),"T9",Bgz(Ty),"k7",Bgy(AXC),"ix",Bgz(AC9),"w2",Bgy(AO0)],EY,0,C,[KQ],
0,3,0,0,["Rn",BgB(Oo),"Wz",BgA(Vj),"Q9",Bgz(G1),"bP",Bgy(ARw),"L_",BgA(AOD)],GV,0,C,[],0,3,0,0,["d",Bgx(AJW),"mN",Bgz(Ui),"iY",Bgy(A2b),"b2",Bgy(AQQ),"K",Bgx(AZM),"Hy",Bgx(ANN),"Pc",Bgy(AN4),"t1",Bgy(AE7),"bp",Bgx(AMj),"z",Bgy(A9u),"b",Bgx(A2V)],H0,0,C,[Ko,E2],0,3,0,0,["SX",Bgz(ABr),"fe",Bgx(A3f),"I8",Bgx(ANj),"qD",Bgz(AFA),"u4",Bgx(A5o),"Mw",Bgy(A3x),"OJ",Bgy(AKP)],Ij,0,BH,[],0,3,0,JD,["d",Bgx(JK),"Un",Bgy(R$),"QT",Bgx(A5f),"bp",Bgx(ANL),"pf",Bgx(A8e)],Df,0,Ha,[],0,3,0,CR,["RF",Bgz(Xe),"T4",BgA(L7),"Wx",function(b,
c,d,e,f){Kx(this,b,c,d,e,f);},"Us",BgA(Mx),"Ei",Bgx(AXx),"uI",Bgy(A3U),"z",Bgy(A6t),"PM",Bgy(ASU),"C9",Bgz(AGQ),"y8",Bgz(A$L),"bd",Bgx(AEg),"If",Bgy(A2I),"J6",Bgz(A3q)]]);
$rt_metadata([KI,0,DP,[],0,3,0,0,["d",Bgx(A6m),"Kc",Bgy(A2H),"Hl",function(b,c,d,e,f,g){return A5l(this,b,c,d,e,f,g);},"Pz",function(b,c,d,e,f,g,h,i,j,k,l,m){return A$l(this,b,c,d,e,f,g,h,i,j,k,l,m);},"Ik",Bgy(ALn)],Xv,0,C,[NC],0,3,0,0,["d",Bgx(AHS),"qD",Bgz(A25)],Me,"IllegalAccessException",13,Dn,[],0,3,0,0,["d",Bgx(A9d)],L8,0,FU,[],0,3,0,AQa,["TS",Bgy(R_),"b6",Bgy(UC)],AA6,0,E5,[],0,3,0,0,["bj",Bgy(AX2),"f0",Bgx(A0f),"bd",Bgx(AX0)],P2,0,C,[],4,3,0,0,["Ud",Bgy(AR5),"BA",Bgx(FF),"Ai",Bgy(Tf),"Cy",Bgy(ACV)],AB3,
0,Fh,[],0,0,0,0,["TU",function(b,c,d,e,f,g){A_s(this,b,c,d,e,f,g);},"vn",Bgy(AIY),"qV",Bgz(A19),"e1",Bgx(AYG)],DA,0,Bx,[],12,3,0,Gl,0,RC,0,C,[IL],0,0,0,0,["RP",Bgy(AWb),"qm",Bgx(ATz),"JQ",Bgx(AK9)],I7,0,C,[],0,3,0,Tr,0,ZL,0,C,[],0,3,0,0,["d",Bgx(ASe),"mN",Bgz(AAK),"cd",Bgy(A3m),"K",Bgx(ASy),"Pe",Bgy(AWS),"CC",Bgy(AYX)],Tx,0,C,[],4,3,0,0,0,VL,0,T,[],0,0,0,0,["d",Bgx(AMx),"T",Bgx(A$d)],RD,0,Hl,[DM,B4],0,3,0,0,["Bj",Bgy(A0W),"d",Bgx(AHI),"bj",Bgy(OM),"mt",Bgz(ACr),"W",Bgy(AR$),"V3",Bgy(ZX),"V$",BgA(KA),"X5",Bgx(K1),
"x",Bgz(ANB),"Qv",Bgz(ARN),"wx",BgA(APn),"Mp",Bgy(A0C),"oU",Bgx(A6K),"IO",Bgy(AM6),"Sz",Bgy(SO)],DE,0,Bx,[],12,3,0,H3,0,ZM,0,Bt,[],0,0,0,0,["bj",Bgy(A1d),"e",BgA(AOh),"ba",Bgy(A0d),"u",Bgx(AD3)],Dp,0,BH,[],0,3,0,B2,["FU",Bgy(JE),"V4",Bgz(Kn),"Ub",function(b,c,d,e,f,g,h){Od(this,b,c,d,e,f,g,h);},"UV",Bgz(Zs),"R_",Bgy(ACR),"pf",Bgx(A68),"bp",Bgx(AUk)],ABs,0,C,[],0,3,0,0,["d",Bgx(APb),"mN",Bgz(Uc),"Al",Bgy(AXV),"GN",Bgy(AEU),"x0",BgA(AQ4),"rI",BgA(AEb),"oa",Bgy(AYo),"lX",Bgz(AU6),"K",Bgx(AWG),"D$",Bgy(AP3),"t2",
Bgy(ANM),"h6",Bgy(AGl)],Bh,0,C,[],0,3,0,Bfh,0,NA,0,FT,[],0,3,0,A9C,["TA",BgB(Te),"b6",Bgy(AA3)],Jq,0,C,[],0,3,0,Bj,["Tv",Bgz(Xz),"jK",Bgx(ANm),"h5",Bgx(A9g),"mz",Bgx(A2K),"zo",Bgx(AJE),"t3",Bgx(ASh),"i",Bgx(AIs),"nS",Bgx(AP$)],Qz,0,D5,[],4,0,0,0,["d",Bgx(AZ5)],WV,0,Ci,[],4,0,0,0,["d",Bgx(A$y),"bg",BgB(AQ_)],LQ,0,Bt,[],4,0,0,0,["bj",Bgy(ABx),"e",BgA(A6o),"ba",Bgy(AX9),"u",Bgx(A3E)],WS,0,Ci,[],4,0,0,0,["d",Bgx(AU2),"bg",BgB(AOt)],WU,0,Ci,[],4,0,0,0,["d",Bgx(ADK),"bg",BgB(A8S)],MQ,0,Gn,[],0,3,0,AQd,["d",Bgx(ZV),
"b6",Bgy(YP)],WQ,0,Ci,[],4,0,0,0,["d",Bgx(AR4),"bg",BgB(A4i)],WR,0,Ci,[],4,0,0,0,["d",Bgx(AFt),"bg",BgB(AEq)],WO,0,Ci,[],4,0,0,0,["d",Bgx(A07),"bg",BgB(A6s)],TE,0,C,[L3],4,3,0,0,["fU",Bgz(A$u),"gd",BgA(YD),"g6",Bgx(A0v),"bd",Bgx(AJY),"gE",Bgy(AEO)],WP,0,Ci,[],4,0,0,0,["d",Bgx(ASa),"bg",BgB(ASR)],WM,0,V,[],4,0,0,0,["d",Bgx(A4O),"bg",BgB(AFz)],Gj,0,C,[],0,0,0,0,["dT",Bgz(A87),"bV",Bgx(A2N),"pN",Bgy(AXP),"G$",Bgy(AXq),"sf",Bgx(AHh),"k0",Bgx(APd),"tn",Bgx(AFJ),"E",Bgx(A69),"jn",Bgx(AYh),"cM",Bgx(AWe),"Hm",Bgx(AIq),
"b",Bgx(AIZ),"bN",Bgx(A1A),"hy",Bgx(ATf),"Ex",Bgx(AW2),"Fz",Bgx(A65),"dM",Bgx(AFq)],WN,0,V,[],4,0,0,0,["d",Bgx(AJ_),"bg",BgB(AHO)],XX,0,T,[],0,0,0,0,["d",Bgx(ATh),"T",Bgx(ASH)],Zh,0,Jc,[],0,0,0,0,["d",Bgx(ASr),"T",Bgx(AWH)],Xy,0,CO,[],1,3,0,0,0,Yr,0,C,[],0,3,0,0,0,U9,0,C,[Nq],0,3,0,0,["Sl",Bgy(A3_),"uw",Bgy(A02),"KX",Bgy(ATU),"H$",Bgy(ANa),"rF",Bgy(A5O),"sE",Bgz(ALp),"PS",Bgz(AKm),"EE",Bgy(AN0),"v_",BgB(A$z),"Ji",Bgy(AEY),"vD",Bgy(A$i),"kT",Bgy(A0N),"J8",Bgz(AXv),"eh",Bgy(A3d),"xd",BgA(A_h),"Nx",BgB(A5Z),"o5",
Bgy(AT1),"Ja",Bgx(A0R),"Or",Bgz(AZx),"GP",Bgz(AUp),"kB",function(b,c,d,e,f,g,h,i,j){AJN(this,b,c,d,e,f,g,h,i,j);},"OY",BgA(A6v),"oK",BgB(AX4),"xj",Bgz(ALC),"c$",Bgz(AOA),"J0",BgB(AZW),"fD",BgB(AZg),"qq",BgB(AM1),"Io",Bgy(AID),"M1",Bgx(AGS),"Ot",Bgy(A1t),"xJ",Bgy(AQm),"O$",BgB(A6J),"QA",Bgy(ARE),"i5",Bgx(AZB),"xa",Bgy(A5Y),"PR",BgB(AN5),"Qd",BgB(ADS),"Db",Bgz(AI0),"ML",Bgz(ALY),"qo",BgA(AJU),"An",Bgy(AY1),"NR",BgA(A5W),"N0",Bgy(A$X),"AO",Bgz(AG1),"Ls",Bgy(AUy),"QG",Bgz(AVX),"ji",BgA(AOk),"MW",Bgz(AWd),"Cu",Bgz(AOQ),
"OR",BgA(AMa),"G6",BgB(A0b),"F0",BgB(AYf),"GM",function(b,c,d,e,f){AEf(this,b,c,d,e,f);},"I2",function(b,c,d,e,f){AQT(this,b,c,d,e,f);},"yf",function(b,c,d,e,f){A0Z(this,b,c,d,e,f);},"Kh",Bgy(A11),"Pm",function(b,c,d,e,f,g){A9Z(this,b,c,d,e,f,g);}],XY,0,Fr,[],0,0,0,0,["fO",function(b,c,d,e,f,g){AEj(this,b,c,d,e,f,g);},"vn",Bgy(A4W),"qV",Bgz(AYv)]]);
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
~a);};}var CA=Long_add;var D6=Long_sub;var Cf=Long_mul;var E_=Long_div;var AU$=Long_rem;var BQ=Long_or;var Br=Long_and;var ARp=Long_xor;var D8=Long_shl;var M$=Long_shr;var CN=Long_shru;var Bo_=Long_compare;var Z=Long_eq;var Dw=Long_ne;var Kt=Long_lt;var Ku=Long_le;var Hq=Long_gt;var Bpa=Long_ge;var Bpb=Long_not;var A4b=Long_neg;
function TeaVMThread(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}TeaVMThread.prototype.push=function(){for(var i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};TeaVMThread.prototype.s=TeaVMThread.prototype.push;TeaVMThread.prototype.pop=function(){return this.stack.pop();};TeaVMThread.prototype.l=TeaVMThread.prototype.pop;TeaVMThread.prototype.isResuming=function(){return this.status===2;};TeaVMThread.prototype.isSuspending
=function(){return this.status===1;};TeaVMThread.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};TeaVMThread.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if($rt_currentNativeThread!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:function(result){if(result instanceof Error){throw result;}};this.run();};TeaVMThread.prototype.resume=function(){if($rt_currentNativeThread
!==null){throw new Error("Another thread is running");}this.status=2;this.run();};TeaVMThread.prototype.run=function(){$rt_currentNativeThread=this;var result;try {result=this.runner();}catch(e){result=e;}finally {$rt_currentNativeThread=null;}if(this.suspendCallback!==null){var self=this;var callback=this.suspendCallback;this.suspendCallback=null;callback(function(){self.resume();});}else if(this.status===0){this.completeCallback(result);}};function $rt_suspending(){var thread=$rt_nativeThread();return thread
!=null&&thread.isSuspending();}function $rt_resuming(){var thread=$rt_nativeThread();return thread!=null&&thread.isResuming();}function $rt_suspend(callback){var nativeThread=$rt_nativeThread();if(nativeThread===null){throw new Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);}function $rt_startThread(runner,callback){(new TeaVMThread(runner)).start(callback);}var $rt_currentNativeThread=null;function $rt_nativeThread(){return $rt_currentNativeThread;}function $rt_invalidPointer()
{throw new Error("Invalid recorded state");}main=$rt_mainStarter(BfF);
main.javaException=$rt_javaException;
(function(){var c;c=SY.prototype;c.onBulletPhysicsLoaded=c.JQ;c=XU.prototype;c.fullscreenChanged=c.T2;c=W0.prototype;c.setWorldTransformJS=c.Xk;c=W1.prototype;c.getWorldTransformJS=c.VX;c=Ub.prototype;c.handleEvent=c.lF;c=Pm.prototype;c.onready=c.T3;c.ontimeout=c.Ro;c=V2.prototype;c.onTimer=c.SV;c=P0.prototype;c.handleEvent=c.lF;c=QX.prototype;c.getLength=c.XA;c.get=c.Um;c=Sr.prototype;c.onAnimationFrame=c.S$;c=SR.prototype;c.handleEvent=c.lF;c=SP.prototype;c.handleEvent=c.lF;c=SX.prototype;c.handleEvent=c.lF;c
=SW.prototype;c.handleEvent=c.lF;c=Pj.prototype;c.dispatchEvent=c.Sj;c.addEventListener=c.W3;c.removeEventListener=c.XQ;c.getLength=c.V1;c.get=c.US;c.addEventListener=c.Vp;c.removeEventListener=c.S9;c=RC.prototype;c.onBulletPhysicsLoaded=c.JQ;})();
})();
