import  '../scss/style.scss';

// 100vhを使わない
// 画面の高さいっぱいに画像を表示する関数
const setFillHeight = () => {
  // innerHeight -> ウィンドウの内部の高さをピクセル単位で返す
  const VIEW_WINDOW_HEIGHT = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', ''.concat(VIEW_WINDOW_HEIGHT, 'px'));
};

let viewWindowWidth = window.innerWidth;
window.addEventListener('resize', () => {
  if (viewWindowWidth === window.innerWidth) return;
  // 横幅が変更されたら再描画する
  viewWindowWidth = window.innerWidth;
  setFillHeight();
});

// 背景を固定する関数
const bodyScrollPrevent = (e) => {
  let tmpPosition, body = document.getElementsByTagName('body')[0];
  // ユーザーエージェントを取得
  let getuserAgent = window.navigator.userAgent.toLowerCase();
  let isUserAgent = getuserAgent.indexOf('iphone') > -1 || getuserAgent.indexOf('ipad') > -1 || getuserAgent.indexOf('macintosh')>-1 && 'ontouchend' in document;
  // innerHeight -> ウィンドウの内部の高さをピクセル単位で返す
  // clientWidth -> インライン要素や CSS のない要素ではゼロになる。それ以外では、要素の内側の寸法をピクセル単位で表す
  // スクロールバーの幅を取得
  let scrollBarWidth = window.innerWidth - document.body.clientWidth;
  if (e) {
    body.style.paddingRight = scrollBarWidth + 'px';
    if (isUserAgent) {
      tmpPosition =- window.pageYOffset,
      body.style.position = 'fixed';
      body.style.width = '100%';
      body.style.top = tmpPosition +'px';
    } else {
      body.style.overflow='hidden'
    }
  } else {
    body.style.paddingRight = '';
    if (isUserAgent) {
      tmpPosition = parseInt(body.style.top.replace(/[^0-9]/g,'')),
      body.style.position = '',
      body.style.width = '',
      body.style.top = '',
      window.scrollTo(0, tmpPosition)
    }
    else {
      body.style.overflow = ''
    }
  }
}

// ドロワーを実行する処理
const drawer       = document.getElementById('js-drawer'),
      openButton   = document.getElementById('js-open-drawer'),
      closeButton  = document.getElementById('js-close-drawer');

let isDrawerOpen = false;

// aria-expanded 属性を切り替える関数
const changeAriaExpanded = (e) => {
  let isElementExist = e ? 'true' : 'false';
  // setAttribute -> 指定した要素上に新しい属性を追加、または既存の属性の値を変更する。
  drawer.setAttribute('aria-expanded', isElementExist); 
  openButton.setAttribute('aria-expanded', isElementExist); 
  closeButton.setAttribute('aria-expanded', isElementExist);
}

// 状態を監視する関数
const changeState = (e) => {
  if (e !== isDrawerOpen) {
    changeAriaExpanded(e);
    isDrawerOpen = e;
  } else {
    console.log('Error!');
  }
}

// ドロワーを開閉する関数
const openDrawer = () => {
  changeState(true);
  bodyScrollPrevent(true);
}
const closeDrawer = () => {
  changeState(false);
  bodyScrollPrevent(false);
}
// ボタンをクリックする関数
const onClickOpenButton = () => {
  openDrawer();
}
const onClickCloseButton = () => {
  closeDrawer();
}

bodyScrollPrevent();
openButton.addEventListener('click', onClickOpenButton, false);
closeButton.addEventListener('click', onClickCloseButton, false);

// ドロワーを実行する関数
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('pattern')) drawerMenu();
});

// GSAP
const drawerMenu = () => {
  let tl = gsap.timeline();
  // 初期状態を指定する
  gsap.set(drawer, {
    visibility: 'hidden',
    xPercent: -100,
    opacity: 0,
    ease: Power3.easeOut,
  });
  openButton.addEventListener('click', () => {
    if (!tl.reversed()) {
      // 通常のアニメーション変化のようなイメージ
      tl.to(drawer, {
          visibility: 'visible',
          xPercent: 0,
          opacity: 1,
          duration: 0.3,
        }
      )
      // 逆再生のアニメーション変化のようなイメージ
      .from('.js-nav-item a', {
        // 開始時間をずらす
        stagger: { amount: 0.4 },
        // xPercent: -100,
        opacity: 1,
      });
    } else {
      tl.play();
    }
  });
  closeButton.addEventListener('click', () => {
    tl.reverse();
  });
};

// pattern2=function(){
//   gsap.set(drawer,{
//     yPercent:-100,visibility:"hidden",ease:Power2.easeInOut}),
//     gsap.set(".js-nav-item a",{yPercent:100});
//     var e=gsap.timeline({});
//     openButton.addEventListener("click",(function(){
//       e.reversed()?e.play():e.to(drawer,{
//         visibility:"visible",yPercent:0
//     })
//     .to(".js-nav-item a",{
//       stagger:{amount:.6},yPercent:0
//     })}))
//     ,closeButton.addEventListener("click",(function(){
//       e.reverse()
//     }))
//   },
// pattern3=function(){
//   gsap.set([drawer,".js-nav-item a"],{
//     visibility:"hidden",opacity:0
//   });
//   var e=gsap.timeline({onReverseComplete:function(){
//     gsap.set([drawer,".js-nav-item a"],{visibility:"hidden",opacity:0})
//   }});
//   openButton.addEventListener("click",(function(){
//     e.reversed()?e.play():e.to(drawer,{
//       visibility:"visible",opacity:1,ease:Power2.easeInOut
//     })
//     .to(".js-nav-item a",{
//       stagger:{amount:.6},visibility:"visible",opacity:1})
//   })),
//   closeButton.addEventListener("click",(function(){
//     e.reverse()
//   }))
// };
