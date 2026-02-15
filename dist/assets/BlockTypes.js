(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ha="170",pM={ROTATE:0,DOLLY:1,PAN:2},mM={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ol=0,_o=1,Bl=2,Zc=1,zl=2,hn=3,Rn=0,Pt=1,fn=2,An=0,gi=1,xo=2,vo=3,Mo=4,kl=5,Vn=100,Vl=101,Hl=102,Gl=103,Wl=104,Xl=200,Zl=201,Yl=202,ql=203,js=204,Qs=205,Jl=206,Kl=207,$l=208,jl=209,Ql=210,eu=211,tu=212,nu=213,iu=214,ea=0,ta=1,na=2,Mi=3,ia=4,ra=5,sa=6,aa=7,Yc=0,ru=1,su=2,Cn=0,au=1,ou=2,cu=3,lu=4,uu=5,hu=6,fu=7,qc=300,bi=301,yi=302,oa=303,ca=304,ns=306,la=1e3,Gn=1001,ua=1002,Nt=1003,du=1004,lr=1005,Qt=1006,hs=1007,Wn=1008,mn=1009,Jc=1010,Kc=1011,$i=1012,Ga=1013,Xn=1014,en=1015,ir=1016,Wa=1017,Xa=1018,Si=1020,$c=35902,jc=1021,Qc=1022,qt=1023,el=1024,tl=1025,_i=1026,wi=1027,Za=1028,Ya=1029,nl=1030,qa=1031,Ja=1033,Hr=33776,Gr=33777,Wr=33778,Xr=33779,ha=35840,fa=35841,da=35842,pa=35843,ma=36196,ga=37492,_a=37496,xa=37808,va=37809,Ma=37810,ba=37811,ya=37812,Sa=37813,wa=37814,Ea=37815,Ta=37816,Aa=37817,Ca=37818,Ra=37819,Pa=37820,La=37821,Zr=36492,Ia=36494,Da=36495,il=36283,Ua=36284,Na=36285,Fa=36286,qr=2300,Oa=2301,fs=2302,bo=2400,yo=2401,So=2402,pu=2500,mu=3200,gu=3201,rl=0,_u=1,Tn="",zt="srgb",Ai="srgb-linear",is="linear",at="srgb",jn=7680,wo=519,xu=512,vu=513,Mu=514,sl=515,bu=516,yu=517,Su=518,wu=519,Eo=35044,gM=35048,To="300 es",dn=2e3,Jr=2001;class qn{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ao=1234567;const xi=Math.PI/180,ji=180/Math.PI;function Pn(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[t&255]+Et[t>>8&255]+Et[t>>16&255]+Et[t>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[n&63|128]+Et[n>>8&255]+"-"+Et[n>>16&255]+Et[n>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function _t(t,e,n){return Math.max(e,Math.min(n,t))}function Ka(t,e){return(t%e+e)%e}function Eu(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Tu(t,e,n){return t!==e?(n-t)/(e-t):0}function Yi(t,e,n){return(1-n)*t+n*e}function Au(t,e,n,i){return Yi(t,e,1-Math.exp(-n*i))}function Cu(t,e=1){return e-Math.abs(Ka(t,e*2)-e)}function Ru(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Pu(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Lu(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Iu(t,e){return t+Math.random()*(e-t)}function Du(t){return t*(.5-Math.random())}function Uu(t){t!==void 0&&(Ao=t);let e=Ao+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nu(t){return t*xi}function Fu(t){return t*ji}function Ou(t){return(t&t-1)===0&&t!==0}function Bu(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function zu(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ku(t,e,n,i,r){const s=Math.cos,a=Math.sin,c=s(n/2),o=a(n/2),l=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),f=a((e-i)/2),d=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":t.set(c*u,o*h,o*f,c*l);break;case"YZY":t.set(o*f,c*u,o*h,c*l);break;case"ZXZ":t.set(o*h,o*f,c*u,c*l);break;case"XZX":t.set(c*u,o*g,o*d,c*l);break;case"YXY":t.set(o*d,c*u,o*g,c*l);break;case"ZYZ":t.set(o*g,o*d,c*u,c*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function di(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function At(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const _M={DEG2RAD:xi,RAD2DEG:ji,generateUUID:Pn,clamp:_t,euclideanModulo:Ka,mapLinear:Eu,inverseLerp:Tu,lerp:Yi,damp:Au,pingpong:Cu,smoothstep:Ru,smootherstep:Pu,randInt:Lu,randFloat:Iu,randFloatSpread:Du,seededRandom:Uu,degToRad:Nu,radToDeg:Fu,isPowerOfTwo:Ou,ceilPowerOfTwo:Bu,floorPowerOfTwo:zu,setQuaternionFromProperEuler:ku,normalize:At,denormalize:di};class ce{constructor(e=0,n=0){ce.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,a,c,o,l){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,c,o,l)}set(e,n,i,r,s,a,c,o,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=c,u[3]=n,u[4]=s,u[5]=o,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],c=i[3],o=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],w=r[1],v=r[4],x=r[7],D=r[2],A=r[5],R=r[8];return s[0]=a*_+c*w+o*D,s[3]=a*m+c*v+o*A,s[6]=a*p+c*x+o*R,s[1]=l*_+u*w+h*D,s[4]=l*m+u*v+h*A,s[7]=l*p+u*x+h*R,s[2]=f*_+d*w+g*D,s[5]=f*m+d*v+g*A,s[8]=f*p+d*x+g*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],c=e[5],o=e[6],l=e[7],u=e[8];return n*a*u-n*c*l-i*s*u+i*c*o+r*s*l-r*a*o}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],c=e[5],o=e[6],l=e[7],u=e[8],h=u*a-c*l,f=c*o-u*s,d=l*s-a*o,g=n*h+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*l-u*i)*_,e[2]=(c*i-r*a)*_,e[3]=f*_,e[4]=(u*n-r*o)*_,e[5]=(r*s-c*n)*_,e[6]=d*_,e[7]=(i*o-l*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,c){const o=Math.cos(s),l=Math.sin(s);return this.set(i*o,i*l,-i*(o*a+l*c)+a+e,-r*l,r*o,-r*(-l*a+o*c)+c+n,0,0,1),this}scale(e,n){return this.premultiply(ds.makeScale(e,n)),this}rotate(e){return this.premultiply(ds.makeRotation(-e)),this}translate(e,n){return this.premultiply(ds.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ds=new Ge;function al(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Qi(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Vu(){const t=Qi("canvas");return t.style.display="block",t}const Co={};function Xi(t){t in Co||(Co[t]=!0,console.warn(t))}function Hu(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function Gu(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Wu(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const je={enabled:!0,workingColorSpace:Ai,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===at&&(t.r=pn(t.r),t.g=pn(t.g),t.b=pn(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===at&&(t.r=vi(t.r),t.g=vi(t.g),t.b=vi(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Tn?is:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function pn(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function vi(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Ro=[.64,.33,.3,.6,.15,.06],Po=[.2126,.7152,.0722],Lo=[.3127,.329],Io=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Do=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je.define({[Ai]:{primaries:Ro,whitePoint:Lo,transfer:is,toXYZ:Io,fromXYZ:Do,luminanceCoefficients:Po,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:Ro,whitePoint:Lo,transfer:at,toXYZ:Io,fromXYZ:Do,luminanceCoefficients:Po,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}});let Qn;class Xu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qn===void 0&&(Qn=Qi("canvas")),Qn.width=e.width,Qn.height=e.height;const i=Qn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Qn}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Qi("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=pn(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(pn(n[i]/255)*255):n[i]=pn(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zu=0;class ol{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,c=r.length;a<c;a++)r[a].isDataTexture?s.push(ps(r[a].image)):s.push(ps(r[a]))}else s=ps(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ps(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Xu.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yu=0;class yt extends qn{constructor(e=yt.DEFAULT_IMAGE,n=yt.DEFAULT_MAPPING,i=Gn,r=Gn,s=Qt,a=Wn,c=qt,o=mn,l=yt.DEFAULT_ANISOTROPY,u=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=Pn(),this.name="",this.source=new ol(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=c,this.internalFormat=null,this.type=o,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case la:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case la:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=qc;yt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,n=0,i=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const o=e.elements,l=o[0],u=o[4],h=o[8],f=o[1],d=o[5],g=o[9],_=o[2],m=o[6],p=o[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(l+1)/2,x=(d+1)/2,D=(p+1)/2,A=(u+f)/4,R=(h+_)/4,L=(g+m)/4;return v>x&&v>D?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=R/i):x>D?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=L/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=R/s,r=L/s),this.set(i,r,s,n),this}let w=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-_)/w,this.z=(f-u)/w,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qu extends qn{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ct(0,0,e,n),this.scissorTest=!1,this.viewport=new ct(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new yt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let c=0;c<a;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new ol(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends qu{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class cl extends yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ju extends yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ci{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,c){let o=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const f=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(c===0){e[n+0]=o,e[n+1]=l,e[n+2]=u,e[n+3]=h;return}if(c===1){e[n+0]=f,e[n+1]=d,e[n+2]=g,e[n+3]=_;return}if(h!==_||o!==f||l!==d||u!==g){let m=1-c;const p=o*f+l*d+u*g+h*_,w=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const D=Math.sqrt(v),A=Math.atan2(D,p*w);m=Math.sin(m*A)/D,c=Math.sin(c*A)/D}const x=c*w;if(o=o*m+f*x,l=l*m+d*x,u=u*m+g*x,h=h*m+_*x,m===1-c){const D=1/Math.sqrt(o*o+l*l+u*u+h*h);o*=D,l*=D,u*=D,h*=D}}e[n]=o,e[n+1]=l,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const c=i[r],o=i[r+1],l=i[r+2],u=i[r+3],h=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return e[n]=c*g+u*h+o*d-l*f,e[n+1]=o*g+u*f+l*h-c*d,e[n+2]=l*g+u*d+c*f-o*h,e[n+3]=u*g-c*h-o*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,c=Math.cos,o=Math.sin,l=c(i/2),u=c(r/2),h=c(s/2),f=o(i/2),d=o(r/2),g=o(s/2);switch(a){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],c=n[5],o=n[9],l=n[2],u=n[6],h=n[10],f=i+c+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-o)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(i>c&&i>h){const d=2*Math.sqrt(1+i-c-h);this._w=(u-o)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(c>h){const d=2*Math.sqrt(1+c-i-h);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(o+u)/d}else{const d=2*Math.sqrt(1+h-i-c);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(o+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,c=n._x,o=n._y,l=n._z,u=n._w;return this._x=i*u+a*c+r*l-s*o,this._y=r*u+a*o+s*c-i*l,this._z=s*u+a*l+i*o-r*c,this._w=a*u-i*c-r*o-s*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let c=a*e._w+i*e._x+r*e._y+s*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const o=1-c*c;if(o<=Number.EPSILON){const d=1-n;return this._w=d*a+n*this._w,this._x=d*i+n*this._x,this._y=d*r+n*this._y,this._z=d*s+n*this._z,this.normalize(),this}const l=Math.sqrt(o),u=Math.atan2(l,c),h=Math.sin((1-n)*u)/l,f=Math.sin(n*u)/l;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,n=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Uo.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Uo.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,c=e.z,o=e.w,l=2*(a*r-c*i),u=2*(c*n-s*r),h=2*(s*i-a*n);return this.x=n+o*l+a*h-c*u,this.y=i+o*u+c*l-s*h,this.z=r+o*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,c=n.y,o=n.z;return this.x=r*o-s*c,this.y=s*a-i*o,this.z=i*c-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ms.copy(this).projectOnVector(e),this.sub(ms)}reflect(e){return this.sub(ms.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ms=new P,Uo=new Ci;class Jn{constructor(e=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Xt.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Xt.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Xt.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,c=s.count;a<c;a++)e.isMesh===!0?e.getVertexPosition(a,Xt):Xt.fromBufferAttribute(s,a),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ur.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ur.copy(i.boundingBox)),ur.applyMatrix4(e.matrixWorld),this.union(ur)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oi),hr.subVectors(this.max,Oi),ei.subVectors(e.a,Oi),ti.subVectors(e.b,Oi),ni.subVectors(e.c,Oi),vn.subVectors(ti,ei),Mn.subVectors(ni,ti),In.subVectors(ei,ni);let n=[0,-vn.z,vn.y,0,-Mn.z,Mn.y,0,-In.z,In.y,vn.z,0,-vn.x,Mn.z,0,-Mn.x,In.z,0,-In.x,-vn.y,vn.x,0,-Mn.y,Mn.x,0,-In.y,In.x,0];return!gs(n,ei,ti,ni,hr)||(n=[1,0,0,0,1,0,0,0,1],!gs(n,ei,ti,ni,hr))?!1:(fr.crossVectors(vn,Mn),n=[fr.x,fr.y,fr.z],gs(n,ei,ti,ni,hr))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(an),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const an=[new P,new P,new P,new P,new P,new P,new P,new P],Xt=new P,ur=new Jn,ei=new P,ti=new P,ni=new P,vn=new P,Mn=new P,In=new P,Oi=new P,hr=new P,fr=new P,Dn=new P;function gs(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Dn.fromArray(t,s);const c=r.x*Math.abs(Dn.x)+r.y*Math.abs(Dn.y)+r.z*Math.abs(Dn.z),o=e.dot(Dn),l=n.dot(Dn),u=i.dot(Dn);if(Math.max(-Math.max(o,l,u),Math.min(o,l,u))>c)return!1}return!0}const Ku=new Jn,Bi=new P,_s=new P;class Ri{constructor(e=new P,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Ku.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bi.subVectors(e,this.center);const n=Bi.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Bi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_s.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bi.copy(e.center).add(_s)),this.expandByPoint(Bi.copy(e.center).sub(_s))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new P,xs=new P,dr=new P,bn=new P,vs=new P,pr=new P,Ms=new P;class $a{constructor(e=new P,n=new P(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=on.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(on.copy(this.origin).addScaledVector(this.direction,n),on.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){xs.copy(e).add(n).multiplyScalar(.5),dr.copy(n).sub(e).normalize(),bn.copy(this.origin).sub(xs);const s=e.distanceTo(n)*.5,a=-this.direction.dot(dr),c=bn.dot(this.direction),o=-bn.dot(dr),l=bn.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*o-c,f=a*c-o,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*c)+f*(a*h+f+2*o)+l}else f=s,h=Math.max(0,-(a*f+c)),d=-h*h+f*(f+2*o)+l;else f=-s,h=Math.max(0,-(a*f+c)),d=-h*h+f*(f+2*o)+l;else f<=-g?(h=Math.max(0,-(-a*s+c)),f=h>0?-s:Math.min(Math.max(-s,-o),s),d=-h*h+f*(f+2*o)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-o),s),d=f*(f+2*o)+l):(h=Math.max(0,-(a*s+c)),f=h>0?s:Math.min(Math.max(-s,-o),s),d=-h*h+f*(f+2*o)+l);else f=a>0?-s:s,h=Math.max(0,-(a*f+c)),d=-h*h+f*(f+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(xs).addScaledVector(dr,f),d}intersectSphere(e,n){on.subVectors(e.center,this.origin);const i=on.dot(this.direction),r=on.dot(on)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),c=i-a,o=i+a;return o<0?null:c<0?this.at(o,n):this.at(c,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,c,o;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(c=(e.min.z-f.z)*h,o=(e.max.z-f.z)*h):(c=(e.max.z-f.z)*h,o=(e.min.z-f.z)*h),i>o||c>r)||((c>i||i!==i)&&(i=c),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,n,i,r,s){vs.subVectors(n,e),pr.subVectors(i,e),Ms.crossVectors(vs,pr);let a=this.direction.dot(Ms),c;if(a>0){if(r)return null;c=1}else if(a<0)c=-1,a=-a;else return null;bn.subVectors(this.origin,e);const o=c*this.direction.dot(pr.crossVectors(bn,pr));if(o<0)return null;const l=c*this.direction.dot(vs.cross(bn));if(l<0||o+l>a)return null;const u=-c*bn.dot(Ms);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,n,i,r,s,a,c,o,l,u,h,f,d,g,_,m){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,c,o,l,u,h,f,d,g,_,m)}set(e,n,i,r,s,a,c,o,l,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=c,p[13]=o,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ii.setFromMatrixColumn(e,0).length(),s=1/ii.setFromMatrixColumn(e,1).length(),a=1/ii.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),c=Math.sin(i),o=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,d=a*h,g=c*u,_=c*h;n[0]=o*u,n[4]=-o*h,n[8]=l,n[1]=d+g*l,n[5]=f-_*l,n[9]=-c*o,n[2]=_-f*l,n[6]=g+d*l,n[10]=a*o}else if(e.order==="YXZ"){const f=o*u,d=o*h,g=l*u,_=l*h;n[0]=f+_*c,n[4]=g*c-d,n[8]=a*l,n[1]=a*h,n[5]=a*u,n[9]=-c,n[2]=d*c-g,n[6]=_+f*c,n[10]=a*o}else if(e.order==="ZXY"){const f=o*u,d=o*h,g=l*u,_=l*h;n[0]=f-_*c,n[4]=-a*h,n[8]=g+d*c,n[1]=d+g*c,n[5]=a*u,n[9]=_-f*c,n[2]=-a*l,n[6]=c,n[10]=a*o}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=c*u,_=c*h;n[0]=o*u,n[4]=g*l-d,n[8]=f*l+_,n[1]=o*h,n[5]=_*l+f,n[9]=d*l-g,n[2]=-l,n[6]=c*o,n[10]=a*o}else if(e.order==="YZX"){const f=a*o,d=a*l,g=c*o,_=c*l;n[0]=o*u,n[4]=_-f*h,n[8]=g*h+d,n[1]=h,n[5]=a*u,n[9]=-c*u,n[2]=-l*u,n[6]=d*h+g,n[10]=f-_*h}else if(e.order==="XZY"){const f=a*o,d=a*l,g=c*o,_=c*l;n[0]=o*u,n[4]=-h,n[8]=l*u,n[1]=f*h+_,n[5]=a*u,n[9]=d*h-g,n[2]=g*h-d,n[6]=c*u,n[10]=_*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose($u,e,ju)}lookAt(e,n,i){const r=this.elements;return Dt.subVectors(e,n),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),yn.crossVectors(i,Dt),yn.lengthSq()===0&&(Math.abs(i.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),yn.crossVectors(i,Dt)),yn.normalize(),mr.crossVectors(Dt,yn),r[0]=yn.x,r[4]=mr.x,r[8]=Dt.x,r[1]=yn.y,r[5]=mr.y,r[9]=Dt.y,r[2]=yn.z,r[6]=mr.z,r[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],c=i[4],o=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],w=i[3],v=i[7],x=i[11],D=i[15],A=r[0],R=r[4],L=r[8],E=r[12],b=r[1],I=r[5],V=r[9],B=r[13],H=r[2],J=r[6],G=r[10],te=r[14],W=r[3],le=r[7],pe=r[11],xe=r[15];return s[0]=a*A+c*b+o*H+l*W,s[4]=a*R+c*I+o*J+l*le,s[8]=a*L+c*V+o*G+l*pe,s[12]=a*E+c*B+o*te+l*xe,s[1]=u*A+h*b+f*H+d*W,s[5]=u*R+h*I+f*J+d*le,s[9]=u*L+h*V+f*G+d*pe,s[13]=u*E+h*B+f*te+d*xe,s[2]=g*A+_*b+m*H+p*W,s[6]=g*R+_*I+m*J+p*le,s[10]=g*L+_*V+m*G+p*pe,s[14]=g*E+_*B+m*te+p*xe,s[3]=w*A+v*b+x*H+D*W,s[7]=w*R+v*I+x*J+D*le,s[11]=w*L+v*V+x*G+D*pe,s[15]=w*E+v*B+x*te+D*xe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],c=e[5],o=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*o*h-r*l*h-s*c*f+i*l*f+r*c*d-i*o*d)+_*(+n*o*d-n*l*f+s*a*f-r*a*d+r*l*u-s*o*u)+m*(+n*l*h-n*c*d-s*a*h+i*a*d+s*c*u-i*l*u)+p*(-r*c*u-n*o*h+n*c*f+r*a*h-i*a*f+i*o*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],c=e[5],o=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],w=h*m*l-_*f*l+_*o*d-c*m*d-h*o*p+c*f*p,v=g*f*l-u*m*l-g*o*d+a*m*d+u*o*p-a*f*p,x=u*_*l-g*h*l+g*c*d-a*_*d-u*c*p+a*h*p,D=g*h*o-u*_*o-g*c*f+a*_*f+u*c*m-a*h*m,A=n*w+i*v+r*x+s*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=w*R,e[1]=(_*f*s-h*m*s-_*r*d+i*m*d+h*r*p-i*f*p)*R,e[2]=(c*m*s-_*o*s+_*r*l-i*m*l-c*r*p+i*o*p)*R,e[3]=(h*o*s-c*f*s-h*r*l+i*f*l+c*r*d-i*o*d)*R,e[4]=v*R,e[5]=(u*m*s-g*f*s+g*r*d-n*m*d-u*r*p+n*f*p)*R,e[6]=(g*o*s-a*m*s-g*r*l+n*m*l+a*r*p-n*o*p)*R,e[7]=(a*f*s-u*o*s+u*r*l-n*f*l-a*r*d+n*o*d)*R,e[8]=x*R,e[9]=(g*h*s-u*_*s-g*i*d+n*_*d+u*i*p-n*h*p)*R,e[10]=(a*_*s-g*c*s+g*i*l-n*_*l-a*i*p+n*c*p)*R,e[11]=(u*c*s-a*h*s-u*i*l+n*h*l+a*i*d-n*c*d)*R,e[12]=D*R,e[13]=(u*_*r-g*h*r+g*i*f-n*_*f-u*i*m+n*h*m)*R,e[14]=(g*c*r-a*_*r-g*i*o+n*_*o+a*i*m-n*c*m)*R,e[15]=(a*h*r-u*c*r+u*i*o-n*h*o-a*i*f+n*c*f)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,c=e.y,o=e.z,l=s*a,u=s*c;return this.set(l*a+i,l*c-r*o,l*o+r*c,0,l*c+r*o,u*c+i,u*o-r*a,0,l*o-r*c,u*o+r*a,s*o*o+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,c=n._z,o=n._w,l=s+s,u=a+a,h=c+c,f=s*l,d=s*u,g=s*h,_=a*u,m=a*h,p=c*h,w=o*l,v=o*u,x=o*h,D=i.x,A=i.y,R=i.z;return r[0]=(1-(_+p))*D,r[1]=(d+x)*D,r[2]=(g-v)*D,r[3]=0,r[4]=(d-x)*A,r[5]=(1-(f+p))*A,r[6]=(m+w)*A,r[7]=0,r[8]=(g+v)*R,r[9]=(m-w)*R,r[10]=(1-(f+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ii.set(r[0],r[1],r[2]).length();const a=ii.set(r[4],r[5],r[6]).length(),c=ii.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zt.copy(this);const l=1/s,u=1/a,h=1/c;return Zt.elements[0]*=l,Zt.elements[1]*=l,Zt.elements[2]*=l,Zt.elements[4]*=u,Zt.elements[5]*=u,Zt.elements[6]*=u,Zt.elements[8]*=h,Zt.elements[9]*=h,Zt.elements[10]*=h,n.setFromRotationMatrix(Zt),i.x=s,i.y=a,i.z=c,this}makePerspective(e,n,i,r,s,a,c=dn){const o=this.elements,l=2*s/(n-e),u=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let d,g;if(c===dn)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(c===Jr)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=u,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=g,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,n,i,r,s,a,c=dn){const o=this.elements,l=1/(n-e),u=1/(i-r),h=1/(a-s),f=(n+e)*l,d=(i+r)*u;let g,_;if(c===dn)g=(a+s)*h,_=-2*h;else if(c===Jr)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*u,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=_,o[14]=-g,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ii=new P,Zt=new st,$u=new P(0,0,0),ju=new P(1,1,1),yn=new P,mr=new P,Dt=new P,No=new st,Fo=new Ci;class tn{constructor(e=0,n=0,i=0,r=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],c=r[8],o=r[1],l=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(n){case"XYZ":this._y=Math.asin(_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(c,d),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(o,s));break;case"ZYX":this._y=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(o,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(c,d));break;case"XZY":this._z=Math.asin(-_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return No.makeRotationFromQuaternion(e),this.setFromRotationMatrix(No,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Fo.setFromEuler(this),this.setFromQuaternion(Fo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class ja{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qu=0;const Oo=new P,ri=new Ci,cn=new st,gr=new P,zi=new P,eh=new P,th=new Ci,Bo=new P(1,0,0),zo=new P(0,1,0),ko=new P(0,0,1),Vo={type:"added"},nh={type:"removed"},si={type:"childadded",child:null},bs={type:"childremoved",child:null};class St extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new P,n=new tn,i=new Ci,r=new P(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new st},normalMatrix:{value:new Ge}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ri.setFromAxisAngle(e,n),this.quaternion.multiply(ri),this}rotateOnWorldAxis(e,n){return ri.setFromAxisAngle(e,n),this.quaternion.premultiply(ri),this}rotateX(e){return this.rotateOnAxis(Bo,e)}rotateY(e){return this.rotateOnAxis(zo,e)}rotateZ(e){return this.rotateOnAxis(ko,e)}translateOnAxis(e,n){return Oo.copy(e).applyQuaternion(this.quaternion),this.position.add(Oo.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Bo,e)}translateY(e){return this.translateOnAxis(zo,e)}translateZ(e){return this.translateOnAxis(ko,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?gr.copy(e):gr.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(zi,gr,this.up):cn.lookAt(gr,zi,this.up),this.quaternion.setFromRotationMatrix(cn),r&&(cn.extractRotation(r.matrixWorld),ri.setFromRotationMatrix(cn),this.quaternion.premultiply(ri.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vo),si.child=e,this.dispatchEvent(si),si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(nh),bs.child=e,this.dispatchEvent(bs),bs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vo),si.child=e,this.dispatchEvent(si),si.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,e,eh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,th,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(c,o){return c[o.uuid]===void 0&&(c[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const o=c.shapes;if(Array.isArray(o))for(let l=0,u=o.length;l<u;l++){const h=o[l];s(e.shapes,h)}else s(e.shapes,o)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let o=0,l=this.material.length;o<l;o++)c.push(s(e.materials,this.material[o]));r.material=c}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const o=this.animations[c];r.animations.push(s(e.animations,o))}}if(n){const c=a(e.geometries),o=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);c.length>0&&(i.geometries=c),o.length>0&&(i.materials=o),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(c){const o=[];for(const l in c){const u=c[l];delete u.metadata,o.push(u)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}St.DEFAULT_UP=new P(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new P,ln=new P,ys=new P,un=new P,ai=new P,oi=new P,Ho=new P,Ss=new P,ws=new P,Es=new P,Ts=new ct,As=new ct,Cs=new ct;class Vt{constructor(e=new P,n=new P,i=new P){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Yt.subVectors(e,n),r.cross(Yt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Yt.subVectors(r,n),ln.subVectors(i,n),ys.subVectors(e,n);const a=Yt.dot(Yt),c=Yt.dot(ln),o=Yt.dot(ys),l=ln.dot(ln),u=ln.dot(ys),h=a*l-c*c;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(l*o-c*u)*f,g=(a*u-c*o)*f;return s.set(1-d-g,g,d)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(e,n,i,r,s,a,c,o){return this.getBarycoord(e,n,i,r,un)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(s,un.x),o.addScaledVector(a,un.y),o.addScaledVector(c,un.z),o)}static getInterpolatedAttribute(e,n,i,r,s,a){return Ts.setScalar(0),As.setScalar(0),Cs.setScalar(0),Ts.fromBufferAttribute(e,n),As.fromBufferAttribute(e,i),Cs.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ts,s.x),a.addScaledVector(As,s.y),a.addScaledVector(Cs,s.z),a}static isFrontFacing(e,n,i,r){return Yt.subVectors(i,n),ln.subVectors(e,n),Yt.cross(ln).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Yt.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Vt.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Vt.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Vt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,c;ai.subVectors(r,i),oi.subVectors(s,i),Ss.subVectors(e,i);const o=ai.dot(Ss),l=oi.dot(Ss);if(o<=0&&l<=0)return n.copy(i);ws.subVectors(e,r);const u=ai.dot(ws),h=oi.dot(ws);if(u>=0&&h<=u)return n.copy(r);const f=o*h-u*l;if(f<=0&&o>=0&&u<=0)return a=o/(o-u),n.copy(i).addScaledVector(ai,a);Es.subVectors(e,s);const d=ai.dot(Es),g=oi.dot(Es);if(g>=0&&d<=g)return n.copy(s);const _=d*l-o*g;if(_<=0&&l>=0&&g<=0)return c=l/(l-g),n.copy(i).addScaledVector(oi,c);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Ho.subVectors(s,r),c=(h-u)/(h-u+(d-g)),n.copy(r).addScaledVector(Ho,c);const p=1/(m+_+f);return a=_*p,c=f*p,n.copy(i).addScaledVector(ai,a).addScaledVector(oi,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ll={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},_r={h:0,s:0,l:0};function Rs(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=je.workingColorSpace){return this.r=e,this.g=n,this.b=i,je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=je.workingColorSpace){if(e=Ka(e,1),n=_t(n,0,1),i=_t(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Rs(a,s,e+1/3),this.g=Rs(a,s,e),this.b=Rs(a,s,e-1/3)}return je.toWorkingColorSpace(this,r),this}setStyle(e,n=zt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],c=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=zt){const i=ll[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pn(e.r),this.g=pn(e.g),this.b=pn(e.b),this}copyLinearToSRGB(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return je.fromWorkingColorSpace(Tt.copy(this),e),Math.round(_t(Tt.r*255,0,255))*65536+Math.round(_t(Tt.g*255,0,255))*256+Math.round(_t(Tt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=je.workingColorSpace){je.fromWorkingColorSpace(Tt.copy(this),n);const i=Tt.r,r=Tt.g,s=Tt.b,a=Math.max(i,r,s),c=Math.min(i,r,s);let o,l;const u=(c+a)/2;if(c===a)o=0,l=0;else{const h=a-c;switch(l=u<=.5?h/(a+c):h/(2-a-c),a){case i:o=(r-s)/h+(r<s?6:0);break;case r:o=(s-i)/h+2;break;case s:o=(i-r)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=u,e}getRGB(e,n=je.workingColorSpace){return je.fromWorkingColorSpace(Tt.copy(this),n),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=zt){je.fromWorkingColorSpace(Tt.copy(this),e);const n=Tt.r,i=Tt.g,r=Tt.b;return e!==zt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Sn),this.setHSL(Sn.h+e,Sn.s+n,Sn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Sn),e.getHSL(_r);const i=Yi(Sn.h,_r.h,n),r=Yi(Sn.s,_r.s,n),s=Yi(Sn.l,_r.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new Qe;Qe.NAMES=ll;let ih=0;class Pi extends qn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=Pn(),this.name="",this.blending=gi,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=js,this.blendDst=Qs,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(i.blending=this.blending),this.side!==Rn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==js&&(i.blendSrc=this.blendSrc),this.blendDst!==Qs&&(i.blendDst=this.blendDst),this.blendEquation!==Vn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const c in s){const o=s[c];delete o.metadata,a.push(o)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ul extends Pi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new P,xr=new ce;class qe{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Eo,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)xr.fromBufferAttribute(this,n),xr.applyMatrix3(e),this.setXY(n,xr.x,xr.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyMatrix3(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyMatrix4(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyNormalMatrix(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.transformDirection(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=di(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=di(n,this.array)),n}setX(e,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=di(n,this.array)),n}setY(e,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=di(n,this.array)),n}setZ(e,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=di(n,this.array)),n}setW(e,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=At(n,this.array),i=At(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=At(n,this.array),i=At(i,this.array),r=At(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=At(n,this.array),i=At(i,this.array),r=At(r,this.array),s=At(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Eo&&(e.usage=this.usage),e}}class hl extends qe{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class fl extends qe{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class tt extends qe{constructor(e,n,i){super(new Float32Array(e),n,i)}}let rh=0;const Bt=new st,Ps=new St,ci=new P,Ut=new Jn,ki=new Jn,bt=new P;class ke extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(al(e)?fl:hl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,n,i){return Bt.makeTranslation(e,n,i),this.applyMatrix4(Bt),this}scale(e,n,i){return Bt.makeScale(e,n,i),this.applyMatrix4(Bt),this}lookAt(e){return Ps.lookAt(e),Ps.updateMatrix(),this.applyMatrix4(Ps.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tt(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Ut.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const c=n[s];ki.setFromBufferAttribute(c),this.morphTargetsRelative?(bt.addVectors(Ut.min,ki.min),Ut.expandByPoint(bt),bt.addVectors(Ut.max,ki.max),Ut.expandByPoint(bt)):(Ut.expandByPoint(ki.min),Ut.expandByPoint(ki.max))}Ut.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(n)for(let s=0,a=n.length;s<a;s++){const c=n[s],o=this.morphTargetsRelative;for(let l=0,u=c.count;l<u;l++)bt.fromBufferAttribute(c,l),o&&(ci.fromBufferAttribute(e,l),bt.add(ci)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),c=[],o=[];for(let L=0;L<i.count;L++)c[L]=new P,o[L]=new P;const l=new P,u=new P,h=new P,f=new ce,d=new ce,g=new ce,_=new P,m=new P;function p(L,E,b){l.fromBufferAttribute(i,L),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,b),f.fromBufferAttribute(s,L),d.fromBufferAttribute(s,E),g.fromBufferAttribute(s,b),u.sub(l),h.sub(l),d.sub(f),g.sub(f);const I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(I),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(I),c[L].add(_),c[E].add(_),c[b].add(_),o[L].add(m),o[E].add(m),o[b].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let L=0,E=w.length;L<E;++L){const b=w[L],I=b.start,V=b.count;for(let B=I,H=I+V;B<H;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const v=new P,x=new P,D=new P,A=new P;function R(L){D.fromBufferAttribute(r,L),A.copy(D);const E=c[L];v.copy(E),v.sub(D.multiplyScalar(D.dot(E))).normalize(),x.crossVectors(A,E);const I=x.dot(o[L])<0?-1:1;a.setXYZW(L,v.x,v.y,v.z,I)}for(let L=0,E=w.length;L<E;++L){const b=w[L],I=b.start,V=b.count;for(let B=I,H=I+V;B<H;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qe(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new P,s=new P,a=new P,c=new P,o=new P,l=new P,u=new P,h=new P;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),c.fromBufferAttribute(i,g),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),c.add(u),o.add(u),l.add(u),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=n.count;f<d;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)bt.fromBufferAttribute(e,n),bt.normalize(),e.setXYZ(n,bt.x,bt.y,bt.z)}toNonIndexed(){function e(c,o){const l=c.array,u=c.itemSize,h=c.normalized,f=new l.constructor(o.length*u);let d=0,g=0;for(let _=0,m=o.length;_<m;_++){c.isInterleavedBufferAttribute?d=o[_]*c.data.stride+c.offset:d=o[_]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new qe(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ke,i=this.index.array,r=this.attributes;for(const c in r){const o=r[c],l=e(o,i);n.setAttribute(c,l)}const s=this.morphAttributes;for(const c in s){const o=[],l=s[c];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,i);o.push(d)}n.morphAttributes[c]=o}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let c=0,o=a.length;c<o;c++){const l=a[c];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const l in o)o[l]!==void 0&&(e[l]=o[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const o in i){const l=i[o];e.data.attributes[o]=l.toJSON(e.data)}const r={};let s=!1;for(const o in this.morphAttributes){const l=this.morphAttributes[o],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(r[o]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(n))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Go=new st,Un=new $a,vr=new Ri,Wo=new P,Mr=new P,br=new P,yr=new P,Ls=new P,Sr=new P,Xo=new P,wr=new P;class Jt extends St{constructor(e=new ke,n=new ul){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(s&&c){Sr.set(0,0,0);for(let o=0,l=s.length;o<l;o++){const u=c[o],h=s[o];u!==0&&(Ls.fromBufferAttribute(h,e),a?Sr.addScaledVector(Ls,u):Sr.addScaledVector(Ls.sub(n),u))}n.add(Sr)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere),vr.applyMatrix4(s),Un.copy(e.ray).recast(e.near),!(vr.containsPoint(Un.origin)===!1&&(Un.intersectSphere(vr,Wo)===null||Un.origin.distanceToSquared(Wo)>(e.far-e.near)**2))&&(Go.copy(s).invert(),Un.copy(e.ray).applyMatrix4(Go),!(i.boundingBox!==null&&Un.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Un)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,c=s.index,o=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(c!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],w=Math.max(m.start,d.start),v=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let x=w,D=v;x<D;x+=3){const A=c.getX(x),R=c.getX(x+1),L=c.getX(x+2);r=Er(this,p,e,i,l,u,h,A,R,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const w=c.getX(m),v=c.getX(m+1),x=c.getX(m+2);r=Er(this,a,e,i,l,u,h,w,v,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(o!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],w=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=w,D=v;x<D;x+=3){const A=x,R=x+1,L=x+2;r=Er(this,p,e,i,l,u,h,A,R,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const w=m,v=m+1,x=m+2;r=Er(this,a,e,i,l,u,h,w,v,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function sh(t,e,n,i,r,s,a,c){let o;if(e.side===Pt?o=i.intersectTriangle(a,s,r,!0,c):o=i.intersectTriangle(r,s,a,e.side===Rn,c),o===null)return null;wr.copy(c),wr.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(wr);return l<n.near||l>n.far?null:{distance:l,point:wr.clone(),object:t}}function Er(t,e,n,i,r,s,a,c,o,l){t.getVertexPosition(c,Mr),t.getVertexPosition(o,br),t.getVertexPosition(l,yr);const u=sh(t,e,n,i,Mr,br,yr,Xo);if(u){const h=new P;Vt.getBarycoord(Xo,Mr,br,yr,h),r&&(u.uv=Vt.getInterpolatedAttribute(r,c,o,l,h,new ce)),s&&(u.uv1=Vt.getInterpolatedAttribute(s,c,o,l,h,new ce)),a&&(u.normal=Vt.getInterpolatedAttribute(a,c,o,l,h,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:c,b:o,c:l,normal:new P,materialIndex:0};Vt.getNormal(Mr,br,yr,f.normal),u.face=f,u.barycoord=h}return u}class y extends ke{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const c=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const o=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(o),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(h,2));function g(_,m,p,w,v,x,D,A,R,L,E){const b=x/R,I=D/L,V=x/2,B=D/2,H=A/2,J=R+1,G=L+1;let te=0,W=0;const le=new P;for(let pe=0;pe<G;pe++){const xe=pe*I-B;for(let De=0;De<J;De++){const Ze=De*b-V;le[_]=Ze*w,le[m]=xe*v,le[p]=H,l.push(le.x,le.y,le.z),le[_]=0,le[m]=0,le[p]=A>0?1:-1,u.push(le.x,le.y,le.z),h.push(De/R),h.push(1-pe/L),te+=1}}for(let pe=0;pe<L;pe++)for(let xe=0;xe<R;xe++){const De=f+xe+J*pe,Ze=f+xe+J*(pe+1),Z=f+(xe+1)+J*(pe+1),ie=f+(xe+1)+J*pe;o.push(De,Ze,ie),o.push(Ze,Z,ie),W+=6}c.addGroup(d,W,E),d+=W,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new y(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ei(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ct(t){const e={};for(let n=0;n<t.length;n++){const i=Ei(t[n]);for(const r in i)e[r]=i[r]}return e}function ah(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function dl(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const oh={clone:Ei,merge:Ct};var ch=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends Pi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ch,this.fragmentShader=lh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ei(e.uniforms),this.uniformsGroups=ah(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class pl extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=dn}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wn=new P,Zo=new ce,Yo=new ce;class kt extends pl{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ji*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ji*2*Math.atan(Math.tan(xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wn.x,wn.y).multiplyScalar(-e/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wn.x,wn.y).multiplyScalar(-e/wn.z)}getViewSize(e,n){return this.getViewBounds(e,Zo,Yo),n.subVectors(Yo,Zo)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(xi*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const o=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/o,n-=a.offsetY*i/l,r*=a.width/o,i*=a.height/l}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const li=-90,ui=1;class uh extends St{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kt(li,ui,e,n);r.layers=this.layers,this.add(r);const s=new kt(li,ui,e,n);s.layers=this.layers,this.add(s);const a=new kt(li,ui,e,n);a.layers=this.layers,this.add(a);const c=new kt(li,ui,e,n);c.layers=this.layers,this.add(c);const o=new kt(li,ui,e,n);o.layers=this.layers,this.add(o);const l=new kt(li,ui,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,c,o]=n;for(const l of n)this.remove(l);if(e===dn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Jr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,c,o,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,c),e.setRenderTarget(i,3,r),e.render(n,o),e.setRenderTarget(i,4,r),e.render(n,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ml extends yt{constructor(e,n,i,r,s,a,c,o,l,u){e=e!==void 0?e:[],n=n!==void 0?n:bi,super(e,n,i,r,s,a,c,o,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hh extends Zn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ml(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Qt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new y(5,5,5),s=new gn({name:"CubemapFromEquirect",uniforms:Ei(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pt,blending:An});s.uniforms.tEquirect.value=n;const a=new Jt(r,s),c=n.minFilter;return n.minFilter===Wn&&(n.minFilter=Qt),new uh(1,10,this).update(e,a),n.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Is=new P,fh=new P,dh=new Ge;class zn{constructor(e=new P(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Is.subVectors(i,n).cross(fh.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Is),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||dh.getNormalMatrix(e),r=this.coplanarPoint(Is).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new Ri,Tr=new P;class Qa{constructor(e=new zn,n=new zn,i=new zn,r=new zn,s=new zn,a=new zn){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const c=this.planes;return c[0].copy(e),c[1].copy(n),c[2].copy(i),c[3].copy(r),c[4].copy(s),c[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=dn){const i=this.planes,r=e.elements,s=r[0],a=r[1],c=r[2],o=r[3],l=r[4],u=r[5],h=r[6],f=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],w=r[13],v=r[14],x=r[15];if(i[0].setComponents(o-s,f-l,m-d,x-p).normalize(),i[1].setComponents(o+s,f+l,m+d,x+p).normalize(),i[2].setComponents(o+a,f+u,m+g,x+w).normalize(),i[3].setComponents(o-a,f-u,m-g,x-w).normalize(),i[4].setComponents(o-c,f-h,m-_,x-v).normalize(),n===dn)i[5].setComponents(o+c,f+h,m+_,x+v).normalize();else if(n===Jr)i[5].setComponents(c,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Nn.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(e){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Tr.x=r.normal.x>0?e.max.x:e.min.x,Tr.y=r.normal.y>0?e.max.y:e.min.y,Tr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gl(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function ph(t){const e=new WeakMap;function n(c,o){const l=c.array,u=c.usage,h=l.byteLength,f=t.createBuffer();t.bindBuffer(o,f),t.bufferData(o,l,u),c.onUploadCallback();let d;if(l instanceof Float32Array)d=t.FLOAT;else if(l instanceof Uint16Array)c.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=t.SHORT;else if(l instanceof Uint32Array)d=t.UNSIGNED_INT;else if(l instanceof Int32Array)d=t.INT;else if(l instanceof Int8Array)d=t.BYTE;else if(l instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:c.version,size:h}}function i(c,o,l){const u=o.array,h=o.updateRanges;if(t.bindBuffer(l,c),h.length===0)t.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];t.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}o.clearUpdateRanges()}o.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const o=e.get(c);o&&(t.deleteBuffer(o.buffer),e.delete(c))}function a(c,o){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const u=e.get(c);(!u||u.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const l=e.get(c);if(l===void 0)e.set(c,n(c,o));else if(l.version<c.version){if(l.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,c,o),l.version=c.version}}return{get:r,remove:s,update:a}}class rr extends ke{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,c=Math.floor(i),o=Math.floor(r),l=c+1,u=o+1,h=e/c,f=n/o,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const w=p*f-a;for(let v=0;v<l;v++){const x=v*h-s;g.push(x,-w,0),_.push(0,0,1),m.push(v/c),m.push(1-p/o)}}for(let p=0;p<o;p++)for(let w=0;w<c;w++){const v=w+l*p,x=w+l*(p+1),D=w+1+l*(p+1),A=w+1+l*p;d.push(v,x,A),d.push(x,D,A)}this.setIndex(d),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.width,e.height,e.widthSegments,e.heightSegments)}}var mh=`#ifdef USE_ALPHAHASH
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
#endif`,bh=`#ifdef USE_AOMAP
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
#endif`,yh=`#ifdef USE_AOMAP
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
#endif`,wh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Eh=`vec3 transformed = vec3( position );
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
#endif`,Bh=`#define PI 3.141592653589793
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
} // validated`,zh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ef=`#if defined( USE_POINTS_UV )
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
#endif`,Bf=`#ifdef USE_NORMALMAP
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
#endif`,zf=`#ifdef USE_CLEARCOAT
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
}`,bd=`#include <common>
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
}`,yd=`#if DEPTH_PACKING == 3200
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
}`,wd=`#define DISTANCE
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
}`,Ed=`varying vec3 vWorldDirection;
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
}`,Bd=`#define PHONG
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
}`,zd=`#define STANDARD
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
}`,Xe={alphahash_fragment:mh,alphahash_pars_fragment:gh,alphamap_fragment:_h,alphamap_pars_fragment:xh,alphatest_fragment:vh,alphatest_pars_fragment:Mh,aomap_fragment:bh,aomap_pars_fragment:yh,batching_pars_vertex:Sh,batching_vertex:wh,begin_vertex:Eh,beginnormal_vertex:Th,bsdfs:Ah,iridescence_fragment:Ch,bumpmap_pars_fragment:Rh,clipping_planes_fragment:Ph,clipping_planes_pars_fragment:Lh,clipping_planes_pars_vertex:Ih,clipping_planes_vertex:Dh,color_fragment:Uh,color_pars_fragment:Nh,color_pars_vertex:Fh,color_vertex:Oh,common:Bh,cube_uv_reflection_fragment:zh,defaultnormal_vertex:kh,displacementmap_pars_vertex:Vh,displacementmap_vertex:Hh,emissivemap_fragment:Gh,emissivemap_pars_fragment:Wh,colorspace_fragment:Xh,colorspace_pars_fragment:Zh,envmap_fragment:Yh,envmap_common_pars_fragment:qh,envmap_pars_fragment:Jh,envmap_pars_vertex:Kh,envmap_physical_pars_fragment:cf,envmap_vertex:$h,fog_vertex:jh,fog_pars_vertex:Qh,fog_fragment:ef,fog_pars_fragment:tf,gradientmap_pars_fragment:nf,lightmap_pars_fragment:rf,lights_lambert_fragment:sf,lights_lambert_pars_fragment:af,lights_pars_begin:of,lights_toon_fragment:lf,lights_toon_pars_fragment:uf,lights_phong_fragment:hf,lights_phong_pars_fragment:ff,lights_physical_fragment:df,lights_physical_pars_fragment:pf,lights_fragment_begin:mf,lights_fragment_maps:gf,lights_fragment_end:_f,logdepthbuf_fragment:xf,logdepthbuf_pars_fragment:vf,logdepthbuf_pars_vertex:Mf,logdepthbuf_vertex:bf,map_fragment:yf,map_pars_fragment:Sf,map_particle_fragment:wf,map_particle_pars_fragment:Ef,metalnessmap_fragment:Tf,metalnessmap_pars_fragment:Af,morphinstance_vertex:Cf,morphcolor_vertex:Rf,morphnormal_vertex:Pf,morphtarget_pars_vertex:Lf,morphtarget_vertex:If,normal_fragment_begin:Df,normal_fragment_maps:Uf,normal_pars_fragment:Nf,normal_pars_vertex:Ff,normal_vertex:Of,normalmap_pars_fragment:Bf,clearcoat_normal_fragment_begin:zf,clearcoat_normal_fragment_maps:kf,clearcoat_pars_fragment:Vf,iridescence_pars_fragment:Hf,opaque_fragment:Gf,packing:Wf,premultiplied_alpha_fragment:Xf,project_vertex:Zf,dithering_fragment:Yf,dithering_pars_fragment:qf,roughnessmap_fragment:Jf,roughnessmap_pars_fragment:Kf,shadowmap_pars_fragment:$f,shadowmap_pars_vertex:jf,shadowmap_vertex:Qf,shadowmask_pars_fragment:ed,skinbase_vertex:td,skinning_pars_vertex:nd,skinning_vertex:id,skinnormal_vertex:rd,specularmap_fragment:sd,specularmap_pars_fragment:ad,tonemapping_fragment:od,tonemapping_pars_fragment:cd,transmission_fragment:ld,transmission_pars_fragment:ud,uv_pars_fragment:hd,uv_pars_vertex:fd,uv_vertex:dd,worldpos_vertex:pd,background_vert:md,background_frag:gd,backgroundCube_vert:_d,backgroundCube_frag:xd,cube_vert:vd,cube_frag:Md,depth_vert:bd,depth_frag:yd,distanceRGBA_vert:Sd,distanceRGBA_frag:wd,equirect_vert:Ed,equirect_frag:Td,linedashed_vert:Ad,linedashed_frag:Cd,meshbasic_vert:Rd,meshbasic_frag:Pd,meshlambert_vert:Ld,meshlambert_frag:Id,meshmatcap_vert:Dd,meshmatcap_frag:Ud,meshnormal_vert:Nd,meshnormal_frag:Fd,meshphong_vert:Od,meshphong_frag:Bd,meshphysical_vert:zd,meshphysical_frag:kd,meshtoon_vert:Vd,meshtoon_frag:Hd,points_vert:Gd,points_frag:Wd,shadow_vert:Xd,shadow_frag:Zd,sprite_vert:Yd,sprite_frag:qd},he={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},jt={basic:{uniforms:Ct([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Ct([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Ct([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Ct([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Ct([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Ct([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Ct([he.points,he.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Ct([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Ct([he.common,he.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Ct([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Ct([he.sprite,he.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Ct([he.common,he.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Ct([he.lights,he.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};jt.physical={uniforms:Ct([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Ar={r:0,b:0,g:0},Fn=new tn,Jd=new st;function Kd(t,e,n,i,r,s,a){const c=new Qe(0);let o=s===!0?0:1,l,u,h=null,f=0,d=null;function g(w){let v=w.isScene===!0?w.background:null;return v&&v.isTexture&&(v=(w.backgroundBlurriness>0?n:e).get(v)),v}function _(w){let v=!1;const x=g(w);x===null?p(c,o):x&&x.isColor&&(p(x,1),v=!0);const D=t.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(w,v){const x=g(v);x&&(x.isCubeTexture||x.mapping===ns)?(u===void 0&&(u=new Jt(new y(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:Ei(jt.backgroundCube.uniforms),vertexShader:jt.backgroundCube.vertexShader,fragmentShader:jt.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Fn.copy(v.backgroundRotation),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Jd.makeRotationFromEuler(Fn)),u.material.toneMapped=je.getTransfer(x.colorSpace)!==at,(h!==x||f!==x.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=t.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Jt(new rr(2,2),new gn({name:"BackgroundMaterial",uniforms:Ei(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=je.getTransfer(x.colorSpace)!==at,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,d=t.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,v){w.getRGB(Ar,dl(t)),i.buffers.color.setClear(Ar.r,Ar.g,Ar.b,v,a)}return{getClearColor:function(){return c},setClearColor:function(w,v=1){c.set(w),o=v,p(c,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,p(c,o)},render:_,addToRenderList:m}}function $d(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function c(b,I,V,B,H){let J=!1;const G=h(B,V,I);s!==G&&(s=G,l(s.object)),J=d(b,B,V,H),J&&g(b,B,V,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,x(b,I,V,B),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function o(){return t.createVertexArray()}function l(b){return t.bindVertexArray(b)}function u(b){return t.deleteVertexArray(b)}function h(b,I,V){const B=V.wireframe===!0;let H=i[b.id];H===void 0&&(H={},i[b.id]=H);let J=H[I.id];J===void 0&&(J={},H[I.id]=J);let G=J[B];return G===void 0&&(G=f(o()),J[B]=G),G}function f(b){const I=[],V=[],B=[];for(let H=0;H<n;H++)I[H]=0,V[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:B,object:b,attributes:{},index:null}}function d(b,I,V,B){const H=s.attributes,J=I.attributes;let G=0;const te=V.getAttributes();for(const W in te)if(te[W].location>=0){const pe=H[W];let xe=J[W];if(xe===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(xe=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(xe=b.instanceColor)),pe===void 0||pe.attribute!==xe||xe&&pe.data!==xe.data)return!0;G++}return s.attributesNum!==G||s.index!==B}function g(b,I,V,B){const H={},J=I.attributes;let G=0;const te=V.getAttributes();for(const W in te)if(te[W].location>=0){let pe=J[W];pe===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(pe=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(pe=b.instanceColor));const xe={};xe.attribute=pe,pe&&pe.data&&(xe.data=pe.data),H[W]=xe,G++}s.attributes=H,s.attributesNum=G,s.index=B}function _(){const b=s.newAttributes;for(let I=0,V=b.length;I<V;I++)b[I]=0}function m(b){p(b,0)}function p(b,I){const V=s.newAttributes,B=s.enabledAttributes,H=s.attributeDivisors;V[b]=1,B[b]===0&&(t.enableVertexAttribArray(b),B[b]=1),H[b]!==I&&(t.vertexAttribDivisor(b,I),H[b]=I)}function w(){const b=s.newAttributes,I=s.enabledAttributes;for(let V=0,B=I.length;V<B;V++)I[V]!==b[V]&&(t.disableVertexAttribArray(V),I[V]=0)}function v(b,I,V,B,H,J,G){G===!0?t.vertexAttribIPointer(b,I,V,H,J):t.vertexAttribPointer(b,I,V,B,H,J)}function x(b,I,V,B){_();const H=B.attributes,J=V.getAttributes(),G=I.defaultAttributeValues;for(const te in J){const W=J[te];if(W.location>=0){let le=H[te];if(le===void 0&&(te==="instanceMatrix"&&b.instanceMatrix&&(le=b.instanceMatrix),te==="instanceColor"&&b.instanceColor&&(le=b.instanceColor)),le!==void 0){const pe=le.normalized,xe=le.itemSize,De=e.get(le);if(De===void 0)continue;const Ze=De.buffer,Z=De.type,ie=De.bytesPerElement,ve=Z===t.INT||Z===t.UNSIGNED_INT||le.gpuType===Ga;if(le.isInterleavedBufferAttribute){const oe=le.data,Ie=oe.stride,Be=le.offset;if(oe.isInstancedInterleavedBuffer){for(let Fe=0;Fe<W.locationSize;Fe++)p(W.location+Fe,oe.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Fe=0;Fe<W.locationSize;Fe++)m(W.location+Fe);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let Fe=0;Fe<W.locationSize;Fe++)v(W.location+Fe,xe/W.locationSize,Z,pe,Ie*ie,(Be+xe/W.locationSize*Fe)*ie,ve)}else{if(le.isInstancedBufferAttribute){for(let oe=0;oe<W.locationSize;oe++)p(W.location+oe,le.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let oe=0;oe<W.locationSize;oe++)m(W.location+oe);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let oe=0;oe<W.locationSize;oe++)v(W.location+oe,xe/W.locationSize,Z,pe,xe*ie,xe/W.locationSize*oe*ie,ve)}}else if(G!==void 0){const pe=G[te];if(pe!==void 0)switch(pe.length){case 2:t.vertexAttrib2fv(W.location,pe);break;case 3:t.vertexAttrib3fv(W.location,pe);break;case 4:t.vertexAttrib4fv(W.location,pe);break;default:t.vertexAttrib1fv(W.location,pe)}}}}w()}function D(){L();for(const b in i){const I=i[b];for(const V in I){const B=I[V];for(const H in B)u(B[H].object),delete B[H];delete I[V]}delete i[b]}}function A(b){if(i[b.id]===void 0)return;const I=i[b.id];for(const V in I){const B=I[V];for(const H in B)u(B[H].object),delete B[H];delete I[V]}delete i[b.id]}function R(b){for(const I in i){const V=i[I];if(V[b.id]===void 0)continue;const B=V[b.id];for(const H in B)u(B[H].object),delete B[H];delete V[b.id]}}function L(){E(),a=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:L,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function jd(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function a(l,u,h){h!==0&&(t.drawArraysInstanced(i,l,u,h),n.update(u,i,h))}function c(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];n.update(d,i,1)}function o(l,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=c,this.renderMultiDrawInstances=o}function Qd(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==qt&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(R){const L=R===ir&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==mn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==en&&!L)}function o(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const u=o(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),w=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:c,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:D,maxSamples:A}}function ep(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new zn,c=new Ge,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=t.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const w=s?0:i,v=w*4;let x=p.clippingState||null;o.value=x,x=u(g,f,v,d);for(let D=0;D!==v;++D)x[D]=n[D];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){o.value!==n&&(o.value=n,o.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=o.value,g!==!0||m===null){const p=d+_*4,w=f.matrixWorldInverse;c.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=d;v!==_;++v,x+=4)a.copy(h[v]).applyMatrix4(w,c),a.normal.toArray(m,x),m[x+3]=a.constant}o.value=m,o.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function tp(t){let e=new WeakMap;function n(a,c){return c===oa?a.mapping=bi:c===ca&&(a.mapping=yi),a}function i(a){if(a&&a.isTexture){const c=a.mapping;if(c===oa||c===ca)if(e.has(a)){const o=e.get(a).texture;return n(o,a.mapping)}else{const o=a.image;if(o&&o.height>0){const l=new hh(o.height);return l.fromEquirectangularTexture(t,a),e.set(a,l),a.addEventListener("dispose",r),n(l.texture,a.mapping)}else return null}}return a}function r(a){const c=a.target;c.removeEventListener("dispose",r);const o=e.get(c);o!==void 0&&(e.delete(c),o.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class _l extends pl{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,c=r+n,o=r-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,c-=u*this.view.offsetY,o=c-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,c,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const pi=4,qo=[.125,.215,.35,.446,.526,.582],Hn=20,Ds=new _l,Jo=new Qe;let Us=null,Ns=0,Fs=0,Os=!1;const kn=(1+Math.sqrt(5))/2,hi=1/kn,Ko=[new P(-kn,hi,0),new P(kn,hi,0),new P(-hi,0,kn),new P(hi,0,kn),new P(0,kn,-hi),new P(0,kn,hi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class $o{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Us=this._renderer.getRenderTarget(),Ns=this._renderer.getActiveCubeFace(),Fs=this._renderer.getActiveMipmapLevel(),Os=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Us,Ns,Fs),this._renderer.xr.enabled=Os,e.scissorTest=!1,Cr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===bi||e.mapping===yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Us=this._renderer.getRenderTarget(),Ns=this._renderer.getActiveCubeFace(),Fs=this._renderer.getActiveMipmapLevel(),Os=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:ir,format:qt,colorSpace:Ai,depthBuffer:!1},r=jo(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jo(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=np(s)),this._blurMaterial=ip(s,e,n)}return r}_compileMaterial(e){const n=new Jt(this._lodPlanes[0],e);this._renderer.compile(n,Ds)}_sceneToCubeUV(e,n,i,r){const c=new kt(90,1,n,i),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Jo),u.toneMapping=Cn,u.autoClear=!1;const d=new ul({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),g=new Jt(new y,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Jo),_=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(c.up.set(0,o[p],0),c.lookAt(l[p],0,0)):w===1?(c.up.set(0,0,o[p]),c.lookAt(0,l[p],0)):(c.up.set(0,o[p],0),c.lookAt(0,0,l[p]));const v=this._cubeSize;Cr(r,w*v,p>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,c),u.render(e,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===bi||e.mapping===yi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Jt(this._lodPlanes[0],s),c=s.uniforms;c.envMap.value=e;const o=this._cubeSize;Cr(n,0,0,3*o,2*o),i.setRenderTarget(n),i.render(a,Ds)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=Ko[(r-s-1)%Ko.length];this._blur(e,s-1,s,a,c)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,c){const o=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Jt(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Hn-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Hn;m>Hn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hn}`);const p=[];let w=0;for(let R=0;R<Hn;++R){const L=R/_,E=Math.exp(-L*L/2);p.push(E),R===0?w+=E:R<m&&(w+=2*E)}for(let R=0;R<p.length;R++)p[R]=p[R]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",c&&(f.poleAxis.value=c);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const x=this._sizeLods[r],D=3*x*(r>v-pi?r-v+pi:0),A=4*(this._cubeSize-x);Cr(n,D,A,3*x,2*x),o.setRenderTarget(n),o.render(h,Ds)}}function np(t){const e=[],n=[],i=[];let r=t;const s=t-pi+1+qo.length;for(let a=0;a<s;a++){const c=Math.pow(2,r);n.push(c);let o=1/c;a>t-pi?o=qo[a-t+pi-1]:a===0&&(o=0),i.push(o);const l=1/(c-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*d),v=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let A=0;A<d;A++){const R=A%3*2/3-1,L=A>2?0:-1,E=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];w.set(E,_*g*A),v.set(f,m*g*A);const b=[A,A,A,A,A,A];x.set(b,p*g*A)}const D=new ke;D.setAttribute("position",new qe(w,_)),D.setAttribute("uv",new qe(v,m)),D.setAttribute("faceIndex",new qe(x,p)),e.push(D),r>pi&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function jo(t,e,n){const i=new Zn(t,e,n);return i.texture.mapping=ns,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cr(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function ip(t,e,n){const i=new Float32Array(Hn),r=new P(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:Hn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:eo(),fragmentShader:`

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
	`}function rp(t){let e=new WeakMap,n=null;function i(c){if(c&&c.isTexture){const o=c.mapping,l=o===oa||o===ca,u=o===bi||o===yi;if(l||u){let h=e.get(c);const f=h!==void 0?h.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return n===null&&(n=new $o(t)),h=l?n.fromEquirectangular(c,h):n.fromCubemap(c,h),h.texture.pmremVersion=c.pmremVersion,e.set(c,h),h.texture;if(h!==void 0)return h.texture;{const d=c.image;return l&&d&&d.height>0||u&&d&&r(d)?(n===null&&(n=new $o(t)),h=l?n.fromEquirectangular(c):n.fromCubemap(c),h.texture.pmremVersion=c.pmremVersion,e.set(c,h),c.addEventListener("dispose",s),h.texture):null}}}return c}function r(c){let o=0;const l=6;for(let u=0;u<l;u++)c[u]!==void 0&&o++;return o===l}function s(c){const o=c.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function sp(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Xi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ap(t,e,n,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",a),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function c(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function o(h){const f=h.attributes;for(const g in f)e.update(f[g],t.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],t.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const w=d.array;_=d.version;for(let v=0,x=w.length;v<x;v+=3){const D=w[v+0],A=w[v+1],R=w[v+2];f.push(D,A,A,R,R,D)}}else if(g!==void 0){const w=g.array;_=g.version;for(let v=0,x=w.length/3-1;v<x;v+=3){const D=v+0,A=v+1,R=v+2;f.push(D,A,A,R,R,D)}}else return;const m=new(al(f)?fl:hl)(f,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:c,update:o,getWireframeAttribute:u}}function op(t,e,n){let i;function r(f){i=f}let s,a;function c(f){s=f.type,a=f.bytesPerElement}function o(f,d){t.drawElements(i,d,s,f*a),n.update(d,i,1)}function l(f,d,g){g!==0&&(t.drawElementsInstanced(i,d,s,f*a,g),n.update(d,i,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];n.update(m,i,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,_,0,g);let p=0;for(let w=0;w<g;w++)p+=d[w]*_[w];n.update(p,i,1)}}this.setMode=r,this.setIndex=c,this.render=o,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function cp(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,c){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=c*(s/3);break;case t.LINES:n.lines+=c*(s/2);break;case t.LINE_STRIP:n.lines+=c*(s-1);break;case t.LINE_LOOP:n.lines+=c*s;break;case t.POINTS:n.points+=c*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function lp(t,e,n){const i=new WeakMap,r=new ct;function s(a,c,o){const l=a.morphTargetInfluences,u=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(c);if(f===void 0||f.count!==h){let E=function(){R.dispose(),i.delete(c),c.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const d=c.morphAttributes.position!==void 0,g=c.morphAttributes.normal!==void 0,_=c.morphAttributes.color!==void 0,m=c.morphAttributes.position||[],p=c.morphAttributes.normal||[],w=c.morphAttributes.color||[];let v=0;d===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let x=c.attributes.position.count*v,D=1;x>e.maxTextureSize&&(D=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const A=new Float32Array(x*D*4*h),R=new cl(A,x,D,h);R.type=en,R.needsUpdate=!0;const L=v*4;for(let b=0;b<h;b++){const I=m[b],V=p[b],B=w[b],H=x*D*4*b;for(let J=0;J<I.count;J++){const G=J*L;d===!0&&(r.fromBufferAttribute(I,J),A[H+G+0]=r.x,A[H+G+1]=r.y,A[H+G+2]=r.z,A[H+G+3]=0),g===!0&&(r.fromBufferAttribute(V,J),A[H+G+4]=r.x,A[H+G+5]=r.y,A[H+G+6]=r.z,A[H+G+7]=0),_===!0&&(r.fromBufferAttribute(B,J),A[H+G+8]=r.x,A[H+G+9]=r.y,A[H+G+10]=r.z,A[H+G+11]=B.itemSize===4?r.w:1)}}f={count:h,texture:R,size:new ce(x,D)},i.set(c,f),c.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];const g=c.morphTargetsRelative?1:1-d;o.getUniforms().setValue(t,"morphTargetBaseInfluence",g),o.getUniforms().setValue(t,"morphTargetInfluences",l)}o.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),o.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function up(t,e,n,i){let r=new WeakMap;function s(o){const l=i.render.frame,u=o.geometry,h=e.get(o,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",c)===!1&&o.addEventListener("dispose",c),r.get(o)!==l&&(n.update(o.instanceMatrix,t.ARRAY_BUFFER),o.instanceColor!==null&&n.update(o.instanceColor,t.ARRAY_BUFFER),r.set(o,l))),o.isSkinnedMesh){const f=o.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function a(){r=new WeakMap}function c(o){const l=o.target;l.removeEventListener("dispose",c),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:s,dispose:a}}class xl extends yt{constructor(e,n,i,r,s,a,c,o,l,u=_i){if(u!==_i&&u!==wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===_i&&(i=Xn),i===void 0&&u===wi&&(i=Si),super(null,r,s,a,c,o,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=c!==void 0?c:Nt,this.minFilter=o!==void 0?o:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const vl=new yt,tc=new xl(1,1),Ml=new cl,bl=new Ju,yl=new ml,nc=[],ic=[],rc=new Float32Array(16),sc=new Float32Array(9),ac=new Float32Array(4);function Li(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=nc[r];if(s===void 0&&(s=new Float32Array(r),nc[r]=s),e!==0){i.toArray(s,0);for(let a=1,c=0;a!==e;++a)c+=n,t[a].toArray(s,c)}return s}function vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Mt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function rs(t,e){let n=ic[e];n===void 0&&(n=new Int32Array(e),ic[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function hp(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function fp(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vt(n,e))return;t.uniform2fv(this.addr,e),Mt(n,e)}}function dp(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(vt(n,e))return;t.uniform3fv(this.addr,e),Mt(n,e)}}function pp(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vt(n,e))return;t.uniform4fv(this.addr,e),Mt(n,e)}}function mp(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Mt(n,e)}else{if(vt(n,i))return;ac.set(i),t.uniformMatrix2fv(this.addr,!1,ac),Mt(n,i)}}function gp(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Mt(n,e)}else{if(vt(n,i))return;sc.set(i),t.uniformMatrix3fv(this.addr,!1,sc),Mt(n,i)}}function _p(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Mt(n,e)}else{if(vt(n,i))return;rc.set(i),t.uniformMatrix4fv(this.addr,!1,rc),Mt(n,i)}}function xp(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function vp(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vt(n,e))return;t.uniform2iv(this.addr,e),Mt(n,e)}}function Mp(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(vt(n,e))return;t.uniform3iv(this.addr,e),Mt(n,e)}}function bp(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vt(n,e))return;t.uniform4iv(this.addr,e),Mt(n,e)}}function yp(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Sp(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vt(n,e))return;t.uniform2uiv(this.addr,e),Mt(n,e)}}function wp(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(vt(n,e))return;t.uniform3uiv(this.addr,e),Mt(n,e)}}function Ep(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vt(n,e))return;t.uniform4uiv(this.addr,e),Mt(n,e)}}function Tp(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(tc.compareFunction=sl,s=tc):s=vl,n.setTexture2D(e||s,r)}function Ap(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||bl,r)}function Cp(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||yl,r)}function Rp(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ml,r)}function Pp(t){switch(t){case 5126:return hp;case 35664:return fp;case 35665:return dp;case 35666:return pp;case 35674:return mp;case 35675:return gp;case 35676:return _p;case 5124:case 35670:return xp;case 35667:case 35671:return vp;case 35668:case 35672:return Mp;case 35669:case 35673:return bp;case 5125:return yp;case 36294:return Sp;case 36295:return wp;case 36296:return Ep;case 35678:case 36198:case 36298:case 36306:case 35682:return Tp;case 35679:case 36299:case 36307:return Ap;case 35680:case 36300:case 36308:case 36293:return Cp;case 36289:case 36303:case 36311:case 36292:return Rp}}function Lp(t,e){t.uniform1fv(this.addr,e)}function Ip(t,e){const n=Li(e,this.size,2);t.uniform2fv(this.addr,n)}function Dp(t,e){const n=Li(e,this.size,3);t.uniform3fv(this.addr,n)}function Up(t,e){const n=Li(e,this.size,4);t.uniform4fv(this.addr,n)}function Np(t,e){const n=Li(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Fp(t,e){const n=Li(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Op(t,e){const n=Li(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Bp(t,e){t.uniform1iv(this.addr,e)}function zp(t,e){t.uniform2iv(this.addr,e)}function kp(t,e){t.uniform3iv(this.addr,e)}function Vp(t,e){t.uniform4iv(this.addr,e)}function Hp(t,e){t.uniform1uiv(this.addr,e)}function Gp(t,e){t.uniform2uiv(this.addr,e)}function Wp(t,e){t.uniform3uiv(this.addr,e)}function Xp(t,e){t.uniform4uiv(this.addr,e)}function Zp(t,e,n){const i=this.cache,r=e.length,s=rs(n,r);vt(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||vl,s[a])}function Yp(t,e,n){const i=this.cache,r=e.length,s=rs(n,r);vt(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||bl,s[a])}function qp(t,e,n){const i=this.cache,r=e.length,s=rs(n,r);vt(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||yl,s[a])}function Jp(t,e,n){const i=this.cache,r=e.length,s=rs(n,r);vt(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Ml,s[a])}function Kp(t){switch(t){case 5126:return Lp;case 35664:return Ip;case 35665:return Dp;case 35666:return Up;case 35674:return Np;case 35675:return Fp;case 35676:return Op;case 5124:case 35670:return Bp;case 35667:case 35671:return zp;case 35668:case 35672:return kp;case 35669:case 35673:return Vp;case 5125:return Hp;case 36294:return Gp;case 36295:return Wp;case 36296:return Xp;case 35678:case 36198:case 36298:case 36306:case 35682:return Zp;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return Jp}}class $p{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Pp(n.type)}}class jp{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Kp(n.type)}}class Qp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const c=r[s];c.setValue(e,n[c.id],i)}}}const Bs=/(\w+)(\])?(\[|\.)?/g;function oc(t,e){t.seq.push(e),t.map[e.id]=e}function em(t,e,n){const i=t.name,r=i.length;for(Bs.lastIndex=0;;){const s=Bs.exec(i),a=Bs.lastIndex;let c=s[1];const o=s[2]==="]",l=s[3];if(o&&(c=c|0),l===void 0||l==="["&&a+2===r){oc(n,l===void 0?new $p(c,t,e):new jp(c,t,e));break}else{let h=n.map[c];h===void 0&&(h=new Qp(c),oc(n,h)),n=h}}}class Yr{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);em(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const c=n[s],o=i[c.id];o.needsUpdate!==!1&&c.setValue(e,o.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function cc(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const tm=37297;let nm=0;function im(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const c=a+1;i.push(`${c===e?">":" "} ${c}: ${n[a]}`)}return i.join(`
`)}const lc=new Ge;function rm(t){je._getMatrix(lc,je.workingColorSpace,t);const e=`mat3( ${lc.elements.map(n=>n.toFixed(4))} )`;switch(je.getTransfer(t)){case is:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function uc(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+im(t.getShaderSource(e),a)}else return r}function sm(t,e){const n=rm(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function am(t,e){let n;switch(e){case au:n="Linear";break;case ou:n="Reinhard";break;case cu:n="Cineon";break;case lu:n="ACESFilmic";break;case hu:n="AgX";break;case fu:n="Neutral";break;case uu:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Rr=new P;function om(){je.getLuminanceCoefficients(Rr);const t=Rr.x.toFixed(4),e=Rr.y.toFixed(4),n=Rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cm(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zi).join(`
`)}function lm(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function um(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let c=1;s.type===t.FLOAT_MAT2&&(c=2),s.type===t.FLOAT_MAT3&&(c=3),s.type===t.FLOAT_MAT4&&(c=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:c}}return n}function Zi(t){return t!==""}function hc(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fc(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ba(t){return t.replace(hm,dm)}const fm=new Map;function dm(t,e){let n=Xe[e];if(n===void 0){const i=fm.get(e);if(i!==void 0)n=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ba(n)}const pm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dc(t){return t.replace(pm,mm)}function mm(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pc(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gm(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Zc?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===zl?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===hn&&(e="SHADOWMAP_TYPE_VSM"),e}function _m(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case bi:case yi:e="ENVMAP_TYPE_CUBE";break;case ns:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xm(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case yi:e="ENVMAP_MODE_REFRACTION";break}return e}function vm(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Yc:e="ENVMAP_BLENDING_MULTIPLY";break;case ru:e="ENVMAP_BLENDING_MIX";break;case su:e="ENVMAP_BLENDING_ADD";break}return e}function Mm(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function bm(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,c=n.fragmentShader;const o=gm(n),l=_m(n),u=xm(n),h=vm(n),f=Mm(n),d=cm(n),g=lm(s),_=r.createProgram();let m,p,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Zi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Zi).join(`
`),p.length>0&&(p+=`
`)):(m=[pc(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+o:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),p=[pc(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+o:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Cn?"#define TONE_MAPPING":"",n.toneMapping!==Cn?Xe.tonemapping_pars_fragment:"",n.toneMapping!==Cn?am("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,sm("linearToOutputTexel",n.outputColorSpace),om(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Zi).join(`
`)),a=Ba(a),a=hc(a,n),a=fc(a,n),c=Ba(c),c=hc(c,n),c=fc(c,n),a=dc(a),c=dc(c),n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===To?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===To?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=w+m+a,x=w+p+c,D=cc(r,r.VERTEX_SHADER,v),A=cc(r,r.FRAGMENT_SHADER,x);r.attachShader(_,D),r.attachShader(_,A),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(I){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(_).trim(),B=r.getShaderInfoLog(D).trim(),H=r.getShaderInfoLog(A).trim();let J=!0,G=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,D,A);else{const te=uc(r,D,"vertex"),W=uc(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+te+`
`+W)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||H==="")&&(G=!1);G&&(I.diagnostics={runnable:J,programLog:V,vertexShader:{log:B,prefix:m},fragmentShader:{log:H,prefix:p}})}r.deleteShader(D),r.deleteShader(A),L=new Yr(r,_),E=um(r,_)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(_,tm)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=nm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=A,this}let ym=0;class Sm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new wm(e),n.set(e,i)),i}}class wm{constructor(e){this.id=ym++,this.code=e,this.usedTimes=0}}function Em(t,e,n,i,r,s,a){const c=new ja,o=new Sm,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,b,I,V,B){const H=V.fog,J=B.geometry,G=E.isMeshStandardMaterial?V.environment:null,te=(E.isMeshStandardMaterial?n:e).get(E.envMap||G),W=te&&te.mapping===ns?te.image.height:null,le=g[E.type];E.precision!==null&&(d=r.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const pe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,xe=pe!==void 0?pe.length:0;let De=0;J.morphAttributes.position!==void 0&&(De=1),J.morphAttributes.normal!==void 0&&(De=2),J.morphAttributes.color!==void 0&&(De=3);let Ze,Z,ie,ve;if(le){const rt=jt[le];Ze=rt.vertexShader,Z=rt.fragmentShader}else Ze=E.vertexShader,Z=E.fragmentShader,o.update(E),ie=o.getVertexShaderID(E),ve=o.getFragmentShaderID(E);const oe=t.getRenderTarget(),Ie=t.state.buffers.depth.getReversed(),Be=B.isInstancedMesh===!0,Fe=B.isBatchedMesh===!0,$e=!!E.map,j=!!E.matcap,se=!!te,C=!!E.aoMap,Re=!!E.lightMap,ne=!!E.bumpMap,ye=!!E.normalMap,ue=!!E.displacementMap,Ue=!!E.emissiveMap,Me=!!E.metalnessMap,T=!!E.roughnessMap,M=E.anisotropy>0,O=E.clearcoat>0,Y=E.dispersion>0,Q=E.iridescence>0,q=E.sheen>0,Ee=E.transmission>0,fe=M&&!!E.anisotropyMap,be=O&&!!E.clearcoatMap,Je=O&&!!E.clearcoatNormalMap,re=O&&!!E.clearcoatRoughnessMap,Se=Q&&!!E.iridescenceMap,Ne=Q&&!!E.iridescenceThicknessMap,Oe=q&&!!E.sheenColorMap,we=q&&!!E.sheenRoughnessMap,Ke=!!E.specularMap,We=!!E.specularColorMap,lt=!!E.specularIntensityMap,U=Ee&&!!E.transmissionMap,de=Ee&&!!E.thicknessMap,X=!!E.gradientMap,$=!!E.alphaMap,_e=E.alphaTest>0,me=!!E.alphaHash,Ve=!!E.extensions;let pt=Cn;E.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(pt=t.toneMapping);const wt={shaderID:le,shaderType:E.type,shaderName:E.name,vertexShader:Ze,fragmentShader:Z,defines:E.defines,customVertexShaderID:ie,customFragmentShaderID:ve,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Fe,batchingColor:Fe&&B._colorsTexture!==null,instancing:Be,instancingColor:Be&&B.instanceColor!==null,instancingMorph:Be&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Ai,alphaToCoverage:!!E.alphaToCoverage,map:$e,matcap:j,envMap:se,envMapMode:se&&te.mapping,envMapCubeUVHeight:W,aoMap:C,lightMap:Re,bumpMap:ne,normalMap:ye,displacementMap:f&&ue,emissiveMap:Ue,normalMapObjectSpace:ye&&E.normalMapType===_u,normalMapTangentSpace:ye&&E.normalMapType===rl,metalnessMap:Me,roughnessMap:T,anisotropy:M,anisotropyMap:fe,clearcoat:O,clearcoatMap:be,clearcoatNormalMap:Je,clearcoatRoughnessMap:re,dispersion:Y,iridescence:Q,iridescenceMap:Se,iridescenceThicknessMap:Ne,sheen:q,sheenColorMap:Oe,sheenRoughnessMap:we,specularMap:Ke,specularColorMap:We,specularIntensityMap:lt,transmission:Ee,transmissionMap:U,thicknessMap:de,gradientMap:X,opaque:E.transparent===!1&&E.blending===gi&&E.alphaToCoverage===!1,alphaMap:$,alphaTest:_e,alphaHash:me,combine:E.combine,mapUv:$e&&_(E.map.channel),aoMapUv:C&&_(E.aoMap.channel),lightMapUv:Re&&_(E.lightMap.channel),bumpMapUv:ne&&_(E.bumpMap.channel),normalMapUv:ye&&_(E.normalMap.channel),displacementMapUv:ue&&_(E.displacementMap.channel),emissiveMapUv:Ue&&_(E.emissiveMap.channel),metalnessMapUv:Me&&_(E.metalnessMap.channel),roughnessMapUv:T&&_(E.roughnessMap.channel),anisotropyMapUv:fe&&_(E.anisotropyMap.channel),clearcoatMapUv:be&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Je&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:we&&_(E.sheenRoughnessMap.channel),specularMapUv:Ke&&_(E.specularMap.channel),specularColorMapUv:We&&_(E.specularColorMap.channel),specularIntensityMapUv:lt&&_(E.specularIntensityMap.channel),transmissionMapUv:U&&_(E.transmissionMap.channel),thicknessMapUv:de&&_(E.thicknessMap.channel),alphaMapUv:$&&_(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(ye||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!J.attributes.uv&&($e||$),fog:!!H,useFog:E.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ie,skinning:B.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:De,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:pt,decodeVideoTexture:$e&&E.map.isVideoTexture===!0&&je.getTransfer(E.map.colorSpace)===at,decodeVideoTextureEmissive:Ue&&E.emissiveMap.isVideoTexture===!0&&je.getTransfer(E.emissiveMap.colorSpace)===at,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===fn,flipSided:E.side===Pt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ve&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&E.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return wt.vertexUv1s=l.has(1),wt.vertexUv2s=l.has(2),wt.vertexUv3s=l.has(3),l.clear(),wt}function p(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)b.push(I),b.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(w(b,E),v(b,E),b.push(t.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function w(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function v(E,b){c.disableAll(),b.supportsVertexTextures&&c.enable(0),b.instancing&&c.enable(1),b.instancingColor&&c.enable(2),b.instancingMorph&&c.enable(3),b.matcap&&c.enable(4),b.envMap&&c.enable(5),b.normalMapObjectSpace&&c.enable(6),b.normalMapTangentSpace&&c.enable(7),b.clearcoat&&c.enable(8),b.iridescence&&c.enable(9),b.alphaTest&&c.enable(10),b.vertexColors&&c.enable(11),b.vertexAlphas&&c.enable(12),b.vertexUv1s&&c.enable(13),b.vertexUv2s&&c.enable(14),b.vertexUv3s&&c.enable(15),b.vertexTangents&&c.enable(16),b.anisotropy&&c.enable(17),b.alphaHash&&c.enable(18),b.batching&&c.enable(19),b.dispersion&&c.enable(20),b.batchingColor&&c.enable(21),E.push(c.mask),c.disableAll(),b.fog&&c.enable(0),b.useFog&&c.enable(1),b.flatShading&&c.enable(2),b.logarithmicDepthBuffer&&c.enable(3),b.reverseDepthBuffer&&c.enable(4),b.skinning&&c.enable(5),b.morphTargets&&c.enable(6),b.morphNormals&&c.enable(7),b.morphColors&&c.enable(8),b.premultipliedAlpha&&c.enable(9),b.shadowMapEnabled&&c.enable(10),b.doubleSided&&c.enable(11),b.flipSided&&c.enable(12),b.useDepthPacking&&c.enable(13),b.dithering&&c.enable(14),b.transmission&&c.enable(15),b.sheen&&c.enable(16),b.opaque&&c.enable(17),b.pointsUvs&&c.enable(18),b.decodeVideoTexture&&c.enable(19),b.decodeVideoTextureEmissive&&c.enable(20),b.alphaToCoverage&&c.enable(21),E.push(c.mask)}function x(E){const b=g[E.type];let I;if(b){const V=jt[b];I=oh.clone(V.uniforms)}else I=E.uniforms;return I}function D(E,b){let I;for(let V=0,B=u.length;V<B;V++){const H=u[V];if(H.cacheKey===b){I=H,++I.usedTimes;break}}return I===void 0&&(I=new bm(t,b,E,s),u.push(I)),I}function A(E){if(--E.usedTimes===0){const b=u.indexOf(E);u[b]=u[u.length-1],u.pop(),E.destroy()}}function R(E){o.remove(E)}function L(){o.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:D,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:L}}function Tm(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let c=t.get(a);return c===void 0&&(c={},t.set(a,c)),c}function i(a){t.delete(a)}function r(a,c,o){t.get(a)[c]=o}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Am(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function mc(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function gc(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,f,d,g,_,m){let p=t[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},t[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function c(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):n.push(p)}function o(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):n.unshift(p)}function l(h,f){n.length>1&&n.sort(h||Am),i.length>1&&i.sort(f||mc),r.length>1&&r.sort(f||mc)}function u(){for(let h=e,f=t.length;h<f;h++){const d=t[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:o,finish:u,sort:l}}function Cm(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new gc,t.set(i,[a])):r>=s.length?(a=new gc,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Rm(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new P,color:new Qe};break;case"SpotLight":n={position:new P,direction:new P,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new P,halfWidth:new P,halfHeight:new P};break}return t[e.id]=n,n}}}function Pm(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Lm=0;function Im(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Dm(t){const e=new Rm,n=Pm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);const r=new P,s=new st,a=new st;function c(l){let u=0,h=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,w=0,v=0,x=0,D=0,A=0,R=0;l.sort(Im);for(let E=0,b=l.length;E<b;E++){const I=l[E],V=I.color,B=I.intensity,H=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=V.r*B,h+=V.g*B,f+=V.b*B;else if(I.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(I.sh.coefficients[G],B);R++}else if(I.isDirectionalLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const te=I.shadow,W=n.get(I);W.shadowIntensity=te.intensity,W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,i.directionalShadow[d]=W,i.directionalShadowMap[d]=J,i.directionalShadowMatrix[d]=I.shadow.matrix,w++}i.directional[d]=G,d++}else if(I.isSpotLight){const G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(V).multiplyScalar(B),G.distance=H,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,i.spot[_]=G;const te=I.shadow;if(I.map&&(i.spotLightMap[D]=I.map,D++,te.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[_]=te.matrix,I.castShadow){const W=n.get(I);W.shadowIntensity=te.intensity,W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=J,x++}_++}else if(I.isRectAreaLight){const G=e.get(I);G.color.copy(V).multiplyScalar(B),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=G,m++}else if(I.isPointLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){const te=I.shadow,W=n.get(I);W.shadowIntensity=te.intensity,W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,W.shadowCameraNear=te.camera.near,W.shadowCameraFar=te.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=I.shadow.matrix,v++}i.point[g]=G,g++}else if(I.isHemisphereLight){const G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(B),G.groundColor.copy(I.groundColor).multiplyScalar(B),i.hemi[p]=G,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==w||L.numPointShadows!==v||L.numSpotShadows!==x||L.numSpotMaps!==D||L.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+D-A,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,L.directionalLength=d,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=w,L.numPointShadows=v,L.numSpotShadows=x,L.numSpotMaps=D,L.numLightProbes=R,i.version=Lm++)}function o(l,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const v=l[p];if(v.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(v.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:c,setupView:o,state:i}}function _c(t){const e=new Dm(t),n=[],i=[];function r(u){l.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function c(){e.setup(n)}function o(u){e.setupView(n,u)}const l={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:c,setupLightsView:o,pushLight:s,pushShadow:a}}function Um(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let c;return a===void 0?(c=new _c(t),e.set(r,[c])):s>=a.length?(c=new _c(t),a.push(c)):c=a[s],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class Nm extends Pi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fm extends Pi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Om=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bm=`uniform sampler2D shadow_pass;
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
}`;function zm(t,e,n){let i=new Qa;const r=new ce,s=new ce,a=new ct,c=new Nm({depthPacking:gu}),o=new Fm,l={},u=n.maxTextureSize,h={[Rn]:Pt,[Pt]:Rn,[fn]:fn},f=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:Om,fragmentShader:Bm}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new ke;g.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Jt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zc;let p=this.type;this.render=function(A,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=t.getRenderTarget(),b=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),V=t.state;V.setBlending(An),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const B=p!==hn&&this.type===hn,H=p===hn&&this.type!==hn;for(let J=0,G=A.length;J<G;J++){const te=A[J],W=te.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const le=W.getFrameExtents();if(r.multiply(le),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/le.x),r.x=s.x*le.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/le.y),r.y=s.y*le.y,W.mapSize.y=s.y)),W.map===null||B===!0||H===!0){const xe=this.type!==hn?{minFilter:Nt,magFilter:Nt}:{};W.map!==null&&W.map.dispose(),W.map=new Zn(r.x,r.y,xe),W.map.texture.name=te.name+".shadowMap",W.camera.updateProjectionMatrix()}t.setRenderTarget(W.map),t.clear();const pe=W.getViewportCount();for(let xe=0;xe<pe;xe++){const De=W.getViewport(xe);a.set(s.x*De.x,s.y*De.y,s.x*De.z,s.y*De.w),V.viewport(a),W.updateMatrices(te,xe),i=W.getFrustum(),x(R,L,W.camera,te,this.type)}W.isPointLightShadow!==!0&&this.type===hn&&w(W,L),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(E,b,I)};function w(A,R){const L=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Zn(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(R,null,L,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(R,null,L,d,_,null)}function v(A,R,L,E){let b=null;const I=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)b=I;else if(b=L.isPointLight===!0?o:c,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const V=b.uuid,B=R.uuid;let H=l[V];H===void 0&&(H={},l[V]=H);let J=H[B];J===void 0&&(J=b.clone(),H[B]=J,R.addEventListener("dispose",D)),b=J}if(b.visible=R.visible,b.wireframe=R.wireframe,E===hn?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:h[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const V=t.properties.get(b);V.light=L}return b}function x(A,R,L,E,b){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===hn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const B=e.update(A),H=A.material;if(Array.isArray(H)){const J=B.groups;for(let G=0,te=J.length;G<te;G++){const W=J[G],le=H[W.materialIndex];if(le&&le.visible){const pe=v(A,le,E,b);A.onBeforeShadow(t,A,R,L,B,pe,W),t.renderBufferDirect(L,null,B,pe,A,W),A.onAfterShadow(t,A,R,L,B,pe,W)}}}else if(H.visible){const J=v(A,H,E,b);A.onBeforeShadow(t,A,R,L,B,J,null),t.renderBufferDirect(L,null,B,J,A,null),A.onAfterShadow(t,A,R,L,B,J,null)}}const V=A.children;for(let B=0,H=V.length;B<H;B++)x(V[B],R,L,E,b)}function D(A){A.target.removeEventListener("dispose",D);for(const L in l){const E=l[L],b=A.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}const km={[ea]:ta,[na]:sa,[ia]:aa,[Mi]:ra,[ta]:ea,[sa]:na,[aa]:ia,[ra]:Mi};function Vm(t,e){function n(){let U=!1;const de=new ct;let X=null;const $=new ct(0,0,0,0);return{setMask:function(_e){X!==_e&&!U&&(t.colorMask(_e,_e,_e,_e),X=_e)},setLocked:function(_e){U=_e},setClear:function(_e,me,Ve,pt,wt){wt===!0&&(_e*=pt,me*=pt,Ve*=pt),de.set(_e,me,Ve,pt),$.equals(de)===!1&&(t.clearColor(_e,me,Ve,pt),$.copy(de))},reset:function(){U=!1,X=null,$.set(-1,0,0,0)}}}function i(){let U=!1,de=!1,X=null,$=null,_e=null;return{setReversed:function(me){if(de!==me){const Ve=e.get("EXT_clip_control");de?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);const pt=_e;_e=null,this.setClear(pt)}de=me},getReversed:function(){return de},setTest:function(me){me?oe(t.DEPTH_TEST):Ie(t.DEPTH_TEST)},setMask:function(me){X!==me&&!U&&(t.depthMask(me),X=me)},setFunc:function(me){if(de&&(me=km[me]),$!==me){switch(me){case ea:t.depthFunc(t.NEVER);break;case ta:t.depthFunc(t.ALWAYS);break;case na:t.depthFunc(t.LESS);break;case Mi:t.depthFunc(t.LEQUAL);break;case ia:t.depthFunc(t.EQUAL);break;case ra:t.depthFunc(t.GEQUAL);break;case sa:t.depthFunc(t.GREATER);break;case aa:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}$=me}},setLocked:function(me){U=me},setClear:function(me){_e!==me&&(de&&(me=1-me),t.clearDepth(me),_e=me)},reset:function(){U=!1,X=null,$=null,_e=null,de=!1}}}function r(){let U=!1,de=null,X=null,$=null,_e=null,me=null,Ve=null,pt=null,wt=null;return{setTest:function(rt){U||(rt?oe(t.STENCIL_TEST):Ie(t.STENCIL_TEST))},setMask:function(rt){de!==rt&&!U&&(t.stencilMask(rt),de=rt)},setFunc:function(rt,Gt,rn){(X!==rt||$!==Gt||_e!==rn)&&(t.stencilFunc(rt,Gt,rn),X=rt,$=Gt,_e=rn)},setOp:function(rt,Gt,rn){(me!==rt||Ve!==Gt||pt!==rn)&&(t.stencilOp(rt,Gt,rn),me=rt,Ve=Gt,pt=rn)},setLocked:function(rt){U=rt},setClear:function(rt){wt!==rt&&(t.clearStencil(rt),wt=rt)},reset:function(){U=!1,de=null,X=null,$=null,_e=null,me=null,Ve=null,pt=null,wt=null}}}const s=new n,a=new i,c=new r,o=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,w=null,v=null,x=null,D=null,A=null,R=new Qe(0,0,0),L=0,E=!1,b=null,I=null,V=null,B=null,H=null;const J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,te=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=te>=1):W.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=te>=2);let le=null,pe={};const xe=t.getParameter(t.SCISSOR_BOX),De=t.getParameter(t.VIEWPORT),Ze=new ct().fromArray(xe),Z=new ct().fromArray(De);function ie(U,de,X,$){const _e=new Uint8Array(4),me=t.createTexture();t.bindTexture(U,me),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ve=0;Ve<X;Ve++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,$,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(de+Ve,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return me}const ve={};ve[t.TEXTURE_2D]=ie(t.TEXTURE_2D,t.TEXTURE_2D,1),ve[t.TEXTURE_CUBE_MAP]=ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[t.TEXTURE_2D_ARRAY]=ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ve[t.TEXTURE_3D]=ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),c.setClear(0),oe(t.DEPTH_TEST),a.setFunc(Mi),ne(!1),ye(_o),oe(t.CULL_FACE),C(An);function oe(U){u[U]!==!0&&(t.enable(U),u[U]=!0)}function Ie(U){u[U]!==!1&&(t.disable(U),u[U]=!1)}function Be(U,de){return h[U]!==de?(t.bindFramebuffer(U,de),h[U]=de,U===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=de),U===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=de),!0):!1}function Fe(U,de){let X=d,$=!1;if(U){X=f.get(de),X===void 0&&(X=[],f.set(de,X));const _e=U.textures;if(X.length!==_e.length||X[0]!==t.COLOR_ATTACHMENT0){for(let me=0,Ve=_e.length;me<Ve;me++)X[me]=t.COLOR_ATTACHMENT0+me;X.length=_e.length,$=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,$=!0);$&&t.drawBuffers(X)}function $e(U){return g!==U?(t.useProgram(U),g=U,!0):!1}const j={[Vn]:t.FUNC_ADD,[Vl]:t.FUNC_SUBTRACT,[Hl]:t.FUNC_REVERSE_SUBTRACT};j[Gl]=t.MIN,j[Wl]=t.MAX;const se={[Xl]:t.ZERO,[Zl]:t.ONE,[Yl]:t.SRC_COLOR,[js]:t.SRC_ALPHA,[Ql]:t.SRC_ALPHA_SATURATE,[$l]:t.DST_COLOR,[Jl]:t.DST_ALPHA,[ql]:t.ONE_MINUS_SRC_COLOR,[Qs]:t.ONE_MINUS_SRC_ALPHA,[jl]:t.ONE_MINUS_DST_COLOR,[Kl]:t.ONE_MINUS_DST_ALPHA,[eu]:t.CONSTANT_COLOR,[tu]:t.ONE_MINUS_CONSTANT_COLOR,[nu]:t.CONSTANT_ALPHA,[iu]:t.ONE_MINUS_CONSTANT_ALPHA};function C(U,de,X,$,_e,me,Ve,pt,wt,rt){if(U===An){_===!0&&(Ie(t.BLEND),_=!1);return}if(_===!1&&(oe(t.BLEND),_=!0),U!==kl){if(U!==m||rt!==E){if((p!==Vn||x!==Vn)&&(t.blendEquation(t.FUNC_ADD),p=Vn,x=Vn),rt)switch(U){case gi:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xo:t.blendFunc(t.ONE,t.ONE);break;case vo:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Mo:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case gi:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xo:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case vo:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Mo:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,v=null,D=null,A=null,R.set(0,0,0),L=0,m=U,E=rt}return}_e=_e||de,me=me||X,Ve=Ve||$,(de!==p||_e!==x)&&(t.blendEquationSeparate(j[de],j[_e]),p=de,x=_e),(X!==w||$!==v||me!==D||Ve!==A)&&(t.blendFuncSeparate(se[X],se[$],se[me],se[Ve]),w=X,v=$,D=me,A=Ve),(pt.equals(R)===!1||wt!==L)&&(t.blendColor(pt.r,pt.g,pt.b,wt),R.copy(pt),L=wt),m=U,E=!1}function Re(U,de){U.side===fn?Ie(t.CULL_FACE):oe(t.CULL_FACE);let X=U.side===Pt;de&&(X=!X),ne(X),U.blending===gi&&U.transparent===!1?C(An):C(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const $=U.stencilWrite;c.setTest($),$&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ue(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?oe(t.SAMPLE_ALPHA_TO_COVERAGE):Ie(t.SAMPLE_ALPHA_TO_COVERAGE)}function ne(U){b!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),b=U)}function ye(U){U!==Ol?(oe(t.CULL_FACE),U!==I&&(U===_o?t.cullFace(t.BACK):U===Bl?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ie(t.CULL_FACE),I=U}function ue(U){U!==V&&(G&&t.lineWidth(U),V=U)}function Ue(U,de,X){U?(oe(t.POLYGON_OFFSET_FILL),(B!==de||H!==X)&&(t.polygonOffset(de,X),B=de,H=X)):Ie(t.POLYGON_OFFSET_FILL)}function Me(U){U?oe(t.SCISSOR_TEST):Ie(t.SCISSOR_TEST)}function T(U){U===void 0&&(U=t.TEXTURE0+J-1),le!==U&&(t.activeTexture(U),le=U)}function M(U,de,X){X===void 0&&(le===null?X=t.TEXTURE0+J-1:X=le);let $=pe[X];$===void 0&&($={type:void 0,texture:void 0},pe[X]=$),($.type!==U||$.texture!==de)&&(le!==X&&(t.activeTexture(X),le=X),t.bindTexture(U,de||ve[U]),$.type=U,$.texture=de)}function O(){const U=pe[le];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Y(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Je(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(U){Ze.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Ze.copy(U))}function we(U){Z.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Z.copy(U))}function Ke(U,de){let X=l.get(de);X===void 0&&(X=new WeakMap,l.set(de,X));let $=X.get(U);$===void 0&&($=t.getUniformBlockIndex(de,U.name),X.set(U,$))}function We(U,de){const $=l.get(de).get(U);o.get(de)!==$&&(t.uniformBlockBinding(de,$,U.__bindingPointIndex),o.set(de,$))}function lt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},le=null,pe={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,w=null,v=null,x=null,D=null,A=null,R=new Qe(0,0,0),L=0,E=!1,b=null,I=null,V=null,B=null,H=null,Ze.set(0,0,t.canvas.width,t.canvas.height),Z.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),c.reset()}return{buffers:{color:s,depth:a,stencil:c},enable:oe,disable:Ie,bindFramebuffer:Be,drawBuffers:Fe,useProgram:$e,setBlending:C,setMaterial:Re,setFlipSided:ne,setCullFace:ye,setLineWidth:ue,setPolygonOffset:Ue,setScissorTest:Me,activeTexture:T,bindTexture:M,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:Se,texImage3D:Ne,updateUBOMapping:Ke,uniformBlockBinding:We,texStorage2D:Je,texStorage3D:re,texSubImage2D:q,texSubImage3D:Ee,compressedTexSubImage2D:fe,compressedTexSubImage3D:be,scissor:Oe,viewport:we,reset:lt}}function xc(t,e,n,i){const r=Hm(i);switch(n){case jc:return t*e;case el:return t*e;case tl:return t*e*2;case Za:return t*e/r.components*r.byteLength;case Ya:return t*e/r.components*r.byteLength;case nl:return t*e*2/r.components*r.byteLength;case qa:return t*e*2/r.components*r.byteLength;case Qc:return t*e*3/r.components*r.byteLength;case qt:return t*e*4/r.components*r.byteLength;case Ja:return t*e*4/r.components*r.byteLength;case Hr:case Gr:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Wr:case Xr:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case fa:case pa:return Math.max(t,16)*Math.max(e,8)/4;case ha:case da:return Math.max(t,8)*Math.max(e,8)/2;case ma:case ga:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case _a:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case va:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ma:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ba:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ya:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Sa:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case wa:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ea:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ta:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ra:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Pa:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case La:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Zr:case Ia:case Da:return Math.ceil(t/4)*Math.ceil(e/4)*16;case il:case Ua:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Na:case Fa:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Hm(t){switch(t){case mn:case Jc:return{byteLength:1,components:1};case $i:case Kc:case ir:return{byteLength:2,components:1};case Wa:case Xa:return{byteLength:2,components:4};case Xn:case Ga:case en:return{byteLength:4,components:1};case $c:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function Gm(t,e,n,i,r,s,a){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ce,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return d?new OffscreenCanvas(T,M):Qi("canvas")}function _(T,M,O){let Y=1;const Q=Me(T);if((Q.width>O||Q.height>O)&&(Y=O/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(Y*Q.width),Ee=Math.floor(Y*Q.height);h===void 0&&(h=g(q,Ee));const fe=M?g(q,Ee):h;return fe.width=q,fe.height=Ee,fe.getContext("2d").drawImage(T,0,0,q,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Ee+")."),fe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){t.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(T,M,O,Y,Q=!1){if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=M;if(M===t.RED&&(O===t.FLOAT&&(q=t.R32F),O===t.HALF_FLOAT&&(q=t.R16F),O===t.UNSIGNED_BYTE&&(q=t.R8)),M===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.R8UI),O===t.UNSIGNED_SHORT&&(q=t.R16UI),O===t.UNSIGNED_INT&&(q=t.R32UI),O===t.BYTE&&(q=t.R8I),O===t.SHORT&&(q=t.R16I),O===t.INT&&(q=t.R32I)),M===t.RG&&(O===t.FLOAT&&(q=t.RG32F),O===t.HALF_FLOAT&&(q=t.RG16F),O===t.UNSIGNED_BYTE&&(q=t.RG8)),M===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.RG8UI),O===t.UNSIGNED_SHORT&&(q=t.RG16UI),O===t.UNSIGNED_INT&&(q=t.RG32UI),O===t.BYTE&&(q=t.RG8I),O===t.SHORT&&(q=t.RG16I),O===t.INT&&(q=t.RG32I)),M===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.RGB8UI),O===t.UNSIGNED_SHORT&&(q=t.RGB16UI),O===t.UNSIGNED_INT&&(q=t.RGB32UI),O===t.BYTE&&(q=t.RGB8I),O===t.SHORT&&(q=t.RGB16I),O===t.INT&&(q=t.RGB32I)),M===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),O===t.UNSIGNED_INT&&(q=t.RGBA32UI),O===t.BYTE&&(q=t.RGBA8I),O===t.SHORT&&(q=t.RGBA16I),O===t.INT&&(q=t.RGBA32I)),M===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),M===t.RGBA){const Ee=Q?is:je.getTransfer(Y);O===t.FLOAT&&(q=t.RGBA32F),O===t.HALF_FLOAT&&(q=t.RGBA16F),O===t.UNSIGNED_BYTE&&(q=Ee===at?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(T,M){let O;return T?M===null||M===Xn||M===Si?O=t.DEPTH24_STENCIL8:M===en?O=t.DEPTH32F_STENCIL8:M===$i&&(O=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Xn||M===Si?O=t.DEPTH_COMPONENT24:M===en?O=t.DEPTH_COMPONENT32F:M===$i&&(O=t.DEPTH_COMPONENT16),O}function D(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Nt&&T.minFilter!==Qt?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function A(T){const M=T.target;M.removeEventListener("dispose",A),L(M),M.isVideoTexture&&u.delete(M)}function R(T){const M=T.target;M.removeEventListener("dispose",R),b(M)}function L(T){const M=i.get(T);if(M.__webglInit===void 0)return;const O=T.source,Y=f.get(O);if(Y){const Q=Y[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(T),Object.keys(Y).length===0&&f.delete(O)}i.remove(T)}function E(T){const M=i.get(T);t.deleteTexture(M.__webglTexture);const O=T.source,Y=f.get(O);delete Y[M.__cacheKey],a.memory.textures--}function b(T){const M=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let Q=0;Q<M.__webglFramebuffer[Y].length;Q++)t.deleteFramebuffer(M.__webglFramebuffer[Y][Q]);else t.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)t.deleteFramebuffer(M.__webglFramebuffer[Y]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=T.textures;for(let Y=0,Q=O.length;Y<Q;Y++){const q=i.get(O[Y]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(O[Y])}i.remove(T)}let I=0;function V(){I=0}function B(){const T=I;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),I+=1,T}function H(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function J(T,M){const O=i.get(T);if(T.isVideoTexture&&ue(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(O,T,M);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+M)}function G(T,M){const O=i.get(T);if(T.version>0&&O.__version!==T.version){Z(O,T,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+M)}function te(T,M){const O=i.get(T);if(T.version>0&&O.__version!==T.version){Z(O,T,M);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+M)}function W(T,M){const O=i.get(T);if(T.version>0&&O.__version!==T.version){ie(O,T,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+M)}const le={[la]:t.REPEAT,[Gn]:t.CLAMP_TO_EDGE,[ua]:t.MIRRORED_REPEAT},pe={[Nt]:t.NEAREST,[du]:t.NEAREST_MIPMAP_NEAREST,[lr]:t.NEAREST_MIPMAP_LINEAR,[Qt]:t.LINEAR,[hs]:t.LINEAR_MIPMAP_NEAREST,[Wn]:t.LINEAR_MIPMAP_LINEAR},xe={[xu]:t.NEVER,[wu]:t.ALWAYS,[vu]:t.LESS,[sl]:t.LEQUAL,[Mu]:t.EQUAL,[Su]:t.GEQUAL,[bu]:t.GREATER,[yu]:t.NOTEQUAL};function De(T,M){if(M.type===en&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Qt||M.magFilter===hs||M.magFilter===lr||M.magFilter===Wn||M.minFilter===Qt||M.minFilter===hs||M.minFilter===lr||M.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,le[M.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,le[M.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,le[M.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,pe[M.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,pe[M.minFilter]),M.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,xe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Nt||M.minFilter!==lr&&M.minFilter!==Wn||M.type===en&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ze(T,M){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",A));const Y=M.source;let Q=f.get(Y);Q===void 0&&(Q={},f.set(Y,Q));const q=H(M);if(q!==T.__cacheKey){Q[q]===void 0&&(Q[q]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[q].usedTimes++;const Ee=Q[T.__cacheKey];Ee!==void 0&&(Q[T.__cacheKey].usedTimes--,Ee.usedTimes===0&&E(M)),T.__cacheKey=q,T.__webglTexture=Q[q].texture}return O}function Z(T,M,O){let Y=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=t.TEXTURE_3D);const Q=Ze(T,M),q=M.source;n.bindTexture(Y,T.__webglTexture,t.TEXTURE0+O);const Ee=i.get(q);if(q.version!==Ee.__version||Q===!0){n.activeTexture(t.TEXTURE0+O);const fe=je.getPrimaries(je.workingColorSpace),be=M.colorSpace===Tn?null:je.getPrimaries(M.colorSpace),Je=M.colorSpace===Tn||fe===be?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let re=_(M.image,!1,r.maxTextureSize);re=Ue(M,re);const Se=s.convert(M.format,M.colorSpace),Ne=s.convert(M.type);let Oe=v(M.internalFormat,Se,Ne,M.colorSpace,M.isVideoTexture);De(Y,M);let we;const Ke=M.mipmaps,We=M.isVideoTexture!==!0,lt=Ee.__version===void 0||Q===!0,U=q.dataReady,de=D(M,re);if(M.isDepthTexture)Oe=x(M.format===wi,M.type),lt&&(We?n.texStorage2D(t.TEXTURE_2D,1,Oe,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Oe,re.width,re.height,0,Se,Ne,null));else if(M.isDataTexture)if(Ke.length>0){We&&lt&&n.texStorage2D(t.TEXTURE_2D,de,Oe,Ke[0].width,Ke[0].height);for(let X=0,$=Ke.length;X<$;X++)we=Ke[X],We?U&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,we.width,we.height,Se,Ne,we.data):n.texImage2D(t.TEXTURE_2D,X,Oe,we.width,we.height,0,Se,Ne,we.data);M.generateMipmaps=!1}else We?(lt&&n.texStorage2D(t.TEXTURE_2D,de,Oe,re.width,re.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,Se,Ne,re.data)):n.texImage2D(t.TEXTURE_2D,0,Oe,re.width,re.height,0,Se,Ne,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&lt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Oe,Ke[0].width,Ke[0].height,re.depth);for(let X=0,$=Ke.length;X<$;X++)if(we=Ke[X],M.format!==qt)if(Se!==null)if(We){if(U)if(M.layerUpdates.size>0){const _e=xc(we.width,we.height,M.format,M.type);for(const me of M.layerUpdates){const Ve=we.data.subarray(me*_e/we.data.BYTES_PER_ELEMENT,(me+1)*_e/we.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,me,we.width,we.height,1,Se,Ve)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,we.width,we.height,re.depth,Se,we.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,X,Oe,we.width,we.height,re.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,we.width,we.height,re.depth,Se,Ne,we.data):n.texImage3D(t.TEXTURE_2D_ARRAY,X,Oe,we.width,we.height,re.depth,0,Se,Ne,we.data)}else{We&&lt&&n.texStorage2D(t.TEXTURE_2D,de,Oe,Ke[0].width,Ke[0].height);for(let X=0,$=Ke.length;X<$;X++)we=Ke[X],M.format!==qt?Se!==null?We?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,X,0,0,we.width,we.height,Se,we.data):n.compressedTexImage2D(t.TEXTURE_2D,X,Oe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?U&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,we.width,we.height,Se,Ne,we.data):n.texImage2D(t.TEXTURE_2D,X,Oe,we.width,we.height,0,Se,Ne,we.data)}else if(M.isDataArrayTexture)if(We){if(lt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Oe,re.width,re.height,re.depth),U)if(M.layerUpdates.size>0){const X=xc(re.width,re.height,M.format,M.type);for(const $ of M.layerUpdates){const _e=re.data.subarray($*X/re.data.BYTES_PER_ELEMENT,($+1)*X/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,$,re.width,re.height,1,Se,Ne,_e)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Se,Ne,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Oe,re.width,re.height,re.depth,0,Se,Ne,re.data);else if(M.isData3DTexture)We?(lt&&n.texStorage3D(t.TEXTURE_3D,de,Oe,re.width,re.height,re.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Se,Ne,re.data)):n.texImage3D(t.TEXTURE_3D,0,Oe,re.width,re.height,re.depth,0,Se,Ne,re.data);else if(M.isFramebufferTexture){if(lt)if(We)n.texStorage2D(t.TEXTURE_2D,de,Oe,re.width,re.height);else{let X=re.width,$=re.height;for(let _e=0;_e<de;_e++)n.texImage2D(t.TEXTURE_2D,_e,Oe,X,$,0,Se,Ne,null),X>>=1,$>>=1}}else if(Ke.length>0){if(We&&lt){const X=Me(Ke[0]);n.texStorage2D(t.TEXTURE_2D,de,Oe,X.width,X.height)}for(let X=0,$=Ke.length;X<$;X++)we=Ke[X],We?U&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,Se,Ne,we):n.texImage2D(t.TEXTURE_2D,X,Oe,Se,Ne,we);M.generateMipmaps=!1}else if(We){if(lt){const X=Me(re);n.texStorage2D(t.TEXTURE_2D,de,Oe,X.width,X.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,Ne,re)}else n.texImage2D(t.TEXTURE_2D,0,Oe,Se,Ne,re);m(M)&&p(Y),Ee.__version=q.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ie(T,M,O){if(M.image.length!==6)return;const Y=Ze(T,M),Q=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+O);const q=i.get(Q);if(Q.version!==q.__version||Y===!0){n.activeTexture(t.TEXTURE0+O);const Ee=je.getPrimaries(je.workingColorSpace),fe=M.colorSpace===Tn?null:je.getPrimaries(M.colorSpace),be=M.colorSpace===Tn||Ee===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Je=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,Se=[];for(let $=0;$<6;$++)!Je&&!re?Se[$]=_(M.image[$],!0,r.maxCubemapSize):Se[$]=re?M.image[$].image:M.image[$],Se[$]=Ue(M,Se[$]);const Ne=Se[0],Oe=s.convert(M.format,M.colorSpace),we=s.convert(M.type),Ke=v(M.internalFormat,Oe,we,M.colorSpace),We=M.isVideoTexture!==!0,lt=q.__version===void 0||Y===!0,U=Q.dataReady;let de=D(M,Ne);De(t.TEXTURE_CUBE_MAP,M);let X;if(Je){We&&lt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Ke,Ne.width,Ne.height);for(let $=0;$<6;$++){X=Se[$].mipmaps;for(let _e=0;_e<X.length;_e++){const me=X[_e];M.format!==qt?Oe!==null?We?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,0,0,me.width,me.height,Oe,me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,Ke,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,0,0,me.width,me.height,Oe,we,me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,Ke,me.width,me.height,0,Oe,we,me.data)}}}else{if(X=M.mipmaps,We&&lt){X.length>0&&de++;const $=Me(Se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Ke,$.width,$.height)}for(let $=0;$<6;$++)if(re){We?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Se[$].width,Se[$].height,Oe,we,Se[$].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ke,Se[$].width,Se[$].height,0,Oe,we,Se[$].data);for(let _e=0;_e<X.length;_e++){const Ve=X[_e].image[$].image;We?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,0,0,Ve.width,Ve.height,Oe,we,Ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,Ke,Ve.width,Ve.height,0,Oe,we,Ve.data)}}else{We?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Oe,we,Se[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ke,Oe,we,Se[$]);for(let _e=0;_e<X.length;_e++){const me=X[_e];We?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,0,0,Oe,we,me.image[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,Ke,Oe,we,me.image[$])}}}m(M)&&p(t.TEXTURE_CUBE_MAP),q.__version=Q.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ve(T,M,O,Y,Q,q){const Ee=s.convert(O.format,O.colorSpace),fe=s.convert(O.type),be=v(O.internalFormat,Ee,fe,O.colorSpace),Je=i.get(M),re=i.get(O);if(re.__renderTarget=M,!Je.__hasExternalTextures){const Se=Math.max(1,M.width>>q),Ne=Math.max(1,M.height>>q);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,q,be,Se,Ne,M.depth,0,Ee,fe,null):n.texImage2D(Q,q,be,Se,Ne,0,Ee,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),ye(M)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,Q,re.__webglTexture,0,ne(M)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,Q,re.__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function oe(T,M,O){if(t.bindRenderbuffer(t.RENDERBUFFER,T),M.depthBuffer){const Y=M.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,q=x(M.stencilBuffer,Q),Ee=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=ne(M);ye(M)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,q,M.width,M.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,q,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,q,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,T)}else{const Y=M.textures;for(let Q=0;Q<Y.length;Q++){const q=Y[Q],Ee=s.convert(q.format,q.colorSpace),fe=s.convert(q.type),be=v(q.internalFormat,Ee,fe,q.colorSpace),Je=ne(M);O&&ye(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Je,be,M.width,M.height):ye(M)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Je,be,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,be,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ie(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(M.depthTexture);Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J(M.depthTexture,0);const Q=Y.__webglTexture,q=ne(M);if(M.depthTexture.format===_i)ye(M)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(M.depthTexture.format===wi)ye(M)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Be(T){const M=i.get(T),O=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=Y}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ie(M.__webglFramebuffer,T)}else if(O){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=t.createRenderbuffer(),oe(M.__webglDepthbuffer[Y],T,!1);else{const Q=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),oe(M.__webglDepthbuffer,T,!1);else{const Y=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,Q)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(T,M,O){const Y=i.get(T);M!==void 0&&ve(Y.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&Be(T)}function $e(T){const M=T.texture,O=i.get(T),Y=i.get(M);T.addEventListener("dispose",R);const Q=T.textures,q=T.isWebGLCubeRenderTarget===!0,Ee=Q.length>1;if(Ee||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=M.version,a.memory.textures++),q){O.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[fe]=[];for(let be=0;be<M.mipmaps.length;be++)O.__webglFramebuffer[fe][be]=t.createFramebuffer()}else O.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)O.__webglFramebuffer[fe]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let fe=0,be=Q.length;fe<be;fe++){const Je=i.get(Q[fe]);Je.__webglTexture===void 0&&(Je.__webglTexture=t.createTexture(),a.memory.textures++)}if(T.samples>0&&ye(T)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let fe=0;fe<Q.length;fe++){const be=Q[fe];O.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[fe]);const Je=s.convert(be.format,be.colorSpace),re=s.convert(be.type),Se=v(be.internalFormat,Je,re,be.colorSpace,T.isXRRenderTarget===!0),Ne=ne(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,Se,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,O.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),oe(O.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),De(t.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)ve(O.__webglFramebuffer[fe][be],T,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be);else ve(O.__webglFramebuffer[fe],T,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(M)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let fe=0,be=Q.length;fe<be;fe++){const Je=Q[fe],re=i.get(Je);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),De(t.TEXTURE_2D,Je),ve(O.__webglFramebuffer,T,Je,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),m(Je)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(fe=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,Y.__webglTexture),De(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)ve(O.__webglFramebuffer[be],T,M,t.COLOR_ATTACHMENT0,fe,be);else ve(O.__webglFramebuffer,T,M,t.COLOR_ATTACHMENT0,fe,0);m(M)&&p(fe),n.unbindTexture()}T.depthBuffer&&Be(T)}function j(T){const M=T.textures;for(let O=0,Y=M.length;O<Y;O++){const Q=M[O];if(m(Q)){const q=w(T),Ee=i.get(Q).__webglTexture;n.bindTexture(q,Ee),p(q),n.unbindTexture()}}}const se=[],C=[];function Re(T){if(T.samples>0){if(ye(T)===!1){const M=T.textures,O=T.width,Y=T.height;let Q=t.COLOR_BUFFER_BIT;const q=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(T),fe=M.length>1;if(fe)for(let be=0;be<M.length;be++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let be=0;be<M.length;be++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[be]);const Je=i.get(M[be]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Je,0)}t.blitFramebuffer(0,0,O,Y,0,0,O,Y,Q,t.NEAREST),o===!0&&(se.length=0,C.length=0,se.push(t.COLOR_ATTACHMENT0+be),T.depthBuffer&&T.resolveDepthBuffer===!1&&(se.push(q),C.push(q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,C)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,se))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let be=0;be<M.length;be++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[be]);const Je=i.get(M[be]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,Je,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&o){const M=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function ne(T){return Math.min(r.maxSamples,T.samples)}function ye(T){const M=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ue(T){const M=a.render.frame;u.get(T)!==M&&(u.set(T,M),T.update())}function Ue(T,M){const O=T.colorSpace,Y=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Ai&&O!==Tn&&(je.getTransfer(O)===at?(Y!==qt||Q!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function Me(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=V,this.setTexture2D=J,this.setTexture2DArray=G,this.setTexture3D=te,this.setTextureCube=W,this.rebindTextures=Fe,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ye}function Wm(t,e){function n(i,r=Tn){let s;const a=je.getTransfer(r);if(i===mn)return t.UNSIGNED_BYTE;if(i===Wa)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Xa)return t.UNSIGNED_SHORT_5_5_5_1;if(i===$c)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Jc)return t.BYTE;if(i===Kc)return t.SHORT;if(i===$i)return t.UNSIGNED_SHORT;if(i===Ga)return t.INT;if(i===Xn)return t.UNSIGNED_INT;if(i===en)return t.FLOAT;if(i===ir)return t.HALF_FLOAT;if(i===jc)return t.ALPHA;if(i===Qc)return t.RGB;if(i===qt)return t.RGBA;if(i===el)return t.LUMINANCE;if(i===tl)return t.LUMINANCE_ALPHA;if(i===_i)return t.DEPTH_COMPONENT;if(i===wi)return t.DEPTH_STENCIL;if(i===Za)return t.RED;if(i===Ya)return t.RED_INTEGER;if(i===nl)return t.RG;if(i===qa)return t.RG_INTEGER;if(i===Ja)return t.RGBA_INTEGER;if(i===Hr||i===Gr||i===Wr||i===Xr)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Hr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Hr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ha||i===fa||i===da||i===pa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ha)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===da)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ma||i===ga||i===_a)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ma||i===ga)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===_a)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xa||i===va||i===Ma||i===ba||i===ya||i===Sa||i===wa||i===Ea||i===Ta||i===Aa||i===Ca||i===Ra||i===Pa||i===La)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===xa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===va)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ma)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ba)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ya)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ea)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ta)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Aa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ca)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ra)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===La)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zr||i===Ia||i===Da)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Zr)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ia)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Da)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===il||i===Ua||i===Na||i===Fa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Zr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ua)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Na)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Si?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Xm extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pr extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zm={type:"move"};class zs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const c=this._targetRay,o=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1));c!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Zm)))}return c!==null&&(c.visible=r!==null),o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Pr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Ym=`
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

}`;class Jm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new yt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new gn({vertexShader:Ym,fragmentShader:qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Jt(new rr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Km extends qn{constructor(e,n){super();const i=this;let r=null,s=1,a=null,c="local-floor",o=1,l=null,u=null,h=null,f=null,d=null,g=null;const _=new Jm,m=n.getContextAttributes();let p=null,w=null;const v=[],x=[],D=new ce;let A=null;const R=new kt;R.viewport=new ct;const L=new kt;L.viewport=new ct;const E=[R,L],b=new Xm;let I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ie=v[Z];return ie===void 0&&(ie=new zs,v[Z]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Z){let ie=v[Z];return ie===void 0&&(ie=new zs,v[Z]=ie),ie.getGripSpace()},this.getHand=function(Z){let ie=v[Z];return ie===void 0&&(ie=new zs,v[Z]=ie),ie.getHandSpace()};function B(Z){const ie=x.indexOf(Z.inputSource);if(ie===-1)return;const ve=v[ie];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,l||a),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",J);for(let Z=0;Z<v.length;Z++){const ie=x[Z];ie!==null&&(x[Z]=null,v[Z].disconnect(ie))}I=null,V=null,_.reset(),e.setRenderTarget(p),d=null,f=null,h=null,r=null,w=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){c=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",H),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(D),r.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new Zn(d.framebufferWidth,d.framebufferHeight,{format:qt,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,ve=null,oe=null;m.depth&&(oe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=m.stencil?wi:_i,ve=m.stencil?Si:Xn);const Ie={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(Ie),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new Zn(f.textureWidth,f.textureHeight,{format:qt,type:mn,depthTexture:new xl(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(o),l=null,a=await r.requestReferenceSpace(c),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(Z){for(let ie=0;ie<Z.removed.length;ie++){const ve=Z.removed[ie],oe=x.indexOf(ve);oe>=0&&(x[oe]=null,v[oe].disconnect(ve))}for(let ie=0;ie<Z.added.length;ie++){const ve=Z.added[ie];let oe=x.indexOf(ve);if(oe===-1){for(let Be=0;Be<v.length;Be++)if(Be>=x.length){x.push(ve),oe=Be;break}else if(x[Be]===null){x[Be]=ve,oe=Be;break}if(oe===-1)break}const Ie=v[oe];Ie&&Ie.connect(ve)}}const G=new P,te=new P;function W(Z,ie,ve){G.setFromMatrixPosition(ie.matrixWorld),te.setFromMatrixPosition(ve.matrixWorld);const oe=G.distanceTo(te),Ie=ie.projectionMatrix.elements,Be=ve.projectionMatrix.elements,Fe=Ie[14]/(Ie[10]-1),$e=Ie[14]/(Ie[10]+1),j=(Ie[9]+1)/Ie[5],se=(Ie[9]-1)/Ie[5],C=(Ie[8]-1)/Ie[0],Re=(Be[8]+1)/Be[0],ne=Fe*C,ye=Fe*Re,ue=oe/(-C+Re),Ue=ue*-C;if(ie.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ue),Z.translateZ(ue),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ie[10]===-1)Z.projectionMatrix.copy(ie.projectionMatrix),Z.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Me=Fe+ue,T=$e+ue,M=ne-Ue,O=ye+(oe-Ue),Y=j*$e/T*Me,Q=se*$e/T*Me;Z.projectionMatrix.makePerspective(M,O,Y,Q,Me,T),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function le(Z,ie){ie===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ie.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ie=Z.near,ve=Z.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(ve=_.depthFar)),b.near=L.near=R.near=ie,b.far=L.far=R.far=ve,(I!==b.near||V!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,V=b.far),R.layers.mask=Z.layers.mask|2,L.layers.mask=Z.layers.mask|4,b.layers.mask=R.layers.mask|L.layers.mask;const oe=Z.parent,Ie=b.cameras;le(b,oe);for(let Be=0;Be<Ie.length;Be++)le(Ie[Be],oe);Ie.length===2?W(b,R,L):b.projectionMatrix.copy(R.projectionMatrix),pe(Z,b,oe)};function pe(Z,ie,ve){ve===null?Z.matrix.copy(ie.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ie.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ie.projectionMatrix),Z.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ji*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return o},this.setFoveation=function(Z){o=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let xe=null;function De(Z,ie){if(u=ie.getViewerPose(l||a),g=ie,u!==null){const ve=u.views;d!==null&&(e.setRenderTargetFramebuffer(w,d.framebuffer),e.setRenderTarget(w));let oe=!1;ve.length!==b.cameras.length&&(b.cameras.length=0,oe=!0);for(let Be=0;Be<ve.length;Be++){const Fe=ve[Be];let $e=null;if(d!==null)$e=d.getViewport(Fe);else{const se=h.getViewSubImage(f,Fe);$e=se.viewport,Be===0&&(e.setRenderTargetTextures(w,se.colorTexture,f.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(w))}let j=E[Be];j===void 0&&(j=new kt,j.layers.enable(Be),j.viewport=new ct,E[Be]=j),j.matrix.fromArray(Fe.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Fe.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set($e.x,$e.y,$e.width,$e.height),Be===0&&(b.matrix.copy(j.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),oe===!0&&b.cameras.push(j)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Be=h.getDepthInformation(ve[0]);Be&&Be.isValid&&Be.texture&&_.init(e,Be,r.renderState)}}for(let ve=0;ve<v.length;ve++){const oe=x[ve],Ie=v[ve];oe!==null&&Ie!==void 0&&Ie.update(oe,ie,l||a)}xe&&xe(Z,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const Ze=new gl;Ze.setAnimationLoop(De),this.setAnimationLoop=function(Z){xe=Z},this.dispose=function(){}}}const On=new tn,$m=new st;function jm(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,dl(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&c(m,p)):p.isPointsMaterial?o(m,p,w,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Pt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Pt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),v=w.envMap,x=w.envMapRotation;v&&(m.envMap.value=v,On.copy(x),On.x*=-1,On.y*=-1,On.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),m.envMapRotation.value.setFromMatrix4($m.makeRotationFromEuler(On)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function c(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,w,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=v*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Qm(t,e,n,i){let r={},s={},a=[];const c=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function o(w,v){const x=v.program;i.uniformBlockBinding(w,x)}function l(w,v){let x=r[w.id];x===void 0&&(g(w),x=u(w),r[w.id]=x,w.addEventListener("dispose",m));const D=v.program;i.updateUBOMapping(w,D);const A=e.render.frame;s[w.id]!==A&&(f(w),s[w.id]=A)}function u(w){const v=h();w.__bindingPointIndex=v;const x=t.createBuffer(),D=w.__size,A=w.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,D,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,x),x}function h(){for(let w=0;w<c;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const v=r[w.id],x=w.uniforms,D=w.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,R=x.length;A<R;A++){const L=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,b=L.length;E<b;E++){const I=L[E];if(d(I,A,E,D)===!0){const V=I.__offset,B=Array.isArray(I.value)?I.value:[I.value];let H=0;for(let J=0;J<B.length;J++){const G=B[J],te=_(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,V+H,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,H),H+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(w,v,x,D){const A=w.value,R=v+"_"+x;if(D[R]===void 0)return typeof A=="number"||typeof A=="boolean"?D[R]=A:D[R]=A.clone(),!0;{const L=D[R];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return D[R]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(w){const v=w.uniforms;let x=0;const D=16;for(let R=0,L=v.length;R<L;R++){const E=Array.isArray(v[R])?v[R]:[v[R]];for(let b=0,I=E.length;b<I;b++){const V=E[b],B=Array.isArray(V.value)?V.value:[V.value];for(let H=0,J=B.length;H<J;H++){const G=B[H],te=_(G),W=x%D,le=W%te.boundary,pe=W+le;x+=le,pe!==0&&D-pe<te.storage&&(x+=D-pe),V.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=te.storage}}}const A=x%D;return A>0&&(x+=D-A),w.__size=x,w.__cache={},this}function _(w){const v={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=48,v.storage=48):w.isMatrix4?(v.boundary=64,v.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),v}function m(w){const v=w.target;v.removeEventListener("dispose",m);const x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const w in r)t.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:o,update:l,dispose:p}}class xM{constructor(e={}){const{canvas:n=Vu(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:c=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const w=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this.toneMapping=Cn,this.toneMappingExposure=1;const x=this;let D=!1,A=0,R=0,L=null,E=-1,b=null;const I=new ct,V=new ct;let B=null;const H=new Qe(0);let J=0,G=n.width,te=n.height,W=1,le=null,pe=null;const xe=new ct(0,0,G,te),De=new ct(0,0,G,te);let Ze=!1;const Z=new Qa;let ie=!1,ve=!1;const oe=new st,Ie=new st,Be=new P,Fe=new ct,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function se(){return L===null?W:1}let C=i;function Re(S,N){return n.getContext(S,N)}try{const S={alpha:!0,depth:r,stencil:s,antialias:c,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ha}`),n.addEventListener("webglcontextlost",$,!1),n.addEventListener("webglcontextrestored",_e,!1),n.addEventListener("webglcontextcreationerror",me,!1),C===null){const N="webgl2";if(C=Re(N,S),C===null)throw Re(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ne,ye,ue,Ue,Me,T,M,O,Y,Q,q,Ee,fe,be,Je,re,Se,Ne,Oe,we,Ke,We,lt,U;function de(){ne=new sp(C),ne.init(),We=new Wm(C,ne),ye=new Qd(C,ne,e,We),ue=new Vm(C,ne),ye.reverseDepthBuffer&&f&&ue.buffers.depth.setReversed(!0),Ue=new cp(C),Me=new Tm,T=new Gm(C,ne,ue,Me,ye,We,Ue),M=new tp(x),O=new rp(x),Y=new ph(C),lt=new $d(C,Y),Q=new ap(C,Y,Ue,lt),q=new up(C,Q,Y,Ue),Oe=new lp(C,ye,T),re=new ep(Me),Ee=new Em(x,M,O,ne,ye,lt,re),fe=new jm(x,Me),be=new Cm,Je=new Um(ne),Ne=new Kd(x,M,O,ue,q,d,o),Se=new zm(x,q,ye),U=new Qm(C,Ue,ye,ue),we=new jd(C,ne,Ue),Ke=new op(C,ne,Ue),Ue.programs=Ee.programs,x.capabilities=ye,x.extensions=ne,x.properties=Me,x.renderLists=be,x.shadowMap=Se,x.state=ue,x.info=Ue}de();const X=new Km(x,C);this.xr=X,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=ne.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ne.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(S){S!==void 0&&(W=S,this.setSize(G,te,!1))},this.getSize=function(S){return S.set(G,te)},this.setSize=function(S,N,z=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=S,te=N,n.width=Math.floor(S*W),n.height=Math.floor(N*W),z===!0&&(n.style.width=S+"px",n.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(G*W,te*W).floor()},this.setDrawingBufferSize=function(S,N,z){G=S,te=N,W=z,n.width=Math.floor(S*z),n.height=Math.floor(N*z),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(xe)},this.setViewport=function(S,N,z,k){S.isVector4?xe.set(S.x,S.y,S.z,S.w):xe.set(S,N,z,k),ue.viewport(I.copy(xe).multiplyScalar(W).round())},this.getScissor=function(S){return S.copy(De)},this.setScissor=function(S,N,z,k){S.isVector4?De.set(S.x,S.y,S.z,S.w):De.set(S,N,z,k),ue.scissor(V.copy(De).multiplyScalar(W).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(S){ue.setScissorTest(Ze=S)},this.setOpaqueSort=function(S){le=S},this.setTransparentSort=function(S){pe=S},this.getClearColor=function(S){return S.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(S=!0,N=!0,z=!0){let k=0;if(S){let F=!1;if(L!==null){const ae=L.texture.format;F=ae===Ja||ae===qa||ae===Ya}if(F){const ae=L.texture.type,ge=ae===mn||ae===Xn||ae===$i||ae===Si||ae===Wa||ae===Xa,Te=Ne.getClearColor(),Ae=Ne.getClearAlpha(),ze=Te.r,He=Te.g,Ce=Te.b;ge?(g[0]=ze,g[1]=He,g[2]=Ce,g[3]=Ae,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=ze,_[1]=He,_[2]=Ce,_[3]=Ae,C.clearBufferiv(C.COLOR,0,_))}else k|=C.COLOR_BUFFER_BIT}N&&(k|=C.DEPTH_BUFFER_BIT),z&&(k|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",$,!1),n.removeEventListener("webglcontextrestored",_e,!1),n.removeEventListener("webglcontextcreationerror",me,!1),be.dispose(),Je.dispose(),Me.dispose(),M.dispose(),O.dispose(),q.dispose(),lt.dispose(),U.dispose(),Ee.dispose(),X.dispose(),X.removeEventListener("sessionstart",co),X.removeEventListener("sessionend",lo),Ln.stop()};function $(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const S=Ue.autoReset,N=Se.enabled,z=Se.autoUpdate,k=Se.needsUpdate,F=Se.type;de(),Ue.autoReset=S,Se.enabled=N,Se.autoUpdate=z,Se.needsUpdate=k,Se.type=F}function me(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ve(S){const N=S.target;N.removeEventListener("dispose",Ve),pt(N)}function pt(S){wt(S),Me.remove(S)}function wt(S){const N=Me.get(S).programs;N!==void 0&&(N.forEach(function(z){Ee.releaseProgram(z)}),S.isShaderMaterial&&Ee.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,z,k,F,ae){N===null&&(N=$e);const ge=F.isMesh&&F.matrixWorld.determinant()<0,Te=Ul(S,N,z,k,F);ue.setMaterial(k,ge);let Ae=z.index,ze=1;if(k.wireframe===!0){if(Ae=Q.getWireframeAttribute(z),Ae===void 0)return;ze=2}const He=z.drawRange,Ce=z.attributes.position;let et=He.start*ze,ut=(He.start+He.count)*ze;ae!==null&&(et=Math.max(et,ae.start*ze),ut=Math.min(ut,(ae.start+ae.count)*ze)),Ae!==null?(et=Math.max(et,0),ut=Math.min(ut,Ae.count)):Ce!=null&&(et=Math.max(et,0),ut=Math.min(ut,Ce.count));const ht=ut-et;if(ht<0||ht===1/0)return;lt.setup(F,k,Te,z,Ae);let Rt,nt=we;if(Ae!==null&&(Rt=Y.get(Ae),nt=Ke,nt.setIndex(Rt)),F.isMesh)k.wireframe===!0?(ue.setLineWidth(k.wireframeLinewidth*se()),nt.setMode(C.LINES)):nt.setMode(C.TRIANGLES);else if(F.isLine){let Pe=k.linewidth;Pe===void 0&&(Pe=1),ue.setLineWidth(Pe*se()),F.isLineSegments?nt.setMode(C.LINES):F.isLineLoop?nt.setMode(C.LINE_LOOP):nt.setMode(C.LINE_STRIP)}else F.isPoints?nt.setMode(C.POINTS):F.isSprite&&nt.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)nt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))nt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Pe=F._multiDrawStarts,sn=F._multiDrawCounts,it=F._multiDrawCount,Wt=Ae?Y.get(Ae).bytesPerElement:1,$n=Me.get(k).currentProgram.getUniforms();for(let It=0;It<it;It++)$n.setValue(C,"_gl_DrawID",It),nt.render(Pe[It]/Wt,sn[It])}else if(F.isInstancedMesh)nt.renderInstances(et,ht,F.count);else if(z.isInstancedBufferGeometry){const Pe=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,sn=Math.min(z.instanceCount,Pe);nt.renderInstances(et,ht,sn)}else nt.render(et,ht)};function rt(S,N,z){S.transparent===!0&&S.side===fn&&S.forceSinglePass===!1?(S.side=Pt,S.needsUpdate=!0,cr(S,N,z),S.side=Rn,S.needsUpdate=!0,cr(S,N,z),S.side=fn):cr(S,N,z)}this.compile=function(S,N,z=null){z===null&&(z=S),p=Je.get(z),p.init(N),v.push(p),z.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),S!==z&&S.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const k=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ae=F.material;if(ae)if(Array.isArray(ae))for(let ge=0;ge<ae.length;ge++){const Te=ae[ge];rt(Te,z,F),k.add(Te)}else rt(ae,z,F),k.add(ae)}),v.pop(),p=null,k},this.compileAsync=function(S,N,z=null){const k=this.compile(S,N,z);return new Promise(F=>{function ae(){if(k.forEach(function(ge){Me.get(ge).currentProgram.isReady()&&k.delete(ge)}),k.size===0){F(S);return}setTimeout(ae,10)}ne.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Gt=null;function rn(S){Gt&&Gt(S)}function co(){Ln.stop()}function lo(){Ln.start()}const Ln=new gl;Ln.setAnimationLoop(rn),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(S){Gt=S,X.setAnimationLoop(S),S===null?Ln.stop():Ln.start()},X.addEventListener("sessionstart",co),X.addEventListener("sessionend",lo),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(N),N=X.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,N,L),p=Je.get(S,v.length),p.init(N),v.push(p),Ie.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Z.setFromProjectionMatrix(Ie),ve=this.localClippingEnabled,ie=re.init(this.clippingPlanes,ve),m=be.get(S,w.length),m.init(),w.push(m),X.enabled===!0&&X.isPresenting===!0){const ae=x.xr.getDepthSensingMesh();ae!==null&&us(ae,N,-1/0,x.sortObjects)}us(S,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(le,pe),j=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,j&&Ne.addToRenderList(m,S),this.info.render.frame++,ie===!0&&re.beginShadows();const z=p.state.shadowsArray;Se.render(z,S,N),ie===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){const ae=N.cameras;if(F.length>0)for(let ge=0,Te=ae.length;ge<Te;ge++){const Ae=ae[ge];ho(k,F,S,Ae)}j&&Ne.render(S);for(let ge=0,Te=ae.length;ge<Te;ge++){const Ae=ae[ge];uo(m,S,Ae,Ae.viewport)}}else F.length>0&&ho(k,F,S,N),j&&Ne.render(S),uo(m,S,N);L!==null&&(T.updateMultisampleRenderTarget(L),T.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(x,S,N),lt.resetDefaultState(),E=-1,b=null,v.pop(),v.length>0?(p=v[v.length-1],ie===!0&&re.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function us(S,N,z,k){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Z.intersectsSprite(S)){k&&Fe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ie);const ge=q.update(S),Te=S.material;Te.visible&&m.push(S,ge,Te,z,Fe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Z.intersectsObject(S))){const ge=q.update(S),Te=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Fe.copy(S.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Fe.copy(ge.boundingSphere.center)),Fe.applyMatrix4(S.matrixWorld).applyMatrix4(Ie)),Array.isArray(Te)){const Ae=ge.groups;for(let ze=0,He=Ae.length;ze<He;ze++){const Ce=Ae[ze],et=Te[Ce.materialIndex];et&&et.visible&&m.push(S,ge,et,z,Fe.z,Ce)}}else Te.visible&&m.push(S,ge,Te,z,Fe.z,null)}}const ae=S.children;for(let ge=0,Te=ae.length;ge<Te;ge++)us(ae[ge],N,z,k)}function uo(S,N,z,k){const F=S.opaque,ae=S.transmissive,ge=S.transparent;p.setupLightsView(z),ie===!0&&re.setGlobalState(x.clippingPlanes,z),k&&ue.viewport(I.copy(k)),F.length>0&&or(F,N,z),ae.length>0&&or(ae,N,z),ge.length>0&&or(ge,N,z),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function ho(S,N,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Zn(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?ir:mn,minFilter:Wn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const ae=p.state.transmissionRenderTarget[k.id],ge=k.viewport||I;ae.setSize(ge.z,ge.w);const Te=x.getRenderTarget();x.setRenderTarget(ae),x.getClearColor(H),J=x.getClearAlpha(),J<1&&x.setClearColor(16777215,.5),x.clear(),j&&Ne.render(z);const Ae=x.toneMapping;x.toneMapping=Cn;const ze=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),ie===!0&&re.setGlobalState(x.clippingPlanes,k),or(S,z,k),T.updateMultisampleRenderTarget(ae),T.updateRenderTargetMipmap(ae),ne.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ce=0,et=N.length;Ce<et;Ce++){const ut=N[Ce],ht=ut.object,Rt=ut.geometry,nt=ut.material,Pe=ut.group;if(nt.side===fn&&ht.layers.test(k.layers)){const sn=nt.side;nt.side=Pt,nt.needsUpdate=!0,fo(ht,z,k,Rt,nt,Pe),nt.side=sn,nt.needsUpdate=!0,He=!0}}He===!0&&(T.updateMultisampleRenderTarget(ae),T.updateRenderTargetMipmap(ae))}x.setRenderTarget(Te),x.setClearColor(H,J),ze!==void 0&&(k.viewport=ze),x.toneMapping=Ae}function or(S,N,z){const k=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ae=S.length;F<ae;F++){const ge=S[F],Te=ge.object,Ae=ge.geometry,ze=k===null?ge.material:k,He=ge.group;Te.layers.test(z.layers)&&fo(Te,N,z,Ae,ze,He)}}function fo(S,N,z,k,F,ae){S.onBeforeRender(x,N,z,k,F,ae),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(x,N,z,k,S,ae),F.transparent===!0&&F.side===fn&&F.forceSinglePass===!1?(F.side=Pt,F.needsUpdate=!0,x.renderBufferDirect(z,N,k,F,S,ae),F.side=Rn,F.needsUpdate=!0,x.renderBufferDirect(z,N,k,F,S,ae),F.side=fn):x.renderBufferDirect(z,N,k,F,S,ae),S.onAfterRender(x,N,z,k,F,ae)}function cr(S,N,z){N.isScene!==!0&&(N=$e);const k=Me.get(S),F=p.state.lights,ae=p.state.shadowsArray,ge=F.state.version,Te=Ee.getParameters(S,F.state,ae,N,z),Ae=Ee.getProgramCacheKey(Te);let ze=k.programs;k.environment=S.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(S.isMeshStandardMaterial?O:M).get(S.envMap||k.environment),k.envMapRotation=k.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,ze===void 0&&(S.addEventListener("dispose",Ve),ze=new Map,k.programs=ze);let He=ze.get(Ae);if(He!==void 0){if(k.currentProgram===He&&k.lightsStateVersion===ge)return mo(S,Te),He}else Te.uniforms=Ee.getUniforms(S),S.onBeforeCompile(Te,x),He=Ee.acquireProgram(Te,Ae),ze.set(Ae,He),k.uniforms=Te.uniforms;const Ce=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ce.clippingPlanes=re.uniform),mo(S,Te),k.needsLights=Fl(S),k.lightsStateVersion=ge,k.needsLights&&(Ce.ambientLightColor.value=F.state.ambient,Ce.lightProbe.value=F.state.probe,Ce.directionalLights.value=F.state.directional,Ce.directionalLightShadows.value=F.state.directionalShadow,Ce.spotLights.value=F.state.spot,Ce.spotLightShadows.value=F.state.spotShadow,Ce.rectAreaLights.value=F.state.rectArea,Ce.ltc_1.value=F.state.rectAreaLTC1,Ce.ltc_2.value=F.state.rectAreaLTC2,Ce.pointLights.value=F.state.point,Ce.pointLightShadows.value=F.state.pointShadow,Ce.hemisphereLights.value=F.state.hemi,Ce.directionalShadowMap.value=F.state.directionalShadowMap,Ce.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ce.spotShadowMap.value=F.state.spotShadowMap,Ce.spotLightMatrix.value=F.state.spotLightMatrix,Ce.spotLightMap.value=F.state.spotLightMap,Ce.pointShadowMap.value=F.state.pointShadowMap,Ce.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=He,k.uniformsList=null,He}function po(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=Yr.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function mo(S,N){const z=Me.get(S);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function Ul(S,N,z,k,F){N.isScene!==!0&&(N=$e),T.resetTextureUnits();const ae=N.fog,ge=k.isMeshStandardMaterial?N.environment:null,Te=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ai,Ae=(k.isMeshStandardMaterial?O:M).get(k.envMap||ge),ze=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,He=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ce=!!z.morphAttributes.position,et=!!z.morphAttributes.normal,ut=!!z.morphAttributes.color;let ht=Cn;k.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ht=x.toneMapping);const Rt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,nt=Rt!==void 0?Rt.length:0,Pe=Me.get(k),sn=p.state.lights;if(ie===!0&&(ve===!0||S!==b)){const Ot=S===b&&k.id===E;re.setState(k,S,Ot)}let it=!1;k.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==sn.state.version||Pe.outputColorSpace!==Te||F.isBatchedMesh&&Pe.batching===!1||!F.isBatchedMesh&&Pe.batching===!0||F.isBatchedMesh&&Pe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Pe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Pe.instancing===!1||!F.isInstancedMesh&&Pe.instancing===!0||F.isSkinnedMesh&&Pe.skinning===!1||!F.isSkinnedMesh&&Pe.skinning===!0||F.isInstancedMesh&&Pe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Pe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Pe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Pe.instancingMorph===!1&&F.morphTexture!==null||Pe.envMap!==Ae||k.fog===!0&&Pe.fog!==ae||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==re.numPlanes||Pe.numIntersection!==re.numIntersection)||Pe.vertexAlphas!==ze||Pe.vertexTangents!==He||Pe.morphTargets!==Ce||Pe.morphNormals!==et||Pe.morphColors!==ut||Pe.toneMapping!==ht||Pe.morphTargetsCount!==nt)&&(it=!0):(it=!0,Pe.__version=k.version);let Wt=Pe.currentProgram;it===!0&&(Wt=cr(k,N,F));let $n=!1,It=!1,Ni=!1;const ft=Wt.getUniforms(),Kt=Pe.uniforms;if(ue.useProgram(Wt.program)&&($n=!0,It=!0,Ni=!0),k.id!==E&&(E=k.id,It=!0),$n||b!==S){ue.buffers.depth.getReversed()?(oe.copy(S.projectionMatrix),Gu(oe),Wu(oe),ft.setValue(C,"projectionMatrix",oe)):ft.setValue(C,"projectionMatrix",S.projectionMatrix),ft.setValue(C,"viewMatrix",S.matrixWorldInverse);const _n=ft.map.cameraPosition;_n!==void 0&&_n.setValue(C,Be.setFromMatrixPosition(S.matrixWorld)),ye.logarithmicDepthBuffer&&ft.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ft.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,It=!0,Ni=!0)}if(F.isSkinnedMesh){ft.setOptional(C,F,"bindMatrix"),ft.setOptional(C,F,"bindMatrixInverse");const Ot=F.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),ft.setValue(C,"boneTexture",Ot.boneTexture,T))}F.isBatchedMesh&&(ft.setOptional(C,F,"batchingTexture"),ft.setValue(C,"batchingTexture",F._matricesTexture,T),ft.setOptional(C,F,"batchingIdTexture"),ft.setValue(C,"batchingIdTexture",F._indirectTexture,T),ft.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&ft.setValue(C,"batchingColorTexture",F._colorsTexture,T));const Fi=z.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&Oe.update(F,z,Wt),(It||Pe.receiveShadow!==F.receiveShadow)&&(Pe.receiveShadow=F.receiveShadow,ft.setValue(C,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Kt.envMap.value=Ae,Kt.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(Kt.envMapIntensity.value=N.environmentIntensity),It&&(ft.setValue(C,"toneMappingExposure",x.toneMappingExposure),Pe.needsLights&&Nl(Kt,Ni),ae&&k.fog===!0&&fe.refreshFogUniforms(Kt,ae),fe.refreshMaterialUniforms(Kt,k,W,te,p.state.transmissionRenderTarget[S.id]),Yr.upload(C,po(Pe),Kt,T)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Yr.upload(C,po(Pe),Kt,T),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ft.setValue(C,"center",F.center),ft.setValue(C,"modelViewMatrix",F.modelViewMatrix),ft.setValue(C,"normalMatrix",F.normalMatrix),ft.setValue(C,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ot=k.uniformsGroups;for(let _n=0,xn=Ot.length;_n<xn;_n++){const go=Ot[_n];U.update(go,Wt),U.bind(go,Wt)}}return Wt}function Nl(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Fl(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,N,z){Me.get(S.texture).__webglTexture=N,Me.get(S.depthTexture).__webglTexture=z;const k=Me.get(S);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,N){const z=Me.get(S);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,z=0){L=S,A=N,R=z;let k=!0,F=null,ae=!1,ge=!1;if(S){const Ae=Me.get(S);if(Ae.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(C.FRAMEBUFFER,null),k=!1;else if(Ae.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(Ae.__hasExternalTextures)T.rebindTextures(S,Me.get(S.texture).__webglTexture,Me.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ce=S.depthTexture;if(Ae.__boundDepthTexture!==Ce){if(Ce!==null&&Me.has(Ce)&&(S.width!==Ce.image.width||S.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}const ze=S.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(ge=!0);const He=Me.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(He[N])?F=He[N][z]:F=He[N],ae=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?F=Me.get(S).__webglMultisampledFramebuffer:Array.isArray(He)?F=He[z]:F=He,I.copy(S.viewport),V.copy(S.scissor),B=S.scissorTest}else I.copy(xe).multiplyScalar(W).floor(),V.copy(De).multiplyScalar(W).floor(),B=Ze;if(ue.bindFramebuffer(C.FRAMEBUFFER,F)&&k&&ue.drawBuffers(S,F),ue.viewport(I),ue.scissor(V),ue.setScissorTest(B),ae){const Ae=Me.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ae.__webglTexture,z)}else if(ge){const Ae=Me.get(S.texture),ze=N||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ae.__webglTexture,z||0,ze)}E=-1},this.readRenderTargetPixels=function(S,N,z,k,F,ae,ge){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(Te=Te[ge]),Te){ue.bindFramebuffer(C.FRAMEBUFFER,Te);try{const Ae=S.texture,ze=Ae.format,He=Ae.type;if(!ye.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-k&&z>=0&&z<=S.height-F&&C.readPixels(N,z,k,F,We.convert(ze),We.convert(He),ae)}finally{const Ae=L!==null?Me.get(L).__webglFramebuffer:null;ue.bindFramebuffer(C.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(S,N,z,k,F,ae,ge){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(Te=Te[ge]),Te){const Ae=S.texture,ze=Ae.format,He=Ae.type;if(!ye.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=S.width-k&&z>=0&&z<=S.height-F){ue.bindFramebuffer(C.FRAMEBUFFER,Te);const Ce=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ce),C.bufferData(C.PIXEL_PACK_BUFFER,ae.byteLength,C.STREAM_READ),C.readPixels(N,z,k,F,We.convert(ze),We.convert(He),0);const et=L!==null?Me.get(L).__webglFramebuffer:null;ue.bindFramebuffer(C.FRAMEBUFFER,et);const ut=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Hu(C,ut,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ce),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ae),C.deleteBuffer(Ce),C.deleteSync(ut),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,N=null,z=0){S.isTexture!==!0&&(Xi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,S=arguments[1]);const k=Math.pow(2,-z),F=Math.floor(S.image.width*k),ae=Math.floor(S.image.height*k),ge=N!==null?N.x:0,Te=N!==null?N.y:0;T.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,z,0,0,ge,Te,F,ae),ue.unbindTexture()},this.copyTextureToTexture=function(S,N,z=null,k=null,F=0){S.isTexture!==!0&&(Xi("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,S=arguments[1],N=arguments[2],F=arguments[3]||0,z=null);let ae,ge,Te,Ae,ze,He,Ce,et,ut;const ht=S.isCompressedTexture?S.mipmaps[F]:S.image;z!==null?(ae=z.max.x-z.min.x,ge=z.max.y-z.min.y,Te=z.isBox3?z.max.z-z.min.z:1,Ae=z.min.x,ze=z.min.y,He=z.isBox3?z.min.z:0):(ae=ht.width,ge=ht.height,Te=ht.depth||1,Ae=0,ze=0,He=0),k!==null?(Ce=k.x,et=k.y,ut=k.z):(Ce=0,et=0,ut=0);const Rt=We.convert(N.format),nt=We.convert(N.type);let Pe;N.isData3DTexture?(T.setTexture3D(N,0),Pe=C.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),Pe=C.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),Pe=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);const sn=C.getParameter(C.UNPACK_ROW_LENGTH),it=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Wt=C.getParameter(C.UNPACK_SKIP_PIXELS),$n=C.getParameter(C.UNPACK_SKIP_ROWS),It=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ht.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ht.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ae),C.pixelStorei(C.UNPACK_SKIP_ROWS,ze),C.pixelStorei(C.UNPACK_SKIP_IMAGES,He);const Ni=S.isDataArrayTexture||S.isData3DTexture,ft=N.isDataArrayTexture||N.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const Kt=Me.get(S),Fi=Me.get(N),Ot=Me.get(Kt.__renderTarget),_n=Me.get(Fi.__renderTarget);ue.bindFramebuffer(C.READ_FRAMEBUFFER,Ot.__webglFramebuffer),ue.bindFramebuffer(C.DRAW_FRAMEBUFFER,_n.__webglFramebuffer);for(let xn=0;xn<Te;xn++)Ni&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Me.get(S).__webglTexture,F,He+xn),S.isDepthTexture?(ft&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Me.get(N).__webglTexture,F,ut+xn),C.blitFramebuffer(Ae,ze,ae,ge,Ce,et,ae,ge,C.DEPTH_BUFFER_BIT,C.NEAREST)):ft?C.copyTexSubImage3D(Pe,F,Ce,et,ut+xn,Ae,ze,ae,ge):C.copyTexSubImage2D(Pe,F,Ce,et,ut+xn,Ae,ze,ae,ge);ue.bindFramebuffer(C.READ_FRAMEBUFFER,null),ue.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else ft?S.isDataTexture||S.isData3DTexture?C.texSubImage3D(Pe,F,Ce,et,ut,ae,ge,Te,Rt,nt,ht.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(Pe,F,Ce,et,ut,ae,ge,Te,Rt,ht.data):C.texSubImage3D(Pe,F,Ce,et,ut,ae,ge,Te,Rt,nt,ht):S.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,F,Ce,et,ae,ge,Rt,nt,ht.data):S.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,F,Ce,et,ht.width,ht.height,Rt,ht.data):C.texSubImage2D(C.TEXTURE_2D,F,Ce,et,ae,ge,Rt,nt,ht);C.pixelStorei(C.UNPACK_ROW_LENGTH,sn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,it),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Wt),C.pixelStorei(C.UNPACK_SKIP_ROWS,$n),C.pixelStorei(C.UNPACK_SKIP_IMAGES,It),F===0&&N.generateMipmaps&&C.generateMipmap(Pe),ue.unbindTexture()},this.copyTextureToTexture3D=function(S,N,z=null,k=null,F=0){return S.isTexture!==!0&&(Xi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,S=arguments[2],N=arguments[3],F=arguments[4]||0),Xi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,N,z,k,F)},this.initRenderTarget=function(S){Me.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),ue.unbindTexture()},this.resetState=function(){A=0,R=0,L=null,ue.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),n.unpackColorSpace=je._getUnpackColorSpace()}}class vM extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class e0 extends yt{constructor(e=null,n=1,i=1,r,s,a,c,o,l=Nt,u=Nt,h,f){super(null,a,c,o,l,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vc extends qe{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fi=new st,Mc=new st,Lr=[],bc=new Jn,t0=new st,Vi=new Jt,Hi=new Ri;class MM extends Jt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new vc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,t0)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,fi),bc.copy(e.boundingBox).applyMatrix4(fi),this.boundingBox.union(bc)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,fi),Hi.copy(e.boundingSphere).applyMatrix4(fi),this.boundingSphere.union(Hi)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let c=0;c<i.length;c++)i[c]=r[a+c]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Vi.geometry=this.geometry,Vi.material=this.material,Vi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hi.copy(this.boundingSphere),Hi.applyMatrix4(i),e.ray.intersectsSphere(Hi)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,fi),Mc.multiplyMatrices(i,fi),Vi.matrixWorld=Mc,Vi.raycast(e,Lr);for(let a=0,c=Lr.length;a<c;a++){const o=Lr[a];o.instanceId=s,o.object=this,n.push(o)}Lr.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new vc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new e0(new Float32Array(r*this.count),r,this.count,Za,en));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const c=this.geometry.morphTargetsRelative?1:1-a,o=r*e;s[o]=c,s.set(i,o+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class n0 extends Pi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Kr=new P,$r=new P,yc=new st,Gi=new $a,Ir=new Ri,ks=new P,Sc=new P;class i0 extends St{constructor(e=new ke,n=new n0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Kr.fromBufferAttribute(n,r-1),$r.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Kr.distanceTo($r);e.setAttribute("lineDistance",new tt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ir.copy(i.boundingSphere),Ir.applyMatrix4(r),Ir.radius+=s,e.ray.intersectsSphere(Ir)===!1)return;yc.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(yc);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=c*c,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=l){const p=u.getX(_),w=u.getX(_+1),v=Dr(this,e,Gi,o,p,w);v&&n.push(v)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=Dr(this,e,Gi,o,_,m);p&&n.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=l){const p=Dr(this,e,Gi,o,_,_+1);p&&n.push(p)}if(this.isLineLoop){const _=Dr(this,e,Gi,o,g-1,d);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function Dr(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(Kr.fromBufferAttribute(a,r),$r.fromBufferAttribute(a,s),n.distanceSqToSegment(Kr,$r,ks,Sc)>i)return;ks.applyMatrix4(t.matrixWorld);const o=e.ray.origin.distanceTo(ks);if(!(o<e.near||o>e.far))return{distance:o,point:Sc.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const wc=new P,Ec=new P;class bM extends i0{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)wc.fromBufferAttribute(n,r),Ec.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+wc.distanceTo(Ec);e.setAttribute("lineDistance",new tt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yM extends yt{constructor(e,n,i,r,s,a,c,o,l,u,h,f){super(null,a,c,o,l,u,r,s,h,f),this.isCompressedTexture=!0,this.image={width:n,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class SM extends yt{constructor(e,n,i,r,s,a,c,o,l){super(e,n,i,r,s,a,c,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ft{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let a;n?a=n:a=e*i[s-1];let c=0,o=s-1,l;for(;c<=o;)if(r=Math.floor(c+(o-c)/2),l=i[r]-a,l<0)c=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===a)return r/(s-1);const u=i[r],f=i[r+1]-u,d=(a-u)/f;return(r+d)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),c=this.getPoint(s),o=n||(a.isVector2?new ce:new P);return o.copy(c).sub(a).normalize(),o}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new P,r=[],s=[],a=[],c=new P,o=new st;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new P)}s[0]=new P,a[0]=new P;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),f<=l&&i.set(0,0,1),c.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],c),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),c.crossVectors(r[d-1],r[d]),c.length()>Number.EPSILON){c.normalize();const g=Math.acos(_t(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(o.makeRotationAxis(c,g))}a[d].crossVectors(r[d],s[d])}if(n===!0){let d=Math.acos(_t(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(c.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(o.makeRotationAxis(r[g],d*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class to extends Ft{constructor(e=0,n=0,i=1,r=1,s=0,a=Math.PI*2,c=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=c,this.aRotation=o}getPoint(e,n=new ce){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const c=this.aStartAngle+e*s;let o=this.aX+this.xRadius*Math.cos(c),l=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=o-this.aX,d=l-this.aY;o=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class r0 extends to{constructor(e,n,i,r,s,a){super(e,n,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function no(){let t=0,e=0,n=0,i=0;function r(s,a,c,o){t=s,e=c,n=-3*s+3*a-2*c-o,i=2*s-2*a+c+o}return{initCatmullRom:function(s,a,c,o,l){r(a,c,l*(c-s),l*(o-a))},initNonuniformCatmullRom:function(s,a,c,o,l,u,h){let f=(a-s)/l-(c-s)/(l+u)+(c-a)/u,d=(c-a)/u-(o-a)/(u+h)+(o-c)/h;f*=u,d*=u,r(a,c,f,d)},calc:function(s){const a=s*s,c=a*s;return t+e*s+n*a+i*c}}}const Ur=new P,Vs=new no,Hs=new no,Gs=new no;class s0 extends Ft{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new P){const i=n,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let c=Math.floor(a),o=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:o===0&&c===s-1&&(c=s-2,o=1);let l,u;this.closed||c>0?l=r[(c-1)%s]:(Ur.subVectors(r[0],r[1]).add(r[0]),l=Ur);const h=r[c%s],f=r[(c+1)%s];if(this.closed||c+2<s?u=r[(c+2)%s]:(Ur.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ur),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Vs.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,_,m),Hs.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,_,m),Gs.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Vs.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Hs.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Gs.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return i.set(Vs.calc(o),Hs.calc(o),Gs.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Tc(t,e,n,i,r){const s=(i-e)*.5,a=(r-n)*.5,c=t*t,o=t*c;return(2*n-2*i+s+a)*o+(-3*n+3*i-2*s-a)*c+s*t+n}function a0(t,e){const n=1-t;return n*n*e}function o0(t,e){return 2*(1-t)*t*e}function c0(t,e){return t*t*e}function qi(t,e,n,i){return a0(t,e)+o0(t,n)+c0(t,i)}function l0(t,e){const n=1-t;return n*n*n*e}function u0(t,e){const n=1-t;return 3*n*n*t*e}function h0(t,e){return 3*(1-t)*t*t*e}function f0(t,e){return t*t*t*e}function Ji(t,e,n,i,r){return l0(t,e)+u0(t,n)+h0(t,i)+f0(t,r)}class Sl extends Ft{constructor(e=new ce,n=new ce,i=new ce,r=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new ce){const i=n,r=this.v0,s=this.v1,a=this.v2,c=this.v3;return i.set(Ji(e,r.x,s.x,a.x,c.x),Ji(e,r.y,s.y,a.y,c.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class d0 extends Ft{constructor(e=new P,n=new P,i=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new P){const i=n,r=this.v0,s=this.v1,a=this.v2,c=this.v3;return i.set(Ji(e,r.x,s.x,a.x,c.x),Ji(e,r.y,s.y,a.y,c.y),Ji(e,r.z,s.z,a.z,c.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wl extends Ft{constructor(e=new ce,n=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ce){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ce){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class p0 extends Ft{constructor(e=new P,n=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new P){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new P){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class El extends Ft{constructor(e=new ce,n=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ce){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(qi(e,r.x,s.x,a.x),qi(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tl extends Ft{constructor(e=new P,n=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new P){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(qi(e,r.x,s.x,a.x),qi(e,r.y,s.y,a.y),qi(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Al extends Ft{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ce){const i=n,r=this.points,s=(r.length-1)*e,a=Math.floor(s),c=s-a,o=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return i.set(Tc(c,o.x,l.x,u.x,h.x),Tc(c,o.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new ce().fromArray(r))}return this}}var jr=Object.freeze({__proto__:null,ArcCurve:r0,CatmullRomCurve3:s0,CubicBezierCurve:Sl,CubicBezierCurve3:d0,EllipseCurve:to,LineCurve:wl,LineCurve3:p0,QuadraticBezierCurve:El,QuadraticBezierCurve3:Tl,SplineCurve:Al});class m0 extends Ft{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jr[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,c=this.curves[s],o=c.getLength(),l=o===0?0:1-a/o;return c.getPointAt(l,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],c=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,o=a.getPoints(c);for(let l=0;l<o.length;l++){const u=o[l];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new jr[r.type]().fromJSON(r))}return this}}class Ti extends m0{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new wl(this.currentPoint.clone(),new ce(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new El(this.currentPoint.clone(),new ce(e,n),new ce(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,a){const c=new Sl(this.currentPoint.clone(),new ce(e,n),new ce(i,r),new ce(s,a));return this.curves.push(c),this.currentPoint.set(s,a),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new Al(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,a){const c=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+c,n+o,i,r,s,a),this}absarc(e,n,i,r,s,a){return this.absellipse(e,n,i,i,r,s,a),this}ellipse(e,n,i,r,s,a,c,o){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,n+u,i,r,s,a,c,o),this}absellipse(e,n,i,r,s,a,c,o){const l=new to(e,n,i,r,s,a,c,o);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class io extends ke{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=_t(r,0,Math.PI*2);const s=[],a=[],c=[],o=[],l=[],u=1/n,h=new P,f=new ce,d=new P,g=new P,_=new P;let m=0,p=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:m=e[w+1].x-e[w].x,p=e[w+1].y-e[w].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),o.push(d.x,d.y,d.z);break;case e.length-1:o.push(_.x,_.y,_.z);break;default:m=e[w+1].x-e[w].x,p=e[w+1].y-e[w].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),o.push(d.x,d.y,d.z),_.copy(g)}for(let w=0;w<=n;w++){const v=i+w*u*r,x=Math.sin(v),D=Math.cos(v);for(let A=0;A<=e.length-1;A++){h.x=e[A].x*x,h.y=e[A].y,h.z=e[A].x*D,a.push(h.x,h.y,h.z),f.x=w/n,f.y=A/(e.length-1),c.push(f.x,f.y);const R=o[3*A+0]*x,L=o[3*A+1],E=o[3*A+0]*D;l.push(R,L,E)}}for(let w=0;w<n;w++)for(let v=0;v<e.length-1;v++){const x=v+w*e.length,D=x,A=x+e.length,R=x+e.length+1,L=x+1;s.push(D,A,L),s.push(R,L,A)}this.setIndex(s),this.setAttribute("position",new tt(a,3)),this.setAttribute("uv",new tt(c,2)),this.setAttribute("normal",new tt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.points,e.segments,e.phiStart,e.phiLength)}}class Qr extends io{constructor(e=1,n=1,i=4,r=8){const s=new Ti;s.absarc(0,-n/2,e,Math.PI*1.5,0),s.absarc(0,n/2,e,0,Math.PI*.5),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:n,capSegments:i,radialSegments:r}}static fromJSON(e){return new Qr(e.radius,e.length,e.capSegments,e.radialSegments)}}class ee extends ke{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,c=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:c,thetaLength:o};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let g=0;const _=[],m=i/2;let p=0;w(),a===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(f,3)),this.setAttribute("uv",new tt(d,2));function w(){const x=new P,D=new P;let A=0;const R=(n-e)/i;for(let L=0;L<=s;L++){const E=[],b=L/s,I=b*(n-e)+e;for(let V=0;V<=r;V++){const B=V/r,H=B*o+c,J=Math.sin(H),G=Math.cos(H);D.x=I*J,D.y=-b*i+m,D.z=I*G,h.push(D.x,D.y,D.z),x.set(J,R,G).normalize(),f.push(x.x,x.y,x.z),d.push(B,1-b),E.push(g++)}_.push(E)}for(let L=0;L<r;L++)for(let E=0;E<s;E++){const b=_[E][L],I=_[E+1][L],V=_[E+1][L+1],B=_[E][L+1];(e>0||E!==0)&&(u.push(b,I,B),A+=3),(n>0||E!==s-1)&&(u.push(I,V,B),A+=3)}l.addGroup(p,A,0),p+=A}function v(x){const D=g,A=new ce,R=new P;let L=0;const E=x===!0?e:n,b=x===!0?1:-1;for(let V=1;V<=r;V++)h.push(0,m*b,0),f.push(0,b,0),d.push(.5,.5),g++;const I=g;for(let V=0;V<=r;V++){const H=V/r*o+c,J=Math.cos(H),G=Math.sin(H);R.x=E*G,R.y=m*b,R.z=E*J,h.push(R.x,R.y,R.z),f.push(0,b,0),A.x=J*.5+.5,A.y=G*.5*b+.5,d.push(A.x,A.y),g++}for(let V=0;V<r;V++){const B=D+V,H=I+V;x===!0?u.push(H,H+1,B):u.push(H+1,H,B),L+=3}l.addGroup(p,L,x===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ee(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mt extends ee{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,c=Math.PI*2){super(0,e,n,i,r,s,a,c),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:c}}static fromJSON(e){return new mt(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sr extends ke{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];c(r),l(i),u(),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(s.slice(),3)),this.setAttribute("uv",new tt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function c(w){const v=new P,x=new P,D=new P;for(let A=0;A<n.length;A+=3)d(n[A+0],v),d(n[A+1],x),d(n[A+2],D),o(v,x,D,w)}function o(w,v,x,D){const A=D+1,R=[];for(let L=0;L<=A;L++){R[L]=[];const E=w.clone().lerp(x,L/A),b=v.clone().lerp(x,L/A),I=A-L;for(let V=0;V<=I;V++)V===0&&L===A?R[L][V]=E:R[L][V]=E.clone().lerp(b,V/I)}for(let L=0;L<A;L++)for(let E=0;E<2*(A-L)-1;E++){const b=Math.floor(E/2);E%2===0?(f(R[L][b+1]),f(R[L+1][b]),f(R[L][b])):(f(R[L][b+1]),f(R[L+1][b+1]),f(R[L+1][b]))}}function l(w){const v=new P;for(let x=0;x<s.length;x+=3)v.x=s[x+0],v.y=s[x+1],v.z=s[x+2],v.normalize().multiplyScalar(w),s[x+0]=v.x,s[x+1]=v.y,s[x+2]=v.z}function u(){const w=new P;for(let v=0;v<s.length;v+=3){w.x=s[v+0],w.y=s[v+1],w.z=s[v+2];const x=m(w)/2/Math.PI+.5,D=p(w)/Math.PI+.5;a.push(x,1-D)}g(),h()}function h(){for(let w=0;w<a.length;w+=6){const v=a[w+0],x=a[w+2],D=a[w+4],A=Math.max(v,x,D),R=Math.min(v,x,D);A>.9&&R<.1&&(v<.2&&(a[w+0]+=1),x<.2&&(a[w+2]+=1),D<.2&&(a[w+4]+=1))}}function f(w){s.push(w.x,w.y,w.z)}function d(w,v){const x=w*3;v.x=e[x+0],v.y=e[x+1],v.z=e[x+2]}function g(){const w=new P,v=new P,x=new P,D=new P,A=new ce,R=new ce,L=new ce;for(let E=0,b=0;E<s.length;E+=9,b+=6){w.set(s[E+0],s[E+1],s[E+2]),v.set(s[E+3],s[E+4],s[E+5]),x.set(s[E+6],s[E+7],s[E+8]),A.set(a[b+0],a[b+1]),R.set(a[b+2],a[b+3]),L.set(a[b+4],a[b+5]),D.copy(w).add(v).add(x).divideScalar(3);const I=m(D);_(A,b+0,w,I),_(R,b+2,v,I),_(L,b+4,x,I)}}function _(w,v,x,D){D<0&&w.x===1&&(a[v]=w.x-1),x.x===0&&x.z===0&&(a[v]=D/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.vertices,e.indices,e.radius,e.details)}}class Ht extends sr{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Ht(e.radius,e.detail)}}const Nr=new P,Fr=new P,Ws=new P,Or=new Vt;class wM extends ke{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(xi*n),a=e.getIndex(),c=e.getAttribute("position"),o=a?a.count:c.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<o;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:m,c:p}=Or;if(_.fromBufferAttribute(c,l[0]),m.fromBufferAttribute(c,l[1]),p.fromBufferAttribute(c,l[2]),Or.getNormal(Ws),h[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let w=0;w<3;w++){const v=(w+1)%3,x=h[w],D=h[v],A=Or[u[w]],R=Or[u[v]],L=`${x}_${D}`,E=`${D}_${x}`;E in f&&f[E]?(Ws.dot(f[E].normal)<=s&&(d.push(A.x,A.y,A.z),d.push(R.x,R.y,R.z)),f[E]=null):L in f||(f[L]={index0:l[w],index1:l[v],normal:Ws.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:m}=f[g];Nr.fromBufferAttribute(c,_),Fr.fromBufferAttribute(c,m),d.push(Nr.x,Nr.y,Nr.z),d.push(Fr.x,Fr.y,Fr.z)}this.setAttribute("position",new tt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ii extends Ti{constructor(e){super(e),this.uuid=Pn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new Ti().fromJSON(r))}return this}}const g0={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=Cl(t,0,r,n,!0);const a=[];if(!s||s.next===s.prev)return a;let c,o,l,u,h,f,d;if(i&&(s=b0(t,e,s,n)),t.length>80*n){c=l=t[0],o=u=t[1];for(let g=n;g<r;g+=n)h=t[g],f=t[g+1],h<c&&(c=h),f<o&&(o=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-c,u-o),d=d!==0?32767/d:0}return er(s,a,n,c,o,d,0),a}};function Cl(t,e,n,i,r){let s,a;if(r===I0(t,e,n,i)>0)for(s=e;s<n;s+=i)a=Ac(s,t[s],t[s+1],a);else for(s=n-i;s>=e;s-=i)a=Ac(s,t[s],t[s+1],a);return a&&ss(a,a.next)&&(nr(a),a=a.next),a}function Yn(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(ss(n,n.next)||dt(n.prev,n,n.next)===0)){if(nr(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function er(t,e,n,i,r,s,a){if(!t)return;!a&&s&&T0(t,i,r,s);let c=t,o,l;for(;t.prev!==t.next;){if(o=t.prev,l=t.next,s?x0(t,i,r,s):_0(t)){e.push(o.i/n|0),e.push(t.i/n|0),e.push(l.i/n|0),nr(t),t=l.next,c=l.next;continue}if(t=l,t===c){a?a===1?(t=v0(Yn(t),e,n),er(t,e,n,i,r,s,2)):a===2&&M0(t,e,n,i,r,s):er(Yn(t),e,n,i,r,s,1);break}}}function _0(t){const e=t.prev,n=t,i=t.next;if(dt(e,n,i)>=0)return!1;const r=e.x,s=n.x,a=i.x,c=e.y,o=n.y,l=i.y,u=r<s?r<a?r:a:s<a?s:a,h=c<o?c<l?c:l:o<l?o:l,f=r>s?r>a?r:a:s>a?s:a,d=c>o?c>l?c:l:o>l?o:l;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&mi(r,c,s,o,a,l,g.x,g.y)&&dt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function x0(t,e,n,i){const r=t.prev,s=t,a=t.next;if(dt(r,s,a)>=0)return!1;const c=r.x,o=s.x,l=a.x,u=r.y,h=s.y,f=a.y,d=c<o?c<l?c:l:o<l?o:l,g=u<h?u<f?u:f:h<f?h:f,_=c>o?c>l?c:l:o>l?o:l,m=u>h?u>f?u:f:h>f?h:f,p=za(d,g,e,n,i),w=za(_,m,e,n,i);let v=t.prevZ,x=t.nextZ;for(;v&&v.z>=p&&x&&x.z<=w;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&mi(c,u,o,h,l,f,v.x,v.y)&&dt(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&mi(c,u,o,h,l,f,x.x,x.y)&&dt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&mi(c,u,o,h,l,f,v.x,v.y)&&dt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=w;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&mi(c,u,o,h,l,f,x.x,x.y)&&dt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function v0(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!ss(r,s)&&Rl(r,i,i.next,s)&&tr(r,s)&&tr(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),nr(i),nr(i.next),i=t=s),i=i.next}while(i!==t);return Yn(i)}function M0(t,e,n,i,r,s){let a=t;do{let c=a.next.next;for(;c!==a.prev;){if(a.i!==c.i&&R0(a,c)){let o=Pl(a,c);a=Yn(a,a.next),o=Yn(o,o.next),er(a,e,n,i,r,s,0),er(o,e,n,i,r,s,0);return}c=c.next}a=a.next}while(a!==t)}function b0(t,e,n,i){const r=[];let s,a,c,o,l;for(s=0,a=e.length;s<a;s++)c=e[s]*i,o=s<a-1?e[s+1]*i:t.length,l=Cl(t,c,o,i,!1),l===l.next&&(l.steiner=!0),r.push(C0(l));for(r.sort(y0),s=0;s<r.length;s++)n=S0(r[s],n);return n}function y0(t,e){return t.x-e.x}function S0(t,e){const n=w0(t,e);if(!n)return e;const i=Pl(n,t);return Yn(i,i.next),Yn(n,n.next)}function w0(t,e){let n=e,i=-1/0,r;const s=t.x,a=t.y;do{if(a<=n.y&&a>=n.next.y&&n.next.y!==n.y){const f=n.x+(a-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=s&&f>i&&(i=f,r=n.x<n.next.x?n:n.next,f===s))return r}n=n.next}while(n!==e);if(!r)return null;const c=r,o=r.x,l=r.y;let u=1/0,h;n=r;do s>=n.x&&n.x>=o&&s!==n.x&&mi(a<l?s:i,a,o,l,a<l?i:s,a,n.x,n.y)&&(h=Math.abs(a-n.y)/(s-n.x),tr(n,t)&&(h<u||h===u&&(n.x>r.x||n.x===r.x&&E0(r,n)))&&(r=n,u=h)),n=n.next;while(n!==c);return r}function E0(t,e){return dt(t.prev,t,e.prev)<0&&dt(e.next,t,t.next)<0}function T0(t,e,n,i){let r=t;do r.z===0&&(r.z=za(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,A0(r)}function A0(t){let e,n,i,r,s,a,c,o,l=1;do{for(n=t,t=null,s=null,a=0;n;){for(a++,i=n,c=0,e=0;e<l&&(c++,i=i.nextZ,!!i);e++);for(o=l;c>0||o>0&&i;)c!==0&&(o===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,c--):(r=i,i=i.nextZ,o--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,l*=2}while(a>1);return t}function za(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function C0(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function mi(t,e,n,i,r,s,a,c){return(r-a)*(e-c)>=(t-a)*(s-c)&&(t-a)*(i-c)>=(n-a)*(e-c)&&(n-a)*(s-c)>=(r-a)*(i-c)}function R0(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!P0(t,e)&&(tr(t,e)&&tr(e,t)&&L0(t,e)&&(dt(t.prev,t,e.prev)||dt(t,e.prev,e))||ss(t,e)&&dt(t.prev,t,t.next)>0&&dt(e.prev,e,e.next)>0)}function dt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function ss(t,e){return t.x===e.x&&t.y===e.y}function Rl(t,e,n,i){const r=zr(dt(t,e,n)),s=zr(dt(t,e,i)),a=zr(dt(n,i,t)),c=zr(dt(n,i,e));return!!(r!==s&&a!==c||r===0&&Br(t,n,e)||s===0&&Br(t,i,e)||a===0&&Br(n,t,i)||c===0&&Br(n,e,i))}function Br(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function zr(t){return t>0?1:t<0?-1:0}function P0(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Rl(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function tr(t,e){return dt(t.prev,t,t.next)<0?dt(t,e,t.next)>=0&&dt(t,t.prev,e)>=0:dt(t,e,t.prev)<0||dt(t,t.next,e)<0}function L0(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Pl(t,e){const n=new ka(t.i,t.x,t.y),i=new ka(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Ac(t,e,n,i){const r=new ka(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function nr(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function ka(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function I0(t,e,n,i){let r=0;for(let s=e,a=n-i;s<n;s+=i)r+=(t[a]-t[s])*(t[s+1]+t[a+1]),a=s;return r}class Ki{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Ki.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];Cc(e),Rc(i,e);let a=e.length;n.forEach(Cc);for(let o=0;o<n.length;o++)r.push(a),a+=n[o].length,Rc(i,n[o]);const c=g0.triangulate(i,r);for(let o=0;o<c.length;o+=3)s.push(c.slice(o,o+3));return s}}function Cc(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Rc(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Kn extends ke{constructor(e=new Ii([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let c=0,o=e.length;c<o;c++){const l=e[c];a(l)}this.setAttribute("position",new tt(r,3)),this.setAttribute("uv",new tt(s,2)),this.computeVertexNormals();function a(c){const o=[],l=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:1;let f=n.bevelEnabled!==void 0?n.bevelEnabled:!0,d=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:d-.1,_=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const p=n.extrudePath,w=n.UVGenerator!==void 0?n.UVGenerator:D0;let v,x=!1,D,A,R,L;p&&(v=p.getSpacedPoints(u),x=!0,f=!1,D=p.computeFrenetFrames(u,!1),A=new P,R=new P,L=new P),f||(m=0,d=0,g=0,_=0);const E=c.extractPoints(l);let b=E.shape;const I=E.holes;if(!Ki.isClockWise(b)){b=b.reverse();for(let j=0,se=I.length;j<se;j++){const C=I[j];Ki.isClockWise(C)&&(I[j]=C.reverse())}}const B=Ki.triangulateShape(b,I),H=b;for(let j=0,se=I.length;j<se;j++){const C=I[j];b=b.concat(C)}function J(j,se,C){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(se,C)}const G=b.length,te=B.length;function W(j,se,C){let Re,ne,ye;const ue=j.x-se.x,Ue=j.y-se.y,Me=C.x-j.x,T=C.y-j.y,M=ue*ue+Ue*Ue,O=ue*T-Ue*Me;if(Math.abs(O)>Number.EPSILON){const Y=Math.sqrt(M),Q=Math.sqrt(Me*Me+T*T),q=se.x-Ue/Y,Ee=se.y+ue/Y,fe=C.x-T/Q,be=C.y+Me/Q,Je=((fe-q)*T-(be-Ee)*Me)/(ue*T-Ue*Me);Re=q+ue*Je-j.x,ne=Ee+Ue*Je-j.y;const re=Re*Re+ne*ne;if(re<=2)return new ce(Re,ne);ye=Math.sqrt(re/2)}else{let Y=!1;ue>Number.EPSILON?Me>Number.EPSILON&&(Y=!0):ue<-Number.EPSILON?Me<-Number.EPSILON&&(Y=!0):Math.sign(Ue)===Math.sign(T)&&(Y=!0),Y?(Re=-Ue,ne=ue,ye=Math.sqrt(M)):(Re=ue,ne=Ue,ye=Math.sqrt(M/2))}return new ce(Re/ye,ne/ye)}const le=[];for(let j=0,se=H.length,C=se-1,Re=j+1;j<se;j++,C++,Re++)C===se&&(C=0),Re===se&&(Re=0),le[j]=W(H[j],H[C],H[Re]);const pe=[];let xe,De=le.concat();for(let j=0,se=I.length;j<se;j++){const C=I[j];xe=[];for(let Re=0,ne=C.length,ye=ne-1,ue=Re+1;Re<ne;Re++,ye++,ue++)ye===ne&&(ye=0),ue===ne&&(ue=0),xe[Re]=W(C[Re],C[ye],C[ue]);pe.push(xe),De=De.concat(xe)}for(let j=0;j<m;j++){const se=j/m,C=d*Math.cos(se*Math.PI/2),Re=g*Math.sin(se*Math.PI/2)+_;for(let ne=0,ye=H.length;ne<ye;ne++){const ue=J(H[ne],le[ne],Re);oe(ue.x,ue.y,-C)}for(let ne=0,ye=I.length;ne<ye;ne++){const ue=I[ne];xe=pe[ne];for(let Ue=0,Me=ue.length;Ue<Me;Ue++){const T=J(ue[Ue],xe[Ue],Re);oe(T.x,T.y,-C)}}}const Ze=g+_;for(let j=0;j<G;j++){const se=f?J(b[j],De[j],Ze):b[j];x?(R.copy(D.normals[0]).multiplyScalar(se.x),A.copy(D.binormals[0]).multiplyScalar(se.y),L.copy(v[0]).add(R).add(A),oe(L.x,L.y,L.z)):oe(se.x,se.y,0)}for(let j=1;j<=u;j++)for(let se=0;se<G;se++){const C=f?J(b[se],De[se],Ze):b[se];x?(R.copy(D.normals[j]).multiplyScalar(C.x),A.copy(D.binormals[j]).multiplyScalar(C.y),L.copy(v[j]).add(R).add(A),oe(L.x,L.y,L.z)):oe(C.x,C.y,h/u*j)}for(let j=m-1;j>=0;j--){const se=j/m,C=d*Math.cos(se*Math.PI/2),Re=g*Math.sin(se*Math.PI/2)+_;for(let ne=0,ye=H.length;ne<ye;ne++){const ue=J(H[ne],le[ne],Re);oe(ue.x,ue.y,h+C)}for(let ne=0,ye=I.length;ne<ye;ne++){const ue=I[ne];xe=pe[ne];for(let Ue=0,Me=ue.length;Ue<Me;Ue++){const T=J(ue[Ue],xe[Ue],Re);x?oe(T.x,T.y+v[u-1].y,v[u-1].x+C):oe(T.x,T.y,h+C)}}}Z(),ie();function Z(){const j=r.length/3;if(f){let se=0,C=G*se;for(let Re=0;Re<te;Re++){const ne=B[Re];Ie(ne[2]+C,ne[1]+C,ne[0]+C)}se=u+m*2,C=G*se;for(let Re=0;Re<te;Re++){const ne=B[Re];Ie(ne[0]+C,ne[1]+C,ne[2]+C)}}else{for(let se=0;se<te;se++){const C=B[se];Ie(C[2],C[1],C[0])}for(let se=0;se<te;se++){const C=B[se];Ie(C[0]+G*u,C[1]+G*u,C[2]+G*u)}}i.addGroup(j,r.length/3-j,0)}function ie(){const j=r.length/3;let se=0;ve(H,se),se+=H.length;for(let C=0,Re=I.length;C<Re;C++){const ne=I[C];ve(ne,se),se+=ne.length}i.addGroup(j,r.length/3-j,1)}function ve(j,se){let C=j.length;for(;--C>=0;){const Re=C;let ne=C-1;ne<0&&(ne=j.length-1);for(let ye=0,ue=u+m*2;ye<ue;ye++){const Ue=G*ye,Me=G*(ye+1),T=se+Re+Ue,M=se+ne+Ue,O=se+ne+Me,Y=se+Re+Me;Be(T,M,O,Y)}}}function oe(j,se,C){o.push(j),o.push(se),o.push(C)}function Ie(j,se,C){Fe(j),Fe(se),Fe(C);const Re=r.length/3,ne=w.generateTopUV(i,r,Re-3,Re-2,Re-1);$e(ne[0]),$e(ne[1]),$e(ne[2])}function Be(j,se,C,Re){Fe(j),Fe(se),Fe(Re),Fe(se),Fe(C),Fe(Re);const ne=r.length/3,ye=w.generateSideWallUV(i,r,ne-6,ne-3,ne-2,ne-1);$e(ye[0]),$e(ye[1]),$e(ye[3]),$e(ye[1]),$e(ye[2]),$e(ye[3])}function Fe(j){r.push(o[j*3+0]),r.push(o[j*3+1]),r.push(o[j*3+2])}function $e(j){s.push(j.x),s.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return U0(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,a=e.shapes.length;s<a;s++){const c=n[e.shapes[s]];i.push(c)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new jr[r.type]().fromJSON(r)),new Kn(i,e.options)}}const D0={generateTopUV:function(t,e,n,i,r){const s=e[n*3],a=e[n*3+1],c=e[i*3],o=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new ce(s,a),new ce(c,o),new ce(l,u)]},generateSideWallUV:function(t,e,n,i,r,s){const a=e[n*3],c=e[n*3+1],o=e[n*3+2],l=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[r*3],d=e[r*3+1],g=e[r*3+2],_=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(c-u)<Math.abs(a-l)?[new ce(a,1-o),new ce(l,1-h),new ce(f,1-g),new ce(_,1-p)]:[new ce(c,1-o),new ce(u,1-h),new ce(d,1-g),new ce(m,1-p)]}};function U0(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class Lt extends sr{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Lt(e.radius,e.detail)}}class Ye extends ke{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:c},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const o=Math.min(a+c,Math.PI);let l=0;const u=[],h=new P,f=new P,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const w=[],v=p/i;let x=0;p===0&&a===0?x=.5/n:p===i&&o===Math.PI&&(x=-.5/n);for(let D=0;D<=n;D++){const A=D/n;h.x=-e*Math.cos(r+A*s)*Math.sin(a+v*c),h.y=e*Math.cos(a+v*c),h.z=e*Math.sin(r+A*s)*Math.sin(a+v*c),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(A+x,1-v),w.push(l++)}u.push(w)}for(let p=0;p<i;p++)for(let w=0;w<n;w++){const v=u[p][w+1],x=u[p][w],D=u[p+1][w],A=u[p+1][w+1];(p!==0||a>0)&&d.push(v,x,A),(p!==i-1||o<Math.PI)&&d.push(x,D,A)}this.setIndex(d),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ye(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ro extends sr{constructor(e=1,n=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,n),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new ro(e.radius,e.detail)}}class xt extends ke{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],c=[],o=[],l=[],u=new P,h=new P,f=new P;for(let d=0;d<=i;d++)for(let g=0;g<=r;g++){const _=g/r*s,m=d/i*Math.PI*2;h.x=(e+n*Math.cos(m))*Math.cos(_),h.y=(e+n*Math.cos(m))*Math.sin(_),h.z=n*Math.sin(m),c.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),f.subVectors(h,u).normalize(),o.push(f.x,f.y,f.z),l.push(g/r),l.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=r;g++){const _=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,p=(r+1)*(d-1)+g,w=(r+1)*d+g;a.push(_,m,w),a.push(m,p,w)}this.setIndex(a),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(o,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xt(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ar extends ke{constructor(e=new Tl(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const a=e.computeFrenetFrames(n,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const c=new P,o=new P,l=new ce;let u=new P;const h=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(f,3)),this.setAttribute("uv",new tt(d,2));function _(){for(let v=0;v<n;v++)m(v);m(s===!1?n:0),w(),p()}function m(v){u=e.getPointAt(v/n,u);const x=a.normals[v],D=a.binormals[v];for(let A=0;A<=r;A++){const R=A/r*Math.PI*2,L=Math.sin(R),E=-Math.cos(R);o.x=E*x.x+L*D.x,o.y=E*x.y+L*D.y,o.z=E*x.z+L*D.z,o.normalize(),f.push(o.x,o.y,o.z),c.x=u.x+i*o.x,c.y=u.y+i*o.y,c.z=u.z+i*o.z,h.push(c.x,c.y,c.z)}}function p(){for(let v=1;v<=n;v++)for(let x=1;x<=r;x++){const D=(r+1)*(v-1)+(x-1),A=(r+1)*v+(x-1),R=(r+1)*v+x,L=(r+1)*(v-1)+x;g.push(D,A,L),g.push(A,R,L)}}function w(){for(let v=0;v<=n;v++)for(let x=0;x<=r;x++)l.x=v/n,l.y=x/r,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ar(new jr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class EM extends gn{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class TM extends Pi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rl,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function kr(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function N0(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function F0(t){function e(r,s){return t[r]-t[s]}const n=t.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(e),i}function Pc(t,e,n){const i=t.length,r=new t.constructor(i);for(let s=0,a=0;a!==i;++s){const c=n[s]*e;for(let o=0;o!==e;++o)r[a++]=t[c+o]}return r}function Ll(t,e,n,i){let r=1,s=t[0];for(;s!==void 0&&s[i]===void 0;)s=t[r++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),n.push.apply(n,a)),s=t[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(n,n.length)),s=t[r++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),n.push(a)),s=t[r++];while(s!==void 0)}class as{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const n=this.parameterPositions;let i=this._cachedIndex,r=n[i],s=n[i-1];n:{e:{let a;t:{i:if(!(e<r)){for(let c=i+2;;){if(r===void 0){if(e<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===c)break;if(s=r,r=n[++i],e<r)break e}a=n.length;break t}if(!(e>=s)){const c=n[1];e<c&&(i=2,s=c);for(let o=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=s,s=n[--i-1],e>=s)break e}a=i,i=0;break t}break n}for(;i<a;){const c=i+a>>>1;e<n[c]?a=c:i=c+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)n[a]=i[s+a];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class O0 extends as{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bo,endingEnd:bo}}intervalChanged_(e,n,i){const r=this.parameterPositions;let s=e-2,a=e+1,c=r[s],o=r[a];if(c===void 0)switch(this.getSettings_().endingStart){case yo:s=e,c=2*n-i;break;case So:s=r.length-2,c=n+r[s]-r[s+1];break;default:s=e,c=i}if(o===void 0)switch(this.getSettings_().endingEnd){case yo:a=e,o=2*i-n;break;case So:a=1,o=i+r[1]-r[0];break;default:a=e-1,o=n}const l=(i-n)*.5,u=this.valueSize;this._weightPrev=l/(n-c),this._weightNext=l/(o-i),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,n,i,r){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,o=e*c,l=o-c,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-n)/(r-n),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,w=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let D=0;D!==c;++D)s[D]=p*a[u+D]+w*a[l+D]+v*a[o+D]+x*a[h+D];return s}}class B0 extends as{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,o=e*c,l=o-c,u=(i-n)/(r-n),h=1-u;for(let f=0;f!==c;++f)s[f]=a[l+f]*h+a[o+f]*u;return s}}class z0 extends as{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class nn{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=kr(n,this.TimeBufferType),this.values=kr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:kr(e.times,Array),values:kr(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new z0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new B0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new O0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case qr:n=this.InterpolantFactoryMethodDiscrete;break;case Oa:n=this.InterpolantFactoryMethodLinear;break;case fs:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qr;case this.InterpolantFactoryMethodLinear:return Oa;case this.InterpolantFactoryMethodSmooth:return fs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e}return this}scale(e){if(e!==1){const n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e}return this}trim(e,n){const i=this.times,r=i.length;let s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>n;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const c=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*c,a*c)}return this}validate(){let e=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let c=0;c!==s;c++){const o=i[c];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,o),e=!1;break}if(a!==null&&a>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,o,a),e=!1;break}a=o}if(r!==void 0&&N0(r))for(let c=0,o=r.length;c!==o;++c){const l=r[c];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===fs,s=e.length-1;let a=1;for(let c=1;c<s;++c){let o=!1;const l=e[c],u=e[c+1];if(l!==u&&(c!==1||l!==e[0]))if(r)o=!0;else{const h=c*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){const _=n[h+g];if(_!==n[f+g]||_!==n[d+g]){o=!0;break}}}if(o){if(c!==a){e[a]=e[c];const h=c*i,f=a*i;for(let d=0;d!==i;++d)n[f+d]=n[h+d]}++a}}if(s>0){e[a]=e[s];for(let c=s*i,o=a*i,l=0;l!==i;++l)n[o+l]=n[c+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=n.slice(0,a*i)):(this.times=e,this.values=n),this}clone(){const e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}}nn.prototype.TimeBufferType=Float32Array;nn.prototype.ValueBufferType=Float32Array;nn.prototype.DefaultInterpolation=Oa;class Di extends nn{constructor(e,n,i){super(e,n,i)}}Di.prototype.ValueTypeName="bool";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=qr;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;class Il extends nn{}Il.prototype.ValueTypeName="color";class es extends nn{}es.prototype.ValueTypeName="number";class k0 extends as{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,o=(i-n)/(r-n);let l=e*c;for(let u=l+c;l!==u;l+=4)Ci.slerpFlat(s,0,a,l-c,a,l,o);return s}}class os extends nn{InterpolantFactoryMethodLinear(e){return new k0(this.times,this.values,this.getValueSize(),e)}}os.prototype.ValueTypeName="quaternion";os.prototype.InterpolantFactoryMethodSmooth=void 0;class Ui extends nn{constructor(e,n,i){super(e,n,i)}}Ui.prototype.ValueTypeName="string";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=qr;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;class ts extends nn{}ts.prototype.ValueTypeName="vector";class AM{constructor(e="",n=-1,i=[],r=pu){this.name=e,this.tracks=i,this.duration=n,this.blendMode=r,this.uuid=Pn(),this.duration<0&&this.resetDuration()}static parse(e){const n=[],i=e.tracks,r=1/(e.fps||1);for(let a=0,c=i.length;a!==c;++a)n.push(H0(i[a]).scale(r));const s=new this(e.name,e.duration,n,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const n=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=i.length;s!==a;++s)n.push(nn.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,n,i,r){const s=n.length,a=[];for(let c=0;c<s;c++){let o=[],l=[];o.push((c+s-1)%s,c,(c+1)%s),l.push(0,1,0);const u=F0(o);o=Pc(o,1,u),l=Pc(l,1,u),!r&&o[0]===0&&(o.push(s),l.push(l[0])),a.push(new es(".morphTargetInfluences["+n[c].name+"]",o,l).scale(1/i))}return new this(e,-1,a)}static findByName(e,n){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===n)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,n,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let c=0,o=e.length;c<o;c++){const l=e[c],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(l)}}const a=[];for(const c in r)a.push(this.CreateFromMorphTargetSequence(c,r[c],n,i));return a}static parseAnimation(e,n){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];Ll(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},r=[],s=e.name||"default",a=e.fps||30,c=e.blendMode;let o=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let w=0;w!==f[g].morphTargets.length;++w){const v=f[g];m.push(v.time),p.push(v.morphTarget===_?1:0)}r.push(new es(".morphTargetInfluence["+_+"]",m,p))}o=d.length*a}else{const d=".bones["+n[h].name+"]";i(ts,d+".position",f,"pos",r),i(os,d+".quaternion",f,"rot",r),i(ts,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,o,r,c)}resetDuration(){const e=this.tracks;let n=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];n=Math.max(n,s.times[s.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function V0(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return es;case"vector":case"vector2":case"vector3":case"vector4":return ts;case"color":return Il;case"quaternion":return os;case"bool":case"boolean":return Di;case"string":return Ui}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}function H0(t){if(t.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=V0(t.type);if(t.times===void 0){const n=[],i=[];Ll(t.keys,n,i,"value"),t.times=n,t.values=i}return e.parse!==void 0?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}const Lc={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class G0{constructor(e,n,i){const r=this;let s=!1,a=0,c=0,o;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){c++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,c),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,c),a===c&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return o?o(u):u},this.setURLModifier=function(u){return o=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const W0=new G0;class so{constructor(e){this.manager=e!==void 0?e:W0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}so.DEFAULT_MATERIAL_NAME="__DEFAULT";class X0 extends so{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Lc.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0),a;const c=Qi("img");function o(){u(),Lc.add(e,this),n&&n(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){c.removeEventListener("load",o,!1),c.removeEventListener("error",l,!1)}return c.addEventListener("load",o,!1),c.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),s.manager.itemStart(e),c.src=e,c}}class CM extends so{constructor(e){super(e)}load(e,n,i,r){const s=new yt,a=new X0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(c){s.image=c,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class cs extends St{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class RM extends cs{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Xs=new st,Ic=new P,Dc=new P;class Dl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qa,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Ic.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ic),Dc.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Dc),n.updateMatrixWorld(),Xs.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xs),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Uc=new st,Wi=new P,Zs=new P;class Z0 extends Dl{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Wi.setFromMatrixPosition(e.matrixWorld),i.position.copy(Wi),Zs.copy(i.position),Zs.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Zs),i.updateMatrixWorld(),r.makeTranslation(-Wi.x,-Wi.y,-Wi.z),Uc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uc)}}class PM extends cs{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Z0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Y0 extends Dl{constructor(){super(new _l(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class LM extends cs{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new Y0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class IM extends cs{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class DM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Nc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Nc();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Nc(){return performance.now()}const ao="\\[\\]\\.:\\/",q0=new RegExp("["+ao+"]","g"),oo="[^"+ao+"]",J0="[^"+ao.replace("\\.","")+"]",K0=/((?:WC+[\/:])*)/.source.replace("WC",oo),$0=/(WCOD+)?/.source.replace("WCOD",J0),j0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oo),Q0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oo),eg=new RegExp("^"+K0+$0+j0+Q0+"$"),tg=["material","materials","bones","map"];class ng{constructor(e,n,i){const r=i||ot.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}}class ot{constructor(e,n,i){this.path=n,this.parsedPath=i||ot.parseTrackName(n),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new ot.Composite(e,n,i):new ot(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(q0,"")}static parseTrackName(e){const n=eg.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);tg.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const c=s[a];if(c.name===n||c.uuid===n)return c;const o=i(c.children);if(o)return o}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,i=n.objectName,r=n.propertyName;let s=n.propertyIndex;if(e||(e=ot.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[r];if(a===void 0){const l=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}o=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(o=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=ng;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Fc=new st;class UM{constructor(e,n,i=0,r=1/0){this.ray=new $a(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new ja,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Fc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fc),this}intersectObject(e,n=!0,i=[]){return Va(e,this,i,n),i.sort(Oc),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Va(e[r],this,i,n);return i.sort(Oc),i}}function Oc(t,e){return t.distance-e.distance}function Va(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,c=s.length;a<c;a++)Va(s[a],e,n,!0)}}class NM{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(_t(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Bc=new P,Vr=new P;class FM{constructor(e=new P,n=new P){this.start=e,this.end=n}set(e,n){return this.start.copy(e),this.end.copy(n),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,n){return this.delta(n).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,n){Bc.subVectors(e,this.start),Vr.subVectors(this.end,this.start);const i=Vr.dot(Vr);let s=Vr.dot(Bc)/i;return n&&(s=_t(s,0,1)),s}closestPointToPoint(e,n,i){const r=this.closestPointToPointParameter(e,n);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class OM extends qn{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ha}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ha);function K(t,e=!1){const n=t[0].index!==null,i=new Set(Object.keys(t[0].attributes)),r=new Set(Object.keys(t[0].morphAttributes)),s={},a={},c=t[0].morphTargetsRelative,o=new ke;let l=0;for(let u=0;u<t.length;++u){const h=t[u];let f=0;if(n!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(h.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(c!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(h.morphAttributes[d])}if(e){let d;if(n)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;o.addGroup(l,d,u),l+=d}}if(n){let u=0;const h=[];for(let f=0;f<t.length;++f){const d=t[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=t[f].attributes.position.count}o.setIndex(h)}for(const u in s){const h=zc(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;o.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;o.morphAttributes=o.morphAttributes||{},o.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let _=0;_<a[u].length;++_)d.push(a[u][_][f]);const g=zc(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;o.morphAttributes[u].push(g)}}return o}function zc(t){let e,n,i,r=-1,s=0;for(let l=0;l<t.length;++l){const u=t[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=u.itemSize),n!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*n}const a=new e(s),c=new qe(a,n,i);let o=0;for(let l=0;l<t.length;++l){const u=t[l];if(u.isInterleavedBufferAttribute){const h=o/n;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<n;g++){const _=u.getComponent(f,g);c.setComponent(f+h,g,_)}}else a.set(u.array,o);o+=u.count*n}return r!==void 0&&(c.gpuType=r),c}const ig={basic:{label:"Basic",types:["cube","slab","slabTop","quarter","quarterTall","halfX","halfZ","halfCorner","step","platform"]},pillars:{label:"Pillars",types:["pillar","pillar2","pillar4","pillarRound","pillarRound2","post","bollard"]},beams:{label:"Beams",types:["beamX","beam2X","beamZ","beam2Z","beamXLow","beam2XLow","beamZLow","beam2ZLow","beamDiag","crossBeam","truss"]},walls:{label:"Walls",types:["wall","wall4","wall8","panel","wallFront","wallBack","wallCorner","wallCornerInner","wallJunction","parapet","crenellation"]},wedges:{label:"Wedges",types:["wedge","wedgeLow","wedgeFlat","wedgeTop","wedgeLowTop","wedgeFlatTop","wedgeCorner","wedgeInner","wedge4x2","wedge4x2Top","wedge2x2","wedge2x2Top","wedgeHalf","wedgeHalfTop","wedgeCornerLow","wedgeCornerFlat"]},triangles:{label:"Triangles",types:["trianglePrism","triangleRight","triangleEqui","tetrahedron","pentahedron"]},stairs:{label:"Stairs",types:["stairs","stairs4","stairs8","stairsCorner","stairsCornerInner","stairsSingle","landing","spiralStep"]},shapes:{label:"Shapes",types:["cylinder","cylinderHalf","cone","sphere","dome","pyramid","octagon","tube","torus","capsule","hemisphere","egg"]},arches:{label:"Arches",types:["arch","archLow","archWide","archHalf","gothicArch","flatArch","keystone"]},pipes:{label:"Pipes",types:["pipeX","pipeY","pipeZ","pipeElbowXZ","pipeElbowXZ2","pipeElbowXZ3","pipeElbowXZ4","pipeElbowXY","pipeElbowXY2","pipeElbowYZ","pipeElbowYZ2","pipeCross","pipeT","pipeTY","pipeTZ","downspout"]},fences:{label:"Fences & Gates",types:["fence","fenceZ","fenceCorner","fenceCornerInner","fencePost","fenceEnd","fenceT","fenceCross","gate","gateOpen","gateDouble","gateArch","railing","railingZ","railingCorner","railingCornerInner","railingPost","railingEnd","railingSlope","railingSlopeZ","picket","picketZ","lattice","latticeZ"]},decorative:{label:"Decorative",types:["cross","frame","prism","lShape","tShape","cShape","star","heart","diamond"]},details:{label:"Details",types:["ledge","gutter","capital","base","windowFrame","doorFrame","cornerTrim","edgeTrim","edgeCorner","edgeSlope","edgeSlopeZ","moldingX","moldingZ","moldingCorner","bracket","trim","trimZ","trimCorner"]},architectural:{label:"Architectural",types:["cornice","column","baluster","windowSill","chimney","buttress","finial","pediment","dentil"]},covers:{label:"Covers",types:["awning","pergola","tarp","umbrella"]},furniture:{label:"Furniture",types:["bench","table","chair","barrel","planter","ladder","stool","bed","desk"]},storage:{label:"Storage",types:["crate","crateOpen","crateLarge","pallet","shelfUnit","locker","cardboardBox","sack","bin","dumpster"]},industrial:{label:"Industrial",types:["tank","valve","vent","iBeam","catwalk","grateFloor","ductX","ductZ","ductCorner","hopper","conveyor"]},electrical:{label:"Electrical",types:["transformer","powerBox","outlet","switchBox","fuseBox","cableX","cableY","cableZ","cableElbow","cableElbowY","cableT","lightFixture","cableHanging","cableDroop","cableLoop","spotlight","bulb"]},natural:{label:"Natural",types:["rock","bush","logX","logZ","stump","boulder","grass","flower","mushroom","mushroomCluster","moss","vine","coral"]},rocks:{label:"Rocks",types:["rock","boulder","rockSmall","rockLarge","rockFlat","rockTall","rockJagged","rockCluster","rockPile","pebbles","slate"]},crystals:{label:"Crystals",types:["crystal","gem","crystalSmall","crystalLarge","crystalCluster","crystalSpike","crystalFlat","crystalShard","crystalFormation"]},cave:{label:"Cave",types:["stalactite","stalagmite","mushroom","mushroomCluster","moss","crystalCluster","crystalFormation"]},modern:{label:"Modern",types:["acUnit","solarPanel","antenna","barrier","trafficCone","sign","monitor","speaker"]},extraShapes:{label:"Extra Shapes",types:["quarterPipe","bowl","hexagon","chamfer","gem","crystal","pill"]},ramps:{label:"Ramps",types:["rampCurved","rampCurvedLow","rampCurvedCorner","rampStraight","rampWide"]},roofs:{label:"Roofs",types:["roofPeak","roofPeakLow","roofHip","slabSlope","slabSlopeTop","roofCorner","roofValley","gable"]},channels:{label:"Channels",types:["channel","channelCorner","channelEnd","drain","grate"]},medieval:{label:"Medieval",types:["merlon","arrowSlit","torch","chain","shield","banner","portcullis"]},vehicles:{label:"Vehicles",types:["wheel","axle","seat","hull","propeller","wing"]},oil:{label:"Oil & Gas",types:["derrickLeg","derrickCross","derrickPlatform","pumpJack","pumpBase","oilTank","oilTankSmall","wellHead","pipelineX","pipelineZ","oilBarrel"]},alien:{label:"Alien / Biomechanical",types:["bioTube","vertebra","ribCage","spineSegment","organicPipe","biomechPanel","alienVent","membrane","tendril","bioSphere","exoPlate","twistedColumn","organicArch","bioConduit","chitinPlate","boneArch","skullFragment","alienCorridor","biomassCluster","nervousSystem","carapace","pulsatingOrb","xenoSpire","organicGrowth","bioReactor"]}};function BM(){const t=[];for(const e of Object.values(ig))t.push(...e.types);return t}const zM={cube:{icon:"▢",label:"Cube"},slab:{icon:"▃",label:"Slab"},slabTop:{icon:"▀",label:"Slab Top"},quarter:{icon:"◱",label:"Quarter"},quarterTall:{icon:"◰",label:"Qtr Tall"},halfX:{icon:"▐",label:"Half X"},halfZ:{icon:"▄",label:"Half Z"},halfCorner:{icon:"◼",label:"Half Crn"},pillar:{icon:"▪",label:"Pillar"},pillar2:{icon:"∙",label:"Pillar S"},pillar4:{icon:"·",label:"Pillar XS"},pillarRound:{icon:"◯",label:"Round Pil"},pillarRound2:{icon:"◦",label:"Round S"},beamX:{icon:"═",label:"Beam X"},beam2X:{icon:"─",label:"Beam X S"},beam4X:{icon:"╌",label:"Beam X XS"},beamZ:{icon:"║",label:"Beam Z"},beam2Z:{icon:"│",label:"Beam Z S"},beam4Z:{icon:"╎",label:"Beam Z XS"},beamDiag:{icon:"╲",label:"Beam Diag"},beamXLow:{icon:"▬",label:"Beam X Lo"},beam2XLow:{icon:"―",label:"Beam X LoS"},beamZLow:{icon:"▮",label:"Beam Z Lo"},beam2ZLow:{icon:"┃",label:"Beam Z LoS"},wall:{icon:"▯",label:"Wall"},wall4:{icon:"│",label:"Wall Thin"},wall8:{icon:"┃",label:"Wall XThin"},panel:{icon:"|",label:"Panel"},wallFront:{icon:"▌",label:"Wall Front"},wallBack:{icon:"▐",label:"Wall Back"},wallCorner:{icon:"┐",label:"Corner"},wallCornerInner:{icon:"└",label:"Inner Crn"},wallJunction:{icon:"◤",label:"Junction"},wedge:{icon:"◿",label:"Wedge"},wedgeLow:{icon:"⊿",label:"Wedge Low"},wedgeFlat:{icon:"▱",label:"Wedge Flat"},wedgeTop:{icon:"◺",label:"Wedge Top"},wedgeLowTop:{icon:"⊿",label:"Wdg Low Top"},wedgeFlatTop:{icon:"▱",label:"Wdg Flat Top"},wedgeCorner:{icon:"◢",label:"Wdg Corner"},wedgeInner:{icon:"◣",label:"Wdg Inner"},wedge4x2:{icon:"◿",label:"Wdg 4x2"},wedge4x2Top:{icon:"◺",label:"Wdg 4x2 Top"},wedge2x2:{icon:"◿",label:"Wdg 2x2"},wedge2x2Top:{icon:"◺",label:"Wdg 2x2 Top"},wedgeHalf:{icon:"◿",label:"Wdg Half"},wedgeHalfTop:{icon:"◺",label:"Wdg Half Top"},wedgeCornerLow:{icon:"◢",label:"Wdg Crn Lo"},wedgeCornerFlat:{icon:"◢",label:"Wdg Crn Flat"},stairs:{icon:"⌐",label:"Stairs 2"},stairs4:{icon:"▤",label:"Stairs 4"},stairs8:{icon:"▥",label:"Stairs 8"},stairsCorner:{icon:"⌏",label:"Stair Crn"},stairsCornerInner:{icon:"⌎",label:"Stair Inn"},cylinder:{icon:"○",label:"Cylinder"},cylinderHalf:{icon:"◗",label:"Half Cyl"},cone:{icon:"△",label:"Cone"},sphere:{icon:"●",label:"Sphere"},dome:{icon:"◠",label:"Dome"},pyramid:{icon:"◭",label:"Pyramid"},octagon:{icon:"⬡",label:"Octagon"},tube:{icon:"◎",label:"Tube"},arch:{icon:"∩",label:"Arch"},archLow:{icon:"⌒",label:"Arch Low"},archWide:{icon:"⌢",label:"Arch Wide"},archHalf:{icon:"⌓",label:"Arch Half"},cross:{icon:"✚",label:"Cross"},frame:{icon:"□",label:"Frame"},fence:{icon:"╫",label:"Fence"},fenceZ:{icon:"╪",label:"Fence Z"},railing:{icon:"⊢",label:"Railing"},railingZ:{icon:"⊣",label:"Railing Z"},pipeX:{icon:"━",label:"Pipe X"},pipeY:{icon:"┃",label:"Pipe Y"},pipeZ:{icon:"─",label:"Pipe Z"},pipeElbow:{icon:"┘",label:"Elbow 1"},pipeElbow2:{icon:"└",label:"Elbow 2"},pipeElbow3:{icon:"┌",label:"Elbow 3"},pipeElbow4:{icon:"┐",label:"Elbow 4"},pipeCross:{icon:"┼",label:"Cross"},pipeT:{icon:"┬",label:"T Horiz"},pipeTY:{icon:"⊥",label:"T Vert"},prism:{icon:"▲",label:"Prism"},lShape:{icon:"⌐",label:"L Shape"},tShape:{icon:"⊥",label:"T Shape"},cShape:{icon:"⊏",label:"C Shape"},ledge:{icon:"⌐",label:"Ledge"},gutter:{icon:"⊔",label:"Gutter"},capital:{icon:"⊓",label:"Capital"},base:{icon:"⊔",label:"Base"},windowFrame:{icon:"⊞",label:"Window"},doorFrame:{icon:"⊡",label:"Door"},cornice:{icon:"⌐",label:"Cornice"},column:{icon:"⫿",label:"Column"},baluster:{icon:"⌇",label:"Baluster"},windowSill:{icon:"⌐",label:"Win Sill"},shingle:{icon:"▱",label:"Shingle"},chimney:{icon:"⌓",label:"Chimney"},buttress:{icon:"◢",label:"Buttress"},bench:{icon:"⊔",label:"Bench"},table:{icon:"⊓",label:"Table"},chair:{icon:"⌐",label:"Chair"},barrel:{icon:"⬭",label:"Barrel"},planter:{icon:"⊔",label:"Planter"},ladder:{icon:"⊞",label:"Ladder"},crate:{icon:"▣",label:"Crate"},crateOpen:{icon:"☐",label:"Crate Open"},crateLarge:{icon:"▢",label:"Crate Lrg"},pallet:{icon:"⊟",label:"Pallet"},shelfUnit:{icon:"⊞",label:"Shelf"},locker:{icon:"▣",label:"Locker"},cabinet:{icon:"▤",label:"Cabinet"},cardboardBox:{icon:"□",label:"Cardboard"},sack:{icon:"◠",label:"Sack"},tank:{icon:"⬭",label:"Tank"},valve:{icon:"✱",label:"Valve"},vent:{icon:"⊞",label:"Vent"},iBeam:{icon:"⊥",label:"I-Beam"},catwalk:{icon:"⊟",label:"Catwalk"},transformer:{icon:"⌂",label:"Transform"},powerBox:{icon:"⚡",label:"Power Box"},conduit:{icon:"━",label:"Conduit"},conduitCorner:{icon:"┘",label:"Conduit Crn"},outlet:{icon:"⊡",label:"Outlet"},switchBox:{icon:"⊟",label:"Switch"},fuseBox:{icon:"⊞",label:"Fuse Box"},cable:{icon:"─",label:"Cable"},lightFixture:{icon:"☼",label:"Light"},cableHanging:{icon:"⌒",label:"Cable Sag"},cableDroop:{icon:"⌓",label:"Cable Drop"},cableLoop:{icon:"∞",label:"Cable Coil"},rock:{icon:"●",label:"Rock"},bush:{icon:"❁",label:"Bush"},logX:{icon:"═",label:"Log X"},logZ:{icon:"║",label:"Log Z"},acUnit:{icon:"⊞",label:"AC Unit"},solarPanel:{icon:"⊟",label:"Solar"},antenna:{icon:"⌇",label:"Antenna"},barrier:{icon:"▬",label:"Barrier"},quarterPipe:{icon:"⌒",label:"Qtr Pipe"},bowl:{icon:"◠",label:"Bowl"},hexagon:{icon:"⬡",label:"Hexagon"},roundedCube:{icon:"▢",label:"Rounded"},chamfer:{icon:"◇",label:"Chamfer"},merlon:{icon:"⊓",label:"Merlon"},arrowSlit:{icon:"⊔",label:"Arrow Slit"},torch:{icon:"♨",label:"Torch"},chain:{icon:"⫿",label:"Chain"},rampCurved:{icon:"⌒",label:"Ramp Curved"},rampCurvedLow:{icon:"⌒",label:"Ramp Crv Lo"},rampCurvedCorner:{icon:"◜",label:"Ramp Crv Crn"},roofPeak:{icon:"⌂",label:"Roof Peak"},roofPeakLow:{icon:"⌂",label:"Roof Pk Lo"},roofHip:{icon:"◬",label:"Roof Hip"},slabSlope:{icon:"▱",label:"Slab Slope"},slabSlopeTop:{icon:"▱",label:"Slab Slp Top"},channel:{icon:"⊔",label:"Channel"},channelCorner:{icon:"⌐",label:"Channel Crn"},channelEnd:{icon:"⊓",label:"Channel End"},cubeBevel:{icon:"◇",label:"Cube Bevel"},step:{icon:"▁",label:"Step"},platform:{icon:"▔",label:"Platform"},post:{icon:"┃",label:"Post"},bollard:{icon:"⏺",label:"Bollard"},crossBeam:{icon:"╋",label:"Cross Beam"},truss:{icon:"⋈",label:"Truss"},parapet:{icon:"▄",label:"Parapet"},crenellation:{icon:"⊓⊓",label:"Crenellation"},trianglePrism:{icon:"△",label:"Tri Prism"},triangleRight:{icon:"◿",label:"Tri Right"},triangleEqui:{icon:"▲",label:"Tri Equi"},tetrahedron:{icon:"◬",label:"Tetrahedron"},pentahedron:{icon:"◭",label:"Pentahedron"},stairsSingle:{icon:"⌐",label:"Single Step"},landing:{icon:"▁",label:"Landing"},spiralStep:{icon:"◠",label:"Spiral Step"},torus:{icon:"◎",label:"Torus"},capsule:{icon:"⬬",label:"Capsule"},hemisphere:{icon:"◠",label:"Hemisphere"},egg:{icon:"⬮",label:"Egg"},gothicArch:{icon:"⋀",label:"Gothic Arch"},flatArch:{icon:"⌐",label:"Flat Arch"},keystone:{icon:"⌓",label:"Keystone"},downspout:{icon:"│",label:"Downspout"},star:{icon:"★",label:"Star"},heart:{icon:"♥",label:"Heart"},diamond:{icon:"◆",label:"Diamond"},cornerTrim:{icon:"⌐",label:"Corner Trim"},edgeTrim:{icon:"─",label:"Edge Trim"},moldingX:{icon:"═",label:"Molding X"},moldingZ:{icon:"║",label:"Molding Z"},bracket:{icon:"⌐",label:"Bracket"},finial:{icon:"♦",label:"Finial"},pediment:{icon:"⌂",label:"Pediment"},dentil:{icon:"▪",label:"Dentil"},awning:{icon:"⌒",label:"Awning"},canopy:{icon:"▔",label:"Canopy"},pergola:{icon:"≡",label:"Pergola"},tarp:{icon:"▭",label:"Tarp"},umbrella:{icon:"☂",label:"Umbrella"},stool:{icon:"⌓",label:"Stool"},shelf:{icon:"▁",label:"Shelf"},bed:{icon:"▭",label:"Bed"},desk:{icon:"⊓",label:"Desk"},bin:{icon:"⊔",label:"Bin"},dumpster:{icon:"▣",label:"Dumpster"},grateFloor:{icon:"⊞",label:"Grate Floor"},ductX:{icon:"═",label:"Duct X"},ductZ:{icon:"║",label:"Duct Z"},ductCorner:{icon:"╔",label:"Duct Corner"},hopper:{icon:"▽",label:"Hopper"},conveyor:{icon:"═",label:"Conveyor"},spotlight:{icon:"◉",label:"Spotlight"},bulb:{icon:"●",label:"Bulb"},stump:{icon:"◯",label:"Stump"},boulder:{icon:"◎",label:"Boulder"},grass:{icon:"⌇",label:"Grass"},flower:{icon:"✿",label:"Flower"},trafficCone:{icon:"▲",label:"Traffic Cone"},sign:{icon:"⊤",label:"Sign"},monitor:{icon:"▢",label:"Monitor"},speaker:{icon:"◉",label:"Speaker"},gem:{icon:"◇",label:"Gem"},crystal:{icon:"◇",label:"Crystal"},pill:{icon:"⬬",label:"Pill"},rampStraight:{icon:"⌒",label:"Ramp Straight"},rampWide:{icon:"⌒",label:"Ramp Wide"},roofCorner:{icon:"◢",label:"Roof Corner"},roofValley:{icon:"◣",label:"Roof Valley"},gable:{icon:"△",label:"Gable"},drain:{icon:"◎",label:"Drain"},grate:{icon:"⊞",label:"Grate"},shield:{icon:"⛊",label:"Shield"},banner:{icon:"⚐",label:"Banner"},portcullis:{icon:"⊞",label:"Portcullis"},wheel:{icon:"◎",label:"Wheel"},axle:{icon:"─",label:"Axle"},seat:{icon:"⌐",label:"Seat"},hull:{icon:"⌒",label:"Hull"},propeller:{icon:"✳",label:"Propeller"},wing:{icon:"▷",label:"Wing"},derrickLeg:{icon:"╱",label:"Derrick Leg"},derrickCross:{icon:"╳",label:"Derrick X"},derrickPlatform:{icon:"▭",label:"Derrick Plat"},pumpJack:{icon:"⌓",label:"Pump Jack"},pumpBase:{icon:"▭",label:"Pump Base"},oilTank:{icon:"⬭",label:"Oil Tank"},oilTankSmall:{icon:"⬮",label:"Tank Small"},wellHead:{icon:"⊥",label:"Well Head"},pipelineX:{icon:"═",label:"Pipeline X"},pipelineZ:{icon:"║",label:"Pipeline Z"},oilBarrel:{icon:"⬭",label:"Oil Barrel"},pipeElbowXZ:{icon:"┘",label:"Elbow XZ 1"},pipeElbowXZ2:{icon:"└",label:"Elbow XZ 2"},pipeElbowXZ3:{icon:"┌",label:"Elbow XZ 3"},pipeElbowXZ4:{icon:"┐",label:"Elbow XZ 4"},pipeElbowXY:{icon:"⌐",label:"Elbow XY"},pipeElbowXY2:{icon:"⌐",label:"Elbow XY 2"},pipeElbowYZ:{icon:"⌐",label:"Elbow YZ"},pipeElbowYZ2:{icon:"⌐",label:"Elbow YZ 2"},pipeTZ:{icon:"⊤",label:"T Pipe Z"},conduitX:{icon:"━",label:"Conduit X"},conduitY:{icon:"┃",label:"Conduit Y"},conduitZ:{icon:"─",label:"Conduit Z"},conduitElbow:{icon:"┘",label:"Cond Elbow"},conduitElbowY:{icon:"⌐",label:"Cond Elbow Y"},conduitT:{icon:"┬",label:"Conduit T"},cableX:{icon:"─",label:"Cable X"},cableY:{icon:"│",label:"Cable Y"},cableZ:{icon:"─",label:"Cable Z"},cableElbow:{icon:"┘",label:"Cable Elbow"},cableElbowY:{icon:"⌐",label:"Cable Elbow Y"},cableT:{icon:"┬",label:"Cable T"},rockSmall:{icon:"◦",label:"Rock Small"},rockLarge:{icon:"◎",label:"Rock Large"},rockFlat:{icon:"▭",label:"Rock Flat"},rockTall:{icon:"▮",label:"Rock Tall"},rockJagged:{icon:"◬",label:"Rock Jagged"},rockCluster:{icon:"◎◎",label:"Rock Cluster"},rockPile:{icon:"◉",label:"Rock Pile"},pebbles:{icon:"∴",label:"Pebbles"},slate:{icon:"▭",label:"Slate"},crystalSmall:{icon:"◇",label:"Crystal Small"},crystalLarge:{icon:"◆",label:"Crystal Large"},crystalCluster:{icon:"◇◇",label:"Crystal Cluster"},crystalSpike:{icon:"▲",label:"Crystal Spike"},crystalFlat:{icon:"⬡",label:"Crystal Flat"},crystalShard:{icon:"◇",label:"Crystal Shard"},crystalFormation:{icon:"◆◇",label:"Crystal Form"},stalactite:{icon:"▼",label:"Stalactite"},stalagmite:{icon:"▲",label:"Stalagmite"},mushroom:{icon:"🍄",label:"Mushroom"},mushroomCluster:{icon:"🍄🍄",label:"Mushroom Clst"},moss:{icon:"≈",label:"Moss"},vine:{icon:"⌇",label:"Vine"},coral:{icon:"⚘",label:"Coral"}},rg={cube:1,slab:.5,slabTop:.5,quarter:.5,quarterTall:1,halfX:1,halfZ:1,halfCorner:1,pillar:1,pillar2:1,pillar4:1,pillarRound:1,pillarRound2:1,beamX:.5,beam2X:.25,beam4X:.125,beamZ:.5,beam2Z:.25,beam4Z:.125,beamDiag:.25,beamXLow:.5,beam2XLow:.25,beamZLow:.5,beam2ZLow:.25,wall:1,wall4:1,wall8:1,panel:1,wallFront:1,wallBack:1,wallCorner:1,wallCornerInner:1,wallJunction:1,wedge:1,wedgeLow:.5,wedgeFlat:.25,wedgeTop:1,wedgeLowTop:.5,wedgeFlatTop:.25,wedgeCorner:1,wedgeInner:1,wedge4x2:1,wedge4x2Top:1,wedge2x2:1,wedge2x2Top:1,wedgeHalf:1,wedgeHalfTop:1,wedgeCornerLow:.5,wedgeCornerFlat:.25,rampCurved:1,rampCurvedLow:.5,rampCurvedCorner:1,roofPeak:1,roofPeakLow:.5,roofHip:1,slabSlope:.25,slabSlopeTop:.25,channel:.5,channelCorner:.5,channelEnd:.5,cubeBevel:1,stairs:1,stairs4:1,stairs8:1,stairsCorner:1,stairsCornerInner:1,cylinder:1,cylinderHalf:1,cone:1,sphere:1,dome:.5,pyramid:1,octagon:1,tube:1,arch:1,archLow:.5,archWide:1,archHalf:1,cross:1,frame:1,fence:1,fenceZ:1,fenceCorner:1,fenceCornerInner:1,fencePost:1,fenceEnd:1,fenceT:1,fenceCross:1,gate:1,gateOpen:1,gateDouble:1,gateArch:1,railing:1,railingZ:1,railingCorner:1,railingCornerInner:1,railingPost:1,railingEnd:1,railingSlope:1,railingSlopeZ:1,picket:1,picketZ:1,lattice:1,latticeZ:1,edgeCorner:.25,edgeSlope:.25,edgeSlopeZ:.25,moldingCorner:.125,trim:.125,trimZ:.125,trimCorner:.125,pipeX:1,pipeY:1,pipeZ:1,pipeElbowXZ:1,pipeElbowXZ2:1,pipeElbowXZ3:1,pipeElbowXZ4:1,pipeElbowXY:1,pipeElbowXY2:1,pipeElbowYZ:1,pipeElbowYZ2:1,pipeTZ:1,pipeCross:1,pipeT:1,pipeTY:1,prism:1,lShape:1,tShape:1,cShape:1,ledge:.25,gutter:.25,capital:.25,base:.25,windowFrame:1,doorFrame:1,cornice:.25,column:1,baluster:1,windowSill:.25,shingle:.25,chimney:1,buttress:1,bench:.5,table:.75,chair:1,barrel:1,planter:.5,ladder:1,crate:1,crateOpen:1,crateLarge:1,pallet:.125,shelfUnit:1,locker:1,cabinet:1,cardboardBox:.75,sack:.5,tank:1,valve:.5,vent:.25,iBeam:1,catwalk:.25,transformer:1,powerBox:.5,conduitX:1,conduitY:1,conduitZ:1,conduitElbow:1,conduitElbowY:1,conduitT:1,outlet:.125,switchBox:.25,fuseBox:.5,cableX:1,cableY:1,cableZ:1,cableElbow:1,cableElbowY:1,cableT:1,lightFixture:.25,cableHanging:1,cableDroop:1,cableLoop:1,rock:.75,bush:.75,logX:.5,logZ:.5,stump:.5,boulder:.75,grass:.25,flower:.5,rockSmall:.5,rockLarge:.85,rockFlat:.3,rockTall:1,rockJagged:.85,rockCluster:.6,rockPile:.5,pebbles:.15,slate:.25,crystalSmall:.5,crystalLarge:1,crystalCluster:.75,crystalSpike:1,crystalFlat:.4,crystalShard:.75,crystalFormation:1,stalactite:.8,stalagmite:.7,mushroom:.5,mushroomCluster:.5,moss:.15,vine:.8,coral:.6,acUnit:.75,solarPanel:.25,antenna:1,barrier:.75,quarterPipe:1,bowl:.5,hexagon:1,roundedCube:1,chamfer:1,merlon:.5,arrowSlit:1,torch:.75,chain:1,shield:.125,banner:1,portcullis:1,step:.25,platform:.125,post:1,bollard:.75,crossBeam:.25,truss:1,parapet:.5,crenellation:.5,trianglePrism:1,triangleRight:1,triangleEqui:1,tetrahedron:1,pentahedron:1,stairsSingle:.25,landing:.25,spiralStep:.25,torus:.5,capsule:1,hemisphere:.5,egg:1,gothicArch:1,flatArch:.25,keystone:.5,downspout:1,star:.25,heart:.5,diamond:1,cornerTrim:1,edgeTrim:.25,moldingX:.125,moldingZ:.125,bracket:.5,finial:.75,pediment:.5,dentil:.25,awning:.25,canopy:.125,pergola:.25,tarp:.0625,umbrella:.75,stool:.5,shelf:.125,bed:.5,desk:.75,bin:.75,dumpster:1,grateFloor:.125,ductX:.5,ductZ:.5,ductCorner:.5,hopper:1,conveyor:.25,spotlight:.5,bulb:.25,stump:.5,boulder:.75,grass:.25,flower:.5,trafficCone:.75,sign:1,monitor:.75,speaker:.5,gem:.75,crystal:1,pill:.5,rampStraight:1,rampWide:1,roofCorner:1,roofValley:1,gable:1,drain:.25,grate:.125,wheel:1,axle:.25,seat:.5,hull:.5,propeller:.25,wing:.125,derrickLeg:1,derrickCross:.25,derrickPlatform:.25,pumpJack:1,pumpBase:.25,oilTank:1,oilTankSmall:.5,wellHead:.5,pipelineX:.5,pipelineZ:.5,oilBarrel:1,bioTube:1,vertebra:.5,ribCage:1,spineSegment:1,organicPipe:1,biomechPanel:1,alienVent:.5,membrane:.25,tendril:1,bioSphere:1,exoPlate:.25,twistedColumn:1,organicArch:1,bioConduit:1,chitinPlate:.25,boneArch:1,skullFragment:.75,alienCorridor:1,biomassCluster:.75,nervousSystem:1,carapace:.5,pulsatingOrb:1,xenoSpire:1,organicGrowth:.75,bioReactor:1},sg={slabTop:.5,beamX:.25,beam2X:.375,beam4X:.4375,beamZ:.25,beam2Z:.375,beam4Z:.4375,beamDiag:.375,wedgeTop:0,wedgeLowTop:.5,wedgeFlatTop:.75,wedge4x2Top:0,wedge2x2Top:0,wedgeHalfTop:0,slabSlopeTop:.75,ledge:.75,capital:.75},kM={cube:t=>new y(t.w,t.h,t.d),slab:t=>new y(t.w,t.h/2,t.d),slabTop:t=>new y(t.w,t.h/2,t.d),pillar:t=>new y(t.w/2,t.h,t.d/2),pillar2:t=>new y(t.w/4,t.h,t.d/4),pillar4:t=>new y(t.w/8,t.h,t.d/8),beamX:t=>new y(t.w,t.h/2,t.d/2),beam2X:t=>new y(t.w,t.h/4,t.d/4),beam4X:t=>new y(t.w,t.h/8,t.d/8),beamZ:t=>new y(t.w/2,t.h/2,t.d),beam2Z:t=>new y(t.w/4,t.h/4,t.d),beam4Z:t=>new y(t.w/8,t.h/8,t.d),wall:t=>new y(t.w,t.h,t.d/2),wall4:t=>new y(t.w,t.h,t.d/4),wall8:t=>new y(t.w,t.h,t.d/8),panel:t=>new y(t.w,t.h,t.d/16),wallFront:t=>{const e=new y(t.w,t.h,t.d/4);return e.translate(0,0,t.d/2-t.d/8),e},wallBack:t=>{const e=new y(t.w,t.h,t.d/4);return e.translate(0,0,-t.d/2+t.d/8),e},wedge:t=>$t(t.w,t.h,t.d,1),wedgeLow:t=>$t(t.w,t.h/2,t.d,1),wedgeFlat:t=>$t(t.w,t.h/4,t.d,1),wedgeTop:t=>Bn(t.w,t.h,t.d,1),wedgeLowTop:t=>Bn(t.w,t.h/2,t.d,1),wedgeFlatTop:t=>Bn(t.w,t.h/4,t.d,1),wedgeCorner:t=>Ys(t.w,t.h,t.d),wedge4x2:t=>$t(t.w*4,t.h,t.d*2,1),wedge4x2Top:t=>Bn(t.w*4,t.h,t.d*2,1),wedge2x2:t=>$t(t.w*2,t.h,t.d*2,1),wedge2x2Top:t=>Bn(t.w*2,t.h,t.d*2,1),wedgeHalf:t=>$t(t.w/2,t.h,t.d,1),wedgeHalfTop:t=>Bn(t.w/2,t.h,t.d,1),wedgeCornerLow:t=>Ys(t.w,t.h/2,t.d),wedgeCornerFlat:t=>Ys(t.w,t.h/4,t.d),stairs:t=>qs(t.w,t.h,t.d,2),stairs4:t=>qs(t.w,t.h,t.d,4),stairs8:t=>qs(t.w,t.h,t.d,8),cylinder:t=>{const e=Math.min(t.w,t.d)/2;return new ee(e,e,t.h,16)},cylinderHalf:t=>{const e=Math.min(t.w,t.d)/2;return new ee(e,e,t.h,16,1,!1,0,Math.PI)},cone:t=>{const e=Math.min(t.w,t.d)/2;return new mt(e,t.h,16)},sphere:t=>{const e=Math.min(t.w,t.h,t.d)/2;return new Ye(e,16,12)},dome:t=>{const e=Math.min(t.w,t.d)/2;return new Ye(e,16,8,0,Math.PI*2,0,Math.PI/2)},quarter:t=>new y(t.w/2,t.h/2,t.d/2),quarterTall:t=>new y(t.w/2,t.h,t.d/2),halfX:t=>new y(t.w/2,t.h,t.d),halfZ:t=>new y(t.w,t.h,t.d/2),halfCorner:t=>new y(t.w/2,t.h,t.d/2),pillarRound:t=>{const e=Math.min(t.w,t.d)/4;return new ee(e,e,t.h,12)},pillarRound2:t=>{const e=Math.min(t.w,t.d)/8;return new ee(e,e,t.h,8)},beamDiag:t=>Y_(t.w,t.h/4,t.d/4),beamXLow:t=>new y(t.w,t.h/2,t.d/2),beam2XLow:t=>new y(t.w,t.h/4,t.d/4),beamZLow:t=>new y(t.w/2,t.h/2,t.d),beam2ZLow:t=>new y(t.w/4,t.h/4,t.d),arch:t=>Js(t.w,t.h,t.d,1),archLow:t=>Js(t.w,t.h,t.d,.5),archWide:t=>Js(t.w,t.h,t.d,.3),archHalf:t=>j_(t.w,t.h,t.d),wallCorner:t=>Vc(t.w,t.h,t.d,!1),wallCornerInner:t=>Vc(t.w,t.h,t.d,!0),wallJunction:t=>q_(t.w,t.h,t.d),wedgeInner:t=>J_(t.w,t.h,t.d),stairsCorner:t=>Hc(t.w,t.h,t.d,!1),stairsCornerInner:t=>Hc(t.w,t.h,t.d,!0),pyramid:t=>K_(t.w,t.h,t.d),octagon:t=>{const e=Math.min(t.w,t.d)/2;return new ee(e,e,t.h,8)},tube:t=>$_(t.w,t.h,t.d),cross:t=>ag(t.w,t.h,t.d),frame:t=>og(t.w,t.h,t.d),fence:t=>cg(t.w,t.h,t.d),fenceZ:t=>lg(t.w,t.h,t.d),fenceCorner:t=>fg(t.w,t.h,t.d),fenceCornerInner:t=>dg(t.w,t.h,t.d),fencePost:t=>pg(t.w,t.h,t.d),fenceEnd:t=>mg(t.w,t.h,t.d),fenceT:t=>gg(t.w,t.h,t.d),fenceCross:t=>_g(t.w,t.h,t.d),gate:t=>xg(t.w,t.h,t.d),gateOpen:t=>vg(t.w,t.h,t.d),gateDouble:t=>Mg(t.w,t.h,t.d),gateArch:t=>bg(t.w,t.h,t.d),railing:t=>ug(t.w,t.h,t.d),railingZ:t=>hg(t.w,t.h,t.d),railingCorner:t=>yg(t.w,t.h,t.d),railingCornerInner:t=>Sg(t.w,t.h,t.d),railingPost:t=>wg(t.w,t.h,t.d),railingEnd:t=>Eg(t.w,t.h,t.d),railingSlope:t=>Tg(t.w,t.h,t.d),railingSlopeZ:t=>Ag(t.w,t.h,t.d),picket:t=>Cg(t.w,t.h,t.d),picketZ:t=>Rg(t.w,t.h,t.d),lattice:t=>Pg(t.w,t.h,t.d),latticeZ:t=>Lg(t.w,t.h,t.d),edgeCorner:t=>Ig(t.w,t.h,t.d),edgeSlope:t=>Dg(t.w,t.h,t.d),edgeSlopeZ:t=>Ug(t.w,t.h,t.d),moldingCorner:t=>Ng(t.w,t.h,t.d),trim:t=>Fg(t.w,t.h,t.d),trimZ:t=>Og(t.w,t.h,t.d),trimCorner:t=>Bg(t.w,t.h,t.d),pipeX:t=>Ks(t.w,t.h,t.d,"X"),pipeY:t=>Ks(t.w,t.h,t.d,"Y"),pipeZ:t=>Ks(t.w,t.h,t.d,"Z"),pipeElbowXZ:t=>En(t.w,t.h,t.d,"XZ",0),pipeElbowXZ2:t=>En(t.w,t.h,t.d,"XZ",1),pipeElbowXZ3:t=>En(t.w,t.h,t.d,"XZ",2),pipeElbowXZ4:t=>En(t.w,t.h,t.d,"XZ",3),pipeElbowXY:t=>En(t.w,t.h,t.d,"XY",0),pipeElbowXY2:t=>En(t.w,t.h,t.d,"XY",1),pipeElbowYZ:t=>En(t.w,t.h,t.d,"YZ",0),pipeElbowYZ2:t=>En(t.w,t.h,t.d,"YZ",1),pipeCross:t=>zg(t.w,t.h,t.d),pipeT:t=>$s(t.w,t.h,t.d),pipeTY:t=>$s(t.w,t.h,t.d),pipeTZ:t=>$s(t.w,t.h,t.d),prism:t=>Z_(t.w,t.h,t.d),lShape:t=>Q_(t.w,t.h,t.d),tShape:t=>ex(t.w,t.h,t.d),cShape:t=>tx(t.w,t.h,t.d),ledge:t=>nx(t.w,t.h*.25,t.d),gutter:t=>ix(t.w,t.h*.25,t.d),capital:t=>rx(t.w,t.h*.25,t.d),base:t=>sx(t.w,t.h*.25,t.d),windowFrame:t=>ax(t.w,t.h,t.d),doorFrame:t=>ox(t.w,t.h,t.d),cornice:t=>kg(t.w,t.h,t.d),column:t=>Vg(t.w,t.h,t.d),baluster:t=>Hg(t.w,t.h,t.d),windowSill:t=>Gg(t.w,t.h,t.d),shingle:t=>Wg(t.w,t.h,t.d),chimney:t=>Xg(t.w,t.h,t.d),buttress:t=>Zg(t.w,t.h,t.d),bench:t=>Yg(t.w,t.h,t.d),table:t=>qg(t.w,t.h,t.d),chair:t=>Jg(t.w,t.h,t.d),barrel:t=>Kg(t.w,t.h,t.d),planter:t=>a_(t.w,t.h,t.d),ladder:t=>o_(t.w,t.h,t.d),crate:t=>$g(t.w,t.h,t.d),crateOpen:t=>jg(t.w,t.h,t.d),crateLarge:t=>Qg(t.w,t.h,t.d),pallet:t=>e_(t.w,t.h,t.d),shelfUnit:t=>t_(t.w,t.h,t.d),locker:t=>n_(t.w,t.h,t.d),cabinet:t=>i_(t.w,t.h,t.d),cardboardBox:t=>r_(t.w,t.h,t.d),sack:t=>s_(t.w,t.h,t.d),tank:t=>c_(t.w,t.h,t.d),valve:t=>l_(t.w,t.h,t.d),vent:t=>u_(t.w,t.h,t.d),iBeam:t=>h_(t.w,t.h,t.d),catwalk:t=>f_(t.w,t.h,t.d),transformer:t=>d_(t.w,t.h,t.d),powerBox:t=>p_(t.w,t.h,t.d),conduit:t=>m_(t.w,t.h,t.d),conduitCorner:t=>g_(t.w,t.h,t.d),outlet:t=>__(t.w,t.h,t.d),switchBox:t=>x_(t.w,t.h,t.d),fuseBox:t=>v_(t.w,t.h,t.d),cable:t=>M_(t.w,t.h,t.d),lightFixture:t=>A_(t.w,t.h,t.d),cableHanging:t=>C_(t.w,t.h,t.d),cableDroop:t=>R_(t.w,t.h,t.d),cableLoop:t=>P_(t.w,t.h,t.d),cableX:t=>b_(t.w,t.h,t.d),cableY:t=>y_(t.w,t.h,t.d),cableZ:t=>S_(t.w,t.h,t.d),cableElbow:t=>w_(t.w,t.h,t.d),cableElbowY:t=>E_(t.w,t.h,t.d),cableT:t=>T_(t.w,t.h,t.d),rock:t=>L_(t.w,t.h,t.d),bush:t=>I_(t.w,t.h,t.d),logX:t=>kc(t.w,t.h,t.d,"X"),logZ:t=>kc(t.w,t.h,t.d,"Z"),acUnit:t=>D_(t.w,t.h,t.d),solarPanel:t=>U_(t.w,t.h,t.d),antenna:t=>N_(t.w,t.h,t.d),barrier:t=>F_(t.w,t.h,t.d),quarterPipe:t=>O_(t.w,t.h,t.d),bowl:t=>B_(t.w,t.h,t.d),hexagon:t=>z_(t.w,t.h,t.d),roundedCube:t=>k_(t.w,t.h,t.d),chamfer:t=>V_(t.w,t.h,t.d),merlon:t=>H_(t.w,t.h,t.d),arrowSlit:t=>G_(t.w,t.h,t.d),torch:t=>W_(t.w,t.h,t.d),chain:t=>X_(t.w,t.h,t.d),rampCurved:t=>Gc(t.w,t.h,t.d),rampCurvedLow:t=>Gc(t.w,t.h/2,t.d),rampCurvedCorner:t=>cx(t.w,t.h,t.d),roofPeak:t=>Wc(t.w,t.h,t.d),roofPeakLow:t=>Wc(t.w,t.h/2,t.d),roofHip:t=>lx(t.w,t.h,t.d),slabSlope:t=>$t(t.w,t.h/4,t.d,1),slabSlopeTop:t=>Bn(t.w,t.h/4,t.d,1),channel:t=>ux(t.w,t.h/2,t.d),channelCorner:t=>hx(t.w,t.h/2,t.d),channelEnd:t=>fx(t.w,t.h/2,t.d),cubeBevel:t=>dx(t.w,t.h,t.d),step:t=>new y(t.w,t.h*.25,t.d),platform:t=>new y(t.w,t.h*.125,t.d),post:t=>new y(t.w*.25,t.h,t.d*.25),bollard:t=>new ee(t.w*.2,t.w*.25,t.h*.75,8),crossBeam:t=>mx(t.w,t.h,t.d),truss:t=>gx(t.w,t.h,t.d),parapet:t=>new y(t.w,t.h*.5,t.d*.25),crenellation:t=>_x(t.w,t.h,t.d),trianglePrism:t=>ls(t.w,t.h,t.d),triangleRight:t=>xx(t.w,t.h,t.d),triangleEqui:t=>vx(t.w,t.h,t.d),tetrahedron:t=>new ro(Math.min(t.w,t.h,t.d)*.6),pentahedron:t=>Mx(t.w,t.h,t.d),stairsSingle:t=>new y(t.w,t.h*.25,t.d*.5),landing:t=>new y(t.w,t.h*.25,t.d),spiralStep:t=>bx(t.w,t.h,t.d),torus:t=>new xt(Math.min(t.w,t.d)*.35,Math.min(t.w,t.d)*.1,8,16),capsule:t=>new Qr(Math.min(t.w,t.d)*.3,t.h*.5,4,8),hemisphere:t=>yx(t.w,t.h,t.d),egg:t=>Sx(t.w,t.h,t.d),gothicArch:t=>wx(t.w,t.h,t.d),flatArch:t=>Ex(t.w,t.h,t.d),keystone:t=>Tx(t.w,t.h,t.d),downspout:t=>new ee(t.w*.15,t.w*.15,t.h,8),star:t=>Ax(t.w,t.h,t.d),heart:t=>Cx(t.w,t.h,t.d),diamond:t=>new Lt(Math.min(t.w,t.h,t.d)*.5),cornerTrim:t=>Rx(t.w,t.h,t.d),edgeTrim:t=>new y(t.w,t.h*.25,t.d*.125),moldingX:t=>Xc(t.w,t.h*.125,t.d*.125),moldingZ:t=>Xc(t.d,t.h*.125,t.w*.125),bracket:t=>Px(t.w,t.h,t.d),finial:t=>Lx(t.w,t.h,t.d),pediment:t=>Ix(t.w,t.h,t.d),dentil:t=>new y(t.w*.2,t.h*.25,t.d*.5),awning:t=>Dx(t.w,t.h,t.d),canopy:t=>new y(t.w,t.h*.125,t.d),pergola:t=>Ux(t.w,t.h,t.d),tarp:t=>new rr(t.w,t.d),umbrella:t=>Nx(t.w,t.h,t.d),stool:t=>Fx(t.w,t.h,t.d),shelf:t=>new y(t.w,t.h*.125,t.d*.8),bed:t=>Ox(t.w,t.h,t.d),desk:t=>Bx(t.w,t.h,t.d),bin:t=>zx(t.w,t.h,t.d),dumpster:t=>kx(t.w,t.h,t.d),grateFloor:t=>Vx(t.w,t.h,t.d),ductX:t=>new y(t.w,t.h*.5,t.d*.5),ductZ:t=>new y(t.w*.5,t.h*.5,t.d),ductCorner:t=>Hx(t.w,t.h,t.d),hopper:t=>Gx(t.w,t.h,t.d),conveyor:t=>Wx(t.w,t.h,t.d),spotlight:t=>Xx(t.w,t.h,t.d),bulb:t=>new Ye(Math.min(t.w,t.d)*.3,8,6),stump:t=>new ee(t.w*.35,t.w*.4,t.h*.5,8),boulder:t=>Zx(t.w,t.h,t.d),grass:t=>Yx(t.w,t.h,t.d),flower:t=>qx(t.w,t.h,t.d),rockSmall:t=>Mv(t.w,t.h,t.d),rockLarge:t=>bv(t.w,t.h,t.d),rockFlat:t=>yv(t.w,t.h,t.d),rockTall:t=>Sv(t.w,t.h,t.d),rockJagged:t=>wv(t.w,t.h,t.d),rockCluster:t=>Ev(t.w,t.h,t.d),rockPile:t=>Tv(t.w,t.h,t.d),pebbles:t=>Av(t.w,t.h,t.d),slate:t=>Cv(t.w,t.h,t.d),crystalSmall:t=>Rv(t.w,t.h,t.d),crystalLarge:t=>Pv(t.w,t.h,t.d),crystalCluster:t=>Lv(t.w,t.h,t.d),crystalSpike:t=>Iv(t.w,t.h,t.d),crystalFlat:t=>Dv(t.w,t.h,t.d),crystalShard:t=>Uv(t.w,t.h,t.d),crystalFormation:t=>Nv(t.w,t.h,t.d),stalactite:t=>Fv(t.w,t.h,t.d),stalagmite:t=>Ov(t.w,t.h,t.d),mushroom:t=>Bv(t.w,t.h,t.d),mushroomCluster:t=>zv(t.w,t.h,t.d),moss:t=>kv(t.w,t.h,t.d),vine:t=>Vv(t.w,t.h,t.d),coral:t=>Hv(t.w,t.h,t.d),trafficCone:t=>new mt(t.w*.3,t.h*.75,8),sign:t=>Jx(t.w,t.h,t.d),monitor:t=>Kx(t.w,t.h,t.d),speaker:t=>$x(t.w,t.h,t.d),gem:t=>jx(t.w,t.h,t.d),crystal:t=>Qx(t.w,t.h,t.d),pill:t=>new Qr(Math.min(t.w,t.d)*.25,t.h*.25,4,8),rampStraight:t=>$t(t.w,t.h,t.d,1),rampWide:t=>$t(t.w*2,t.h,t.d,1),roofCorner:t=>ev(t.w,t.h,t.d),roofValley:t=>tv(t.w,t.h,t.d),gable:t=>nv(t.w,t.h,t.d),drain:t=>iv(t.w,t.h,t.d),grate:t=>rv(t.w,t.h,t.d),shield:t=>sv(t.w,t.h,t.d),banner:t=>av(t.w,t.h,t.d),portcullis:t=>ov(t.w,t.h,t.d),wheel:t=>new xt(Math.min(t.w,t.d)*.4,Math.min(t.w,t.d)*.1,8,16),axle:t=>new ee(t.w*.05,t.w*.05,t.d,8),seat:t=>cv(t.w,t.h,t.d),hull:t=>lv(t.w,t.h,t.d),propeller:t=>uv(t.w,t.h,t.d),wing:t=>hv(t.w,t.h,t.d),derrickLeg:t=>fv(t.w,t.h,t.d),derrickCross:t=>dv(t.w,t.h,t.d),derrickPlatform:t=>pv(t.w,t.h,t.d),pumpJack:t=>mv(t.w,t.h,t.d),pumpBase:t=>new y(t.w*.8,t.h*.25,t.d*.6),oilTank:t=>gv(t.w,t.h,t.d),oilTankSmall:t=>_v(t.w,t.h,t.d),wellHead:t=>xv(t.w,t.h,t.d),pipelineX:t=>new ee(t.h*.3,t.h*.3,t.w,12).rotateZ(Math.PI/2),pipelineZ:t=>new ee(t.h*.3,t.h*.3,t.d,12).rotateX(Math.PI/2),oilBarrel:t=>vv(t.w,t.h,t.d),bioTube:t=>Gv(t.w,t.h,t.d),vertebra:t=>Wv(t.w,t.h,t.d),ribCage:t=>Xv(t.w,t.h,t.d),spineSegment:t=>Zv(t.w,t.h,t.d),organicPipe:t=>Yv(t.w,t.h,t.d),biomechPanel:t=>qv(t.w,t.h,t.d),alienVent:t=>Jv(t.w,t.h,t.d),membrane:t=>Kv(t.w,t.h,t.d),tendril:t=>$v(t.w,t.h,t.d),bioSphere:t=>jv(t.w,t.h,t.d),exoPlate:t=>Qv(t.w,t.h,t.d),twistedColumn:t=>eM(t.w,t.h,t.d),organicArch:t=>tM(t.w,t.h,t.d),bioConduit:t=>nM(t.w,t.h,t.d),chitinPlate:t=>iM(t.w,t.h,t.d),boneArch:t=>rM(t.w,t.h,t.d),skullFragment:t=>sM(t.w,t.h,t.d),alienCorridor:t=>aM(t.w,t.h,t.d),biomassCluster:t=>oM(t.w,t.h,t.d),nervousSystem:t=>cM(t.w,t.h,t.d),carapace:t=>lM(t.w,t.h,t.d),pulsatingOrb:t=>uM(t.w,t.h,t.d),xenoSpire:t=>hM(t.w,t.h,t.d),organicGrowth:t=>fM(t.w,t.h,t.d),bioReactor:t=>dM(t.w,t.h,t.d)};function $t(t,e,n,i=1){const r=t/2,s=e/2,a=n/2,c=new Float32Array([r,-s,a,r,-s,-a,r,s,-a,-r,-s,-a,-r,-s,a,-r,s,-a,0,s,0,0,s,0,0,s,0,-r,-s,-a,r,-s,-a,r,-s,a,-r,-s,-a,r,-s,a,-r,-s,a,-r,-s,a,r,-s,a,r,s,-a,-r,-s,a,r,s,-a,-r,s,-a,-r,-s,-a,-r,s,-a,r,-s,-a,r,-s,-a,-r,s,-a,r,s,-a]),o=new ke;return o.setAttribute("position",new qe(c,3)),o.addGroup(0,3,0),o.addGroup(3,3,1),o.addGroup(6,3,2),o.addGroup(9,6,3),o.addGroup(15,6,4),o.addGroup(21,6,5),o.computeVertexNormals(),o}function Bn(t,e,n,i=1){const r=t/2,s=e/2,a=n/2,c=new Float32Array([r,s,a,r,-s,a,r,s,-a,-r,s,-a,-r,s,a,-r,-s,a,-r,s,-a,r,s,a,r,s,-a,-r,s,-a,-r,s,a,r,s,a,0,-s,0,0,-s,0,0,-s,0,-r,-s,a,r,-s,a,r,s,a,-r,-s,a,r,s,a,-r,s,a,-r,s,-a,-r,-s,a,r,-s,a,-r,s,-a,r,-s,a,r,s,-a]),o=new ke;return o.setAttribute("position",new qe(c,3)),o.addGroup(0,3,0),o.addGroup(3,3,1),o.addGroup(6,6,2),o.addGroup(12,3,3),o.addGroup(15,6,4),o.addGroup(21,6,5),o.computeVertexNormals(),o}function Ys(t,e,n){const i=t/2,r=e/2,s=n/2,a=new Float32Array([i,-r,-s,i,r,-s,i,-r,s,0,0,0,0,0,0,0,0,0,0,r,0,0,r,0,0,r,0,-i,-r,-s,i,-r,-s,i,-r,s,-i,-r,-s,i,-r,s,-i,-r,s,-i,-r,-s,-i,-r,s,i,r,-s,-i,-r,s,i,-r,s,i,r,-s,-i,-r,-s,i,r,-s,i,-r,-s]),c=new ke;return c.setAttribute("position",new qe(a,3)),c.addGroup(0,3,0),c.addGroup(3,3,1),c.addGroup(6,3,2),c.addGroup(9,6,3),c.addGroup(15,6,4),c.addGroup(21,3,5),c.computeVertexNormals(),c}function qs(t,e,n,i){const r=e/i,s=n/i,a=[];for(let o=0;o<i;o++){const l=r*(o+1),u=new y(t,l,s),h=l/2-e/2,f=n/2-s/2-o*s;u.translate(0,h,f),a.push(u)}const c=K(a);return a.forEach(o=>o.dispose()),c}function Le(t){if(!t||t.length===0)return new y(1,1,1);try{const e=t.map(i=>{if(!i)return new y(.1,.1,.1).toNonIndexed();let r=i.index?i.toNonIndexed():i.clone();if(!r.attributes.uv){const s=r.attributes.position.count,a=new Float32Array(s*2);r.setAttribute("uv",new qe(a,2))}return r}),n=K(e);return e.forEach(i=>i.dispose()),n||(console.warn("mergeGeometries returned null, using fallback"),new y(1,1,1))}catch(e){return console.warn("safeMergeGeometries error:",e),new y(1,1,1)}}function Js(t,e,n,i=1){const r=t*.15,s=t/2,a=s*i,c=Math.min(a,e*.8),o=e-c,l=t-r*2,u=l/2,h=Math.max(0,c-r),f=new Ii,d=12;f.moveTo(-t/2,-e/2),f.lineTo(-t/2,-e/2+o);for(let m=0;m<=d;m++){const p=Math.PI-m/d*Math.PI,w=Math.cos(p)*s,v=-e/2+o+Math.sin(p)*c;f.lineTo(w,v)}if(f.lineTo(t/2,-e/2),f.lineTo(-t/2,-e/2),l>0&&h>0){const m=new Ti;m.moveTo(-u,-e/2),m.lineTo(-u,-e/2+o);for(let p=0;p<=d;p++){const w=Math.PI-p/d*Math.PI,v=Math.cos(w)*u,x=-e/2+o+Math.sin(w)*h;m.lineTo(v,x)}m.lineTo(u,-e/2),m.lineTo(-u,-e/2),f.holes.push(m)}const g={steps:1,depth:n,bevelEnabled:!1},_=new Kn(f,g);return _.translate(0,0,-n/2),_}function ag(t,e,n){const i=t/3,r=[],s=new y(t,e,i);r.push(s);const a=new y(i,e,n);r.push(a);const c=K(r);return r.forEach(o=>o.dispose()),c}function og(t,e,n){const i=Math.min(t,n)/8,r=[],s=new y(t,i,n);s.translate(0,(e-i)/2,0),r.push(s);const a=new y(t,i,n);a.translate(0,-(e-i)/2,0),r.push(a);const c=new y(i,e-i*2,n);c.translate(-(t-i)/2,0,0),r.push(c);const o=new y(i,e-i*2,n);o.translate((t-i)/2,0,0),r.push(o);const l=K(r);return r.forEach(u=>u.dispose()),l}function cg(t,e,n){const i=t/16,r=t/4,s=[],a=new y(t,e/8,n/4);a.translate(0,e*.375,0),s.push(a);const c=new y(t,e/8,n/4);c.translate(0,-e*.125,0),s.push(c);const o=Math.floor(t/r)+1;for(let u=0;u<o;u++){const h=-t/2+i/2+u*r;if(h>t/2-i/2)break;const f=new y(i,e,n/4);f.translate(h,0,0),s.push(f)}const l=K(s);return s.forEach(u=>u.dispose()),l}function lg(t,e,n){const i=n/16,r=n/4,s=[],a=new y(t/4,e/8,n);a.translate(0,e*.375,0),s.push(a);const c=new y(t/4,e/8,n);c.translate(0,-e*.125,0),s.push(c);const o=Math.floor(n/r)+1;for(let u=0;u<o;u++){const h=-n/2+i/2+u*r;if(h>n/2-i/2)break;const f=new y(t/4,e,i);f.translate(0,0,h),s.push(f)}const l=K(s);return s.forEach(u=>u.dispose()),l}function ug(t,e,n){const i=[],r=t/10,s=new y(t,e/6,n/4);s.translate(0,e*.4,0),i.push(s);const a=new y(r,e,r);a.translate(-t/2+r/2,0,0),i.push(a);const c=new y(r,e,r);c.translate(t/2-r/2,0,0),i.push(c);const o=K(i);return i.forEach(l=>l.dispose()),o}function hg(t,e,n){const i=[],r=n/10,s=new y(t/4,e/6,n);s.translate(0,e*.4,0),i.push(s);const a=new y(r,e,r);a.translate(0,0,-n/2+r/2),i.push(a);const c=new y(r,e,r);c.translate(0,0,n/2-r/2),i.push(c);const o=K(i);return i.forEach(l=>l.dispose()),o}function fg(t,e,n){const i=Math.min(t,n)/16,r=[],s=new y(t/2,e/8,n/4);s.translate(t/4,e*.375,0),r.push(s);const a=new y(t/4,e/8,n/2);a.translate(0,e*.375,n/4),r.push(a);const c=new y(i*2,e,i*2);return r.push(c),Le(r)}function dg(t,e,n){const i=Math.min(t,n)/16,r=[],s=new y(t/2,e/8,n/4);s.translate(-t/4,e*.375,0),r.push(s);const a=new y(t/4,e/8,n/2);a.translate(0,e*.375,-n/4),r.push(a);const c=new y(i*2,e,i*2);return r.push(c),Le(r)}function pg(t,e,n){const i=Math.min(t,n)/4;return new y(i,e,i)}function mg(t,e,n){const i=t/16,r=[],s=new y(t/2,e/8,n/4);s.translate(-t/4,e*.375,0),r.push(s);const a=new y(i*2,e,i*2);return r.push(a),Le(r)}function gg(t,e,n){const i=Math.min(t,n)/16,r=[],s=new y(t,e/8,n/4);s.translate(0,e*.375,0),r.push(s);const a=new y(t/4,e/8,n/2);a.translate(0,e*.375,n/4),r.push(a);const c=new y(i*2,e,i*2);return r.push(c),Le(r)}function _g(t,e,n){const i=Math.min(t,n)/16,r=[],s=new y(t,e/8,n/4);s.translate(0,e*.375,0),r.push(s);const a=new y(t/4,e/8,n);a.translate(0,e*.375,0),r.push(a);const c=new y(i*2,e,i*2);return r.push(c),Le(r)}function xg(t,e,n){const i=t/10,r=[];return r.push(new y(i,e,n/4).translate(-t/2+i/2,0,0)),r.push(new y(i,e,n/4).translate(t/2-i/2,0,0)),r.push(new y(t-i*2,i,n/4).translate(0,e/2-i/2,0)),r.push(new y(t-i*2,i,n/4).translate(0,-e/2+i/2,0)),r.push(new y(t-i*2,i/2,n/8).translate(0,0,0)),Le(r)}function vg(t,e,n){const i=t/10,r=[];return r.push(new y(i,e,n/4).translate(-t/2+i/2,0,0)),r.push(new y(t-i,e,n/4).translate(-t/2+i+(t-i)/2,0,-n/2+n/8)),Le(r)}function Mg(t,e,n){const i=t/12,r=[];return r.push(new y(i,e,n/4).translate(-t/2+i/2,0,0)),r.push(new y(i,e,n/4).translate(t/2-i/2,0,0)),r.push(new y(i/2,e,n/4).translate(0,0,0)),r.push(new y(t,i,n/4).translate(0,e/2-i/2,0)),Le(r)}function bg(t,e,n){const i=t/10,r=[];r.push(new y(i,e*.7,n/4).translate(-t/2+i/2,-e*.15,0)),r.push(new y(i,e*.7,n/4).translate(t/2-i/2,-e*.15,0));const s=new xt((t-i)/2,i/2,4,8,Math.PI);return s.rotateX(Math.PI/2),s.translate(0,e*.2,0),r.push(s),Le(r)}function yg(t,e,n){const i=Math.min(t,n)/10,r=[];return r.push(new y(t/2,e/6,n/4).translate(t/4,e*.4,0)),r.push(new y(t/4,e/6,n/2).translate(0,e*.4,n/4)),r.push(new y(i,e,i)),Le(r)}function Sg(t,e,n){const i=Math.min(t,n)/10,r=[];return r.push(new y(t/2,e/6,n/4).translate(-t/4,e*.4,0)),r.push(new y(t/4,e/6,n/2).translate(0,e*.4,-n/4)),r.push(new y(i,e,i)),Le(r)}function wg(t,e,n){const i=Math.min(t,n)/6,r=[];return r.push(new y(i,e,i)),r.push(new y(i*1.5,e/10,i*1.5).translate(0,e/2+e/20,0)),Le(r)}function Eg(t,e,n){const i=t/10,r=[];return r.push(new y(t/2,e/6,n/4).translate(-t/4,e*.4,0)),r.push(new y(i,e,i)),Le(r)}function Tg(t,e,n){const i=t/10,r=[],s=new y(t*1.1,e/6,n/4);return s.rotateZ(Math.atan2(e*.3,t)),r.push(s),r.push(new y(i,e*.7,i).translate(-t/2+i/2,-e*.15,0)),r.push(new y(i,e,i).translate(t/2-i/2,0,0)),Le(r)}function Ag(t,e,n){const i=n/10,r=[],s=new y(t/4,e/6,n*1.1);return s.rotateX(-Math.atan2(e*.3,n)),r.push(s),r.push(new y(i,e*.7,i).translate(0,-e*.15,-n/2+i/2)),r.push(new y(i,e,i).translate(0,0,n/2-i/2)),Le(r)}function Cg(t,e,n){const i=t/8,r=t/4,s=[],a=Math.floor(t/r)+1;for(let c=0;c<a;c++){const o=-t/2+i/2+c*r;if(o>t/2-i/2)break;const l=new y(i,e*.9,n/4);l.translate(o,-e*.05,0),s.push(l);const u=new mt(i/2,e*.15,4);u.translate(o,e*.425,0),s.push(u)}return Le(s)}function Rg(t,e,n){const i=n/8,r=n/4,s=[],a=Math.floor(n/r)+1;for(let c=0;c<a;c++){const o=-n/2+i/2+c*r;if(o>n/2-i/2)break;const l=new y(t/4,e*.9,i);l.translate(0,-e*.05,o),s.push(l);const u=new mt(i/2,e*.15,4);u.translate(0,e*.425,o),s.push(u)}return Le(s)}function Pg(t,e,n){const i=t/20,r=t/6,s=[];for(let a=-2;a<=2;a++){const c=new y(i,e*1.4,n/8);c.rotateZ(Math.PI/4),c.translate(a*r*.7,0,0),s.push(c)}for(let a=-2;a<=2;a++){const c=new y(i,e*1.4,n/8);c.rotateZ(-Math.PI/4),c.translate(a*r*.7,0,0),s.push(c)}return s.push(new y(t,i*2,n/8).translate(0,e/2-i,0)),s.push(new y(t,i*2,n/8).translate(0,-e/2+i,0)),Le(s)}function Lg(t,e,n){const i=n/20,r=n/6,s=[];for(let a=-2;a<=2;a++){const c=new y(t/8,e*1.4,i);c.rotateX(Math.PI/4),c.translate(0,0,a*r*.7),s.push(c)}for(let a=-2;a<=2;a++){const c=new y(t/8,e*1.4,i);c.rotateX(-Math.PI/4),c.translate(0,0,a*r*.7),s.push(c)}return s.push(new y(t/8,i*2,n).translate(0,e/2-i,0)),s.push(new y(t/8,i*2,n).translate(0,-e/2+i,0)),Le(s)}function Ig(t,e,n){const i=Math.min(t,n)/4,r=[];return r.push(new y(t/2,e*.25,i).translate(t/4,0,-n/2+i/2)),r.push(new y(i,e*.25,n/2).translate(-t/2+i/2,0,n/4)),Le(r)}function Dg(t,e,n){const i=new Ii;i.moveTo(-t/2,0),i.lineTo(t/2,e*.25),i.lineTo(t/2,0),i.lineTo(-t/2,0);const r={steps:1,depth:n/4,bevelEnabled:!1},s=new Kn(i,r);return s.translate(0,-e*.125,-n/8),s}function Ug(t,e,n){const i=new Ii;i.moveTo(-n/2,0),i.lineTo(n/2,e*.25),i.lineTo(n/2,0),i.lineTo(-n/2,0);const r={steps:1,depth:t/4,bevelEnabled:!1},s=new Kn(i,r);return s.rotateY(Math.PI/2),s.translate(-t/8,-e*.125,0),s}function Ng(t,e,n){const i=Math.min(t,n)/4,r=[];return r.push(new y(t/2,e*.125,i/2).translate(t/4,0,-n/2+i/4)),r.push(new y(i/2,e*.125,n/2).translate(-t/2+i/4,0,n/4)),Le(r)}function Fg(t,e,n){return new y(t,e*.125,n/8)}function Og(t,e,n){return new y(t/8,e*.125,n)}function Bg(t,e,n){const i=[];return i.push(new y(t/2,e*.125,n/8).translate(t/4,0,-n/2+n/16)),i.push(new y(t/8,e*.125,n/2).translate(-t/2+t/16,0,n/4)),Le(i)}function Ks(t,e,n,i){const r=Math.min(t,e,n)/4,s=8;switch(i){case"X":return new ee(r,r,t,s).rotateZ(Math.PI/2);case"Y":return new ee(r,r,e,s);case"Z":return new ee(r,r,n,s).rotateX(Math.PI/2);default:return new ee(r,r,e,s)}}function En(t,e,n,i,r){const s=Math.min(t,e,n),a=s/4,c=s/2,o=12,l=8,u=new xt(c,a,l,o,Math.PI/2);if(i==="XZ"){u.rotateX(Math.PI/2);const h=[Math.PI,-Math.PI/2,0,Math.PI/2];u.rotateY(h[r]||0)}else i==="XY"?r===1&&u.rotateY(Math.PI):i==="YZ"&&(u.rotateY(Math.PI/2),r===1&&u.rotateY(Math.PI));return u}function zg(t,e,n){const i=Math.min(t,e,n)/4,r=8,s=[],a=new ee(i,i,t,r);a.rotateZ(Math.PI/2),s.push(a);const c=new ee(i,i,n,r);c.rotateX(Math.PI/2),s.push(c);const o=K(s);return s.forEach(l=>l.dispose()),o}function $s(t,e,n){const i=Math.min(t,e,n)/4,r=8,s=[],a=new ee(i,i,t,r);a.rotateZ(Math.PI/2),s.push(a);const c=new ee(i,i,n/2,r);c.rotateX(Math.PI/2),c.translate(0,0,n/4),s.push(c);const o=K(s);return s.forEach(l=>l.dispose()),o}function kg(t,e,n){const i=[],r=new y(t,e*.5,n*.6);r.translate(0,e*.25,n*.2),i.push(r);const s=new y(t,e*.3,n*.3);s.translate(0,e*.1,-n*.35),i.push(s);const a=K(i);return i.forEach(c=>c.dispose()),a}function Vg(t,e,n){const i=[],r=Math.min(t,n)/3,s=new ee(r*1.2,r*1.3,e*.1,12);s.translate(0,-e*.45,0),i.push(s);const a=new ee(r,r,e*.75,12);i.push(a);const c=new ee(r*1.3,r*1.1,e*.15,12);c.translate(0,e*.425,0),i.push(c);const o=K(i);return i.forEach(l=>l.dispose()),o}function Hg(t,e,n){const i=[],r=Math.min(t,n)/4,s=new ee(r*1.5,r*1.5,e*.1,8);s.translate(0,-e*.45,0),i.push(s);const a=new Ye(r*1.3,8,6);a.translate(0,-e*.25,0),i.push(a);const c=new ee(r*.6,r*.6,e*.5,8);i.push(c);const o=new Ye(r*1.1,8,6);o.translate(0,e*.25,0),i.push(o);const l=new ee(r*1.5,r*1.5,e*.1,8);l.translate(0,e*.45,0),i.push(l);const u=K(i);return i.forEach(h=>h.dispose()),u}function Gg(t,e,n){const i=new y(t*1.1,e,n*.4);return i.translate(0,0,-n*.3),i}function Wg(t,e,n){const i=t/2,r=e/2,s=n/2,a=new Float32Array([-i,-r,-s,i,-r,-s,i,r,-s,-i,-r,-s,i,r,-s,-i,r,-s,-i,-r,s,i,-r,s,i,-r,-s,-i,-r,s,i,-r,-s,-i,-r,-s,-i,r,-s,i,r,-s,i,-r,s,-i,r,-s,i,-r,s,-i,-r,s,-i,-r,s,-i,-r,-s,-i,r,-s,i,-r,-s,i,-r,s,i,r,-s]),c=new ke;return c.setAttribute("position",new qe(a,3)),c.computeVertexNormals(),c}function Xg(t,e,n){const i=[],r=new y(t*.7,e*.9,n*.7);r.translate(0,-e*.05,0),i.push(r);const s=new y(t*.9,e*.1,n*.9);s.translate(0,e*.45,0),i.push(s);const a=K(i);return i.forEach(c=>c.dispose()),a}function Zg(t,e,n){const i=t/2,r=e/2,s=n/2,a=new Float32Array([-i,-r,-s,i,-r,-s,i,-r,s,-i,-r,-s,i,-r,s,-i,-r,s,-i,-r,-s,-i,r,-s,i,r,-s,-i,-r,-s,i,r,-s,i,-r,-s,-i,-r,s,i,-r,s,i,r,-s,-i,-r,s,i,r,-s,-i,r,-s,-i,-r,-s,-i,-r,s,-i,r,-s,i,-r,s,i,-r,-s,i,r,-s]),c=new ke;return c.setAttribute("position",new qe(a,3)),c.computeVertexNormals(),c}function Yg(t,e,n){const i=[],r=new y(t,e*.2,n);r.translate(0,e*.4,0),i.push(r);const s=t*.1,a=e*.8,c=new y(s,a,n*.8);c.translate(-t*.4,-e*.1,0),i.push(c);const o=new y(s,a,n*.8);o.translate(t*.4,-e*.1,0),i.push(o);const l=K(i);return i.forEach(u=>u.dispose()),l}function qg(t,e,n){const i=[],r=new y(t,e*.1,n);r.translate(0,e*.45,0),i.push(r);const s=Math.min(t,n)*.1,a=e*.9;[[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([l,u])=>{const h=new y(s,a,s);h.translate(l*(t*.4),-e*.05,u*(n*.4)),i.push(h)});const o=K(i);return i.forEach(l=>l.dispose()),o}function Jg(t,e,n){const i=[],r=new y(t*.9,e*.1,n*.9);r.translate(0,-e*.1,0),i.push(r);const s=new y(t*.9,e*.5,n*.1);s.translate(0,e*.2,-n*.4),i.push(s);const a=t*.08,c=e*.4;[[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([u,h])=>{const f=new y(a,c,a);f.translate(u*(t*.35),-e*.35,h*(n*.35)),i.push(f)});const l=K(i);return i.forEach(u=>u.dispose()),l}function Kg(t,e,n){const i=Math.min(t,n)/2.2;return new ee(i*.85,i*.85,e,12)}function $g(t,e,n){const i=[],r=new y(t*.95,e*.95,n*.95);i.push(r);const s=new y(t,e*.08,n*.08);s.translate(0,e*.3,n*.45),i.push(s);const a=s.clone();a.translate(0,-e*.3,0),i.push(a);const c=K(i);return i.forEach(o=>o.dispose()),c}function jg(t,e,n){const i=[],s=new y(t*.9,e*.06,n*.9);s.translate(0,-e*.45,0),i.push(s);const a=new y(t*.9,e*.9,.06*t);a.translate(0,0,n*.4),i.push(a);const c=a.clone();c.translate(0,0,-n*.8),i.push(c);const o=new y(.06*t,e*.9,n*.9);o.translate(-t*.4,0,0),i.push(o);const l=o.clone();l.translate(t*.8,0,0),i.push(l);const u=K(i);return i.forEach(h=>h.dispose()),u}function Qg(t,e,n){const i=[],r=new y(t,e,n);i.push(r);const s=.15;[[-1,-1,-1],[1,-1,-1],[-1,-1,1],[1,-1,1],[-1,1,-1],[1,1,-1],[-1,1,1],[1,1,1]].forEach(([o,l,u])=>{const h=new y(t*s,e*s,n*s);h.translate(o*t*.45,l*e*.45,u*n*.45),i.push(h)});const c=K(i);return i.forEach(o=>o.dispose()),c}function e_(t,e,n){const i=[],r=e*.3,s=t*.15;for(let c=-1;c<=1;c++){const o=new y(t*.28,r,n);o.translate(c*s*2,e*.35,0),i.push(o)}for(let c=-1;c<=1;c++){const o=new y(t*.15,e*.5,n*.15);o.translate(c*t*.35,-e*.1,0),i.push(o)}const a=K(i);return i.forEach(c=>c.dispose()),a}function t_(t,e,n){const i=[];for(let u=0;u<4;u++){const h=new y(t*.95,e*.05,n*.9);h.translate(0,-e*.4+u*e*.3,0),i.push(h)}const s=new y(t*.05,e,n*.1);s.translate(-t*.45,0,n*.4),i.push(s);const a=s.clone();a.translate(t*.9,0,0),i.push(a);const c=s.clone();c.translate(0,0,-n*.8),i.push(c);const o=c.clone();o.translate(t*.9,0,0),i.push(o);const l=K(i);return i.forEach(u=>u.dispose()),l}function n_(t,e,n){const i=[],r=new y(t*.95,e,n*.95);i.push(r);const s=new y(t*.02,e*.9,n*.85);s.translate(t*.48,0,0),i.push(s);const a=new y(t*.05,e*.15,n*.05);a.translate(t*.5,e*.1,n*.3),i.push(a);for(let o=-1;o<=1;o++){const l=new y(t*.03,e*.05,n*.4);l.translate(t*.5,e*.35+o*e*.08,0),i.push(l)}const c=K(i);return i.forEach(o=>o.dispose()),c}function i_(t,e,n){const i=[],r=new y(t,e,n);i.push(r);const s=t*.48,a=new y(t*.02,e*.95,s);a.translate(t*.5,0,n*.2),i.push(a);const c=a.clone();c.translate(0,0,-n*.4),i.push(c);const o=new y(t*.05,e*.1,n*.03);o.translate(t*.52,0,n*.05),i.push(o);const l=o.clone();l.translate(0,0,-n*.1),i.push(l);const u=K(i);return i.forEach(h=>h.dispose()),u}function r_(t,e,n){const i=[],r=new y(t*.95,e*.85,n*.95);r.translate(0,-e*.075,0),i.push(r);const s=new y(t*.9,e*.02,n*.35);s.translate(0,e*.35,n*.25),i.push(s);const a=s.clone();a.translate(0,0,-n*.5),i.push(a);const c=K(i);return i.forEach(o=>o.dispose()),c}function s_(t,e,n){const i=Math.min(t,n)/2,r=new Ye(i,8,6,0,Math.PI*2,0,Math.PI*.6);return r.scale(1,e/i*.7,1),r.translate(0,-e*.15,0),r}function a_(t,e,n){return new y(t,e,n)}function o_(t,e,n){const i=[],r=t*.1,s=new y(r,e,n*.1);s.translate(-t*.35,0,0),i.push(s);const a=new y(r,e,n*.1);a.translate(t*.35,0,0),i.push(a);const c=5;for(let l=0;l<c;l++){const u=new y(t*.6,e*.06,n*.08);u.translate(0,-e*.4+l*e*.2,0),i.push(u)}const o=K(i);return i.forEach(l=>l.dispose()),o}function c_(t,e,n){const i=Math.min(t,n)/2.5;return new ee(i,i,e*.9,16)}function l_(t,e,n){const i=[],r=Math.min(t,n)/3,s=new xt(r,r*.15,8,16);s.rotateX(Math.PI/2),i.push(s);for(let o=0;o<4;o++){const l=new y(r*2,r*.12,r*.12);l.rotateY(o*Math.PI/4),i.push(l)}const a=new ee(r*.2,r*.2,e*.5,8);a.translate(0,-e*.25,0),i.push(a);const c=K(i);return i.forEach(o=>o.dispose()),c}function u_(t,e,n){const i=[],r=new y(t,e,n*.1);i.push(r);const s=5;for(let c=0;c<s;c++){const o=new y(t*.9,e*.08,n*.3);o.rotateX(Math.PI*.15),o.translate(0,-e*.35+c*e*.18,n*.1),i.push(o)}const a=K(i);return i.forEach(c=>c.dispose()),a}function h_(t,e,n){const i=[],r=e*.15,s=t*.3,a=new y(t,r,n);a.translate(0,e*.425,0),i.push(a);const c=new y(t,r,n);c.translate(0,-e*.425,0),i.push(c);const o=new y(s,e*.7,n);i.push(o);const l=K(i);return i.forEach(u=>u.dispose()),l}function f_(t,e,n){const i=[],r=new y(t,e*.1,n);r.translate(0,e*.45,0),i.push(r);const s=new y(t,e*.15,n*.1);s.translate(0,e*.35,-n*.35),i.push(s);const a=new y(t,e*.15,n*.1);a.translate(0,e*.35,n*.35),i.push(a);const c=K(i);return i.forEach(o=>o.dispose()),c}function d_(t,e,n){const i=[],r=new y(t*.8,e*.7,n*.8);r.translate(0,-e*.15,0),i.push(r);for(let a=-1;a<=1;a+=2){const c=new ee(t*.08,t*.1,e*.3,8);c.translate(a*t*.25,e*.3,0),i.push(c)}for(let a=-2;a<=2;a++){const c=new y(t*.05,e*.5,n*.9);c.translate(t*.45,-e*.15,a*n*.15),i.push(c)}const s=K(i);return i.forEach(a=>a.dispose()),s}function p_(t,e,n){const i=[],r=new y(t*.9,e,n*.5);i.push(r);const s=new y(t*.02,e*.85,n*.4);s.translate(t*.45,0,0),i.push(s);const a=new y(t*.03,e*.3,n*.3);a.translate(t*.47,e*.2,0),i.push(a);const c=K(i);return i.forEach(o=>o.dispose()),c}function m_(t,e,n){const i=Math.min(t,n)*.15,r=new ee(i,i,t,8);return r.rotateZ(Math.PI/2),r}function g_(t,e,n){const i=[],r=Math.min(t,n)*.15,s=new ee(r,r,t*.4,8);s.rotateZ(Math.PI/2),s.translate(-t*.3,0,0),i.push(s);const a=new ee(r,r,e*.4,8);a.translate(0,e*.2,0),i.push(a);const c=new Ye(r*1.2,8,8);i.push(c);const o=K(i);return i.forEach(l=>l.dispose()),o}function __(t,e,n){const i=[],r=new y(t*.6,e,n*.1);i.push(r);for(let a=-1;a<=1;a+=2){const c=new y(t*.08,e*.15,n*.05);c.translate(a*t*.12,e*.15,n*.05),i.push(c);const o=c.clone();o.translate(0,-e*.3,0),i.push(o)}const s=K(i);return i.forEach(a=>a.dispose()),s}function x_(t,e,n){const i=[],r=new y(t*.7,e,n*.4);i.push(r);const s=new y(t*.15,e*.4,n*.1);s.translate(0,e*.1,n*.25),i.push(s);const a=K(i);return i.forEach(c=>c.dispose()),a}function v_(t,e,n){const i=[],r=new y(t*.9,e,n*.5);i.push(r);const s=new y(t*.02,e*.9,n*.45);s.translate(t*.46,0,0),i.push(s);for(let c=-1;c<=1;c++)for(let o=-1;o<=1;o++){const l=new y(t*.15,e*.12,n*.08);l.translate(o*t*.2,c*e*.2,n*.22),i.push(l)}const a=K(i);return i.forEach(c=>c.dispose()),a}function M_(t,e,n){const i=Math.min(t,n)*.08,r=new ee(i,i,t,6);return r.rotateZ(Math.PI/2),r}function b_(t,e,n){const i=Math.min(t,n)*.06,r=new ee(i,i,t,6);return r.rotateZ(Math.PI/2),r}function y_(t,e,n){const i=Math.min(t,n)*.06;return new ee(i,i,e,6)}function S_(t,e,n){const i=Math.min(t,n)*.06,r=new ee(i,i,n,6);return r.rotateX(Math.PI/2),r}function w_(t,e,n){const i=Math.min(t,e,n),r=i*.06,s=i/2,a=new xt(s,r,6,12,Math.PI/2);return a.rotateX(Math.PI/2),a}function E_(t,e,n){const i=Math.min(t,e,n),r=i*.06,s=i/2;return new xt(s,r,6,12,Math.PI/2)}function T_(t,e,n){const i=Math.min(t,n)*.06,r=[],s=new ee(i,i,t,6);s.rotateZ(Math.PI/2),r.push(s);const a=new ee(i,i,n/2,6);a.rotateX(Math.PI/2),a.translate(0,0,n/4),r.push(a);const c=K(r);return r.forEach(o=>o.dispose()),c}function A_(t,e,n){const i=[],r=new y(t*.3,e*.3,n*.3);r.translate(0,e*.35,0),i.push(r);const s=new ee(t*.35,t*.25,e*.5,8);s.translate(0,0,0),i.push(s);const a=new ee(t*.3,t*.3,e*.1,8);a.translate(0,-e*.3,0),i.push(a);const c=K(i);return i.forEach(o=>o.dispose()),c}function C_(t,e,n){const i=Math.min(t,n)*.05,r=e*.4;class s extends Ft{getPoint(l){const u=(l-.5)*n,h=r*(Math.pow(2*l-1,2)-1);return new P(0,h,u)}}const a=new s;return new ar(a,16,i,6,!1)}function R_(t,e,n){const i=Math.min(t,n)*.05;class r extends Ft{getPoint(o){const l=e*.5-o*e,u=Math.sin(o*Math.PI)*n*.1;return new P(0,l,u)}}const s=new r;return new ar(s,12,i,6,!1)}function P_(t,e,n){const i=Math.min(t,n)*.04,r=Math.min(t,n)*.15,s=4;class a extends Ft{getPoint(u){const h=u*Math.PI*2*s,f=Math.cos(h)*r,d=Math.sin(h)*r,g=e*.4-u*e*.8;return new P(f,g,d)}}const c=new a;return new ar(c,32,i,6,!1)}function L_(t,e,n){const i=t*.4,r=e*.35,s=n*.4,a=new Float32Array([0,r,0,-i*.3,r*.7,-s*.4,i*.4,r*.6,-s*.2,0,r,0,i*.4,r*.6,-s*.2,i*.5,r*.5,s*.3,0,r,0,i*.5,r*.5,s*.3,-i*.2,r*.65,s*.5,0,r,0,-i*.2,r*.65,s*.5,-i*.6,r*.4,0,0,r,0,-i*.6,r*.4,0,-i*.3,r*.7,-s*.4,-i*.3,r*.7,-s*.4,-i*.8,-r*.2,-s*.6,i*.4,r*.6,-s*.2,i*.4,r*.6,-s*.2,-i*.8,-r*.2,-s*.6,i*.9,-r*.1,-s*.5,i*.4,r*.6,-s*.2,i*.9,-r*.1,-s*.5,i*.5,r*.5,s*.3,i*.5,r*.5,s*.3,i*.9,-r*.1,-s*.5,i*.85,-r*.15,s*.7,i*.5,r*.5,s*.3,i*.85,-r*.15,s*.7,-i*.2,r*.65,s*.5,-i*.2,r*.65,s*.5,i*.85,-r*.15,s*.7,-i*.5,-r*.1,s*.8,-i*.2,r*.65,s*.5,-i*.5,-r*.1,s*.8,-i*.6,r*.4,0,-i*.6,r*.4,0,-i*.5,-r*.1,s*.8,-i*.95,-r*.2,s*.2,-i*.6,r*.4,0,-i*.95,-r*.2,s*.2,-i*.3,r*.7,-s*.4,-i*.3,r*.7,-s*.4,-i*.95,-r*.2,s*.2,-i*.8,-r*.2,-s*.6,-i*.8,-r*.2,-s*.6,-i*.6,-r,-s*.4,i*.9,-r*.1,-s*.5,i*.9,-r*.1,-s*.5,-i*.6,-r,-s*.4,i*.7,-r,-s*.3,i*.9,-r*.1,-s*.5,i*.7,-r,-s*.3,i*.85,-r*.15,s*.7,i*.85,-r*.15,s*.7,i*.7,-r,-s*.3,i*.6,-r,s*.5,i*.85,-r*.15,s*.7,i*.6,-r,s*.5,-i*.5,-r*.1,s*.8,-i*.5,-r*.1,s*.8,i*.6,-r,s*.5,-i*.4,-r,s*.6,-i*.5,-r*.1,s*.8,-i*.4,-r,s*.6,-i*.95,-r*.2,s*.2,-i*.95,-r*.2,s*.2,-i*.4,-r,s*.6,-i*.7,-r,0,-i*.95,-r*.2,s*.2,-i*.7,-r,0,-i*.8,-r*.2,-s*.6,-i*.8,-r*.2,-s*.6,-i*.7,-r,0,-i*.6,-r,-s*.4,-i*.6,-r,-s*.4,-i*.7,-r,0,0,-r,0,-i*.7,-r,0,-i*.4,-r,s*.6,0,-r,0,-i*.4,-r,s*.6,i*.6,-r,s*.5,0,-r,0,i*.6,-r,s*.5,i*.7,-r,-s*.3,0,-r,0,i*.7,-r,-s*.3,-i*.6,-r,-s*.4,0,-r,0]),c=new ke;return c.setAttribute("position",new qe(a,3)),c.computeVertexNormals(),c}function I_(t,e,n){const i=[],r=Math.min(t,n)/3;[[0,0,0],[-r*.5,-r*.3,0],[r*.5,-r*.3,0],[0,-r*.3,-r*.5],[0,-r*.3,r*.5]].forEach(([c,o,l],u)=>{const h=new Ye(r*(.8+u*.05),8,6);h.translate(c,o,l),i.push(h)});const a=K(i);return i.forEach(c=>c.dispose()),a}function kc(t,e,n,i){const r=Math.min(e,i==="X"?n:t)/3,s=i==="X"?t:n,a=new ee(r,r*.9,s,8);return i==="X"?a.rotateZ(Math.PI/2):a.rotateX(Math.PI/2),a}function D_(t,e,n){const i=[],r=new y(t*.95,e*.9,n*.95);i.push(r);for(let a=0;a<4;a++){const c=new y(t*.8,e*.05,n*.02);c.translate(0,e*.2-a*e*.15,n*.48),i.push(c)}const s=K(i);return i.forEach(a=>a.dispose()),s}function U_(t,e,n){const i=[],r=new y(t,e*.1,n);i.push(r);const s=new y(t*.95,e*.05,n*.95);s.translate(0,e*.1,0),i.push(s);const a=K(i);return i.forEach(c=>c.dispose()),a}function N_(t,e,n){const i=[],r=Math.min(t,n)/10,s=new ee(r,r,e*.9,6);i.push(s);const a=new ee(r*.5,r*.5,t*.8,4);a.rotateZ(Math.PI/2),a.translate(0,e*.3,0),i.push(a);const c=new ee(r*.5,r*.5,t*.5,4);c.rotateZ(Math.PI/2),c.translate(0,e*.1,0),i.push(c);const o=K(i);return i.forEach(l=>l.dispose()),o}function F_(t,e,n){const i=[],r=new y(t,e*.6,n*.5);r.translate(0,-e*.1,0),i.push(r);const s=new y(t,e*.15,n*.55);s.translate(0,e*.25,0),i.push(s);const a=K(i);return i.forEach(c=>c.dispose()),a}function O_(t,e,n){const r=[],s=[];for(let c=0;c<=12;c++){const o=c/12*Math.PI/2,l=Math.cos(o)*t/2,u=Math.sin(o)*e-e/2;r.push(l,u,n/2),r.push(l,u,-n/2)}for(let c=0;c<12;c++){const o=c*2,l=c*2+1,u=c*2+2,h=c*2+3;s.push(o,u,l,l,u,h)}const a=new ke;return a.setAttribute("position",new tt(r,3)),a.setIndex(s),a.computeVertexNormals(),a}function B_(t,e,n){const i=new Ye(Math.min(t,n)/2.2,16,8,0,Math.PI*2,0,Math.PI/2);return i.rotateX(Math.PI),i.translate(0,e*.25,0),i}function z_(t,e,n){const i=Math.min(t,n)/2;return new ee(i,i,e,6)}function k_(t,e,n){return new y(t*.9,e*.9,n*.9,2,2,2)}function V_(t,e,n){const i=t/2,r=e/2,s=n/2,a=Math.min(t,n)*.3,c=new Float32Array([-i,-r,-s,i,-r,-s,i,r,-s,-i,-r,-s,i,r,-s,-i,r,-s,-i,-r,-s,i,-r,-s,i,-r,s-a,-i,-r,-s,i,-r,s-a,-i,-r,s-a,-i,-r,s-a,i,-r,s-a,i-a,-r,s,-i,-r,s-a,i-a,-r,s,-i,-r,s,-i,r,-s,i,r,-s,i,r,s-a,-i,r,-s,i,r,s-a,-i,r,s-a,-i,r,s-a,i,r,s-a,i-a,r,s,-i,r,s-a,i-a,r,s,-i,r,s,i,-r,s-a,i,r,s-a,i-a,r,s,i,-r,s-a,i-a,r,s,i-a,-r,s,-i,-r,s,i-a,-r,s,i-a,r,s,-i,-r,s,i-a,r,s,-i,r,s,i,-r,-s,i,r,-s,i,r,s-a,i,-r,-s,i,r,s-a,i,-r,s-a,-i,-r,s,-i,r,s,-i,r,-s,-i,-r,s,-i,r,-s,-i,-r,-s]),o=new ke;return o.setAttribute("position",new qe(c,3)),o.computeVertexNormals(),o}function H_(t,e,n){return new y(t*.8,e,n*.8)}function G_(t,e,n){const i=[],r=new y(t*.4,e,n);r.translate(-t*.3,0,0),i.push(r);const s=new y(t*.4,e,n);s.translate(t*.3,0,0),i.push(s);const a=new y(t*.2,e*.3,n);a.translate(0,e*.35,0),i.push(a);const c=new y(t*.2,e*.3,n);c.translate(0,-e*.35,0),i.push(c);const o=K(i);return i.forEach(l=>l.dispose()),o}function W_(t,e,n){const i=[],r=Math.min(t,n)/6,s=new y(t*.3,e*.1,n*.5);s.translate(0,-e*.1,-n*.25),i.push(s);const a=new ee(r,r*.8,e*.5,6);i.push(a);const c=new ee(r*1.5,r,e*.15,6);c.translate(0,e*.3,0),i.push(c);const o=K(i);return i.forEach(l=>l.dispose()),o}function X_(t,e,n){const i=[],r=Math.min(t,n)/4,s=4;for(let c=0;c<s;c++){const o=new xt(r,r*.3,6,8);o.rotateX(c%2===0?0:Math.PI/2),o.translate(0,e*.4-c*(e/s),0),i.push(o)}const a=K(i);return i.forEach(c=>c.dispose()),a}function Z_(t,e,n){const i=t/2,r=e/2,s=n/2,a=new Float32Array([-i,-r,-s,i,-r,-s,0,-r,s,-i,-r,-s,0,-r,s,0,r,0,-i,-r,-s,0,r,0,-i,r,-s,i,-r,-s,0,r,0,0,-r,s,i,-r,-s,i,r,-s,0,r,0,-i,-r,-s,-i,r,-s,i,r,-s,-i,-r,-s,i,r,-s,i,-r,-s,-i,r,-s,0,r,0,i,r,-s]),c=new ke;return c.setAttribute("position",new qe(a,3)),c.computeVertexNormals(),c}function Y_(t,e,n){const i=new y(t*Math.SQRT2,e,n);return i.rotateY(Math.PI/4),i}function Vc(t,e,n,i=!1){const r=n/4,s=[];if(i){const c=new y(t,e,r);c.translate(0,0,-n/2+r/2),s.push(c);const o=new y(r,e,n-r);o.translate(-t/2+r/2,0,r/2),s.push(o)}else{const c=new y(t,e,r);c.translate(0,0,n/2-r/2),s.push(c);const o=new y(r,e,n-r);o.translate(t/2-r/2,0,-r/2),s.push(o)}const a=K(s);return s.forEach(c=>c.dispose()),a}function q_(t,e,n){const i=e/2,r=Math.min(t,n)/4,s=new Float32Array([r,-i,-r,r,i,-r,-r,i,r,r,-i,-r,-r,i,r,-r,-i,r,-r,-i,-r,-r,-i,r,-r,i,r,-r,-i,-r,-r,i,r,-r,i,-r,-r,i,-r,-r,i,r,r,i,-r,-r,-i,-r,r,-i,-r,-r,-i,r,0,0,r,0,0,r,0,0,r,-r,-i,-r,-r,i,-r,r,i,-r,-r,-i,-r,r,i,-r,r,-i,-r]),a=new ke;return a.setAttribute("position",new qe(s,3)),a.addGroup(0,6,0),a.addGroup(6,6,1),a.addGroup(12,3,2),a.addGroup(15,3,3),a.addGroup(18,3,4),a.addGroup(21,6,5),a.computeVertexNormals(),a}function J_(t,e,n){const i=t/2,r=e/2,s=n/2,a=new Float32Array([i,-r,-s,i,r,-s,i,-r,s,-i,-r,-s,-i,-r,s,-i,r,-s,0,r,0,0,r,0,0,r,0,-i,-r,-s,i,-r,-s,i,-r,s,-i,-r,-s,i,-r,s,-i,-r,s,-i,r,-s,-i,-r,s,i,-r,s,-i,r,-s,i,-r,s,i,r,-s,-i,-r,-s,-i,r,-s,i,r,-s,-i,-r,-s,i,r,-s,i,-r,-s]),c=new ke;return c.setAttribute("position",new qe(a,3)),c.addGroup(0,3,0),c.addGroup(3,3,1),c.addGroup(6,3,2),c.addGroup(9,6,3),c.addGroup(15,6,4),c.addGroup(21,6,5),c.computeVertexNormals(),c}function Hc(t,e,n,i=!1){const s=e/4,a=[];for(let o=0;o<4;o++){const l=s*(o+1),u=(4-o)/4;if(i){const h=new y(t*u,l,n*u);h.translate(t*(1-u)/2,l/2-e/2,n*(1-u)/2),a.push(h)}else{const h=new y(t*u,l,n*u);h.translate(-t*(1-u)/2,l/2-e/2,-n*(1-u)/2),a.push(h)}}const c=K(a);return a.forEach(o=>o.dispose()),c}function K_(t,e,n){const i=t/2,r=e/2,s=n/2,a=new Float32Array([-i,-r,-s,i,-r,-s,i,-r,s,-i,-r,-s,i,-r,s,-i,-r,s,-i,-r,s,i,-r,s,0,r,0,i,-r,-s,-i,-r,-s,0,r,0,-i,-r,-s,-i,-r,s,0,r,0,i,-r,s,i,-r,-s,0,r,0]),c=new ke;return c.setAttribute("position",new qe(a,3)),c.computeVertexNormals(),c}function $_(t,e,n){const i=Math.min(t,n)/2,r=i*.7,s=new Ii;s.absarc(0,0,i,0,Math.PI*2,!1);const a=new Ti;a.absarc(0,0,r,0,Math.PI*2,!0),s.holes.push(a);const c={steps:1,depth:e,bevelEnabled:!1},o=new Kn(s,c);return o.rotateX(-Math.PI/2),o.translate(0,-e/2,0),o}function j_(t,e,n){const i=t*.2,r=10,s=new Ii;s.moveTo(-t/2,-e/2),s.lineTo(-t/2,e/2),s.lineTo(t/2,e/2),s.lineTo(t/2,-e/2),s.lineTo(-t/2,-e/2);const a=new Ti,c=-t/2+i,o=e/2-i,l=t/2-i,u=-e/2,h=Math.min(t-i*2,e-i)*.8;a.moveTo(c,u),a.lineTo(c,o-h);for(let d=0;d<=r;d++){const g=Math.PI-d/r*(Math.PI/2),_=c+h+Math.cos(g)*h,m=o-h+Math.sin(g)*h;a.lineTo(_,m)}a.lineTo(l,o),a.lineTo(l,u),a.lineTo(c,u),s.holes.push(a);const f=new Kn(s,{steps:1,depth:n,bevelEnabled:!1});return f.translate(0,0,-n/2),f}function Q_(t,e,n){const i=t/3,r=[],s=new y(t,e,i);s.translate(0,0,n/2-i/2),r.push(s);const a=new y(i,e,n-i);a.translate(-t/2+i/2,0,-i/2),r.push(a);const c=K(r);return r.forEach(o=>o.dispose()),c}function ex(t,e,n){const i=t/3,r=[],s=new y(t,e,i);s.translate(0,0,n/2-i/2),r.push(s);const a=new y(i,e,n-i);a.translate(0,0,-i/2),r.push(a);const c=K(r);return r.forEach(o=>o.dispose()),c}function tx(t,e,n){const i=t/4,r=[],s=new y(t,e,i);s.translate(0,0,-n/2+i/2),r.push(s);const a=new y(i,e,n-i);a.translate(-t/2+i/2,0,i/2),r.push(a);const c=new y(i,e,n-i);c.translate(t/2-i/2,0,i/2),r.push(c);const o=K(r);return r.forEach(l=>l.dispose()),o}function nx(t,e,n){const i=[],r=new y(t,e/2,n*.3);r.translate(0,e/4,n*.35),i.push(r);const s=new y(t,e,n*.4);s.translate(0,0,-n*.3),i.push(s);const a=K(i);return i.forEach(c=>c.dispose()),a}function ix(t,e,n){const i=n/6,r=[],s=new y(t,e/2,n);s.translate(0,-e/4,0),r.push(s);const a=new y(t,e,i);a.translate(0,0,n/2-i/2),r.push(a);const c=new y(t,e,i);c.translate(0,0,-n/2+i/2),r.push(c);const o=K(r);return r.forEach(l=>l.dispose()),o}function rx(t,e,n){const i=[],r=new y(t,e/3,n);r.translate(0,e/3,0),i.push(r);const s=new y(t*.85,e/3,n*.85);s.translate(0,0,0),i.push(s);const a=new y(t*.7,e/3,n*.7);a.translate(0,-e/3,0),i.push(a);const c=K(i);return i.forEach(o=>o.dispose()),c}function sx(t,e,n){const i=[],r=new y(t,e/3,n);r.translate(0,-e/3,0),i.push(r);const s=new y(t*.85,e/3,n*.85);s.translate(0,0,0),i.push(s);const a=new y(t*.7,e/3,n*.7);a.translate(0,e/3,0),i.push(a);const c=K(i);return i.forEach(o=>o.dispose()),c}function ax(t,e,n){const i=t/8,r=[],s=new y(t,i,n);s.translate(0,e/2-i/2,0),r.push(s);const a=new y(t,i*1.5,n);a.translate(0,-e/2+i*.75,0),r.push(a);const c=new y(i,e-i*2.5,n);c.translate(-t/2+i/2,i*.25,0),r.push(c);const o=new y(i,e-i*2.5,n);o.translate(t/2-i/2,i*.25,0),r.push(o);const l=K(r);return r.forEach(u=>u.dispose()),l}function ox(t,e,n){const i=t/8,r=[],s=new y(t,i,n);s.translate(0,e/2-i/2,0),r.push(s);const a=new y(i,e-i,n);a.translate(-t/2+i/2,-i/2,0),r.push(a);const c=new y(i,e-i,n);c.translate(t/2-i/2,-i/2,0),r.push(c);const o=K(r);return r.forEach(l=>l.dispose()),o}function Gc(t,e,n){const r=[];for(let a=0;a<8;a++){const c=a/8*Math.PI/2,o=(a+1)/8*Math.PI/2,l=-e/2+e*Math.sin(c),u=n/2-n*(1-Math.cos(c)),h=-e/2+e*Math.sin(o),f=n/2-n*(1-Math.cos(o));r.push(-t/2,l,u,-t/2,h,f,t/2,h,f,-t/2,l,u,t/2,h,f,t/2,l,u)}r.push(-t/2,-e/2,-n/2,t/2,-e/2,-n/2,t/2,-e/2,n/2,-t/2,-e/2,-n/2,t/2,-e/2,n/2,-t/2,-e/2,n/2),r.push(-t/2,-e/2,-n/2,-t/2,e/2,-n/2,t/2,e/2,-n/2,-t/2,-e/2,-n/2,t/2,e/2,-n/2,t/2,-e/2,-n/2);for(let a=0;a<8;a++){const c=a/8*Math.PI/2,o=(a+1)/8*Math.PI/2,l=-e/2+e*Math.sin(c),u=n/2-n*(1-Math.cos(c)),h=-e/2+e*Math.sin(o),f=n/2-n*(1-Math.cos(o));r.push(-t/2,-e/2,-n/2,-t/2,l,u,-t/2,h,f)}r.push(-t/2,-e/2,-n/2,-t/2,e/2,-n/2,-t/2,-e/2+e*Math.sin(Math.PI/2*7/8),n/2-n*(1-Math.cos(Math.PI/2*7/8)));for(let a=0;a<8;a++){const c=a/8*Math.PI/2,o=(a+1)/8*Math.PI/2,l=-e/2+e*Math.sin(c),u=n/2-n*(1-Math.cos(c)),h=-e/2+e*Math.sin(o),f=n/2-n*(1-Math.cos(o));r.push(t/2,h,f,t/2,l,u,t/2,-e/2,-n/2)}r.push(t/2,-e/2+e*Math.sin(Math.PI/2*7/8),n/2-n*(1-Math.cos(Math.PI/2*7/8)),t/2,e/2,-n/2,t/2,-e/2,-n/2);const s=new ke;return s.setAttribute("position",new qe(new Float32Array(r),3)),s.computeVertexNormals(),s}function cx(t,e,n){const r=[];for(let a=0;a<8;a++){const c=a/8*Math.PI/2,o=(a+1)/8*Math.PI/2,l=-e/2+e*Math.sin(c),u=1-Math.cos(c),h=-e/2+e*Math.sin(o),f=1-Math.cos(o);for(let d=0;d<8;d++){const g=d/8*Math.PI/2,_=(d+1)/8*Math.PI/2,m=t/2-t*u*Math.cos(g),p=n/2-n*u*Math.sin(g),w=t/2-t*u*Math.cos(_),v=n/2-n*u*Math.sin(_),x=t/2-t*f*Math.cos(g),D=n/2-n*f*Math.sin(g),A=t/2-t*f*Math.cos(_),R=n/2-n*f*Math.sin(_);r.push(m,l,p,x,h,D,A,h,R,m,l,p,A,h,R,w,l,v)}}r.push(-t/2,-e/2,-n/2,t/2,-e/2,-n/2,t/2,-e/2,n/2,-t/2,-e/2,-n/2,t/2,-e/2,n/2,-t/2,-e/2,n/2);const s=new ke;return s.setAttribute("position",new qe(new Float32Array(r),3)),s.computeVertexNormals(),s}function Wc(t,e,n){const i=t/2,r=e/2,s=n/2,a=new Float32Array([-i,-r,-s,i,-r,-s,i,-r,s,-i,-r,-s,i,-r,s,-i,-r,s,-i,-r,-s,0,r,-s,0,r,s,-i,-r,-s,0,r,s,-i,-r,s,i,-r,s,0,r,s,0,r,-s,i,-r,s,0,r,-s,i,-r,-s,-i,-r,s,0,r,s,i,-r,s,i,-r,-s,0,r,-s,-i,-r,-s]),c=new ke;return c.setAttribute("position",new qe(a,3)),c.computeVertexNormals(),c}function lx(t,e,n){const i=t/2,r=e/2,s=n/2,a=Math.min(t,n)/4,c=new Float32Array([-i,-r,-s,i,-r,-s,i,-r,s,-i,-r,-s,i,-r,s,-i,-r,s,-i,-r,s,-i+a,r,s-a,i-a,r,s-a,-i,-r,s,i-a,r,s-a,i,-r,s,i,-r,-s,i-a,r,-s+a,-i+a,r,-s+a,i,-r,-s,-i+a,r,-s+a,-i,-r,-s,-i,-r,-s,-i+a,r,-s+a,-i+a,r,s-a,-i,-r,-s,-i+a,r,s-a,-i,-r,s,i,-r,s,i-a,r,s-a,i-a,r,-s+a,i,-r,s,i-a,r,-s+a,i,-r,-s,-i+a,r,-s+a,i-a,r,-s+a,i-a,r,s-a,-i+a,r,-s+a,i-a,r,s-a,-i+a,r,s-a]),o=new ke;return o.setAttribute("position",new qe(c,3)),o.computeVertexNormals(),o}function ux(t,e,n){const i=t/8,r=[],s=new y(t,i,n);s.translate(0,-e/2+i/2,0),r.push(s);const a=new y(i,e,n);a.translate(-t/2+i/2,0,0),r.push(a);const c=new y(i,e,n);c.translate(t/2-i/2,0,0),r.push(c);const o=K(r);return r.forEach(l=>l.dispose()),o}function hx(t,e,n){const i=Math.min(t,n)/8,r=[],s=new y(t,i,i*2);s.translate(0,-e/2+i/2,n/2-i),r.push(s);const a=new y(i*2,i,n-i*2);a.translate(-t/2+i,-e/2+i/2,-i),r.push(a);const c=new y(t,e,i);c.translate(0,0,n/2-i/2),r.push(c);const o=new y(i,e,n-i);o.translate(-t/2+i/2,0,-i/2),r.push(o);const l=new y(i,e,i);l.translate(t/2-i/2,0,-n/2+i/2),r.push(l);const u=K(r);return r.forEach(h=>h.dispose()),u}function fx(t,e,n){const i=t/8,r=[],s=new y(t,i,n);s.translate(0,-e/2+i/2,0),r.push(s);const a=new y(i,e,n);a.translate(-t/2+i/2,0,0),r.push(a);const c=new y(i,e,n);c.translate(t/2-i/2,0,0),r.push(c);const o=new y(t-i*2,e,i);o.translate(0,0,-n/2+i/2),r.push(o);const l=K(r);return r.forEach(u=>u.dispose()),l}function dx(t,e,n){const i=Math.min(t,e,n)/8,r=t/2,s=e/2,a=n/2,c=[];c.push(-r+i,s,-a+i,r-i,s,-a+i,r-i,s,a-i,-r+i,s,-a+i,r-i,s,a-i,-r+i,s,a-i),c.push(-r+i,-s,a-i,r-i,-s,a-i,r-i,-s,-a+i,-r+i,-s,a-i,r-i,-s,-a+i,-r+i,-s,-a+i),c.push(-r+i,-s+i,a,r-i,-s+i,a,r-i,s-i,a,-r+i,-s+i,a,r-i,s-i,a,-r+i,s-i,a),c.push(r-i,-s+i,-a,-r+i,-s+i,-a,-r+i,s-i,-a,r-i,-s+i,-a,-r+i,s-i,-a,r-i,s-i,-a),c.push(-r,-s+i,-a+i,-r,-s+i,a-i,-r,s-i,a-i,-r,-s+i,-a+i,-r,s-i,a-i,-r,s-i,-a+i),c.push(r,-s+i,a-i,r,-s+i,-a+i,r,s-i,-a+i,r,-s+i,a-i,r,s-i,-a+i,r,s-i,a-i),c.push(-r+i,s,a-i,r-i,s,a-i,r-i,s-i,a,-r+i,s,a-i,r-i,s-i,a,-r+i,s-i,a),c.push(r-i,s,-a+i,-r+i,s,-a+i,-r+i,s-i,-a,r-i,s,-a+i,-r+i,s-i,-a,r-i,s-i,-a),c.push(-r+i,s,-a+i,-r+i,s,a-i,-r,s-i,a-i,-r+i,s,-a+i,-r,s-i,a-i,-r,s-i,-a+i),c.push(r-i,s,a-i,r-i,s,-a+i,r,s-i,-a+i,r-i,s,a-i,r,s-i,-a+i,r,s-i,a-i),c.push(-r+i,-s+i,a,r-i,-s+i,a,r-i,-s,a-i,-r+i,-s+i,a,r-i,-s,a-i,-r+i,-s,a-i),c.push(r-i,-s+i,-a,-r+i,-s+i,-a,-r+i,-s,-a+i,r-i,-s+i,-a,-r+i,-s,-a+i,r-i,-s,-a+i),c.push(-r,-s+i,a-i,-r,-s+i,-a+i,-r+i,-s,-a+i,-r,-s+i,a-i,-r+i,-s,-a+i,-r+i,-s,a-i),c.push(r,-s+i,-a+i,r,-s+i,a-i,r-i,-s,a-i,r,-s+i,-a+i,r-i,-s,a-i,r-i,-s,-a+i),c.push(-r+i,-s+i,a,-r,-s+i,a-i,-r,s-i,a-i,-r+i,-s+i,a,-r,s-i,a-i,-r+i,s-i,a),c.push(r,-s+i,a-i,r-i,-s+i,a,r-i,s-i,a,r,-s+i,a-i,r-i,s-i,a,r,s-i,a-i),c.push(-r,-s+i,-a+i,-r+i,-s+i,-a,-r+i,s-i,-a,-r,-s+i,-a+i,-r+i,s-i,-a,-r,s-i,-a+i),c.push(r-i,-s+i,-a,r,-s+i,-a+i,r,s-i,-a+i,r-i,-s+i,-a,r,s-i,-a+i,r-i,s-i,-a);const o=new ke;return o.setAttribute("position",new qe(new Float32Array(c),3)),o.computeVertexNormals(),o}function px(t,e={w:1,h:1,d:1}){const n=e.w,i=e.h,r=e.d,s=rg[t]||1,a=sg[t]||0,c=i*s;let o={min:{x:0,y:a,z:0},max:{x:n,y:a+c,z:r}};switch(t){case"pillar":o.min.x=n*.25,o.max.x=n*.75,o.min.z=r*.25,o.max.z=r*.75;break;case"pillar2":o.min.x=n*.375,o.max.x=n*.625,o.min.z=r*.375,o.max.z=r*.625;break;case"pillar4":o.min.x=n*.4375,o.max.x=n*.5625,o.min.z=r*.4375,o.max.z=r*.5625;break;case"beamX":o.min.z=r*.25,o.max.z=r*.75;break;case"beam2X":o.min.z=r*.375,o.max.z=r*.625;break;case"beam4X":o.min.z=r*.4375,o.max.z=r*.5625;break;case"beamZ":o.min.x=n*.25,o.max.x=n*.75;break;case"beam2Z":o.min.x=n*.375,o.max.x=n*.625;break;case"beam4Z":o.min.x=n*.4375,o.max.x=n*.5625;break;case"beamXLow":o.min.z=r*.25,o.max.z=r*.75;break;case"beam2XLow":o.min.z=r*.375,o.max.z=r*.625;break;case"beamZLow":o.min.x=n*.25,o.max.x=n*.75;break;case"beam2ZLow":o.min.x=n*.375,o.max.x=n*.625;break;case"wall":o.min.z=r*.25,o.max.z=r*.75;break;case"wall4":o.min.z=r*.375,o.max.z=r*.625;break;case"wall8":o.min.z=r*.4375,o.max.z=r*.5625;break;case"panel":o.min.z=r*.46875,o.max.z=r*.53125;break;case"wallFront":o.min.z=r*.75,o.max.z=r;break;case"wallBack":o.min.z=0,o.max.z=r*.25;break;case"cylinder":case"cylinderHalf":const l=(1-Math.SQRT1_2)/2;o.min.x=n*l,o.max.x=n*(1-l),o.min.z=r*l,o.max.z=r*(1-l);break;case"quarter":case"quarterTall":o.max.x=n*.5,o.max.z=r*.5;break;case"cone":case"sphere":case"dome":const u=(1-Math.SQRT1_2)/2;o.min.x=n*u,o.max.x=n*(1-u),o.min.z=r*u,o.max.z=r*(1-u);break;case"arch":case"archLow":case"archWide":break;case"cross":break;case"frame":break;case"fence":o.min.z=r*.375,o.max.z=r*.625;break;case"fenceZ":o.min.x=n*.375,o.max.x=n*.625;break;case"railing":o.min.z=r*.375,o.max.z=r*.625;break;case"railingZ":o.min.x=n*.375,o.max.x=n*.625;break;case"pipeX":o.min.y=i*.25,o.max.y=i*.75,o.min.z=r*.25,o.max.z=r*.75;break;case"pipeY":o.min.x=n*.25,o.max.x=n*.75,o.min.z=r*.25,o.max.z=r*.75;break;case"pipeZ":o.min.x=n*.25,o.max.x=n*.75,o.min.y=i*.25,o.max.y=i*.75;break;case"pipeElbow":case"pipeElbow2":case"pipeElbow3":case"pipeElbow4":case"pipeCross":case"pipeT":case"pipeTY":o.min.y=i*.25,o.max.y=i*.75;break;case"prism":break;case"halfX":o.max.x=n*.5;break;case"halfZ":o.max.z=r*.5;break;case"halfCorner":o.max.x=n*.5,o.max.z=r*.5;break;case"pillarRound":o.min.x=n*.25,o.max.x=n*.75,o.min.z=r*.25,o.max.z=r*.75;break;case"pillarRound2":o.min.x=n*.375,o.max.x=n*.625,o.min.z=r*.375,o.max.z=r*.625;break;case"beamDiag":break;case"wallCorner":case"wallCornerInner":break;case"wedgeInner":break;case"stairsCorner":case"stairsCornerInner":break;case"pyramid":break;case"octagon":const h=(1-Math.SQRT1_2)/2;o.min.x=n*h,o.max.x=n*(1-h),o.min.z=r*h,o.max.z=r*(1-h);break;case"tube":const f=(1-Math.SQRT1_2)/2;o.min.x=n*f,o.max.x=n*(1-f),o.min.z=r*f,o.max.z=r*(1-f);break;case"archHalf":break;case"lShape":case"tShape":case"cShape":break;case"ledge":case"gutter":case"capital":case"base":break;case"windowFrame":case"doorFrame":break;case"cornice":o.max.y=i*.25,o.max.z=r*.5;break;case"column":o.min.x=n*.15,o.max.x=n*.85,o.min.z=r*.15,o.max.z=r*.85;break;case"baluster":o.min.x=n*.35,o.max.x=n*.65,o.min.z=r*.35,o.max.z=r*.65;break;case"windowSill":o.max.y=i*.25;break;case"shingle":o.max.y=i*.25;break;case"chimney":o.min.x=n*.1,o.max.x=n*.9,o.min.z=r*.1,o.max.z=r*.9;break;case"buttress":break;case"bench":o.max.y=i*.5;break;case"table":break;case"chair":o.max.z=r*.6;break;case"barrel":o.min.x=n*.1,o.max.x=n*.9,o.min.z=r*.1,o.max.z=r*.9;break;case"crate":break;case"planter":break;case"ladder":o.min.z=r*.35,o.max.z=r*.65;break;case"tank":o.min.x=n*.1,o.max.x=n*.9,o.min.z=r*.1,o.max.z=r*.9;break;case"valve":o.min.x=n*.25,o.max.x=n*.75,o.min.z=r*.25,o.max.z=r*.75;break;case"vent":o.max.y=i*.25;break;case"iBeam":o.min.z=r*.35,o.max.z=r*.65;break;case"catwalk":o.max.y=i*.125;break;case"rock":o.min.x=n*.1,o.max.x=n*.9,o.min.z=r*.1,o.max.z=r*.9,o.max.y=i*.7;break;case"bush":o.min.x=n*.1,o.max.x=n*.9,o.min.z=r*.1,o.max.z=r*.9;break;case"logX":o.min.y=0,o.max.y=i*.5,o.min.z=r*.15,o.max.z=r*.85;break;case"logZ":o.min.y=0,o.max.y=i*.5,o.min.x=n*.15,o.max.x=n*.85;break;case"acUnit":break;case"solarPanel":o.max.y=i*.15;break;case"antenna":o.min.x=n*.4,o.max.x=n*.6,o.min.z=r*.4,o.max.z=r*.6;break;case"barrier":o.max.y=i*.5;break;case"quarterPipe":break;case"bowl":break;case"hexagon":o.min.x=n*.07,o.max.x=n*.93,o.min.z=r*.07,o.max.z=r*.93;break;case"roundedCube":break;case"chamfer":break;case"merlon":o.min.x=n*.1,o.max.x=n*.9,o.min.z=r*.1,o.max.z=r*.9;break;case"arrowSlit":o.max.z=r*.25;break;case"torch":o.min.x=n*.35,o.max.x=n*.65,o.min.z=r*.35,o.max.z=r*.65;break;case"chain":o.min.x=n*.4,o.max.x=n*.6,o.min.z=r*.4,o.max.z=r*.6;break;case"post":o.min.x=n*.375,o.max.x=n*.625,o.min.z=r*.375,o.max.z=r*.625;break;case"bollard":o.min.x=n*.25,o.max.x=n*.75,o.min.z=r*.25,o.max.z=r*.75,o.max.y=i*.75;break;case"conduit":o.min.y=i*.35,o.max.y=i*.65,o.min.z=r*.35,o.max.z=r*.65;break;case"conduitCorner":o.min.x=n*.3,o.max.x=n*.7,o.min.z=r*.3,o.max.z=r*.7;break;case"cable":case"cableX":o.min.y=i*.44,o.max.y=i*.56,o.min.z=r*.44,o.max.z=r*.56;break;case"cableY":o.min.x=n*.44,o.max.x=n*.56,o.min.z=r*.44,o.max.z=r*.56;break;case"cableZ":o.min.x=n*.44,o.max.x=n*.56,o.min.y=i*.44,o.max.y=i*.56;break;case"cableElbow":case"cableElbowY":case"cableT":o.min.x=n*.3,o.max.x=n*.7,o.min.y=i*.4,o.max.y=i*.6,o.min.z=r*.3,o.max.z=r*.7;break;case"cableHanging":case"cableDroop":case"cableLoop":o.min.x=n*.35,o.max.x=n*.65,o.min.z=r*.35,o.max.z=r*.65;break;case"crossBeam":o.min.y=i*.375,o.max.y=i*.625;break;case"truss":o.min.z=r*.4,o.max.z=r*.6;break;case"parapet":o.max.y=i*.5,o.min.z=r*.375,o.max.z=r*.625;break;case"crenellation":o.min.z=r*.25,o.max.z=r*.75;break;case"trianglePrism":case"triangleRight":case"triangleEqui":case"pentahedron":break;case"tetrahedron":o.min.x=n*.2,o.max.x=n*.8,o.min.z=r*.2,o.max.z=r*.8;break;case"stairsSingle":o.max.y=i*.25,o.min.z=r*.25,o.max.z=r*.75;break;case"landing":o.max.y=i*.25;break;case"spiralStep":o.max.y=i*.25;break;case"step":o.max.y=i*.25;break;case"platform":o.max.y=i*.125;break;case"torus":o.min.x=n*.15,o.max.x=n*.85,o.min.y=i*.4,o.max.y=i*.6,o.min.z=r*.15,o.max.z=r*.85;break;case"capsule":case"pill":o.min.x=n*.2,o.max.x=n*.8,o.min.z=r*.2,o.max.z=r*.8;break;case"hemisphere":const d=(1-Math.SQRT1_2)/2;o.min.x=n*d,o.max.x=n*(1-d),o.min.z=r*d,o.max.z=r*(1-d),o.max.y=i*.5;break;case"egg":o.min.x=n*.2,o.max.x=n*.8,o.min.z=r*.2,o.max.z=r*.8;break;case"gothicArch":case"flatArch":break;case"keystone":o.min.x=n*.25,o.max.x=n*.75,o.min.z=r*.25,o.max.z=r*.75;break;case"downspout":o.min.x=n*.35,o.max.x=n*.65,o.min.z=r*.35,o.max.z=r*.65;break;case"star":case"heart":o.min.x=n*.1,o.max.x=n*.9,o.min.z=r*.1,o.max.z=r*.9;break;case"diamond":o.min.x=n*.25,o.max.x=n*.75,o.min.z=r*.25,o.max.z=r*.75;break;case"gem":case"crystal":o.min.x=n*.2,o.max.x=n*.8,o.min.z=r*.2,o.max.z=r*.8;break;case"cornerTrim":o.max.x=n*.5,o.max.z=r*.5;break;case"edgeTrim":o.max.y=i*.25,o.min.z=r*.4375,o.max.z=r*.5625;break;case"moldingX":o.min.y=i*.4375,o.max.y=i*.5625,o.min.z=r*.4375,o.max.z=r*.5625;break;case"moldingZ":o.min.x=n*.4375,o.max.x=n*.5625,o.min.y=i*.4375,o.max.y=i*.5625;break;case"bracket":o.max.x=n*.5,o.max.z=r*.5;break;case"finial":o.min.x=n*.2,o.max.x=n*.8,o.min.z=r*.2,o.max.z=r*.8;break;case"pediment":o.max.y=i*.5;break;case"dentil":o.min.x=n*.4,o.max.x=n*.6,o.max.y=i*.25,o.min.z=r*.25,o.max.z=r*.75;break;case"awning":o.max.y=i*.25;break;case"canopy":o.max.y=i*.125;break;case"pergola":break;case"tarp":o.max.y=i*.05;break;case"umbrella":o.min.x=n*.4,o.max.x=n*.6,o.min.z=r*.4,o.max.z=r*.6;break;case"stool":o.min.x=n*.2,o.max.x=n*.8,o.min.z=r*.2,o.max.z=r*.8;break;case"shelf":o.max.y=i*.125,o.min.z=r*.1,o.max.z=r*.9;break;case"bed":case"desk":break;case"crateOpen":case"crateLarge":break;case"pallet":o.max.y=i*.15;break;case"shelfUnit":case"locker":case"cabinet":break;case"cardboardBox":o.min.x=n*.1,o.max.x=n*.9,o.min.z=r*.1,o.max.z=r*.9;break;case"sack":o.min.x=n*.15,o.max.x=n*.85,o.min.z=r*.15,o.max.z=r*.85,o.max.y=i*.7;break;case"bin":o.min.x=n*.1,o.max.x=n*.9,o.min.z=r*.1,o.max.z=r*.9;break;case"dumpster":break;case"grateFloor":o.max.y=i*.1;break;case"ductX":o.min.y=i*.25,o.max.y=i*.75,o.min.z=r*.25,o.max.z=r*.75;break;case"ductZ":o.min.x=n*.25,o.max.x=n*.75,o.min.y=i*.25,o.max.y=i*.75;break;case"ductCorner":o.min.y=i*.25,o.max.y=i*.75;break;case"hopper":case"conveyor":break;case"spotlight":o.min.x=n*.25,o.max.x=n*.75,o.min.z=r*.25,o.max.z=r*.75;break;case"bulb":o.min.x=n*.2,o.max.x=n*.8,o.min.y=i*.2,o.max.y=i*.8,o.min.z=r*.2,o.max.z=r*.8;break;case"lightFixture":o.max.y=i*.3;break;case"stump":o.min.x=n*.15,o.max.x=n*.85,o.min.z=r*.15,o.max.z=r*.85,o.max.y=i*.5;break;case"boulder":o.min.x=n*.1,o.max.x=n*.9,o.min.z=r*.1,o.max.z=r*.9;break;case"grass":case"flower":o.min.x=n*.2,o.max.x=n*.8,o.min.z=r*.2,o.max.z=r*.8;break;case"trafficCone":o.min.x=n*.2,o.max.x=n*.8,o.min.z=r*.2,o.max.z=r*.8,o.max.y=i*.75;break;case"sign":o.min.z=r*.4,o.max.z=r*.6;break;case"monitor":o.min.z=r*.3,o.max.z=r*.7;break;case"speaker":o.min.x=n*.2,o.max.x=n*.8,o.min.z=r*.2,o.max.z=r*.8;break;case"transformer":o.min.x=n*.1,o.max.x=n*.9,o.min.z=r*.1,o.max.z=r*.9;break;case"powerBox":case"fuseBox":o.min.z=r*.3,o.max.z=r;break;case"outlet":case"switchBox":o.min.x=n*.3,o.max.x=n*.7,o.min.z=r*.4,o.max.z=r,o.min.y=i*.3,o.max.y=i*.7;break;case"rampStraight":case"rampWide":break;case"roofCorner":case"roofValley":case"gable":break;case"drain":case"grate":o.max.y=i*.15;break;case"shield":o.min.z=r*.3,o.max.z=r*.7;break;case"banner":o.min.x=n*.4,o.max.x=n*.6,o.min.z=r*.4,o.max.z=r*.6;break;case"portcullis":o.min.z=r*.4,o.max.z=r*.6;break;case"wheel":o.min.x=n*.1,o.max.x=n*.9,o.min.y=i*.1,o.max.y=i*.9,o.min.z=r*.4,o.max.z=r*.6;break;case"axle":o.min.x=n*.45,o.max.x=n*.55,o.min.y=i*.45,o.max.y=i*.55;break;case"seat":o.max.y=i*.6;break;case"hull":case"wing":break;case"propeller":o.min.x=n*.2,o.max.x=n*.8,o.min.z=r*.4,o.max.z=r*.6;break;case"derrickLeg":o.min.x=n*.3,o.max.x=n*.7,o.min.z=r*.3,o.max.z=r*.7;break;case"derrickCross":o.min.y=i*.4,o.max.y=i*.6;break;case"derrickPlatform":o.max.y=i*.2;break;case"pumpJack":break;case"pumpBase":o.min.x=n*.1,o.max.x=n*.9,o.min.z=r*.2,o.max.z=r*.8,o.max.y=i*.25;break;case"oilTank":case"oilTankSmall":o.min.x=n*.1,o.max.x=n*.9,o.min.z=r*.1,o.max.z=r*.9;break;case"wellHead":o.min.x=n*.25,o.max.x=n*.75,o.min.z=r*.25,o.max.z=r*.75;break;case"pipelineX":o.min.y=i*.2,o.max.y=i*.8,o.min.z=r*.2,o.max.z=r*.8;break;case"pipelineZ":o.min.x=n*.2,o.max.x=n*.8,o.min.y=i*.2,o.max.y=i*.8;break;case"oilBarrel":o.min.x=n*.15,o.max.x=n*.85,o.min.z=r*.15,o.max.z=r*.85;break}return o}function VM(t,e){return t.min.x<e.max.x-.01&&t.max.x>e.min.x+.01&&t.min.y<e.max.y-.01&&t.max.y>e.min.y+.01&&t.min.z<e.max.z-.01&&t.max.z>e.min.z+.01}function HM(t){const e=px(t.type,t.dimensions),n=t.gridPosition,i=t.scale||1,r=t.rotation||{x:0,y:0,z:0},s=t.dimensions||{w:1,h:1,d:1},a=s.w*i/2,c=s.h*i/2,o=s.d*i/2,l=e.min.x*i-a,u=e.max.x*i-a,h=e.min.y*i-c,f=e.max.y*i-c,d=e.min.z*i-o,g=e.max.z*i-o,_=[{x:l,y:h,z:d},{x:u,y:h,z:d},{x:l,y:f,z:d},{x:u,y:f,z:d},{x:l,y:h,z:g},{x:u,y:h,z:g},{x:l,y:f,z:g},{x:u,y:f,z:g}],m=(r.y%360+360)%360,p=m*Math.PI/180,w=Math.cos(p),v=Math.sin(p),x=(r.x%360+360)%360,D=x*Math.PI/180,A=Math.cos(D),R=Math.sin(D),L=(r.z%360+360)%360,E=L*Math.PI/180,b=Math.cos(E),I=Math.sin(E);let V=1/0,B=-1/0,H=1/0,J=-1/0,G=1/0,te=-1/0;for(const xe of _){let De=xe.x,Ze=xe.y,Z=xe.z;if(x!==0){const ie=Ze*A-Z*R,ve=Ze*R+Z*A;Ze=ie,Z=ve}if(m!==0){const ie=De*w+Z*v,ve=-De*v+Z*w;De=ie,Z=ve}if(L!==0){const ie=De*b-Ze*I,ve=De*I+Ze*b;De=ie,Ze=ve}V=Math.min(V,De),B=Math.max(B,De),H=Math.min(H,Ze),J=Math.max(J,Ze),G=Math.min(G,Z),te=Math.max(te,Z)}const W=n.x+a,le=n.y+c,pe=n.z+o;return{min:{x:W+V,y:le+H,z:pe+G},max:{x:W+B,y:le+J,z:pe+te}}}function mx(t,e,n){const i=[],r=new y(t,e*.25,n*.25);i.push(r);const s=new y(t*.25,e*.25,n);return i.push(s),Le(i)}function gx(t,e,n){const i=[],r=Math.min(t,n)*.1,s=new y(t,r,r);s.translate(0,e*.4,0),i.push(s);const a=new y(t,r,r);a.translate(0,-e*.4,0),i.push(a);const c=3;for(let o=0;o<c;o++){const l=-t*.35+o*(t*.35),u=new y(r,e*.9,r);u.rotateZ(o%2===0?.5:-.5),u.translate(l,0,0),i.push(u)}return Le(i)}function _x(t,e,n){const i=[],r=t*.3,s=new y(t,e*.3,n*.25);return s.translate(0,-e*.1,0),i.push(s),[-t*.35,0,t*.35].forEach(c=>{const o=new y(r,e*.5,n*.25);o.translate(c,e*.15,0),i.push(o)}),Le(i)}function ls(t,e,n){const i=t/2,r=e/2,s=n/2,a=new Float32Array([-i,-r,s,i,-r,s,0,r,s,i,-r,-s,-i,-r,-s,0,r,-s,-i,-r,-s,i,-r,-s,i,-r,s,-i,-r,-s,i,-r,s,-i,-r,s,-i,-r,s,0,r,s,0,r,-s,-i,-r,s,0,r,-s,-i,-r,-s,i,-r,s,i,-r,-s,0,r,-s,i,-r,s,0,r,-s,0,r,s]),c=new ke;return c.setAttribute("position",new qe(a,3)),c.computeVertexNormals(),c}function xx(t,e,n){const i=t/2,r=e/2,s=n/2,a=new Float32Array([-i,-r,s,i,-r,s,-i,r,s,i,-r,-s,-i,-r,-s,-i,r,-s,-i,-r,-s,i,-r,-s,i,-r,s,-i,-r,-s,i,-r,s,-i,-r,s,-i,-r,s,-i,r,s,-i,r,-s,-i,-r,s,-i,r,-s,-i,-r,-s,i,-r,s,i,-r,-s,-i,r,-s,i,-r,s,-i,r,-s,-i,r,s]),c=new ke;return c.setAttribute("position",new qe(a,3)),c.computeVertexNormals(),c}function vx(t,e,n){const i=t/2,r=e/2,s=n/2,a=new Float32Array([-i,-r,s,i,-r,s,0,r,0,-i,-r,s,0,r,0,-i,-r,-s,i,-r,s,i,-r,-s,0,r,0,-i,-r,-s,0,r,0,i,-r,-s,-i,-r,-s,i,-r,-s,i,-r,s,-i,-r,-s,i,-r,s,-i,-r,s]),c=new ke;return c.setAttribute("position",new qe(a,3)),c.computeVertexNormals(),c}function Mx(t,e,n){const i=t/2,r=e/2,s=n/2,a=new Float32Array([-i,-r,-s,i,-r,-s,i,-r,s,-i,-r,-s,i,-r,s,-i,-r,s,-i,-r,s,i,-r,s,0,r,0,i,-r,s,i,-r,-s,0,r,0,i,-r,-s,-i,-r,-s,0,r,0,-i,-r,-s,-i,-r,s,0,r,0]),c=new ke;return c.setAttribute("position",new qe(a,3)),c.computeVertexNormals(),c}function bx(t,e,n){return new ee(t*.5,t*.5,e*.25,8,1,!1,0,Math.PI/2)}function yx(t,e,n){const i=Math.min(t,n)/2;return new Ye(i,16,8,0,Math.PI*2,0,Math.PI/2)}function Sx(t,e,n){const i=new Ye(Math.min(t,n)*.4,12,8),r=i.attributes.position;for(let s=0;s<r.count;s++){const a=r.getY(s);a>0&&r.setY(s,a*1.3)}return i.computeVertexNormals(),i}function wx(t,e,n){const i=[],r=n*.25,s=new y(t*.2,e*.6,r);s.translate(-t*.4,-e*.2,0),i.push(s);const a=new y(t*.2,e*.6,r);a.translate(t*.4,-e*.2,0),i.push(a);const c=ls(t*.6,e*.4,r);return c.translate(0,e*.3,0),i.push(c),Le(i)}function Ex(t,e,n){return new y(t,e*.25,n*.25)}function Tx(t,e,n){const i=t*.3,r=e*.5,s=n*.3,a=new Float32Array([-i,-r,s,i,-r,s,i*.7,r,s,-i,-r,s,i*.7,r,s,-i*.7,r,s,i,-r,-s,-i,-r,-s,-i*.7,r,-s,i,-r,-s,-i*.7,r,-s,i*.7,r,-s,-i*.7,r,s,i*.7,r,s,i*.7,r,-s,-i*.7,r,s,i*.7,r,-s,-i*.7,r,-s,-i,-r,-s,i,-r,-s,i,-r,s,-i,-r,-s,i,-r,s,-i,-r,s,-i,-r,s,-i*.7,r,s,-i*.7,r,-s,-i,-r,s,-i*.7,r,-s,-i,-r,-s,i,-r,s,i,-r,-s,i*.7,r,-s,i,-r,s,i*.7,r,-s,i*.7,r,s]),c=new ke;return c.setAttribute("position",new qe(a,3)),c.computeVertexNormals(),c}function Ax(t,e,n){return new ee(t*.4,t*.4,e*.25,5,1)}function Cx(t,e,n){const i=[],r=new Ye(t*.25,8,6);r.translate(-t*.15,e*.1,0),i.push(r);const s=new Ye(t*.25,8,6);s.translate(t*.15,e*.1,0),i.push(s);const a=new mt(t*.35,e*.4,8);return a.rotateZ(Math.PI),a.translate(0,-e*.15,0),i.push(a),Le(i)}function Rx(t,e,n){const i=[],r=new y(t*.15,e,n*.15);return r.translate(-t*.425,0,-n*.425),i.push(r),Le(i)}function Xc(t,e,n){return new y(t,e,n)}function Px(t,e,n){const i=[],r=new y(t*.2,e*.5,n*.2);r.translate(0,e*.25,-n*.15),i.push(r);const s=new y(t*.2,e*.2,n*.5);s.translate(0,0,n*0),i.push(s);const a=new y(t*.15,e*.5,n*.1);return a.rotateX(-Math.PI/4),a.translate(0,e*.1,-n*.05),i.push(a),Le(i)}function Lx(t,e,n){const i=[],r=new ee(t*.25,t*.3,e*.2,8);r.translate(0,-e*.3,0),i.push(r);const s=new Ye(t*.2,8,6);s.translate(0,e*.1,0),i.push(s);const a=new mt(t*.1,e*.3,8);return a.translate(0,e*.35,0),i.push(a),Le(i)}function Ix(t,e,n){return ls(t,e*.5,n*.3)}function Dx(t,e,n){return $t(t,e*.25,n,1)}function Ux(t,e,n){const i=[],r=t*.1;for(let s=-1;s<=1;s++){const a=new y(t,e*.1,r);a.translate(0,0,s*n*.35),i.push(a)}return Le(i)}function Nx(t,e,n){const i=[],r=new ee(t*.03,t*.03,e*.7,8);r.translate(0,-e*.1,0),i.push(r);const s=new mt(t*.45,e*.3,8);return s.rotateZ(Math.PI),s.translate(0,e*.25,0),i.push(s),Le(i)}function Fx(t,e,n){const i=[],r=new ee(t*.35,t*.3,e*.1,8);r.translate(0,e*.2,0),i.push(r);for(let s=0;s<4;s++){const a=s*Math.PI/2+Math.PI/4,c=new ee(t*.05,t*.05,e*.4,6);c.translate(Math.cos(a)*t*.2,-e*.05,Math.sin(a)*n*.2),i.push(c)}return Le(i)}function Ox(t,e,n){const i=[],r=new y(t*.9,e*.25,n*.9);r.translate(0,e*.05,0),i.push(r);const s=new y(t*.9,e*.4,n*.1);s.translate(0,e*.1,-n*.45),i.push(s);const a=new y(t,e*.15,n);return a.translate(0,-e*.15,0),i.push(a),Le(i)}function Bx(t,e,n){const i=[],r=new y(t,e*.1,n);r.translate(0,e*.35,0),i.push(r);const s=t*.08,a=e*.7;[[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([l,u])=>{const h=new y(s,a,s);h.translate(l*(t*.42),-e*.05,u*(n*.42)),i.push(h)});const o=new y(t*.4,e*.2,n*.8);return o.translate(t*.25,e*.1,0),i.push(o),Le(i)}function zx(t,e,n){const i=[],s=new y(t*.85,e*.05,n*.85);s.translate(0,-e*.35,0),i.push(s);const a=new y(t*.9,e*.7,.05*t);a.translate(0,0,n*.4),i.push(a);const c=a.clone();c.translate(0,0,-n*.8),i.push(c);const o=new y(.05*t,e*.7,n*.85);o.translate(-t*.42,0,0),i.push(o);const l=o.clone();return l.translate(t*.84,0,0),i.push(l),Le(i)}function kx(t,e,n){const i=[],r=new y(t*.95,e*.8,n*.95);r.translate(0,-e*.1,0),i.push(r);const s=new y(t,e*.1,n*.5);return s.translate(0,e*.35,-n*.25),i.push(s),Le(i)}function Vx(t,e,n){const i=[],r=t*.05,s=t*.15,a=Math.floor(t/s);for(let c=0;c<=a;c++){const o=new y(r,e*.125,n);o.translate(-t*.4+c*s,0,0),i.push(o)}return Le(i)}function Hx(t,e,n){const i=[],r=e*.5,s=new y(t*.5,r,n*.5);s.translate(t*.25,0,0),i.push(s);const a=new y(t*.5,r,n*.5);return a.translate(0,0,n*.25),i.push(a),Le(i)}function Gx(t,e,n){return new ee(t*.2,t*.4,e,8)}function Wx(t,e,n){const i=[],r=new y(t,e*.1,n*.8);r.translate(0,e*.05,0),i.push(r);const s=new ee(e*.1,e*.1,n*.9,8);s.rotateX(Math.PI/2),s.translate(-t*.4,-e*.05,0),i.push(s);const a=s.clone();return a.translate(t*.8,0,0),i.push(a),Le(i)}function Xx(t,e,n){const i=[],r=new ee(t*.2,t*.15,e*.3,8);r.translate(0,e*.1,0),i.push(r);const s=new y(t*.1,e*.2,n*.1);return s.translate(0,-e*.15,0),i.push(s),Le(i)}function Zx(t,e,n){return new Ht(Math.min(t,e,n)*.4,0)}function Yx(t,e,n){const i=[];for(let r=0;r<5;r++){const s=new mt(t*.05,e*.25,4),a=(Math.random()-.5)*t*.6,c=(Math.random()-.5)*n*.6;s.translate(a,0,c),i.push(s)}return Le(i)}function qx(t,e,n){const i=[],r=new ee(t*.02,t*.02,e*.4,6);r.translate(0,-e*.05,0),i.push(r);const s=new Ye(t*.15,8,6);return s.translate(0,e*.2,0),i.push(s),Le(i)}function Jx(t,e,n){const i=[],r=new y(t*.1,e*.7,n*.1);r.translate(0,-e*.15,0),i.push(r);const s=new y(t*.8,e*.5,n*.05);return s.translate(0,e*.25,0),i.push(s),Le(i)}function Kx(t,e,n){const i=[],r=new y(t*.9,e*.6,n*.1);r.translate(0,e*.1,0),i.push(r);const s=new y(t*.2,e*.3,n*.3);return s.translate(0,-e*.25,0),i.push(s),Le(i)}function $x(t,e,n){const i=[],r=new y(t*.8,e*.5,n*.6);i.push(r);const s=new ee(t*.25,t*.15,n*.2,12);return s.rotateX(Math.PI/2),s.translate(0,0,n*.35),i.push(s),Le(i)}function jx(t,e,n){const i=new Lt(Math.min(t,e,n)*.4,0);return i.scale(1,1.3,1),i}function Qx(t,e,n){const i=[],r=new mt(t*.25,e*.8,6);r.translate(0,e*.1,0),i.push(r);const s=new mt(t*.12,e*.4,6);s.translate(t*.2,-e*.1,n*.1),i.push(s);const a=new mt(t*.1,e*.3,6);return a.translate(-t*.15,-e*.15,-n*.15),i.push(a),Le(i)}function ev(t,e,n){const i=t/2,r=e/2,s=n/2,a=new Float32Array([-i,-r,-s,i,-r,-s,i,-r,s,-i,-r,-s,i,-r,s,-i,-r,s,-i,-r,s,i,-r,s,i,r,-s,i,-r,s,i,-r,-s,i,r,-s,-i,-r,-s,i,r,-s,i,-r,-s,-i,-r,-s,-i,-r,s,i,r,-s]),c=new ke;return c.setAttribute("position",new qe(a,3)),c.computeVertexNormals(),c}function tv(t,e,n){const i=t/2,r=e/2,s=n/2,a=new Float32Array([-i,r,-s,0,-r,0,-i,r,s,i,r,-s,i,r,s,0,-r,0,-i,r,s,0,-r,0,i,r,s,i,r,-s,0,-r,0,-i,r,-s,-i,r,-s,-i,r,s,0,-r,0,i,r,s,i,r,-s,0,-r,0]),c=new ke;return c.setAttribute("position",new qe(a,3)),c.computeVertexNormals(),c}function nv(t,e,n){return ls(t,e,n*.25)}function iv(t,e,n){const i=[],r=new ee(t*.3,t*.35,e*.25,8);i.push(r);const s=new ee(t*.32,t*.32,e*.05,8);return s.translate(0,e*.1,0),i.push(s),Le(i)}function rv(t,e,n){const i=[],r=t*.08,s=4;for(let a=0;a<s;a++){const c=new y(t*.9,e*.125,r);c.translate(0,0,-n*.3+a*n*.2),i.push(c)}return Le(i)}function sv(t,e,n){return new y(t*.7,e*.125,n*.5)}function av(t,e,n){const i=[],r=new ee(t*.03,t*.03,e,6);r.translate(-t*.4,0,0),i.push(r);const s=new y(t*.7,e*.8,n*.02);return s.translate(0,-e*.05,0),i.push(s),Le(i)}function ov(t,e,n){const i=[],r=t*.05;for(let s=0;s<5;s++){const a=new y(r,e,r);a.translate(-t*.4+s*t*.2,0,0),i.push(a)}for(let s=0;s<4;s++){const a=new y(t,r,r);a.translate(0,-e*.35+s*e*.25,0),i.push(a)}return Le(i)}function cv(t,e,n){const i=[],r=new y(t*.8,e*.15,n*.7);r.translate(0,0,0),i.push(r);const s=new y(t*.8,e*.4,n*.1);return s.translate(0,e*.2,-n*.3),i.push(s),Le(i)}function lv(t,e,n){const i=new ee(t*.3,t*.4,n,8,1,!1,0,Math.PI);return i.rotateZ(Math.PI/2),i.rotateY(Math.PI/2),i}function uv(t,e,n){const i=[],r=new ee(t*.1,t*.1,e*.25,8);i.push(r);for(let s=0;s<3;s++){const a=new y(t*.4,e*.05,n*.1);a.rotateY(s*Math.PI*2/3),a.translate(t*.2,0,0),a.rotateY(s*Math.PI*2/3),i.push(a)}return Le(i)}function hv(t,e,n){const i=t/2,r=e*.125/2,s=n/2,a=new Float32Array([-i,r,-s,i*.3,r,-s,i,r,s,-i,r,-s,i,r,s,-i,r,s,-i,-r,s,i,-r,s,i*.3,-r,-s,-i,-r,s,i*.3,-r,-s,-i,-r,-s,-i,r,s,i,r,s,i,-r,s,-i,r,s,i,-r,s,-i,-r,s,i*.3,r,-s,-i,r,-s,-i,-r,-s,i*.3,r,-s,-i,-r,-s,i*.3,-r,-s,i,r,s,i*.3,r,-s,i*.3,-r,-s,i,r,s,i*.3,-r,-s,i,-r,s]),c=new ke;return c.setAttribute("position",new qe(a,3)),c.computeVertexNormals(),c}function fv(t,e,n){const i=Math.min(t,n)*.1,r=[],s=new y(i,e,i);r.push(s);const a=t*.35;for(let u=0;u<3;u++){const h=-e*.35+u*e*.35,f=new y(a,i*.6,i*.6);f.translate(a*.5,h,0),r.push(f)}const c=Math.sqrt(e*e*.25+a*a*.25)*.8,o=Math.atan2(e*.35,a*.5),l=new y(i*.5,c,i*.5);return l.rotateZ(-o),l.translate(a*.25,0,0),r.push(l),K(r,!1)||r[0]}function dv(t,e,n){const i=Math.min(t,n)*.08,r=[],s=new y(i,Math.sqrt(t*t+e*e)*.5,i);s.rotateZ(Math.PI*.25),r.push(s);const a=new y(i,Math.sqrt(t*t+e*e)*.5,i);return a.rotateZ(-Math.PI*.25),r.push(a),K(r,!1)||r[0]}function pv(t,e,n){const i=[],r=new y(t*.9,e*.25,n*.9);i.push(r);const s=new y(t*.95,e*.1,n*.05);s.translate(0,-e*.08,n*.45),i.push(s);const a=new y(t*.95,e*.1,n*.05);return a.translate(0,-e*.08,-n*.45),i.push(a),K(i,!1)||i[0]}function mv(t,e,n){const i=[],r=new y(t*.7,e*.08,n*.5);r.translate(0,-e*.46,0),i.push(r);const s=new y(t*.25,e*.2,n*.3);s.translate(-t*.15,-e*.32,0),i.push(s);const a=new y(t*.08,e*.55,n*.08);a.translate(-t*.05,-e*.125,n*.12),i.push(a);const c=new y(t*.08,e*.55,n*.08);c.translate(-t*.05,-e*.125,-n*.12),i.push(c);const o=new y(t*.1,e*.08,n*.35);o.translate(-t*.05,e*.15,0),i.push(o);const l=new y(t*.85,e*.08,n*.1);l.translate(t*.1,e*.22,0),i.push(l);const u=new y(t*.1,e*.15,n*.08);u.translate(t*.48,e*.15,0),i.push(u);const h=new y(t*.04,e*.12,n*.04);h.translate(t*.48,e*.02,0),i.push(h);const f=new y(t*.05,e*.25,n*.05);f.rotateZ(Math.PI*.15),f.translate(-t*.25,e*0,0),i.push(f);const d=new ee(n*.12,n*.12,t*.08,12);d.rotateZ(Math.PI/2),d.translate(-t*.28,-e*.15,0),i.push(d);const g=new y(t*.06,e*.18,n*.08);g.translate(-t*.28,-e*.06,n*.1),i.push(g);const _=new y(t*.06,e*.18,n*.08);return _.translate(-t*.28,-e*.06,-n*.1),i.push(_),K(i,!1)||i[0]}function gv(t,e,n){const i=[],r=Math.min(e,n)*.4,s=new ee(r,r,t*.8,16,1,!1);s.rotateZ(Math.PI/2),i.push(s);const a=new Ye(r,12,8,0,Math.PI*2,0,Math.PI/2);a.rotateZ(Math.PI/2),a.translate(t*.4,0,0),i.push(a);const c=new Ye(r,12,8,0,Math.PI*2,0,Math.PI/2);c.rotateZ(-Math.PI/2),c.translate(-t*.4,0,0),i.push(c);const o=new y(t*.1,e*.15,n*.5);o.translate(-t*.25,-r-e*.075,0),i.push(o);const l=new y(t*.1,e*.15,n*.5);l.translate(t*.25,-r-e*.075,0),i.push(l);const u=new y(t*.08,e*.2,n*.08);u.translate(-t*.25,-r-e*.25,n*.2),i.push(u);const h=new y(t*.08,e*.2,n*.08);h.translate(-t*.25,-r-e*.25,-n*.2),i.push(h);const f=new y(t*.08,e*.2,n*.08);f.translate(t*.25,-r-e*.25,n*.2),i.push(f);const d=new y(t*.08,e*.2,n*.08);return d.translate(t*.25,-r-e*.25,-n*.2),i.push(d),K(i,!1)||i[0]}function _v(t,e,n){const i=[],r=new ee(Math.min(t,n)*.35,Math.min(t,n)*.35,e*.45,12);i.push(r);const s=new Ye(Math.min(t,n)*.35,12,8,0,Math.PI*2,0,Math.PI/2);s.translate(0,e*.225,0),i.push(s);const a=new ee(t*.05,t*.05,e*.15,8);return a.translate(0,e*.35,0),i.push(a),K(i,!1)||i[0]}function xv(t,e,n){const i=[],r=new ee(t*.35,t*.4,e*.15,8);r.translate(0,-e*.175,0),i.push(r);const s=new y(t*.3,e*.25,n*.3);s.translate(0,e*.025,0),i.push(s);const a=new ee(t*.12,t*.12,e*.15,8);a.translate(0,e*.175,0),i.push(a);const c=new ee(t*.08,t*.08,n*.25,8);return c.rotateX(Math.PI/2),c.translate(0,0,n*.25),i.push(c),K(i,!1)||i[0]}function vv(t,e,n){const i=Math.min(t,n)*.4,r=[],s=new ee(i*.95,i*.95,e*.9,12);r.push(s);const a=new xt(i*.85,i*.08,6,12);a.rotateX(Math.PI/2),a.translate(0,e*.45,0),r.push(a);const c=new xt(i*.85,i*.08,6,12);c.rotateX(Math.PI/2),c.translate(0,-e*.45,0),r.push(c);const o=new xt(i*.95,i*.05,6,12);return o.rotateX(Math.PI/2),r.push(o),K(r,!1)||r[0]}function Mv(t,e,n){const i=new Ht(Math.min(t,e,n)*.25,0);return i.translate(0,-e*.15,0),i}function bv(t,e,n){const i=[],r=new Ht(Math.min(t,n)*.45,1);r.scale(1,.7,1),i.push(r);const s=new Ht(Math.min(t,n)*.25,0);return s.translate(t*.2,e*.1,n*.15),i.push(s),K(i,!1)||i[0]}function yv(t,e,n){const i=new Ht(Math.min(t,n)*.4,1);return i.scale(1,.3,1),i.translate(0,-e*.2,0),i}function Sv(t,e,n){const i=new Ht(Math.min(t,n)*.3,1);return i.scale(.7,1.5,.7),i}function wv(t,e,n){const i=[],r=new Ht(Math.min(t,n)*.35,0);r.scale(1,.6,1),r.translate(0,-e*.15,0),i.push(r);const s=new mt(t*.15,e*.4,4);s.translate(-t*.1,e*.1,-n*.05),s.rotateZ(.2),i.push(s);const a=new mt(t*.12,e*.35,4);return a.translate(t*.1,e*.05,n*.1),a.rotateZ(-.15),i.push(a),K(i,!1)||i[0]}function Ev(t,e,n){const i=[],r=4+Math.floor(Math.random()*3);for(let s=0;s<r;s++){const a=Math.min(t,n)*(.15+Math.random()*.2),c=new Ht(a,0),o=(Math.random()-.5)*t*.6,l=(Math.random()-.5)*n*.6,u=-e*.25+a;c.translate(o,u,l),i.push(c)}return K(i,!1)||i[0]}function Tv(t,e,n){const i=[];for(let r=0;r<3;r++){const s=Math.min(t,n)*(.2+Math.random()*.15),a=new Ht(s,0),c=r/3*Math.PI*2;a.translate(Math.cos(c)*t*.2,-e*.2,Math.sin(c)*n*.2),i.push(a)}for(let r=0;r<2;r++){const s=Math.min(t,n)*(.12+Math.random()*.1),a=new Ht(s,0);a.translate((Math.random()-.5)*t*.3,e*.05,(Math.random()-.5)*n*.3),i.push(a)}return K(i,!1)||i[0]}function Av(t,e,n){const i=[],r=8+Math.floor(Math.random()*5);for(let s=0;s<r;s++){const a=Math.min(t,n)*(.05+Math.random()*.08),c=new Ye(a,5,4);c.scale(1,.6,1);const o=(Math.random()-.5)*t*.7,l=(Math.random()-.5)*n*.7;c.translate(o,-e*.35,l),i.push(c)}return K(i,!1)||i[0]}function Cv(t,e,n){const i=[];for(let r=0;r<3;r++){const s=new y(t*(.6+Math.random()*.3),e*.08,n*(.5+Math.random()*.3));s.translate((Math.random()-.5)*t*.15,-e*.25+r*e*.1,(Math.random()-.5)*n*.15),s.rotateY(Math.random()*.3),i.push(s)}return K(i,!1)||i[0]}function Rv(t,e,n){const i=new Lt(Math.min(t,n)*.2,0);return i.scale(.6,1,.6),i.translate(0,-e*.15,0),i}function Pv(t,e,n){const i=[],r=new Lt(Math.min(t,n)*.35,0);r.scale(.7,1.3,.7),i.push(r);const s=new Lt(Math.min(t,n)*.2,0);return s.scale(.6,1,.6),s.translate(t*.25,-e*.1,n*.15),s.rotateZ(.3),i.push(s),K(i,!1)||i[0]}function Lv(t,e,n){const i=[],r=5+Math.floor(Math.random()*3);for(let s=0;s<r;s++){const a=Math.min(t,n)*(.1+Math.random()*.15),c=new Lt(a,0);c.scale(.5,1+Math.random()*.5,.5);const o=(Math.random()-.5)*t*.5,l=(Math.random()-.5)*n*.5,u=-e*.2+a*.5;c.translate(o,u,l),c.rotateZ((Math.random()-.5)*.4),c.rotateX((Math.random()-.5)*.4),i.push(c)}return K(i,!1)||i[0]}function Iv(t,e,n){const i=new Lt(Math.min(t,n)*.25,0);return i.scale(.4,2,.4),i}function Dv(t,e,n){const i=[],r=new ee(Math.min(t,n)*.35,Math.min(t,n)*.4,e*.15,6);r.translate(0,-e*.3,0),i.push(r);for(let s=0;s<3;s++){const a=new Lt(Math.min(t,n)*.1,0);a.scale(.5,1,.5);const c=s/3*Math.PI*2;a.translate(Math.cos(c)*t*.15,-e*.1,Math.sin(c)*n*.15),i.push(a)}return K(i,!1)||i[0]}function Uv(t,e,n){const i=[],r=new Lt(Math.min(t,n)*.2,0);r.scale(.3,1.8,.5),r.rotateZ(.2),i.push(r);const s=new Lt(Math.min(t,n)*.1,0);return s.scale(.4,.8,.3),s.translate(t*.15,-e*.2,n*.1),s.rotateZ(-.5),i.push(s),K(i,!1)||i[0]}function Nv(t,e,n){const i=[],r=new Lt(Math.min(t,n)*.25,0);r.scale(.6,1.5,.6),i.push(r);const s=[0,Math.PI*.5,Math.PI,Math.PI*1.5];for(let a=0;a<s.length;a++){const c=new Lt(Math.min(t,n)*.15,0);c.scale(.5,1+Math.random()*.3,.5);const o=Math.min(t,n)*.25;c.translate(Math.cos(s[a])*o,-e*.1,Math.sin(s[a])*o),c.rotateZ((Math.random()-.5)*.5),i.push(c)}return K(i,!1)||i[0]}function Fv(t,e,n){const i=new mt(Math.min(t,n)*.25,e*.8,6);return i.rotateX(Math.PI),i.translate(0,e*.1,0),i}function Ov(t,e,n){const i=[],r=new mt(Math.min(t,n)*.2,e*.7,6);r.translate(0,-e*.15,0),i.push(r);const s=new mt(Math.min(t,n)*.3,e*.2,6);return s.translate(0,-e*.4,0),i.push(s),K(i,!1)||i[0]}function Bv(t,e,n){const i=[],r=new ee(t*.08,t*.1,e*.4,8);r.translate(0,-e*.1,0),i.push(r);const s=new Ye(Math.min(t,n)*.25,8,6,0,Math.PI*2,0,Math.PI*.6);return s.translate(0,e*.15,0),i.push(s),K(i,!1)||i[0]}function zv(t,e,n){const i=[],r=[{x:0,z:0,scale:1},{x:t*.2,z:n*.15,scale:.7},{x:-t*.15,z:n*.2,scale:.6},{x:t*.1,z:-n*.2,scale:.5}];for(const s of r){const a=new ee(t*.05*s.scale,t*.06*s.scale,e*.3*s.scale,6);a.translate(s.x,-e*.2+e*.15*s.scale,s.z),i.push(a);const c=new Ye(Math.min(t,n)*.15*s.scale,6,5,0,Math.PI*2,0,Math.PI*.6);c.translate(s.x,-e*.05+e*.15*s.scale,s.z),i.push(c)}return K(i,!1)||i[0]}function kv(t,e,n){const i=[],r=6+Math.floor(Math.random()*4);for(let s=0;s<r;s++){const a=Math.min(t,n)*(.1+Math.random()*.15),c=new Ye(a,5,4);c.scale(1,.4,1);const o=(Math.random()-.5)*t*.7,l=(Math.random()-.5)*n*.7;c.translate(o,-e*.35,l),i.push(c)}return K(i,!1)||i[0]}function Vv(t,e,n){const i=[];for(let r=0;r<4;r++){const s=(Math.random()-.5)*t*.6,a=(Math.random()-.5)*n*.6,c=e*(.5+Math.random()*.4),o=new ee(t*.02,t*.015,c,4);if(o.translate(s,-c*.3,a),i.push(o),Math.random()>.5){const l=new Ye(t*.06,4,3);l.scale(1,.3,.6),l.translate(s+t*.05,-c*.2+e*.1,a),i.push(l)}}return K(i,!1)||i[0]}function Hv(t,e,n){const i=[],r=4+Math.floor(Math.random()*3);for(let s=0;s<r;s++){const a=s/r*Math.PI*2+Math.random()*.5,c=e*(.3+Math.random()*.3),o=new ee(t*.04,t*.06,c,5);o.translate(0,c*.3,0),o.rotateZ((Math.random()-.5)*.8),o.rotateY(a),o.translate(0,-e*.2,0),i.push(o);const l=new Ye(t*.06,5,4);l.translate(Math.sin(a)*c*.3,c*.4-e*.2,Math.cos(a)*c*.3),i.push(l)}return K(i,!1)||i[0]}function Gv(t,e,n){const i=[];for(let s=0;s<6;s++){const a=s/6,c=t*.3*(.8+Math.sin(a*Math.PI*3)*.3),o=e/6,l=new ee(c,c,o,8,1);l.translate(0,s*o-e*.5+o*.5,0),i.push(l)}return K(i,!1)||i[0]}function Wv(t,e,n){const i=[],r=new ee(t*.35,t*.35,e*.4,8);i.push(r);const s=new mt(t*.15,n*.4,6);s.rotateX(Math.PI/2),s.translate(0,e*.1,-n*.2),i.push(s);const a=new mt(t*.1,t*.3,6);a.rotateZ(-Math.PI/2),a.translate(-t*.3,e*.1,0),i.push(a);const c=new mt(t*.1,t*.3,6);return c.rotateZ(Math.PI/2),c.translate(t*.3,e*.1,0),i.push(c),K(i,!1)||i[0]}function Xv(t,e,n){const i=[];for(let a=0;a<4;a++){const c=a/3,o=-e*.4+c*e*.8,l=new xt(t*.3,t*.04,6,8,Math.PI);l.rotateY(Math.PI/2),l.rotateZ(Math.PI*.3),l.translate(-t*.2,o,0),i.push(l);const u=new xt(t*.3,t*.04,6,8,Math.PI);u.rotateY(-Math.PI/2),u.rotateZ(-Math.PI*.3),u.translate(t*.2,o,0),i.push(u)}const s=new ee(t*.05,t*.05,e*.9,6);return i.push(s),K(i,!1)||i[0]}function Zv(t,e,n){const i=[],r=new ee(t*.3,t*.28,e*.6,8);i.push(r);for(let s=0;s<6;s++){const a=s/6*Math.PI*2,c=new y(t*.08,e*.8,n*.08);c.translate(Math.sin(a)*t*.28,0,Math.cos(a)*n*.28),i.push(c)}return K(i,!1)||i[0]}function Yv(t,e,n){const i=[];for(let s=0;s<8;s++){const a=s/8,c=a*Math.PI*.5,o=t*.25*(1+Math.sin(a*Math.PI*4)*.2),l=new ee(o,o,e/8,8);l.rotateY(c),l.translate(0,s*e/8-e*.5+e/8*.5,0),i.push(l)}return K(i,!1)||i[0]}function qv(t,e,n){const i=[],r=new y(t,e,n*.2);i.push(r);const s=5;for(let a=0;a<s;a++){const c=-t*.4+a/(s-1)*t*.8,o=new y(t*.08,e*.9,n*.3);o.translate(c,0,n*.05),i.push(o)}return K(i,!1)||i[0]}function Jv(t,e,n){const i=[],r=new y(t,e,n*.3);i.push(r);const s=4;for(let a=0;a<s;a++){const c=-e*.3+a/(s-1)*e*.6,o=new y(t*.8,e*.08,n*.4);o.translate(0,c,n*.05),i.push(o)}return K(i,!1)||i[0]}function Kv(t,e,n){const i=[],r=new y(t,e*.05,n);i.push(r);const s=5;for(let a=0;a<s;a++){const c=-t*.4+a/(s-1)*t*.8,o=new ee(t*.015,t*.015,n*.9,6);o.rotateX(Math.PI/2),o.translate(c,e*.05,0),i.push(o)}return K(i,!1)||i[0]}function $v(t,e,n){const i=[];for(let s=0;s<8;s++){const a=s/8,c=Math.sin(a*Math.PI*3)*.5,o=t*.15*(1-a*.5),l=new ee(o,o,e/8,6);l.rotateZ(c),l.translate(Math.sin(a*Math.PI*2)*t*.2,s*e/8-e*.5,Math.cos(a*Math.PI*2)*n*.2),i.push(l)}return K(i,!1)||i[0]}function jv(t,e,n){const i=[],r=new Ye(Math.min(t,e,n)*.4,10,8);i.push(r);const s=8;for(let a=0;a<s;a++){const c=Math.acos(-1+2*a/s),o=Math.sqrt(s*Math.PI)*c,l=Math.min(t,e,n)*.4,u=new Ye(t*.08,6,4);u.translate(l*Math.sin(c)*Math.cos(o),l*Math.sin(c)*Math.sin(o),l*Math.cos(c)),i.push(u)}return K(i,!1)||i[0]}function Qv(t,e,n){const i=[],r=new y(t*.9,e,n*.9);i.push(r);const s=new y(t,e*.3,n*.1);s.translate(0,0,n*.45),i.push(s);const a=new y(t*.1,e*.3,n);return a.translate(t*.45,0,0),i.push(a),K(i,!1)||i[0]}function eM(t,e,n){const i=[];for(let s=0;s<12;s++){const c=s/12*Math.PI*2,o=new y(t*.6,e/12,n*.6);o.rotateY(c),o.translate(0,s*e/12-e*.5,0),i.push(o)}return K(i,!1)||i[0]}function tM(t,e,n){const i=[];for(let s=0;s<10;s++){const c=s/9*Math.PI,o=t*.4,l=Math.sin(c)*o-o,u=-Math.cos(c)*o,h=new Ye(t*.15,6,6);h.scale(1,1.2,.8),h.translate(l,u+e*.5,0),i.push(h)}return K(i,!1)||i[0]}function nM(t,e,n){const i=[];for(let s=0;s<6;s++){const a=s/6,c=t*.3*(1+Math.sin(a*Math.PI*6)*.4),o=new ee(c,c,e/6,8);if(o.translate(0,s*e/6-e*.5,0),i.push(o),s<5){const l=new xt(t*.32,t*.03,6,8);l.rotateX(Math.PI/2),l.translate(0,(s+.5)*e/6-e*.5,0),i.push(l)}}return K(i,!1)||i[0]}function iM(t,e,n){const i=[];for(let s=0;s<4;s++){const a=-t*.4+s/3*t*.8,c=new y(t*.22,e,n*.9);c.translate(a,0,0),i.push(c)}return K(i,!1)||i[0]}function rM(t,e,n){const i=[],r=new ee(t*.08,t*.1,e*.8,6);r.rotateZ(Math.PI*.15),r.translate(-t*.3,e*.1,0),i.push(r);const s=new ee(t*.08,t*.1,e*.8,6);s.rotateZ(-Math.PI*.15),s.translate(t*.3,e*.1,0),i.push(s);const a=new ee(t*.08,t*.08,t*.7,6);return a.rotateZ(Math.PI/2),a.translate(0,e*.4,0),i.push(a),K(i,!1)||i[0]}function sM(t,e,n){const i=[],r=new Ye(Math.min(t,n)*.4,8,6,0,Math.PI*2,0,Math.PI*.6);r.translate(0,e*.2,0),i.push(r);const s=new Ye(t*.15,6,4);return s.translate(-t*.2,e*.1,n*.3),i.push(s),K(i,!1)||i[0]}function aM(t,e,n){const i=[],r=new ee(Math.min(t,e)*.4,Math.min(t,e)*.4,n,8);r.rotateX(Math.PI/2),i.push(r);const s=6;for(let a=0;a<s;a++){const c=-n*.4+a/(s-1)*n*.8,o=new xt(Math.min(t,e)*.42,Math.min(t,e)*.04,6,8);o.rotateY(Math.PI/2),o.translate(0,0,c),i.push(o)}return K(i,!1)||i[0]}function oM(t,e,n){const i=[],r=6+Math.floor(Math.random()*4);for(let s=0;s<r;s++){const a=s/r*Math.PI*2+Math.random()*.8,c=Math.random()*t*.3,o=t*(.1+Math.random()*.15),l=new Ye(o,6,5);l.scale(1,1+Math.random()*.5,1),l.translate(Math.sin(a)*c,(Math.random()-.5)*e*.5,Math.cos(a)*c),i.push(l)}return K(i,!1)||i[0]}function cM(t,e,n){const i=[],r=new Ye(t*.15,8,6);i.push(r);const s=8;for(let a=0;a<s;a++){const c=a/s*Math.PI*2,o=e*(.3+Math.random()*.2),l=new ee(t*.02,t*.01,o,4);l.rotateZ((Math.random()-.5)*.8),l.rotateY(c),l.translate(Math.sin(c)*t*.15,-o*.3,Math.cos(c)*n*.15),i.push(l)}return K(i,!1)||i[0]}function lM(t,e,n){const i=[],r=new Ye(Math.min(t,n)*.45,8,6,0,Math.PI*2,0,Math.PI*.5);r.scale(1,e/Math.min(t,n),1),i.push(r);const s=5;for(let a=0;a<s;a++){const c=a/s,o=new xt(Math.min(t,n)*.45*(1-c*.2),t*.02,4,8);o.rotateX(Math.PI/2),o.translate(0,-e*.3+c*e*.4,0),i.push(o)}return K(i,!1)||i[0]}function uM(t,e,n){const i=[],r=new Ye(Math.min(t,e,n)*.3,10,8);i.push(r);for(let s=0;s<3;s++){const a=1+s*.15,c=new xt(Math.min(t,e,n)*.3*a,t*.02,6,12);c.rotateX(Math.PI/3*s),c.rotateY(Math.PI/4*s),i.push(c)}return K(i,!1)||i[0]}function hM(t,e,n){const i=[];for(let s=0;s<8;s++){const a=s/8,c=t*.3*(1-a*.8)*(1+Math.sin(a*Math.PI*8)*.15),o=new ee(c,c,e/8,6);o.translate(0,s*e/8-e*.5,0),i.push(o)}return K(i,!1)||i[0]}function fM(t,e,n){const i=[],r=new Ye(Math.min(t,e,n)*.35,8,6);r.scale(1.2,1,.9),i.push(r);const s=5;for(let a=0;a<s;a++){const c=a/s*Math.PI*2,o=new Ye(t*.12,6,4);o.translate(Math.sin(c)*t*.25,(Math.random()-.5)*e*.3,Math.cos(c)*n*.25),i.push(o)}return K(i,!1)||i[0]}function dM(t,e,n){const i=[],r=new ee(t*.35,t*.35,e*.8,8);i.push(r);const s=new Ye(t*.25,8,6);i.push(s);for(let a=0;a<4;a++){const c=a/4*Math.PI*2,o=new ee(t*.03,t*.02,e*.3,6);o.rotateZ(Math.PI*.3),o.rotateY(c),o.translate(Math.sin(c)*t*.2,e*.4,Math.cos(c)*n*.2),i.push(o)}return K(i,!1)||i[0]}export{hs as $,IM as A,ke as B,OM as C,LM as D,wM as E,Ha as F,Pr as G,RM as H,yM as I,ol as J,Tn as K,n0 as L,pM as M,Nt as N,qt as O,zn as P,Ci as Q,$a as R,NM as S,mM as T,ot as U,P as V,xM as W,qr as X,du as Y,lr as Z,Qt as _,ce as a,Wn as a0,Gn as a1,la as a2,ua as a3,Oa as a4,tt as a5,y as a6,MM as a7,tn as a8,vc as a9,Rn as aA,ct as aB,gM as aC,zM as aD,K as aa,SM as ab,ts as ac,os as ad,AM as ae,Ge as af,_l as ag,gn as ah,oh as ai,Zn as aj,ir as ak,An as al,xo as am,EM as an,je as ao,at as ap,au as aq,ou as ar,cu as as,lu as at,hu as au,fu as av,Jn as aw,FM as ax,Vt as ay,Pt as az,_M as b,vM as c,Qe as d,DM as e,zl as f,kt as g,rr as h,ul as i,fn as j,Jt as k,bM as l,TM as m,BM as n,kM as o,PM as p,rg as q,sg as r,ig as s,HM as t,VM as u,UM as v,CM as w,zt as x,st as y,qe as z};
