(this.webpackJsonphandpose=this.webpackJsonphandpose||[]).push([[0],{271:function(e,t,n){e.exports=n(297)},276:function(e,t,n){},282:function(e,t){},283:function(e,t){},291:function(e,t){},294:function(e,t){},295:function(e,t){},296:function(e,t,n){},297:function(e,t,n){"use strict";n.r(t);var r=n(62),a=n.n(r),o=n(229),i=n.n(o),c=(n(276),n(4)),u=n.n(c),s=n(12),l=n(87),f=n(249),d=n.n(f),h=(n(296),n(6)),m={1:{name:"Hello",color:"red"},2:{name:"Thank You",color:"yellow"},3:{name:"I Love You",color:"lime"},4:{name:"Yes",color:"blue"},5:{name:"No",color:"purple"}},p=function(e,t,n,r,a,o,i){for(var c=0;c<=e.length;c++)if(e[c]&&t[c]&&n[c]>r){var u=Object(h.a)(e[c],4),s=u[0],l=u[1],f=u[2],d=u[3],p=t[c];i.strokeStyle=m[p].color,i.lineWidth=10,i.fillStyle="white",i.font="30px Arial",i.beginPath(),i.fillText(m[p].name+" - "+Math.round(100*n[c])/100,l*a,s*o-10),i.rect(l*a,s*o,d*a/2,f*o/1.5),i.stroke()}};var v=function(){var e=Object(r.useRef)(null),t=Object(r.useRef)(null),n=function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.d("https://tensorflowjsrealtimemodel.s3.au-syd.cloud-object-storage.appdomain.cloud/model.json");case 2:t=e.sent,setInterval((function(){o(t)}),16.7);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var n=Object(s.a)(u.a.mark((function n(r){var a,o,i,c,s,f,d,h,m,v,g,b;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("undefined"===typeof e.current||null===e.current||4!==e.current.video.readyState){n.next=32;break}return a=e.current.video,o=e.current.video.videoWidth,i=e.current.video.videoHeight,e.current.video.width=o,e.current.video.height=i,t.current.width=o,t.current.height=i,c=l.a.fromPixels(a),s=l.c.resizeBilinear(c,[640,480]),f=s.cast("int32"),d=f.expandDims(0),n.next=14,r.executeAsync(d);case 14:return h=n.sent,console.log(h),n.next=18,h[1].array();case 18:return m=n.sent,n.next=21,h[2].array();case 21:return v=n.sent,n.next=24,h[4].array();case 24:g=n.sent,b=t.current.getContext("2d"),requestAnimationFrame((function(){p(m[0],v[0],g[0],.8,o,i,b)})),l.b(c),l.b(s),l.b(f),l.b(d),l.b(h);case 32:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(r.useEffect)((function(){n()}),[]),a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement(d.a,{ref:e,muted:!0,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:9,width:640,height:480}}),a.a.createElement("canvas",{ref:t,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:8,width:640,height:480}})))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root"))}},[[271,1,2]]]);
//# sourceMappingURL=main.0c45846c.chunk.js.map