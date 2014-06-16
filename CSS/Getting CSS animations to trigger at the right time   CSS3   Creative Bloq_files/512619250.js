/* mycon-bgas 14.03.17-12-12 (2014-03-17 17:46:06 GMT) */

rsinetsegs=['A08721_50225','A08721_50239','A08721_50191','A08721_50193','A08721_50142','A08721_50424','A08721_0'];
var rsiExp=new Date((new Date()).getTime()+2419200000);
var rsiDom='.creativebloq.com';
var rsiSegs="";
var rsiPat=/.*_5.*/;
for(x=0;x<rsinetsegs.length;++x){if(!rsiPat.test(rsinetsegs[x]))rsiSegs+='|'+rsinetsegs[x];}
document.cookie="asi_segs="+(rsiSegs.length>0?rsiSegs.substr(1):"")+";expires="+rsiExp.toGMTString()+";path=/;domain="+rsiDom;
document.cookie="rsi_segs="+(rsiSegs.length>0?rsiSegs.substr(1):"")+";expires="+rsiExp.toGMTString()+";path=/;domain="+rsiDom;
if(typeof(DM_onSegsAvailable)=="function"){DM_onSegsAvailable(['A08721_50225','A08721_50239','A08721_50191','A08721_50193','A08721_50142','A08721_50424','A08721_0'],'a08721');} 