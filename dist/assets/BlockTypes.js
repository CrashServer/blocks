(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ha="170",Gv={ROTATE:0,DOLLY:1,PAN:2},Wv={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ol=0,_o=1,zl=2,Zc=1,Bl=2,hn=3,Rn=0,Rt=1,fn=2,An=0,gi=1,xo=2,vo=3,Mo=4,kl=5,Vn=100,Vl=101,Hl=102,Gl=103,Wl=104,Xl=200,Zl=201,Yl=202,ql=203,js=204,Qs=205,Jl=206,Kl=207,$l=208,jl=209,Ql=210,eu=211,tu=212,nu=213,iu=214,ea=0,ta=1,na=2,Mi=3,ia=4,ra=5,sa=6,aa=7,Yc=0,ru=1,su=2,Cn=0,au=1,ou=2,cu=3,lu=4,uu=5,hu=6,fu=7,qc=300,yi=301,bi=302,oa=303,ca=304,ns=306,la=1e3,Gn=1001,ua=1002,Ut=1003,du=1004,lr=1005,Qt=1006,hs=1007,Wn=1008,mn=1009,Jc=1010,Kc=1011,$i=1012,Ga=1013,Xn=1014,en=1015,ir=1016,Wa=1017,Xa=1018,Si=1020,$c=35902,jc=1021,Qc=1022,qt=1023,el=1024,tl=1025,_i=1026,Ei=1027,Za=1028,Ya=1029,nl=1030,qa=1031,Ja=1033,Hr=33776,Gr=33777,Wr=33778,Xr=33779,ha=35840,fa=35841,da=35842,pa=35843,ma=36196,ga=37492,_a=37496,xa=37808,va=37809,Ma=37810,ya=37811,ba=37812,Sa=37813,Ea=37814,wa=37815,Ta=37816,Aa=37817,Ca=37818,Ra=37819,Pa=37820,La=37821,Zr=36492,Ia=36494,Da=36495,il=36283,Ua=36284,Na=36285,Fa=36286,qr=2300,Oa=2301,fs=2302,yo=2400,bo=2401,So=2402,pu=2500,mu=3200,gu=3201,rl=0,_u=1,Tn="",Bt="srgb",Ai="srgb-linear",is="linear",st="srgb",jn=7680,Eo=519,xu=512,vu=513,Mu=514,sl=515,yu=516,bu=517,Su=518,Eu=519,wo=35044,To="300 es",dn=2e3,Jr=2001;class qn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ao=1234567;const xi=Math.PI/180,ji=180/Math.PI;function Pn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function gt(n,e,t){return Math.max(e,Math.min(t,n))}function Ka(n,e){return(n%e+e)%e}function wu(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Tu(n,e,t){return n!==e?(t-n)/(e-n):0}function Yi(n,e,t){return(1-t)*n+t*e}function Au(n,e,t,i){return Yi(n,e,1-Math.exp(-t*i))}function Cu(n,e=1){return e-Math.abs(Ka(n,e*2)-e)}function Ru(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Pu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Lu(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Iu(n,e){return n+Math.random()*(e-n)}function Du(n){return n*(.5-Math.random())}function Uu(n){n!==void 0&&(Ao=n);let e=Ao+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nu(n){return n*xi}function Fu(n){return n*ji}function Ou(n){return(n&n-1)===0&&n!==0}function zu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Bu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ku(n,e,t,i,r){const s=Math.cos,a=Math.sin,c=s(t/2),o=a(t/2),l=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),f=a((e-i)/2),d=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(c*u,o*h,o*f,c*l);break;case"YZY":n.set(o*f,c*u,o*h,c*l);break;case"ZXZ":n.set(o*h,o*f,c*u,c*l);break;case"XZX":n.set(c*u,o*g,o*d,c*l);break;case"YXY":n.set(o*d,c*u,o*g,c*l);break;case"ZYZ":n.set(o*g,o*d,c*u,c*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function di(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Xv={DEG2RAD:xi,RAD2DEG:ji,generateUUID:Pn,clamp:gt,euclideanModulo:Ka,mapLinear:wu,inverseLerp:Tu,lerp:Yi,damp:Au,pingpong:Cu,smoothstep:Ru,smootherstep:Pu,randInt:Lu,randFloat:Iu,randFloatSpread:Du,seededRandom:Uu,degToRad:Nu,radToDeg:Fu,isPowerOfTwo:Ou,ceilPowerOfTwo:zu,floorPowerOfTwo:Bu,setQuaternionFromProperEuler:ku,normalize:Tt,denormalize:di};class oe{constructor(e=0,t=0){oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,r,s,a,c,o,l){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,c,o,l)}set(e,t,i,r,s,a,c,o,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=c,u[3]=t,u[4]=s,u[5]=o,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],c=i[3],o=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],E=r[1],v=r[4],x=r[7],D=r[2],A=r[5],R=r[8];return s[0]=a*_+c*E+o*D,s[3]=a*m+c*v+o*A,s[6]=a*p+c*x+o*R,s[1]=l*_+u*E+h*D,s[4]=l*m+u*v+h*A,s[7]=l*p+u*x+h*R,s[2]=f*_+d*E+g*D,s[5]=f*m+d*v+g*A,s[8]=f*p+d*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],c=e[5],o=e[6],l=e[7],u=e[8];return t*a*u-t*c*l-i*s*u+i*c*o+r*s*l-r*a*o}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],c=e[5],o=e[6],l=e[7],u=e[8],h=u*a-c*l,f=c*o-u*s,d=l*s-a*o,g=t*h+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*l-u*i)*_,e[2]=(c*i-r*a)*_,e[3]=f*_,e[4]=(u*t-r*o)*_,e[5]=(r*s-c*t)*_,e[6]=d*_,e[7]=(i*o-l*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,c){const o=Math.cos(s),l=Math.sin(s);return this.set(i*o,i*l,-i*(o*a+l*c)+a+e,-r*l,r*o,-r*(-l*a+o*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(ds.makeScale(e,t)),this}rotate(e){return this.premultiply(ds.makeRotation(-e)),this}translate(e,t){return this.premultiply(ds.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ds=new Ge;function al(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qi(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Vu(){const n=Qi("canvas");return n.style.display="block",n}const Co={};function Xi(n){n in Co||(Co[n]=!0,console.warn(n))}function Hu(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Gu(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Wu(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $e={enabled:!0,workingColorSpace:Ai,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===st&&(n.r=pn(n.r),n.g=pn(n.g),n.b=pn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===st&&(n.r=vi(n.r),n.g=vi(n.g),n.b=vi(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Tn?is:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function pn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ro=[.64,.33,.3,.6,.15,.06],Po=[.2126,.7152,.0722],Lo=[.3127,.329],Io=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Do=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$e.define({[Ai]:{primaries:Ro,whitePoint:Lo,transfer:is,toXYZ:Io,fromXYZ:Do,luminanceCoefficients:Po,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:Ro,whitePoint:Lo,transfer:st,toXYZ:Io,fromXYZ:Do,luminanceCoefficients:Po,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}});let Qn;class Xu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qn===void 0&&(Qn=Qi("canvas")),Qn.width=e.width,Qn.height=e.height;const i=Qn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Qn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qi("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=pn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(pn(t[i]/255)*255):t[i]=pn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zu=0;class ol{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,c=r.length;a<c;a++)r[a].isDataTexture?s.push(ps(r[a].image)):s.push(ps(r[a]))}else s=ps(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ps(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yu=0;class Mt extends qn{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,i=Gn,r=Gn,s=Qt,a=Wn,c=qt,o=mn,l=Mt.DEFAULT_ANISOTROPY,u=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=Pn(),this.name="",this.source=new ol(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=c,this.internalFormat=null,this.type=o,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case la:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case la:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=qc;Mt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,i=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const o=e.elements,l=o[0],u=o[4],h=o[8],f=o[1],d=o[5],g=o[9],_=o[2],m=o[6],p=o[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,x=(d+1)/2,D=(p+1)/2,A=(u+f)/4,R=(h+_)/4,L=(g+m)/4;return v>x&&v>D?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=R/i):x>D?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=L/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=R/s,r=L/s),this.set(i,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-_)/E,this.z=(f-u)/E,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qu extends qn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Mt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let c=0;c<a;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ol(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends qu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class cl extends Mt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ju extends Mt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ci{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,c){let o=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const f=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(c===0){e[t+0]=o,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(c===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||o!==f||l!==d||u!==g){let m=1-c;const p=o*f+l*d+u*g+h*_,E=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const D=Math.sqrt(v),A=Math.atan2(D,p*E);m=Math.sin(m*A)/D,c=Math.sin(c*A)/D}const x=c*E;if(o=o*m+f*x,l=l*m+d*x,u=u*m+g*x,h=h*m+_*x,m===1-c){const D=1/Math.sqrt(o*o+l*l+u*u+h*h);o*=D,l*=D,u*=D,h*=D}}e[t]=o,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const c=i[r],o=i[r+1],l=i[r+2],u=i[r+3],h=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return e[t]=c*g+u*h+o*d-l*f,e[t+1]=o*g+u*f+l*h-c*d,e[t+2]=l*g+u*d+c*f-o*h,e[t+3]=u*g-c*h-o*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,c=Math.cos,o=Math.sin,l=c(i/2),u=c(r/2),h=c(s/2),f=o(i/2),d=o(r/2),g=o(s/2);switch(a){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],c=t[5],o=t[9],l=t[2],u=t[6],h=t[10],f=i+c+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-o)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(i>c&&i>h){const d=2*Math.sqrt(1+i-c-h);this._w=(u-o)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(c>h){const d=2*Math.sqrt(1+c-i-h);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(o+u)/d}else{const d=2*Math.sqrt(1+h-i-c);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(o+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,c=t._x,o=t._y,l=t._z,u=t._w;return this._x=i*u+a*c+r*l-s*o,this._y=r*u+a*o+s*c-i*l,this._z=s*u+a*l+i*o-r*c,this._w=a*u-i*c-r*o-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let c=a*e._w+i*e._x+r*e._y+s*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const o=1-c*c;if(o<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const l=Math.sqrt(o),u=Math.atan2(l,c),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,c=e.z,o=e.w,l=2*(a*r-c*i),u=2*(c*t-s*r),h=2*(s*i-a*t);return this.x=t+o*l+a*h-c*u,this.y=i+o*u+c*l-s*h,this.z=r+o*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,c=t.y,o=t.z;return this.x=r*o-s*c,this.y=s*a-i*o,this.z=i*c-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ms.copy(this).projectOnVector(e),this.sub(ms)}reflect(e){return this.sub(ms.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ms=new P,Uo=new Ci;class Jn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,c=s.count;a<c;a++)e.isMesh===!0?e.getVertexPosition(a,Xt):Xt.fromBufferAttribute(s,a),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ur.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ur.copy(i.boundingBox)),ur.applyMatrix4(e.matrixWorld),this.union(ur)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oi),hr.subVectors(this.max,Oi),ei.subVectors(e.a,Oi),ti.subVectors(e.b,Oi),ni.subVectors(e.c,Oi),vn.subVectors(ti,ei),Mn.subVectors(ni,ti),In.subVectors(ei,ni);let t=[0,-vn.z,vn.y,0,-Mn.z,Mn.y,0,-In.z,In.y,vn.z,0,-vn.x,Mn.z,0,-Mn.x,In.z,0,-In.x,-vn.y,vn.x,0,-Mn.y,Mn.x,0,-In.y,In.x,0];return!gs(t,ei,ti,ni,hr)||(t=[1,0,0,0,1,0,0,0,1],!gs(t,ei,ti,ni,hr))?!1:(fr.crossVectors(vn,Mn),t=[fr.x,fr.y,fr.z],gs(t,ei,ti,ni,hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(an),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const an=[new P,new P,new P,new P,new P,new P,new P,new P],Xt=new P,ur=new Jn,ei=new P,ti=new P,ni=new P,vn=new P,Mn=new P,In=new P,Oi=new P,hr=new P,fr=new P,Dn=new P;function gs(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Dn.fromArray(n,s);const c=r.x*Math.abs(Dn.x)+r.y*Math.abs(Dn.y)+r.z*Math.abs(Dn.z),o=e.dot(Dn),l=t.dot(Dn),u=i.dot(Dn);if(Math.max(-Math.max(o,l,u),Math.min(o,l,u))>c)return!1}return!0}const Ku=new Jn,zi=new P,_s=new P;class Ri{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ku.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zi.subVectors(e,this.center);const t=zi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(zi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_s.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zi.copy(e.center).add(_s)),this.expandByPoint(zi.copy(e.center).sub(_s))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new P,xs=new P,dr=new P,yn=new P,vs=new P,pr=new P,Ms=new P;class $a{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.origin).addScaledVector(this.direction,t),on.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){xs.copy(e).add(t).multiplyScalar(.5),dr.copy(t).sub(e).normalize(),yn.copy(this.origin).sub(xs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(dr),c=yn.dot(this.direction),o=-yn.dot(dr),l=yn.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*o-c,f=a*c-o,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*c)+f*(a*h+f+2*o)+l}else f=s,h=Math.max(0,-(a*f+c)),d=-h*h+f*(f+2*o)+l;else f=-s,h=Math.max(0,-(a*f+c)),d=-h*h+f*(f+2*o)+l;else f<=-g?(h=Math.max(0,-(-a*s+c)),f=h>0?-s:Math.min(Math.max(-s,-o),s),d=-h*h+f*(f+2*o)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-o),s),d=f*(f+2*o)+l):(h=Math.max(0,-(a*s+c)),f=h>0?s:Math.min(Math.max(-s,-o),s),d=-h*h+f*(f+2*o)+l);else f=a>0?-s:s,h=Math.max(0,-(a*f+c)),d=-h*h+f*(f+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(xs).addScaledVector(dr,f),d}intersectSphere(e,t){on.subVectors(e.center,this.origin);const i=on.dot(this.direction),r=on.dot(on)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),c=i-a,o=i+a;return o<0?null:c<0?this.at(o,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,c,o;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(c=(e.min.z-f.z)*h,o=(e.max.z-f.z)*h):(c=(e.max.z-f.z)*h,o=(e.min.z-f.z)*h),i>o||c>r)||((c>i||i!==i)&&(i=c),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,i,r,s){vs.subVectors(t,e),pr.subVectors(i,e),Ms.crossVectors(vs,pr);let a=this.direction.dot(Ms),c;if(a>0){if(r)return null;c=1}else if(a<0)c=-1,a=-a;else return null;yn.subVectors(this.origin,e);const o=c*this.direction.dot(pr.crossVectors(yn,pr));if(o<0)return null;const l=c*this.direction.dot(vs.cross(yn));if(l<0||o+l>a)return null;const u=-c*yn.dot(Ms);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,i,r,s,a,c,o,l,u,h,f,d,g,_,m){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,c,o,l,u,h,f,d,g,_,m)}set(e,t,i,r,s,a,c,o,l,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=c,p[13]=o,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ii.setFromMatrixColumn(e,0).length(),s=1/ii.setFromMatrixColumn(e,1).length(),a=1/ii.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),c=Math.sin(i),o=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,d=a*h,g=c*u,_=c*h;t[0]=o*u,t[4]=-o*h,t[8]=l,t[1]=d+g*l,t[5]=f-_*l,t[9]=-c*o,t[2]=_-f*l,t[6]=g+d*l,t[10]=a*o}else if(e.order==="YXZ"){const f=o*u,d=o*h,g=l*u,_=l*h;t[0]=f+_*c,t[4]=g*c-d,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-c,t[2]=d*c-g,t[6]=_+f*c,t[10]=a*o}else if(e.order==="ZXY"){const f=o*u,d=o*h,g=l*u,_=l*h;t[0]=f-_*c,t[4]=-a*h,t[8]=g+d*c,t[1]=d+g*c,t[5]=a*u,t[9]=_-f*c,t[2]=-a*l,t[6]=c,t[10]=a*o}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=c*u,_=c*h;t[0]=o*u,t[4]=g*l-d,t[8]=f*l+_,t[1]=o*h,t[5]=_*l+f,t[9]=d*l-g,t[2]=-l,t[6]=c*o,t[10]=a*o}else if(e.order==="YZX"){const f=a*o,d=a*l,g=c*o,_=c*l;t[0]=o*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-c*u,t[2]=-l*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*o,d=a*l,g=c*o,_=c*l;t[0]=o*u,t[4]=-h,t[8]=l*u,t[1]=f*h+_,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=c*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($u,e,ju)}lookAt(e,t,i){const r=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),bn.crossVectors(i,It),bn.lengthSq()===0&&(Math.abs(i.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),bn.crossVectors(i,It)),bn.normalize(),mr.crossVectors(It,bn),r[0]=bn.x,r[4]=mr.x,r[8]=It.x,r[1]=bn.y,r[5]=mr.y,r[9]=It.y,r[2]=bn.z,r[6]=mr.z,r[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],c=i[4],o=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],E=i[3],v=i[7],x=i[11],D=i[15],A=r[0],R=r[4],L=r[8],w=r[12],y=r[1],I=r[5],V=r[9],z=r[13],H=r[2],J=r[6],G=r[10],Q=r[14],W=r[3],ce=r[7],pe=r[11],xe=r[15];return s[0]=a*A+c*y+o*H+l*W,s[4]=a*R+c*I+o*J+l*ce,s[8]=a*L+c*V+o*G+l*pe,s[12]=a*w+c*z+o*Q+l*xe,s[1]=u*A+h*y+f*H+d*W,s[5]=u*R+h*I+f*J+d*ce,s[9]=u*L+h*V+f*G+d*pe,s[13]=u*w+h*z+f*Q+d*xe,s[2]=g*A+_*y+m*H+p*W,s[6]=g*R+_*I+m*J+p*ce,s[10]=g*L+_*V+m*G+p*pe,s[14]=g*w+_*z+m*Q+p*xe,s[3]=E*A+v*y+x*H+D*W,s[7]=E*R+v*I+x*J+D*ce,s[11]=E*L+v*V+x*G+D*pe,s[15]=E*w+v*z+x*Q+D*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],c=e[5],o=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*o*h-r*l*h-s*c*f+i*l*f+r*c*d-i*o*d)+_*(+t*o*d-t*l*f+s*a*f-r*a*d+r*l*u-s*o*u)+m*(+t*l*h-t*c*d-s*a*h+i*a*d+s*c*u-i*l*u)+p*(-r*c*u-t*o*h+t*c*f+r*a*h-i*a*f+i*o*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],c=e[5],o=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],E=h*m*l-_*f*l+_*o*d-c*m*d-h*o*p+c*f*p,v=g*f*l-u*m*l-g*o*d+a*m*d+u*o*p-a*f*p,x=u*_*l-g*h*l+g*c*d-a*_*d-u*c*p+a*h*p,D=g*h*o-u*_*o-g*c*f+a*_*f+u*c*m-a*h*m,A=t*E+i*v+r*x+s*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=E*R,e[1]=(_*f*s-h*m*s-_*r*d+i*m*d+h*r*p-i*f*p)*R,e[2]=(c*m*s-_*o*s+_*r*l-i*m*l-c*r*p+i*o*p)*R,e[3]=(h*o*s-c*f*s-h*r*l+i*f*l+c*r*d-i*o*d)*R,e[4]=v*R,e[5]=(u*m*s-g*f*s+g*r*d-t*m*d-u*r*p+t*f*p)*R,e[6]=(g*o*s-a*m*s-g*r*l+t*m*l+a*r*p-t*o*p)*R,e[7]=(a*f*s-u*o*s+u*r*l-t*f*l-a*r*d+t*o*d)*R,e[8]=x*R,e[9]=(g*h*s-u*_*s-g*i*d+t*_*d+u*i*p-t*h*p)*R,e[10]=(a*_*s-g*c*s+g*i*l-t*_*l-a*i*p+t*c*p)*R,e[11]=(u*c*s-a*h*s-u*i*l+t*h*l+a*i*d-t*c*d)*R,e[12]=D*R,e[13]=(u*_*r-g*h*r+g*i*f-t*_*f-u*i*m+t*h*m)*R,e[14]=(g*c*r-a*_*r-g*i*o+t*_*o+a*i*m-t*c*m)*R,e[15]=(a*h*r-u*c*r+u*i*o-t*h*o-a*i*f+t*c*f)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,c=e.y,o=e.z,l=s*a,u=s*c;return this.set(l*a+i,l*c-r*o,l*o+r*c,0,l*c+r*o,u*c+i,u*o-r*a,0,l*o-r*c,u*o+r*a,s*o*o+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,c=t._z,o=t._w,l=s+s,u=a+a,h=c+c,f=s*l,d=s*u,g=s*h,_=a*u,m=a*h,p=c*h,E=o*l,v=o*u,x=o*h,D=i.x,A=i.y,R=i.z;return r[0]=(1-(_+p))*D,r[1]=(d+x)*D,r[2]=(g-v)*D,r[3]=0,r[4]=(d-x)*A,r[5]=(1-(f+p))*A,r[6]=(m+E)*A,r[7]=0,r[8]=(g+v)*R,r[9]=(m-E)*R,r[10]=(1-(f+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ii.set(r[0],r[1],r[2]).length();const a=ii.set(r[4],r[5],r[6]).length(),c=ii.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zt.copy(this);const l=1/s,u=1/a,h=1/c;return Zt.elements[0]*=l,Zt.elements[1]*=l,Zt.elements[2]*=l,Zt.elements[4]*=u,Zt.elements[5]*=u,Zt.elements[6]*=u,Zt.elements[8]*=h,Zt.elements[9]*=h,Zt.elements[10]*=h,t.setFromRotationMatrix(Zt),i.x=s,i.y=a,i.z=c,this}makePerspective(e,t,i,r,s,a,c=dn){const o=this.elements,l=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let d,g;if(c===dn)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(c===Jr)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=u,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=g,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a,c=dn){const o=this.elements,l=1/(t-e),u=1/(i-r),h=1/(a-s),f=(t+e)*l,d=(i+r)*u;let g,_;if(c===dn)g=(a+s)*h,_=-2*h;else if(c===Jr)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*u,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=_,o[14]=-g,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ii=new P,Zt=new rt,$u=new P(0,0,0),ju=new P(1,1,1),bn=new P,mr=new P,It=new P,No=new rt,Fo=new Ci;class tn{constructor(e=0,t=0,i=0,r=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],c=r[8],o=r[1],l=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(c,d),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(o,s));break;case"ZYX":this._y=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(o,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(c,d));break;case"XZY":this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return No.makeRotationFromQuaternion(e),this.setFromRotationMatrix(No,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fo.setFromEuler(this),this.setFromQuaternion(Fo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class ja{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qu=0;const Oo=new P,ri=new Ci,cn=new rt,gr=new P,Bi=new P,eh=new P,th=new Ci,zo=new P(1,0,0),Bo=new P(0,1,0),ko=new P(0,0,1),Vo={type:"added"},nh={type:"removed"},si={type:"childadded",child:null},ys={type:"childremoved",child:null};class yt extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new P,t=new tn,i=new Ci,r=new P(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new Ge}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.multiply(ri),this}rotateOnWorldAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.premultiply(ri),this}rotateX(e){return this.rotateOnAxis(zo,e)}rotateY(e){return this.rotateOnAxis(Bo,e)}rotateZ(e){return this.rotateOnAxis(ko,e)}translateOnAxis(e,t){return Oo.copy(e).applyQuaternion(this.quaternion),this.position.add(Oo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zo,e)}translateY(e){return this.translateOnAxis(Bo,e)}translateZ(e){return this.translateOnAxis(ko,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?gr.copy(e):gr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Bi,gr,this.up):cn.lookAt(gr,Bi,this.up),this.quaternion.setFromRotationMatrix(cn),r&&(cn.extractRotation(r.matrixWorld),ri.setFromRotationMatrix(cn),this.quaternion.premultiply(ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vo),si.child=e,this.dispatchEvent(si),si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nh),ys.child=e,this.dispatchEvent(ys),ys.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vo),si.child=e,this.dispatchEvent(si),si.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,e,eh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,th,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(c,o){return c[o.uuid]===void 0&&(c[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const o=c.shapes;if(Array.isArray(o))for(let l=0,u=o.length;l<u;l++){const h=o[l];s(e.shapes,h)}else s(e.shapes,o)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let o=0,l=this.material.length;o<l;o++)c.push(s(e.materials,this.material[o]));r.material=c}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const o=this.animations[c];r.animations.push(s(e.animations,o))}}if(t){const c=a(e.geometries),o=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);c.length>0&&(i.geometries=c),o.length>0&&(i.materials=o),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(c){const o=[];for(const l in c){const u=c[l];delete u.metadata,o.push(u)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}yt.DEFAULT_UP=new P(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new P,ln=new P,bs=new P,un=new P,ai=new P,oi=new P,Ho=new P,Ss=new P,Es=new P,ws=new P,Ts=new ot,As=new ot,Cs=new ot;class Vt{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Yt.subVectors(e,t),r.cross(Yt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Yt.subVectors(r,t),ln.subVectors(i,t),bs.subVectors(e,t);const a=Yt.dot(Yt),c=Yt.dot(ln),o=Yt.dot(bs),l=ln.dot(ln),u=ln.dot(bs),h=a*l-c*c;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(l*o-c*u)*f,g=(a*u-c*o)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(e,t,i,r,s,a,c,o){return this.getBarycoord(e,t,i,r,un)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(s,un.x),o.addScaledVector(a,un.y),o.addScaledVector(c,un.z),o)}static getInterpolatedAttribute(e,t,i,r,s,a){return Ts.setScalar(0),As.setScalar(0),Cs.setScalar(0),Ts.fromBufferAttribute(e,t),As.fromBufferAttribute(e,i),Cs.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ts,s.x),a.addScaledVector(As,s.y),a.addScaledVector(Cs,s.z),a}static isFrontFacing(e,t,i,r){return Yt.subVectors(i,t),ln.subVectors(e,t),Yt.cross(ln).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Yt.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Vt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Vt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,c;ai.subVectors(r,i),oi.subVectors(s,i),Ss.subVectors(e,i);const o=ai.dot(Ss),l=oi.dot(Ss);if(o<=0&&l<=0)return t.copy(i);Es.subVectors(e,r);const u=ai.dot(Es),h=oi.dot(Es);if(u>=0&&h<=u)return t.copy(r);const f=o*h-u*l;if(f<=0&&o>=0&&u<=0)return a=o/(o-u),t.copy(i).addScaledVector(ai,a);ws.subVectors(e,s);const d=ai.dot(ws),g=oi.dot(ws);if(g>=0&&d<=g)return t.copy(s);const _=d*l-o*g;if(_<=0&&l>=0&&g<=0)return c=l/(l-g),t.copy(i).addScaledVector(oi,c);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Ho.subVectors(s,r),c=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(Ho,c);const p=1/(m+_+f);return a=_*p,c=f*p,t.copy(i).addScaledVector(ai,a).addScaledVector(oi,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ll={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},_r={h:0,s:0,l:0};function Rs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=$e.workingColorSpace){if(e=Ka(e,1),t=gt(t,0,1),i=gt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Rs(a,s,e+1/3),this.g=Rs(a,s,e),this.b=Rs(a,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,t=Bt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],c=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){const i=ll[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pn(e.r),this.g=pn(e.g),this.b=pn(e.b),this}copyLinearToSRGB(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return $e.fromWorkingColorSpace(wt.copy(this),e),Math.round(gt(wt.r*255,0,255))*65536+Math.round(gt(wt.g*255,0,255))*256+Math.round(gt(wt.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(wt.copy(this),t);const i=wt.r,r=wt.g,s=wt.b,a=Math.max(i,r,s),c=Math.min(i,r,s);let o,l;const u=(c+a)/2;if(c===a)o=0,l=0;else{const h=a-c;switch(l=u<=.5?h/(a+c):h/(2-a-c),a){case i:o=(r-s)/h+(r<s?6:0);break;case r:o=(s-i)/h+2;break;case s:o=(i-r)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=Bt){$e.fromWorkingColorSpace(wt.copy(this),e);const t=wt.r,i=wt.g,r=wt.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Sn),this.setHSL(Sn.h+e,Sn.s+t,Sn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Sn),e.getHSL(_r);const i=Yi(Sn.h,_r.h,t),r=Yi(Sn.s,_r.s,t),s=Yi(Sn.l,_r.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new je;je.NAMES=ll;let ih=0;class Pi extends qn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=Pn(),this.name="",this.blending=gi,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=js,this.blendDst=Qs,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(i.blending=this.blending),this.side!==Rn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==js&&(i.blendSrc=this.blendSrc),this.blendDst!==Qs&&(i.blendDst=this.blendDst),this.blendEquation!==Vn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const c in s){const o=s[c];delete o.metadata,a.push(o)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ul extends Pi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new P,xr=new oe;class Ye{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wo,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXY(t,xr.x,xr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=di(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=di(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=di(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=di(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),r=Tt(r,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wo&&(e.usage=this.usage),e}}class hl extends Ye{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class fl extends Ye{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class et extends Ye{constructor(e,t,i){super(new Float32Array(e),t,i)}}let rh=0;const zt=new rt,Ps=new yt,ci=new P,Dt=new Jn,ki=new Jn,vt=new P;class ke extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(al(e)?fl:hl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,i){return zt.makeTranslation(e,t,i),this.applyMatrix4(zt),this}scale(e,t,i){return zt.makeScale(e,t,i),this.applyMatrix4(zt),this}lookAt(e){return Ps.lookAt(e),Ps.updateMatrix(),this.applyMatrix4(Ps.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new et(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Dt.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const c=t[s];ki.setFromBufferAttribute(c),this.morphTargetsRelative?(vt.addVectors(Dt.min,ki.min),Dt.expandByPoint(vt),vt.addVectors(Dt.max,ki.max),Dt.expandByPoint(vt)):(Dt.expandByPoint(ki.min),Dt.expandByPoint(ki.max))}Dt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(vt));if(t)for(let s=0,a=t.length;s<a;s++){const c=t[s],o=this.morphTargetsRelative;for(let l=0,u=c.count;l<u;l++)vt.fromBufferAttribute(c,l),o&&(ci.fromBufferAttribute(e,l),vt.add(ci)),r=Math.max(r,i.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),c=[],o=[];for(let L=0;L<i.count;L++)c[L]=new P,o[L]=new P;const l=new P,u=new P,h=new P,f=new oe,d=new oe,g=new oe,_=new P,m=new P;function p(L,w,y){l.fromBufferAttribute(i,L),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,y),f.fromBufferAttribute(s,L),d.fromBufferAttribute(s,w),g.fromBufferAttribute(s,y),u.sub(l),h.sub(l),d.sub(f),g.sub(f);const I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(I),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(I),c[L].add(_),c[w].add(_),c[y].add(_),o[L].add(m),o[w].add(m),o[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,w=E.length;L<w;++L){const y=E[L],I=y.start,V=y.count;for(let z=I,H=I+V;z<H;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const v=new P,x=new P,D=new P,A=new P;function R(L){D.fromBufferAttribute(r,L),A.copy(D);const w=c[L];v.copy(w),v.sub(D.multiplyScalar(D.dot(w))).normalize(),x.crossVectors(A,w);const I=x.dot(o[L])<0?-1:1;a.setXYZW(L,v.x,v.y,v.z,I)}for(let L=0,w=E.length;L<w;++L){const y=E[L],I=y.start,V=y.count;for(let z=I,H=I+V;z<H;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ye(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new P,s=new P,a=new P,c=new P,o=new P,l=new P,u=new P,h=new P;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),c.fromBufferAttribute(i,g),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),c.add(u),o.add(u),l.add(u),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(c,o){const l=c.array,u=c.itemSize,h=c.normalized,f=new l.constructor(o.length*u);let d=0,g=0;for(let _=0,m=o.length;_<m;_++){c.isInterleavedBufferAttribute?d=o[_]*c.data.stride+c.offset:d=o[_]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new Ye(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ke,i=this.index.array,r=this.attributes;for(const c in r){const o=r[c],l=e(o,i);t.setAttribute(c,l)}const s=this.morphAttributes;for(const c in s){const o=[],l=s[c];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,i);o.push(d)}t.morphAttributes[c]=o}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let c=0,o=a.length;c<o;c++){const l=a[c];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const l in o)o[l]!==void 0&&(e[l]=o[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const o in i){const l=i[o];e.data.attributes[o]=l.toJSON(e.data)}const r={};let s=!1;for(const o in this.morphAttributes){const l=this.morphAttributes[o],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(r[o]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Go=new rt,Un=new $a,vr=new Ri,Wo=new P,Mr=new P,yr=new P,br=new P,Ls=new P,Sr=new P,Xo=new P,Er=new P;class Jt extends yt{constructor(e=new ke,t=new ul){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(s&&c){Sr.set(0,0,0);for(let o=0,l=s.length;o<l;o++){const u=c[o],h=s[o];u!==0&&(Ls.fromBufferAttribute(h,e),a?Sr.addScaledVector(Ls,u):Sr.addScaledVector(Ls.sub(t),u))}t.add(Sr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere),vr.applyMatrix4(s),Un.copy(e.ray).recast(e.near),!(vr.containsPoint(Un.origin)===!1&&(Un.intersectSphere(vr,Wo)===null||Un.origin.distanceToSquared(Wo)>(e.far-e.near)**2))&&(Go.copy(s).invert(),Un.copy(e.ray).applyMatrix4(Go),!(i.boundingBox!==null&&Un.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,c=s.index,o=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(c!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),v=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let x=E,D=v;x<D;x+=3){const A=c.getX(x),R=c.getX(x+1),L=c.getX(x+2);r=wr(this,p,e,i,l,u,h,A,R,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=c.getX(m),v=c.getX(m+1),x=c.getX(m+2);r=wr(this,a,e,i,l,u,h,E,v,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=E,D=v;x<D;x+=3){const A=x,R=x+1,L=x+2;r=wr(this,p,e,i,l,u,h,A,R,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=m,v=m+1,x=m+2;r=wr(this,a,e,i,l,u,h,E,v,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function sh(n,e,t,i,r,s,a,c){let o;if(e.side===Rt?o=i.intersectTriangle(a,s,r,!0,c):o=i.intersectTriangle(r,s,a,e.side===Rn,c),o===null)return null;Er.copy(c),Er.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Er);return l<t.near||l>t.far?null:{distance:l,point:Er.clone(),object:n}}function wr(n,e,t,i,r,s,a,c,o,l){n.getVertexPosition(c,Mr),n.getVertexPosition(o,yr),n.getVertexPosition(l,br);const u=sh(n,e,t,i,Mr,yr,br,Xo);if(u){const h=new P;Vt.getBarycoord(Xo,Mr,yr,br,h),r&&(u.uv=Vt.getInterpolatedAttribute(r,c,o,l,h,new oe)),s&&(u.uv1=Vt.getInterpolatedAttribute(s,c,o,l,h,new oe)),a&&(u.normal=Vt.getInterpolatedAttribute(a,c,o,l,h,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:c,b:o,c:l,normal:new P,materialIndex:0};Vt.getNormal(Mr,yr,br,f.normal),u.face=f,u.barycoord=h}return u}class S extends ke{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const c=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const o=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(o),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(h,2));function g(_,m,p,E,v,x,D,A,R,L,w){const y=x/R,I=D/L,V=x/2,z=D/2,H=A/2,J=R+1,G=L+1;let Q=0,W=0;const ce=new P;for(let pe=0;pe<G;pe++){const xe=pe*I-z;for(let De=0;De<J;De++){const Ze=De*y-V;ce[_]=Ze*E,ce[m]=xe*v,ce[p]=H,l.push(ce.x,ce.y,ce.z),ce[_]=0,ce[m]=0,ce[p]=A>0?1:-1,u.push(ce.x,ce.y,ce.z),h.push(De/R),h.push(1-pe/L),Q+=1}}for(let pe=0;pe<L;pe++)for(let xe=0;xe<R;xe++){const De=f+xe+J*pe,Ze=f+xe+J*(pe+1),Z=f+(xe+1)+J*(pe+1),te=f+(xe+1)+J*pe;o.push(De,Ze,te),o.push(Ze,Z,te),W+=6}c.addGroup(d,W,w),d+=W,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new S(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function At(n){const e={};for(let t=0;t<n.length;t++){const i=wi(n[t]);for(const r in i)e[r]=i[r]}return e}function ah(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function dl(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const oh={clone:wi,merge:At};var ch=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends Pi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ch,this.fragmentShader=lh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wi(e.uniforms),this.uniformsGroups=ah(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class pl extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const En=new P,Zo=new oe,Yo=new oe;class kt extends pl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ji*2*Math.atan(Math.tan(xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(En.x,En.y).multiplyScalar(-e/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(En.x,En.y).multiplyScalar(-e/En.z)}getViewSize(e,t){return this.getViewBounds(e,Zo,Yo),t.subVectors(Yo,Zo)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xi*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const o=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/o,t-=a.offsetY*i/l,r*=a.width/o,i*=a.height/l}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const li=-90,ui=1;class uh extends yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kt(li,ui,e,t);r.layers=this.layers,this.add(r);const s=new kt(li,ui,e,t);s.layers=this.layers,this.add(s);const a=new kt(li,ui,e,t);a.layers=this.layers,this.add(a);const c=new kt(li,ui,e,t);c.layers=this.layers,this.add(c);const o=new kt(li,ui,e,t);o.layers=this.layers,this.add(o);const l=new kt(li,ui,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,c,o]=t;for(const l of t)this.remove(l);if(e===dn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Jr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,c,o,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,c),e.setRenderTarget(i,3,r),e.render(t,o),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ml extends Mt{constructor(e,t,i,r,s,a,c,o,l,u){e=e!==void 0?e:[],t=t!==void 0?t:yi,super(e,t,i,r,s,a,c,o,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hh extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ml(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new S(5,5,5),s=new gn({name:"CubemapFromEquirect",uniforms:wi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rt,blending:An});s.uniforms.tEquirect.value=t;const a=new Jt(r,s),c=t.minFilter;return t.minFilter===Wn&&(t.minFilter=Qt),new uh(1,10,this).update(e,a),t.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Is=new P,fh=new P,dh=new Ge;class Bn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Is.subVectors(i,t).cross(fh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Is),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||dh.getNormalMatrix(e),r=this.coplanarPoint(Is).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new Ri,Tr=new P;class Qa{constructor(e=new Bn,t=new Bn,i=new Bn,r=new Bn,s=new Bn,a=new Bn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(r),c[4].copy(s),c[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=dn){const i=this.planes,r=e.elements,s=r[0],a=r[1],c=r[2],o=r[3],l=r[4],u=r[5],h=r[6],f=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],E=r[13],v=r[14],x=r[15];if(i[0].setComponents(o-s,f-l,m-d,x-p).normalize(),i[1].setComponents(o+s,f+l,m+d,x+p).normalize(),i[2].setComponents(o+a,f+u,m+g,x+E).normalize(),i[3].setComponents(o-a,f-u,m-g,x-E).normalize(),i[4].setComponents(o-c,f-h,m-_,x-v).normalize(),t===dn)i[5].setComponents(o+c,f+h,m+_,x+v).normalize();else if(t===Jr)i[5].setComponents(c,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(e){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Tr.x=r.normal.x>0?e.max.x:e.min.x,Tr.y=r.normal.y>0?e.max.y:e.min.y,Tr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gl(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ph(n){const e=new WeakMap;function t(c,o){const l=c.array,u=c.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(o,f),n.bufferData(o,l,u),c.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(l instanceof Uint16Array)c.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:c.version,size:h}}function i(c,o,l){const u=o.array,h=o.updateRanges;if(n.bindBuffer(l,c),h.length===0)n.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}o.clearUpdateRanges()}o.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const o=e.get(c);o&&(n.deleteBuffer(o.buffer),e.delete(c))}function a(c,o){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const u=e.get(c);(!u||u.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const l=e.get(c);if(l===void 0)e.set(c,t(c,o));else if(l.version<c.version){if(l.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,c,o),l.version=c.version}}return{get:r,remove:s,update:a}}class rr extends ke{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,c=Math.floor(i),o=Math.floor(r),l=c+1,u=o+1,h=e/c,f=t/o,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const E=p*f-a;for(let v=0;v<l;v++){const x=v*h-s;g.push(x,-E,0),_.push(0,0,1),m.push(v/c),m.push(1-p/o)}}for(let p=0;p<o;p++)for(let E=0;E<c;E++){const v=E+l*p,x=E+l*(p+1),D=E+1+l*(p+1),A=E+1+l*p;d.push(v,x,A),d.push(x,D,A)}this.setIndex(d),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.width,e.height,e.widthSegments,e.heightSegments)}}var mh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_h=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Eh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Th=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ah=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ch=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Kh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$h=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ef=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,af=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,of=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ff=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,df=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_f=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ef=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Af=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,If=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Df=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Uf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Of=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$f=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ed=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,td=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,id=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ad=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,od=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ld=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ud=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const md=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Md=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ed=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Td=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ad=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ld=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Id=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ud=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Od=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:mh,alphahash_pars_fragment:gh,alphamap_fragment:_h,alphamap_pars_fragment:xh,alphatest_fragment:vh,alphatest_pars_fragment:Mh,aomap_fragment:yh,aomap_pars_fragment:bh,batching_pars_vertex:Sh,batching_vertex:Eh,begin_vertex:wh,beginnormal_vertex:Th,bsdfs:Ah,iridescence_fragment:Ch,bumpmap_pars_fragment:Rh,clipping_planes_fragment:Ph,clipping_planes_pars_fragment:Lh,clipping_planes_pars_vertex:Ih,clipping_planes_vertex:Dh,color_fragment:Uh,color_pars_fragment:Nh,color_pars_vertex:Fh,color_vertex:Oh,common:zh,cube_uv_reflection_fragment:Bh,defaultnormal_vertex:kh,displacementmap_pars_vertex:Vh,displacementmap_vertex:Hh,emissivemap_fragment:Gh,emissivemap_pars_fragment:Wh,colorspace_fragment:Xh,colorspace_pars_fragment:Zh,envmap_fragment:Yh,envmap_common_pars_fragment:qh,envmap_pars_fragment:Jh,envmap_pars_vertex:Kh,envmap_physical_pars_fragment:cf,envmap_vertex:$h,fog_vertex:jh,fog_pars_vertex:Qh,fog_fragment:ef,fog_pars_fragment:tf,gradientmap_pars_fragment:nf,lightmap_pars_fragment:rf,lights_lambert_fragment:sf,lights_lambert_pars_fragment:af,lights_pars_begin:of,lights_toon_fragment:lf,lights_toon_pars_fragment:uf,lights_phong_fragment:hf,lights_phong_pars_fragment:ff,lights_physical_fragment:df,lights_physical_pars_fragment:pf,lights_fragment_begin:mf,lights_fragment_maps:gf,lights_fragment_end:_f,logdepthbuf_fragment:xf,logdepthbuf_pars_fragment:vf,logdepthbuf_pars_vertex:Mf,logdepthbuf_vertex:yf,map_fragment:bf,map_pars_fragment:Sf,map_particle_fragment:Ef,map_particle_pars_fragment:wf,metalnessmap_fragment:Tf,metalnessmap_pars_fragment:Af,morphinstance_vertex:Cf,morphcolor_vertex:Rf,morphnormal_vertex:Pf,morphtarget_pars_vertex:Lf,morphtarget_vertex:If,normal_fragment_begin:Df,normal_fragment_maps:Uf,normal_pars_fragment:Nf,normal_pars_vertex:Ff,normal_vertex:Of,normalmap_pars_fragment:zf,clearcoat_normal_fragment_begin:Bf,clearcoat_normal_fragment_maps:kf,clearcoat_pars_fragment:Vf,iridescence_pars_fragment:Hf,opaque_fragment:Gf,packing:Wf,premultiplied_alpha_fragment:Xf,project_vertex:Zf,dithering_fragment:Yf,dithering_pars_fragment:qf,roughnessmap_fragment:Jf,roughnessmap_pars_fragment:Kf,shadowmap_pars_fragment:$f,shadowmap_pars_vertex:jf,shadowmap_vertex:Qf,shadowmask_pars_fragment:ed,skinbase_vertex:td,skinning_pars_vertex:nd,skinning_vertex:id,skinnormal_vertex:rd,specularmap_fragment:sd,specularmap_pars_fragment:ad,tonemapping_fragment:od,tonemapping_pars_fragment:cd,transmission_fragment:ld,transmission_pars_fragment:ud,uv_pars_fragment:hd,uv_pars_vertex:fd,uv_vertex:dd,worldpos_vertex:pd,background_vert:md,background_frag:gd,backgroundCube_vert:_d,backgroundCube_frag:xd,cube_vert:vd,cube_frag:Md,depth_vert:yd,depth_frag:bd,distanceRGBA_vert:Sd,distanceRGBA_frag:Ed,equirect_vert:wd,equirect_frag:Td,linedashed_vert:Ad,linedashed_frag:Cd,meshbasic_vert:Rd,meshbasic_frag:Pd,meshlambert_vert:Ld,meshlambert_frag:Id,meshmatcap_vert:Dd,meshmatcap_frag:Ud,meshnormal_vert:Nd,meshnormal_frag:Fd,meshphong_vert:Od,meshphong_frag:zd,meshphysical_vert:Bd,meshphysical_frag:kd,meshtoon_vert:Vd,meshtoon_frag:Hd,points_vert:Gd,points_frag:Wd,shadow_vert:Xd,shadow_frag:Zd,sprite_vert:Yd,sprite_frag:qd},he={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},jt={basic:{uniforms:At([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:At([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new je(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:At([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:At([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:At([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new je(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:At([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:At([he.points,he.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:At([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:At([he.common,he.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:At([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:At([he.sprite,he.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:At([he.common,he.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:At([he.lights,he.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};jt.physical={uniforms:At([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Ar={r:0,b:0,g:0},Fn=new tn,Jd=new rt;function Kd(n,e,t,i,r,s,a){const c=new je(0);let o=s===!0?0:1,l,u,h=null,f=0,d=null;function g(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?t:e).get(v)),v}function _(E){let v=!1;const x=g(E);x===null?p(c,o):x&&x.isColor&&(p(x,1),v=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,v){const x=g(v);x&&(x.isCubeTexture||x.mapping===ns)?(u===void 0&&(u=new Jt(new S(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:wi(jt.backgroundCube.uniforms),vertexShader:jt.backgroundCube.vertexShader,fragmentShader:jt.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Fn.copy(v.backgroundRotation),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Jd.makeRotationFromEuler(Fn)),u.material.toneMapped=$e.getTransfer(x.colorSpace)!==st,(h!==x||f!==x.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Jt(new rr(2,2),new gn({name:"BackgroundMaterial",uniforms:wi(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=$e.getTransfer(x.colorSpace)!==st,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,d=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,v){E.getRGB(Ar,dl(n)),i.buffers.color.setClear(Ar.r,Ar.g,Ar.b,v,a)}return{getClearColor:function(){return c},setClearColor:function(E,v=1){c.set(E),o=v,p(c,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,p(c,o)},render:_,addToRenderList:m}}function $d(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function c(y,I,V,z,H){let J=!1;const G=h(z,V,I);s!==G&&(s=G,l(s.object)),J=d(y,z,V,H),J&&g(y,z,V,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,x(y,I,V,z),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function o(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function h(y,I,V){const z=V.wireframe===!0;let H=i[y.id];H===void 0&&(H={},i[y.id]=H);let J=H[I.id];J===void 0&&(J={},H[I.id]=J);let G=J[z];return G===void 0&&(G=f(o()),J[z]=G),G}function f(y){const I=[],V=[],z=[];for(let H=0;H<t;H++)I[H]=0,V[H]=0,z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:z,object:y,attributes:{},index:null}}function d(y,I,V,z){const H=s.attributes,J=I.attributes;let G=0;const Q=V.getAttributes();for(const W in Q)if(Q[W].location>=0){const pe=H[W];let xe=J[W];if(xe===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(xe=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(xe=y.instanceColor)),pe===void 0||pe.attribute!==xe||xe&&pe.data!==xe.data)return!0;G++}return s.attributesNum!==G||s.index!==z}function g(y,I,V,z){const H={},J=I.attributes;let G=0;const Q=V.getAttributes();for(const W in Q)if(Q[W].location>=0){let pe=J[W];pe===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(pe=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(pe=y.instanceColor));const xe={};xe.attribute=pe,pe&&pe.data&&(xe.data=pe.data),H[W]=xe,G++}s.attributes=H,s.attributesNum=G,s.index=z}function _(){const y=s.newAttributes;for(let I=0,V=y.length;I<V;I++)y[I]=0}function m(y){p(y,0)}function p(y,I){const V=s.newAttributes,z=s.enabledAttributes,H=s.attributeDivisors;V[y]=1,z[y]===0&&(n.enableVertexAttribArray(y),z[y]=1),H[y]!==I&&(n.vertexAttribDivisor(y,I),H[y]=I)}function E(){const y=s.newAttributes,I=s.enabledAttributes;for(let V=0,z=I.length;V<z;V++)I[V]!==y[V]&&(n.disableVertexAttribArray(V),I[V]=0)}function v(y,I,V,z,H,J,G){G===!0?n.vertexAttribIPointer(y,I,V,H,J):n.vertexAttribPointer(y,I,V,z,H,J)}function x(y,I,V,z){_();const H=z.attributes,J=V.getAttributes(),G=I.defaultAttributeValues;for(const Q in J){const W=J[Q];if(W.location>=0){let ce=H[Q];if(ce===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(ce=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(ce=y.instanceColor)),ce!==void 0){const pe=ce.normalized,xe=ce.itemSize,De=e.get(ce);if(De===void 0)continue;const Ze=De.buffer,Z=De.type,te=De.bytesPerElement,ve=Z===n.INT||Z===n.UNSIGNED_INT||ce.gpuType===Ga;if(ce.isInterleavedBufferAttribute){const ae=ce.data,Ie=ae.stride,ze=ce.offset;if(ae.isInstancedInterleavedBuffer){for(let Fe=0;Fe<W.locationSize;Fe++)p(W.location+Fe,ae.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Fe=0;Fe<W.locationSize;Fe++)m(W.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let Fe=0;Fe<W.locationSize;Fe++)v(W.location+Fe,xe/W.locationSize,Z,pe,Ie*te,(ze+xe/W.locationSize*Fe)*te,ve)}else{if(ce.isInstancedBufferAttribute){for(let ae=0;ae<W.locationSize;ae++)p(W.location+ae,ce.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ae=0;ae<W.locationSize;ae++)m(W.location+ae);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let ae=0;ae<W.locationSize;ae++)v(W.location+ae,xe/W.locationSize,Z,pe,xe*te,xe/W.locationSize*ae*te,ve)}}else if(G!==void 0){const pe=G[Q];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(W.location,pe);break;case 3:n.vertexAttrib3fv(W.location,pe);break;case 4:n.vertexAttrib4fv(W.location,pe);break;default:n.vertexAttrib1fv(W.location,pe)}}}}E()}function D(){L();for(const y in i){const I=i[y];for(const V in I){const z=I[V];for(const H in z)u(z[H].object),delete z[H];delete I[V]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const I=i[y.id];for(const V in I){const z=I[V];for(const H in z)u(z[H].object),delete z[H];delete I[V]}delete i[y.id]}function R(y){for(const I in i){const V=i[I];if(V[y.id]===void 0)continue;const z=V[y.id];for(const H in z)u(z[H].object),delete z[H];delete V[y.id]}}function L(){w(),a=!0,s!==r&&(s=r,l(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:L,resetDefaultState:w,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function jd(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function c(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,i,1)}function o(l,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=c,this.renderMultiDrawInstances=o}function Qd(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==qt&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(R){const L=R===ir&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==mn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==en&&!L)}function o(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=o(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:c,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:D,maxSamples:A}}function ep(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Bn,c=new Ge,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const E=s?0:i,v=E*4;let x=p.clippingState||null;o.value=x,x=u(g,f,v,d);for(let D=0;D!==v;++D)x[D]=t[D];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){o.value!==t&&(o.value=t,o.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=o.value,g!==!0||m===null){const p=d+_*4,E=f.matrixWorldInverse;c.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=d;v!==_;++v,x+=4)a.copy(h[v]).applyMatrix4(E,c),a.normal.toArray(m,x),m[x+3]=a.constant}o.value=m,o.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function tp(n){let e=new WeakMap;function t(a,c){return c===oa?a.mapping=yi:c===ca&&(a.mapping=bi),a}function i(a){if(a&&a.isTexture){const c=a.mapping;if(c===oa||c===ca)if(e.has(a)){const o=e.get(a).texture;return t(o,a.mapping)}else{const o=a.image;if(o&&o.height>0){const l=new hh(o.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const c=a.target;c.removeEventListener("dispose",r);const o=e.get(c);o!==void 0&&(e.delete(c),o.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class _l extends pl{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,c=r+t,o=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,c-=u*this.view.offsetY,o=c-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,c,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const pi=4,qo=[.125,.215,.35,.446,.526,.582],Hn=20,Ds=new _l,Jo=new je;let Us=null,Ns=0,Fs=0,Os=!1;const kn=(1+Math.sqrt(5))/2,hi=1/kn,Ko=[new P(-kn,hi,0),new P(kn,hi,0),new P(-hi,0,kn),new P(hi,0,kn),new P(0,kn,-hi),new P(0,kn,hi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class $o{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Us=this._renderer.getRenderTarget(),Ns=this._renderer.getActiveCubeFace(),Fs=this._renderer.getActiveMipmapLevel(),Os=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Us,Ns,Fs),this._renderer.xr.enabled=Os,e.scissorTest=!1,Cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yi||e.mapping===bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Us=this._renderer.getRenderTarget(),Ns=this._renderer.getActiveCubeFace(),Fs=this._renderer.getActiveMipmapLevel(),Os=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:ir,format:qt,colorSpace:Ai,depthBuffer:!1},r=jo(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jo(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=np(s)),this._blurMaterial=ip(s,e,t)}return r}_compileMaterial(e){const t=new Jt(this._lodPlanes[0],e);this._renderer.compile(t,Ds)}_sceneToCubeUV(e,t,i,r){const c=new kt(90,1,t,i),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Jo),u.toneMapping=Cn,u.autoClear=!1;const d=new ul({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),g=new Jt(new S,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Jo),_=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(c.up.set(0,o[p],0),c.lookAt(l[p],0,0)):E===1?(c.up.set(0,0,o[p]),c.lookAt(0,l[p],0)):(c.up.set(0,o[p],0),c.lookAt(0,0,l[p]));const v=this._cubeSize;Cr(r,E*v,p>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,c),u.render(e,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===yi||e.mapping===bi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Jt(this._lodPlanes[0],s),c=s.uniforms;c.envMap.value=e;const o=this._cubeSize;Cr(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,Ds)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=Ko[(r-s-1)%Ko.length];this._blur(e,s-1,s,a,c)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,c){const o=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Jt(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Hn-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Hn;m>Hn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hn}`);const p=[];let E=0;for(let R=0;R<Hn;++R){const L=R/_,w=Math.exp(-L*L/2);p.push(w),R===0?E+=w:R<m&&(E+=2*w)}for(let R=0;R<p.length;R++)p[R]=p[R]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",c&&(f.poleAxis.value=c);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const x=this._sizeLods[r],D=3*x*(r>v-pi?r-v+pi:0),A=4*(this._cubeSize-x);Cr(t,D,A,3*x,2*x),o.setRenderTarget(t),o.render(h,Ds)}}function np(n){const e=[],t=[],i=[];let r=n;const s=n-pi+1+qo.length;for(let a=0;a<s;a++){const c=Math.pow(2,r);t.push(c);let o=1/c;a>n-pi?o=qo[a-n+pi-1]:a===0&&(o=0),i.push(o);const l=1/(c-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*d),v=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let A=0;A<d;A++){const R=A%3*2/3-1,L=A>2?0:-1,w=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];E.set(w,_*g*A),v.set(f,m*g*A);const y=[A,A,A,A,A,A];x.set(y,p*g*A)}const D=new ke;D.setAttribute("position",new Ye(E,_)),D.setAttribute("uv",new Ye(v,m)),D.setAttribute("faceIndex",new Ye(x,p)),e.push(D),r>pi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function jo(n,e,t){const i=new Zn(n,e,t);return i.texture.mapping=ns,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ip(n,e,t){const i=new Float32Array(Hn),r=new P(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:Hn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Qo(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function ec(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function eo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rp(n){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const o=c.mapping,l=o===oa||o===ca,u=o===yi||o===bi;if(l||u){let h=e.get(c);const f=h!==void 0?h.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return t===null&&(t=new $o(n)),h=l?t.fromEquirectangular(c,h):t.fromCubemap(c,h),h.texture.pmremVersion=c.pmremVersion,e.set(c,h),h.texture;if(h!==void 0)return h.texture;{const d=c.image;return l&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new $o(n)),h=l?t.fromEquirectangular(c):t.fromCubemap(c),h.texture.pmremVersion=c.pmremVersion,e.set(c,h),c.addEventListener("dispose",s),h.texture):null}}}return c}function r(c){let o=0;const l=6;for(let u=0;u<l;u++)c[u]!==void 0&&o++;return o===l}function s(c){const o=c.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function sp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Xi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ap(n,e,t,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",a),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function c(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function o(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const E=d.array;_=d.version;for(let v=0,x=E.length;v<x;v+=3){const D=E[v+0],A=E[v+1],R=E[v+2];f.push(D,A,A,R,R,D)}}else if(g!==void 0){const E=g.array;_=g.version;for(let v=0,x=E.length/3-1;v<x;v+=3){const D=v+0,A=v+1,R=v+2;f.push(D,A,A,R,R,D)}}else return;const m=new(al(f)?fl:hl)(f,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:c,update:o,getWireframeAttribute:u}}function op(n,e,t){let i;function r(f){i=f}let s,a;function c(f){s=f.type,a=f.bytesPerElement}function o(f,d){n.drawElements(i,d,s,f*a),t.update(d,i,1)}function l(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,f*a,g),t.update(d,i,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=d[E]*_[E];t.update(p,i,1)}}this.setMode=r,this.setIndex=c,this.render=o,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function cp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,c){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=c*(s/3);break;case n.LINES:t.lines+=c*(s/2);break;case n.LINE_STRIP:t.lines+=c*(s-1);break;case n.LINE_LOOP:t.lines+=c*s;break;case n.POINTS:t.points+=c*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function lp(n,e,t){const i=new WeakMap,r=new ot;function s(a,c,o){const l=a.morphTargetInfluences,u=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(c);if(f===void 0||f.count!==h){let w=function(){R.dispose(),i.delete(c),c.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();const d=c.morphAttributes.position!==void 0,g=c.morphAttributes.normal!==void 0,_=c.morphAttributes.color!==void 0,m=c.morphAttributes.position||[],p=c.morphAttributes.normal||[],E=c.morphAttributes.color||[];let v=0;d===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let x=c.attributes.position.count*v,D=1;x>e.maxTextureSize&&(D=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const A=new Float32Array(x*D*4*h),R=new cl(A,x,D,h);R.type=en,R.needsUpdate=!0;const L=v*4;for(let y=0;y<h;y++){const I=m[y],V=p[y],z=E[y],H=x*D*4*y;for(let J=0;J<I.count;J++){const G=J*L;d===!0&&(r.fromBufferAttribute(I,J),A[H+G+0]=r.x,A[H+G+1]=r.y,A[H+G+2]=r.z,A[H+G+3]=0),g===!0&&(r.fromBufferAttribute(V,J),A[H+G+4]=r.x,A[H+G+5]=r.y,A[H+G+6]=r.z,A[H+G+7]=0),_===!0&&(r.fromBufferAttribute(z,J),A[H+G+8]=r.x,A[H+G+9]=r.y,A[H+G+10]=r.z,A[H+G+11]=z.itemSize===4?r.w:1)}}f={count:h,texture:R,size:new oe(x,D)},i.set(c,f),c.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];const g=c.morphTargetsRelative?1:1-d;o.getUniforms().setValue(n,"morphTargetBaseInfluence",g),o.getUniforms().setValue(n,"morphTargetInfluences",l)}o.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function up(n,e,t,i){let r=new WeakMap;function s(o){const l=i.render.frame,u=o.geometry,h=e.get(o,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",c)===!1&&o.addEventListener("dispose",c),r.get(o)!==l&&(t.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,n.ARRAY_BUFFER),r.set(o,l))),o.isSkinnedMesh){const f=o.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function a(){r=new WeakMap}function c(o){const l=o.target;l.removeEventListener("dispose",c),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class xl extends Mt{constructor(e,t,i,r,s,a,c,o,l,u=_i){if(u!==_i&&u!==Ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===_i&&(i=Xn),i===void 0&&u===Ei&&(i=Si),super(null,r,s,a,c,o,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Ut,this.minFilter=o!==void 0?o:Ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const vl=new Mt,tc=new xl(1,1),Ml=new cl,yl=new Ju,bl=new ml,nc=[],ic=[],rc=new Float32Array(16),sc=new Float32Array(9),ac=new Float32Array(4);function Li(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=nc[r];if(s===void 0&&(s=new Float32Array(r),nc[r]=s),e!==0){i.toArray(s,0);for(let a=1,c=0;a!==e;++a)c+=t,n[a].toArray(s,c)}return s}function _t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function rs(n,e){let t=ic[e];t===void 0&&(t=new Int32Array(e),ic[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function hp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function fp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2fv(this.addr,e),xt(t,e)}}function dp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;n.uniform3fv(this.addr,e),xt(t,e)}}function pp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4fv(this.addr,e),xt(t,e)}}function mp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,i))return;ac.set(i),n.uniformMatrix2fv(this.addr,!1,ac),xt(t,i)}}function gp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,i))return;sc.set(i),n.uniformMatrix3fv(this.addr,!1,sc),xt(t,i)}}function _p(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,i))return;rc.set(i),n.uniformMatrix4fv(this.addr,!1,rc),xt(t,i)}}function xp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function vp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2iv(this.addr,e),xt(t,e)}}function Mp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3iv(this.addr,e),xt(t,e)}}function yp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4iv(this.addr,e),xt(t,e)}}function bp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Sp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2uiv(this.addr,e),xt(t,e)}}function Ep(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3uiv(this.addr,e),xt(t,e)}}function wp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4uiv(this.addr,e),xt(t,e)}}function Tp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(tc.compareFunction=sl,s=tc):s=vl,t.setTexture2D(e||s,r)}function Ap(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||yl,r)}function Cp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||bl,r)}function Rp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ml,r)}function Pp(n){switch(n){case 5126:return hp;case 35664:return fp;case 35665:return dp;case 35666:return pp;case 35674:return mp;case 35675:return gp;case 35676:return _p;case 5124:case 35670:return xp;case 35667:case 35671:return vp;case 35668:case 35672:return Mp;case 35669:case 35673:return yp;case 5125:return bp;case 36294:return Sp;case 36295:return Ep;case 36296:return wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Tp;case 35679:case 36299:case 36307:return Ap;case 35680:case 36300:case 36308:case 36293:return Cp;case 36289:case 36303:case 36311:case 36292:return Rp}}function Lp(n,e){n.uniform1fv(this.addr,e)}function Ip(n,e){const t=Li(e,this.size,2);n.uniform2fv(this.addr,t)}function Dp(n,e){const t=Li(e,this.size,3);n.uniform3fv(this.addr,t)}function Up(n,e){const t=Li(e,this.size,4);n.uniform4fv(this.addr,t)}function Np(n,e){const t=Li(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Fp(n,e){const t=Li(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Op(n,e){const t=Li(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zp(n,e){n.uniform1iv(this.addr,e)}function Bp(n,e){n.uniform2iv(this.addr,e)}function kp(n,e){n.uniform3iv(this.addr,e)}function Vp(n,e){n.uniform4iv(this.addr,e)}function Hp(n,e){n.uniform1uiv(this.addr,e)}function Gp(n,e){n.uniform2uiv(this.addr,e)}function Wp(n,e){n.uniform3uiv(this.addr,e)}function Xp(n,e){n.uniform4uiv(this.addr,e)}function Zp(n,e,t){const i=this.cache,r=e.length,s=rs(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||vl,s[a])}function Yp(n,e,t){const i=this.cache,r=e.length,s=rs(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||yl,s[a])}function qp(n,e,t){const i=this.cache,r=e.length,s=rs(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||bl,s[a])}function Jp(n,e,t){const i=this.cache,r=e.length,s=rs(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ml,s[a])}function Kp(n){switch(n){case 5126:return Lp;case 35664:return Ip;case 35665:return Dp;case 35666:return Up;case 35674:return Np;case 35675:return Fp;case 35676:return Op;case 5124:case 35670:return zp;case 35667:case 35671:return Bp;case 35668:case 35672:return kp;case 35669:case 35673:return Vp;case 5125:return Hp;case 36294:return Gp;case 36295:return Wp;case 36296:return Xp;case 35678:case 36198:case 36298:case 36306:case 35682:return Zp;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return Jp}}class $p{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Pp(t.type)}}class jp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kp(t.type)}}class Qp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const c=r[s];c.setValue(e,t[c.id],i)}}}const zs=/(\w+)(\])?(\[|\.)?/g;function oc(n,e){n.seq.push(e),n.map[e.id]=e}function em(n,e,t){const i=n.name,r=i.length;for(zs.lastIndex=0;;){const s=zs.exec(i),a=zs.lastIndex;let c=s[1];const o=s[2]==="]",l=s[3];if(o&&(c=c|0),l===void 0||l==="["&&a+2===r){oc(t,l===void 0?new $p(c,n,e):new jp(c,n,e));break}else{let h=t.map[c];h===void 0&&(h=new Qp(c),oc(t,h)),t=h}}}class Yr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);em(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const c=t[s],o=i[c.id];o.needsUpdate!==!1&&c.setValue(e,o.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function cc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const tm=37297;let nm=0;function im(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const c=a+1;i.push(`${c===e?">":" "} ${c}: ${t[a]}`)}return i.join(`
`)}const lc=new Ge;function rm(n){$e._getMatrix(lc,$e.workingColorSpace,n);const e=`mat3( ${lc.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(n)){case is:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function uc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+im(n.getShaderSource(e),a)}else return r}function sm(n,e){const t=rm(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function am(n,e){let t;switch(e){case au:t="Linear";break;case ou:t="Reinhard";break;case cu:t="Cineon";break;case lu:t="ACESFilmic";break;case hu:t="AgX";break;case fu:t="Neutral";break;case uu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rr=new P;function om(){$e.getLuminanceCoefficients(Rr);const n=Rr.x.toFixed(4),e=Rr.y.toFixed(4),t=Rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zi).join(`
`)}function lm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function um(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let c=1;s.type===n.FLOAT_MAT2&&(c=2),s.type===n.FLOAT_MAT3&&(c=3),s.type===n.FLOAT_MAT4&&(c=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:c}}return t}function Zi(n){return n!==""}function hc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hm=/^[ \t]*#include +<([\w\d./]+)>/gm;function za(n){return n.replace(hm,dm)}const fm=new Map;function dm(n,e){let t=Xe[e];if(t===void 0){const i=fm.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return za(t)}const pm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dc(n){return n.replace(pm,mm)}function mm(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Zc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Bl?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===hn&&(e="SHADOWMAP_TYPE_VSM"),e}function _m(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case yi:case bi:e="ENVMAP_TYPE_CUBE";break;case ns:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case bi:e="ENVMAP_MODE_REFRACTION";break}return e}function vm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Yc:e="ENVMAP_BLENDING_MULTIPLY";break;case ru:e="ENVMAP_BLENDING_MIX";break;case su:e="ENVMAP_BLENDING_ADD";break}return e}function Mm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function ym(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,c=t.fragmentShader;const o=gm(t),l=_m(t),u=xm(t),h=vm(t),f=Mm(t),d=cm(t),g=lm(s),_=r.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zi).join(`
`),p.length>0&&(p+=`
`)):(m=[pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),p=[pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Cn?am("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,sm("linearToOutputTexel",t.outputColorSpace),om(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zi).join(`
`)),a=za(a),a=hc(a,t),a=fc(a,t),c=za(c),c=hc(c,t),c=fc(c,t),a=dc(a),c=dc(c),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===To?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===To?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=E+m+a,x=E+p+c,D=cc(r,r.VERTEX_SHADER,v),A=cc(r,r.FRAGMENT_SHADER,x);r.attachShader(_,D),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(I){if(n.debug.checkShaderErrors){const V=r.getProgramInfoLog(_).trim(),z=r.getShaderInfoLog(D).trim(),H=r.getShaderInfoLog(A).trim();let J=!0,G=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,D,A);else{const Q=uc(r,D,"vertex"),W=uc(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+Q+`
`+W)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(z===""||H==="")&&(G=!1);G&&(I.diagnostics={runnable:J,programLog:V,vertexShader:{log:z,prefix:m},fragmentShader:{log:H,prefix:p}})}r.deleteShader(D),r.deleteShader(A),L=new Yr(r,_),w=um(r,_)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,tm)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=A,this}let bm=0;class Sm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Em(e),t.set(e,i)),i}}class Em{constructor(e){this.id=bm++,this.code=e,this.usedTimes=0}}function wm(n,e,t,i,r,s,a){const c=new ja,o=new Sm,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,y,I,V,z){const H=V.fog,J=z.geometry,G=w.isMeshStandardMaterial?V.environment:null,Q=(w.isMeshStandardMaterial?t:e).get(w.envMap||G),W=Q&&Q.mapping===ns?Q.image.height:null,ce=g[w.type];w.precision!==null&&(d=r.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const pe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,xe=pe!==void 0?pe.length:0;let De=0;J.morphAttributes.position!==void 0&&(De=1),J.morphAttributes.normal!==void 0&&(De=2),J.morphAttributes.color!==void 0&&(De=3);let Ze,Z,te,ve;if(ce){const it=jt[ce];Ze=it.vertexShader,Z=it.fragmentShader}else Ze=w.vertexShader,Z=w.fragmentShader,o.update(w),te=o.getVertexShaderID(w),ve=o.getFragmentShaderID(w);const ae=n.getRenderTarget(),Ie=n.state.buffers.depth.getReversed(),ze=z.isInstancedMesh===!0,Fe=z.isBatchedMesh===!0,Ke=!!w.map,$=!!w.matcap,ie=!!Q,C=!!w.aoMap,Re=!!w.lightMap,ee=!!w.bumpMap,be=!!w.normalMap,le=!!w.displacementMap,Ue=!!w.emissiveMap,Me=!!w.metalnessMap,T=!!w.roughnessMap,M=w.anisotropy>0,O=w.clearcoat>0,Y=w.dispersion>0,j=w.iridescence>0,q=w.sheen>0,we=w.transmission>0,fe=M&&!!w.anisotropyMap,ye=O&&!!w.clearcoatMap,qe=O&&!!w.clearcoatNormalMap,ne=O&&!!w.clearcoatRoughnessMap,Se=j&&!!w.iridescenceMap,Ne=j&&!!w.iridescenceThicknessMap,Oe=q&&!!w.sheenColorMap,Ee=q&&!!w.sheenRoughnessMap,Je=!!w.specularMap,We=!!w.specularColorMap,ct=!!w.specularIntensityMap,U=we&&!!w.transmissionMap,de=we&&!!w.thicknessMap,X=!!w.gradientMap,K=!!w.alphaMap,_e=w.alphaTest>0,me=!!w.alphaHash,Ve=!!w.extensions;let pt=Cn;w.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(pt=n.toneMapping);const St={shaderID:ce,shaderType:w.type,shaderName:w.name,vertexShader:Ze,fragmentShader:Z,defines:w.defines,customVertexShaderID:te,customFragmentShaderID:ve,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Fe,batchingColor:Fe&&z._colorsTexture!==null,instancing:ze,instancingColor:ze&&z.instanceColor!==null,instancingMorph:ze&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ai,alphaToCoverage:!!w.alphaToCoverage,map:Ke,matcap:$,envMap:ie,envMapMode:ie&&Q.mapping,envMapCubeUVHeight:W,aoMap:C,lightMap:Re,bumpMap:ee,normalMap:be,displacementMap:f&&le,emissiveMap:Ue,normalMapObjectSpace:be&&w.normalMapType===_u,normalMapTangentSpace:be&&w.normalMapType===rl,metalnessMap:Me,roughnessMap:T,anisotropy:M,anisotropyMap:fe,clearcoat:O,clearcoatMap:ye,clearcoatNormalMap:qe,clearcoatRoughnessMap:ne,dispersion:Y,iridescence:j,iridescenceMap:Se,iridescenceThicknessMap:Ne,sheen:q,sheenColorMap:Oe,sheenRoughnessMap:Ee,specularMap:Je,specularColorMap:We,specularIntensityMap:ct,transmission:we,transmissionMap:U,thicknessMap:de,gradientMap:X,opaque:w.transparent===!1&&w.blending===gi&&w.alphaToCoverage===!1,alphaMap:K,alphaTest:_e,alphaHash:me,combine:w.combine,mapUv:Ke&&_(w.map.channel),aoMapUv:C&&_(w.aoMap.channel),lightMapUv:Re&&_(w.lightMap.channel),bumpMapUv:ee&&_(w.bumpMap.channel),normalMapUv:be&&_(w.normalMap.channel),displacementMapUv:le&&_(w.displacementMap.channel),emissiveMapUv:Ue&&_(w.emissiveMap.channel),metalnessMapUv:Me&&_(w.metalnessMap.channel),roughnessMapUv:T&&_(w.roughnessMap.channel),anisotropyMapUv:fe&&_(w.anisotropyMap.channel),clearcoatMapUv:ye&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:qe&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&_(w.sheenRoughnessMap.channel),specularMapUv:Je&&_(w.specularMap.channel),specularColorMapUv:We&&_(w.specularColorMap.channel),specularIntensityMapUv:ct&&_(w.specularIntensityMap.channel),transmissionMapUv:U&&_(w.transmissionMap.channel),thicknessMapUv:de&&_(w.thicknessMap.channel),alphaMapUv:K&&_(w.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(be||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!J.attributes.uv&&(Ke||K),fog:!!H,useFog:w.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ie,skinning:z.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:De,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:pt,decodeVideoTexture:Ke&&w.map.isVideoTexture===!0&&$e.getTransfer(w.map.colorSpace)===st,decodeVideoTextureEmissive:Ue&&w.emissiveMap.isVideoTexture===!0&&$e.getTransfer(w.emissiveMap.colorSpace)===st,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===fn,flipSided:w.side===Rt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ve&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&w.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function p(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)y.push(I),y.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(E(y,w),v(y,w),y.push(n.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function E(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function v(w,y){c.disableAll(),y.supportsVertexTextures&&c.enable(0),y.instancing&&c.enable(1),y.instancingColor&&c.enable(2),y.instancingMorph&&c.enable(3),y.matcap&&c.enable(4),y.envMap&&c.enable(5),y.normalMapObjectSpace&&c.enable(6),y.normalMapTangentSpace&&c.enable(7),y.clearcoat&&c.enable(8),y.iridescence&&c.enable(9),y.alphaTest&&c.enable(10),y.vertexColors&&c.enable(11),y.vertexAlphas&&c.enable(12),y.vertexUv1s&&c.enable(13),y.vertexUv2s&&c.enable(14),y.vertexUv3s&&c.enable(15),y.vertexTangents&&c.enable(16),y.anisotropy&&c.enable(17),y.alphaHash&&c.enable(18),y.batching&&c.enable(19),y.dispersion&&c.enable(20),y.batchingColor&&c.enable(21),w.push(c.mask),c.disableAll(),y.fog&&c.enable(0),y.useFog&&c.enable(1),y.flatShading&&c.enable(2),y.logarithmicDepthBuffer&&c.enable(3),y.reverseDepthBuffer&&c.enable(4),y.skinning&&c.enable(5),y.morphTargets&&c.enable(6),y.morphNormals&&c.enable(7),y.morphColors&&c.enable(8),y.premultipliedAlpha&&c.enable(9),y.shadowMapEnabled&&c.enable(10),y.doubleSided&&c.enable(11),y.flipSided&&c.enable(12),y.useDepthPacking&&c.enable(13),y.dithering&&c.enable(14),y.transmission&&c.enable(15),y.sheen&&c.enable(16),y.opaque&&c.enable(17),y.pointsUvs&&c.enable(18),y.decodeVideoTexture&&c.enable(19),y.decodeVideoTextureEmissive&&c.enable(20),y.alphaToCoverage&&c.enable(21),w.push(c.mask)}function x(w){const y=g[w.type];let I;if(y){const V=jt[y];I=oh.clone(V.uniforms)}else I=w.uniforms;return I}function D(w,y){let I;for(let V=0,z=u.length;V<z;V++){const H=u[V];if(H.cacheKey===y){I=H,++I.usedTimes;break}}return I===void 0&&(I=new ym(n,y,w,s),u.push(I)),I}function A(w){if(--w.usedTimes===0){const y=u.indexOf(w);u[y]=u[u.length-1],u.pop(),w.destroy()}}function R(w){o.remove(w)}function L(){o.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:D,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:L}}function Tm(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let c=n.get(a);return c===void 0&&(c={},n.set(a,c)),c}function i(a){n.delete(a)}function r(a,c,o){n.get(a)[c]=o}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Am(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function mc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function gc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,f,d,g,_,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function c(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function o(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||Am),i.length>1&&i.sort(f||mc),r.length>1&&r.sort(f||mc)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:o,finish:u,sort:l}}function Cm(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new gc,n.set(i,[a])):r>=s.length?(a=new gc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Rm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new je};break;case"SpotLight":t={position:new P,direction:new P,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function Pm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Lm=0;function Im(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Dm(n){const e=new Rm,t=Pm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);const r=new P,s=new rt,a=new rt;function c(l){let u=0,h=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,E=0,v=0,x=0,D=0,A=0,R=0;l.sort(Im);for(let w=0,y=l.length;w<y;w++){const I=l[w],V=I.color,z=I.intensity,H=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=V.r*z,h+=V.g*z,f+=V.b*z;else if(I.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(I.sh.coefficients[G],z);R++}else if(I.isDirectionalLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Q=I.shadow,W=t.get(I);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,i.directionalShadow[d]=W,i.directionalShadowMap[d]=J,i.directionalShadowMatrix[d]=I.shadow.matrix,E++}i.directional[d]=G,d++}else if(I.isSpotLight){const G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(V).multiplyScalar(z),G.distance=H,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,i.spot[_]=G;const Q=I.shadow;if(I.map&&(i.spotLightMap[D]=I.map,D++,Q.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[_]=Q.matrix,I.castShadow){const W=t.get(I);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=J,x++}_++}else if(I.isRectAreaLight){const G=e.get(I);G.color.copy(V).multiplyScalar(z),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=G,m++}else if(I.isPointLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){const Q=I.shadow,W=t.get(I);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,W.shadowCameraNear=Q.camera.near,W.shadowCameraFar=Q.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=I.shadow.matrix,v++}i.point[g]=G,g++}else if(I.isHemisphereLight){const G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(z),G.groundColor.copy(I.groundColor).multiplyScalar(z),i.hemi[p]=G,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==E||L.numPointShadows!==v||L.numSpotShadows!==x||L.numSpotMaps!==D||L.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+D-A,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,L.directionalLength=d,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=E,L.numPointShadows=v,L.numSpotShadows=x,L.numSpotMaps=D,L.numLightProbes=R,i.version=Lm++)}function o(l,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const v=l[p];if(v.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(v.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:c,setupView:o,state:i}}function _c(n){const e=new Dm(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function c(){e.setup(t)}function o(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:c,setupLightsView:o,pushLight:s,pushShadow:a}}function Um(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let c;return a===void 0?(c=new _c(n),e.set(r,[c])):s>=a.length?(c=new _c(n),a.push(c)):c=a[s],c}function i(){e=new WeakMap}return{get:t,dispose:i}}class Nm extends Pi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fm extends Pi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Om=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Bm(n,e,t){let i=new Qa;const r=new oe,s=new oe,a=new ot,c=new Nm({depthPacking:gu}),o=new Fm,l={},u=t.maxTextureSize,h={[Rn]:Rt,[Rt]:Rn,[fn]:fn},f=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Om,fragmentShader:zm}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new ke;g.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Jt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zc;let p=this.type;this.render=function(A,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=n.getRenderTarget(),y=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),V=n.state;V.setBlending(An),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const z=p!==hn&&this.type===hn,H=p===hn&&this.type!==hn;for(let J=0,G=A.length;J<G;J++){const Q=A[J],W=Q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ce=W.getFrameExtents();if(r.multiply(ce),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ce.x),r.x=s.x*ce.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ce.y),r.y=s.y*ce.y,W.mapSize.y=s.y)),W.map===null||z===!0||H===!0){const xe=this.type!==hn?{minFilter:Ut,magFilter:Ut}:{};W.map!==null&&W.map.dispose(),W.map=new Zn(r.x,r.y,xe),W.map.texture.name=Q.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const pe=W.getViewportCount();for(let xe=0;xe<pe;xe++){const De=W.getViewport(xe);a.set(s.x*De.x,s.y*De.y,s.x*De.z,s.y*De.w),V.viewport(a),W.updateMatrices(Q,xe),i=W.getFrustum(),x(R,L,W.camera,Q,this.type)}W.isPointLightShadow!==!0&&this.type===hn&&E(W,L),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,y,I)};function E(A,R){const L=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Zn(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,L,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,L,d,_,null)}function v(A,R,L,w){let y=null;const I=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)y=I;else if(y=L.isPointLight===!0?o:c,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const V=y.uuid,z=R.uuid;let H=l[V];H===void 0&&(H={},l[V]=H);let J=H[z];J===void 0&&(J=y.clone(),H[z]=J,R.addEventListener("dispose",D)),y=J}if(y.visible=R.visible,y.wireframe=R.wireframe,w===hn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:h[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=n.properties.get(y);V.light=L}return y}function x(A,R,L,w,y){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===hn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const z=e.update(A),H=A.material;if(Array.isArray(H)){const J=z.groups;for(let G=0,Q=J.length;G<Q;G++){const W=J[G],ce=H[W.materialIndex];if(ce&&ce.visible){const pe=v(A,ce,w,y);A.onBeforeShadow(n,A,R,L,z,pe,W),n.renderBufferDirect(L,null,z,pe,A,W),A.onAfterShadow(n,A,R,L,z,pe,W)}}}else if(H.visible){const J=v(A,H,w,y);A.onBeforeShadow(n,A,R,L,z,J,null),n.renderBufferDirect(L,null,z,J,A,null),A.onAfterShadow(n,A,R,L,z,J,null)}}const V=A.children;for(let z=0,H=V.length;z<H;z++)x(V[z],R,L,w,y)}function D(A){A.target.removeEventListener("dispose",D);for(const L in l){const w=l[L],y=A.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}const km={[ea]:ta,[na]:sa,[ia]:aa,[Mi]:ra,[ta]:ea,[sa]:na,[aa]:ia,[ra]:Mi};function Vm(n,e){function t(){let U=!1;const de=new ot;let X=null;const K=new ot(0,0,0,0);return{setMask:function(_e){X!==_e&&!U&&(n.colorMask(_e,_e,_e,_e),X=_e)},setLocked:function(_e){U=_e},setClear:function(_e,me,Ve,pt,St){St===!0&&(_e*=pt,me*=pt,Ve*=pt),de.set(_e,me,Ve,pt),K.equals(de)===!1&&(n.clearColor(_e,me,Ve,pt),K.copy(de))},reset:function(){U=!1,X=null,K.set(-1,0,0,0)}}}function i(){let U=!1,de=!1,X=null,K=null,_e=null;return{setReversed:function(me){if(de!==me){const Ve=e.get("EXT_clip_control");de?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);const pt=_e;_e=null,this.setClear(pt)}de=me},getReversed:function(){return de},setTest:function(me){me?ae(n.DEPTH_TEST):Ie(n.DEPTH_TEST)},setMask:function(me){X!==me&&!U&&(n.depthMask(me),X=me)},setFunc:function(me){if(de&&(me=km[me]),K!==me){switch(me){case ea:n.depthFunc(n.NEVER);break;case ta:n.depthFunc(n.ALWAYS);break;case na:n.depthFunc(n.LESS);break;case Mi:n.depthFunc(n.LEQUAL);break;case ia:n.depthFunc(n.EQUAL);break;case ra:n.depthFunc(n.GEQUAL);break;case sa:n.depthFunc(n.GREATER);break;case aa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=me}},setLocked:function(me){U=me},setClear:function(me){_e!==me&&(de&&(me=1-me),n.clearDepth(me),_e=me)},reset:function(){U=!1,X=null,K=null,_e=null,de=!1}}}function r(){let U=!1,de=null,X=null,K=null,_e=null,me=null,Ve=null,pt=null,St=null;return{setTest:function(it){U||(it?ae(n.STENCIL_TEST):Ie(n.STENCIL_TEST))},setMask:function(it){de!==it&&!U&&(n.stencilMask(it),de=it)},setFunc:function(it,Gt,rn){(X!==it||K!==Gt||_e!==rn)&&(n.stencilFunc(it,Gt,rn),X=it,K=Gt,_e=rn)},setOp:function(it,Gt,rn){(me!==it||Ve!==Gt||pt!==rn)&&(n.stencilOp(it,Gt,rn),me=it,Ve=Gt,pt=rn)},setLocked:function(it){U=it},setClear:function(it){St!==it&&(n.clearStencil(it),St=it)},reset:function(){U=!1,de=null,X=null,K=null,_e=null,me=null,Ve=null,pt=null,St=null}}}const s=new t,a=new i,c=new r,o=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,v=null,x=null,D=null,A=null,R=new je(0,0,0),L=0,w=!1,y=null,I=null,V=null,z=null,H=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Q=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=Q>=2);let ce=null,pe={};const xe=n.getParameter(n.SCISSOR_BOX),De=n.getParameter(n.VIEWPORT),Ze=new ot().fromArray(xe),Z=new ot().fromArray(De);function te(U,de,X,K){const _e=new Uint8Array(4),me=n.createTexture();n.bindTexture(U,me),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<X;Ve++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(de+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return me}const ve={};ve[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),c.setClear(0),ae(n.DEPTH_TEST),a.setFunc(Mi),ee(!1),be(_o),ae(n.CULL_FACE),C(An);function ae(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function Ie(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function ze(U,de){return h[U]!==de?(n.bindFramebuffer(U,de),h[U]=de,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=de),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=de),!0):!1}function Fe(U,de){let X=d,K=!1;if(U){X=f.get(de),X===void 0&&(X=[],f.set(de,X));const _e=U.textures;if(X.length!==_e.length||X[0]!==n.COLOR_ATTACHMENT0){for(let me=0,Ve=_e.length;me<Ve;me++)X[me]=n.COLOR_ATTACHMENT0+me;X.length=_e.length,K=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,K=!0);K&&n.drawBuffers(X)}function Ke(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const $={[Vn]:n.FUNC_ADD,[Vl]:n.FUNC_SUBTRACT,[Hl]:n.FUNC_REVERSE_SUBTRACT};$[Gl]=n.MIN,$[Wl]=n.MAX;const ie={[Xl]:n.ZERO,[Zl]:n.ONE,[Yl]:n.SRC_COLOR,[js]:n.SRC_ALPHA,[Ql]:n.SRC_ALPHA_SATURATE,[$l]:n.DST_COLOR,[Jl]:n.DST_ALPHA,[ql]:n.ONE_MINUS_SRC_COLOR,[Qs]:n.ONE_MINUS_SRC_ALPHA,[jl]:n.ONE_MINUS_DST_COLOR,[Kl]:n.ONE_MINUS_DST_ALPHA,[eu]:n.CONSTANT_COLOR,[tu]:n.ONE_MINUS_CONSTANT_COLOR,[nu]:n.CONSTANT_ALPHA,[iu]:n.ONE_MINUS_CONSTANT_ALPHA};function C(U,de,X,K,_e,me,Ve,pt,St,it){if(U===An){_===!0&&(Ie(n.BLEND),_=!1);return}if(_===!1&&(ae(n.BLEND),_=!0),U!==kl){if(U!==m||it!==w){if((p!==Vn||x!==Vn)&&(n.blendEquation(n.FUNC_ADD),p=Vn,x=Vn),it)switch(U){case gi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xo:n.blendFunc(n.ONE,n.ONE);break;case vo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mo:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case gi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case vo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mo:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}E=null,v=null,D=null,A=null,R.set(0,0,0),L=0,m=U,w=it}return}_e=_e||de,me=me||X,Ve=Ve||K,(de!==p||_e!==x)&&(n.blendEquationSeparate($[de],$[_e]),p=de,x=_e),(X!==E||K!==v||me!==D||Ve!==A)&&(n.blendFuncSeparate(ie[X],ie[K],ie[me],ie[Ve]),E=X,v=K,D=me,A=Ve),(pt.equals(R)===!1||St!==L)&&(n.blendColor(pt.r,pt.g,pt.b,St),R.copy(pt),L=St),m=U,w=!1}function Re(U,de){U.side===fn?Ie(n.CULL_FACE):ae(n.CULL_FACE);let X=U.side===Rt;de&&(X=!X),ee(X),U.blending===gi&&U.transparent===!1?C(An):C(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const K=U.stencilWrite;c.setTest(K),K&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ue(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):Ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(U){y!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),y=U)}function be(U){U!==Ol?(ae(n.CULL_FACE),U!==I&&(U===_o?n.cullFace(n.BACK):U===zl?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ie(n.CULL_FACE),I=U}function le(U){U!==V&&(G&&n.lineWidth(U),V=U)}function Ue(U,de,X){U?(ae(n.POLYGON_OFFSET_FILL),(z!==de||H!==X)&&(n.polygonOffset(de,X),z=de,H=X)):Ie(n.POLYGON_OFFSET_FILL)}function Me(U){U?ae(n.SCISSOR_TEST):Ie(n.SCISSOR_TEST)}function T(U){U===void 0&&(U=n.TEXTURE0+J-1),ce!==U&&(n.activeTexture(U),ce=U)}function M(U,de,X){X===void 0&&(ce===null?X=n.TEXTURE0+J-1:X=ce);let K=pe[X];K===void 0&&(K={type:void 0,texture:void 0},pe[X]=K),(K.type!==U||K.texture!==de)&&(ce!==X&&(n.activeTexture(X),ce=X),n.bindTexture(U,de||ve[U]),K.type=U,K.texture=de)}function O(){const U=pe[ce];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qe(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(U){Ze.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Ze.copy(U))}function Ee(U){Z.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Z.copy(U))}function Je(U,de){let X=l.get(de);X===void 0&&(X=new WeakMap,l.set(de,X));let K=X.get(U);K===void 0&&(K=n.getUniformBlockIndex(de,U.name),X.set(U,K))}function We(U,de){const K=l.get(de).get(U);o.get(de)!==K&&(n.uniformBlockBinding(de,K,U.__bindingPointIndex),o.set(de,K))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ce=null,pe={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,v=null,x=null,D=null,A=null,R=new je(0,0,0),L=0,w=!1,y=null,I=null,V=null,z=null,H=null,Ze.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),c.reset()}return{buffers:{color:s,depth:a,stencil:c},enable:ae,disable:Ie,bindFramebuffer:ze,drawBuffers:Fe,useProgram:Ke,setBlending:C,setMaterial:Re,setFlipSided:ee,setCullFace:be,setLineWidth:le,setPolygonOffset:Ue,setScissorTest:Me,activeTexture:T,bindTexture:M,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:j,texImage2D:Se,texImage3D:Ne,updateUBOMapping:Je,uniformBlockBinding:We,texStorage2D:qe,texStorage3D:ne,texSubImage2D:q,texSubImage3D:we,compressedTexSubImage2D:fe,compressedTexSubImage3D:ye,scissor:Oe,viewport:Ee,reset:ct}}function xc(n,e,t,i){const r=Hm(i);switch(t){case jc:return n*e;case el:return n*e;case tl:return n*e*2;case Za:return n*e/r.components*r.byteLength;case Ya:return n*e/r.components*r.byteLength;case nl:return n*e*2/r.components*r.byteLength;case qa:return n*e*2/r.components*r.byteLength;case Qc:return n*e*3/r.components*r.byteLength;case qt:return n*e*4/r.components*r.byteLength;case Ja:return n*e*4/r.components*r.byteLength;case Hr:case Gr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wr:case Xr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fa:case pa:return Math.max(n,16)*Math.max(e,8)/4;case ha:case da:return Math.max(n,8)*Math.max(e,8)/2;case ma:case ga:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case va:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ma:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ya:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ba:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Sa:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case wa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ta:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ra:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Pa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case La:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Zr:case Ia:case Da:return Math.ceil(n/4)*Math.ceil(e/4)*16;case il:case Ua:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Na:case Fa:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hm(n){switch(n){case mn:case Jc:return{byteLength:1,components:1};case $i:case Kc:case ir:return{byteLength:2,components:1};case Wa:case Xa:return{byteLength:2,components:4};case Xn:case Ga:case en:return{byteLength:4,components:1};case $c:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Gm(n,e,t,i,r,s,a){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new oe,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return d?new OffscreenCanvas(T,M):Qi("canvas")}function _(T,M,O){let Y=1;const j=Me(T);if((j.width>O||j.height>O)&&(Y=O/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(Y*j.width),we=Math.floor(Y*j.height);h===void 0&&(h=g(q,we));const fe=M?g(q,we):h;return fe.width=q,fe.height=we,fe.getContext("2d").drawImage(T,0,0,q,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+we+")."),fe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(T,M,O,Y,j=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=M;if(M===n.RED&&(O===n.FLOAT&&(q=n.R32F),O===n.HALF_FLOAT&&(q=n.R16F),O===n.UNSIGNED_BYTE&&(q=n.R8)),M===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.R8UI),O===n.UNSIGNED_SHORT&&(q=n.R16UI),O===n.UNSIGNED_INT&&(q=n.R32UI),O===n.BYTE&&(q=n.R8I),O===n.SHORT&&(q=n.R16I),O===n.INT&&(q=n.R32I)),M===n.RG&&(O===n.FLOAT&&(q=n.RG32F),O===n.HALF_FLOAT&&(q=n.RG16F),O===n.UNSIGNED_BYTE&&(q=n.RG8)),M===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RG8UI),O===n.UNSIGNED_SHORT&&(q=n.RG16UI),O===n.UNSIGNED_INT&&(q=n.RG32UI),O===n.BYTE&&(q=n.RG8I),O===n.SHORT&&(q=n.RG16I),O===n.INT&&(q=n.RG32I)),M===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RGB8UI),O===n.UNSIGNED_SHORT&&(q=n.RGB16UI),O===n.UNSIGNED_INT&&(q=n.RGB32UI),O===n.BYTE&&(q=n.RGB8I),O===n.SHORT&&(q=n.RGB16I),O===n.INT&&(q=n.RGB32I)),M===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),O===n.UNSIGNED_INT&&(q=n.RGBA32UI),O===n.BYTE&&(q=n.RGBA8I),O===n.SHORT&&(q=n.RGBA16I),O===n.INT&&(q=n.RGBA32I)),M===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),M===n.RGBA){const we=j?is:$e.getTransfer(Y);O===n.FLOAT&&(q=n.RGBA32F),O===n.HALF_FLOAT&&(q=n.RGBA16F),O===n.UNSIGNED_BYTE&&(q=we===st?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(T,M){let O;return T?M===null||M===Xn||M===Si?O=n.DEPTH24_STENCIL8:M===en?O=n.DEPTH32F_STENCIL8:M===$i&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Xn||M===Si?O=n.DEPTH_COMPONENT24:M===en?O=n.DEPTH_COMPONENT32F:M===$i&&(O=n.DEPTH_COMPONENT16),O}function D(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ut&&T.minFilter!==Qt?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function A(T){const M=T.target;M.removeEventListener("dispose",A),L(M),M.isVideoTexture&&u.delete(M)}function R(T){const M=T.target;M.removeEventListener("dispose",R),y(M)}function L(T){const M=i.get(T);if(M.__webglInit===void 0)return;const O=T.source,Y=f.get(O);if(Y){const j=Y[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&w(T),Object.keys(Y).length===0&&f.delete(O)}i.remove(T)}function w(T){const M=i.get(T);n.deleteTexture(M.__webglTexture);const O=T.source,Y=f.get(O);delete Y[M.__cacheKey],a.memory.textures--}function y(T){const M=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let j=0;j<M.__webglFramebuffer[Y].length;j++)n.deleteFramebuffer(M.__webglFramebuffer[Y][j]);else n.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)n.deleteFramebuffer(M.__webglFramebuffer[Y]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=T.textures;for(let Y=0,j=O.length;Y<j;Y++){const q=i.get(O[Y]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(O[Y])}i.remove(T)}let I=0;function V(){I=0}function z(){const T=I;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),I+=1,T}function H(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function J(T,M){const O=i.get(T);if(T.isVideoTexture&&le(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(O,T,M);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+M)}function G(T,M){const O=i.get(T);if(T.version>0&&O.__version!==T.version){Z(O,T,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+M)}function Q(T,M){const O=i.get(T);if(T.version>0&&O.__version!==T.version){Z(O,T,M);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+M)}function W(T,M){const O=i.get(T);if(T.version>0&&O.__version!==T.version){te(O,T,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+M)}const ce={[la]:n.REPEAT,[Gn]:n.CLAMP_TO_EDGE,[ua]:n.MIRRORED_REPEAT},pe={[Ut]:n.NEAREST,[du]:n.NEAREST_MIPMAP_NEAREST,[lr]:n.NEAREST_MIPMAP_LINEAR,[Qt]:n.LINEAR,[hs]:n.LINEAR_MIPMAP_NEAREST,[Wn]:n.LINEAR_MIPMAP_LINEAR},xe={[xu]:n.NEVER,[Eu]:n.ALWAYS,[vu]:n.LESS,[sl]:n.LEQUAL,[Mu]:n.EQUAL,[Su]:n.GEQUAL,[yu]:n.GREATER,[bu]:n.NOTEQUAL};function De(T,M){if(M.type===en&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Qt||M.magFilter===hs||M.magFilter===lr||M.magFilter===Wn||M.minFilter===Qt||M.minFilter===hs||M.minFilter===lr||M.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,ce[M.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ce[M.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ce[M.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,pe[M.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,pe[M.minFilter]),M.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,xe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ut||M.minFilter!==lr&&M.minFilter!==Wn||M.type===en&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ze(T,M){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",A));const Y=M.source;let j=f.get(Y);j===void 0&&(j={},f.set(Y,j));const q=H(M);if(q!==T.__cacheKey){j[q]===void 0&&(j[q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),j[q].usedTimes++;const we=j[T.__cacheKey];we!==void 0&&(j[T.__cacheKey].usedTimes--,we.usedTimes===0&&w(M)),T.__cacheKey=q,T.__webglTexture=j[q].texture}return O}function Z(T,M,O){let Y=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=n.TEXTURE_3D);const j=Ze(T,M),q=M.source;t.bindTexture(Y,T.__webglTexture,n.TEXTURE0+O);const we=i.get(q);if(q.version!==we.__version||j===!0){t.activeTexture(n.TEXTURE0+O);const fe=$e.getPrimaries($e.workingColorSpace),ye=M.colorSpace===Tn?null:$e.getPrimaries(M.colorSpace),qe=M.colorSpace===Tn||fe===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let ne=_(M.image,!1,r.maxTextureSize);ne=Ue(M,ne);const Se=s.convert(M.format,M.colorSpace),Ne=s.convert(M.type);let Oe=v(M.internalFormat,Se,Ne,M.colorSpace,M.isVideoTexture);De(Y,M);let Ee;const Je=M.mipmaps,We=M.isVideoTexture!==!0,ct=we.__version===void 0||j===!0,U=q.dataReady,de=D(M,ne);if(M.isDepthTexture)Oe=x(M.format===Ei,M.type),ct&&(We?t.texStorage2D(n.TEXTURE_2D,1,Oe,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Oe,ne.width,ne.height,0,Se,Ne,null));else if(M.isDataTexture)if(Je.length>0){We&&ct&&t.texStorage2D(n.TEXTURE_2D,de,Oe,Je[0].width,Je[0].height);for(let X=0,K=Je.length;X<K;X++)Ee=Je[X],We?U&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,Ee.width,Ee.height,Se,Ne,Ee.data):t.texImage2D(n.TEXTURE_2D,X,Oe,Ee.width,Ee.height,0,Se,Ne,Ee.data);M.generateMipmaps=!1}else We?(ct&&t.texStorage2D(n.TEXTURE_2D,de,Oe,ne.width,ne.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,Se,Ne,ne.data)):t.texImage2D(n.TEXTURE_2D,0,Oe,ne.width,ne.height,0,Se,Ne,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Oe,Je[0].width,Je[0].height,ne.depth);for(let X=0,K=Je.length;X<K;X++)if(Ee=Je[X],M.format!==qt)if(Se!==null)if(We){if(U)if(M.layerUpdates.size>0){const _e=xc(Ee.width,Ee.height,M.format,M.type);for(const me of M.layerUpdates){const Ve=Ee.data.subarray(me*_e/Ee.data.BYTES_PER_ELEMENT,(me+1)*_e/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,me,Ee.width,Ee.height,1,Se,Ve)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,Ee.width,Ee.height,ne.depth,Se,Ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Oe,Ee.width,Ee.height,ne.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,Ee.width,Ee.height,ne.depth,Se,Ne,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,Oe,Ee.width,Ee.height,ne.depth,0,Se,Ne,Ee.data)}else{We&&ct&&t.texStorage2D(n.TEXTURE_2D,de,Oe,Je[0].width,Je[0].height);for(let X=0,K=Je.length;X<K;X++)Ee=Je[X],M.format!==qt?Se!==null?We?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,Ee.width,Ee.height,Se,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,X,Oe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?U&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,Ee.width,Ee.height,Se,Ne,Ee.data):t.texImage2D(n.TEXTURE_2D,X,Oe,Ee.width,Ee.height,0,Se,Ne,Ee.data)}else if(M.isDataArrayTexture)if(We){if(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Oe,ne.width,ne.height,ne.depth),U)if(M.layerUpdates.size>0){const X=xc(ne.width,ne.height,M.format,M.type);for(const K of M.layerUpdates){const _e=ne.data.subarray(K*X/ne.data.BYTES_PER_ELEMENT,(K+1)*X/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,ne.width,ne.height,1,Se,Ne,_e)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Se,Ne,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,ne.width,ne.height,ne.depth,0,Se,Ne,ne.data);else if(M.isData3DTexture)We?(ct&&t.texStorage3D(n.TEXTURE_3D,de,Oe,ne.width,ne.height,ne.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Se,Ne,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,ne.width,ne.height,ne.depth,0,Se,Ne,ne.data);else if(M.isFramebufferTexture){if(ct)if(We)t.texStorage2D(n.TEXTURE_2D,de,Oe,ne.width,ne.height);else{let X=ne.width,K=ne.height;for(let _e=0;_e<de;_e++)t.texImage2D(n.TEXTURE_2D,_e,Oe,X,K,0,Se,Ne,null),X>>=1,K>>=1}}else if(Je.length>0){if(We&&ct){const X=Me(Je[0]);t.texStorage2D(n.TEXTURE_2D,de,Oe,X.width,X.height)}for(let X=0,K=Je.length;X<K;X++)Ee=Je[X],We?U&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,Se,Ne,Ee):t.texImage2D(n.TEXTURE_2D,X,Oe,Se,Ne,Ee);M.generateMipmaps=!1}else if(We){if(ct){const X=Me(ne);t.texStorage2D(n.TEXTURE_2D,de,Oe,X.width,X.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Ne,ne)}else t.texImage2D(n.TEXTURE_2D,0,Oe,Se,Ne,ne);m(M)&&p(Y),we.__version=q.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function te(T,M,O){if(M.image.length!==6)return;const Y=Ze(T,M),j=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+O);const q=i.get(j);if(j.version!==q.__version||Y===!0){t.activeTexture(n.TEXTURE0+O);const we=$e.getPrimaries($e.workingColorSpace),fe=M.colorSpace===Tn?null:$e.getPrimaries(M.colorSpace),ye=M.colorSpace===Tn||we===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const qe=M.isCompressedTexture||M.image[0].isCompressedTexture,ne=M.image[0]&&M.image[0].isDataTexture,Se=[];for(let K=0;K<6;K++)!qe&&!ne?Se[K]=_(M.image[K],!0,r.maxCubemapSize):Se[K]=ne?M.image[K].image:M.image[K],Se[K]=Ue(M,Se[K]);const Ne=Se[0],Oe=s.convert(M.format,M.colorSpace),Ee=s.convert(M.type),Je=v(M.internalFormat,Oe,Ee,M.colorSpace),We=M.isVideoTexture!==!0,ct=q.__version===void 0||Y===!0,U=j.dataReady;let de=D(M,Ne);De(n.TEXTURE_CUBE_MAP,M);let X;if(qe){We&&ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Je,Ne.width,Ne.height);for(let K=0;K<6;K++){X=Se[K].mipmaps;for(let _e=0;_e<X.length;_e++){const me=X[_e];M.format!==qt?Oe!==null?We?U&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,0,0,me.width,me.height,Oe,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,Je,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,0,0,me.width,me.height,Oe,Ee,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,Je,me.width,me.height,0,Oe,Ee,me.data)}}}else{if(X=M.mipmaps,We&&ct){X.length>0&&de++;const K=Me(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Je,K.width,K.height)}for(let K=0;K<6;K++)if(ne){We?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Se[K].width,Se[K].height,Oe,Ee,Se[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Je,Se[K].width,Se[K].height,0,Oe,Ee,Se[K].data);for(let _e=0;_e<X.length;_e++){const Ve=X[_e].image[K].image;We?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,0,0,Ve.width,Ve.height,Oe,Ee,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,Je,Ve.width,Ve.height,0,Oe,Ee,Ve.data)}}else{We?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Oe,Ee,Se[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Je,Oe,Ee,Se[K]);for(let _e=0;_e<X.length;_e++){const me=X[_e];We?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,0,0,Oe,Ee,me.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,Je,Oe,Ee,me.image[K])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),q.__version=j.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ve(T,M,O,Y,j,q){const we=s.convert(O.format,O.colorSpace),fe=s.convert(O.type),ye=v(O.internalFormat,we,fe,O.colorSpace),qe=i.get(M),ne=i.get(O);if(ne.__renderTarget=M,!qe.__hasExternalTextures){const Se=Math.max(1,M.width>>q),Ne=Math.max(1,M.height>>q);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,q,ye,Se,Ne,M.depth,0,we,fe,null):t.texImage2D(j,q,ye,Se,Ne,0,we,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),be(M)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,j,ne.__webglTexture,0,ee(M)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,j,ne.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(T,M,O){if(n.bindRenderbuffer(n.RENDERBUFFER,T),M.depthBuffer){const Y=M.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,q=x(M.stencilBuffer,j),we=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=ee(M);be(M)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,q,M.width,M.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,q,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,q,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,T)}else{const Y=M.textures;for(let j=0;j<Y.length;j++){const q=Y[j],we=s.convert(q.format,q.colorSpace),fe=s.convert(q.type),ye=v(q.internalFormat,we,fe,q.colorSpace),qe=ee(M);O&&be(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,ye,M.width,M.height):be(M)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe,ye,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ye,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(M.depthTexture);Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J(M.depthTexture,0);const j=Y.__webglTexture,q=ee(M);if(M.depthTexture.format===_i)be(M)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(M.depthTexture.format===Ei)be(M)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function ze(T){const M=i.get(T),O=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=Y}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ie(M.__webglFramebuffer,T)}else if(O){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=n.createRenderbuffer(),ae(M.__webglDepthbuffer[Y],T,!1);else{const j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),ae(M.__webglDepthbuffer,T,!1);else{const Y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,j)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(T,M,O){const Y=i.get(T);M!==void 0&&ve(Y.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&ze(T)}function Ke(T){const M=T.texture,O=i.get(T),Y=i.get(M);T.addEventListener("dispose",R);const j=T.textures,q=T.isWebGLCubeRenderTarget===!0,we=j.length>1;if(we||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=M.version,a.memory.textures++),q){O.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[fe]=[];for(let ye=0;ye<M.mipmaps.length;ye++)O.__webglFramebuffer[fe][ye]=n.createFramebuffer()}else O.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)O.__webglFramebuffer[fe]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(we)for(let fe=0,ye=j.length;fe<ye;fe++){const qe=i.get(j[fe]);qe.__webglTexture===void 0&&(qe.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&be(T)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let fe=0;fe<j.length;fe++){const ye=j[fe];O.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[fe]);const qe=s.convert(ye.format,ye.colorSpace),ne=s.convert(ye.type),Se=v(ye.internalFormat,qe,ne,ye.colorSpace,T.isXRRenderTarget===!0),Ne=ee(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Se,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,O.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),De(n.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)ve(O.__webglFramebuffer[fe][ye],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ye);else ve(O.__webglFramebuffer[fe],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let fe=0,ye=j.length;fe<ye;fe++){const qe=j[fe],ne=i.get(qe);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),De(n.TEXTURE_2D,qe),ve(O.__webglFramebuffer,T,qe,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),m(qe)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(fe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,Y.__webglTexture),De(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)ve(O.__webglFramebuffer[ye],T,M,n.COLOR_ATTACHMENT0,fe,ye);else ve(O.__webglFramebuffer,T,M,n.COLOR_ATTACHMENT0,fe,0);m(M)&&p(fe),t.unbindTexture()}T.depthBuffer&&ze(T)}function $(T){const M=T.textures;for(let O=0,Y=M.length;O<Y;O++){const j=M[O];if(m(j)){const q=E(T),we=i.get(j).__webglTexture;t.bindTexture(q,we),p(q),t.unbindTexture()}}}const ie=[],C=[];function Re(T){if(T.samples>0){if(be(T)===!1){const M=T.textures,O=T.width,Y=T.height;let j=n.COLOR_BUFFER_BIT;const q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(T),fe=M.length>1;if(fe)for(let ye=0;ye<M.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ye=0;ye<M.length;ye++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[ye]);const qe=i.get(M[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qe,0)}n.blitFramebuffer(0,0,O,Y,0,0,O,Y,j,n.NEAREST),o===!0&&(ie.length=0,C.length=0,ie.push(n.COLOR_ATTACHMENT0+ye),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ie.push(q),C.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let ye=0;ye<M.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,we.__webglColorRenderbuffer[ye]);const qe=i.get(M[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&o){const M=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function ee(T){return Math.min(r.maxSamples,T.samples)}function be(T){const M=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function le(T){const M=a.render.frame;u.get(T)!==M&&(u.set(T,M),T.update())}function Ue(T,M){const O=T.colorSpace,Y=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Ai&&O!==Tn&&($e.getTransfer(O)===st?(Y!==qt||j!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function Me(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=V,this.setTexture2D=J,this.setTexture2DArray=G,this.setTexture3D=Q,this.setTextureCube=W,this.rebindTextures=Fe,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=be}function Wm(n,e){function t(i,r=Tn){let s;const a=$e.getTransfer(r);if(i===mn)return n.UNSIGNED_BYTE;if(i===Wa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$c)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jc)return n.BYTE;if(i===Kc)return n.SHORT;if(i===$i)return n.UNSIGNED_SHORT;if(i===Ga)return n.INT;if(i===Xn)return n.UNSIGNED_INT;if(i===en)return n.FLOAT;if(i===ir)return n.HALF_FLOAT;if(i===jc)return n.ALPHA;if(i===Qc)return n.RGB;if(i===qt)return n.RGBA;if(i===el)return n.LUMINANCE;if(i===tl)return n.LUMINANCE_ALPHA;if(i===_i)return n.DEPTH_COMPONENT;if(i===Ei)return n.DEPTH_STENCIL;if(i===Za)return n.RED;if(i===Ya)return n.RED_INTEGER;if(i===nl)return n.RG;if(i===qa)return n.RG_INTEGER;if(i===Ja)return n.RGBA_INTEGER;if(i===Hr||i===Gr||i===Wr||i===Xr)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Hr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Hr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ha||i===fa||i===da||i===pa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ha)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===da)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ma||i===ga||i===_a)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ma||i===ga)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===_a)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xa||i===va||i===Ma||i===ya||i===ba||i===Sa||i===Ea||i===wa||i===Ta||i===Aa||i===Ca||i===Ra||i===Pa||i===La)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===xa)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===va)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ma)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ya)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ba)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sa)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ea)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wa)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ta)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Aa)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ca)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ra)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pa)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===La)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zr||i===Ia||i===Da)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Zr)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ia)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Da)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===il||i===Ua||i===Na||i===Fa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Zr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ua)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Na)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Si?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Xm extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pr extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zm={type:"move"};class Bs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const c=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Zm)))}return c!==null&&(c.visible=r!==null),o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Pr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Ym=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Jm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Mt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new gn({vertexShader:Ym,fragmentShader:qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Jt(new rr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Km extends qn{constructor(e,t){super();const i=this;let r=null,s=1,a=null,c="local-floor",o=1,l=null,u=null,h=null,f=null,d=null,g=null;const _=new Jm,m=t.getContextAttributes();let p=null,E=null;const v=[],x=[],D=new oe;let A=null;const R=new kt;R.viewport=new ot;const L=new kt;L.viewport=new ot;const w=[R,L],y=new Xm;let I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let te=v[Z];return te===void 0&&(te=new Bs,v[Z]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Z){let te=v[Z];return te===void 0&&(te=new Bs,v[Z]=te),te.getGripSpace()},this.getHand=function(Z){let te=v[Z];return te===void 0&&(te=new Bs,v[Z]=te),te.getHandSpace()};function z(Z){const te=x.indexOf(Z.inputSource);if(te===-1)return;const ve=v[te];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,l||a),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",J);for(let Z=0;Z<v.length;Z++){const te=x[Z];te!==null&&(x[Z]=null,v[Z].disconnect(te))}I=null,V=null,_.reset(),e.setRenderTarget(p),d=null,f=null,h=null,r=null,E=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){c=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",H),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(D),r.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new Zn(d.framebufferWidth,d.framebufferHeight,{format:qt,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,ve=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?Ei:_i,ve=m.stencil?Si:Xn);const Ie={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Ie),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Zn(f.textureWidth,f.textureHeight,{format:qt,type:mn,depthTexture:new xl(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(o),l=null,a=await r.requestReferenceSpace(c),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(Z){for(let te=0;te<Z.removed.length;te++){const ve=Z.removed[te],ae=x.indexOf(ve);ae>=0&&(x[ae]=null,v[ae].disconnect(ve))}for(let te=0;te<Z.added.length;te++){const ve=Z.added[te];let ae=x.indexOf(ve);if(ae===-1){for(let ze=0;ze<v.length;ze++)if(ze>=x.length){x.push(ve),ae=ze;break}else if(x[ze]===null){x[ze]=ve,ae=ze;break}if(ae===-1)break}const Ie=v[ae];Ie&&Ie.connect(ve)}}const G=new P,Q=new P;function W(Z,te,ve){G.setFromMatrixPosition(te.matrixWorld),Q.setFromMatrixPosition(ve.matrixWorld);const ae=G.distanceTo(Q),Ie=te.projectionMatrix.elements,ze=ve.projectionMatrix.elements,Fe=Ie[14]/(Ie[10]-1),Ke=Ie[14]/(Ie[10]+1),$=(Ie[9]+1)/Ie[5],ie=(Ie[9]-1)/Ie[5],C=(Ie[8]-1)/Ie[0],Re=(ze[8]+1)/ze[0],ee=Fe*C,be=Fe*Re,le=ae/(-C+Re),Ue=le*-C;if(te.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ue),Z.translateZ(le),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ie[10]===-1)Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Me=Fe+le,T=Ke+le,M=ee-Ue,O=be+(ae-Ue),Y=$*Ke/T*Me,j=ie*Ke/T*Me;Z.projectionMatrix.makePerspective(M,O,Y,j,Me,T),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ce(Z,te){te===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(te.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let te=Z.near,ve=Z.far;_.texture!==null&&(_.depthNear>0&&(te=_.depthNear),_.depthFar>0&&(ve=_.depthFar)),y.near=L.near=R.near=te,y.far=L.far=R.far=ve,(I!==y.near||V!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),I=y.near,V=y.far),R.layers.mask=Z.layers.mask|2,L.layers.mask=Z.layers.mask|4,y.layers.mask=R.layers.mask|L.layers.mask;const ae=Z.parent,Ie=y.cameras;ce(y,ae);for(let ze=0;ze<Ie.length;ze++)ce(Ie[ze],ae);Ie.length===2?W(y,R,L):y.projectionMatrix.copy(R.projectionMatrix),pe(Z,y,ae)};function pe(Z,te,ve){ve===null?Z.matrix.copy(te.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(te.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ji*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return o},this.setFoveation=function(Z){o=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let xe=null;function De(Z,te){if(u=te.getViewerPose(l||a),g=te,u!==null){const ve=u.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let ae=!1;ve.length!==y.cameras.length&&(y.cameras.length=0,ae=!0);for(let ze=0;ze<ve.length;ze++){const Fe=ve[ze];let Ke=null;if(d!==null)Ke=d.getViewport(Fe);else{const ie=h.getViewSubImage(f,Fe);Ke=ie.viewport,ze===0&&(e.setRenderTargetTextures(E,ie.colorTexture,f.ignoreDepthValues?void 0:ie.depthStencilTexture),e.setRenderTarget(E))}let $=w[ze];$===void 0&&($=new kt,$.layers.enable(ze),$.viewport=new ot,w[ze]=$),$.matrix.fromArray(Fe.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(Fe.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),ze===0&&(y.matrix.copy($.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ae===!0&&y.cameras.push($)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const ze=h.getDepthInformation(ve[0]);ze&&ze.isValid&&ze.texture&&_.init(e,ze,r.renderState)}}for(let ve=0;ve<v.length;ve++){const ae=x[ve],Ie=v[ve];ae!==null&&Ie!==void 0&&Ie.update(ae,te,l||a)}xe&&xe(Z,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const Ze=new gl;Ze.setAnimationLoop(De),this.setAnimationLoop=function(Z){xe=Z},this.dispose=function(){}}}const On=new tn,$m=new rt;function jm(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,dl(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,E,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&c(m,p)):p.isPointsMaterial?o(m,p,E,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Rt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Rt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),v=E.envMap,x=E.envMapRotation;v&&(m.envMap.value=v,On.copy(x),On.x*=-1,On.y*=-1,On.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),m.envMapRotation.value.setFromMatrix4($m.makeRotationFromEuler(On)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function c(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,E,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Qm(n,e,t,i){let r={},s={},a=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function o(E,v){const x=v.program;i.uniformBlockBinding(E,x)}function l(E,v){let x=r[E.id];x===void 0&&(g(E),x=u(E),r[E.id]=x,E.addEventListener("dispose",m));const D=v.program;i.updateUBOMapping(E,D);const A=e.render.frame;s[E.id]!==A&&(f(E),s[E.id]=A)}function u(E){const v=h();E.__bindingPointIndex=v;const x=n.createBuffer(),D=E.__size,A=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,D,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,x),x}function h(){for(let E=0;E<c;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const v=r[E.id],x=E.uniforms,D=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let A=0,R=x.length;A<R;A++){const L=Array.isArray(x[A])?x[A]:[x[A]];for(let w=0,y=L.length;w<y;w++){const I=L[w];if(d(I,A,w,D)===!0){const V=I.__offset,z=Array.isArray(I.value)?I.value:[I.value];let H=0;for(let J=0;J<z.length;J++){const G=z[J],Q=_(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,V+H,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,H),H+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(E,v,x,D){const A=E.value,R=v+"_"+x;if(D[R]===void 0)return typeof A=="number"||typeof A=="boolean"?D[R]=A:D[R]=A.clone(),!0;{const L=D[R];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return D[R]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(E){const v=E.uniforms;let x=0;const D=16;for(let R=0,L=v.length;R<L;R++){const w=Array.isArray(v[R])?v[R]:[v[R]];for(let y=0,I=w.length;y<I;y++){const V=w[y],z=Array.isArray(V.value)?V.value:[V.value];for(let H=0,J=z.length;H<J;H++){const G=z[H],Q=_(G),W=x%D,ce=W%Q.boundary,pe=W+ce;x+=ce,pe!==0&&D-pe<Q.storage&&(x+=D-pe),V.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=Q.storage}}}const A=x%D;return A>0&&(x+=D-A),E.__size=x,E.__cache={},this}function _(E){const v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function m(E){const v=E.target;v.removeEventListener("dispose",m);const x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:o,update:l,dispose:p}}class Zv{constructor(e={}){const{canvas:t=Vu(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:c=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bt,this.toneMapping=Cn,this.toneMappingExposure=1;const x=this;let D=!1,A=0,R=0,L=null,w=-1,y=null;const I=new ot,V=new ot;let z=null;const H=new je(0);let J=0,G=t.width,Q=t.height,W=1,ce=null,pe=null;const xe=new ot(0,0,G,Q),De=new ot(0,0,G,Q);let Ze=!1;const Z=new Qa;let te=!1,ve=!1;const ae=new rt,Ie=new rt,ze=new P,Fe=new ot,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $=!1;function ie(){return L===null?W:1}let C=i;function Re(b,N){return t.getContext(b,N)}try{const b={alpha:!0,depth:r,stencil:s,antialias:c,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ha}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",me,!1),C===null){const N="webgl2";if(C=Re(N,b),C===null)throw Re(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ee,be,le,Ue,Me,T,M,O,Y,j,q,we,fe,ye,qe,ne,Se,Ne,Oe,Ee,Je,We,ct,U;function de(){ee=new sp(C),ee.init(),We=new Wm(C,ee),be=new Qd(C,ee,e,We),le=new Vm(C,ee),be.reverseDepthBuffer&&f&&le.buffers.depth.setReversed(!0),Ue=new cp(C),Me=new Tm,T=new Gm(C,ee,le,Me,be,We,Ue),M=new tp(x),O=new rp(x),Y=new ph(C),ct=new $d(C,Y),j=new ap(C,Y,Ue,ct),q=new up(C,j,Y,Ue),Oe=new lp(C,be,T),ne=new ep(Me),we=new wm(x,M,O,ee,be,ct,ne),fe=new jm(x,Me),ye=new Cm,qe=new Um(ee),Ne=new Kd(x,M,O,le,q,d,o),Se=new Bm(x,q,be),U=new Qm(C,Ue,be,le),Ee=new jd(C,ee,Ue),Je=new op(C,ee,Ue),Ue.programs=we.programs,x.capabilities=be,x.extensions=ee,x.properties=Me,x.renderLists=ye,x.shadowMap=Se,x.state=le,x.info=Ue}de();const X=new Km(x,C);this.xr=X,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const b=ee.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ee.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(G,Q,!1))},this.getSize=function(b){return b.set(G,Q)},this.setSize=function(b,N,B=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=b,Q=N,t.width=Math.floor(b*W),t.height=Math.floor(N*W),B===!0&&(t.style.width=b+"px",t.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(G*W,Q*W).floor()},this.setDrawingBufferSize=function(b,N,B){G=b,Q=N,W=B,t.width=Math.floor(b*B),t.height=Math.floor(N*B),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(I)},this.getViewport=function(b){return b.copy(xe)},this.setViewport=function(b,N,B,k){b.isVector4?xe.set(b.x,b.y,b.z,b.w):xe.set(b,N,B,k),le.viewport(I.copy(xe).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy(De)},this.setScissor=function(b,N,B,k){b.isVector4?De.set(b.x,b.y,b.z,b.w):De.set(b,N,B,k),le.scissor(V.copy(De).multiplyScalar(W).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(b){le.setScissorTest(Ze=b)},this.setOpaqueSort=function(b){ce=b},this.setTransparentSort=function(b){pe=b},this.getClearColor=function(b){return b.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(b=!0,N=!0,B=!0){let k=0;if(b){let F=!1;if(L!==null){const re=L.texture.format;F=re===Ja||re===qa||re===Ya}if(F){const re=L.texture.type,ge=re===mn||re===Xn||re===$i||re===Si||re===Wa||re===Xa,Te=Ne.getClearColor(),Ae=Ne.getClearAlpha(),Be=Te.r,He=Te.g,Ce=Te.b;ge?(g[0]=Be,g[1]=He,g[2]=Ce,g[3]=Ae,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=Be,_[1]=He,_[2]=Ce,_[3]=Ae,C.clearBufferiv(C.COLOR,0,_))}else k|=C.COLOR_BUFFER_BIT}N&&(k|=C.DEPTH_BUFFER_BIT),B&&(k|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",me,!1),ye.dispose(),qe.dispose(),Me.dispose(),M.dispose(),O.dispose(),q.dispose(),ct.dispose(),U.dispose(),we.dispose(),X.dispose(),X.removeEventListener("sessionstart",co),X.removeEventListener("sessionend",lo),Ln.stop()};function K(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const b=Ue.autoReset,N=Se.enabled,B=Se.autoUpdate,k=Se.needsUpdate,F=Se.type;de(),Ue.autoReset=b,Se.enabled=N,Se.autoUpdate=B,Se.needsUpdate=k,Se.type=F}function me(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ve(b){const N=b.target;N.removeEventListener("dispose",Ve),pt(N)}function pt(b){St(b),Me.remove(b)}function St(b){const N=Me.get(b).programs;N!==void 0&&(N.forEach(function(B){we.releaseProgram(B)}),b.isShaderMaterial&&we.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,B,k,F,re){N===null&&(N=Ke);const ge=F.isMesh&&F.matrixWorld.determinant()<0,Te=Ul(b,N,B,k,F);le.setMaterial(k,ge);let Ae=B.index,Be=1;if(k.wireframe===!0){if(Ae=j.getWireframeAttribute(B),Ae===void 0)return;Be=2}const He=B.drawRange,Ce=B.attributes.position;let Qe=He.start*Be,lt=(He.start+He.count)*Be;re!==null&&(Qe=Math.max(Qe,re.start*Be),lt=Math.min(lt,(re.start+re.count)*Be)),Ae!==null?(Qe=Math.max(Qe,0),lt=Math.min(lt,Ae.count)):Ce!=null&&(Qe=Math.max(Qe,0),lt=Math.min(lt,Ce.count));const ht=lt-Qe;if(ht<0||ht===1/0)return;ct.setup(F,k,Te,B,Ae);let Ct,tt=Ee;if(Ae!==null&&(Ct=Y.get(Ae),tt=Je,tt.setIndex(Ct)),F.isMesh)k.wireframe===!0?(le.setLineWidth(k.wireframeLinewidth*ie()),tt.setMode(C.LINES)):tt.setMode(C.TRIANGLES);else if(F.isLine){let Pe=k.linewidth;Pe===void 0&&(Pe=1),le.setLineWidth(Pe*ie()),F.isLineSegments?tt.setMode(C.LINES):F.isLineLoop?tt.setMode(C.LINE_LOOP):tt.setMode(C.LINE_STRIP)}else F.isPoints?tt.setMode(C.POINTS):F.isSprite&&tt.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)tt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))tt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Pe=F._multiDrawStarts,sn=F._multiDrawCounts,nt=F._multiDrawCount,Wt=Ae?Y.get(Ae).bytesPerElement:1,$n=Me.get(k).currentProgram.getUniforms();for(let Lt=0;Lt<nt;Lt++)$n.setValue(C,"_gl_DrawID",Lt),tt.render(Pe[Lt]/Wt,sn[Lt])}else if(F.isInstancedMesh)tt.renderInstances(Qe,ht,F.count);else if(B.isInstancedBufferGeometry){const Pe=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,sn=Math.min(B.instanceCount,Pe);tt.renderInstances(Qe,ht,sn)}else tt.render(Qe,ht)};function it(b,N,B){b.transparent===!0&&b.side===fn&&b.forceSinglePass===!1?(b.side=Rt,b.needsUpdate=!0,cr(b,N,B),b.side=Rn,b.needsUpdate=!0,cr(b,N,B),b.side=fn):cr(b,N,B)}this.compile=function(b,N,B=null){B===null&&(B=b),p=qe.get(B),p.init(N),v.push(p),B.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),b!==B&&b.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const k=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const re=F.material;if(re)if(Array.isArray(re))for(let ge=0;ge<re.length;ge++){const Te=re[ge];it(Te,B,F),k.add(Te)}else it(re,B,F),k.add(re)}),v.pop(),p=null,k},this.compileAsync=function(b,N,B=null){const k=this.compile(b,N,B);return new Promise(F=>{function re(){if(k.forEach(function(ge){Me.get(ge).currentProgram.isReady()&&k.delete(ge)}),k.size===0){F(b);return}setTimeout(re,10)}ee.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Gt=null;function rn(b){Gt&&Gt(b)}function co(){Ln.stop()}function lo(){Ln.start()}const Ln=new gl;Ln.setAnimationLoop(rn),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(b){Gt=b,X.setAnimationLoop(b),b===null?Ln.stop():Ln.start()},X.addEventListener("sessionstart",co),X.addEventListener("sessionend",lo),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(N),N=X.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,N,L),p=qe.get(b,v.length),p.init(N),v.push(p),Ie.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Z.setFromProjectionMatrix(Ie),ve=this.localClippingEnabled,te=ne.init(this.clippingPlanes,ve),m=ye.get(b,E.length),m.init(),E.push(m),X.enabled===!0&&X.isPresenting===!0){const re=x.xr.getDepthSensingMesh();re!==null&&us(re,N,-1/0,x.sortObjects)}us(b,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ce,pe),$=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,$&&Ne.addToRenderList(m,b),this.info.render.frame++,te===!0&&ne.beginShadows();const B=p.state.shadowsArray;Se.render(B,b,N),te===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){const re=N.cameras;if(F.length>0)for(let ge=0,Te=re.length;ge<Te;ge++){const Ae=re[ge];ho(k,F,b,Ae)}$&&Ne.render(b);for(let ge=0,Te=re.length;ge<Te;ge++){const Ae=re[ge];uo(m,b,Ae,Ae.viewport)}}else F.length>0&&ho(k,F,b,N),$&&Ne.render(b),uo(m,b,N);L!==null&&(T.updateMultisampleRenderTarget(L),T.updateRenderTargetMipmap(L)),b.isScene===!0&&b.onAfterRender(x,b,N),ct.resetDefaultState(),w=-1,y=null,v.pop(),v.length>0?(p=v[v.length-1],te===!0&&ne.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function us(b,N,B,k){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Z.intersectsSprite(b)){k&&Fe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ie);const ge=q.update(b),Te=b.material;Te.visible&&m.push(b,ge,Te,B,Fe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Z.intersectsObject(b))){const ge=q.update(b),Te=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Fe.copy(b.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Fe.copy(ge.boundingSphere.center)),Fe.applyMatrix4(b.matrixWorld).applyMatrix4(Ie)),Array.isArray(Te)){const Ae=ge.groups;for(let Be=0,He=Ae.length;Be<He;Be++){const Ce=Ae[Be],Qe=Te[Ce.materialIndex];Qe&&Qe.visible&&m.push(b,ge,Qe,B,Fe.z,Ce)}}else Te.visible&&m.push(b,ge,Te,B,Fe.z,null)}}const re=b.children;for(let ge=0,Te=re.length;ge<Te;ge++)us(re[ge],N,B,k)}function uo(b,N,B,k){const F=b.opaque,re=b.transmissive,ge=b.transparent;p.setupLightsView(B),te===!0&&ne.setGlobalState(x.clippingPlanes,B),k&&le.viewport(I.copy(k)),F.length>0&&or(F,N,B),re.length>0&&or(re,N,B),ge.length>0&&or(ge,N,B),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function ho(b,N,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Zn(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?ir:mn,minFilter:Wn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const re=p.state.transmissionRenderTarget[k.id],ge=k.viewport||I;re.setSize(ge.z,ge.w);const Te=x.getRenderTarget();x.setRenderTarget(re),x.getClearColor(H),J=x.getClearAlpha(),J<1&&x.setClearColor(16777215,.5),x.clear(),$&&Ne.render(B);const Ae=x.toneMapping;x.toneMapping=Cn;const Be=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),te===!0&&ne.setGlobalState(x.clippingPlanes,k),or(b,B,k),T.updateMultisampleRenderTarget(re),T.updateRenderTargetMipmap(re),ee.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ce=0,Qe=N.length;Ce<Qe;Ce++){const lt=N[Ce],ht=lt.object,Ct=lt.geometry,tt=lt.material,Pe=lt.group;if(tt.side===fn&&ht.layers.test(k.layers)){const sn=tt.side;tt.side=Rt,tt.needsUpdate=!0,fo(ht,B,k,Ct,tt,Pe),tt.side=sn,tt.needsUpdate=!0,He=!0}}He===!0&&(T.updateMultisampleRenderTarget(re),T.updateRenderTargetMipmap(re))}x.setRenderTarget(Te),x.setClearColor(H,J),Be!==void 0&&(k.viewport=Be),x.toneMapping=Ae}function or(b,N,B){const k=N.isScene===!0?N.overrideMaterial:null;for(let F=0,re=b.length;F<re;F++){const ge=b[F],Te=ge.object,Ae=ge.geometry,Be=k===null?ge.material:k,He=ge.group;Te.layers.test(B.layers)&&fo(Te,N,B,Ae,Be,He)}}function fo(b,N,B,k,F,re){b.onBeforeRender(x,N,B,k,F,re),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(x,N,B,k,b,re),F.transparent===!0&&F.side===fn&&F.forceSinglePass===!1?(F.side=Rt,F.needsUpdate=!0,x.renderBufferDirect(B,N,k,F,b,re),F.side=Rn,F.needsUpdate=!0,x.renderBufferDirect(B,N,k,F,b,re),F.side=fn):x.renderBufferDirect(B,N,k,F,b,re),b.onAfterRender(x,N,B,k,F,re)}function cr(b,N,B){N.isScene!==!0&&(N=Ke);const k=Me.get(b),F=p.state.lights,re=p.state.shadowsArray,ge=F.state.version,Te=we.getParameters(b,F.state,re,N,B),Ae=we.getProgramCacheKey(Te);let Be=k.programs;k.environment=b.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(b.isMeshStandardMaterial?O:M).get(b.envMap||k.environment),k.envMapRotation=k.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Be===void 0&&(b.addEventListener("dispose",Ve),Be=new Map,k.programs=Be);let He=Be.get(Ae);if(He!==void 0){if(k.currentProgram===He&&k.lightsStateVersion===ge)return mo(b,Te),He}else Te.uniforms=we.getUniforms(b),b.onBeforeCompile(Te,x),He=we.acquireProgram(Te,Ae),Be.set(Ae,He),k.uniforms=Te.uniforms;const Ce=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ce.clippingPlanes=ne.uniform),mo(b,Te),k.needsLights=Fl(b),k.lightsStateVersion=ge,k.needsLights&&(Ce.ambientLightColor.value=F.state.ambient,Ce.lightProbe.value=F.state.probe,Ce.directionalLights.value=F.state.directional,Ce.directionalLightShadows.value=F.state.directionalShadow,Ce.spotLights.value=F.state.spot,Ce.spotLightShadows.value=F.state.spotShadow,Ce.rectAreaLights.value=F.state.rectArea,Ce.ltc_1.value=F.state.rectAreaLTC1,Ce.ltc_2.value=F.state.rectAreaLTC2,Ce.pointLights.value=F.state.point,Ce.pointLightShadows.value=F.state.pointShadow,Ce.hemisphereLights.value=F.state.hemi,Ce.directionalShadowMap.value=F.state.directionalShadowMap,Ce.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ce.spotShadowMap.value=F.state.spotShadowMap,Ce.spotLightMatrix.value=F.state.spotLightMatrix,Ce.spotLightMap.value=F.state.spotLightMap,Ce.pointShadowMap.value=F.state.pointShadowMap,Ce.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=He,k.uniformsList=null,He}function po(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=Yr.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function mo(b,N){const B=Me.get(b);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function Ul(b,N,B,k,F){N.isScene!==!0&&(N=Ke),T.resetTextureUnits();const re=N.fog,ge=k.isMeshStandardMaterial?N.environment:null,Te=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ai,Ae=(k.isMeshStandardMaterial?O:M).get(k.envMap||ge),Be=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,He=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ce=!!B.morphAttributes.position,Qe=!!B.morphAttributes.normal,lt=!!B.morphAttributes.color;let ht=Cn;k.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ht=x.toneMapping);const Ct=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,tt=Ct!==void 0?Ct.length:0,Pe=Me.get(k),sn=p.state.lights;if(te===!0&&(ve===!0||b!==y)){const Ot=b===y&&k.id===w;ne.setState(k,b,Ot)}let nt=!1;k.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==sn.state.version||Pe.outputColorSpace!==Te||F.isBatchedMesh&&Pe.batching===!1||!F.isBatchedMesh&&Pe.batching===!0||F.isBatchedMesh&&Pe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Pe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Pe.instancing===!1||!F.isInstancedMesh&&Pe.instancing===!0||F.isSkinnedMesh&&Pe.skinning===!1||!F.isSkinnedMesh&&Pe.skinning===!0||F.isInstancedMesh&&Pe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Pe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Pe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Pe.instancingMorph===!1&&F.morphTexture!==null||Pe.envMap!==Ae||k.fog===!0&&Pe.fog!==re||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ne.numPlanes||Pe.numIntersection!==ne.numIntersection)||Pe.vertexAlphas!==Be||Pe.vertexTangents!==He||Pe.morphTargets!==Ce||Pe.morphNormals!==Qe||Pe.morphColors!==lt||Pe.toneMapping!==ht||Pe.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,Pe.__version=k.version);let Wt=Pe.currentProgram;nt===!0&&(Wt=cr(k,N,F));let $n=!1,Lt=!1,Ni=!1;const ft=Wt.getUniforms(),Kt=Pe.uniforms;if(le.useProgram(Wt.program)&&($n=!0,Lt=!0,Ni=!0),k.id!==w&&(w=k.id,Lt=!0),$n||y!==b){le.buffers.depth.getReversed()?(ae.copy(b.projectionMatrix),Gu(ae),Wu(ae),ft.setValue(C,"projectionMatrix",ae)):ft.setValue(C,"projectionMatrix",b.projectionMatrix),ft.setValue(C,"viewMatrix",b.matrixWorldInverse);const _n=ft.map.cameraPosition;_n!==void 0&&_n.setValue(C,ze.setFromMatrixPosition(b.matrixWorld)),be.logarithmicDepthBuffer&&ft.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ft.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Lt=!0,Ni=!0)}if(F.isSkinnedMesh){ft.setOptional(C,F,"bindMatrix"),ft.setOptional(C,F,"bindMatrixInverse");const Ot=F.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),ft.setValue(C,"boneTexture",Ot.boneTexture,T))}F.isBatchedMesh&&(ft.setOptional(C,F,"batchingTexture"),ft.setValue(C,"batchingTexture",F._matricesTexture,T),ft.setOptional(C,F,"batchingIdTexture"),ft.setValue(C,"batchingIdTexture",F._indirectTexture,T),ft.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&ft.setValue(C,"batchingColorTexture",F._colorsTexture,T));const Fi=B.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&Oe.update(F,B,Wt),(Lt||Pe.receiveShadow!==F.receiveShadow)&&(Pe.receiveShadow=F.receiveShadow,ft.setValue(C,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Kt.envMap.value=Ae,Kt.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(Kt.envMapIntensity.value=N.environmentIntensity),Lt&&(ft.setValue(C,"toneMappingExposure",x.toneMappingExposure),Pe.needsLights&&Nl(Kt,Ni),re&&k.fog===!0&&fe.refreshFogUniforms(Kt,re),fe.refreshMaterialUniforms(Kt,k,W,Q,p.state.transmissionRenderTarget[b.id]),Yr.upload(C,po(Pe),Kt,T)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Yr.upload(C,po(Pe),Kt,T),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ft.setValue(C,"center",F.center),ft.setValue(C,"modelViewMatrix",F.modelViewMatrix),ft.setValue(C,"normalMatrix",F.normalMatrix),ft.setValue(C,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ot=k.uniformsGroups;for(let _n=0,xn=Ot.length;_n<xn;_n++){const go=Ot[_n];U.update(go,Wt),U.bind(go,Wt)}}return Wt}function Nl(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Fl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,N,B){Me.get(b.texture).__webglTexture=N,Me.get(b.depthTexture).__webglTexture=B;const k=Me.get(b);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){const B=Me.get(b);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,B=0){L=b,A=N,R=B;let k=!0,F=null,re=!1,ge=!1;if(b){const Ae=Me.get(b);if(Ae.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(C.FRAMEBUFFER,null),k=!1;else if(Ae.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(Ae.__hasExternalTextures)T.rebindTextures(b,Me.get(b.texture).__webglTexture,Me.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ce=b.depthTexture;if(Ae.__boundDepthTexture!==Ce){if(Ce!==null&&Me.has(Ce)&&(b.width!==Ce.image.width||b.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}const Be=b.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ge=!0);const He=Me.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(He[N])?F=He[N][B]:F=He[N],re=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?F=Me.get(b).__webglMultisampledFramebuffer:Array.isArray(He)?F=He[B]:F=He,I.copy(b.viewport),V.copy(b.scissor),z=b.scissorTest}else I.copy(xe).multiplyScalar(W).floor(),V.copy(De).multiplyScalar(W).floor(),z=Ze;if(le.bindFramebuffer(C.FRAMEBUFFER,F)&&k&&le.drawBuffers(b,F),le.viewport(I),le.scissor(V),le.setScissorTest(z),re){const Ae=Me.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ae.__webglTexture,B)}else if(ge){const Ae=Me.get(b.texture),Be=N||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ae.__webglTexture,B||0,Be)}w=-1},this.readRenderTargetPixels=function(b,N,B,k,F,re,ge){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Me.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ge!==void 0&&(Te=Te[ge]),Te){le.bindFramebuffer(C.FRAMEBUFFER,Te);try{const Ae=b.texture,Be=Ae.format,He=Ae.type;if(!be.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!be.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-k&&B>=0&&B<=b.height-F&&C.readPixels(N,B,k,F,We.convert(Be),We.convert(He),re)}finally{const Ae=L!==null?Me.get(L).__webglFramebuffer:null;le.bindFramebuffer(C.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(b,N,B,k,F,re,ge){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Me.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ge!==void 0&&(Te=Te[ge]),Te){const Ae=b.texture,Be=Ae.format,He=Ae.type;if(!be.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!be.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-k&&B>=0&&B<=b.height-F){le.bindFramebuffer(C.FRAMEBUFFER,Te);const Ce=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ce),C.bufferData(C.PIXEL_PACK_BUFFER,re.byteLength,C.STREAM_READ),C.readPixels(N,B,k,F,We.convert(Be),We.convert(He),0);const Qe=L!==null?Me.get(L).__webglFramebuffer:null;le.bindFramebuffer(C.FRAMEBUFFER,Qe);const lt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Hu(C,lt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ce),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,re),C.deleteBuffer(Ce),C.deleteSync(lt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,N=null,B=0){b.isTexture!==!0&&(Xi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);const k=Math.pow(2,-B),F=Math.floor(b.image.width*k),re=Math.floor(b.image.height*k),ge=N!==null?N.x:0,Te=N!==null?N.y:0;T.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,B,0,0,ge,Te,F,re),le.unbindTexture()},this.copyTextureToTexture=function(b,N,B=null,k=null,F=0){b.isTexture!==!0&&(Xi("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1],N=arguments[2],F=arguments[3]||0,B=null);let re,ge,Te,Ae,Be,He,Ce,Qe,lt;const ht=b.isCompressedTexture?b.mipmaps[F]:b.image;B!==null?(re=B.max.x-B.min.x,ge=B.max.y-B.min.y,Te=B.isBox3?B.max.z-B.min.z:1,Ae=B.min.x,Be=B.min.y,He=B.isBox3?B.min.z:0):(re=ht.width,ge=ht.height,Te=ht.depth||1,Ae=0,Be=0,He=0),k!==null?(Ce=k.x,Qe=k.y,lt=k.z):(Ce=0,Qe=0,lt=0);const Ct=We.convert(N.format),tt=We.convert(N.type);let Pe;N.isData3DTexture?(T.setTexture3D(N,0),Pe=C.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),Pe=C.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),Pe=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);const sn=C.getParameter(C.UNPACK_ROW_LENGTH),nt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Wt=C.getParameter(C.UNPACK_SKIP_PIXELS),$n=C.getParameter(C.UNPACK_SKIP_ROWS),Lt=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ht.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ht.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ae),C.pixelStorei(C.UNPACK_SKIP_ROWS,Be),C.pixelStorei(C.UNPACK_SKIP_IMAGES,He);const Ni=b.isDataArrayTexture||b.isData3DTexture,ft=N.isDataArrayTexture||N.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Kt=Me.get(b),Fi=Me.get(N),Ot=Me.get(Kt.__renderTarget),_n=Me.get(Fi.__renderTarget);le.bindFramebuffer(C.READ_FRAMEBUFFER,Ot.__webglFramebuffer),le.bindFramebuffer(C.DRAW_FRAMEBUFFER,_n.__webglFramebuffer);for(let xn=0;xn<Te;xn++)Ni&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Me.get(b).__webglTexture,F,He+xn),b.isDepthTexture?(ft&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Me.get(N).__webglTexture,F,lt+xn),C.blitFramebuffer(Ae,Be,re,ge,Ce,Qe,re,ge,C.DEPTH_BUFFER_BIT,C.NEAREST)):ft?C.copyTexSubImage3D(Pe,F,Ce,Qe,lt+xn,Ae,Be,re,ge):C.copyTexSubImage2D(Pe,F,Ce,Qe,lt+xn,Ae,Be,re,ge);le.bindFramebuffer(C.READ_FRAMEBUFFER,null),le.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else ft?b.isDataTexture||b.isData3DTexture?C.texSubImage3D(Pe,F,Ce,Qe,lt,re,ge,Te,Ct,tt,ht.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(Pe,F,Ce,Qe,lt,re,ge,Te,Ct,ht.data):C.texSubImage3D(Pe,F,Ce,Qe,lt,re,ge,Te,Ct,tt,ht):b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,F,Ce,Qe,re,ge,Ct,tt,ht.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,F,Ce,Qe,ht.width,ht.height,Ct,ht.data):C.texSubImage2D(C.TEXTURE_2D,F,Ce,Qe,re,ge,Ct,tt,ht);C.pixelStorei(C.UNPACK_ROW_LENGTH,sn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,nt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Wt),C.pixelStorei(C.UNPACK_SKIP_ROWS,$n),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Lt),F===0&&N.generateMipmaps&&C.generateMipmap(Pe),le.unbindTexture()},this.copyTextureToTexture3D=function(b,N,B=null,k=null,F=0){return b.isTexture!==!0&&(Xi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,b=arguments[2],N=arguments[3],F=arguments[4]||0),Xi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,N,B,k,F)},this.initRenderTarget=function(b){Me.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),le.unbindTexture()},this.resetState=function(){A=0,R=0,L=null,le.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}class Yv extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class e0 extends Mt{constructor(e=null,t=1,i=1,r,s,a,c,o,l=Ut,u=Ut,h,f){super(null,a,c,o,l,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vc extends Ye{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fi=new rt,Mc=new rt,Lr=[],yc=new Jn,t0=new rt,Vi=new Jt,Hi=new Ri;class qv extends Jt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,t0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,fi),yc.copy(e.boundingBox).applyMatrix4(fi),this.boundingBox.union(yc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,fi),Hi.copy(e.boundingSphere).applyMatrix4(fi),this.boundingSphere.union(Hi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let c=0;c<i.length;c++)i[c]=r[a+c]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Vi.geometry=this.geometry,Vi.material=this.material,Vi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hi.copy(this.boundingSphere),Hi.applyMatrix4(i),e.ray.intersectsSphere(Hi)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,fi),Mc.multiplyMatrices(i,fi),Vi.matrixWorld=Mc,Vi.raycast(e,Lr);for(let a=0,c=Lr.length;a<c;a++){const o=Lr[a];o.instanceId=s,o.object=this,t.push(o)}Lr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new vc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new e0(new Float32Array(r*this.count),r,this.count,Za,en));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const c=this.geometry.morphTargetsRelative?1:1-a,o=r*e;s[o]=c,s.set(i,o+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class n0 extends Pi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Kr=new P,$r=new P,bc=new rt,Gi=new $a,Ir=new Ri,ks=new P,Sc=new P;class i0 extends yt{constructor(e=new ke,t=new n0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Kr.fromBufferAttribute(t,r-1),$r.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Kr.distanceTo($r);e.setAttribute("lineDistance",new et(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ir.copy(i.boundingSphere),Ir.applyMatrix4(r),Ir.radius+=s,e.ray.intersectsSphere(Ir)===!1)return;bc.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(bc);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=c*c,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=l){const p=u.getX(_),E=u.getX(_+1),v=Dr(this,e,Gi,o,p,E);v&&t.push(v)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=Dr(this,e,Gi,o,_,m);p&&t.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=l){const p=Dr(this,e,Gi,o,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Dr(this,e,Gi,o,g-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function Dr(n,e,t,i,r,s){const a=n.geometry.attributes.position;if(Kr.fromBufferAttribute(a,r),$r.fromBufferAttribute(a,s),t.distanceSqToSegment(Kr,$r,ks,Sc)>i)return;ks.applyMatrix4(n.matrixWorld);const o=e.ray.origin.distanceTo(ks);if(!(o<e.near||o>e.far))return{distance:o,point:Sc.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const Ec=new P,wc=new P;class Jv extends i0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Ec.fromBufferAttribute(t,r),wc.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ec.distanceTo(wc);e.setAttribute("lineDistance",new et(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Kv extends Mt{constructor(e,t,i,r,s,a,c,o,l,u,h,f){super(null,a,c,o,l,u,r,s,h,f),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class $v extends Mt{constructor(e,t,i,r,s,a,c,o,l){super(e,t,i,r,s,a,c,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ft{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let c=0,o=s-1,l;for(;c<=o;)if(r=Math.floor(c+(o-c)/2),l=i[r]-a,l<0)c=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===a)return r/(s-1);const u=i[r],f=i[r+1]-u,d=(a-u)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),c=this.getPoint(s),o=t||(a.isVector2?new oe:new P);return o.copy(c).sub(a).normalize(),o}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new P,r=[],s=[],a=[],c=new P,o=new rt;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new P)}s[0]=new P,a[0]=new P;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),f<=l&&i.set(0,0,1),c.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],c),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),c.crossVectors(r[d-1],r[d]),c.length()>Number.EPSILON){c.normalize();const g=Math.acos(gt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(o.makeRotationAxis(c,g))}a[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(gt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(c.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(o.makeRotationAxis(r[g],d*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class to extends Ft{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,c=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=c,this.aRotation=o}getPoint(e,t=new oe){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const c=this.aStartAngle+e*s;let o=this.aX+this.xRadius*Math.cos(c),l=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=o-this.aX,d=l-this.aY;o=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class r0 extends to{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function no(){let n=0,e=0,t=0,i=0;function r(s,a,c,o){n=s,e=c,t=-3*s+3*a-2*c-o,i=2*s-2*a+c+o}return{initCatmullRom:function(s,a,c,o,l){r(a,c,l*(c-s),l*(o-a))},initNonuniformCatmullRom:function(s,a,c,o,l,u,h){let f=(a-s)/l-(c-s)/(l+u)+(c-a)/u,d=(c-a)/u-(o-a)/(u+h)+(o-c)/h;f*=u,d*=u,r(a,c,f,d)},calc:function(s){const a=s*s,c=a*s;return n+e*s+t*a+i*c}}}const Ur=new P,Vs=new no,Hs=new no,Gs=new no;class s0 extends Ft{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new P){const i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let c=Math.floor(a),o=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:o===0&&c===s-1&&(c=s-2,o=1);let l,u;this.closed||c>0?l=r[(c-1)%s]:(Ur.subVectors(r[0],r[1]).add(r[0]),l=Ur);const h=r[c%s],f=r[(c+1)%s];if(this.closed||c+2<s?u=r[(c+2)%s]:(Ur.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ur),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Vs.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,_,m),Hs.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,_,m),Gs.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Vs.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Hs.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Gs.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return i.set(Vs.calc(o),Hs.calc(o),Gs.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Tc(n,e,t,i,r){const s=(i-e)*.5,a=(r-t)*.5,c=n*n,o=n*c;return(2*t-2*i+s+a)*o+(-3*t+3*i-2*s-a)*c+s*n+t}function a0(n,e){const t=1-n;return t*t*e}function o0(n,e){return 2*(1-n)*n*e}function c0(n,e){return n*n*e}function qi(n,e,t,i){return a0(n,e)+o0(n,t)+c0(n,i)}function l0(n,e){const t=1-n;return t*t*t*e}function u0(n,e){const t=1-n;return 3*t*t*n*e}function h0(n,e){return 3*(1-n)*n*n*e}function f0(n,e){return n*n*n*e}function Ji(n,e,t,i,r){return l0(n,e)+u0(n,t)+h0(n,i)+f0(n,r)}class Sl extends Ft{constructor(e=new oe,t=new oe,i=new oe,r=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new oe){const i=t,r=this.v0,s=this.v1,a=this.v2,c=this.v3;return i.set(Ji(e,r.x,s.x,a.x,c.x),Ji(e,r.y,s.y,a.y,c.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class d0 extends Ft{constructor(e=new P,t=new P,i=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new P){const i=t,r=this.v0,s=this.v1,a=this.v2,c=this.v3;return i.set(Ji(e,r.x,s.x,a.x,c.x),Ji(e,r.y,s.y,a.y,c.y),Ji(e,r.z,s.z,a.z,c.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class El extends Ft{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class p0 extends Ft{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wl extends Ft{constructor(e=new oe,t=new oe,i=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new oe){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(qi(e,r.x,s.x,a.x),qi(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tl extends Ft{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(qi(e,r.x,s.x,a.x),qi(e,r.y,s.y,a.y),qi(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Al extends Ft{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){const i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),c=s-a,o=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return i.set(Tc(c,o.x,l.x,u.x,h.x),Tc(c,o.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new oe().fromArray(r))}return this}}var jr=Object.freeze({__proto__:null,ArcCurve:r0,CatmullRomCurve3:s0,CubicBezierCurve:Sl,CubicBezierCurve3:d0,EllipseCurve:to,LineCurve:El,LineCurve3:p0,QuadraticBezierCurve:wl,QuadraticBezierCurve3:Tl,SplineCurve:Al});class m0 extends Ft{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jr[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,c=this.curves[s],o=c.getLength(),l=o===0?0:1-a/o;return c.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],c=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,o=a.getPoints(c);for(let l=0;l<o.length;l++){const u=o[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new jr[r.type]().fromJSON(r))}return this}}class Ti extends m0{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new El(this.currentPoint.clone(),new oe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new wl(this.currentPoint.clone(),new oe(e,t),new oe(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){const c=new Sl(this.currentPoint.clone(),new oe(e,t),new oe(i,r),new oe(s,a));return this.curves.push(c),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Al(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){const c=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+c,t+o,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,c,o){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,s,a,c,o),this}absellipse(e,t,i,r,s,a,c,o){const l=new to(e,t,i,r,s,a,c,o);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class io extends ke{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=gt(r,0,Math.PI*2);const s=[],a=[],c=[],o=[],l=[],u=1/t,h=new P,f=new oe,d=new P,g=new P,_=new P;let m=0,p=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:m=e[E+1].x-e[E].x,p=e[E+1].y-e[E].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),o.push(d.x,d.y,d.z);break;case e.length-1:o.push(_.x,_.y,_.z);break;default:m=e[E+1].x-e[E].x,p=e[E+1].y-e[E].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),o.push(d.x,d.y,d.z),_.copy(g)}for(let E=0;E<=t;E++){const v=i+E*u*r,x=Math.sin(v),D=Math.cos(v);for(let A=0;A<=e.length-1;A++){h.x=e[A].x*x,h.y=e[A].y,h.z=e[A].x*D,a.push(h.x,h.y,h.z),f.x=E/t,f.y=A/(e.length-1),c.push(f.x,f.y);const R=o[3*A+0]*x,L=o[3*A+1],w=o[3*A+0]*D;l.push(R,L,w)}}for(let E=0;E<t;E++)for(let v=0;v<e.length-1;v++){const x=v+E*e.length,D=x,A=x+e.length,R=x+e.length+1,L=x+1;s.push(D,A,L),s.push(R,L,A)}this.setIndex(s),this.setAttribute("position",new et(a,3)),this.setAttribute("uv",new et(c,2)),this.setAttribute("normal",new et(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.points,e.segments,e.phiStart,e.phiLength)}}class Qr extends io{constructor(e=1,t=1,i=4,r=8){const s=new Ti;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:r}}static fromJSON(e){return new Qr(e.radius,e.length,e.capSegments,e.radialSegments)}}class ue extends ke{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,c=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:c,thetaLength:o};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let g=0;const _=[],m=i/2;let p=0;E(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new et(h,3)),this.setAttribute("normal",new et(f,3)),this.setAttribute("uv",new et(d,2));function E(){const x=new P,D=new P;let A=0;const R=(t-e)/i;for(let L=0;L<=s;L++){const w=[],y=L/s,I=y*(t-e)+e;for(let V=0;V<=r;V++){const z=V/r,H=z*o+c,J=Math.sin(H),G=Math.cos(H);D.x=I*J,D.y=-y*i+m,D.z=I*G,h.push(D.x,D.y,D.z),x.set(J,R,G).normalize(),f.push(x.x,x.y,x.z),d.push(z,1-y),w.push(g++)}_.push(w)}for(let L=0;L<r;L++)for(let w=0;w<s;w++){const y=_[w][L],I=_[w+1][L],V=_[w+1][L+1],z=_[w][L+1];(e>0||w!==0)&&(u.push(y,I,z),A+=3),(t>0||w!==s-1)&&(u.push(I,V,z),A+=3)}l.addGroup(p,A,0),p+=A}function v(x){const D=g,A=new oe,R=new P;let L=0;const w=x===!0?e:t,y=x===!0?1:-1;for(let V=1;V<=r;V++)h.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;const I=g;for(let V=0;V<=r;V++){const H=V/r*o+c,J=Math.cos(H),G=Math.sin(H);R.x=w*G,R.y=m*y,R.z=w*J,h.push(R.x,R.y,R.z),f.push(0,y,0),A.x=J*.5+.5,A.y=G*.5*y+.5,d.push(A.x,A.y),g++}for(let V=0;V<r;V++){const z=D+V,H=I+V;x===!0?u.push(H,H+1,z):u.push(H+1,H,z),L+=3}l.addGroup(p,L,x===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ue(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bt extends ue{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,c=Math.PI*2){super(0,e,t,i,r,s,a,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:c}}static fromJSON(e){return new bt(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sr extends ke{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];c(r),l(i),u(),this.setAttribute("position",new et(s,3)),this.setAttribute("normal",new et(s.slice(),3)),this.setAttribute("uv",new et(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function c(E){const v=new P,x=new P,D=new P;for(let A=0;A<t.length;A+=3)d(t[A+0],v),d(t[A+1],x),d(t[A+2],D),o(v,x,D,E)}function o(E,v,x,D){const A=D+1,R=[];for(let L=0;L<=A;L++){R[L]=[];const w=E.clone().lerp(x,L/A),y=v.clone().lerp(x,L/A),I=A-L;for(let V=0;V<=I;V++)V===0&&L===A?R[L][V]=w:R[L][V]=w.clone().lerp(y,V/I)}for(let L=0;L<A;L++)for(let w=0;w<2*(A-L)-1;w++){const y=Math.floor(w/2);w%2===0?(f(R[L][y+1]),f(R[L+1][y]),f(R[L][y])):(f(R[L][y+1]),f(R[L+1][y+1]),f(R[L+1][y]))}}function l(E){const v=new P;for(let x=0;x<s.length;x+=3)v.x=s[x+0],v.y=s[x+1],v.z=s[x+2],v.normalize().multiplyScalar(E),s[x+0]=v.x,s[x+1]=v.y,s[x+2]=v.z}function u(){const E=new P;for(let v=0;v<s.length;v+=3){E.x=s[v+0],E.y=s[v+1],E.z=s[v+2];const x=m(E)/2/Math.PI+.5,D=p(E)/Math.PI+.5;a.push(x,1-D)}g(),h()}function h(){for(let E=0;E<a.length;E+=6){const v=a[E+0],x=a[E+2],D=a[E+4],A=Math.max(v,x,D),R=Math.min(v,x,D);A>.9&&R<.1&&(v<.2&&(a[E+0]+=1),x<.2&&(a[E+2]+=1),D<.2&&(a[E+4]+=1))}}function f(E){s.push(E.x,E.y,E.z)}function d(E,v){const x=E*3;v.x=e[x+0],v.y=e[x+1],v.z=e[x+2]}function g(){const E=new P,v=new P,x=new P,D=new P,A=new oe,R=new oe,L=new oe;for(let w=0,y=0;w<s.length;w+=9,y+=6){E.set(s[w+0],s[w+1],s[w+2]),v.set(s[w+3],s[w+4],s[w+5]),x.set(s[w+6],s[w+7],s[w+8]),A.set(a[y+0],a[y+1]),R.set(a[y+2],a[y+3]),L.set(a[y+4],a[y+5]),D.copy(E).add(v).add(x).divideScalar(3);const I=m(D);_(A,y+0,E,I),_(R,y+2,v,I),_(L,y+4,x,I)}}function _(E,v,x,D){D<0&&E.x===1&&(a[v]=E.x-1),x.x===0&&x.z===0&&(a[v]=D/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.vertices,e.indices,e.radius,e.details)}}class Ht extends sr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ht(e.radius,e.detail)}}const Nr=new P,Fr=new P,Ws=new P,Or=new Vt;class jv extends ke{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(xi*t),a=e.getIndex(),c=e.getAttribute("position"),o=a?a.count:c.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<o;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:m,c:p}=Or;if(_.fromBufferAttribute(c,l[0]),m.fromBufferAttribute(c,l[1]),p.fromBufferAttribute(c,l[2]),Or.getNormal(Ws),h[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let E=0;E<3;E++){const v=(E+1)%3,x=h[E],D=h[v],A=Or[u[E]],R=Or[u[v]],L=`${x}_${D}`,w=`${D}_${x}`;w in f&&f[w]?(Ws.dot(f[w].normal)<=s&&(d.push(A.x,A.y,A.z),d.push(R.x,R.y,R.z)),f[w]=null):L in f||(f[L]={index0:l[E],index1:l[v],normal:Ws.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:m}=f[g];Nr.fromBufferAttribute(c,_),Fr.fromBufferAttribute(c,m),d.push(Nr.x,Nr.y,Nr.z),d.push(Fr.x,Fr.y,Fr.z)}this.setAttribute("position",new et(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ii extends Ti{constructor(e){super(e),this.uuid=Pn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Ti().fromJSON(r))}return this}}const g0={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Cl(n,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let c,o,l,u,h,f,d;if(i&&(s=y0(n,e,s,t)),n.length>80*t){c=l=n[0],o=u=n[1];for(let g=t;g<r;g+=t)h=n[g],f=n[g+1],h<c&&(c=h),f<o&&(o=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-c,u-o),d=d!==0?32767/d:0}return er(s,a,t,c,o,d,0),a}};function Cl(n,e,t,i,r){let s,a;if(r===I0(n,e,t,i)>0)for(s=e;s<t;s+=i)a=Ac(s,n[s],n[s+1],a);else for(s=t-i;s>=e;s-=i)a=Ac(s,n[s],n[s+1],a);return a&&ss(a,a.next)&&(nr(a),a=a.next),a}function Yn(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ss(t,t.next)||dt(t.prev,t,t.next)===0)){if(nr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function er(n,e,t,i,r,s,a){if(!n)return;!a&&s&&T0(n,i,r,s);let c=n,o,l;for(;n.prev!==n.next;){if(o=n.prev,l=n.next,s?x0(n,i,r,s):_0(n)){e.push(o.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),nr(n),n=l.next,c=l.next;continue}if(n=l,n===c){a?a===1?(n=v0(Yn(n),e,t),er(n,e,t,i,r,s,2)):a===2&&M0(n,e,t,i,r,s):er(Yn(n),e,t,i,r,s,1);break}}}function _0(n){const e=n.prev,t=n,i=n.next;if(dt(e,t,i)>=0)return!1;const r=e.x,s=t.x,a=i.x,c=e.y,o=t.y,l=i.y,u=r<s?r<a?r:a:s<a?s:a,h=c<o?c<l?c:l:o<l?o:l,f=r>s?r>a?r:a:s>a?s:a,d=c>o?c>l?c:l:o>l?o:l;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&mi(r,c,s,o,a,l,g.x,g.y)&&dt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function x0(n,e,t,i){const r=n.prev,s=n,a=n.next;if(dt(r,s,a)>=0)return!1;const c=r.x,o=s.x,l=a.x,u=r.y,h=s.y,f=a.y,d=c<o?c<l?c:l:o<l?o:l,g=u<h?u<f?u:f:h<f?h:f,_=c>o?c>l?c:l:o>l?o:l,m=u>h?u>f?u:f:h>f?h:f,p=Ba(d,g,e,t,i),E=Ba(_,m,e,t,i);let v=n.prevZ,x=n.nextZ;for(;v&&v.z>=p&&x&&x.z<=E;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&mi(c,u,o,h,l,f,v.x,v.y)&&dt(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&mi(c,u,o,h,l,f,x.x,x.y)&&dt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&mi(c,u,o,h,l,f,v.x,v.y)&&dt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=E;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&mi(c,u,o,h,l,f,x.x,x.y)&&dt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function v0(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!ss(r,s)&&Rl(r,i,i.next,s)&&tr(r,s)&&tr(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),nr(i),nr(i.next),i=n=s),i=i.next}while(i!==n);return Yn(i)}function M0(n,e,t,i,r,s){let a=n;do{let c=a.next.next;for(;c!==a.prev;){if(a.i!==c.i&&R0(a,c)){let o=Pl(a,c);a=Yn(a,a.next),o=Yn(o,o.next),er(a,e,t,i,r,s,0),er(o,e,t,i,r,s,0);return}c=c.next}a=a.next}while(a!==n)}function y0(n,e,t,i){const r=[];let s,a,c,o,l;for(s=0,a=e.length;s<a;s++)c=e[s]*i,o=s<a-1?e[s+1]*i:n.length,l=Cl(n,c,o,i,!1),l===l.next&&(l.steiner=!0),r.push(C0(l));for(r.sort(b0),s=0;s<r.length;s++)t=S0(r[s],t);return t}function b0(n,e){return n.x-e.x}function S0(n,e){const t=E0(n,e);if(!t)return e;const i=Pl(t,n);return Yn(i,i.next),Yn(t,t.next)}function E0(n,e){let t=e,i=-1/0,r;const s=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>i&&(i=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;const c=r,o=r.x,l=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=o&&s!==t.x&&mi(a<l?s:i,a,o,l,a<l?i:s,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(s-t.x),tr(t,n)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&w0(r,t)))&&(r=t,u=h)),t=t.next;while(t!==c);return r}function w0(n,e){return dt(n.prev,n,e.prev)<0&&dt(e.next,n,n.next)<0}function T0(n,e,t,i){let r=n;do r.z===0&&(r.z=Ba(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,A0(r)}function A0(n){let e,t,i,r,s,a,c,o,l=1;do{for(t=n,n=null,s=null,a=0;t;){for(a++,i=t,c=0,e=0;e<l&&(c++,i=i.nextZ,!!i);e++);for(o=l;c>0||o>0&&i;)c!==0&&(o===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,c--):(r=i,i=i.nextZ,o--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,l*=2}while(a>1);return n}function Ba(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function C0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function mi(n,e,t,i,r,s,a,c){return(r-a)*(e-c)>=(n-a)*(s-c)&&(n-a)*(i-c)>=(t-a)*(e-c)&&(t-a)*(s-c)>=(r-a)*(i-c)}function R0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!P0(n,e)&&(tr(n,e)&&tr(e,n)&&L0(n,e)&&(dt(n.prev,n,e.prev)||dt(n,e.prev,e))||ss(n,e)&&dt(n.prev,n,n.next)>0&&dt(e.prev,e,e.next)>0)}function dt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ss(n,e){return n.x===e.x&&n.y===e.y}function Rl(n,e,t,i){const r=Br(dt(n,e,t)),s=Br(dt(n,e,i)),a=Br(dt(t,i,n)),c=Br(dt(t,i,e));return!!(r!==s&&a!==c||r===0&&zr(n,t,e)||s===0&&zr(n,i,e)||a===0&&zr(t,n,i)||c===0&&zr(t,e,i))}function zr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Br(n){return n>0?1:n<0?-1:0}function P0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Rl(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function tr(n,e){return dt(n.prev,n,n.next)<0?dt(n,e,n.next)>=0&&dt(n,n.prev,e)>=0:dt(n,e,n.prev)<0||dt(n,n.next,e)<0}function L0(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Pl(n,e){const t=new ka(n.i,n.x,n.y),i=new ka(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Ac(n,e,t,i){const r=new ka(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function nr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ka(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function I0(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class Ki{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Ki.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Cc(e),Rc(i,e);let a=e.length;t.forEach(Cc);for(let o=0;o<t.length;o++)r.push(a),a+=t[o].length,Rc(i,t[o]);const c=g0.triangulate(i,r);for(let o=0;o<c.length;o+=3)s.push(c.slice(o,o+3));return s}}function Cc(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Rc(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Kn extends ke{constructor(e=new Ii([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let c=0,o=e.length;c<o;c++){const l=e[c];a(l)}this.setAttribute("position",new et(r,3)),this.setAttribute("uv",new et(s,2)),this.computeVertexNormals();function a(c){const o=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:D0;let v,x=!1,D,A,R,L;p&&(v=p.getSpacedPoints(u),x=!0,f=!1,D=p.computeFrenetFrames(u,!1),A=new P,R=new P,L=new P),f||(m=0,d=0,g=0,_=0);const w=c.extractPoints(l);let y=w.shape;const I=w.holes;if(!Ki.isClockWise(y)){y=y.reverse();for(let $=0,ie=I.length;$<ie;$++){const C=I[$];Ki.isClockWise(C)&&(I[$]=C.reverse())}}const z=Ki.triangulateShape(y,I),H=y;for(let $=0,ie=I.length;$<ie;$++){const C=I[$];y=y.concat(C)}function J($,ie,C){return ie||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(ie,C)}const G=y.length,Q=z.length;function W($,ie,C){let Re,ee,be;const le=$.x-ie.x,Ue=$.y-ie.y,Me=C.x-$.x,T=C.y-$.y,M=le*le+Ue*Ue,O=le*T-Ue*Me;if(Math.abs(O)>Number.EPSILON){const Y=Math.sqrt(M),j=Math.sqrt(Me*Me+T*T),q=ie.x-Ue/Y,we=ie.y+le/Y,fe=C.x-T/j,ye=C.y+Me/j,qe=((fe-q)*T-(ye-we)*Me)/(le*T-Ue*Me);Re=q+le*qe-$.x,ee=we+Ue*qe-$.y;const ne=Re*Re+ee*ee;if(ne<=2)return new oe(Re,ee);be=Math.sqrt(ne/2)}else{let Y=!1;le>Number.EPSILON?Me>Number.EPSILON&&(Y=!0):le<-Number.EPSILON?Me<-Number.EPSILON&&(Y=!0):Math.sign(Ue)===Math.sign(T)&&(Y=!0),Y?(Re=-Ue,ee=le,be=Math.sqrt(M)):(Re=le,ee=Ue,be=Math.sqrt(M/2))}return new oe(Re/be,ee/be)}const ce=[];for(let $=0,ie=H.length,C=ie-1,Re=$+1;$<ie;$++,C++,Re++)C===ie&&(C=0),Re===ie&&(Re=0),ce[$]=W(H[$],H[C],H[Re]);const pe=[];let xe,De=ce.concat();for(let $=0,ie=I.length;$<ie;$++){const C=I[$];xe=[];for(let Re=0,ee=C.length,be=ee-1,le=Re+1;Re<ee;Re++,be++,le++)be===ee&&(be=0),le===ee&&(le=0),xe[Re]=W(C[Re],C[be],C[le]);pe.push(xe),De=De.concat(xe)}for(let $=0;$<m;$++){const ie=$/m,C=d*Math.cos(ie*Math.PI/2),Re=g*Math.sin(ie*Math.PI/2)+_;for(let ee=0,be=H.length;ee<be;ee++){const le=J(H[ee],ce[ee],Re);ae(le.x,le.y,-C)}for(let ee=0,be=I.length;ee<be;ee++){const le=I[ee];xe=pe[ee];for(let Ue=0,Me=le.length;Ue<Me;Ue++){const T=J(le[Ue],xe[Ue],Re);ae(T.x,T.y,-C)}}}const Ze=g+_;for(let $=0;$<G;$++){const ie=f?J(y[$],De[$],Ze):y[$];x?(R.copy(D.normals[0]).multiplyScalar(ie.x),A.copy(D.binormals[0]).multiplyScalar(ie.y),L.copy(v[0]).add(R).add(A),ae(L.x,L.y,L.z)):ae(ie.x,ie.y,0)}for(let $=1;$<=u;$++)for(let ie=0;ie<G;ie++){const C=f?J(y[ie],De[ie],Ze):y[ie];x?(R.copy(D.normals[$]).multiplyScalar(C.x),A.copy(D.binormals[$]).multiplyScalar(C.y),L.copy(v[$]).add(R).add(A),ae(L.x,L.y,L.z)):ae(C.x,C.y,h/u*$)}for(let $=m-1;$>=0;$--){const ie=$/m,C=d*Math.cos(ie*Math.PI/2),Re=g*Math.sin(ie*Math.PI/2)+_;for(let ee=0,be=H.length;ee<be;ee++){const le=J(H[ee],ce[ee],Re);ae(le.x,le.y,h+C)}for(let ee=0,be=I.length;ee<be;ee++){const le=I[ee];xe=pe[ee];for(let Ue=0,Me=le.length;Ue<Me;Ue++){const T=J(le[Ue],xe[Ue],Re);x?ae(T.x,T.y+v[u-1].y,v[u-1].x+C):ae(T.x,T.y,h+C)}}}Z(),te();function Z(){const $=r.length/3;if(f){let ie=0,C=G*ie;for(let Re=0;Re<Q;Re++){const ee=z[Re];Ie(ee[2]+C,ee[1]+C,ee[0]+C)}ie=u+m*2,C=G*ie;for(let Re=0;Re<Q;Re++){const ee=z[Re];Ie(ee[0]+C,ee[1]+C,ee[2]+C)}}else{for(let ie=0;ie<Q;ie++){const C=z[ie];Ie(C[2],C[1],C[0])}for(let ie=0;ie<Q;ie++){const C=z[ie];Ie(C[0]+G*u,C[1]+G*u,C[2]+G*u)}}i.addGroup($,r.length/3-$,0)}function te(){const $=r.length/3;let ie=0;ve(H,ie),ie+=H.length;for(let C=0,Re=I.length;C<Re;C++){const ee=I[C];ve(ee,ie),ie+=ee.length}i.addGroup($,r.length/3-$,1)}function ve($,ie){let C=$.length;for(;--C>=0;){const Re=C;let ee=C-1;ee<0&&(ee=$.length-1);for(let be=0,le=u+m*2;be<le;be++){const Ue=G*be,Me=G*(be+1),T=ie+Re+Ue,M=ie+ee+Ue,O=ie+ee+Me,Y=ie+Re+Me;ze(T,M,O,Y)}}}function ae($,ie,C){o.push($),o.push(ie),o.push(C)}function Ie($,ie,C){Fe($),Fe(ie),Fe(C);const Re=r.length/3,ee=E.generateTopUV(i,r,Re-3,Re-2,Re-1);Ke(ee[0]),Ke(ee[1]),Ke(ee[2])}function ze($,ie,C,Re){Fe($),Fe(ie),Fe(Re),Fe(ie),Fe(C),Fe(Re);const ee=r.length/3,be=E.generateSideWallUV(i,r,ee-6,ee-3,ee-2,ee-1);Ke(be[0]),Ke(be[1]),Ke(be[3]),Ke(be[1]),Ke(be[2]),Ke(be[3])}function Fe($){r.push(o[$*3+0]),r.push(o[$*3+1]),r.push(o[$*3+2])}function Ke($){s.push($.x),s.push($.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return U0(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,a=e.shapes.length;s<a;s++){const c=t[e.shapes[s]];i.push(c)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new jr[r.type]().fromJSON(r)),new Kn(i,e.options)}}const D0={generateTopUV:function(n,e,t,i,r){const s=e[t*3],a=e[t*3+1],c=e[i*3],o=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new oe(s,a),new oe(c,o),new oe(l,u)]},generateSideWallUV:function(n,e,t,i,r,s){const a=e[t*3],c=e[t*3+1],o=e[t*3+2],l=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[r*3],d=e[r*3+1],g=e[r*3+2],_=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(c-u)<Math.abs(a-l)?[new oe(a,1-o),new oe(l,1-h),new oe(f,1-g),new oe(_,1-p)]:[new oe(c,1-o),new oe(u,1-h),new oe(d,1-g),new oe(m,1-p)]}};function U0(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Pt extends sr{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Pt(e.radius,e.detail)}}class ut extends ke{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:c},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const o=Math.min(a+c,Math.PI);let l=0;const u=[],h=new P,f=new P,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const E=[],v=p/i;let x=0;p===0&&a===0?x=.5/t:p===i&&o===Math.PI&&(x=-.5/t);for(let D=0;D<=t;D++){const A=D/t;h.x=-e*Math.cos(r+A*s)*Math.sin(a+v*c),h.y=e*Math.cos(a+v*c),h.z=e*Math.sin(r+A*s)*Math.sin(a+v*c),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(A+x,1-v),E.push(l++)}u.push(E)}for(let p=0;p<i;p++)for(let E=0;E<t;E++){const v=u[p][E+1],x=u[p][E],D=u[p+1][E],A=u[p+1][E+1];(p!==0||a>0)&&d.push(v,x,A),(p!==i-1||o<Math.PI)&&d.push(x,D,A)}this.setIndex(d),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ut(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ro extends sr{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ro(e.radius,e.detail)}}class Nt extends ke{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],c=[],o=[],l=[],u=new P,h=new P,f=new P;for(let d=0;d<=i;d++)for(let g=0;g<=r;g++){const _=g/r*s,m=d/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),c.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),f.subVectors(h,u).normalize(),o.push(f.x,f.y,f.z),l.push(g/r),l.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=r;g++){const _=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,p=(r+1)*(d-1)+g,E=(r+1)*d+g;a.push(_,m,E),a.push(m,p,E)}this.setIndex(a),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(o,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nt(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ar extends ke{constructor(e=new Tl(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const c=new P,o=new P,l=new oe;let u=new P;const h=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new et(h,3)),this.setAttribute("normal",new et(f,3)),this.setAttribute("uv",new et(d,2));function _(){for(let v=0;v<t;v++)m(v);m(s===!1?t:0),E(),p()}function m(v){u=e.getPointAt(v/t,u);const x=a.normals[v],D=a.binormals[v];for(let A=0;A<=r;A++){const R=A/r*Math.PI*2,L=Math.sin(R),w=-Math.cos(R);o.x=w*x.x+L*D.x,o.y=w*x.y+L*D.y,o.z=w*x.z+L*D.z,o.normalize(),f.push(o.x,o.y,o.z),c.x=u.x+i*o.x,c.y=u.y+i*o.y,c.z=u.z+i*o.z,h.push(c.x,c.y,c.z)}}function p(){for(let v=1;v<=t;v++)for(let x=1;x<=r;x++){const D=(r+1)*(v-1)+(x-1),A=(r+1)*v+(x-1),R=(r+1)*v+x,L=(r+1)*(v-1)+x;g.push(D,A,L),g.push(A,R,L)}}function E(){for(let v=0;v<=t;v++)for(let x=0;x<=r;x++)l.x=v/t,l.y=x/r,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ar(new jr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Qv extends gn{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class eM extends Pi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rl,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function kr(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function N0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function F0(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Pc(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,a=0;a!==i;++s){const c=t[s]*e;for(let o=0;o!==e;++o)r[a++]=n[c+o]}return r}function Ll(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=n[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=n[r++];while(s!==void 0)}class as{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let a;t:{i:if(!(e<r)){for(let c=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===c)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){const c=t[1];e<c&&(i=2,s=c);for(let o=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break n}for(;i<a;){const c=i+a>>>1;e<t[c]?a=c:i=c+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class O0 extends as{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yo,endingEnd:yo}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,a=e+1,c=r[s],o=r[a];if(c===void 0)switch(this.getSettings_().endingStart){case bo:s=e,c=2*t-i;break;case So:s=r.length-2,c=t+r[s]-r[s+1];break;default:s=e,c=i}if(o===void 0)switch(this.getSettings_().endingEnd){case bo:a=e,o=2*i-t;break;case So:a=1,o=i+r[1]-r[0];break;default:a=e-1,o=t}const l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-c),this._weightNext=l/(o-i),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,o=e*c,l=o-c,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(r-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,E=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let D=0;D!==c;++D)s[D]=p*a[u+D]+E*a[l+D]+v*a[o+D]+x*a[h+D];return s}}class z0 extends as{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,o=e*c,l=o-c,u=(i-t)/(r-t),h=1-u;for(let f=0;f!==c;++f)s[f]=a[l+f]*h+a[o+f]*u;return s}}class B0 extends as{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class nn{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=kr(t,this.TimeBufferType),this.values=kr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:kr(e.times,Array),values:kr(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new B0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new z0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new O0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qr:t=this.InterpolantFactoryMethodDiscrete;break;case Oa:t=this.InterpolantFactoryMethodLinear;break;case fs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qr;case this.InterpolantFactoryMethodLinear:return Oa;case this.InterpolantFactoryMethodSmooth:return fs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const c=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*c,a*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let c=0;c!==s;c++){const o=i[c];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,o),e=!1;break}if(a!==null&&a>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,o,a),e=!1;break}a=o}if(r!==void 0&&N0(r))for(let c=0,o=r.length;c!==o;++c){const l=r[c];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===fs,s=e.length-1;let a=1;for(let c=1;c<s;++c){let o=!1;const l=e[c],u=e[c+1];if(l!==u&&(c!==1||l!==e[0]))if(r)o=!0;else{const h=c*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){o=!0;break}}}if(o){if(c!==a){e[a]=e[c];const h=c*i,f=a*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let c=s*i,o=a*i,l=0;l!==i;++l)t[o+l]=t[c+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}nn.prototype.TimeBufferType=Float32Array;nn.prototype.ValueBufferType=Float32Array;nn.prototype.DefaultInterpolation=Oa;class Di extends nn{constructor(e,t,i){super(e,t,i)}}Di.prototype.ValueTypeName="bool";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=qr;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;class Il extends nn{}Il.prototype.ValueTypeName="color";class es extends nn{}es.prototype.ValueTypeName="number";class k0 extends as{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,o=(i-t)/(r-t);let l=e*c;for(let u=l+c;l!==u;l+=4)Ci.slerpFlat(s,0,a,l-c,a,l,o);return s}}class os extends nn{InterpolantFactoryMethodLinear(e){return new k0(this.times,this.values,this.getValueSize(),e)}}os.prototype.ValueTypeName="quaternion";os.prototype.InterpolantFactoryMethodSmooth=void 0;class Ui extends nn{constructor(e,t,i){super(e,t,i)}}Ui.prototype.ValueTypeName="string";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=qr;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;class ts extends nn{}ts.prototype.ValueTypeName="vector";class tM{constructor(e="",t=-1,i=[],r=pu){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Pn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let a=0,c=i.length;a!==c;++a)t.push(H0(i[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=i.length;s!==a;++s)t.push(nn.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,a=[];for(let c=0;c<s;c++){let o=[],l=[];o.push((c+s-1)%s,c,(c+1)%s),l.push(0,1,0);const u=F0(o);o=Pc(o,1,u),l=Pc(l,1,u),!r&&o[0]===0&&(o.push(s),l.push(l[0])),a.push(new es(".morphTargetInfluences["+t[c].name+"]",o,l).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let c=0,o=e.length;c<o;c++){const l=e[c],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(l)}}const a=[];for(const c in r)a.push(this.CreateFromMorphTargetSequence(c,r[c],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];Ll(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},r=[],s=e.name||"default",a=e.fps||30,c=e.blendMode;let o=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let E=0;E!==f[g].morphTargets.length;++E){const v=f[g];m.push(v.time),p.push(v.morphTarget===_?1:0)}r.push(new es(".morphTargetInfluence["+_+"]",m,p))}o=d.length*a}else{const d=".bones["+t[h].name+"]";i(ts,d+".position",f,"pos",r),i(os,d+".quaternion",f,"rot",r),i(ts,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,o,r,c)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function V0(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return es;case"vector":case"vector2":case"vector3":case"vector4":return ts;case"color":return Il;case"quaternion":return os;case"bool":case"boolean":return Di;case"string":return Ui}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function H0(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=V0(n.type);if(n.times===void 0){const t=[],i=[];Ll(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Lc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class G0{constructor(e,t,i){const r=this;let s=!1,a=0,c=0,o;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){c++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,c),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,c),a===c&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return o?o(u):u},this.setURLModifier=function(u){return o=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const W0=new G0;class so{constructor(e){this.manager=e!==void 0?e:W0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}so.DEFAULT_MATERIAL_NAME="__DEFAULT";class X0 extends so{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Lc.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const c=Qi("img");function o(){u(),Lc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){c.removeEventListener("load",o,!1),c.removeEventListener("error",l,!1)}return c.addEventListener("load",o,!1),c.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),s.manager.itemStart(e),c.src=e,c}}class nM extends so{constructor(e){super(e)}load(e,t,i,r){const s=new Mt,a=new X0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(c){s.image=c,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class cs extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class iM extends cs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Xs=new rt,Ic=new P,Dc=new P;class Dl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qa,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ic.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ic),Dc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dc),t.updateMatrixWorld(),Xs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xs),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Uc=new rt,Wi=new P,Zs=new P;class Z0 extends Dl{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Wi.setFromMatrixPosition(e.matrixWorld),i.position.copy(Wi),Zs.copy(i.position),Zs.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Zs),i.updateMatrixWorld(),r.makeTranslation(-Wi.x,-Wi.y,-Wi.z),Uc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uc)}}class rM extends cs{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Z0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Y0 extends Dl{constructor(){super(new _l(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sM extends cs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Y0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class aM extends cs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class oM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Nc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Nc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Nc(){return performance.now()}const ao="\\[\\]\\.:\\/",q0=new RegExp("["+ao+"]","g"),oo="[^"+ao+"]",J0="[^"+ao.replace("\\.","")+"]",K0=/((?:WC+[\/:])*)/.source.replace("WC",oo),$0=/(WCOD+)?/.source.replace("WCOD",J0),j0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oo),Q0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oo),eg=new RegExp("^"+K0+$0+j0+Q0+"$"),tg=["material","materials","bones","map"];class ng{constructor(e,t,i){const r=i||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class at{constructor(e,t,i){this.path=t,this.parsedPath=i||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,i):new at(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(q0,"")}static parseTrackName(e){const t=eg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);tg.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const c=s[a];if(c.name===t||c.uuid===t)return c;const o=i(c.children);if(o)return o}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[r];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}o=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(o=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=ng;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Fc=new rt;class cM{constructor(e,t,i=0,r=1/0){this.ray=new $a(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ja,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Fc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fc),this}intersectObject(e,t=!0,i=[]){return Va(e,this,i,t),i.sort(Oc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Va(e[r],this,i,t);return i.sort(Oc),i}}function Oc(n,e){return n.distance-e.distance}function Va(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,c=s.length;a<c;a++)Va(s[a],e,t,!0)}}class lM{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const zc=new P,Vr=new P;class uM{constructor(e=new P,t=new P){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){zc.subVectors(e,this.start),Vr.subVectors(this.end,this.start);const i=Vr.dot(Vr);let s=Vr.dot(zc)/i;return t&&(s=gt(s,0,1)),s}closestPointToPoint(e,t,i){const r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class hM extends qn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ha}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ha);function se(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},c=n[0].morphTargetsRelative,o=new ke;let l=0;for(let u=0;u<n.length;++u){const h=n[u];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(h.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(c!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;o.addGroup(l,d,u),l+=d}}if(t){let u=0;const h=[];for(let f=0;f<n.length;++f){const d=n[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=n[f].attributes.position.count}o.setIndex(h)}for(const u in s){const h=Bc(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;o.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;o.morphAttributes=o.morphAttributes||{},o.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let _=0;_<a[u].length;++_)d.push(a[u][_][f]);const g=Bc(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;o.morphAttributes[u].push(g)}}return o}function Bc(n){let e,t,i,r=-1,s=0;for(let l=0;l<n.length;++l){const u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const a=new e(s),c=new Ye(a,t,i);let o=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const h=o/t;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<t;g++){const _=u.getComponent(f,g);c.setComponent(f+h,g,_)}}else a.set(u.array,o);o+=u.count*t}return r!==void 0&&(c.gpuType=r),c}const ig={basic:{label:"Basic",types:["cube","slab","slabTop","quarter","quarterTall","halfX","halfZ","halfCorner","step","platform"]},pillars:{label:"Pillars",types:["pillar","pillar2","pillar4","pillarRound","pillarRound2","post","bollard"]},beams:{label:"Beams",types:["beamX","beam2X","beamZ","beam2Z","beamXLow","beam2XLow","beamZLow","beam2ZLow","beamDiag","crossBeam","truss"]},walls:{label:"Walls",types:["wall","wall4","wall8","panel","wallFront","wallBack","wallCorner","wallCornerInner","wallJunction","parapet","crenellation"]},wedges:{label:"Wedges",types:["wedge","wedgeLow","wedgeFlat","wedgeTop","wedgeLowTop","wedgeFlatTop","wedgeCorner","wedgeInner","wedge4x2","wedge4x2Top","wedge2x2","wedge2x2Top","wedgeHalf","wedgeHalfTop","wedgeCornerLow","wedgeCornerFlat"]},triangles:{label:"Triangles",types:["trianglePrism","triangleRight","triangleEqui","tetrahedron","pentahedron"]},stairs:{label:"Stairs",types:["stairs","stairs4","stairs8","stairsCorner","stairsCornerInner","stairsSingle","landing","spiralStep"]},shapes:{label:"Shapes",types:["cylinder","cylinderHalf","cone","sphere","dome","pyramid","octagon","tube","torus","capsule","hemisphere","egg"]},arches:{label:"Arches",types:["arch","archLow","archWide","archHalf","gothicArch","flatArch","keystone"]},pipes:{label:"Pipes",types:["pipeX","pipeY","pipeZ","pipeElbowXZ","pipeElbowXZ2","pipeElbowXZ3","pipeElbowXZ4","pipeElbowXY","pipeElbowXY2","pipeElbowYZ","pipeElbowYZ2","pipeCross","pipeT","pipeTY","pipeTZ","downspout"]},fences:{label:"Fences & Gates",types:["fence","fenceZ","fenceCorner","fenceCornerInner","fencePost","fenceEnd","fenceT","fenceCross","gate","gateOpen","gateDouble","gateArch","railing","railingZ","railingCorner","railingCornerInner","railingPost","railingEnd","railingSlope","railingSlopeZ","picket","picketZ","lattice","latticeZ"]},decorative:{label:"Decorative",types:["cross","frame","prism","lShape","tShape","cShape","star","heart","diamond"]},details:{label:"Details",types:["ledge","gutter","capital","base","windowFrame","doorFrame","cornerTrim","edgeTrim","edgeCorner","edgeSlope","edgeSlopeZ","moldingX","moldingZ","moldingCorner","bracket","trim","trimZ","trimCorner"]},architectural:{label:"Architectural",types:["cornice","column","baluster","windowSill","chimney","buttress","finial","pediment","dentil"]},covers:{label:"Covers",types:["awning","pergola","tarp","umbrella"]},furniture:{label:"Furniture",types:["bench","table","chair","barrel","planter","ladder","stool","bed","desk"]},storage:{label:"Storage",types:["crate","crateOpen","crateLarge","pallet","shelfUnit","locker","cardboardBox","sack","bin","dumpster"]},industrial:{label:"Industrial",types:["tank","valve","vent","iBeam","catwalk","grateFloor","ductX","ductZ","ductCorner","hopper","conveyor"]},electrical:{label:"Electrical",types:["transformer","powerBox","outlet","switchBox","fuseBox","cableX","cableY","cableZ","cableElbow","cableElbowY","cableT","lightFixture","cableHanging","cableDroop","cableLoop","spotlight","bulb"]},natural:{label:"Natural",types:["rock","bush","logX","logZ","stump","boulder","grass","flower","mushroom","mushroomCluster","moss","vine","coral"]},rocks:{label:"Rocks",types:["rock","boulder","rockSmall","rockLarge","rockFlat","rockTall","rockJagged","rockCluster","rockPile","pebbles","slate"]},crystals:{label:"Crystals",types:["crystal","gem","crystalSmall","crystalLarge","crystalCluster","crystalSpike","crystalFlat","crystalShard","crystalFormation"]},cave:{label:"Cave",types:["stalactite","stalagmite","mushroom","mushroomCluster","moss","crystalCluster","crystalFormation"]},modern:{label:"Modern",types:["acUnit","solarPanel","antenna","barrier","trafficCone","sign","monitor","speaker"]},extraShapes:{label:"Extra Shapes",types:["quarterPipe","bowl","hexagon","chamfer","gem","crystal","pill"]},ramps:{label:"Ramps",types:["rampCurved","rampCurvedLow","rampCurvedCorner","rampStraight","rampWide"]},roofs:{label:"Roofs",types:["roofPeak","roofPeakLow","roofHip","slabSlope","slabSlopeTop","roofCorner","roofValley","gable"]},channels:{label:"Channels",types:["channel","channelCorner","channelEnd","drain","grate"]},medieval:{label:"Medieval",types:["merlon","arrowSlit","torch","chain","shield","banner","portcullis"]},vehicles:{label:"Vehicles",types:["wheel","axle","seat","hull","propeller","wing"]},oil:{label:"Oil & Gas",types:["derrickLeg","derrickCross","derrickPlatform","pumpJack","pumpBase","oilTank","oilTankSmall","wellHead","pipelineX","pipelineZ","oilBarrel"]}};function fM(){const n=[];for(const e of Object.values(ig))n.push(...e.types);return n}const dM={cube:{icon:"▢",label:"Cube"},slab:{icon:"▃",label:"Slab"},slabTop:{icon:"▀",label:"Slab Top"},quarter:{icon:"◱",label:"Quarter"},quarterTall:{icon:"◰",label:"Qtr Tall"},halfX:{icon:"▐",label:"Half X"},halfZ:{icon:"▄",label:"Half Z"},halfCorner:{icon:"◼",label:"Half Crn"},pillar:{icon:"▪",label:"Pillar"},pillar2:{icon:"∙",label:"Pillar S"},pillar4:{icon:"·",label:"Pillar XS"},pillarRound:{icon:"◯",label:"Round Pil"},pillarRound2:{icon:"◦",label:"Round S"},beamX:{icon:"═",label:"Beam X"},beam2X:{icon:"─",label:"Beam X S"},beam4X:{icon:"╌",label:"Beam X XS"},beamZ:{icon:"║",label:"Beam Z"},beam2Z:{icon:"│",label:"Beam Z S"},beam4Z:{icon:"╎",label:"Beam Z XS"},beamDiag:{icon:"╲",label:"Beam Diag"},beamXLow:{icon:"▬",label:"Beam X Lo"},beam2XLow:{icon:"―",label:"Beam X LoS"},beamZLow:{icon:"▮",label:"Beam Z Lo"},beam2ZLow:{icon:"┃",label:"Beam Z LoS"},wall:{icon:"▯",label:"Wall"},wall4:{icon:"│",label:"Wall Thin"},wall8:{icon:"┃",label:"Wall XThin"},panel:{icon:"|",label:"Panel"},wallFront:{icon:"▌",label:"Wall Front"},wallBack:{icon:"▐",label:"Wall Back"},wallCorner:{icon:"┐",label:"Corner"},wallCornerInner:{icon:"└",label:"Inner Crn"},wallJunction:{icon:"◤",label:"Junction"},wedge:{icon:"◿",label:"Wedge"},wedgeLow:{icon:"⊿",label:"Wedge Low"},wedgeFlat:{icon:"▱",label:"Wedge Flat"},wedgeTop:{icon:"◺",label:"Wedge Top"},wedgeLowTop:{icon:"⊿",label:"Wdg Low Top"},wedgeFlatTop:{icon:"▱",label:"Wdg Flat Top"},wedgeCorner:{icon:"◢",label:"Wdg Corner"},wedgeInner:{icon:"◣",label:"Wdg Inner"},wedge4x2:{icon:"◿",label:"Wdg 4x2"},wedge4x2Top:{icon:"◺",label:"Wdg 4x2 Top"},wedge2x2:{icon:"◿",label:"Wdg 2x2"},wedge2x2Top:{icon:"◺",label:"Wdg 2x2 Top"},wedgeHalf:{icon:"◿",label:"Wdg Half"},wedgeHalfTop:{icon:"◺",label:"Wdg Half Top"},wedgeCornerLow:{icon:"◢",label:"Wdg Crn Lo"},wedgeCornerFlat:{icon:"◢",label:"Wdg Crn Flat"},stairs:{icon:"⌐",label:"Stairs 2"},stairs4:{icon:"▤",label:"Stairs 4"},stairs8:{icon:"▥",label:"Stairs 8"},stairsCorner:{icon:"⌏",label:"Stair Crn"},stairsCornerInner:{icon:"⌎",label:"Stair Inn"},cylinder:{icon:"○",label:"Cylinder"},cylinderHalf:{icon:"◗",label:"Half Cyl"},cone:{icon:"△",label:"Cone"},sphere:{icon:"●",label:"Sphere"},dome:{icon:"◠",label:"Dome"},pyramid:{icon:"◭",label:"Pyramid"},octagon:{icon:"⬡",label:"Octagon"},tube:{icon:"◎",label:"Tube"},arch:{icon:"∩",label:"Arch"},archLow:{icon:"⌒",label:"Arch Low"},archWide:{icon:"⌢",label:"Arch Wide"},archHalf:{icon:"⌓",label:"Arch Half"},cross:{icon:"✚",label:"Cross"},frame:{icon:"□",label:"Frame"},fence:{icon:"╫",label:"Fence"},fenceZ:{icon:"╪",label:"Fence Z"},railing:{icon:"⊢",label:"Railing"},railingZ:{icon:"⊣",label:"Railing Z"},pipeX:{icon:"━",label:"Pipe X"},pipeY:{icon:"┃",label:"Pipe Y"},pipeZ:{icon:"─",label:"Pipe Z"},pipeElbow:{icon:"┘",label:"Elbow 1"},pipeElbow2:{icon:"└",label:"Elbow 2"},pipeElbow3:{icon:"┌",label:"Elbow 3"},pipeElbow4:{icon:"┐",label:"Elbow 4"},pipeCross:{icon:"┼",label:"Cross"},pipeT:{icon:"┬",label:"T Horiz"},pipeTY:{icon:"⊥",label:"T Vert"},prism:{icon:"▲",label:"Prism"},lShape:{icon:"⌐",label:"L Shape"},tShape:{icon:"⊥",label:"T Shape"},cShape:{icon:"⊏",label:"C Shape"},ledge:{icon:"⌐",label:"Ledge"},gutter:{icon:"⊔",label:"Gutter"},capital:{icon:"⊓",label:"Capital"},base:{icon:"⊔",label:"Base"},windowFrame:{icon:"⊞",label:"Window"},doorFrame:{icon:"⊡",label:"Door"},cornice:{icon:"⌐",label:"Cornice"},column:{icon:"⫿",label:"Column"},baluster:{icon:"⌇",label:"Baluster"},windowSill:{icon:"⌐",label:"Win Sill"},shingle:{icon:"▱",label:"Shingle"},chimney:{icon:"⌓",label:"Chimney"},buttress:{icon:"◢",label:"Buttress"},bench:{icon:"⊔",label:"Bench"},table:{icon:"⊓",label:"Table"},chair:{icon:"⌐",label:"Chair"},barrel:{icon:"⬭",label:"Barrel"},planter:{icon:"⊔",label:"Planter"},ladder:{icon:"⊞",label:"Ladder"},crate:{icon:"▣",label:"Crate"},crateOpen:{icon:"☐",label:"Crate Open"},crateLarge:{icon:"▢",label:"Crate Lrg"},pallet:{icon:"⊟",label:"Pallet"},shelfUnit:{icon:"⊞",label:"Shelf"},locker:{icon:"▣",label:"Locker"},cabinet:{icon:"▤",label:"Cabinet"},cardboardBox:{icon:"□",label:"Cardboard"},sack:{icon:"◠",label:"Sack"},tank:{icon:"⬭",label:"Tank"},valve:{icon:"✱",label:"Valve"},vent:{icon:"⊞",label:"Vent"},iBeam:{icon:"⊥",label:"I-Beam"},catwalk:{icon:"⊟",label:"Catwalk"},transformer:{icon:"⌂",label:"Transform"},powerBox:{icon:"⚡",label:"Power Box"},conduit:{icon:"━",label:"Conduit"},conduitCorner:{icon:"┘",label:"Conduit Crn"},outlet:{icon:"⊡",label:"Outlet"},switchBox:{icon:"⊟",label:"Switch"},fuseBox:{icon:"⊞",label:"Fuse Box"},cable:{icon:"─",label:"Cable"},lightFixture:{icon:"☼",label:"Light"},cableHanging:{icon:"⌒",label:"Cable Sag"},cableDroop:{icon:"⌓",label:"Cable Drop"},cableLoop:{icon:"∞",label:"Cable Coil"},rock:{icon:"●",label:"Rock"},bush:{icon:"❁",label:"Bush"},logX:{icon:"═",label:"Log X"},logZ:{icon:"║",label:"Log Z"},acUnit:{icon:"⊞",label:"AC Unit"},solarPanel:{icon:"⊟",label:"Solar"},antenna:{icon:"⌇",label:"Antenna"},barrier:{icon:"▬",label:"Barrier"},quarterPipe:{icon:"⌒",label:"Qtr Pipe"},bowl:{icon:"◠",label:"Bowl"},hexagon:{icon:"⬡",label:"Hexagon"},roundedCube:{icon:"▢",label:"Rounded"},chamfer:{icon:"◇",label:"Chamfer"},merlon:{icon:"⊓",label:"Merlon"},arrowSlit:{icon:"⊔",label:"Arrow Slit"},torch:{icon:"♨",label:"Torch"},chain:{icon:"⫿",label:"Chain"},rampCurved:{icon:"⌒",label:"Ramp Curved"},rampCurvedLow:{icon:"⌒",label:"Ramp Crv Lo"},rampCurvedCorner:{icon:"◜",label:"Ramp Crv Crn"},roofPeak:{icon:"⌂",label:"Roof Peak"},roofPeakLow:{icon:"⌂",label:"Roof Pk Lo"},roofHip:{icon:"◬",label:"Roof Hip"},slabSlope:{icon:"▱",label:"Slab Slope"},slabSlopeTop:{icon:"▱",label:"Slab Slp Top"},channel:{icon:"⊔",label:"Channel"},channelCorner:{icon:"⌐",label:"Channel Crn"},channelEnd:{icon:"⊓",label:"Channel End"},cubeBevel:{icon:"◇",label:"Cube Bevel"},step:{icon:"▁",label:"Step"},platform:{icon:"▔",label:"Platform"},post:{icon:"┃",label:"Post"},bollard:{icon:"⏺",label:"Bollard"},crossBeam:{icon:"╋",label:"Cross Beam"},truss:{icon:"⋈",label:"Truss"},parapet:{icon:"▄",label:"Parapet"},crenellation:{icon:"⊓⊓",label:"Crenellation"},trianglePrism:{icon:"△",label:"Tri Prism"},triangleRight:{icon:"◿",label:"Tri Right"},triangleEqui:{icon:"▲",label:"Tri Equi"},tetrahedron:{icon:"◬",label:"Tetrahedron"},pentahedron:{icon:"◭",label:"Pentahedron"},stairsSingle:{icon:"⌐",label:"Single Step"},landing:{icon:"▁",label:"Landing"},spiralStep:{icon:"◠",label:"Spiral Step"},torus:{icon:"◎",label:"Torus"},capsule:{icon:"⬬",label:"Capsule"},hemisphere:{icon:"◠",label:"Hemisphere"},egg:{icon:"⬮",label:"Egg"},gothicArch:{icon:"⋀",label:"Gothic Arch"},flatArch:{icon:"⌐",label:"Flat Arch"},keystone:{icon:"⌓",label:"Keystone"},downspout:{icon:"│",label:"Downspout"},star:{icon:"★",label:"Star"},heart:{icon:"♥",label:"Heart"},diamond:{icon:"◆",label:"Diamond"},cornerTrim:{icon:"⌐",label:"Corner Trim"},edgeTrim:{icon:"─",label:"Edge Trim"},moldingX:{icon:"═",label:"Molding X"},moldingZ:{icon:"║",label:"Molding Z"},bracket:{icon:"⌐",label:"Bracket"},finial:{icon:"♦",label:"Finial"},pediment:{icon:"⌂",label:"Pediment"},dentil:{icon:"▪",label:"Dentil"},awning:{icon:"⌒",label:"Awning"},canopy:{icon:"▔",label:"Canopy"},pergola:{icon:"≡",label:"Pergola"},tarp:{icon:"▭",label:"Tarp"},umbrella:{icon:"☂",label:"Umbrella"},stool:{icon:"⌓",label:"Stool"},shelf:{icon:"▁",label:"Shelf"},bed:{icon:"▭",label:"Bed"},desk:{icon:"⊓",label:"Desk"},bin:{icon:"⊔",label:"Bin"},dumpster:{icon:"▣",label:"Dumpster"},grateFloor:{icon:"⊞",label:"Grate Floor"},ductX:{icon:"═",label:"Duct X"},ductZ:{icon:"║",label:"Duct Z"},ductCorner:{icon:"╔",label:"Duct Corner"},hopper:{icon:"▽",label:"Hopper"},conveyor:{icon:"═",label:"Conveyor"},spotlight:{icon:"◉",label:"Spotlight"},bulb:{icon:"●",label:"Bulb"},stump:{icon:"◯",label:"Stump"},boulder:{icon:"◎",label:"Boulder"},grass:{icon:"⌇",label:"Grass"},flower:{icon:"✿",label:"Flower"},trafficCone:{icon:"▲",label:"Traffic Cone"},sign:{icon:"⊤",label:"Sign"},monitor:{icon:"▢",label:"Monitor"},speaker:{icon:"◉",label:"Speaker"},gem:{icon:"◇",label:"Gem"},crystal:{icon:"◇",label:"Crystal"},pill:{icon:"⬬",label:"Pill"},rampStraight:{icon:"⌒",label:"Ramp Straight"},rampWide:{icon:"⌒",label:"Ramp Wide"},roofCorner:{icon:"◢",label:"Roof Corner"},roofValley:{icon:"◣",label:"Roof Valley"},gable:{icon:"△",label:"Gable"},drain:{icon:"◎",label:"Drain"},grate:{icon:"⊞",label:"Grate"},shield:{icon:"⛊",label:"Shield"},banner:{icon:"⚐",label:"Banner"},portcullis:{icon:"⊞",label:"Portcullis"},wheel:{icon:"◎",label:"Wheel"},axle:{icon:"─",label:"Axle"},seat:{icon:"⌐",label:"Seat"},hull:{icon:"⌒",label:"Hull"},propeller:{icon:"✳",label:"Propeller"},wing:{icon:"▷",label:"Wing"},derrickLeg:{icon:"╱",label:"Derrick Leg"},derrickCross:{icon:"╳",label:"Derrick X"},derrickPlatform:{icon:"▭",label:"Derrick Plat"},pumpJack:{icon:"⌓",label:"Pump Jack"},pumpBase:{icon:"▭",label:"Pump Base"},oilTank:{icon:"⬭",label:"Oil Tank"},oilTankSmall:{icon:"⬮",label:"Tank Small"},wellHead:{icon:"⊥",label:"Well Head"},pipelineX:{icon:"═",label:"Pipeline X"},pipelineZ:{icon:"║",label:"Pipeline Z"},oilBarrel:{icon:"⬭",label:"Oil Barrel"},pipeElbowXZ:{icon:"┘",label:"Elbow XZ 1"},pipeElbowXZ2:{icon:"└",label:"Elbow XZ 2"},pipeElbowXZ3:{icon:"┌",label:"Elbow XZ 3"},pipeElbowXZ4:{icon:"┐",label:"Elbow XZ 4"},pipeElbowXY:{icon:"⌐",label:"Elbow XY"},pipeElbowXY2:{icon:"⌐",label:"Elbow XY 2"},pipeElbowYZ:{icon:"⌐",label:"Elbow YZ"},pipeElbowYZ2:{icon:"⌐",label:"Elbow YZ 2"},pipeTZ:{icon:"⊤",label:"T Pipe Z"},conduitX:{icon:"━",label:"Conduit X"},conduitY:{icon:"┃",label:"Conduit Y"},conduitZ:{icon:"─",label:"Conduit Z"},conduitElbow:{icon:"┘",label:"Cond Elbow"},conduitElbowY:{icon:"⌐",label:"Cond Elbow Y"},conduitT:{icon:"┬",label:"Conduit T"},cableX:{icon:"─",label:"Cable X"},cableY:{icon:"│",label:"Cable Y"},cableZ:{icon:"─",label:"Cable Z"},cableElbow:{icon:"┘",label:"Cable Elbow"},cableElbowY:{icon:"⌐",label:"Cable Elbow Y"},cableT:{icon:"┬",label:"Cable T"},rockSmall:{icon:"◦",label:"Rock Small"},rockLarge:{icon:"◎",label:"Rock Large"},rockFlat:{icon:"▭",label:"Rock Flat"},rockTall:{icon:"▮",label:"Rock Tall"},rockJagged:{icon:"◬",label:"Rock Jagged"},rockCluster:{icon:"◎◎",label:"Rock Cluster"},rockPile:{icon:"◉",label:"Rock Pile"},pebbles:{icon:"∴",label:"Pebbles"},slate:{icon:"▭",label:"Slate"},crystalSmall:{icon:"◇",label:"Crystal Small"},crystalLarge:{icon:"◆",label:"Crystal Large"},crystalCluster:{icon:"◇◇",label:"Crystal Cluster"},crystalSpike:{icon:"▲",label:"Crystal Spike"},crystalFlat:{icon:"⬡",label:"Crystal Flat"},crystalShard:{icon:"◇",label:"Crystal Shard"},crystalFormation:{icon:"◆◇",label:"Crystal Form"},stalactite:{icon:"▼",label:"Stalactite"},stalagmite:{icon:"▲",label:"Stalagmite"},mushroom:{icon:"🍄",label:"Mushroom"},mushroomCluster:{icon:"🍄🍄",label:"Mushroom Clst"},moss:{icon:"≈",label:"Moss"},vine:{icon:"⌇",label:"Vine"},coral:{icon:"⚘",label:"Coral"}},rg={cube:1,slab:.5,slabTop:.5,quarter:.5,quarterTall:1,halfX:1,halfZ:1,halfCorner:1,pillar:1,pillar2:1,pillar4:1,pillarRound:1,pillarRound2:1,beamX:.5,beam2X:.25,beam4X:.125,beamZ:.5,beam2Z:.25,beam4Z:.125,beamDiag:.25,beamXLow:.5,beam2XLow:.25,beamZLow:.5,beam2ZLow:.25,wall:1,wall4:1,wall8:1,panel:1,wallFront:1,wallBack:1,wallCorner:1,wallCornerInner:1,wallJunction:1,wedge:1,wedgeLow:.5,wedgeFlat:.25,wedgeTop:1,wedgeLowTop:.5,wedgeFlatTop:.25,wedgeCorner:1,wedgeInner:1,wedge4x2:1,wedge4x2Top:1,wedge2x2:1,wedge2x2Top:1,wedgeHalf:1,wedgeHalfTop:1,wedgeCornerLow:.5,wedgeCornerFlat:.25,rampCurved:1,rampCurvedLow:.5,rampCurvedCorner:1,roofPeak:1,roofPeakLow:.5,roofHip:1,slabSlope:.25,slabSlopeTop:.25,channel:.5,channelCorner:.5,channelEnd:.5,cubeBevel:1,stairs:1,stairs4:1,stairs8:1,stairsCorner:1,stairsCornerInner:1,cylinder:1,cylinderHalf:1,cone:1,sphere:1,dome:.5,pyramid:1,octagon:1,tube:1,arch:1,archLow:.5,archWide:1,archHalf:1,cross:1,frame:1,fence:1,fenceZ:1,fenceCorner:1,fenceCornerInner:1,fencePost:1,fenceEnd:1,fenceT:1,fenceCross:1,gate:1,gateOpen:1,gateDouble:1,gateArch:1,railing:1,railingZ:1,railingCorner:1,railingCornerInner:1,railingPost:1,railingEnd:1,railingSlope:1,railingSlopeZ:1,picket:1,picketZ:1,lattice:1,latticeZ:1,edgeCorner:.25,edgeSlope:.25,edgeSlopeZ:.25,moldingCorner:.125,trim:.125,trimZ:.125,trimCorner:.125,pipeX:1,pipeY:1,pipeZ:1,pipeElbowXZ:1,pipeElbowXZ2:1,pipeElbowXZ3:1,pipeElbowXZ4:1,pipeElbowXY:1,pipeElbowXY2:1,pipeElbowYZ:1,pipeElbowYZ2:1,pipeTZ:1,pipeCross:1,pipeT:1,pipeTY:1,prism:1,lShape:1,tShape:1,cShape:1,ledge:.25,gutter:.25,capital:.25,base:.25,windowFrame:1,doorFrame:1,cornice:.25,column:1,baluster:1,windowSill:.25,shingle:.25,chimney:1,buttress:1,bench:.5,table:.75,chair:1,barrel:1,planter:.5,ladder:1,crate:1,crateOpen:1,crateLarge:1,pallet:.125,shelfUnit:1,locker:1,cabinet:1,cardboardBox:.75,sack:.5,tank:1,valve:.5,vent:.25,iBeam:1,catwalk:.25,transformer:1,powerBox:.5,conduitX:1,conduitY:1,conduitZ:1,conduitElbow:1,conduitElbowY:1,conduitT:1,outlet:.125,switchBox:.25,fuseBox:.5,cableX:1,cableY:1,cableZ:1,cableElbow:1,cableElbowY:1,cableT:1,lightFixture:.25,cableHanging:1,cableDroop:1,cableLoop:1,rock:.75,bush:.75,logX:.5,logZ:.5,stump:.5,boulder:.75,grass:.25,flower:.5,rockSmall:.5,rockLarge:.85,rockFlat:.3,rockTall:1,rockJagged:.85,rockCluster:.6,rockPile:.5,pebbles:.15,slate:.25,crystalSmall:.5,crystalLarge:1,crystalCluster:.75,crystalSpike:1,crystalFlat:.4,crystalShard:.75,crystalFormation:1,stalactite:.8,stalagmite:.7,mushroom:.5,mushroomCluster:.5,moss:.15,vine:.8,coral:.6,acUnit:.75,solarPanel:.25,antenna:1,barrier:.75,quarterPipe:1,bowl:.5,hexagon:1,roundedCube:1,chamfer:1,merlon:.5,arrowSlit:1,torch:.75,chain:1,shield:.125,banner:1,portcullis:1,step:.25,platform:.125,post:1,bollard:.75,crossBeam:.25,truss:1,parapet:.5,crenellation:.5,trianglePrism:1,triangleRight:1,triangleEqui:1,tetrahedron:1,pentahedron:1,stairsSingle:.25,landing:.25,spiralStep:.25,torus:.5,capsule:1,hemisphere:.5,egg:1,gothicArch:1,flatArch:.25,keystone:.5,downspout:1,star:.25,heart:.5,diamond:1,cornerTrim:1,edgeTrim:.25,moldingX:.125,moldingZ:.125,bracket:.5,finial:.75,pediment:.5,dentil:.25,awning:.25,canopy:.125,pergola:.25,tarp:.0625,umbrella:.75,stool:.5,shelf:.125,bed:.5,desk:.75,bin:.75,dumpster:1,grateFloor:.125,ductX:.5,ductZ:.5,ductCorner:.5,hopper:1,conveyor:.25,spotlight:.5,bulb:.25,stump:.5,boulder:.75,grass:.25,flower:.5,trafficCone:.75,sign:1,monitor:.75,speaker:.5,gem:.75,crystal:1,pill:.5,rampStraight:1,rampWide:1,roofCorner:1,roofValley:1,gable:1,drain:.25,grate:.125,wheel:1,axle:.25,seat:.5,hull:.5,propeller:.25,wing:.125,derrickLeg:1,derrickCross:.25,derrickPlatform:.25,pumpJack:1,pumpBase:.25,oilTank:1,oilTankSmall:.5,wellHead:.5,pipelineX:.5,pipelineZ:.5,oilBarrel:1},sg={slabTop:.5,beamX:.25,beam2X:.375,beam4X:.4375,beamZ:.25,beam2Z:.375,beam4Z:.4375,beamDiag:.375,wedgeTop:0,wedgeLowTop:.5,wedgeFlatTop:.75,wedge4x2Top:0,wedge2x2Top:0,wedgeHalfTop:0,slabSlopeTop:.75,ledge:.75,capital:.75},pM={cube:n=>new S(n.w,n.h,n.d),slab:n=>new S(n.w,n.h/2,n.d),slabTop:n=>new S(n.w,n.h/2,n.d),pillar:n=>new S(n.w/2,n.h,n.d/2),pillar2:n=>new S(n.w/4,n.h,n.d/4),pillar4:n=>new S(n.w/8,n.h,n.d/8),beamX:n=>new S(n.w,n.h/2,n.d/2),beam2X:n=>new S(n.w,n.h/4,n.d/4),beam4X:n=>new S(n.w,n.h/8,n.d/8),beamZ:n=>new S(n.w/2,n.h/2,n.d),beam2Z:n=>new S(n.w/4,n.h/4,n.d),beam4Z:n=>new S(n.w/8,n.h/8,n.d),wall:n=>new S(n.w,n.h,n.d/2),wall4:n=>new S(n.w,n.h,n.d/4),wall8:n=>new S(n.w,n.h,n.d/8),panel:n=>new S(n.w,n.h,n.d/16),wallFront:n=>{const e=new S(n.w,n.h,n.d/4);return e.translate(0,0,n.d/2-n.d/8),e},wallBack:n=>{const e=new S(n.w,n.h,n.d/4);return e.translate(0,0,-n.d/2+n.d/8),e},wedge:n=>$t(n.w,n.h,n.d,1),wedgeLow:n=>$t(n.w,n.h/2,n.d,1),wedgeFlat:n=>$t(n.w,n.h/4,n.d,1),wedgeTop:n=>zn(n.w,n.h,n.d,1),wedgeLowTop:n=>zn(n.w,n.h/2,n.d,1),wedgeFlatTop:n=>zn(n.w,n.h/4,n.d,1),wedgeCorner:n=>Ys(n.w,n.h,n.d),wedge4x2:n=>$t(n.w*4,n.h,n.d*2,1),wedge4x2Top:n=>zn(n.w*4,n.h,n.d*2,1),wedge2x2:n=>$t(n.w*2,n.h,n.d*2,1),wedge2x2Top:n=>zn(n.w*2,n.h,n.d*2,1),wedgeHalf:n=>$t(n.w/2,n.h,n.d,1),wedgeHalfTop:n=>zn(n.w/2,n.h,n.d,1),wedgeCornerLow:n=>Ys(n.w,n.h/2,n.d),wedgeCornerFlat:n=>Ys(n.w,n.h/4,n.d),stairs:n=>qs(n.w,n.h,n.d,2),stairs4:n=>qs(n.w,n.h,n.d,4),stairs8:n=>qs(n.w,n.h,n.d,8),cylinder:n=>{const e=Math.min(n.w,n.d)/2;return new ue(e,e,n.h,16)},cylinderHalf:n=>{const e=Math.min(n.w,n.d)/2;return new ue(e,e,n.h,16,1,!1,0,Math.PI)},cone:n=>{const e=Math.min(n.w,n.d)/2;return new bt(e,n.h,16)},sphere:n=>{const e=Math.min(n.w,n.h,n.d)/2;return new ut(e,16,12)},dome:n=>{const e=Math.min(n.w,n.d)/2;return new ut(e,16,8,0,Math.PI*2,0,Math.PI/2)},quarter:n=>new S(n.w/2,n.h/2,n.d/2),quarterTall:n=>new S(n.w/2,n.h,n.d/2),halfX:n=>new S(n.w/2,n.h,n.d),halfZ:n=>new S(n.w,n.h,n.d/2),halfCorner:n=>new S(n.w/2,n.h,n.d/2),pillarRound:n=>{const e=Math.min(n.w,n.d)/4;return new ue(e,e,n.h,12)},pillarRound2:n=>{const e=Math.min(n.w,n.d)/8;return new ue(e,e,n.h,8)},beamDiag:n=>Y_(n.w,n.h/4,n.d/4),beamXLow:n=>new S(n.w,n.h/2,n.d/2),beam2XLow:n=>new S(n.w,n.h/4,n.d/4),beamZLow:n=>new S(n.w/2,n.h/2,n.d),beam2ZLow:n=>new S(n.w/4,n.h/4,n.d),arch:n=>Js(n.w,n.h,n.d,1),archLow:n=>Js(n.w,n.h,n.d,.5),archWide:n=>Js(n.w,n.h,n.d,.3),archHalf:n=>j_(n.w,n.h,n.d),wallCorner:n=>Vc(n.w,n.h,n.d,!1),wallCornerInner:n=>Vc(n.w,n.h,n.d,!0),wallJunction:n=>q_(n.w,n.h,n.d),wedgeInner:n=>J_(n.w,n.h,n.d),stairsCorner:n=>Hc(n.w,n.h,n.d,!1),stairsCornerInner:n=>Hc(n.w,n.h,n.d,!0),pyramid:n=>K_(n.w,n.h,n.d),octagon:n=>{const e=Math.min(n.w,n.d)/2;return new ue(e,e,n.h,8)},tube:n=>$_(n.w,n.h,n.d),cross:n=>ag(n.w,n.h,n.d),frame:n=>og(n.w,n.h,n.d),fence:n=>cg(n.w,n.h,n.d),fenceZ:n=>lg(n.w,n.h,n.d),fenceCorner:n=>fg(n.w,n.h,n.d),fenceCornerInner:n=>dg(n.w,n.h,n.d),fencePost:n=>pg(n.w,n.h,n.d),fenceEnd:n=>mg(n.w,n.h,n.d),fenceT:n=>gg(n.w,n.h,n.d),fenceCross:n=>_g(n.w,n.h,n.d),gate:n=>xg(n.w,n.h,n.d),gateOpen:n=>vg(n.w,n.h,n.d),gateDouble:n=>Mg(n.w,n.h,n.d),gateArch:n=>yg(n.w,n.h,n.d),railing:n=>ug(n.w,n.h,n.d),railingZ:n=>hg(n.w,n.h,n.d),railingCorner:n=>bg(n.w,n.h,n.d),railingCornerInner:n=>Sg(n.w,n.h,n.d),railingPost:n=>Eg(n.w,n.h,n.d),railingEnd:n=>wg(n.w,n.h,n.d),railingSlope:n=>Tg(n.w,n.h,n.d),railingSlopeZ:n=>Ag(n.w,n.h,n.d),picket:n=>Cg(n.w,n.h,n.d),picketZ:n=>Rg(n.w,n.h,n.d),lattice:n=>Pg(n.w,n.h,n.d),latticeZ:n=>Lg(n.w,n.h,n.d),edgeCorner:n=>Ig(n.w,n.h,n.d),edgeSlope:n=>Dg(n.w,n.h,n.d),edgeSlopeZ:n=>Ug(n.w,n.h,n.d),moldingCorner:n=>Ng(n.w,n.h,n.d),trim:n=>Fg(n.w,n.h,n.d),trimZ:n=>Og(n.w,n.h,n.d),trimCorner:n=>zg(n.w,n.h,n.d),pipeX:n=>Ks(n.w,n.h,n.d,"X"),pipeY:n=>Ks(n.w,n.h,n.d,"Y"),pipeZ:n=>Ks(n.w,n.h,n.d,"Z"),pipeElbowXZ:n=>wn(n.w,n.h,n.d,"XZ",0),pipeElbowXZ2:n=>wn(n.w,n.h,n.d,"XZ",1),pipeElbowXZ3:n=>wn(n.w,n.h,n.d,"XZ",2),pipeElbowXZ4:n=>wn(n.w,n.h,n.d,"XZ",3),pipeElbowXY:n=>wn(n.w,n.h,n.d,"XY",0),pipeElbowXY2:n=>wn(n.w,n.h,n.d,"XY",1),pipeElbowYZ:n=>wn(n.w,n.h,n.d,"YZ",0),pipeElbowYZ2:n=>wn(n.w,n.h,n.d,"YZ",1),pipeCross:n=>Bg(n.w,n.h,n.d),pipeT:n=>$s(n.w,n.h,n.d),pipeTY:n=>$s(n.w,n.h,n.d),pipeTZ:n=>$s(n.w,n.h,n.d),prism:n=>Z_(n.w,n.h,n.d),lShape:n=>Q_(n.w,n.h,n.d),tShape:n=>ex(n.w,n.h,n.d),cShape:n=>tx(n.w,n.h,n.d),ledge:n=>nx(n.w,n.h*.25,n.d),gutter:n=>ix(n.w,n.h*.25,n.d),capital:n=>rx(n.w,n.h*.25,n.d),base:n=>sx(n.w,n.h*.25,n.d),windowFrame:n=>ax(n.w,n.h,n.d),doorFrame:n=>ox(n.w,n.h,n.d),cornice:n=>kg(n.w,n.h,n.d),column:n=>Vg(n.w,n.h,n.d),baluster:n=>Hg(n.w,n.h,n.d),windowSill:n=>Gg(n.w,n.h,n.d),shingle:n=>Wg(n.w,n.h,n.d),chimney:n=>Xg(n.w,n.h,n.d),buttress:n=>Zg(n.w,n.h,n.d),bench:n=>Yg(n.w,n.h,n.d),table:n=>qg(n.w,n.h,n.d),chair:n=>Jg(n.w,n.h,n.d),barrel:n=>Kg(n.w,n.h,n.d),planter:n=>a_(n.w,n.h,n.d),ladder:n=>o_(n.w,n.h,n.d),crate:n=>$g(n.w,n.h,n.d),crateOpen:n=>jg(n.w,n.h,n.d),crateLarge:n=>Qg(n.w,n.h,n.d),pallet:n=>e_(n.w,n.h,n.d),shelfUnit:n=>t_(n.w,n.h,n.d),locker:n=>n_(n.w,n.h,n.d),cabinet:n=>i_(n.w,n.h,n.d),cardboardBox:n=>r_(n.w,n.h,n.d),sack:n=>s_(n.w,n.h,n.d),tank:n=>c_(n.w,n.h,n.d),valve:n=>l_(n.w,n.h,n.d),vent:n=>u_(n.w,n.h,n.d),iBeam:n=>h_(n.w,n.h,n.d),catwalk:n=>f_(n.w,n.h,n.d),transformer:n=>d_(n.w,n.h,n.d),powerBox:n=>p_(n.w,n.h,n.d),conduit:n=>m_(n.w,n.h,n.d),conduitCorner:n=>g_(n.w,n.h,n.d),outlet:n=>__(n.w,n.h,n.d),switchBox:n=>x_(n.w,n.h,n.d),fuseBox:n=>v_(n.w,n.h,n.d),cable:n=>M_(n.w,n.h,n.d),lightFixture:n=>A_(n.w,n.h,n.d),cableHanging:n=>C_(n.w,n.h,n.d),cableDroop:n=>R_(n.w,n.h,n.d),cableLoop:n=>P_(n.w,n.h,n.d),cableX:n=>y_(n.w,n.h,n.d),cableY:n=>b_(n.w,n.h,n.d),cableZ:n=>S_(n.w,n.h,n.d),cableElbow:n=>E_(n.w,n.h,n.d),cableElbowY:n=>w_(n.w,n.h,n.d),cableT:n=>T_(n.w,n.h,n.d),rock:n=>L_(n.w,n.h,n.d),bush:n=>I_(n.w,n.h,n.d),logX:n=>kc(n.w,n.h,n.d,"X"),logZ:n=>kc(n.w,n.h,n.d,"Z"),acUnit:n=>D_(n.w,n.h,n.d),solarPanel:n=>U_(n.w,n.h,n.d),antenna:n=>N_(n.w,n.h,n.d),barrier:n=>F_(n.w,n.h,n.d),quarterPipe:n=>O_(n.w,n.h,n.d),bowl:n=>z_(n.w,n.h,n.d),hexagon:n=>B_(n.w,n.h,n.d),roundedCube:n=>k_(n.w,n.h,n.d),chamfer:n=>V_(n.w,n.h,n.d),merlon:n=>H_(n.w,n.h,n.d),arrowSlit:n=>G_(n.w,n.h,n.d),torch:n=>W_(n.w,n.h,n.d),chain:n=>X_(n.w,n.h,n.d),rampCurved:n=>Gc(n.w,n.h,n.d),rampCurvedLow:n=>Gc(n.w,n.h/2,n.d),rampCurvedCorner:n=>cx(n.w,n.h,n.d),roofPeak:n=>Wc(n.w,n.h,n.d),roofPeakLow:n=>Wc(n.w,n.h/2,n.d),roofHip:n=>lx(n.w,n.h,n.d),slabSlope:n=>$t(n.w,n.h/4,n.d,1),slabSlopeTop:n=>zn(n.w,n.h/4,n.d,1),channel:n=>ux(n.w,n.h/2,n.d),channelCorner:n=>hx(n.w,n.h/2,n.d),channelEnd:n=>fx(n.w,n.h/2,n.d),cubeBevel:n=>dx(n.w,n.h,n.d),step:n=>new S(n.w,n.h*.25,n.d),platform:n=>new S(n.w,n.h*.125,n.d),post:n=>new S(n.w*.25,n.h,n.d*.25),bollard:n=>new ue(n.w*.2,n.w*.25,n.h*.75,8),crossBeam:n=>mx(n.w,n.h,n.d),truss:n=>gx(n.w,n.h,n.d),parapet:n=>new S(n.w,n.h*.5,n.d*.25),crenellation:n=>_x(n.w,n.h,n.d),trianglePrism:n=>ls(n.w,n.h,n.d),triangleRight:n=>xx(n.w,n.h,n.d),triangleEqui:n=>vx(n.w,n.h,n.d),tetrahedron:n=>new ro(Math.min(n.w,n.h,n.d)*.6),pentahedron:n=>Mx(n.w,n.h,n.d),stairsSingle:n=>new S(n.w,n.h*.25,n.d*.5),landing:n=>new S(n.w,n.h*.25,n.d),spiralStep:n=>yx(n.w,n.h,n.d),torus:n=>new Nt(Math.min(n.w,n.d)*.35,Math.min(n.w,n.d)*.1,8,16),capsule:n=>new Qr(Math.min(n.w,n.d)*.3,n.h*.5,4,8),hemisphere:n=>bx(n.w,n.h,n.d),egg:n=>Sx(n.w,n.h,n.d),gothicArch:n=>Ex(n.w,n.h,n.d),flatArch:n=>wx(n.w,n.h,n.d),keystone:n=>Tx(n.w,n.h,n.d),downspout:n=>new ue(n.w*.15,n.w*.15,n.h,8),star:n=>Ax(n.w,n.h,n.d),heart:n=>Cx(n.w,n.h,n.d),diamond:n=>new Pt(Math.min(n.w,n.h,n.d)*.5),cornerTrim:n=>Rx(n.w,n.h,n.d),edgeTrim:n=>new S(n.w,n.h*.25,n.d*.125),moldingX:n=>Xc(n.w,n.h*.125,n.d*.125),moldingZ:n=>Xc(n.d,n.h*.125,n.w*.125),bracket:n=>Px(n.w,n.h,n.d),finial:n=>Lx(n.w,n.h,n.d),pediment:n=>Ix(n.w,n.h,n.d),dentil:n=>new S(n.w*.2,n.h*.25,n.d*.5),awning:n=>Dx(n.w,n.h,n.d),canopy:n=>new S(n.w,n.h*.125,n.d),pergola:n=>Ux(n.w,n.h,n.d),tarp:n=>new rr(n.w,n.d),umbrella:n=>Nx(n.w,n.h,n.d),stool:n=>Fx(n.w,n.h,n.d),shelf:n=>new S(n.w,n.h*.125,n.d*.8),bed:n=>Ox(n.w,n.h,n.d),desk:n=>zx(n.w,n.h,n.d),bin:n=>Bx(n.w,n.h,n.d),dumpster:n=>kx(n.w,n.h,n.d),grateFloor:n=>Vx(n.w,n.h,n.d),ductX:n=>new S(n.w,n.h*.5,n.d*.5),ductZ:n=>new S(n.w*.5,n.h*.5,n.d),ductCorner:n=>Hx(n.w,n.h,n.d),hopper:n=>Gx(n.w,n.h,n.d),conveyor:n=>Wx(n.w,n.h,n.d),spotlight:n=>Xx(n.w,n.h,n.d),bulb:n=>new ut(Math.min(n.w,n.d)*.3,8,6),stump:n=>new ue(n.w*.35,n.w*.4,n.h*.5,8),boulder:n=>Zx(n.w,n.h,n.d),grass:n=>Yx(n.w,n.h,n.d),flower:n=>qx(n.w,n.h,n.d),rockSmall:n=>Mv(n.w,n.h,n.d),rockLarge:n=>yv(n.w,n.h,n.d),rockFlat:n=>bv(n.w,n.h,n.d),rockTall:n=>Sv(n.w,n.h,n.d),rockJagged:n=>Ev(n.w,n.h,n.d),rockCluster:n=>wv(n.w,n.h,n.d),rockPile:n=>Tv(n.w,n.h,n.d),pebbles:n=>Av(n.w,n.h,n.d),slate:n=>Cv(n.w,n.h,n.d),crystalSmall:n=>Rv(n.w,n.h,n.d),crystalLarge:n=>Pv(n.w,n.h,n.d),crystalCluster:n=>Lv(n.w,n.h,n.d),crystalSpike:n=>Iv(n.w,n.h,n.d),crystalFlat:n=>Dv(n.w,n.h,n.d),crystalShard:n=>Uv(n.w,n.h,n.d),crystalFormation:n=>Nv(n.w,n.h,n.d),stalactite:n=>Fv(n.w,n.h,n.d),stalagmite:n=>Ov(n.w,n.h,n.d),mushroom:n=>zv(n.w,n.h,n.d),mushroomCluster:n=>Bv(n.w,n.h,n.d),moss:n=>kv(n.w,n.h,n.d),vine:n=>Vv(n.w,n.h,n.d),coral:n=>Hv(n.w,n.h,n.d),trafficCone:n=>new bt(n.w*.3,n.h*.75,8),sign:n=>Jx(n.w,n.h,n.d),monitor:n=>Kx(n.w,n.h,n.d),speaker:n=>$x(n.w,n.h,n.d),gem:n=>jx(n.w,n.h,n.d),crystal:n=>Qx(n.w,n.h,n.d),pill:n=>new Qr(Math.min(n.w,n.d)*.25,n.h*.25,4,8),rampStraight:n=>$t(n.w,n.h,n.d,1),rampWide:n=>$t(n.w*2,n.h,n.d,1),roofCorner:n=>ev(n.w,n.h,n.d),roofValley:n=>tv(n.w,n.h,n.d),gable:n=>nv(n.w,n.h,n.d),drain:n=>iv(n.w,n.h,n.d),grate:n=>rv(n.w,n.h,n.d),shield:n=>sv(n.w,n.h,n.d),banner:n=>av(n.w,n.h,n.d),portcullis:n=>ov(n.w,n.h,n.d),wheel:n=>new Nt(Math.min(n.w,n.d)*.4,Math.min(n.w,n.d)*.1,8,16),axle:n=>new ue(n.w*.05,n.w*.05,n.d,8),seat:n=>cv(n.w,n.h,n.d),hull:n=>lv(n.w,n.h,n.d),propeller:n=>uv(n.w,n.h,n.d),wing:n=>hv(n.w,n.h,n.d),derrickLeg:n=>fv(n.w,n.h,n.d),derrickCross:n=>dv(n.w,n.h,n.d),derrickPlatform:n=>pv(n.w,n.h,n.d),pumpJack:n=>mv(n.w,n.h,n.d),pumpBase:n=>new S(n.w*.8,n.h*.25,n.d*.6),oilTank:n=>gv(n.w,n.h,n.d),oilTankSmall:n=>_v(n.w,n.h,n.d),wellHead:n=>xv(n.w,n.h,n.d),pipelineX:n=>new ue(n.h*.3,n.h*.3,n.w,12).rotateZ(Math.PI/2),pipelineZ:n=>new ue(n.h*.3,n.h*.3,n.d,12).rotateX(Math.PI/2),oilBarrel:n=>vv(n.w,n.h,n.d)};function $t(n,e,t,i=1){const r=n/2,s=e/2,a=t/2,c=new Float32Array([r,-s,a,r,-s,-a,r,s,-a,-r,-s,-a,-r,-s,a,-r,s,-a,0,s,0,0,s,0,0,s,0,-r,-s,-a,r,-s,-a,r,-s,a,-r,-s,-a,r,-s,a,-r,-s,a,-r,-s,a,r,-s,a,r,s,-a,-r,-s,a,r,s,-a,-r,s,-a,-r,-s,-a,-r,s,-a,r,-s,-a,r,-s,-a,-r,s,-a,r,s,-a]),o=new ke;return o.setAttribute("position",new Ye(c,3)),o.addGroup(0,3,0),o.addGroup(3,3,1),o.addGroup(6,3,2),o.addGroup(9,6,3),o.addGroup(15,6,4),o.addGroup(21,6,5),o.computeVertexNormals(),o}function zn(n,e,t,i=1){const r=n/2,s=e/2,a=t/2,c=new Float32Array([r,s,a,r,-s,a,r,s,-a,-r,s,-a,-r,s,a,-r,-s,a,-r,s,-a,r,s,a,r,s,-a,-r,s,-a,-r,s,a,r,s,a,0,-s,0,0,-s,0,0,-s,0,-r,-s,a,r,-s,a,r,s,a,-r,-s,a,r,s,a,-r,s,a,-r,s,-a,-r,-s,a,r,-s,a,-r,s,-a,r,-s,a,r,s,-a]),o=new ke;return o.setAttribute("position",new Ye(c,3)),o.addGroup(0,3,0),o.addGroup(3,3,1),o.addGroup(6,6,2),o.addGroup(12,3,3),o.addGroup(15,6,4),o.addGroup(21,6,5),o.computeVertexNormals(),o}function Ys(n,e,t){const i=n/2,r=e/2,s=t/2,a=new Float32Array([i,-r,-s,i,r,-s,i,-r,s,0,0,0,0,0,0,0,0,0,0,r,0,0,r,0,0,r,0,-i,-r,-s,i,-r,-s,i,-r,s,-i,-r,-s,i,-r,s,-i,-r,s,-i,-r,-s,-i,-r,s,i,r,-s,-i,-r,s,i,-r,s,i,r,-s,-i,-r,-s,i,r,-s,i,-r,-s]),c=new ke;return c.setAttribute("position",new Ye(a,3)),c.addGroup(0,3,0),c.addGroup(3,3,1),c.addGroup(6,3,2),c.addGroup(9,6,3),c.addGroup(15,6,4),c.addGroup(21,3,5),c.computeVertexNormals(),c}function qs(n,e,t,i){const r=e/i,s=t/i,a=[];for(let o=0;o<i;o++){const l=r*(o+1),u=new S(n,l,s),h=l/2-e/2,f=t/2-s/2-o*s;u.translate(0,h,f),a.push(u)}const c=se(a);return a.forEach(o=>o.dispose()),c}function Le(n){if(!n||n.length===0)return new S(1,1,1);try{const e=n.map(i=>{if(!i)return new S(.1,.1,.1).toNonIndexed();let r=i.index?i.toNonIndexed():i.clone();if(!r.attributes.uv){const s=r.attributes.position.count,a=new Float32Array(s*2);r.setAttribute("uv",new Ye(a,2))}return r}),t=se(e);return e.forEach(i=>i.dispose()),t||(console.warn("mergeGeometries returned null, using fallback"),new S(1,1,1))}catch(e){return console.warn("safeMergeGeometries error:",e),new S(1,1,1)}}function Js(n,e,t,i=1){const r=n*.15,s=n/2,a=s*i,c=Math.min(a,e*.8),o=e-c,l=n-r*2,u=l/2,h=Math.max(0,c-r),f=new Ii,d=12;f.moveTo(-n/2,-e/2),f.lineTo(-n/2,-e/2+o);for(let m=0;m<=d;m++){const p=Math.PI-m/d*Math.PI,E=Math.cos(p)*s,v=-e/2+o+Math.sin(p)*c;f.lineTo(E,v)}if(f.lineTo(n/2,-e/2),f.lineTo(-n/2,-e/2),l>0&&h>0){const m=new Ti;m.moveTo(-u,-e/2),m.lineTo(-u,-e/2+o);for(let p=0;p<=d;p++){const E=Math.PI-p/d*Math.PI,v=Math.cos(E)*u,x=-e/2+o+Math.sin(E)*h;m.lineTo(v,x)}m.lineTo(u,-e/2),m.lineTo(-u,-e/2),f.holes.push(m)}const g={steps:1,depth:t,bevelEnabled:!1},_=new Kn(f,g);return _.translate(0,0,-t/2),_}function ag(n,e,t){const i=n/3,r=[],s=new S(n,e,i);r.push(s);const a=new S(i,e,t);r.push(a);const c=se(r);return r.forEach(o=>o.dispose()),c}function og(n,e,t){const i=Math.min(n,t)/8,r=[],s=new S(n,i,t);s.translate(0,(e-i)/2,0),r.push(s);const a=new S(n,i,t);a.translate(0,-(e-i)/2,0),r.push(a);const c=new S(i,e-i*2,t);c.translate(-(n-i)/2,0,0),r.push(c);const o=new S(i,e-i*2,t);o.translate((n-i)/2,0,0),r.push(o);const l=se(r);return r.forEach(u=>u.dispose()),l}function cg(n,e,t){const i=n/16,r=n/4,s=[],a=new S(n,e/8,t/4);a.translate(0,e*.375,0),s.push(a);const c=new S(n,e/8,t/4);c.translate(0,-e*.125,0),s.push(c);const o=Math.floor(n/r)+1;for(let u=0;u<o;u++){const h=-n/2+i/2+u*r;if(h>n/2-i/2)break;const f=new S(i,e,t/4);f.translate(h,0,0),s.push(f)}const l=se(s);return s.forEach(u=>u.dispose()),l}function lg(n,e,t){const i=t/16,r=t/4,s=[],a=new S(n/4,e/8,t);a.translate(0,e*.375,0),s.push(a);const c=new S(n/4,e/8,t);c.translate(0,-e*.125,0),s.push(c);const o=Math.floor(t/r)+1;for(let u=0;u<o;u++){const h=-t/2+i/2+u*r;if(h>t/2-i/2)break;const f=new S(n/4,e,i);f.translate(0,0,h),s.push(f)}const l=se(s);return s.forEach(u=>u.dispose()),l}function ug(n,e,t){const i=[],r=n/10,s=new S(n,e/6,t/4);s.translate(0,e*.4,0),i.push(s);const a=new S(r,e,r);a.translate(-n/2+r/2,0,0),i.push(a);const c=new S(r,e,r);c.translate(n/2-r/2,0,0),i.push(c);const o=se(i);return i.forEach(l=>l.dispose()),o}function hg(n,e,t){const i=[],r=t/10,s=new S(n/4,e/6,t);s.translate(0,e*.4,0),i.push(s);const a=new S(r,e,r);a.translate(0,0,-t/2+r/2),i.push(a);const c=new S(r,e,r);c.translate(0,0,t/2-r/2),i.push(c);const o=se(i);return i.forEach(l=>l.dispose()),o}function fg(n,e,t){const i=Math.min(n,t)/16,r=[],s=new S(n/2,e/8,t/4);s.translate(n/4,e*.375,0),r.push(s);const a=new S(n/4,e/8,t/2);a.translate(0,e*.375,t/4),r.push(a);const c=new S(i*2,e,i*2);return r.push(c),Le(r)}function dg(n,e,t){const i=Math.min(n,t)/16,r=[],s=new S(n/2,e/8,t/4);s.translate(-n/4,e*.375,0),r.push(s);const a=new S(n/4,e/8,t/2);a.translate(0,e*.375,-t/4),r.push(a);const c=new S(i*2,e,i*2);return r.push(c),Le(r)}function pg(n,e,t){const i=Math.min(n,t)/4;return new S(i,e,i)}function mg(n,e,t){const i=n/16,r=[],s=new S(n/2,e/8,t/4);s.translate(-n/4,e*.375,0),r.push(s);const a=new S(i*2,e,i*2);return r.push(a),Le(r)}function gg(n,e,t){const i=Math.min(n,t)/16,r=[],s=new S(n,e/8,t/4);s.translate(0,e*.375,0),r.push(s);const a=new S(n/4,e/8,t/2);a.translate(0,e*.375,t/4),r.push(a);const c=new S(i*2,e,i*2);return r.push(c),Le(r)}function _g(n,e,t){const i=Math.min(n,t)/16,r=[],s=new S(n,e/8,t/4);s.translate(0,e*.375,0),r.push(s);const a=new S(n/4,e/8,t);a.translate(0,e*.375,0),r.push(a);const c=new S(i*2,e,i*2);return r.push(c),Le(r)}function xg(n,e,t){const i=n/10,r=[];return r.push(new S(i,e,t/4).translate(-n/2+i/2,0,0)),r.push(new S(i,e,t/4).translate(n/2-i/2,0,0)),r.push(new S(n-i*2,i,t/4).translate(0,e/2-i/2,0)),r.push(new S(n-i*2,i,t/4).translate(0,-e/2+i/2,0)),r.push(new S(n-i*2,i/2,t/8).translate(0,0,0)),Le(r)}function vg(n,e,t){const i=n/10,r=[];return r.push(new S(i,e,t/4).translate(-n/2+i/2,0,0)),r.push(new S(n-i,e,t/4).translate(-n/2+i+(n-i)/2,0,-t/2+t/8)),Le(r)}function Mg(n,e,t){const i=n/12,r=[];return r.push(new S(i,e,t/4).translate(-n/2+i/2,0,0)),r.push(new S(i,e,t/4).translate(n/2-i/2,0,0)),r.push(new S(i/2,e,t/4).translate(0,0,0)),r.push(new S(n,i,t/4).translate(0,e/2-i/2,0)),Le(r)}function yg(n,e,t){const i=n/10,r=[];r.push(new S(i,e*.7,t/4).translate(-n/2+i/2,-e*.15,0)),r.push(new S(i,e*.7,t/4).translate(n/2-i/2,-e*.15,0));const s=new Nt((n-i)/2,i/2,4,8,Math.PI);return s.rotateX(Math.PI/2),s.translate(0,e*.2,0),r.push(s),Le(r)}function bg(n,e,t){const i=Math.min(n,t)/10,r=[];return r.push(new S(n/2,e/6,t/4).translate(n/4,e*.4,0)),r.push(new S(n/4,e/6,t/2).translate(0,e*.4,t/4)),r.push(new S(i,e,i)),Le(r)}function Sg(n,e,t){const i=Math.min(n,t)/10,r=[];return r.push(new S(n/2,e/6,t/4).translate(-n/4,e*.4,0)),r.push(new S(n/4,e/6,t/2).translate(0,e*.4,-t/4)),r.push(new S(i,e,i)),Le(r)}function Eg(n,e,t){const i=Math.min(n,t)/6,r=[];return r.push(new S(i,e,i)),r.push(new S(i*1.5,e/10,i*1.5).translate(0,e/2+e/20,0)),Le(r)}function wg(n,e,t){const i=n/10,r=[];return r.push(new S(n/2,e/6,t/4).translate(-n/4,e*.4,0)),r.push(new S(i,e,i)),Le(r)}function Tg(n,e,t){const i=n/10,r=[],s=new S(n*1.1,e/6,t/4);return s.rotateZ(Math.atan2(e*.3,n)),r.push(s),r.push(new S(i,e*.7,i).translate(-n/2+i/2,-e*.15,0)),r.push(new S(i,e,i).translate(n/2-i/2,0,0)),Le(r)}function Ag(n,e,t){const i=t/10,r=[],s=new S(n/4,e/6,t*1.1);return s.rotateX(-Math.atan2(e*.3,t)),r.push(s),r.push(new S(i,e*.7,i).translate(0,-e*.15,-t/2+i/2)),r.push(new S(i,e,i).translate(0,0,t/2-i/2)),Le(r)}function Cg(n,e,t){const i=n/8,r=n/4,s=[],a=Math.floor(n/r)+1;for(let c=0;c<a;c++){const o=-n/2+i/2+c*r;if(o>n/2-i/2)break;const l=new S(i,e*.9,t/4);l.translate(o,-e*.05,0),s.push(l);const u=new bt(i/2,e*.15,4);u.translate(o,e*.425,0),s.push(u)}return Le(s)}function Rg(n,e,t){const i=t/8,r=t/4,s=[],a=Math.floor(t/r)+1;for(let c=0;c<a;c++){const o=-t/2+i/2+c*r;if(o>t/2-i/2)break;const l=new S(n/4,e*.9,i);l.translate(0,-e*.05,o),s.push(l);const u=new bt(i/2,e*.15,4);u.translate(0,e*.425,o),s.push(u)}return Le(s)}function Pg(n,e,t){const i=n/20,r=n/6,s=[];for(let a=-2;a<=2;a++){const c=new S(i,e*1.4,t/8);c.rotateZ(Math.PI/4),c.translate(a*r*.7,0,0),s.push(c)}for(let a=-2;a<=2;a++){const c=new S(i,e*1.4,t/8);c.rotateZ(-Math.PI/4),c.translate(a*r*.7,0,0),s.push(c)}return s.push(new S(n,i*2,t/8).translate(0,e/2-i,0)),s.push(new S(n,i*2,t/8).translate(0,-e/2+i,0)),Le(s)}function Lg(n,e,t){const i=t/20,r=t/6,s=[];for(let a=-2;a<=2;a++){const c=new S(n/8,e*1.4,i);c.rotateX(Math.PI/4),c.translate(0,0,a*r*.7),s.push(c)}for(let a=-2;a<=2;a++){const c=new S(n/8,e*1.4,i);c.rotateX(-Math.PI/4),c.translate(0,0,a*r*.7),s.push(c)}return s.push(new S(n/8,i*2,t).translate(0,e/2-i,0)),s.push(new S(n/8,i*2,t).translate(0,-e/2+i,0)),Le(s)}function Ig(n,e,t){const i=Math.min(n,t)/4,r=[];return r.push(new S(n/2,e*.25,i).translate(n/4,0,-t/2+i/2)),r.push(new S(i,e*.25,t/2).translate(-n/2+i/2,0,t/4)),Le(r)}function Dg(n,e,t){const i=new Ii;i.moveTo(-n/2,0),i.lineTo(n/2,e*.25),i.lineTo(n/2,0),i.lineTo(-n/2,0);const r={steps:1,depth:t/4,bevelEnabled:!1},s=new Kn(i,r);return s.translate(0,-e*.125,-t/8),s}function Ug(n,e,t){const i=new Ii;i.moveTo(-t/2,0),i.lineTo(t/2,e*.25),i.lineTo(t/2,0),i.lineTo(-t/2,0);const r={steps:1,depth:n/4,bevelEnabled:!1},s=new Kn(i,r);return s.rotateY(Math.PI/2),s.translate(-n/8,-e*.125,0),s}function Ng(n,e,t){const i=Math.min(n,t)/4,r=[];return r.push(new S(n/2,e*.125,i/2).translate(n/4,0,-t/2+i/4)),r.push(new S(i/2,e*.125,t/2).translate(-n/2+i/4,0,t/4)),Le(r)}function Fg(n,e,t){return new S(n,e*.125,t/8)}function Og(n,e,t){return new S(n/8,e*.125,t)}function zg(n,e,t){const i=[];return i.push(new S(n/2,e*.125,t/8).translate(n/4,0,-t/2+t/16)),i.push(new S(n/8,e*.125,t/2).translate(-n/2+n/16,0,t/4)),Le(i)}function Ks(n,e,t,i){const r=Math.min(n,e,t)/4,s=8;switch(i){case"X":return new ue(r,r,n,s).rotateZ(Math.PI/2);case"Y":return new ue(r,r,e,s);case"Z":return new ue(r,r,t,s).rotateX(Math.PI/2);default:return new ue(r,r,e,s)}}function wn(n,e,t,i,r){const s=Math.min(n,e,t),a=s/4,c=s/2,o=12,l=8,u=new Nt(c,a,l,o,Math.PI/2);if(i==="XZ"){u.rotateX(Math.PI/2);const h=[Math.PI,-Math.PI/2,0,Math.PI/2];u.rotateY(h[r]||0)}else i==="XY"?r===1&&u.rotateY(Math.PI):i==="YZ"&&(u.rotateY(Math.PI/2),r===1&&u.rotateY(Math.PI));return u}function Bg(n,e,t){const i=Math.min(n,e,t)/4,r=8,s=[],a=new ue(i,i,n,r);a.rotateZ(Math.PI/2),s.push(a);const c=new ue(i,i,t,r);c.rotateX(Math.PI/2),s.push(c);const o=se(s);return s.forEach(l=>l.dispose()),o}function $s(n,e,t){const i=Math.min(n,e,t)/4,r=8,s=[],a=new ue(i,i,n,r);a.rotateZ(Math.PI/2),s.push(a);const c=new ue(i,i,t/2,r);c.rotateX(Math.PI/2),c.translate(0,0,t/4),s.push(c);const o=se(s);return s.forEach(l=>l.dispose()),o}function kg(n,e,t){const i=[],r=new S(n,e*.5,t*.6);r.translate(0,e*.25,t*.2),i.push(r);const s=new S(n,e*.3,t*.3);s.translate(0,e*.1,-t*.35),i.push(s);const a=se(i);return i.forEach(c=>c.dispose()),a}function Vg(n,e,t){const i=[],r=Math.min(n,t)/3,s=new ue(r*1.2,r*1.3,e*.1,12);s.translate(0,-e*.45,0),i.push(s);const a=new ue(r,r,e*.75,12);i.push(a);const c=new ue(r*1.3,r*1.1,e*.15,12);c.translate(0,e*.425,0),i.push(c);const o=se(i);return i.forEach(l=>l.dispose()),o}function Hg(n,e,t){const i=[],r=Math.min(n,t)/4,s=new ue(r*1.5,r*1.5,e*.1,8);s.translate(0,-e*.45,0),i.push(s);const a=new ut(r*1.3,8,6);a.translate(0,-e*.25,0),i.push(a);const c=new ue(r*.6,r*.6,e*.5,8);i.push(c);const o=new ut(r*1.1,8,6);o.translate(0,e*.25,0),i.push(o);const l=new ue(r*1.5,r*1.5,e*.1,8);l.translate(0,e*.45,0),i.push(l);const u=se(i);return i.forEach(h=>h.dispose()),u}function Gg(n,e,t){const i=new S(n*1.1,e,t*.4);return i.translate(0,0,-t*.3),i}function Wg(n,e,t){const i=n/2,r=e/2,s=t/2,a=new Float32Array([-i,-r,-s,i,-r,-s,i,r,-s,-i,-r,-s,i,r,-s,-i,r,-s,-i,-r,s,i,-r,s,i,-r,-s,-i,-r,s,i,-r,-s,-i,-r,-s,-i,r,-s,i,r,-s,i,-r,s,-i,r,-s,i,-r,s,-i,-r,s,-i,-r,s,-i,-r,-s,-i,r,-s,i,-r,-s,i,-r,s,i,r,-s]),c=new ke;return c.setAttribute("position",new Ye(a,3)),c.computeVertexNormals(),c}function Xg(n,e,t){const i=[],r=new S(n*.7,e*.9,t*.7);r.translate(0,-e*.05,0),i.push(r);const s=new S(n*.9,e*.1,t*.9);s.translate(0,e*.45,0),i.push(s);const a=se(i);return i.forEach(c=>c.dispose()),a}function Zg(n,e,t){const i=n/2,r=e/2,s=t/2,a=new Float32Array([-i,-r,-s,i,-r,-s,i,-r,s,-i,-r,-s,i,-r,s,-i,-r,s,-i,-r,-s,-i,r,-s,i,r,-s,-i,-r,-s,i,r,-s,i,-r,-s,-i,-r,s,i,-r,s,i,r,-s,-i,-r,s,i,r,-s,-i,r,-s,-i,-r,-s,-i,-r,s,-i,r,-s,i,-r,s,i,-r,-s,i,r,-s]),c=new ke;return c.setAttribute("position",new Ye(a,3)),c.computeVertexNormals(),c}function Yg(n,e,t){const i=[],r=new S(n,e*.2,t);r.translate(0,e*.4,0),i.push(r);const s=n*.1,a=e*.8,c=new S(s,a,t*.8);c.translate(-n*.4,-e*.1,0),i.push(c);const o=new S(s,a,t*.8);o.translate(n*.4,-e*.1,0),i.push(o);const l=se(i);return i.forEach(u=>u.dispose()),l}function qg(n,e,t){const i=[],r=new S(n,e*.1,t);r.translate(0,e*.45,0),i.push(r);const s=Math.min(n,t)*.1,a=e*.9;[[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([l,u])=>{const h=new S(s,a,s);h.translate(l*(n*.4),-e*.05,u*(t*.4)),i.push(h)});const o=se(i);return i.forEach(l=>l.dispose()),o}function Jg(n,e,t){const i=[],r=new S(n*.9,e*.1,t*.9);r.translate(0,-e*.1,0),i.push(r);const s=new S(n*.9,e*.5,t*.1);s.translate(0,e*.2,-t*.4),i.push(s);const a=n*.08,c=e*.4;[[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([u,h])=>{const f=new S(a,c,a);f.translate(u*(n*.35),-e*.35,h*(t*.35)),i.push(f)});const l=se(i);return i.forEach(u=>u.dispose()),l}function Kg(n,e,t){const i=Math.min(n,t)/2.2;return new ue(i*.85,i*.85,e,12)}function $g(n,e,t){const i=[],r=new S(n*.95,e*.95,t*.95);i.push(r);const s=new S(n,e*.08,t*.08);s.translate(0,e*.3,t*.45),i.push(s);const a=s.clone();a.translate(0,-e*.3,0),i.push(a);const c=se(i);return i.forEach(o=>o.dispose()),c}function jg(n,e,t){const i=[],s=new S(n*.9,e*.06,t*.9);s.translate(0,-e*.45,0),i.push(s);const a=new S(n*.9,e*.9,.06*n);a.translate(0,0,t*.4),i.push(a);const c=a.clone();c.translate(0,0,-t*.8),i.push(c);const o=new S(.06*n,e*.9,t*.9);o.translate(-n*.4,0,0),i.push(o);const l=o.clone();l.translate(n*.8,0,0),i.push(l);const u=se(i);return i.forEach(h=>h.dispose()),u}function Qg(n,e,t){const i=[],r=new S(n,e,t);i.push(r);const s=.15;[[-1,-1,-1],[1,-1,-1],[-1,-1,1],[1,-1,1],[-1,1,-1],[1,1,-1],[-1,1,1],[1,1,1]].forEach(([o,l,u])=>{const h=new S(n*s,e*s,t*s);h.translate(o*n*.45,l*e*.45,u*t*.45),i.push(h)});const c=se(i);return i.forEach(o=>o.dispose()),c}function e_(n,e,t){const i=[],r=e*.3,s=n*.15;for(let c=-1;c<=1;c++){const o=new S(n*.28,r,t);o.translate(c*s*2,e*.35,0),i.push(o)}for(let c=-1;c<=1;c++){const o=new S(n*.15,e*.5,t*.15);o.translate(c*n*.35,-e*.1,0),i.push(o)}const a=se(i);return i.forEach(c=>c.dispose()),a}function t_(n,e,t){const i=[];for(let u=0;u<4;u++){const h=new S(n*.95,e*.05,t*.9);h.translate(0,-e*.4+u*e*.3,0),i.push(h)}const s=new S(n*.05,e,t*.1);s.translate(-n*.45,0,t*.4),i.push(s);const a=s.clone();a.translate(n*.9,0,0),i.push(a);const c=s.clone();c.translate(0,0,-t*.8),i.push(c);const o=c.clone();o.translate(n*.9,0,0),i.push(o);const l=se(i);return i.forEach(u=>u.dispose()),l}function n_(n,e,t){const i=[],r=new S(n*.95,e,t*.95);i.push(r);const s=new S(n*.02,e*.9,t*.85);s.translate(n*.48,0,0),i.push(s);const a=new S(n*.05,e*.15,t*.05);a.translate(n*.5,e*.1,t*.3),i.push(a);for(let o=-1;o<=1;o++){const l=new S(n*.03,e*.05,t*.4);l.translate(n*.5,e*.35+o*e*.08,0),i.push(l)}const c=se(i);return i.forEach(o=>o.dispose()),c}function i_(n,e,t){const i=[],r=new S(n,e,t);i.push(r);const s=n*.48,a=new S(n*.02,e*.95,s);a.translate(n*.5,0,t*.2),i.push(a);const c=a.clone();c.translate(0,0,-t*.4),i.push(c);const o=new S(n*.05,e*.1,t*.03);o.translate(n*.52,0,t*.05),i.push(o);const l=o.clone();l.translate(0,0,-t*.1),i.push(l);const u=se(i);return i.forEach(h=>h.dispose()),u}function r_(n,e,t){const i=[],r=new S(n*.95,e*.85,t*.95);r.translate(0,-e*.075,0),i.push(r);const s=new S(n*.9,e*.02,t*.35);s.translate(0,e*.35,t*.25),i.push(s);const a=s.clone();a.translate(0,0,-t*.5),i.push(a);const c=se(i);return i.forEach(o=>o.dispose()),c}function s_(n,e,t){const i=Math.min(n,t)/2,r=new ut(i,8,6,0,Math.PI*2,0,Math.PI*.6);return r.scale(1,e/i*.7,1),r.translate(0,-e*.15,0),r}function a_(n,e,t){return new S(n,e,t)}function o_(n,e,t){const i=[],r=n*.1,s=new S(r,e,t*.1);s.translate(-n*.35,0,0),i.push(s);const a=new S(r,e,t*.1);a.translate(n*.35,0,0),i.push(a);const c=5;for(let l=0;l<c;l++){const u=new S(n*.6,e*.06,t*.08);u.translate(0,-e*.4+l*e*.2,0),i.push(u)}const o=se(i);return i.forEach(l=>l.dispose()),o}function c_(n,e,t){const i=Math.min(n,t)/2.5;return new ue(i,i,e*.9,16)}function l_(n,e,t){const i=[],r=Math.min(n,t)/3,s=new Nt(r,r*.15,8,16);s.rotateX(Math.PI/2),i.push(s);for(let o=0;o<4;o++){const l=new S(r*2,r*.12,r*.12);l.rotateY(o*Math.PI/4),i.push(l)}const a=new ue(r*.2,r*.2,e*.5,8);a.translate(0,-e*.25,0),i.push(a);const c=se(i);return i.forEach(o=>o.dispose()),c}function u_(n,e,t){const i=[],r=new S(n,e,t*.1);i.push(r);const s=5;for(let c=0;c<s;c++){const o=new S(n*.9,e*.08,t*.3);o.rotateX(Math.PI*.15),o.translate(0,-e*.35+c*e*.18,t*.1),i.push(o)}const a=se(i);return i.forEach(c=>c.dispose()),a}function h_(n,e,t){const i=[],r=e*.15,s=n*.3,a=new S(n,r,t);a.translate(0,e*.425,0),i.push(a);const c=new S(n,r,t);c.translate(0,-e*.425,0),i.push(c);const o=new S(s,e*.7,t);i.push(o);const l=se(i);return i.forEach(u=>u.dispose()),l}function f_(n,e,t){const i=[],r=new S(n,e*.1,t);r.translate(0,e*.45,0),i.push(r);const s=new S(n,e*.15,t*.1);s.translate(0,e*.35,-t*.35),i.push(s);const a=new S(n,e*.15,t*.1);a.translate(0,e*.35,t*.35),i.push(a);const c=se(i);return i.forEach(o=>o.dispose()),c}function d_(n,e,t){const i=[],r=new S(n*.8,e*.7,t*.8);r.translate(0,-e*.15,0),i.push(r);for(let a=-1;a<=1;a+=2){const c=new ue(n*.08,n*.1,e*.3,8);c.translate(a*n*.25,e*.3,0),i.push(c)}for(let a=-2;a<=2;a++){const c=new S(n*.05,e*.5,t*.9);c.translate(n*.45,-e*.15,a*t*.15),i.push(c)}const s=se(i);return i.forEach(a=>a.dispose()),s}function p_(n,e,t){const i=[],r=new S(n*.9,e,t*.5);i.push(r);const s=new S(n*.02,e*.85,t*.4);s.translate(n*.45,0,0),i.push(s);const a=new S(n*.03,e*.3,t*.3);a.translate(n*.47,e*.2,0),i.push(a);const c=se(i);return i.forEach(o=>o.dispose()),c}function m_(n,e,t){const i=Math.min(n,t)*.15,r=new ue(i,i,n,8);return r.rotateZ(Math.PI/2),r}function g_(n,e,t){const i=[],r=Math.min(n,t)*.15,s=new ue(r,r,n*.4,8);s.rotateZ(Math.PI/2),s.translate(-n*.3,0,0),i.push(s);const a=new ue(r,r,e*.4,8);a.translate(0,e*.2,0),i.push(a);const c=new ut(r*1.2,8,8);i.push(c);const o=se(i);return i.forEach(l=>l.dispose()),o}function __(n,e,t){const i=[],r=new S(n*.6,e,t*.1);i.push(r);for(let a=-1;a<=1;a+=2){const c=new S(n*.08,e*.15,t*.05);c.translate(a*n*.12,e*.15,t*.05),i.push(c);const o=c.clone();o.translate(0,-e*.3,0),i.push(o)}const s=se(i);return i.forEach(a=>a.dispose()),s}function x_(n,e,t){const i=[],r=new S(n*.7,e,t*.4);i.push(r);const s=new S(n*.15,e*.4,t*.1);s.translate(0,e*.1,t*.25),i.push(s);const a=se(i);return i.forEach(c=>c.dispose()),a}function v_(n,e,t){const i=[],r=new S(n*.9,e,t*.5);i.push(r);const s=new S(n*.02,e*.9,t*.45);s.translate(n*.46,0,0),i.push(s);for(let c=-1;c<=1;c++)for(let o=-1;o<=1;o++){const l=new S(n*.15,e*.12,t*.08);l.translate(o*n*.2,c*e*.2,t*.22),i.push(l)}const a=se(i);return i.forEach(c=>c.dispose()),a}function M_(n,e,t){const i=Math.min(n,t)*.08,r=new ue(i,i,n,6);return r.rotateZ(Math.PI/2),r}function y_(n,e,t){const i=Math.min(n,t)*.06,r=new ue(i,i,n,6);return r.rotateZ(Math.PI/2),r}function b_(n,e,t){const i=Math.min(n,t)*.06;return new ue(i,i,e,6)}function S_(n,e,t){const i=Math.min(n,t)*.06,r=new ue(i,i,t,6);return r.rotateX(Math.PI/2),r}function E_(n,e,t){const i=Math.min(n,e,t),r=i*.06,s=i/2,a=new Nt(s,r,6,12,Math.PI/2);return a.rotateX(Math.PI/2),a}function w_(n,e,t){const i=Math.min(n,e,t),r=i*.06,s=i/2;return new Nt(s,r,6,12,Math.PI/2)}function T_(n,e,t){const i=Math.min(n,t)*.06,r=[],s=new ue(i,i,n,6);s.rotateZ(Math.PI/2),r.push(s);const a=new ue(i,i,t/2,6);a.rotateX(Math.PI/2),a.translate(0,0,t/4),r.push(a);const c=se(r);return r.forEach(o=>o.dispose()),c}function A_(n,e,t){const i=[],r=new S(n*.3,e*.3,t*.3);r.translate(0,e*.35,0),i.push(r);const s=new ue(n*.35,n*.25,e*.5,8);s.translate(0,0,0),i.push(s);const a=new ue(n*.3,n*.3,e*.1,8);a.translate(0,-e*.3,0),i.push(a);const c=se(i);return i.forEach(o=>o.dispose()),c}function C_(n,e,t){const i=Math.min(n,t)*.05,r=e*.4;class s extends Ft{getPoint(l){const u=(l-.5)*t,h=r*(Math.pow(2*l-1,2)-1);return new P(0,h,u)}}const a=new s;return new ar(a,16,i,6,!1)}function R_(n,e,t){const i=Math.min(n,t)*.05;class r extends Ft{getPoint(o){const l=e*.5-o*e,u=Math.sin(o*Math.PI)*t*.1;return new P(0,l,u)}}const s=new r;return new ar(s,12,i,6,!1)}function P_(n,e,t){const i=Math.min(n,t)*.04,r=Math.min(n,t)*.15,s=4;class a extends Ft{getPoint(u){const h=u*Math.PI*2*s,f=Math.cos(h)*r,d=Math.sin(h)*r,g=e*.4-u*e*.8;return new P(f,g,d)}}const c=new a;return new ar(c,32,i,6,!1)}function L_(n,e,t){const i=n*.4,r=e*.35,s=t*.4,a=new Float32Array([0,r,0,-i*.3,r*.7,-s*.4,i*.4,r*.6,-s*.2,0,r,0,i*.4,r*.6,-s*.2,i*.5,r*.5,s*.3,0,r,0,i*.5,r*.5,s*.3,-i*.2,r*.65,s*.5,0,r,0,-i*.2,r*.65,s*.5,-i*.6,r*.4,0,0,r,0,-i*.6,r*.4,0,-i*.3,r*.7,-s*.4,-i*.3,r*.7,-s*.4,-i*.8,-r*.2,-s*.6,i*.4,r*.6,-s*.2,i*.4,r*.6,-s*.2,-i*.8,-r*.2,-s*.6,i*.9,-r*.1,-s*.5,i*.4,r*.6,-s*.2,i*.9,-r*.1,-s*.5,i*.5,r*.5,s*.3,i*.5,r*.5,s*.3,i*.9,-r*.1,-s*.5,i*.85,-r*.15,s*.7,i*.5,r*.5,s*.3,i*.85,-r*.15,s*.7,-i*.2,r*.65,s*.5,-i*.2,r*.65,s*.5,i*.85,-r*.15,s*.7,-i*.5,-r*.1,s*.8,-i*.2,r*.65,s*.5,-i*.5,-r*.1,s*.8,-i*.6,r*.4,0,-i*.6,r*.4,0,-i*.5,-r*.1,s*.8,-i*.95,-r*.2,s*.2,-i*.6,r*.4,0,-i*.95,-r*.2,s*.2,-i*.3,r*.7,-s*.4,-i*.3,r*.7,-s*.4,-i*.95,-r*.2,s*.2,-i*.8,-r*.2,-s*.6,-i*.8,-r*.2,-s*.6,-i*.6,-r,-s*.4,i*.9,-r*.1,-s*.5,i*.9,-r*.1,-s*.5,-i*.6,-r,-s*.4,i*.7,-r,-s*.3,i*.9,-r*.1,-s*.5,i*.7,-r,-s*.3,i*.85,-r*.15,s*.7,i*.85,-r*.15,s*.7,i*.7,-r,-s*.3,i*.6,-r,s*.5,i*.85,-r*.15,s*.7,i*.6,-r,s*.5,-i*.5,-r*.1,s*.8,-i*.5,-r*.1,s*.8,i*.6,-r,s*.5,-i*.4,-r,s*.6,-i*.5,-r*.1,s*.8,-i*.4,-r,s*.6,-i*.95,-r*.2,s*.2,-i*.95,-r*.2,s*.2,-i*.4,-r,s*.6,-i*.7,-r,0,-i*.95,-r*.2,s*.2,-i*.7,-r,0,-i*.8,-r*.2,-s*.6,-i*.8,-r*.2,-s*.6,-i*.7,-r,0,-i*.6,-r,-s*.4,-i*.6,-r,-s*.4,-i*.7,-r,0,0,-r,0,-i*.7,-r,0,-i*.4,-r,s*.6,0,-r,0,-i*.4,-r,s*.6,i*.6,-r,s*.5,0,-r,0,i*.6,-r,s*.5,i*.7,-r,-s*.3,0,-r,0,i*.7,-r,-s*.3,-i*.6,-r,-s*.4,0,-r,0]),c=new ke;return c.setAttribute("position",new Ye(a,3)),c.computeVertexNormals(),c}function I_(n,e,t){const i=[],r=Math.min(n,t)/3;[[0,0,0],[-r*.5,-r*.3,0],[r*.5,-r*.3,0],[0,-r*.3,-r*.5],[0,-r*.3,r*.5]].forEach(([c,o,l],u)=>{const h=new ut(r*(.8+u*.05),8,6);h.translate(c,o,l),i.push(h)});const a=se(i);return i.forEach(c=>c.dispose()),a}function kc(n,e,t,i){const r=Math.min(e,i==="X"?t:n)/3,s=i==="X"?n:t,a=new ue(r,r*.9,s,8);return i==="X"?a.rotateZ(Math.PI/2):a.rotateX(Math.PI/2),a}function D_(n,e,t){const i=[],r=new S(n*.95,e*.9,t*.95);i.push(r);for(let a=0;a<4;a++){const c=new S(n*.8,e*.05,t*.02);c.translate(0,e*.2-a*e*.15,t*.48),i.push(c)}const s=se(i);return i.forEach(a=>a.dispose()),s}function U_(n,e,t){const i=[],r=new S(n,e*.1,t);i.push(r);const s=new S(n*.95,e*.05,t*.95);s.translate(0,e*.1,0),i.push(s);const a=se(i);return i.forEach(c=>c.dispose()),a}function N_(n,e,t){const i=[],r=Math.min(n,t)/10,s=new ue(r,r,e*.9,6);i.push(s);const a=new ue(r*.5,r*.5,n*.8,4);a.rotateZ(Math.PI/2),a.translate(0,e*.3,0),i.push(a);const c=new ue(r*.5,r*.5,n*.5,4);c.rotateZ(Math.PI/2),c.translate(0,e*.1,0),i.push(c);const o=se(i);return i.forEach(l=>l.dispose()),o}function F_(n,e,t){const i=[],r=new S(n,e*.6,t*.5);r.translate(0,-e*.1,0),i.push(r);const s=new S(n,e*.15,t*.55);s.translate(0,e*.25,0),i.push(s);const a=se(i);return i.forEach(c=>c.dispose()),a}function O_(n,e,t){const r=[],s=[];for(let c=0;c<=12;c++){const o=c/12*Math.PI/2,l=Math.cos(o)*n/2,u=Math.sin(o)*e-e/2;r.push(l,u,t/2),r.push(l,u,-t/2)}for(let c=0;c<12;c++){const o=c*2,l=c*2+1,u=c*2+2,h=c*2+3;s.push(o,u,l,l,u,h)}const a=new ke;return a.setAttribute("position",new et(r,3)),a.setIndex(s),a.computeVertexNormals(),a}function z_(n,e,t){const i=new ut(Math.min(n,t)/2.2,16,8,0,Math.PI*2,0,Math.PI/2);return i.rotateX(Math.PI),i.translate(0,e*.25,0),i}function B_(n,e,t){const i=Math.min(n,t)/2;return new ue(i,i,e,6)}function k_(n,e,t){return new S(n*.9,e*.9,t*.9,2,2,2)}function V_(n,e,t){const i=n/2,r=e/2,s=t/2,a=Math.min(n,t)*.3,c=new Float32Array([-i,-r,-s,i,-r,-s,i,r,-s,-i,-r,-s,i,r,-s,-i,r,-s,-i,-r,-s,i,-r,-s,i,-r,s-a,-i,-r,-s,i,-r,s-a,-i,-r,s-a,-i,-r,s-a,i,-r,s-a,i-a,-r,s,-i,-r,s-a,i-a,-r,s,-i,-r,s,-i,r,-s,i,r,-s,i,r,s-a,-i,r,-s,i,r,s-a,-i,r,s-a,-i,r,s-a,i,r,s-a,i-a,r,s,-i,r,s-a,i-a,r,s,-i,r,s,i,-r,s-a,i,r,s-a,i-a,r,s,i,-r,s-a,i-a,r,s,i-a,-r,s,-i,-r,s,i-a,-r,s,i-a,r,s,-i,-r,s,i-a,r,s,-i,r,s,i,-r,-s,i,r,-s,i,r,s-a,i,-r,-s,i,r,s-a,i,-r,s-a,-i,-r,s,-i,r,s,-i,r,-s,-i,-r,s,-i,r,-s,-i,-r,-s]),o=new ke;return o.setAttribute("position",new Ye(c,3)),o.computeVertexNormals(),o}function H_(n,e,t){return new S(n*.8,e,t*.8)}function G_(n,e,t){const i=[],r=new S(n*.4,e,t);r.translate(-n*.3,0,0),i.push(r);const s=new S(n*.4,e,t);s.translate(n*.3,0,0),i.push(s);const a=new S(n*.2,e*.3,t);a.translate(0,e*.35,0),i.push(a);const c=new S(n*.2,e*.3,t);c.translate(0,-e*.35,0),i.push(c);const o=se(i);return i.forEach(l=>l.dispose()),o}function W_(n,e,t){const i=[],r=Math.min(n,t)/6,s=new S(n*.3,e*.1,t*.5);s.translate(0,-e*.1,-t*.25),i.push(s);const a=new ue(r,r*.8,e*.5,6);i.push(a);const c=new ue(r*1.5,r,e*.15,6);c.translate(0,e*.3,0),i.push(c);const o=se(i);return i.forEach(l=>l.dispose()),o}function X_(n,e,t){const i=[],r=Math.min(n,t)/4,s=4;for(let c=0;c<s;c++){const o=new Nt(r,r*.3,6,8);o.rotateX(c%2===0?0:Math.PI/2),o.translate(0,e*.4-c*(e/s),0),i.push(o)}const a=se(i);return i.forEach(c=>c.dispose()),a}function Z_(n,e,t){const i=n/2,r=e/2,s=t/2,a=new Float32Array([-i,-r,-s,i,-r,-s,0,-r,s,-i,-r,-s,0,-r,s,0,r,0,-i,-r,-s,0,r,0,-i,r,-s,i,-r,-s,0,r,0,0,-r,s,i,-r,-s,i,r,-s,0,r,0,-i,-r,-s,-i,r,-s,i,r,-s,-i,-r,-s,i,r,-s,i,-r,-s,-i,r,-s,0,r,0,i,r,-s]),c=new ke;return c.setAttribute("position",new Ye(a,3)),c.computeVertexNormals(),c}function Y_(n,e,t){const i=new S(n*Math.SQRT2,e,t);return i.rotateY(Math.PI/4),i}function Vc(n,e,t,i=!1){const r=t/4,s=[];if(i){const c=new S(n,e,r);c.translate(0,0,-t/2+r/2),s.push(c);const o=new S(r,e,t-r);o.translate(-n/2+r/2,0,r/2),s.push(o)}else{const c=new S(n,e,r);c.translate(0,0,t/2-r/2),s.push(c);const o=new S(r,e,t-r);o.translate(n/2-r/2,0,-r/2),s.push(o)}const a=se(s);return s.forEach(c=>c.dispose()),a}function q_(n,e,t){const i=e/2,r=Math.min(n,t)/4,s=new Float32Array([r,-i,-r,r,i,-r,-r,i,r,r,-i,-r,-r,i,r,-r,-i,r,-r,-i,-r,-r,-i,r,-r,i,r,-r,-i,-r,-r,i,r,-r,i,-r,-r,i,-r,-r,i,r,r,i,-r,-r,-i,-r,r,-i,-r,-r,-i,r,0,0,r,0,0,r,0,0,r,-r,-i,-r,-r,i,-r,r,i,-r,-r,-i,-r,r,i,-r,r,-i,-r]),a=new ke;return a.setAttribute("position",new Ye(s,3)),a.addGroup(0,6,0),a.addGroup(6,6,1),a.addGroup(12,3,2),a.addGroup(15,3,3),a.addGroup(18,3,4),a.addGroup(21,6,5),a.computeVertexNormals(),a}function J_(n,e,t){const i=n/2,r=e/2,s=t/2,a=new Float32Array([i,-r,-s,i,r,-s,i,-r,s,-i,-r,-s,-i,-r,s,-i,r,-s,0,r,0,0,r,0,0,r,0,-i,-r,-s,i,-r,-s,i,-r,s,-i,-r,-s,i,-r,s,-i,-r,s,-i,r,-s,-i,-r,s,i,-r,s,-i,r,-s,i,-r,s,i,r,-s,-i,-r,-s,-i,r,-s,i,r,-s,-i,-r,-s,i,r,-s,i,-r,-s]),c=new ke;return c.setAttribute("position",new Ye(a,3)),c.addGroup(0,3,0),c.addGroup(3,3,1),c.addGroup(6,3,2),c.addGroup(9,6,3),c.addGroup(15,6,4),c.addGroup(21,6,5),c.computeVertexNormals(),c}function Hc(n,e,t,i=!1){const s=e/4,a=[];for(let o=0;o<4;o++){const l=s*(o+1),u=(4-o)/4;if(i){const h=new S(n*u,l,t*u);h.translate(n*(1-u)/2,l/2-e/2,t*(1-u)/2),a.push(h)}else{const h=new S(n*u,l,t*u);h.translate(-n*(1-u)/2,l/2-e/2,-t*(1-u)/2),a.push(h)}}const c=se(a);return a.forEach(o=>o.dispose()),c}function K_(n,e,t){const i=n/2,r=e/2,s=t/2,a=new Float32Array([-i,-r,-s,i,-r,-s,i,-r,s,-i,-r,-s,i,-r,s,-i,-r,s,-i,-r,s,i,-r,s,0,r,0,i,-r,-s,-i,-r,-s,0,r,0,-i,-r,-s,-i,-r,s,0,r,0,i,-r,s,i,-r,-s,0,r,0]),c=new ke;return c.setAttribute("position",new Ye(a,3)),c.computeVertexNormals(),c}function $_(n,e,t){const i=Math.min(n,t)/2,r=i*.7,s=new Ii;s.absarc(0,0,i,0,Math.PI*2,!1);const a=new Ti;a.absarc(0,0,r,0,Math.PI*2,!0),s.holes.push(a);const c={steps:1,depth:e,bevelEnabled:!1},o=new Kn(s,c);return o.rotateX(-Math.PI/2),o.translate(0,-e/2,0),o}function j_(n,e,t){const i=n*.2,r=10,s=new Ii;s.moveTo(-n/2,-e/2),s.lineTo(-n/2,e/2),s.lineTo(n/2,e/2),s.lineTo(n/2,-e/2),s.lineTo(-n/2,-e/2);const a=new Ti,c=-n/2+i,o=e/2-i,l=n/2-i,u=-e/2,h=Math.min(n-i*2,e-i)*.8;a.moveTo(c,u),a.lineTo(c,o-h);for(let d=0;d<=r;d++){const g=Math.PI-d/r*(Math.PI/2),_=c+h+Math.cos(g)*h,m=o-h+Math.sin(g)*h;a.lineTo(_,m)}a.lineTo(l,o),a.lineTo(l,u),a.lineTo(c,u),s.holes.push(a);const f=new Kn(s,{steps:1,depth:t,bevelEnabled:!1});return f.translate(0,0,-t/2),f}function Q_(n,e,t){const i=n/3,r=[],s=new S(n,e,i);s.translate(0,0,t/2-i/2),r.push(s);const a=new S(i,e,t-i);a.translate(-n/2+i/2,0,-i/2),r.push(a);const c=se(r);return r.forEach(o=>o.dispose()),c}function ex(n,e,t){const i=n/3,r=[],s=new S(n,e,i);s.translate(0,0,t/2-i/2),r.push(s);const a=new S(i,e,t-i);a.translate(0,0,-i/2),r.push(a);const c=se(r);return r.forEach(o=>o.dispose()),c}function tx(n,e,t){const i=n/4,r=[],s=new S(n,e,i);s.translate(0,0,-t/2+i/2),r.push(s);const a=new S(i,e,t-i);a.translate(-n/2+i/2,0,i/2),r.push(a);const c=new S(i,e,t-i);c.translate(n/2-i/2,0,i/2),r.push(c);const o=se(r);return r.forEach(l=>l.dispose()),o}function nx(n,e,t){const i=[],r=new S(n,e/2,t*.3);r.translate(0,e/4,t*.35),i.push(r);const s=new S(n,e,t*.4);s.translate(0,0,-t*.3),i.push(s);const a=se(i);return i.forEach(c=>c.dispose()),a}function ix(n,e,t){const i=t/6,r=[],s=new S(n,e/2,t);s.translate(0,-e/4,0),r.push(s);const a=new S(n,e,i);a.translate(0,0,t/2-i/2),r.push(a);const c=new S(n,e,i);c.translate(0,0,-t/2+i/2),r.push(c);const o=se(r);return r.forEach(l=>l.dispose()),o}function rx(n,e,t){const i=[],r=new S(n,e/3,t);r.translate(0,e/3,0),i.push(r);const s=new S(n*.85,e/3,t*.85);s.translate(0,0,0),i.push(s);const a=new S(n*.7,e/3,t*.7);a.translate(0,-e/3,0),i.push(a);const c=se(i);return i.forEach(o=>o.dispose()),c}function sx(n,e,t){const i=[],r=new S(n,e/3,t);r.translate(0,-e/3,0),i.push(r);const s=new S(n*.85,e/3,t*.85);s.translate(0,0,0),i.push(s);const a=new S(n*.7,e/3,t*.7);a.translate(0,e/3,0),i.push(a);const c=se(i);return i.forEach(o=>o.dispose()),c}function ax(n,e,t){const i=n/8,r=[],s=new S(n,i,t);s.translate(0,e/2-i/2,0),r.push(s);const a=new S(n,i*1.5,t);a.translate(0,-e/2+i*.75,0),r.push(a);const c=new S(i,e-i*2.5,t);c.translate(-n/2+i/2,i*.25,0),r.push(c);const o=new S(i,e-i*2.5,t);o.translate(n/2-i/2,i*.25,0),r.push(o);const l=se(r);return r.forEach(u=>u.dispose()),l}function ox(n,e,t){const i=n/8,r=[],s=new S(n,i,t);s.translate(0,e/2-i/2,0),r.push(s);const a=new S(i,e-i,t);a.translate(-n/2+i/2,-i/2,0),r.push(a);const c=new S(i,e-i,t);c.translate(n/2-i/2,-i/2,0),r.push(c);const o=se(r);return r.forEach(l=>l.dispose()),o}function Gc(n,e,t){const r=[];for(let a=0;a<8;a++){const c=a/8*Math.PI/2,o=(a+1)/8*Math.PI/2,l=-e/2+e*Math.sin(c),u=t/2-t*(1-Math.cos(c)),h=-e/2+e*Math.sin(o),f=t/2-t*(1-Math.cos(o));r.push(-n/2,l,u,-n/2,h,f,n/2,h,f,-n/2,l,u,n/2,h,f,n/2,l,u)}r.push(-n/2,-e/2,-t/2,n/2,-e/2,-t/2,n/2,-e/2,t/2,-n/2,-e/2,-t/2,n/2,-e/2,t/2,-n/2,-e/2,t/2),r.push(-n/2,-e/2,-t/2,-n/2,e/2,-t/2,n/2,e/2,-t/2,-n/2,-e/2,-t/2,n/2,e/2,-t/2,n/2,-e/2,-t/2);for(let a=0;a<8;a++){const c=a/8*Math.PI/2,o=(a+1)/8*Math.PI/2,l=-e/2+e*Math.sin(c),u=t/2-t*(1-Math.cos(c)),h=-e/2+e*Math.sin(o),f=t/2-t*(1-Math.cos(o));r.push(-n/2,-e/2,-t/2,-n/2,l,u,-n/2,h,f)}r.push(-n/2,-e/2,-t/2,-n/2,e/2,-t/2,-n/2,-e/2+e*Math.sin(Math.PI/2*7/8),t/2-t*(1-Math.cos(Math.PI/2*7/8)));for(let a=0;a<8;a++){const c=a/8*Math.PI/2,o=(a+1)/8*Math.PI/2,l=-e/2+e*Math.sin(c),u=t/2-t*(1-Math.cos(c)),h=-e/2+e*Math.sin(o),f=t/2-t*(1-Math.cos(o));r.push(n/2,h,f,n/2,l,u,n/2,-e/2,-t/2)}r.push(n/2,-e/2+e*Math.sin(Math.PI/2*7/8),t/2-t*(1-Math.cos(Math.PI/2*7/8)),n/2,e/2,-t/2,n/2,-e/2,-t/2);const s=new ke;return s.setAttribute("position",new Ye(new Float32Array(r),3)),s.computeVertexNormals(),s}function cx(n,e,t){const r=[];for(let a=0;a<8;a++){const c=a/8*Math.PI/2,o=(a+1)/8*Math.PI/2,l=-e/2+e*Math.sin(c),u=1-Math.cos(c),h=-e/2+e*Math.sin(o),f=1-Math.cos(o);for(let d=0;d<8;d++){const g=d/8*Math.PI/2,_=(d+1)/8*Math.PI/2,m=n/2-n*u*Math.cos(g),p=t/2-t*u*Math.sin(g),E=n/2-n*u*Math.cos(_),v=t/2-t*u*Math.sin(_),x=n/2-n*f*Math.cos(g),D=t/2-t*f*Math.sin(g),A=n/2-n*f*Math.cos(_),R=t/2-t*f*Math.sin(_);r.push(m,l,p,x,h,D,A,h,R,m,l,p,A,h,R,E,l,v)}}r.push(-n/2,-e/2,-t/2,n/2,-e/2,-t/2,n/2,-e/2,t/2,-n/2,-e/2,-t/2,n/2,-e/2,t/2,-n/2,-e/2,t/2);const s=new ke;return s.setAttribute("position",new Ye(new Float32Array(r),3)),s.computeVertexNormals(),s}function Wc(n,e,t){const i=n/2,r=e/2,s=t/2,a=new Float32Array([-i,-r,-s,i,-r,-s,i,-r,s,-i,-r,-s,i,-r,s,-i,-r,s,-i,-r,-s,0,r,-s,0,r,s,-i,-r,-s,0,r,s,-i,-r,s,i,-r,s,0,r,s,0,r,-s,i,-r,s,0,r,-s,i,-r,-s,-i,-r,s,0,r,s,i,-r,s,i,-r,-s,0,r,-s,-i,-r,-s]),c=new ke;return c.setAttribute("position",new Ye(a,3)),c.computeVertexNormals(),c}function lx(n,e,t){const i=n/2,r=e/2,s=t/2,a=Math.min(n,t)/4,c=new Float32Array([-i,-r,-s,i,-r,-s,i,-r,s,-i,-r,-s,i,-r,s,-i,-r,s,-i,-r,s,-i+a,r,s-a,i-a,r,s-a,-i,-r,s,i-a,r,s-a,i,-r,s,i,-r,-s,i-a,r,-s+a,-i+a,r,-s+a,i,-r,-s,-i+a,r,-s+a,-i,-r,-s,-i,-r,-s,-i+a,r,-s+a,-i+a,r,s-a,-i,-r,-s,-i+a,r,s-a,-i,-r,s,i,-r,s,i-a,r,s-a,i-a,r,-s+a,i,-r,s,i-a,r,-s+a,i,-r,-s,-i+a,r,-s+a,i-a,r,-s+a,i-a,r,s-a,-i+a,r,-s+a,i-a,r,s-a,-i+a,r,s-a]),o=new ke;return o.setAttribute("position",new Ye(c,3)),o.computeVertexNormals(),o}function ux(n,e,t){const i=n/8,r=[],s=new S(n,i,t);s.translate(0,-e/2+i/2,0),r.push(s);const a=new S(i,e,t);a.translate(-n/2+i/2,0,0),r.push(a);const c=new S(i,e,t);c.translate(n/2-i/2,0,0),r.push(c);const o=se(r);return r.forEach(l=>l.dispose()),o}function hx(n,e,t){const i=Math.min(n,t)/8,r=[],s=new S(n,i,i*2);s.translate(0,-e/2+i/2,t/2-i),r.push(s);const a=new S(i*2,i,t-i*2);a.translate(-n/2+i,-e/2+i/2,-i),r.push(a);const c=new S(n,e,i);c.translate(0,0,t/2-i/2),r.push(c);const o=new S(i,e,t-i);o.translate(-n/2+i/2,0,-i/2),r.push(o);const l=new S(i,e,i);l.translate(n/2-i/2,0,-t/2+i/2),r.push(l);const u=se(r);return r.forEach(h=>h.dispose()),u}function fx(n,e,t){const i=n/8,r=[],s=new S(n,i,t);s.translate(0,-e/2+i/2,0),r.push(s);const a=new S(i,e,t);a.translate(-n/2+i/2,0,0),r.push(a);const c=new S(i,e,t);c.translate(n/2-i/2,0,0),r.push(c);const o=new S(n-i*2,e,i);o.translate(0,0,-t/2+i/2),r.push(o);const l=se(r);return r.forEach(u=>u.dispose()),l}function dx(n,e,t){const i=Math.min(n,e,t)/8,r=n/2,s=e/2,a=t/2,c=[];c.push(-r+i,s,-a+i,r-i,s,-a+i,r-i,s,a-i,-r+i,s,-a+i,r-i,s,a-i,-r+i,s,a-i),c.push(-r+i,-s,a-i,r-i,-s,a-i,r-i,-s,-a+i,-r+i,-s,a-i,r-i,-s,-a+i,-r+i,-s,-a+i),c.push(-r+i,-s+i,a,r-i,-s+i,a,r-i,s-i,a,-r+i,-s+i,a,r-i,s-i,a,-r+i,s-i,a),c.push(r-i,-s+i,-a,-r+i,-s+i,-a,-r+i,s-i,-a,r-i,-s+i,-a,-r+i,s-i,-a,r-i,s-i,-a),c.push(-r,-s+i,-a+i,-r,-s+i,a-i,-r,s-i,a-i,-r,-s+i,-a+i,-r,s-i,a-i,-r,s-i,-a+i),c.push(r,-s+i,a-i,r,-s+i,-a+i,r,s-i,-a+i,r,-s+i,a-i,r,s-i,-a+i,r,s-i,a-i),c.push(-r+i,s,a-i,r-i,s,a-i,r-i,s-i,a,-r+i,s,a-i,r-i,s-i,a,-r+i,s-i,a),c.push(r-i,s,-a+i,-r+i,s,-a+i,-r+i,s-i,-a,r-i,s,-a+i,-r+i,s-i,-a,r-i,s-i,-a),c.push(-r+i,s,-a+i,-r+i,s,a-i,-r,s-i,a-i,-r+i,s,-a+i,-r,s-i,a-i,-r,s-i,-a+i),c.push(r-i,s,a-i,r-i,s,-a+i,r,s-i,-a+i,r-i,s,a-i,r,s-i,-a+i,r,s-i,a-i),c.push(-r+i,-s+i,a,r-i,-s+i,a,r-i,-s,a-i,-r+i,-s+i,a,r-i,-s,a-i,-r+i,-s,a-i),c.push(r-i,-s+i,-a,-r+i,-s+i,-a,-r+i,-s,-a+i,r-i,-s+i,-a,-r+i,-s,-a+i,r-i,-s,-a+i),c.push(-r,-s+i,a-i,-r,-s+i,-a+i,-r+i,-s,-a+i,-r,-s+i,a-i,-r+i,-s,-a+i,-r+i,-s,a-i),c.push(r,-s+i,-a+i,r,-s+i,a-i,r-i,-s,a-i,r,-s+i,-a+i,r-i,-s,a-i,r-i,-s,-a+i),c.push(-r+i,-s+i,a,-r,-s+i,a-i,-r,s-i,a-i,-r+i,-s+i,a,-r,s-i,a-i,-r+i,s-i,a),c.push(r,-s+i,a-i,r-i,-s+i,a,r-i,s-i,a,r,-s+i,a-i,r-i,s-i,a,r,s-i,a-i),c.push(-r,-s+i,-a+i,-r+i,-s+i,-a,-r+i,s-i,-a,-r,-s+i,-a+i,-r+i,s-i,-a,-r,s-i,-a+i),c.push(r-i,-s+i,-a,r,-s+i,-a+i,r,s-i,-a+i,r-i,-s+i,-a,r,s-i,-a+i,r-i,s-i,-a);const o=new ke;return o.setAttribute("position",new Ye(new Float32Array(c),3)),o.computeVertexNormals(),o}function px(n,e={w:1,h:1,d:1}){const t=e.w,i=e.h,r=e.d,s=rg[n]||1,a=sg[n]||0,c=i*s;let o={min:{x:0,y:a,z:0},max:{x:t,y:a+c,z:r}};switch(n){case"pillar":o.min.x=t*.25,o.max.x=t*.75,o.min.z=r*.25,o.max.z=r*.75;break;case"pillar2":o.min.x=t*.375,o.max.x=t*.625,o.min.z=r*.375,o.max.z=r*.625;break;case"pillar4":o.min.x=t*.4375,o.max.x=t*.5625,o.min.z=r*.4375,o.max.z=r*.5625;break;case"beamX":o.min.z=r*.25,o.max.z=r*.75;break;case"beam2X":o.min.z=r*.375,o.max.z=r*.625;break;case"beam4X":o.min.z=r*.4375,o.max.z=r*.5625;break;case"beamZ":o.min.x=t*.25,o.max.x=t*.75;break;case"beam2Z":o.min.x=t*.375,o.max.x=t*.625;break;case"beam4Z":o.min.x=t*.4375,o.max.x=t*.5625;break;case"beamXLow":o.min.z=r*.25,o.max.z=r*.75;break;case"beam2XLow":o.min.z=r*.375,o.max.z=r*.625;break;case"beamZLow":o.min.x=t*.25,o.max.x=t*.75;break;case"beam2ZLow":o.min.x=t*.375,o.max.x=t*.625;break;case"wall":o.min.z=r*.25,o.max.z=r*.75;break;case"wall4":o.min.z=r*.375,o.max.z=r*.625;break;case"wall8":o.min.z=r*.4375,o.max.z=r*.5625;break;case"panel":o.min.z=r*.46875,o.max.z=r*.53125;break;case"wallFront":o.min.z=r*.75,o.max.z=r;break;case"wallBack":o.min.z=0,o.max.z=r*.25;break;case"cylinder":case"cylinderHalf":const l=(1-Math.SQRT1_2)/2;o.min.x=t*l,o.max.x=t*(1-l),o.min.z=r*l,o.max.z=r*(1-l);break;case"quarter":case"quarterTall":o.max.x=t*.5,o.max.z=r*.5;break;case"cone":case"sphere":case"dome":const u=(1-Math.SQRT1_2)/2;o.min.x=t*u,o.max.x=t*(1-u),o.min.z=r*u,o.max.z=r*(1-u);break;case"arch":case"archLow":case"archWide":break;case"cross":break;case"frame":break;case"fence":o.min.z=r*.375,o.max.z=r*.625;break;case"fenceZ":o.min.x=t*.375,o.max.x=t*.625;break;case"railing":o.min.z=r*.375,o.max.z=r*.625;break;case"railingZ":o.min.x=t*.375,o.max.x=t*.625;break;case"pipeX":o.min.y=i*.25,o.max.y=i*.75,o.min.z=r*.25,o.max.z=r*.75;break;case"pipeY":o.min.x=t*.25,o.max.x=t*.75,o.min.z=r*.25,o.max.z=r*.75;break;case"pipeZ":o.min.x=t*.25,o.max.x=t*.75,o.min.y=i*.25,o.max.y=i*.75;break;case"pipeElbow":case"pipeElbow2":case"pipeElbow3":case"pipeElbow4":case"pipeCross":case"pipeT":case"pipeTY":o.min.y=i*.25,o.max.y=i*.75;break;case"prism":break;case"halfX":o.max.x=t*.5;break;case"halfZ":o.max.z=r*.5;break;case"halfCorner":o.max.x=t*.5,o.max.z=r*.5;break;case"pillarRound":o.min.x=t*.25,o.max.x=t*.75,o.min.z=r*.25,o.max.z=r*.75;break;case"pillarRound2":o.min.x=t*.375,o.max.x=t*.625,o.min.z=r*.375,o.max.z=r*.625;break;case"beamDiag":break;case"wallCorner":case"wallCornerInner":break;case"wedgeInner":break;case"stairsCorner":case"stairsCornerInner":break;case"pyramid":break;case"octagon":const h=(1-Math.SQRT1_2)/2;o.min.x=t*h,o.max.x=t*(1-h),o.min.z=r*h,o.max.z=r*(1-h);break;case"tube":const f=(1-Math.SQRT1_2)/2;o.min.x=t*f,o.max.x=t*(1-f),o.min.z=r*f,o.max.z=r*(1-f);break;case"archHalf":break;case"lShape":case"tShape":case"cShape":break;case"ledge":case"gutter":case"capital":case"base":break;case"windowFrame":case"doorFrame":break;case"cornice":o.max.y=i*.25,o.max.z=r*.5;break;case"column":o.min.x=t*.15,o.max.x=t*.85,o.min.z=r*.15,o.max.z=r*.85;break;case"baluster":o.min.x=t*.35,o.max.x=t*.65,o.min.z=r*.35,o.max.z=r*.65;break;case"windowSill":o.max.y=i*.25;break;case"shingle":o.max.y=i*.25;break;case"chimney":o.min.x=t*.1,o.max.x=t*.9,o.min.z=r*.1,o.max.z=r*.9;break;case"buttress":break;case"bench":o.max.y=i*.5;break;case"table":break;case"chair":o.max.z=r*.6;break;case"barrel":o.min.x=t*.1,o.max.x=t*.9,o.min.z=r*.1,o.max.z=r*.9;break;case"crate":break;case"planter":break;case"ladder":o.min.z=r*.35,o.max.z=r*.65;break;case"tank":o.min.x=t*.1,o.max.x=t*.9,o.min.z=r*.1,o.max.z=r*.9;break;case"valve":o.min.x=t*.25,o.max.x=t*.75,o.min.z=r*.25,o.max.z=r*.75;break;case"vent":o.max.y=i*.25;break;case"iBeam":o.min.z=r*.35,o.max.z=r*.65;break;case"catwalk":o.max.y=i*.125;break;case"rock":o.min.x=t*.1,o.max.x=t*.9,o.min.z=r*.1,o.max.z=r*.9,o.max.y=i*.7;break;case"bush":o.min.x=t*.1,o.max.x=t*.9,o.min.z=r*.1,o.max.z=r*.9;break;case"logX":o.min.y=0,o.max.y=i*.5,o.min.z=r*.15,o.max.z=r*.85;break;case"logZ":o.min.y=0,o.max.y=i*.5,o.min.x=t*.15,o.max.x=t*.85;break;case"acUnit":break;case"solarPanel":o.max.y=i*.15;break;case"antenna":o.min.x=t*.4,o.max.x=t*.6,o.min.z=r*.4,o.max.z=r*.6;break;case"barrier":o.max.y=i*.5;break;case"quarterPipe":break;case"bowl":break;case"hexagon":o.min.x=t*.07,o.max.x=t*.93,o.min.z=r*.07,o.max.z=r*.93;break;case"roundedCube":break;case"chamfer":break;case"merlon":o.min.x=t*.1,o.max.x=t*.9,o.min.z=r*.1,o.max.z=r*.9;break;case"arrowSlit":o.max.z=r*.25;break;case"torch":o.min.x=t*.35,o.max.x=t*.65,o.min.z=r*.35,o.max.z=r*.65;break;case"chain":o.min.x=t*.4,o.max.x=t*.6,o.min.z=r*.4,o.max.z=r*.6;break;case"post":o.min.x=t*.375,o.max.x=t*.625,o.min.z=r*.375,o.max.z=r*.625;break;case"bollard":o.min.x=t*.25,o.max.x=t*.75,o.min.z=r*.25,o.max.z=r*.75,o.max.y=i*.75;break;case"conduit":o.min.y=i*.35,o.max.y=i*.65,o.min.z=r*.35,o.max.z=r*.65;break;case"conduitCorner":o.min.x=t*.3,o.max.x=t*.7,o.min.z=r*.3,o.max.z=r*.7;break;case"cable":case"cableX":o.min.y=i*.44,o.max.y=i*.56,o.min.z=r*.44,o.max.z=r*.56;break;case"cableY":o.min.x=t*.44,o.max.x=t*.56,o.min.z=r*.44,o.max.z=r*.56;break;case"cableZ":o.min.x=t*.44,o.max.x=t*.56,o.min.y=i*.44,o.max.y=i*.56;break;case"cableElbow":case"cableElbowY":case"cableT":o.min.x=t*.3,o.max.x=t*.7,o.min.y=i*.4,o.max.y=i*.6,o.min.z=r*.3,o.max.z=r*.7;break;case"cableHanging":case"cableDroop":case"cableLoop":o.min.x=t*.35,o.max.x=t*.65,o.min.z=r*.35,o.max.z=r*.65;break;case"crossBeam":o.min.y=i*.375,o.max.y=i*.625;break;case"truss":o.min.z=r*.4,o.max.z=r*.6;break;case"parapet":o.max.y=i*.5,o.min.z=r*.375,o.max.z=r*.625;break;case"crenellation":o.min.z=r*.25,o.max.z=r*.75;break;case"trianglePrism":case"triangleRight":case"triangleEqui":case"pentahedron":break;case"tetrahedron":o.min.x=t*.2,o.max.x=t*.8,o.min.z=r*.2,o.max.z=r*.8;break;case"stairsSingle":o.max.y=i*.25,o.min.z=r*.25,o.max.z=r*.75;break;case"landing":o.max.y=i*.25;break;case"spiralStep":o.max.y=i*.25;break;case"step":o.max.y=i*.25;break;case"platform":o.max.y=i*.125;break;case"torus":o.min.x=t*.15,o.max.x=t*.85,o.min.y=i*.4,o.max.y=i*.6,o.min.z=r*.15,o.max.z=r*.85;break;case"capsule":case"pill":o.min.x=t*.2,o.max.x=t*.8,o.min.z=r*.2,o.max.z=r*.8;break;case"hemisphere":const d=(1-Math.SQRT1_2)/2;o.min.x=t*d,o.max.x=t*(1-d),o.min.z=r*d,o.max.z=r*(1-d),o.max.y=i*.5;break;case"egg":o.min.x=t*.2,o.max.x=t*.8,o.min.z=r*.2,o.max.z=r*.8;break;case"gothicArch":case"flatArch":break;case"keystone":o.min.x=t*.25,o.max.x=t*.75,o.min.z=r*.25,o.max.z=r*.75;break;case"downspout":o.min.x=t*.35,o.max.x=t*.65,o.min.z=r*.35,o.max.z=r*.65;break;case"star":case"heart":o.min.x=t*.1,o.max.x=t*.9,o.min.z=r*.1,o.max.z=r*.9;break;case"diamond":o.min.x=t*.25,o.max.x=t*.75,o.min.z=r*.25,o.max.z=r*.75;break;case"gem":case"crystal":o.min.x=t*.2,o.max.x=t*.8,o.min.z=r*.2,o.max.z=r*.8;break;case"cornerTrim":o.max.x=t*.5,o.max.z=r*.5;break;case"edgeTrim":o.max.y=i*.25,o.min.z=r*.4375,o.max.z=r*.5625;break;case"moldingX":o.min.y=i*.4375,o.max.y=i*.5625,o.min.z=r*.4375,o.max.z=r*.5625;break;case"moldingZ":o.min.x=t*.4375,o.max.x=t*.5625,o.min.y=i*.4375,o.max.y=i*.5625;break;case"bracket":o.max.x=t*.5,o.max.z=r*.5;break;case"finial":o.min.x=t*.2,o.max.x=t*.8,o.min.z=r*.2,o.max.z=r*.8;break;case"pediment":o.max.y=i*.5;break;case"dentil":o.min.x=t*.4,o.max.x=t*.6,o.max.y=i*.25,o.min.z=r*.25,o.max.z=r*.75;break;case"awning":o.max.y=i*.25;break;case"canopy":o.max.y=i*.125;break;case"pergola":break;case"tarp":o.max.y=i*.05;break;case"umbrella":o.min.x=t*.4,o.max.x=t*.6,o.min.z=r*.4,o.max.z=r*.6;break;case"stool":o.min.x=t*.2,o.max.x=t*.8,o.min.z=r*.2,o.max.z=r*.8;break;case"shelf":o.max.y=i*.125,o.min.z=r*.1,o.max.z=r*.9;break;case"bed":case"desk":break;case"crateOpen":case"crateLarge":break;case"pallet":o.max.y=i*.15;break;case"shelfUnit":case"locker":case"cabinet":break;case"cardboardBox":o.min.x=t*.1,o.max.x=t*.9,o.min.z=r*.1,o.max.z=r*.9;break;case"sack":o.min.x=t*.15,o.max.x=t*.85,o.min.z=r*.15,o.max.z=r*.85,o.max.y=i*.7;break;case"bin":o.min.x=t*.1,o.max.x=t*.9,o.min.z=r*.1,o.max.z=r*.9;break;case"dumpster":break;case"grateFloor":o.max.y=i*.1;break;case"ductX":o.min.y=i*.25,o.max.y=i*.75,o.min.z=r*.25,o.max.z=r*.75;break;case"ductZ":o.min.x=t*.25,o.max.x=t*.75,o.min.y=i*.25,o.max.y=i*.75;break;case"ductCorner":o.min.y=i*.25,o.max.y=i*.75;break;case"hopper":case"conveyor":break;case"spotlight":o.min.x=t*.25,o.max.x=t*.75,o.min.z=r*.25,o.max.z=r*.75;break;case"bulb":o.min.x=t*.2,o.max.x=t*.8,o.min.y=i*.2,o.max.y=i*.8,o.min.z=r*.2,o.max.z=r*.8;break;case"lightFixture":o.max.y=i*.3;break;case"stump":o.min.x=t*.15,o.max.x=t*.85,o.min.z=r*.15,o.max.z=r*.85,o.max.y=i*.5;break;case"boulder":o.min.x=t*.1,o.max.x=t*.9,o.min.z=r*.1,o.max.z=r*.9;break;case"grass":case"flower":o.min.x=t*.2,o.max.x=t*.8,o.min.z=r*.2,o.max.z=r*.8;break;case"trafficCone":o.min.x=t*.2,o.max.x=t*.8,o.min.z=r*.2,o.max.z=r*.8,o.max.y=i*.75;break;case"sign":o.min.z=r*.4,o.max.z=r*.6;break;case"monitor":o.min.z=r*.3,o.max.z=r*.7;break;case"speaker":o.min.x=t*.2,o.max.x=t*.8,o.min.z=r*.2,o.max.z=r*.8;break;case"transformer":o.min.x=t*.1,o.max.x=t*.9,o.min.z=r*.1,o.max.z=r*.9;break;case"powerBox":case"fuseBox":o.min.z=r*.3,o.max.z=r;break;case"outlet":case"switchBox":o.min.x=t*.3,o.max.x=t*.7,o.min.z=r*.4,o.max.z=r,o.min.y=i*.3,o.max.y=i*.7;break;case"rampStraight":case"rampWide":break;case"roofCorner":case"roofValley":case"gable":break;case"drain":case"grate":o.max.y=i*.15;break;case"shield":o.min.z=r*.3,o.max.z=r*.7;break;case"banner":o.min.x=t*.4,o.max.x=t*.6,o.min.z=r*.4,o.max.z=r*.6;break;case"portcullis":o.min.z=r*.4,o.max.z=r*.6;break;case"wheel":o.min.x=t*.1,o.max.x=t*.9,o.min.y=i*.1,o.max.y=i*.9,o.min.z=r*.4,o.max.z=r*.6;break;case"axle":o.min.x=t*.45,o.max.x=t*.55,o.min.y=i*.45,o.max.y=i*.55;break;case"seat":o.max.y=i*.6;break;case"hull":case"wing":break;case"propeller":o.min.x=t*.2,o.max.x=t*.8,o.min.z=r*.4,o.max.z=r*.6;break;case"derrickLeg":o.min.x=t*.3,o.max.x=t*.7,o.min.z=r*.3,o.max.z=r*.7;break;case"derrickCross":o.min.y=i*.4,o.max.y=i*.6;break;case"derrickPlatform":o.max.y=i*.2;break;case"pumpJack":break;case"pumpBase":o.min.x=t*.1,o.max.x=t*.9,o.min.z=r*.2,o.max.z=r*.8,o.max.y=i*.25;break;case"oilTank":case"oilTankSmall":o.min.x=t*.1,o.max.x=t*.9,o.min.z=r*.1,o.max.z=r*.9;break;case"wellHead":o.min.x=t*.25,o.max.x=t*.75,o.min.z=r*.25,o.max.z=r*.75;break;case"pipelineX":o.min.y=i*.2,o.max.y=i*.8,o.min.z=r*.2,o.max.z=r*.8;break;case"pipelineZ":o.min.x=t*.2,o.max.x=t*.8,o.min.y=i*.2,o.max.y=i*.8;break;case"oilBarrel":o.min.x=t*.15,o.max.x=t*.85,o.min.z=r*.15,o.max.z=r*.85;break}return o}function mM(n,e){return n.min.x<e.max.x-.01&&n.max.x>e.min.x+.01&&n.min.y<e.max.y-.01&&n.max.y>e.min.y+.01&&n.min.z<e.max.z-.01&&n.max.z>e.min.z+.01}function gM(n){const e=px(n.type,n.dimensions),t=n.gridPosition,i=n.scale||1,r=n.rotation||{x:0,y:0,z:0},s=n.dimensions||{w:1,h:1,d:1},a=s.w*i/2,c=s.h*i/2,o=s.d*i/2,l=e.min.x*i-a,u=e.max.x*i-a,h=e.min.y*i-c,f=e.max.y*i-c,d=e.min.z*i-o,g=e.max.z*i-o,_=[{x:l,y:h,z:d},{x:u,y:h,z:d},{x:l,y:f,z:d},{x:u,y:f,z:d},{x:l,y:h,z:g},{x:u,y:h,z:g},{x:l,y:f,z:g},{x:u,y:f,z:g}],m=(r.y%360+360)%360,p=m*Math.PI/180,E=Math.cos(p),v=Math.sin(p),x=(r.x%360+360)%360,D=x*Math.PI/180,A=Math.cos(D),R=Math.sin(D),L=(r.z%360+360)%360,w=L*Math.PI/180,y=Math.cos(w),I=Math.sin(w);let V=1/0,z=-1/0,H=1/0,J=-1/0,G=1/0,Q=-1/0;for(const xe of _){let De=xe.x,Ze=xe.y,Z=xe.z;if(x!==0){const te=Ze*A-Z*R,ve=Ze*R+Z*A;Ze=te,Z=ve}if(m!==0){const te=De*E+Z*v,ve=-De*v+Z*E;De=te,Z=ve}if(L!==0){const te=De*y-Ze*I,ve=De*I+Ze*y;De=te,Ze=ve}V=Math.min(V,De),z=Math.max(z,De),H=Math.min(H,Ze),J=Math.max(J,Ze),G=Math.min(G,Z),Q=Math.max(Q,Z)}const W=t.x+a,ce=t.y+c,pe=t.z+o;return{min:{x:W+V,y:ce+H,z:pe+G},max:{x:W+z,y:ce+J,z:pe+Q}}}function mx(n,e,t){const i=[],r=new S(n,e*.25,t*.25);i.push(r);const s=new S(n*.25,e*.25,t);return i.push(s),Le(i)}function gx(n,e,t){const i=[],r=Math.min(n,t)*.1,s=new S(n,r,r);s.translate(0,e*.4,0),i.push(s);const a=new S(n,r,r);a.translate(0,-e*.4,0),i.push(a);const c=3;for(let o=0;o<c;o++){const l=-n*.35+o*(n*.35),u=new S(r,e*.9,r);u.rotateZ(o%2===0?.5:-.5),u.translate(l,0,0),i.push(u)}return Le(i)}function _x(n,e,t){const i=[],r=n*.3,s=new S(n,e*.3,t*.25);return s.translate(0,-e*.1,0),i.push(s),[-n*.35,0,n*.35].forEach(c=>{const o=new S(r,e*.5,t*.25);o.translate(c,e*.15,0),i.push(o)}),Le(i)}function ls(n,e,t){const i=n/2,r=e/2,s=t/2,a=new Float32Array([-i,-r,s,i,-r,s,0,r,s,i,-r,-s,-i,-r,-s,0,r,-s,-i,-r,-s,i,-r,-s,i,-r,s,-i,-r,-s,i,-r,s,-i,-r,s,-i,-r,s,0,r,s,0,r,-s,-i,-r,s,0,r,-s,-i,-r,-s,i,-r,s,i,-r,-s,0,r,-s,i,-r,s,0,r,-s,0,r,s]),c=new ke;return c.setAttribute("position",new Ye(a,3)),c.computeVertexNormals(),c}function xx(n,e,t){const i=n/2,r=e/2,s=t/2,a=new Float32Array([-i,-r,s,i,-r,s,-i,r,s,i,-r,-s,-i,-r,-s,-i,r,-s,-i,-r,-s,i,-r,-s,i,-r,s,-i,-r,-s,i,-r,s,-i,-r,s,-i,-r,s,-i,r,s,-i,r,-s,-i,-r,s,-i,r,-s,-i,-r,-s,i,-r,s,i,-r,-s,-i,r,-s,i,-r,s,-i,r,-s,-i,r,s]),c=new ke;return c.setAttribute("position",new Ye(a,3)),c.computeVertexNormals(),c}function vx(n,e,t){const i=n/2,r=e/2,s=t/2,a=new Float32Array([-i,-r,s,i,-r,s,0,r,0,-i,-r,s,0,r,0,-i,-r,-s,i,-r,s,i,-r,-s,0,r,0,-i,-r,-s,0,r,0,i,-r,-s,-i,-r,-s,i,-r,-s,i,-r,s,-i,-r,-s,i,-r,s,-i,-r,s]),c=new ke;return c.setAttribute("position",new Ye(a,3)),c.computeVertexNormals(),c}function Mx(n,e,t){const i=n/2,r=e/2,s=t/2,a=new Float32Array([-i,-r,-s,i,-r,-s,i,-r,s,-i,-r,-s,i,-r,s,-i,-r,s,-i,-r,s,i,-r,s,0,r,0,i,-r,s,i,-r,-s,0,r,0,i,-r,-s,-i,-r,-s,0,r,0,-i,-r,-s,-i,-r,s,0,r,0]),c=new ke;return c.setAttribute("position",new Ye(a,3)),c.computeVertexNormals(),c}function yx(n,e,t){return new ue(n*.5,n*.5,e*.25,8,1,!1,0,Math.PI/2)}function bx(n,e,t){const i=Math.min(n,t)/2;return new ut(i,16,8,0,Math.PI*2,0,Math.PI/2)}function Sx(n,e,t){const i=new ut(Math.min(n,t)*.4,12,8),r=i.attributes.position;for(let s=0;s<r.count;s++){const a=r.getY(s);a>0&&r.setY(s,a*1.3)}return i.computeVertexNormals(),i}function Ex(n,e,t){const i=[],r=t*.25,s=new S(n*.2,e*.6,r);s.translate(-n*.4,-e*.2,0),i.push(s);const a=new S(n*.2,e*.6,r);a.translate(n*.4,-e*.2,0),i.push(a);const c=ls(n*.6,e*.4,r);return c.translate(0,e*.3,0),i.push(c),Le(i)}function wx(n,e,t){return new S(n,e*.25,t*.25)}function Tx(n,e,t){const i=n*.3,r=e*.5,s=t*.3,a=new Float32Array([-i,-r,s,i,-r,s,i*.7,r,s,-i,-r,s,i*.7,r,s,-i*.7,r,s,i,-r,-s,-i,-r,-s,-i*.7,r,-s,i,-r,-s,-i*.7,r,-s,i*.7,r,-s,-i*.7,r,s,i*.7,r,s,i*.7,r,-s,-i*.7,r,s,i*.7,r,-s,-i*.7,r,-s,-i,-r,-s,i,-r,-s,i,-r,s,-i,-r,-s,i,-r,s,-i,-r,s,-i,-r,s,-i*.7,r,s,-i*.7,r,-s,-i,-r,s,-i*.7,r,-s,-i,-r,-s,i,-r,s,i,-r,-s,i*.7,r,-s,i,-r,s,i*.7,r,-s,i*.7,r,s]),c=new ke;return c.setAttribute("position",new Ye(a,3)),c.computeVertexNormals(),c}function Ax(n,e,t){return new ue(n*.4,n*.4,e*.25,5,1)}function Cx(n,e,t){const i=[],r=new ut(n*.25,8,6);r.translate(-n*.15,e*.1,0),i.push(r);const s=new ut(n*.25,8,6);s.translate(n*.15,e*.1,0),i.push(s);const a=new bt(n*.35,e*.4,8);return a.rotateZ(Math.PI),a.translate(0,-e*.15,0),i.push(a),Le(i)}function Rx(n,e,t){const i=[],r=new S(n*.15,e,t*.15);return r.translate(-n*.425,0,-t*.425),i.push(r),Le(i)}function Xc(n,e,t){return new S(n,e,t)}function Px(n,e,t){const i=[],r=new S(n*.2,e*.5,t*.2);r.translate(0,e*.25,-t*.15),i.push(r);const s=new S(n*.2,e*.2,t*.5);s.translate(0,0,t*0),i.push(s);const a=new S(n*.15,e*.5,t*.1);return a.rotateX(-Math.PI/4),a.translate(0,e*.1,-t*.05),i.push(a),Le(i)}function Lx(n,e,t){const i=[],r=new ue(n*.25,n*.3,e*.2,8);r.translate(0,-e*.3,0),i.push(r);const s=new ut(n*.2,8,6);s.translate(0,e*.1,0),i.push(s);const a=new bt(n*.1,e*.3,8);return a.translate(0,e*.35,0),i.push(a),Le(i)}function Ix(n,e,t){return ls(n,e*.5,t*.3)}function Dx(n,e,t){return $t(n,e*.25,t,1)}function Ux(n,e,t){const i=[],r=n*.1;for(let s=-1;s<=1;s++){const a=new S(n,e*.1,r);a.translate(0,0,s*t*.35),i.push(a)}return Le(i)}function Nx(n,e,t){const i=[],r=new ue(n*.03,n*.03,e*.7,8);r.translate(0,-e*.1,0),i.push(r);const s=new bt(n*.45,e*.3,8);return s.rotateZ(Math.PI),s.translate(0,e*.25,0),i.push(s),Le(i)}function Fx(n,e,t){const i=[],r=new ue(n*.35,n*.3,e*.1,8);r.translate(0,e*.2,0),i.push(r);for(let s=0;s<4;s++){const a=s*Math.PI/2+Math.PI/4,c=new ue(n*.05,n*.05,e*.4,6);c.translate(Math.cos(a)*n*.2,-e*.05,Math.sin(a)*t*.2),i.push(c)}return Le(i)}function Ox(n,e,t){const i=[],r=new S(n*.9,e*.25,t*.9);r.translate(0,e*.05,0),i.push(r);const s=new S(n*.9,e*.4,t*.1);s.translate(0,e*.1,-t*.45),i.push(s);const a=new S(n,e*.15,t);return a.translate(0,-e*.15,0),i.push(a),Le(i)}function zx(n,e,t){const i=[],r=new S(n,e*.1,t);r.translate(0,e*.35,0),i.push(r);const s=n*.08,a=e*.7;[[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([l,u])=>{const h=new S(s,a,s);h.translate(l*(n*.42),-e*.05,u*(t*.42)),i.push(h)});const o=new S(n*.4,e*.2,t*.8);return o.translate(n*.25,e*.1,0),i.push(o),Le(i)}function Bx(n,e,t){const i=[],s=new S(n*.85,e*.05,t*.85);s.translate(0,-e*.35,0),i.push(s);const a=new S(n*.9,e*.7,.05*n);a.translate(0,0,t*.4),i.push(a);const c=a.clone();c.translate(0,0,-t*.8),i.push(c);const o=new S(.05*n,e*.7,t*.85);o.translate(-n*.42,0,0),i.push(o);const l=o.clone();return l.translate(n*.84,0,0),i.push(l),Le(i)}function kx(n,e,t){const i=[],r=new S(n*.95,e*.8,t*.95);r.translate(0,-e*.1,0),i.push(r);const s=new S(n,e*.1,t*.5);return s.translate(0,e*.35,-t*.25),i.push(s),Le(i)}function Vx(n,e,t){const i=[],r=n*.05,s=n*.15,a=Math.floor(n/s);for(let c=0;c<=a;c++){const o=new S(r,e*.125,t);o.translate(-n*.4+c*s,0,0),i.push(o)}return Le(i)}function Hx(n,e,t){const i=[],r=e*.5,s=new S(n*.5,r,t*.5);s.translate(n*.25,0,0),i.push(s);const a=new S(n*.5,r,t*.5);return a.translate(0,0,t*.25),i.push(a),Le(i)}function Gx(n,e,t){return new ue(n*.2,n*.4,e,8)}function Wx(n,e,t){const i=[],r=new S(n,e*.1,t*.8);r.translate(0,e*.05,0),i.push(r);const s=new ue(e*.1,e*.1,t*.9,8);s.rotateX(Math.PI/2),s.translate(-n*.4,-e*.05,0),i.push(s);const a=s.clone();return a.translate(n*.8,0,0),i.push(a),Le(i)}function Xx(n,e,t){const i=[],r=new ue(n*.2,n*.15,e*.3,8);r.translate(0,e*.1,0),i.push(r);const s=new S(n*.1,e*.2,t*.1);return s.translate(0,-e*.15,0),i.push(s),Le(i)}function Zx(n,e,t){return new Ht(Math.min(n,e,t)*.4,0)}function Yx(n,e,t){const i=[];for(let r=0;r<5;r++){const s=new bt(n*.05,e*.25,4),a=(Math.random()-.5)*n*.6,c=(Math.random()-.5)*t*.6;s.translate(a,0,c),i.push(s)}return Le(i)}function qx(n,e,t){const i=[],r=new ue(n*.02,n*.02,e*.4,6);r.translate(0,-e*.05,0),i.push(r);const s=new ut(n*.15,8,6);return s.translate(0,e*.2,0),i.push(s),Le(i)}function Jx(n,e,t){const i=[],r=new S(n*.1,e*.7,t*.1);r.translate(0,-e*.15,0),i.push(r);const s=new S(n*.8,e*.5,t*.05);return s.translate(0,e*.25,0),i.push(s),Le(i)}function Kx(n,e,t){const i=[],r=new S(n*.9,e*.6,t*.1);r.translate(0,e*.1,0),i.push(r);const s=new S(n*.2,e*.3,t*.3);return s.translate(0,-e*.25,0),i.push(s),Le(i)}function $x(n,e,t){const i=[],r=new S(n*.8,e*.5,t*.6);i.push(r);const s=new ue(n*.25,n*.15,t*.2,12);return s.rotateX(Math.PI/2),s.translate(0,0,t*.35),i.push(s),Le(i)}function jx(n,e,t){const i=new Pt(Math.min(n,e,t)*.4,0);return i.scale(1,1.3,1),i}function Qx(n,e,t){const i=[],r=new bt(n*.25,e*.8,6);r.translate(0,e*.1,0),i.push(r);const s=new bt(n*.12,e*.4,6);s.translate(n*.2,-e*.1,t*.1),i.push(s);const a=new bt(n*.1,e*.3,6);return a.translate(-n*.15,-e*.15,-t*.15),i.push(a),Le(i)}function ev(n,e,t){const i=n/2,r=e/2,s=t/2,a=new Float32Array([-i,-r,-s,i,-r,-s,i,-r,s,-i,-r,-s,i,-r,s,-i,-r,s,-i,-r,s,i,-r,s,i,r,-s,i,-r,s,i,-r,-s,i,r,-s,-i,-r,-s,i,r,-s,i,-r,-s,-i,-r,-s,-i,-r,s,i,r,-s]),c=new ke;return c.setAttribute("position",new Ye(a,3)),c.computeVertexNormals(),c}function tv(n,e,t){const i=n/2,r=e/2,s=t/2,a=new Float32Array([-i,r,-s,0,-r,0,-i,r,s,i,r,-s,i,r,s,0,-r,0,-i,r,s,0,-r,0,i,r,s,i,r,-s,0,-r,0,-i,r,-s,-i,r,-s,-i,r,s,0,-r,0,i,r,s,i,r,-s,0,-r,0]),c=new ke;return c.setAttribute("position",new Ye(a,3)),c.computeVertexNormals(),c}function nv(n,e,t){return ls(n,e,t*.25)}function iv(n,e,t){const i=[],r=new ue(n*.3,n*.35,e*.25,8);i.push(r);const s=new ue(n*.32,n*.32,e*.05,8);return s.translate(0,e*.1,0),i.push(s),Le(i)}function rv(n,e,t){const i=[],r=n*.08,s=4;for(let a=0;a<s;a++){const c=new S(n*.9,e*.125,r);c.translate(0,0,-t*.3+a*t*.2),i.push(c)}return Le(i)}function sv(n,e,t){return new S(n*.7,e*.125,t*.5)}function av(n,e,t){const i=[],r=new ue(n*.03,n*.03,e,6);r.translate(-n*.4,0,0),i.push(r);const s=new S(n*.7,e*.8,t*.02);return s.translate(0,-e*.05,0),i.push(s),Le(i)}function ov(n,e,t){const i=[],r=n*.05;for(let s=0;s<5;s++){const a=new S(r,e,r);a.translate(-n*.4+s*n*.2,0,0),i.push(a)}for(let s=0;s<4;s++){const a=new S(n,r,r);a.translate(0,-e*.35+s*e*.25,0),i.push(a)}return Le(i)}function cv(n,e,t){const i=[],r=new S(n*.8,e*.15,t*.7);r.translate(0,0,0),i.push(r);const s=new S(n*.8,e*.4,t*.1);return s.translate(0,e*.2,-t*.3),i.push(s),Le(i)}function lv(n,e,t){const i=new ue(n*.3,n*.4,t,8,1,!1,0,Math.PI);return i.rotateZ(Math.PI/2),i.rotateY(Math.PI/2),i}function uv(n,e,t){const i=[],r=new ue(n*.1,n*.1,e*.25,8);i.push(r);for(let s=0;s<3;s++){const a=new S(n*.4,e*.05,t*.1);a.rotateY(s*Math.PI*2/3),a.translate(n*.2,0,0),a.rotateY(s*Math.PI*2/3),i.push(a)}return Le(i)}function hv(n,e,t){const i=n/2,r=e*.125/2,s=t/2,a=new Float32Array([-i,r,-s,i*.3,r,-s,i,r,s,-i,r,-s,i,r,s,-i,r,s,-i,-r,s,i,-r,s,i*.3,-r,-s,-i,-r,s,i*.3,-r,-s,-i,-r,-s,-i,r,s,i,r,s,i,-r,s,-i,r,s,i,-r,s,-i,-r,s,i*.3,r,-s,-i,r,-s,-i,-r,-s,i*.3,r,-s,-i,-r,-s,i*.3,-r,-s,i,r,s,i*.3,r,-s,i*.3,-r,-s,i,r,s,i*.3,-r,-s,i,-r,s]),c=new ke;return c.setAttribute("position",new Ye(a,3)),c.computeVertexNormals(),c}function fv(n,e,t){const i=Math.min(n,t)*.1,r=[],s=new S(i,e,i);r.push(s);const a=n*.35;for(let u=0;u<3;u++){const h=-e*.35+u*e*.35,f=new S(a,i*.6,i*.6);f.translate(a*.5,h,0),r.push(f)}const c=Math.sqrt(e*e*.25+a*a*.25)*.8,o=Math.atan2(e*.35,a*.5),l=new S(i*.5,c,i*.5);return l.rotateZ(-o),l.translate(a*.25,0,0),r.push(l),se(r,!1)||r[0]}function dv(n,e,t){const i=Math.min(n,t)*.08,r=[],s=new S(i,Math.sqrt(n*n+e*e)*.5,i);s.rotateZ(Math.PI*.25),r.push(s);const a=new S(i,Math.sqrt(n*n+e*e)*.5,i);return a.rotateZ(-Math.PI*.25),r.push(a),se(r,!1)||r[0]}function pv(n,e,t){const i=[],r=new S(n*.9,e*.25,t*.9);i.push(r);const s=new S(n*.95,e*.1,t*.05);s.translate(0,-e*.08,t*.45),i.push(s);const a=new S(n*.95,e*.1,t*.05);return a.translate(0,-e*.08,-t*.45),i.push(a),se(i,!1)||i[0]}function mv(n,e,t){const i=[],r=new S(n*.7,e*.08,t*.5);r.translate(0,-e*.46,0),i.push(r);const s=new S(n*.25,e*.2,t*.3);s.translate(-n*.15,-e*.32,0),i.push(s);const a=new S(n*.08,e*.55,t*.08);a.translate(-n*.05,-e*.125,t*.12),i.push(a);const c=new S(n*.08,e*.55,t*.08);c.translate(-n*.05,-e*.125,-t*.12),i.push(c);const o=new S(n*.1,e*.08,t*.35);o.translate(-n*.05,e*.15,0),i.push(o);const l=new S(n*.85,e*.08,t*.1);l.translate(n*.1,e*.22,0),i.push(l);const u=new S(n*.1,e*.15,t*.08);u.translate(n*.48,e*.15,0),i.push(u);const h=new S(n*.04,e*.12,t*.04);h.translate(n*.48,e*.02,0),i.push(h);const f=new S(n*.05,e*.25,t*.05);f.rotateZ(Math.PI*.15),f.translate(-n*.25,e*0,0),i.push(f);const d=new ue(t*.12,t*.12,n*.08,12);d.rotateZ(Math.PI/2),d.translate(-n*.28,-e*.15,0),i.push(d);const g=new S(n*.06,e*.18,t*.08);g.translate(-n*.28,-e*.06,t*.1),i.push(g);const _=new S(n*.06,e*.18,t*.08);return _.translate(-n*.28,-e*.06,-t*.1),i.push(_),se(i,!1)||i[0]}function gv(n,e,t){const i=[],r=Math.min(e,t)*.4,s=new ue(r,r,n*.8,16,1,!1);s.rotateZ(Math.PI/2),i.push(s);const a=new ut(r,12,8,0,Math.PI*2,0,Math.PI/2);a.rotateZ(Math.PI/2),a.translate(n*.4,0,0),i.push(a);const c=new ut(r,12,8,0,Math.PI*2,0,Math.PI/2);c.rotateZ(-Math.PI/2),c.translate(-n*.4,0,0),i.push(c);const o=new S(n*.1,e*.15,t*.5);o.translate(-n*.25,-r-e*.075,0),i.push(o);const l=new S(n*.1,e*.15,t*.5);l.translate(n*.25,-r-e*.075,0),i.push(l);const u=new S(n*.08,e*.2,t*.08);u.translate(-n*.25,-r-e*.25,t*.2),i.push(u);const h=new S(n*.08,e*.2,t*.08);h.translate(-n*.25,-r-e*.25,-t*.2),i.push(h);const f=new S(n*.08,e*.2,t*.08);f.translate(n*.25,-r-e*.25,t*.2),i.push(f);const d=new S(n*.08,e*.2,t*.08);return d.translate(n*.25,-r-e*.25,-t*.2),i.push(d),se(i,!1)||i[0]}function _v(n,e,t){const i=[],r=new ue(Math.min(n,t)*.35,Math.min(n,t)*.35,e*.45,12);i.push(r);const s=new ut(Math.min(n,t)*.35,12,8,0,Math.PI*2,0,Math.PI/2);s.translate(0,e*.225,0),i.push(s);const a=new ue(n*.05,n*.05,e*.15,8);return a.translate(0,e*.35,0),i.push(a),se(i,!1)||i[0]}function xv(n,e,t){const i=[],r=new ue(n*.35,n*.4,e*.15,8);r.translate(0,-e*.175,0),i.push(r);const s=new S(n*.3,e*.25,t*.3);s.translate(0,e*.025,0),i.push(s);const a=new ue(n*.12,n*.12,e*.15,8);a.translate(0,e*.175,0),i.push(a);const c=new ue(n*.08,n*.08,t*.25,8);return c.rotateX(Math.PI/2),c.translate(0,0,t*.25),i.push(c),se(i,!1)||i[0]}function vv(n,e,t){const i=Math.min(n,t)*.4,r=[],s=new ue(i*.95,i*.95,e*.9,12);r.push(s);const a=new Nt(i*.85,i*.08,6,12);a.rotateX(Math.PI/2),a.translate(0,e*.45,0),r.push(a);const c=new Nt(i*.85,i*.08,6,12);c.rotateX(Math.PI/2),c.translate(0,-e*.45,0),r.push(c);const o=new Nt(i*.95,i*.05,6,12);return o.rotateX(Math.PI/2),r.push(o),se(r,!1)||r[0]}function Mv(n,e,t){const i=new Ht(Math.min(n,e,t)*.25,0);return i.translate(0,-e*.15,0),i}function yv(n,e,t){const i=[],r=new Ht(Math.min(n,t)*.45,1);r.scale(1,.7,1),i.push(r);const s=new Ht(Math.min(n,t)*.25,0);return s.translate(n*.2,e*.1,t*.15),i.push(s),se(i,!1)||i[0]}function bv(n,e,t){const i=new Ht(Math.min(n,t)*.4,1);return i.scale(1,.3,1),i.translate(0,-e*.2,0),i}function Sv(n,e,t){const i=new Ht(Math.min(n,t)*.3,1);return i.scale(.7,1.5,.7),i}function Ev(n,e,t){const i=[],r=new Ht(Math.min(n,t)*.35,0);r.scale(1,.6,1),r.translate(0,-e*.15,0),i.push(r);const s=new bt(n*.15,e*.4,4);s.translate(-n*.1,e*.1,-t*.05),s.rotateZ(.2),i.push(s);const a=new bt(n*.12,e*.35,4);return a.translate(n*.1,e*.05,t*.1),a.rotateZ(-.15),i.push(a),se(i,!1)||i[0]}function wv(n,e,t){const i=[],r=4+Math.floor(Math.random()*3);for(let s=0;s<r;s++){const a=Math.min(n,t)*(.15+Math.random()*.2),c=new Ht(a,0),o=(Math.random()-.5)*n*.6,l=(Math.random()-.5)*t*.6,u=-e*.25+a;c.translate(o,u,l),i.push(c)}return se(i,!1)||i[0]}function Tv(n,e,t){const i=[];for(let r=0;r<3;r++){const s=Math.min(n,t)*(.2+Math.random()*.15),a=new Ht(s,0),c=r/3*Math.PI*2;a.translate(Math.cos(c)*n*.2,-e*.2,Math.sin(c)*t*.2),i.push(a)}for(let r=0;r<2;r++){const s=Math.min(n,t)*(.12+Math.random()*.1),a=new Ht(s,0);a.translate((Math.random()-.5)*n*.3,e*.05,(Math.random()-.5)*t*.3),i.push(a)}return se(i,!1)||i[0]}function Av(n,e,t){const i=[],r=8+Math.floor(Math.random()*5);for(let s=0;s<r;s++){const a=Math.min(n,t)*(.05+Math.random()*.08),c=new ut(a,5,4);c.scale(1,.6,1);const o=(Math.random()-.5)*n*.7,l=(Math.random()-.5)*t*.7;c.translate(o,-e*.35,l),i.push(c)}return se(i,!1)||i[0]}function Cv(n,e,t){const i=[];for(let r=0;r<3;r++){const s=new S(n*(.6+Math.random()*.3),e*.08,t*(.5+Math.random()*.3));s.translate((Math.random()-.5)*n*.15,-e*.25+r*e*.1,(Math.random()-.5)*t*.15),s.rotateY(Math.random()*.3),i.push(s)}return se(i,!1)||i[0]}function Rv(n,e,t){const i=new Pt(Math.min(n,t)*.2,0);return i.scale(.6,1,.6),i.translate(0,-e*.15,0),i}function Pv(n,e,t){const i=[],r=new Pt(Math.min(n,t)*.35,0);r.scale(.7,1.3,.7),i.push(r);const s=new Pt(Math.min(n,t)*.2,0);return s.scale(.6,1,.6),s.translate(n*.25,-e*.1,t*.15),s.rotateZ(.3),i.push(s),se(i,!1)||i[0]}function Lv(n,e,t){const i=[],r=5+Math.floor(Math.random()*3);for(let s=0;s<r;s++){const a=Math.min(n,t)*(.1+Math.random()*.15),c=new Pt(a,0);c.scale(.5,1+Math.random()*.5,.5);const o=(Math.random()-.5)*n*.5,l=(Math.random()-.5)*t*.5,u=-e*.2+a*.5;c.translate(o,u,l),c.rotateZ((Math.random()-.5)*.4),c.rotateX((Math.random()-.5)*.4),i.push(c)}return se(i,!1)||i[0]}function Iv(n,e,t){const i=new Pt(Math.min(n,t)*.25,0);return i.scale(.4,2,.4),i}function Dv(n,e,t){const i=[],r=new ue(Math.min(n,t)*.35,Math.min(n,t)*.4,e*.15,6);r.translate(0,-e*.3,0),i.push(r);for(let s=0;s<3;s++){const a=new Pt(Math.min(n,t)*.1,0);a.scale(.5,1,.5);const c=s/3*Math.PI*2;a.translate(Math.cos(c)*n*.15,-e*.1,Math.sin(c)*t*.15),i.push(a)}return se(i,!1)||i[0]}function Uv(n,e,t){const i=[],r=new Pt(Math.min(n,t)*.2,0);r.scale(.3,1.8,.5),r.rotateZ(.2),i.push(r);const s=new Pt(Math.min(n,t)*.1,0);return s.scale(.4,.8,.3),s.translate(n*.15,-e*.2,t*.1),s.rotateZ(-.5),i.push(s),se(i,!1)||i[0]}function Nv(n,e,t){const i=[],r=new Pt(Math.min(n,t)*.25,0);r.scale(.6,1.5,.6),i.push(r);const s=[0,Math.PI*.5,Math.PI,Math.PI*1.5];for(let a=0;a<s.length;a++){const c=new Pt(Math.min(n,t)*.15,0);c.scale(.5,1+Math.random()*.3,.5);const o=Math.min(n,t)*.25;c.translate(Math.cos(s[a])*o,-e*.1,Math.sin(s[a])*o),c.rotateZ((Math.random()-.5)*.5),i.push(c)}return se(i,!1)||i[0]}function Fv(n,e,t){const i=new bt(Math.min(n,t)*.25,e*.8,6);return i.rotateX(Math.PI),i.translate(0,e*.1,0),i}function Ov(n,e,t){const i=[],r=new bt(Math.min(n,t)*.2,e*.7,6);r.translate(0,-e*.15,0),i.push(r);const s=new bt(Math.min(n,t)*.3,e*.2,6);return s.translate(0,-e*.4,0),i.push(s),se(i,!1)||i[0]}function zv(n,e,t){const i=[],r=new ue(n*.08,n*.1,e*.4,8);r.translate(0,-e*.1,0),i.push(r);const s=new ut(Math.min(n,t)*.25,8,6,0,Math.PI*2,0,Math.PI*.6);return s.translate(0,e*.15,0),i.push(s),se(i,!1)||i[0]}function Bv(n,e,t){const i=[],r=[{x:0,z:0,scale:1},{x:n*.2,z:t*.15,scale:.7},{x:-n*.15,z:t*.2,scale:.6},{x:n*.1,z:-t*.2,scale:.5}];for(const s of r){const a=new ue(n*.05*s.scale,n*.06*s.scale,e*.3*s.scale,6);a.translate(s.x,-e*.2+e*.15*s.scale,s.z),i.push(a);const c=new ut(Math.min(n,t)*.15*s.scale,6,5,0,Math.PI*2,0,Math.PI*.6);c.translate(s.x,-e*.05+e*.15*s.scale,s.z),i.push(c)}return se(i,!1)||i[0]}function kv(n,e,t){const i=[],r=6+Math.floor(Math.random()*4);for(let s=0;s<r;s++){const a=Math.min(n,t)*(.1+Math.random()*.15),c=new ut(a,5,4);c.scale(1,.4,1);const o=(Math.random()-.5)*n*.7,l=(Math.random()-.5)*t*.7;c.translate(o,-e*.35,l),i.push(c)}return se(i,!1)||i[0]}function Vv(n,e,t){const i=[];for(let r=0;r<4;r++){const s=(Math.random()-.5)*n*.6,a=(Math.random()-.5)*t*.6,c=e*(.5+Math.random()*.4),o=new ue(n*.02,n*.015,c,4);if(o.translate(s,-c*.3,a),i.push(o),Math.random()>.5){const l=new ut(n*.06,4,3);l.scale(1,.3,.6),l.translate(s+n*.05,-c*.2+e*.1,a),i.push(l)}}return se(i,!1)||i[0]}function Hv(n,e,t){const i=[],r=4+Math.floor(Math.random()*3);for(let s=0;s<r;s++){const a=s/r*Math.PI*2+Math.random()*.5,c=e*(.3+Math.random()*.3),o=new ue(n*.04,n*.06,c,5);o.translate(0,c*.3,0),o.rotateZ((Math.random()-.5)*.8),o.rotateY(a),o.translate(0,-e*.2,0),i.push(o);const l=new ut(n*.06,5,4);l.translate(Math.sin(a)*c*.3,c*.4-e*.2,Math.cos(a)*c*.3),i.push(l)}return se(i,!1)||i[0]}export{hs as $,aM as A,ke as B,hM as C,sM as D,jv as E,Ha as F,Pr as G,iM as H,Kv as I,ol as J,Tn as K,n0 as L,Gv as M,Ut as N,qt as O,Bn as P,Ci as Q,$a as R,lM as S,Wv as T,at as U,P as V,Zv as W,qr as X,du as Y,lr as Z,Qt as _,oe as a,Wn as a0,Gn as a1,la as a2,ua as a3,Oa as a4,et as a5,S as a6,qv as a7,tn as a8,vc as a9,Rn as aA,ot as aB,dM as aC,se as aa,$v as ab,ts as ac,os as ad,tM as ae,Ge as af,_l as ag,gn as ah,oh as ai,Zn as aj,ir as ak,An as al,xo as am,Qv as an,$e as ao,st as ap,au as aq,ou as ar,cu as as,lu as at,hu as au,fu as av,Jn as aw,uM as ax,Vt as ay,Rt as az,Xv as b,Yv as c,je as d,oM as e,Bl as f,kt as g,rr as h,ul as i,fn as j,Jt as k,Jv as l,eM as m,fM as n,pM as o,rM as p,rg as q,sg as r,ig as s,gM as t,mM as u,cM as v,nM as w,Bt as x,rt as y,Ye as z};
