import{a as p,S as m,i as o}from"./assets/vendor-D8hBcPQM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const y="52821628-dae3b3c31b624417cff84e51c";function d(s){return p("https://pixabay.com/api/",{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits).catch(t=>[])}const l=document.querySelector(".gallery"),c=document.querySelector(".span-loader"),g=new m(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:1});function h(s){const t=s.map(({webformatURL:a,largeImageURL:i,tags:e,likes:r,views:n,comments:u,downloads:f})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${i}">
      <img class="gallery-image" src="${a}" alt="${e}"/>
      <ul class="gallery-desc">
      <li class="gallery-info">
      <span class="info-names">Likes</span>
      <span class="info-item">${r}</span>
      </li>
      <li class="gallery-info">
      <span class="info-names">Views</span>
      <span class="info-item">${n}</span>
      </li>
      <li class="gallery-info">
      <span class="info-names">Comments</span>
      <span class="info-item">${u}</span>
      </li>
      <li class="gallery-info">
      <span class="info-names">Downloads</span>
      <span class="info-item">${f}</span>
      </li>
      </ul>
      </a>
      </li>
        `).join("");l.insertAdjacentHTML("beforeend",t),g.refresh()}function L(){l.innerHTML=""}function b(){c.classList.add("active")}function S(){c.classList.remove("active")}const v=document.querySelector(".form");v.addEventListener("submit",P);function P(s){s.preventDefault();const t=s.target.elements["search-text"].value.trim();if(!t){o.warning({message:"Please enter a search term!",position:"topRight"});return}L(),b(),d(t).then(a=>{if(a.length===0){o.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(a)}).catch(a=>{o.error({message:"Sorry, there are no images matching your search query.Please try again!",position:"topRight"})}).finally(()=>{S()})}
//# sourceMappingURL=index.js.map
