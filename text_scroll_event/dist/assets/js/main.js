!function(){"use strict";window.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector(".titEffect"),e=t.classList.contains("titEffect-visible");!function(){if(e)t.classList.add("titEffect-animated"),t.find(".titEffect__clone").remove(),t.find(".titEffect__cover").remove();else{var c=t.textContent,n='<span class="titEffect__clone">'.concat(c,"</span>"),o='<span class="titEffect__cover">'.concat(c,"</span>"),a='<span class="titEffect__detail">'.concat(c,"</span>");t.innerHTML=a.concat(n).concat(o)}}(),function(){if(!e){var c=document.querySelector(".titEffect__clone"),n=document.querySelector(".titEffect__cover"),o=t.offsetHeight,a=t.offsetWidth,i="rect(0px 0px ".concat(o,"px 0px)"),s="rect(0px ".concat(a,"px ").concat(o,"px 0px)"),f="rect(0px ".concat(a,"px ").concat(o,"px 0px)"),p="rect(0px ".concat(a,"px ").concat(o,"px ").concat(a,"px)");c.style.clip=i,n.style.clip=f,t.classList.add("titEffect-visible"),gsap.to(c,1.5,{clip:s,ease:Power3.easeOut}),gsap.to(n,1.5,{clip:p,ease:Power3.easeOut,onComplete:function(){t.classList.add("titEffect-animated"),c.remove(),n.remove()}})}}()}),!1)}();
//# sourceMappingURL=main.js.map