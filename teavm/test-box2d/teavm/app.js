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
{if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.dX=f;}
function $rt_cls(cls){return LI(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return MH(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.V.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return Bgp;}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(I4());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return DH();}
function $rt_setThread(t){return Im(t);}
function $rt_createException(message){return BaB(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var G=$rt_throw;var Cx=$rt_compare;var Bgq=$rt_nullCheck;var F=$rt_cls;var Bc=$rt_createArray;var ATt=$rt_isInstance;var A8l=$rt_nativeThread;var Bd_=$rt_suspending;var Beg=$rt_resuming;var Bc6=$rt_invalidPointer;var B=$rt_s;var M=$rt_eraseClinit;var Dg=$rt_imul;var Bn=$rt_wrapException;var Bgr=$rt_checkBounds;var Bgs=$rt_checkUpperBound;var Bgt=$rt_checkLowerBound;var Bgu=$rt_wrapFunction0;var Bgv=$rt_wrapFunction1;var Bgw=$rt_wrapFunction2;var Bgx=$rt_wrapFunction3;var Bgy=$rt_wrapFunction4;var D=$rt_classWithoutFields;var H
=$rt_createArrayFromData;var Hm=$rt_createCharArrayFromData;var Bgz=$rt_createByteArrayFromData;var BgA=$rt_createShortArrayFromData;var M1=$rt_createIntArrayFromData;var BgB=$rt_createBooleanArrayFromData;var BgC=$rt_createFloatArrayFromData;var BgD=$rt_createDoubleArrayFromData;var AY2=$rt_createLongArrayFromData;var OZ=$rt_createBooleanArray;var Cw=$rt_createByteArray;var A0I=$rt_createShortArray;var B8=$rt_createCharArray;var Bf=$rt_createIntArray;var AF$=$rt_createLongArray;var Cf=$rt_createFloatArray;var BgE
=$rt_createDoubleArray;var Cx=$rt_compare;var BgF=$rt_castToClass;var BgG=$rt_castToInterface;var Lg=Long_toNumber;var O=Long_fromInt;var BgH=Long_fromNumber;var Bx=Long_create;var Bd=Long_ZERO;var BgI=Long_hi;var T=Long_lo;
function C(){this.bn=null;this.$id$=0;}
function Rx(){var a=new C();L(a);return a;}
function VI(b){var c;if(b.bn===null)NY(b);if(b.bn.cg===null)b.bn.cg=DH();else if(b.bn.cg!==DH())G(CJ(B(0)));c=b.bn;c.cG=c.cG+1|0;}
function JY(b){var c,d;if(!Fe(b)&&b.bn.cg===DH()){c=b.bn;d=c.cG-1|0;c.cG=d;if(!d)b.bn.cg=null;Fe(b);return;}G(ASC());}
function BbW(b){AMT(b,1);}
function AMT(b,c){var d,$p,$z;$p=0;if(Beg()){var $T=A8l();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.bn===null)NY(b);if(b.bn.cg===null)b.bn.cg=DH();if(b.bn.cg===DH()){d=b.bn;d.cG=d.cG+c|0;return;}$p=1;case 1:AOo(b,c);if(Bd_()){break _;}return;default:Bc6();}}A8l().s(b,c,d,$p);}
function NY(b){b.bn=Bbf();}
function AOo(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.lo=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.J6=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=Bbv(callback);return thread.suspend(function(){try{BeC(b,c,callback);}catch($e){callback.J6($rt_exception($e));}});}
function BeC(b,c,d){var e,f,g;e=DH();if(b.bn===null){NY(b);Im(e);f=b.bn;f.cG=f.cG+c|0;d.lo(null);return;}if(b.bn.cg===null){b.bn.cg=e;Im(e);f=b.bn;f.cG=f.cG+c|0;d.lo(null);return;}g=b.bn;if(g.dn===null)g.dn=AHz();A43(g.dn,BcG(e,b,c,d));}
function Be8(b){AH2(b,1);}
function AH2(b,c){var d;if(!Fe(b)&&b.bn.cg===DH()){d=b.bn;d.cG=d.cG-c|0;if(d.cG>0)return;d.cg=null;if(d.dn!==null&&!It(d.dn))APz(BaM(b));else Fe(b);return;}G(ASC());}
function ASZ(b){var c,d,e;if(!Fe(b)&&b.bn.cg===null){c=b.bn;if(c.dn!==null&&!It(c.dn)){d=c.dn;e=A6q(d);c.dn=null;e.hZ();}return;}}
function Fe(a){var b,c;b=a.bn;if(b===null)return 1;a:{b:{if(b.cg===null){if(b.dn!==null){c=b.dn;if(!It(c))break b;}if(b.uW===null)break a;c=b.uW;if(It(c))break a;}}return 0;}AGF(a);return 1;}
function AGF(a){a.bn=null;}
function L(a){}
function CW(a){return LI(a.constructor);}
function Nj(a){return IM(a);}
function APG(a,b){return a!==b?0:1;}
function QU(a){var b,c;b=J3(IM(a));c=K();I(I(c,B(1)),b);return Q(c);}
function IM(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AOR(a){var b,c,d;if(!ATt(a,D0)){b=a;if(b.constructor.$meta.item===null)G(BbK());}c=AHM(a);b=c;d=$rt_nextId();b.$id$=d;return c;}
function A3H(b){ASZ(b);}
function AP2(b,c,d,e){var f;Im(b);c.bn.cg=b;f=c.bn;f.cG=f.cG+d|0;e.lo(null);}
function W(){var a=this;C.call(a);a.ph=null;a.om=null;}
function Bs(a){L(a);}
function A7O(a,b){if(!b&&a.ph===null)a.ph=a.O();else if(b&&a.om===null)a.om=(a.O()).eX(1);if(b)return a.om;return a.ph;}
var TK=D(W);
function Bah(){var a=new TK();A8h(a);return a;}
function A8h(a){Bs(a);}
function AZ2(a){return ((C0()).cn(32)).cn(9);}
var RA=D(W);
function BaO(){var a=new RA();A$p(a);return a;}
function A$p(a){Bs(a);}
function APO(a){return ((C0()).bu(0,31)).cn(127);}
var Eq=D();
var JE=D(0);
var Hk=D(Eq);
var BgJ=null;function BgK(){BgK=M(Hk);ANM();}
function ANM(){BgJ=Z();}
var HI=D(0);
var Ci=D(Hk);
var Cr=D(Ci);
var BgL=null;var BgM=null;var BgN=null;var BgO=null;var BgP=null;var BgQ=null;var BgR=null;var BgS=null;function BgT(){BgT=M(Cr);A8p();}
function A8p(){BgL=B1(0.0,0.0,1.0,1.0);BgM=B1(1.0,0.0,0.0,1.0);BgN=B1(0.0,1.0,0.0,1.0);BgO=BdK();BgP=A_U();BgQ=Bdc();BgR=Ba6();BgS=Beb();}
var S=D();
var BgU=null;var BgV=null;var BgW=null;var BgX=null;var BgY=null;var BgZ=null;var Bg0=null;var Bg1=null;var Bg2=null;var Bg3=null;var Bg4=null;var Bg5=null;var Bg6=null;var Bg7=null;var Bg8=null;var Bg9=null;var Bg$=null;var Bg_=null;var Bha=null;var Bhb=null;var Bhc=null;var Bhd=null;var Bhe=null;var Bhf=null;var Bhg=null;var Bhh=null;var Bhi=null;var Bhj=null;var Bhk=null;var Bhl=null;var Bhm=null;var Bhn=null;var Bho=null;var Bhp=null;var Bhq=null;var Bhr=null;var Bhs=null;var Bht=null;var Bhu=null;var Bhv
=null;var Bhw=null;var Bhx=null;var Bhy=null;var Bhz=null;function Bcr(){Bcr=M(S);AYt();}
function BY(a){Bcr();L(a);}
function AYt(){BgU=Bdj();BgV=A_W();BgW=Ber();BgX=Baq();BgY=BgX;BgZ=J8(2);Bg0=N$(2);Bg1=Bg0;Bg2=OM(2);Bg3=Bg2;Bg4=Bcn();Bg5=BaK();Bg6=J8(3);Bg7=N$(3);Bg8=OM(3);Bg9=Bey();Bg$=Bfu();Bg_=J8(4);Bha=N$(4);Bhb=OM(4);Bhc=J8(5);Bhd=N$(5);Bhe=OM(5);Bhf=Bgn();Bhg=A_7();Bhh=Bdd();Bhi=AZh(2.0,10.0);Bhj=A0Z(2.0,10.0);Bhk=AQt(2.0,10.0);Bhl=AZh(2.0,5.0);Bhm=A0Z(2.0,5.0);Bhn=AQt(2.0,5.0);Bho=Ba3();Bhp=Bd$();Bhq=BfD();Bhr=Bb_(2.0,10.0,7,1.0);Bhs=BdT(2.0,10.0,6,1.0);Bht=Be5(2.0,10.0,7,1.0);Bhu=BaY(1.5);Bhv=Bf$(2.0);Bhw=BeT(2.0);Bhx
=Ba_(4);Bhy=BbI(4);Bhz=BdP(4);}
function Gv(){var a=this;S.call(a);a.ch=null;a.c6=null;}
function BdP(a){var b=new Gv();K2(b,a);return b;}
function K2(a,b){var c;BY(a);if(b>=2&&b<=5){a:{a.ch=Cf(b);a.c6=Cf(b);a.c6.data[0]=1.0;switch(b){case 2:break;case 3:a.ch.data[0]=0.4000000059604645;a.ch.data[1]=0.4000000059604645;a.ch.data[2]=0.20000000298023224;a.c6.data[1]=0.33000001311302185;a.c6.data[2]=0.10000000149011612;break a;case 4:a.ch.data[0]=0.3400000035762787;a.ch.data[1]=0.3400000035762787;a.ch.data[2]=0.20000000298023224;a.ch.data[3]=0.15000000596046448;a.c6.data[1]=0.25999999046325684;a.c6.data[2]=0.10999999940395355;a.c6.data[3]=0.029999999329447746;break a;case 5:a.ch.data[0]
=0.30000001192092896;a.ch.data[1]=0.30000001192092896;a.ch.data[2]=0.20000000298023224;a.ch.data[3]=0.10000000149011612;a.ch.data[4]=0.10000000149011612;a.c6.data[1]=0.44999998807907104;a.c6.data[2]=0.30000001192092896;a.c6.data[3]=0.15000000596046448;a.c6.data[4]=0.05999999865889549;break a;default:break a;}a.ch.data[0]=0.6000000238418579;a.ch.data[1]=0.4000000059604645;a.c6.data[1]=0.33000001311302185;}c=a.ch.data;c[0]=c[0]*2.0;return;}G(Bo((((K()).h(B(2))).A(b)).d()));}
function YZ(){var a=this;C.call(a);a.nq=null;a.q9=null;a.vH=0;a.wl=0;}
function Be7(a,b){var c=new YZ();ATw(c,a,b);return c;}
function ATw(a,b,c){L(a);a.nq=b;a.q9=c;}
function ALu(a){return Cq(a.nq);}
function A$w(a,b){return Be(a.nq)<b?0:1;}
function AMH(a){return Cq(a.q9);}
function A8y(a,b){return Be(a.q9)<b?0:1;}
function A1r(a,b){a.vH=b;}
function A_R(a,b){a.wl=b;}
var Th=D();
var Zq=D();
function A_Q(b){var c,d;c=b.Hi();d=c.data;if(d.length<=0)return null;return QE(d[0]);}
function AQq(b,c){var d,e,f,g,h,$$je;if(c!==null&&c.data.length){a:{b:{try{d=b.CR(c);e=QE(d);}catch($$e){$$je=Bn($$e);if($$je instanceof HJ){f=$$je;break a;}else if($$je instanceof Jk){f=$$je;break b;}else{throw $$e;}}return e;}e=new C$;g=b.q();h=K();I(I(h,B(3)),g);D1(e,Q(h),f);G(e);}e=new C$;g=b.q();h=K();I(I(I(h,B(4)),g),B(5));D1(e,Q(h),f);G(e);}return A_Q(b);}
function A0z(b,c){var d,e,f,g,h,$$je;a:{try{d=b.B5(c);e=QE(d);}catch($$e){$$je=Bn($$e);if($$je instanceof HJ){f=$$je;break a;}else if($$je instanceof Jk){f=$$je;e=new C$;g=b.q();h=K();I(I(h,B(3)),g);D1(e,Q(h),f);G(e);}else{throw $$e;}}return e;}e=new C$;g=b.q();h=K();I(I(h,B(6)),g);D1(e,Q(h),f);G(e);}
var IB=D(0);
var Eb=D();
var BB=D(0);
var Du=D();
function OP(a){L(a);}
var Co=D(0);
function Ee(){Du.call(this);this.hd=0;}
var BhA=null;var BhB=null;function CZ(){CZ=M(Ee);A8G();}
function AFN(a){var b=new Ee();HV(b,a);return b;}
function HV(a,b){CZ();OP(a);a.hd=b;}
function Z6(b,c){CZ();if(!(c>=2&&c<=36))c=10;return ((Bf9(20)).xb(b,c)).d();}
function AFR(b){CZ();return b>>>4^b<<28^b<<8^b>>>24;}
function J3(b){CZ();return AHN(b,4);}
function AD7(b){CZ();return Z6(b,10);}
function GB(b,c){var d,e,f,g,h,i,j;CZ();if(c>=2&&c<=36){if(b!==null&&!b.bH()){a:{d=0;e=0;switch(b.f(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==b.i())G(Ev());while(e<b.i()){g=e+1|0;h=NX(b.f(e));if(h<0){i=new Cg;j=K();I(I(j,B(7)),b);DL(i,Q(j));G(i);}if(h>=c){i=new Cg;j=K();I(I(V(I(j,B(8)),c),B(9)),b);DL(i,Q(j));G(i);}f=Dg(c,f)+h|0;if(f<0){if(g==b.i()&&f==(-2147483648)&&d)return (-2147483648);i=new Cg;j=K();I(I(j,B(10)),b);DL(i,Q(j));G(i);}e=g;}if(d)f= -f|0;return f;}G(A4Z(B(11)));}i=new Cg;j
=K();V(I(j,B(12)),c);DL(i,Q(j));G(i);}
function BU(b){CZ();return GB(b,10);}
function Bb(b){CZ();if(b>=(-128)&&b<=127){Y5();return BhB.data[b+128|0];}return AFN(b);}
function Y5(){var b;CZ();a:{if(BhB===null){BhB=Bc(Ee,256);b=0;while(true){if(b>=BhB.data.length)break a;BhB.data[b]=AFN(b-128|0);b=b+1|0;}}}}
function AXT(a){return a.hd;}
function AUx(a){return AD7(a.hd);}
function AWG(a){return AFR(a.hd);}
function A$Y(a,b){if(a===b)return 1;return b instanceof Ee&&b.hd==a.hd?1:0;}
function MX(b){var c,d,e;CZ();if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;e=d>>>8;if(!e)e=d;else c=c|8;d=e>>>4;if(!d)d=e;else c=c|4;e=d>>>2;if(!e)e=d;else c=c|2;if(e>>>1)c=c|1;return (32-c|0)-1|0;}
function FA(b){var c,d,e;CZ();if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;e=d<<8;if(!e)e=d;else c=c|8;d=e<<4;if(!d)d=e;else c=c|4;e=d<<2;if(!e)e=d;else c=c|2;if(e<<1)c=c|1;return (32-c|0)-1|0;}
function AA5(b,c){var d;CZ();d=c&31;return b<<d|b>>>(32-d|0);}
function Tl(b){var c;CZ();c=(b&(-16711936))>>>8|(b&16711935)<<8;c=(c>>>16)+(c<<16)|0;return c;}
function A8G(){BhA=F($rt_intcls());}
var Ma=D();
var Ch=D(0);
var DR=D(0);
var F8=D(0);
var Eu=D();
var B$=D(Eu);
var Gs=D(B$);
function Id(){var a=this;C.call(a);a.Hd=null;a.ox=null;a.uZ=0.0;a.wT=0.0;a.pn=null;a.oJ=null;a.f_=0;}
function AGw(a,b,c,d,e){L(a);DQ();a.pn=BhC;a.oJ=BhC;SY(a,e);a.Hd=b;a.ox=e.dX();a.uZ=c;a.wT=d;}
function ABm(a,b,c,d){var e;e=Cw(1);e.data[0]=63;AGw(a,b,c,d,e);}
function SY(a,b){var c;if(b!==null){c=b.data.length;if(c&&c>=a.wT)return;}G(Bo(B(13)));}
function Lq(a,b){if(b!==null){a.pn=b;a.sb(b);return a;}G(Bo(B(14)));}
function AVh(a,b){}
function Mm(a,b){if(b!==null){a.oJ=b;a.n8(b);return a;}G(Bo(B(14)));}
function A2R(a,b){}
function IY(a,b,c,d){var e,f,g,h,$$je;a:{if(a.f_!=3){if(d)break a;if(a.f_!=2)break a;}G(JI());}a.f_=!d?1:2;while(true){try{e=a.J8(b,c);}catch($$e){$$je=Bn($$e);if($$je instanceof Bk){f=$$je;G(AZ9(f));}else{throw $$e;}}if(e.mx()){if(!d)return e;g=Be(b);if(g<=0)return e;e=Cm(g);}else if(e.hJ())break;h=!e.ra()?a.pn:a.oJ;b:{DQ();if(h!==BhD){if(h===BhE)break b;else return e;}if(Be(c)<a.ox.data.length)return BhF;AA8(c,a.ox);}b.qx(Cd(b)+e.i()|0);}return e;}
function AAA(a,b){var c,d,e;if(!Be(b))return TD(0);Pj(a);c=TD(Be(b)*a.uZ|0);while(true){d=IY(a,b,c,0);BD();if(d===BhG)break;if(d===BhF){c=Kr(a,c);continue;}if(!d.r_())continue;d.uU();}e=IY(a,b,c,1);if(e.r_())e.uU();while(true){e=Kb(a,c);if(e.mx())break;if(!e.hJ())continue;c=Kr(a,c);}JS(c);return c;}
function Kr(a,b){var c,d,e;c=H7(b);d=c.data;d=OI(c,d.length*2|0);e=HX(d);e.eS(Cd(b));return e;}
function Kb(a,b){var c;if(a.f_!=2&&a.f_!=4)G(JI());c=a.GO(b);BD();if(c===BhG)a.f_=3;return c;}
function A4T(a,b){BD();return BhG;}
function Pj(a){a.f_=0;a.KD();return a;}
function AQ3(a){}
function Dx(){var a=this;Id.call(a);a.x$=null;a.s7=null;}
function Hg(a,b,c,d){ABm(a,b,c,d);a.x$=B8(512);a.s7=Cw(512);}
function AIZ(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.x$;e=0;f=0;g=a.s7;a:{while(true){if((e+32|0)>f&&Cq(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=BN(Be(b)+j|0,i.length);b.tZ(d,j,f-j|0);e=0;}if(!Cq(c)){if(!Cq(b)&&e>=f){BD();k=BhG;}else{BD();k=BhF;}break a;}i=g.data;l=0;m=BN(Be(c),i.length);n=Be7(b,c);k=a.ks(d,e,f,g,l,m,n);e=n.vH;j=n.wl;if(k===null){if(!Cq(b)&&e>=f){BD();k=BhG;}else if(!Cq(c)&&e>=f){BD();k=BhF;}}c.tD(g,0,j);if(k!==null)break;}}b.qx(Cd(b)-(f-e|0)|0);return k;}
function Z1(){var a=this;Dx.call(a);a.qZ=0;a.oK=0;}
function Bc8(a,b,c){var d=new Z1();A6V(d,a,b,c);return d;}
function A6V(a,b,c,d){Hg(a,b,2.0,4.0);a.qZ=c;a.oK=d;}
function A7R(a,b,c,d,e,f,g,h){var i,j,k;if(a.qZ){if((f+2|0)>g){if(h.GB())i=null;else{BD();i=BhF;}return i;}a.qZ=0;if(!a.oK){j=e.data;k=f+1|0;j[f]=(-2);f=k+1|0;j[k]=(-1);}else{j=e.data;k=f+1|0;j[f]=(-1);f=k+1|0;j[k]=(-2);}}return !a.oK?Qr(a,b,c,d,e,f,g,h):Y3(a,b,c,d,e,f,g,h);}
function Y3(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c];if(!Cb(l)){if(B2(l)){c=k+(-1)|0;i=Cm(1);break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.eq(2))break a;BD();i=BhF;break a;}j=e.data;m=f+1|0;j[f]=(l&255)<<24>>24;f=m+1|0;j[m]=l>>8<<24>>24;c=k;}else{if(k==d){c=k+(-1)|0;if(h.fn(2))break a;BD();i=BhG;break a;}c=k+1|0;n=j[k];if(!B2(n)){c=c+(-2)|0;i=Cm(1);break a;}if((f+4|0)>g){c=c+(-2)|0;if(h.eq(4))break a;BD();i=BhF;break a;}j=e.data;m=f+1|0;j[f]=(l&255)<<24>>24;o=
m+1|0;j[m]=l>>8<<24>>24;m=o+1|0;j[o]=(n&255)<<24>>24;f=m+1|0;j[m]=n>>8<<24>>24;}}}h.gd(c);h.ft(f);return i;}
function Qr(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c];if(!Cb(l)){if(B2(l)){c=k+(-1)|0;i=Cm(1);break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.eq(2))break a;BD();i=BhF;break a;}j=e.data;m=f+1|0;j[f]=l>>8<<24>>24;f=m+1|0;j[m]=(l&255)<<24>>24;c=k;}else{if(k==d){c=k+(-1)|0;if(h.fn(2))break a;BD();i=BhG;break a;}c=k+1|0;n=j[k];if(!B2(n)){c=c+(-2)|0;i=Cm(1);break a;}if((f+4|0)>g){c=c+(-2)|0;if(h.eq(4))break a;BD();i=BhF;break a;}j=e.data;m=f+1|0;j[f]=l>>8<<24>>24;o=m+1
|0;j[m]=(l&255)<<24>>24;m=o+1|0;j[o]=n>>8<<24>>24;f=m+1|0;j[m]=(n&255)<<24>>24;}}}h.gd(c);h.ft(f);return i;}
var Jy=D(W);
function Bf2(){var a=new Jy();Rf(a);return a;}
function Rf(a){Bs(a);}
function Q7(a){return ((C0()).bu(97,122)).bu(65,90);}
var ER=D();
var BhH=0;var BhI=0;var BhJ=0;var BhK=0;var BhL=0;function BhM(){BhM=M(ER);A$C();}
function A$C(){BhH=(HF(B(15))).jB(B(16));BhI=!BhH&&(HF(B(17))).jB(B(18))?1:0;BhJ=!BhH&&(HF(B(17))).jB(B(19))?1:0;BhK=!BhH&&(HF(B(17))).jB(B(20))?1:0;BhL=!BhH&&!BhJ&&!BhK&&!BhI?1:0;}
var Dk=D(0);
var BI=D();
var DG=D(BI);
var S3=D(DG);
function BX(){var a=this;C.call(a);a.C=Bd;a.lu=0;a.Kt=0;a.Kw=null;a.ti=0;}
function B6(a){L(a);}
function AVO(a,b,c){a.lu=c;a.C=b;}
function A3a(a,b){if(!a.lu)a.C=b;}
function AVs(a){return a.C;}
function AS8(a){}
function A6w(a){var b,c,d,e;if(a.ti>0){Bgg();if(BhN&&BhO){b=BhP;c=a.d();d=a.ti;e=K();I(V(I(I(I(e,B(21)),c),B(22)),d),B(23));b.kH(B(24),Q(e));}}if(a.lu){a.Kt=1;a.Eg();a.C=Bd;}}
function APu(a){var b,c,d,e;b=a.Kw;c=a.C;d=a.lu;e=K();Bi(Zd(Bi(ABt(Bi(I(e,b),40),c),44),d),41);return Q(e);}
var HH=D(W);
function BbQ(){var a=new HH();RK(a);return a;}
function RK(a){Bs(a);}
function TL(a){return ((((C0()).bu(97,122)).bu(65,90)).bu(48,57)).cn(95);}
var AFF=D(HH);
function Bdt(){var a=new AFF();A2C(a);return a;}
function A2C(a){RK(a);}
function AP8(a){var b;b=(TL(a)).eX(1);b.ba=1;return b;}
var C2=D(BX);
var BhQ=null;function TV(){TV=M(C2);AJ0();}
function Bcv(a){var b=new C2();Tn(b,a);return b;}
function BhR(){var a=new C2();D4(a);return a;}
function AO1(a){return AG8(T((a.bk())));}
function Tn(a,b){TV();B6(a);}
function D4(a){TV();B6(a);}
function A8Z(a){return AD_(T(a.C));}
function AJ0(){BhQ=Bcv(0);}
function AG8(b){var body=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Shape);return body.GetType();}
function AD_(b){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Shape);var returnedJSObj=jsObj.m_radius;return returnedJSObj;}
var Nq=D(C2);
var BhS=null;function Bcs(){Bcs=M(Nq);A7p();}
function AMi(a){var b=new Nq();Yh(b,a);return b;}
function Yh(a,b){Bcs();D4(a);a.cD(Bd,0);}
function ATF(a){var b;b=ADz(T(a.C));Cs();BhT.bb(O(b));return BhT;}
function A7p(){BhS=AMi(0);}
function ADz(b){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2CircleShape);var returnedJSObj=jsObj.m_p;return $rt_globals.Box2D.getPointer(returnedJSObj);}
var Ck=D(0);
var FR=D(0);
function AAl(){var a=this;C.call(a);a.pY=null;a.sX=null;a.mV=null;}
function BdD(a,b,c){var d=new AAl();A$h(d,a,b,c);return d;}
function A$h(a,b,c,d){a.mV=b;a.pY=c;a.sX=d;L(a);}
function AMF(a,b){if($rt_str(b.type).K(B(25)))a.mV.h8.cu(a.pY);else a.mV.h8.cE(a.pY,a.sX);a.mV.nu.m8();}
function ALL(a,b){a.cC(b);}
function Y(){var a=this;C.call(a);a.xh=null;a.z9=0;}
function BJ(a,b,c){L(a);a.xh=b;a.z9=c;}
function Bj(a){return a.z9;}
function A16(a){return a.xh.d();}
var Dt=D(Y);
var BhU=null;var BhV=null;var BhW=null;var BhX=null;var BhY=null;var BhZ=null;var Bh0=null;function IL(){IL=M(Dt);AZA();}
function Ht(a,b){var c=new Dt();Zc(c,a,b);return c;}
function Zc(a,b,c){IL();BJ(a,b,c);}
function AZA(){BhU=Ht(B(16),0);BhV=Ht(B(26),1);BhW=Ht(B(27),2);BhX=Ht(B(28),3);BhY=Ht(B(29),4);BhZ=Ht(B(30),5);Bh0=H(Dt,[BhU,BhV,BhW,BhX,BhY,BhZ]);}
function Bz(){var a=this;C.call(a);a.j=null;a.cm=0;a.qI=null;a.zV=0;}
var Bh1=0;function ZR(){ZR=M(Bz);AVH();}
function Cu(a){var b,c;ZR();L(a);b=new Ee;c=Bh1;Bh1=c+1|0;HV(b,c);a.qI=b.d();}
function Jx(a,b){var c,d;ZR();L(a);c=new Ee;d=Bh1;Bh1=d+1|0;HV(c,d);a.qI=c.d();a.j=b;}
function GI(a,b,c,d){var e;e=d.D();while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function GO(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AZD(a,b){a.zV=b;}
function AYM(a){return a.zV;}
function AP0(a){var b,c,d;b=a.qI;c=a.q();d=K();Bi(I(Bi(I(Bi(d,60),b),58),c),62);return Q(d);}
function ASg(a){return a.Br();}
function ASY(a){return a.j;}
function Mb(a,b){a.j=b;}
function A9z(a,b){return 1;}
function A$K(a){return null;}
function Pb(a){var b;a.cm=1;if(a.j!==null){if(!a.j.cm){b=a.j.go();if(b!==null){a.j.cm=1;a.j=b;}a.j.dx();}else if(a.j instanceof F6&&a.j.c0.qB)a.j=a.j.j;}}
function AVH(){Bh1=1;}
function BR(){Bz.call(this);this.bI=0;}
function YK(a,b){Jx(a,b);a.bI=1;a.w3(1);}
function Da(a){Cu(a);a.bI=1;}
function A_e(a,b,c,d){var e;if((b+a.b5()|0)>d.D()){d.dt=1;return (-1);}e=a.bB(b,c);if(e<0)return (-1);return a.j.c(b+e|0,c,d);}
function A83(a){return a.bI;}
function AN3(a,b){return 1;}
function PS(){BR.call(this);this.hD=null;}
function Bgo(a){var b=new PS();A2a(b,a);return b;}
function A2a(a,b){Da(a);a.hD=b.d();a.bI=b.i();}
function A8g(a,b,c){var d,e,f,g;d=0;while(true){if(d>=a.hD.i())return a.hD.i();e=a.hD.f(d);f=b+d|0;if(e!=c.f(f)){g=a.hD;if(He(g.f(d))!=c.f(f))break;}d=d+1|0;}return (-1);}
function A9j(a){var b,c;b=a.hD;c=K();I(I(c,B(31)),b);return Q(c);}
var Gt=D(0);
function D8(){var a=this;C.call(a);a.pu=null;a.iC=null;a.lx=0;a.lP=0;a.tn=null;}
function Bh2(){var a=new D8();Sw(a);return a;}
function Bh3(a){var b=new D8();OT(b,a);return b;}
function Bh4(a,b){var c=new D8();NT(c,a,b);return c;}
function Bh5(a){var b=new D8();AF2(b,a);return b;}
function Sw(a){a.lx=1;a.lP=1;a.lD();}
function OT(a,b){a.lx=1;a.lP=1;a.lD();a.pu=b;}
function NT(a,b,c){a.lx=1;a.lP=1;a.lD();a.pu=b;a.iC=c;}
function AF2(a,b){a.lx=1;a.lP=1;a.lD();a.iC=b;}
function A09(a){return a;}
function ASu(a){return a.pu;}
function AMB(a){return a.kp();}
function A2n(a){a.vj(VX());}
function AVF(a,b){var c,d,e,f,g,h;b.mD((CW(a)).q());c=a.BQ();if(c!==null){d=K();I(I(d,B(9)),c);b.mD(Q(d));}a:{b.IR();if(a.tn!==null){e=a.tn.data;f=e.length;g=0;while(true){if(g>=f)break a;h=e[g];b.mD(B(32));b.F9(h);g=g+1|0;}}}if(a.iC!==null&&a.iC!==a){b.mD(B(33));a.iC.vj(b);}}
var Eh=D(D8);
function Bh6(a,b){var c=new Eh();U1(c,a,b);return c;}
function Bh7(a){var b=new Eh();AAm(b,a);return b;}
function Bh8(a){var b=new Eh();ADY(b,a);return b;}
function U1(a,b,c){NT(a,b,c);}
function AAm(a,b){OT(a,b);}
function ADY(a,b){AF2(a,b);}
var Gy=D(Eh);
function Bh9(a){var b=new Gy();Pm(b,a);return b;}
function Pm(a,b){AAm(a,b);}
var K7=D();
var Bh$=null;function Nw(){Nw=M(K7);A5S();}
function WB(b,c){var d;Nw();d=Bh$.I(b);if(d===null){d=Bgb(b,4,c);Bh$.s(b,d);}return d;}
function Il(b){Nw();return WB(b,100);}
function VD(b){Nw();return (Il(b)).ho();}
function Ur(b,c){var d,e,f,g;Nw();if(b===null)G(Bo(B(34)));d=null;e=0;f=b.k;while(e<f){a:{g=b.X(e);if(g!==null){if(d===null){d=Bh$.I(CW(g));if(d===null)break a;}d.hp(g);if(!c)d=null;}}e=e+1|0;}}
function A5S(){Bh$=El();}
var N2=D();
function AF_(){S.call(this);this.DD=0.0;}
function BeT(a){var b=new AF_();A3_(b,a);return b;}
function A3_(a,b){BY(a);a.DD=b;}
function ABU(){var a=this;W.call(a);a.rZ=0;a.p_=0;a.xV=0;}
function BH(a,b){var c=new ABU();AKj(c,a,b);return c;}
function Bbw(a,b,c){var d=new ABU();AUL(d,a,b,c);return d;}
function AKj(a,b,c){Bs(a);a.p_=c;a.rZ=b;}
function AUL(a,b,c,d){Bs(a);a.xV=d;a.p_=c;a.rZ=b;}
function A1e(a){var b;b=BcK(a.rZ);if(a.xV)b.bv.el(0,2048);b.ba=a.p_;return b;}
function Go(){var a=this;S.call(a);a.IC=0.0;a.Ey=0.0;a.wy=0.0;a.EE=0.0;}
function AZh(a,b){var c=new Go();LM(c,a,b);return c;}
function LM(a,b,c){BY(a);a.IC=b;a.Ey=c;a.wy=AWc(b, -c);a.EE=1.0/(1.0-a.wy);}
var Sv=D();
function Jn(){var a=this;C.call(a);a.jv=0;a.i1=null;a.gs=0;a.u1=0;a.eV=0;}
function Bh_(a){var b=new Jn();AC5(b,a);return b;}
function AC5(a,b){L(a);a.eV=1;a.i1=b;a.cV();}
function AGQ(a){a.u1=(-2);a.gs=(-1);if(!a.i1.hL)a.An();else a.jv=1;}
function A1S(a){var b,c,d,e;b=a.i1.d4;c=b.data;d=c.length;while(true){e=a.gs+1|0;a.gs=e;if(e>=d)break;if(B5(c[a.gs],Bd))continue;else{a.jv=1;return;}}a.jv=0;}
var Cz=D(0);
var FH=D(0);
var PN=D(Jn);
function UH(a){var b=new PN();A7c(b,a);return b;}
function A7c(a,b){AC5(a,b);}
function A4h(a){if(a.eV)return a.jv;G(BG(B(35)));}
function A_c(a){var b;if(!a.jv)G(ALb());if(!a.eV)G(BG(B(35)));b=a.gs==(-1)?a.i1.hl:a.i1.dT.data[a.gs];a.u1=a.gs;a.An();return b;}
function ALx(a){AGQ(a);}
function CE(){var a=this;Bz.call(a);a.qB=0;a.jk=0;}
var Bia=null;function J0(){J0=M(CE);A0T();}
function Bfx(a){var b=new CE();EX(b,a);return b;}
function EX(a,b){J0();Cu(a);a.jk=b;}
function AIX(a,b,c,d){var e,f;e=d.la(a.jk);d.rY(a.jk,b);f=a.j.c(b,c,d);if(f<0)d.rY(a.jk,e);return f;}
function A4Y(a){return a.jk;}
function ANc(a){return B(36);}
function AJk(a,b){return 0;}
function A0T(){Bia=Bav();}
var KS=D(CE);
function Bib(a){var b=new KS();AF8(b,a);return b;}
function AF8(a,b){EX(a,b);}
function AJu(a,b,c,d){var e,f;e=a.h7();f=d.dI(e);if(f!=b)b=(-1);return b;}
function A9p(a){return B(37);}
var G0=D(0);
var ADL=D();
function BO(){var a=this;Bz.call(a);a.bJ=null;a.c0=null;a.bf=0;}
function Bic(){var a=new BO();CY(a);return a;}
function Bbo(a,b){var c=new BO();UG(c,a,b);return c;}
function CY(a){Cu(a);}
function UG(a,b,c){Cu(a);a.bJ=b;a.c0=c;a.bf=c.h7();}
function AMJ(a,b,c,d){var e,f,g,h,i;if(a.bJ===null)return (-1);e=d.hm(a.bf);d.dL(a.bf,b);f=a.bJ.cx();g=0;while(true){if(g>=f){d.dL(a.bf,e);return (-1);}h=a.bJ.X(g);i=h.c(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function ARc(a,b){a.c0.L(b);}
function AOf(a){return B(38);}
function A4j(a,b){var c;a:{if(a.bJ!==null){c=a.bJ.vo();while(true){if(!c.dk())break a;if(!(c.da()).b0(b))continue;else return 1;}}}return 0;}
function ARX(a,b){var c,d;a:{if(b.la(a.bf)>=0){c=b.hm(a.bf);d=a.bf;if(c==b.la(d)){c=0;break a;}}c=1;}return c;}
function AJ1(a){var b,c,d,e;a.cm=1;if(a.c0!==null&&!a.c0.cm)a.c0.dx();a:{if(a.bJ!==null){b=a.bJ.cx();c=0;while(true){if(c>=b)break a;d=a.bJ.X(c);e=d.go();if(e===null)e=d;else{d.cm=1;a.bJ.ka(c);a.bJ.Gk(c,e);}if(!e.cm)e.dx();c=c+1|0;}}}if(a.j!==null)Pb(a);}
function Pi(){var a=this;BO.call(a);a.ol=null;a.w6=0;}
function Bc5(a){var b=new Pi();ATT(b,a);return b;}
function ATT(a,b){CY(a);a.ol=b.jS();a.w6=b.bs;}
function A05(a,b){a.j=b;}
function ANq(a,b,c,d){var e,f,g,h,i,j,k;e=d.dA();f=d.D();g=b+1|0;h=Cx(g,f);if(h>0){d.dt=1;return (-1);}i=c.f(b);if(!a.ol.n(i))return (-1);if(Cb(i)){if(h<0){j=c.f(g);if(B2(j))return (-1);}}else if(B2(i)&&b>e){k=c.f(b-1|0);if(Cb(k))return (-1);}return a.j.c(g,c,d);}
function A6R(a){var b,c,d;b=!a.w6?B(39):B(40);c=a.ol.d();d=K();I(I(I(d,B(41)),b),c);return Q(d);}
var AD8=D(Dx);
function Ben(a){var b=new AD8();AUW(b,a);return b;}
function AUW(a,b){Hg(a,b,1.0,1.0);}
function AMQ(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(Cb(l)){if(j>=d){if(h.fn(2)){j=j+(-1)|0;break a;}BD();i=BhG;break a;}m=k[j];if(!B2(m)){i=Cm(1);break a;}j=j+(-1)|0;i=GM(2);break a;}if(B2(l))i=Cm(1);if(l>=128){i=GM(1);j=j+(-1)|0;break a;}k=e.data;n=f+1|0;k[f]=l<<24>>24;c=j;f=n;}j=c;}h.gd(j);h.ft(f);return i;}
var KP=D(0);
var C5=D();
var BhP=null;var Bid=null;var Bie=null;var Bif=null;var Big=null;var Bih=null;var Bii=null;var Bij=null;var Bik=null;var IO=D(0);
var In=D();
function Bil(){var a=new In();RX(a);return a;}
function RX(a){L(a);}
function AW$(a,b){}
var Le=D(0);
function F7(){var a=this;In.call(a);a.kY=null;a.Ib=null;a.pc=0;a.yv=0;a.hI=null;a.pJ=null;}
function Bim(a,b,c,d,e,f){var g=new F7();AEn(g,a,b,c,d,e,f);return g;}
function AEn(a,b,c,d,e,f,g){RX(a);a.kY=b;a.Ib=c;a.pc=d;a.yv=e;a.hI=f;a.pJ=g;}
function AWh(a){return a.kY;}
function ARj(a){return ALr(a.pc,a.yv);}
function AMW(a){return a.hI.dX();}
function AIS(a){var b,c,d,e;b=K();b.h(AFx(a.pC()));if(b.i()>0)b.bi(32);(b.h((a.kY.q()).d())).bi(40);c=a.ss();d=0;while(true){e=c.data;if(d>=e.length)break;if(d>0)b.bi(44);b.h(e[d].q());d=d+1|0;}return (b.bi(41)).d();}
function A8F(a,b){var c,d,e,f,g,h,i;if(a.pc&1)G(Bf_());if(a.pJ===null)G(BbG());c=b.data;d=c.length;if(d!=a.hI.data.length)G(C4());e=0;while(true){if(e>=d){f=b.data;g=new (a.kY.fC);a.pJ.call(g,f);return g;}if(!a.hI.data[e].fF()&&c[e]!==null){h=a.hI.data[e];i=c[e];if(!h.sU(i))G(C4());}if(a.hI.data[e].fF()&&c[e]===null)break;e=e+1|0;}G(C4());}
function Do(){Bz.call(this);this.R=null;}
function GD(a,b,c,d){Jx(a,c);a.R=b;a.w3(d);}
function A_n(a){return a.R;}
function ASy(a,b){return !a.R.b0(b)&&!a.j.b0(b)?0:1;}
function A9O(a,b){return 1;}
function APR(a){var b;a.cm=1;if(a.j!==null&&!a.j.cm){b=a.j.go();if(b!==null){a.j.cm=1;a.j=b;}a.j.dx();}if(a.R!==null){if(!a.R.cm){b=a.R.go();if(b!==null){a.R.cm=1;a.R=b;}a.R.dx();}else if(a.R instanceof F6&&a.R.c0.qB)a.R=a.R.j;}}
var CN=D(Do);
function BdI(a,b,c){var d=new CN();FJ(d,a,b,c);return d;}
function FJ(a,b,c,d){GD(a,b,c,d);}
function AW3(a,b,c,d){var e;if(!a.R.S(d))return a.j.c(b,c,d);e=a.R.c(b,c,d);if(e>=0)return e;return a.j.c(b,c,d);}
function A2O(a){return B(42);}
var AAs=D(CN);
function BeQ(a,b,c){var d=new AAs();A3u(d,a,b,c);return d;}
function A3u(a,b,c,d){FJ(a,b,c,d);J0();b.L(Bia);}
function A5o(a,b,c,d){var e,f;e=a.R.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){f=a.R.c(e,c,d);if(f<=e)break;e=f;}b=e;}return a.j.c(b,c,d);}
var IS=D();
function Bin(){var a=new IS();Xp(a);return a;}
function Xp(a){L(a);}
function IA(){var a=this;IS.call(a);a.h3=null;a.cY=null;a.im=null;}
function ARF(a,b,c){var d=new IA();Nz(d,a,b,c);return d;}
function Nz(a,b,c,d){var e,f;Xp(a);N6();if(d!==Bio&&d!==Bip&&d!==Biq){e=new DK;f=K();I(I(I(f,B(43)),d),B(44));D7(e,Q(f));G(e);}a.h3=b;a.cY=A6H(c);a.im=d;}
function AHK(a){return a.cY;}
function AVr(a){var b;b=a.cY.t1(47);if(b<0)return a.cY;return a.cY.dZ(b+1|0);}
function A$D(a){var b,c;b=a.uy();c=b.t1(46);if(c==(-1))return b;return b.cA(0,c);}
function AXs(a){return a.im;}
function AQB(a){var b,c,d,e;b=a.im;N6();if(b===Biq)return (Yf()).y3(a);c=a.h3.Lb(a.cY);if(c!==null)return c;d=new DK;b=a.cY;e=K();I(I(e,b),B(45));D7(d,Q(e));G(d);}
function AHF(a,b){var c,d,e,f,g;c=new IA;d=a.h3;if(a.cY.bH())e=B(46);else{f=a.cY;g=!a.cY.vb(B(47))?B(47):B(46);e=K();I(I(e,f),g);e=Q(e);}f=K();I(I(f,e),b);Nz(c,d,Q(f),a.im);return c;}
function AHY(a){var b,c;b=a.cY.Dl(B(47));c=B(46);if(b>0)c=a.cY.cA(0,b);return ARF(a.h3,c,a.im);}
function A_q(a){return a.cY;}
function A6H(b){var c;c=b.rK(B(48),B(47));if(c.vb(B(47)))c=c.cA(0,c.i()-1|0);return c;}
function Fk(){var a=this;C.call(a);a.l=null;a.bd=0;}
function Bir(){var a=new Fk();Kx(a);return a;}
function Bf9(a){var b=new Fk();Kl(b,a);return b;}
function Kx(a){Kl(a,16);}
function Kl(a,b){L(a);a.l=B8(b);}
function ABS(a,b){return a.tA(a.bd,b);}
function LN(a,b){return a.i0(a.bd,b);}
function Ou(a,b,c){var d,e,f;if(b>=0&&b<=a.bd){if(c===null)c=B(49);else if(c.bH())return a;a.fr(a.bd+c.i()|0);d=a.bd-1|0;while(d>=b){a.l.data[d+c.i()|0]=a.l.data[d];d=d+(-1)|0;}a.bd=a.bd+c.i()|0;d=0;while(d<c.i()){e=a.l.data;f=b+1|0;e[b]=c.f(d);d=d+1|0;b=f;}return a;}G(KH());}
function Qx(a,b){return a.xb(b,10);}
function AXL(a,b,c){return a.GY(a.bd,b,c);}
function A2T(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(c<0){e=0;c= -c|0;}a:{if(c<d){if(e)B3(a,b,b+1|0);else{B3(a,b,b+2|0);f=a.l.data;g=b+1|0;f[b]=45;b=g;}a.l.data[b]=Gx(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Dg(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;B3(a,b,b+i|0);if(e)l=b;else{f=a.l.data;l=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.l.data;g=l+1|0;f[l]=Gx(c/k|0,d);c=c%k|0;k=k/d|0;l=g;}}}return a;}
function AGm(a,b){return a.zA(a.bd,b);}
function TF(a,b,c){return a.Ic(b,c,10);}
function APP(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(KT(c,Bd)){e=0;c=A5i(c);}a:{f=O(d);if(KT(c,f)){if(e)B3(a,b,b+1|0);else{B3(a,b,b+2|0);g=a.l.data;h=b+1|0;g[b]=45;b=h;}a.l.data[b]=Gx(T(c),d);}else{i=1;j=O(1);while(true){k=Bu(j,f);if(GK(k,j))break;if(RD(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;B3(a,b,b+i|0);if(e)l=b;else{g=a.l.data;l=b+1|0;g[b]=45;}while(true){if(GK(j,Bd))break a;g=a.l.data;h=l+1|0;g[l]=Gx(T(Cy(c,j)),d);c=G$(c,j);j=Cy(j,f);l=h;}}}return a;}
function V3(a,b){return a.yL(a.bd,b);}
function ADe(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=Cx(c,0.0);if(!d){B3(a,b,b+3|0);e=a.l.data;d=b+1|0;e[b]=48;e=a.l.data;f=d+1|0;e[d]=46;a.l.data[f]=48;return a;}if(!d){B3(a,b,b+4|0);e=a.l.data;d=b+1|0;e[b]=45;e=a.l.data;f=d+1|0;e[d]=48;e=a.l.data;d=f+1|0;e[f]=46;a.l.data[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){B3(a,b,b+3|0);e=a.l.data;d=b+1|0;e[b]=78;e=a.l.data;f=d+1|0;e[d]=97;a.l.data[f]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){B3(a,b,b+8|0);d=b;}else{B3(a,b,b+9|0);e=a.l.data;d=b+1|0;e[b]
=45;}e=a.l.data;f=d+1|0;e[d]=73;e=a.l.data;d=f+1|0;e[f]=110;e=a.l.data;f=d+1|0;e[d]=102;e=a.l.data;d=f+1|0;e[f]=105;e=a.l.data;f=d+1|0;e[d]=110;e=a.l.data;d=f+1|0;e[f]=105;e=a.l.data;f=d+1|0;e[d]=116;a.l.data[f]=121;return a;}Rp();g=Bis;ACY(c,g);h=g.oo;i=g.n2;j=g.s5;k=1;l=1;if(j)l=2;m=9;n=ATp(h);if(n>0)m=m-n|0;if(i<7&&i>=(-3)){if(i>=0){k=i+1|0;m=Bt(m,k+1|0);i=0;}else{h=h/Bit.data[ -i|0]|0;m=m-i|0;i=0;}}if(i){l=l+2|0;if(!(i>(-10)&&i<10))l=l+1|0;if(i<0)l=l+1|0;}if(i&&m==k)m=m+1|0;d=l+m|0;B3(a,b,b+d|0);if(!j)f
=b;else{e=a.l.data;f=b+1|0;e[b]=45;}o=100000000;p=0;while(p<m){if(o<=0)q=0;else{q=h/o|0;h=h%o|0;}e=a.l.data;d=f+1|0;e[f]=(48+q|0)&65535;k=k+(-1)|0;if(k)f=d;else{e=a.l.data;f=d+1|0;e[d]=46;}o=o/10|0;p=p+1|0;}if(i){e=a.l.data;d=f+1|0;e[f]=69;if(i>=0)f=d;else{i= -i|0;e=a.l.data;f=d+1|0;e[d]=45;}if(i<10)r=f;else{e=a.l.data;r=f+1|0;e[f]=(48+(i/10|0)|0)&65535;}a.l.data[r]=(48+(i%10|0)|0)&65535;}return a;}
function RY(a,b){return a.wW(a.bd,b);}
function AAk(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=Cx(c,0.0);if(!d){B3(a,b,b+3|0);e=a.l.data;d=b+1|0;e[b]=48;e=a.l.data;f=d+1|0;e[d]=46;a.l.data[f]=48;return a;}if(!d){B3(a,b,b+4|0);e=a.l.data;d=b+1|0;e[b]=45;e=a.l.data;f=d+1|0;e[d]=48;e=a.l.data;d=f+1|0;e[f]=46;a.l.data[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){B3(a,b,b+3|0);e=a.l.data;d=b+1|0;e[b]=78;e=a.l.data;f=d+1|0;e[d]=97;a.l.data[f]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){B3(a,b,b+8|0);d=b;}else{B3(a,b,b+9|0);e=a.l.data;d=b+1|0;e[b]
=45;}e=a.l.data;f=d+1|0;e[d]=73;e=a.l.data;d=f+1|0;e[f]=110;e=a.l.data;f=d+1|0;e[d]=102;e=a.l.data;d=f+1|0;e[f]=105;e=a.l.data;f=d+1|0;e[d]=110;e=a.l.data;d=f+1|0;e[f]=105;e=a.l.data;f=d+1|0;e[d]=116;a.l.data[f]=121;return a;}Rp();g=Biu;Tb(c,g);h=g.oZ;i=g.nL;j=g.sT;k=1;l=1;if(j)l=2;m=18;n=ARv(h);if(n>0)m=m-n|0;if(i<7&&i>=(-3)){if(i>=0){k=i+1|0;m=Bt(m,k+1|0);i=0;}else{h=Cy(h,Biv.data[ -i|0]);m=m-i|0;i=0;}}if(i){l=l+2|0;if(!(i>(-10)&&i<10))l=l+1|0;if(!(i>(-100)&&i<100))l=l+1|0;if(i<0)l=l+1|0;}if(i&&m==k)m=m+1
|0;d=l+m|0;B3(a,b,b+d|0);if(!j)o=b;else{e=a.l.data;o=b+1|0;e[b]=45;}p=Bx(1569325056, 23283064);q=0;while(q<m){if(GK(p,Bd))r=0;else{r=T(Cy(h,p));h=G$(h,p);}e=a.l.data;d=o+1|0;e[o]=(48+r|0)&65535;k=k+(-1)|0;if(k)o=d;else{e=a.l.data;o=d+1|0;e[d]=46;}p=Cy(p,O(10));q=q+1|0;}if(i){e=a.l.data;d=o+1|0;e[o]=69;if(i>=0)f=d;else{i= -i|0;e=a.l.data;f=d+1|0;e[d]=45;}if(i>=100){e=a.l.data;d=f+1|0;e[f]=(48+(i/100|0)|0)&65535;i=i%100|0;e=a.l.data;o=d+1|0;e[d]=(48+(i/10|0)|0)&65535;}else if(i<10)o=f;else{e=a.l.data;o=f+1|0;e[f]
=(48+(i/10|0)|0)&65535;}a.l.data[o]=(48+(i%10|0)|0)&65535;}return a;}
function ATp(b){var c,d,e,f;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;f=e*100|0;if(b%f|0)f=e;else c=c|2;if(!(b%(f*10|0)|0))c=c|1;return c;}
function ARv(b){var c,d,e,f;c=O(1);d=0;e=16;Rp();f=Biw.data.length-1|0;while(f>=0){if(B5(G$(b,Bu(c,Biw.data[f])),Bd)){d=d|e;c=Bu(c,Biw.data[f]);}e=e>>>1;f=f+(-1)|0;}return d;}
function NM(a,b){return a.r8(a.bd,b);}
function OS(a,b,c){B3(a,b,b+1|0);a.l.data[b]=c;return a;}
function RU(a,b,c){return a.i0(b,c===null?B(49):c.d());}
function Vw(a,b){return a.tY(a.bd,b);}
function O5(a,b,c){return a.i0(b,!c?B(50):B(51));}
function MY(a,b){var c;if(a.l.data.length>=b)return;c=a.l.data.length>=1073741823?2147483647:Bt(b,Bt(a.l.data.length*2|0,5));a.l=Qa(a.l,c);}
function N5(a){return GH(a.l,0,a.bd);}
function NC(a){return a.bd;}
function PE(a,b){if(b>=0&&b<a.bd)return a.l.data[b];G(Dl());}
function QF(a,b,c,d){return a.sx(a.bd,b,c,d);}
function ACW(a,b,c,d,e){var f,g;if(d<=e&&e<=c.i()&&d>=0){B3(a,b,(b+e|0)-d|0);while(d<e){f=a.l.data;g=b+1|0;f[b]=c.f(d);d=d+1|0;b=g;}return a;}G(Dl());}
function AG6(a,b){return a.As(b,0,b.i());}
function ON(a,b,c,d){return a.rI(a.bd,b,c,d);}
function MQ(a,b,c,d,e){var f,g,h,i,j;B3(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.l.data;i=b+1|0;j=d+1|0;h[b]=g[d];b=i;d=j;}return a;}
function Oe(a,b){return a.q7(b,0,b.data.length);}
function AES(a,b,c){return a.cA(b,c);}
function ABe(a,b,c,d,e){var f,g,h,i;if(b>c)G(Dh(B(52)));while(b<c){f=d.data;g=e+1|0;h=a.l.data;i=b+1|0;f[e]=h[b];e=g;b=i;}}
function AFM(a,b){a.bd=b;}
function AF1(a,b){var c,d,e;if(b>=0&&b<a.bd){a.bd=a.bd-1|0;while(b<a.bd){c=a.l.data;d=a.l.data;e=b+1|0;c[b]=d[e];b=e;}return a;}G(KH());}
function AGl(a,b,c){var d,e,f,g,h,i;d=Cx(b,c);if(d<=0&&b<=a.bd){if(!d)return a;e=a.bd-c|0;a.bd=a.bd-(c-b|0)|0;f=0;while(f<e){g=a.l.data;d=b+1|0;h=a.l.data;i=c+1|0;g[b]=h[c];f=f+1|0;b=d;c=i;}return a;}G(KH());}
function B3(a,b,c){var d,e;d=a.bd-b|0;a.fr((a.bd+c|0)-b|0);e=d-1|0;while(e>=0){a.l.data[c+e|0]=a.l.data[b+e|0];e=e+(-1)|0;}a.bd=a.bd+(c-b|0)|0;}
function ZT(a,b,c){if(b<=c&&b>=0&&c<=a.bd)return GH(a.l,b,c-b|0);G(Dl());}
var F2=D(0);
var Qy=D(Fk);
function A7t(){var a=new Qy();A2k(a);return a;}
function A2k(a){Kx(a);}
function AKS(a,b){LN(a,b);return a;}
function ATk(a,b){NM(a,b);return a;}
function AVj(a,b,c,d){ON(a,b,c,d);return a;}
function ALs(a,b){Oe(a,b);return a;}
function AXR(a,b,c,d){QF(a,b,c,d);return a;}
function A9w(a,b){AG6(a,b);return a;}
function A4O(a,b,c,d,e){ACW(a,b,c,d,e);return a;}
function A48(a,b,c,d,e){MQ(a,b,c,d,e);return a;}
function A95(a,b,c){OS(a,b,c);return a;}
function A75(a,b,c){Ou(a,b,c);return a;}
function AL7(a,b,c,d,e){return a.JK(b,c,d,e);}
function AYv(a,b,c,d){return a.Gw(b,c,d);}
function A1D(a,b,c,d,e){return a.DS(b,c,d,e);}
function A7E(a,b,c,d){return a.II(b,c,d);}
function AWH(a,b){return PE(a,b);}
function A_i(a){return NC(a);}
function AYH(a){return N5(a);}
function AYV(a,b){MY(a,b);}
function A8Y(a,b,c){return a.LE(b,c);}
function AWV(a,b,c){return a.CY(b,c);}
var Ny=D();
var Bix=null;function Biy(){Biy=M(Ny);AVx();}
function AVx(){Bix=Z();}
function C1(){var a=this;C.call(a);a.fZ=0;a.y=0;a.T=0;a.eC=0;}
function Gm(a,b){L(a);a.eC=(-1);a.fZ=b;a.T=b;}
function ED(a){return a.fZ;}
function Cd(a){return a.y;}
function Hj(a,b){var c,d,e;if(b>=0&&b<=a.T){a.y=b;if(b<a.eC)a.eC=0;return a;}c=new Cp;d=a.T;e=K();Bi(V(I(V(I(e,B(53)),b),B(54)),d),93);Ew(c,Q(e));G(c);}
function BE(a){return a.T;}
function Jj(a,b){var c,d,e;if(b>=0&&b<=a.fZ){if(a.eC>b)a.eC=(-1);a.T=b;if(a.y>a.T)a.y=a.T;return a;}c=new Cp;d=a.fZ;e=K();Bi(V(I(V(I(e,B(55)),b),B(54)),d),93);Ew(c,Q(e));G(c);}
function GF(a){a.y=0;a.T=a.fZ;a.eC=(-1);return a;}
function Gw(a){a.T=a.y;a.y=0;a.eC=(-1);return a;}
function Be(a){return a.T-a.y|0;}
function Cq(a){return a.y>=a.T?0:1;}
var WU=D();
var Ik=D(Ci);
var FF=D();
function MI(a){L(a);}
function U(){var a=this;FF.call(a);a.bs=0;a.bU=0;a.bv=null;a.j_=null;a.kA=null;a.ba=0;}
var Biz=null;function KC(){KC=M(U);AKB();}
function Bg(a){KC();MI(a);a.bv=Bfo(2048);}
function AYr(a){return null;}
function AXM(a){return a.bv;}
function A4V(a){return !a.bU?(a.bv.i4(0)>=2048?0:1):a.bv.K6(0)>=2048?0:1;}
function A2b(a){return a.ba;}
function A8T(a){return a;}
function AIQ(a){var b;if(a.kA===null){b=a.b$();a.kA=BcV(a,b);a.kA.eX(a.bU);}return a.kA;}
function AYA(a){var b;if(a.j_===null){b=a.b$();a.j_=Bbt(a,b,a);a.j_.eX(a.hE());a.j_.ba=a.ba;}return a.j_;}
function A$G(a){return 0;}
function ATX(a,b){if(a.bs^b){a.bs=a.bs?0:1;a.bU=a.bU?0:1;}if(!a.ba)a.ba=1;return a;}
function AL4(a){return a.bs;}
function Jg(b,c){KC();return b.n(c);}
function Hq(b,c){KC();if(b.bF()!==null&&c.bF()!==null)return (b.bF()).Hq(c.bF());return 1;}
function Ll(b,c){KC();return (AGi(Biz,b)).CO(c);}
function AKB(){Biz=Bbc();}
function ACB(){U.call(this);this.Bn=null;}
function BbF(a){var b=new ACB();A3s(b,a);return b;}
function A3s(a,b){a.Bn=b;Bg(a);}
function AU6(a,b){return AA4(b);}
var Dp=D();
var Fo=D(Dp);
var CI=D(Fo);
var BiA=null;function BiB(){BiB=M(CI);AXU();}
function AXU(){BiA=X();}
var G5=D();
var BiC=null;var BiD=null;var BiE=null;function ASj(){ASj=M(G5);ALd();}
function Bbc(){var a=new G5();Wp(a);return a;}
function Wp(a){ASj();L(a);}
function AGi(a,b){var c,d,e;c=0;while(true){ASj();if(c>=BiE.data.length)G(BbJ(B(46),B(46),b));d=BiE.data[c];e=d.data;if(b.K(e[0]))break;c=c+1|0;}return e[1];}
function ALd(){BiC=Bco();BiD=Bev();BiE=H($rt_arraycls(C),[H(C,[B(56),BcO()]),H(C,[B(57),A_2()]),H(C,[B(58),BfJ()]),H(C,[B(59),Bf2()]),H(C,[B(60),BiD]),H(C,[B(61),BeI()]),H(C,[B(62),Bbi()]),H(C,[B(63),Bds()]),H(C,[B(64),Bdi()]),H(C,[B(65),Bah()]),H(C,[B(66),BaO()]),H(C,[B(67),Bdv()]),H(C,[B(68),Bb0()]),H(C,[B(69),A_Y()]),H(C,[B(70),BfT()]),H(C,[B(71),BaJ()]),H(C,[B(72),BeG()]),H(C,[B(73),BdU()]),H(C,[B(74),BeH()]),H(C,[B(75),Bam()]),H(C,[B(76),Bf8()]),H(C,[B(77),BdN()]),H(C,[B(78),BbH()]),H(C,[B(79),BfH()]),
H(C,[B(80),BfE()]),H(C,[B(81),Bcz()]),H(C,[B(82),Bak()]),H(C,[B(83),Bfq()]),H(C,[B(84),BiC]),H(C,[B(85),BbQ()]),H(C,[B(86),Bdt()]),H(C,[B(87),BiC]),H(C,[B(88),A_V()]),H(C,[B(89),BiD]),H(C,[B(90),BaZ()]),H(C,[B(91),P(0,127)]),H(C,[B(92),P(128,255)]),H(C,[B(93),P(256,383)]),H(C,[B(94),P(384,591)]),H(C,[B(95),P(592,687)]),H(C,[B(96),P(688,767)]),H(C,[B(97),P(768,879)]),H(C,[B(98),P(880,1023)]),H(C,[B(99),P(1024,1279)]),H(C,[B(100),P(1280,1327)]),H(C,[B(101),P(1328,1423)]),H(C,[B(102),P(1424,1535)]),H(C,[B(103),
P(1536,1791)]),H(C,[B(104),P(1792,1871)]),H(C,[B(105),P(1872,1919)]),H(C,[B(106),P(1920,1983)]),H(C,[B(107),P(2304,2431)]),H(C,[B(108),P(2432,2559)]),H(C,[B(109),P(2560,2687)]),H(C,[B(110),P(2688,2815)]),H(C,[B(111),P(2816,2943)]),H(C,[B(112),P(2944,3071)]),H(C,[B(113),P(3072,3199)]),H(C,[B(114),P(3200,3327)]),H(C,[B(115),P(3328,3455)]),H(C,[B(116),P(3456,3583)]),H(C,[B(117),P(3584,3711)]),H(C,[B(118),P(3712,3839)]),H(C,[B(119),P(3840,4095)]),H(C,[B(120),P(4096,4255)]),H(C,[B(121),P(4256,4351)]),H(C,[B(122),
P(4352,4607)]),H(C,[B(123),P(4608,4991)]),H(C,[B(124),P(4992,5023)]),H(C,[B(125),P(5024,5119)]),H(C,[B(126),P(5120,5759)]),H(C,[B(127),P(5760,5791)]),H(C,[B(128),P(5792,5887)]),H(C,[B(129),P(5888,5919)]),H(C,[B(130),P(5920,5951)]),H(C,[B(131),P(5952,5983)]),H(C,[B(132),P(5984,6015)]),H(C,[B(133),P(6016,6143)]),H(C,[B(134),P(6144,6319)]),H(C,[B(135),P(6400,6479)]),H(C,[B(136),P(6480,6527)]),H(C,[B(137),P(6528,6623)]),H(C,[B(138),P(6624,6655)]),H(C,[B(139),P(6656,6687)]),H(C,[B(140),P(7424,7551)]),H(C,[B(141),
P(7552,7615)]),H(C,[B(142),P(7616,7679)]),H(C,[B(143),P(7680,7935)]),H(C,[B(144),P(7936,8191)]),H(C,[B(145),P(8192,8303)]),H(C,[B(146),P(8304,8351)]),H(C,[B(147),P(8352,8399)]),H(C,[B(148),P(8400,8447)]),H(C,[B(149),P(8448,8527)]),H(C,[B(150),P(8528,8591)]),H(C,[B(151),P(8592,8703)]),H(C,[B(152),P(8704,8959)]),H(C,[B(153),P(8960,9215)]),H(C,[B(154),P(9216,9279)]),H(C,[B(155),P(9280,9311)]),H(C,[B(156),P(9312,9471)]),H(C,[B(157),P(9472,9599)]),H(C,[B(158),P(9600,9631)]),H(C,[B(159),P(9632,9727)]),H(C,[B(160),
P(9728,9983)]),H(C,[B(161),P(9984,10175)]),H(C,[B(162),P(10176,10223)]),H(C,[B(163),P(10224,10239)]),H(C,[B(164),P(10240,10495)]),H(C,[B(165),P(10496,10623)]),H(C,[B(166),P(10624,10751)]),H(C,[B(167),P(10752,11007)]),H(C,[B(168),P(11008,11263)]),H(C,[B(169),P(11264,11359)]),H(C,[B(170),P(11392,11519)]),H(C,[B(171),P(11520,11567)]),H(C,[B(172),P(11568,11647)]),H(C,[B(173),P(11648,11743)]),H(C,[B(174),P(11776,11903)]),H(C,[B(175),P(11904,12031)]),H(C,[B(176),P(12032,12255)]),H(C,[B(177),P(12272,12287)]),H(C,[B(178),
P(12288,12351)]),H(C,[B(179),P(12352,12447)]),H(C,[B(180),P(12448,12543)]),H(C,[B(181),P(12544,12591)]),H(C,[B(182),P(12592,12687)]),H(C,[B(183),P(12688,12703)]),H(C,[B(184),P(12704,12735)]),H(C,[B(185),P(12736,12783)]),H(C,[B(186),P(12784,12799)]),H(C,[B(187),P(12800,13055)]),H(C,[B(188),P(13056,13311)]),H(C,[B(189),P(13312,19893)]),H(C,[B(190),P(19904,19967)]),H(C,[B(191),P(19968,40959)]),H(C,[B(192),P(40960,42127)]),H(C,[B(193),P(42128,42191)]),H(C,[B(194),P(42752,42783)]),H(C,[B(195),P(43008,43055)]),H(C,
[B(196),P(44032,55203)]),H(C,[B(197),P(55296,56191)]),H(C,[B(198),P(56192,56319)]),H(C,[B(199),P(56320,57343)]),H(C,[B(200),P(57344,63743)]),H(C,[B(201),P(63744,64255)]),H(C,[B(202),P(64256,64335)]),H(C,[B(203),P(64336,65023)]),H(C,[B(204),P(65024,65039)]),H(C,[B(205),P(65040,65055)]),H(C,[B(206),P(65056,65071)]),H(C,[B(207),P(65072,65103)]),H(C,[B(208),P(65104,65135)]),H(C,[B(209),P(65136,65279)]),H(C,[B(210),P(65280,65519)]),H(C,[B(211),P(0,1114111)]),H(C,[B(212),Bdx()]),H(C,[B(213),BH(0,1)]),H(C,[B(214),
HB(62,1)]),H(C,[B(215),BH(1,1)]),H(C,[B(216),BH(2,1)]),H(C,[B(217),BH(3,0)]),H(C,[B(218),BH(4,0)]),H(C,[B(219),BH(5,1)]),H(C,[B(220),HB(448,1)]),H(C,[B(221),BH(6,1)]),H(C,[B(222),BH(7,0)]),H(C,[B(223),BH(8,1)]),H(C,[B(224),HB(3584,1)]),H(C,[B(225),BH(9,1)]),H(C,[B(226),BH(10,1)]),H(C,[B(227),BH(11,1)]),H(C,[B(228),HB(28672,0)]),H(C,[B(229),BH(12,0)]),H(C,[B(230),BH(13,0)]),H(C,[B(231),BH(14,0)]),H(C,[B(232),Bep(983040,1,1)]),H(C,[B(233),BH(15,0)]),H(C,[B(234),BH(16,1)]),H(C,[B(235),BH(18,1)]),H(C,[B(236),Bbw(19,
0,1)]),H(C,[B(237),HB(1643118592,1)]),H(C,[B(238),BH(20,0)]),H(C,[B(239),BH(21,0)]),H(C,[B(240),BH(22,0)]),H(C,[B(241),BH(23,0)]),H(C,[B(242),BH(24,1)]),H(C,[B(243),HB(2113929216,1)]),H(C,[B(244),BH(25,1)]),H(C,[B(245),BH(26,0)]),H(C,[B(246),BH(27,0)]),H(C,[B(247),BH(28,1)]),H(C,[B(248),BH(29,0)]),H(C,[B(249),BH(30,0)])]);}
var N7=D(0);
function Ks(){var a=this;C.call(a);a.iK=null;a.iO=null;a.uj=null;a.zl=null;}
var BiF=null;function BcU(){BcU=M(Ks);A8d();}
function Bbz(){var a=new Ks();RB(a);return a;}
function RB(a){BcU();L(a);a.iK=X();a.iO=X();a.uj=X();a.zl=X();a.Gi();}
function A6r(a,b,c){a.iK.cF(b.F>=c.F?c.F:b.F,b.G>=c.G?c.G:b.G,b.M>=c.M?c.M:b.M);a.iO.cF(b.F<=c.F?c.F:b.F,b.G<=c.G?c.G:b.G,b.M<=c.M?c.M:b.M);a.gY();return a;}
function ARP(a){((a.uj.ds(a.iK)).ym(a.iO)).zn(0.5);(a.zl.ds(a.iO)).pW(a.iK);}
function ATa(a){return a.J5(a.iK.cF(0.0,0.0,0.0),a.iO.cF(0.0,0.0,0.0));}
function A8d(){BiF=X();}
var Dq=D(B$);
var BiG=null;var BiH=null;var BiI=null;var BiJ=null;function BiK(){BiK=M(Dq);A31();}
function A31(){BiG=X();BiH=X();BiI=X();BiJ=IV();}
var Dm=D(Dq);
var AAS=D(Dm);
var I$=D(W);
function Bev(){var a=new I$();Wk(a);return a;}
function Wk(a){Bs(a);}
function ACE(a){return (C0()).bu(48,57);}
var TO=D(W);
function BbH(){var a=new TO();AJV(a);return a;}
function AJV(a){Bs(a);}
function A1G(a){var b;b=BaE(a);b.ba=1;return b;}
var BP=D();
var BiL=null;var BiM=null;var BiN=null;var BiO=null;var BiP=null;var BiQ=null;var BiR=null;var BiS=null;var BiT=null;var BiU=null;var BiV=null;var BiW=null;var BiX=null;var BiY=null;var BiZ=null;var Bi0=null;var Bi1=null;var Bi2=null;var Bi3=null;var Bi4=null;var Bi5=null;var Bi6=null;var Bi7=null;var Bi8=null;function Bi9(){Bi9=M(BP);AKz();}
function AKz(){BiL=X();BiM=X();BiN=X();BiO=UE();BiP=UE();BiQ=Z();BiR=Z();BiS=Z();BiT=Z();BiU=Z();BiV=Z();BiW=Z();BiX=Z();BiY=Z();BiZ=AR6(X(),0.0);Bi0=X();Bi1=X();Bi2=X();Bi3=X();Bi4=X();Bi5=X();Bi6=X();Bi7=X();Bi8=X();}
var CH=D();
var AAy=D(CH);
var Vn=D(S);
function Bdj(){var a=new Vn();APa(a);return a;}
function APa(a){BY(a);}
var AA$=D();
function CV(){return ARY();}
var Vf=D(S);
function A_W(){var a=new Vf();A3t(a);return a;}
function A3t(a){BY(a);}
var DC=D(Eu);
var RR=D(DC);
var Fy=D(0);
var CD=D();
var ABZ=D(CD);
var Vg=D(S);
function Bcn(){var a=new Vg();A8u(a);return a;}
function A8u(a){BY(a);}
var AGS=D(CE);
function Bc7(){var a=new AGS();AWk(a);return a;}
function AWk(a){EX(a,(-1));}
function AZz(a,b,c,d){return b;}
function A3g(a){return B(250);}
function Ft(){S.call(this);this.Gl=0;}
function J8(a){var b=new Ft();LB(b,a);return b;}
function LB(a,b){BY(a);a.Gl=b;}
var Vj=D(S);
function BaK(){var a=new Vj();A3O(a);return a;}
function A3O(a){BY(a);}
var Ve=D(S);
function Ber(){var a=new Ve();A8b(a);return a;}
function A8b(a){BY(a);}
var H$=D(CH);
var AAq=D(H$);
var Vh=D(S);
function Baq(){var a=new Vh();A_H(a);return a;}
function A_H(a){BY(a);}
var Vk=D(S);
function Bgn(){var a=new Vk();AHP(a);return a;}
function AHP(a){BY(a);}
var Vi=D(S);
function Bey(){var a=new Vi();AJz(a);return a;}
function AJz(a){BY(a);}
var Vl=D(S);
function Bfu(){var a=new Vl();AWQ(a);return a;}
function AWQ(a){BY(a);}
var JZ=D(BO);
function BcI(a,b){var c=new JZ();YS(c,a,b);return c;}
function YS(a,b,c){UG(a,b,c);}
function AQ1(a,b,c,d){var e,f,g,h,i;e=d.dI(a.bf);d.bo(a.bf,b);f=a.bJ.cx();g=0;while(true){if(g>=f){d.bo(a.bf,e);return (-1);}h=a.bJ.X(g);i=h.c(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function APi(a){return B(251);}
function A7F(a,b){var c;c=b.dI(a.bf);return !c?0:1;}
var DE=D(JZ);
function Bdm(a,b){var c=new DE();GQ(c,a,b);return c;}
function GQ(a,b,c){YS(a,b,c);}
function A0a(a,b,c,d){var e,f,g,h,i;e=d.dI(a.bf);d.bo(a.bf,b);f=a.bJ.cx();g=0;while(g<f){h=a.bJ.X(g);i=h.c(b,c,d);if(i>=0)return a.j.c(a.c0.dc(),c,d);g=g+1|0;}d.bo(a.bf,e);return (-1);}
function A7k(a,b){a.j=b;}
function AIg(a){return B(251);}
var Yn=D(DE);
function BdS(a,b){var c=new Yn();AMA(c,a,b);return c;}
function AMA(a,b,c){GQ(a,b,c);}
function AQ9(a,b,c,d){var e,f,g,h;e=a.bJ.cx();f=0;while(f<e){g=a.bJ.X(f);h=g.c(b,c,d);if(h>=0)return a.j.c(b,c,d);f=f+1|0;}return (-1);}
function AT5(a,b){return 0;}
function A$I(a){return B(252);}
var AFy=D(DE);
function Bc0(a,b){var c=new AFy();AL0(c,a,b);return c;}
function AL0(a,b,c){GQ(a,b,c);}
function AJd(a,b,c,d){var e,f,g;e=a.bJ.cx();f=0;while(true){if(f>=e)return a.j.c(b,c,d);g=a.bJ.X(f);if(g.c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A88(a,b){return 0;}
function AMz(a){return B(253);}
var Bl=D();
var Bi$=null;var Bi_=null;var Bja=null;var Bjb=null;var Bjc=null;var Bjd=null;var Bje=null;function A_0(){A_0=M(Bl);AYa();}
function CL(a){A_0();L(a);}
function AYa(){Bi$=BeO(0.0);Bi_=Bf1();Bja=Bei();Bjb=A__();Bjc=BcW();Bjd=A_8();Bje=Bdz();}
var AGZ=D(Bl);
var Ea=D(Dm);
var AAV=D(Ea);
var Ce=D(D8);
function Bjf(){var a=new Ce();GZ(a);return a;}
function Bjg(a,b){var c=new Ce();Kn(c,a,b);return c;}
function Bjh(a){var b=new Ce();Yq(b,a);return b;}
function GZ(a){Sw(a);}
function Kn(a,b,c){NT(a,b,c);}
function Yq(a,b){OT(a,b);}
var Bk=D(Ce);
function Bji(){var a=new Bk();Cv(a);return a;}
function Bjj(a,b){var c=new Bk();Q1(c,a,b);return c;}
function BaB(a){var b=new Bk();Et(b,a);return b;}
function Cv(a){GZ(a);}
function Q1(a,b,c){Kn(a,b,c);}
function Et(a,b){Yq(a,b);}
var HY=D(Bk);
function BfW(){var a=new HY();TZ(a);return a;}
function TZ(a){Cv(a);}
var AG3=D(HY);
function Dj(){var a=new AG3();A3e(a);return a;}
function A3e(a){TZ(a);}
var L6=D(0);
function ACJ(){C.call(this);this.hx=null;}
function Bet(a){var b=new ACJ();AUU(b,a);return b;}
function AUU(a,b){a.hx=b;L(a);}
function AU2(a){a.hx.mm=1;AGX($rt_ustr(a.hx.oY));}
function A1t(a){a.hx.mm=0;}
function A1f(a){a.hx.mm=1;AGX($rt_ustr(a.hx.oY));}
function AW4(a){a.D2();}
function AKv(a){a.Hm();}
function AWR(a){a.I8();}
var EM=D(0);
var Bp=D();
var Bjk=null;function Bjl(){Bjl=M(Bp);A$o();}
function A$o(){Bjk=Z();}
var CM=D(Bp);
var Bjm=0.0;function Bjn(){Bjn=M(CM);A9k();}
function A9k(){Bjm=0.10000000149011612;}
var IQ=D(CM);
var ADa=D();
function AEh(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(C4());}return b.data.length;}
function LY(b,c){if(b===null)G(I4());if(b===F($rt_voidcls()))G(C4());if(c<0)G(A98());return AUD(b.wo(),c);}
function AUD(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Jf=D(Dp);
var Ls=D(0);
function VH(){C.call(this);this.pK=null;}
function Baw(a){var b=new VH();ASe(b,a);return b;}
function ASe(a,b){L(a);a.pK=b;}
function A56(a,b,c){return ARF(a.pK,b,c);}
function AHm(a,b){var c,d;c=new IA;d=a.pK;N6();Nz(c,d,b,Bio);return c;}
var Ct=D(Eq);
var YY=D(Ct);
var Gp=D(Gy);
function Bjo(a){var b=new Gp();K8(b,a);return b;}
function K8(a,b){Pm(a,b);}
var ADB=D(Gp);
function Bjp(a){var b=new ADB();AJL(b,a);return b;}
function AJL(a,b){K8(a,b);}
var Hn=D(0);
var Qg=D(W);
function BdU(){var a=new Qg();AJM(a);return a;}
function AJM(a){Bs(a);}
function AK_(a){var b;b=BeZ(a);b.ba=1;return b;}
var ACn=D(IQ);
var PV=D(Bp);
var PU=D(Bp);
var Oh=D(Ci);
var Bjq=null;function Bjr(){Bjr=M(Oh);A4g();}
function A4g(){Bjq=Z();}
var ZW=D();
function A37(b){var c,d,e,f,g;if(b===null)return null;c=b.data;d=c.length;e=new $rt_globals.Array(d);f=0;while(f<d){g=c[f];e[f]=g;f=f+1|0;}return e;}
function B4(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Fz(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function Z$(){var a=this;C.call(a);a.dC=0;a.d4=null;a.dT=null;a.hl=null;a.hL=0;a.yi=0.0;a.sg=0;a.nl=0;a.fS=0;a.fI=null;a.iE=null;}
function Se(a){var b=new Z$();AWW(b,a);return b;}
function Bjs(a,b){var c=new Z$();ADd(c,a,b);return c;}
function AWW(a,b){ADd(a,b,0.800000011920929);}
function ADd(a,b,c){var d;L(a);if(c>0.0&&c<1.0){a.yi=c;d=Hx(b,c);a.sg=d*c|0;a.fS=d-1|0;a.nl=C6(O(a.fS));a.d4=AF$(d);a.dT=Bc(C,d);return;}G(Bo((((K()).h(B(254))).dM(c)).d()));}
function A2L(a,b){return T(BT(Bu(L_(b,BT(b,32)),Bx(2135587861, 2654435769)),a.nl));}
function IW(a,b){var c,d,e;c=a.d4;d=a.pa(b);while(true){e=c.data[d];if(B5(e,Bd))return  -(d+1|0)|0;if(B5(e,b))break;d=(d+1|0)&a.fS;}return d;}
function AZ1(a,b,c){var d,e,f;if(B5(b,Bd)){d=a.hl;a.hl=c;if(!a.hL){a.hL=1;a.dC=a.dC+1|0;}return d;}e=IW(a,b);if(e>=0){d=a.dT.data[e];a.dT.data[e]=c;return d;}f= -(e+1|0)|0;a.d4.data[f]=b;a.dT.data[f]=c;f=a.dC+1|0;a.dC=f;if(f>=a.sg)P5(a,a.d4.data.length<<1);return null;}
function AAu(a,b,c){var d,e,f;d=a.d4;e=a.pa(b);while(true){f=d.data;if(B5(f[e],Bd))break;e=(e+1|0)&a.fS;}f[e]=b;a.dT.data[e]=c;}
function A$n(a,b){var c;if(B5(b,Bd))return !a.hL?null:a.hl;c=IW(a,b);return c<0?null:a.dT.data[c];}
function A0t(a,b){var c,d,e,f,g,h,i,j,k,l;if(B5(b,Bd)){if(!a.hL)return null;a.hL=0;c=a.hl;a.hl=null;a.dC=a.dC-1|0;return c;}d=IW(a,b);if(d<0)return null;e=a.d4;f=a.dT;g=f.data;c=g[d];h=a.fS;i=(d+1|0)&h;while(true){j=e.data;k=j[i];if(B5(k,Bd))break;l=a.pa(k);if(((i-l|0)&h)>((d-l|0)&h)){j[d]=k;g[d]=g[i];d=i;}i=(i+1|0)&h;}j[d]=Bd;g[d]=null;a.dC=a.dC-1|0;return c;}
function P5(a,b){var c,d,e,f,g;a:{c=a.d4.data.length;a.sg=b*a.yi|0;a.fS=b-1|0;a.nl=C6(O(a.fS));d=a.d4;e=a.dT;a.d4=AF$(b);a.dT=Bc(C,b);if(a.dC>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(KW(g,Bd))AAu(a,g,e.data[f]);f=f+1|0;}}}}
function AJ7(a){if(Bjt)return UH(a);if(a.fI===null){a.fI=UH(a);a.iE=UH(a);}if(a.fI.eV){a.iE.cV();a.iE.eV=1;a.fI.eV=0;return a.iE;}a.fI.cV();a.fI.eV=1;a.iE.eV=0;return a.fI;}
function Ps(){U.call(this);this.LM=null;}
function BeA(a){var b=new Ps();A7J(b,a);return b;}
function A7J(a,b){a.LM=b;Bg(a);}
function AKI(a,b){return Xb(b);}
function C9(){var a=this;C.call(a);a.wZ=null;a.Ih=null;}
function Hf(a,b,c){var d,e,f,g;d=c.data;L(a);L3(b);e=d.length;f=0;while(f<e){g=d[f];L3(g);f=f+1|0;}a.wZ=b;a.Ih=c.dX();}
function L3(b){var c,d;if(b.bH())G(AA7(b));if(!AEF(b.f(0)))G(AA7(b));c=1;while(c<b.i()){a:{d=b.f(c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AEF(d))break a;else G(AA7(b));}}c=c+1|0;}}
function AEF(b){var c;a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}c=1;break a;}c=0;}return c;}
function AH3(b){var c;if(b===null)G(Bo(B(255)));L3(b);Bex();c=Bju.I(b.Bj());if(c!==null)return c;G(Bf5(b));}
function ADt(a){return a.wZ;}
function Xk(a,b){var c,d,e,$$je;a:{try{c=a.j5();DQ();d=BhD;d=Lq(c,d);c=BhD;d=Mm(d,c);d=AAA(d,b);}catch($$e){$$je=Bn($$e);if($$je instanceof EQ){e=$$je;break a;}else{throw $$e;}}return d;}G(Bd2(B(256),e));}
function TG(){var a=this;C9.call(a);a.zK=0;a.w8=0;}
function Ts(a,b,c){var d=new TG();AI8(d,a,b,c);return d;}
function AI8(a,b,c,d){Hf(a,b,Bc(BL,0));a.zK=c;a.w8=d;}
function AH$(a){return Bc8(a,a.zK,a.w8);}
var PW=D(Cr);
var HE=D();
var MV=D(HE);
var Ef=D(B$);
var QT=D();
function A$P(b){var c,d,e,f,g,h,i,j,k;c=ASw(b.k8());d=I5(c);e=Bf(d*2|0);f=0;g=0;h=0;i=0;while(i<d){j=e.data;g=g+Kh(c)|0;h=h+Kh(c)|0;k=f+1|0;j[f]=g;f=k+1|0;j[k]=h;i=i+1|0;}return e;}
function SH(b){var c,d,e,f,g,h,i;c=ASw(b.k8());d=I5(c);e=Bf(d*2|0);f=0;g=0;while(g<d){h=e.data;f=f+I5(c)|0;i=g*2|0;h[i]=f;h[i+1|0]=Kh(c);g=g+1|0;}return e;}
function Jw(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function AV9(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=Bc(MU,16384);d=Cw(16384);e=0;f=0;g=0;h=0;while(h<b.i()){i=Jw(b.f(h));if(i==64){h=h+1|0;i=Jw(b.f(h));j=0;k=1;l=0;while(l<3){h=h+1|0;m=Jw(b.f(h));j=j|Dg(k,m);k=k*64|0;l=l+1|0;}}else if(i<32)j=1;else{i=(i-32|0)<<24>>24;h=h+1|0;j=Jw(b.f(h));}if(!i&&j>=128){if(e>0){n=c.data;o=f+1|0;n[f]=AL8(g,g+e|0,OI(d,e));f=o;}g=g+(e+j|0)|0;e=0;}else{p=d.data;o=e+j|0;if(o<p.length)q=f;else{n=c.data;q=f+1|0;n[f]=AL8(g,g+e|0,OI(d,e));g=g+o|0;e=0;}while(true){o=j+(-1)|0;if(j<=
0)break;r=e+1|0;p[e]=i;e=r;j=o;}f=q;}h=h+1|0;}return Jt(c,f);}
var HN=D(0);
function T_(){var a=this;C.call(a);a.tw=null;a.tx=null;a.tt=0;a.tu=null;}
function BcG(a,b,c,d){var e=new T_();A1n(e,a,b,c,d);return e;}
function A1n(a,b,c,d,e){L(a);a.tw=b;a.tx=c;a.tt=d;a.tu=e;}
function ANI(a){AP2(a.tw,a.tx,a.tt,a.tu);}
var V5=D(Bp);
var H9=D();
var V4=D(H9);
var JL=D();
var V7=D(JL);
var Io=D(Jy);
function BeI(){var a=new Io();Ta(a);return a;}
function Ta(a){Rf(a);}
function Sc(a){return (Q7(a)).bu(48,57);}
var J4=D(Io);
function Bds(){var a=new J4();Vo(a);return a;}
function Vo(a){Ta(a);}
function Yb(a){return (((Sc(a)).bu(33,64)).bu(91,96)).bu(123,126);}
var AB6=D(J4);
function Bdi(){var a=new AB6();ATg(a);return a;}
function ATg(a){Vo(a);}
function APS(a){return (Yb(a)).cn(32);}
var AEH=D(W);
function BfE(){var a=new AEH();A5N(a);return a;}
function A5N(a){Bs(a);}
function ATW(a){return BcA(a);}
var V6=D(Bp);
var ABM=D(DE);
function Baz(a,b){var c=new ABM();ATq(c,a,b);return c;}
function ATq(a,b,c){GQ(a,b,c);}
function AJX(a,b,c,d){var e,f,g,h,i;e=a.bJ.cx();f=!d.jr()?d.dA():0;a:{g=a.j.c(b,c,d);if(g>=0){d.bo(a.bf,b);h=0;while(true){if(h>=e)break a;i=a.bJ.X(h);if(i.cp(f,b,c,d)>=0){d.bo(a.bf,(-1));return g;}h=h+1|0;}}}return (-1);}
function A_K(a,b){return 0;}
function AQL(a){return B(257);}
function NR(){var a=this;C.call(a);a.cw=null;a.bY=0;}
var Bjv=null;function Dd(){Dd=M(NR);A5D();}
function AVa(a){var b=new NR();AAi(b,a);return b;}
function Zk(b,c){var d;Dd();d=b>=0?1:2;while(true){b=b/c|0;if(!b)break;d=d+1|0;}return d;}
function AAi(a,b){Dd();L(a);if(b>=0){a.cw=B8(b);return;}G(A98());}
function I8(a,b){var c,d;c=((a.cw.data.length>>1)+a.cw.data.length|0)+2|0;if(b>c)c=b;d=B8(c);BZ(a.cw,0,d,0,a.bY);a.cw=d;}
function OA(a){var b,c,d,e;b=a.bY+4|0;if(b>a.cw.data.length)I8(a,b);c=a.cw.data;d=a.bY;a.bY=d+1|0;c[d]=110;c=a.cw.data;e=a.bY;a.bY=e+1|0;c[e]=117;c=a.cw.data;e=a.bY;a.bY=e+1|0;c[e]=108;c=a.cw.data;e=a.bY;a.bY=e+1|0;c[e]=108;}
function CS(a,b){var c,d;if(a.bY==a.cw.data.length)I8(a,a.bY+1|0);c=a.cw.data;d=a.bY;a.bY=d+1|0;c[d]=b;}
function I3(a,b){var c,d;if(b===null){OA(a);return;}c=b.i();d=a.bY+c|0;if(d>a.cw.data.length)I8(a,d);b.mJ(0,c,a.cw,a.bY);a.bY=d;}
function AIf(a){if(!a.bY)return B(46);return GH(a.cw,0,a.bY);}
function ARS(a,b){CS(a,b);return a;}
function ASq(a,b){return a.Cd(b,0);}
function AKt(a,b,c){return a.KU(b,c,48);}
function AIu(a,b,c,d){var e;if(b==(-2147483648)){I3(a,B(258));return a;}if(b<0){CS(a,45);b= -b|0;}a:{if(c>1){e=c-Zk(b,10)|0;while(true){if(e<=0)break a;a.jj(d);e=e+(-1)|0;}}}if(b>=10000){if(b>=1000000000){Dd();CS(a,Bjv.data[T(Cy(G$(O(b),Bx(1410065408, 2)),O(1000000000)))]);}if(b>=100000000){Dd();CS(a,Bjv.data[(b%1000000000|0)/100000000|0]);}if(b>=10000000){Dd();CS(a,Bjv.data[(b%100000000|0)/10000000|0]);}if(b>=1000000){Dd();CS(a,Bjv.data[(b%10000000|0)/1000000|0]);}if(b>=100000){Dd();CS(a,Bjv.data[(b%1000000
|0)/100000|0]);}Dd();CS(a,Bjv.data[(b%100000|0)/10000|0]);}if(b>=1000){Dd();CS(a,Bjv.data[(b%10000|0)/1000|0]);}if(b>=100){Dd();CS(a,Bjv.data[(b%1000|0)/100|0]);}if(b>=10){Dd();CS(a,Bjv.data[(b%100|0)/10|0]);}Dd();CS(a,Bjv.data[b%10|0]);return a;}
function A4P(a,b){if(b===null)OA(a);else I3(a,b.d());return a;}
function A1T(a,b){I3(a,b);return a;}
function A5D(){Bjv=Hm([48,49,50,51,52,53,54,55,56,57]);}
var Tu=D(C9);
function Bb4(){var a=new Tu();AMc(a);return a;}
function AMc(a){Hf(a,B(259),Bc(BL,0));}
function AWv(a){return Ben(a);}
var UI=D(B$);
var WM=D(Bk);
function RH(){var a=new WM();A07(a);return a;}
function A07(a){Cv(a);}
var CO=D();
var Bjw=null;var Bjx=null;var Bjy=null;var Bjz=null;var BjA=null;var BjB=null;var BjC=null;var BjD=null;var BjE=null;var BjF=null;var BjG=null;function BjH(){BjH=M(CO);A4E();}
function A4E(){Bjw=Cf(16);Bjx=IV();Bjy=IV();Bjz=X();BjA=X();BjB=X();BjC=X();BjD=CP();BjE=X();BjF=X();BjG=X();}
var AB$=D(CI);
var WQ=D();
var IC=D(0);
function Os(){var a=this;C.call(a);a.c8=null;a.i7=null;a.ro=null;a.ld=null;a.to=0;a.k9=0;a.qF=0;a.A$=0;a.dw=0;a.DU=0;a.y6=0;a.dt=0;a.KI=0;a.fU=0;a.rX=0;}
function BjI(a,b,c,d,e,f){var g=new Os();Un(g,a,b,c,d,e,f);return g;}
function Un(a,b,c,d,e,f,g){var h;L(a);a.fU=(-1);h=e+1|0;a.to=h;a.c8=Bf(h*2|0);a.i7=Bf(g);Hc(a.i7,(-1));if(f>0)a.ro=Bf(f);Hc(a.c8,(-1));a.qU(b,c,d);}
function AUh(a,b,c){a.i7.data[b]=c;}
function A4m(a,b){return a.i7.data[b];}
function AWw(a){return a.mn(0);}
function AOK(a,b){NP(a,b);return a.c8.data[(b*2|0)+1|0];}
function AZR(a,b,c){a.c8.data[b*2|0]=c;}
function AYi(a,b,c){a.c8.data[(b*2|0)+1|0]=c;}
function A7b(a,b){return a.c8.data[b*2|0];}
function AR1(a,b){return a.c8.data[(b*2|0)+1|0];}
function AIL(a,b){if(a.jo(b)<0)return null;return (a.ld.du(a.jo(b),a.mn(b))).d();}
function A3w(a,b){var c,d;c=a.hm(b);d=a.la(b);if((d|c|(d-c|0))>=0&&d<=a.ld.i())return (a.ld.du(c,d)).d();return null;}
function ART(a){return a.jo(0);}
function AJ_(a,b){NP(a,b);return a.c8.data[b*2|0];}
function APw(a){if(a.c8.data[0]==(-1)){a.c8.data[0]=a.dw;a.c8.data[1]=a.dw;}a.fU=a.m2();}
function AWY(a,b){return a.ro.data[b];}
function AZc(a,b,c){a.ro.data[b]=c;}
function NP(a,b){if(!a.k9)G(JI());if(b>=0&&b<a.to)return;G(Dh(JF(b)));}
function A$b(a){a.k9=1;}
function A$d(a){return a.k9;}
function A$X(a,b,c,d){a.k9=0;a.rX=2;Hc(a.c8,(-1));Hc(a.i7,(-1));if(b!==null)a.ld=b;if(c>=0)WW(a,c,d);a.dw=a.qF;}
function AKJ(a){a.qU(null,(-1),(-1));}
function WW(a,b,c){a.qF=b;a.A$=c;}
function A76(a,b){a.dw=b;if(a.fU>=0)b=a.fU;a.fU=b;}
function AYL(a){return a.qF;}
function A4G(a){return a.A$;}
function A0p(a,b){a.rX=b;}
function AMl(a){return a.rX;}
function A08(a,b){a.y6=b;}
function A2i(a){return a.y6;}
function AWX(a){return a.DU;}
function AXP(a){return a.fU;}
function DV(){var a=this;C.call(a);a.b4=null;a.rM=0;a.sE=0;a.n1=0;a.wm=0;a.wc=0;a.xr=0;a.yD=null;a.wp=null;a.Ar=null;a.sC=null;a.vK=null;a.ep=null;a.st=null;a.uX=null;a.gx=null;a.gu=null;a.c2=null;}
var BjJ=null;var BjK=null;var BjL=null;var BjM=null;var BjN=null;var BjO=null;var BjP=null;function C8(){C8=M(DV);A1q();}
function Bbg(){var a=new DV();AG7(a);return a;}
function BjQ(a,b,c,d,e,f){var g=new DV();M2(g,a,b,c,d,e,f);return g;}
function AG7(a){C8();M2(a,1,1,0,1,0,1);}
function M2(a,b,c,d,e,f,g){var h;C8();L(a);a.yD=B1(0.5,0.5,0.30000001192092896,1.0);a.wp=B1(0.5,0.8999999761581421,0.5,1.0);a.Ar=B1(0.5,0.5,0.8999999761581421,1.0);a.sC=B1(0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);a.vK=B1(0.8999999761581421,0.699999988079071,0.699999988079071,1.0);a.ep=B1(0.5,0.800000011920929,0.800000011920929,1.0);a.st=B1(1.0,0.0,1.0,1.0);a.uX=B1(1.0,0.0,0.0,1.0);a.gx=Z();a.gu=Z();a.c2=Z();a.b4=Bdg();h=0;while(h<BjJ.data.length){BjJ.data[h]=Z();h=h+1|0;}a.rM=b;a.sE=c;a.n1
=d;a.wm=e;a.wc=f;a.xr=g;}
function A5V(a,b,c){a.b4.KE(c);V8(a,b);}
function V8(a,b){var c,d,e,f,g,h;a:{c=a.b4;Hb();c.jq(BjR);if(!(!a.rM&&!a.n1)){C8();b.F1(BjM);d=BjM.fi();while(true){if(!d.dk())break a;e=d.da();if(!(!e.uO()&&!a.wm))a.GZ(e);}}}b:{if(a.sE){C8();b.Jx(BjN);d=BjN.fi();while(true){if(!d.dk())break b;f=d.da();PM(a,f);}}}a.b4.eF();if(a.xr){a.b4.jq(BjS);g=(b.GC()).fi();while(g.dk()){h=g.da();SS(a,h);}a.b4.eF();}}
function A68(a,b){var c,d,e,f;c=b.p1();d=(b.Kn()).fi();while(d.dk()){e=d.da();if(a.rM){RZ(a,e,c,OY(a,b));if(a.wc){f=b.f6();DF(a,f,(b.Dd()).q2(f),a.uX);}}if(a.n1)WH(a,e,c);}}
function OY(a,b){var c;if(!b.uO())return a.yD;c=b.nT();DP();if(c===BjT)return a.wp;if(b.nT()===BjU)return a.Ar;if(b.FR())return a.vK;return a.sC;}
function WH(a,b,c){var d,e,f,g,h;d=b.g3();EL();if(d===BjV){e=b.hA();f=e.xo();C8();BjJ.data[0].c9(e.f6());c.fl(BjJ.data[0]);BjK.bN(BjJ.data[0].w-f,BjJ.data[0].v-f);BjL.bN(BjJ.data[0].w+f,BjJ.data[0].v+f);BjJ.data[0].bN(BjK.w,BjK.v);BjJ.data[1].bN(BjL.w,BjK.v);BjJ.data[2].bN(BjL.w,BjL.v);BjJ.data[3].bN(BjK.w,BjL.v);F0(a,BjJ,4,a.st,1);}else if(b.g3()===BjW){e=b.hA();g=e.k0();C8();e.jM(0,BjJ.data[0]);BjK.c9(c.fl(BjJ.data[0]));BjL.c9(BjK);h=1;while(h<g){e.jM(h,BjJ.data[h]);c.fl(BjJ.data[h]);BjK.w=JP(BjK.w,BjJ.data[h].w);BjK.v
=JP(BjK.v,BjJ.data[h].v);BjL.w=EB(BjL.w,BjJ.data[h].w);BjL.v=EB(BjL.v,BjJ.data[h].v);h=h+1|0;}BjJ.data[0].bN(BjK.w,BjK.v);BjJ.data[1].bN(BjL.w,BjK.v);BjJ.data[2].bN(BjL.w,BjL.v);BjJ.data[3].bN(BjK.w,BjL.v);F0(a,BjJ,4,a.st,1);}}
function RZ(a,b,c,d){var e,f,g,h,i,j;e=b.g3();EL();if(e===BjV){f=b.hA();C8();BjO.c9(f.f6());c.fl(BjO);R6(a,BjO,f.xo(),BjP.bN(c.er.data[2],c.er.data[3]),d);return;}if(b.g3()===BjX){g=b.hA();C8();g.KH(BjJ.data[0]);g.D1(BjJ.data[1]);c.fl(BjJ.data[0]);c.fl(BjJ.data[1]);F0(a,BjJ,2,d,1);return;}if(b.g3()===BjW){h=b.hA();i=h.k0();j=0;while(j<i){C8();h.jM(j,BjJ.data[j]);c.fl(BjJ.data[j]);j=j+1|0;}C8();F0(a,BjJ,i,d,1);return;}if(b.g3()===BjY){h=b.hA();i=h.k0();j=0;while(j<i){C8();h.jM(j,BjJ.data[j]);c.fl(BjJ.data[j]);j
=j+1|0;}C8();F0(a,BjJ,i,d,0);}}
function R6(a,b,c,d,e){var f,g,h,i,j;f=0.0;g=0.3141592741012573;a.b4.sY(e.b9,e.b8,e.b7,e.b6);h=0;while(h<20){i=a.gu;j=f;i.bN(AIC(j)*c+b.w,AFE(j)*c+b.v);if(!h){a.c2.c9(a.gu);a.gx.c9(a.gu);}else{Gd(a.b4,a.c2.w,a.c2.v,a.gu.w,a.gu.v);a.c2.c9(a.gu);}h=h+1|0;f=f+g;}Gd(a.b4,a.gx.w,a.gx.v,a.c2.w,a.c2.v);Km(a.b4,b.w,b.v,0.0,b.w+d.w*c,b.v+d.v*c,0.0);}
function F0(a,b,c,d,e){var f,g,h;f=b.data;a.b4.sY(d.b9,d.b8,d.b7,d.b6);a.c2.c9(f[0]);a.gx.c9(f[0]);g=1;while(g<c){h=f[g];Gd(a.b4,a.c2.w,a.c2.v,h.w,h.v);a.c2.c9(h);g=g+1|0;}if(e)Gd(a.b4,a.gx.w,a.gx.v,a.c2.w,a.c2.v);}
function PM(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.Fq();d=b.Cb();e=c.p1();f=d.p1();g=e.f6();h=f.f6();i=b.t$();j=b.tW();k=b.p9();D3();if(k===BjZ)DF(a,i,j,a.ep);else if(b.p9()===Bj0){l=b;m=l.Iu();n=l.JJ();DF(a,m,i,a.ep);DF(a,n,j,a.ep);DF(a,m,n,a.ep);}else if(b.p9()===Bj1)DF(a,b.t$(),b.tW(),a.ep);else{DF(a,g,i,a.ep);DF(a,i,j,a.ep);DF(a,h,j,a.ep);}}
function DF(a,b,c,d){a.b4.um(d);Gd(a.b4,b.w,b.v,c.w,c.v);}
function SS(a,b){var c,d;c=b.GE();if(!c.Eh())return;d=(c.K_()).data[0];a.b4.um(OY(a,(b.JN()).yk()));a.b4.F8(d.w,d.v,0.0);}
function AYy(a){a.b4.be();}
function A1q(){BjJ=Bc(ET,1000);BjK=Z();BjL=Z();BjM=CG();BjN=CG();BjO=Z();BjP=Z();}
var Zp=D();
var EH=D();
var U$=D(CH);
function JX(){var a=this;C.call(a);a.e_=0;a.qt=0;a.qu=0;a.cN=0;a.ct=0;a.sD=0.0;a.nn=0.0;a.xB=0.0;a.qD=0.0;a.ex=0;a.hh=0;a.f9=0;a.gT=null;a.pX=0;a.hU=0;}
function AJp(){var a=new JX();A8I(a);return a;}
function A8I(a){L(a);a.hU=0;}
function A3X(a,b){var c;if(a.gT!==null){c=a.gT.data[b>>>9];if(c!==null)return c.data[b&511];}return 0;}
function A67(a,b,c){var d,e,f;if(a.gT===null)a.gT=Bc($rt_arraycls($rt_bytecls()),128);d=a.gT.data;e=b>>>9;f=d[e];if(f===null){d=a.gT.data;f=Cw(512);d[e]=f;}f.data[b&511]=c<<24>>24;}
function AMS(a){return IF(a.e_&65535);}
function Yl(){U.call(this);this.Bi=null;}
function BbS(a){var b=new Yl();AOk(b,a);return b;}
function AOk(a,b){a.Bi=b;Bg(a);}
function A_b(a,b){return XD(b);}
function G8(){var a=this;C.call(a);a.f5=0;a.yy=0;a.mb=null;a.lQ=null;a.lT=null;a.kU=null;a.kb=0.0;}
var Bj2=0.0;function Ox(){Ox=M(G8);AM8();}
function K3(a,b,c){Ox();L(a);AKh();a.mb=Bj3;a.lQ=Bj3;AWu();a.lT=Bj4;a.kU=Bj4;a.kb=1.0;a.f5=b;a.yy=c;}
function A4_(a){Bii.pP(a.f5,a.yy);}
function ARs(a,b,c,d){if(b!==null&&!(!d&&a.lT===b)){Bii.jc(a.f5,10242,OW(b));a.lT=b;}if(c!==null&&!(!d&&a.kU===c)){Bii.jc(a.f5,10243,OW(c));a.kU=c;}}
function AHO(a,b,c,d){if(b!==null&&!(!d&&a.mb===b)){Bii.jc(a.f5,10241,OC(b));a.mb=b;}if(c!==null&&!(!d&&a.lQ===c)){Bii.jc(a.f5,10240,OC(c));a.lQ=c;}}
function AMm(a,b,c){var d,e;d=ABj();if(d===1.0)return 1.0;e=JP(b,d);if(!c&&US(e,a.kb,0.10000000149011612))return a.kb;Bij.zy(3553,34046,e);a.kb=e;return e;}
function ABj(){var b,c;Ox();if(Bj2>0.0)return Bj2;if(!Bid.q8(B(260))){Bj2=1.0;return 1.0;}b=Ij(16);b.c4(0);b.c7(ED(b));Bij.xX(34047,b);c=b.i2(0);Bj2=c;return c;}
function AGD(b,c){Ox();AGC(b,c,0);}
function AGC(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;Ox();if(c===null)return;if(!c.uu())c.we();e=c.Jr();Kg();if(e===Bj5){c.Cx(b);return;}f=c.Lr();g=c.AL();if(c.eW()===f.eW())h=f;else{h=Pw(f.bp(),f.bl(),c.eW());G4();h.zJ(Bj6);h.vA(f,0,0,0,0,f.bp(),f.bl());if(c.AL())f.be();g=1;}Bii.tb(3317,1);if(c.LF())AEC(b,h,h.bp(),h.bl());else{i=Bii;j=h.it();k=h.bp();l=h.bl();m=h.jz();n=h.i5();o=h.ix();i.gQ(b,d,j,k,l,0,m,n,o);}if(g)h.be();}
function AM8(){Bj2=0.0;}
function L5(){G8.call(this);this.ga=null;}
var Bj7=null;function HM(){HM=M(L5);A7l();}
function Bcu(a,b){var c=new L5();AD$(c,a,b);return c;}
function Bj8(a,b,c){var d=new L5();L1(d,a,b,c);return d;}
function Bj9(a){var b=new L5();Ka(b,a);return b;}
function Bj$(a,b,c){var d=new L5();Oi(d,a,b,c);return d;}
function AD$(a,b,c){HM();L1(a,b,null,c);}
function L1(a,b,c,d){HM();Ka(a,AUO(b,c,d));}
function Ka(a,b){HM();Oi(a,3553,Bii.En(),b);}
function Oi(a,b,c,d){HM();K3(a,b,c);a.Il(d);if(d.nW())Qf(BhP,a);}
function AUe(a,b){if(a.ga!==null&&b.nW()!=a.ga.nW())G(BG(B(261)));a.ga=b;if(!b.uu())b.we();a.ee();AGD(3553,b);a.Jy(a.mb,a.lQ,1);a.Cr(a.lT,a.kU,1);a.K1(a.kb,1);Bii.pP(a.f5,0);}
function AQR(a){return a.ga.bp();}
function A9i(a){return a.ga.bl();}
function AP_(a){if(!(a.ga instanceof HT))return QU(a);return a.ga.d();}
function Qf(b,c){var d;HM();d=Bj7.I(b);if(d===null)d=CG();d.bG(c);Bj7.s(b,d);}
function A7l(){Bj7=Df();}
var DK=D(Bk);
function ACI(a,b){var c=new DK();AIh(c,a,b);return c;}
function BG(a){var b=new DK();D7(b,a);return b;}
function AIh(a,b,c){Q1(a,b,c);}
function D7(a,b){Et(a,b);}
var Uz=D(Ci);
function EE(){var a=this;BO.call(a);a.jU=0;a.n9=null;a.np=null;a.nj=0;}
function Bgk(a,b){var c=new EE();Kv(c,a,b);return c;}
function Kv(a,b,c){CY(a);a.jU=1;a.np=b;a.nj=c;}
function A$N(a,b){a.j=b;}
function AQ0(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=Bf(4);f=0;g=d.D();if(b>=g)return (-1);h=a.sl(b,c,g);i=b+a.jU|0;j=AFO(h);if(j===null){k=e.data;l=1;k[f]=h;}else{l=j.data.length;BZ(j,0,e,0,l);l=f+l|0;}a:{if(i<g){m=a.sl(i,c,g);while(l<4){if(!A6Q(m)){k=e.data;n=l+1|0;k[l]=m;}else{k=(AFO(m)).data;if(k.length!=2){o=e.data;n=l+1|0;o[l]=k[0];}else{o=e.data;m=l+1|0;o[l]=k[0];n=m+1|0;o[m]=k[1];}}i=i+a.jU|0;if(i>=g){l=n;break a;}m=a.sl(i,c,g);l=n;}}}if(l!=a.nj)return (-1);p=0;while(true){if(p>=l)return a.j.c(i,c,d);if
(e.data[p]!=a.np.data[p])break;p=p+1|0;}return (-1);}
function ID(a){var b,c;if(a.n9===null){b=K();c=0;while(c<a.nj){b.od(E2(a.np.data[c]));c=c+1|0;}a.n9=b.d();}return a.n9;}
function A6a(a){var b,c;b=ID(a);c=K();I(I(c,B(262)),b);return Q(c);}
function ANR(a,b,c,d){var e,f,g,h;a.jU=1;if(b>=(d-1|0))e=c.f(b);else{f=b+1|0;e=c.f(b);g=c.f(f);if(G_(e,g)){h=Hm([e,g]);e=UZ(h,0);a.jU=2;}}return e;}
function AOy(a,b){var c,d;a:{if(b instanceof EE){c=b;if(!(ID(c)).K(ID(a))){d=0;break a;}}d=1;}return d;}
function A7m(a,b){return 1;}
var Cp=D(Bk);
function C4(){var a=new Cp();GE(a);return a;}
function Bo(a){var b=new Cp();Ew(b,a);return b;}
function GE(a){Cv(a);}
function Ew(a,b){Et(a,b);}
function VM(){Cp.call(this);this.BO=null;}
function AA7(a){var b=new VM();ATy(b,a);return b;}
function ATy(a,b){GE(a);a.BO=b;}
var Hz=D(Bp);
var Bj_=null;function Bka(){Bka=M(Hz);AIr();}
function AIr(){Bj_=Z();}
var TY=D();
var Mu=D(0);
var GU=D(0);
var Oj=D(0);
var Fm=D();
function J5(a){L(a);}
function IT(){Fm.call(this);this.sv=null;}
function Bkb(a){var b=new IT();PD(b,a);return b;}
function PD(a,b){J5(a);a.sv=b;}
function HZ(){var a=this;IT.call(a);a.EF=0;a.oD=0;a.d3=null;a.io=null;a.vm=null;}
function Bkc(a,b){var c=new HZ();OF(c,a,b);return c;}
function OF(a,b,c){PD(a,b);a.d3=K();a.io=B8(32);a.EF=c;KY();a.vm=Bkd;}
function A5U(a,b,c,d){var $$je;if(!AEU(a))return;a:{try{a.sv.ik(b,c,d);break a;}catch($$e){$$je=Bn($$e);if($$je instanceof EK){}else{throw $$e;}}a.oD=1;}}
function AEU(a){if(a.sv===null)a.oD=1;return a.oD?0:1;}
function MZ(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.data;f=ACi(b,c,d-c|0);g=Cw(Bt(16,BN(e.length,1024)));h=HX(g);i=a.vm.j5();DQ();j=BhD;i=Lq(i,j);j=BhD;k=Mm(i,j);while(true){l=(IY(k,f,h,1)).hJ();a.ik(g,0,Cd(h));Kw(h);if(!l)break;}while(true){l=(Kb(k,h)).hJ();a.ik(g,0,Cd(h));Kw(h);if(!l)break;}}
function A0l(a,b){a.io.data[0]=b;MZ(a,a.io,0,1);}
function A2$(a,b){a.d3.h(b);IU(a);}
function AY_(a,b){(a.d3.h(b)).bi(10);IU(a);}
function AOn(a,b){(a.d3.e2(b)).bi(10);IU(a);}
function A7w(a){a.B9(10);}
function IU(a){var b;b=a.d3.i()<=a.io.data.length?a.io:B8(a.d3.i());a.d3.mJ(0,a.d3.i(),b,0);MZ(a,b,0,a.d3.i());a.d3.rB(0);}
var Uw=D(DE);
function Bea(a,b){var c=new Uw();AXe(c,a,b);return c;}
function AXe(a,b,c){GQ(a,b,c);}
function AWL(a,b,c,d){var e,f,g,h;e=a.bJ.cx();d.bo(a.bf,b);f=0;while(true){if(f>=e)return a.j.c(b,c,d);g=a.bJ.X(f);h=g.cp(0,b,c,d);if(h>=0)break;f=f+1|0;}return (-1);}
function A7V(a,b){return 0;}
function AJx(a){return B(263);}
var Hd=D(C1);
function ADT(a,b,c,d){Gm(a,b);a.y=c;a.T=d;}
function ANX(b,c,d){return Be1(0,b.data.length,b,c,c+d|0,0);}
function A1U(b){return ANX(b,0,b.data.length);}
function Iw(a){GF(a);return a;}
function XW(a){Gw(a);return a;}
function A5z(a){return Iw(a);}
var F4=D(Hd);
function M_(a,b,c,d){ADT(a,b,c,d);}
function ATJ(a){var b;if(a.y>=a.T)G(Xg());b=a.y;a.y=b+1|0;return a.nc(b);}
function A5v(a,b){var c;if(a.bZ())G(Dj());if(a.y>=a.T)G(GG());c=a.y;a.y=c+1|0;a.lp(c,b);return a;}
function APA(a,b){var c,d,e;if(b>=0&&b<a.T)return a.nc(b);c=new Bv;d=a.T;e=K();Bi(V(I(V(I(e,B(264)),b),B(54)),d),41);BC(c,Q(e));G(c);}
function A9u(a,b,c){var d,e,f;if(a.bZ())G(Dj());if(b>=0&&b<a.T){a.lp(b,c);return a;}d=new Bv;e=a.T;f=K();Bi(V(I(V(I(f,B(264)),b),B(54)),e),41);BC(d,Q(f));G(d);}
function AO3(a){return a.d1();}
function Gk(){var a=this;F4.call(a);a.cc=null;a.uq=0;a.ca=0;}
function Kd(a,b,c,d,e,f,g){M_(a,c,e,f);a.ca=b;a.cc=d;a.uq=g;}
function AOT(a){return a.uq;}
var Qs=D(Gk);
function Be9(a,b,c,d,e,f){var g=new Qs();A0B(g,a,b,c,d,e,f);return g;}
function A0B(a,b,c,d,e,f,g){Kd(a,b,c,d,e,f,g);}
function AMh(a,b){var c,d,e;c=a.cc.u.data;d=a.ca;e=b*4|0;return c[d+e|0]&255|(a.cc.u.data[(a.ca+e|0)+1|0]&255)<<8|(a.cc.u.data[(a.ca+e|0)+2|0]&255)<<16|(a.cc.u.data[(a.ca+e|0)+3|0]&255)<<24;}
function AHt(a,b,c){var d,e,f;d=a.cc.u.data;e=a.ca;f=b*4|0;d[e+f|0]=c<<24>>24;a.cc.u.data[(a.ca+f|0)+1|0]=c>>8<<24>>24;a.cc.u.data[(a.ca+f|0)+2|0]=c>>16<<24>>24;a.cc.u.data[(a.ca+f|0)+3|0]=c>>24<<24>>24;}
var Cc=D();
function Bcg(){var a=new Cc();DB(a);return a;}
function DB(a){L(a);}
function APM(a,b){}
function AM5(a,b){}
function Si(){var a=this;Cc.call(a);a.xa=null;a.zj=0;a.gh=null;}
function Bap(a,b,c){var d=new Si();A2r(d,a,b,c);return d;}
function A2r(a,b,c,d){a.gh=b;a.xa=c;a.zj=d;DB(a);}
function AUz(a,b){}
function A3D(a,b){var c,d,e;c=D6();d=a.xa;e=K();I(I(e,B(265)),d);c.em(Q(e));}
function AWZ(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=c.sp(B(266));e=d.data;f=e.length;g=0;while(true){if(g>=f){a:{a.gh.rm=a.gh.ir.k;if(a.zj){h=0;while(true){if(h>=a.gh.ir.k)break a;i=a.gh.ir.X(h);a.gh.KL(i);h=h+1|0;}}}return 0;}j=e[g];k=j.sp(B(267));l=k.data;if(l.length!=4)break;Ku();m=Bke;if(l[0].K(B(268)))m=Bkf;if(l[0].K(B(269)))m=Bkg;if(l[0].K(B(270)))m=Bkh;if(l[0].K(B(89)))m=Bki;n=AGk(l[2]);if(m===Bkh&&!(Fb()).J3())n=Bd;a.gh.ir.bG(Bas(l[1].HZ(),m,n,l[3]));g=g+1|0;}G(BG(B(271)));}
function ANE(a,b,c){return a.Et(b,c);}
var VK=D(W);
function Bf8(){var a=new VK();A2x(a);return a;}
function A2x(a){Bs(a);}
function AOL(a){var b;b=BbS(a);b.ba=1;return b;}
function Sj(){var a=this;Cc.call(a);a.hr=null;a.FF=null;}
function Bde(a,b){var c=new Sj();A9V(c,a,b);return c;}
function A9V(a,b,c){a.FF=b;a.hr=c;DB(a);}
function APy(a,b){a.hr.tP=BgH(b);}
function A7K(a,b){a.hr.on=1;a.hr.iF=0;}
function ATf(a,b,c){a.hr.rJ=1;a.hr.iF=0;return 0;}
function Sg(){var a=this;Cc.call(a);a.ni=null;a.sz=null;a.z0=null;a.wY=null;}
function A_4(a,b,c,d){var e=new Sg();A2S(e,a,b,c,d);return e;}
function A2S(a,b,c,d,e){a.wY=b;a.ni=c;a.sz=d;a.z0=e;DB(a);}
function ATj(a,b){a.ni.ew(b);}
function ALo(a,b){a.ni.cu(b);}
function AQl(a,b,c){a.wY.BI(a.sz,a.z0,c);a.ni.cE(b,c);return 0;}
function Bm(){var a=this;C.call(a);a.b9=0.0;a.b8=0.0;a.b7=0.0;a.b6=0.0;}
var Bkj=null;var Bkk=null;var Bkl=null;var Bkm=null;var Bkn=null;var Bko=0.0;var Bkp=null;var Bkq=null;var Bkr=null;var Bks=null;var Bkt=null;var Bku=null;var Bkv=null;var Bkw=null;var Bkx=null;var Bky=null;var Bkz=null;var BkA=null;var BkB=null;var BkC=null;var BkD=null;var BkE=null;var BkF=null;var BkG=null;var BkH=null;var BkI=null;var BkJ=null;var BkK=null;var BkL=null;var BkM=null;var BkN=null;var BkO=null;var BkP=null;var BkQ=null;var BkR=null;function FV(){FV=M(Bm);AWz();}
function AYs(){var a=new Bm();XQ(a);return a;}
function BS(a){var b=new Bm();AFW(b,a);return b;}
function B1(a,b,c,d){var e=new Bm();UO(e,a,b,c,d);return e;}
function XQ(a){FV();L(a);}
function AFW(a,b){FV();L(a);Wo(a,b);}
function UO(a,b,c,d,e){FV();L(a);a.b9=b;a.b8=c;a.b7=d;a.b6=e;a.yP();}
function AIT(a,b){a.b9=b.b9;a.b8=b.b8;a.b7=b.b7;a.b6=b.b6;return a;}
function A8j(a){if(a.b9<0.0)a.b9=0.0;else if(a.b9>1.0)a.b9=1.0;if(a.b8<0.0)a.b8=0.0;else if(a.b8>1.0)a.b8=1.0;if(a.b7<0.0)a.b7=0.0;else if(a.b7>1.0)a.b7=1.0;if(a.b6<0.0)a.b6=0.0;else if(a.b6>1.0)a.b6=1.0;return a;}
function A5A(a,b,c,d,e){a.b9=b;a.b8=c;a.b7=d;a.b6=e;return a.yP();}
function A0u(a,b){var c;if(a===b)return 1;if(b!==null&&CW(a)===CW(b)){c=b;return a.lq()!=c.lq()?0:1;}return 0;}
function AO6(a){var b,c;b=a.b9===0.0?0:H2(a.b9);c=(31*b|0)+(a.b8===0.0?0:H2(a.b8))|0;c=(31*c|0)+(a.b7===0.0?0:H2(a.b7))|0;c=(31*c|0)+(a.b6===0.0?0:H2(a.b6))|0;return c;}
function AT9(a){var b;b=(255.0*a.b6|0)<<24|(255.0*a.b7|0)<<16|(255.0*a.b8|0)<<8|255.0*a.b9|0;return KA(b);}
function AVS(a){return (255.0*a.b6|0)<<24|(255.0*a.b7|0)<<16|(255.0*a.b8|0)<<8|255.0*a.b9|0;}
function AKE(a){var b,c;b=(255.0*a.b9|0)<<24|(255.0*a.b8|0)<<16|(255.0*a.b7|0)<<8|255.0*a.b6|0;c=J3(b);while(c.i()<8){c=(((K()).h(B(272))).h(c)).d();}return c;}
function R8(b,c,d,e){var f;FV();f=(255.0*e|0)<<24|(255.0*d|0)<<16|(255.0*c|0)<<8|255.0*b|0;return KA(f);}
function Wo(b,c){FV();b.b9=((c&(-16777216))>>>24)/255.0;b.b8=((c&16711680)>>>16)/255.0;b.b7=((c&65280)>>>8)/255.0;b.b6=(c&255)/255.0;}
function AWz(){Bkj=B1(1.0,1.0,1.0,1.0);Bkk=BS((-1077952513));Bkl=BS(2139062271);Bkm=BS(1061109759);Bkn=B1(0.0,0.0,0.0,1.0);Bko=Bkj.iA();Bkp=B1(0.0,0.0,0.0,0.0);Bkq=B1(0.0,0.0,1.0,1.0);Bkr=B1(0.0,0.0,0.5,1.0);Bks=BS(1097458175);Bkt=BS(1887473919);Bku=BS((-2016482305));Bkv=B1(0.0,1.0,1.0,1.0);Bkw=B1(0.0,0.5,0.5,1.0);Bkx=BS(16711935);Bky=BS(2147418367);Bkz=BS(852308735);BkA=BS(579543807);BkB=BS(1804477439);BkC=BS((-65281));BkD=BS((-2686721));BkE=BS((-626712321));BkF=BS((-5963521));BkG=BS((-1958407169));BkH=BS((-759919361));BkI
=BS((-1306385665));BkJ=BS((-16776961));BkK=BS((-13361921));BkL=BS((-8433409));BkM=BS((-92245249));BkN=BS((-9849601));BkO=B1(1.0,0.0,1.0,1.0);BkP=BS((-1608453889));BkQ=BS((-293409025));BkR=BS((-1339006721));}
var Ei=D();
var WA=D(Ei);
var K0=D();
var BkS=null;function BdQ(){BdQ=M(K0);ALG();}
function ALG(){BkS=Bf((M8()).data.length);BkS.data[Bj(Bke)]=1;BkS.data[Bj(Bkf)]=2;BkS.data[Bj(Bkg)]=3;BkS.data[Bj(Bkh)]=4;BkS.data[Bj(Bki)]=5;}
function FI(){var a=this;C.call(a);a.lf=0;a.dh=0;a.eL=0;a.ez=0;a.ev=0;a.eb=null;a.mY=0;a.zu=0;}
function Gh(a,b,c){var d=new FI();AQg(d,a,b,c);return d;}
function BkT(a,b,c,d){var e=new FI();AGR(e,a,b,c,d);return e;}
function BkU(a,b,c,d,e,f){var g=new FI();AEm(g,a,b,c,d,e,f);return g;}
function AQg(a,b,c,d){AGR(a,b,c,d,0);}
function AGR(a,b,c,d,e){var f;f=Cx(b,4);AEm(a,b,c,f?5126:5121,f?0:1,d,e);}
function AEm(a,b,c,d,e,f,g){L(a);a.lf=b;a.dh=c;a.ez=d;a.eL=e;a.eb=f;a.mY=g;a.zu=FA(b);}
function AQk(a,b){if(!(b instanceof FI))return 0;return SC(a,b);}
function SC(a,b){var c,d,e;a:{if(b!==null&&a.lf==b.lf&&a.dh==b.dh&&a.ez==b.ez&&a.eL==b.eL){c=a.eb;d=b.eb;if(c.K(d)&&a.mY==b.mY){e=1;break a;}}e=0;}return e;}
function AAE(a){return (a.zu<<8)+(a.mY&255)|0;}
function RM(a){a:{switch(a.ez){case 5120:case 5121:break;case 5122:case 5123:return 2*a.dh|0;case 5124:case 5125:case 5127:case 5128:case 5129:case 5130:case 5131:break a;case 5126:case 5132:return 4*a.dh|0;default:break a;}return a.dh;}return 0;}
function AZ_(a){var b,c;b=AAE(a);c=(541*b|0)+a.dh|0;c=(541*c|0)+a.eb.cq()|0;return c;}
var Fh=D(Bp);
function CK(){Do.call(this);this.bm=null;}
function Bb3(a,b,c){var d=new CK();FB(d,a,b,c);return d;}
function FB(a,b,c,d){GD(a,b,c,d);a.bm=b;}
function AWN(a,b,c,d){var e,f;e=0;a:{while((b+a.bm.b5()|0)<=d.D()){f=a.bm.bB(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.j.c(b,c,d);if(f>=0)break;b=b-a.bm.b5()|0;e=e+(-1)|0;}return f;}
function AZd(a){return B(273);}
var Ww=D(CK);
function Bau(a){var b=new Ww();ANU(b,a);return b;}
function ANU(a,b){FB(a,b.m7(),b.EJ(),b.cK());a.R.L(a);}
function A$_(a,b,c,d){var e;while((b+a.bm.b5()|0)<=d.D()){e=a.bm;if(e.bB(b,c)<=0)break;b=b+a.bm.b5()|0;}return a.j.c(b,c,d);}
function AQi(a,b,c,d){var e,f,g;e=a.j.ci(b,c,d);if(e<0)return (-1);f=e-a.bm.b5()|0;while(f>=b&&a.bm.bB(f,c)>0){g=f-a.bm.b5()|0;e=f;f=g;}return e;}
var MG=D(0);
function HA(){var a=this;C.call(a);a.n$=null;a.fC=null;a.gZ=null;}
var BkV=0;function Bfm(a){var b=new HA();A8R(b,a);return b;}
function A8R(a,b){var c;L(a);a.fC=b;c=a;b.classObject=c;}
function LI(b){var c;if(b===null)return null;c=b.classObject;if(c===null)c=Bfm(b);return c;}
function APd(a){var b,c;b=IM(a);c=K();V(I(c,B(274)),b);return Q(c);}
function AYd(a){return a.fC;}
function A0k(a,b){return A5M(b,a.fC);}
function A3P(a){if(a.n$===null)a.n$=ASV(a.fC);return a.n$;}
function AML(a){return A8C(a.fC);}
function AUE(a){return AGK(a.fC)===null?0:1;}
function A4R(a){return LI(AGK(a.fC));}
function A0P(){if(!BkV){BkV=1;A3I();}}
function A3I(){I7.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){Up(obj);return null;}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){BcN();AIp();return null;}}];Kz.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){A1C(obj);return null;}},{name:"appendRun",modifiers:0,accessLevel:0,parameterTypes
:[Kz],returnType:$rt_voidcls(),callable:function(obj,args){AXv(obj,args[0]);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){AOu(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BL,callable:function(obj,args){return AIy(obj);}}];Gz.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){AGs(obj);return null;}},{name:"<init>",modifiers
:0,accessLevel:3,parameterTypes:[K5,Gt],returnType:$rt_voidcls(),callable:function(obj,args){QB(obj,args[0],args[1]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[K5,Gt,Bm,$rt_floatcls(),$rt_intcls(),$rt_booleancls()],returnType:$rt_voidcls(),callable:function(obj,args){Vm(obj,args[0],args[1],args[2],A9n(args[3]),AXT(args[4]),A1Z(args[5]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[K5,Gt,$rt_intcls(),$rt_intcls(),Bm,$rt_floatcls(),$rt_intcls(),$rt_booleancls(),
BL],returnType:$rt_voidcls(),callable:function(obj,args){AEN(obj,args[0],args[1],AXT(args[2]),AXT(args[3]),args[4],A9n(args[5]),AXT(args[6]),A1Z(args[7]),args[8]);return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[K5,Gt],returnType:$rt_voidcls(),callable:function(obj,args){A8k(obj,args[0],args[1]);return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[K5,Gt,Bm,$rt_floatcls(),$rt_intcls(),$rt_booleancls()],returnType:$rt_voidcls(),callable:function(obj,args){A4J(obj,args[0],
args[1],args[2],A9n(args[3]),AXT(args[4]),A1Z(args[5]));return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[K5,Gt,$rt_intcls(),$rt_intcls(),Bm,$rt_floatcls(),$rt_intcls(),$rt_booleancls(),BL],returnType:$rt_voidcls(),callable:function(obj,args){AKK(obj,args[0],args[1],AXT(args[2]),AXT(args[3]),args[4],A9n(args[5]),AXT(args[6]),A1Z(args[7]),args[8]);return null;}},{name:"calculateWidths",modifiers:0,accessLevel:1,parameterTypes:[SF],returnType:$rt_voidcls(),callable:function(obj,args){AAp(obj
,args[0]);return null;}},{name:"alignRuns",modifiers:0,accessLevel:1,parameterTypes:[$rt_floatcls(),$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){AC0(obj,A9n(args[0]),AXT(args[1]));return null;}},{name:"truncate",modifiers:0,accessLevel:1,parameterTypes:[SF,Kz,$rt_floatcls(),BL],returnType:$rt_voidcls(),callable:function(obj,args){Qc(obj,args[0],args[1],A9n(args[2]),args[3]);return null;}},{name:"wrap",modifiers:0,accessLevel:1,parameterTypes:[SF,Kz,$rt_intcls()],returnType:Kz,callable:
function(obj,args){return VZ(obj,args[0],args[1],AXT(args[2]));}},{name:"setLastGlyphXAdvance",modifiers:0,accessLevel:1,parameterTypes:[SF,Kz],returnType:$rt_voidcls(),callable:function(obj,args){G3(obj,args[0],args[1]);return null;}},{name:"getGlyphWidth",modifiers:0,accessLevel:1,parameterTypes:[JX,SF],returnType:$rt_floatcls(),callable:function(obj,args){return HQ(obj,args[0],args[1]);}},{name:"getLineOffset",modifiers:0,accessLevel:1,parameterTypes:[LO,SF],returnType:$rt_floatcls(),callable:function(obj,
args){return AF4(obj,args[0],args[1]);}},{name:"parseColorMarkup",modifiers:0,accessLevel:1,parameterTypes:[Gt,$rt_intcls(),$rt_intcls()],returnType:$rt_intcls(),callable:function(obj,args){return UV(obj,args[0],AXT(args[1]),AXT(args[2]));}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){A9a(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BL,callable:function(obj,args){return AQO(obj);}},{name:"<clinit>",modifiers
:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){DA();AZ6();return null;}}];}
function A_r(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!a.fF()&&!a.B7()){if(a.gZ===null){A0P();b=(a.wo()).$meta;c=b.methods;a.gZ=Bc(F7,c.length);d=0;e=0;while(e<c.length){f=c[e];if($rt_str(f.name).K(B(275))){g=f.parameterTypes;h=Bc(HA,g.length);i=0;while(true){j=h.data;if(i>=j.length)break;j[i]=LI(g[i]);i=i+1|0;}j=a.gZ.data;k=d+1|0;l=new F7;b=$rt_str(f.name);m=f.modifiers;AEn(l,a,b,m,f.accessLevel,h,Fz(f.callable,"call"));j[d]=l;d=k;}e=e+1|0;}a.gZ=Jt(a.gZ,d);}return a.gZ.dX();}return Bc(F7,0);}
function AUQ(a){var b,c,d,e,f,g,h,i,j;b=a.oH();c=b.data;d=c.length;e=Bc(F7,d);f=0;g=0;while(g<d){h=c[g];if(KO(h.pC())){i=e.data;j=f+1|0;i[f]=h;f=j;}g=g+1|0;}if(f<e.data.length)e=Jt(e,f);return e;}
function A8t(a,b){var c,d,e,f;c=(a.oH()).data;d=c.length;e=0;while(true){if(e>=d)G(AUH());f=c[e];if(AE1(f.ss(),b))break;e=e+1|0;}return f;}
function A8q(a,b){var c,d,e,f;c=(a.oH()).data;d=c.length;e=0;while(true){if(e>=d)G(AUH());f=c[e];if(KO(f.pC())&&AE1(f.ss(),b))break;e=e+1|0;}return f;}
var CX=D();
var ACg=D(CX);
var D0=D(0);
function AGh(){var a=this;C.call(a);a.B=null;a.bj=0;}
function A_N(){var a=new AGh();AYY(a);return a;}
function Bfo(a){var b=new AGh();AW5(b,a);return b;}
function AYY(a){L(a);a.B=Bf(0);}
function AW5(a,b){L(a);a.B=Bf(((b+32|0)-1|0)/32|0);}
function ARV(a,b){var c,d;c=b/32|0;if(b>=a.bj){Hu(a,c+1|0);a.bj=b+1|0;}d=a.B.data;d[c]=d[c]|1<<(b%32|0);}
function ANa(a,b,c){var d,e,f,g;if(b>c)G(Dl());d=b/32|0;e=c/32|0;if(c>a.bj){Hu(a,e+1|0);a.bj=c;}if(d==e){f=a.B.data;f[d]=f[d]|GL(a,b)&Ho(a,c);}else{f=a.B.data;f[d]=f[d]|GL(a,b);g=d+1|0;while(g<e){a.B.data[g]=(-1);g=g+1|0;}if(c&31){f=a.B.data;f[e]=f[e]|Ho(a,c);}}}
function GL(a,b){var c;c=b%32|0;return (-1)<<c;}
function Ho(a,b){var c;c=b%32|0;return !c?0:(-1)>>>(32-c|0);}
function A_M(a,b){var c,d;c=b/32|0;if(c<a.B.data.length){d=a.B.data;d[c]=d[c]&AA5((-2),b%32|0);if(b==(a.bj-1|0))FO(a);}}
function AXh(a,b,c){var d,e,f,g,h;if(b>c)G(Dl());if(b>=a.bj)return;d=BN(a.bj,c);e=b/32|0;f=d/32|0;if(e==f){g=a.B.data;g[e]=g[e]&(Ho(a,b)|GL(a,d));}else{g=a.B.data;g[e]=g[e]&Ho(a,b);h=e+1|0;while(h<f){a.B.data[h]=0;h=h+1|0;}if(d&31){g=a.B.data;g[f]=g[f]&GL(a,d);}}FO(a);}
function AXp(a,b){var c;c=b/32|0;return c<a.B.data.length&&a.B.data[c]&1<<(b%32|0)?1:0;}
function A$$(a,b){var c,d,e,f,g;if(b>=a.bj)return (-1);c=b/32|0;d=a.B.data[c];e=d>>>(b%32|0);if(e)return FA(e)+b|0;f=(a.bj+31|0)/32|0;g=c+1|0;while(g<f){if(a.B.data[g])return (g*32|0)+FA(a.B.data[g])|0;g=g+1|0;}return (-1);}
function ARz(a,b){var c,d,e,f,g;if(b>=a.bj)return b;c=b/32|0;d=a.B.data[c]^(-1);e=d>>>(b%32|0);if(e)return FA(e)+b|0;f=(a.bj+31|0)/32|0;g=c+1|0;while(g<f){if(a.B.data[g]!=(-1))return (g*32|0)+FA(a.B.data[g]^(-1))|0;g=g+1|0;}return a.bj;}
function Hu(a,b){var c;if(a.B.data.length>=b)return;c=Bt((b*3|0)/2|0,(a.B.data.length*2|0)+1|0);a.B=AVn(a.B,c);}
function FO(a){var b,c,d;b=(a.bj+31|0)/32|0;a.bj=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=MX(a.B.data[c]);if(d<32)break;c=c+(-1)|0;a.bj=a.bj-32|0;}a.bj=a.bj-d|0;}}
function ARa(a,b){var c,d;c=BN(a.B.data.length,b.B.data.length);d=0;while(d<c){if(a.B.data[d]&b.B.data[d])return 1;d=d+1|0;}return 0;}
function A$j(a,b){var c,d,e;c=BN(a.B.data.length,b.B.data.length);d=0;while(d<c){e=a.B.data;e[d]=e[d]&b.B.data[d];d=d+1|0;}while(c<a.B.data.length){a.B.data[c]=0;c=c+1|0;}a.bj=BN(a.bj,b.bj);FO(a);}
function AVN(a,b){var c,d,e;c=BN(a.B.data.length,b.B.data.length);d=0;while(d<c){e=a.B.data;e[d]=e[d]&(b.B.data[d]^(-1));d=d+1|0;}FO(a);}
function A$c(a,b){var c,d,e;a.bj=Bt(a.bj,b.bj);Hu(a,(a.bj+31|0)/32|0);c=BN(a.B.data.length,b.B.data.length);d=0;while(d<c){e=a.B.data;e[d]=e[d]|b.B.data[d];d=d+1|0;}}
function A3Y(a,b){var c,d,e;a.bj=Bt(a.bj,b.bj);Hu(a,(a.bj+31|0)/32|0);c=BN(a.B.data.length,b.B.data.length);d=0;while(d<c){e=a.B.data;e[d]=e[d]^b.B.data[d];d=d+1|0;}FO(a);}
function A$s(a){return a.bj?0:1;}
function JW(){Du.call(this);this.w9=0.0;}
var BkW=0.0;var BkX=null;function KR(){KR=M(JW);ARt();}
function Bbe(a){var b=new JW();Qb(b,a);return b;}
function Qb(a,b){KR();OP(a);a.w9=b;}
function A9n(a){return a.w9;}
function NQ(b){KR();return Bbe(b);}
function En(b){var c,d,e,f,g,h,i,j,k,l,m,n;KR();if(b.bH())G(Ev());c=0;d=b.i();while(true){if(b.f(c)>32){while(b.f(d-1|0)<=32){d=d+(-1)|0;}e=0;if(b.f(c)==45){c=c+1|0;e=1;}else if(b.f(c)==43)c=c+1|0;if(c==d)G(Ev());a:{f=b.f(c);g=0;h=0;i=0;if(f!=46){i=1;if(f>=48&&f<=57){b:{while(c<d){if(b.f(c)!=48)break b;c=c+1|0;}}while(c<d){j=b.f(c);if(j<48)break a;if(j>57)break a;if(g>=214748355)h=h+1|0;else g=(g*10|0)+(j-48|0)|0;c=c+1|0;}}else G(Ev());}}if(c<d&&b.f(c)==46){c=c+1|0;c:{while(true){if(c>=d)break c;k=b.f(c);if
(k<48)break c;if(k>57)break;if(g<214748355){g=(g*10|0)+(k-48|0)|0;h=h+(-1)|0;}c=c+1|0;i=1;}}if(!i)G(Ev());}if(c<d){j=b.f(c);if(j!=101&&j!=69)G(Ev());j=c+1|0;l=0;if(j==d)G(Ev());if(b.f(j)==45){j=j+1|0;l=1;}else if(b.f(j)==43)j=j+1|0;m=0;n=0;d:{while(true){if(j>=d)break d;k=b.f(j);if(k<48)break d;if(k>57)break;m=(10*m|0)+(k-48|0)|0;n=1;j=j+1|0;}}if(!n)G(Ev());if(l)m= -m|0;h=h+m|0;}e:{j=Cx(h,38);if(j<=0){if(j)break e;if(g<=34028234)break e;}return e?(-Infinity):Infinity;}if(e)g= -g|0;return g*AEv(h);}c=c+1|0;if
(c==d)break;}G(Ev());}
function AEv(b){var c,d;KR();if(b>=0)c=10.0;else{c=0.1;b= -b|0;}d=1.0;while(b){if(b%2|0)d=d*c;c=c*c;b=b/2|0;}return d;}
function ARt(){BkW=$rt_globals.NaN;BkX=F($rt_floatcls());}
function DN(){BR.call(this);this.eg=0;}
function Rv(a){var b=new DN();ARM(b,a);return b;}
function ARM(a,b){Da(a);a.eg=b;}
function A3m(a){return 1;}
function AMZ(a,b,c){return a.eg!=c.f(b)?(-1):1;}
function ALz(a,b,c,d){var e,f,g,h;if(!(c instanceof BL))return GI(a,b,c,d);e=c;f=d.D();while(true){if(b>=f)return (-1);g=e.dQ(a.eg,b);if(g<0)return (-1);h=a.j;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AOl(a,b,c,d,e){var f,g;if(!(d instanceof BL))return GO(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.ke(a.eg,c);if(g<0)break a;if(g<b)break a;if(a.j.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AT8(a){var b,c;b=a.eg;c=K();Bi(c,b);return Q(c);}
function AJe(a){return a.eg;}
function ATK(a,b){if(b instanceof DN)return b.mG()!=a.eg?0:1;if(!(b instanceof DJ)){if(b instanceof Db)return b.n(a.eg);if(!(b instanceof DI))return 1;return 0;}return b.bB(0,IF(a.eg))<=0?0:1;}
function Cl(){var a=this;C.call(a);a.o5=0;a.mS=0;a.fH=null;}
function AFi(a){G9(a,16,2147483647);}
function G9(a,b,c){L(a);a.fH=BdH(0,b);a.o5=c;}
function AHW(a){return !a.fH.k?a.q5():a.fH.AZ();}
function AKp(a,b){if(b===null)G(Bo(B(276)));if(a.fH.k>=a.o5)a.y4(b);else{a.fH.bG(b);a.mS=Bt(a.mS,a.fH.k);a.pH(b);}}
function AM4(a,b){if(ATt(b,Dk))b.cV();}
function AZG(a,b){a.pH(b);}
function AVb(a,b){var c,d,e,f,g;if(b===null)G(Bo(B(34)));c=a.fH;d=a.o5;e=0;f=b.k;while(e<f){g=b.X(e);if(g!==null){if(c.k>=d)a.y4(g);else{c.bG(g);a.pH(g);}}e=e+1|0;}a.mS=Bt(a.mS,c.k);}
var QQ=D(Cl);
var HK=D(B$);
var NI=D(0);
function HU(){var a=this;C.call(a);a.g4=null;a.id=null;a.ic=null;a.pr=0;}
function BkY(){var a=new HU();SN(a);return a;}
function SN(a){L(a);D3();a.g4=BkZ;a.id=null;a.ic=null;a.pr=0;}
function Xn(){var a=this;HU.call(a);a.mt=null;a.nk=0.0;a.zx=0.0;a.vg=0.0;}
function BaH(){var a=new Xn();AXq(a);return a;}
function AXq(a){SN(a);a.mt=Z();a.nk=0.0;a.zx=5.0;a.vg=0.699999988079071;D3();a.g4=Bj1;}
var Hp=D(0);
var Qn=D();
function WE(){var a=this;C.call(a);a.gJ=null;a.vf=null;a.k1=null;}
function AY9(a,b){var c=new WE();A7n(c,a,b);return c;}
function A7n(a,b,c){L(a);a.k1=BeD();a.vf=b;a.gJ=Bfa();a.gJ.bb(c);}
function AOw(a){var b;a.gJ.GF(a.k1.xp);b=a.gJ.ES();a.k1.zt=b.GV();return a.k1;}
function AX0(a){var b;b=a.gJ.Ha();return a.vf.m9.ji(O(T((b.bk()))));}
var B_=D(BI);
var Rs=D(B_);
function AB7(){var a=this;W.call(a);a.pD=0;a.ny=0;a.sR=0;}
function HB(a,b){var c=new AB7();ALh(c,a,b);return c;}
function Bep(a,b,c){var d=new AB7();AWq(d,a,b,c);return d;}
function ALh(a,b,c){Bs(a);a.ny=c;a.pD=b;}
function AWq(a,b,c,d){Bs(a);a.sR=d;a.ny=c;a.pD=b;}
function AHs(a){var b;b=Bac(a.pD);if(a.sR)b.bv.el(0,2048);b.ba=a.ny;return b;}
function Vd(){C.call(this);this.AP=null;}
function Bd8(){var a=new Vd();AVt(a);return a;}
function AVt(a){L(a);a.AP=AVu();}
function A3S(a,b,c){AMd(a.AP,$rt_ustr(b),c);}
function AVu(){var soundManager=new $rt_globals.SoundManager();soundManager.debugMode=false;return soundManager;}
function AMd(b,c,d){b.setup({url:c,onready:function(){d.onready();},ontimeout:function(status){d.ontimeout();}});}
var LT=D();
var Bk0=null;function Bk1(){Bk1=M(LT);A$f();}
function A$f(){Bk0=AYs();}
var E1=D(0);
var DM=D(Ct);
var Bk2=null;var Bk3=null;var Bk4=null;var Bk5=0.0;var Bk6=0.0;function Bk7(){Bk7=M(DM);A$U();}
function A$U(){Bk2=Z();Bk3=Z();Bk4=Z();Bk5=0.4000000059604645;Bk6=0.10000000149011612;}
var RC=D(DM);
var NW=D(0);
var Ih=D(C1);
function ACH(a,b,c,d){Gm(a,b);a.y=c;a.T=d;}
function ACi(b,c,d){return Bb1(0,b.data.length,b,c,c+d|0,0);}
function Ue(b){return ACi(b,0,b.data.length);}
function AIz(a,b,c,d){var e,f,g,h,i,j,k,l;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new Bv;i=K();V(I(V(I(i,B(277)),g),B(278)),f);BC(h,Q(i));G(h);}if(Be(a)<d)G(Xg());if(d<0){i=new Bv;h=K();I(V(I(h,B(279)),d),B(280));BC(i,Q(h));G(i);}j=a.y;k=0;while(k<d){g=c+1|0;f=j+1|0;e[c]=a.wk(j);k=k+1|0;c=g;j=f;}a.y=a.y+d|0;return a;}}e=b.data;i=new Bv;f=e.length;l=K();Bi(V(I(V(I(l,B(281)),c),B(54)),f),41);BC(i,Q(l));G(i);}
function A_t(a,b,c,d){var e,f,g,h,i,j,k,l;if(a.bZ())G(Dj());if(Be(a)<d)G(GG());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new Bv;i=K();V(I(V(I(i,B(282)),g),B(278)),f);BC(h,Q(i));G(h);}if(d<0){i=new Bv;h=K();I(V(I(h,B(279)),d),B(280));BC(i,Q(h));G(i);}j=a.y;k=0;while(k<d){g=j+1|0;l=c+1|0;a.pk(j,e[c]);k=k+1|0;j=g;c=l;}a.y=a.y+d|0;return a;}}e=b.data;i=new Bv;f=e.length;h=K();Bi(V(I(V(I(h,B(281)),c),B(54)),f),41);BC(i,Q(h));G(i);}
function AX8(a,b,c,d){var e,f,g,h,i,j;if(a.bZ())G(Dj());e=d-c|0;if(Be(a)<e)G(GG());if(c>=0&&c<b.i()){if(d>b.i()){f=new Bv;g=b.i();h=K();V(I(V(I(h,B(282)),d),B(283)),g);BC(f,Q(h));G(f);}if(c>d){f=new Bv;h=K();V(I(V(I(h,B(284)),c),B(285)),d);BC(f,Q(h));G(f);}i=a.y;while(c<d){j=i+1|0;g=c+1|0;a.pk(i,b.f(c));i=j;c=g;}a.y=a.y+e|0;return a;}f=new Bv;g=b.i();h=K();Bi(V(I(V(I(h,B(284)),c),B(54)),g),41);BC(f,Q(h));G(f);}
function Jb(a,b){return a.Dg(b,0,b.i());}
function T$(a){Gw(a);return a;}
function APf(a,b){Hj(a,b);return a;}
var HW=D(Ih);
function Rk(a,b,c,d){ACH(a,b,c,d);}
function AIB(a){var b,c,d,e;if(a.bZ())G(Dj());a:{b=Be(a);if(a.y>0){c=a.y;d=0;while(true){if(d>=b)break a;e=c+1|0;a.pk(d,a.wk(c));d=d+1|0;c=e;}}}a.y=b;a.T=a.fZ;a.eC=(-1);return a;}
function A$6(a){return a.d1();}
function S5(){var a=this;HW.call(a);a.AW=0;a.r5=0;a.oN=null;}
function Bb1(a,b,c,d,e,f){var g=new S5();AV5(g,a,b,c,d,e,f);return g;}
function AV5(a,b,c,d,e,f,g){Rk(a,c,e,f);a.r5=b;a.AW=g;a.oN=d;}
function A6d(a,b){return a.oN.data[b+a.r5|0];}
function A4t(a,b,c){a.oN.data[b+a.r5|0]=c;}
function AU$(a){return a.AW;}
var Oz=D();
function ADA(){U.call(this);this.Ka=null;}
function BcL(a){var b=new ADA();AHA(b,a);return b;}
function AHA(a,b){a.Ka=b;Bg(a);}
function A9C(a,b){return PF(b);}
var Oc=D();
var Bk8=0;function LE(){LE=M(Oc);A4a();}
function AEC(b,c,d,e){var f;LE();if(!Bk8){Np(b,c,d,e);return;}a:{f=BhP.r1();IL();if(f!==BhU&&BhP.r1()!==BhY){f=BhP;if(f.r1()!==BhZ){AEj(b,c,d,e);break a;}}AAb(b,c);}}
function AAb(b,c){var d,e,f,g,h,i,j;LE();d=Bii;e=c.it();f=c.bp();g=c.bl();h=c.jz();i=c.i5();j=c.ix();d.gQ(b,0,e,f,g,0,h,i,j);Bij.oj(b);}
function AEj(b,c,d,e){var f,g,h,i,j,k,l;LE();a:{if(!Bid.q8(B(286))){f=Bid;if(!f.q8(B(287))){f=Bij;if(!((CW(f)).q()).K(B(288))&&Bik===null){Np(b,c,d,e);break a;}}}f=Bii;g=c.it();h=c.bp();i=c.bl();j=c.jz();k=c.i5();l=c.ix();f.gQ(b,0,g,h,i,0,j,k,l);Bij.oj(b);}}
function Np(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;LE();f=Bii;g=c.it();h=c.bp();i=c.bl();j=c.jz();k=c.i5();l=c.ix();f.gQ(b,0,g,h,i,0,j,k,l);if(Bij===null&&d!=e)G(BG(B(289)));m=c.bp()/2|0;n=c.bl()/2|0;o=1;while(m>0&&n>0){p=Pw(m,n,c.eW());G4();p.zJ(Bj6);p.GK(c,0,0,c.bp(),c.bl(),0,0,m,n);if(o>1)c.be();f=Bii;j=p.it();k=p.bp();q=p.bl();g=p.jz();h=p.i5();l=p.ix();f.gQ(b,o,j,k,q,0,g,h,l);m=p.bp()/2|0;n=p.bl()/2|0;o=o+1|0;c=p;}}
function A4a(){Bk8=1;}
var FS=D(0);
function Px(){var a=this;C.call(a);a.l0=null;a.p$=null;a.k3=null;a.rC=null;}
function Bfb(a,b,c,d){var e=new Px();ASk(e,a,b,c,d);return e;}
function ASk(a,b,c,d,e){a.rC=b;a.l0=c;a.p$=d;a.k3=e;L(a);}
function A3l(a,b){var c,d,e;if(a.l0.readyState==4){if(a.l0.status!=200)a.p$.cu(a.k3);else{if(a.rC.fx){c=D6();d=a.k3;e=K();I(I(e,B(290)),d);c.em(Q(e));}a.p$.cE(a.k3,$rt_str(a.l0.responseText));}a.rC.m8();}}
function A6E(a,b){a.cC(b);}
function Py(){var a=this;C.call(a);a.iy=null;a.pE=null;a.mo=null;a.rV=null;}
function Bga(a,b,c,d){var e=new Py();AVR(e,a,b,c,d);return e;}
function AVR(a,b,c,d,e){a.rV=b;a.iy=c;a.pE=d;a.mo=e;L(a);}
function AVk(a,b){var c,d,e,f,g,h,i;if(a.iy.readyState==4){if(a.iy.status!=200)a.pE.cu(a.mo);else{if(a.rV.fx){c=D6();d=a.mo;e=K();I(I(e,B(291)),d);c.em(Q(e));}f=a.iy.response;g=Gn();h=g.jm();i=h.createElement("script");c=h.createTextNode(f);i.appendChild(c);h.body.appendChild(i);a.pE.cE(a.mo,$rt_str(a.iy.responseText));}a.rV.m8();}}
function AN0(a,b){a.cC(b);}
function Pz(){var a=this;Cc.call(a);a.mz=null;a.Fb=null;}
function Bar(a,b){var c=new Pz();A9x(c,a,b);return c;}
function A9x(a,b,c){a.Fb=b;a.mz=c;DB(a);}
function AJO(a,b){a.mz.ew(b);}
function A5h(a,b){a.mz.cu(b);}
function A$H(a,b,c){return a.mz.cE(b,null);}
function AXZ(a,b,c){return a.pI(b,c);}
function ABT(){Cp.call(this);this.I2=null;}
function Bf5(a){var b=new ABT();AIY(b,a);return b;}
function AIY(a,b){GE(a);a.I2=b;}
function PA(){var a=this;C.call(a);a.l2=null;a.rq=null;a.l8=null;a.oC=null;}
function Ba8(a,b,c,d){var e=new PA();A2A(e,a,b,c,d);return e;}
function A2A(a,b,c,d,e){a.oC=b;a.l2=c;a.rq=d;a.l8=e;L(a);}
function AIk(a,b){var c,d,e,f,g;if(a.l2.readyState==4){if(a.l2.status!=200)a.rq.cu(a.l8);else{if(a.oC.fx){c=D6();d=a.l8;e=K();I(I(e,B(290)),d);c.em(Q(e));}f=a.l2.response;g=(DO()).Lc(f);a.rq.cE(a.l8,Bef(f,g));}a.oC.m8();}}
function A4A(a,b){a.cC(b);}
function ABv(){U.call(this);this.DO=null;}
function BaA(a){var b=new ABv();A1l(b,a);return b;}
function A1l(a,b){a.DO=b;Bg(a);}
function ASi(a,b){return Sz(b);}
function PB(){var a=this;Cc.call(a);a.h8=null;a.qY=null;a.u3=0;a.wj=null;a.nu=null;}
function Bes(a,b,c,d,e){var f=new PB();A6Z(f,a,b,c,d,e);return f;}
function A6Z(a,b,c,d,e,f){a.nu=b;a.h8=c;a.qY=d;a.u3=e;a.wj=f;DB(a);}
function AMp(a,b){a.h8.ew(b);}
function AW8(a,b){a.h8.cu(b);}
function AW_(a,b,c){var d,e,f,g,h;d=$rt_globals.window.document;e=d.createElement("img");if(a.qY!==null){d=a.qY;e.setAttribute("crossOrigin",$rt_ustr(d));}a.nu.lg();A4Q(e,BdD(a,b,e));if(!a.u3){f=$rt_ustr(b);e.src=f;}else{g=a.wj;h=VC(c);f=K();I(I(I(I(f,B(292)),g),B(293)),h);f=$rt_ustr(Q(f));e.src=f;}return 0;}
function AMN(a,b,c){return a.pI(b,c);}
function PC(){var a=this;C.call(a);a.xK=null;a.FH=null;}
function Ba7(a,b){var c=new PC();A2Q(c,a,b);return c;}
function A2Q(a,b,c){a.FH=b;a.xK=c;L(a);}
function AJ5(a,b){a.xK.ew(b.loaded);}
function AQJ(a,b){a.cC(b);}
var D9=D(C1);
function AEg(a,b,c,d){Gm(a,b);a.y=c;a.T=d;}
function A$t(b,c,d){return Bbl(0,b.data.length,b,c,c+d|0,0);}
function AXa(b){return A$t(b,0,b.data.length);}
function AQe(a,b,c,d){var e,f,g,h,i,j,k;if(a.bZ())G(Dj());if(Be(a)<d)G(GG());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new Bv;i=K();V(I(V(I(i,B(294)),g),B(278)),f);BC(h,Q(i));G(h);}if(d<0){h=new Bv;i=K();I(V(I(i,B(279)),d),B(280));BC(h,Q(i));G(h);}j=a.y;k=0;while(k<d){g=j+1|0;f=c+1|0;a.kO(j,e[c]);k=k+1|0;j=g;c=f;}a.y=a.y+d|0;return a;}}e=b.data;h=new Bv;f=e.length;i=K();Bi(V(I(V(I(i,B(281)),c),B(54)),f),41);BC(h,Q(i));G(h);}
function Ly(a){GF(a);return a;}
function I2(a){Gw(a);return a;}
function AME(a,b){Jj(a,b);return a;}
function A5R(a,b){Hj(a,b);return a;}
function AMR(a){return I2(a);}
function AVW(a){return Ly(a);}
function ARp(a,b){return a.mP(b);}
function AUR(a,b){return a.qK(b);}
var FY=D(D9);
function Lr(a,b,c,d){AEg(a,b,c,d);}
function AN$(a,b){var c,d,e;if(b>=0&&b<a.T)return a.si(b);c=new Bv;d=a.T;e=K();Bi(V(I(V(I(e,B(264)),b),B(54)),d),41);BC(c,Q(e));G(c);}
function A$1(a,b,c){var d,e,f;if(a.bZ())G(Dj());if(b>=0&&b<a.T){a.kO(b,c);return a;}d=new Bv;e=a.T;f=K();Bi(V(I(V(I(f,B(264)),b),B(54)),e),41);BC(d,Q(f));G(d);}
function AZ$(a){return a.d1();}
function Fi(){var a=this;FY.call(a);a.ce=null;a.AJ=0;a.b_=0;}
function Mh(a,b,c,d,e,f,g){Lr(a,c,e,f);a.b_=b;a.ce=d;a.AJ=g;}
function A6A(a){return a.AJ;}
var MD=D(0);
function Qh(){var a=this;C.call(a);a.j8=0;a.KJ=0;a.fx=0;}
function BaW(){var a=new Qh();AN1(a);return a;}
function AN1(a){L(a);a.KJ=1;a.fx=1;}
function AWJ(a){return 0;}
function AQK(a){var b,c,d;b=Gn();c=b.LP();d=$rt_str(c.href);return d;}
function ANS(a){return a.j8;}
function A9f(a){a.j8=a.j8-1|0;}
function API(a){a.j8=a.j8+1|0;}
function AJ$(a,b,c,d,e,f){var g,h;a:{BfI();switch(Bk9.data[Bj(d)]){case 1:break;case 2:a.BB(b,c,e,f);break a;case 3:a.oR(b,c,f);break a;case 4:a.Cy(b,c,f);break a;case 5:f.cE(c,null);break a;default:g=new DK;h=K();I(I(h,B(295)),d);D7(g,Q(h));G(g);}a.tR(b,c,f);}}
function AIm(a,b,c,d){var e,f;if(a.fx){e=D6();f=K();I(I(f,B(296)),c);e.em(Q(f));}e=new $rt_globals.XMLHttpRequest();f=B4(Bfb(a,e,d,c),"handleEvent");e.onreadystatechange=f;a.lg();IJ(a,e,d);e.open("GET",$rt_ustr(c),!!b);e.setRequestHeader("Content-Type","text/plain; charset=utf-8");e.send();}
function AVX(a,b,c,d){var e,f;if(a.fx){e=D6();f=K();I(I(f,B(297)),c);e.em(Q(f));}e=new $rt_globals.XMLHttpRequest();f=B4(Bga(a,e,d,c),"handleEvent");e.onreadystatechange=f;a.lg();IJ(a,e,d);e.open("GET",$rt_ustr(c),!!b);e.setRequestHeader("Content-Type","text/plain; charset=utf-8");e.send();}
function A11(a,b,c,d){a.oR(b,c,Bar(a,d));}
function AZJ(a,b,c,d){var e,f,g;if(a.fx){e=D6();f=K();I(I(f,B(296)),c);e.em(Q(f));}e=new $rt_globals.XMLHttpRequest();g=B4(Ba8(a,e,d,c),"handleEvent");e.onreadystatechange=g;a.lg();IJ(a,e,d);e.open("GET",$rt_ustr(c),!!b);if(b){f="arraybuffer";e.responseType=f;}e.send();}
function AP3(a,b,c,d,e){a.HI(b,c,d,null,e);}
function AWr(a,b,c,d,e,f){var g;g=0;a.oR(b,c,Bes(a,f,e,g,d));}
function A4Q(b,c){b.addEventListener("load",B4(c,"handleEvent"),!!0);b.addEventListener("error",B4(c,"handleEvent"),!!0);}
function IJ(a,b,c){var d;d=B4(Ba7(a,c),"handleEvent");b.onprogress=d;}
var Kf=D();
var Bk9=null;function BfI(){BfI=M(Kf);APh();}
function APh(){Bk9=Bf((M8()).data.length);Bk9.data[Bj(Bke)]=1;Bk9.data[Bj(Bkf)]=2;Bk9.data[Bj(Bkg)]=3;Bk9.data[Bj(Bkh)]=4;Bk9.data[Bj(Bki)]=5;}
var Ul=D(BI);
var Fg=D(B$);
var AEl=D(Fg);
var Tg=D(Gv);
function BbI(a){var b=new Tg();A3B(b,a);return b;}
function A3B(a,b){K2(a,b);}
function LO(){var a=this;C.call(a);a.bc=null;a.k=0;a.gp=0;a.nE=null;}
function CG(){var a=new LO();AJA(a);return a;}
function Ep(a){var b=new LO();A$l(b,a);return b;}
function BdH(a,b){var c=new LO();KI(c,a,b);return c;}
function Bk$(a,b,c){var d=new LO();X$(d,a,b,c);return d;}
function Bft(a){var b=new LO();A8Q(b,a);return b;}
function Bk_(a,b,c,d){var e=new LO();S6(e,a,b,c,d);return e;}
function AJA(a){KI(a,1,16);}
function A$l(a,b){KI(a,1,b);}
function KI(a,b,c){L(a);a.gp=b;a.bc=Bc(C,c);}
function X$(a,b,c,d){L(a);a.gp=b;a.bc=TQ(d,c);}
function A8Q(a,b){S6(a,1,b,0,b.data.length);}
function S6(a,b,c,d,e){X$(a,b,e,(CW(c)).hj());a.k=e;BZ(c,d,a.bc,0,a.k);}
function ASl(a,b){var c,d,e;c=a.bc;d=c.data;if(a.k==d.length)c=a.nz(Bt(8,a.k*1.75|0));d=c.data;e=a.k;a.k=e+1|0;d[e]=b;}
function ANj(a,b){a.uB(b.bc,0,b.k);}
function AH9(a,b,c,d){if((c+d|0)<=b.k){a.uB(b.bc,c,d);return;}G(Bo((((((((K()).h(B(298))).A(c)).h(B(299))).A(d)).h(B(300))).A(b.k)).d()));}
function AJq(a,b,c,d){var e,f,g;e=a.bc;f=e.data;g=a.k+d|0;if(g>f.length)e=a.nz(Bt(Bt(8,g),a.k*1.75|0));BZ(b,c,e,a.k,d);a.k=g;}
function A$i(a,b){if(b<a.k)return a.bc.data[b];G(Dh((((((K()).h(B(301))).A(b)).h(B(302))).A(a.k)).d()));}
function AKG(a,b,c){var d,e,f;a:{d=a.bc;if(!(!c&&b!==null)){e=0;f=a.k;while(e<f){if(d.data[e]===b){a.vC(e);return 1;}e=e+1|0;}}else{e=0;f=a.k;while(true){if(e>=f)break a;if(b.K(d.data[e])){a.vC(e);return 1;}e=e+1|0;}}}return 0;}
function ARE(a,b){var c,d,e;if(b>=a.k)G(Dh((((((K()).h(B(301))).A(b)).h(B(302))).A(a.k)).d()));c=a.bc;d=c.data;e=d[b];a.k=a.k-1|0;if(!a.gp)d[b]=d[a.k];else BZ(c,b+1|0,c,b,a.k-b|0);d[a.k]=null;return e;}
function AK4(a,b,c){var d,e,f,g,h,i;d=a.k;if(c>=d)G(Dh((((((K()).h(B(303))).A(c)).h(B(302))).A(a.k)).d()));if(b>c)G(Dh((((((K()).h(B(304))).A(b)).h(B(305))).A(c)).d()));e=a.bc;f=(c-b|0)+1|0;g=d-f|0;if(a.gp){h=b+f|0;BZ(e,h,e,b,d-h|0);}else{i=Bt(g,c+1|0);BZ(e,i,e,b,d-i|0);}i=g;while(i<d){e.data[i]=null;i=i+1|0;}a.k=g;}
function AXn(a){var b;if(!a.k)G(CJ(B(306)));a.k=a.k-1|0;b=a.bc.data[a.k];a.bc.data[a.k]=null;return b;}
function AVm(a){if(!a.k)G(CJ(B(306)));return a.bc.data[a.k-1|0];}
function A_L(a){if(!a.k)G(CJ(B(306)));return a.bc.data[0];}
function A0Q(a){Q0(a.bc,0,a.k,null);a.k=0;}
function ATL(a,b){var c;if(b<0)G(Bo((((K()).h(B(307))).A(b)).d()));c=a.k+b|0;if(c>a.bc.data.length)a.nz(Bt(Bt(8,c),a.k*1.75|0));return a.bc;}
function A0i(a,b){var c,d,e;c=a.bc;d=TQ((CW(c)).hj(),b);e=d.data;BZ(c,0,d,0,BN(a.k,e.length));a.bc=d;return d;}
function ANK(a){if(Bjt)return Lx(a,1);if(a.nE===null)a.nE=BcQ(a);return a.nE.fi();}
function AIj(a,b){var c;if(b<0)G(Bo((((K()).h(B(308))).A(b)).d()));if(a.k<=b)return;c=b;while(c<a.k){a.bc.data[c]=null;c=c+1|0;}a.k=b;}
function AX$(a){var b,c,d,e,f,g;if(!a.gp)return Nj(a);b=a.bc;c=1;d=0;e=a.k;while(d<e){f=b.data;c=c*31|0;g=f[d];if(g!==null)c=c+g.cq()|0;d=d+1|0;}return c;}
function AOP(a,b){var c,d,e,f,g,h,i,j;if(b===a)return 1;if(!a.gp)return 0;if(!(b instanceof LO))return 0;c=b;if(!c.gp)return 0;d=a.k;if(d!=c.k)return 0;e=a.bc;f=c.bc;g=0;a:{while(g<d){b:{h=f.data;i=e.data[g];j=h[g];if(i!==null){if(i.K(j))break b;else break a;}if(j!==null)break a;}g=g+1|0;}return 1;}return 0;}
function ATM(a){var b,c,d,e;if(!a.k)return B(309);b=a.bc;c=b.data;d=AVa(32);d.jj(91);d.uM(c[0]);e=1;while(e<a.k){d.yB(B(310));d.uM(c[e]);e=e+1|0;}d.jj(93);return d.d();}
function AIG(b){return Bft(b);}
function Lz(){CE.call(this);this.w$=0;}
function Bla(a){var b=new Lz();Xq(b,a);return b;}
function Xq(a,b){EX(a,b);}
function AXD(a,b,c,d){var e;e=a.h7();d.bo(e,b-d.dI(e)|0);a.w$=b;return b;}
function AJC(a){return a.w$;}
function AS4(a){return B(311);}
function A6N(a,b){return 0;}
var HG=D(0);
function JB(){BO.call(this);this.fO=0;}
function AQH(a){var b=new JB();AJH(b,a);return b;}
function AJH(a,b){CY(a);a.fO=b;}
function A6z(a,b){a.j=b;}
function AZs(a,b,c,d){var e,f,g;e=b+1|0;if(e>d.D()){d.dt=1;return (-1);}f=c.f(b);if(b>d.dA()){g=c.f(b-1|0);if(Cb(g))return (-1);}if(a.fO!=f)return (-1);return a.j.c(e,c,d);}
function AM7(a,b,c,d){var e,f,g,h,i;if(!(c instanceof BL))return GI(a,b,c,d);e=c;f=d.dA();g=d.D();while(true){if(b>=g)return (-1);h=e.dQ(a.fO,b);if(h<0)return (-1);if(h>f&&Cb(e.f(h-1|0))){b=h+1|0;continue;}i=a.j;b=h+1|0;if(i.c(b,c,d)>=0)break;}return h;}
function A0e(a,b,c,d,e){var f,g,h;if(!(d instanceof BL))return GO(a,b,c,d,e);f=e.dA();g=d;a:{while(true){if(c<b)return (-1);h=g.ke(a.fO,c);if(h<0)break a;if(h<b)break a;if(h>f&&Cb(g.f(h-1|0))){c=h+(-2)|0;continue;}if(a.j.c(h+1|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function ATr(a){var b,c;b=a.fO;c=K();Bi(c,b);return Q(c);}
function AIa(a,b){if(b instanceof DN)return 0;if(b instanceof DJ)return 0;if(b instanceof Db)return 0;if(b instanceof DI)return 0;if(b instanceof JG)return 0;if(!(b instanceof JB))return 1;return b.fO!=a.fO?0:1;}
function ATx(a,b){return 1;}
var AGp=D(Eh);
function Bd2(a,b){var c=new AGp();AK1(c,a,b);return c;}
function AK1(a,b,c){U1(a,b,c);}
var Op=D();
var Blb=null;function Blc(){Blc=M(Op);AK7();}
function AK7(){var b;Blb=Cf(16384);b=0;while(b<16384){Blb.data[b]=AFE((b+0.5)/16384.0*6.2831854820251465);b=b+1|0;}Blb.data[0]=0.0;Blb.data[4096]=1.0;Blb.data[8192]=0.0;Blb.data[12288]=(-1.0);}
var Ng=D(0);
function EA(){CK.call(this);this.e0=null;}
function BdV(a,b,c,d){var e=new EA();Lm(e,a,b,c,d);return e;}
function Lm(a,b,c,d,e){FB(a,c,d,e);a.e0=b;}
function AX4(a,b,c,d){var e,f,g,h;e=a.e0.he();f=a.e0.gX();g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.bm.b5()|0)>d.D())break a;h=a.bm.bB(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.j.c(b,c,d);if(h>=0)break;b=b-a.bm.b5()|0;g=g+(-1)|0;}return h;}if((b+a.bm.b5()|0)>d.D()){d.dt=1;return (-1);}h=a.bm.bB(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function AYw(a){return a.e0.d();}
function Db(){var a=this;BO.call(a);a.dp=null;a.oQ=0;}
function A3v(a){var b=new Db();AD9(b,a);return b;}
function AD9(a,b){CY(a);a.dp=b.jS();a.oQ=b.bs;}
function A0H(a,b,c,d){var e,f,g,h,i,j;e=d.D();if(b<e){f=b+1|0;g=c.f(b);if(a.n(g)){h=a.j.c(f,c,d);if(h>0)return h;}if(f<e){i=f+1|0;j=c.f(f);if(G_(g,j)&&a.n(Ds(g,j)))return a.j.c(i,c,d);}}return (-1);}
function A$B(a){var b,c,d;b=!a.oQ?B(39):B(40);c=a.dp.d();d=K();I(I(I(d,B(41)),b),c);return Q(d);}
function AMg(a,b){return a.dp.n(b);}
function AIK(a,b){if(b instanceof DI)return Jg(a.dp,b.p7());if(b instanceof DN)return Jg(a.dp,b.mG());if(b instanceof Db)return Hq(a.dp,b.dp);if(!(b instanceof DJ))return 1;return Hq(a.dp,b.rN());}
function AOj(a){return a.dp;}
function A8L(a,b){a.j=b;}
function ALR(a,b){return 1;}
function X0(){var a=this;C.call(a);a.rF=null;a.lE=null;a.v3=0.0;a.nm=null;a.sJ=0.0;a.z2=0.0;a.w2=0.0;a.us=0;a.vD=0;a.sy=0;a.tS=0;a.Ao=0;a.yA=0.0;}
function ADM(){var a=new X0();AU_(a);return a;}
function AU_(a){L(a);DP();a.rF=BjT;a.lE=Z();a.v3=0.0;a.nm=Z();a.sJ=0.0;a.z2=0.0;a.w2=0.0;a.us=1;a.vD=1;a.sy=0;a.tS=0;a.Ao=1;a.yA=1.0;}
var Ek=D();
var Q9=D(Ek);
function BL(){var a=this;C.call(a);a.V=null;a.km=0;}
var Bld=null;function Ia(){Ia=M(BL);AT0();}
function MH(a){var b=new BL();IP(b,a);return b;}
function GH(a,b,c){var d=new BL();O2(d,a,b,c);return d;}
function BfX(a,b,c){var d=new BL();O7(d,a,b,c);return d;}
function IP(a,b){var c,d,e;Ia();c=b.data;L(a);d=c.length;a.V=B8(d);e=0;while(e<d){a.V.data[e]=c[e];e=e+1|0;}}
function O2(a,b,c,d){var e,f;Ia();L(a);a.V=B8(d);e=0;while(e<d){f=b.data;a.V.data[e]=f[e+c|0];e=e+1|0;}}
function O7(a,b,c,d){var e,f,g,h,i,j,k;Ia();L(a);a.V=B8(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.V.data;j=e+1|0;g[e]=i&65535;}else{g=a.V.data;k=e+1|0;g[e]=F9(i);g=a.V.data;j=k+1|0;g[k]=FN(i);}f=f+1|0;c=h;e=j;}if(e<a.V.data.length)a.V=Qa(a.V,e);}
function AX2(a,b){if(b>=0&&b<a.V.data.length)return a.V.data[b];G(KH());}
function A1u(a){return a.V.data.length;}
function A3k(a){return a.V.data.length?0:1;}
function ALA(a,b,c,d,e){var f,g,h;if(b>=0&&b<=c&&c<=a.i()&&e>=0){f=d.data;if((e+(c-b|0)|0)<=f.length){while(b<c){g=e+1|0;h=b+1|0;f[e]=a.f(b);e=g;b=h;}return;}}G(Dl());}
function A6Y(a,b,c){var d,e,f;if((c+b.i()|0)>a.i())return 0;d=0;while(d<b.i()){e=b.f(d);f=c+1|0;if(e!=a.f(c))return 0;d=d+1|0;c=f;}return 1;}
function A3r(a,b){if(a===b)return 1;return a.v7(b,0);}
function A0F(a,b){var c,d,e,f;if(a===b)return 1;if(b.i()>a.i())return 0;c=0;d=a.i()-b.i()|0;while(d<a.i()){e=a.f(d);f=c+1|0;if(e!=b.f(c))return 0;d=d+1|0;c=f;}return 1;}
function A51(a,b,c){var d,e,f,g;d=Bt(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.V.data.length)return (-1);if(a.V.data[d]==e)break;d=d+1|0;}return d;}f=F9(b);g=FN(b);while(true){if(d>=(a.V.data.length-1|0))return (-1);if(a.V.data[d]==f&&a.V.data[d+1|0]==g)break;d=d+1|0;}return d;}
function A0E(a,b){return a.dQ(b,0);}
function AX5(a,b,c){var d,e,f,g,h,i;d=BN(c,a.i()-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.V.data[d]==e)break;d=d+(-1)|0;}return d;}f=F9(b);g=FN(b);while(true){if(d<1)return (-1);if(a.V.data[d]==g){h=a.V.data;i=d-1|0;if(h[i]==f)break;}d=d+(-1)|0;}return i;}
function ANC(a,b){return a.ke(b,a.i()-1|0);}
function A0n(a,b,c){var d,e,f;d=Bt(0,c);e=a.i()-b.i()|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=b.i())break a;if(a.f(d+f|0)!=b.f(f))break;f=f+1|0;}d=d+1|0;}return d;}
function A6v(a,b){return a.rz(b,0);}
function ALt(a,b,c){var d,e;d=BN(c,a.i()-b.i()|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.i())break a;if(a.f(d+e|0)!=b.f(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function ANk(a,b){return a.wv(b,a.i());}
function AH6(a,b,c){if(b>c)G(Dl());return GH(a.V,b,c-b|0);}
function ANG(a,b){return a.cA(b,a.i());}
function ALJ(a,b,c){return a.cA(b,c);}
function AWg(a,b){var c,d,e;c=a.i()-b.i()|0;d=0;while(d<=c){e=0;while(true){if(e>=b.i())return 1;if(a.f(d+e|0)!=b.f(e))break;e=e+1|0;}d=d+1|0;}return 0;}
function A7C(a,b,c){var d,e,f,g;d=K();e=a.i()-b.i()|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=b.i()){d.e2(c);f=f+(b.i()-1|0)|0;break a;}if(a.f(f+g|0)!=b.f(g))break;g=g+1|0;}d.bi(a.f(f));}f=f+1|0;}d.e2(a.dZ(f));return d.d();}
function A3K(a){var b,c;b=0;c=a.i()-1|0;a:{while(b<=c){if(a.f(b)>32)break a;b=b+1|0;}}while(b<=c&&a.f(c)<=32){c=c+(-1)|0;}return a.cA(b,c+1|0);}
function AJG(a){return a;}
function A3q(a){var b,c,d;b=B8(a.V.data.length);c=0;while(true){d=b.data;if(c>=d.length)break;d[c]=a.V.data[c];c=c+1|0;}return b;}
function ACp(b){var c,d;Ia();c=new BL;d=B8(1);d.data[0]=b;IP(c,d);return c;}
function JF(b){Ia();return ((K()).A(b)).d();}
function AUm(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BL))return 0;c=b;if(c.i()!=a.i())return 0;d=0;while(d<c.i()){if(a.f(d)!=c.f(d))return 0;d=d+1|0;}return 1;}
function AQc(a,b){return a.Hc(AH3(b.d()));}
function A54(a,b){var c,d;c=Xk(b,Ue(a.V));if(c.Im()&&!Cd(c)&&BE(c)==ED(c))return H7(c);d=Cw(Be(c));c.D9(d);return d;}
function A59(a){var b,c,d,e;a:{if(!a.km){b=a.V.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.km=(31*a.km|0)+e|0;d=d+1|0;}}}return a.km;}
function A5r(a){var b,c,d,e,f,g,h,i;if(a.bH())return a;b=Bf(a.V.data.length);c=0;d=0;while(d<a.V.data.length){a:{if(d!=(a.V.data.length-1|0)&&Cb(a.V.data[d])){e=a.V.data;f=d+1|0;g=e[f];if(B2(g)){h=b.data;i=c+1|0;h[c]=EI(Ds(a.V.data[d],a.V.data[f]));d=f;break a;}}h=b.data;i=c+1|0;h[c]=DS(a.V.data[d]);}d=d+1|0;c=i;}return BfX(b,0,c);}
function A32(a,b){return YM(FW(b),a.d());}
function AUg(a,b,c){return MT(FW(b),a.d(),c);}
function ALW(a,b,c){return AGy(F1(FW(b),a.d()),c);}
function AT0(){Bld=Bel();}
function FX(){Fm.call(this);this.JH=null;}
function MB(a){J5(a);a.JH=Cw(1);}
var NS=D(FX);
var Ble=null;function A4z(){A4z=M(NS);AWf();}
function BdL(){var a=new NS();U3(a);return a;}
function U3(a){A4z();MB(a);}
function ALU(a,b,c,d){ATA(b,c,d);}
function AWf(){Ble=BdL();}
function ABl(){var a=this;F4.call(a);a.v_=0;a.rL=0;a.qA=null;}
function Be1(a,b,c,d,e,f){var g=new ABl();ANb(g,a,b,c,d,e,f);return g;}
function ANb(a,b,c,d,e,f,g){M_(a,c,e,f);a.rL=b;a.v_=g;a.qA=d;}
function A57(a,b){return a.qA.data[b+a.rL|0];}
function A4x(a,b,c){a.qA.data[b+a.rL|0]=c;}
function AHu(a){return a.v_;}
var CC=D(Y);
var Blf=null;var Blg=null;var Blh=null;var Bli=null;var Blj=null;var Blk=null;var Bll=null;var Blm=null;var Bln=null;var Blo=null;var Blp=null;function A5j(){A5j=M(CC);AJ4();}
function DZ(a,b){var c=new CC();ACV(c,a,b);return c;}
function Kq(){A5j();return Blp.dX();}
function ACV(a,b,c){A5j();BJ(a,b,c);}
function AJ4(){Blf=DZ(B(312),0);Blg=DZ(B(313),1);Blh=DZ(B(314),2);Bli=DZ(B(315),3);Blj=DZ(B(316),4);Blk=DZ(B(317),5);Bll=DZ(B(318),6);Blm=DZ(B(319),7);Bln=DZ(B(320),8);Blo=DZ(B(321),9);Blp=H(CC,[Blf,Blg,Blh,Bli,Blj,Blk,Bll,Blm,Bln,Blo]);}
var Ru=D(Dx);
function Bcj(a){var b=new Ru();AS6(b,a);return b;}
function AS6(a,b){Hg(a,b,2.0,4.0);}
function AOM(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(h.eq(2))break a;BD();i=BhF;break a;}k=e.data;n=f+1|0;k[f]=(192|l>>6)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else if(!JV(l)){if((f+3|0)>g){j=j+(-1)|0;if(h.eq(3))break a;BD();i=BhF;break a;}k=e.data;o=f+1|0;k[f]=(224|l>>12)<<24>>24;n=o+1|0;k[o]=(128|l>>6&63)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else{if
(!Cb(l)){i=Cm(1);break a;}if(j>=d){if(h.Ig())break a;BD();i=BhG;break a;}n=j+1|0;p=k[j];if(!B2(p)){j=n+(-2)|0;i=Cm(1);break a;}if((f+4|0)>g){j=n+(-2)|0;if(h.eq(4))break a;BD();i=BhF;break a;}k=e.data;q=Ds(l,p);j=f+1|0;k[f]=(240|q>>18)<<24>>24;o=j+1|0;k[j]=(128|q>>12&63)<<24>>24;j=o+1|0;k[o]=(128|q>>6&63)<<24>>24;m=j+1|0;k[j]=(128|q&63)<<24>>24;j=n;}c=j;f=m;}j=c;}h.gd(j);h.ft(f);return i;}
var Jq=D();
function AAI(a){L(a);}
var If=D(0);
function FP(){var a=this;Jq.call(a);a.qk=0;a.cW=null;a.y7=0.0;a.xu=0;a.jd=0;a.jO=0;a.A3=0;}
var Blq=null;var Blr=null;function V0(){V0=M(FP);A$7();}
function Bls(){var a=new FP();H6(a);return a;}
function Blt(a){var b=new FP();M4(b,a);return b;}
function AE4(b,c,d){V0();return Be$(b,c);}
function H6(a){V0();M4(a,11);}
function M4(a,b){V0();AAI(a);a.jO=(-1);if(b<0)G(C4());a.qk=0;if(!b)b=1;a.cW=O0(a,b);a.jd=a.cW.data.length;a.y7=0.75;MW(a);}
function O0(a,b){return Bc(Nn,b);}
function MW(a){a.xu=a.cW.data.length*a.y7|0;}
function ACy(a,b){var c,d,e;VI(a);try{c=b.cq();d=(c&2147483647)%a.cW.data.length|0;e=a.cW.data[d];while(e!==null){if(e.x4(b,c))return e.eQ;e=e.jW;}return null;}finally{JY(a);}}
function ARx(a,b,c){var d,e,f,g,h,i,j;VI(a);try{if(b!==null&&c!==null){d=b.cq();e=d&2147483647;f=e%a.cW.data.length|0;g=a.cW.data[f];while(g!==null&&!g.x4(b,d)){g=g.jW;}if(g!==null){h=g.eQ;g.eQ=c;return h;}a.A3=a.A3+1|0;i=a.qk+1|0;a.qk=i;if(i>a.xu){a.l7();f=e%a.cW.data.length|0;}if(f<a.jd)a.jd=f;if(f>a.jO)a.jO=f;j=AE4(b,c,d);j.jW=a.cW.data[f];a.cW.data[f]=j;return null;}G(I4());}finally{JY(a);}}
function APv(a){var b,c,d,e,f,g,h,i,j;b=(a.cW.data.length<<1)+1|0;if(!b)b=1;c=(-1);d=O0(a,b);e=a.jO+1|0;f=b;while(true){e=e+(-1)|0;if(e<a.jd)break;g=a.cW.data[e];while(g!==null){h=(g.Jk()&2147483647)%b|0;if(h<f)f=h;if(h>c)c=h;i=d.data;j=g.jW;g.jW=i[h];i[h]=g;g=j;}}a.jd=f;a.jO=c;a.cW=d;MW(a);}
function A$7(){Blq=Bfl();Blr=Bbh();}
function Vs(){FP.call(this);this.pf=null;}
function Bbs(){var a=new Vs();AQ6(a);return a;}
function Bbx(a){var b=new Vs();ANQ(b,a);return b;}
function AQ6(a){H6(a);}
function ANQ(a,b){H6(a);a.pf=b;}
function AQj(a,b){var c,d;c=ACy(a,b);d=!(c instanceof BL)?null:c;if(d===null&&a.pf!==null)d=a.pf.zk(b);return d;}
function AFT(){var a=this;FY.call(a);a.yR=0;a.sc=0;a.rg=null;}
function Bbl(a,b,c,d,e,f){var g=new AFT();AZj(g,a,b,c,d,e,f);return g;}
function AZj(a,b,c,d,e,f,g){Lr(a,c,e,f);a.sc=b;a.yR=g;a.rg=d;}
function ARB(a,b){return a.rg.data[b+a.sc|0];}
function AQT(a,b,c){a.rg.data[b+a.sc|0]=c;}
function A6t(a){return a.yR;}
var ACL=D();
var Lb=D(0);
var SA=D();
var DD=D(B_);
var ADy=D(DD);
var FG=D();
function KV(a){L(a);}
function A9r(a,b,c,d){var e,f,g,h;e=0;while(e<d){f=a.xq();if(f<0){if(!e)e=(-1);return e;}g=b.data;h=c+1|0;g[c]=f<<24>>24;e=e+1|0;c=h;}if(d<=0)d=(-1);return d;}
function A2d(a){}
function Xr(){var a=this;FG.call(a);a.rh=0;a.rH=null;}
function BfZ(a){var b=new Xr();AYS(b,a);return b;}
function AYS(a,b){a.rH=b;KV(a);}
function A4F(a){var b,c;if(a.rh==Ud(a.rH))return (-1);b=a.rH;c=a.rh;a.rh=c+1|0;return VS(b,c)&255;}
function Fv(){var a=this;S.call(a);a.Gb=0.0;a.BW=0.0;a.B_=0.0;a.Ix=0.0;}
function Bb_(a,b,c,d){var e=new Fv();Li(e,a,b,c,d);return e;}
function Li(a,b,c,d,e){BY(a);a.Gb=b;a.BW=c;a.B_=e;a.Ix=d*3.1415927410125732*(d%2|0?(-1):1);}
var SW=D(Fv);
function Be5(a,b,c,d){var e=new SW();AKq(e,a,b,c,d);return e;}
function AKq(a,b,c,d,e){Li(a,b,c,d,e);}
var DW=D(Y);
var Blu=null;var Blv=null;var Blw=null;var Blx=null;var Bly=null;var Blz=null;function BfV(){BfV=M(DW);ARo();}
function H3(a,b){var c=new DW();VA(c,a,b);return c;}
function VA(a,b,c){BfV();BJ(a,b,c);}
function ARo(){Blu=H3(B(322),0);Blv=H3(B(211),1);Blw=H3(B(323),2);Blx=H3(B(324),3);Bly=H3(B(325),4);Blz=H(DW,[Blu,Blv,Blw,Blx,Bly]);}
var My=D(C9);
var Bkd=null;function KY(){KY=M(My);ALE();}
function BcD(){var a=new My();Xe(a);return a;}
function Xe(a){KY();Hf(a,B(326),Bc(BL,0));}
function ASK(a){return Bb7(a);}
function AUI(a){return Bcj(a);}
function ALE(){Bkd=BcD();}
var Em=D(0);
var NF=D(0);
var FD=D();
var BlA=null;var BlB=null;function BlC(){BlC=M(FD);A1j();}
function A1j(){BlA=Z();BlB=Z();}
function Yj(){Bz.call(this);this.gq=0;}
function A_5(a){var b=new Yj();A_F(b,a);return b;}
function A_F(a,b){Cu(a);a.gq=b;}
function A2U(a,b,c,d){var e,f,g;e=!d.hB()?c.i()-b|0:d.D()-b|0;if(!e){d.bo(a.gq,0);return a.j.c(b,c,d);}if(e<2){f=c.f(b);g=97;}else{f=c.f(b);g=c.f(b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:d.bo(a.gq,0);return a.j.c(b,c,d);case 13:if(g!=10){d.bo(a.gq,0);return a.j.c(b,c,d);}d.bo(a.gq,0);return a.j.c(b,c,d);default:}return (-1);}
function AKk(a,b){var c;c=!b.dI(a.gq)?0:1;b.bo(a.gq,(-1));return c;}
function AMx(a){return B(327);}
var IK=D(0);
function Ff(){C.call(this);this.C2=null;}
function LJ(a){AF9(a,Rx());}
function AF9(a,b){L(a);a.C2=b;}
function Uh(){var a=this;Ff.call(a);a.kc=null;a.hC=null;a.eI=0;a.kN=0;a.ry=0;a.vy=0;}
function BbV(a,b){var c=new Uh();A0j(c,a,b);return c;}
function A0j(a,b,c){LJ(a);a.vy=(-1);if(c<0)G(C4());a.kc=b;a.hC=B8(Bt(64,c));}
function AOQ(a){OD(a);a.kc.gC();a.kc=null;}
function AVP(a){var b,c,d,e;OD(a);if(a.ry&&a.eI>=a.kN)return null;b=K();a:{while(true){if(a.eI>=a.kN&&!LA(a,0))break a;c=a.hC.data;d=a.eI;a.eI=d+1|0;e=c[d];if(e==10)break;if(e==13){if(a.eI>=a.kN&&!LA(a,0))break a;if(a.hC.data[a.eI]!=10)break a;a.eI=a.eI+1|0;break a;}b.bi(e);}}return b.d();}
function LA(a,b){var c;if(a.ry)return 0;a:{while(true){if(b>=a.hC.data.length)break a;c=a.kc.EY(a.hC,b,a.hC.data.length-b|0);if(c==(-1)){a.ry=1;break a;}if(!c)break;b=b+c|0;}}a.kN=b;a.eI=0;a.vy=(-1);return 1;}
function OD(a){if(a.kc!==null)return;G(BbO());}
var UA=D(DG);
var Hi=D(Eb);
var JH=D(0);
var AA_=D();
function Gg(){var a=this;C.call(a);a.cH=null;a.qn=null;a.HO=null;a.o$=null;a.o_=null;a.kL=null;a.kK=null;}
function BlD(a){var b=new Gg();Of(b,a);return b;}
function Of(a,b){L(a);a.kL=Z();a.kK=Z();a.qn=b;}
function A_D(a){return a.qn.fN.ji(O(T(((a.cH.JA()).bk()))));}
function AKu(a){return a.qn.fN.ji(O(T(((a.cH.LH()).bk()))));}
function AHB(a){var b;b=a.cH.Hh();a.kL.w=b.cQ();a.kL.v=b.cM();return a.kL;}
function AV2(a){var b;b=a.cH.C5();a.kK.w=b.cQ();a.kK.v=b.cM();return a.kK;}
function A2Z(a){var b;b=a.cH.cK();if(b>0){D3();if(b<BlE.data.length)return BlE.data[b];}D3();return BkZ;}
function A58(a,b){a.HO=b;}
var ACw=D();
var PY=D(CH);
function Re(){var a=this;C.call(a);a.dn=null;a.uW=null;a.cg=null;a.cG=0;}
function Bbf(){var a=new Re();AV4(a);return a;}
function AV4(a){L(a);a.cg=DH();}
var Kj=D(0);
function VG(){var a=this;C.call(a);a.e=null;a.hq=0;a.lN=null;a.yr=null;a.lr=null;a.w1=null;a.en=null;a.cT=null;a.JB=0;a.gc=0.0;}
function Bdg(){var a=new VG();AJS(a);return a;}
function BlF(a){var b=new VG();AEa(b,a);return b;}
function BlG(a,b){var c=new VG();AD6(c,a,b);return c;}
function AJS(a){AEa(a,5000);}
function AEa(a,b){AD6(a,b,null);}
function AD6(a,b,c){L(a);a.hq=0;a.lN=CP();a.yr=CP();a.lr=CP();a.w1=Z();a.en=B1(1.0,1.0,1.0,1.0);a.gc=0.75;if(c!==null)a.e=Bbj(b,0,1,0,c);else a.e=Ba0(b,0,1,0);a.lN.xn(0.0,0.0,Bid.bp(),Bid.bl());a.hq=1;}
function A$L(a,b){a.en.Ge(b);}
function AQn(a,b,c,d,e){a.en.IP(b,c,d,e);}
function ALv(a,b){a.lN.hP(b);a.hq=1;}
function A$S(a,b){if(a.cT!==null)G(CJ(B(328)));a.cT=b;if(a.hq){a.lr.hP(a.lN);OX(a.lr.a,a.yr.a);a.hq=0;}a.e.K9(a.lr,Pt(a.cT));}
function ARi(a,b,c,d){var e,f;e=a.cT;Hb();if(e===BjR){f=a.gc*0.5;Km(a,b-f,c-f,d,b+f,c+f,d);return;}if(a.cT!==BlH){Fn(a,BjS,null,1);a.e.In(a.en);a.e.o(b,c,d);return;}f=a.gc*0.5;a.E6(b-f,c-f,d-f,a.gc,a.gc,a.gc);}
function Km(a,b,c,d,e,f,g){a.vN(b,c,d,e,f,g,a.en,a.en);}
function Gd(a,b,c,d,e){a.vN(b,c,0.0,d,e,0.0,a.en,a.en);}
function A$R(a,b,c,d,e,f,g,h,i){var j;j=a.cT;Hb();if(j===BlH){a.BC(b,c,e,f,a.gc,h,i);return;}Fn(a,BjR,null,2);a.e.vr(h.b9,h.b8,h.b7,h.b6);a.e.o(b,c,d);a.e.vr(i.b9,i.b8,i.b7,i.b6);a.e.o(e,f,g);}
function A0f(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v;Hb();Fn(a,BjR,BlH,8);i=g.iA();j=h.iA();k=(a.w1.bN(e-c,b-d)).F_();l=f*0.5;m=k.w*l;n=k.v*l;if(a.cT!==BjR){a.e.p(i);a.e.o(b+m,c+n,0.0);a.e.p(i);o=a.e;l=b-m;p=c-n;o.o(l,p,0.0);a.e.p(j);o=a.e;q=d+m;r=e+n;o.o(q,r,0.0);a.e.p(j);a.e.o(d-m,e-n,0.0);a.e.p(j);a.e.o(q,r,0.0);a.e.p(i);a.e.o(l,p,0.0);}else{a.e.p(i);o=a.e;p=b+m;q=c+n;o.o(p,q,0.0);a.e.p(i);o=a.e;s=b-m;t=c-n;o.o(s,t,0.0);a.e.p(j);o=a.e;l=d+m;r=e+n;o.o(l,r,0.0);a.e.p(j);o=a.e;u=d-m;v=e-n;o.o(u,v,0.0);a.e.p(j);a.e.o(l,
r,0.0);a.e.p(i);a.e.o(p,q,0.0);a.e.p(j);a.e.o(u,v,0.0);a.e.p(i);a.e.o(s,t,0.0);}}
function AVE(a,b,c,d,e,f,g){var h,i,j,k,l,m;h= -g;i=a.en.iA();j=a.cT;Hb();if(j===BjR){Fn(a,BjR,BlH,24);a.e.p(i);a.e.o(b,c,d);a.e.p(i);k=a.e;l=b+e;k.o(l,c,d);a.e.p(i);a.e.o(l,c,d);a.e.p(i);k=a.e;h=d+h;k.o(l,c,h);a.e.p(i);a.e.o(l,c,h);a.e.p(i);a.e.o(b,c,h);a.e.p(i);a.e.o(b,c,h);a.e.p(i);a.e.o(b,c,d);a.e.p(i);a.e.o(b,c,d);a.e.p(i);k=a.e;m=c+f;k.o(b,m,d);a.e.p(i);a.e.o(b,m,d);a.e.p(i);a.e.o(l,m,d);a.e.p(i);a.e.o(l,m,d);a.e.p(i);a.e.o(l,m,h);a.e.p(i);a.e.o(l,m,h);a.e.p(i);a.e.o(b,m,h);a.e.p(i);a.e.o(b,m,h);a.e.p(i);a.e.o(b,
m,d);a.e.p(i);a.e.o(l,c,d);a.e.p(i);a.e.o(l,m,d);a.e.p(i);a.e.o(l,c,h);a.e.p(i);a.e.o(l,m,h);a.e.p(i);a.e.o(b,c,h);a.e.p(i);a.e.o(b,m,h);}else{Fn(a,BjR,BlH,36);a.e.p(i);a.e.o(b,c,d);a.e.p(i);k=a.e;l=b+e;k.o(l,c,d);a.e.p(i);k=a.e;m=c+f;k.o(l,m,d);a.e.p(i);a.e.o(b,c,d);a.e.p(i);a.e.o(l,m,d);a.e.p(i);a.e.o(b,m,d);a.e.p(i);k=a.e;h=d+h;k.o(l,c,h);a.e.p(i);a.e.o(b,c,h);a.e.p(i);a.e.o(l,m,h);a.e.p(i);a.e.o(l,m,h);a.e.p(i);a.e.o(b,c,h);a.e.p(i);a.e.o(b,m,h);a.e.p(i);a.e.o(b,c,h);a.e.p(i);a.e.o(b,c,d);a.e.p(i);a.e.o(b,
m,d);a.e.p(i);a.e.o(b,c,h);a.e.p(i);a.e.o(b,m,d);a.e.p(i);a.e.o(b,m,h);a.e.p(i);a.e.o(l,c,d);a.e.p(i);a.e.o(l,c,h);a.e.p(i);a.e.o(l,m,h);a.e.p(i);a.e.o(l,c,d);a.e.p(i);a.e.o(l,m,h);a.e.p(i);a.e.o(l,m,d);a.e.p(i);a.e.o(b,m,d);a.e.p(i);a.e.o(l,m,d);a.e.p(i);a.e.o(l,m,h);a.e.p(i);a.e.o(b,m,d);a.e.p(i);a.e.o(l,m,h);a.e.p(i);a.e.o(b,m,h);a.e.p(i);a.e.o(b,c,h);a.e.p(i);a.e.o(l,c,h);a.e.p(i);a.e.o(l,c,d);a.e.p(i);a.e.o(b,c,h);a.e.p(i);a.e.o(l,c,d);a.e.p(i);a.e.o(b,c,d);}}
function Fn(a,b,c,d){var e;if(a.cT===null)G(CJ(B(329)));if(!(a.cT!==b&&a.cT!==c)){if(a.hq){e=a.cT;a.eF();a.jq(e);}else if((a.e.BM()-a.e.fu()|0)<d){e=a.cT;a.eF();a.jq(e);}}else{if(!a.JB){if(c===null)G(CJ(((((K()).h(B(330))).e2(b)).h(B(331))).d()));G(CJ(((((((K()).h(B(330))).e2(b)).h(B(332))).e2(c)).h(B(331))).d()));}a.eF();a.jq(b);}}
function A4U(a){a.e.eF();a.cT=null;}
function AXV(a){a.e.be();}
function ZO(){var a=this;C.call(a);a.dF=null;a.dK=null;a.di=null;a.ku=0;a.ta=0;a.G6=0;a.qq=0;a.iL=0;a.ma=0;}
function Bf7(a,b,c){var d=new ZO();APU(d,a,b,c);return d;}
function APU(a,b,c,d){L(a);a.iL=0;a.ma=0;a.G6=b;a.dF=d;a.di=Nf(Dg(a.dF.cJ,c));a.ta=1;a.qq=!b?35048:35044;a.dK=a.di.p3();a.ku=AGL(a);a.dK.eH();a.di.eH();}
function AGL(a){var b;b=Bij.g$();Bij.bV(34962,b);Bij.d8(34962,ED(a.di),null,a.qq);Bij.bV(34962,0);return b;}
function AY5(a){return a.dF;}
function AKx(a){return (BE(a.dK)*4|0)/a.dF.cJ|0;}
function ADi(a){if(a.ma){Bij.kx(34962,0,BE(a.di),a.di);a.iL=0;}}
function AJc(a,b,c,d){a.iL=1;if(a.ta){OE(b,a.di,d,c);a.dK.c4(0);a.dK.c7(d);}else{a.dK.dm();a.dK.tm(b,c,d);a.dK.eH();a.di.c4(0);a.di.c7(BE(a.dK)<<2);}ADi(a);}
function AQm(a,b,c){var d,e,f,g,h,i;d=Bij;d.bV(34962,a.ku);if(a.iL){a.di.c7(BE(a.dK)*4|0);d.d8(34962,BE(a.di),a.di,a.qq);a.iL=0;}a:{e=D5(a.dF);if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data;h=Dc(a.dF,f);i=g[f];if(i>=0){b.jx(i);b.j$(i,h.dh,h.ez,h.eL,a.dF.cJ,h.ev);}f=f+1|0;}}f=0;while(f<e){h=Dc(a.dF,f);i=b.me(h.eb);if(i>=0){b.jx(i);b.j$(i,h.dh,h.ez,h.eL,a.dF.cJ,h.ev);}f=f+1|0;}}a.ma=1;}
function ALT(a,b,c){var d,e,f,g;a:{d=Bij;e=D5(a.dF);if(c===null){f=0;while(f<e){b.xJ((Dc(a.dF,f)).eb);f=f+1|0;}}else{f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0)b.q0(g);f=f+1|0;}}}d.bV(34962,0);a.ma=0;}
function AMs(a){var b;b=Bij;b.bV(34962,0);b.h_(a.ku);a.ku=0;}
var ACR=D();
var E_=D();
var V9=D();
function Q8(){Cl.call(this);this.lX=null;}
function Bgb(a,b,c){var d=new Q8();AUP(d,a,b,c);return d;}
function AUP(a,b,c,d){G9(a,c,d);a.lX=Ro(a,b);if(a.lX!==null)return;G(BaB((((K()).h(B(333))).h(b.q())).d()));}
function Ro(a,b){var c,d,$$je;a:{try{c=AQq(b,null);}catch($$e){$$je=Bn($$e);if($$je instanceof Ce){break a;}else{throw $$e;}}return c;}b:{try{d=A0z(b,null);Vt(d,1);}catch($$e){$$je=Bn($$e);if($$je instanceof C$){break b;}else{throw $$e;}}return d;}return null;}
function A2K(a){var b,c,$$je;a:{try{b=AHd(a.lX,null);}catch($$e){$$je=Bn($$e);if($$je instanceof Ce){c=$$je;break a;}else{throw $$e;}}return b;}G(ACI((((K()).h(B(334))).h((Ge(a.lX)).q())).d(),c));}
var Hy=D();
var BlI=null;var BlJ=null;var BlK=null;function BlL(){BlL=M(Hy);A8a();}
function A8a(){BlI=CG();BlJ=X();BlK=X1();}
var La=D();
var BlM=null;function BlN(){BlN=M(La);AOq();}
function AOq(){BlM=Bbz();}
function Uo(){var a=this;C.call(a);a.qR=null;a.mM=null;a.cy=null;a.EN=null;a.rR=null;a.rO=null;a.hw=null;a.gB=null;}
function Bee(a,b){var c=new Uo();A47(c,a,b);return c;}
function A47(a,b,c){L(a);a.qR=Bc1(0);a.rR=Z();a.rO=Z();a.hw=Ep(2);a.gB=Ep(2);a.mM=b;a.cy=BeM();a.cy.bb(c);}
function AVv(a,b){var c;a.cy.bb(b);a.EN=null;c=0;while(c<a.hw.k){a.mM.pw.hp(a.hw.X(c));c=c+1|0;}a.hw.bz();a.gB.bz();}
function AZS(a){var b;b=a.cy.cK();if(!b){DP();return BjT;}if(b==1){DP();return BjU;}if(b!=2){DP();return BjT;}DP();return BlO;}
function AM3(a){return a.hw;}
function AHT(a,b,c){var d,e;d=a.cy.KT(b.bL,c);e=a.mM.pw.ho();e.sk(d);a.mM.m9.qC(O(T((e.eM.bk()))),e);a.hw.bG(e);return e;}
function AKa(a){return a.cy.Fa();}
function A6x(a){return a.cy.DP();}
function ANu(a,b){a.cy.LT(b);}
function A7r(a){var b;b=a.cy.GT();a.qR.G5(b.C);return a.qR;}
function A_O(a){var b;b=a.cy.BY();a.rR.bN(b.cQ(),b.cM());return a.rR;}
function A$0(a){var b;b=a.cy.Ft();a.rO.bN(b.cQ(),b.cM());return a.rO;}
function ALi(a){return a.cy.J4();}
var AED=D();
function TC(b){a:{switch(b){case 8:break;case 9:return 61;case 10:case 11:case 12:case 14:case 15:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 41:case 42:case 43:case 44:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 93:case 94:case 95:case 108:case 124:case 125:case 126:case 127:case 128:case 129:case 130:case 131:case 132:case 133:case 134:case 135:case 136:case 137:case 138:case 139:case 140:case 141:case 142:case 143:case 146:case 147:case 148:case 149:case 150:case 151:case 152:case 153:case 154:case 155:case 156:case 157:case 158:case 159:case 160:case 161:case 162:case 163:case 164:case 165:case 166:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 177:case 178:case 179:case 180:case 181:case 182:case 183:case 184:case 185:case 193:case 194:case 195:case 196:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 207:case 208:case 209:case 210:case 211:case 212:case 213:case 214:case 215:case 216:case 217:case 218:break a;case 13:return 66;case 16:return 59;case 17:return 129;case 18:return 57;case 19:return 0;case 20:return 0;case 27:return 111;case 32:return 62;case 33:return 92;case 34:return 93;case 35:return 123;case 36:return 3;case 37:return 21;case 38:return 19;case 39:return 22;case 40:return 20;case 45:return 124;case 46:return 112;case 48:return 7;case 49:return 8;case 50:return 9;case 51:return 10;case 52:return 11;case 53:return 12;case 54:return 13;case 55:return 14;case 56:return 15;case 57:return 16;case 65:return 29;case 66:return 30;case 67:return 31;case 68:return 32;case 69:return 33;case 70:return 34;case 71:return 35;case 72:return 36;case 73:return 37;case 74:return 38;case 75:return 39;case 76:return 40;case 77:return 41;case 78:return 42;case 79:return 43;case 80:return 44;case 81:return 45;case 82:return 46;case 83:return 47;case 84:return 48;case 85:return 49;case 86:return 50;case 87:return 51;case 88:return 52;case 89:return 53;case 90:return 54;case 91:return 0;case 92:return 0;case 96:return 144;case 97:return 145;case 98:return 146;case 99:return 147;case 100:return 148;case 101:return 149;case 102:return 150;case 103:return 151;case 104:return 152;case 105:return 153;case 106:return 0;case 107:return 81;case 109:return 69;case 110:return 56;case 111:return 0;case 112:return 131;case 113:return 132;case 114:return 133;case 115:return 134;case 116:return 135;case 117:return 136;case 118:return 137;case 119:return 138;case 120:return 139;case 121:return 140;case 122:return 141;case 123:return 142;case 144:return 78;case 145:return 0;case 186:return 74;case 187:return 70;case 188:return 55;case 189:return 69;case 190:return 56;case 191:return 76;case 192:return 0;case 219:return 71;case 220:return 73;case 221:return 72;case 222:return 75;default:break a;}return 67;}return 0;}
function Iy(b){if(b==1)return 0;if(b==2)return 1;if(b!=4)return 0;return 2;}
var BA=D(Y);
var BlP=null;var BlQ=null;var BlR=null;var BlS=null;var BlT=null;var BlU=null;var BlV=null;var BlW=null;var BlX=null;var BlY=null;function ZL(){ZL=M(BA);AXw();}
function De(a,b,c){ZL();BJ(a,b,c);}
function Sb(){ZL();return H(BA,[BlP,BlQ,BlR,BlS,BlT,BlU,BlV,BlW,BlX]);}
function AXw(){BlP=BbP(B(335),0);BlQ=Bez(B(336),1);BlR=Bfy(B(337),2);BlS=Bcb(B(338),3);BlT=Bdb(B(339),4);BlU=Bgj(B(340),5);BlV=Ba$(B(341),6);BlW=BdO(B(342),7);BlX=BfP(B(343),8);BlY=Sb();}
var AFn=D(BA);
function BdO(a,b){var c=new AFn();ANv(c,a,b);return c;}
function ANv(a,b,c){De(a,b,c);}
var Ib=D(0);
var AFl=D(BA);
function BfP(a,b){var c=new AFl();ASU(c,a,b);return c;}
function ASU(a,b,c){De(a,b,c);}
var IZ=D(0);
var MK=D(0);
var AFs=D(BA);
function Bgj(a,b){var c=new AFs();AMX(c,a,b);return c;}
function AMX(a,b,c){De(a,b,c);}
var AFm=D(BA);
function Ba$(a,b){var c=new AFm();A_A(c,a,b);return c;}
function A_A(a,b,c){De(a,b,c);}
var EY=D(Y);
var BlZ=null;var Bl0=null;var Bl1=null;var Bl2=null;function Bb$(){Bb$=M(EY);A96();}
function Y2(a,b){var c=new EY();P9(c,a,b);return c;}
function P9(a,b,c){Bb$();BJ(a,b,c);}
function A96(){BlZ=Y2(B(344),0);Bl0=Y2(B(345),1);Bl1=Y2(B(346),2);Bl2=H(EY,[BlZ,Bl0,Bl1]);}
var AFp=D(BA);
function BbP(a,b){var c=new AFp();AWA(c,a,b);return c;}
function AWA(a,b,c){De(a,b,c);}
function A$k(a){return B(347);}
var AFv=D(BA);
function Bcb(a,b){var c=new AFv();AXY(c,a,b);return c;}
function AXY(a,b,c){De(a,b,c);}
var AFr=D(BA);
function Bdb(a,b){var c=new AFr();ASn(c,a,b);return c;}
function ASn(a,b,c){De(a,b,c);}
var AFq=D(BA);
function Bez(a,b){var c=new AFq();ATS(c,a,b);return c;}
function ATS(a,b,c){De(a,b,c);}
var AFu=D(BA);
function Bfy(a,b){var c=new AFu();AOA(c,a,b);return c;}
function AOA(a,b,c){De(a,b,c);}
var ABf=D();
function Jh(){return 1;}
function KU(){var a=this;C.call(a);a.sq=0;a.pb=0;a.pv=0;a.G0=null;a.IH=null;a.es=null;a.Bc=B(348);}
function Bl3(a,b,c,d){var e=new KU();Ty(e,a,b,c,d);return e;}
function Ty(a,b,c,d,e){var f;L(a);a.Bc=B(348);IL();if(b===BhU){Ez();a.es=Bl4;}else if(b===BhZ){Ez();a.es=Bl4;}else if(b===BhV){Ez();a.es=Bl5;}else if(b===BhX){Ez();a.es=Bl5;}else if(b!==BhY){Ez();a.es=Bl6;}else{Ez();a.es=Bl7;}f=a.es;Ez();if(f===Bl4)Ji(a,B(349),c);else if(a.es===Bl7)Ji(a,B(350),c);else if(a.es===Bl5)Ji(a,B(351),c);else{a.sq=(-1);a.pb=(-1);a.pv=(-1);d=B(46);e=B(46);}a.G0=d;a.IH=e;}
function Ji(a,b,c){var d,e,f,g,h,i,j;d=FW(b);e=F1(d,c);f=Fj(e);if(!f){BhP.r3(B(348),(((K()).h(B(352))).h(c)).d());a.sq=2;a.pb=0;a.pv=0;}else{g=Fs(e,1);h=g.sp(B(353));i=h.data;a.sq=Jc(a,i[0],2);j=i.length;a.pb=j<2?0:Jc(a,i[1],0);a.pv=j<3?0:Jc(a,i[2],0);}}
function Jc(a,b,c){var d,$$je;a:{try{d=BU(b);}catch($$e){$$je=Bn($$e);if($$je instanceof Cg){break a;}else{throw $$e;}}return d;}BhP.kH(B(354),(((((K()).h(B(355))).h(b)).h(B(356))).A(c)).d());return c;}
var ABA=D(Bk);
function GG(){var a=new ABA();A1x(a);return a;}
function A1x(a){Cv(a);}
var Hh=D(C1);
function Qt(a,b,c,d){Gm(a,b);a.y=c;a.T=d;}
function AL1(b,c,d){return Be3(0,b.data.length,b,c,c+d|0,0);}
function A45(b){return AL1(b,0,b.data.length);}
function A87(a,b,c,d){var e,f,g,h,i,j,k,l;if(a.bZ())G(Dj());if(Be(a)<d)G(GG());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new Bv;i=K();V(I(V(I(i,B(357)),g),B(278)),f);BC(h,Q(i));G(h);}if(d<0){i=new Bv;h=K();I(V(I(h,B(279)),d),B(280));BC(i,Q(h));G(i);}j=a.y;k=0;while(k<d){g=j+1|0;l=c+1|0;a.n_(j,e[c]);k=k+1|0;j=g;c=l;}a.y=a.y+d|0;return a;}}e=b.data;i=new Bv;f=e.length;h=K();Bi(V(I(V(I(h,B(281)),c),B(54)),f),41);BC(i,Q(h));G(i);}
function Mj(a){GF(a);return a;}
function HC(a){Gw(a);return a;}
function ASb(a,b){Jj(a,b);return a;}
function A8e(a,b){Hj(a,b);return a;}
function A9b(a){return HC(a);}
function AVG(a){return Mj(a);}
function A4I(a,b){return a.Dm(b);}
function AXk(a,b){return a.C9(b);}
var AFa=D(DC);
var Xm=D(W);
function BfH(){var a=new Xm();AOV(a);return a;}
function AOV(a){Bs(a);}
function A3Z(a){var b;b=BcJ(a);b.ba=1;return b;}
function MU(){var a=this;C.call(a);a.qW=0;a.uD=0;a.ye=null;}
function AL8(a,b,c){var d=new MU();ATd(d,a,b,c);return d;}
function ATd(a,b,c,d){L(a);a.qW=b;a.uD=c;a.ye=d;}
var Ej=D();
var Bl8=null;var Bl9=null;function KJ(a){L(a);}
function Nk(b){if(!(b&1)){if(Bl9!==null)return Bl9;Bl9=BfL();return Bl9;}if(Bl8!==null)return Bl8;Bl8=Bfe();return Bl8;}
var AEJ=D(Ej);
function BfL(){var a=new AEJ();AM6(a);return a;}
function AM6(a){KJ(a);}
function A8v(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AUT(a,b,c){var d;a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}d=1;break a;}d=0;}return d;}
var AEI=D(Ej);
function Bfe(){var a=new AEI();AYe(a);return a;}
function AYe(a){KJ(a);}
function AJP(a,b){return b!=10?0:1;}
function AR9(a,b,c){return b!=10?0:1;}
var ABE=D(Gy);
var X2=D(W);
function Bfq(){var a=new X2();A2s(a);return a;}
function A2s(a){Bs(a);}
function A7X(a){var b;b=BeA(a);b.ba=1;return b;}
var EJ=D();
var Bl$=null;function AM_(){AM_=M(EJ);AYg();}
function JO(a){AM_();L(a);}
function Yf(){AM_();if(Bl$===null)Bl$=BbM();return Bl$;}
function AYg(){Bl$=null;}
function L8(){EJ.call(this);this.iz=null;}
var Bl_=0;function BbD(){BbD=M(L8);A1o();}
function AON(a){var b=new L8();Y9(b,a);return b;}
function Y9(a,b){BbD();JO(a);a.iz=b;}
function Mc(a,b){var c,d,e,f,g,$$je;c=a.iz;d=b.fG();e=K();I(I(e,B(358)),d);f=c.mI(Q(e));a:{try{c=Ni(ABV(f));}catch($$e){$$je=Bn($$e);if($$je instanceof Bk){g=$$je;break a;}else{throw $$e;}}return c;}c=a.iz;d=b.fG();e=K();I(I(e,B(358)),d);c.wQ(Q(e));G(g);}
function AFI(a,b){var c,d,e,f;a:{c=a.iz;d=b.fG();e=K();I(I(e,B(359)),d);if(c.mI(Q(e))===null){c=a.iz;d=b.fG();e=K();I(I(e,B(358)),d);if(c.mI(Q(e))===null){f=0;break a;}}f=1;}return f;}
function A1o(){Bl_=B(358).i();}
var Is=D(Ct);
function VB(){var a=this;C.call(a);a.xC=null;a.yF=0;}
function ASw(a){var b=new VB();A0b(b,a);return b;}
function A0b(a,b){L(a);a.xC=b;}
function DJ(){var a=this;BR.call(a);a.fa=null;a.uS=0;}
function ATI(a){var b=new DJ();ARI(b,a);return b;}
function ARI(a,b){Da(a);a.fa=b.jS();a.uS=b.bs;}
function AWi(a,b,c){return !a.fa.n(c.f(b))?(-1):1;}
function AOG(a){var b,c,d;b=!a.uS?B(39):B(40);c=a.fa.d();d=K();I(I(I(d,B(41)),b),c);return Q(d);}
function ARd(a,b){if(b instanceof DN)return Jg(a.fa,b.mG());if(b instanceof DJ)return Hq(a.fa,b.fa);if(b instanceof Db)return Hq(a.fa,b.rN());if(!(b instanceof DI))return 1;return 0;}
function A6u(a){return a.fa;}
function L7(){var a=this;C.call(a);a.pU=null;a.jC=null;a.c$=0;a.kk=null;a.wA=0.0;a.xc=0.0;a.gy=0;a.z3=null;a.pq=null;a.m3=null;a.rT=0;a.ps=0;a.tB=0;a.ya=0;a.sB=0;a.gz=null;a.e8=null;a.G$=0;a.Jt=null;a.KY=0.0;a.kV=0;a.oq=0;a.r$=0;}
var Bma=null;function VY(){VY=M(L7);A5g();}
function Bc9(){var a=new L7();AFt(a);return a;}
function Bmb(a,b){var c=new L7();KE(c,a,b);return c;}
function AFt(a){VY();KE(a,1000,null);}
function KE(a,b,c){var d,e,f,g,h,i,j,k,l,m;VY();L(a);a.c$=0;a.kk=null;a.wA=0.0;a.xc=0.0;a.gy=0;a.z3=CP();a.pq=CP();a.m3=CP();a.rT=0;a.ps=770;a.tB=771;a.ya=770;a.sB=771;a.e8=null;a.Jt=B1(1.0,1.0,1.0,1.0);a.KY=Bko;a.kV=0;a.oq=0;a.r$=0;if(b>8191)G(Bo((((K()).h(B(360))).A(b)).d()));if(Bik===null)d=Bma;else{NB();d=Bmc;}e=new Ie;f=b*4|0;g=b*6|0;NE(e,d,0,f,g,H(FI,[Gh(1,2,B(361)),Gh(4,4,B(362)),Gh(16,2,B(363))]));a.pU=e;a.pq.xn(0.0,0.0,Bid.bp(),Bid.bl());a.jC=Cf(b*20|0);h=A0I(g);i=0;j=0;while(j<g){k=h.data;k[j]=i;k[j
+1|0]=(i+1|0)<<16>>16;l=j+2|0;m=(i+2|0)<<16>>16;k[l]=m;k[j+3|0]=m;k[j+4|0]=(i+3|0)<<16>>16;k[j+5|0]=i;j=j+6|0;i=(i+4|0)<<16>>16;}a.pU.IW(h);if(c!==null)a.gz=c;else{a.gz=U8();a.G$=1;}}
function U8(){var b,c,d;VY();b=B(364);c=B(365);d=AMk(b,c);if(d.pg())return d;G(Bo((((K()).h(B(366))).h(d.oe())).d()));}
function A1$(a){if(a.gy)G(CJ(B(367)));a.kV=0;Bii.o7(0);if(a.e8===null)a.gz.ee();else a.e8.ee();a.Ga();a.gy=1;}
function ATc(a){var b;if(!a.gy)G(CJ(B(368)));if(a.c$>0)a.hM();a.kk=null;a.gy=0;b=Bii;b.o7(1);if(a.EL())b.qs(3042);}
function AOd(a,b,c,d,e){var f,g,h;if(!a.gy)G(CJ(B(369)));f=a.jC.data.length;if(b!==a.kk){a.Fw(b);g=f;}else{g=f-a.c$|0;if(!g){a.hM();g=f;}}h=BN(g,e);BZ(c,d,a.jC,a.c$,h);a.c$=a.c$+h|0;g=e-h|0;while(g>0){d=d+h|0;a.hM();h=BN(f,g);BZ(c,d,a.jC,0,h);a.c$=a.c$+h|0;g=g-h|0;}}
function ANH(a){var b,c,d;if(!a.c$)return;a.kV=a.kV+1|0;a.oq=a.oq+1|0;b=a.c$/20|0;if(b>a.r$)a.r$=b;c=b*6|0;a.kk.ee();d=a.pU;d.A7(a.jC,0,a.c$);(d.wS()).c4(0);(d.wS()).c7(c);if(a.rT)Bii.qs(3042);else{Bii.yl(3042);if(a.ps!=(-1))Bii.vs(a.ps,a.tB,a.ya,a.sB);}d.IX(a.e8===null?a.gz:a.e8,4,0,c);a.c$=0;}
function AK9(a){(a.m3.hP(a.pq)).wf(a.z3);if(a.e8===null){a.gz.sd(B(370),a.m3);a.gz.o4(B(371),0);}else{a.e8.sd(B(370),a.m3);a.e8.o4(B(371),0);}}
function A6m(a,b){a.hM();a.kk=b;a.wA=1.0/b.bp();a.xc=1.0/b.bl();}
function AIi(a){return a.rT?0:1;}
function A5g(){NB();Bma=Bmd;}
var MC=D();
var Bme=null;function Be4(){Be4=M(MC);A74();}
function A74(){Bme=Bf((Xl()).data.length);Bme.data[Bj(Bmf)]=1;Bme.data[Bj(Bmg)]=2;Bme.data[Bj(Bmc)]=3;Bme.data[Bj(Bmd)]=4;}
var AAt=D(CX);
function Q5(){var a=this;U.call(a);a.rx=0;a.sQ=0;a.mO=0;a.oF=0;a.ea=0;a.gf=0;a.U=null;a.bt=null;}
function C0(){var a=new Q5();AVV(a);return a;}
function Bf0(a,b){var c=new Q5();Rb(c,a,b);return c;}
function BfK(a,b,c){var d=new Q5();AW6(d,a,b,c);return d;}
function AVV(a){Bg(a);a.U=A_N();}
function Rb(a,b,c){Bg(a);a.U=A_N();a.rx=b;a.sQ=c;}
function AW6(a,b,c,d){Rb(a,c,d);a.eX(b);}
function AHj(a,b){a:{if(a.rx){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.ea){a.U.o6(He(b&65535));break a;}a.U.p5(He(b&65535));break a;}if(a.sQ&&b>128){a.mO=1;b=Fr(EI(b));}}}if(!(!Lt(b)&&!KG(b))){if(a.oF)a.bv.o6(b-55296|0);else a.bv.p5(b-55296|0);}if(a.ea)a.U.o6(b);else a.U.p5(b);if(!a.ba&&IE(b))a.ba=1;return a;}
function A_E(a,b){var c,d;if(!a.ba&&b.ba)a.ba=1;if(a.oF){if(!b.bU)a.bv.gW(b.b$());else a.bv.dd(b.b$());}else if(!b.bU)a.bv.g1(b.b$());else{a.bv.g_(b.b$());a.bv.dd(b.b$());a.bU=a.bU?0:1;a.oF=1;}if(!a.gf&&b.bF()!==null){if(a.ea){if(!b.hE())a.U.gW(b.bF());else a.U.dd(b.bF());}else if(!b.hE())a.U.g1(b.bF());else{a.U.g_(b.bF());a.U.dd(b.bF());a.bs=a.bs?0:1;a.ea=1;}}else{c=a.bs;if(a.bt!==null){d=a.bt;if(!c)a.bt=BfU(a,c,d,b);else a.bt=BcT(a,c,d,b);}else{if(c&&!a.ea&&a.U.bH())a.bt=BaR(a,b);else if(!c)a.bt=BcX(a,c,b);else a.bt
=BaF(a,c,b);a.gf=1;}}return a;}
function A9y(a,b,c){if(b>c)G(C4());a:{b:{if(!a.rx){if(c<55296)break b;if(b>57343)break b;}while(true){if(b>=(c+1|0))break a;a.cn(b);b=b+1|0;}}if(a.ea)a.U.JI(b,c+1|0);else a.U.el(b,c+1|0);}return a;}
function AWC(a,b){var c,d;if(!a.ba&&b.ba)a.ba=1;if(b.fy())a.mO=1;if(!(a.bU^b.bU)){if(!a.bU)a.bv.g1(b.b$());else a.bv.dd(b.b$());}else if(a.bU)a.bv.gW(b.b$());else{a.bv.g_(b.b$());a.bv.dd(b.b$());a.bU=1;}if(!a.gf&&b.bF()!==null){if(!(a.bs^b.hE())){if(!a.bs)a.U.g1(b.bF());else a.U.dd(b.bF());}else if(a.bs)a.U.gW(b.bF());else{a.U.g_(b.bF());a.U.dd(b.bF());a.bs=1;}}else{c=a.bs;if(a.bt!==null){d=a.bt;if(!c)a.bt=Bcl(a,c,d,b);else a.bt=Bgl(a,c,d,b);}else{if(!a.ea&&a.U.bH()){if(!c)a.bt=BaN(a,b);else a.bt=Bf6(a,b);}
else if(!c)a.bt=BdA(a,b,c);else a.bt=A_$(a,b,c);a.gf=1;}}}
function AUc(a,b){var c,d;if(!a.ba&&b.ba)a.ba=1;if(b.fy())a.mO=1;if(!(a.bU^b.bU)){if(!a.bU)a.bv.dd(b.b$());else a.bv.g1(b.b$());}else if(!a.bU)a.bv.gW(b.b$());else{a.bv.g_(b.b$());a.bv.dd(b.b$());a.bU=0;}if(!a.gf&&b.bF()!==null){if(!(a.bs^b.hE())){if(!a.bs)a.U.dd(b.bF());else a.U.g1(b.bF());}else if(!a.bs)a.U.gW(b.bF());else{a.U.g_(b.bF());a.U.dd(b.bF());a.bs=0;}}else{c=a.bs;if(a.bt!==null){d=a.bt;if(!c)a.bt=Bgh(a,c,d,b);else a.bt=Bcf(a,c,d,b);}else{if(!a.ea&&a.U.bH()){if(!c)a.bt=BeX(a,b);else a.bt=Be_(a,b);}
else if(!c)a.bt=Bag(a,b,c);else a.bt=Bgf(a,b,c);a.gf=1;}}}
function AKc(a,b){if(a.bt!==null)return a.bs^a.bt.n(b);return a.bs^a.U.dU(b);}
function AV7(a){if(!a.gf)return a.U;return null;}
function A0R(a){return a.bv;}
function ATP(a){var b,c;if(a.bt!==null)return a;b=a.bF();c=Bd1(a,b);return c.eX(a.hE());}
function A5G(a){var b,c;b=K();c=a.U.i4(0);while(c>=0){b.od(E2(c));b.bi(124);c=a.U.i4(c+1|0);}if(b.i()>0)b.AC(b.i()-1|0);return b.d();}
function AL5(a){return a.mO;}
var AFK=D(Bk);
function Xg(){var a=new AFK();AUv(a);return a;}
function AUv(a){Cv(a);}
var EF=D(BX);
var Bmh=null;function A0W(){A0W=M(EF);ASN();}
function Bd9(a){var b=new EF();Zu(b,a);return b;}
function Bmi(){var a=new EF();Gl(a);return a;}
function ASs(a){return Xt(T((a.bk())));}
function Zu(a,b){A0W();B6(a);}
function Gl(a){A0W();B6(a);}
function ALp(a){var b;b=AA9(T(a.C));M7();Bmj.bb(O(b));return Bmj;}
function A38(a){var b;b=TN(T(a.C));M7();Bmj.bb(O(b));return Bmj;}
function A7I(a){var b;b=X4(T(a.C));Cs();BhT.bb(O(b));return BhT;}
function ANw(a){var b;b=AB5(T(a.C));Cs();BhT.bb(O(b));return BhT;}
function ASN(){Bmh=Bd9(0);}
function Xt(b){var body=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Joint);return body.GetType();}
function AA9(b){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Joint);var returnedJSObj=jsObj.GetBodyA();return $rt_globals.Box2D.getPointer(returnedJSObj);}
function TN(b){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Joint);var returnedJSObj=jsObj.GetBodyB();return $rt_globals.Box2D.getPointer(returnedJSObj);}
function X4(b){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Joint);var returnedJSObj=jsObj.GetAnchorA();return $rt_globals.Box2D.getPointer(returnedJSObj);}
function AB5(b){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Joint);var returnedJSObj=jsObj.GetAnchorB();return $rt_globals.Box2D.getPointer(returnedJSObj);}
var M6=D(EF);
var Bmk=null;function AUA(){AUA=M(M6);AXg();}
function Bfp(a){var b=new M6();AAZ(b,a);return b;}
function Bf3(){var a=new M6();XA(a);return a;}
function AAZ(a,b){AUA();Gl(a);}
function XA(a){AUA();Gl(a);}
function A0N(a){var b;b=ACD(T(a.C));Cs();BhT.bb(O(b));return BhT;}
function AJw(a){var b;b=S2(T(a.C));Cs();BhT.bb(O(b));return BhT;}
function AXg(){Bmk=Bfp(0);}
function ACD(b){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2PulleyJoint);var returnedJSObj=jsObj.GetGroundAnchorA();return $rt_globals.Box2D.getPointer(returnedJSObj);}
function S2(b){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2PulleyJoint);var returnedJSObj=jsObj.GetGroundAnchorB();return $rt_globals.Box2D.getPointer(returnedJSObj);}
var Gc=D(B$);
var P7=D(Fi);
function BfF(a,b,c,d,e,f){var g=new P7();A5d(g,a,b,c,d,e,f);return g;}
function A5d(a,b,c,d,e,f,g){Mh(a,b,c,d,e,f,g);}
function AO0(a,b){var c,d,e,f;c=a.ce.u.data;d=a.b_;e=b*4|0;f=(c[d+e|0]&255)<<24|(a.ce.u.data[(a.b_+e|0)+1|0]&255)<<16|(a.ce.u.data[(a.b_+e|0)+2|0]&255)<<8|a.ce.u.data[(a.b_+e|0)+3|0]&255;return $rt_intBitsToFloat(f);}
function A7i(a,b,c){var d,e,f,g;d=$rt_floatToIntBits(c);e=a.ce.u.data;f=a.b_;g=b*4|0;e[f+g|0]=d>>24<<24>>24;a.ce.u.data[(a.b_+g|0)+1|0]=d>>16<<24>>24;a.ce.u.data[(a.b_+g|0)+2|0]=d>>8<<24>>24;a.ce.u.data[(a.b_+g|0)+3|0]=d<<24>>24;}
var ADr=D();
var Yu=D();
var JR=D(Ct);
var AGj=D(JR);
var AGf=D(Bp);
var EK=D(Ce);
function BbO(){var a=new EK();YX(a);return a;}
function YX(a){GZ(a);}
var EQ=D(EK);
function Bml(){var a=new EQ();KN(a);return a;}
function KN(a){YX(a);}
function VE(){EQ.call(this);this.wd=0;}
function BdJ(a){var b=new VE();AQY(b,a);return b;}
function AQY(a,b){KN(a);a.wd=b;}
function ALO(a){var b,c;b=a.wd;c=K();V(I(c,B(372)),b);return Q(c);}
var Fa=D(Y);
var Bmm=null;var Bmn=null;var Bmo=null;function UW(){UW=M(Fa);A8m();}
function AQx(a,b){var c=new Fa();ACa(c,a,b);return c;}
function ACa(a,b,c){UW();BJ(a,b,c);}
function A8m(){Bmm=AQx(B(373),0);Bmn=AQx(B(374),1);Bmo=H(Fa,[Bmm,Bmn]);}
var VW=D(Ce);
function BbK(){var a=new VW();A22(a);return a;}
function A22(a){GZ(a);}
var FM=D(Hh);
function LW(a,b,c,d){Qt(a,b,c,d);}
function A7o(a,b){var c,d,e;if(b>=0&&b<a.T)return a.sh(b);c=new Bv;d=a.T;e=K();Bi(V(I(V(I(e,B(264)),b),B(54)),d),41);BC(c,Q(e));G(c);}
function A3G(a){return a.d1();}
function FU(){var a=this;FM.call(a);a.eG=null;a.tr=0;a.eA=0;}
function LX(a,b,c,d,e,f,g){LW(a,c,e,f);a.eA=b;a.eG=d;a.tr=g;}
function A2j(a){return a.tr;}
var AEf=D(Ft);
function N$(a){var b=new AEf();AYW(b,a);return b;}
function AYW(a,b){LB(a,b);}
var Ii=D();
function Bcy(){var a=new Ii();Yr(a);return a;}
function Yr(a){L(a);}
function ATC(a,b){if(b==32)return a.t_()*4.294967295E9+(-2.147483648E9)|0;return a.t_()*Lg(DX(O(1),BN(32,b)))|0;}
function AK0(a){return a.DT(32);}
function AHU(a){return ALI(DX(O(a.yC()),32),O(a.yC()));}
function A0Y(a){return $rt_globals.Math.random();}
function ADb(){var a=this;Ii.call(a);a.Bp=Bd;a.Bq=Bd;}
function Bfg(){var a=new ADb();A2p(a);return a;}
function A2p(a){Yr(a);a.EH((Bcy()).Iz());}
function A2l(a,b){var c;if(B5(b,Bd))b=Bx(0, 2147483648);c=Wt(b);a.HB(c,Wt(c));}
function A7Y(a,b,c){a.Bp=b;a.Bq=c;}
function Wt(b){var c;c=L_(b,BT(b,33));c=Bu(c,Bx(3981806797, 4283543511));c=L_(c,BT(c,33));c=Bu(c,Bx(444984403, 3301882366));c=L_(c,BT(c,33));return c;}
var HR=D(0);
var Sf=D();
function A_h(a,b){return a.HE(b);}
function AJT(a){return a.Kf();}
var AHc=D(Ci);
var Ob=D(BX);
var Bmp=null;function A4n(){A4n=M(Ob);A1L();}
function BeJ(a){var b=new Ob();AEd(b,a);return b;}
function AEd(a,b){A4n();B6(a);}
function A0M(a){return AC1(T(a.C));}
function A1L(){Bmp=BeJ(0);}
function AC1(b){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Manifold);var returnedJSObj=jsObj.pointCount;return returnedJSObj;}
var RO=D(I$);
function BaZ(){var a=new RO();A3A(a);return a;}
function A3A(a){Wk(a);}
function AMU(a){var b;b=(ACE(a)).eX(1);b.ba=1;return b;}
function K5(){var a=this;C.call(a);a.ie=null;a.eB=null;a.kl=null;a.Hv=0;a.A6=0;a.Ag=0;}
function Beq(a,b){var c=new K5();AOz(c,a,b);return c;}
function Bmq(a,b,c){var d=new K5();WX(d,a,b,c);return d;}
function Bmr(a,b,c){var d=new K5();ABq(d,a,b,c);return d;}
function AOz(a,b,c){WX(a,Bdo(b,c),null,1);}
function WX(a,b,c,d){var e,f;if(c===null)e=null;else{f=Bc(E$,1);f.data[0]=c;e=AIG(f);}ABq(a,b,e,d);}
function ABq(a,b,c,d){var e,f,g;L(a);a.Hv=b.ou;a.ie=b;a.A6=d;if(c!==null&&c.k){a.eB=c;a.Ag=0;}else{if(b.fX===null)G(Bo(B(375)));e=b.fX.data.length;a.eB=Ep(e);f=0;while(f<e){g=b.pA===null?Big.AQ(b.fX.data[f]):Big.Jz(b.fX.data[f],b.pA.JM());a.eB.bG(Bc4(Bcu(g,0)));f=f+1|0;}a.Ag=1;}a.kl=a.FJ();a.CW(b);}
function AV1(a,b){var c,d,e,f,g,h,i,j;c=b.fE.data;d=c.length;e=0;while(e<d){a:{f=c[e];if(f!==null){g=f.data;h=g.length;i=0;while(true){if(i>=h)break a;j=g[i];if(j!==null)b.Av(j,a.eB.X(j.hU));i=i+1|0;}}}e=e+1|0;}if(b.gK!==null)b.Av(b.gK,a.eB.X(b.gK.hU));}
function AMw(a,b,c,d,e){var f;a.kl.bz();f=a.kl.EW(c,d,e);a.kl.IO(b);return f;}
function AS1(a){return a.eB;}
function A$m(a){return BfM(a,a.A6);}
var ACe=D();
function Gq(){var a=this;BO.call(a);a.sO=0;a.hf=0;}
function Bgd(a,b){var c=new Gq();KF(c,a,b);return c;}
function KF(a,b,c){CY(a);a.sO=b;a.hf=c;}
function AIx(a,b,c,d){var e,f,g,h;e=a.h0(d);if(e!==null&&(b+e.i()|0)<=d.D()){f=0;while(true){if(f>=e.i()){d.bo(a.hf,e.i());return a.j.c(b+e.i()|0,c,d);}g=e.f(f);h=b+f|0;if(g!=c.f(h)&&He(e.f(f))!=c.f(h))break;f=f+1|0;}return (-1);}return (-1);}
function A7j(a,b){a.j=b;}
function AKw(a,b){var c;c=b.J1(a.sO);return c;}
function AXr(a){var b,c;b=a.bf;c=K();V(I(c,B(376)),b);return Q(c);}
function ASc(a,b){var c;c=!b.dI(a.hf)?0:1;b.bo(a.hf,(-1));return c;}
function Wu(){var a=this;U.call(a);a.xk=null;a.KW=null;}
function BcV(a,b){var c=new Wu();AV0(c,a,b);return c;}
function AV0(a,b,c){a.KW=b;a.xk=c;Bg(a);}
function ALK(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.bU^a.xk.dU(c):0;}
function Ws(){var a=this;U.call(a);a.Ad=null;a.v4=null;a.EV=null;}
function Bbt(a,b,c){var d=new Ws();A52(d,a,b,c);return d;}
function A52(a,b,c,d){a.EV=b;a.Ad=c;a.v4=d;Bg(a);}
function AW2(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.bU^a.Ad.dU(c):0;return a.v4.n(b)&&!d?1:0;}
var Nh=D(C2);
var Bms=null;function A9L(){A9L=M(Nh);ANY();}
function Bff(){var a=new Nh();AFb(a);return a;}
function A7e(a){var b=new Nh();TJ(b,a);return b;}
function AFb(a){A9L();D4(a);a.cD(O(PZ()),1);}
function TJ(a,b){A9L();D4(a);a.cD(Bd,0);}
function ARe(a,b,c,d,e){Cs();Bmt.lh(b,c);Bmu.lh(d,e);a.Cn(Bmt,Bmu);}
function AWI(a,b,c){var d,e,f;d=T(a.C);e=T((b.bk()));f=T((c.bk()));ACh(d,e,f);}
function ARu(a){var b;b=Pl(T(a.C));Cs();BhT.bb(O(b));return BhT;}
function A0G(a){var b;b=Uc(T(a.C));Cs();BhT.bb(O(b));return BhT;}
function ANY(){Bms=A7e(0);}
function PZ(){var jsObj=new $rt_globals.Box2D.b2EdgeShape();return $rt_globals.Box2D.getPointer(jsObj);}
function ACh(b,c,d){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2EdgeShape);jsObj.Set(c,d);}
function Pl(b){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2EdgeShape);var returnedJSObj=jsObj.m_vertex1;return $rt_globals.Box2D.getPointer(returnedJSObj);}
function Uc(b){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2EdgeShape);var returnedJSObj=jsObj.m_vertex2;return $rt_globals.Box2D.getPointer(returnedJSObj);}
var ZQ=D(EA);
function Bcw(a,b,c,d){var e=new ZQ();A5f(e,a,b,c,d);return e;}
function A5f(a,b,c,d,e){Lm(a,b,c,d,e);}
function A8f(a,b,c,d){var e,f,g,h;e=a.e0.he();f=a.e0.gX();g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.bm.b5()|0)>d.D())break a;h=a.bm.bB(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.j.c(b,c,d);}if((b+a.bm.b5()|0)>d.D()){d.dt=1;return (-1);}h=a.bm.bB(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
var D_=D(Cr);
var LH=D(0);
var Yt=D(Cl);
var Zr=D();
function Ov(){var a=this;C.call(a);a.e3=null;a.yc=0;a.p6=null;a.mg=null;a.wa=0;a.Cj=0.0;a.Ci=0.0;a.Ax=null;a.CH=0.0;a.c5=null;a.c_=null;a.cr=null;a.qj=null;}
var Bmv=null;function BeN(){BeN=M(Ov);APg();}
function BfM(a,b){var c=new Ov();AGq(c,a,b);return c;}
function AGq(a,b,c){var d,e,f;BeN();L(a);a.p6=CG();a.mg=CG();a.Ax=B1(1.0,1.0,1.0,1.0);a.e3=b;a.yc=c;d=b.eB.k;if(!d)G(Bo(B(377)));a:{a.c5=Bc($rt_arraycls($rt_floatcls()),d);a.c_=Bf(d);if(d>1){a.cr=Bc(Hs,d);e=0;f=a.cr.data.length;while(true){if(e>=f)break a;a.cr.data[e]=AHf();e=e+1|0;}}}a.qj=Bf(d);}
function ALj(a,b){var c,d,e,f;c=a.e3.JF();d=0;e=a.c5.data.length;while(d<e){if(a.c_.data[d]>0){f=a.c5.data[d];b.CQ((c.X(d)).xl(),f,0,a.c_.data[d]);}d=d+1|0;}}
function A6e(a){var b,c;a.Cj=0.0;a.Ci=0.0;Ur(a.mg,1);a.mg.bz();a.p6.bz();b=0;c=a.c_.data.length;while(b<c){if(a.cr!==null)a.cr.data[b].bz();a.c_.data[b]=0;b=b+1|0;}}
function YW(a,b){var c,d,e,f,g,h,i,j,k;a:{if(a.c5.data.length==1)Oq(a,0,b.bX);else{c=a.qj;Hc(c,0);d=0;e=b.bT.k;while(d<e){f=(b.bT.X(d)).Z;g=f.bc;h=0;i=f.k;while(h<i){j=c.data;k=g.data[h].hU;j[k]=j[k]+1|0;h=h+1|0;}d=d+1|0;}j=c.data;d=0;e=j.length;while(true){if(d>=e)break a;Oq(a,d,j[d]);d=d+1|0;}}}}
function Oq(a,b,c){var d,e,f;if(a.cr!==null&&c>a.cr.data[b].cj.data.length)a.cr.data[b].Kk(c-a.cr.data[b].E|0);d=a.c_.data[b]+(c*20|0)|0;e=a.c5.data[b];if(e===null)a.c5.data[b]=Cf(d);else if(e.data.length<d){f=Cf(d);BZ(e,0,f,0,a.c_.data[b]);a.c5.data[b]=f;}}
function Ra(a,b){var c,d,e,f;c=Bc($rt_arraycls($rt_floatcls()),b);BZ(a.c5,0,c,0,a.c5.data.length);a.c5=c;d=Bf(b);BZ(a.c_,0,d,0,a.c_.data.length);a.c_=d;e=Bc(Hs,b);f=0;if(a.cr!==null){f=a.cr.data.length;BZ(a.cr,0,e,0,a.cr.data.length);}while(f<b){e.data[f]=AHf();f=f+1|0;}a.cr=e;a.qj=Bf(b);}
function T5(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;e=b.bT.k;if(!e)return;if(a.c5.data.length<a.e3.eB.k)Ra(a,a.e3.eB.k);a.p6.bG(b);YW(a,b);f=b.bg;g=0;h=0;i=0;j=0.0;k=0;while(k<e){l=b.bT.X(k);m=l.Z.bc;n=l.W.bP;o=c+l.dr;p=d+l.k$;q=0;r=l.Z.k;while(q<r){s=i+1|0;if(i==h){t=g+1|0;j=KA(f.by(t));g=t+1|0;h=g>=f.E?(-1):f.by(g);}u=m.data;o=o+n.data[q];VL(a,u[q],o,p,j);q=q+1|0;i=s;}k=k+1|0;}FV();a.CH=Bko;}
function VL(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;f=a.e3.ie.i9;g=a.e3.ie.wt;h=c+b.ex*f;i=d+b.hh*g;j=b.cN*f;k=b.ct*g;l=b.sD;m=b.xB;n=b.nn;o=b.qD;if(a.yc){h=Dr(h);i=Dr(i);j=Dr(j);k=Dr(k);}p=h+j;q=i+k;r=b.hU;s=a.c_.data[r];t=a.c_.data;t[r]=t[r]+20|0;if(a.cr!==null){u=a.cr.data[r];v=a.wa;a.wa=v+1|0;u.eZ(v);}w=a.c5.data[r];t=w.data;x=s+1|0;t[s]=h;v=x+1|0;t[x]=i;x=v+1|0;t[v]=e;v=x+1|0;t[x]=l;y=v+1|0;t[v]=n;x=y+1|0;t[y]=h;v=x+1|0;t[x]=q;x=v+1|0;t[v]=e;v=x+1|0;t[x]=l;x=v+1|0;t[v]=o;v=x+1|0;t[x]=p;x
=v+1|0;t[v]=q;v=x+1|0;t[x]=e;x=v+1|0;t[v]=m;v=x+1|0;t[x]=o;x=v+1|0;t[v]=p;y=x+1|0;t[x]=i;v=y+1|0;t[y]=e;x=v+1|0;t[v]=m;t[x]=n;}
function AV8(a,b,c,d){return a.DH(b,c,d,0,b.i(),0.0,8,0,null);}
function A_g(a,b,c,d,e,f,g,h,i,j){var k;k=VD(F(Gz));a.mg.bG(k);k.mT(a.e3,b,e,f,a.Ax,g,h,i,j);a.De(k,c,d);return k;}
function AKn(a,b,c,d){T5(a,b,c,d+a.e3.ie.jD);}
function APg(){Bmv=B1(1.0,1.0,1.0,1.0);}
var ABz=D();
function I5(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.xC.data;f=b.yF;b.yF=f+1|0;g=A6n(e[f]);h=(g%2|0)!=1?0:1;c=c+Dg(d,g/2|0)|0;d=d*46|0;if(!h)break;}return c;}
function Kh(b){var c,d;c=I5(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function A6n(b){if(b<34)return b-32|0;if(b>=92)return (b-32|0)-2|0;return (b-32|0)-1|0;}
function Pa(){BR.call(this);this.jP=null;}
function Bgi(a){var b=new Pa();A9g(b,a);return b;}
function A9g(a,b){var c,d;Da(a);c=K();d=0;while(d<b.i()){c.bi(Er(DS(b.f(d))));d=d+1|0;}a.jP=c.d();a.bI=c.i();}
function APq(a,b,c){var d;d=0;while(true){if(d>=a.jP.i())return a.jP.i();if(a.jP.f(d)!=Er(DS(c.f(b+d|0))))break;d=d+1|0;}return (-1);}
function ANo(a){var b,c;b=a.jP;c=K();I(I(c,B(378)),b);return Q(c);}
function WS(){U.call(this);this.Fr=null;}
function Bge(a){var b=new WS();AWj(b,a);return b;}
function AWj(a,b){a.Fr=b;Bg(a);}
function ANV(a,b){return TE(b);}
var ADh=D(CX);
var AGe=D(Bp);
var AGg=D(CM);
function Sd(){var a=this;BO.call(a);a.lF=null;a.mN=null;}
function LU(a,b){var c=new Sd();AU9(c,a,b);return c;}
function AU9(a,b,c){CY(a);a.lF=b;a.mN=c;}
function AIR(a,b,c,d){var e;e=a.lF.c(b,c,d);if(e<0)e=a.mN.c(b,c,d);if(e>=0)return e;return (-1);}
function A6p(a,b){a.j=b;a.mN.L(b);a.lF.L(b);}
function A62(a){var b,c,d;b=a.lF;c=a.mN;d=K();I(I(I(I(d,B(379)),b),B(380)),c);return Q(d);}
function AJD(a,b){return 1;}
function AJg(a,b){return 1;}
var ME=D(0);
function Fp(){var a=this;C.call(a);a.f7=null;a.eQ=null;}
function Bmw(a,b){var c=new Fp();MA(c,a,b);return c;}
function MA(a,b,c){L(a);a.f7=b;a.eQ=c;}
function Nn(){var a=this;Fp.call(a);a.jW=null;a.uY=0;}
function Be$(a,b){var c=new Nn();ARy(c,a,b);return c;}
function ARy(a,b,c){MA(a,b,c);a.uY=b.cq();}
function AI5(a){return a.f7.cq();}
function AT3(a,b,c){return a.uY==b.cq()&&a.f7.K(b)?1:0;}
var AGn=D(B_);
var Fu=D(CE);
function Bej(){var a=new Fu();A9h(a);return a;}
function A9h(a){EX(a,0);}
function AUj(a,b,c,d){if(d.yh()!=1&&b!=d.D())return (-1);d.Hb();d.rY(0,b);return b;}
function AYX(a){return B(381);}
var Iq=D(Eu);
var Yc=D(Iq);
var Wb=D(BR);
function Gf(a){var b=new Wb();A49(b,a);return b;}
function A49(a,b){YK(a,b);a.bI=0;}
function A8o(a,b,c){return 0;}
function A04(a,b,c,d){var e,f,g,h,i;e=d.D();f=d.dA();while(true){g=Cx(b,e);if(g>0)return (-1);if(g<0){h=c.f(b);if(B2(h)&&b>f){i=c.f(b-1|0);if(Cb(i)){b=b+1|0;continue;}}}if(a.j.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AZk(a,b,c,d,e){var f,g,h,i;f=e.D();g=e.dA();while(true){if(c<b)return (-1);if(c<f){h=d.f(c);if(B2(h)&&c>g){i=d.f(c-1|0);if(Cb(i)){c=c+(-1)|0;continue;}}}if(a.j.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ANd(a){return B(382);}
function AXu(a,b){return 0;}
var H1=D(D_);
var AAc=D(H1);
var Jl=D(0);
function X_(){var a=this;C.call(a);a.c3=null;a.fg=null;a.pG=0;a.bM=0;}
function WF(a,b){var c=new X_();A9M(c,a,b);return c;}
function Bmx(a,b,c){var d=new X_();Xh(d,a,b,c);return d;}
function A9M(a,b,c){Xh(a,b,c,0);}
function Xh(a,b,c,d){L(a);if(b===null)G(I4());a.c3=b;a.fg=c;a.pG=d;a.bM=0;}
function A_J(a){var b,c;if(a.fg===null)G(I4());a:{b=a.c3.i();if(a.bM<b){if(a.pG)return 1;c=a.bM;while(true){if(c>=b)break a;if(a.fg.dQ(a.c3.f(c),0)==(-1))return 1;c=c+1|0;}}}return 0;}
function AI7(a){var b,c,d,e,f;if(a.fg===null)G(I4());b=a.bM;c=a.c3.i();if(b<c){if(a.pG){if(a.fg.dQ(a.c3.f(a.bM),0)>=0){d=a.c3;e=a.bM;a.bM=e+1|0;return ACp(d.f(e));}a.bM=a.bM+1|0;while(a.bM<c){if(a.fg.dQ(a.c3.f(a.bM),0)>=0)return a.c3.cA(b,a.bM);a.bM=a.bM+1|0;}return a.c3.dZ(b);}while(true){f=Cx(b,c);if(f>=0)break;if(a.fg.dQ(a.c3.f(b),0)<0)break;b=b+1|0;}a.bM=b;if(f<0){a.bM=a.bM+1|0;while(a.bM<c){if(a.fg.dQ(a.c3.f(a.bM),0)>=0)return a.c3.cA(b,a.bM);a.bM=a.bM+1|0;}return a.c3.dZ(b);}}G(ALb());}
function E$(){var a=this;C.call(a);a.hT=null;a.v$=0.0;a.wb=0.0;a.Lj=0.0;a.Lg=0.0;a.lB=0;a.ky=0;}
function Bc4(a){var b=new E$();AXQ(b,a);return b;}
function AXQ(a,b){L(a);if(b===null)G(Bo(B(383)));a.hT=b;a.Iv(0,0,b.bp(),b.bl());}
function A8B(a,b,c,d,e){var f,g;f=1.0/a.hT.bp();g=1.0/a.hT.bl();a.IM(b*f,c*g,(b+d|0)*f,(c+e|0)*g);a.lB=Yk(d);a.ky=Yk(e);}
function AJl(a,b,c,d,e){var f,g,h,i,j,k,l;f=a.hT.bp();g=a.hT.bl();h=GW(d-b);i=f;a.lB=Dr(h*i);h=GW(e-c);j=g;a.ky=Dr(h*j);if(a.lB==1&&a.ky==1){k=0.25/i;b=b+k;d=d-k;l=0.25/j;c=c+l;e=e-l;}a.v$=b;a.wb=c;a.Lj=d;a.Lg=e;}
function AUY(a){return a.hT;}
function AKy(a){return a.lB;}
function AH1(a){return a.ky;}
function K1(){var a=this;E$.call(a);a.I6=0.0;a.I5=0.0;a.J9=0;a.H1=0;}
var SM=D(Fi);
function A_Z(a,b,c,d,e,f){var g=new SM();AXc(g,a,b,c,d,e,f);return g;}
function AXc(a,b,c,d,e,f,g){Mh(a,b,c,d,e,f,g);}
function AWD(a,b){var c,d,e,f;c=a.ce.u.data;d=a.b_;e=b*4|0;f=c[d+e|0]&255|(a.ce.u.data[(a.b_+e|0)+1|0]&255)<<8|(a.ce.u.data[(a.b_+e|0)+2|0]&255)<<16|(a.ce.u.data[(a.b_+e|0)+3|0]&255)<<24;return $rt_intBitsToFloat(f);}
function A30(a,b,c){var d,e,f,g;d=$rt_floatToIntBits(c);e=a.ce.u.data;f=a.b_;g=b*4|0;e[f+g|0]=d<<24>>24;a.ce.u.data[(a.b_+g|0)+1|0]=d>>8<<24>>24;a.ce.u.data[(a.b_+g|0)+2|0]=d>>16<<24>>24;a.ce.u.data[(a.b_+g|0)+3|0]=d>>24<<24>>24;}
var LP=D(0);
function Y7(){var a=this;C.call(a);a.l3=null;a.ff=null;a.Am=null;a.iq=null;a.Ch=null;a.su=0.0;a.qf=Bd;a.lH=Bd;a.my=0.0;a.j4=0.0;a.nd=0;}
function Bb5(a){var b=new Y7();A4u(b,a);return b;}
function A4u(a,b){var c,d,e,f,g,h,i,j,k,l,m;L(a);a.su=0.0;a.qf=Ow();a.lH=O(-1);a.my=0.0;a.j4=0.0;a.Am=b;c=A0A();d=c.jm();e=b.wO;f=d.getElementById($rt_ustr(e));a.ff=f;a.l3=a.Fj(a.ff,b);a.iq=!b.v1?BfQ(a.l3):Bc$(a.l3);g=a.iq.k4(7938);h=a.iq.k4(7936);i=a.iq.k4(7937);e=new KU;IL();Ty(e,BhY,g,h,i);a.Ch=e;if(!(b.hs<0&&b.gF<0)){if(b.DL())a.oU(b.hs,b.gF);else{j=Gn();k=j.Bb()-b.n3|0;l=j.wJ()-b.sr|0;m=!b.rA?1.0:a.n7();a.oU(m*k|0,m*l|0);}}}
function AKA(a){var b;b=Ow();a.my=Lg(NH(b,a.qf))/1000.0;a.qf=b;a.j4=a.j4+a.my;a.nd=a.nd+1|0;if(a.j4>1.0){a.su=a.nd;a.j4=0.0;a.nd=0;}}
function ARr(a){return a.iq;}
function A$u(a){return a.ff.width;}
function AV$(a){return a.ff.height;}
function ATN(a){return a.my;}
function A6S(a){return a.su|0;}
function AWT(a,b,c){var d,e,f,g,h,i,j;d=a.ff;e=b;d.width=e;d=a.ff;e=c;d.height=e;if(a.Am.rA){f=a.n7();g=a.ff.style;h=b/f;ZL();i=BlP.uV();e=K();I(Nm(e,h),i);e=Q(e);g.setProperty("width",$rt_ustr(e));h=c/f;j=BlP.uV();d=K();I(Nm(d,h),j);j=Q(d);g.setProperty("height",$rt_ustr(j));}}
function A7H(a,b){return a.l3.getExtension($rt_ustr(b))===null?0:1;}
function AS_(a){return $rt_globals.devicePixelRatio||1;}
function A1p(a,b,c){var d,e,f;d=ALc();e=!!c.z1;d.alpha=e;f=!!c.x0;d.antialias=f;e=!!c.yx;d.stencil=e;e=!!c.uE;d.premultipliedAlpha=e;e=!!c.zh;d.preserveDrawingBuffer=e;e=b.getContext("webgl",d);return e;}
function Dn(){C.call(this);this.bL=null;}
function Bmy(){var a=new Dn();ES(a);return a;}
function ES(a){L(a);}
function AVC(a){a.bL.be();}
function A1v(a){return a.bL.Co();}
var ABg=D(Gp);
function Bmz(a){var b=new ABg();AJ8(b,a);return b;}
function AJ8(a,b){K8(a,b);}
function Qo(){var a=this;Ff.call(a);a.rS=null;a.r6=null;a.A0=null;a.cP=null;a.xY=null;a.dD=null;a.m6=0;a.r4=0;}
function BmA(a,b){var c=new Qo();RI(c,a,b);return c;}
function BdE(a){var b=new Qo();AHJ(b,a);return b;}
function BmB(a,b){var c=new Qo();AEo(c,a,b);return c;}
function RI(a,b,c){var d,e;d=c.Hs();DQ();e=BhD;e=AFY(d,e);d=BhD;e=Ux(e,d);AEo(a,b,e);}
function AHJ(a,b){KY();RI(a,b,Bkd);}
function AEo(a,b,c){LJ(a);a.A0=Cw(8192);a.cP=HX(a.A0);a.xY=B8(1024);a.dD=Ue(a.xY);a.rS=b;a.r6=c;a.dD.qx(BE(a.dD));a.cP.eS(BE(a.cP));}
function A89(a){a.rS.gC();}
function ANt(a,b,c,d){var e,f;if(a.r4&&!Cq(a.dD))return (-1);e=0;a:{while(d>0){f=BN(d,Be(a.dD));a.dD.tZ(b,c+e|0,f);d=d-f|0;e=e+f|0;if(!Cq(a.dD)&&!AGr(a))break a;}}return e;}
function AGr(a){if(a.r4)return 0;a.dD.E2();a:{while(true){if(!Cq(a.cP)&&!AEt(a))break a;if(!(AAY(a.r6,a.cP,a.dD,a.m6)).hJ())continue;else break;}}if(!Cq(a.cP)&&a.m6&&(Tq(a.r6,a.dD)).mx())a.r4=1;T$(a.dD);return 1;}
function AEt(a){var b;if(a.m6)return 0;a.cP.Lx();a:{while(true){if(!Cq(a.cP))break a;b=a.rS.ud(H7(a.cP),Cd(a.cP),Be(a.cP));if(b==(-1)){a.m6=1;break a;}a.cP.eS(Cd(a.cP)+b|0);if(!b)break;}}JS(a.cP);return 1;}
var Zo=D();
var ABQ=D();
function AUO(b,c,d){var e;if(b===null)return null;e=Beu(b,ARZ(b),c,d);return e;}
function YT(){var a=this;C.call(a);a.m$=0;a.Az=0;a.yn=0;a.ze=0;a.ju=null;}
function Bdp(a){var b=new YT();ARn(b,a);return b;}
function ARn(a,b){a.ju=b;L(a);a.Az=a.ju.fo;a.yn=a.ju.cx();a.ze=(-1);}
function A5x(a){return a.m$>=a.yn?0:1;}
function A9o(a){var b,c;Rd(a);a.ze=a.m$;b=a.ju;c=a.m$;a.m$=c+1|0;return b.X(c);}
function Rd(a){if(a.Az>=a.ju.fo)return;G(Ban());}
var Ot=D(0);
function AD5(){C.call(this);this.Cs=null;}
function Bfi(a){var b=new AD5();A0g(b,a);return b;}
function A0g(a,b){L(a);a.Cs=b;}
var Z0=D();
var ND=D();
var BmC=null;function BmD(){BmD=M(ND);A4y();}
function A4y(){BmC=Bf((Ye()).data.length);BmC.data[Bj(BmE)]=1;BmC.data[Bj(BmF)]=2;}
var F_=D(Cr);
var BmG=null;var BmH=null;function BmI(){BmI=M(F_);AZg();}
function AZg(){BmG=Z();BmH=Z();}
var AEQ=D(F_);
function JT(){var a=this;C.call(a);a.H3=null;a.GH=0.0;a.Do=0.0;a.f8=null;a.hv=null;a.lA=null;a.gV=0;}
function XK(a,b,c,d){var e,f;L(a);a.f8=B(384);DQ();a.hv=BhC;a.lA=BhC;if(c<=0.0){e=new Cp;f=K();Fl(I(f,B(385)),c);Ew(e,Q(f));G(e);}if(d>0.0){a.H3=b;a.GH=c;a.Do=d;return;}e=new Cp;f=K();Fl(I(f,B(386)),d);Ew(e,Q(f));G(e);}
function AFY(a,b){if(b!==null){a.hv=b;a.sb(b);return a;}G(Bo(B(387)));}
function A9G(a,b){}
function Ux(a,b){if(b!==null){a.lA=b;a.n8(b);return a;}G(Bo(B(387)));}
function A2f(a,b){}
function AAY(a,b,c,d){var e,f,g,$$je;if(!(a.gV==2&&!d)&&a.gV!=3){a.gV=d?2:1;while(true){try{e=a.Bx(b,c);}catch($$e){$$je=Bn($$e);if($$je instanceof Bk){f=$$je;G(AZ9(f));}else{throw $$e;}}if(e.hJ())return e;if(e.mx()){if(d&&Cq(b)){g=a.hv;DQ();if(g===BhC)return Cm(Be(b));if(Be(c)<=a.f8.i())return BhF;b.eS(Cd(b)+Be(b)|0);if(a.hv===BhD)Jb(c,a.f8);}return e;}if(e.vJ()){g=a.hv;DQ();if(g===BhC)return e;if(a.hv===BhD){if(Be(c)<a.f8.i())return BhF;Jb(c,a.f8);}b.eS(Cd(b)+e.i()|0);}else if(e.ra()){g=a.lA;DQ();if(g===BhC)break;if
(a.lA===BhD){if(Be(c)<a.f8.i())return BhF;Jb(c,a.f8);}b.eS(Cd(b)+e.i()|0);}}return e;}G(JI());}
function Tq(a,b){if(a.gV!=3&&a.gV!=2)G(JI());a.gV=3;return a.CD(b);}
function AP9(a,b){BD();return BhG;}
function H5(){var a=this;JT.call(a);a.xy=null;a.zw=null;}
function Zb(a,b,c,d){XK(a,b,c,d);a.xy=Cw(512);a.zw=B8(512);}
function ATY(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.xy;e=0;f=0;g=a.zw;a:{while(true){if((e+32|0)>f&&Cq(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=BN(Be(b)+j|0,i.length);b.wi(d,j,f-j|0);e=0;}if(!Cq(c)){if(!Cq(b)&&e>=f){BD();k=BhG;}else{BD();k=BhF;}break a;}i=g.data;l=0;m=BN(Be(c),i.length);n=BbZ(b,c);k=a.Ck(d,e,f,g,l,m,n);e=n.ws;if(k===null&&l==n.nQ){BD();k=BhG;}j=n.nQ;c.KX(g,0,j);if(k!==null)break;}}b.eS(Cd(b)-(f-e|0)|0);return k;}
var Ut=D(H5);
function Bb7(a){var b=new Ut();A3V(b,a);return b;}
function A3V(a,b){Zb(a,b,0.3333333432674408,0.5);}
function A$v(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(h.fn(2))break a;BD();i=BhG;break a;}n=k+1|0;o=j[k];if(!E9(a,o)){c=n+(-2)|0;i=Cm(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|o&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(h.fn(3))break a;BD();i=BhG;break a;}n=k+1|0;o=j[k];k=n+1|0;p=j[n];if(!E9(a,o))break b;if(!E9(a,p))break b;q
=((l&15)<<12|(o&63)<<6|p&63)&65535;if(JV(q)){c=k+(-3)|0;i=Cm(3);break a;}j=e.data;m=f+1|0;j[f]=q;}else{if((l&248)!=240){c=k+(-1)|0;i=Cm(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(h.fn(4))break a;BD();i=BhG;break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.eq(2))break a;BD();i=BhF;break a;}n=k+1|0;o=j[k];m=n+1|0;p=j[n];k=m+1|0;r=j[m];if(!E9(a,o))break c;if(!E9(a,p))break c;if(!E9(a,r))break c;j=e.data;s=(l&7)<<18|(o&63)<<12|(p&63)<<6|r&63;n=f+1|0;j[f]=F9(s);m=n+1|0;j[n]=FN(s);}c=k;f=m;}break a;}c=k+(-3)|0;i=Cm(1);break a;}c
=k+(-3)|0;i=Cm(1);}h.gd(c);h.ft(f);return i;}
function E9(a,b){return (b&192)!=128?0:1;}
var Ix=D();
var TW=D();
function A7T(){return $rt_globals.window.localStorage;}
var AHh=D(CK);
function Bcc(a,b,c){var d=new AHh();AR2(d,a,b,c);return d;}
function AR2(a,b,c,d){FB(a,b,c,d);}
function AIw(a,b,c,d){var e;a:{while(true){if((b+a.bm.b5()|0)>d.D())break a;e=a.bm.bB(b,c);if(e<1)break;b=b+e|0;}}return a.j.c(b,c,d);}
function AEy(){var a=this;C.call(a);a.uC=null;a.Ae=null;a.ws=0;a.nQ=0;}
function BbZ(a,b){var c=new AEy();A5E(c,a,b);return c;}
function A5E(a,b,c){L(a);a.uC=b;a.Ae=c;}
function A2M(a,b){return Be(a.uC)<b?0:1;}
function AYx(a,b){return Be(a.Ae)<b?0:1;}
function A9B(a,b){a.ws=b;}
function A7y(a,b){a.nQ=b;}
var Kk=D(0);
var TB=D();
function BfN(){var a=new TB();AYo(a);return a;}
function AYo(a){L(a);}
var Dw=D(Ce);
function BmJ(){var a=new Dw();JQ(a);return a;}
function JQ(a){GZ(a);}
var LK=D(Dw);
function Bf_(){var a=new LK();A3$(a);return a;}
function A3$(a){JQ(a);}
var ACu=D(Ea);
function Qj(){U.call(this);this.Fm=null;}
function BaE(a){var b=new Qj();A$9(b,a);return b;}
function A$9(a,b){a.Fm=b;Bg(a);}
function AUw(a,b){return WN(b);}
var Ke=D(0);
function LG(){var a=this;C.call(a);a.gU=null;a.qz=null;}
var BmK=null;function AM0(){AM0=M(LG);A1V();}
function A0A(){var a=new LG();SG(a);return a;}
function Gn(){AM0();return BmK;}
function SG(a){AM0();L(a);a.gU=$rt_globals.window;}
function A2t(a){var b;b=a.gU.document;return b;}
function A8S(a,b){a.qz=b;$rt_globals.requestAnimationFrame(B4(a,"onAnimationFrame"));}
function A1c(a,b){var c;c=a.qz;a.qz=null;c.hZ();}
function A4l(a){var b;b=a.gU.location;return b;}
function A0r(a){return a.gU.document.documentElement.clientWidth;}
function AYQ(a){return a.gU.document.documentElement.clientHeight;}
function AZC(a,b,c){var d;d=Fz(c,"handleEvent");a.gU.addEventListener($rt_ustr(b),B4(d,"handleEvent"));}
function A1V(){BmK=A0A();}
function A6M(a,b){a.Fu(b);}
var Og=D(0);
var Ju=D(BI);
var Tt=D(Ju);
var ZU=D();
function N4(){var a=this;Fp.call(a);a.mF=0;a.d_=null;}
function Bcm(a,b){var c=new N4();ARA(c,a,b);return c;}
function ARA(a,b,c){MA(a,b,null);a.mF=c;}
var EZ=D(0);
var TT=D(DC);
var AGv=D();
var VU=D(W);
function A_2(){var a=new VU();AOc(a);return a;}
function AOc(a){Bs(a);}
function ATz(a){return (C0()).bu(65,90);}
var Y$=D(Dn);
function Bao(){var a=new Y$();AL$(a);return a;}
function Bew(a){var b=new Y$();A6h(b,a);return b;}
function AL$(a){ES(a);a.bL=BcS();}
function A6h(a,b){ES(a);a.bL=A7g(0);a.bL.bb(b);}
function A71(a,b,c){a.bL.Iy(b,c);}
function AO4(a){return a.bL.pT();}
function AL2(a,b,c){var d;d=a.bL.rP(b);c.w=d.cQ();c.v=d.cM();}
var EG=D(Y);
var BmL=null;var BmM=null;var BmN=null;var BmO=null;function Bd5(){Bd5=M(EG);ASD();}
function Pc(a,b){var c=new EG();Wc(c,a,b);return c;}
function Wc(a,b,c){Bd5();BJ(a,b,c);}
function ASD(){BmL=Pc(B(388),0);BmM=Pc(B(389),1);BmN=Pc(B(390),2);BmO=H(EG,[BmL,BmM,BmN]);}
var AAz=D(Ci);
function YL(){Bz.call(this);this.y0=null;}
function BfO(a){var b=new YL();A7d(b,a);return b;}
function A7d(a,b){Cu(a);a.y0=b;}
function AZf(a,b,c,d){var e,f;a:{if(b!=d.D()){if(!b)break a;if(d.hB()&&b==d.dA())break a;e=a.y0;f=b-1|0;if(e.zG(c.f(f),c.f(b)))break a;}return (-1);}return a.j.c(b,c,d);}
function AMu(a,b){return 0;}
function AXW(a){return B(391);}
var Ir=D(BX);
var BmP=null;var BmQ=null;function QX(){QX=M(Ir);AMD();}
function Bek(){var a=new Ir();QP(a);return a;}
function Bba(a){var b=new Ir();AC$(b,a);return b;}
function QP(a){QX();B6(a);a.cD(O(XX()),1);}
function AC$(a,b){QX();B6(a);a.cD(Bd,0);}
function A_P(a){return Xo(T(a.C));}
function AY0(a){return Wd(T(a.C));}
function AMD(){BmP=Bba(0);BmQ=Bek();}
function XX(){var jsObj=new $rt_globals.Box2D.b2Rot();return $rt_globals.Box2D.getPointer(jsObj);}
function Xo(b){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Rot);var returnedJSObj=jsObj.s;return returnedJSObj;}
function Wd(b){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Rot);var returnedJSObj=jsObj.c;return returnedJSObj;}
var Sr=D(BI);
function Jv(){var a=this;C.call(a);a.dH=null;a.dW=null;a.lk=0;a.FN=0;a.ri=0;a.iY=0;a.lZ=0;}
function A4w(a,b,c){var d=new Jv();ADc(d,a,b,c);return d;}
function ADc(a,b,c,d){L(a);a.iY=0;a.lZ=0;a.FN=b;a.dH=d;a.dW=Ij(Dg(a.dH.cJ/4|0,c));I2(a.dW);a.lk=Bij.g$();a.ri=!b?35048:35044;}
function AMt(a){return a.dH;}
function AR_(a){return BE(a.dW)/(a.dH.cJ/4|0)|0;}
function AG5(a){if(a.lZ){Bij.d8(34962,BE(a.dW),a.dW,a.ri);a.iY=0;}}
function A5$(a,b,c,d){a.iY=1;OE(b,a.dW,d,c);a.dW.qK(0);a.dW.mP(d);AG5(a);}
function A0X(a,b,c){var d,e,f,g,h,i;d=Bij;d.bV(34962,a.lk);if(a.iY){d.d8(34962,BE(a.dW),a.dW,a.ri);a.iY=0;}a:{e=D5(a.dH);if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data;h=Dc(a.dH,f);i=g[f];if(i>=0){b.jx(i);b.j$(i,h.dh,h.ez,h.eL,a.dH.cJ,h.ev);}f=f+1|0;}}f=0;while(f<e){h=Dc(a.dH,f);i=b.me(h.eb);if(i>=0){b.jx(i);b.j$(i,h.dh,h.ez,h.eL,a.dH.cJ,h.ev);}f=f+1|0;}}a.lZ=1;}
function AX1(a,b,c){var d,e,f,g;a:{d=Bij;e=D5(a.dH);if(c===null){f=0;while(f<e){b.xJ((Dc(a.dH,f)).eb);f=f+1|0;}}else{f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0)b.q0(g);f=f+1|0;}}}d.bV(34962,0);a.lZ=0;}
function AT4(a){var b;b=Bij;b.bV(34962,0);b.h_(a.lk);a.lk=0;}
var Ze=D(Jv);
function Bct(a,b){var c=new Ze();A7Z(c,a,b);return c;}
function A7Z(a,b,c){ADc(a,0,b,c);}
var Va=D(W);
function BcO(){var a=new Va();AMK(a);return a;}
function AMK(a){Bs(a);}
function A7$(a){return (C0()).bu(97,122);}
var AB9=D(CM);
var Iu=D(E_);
var AB8=D(Iu);
var T2=D(CD);
var II=D(BI);
var ZV=D(II);
var SJ=D(W);
function Bcz(){var a=new SJ();AJN(a);return a;}
function AJN(a){Bs(a);}
function ARN(a){return BcL(a);}
function ACs(){var a=this;C.call(a);a.eo=null;a.dl=null;a.iI=0;a.Dq=0;a.hi=0;a.mc=0;a.ve=0;}
function A_d(a,b){var c=new ACs();A0x(c,a,b);return c;}
function A0x(a,b,c){L(a);a.hi=1;a.mc=0;a.dl=Nf(c*2|0);a.Dq=1;a.ve=!b?35048:35044;a.eo=a.dl.sZ();a.eo.eH();a.dl.eH();a.iI=AGP(a);}
function AGP(a){var b;b=Bij.g$();Bij.bV(34963,b);Bij.d8(34963,ED(a.dl),null,a.ve);Bij.bV(34963,0);return b;}
function ARW(a){return BE(a.eo);}
function AWE(a){return ED(a.eo);}
function A20(a,b,c,d){a.hi=1;a.eo.dm();a.eo.zo(b,c,d);a.eo.eH();a.dl.c4(0);a.dl.c7(d<<1);if(a.mc){Bij.kx(34963,0,BE(a.dl),a.dl);a.hi=0;}}
function AUC(a){a.hi=1;return a.eo;}
function AOp(a){if(!a.iI)G(BG(B(392)));Bij.bV(34963,a.iI);if(a.hi){a.dl.c7(BE(a.eo)*2|0);Bij.kx(34963,0,BE(a.dl),a.dl);a.hi=0;}a.mc=1;}
function AJB(a){Bij.bV(34963,0);a.mc=0;}
function AJR(a){var b;b=Bij;b.bV(34963,0);b.h_(a.iI);a.iI=0;}
var Zs=D(Bz);
function BaI(){var a=new Zs();ATb(a);return a;}
function ATb(a){Cu(a);}
function AN8(a,b,c,d){if(b!=d.IQ())return (-1);return a.j.c(b,c,d);}
function AVY(a,b){return 0;}
function AX7(a){return B(393);}
var Mr=D(0);
var Q_=D();
var Lj=D(CE);
function BmR(a){var b=new Lj();ACX(b,a);return b;}
function ACX(a,b){EX(a,b);}
function AXj(a,b,c,d){var e;e=a.h7();d.bo(e,b-d.dI(e)|0);return a.j.c(b,c,d);}
function AZT(a){return B(394);}
function A7_(a,b){return 0;}
var X8=D(D_);
var AGu=D(Gs);
var ADP=D(HK);
var LQ=D();
var BmS=null;function AQU(){AQU=M(LQ);AOe();}
function Jd(b){var c,d;AQU();if(!b)return 1;c=b+(-1)|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function US(b,c,d){AQU();return GW(b-c)>d?0:1;}
function AOe(){BmS=Bfg();}
function Yi(){BR.call(this);this.oI=0;}
function BbT(a){var b=new Yi();A8M(b,a);return b;}
function A8M(a,b){Da(a);a.bI=2;a.oI=Fr(EI(b));}
function ASH(a,b,c){var d,e,f;d=b+1|0;e=c.f(b);f=c.f(d);return a.oI!=Fr(EI(Ds(e,f)))?(-1):2;}
function A_v(a){var b,c;b=MH(E2(a.oI));c=K();I(I(c,B(395)),b);return Q(c);}
function SF(){var a=this;C.call(a);a.JQ=null;a.fX=null;a.pA=null;a.ou=0;a.v5=0.0;a.ml=0.0;a.n0=0.0;a.iX=0.0;a.pl=0.0;a.d7=0.0;a.jD=0.0;a.gO=0.0;a.ii=0.0;a.tQ=0.0;a.i9=0.0;a.wt=0.0;a.jR=0;a.fE=null;a.gK=null;a.sn=0.0;a.qV=0.0;a.zi=null;a.td=null;a.tX=null;}
function Bdo(a,b){var c=new SF();A5B(c,a,b);return c;}
function A5B(a,b,c){L(a);a.d7=1.0;a.tQ=1.0;a.i9=1.0;a.wt=1.0;a.fE=Bc($rt_arraycls(JX),128);a.qV=1.0;a.td=Hm([120,101,97,111,110,115,114,99,117,109,118,119,122]);a.tX=Hm([77,78,66,68,67,69,70,75,65,71,72,73,74,76,79,80,81,82,83,84,85,86,87,88,89,90]);a.pA=b;a.ou=c;a.KS(b,c);}
function AKd(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,$$je;if(a.fX!==null)G(CJ(B(396)));a.JQ=b.Jw();d=BbV(BdE(b.s$()),512);a:{b:{try{e=d.i6();if(e===null)G(BG(B(397)));f=e.dZ(e.IG(B(398))+8|0);g=(f.cA(0,f.wR(32))).sA(B(399),4);h=g.data;if(h.length!=4)G(BG(B(400)));a.v5=BU(h[0]);a.ml=BU(h[1]);a.n0=BU(h[2]);a.iX=BU(h[3]);i=a.v5+a.n0;f=d.i6();if(f===null)G(BG(B(401)));j=f.sA(B(39),9);h=j.data;k=h.length;if(k<3)G(BG(B(402)));if(!h[1].d2(B(403)))G(BG(B(404)));a.pl
=BU(h[1].dZ(11));if(!h[2].d2(B(405)))G(BG(B(406)));c:{l=BU(h[2].dZ(5));m=1;if(k<6)n=m;else if(h[5]===null)n=m;else if(!h[5].d2(B(407)))n=m;else{try{n=Bt(1,BU(h[5].dZ(6)));m=n;break c;}catch($$e){$$je=Bn($$e);if($$je instanceof Cg){}else{throw $$e;}}n=m;}}a.fX=Bc(BL,n);o=0;d:{e:{f:{while(true){if(o>=n)break d;f=d.i6();if(f===null)G(BG(B(408)));g:{p=F1(FW(B(409)),f);if(Fj(p)){q=Fs(p,1);try{r=BU(q);if(r!=o)break f;break g;}catch($$e){$$je=Bn($$e);if($$je instanceof Cg){s=$$je;break e;}else{throw $$e;}}}}f=F1(FW(B(410)),
f);if(!Fj(f))break;t=Fs(f,1);a.fX.data[o]=(((b.Gh()).FG(t)).fG()).BU(B(411),B(47));o=o+1|0;}G(BG(B(412)));}try{G(BG((((K()).h(B(413))).h(q)).d()));}catch($$e){$$je=Bn($$e);if($$je instanceof Cg){s=$$je;}else{throw $$e;}}}G(ACI((((K()).h(B(414))).h(q)).d(),s));}a.gO=0.0;h:{while(true){f=d.i6();if(f===null)break;if(f.d2(B(415)))break h;if(f.d2(B(416)))break h;if(!f.d2(B(417)))continue;u=AJp();v=WF(f,B(418));v.J();v.J();w=BU(v.J());if(w<=0)a.gK=u;else{if(w>65535)continue;a.uG(w,u);}u.e_=w;v.J();u.qt=BU(v.J());v.J();u.qu
=BU(v.J());v.J();u.cN=BU(v.J());v.J();u.ct=BU(v.J());v.J();u.ex=BU(v.J());v.J();if(c)u.hh=BU(v.J());else u.hh= -(u.ct+BU(v.J())|0)|0;v.J();u.f9=BU(v.J());if(v.tg())v.J();i:{if(v.tg())try{u.hU=BU(v.J());break i;}catch($$e){$$je=Bn($$e);if($$je instanceof Cg){}else{throw $$e;}}}if(u.cN>0&&u.ct>0)a.gO=JP(l+u.hh,a.gO);}}a.gO=a.gO+a.n0;j:{while(true){f=d.i6();if(f===null)break;if(!f.d2(B(419)))break j;v=WF(f,B(418));v.J();v.J();x=BU(v.J());v.J();y=BU(v.J());if(x<0)continue;if(x>65535)continue;if(y<0)continue;if(y
>65535)continue;u=a.gI(x&65535);v.J();z=BU(v.J());if(u!==null)u.BS(y,z);}}ba=0;bb=0.0;bc=0.0;bd=0.0;be=0.0;bf=0.0;bg=0.0;bh=0.0;if(f!==null&&f.d2(B(416))){ba=1;v=WF(f,B(418));v.J();v.J();bb=En(v.J());v.J();bc=En(v.J());v.J();bd=En(v.J());v.J();be=En(v.J());v.J();bf=En(v.J());v.J();bg=En(v.J());v.J();bh=En(v.J());}bi=a.gI(32);if(bi===null){bi=AJp();bi.e_=32;bj=a.gI(108);if(bj===null)bj=a.yI();bi.f9=bj.f9;a.uG(32,bi);}if(!bi.cN){bi.cN=a.iX+bi.f9+a.ml|0;bi.ex= -a.iX|0;}a.sn=bi.f9;bk=null;h=a.td.data;k=h.length;bl
=0;k:{while(bl<k){bm=h[bl];bk=a.gI(bm);if(bk!==null)break k;bl=bl+1|0;}}if(bk===null)bk=a.yI();a.qV=bk.ct-i;bn=null;h=a.tX.data;n=h.length;k=0;l:{while(k<n){bo=h[k];bn=a.gI(bo);if(bn!==null)break l;k=k+1|0;}}if(bn!==null)a.d7=bn.ct;else{h=a.fE.data;n=h.length;k=0;while(k<n){m:{bp=h[k];if(bp!==null){bq=bp.data;bl=bq.length;br=0;while(true){if(br>=bl)break m;u=bq[br];if(u!==null&&u.ct&&u.cN)a.d7=EB(a.d7,u.ct);br=br+1|0;}}}k=k+1|0;}}a.d7=a.d7-i;a.jD=l-a.d7;a.ii= -a.pl;if(c){a.jD= -a.jD;a.ii= -a.ii;}if(ba){a.jD
=bb;a.gO=bc;a.ii=bd;a.d7=be;a.pl=bf;a.sn=bg;a.qV=bh;}}catch($$e){$$je=Bn($$e);if($$je instanceof Ce){s=$$je;break b;}else{f=$$je;break a;}}Mw(d);return;}try{G(ACI((((K()).h(B(420))).e2(b)).d(),s));}catch($$e){$$je=Bn($$e);f=$$je;}}Mw(d);G(f);}
function AXB(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=c.xl();e=1.0/d.bp();f=1.0/d.bl();g=0.0;h=0.0;i=c.v$;j=c.wb;k=c.Dw();l=c.GS();if(c instanceof K1){m=c;g=m.I6;h=(m.H1-m.J9|0)-m.I5;}n=b.qt;o=b.qt+b.cN|0;p=b.qu;q=b.qu+b.ct|0;if(g<=0.0)k=o;else{n=n-g;if(n<0.0){b.cN=b.cN+n|0;b.ex=b.ex-n|0;n=0.0;}r=o-g;if(r<=k)k=r;else b.cN=b.cN-(r-k)|0;}if(h<=0.0)l=q;else{p=p-h;if(p<0.0){b.ct=b.ct+p|0;if(b.ct<0)b.ct=0;p=0.0;}r=q-h;if(r<=l)l=r;else{s=r-l;b.ct=b.ct-s|0;b.hh=b.hh+s|0;}}b.sD=i+n*e;b.xB=i+k*e;if(!a.ou){b.qD=j
+p*f;b.nn=j+l*f;}else{b.nn=j+p*f;b.qD=j+l*f;}}
function AVq(a,b,c){var d,e,f;d=a.fE.data;e=b/512|0;f=d[e];if(f===null){d=a.fE.data;f=Bc(JX,512);d[e]=f;}f.data[b&511]=c;}
function A44(a){var b,c,d,e,f,g,h,i;b=a.fE.data;c=b.length;d=0;a:while(true){if(d>=c)G(BG(B(421)));b:{e=b[d];if(e!==null){f=e.data;g=f.length;h=0;while(true){if(h>=g)break b;i=f[h];if(i!==null&&i.ct&&i.cN)break a;h=h+1|0;}}}d=d+1|0;}return i;}
function AKH(a,b){var c;c=a.fE.data[b/512|0];if(c===null)return null;return c.data[b&511];}
function AJY(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q;g=e-d|0;if(!g)return;h=a.jR;i=a.i9;j=b.Z;k=b.W;j.fD(g);b.W.Kj(g+1|0);while(true){a:{l=d+1|0;m=c.f(d);if(m!=13){n=a.gI(m);if(n===null){if(a.gK===null)break a;n=a.gK;}j.bG(n);if(f!==null){o=f.f9;p=(o+f.Fl(m)|0)*i;}else p=n.pX?0.0:( -n.ex|0)*i-a.iX;k.wG(p);if(!h)f=n;else if(m!=91)f=n;else if(l>=e)f=n;else if(c.f(l)!=91)f=n;else{l=l+1|0;f=n;}}}if(l>=e)break;d=l;}if(f!==null){q=f.pX?f.f9*i:(f.cN+f.ex|0)*i-a.ml;k.wG(q);}}
function AHE(a,b,c){var d,e,f,g,h;d=c-1|0;e=b.bc;f=e.data;g=f[d].e_&65535;if(a.l4(g))return d;if(a.t6(g))d=d+(-1)|0;a:{while(d>0){h=f[d].e_&65535;if(a.l4(h))break a;if(a.t6(h))break a;d=d+(-1)|0;}return 0;}return d+1|0;}
function AKs(a,b){var c,d,e,f;if(a.zi===null)return 0;c=a.zi.data;d=c.length;e=0;while(e<d){f=c[e];if(b==f)return 1;e=e+1|0;}return 0;}
function AK3(a,b){switch(b){case 9:case 10:case 13:case 32:break;default:return 0;}return 1;}
var ACb=D(CI);
function Z8(){var a=this;W.call(a);a.t7=0;a.yV=0;}
function P(a,b){var c=new Z8();A$x(c,a,b);return c;}
function A$x(a,b,c){Bs(a);a.t7=b;a.yV=c;}
function AO5(a){var b;b=(C0()).bu(a.t7,a.yV);return b;}
var Ex=D(CK);
function BbE(a,b,c){var d=new Ex();N1(d,a,b,c);return d;}
function N1(a,b,c,d){FB(a,b,c,d);}
function A4H(a,b,c,d){var e;e=a.R.c(b,c,d);if(e<0)e=a.j.c(b,c,d);return e;}
function AWa(a,b){Mb(a,b);a.R.L(b);}
var TH=D(Go);
function A0Z(a,b){var c=new TH();A5u(c,a,b);return c;}
function A5u(a,b,c){LM(a,b,c);}
var OQ=D(Fh);
var BmT=null;function BmU(){BmU=M(OQ);A3U();}
function A3U(){BmT=Z();}
function ACU(){U.call(this);this.I1=null;}
function Bb6(a){var b=new ACU();AST(b,a);return b;}
function AST(a,b){a.I1=b;Bg(a);}
function AUi(a,b){return WV(b);}
function Xw(){C.call(this);this.yq=null;}
function BaM(a){var b=new Xw();A2B(b,a);return b;}
function A2B(a,b){L(a);a.yq=b;}
function A9E(a){A3H(a.yq);}
var Yv=D(Db);
function A5J(a){var b=new Yv();AKN(b,a);return b;}
function AKN(a,b){AD9(a,b);}
function AN4(a,b){return a.dp.n(Fr(EI(b)));}
function AVe(a){var b,c,d;b=!a.oQ?B(39):B(40);c=a.dp.d();d=K();I(I(I(d,B(422)),b),c);return Q(d);}
var M3=D(0);
var FK=D(Y);
var BmE=null;var BmF=null;var BmV=null;function A97(){A97=M(FK);AIA();}
function AWn(a,b){var c=new FK();ADU(c,a,b);return c;}
function Ye(){A97();return BmV.dX();}
function ADU(a,b,c){A97();BJ(a,b,c);}
function AIA(){BmE=AWn(B(423),0);BmF=AWn(B(424),1);BmV=H(FK,[BmE,BmF]);}
var XY=D(W);
function Bbi(){var a=new XY();A5p(a);return a;}
function A5p(a){Bs(a);}
function A2g(a){return (((C0()).bu(33,64)).bu(91,96)).bu(123,126);}
function KX(){var a=this;C.call(a);a.et=null;a.de=null;a.iP=0;a.FX=0;a.rv=0;a.iR=0;a.nf=0;a.hy=0;a.dq=null;}
var BmW=null;function Sk(){Sk=M(KX);A_o();}
function A3M(a,b,c){var d=new KX();Z9(d,a,b,c);return d;}
function Z9(a,b,c,d){Sk();L(a);a.iR=0;a.nf=0;a.hy=(-1);a.dq=AHf();a.FX=b;a.et=d;a.de=Ij(Dg(a.et.cJ/4|0,c));I2(a.de);a.iP=Bij.g$();a.rv=!b?35048:35044;Sh(a);}
function AX6(a){return a.et;}
function A5H(a){return (BE(a.de)*4|0)/a.et.cJ|0;}
function Zi(a){if(a.nf){Bij.d8(34962,BE(a.de),a.de,a.rv);a.iR=0;}}
function AYj(a,b,c,d){a.iR=1;OE(b,a.de,d,c);a.de.qK(0);a.de.mP(d);Zi(a);}
function ATo(a,b,c){var d;d=Bik;d.LB(a.hy);AEZ(a,b,c);AE3(a,d);a.nf=1;}
function AEZ(a,b,c){var d,e,f,g,h,i;d=!a.dq.E?0:1;a:{e=D5(a.et);if(d){if(c===null){f=0;while(d&&f<e){g=Dc(a.et,f);h=b.me(g.eb);d=h!=a.dq.by(f)?0:1;f=f+1|0;}}else{i=c.data;d=i.length!=a.dq.E?0:1;f=0;while(d){if(f>=e)break a;d=i[f]!=a.dq.by(f)?0:1;f=f+1|0;}}}}b:{if(!d){Bii.bV(34962,a.iP);Xz(a,b);a.dq.bz();f=0;while(true){if(f>=e)break b;g=Dc(a.et,f);if(c!==null){i=c.data;a.dq.eZ(i[f]);}else a.dq.eZ(b.me(g.eb));h=a.dq.by(f);if(h>=0){b.jx(h);b.j$(h,g.dh,g.ez,g.eL,a.et.cJ,g.ev);}f=f+1|0;}}}}
function Xz(a,b){var c,d,e;if(a.dq===null)return;c=D5(a.et);d=0;while(d<c){e=a.dq.by(d);if(e>=0)b.q0(e);d=d+1|0;}}
function AE3(a,b){if(a.iR){b.bV(34962,a.iP);a.de.mP(BE(a.de));b.d8(34962,BE(a.de),a.de,a.rv);a.iR=0;}}
function ALa(a,b,c){var d;d=Bik;d.LB(0);a.nf=0;}
function A0K(a){var b;b=Bik;b.bV(34962,0);b.h_(a.iP);a.iP=0;AAB(a);}
function Sh(a){Sk();Iw(BmW);Bik.O3(1,BmW);a.hy=BmW.Gr();}
function AAB(a){if(a.hy!=(-1)){Sk();Iw(BmW);BmW.eu(a.hy);XW(BmW);Bik.Qy(1,BmW);a.hy=(-1);}}
function A_o(){BmW=G6(1);}
var R0=D();
function ATA(b,c,d){var e,f;e=0;while(e<d){f=b.data[e+c|0];$rt_putStderr(f&255);e=e+1|0;}}
function A2I(b,c,d){var e,f;e=0;while(e<d){f=b.data[e+c|0];$rt_putStdout(f&255);e=e+1|0;}}
var UB=D(Ci);
var YQ=D(B_);
var N0=D(0);
function J1(){var a=this;C.call(a);a.x=null;a.cR=null;a.qJ=0;a.ed=null;a.nv=0;a.h6=null;a.qh=0;a.JG=null;a.Cl=0;a.CJ=null;a.HT=0;a.nN=null;a.qL=0;a.jK=null;a.ru=0;a.qr=0;a.j6=null;a.jE=null;a.jp=null;a.ki=null;}
function BfQ(a){var b=new J1();ADg(b,a);return b;}
function ADg(a,b){L(a);a.cR=Df();a.qJ=1;a.ed=Df();a.nv=1;a.h6=Df();a.qh=1;a.JG=Df();a.Cl=1;a.CJ=Df();a.HT=1;a.nN=Df();a.qL=1;a.jK=Df();a.ru=1;a.qr=0;a.x=b;a.j6=(DO()).w5(40000);a.jp=(DO()).xz(12000);a.jE=(DO()).wI(12000);a.ki=(DO()).A1(240000);a.x.pixelStorei(37441,0);}
function ACt(a,b){if(Be(b)>a.j6.length)a.j6=(DO()).w5(Be(b));}
function R_(a,b){if(Be(b)>a.jp.length)a.jp=(DO()).xz(Be(b));}
function W0(a,b){if(Be(b)>a.jE.length)a.jE=(DO()).wI(Be(b));}
function Z7(a,b){if(Be(b)>a.ki.length)a.ki=(DO()).A1(Be(b));}
function AVQ(a,b){var c,d,e,f,g;ACt(a,b);c=Cd(b);d=0;while(c<BE(b)){e=a.j6;f=b.i2(c);e[d]=f;c=c+1|0;d=d+1|0;}e=a.j6;g=Be(b);return e.subarray(0,g);}
function AOZ(a,b){var c,d,e,f,g;R_(a,b);c=Cd(b);d=0;while(c<BE(b)){e=a.jp;f=b.Fs(c);e[d]=f;c=c+1|0;d=d+1|0;}e=a.jp;g=Be(b);return e.subarray(0,g);}
function A92(a,b){var c,d,e,f,g;W0(a,b);c=Cd(b);d=0;while(c<BE(b)){e=a.jE;f=b.by(c);e[d]=f;c=c+1|0;d=d+1|0;}e=a.jE;g=Be(b);return e.subarray(0,g);}
function AT$(a,b){var c,d,e,f,g;Z7(a,b);c=Cd(b);d=0;while(c<BE(b)){e=a.ki;f=b.vI(c);e[d]=f;c=c+1|0;d=d+1|0;}e=a.ki;g=Be(b);return e.subarray(0,g);}
function AA6(a,b,c){var d,e;d=a.jK.I(Bb(b));if(d===null){d=Df();a.jK.s(Bb(b),d);}e=a.ru;a.ru=e+1|0;d.s(Bb(e),c);return e;}
function J9(a,b){return (a.jK.I(Bb(a.qr))).I(Bb(b));}
function QW(a,b){var c;c=a.nv;a.nv=c+1|0;a.ed.s(Bb(c),b);return c;}
function AAh(a,b){a.ed.fM(Bb(b));}
function AAC(a,b){var c;c=a.qJ;a.qJ=c+1|0;a.cR.s(Bb(c),b);return c;}
function PP(a,b){a.jK.fM(Bb(b));a.cR.fM(Bb(b));}
function Yx(a,b){var c;c=a.qh;a.qh=c+1|0;a.h6.s(Bb(c),b);return c;}
function AE9(a,b){a.h6.fM(Bb(b));}
function ZY(a,b){var c;c=a.qL;a.qL=c+1|0;a.nN.s(Bb(c),b);return c;}
function ZK(a,b,c){var d,e;d=a.x;e=a.nN.I(Bb(c));d.bindTexture(b,e);}
function AFo(a,b){a.x.clear(b);}
function We(a,b){a.x.depthMask(!!b);}
function UM(a,b){a.x.disable(b);}
function Rh(a,b,c,d){a.x.drawArrays(b,c,d);}
function Tp(a,b,c,d,e){var f,g;f=a.x;g=Cd(e);f.drawElements(b,c,d,g);}
function W1(a,b){a.x.enable(b);}
function AUM(a){var b;b=a.x.createTexture();return ZY(a,b);}
function R9(a,b){return $rt_str(a.x.getParameter(b));}
function Rg(a,b,c){a.x.pixelStorei(b,c);}
function ADw(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q;if(j===null){k=a.x;l=null;k.texImage2D(b,c,d,e,f,g,h,i,l);}else if(BE(j)>4){m=!(j instanceof D9)?a.A2(j):a.oG(j);a.x.texImage2D(b,c,d,e,f,g,h,i,m);}else{n=j.J_(0);Gb();o=BmX.I(Bb(n));if(o.Lv()){p=a.x;q=o.IF();p.texImage2D(b,c,d,h,i,q);}else if(!o.E3()){p=a.x;q=o.nO();p.texImage2D(b,c,d,h,i,q);}else{p=a.x;q=o.Ds();p.texImage2D(b,c,d,h,i,q);}}}
function TU(a,b,c,d){a.x.texParameterf(b,c,d);}
function Ys(a,b,c,d,e){a.x.viewport(b,c,d,e);}
function SB(a,b,c){var d,e;d=a.cR.I(Bb(b));e=a.ed.I(Bb(c));a.x.attachShader(d,e);}
function Xi(a,b,c){var d,e;d=a.x;e=a.h6.I(Bb(c));d.bindBuffer(b,e);}
function ABb(a,b,c,d,e){a.x.blendFuncSeparate(b,c,d,e);}
function RS(a,b,c,d,e){var f,g,h;if(d instanceof D9){f=a.x;g=a.oG(d);f.bufferData(b,g,e);}else if(d instanceof Hh){f=a.x;g=a.GX(d);f.bufferData(b,g,e);}else if(d instanceof Hd){g=a.x;h=a.H0(d);g.bufferData(b,h,e);}else if(d instanceof EV){f=a.x;g=a.A2(d);f.bufferData(b,g,e);}else{if(d!==null)G(BG(B(425)));a.x.bufferData(b,c,e);}}
function AAK(a,b,c,d,e){var f,g;if(e instanceof D9){f=a.x;g=a.oG(e);f.bufferSubData(b,c,g);}}
function S8(a,b){var c;c=a.ed.I(Bb(b));a.x.compileShader(c);}
function Xx(a){var b;b=a.x.createProgram();return AAC(a,b);}
function UQ(a,b){var c;c=a.x.createShader(b);return QW(a,c);}
function ASE(a,b){var c;c=a.h6.I(Bb(b));AE9(a,b);a.x.deleteBuffer(c);}
function AEi(a,b){var c;c=a.cR.I(Bb(b));PP(a,b);a.x.deleteProgram(c);}
function Uu(a,b){var c;c=a.ed.I(Bb(b));AAh(a,b);a.x.deleteShader(c);}
function AC9(a,b){a.x.disableVertexAttribArray(b);}
function T6(a,b,c,d,e){a.x.drawElements(b,c,d,e);}
function AFP(a,b){a.x.enableVertexAttribArray(b);}
function A23(a){var b;b=a.x.createBuffer();return Yx(a,b);}
function O$(a,b){a.x.generateMipmap(b);}
function YO(a,b,c,d,e){var f,g,h;f=a.x;g=a.cR.I(Bb(b));h=f.getActiveAttrib(g,c);d.eu(h.size);e.eu(h.type);return $rt_str(h.name);}
function ACl(a,b,c,d,e){var f,g,h;f=a.x;g=a.cR.I(Bb(b));h=f.getActiveUniform(g,c);d.eu(h.size);e.eu(h.type);return $rt_str(h.name);}
function AAH(a,b,c){var d;d=a.cR.I(Bb(b));return a.x.getAttribLocation(d,$rt_ustr(c));}
function Ua(a,b,c){if(b!=2931&&b!=2849&&b!=32824&&b!=10752&&b!=32938)G(BG(B(426)));c.FC(0,a.x.getParameter(b));}
function AC8(a,b,c,d){var e,f,g,h,i;if(c!=35712&&c!=35714&&c!=35715){e=a.x;f=a.cR.I(Bb(b));d.eu(e.getProgramParameter(f,c));}else{g=a.x;h=a.cR.I(Bb(b));i=g.getProgramParameter(h,c)?1:0;d.eu(!i?0:1);}}
function Xs(a,b){var c,d;c=a.x;d=a.cR.I(Bb(b));return $rt_str(c.getProgramInfoLog(d));}
function Rc(a,b,c,d){var e,f,g,h;if(c!=35713&&c!=35712){e=a.x;f=a.ed.I(Bb(b));g=e.getShaderParameter(f,c);d.eu(g);}else{h=a.x;e=a.ed.I(Bb(b));g=h.getShaderParameter(e,c)?1:0;d.eu(!g?0:1);}}
function TA(a,b){var c,d;c=a.x;d=a.ed.I(Bb(b));return $rt_str(c.getShaderInfoLog(d));}
function AA0(a,b,c){var d,e,f;d=a.x;e=a.cR.I(Bb(b));f=d.getUniformLocation(e,$rt_ustr(c));if(f!==null)return AA6(a,b,f);return (-1);}
function Y6(a,b){var c,d;c=a.x;d=a.cR.I(Bb(b));c.linkProgram(d);}
function Yg(a,b,c){var d,e;d=a.x;e=a.ed.I(Bb(b));d.shaderSource(e,$rt_ustr(c));}
function UF(a,b,c,d){var e,f;e=a.x;f=d;e.texParameterf(b,c,f);}
function UL(a,b,c){var d;d=J9(a,b);a.x.uniform1i(d,c);}
function A1i(a,b,c,d,e,f){var g;g=J9(a,b);a.x.uniformMatrix4fv(g,!!d,A37(e));}
function Qi(a,b){var c,d;a.qr=b;c=a.x;d=a.cR.I(Bb(b));c.useProgram(d);}
function ACx(a,b,c,d,e,f,g){a.x.vertexAttribPointer(b,c,d,!!e,f,g);}
var AGc=D(J1);
function Bc$(a){var b=new AGc();AU1(b,a);return b;}
function AU1(a,b){ADg(a,b);}
function Bh(a){var b,c,d,e;b=a.x.getError();if(!b)return;c=new DK;d=J3(b);e=K();I(I(V(I(e,B(427)),b),B(310)),d);D7(c,Q(e));G(c);}
function A$J(a,b,c){ZK(a,b,c);Bh(a);}
function AZl(a,b){AFo(a,b);Bh(a);}
function APx(a,b){We(a,b);Bh(a);}
function A_a(a,b){UM(a,b);Bh(a);}
function ANB(a,b,c,d){Rh(a,b,c,d);Bh(a);}
function AU5(a,b,c,d,e){Tp(a,b,c,d,e);Bh(a);}
function AI6(a,b){W1(a,b);Bh(a);}
function AOB(a,b){return R9(a,b);}
function AQv(a,b,c){Rg(a,b,c);Bh(a);}
function ALP(a,b,c,d,e,f,g,h,i,j){ADw(a,b,c,d,e,f,g,h,i,j);Bh(a);}
function A0o(a,b,c,d){TU(a,b,c,d);Bh(a);}
function A$W(a,b,c,d,e){Ys(a,b,c,d,e);Bh(a);}
function AH8(a,b,c){SB(a,b,c);Bh(a);}
function AHn(a,b,c){Xi(a,b,c);Bh(a);}
function AHl(a,b,c,d,e){ABb(a,b,c,d,e);Bh(a);}
function AOg(a,b,c,d,e){RS(a,b,c,d,e);Bh(a);}
function A1I(a,b,c,d,e){AAK(a,b,c,d,e);Bh(a);}
function AVL(a,b){S8(a,b);Bh(a);}
function AQN(a){var b;b=Xx(a);Bh(a);return b;}
function AVy(a,b){var c;c=UQ(a,b);Bh(a);return c;}
function A9Q(a,b){AEi(a,b);Bh(a);}
function AWF(a,b){Uu(a,b);Bh(a);}
function AQM(a,b){AC9(a,b);Bh(a);}
function A1X(a,b,c,d,e){T6(a,b,c,d,e);Bh(a);}
function AVD(a,b){AFP(a,b);Bh(a);}
function A5l(a,b){O$(a,b);Bh(a);}
function A3p(a,b,c,d,e){var f;f=YO(a,b,c,d,e);Bh(a);return f;}
function AJm(a,b,c,d,e){var f;f=ACl(a,b,c,d,e);Bh(a);return f;}
function A12(a,b,c){var d;d=AAH(a,b,c);Bh(a);return d;}
function AWS(a,b,c){Ua(a,b,c);Bh(a);}
function ALV(a,b,c,d){AC8(a,b,c,d);Bh(a);}
function A06(a,b){var c;c=Xs(a,b);Bh(a);return c;}
function AIc(a,b,c,d){Rc(a,b,c,d);Bh(a);}
function A7A(a,b){var c;c=TA(a,b);Bh(a);return c;}
function A8$(a,b,c){var d;d=AA0(a,b,c);Bh(a);return d;}
function AO2(a,b){Y6(a,b);Bh(a);}
function AU0(a,b,c){Yg(a,b,c);Bh(a);}
function A86(a,b,c,d){UF(a,b,c,d);Bh(a);}
function AVp(a,b,c){UL(a,b,c);Bh(a);}
function AXm(a,b){Qi(a,b);Bh(a);}
function AJU(a,b,c,d,e,f,g){ACx(a,b,c,d,e,f,g);Bh(a);}
var XB=D(CM);
var XC=D(E_);
function ABC(){C.call(this);this.n4=null;}
function Bc3(){var a=new ABC();A0w(a);return a;}
function A0w(a){L(a);a.n4=A7T();}
function AZE(a,b){return $rt_str(a.n4.getItem($rt_ustr(b)));}
function A6P(a,b){a.n4.removeItem($rt_ustr(b));}
var Lo=D(EF);
var BmY=null;function ASW(){ASW=M(Lo);AYJ();}
function Bae(a){var b=new Lo();AEp(b,a);return b;}
function BdG(){var a=new Lo();O4(a);return a;}
function AEp(a,b){ASW();Gl(a);}
function O4(a){ASW();Gl(a);}
function A3i(a,b){var c,d;c=T(a.C);d=T((b.bk()));AEE(c,d);}
function AYJ(){BmY=Bae(0);}
function AEE(b,c){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2MouseJoint);jsObj.SetTarget(c);}
var JA=D(W);
function Bco(){var a=new JA();S7(a);return a;}
function S7(a){Bs(a);}
function ABN(a){return ((C0()).bu(9,13)).cn(32);}
var U5=D();
var Hr=D();
var BmZ=null;var Bm0=null;var Bm1=null;function Bm2(){Bm2=M(Hr);AKD();}
function AKD(){BmZ=Z();Bm0=Z();Bm1=Z();}
function R7(){C.call(this);this.nb=null;}
function Bbu(a){var b=new R7();A1M(b,a);return b;}
function A1M(a,b){a.nb=b;L(a);}
function AUN(a,b){if(!b.Di(a.nb.cX.F,a.nb.cX.G))return 1;a.nb.db=b.yk();return 0;}
var Nc=D();
var Bm3=null;function Bm4(){Bm4=M(Nc);AVB();}
function AVB(){Bm3=H(HA,[F(K5),F(Bm),F(N2),F(LL),F(Mp),F(Hi),F(Ml),F(EH),F(NN),F(L9),F(Oo),F(K$),F(OJ),F(HE),F(Mk),F(N9),F(MV),F(Ma),F(EP),F(NZ),F(Oz),F(Lp),F(NG),F(M0)]);}
var Nl=D(0);
var Lc=D(0);
var OO=D(0);
var Om=D(0);
var AD4=D();
var LS=D(0);
var ABs=D();
function CT(){C.call(this);this.a=null;}
var Bm5=null;var Bm6=null;var Bm7=null;var Bm8=null;var Bm9=null;var Bm$=null;var Bm_=null;var Bna=null;var Bnb=null;var Bnc=null;var Bnd=null;function Dy(){Dy=M(CT);AXA();}
function CP(){var a=new CT();Vz(a);return a;}
function Vz(a){Dy();L(a);a.a=Cf(16);a.a.data[0]=1.0;a.a.data[5]=1.0;a.a.data[10]=1.0;a.a.data[15]=1.0;}
function A_G(a,b){return a.z7(b.a);}
function AJs(a,b){var c;c=b.data;a.a.data[0]=c[0];a.a.data[1]=c[1];a.a.data[2]=c[2];a.a.data[3]=c[3];a.a.data[4]=c[4];a.a.data[5]=c[5];a.a.data[6]=c[6];a.a.data[7]=c[7];a.a.data[8]=c[8];a.a.data[9]=c[9];a.a.data[10]=c[10];a.a.data[11]=c[11];a.a.data[12]=c[12];a.a.data[13]=c[13];a.a.data[14]=c[14];a.a.data[15]=c[15];return a;}
function APY(a,b){Dy();Bm5.data[0]=a.a.data[0]*b.a.data[0]+a.a.data[4]*b.a.data[1]+a.a.data[8]*b.a.data[2]+a.a.data[12]*b.a.data[3];Bm5.data[4]=a.a.data[0]*b.a.data[4]+a.a.data[4]*b.a.data[5]+a.a.data[8]*b.a.data[6]+a.a.data[12]*b.a.data[7];Bm5.data[8]=a.a.data[0]*b.a.data[8]+a.a.data[4]*b.a.data[9]+a.a.data[8]*b.a.data[10]+a.a.data[12]*b.a.data[11];Bm5.data[12]=a.a.data[0]*b.a.data[12]+a.a.data[4]*b.a.data[13]+a.a.data[8]*b.a.data[14]+a.a.data[12]*b.a.data[15];Bm5.data[1]=a.a.data[1]*b.a.data[0]+a.a.data[5]
*b.a.data[1]+a.a.data[9]*b.a.data[2]+a.a.data[13]*b.a.data[3];Bm5.data[5]=a.a.data[1]*b.a.data[4]+a.a.data[5]*b.a.data[5]+a.a.data[9]*b.a.data[6]+a.a.data[13]*b.a.data[7];Bm5.data[9]=a.a.data[1]*b.a.data[8]+a.a.data[5]*b.a.data[9]+a.a.data[9]*b.a.data[10]+a.a.data[13]*b.a.data[11];Bm5.data[13]=a.a.data[1]*b.a.data[12]+a.a.data[5]*b.a.data[13]+a.a.data[9]*b.a.data[14]+a.a.data[13]*b.a.data[15];Bm5.data[2]=a.a.data[2]*b.a.data[0]+a.a.data[6]*b.a.data[1]+a.a.data[10]*b.a.data[2]+a.a.data[14]*b.a.data[3];Bm5.data[6]
=a.a.data[2]*b.a.data[4]+a.a.data[6]*b.a.data[5]+a.a.data[10]*b.a.data[6]+a.a.data[14]*b.a.data[7];Bm5.data[10]=a.a.data[2]*b.a.data[8]+a.a.data[6]*b.a.data[9]+a.a.data[10]*b.a.data[10]+a.a.data[14]*b.a.data[11];Bm5.data[14]=a.a.data[2]*b.a.data[12]+a.a.data[6]*b.a.data[13]+a.a.data[10]*b.a.data[14]+a.a.data[14]*b.a.data[15];Bm5.data[3]=a.a.data[3]*b.a.data[0]+a.a.data[7]*b.a.data[1]+a.a.data[11]*b.a.data[2]+a.a.data[15]*b.a.data[3];Bm5.data[7]=a.a.data[3]*b.a.data[4]+a.a.data[7]*b.a.data[5]+a.a.data[11]*b.a.data[6]
+a.a.data[15]*b.a.data[7];Bm5.data[11]=a.a.data[3]*b.a.data[8]+a.a.data[7]*b.a.data[9]+a.a.data[11]*b.a.data[10]+a.a.data[15]*b.a.data[11];Bm5.data[15]=a.a.data[3]*b.a.data[12]+a.a.data[7]*b.a.data[13]+a.a.data[11]*b.a.data[14]+a.a.data[15]*b.a.data[15];return a.z7(Bm5);}
function ALk(a){a.a.data[0]=1.0;a.a.data[4]=0.0;a.a.data[8]=0.0;a.a.data[12]=0.0;a.a.data[1]=0.0;a.a.data[5]=1.0;a.a.data[9]=0.0;a.a.data[13]=0.0;a.a.data[2]=0.0;a.a.data[6]=0.0;a.a.data[10]=1.0;a.a.data[14]=0.0;a.a.data[3]=0.0;a.a.data[7]=0.0;a.a.data[11]=0.0;a.a.data[15]=1.0;return a;}
function A4$(a,b,c,d,e){a.vx(b,b+d,c,c+e,0.0,1.0);return a;}
function A5C(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a.qd();h=c-b;i=2.0/h;j=e-d;k=2.0/j;l=g-f;m=(-2.0)/l;n= -(c+b)/h;o= -(e+d)/j;p= -(g+f)/l;a.a.data[0]=i;a.a.data[1]=0.0;a.a.data[2]=0.0;a.a.data[3]=0.0;a.a.data[4]=0.0;a.a.data[5]=k;a.a.data[6]=0.0;a.a.data[7]=0.0;a.a.data[8]=0.0;a.a.data[9]=0.0;a.a.data[10]=m;a.a.data[11]=0.0;a.a.data[12]=n;a.a.data[13]=o;a.a.data[14]=p;a.a.data[15]=1.0;return a;}
function AJQ(a,b,c,d){a.qd();a.a.data[12]=b;a.a.data[13]=c;a.a.data[14]=d;return a;}
function ALQ(a,b,c){Dy();(Bm8.ds(b)).fY();(Bm9.ds(b)).fY();(Bm9.tN(c)).fY();((Bm$.ds(Bm9)).tN(Bm8)).fY();a.qd();a.a.data[0]=Bm9.F;a.a.data[4]=Bm9.G;a.a.data[8]=Bm9.M;a.a.data[1]=Bm$.F;a.a.data[5]=Bm$.G;a.a.data[9]=Bm$.M;a.a.data[2]= -Bm8.F;a.a.data[6]= -Bm8.G;a.a.data[10]= -Bm8.M;return a;}
function A03(a,b,c,d){Dy();(Bm_.ds(c)).pW(b);a.LA(Bm_,d);a.wf(Bna.Ee( -b.F, -b.G, -b.M));return a;}
function Pv(b,c){var d,e,f,g;Dy();d=c.data;e=b.data;f=Cf(16);g=f.data;g[0]=e[0]*d[0]+e[4]*d[1]+e[8]*d[2]+e[12]*d[3];g[4]=e[0]*d[4]+e[4]*d[5]+e[8]*d[6]+e[12]*d[7];g[8]=e[0]*d[8]+e[4]*d[9]+e[8]*d[10]+e[12]*d[11];g[12]=e[0]*d[12]+e[4]*d[13]+e[8]*d[14]+e[12]*d[15];g[1]=e[1]*d[0]+e[5]*d[1]+e[9]*d[2]+e[13]*d[3];g[5]=e[1]*d[4]+e[5]*d[5]+e[9]*d[6]+e[13]*d[7];g[9]=e[1]*d[8]+e[5]*d[9]+e[9]*d[10]+e[13]*d[11];g[13]=e[1]*d[12]+e[5]*d[13]+e[9]*d[14]+e[13]*d[15];g[2]=e[2]*d[0]+e[6]*d[1]+e[10]*d[2]+e[14]*d[3];g[6]=e[2]*d[4]
+e[6]*d[5]+e[10]*d[6]+e[14]*d[7];g[10]=e[2]*d[8]+e[6]*d[9]+e[10]*d[10]+e[14]*d[11];g[14]=e[2]*d[12]+e[6]*d[13]+e[10]*d[14]+e[14]*d[15];g[3]=e[3]*d[0]+e[7]*d[1]+e[11]*d[2]+e[15]*d[3];g[7]=e[3]*d[4]+e[7]*d[5]+e[11]*d[6]+e[15]*d[7];g[11]=e[3]*d[8]+e[7]*d[9]+e[11]*d[10]+e[15]*d[11];g[15]=e[3]*d[12]+e[7]*d[13]+e[11]*d[14]+e[15]*d[15];BZ(f,0,b,0,16);}
function WY(b){var c;Dy();c=b.data;return c[3]*c[6]*c[9]*c[12]-c[2]*c[7]*c[9]*c[12]-c[3]*c[5]*c[10]*c[12]+c[1]*c[7]*c[10]*c[12]+c[2]*c[5]*c[11]*c[12]-c[1]*c[6]*c[11]*c[12]-c[3]*c[6]*c[8]*c[13]+c[2]*c[7]*c[8]*c[13]+c[3]*c[4]*c[10]*c[13]-c[0]*c[7]*c[10]*c[13]-c[2]*c[4]*c[11]*c[13]+c[0]*c[6]*c[11]*c[13]+c[3]*c[5]*c[8]*c[14]-c[1]*c[7]*c[8]*c[14]-c[3]*c[4]*c[9]*c[14]+c[0]*c[7]*c[9]*c[14]+c[1]*c[4]*c[11]*c[14]-c[0]*c[5]*c[11]*c[14]-c[2]*c[5]*c[8]*c[15]+c[1]*c[6]*c[8]*c[15]+c[2]*c[4]*c[9]*c[15]-c[0]*c[6]*c[9]*c[15]
-c[1]*c[4]*c[10]*c[15]+c[0]*c[5]*c[10]*c[15];}
function R2(b){var c,d,e,f,g;Dy();c=Cf(16);d=WY(b);if(d===0.0)return 0;e=c.data;f=b.data;e[0]=f[9]*f[14]*f[7]-f[13]*f[10]*f[7]+f[13]*f[6]*f[11]-f[5]*f[14]*f[11]-f[9]*f[6]*f[15]+f[5]*f[10]*f[15];e[4]=f[12]*f[10]*f[7]-f[8]*f[14]*f[7]-f[12]*f[6]*f[11]+f[4]*f[14]*f[11]+f[8]*f[6]*f[15]-f[4]*f[10]*f[15];e[8]=f[8]*f[13]*f[7]-f[12]*f[9]*f[7]+f[12]*f[5]*f[11]-f[4]*f[13]*f[11]-f[8]*f[5]*f[15]+f[4]*f[9]*f[15];e[12]=f[12]*f[9]*f[6]-f[8]*f[13]*f[6]-f[12]*f[5]*f[10]+f[4]*f[13]*f[10]+f[8]*f[5]*f[14]-f[4]*f[9]*f[14];e[1]=f[13]
*f[10]*f[3]-f[9]*f[14]*f[3]-f[13]*f[2]*f[11]+f[1]*f[14]*f[11]+f[9]*f[2]*f[15]-f[1]*f[10]*f[15];e[5]=f[8]*f[14]*f[3]-f[12]*f[10]*f[3]+f[12]*f[2]*f[11]-f[0]*f[14]*f[11]-f[8]*f[2]*f[15]+f[0]*f[10]*f[15];e[9]=f[12]*f[9]*f[3]-f[8]*f[13]*f[3]-f[12]*f[1]*f[11]+f[0]*f[13]*f[11]+f[8]*f[1]*f[15]-f[0]*f[9]*f[15];e[13]=f[8]*f[13]*f[2]-f[12]*f[9]*f[2]+f[12]*f[1]*f[10]-f[0]*f[13]*f[10]-f[8]*f[1]*f[14]+f[0]*f[9]*f[14];e[2]=f[5]*f[14]*f[3]-f[13]*f[6]*f[3]+f[13]*f[2]*f[7]-f[1]*f[14]*f[7]-f[5]*f[2]*f[15]+f[1]*f[6]*f[15];e[6]
=f[12]*f[6]*f[3]-f[4]*f[14]*f[3]-f[12]*f[2]*f[7]+f[0]*f[14]*f[7]+f[4]*f[2]*f[15]-f[0]*f[6]*f[15];e[10]=f[4]*f[13]*f[3]-f[12]*f[5]*f[3]+f[12]*f[1]*f[7]-f[0]*f[13]*f[7]-f[4]*f[1]*f[15]+f[0]*f[5]*f[15];e[14]=f[12]*f[5]*f[2]-f[4]*f[13]*f[2]-f[12]*f[1]*f[6]+f[0]*f[13]*f[6]+f[4]*f[1]*f[14]-f[0]*f[5]*f[14];e[3]=f[9]*f[6]*f[3]-f[5]*f[10]*f[3]-f[9]*f[2]*f[7]+f[1]*f[10]*f[7]+f[5]*f[2]*f[11]-f[1]*f[6]*f[11];e[7]=f[4]*f[10]*f[3]-f[8]*f[6]*f[3]+f[8]*f[2]*f[7]-f[0]*f[10]*f[7]-f[4]*f[2]*f[11]+f[0]*f[6]*f[11];e[11]=f[8]*f[5]
*f[3]-f[4]*f[9]*f[3]-f[8]*f[1]*f[7]+f[0]*f[9]*f[7]+f[4]*f[1]*f[11]-f[0]*f[5]*f[11];e[15]=f[4]*f[9]*f[2]-f[8]*f[5]*f[2]+f[8]*f[1]*f[6]-f[0]*f[9]*f[6]-f[4]*f[1]*f[10]+f[0]*f[5]*f[10];g=1.0/d;f[0]=e[0]*g;f[4]=e[4]*g;f[8]=e[8]*g;f[12]=e[12]*g;f[1]=e[1]*g;f[5]=e[5]*g;f[9]=e[9]*g;f[13]=e[13]*g;f[2]=e[2]*g;f[6]=e[6]*g;f[10]=e[10]*g;f[14]=e[14]*g;f[3]=e[3]*g;f[7]=e[7]*g;f[11]=e[11]*g;f[15]=e[15]*g;return 1;}
function ABR(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;Dy();e=b.data;f=c.data;g=d+0|0;h=f[g]*e[3];i=d+1|0;j=h+f[i]*e[7];k=d+2|0;l=1.0/(j+f[k]*e[11]+e[15]);m=(f[g]*e[0]+f[i]*e[4]+f[k]*e[8]+e[12])*l;n=(f[g]*e[1]+f[i]*e[5]+f[k]*e[9]+e[13])*l;o=(f[g]*e[2]+f[i]*e[6]+f[k]*e[10]+e[14])*l;f[g]=m;f[i]=n;f[k]=o;}
function OX(b,c){Dy();Pv(b,c);}
function Wr(b,c,d,e,f){var g;Dy();g=0;while(g<e){ABR(b,c,d);d=d+f|0;g=g+1|0;}}
function AAN(b){Dy();return R2(b);}
function AXA(){Bm5=Cf(16);Bm6=IV();Bm7=IV();Bm8=X();Bm9=X();Bm$=X();Bm_=X();Bna=CP();Bnb=X();Bnc=X();Bnd=X();}
var J7=D();
var Bne=null;function Bnf(){Bnf=M(J7);A9F();}
function A9F(){Bne=Bf((Kq()).data.length);Bne.data[Bj(Blm)]=1;Bne.data[Bj(Bln)]=2;Bne.data[Bj(Blo)]=3;Bne.data[Bj(Blf)]=4;Bne.data[Bj(Blg)]=5;Bne.data[Bj(Blh)]=6;Bne.data[Bj(Bli)]=7;Bne.data[Bj(Bll)]=8;Bne.data[Bj(Blj)]=9;Bne.data[Bj(Blk)]=10;}
var AHg=D(Bk);
function A98(){var a=new AHg();A6L(a);return a;}
function A6L(a){Cv(a);}
var Mo=D(BX);
var Bng=null;function AZb(){AZb=M(Mo);AW1();}
function Bd7(){var a=new Mo();Ym(a);return a;}
function BdM(a){var b=new Mo();Xd(b,a);return b;}
function Ym(a){AZb();B6(a);a.cD(O(Zn()),1);}
function Xd(a,b){AZb();B6(a);a.cD(Bd,0);}
function AW1(){Bng=BdM(0);}
function Zn(){var jsObj=new $rt_globals.Box2D.b2WorldManifold();return $rt_globals.Box2D.getPointer(jsObj);}
var ABr=D(BI);
var ABc=D(Gv);
function Ba_(a){var b=new ABc();A5m(b,a);return b;}
function A5m(a,b){K2(a,b);}
var Yz=D(DD);
function SX(){S.call(this);this.HF=0.0;}
function BaY(a){var b=new SX();AI$(b,a);return b;}
function AI$(a,b){BY(a);a.HF=b*2.0;}
function Zl(){var a=this;C.call(a);a.k5=null;a.m5=0;a.gj=null;a.jT=null;}
function BcQ(a){var b=new Zl();A69(b,a);return b;}
function Bnh(a,b){var c=new Zl();AHa(c,a,b);return c;}
function A69(a,b){AHa(a,b,1);}
function AHa(a,b,c){L(a);a.k5=b;a.m5=c;}
function A2D(a){if(Bjt)return Lx(a.k5,a.m5);if(a.gj===null){a.gj=Lx(a.k5,a.m5);a.jT=Lx(a.k5,a.m5);}if(a.gj.e$){a.jT.fv=0;a.jT.e$=1;a.gj.e$=0;return a.jT;}a.gj.fv=0;a.gj.e$=1;a.jT.e$=0;return a.gj;}
var AC7=D(Bk);
function JI(){var a=new AC7();A8D(a);return a;}
function CJ(a){var b=new AC7();A6C(b,a);return b;}
function A8D(a){Cv(a);}
function A6C(a,b){Et(a,b);}
var AGU=D();
var Jz=D();
function WZ(a){L(a);}
function A0L(a,b){var c,d,e,f;c=b.data;d=a.cx();e=c.length;if(e<d)b=LY((CW(b)).hj(),d);else while(d<e){c[d]=null;d=d+1|0;}d=0;f=a.vo();while(f.dk()){c=b.data;e=d+1|0;c[d]=f.da();d=e;}return b;}
function I1(){Jz.call(this);this.fo=0;}
function ABX(a){WZ(a);}
function ALM(a){return Bdp(a);}
var S0=D(EA);
function Ba9(a,b,c,d){var e=new S0();A6T(e,a,b,c,d);return e;}
function A6T(a,b,c,d,e){Lm(a,b,c,d,e);}
function A8r(a,b,c,d){var e,f,g,h,i;e=a.e0.he();f=a.e0.gX();g=0;while(true){if(g>=e){a:{while(true){h=a.j.c(b,c,d);if(h>=0)break;if((b+a.bm.b5()|0)<=d.D()){h=a.bm.bB(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.bm.b5()|0)>d.D()){d.dt=1;return (-1);}i=a.bm.bB(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
var Tv=D(CH);
function EV(){var a=this;C1.call(a);a.bE=0;a.u=null;a.fJ=null;}
function YV(a,b,c,d,e,f){Gm(a,c);E3();a.fJ=Bni;a.bE=b;a.u=d;a.y=e;a.T=f;}
function GC(b){var c,d;if(b>=0)return A35(b,1);c=new Cp;d=K();V(I(d,B(428)),b);Ew(c,Q(d));G(c);}
function TD(b){var c,d;if(b>=0)return A35(b,0);c=new Cp;d=K();V(I(d,B(428)),b);Ew(c,Q(d));G(c);}
function A27(b,c,d){return Bd4(0,b.data.length,b,c,c+d|0,0,0);}
function HX(b){return A27(b,0,b.data.length);}
function AZX(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new Bv;i=K();V(I(V(I(i,B(429)),g),B(278)),f);BC(h,Q(i));G(h);}if(Be(a)<d)G(Xg());if(d<0){j=new Bv;h=K();I(V(I(h,B(279)),d),B(280));BC(j,Q(h));G(j);}k=a.y+a.bE|0;l=0;while(l<d){g=c+1|0;m=a.u.data;f=k+1|0;e[c]=m[k];l=l+1|0;c=g;k=f;}a.y=a.y+d|0;return a;}}e=b.data;j=new Bv;f=e.length;h=K();Bi(V(I(V(I(h,B(281)),c),B(54)),f),41);BC(j,Q(h));G(j);}
function AQ7(a,b){return a.wi(b,0,b.data.length);}
function A9Z(a,b,c,d){var e,f,g,h,i,j,k,l;if(!d)return a;if(a.bZ())G(Dj());if(Be(a)<d)G(GG());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new Bv;i=K();V(I(V(I(i,B(430)),g),B(278)),f);BC(h,Q(i));G(h);}if(d<0){h=new Bv;i=K();I(V(I(i,B(279)),d),B(280));BC(h,Q(i));G(h);}j=a.y+a.bE|0;k=0;while(k<d){l=a.u.data;g=j+1|0;f=c+1|0;l[j]=e[c];k=k+1|0;j=g;c=f;}a.y=a.y+d|0;return a;}}e=b.data;h=new Bv;f=e.length;i=K();Bi(V(I(V(I(i,B(281)),c),B(54)),f),41);BC(h,Q(i));G(h);}
function AA8(a,b){return a.tD(b,0,b.data.length);}
function AYf(a){return 1;}
function H7(a){return a.u;}
function Gj(a,b){a.fJ=b;return a;}
function Kw(a){GF(a);return a;}
function JS(a){Gw(a);return a;}
function A0J(a,b){Jj(a,b);return a;}
function ATm(a,b){Hj(a,b);return a;}
function AJJ(a){return JS(a);}
function ARl(a,b){return a.Ii(b);}
function AXo(a,b){return a.eS(b);}
var S1=D(Bz);
function ATQ(){var a=new S1();AKY(a);return a;}
function AKY(a){Cu(a);}
function A4f(a,b,c,d){if(b&&!(d.hB()&&b==d.dA()))return (-1);return a.j.c(b,c,d);}
function A25(a,b){return 0;}
function AP1(a){return B(431);}
function DT(){var a=this;C.call(a);a.F=0.0;a.G=0.0;a.M=0.0;}
var Bnj=null;var Bnk=null;var Bnl=null;var Bnm=null;var Bnn=null;function ARh(){ARh=M(DT);AIO();}
function X(){var a=new DT();ACP(a);return a;}
function CQ(a,b,c){var d=new DT();S$(d,a,b,c);return d;}
function ACP(a){ARh();L(a);}
function S$(a,b,c,d){ARh();L(a);a.cF(b,c,d);}
function A4r(a,b,c,d){a.F=b;a.G=c;a.M=d;return a;}
function AKT(a,b){return a.cF(b.F,b.G,b.M);}
function ATO(a,b){return a.G_(b.F,b.G,b.M);}
function AOI(a,b,c,d){return a.cF(a.F+b,a.G+c,a.M+d);}
function AP$(a,b){return a.EX(b.F,b.G,b.M);}
function ATe(a,b,c,d){return a.cF(a.F-b,a.G-c,a.M-d);}
function A8n(a,b){return a.cF(a.F*b,a.G*b,a.M*b);}
function AKl(a){return a.F*a.F+a.G*a.G+a.M*a.M;}
function A_T(a){var b;b=a.IN();if(b!==0.0&&b!==1.0)return a.zn(1.0/AG2(b));return a;}
function ATZ(a,b){return a.F*b.F+a.G*b.G+a.M*b.M;}
function AZ7(a,b){return a.cF(a.G*b.M-a.M*b.G,a.M*b.F-a.F*b.M,a.F*b.G-a.G*b.F);}
function A4W(a,b,c,d){return a.cF(a.G*d-a.M*c,a.M*b-a.F*d,a.F*c-a.G*b);}
function AZu(a,b){var c,d,e;c=b.a;d=c.data;e=1.0/(a.F*d[3]+a.G*d[7]+a.M*d[11]+d[15]);return a.cF((a.F*d[0]+a.G*d[4]+a.M*d[8]+d[12])*e,(a.F*d[1]+a.G*d[5]+a.M*d[9]+d[13])*e,(a.F*d[2]+a.G*d[6]+a.M*d[10]+d[14])*e);}
function AIO(){Bnj=CQ(1.0,0.0,0.0);Bnk=CQ(0.0,1.0,0.0);Bnl=CQ(0.0,0.0,1.0);Bnm=CQ(0.0,0.0,0.0);Bnn=CP();}
function ET(){var a=this;C.call(a);a.w=0.0;a.v=0.0;}
var Bno=null;var Bnp=null;var Bnq=null;function ARg(){ARg=M(ET);AZr();}
function Z(){var a=new ET();T4(a);return a;}
function Ec(a,b){var c=new ET();VQ(c,a,b);return c;}
function T4(a){ARg();L(a);}
function VQ(a,b,c){ARg();L(a);a.w=b;a.v=c;}
function A2e(a){return AG2(a.w*a.w+a.v*a.v);}
function AYZ(a,b){a.w=b.w;a.v=b.v;return a;}
function AHo(a,b,c){a.w=b;a.v=c;return a;}
function A85(a){var b;b=a.D5();if(b!==0.0){a.w=a.w/b;a.v=a.v/b;}return a;}
function AWt(a,b){a.w=a.w+b.w;a.v=a.v+b.v;return a;}
function AZr(){Bno=Ec(1.0,0.0);Bnp=Ec(0.0,1.0);Bnq=Ec(0.0,0.0);}
var AFd=D(B$);
var ABi=D(DG);
function Q2(){C.call(this);this.mK=null;}
function QE(a){var b=new Q2();AT_(b,a);return b;}
function AT_(a,b){L(a);a.mK=b;}
function Ge(a){return a.mK.xI();}
function Vt(a,b){a.mK.wD(b);}
function AHd(a,b){var c,d,e,f,$$je;if(b===null)b=Bc(C,0);a:{b:{c:{try{c=a.mK.yj(b);}catch($$e){$$je=Bn($$e);if($$je instanceof Cp){d=$$je;break c;}else if($$je instanceof LK){d=$$je;break a;}else if($$je instanceof MF){d=$$je;break b;}else if($$je instanceof MS){d=$$je;c=new C$;e=(Ge(a)).q();f=K();I(I(f,B(432)),e);D1(c,Q(f),d);G(c);}else{throw $$e;}}return c;}c=new C$;e=(Ge(a)).q();f=K();I(I(f,B(433)),e);D1(c,Q(f),d);G(c);}c=new C$;e=(Ge(a)).q();f=K();I(I(f,B(434)),e);D1(c,Q(f),d);G(c);}c=new C$;e=(Ge(a)).q();f
=K();I(I(f,B(434)),e);D1(c,Q(f),d);G(c);}
var AAv=D();
function AF6(){var a=this;FM.call(a);a.w0=0;a.pt=0;a.q3=null;}
function Be3(a,b,c,d,e,f){var g=new AF6();A_x(g,a,b,c,d,e,f);return g;}
function A_x(a,b,c,d,e,f,g){LW(a,c,e,f);a.pt=b;a.w0=g;a.q3=d;}
function AMn(a,b){return a.q3.data[b+a.pt|0];}
function A3f(a,b,c){a.q3.data[b+a.pt|0]=c;}
function AZZ(a){return a.w0;}
var AAX=D();
var Js=D();
var Bnr=null;var Bns=null;function VF(){VF=M(Js);AXt();}
function KO(b){VF();return !(b&1)?0:1;}
function AFx(b){var c,d,e,f,g,h,i;VF();c=K();d=AEL();e=0;f=Bns.data;g=f.length;h=0;while(h<g){i=f[h];if(b&i){if(c.i()>0)c.bi(32);c.h(d.data[e]);}e=e+1|0;h=h+1|0;}return c.d();}
function AEL(){VF();if(Bnr===null)Bnr=H(BL,[B(435),B(436),B(437),B(438),B(439),B(440),B(441),B(442),B(443),B(444),B(445),B(446)]);return Bnr;}
function AXt(){Bns=M1([1,4,2,1024,8,16,128,64,32,256,2048,512]);}
var UP=D(Dn);
function Bdk(){var a=new UP();AQw(a);return a;}
function Bfj(a){var b=new UP();AYN(b,a);return b;}
function AQw(a){ES(a);a.bL=Bff();}
function AYN(a,b){ES(a);a.bL=A7e(0);a.bL.bb(b);}
function A70(a,b,c){a.qH(b.w,b.v,c.w,c.v);}
function ANx(a,b,c,d,e){a.bL.qH(b,c,d,e);}
function A_j(a,b){var c;c=a.bL.FO();b.bN(c.cQ(),c.cM());}
function AQ$(a,b){var c;c=a.bL.It();b.bN(c.cQ(),c.cM());}
var OU=D(0);
var Fc=D(Fo);
var TP=D(Fc);
var YD=D(W);
function BeH(){var a=new YD();APo(a);return a;}
function APo(a){Bs(a);}
function A$y(a){var b;b=BaV(a);b.ba=1;return b;}
var HP=D();
function AAo(a){L(a);}
function Tm(){var a=this;HP.call(a);a.e9=0;a.cb=null;a.hY=0;a.A4=0.0;a.oB=0;}
function Df(){var a=new Tm();ALe(a);return a;}
function Bal(a){var b=new Tm();O9(b,a);return b;}
function Bnt(a,b){var c=new Tm();AGA(c,a,b);return c;}
function A10(a,b){return Bc(N4,b);}
function ALe(a){O9(a,16);}
function O9(a,b){AGA(a,b,0.75);}
function Xa(b){var c,d;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function AGA(a,b,c){var d;AAo(a);if(b>=0&&c>0.0){d=Xa(b);a.e9=0;a.cb=a.xt(d);a.A4=c;LZ(a);return;}G(C4());}
function LZ(a){a.oB=a.cb.data.length*a.A4|0;}
function AUd(a,b){var c;c=AC4(a,b);if(c===null)return null;return c.eQ;}
function AC4(a,b){var c,d,e;if(b===null)c=Ln(a);else{d=KD(b);e=d&(a.cb.data.length-1|0);c=KZ(a,b,e,d);}return c;}
function KZ(a,b,c,d){var e,f;e=a.cb.data[c];while(e!==null){if(e.mF==d){f=e.f7;if(Y1(b,f))break;}e=e.d_;}return e;}
function Ln(a){var b;b=a.cb.data[0];while(b!==null&&b.f7!==null){b=b.d_;}return b;}
function AQf(a,b,c){return a.Lq(b,c);}
function ATV(a,b,c){var d,e,f,g,h;if(b===null){d=Ln(a);if(d===null){a.hY=a.hY+1|0;d=a.tj(null,0,0);e=a.e9+1|0;a.e9=e;if(e>a.oB)a.l7();}}else{f=KD(b);g=f&(a.cb.data.length-1|0);d=KZ(a,b,g,f);if(d===null){a.hY=a.hY+1|0;d=a.tj(b,g,f);e=a.e9+1|0;a.e9=e;if(e>a.oB)a.l7();}}h=d.eQ;d.eQ=c;return h;}
function ARO(a,b,c,d){var e;e=Bcm(b,d);e.d_=a.cb.data[c];a.cb.data[c]=e;return e;}
function A1F(a,b){var c,d,e,f,g,h,i;c=Xa(!b?1:b<<1);d=a.xt(c);e=0;while(e<a.cb.data.length){f=a.cb.data[e];a.cb.data[e]=null;while(f!==null){g=d.data;h=f.mF&(c-1|0);i=f.d_;f.d_=g[h];g[h]=f;f=i;}e=e+1|0;}a.cb=d;LZ(a);}
function A7v(a){a.HC(a.cb.data.length);}
function APT(a,b){var c;c=UX(a,b);if(c===null)return null;return c.eQ;}
function UX(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.cb.data[0];while(e!==null){if(e.f7===null)break a;f=e.d_;d=e;e=f;}}else{g=KD(b);c=g&(a.cb.data.length-1|0);e=a.cb.data[c];while(e!==null&&!(e.mF==g&&Y1(b,e.f7))){f=e.d_;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.d_=e.d_;else a.cb.data[c]=e.d_;a.hY=a.hY+1|0;a.e9=a.e9-1|0;return e;}
function AZw(a){return a.e9;}
function KD(b){return b.cq();}
function Y1(b,c){return b!==c&&!b.K(c)?0:1;}
function AFf(){var a=this;C.call(a);a.bP=null;a.Y=0;a.wr=0;}
function UE(){var a=new AFf();ARH(a);return a;}
function Bnu(a,b){var c=new AFf();WL(c,a,b);return c;}
function ARH(a){WL(a,1,16);}
function WL(a,b,c){L(a);a.wr=b;a.bP=Cf(c);}
function AY$(a,b){var c,d,e;c=a.bP;d=c.data;if(a.Y==d.length)c=a.q_(Bt(8,a.Y*1.75|0));d=c.data;e=a.Y;a.Y=e+1|0;d[e]=b;}
function AIU(a,b){a.ut(b.bP,0,b.Y);}
function ATl(a,b,c,d){if((c+d|0)<=b.Y){a.ut(b.bP,c,d);return;}G(Bo((((((((K()).h(B(447))).A(c)).h(B(299))).A(d)).h(B(300))).A(b.Y)).d()));}
function AIo(a,b,c,d){var e,f,g;e=a.bP;f=e.data;g=a.Y+d|0;if(g>f.length)e=a.q_(Bt(Bt(8,g),a.Y*1.75|0));BZ(b,c,e,a.Y,d);a.Y=a.Y+d|0;}
function AZI(a,b){if(b<a.Y)return a.bP.data[b];G(Dh((((((K()).h(B(301))).A(b)).h(B(302))).A(a.Y)).d()));}
function AWU(a,b,c){var d,e,f,g,h,i;d=a.Y;if(c>=d)G(Dh((((((K()).h(B(303))).A(c)).h(B(302))).A(a.Y)).d()));if(b>c)G(Dh((((((K()).h(B(304))).A(b)).h(B(305))).A(c)).d()));e=(c-b|0)+1|0;f=d-e|0;if(a.wr){g=a.bP;h=b+e|0;BZ(g,h,a.bP,b,d-h|0);}else{i=Bt(f,c+1|0);BZ(a.bP,i,a.bP,b,d-i|0);}a.Y=f;}
function A0D(a){if(!a.Y)G(CJ(B(306)));return a.bP.data[0];}
function ANF(a){return a.Y<=0?0:1;}
function AX_(a){a.Y=0;}
function ASm(a,b){var c;if(b<0)G(Bo((((K()).h(B(307))).A(b)).d()));c=a.Y+b|0;if(c>a.bP.data.length)a.q_(Bt(Bt(8,c),a.Y*1.75|0));return a.bP;}
function AQo(a,b){var c,d,e;c=Cf(b);d=c.data;e=a.bP;BZ(e,0,c,0,BN(a.Y,d.length));a.bP=c;return c;}
function AJ6(a,b){if(a.Y>b)a.Y=b;}
var XH=D(Hz);
var AEW=D(D_);
var Wj=D(DD);
function Yy(){var a=this;C.call(a);a.rD=null;a.iD=null;a.mC=null;a.jY=null;a.j1=null;a.ir=null;a.rm=0;a.qT=null;}
function Bd0(a){var b=new Yy();AOt(b,a);return b;}
function AOt(a,b){L(a);a.rD=El();a.iD=El();a.mC=El();a.jY=El();a.j1=El();a.ir=CG();a.rm=(-1);a.qT=b;}
function A1_(a){var b,c;b=a.qT;c=K();I(I(c,b),B(448));return Q(c);}
function A6O(a,b,c){var d,e,f;d=Fb();e=a.x8();f=K();I(I(f,e),c);d.tR(1,Q(f),Bap(a,c,b));}
function ANs(a,b){if(a.FY(b.q4)){b.tP=b.Aq;b.rJ=1;b.on=0;b.iF=0;return 0;}if(b.iF)return 0;b.on=0;b.rJ=0;b.iF=1;a.C3(1,b.q4,b.ty,b.xP,Bde(a,b));return 1;}
function ANn(a,b,c,d,e,f){var g,h,i;g=Fb();h=a.x8();i=K();I(I(i,h),c);g.El(b,Q(i),d,e,A_4(a,f,d,c));}
function AXz(a,b,c,d){var e,f,g;e=Fb();f=a.qT;g=K();I(I(g,f),c);e.g6(b,Q(g),d);}
function AH5(a,b,c,d){a:{BdQ();switch(BkS.data[Bj(b)]){case 1:a.jY.s(c,d);break a;case 2:break;case 3:a.j1.s(c,d);break a;case 4:a.mC.s(c,d);break a;case 5:a.rD.s(c,null);break a;default:break a;}a.iD.s(c,d);}}
function AJE(a,b){var c,$$je;if(a.jY.ef(b)){a:{try{c=Ni((a.jY.I(b)).DQ(B(326)));}catch($$e){$$je=Bn($$e);if($$je instanceof Nv){break a;}else{throw $$e;}}return c;}return null;}if(a.iD.ef(b))return Ni(Cw(1));if(a.j1.ef(b))return Wa(a.j1.I(b));if(!a.mC.ef(b))return null;return Ni(Cw(1));}
function ANz(a,b){var c,d;a:{if(!a.jY.ef(b)&&!a.iD.ef(b)&&!a.j1.ef(b)&&!a.mC.ef(b)){c=a.rD;if(!c.ef(b)){d=0;break a;}}d=1;}return d;}
var JK=D();
var Bnv=null;var Bnw=null;function LD(){LD=M(JK);AMY();}
function Tb(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;LD();d=$rt_doubleToLongBits(b);c.sT=B5(CR(d,Bx(0, 2147483648)),Bd)?0:1;e=CR(d,Bx(4294967295, 1048575));f=T(F5(d,52))&2047;if(B5(e,Bd)&&!f){c.oZ=Bd;c.nL=0;return;}g=0;if(f)h=ALI(e,Bx(0, 1048576));else{h=DX(e,1);while(B5(CR(h,Bx(0, 1048576)),Bd)){h=DX(h,1);f=f+(-1)|0;g=g+1|0;}}i=ADf(Bnw,f);if(i<0)i=( -i|0)-2|0;j=f-Bnw.data[i]|0;k=12+j|0;l=Lf(h,Bnv.data[i],k);if(RF(l,Bx(2808348672, 232830643))){i=i+1|0;m=f-Bnw.data[i]|0;k=12+m|0;l=Lf(h,Bnv.data[i],k);}n=BT(Bnv.data[i],
(63-k|0)-g|0);o=F5(Ca(n,O(1)),1);p=F5(n,1);if(B5(h,Bx(0, 1048576)))p=F5(p,2);q=WT(l,p);r=XG(l,o);m=Bbp(q,r);h=m>0?Bu(Cy(l,q),q):m<0?Ca(Bu(Cy(l,r),r),r):Bu(Cy(Ca(l,Cy(r,O(2))),r),r);if(RF(h,Bx(2808348672, 232830643))){i=i+1|0;h=Cy(h,O(10));}else if(KT(h,Bx(1569325056, 23283064))){i=i+(-1)|0;h=Bu(h,O(10));}c.oZ=h;c.nL=i-330|0;}
function WT(b,c){var d,e;LD();d=O(10);while(GK(d,c)){d=Bu(d,O(10));}e=G$(b,d);if(RF(e,Cy(c,O(2))))d=Cy(d,O(10));return d;}
function XG(b,c){var d,e;LD();d=O(1);while(GK(d,c)){d=Bu(d,O(10));}e=G$(b,d);if(RD(NH(d,e),Cy(c,O(2))))d=Cy(d,O(10));return d;}
function Lf(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;LD();e=CR(b,O(65535));f=CR(BT(b,16),O(65535));g=CR(BT(b,32),O(65535));h=CR(BT(b,48),O(65535));i=CR(c,O(65535));j=CR(BT(c,16),O(65535));k=CR(BT(c,32),O(65535));l=CR(BT(c,48),O(65535));m=Ca(Ca(Bu(k,e),Bu(j,f)),Bu(i,g));n=Ca(Ca(Ca(Bu(l,e),Bu(k,f)),Bu(j,g)),Bu(i,h));o=Ca(Ca(Bu(l,f),Bu(k,g)),Bu(j,h));p=Ca(Bu(l,g),Bu(k,h));q=Bu(l,h);r=Ca(Ca(DX(q,32+d|0),DX(p,16+d|0)),DX(o,d));s=d>16?Ca(r,DX(n,d-16|0)):Ca(r,BT(n,16-d|0));s=Ca(s,BT(m,32-d|0));return s;}
function AMY(){var b,c,d,e,f,g,h,i,j,k,l;Bnv=AF$(660);Bnw=Bf(660);b=Bx(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=Bnv.data;g=d+330|0;f[g]=Iz(e,O(80));Bnw.data[g]=c;e=Iz(e,O(10));h=YR(e,O(10));while(GK(e,b)&&B5(CR(e,Bx(0, 2147483648)),Bd)){e=DX(e,1);c=c+1|0;h=DX(h,1);}e=Ca(e,Cy(h,O(10)));d=d+1|0;}i=Bx(3435973836, 214748364);j=1023;d=0;while(d<330){k=0;e=b;while(RD(e,i)){e=F5(e,1);k=k+1|0;j=j+(-1)|0;}h=Bu(e,O(10));if(k<=0)b=h;else{l=CR(b,O((1<<k)-1|0));b=Ca(h,F5(Bu(l,O(10)),k));}f=Bnv.data;g=(330-d|
0)-1|0;f[g]=Iz(b,O(80));Bnw.data[g]=j;d=d+1|0;}}
function JM(){var a=this;C.call(a);a.hW=0;a.kF=0;}
var BhG=null;var BhF=null;function BD(){BD=M(JM);A0C();}
function Ky(a,b){var c=new JM();Z5(c,a,b);return c;}
function Z5(a,b,c){BD();L(a);a.hW=b;a.kF=c;}
function AP6(a){return a.hW?0:1;}
function A9K(a){return a.hW!=1?0:1;}
function A3Q(a){return !a.vJ()&&!a.ra()?0:1;}
function AMV(a){return a.hW!=2?0:1;}
function AUk(a){return a.hW!=3?0:1;}
function ALY(a){if(a.r_())return a.kF;G(BfW());}
function Cm(b){BD();return Ky(2,b);}
function GM(b){BD();return Ky(3,b);}
function ASv(a){switch(a.hW){case 0:G(BaS());case 1:G(BcM());case 2:G(BdJ(a.kF));case 3:G(BaT(a.kF));default:}}
function A0C(){BhG=Ky(0,0);BhF=Ky(1,0);}
function Mi(){Bz.call(this);this.gS=0;}
function Bch(a){var b=new Mi();AFw(b,a);return b;}
function AFw(a,b){Cu(a);a.gS=b;}
function A7a(a,b,c,d){var e,f,g,h;e=!d.hB()?c.i():d.D();if(b>=e){d.bo(a.gS,0);return a.j.c(b,c,d);}f=e-b|0;if(f==2&&c.f(b)==13){g=b+1|0;if(c.f(g)==10){d.bo(a.gS,0);return a.j.c(b,c,d);}}a:{if(f==1){h=c.f(b);if(h==10)break a;if(h==13)break a;if(h==133)break a;if((h|1)==8233)break a;}return (-1);}d.bo(a.gS,0);return a.j.c(b,c,d);}
function AZt(a,b){var c;c=!b.dI(a.gS)?0:1;b.bo(a.gS,(-1));return c;}
function A4N(a){return B(449);}
function GV(){var a=this;C.call(a);a.H=null;a.gR=0;a.dO=0;a.vX=0;a.oi=0;a.dy=0;a.m=0;a.zb=0;a.g9=null;a.eT=null;a.t=0;a.kd=0;a.jf=0;a.jH=0;a.xA=null;}
var Bnx=null;var Bny=null;var Bnz=0;function Bd3(a,b){var c=new GV();A9A(c,a,b);return c;}
function A9A(a,b,c){L(a);a.dO=1;a.xA=b;if((c&16)>0)b=A3y(b);else if((c&128)>0)b=AZW(b);a.H=B8(b.i()+2|0);BZ(b.k8(),0,a.H,0,b.i());a.H.data[a.H.data.length-1|0]=0;a.H.data[a.H.data.length-2|0]=0;a.zb=a.H.data.length;a.gR=c;Ey(a);Ey(a);}
function A3W(a){return a.dy;}
function AY7(a,b){if(b>0&&b<3)a.dO=b;if(b==1)ABu(a);}
function AYP(a,b){a.gR=b;a.m=a.dy;a.eT=a.g9;a.t=a.jf+1|0;a.jH=a.jf;Ey(a);}
function AKV(a){return a.g9;}
function ARJ(a){return a.g9===null?0:1;}
function AJv(a){return a.eT===null?0:1;}
function A7P(a){Ey(a);return a.oi;}
function AZB(a){var b;b=a.g9;Ey(a);return b;}
function AXX(a){return a.m;}
function ALX(a){return a.oi;}
function AZW(b){return b;}
function ABu(a){a.m=a.dy;a.eT=a.g9;a.t=a.jH;a.jH=a.jf;Ey(a);}
function Ey(a){var b,c,d,e,f,g,h,$$je;a.oi=a.dy;a.dy=a.m;a.g9=a.eT;a.jf=a.jH;a.jH=a.t;while(true){b=0;a.m=a.t>=a.H.data.length?0:Iv(a);a.eT=null;if(a.dO==4){if(a.m!=92)return;a.m=a.t>=a.H.data.length?0:a.H.data[BQ(a)];switch(a.m){case 69:break;default:a.m=92;a.t=a.kd;return;}a.dO=a.vX;a.m=a.t>(a.H.data.length-2|0)?0:Iv(a);}a:{if(a.m!=92){if(a.dO==1)switch(a.m){case 36:a.m=(-536870876);break a;case 40:if(a.H.data[a.t]!=63){a.m=(-2147483608);break a;}BQ(a);c=a.H.data[a.t];d=0;while(true){b:{if(d){d=0;switch(c)
{case 33:break;case 61:a.m=(-134217688);BQ(a);break b;default:G(BV(B(46),a.d(),a.t));}a.m=(-67108824);BQ(a);}else{switch(c){case 33:break;case 60:BQ(a);c=a.H.data[a.t];d=1;break b;case 61:a.m=(-536870872);BQ(a);break b;case 62:a.m=(-33554392);BQ(a);break b;default:a.m=AG0(a);if(a.m<256){a.gR=a.m;a.m=a.m<<16;a.m=(-1073741784)|a.m;break b;}a.m=a.m&255;a.gR=a.m;a.m=a.m<<16;a.m=(-16777176)|a.m;break b;}a.m=(-268435416);BQ(a);}}if(!d)break;}break a;case 41:a.m=(-536870871);break a;case 42:case 43:case 63:e=a.t>=
a.H.data.length?42:a.H.data[a.t];switch(e){case 43:a.m=a.m|(-2147483648);BQ(a);break a;case 63:a.m=a.m|(-1073741824);BQ(a);break a;default:}a.m=a.m|(-536870912);break a;case 46:a.m=(-536870866);break a;case 91:a.m=(-536870821);a.mX(2);break a;case 93:if(a.dO!=2)break a;a.m=(-536870819);break a;case 94:a.m=(-536870818);break a;case 123:a.eT=WR(a,a.m);break a;case 124:a.m=(-536870788);break a;default:}else if(a.dO==2)switch(a.m){case 38:a.m=(-536870874);break a;case 45:a.m=(-536870867);break a;case 91:a.m=(-536870821);break a;case 93:a.m
=(-536870819);break a;case 94:a.m=(-536870818);break a;default:}}else{f=a.t>=(a.H.data.length-2|0)?(-1):Iv(a);c:{a.m=f;switch(a.m){case -1:G(BV(B(46),a.d(),a.t));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.m
=UC(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.dO!=1)break a;a.m=(-2147483648)|a.m;break a;case 65:a.m=(-2147483583);break a;case 66:a.m=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:G(BV(B(46),a.d(),a.t));case 68:case 83:case 87:case 100:case 115:case 119:a.eT=Ll(GH(a.H,
a.kd,1),0);a.m=0;break a;case 71:a.m=(-2147483577);break a;case 80:case 112:break c;case 81:a.vX=a.dO;a.dO=4;b=1;break a;case 90:a.m=(-2147483558);break a;case 97:a.m=7;break a;case 98:a.m=(-2147483550);break a;case 99:if(a.t>=(a.H.data.length-2|0))G(BV(B(46),a.d(),a.t));a.m=a.H.data[BQ(a)]&31;break a;case 101:a.m=27;break a;case 102:a.m=12;break a;case 110:a.m=10;break a;case 114:a.m=13;break a;case 116:a.m=9;break a;case 117:a.m=Nr(a,4);break a;case 120:a.m=Nr(a,2);break a;case 122:a.m=(-2147483526);break a;default:}break a;}g
=AC_(a);h=0;if(a.m==80)h=1;try{a.eT=Ll(g,h);}catch($$e){$$je=Bn($$e);if($$je instanceof MP){G(BV(B(46),a.d(),a.t));}else{throw $$e;}}a.m=0;}}if(b)continue;else break;}}
function AC_(a){var b,c,d,e,f;b=GS(10);if(a.t<(a.H.data.length-2|0)){if(a.H.data[a.t]!=123){c=GH(a.H,BQ(a),1);d=K();I(I(d,B(450)),c);return Q(d);}BQ(a);e=0;a:{while(a.t<(a.H.data.length-2|0)){e=a.H.data[BQ(a)];if(e==125)break a;b.bi(e);}}if(e!=125)G(BV(B(46),a.d(),a.t));}if(!b.i())G(BV(B(46),a.d(),a.t));f=b.d();if(f.i()==1){c=K();I(I(c,B(450)),f);return Q(c);}b:{c:{if(f.i()>3){if(f.d2(B(450)))break c;if(f.d2(B(451)))break c;}break b;}f=f.dZ(2);}return f;}
function WR(a,b){var c,d,e,f,$$je;c=GS(4);d=(-1);e=2147483647;a:{while(true){if(a.t>=a.H.data.length)break a;b=a.H.data[BQ(a)];if(b==125)break a;if(b==44&&d<0)try{d=GB(c.d(),10);c.Hk(0,c.i());continue;}catch($$e){$$je=Bn($$e);if($$je instanceof Cg){break;}else{throw $$e;}}c.bi(b&65535);}G(BV(B(46),a.d(),a.t));}if(b!=125)G(BV(B(46),a.d(),a.t));if(c.i()>0)b:{try{e=GB(c.d(),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Bn($$e);if($$je instanceof Cg){}else{throw $$e;}}G(BV(B(46),a.d(),a.t));}else if(d<0)G(BV(B(46),
a.d(),a.t));if((d|e|(e-d|0))<0)G(BV(B(46),a.d(),a.t));f=a.t>=a.H.data.length?42:a.H.data[a.t];c:{switch(f){case 43:a.m=(-2147483525);BQ(a);break c;case 63:a.m=(-1073741701);BQ(a);break c;default:}a.m=(-536870789);}return Bfc(d,e);}
function AMo(a){return a.xA;}
function A2G(a){return !a.dy&&!a.m&&a.t==a.zb&&!a.iU()?1:0;}
function Jm(b){return b<0?0:1;}
function AUZ(a){return !a.bH()&&!a.iU()&&Jm(a.dy)?1:0;}
function AYu(a){return a.dy<=56319&&a.dy>=55296?1:0;}
function A7L(a){return a.dy<=57343&&a.dy>=56320?1:0;}
function Lt(b){return b<=56319&&b>=55296?1:0;}
function KG(b){return b<=57343&&b>=56320?1:0;}
function Nr(a,b){var c,d,e,f,$$je;c=GS(b);d=a.H.data.length-2|0;e=0;while(true){f=Cx(e,b);if(f>=0)break;if(a.t>=d)break;c.bi(a.H.data[BQ(a)]);e=e+1|0;}if(!f)a:{try{f=GB(c.d(),16);}catch($$e){$$je=Bn($$e);if($$je instanceof Cg){break a;}else{throw $$e;}}return f;}G(BV(B(46),a.d(),a.t));}
function UC(a){var b,c,d,e,f;b=3;c=1;d=a.H.data.length-2|0;e=Ol(a.H.data[a.t],8);switch(e){case -1:break;default:if(e>3)b=2;BQ(a);a:{while(true){if(c>=b)break a;if(a.t>=d)break a;f=Ol(a.H.data[a.t],8);if(f<0)break;e=(e*8|0)+f|0;BQ(a);c=c+1|0;}}return e;}G(BV(B(46),a.d(),a.t));}
function AG0(a){var b,c,d;b=1;c=a.gR;a:while(true){if(a.t>=a.H.data.length)G(BV(B(46),a.d(),a.t));b:{c:{d=a.H.data[a.t];switch(d){case 41:BQ(a);return c|256;case 45:if(!b)G(BV(B(46),a.d(),a.t));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BQ(a);}BQ(a);return c;}
function BQ(a){a.kd=a.t;if(a.gR&4)YP(a);else a.t=a.t+1|0;return a.kd;}
function YP(a){var b;b=a.H.data.length-2|0;a.t=a.t+1|0;a:while(true){if(a.t<b&&Vp(a.H.data[a.t])){a.t=a.t+1|0;continue;}if(a.t>=b)break;if(a.H.data[a.t]!=35)break;a.t=a.t+1|0;while(true){if(a.t>=b)continue a;if(St(a,a.H.data[a.t]))continue a;a.t=a.t+1|0;}}return a.t;}
function St(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AFO(b){return Bnx.Nb(b);}
function AKO(b){var c,d,e,f,g,h;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;if(!f)g=M1([d,e]);else{h=4519+f|0;g=M1([d,e,h]);}return g;}return null;}
function APe(b){var c;c=Bny.by(b);return c==Bnz?0:1;}
function A6Q(b){return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);}
function Iv(a){var b,c,d;b=a.H.data[BQ(a)];if(Cb(b)){c=a.kd+1|0;if(c<a.H.data.length){d=a.H.data[c];if(B2(d)){BQ(a);return Ds(b,d);}}}return b;}
function AJh(a){return a.jf;}
var Ed=D(Y);
var BjV=null;var BjX=null;var BjW=null;var BjY=null;var BnA=null;function EL(){EL=M(Ed);AN5();}
function OH(a,b){var c=new Ed();P_(c,a,b);return c;}
function P_(a,b,c){EL();BJ(a,b,c);}
function ZI(){EL();return H(Ed,[BjV,BjX,BjW,BjY]);}
function AN5(){BjV=OH(B(452),0);BjX=OH(B(453),1);BjW=OH(B(454),2);BjY=OH(B(455),3);BnA=ZI();}
var ACc=D(JA);
function A_V(){var a=new ACc();AUp(a);return a;}
function AUp(a){S7(a);}
function AYb(a){var b;b=(ABN(a)).eX(1);b.ba=1;return b;}
var Z2=D(CX);
var SV=D(Dm);
function EC(){Y.call(this);this.zz=0;}
var BjT=null;var BjU=null;var BlO=null;var BnB=null;function DP(){DP=M(EC);AQG();}
function AEx(a,b,c){var d=new EC();AGG(d,a,b,c);return d;}
function AGG(a,b,c,d){DP();BJ(a,b,c);a.zz=d;}
function Q6(a){return a.zz;}
function WO(){DP();return H(EC,[BjT,BjU,BlO]);}
function AQG(){BjT=AEx(B(456),0,0);BjU=AEx(B(457),1,1);BlO=AEx(B(458),2,2);BnB=WO();}
var Mg=D(0);
var AAF=D(FU);
function BcZ(a,b,c,d,e,f){var g=new AAF();AIv(g,a,b,c,d,e,f);return g;}
function AIv(a,b,c,d,e,f,g){LX(a,b,c,d,e,f,g);}
function A5W(a,b){var c,d,e,f;c=a.eG.u.data;d=a.eA;e=b*2|0;f=(c[d+e|0]&255)<<8|a.eG.u.data[(a.eA+e|0)+1|0]&255;return f<<16>>16;}
function AZQ(a,b,c){var d,e,f;d=a.eG.u.data;e=a.eA;f=b*2|0;d[e+f|0]=c>>8<<24>>24;a.eG.u.data[(a.eA+f|0)+1|0]=c<<24>>24;}
var LL=D(Eb);
var Eo=D(Y);
var Bl5=null;var Bl4=null;var Bl7=null;var Bl6=null;var BnC=null;function Ez(){Ez=M(Eo);APD();}
function K4(a,b){var c=new Eo();XZ(c,a,b);return c;}
function XZ(a,b,c){Ez();BJ(a,b,c);}
function APD(){Bl5=K4(B(459),0);Bl4=K4(B(460),1);Bl7=K4(B(29),2);Bl6=K4(B(461),3);BnC=H(Eo,[Bl5,Bl4,Bl7,Bl6]);}
var E7=D();
var Bit=null;var Biv=null;var Biw=null;var Biu=null;var Bis=null;function Rp(){Rp=M(E7);A3b();}
function A3b(){Bit=M1([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);Biv=AY2([O(1),O(10),O(100),O(1000),O(10000),O(100000),O(1000000),O(10000000),O(100000000),O(1000000000),Bx(1410065408, 2),Bx(1215752192, 23),Bx(3567587328, 232),Bx(1316134912, 2328),Bx(276447232, 23283),Bx(2764472320, 232830),Bx(1874919424, 2328306),Bx(1569325056, 23283064),Bx(2808348672, 232830643)]);Biw=AY2([O(1),O(10),O(100),O(10000),O(100000000),Bx(1874919424, 2328306)]);Biu=BeW();Bis=Bed();}
function F6(){BO.call(this);this.cI=null;}
function Be6(a,b){var c=new F6();Rl(c,a,b);return c;}
function Rl(a,b,c){CY(a);a.cI=b;a.c0=c;a.bf=c.h7();}
function AH4(a,b,c,d){var e,f;e=d.hm(a.bf);d.dL(a.bf,b);f=a.cI.c(b,c,d);if(f>=0)return f;d.dL(a.bf,e);return (-1);}
function APp(a,b,c,d){var e;e=a.cI.ci(b,c,d);if(e>=0)d.dL(a.bf,e);return e;}
function A8c(a,b,c,d,e){var f;f=a.cI.cp(b,c,d,e);if(f>=0)e.dL(a.bf,f);return f;}
function A4c(a,b){return a.cI.b0(b);}
function A6J(a){var b;b=BbU(a);a.j=b;return b;}
function AU3(a){var b;a.cm=1;if(a.c0!==null&&!a.c0.cm)a.c0.dx();if(a.cI!==null&&!a.cI.cm){b=a.cI.go();if(b!==null){a.cI.cm=1;a.cI=b;}a.cI.dx();}}
function E5(){var a=this;C.call(a);a.Lo=Bd;a.Jb=Bd;a.Hn=null;a.CP=null;a.G2=0;a.LD=null;}
var BnD=null;var BnE=null;var BnF=0;var BnG=0;var BnH=null;function Mt(){Mt=M(E5);AI2();}
function BeF(a){var b=new E5();Zt(b,a);return b;}
function BnI(a,b){var c=new E5();Or(c,a,b);return c;}
function Zt(a,b){Mt();Or(a,null,b);}
function Or(a,b,c){var d;Mt();L(a);a.Hn=Rx();a.G2=1;a.CP=c;a.LD=b;d=BnF;BnF=d+1|0;a.Lo=O(d);}
function Im(b){Mt();if(BnE!==b)BnE=b;BnE.Jb=Ow();}
function DH(){Mt();return BnE;}
function AI2(){BnD=BeF(B(462));BnE=BnD;BnF=1;BnG=1;BnH=BfN();}
var X9=D();
var PJ=D(F6);
function BbU(a){var b=new PJ();AR$(b,a);return b;}
function AR$(a,b){Rl(a,b.cI,b.c0);}
function AMb(a,b,c,d){var e,f,g;e=0;f=d.D();a:{while(true){if(b>f){b=e;break a;}g=d.hm(a.bf);d.dL(a.bf,b);e=a.cI.c(b,c,d);if(e>=0)break;d.dL(a.bf,g);b=b+1|0;}}return b;}
function A_z(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=e.hm(a.bf);e.dL(a.bf,c);f=a.cI.c(c,d,e);if(f>=0)break;e.dL(a.bf,g);c=c+(-1)|0;}}return c;}
function AKg(a){return null;}
var Xc=D(Bk);
function BcM(){var a=new Xc();AQr(a);return a;}
function AQr(a){Cv(a);}
var YE=D();
function AP7(b){return b;}
function It(b){return b.length?0:1;}
function A43(b,c){var d;d=AP7(c);b.push(d);}
function A6q(b){return b.shift();}
var ZJ=D();
function Tw(){var a=this;C.call(a);a.dJ=0;a.ej=null;a.mH=0;a.AV=0.0;a.nM=0;a.oa=0;a.f$=0;}
function A9q(){var a=new Tw();AK8(a);return a;}
function BnJ(a,b){var c=new Tw();AAx(c,a,b);return c;}
function AK8(a){AAx(a,51,0.800000011920929);}
function AAx(a,b,c){var d;L(a);if(c>0.0&&c<1.0){a.AV=c;d=Hx(b,c);a.nM=d*c|0;a.f$=d-1|0;a.oa=C6(O(a.f$));a.ej=Bf(d);return;}G(Bo((((K()).h(B(254))).dM(c)).d()));}
function AT1(a,b){return T(BT(Bu(O(b),Bx(2135587861, 2654435769)),a.oa));}
function Nt(a,b){var c,d,e;c=a.ej;d=a.gg(b);while(true){e=c.data[d];if(!e)return  -(d+1|0)|0;if(e==b)break;d=(d+1|0)&a.f$;}return d;}
function AZY(a,b){var c,d;if(!b){if(a.mH)return 0;a.mH=1;a.dJ=a.dJ+1|0;return 1;}c=Nt(a,b);if(c>=0)return 0;d= -(c+1|0)|0;a.ej.data[d]=b;d=a.dJ+1|0;a.dJ=d;if(d>=a.nM)AAa(a,a.ej.data.length<<1);return 1;}
function AAL(a,b){var c,d,e;c=a.ej;d=a.gg(b);while(true){e=c.data;if(!e[d])break;d=(d+1|0)&a.f$;}e[d]=b;}
function AUb(a,b){var c,d,e,f,g,h,i;if(!b){if(!a.mH)return 0;a.mH=0;a.dJ=a.dJ-1|0;return 1;}c=Nt(a,b);if(c<0)return 0;d=a.ej;e=a.f$;f=(c+1|0)&e;while(true){g=d.data;h=g[f];if(!h)break;i=a.gg(h);if(((f-i|0)&e)>((c-i|0)&e)){g[c]=h;c=f;}f=(f+1|0)&e;}g[c]=0;a.dJ=a.dJ-1|0;return 1;}
function AAa(a,b){var c,d,e,f;a:{c=a.ej.data.length;a.nM=b*a.AV|0;a.f$=b-1|0;a.oa=C6(O(a.f$));d=a.ej;a.ej=Bf(b);if(a.dJ>0){e=0;while(true){if(e>=c)break a;f=d.data[e];if(f)AAL(a,f);e=e+1|0;}}}}
function MP(){var a=this;Bk.call(a);a.F6=null;a.K2=null;}
function BbJ(a,b,c){var d=new MP();A02(d,a,b,c);return d;}
function A02(a,b,c,d){Et(a,b);a.F6=c;a.K2=d;}
var Bv=D(Bk);
function Dl(){var a=new Bv();QZ(a);return a;}
function Dh(a){var b=new Bv();BC(b,a);return b;}
function QZ(a){Cv(a);}
function BC(a,b){Et(a,b);}
var AGH=D(Bv);
function KH(){var a=new AGH();ATu(a);return a;}
function ATu(a){QZ(a);}
function ABF(){Gq.call(this);this.BJ=0;}
function Ba5(a,b){var c=new ABF();AMj(c,a,b);return c;}
function AMj(a,b,c){KF(a,b,c);}
function APk(a,b,c,d){var e,f,g,h;e=a.h0(d);if(e!==null&&(b+e.i()|0)<=d.D()){f=0;while(true){if(f>=e.i()){d.bo(a.hf,e.i());return a.j.c(b+e.i()|0,c,d);}g=Er(DS(e.f(f)));h=b+f|0;h=DS(c.f(h));if(g!=Er(h))break;f=f+1|0;}return (-1);}return (-1);}
function AYD(a){var b,c;b=a.BJ;c=K();V(I(c,B(463)),b);return Q(c);}
var K9=D();
var BnK=null;function BcR(){BcR=M(K9);ASI();}
function Mw(b){var $$je;BcR();a:{if(b!==null)try{b.gC();break a;}catch($$e){$$je=Bn($$e);if($$je instanceof D8){}else{throw $$e;}}}}
function ASI(){BnK=Cw(0);}
function Jo(){C.call(this);this.EA=null;}
var Bni=null;var BnL=null;function E3(){E3=M(Jo);A_p();}
function ALq(a){var b=new Jo();Ya(b,a);return b;}
function Ya(a,b){E3();L(a);a.EA=b;}
function Fq(){E3();return Bni;}
function A_p(){Bni=ALq(B(464));BnL=ALq(B(465));}
var Fd=D(Y);
var BnM=null;var Bj5=null;var BnN=null;function Kg(){Kg=M(Fd);AZo();}
function A6X(a,b){var c=new Fd();Wz(c,a,b);return c;}
function Wz(a,b,c){Kg();BJ(a,b,c);}
function R1(){Kg();return H(Fd,[BnM,Bj5]);}
function AZo(){BnM=A6X(B(466),0);Bj5=A6X(B(467),1);BnN=R1();}
var LR=D(FX);
var BnO=null;function AVc(){AVc=M(LR);ARU();}
function Bb2(){var a=new LR();AGt(a);return a;}
function AGt(a){AVc();MB(a);}
function AOh(a,b,c,d){A2I(b,c,d);}
function ARU(){BnO=Bb2();}
var Tf=D(Do);
function BaX(a,b,c){var d=new Tf();AIF(d,a,b,c);return d;}
function AIF(a,b,c,d){GD(a,b,c,d);}
function A_k(a,b,c,d){var e;e=d.D();if(e>b)return a.j.cp(b,e,c,d);return a.j.c(b,c,d);}
function ATi(a,b,c,d){var e;e=d.D();if(a.j.cp(b,e,c,d)>=0)return b;return (-1);}
function A65(a){return B(468);}
var Gr=D(Y);
var BnP=null;var BnQ=null;var BnR=null;function BbC(){BbC=M(Gr);A2h();}
function AIV(a,b){var c=new Gr();U_(c,a,b);return c;}
function U_(a,b,c){BbC();BJ(a,b,c);}
function A2h(){BnP=AIV(B(469),0);BnQ=AIV(B(470),1);BnR=H(Gr,[BnP,BnQ]);}
var Te=D(CN);
function Bd6(a,b,c){var d=new Te();AY1(d,a,b,c);return d;}
function AY1(a,b,c,d){FJ(a,b,c,d);}
function AVl(a,b,c,d){var e;if(!a.R.S(d))return a.j.c(b,c,d);e=a.j.c(b,c,d);if(e>=0)return e;return a.R.c(b,c,d);}
var AGN=D(Gc);
var KK=D(0);
var ADS=D(Eh);
function AZ9(a){var b=new ADS();APV(b,a);return b;}
function APV(a,b){ADY(a,b);}
function Ig(){Bl.call(this);this.I0=0.0;}
var BnS=null;function Bfn(){Bfn=M(Ig);A9I();}
function BeO(a){var b=new Ig();AGE(b,a);return b;}
function AGE(a,b){Bfn();CL(a);a.I0=b;}
function A9I(){BnS=Bc(Ig,111);}
var OB=D();
var BnT=null;function ALZ(){ALZ=M(OB);AHC();}
function Rm(b){ALZ();return BnT.I(b);}
function AGO(){var b;ALZ();BnT.bz();b=BnT;FV();b.s(B(471),Bkp);BnT.s(B(472),Bkn);BnT.s(B(473),Bkj);BnT.s(B(474),Bkk);BnT.s(B(475),Bkl);BnT.s(B(476),Bkm);BnT.s(B(477),Bkq);BnT.s(B(478),Bkr);BnT.s(B(479),Bks);BnT.s(B(480),Bkt);BnT.s(B(481),Bku);BnT.s(B(482),Bkv);BnT.s(B(483),Bkw);BnT.s(B(484),Bkx);BnT.s(B(485),Bky);BnT.s(B(486),Bkz);BnT.s(B(487),BkA);BnT.s(B(488),BkB);BnT.s(B(489),BkC);BnT.s(B(490),BkD);BnT.s(B(491),BkE);BnT.s(B(492),BkF);BnT.s(B(493),BkG);BnT.s(B(494),BkH);BnT.s(B(495),BkI);BnT.s(B(496),BkJ);BnT.s(B(497),
BkK);BnT.s(B(498),BkL);BnT.s(B(499),BkM);BnT.s(B(500),BkN);BnT.s(B(501),BkO);BnT.s(B(502),BkP);BnT.s(B(503),BkQ);BnT.s(B(504),BkR);}
function AHC(){BnT=El();AGO();}
var ADO=D(EE);
function Bbq(a,b){var c=new ADO();AYR(c,a,b);return c;}
function AYR(a,b,c){Kv(a,b,c);}
var ACq=D();
function ALc(){return {};}
var Uj=D();
function GT(){var a=this;C.call(a);a.Lw=0;a.ig=0;a.iw=0;a.ys=null;a.fp=null;a.bQ=null;a.mf=0;a.pL=null;a.lJ=0;a.lK=0;a.lL=0;a.v9=0.0;a.kG=null;a.mq=null;a.vP=null;a.Fk=null;a.gM=null;a.il=null;}
var BmX=null;var BnU=0;var BnV=null;function Gb(){Gb=M(GT);AOH();}
function ARZ(a){var b=new GT();PL(b,a);return b;}
function Pw(a,b,c){var d=new GT();WJ(d,a,b,c);return d;}
function PL(a,b){var c,d,e,f,g,h;Gb();L(a);a.lJ=255;a.lK=255;a.lL=255;a.kG=JJ(a.lJ,a.lK,a.lL,a.v9);G4();a.mq=BnW;UW();a.vP=Bmn;c=b;d=c.fG();e=c.h3.iD.I(d);ML(a,(-1),(-1),e,null);if(a.gM!==null)return;f=new DK;g=b.fG();h=K();I(I(I(h,B(505)),g),B(506));D7(f,Q(h));G(f);}
function WJ(a,b,c,d){Gb();L(a);a.lJ=255;a.lK=255;a.lL=255;a.kG=JJ(a.lJ,a.lK,a.lL,a.v9);G4();a.mq=BnW;UW();a.vP=Bmn;ML(a,b,c,null,null);}
function ML(a,b,c,d,e){var f,g;if(e!==null){a.il=e;a.ig=e.getWidth();a.iw=e.getHeight();}else if(d===null){a.ig=b;a.iw=c;}else{a.gM=d;a.ig=d.width;a.iw=d.height;}Z3();a.ys=BnX;a.pL=Nf(4);Gb();f=BnU;BnU=f+1|0;a.mf=f;a.pL.Gg(0,a.mf);BmX.s(Bb(a.mf),a);g=BmX.cx();a.Lw=g;}
function S_(a){var b,c,d,e,f;b=Gn();c=b.jm();d=c.createElement("canvas");a.fp=d;e=a.fp;f=a.ig;e.width=f;e=a.fp;f=a.iw;e.height=f;a.bQ=a.fp.getContext("2d");e=a.bQ;f=$rt_ustr((Hw()).d());e.globalCompositeOperation=f;}
function Hw(){Gb();Ha();return BnY;}
function JJ(b,c,d,e){var f;Gb();f=K();Bi(Fl(Bi(V(Bi(V(Bi(V(I(f,B(507)),b),44),c),44),d),44),e),41);return Q(f);}
function AHV(a,b){var c,d;a.mq=b;Hv(a);c=a.bQ;d=$rt_ustr((Hw()).d());c.globalCompositeOperation=d;}
function AKP(a){return a.ys;}
function ANW(a){return 6408;}
function AQb(a){return 6408;}
function ASQ(a){return 5121;}
function AMP(a){return a.ig;}
function APL(a){return a.iw;}
function A73(a){return a.pL;}
function AY8(a){Gb();BmX.fM(Bb(a.mf));}
function A42(a){Hv(a);return a.fp;}
function Hv(a){var b,c;if(a.fp===null){S_(a);if(a.gM!==null){b=a.bQ;Ha();c=$rt_ustr(FC(BnZ));b.globalCompositeOperation=c;b=a.bQ;c=a.gM;b.drawImage(c,0.0,0.0);b=a.bQ;c=$rt_ustr(FC(Hw()));b.globalCompositeOperation=c;}if(a.il!==null){c=a.bQ;Ha();b=$rt_ustr(FC(BnZ));c.globalCompositeOperation=b;b=a.bQ;c=a.il;b.drawImage(c,0.0,0.0);b=a.bQ;c=$rt_ustr(FC(Hw()));b.globalCompositeOperation=c;}}}
function AJj(a){return a.fp===null&&a.gM!==null?1:0;}
function A5F(a){return a.gM;}
function A6k(a){return a.fp===null&&a.il!==null?1:0;}
function A0d(a){return a.il;}
function A0q(a,b,c,d,e,f,g,h){var i;i=b.nO();J6(a,i,e,f,g,h,c,d,g,h);}
function ARR(a,b,c,d,e,f,g,h,i,j){J6(a,b.nO(),c,d,e,f,g,h,i,j);}
function J6(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u;Hv(a);k=a.mq;G4();if(k===Bj6){l=a.bQ;k=$rt_ustr(BnV);l.fillStyle=k;l=a.bQ;k=$rt_ustr(BnV);l.strokeStyle=k;l=a.bQ;k="destination-out";l.globalCompositeOperation=k;a.bQ.beginPath();l=a.bQ;m=g;n=h;o=i;p=j;l.rect(m,n,o,p);NK();AFV(a,Bn0);a.bQ.closePath();l=a.bQ;k=$rt_ustr(a.kG);l.fillStyle=k;q=a.bQ;l=$rt_ustr(a.kG);q.strokeStyle=l;q=a.bQ;Ha();l=$rt_ustr(FC(BnY));q.globalCompositeOperation=l;}if(e&&f&&i&&j){l=a.bQ;m=c;n=d;o=e;p=f;r=g;s=h;t=i;u=j;l.drawImage(b,
m,n,o,p,r,s,t,u);}a.Fk=null;}
function AFV(a,b){a:{Hv(a);Ba1();switch(Bn1.data[Bj(b)]){case 1:break;case 2:a.bQ.stroke();break a;default:break a;}a.bQ.fill();}}
function AOH(){BmX=Df();BnU=0;BnV=JJ(255,255,255,1.0);}
var EP=D(EH);
var AFA=D();
var AFz=D();
var Qq=D();
function Bel(){var a=new Qq();A6K(a);return a;}
function A6K(a){L(a);}
var LF=D(0);
function HT(){var a=this;C.call(a);a.yb=null;a.mk=0;a.l6=0;a.ip=null;a.cU=null;a.y8=0;a.hK=0;}
var Bn2=0;function Beu(a,b,c,d){var e=new HT();AZx(e,a,b,c,d);return e;}
function AZx(a,b,c,d,e){L(a);a.mk=0;a.l6=0;a.hK=0;a.yb=b;a.cU=c;a.ip=d;a.y8=e;if(a.cU!==null){a.cU=Oy(a,a.cU);a.mk=a.cU.bp();a.l6=a.cU.bl();if(d===null)a.ip=a.cU.eW();}}
function AWB(a){return a.hK;}
function AZy(a){if(a.hK)G(BG(B(508)));if(a.cU===null){a.cU=Oy(a,ARZ(a.yb));a.mk=a.cU.bp();a.l6=a.cU.bl();if(a.ip===null)a.ip=a.cU.eW();}a.hK=1;}
function Oy(a,b){var c,d,e,f,g;a:{if(Bij===null&&Bn2){c=b.bp();d=b.bl();e=Jd(c);f=Jd(d);if(c!=e)break a;if(d!=f)break a;}return b;}g=Pw(e,f,b.eW());g.vA(b,0,0,0,0,c,d);b.be();return g;}
function APn(a){var b;if(!a.hK)G(BG(B(509)));a.hK=0;b=a.cU;a.cU=null;return b;}
function A3c(a){return 1;}
function AOF(a){return a.mk;}
function AZN(a){return a.l6;}
function ALN(a){return a.ip;}
function AXE(a){return a.y8;}
function AK2(a){return 1;}
function A5q(a){Kg();return BnM;}
function AZ3(a,b){G(BG(B(510)));}
var Qk=D(CD);
var Ql=D(CD);
var Um=D(Ft);
function OM(a){var b=new Um();AL6(b,a);return b;}
function AL6(a,b){LB(a,b);}
var KM=D();
var Bn3=null;function Fb(){return Bn3;}
function APl(b){Bn3=b;}
function ADj(){var a=this;C.call(a);a.yE=null;a.pM=null;}
function A_X(){var a=new ADj();AXO(a);return a;}
function AXO(a){L(a);a.yE=Ep(16);a.pM=Bem(16);}
function A61(a,b){return a.pM.I(b);}
function ATv(a,b){a.yE.jh(b,0);a.pM.fM(b);}
function ADZ(){var a=this;C.call(a);a.oZ=Bd;a.nL=0;a.sT=0;}
function BeW(){var a=new ADZ();AJy(a);return a;}
function AJy(a){L(a);}
var KL=D(0);
function SK(){var a=this;C.call(a);a.uP=0;a.fc=0;a.z8=0;a.s6=0;a.ih=0;a.df=null;a.gi=null;a.vZ=0;a.v2=0;a.tT=0;a.Ke=0;a.mW=0;a.GR=0;a.oT=null;a.eU=null;a.rl=null;}
function Ba0(a,b,c,d){var e=new SK();A1H(e,a,b,c,d);return e;}
function Bbj(a,b,c,d,e){var f=new SK();TR(f,a,b,c,d,e);return f;}
function A1H(a,b,c,d,e){TR(a,b,c,d,e,A9m(c,d,e));a.vZ=1;}
function TR(a,b,c,d,e,f){var g,h,i,j;L(a);a.oT=CP();a.s6=b;a.v2=e;a.gi=f;g=Qv(a,c,d,e);a.df=Bai(0,b,0,g);a.eU=Cf(Dg(b,(a.df.Ac()).cJ/4|0));a.tT=(a.df.Ac()).cJ/4|0;a.Ke=a.df.hO(8)===null?0:(a.df.hO(8)).ev/4|0;a.mW=a.df.hO(4)===null?0:(a.df.hO(4)).ev/4|0;if(a.df.hO(16)===null)h=0;else{i=a.df;h=(i.hO(16)).ev/4|0;}a.GR=h;a.rl=Bc(BL,e);j=0;while(j<e){a.rl.data[j]=(((K()).h(B(511))).A(j)).d();j=j+1|0;}}
function Qv(a,b,c,d){var e,f,g;e=CG();e.bG(Gh(1,3,B(361)));if(b)e.bG(Gh(8,3,B(512)));if(c)e.bG(Gh(4,4,B(362)));f=0;while(f<d){e.bG(Gh(16,2,(((K()).h(B(513))).A(f)).d()));f=f+1|0;}g=Bc(FI,e.k);f=0;while(f<e.k){g.data[f]=e.X(f);f=f+1|0;}return g;}
function AKe(a,b,c){a.oT.hP(b);a.uP=c;}
function A8W(a,b){a.eU.data[a.fc+a.mW|0]=b.iA();}
function ATU(a,b,c,d,e){a.eU.data[a.fc+a.mW|0]=R8(b,c,d,e);}
function AYc(a,b){a.eU.data[a.fc+a.mW|0]=b;}
function A4X(a,b,c,d){var e;e=a.fc;a.eU.data[e]=b;a.eU.data[e+1|0]=c;a.eU.data[e+2|0]=d;a.z8=0;a.fc=a.fc+a.tT|0;a.ih=a.ih+1|0;}
function A9s(a){var b;if(!a.ih)return;a.gi.ee();a.gi.sd(B(514),a.oT);b=0;while(b<a.v2){a.gi.o4(a.rl.data[b],b);b=b+1|0;}a.df.A7(a.eU,0,a.fc);a.df.E1(a.gi,a.uP);a.z8=0;a.fc=0;a.ih=0;}
function AJt(a){a.hM();}
function AL_(a){return a.ih;}
function ALS(a){return a.s6;}
function AZe(a){if(a.vZ&&a.gi!==null)a.gi.be();a.df.be();}
function AWm(b,c,d){var e,f,g;e=((((K()).h(B(515))).h(!b?B(46):B(516))).h(!c?B(46):B(517))).d();f=0;while(f<d){e=(((((K()).h(e)).h(B(518))).A(f)).h(B(519))).d();f=f+1|0;}g=((((K()).h(e)).h(B(520))).h(!c?B(46):B(521))).d();f=0;while(f<d){g=(((((K()).h(g)).h(B(522))).A(f)).h(B(519))).d();f=f+1|0;}g=(((K()).h(g)).h(B(523))).d();if(c)g=(((K()).h(g)).h(B(524))).d();f=0;while(f<d){g=((((((((K()).h(g)).h(B(525))).A(f)).h(B(526))).h(B(513))).A(f)).h(B(519))).d();f=f+1|0;}g=(((K()).h(g)).h(B(527))).d();return g;}
function A4S(b,c,d){var e,f,g,h;e=B(528);if(c)e=(((K()).h(e)).h(B(521))).d();f=0;while(f<d){g=(((((K()).h(e)).h(B(522))).A(f)).h(B(519))).d();e=(((((K()).h(g)).h(B(529))).A(f)).h(B(519))).d();f=f+1|0;}g=((K()).h(e)).h(B(530));h=!c?B(531):B(532);g=(g.h(h)).d();if(d>0)g=(((K()).h(g)).h(B(533))).d();f=0;while(f<d){g=f!=(d-1|0)?(((((((K()).h(g)).h(B(534))).A(f)).h(B(535))).A(f)).h(B(536))).d():(((((((K()).h(g)).h(B(534))).A(f)).h(B(535))).A(f)).h(B(537))).d();f=f+1|0;}g=(((K()).h(g)).h(B(538))).d();return g;}
function A9m(b,c,d){var e,f,g;e=AWm(b,c,d);f=A4S(b,c,d);g=AMk(e,f);if(g.pg())return g;G(BG((((K()).h(B(366))).h(g.oe())).d()));}
var I0=D(Ct);
var Bn4=null;var Bn5=null;function Bn6(){Bn6=M(I0);AXG();}
function AXG(){Bn4=AYs();Bn5=Bfh();}
function AE0(){var a=this;FG.call(a);a.qP=null;a.gn=0;a.Du=0;a.nZ=0;}
function Bn7(a,b,c){var d=new AE0();AHe(d,a,b,c);return d;}
function Ni(a){var b=new AE0();AJi(b,a);return b;}
function AHe(a,b,c,d){KV(a);a.qP=b;a.gn=c;a.Du=c;a.nZ=c+d|0;}
function AJi(a,b){AHe(a,b,0,b.data.length);}
function AZn(a){var b,c,d;if(a.gn>=a.nZ)b=(-1);else{c=a.qP.data;d=a.gn;a.gn=d+1|0;b=c[d]&255;}return b;}
function A$T(a,b,c,d){var e,f,g,h,i,j;e=BN(d,a.nZ-a.gn|0);f=0;while(f<e){g=b.data;h=c+1|0;i=a.qP.data;j=a.gn;a.gn=j+1|0;g[c]=i[j];f=f+1|0;c=h;}if(e<=0)e=(-1);return e;}
function ANe(a){}
var VN=D();
function AHN(b,c){var d,e,f,g,h,i,j,k;if(!b)return B(272);d=1<<c;e=d-1|0;f=(((32-MX(b)|0)+c|0)-1|0)/c|0;g=B8(f);h=Dg(f-1|0,c);i=0;while(h>=0){j=g.data;k=i+1|0;j[i]=Gx(b>>>h&e,d);h=h-c|0;i=k;}return MH(g);}
var Wq=D(Ex);
function Bda(a,b,c){var d=new Wq();A$V(d,a,b,c);return d;}
function A$V(a,b,c,d){N1(a,b,c,d);}
function APZ(a,b,c,d){var e;if((b+a.bm.b5()|0)<=d.D()){e=a.bm.bB(b,c);if(e>=1)b=b+e|0;}return a.j.c(b,c,d);}
var AEO=D();
var HJ=D(Bk);
var UT=D(Fg);
var MO=D(BX);
var Bn8=null;function AVg(){AVg=M(MO);AQC();}
function AH_(a){var b=new MO();XI(b,a);return b;}
function XI(a,b){AVg();B6(a);a.cD(Bd,0);}
function AII(a){var b;b=Vu(T(a.C));Cs();BhT.bb(O(b));return BhT;}
function A66(a){var b;b=AG_(T(a.C));QX();BmP.bb(O(b));return BmP;}
function AQC(){Bn8=AH_(0);}
function Vu(b){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Transform);var returnedJSObj=jsObj.p;return $rt_globals.Box2D.getPointer(returnedJSObj);}
function AG_(b){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Transform);var returnedJSObj=jsObj.q;return $rt_globals.Box2D.getPointer(returnedJSObj);}
var AB3=D(Bp);
function P4(){var a=this;EJ.call(a);a.yu=null;a.ob=null;}
function BbM(){var a=new P4();AHZ(a);return a;}
function AHZ(a){JO(a);a.yu=AON(Bc3());a.ob=AON(A_X());}
function AWd(a,b){if(!AFI(a.ob,b))return Mc(a.yu,b);return Mc(a.ob,b);}
var AB2=D(FD);
function QR(){S.call(this);this.Lm=0.0;}
function Bf$(a){var b=new QR();A0$(b,a);return b;}
function A0$(a,b){BY(a);a.Lm=b;}
var AB4=D(Bp);
var AFH=D();
function A6s(b,c){if(b===c)return 1;return b!==null?b.K(c):c!==null?0:1;}
var N3=D(0);
function AB_(){var a=this;BR.call(a);a.cf=null;a.qO=null;a.o1=null;}
function Bbd(a){var b=new AB_();AZ8(b,a);return b;}
function AZ8(a,b){var c;Da(a);a.cf=b.d();a.bI=b.i();a.qO=A5Y(a.bI);a.o1=A5Y(a.bI);c=0;while(c<(a.bI-1|0)){a.qO.wC(a.cf.f(c),(a.bI-c|0)-1|0);a.o1.wC(a.cf.f((a.bI-c|0)-1|0),(a.bI-c|0)-1|0);c=c+1|0;}}
function AKQ(a,b,c){return !a.r9(c,b)?(-1):a.bI;}
function AYh(a,b,c,d){var e,f;e=d.D();while(true){if(b>e)return (-1);f=a.Jl(c,b,e);if(f<0)return (-1);if(a.j.c(f+a.bI|0,c,d)>=0)break;b=f+1|0;}return f;}
function A1B(a,b,c,d,e){var f;while(true){if(c<b)return (-1);f=a.GW(d,b,c);if(f<0)return (-1);if(a.j.c(f+a.bI|0,d,e)>=0)break;c=f+(-1)|0;}return f;}
function AQ5(a){var b,c;b=a.cf;c=K();I(I(c,B(539)),b);return Q(c);}
function AM$(a,b){var c,d,e,f,g;if(b instanceof DN)return b.mG()!=a.cf.f(0)?0:1;if(b instanceof DJ)return b.bB(0,a.cf.cA(0,1))<=0?0:1;if(!(b instanceof Db)){if(!(b instanceof DI))return 1;a:{if(a.cf.i()>1){c=b;d=c.p7();e=a.cf.f(0);c=a.cf;f=c.f(1);if(d==Ds(e,f)){e=1;break a;}}e=0;}return e;}b:{c:{c=b;if(!c.n(a.cf.f(0))){g=a.cf;if(g.i()<=1)break c;g=a.cf;e=Ds(g.f(0),a.cf.f(1));if(!c.n(e))break c;}e=1;break b;}e=0;}return e;}
function A9J(a,b,c,d){var e,f;e=a.cf.f(a.bI-1|0);while(true){if(c>(d-a.bI|0))return (-1);f=b.f((c+a.bI|0)-1|0);if(f==e&&a.r9(b,c))break;c=c+a.qO.by(f)|0;}return c;}
function A80(a,b,c,d){var e,f,g,h;e=a.cf.f(0);f=b.i();g=(f-d|0)-a.bI|0;if(g<=0)d=d+g|0;while(true){if(d<c)return (-1);h=b.f(d);if(h==e&&a.r9(b,d))break;d=d-a.o1.by(h)|0;}return d;}
function ANr(a,b,c){var d;d=0;while(d<a.bI){if(b.f(d+c|0)!=a.cf.f(d))return 0;d=d+1|0;}return 1;}
var IX=D(Ci);
var Sy=D(IX);
var C$=D(Ce);
function Bn9(a,b){var c=new C$();D1(c,a,b);return c;}
function D1(a,b,c){Kn(a,b,c);}
var Gu=D(CN);
function Bgc(a,b,c){var d=new Gu();MJ(d,a,b,c);return d;}
function MJ(a,b,c,d){FJ(a,b,c,d);}
function A8H(a,b,c,d){var e;if(!a.R.S(d))return a.j.c(b,c,d);e=a.R.c(b,c,d);if(e>=0)return e;return a.j.c(b,c,d);}
function A91(a,b){Mb(a,b);a.R.L(b);}
var AEG=D(DC);
function QV(){var a=this;BR.call(a);a.rf=null;a.tU=0;}
function AM2(a){var b=new QV();AQz(b,a);return b;}
function AQz(a,b){Da(a);a.rf=b.jS();a.tU=b.bs;}
function A3C(a,b,c){var d,e;d=a.rf;e=DS(c.f(b));return !d.n(Er(e))?(-1):1;}
function AYB(a){var b,c,d;b=!a.tU?B(39):B(40);c=a.rf.d();d=K();I(I(I(d,B(422)),b),c);return Q(d);}
var AEu=D();
var ABK=D();
var Sx=D();
var AB1=D(B_);
var Tk=D(Bp);
var Mp=D(Eb);
var Tj=D(Bp);
var ZH=D();
function AHM(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function A5M(b,c){return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&ADv(b.constructor,c)?1:0;}
function ADv(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(ADv(d[e],c))return 1;e=e+1|0;}return 0;}
function Bdr(b){b.hZ();}
function APz(b){AS0(b,0);}
function AS0(b,c){return setTimeout(function(){Bdr(b);},c);}
function AHz(){return AOr();}
function A8C(b){return b.$meta.primitive?1:0;}
function AGK(b){return b.$meta.item;}
function ASV(b){return $rt_str(b.$meta.name);}
function AOr(){return [];}
var L2=D(BX);
var Bn$=null;function AUK(){AUK=M(L2);A9t();}
function Bcq(a){var b=new L2();W_(b,a);return b;}
function Bay(a){var b=new L2();ACG(b,a);return b;}
function AHQ(a,b){Xf(T((a.bk())),b.data);}
function W_(a,b){AUK();B6(a);a.cD(O(XV(T((b.bk())))),1);}
function ACG(a,b){AUK();B6(a);a.cD(Bd,0);}
function APK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return O(Vx(T((a.bk())),b,c,d,e,f,g,h,i,j,!!k,!!l,!!m,!!n,!!o,p));}
function A1N(a,b){var c,d;c=T((a.bk()));d=T((b.bk()));VO(c,d);}
function AI0(a,b,c,d,e,f,g,h,i){var j,k,l;j=T((a.bk()));k=T((b.bk()));l=T((c.bk()));return O(O8(j,k,l,!!d,e,f,g,h,i));}
function AOD(a,b,c,d,e,f){ZM(T((a.bk())),B4(b,"ReportFixture"),c,d,e,f);}
function A3d(a,b,c,d){Wg(T(a.C),b,c,d);}
function A6F(a){return SO(T(a.C));}
function A9t(){Bn$=Bay(0);}
function XV(b){var vec2=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Vec2);var jsObj=new $rt_globals.Box2D.b2World(vec2);return $rt_globals.Box2D.getPointer(jsObj);}
function Vx(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var world=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2World);var bodyDef=new $rt_globals.Box2D.b2BodyDef();bodyDef.type=c;bodyDef.position.Set(d,e);bodyDef.angle=f;bodyDef.linearVelocity.Set(g,h);bodyDef.angularVelocity=i;bodyDef.linearDamping=j;bodyDef.angularDamping=k;bodyDef.allowSleep=l;bodyDef.awake=m;bodyDef.fixedRotation=n;bodyDef.bullet=o;bodyDef.active=p;bodyDef.gravityScale=q;var body=world.CreateBody(bodyDef);return $rt_globals.Box2D.getPointer(body);}
function VO(b,c){var world=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2World);var joint=$rt_globals.Box2D.wrapPointer(c,$rt_globals.Box2D.b2Joint);world.DestroyJoint(joint);}
function Xf(b,c){var world=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2World);var contact=world.GetContactList();var contactAddr=$rt_globals.Box2D.getPointer(contact);var i=0;while(contactAddr!=0){c[i]=contactAddr;contact=contact.GetNext();contactAddr=$rt_globals.Box2D.getPointer(contact);i++;}}
function O8(b,c,d,e,f,g,h,i,j){var world=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2World);var bodyA=$rt_globals.Box2D.wrapPointer(c,$rt_globals.Box2D.b2Body);var bodyB=$rt_globals.Box2D.wrapPointer(d,$rt_globals.Box2D.b2Body);var def=new $rt_globals.Box2D.b2MouseJointDef();def.bodyA=bodyA;def.bodyB=bodyB;def.collideConnected=e;def.target=new $rt_globals.Box2D.b2Vec2(f,g);def.maxForce=h;def.frequencyHz=i;def.dampingRatio=j;var joint=world.CreateJoint(def);return $rt_globals.Box2D.getPointer(joint);}
function ZM(b,c,d,e,f,g){var world=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2World);var myQueryCallback=new $rt_globals.Box2D.JSQueryCallback();myQueryCallback.ReportFixture=c;var aabb=new $rt_globals.Box2D.b2AABB();aabb.lowerBound=new $rt_globals.Box2D.b2Vec2(d,e);aabb.upperBound=new $rt_globals.Box2D.b2Vec2(f,g);world.QueryAABB(myQueryCallback,aabb);}
function Wg(b,c,d,e){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2World);jsObj.Step(c,d,e);}
function SO(b){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2World);var returnedJSObj=jsObj.GetContactCount();return returnedJSObj;}
function GJ(){C.call(this);this.FA=null;}
var BhE=null;var BhD=null;var BhC=null;function DQ(){DQ=M(GJ);APF();}
function W3(a){var b=new GJ();AEz(b,a);return b;}
function AEz(a,b){DQ();L(a);a.FA=b;}
function APF(){BhE=W3(B(540));BhD=W3(B(541));BhC=W3(B(542));}
function GR(){C.call(this);this.wh=0;}
var Bn_=null;var Boa=null;var Bob=null;function A_6(){A_6=M(GR);AYl();}
function ARw(a){var b=new GR();U4(b,a);return b;}
function U4(a,b){A_6();L(a);a.wh=b;}
function A1Z(a){return a.wh;}
function AYl(){Bn_=ARw(1);Boa=ARw(0);Bob=F($rt_booleancls());}
var AB0=D();
var XR=D(Bk);
function ALb(){var a=new XR();A5k(a);return a;}
function Bc2(a){var b=new XR();A3h(b,a);return b;}
function A5k(a){Cv(a);}
function A3h(a,b){Et(a,b);}
var JN=D();
var Boc=null;var Bod=null;function BeS(){BeS=M(JN);ASa();}
function ABV(b){var c,d,e,f,g,h;BeS();c=Cw(b.i()/2|0);d=0;while(true){e=c.data;if(d>=e.length)break;f=d*2|0;g=b.f(f);h=b.f(f+1|0);e[d]=((Bod.data[g]<<4)+Bod.data[h]|0)<<24>>24;d=d+1|0;}return c;}
function ASa(){var b;Boc=Hm([48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70]);Bod=Bf(128);b=0;while(b<Boc.data.length){Bod.data[Boc.data[b]]=b;if(Boc.data[b]>=65)Bod.data[(Boc.data[b]-65|0)+97|0]=b;b=b+1|0;}}
var AE7=D(B_);
var Ug=D(0);
var AFS=D(Gq);
function Bdl(a,b){var c=new AFS();A9P(c,a,b);return c;}
function A9P(a,b,c){KF(a,b,c);}
function AKo(a,b,c,d){var e,f;e=a.h0(d);if(e!==null&&(b+e.i()|0)<=d.D()){f=!(c.d()).v7(e,b)?(-1):e.i();if(f<0)return (-1);d.bo(a.hf,f);return a.j.c(b+f|0,c,d);}return (-1);}
function AT2(a,b,c,d){var e,f,g,h;e=a.h0(d);f=d.dA();if(e!==null&&(b+e.i()|0)<=f){g=c.d();while(true){if(b>f)return (-1);h=g.rz(e,b);if(h<0)return (-1);if(a.j.c(h+e.i()|0,c,d)>=0)break;b=h+1|0;}return h;}return (-1);}
function AIe(a,b,c,d,e){var f,g,h;f=a.h0(e);if(f===null)return (-1);g=d.d();a:{while(true){if(c<b)return (-1);h=g.wv(f,c);if(h<0)break a;if(h<b)break a;if(a.j.c(h+f.i()|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function A5a(a,b){return 1;}
function A90(a){var b,c;b=a.bf;c=K();V(I(c,B(543)),b);return Q(c);}
var MR=D(0);
function Zw(){Do.call(this);this.oh=null;}
function Baj(a,b,c,d){var e=new Zw();A60(e,a,b,c,d);return e;}
function A60(a,b,c,d,e){GD(a,b,c,d);a.oh=e;}
function ARf(a,b,c,d){var e,f;e=d.D();f=On(a,b,e,c);if(f>=0)e=f;if(e>b)return a.j.cp(b,e,c,d);return a.j.c(b,c,d);}
function AHD(a,b,c,d){var e,f,g,h,i;e=d.D();f=a.j.ci(b,c,d);if(f<0)return (-1);g=On(a,f,e,c);if(g>=0)e=g;h=a.j.cp(f,e,c,d);h=Bt(f,h);i=h>0?AFX(a,b,h-1|0,c):h?(-1):0;if(i>=b)b=i>=h?i:i+1|0;return b;}
function On(a,b,c,d){while(true){if(b>=c)return (-1);if(a.oh.iV(d.f(b)))break;b=b+1|0;}return b;}
function AFX(a,b,c,d){while(true){if(c<b)return (-1);if(a.oh.iV(d.f(c)))break;c=c+(-1)|0;}return c;}
function A79(a){return B(544);}
var TS=D(Fc);
var Ja=D();
var Boe=null;var Bof=null;function AGV(){AGV=M(Ja);A01();}
function ACY(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;AGV();d=$rt_floatToIntBits(b);c.s5=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.oo=0;c.n2=0;return;}g=0;if(f)h=e|8388608;else{h=e<<1;while(B5(CR(O(h),O(8388608)),Bd)){h=h<<1;f=f+(-1)|0;g=g+1|0;}}i=ADf(Bof,f);if(i<0)i=( -i|0)-2|0;j=f-Bof.data[i]|0;k=9+j|0;l=O(h);m=T(BT(Bu(l,O(Boe.data[i])),32-k|0));if(m>=1000000000){i=i+1|0;n=f-Bof.data[i]|0;k=9+n|0;m=T(BT(Bu(l,O(Boe.data[i])),32-k|0));}n=(31-k|0)-g|0;o=n>=0?Boe.data[i]>>>n:Boe.data[i]<<( -n
|0);p=(o+1|0)>>1;q=o>>1;if(h==4194304)q=q>>2;r=AC3(m,q);s=Sa(m,p);h=Cx(r,s);h=h>0?Dg(m/r|0,r):h<0?Dg(m/s|0,s)+s|0:Dg((m+(s/2|0)|0)/s|0,s);if(h>=1000000000){i=i+1|0;h=h/10|0;}else if(h<100000000){i=i+(-1)|0;h=h*10|0;}c.oo=h;c.n2=i-50|0;}
function AC3(b,c){var d,e;AGV();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if(e>=(c/2|0))d=d/10|0;return d;}
function Sa(b,c){var d,e;AGV();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if((d-e|0)>(c/2|0))d=d/10|0;return d;}
function A01(){var b,c,d,e,f,g,h,i,j,k,l;Boe=Bf(100);Bof=Bf(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=Boe.data;g=d+50|0;f[g]=$rt_udiv(e,20);Bof.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}i=214748364;e=127;d=0;while(d<50){j=0;k=b;while(k>i){k=k>>1;j=j+1|0;e=e+(-1)|0;}k=k*10|0;if(j<=0)b=k;else{l=O(b&((1<<j)-1|0));b=T(Ca(O(k),F5(Bu(l,O(10)),j)));}f=Boe.data;k=(50-d|0)-1|0;f[k]=$rt_udiv(b,20);Bof.data[k]=e;d=d+1|0;}}
function CA(){Y.call(this);this.vQ=null;}
var BnZ=null;var Bog=null;var Boh=null;var Boi=null;var Boj=null;var Bok=null;var Bol=null;var Bom=null;var Bon=null;var BnY=null;var Boo=null;var Bop=null;function Ha(){Ha=M(CA);A1J();}
function Dv(a,b,c){var d=new CA();U7(d,a,b,c);return d;}
function U7(a,b,c,d){Ha();BJ(a,b,c);a.vQ=d;}
function FC(a){return a.vQ;}
function T8(){Ha();return H(CA,[BnZ,Bog,Boh,Boi,Boj,Bok,Bol,Bom,Bon,BnY,Boo]);}
function A1J(){BnZ=Dv(B(545),0,B(546));Bog=Dv(B(547),1,B(548));Boh=Dv(B(549),2,B(550));Boi=Dv(B(551),3,B(552));Boj=Dv(B(553),4,B(554));Bok=Dv(B(555),5,B(556));Bol=Dv(B(557),6,B(558));Bom=Dv(B(559),7,B(560));Bon=Dv(B(561),8,B(562));BnY=Dv(B(563),9,B(564));Boo=Dv(B(565),10,B(566));Bop=T8();}
var ACO=D();
var E0=D(Y);
var Boq=null;var Bor=null;var Bos=null;var Bot=null;function Bec(){Bec=M(E0);AQy();}
function SR(a,b){var c=new E0();Ry(c,a,b);return c;}
function Ry(a,b,c){Bec();BJ(a,b,c);}
function AQy(){Boq=SR(B(567),0);Bor=SR(B(568),1);Bos=SR(B(569),2);Bot=H(E0,[Boq,Bor,Bos]);}
var Vv=D(Dq);
var QA=D(Gg);
function BeY(a,b){var c=new QA();A$O(c,a,b);return c;}
function A$O(a,b,c){Of(a,b);a.cH=BdG();a.cH.bb(c);}
function AIs(a,b){Cs();Bmt.lh(b.w,b.v);a.cH.Kr(Bmt);}
function Cj(){Y.call(this);this.JR=0;}
var BkZ=null;var Bou=null;var Bov=null;var BjZ=null;var Bj0=null;var Bj1=null;var Bow=null;var Box=null;var Boy=null;var Boz=null;var BoA=null;var BoB=null;var BlE=null;var BoC=null;function D3(){D3=M(Cj);AUl();}
function C_(a,b,c){var d=new Cj();AHb(d,a,b,c);return d;}
function AHb(a,b,c,d){D3();BJ(a,b,c);a.JR=d;}
function ACz(){D3();return H(Cj,[BkZ,Bou,Bov,BjZ,Bj0,Bj1,Bow,Box,Boy,Boz,BoA,BoB]);}
function AUl(){BkZ=C_(B(570),0,0);Bou=C_(B(571),1,1);Bov=C_(B(572),2,2);BjZ=C_(B(573),3,3);Bj0=C_(B(574),4,4);Bj1=C_(B(575),5,5);Bow=C_(B(576),6,6);Box=C_(B(577),7,7);Boy=C_(B(578),8,8);Boz=C_(B(579),9,9);BoA=C_(B(580),10,10);BoB=C_(B(581),11,11);BoC=ACz();BlE=H(Cj,[BkZ,Bou,Bov,BjZ,Bj0,Bj1,Bow,Box,Boy,Boz,BoA,BoB]);}
function E4(){var a=this;C.call(a);a.ei=null;a.hb=0;a.lS=null;a.yw=null;a.zL=null;a.yZ=null;a.i3=null;a.yW=null;a.vt=null;a.x2=null;a.cZ=0;a.kX=0;a.lW=0;a.Le=null;a.xm=null;a.tp=null;a.u2=0;a.Fx=0;a.cv=null;a.f3=null;}
var BoD=0;var BoE=null;var BoF=null;var BoG=null;var BoH=null;function Mv(){Mv=M(E4);AR5();}
function AMk(a,b){var c=new E4();XF(c,a,b);return c;}
function XF(a,b,c){Mv();L(a);a.ei=B(46);a.lS=G1();a.yw=G1();a.zL=G1();a.i3=G1();a.yW=G1();a.vt=G1();a.Fx=0;a.cv=G6(1);a.f3=G6(1);if(b===null)G(Bo(B(582)));if(c===null)G(Bo(B(583)));if(BoE!==null&&BoE.i()>0)b=(((K()).h(BoE)).h(b)).d();if(BoF!==null&&BoF.i()>0)c=(((K()).h(BoF)).h(c)).d();a.xm=b;a.tp=c;a.Le=Ij(16);KQ(a,b,c);if(a.pg()){R3(a);T1(a);ADV(a,BhP,a);}}
function KQ(a,b,c){a.kX=O1(a,35633,b);a.lW=O1(a,35632,c);if(a.kX!=(-1)&&a.lW!=(-1)){a.cZ=AFB(a,a.DV());if(a.cZ!=(-1)){a.hb=1;return;}a.hb=0;return;}a.hb=0;}
function O1(a,b,c){var d,e,f,g,h;d=Bij;e=G6(1);f=d.zd(b);if(!f)return (-1);d.AU(f,c);d.uh(f);d.yQ(f,35713,e);g=e.by(0);if(g)return f;h=d.yY(f);a.ei=(((K()).h(a.ei)).h(b!=35633?B(584):B(585))).d();a.ei=(((K()).h(a.ei)).h(h)).d();return (-1);}
function ANP(a){var b,c;b=Bij;c=b.x7();if(!c)c=(-1);return c;}
function AFB(a,b){var c,d,e,f;c=Bij;if(b==(-1))return (-1);c.or(b,a.kX);c.or(b,a.lW);c.wX(b);d=GC(4);Gj(d,Fq());e=d.u5();c.kw(b,35714,e);f=e.by(0);if(f)return b;a.ei=Bij.p4(b);return (-1);}
function A8V(a){if(!a.hb)return a.ei;a.ei=Bij.p4(a.cZ);return a.ei;}
function A9R(a){return a.hb;}
function SZ(a,b){var c,d;c=Bij;d=a.i3.qS(b,(-2));if(d==(-2)){d=c.rt(a.cZ,b);a.i3.fe(b,d);}return d;}
function Kp(a,b){Mv();return a.G7(b,BoD);}
function A4k(a,b,c){var d;d=a.lS.qS(b,(-2));if(d==(-2)){d=Bij.ql(a.cZ,b);if(d==(-1)&&c){if(!a.hb)G(CJ((((K()).h(B(586))).h(a.oe())).d()));G(Bo(((((K()).h(B(587))).h(b)).h(B(588))).d()));}a.lS.fe(b,d);}return d;}
function A2J(a,b,c){var d,e;d=Bij;Eg(a);e=Kp(a,b);d.yg(e,c);}
function A0O(a,b,c){a.D3(b,c,0);}
function AXH(a,b,c,d){a.Fy(Kp(a,b),c,d);}
function A5e(a,b,c,d){var e;e=Bij;Eg(a);e.D4(b,1,d,c.a,0);}
function A$8(a,b,c,d,e,f,g){var h;h=Bij;Eg(a);h.zT(b,c,d,e,f,g);}
function AXN(a){var b;b=Bij;Eg(a);b.pF(a.cZ);}
function AS7(a){var b;b=Bij;b.pF(0);b.oM(a.kX);b.oM(a.lW);b.x9(a.cZ);Mv();if(BoG.I(BhP)!==null)(BoG.I(BhP)).jh(a,1);}
function AI_(a,b){var c,d;c=Bij;Eg(a);d=SZ(a,b);if(d==(-1))return;c.oE(d);}
function A4e(a,b){var c;c=Bij;Eg(a);c.oE(b);}
function A64(a,b){var c;c=Bij;Eg(a);c.AR(b);}
function Eg(a){if(a.u2){KQ(a,a.xm,a.tp);a.u2=0;}}
function ADV(a,b,c){var d;Mv();d=BoG.I(b);if(d===null)d=CG();d.bG(c);BoG.s(b,d);}
function T1(a){var b,c,d,e;a.cv.dm();Bij.kw(a.cZ,35718,a.cv);b=a.cv.by(0);a.yZ=Bc(BL,b);c=0;while(c<b){a.cv.dm();a.cv.xx(0,1);a.f3.dm();d=Bij.At(a.cZ,c,a.cv,a.f3);e=Bij.ql(a.cZ,d);a.lS.fe(d,e);a.yw.fe(d,a.f3.by(0));a.zL.fe(d,a.cv.by(0));a.yZ.data[c]=d;c=c+1|0;}}
function R3(a){var b,c,d,e;a.cv.dm();Bij.kw(a.cZ,35721,a.cv);b=a.cv.by(0);a.x2=Bc(BL,b);c=0;while(c<b){a.cv.dm();a.cv.xx(0,1);a.f3.dm();d=Bij.z5(a.cZ,c,a.cv,a.f3);e=Bij.rt(a.cZ,d);a.i3.fe(d,e);a.yW.fe(d,a.f3.by(0));a.vt.fe(d,a.cv.by(0));a.x2.data[c]=d;c=c+1|0;}}
function AI4(a,b){return a.i3.qS(b,(-1));}
function AR5(){BoD=1;BoE=B(46);BoF=B(46);BoG=El();BoH=G6(1);}
var D2=D(Y);
var Bip=null;var Bio=null;var BoI=null;var BoJ=null;var Biq=null;var BoK=null;function N6(){N6=M(D2);ALF();}
function Ip(a,b){var c=new D2();Zv(c,a,b);return c;}
function Zv(a,b,c){N6();BJ(a,b,c);}
function ALF(){Bip=Ip(B(589),0);Bio=Ip(B(590),1);BoI=Ip(B(591),2);BoJ=Ip(B(592),3);Biq=Ip(B(593),4);BoK=H(D2,[Bip,Bio,BoI,BoJ,Biq]);}
function Yo(){U.call(this);this.Ev=null;}
function BaG(a){var b=new Yo();A_u(b,a);return b;}
function A_u(a,b){a.Ev=b;Bg(a);}
function AKX(a,b){return Tc(b);}
function JU(){var a=this;C.call(a);a.lj=null;a.y2=null;a.zF=null;a.qX=null;a.pB=null;a.iS=null;a.jI=null;a.pO=0.0;a.zq=0.0;a.kW=0.0;a.mA=0.0;a.uR=null;a.HH=null;a.BH=null;}
function Vq(a){L(a);a.lj=X();a.y2=CQ(0.0,0.0,(-1.0));a.zF=CQ(0.0,1.0,0.0);a.qX=CP();a.pB=CP();a.iS=CP();a.jI=CP();a.pO=1.0;a.zq=100.0;a.kW=0.0;a.mA=0.0;a.uR=Bfd();a.HH=X();a.BH=Bad(X(),X());}
function A5_(a,b,c,d,e,f){var g,h;g=b.F-c;h=Bid.bl()-b.G-d;b.F=2.0*g/e-1.0;b.G=2.0*h/f-1.0;b.M=2.0*b.M-1.0;b.Be(a.jI);return b;}
function APm(a,b){a.HG(b,0.0,0.0,Bid.bp(),Bid.bl());return b;}
function RP(){var a=this;JU.call(a);a.js=0.0;a.vc=null;}
function Bcx(a,b){var c=new RP();AZ5(c,a,b);return c;}
function AZ5(a,b,c){Vq(a);a.js=1.0;a.vc=X();a.kW=b;a.mA=c;a.pO=0.0;a.gY();}
function AZU(a){a.Bv(1);}
function A_C(a,b){a.qX.vx(a.js* -a.kW/2.0,a.js*a.kW/2.0,a.js* -(a.mA/2.0),a.js*a.mA/2.0,a.pO,a.zq);a.pB.H4(a.lj,(a.vc.ds(a.lj)).ym(a.y2),a.zF);a.iS.hP(a.qX);OX(a.iS.a,a.pB.a);if(b){a.jI.hP(a.iS);AAN(a.jI.a);a.uR.GU(a.jI);}}
function H_(){var a=this;C.call(a);a.cL=null;a.hu=0;a.tH=0;a.gt=0;a.jG=0;a.lm=0;}
function A1W(a,b){var c=new H_();AZV(c,a,b);return c;}
function BoL(a){var b=new H_();AFk(b,a);return b;}
function AZV(a,b,c){L(a);a.gt=1;a.jG=0;a.tH=1;a.cL=AEB(c);HC(a.cL);a.hu=Bij.g$();a.lm=!b?35048:35044;}
function AFk(a,b){L(a);a.gt=1;a.jG=0;a.tH=1;a.cL=AEB(b);HC(a.cL);a.hu=Bij.g$();a.lm=35044;}
function ANg(a){return BE(a.cL);}
function AXf(a){return ED(a.cL);}
function AQu(a,b,c,d){a.gt=1;Mj(a.cL);a.cL.zo(b,c,d);HC(a.cL);if(a.jG){Bij.d8(34963,BE(a.cL),a.cL,a.lm);a.gt=0;}}
function AWy(a){a.gt=1;return a.cL;}
function A$e(a){if(!a.hu)G(BG(B(594)));Bij.bV(34963,a.hu);if(a.gt){Bij.d8(34963,BE(a.cL),a.cL,a.lm);a.gt=0;}a.jG=1;}
function A7S(a){Bij.bV(34963,0);a.jG=0;}
function AYO(a){var b;b=Bij;b.bV(34963,0);b.h_(a.hu);a.hu=0;}
var RE=D(H_);
function BcE(a){var b=new RE();A6i(b,a);return b;}
function A6i(a,b){AFk(a,b);}
var ADQ=D(B$);
var Y8=D();
function Qa(b,c){var d,e,f,g;d=b.data;e=B8(c);f=BN(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function OI(b,c){var d,e,f,g;d=b.data;e=Cw(c);f=BN(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function AVn(b,c){var d,e,f,g;d=b.data;e=Bf(c);f=BN(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Jt(b,c){var d,e,f,g;d=b.data;e=LY((CW(b)).hj(),c);f=BN(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function A00(b,c,d,e){var f,g;if(c>d)G(C4());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function Hc(b,c){A00(b,0,b.data.length,c);}
function AS5(b,c,d,e){var f,g;if(c>d)G(C4());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function ARQ(b,c){AS5(b,0,b.data.length,c);}
function Q0(b,c,d,e){var f,g;if(c>d)G(C4());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function XT(b,c){Q0(b,0,b.data.length,c);}
function ADf(b,c){return A6D(b,0,b.data.length,c);}
function A6D(b,c,d,e){var f,g,h,i,j;f=Cx(c,d);if(f>0)G(C4());if(!f)return (-1);g=d-1|0;while(true){h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>g)return ( -i|0)-2|0;}else{g=i-1|0;if(g<c)return ( -i|0)-1|0;}}return i;}
function AE1(b,c){var d,e,f,g;if(b===c)return 1;if(b!==null&&c!==null){d=c.data;e=b.data;f=e.length;if(f==d.length){g=0;while(g<f){if(!A6s(e[g],d[g]))return 0;g=g+1|0;}return 1;}}return 0;}
function Zx(){var a=this;U.call(a);a.qb=0;a.xQ=null;a.q1=null;}
function BcX(a,b,c){var d=new Zx();AVi(d,a,b,c);return d;}
function AVi(a,b,c,d){a.q1=b;a.qb=c;a.xQ=d;Bg(a);}
function ASG(a,b){return !(a.qb^a.q1.U.dU(b))&&!(a.qb^a.q1.ea^a.xQ.n(b))?0:1;}
function ZD(){var a=this;U.call(a);a.up=0;a.yK=null;a.yo=null;a.Lz=null;}
function BcT(a,b,c,d){var e=new ZD();A1g(e,a,b,c,d);return e;}
function A1g(a,b,c,d,e){a.Lz=b;a.up=c;a.yK=d;a.yo=e;Bg(a);}
function AHk(a,b){return a.up^(!a.yK.n(b)&&!a.yo.n(b)?0:1)?0:1;}
function Zz(){var a=this;U.call(a);a.yO=null;a.Jj=null;}
function BaR(a,b){var c=new Zz();AHw(c,a,b);return c;}
function AHw(a,b,c){a.Jj=b;a.yO=c;Bg(a);}
function A7M(a,b){return a.yO.n(b);}
function Zy(){var a=this;U.call(a);a.nx=0;a.vR=null;a.pd=null;}
function BaF(a,b,c){var d=new Zy();AHH(d,a,b,c);return d;}
function AHH(a,b,c,d){a.pd=b;a.nx=c;a.vR=d;Bg(a);}
function A4D(a,b){return !(a.nx^a.pd.U.dU(b))&&!(a.nx^a.pd.ea^a.vR.n(b))?1:0;}
function ZA(){var a=this;U.call(a);a.tO=null;a.LK=null;}
function BaN(a,b){var c=new ZA();AHG(c,a,b);return c;}
function AHG(a,b,c){a.LK=b;a.tO=c;Bg(a);}
function AMM(a,b){return a.tO.n(b);}
var Mk=D();
function ZG(){var a=this;U.call(a);a.uQ=null;a.zr=0;a.uI=null;}
function A_$(a,b,c){var d=new ZG();AKU(d,a,b,c);return d;}
function AKU(a,b,c,d){a.uI=b;a.uQ=c;a.zr=d;Bg(a);}
function AZP(a,b){return !a.uQ.n(b)&&!(a.zr^a.uI.U.dU(b))?1:0;}
function ZC(){var a=this;U.call(a);a.AK=0;a.vT=null;a.vO=null;a.HA=null;}
function BfU(a,b,c,d){var e=new ZC();AH7(e,a,b,c,d);return e;}
function AH7(a,b,c,d,e){a.HA=b;a.AK=c;a.vT=d;a.vO=e;Bg(a);}
function A0m(a,b){return a.AK^(!a.vT.n(b)&&!a.vO.n(b)?0:1);}
function ZB(){var a=this;U.call(a);a.Ap=null;a.HV=null;}
function Bf6(a,b){var c=new ZB();AWK(c,a,b);return c;}
function AWK(a,b,c){a.HV=b;a.Ap=c;Bg(a);}
function APs(a,b){return a.Ap.n(b)?0:1;}
function QS(){var a=this;Gg.call(a);a.pm=null;a.po=null;}
function BeB(a,b){var c=new QS();A4d(c,a,b);return c;}
function A4d(a,b,c){Of(a,b);a.pm=Z();a.po=Z();a.cH=Bf3();a.cH.bb(c);}
function AUq(a){var b;b=a.cH.CE();a.pm.bN(b.cQ(),b.cM());return a.pm;}
function AUG(a){var b;b=a.cH.Hj();a.po.bN(b.cQ(),b.cM());return a.po;}
function Q3(){BO.call(this);this.oO=null;}
function Bb9(a){var b=new Q3();AKf(b,a);return b;}
function AKf(a,b){CY(a);a.oO=b;}
function A6b(a,b,c,d){var e,f,g,h,i;e=d.D();f=b+1|0;if(f>e){d.dt=1;return (-1);}g=c.f(b);if(Cb(g)){h=b+2|0;if(h<=e){i=c.f(f);if(G_(g,i))return a.oO.iV(Ds(g,i))?(-1):a.j.c(h,c,d);}}return a.oO.iV(g)?(-1):a.j.c(f,c,d);}
function AZF(a){return B(595);}
function A77(a,b){a.j=b;}
function AHi(a){return (-2147483602);}
function AVK(a,b){return 1;}
function ZE(){var a=this;U.call(a);a.uz=null;a.yM=0;a.vn=null;}
function BdA(a,b,c){var d=new ZE();A1Q(d,a,b,c);return d;}
function A1Q(a,b,c,d){a.vn=b;a.uz=c;a.yM=d;Bg(a);}
function AT6(a,b){return !a.uz.n(b)&&!(a.yM^a.vn.U.dU(b))?0:1;}
var CU=D();
var BoM=null;var BoN=null;var BoO=null;var BoP=null;var BoQ=null;var BoR=null;var BoS=null;var BoT=null;var BoU=null;var BoV=null;function Ba(){Ba=M(CU);AXK();}
function IF(b){var c,d;Ba();c=new BL;d=B8(1);d.data[0]=b;IP(c,d);return c;}
function Yw(b){Ba();return b>0&&b<=65535?1:0;}
function IE(b){Ba();return b>=65536&&b<=1114111?1:0;}
function Cb(b){Ba();return (b&64512)!=55296?0:1;}
function B2(b){Ba();return (b&64512)!=56320?0:1;}
function JV(b){Ba();return !Cb(b)&&!B2(b)?0:1;}
function G_(b,c){Ba();return Cb(b)&&B2(c)?1:0;}
function Ds(b,c){Ba();return ((b&1023)<<10|c&1023)+65536|0;}
function UZ(b,c){Ba();return ZF(b,c,b.data.length);}
function ZF(b,c,d){var e,f;Ba();if(c<(d-1|0)){e=b.data;if(Cb(e[c])){f=c+1|0;if(B2(e[f]))return Ds(e[c],e[f]);}}return b.data[c];}
function F9(b){var c;Ba();c=b-65536|0;return (55296|c>>10&1023)&65535;}
function FN(b){Ba();return (56320|b&1023)&65535;}
function Er(b){Ba();return Fr(b)&65535;}
function Fr(b){Ba();return Lw(Qm(),b);}
function Qm(){Ba();if(BoP===null)BoP=SH(((VJ()).value!==null?$rt_str((VJ()).value):null));return BoP;}
function VJ(){Ba();if(BoS===null)BoS=AEb();return BoS;}
function DS(b){Ba();return EI(b)&65535;}
function EI(b){Ba();return Lw(Wm(),b);}
function Wm(){Ba();if(BoO===null)BoO=SH(((WP()).value!==null?$rt_str((WP()).value):null));return BoO;}
function WP(){Ba();if(BoT===null)BoT=AE8();return BoT;}
function Lw(b,c){var d,e;Ba();d=AFj(b,c);if(d>=0){e=b.data;if(d<(e.length/2|0))return c+e[(d*2|0)+1|0]|0;}return 0;}
function AFj(b,c){var d,e,f,g,h,i;Ba();d=b.data;e=0;f=(d.length/2|0)-1|0;while(true){g=(e+f|0)/2|0;h=d[g*2|0];i=Cx(h,c);if(!i)break;if(i<=0){e=g+1|0;if(e>f)return g;}else{f=g-1|0;if(f<e)return f;}}return g;}
function Ol(b,c){Ba();return AET(b,c);}
function AET(b,c){var d;Ba();if(c>=2&&c<=36){d=Na(b);if(d>=c)d=(-1);return d;}return (-1);}
function NX(b){Ba();return Na(b);}
function Na(b){var c,d,e,f,g,h,i,j;Ba();c=Ph();d=c.data;e=0;f=(d.length/2|0)-1|0;while(f>=e){g=(e+f|0)/2|0;h=g*2|0;i=d[h];j=Cx(b,i);if(j>0)e=g+1|0;else{if(j>=0)return d[h+1|0];f=g-1|0;}}return (-1);}
function Gx(b,c){Ba();if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function AGW(b){Ba();return CB(b)!=9?0:1;}
function Ph(){Ba();if(BoN===null)BoN=A$P(((TX()).value!==null?$rt_str((TX()).value):null));return BoN;}
function TX(){Ba();if(BoU===null)BoU=ABG();return BoU;}
function ABI(){Ba();if(BoQ===null)BoQ=AV9(((AA3()).value!==null?$rt_str((AA3()).value):null));return BoQ;}
function AA3(){Ba();if(BoV===null)BoV=XM();return BoV;}
function E2(b){var c;Ba();if(b<65536){c=B8(1);c.data[0]=b&65535;return c;}return Hm([F9(b),FN(b)]);}
function Sz(b){var c;Ba();a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}c=1;break a;}c=0;}return c;}
function GN(b){Ba();return CB(b);}
function CB(b){var c,d,e,f,g,h;Ba();if(Yw(b)&&JV(b&65535))return 19;c=ABI();d=c.data;e=0;f=d.length-1|0;while(e<=f){g=(e+f|0)/2|0;h=d[g];if(b>=h.uD)e=g+1|0;else{if(b>=h.qW)return h.ye.data[b-h.qW|0];f=g-1|0;}}return 0;}
function WV(b){Ba();return CB(b)!=2?0:1;}
function Yd(b){Ba();return CB(b)!=1?0:1;}
function PF(b){Ba();return CB(b)!=3?0:1;}
function TE(b){Ba();return !CB(b)?0:1;}
function WN(b){Ba();switch(CB(b)){case 1:case 2:case 3:case 4:case 5:break;default:return 0;}return 1;}
function NJ(b){Ba();return Kt(b);}
function Kt(b){Ba();a:{switch(CB(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Tc(b){Ba();a:{switch(CB(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return F3(b);}
function XD(b){Ba();a:{switch(CB(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return F3(b);}
function Xb(b){Ba();a:{switch(CB(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break a;default:break a;}return 1;}return F3(b);}
function AA4(b){Ba();a:{switch(CB(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break a;default:break a;}return 1;}return F3(b);}
function F3(b){Ba();a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CB(b)!=16?0:1;}
function No(b){Ba();switch(CB(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Vp(b){Ba();return K_(b);}
function K_(b){Ba();switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return No(b);}return 1;}
function AXK(){BoM=F($rt_charcls());BoR=Bc(CU,128);}
function AEb(){return {"value":"}U  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# \'%# #,%#L}p#LJd(# *T5F#U TUg#r {%g#r Zvk%F# *J#F#b o@5F#b Jo=N#f "};}
function AE8(){return {"value":"yW  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'\' #\'# mGDr# Yiejg# e*5H#U eUi#r {%i#r .xm%:# RH#H#b o@5H#b No=P#f "};}
function ABG(){return {"value":"{?*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%slG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%sTEG%%%%%%%%%%%%%%%%%%&5G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%VR#G%%%%%%%%%%%%%"
+"%%%%%"};}
function XM(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
function Pe(){var a=this;BR.call(a);a.pV=0;a.xe=0;}
function AY3(a){var b=new Pe();ASh(b,a);return b;}
function ASh(a,b){Da(a);a.pV=b;a.xe=He(b);}
function AHX(a,b,c){return a.pV!=c.f(b)&&a.xe!=c.f(b)?(-1):1;}
function ANm(a){var b,c;b=a.pV;c=K();Bi(I(c,B(596)),b);return Q(c);}
function DI(){var a=this;BR.call(a);a.kg=0;a.jy=0;a.kB=0;}
function Baf(a){var b=new DI();AVI(b,a);return b;}
function AVI(a,b){var c,d;Da(a);a.bI=2;a.kB=b;c=E2(b);d=c.data;a.kg=d[0];a.jy=d[1];}
function A7G(a,b,c){var d,e,f;d=b+1|0;e=c.f(b);f=c.f(d);return a.kg==e&&a.jy==f?2:(-1);}
function A5K(a,b,c,d){var e,f,g,h;if(!(c instanceof BL))return GI(a,b,c,d);e=c;f=d.D();while(b<f){g=e.dQ(a.kg,b);if(g<0)return (-1);b=g+1|0;if(b>=f)continue;h=e.f(b);if(a.jy==h&&a.j.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AJI(a,b,c,d,e){var f,g,h;if(!(d instanceof BL))return GO(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.ke(a.jy,c);h=g+(-1)|0;if(h<0)break a;if(h<b)break a;if(a.kg==f.f(h)&&a.j.c(h+2|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function A93(a){var b,c,d;b=a.kg;c=a.jy;d=K();Bi(Bi(d,b),c);return Q(d);}
function AWP(a){return a.kB;}
function A7s(a,b){if(b instanceof DI)return b.p7()!=a.kB?0:1;if(b instanceof Db)return b.n(a.kB);if(b instanceof DN)return 0;if(!(b instanceof DJ))return 1;return 0;}
var Uy=D();
var WK=D(B_);
var T7=D();
var AGT=D();
var U9=D();
var Ne=D(C2);
var BoW=null;function BeP(){BeP=M(Ne);AJa();}
function AJK(a){var b=new Ne();AEc(b,a);return b;}
function AEc(a,b){BeP();D4(a);a.cD(Bd,0);}
function AXb(a){return AGd(T(a.C));}
function AQV(a,b){var c;c=AD2(T(a.C),b);Cs();BhT.bb(O(c));return BhT;}
function AJa(){BoW=AJK(0);}
function AGd(b){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2ChainShape);var returnedJSObj=jsObj.GetVertexCount();return returnedJSObj;}
function AD2(b,c){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2ChainShape);var returnedJSObj=jsObj.GetVertex(c);return $rt_globals.Box2D.getPointer(returnedJSObj);}
var N8=D();
var Bn1=null;function Ba1(){Ba1=M(N8);A_l();}
function A_l(){Bn1=Bf((Uf()).data.length);Bn1.data[Bj(Bn0)]=1;Bn1.data[Bj(BoX)]=2;}
function Vc(){var a=this;C.call(a);a.ek=0;a.dR=null;a.dV=null;a.fq=null;a.gw=0;a.tM=0.0;a.ns=0;a.of=0;a.gk=0;}
function BdC(a){var b=new Vc();ASF(b,a);return b;}
function BoY(a,b){var c=new Vc();Su(c,a,b);return c;}
function ASF(a,b){Su(a,b,0.800000011920929);}
function Su(a,b,c){var d;L(a);if(c>0.0&&c<1.0){a.tM=c;d=Hx(b,c);a.ns=d*c|0;a.gk=d-1|0;a.of=C6(O(a.gk));a.dR=Bf(d);a.dV=Bc(C,d);return;}G(Bo((((K()).h(B(254))).dM(c)).d()));}
function AMG(a,b){return T(BT(Bu(O(b),Bx(2135587861, 2654435769)),a.of));}
function I6(a,b){var c,d,e;c=a.dR;d=a.gg(b);while(true){e=c.data[d];if(!e)return  -(d+1|0)|0;if(e==b)break;d=(d+1|0)&a.gk;}return d;}
function A13(a,b,c){var d,e,f;if(!b){d=a.fq;a.fq=c;if(!a.gw){a.gw=1;a.ek=a.ek+1|0;}return d;}e=I6(a,b);if(e>=0){d=a.dV.data[e];a.dV.data[e]=c;return d;}f= -(e+1|0)|0;a.dR.data[f]=b;a.dV.data[f]=c;f=a.ek+1|0;a.ek=f;if(f>=a.ns)V1(a,a.dR.data.length<<1);return null;}
function ZX(a,b,c){var d,e,f;d=a.dR;e=a.gg(b);while(true){f=d.data;if(!f[e])break;e=(e+1|0)&a.gk;}f[e]=b;a.dV.data[e]=c;}
function AVZ(a,b){var c;if(!b)return !a.gw?null:a.fq;c=I6(a,b);return c<0?null:a.dV.data[c];}
function A94(a,b){var c,d,e,f,g,h,i,j,k,l;if(!b){if(!a.gw)return null;a.gw=0;c=a.fq;a.fq=null;a.ek=a.ek-1|0;return c;}d=I6(a,b);if(d<0)return null;e=a.dR;f=a.dV;g=f.data;c=g[d];h=a.gk;i=(d+1|0)&h;while(true){j=e.data;k=j[i];if(!k)break;l=a.gg(k);if(((i-l|0)&h)>((d-l|0)&h)){j[d]=k;g[d]=g[i];d=i;}i=(i+1|0)&h;}j[d]=0;g[d]=null;a.ek=a.ek-1|0;return c;}
function AVz(a,b,c){var d,e,f,g;a:{d=a.dV;if(b===null){if(a.gw&&a.fq===null)return 1;e=d.data;f=a.dR;g=e.length-1|0;while(true){if(g<0)break a;if(f.data[g]&&e[g]===null)break;g=g+(-1)|0;}return 1;}if(c){if(b===a.fq)return 1;e=d.data;g=e.length-1|0;while(true){if(g<0)break a;if(e[g]===b)break;g=g+(-1)|0;}return 1;}if(a.gw&&b.K(a.fq))return 1;e=d.data;g=e.length-1|0;while(true){if(g<0)break a;if(b.K(e[g]))return 1;g=g+(-1)|0;}}return 0;}
function V1(a,b){var c,d,e,f,g;a:{c=a.dR.data.length;a.ns=b*a.tM|0;a.gk=b-1|0;a.of=C6(O(a.gk));d=a.dR;e=a.dV;a.dR=Bf(b);a.dV=Bc(C,b);if(a.ek>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g)ZX(a,g,e.data[f]);f=f+1|0;}}}}
var AFC=D(Dx);
function Bdy(a){var b=new AFC();ALf(b,a);return b;}
function ALf(a,b){Hg(a,b,1.0,1.0);}
function ASx(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(Cb(l)){if(j==d){if(h.fn(2)){j=j+(-1)|0;break a;}BD();i=BhG;break a;}m=k[j];if(!B2(m)){i=Cm(1);break a;}j=j+(-1)|0;i=GM(2);break a;}if(B2(l))i=Cm(1);if(l>=256){j=j+(-1)|0;i=GM(1);break a;}k=e.data;n=f+1|0;k[f]=l<<24>>24;c=j;f=n;}j=c;}h.gd(j);h.ft(f);return i;}
var Nb=D(C2);
var BoZ=null;function A9$(){A9$=M(Nb);ATD();}
function BcS(){var a=new Nb();ABB(a);return a;}
function A7g(a){var b=new Nb();Qu(b,a);return b;}
function ABB(a){A9$();D4(a);a.cD(O(YU()),1);}
function Qu(a,b){A9$();D4(a);a.cD(Bd,0);}
function A7U(a,b,c){AAw(T(a.C),b,c);}
function A1z(a){return Wn(T(a.C));}
function ANZ(a,b){var c;c=XJ(T(a.C),b);Cs();BhT.bb(O(c));return BhT;}
function ATD(){BoZ=A7g(0);}
function YU(){var jsObj=new $rt_globals.Box2D.b2PolygonShape();return $rt_globals.Box2D.getPointer(jsObj);}
function AAw(b,c,d){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2PolygonShape);jsObj.SetAsBox(c,d);}
function Wn(b){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2PolygonShape);var returnedJSObj=jsObj.GetVertexCount();return returnedJSObj;}
function XJ(b,c){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2PolygonShape);var returnedJSObj=jsObj.GetVertex(c);return $rt_globals.Box2D.getPointer(returnedJSObj);}
function J2(){var a=this;C.call(a);a.EU=0.0;a.EP=0.0;a.EQ=0.0;a.ET=0.0;}
var Bo0=null;var Bo1=null;function ASd(){ASd=M(J2);ANf();}
function A7u(a,b,c,d){var e=new J2();AAU(e,a,b,c,d);return e;}
function IV(){var a=new J2();S9(a);return a;}
function AAU(a,b,c,d,e){ASd();L(a);a.t3(b,c,d,e);}
function S9(a){ASd();L(a);a.Id();}
function ALy(a,b,c,d,e){a.EU=b;a.EP=c;a.EQ=d;a.ET=e;return a;}
function A$3(a){return a.t3(0.0,0.0,0.0,1.0);}
function ANf(){Bo0=A7u(0.0,0.0,0.0,0.0);Bo1=A7u(0.0,0.0,0.0,0.0);}
var Mn=D(Dp);
var Bo2=null;function Bo3(){Bo3=M(Mn);AL9();}
function AL9(){Bo2=Cf(3);}
function ABh(){var a=this;C.call(a);a.er=null;a.fK=null;a.t0=null;a.K$=null;}
function Bc1(a){var b=new ABh();A8J(b,a);return b;}
function A8J(a,b){L(a);a.er=Cf(4);a.t0=Z();a.K$=Z();a.fK=AH_(b);}
function A8N(a,b){var c,d,e,f,g,h;a.fK.bb(b);if(KW(b,Bd)){c=a.fK.s1();d=a.fK.oc();e=c.xf();f=c.x6();g=d.cQ();h=d.cM();a.er.data[0]=g;a.er.data[1]=h;a.er.data[2]=e;a.er.data[3]=f;}}
function AJZ(a,b){var c,d,e,f,g,h;c=a.fK.s1();d=a.fK.oc();e=c.xf();f=c.x6();g=d.cQ()+e*b.w+ -f*b.v;h=d.cM()+f*b.w+e*b.v;b.w=g;b.v=h;return b;}
function AP4(a){var b,c,d;b=a.fK.oc();c=b.cQ();d=b.cM();a.er.data[0]=c;a.er.data[1]=d;return a.t0.bN(c,d);}
var ACM=D(Ef);
var Es=D();
var Bo4=null;var Bo5=null;var Bo6=null;var Bo7=null;var Bo8=null;var Bo9=null;function BdW(){BdW=M(Es);AQp();}
function AQp(){KY();Bo4=Bkd;Bo5=Bb4();Bo6=Bby();Bo7=Ts(B(597),1,0);Bo8=Ts(B(598),0,0);Bo9=Ts(B(599),0,1);}
function Tx(){U.call(this);this.CI=null;}
function BbY(a){var b=new Tx();A1k(b,a);return b;}
function A1k(a,b){a.CI=b;Bg(a);}
function A1d(a,b){return 0;}
var HD=D();
var BhN=0;var BhO=0;var Bo$=0;function Bgg(){Bgg=M(HD);AOS();}
function AOS(){BhN=0;BhO=1;Bo$=0;}
var YJ=D(FU);
function BfY(a,b,c,d,e,f){var g=new YJ();A4q(g,a,b,c,d,e,f);return g;}
function A4q(a,b,c,d,e,f,g){LX(a,b,c,d,e,f,g);}
function AZO(a,b){var c,d,e,f;c=a.eG.u.data;d=a.eA;e=b*2|0;f=c[d+e|0]&255|(a.eG.u.data[(a.eA+e|0)+1|0]&255)<<8;return f<<16>>16;}
function AY6(a,b,c){var d,e,f;d=a.eG.u.data;e=a.eA;f=b*2|0;d[e+f|0]=c<<24>>24;a.eG.u.data[(a.eA+f|0)+1|0]=c>>8<<24>>24;}
function AFL(){Bz.call(this);this.jL=0;}
function BbA(a){var b=new AFL();A1y(b,a);return b;}
function A1y(a,b){Cu(a);a.jL=b;}
function AOC(a,b,c,d){var e;e=!d.hB()?c.i():d.D();if(b>=e){d.bo(a.jL,0);return a.j.c(b,c,d);}if((e-b|0)==1&&c.f(b)==10){d.bo(a.jL,1);return a.j.c(b+1|0,c,d);}return (-1);}
function A1w(a,b){var c;c=!b.dI(a.jL)?0:1;b.bo(a.jL,(-1));return c;}
function APc(a){return B(449);}
function DU(){Y.call(this);this.Kc=null;}
var Bkf=null;var Bkh=null;var Bke=null;var Bkg=null;var Bki=null;var Bo_=null;function Ku(){Ku=M(DU);A6j();}
function Je(a,b,c){var d=new DU();SQ(d,a,b,c);return d;}
function M8(){Ku();return Bo_.dX();}
function SQ(a,b,c,d){Ku();BJ(a,b,c);a.Kc=d;}
function AE5(){Ku();return H(DU,[Bkf,Bkh,Bke,Bkg,Bki]);}
function A6j(){Bkf=Je(B(600),0,B(268));Bkh=Je(B(601),1,B(270));Bke=Je(B(602),2,B(603));Bkg=Je(B(604),3,B(269));Bki=Je(B(605),4,B(89));Bo_=AE5();}
var W2=D(BI);
var Oa=D();
var Bpa=null;function Bpb(){Bpb=M(Oa);AZi();}
function AZi(){Bpa=Bf((Kq()).data.length);Bpa.data[Bj(Blf)]=1;Bpa.data[Bj(Blg)]=2;Bpa.data[Bj(Blh)]=3;}
function W4(){BR.call(this);this.qa=0;}
function A7q(a){var b=new W4();A5y(b,a);return b;}
function A5y(a,b){Da(a);a.qa=Er(DS(b));}
function AWo(a,b,c){return a.qa!=Er(DS(c.f(b)))?(-1):1;}
function A6o(a){var b,c;b=a.qa;c=K();Bi(I(c,B(395)),b);return Q(c);}
var Jp=D();
var ADC=D(Jp);
var RN=D(C9);
function Bby(){var a=new RN();AZK(a);return a;}
function AZK(a){Hf(a,B(606),Bc(BL,0));}
function A8z(a){return Bdy(a);}
function E8(){Y.call(this);this.wB=0;}
var Bpc=null;var Bj4=null;var Bpd=null;var Bpe=null;function AWu(){AWu=M(E8);A2z();}
function AAT(a,b,c){var d=new E8();ACk(d,a,b,c);return d;}
function ACk(a,b,c,d){AWu();BJ(a,b,c);a.wB=d;}
function OW(a){return a.wB;}
function A2z(){Bpc=AAT(B(607),0,33648);Bj4=AAT(B(608),1,33071);Bpd=AAT(B(609),2,10497);Bpe=H(E8,[Bpc,Bj4,Bpd]);}
var SP=D(Is);
function EW(){var a=this;CN.call(a);a.eP=null;a.dv=0;}
function Bpf(a,b,c,d,e){var f=new EW();IN(f,a,b,c,d,e);return f;}
function IN(a,b,c,d,e,f){FJ(a,c,d,e);a.eP=b;a.dv=f;}
function A_B(a,b,c,d){var e,f,g,h;e=d.vE(a.dv);if(!a.R.S(d))return a.j.c(b,c,d);if(e>=a.eP.gX())return a.j.c(b,c,d);f=a.dv;g=e+1|0;d.eJ(f,g);h=a.R.c(b,c,d);if(h>=0){d.eJ(a.dv,0);return h;}f=a.dv;g=g+(-1)|0;d.eJ(f,g);if(g>=a.eP.he())return a.j.c(b,c,d);d.eJ(a.dv,0);return (-1);}
function AUr(a){return a.eP.d();}
var L0=D(EW);
function Bpg(a,b,c,d,e){var f=new L0();Uq(f,a,b,c,d,e);return f;}
function Uq(a,b,c,d,e,f){IN(a,b,c,d,e,f);}
function AXF(a,b,c,d){var e,f;e=d.vE(a.dv);if(!a.R.S(d))return a.j.c(b,c,d);if(e>=a.eP.gX()){d.eJ(a.dv,0);return a.j.c(b,c,d);}if(e<a.eP.he()){d.eJ(a.dv,e+1|0);f=a.R.c(b,c,d);}else{f=a.j.c(b,c,d);if(f>=0){d.eJ(a.dv,0);return f;}d.eJ(a.dv,e+1|0);f=a.R.c(b,c,d);}return f;}
function Za(){var a=this;I1.call(a);a.cz=null;a.cO=0;}
function UK(){var a=new Za();AMf(a);return a;}
function Bph(a){var b=new Za();Pf(b,a);return b;}
function AMf(a){Pf(a,10);}
function Pf(a,b){ABX(a);a.cz=Bc(C,b);}
function AXI(a,b){var c;if(a.cz.data.length<b){c=a.cz.data.length>=1073741823?2147483647:Bt(b,Bt(a.cz.data.length*2|0,5));a.cz=Jt(a.cz,c);}}
function A7D(a,b){J_(a,b);return a.cz.data[b];}
function A6B(a){return a.cO;}
function AUo(a,b){var c,d;a.fr(a.cO+1|0);c=a.cz.data;d=a.cO;a.cO=d+1|0;c[d]=b;a.fo=a.fo+1|0;return 1;}
function A2_(a,b,c){var d;Rq(a,b);a.fr(a.cO+1|0);d=a.cO;while(d>b){a.cz.data[d]=a.cz.data[d-1|0];d=d+(-1)|0;}a.cz.data[b]=c;a.cO=a.cO+1|0;a.fo=a.fo+1|0;}
function ASp(a,b){var c,d,e,f;J_(a,b);c=a.cz.data[b];a.cO=a.cO-1|0;while(b<a.cO){d=a.cz.data;e=a.cz.data;f=b+1|0;d[b]=e[f];b=f;}a.cz.data[a.cO]=null;a.fo=a.fo+1|0;return c;}
function J_(a,b){if(b>=0&&b<a.cO)return;G(Dl());}
function Rq(a,b){if(b>=0&&b<=a.cO)return;G(Dl());}
function Pu(){Cc.call(this);this.Lf=null;}
function A_9(a){var b=new Pu();AHp(b,a);return b;}
function AHp(a,b){a.Lf=b;DB(a);}
function AND(a,b,c){return 1;}
function A1E(a,b){}
var ABn=D(Bk);
function ASC(){var a=new ABn();A4v(a);return a;}
function A4v(a){Cv(a);}
function Pp(){Cc.call(this);this.CL=null;}
function BcY(a){var b=new Pp();A$4(b,a);return b;}
function A$4(a,b){a.CL=b;DB(a);}
function AIt(a,b,c){return 1;}
function A50(a,b){}
function Pq(){Cc.call(this);this.E$=null;}
function Bgm(a){var b=new Pq();AN6(b,a);return b;}
function AN6(a,b){a.E$=b;DB(a);}
function ATG(a,b,c){return 1;}
function A8s(a,b){}
var Kc=D();
var Bpi=null;function BbR(){BbR=M(Kc);APb();}
function APb(){Bpi=Bf((AAW()).data.length);Bpi.data[Bj(Bpj)]=1;Bpi.data[Bj(Bpk)]=2;}
var ADF=D(Bl);
function Pn(){C.call(this);this.fs=null;}
function Bfz(a){var b=new Pn();AZa(b,a);return b;}
function AZa(a,b){a.fs=b;L(a);}
function A0U(a,b){var c,d,e,f,$$je;c=$rt_str((a.fs.fj.jm()).visibilityState);if(!B(610).K(c)){d=a.fs.h2;VI(d);a:{try{e=a.fs.h2.fi();while(e.dk()){f=e.da();f.r0();}JY(d);break a;}catch($$e){$$je=Bn($$e);e=$$je;}JY(d);G(e);}a.fs.fB.r0();}else{d=a.fs.h2;VI(d);b:{try{e=a.fs.h2.fi();while(e.dk()){f=e.da();f.nG();}JY(d);break b;}catch($$e){$$je=Bn($$e);e=$$je;}JY(d);G(e);}a.fs.fB.nG();}}
function A7f(a,b){a.cC(b);}
function Po(){C.call(this);this.eh=null;}
function Bat(a){var b=new Po();AI1(b,a);return b;}
function AI1(a,b){a.eh=b;L(a);}
function A_s(a,b){var c,d,e;c=a.eh.fj.Bb()-a.eh.gb.n3|0;d=a.eh.fj.wJ()-a.eh.gb.sr|0;if(c>0&&d>0){if(a.eh.dg!==null){if(a.eh.gb.rA){e=a.eh.dg.n7();c=c*e|0;d=d*e|0;}a.eh.dg.oU(c,d);}return;}}
function AUV(a,b){a.cC(b);}
var Hl=D();
var Bpl=null;function Qp(a){L(a);}
function DO(){return Bpl;}
function ANh(b){Bpl=b;}
function Pr(){Cc.call(this);this.kr=null;}
function Bdw(a){var b=new Pr();AXi(b,a);return b;}
function AXi(a,b){a.kr=b;DB(a);}
function ASO(a,b,c){var d;d=Bd8();d.JL(a.kr.dz,BfA(a,d));return 1;}
var ABk=D(Gu);
function BaL(a,b,c){var d=new ABk();ARk(d,a,b,c);return d;}
function ARk(a,b,c,d){MJ(a,b,c,d);}
function AJF(a,b,c,d){var e;if(!a.R.S(d))return a.j.c(b,c,d);e=a.j.c(b,c,d);if(e<0)e=a.R.c(b,c,d);return e;}
var ADE=D(Bl);
function Bdz(){var a=new ADE();AYn(a);return a;}
function AYn(a){CL(a);}
var Rr=D();
function ALr(b,c){var d,e,f;a:{d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}e=b>>>6;f=d|e&8;f=f|b<<2&16;e=f|e&32;e=e|b>>>8&64;e=e|b>>>5&128;e=e|b&256;e=e|b<<8&512;e=e|b<<10&1024;e=e|b<<1&2048;return e;}
var ADJ=D(Bl);
function A_8(){var a=new ADJ();A8P(a);return a;}
function A8P(a){CL(a);}
var ADG=D(Bl);
function WD(){var a=this;C.call(a);a.DI=0;a.Gf=0;a.BZ=0;}
function Bb8(){var a=new WD();A$r(a);return a;}
function A$r(a){L(a);a.DI=1;a.Gf=(-1);a.BZ=0;}
var ADD=D(Bl);
var ADI=D(Bl);
function Bei(){var a=new ADI();ARD(a);return a;}
function ARD(a){CL(a);}
var ADN=D(Bl);
function Bf1(){var a=new ADN();APN(a);return a;}
function APN(a){CL(a);}
var ACK=D(CI);
var Mf=D();
var Bju=null;function Bex(){Bex=M(Mf);ASB();}
function ASB(){var b,c,d,e,f;Bju=Df();b=Bc(C9,6);c=b.data;BdW();c[0]=Bo4;c[1]=Bo5;c[2]=Bo6;c[3]=Bo7;c[4]=Bo8;c[5]=Bo9;d=c.length;e=0;while(e<d){f=c[e];Bju.s(ADt(f),f);e=e+1|0;}}
var ADK=D(Bl);
function BcW(){var a=new ADK();A81(a);return a;}
function A81(a){CL(a);}
var ADH=D(Bl);
function A__(){var a=new ADH();AN9(a);return a;}
function AN9(a){CL(a);}
var Od=D(0);
function SD(){C.call(this);this.qQ=0;}
function Bdq(){var a=new SD();A2Y(a);return a;}
function A2Y(a){L(a);a.qQ=2;}
function AJr(a,b,c){var d,e;if(a.qQ>=2){d=D6();e=K();I(I(I(e,b),B(9)),c);d.em(Q(e));}}
function A5t(a,b,c){var d,e;if(a.qQ>=1){d=VX();e=K();I(I(I(e,b),B(9)),c);d.em(Q(e));}}
var Zm=D(Bz);
function Bav(){var a=new Zm();A_m(a);return a;}
function A_m(a){Cu(a);}
function AOx(a,b,c,d){return b;}
function A6y(a){return B(611);}
function A6I(a,b){return 0;}
var Xv=D(Go);
function AQt(a,b){var c=new Xv();ANi(c,a,b);return c;}
function ANi(a,b,c){LM(a,b,c);}
var Ki=D(EW);
function Bpm(a,b,c,d,e){var f=new Ki();Us(f,a,b,c,d,e);return f;}
function Us(a,b,c,d,e,f){IN(a,b,c,d,e,f);J0();c.L(Bia);}
function ANA(a,b,c,d){var e,f,g;e=0;f=a.eP.gX();a:{while(true){g=a.R.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.eP.he())return (-1);return a.j.c(b,c,d);}
var ABY=D(Ek);
function C7(){Y.call(this);this.yU=0;}
var Bj3=null;var Bpn=null;var Bpo=null;var Bpp=null;var Bpq=null;var Bpr=null;var Bps=null;var Bpt=null;function AKh(){AKh=M(C7);AJn();}
function FE(a,b,c){var d=new C7();O6(d,a,b,c);return d;}
function O6(a,b,c,d){AKh();BJ(a,b,c);a.yU=d;}
function OC(a){return a.yU;}
function AJn(){Bj3=FE(B(612),0,9728);Bpn=FE(B(613),1,9729);Bpo=FE(B(614),2,9987);Bpp=FE(B(615),3,9984);Bpq=FE(B(616),4,9985);Bpr=FE(B(617),5,9986);Bps=FE(B(618),6,9987);Bpt=H(C7,[Bj3,Bpn,Bpo,Bpp,Bpq,Bpr,Bps]);}
function ZN(){U.call(this);this.JX=null;}
function BeZ(a){var b=new ZN();A4B(b,a);return b;}
function A4B(a,b){a.JX=b;Bg(a);}
function A9W(a,b){return AGW(b);}
var TM=D(Ek);
var Jk=D(Dw);
function AUH(){var a=new Jk();A28(a);return a;}
function A28(a){JQ(a);}
var AC6=D(Gk);
function Bdu(a,b,c,d,e,f){var g=new AC6();A0y(g,a,b,c,d,e,f);return g;}
function A0y(a,b,c,d,e,f,g){Kd(a,b,c,d,e,f,g);}
function ATn(a,b){var c,d,e;c=a.cc.u.data;d=a.ca;e=b*4|0;return (c[d+e|0]&255)<<24|(a.cc.u.data[(a.ca+e|0)+1|0]&255)<<16|(a.cc.u.data[(a.ca+e|0)+2|0]&255)<<8|a.cc.u.data[(a.ca+e|0)+3|0]&255;}
function AIW(a,b,c){var d,e,f;d=a.cc.u.data;e=a.ca;f=b*4|0;d[e+f|0]=c>>24<<24>>24;a.cc.u.data[(a.ca+f|0)+1|0]=c>>16<<24>>24;a.cc.u.data[(a.ca+f|0)+2|0]=c>>8<<24>>24;a.cc.u.data[(a.ca+f|0)+3|0]=c<<24>>24;}
var T0=D(Bk);
function AR3(a){var b=new T0();A8K(b,a);return b;}
function I4(){var a=new T0();AJ3(a);return a;}
function A8K(a,b){Et(a,b);}
function AJ3(a){Cv(a);}
function AAj(){U.call(this);this.Db=null;}
function BcA(a){var b=new AAj();AMr(b,a);return b;}
function AMr(a,b){a.Db=b;Bg(a);}
function A7h(a,b){return No(b);}
var L9=D(EH);
var ABO=D();
function AFE(b){return Math.sin(b);}
function AIC(b){return Math.cos(b);}
function AG2(b){return Math.sqrt(b);}
function A0c(b){return Math.ceil(b);}
function AWc(b,c){return A40(b,c);}
function A40(b,c){return Math.pow(b,c);}
function Dr(b){return b+AOE(b)*0.5|0;}
function BN(b,c){if(b<c)c=b;return c;}
function Bt(b,c){if(b>c)c=b;return c;}
function JP(b,c){if(b<c)c=b;return c;}
function EB(b,c){if(b>c)c=b;return c;}
function Yk(b){if(b<=0)b= -b|0;return b;}
function GW(b){if(b<=0.0)b= -b;return b;}
function AOE(b){var c;c=Cx(b,0.0);if(c>0)b=1.0;else if(c<0)b=(-1.0);return b;}
var RW=D(W);
function Bak(){var a=new RW();A7Q(a);return a;}
function A7Q(a){Bs(a);}
function AQs(a){var b;b=BbF(a);b.ba=1;return b;}
function OG(){var a=this;Cp.call(a);a.u_=null;a.li=null;a.iB=0;}
function BV(a,b,c){var d=new OG();YN(d,a,b,c);return d;}
function YN(a,b,c,d){GE(a);a.iB=(-1);a.u_=b;a.li=c;a.iB=d;}
function A$F(a){var b,c,d,e,f,g;b=B(46);if(a.iB>=1){c=B8(a.iB);ARQ(c,32);b=MH(c);}d=a.u_;if(a.li!==null&&a.li.i()){e=a.iB;f=a.li;g=K();I(I(I(I(V(g,e),B(310)),f),B(310)),b);f=Q(g);}else f=B(46);g=K();I(I(g,d),f);return Q(g);}
function EU(){Y.call(this);this.uw=0;}
var BjS=null;var BjR=null;var BlH=null;var Bpu=null;function Hb(){Hb=M(EU);ARm();}
function WI(a,b,c){var d=new EU();AGz(d,a,b,c);return d;}
function AGz(a,b,c,d){Hb();BJ(a,b,c);a.uw=d;}
function Pt(a){return a.uw;}
function ARm(){BjS=WI(B(619),0,0);BjR=WI(B(620),1,1);BlH=WI(B(621),2,4);Bpu=H(EU,[BjS,BjR,BlH]);}
var Wh=D(W);
function BeG(){var a=new Wh();AKm(a);return a;}
function AKm(a){Bs(a);}
function AZ0(a){var b;b=Bge(a);b.bv.el(0,2048);b.ba=1;return b;}
var D$=D(Y);
var Bmd=null;var Bmf=null;var Bmg=null;var Bmc=null;var Bpv=null;function NB(){NB=M(D$);AUy();}
function MN(a,b){var c=new D$();Y_(c,a,b);return c;}
function Xl(){NB();return Bpv.dX();}
function Y_(a,b,c){NB();BJ(a,b,c);}
function AUy(){Bmd=MN(B(622),0);Bmf=MN(B(623),1);Bmg=MN(B(624),2);Bmc=MN(B(625),3);Bpv=H(D$,[Bmd,Bmf,Bmg,Bmc]);}
var NZ=D();
var ACd=D(Ea);
var UJ=D(Dp);
function G7(){var a=this;C.call(a);a.gm=0;a.dY=null;a.dP=null;a.yH=0.0;a.p8=0;a.r2=0;a.fQ=0;}
var Bpw=null;function AEM(){AEM=M(G7);ALm();}
function El(){var a=new G7();Wf(a);return a;}
function Bem(a){var b=new G7();PR(b,a);return b;}
function Bpx(a,b){var c=new G7();JC(c,a,b);return c;}
function Wf(a){AEM();JC(a,51,0.800000011920929);}
function PR(a,b){AEM();JC(a,b,0.800000011920929);}
function JC(a,b,c){var d;AEM();L(a);if(c>0.0&&c<1.0){a.yH=c;d=Hx(b,c);a.p8=d*c|0;a.fQ=d-1|0;a.r2=C6(O(a.fQ));a.dY=Bc(C,d);a.dP=Bc(C,d);return;}G(Bo((((K()).h(B(254))).dM(c)).d()));}
function AY4(a,b){return T(BT(Bu(O(b.cq()),Bx(2135587861, 2654435769)),a.r2));}
function A19(a,b){var c,d,e;if(b===null)G(Bo(B(626)));c=a.dY;d=a.gL(b);while(true){e=c.data[d];if(e===null)return  -(d+1|0)|0;if(e.K(b))break;d=(d+1|0)&a.fQ;}return d;}
function ASR(a,b,c){var d,e,f;d=a.gv(b);if(d>=0){e=a.dP.data[d];a.dP.data[d]=c;return e;}f= -(d+1|0)|0;a.dY.data[f]=b;a.dP.data[f]=c;f=a.gm+1|0;a.gm=f;if(f>=a.p8)ZS(a,a.dY.data.length<<1);return null;}
function Rw(a,b,c){var d,e,f;d=a.dY;e=a.gL(b);while(true){f=d.data;if(f[e]===null)break;e=(e+1|0)&a.fQ;}f[e]=b;a.dP.data[e]=c;}
function AYq(a,b){var c;c=a.gv(b);return c<0?null:a.dP.data[c];}
function AO_(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.gv(b);if(c<0)return null;d=a.dY;e=a.dP;f=e.data;g=f[c];h=a.fQ;i=(c+1|0)&h;while(true){j=d.data;k=j[i];if(k===null)break;l=a.gL(k);if(((i-l|0)&h)>((c-l|0)&h)){j[c]=k;f[c]=f[i];c=i;}i=(i+1|0)&h;}j[c]=null;f[c]=null;a.gm=a.gm-1|0;return g;}
function AXx(a){if(!a.gm)return;a.gm=0;XT(a.dY,null);XT(a.dP,null);}
function A9X(a,b){return a.gv(b)<0?0:1;}
function ZS(a,b){var c,d,e,f,g;a:{c=a.dY.data.length;a.p8=b*a.yH|0;a.fQ=b-1|0;a.r2=C6(O(a.fQ));d=a.dY;e=a.dP;a.dY=Bc(C,b);a.dP=Bc(C,b);if(a.gm>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g!==null)Rw(a,g,e.data[f]);f=f+1|0;}}}}
function ALm(){Bpw=Rx();}
function ABJ(){var a=this;C.call(a);a.g=null;a.cS=0;a.nV=null;a.sW=0;a.eD=0;a.fk=0;a.bK=0;a.oX=null;}
function Bc_(){var a=new ABJ();AHR(a);return a;}
function F1(a,b){return BaU(a,b);}
function MT(a,b,c){var d,e,f,g,h,i;d=UK();e=F1(a,b);f=0;g=0;if(!b.i()){h=Bc(BL,1);h.data[0]=B(46);return h;}while(Fj(e)){i=f+1|0;if(i>=c&&c>0)break;d.gl((b.du(g,Mq(e))).d());g=Nu(e);f=i;}a:{d.gl((b.du(g,b.i())).d());i=f+1|0;if(!c)while(true){i=i+(-1)|0;if(i<0)break;if(((d.X(i)).d()).i())break a;d.ka(i);}}if(i<0)i=0;return d.DZ(Bc(BL,i));}
function YM(a,b){return MT(a,b,0);}
function I9(a){return a.g.d();}
function A0v(b,c){if(b===null)G(AR3(B(627)));if(c&&(c|255)!=255)G(Bo(B(46)));ZR();Bh1=1;return AA1(Bc_(),b,c);}
function AA1(a,b,c){a.g=Bd3(b,c);a.cS=c;a.oX=Mx(a,(-1),a.cS,null);if(a.g.bH()){RT(a);return a;}G(BV(B(46),a.g.d(),a.g.dc()));}
function AGx(a,b){var c,d,e;c=Bf0(B0(a,2),B0(a,64));while(!a.g.bH()){d=a.g;if(!d.fV())break;d=a.g;if(d.cs()&&a.g.cs()!=(-536870788)){d=a.g;if(d.cs()!=(-536870871))break;}c.cn(a.g.z());if(a.g.bA()!=(-536870788))continue;a.g.z();}e=Ic(a,c);e.L(b);return e;}
function Mx(a,b,c,d){var e,f,g,h,i,j;e=UK();f=a.cS;g=0;if(c!=a.cS)a.cS=c;a:{switch(b){case -1073741784:h=new Lj;i=a.bK+1|0;a.bK=i;ACX(h,i);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new KS;i=a.bK+1|0;a.bK=i;AF8(h,i);break a;case -33554392:h=new Lz;i=a.bK+1|0;a.bK=i;Xq(h,i);break a;default:a.eD=a.eD+1|0;if(d!==null)h=Bfx(a.eD);else{h=Bej();g=1;}if(a.eD<=(-1))break a;if(a.eD>=10)break a;a.nV.data[a.eD]=h;break a;}h=Bc7();}while(true){if(a.g.fV()&&a.g.cs()==(-536870788))j=AGx(a,
h);else if(a.g.bA()==(-536870788)){j=Gf(h);a.g.z();}else{j=Nd(a,h);if(a.g.bA()==(-536870788))a.g.z();}if(j!==null)e.gl(j);if(a.g.bH())break;if(a.g.bA()==(-536870871))break;}if(a.g.CM()==(-536870788))e.gl(Gf(h));if(a.cS!=f&&!g){a.cS=f;a.g.Cv(a.cS);}switch(b){case -1073741784:break;case -536870872:return BdS(e,h);case -268435416:return Bc0(e,h);case -134217688:return Baz(e,h);case -67108824:return Bea(e,h);case -33554392:return Bdm(e,h);default:switch(e.cx()){case 0:break;case 1:return Be6(e.X(0),h);default:return Bbo(e,
h);}return Gf(h);}return BcI(e,h);}
function AEK(a){var b,c,d;b=A7t();while(!a.g.bH()){c=a.g;if(!c.fV())break;c=a.g;if(c.z6())break;c=a.g;if(c.AX())break;c=a.g;if(!(!c.qE()&&!a.g.cs())){c=a.g;if(!(!c.qE()&&Jm(a.g.cs()))){c=a.g;if(c.cs()!=(-536870871)){c=a.g;if((c.cs()&(-2147418113))!=(-2147483608)){c=a.g;if(c.cs()!=(-536870788)){c=a.g;if(c.cs()!=(-536870876))break;}}}}}d=a.g.z();if(!IE(d))b.Em(d&65535);else b.Ky(E2(d));}if(!B0(a,2))return Bbd(b);if(B0(a,64))return Bgi(b);return Bgo(b);}
function AEP(a){var b,c,d,e,f,g,h,i,j,k;b=Bf(4);c=0;d=(-1);e=(-1);if(!a.g.bH()&&a.g.fV()){f=b.data;d=a.g.z();f[c]=d;e=d-4352|0;}if(e>=0&&e<19){g=B8(3);f=g.data;f[c]=d&65535;h=a.g.bA();i=h-4449|0;if(i>=0&&i<21){f[1]=h&65535;a.g.z();j=a.g.bA();h=j-4519|0;if(h>=0&&h<28){f[2]=j&65535;a.g.z();return A9v(g,3);}return A9v(g,2);}if(!B0(a,2))return Rv(f[0]);if(B0(a,64))return A7q(f[0]);return AY3(f[0]);}k=1;while(k<4&&!a.g.bH()&&a.g.fV()){f=b.data;j=k+1|0;f[k]=a.g.z();k=j;}if(k==1){f=b.data;if(!APe(f[0]))return Ms(a,
f[0]);}if(!B0(a,2))return Bgk(b,k);if(B0(a,64))return Bf4(b,k);return Bbq(b,k);}
function Nd(a,b){var c,d,e,f;if(a.g.fV()&&!a.g.qE()&&Jm(a.g.cs())){if(!B0(a,128)){if(!a.g.z6()&&!a.g.AX())c=AEK(a);else{d=OR(a,b);c=IG(a,b,d);}}else{c=AEP(a);if(!a.g.bH()){e=a.g;if(!(e.bA()==(-536870871)&&!(b instanceof Fu))){e=a.g;if(e.bA()!=(-536870788)&&!a.g.fV())c=IG(a,b,c);}}}}else if(a.g.bA()!=(-536870871)){d=OR(a,b);c=IG(a,b,d);}else{if(b instanceof Fu)G(BV(B(46),a.g.d(),a.g.dc()));c=Gf(b);}a:{if(!a.g.bH()){e=a.g;if(!(e.bA()==(-536870871)&&!(b instanceof Fu))){e=a.g;if(e.bA()!=(-536870788)){f=Nd(a,b);if
(c instanceof CK&&!(c instanceof EA)&&!(c instanceof CN)&&!(c instanceof Ex)){e=c;if(!f.b0(e.m7()))c=Bau(e);}if((f.cK()&65535)!=43)c.L(f);else c.L(f.m7());break a;}}}if(c===null)return null;c.L(b);}if((c.cK()&65535)!=43)return c;return c.m7();}
function IG(a,b,c){var d,e,f,g,h,i,j;d=a.g.bA();if(c!==null&&!(c instanceof BR)){switch(d){case -2147483606:a.g.z();return Bck(c,b,d);case -2147483605:a.g.z();return BeQ(c,b,(-2147483606));case -2147483585:a.g.z();return Be0(c,b,(-536870849));case -2147483525:e=new Ki;f=a.g.hk();g=a.fk+1|0;a.fk=g;Us(e,f,c,b,(-536870849),g);return e;case -1073741782:case -1073741781:a.g.z();h=Bd6(c,b,d);c.L(h);return h;case -1073741761:a.g.z();h=BaL(c,b,(-536870849));c.L(b);return h;case -1073741701:h=new L0;e=a.g;e=e.hk();i
=a.fk+1|0;a.fk=i;Uq(h,e,c,b,(-536870849),i);c.L(h);return h;case -536870870:case -536870869:a.g.z();h=c.cK()!=(-2147483602)?BdI(c,b,d):B0(a,32)?BaX(c,b,d):Baj(c,b,d,Nk(a.cS));c.L(h);return h;case -536870849:a.g.z();h=Bgc(c,b,(-536870849));c.L(b);return h;case -536870789:h=new EW;e=a.g;e=e.hk();g=a.fk+1|0;a.fk=g;IN(h,e,c,b,(-536870849),g);c.L(h);return h;default:}return c;}j=null;if(c!==null)j=c;switch(d){case -2147483606:case -2147483605:a.g.z();h=Bcc(j,b,d);j.L(h);return h;case -2147483585:a.g.z();return Bda(j,
b,(-2147483585));case -2147483525:return Bcw(a.g.hk(),j,b,(-2147483525));case -1073741782:case -1073741781:a.g.z();h=BfR(j,b,d);j.L(h);return h;case -1073741761:a.g.z();return BfG(j,b,(-1073741761));case -1073741701:return Ba9(a.g.hk(),j,b,(-1073741701));case -536870870:case -536870869:a.g.z();h=Bb3(j,b,d);j.L(h);return h;case -536870849:a.g.z();return BbE(j,b,(-536870849));case -536870789:return BdV(a.g.hk(),j,b,(-536870789));default:}return c;}
function OR(a,b){var c,d,e,f,g,h,i,j,k,l;c=null;while(true){a:{d=a.g.bA();if((d&(-2147418113))==(-2147483608)){a.g.z();e=(d&16711680)>>16;d=d&(-16711681);if(d==(-16777176))a.cS=e;else{if(d!=(-1073741784))e=a.cS;c=Mx(a,d,e,b);if(a.g.bA()!=(-536870871))G(BV(B(46),a.g.d(),a.g.dc()));a.g.z();}}else{b:{c:{switch(d){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:a.g.z();c
=A9c(0);break a;case -2147483577:a.g.z();c=BaI();break a;case -2147483558:a.g.z();c=new Mi;f=a.bK+1|0;a.bK=f;AFw(c,f);break a;case -2147483550:a.g.z();c=A9c(1);break a;case -2147483526:a.g.z();c=Bcp();break a;case -536870876:a.g.z();a.bK=a.bK+1|0;if(B0(a,8)){if(B0(a,1)){c=Ba4(a.bK);break a;}c=A_5(a.bK);break a;}if(B0(a,1)){c=BbA(a.bK);break a;}c=Bch(a.bK);break a;case -536870866:a.g.z();if(B0(a,32)){c=BcF();break a;}c=Bb9(Nk(a.cS));break a;case -536870821:a.g.z();g=0;if(a.g.bA()==(-536870818)){g=1;a.g.z();}c
=Uv(a,g,b);if(a.g.bA()!=(-536870819))G(BV(B(46),a.g.d(),a.g.dc()));a.g.mX(1);a.g.z();break a;case -536870818:a.g.z();a.bK=a.bK+1|0;if(!B0(a,8)){c=ATQ();break a;}c=BfO(Nk(a.cS));break a;case 0:h=a.g.pp();if(h!==null)c=Ic(a,h);else{if(a.g.bH()){c=Gf(b);break a;}c=Rv(d&65535);}a.g.z();break a;default:break b;}a.g.z();c=ATQ();break a;}i=(d&2147483647)-48|0;if(a.eD<i)G(BV(B(46),a.g.d(),a.g.dc()));a.g.z();a.bK=a.bK+1|0;c=!B0(a,2)?Bdl(i,a.bK):B0(a,64)?Ba5(i,a.bK):Bgd(i,a.bK);a.nV.data[i].qB=1;a.sW=1;break a;}if(d>=
0&&!a.g.iU()){c=Ms(a,d);a.g.z();}else if(d==(-536870788))c=Gf(b);else{if(d!=(-536870871)){j=new OG;k=!a.g.iU()?IF(d&65535):(a.g.pp()).d();l=a.g;YN(j,k,l.d(),a.g.dc());G(j);}if(b instanceof Fu)G(BV(B(46),a.g.d(),a.g.dc()));c=Gf(b);}}}if(d!=(-16777176))break;}return c;}
function Uv(a,b,c){var d,e;d=FT(a,b);e=Ic(a,d);e.L(c);return e;}
function FT(a,b){var c,d,e,f,g,h,i,j,k,$$je;c=BfK(b,B0(a,2),B0(a,64));d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(a.g.bH())break a;f=a.g.bA()==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.g.bA()){case -536870874:if(d>=0)c.cn(d);d=a.g.z();if(a.g.bA()!=(-536870874)){d=38;break d;}if(a.g.cs()==(-536870821)){a.g.z();e=1;d=(-1);break d;}a.g.z();if(g){c=FT(a,0);break d;}if(a.g.bA()==(-536870819))break d;c.uv(FT(a,0));break d;case -536870867:if(!g&&a.g.cs()!=(-536870819)){h=a.g;if(h.cs()!=(-536870821)&&d>=0){a.g.z();i
=a.g.bA();if(a.g.iU())break c;if(i<0){h=a.g;if(h.cs()!=(-536870819)){h=a.g;if(h.cs()!=(-536870821)&&d>=0)break c;}}e:{try{if(Jm(i))break e;i=i&65535;break e;}catch($$e){$$je=Bn($$e);if($$je instanceof Ce){break b;}else{throw $$e;}}}try{c.bu(d,i);}catch($$e){$$je=Bn($$e);if($$je instanceof Ce){break b;}else{throw $$e;}}a.g.z();d=(-1);break d;}}if(d>=0)c.cn(d);d=45;a.g.z();break d;case -536870821:if(d>=0){c.cn(d);d=(-1);}a.g.z();j=0;if(a.g.bA()==(-536870818)){a.g.z();j=1;}if(!e)c.G9(FT(a,j));else c.uv(FT(a,j));e
=0;a.g.z();break d;case -536870819:if(d>=0)c.cn(d);d=93;a.g.z();break d;case -536870818:if(d>=0)c.cn(d);d=94;a.g.z();break d;case 0:if(d>=0)c.cn(d);k=a.g.pp();if(k===null)d=0;else{c.IV(k);d=(-1);}a.g.z();break d;default:}if(d>=0)c.cn(d);d=a.g.z();}g=0;}G(BV(B(46),I9(a),a.g.dc()));}G(BV(B(46),I9(a),a.g.dc()));}if(!f){if(d>=0)c.cn(d);return c;}G(BV(B(46),I9(a),a.g.dc()-1|0));}
function Ms(a,b){var c;c=IE(b);if(B0(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AY3(b&65535);}if(B0(a,64)&&b>128){if(c)return BbT(b);if(KG(b))return AQH(b&65535);if(!Lt(b))return A7q(b&65535);return A21(b&65535);}}if(c)return Baf(b);if(KG(b))return AQH(b&65535);if(!Lt(b))return Rv(b&65535);return A21(b&65535);}
function Ic(a,b){var c,d;if(!b.By()){if(!b.y9()){if(b.fy())return AM2(b);return ATI(b);}if(b.fy())return A5J(b);return A3v(b);}c=b.Jh();d=Bc5(c);if(!b.y9()){if(b.fy())return LU(AM2(b.ko()),d);return LU(ATI(b.ko()),d);}if(b.fy())return LU(A5J(b.ko()),d);return LU(A3v(b.ko()),d);}
function FW(b){return A0v(b,0);}
function RT(a){if(a.sW)a.oX.dx();}
function A3y(b){var c,d,e,f;c=(K()).h(B(628));d=0;while(true){e=b.rz(B(629),d);if(e<0)break;f=e+2|0;(c.h(b.cA(d,f))).h(B(630));d=f;}return ((c.h(b.dZ(d))).h(B(629))).d();}
function YA(a){return a.eD;}
function AFU(a){return a.fk+1|0;}
function UN(a){return a.bK+1|0;}
function He(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function B0(a,b){return (a.cS&b)!=b?0:1;}
function AHR(a){L(a);a.nV=Bc(CE,10);a.eD=(-1);a.fk=(-1);a.bK=(-1);}
var Nv=D(EK);
var Rn=D(Gu);
function Be0(a,b,c){var d=new Rn();ATH(d,a,b,c);return d;}
function ATH(a,b,c,d){MJ(a,b,c,d);J0();b.L(Bia);}
function AOi(a,b,c,d){var e;e=a.R.c(b,c,d);if(e<=0)e=b;return a.j.c(e,c,d);}
function A5P(a,b){a.j=b;}
var ADo=D(S);
function Ba3(){var a=new ADo();A9_(a);return a;}
function A9_(a){BY(a);}
var ACo=D(Bp);
var ADp=D(S);
function Bd$(){var a=new ADp();A5Q(a);return a;}
function A5Q(a){BY(a);}
var Fw=D();
var Bpy=null;var Bpz=null;function Bci(){Bci=M(Fw);ASz();}
function X1(){var a=new Fw();Nx(a);return a;}
function Nx(a){Bci();L(a);}
function ASz(){Bpy=X1();Bpz=X1();}
var ADq=D(S);
function BfD(){var a=new ADq();AO9(a);return a;}
function AO9(a){BY(a);}
var ADl=D(S);
function A_7(){var a=new ADl();A2m(a);return a;}
function A2m(a){BY(a);}
var ADm=D(S);
function Bdd(){var a=new ADm();A9N(a);return a;}
function A9N(a){BY(a);}
var Q4=D();
var V_=D();
var PQ=D();
var LC=D();
var Bjt=0;var AF7=D(Eq);
var Uk=D(Gs);
var JD=D();
function IH(){U.call(this);this.o8=0;}
function BcK(a){var b=new IH();UD(b,a);return b;}
function UD(a,b){Bg(a);a.o8=b;}
function AQ8(a,b){return a.bs^(a.o8!=GN(b&65535)?0:1);}
var ACj=D(IH);
function Bac(a){var b=new ACj();AQd(b,a);return b;}
function AQd(a,b){UD(a,b);}
function A8O(a,b){return a.bs^(!(a.o8>>GN(b&65535)&1)?0:1);}
var MM=D(BX);
var BpA=null;function ACf(){ACf=M(MM);A2q();}
function Bfr(a){var b=new MM();T9(b,a);return b;}
function Bfw(){var a=new MM();AGo(a);return a;}
function A9U(a){return U0(T((a.bk())));}
function AOv(a){return O(AFc(T((a.bk()))));}
function T9(a,b){ACf();B6(a);}
function AGo(a){ACf();B6(a);}
function A8A(a){var b;b=XN(T(a.C));TV();BhQ.bb(O(b));return BhQ;}
function AJ9(a,b){var c,d;c=T(a.C);d=T((b.bk()));return YG(c,d)?1:0;}
function A2q(){BpA=Bfr(0);}
function U0(b){var body=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Fixture);return body.GetType();}
function AFc(b){var fixture=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Fixture);var body=fixture.GetBody();return $rt_globals.Box2D.getPointer(body);}
function XN(b){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Fixture);var returnedJSObj=jsObj.GetShape();return $rt_globals.Box2D.getPointer(returnedJSObj);}
function YG(b,c){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Fixture);var returnedJSObj=jsObj.TestPoint(c);return returnedJSObj;}
function YF(){var a=this;C.call(a);a.JP=null;a.d$=null;}
function Bef(a,b){var c=new YF();A3n(c,a,b);return c;}
function A3n(a,b,c){L(a);a.d$=c;a.JP=b;}
function Ud(a){return a.d$.length;}
function VS(a,b){return a.d$[b];}
function Wa(a){return BfZ(a);}
function VC(a){var b,c,d,e,f,g;b=a.d$.length;c=B(631);d=GS(((b*4|0)/3|0)+2|0);e=0;while(e<b){f=b-e|0;if(f>=3){g=(((a.d$[e]&255)<<16)+((a.d$[e+1|0]&255)<<8)|0)+(a.d$[e+2|0]&255)|0;d.bi(c.f(g>>18&63));d.bi(c.f(g>>12&63));d.bi(c.f(g>>6&63));d.bi(c.f(g&63));}else if(f<2){g=(a.d$[e]&255)<<16;d.bi(c.f(g>>18&63));d.bi(c.f(g>>12&63));d.h(B(632));}else{g=((a.d$[e]&255)<<16)+((a.d$[e+1|0]&255)<<8)|0;d.bi(c.f(g>>18&63));d.bi(c.f(g>>12&63));d.bi(c.f(g>>6&63));d.h(B(633));}e=e+3|0;}return d.d();}
function RV(){EQ.call(this);this.Ay=0;}
function BaT(a){var b=new RV();A2X(b,a);return b;}
function A2X(a,b){KN(a);a.Ay=b;}
function AKZ(a){var b,c;b=a.Ay;c=K();V(I(c,B(634)),b);return Q(c);}
function VT(){var a=this;C.call(a);a.oo=0;a.n2=0;a.s5=0;}
function Bed(){var a=new VT();AHr(a);return a;}
function AHr(a){L(a);}
var Xj=D(EE);
function Bf4(a,b){var c=new Xj();A2E(c,a,b);return c;}
function A2E(a,b,c){Kv(a,b,c);}
var Ml=D(Hi);
var P$=D(Dn);
function BeK(a){var b=new P$();ATh(b,a);return b;}
function ATh(a,b){ES(a);a.bL=AJK(0);a.bL.bb(b);}
function A8_(a){return a.bL.pT();}
function A33(a,b,c){var d;d=a.bL.rP(b);c.w=d.cQ();c.v=d.cM();}
var QY=D(Dm);
function AGM(){var a=this;C.call(a);a.px=null;a.Gn=null;}
function A$q(a,b){var c=new AGM();AMa(c,a,b);return c;}
function AMa(a,b,c){L(a);a.px=b;a.Gn=c;}
function Tz(){U.call(this);this.Ij=null;}
function BaD(a){var b=new Tz();AXl(b,a);return b;}
function AXl(a,b){a.Ij=b;Bg(a);}
function AID(a,b){return K_(b);}
var AAO=D(W);
function BdN(){var a=new AAO();AIl(a);return a;}
function AIl(a){Bs(a);}
function ALg(a){var b;b=BaG(a);b.ba=1;return b;}
var FL=D(Y);
var Bj6=null;var BnW=null;var BpB=null;function G4(){G4=M(FL);A1R();}
function ALw(a,b){var c=new FL();ADx(c,a,b);return c;}
function ADx(a,b,c){G4();BJ(a,b,c);}
function A1R(){Bj6=ALw(B(635),0);BnW=ALw(B(636),1);BpB=H(FL,[Bj6,BnW]);}
var EO=D(Y);
var Bpj=null;var BpC=null;var Bpk=null;var BpD=null;function FZ(){FZ=M(EO);A4p();}
function P1(a,b){var c=new EO();AG4(c,a,b);return c;}
function AAW(){FZ();return BpD.dX();}
function AG4(a,b,c){FZ();BJ(a,b,c);}
function AAP(){FZ();return H(EO,[Bpj,BpC,Bpk]);}
function A4p(){Bpj=P1(B(637),0);BpC=P1(B(638),1);Bpk=P1(B(639),2);BpD=AAP();}
var ST=D(CX);
var NU=D(Du);
var BpE=null;function AFe(){AFe=M(NU);A15();}
function AGI(b,c){var d,e,f,g,h,i,j;AFe();if(c>=2&&c<=36){if(b!==null&&!b.bH()){a:{d=0;e=0;switch(b.f(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=Bd;while(e<b.i()){g=e+1|0;h=NX(b.f(e));if(h<0){i=new Cg;j=K();I(I(j,B(7)),b);DL(i,Q(j));G(i);}if(h>=c){i=new Cg;j=K();I(I(V(I(j,B(8)),c),B(9)),b);DL(i,Q(j));G(i);}f=Ca(Bu(O(c),f),O(h));if(KT(f,Bd)){if(g==b.i()&&B5(f,Bx(0, 2147483648))&&d)return Bx(0, 2147483648);i=new Cg;j=K();I(I(j,B(10)),b);DL(i,Q(j));G(i);}e=g;}if(d)f=A5i(f);return f;}G(A4Z(B(11)));}i
=new Cg;j=K();V(I(j,B(12)),c);DL(i,Q(j));G(i);}
function AGk(b){AFe();return AGI(b,10);}
function C6(b){var c,d,e;AFe();if(B5(b,Bd))return 64;c=0;d=BT(b,32);if(KW(d,Bd))c=32;else d=b;e=BT(d,16);if(B5(e,Bd))e=d;else c=c|16;d=BT(e,8);if(B5(d,Bd))d=e;else c=c|8;e=BT(d,4);if(B5(e,Bd))e=d;else c=c|4;d=BT(e,2);if(B5(d,Bd))d=e;else c=c|2;if(KW(BT(d,1),Bd))c=c|1;return (64-c|0)-1|0;}
function Iz(b,c){return Long_udiv(b, c);}
function YR(b,c){return Long_urem(b, c);}
function A15(){BpE=F($rt_longcls());}
function Vr(){var a=this;C.call(a);a.jb=null;a.nw=null;a.c1=0;a.wz=0;}
function A5Y(a){var b=new Vr();AN7(b,a);return b;}
function AN7(a,b){L(a);while(b>=a.c1){a.c1=a.c1<<1|1;}a.c1=a.c1<<1|1;a.jb=Bf(a.c1+1|0);a.nw=Bf(a.c1+1|0);a.wz=b;}
function ANy(a,b,c){var d,e,f;d=0;e=b&a.c1;while(a.jb.data[e]&&a.jb.data[e]!=b){f=d+1|0;d=f&a.c1;f=e+d|0;e=f&a.c1;}a.jb.data[e]=b;a.nw.data[e]=c;}
function A4L(a,b){var c,d,e,f;c=b&a.c1;d=0;while(true){e=a.jb.data[c];if(!e)break;if(e==b)return a.nw.data[c];f=d+1|0;d=f&a.c1;f=c+d|0;c=f&a.c1;}return a.wz;}
var T3=D(Ct);
var AEY=D(W);
function Bb0(){var a=new AEY();AX3(a);return a;}
function AX3(a){Bs(a);}
function A5X(a){var b;b=Bb6(a);b.ba=1;return b;}
var Di=D(Y);
var BpF=null;var BpG=null;var BpH=null;var BpI=null;var BpJ=null;var BpK=null;var BnX=null;var BpL=null;function Z3(){Z3=M(Di);AWs();}
function Ga(a,b){var c=new Di();X5(c,a,b);return c;}
function X5(a,b,c){Z3();BJ(a,b,c);}
function RQ(){Z3();return H(Di,[BpF,BpG,BpH,BpI,BpJ,BpK,BnX]);}
function AWs(){BpF=Ga(B(59),0);BpG=Ga(B(640),1);BpH=Ga(B(641),2);BpI=Ga(B(642),3);BpJ=Ga(B(643),4);BpK=Ga(B(644),5);BnX=Ga(B(645),6);BpL=RQ();}
var Zg=D(Ef);
function SI(){var a=this;C.call(a);a.AF=0;a.wO=null;a.hs=0;a.gF=0;a.n3=0;a.sr=0;a.yx=0;a.x0=0;a.z1=0;a.uE=0;a.zh=0;a.v1=0;a.rA=0;}
function BcP(a){var b=new SI();AIH(b,a);return b;}
function AR8(a){return a.hs&&a.gF?1:0;}
function A7z(a){return !a.hs&&!a.gF?1:0;}
function AIH(a,b){L(a);a.AF=1;a.hs=(-1);a.gF=(-1);a.n3=0;a.sr=0;a.yx=0;a.x0=0;a.z1=0;a.uE=0;a.zh=0;a.v1=0;a.wO=b;Wv(new O3);}
function Z_(){U.call(this);this.K7=null;}
function BcJ(a){var b=new Z_();AUJ(b,a);return b;}
function AUJ(a,b){a.K7=b;Bg(a);}
function A41(a,b){return Kt(b);}
function QL(){var a=this;U.call(a);a.md=null;a.GN=null;}
function Bd1(a,b){var c=new QL();AUS(c,a,b);return c;}
function AUS(a,b,c){a.GN=b;a.md=c;Bg(a);}
function AOY(a,b){return a.bs^a.md.dU(b);}
function A1P(a){var b,c;b=K();c=a.md.i4(0);while(c>=0){b.od(E2(c));b.bi(124);c=a.md.i4(c+1|0);}if(b.i()>0)b.AC(b.i()-1|0);return b.d();}
var X6=D(CN);
function Bck(a,b,c){var d=new X6();ATE(d,a,b,c);return d;}
function ATE(a,b,c,d){FJ(a,b,c,d);J0();b.L(Bia);}
function AZH(a,b,c,d){var e;while(true){e=a.R.c(b,c,d);if(e<=0)break;b=e;}return a.j.c(b,c,d);}
var P0=D(CH);
function QI(){var a=this;U.call(a);a.x5=null;a.CG=null;}
function BeX(a,b){var c=new QI();A7W(c,a,b);return c;}
function A7W(a,b,c){a.CG=b;a.x5=c;Bg(a);}
function AKr(a,b){return a.x5.n(b);}
function QJ(){var a=this;U.call(a);a.tJ=null;a.Ls=null;}
function Be_(a,b){var c=new QJ();APW(c,a,b);return c;}
function APW(a,b,c){a.Ls=b;a.tJ=c;Bg(a);}
function A1s(a,b){return a.tJ.n(b)?0:1;}
function QK(){var a=this;U.call(a);a.vl=0;a.Aj=null;a.v8=null;a.BE=null;}
function Bcl(a,b,c,d){var e=new QK();AKC(e,a,b,c,d);return e;}
function AKC(a,b,c,d,e){a.BE=b;a.vl=c;a.Aj=d;a.v8=e;Bg(a);}
function A_S(a,b){return !(a.vl^a.Aj.n(b))&&!a.v8.n(b)?0:1;}
function Q$(){var a=this;U.call(a);a.AA=0;a.sI=null;a.sS=null;a.Ct=null;}
function Bgl(a,b,c,d){var e=new Q$();A1m(e,a,b,c,d);return e;}
function A1m(a,b,c,d,e){a.Ct=b;a.AA=c;a.sI=d;a.sS=e;Bg(a);}
function AMO(a,b){return !(a.AA^a.sI.n(b))&&!a.sS.n(b)?1:0;}
function QM(){var a=this;U.call(a);a.zW=0;a.xi=null;a.ul=null;a.Hw=null;}
function Bgh(a,b,c,d){var e=new QM();A0s(e,a,b,c,d);return e;}
function A0s(a,b,c,d,e){a.Hw=b;a.zW=c;a.xi=d;a.ul=e;Bg(a);}
function AYz(a,b){return a.zW^a.xi.n(b)&&a.ul.n(b)?1:0;}
function QN(){var a=this;U.call(a);a.zB=0;a.w7=null;a.zS=null;a.H2=null;}
function Bcf(a,b,c,d){var e=new QN();AIb(e,a,b,c,d);return e;}
function AIb(a,b,c,d,e){a.H2=b;a.zB=c;a.w7=d;a.zS=e;Bg(a);}
function ARC(a,b){return a.zB^a.w7.n(b)&&a.zS.n(b)?0:1;}
function QO(){var a=this;U.call(a);a.AI=null;a.uN=0;a.A_=null;}
function Bag(a,b,c){var d=new QO();AQP(d,a,b,c);return d;}
function AQP(a,b,c,d){a.A_=b;a.AI=c;a.uN=d;Bg(a);}
function AOa(a,b){return a.AI.n(b)&&a.uN^a.A_.U.dU(b)?1:0;}
function QH(){var a=this;U.call(a);a.zO=null;a.yT=0;a.uL=null;}
function Bgf(a,b,c){var d=new QH();A4M(d,a,b,c);return d;}
function A4M(a,b,c,d){a.uL=b;a.zO=c;a.yT=d;Bg(a);}
function A9d(a,b){return a.zO.n(b)&&a.yT^a.uL.U.dU(b)?0:1;}
var NN=D(EP);
var ACN=D(Fk);
function GS(a){var b=new ACN();AOm(b,a);return b;}
function K(){var a=new ACN();A$M(a);return a;}
function AOm(a,b){Kl(a,b);}
function A$M(a){Kx(a);}
function I(a,b){ABS(a,b);return a;}
function AH0(a,b){LN(a,b);return a;}
function V(a,b){Qx(a,b);return a;}
function ABt(a,b){AGm(a,b);return a;}
function Fl(a,b){V3(a,b);return a;}
function Nm(a,b){RY(a,b);return a;}
function Bi(a,b){NM(a,b);return a;}
function AKF(a,b,c,d){ON(a,b,c,d);return a;}
function A8E(a,b){Oe(a,b);return a;}
function Zd(a,b){Vw(a,b);return a;}
function A0_(a,b,c){TF(a,b,c);return a;}
function A8U(a,b,c){ADe(a,b,c);return a;}
function ANN(a,b,c){AAk(a,b,c);return a;}
function A7x(a,b,c,d,e){MQ(a,b,c,d,e);return a;}
function A$5(a,b,c){RU(a,b,c);return a;}
function A5I(a,b,c){O5(a,b,c);return a;}
function AQI(a,b,c){OS(a,b,c);return a;}
function AUs(a,b,c){AGl(a,b,c);return a;}
function ATs(a,b){AF1(a,b);return a;}
function A3N(a,b,c){Ou(a,b,c);return a;}
function A$g(a,b,c){return ZT(a,b,c);}
function A3T(a,b){AFM(a,b);}
function ALC(a,b,c,d,e){ABe(a,b,c,d,e);}
function A7B(a,b,c){return AES(a,b,c);}
function A3E(a,b,c,d,e){return a.Gu(b,c,d,e);}
function AK$(a,b,c,d){return a.Ej(b,c,d);}
function AYm(a){return NC(a);}
function Q(a){return N5(a);}
function AOO(a,b){MY(a,b);}
function AOU(a,b,c){return a.BK(b,c);}
function A5b(a,b,c){return a.J7(b,c);}
function A4C(a,b,c){return a.F3(b,c);}
function ASX(a,b,c){return a.B6(b,c);}
function A18(a,b,c){return a.K4(b,c);}
function AJ2(a,b,c){return a.Fe(b,c);}
function AV6(a,b,c){return a.BP(b,c);}
var AFQ=D(Bk);
function Ban(){var a=new AFQ();AVM(a);return a;}
function AVM(a){Cv(a);}
var PI=D();
function Bfl(){var a=new PI();AOJ(a);return a;}
function AOJ(a){L(a);}
var U2=D(Ei);
var PH=D();
function Bbh(){var a=new PH();AYK(a);return a;}
function AYK(a){L(a);}
function AD3(){C.call(this);this.Dr=null;}
function Ba2(){var a=new AD3();AOW(a);return a;}
function AOW(a){L(a);a.Dr=Bal(16);}
var YI=D(Jf);
var ADR=D(BI);
function O_(){var a=this;C.call(a);a.eN=null;a.vk=null;a.pw=null;a.DN=null;a.d6=null;a.fN=null;a.m9=null;a.jt=null;a.hN=null;a.fm=null;a.pZ=null;}
function BaP(a,b){var c=new O_();APr(c,a,b);return c;}
function AE2(a,b){a.eN=Bf(b);}
function A5T(a,b){var c;c=a.m9.ji(O(b));if(a.pZ===null)return 0;return a.pZ.GD(c);}
function APr(a,b,c){var d,e;L(a);a.eN=Bf(200);a.vk=BcH(a,100,200);a.pw=BeV(a,100,200);a.fN=Se(100);a.m9=Se(100);a.jt=Se(100);a.hN=CG();a.fm=CG();a.DN=Z();d=Td();d.Dy(b.w);d.Kh(b.v);a.d6=Bcq(d);a.hN.fD(a.eN.data.length);a.fm.fD(a.eN.data.length);e=0;while(e<a.eN.data.length){a.fm.bG(AY9(a,Bd));e=e+1|0;}}
function AU8(a){a.d6.be();a.d6=null;}
function AV3(a,b,c,d){a.d6.LI(b,c,d);}
function A53(a,b){var c,d;c=a.d6.Dp(Q6(b.rF),b.lE.w,b.lE.v,b.v3,b.nm.w,b.nm.v,b.sJ,b.z2,b.w2,b.us,b.vD,b.sy,b.tS,b.Ao,b.yA);d=a.vk.ho();d.sk(c);a.fN.qC(O(T((d.cy.bk()))),d);return d;}
function A6$(a,b){var c;b.bz();b.fD(a.fN.dC);c=a.fN.AY();while(c.dk()){b.bG(c.da());}}
function AL3(a,b){var c;b.bz();b.fD(a.jt.dC);c=a.jt.AY();while(c.dk()){b.bG(c.da());}}
function ARG(a,b){b.I9(null);a.jt.Ln(O(T((b.cH.bk()))));b.o$.px.gB.jh(b.o_,1);b.o_.px.gB.jh(b.o$,1);a.d6.F2(b.cH);}
function APH(a){var b,c,d,e,f;b=a.Ff();if(b>a.eN.data.length){c=2*b|0;AE2(a,c);a.hN.fD(c);a.fm.fD(c);}a:{if(b>a.fm.k){d=a.fm.k;e=0;while(true){if(e>=(b-d|0))break a;a.fm.bG(AY9(a,Bd));e=e+1|0;}}}a.d6.GP(a.eN);a.hN.bz();e=0;while(e<b){f=a.fm.X(e);f.gJ.bb(O(a.eN.data[e]));a.hN.bG(f);e=e+1|0;}return a.hN;}
function AMe(a){return a.d6.Km();}
function AO8(a,b){var c,d,e,f,g,h,i;c=Xu(a,b);d=null;e=b.g4;D3();if(e===Bj1)d=BeY(a,c);if(b.g4===Bj0)d=BeB(a,c);if(d===null){e=new DK;f=b.g4;g=K();I(I(g,B(646)),f);D7(e,Q(g));G(e);}a.jt.qC(O(T((d.cH.bk()))),d);h=A$q(b.ic,d);i=A$q(b.id,d);d.o$=h;d.o_=i;b.id.gB.bG(h);b.ic.gB.bG(i);return d;}
function Xu(a,b){var c,d;c=b.g4;D3();if(c!==Bj1)return Bd;d=b;return a.d6.Ef(d.id.cy,d.ic.cy,d.pr,d.mt.w,d.mt.v,d.nk,d.zx,d.vg);}
function AYk(a,b,c,d,e,f){a.pZ=b;a.d6.KB(a,c,d,e,f);}
function AVA(a,b){return !!a.Kp(b);}
var XU=D(Gc);
function QD(){var a=this;C.call(a);a.ia=null;a.cJ=0;a.BV=Bd;}
function A14(a){var b=new QD();A46(b,a);return b;}
function A46(a,b){var c,d,e,f;c=b.data;L(a);a.BV=O(-1);d=c.length;if(!d)G(Bo(B(647)));e=Bc(FI,d);f=0;while(f<d){e.data[f]=c[f];f=f+1|0;}a.ia=e;a.cJ=Y0(a);}
function Y0(a){var b,c,d;b=0;c=0;while(c<a.ia.data.length){d=a.ia.data[c];d.ev=b;b=b+RM(d)|0;c=c+1|0;}return b;}
function D5(a){return a.ia.data.length;}
function Dc(a,b){return a.ia.data[b];}
var Qz=D();
var PO=D();
var N9=D();
var VV=D(W);
function BfJ(){var a=new VV();AI9(a);return a;}
function AI9(a){Bs(a);}
function ALD(a){return (C0()).bu(0,127);}
function Gz(){var a=this;C.call(a);a.bT=null;a.bg=null;a.bX=0;a.rQ=0.0;a.k6=0.0;}
var BpM=null;var BpN=null;function DA(){DA=M(Gz);AZ6();}
function Bfh(){var a=new Gz();AGs(a);return a;}
function BpO(a,b){var c=new Gz();QB(c,a,b);return c;}
function BpP(a,b,c,d,e,f){var g=new Gz();Vm(g,a,b,c,d,e,f);return g;}
function BpQ(a,b,c,d,e,f,g,h,i){var j=new Gz();AEN(j,a,b,c,d,e,f,g,h,i);return j;}
function AGs(a){DA();L(a);a.bT=Ep(1);a.bg=H4(2);}
function QB(a,b,c){DA();L(a);a.bT=Ep(1);a.bg=H4(2);a.HJ(b,c);}
function Vm(a,b,c,d,e,f,g){DA();L(a);a.bT=Ep(1);a.bg=H4(2);a.J$(b,c,d,e,f,g);}
function AEN(a,b,c,d,e,f,g,h,i,j){DA();L(a);a.bT=Ep(1);a.bg=H4(2);a.mT(b,c,d,e,f,g,h,i,j);}
function A8k(a,b,c){a.mT(b,c,0,c.i(),b.NO(),0.0,8,0,null);}
function A4J(a,b,c,d,e,f,g){a.mT(b,c,0,c.i(),d,e,f,g,null);}
function AKK(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg;a.cV();k=b.ie;if(d==e){a.k6=k.d7;return;}if(i)g=EB(g,k.sn*3.0);l=!i&&j===null?0:1;m=f.lq();a.bg.I3(0,m);n=k.jR;if(n)BpN.eZ(m);o=0;p=0.0;q=k.ii;r=null;s=null;t=m;u=d;a:{b:while(true){c:{v=0;if(d==e){if(u==e)break b;o=1;w=e;}else{d:{x=d+1|0;switch(c.f(d)){case 10:w=x-1|0;v=1;d=x;break c;case 91:if(!n){d=x;break d;}y=UV(a,c,x,e);if(y>=0){w=x-1|0;d=x+(y+1|0)|0;if(d==e){o=1;break c;}m=BpN.bA();break c;}if(y!=(-2)){d=x;break d;}d
=x+1|0;break d;default:}d=x;}continue b;}}z=BpM.ho();z.dr=0.0;z.k$=p;k.A8(z,c,u,w,s);a.bX=a.bX+z.Z.k|0;if(m!=t){if(a.bg.by(a.bg.E-2|0)!=a.bX){a.bg.eZ(a.bX);a.bg.eZ(m);}else a.bg.el(a.bg.E-1|0,m);t=m;}e:{if(!z.Z.k){BpM.hp(z);if(r===null)break e;}else if(r!==null){r.BX(z);BpM.hp(z);}else{a.bT.bG(z);r=z;}if(!v&&!o)s=r.Z.s0();else{G3(a,k,r);s=null;}if(l&&r.Z.k&&!(!v&&!o)){ba=r.W.yX()+r.W.i2(1);bb=2;while(bb<r.W.Y){bc=r.Z;bd=bb-1|0;be=bc.X(bd);bf=HQ(a,be,k);if(ba+bf-9.999999747378752E-5<=g)ba=ba+r.W.bP.data[bb];else
{if(j!==null){Qc(a,k,r,g,j);break a;}bg=k.FS(r.Z,bb);if(!(!bg&&r.dr===0.0)&&bg<r.Z.k)bd=bg;r=VZ(a,k,r,bd);if(r===null)break e;a.bT.bG(r);p=p+q;r.dr=0.0;r.k$=p;ba=r.W.yX()+r.W.i2(1);bb=1;}bb=bb+1|0;}}}if(v){r=null;s=null;p=w!=u?p+q:p+q*k.tQ;}u=d;}}a.k6=k.d7+GW(p);AAp(a,k);AC0(a,g,h);if(n)BpN.bz();}
function AAp(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=0.0;d=a.bT.bc;e=0;f=a.bT.k;while(e<f){g=d.data[e];h=g.W.bP;i=h.data;j=g.dr+i[0];k=0.0;l=g.Z.bc;m=0;n=g.Z.k;while(m<n){o=l.data[m];p=HQ(a,o,b);k=EB(k,j+p);m=m+1|0;j=j+i[m];}g.kj=EB(j,k)-g.dr;c=EB(c,g.dr+g.kj);e=e+1|0;}a.rQ=c;}
function AC0(a,b,c){var d,e,f,g,h;a:{if(!(c&8)){d=!(c&1)?0:1;e=a.bT.bc;f=0;g=a.bT.k;while(true){if(f>=g)break a;h=e.data[f];h.dr=h.dr+(!d?b-h.kj:0.5*(b-h.kj));f=f+1|0;}}}}
function Qc(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;f=c.Z.k;DA();g=BpM.ho();b.A8(g,e,0,e.i(),null);h=0.0;if(g.W.Y>0){G3(a,b,g);i=g.W.bP;j=1;k=g.W.Y;while(j<k){h=h+i.data[j];j=j+1|0;}}l=d-h;m=0;n=c.dr;i=c.W.bP;a:{while(true){if(m>=c.W.Y)break a;o=i.data[m];n=n+o;if(n>l)break;m=m+1|0;}}if(m<=1){c.Z.bz();c.W.bz();c.W.s9(g.W);}else{c.Z.jV(m-1|0);c.W.jV(m);G3(a,b,c);if(g.W.Y>0)c.W.ur(g.W,1,g.W.Y-1|0);}b:{p=f-c.Z.k|0;if(p>0){a.bX=a.bX-p|0;if(b.jR)while(true){if(a.bg.E<=2)break b;if(a.bg.by(a.bg.E-2|0)<a.bX)break b;q
=a.bg;q.E=q.E-2|0;}}}c.Z.nR(g.Z);a.bX=a.bX+e.i()|0;BpM.hp(g);}
function VZ(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;e=c.Z;f=c.Z.k;g=c.W;h=d;a:{while(true){if(h<=0)break a;if(!b.l4((e.X(h-1|0)).e_&65535))break;h=h+(-1)|0;}}b:{while(true){i=Cx(d,f);if(i>=0)break b;if(!b.l4((e.X(d)).e_&65535))break;d=d+1|0;}}j=null;if(i>=0){e.jV(h);g.jV(h+1|0);k=d-h|0;if(k>0){a.bX=a.bX-k|0;if(b.jR&&a.bg.by(a.bg.E-2|0)>a.bX){l=a.bg.bA();while(a.bg.by(a.bg.E-2|0)>a.bX){m=a.bg;m.E=m.E-2|0;}a.bg.el(a.bg.E-2|0,a.bX);a.bg.el(a.bg.E-1|0,l);}}}else c:{DA();j=BpM.ho();n=j.Z;n.EO(e,0,h);e.qN(0,
d-1|0);c.Z=n;j.Z=e;o=j.W;o.ur(g,0,h+1|0);g.qN(1,d);g.bP.data[0]=AF4(a,e,b);c.W=o;j.W=g;p=c.Z.k;q=j.Z.k;k=(f-p|0)-q|0;a.bX=a.bX-k|0;if(b.jR&&k>0){r=a.bX-q|0;s=a.bg.E-2|0;while(true){if(s<2)break c;t=a.bg.by(s);if(t<=r)break;a.bg.el(s,t-k|0);s=s+(-2)|0;}}}if(h)G3(a,b,c);else{DA();BpM.hp(c);a.bT.AZ();}return j;}
function G3(a,b,c){var d;d=c.Z.s0();if(!d.pX)c.W.bP.data[c.W.Y-1|0]=HQ(a,d,b);}
function HQ(a,b,c){return (b.cN+b.ex|0)*c.i9-c.ml;}
function AF4(a,b,c){return ( -(b.Lu()).ex|0)*c.i9-c.iX;}
function UV(a,b,c,d){var e,f,g,h,i,j;if(c==d)return (-1);switch(b.f(c)){case 35:e=0;f=c+1|0;a:{while(true){if(f>=d)break a;g=b.f(f);if(g==93)break;h=(e<<4)+g|0;if(g>=48&&g<=57)e=h+(-48)|0;else if(g>=65&&g<=70)e=h+(-55)|0;else{if(g<97)break a;if(g>102)break a;e=h+(-87)|0;}f=f+1|0;}if(f>=(c+2|0)&&f<=(c+9|0)){i=f-c|0;if(i<8)e=e<<((9-i|0)<<2)|255;DA();BpN.eZ(Tl(e));return i;}}return (-1);case 91:break;case 93:DA();if(BpN.E>1)BpN.GG();return 0;default:f=c+1|0;while(f<d){g=b.f(f);if(g==93){j=Rm((b.du(c,f)).d());if
(j===null)return (-1);DA();BpN.eZ(j.lq());return f-c|0;}f=f+1|0;}return (-1);}return (-2);}
function A9a(a){DA();BpM.Kq(a.bT);a.bT.bz();a.bg.bz();a.bX=0;a.rQ=0.0;a.k6=0.0;}
function AQO(a){var b,c,d;if(!a.bT.k)return B(46);b=GS(128);b.dM(a.rQ);b.bi(120);b.dM(a.k6);b.bi(10);c=0;d=a.bT.k;while(c<d){b.h((a.bT.X(c)).d());b.bi(10);c=c+1|0;}b.rB(b.i()-1|0);return b.d();}
function AZ6(){BpM=Il(F(Kz));BpN=H4(4);}
var K$=D();
var ADW=D(Fh);
var XE=D();
var RJ=D(Cl);
var AAg=D();
function A6_(){var b;b=A5s();return b;}
function A5s(){var userAgent=$rt_globals.navigator.userAgent.toLowerCase();return {firefox:userAgent.indexOf('firefox')!= -1,chrome:userAgent.indexOf('chrome')!= -1,safari:userAgent.indexOf('safari')!= -1,opera:userAgent.indexOf('opera')!= -1,IE:userAgent.indexOf('msie')!= -1,macOS:userAgent.indexOf('mac')!= -1,linux:userAgent.indexOf('linux')!= -1,windows:userAgent.indexOf('win')!= -1};}
var Pg=D();
function YB(){var a=this;FF.call(a);a.rr=0;a.mp=0;}
function Bfc(a,b){var c=new YB();ANO(c,a,b);return c;}
function ANO(a,b,c){MI(a);a.rr=b;a.mp=c;}
function A1O(a){return a.rr;}
function A9D(a){return a.mp;}
function A5O(a){var b,c,d;b=a.rr;c=a.mp==2147483647?B(46):(AFN(a.mp)).d();d=K();Bi(I(Bi(V(Bi(d,123),b),44),c),125);return Q(d);}
function Yp(){U.call(this);this.Jn=null;}
function Bdn(a){var b=new Yp();AS$(b,a);return b;}
function AS$(a,b){a.Jn=b;Bg(a);}
function AX9(a,b){return Yd(b);}
var AAf=D();
var F$=D(Y);
var Bn0=null;var BoX=null;var BpR=null;function NK(){NK=M(F$);AVT();}
function A34(a,b){var c=new F$();W$(c,a,b);return c;}
function Uf(){NK();return BpR.dX();}
function W$(a,b,c){NK();BJ(a,b,c);}
function ABo(){NK();return H(F$,[Bn0,BoX]);}
function AVT(){Bn0=A34(B(648),0);BoX=A34(B(649),1);BpR=ABo();}
var Ok=D(BX);
var Bmj=null;function M7(){M7=M(Ok);AXd();}
function BfS(a){var b=new Ok();Xy(b,a);return b;}
function BeM(){var a=new Ok();AGY(a);return a;}
function A9e(a){return Zj(T((a.bk())));}
function AIM(a,b,c){var d,e;d=T((a.bk()));e=T((b.bk()));return O(Rz(d,e,c));}
function Xy(a,b){M7();B6(a);}
function AGY(a){M7();B6(a);}
function AKL(a){var b;b=Ui(T(a.C));AVg();Bn8.bb(O(b));return Bn8;}
function A_I(a){var b;b=AEV(T(a.C));Cs();BhT.bb(O(b));return BhT;}
function AZm(a){var b;b=AAr(T(a.C));Cs();BhT.bb(O(b));return BhT;}
function A4s(a){return Z4(T(a.C));}
function ARb(a,b){WC(T(a.C),!!b);}
function AQ2(a){return X3(T(a.C))?1:0;}
function A2v(a){return RL(T(a.C))?1:0;}
function AXd(){Bmj=BfS(0);}
function Zj(b){var body=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Body);return body.GetType();}
function Rz(b,c,d){var body=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Body);var shape=$rt_globals.Box2D.wrapPointer(c,$rt_globals.Box2D.b2Shape);var fixture=body.CreateFixture(shape,d);return $rt_globals.Box2D.getPointer(fixture);}
function Ui(b){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Body);var returnedJSObj=jsObj.GetTransform();return $rt_globals.Box2D.getPointer(returnedJSObj);}
function AEV(b){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Body);var returnedJSObj=jsObj.GetPosition();return $rt_globals.Box2D.getPointer(returnedJSObj);}
function AAr(b){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Body);var returnedJSObj=jsObj.GetLinearVelocity();return $rt_globals.Box2D.getPointer(returnedJSObj);}
function Z4(b){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Body);var returnedJSObj=jsObj.GetMass();return returnedJSObj;}
function WC(b,c){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Body);jsObj.SetAwake(c);}
function X3(b){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Body);var returnedJSObj=jsObj.IsAwake();return returnedJSObj;}
function RL(b){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Body);var returnedJSObj=jsObj.IsActive();return returnedJSObj;}
function Jr(){var a=this;C.call(a);a.dg=null;a.jN=null;a.t5=null;a.uJ=null;a.yS=null;a.gb=null;a.l$=null;a.fB=null;a.h2=null;a.fj=null;a.ha=null;a.nB=0;a.pR=0;a.nF=null;a.gE=null;a.HN=null;a.Hp=null;a.lz=null;a.jg=null;a.dz=null;}
var BpS=null;function BpT(a,b){var c=new Jr();AAe(c,a,b);return c;}
function AZ4(){return BpS;}
function AAe(a,b,c){L(a);a.h2=Ep(4);FZ();a.ha=Bpj;a.nB=(-1);a.pR=1;a.HN=El();a.lz=CG();a.jg=CG();a.fj=Gn();a.gb=c;a.E8(b);VR(a);}
function VR(a){var b,c,d,e,f;BpS=A6_();GY(B(15),B(46));if((BpS.windows?1:0)==1)GY(B(17),B(19));else if((BpS.macOS?1:0)==1)GY(B(17),B(650));else if((BpS.linux?1:0)!=1)GY(B(17),B(651));else GY(B(17),B(20));APl(BaW());b=Fb();a.dz=b.Dc();if(a.dz.jB(B(652))){a.dz=a.dz.rK(B(653),B(46));a.dz=a.dz.rK(B(654),B(46));}c=a.dz.wR(63);if(c>=0)a.dz=a.dz.cA(0,c);a.gE=Bd0(a.dz);d=Bcg();a.gE.KF(a.gb.AF,B(655));a.dg=Bb5(a.gb);a.jN=BdB(a.dg.ff);a.t5=Baw(a.gE);a.uJ=Ba2();a.nF=Bdq();a.Hp=BbL();QG(a);a.Bk(a);a.Je(a);a.CK(a);BhP=a;Bid
=a.dg;Bii=a.dg.sH();Bij=a.dg.sH();Bif=a.jN;Big=a.t5;Bih=a.uJ;e=a.fj.jm();f=Bfz(a);e.addEventListener("visibilitychange",B4(f,"handleEvent"));a.fj.sF(a);if(a.gb.Ew())a.fj.EC(B(656),Bat(a));}
function A2P(a){var b,c,d,e,f,g,h,i,j,k,l,$$je;b=a.ha;a:{try{b:{BbR();switch(Bpi.data[Bj(b)]){case 1:c=(Fb()).F0();if(!c){FZ();a.ha=Bpk;d=$rt_globals.window.document.getElementById("progress");if(d!==null)d.style.setProperty("display","none");break b;}e=a.gE.rm;if(e>0){f=25;g=f+((75*(e-c|0)|0)/e|0)|0;h=$rt_globals.window.document.getElementById("progress-bar");if(h!==null){i=h.style;j=K();Bi(V(j,g),37);k=Q(j);i.setProperty("width",$rt_ustr(k));}}break b;case 2:break;default:break b;}if(a.l$!==null){if(a.fB!==
null){a.fB.nG();a.fB.be();}a.jN.vu(null);a.jN.cV();a.lz.bz();a.fB=a.l$;a.l$=null;FZ();a.ha=BpC;a.dg.lH=Bd;}P3(a,a.fB);}}catch($$e){$$je=Bn($$e);if($$je instanceof D8){l=$$je;break a;}else{throw $$e;}}a.fj.sF(a);return;}l.LG();G(l);}
function P3(a,b){var c,d,e,f,g,h;a.dg.gY();c=Bid.bp();d=Bid.bl();e=0;f=a.ha;FZ();if(f===BpC){a.ha=Bpk;b.tG();b.r0();e=1;}if(!(c==a.nB&&d==a.pR&&!e)){a.nB=c;a.pR=d;Bii.xd(0,0,c,d);b.LC(c,d);}a.jg.nR(a.lz);a.lz.bz();g=0;while(g<a.jg.k){(a.jg.X(g)).hZ();g=g+1|0;}a.jg.bz();h=a.dg;h.lH=Ca(h.lH,O(1));b.Jp();a.jN.cV();}
function A29(a,b){a.l$=b;}
function QG(a){a.gE.g6(1,B(657),Bdw(a));}
function A4o(a){return a.gE;}
function A2o(a){return a.dg;}
function AQF(a,b,c){a.nF.r3(b,c);}
function AU7(a,b,c){a.nF.kH(b,c);}
function A$z(a){IL();return BhY;}
function A2w(a,b){var c;c=b.o0();SU(a,c);}
function A4K(a,b){var c;c=b.o0();ABD(a,c);}
function A2u(a,b){var c;c=b.o0();R$(a,c);}
function SU(a,b){b.g6(0,B(658),A_9(a));}
function R$(a,b){b.g6(0,B(659),BcY(a));}
function ABD(a,b){b.g6(0,B(660),Bgm(a));}
var UU=D(DD);
function Qw(){U.call(this);this.F$=null;}
function BaV(a){var b=new Qw();APE(b,a);return b;}
function APE(a,b){a.F$=b;Bg(a);}
function AQ4(a,b){return F3(b);}
var AGB=D(0);
var ABd=D(CK);
function BfR(a,b,c){var d=new ABd();AWe(d,a,b,c);return d;}
function AWe(a,b,c,d){FB(a,b,c,d);}
function AQ_(a,b,c,d){var e;while(true){e=a.j.c(b,c,d);if(e>=0)break;if((b+a.bm.b5()|0)<=d.D()){e=a.bm.bB(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var ACC=D();
var AAR=D();
function TQ(b,c){return LY(b,c);}
var XP=D();
var AFg=D(CI);
function Ie(){var a=this;C.call(a);a.dj=null;a.bW=null;a.l9=0;a.hR=0;a.ey=null;a.j7=0;a.u$=null;}
var BpU=null;function HS(){HS=M(Ie);AVJ();}
function Bai(a,b,c,d){var e=new Ie();AF3(e,a,b,c,d);return e;}
function BpV(a,b,c,d,e){var f=new Ie();NE(f,a,b,c,d,e);return f;}
function BpW(a,b,c,d,e){var f=new Ie();OL(f,a,b,c,d,e);return f;}
function AF3(a,b,c,d,e){HS();L(a);a.l9=1;a.j7=0;a.u$=X();a.dj=ACv(a,b,c,A14(e));a.bW=A1W(b,d);a.hR=0;Lh(BhP,a);}
function ACv(a,b,c,d){if(Bik===null)return A4w(b,c,d);return A3M(b,c,d);}
function NE(a,b,c,d,e,f){HS();OL(a,b,c,d,e,A14(f));}
function OL(a,b,c,d,e,f){HS();a:{b:{L(a);a.l9=1;a.j7=0;a.u$=X();Be4();switch(Bme.data[Bj(b)]){case 1:break;case 2:a.dj=Bf7(c,d,f);a.bW=A_d(c,e);a.hR=0;break a;case 3:a.dj=A3M(c,d,f);a.bW=A_d(c,e);a.hR=0;break a;case 4:break b;default:break b;}a.dj=A4w(c,d,f);a.bW=A1W(c,e);a.hR=0;break a;}a.dj=Bct(d,f);a.bW=BcE(e);a.hR=1;}Lh(BhP,a);}
function AR4(a,b,c,d){a.dj.rw(b,c,d);return a;}
function AKb(a,b){var c;c=b.data;a.bW.zp(b,0,c.length);return a;}
function ALl(a){return a.bW.fd();}
function A$E(a){return a.dj.fu();}
function AKW(a,b){a.hX(b,null);}
function AS2(a,b,c){a.dj.hX(b,c);if(a.ey!==null&&a.ey.wu()>0)a.ey.hX(b,c);if(a.bW.fd()>0)a.bW.ee();}
function A8w(a,b){a.hQ(b,null);}
function AIJ(a,b,c){a.dj.hQ(b,c);if(a.ey!==null&&a.ey.wu()>0)a.ey.hQ(b,c);if(a.bW.fd()>0)a.bW.zQ();}
function A1b(a,b,c){a.y5(b,c,0,a.bW.kM()<=0?a.fu():a.fd(),a.l9);}
function AWb(a,b,c,d,e){a.y5(b,c,d,e,a.l9);}
function A5c(a,b,c,d,e,f){var g,h,i,j,k,l;if(!e)return;if(f)a.FE(b);if(a.hR){if(a.bW.fd()<=0)Bij.ok(c,d,e);else{g=a.bW.rs();h=Cd(g);BE(g);g.c4(d);Bij.yz(c,e,5123,g);g.c4(h);}}else{i=0;if(a.j7)i=a.ey.wu();if(a.bW.fd()<=0){if(a.j7&&i>0)Bik.Rm(c,d,e,i);else Bij.ok(c,d,e);}else{if((e+d|0)>a.bW.kM()){j=new DK;k=(((((K()).h(B(661))).A(e)).h(B(662))).A(d)).h(B(663));l=a.bW;D7(j,((k.A(l.kM())).h(B(537))).d());G(j);}if(a.j7&&i>0)Bik.NP(c,e,5123,d*2|0,i);else Bij.zM(c,e,5123,d*2|0);}}if(f)a.E9(b);}
function A2H(a){HS();if(BpU.I(BhP)!==null)(BpU.I(BhP)).jh(a,1);a.dj.be();if(a.ey!==null)a.ey.be();a.bW.be();}
function A6g(a,b){var c,d,e;c=a.dj.mu();d=D5(c);e=0;while(e<d){if((Dc(c,e)).lf==b)return Dc(c,e);e=e+1|0;}return null;}
function AZM(a){return a.dj.mu();}
function AOs(a){return a.bW.rs();}
function Lh(b,c){var d;HS();d=BpU.I(b);if(d===null)d=CG();d.bG(c);BpU.s(b,d);}
function AVJ(){BpU=Df();}
var Zh=D();
function Hx(b,c){var d;if(b<0)G(Bo((((K()).h(B(664))).A(b)).d()));d=Jd(Bt(2,A0c(b/c)|0));if(d<=1073741824)return d;G(Bo((((K()).h(B(665))).A(b)).d()));}
var Ss=D();
function AER(){var a=this;C.call(a);a.gG=null;a.mU=null;a.mw=null;a.tV=null;a.d0=null;a.nS=null;a.fb=null;a.db=null;a.DG=null;a.cX=null;a.xw=null;a.yp=null;}
function BaQ(){var a=new AER();AKM(a);return a;}
function AKM(a){L(a);a.fb=null;a.db=null;a.DG=Z();a.cX=X();a.xw=Bbu(a);a.yp=Z();}
function AXy(a){var b,c,d,e,f,g,h,i;b=CV();a.d0.Es((BhP.Fv()).Li(),3,3);c=Lg(NH(CV(),b))/1.0E9;d=CV();Bii.Aa(16384);a.gG.gY();a.mU.Jd(a.d0,a.gG.iS);e=Lg(NH(CV(),d))/1.0E9;a.mw.B1();f=a.tV;g=a.mw;h=Bid.IB();i=K();Fl(I(Fl(I(V(I(i,B(666)),h),B(667)),c),B(668)),e);f.D7(g,Q(i),0.0,20.0);a.mw.eF();}
function ALH(a){var b;Bif.vu(a);a.gG=Bcx(48.0,32.0);a.gG.lj.cF(0.0,15.0,0.0);a.mU=Bbg();a.d0=BaP(Ec(0.0,(-10.0)),1);b=ADM();a.nS=a.d0.sf(b);a.LQ(a.d0);a.mw=Bc9();a.tV=Beq(Big.AQ(B(669)),0);}
function A2V(a){a.mU.be();a.d0.be();a.mU=null;a.d0=null;a.fb=null;a.db=null;}
function AQW(a,b){return 0;}
function AJf(a,b){return 0;}
function A$a(a,b){return 0;}
function AUu(a,b,c,d,e){var f,g;a.gG.Ba(a.cX.cF(b,c,0.0));a.db=null;a.d0.FL(a.xw,a.cX.F-9.999999747378752E-5,a.cX.G-9.999999747378752E-5,a.cX.F+9.999999747378752E-5,a.cX.G+9.999999747378752E-5);if(a.db===a.nS)a.db=null;if(a.db!==null){f=a.db.nT();DP();if(f===BjU)return 0;}if(a.db!==null){g=BaH();g.id=a.nS;g.ic=a.db;g.pr=1;g.mt.bN(a.cX.F,a.cX.G);g.nk=1000.0*a.db.Cp();a.fb=a.d0.Fp(g);a.db.D8(1);}return 0;}
function AWO(a,b,c,d){if(a.fb!==null){a.gG.Ba(a.cX.cF(b,c,0.0));a.fb.Dn(a.yp.bN(a.cX.F,a.cX.G));}return 0;}
function AR0(a,b,c,d,e){if(a.fb!==null){a.d0.BR(a.fb);a.fb=null;}return 0;}
function APX(a,b,c){return 0;}
function AVf(a,b,c){return 0;}
function A2W(a){}
function A72(a){}
function A9l(a,b,c){}
function A6f(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=ADM();d=b.sf(c);e=Bdk();e.K0(Ec((-40.0),0.0),Ec(40.0,0.0));d.AM(e,0.0);e.be();f=0.5;e=Bao();e.Iw(f,f);g=Ec((-7.0),0.75);h=Z();i=Ec(0.5625,1.25);j=Ec(1.125,0.0);k=0;while(k<20){h.c9(g);l=k;while(l<20){c=ADM();DP();c.rF=BlO;c.lE.c9(h);m=b.sf(c);m.AM(e,5.0);h.q2(j);l=l+1|0;}g.q2(i);k=k+1|0;}}
var AF5=D(Bz);
function Bcp(){var a=new AF5();ANT(a);return a;}
function ANT(a){Cu(a);}
function A6l(a,b,c,d){var e;e=!d.jr()?d.D():c.i();if(b<e)return (-1);d.dt=1;d.KI=1;return a.j.c(b,c,d);}
function AWl(a,b){return 0;}
function AMI(a){return B(670);}
function AEs(){var a=this;C.call(a);a.qp=0;a.e7=null;a.f0=null;a.tC=0.0;a.qG=0;a.r7=0;a.hS=0;}
function G1(){var a=new AEs();A4b(a);return a;}
function BpX(a,b){var c=new AEs();ABy(c,a,b);return c;}
function A4b(a){ABy(a,51,0.800000011920929);}
function ABy(a,b,c){var d;L(a);if(c>0.0&&c<1.0){a.tC=c;d=Hx(b,c);a.qG=d*c|0;a.hS=d-1|0;a.r7=C6(O(a.hS));a.e7=Bc(C,d);a.f0=Bf(d);return;}G(Bo((((K()).h(B(254))).dM(c)).d()));}
function APB(a,b){return T(BT(Bu(O(b.cq()),Bx(2135587861, 2654435769)),a.r7));}
function AZL(a,b){var c,d,e;if(b===null)G(Bo(B(626)));c=a.e7;d=a.gL(b);while(true){e=c.data[d];if(e===null)return  -(d+1|0)|0;if(e.K(b))break;d=(d+1|0)&a.hS;}return d;}
function AS3(a,b,c){var d,e;d=a.gv(b);if(d>=0){a.f0.data[d]=c;return;}e= -(d+1|0)|0;a.e7.data[e]=b;a.f0.data[e]=c;e=a.qp+1|0;a.qp=e;if(e>=a.qG)Wl(a,a.e7.data.length<<1);}
function ABW(a,b,c){var d,e,f;d=a.e7;e=a.gL(b);while(true){f=d.data;if(f[e]===null)break;e=(e+1|0)&a.hS;}f[e]=b;a.f0.data[e]=c;}
function AYT(a,b,c){var d;d=a.gv(b);if(d>=0)c=a.f0.data[d];return c;}
function Wl(a,b){var c,d,e,f,g;a:{c=a.e7.data.length;a.qG=b*a.tC|0;a.hS=b-1|0;a.r7=C6(O(a.hS));d=a.e7;e=a.f0;a.e7=Bc(C,b);a.f0=Bf(b);if(a.qp>0){f=0;while(true){if(f>=c)break a;g=d.data[f];if(g!==null)ABW(a,g,e.data[f]);f=f+1|0;}}}}
function AGb(){var a=this;EV.call(a);a.DX=0;a.lY=0;}
function A35(a,b){var c=new AGb();A2F(c,a,b);return c;}
function Bd4(a,b,c,d,e,f,g){var h=new AGb();PG(h,a,b,c,d,e,f,g);return h;}
function A2F(a,b,c){PG(a,0,b,Cw(b),0,b,c,0);}
function PG(a,b,c,d,e,f,g,h){YV(a,b,c,d,e,f);a.DX=g;a.lY=h;}
function AHy(a,b){var c,d,e;if(b>=0&&b<a.T)return a.u.data[a.bE+b|0];c=new Bv;d=a.T;e=K();Bi(V(I(V(I(e,B(264)),b),B(54)),d),41);BC(c,Q(e));G(c);}
function APC(a){var b,c,d,e,f,g,h,i;if(a.lY)G(Dj());a:{b=Be(a);if(a.y>0){c=a.bE;d=a.bE+a.y|0;e=0;while(true){if(e>=b)break a;f=a.u.data;g=c+1|0;h=a.u.data;i=d+1|0;f[c]=h[d];e=e+1|0;c=g;d=i;}}}a.y=b;a.T=a.fZ;a.eC=(-1);return a;}
function AUa(a){return a.lY;}
function A_f(a){var b,c;b=Be(a)/2|0;c=a.fJ;E3();if(c!==Bni)return BfY(a.bE+a.y|0,b,a,0,b,a.bZ());return BcZ(a.bE+a.y|0,b,a,0,b,a.bZ());}
function A82(a,b){var c,d,e,f,g,h,i;if(b>=0&&(b+3|0)<a.T){c=a.u.data[a.bE+b|0]&255;d=a.u.data[(a.bE+b|0)+1|0]&255;e=a.u.data[(a.bE+b|0)+2|0]&255;f=a.u.data[(a.bE+b|0)+3|0]&255;g=a.fJ;E3();if(g!==Bni)return f<<24|e<<16|d<<8|c;return c<<24|d<<16|e<<8|f;}g=new Bv;h=a.T-3|0;i=K();Bi(V(I(V(I(i,B(264)),b),B(54)),h),41);BC(g,Q(i));G(g);}
function AMq(a,b,c){var d,e,f;if(a.lY)G(Dj());if(b>=0&&(b+3|0)<a.T){d=a.fJ;E3();if(d!==Bni){a.u.data[a.bE+b|0]=c<<24>>24;a.u.data[(a.bE+b|0)+1|0]=c>>8<<24>>24;a.u.data[(a.bE+b|0)+2|0]=c>>16<<24>>24;a.u.data[(a.bE+b|0)+3|0]=c>>24<<24>>24;}else{a.u.data[a.bE+b|0]=c>>24<<24>>24;a.u.data[(a.bE+b|0)+1|0]=c>>16<<24>>24;a.u.data[(a.bE+b|0)+2|0]=c>>8<<24>>24;a.u.data[(a.bE+b|0)+3|0]=c<<24>>24;}return a;}d=new Bv;e=a.T-3|0;f=K();Bi(V(I(V(I(f,B(264)),b),B(54)),e),41);BC(d,Q(f));G(d);}
function AVU(a){var b,c;b=Be(a)/4|0;c=a.fJ;E3();if(c!==Bni)return Be9(a.bE+a.y|0,b,a,0,b,a.bZ());return Bdu(a.bE+a.y|0,b,a,0,b,a.bZ());}
function AQa(a){var b,c;b=Be(a)/4|0;c=a.fJ;E3();if(c!==BnL)return BfF(a.bE+a.y|0,b,a,0,b,a.bZ());return A_Z(a.bE+a.y|0,b,a,0,b,a.bZ());}
function Md(){var a=this;C.call(a);a.kD=null;a.qm=0.0;}
function AR6(a,b){var c=new Md();AMv(c,a,b);return c;}
function AMv(a,b,c){L(a);a.kD=X();a.qm=0.0;(a.kD.ds(b)).fY();a.qm=c;}
function A4i(a,b,c,d){(((a.kD.ds(b)).pW(c)).Df(c.F-d.F,c.G-d.G,c.M-d.M)).fY();a.qm= -b.Ek(a.kD);}
function Wy(){Cl.call(this);this.y_=null;}
function BcH(a,b,c){var d=new Wy();A5n(d,a,b,c);return d;}
function A5n(a,b,c,d){a.y_=b;G9(a,c,d);}
function A8X(a){return Bee(a.y_,Bd);}
function A8i(a){return a.KR();}
function Wx(){Cl.call(this);this.yJ=null;}
function BeV(a,b,c){var d=new Wx();A3x(d,a,b,c);return d;}
function A3x(a,b,c,d){a.yJ=b;G9(a,c,d);}
function A78(a){return BdR(a.yJ,Bd);}
function AYG(a){return a.FT();}
var M9=D(BX);
var BpY=null;function A9S(){A9S=M(M9);AWM();}
function BfC(a){var b=new M9();V2(b,a);return b;}
function Bfa(){var a=new M9();S4(a);return a;}
function V2(a,b){A9S();B6(a);}
function S4(a){A9S();B6(a);}
function ASt(a){var b;b=AF0(T(a.C));A4n();Bmp.bb(O(b));return Bmp;}
function A2y(a,b){var c,d;c=T(a.C);d=T((b.bk()));YC(c,d);}
function AZq(a){var b;b=Pd(T(a.C));ACf();BpA.bb(O(b));return BpA;}
function AWM(){BpY=BfC(0);}
function AF0(b){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Contact);var returnedJSObj=jsObj.GetManifold();return $rt_globals.Box2D.getPointer(returnedJSObj);}
function YC(b,c){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Contact);jsObj.GetWorldManifold(c);}
function Pd(b){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Contact);var returnedJSObj=jsObj.GetFixtureA();return $rt_globals.Box2D.getPointer(returnedJSObj);}
var Lk=D(0);
function G2(){var a=this;C.call(a);a.e4=null;a.bS=null;a.hV=null;}
var BpZ=null;var Bp0=null;var Bp1=null;function AN2(){AN2=M(G2);A3R();}
function Bfd(){var a=new G2();YH(a);return a;}
function YH(a){var b;AN2();L(a);a.e4=Bc(Md,6);a.bS=H(DT,[X(),X(),X(),X(),X(),X(),X(),X()]);a.hV=Cf(24);b=0;while(b<6){a.e4.data[b]=AR6(X(),0.0);b=b+1|0;}}
function A6c(a,b){var c,d,e,f,g,h;AN2();BZ(Bp0,0,a.hV,0,Bp0.data.length);Wr(b.a,a.hV,0,8,3);c=0;d=0;while(c<8){e=a.bS.data[c];f=a.hV.data;g=d+1|0;e.F=f[d];f=a.hV.data;h=g+1|0;e.G=f[g];f=a.hV.data;d=h+1|0;e.M=f[h];c=c+1|0;}a.e4.data[0].gN(a.bS.data[1],a.bS.data[0],a.bS.data[2]);a.e4.data[1].gN(a.bS.data[4],a.bS.data[5],a.bS.data[7]);a.e4.data[2].gN(a.bS.data[0],a.bS.data[4],a.bS.data[3]);a.e4.data[3].gN(a.bS.data[5],a.bS.data[1],a.bS.data[6]);a.e4.data[4].gN(a.bS.data[2],a.bS.data[3],a.bS.data[6]);a.e4.data[5].gN(a.bS.data[4],
a.bS.data[0],a.bS.data[1]);}
function A3R(){var b,c,d,e,f,g,h,i;BpZ=H(DT,[CQ((-1.0),(-1.0),(-1.0)),CQ(1.0,(-1.0),(-1.0)),CQ(1.0,1.0,(-1.0)),CQ((-1.0),1.0,(-1.0)),CQ((-1.0),(-1.0),1.0),CQ(1.0,(-1.0),1.0),CQ(1.0,1.0,1.0),CQ((-1.0),1.0,1.0)]);Bp0=Cf(24);b=0;c=BpZ.data;d=c.length;e=0;while(e<d){f=c[e];g=Bp0.data;h=b+1|0;g[b]=f.F;g=Bp0.data;i=h+1|0;g[h]=f.G;g=Bp0.data;b=i+1|0;g[i]=f.M;e=e+1|0;}Bp1=X();}
function NL(){var a=this;C.call(a);a.xF=null;a.zY=null;}
var Bp2=null;function BeR(){BeR=M(NL);ASJ();}
function Bad(a,b){var c=new NL();AGa(c,a,b);return c;}
function AGa(a,b,c){BeR();L(a);a.xF=X();a.zY=X();a.xF.ds(b);(a.zY.ds(c)).fY();}
function ASJ(){Bp2=X();}
var AE$=D(CD);
function ACT(){var a=this;C.call(a);a.bq=null;a.jl=0;a.eR=null;a.dN=null;a.bD=null;a.bC=null;a.kS=null;a.kT=null;a.mR=null;a.jA=0;a.h9=null;a.lv=0;a.k_=null;a.lM=null;a.DA=null;a.br=null;a.e1=Bd;a.g5=0;}
function BdB(a){var b=new ACT();ARq(b,a);return b;}
function AVw(b){var c,d,e,f,g;c=AZ4();d=0.0;e=b.detail;f=b.wheelDelta;if(c.firefox?1:0)d=(c.macOS?1:0)?1.0*e:1.0*e/3.0;else if(c.opera?1:0)d=!(c.linux?1:0)?(-1.0)*f/40.0:(-1.0)*f/80.0;else if(!(!(c.chrome?1:0)&&!(c.safari?1:0)&&!(c.IE?1:0))){d=(-1.0)*f;g=d/120.0;if(GW(g)>=1.0)d=g;else if(!(c.windows?1:0))d=!(c.macOS?1:0)?g:d/3.0;}return d;}
function ARq(a,b){L(a);a.jl=0;a.eR=BdC(20);a.dN=OZ(20);a.bD=Bf(20);a.bC=Bf(20);a.kS=Bf(20);a.kT=Bf(20);a.mR=A9q();a.jA=0;a.h9=OZ(256);a.lv=0;a.k_=OZ(256);a.lM=OZ(5);a.DA=A9q();a.g5=1;a.bq=b;ACQ(a);}
function ACQ(a){var b;b=a.bq.ownerDocument;b.addEventListener("mousedown",B4(a,"handleEvent"),!!0);b.addEventListener("mouseup",B4(a,"handleEvent"),!!0);b.addEventListener("mousemove",B4(a,"handleEvent"),!!0);b.addEventListener("wheel",B4(a,"handleEvent"),!!0);b.addEventListener("keydown",B4(a,"handleEvent"),!!0);b.addEventListener("keyup",B4(a,"handleEvent"),!!0);b.addEventListener("keypress",B4(a,"handleEvent"),!!0);a.bq.addEventListener("touchstart",B4(a,"handleEvent"),!!1);a.bq.addEventListener("touchmove",
B4(a,"handleEvent"),!!1);a.bq.addEventListener("touchcancel",B4(a,"handleEvent"),!!1);a.bq.addEventListener("touchend",B4(a,"handleEvent"),!!1);}
function A84(a,b){AC2(a,b);Pk(a,b);}
function AC2(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;a:{c=$rt_str(b.type);if(c.K(B(671))){$rt_globals.window.focus();d=b;e=b.target;f=a.bq;g=e!==f?0:1;if(g&&!a.dN.data[0]){a.g5=1;a.jl=1;a.dN.data[0]=1;h=Iy(d.button);a.mR.ER(h);a.lM.data[h]=1;a.kS.data[0]=0;a.kT.data[0]=0;if(!a.py()){i=a.h1(d,a.bq);j=a.h4(d,a.bq);a.bD.data[0]=i;a.bC.data[0]=j;}else{k=a.bD.data;k[0]=k[0]+Gi(a,d)|0;k=a.bC.data;k[0]=k[0]+FQ(a,d)|0;}a.e1=CV();if(a.br!==null)a.br.sN(a.bD.data[0],a.bC.data[0],0,Iy(d.button));b.preventDefault();b.stopPropagation();break a;}l
=a.h1(d,a.bq);m=a.h4(d,a.bq);if(!(l>=0.0&&l<=Bid.bp()&&m>=0.0&&m<=Bid.bl()))a.g5=0;return;}if(c.K(B(672))){d=b;if(!a.dN.data[0])return;a.mR.Ik(Iy(d.button));k=a.dN;k.data[0]=a.mR.dJ<=0?0:1;if(a.py()){a.fw(0,Gi(a,d)|0,FQ(a,d)|0);k=a.bD.data;k[0]=k[0]+Gi(a,d)|0;k=a.bC.data;k[0]=k[0]+FQ(a,d)|0;}else{a.fw(0,a.h1(d,a.bq)-a.bD.data[0]|0,a.h4(d,a.bq)-a.bC.data[0]|0);a.bD.data[0]=a.h1(d,a.bq);a.bC.data[0]=a.h4(d,a.bq);}a.e1=CV();a.dN.data[0]=0;if(a.br!==null)a.br.q6(a.bD.data[0],a.bC.data[0],0,Iy(d.button));}else if
(!c.K(B(673))){if(c.K(B(674))){n=b;if(a.br!==null){o=AVw(n);a.br.He(0.0,o|0);}a.e1=CV();}else if(c.K(B(675))){a.jl=1;p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;v=a.eR;w=AFZ(a);v.GA(u,Bb(w));a.dN.data[w]=1;a.bD.data[w]=a.is(t,a.bq);a.bC.data[w]=a.ib(t,a.bq);a.kS.data[w]=0;a.kT.data[w]=0;if(a.br!==null)a.br.sN(a.bD.data[w],a.bC.data[w],w,0);r=r+1|0;}a.e1=CV();b.preventDefault();}}else{d=b;if(a.py()){a.fw(0,Gi(a,d)|0,FQ(a,d)|0);k=a.bD.data;k[0]=k[0]+Gi(a,d)|0;k=a.bC.data;k[0]=k[0]
+FQ(a,d)|0;}else{i=a.h1(d,a.bq);j=a.h4(d,a.bq);a.fw(0,i-a.bD.data[0]|0,j-a.bC.data[0]|0);a.bD.data[0]=i;a.bC.data[0]=j;}a.e1=CV();if(a.br!==null){if(!a.dN.data[0])a.br.Cc(a.bD.data[0],a.bC.data[0]);else a.br.v6(a.bD.data[0],a.bC.data[0],0);}}}if(c.K(B(676))){p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;x=(a.eR.X(u)).p2();a.fw(x,a.is(t,a.bq)-a.bD.data[x]|0,a.ib(t,a.bq)-a.bC.data[x]|0);a.bD.data[x]=a.is(t,a.bq);a.bC.data[x]=a.ib(t,a.bq);if(a.br!==null)a.br.v6(a.bD.data[x],a.bC.data[x],
x);r=r+1|0;}a.e1=CV();b.preventDefault();}if(c.K(B(677))){p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;x=(a.eR.X(u)).p2();a.eR.ka(u);a.dN.data[x]=0;i=a.is(t,a.bq);j=a.ib(t,a.bq);a.fw(x,i-a.bD.data[x]|0,j-a.bC.data[x]|0);a.bD.data[x]=i;a.bC.data[x]=j;if(a.br!==null)a.br.q6(a.bD.data[x],a.bC.data[x],x,0);r=r+1|0;}a.e1=CV();b.preventDefault();}if(c.K(B(678))){p=b;q=p.changedTouches;r=0;s=q.length;while(r<s){t=q.item(r);u=t.identifier;x=(a.eR.X(u)).p2();a.eR.ka(u);a.dN.data[x]=0;i
=a.is(t,a.bq);j=a.ib(t,a.bq);a.fw(x,i-a.bD.data[x]|0,j-a.bC.data[x]|0);a.bD.data[x]=i;a.bC.data[x]=j;if(a.br!==null)a.br.q6(a.bD.data[x],a.bC.data[x],x,0);r=r+1|0;}a.e1=CV();b.preventDefault();}}
function Pk(a,b){var c,d,e,f,g;c=$rt_str(b.type);if(!(c.K(B(679))&&a.g5)){if(c.K(B(680))&&a.g5){d=b;e=d.charCode&65535;if(a.br!==null)a.br.wU(e);if(e==9){b.preventDefault();b.stopPropagation();}}else if(c.K(B(681))&&a.g5){d=b;f=TC(d.keyCode);if(a.h9.data[f]){a.jA=a.jA-1|0;a.h9.data[f]=0;}if(a.br!==null)a.br.G4(f);if(f==61){b.preventDefault();b.stopPropagation();}}}else{a:{d=b;f=TC(d.keyCode);g=0;switch(f){case 67:g=8;break a;case 112:g=127;break a;default:}}if(!(f!=67&&f!=112)){b.preventDefault();if(a.br!==
null){a.br.xg(f);a.br.wU(g);}}else if(!a.h9.data[f]){a.jA=a.jA+1|0;a.h9.data[f]=1;a.lv=1;a.k_.data[f]=1;if(a.br!==null)a.br.xg(f);}if(f==61){b.preventDefault();b.stopPropagation();}}}
function AFZ(a){var b;b=0;while(true){if(b>=20)return (-1);if(!a.eR.Bt(Bb(b),0))break;b=b+1|0;}return b;}
function ANJ(a){var b;a:{if(a.jl){a.jl=0;b=0;while(true){if(b>=a.lM.data.length)break a;a.lM.data[b]=0;b=b+1|0;}}}b:{if(a.lv){a.lv=0;b=0;while(true){if(b>=a.k_.data.length)break b;a.k_.data[b]=0;b=b+1|0;}}}}
function ANp(a,b,c,d){a.kS.data[b]=c;a.kT.data[b]=d;}
function Gi(a,b){return b.movementX;}
function FQ(a,b){return b.movementY;}
function Ns(a,b){var c,d;c=$rt_str(b.compatMode);d=c.K(B(682));if(d)b=b.documentElement;return b;}
function HO(a,b){var c;c=b.scrollTop;return H8(c);}
function LV(a,b){var c;c=Ns(a,b);return HO(a,c);}
function IR(a,b){var c;c=b.scrollLeft;return H8(c);}
function K6(a,b){var c;c=Ns(a,b);return IR(a,c);}
function XO(a,b,c){var d;d=(c.clientX-N_(a,b)|0)+IR(a,b)|0;d=d+K6(a,b.ownerDocument)|0;return d;}
function ADs(a,b,c){var d;d=(c.clientY-OV(a,b)|0)+HO(a,b)|0;d=d+LV(a,b.ownerDocument)|0;return d;}
function AOX(a,b,c){var d,e;d=c.width*1.0/M$(a,c);e=d*(((b.clientX-N_(a,c)|0)+IR(a,c)|0)+K6(a,c.ownerDocument)|0);return Dr(e);}
function ASM(a,b,c){var d,e;d=c.height*1.0/L$(a,c);e=d*(((b.clientY-OV(a,c)|0)+HO(a,c)|0)+LV(a,c.ownerDocument)|0);return Dr(e);}
function A17(a,b,c){var d;d=c.width*1.0/M$(a,c);return Dr(d*XO(a,c,b));}
function ASo(a,b,c){var d;d=c.height*1.0/L$(a,c);return Dr(d*ADs(a,c,b));}
function M$(a,b){return b.clientWidth;}
function L$(a,b){return b.clientHeight;}
function OV(a,b){return H8(UR(a,b));}
function UR(a,b){var c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollTop;d=d.parentNode;}while(b!==null){c=c+b.offsetTop;b=d.offsetParent;}return c;}
function N_(a,b){return H8(P2(a,b));}
function P2(a,b){var c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollLeft;d=d.parentNode;}while(b!==null){c=c+b.offsetLeft;b=d.offsetParent;}return c;}
function H8(b){return b|0;}
function ALB(a,b){a.br=b;}
function AQD(a){return 0;}
function AIn(a,b){a.cC(b);}
var AE_=D(CD);
var R4=D(Bk);
function BaS(){var a=new R4();A$A(a);return a;}
function A$A(a){Cv(a);}
function ABa(){Dn.call(this);this.kZ=null;}
function Bfv(a){var b=new ABa();AIN(b,a);return b;}
function AIN(a,b){ES(a);a.kZ=Z();a.bL=AMi(0);a.bL.bb(b);}
function A5w(a){var b;b=a.bL.Fg();a.kZ.w=b.cQ();a.kZ.v=b.cM();return a.kZ;}
var AEe=D();
function XL(){var a=this;C.call(a);a.uo=null;a.nJ=null;}
function BfA(a,b){var c=new XL();ARL(c,a,b);return c;}
function ARL(a,b,c){a.nJ=b;a.uo=c;L(a);}
function A6G(a){a.nJ.kr.yS=Bfi(a.uo);Bie=a.nJ.kr.yS;}
function A6U(a){}
function A1A(a){a.Da();}
function A26(a){a.Cg();}
var W5=D(Bl);
function Beb(){var a=new W5();AXC(a);return a;}
function AXC(a){CL(a);}
var W6=D(Bl);
function Ba6(){var a=new W6();AM1(a);return a;}
function AM1(a){CL(a);}
var W7=D(Bl);
function Bdc(){var a=new W7();AUf(a);return a;}
function AUf(a){CL(a);}
var W8=D(Bl);
function A_U(){var a=new W8();ASP(a);return a;}
function ASP(a){CL(a);}
var Vb=D(Bp);
var W9=D(Cl);
function BdK(){var a=new W9();A1K(a);return a;}
function A1K(a){AFi(a);}
var AG$=D();
function BaC(b){var c;c=BcP(B(683));c.hs=0;c.gF=0;AAe(new Jr,BaQ(),c);}
var Ld=D(0);
var AFG=D();
var M0=D();
var GP=D(BX);
var BhT=null;var Bmt=null;var Bmu=null;function Cs(){Cs=M(GP);AW9();}
function Td(){var a=new GP();Ri(a);return a;}
function Bbb(a){var b=new GP();ABw(b,a);return b;}
function Ri(a){Cs();B6(a);a.cD(O(ABx()),1);}
function ABw(a,b){Cs();B6(a);a.cD(Bd,0);}
function A0h(a,b,c){Sl(T(a.C),b,c);}
function A3L(a){return Vy(T(a.C));}
function AV_(a,b){ADu(T(a.C),b);}
function AT7(a){return ZP(T(a.C));}
function A7N(a,b){U6(T(a.C),b);}
function AW9(){BhT=Bbb(0);Bmt=Td();Bmu=Td();}
function ABx(){var jsObj=new $rt_globals.Box2D.b2Vec2();return $rt_globals.Box2D.getPointer(jsObj);}
function Sl(b,c,d){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Vec2);jsObj.Set(c,d);}
function Vy(b){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Vec2);var returnedJSObj=jsObj.x;return returnedJSObj;}
function ADu(b,c){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Vec2);jsObj.x=c;}
function ZP(b){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Vec2);var returnedJSObj=jsObj.y;return returnedJSObj;}
function U6(b,c){var jsObj=$rt_globals.Box2D.wrapPointer(b,$rt_globals.Box2D.b2Vec2);jsObj.y=c;}
var GX=D();
var Bp3=null;var Bp4=null;var Bp5=null;function D6(){var b;if(Bp3===null){b=new HZ;AVc();OF(b,BnO,0);Bp3=b;}return Bp3;}
function VX(){var b;if(Bp4===null){b=new HZ;A4z();OF(b,Ble,0);Bp4=b;}return Bp4;}
function BZ(b,c,d,e,f){var g,h,i,j,k,l,m,n;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=AEh(b)){g=e+f|0;if(g<=AEh(d)){a:{b:{if(b!==d){h=(CW(b)).hj();i=(CW(d)).hj();if(h!==null&&i!==null){if(h===i)break b;if(!h.fF()&&!i.fF()){j=b;k=0;g=c;while(k<f){l=j.data;m=g+1|0;n=l[g];if(!i.sU(n)){NO(b,c,d,e,k);G(RH());}k=k+1|0;g=m;}NO(b,c,d,e,f);return;}if(!h.fF())break a;if(i.fF())break b;else break a;}G(RH());}}NO(b,c,d,e,f);return;}G(RH());}}G(Dl());}G(AR3(B(684)));}
function NO(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Ow(){return Long_fromNumber(new Date().getTime());}
function AAM(){var b;if(Bp5===null){b=Bbs();b.s(B(685),B(686));b.s(B(17),B(687));b.s(B(688),B(47));b.s(B(689),B(267));b.s(B(690),A0S());b.s(B(691),ATB());b.s(B(692),B(686));b.s(B(693),A$2());Bp5=Bbx(b);}}
function ATB(){return B(694);}
function A$2(){return B(47);}
function HF(b){AAM();return Bp5.zk(b);}
function GY(b,c){AAM();return Bp5.s(b,c);}
function ARY(){return BgH($rt_globals.performance.now()*1000000.0);}
function A0S(){return B(266);}
var ZZ=D(W);
function Bdv(){var a=new ZZ();AJo(a);return a;}
function AJo(a){Bs(a);}
function AUX(a){return (((C0()).bu(48,57)).bu(97,102)).bu(65,70);}
function ACA(){var a=this;C.call(a);a.Cm=null;a.Ak=null;a.d5=null;a.bw=null;a.gP=0;a.hz=0;a.mh=0;a.kE=null;a.n5=null;a.d9=null;}
function BaU(a,b){var c=new ACA();AHq(c,a,b);return c;}
function AAQ(a,b,c){a.n5=AD1(a,c);b.xH(a.d5.du(a.mh,Mq(a)));b.D0(a.n5);a.mh=Nu(a);return a;}
function AD1(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$$je;if(a.kE!==null&&a.kE.K(b)){if(a.d9===null)return a.n5;c=K();d=0;while(d<a.d9.cx()){c.e2(a.d9.X(d));d=d+1|0;}return c.d();}a.kE=b;e=b.k8();f=K();a.d9=null;g=0;h=0;i=0;a:{b:while(true){j=e.data;k=j.length;if(g>=k){if(a.d9!==null&&h!=f.i())a.d9.gl(f.du(h,f.i()));return f.d();}if(j[g]==92&&!i){i=1;g=g+1|0;}c:{if(i){if(g>=k)break b;f.bi(j[g]);i=0;}else if(j[g]!=36)f.bi(j[g]);else{if(a.d9===null)a.d9=UK();d:{try{l=new BL;g=g+1|0;O2(l,e,g,1);m=BU(l);if(h==f.i())break d;a.d9.gl(f.du(h,
f.i()));h=f.i();break d;}catch($$e){$$je=Bn($$e);if($$je instanceof Ce){break a;}else{throw $$e;}}}try{a.d9.gl(BbB(a,m));n=Fs(a,m);h=h+n.i()|0;f.h(n);break c;}catch($$e){$$je=Bn($$e);if($$je instanceof Ce){break a;}else{throw $$e;}}}}g=g+1|0;}G(Dl());}G(Bo(B(46)));}
function AEX(a){a.gP=0;a.hz=a.d5.i();a.bw.qU(a.d5,a.gP,a.hz);a.mh=0;a.kE=null;a.bw.fU=(-1);return a;}
function AFJ(a,b){return b.xH(a.d5.du(a.mh,a.d5.i()));}
function AGy(a,b){var c;c=A7t();AEX(a);while(Fj(a)){AAQ(a,c,b);}return (AFJ(a,c)).d();}
function Fs(a,b){return a.bw.xS(b);}
function J$(a,b){var c,d;c=a.d5.i();if(b>=0&&b<=c){d=AEA(a,b);if(d>=0&&a.bw.GQ()){a.bw.HW();return 1;}a.bw.dw=(-1);return 0;}G(Dh(JF(b)));}
function AEA(a,b){var c;a.bw.cV();a.bw.mX(1);a.bw.Cu(b);c=a.Ak.ci(b,a.d5,a.bw);if(c==(-1))a.bw.dt=1;return c;}
function Fj(a){var b,c;b=a.d5.i();if(!P6(a))b=a.hz;if(a.bw.dw>=0&&a.bw.yh()==1){a.bw.dw=a.bw.m2();if(a.bw.m2()==a.bw.tl()){c=a.bw;c.dw=c.dw+1|0;}return a.bw.dw<=b&&J$(a,a.bw.dw)?1:0;}return J$(a,a.gP);}
function XS(a,b){return a.bw.jo(b);}
function PK(a,b){return a.bw.mn(b);}
function Mq(a){return XS(a,0);}
function Nu(a){return PK(a,0);}
function P6(a){return a.bw.jr();}
function AHq(a,b,c){var d,e,f,g,h;L(a);a.gP=(-1);a.hz=(-1);a.Cm=b;a.Ak=b.oX;a.d5=c;a.gP=0;a.hz=a.d5.i();d=new Os;e=a.gP;f=a.hz;g=YA(b);h=AFU(b);Un(d,c,e,f,g,h,UN(b));a.bw=d;a.bw.LS(1);}
var WG=D(BO);
function BcF(){var a=new WG();A55(a);return a;}
function A55(a){CY(a);}
function AVo(a,b,c,d){var e,f,g,h,i;e=d.D();f=b+1|0;if(f>e){d.dt=1;return (-1);}g=c.f(b);if(Cb(g)){h=b+2|0;if(h<=e){i=c.f(f);if(G_(g,i))return a.j.c(h,c,d);}}return a.j.c(f,c,d);}
function AK6(a){return B(695);}
function AYI(a,b){a.j=b;}
function A5Z(a){return (-2147483602);}
function AYE(a,b){return 1;}
var Rj=D();
var X7=D(W);
function A_Y(){var a=new X7();AR7(a);return a;}
function AR7(a){Bs(a);}
function AWx(a){var b;b=Bdn(a);b.ba=1;return b;}
function M5(){var a=this;BO.call(a);a.e6=null;a.rW=null;a.iW=0;}
function A9v(a,b){var c=new M5();AW7(c,a,b);return c;}
function AW7(a,b,c){CY(a);a.e6=b;a.iW=c;}
function APt(a,b){a.j=b;}
function H0(a){if(a.rW===null)a.rW=MH(a.e6);return a.rW;}
function ASr(a){var b,c;b=H0(a);c=K();I(I(c,B(696)),b);return Q(c);}
function AHx(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;e=d.D();f=0;g=Bf(3);h=(-1);i=(-1);if(b>=e)return (-1);j=b+1|0;k=c.f(b);l=AKO(k);if(l!==null){m=l.data;n=0;if(m.length!=a.iW)return (-1);while(true){if(n>=a.iW)return a.j.c(j,c,d);if(m[n]!=a.e6.data[n])break;n=n+1|0;}return (-1);}o=g.data;o[f]=k;p=k-4352|0;if(p>=0&&p<19){if(j<e){k=c.f(j);h=k-4449|0;}if(h>=0&&h<21){q=j+1|0;o[1]=k;if(q<e){k=c.f(q);i=k-4519|0;}if(i>=0&&i<28){r=q+1|0;o[2]=k;r=a.iW==3&&o[0]==a.e6.data[0]&&o[1]==a.e6.data[1]&&o[2]==a.e6.data[2]
?a.j.c(r,c,d):(-1);return r;}r=a.iW==2&&o[0]==a.e6.data[0]&&o[1]==a.e6.data[1]?a.j.c(q,c,d):(-1);return r;}return (-1);}return (-1);}
function AYF(a,b){var c,d;a:{if(b instanceof M5){c=b;if(!(H0(c)).K(H0(a))){d=0;break a;}}d=1;}return d;}
function ATR(a,b){return 1;}
var NG=D();
var QC=D(B_);
function Kz(){var a=this;C.call(a);a.Z=null;a.W=null;a.dr=0.0;a.k$=0.0;a.kj=0.0;}
function Bp6(){var a=new Kz();A1C(a);return a;}
function A1C(a){L(a);a.Z=CG();a.W=UE();}
function AXv(a,b){var c;a.Z.nR(b.Z);if(a.W.C4()){c=a.W;c.Y=c.Y-1|0;}a.W.s9(b.W);}
function AOu(a){a.Z.bz();a.W.bz();}
function AIy(a){var b,c,d,e,f;b=GS(a.Z.k+32|0);c=a.Z;d=0;e=c.k;while(d<e){f=c.X(d);b.bi(f.e_&65535);d=d+1|0;}b.h(B(310));b.dM(a.dr);b.h(B(310));b.dM(a.k$);b.h(B(310));b.dM(a.kj);return b.d();}
var MS=D(Dw);
var Oo=D(EP);
var E6=D(Y);
var Bp7=null;var Bp8=null;var Bp9=null;var Bp$=null;function Bbn(){Bbn=M(E6);A24();}
function AFh(a,b){var c=new E6();Rt(c,a,b);return c;}
function Rt(a,b,c){Bbn();BJ(a,b,c);}
function A24(){Bp7=AFh(B(697),0);Bp8=AFh(B(698),1);Bp9=AFh(B(699),2);Bp$=H(E6,[Bp7,Bp8,Bp9]);}
function RG(){Bz.call(this);this.vW=0;}
function A9c(a){var b=new RG();AN_(b,a);return b;}
function AN_(a,b){Cu(a);a.vW=b;}
function AYp(a,b,c,d){var e,f,g,h,i;e=b<d.D()?c.f(b):32;f=!b?32:c.f(b-1|0);g=!d.jr()?d.dA():0;h=e!=32&&!NA(a,e,b,g,c)?0:1;i=f!=32&&!NA(a,f,b-1|0,g,c)?0:1;return h^i^a.vW?(-1):a.j.c(b,c,d);}
function AYC(a,b){return 0;}
function A_y(a){return B(700);}
function NA(a,b,c,d,e){var f;if(!NJ(b)&&b!=95){a:{if(GN(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=e.f(c);if(NJ(f))return 0;if(GN(f)!=6)return 1;}}return 1;}return 0;}
var ABp=D();
var AEq=D();
function OE(b,c,d,e){var f;f=ASL(c);Ly(f);c.c4(0);f.tm(b,e,d);c.c4(0);if(!(c instanceof EV))c.c7(d);else c.c7(d<<2);}
function ASL(b){var c;c=null;if(b instanceof EV)c=b.p3();else if(b instanceof D9)c=b;if(c!==null)return c;G(BG(B(701)));}
function Ij(b){var c;if(!Jh())return AXa(Cf(b));c=GC(b*4|0);Gj(c,Fq());return c.p3();}
function Nf(b){var c;if(!Jh())return HX(Cw(b));c=GC(b);Gj(c,Fq());return c;}
function AEB(b){var c;if(!Jh())return A45(A0I(b));c=GC(b*2|0);Gj(c,Fq());return c.sZ();}
function G6(b){var c;if(!Jh())return A1U(Bf(b));c=GC(b*4|0);Gj(c,Fq());return c.u5();}
var I_=D(Du);
var Bp_=0.0;var Bqa=null;function Bqb(){Bqb=M(I_);AZp();}
function AZp(){Bp_=$rt_globals.NaN;Bqa=F($rt_doublecls());}
var Dz=D();
var Sq=D(Dz);
var Sm=D(Ix);
var Sn=D(Dz);
var So=D(Dz);
var Sp=D(Dz);
var Ub=D(Bp);
var KB=D(0);
var P8=D();
function APj(a,b,c){a.Qi($rt_str(b),Fz(c,"handleEvent"));}
function APJ(a,b,c){a.PG($rt_str(b),Fz(c,"handleEvent"));}
function AIP(a,b){return a.HE(b);}
function AQZ(a,b,c,d){a.Mb($rt_str(b),Fz(c,"handleEvent"),d?1:0);}
function AUt(a,b){return !!a.Ql(b);}
function AJW(a){return a.Kf();}
function AHL(a,b,c,d){a.Nj($rt_str(b),Fz(c,"handleEvent"),d?1:0);}
var C3=D();
var Bqc=null;var Bqd=null;var Bqe=null;var Bqf=null;var Bqg=null;var Bqh=null;var Bqi=null;var Bqj=null;var Bqk=null;function Bql(){Bql=M(C3);AKi();}
function AKi(){Bqc=NQ(0.0);Bqd=NQ(1.0);Bqe=Bb(0);Bqf=Bb(1);Bqg=Bqf;Bqh=Bb(2);Bqi=Bb(4);Bqj=Bb(8);Bqk=Bb(16);}
var PX=D();
var AEr=D(BI);
var Wi=D(JD);
var ADX=D(Ex);
function BfG(a,b,c){var d=new ADX();A1a(d,a,b,c);return d;}
function A1a(a,b,c,d){N1(a,b,c,d);}
function AIE(a,b,c,d){var e;e=a.j.c(b,c,d);if(e>=0)return e;return a.R.c(b,c,d);}
var AEk=D(W);
function BfT(){var a=new AEk();AJb(a);return a;}
function AJb(a){Bs(a);}
function ANL(a){return BaD(a);}
function ACZ(){var a=this;C.call(a);a.xE=0;a.Au=0;a.zU=null;}
function BbB(a,b){var c=new ACZ();AK5(c,a,b);return c;}
function AK5(a,b,c){a.zU=b;a.Au=c;L(a);a.xE=a.Au;}
function AO7(a){return Fs(a.zU,a.xE);}
var AG1=D(Ik);
var AA2=D(BI);
var Cg=D(Cp);
function Ev(){var a=new Cg();AXS(a);return a;}
function A4Z(a){var b=new Cg();DL(b,a);return b;}
function AXS(a){GE(a);}
function DL(a,b){Ew(a,b);}
function ACF(){var a=this;C.call(a);a.rJ=0;a.on=0;a.iF=0;a.tP=Bd;a.q4=null;a.ty=null;a.Aq=Bd;a.xP=null;}
function Bas(a,b,c,d){var e=new ACF();AOb(e,a,b,c,d);return e;}
function AOb(a,b,c,d,e){L(a);a.q4=b;a.ty=c;a.Aq=d;a.xP=e;}
function AD0(){var a=this;C.call(a);a.IS=0;a.mm=0;a.HD=null;a.oY=null;}
function BbL(){var a=new AD0();ALn(a);return a;}
function ALn(a){L(a);a.IS=0;a.mm=1;a.HD=Bet(a);a.oY=B(46);}
function AGX(b){if("clipboard" in $rt_globals.navigator){$rt_globals.navigator.clipboard.writeText(b);}}
var AGJ=D(CM);
var To=D(B_);
function AAG(){var a=this;C.call(a);a.m4=null;a.Jg=0;a.fv=0;a.e$=0;}
function Lx(a,b){var c=new AAG();AQh(c,a,b);return c;}
function AQh(a,b,c){L(a);a.e$=1;a.m4=b;a.Jg=c;}
function A3o(a){if(!a.e$)G(BG(B(35)));return a.fv>=a.m4.k?0:1;}
function AZv(a){var b,c;if(a.fv>=a.m4.k)G(Bc2(JF(a.fv)));if(!a.e$)G(BG(B(35)));b=a.m4.bc.data;c=a.fv;a.fv=c+1|0;return b[c];}
var Zf=D();
var UY=D(W);
function BaJ(){var a=new UY();APQ(a);return a;}
function APQ(a){Bs(a);}
function ASf(a){return BbY(a);}
var AEw=D(W);
function Bam(){var a=new AEw();AP5(a);return a;}
function AP5(a){Bs(a);}
function AWp(a){return BaA(a);}
var ADn=D();
var AAn=D(CI);
var PT=D(Ef);
var O3=D(Hl);
function Bqm(){var a=new O3();Wv(a);return a;}
function Wv(a){Qp(a);ANh(a);}
function ARK(a,b){var c;c=new $rt_globals.Float32Array(b);return c;}
function ASS(a,b){var c;c=new $rt_globals.Int32Array(b);return c;}
function AHS(a,b){var c;c=new $rt_globals.Int16Array(b);return c;}
function AXJ(a,b){var c;c=new $rt_globals.Int8Array(b);return c;}
function A9T(a,b){var c;c=new $rt_globals.Uint8Array(b);return c;}
function JG(){BO.call(this);this.fz=0;}
function A21(a){var b=new JG();AQS(b,a);return b;}
function AQS(a,b){CY(a);a.fz=b;}
function AYU(a,b){a.j=b;}
function AHI(a,b,c,d){var e,f,g,h,i;e=d.D();f=b+1|0;g=Cx(f,e);if(g>0){d.dt=1;return (-1);}h=c.f(b);if(g<0){i=c.f(f);if(B2(i))return (-1);}if(a.fz!=h)return (-1);return a.j.c(f,c,d);}
function A6W(a,b,c,d){var e,f,g;if(!(c instanceof BL))return GI(a,b,c,d);e=c;f=d.D();while(true){if(b>=f)return (-1);g=e.dQ(a.fz,b);if(g<0)return (-1);b=g+1|0;if(b<f&&B2(e.f(b))){b=g+2|0;continue;}if(a.j.c(b,c,d)>=0)break;}return g;}
function ASA(a,b,c,d,e){var f,g,h,i;if(!(d instanceof BL))return GO(a,b,c,d,e);f=d;g=e.D();a:{while(true){if(c<b)return (-1);h=f.ke(a.fz,c);if(h<0)break a;if(h<b)break a;i=h+1|0;if(i<g&&B2(f.f(i))){c=h+(-1)|0;continue;}if(a.j.c(i,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function A$Z(a){var b,c;b=a.fz;c=K();Bi(c,b);return Q(c);}
function AKR(a,b){if(b instanceof DN)return 0;if(b instanceof DJ)return 0;if(b instanceof Db)return 0;if(b instanceof DI)return 0;if(b instanceof JB)return 0;if(!(b instanceof JG))return 1;return b.fz!=a.fz?0:1;}
function A63(a,b){return 1;}
var I7=D(Fw);
var Bqn=null;function BcN(){BcN=M(I7);AIp();}
function Bqo(){var a=new I7();Up(a);return a;}
function Up(a){BcN();Nx(a);}
function AIp(){Bqn=Il(F(I7));}
var Y4=D(Fv);
function BdT(a,b,c,d){var e=new Y4();AIq(e,a,b,c,d);return e;}
function AIq(a,b,c,d,e){Li(a,b,c,d,e);}
function ABH(){C.call(this);this.so=null;}
function BcC(a){var b=new ABH();AUF(b,a);return b;}
function AUF(a,b){L(a);a.so=b;}
function Bbv(b){return BcC(b);}
function A3z(a,b){a.so.lo(b);}
function AVd(a,b){a.so.J6(b);}
function Hs(){var a=this;C.call(a);a.cj=null;a.E=0;a.kJ=0;}
function AHf(){var a=new Hs();AM9(a);return a;}
function H4(a){var b=new Hs();A_w(b,a);return b;}
function Bqp(a,b){var c=new Hs();Me(c,a,b);return c;}
function AM9(a){Me(a,1,16);}
function A_w(a,b){Me(a,1,b);}
function Me(a,b,c){L(a);a.kJ=b;a.cj=Bf(c);}
function A3j(a,b){var c,d,e;c=a.cj;d=c.data;if(a.E==d.length)c=a.q$(Bt(8,a.E*1.75|0));d=c.data;e=a.E;a.E=e+1|0;d[e]=b;}
function A99(a,b,c){var d,e;d=a.cj;e=d.data;if((a.E+1|0)>=e.length)d=a.q$(Bt(8,a.E*1.75|0));e=d.data;e[a.E]=b;e[a.E+1|0]=c;a.E=a.E+2|0;}
function AS9(a,b){if(b<a.E)return a.cj.data[b];G(Dh((((((K()).h(B(301))).A(b)).h(B(302))).A(a.E)).d()));}
function A5L(a,b,c){if(b<a.E){a.cj.data[b]=c;return;}G(Dh((((((K()).h(B(301))).A(b)).h(B(302))).A(a.E)).d()));}
function AMy(a){var b,c;b=a.cj.data;c=a.E-1|0;a.E=c;return b[c];}
function A36(a){return a.cj.data[a.E-1|0];}
function A0V(a){a.E=0;}
function AQA(a,b){var c;if(b<0)G(Bo((((K()).h(B(307))).A(b)).d()));c=a.E+b|0;if(c>a.cj.data.length)a.q$(Bt(Bt(8,c),a.E*1.75|0));return a.cj;}
function AI3(a,b){var c,d,e;c=Bf(b);d=c.data;e=a.cj;BZ(e,0,c,0,BN(a.E,d.length));a.cj=c;return c;}
function AO$(a){var b,c,d,e,f;if(!a.kJ)return Nj(a);b=a.cj;c=1;d=0;e=a.E;while(d<e){f=b.data;c=(c*31|0)+f[d]|0;d=d+1|0;}return c;}
function A9Y(a,b){var c,d,e,f,g,h;if(b===a)return 1;if(!a.kJ)return 0;if(!(b instanceof Hs))return 0;c=b;if(!c.kJ)return 0;d=a.E;if(d!=c.E)return 0;e=a.cj;f=c.cj;g=0;while(g<d){h=f.data;if(e.data[g]!=h[g])return 0;g=g+1|0;}return 1;}
function A39(a){var b,c,d,e;if(!a.E)return B(309);b=a.cj;c=b.data;d=AVa(32);d.jj(91);d.wx(c[0]);e=1;while(e<a.E){d.yB(B(310));d.wx(c[e]);e=e+1|0;}d.jj(93);return d.d();}
var SL=D(G7);
var NV=D(Ct);
var Bqq=null;function Bqr(){Bqr=M(NV);AUn();}
function AUn(){Bqq=Z();}
var MF=D(Dw);
function BbG(){var a=new MF();A9H(a);return a;}
function A9H(a){JQ(a);}
var V$=D(Ei);
var Lp=D();
var ABL=D(Cl);
var Qe=D(0);
var Tr=D(BI);
var ADk=D(E$);
var VP=D();
function H2(b){return $rt_floatToIntBits(b);}
function KA(b){return $rt_intBitsToFloat(b&(-16777217));}
var Lv=D();
var Bqs=null;function Bqt(){Bqt=M(Lv);A3J();}
function A3J(){Bqs=X();}
var ABP=D();
function ACS(){Bz.call(this);this.iJ=0;}
function Ba4(a){var b=new ACS();A2c(b,a);return b;}
function A2c(a,b){Cu(a);a.iJ=b;}
function AQX(a,b,c,d){var e;e=!d.hB()?c.i()-b|0:d.D()-b|0;if(e<=0){d.bo(a.iJ,0);return a.j.c(b,c,d);}if(c.f(b)!=10)return (-1);d.bo(a.iJ,1);return a.j.c(b+1|0,c,d);}
function A1h(a,b){var c;c=!b.dI(a.iJ)?0:1;b.bo(a.iJ,(-1));return c;}
function AId(a){return B(702);}
var ACr=D(DG);
function AG9(){var a=this;C.call(a);a.xp=null;a.zt=0;a.AT=null;}
function BeD(){var a=new AG9();A8x(a);return a;}
function A8x(a){L(a);a.AT=H(ET,[Z(),Z()]);a.xp=Bd7();}
function AQQ(a){return a.AT;}
function AMC(a){return a.zt;}
var Qd=D();
var AFD=D();
var TI=D(BI);
var AAD=D(W);
function Bdx(){var a=new AAD();AU4(a);return a;}
function AU4(a){Bs(a);}
function AUB(a){return ((C0()).bu(65279,65279)).bu(65520,65533);}
var SE=D();
var OJ=D();
function R5(){var a=this;C.call(a);a.va=null;a.eM=null;a.fT=null;a.Gj=null;a.Ec=null;a.xL=0;}
function BdR(a,b){var c=new R5();AW0(c,a,b);return c;}
function AW0(a,b,c){L(a);a.Ec=Bb8();a.xL=1;a.va=b;a.eM=Bfw();a.eM.bb(c);}
function AHv(a,b){a.eM.bb(b);a.fT=null;a.Gj=null;a.xL=1;}
function A3F(a){var b;b=a.eM.cK();switch(b){case 0:break;case 1:EL();return BjX;case 2:EL();return BjW;case 3:EL();return BjY;default:G(BG(B(703)));}EL();return BjV;}
function A1Y(a){var b,c,d;a:{if(a.fT===null){b=a.eM.Bw();c=T((b.bk()));if(!c)G(BG(B(704)));d=b.cK();switch(d){case 0:a.fT=Bfv(O(c));break a;case 1:a.fT=Bfj(O(c));break a;case 2:a.fT=Bew(O(c));break a;case 3:a.fT=BeK(O(c));break a;default:}G(BG(B(703)));}}return a.fT;}
function A2N(a){var b;b=a.eM.IZ();return a.va.fN.ji(b);}
function ANl(a,b,c){Cs();Bmt.lh(b,c);return a.eM.Er(Bmt);}
$rt_packages([-1,"com",0,"github",1,"xpenatan",2,"gdx",3,"backends",4,"teavm",0,"badlogic",6,"gdx",7,"utils",8,"reflect",7,"scenes",10,"scene2d",11,"ui",7,"graphics",13,"g2d",-1,"java",15,"util",16,"regex",15,"nio",18,"charset",15,"io",15,"lang"]);
$rt_metadata([C,0,0,[],0,3,0,0,["Mr",Bgu(Fe),"Oa",Bgu(CW),"cq",Bgu(Nj),"K",Bgv(APG),"d",Bgu(QU),"OH",Bgu(IM),"dX",Bgu(AOR)],W,0,C,[],1,0,0,0,["b",Bgu(Bs),"CO",Bgv(A7O)],TK,0,W,[],0,0,0,0,["b",Bgu(A8h),"O",Bgu(AZ2)],RA,0,W,[],0,0,0,0,["b",Bgu(A$p),"O",Bgu(APO)],Eq,0,C,[],0,3,0,0,0,JE,0,C,[],3,3,0,0,0,Hk,0,Eq,[JE],0,3,0,BgK,0,HI,0,C,[],3,3,0,0,0,Ci,0,Hk,[HI],0,3,0,0,0,Cr,0,Ci,[],0,3,0,BgT,0,S,0,C,[],1,3,0,Bcr,["b",Bgu(BY)],Gv,0,S,[],0,3,0,0,["P",Bgv(K2)],YZ,0,C,[],0,3,0,0,["L2",Bgw(ATw),"Ig",Bgu(ALu),"fn",Bgv(A$w),
"GB",Bgu(AMH),"eq",Bgv(A8y),"gd",Bgv(A1r),"ft",Bgv(A_R)],Th,0,C,[],0,3,0,0,0,Zq,0,C,[],4,3,0,0,0,IB,0,C,[],3,3,0,0,0,Eb,0,C,[IB],0,3,0,0,0,BB,0,C,[],3,3,0,0,0,Du,0,C,[BB],1,3,0,0,["b",Bgu(OP)],Co,0,C,[],3,3,0,0,0,Ee,0,Du,[Co],0,3,0,CZ,["P",Bgv(HV),"p2",Bgu(AXT),"d",Bgu(AUx),"cq",Bgu(AWG),"K",Bgv(A$Y)],Ma,0,C,[],0,3,0,0,0,Ch,0,C,[],3,3,0,0,0,DR,0,C,[],3,3,0,0,0,F8,0,C,[],3,3,0,0,0,Eu,0,C,[Ch,DR,F8],1,3,0,0,0,B$,0,Eu,[],1,3,0,0,0,Gs,0,B$,[],1,3,0,0,0,Id,0,C,[],1,3,0,0,["Ru",Bgy(AGw),"rG",Bgx(ABm),"NG",Bgv(Lq),
"sb",Bgv(AVh),"Nh",Bgv(Mm),"n8",Bgv(A2R),"Oq",Bgx(IY),"Bo",Bgv(AAA),"ND",Bgv(Kb),"GO",Bgv(A4T),"QV",Bgu(Pj),"KD",Bgu(AQ3)],Dx,0,Id,[],1,3,0,0,["rG",Bgx(Hg),"J8",Bgw(AIZ)],Z1,0,Dx,[],0,3,0,0,["NK",Bgx(A6V),"ks",function(b,c,d,e,f,g,h){return A7R(this,b,c,d,e,f,g,h);}],Jy,0,W,[],0,0,0,0,["b",Bgu(Rf),"O",Bgu(Q7)],ER,0,C,[],4,3,0,BhM,0,Dk,0,C,[],3,3,0,0,0,BI,0,C,[Dk],1,3,0,0,0,DG,0,BI,[],1,3,0,0,0,S3,0,DG,[],0,3,0,0,0,BX,0,C,[Ch],1,3,0,0,["b",Bgu(B6),"cD",Bgw(AVO),"bb",Bgv(A3a),"bk",Bgu(AVs),"Eg",Bgu(AS8),"be",
Bgu(A6w),"d",Bgu(APu)],HH,0,W,[],0,0,0,0,["b",Bgu(RK),"O",Bgu(TL)],AFF,0,HH,[],0,0,0,0,["b",Bgu(A2C),"O",Bgu(AP8)],C2,0,BX,[],0,3,0,TV,["cK",Bgu(AO1),"b1",Bgv(Tn),"b",Bgu(D4),"Co",Bgu(A8Z)],Nq,0,C2,[],0,3,0,Bcs,["b1",Bgv(Yh),"Fg",Bgu(ATF)],Ck,0,C,[],3,3,0,0,0,FR,0,C,[Ck],3,3,0,0,0,AAl,0,C,[FR],0,0,0,0,["O8",Bgx(A$h),"cC",Bgv(AMF),"f4",Bgv(ALL)],Y,0,C,[Co,BB],1,3,0,0,["bh",Bgw(BJ),"L6",Bgu(Bj),"d",Bgu(A16)],Dt,0,Y,[],12,3,0,IL,0,Bz,0,C,[],1,0,0,ZR,["b",Bgu(Cu),"tL",Bgv(Jx),"ci",Bgx(GI),"cp",Bgy(GO),"w3",Bgv(AZD),
"cK",Bgu(AYM),"Br",Bgu(AP0),"d",Bgu(ASg),"EJ",Bgu(ASY),"L",Bgv(Mb),"b0",Bgv(A9z),"go",Bgu(A$K),"dx",Bgu(Pb)],BR,0,Bz,[],1,0,0,0,["tL",Bgv(YK),"b",Bgu(Da),"c",Bgx(A_e),"b5",Bgu(A83),"S",Bgv(AN3)],PS,0,BR,[],0,0,0,0,["AB",Bgv(A2a),"bB",Bgw(A8g),"q",Bgu(A9j)]]);
$rt_metadata([Gt,"CharSequence",21,C,[],3,3,0,0,0,D8,0,C,[],0,3,0,0,["lD",Bgu(A09),"kp",Bgu(ASu),"BQ",Bgu(AMB),"LG",Bgu(A2n),"vj",Bgv(AVF)],Eh,0,D8,[],0,3,0,0,["hc",Bgw(U1),"bR",Bgv(AAm),"Al",Bgv(ADY)],Gy,0,Eh,[],0,3,0,0,["bR",Bgv(Pm)],K7,0,C,[],0,3,0,Nw,0,N2,0,C,[],0,3,0,0,0,AF_,0,S,[],0,3,0,0,["kn",Bgv(A3_)],ABU,0,W,[],0,0,0,0,["tc",Bgw(AKj),"FP",Bgx(AUL),"O",Bgu(A1e)],Go,0,S,[],0,3,0,0,["lG",Bgw(LM)],Sv,0,C,[Dk],0,3,0,0,0,Jn,0,C,[],0,0,0,0,["Kz",Bgv(AC5),"cV",Bgu(AGQ),"An",Bgu(A1S)],Cz,0,C,[],3,3,0,0,0,FH,
0,C,[],3,3,0,0,0,PN,0,Jn,[Cz,FH],0,3,0,0,["Kz",Bgv(A7c),"dk",Bgu(A4h),"da",Bgu(A_c),"cV",Bgu(ALx)],CE,0,Bz,[],0,0,0,J0,["P",Bgv(EX),"c",Bgx(AIX),"h7",Bgu(A4Y),"q",Bgu(ANc),"S",Bgv(AJk)],KS,0,CE,[],0,0,0,0,["P",Bgv(AF8),"c",Bgx(AJu),"q",Bgu(A9p)],G0,0,C,[],3,3,0,0,0,ADL,0,C,[G0],0,3,0,0,0,BO,0,Bz,[],0,0,0,0,["b",Bgu(CY),"g2",Bgw(UG),"c",Bgx(AMJ),"L",Bgv(ARc),"q",Bgu(AOf),"b0",Bgv(A4j),"S",Bgv(ARX),"dx",Bgu(AJ1)],Pi,0,BO,[],0,0,0,0,["mj",Bgv(ATT),"L",Bgv(A05),"c",Bgx(ANq),"q",Bgu(A6R)],AD8,0,Dx,[],0,3,0,0,["nD",
Bgv(AUW),"ks",function(b,c,d,e,f,g,h){return AMQ(this,b,c,d,e,f,g,h);}],KP,0,C,[],3,3,0,0,0,C5,0,C,[],0,3,0,0,0,IO,0,C,[],3,3,0,0,0,In,0,C,[IO],0,3,0,0,["b",Bgu(RX),"wD",Bgv(AW$)],Le,0,C,[],3,3,0,0,0,F7,0,In,[Le],0,3,0,0,["Rx",function(b,c,d,e,f,g){AEn(this,b,c,d,e,f,g);},"xI",Bgu(AWh),"pC",Bgu(ARj),"ss",Bgu(AMW),"d",Bgu(AIS),"yj",Bgv(A8F)],Do,0,Bz,[],1,0,0,0,["fh",Bgx(GD),"m7",Bgu(A_n),"b0",Bgv(ASy),"S",Bgv(A9O),"dx",Bgu(APR)],CN,0,Do,[],0,0,0,0,["fh",Bgx(FJ),"c",Bgx(AW3),"q",Bgu(A2O)],AAs,0,CN,[],0,0,0,0,
["fh",Bgx(A3u),"c",Bgx(A5o)],IS,0,C,[],0,3,0,0,["b",Bgu(Xp)],IA,0,IS,[],0,3,0,0,["QJ",Bgx(Nz),"fG",Bgu(AHK),"uy",Bgu(AVr),"Jw",Bgu(A$D),"JM",Bgu(AXs),"s$",Bgu(AQB),"FG",Bgv(AHF),"Gh",Bgu(AHY),"d",Bgu(A_q)],Fk,0,C,[BB,Gt],0,0,0,0,["b",Bgu(Kx),"P",Bgv(Kl),"Ot",Bgv(ABS),"P7",Bgv(LN),"i0",Bgw(Ou),"Rz",Bgv(Qx),"xb",Bgw(AXL),"GY",Bgx(A2T),"Mu",Bgv(AGm),"zA",Bgw(TF),"Ic",Bgx(APP),"PF",Bgv(V3),"yL",Bgw(ADe),"Q3",Bgv(RY),"wW",Bgw(AAk),"Nt",Bgv(NM),"r8",Bgw(OS),"tA",Bgw(RU),"M$",Bgv(Vw),"tY",Bgw(O5),"fr",Bgv(MY),"d",
Bgu(N5),"i",Bgu(NC),"f",Bgv(PE),"As",Bgx(QF),"sx",Bgy(ACW),"Q$",Bgv(AG6),"q7",Bgx(ON),"rI",Bgy(MQ),"P3",Bgv(Oe),"du",Bgw(AES),"mJ",Bgy(ABe),"rB",Bgv(AFM),"Pu",Bgv(AF1),"Pw",Bgw(AGl),"cA",Bgw(ZT)],F2,0,C,[],3,3,0,0,0,Qy,0,Fk,[F2],0,3,0,0,["b",Bgu(A2k),"D0",Bgv(AKS),"Em",Bgv(ATk),"Gw",Bgx(AVj),"Ky",Bgv(ALs),"II",Bgx(AXR),"xH",Bgv(A9w),"DS",Bgy(A4O),"JK",Bgy(A48),"LE",Bgw(A95),"CY",Bgw(A75),"rI",Bgy(AL7),"q7",Bgx(AYv),"sx",Bgy(A1D),"As",Bgx(A7E),"f",Bgv(AWH),"i",Bgu(A_i),"d",Bgu(AYH),"fr",Bgv(AYV),"r8",Bgw(A8Y),
"i0",Bgw(AWV)],Ny,0,C,[],0,3,0,Biy,0,C1,0,C,[],1,3,0,0,["P",Bgv(Gm),"P$",Bgu(ED),"Ng",Bgu(Cd),"c4",Bgv(Hj),"NB",Bgu(BE),"c7",Bgv(Jj),"dm",Bgu(GF),"eH",Bgu(Gw),"Pz",Bgu(Be),"Pj",Bgu(Cq)],WU,0,C,[],0,3,0,0,0,Ik,0,Ci,[],0,3,0,0,0,FF,0,C,[],1,0,0,0,["b",Bgu(MI)],U,0,FF,[],1,0,0,KC,["b",Bgu(Bg),"bF",Bgu(AYr),"b$",Bgu(AXM),"By",Bgu(A4V),"y9",Bgu(A2b),"jS",Bgu(A8T),"Jh",Bgu(AIQ),"ko",Bgu(AYA),"fy",Bgu(A$G),"eX",Bgv(ATX),"hE",Bgu(AL4)],ACB,0,U,[],0,0,0,0,["Qt",Bgv(A3s),"n",Bgv(AU6)],Dp,0,C,[DR],0,3,0,0,0,Fo,0,Dp,[F8,
DR],1,3,0,0,0,CI,0,Fo,[],1,3,0,BiB,0,G5,0,C,[],4,0,0,ASj,["b",Bgu(Wp),"P4",Bgv(AGi)],N7,0,C,[],3,3,0,0,0,Ks,0,C,[BB],0,3,0,BcU,["b",Bgu(RB),"J5",Bgw(A6r),"gY",Bgu(ARP),"Gi",Bgu(ATa)],Dq,0,B$,[],1,3,0,BiK,0,Dm,0,Dq,[],1,3,0,0,0]);
$rt_metadata([AAS,0,Dm,[],0,3,0,0,0,I$,0,W,[],0,0,0,0,["b",Bgu(Wk),"O",Bgu(ACE)],TO,0,W,[],0,0,0,0,["b",Bgu(AJV),"O",Bgu(A1G)],BP,0,C,[],4,3,0,Bi9,0,CH,0,C,[],0,3,0,0,0,AAy,0,CH,[],0,3,0,0,0,Vn,0,S,[],4,0,0,0,["b",Bgu(APa)],AA$,0,C,[],4,3,0,0,0,Vf,0,S,[],4,0,0,0,["b",Bgu(A3t)],DC,0,Eu,[],1,3,0,0,0,RR,0,DC,[],0,3,0,0,0,Fy,0,C,[],3,3,0,0,0,CD,0,C,[Fy],1,3,0,0,0,ABZ,0,CD,[],0,0,0,0,0,Vg,0,S,[],4,0,0,0,["b",Bgu(A8u)],AGS,0,CE,[],0,0,0,0,["b",Bgu(AWk),"c",Bgx(AZz),"q",Bgu(A3g)],Ft,0,S,[],0,3,0,0,["P",Bgv(LB)],Vj,
0,S,[],4,0,0,0,["b",Bgu(A3O)],Ve,0,S,[],4,0,0,0,["b",Bgu(A8b)],H$,0,CH,[],0,3,0,0,0,AAq,0,H$,[],0,3,0,0,0,Vh,0,S,[],4,0,0,0,["b",Bgu(A_H)],Vk,0,S,[],4,0,0,0,["b",Bgu(AHP)],Vi,0,S,[],4,0,0,0,["b",Bgu(AJz)],Vl,0,S,[],4,0,0,0,["b",Bgu(AWQ)],JZ,0,BO,[],0,0,0,0,["g2",Bgw(YS),"c",Bgx(AQ1),"q",Bgu(APi),"S",Bgv(A7F)],DE,0,JZ,[],0,0,0,0,["g2",Bgw(GQ),"c",Bgx(A0a),"L",Bgv(A7k),"q",Bgu(AIg)],Yn,0,DE,[],0,0,0,0,["g2",Bgw(AMA),"c",Bgx(AQ9),"S",Bgv(AT5),"q",Bgu(A$I)],AFy,0,DE,[],0,0,0,0,["g2",Bgw(AL0),"c",Bgx(AJd),"S",Bgv(A88),
"q",Bgu(AMz)],Bl,0,C,[],1,3,0,A_0,["b",Bgu(CL)],AGZ,0,Bl,[],4,0,0,0,0,Ea,0,Dm,[],1,3,0,0,0,AAV,0,Ea,[],0,3,0,0,0,Ce,0,D8,[],0,3,0,0,["b",Bgu(GZ),"hc",Bgw(Kn),"bR",Bgv(Yq)],Bk,"RuntimeException",21,Ce,[],0,3,0,0,["b",Bgu(Cv),"hc",Bgw(Q1),"bR",Bgv(Et)],HY,"UnsupportedOperationException",21,Bk,[],0,3,0,0,["b",Bgu(TZ)],AG3,"ReadOnlyBufferException",18,HY,[],0,3,0,0,["b",Bgu(A3e)],L6,0,C,[Ck],3,3,0,0,0,ACJ,0,C,[L6],0,0,0,0,["D2",Bgu(AU2),"I8",Bgu(A1t),"Hm",Bgu(A1f),"OW",Bgu(AW4),"M5",Bgu(AKv),"RK",Bgu(AWR)],EM,0,
C,[],3,3,0,0,0,Bp,0,C,[EM],0,3,0,Bjl,0,CM,0,Bp,[],0,3,0,Bjn,0,IQ,0,CM,[],0,3,0,0,0,ADa,0,C,[],4,3,0,0,0,Jf,0,Dp,[],0,3,0,0,0,Ls,0,C,[],3,3,0,0,0,VH,0,C,[Ls],0,3,0,0,["OP",Bgv(ASe),"Jz",Bgw(A56),"AQ",Bgv(AHm)],Ct,0,Eq,[HI],0,3,0,0,0,YY,0,Ct,[],0,3,0,0,0,Gp,0,Gy,[],0,3,0,0,["bR",Bgv(K8)]]);
$rt_metadata([ADB,0,Gp,[],0,3,0,0,["bR",Bgv(AJL)],Hn,0,C,[IB],3,3,0,0,0,Qg,0,W,[],0,0,0,0,["b",Bgu(AJM),"O",Bgu(AK_)],ACn,0,IQ,[],0,3,0,0,0,PV,0,Bp,[],0,0,0,0,0,PU,0,Bp,[],0,0,0,0,0,Oh,0,Ci,[],0,3,0,Bjr,0,ZW,0,C,[],4,0,0,0,0,Z$,0,C,[Cz],0,3,0,0,["P",Bgv(AWW),"j2",Bgw(ADd),"pa",Bgv(A2L),"qC",Bgw(AZ1),"ji",Bgv(A$n),"Ln",Bgv(A0t),"AY",Bgu(AJ7)],Ps,0,U,[],0,0,0,0,["Mk",Bgv(A7J),"n",Bgv(AKI)],C9,0,C,[Co],1,3,0,0,["MQ",Bgw(Hf),"uy",Bgu(ADt),"Bo",Bgv(Xk)],TG,0,C9,[],0,3,0,0,["Qp",Bgx(AI8),"j5",Bgu(AH$)],PW,0,Cr,[],
0,0,0,0,0,HE,0,C,[],0,3,0,0,0,MV,0,HE,[],0,3,0,0,0,Ef,0,B$,[],1,3,0,0,0,QT,0,C,[],4,3,0,0,0,HN,0,C,[],3,3,0,0,0,T_,0,C,[HN],0,3,0,0,["RF",Bgy(A1n),"hZ",Bgu(ANI)],V5,0,Bp,[],0,0,0,0,0,H9,0,C,[EM],1,3,0,0,0,V4,0,H9,[],0,0,0,0,0,JL,0,C,[EM],1,3,0,0,0,V7,0,JL,[],0,0,0,0,0,Io,0,Jy,[],0,0,0,0,["b",Bgu(Ta),"O",Bgu(Sc)],J4,0,Io,[],0,0,0,0,["b",Bgu(Vo),"O",Bgu(Yb)],AB6,0,J4,[],0,0,0,0,["b",Bgu(ATg),"O",Bgu(APS)],AEH,0,W,[],0,0,0,0,["b",Bgu(A5N),"O",Bgu(ATW)],V6,0,Bp,[],0,0,0,0,0,ABM,0,DE,[],0,0,0,0,["g2",Bgw(ATq),"c",
Bgx(AJX),"S",Bgv(A_K),"q",Bgu(AQL)],NR,0,C,[F2,Gt],0,3,0,Dd,["P",Bgv(AAi),"PU",Bgu(OA),"Mf",Bgv(CS),"N5",Bgv(I3),"d",Bgu(AIf),"jj",Bgv(ARS),"wx",Bgv(ASq),"Cd",Bgw(AKt),"KU",Bgx(AIu),"uM",Bgv(A4P),"yB",Bgv(A1T)],Tu,0,C9,[],0,3,0,0,["b",Bgu(AMc),"j5",Bgu(AWv)],UI,0,B$,[],0,3,0,0,0,WM,"ArrayStoreException",21,Bk,[],0,3,0,0,["b",Bgu(A07)],CO,0,C,[BB],0,3,0,BjH,0,AB$,0,CI,[],4,3,0,0,0,WQ,0,C,[DR],0,3,0,0,0,IC,0,C,[],3,3,0,0,0,Os,0,C,[IC],0,0,0,0,["MU",function(b,c,d,e,f,g){Un(this,b,c,d,e,f,g);},"bo",Bgw(AUh),"dI",
Bgv(A4m),"m2",Bgu(AWw),"mn",Bgv(AOK),"dL",Bgw(AZR),"rY",Bgw(AYi),"hm",Bgv(A7b),"la",Bgv(AR1),"xS",Bgv(AIL),"J1",Bgv(A3w),"tl",Bgu(ART),"jo",Bgv(AJ_),"HW",Bgu(APw),"vE",Bgv(AWY),"eJ",Bgw(AZc),"Hb",Bgu(A$b),"GQ",Bgu(A$d),"qU",Bgx(A$X),"cV",Bgu(AKJ),"Cu",Bgv(A76),"dA",Bgu(AYL),"D",Bgu(A4G),"mX",Bgv(A0p),"yh",Bgu(AMl),"LS",Bgv(A08),"hB",Bgu(A2i),"jr",Bgu(AWX),"IQ",Bgu(AXP)],DV,0,C,[Ch],0,3,0,C8,["b",Bgu(AG7),"Rf",function(b,c,d,e,f,g){M2(this,b,c,d,e,f,g);},"Jd",Bgw(A5V),"GZ",Bgv(A68),"be",Bgu(AYy)],Zp,0,C,[EM],
0,0,0,0,0,EH,0,C,[],0,3,0,0,0,U$,0,CH,[],0,3,0,0,0,JX,"BitmapFont$Glyph",14,C,[],0,3,0,0,["b",Bgu(A8I),"Fl",Bgv(A3X),"BS",Bgw(A67),"d",Bgu(AMS)],Yl,0,U,[],0,0,0,0,["LU",Bgv(AOk),"n",Bgv(A_b)],G8,0,C,[Ch],1,3,0,Ox,["gH",Bgw(K3),"ee",Bgu(A4_),"Cr",Bgx(ARs),"Jy",Bgx(AHO),"K1",Bgw(AMm)],L5,0,G8,[],0,3,0,HM,["vM",Bgw(AD$),"Q1",Bgx(L1),"Ny",Bgv(Ka),"Mm",Bgx(Oi),"Il",Bgv(AUe),"bp",Bgu(AQR),"bl",Bgu(A9i),"d",Bgu(AP_)],DK,"GdxRuntimeException",8,Bk,[],0,3,0,0,["hc",Bgw(AIh),"bR",Bgv(D7)],Uz,0,Ci,[],0,3,0,0,0,EE,0,BO,
[],0,0,0,0,["uF",Bgw(Kv),"L",Bgv(A$N),"c",Bgx(AQ0),"q",Bgu(A6a),"sl",Bgx(ANR),"b0",Bgv(AOy),"S",Bgv(A7m)]]);
$rt_metadata([Cp,"IllegalArgumentException",21,Bk,[],0,3,0,0,["b",Bgu(GE),"bR",Bgv(Ew)],VM,"IllegalCharsetNameException",19,Cp,[],0,3,0,0,["bR",Bgv(ATy)],Hz,0,Bp,[],0,3,0,Bka,0,TY,0,C,[],0,3,0,0,0,Mu,0,C,[],3,3,0,0,0,GU,0,C,[Mu],3,3,0,0,0,Oj,0,C,[],3,3,0,0,0,Fm,0,C,[GU,Oj],1,3,0,0,["b",Bgu(J5)],IT,0,Fm,[],0,3,0,0,["Oj",Bgv(PD)],HZ,0,IT,[],0,3,0,0,["On",Bgw(OF),"ik",Bgx(A5U),"B9",Bgv(A0l),"mD",Bgv(A2$),"em",Bgv(AY_),"F9",Bgv(AOn),"IR",Bgu(A7w)],Uw,0,DE,[],0,0,0,0,["g2",Bgw(AXe),"c",Bgx(AWL),"S",Bgv(A7V),"q",
Bgu(AJx)],Hd,0,C1,[Co],1,3,0,0,["fP",Bgx(ADT),"MW",Bgu(Iw),"Q2",Bgu(XW),"dm",Bgu(A5z)],F4,0,Hd,[],1,0,0,0,["fP",Bgx(M_),"Gr",Bgu(ATJ),"eu",Bgv(A5v),"by",Bgv(APA),"xx",Bgw(A9u),"bZ",Bgu(AO3)],Gk,0,F4,[],1,0,0,0,["eK",function(b,c,d,e,f,g){Kd(this,b,c,d,e,f,g);},"d1",Bgu(AOT)],Qs,0,Gk,[],0,0,0,0,["eK",function(b,c,d,e,f,g){A0B(this,b,c,d,e,f,g);},"nc",Bgv(AMh),"lp",Bgw(AHt)],Cc,0,C,[],0,3,0,0,["b",Bgu(DB),"ew",Bgv(APM),"cu",Bgv(AM5)],Si,0,Cc,[],0,0,0,0,["Mw",Bgx(A2r),"ew",Bgv(AUz),"cu",Bgv(A3D),"Et",Bgw(AWZ),
"cE",Bgw(ANE)],VK,0,W,[],0,0,0,0,["b",Bgu(A2x),"O",Bgu(AOL)],Sj,0,Cc,[],0,0,0,0,["Pk",Bgw(A9V),"ew",Bgv(APy),"cu",Bgv(A7K),"cE",Bgw(ATf)],Sg,0,Cc,[],0,0,0,0,["N_",Bgy(A2S),"ew",Bgv(ATj),"cu",Bgv(ALo),"cE",Bgw(AQl)],Bm,"Color",13,C,[],0,3,0,FV,["b",Bgu(XQ),"P",Bgv(AFW),"Bm",Bgy(UO),"Ge",Bgv(AIT),"yP",Bgu(A8j),"IP",Bgy(A5A),"K",Bgv(A0u),"cq",Bgu(AO6),"iA",Bgu(AT9),"lq",Bgu(AVS),"d",Bgu(AKE)],Ei,0,C,[],1,3,0,0,0,WA,0,Ei,[],0,3,0,0,0,K0,0,C,[],32,0,0,BdQ,0,FI,0,C,[],4,3,0,0,["NY",Bgx(AQg),"NH",Bgy(AGR),"Nu",function(b,
c,d,e,f,g){AEm(this,b,c,d,e,f,g);},"K",Bgv(AQk),"Ra",Bgv(SC),"M8",Bgu(AAE),"MG",Bgu(RM),"cq",Bgu(AZ_)],Fh,0,Bp,[],0,3,0,0,0,CK,0,Do,[],0,0,0,0,["ja",Bgx(FB),"c",Bgx(AWN),"q",Bgu(AZd)],Ww,0,CK,[],0,0,0,0,["Qo",Bgv(ANU),"c",Bgx(A$_),"ci",Bgx(AQi)],MG,0,C,[],3,3,0,0,0,HA,0,C,[IO,MG],0,3,0,0,["d",Bgu(APd),"wo",Bgu(AYd),"sU",Bgv(A0k),"q",Bgu(A3P),"fF",Bgu(AML),"B7",Bgu(AUE),"hj",Bgu(A4R),"oH",Bgu(A_r),"Hi",Bgu(AUQ),"B5",Bgv(A8t),"CR",Bgv(A8q)],CX,0,C,[Ck],1,3,0,0,0,ACg,0,CX,[],1,3,0,0,0,D0,0,C,[],3,3,0,0,0,AGh,0,
C,[D0,BB],0,3,0,0,["b",Bgu(AYY),"P",Bgv(AW5),"p5",Bgv(ARV),"el",Bgw(ANa),"o6",Bgv(A_M),"JI",Bgw(AXh),"dU",Bgv(AXp),"i4",Bgv(A$$),"K6",Bgv(ARz),"Hq",Bgv(ARa),"dd",Bgv(A$j),"gW",Bgv(AVN),"g1",Bgv(A$c),"g_",Bgv(A3Y),"bH",Bgu(A$s)],JW,0,Du,[Co],0,3,0,KR,["kn",Bgv(Qb),"Mh",Bgu(A9n)],DN,0,BR,[],0,0,0,0,["ly",Bgv(ARM),"b5",Bgu(A3m),"bB",Bgw(AMZ),"ci",Bgx(ALz),"cp",Bgy(AOl),"q",Bgu(AT8),"mG",Bgu(AJe),"b0",Bgv(ATK)],Cl,0,C,[],1,3,0,0,["b",Bgu(AFi),"gH",Bgw(G9),"ho",Bgu(AHW),"hp",Bgv(AKp),"pH",Bgv(AM4),"y4",Bgv(AZG),
"Kq",Bgv(AVb)],QQ,0,Cl,[],0,0,0,0,0,HK,0,B$,[],1,3,0,0,0,NI,0,C,[Ck],3,3,0,0,0,HU,0,C,[],0,3,0,0,["b",Bgu(SN)],Xn,0,HU,[],0,3,0,0,["b",Bgu(AXq)],Hp,0,C,[Ch],3,3,0,0,0,Qn,0,C,[],4,3,0,0,0,WE,0,C,[],0,3,0,0,["lU",Bgw(A7n),"GE",Bgu(AOw),"JN",Bgu(AX0)],B_,0,BI,[],1,3,0,0,0,Rs,0,B_,[],0,3,0,0,0,AB7,0,W,[],0,0,0,0,["tc",Bgw(ALh),"FP",Bgx(AWq),"O",Bgu(AHs)],Vd,0,C,[],0,3,0,0,["b",Bgu(AVt),"JL",Bgw(A3S)],LT,0,C,[],0,3,0,Bk1,0]);
$rt_metadata([E1,0,C,[],3,3,0,0,0,DM,0,Ct,[E1],0,3,0,Bk7,0,RC,0,DM,[],0,3,0,0,0,NW,0,C,[],3,3,0,0,0,Ih,0,C1,[Co,F2,Gt,NW],1,3,0,0,["fP",Bgx(ACH),"tZ",Bgx(AIz),"KX",Bgx(A_t),"Dg",Bgx(AX8),"Rs",Bgv(Jb),"Ri",Bgu(T$),"qx",Bgv(APf)],HW,0,Ih,[],1,0,0,0,["fP",Bgx(Rk),"E2",Bgu(AIB),"bZ",Bgu(A$6)],S5,0,HW,[],0,0,0,0,["Q6",function(b,c,d,e,f,g){AV5(this,b,c,d,e,f,g);},"wk",Bgv(A6d),"pk",Bgw(A4t),"d1",Bgu(AU$)],Oz,0,C,[],0,3,0,0,0,ADA,0,U,[],0,0,0,0,["Ps",Bgv(AHA),"n",Bgv(A9C)],Oc,0,C,[],0,3,0,LE,0,FS,0,C,[Ck],3,3,0,0,
0,Px,0,C,[FS],0,0,0,0,["vz",Bgy(ASk),"cC",Bgv(A3l),"f4",Bgv(A6E)],Py,0,C,[FS],0,0,0,0,["vz",Bgy(AVR),"cC",Bgv(AVk),"f4",Bgv(AN0)],Pz,0,Cc,[],0,0,0,0,["E0",Bgw(A9x),"ew",Bgv(AJO),"cu",Bgv(A5h),"pI",Bgw(A$H),"cE",Bgw(AXZ)],ABT,"UnsupportedCharsetException",19,Cp,[],0,3,0,0,["bR",Bgv(AIY)],PA,0,C,[FS],0,0,0,0,["vz",Bgy(A2A),"cC",Bgv(AIk),"f4",Bgv(A4A)],ABv,0,U,[],0,0,0,0,["Oo",Bgv(A1l),"n",Bgv(ASi)],PB,0,Cc,[],0,0,0,0,["Or",function(b,c,d,e,f){A6Z(this,b,c,d,e,f);},"ew",Bgv(AMp),"cu",Bgv(AW8),"pI",Bgw(AW_),"cE",
Bgw(AMN)],PC,0,C,[FS],0,0,0,0,["E0",Bgw(A2Q),"cC",Bgv(AJ5),"f4",Bgv(AQJ)],D9,0,C1,[Co],1,3,0,0,["fP",Bgx(AEg),"tm",Bgx(AQe),"Q8",Bgu(Ly),"PD",Bgu(I2),"mP",Bgv(AME),"qK",Bgv(A5R),"eH",Bgu(AMR),"dm",Bgu(AVW),"c7",Bgv(ARp),"c4",Bgv(AUR)],FY,0,D9,[],1,0,0,0,["fP",Bgx(Lr),"i2",Bgv(AN$),"FC",Bgw(A$1),"bZ",Bgu(AZ$)],Fi,0,FY,[],1,0,0,0,["eK",function(b,c,d,e,f,g){Mh(this,b,c,d,e,f,g);},"d1",Bgu(A6A)],MD,0,C,[],3,3,0,0,0,Qh,0,C,[MD],0,3,0,0,["b",Bgu(AN1),"J3",Bgu(AWJ),"Dc",Bgu(AQK),"F0",Bgu(ANS),"m8",Bgu(A9f),"lg",Bgu(API),
"El",function(b,c,d,e,f){AJ$(this,b,c,d,e,f);},"tR",Bgx(AIm),"g6",Bgx(AVX),"Cy",Bgx(A11),"oR",Bgx(AZJ),"BB",Bgy(AP3),"HI",function(b,c,d,e,f){AWr(this,b,c,d,e,f);}],Kf,0,C,[],32,0,0,BfI,0,Ul,0,BI,[],0,3,0,0,0,Fg,0,B$,[],1,3,0,0,0,AEl,0,Fg,[],0,3,0,0,0,Tg,0,Gv,[],0,3,0,0,["P",Bgv(A3B)],LO,"Array",8,C,[Cz],0,3,0,0,["b",Bgu(AJA),"P",Bgv(A$l),"ng",Bgw(KI),"Rd",Bgx(X$),"Np",Bgv(A8Q),"MP",Bgy(S6),"bG",Bgv(ASl),"nR",Bgv(ANj),"EO",Bgx(AH9),"uB",Bgx(AJq),"X",Bgv(A$i),"jh",Bgw(AKG),"vC",Bgv(ARE),"qN",Bgw(AK4),"AZ",Bgu(AXn),
"s0",Bgu(AVm),"Lu",Bgu(A_L),"bz",Bgu(A0Q),"fD",Bgv(ATL),"nz",Bgv(A0i),"fi",Bgu(ANK),"jV",Bgv(AIj),"cq",Bgu(AX$),"K",Bgv(AOP),"d",Bgu(ATM)],Lz,0,CE,[],0,0,0,0,["P",Bgv(Xq),"c",Bgx(AXD),"dc",Bgu(AJC),"q",Bgu(AS4),"S",Bgv(A6N)],HG,0,C,[Ch],3,3,0,0,0,JB,0,BO,[],0,0,0,0,["ly",Bgv(AJH),"L",Bgv(A6z),"c",Bgx(AZs),"ci",Bgx(AM7),"cp",Bgy(A0e),"q",Bgu(ATr),"b0",Bgv(AIa),"S",Bgv(ATx)],AGp,"AssertionError",21,Eh,[],0,3,0,0,["hc",Bgw(AK1)],Op,0,C,[],0,0,0,Blc,0,Ng,0,C,[Ch],3,3,0,0,0,EA,0,CK,[],0,0,0,0,["vh",Bgy(Lm),"c",Bgx(AX4),
"q",Bgu(AYw)],Db,0,BO,[],0,0,0,0,["mj",Bgv(AD9),"c",Bgx(A0H),"q",Bgu(A$B),"n",Bgv(AMg),"b0",Bgv(AIK),"rN",Bgu(AOj),"L",Bgv(A8L),"S",Bgv(ALR)],X0,0,C,[],0,3,0,0,["b",Bgu(AU_)],Ek,0,C,[Dk],0,3,0,0,0,Q9,0,Ek,[],0,3,0,0,0,BL,"String",21,C,[BB,Co,Gt],0,3,0,Ia,["F5",Bgv(IP),"M9",Bgx(O2),"Ns",Bgx(O7),"f",Bgv(AX2),"i",Bgu(A1u),"bH",Bgu(A3k),"mJ",Bgy(ALA),"v7",Bgw(A6Y),"d2",Bgv(A3r),"vb",Bgv(A0F),"dQ",Bgw(A51),"wR",Bgv(A0E),"ke",Bgw(AX5),"t1",Bgv(ANC),"rz",Bgw(A0n),"IG",Bgv(A6v),"wv",Bgw(ALt),"Dl",Bgv(ANk),"cA",Bgw(AH6),
"dZ",Bgv(ANG),"du",Bgw(ALJ),"jB",Bgv(AWg),"rK",Bgw(A7C),"HZ",Bgu(A3K),"d",Bgu(AJG),"k8",Bgu(A3q),"K",Bgv(AUm),"DQ",Bgv(AQc),"Hc",Bgv(A54),"cq",Bgu(A59),"Bj",Bgu(A5r),"sp",Bgv(A32),"sA",Bgw(AUg),"BU",Bgw(ALW)],FX,0,Fm,[],1,3,0,0,["b",Bgu(MB)],NS,0,FX,[],0,3,0,A4z,["ik",Bgx(ALU)],ABl,0,F4,[],0,0,0,0,["OB",function(b,c,d,e,f,g){ANb(this,b,c,d,e,f,g);},"nc",Bgv(A57),"lp",Bgw(A4x),"d1",Bgu(AHu)],CC,0,Y,[],12,3,0,A5j,0,Ru,0,Dx,[],0,3,0,0,["nD",Bgv(AS6),"ks",function(b,c,d,e,f,g,h){return AOM(this,b,c,d,e,f,g,h);}],Jq,
0,C,[],1,3,0,0,["b",Bgu(AAI)],If,0,C,[],3,3,0,0,0,FP,0,Jq,[If,D0,BB],0,3,0,V0,["b",Bgu(H6),"P",Bgv(M4),"I",Bgv(ACy),"s",Bgw(ARx),"l7",Bgu(APv)]]);
$rt_metadata([Vs,0,FP,[],0,3,0,0,["b",Bgu(AQ6),"OT",Bgv(ANQ),"zk",Bgv(AQj)],AFT,0,FY,[],0,0,0,0,["P2",function(b,c,d,e,f,g){AZj(this,b,c,d,e,f,g);},"si",Bgv(ARB),"kO",Bgw(AQT),"d1",Bgu(A6t)],ACL,0,C,[],1,3,0,0,0,Lb,0,C,[],3,3,0,0,0,SA,0,C,[],0,3,0,0,0,DD,0,B_,[],1,3,0,0,0,ADy,0,DD,[],0,3,0,0,0,FG,0,C,[GU],1,3,0,0,["b",Bgu(KV),"ud",Bgx(A9r),"gC",Bgu(A2d)],Xr,0,FG,[],0,0,0,0,["QZ",Bgv(AYS),"xq",Bgu(A4F)],Fv,0,S,[],0,3,0,0,["wN",Bgy(Li)],SW,0,Fv,[],0,3,0,0,["wN",Bgy(AKq)],DW,0,Y,[],12,3,0,BfV,0,My,0,C9,[],0,3,
0,KY,["Hs",Bgu(ASK),"j5",Bgu(AUI)],Em,0,C,[Ck],3,3,0,0,0,NF,0,C,[Em],3,3,0,0,0,FD,0,C,[EM],0,3,0,BlC,0,Yj,0,Bz,[],0,0,0,0,["P",Bgv(A_F),"c",Bgx(A2U),"S",Bgv(AKk),"q",Bgu(AMx)],IK,0,C,[],3,3,0,0,0,Ff,0,C,[GU],1,3,0,0,["b",Bgu(LJ),"G3",Bgv(AF9)],Uh,0,Ff,[],0,3,0,0,["PR",Bgw(A0j),"gC",Bgu(AOQ),"i6",Bgu(AVP)],UA,0,DG,[],0,3,0,0,0,Hi,0,Eb,[Hn],0,3,0,0,0,JH,0,C,[],3,3,0,0,0,AA_,0,C,[],4,3,0,0,0,Gg,0,C,[],0,3,0,0,["N0",Bgv(Of),"Fq",Bgu(A_D),"Cb",Bgu(AKu),"t$",Bgu(AHB),"tW",Bgu(AV2),"p9",Bgu(A2Z),"I9",Bgv(A58)],ACw,
0,C,[],0,3,0,0,0,PY,0,CH,[],0,3,0,0,0,Re,0,C,[],0,0,0,0,["b",Bgu(AV4)],Kj,0,C,[Ck],3,3,0,0,0,VG,0,C,[Ch],0,3,0,0,["b",Bgu(AJS),"P",Bgv(AEa),"Eu",Bgw(AD6),"um",Bgv(A$L),"sY",Bgy(AQn),"KE",Bgv(ALv),"jq",Bgv(A$S),"F8",Bgx(ARi),"Nm",function(b,c,d,e,f,g){Km(this,b,c,d,e,f,g);},"Ro",Bgy(Gd),"vN",function(b,c,d,e,f,g,h,i){A$R(this,b,c,d,e,f,g,h,i);},"BC",function(b,c,d,e,f,g,h){A0f(this,b,c,d,e,f,g,h);},"E6",function(b,c,d,e,f,g){AVE(this,b,c,d,e,f,g);},"Qz",Bgx(Fn),"eF",Bgu(A4U),"be",Bgu(AXV)],ZO,0,C,[Hp],0,3,0,
0,["xD",Bgx(APU),"mu",Bgu(AY5),"fu",Bgu(AKx),"rw",Bgx(AJc),"hX",Bgw(AQm),"hQ",Bgw(ALT),"be",Bgu(AMs)],ACR,0,C,[],0,3,0,0,0,E_,0,C,[E1,Cz],0,3,0,0,0,V9,0,C,[],0,3,0,0,0,Q8,0,Cl,[],0,3,0,0,["No",Bgx(AUP),"q5",Bgu(A2K)],Hy,0,C,[],0,3,0,BlL,0,La,0,C,[],0,3,0,BlN,0,Uo,0,C,[],0,3,0,0,["lU",Bgw(A47),"sk",Bgv(AVv),"nT",Bgu(AZS),"Kn",Bgu(AM3),"AM",Bgw(AHT),"uO",Bgu(AKa),"FR",Bgu(A6x),"D8",Bgv(ANu),"p1",Bgu(A7r),"f6",Bgu(A_O),"Dd",Bgu(A$0),"Cp",Bgu(ALi)],AED,0,C,[],0,3,0,0,0,BA,0,Y,[],9,3,0,ZL,0,AFn,0,BA,[],12,0,0,0,
0,Ib,0,C,[],3,3,0,0,0,AFl,0,BA,[],12,0,0,0,0,IZ,0,C,[Cz],3,3,0,0,0,MK,0,C,[IZ],3,3,0,0,0,AFs,0,BA,[],12,0,0,0,0,AFm,0,BA,[],12,0,0,0,0,EY,0,Y,[],12,3,0,Bb$,0,AFp,0,BA,[],12,0,0,0,["uV",Bgu(A$k)],AFv,0,BA,[],12,0,0,0,0]);
$rt_metadata([AFr,0,BA,[],12,0,0,0,0,AFq,0,BA,[],12,0,0,0,0,AFu,0,BA,[],12,0,0,0,0,ABf,0,C,[],0,3,0,0,0,KU,0,C,[],0,3,0,0,["Ma",Bgy(Ty)],ABA,"BufferOverflowException",18,Bk,[],0,3,0,0,["b",Bgu(A1x)],Hh,0,C1,[Co],1,3,0,0,["fP",Bgx(Qt),"zo",Bgx(A87),"N6",Bgu(Mj),"NV",Bgu(HC),"Dm",Bgv(ASb),"C9",Bgv(A8e),"eH",Bgu(A9b),"dm",Bgu(AVG),"c7",Bgv(A4I),"c4",Bgv(AXk)],AFa,0,DC,[],0,3,0,0,0,Xm,0,W,[],0,0,0,0,["b",Bgu(AOV),"O",Bgu(A3Z)],MU,0,C,[],0,3,0,0,["MD",Bgx(ATd)],Ej,0,C,[],1,0,0,0,["b",Bgu(KJ)],AEJ,0,Ej,[],0,0,0,0,
["b",Bgu(AM6),"iV",Bgv(A8v),"zG",Bgw(AUT)],AEI,0,Ej,[],0,0,0,0,["b",Bgu(AYe),"iV",Bgv(AJP),"zG",Bgw(AR9)],ABE,0,Gy,[],0,3,0,0,0,X2,0,W,[],0,0,0,0,["b",Bgu(A2s),"O",Bgu(A7X)],EJ,0,C,[],1,3,0,AM_,["b",Bgu(JO)],L8,0,EJ,[],4,0,0,BbD,["Pf",Bgv(Y9),"y3",Bgv(Mc),"NE",Bgv(AFI)],Is,0,Ct,[E1],0,3,0,0,0,VB,0,C,[],0,3,0,0,["F5",Bgv(A0b)],DJ,0,BR,[],0,0,0,0,["mj",Bgv(ARI),"bB",Bgw(AWi),"q",Bgu(AOG),"b0",Bgv(ARd),"rN",Bgu(A6u)],L7,0,C,[Ng],0,3,0,VY,["b",Bgu(AFt),"Eu",Bgw(KE),"B1",Bgu(A1$),"eF",Bgu(ATc),"CQ",Bgy(AOd),"hM",
Bgu(ANH),"Ga",Bgu(AK9),"Fw",Bgv(A6m),"EL",Bgu(AIi)],MC,0,C,[],32,0,0,Be4,0,AAt,0,CX,[],1,3,0,0,0,Q5,0,U,[],0,0,0,0,["b",Bgu(AVV),"RQ",Bgw(Rb),"Qk",Bgx(AW6),"cn",Bgv(AHj),"IV",Bgv(A_E),"bu",Bgw(A9y),"G9",Bgv(AWC),"uv",Bgv(AUc),"n",Bgv(AKc),"bF",Bgu(AV7),"b$",Bgu(A0R),"jS",Bgu(ATP),"d",Bgu(A5G),"fy",Bgu(AL5)],AFK,"BufferUnderflowException",18,Bk,[],0,3,0,0,["b",Bgu(AUv)],EF,0,BX,[],0,3,0,A0W,["cK",Bgu(ASs),"b1",Bgv(Zu),"b",Bgu(Gl),"JA",Bgu(ALp),"LH",Bgu(A38),"Hh",Bgu(A7I),"C5",Bgu(ANw)],M6,0,EF,[],0,3,0,AUA,["b1",
Bgv(AAZ),"b",Bgu(XA),"CE",Bgu(A0N),"Hj",Bgu(AJw)],Gc,0,B$,[],1,3,0,0,0,P7,0,Fi,[],0,0,0,0,["eK",function(b,c,d,e,f,g){A5d(this,b,c,d,e,f,g);},"si",Bgv(AO0),"kO",Bgw(A7i)],ADr,0,C,[],0,3,0,0,0,Yu,0,C,[],0,3,0,0,0,JR,0,Ct,[JE],0,3,0,0,0,AGj,0,JR,[],0,0,0,0,0,AGf,0,Bp,[],0,0,0,0,0,EK,"IOException",20,Ce,[],0,3,0,0,["b",Bgu(YX)],EQ,0,EK,[],0,3,0,0,["b",Bgu(KN)],VE,"MalformedInputException",19,EQ,[],0,3,0,0,["P",Bgv(AQY),"kp",Bgu(ALO)],Fa,0,Y,[],12,3,0,UW,0,VW,"CloneNotSupportedException",21,Ce,[],0,3,0,0,["b",Bgu(A22)],FM,
0,Hh,[],1,0,0,0,["fP",Bgx(LW),"Fs",Bgv(A7o),"bZ",Bgu(A3G)],FU,0,FM,[],1,0,0,0,["eK",function(b,c,d,e,f,g){LX(this,b,c,d,e,f,g);},"d1",Bgu(A2j)],AEf,0,Ft,[],0,3,0,0,["P",Bgv(AYW)],Ii,0,C,[BB],0,3,0,0,["b",Bgu(Yr),"DT",Bgv(ATC),"yC",Bgu(AK0),"Iz",Bgu(AHU),"t_",Bgu(A0Y)],ADb,0,Ii,[],0,3,0,0,["b",Bgu(A2p),"EH",Bgv(A2l),"HB",Bgw(A7Y)],HR,0,C,[Ck],3,3,0,0,0,Sf,0,C,[HR],1,3,0,0,["Op",Bgv(A_h),"Re",Bgu(AJT)],AHc,0,Ci,[],0,3,0,0,0,Ob,0,BX,[],0,3,0,A4n,["b1",Bgv(AEd),"GV",Bgu(A0M)],RO,0,I$,[],0,0,0,0,["b",Bgu(A3A),"O",
Bgu(AMU)],K5,"BitmapFont",14,C,[Ch],0,3,0,0,["vM",Bgw(AOz),"QH",Bgx(WX),"Qu",Bgx(ABq),"CW",Bgv(AV1),"D7",Bgy(AMw),"JF",Bgu(AS1),"FJ",Bgu(A$m)]]);
$rt_metadata([ACe,0,C,[],0,3,0,0,0,Gq,0,BO,[],0,0,0,0,["gH",Bgw(KF),"c",Bgx(AIx),"L",Bgv(A7j),"h0",Bgv(AKw),"q",Bgu(AXr),"S",Bgv(ASc)],Wu,0,U,[],0,0,0,0,["ON",Bgw(AV0),"n",Bgv(ALK)],Ws,0,U,[],0,0,0,0,["NT",Bgx(A52),"n",Bgv(AW2)],Nh,0,C2,[],0,3,0,A9L,["b",Bgu(AFb),"b1",Bgv(TJ),"qH",Bgy(ARe),"Cn",Bgw(AWI),"FO",Bgu(ARu),"It",Bgu(A0G)],ZQ,0,EA,[],0,0,0,0,["vh",Bgy(A5f),"c",Bgx(A8f)],D_,0,Cr,[E1],0,3,0,0,0,LH,0,C,[Em],3,3,0,0,0,Yt,0,Cl,[],0,0,0,0,0,Zr,0,C,[],0,3,0,0,0,Ov,0,C,[],0,3,0,BeN,["Qm",Bgw(AGq),"IO",Bgv(ALj),
"bz",Bgu(A6e),"EW",Bgx(AV8),"DH",function(b,c,d,e,f,g,h,i,j){return A_g(this,b,c,d,e,f,g,h,i,j);},"De",Bgx(AKn)],ABz,0,C,[],4,3,0,0,0,Pa,0,BR,[],0,0,0,0,["AB",Bgv(A9g),"bB",Bgw(APq),"q",Bgu(ANo)],WS,0,U,[],0,0,0,0,["M4",Bgv(AWj),"n",Bgv(ANV)],ADh,0,CX,[],1,3,0,0,0,AGe,0,Bp,[],0,0,0,0,0,AGg,0,CM,[],0,0,0,0,0,Sd,0,BO,[],0,0,0,0,["OQ",Bgw(AU9),"c",Bgx(AIR),"L",Bgv(A6p),"q",Bgu(A62),"S",Bgv(AJD),"b0",Bgv(AJg)],ME,0,C,[],3,3,0,0,0,Fp,0,C,[ME,D0],0,0,0,0,["DF",Bgw(MA)],Nn,0,Fp,[],0,0,0,0,["DF",Bgw(ARy),"Jk",Bgu(AI5),
"x4",Bgw(AT3)],AGn,0,B_,[],0,3,0,0,0,Fu,0,CE,[],0,0,0,0,["b",Bgu(A9h),"c",Bgx(AUj),"q",Bgu(AYX)],Iq,0,Eu,[DR],1,3,0,0,0,Yc,0,Iq,[DR],0,3,0,0,0,Wb,0,BR,[],0,0,0,0,["tL",Bgv(A49),"bB",Bgw(A8o),"ci",Bgx(A04),"cp",Bgy(AZk),"q",Bgu(ANd),"S",Bgv(AXu)],H1,0,D_,[],0,3,0,0,0,AAc,0,H1,[],0,3,0,0,0,Jl,0,C,[],3,3,0,0,0,X_,0,C,[Jl],0,3,0,0,["Ed",Bgw(A9M),"MJ",Bgx(Xh),"tg",Bgu(A_J),"J",Bgu(AI7)],E$,0,C,[],0,3,0,0,["Nz",Bgv(AXQ),"Iv",Bgy(A8B),"IM",Bgy(AJl),"xl",Bgu(AUY),"Dw",Bgu(AKy),"GS",Bgu(AH1)],K1,0,E$,[],0,3,0,0,0,SM,
0,Fi,[],0,0,0,0,["eK",function(b,c,d,e,f,g){AXc(this,b,c,d,e,f,g);},"si",Bgv(AWD),"kO",Bgw(A30)],LP,0,C,[],3,3,0,0,0,Y7,0,C,[LP],0,3,0,0,["NL",Bgv(A4u),"gY",Bgu(AKA),"sH",Bgu(ARr),"bp",Bgu(A$u),"bl",Bgu(AV$),"Li",Bgu(ATN),"IB",Bgu(A6S),"oU",Bgw(AWT),"q8",Bgv(A7H),"n7",Bgu(AS_),"Fj",Bgw(A1p)],Dn,0,C,[],0,3,0,0,["b",Bgu(ES),"be",Bgu(AVC),"xo",Bgu(A1v)],ABg,0,Gp,[],0,3,0,0,["bR",Bgv(AJ8)],Qo,0,Ff,[],0,3,0,0,["Pg",Bgw(RI),"QG",Bgv(AHJ),"NC",Bgw(AEo),"gC",Bgu(A89),"EY",Bgx(ANt)],Zo,0,C,[],0,3,0,0,0,ABQ,0,C,[],0,
3,0,0,0,YT,0,C,[FH],0,0,0,0,["Pq",Bgv(ARn),"dk",Bgu(A5x),"da",Bgu(A9o)],Ot,0,C,[],3,3,0,0,0,AD5,0,C,[Ot],0,3,0,0,["Pm",Bgv(A0g)],Z0,0,C,[BB],0,3,0,0,0,ND,0,C,[],32,0,0,BmD,0,F_,0,Cr,[],0,3,0,BmI,0,AEQ,0,F_,[],0,3,0,0,0,JT,0,C,[],1,3,0,0,["rG",Bgx(XK),"P_",Bgv(AFY),"sb",Bgv(A9G),"QD",Bgv(Ux),"n8",Bgv(A2f),"Pi",Bgx(AAY),"Oy",Bgv(Tq),"CD",Bgv(AP9)],H5,0,JT,[],1,3,0,0,["rG",Bgx(Zb),"Bx",Bgw(ATY)],Ut,0,H5,[],0,3,0,0,["nD",Bgv(A3V),"Ck",function(b,c,d,e,f,g,h){return A$v(this,b,c,d,e,f,g,h);}]]);
$rt_metadata([Ix,0,C,[],0,3,0,0,0,TW,0,C,[Ck],1,3,0,0,0,AHh,0,CK,[],0,0,0,0,["ja",Bgx(AR2),"c",Bgx(AIw)],AEy,0,C,[],0,3,0,0,["Oz",Bgw(A5E),"fn",Bgv(A2M),"eq",Bgv(AYx),"gd",Bgv(A9B),"ft",Bgv(A7y)],Kk,0,C,[],3,3,0,0,0,TB,0,C,[Kk],0,3,0,0,["b",Bgu(AYo)],Dw,0,Ce,[],0,3,0,0,["b",Bgu(JQ)],LK,"InstantiationException",21,Dw,[],0,3,0,0,["b",Bgu(A3$)],ACu,0,Ea,[],0,3,0,0,0,Qj,0,U,[],0,0,0,0,["Ob",Bgv(A$9),"n",Bgv(AUw)],Ke,0,C,[],3,3,0,0,0,LG,0,C,[Ke,NI],0,3,0,AM0,["b",Bgu(SG),"jm",Bgu(A2t),"sF",Bgv(A8S),"Fu",Bgv(A1c),
"LP",Bgu(A4l),"Bb",Bgu(A0r),"wJ",Bgu(AYQ),"EC",Bgw(AZC),"Nw",Bgv(A6M)],Og,0,C,[],3,3,0,0,0,Ju,0,BI,[],1,3,0,0,0,Tt,0,Ju,[],0,3,0,0,0,ZU,0,C,[],0,3,0,0,0,N4,0,Fp,[],0,0,0,0,["Pe",Bgw(ARA)],EZ,0,C,[],3,3,0,0,0,TT,0,DC,[],0,3,0,0,0,AGv,0,C,[],0,3,0,0,0,VU,0,W,[],0,0,0,0,["b",Bgu(AOc),"O",Bgu(ATz)],Y$,0,Dn,[],0,3,0,0,["b",Bgu(AL$),"sw",Bgv(A6h),"Iw",Bgw(A71),"k0",Bgu(AO4),"jM",Bgw(AL2)],EG,0,Y,[],12,3,0,Bd5,0,AAz,0,Ci,[],0,3,0,0,0,YL,0,Bz,[],0,0,0,0,["CV",Bgv(A7d),"c",Bgx(AZf),"S",Bgv(AMu),"q",Bgu(AXW)],Ir,0,BX,
[],0,3,0,QX,["b",Bgu(QP),"b1",Bgv(AC$),"x6",Bgu(A_P),"xf",Bgu(AY0)],Sr,0,BI,[],0,3,0,0,0,Jv,0,C,[Hp],0,3,0,0,["xD",Bgx(ADc),"mu",Bgu(AMt),"fu",Bgu(AR_),"rw",Bgx(A5$),"hX",Bgw(A0X),"hQ",Bgw(AX1),"be",Bgu(AT4)],Ze,0,Jv,[],0,3,0,0,["MM",Bgw(A7Z)],Va,0,W,[],0,0,0,0,["b",Bgu(AMK),"O",Bgu(A7$)],AB9,0,CM,[],0,0,0,0,0,Iu,0,E_,[],0,3,0,0,0,AB8,0,Iu,[],0,0,0,0,0,T2,0,CD,[],0,0,0,0,0,II,0,BI,[],0,3,0,0,0,ZV,0,II,[],0,3,0,0,0,SJ,0,W,[],0,0,0,0,["b",Bgu(AJN),"O",Bgu(ARN)],ACs,0,C,[HG],0,3,0,0,["ng",Bgw(A0x),"fd",Bgu(ARW),
"kM",Bgu(AWE),"zp",Bgx(A20),"rs",Bgu(AUC),"ee",Bgu(AOp),"zQ",Bgu(AJB),"be",Bgu(AJR)],Zs,0,Bz,[],0,0,0,0,["b",Bgu(ATb),"c",Bgx(AN8),"S",Bgv(AVY),"q",Bgu(AX7)],Mr,0,C,[],3,3,0,0,0,Q_,0,C,[],0,3,0,0,0,Lj,0,CE,[],0,0,0,0,["P",Bgv(ACX),"c",Bgx(AXj),"q",Bgu(AZT),"S",Bgv(A7_)],X8,0,D_,[],0,3,0,0,0,AGu,0,Gs,[],0,3,0,0,0,ADP,0,HK,[],0,3,0,0,0,LQ,0,C,[],4,3,0,AQU,0,Yi,0,BR,[],0,0,0,0,["P",Bgv(A8M),"bB",Bgw(ASH),"q",Bgu(A_v)],SF,"BitmapFont$BitmapFontData",14,C,[],0,3,0,0,["vM",Bgw(A5B),"KS",Bgw(AKd),"Av",Bgw(AXB),"uG",
Bgw(AVq),"yI",Bgu(A44),"gI",Bgv(AKH),"A8",function(b,c,d,e,f){AJY(this,b,c,d,e,f);},"FS",Bgw(AHE),"t6",Bgv(AKs),"l4",Bgv(AK3)],ACb,0,CI,[],4,3,0,0,0,Z8,0,W,[],0,0,0,0,["gH",Bgw(A$x),"O",Bgu(AO5)]]);
$rt_metadata([Ex,0,CK,[],0,0,0,0,["ja",Bgx(N1),"c",Bgx(A4H),"L",Bgv(AWa)],TH,0,Go,[],0,3,0,0,["lG",Bgw(A5u)],OQ,0,Fh,[],0,3,0,BmU,0,ACU,0,U,[],0,0,0,0,["O4",Bgv(AST),"n",Bgv(AUi)],Xw,0,C,[HN],0,3,0,0,["G3",Bgv(A2B),"hZ",Bgu(A9E)],Yv,0,Db,[],0,0,0,0,["mj",Bgv(AKN),"n",Bgv(AN4),"q",Bgu(AVe)],M3,0,C,[],3,3,0,0,0,FK,0,Y,[],12,3,0,A97,0,XY,0,W,[],0,0,0,0,["b",Bgu(A5p),"O",Bgu(A2g)],KX,0,C,[Hp],0,3,0,Sk,["xD",Bgx(Z9),"mu",Bgu(AX6),"fu",Bgu(A5H),"rw",Bgx(AYj),"hX",Bgw(ATo),"hQ",Bgw(ALa),"be",Bgu(A0K)],R0,0,C,[],4,
3,0,0,0,UB,0,Ci,[],0,3,0,0,0,YQ,0,B_,[],0,3,0,0,0,N0,0,C,[],3,3,0,0,0,J1,"TeaGL20",5,C,[N0],0,3,0,0,["G8",Bgv(ADg),"oG",Bgv(AVQ),"GX",Bgv(AOZ),"H0",Bgv(A92),"A2",Bgv(AT$),"pP",Bgw(ZK),"Aa",Bgv(AFo),"o7",Bgv(We),"qs",Bgv(UM),"ok",Bgx(Rh),"yz",Bgy(Tp),"yl",Bgv(W1),"En",Bgu(AUM),"k4",Bgv(R9),"tb",Bgw(Rg),"gQ",function(b,c,d,e,f,g,h,i,j){ADw(this,b,c,d,e,f,g,h,i,j);},"zy",Bgx(TU),"xd",Bgy(Ys),"or",Bgw(SB),"bV",Bgw(Xi),"vs",Bgy(ABb),"d8",Bgy(RS),"kx",Bgy(AAK),"uh",Bgv(S8),"x7",Bgu(Xx),"zd",Bgv(UQ),"h_",Bgv(ASE),
"x9",Bgv(AEi),"oM",Bgv(Uu),"oE",Bgv(AC9),"zM",Bgy(T6),"AR",Bgv(AFP),"g$",Bgu(A23),"oj",Bgv(O$),"z5",Bgy(YO),"At",Bgy(ACl),"rt",Bgw(AAH),"xX",Bgw(Ua),"kw",Bgx(AC8),"p4",Bgv(Xs),"yQ",Bgx(Rc),"yY",Bgv(TA),"ql",Bgw(AA0),"wX",Bgv(Y6),"AU",Bgw(Yg),"jc",Bgx(UF),"yg",Bgw(UL),"D4",function(b,c,d,e,f){A1i(this,b,c,d,e,f);},"pF",Bgv(Qi),"zT",function(b,c,d,e,f,g){ACx(this,b,c,d,e,f,g);}],AGc,"TeaGL20Debug",5,J1,[],0,3,0,0,["G8",Bgv(AU1),"pP",Bgw(A$J),"Aa",Bgv(AZl),"o7",Bgv(APx),"qs",Bgv(A_a),"ok",Bgx(ANB),"yz",Bgy(AU5),
"yl",Bgv(AI6),"k4",Bgv(AOB),"tb",Bgw(AQv),"gQ",function(b,c,d,e,f,g,h,i,j){ALP(this,b,c,d,e,f,g,h,i,j);},"zy",Bgx(A0o),"xd",Bgy(A$W),"or",Bgw(AH8),"bV",Bgw(AHn),"vs",Bgy(AHl),"d8",Bgy(AOg),"kx",Bgy(A1I),"uh",Bgv(AVL),"x7",Bgu(AQN),"zd",Bgv(AVy),"x9",Bgv(A9Q),"oM",Bgv(AWF),"oE",Bgv(AQM),"zM",Bgy(A1X),"AR",Bgv(AVD),"oj",Bgv(A5l),"z5",Bgy(A3p),"At",Bgy(AJm),"rt",Bgw(A12),"xX",Bgw(AWS),"kw",Bgx(ALV),"p4",Bgv(A06),"yQ",Bgx(AIc),"yY",Bgv(A7A),"ql",Bgw(A8$),"wX",Bgv(AO2),"AU",Bgw(AU0),"jc",Bgx(A86),"yg",Bgw(AVp),"pF",
Bgv(AXm),"zT",function(b,c,d,e,f,g){AJU(this,b,c,d,e,f,g);}],XB,0,CM,[],0,0,0,0,0,XC,0,E_,[],0,0,0,0,0,ABC,0,C,[JH],0,0,0,0,["b",Bgu(A0w),"mI",Bgv(AZE),"wQ",Bgv(A6P)],Lo,0,EF,[],0,3,0,ASW,["b1",Bgv(AEp),"b",Bgu(O4),"Kr",Bgv(A3i)],JA,0,W,[],0,0,0,0,["b",Bgu(S7),"O",Bgu(ABN)],U5,0,C,[DR,F8],0,3,0,0,0,Hr,0,C,[],4,3,0,Bm2,0,R7,0,C,[Lb],0,0,0,0,["Mx",Bgv(A1M),"GD",Bgv(AUN)],Nc,0,C,[Ch],0,3,0,Bm4,0,Nl,0,C,[Em],3,3,0,0,0,Lc,0,C,[Em],3,3,0,0,0,OO,0,C,[Em],3,3,0,0,0,Om,0,C,[Em,Nl,Lc,NF,LH,OO],3,3,0,0,0,AD4,0,C,[],0,
3,0,0,0,LS,0,C,[],3,3,0,0,0,ABs,0,C,[BB],0,3,0,0,0,CT,0,C,[BB],0,3,0,Dy,["b",Bgu(Vz),"hP",Bgv(A_G),"z7",Bgv(AJs),"wf",Bgv(APY),"qd",Bgu(ALk),"xn",Bgy(A4$),"vx",function(b,c,d,e,f,g){return A5C(this,b,c,d,e,f,g);},"Ee",Bgx(AJQ),"LA",Bgw(ALQ),"H4",Bgx(A03)],J7,0,C,[],32,0,0,Bnf,0,AHg,"NegativeArraySizeException",21,Bk,[],0,3,0,0,["b",Bgu(A6L)],Mo,0,BX,[],0,3,0,AZb,["b",Bgu(Ym),"b1",Bgv(Xd)],ABr,0,BI,[],0,3,0,0,0,ABc,0,Gv,[],0,3,0,0,["P",Bgv(A5m)],Yz,0,DD,[],0,3,0,0,0,SX,0,S,[],0,3,0,0,["kn",Bgv(AI$)],Zl,0,C,[Cz],
0,3,0,0,["Ow",Bgv(A69),"FK",Bgw(AHa),"fi",Bgu(A2D)],AC7,"IllegalStateException",21,Bk,[],0,3,0,0,["b",Bgu(A8D),"bR",Bgv(A6C)],AGU,0,C,[],0,3,0,0,0,Jz,0,C,[IZ],1,3,0,0,["b",Bgu(WZ),"DZ",Bgv(A0L)],I1,0,Jz,[MK],1,3,0,0,["b",Bgu(ABX),"vo",Bgu(ALM)],S0,0,EA,[],0,0,0,0,["vh",Bgy(A6T),"c",Bgx(A8r)],Tv,0,CH,[],0,3,0,0,0,EV,0,C1,[Co],1,3,0,0,["OF",function(b,c,d,e,f){YV(this,b,c,d,e,f);},"wi",Bgx(AZX),"D9",Bgv(AQ7),"tD",Bgx(A9Z),"Qv",Bgv(AA8),"Im",Bgu(AYf),"Rw",Bgu(H7),"L4",Bgv(Gj),"PA",Bgu(Kw),"OD",Bgu(JS),"Ii",Bgv(A0J),
"eS",Bgv(ATm),"eH",Bgu(AJJ),"c7",Bgv(ARl),"c4",Bgv(AXo)],S1,0,Bz,[],4,0,0,0,["b",Bgu(AKY),"c",Bgx(A4f),"S",Bgv(A25),"q",Bgu(AP1)],DT,0,C,[BB,Ib],0,3,0,ARh,["b",Bgu(ACP),"Pb",Bgx(S$),"cF",Bgx(A4r),"ds",Bgv(AKT),"ym",Bgv(ATO),"G_",Bgx(AOI),"pW",Bgv(AP$),"EX",Bgx(ATe),"zn",Bgv(A8n),"IN",Bgu(AKl),"fY",Bgu(A_T),"Ek",Bgv(ATZ),"tN",Bgv(AZ7),"Df",Bgx(A4W),"Be",Bgv(AZu)]]);
$rt_metadata([ET,0,C,[BB,Ib],0,3,0,ARg,["b",Bgu(T4),"lG",Bgw(VQ),"D5",Bgu(A2e),"c9",Bgv(AYZ),"bN",Bgw(AHo),"F_",Bgu(A85),"q2",Bgv(AWt)],AFd,0,B$,[],0,3,0,0,0,ABi,0,DG,[],0,3,0,0,0,Q2,0,C,[],4,3,0,0,["Og",Bgv(AT_),"xI",Bgu(Ge),"wD",Bgv(Vt),"yj",Bgv(AHd)],AAv,0,C,[],1,3,0,0,0,AF6,0,FM,[],0,0,0,0,["N2",function(b,c,d,e,f,g){A_x(this,b,c,d,e,f,g);},"sh",Bgv(AMn),"n_",Bgw(A3f),"d1",Bgu(AZZ)],AAX,0,C,[Ch,F8],0,3,0,0,0,Js,0,C,[],0,3,0,VF,0,UP,0,Dn,[],0,3,0,0,["b",Bgu(AQw),"sw",Bgv(AYN),"K0",Bgw(A70),"qH",Bgy(ANx),
"KH",Bgv(A_j),"D1",Bgv(AQ$)],OU,0,C,[],3,3,0,0,0,Fc,0,Fo,[],1,3,0,0,0,TP,0,Fc,[],4,3,0,0,0,YD,0,W,[],0,0,0,0,["b",Bgu(APo),"O",Bgu(A$y)],HP,0,C,[If],1,3,0,0,["b",Bgu(AAo)],Tm,0,HP,[D0,BB],0,3,0,0,["xt",Bgv(A10),"b",Bgu(ALe),"P",Bgv(O9),"j2",Bgw(AGA),"I",Bgv(AUd),"PN",Bgv(AC4),"PT",Bgx(KZ),"RC",Bgu(Ln),"s",Bgw(AQf),"Lq",Bgw(ATV),"tj",Bgx(ARO),"HC",Bgv(A1F),"l7",Bgu(A7v),"fM",Bgv(APT),"M7",Bgv(UX),"cx",Bgu(AZw)],AFf,0,C,[],0,3,0,0,["b",Bgu(ARH),"ng",Bgw(WL),"wG",Bgv(AY$),"s9",Bgv(AIU),"ur",Bgx(ATl),"ut",Bgx(AIo),
"i2",Bgv(AZI),"qN",Bgw(AWU),"yX",Bgu(A0D),"C4",Bgu(ANF),"bz",Bgu(AX_),"Kj",Bgv(ASm),"q_",Bgv(AQo),"jV",Bgv(AJ6)],XH,0,Hz,[],0,3,0,0,0,AEW,0,D_,[],0,3,0,0,0,Wj,0,DD,[],0,3,0,0,0,Yy,0,C,[],0,3,0,0,["bR",Bgv(AOt),"x8",Bgu(A1_),"KF",Bgw(A6O),"KL",Bgv(ANs),"C3",function(b,c,d,e,f){ANn(this,b,c,d,e,f);},"g6",Bgx(AXz),"BI",Bgx(AH5),"Lb",Bgv(AJE),"FY",Bgv(ANz)],JK,0,C,[],4,3,0,LD,0,JM,0,C,[],0,3,0,BD,["NI",Bgw(Z5),"mx",Bgu(AP6),"hJ",Bgu(A9K),"r_",Bgu(A3Q),"vJ",Bgu(AMV),"ra",Bgu(AUk),"i",Bgu(ALY),"uU",Bgu(ASv)],Mi,0,
Bz,[],4,0,0,0,["P",Bgv(AFw),"c",Bgx(A7a),"S",Bgv(AZt),"q",Bgu(A4N)],GV,0,C,[],0,0,0,0,["bh",Bgw(A9A),"bA",Bgu(A3W),"mX",Bgv(AY7),"Cv",Bgv(AYP),"pp",Bgu(AKV),"iU",Bgu(ARJ),"qE",Bgu(AJv),"z",Bgu(A7P),"hk",Bgu(AZB),"cs",Bgu(AXX),"CM",Bgu(ALX),"d",Bgu(AMo),"bH",Bgu(A2G),"fV",Bgu(AUZ),"z6",Bgu(AYu),"AX",Bgu(A7L),"dc",Bgu(AJh)],Ed,0,Y,[],12,3,0,EL,0,ACc,0,JA,[],0,0,0,0,["b",Bgu(AUp),"O",Bgu(AYb)],Z2,0,CX,[],1,3,0,0,0,SV,0,Dm,[],0,3,0,0,0,EC,0,Y,[],12,3,0,DP,["RH",Bgu(Q6)],Mg,0,C,[],3,3,0,0,0,AAF,0,FU,[],0,0,0,0,["eK",
function(b,c,d,e,f,g){AIv(this,b,c,d,e,f,g);},"sh",Bgv(A5W),"n_",Bgw(AZQ)],LL,0,Eb,[Hn],0,3,0,0,0,Eo,0,Y,[],12,3,0,Ez,0,E7,0,C,[],0,0,0,Rp,0,F6,0,BO,[],0,0,0,0,["Rh",Bgw(Rl),"c",Bgx(AH4),"ci",Bgx(APp),"cp",Bgy(A8c),"b0",Bgv(A4c),"go",Bgu(A6J),"dx",Bgu(AU3)],E5,0,C,[Fy],0,3,0,Mt,["bR",Bgv(Zt),"Qa",Bgw(Or)],X9,0,C,[],1,3,0,0,0,PJ,0,F6,[],0,0,0,0,["MA",Bgv(AR$),"ci",Bgx(AMb),"cp",Bgy(A_z),"go",Bgu(AKg)],Xc,"BufferOverflowException",19,Bk,[],0,3,0,0,["b",Bgu(AQr)],YE,0,C,[Ck],1,3,0,0,0,ZJ,0,C,[],0,3,0,0,0,Tw,0,
C,[],0,3,0,0,["b",Bgu(AK8),"j2",Bgw(AAx),"gg",Bgv(AT1),"ER",Bgv(AZY),"Ik",Bgv(AUb)],MP,"MissingResourceException",16,Bk,[],0,3,0,0,["QX",Bgx(A02)],Bv,"IndexOutOfBoundsException",21,Bk,[],0,3,0,0,["b",Bgu(QZ),"bR",Bgv(BC)],AGH,"StringIndexOutOfBoundsException",21,Bv,[],0,3,0,0,["b",Bgu(ATu)],ABF,0,Gq,[],0,0,0,0,["gH",Bgw(AMj),"c",Bgx(APk),"q",Bgu(AYD)],K9,0,C,[],4,3,0,BcR,0,Jo,0,C,[],4,3,0,E3,0,Fd,0,Y,[],12,3,0,Kg,0,LR,0,FX,[],0,3,0,AVc,["ik",Bgx(AOh)]]);
$rt_metadata([Tf,0,Do,[],0,0,0,0,["fh",Bgx(AIF),"c",Bgx(A_k),"ci",Bgx(ATi),"q",Bgu(A65)],Gr,0,Y,[],12,3,0,BbC,0,Te,0,CN,[],0,0,0,0,["fh",Bgx(AY1),"c",Bgx(AVl)],AGN,0,Gc,[],0,3,0,0,0,KK,0,C,[],3,3,0,0,0,ADS,"CoderMalfunctionError",19,Eh,[],0,3,0,0,["Al",Bgv(APV)],Ig,0,Bl,[],0,3,0,Bfn,["kn",Bgv(AGE)],OB,0,C,[],4,3,0,ALZ,0,ADO,0,EE,[],0,0,0,0,["uF",Bgw(AYR)],ACq,0,C,[Ck],1,3,0,0,0,Uj,0,C,[BB],4,3,0,0,0,GT,0,C,[Ch],0,3,0,Gb,["PX",Bgv(PL),"O9",Bgx(WJ),"zJ",Bgv(AHV),"eW",Bgu(AKP),"it",Bgu(ANW),"jz",Bgu(AQb),"i5",
Bgu(ASQ),"bp",Bgu(AMP),"bl",Bgu(APL),"ix",Bgu(A73),"be",Bgu(AY8),"nO",Bgu(A42),"Lv",Bgu(AJj),"IF",Bgu(A5F),"E3",Bgu(A6k),"Ds",Bgu(A0d),"vA",function(b,c,d,e,f,g,h){A0q(this,b,c,d,e,f,g,h);},"GK",function(b,c,d,e,f,g,h,i,j){ARR(this,b,c,d,e,f,g,h,i,j);}],EP,0,EH,[],0,3,0,0,0,AFA,0,C,[BB],0,3,0,0,0,AFz,0,C,[BB],0,3,0,0,0,Qq,0,C,[Mr],0,3,0,0,["b",Bgu(A6K)],LF,0,C,[],3,3,0,0,0,HT,0,C,[LF],0,3,0,0,["RB",Bgy(AZx),"uu",Bgu(AWB),"we",Bgu(AZy),"Lr",Bgu(APn),"AL",Bgu(A3c),"bp",Bgu(AOF),"bl",Bgu(AZN),"eW",Bgu(ALN),"LF",
Bgu(AXE),"nW",Bgu(AK2),"Jr",Bgu(A5q),"Cx",Bgv(AZ3)],Qk,0,CD,[],0,0,0,0,0,Ql,0,CD,[],0,0,0,0,0,Um,0,Ft,[],0,3,0,0,["P",Bgv(AL6)],KM,0,C,[],0,3,0,0,0,ADj,0,C,[JH],0,0,0,0,["b",Bgu(AXO),"mI",Bgv(A61),"wQ",Bgv(ATv)],ADZ,0,C,[],0,3,0,0,["b",Bgu(AJy)],KL,0,C,[],3,3,0,0,0,SK,0,C,[KL],0,3,0,0,["MY",Bgy(A1H),"Mn",function(b,c,d,e,f){TR(this,b,c,d,e,f);},"K9",Bgw(AKe),"In",Bgv(A8W),"vr",Bgy(ATU),"p",Bgv(AYc),"o",Bgx(A4X),"hM",Bgu(A9s),"eF",Bgu(AJt),"fu",Bgu(AL_),"BM",Bgu(ALS),"be",Bgu(AZe)],I0,0,Ct,[],0,3,0,Bn6,0,AE0,
0,FG,[],0,3,0,0,["QK",Bgx(AHe),"N8",Bgv(AJi),"xq",Bgu(AZn),"ud",Bgx(A$T),"gC",Bgu(ANe)],VN,0,C,[],4,3,0,0,0,Wq,0,Ex,[],0,0,0,0,["ja",Bgx(A$V),"c",Bgx(APZ)],AEO,0,C,[],0,3,0,0,0,HJ,0,Bk,[],0,3,0,0,0,UT,0,Fg,[],0,3,0,0,0,MO,0,BX,[],0,3,0,AVg,["b1",Bgv(XI),"oc",Bgu(AII),"s1",Bgu(A66)],AB3,0,Bp,[],0,0,0,0,0,P4,0,EJ,[],4,3,0,0,["b",Bgu(AHZ),"y3",Bgv(AWd)],AB2,0,FD,[],0,0,0,0,0,QR,0,S,[],0,3,0,0,["kn",Bgv(A0$)],AB4,0,Bp,[],0,0,0,0,0,AFH,0,C,[],4,3,0,0,0,N3,0,C,[],3,3,0,0,0,AB_,0,BR,[],0,0,0,0,["AB",Bgv(AZ8),"bB",
Bgw(AKQ),"ci",Bgx(AYh),"cp",Bgy(A1B),"q",Bgu(AQ5),"b0",Bgv(AM$),"Jl",Bgx(A9J),"GW",Bgx(A80),"r9",Bgw(ANr)],IX,0,Ci,[],0,3,0,0,0,Sy,0,IX,[],0,3,0,0,0,C$,"ReflectionException",9,Ce,[],0,3,0,0,["hc",Bgw(D1)],Gu,0,CN,[],0,0,0,0,["fh",Bgx(MJ),"c",Bgx(A8H),"L",Bgv(A91)],AEG,0,DC,[],0,3,0,0,0,QV,0,BR,[],0,0,0,0,["mj",Bgv(AQz),"bB",Bgw(A3C),"q",Bgu(AYB)],AEu,0,C,[KP],0,3,0,0,0,ABK,0,C,[G0],0,3,0,0,0]);
$rt_metadata([Sx,0,C,[BB,EZ],0,3,0,0,0,AB1,0,B_,[],0,3,0,0,0,Tk,0,Bp,[],0,0,0,0,0,Mp,0,Eb,[Hn],0,3,0,0,0,Tj,0,Bp,[],0,0,0,0,0,ZH,0,C,[],4,3,0,0,0,L2,0,BX,[],0,3,0,AUK,["GP",Bgv(AHQ),"QC",Bgv(W_),"b1",Bgv(ACG),"Dp",function(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return APK(this,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);},"F2",Bgv(A1N),"Ef",function(b,c,d,e,f,g,h,i){return AI0(this,b,c,d,e,f,g,h,i);},"KB",function(b,c,d,e,f){AOD(this,b,c,d,e,f);},"LI",Bgx(A3d),"Km",Bgu(A6F)],GJ,0,C,[],0,3,0,DQ,["bR",Bgv(AEz)],GR,0,C,[BB,Co],0,3,
0,A_6,["b1",Bgv(U4),"PB",Bgu(A1Z)],AB0,0,C,[],0,3,0,0,0,XR,"NoSuchElementException",16,Bk,[],0,3,0,0,["b",Bgu(A5k),"bR",Bgv(A3h)],JN,0,C,[],0,3,0,BeS,0,AE7,0,B_,[],0,3,0,0,0,Ug,0,C,[],3,3,0,0,0,AFS,0,Gq,[],0,0,0,0,["gH",Bgw(A9P),"c",Bgx(AKo),"ci",Bgx(AT2),"cp",Bgy(AIe),"b0",Bgv(A5a),"q",Bgu(A90)],MR,0,C,[Ck],3,3,0,0,0,Zw,0,Do,[],0,0,0,0,["RD",Bgy(A60),"c",Bgx(ARf),"ci",Bgx(AHD),"q",Bgu(A79)],TS,0,Fc,[],4,3,0,0,0,Ja,0,C,[],4,3,0,AGV,0,CA,0,Y,[],12,3,0,Ha,["MI",Bgu(FC)],ACO,0,C,[],0,3,0,0,0,E0,0,Y,[],12,3,0,Bec,
0,Vv,0,Dq,[],0,3,0,0,0,QA,0,Gg,[],0,3,0,0,["lU",Bgw(A$O),"Dn",Bgv(AIs)],Cj,0,Y,[],12,3,0,D3,0,E4,0,C,[Ch],0,3,0,Mv,["Ed",Bgw(XF),"DV",Bgu(ANP),"oe",Bgu(A8V),"pg",Bgu(A9R),"G7",Bgw(A4k),"o4",Bgw(A2J),"sd",Bgw(A0O),"D3",Bgx(AXH),"Fy",Bgx(A5e),"j$",function(b,c,d,e,f,g){A$8(this,b,c,d,e,f,g);},"ee",Bgu(AXN),"be",Bgu(AS7),"xJ",Bgv(AI_),"q0",Bgv(A4e),"jx",Bgv(A64),"me",Bgv(AI4)],D2,0,Y,[],12,3,0,N6,0,Yo,0,U,[],0,0,0,0,["Q4",Bgv(A_u),"n",Bgv(AKX)],JU,0,C,[],1,3,0,0,["b",Bgu(Vq),"HG",function(b,c,d,e,f){return A5_(this,
b,c,d,e,f);},"Ba",Bgv(APm)],RP,0,JU,[],0,3,0,0,["lG",Bgw(AZ5),"gY",Bgu(AZU),"Bv",Bgv(A_C)],H_,0,C,[HG],0,3,0,0,["ng",Bgw(AZV),"P",Bgv(AFk),"fd",Bgu(ANg),"kM",Bgu(AXf),"zp",Bgx(AQu),"rs",Bgu(AWy),"ee",Bgu(A$e),"zQ",Bgu(A7S),"be",Bgu(AYO)],RE,0,H_,[],0,3,0,0,["P",Bgv(A6i)],ADQ,0,B$,[],0,3,0,0,0,Y8,0,C,[],0,3,0,0,0,Zx,0,U,[],0,0,0,0,["B2",Bgx(AVi),"n",Bgv(ASG)],ZD,0,U,[],0,0,0,0,["ij",Bgy(A1g),"n",Bgv(AHk)],Zz,0,U,[],0,0,0,0,["lc",Bgw(AHw),"n",Bgv(A7M)],Zy,0,U,[],0,0,0,0,["B2",Bgx(AHH),"n",Bgv(A4D)],ZA,0,U,[],
0,0,0,0,["lc",Bgw(AHG),"n",Bgv(AMM)],Mk,0,C,[],0,3,0,0,0,ZG,0,U,[],0,0,0,0,["nA",Bgx(AKU),"n",Bgv(AZP)],ZC,0,U,[],0,0,0,0,["ij",Bgy(AH7),"n",Bgv(A0m)],ZB,0,U,[],0,0,0,0,["lc",Bgw(AWK),"n",Bgv(APs)],QS,0,Gg,[],0,3,0,0,["lU",Bgw(A4d),"Iu",Bgu(AUq),"JJ",Bgu(AUG)],Q3,0,BO,[],4,0,0,0,["CV",Bgv(AKf),"c",Bgx(A6b),"q",Bgu(AZF),"L",Bgv(A77),"cK",Bgu(AHi),"S",Bgv(AVK)],ZE,0,U,[],0,0,0,0,["nA",Bgx(A1Q),"n",Bgv(AT6)],CU,0,C,[Co],0,3,0,Ba,0,Pe,0,BR,[],0,0,0,0,["ly",Bgv(ASh),"bB",Bgw(AHX),"q",Bgu(ANm)],DI,0,BR,[],0,0,0,0,
["P",Bgv(AVI),"bB",Bgw(A7G),"ci",Bgx(A5K),"cp",Bgy(AJI),"q",Bgu(A93),"p7",Bgu(AWP),"b0",Bgv(A7s)],Uy,0,C,[Ck],1,3,0,0,0]);
$rt_metadata([WK,0,B_,[],0,3,0,0,0,T7,0,C,[],0,3,0,0,0,AGT,0,C,[Cz],0,3,0,0,0,U9,0,C,[BB,EZ],0,3,0,0,0,Ne,0,C2,[],0,3,0,BeP,["b1",Bgv(AEc),"pT",Bgu(AXb),"rP",Bgv(AQV)],N8,0,C,[],32,0,0,Ba1,0,Vc,0,C,[Cz],0,3,0,0,["P",Bgv(ASF),"j2",Bgw(Su),"gg",Bgv(AMG),"GA",Bgw(A13),"X",Bgv(AVZ),"ka",Bgv(A94),"Bt",Bgw(AVz)],AFC,0,Dx,[],0,3,0,0,["nD",Bgv(ALf),"ks",function(b,c,d,e,f,g,h){return ASx(this,b,c,d,e,f,g,h);}],Nb,0,C2,[],0,3,0,A9$,["b",Bgu(ABB),"b1",Bgv(Qu),"Iy",Bgw(A7U),"pT",Bgu(A1z),"rP",Bgv(ANZ)],J2,0,C,[BB],0,3,
0,ASd,["Bm",Bgy(AAU),"b",Bgu(S9),"t3",Bgy(ALy),"Id",Bgu(A$3)],Mn,0,Dp,[],0,3,0,Bo3,0,ABh,0,C,[],0,3,0,0,["b1",Bgv(A8J),"G5",Bgv(A8N),"fl",Bgv(AJZ),"f6",Bgu(AP4)],ACM,0,Ef,[],0,3,0,0,0,Es,0,C,[],4,3,0,BdW,0,Tx,0,U,[],0,0,0,0,["M2",Bgv(A1k),"n",Bgv(A1d)],HD,0,C,[],0,3,0,Bgg,0,YJ,0,FU,[],0,0,0,0,["eK",function(b,c,d,e,f,g){A4q(this,b,c,d,e,f,g);},"sh",Bgv(AZO),"n_",Bgw(AY6)],AFL,0,Bz,[],4,0,0,0,["P",Bgv(A1y),"c",Bgx(AOC),"S",Bgv(A1w),"q",Bgu(APc)],DU,0,Y,[],12,3,0,Ku,0,W2,0,BI,[],0,3,0,0,0,Oa,0,C,[],32,0,0,Bpb,
0,W4,0,BR,[],0,0,0,0,["ly",Bgv(A5y),"bB",Bgw(AWo),"q",Bgu(A6o)],Jp,0,C,[OU],0,3,0,0,0,ADC,0,Jp,[],0,0,0,0,0,RN,0,C9,[],0,3,0,0,["b",Bgu(AZK),"j5",Bgu(A8z)],E8,0,Y,[],12,3,0,AWu,["Bs",Bgu(OW)],SP,0,Is,[],0,3,0,0,0,EW,0,CN,[],0,0,0,0,["zH",function(b,c,d,e,f){IN(this,b,c,d,e,f);},"c",Bgx(A_B),"q",Bgu(AUr)],L0,0,EW,[],0,0,0,0,["zH",function(b,c,d,e,f){Uq(this,b,c,d,e,f);},"c",Bgx(AXF)],Za,0,I1,[D0,BB,LS],0,3,0,0,["b",Bgu(AMf),"P",Bgv(Pf),"fr",Bgv(AXI),"X",Bgv(A7D),"cx",Bgu(A6B),"gl",Bgv(AUo),"Gk",Bgw(A2_),"ka",
Bgv(ASp)],Pu,0,Cc,[],0,0,0,0,["iH",Bgv(AHp),"cE",Bgw(AND),"cu",Bgv(A1E)],ABn,"IllegalMonitorStateException",21,Bk,[],0,3,0,0,["b",Bgu(A4v)],Pp,0,Cc,[],0,0,0,0,["iH",Bgv(A$4),"cE",Bgw(AIt),"cu",Bgv(A50)],Pq,0,Cc,[],0,0,0,0,["iH",Bgv(AN6),"cE",Bgw(ATG),"cu",Bgv(A8s)],Kc,0,C,[],32,0,0,BbR,0,ADF,0,Bl,[],4,0,0,0,0,Pn,0,C,[FR],0,0,0,0,["iH",Bgv(AZa),"cC",Bgv(A0U),"f4",Bgv(A7f)],Po,0,C,[FR],0,0,0,0,["iH",Bgv(AI1),"cC",Bgv(A_s),"f4",Bgv(AUV)],Hl,0,C,[],1,3,0,0,["b",Bgu(Qp)],Pr,0,Cc,[],0,0,0,0,["iH",Bgv(AXi),"cE",Bgw(ASO)],ABk,
0,Gu,[],0,0,0,0,["fh",Bgx(ARk),"c",Bgx(AJF)],ADE,0,Bl,[],4,0,0,0,["b",Bgu(AYn)],Rr,0,C,[],4,3,0,0,0,ADJ,0,Bl,[],4,0,0,0,["b",Bgu(A8P)],ADG,0,Bl,[],4,0,0,0,0,WD,0,C,[],0,3,0,0,["b",Bgu(A$r)],ADD,0,Bl,[],4,0,0,0,0,ADI,0,Bl,[],4,0,0,0,["b",Bgu(ARD)],ADN,0,Bl,[],4,0,0,0,["b",Bgu(APN)],ACK,0,CI,[],4,3,0,0,0]);
$rt_metadata([Mf,0,C,[],0,0,0,Bex,0,ADK,0,Bl,[],4,0,0,0,["b",Bgu(A81)],ADH,0,Bl,[],4,0,0,0,["b",Bgu(AN9)],Od,0,C,[],3,3,0,0,0,SD,0,C,[Od],0,3,0,0,["b",Bgu(A2Y),"r3",Bgw(AJr),"kH",Bgw(A5t)],Zm,0,Bz,[],0,0,0,0,["b",Bgu(A_m),"c",Bgx(AOx),"q",Bgu(A6y),"S",Bgv(A6I)],Xv,0,Go,[],0,3,0,0,["lG",Bgw(ANi)],Ki,0,EW,[],0,0,0,0,["zH",function(b,c,d,e,f){Us(this,b,c,d,e,f);},"c",Bgx(ANA)],ABY,0,Ek,[],0,3,0,0,0,C7,0,Y,[],12,3,0,AKh,["Bs",Bgu(OC)],ZN,0,U,[],0,0,0,0,["Me",Bgv(A4B),"n",Bgv(A9W)],TM,0,Ek,[],0,3,0,0,0,Jk,"NoSuchMethodException",
21,Dw,[],0,3,0,0,["b",Bgu(A28)],AC6,0,Gk,[],0,0,0,0,["eK",function(b,c,d,e,f,g){A0y(this,b,c,d,e,f,g);},"nc",Bgv(ATn),"lp",Bgw(AIW)],T0,"NullPointerException",21,Bk,[],0,3,0,0,["bR",Bgv(A8K),"b",Bgu(AJ3)],AAj,0,U,[],0,0,0,0,["L3",Bgv(AMr),"n",Bgv(A7h)],L9,0,EH,[],0,3,0,0,0,ABO,0,C,[],4,3,0,0,0,RW,0,W,[],0,0,0,0,["b",Bgu(A7Q),"O",Bgu(AQs)],OG,"PatternSyntaxException",17,Cp,[],0,3,0,0,["MB",Bgx(YN),"kp",Bgu(A$F)],EU,0,Y,[],12,3,0,Hb,["O$",Bgu(Pt)],Wh,0,W,[],0,0,0,0,["b",Bgu(AKm),"O",Bgu(AZ0)],D$,0,Y,[],12,3,0,
NB,0,NZ,0,C,[],0,3,0,0,0,ACd,0,Ea,[],0,3,0,0,0,UJ,0,Dp,[],0,3,0,0,0,G7,0,C,[Cz],0,3,0,AEM,["b",Bgu(Wf),"P",Bgv(PR),"j2",Bgw(JC),"gL",Bgv(AY4),"gv",Bgv(A19),"s",Bgw(ASR),"I",Bgv(AYq),"fM",Bgv(AO_),"bz",Bgu(AXx),"ef",Bgv(A9X),"mv",Bgv(ZS)],ABJ,0,C,[BB],4,3,0,0,["NW",Bgv(F1),"OV",Bgw(MT),"N1",Bgv(YM),"Ox",Bgu(I9),"Qg",Bgu(YA),"O6",Bgu(AFU),"QS",Bgu(UN)],Nv,0,EK,[],0,3,0,0,0,Rn,0,Gu,[],0,0,0,0,["fh",Bgx(ATH),"c",Bgx(AOi),"L",Bgv(A5P)],ADo,0,S,[],4,0,0,0,["b",Bgu(A9_)],ACo,0,Bp,[],0,0,0,0,0,ADp,0,S,[],4,0,0,0,["b",
Bgu(A5Q)],Fw,0,C,[BB,EZ],0,3,0,Bci,["b",Bgu(Nx)],ADq,0,S,[],4,0,0,0,["b",Bgu(AO9)],ADl,0,S,[],4,0,0,0,["b",Bgu(A2m)],ADm,0,S,[],4,0,0,0,["b",Bgu(A9N)],Q4,0,C,[],0,3,0,0,0,V_,0,C,[EZ],0,3,0,0,0,PQ,0,C,[],0,3,0,0,0,LC,0,C,[],0,3,0,0,0,AF7,0,Eq,[Ch],0,3,0,0,0,Uk,0,Gs,[],0,3,0,0,0,JD,0,C,[IK],0,3,0,0,0,IH,0,U,[],0,0,0,0,["P",Bgv(UD),"n",Bgv(AQ8)],ACj,0,IH,[],0,0,0,0,["P",Bgv(AQd),"n",Bgv(A8O)],MM,0,BX,[],0,3,0,ACf,["cK",Bgu(A9U),"IZ",Bgu(AOv),"b1",Bgv(T9),"b",Bgu(AGo),"Bw",Bgu(A8A),"Er",Bgv(AJ9)],YF,0,C,[],4,3,
0,0,["Q5",Bgw(A3n),"i",Bgu(Ud),"vI",Bgv(VS),"s$",Bgu(Wa),"NS",Bgu(VC)],RV,"UnmappableCharacterException",19,EQ,[],0,3,0,0,["P",Bgv(A2X),"kp",Bgu(AKZ)],VT,0,C,[],0,3,0,0,["b",Bgu(AHr)]]);
$rt_metadata([Xj,0,EE,[],0,0,0,0,["uF",Bgw(A2E)],Ml,0,Hi,[],0,3,0,0,0,P$,0,Dn,[],0,3,0,0,["sw",Bgv(ATh),"k0",Bgu(A8_),"jM",Bgw(A33)],QY,0,Dm,[],0,3,0,0,0,AGM,0,C,[],0,3,0,0,["Md",Bgw(AMa)],Tz,0,U,[],0,0,0,0,["OO",Bgv(AXl),"n",Bgv(AID)],AAO,0,W,[],0,0,0,0,["b",Bgu(AIl),"O",Bgu(ALg)],FL,0,Y,[],12,3,0,G4,0,EO,0,Y,[],12,3,0,FZ,0,ST,0,CX,[],1,3,0,0,0,NU,0,Du,[Co],0,3,0,AFe,0,Vr,0,C,[],0,0,0,0,["P",Bgv(AN7),"wC",Bgw(ANy),"by",Bgv(A4L)],T3,0,Ct,[],0,3,0,0,0,AEY,0,W,[],0,0,0,0,["b",Bgu(AX3),"O",Bgu(A5X)],Di,0,Y,[],
12,3,0,Z3,0,Zg,0,Ef,[],0,3,0,0,0,SI,0,C,[],0,3,0,0,["DL",Bgu(AR8),"Ew",Bgu(A7z),"bR",Bgv(AIH)],Z_,0,U,[],0,0,0,0,["NA",Bgv(AUJ),"n",Bgv(A41)],QL,0,U,[],0,0,0,0,["MV",Bgw(AUS),"n",Bgv(AOY),"d",Bgu(A1P)],X6,0,CN,[],0,0,0,0,["fh",Bgx(ATE),"c",Bgx(AZH)],P0,0,CH,[],0,3,0,0,0,QI,0,U,[],0,0,0,0,["lc",Bgw(A7W),"n",Bgv(AKr)],QJ,0,U,[],0,0,0,0,["lc",Bgw(APW),"n",Bgv(A1s)],QK,0,U,[],0,0,0,0,["ij",Bgy(AKC),"n",Bgv(A_S)],Q$,0,U,[],0,0,0,0,["ij",Bgy(A1m),"n",Bgv(AMO)],QM,0,U,[],0,0,0,0,["ij",Bgy(A0s),"n",Bgv(AYz)],QN,0,U,
[],0,0,0,0,["ij",Bgy(AIb),"n",Bgv(ARC)],QO,0,U,[],0,0,0,0,["nA",Bgx(AQP),"n",Bgv(AOa)],QH,0,U,[],0,0,0,0,["nA",Bgx(A4M),"n",Bgv(A9d)],NN,0,EP,[],0,3,0,0,0,ACN,0,Fk,[F2],0,3,0,0,["P",Bgv(AOm),"b",Bgu(A$M),"e2",Bgv(I),"h",Bgv(AH0),"A",Bgv(V),"PM",Bgv(ABt),"dM",Bgv(Fl),"QW",Bgv(Nm),"bi",Bgv(Bi),"Ej",Bgx(AKF),"od",Bgv(A8E),"NM",Bgv(Zd),"Fe",Bgw(A0_),"K4",Bgw(A8U),"B6",Bgw(ANN),"Gu",Bgy(A7x),"J7",Bgw(A$5),"BK",Bgw(A5I),"F3",Bgw(AQI),"Hk",Bgw(AUs),"AC",Bgv(ATs),"BP",Bgw(A3N),"cA",Bgw(A$g),"rB",Bgv(A3T),"mJ",Bgy(ALC),
"du",Bgw(A7B),"rI",Bgy(A3E),"q7",Bgx(AK$),"i",Bgu(AYm),"d",Bgu(Q),"fr",Bgv(AOO),"tY",Bgw(AOU),"tA",Bgw(A5b),"r8",Bgw(A4C),"wW",Bgw(ASX),"yL",Bgw(A18),"zA",Bgw(AJ2),"i0",Bgw(AV6)],AFQ,"ConcurrentModificationException",16,Bk,[],0,3,0,0,["b",Bgu(AVM)],PI,0,C,[Jl],0,0,0,0,["b",Bgu(AOJ)],U2,0,Ei,[],0,3,0,0,0,PH,0,C,[FH],0,0,0,0,["b",Bgu(AYK)],AD3,0,C,[Og],0,3,0,0,["b",Bgu(AOW)],YI,0,Jf,[],0,3,0,0,0,ADR,0,BI,[],0,3,0,0,0,O_,0,C,[Kj],0,3,0,0,["Kp",Bgv(A5T),"RI",Bgw(APr),"be",Bgu(AU8),"Es",Bgx(AV3),"sf",Bgv(A53),"F1",
Bgv(A6$),"Jx",Bgv(AL3),"BR",Bgv(ARG),"GC",Bgu(APH),"Ff",Bgu(AMe),"Fp",Bgv(AO8),"FL",function(b,c,d,e,f){AYk(this,b,c,d,e,f);},"Nn",Bgv(AVA)],XU,0,Gc,[],0,3,0,0,0,QD,0,C,[Cz,Co],4,3,0,0,["L0",Bgv(A46),"cx",Bgu(D5),"MT",Bgv(Dc)],Qz,0,C,[],0,3,0,0,0,PO,0,C,[BB],0,3,0,0,0,N9,0,C,[],0,3,0,0,0,VV,0,W,[],0,0,0,0,["b",Bgu(AI9),"O",Bgu(ALD)],Gz,"GlyphLayout",14,C,[Dk],0,3,0,DA,["b",Bgu(AGs),"Rk",Bgw(QB),"Nk",function(b,c,d,e,f,g){Vm(this,b,c,d,e,f,g);},"PV",function(b,c,d,e,f,g,h,i,j){AEN(this,b,c,d,e,f,g,h,i,j);},"HJ",
Bgw(A8k),"J$",function(b,c,d,e,f,g){A4J(this,b,c,d,e,f,g);},"mT",function(b,c,d,e,f,g,h,i,j){AKK(this,b,c,d,e,f,g,h,i,j);},"cV",Bgu(A9a),"d",Bgu(AQO)],K$,0,C,[],0,3,0,0,0,ADW,0,Fh,[],0,0,0,0,0,XE,0,C,[],0,3,0,0,0,RJ,0,Cl,[],0,0,0,0,0]);
$rt_metadata([AAg,0,C,[],0,3,0,0,0,Pg,0,C,[],0,3,0,0,0,YB,0,FF,[D0],0,0,0,0,["gH",Bgw(ANO),"he",Bgu(A1O),"gX",Bgu(A9D),"d",Bgu(A5O)],Yp,0,U,[],0,0,0,0,["OG",Bgv(AS$),"n",Bgv(AX9)],AAf,0,C,[],4,0,0,0,0,F$,0,Y,[],12,0,0,NK,0,Ok,0,BX,[],0,3,0,M7,["cK",Bgu(A9e),"KT",Bgw(AIM),"b1",Bgv(Xy),"b",Bgu(AGY),"GT",Bgu(AKL),"BY",Bgu(A_I),"Ft",Bgu(AZm),"J4",Bgu(A4s),"LT",Bgv(ARb),"DP",Bgu(AQ2),"Fa",Bgu(A2v)],Jr,0,C,[KK,Fy],0,3,0,0,["MZ",Bgw(AAe),"hZ",Bgu(A2P),"E8",Bgv(A29),"o0",Bgu(A4o),"Fv",Bgu(A2o),"r3",Bgw(AQF),"kH",Bgw(AU7),
"r1",Bgu(A$z),"Bk",Bgv(A2w),"Je",Bgv(A4K),"CK",Bgv(A2u)],UU,0,DD,[],0,3,0,0,0,Qw,0,U,[],0,0,0,0,["Rg",Bgv(APE),"n",Bgv(AQ4)],AGB,0,C,[],3,3,0,0,0,ABd,0,CK,[],0,0,0,0,["ja",Bgx(AWe),"c",Bgx(AQ_)],ACC,0,C,[],0,3,0,0,0,AAR,0,C,[],4,3,0,0,0,XP,0,C,[EZ],0,3,0,0,0,AFg,0,CI,[],4,3,0,0,0,Ie,0,C,[Ch],0,3,0,HS,["QL",Bgy(AF3),"OS",function(b,c,d,e,f){NE(this,b,c,d,e,f);},"Nr",function(b,c,d,e,f){OL(this,b,c,d,e,f);},"A7",Bgx(AR4),"IW",Bgv(AKb),"fd",Bgu(ALl),"fu",Bgu(A$E),"FE",Bgv(AKW),"hX",Bgw(AS2),"E9",Bgv(A8w),"hQ",
Bgw(AIJ),"E1",Bgw(A1b),"IX",Bgy(AWb),"y5",function(b,c,d,e,f){A5c(this,b,c,d,e,f);},"be",Bgu(A2H),"hO",Bgv(A6g),"Ac",Bgu(AZM),"wS",Bgu(AOs)],Zh,0,C,[Cz],0,3,0,0,0,Ss,0,C,[Ck],4,3,0,0,0,AER,0,C,[Mg,IK],0,3,0,0,["b",Bgu(AKM),"Jp",Bgu(AXy),"tG",Bgu(ALH),"be",Bgu(A2V),"xg",Bgv(AQW),"wU",Bgv(AJf),"G4",Bgv(A$a),"sN",Bgy(AUu),"v6",Bgx(AWO),"q6",Bgy(AR0),"Cc",Bgw(APX),"He",Bgw(AVf),"nG",Bgu(A2W),"r0",Bgu(A72),"LC",Bgw(A9l),"LQ",Bgv(A6f)],AF5,0,Bz,[],0,0,0,0,["b",Bgu(ANT),"c",Bgx(A6l),"S",Bgv(AWl),"q",Bgu(AMI)],AEs,
0,C,[Cz],0,3,0,0,["b",Bgu(A4b),"j2",Bgw(ABy),"gL",Bgv(APB),"gv",Bgv(AZL),"fe",Bgw(AS3),"qS",Bgw(AYT),"mv",Bgv(Wl)],AGb,0,EV,[],0,0,0,0,["tc",Bgw(A2F),"Qd",function(b,c,d,e,f,g,h){PG(this,b,c,d,e,f,g,h);},"vI",Bgv(AHy),"Lx",Bgu(APC),"bZ",Bgu(AUa),"sZ",Bgu(A_f),"J_",Bgv(A82),"Gg",Bgw(AMq),"u5",Bgu(AVU),"p3",Bgu(AQa)],Md,0,C,[BB],0,3,0,0,["OZ",Bgw(AMv),"gN",Bgx(A4i)],Wy,0,Cl,[],0,0,0,0,["Dv",Bgx(A5n),"KR",Bgu(A8X),"q5",Bgu(A8i)],Wx,0,Cl,[],0,0,0,0,["Dv",Bgx(A3x),"FT",Bgu(A78),"q5",Bgu(AYG)],M9,0,BX,[],0,3,0,A9S,
["b1",Bgv(V2),"b",Bgu(S4),"ES",Bgu(ASt),"GF",Bgv(A2y),"Ha",Bgu(AZq)],Lk,0,C,[],3,3,0,0,0,G2,0,C,[],0,3,0,AN2,["b",Bgu(YH),"GU",Bgv(A6c)],NL,0,C,[BB],0,3,0,BeR,["PC",Bgw(AGa)],AE$,0,CD,[],0,0,0,0,0,ACT,0,C,[N7,FR],0,3,0,0,["Ry",Bgv(ARq),"cC",Bgv(A84),"cV",Bgu(ANJ),"fw",Bgx(ANp),"h1",Bgw(AOX),"h4",Bgw(ASM),"is",Bgw(A17),"ib",Bgw(ASo),"vu",Bgv(ALB),"py",Bgu(AQD),"f4",Bgv(AIn)],AE_,0,CD,[],0,0,0,0,0,R4,"BufferUnderflowException",19,Bk,[],0,3,0,0,["b",Bgu(A$A)],ABa,0,Dn,[],0,3,0,0,["sw",Bgv(AIN),"f6",Bgu(A5w)],AEe,
0,C,[],0,3,0,0,0,XL,0,C,[MR],0,0,0,0,["M6",Bgw(ARL),"Da",Bgu(A6G),"Cg",Bgu(A6U),"N9",Bgu(A1A),"L8",Bgu(A26)],W5,0,Bl,[],4,0,0,0,["b",Bgu(AXC)],W6,0,Bl,[],4,0,0,0,["b",Bgu(AM1)],W7,0,Bl,[],4,0,0,0,["b",Bgu(AUf)],W8,0,Bl,[],4,0,0,0,["b",Bgu(ASP)],Vb,0,Bp,[],0,0,0,0,0,W9,0,Cl,[],4,0,0,0,["b",Bgu(A1K)],AG$,0,C,[],0,3,0,0,0,Ld,0,C,[],3,3,0,0,0,AFG,0,C,[Ck],1,3,0,0,0,M0,0,C,[],0,3,0,0,0,GP,0,BX,[],0,3,0,Cs,["b",Bgu(Ri),"b1",Bgv(ABw),"lh",Bgw(A0h),"cQ",Bgu(A3L),"Dy",Bgv(AV_),"cM",Bgu(AT7),"Kh",Bgv(A7N)],GX,0,C,[],
4,3,0,0,0,ZZ,0,W,[],0,0,0,0,["b",Bgu(AJo),"O",Bgu(AUX)]]);
$rt_metadata([ACA,0,C,[IC],4,3,0,0,["NZ",Bgw(AAQ),"L$",Bgu(AEX),"OK",Bgv(AFJ),"PW",Bgv(AGy),"xS",Bgv(Fs),"MO",Bgv(J$),"Pc",Bgu(Fj),"jo",Bgv(XS),"mn",Bgv(PK),"tl",Bgu(Mq),"m2",Bgu(Nu),"jr",Bgu(P6),"O5",Bgw(AHq)],WG,0,BO,[],0,0,0,0,["b",Bgu(A55),"c",Bgx(AVo),"q",Bgu(AK6),"L",Bgv(AYI),"cK",Bgu(A5Z),"S",Bgv(AYE)],Rj,0,C,[G0],0,3,0,0,0,X7,0,W,[],0,0,0,0,["b",Bgu(AR7),"O",Bgu(AWx)],M5,0,BO,[],0,0,0,0,["NU",Bgw(AW7),"L",Bgv(APt),"q",Bgu(ASr),"c",Bgx(AHx),"b0",Bgv(AYF),"S",Bgv(ATR)],NG,0,C,[],0,3,0,0,0,QC,0,B_,[],0,
3,0,0,0,Kz,"GlyphLayout$GlyphRun",14,C,[Dk],0,3,0,0,["b",Bgu(A1C),"BX",Bgv(AXv),"cV",Bgu(AOu),"d",Bgu(AIy)],MS,0,Dw,[],0,3,0,0,0,Oo,0,EP,[],0,3,0,0,0,E6,0,Y,[],12,3,0,Bbn,0,RG,0,Bz,[],0,0,0,0,["b1",Bgv(AN_),"c",Bgx(AYp),"S",Bgv(AYC),"q",Bgu(A_y)],ABp,0,C,[Fy],0,0,0,0,0,AEq,0,C,[],4,3,0,0,0,I_,0,Du,[Co],0,3,0,Bqb,0,Dz,0,C,[Lk],1,3,0,0,0,Sq,0,Dz,[],0,0,0,0,0,Sm,0,Ix,[],0,0,0,0,0,Sn,0,Dz,[],0,0,0,0,0,So,0,Dz,[],0,0,0,0,0,Sp,0,Dz,[],0,0,0,0,0,Ub,0,Bp,[],0,0,0,0,0,KB,0,C,[],3,3,0,0,0,P8,0,C,[Ck,Om,KB,HR],1,3,0,0,
["QF",Bgw(APj),"Rq",Bgw(APJ),"OM",Bgv(AIP),"Nv",Bgx(AQZ),"MR",Bgv(AUt),"PL",Bgu(AJW),"Ph",Bgx(AHL)],C3,0,C,[Dk],0,3,0,Bql,0,PX,0,C,[],0,0,0,0,0,AEr,0,BI,[],0,3,0,0,0,Wi,0,JD,[Ch],0,3,0,0,0,ADX,0,Ex,[],0,0,0,0,["ja",Bgx(A1a),"c",Bgx(AIE)],AEk,0,W,[],0,0,0,0,["b",Bgu(AJb),"O",Bgu(ANL)],ACZ,0,C,[],0,0,0,0,["P8",Bgw(AK5),"d",Bgu(AO7)],AG1,0,Ik,[],0,0,0,0,0,AA2,0,BI,[],0,3,0,0,0,Cg,"NumberFormatException",21,Cp,[],0,3,0,0,["b",Bgu(AXS),"bR",Bgv(DL)],ACF,0,C,[],0,3,0,0,["RJ",Bgy(AOb)],AD0,0,C,[M3],0,3,0,0,["b",Bgu(ALn)],AGJ,
0,CM,[],0,0,0,0,0,To,0,B_,[],0,3,0,0,0,AAG,0,C,[FH,Cz],0,3,0,0,["FK",Bgw(AQh),"dk",Bgu(A3o),"da",Bgu(AZv)],Zf,0,C,[],0,0,0,0,0,UY,0,W,[],0,0,0,0,["b",Bgu(APQ),"O",Bgu(ASf)],AEw,0,W,[],0,0,0,0,["b",Bgu(AP5),"O",Bgu(AWp)],ADn,0,C,[],0,3,0,0,0,AAn,0,CI,[],4,3,0,0,0,PT,0,Ef,[],0,3,0,0,0,O3,0,Hl,[],0,3,0,0,["b",Bgu(Wv),"w5",Bgv(ARK),"wI",Bgv(ASS),"xz",Bgv(AHS),"Lc",Bgv(AXJ),"A1",Bgv(A9T)],JG,0,BO,[],0,0,0,0,["ly",Bgv(AQS),"L",Bgv(AYU),"c",Bgx(AHI),"ci",Bgx(A6W),"cp",Bgy(ASA),"q",Bgu(A$Z),"b0",Bgv(AKR),"S",Bgv(A63)],I7,
"Table$DebugRect",12,Fw,[],0,3,0,BcN,["b",Bgu(Up)],Y4,0,Fv,[],0,3,0,0,["wN",Bgy(AIq)],ABH,0,C,[Ld],0,0,0,0,["Rr",Bgv(AUF),"lo",Bgv(A3z),"J6",Bgv(AVd)]]);
$rt_metadata([Hs,0,C,[],0,3,0,0,["b",Bgu(AM9),"P",Bgv(A_w),"ng",Bgw(Me),"eZ",Bgv(A3j),"I3",Bgw(A99),"by",Bgv(AS9),"el",Bgw(A5L),"GG",Bgu(AMy),"bA",Bgu(A36),"bz",Bgu(A0V),"Kk",Bgv(AQA),"q$",Bgv(AI3),"cq",Bgu(AO$),"K",Bgv(A9Y),"d",Bgu(A39)],SL,0,G7,[],0,3,0,0,0,NV,0,Ct,[E1],0,3,0,Bqr,0,MF,"IllegalAccessException",21,Dw,[],0,3,0,0,["b",Bgu(A9H)],V$,0,Ei,[],0,3,0,0,0,Lp,0,C,[],0,3,0,0,0,ABL,0,Cl,[],0,0,0,0,0,Qe,0,C,[],3,3,0,0,0,Tr,0,BI,[],0,3,0,0,0,ADk,0,E$,[],0,3,0,0,0,VP,0,C,[],4,3,0,0,0,Lv,0,C,[],0,3,0,Bqt,0,ABP,
0,C,[],0,3,0,0,0,ACS,0,Bz,[],0,0,0,0,["P",Bgv(A2c),"c",Bgx(AQX),"S",Bgv(A1h),"q",Bgu(AId)],ACr,0,DG,[],0,3,0,0,0,AG9,0,C,[],0,3,0,0,["b",Bgu(A8x),"K_",Bgu(AQQ),"Eh",Bgu(AMC)],Qd,0,C,[N3],0,3,0,0,0,AFD,0,C,[],0,3,0,0,0,TI,0,BI,[],0,3,0,0,0,AAD,0,W,[],0,0,0,0,["b",Bgu(AU4),"O",Bgu(AUB)],SE,0,C,[Dk],4,3,0,0,0,OJ,0,C,[],0,3,0,0,0,R5,0,C,[],0,3,0,0,["lU",Bgw(AW0),"sk",Bgv(AHv),"g3",Bgu(A3F),"hA",Bgu(A1Y),"yk",Bgu(A2N),"Di",Bgw(ANl)]]);
function $rt_array(cls,data){this.bn=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["Can\'t enter monitor from another thread synchronously","<java_object>@","bounces cannot be < 2 or > 5: ","Constructor not found for class: ","Security violation occurred while getting constructor for class: \'","\'.","Security violation while getting constructor for class: ","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ",
"String is null or empty","Illegal radix: ","Replacement preconditions do not hold","Action must be non-null","java.runtime.name","Android","os.name","Mac","Windows","Linux","Disposing "," while it still has "," references.","Box2D","error","Desktop","HeadlessDesktop","Applet","WebGL","iOS","CI sequence: ","\tat ","Caused by: ","objects cannot be null.","#iterator() cannot be used nested.","fSet","BehindFSet","JointSet"," ","^ ","range:","<GroupQuant>","FileType \'","\' Not supported in web backend"," does not exist",
"","/","\\","null","false","true","Index out of bounds","New position "," is outside of range [0;","New limit ","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart",
"Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics",
"Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics",
"BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo",
"HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks",
"CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","AheadFSet","NonCapJointSet","PosLookaheadJointSet","NegLookaheadJointSet","loadFactor must be > 0 and < 1: ","charsetName is null","Should never been thrown","PosBehindJointSet","-2147483648","US-ASCII",
"GL_EXT_texture_filter_anisotropic","New data must have the same managed status as the old data","decomposed char:","NegBehindJointSet","Index ","ErrorLoading: ","\n",":","i","b","a","Invalid assets description file.","0","<Quant>","javaClass@","<init>","object cannot be null.","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","The last char in src "," is outside of string of size ","Start "," must be before end ","GL_ARB_framebuffer_object","GL_EXT_framebuffer_object",
"com.badlogic.gdx.backends.lwjgl3.Lwjgl3GLES20","texture width and height must be square when using mipmapping.","Asset loaded: ","Script loaded: ","data:",";base64,","The last float in src ","Unsupported asset type ","Loading asset : ","Loading script : ","start + count must be <= size: "," + "," <= ","index can\'t be >= size: "," >= ","end can\'t be >= size: ","start can\'t be > end: "," > ","Array is empty.","additionalCapacity must be >= 0: ","newSize must be >= 0: ","[]",", ","AtomicFSet","touchDown","touchUp",
"touchDragged","mouseMoved","enter","exit","scrolled","keyDown","keyUp","keyTyped","none","table","cell","actor","UTF-8","<MultiLine $>","Call end() before beginning a new shape batch.","begin must be called first.","Must call begin(ShapeType.",").",") or begin(ShapeType.","Class cannot be created (missing no-arg constructor): ","Unable to create new instance: ","PX","PCT","EM","EX","PT","PC","IN","CM","MM","OnPlane","Back","Front","px","GLVersion","OpenGL ES (\\d(\\.\\d){0,2})","WebGL (\\d(\\.\\d){0,2})","(\\d(\\.\\d){0,2})",
"Invalid version string: ","\\.","libGDX GL","Error parsing number: ",", assuming: ","The last short in src ","file-f:","file-d:","Can\'t have more than 8191 sprites per batch: ","a_position","a_color","a_texCoord0","attribute vec4 a_position;\nattribute vec4 a_color;\nattribute vec2 a_texCoord0;\nuniform mat4 u_projTrans;\nvarying vec4 v_color;\nvarying vec2 v_texCoords;\n\nvoid main()\n{\n   v_color = a_color;\n   v_color.a = v_color.a * (255.0/254.0);\n   v_texCoords = a_texCoord0;\n   gl_Position =  u_projTrans * a_position;\n}\n",
"#ifdef GL_ES\n#define LOWP lowp\nprecision mediump float;\n#else\n#define LOWP \n#endif\nvarying LOWP vec4 v_color;\nvarying vec2 v_texCoords;\nuniform sampler2D u_texture;\nvoid main()\n{\n  gl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n}","Error compiling shader: ","SpriteBatch.end must be called before begin.","SpriteBatch.begin must be called before end.","SpriteBatch.begin must be called before draw.","u_projTrans","u_texture","Malformed input of length ","NearestNeighbour","BiLinear","If no regions are specified, the font data must have an images path.",
"CI back reference: ","The specified font must contain at least one texture page.","UCI sequence: ","CompositeRangeSet:  <nonsurrogate> "," <surrogate> ","FinalSet","<Empty set>","texture cannot be null.","�","averageCharsPerByte must be positive. Actual value is ","maxCharsPerByte must be positive. Actual value is ","newAction must be non-null","enabled","disabled","childrenOnly","^","IndexBufferObject cannot be used after it has been disposed.","PreviousMatch","NonCapFSet","UCI ","Already loaded.","File is empty.",
"padding=",",","Invalid padding.","Missing common header.","Invalid common header.","lineHeight=","Missing: lineHeight","base=","Missing: base","pages=","Missing additional page definitions.",".*id=(\\d+)",".*file=\"?([^\"]+)\"?","\\\\","Missing: file","Page IDs must be indices starting at 0: ","Invalid page id: ","kernings ","metrics ","char "," =","kerning ","Error loading font file: ","No glyphs found.","UCI range:","keyboard","scroll","Can only cope with FloatBuffer, ShortBuffer and IntBuffer at the moment",
"glGetFloat not supported by WebGL backend","GL error: ","Capacity is negative: ","The last byte in dst ","The last byte in src ","<SOL>","Exception occurred in constructor for class: ","Illegal argument(s) supplied to constructor for class: ","Could not instantiate instance of class: ","public","protected","private","abstract","static","final","transient","volatile","synchronized","native","strictfp","interface","offset + length must be <= size: ","assets/","<EOL>","Is","In","Circle","Edge","Polygon","Chain",
"StaticBody","KinematicBody","DynamicBody","OpenGL","GLES","NONE","main","UCI back reference: ","BIG_ENDIAN","LITTLE_ENDIAN","Pixmap","Custom","<DotAllQuant>","Lambert","Phong","CLEAR","BLACK","WHITE","LIGHT_GRAY","GRAY","DARK_GRAY","BLUE","NAVY","ROYAL","SLATE","SKY","CYAN","TEAL","GREEN","CHARTREUSE","LIME","FOREST","OLIVE","YELLOW","GOLD","GOLDENROD","ORANGE","BROWN","TAN","FIREBRICK","RED","SCARLET","CORAL","SALMON","PINK","MAGENTA","PURPLE","VIOLET","MAROON","Couldn\'t load image \'","\', file does not exist",
"rgba(","Already prepared","Call prepare() before calling getPixmap()","This TextureData implementation does not upload data itself","u_sampler","a_normal","a_texCoord","u_projModelView","attribute vec4 a_position;\n","attribute vec3 a_normal;\n","attribute vec4 a_color;\n","attribute vec2 a_texCoord",";\n","uniform mat4 u_projModelView;\n","varying vec4 v_col;\n","varying vec2 v_tex","void main() {\n   gl_Position = u_projModelView * a_position;\n","   v_col = a_color;\n   v_col.a *= 255.0 / 254.0;\n","   v_tex",
" = ","   gl_PointSize = 1.0;\n}\n","#ifdef GL_ES\nprecision mediump float;\n#endif\n","uniform sampler2D u_sampler","void main() {\n   gl_FragColor = ","vec4(1, 1, 1, 1)","v_col"," * "," texture2D(u_sampler",",  v_tex",") *",")",";\n}","sequence: ","IGNORE","REPLACE","REPORT","back reference: ","<DotQuant>","COPY","copy","DESTINATION_ATOP","destination-atop","DESTINATION_IN","destination-in","DESTINATION_OUT","destination-out","DESTINATION_OVER","destination-over","LIGHTER","lighter","SOURCE_ATOP","source-atop",
"SOURCE_IN","source-in","SOURCE_OUT","source-out","SOURCE_OVER","source-over","XOR","xor","both","top","bottom","Unknown","RevoluteJoint","PrismaticJoint","DistanceJoint","PulleyJoint","MouseJoint","GearJoint","WheelJoint","WeldJoint","FrictionJoint","RopeJoint","MotorJoint","vertex shader must not be null","fragment shader must not be null","Fragment shader:\n","Vertex shader\n","An attempted fetch uniform from uncompiled shader \n","No uniform with name \'","\' in shader","Classpath","Internal","External",
"Absolute","Local","No buffer allocated!",".","CI ","UTF-16","UTF-16BE","UTF-16LE","Image","Audio","Text","t","Binary","Directory","ISO-8859-1","MirroredRepeat","ClampToEdge","Repeat","hidden","posFSet","Nearest","Linear","MipMap","MipMapNearestNearest","MipMapLinearNearest","MipMapNearestLinear","MipMapLinearLinear","Point","Line","Filled","VertexArray","VertexBufferObject","VertexBufferObjectSubData","VertexBufferObjectWithVAO","key cannot be null.","Patter is null","\\Q","\\E","\\\\E\\Q","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
"==","=","Unmappable characters of length ","None","SourceOver","LOAD_ASSETS","APP_CREATE","APP_LOOP","Intensity","LuminanceAlpha","RGB565","RGBA4444","RGB888","RGBA8888","Unknown joint type: ","attributes must be >= 1","FILL","STROKE","OS X","no OS",".html","index.html","index-debug.html","assets.txt","resize","soundmanager2-jsmin.js","bullet.wasm.js","imgui.js","box2D.wasm.js","Mesh attempting to access memory outside of the index buffer (count: ",", offset: ",", max: ","capacity must be >= 0: ","The required capacity is too large: ",
"fps:",", update: ",", render: ","data/lsans-15.fnt","EOI","mousedown","mouseup","mousemove","wheel","touchstart","touchmove","touchcancel","touchend","keydown","keypress","keyup","CSS1Compat","canvas","Either src or dest is null","java.version","1.8","TeaVM","file.separator","path.separator","line.separator","java.io.tmpdir","java.vm.version","user.home","/tmp","DotAll","decomposed Hangul syllable:","Enabled","EnabledUntilCycleEnd","Disabled","WordBoundary","data must be a ByteBuffer or FloatBuffer","<Unix MultiLine $>",
"Unknown shape type!","Null shape address!"]);
BL.prototype.toString=function(){return $rt_ustr(this);};
BL.prototype.valueOf=BL.prototype.toString;C.prototype.toString=function(){return $rt_ustr(QU(this));};
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
a|b);};Long_xor=function(a,b){return $rt_globals.BigInt.asIntN(64,a^b);};Long_shl=function(a,b){return $rt_globals.BigInt.asIntN(64,a<<$rt_globals.BigInt(b&63));};Long_shr=function(a,b){return $rt_globals.BigInt.asIntN(64,a>>$rt_globals.BigInt(b&63));};Long_shru=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var Ca=Long_add;var NH=Long_sub;var Bu=Long_mul;var Cy=Long_div;var G$=Long_rem;var ALI
=Long_or;var CR=Long_and;var L_=Long_xor;var DX=Long_shl;var F5=Long_shr;var BT=Long_shru;var Bbp=Long_compare;var B5=Long_eq;var KW=Long_ne;var KT=Long_lt;var GK=Long_le;var RD=Long_gt;var RF=Long_ge;var Bqu=Long_not;var A5i=Long_neg;
function TeaVMThread(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}TeaVMThread.prototype.push=function(){for(var i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};TeaVMThread.prototype.s=TeaVMThread.prototype.push;TeaVMThread.prototype.pop=function(){return this.stack.pop();};TeaVMThread.prototype.l=TeaVMThread.prototype.pop;TeaVMThread.prototype.isResuming=function(){return this.status===2;};TeaVMThread.prototype.isSuspending
=function(){return this.status===1;};TeaVMThread.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};TeaVMThread.prototype.start=function(callback){if(this.status!==3){throw new $rt_globals.Error("Thread already started");}if($rt_currentNativeThread!==null){throw new $rt_globals.Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:function(result){if(result instanceof $rt_globals.Error){throw result;}};this.run();};TeaVMThread.prototype.resume
=function(){if($rt_currentNativeThread!==null){throw new $rt_globals.Error("Another thread is running");}this.status=2;this.run();};TeaVMThread.prototype.run=function(){$rt_currentNativeThread=this;var result;try {result=this.runner();}catch(e){result=e;}finally {$rt_currentNativeThread=null;}if(this.suspendCallback!==null){var self=this;var callback=this.suspendCallback;this.suspendCallback=null;callback(function(){self.resume();});}else if(this.status===0){this.completeCallback(result);}};function $rt_suspending()
{var thread=$rt_nativeThread();return thread!=null&&thread.isSuspending();}function $rt_resuming(){var thread=$rt_nativeThread();return thread!=null&&thread.isResuming();}function $rt_suspend(callback){var nativeThread=$rt_nativeThread();if(nativeThread===null){throw new $rt_globals.Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);}function $rt_startThread(runner,callback){(new TeaVMThread(runner)).start(callback);}var $rt_currentNativeThread
=null;function $rt_nativeThread(){return $rt_currentNativeThread;}function $rt_invalidPointer(){throw new $rt_globals.Error("Invalid recorded state");}main=$rt_mainStarter(BaC);
main.javaException=$rt_javaException;
(function(){var c;c=AAl.prototype;c.handleEvent=c.f4;c=ACJ.prototype;c.prompt=c.M5;c.granted=c.OW;c.denied=c.RK;c=Px.prototype;c.handleEvent=c.f4;c=Py.prototype;c.handleEvent=c.f4;c=PA.prototype;c.handleEvent=c.f4;c=PC.prototype;c.handleEvent=c.f4;c=Sf.prototype;c.getLength=c.Re;c.get=c.Op;c=LG.prototype;c.onAnimationFrame=c.Nw;c=Pn.prototype;c.handleEvent=c.f4;c=Po.prototype;c.handleEvent=c.f4;c=O_.prototype;c.ReportFixture=c.Nn;c=ACT.prototype;c.handleEvent=c.f4;c=XL.prototype;c.onready=c.N9;c.ontimeout=c.L8;c
=P8.prototype;c.dispatchEvent=c.MR;c.addEventListener=c.QF;c.removeEventListener=c.Rq;c.getLength=c.PL;c.get=c.OM;c.addEventListener=c.Ph;c.removeEventListener=c.Nv;})();
})(this);
