import{s as K,a as N,n as w,c as Q,u as R,g as U,b as $}from"../chunks/scheduler.qAf2VIfS.js";import{S as B,i as F,e as g,c as y,a as D,d as _,b as v,s as M,f as k,t as T,g as G,h as j,j as J,k as S,l as E,m as H,n as A,o as O,p as W,q as X,r as L,u as Y}from"../chunks/index.Dn_sawV-.js";import{e as q}from"../chunks/each.D6YF6ztN.js";function P(r,e,l){const t=r.slice();return t[8]=e[l].name,t[9]=e[l].href,t}function Z(r){let e,l=`<span class="text-6xl text-center leading-loose">題目沒做完還想偷看ㄏㄚˋ！<br/>
        (／｀Д´)／~ ╧╧</span>`;return{c(){e=g("div"),e.innerHTML=l,this.h()},l(t){e=y(t,"DIV",{class:!0,"data-svelte-h":!0}),S(e)!=="svelte-1ln9u21"&&(e.innerHTML=l),this.h()},h(){v(e,"class","min-h-48 flex flex-row justify-center items-center")},m(t,f){k(t,e,f)},p:w,i:w,o:w,d(t){t&&_(e)}}}function ee(r){let e,l,t,f,h,p,n,o=`<div class="mx-auto my-8 container">謹獻 雪迎、悠娜<br/>
        企劃：伏伏、哈洛斯<br/>
        協作：<br/>
        協力：雪Q餅、羊毛糰</div>`,b,a=r[0]!=="/"&&x(),i=q(r[3]),c=[];for(let s=0;s<i.length;s+=1)c[s]=z(P(r,i,s));const V=r[6].default,m=Q(V,r,r[5],null);return{c(){a&&a.c(),e=E(),l=g("div"),t=g("div");for(let s=0;s<c.length;s+=1)c[s].c();f=E(),h=g("div"),m&&m.c(),p=E(),n=g("div"),n.innerHTML=o,this.h()},l(s){a&&a.l(s),e=H(s),l=y(s,"DIV",{class:!0});var d=D(l);t=y(d,"DIV",{role:!0,class:!0});var u=D(t);for(let C=0;C<c.length;C+=1)c[C].l(u);u.forEach(_),d.forEach(_),f=H(s),h=y(s,"DIV",{class:!0});var I=D(h);m&&m.l(I),I.forEach(_),p=H(s),n=y(s,"DIV",{class:!0,"data-svelte-h":!0}),S(n)!=="svelte-1w052ti"&&(n.innerHTML=o),this.h()},h(){v(t,"role","tablist"),v(t,"class","tabs tabs-bordered m-4"),v(l,"class","mx-auto container"),v(h,"class","mx-auto p-4 container"),M(h,"min-height","calc(100dvh - 5rem)"),v(n,"class","relative footer bg-black/60 z-10")},m(s,d){a&&a.m(s,d),k(s,e,d),k(s,l,d),A(l,t);for(let u=0;u<c.length;u+=1)c[u]&&c[u].m(t,null);k(s,f,d),k(s,h,d),m&&m.m(h,null),k(s,p,d),k(s,n,d),b=!0},p(s,d){if(s[0]!=="/"?a||(a=x(),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),d&9){i=q(s[3]);let u;for(u=0;u<i.length;u+=1){const I=P(s,i,u);c[u]?c[u].p(I,d):(c[u]=z(I),c[u].c(),c[u].m(t,null))}for(;u<c.length;u+=1)c[u].d(1);c.length=i.length}m&&m.p&&(!b||d&32)&&R(m,V,s,s[5],b?$(V,s[5],d,null):U(s[5]),null)},i(s){b||(j(m,s),b=!0)},o(s){T(m,s),b=!1},d(s){s&&(_(e),_(l),_(f),_(h),_(p),_(n)),a&&a.d(s),O(c,s),m&&m.d(s)}}}function te(r){let e,l='<span class="text-6xl text-center leading-loose">載入中...</span>';return{c(){e=g("div"),e.innerHTML=l,this.h()},l(t){e=y(t,"DIV",{class:!0,"data-svelte-h":!0}),S(e)!=="svelte-1lnycll"&&(e.innerHTML=l),this.h()},h(){v(e,"class","min-h-48 flex flex-row justify-center items-center")},m(t,f){k(t,e,f)},p:w,i:w,o:w,d(t){t&&_(e)}}}function x(r){let e;return{c(){e=g("div"),this.h()},l(l){e=y(l,"DIV",{class:!0}),D(e).forEach(_),this.h()},h(){v(e,"class","absolute top-0 left-0 w-full h-full bg-black/60")},m(l,t){k(l,e,t)},d(l){l&&_(e)}}}function z(r){let e,l=r[8]+"",t,f,h;function p(){return r[7](r[9])}return{c(){e=g("a"),t=W(l),this.h()},l(n){e=y(n,"A",{href:!0,role:!0,class:!0});var o=D(e);t=X(o,l),o.forEach(_),this.h()},h(){v(e,"href",`${r[9]}?key=plamour-half-anniversary`),v(e,"role","tab"),v(e,"class","tab"),L(e,"text-black",r[0]==="/"),L(e,"tab-active",r[0]===r[9])},m(n,o){k(n,e,o),A(e,t),f||(h=Y(e,"click",p),f=!0)},p(n,o){r=n,o&1&&L(e,"text-black",r[0]==="/"),o&9&&L(e,"tab-active",r[0]===r[9])},d(n){n&&_(e),f=!1,h()}}}function le(r){let e,l,t,f,h,p;const n=[te,ee,Z],o=[];function b(a,i){return a[1]?a[1]&&a[2]?1:2:0}return l=b(r),t=o[l]=n[l](r),{c(){e=g("div"),t.c(),this.h()},l(a){e=y(a,"DIV",{class:!0});var i=D(e);t.l(i),i.forEach(_),this.h()},h(){v(e,"class","pt-4 bg-center bg-cover bg-fixed relative"),M(e,"background-image",r[2]?"url('/images/wallpaper.webp')":"none")},m(a,i){k(a,e,i),o[l].m(e,null),f=!0,h||(p=N(r[4].call(null,e)),h=!0)},p(a,[i]){let c=l;l=b(a),l===c?o[l].p(a,i):(J(),T(o[c],1,1,()=>{o[c]=null}),G(),t=o[l],t?t.p(a,i):(t=o[l]=n[l](a),t.c()),j(t,1),t.m(e,null)),i&4&&M(e,"background-image",a[2]?"url('/images/wallpaper.webp')":"none")},i(a){f||(j(t),f=!0)},o(a){T(t),f=!1},d(a){a&&_(e),o[l].d(),h=!1,p()}}}function se(r,e,l){let{$$slots:t={},$$scope:f}=e,h="",p=!1,n=!1;const o=[{name:"半週年",href:"/"},{name:"里程碑",href:"/timeline"},{name:"二創合輯",href:"/fanart"},{name:"直播紀錄",href:"/archieve"},{name:"剪輯烤肉",href:"/clip"},{name:"音樂 Cover",href:"/music"}],b=i=>{l(0,h=window.location.pathname),l(2,n=new URLSearchParams(window.location.search).get("key")==="plamour-half-anniversary"),l(1,p=!0)},a=i=>l(0,h=i);return r.$$set=i=>{"$$scope"in i&&l(5,f=i.$$scope)},[h,p,n,o,b,f,t,a]}class ie extends B{constructor(e){super(),F(this,e,se,le,K,{})}}export{ie as component};
