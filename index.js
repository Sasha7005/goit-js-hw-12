import{a as S,S as P,i as r}from"./assets/vendor-BNibzuFn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const q="52821628-dae3b3c31b624417cff84e51c",$="https://pixabay.com/api/?";async function m(o,t){const a=new URLSearchParams({key:q,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15});return(await S(`${$}${a}`)).data}const g=document.querySelector(".gallery"),y=document.querySelector(".span-loader"),M=new P(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:1}),h=document.querySelector(".btn-load");function L(o){const t=o.map(({webformatURL:a,largeImageURL:i,tags:e,likes:s,views:l,comments:b,downloads:v})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${i}">
      <img class="gallery-image" src="${a}" alt="${e}"/>
      <ul class="gallery-desc">
      <li class="gallery-info">
      <span class="info-names">Likes</span>
      <span class="info-item">${s}</span>
      </li>
      <li class="gallery-info">
      <span class="info-names">Views</span>
      <span class="info-item">${l}</span>
      </li>
      <li class="gallery-info">
      <span class="info-names">Comments</span>
      <span class="info-item">${b}</span>
      </li>
      <li class="gallery-info">
      <span class="info-names">Downloads</span>
      <span class="info-item">${v}</span>
      </li>
      </ul>
      </a>
      </li>
        `).join("");g.insertAdjacentHTML("beforeend",t),M.refresh()}function R(){g.innerHTML=""}function w(){y.classList.add("active")}function u(){y.classList.remove("active")}function f(){h.classList.add("is-active")}function p(){h.classList.remove("is-active")}const O=document.querySelector(".form"),x=document.querySelector(".btn-load");let c="",n=1,d=0;O.addEventListener("submit",E);x.addEventListener("click",H);async function E(o){if(o.preventDefault(),c=o.target.elements["search-text"].value.trim(),!c){r.warning({message:"Please enter a search term!",position:"topRight"});return}R(),p(),w(),n=1;try{const t=await m(c,n);if(u(),!t.totalHits){r.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(t.hits),d=Math.ceil(t.totalHits/15),n<d?f():r.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch{u(),r.error({message:"Sorry, something went wrong. Please try again later!",position:"topRight"})}}async function H(){n++,p(),w();try{const o=await m(c,n);u(),L(o.hits),setTimeout(()=>{const t=document.querySelector(".gallery-item");if(t){const a=t.getBoundingClientRect().height;window.scrollBy({top:2*a,behavior:"smooth"})}},300),n>=d?(r.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),p()):f()}catch{u(),f(),r.error({message:"Sorry, something went wrong. Please try again!",position:"topRight"})}}
//# sourceMappingURL=index.js.map
