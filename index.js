import{S as u,i as n}from"./assets/vendor-BrddEoy-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m=t=>`
    <li class="gallery-card">
      <a class="gallery-link"  href="${t.largeImageURL}">
        <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}" /> 
        <ul class="text-info">
          <li class="image-info">
            <h4>Likes</h4>
            <p>${t.likes}</p>
          </li>
          <li class="image-info">
            <h4>Views</h4>
            <p>${t.views}</p>
          </li>
          <li class="image-info">
            <h4>Comments</h4>
            <p>${t.comments}</p>
          </li>
          <li class="image-info">
            <h4>Downloads</h4>
            <p>${t.downloads}</p>
        </ul>
        </a>
    </li>
  `,d=t=>{const s=new URLSearchParams({q:t,key:"25786434-348adb767e319176b4ad356ea",image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})},i=document.querySelector(".searchForm"),c=document.querySelector(".gallery"),f=new u(".gallery a"),h=t=>{const s=document.querySelector(".loader");t.preventDefault();const o=i.elements[0].value.trim();if(o===""){n.error({title:"",message:"Please enter your request",messageColor:"#fafafb",position:"topRight",backgroundColor:"#ef4040"});return}document.querySelector(".loader").classList.add("show-loader"),d(o).then(a=>{if(a.total===0){n.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",position:"topRight",backgroundColor:"#ef4040"}),c.innerHTML="",i.reset();return}const e=a.hits.map(r=>m(r)).join("");c.innerHTML=e,f.refresh()}).catch(a=>{console.log(a)}).finally(()=>{s.classList.remove("show-loader")})};i.addEventListener("submit",h);
//# sourceMappingURL=index.js.map
