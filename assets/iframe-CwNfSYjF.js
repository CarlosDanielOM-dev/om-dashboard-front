const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BarChartDash.stories-BoPKxSuQ.js","./index-DJO9vBfz.js","./index-BL9o_FXf.js","./jsx-runtime-CkxqCPlQ.js","./tiny-invariant-CopsF_GD.js","./ComposedChartDash.stories-CvmKEWcE.js","./LineChartDash.stories-BmvBDENO.js","./PieChartDash.stories-bbiptP4-.js","./StackedBarChart.stories-CNllnwv_.js","./TableDash.stories-CQTnDpt0.js","./Colors-CYTbFczb.js","./index-BrnU7xv7.js","./index-C9qTzAtN.js","./index-DJdX7xnk.js","./index-j_8AUxV0.js","./index-DrFu-skq.js","./Fonts-DySHhpn7.js","./Fonts-C_H52Vnx.css","./entry-preview-BnRVyBe4.js","./chunk-XP5HYGXS-BGCqD1aY.js","./entry-preview-docs-CoUKQ3i9.js","./preview-D77C14du.js","./preview-DEMzn_yN.js","./preview-BWzBA1C2.js"])))=>i.map(i=>d[i]);
import"../sb-preview/runtime.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const R="modulepreload",T=function(r,s){return new URL(r,s).href},p={},t=function(s,a,l){let e=Promise.resolve();if(a&&a.length>0){const i=document.getElementsByTagName("link"),_=document.querySelector("meta[property=csp-nonce]"),d=(_==null?void 0:_.nonce)||(_==null?void 0:_.getAttribute("nonce"));e=Promise.allSettled(a.map(n=>{if(n=T(n,l),n in p)return;p[n]=!0;const u=n.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(!!l)for(let m=i.length-1;m>=0;m--){const E=i[m];if(E.href===n&&(!u||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${f}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":R,u||(c.as="script"),c.crossOrigin="",c.href=n,d&&c.setAttribute("nonce",d),document.head.appendChild(c),u)return new Promise((m,E)=>{c.addEventListener("load",m),c.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${n}`)))})}))}function o(i){const _=new Event("vite:preloadError",{cancelable:!0});if(_.payload=i,window.dispatchEvent(_),!_.defaultPrevented)throw i}return e.then(i=>{for(const _ of i||[])_.status==="rejected"&&o(_.reason);return s().catch(o)})},{createBrowserChannel:L}=__STORYBOOK_MODULE_CHANNELS__,{addons:P}=__STORYBOOK_MODULE_PREVIEW_API__,O=L({page:"preview"});P.setChannel(O);window.__STORYBOOK_ADDONS_CHANNEL__=O;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=O);const D={"./stories/BarChartDash.stories.tsx":async()=>t(()=>import("./BarChartDash.stories-BoPKxSuQ.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),"./stories/ComposedChartDash.stories.tsx":async()=>t(()=>import("./ComposedChartDash.stories-CvmKEWcE.js"),__vite__mapDeps([5,1,2,3,4]),import.meta.url),"./stories/LineChartDash.stories.tsx":async()=>t(()=>import("./LineChartDash.stories-BmvBDENO.js"),__vite__mapDeps([6,1,2,3,4]),import.meta.url),"./stories/PieChartDash.stories.tsx":async()=>t(()=>import("./PieChartDash.stories-bbiptP4-.js"),__vite__mapDeps([7,2,1,3,4]),import.meta.url),"./stories/StackedBarChart.stories.tsx":async()=>t(()=>import("./StackedBarChart.stories-CNllnwv_.js"),__vite__mapDeps([8,1,2,3,4]),import.meta.url),"./stories/TableDash.stories.tsx":async()=>t(()=>import("./TableDash.stories-CQTnDpt0.js"),__vite__mapDeps([9,1,2,3,4]),import.meta.url),"./stories/tokens/colors/Colors.mdx":async()=>t(()=>import("./Colors-CYTbFczb.js"),__vite__mapDeps([10,3,1,11,12,13,14,15,2,4]),import.meta.url),"./stories/tokens/fonts/Fonts.mdx":async()=>t(()=>import("./Fonts-DySHhpn7.js"),__vite__mapDeps([16,3,1,11,12,13,14,15,2,4,17]),import.meta.url)};async function y(r){return D[r]()}const{composeConfigs:I,PreviewWeb:h,ClientApi:A}=__STORYBOOK_MODULE_PREVIEW_API__,S=async(r=[])=>{const s=await Promise.all([r[0]??t(()=>import("./entry-preview-BnRVyBe4.js"),__vite__mapDeps([18,19,1,13]),import.meta.url),r[1]??t(()=>import("./entry-preview-docs-CoUKQ3i9.js"),__vite__mapDeps([20,19,14,1]),import.meta.url),r[2]??t(()=>import("./preview-B7jBvJLy.js"),[],import.meta.url),r[3]??t(()=>import("./preview-aVwhiz9X.js"),[],import.meta.url),r[4]??t(()=>import("./preview-D77C14du.js"),__vite__mapDeps([21,15]),import.meta.url),r[5]??t(()=>import("./preview-DFmD0pui.js"),[],import.meta.url),r[6]??t(()=>import("./preview-DEMzn_yN.js"),__vite__mapDeps([22,4]),import.meta.url),r[7]??t(()=>import("./preview-BWzBA1C2.js"),__vite__mapDeps([23,15]),import.meta.url),r[8]??t(()=>import("./preview-DGUiP6tS.js"),[],import.meta.url),r[9]??t(()=>import("./preview-BJ6EHSBF.js"),[],import.meta.url),r[10]??t(()=>import("./preview-CIRcjyVj.js"),[],import.meta.url)]);return I(s)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new h(y,S);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{t as _};