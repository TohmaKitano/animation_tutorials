import  '../scss/style.scss';

"use strict";

var setFillHeight = function(){
  var e =.01*window.innerHeight;
  document.documentElement.style.setProperty("--vh","".concat(e,"px"))
},vw=window.innerWidth;

function bodyScrollPrevent(e){
  var t,n=document.getElementsByTagName("body")[0],
  i=window.navigator.userAgent.toLowerCase(),
  o=i.indexOf("iphone")>-1||i.indexOf("ipad")>-1||i.indexOf("macintosh")>-1&&"ontouchend"in document,
  a=window.innerWidth-document.body.clientWidth;e?(n.style.paddingRight=a+"px",
  o?(t=-window.pageYOffset,n.style.position="fixed",
  n.style.width="100%",
  n.style.top=t+"px"):n.style.overflow="hidden"):e||(n.style.paddingRight="",
  o?(t=parseInt(n.style.top.replace(/[^0-9]/g,"")),
  n.style.position="",
  n.style.width="",
  n.style.top="",window.scrollTo(0,t)):n.style.overflow="")
}

window.addEventListener("resize",(function(){
  vw!==window.innerWidth&&(vw=window.innerWidth,setFillHeight())
})),setFillHeight();

var drawer=document.getElementById("js-drawer"),
openButton=document.getElementById("js-open-drawer"),
closeButton=document.getElementById("js-close-drawer"),
isDrawerOpen=!1;
function changeAriaExpanded(e){
  var t=e?"true":"false";
  drawer.setAttribute("aria-expanded",t),
  openButton.setAttribute("aria-expanded",t),
  closeButton.setAttribute("aria-expanded",t)
}
function changeState(e){
  e!==isDrawerOpen?(changeAriaExpanded(e),isDrawerOpen=e):
  console.log("エラー！2回以上連続で同じ状態に変更しようとしました")
}
function openDrawer(){
  changeState(!0),bodyScrollPrevent(!0)
}
function closeDrawer(){
  changeState(!1),bodyScrollPrevent(!1)
}
function onClickOpenButton(){
  openDrawer()
}
function onClickCloseButton(){
  closeDrawer()
}

bodyScrollPrevent(),
openButton.addEventListener("click",onClickOpenButton,!1),
closeButton.addEventListener("click",onClickCloseButton,!1),

document.addEventListener("DOMContentLoaded",(function(){
  document.body.classList.contains("pattern1")&&pattern1(),
  document.body.classList.contains("pattern2")&&pattern2(),
  document.body.classList.contains("pattern3")&&pattern3()
})),
document.addEventListener("DOMContentLoaded",(function(){
  document.getElementById("pattern1")&&pattern1(),
  document.getElementById("pattern2")&&pattern2(),
  document.getElementById("pattern3")&&pattern3()
}));

var pattern1=function(){
  var e=gsap.timeline();
  gsap.set(drawer,{
    xPercent:100,
    visibility:"hidden",
    ease:Power2.easeInOut
  }),
  openButton.addEventListener("click",(function(){
    e.reversed()?e.play():e.to(drawer,{
      visibility:"visible",xPercent:0,duration:.3
    })
    .from(".js-nav-item a",{stagger:{amount:.4},xPercent:-100})
  })),
  closeButton.addEventListener("click",(function(){
    e.reverse()
  }))
},
pattern2=function(){
  gsap.set(drawer,{
    yPercent:-100,visibility:"hidden",ease:Power2.easeInOut}),
    gsap.set(".js-nav-item a",{yPercent:100});
    var e=gsap.timeline({});
    openButton.addEventListener("click",(function(){
      e.reversed()?e.play():e.to(drawer,{
        visibility:"visible",yPercent:0
    })
    .to(".js-nav-item a",{
      stagger:{amount:.6},yPercent:0
    })}))
    ,closeButton.addEventListener("click",(function(){
      e.reverse()
    }))
  },
pattern3=function(){
  gsap.set([drawer,".js-nav-item a"],{
    visibility:"hidden",opacity:0
  });
  var e=gsap.timeline({onReverseComplete:function(){
    gsap.set([drawer,".js-nav-item a"],{visibility:"hidden",opacity:0})
  }});
  openButton.addEventListener("click",(function(){
    e.reversed()?e.play():e.to(drawer,{
      visibility:"visible",opacity:1,ease:Power2.easeInOut
    })
    .to(".js-nav-item a",{
      stagger:{amount:.6},visibility:"visible",opacity:1})
  })),
  closeButton.addEventListener("click",(function(){
    e.reverse()
  }))
};

console.log('Hello, world');
