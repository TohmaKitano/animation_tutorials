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
      body.style.overflow = 'hidden'
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

bodyScrollPrevent();

// ドロワーを実行する関数
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('drawer-menu')) glMenu();
});

const menuWrapp    = document.querySelector('.menu-wrapp');
const menuLeft     = document.querySelector('.menu-left');
const menuRight    = document.querySelector('.menu-right');

const openBtnWrapp = document.querySelector('.head-menu');
const openBtn      = document.querySelector('.head-menu-g');
const openBtnBg    = document.querySelector('.head-menu-bg');

const closeBtnWrapp = document.querySelector('.menu-close');
const closeBtn      = document.querySelector('.menu-close-g');
const closeBtnBg    = document.querySelector('.menu-close-bg');

// GSAP
const glMenu = () => {
  openBtn.addEventListener('click', () => {
    menuOpen();
  }),
  openBtn.addEventListener('mouseenter', () => {
    gsap.killTweensOf(openBtnBg),
    gsap.to(openBtnBg,
      .3,
      {
        scale :1.3,
        ease: Power3.easeOut
      })
  }),
  openBtn.addEventListener('mouseleave', () => {
    gsap.killTweensOf(openBtnBg),
    gsap.to(openBtnBg,
      .3,
      {
        scale: 1,
        ease: Power3.easeOut
      })
  }),
  closeBtn.addEventListener('click', () => {
    menuClose();
  });
  closeBtn.addEventListener('mouseenter', () => {
    gsap.killTweensOf(closeBtnBg),
    gsap.to(closeBtnBg,
      .3,
      {
        scale: 1.3,
        ease: Power3.easeOut
      })
  }),
  closeBtn.addEventListener('mouseleave', () => {
    gsap.killTweensOf(closeBtnBg),
    gsap.to(closeBtnBg,
      .3,
      {
        scale: 1,
        ease: Power3.easeOut
      })
  });
  const menuOpen = () => {
    gsap.killTweensOf(menuWrapp),
    gsap.set(menuWrapp,
      {
        display: 'block',
        x: '-100%'
      }
    ),
    gsap.to(menuWrapp,
      .5,
      {
        x: '0%',
        ease: Power3.easeIn,
        onComplete: function(){
          gsap.killTweensOf(closeBtnWrapp),
          gsap.to(closeBtnWrapp,
            .4,
            {
              opacity: 1,
              ease: Power3.easeOut
            }
          )
        }
      }
    )
    gsap.killTweensOf(menuLeft),
    gsap.set(menuLeft,
      {
        opacity: 0
      }
    ),
    gsap.to(menuLeft,
      .8,
      {
        delay: .6,
        opacity: 1,
        ease: Power3.easeOut
      }
    ),
    gsap.killTweensOf(menuRight),
    gsap.set(menuRight,
      {
        opacity: 0
      }
    ),
    gsap.to(menuRight,
      .8,
      {
        delay: .7,
        opacity: 1,
        ease: Power3.easeOut
      }
    )
  };
  const menuClose = () => {
    gsap.killTweensOf(closeBtnWrapp),
    gsap.to(closeBtnWrapp,
      .3,
      {
        opacity: 0,
        ease: Power3.easeOut
      }
    ),
    gsap.killTweensOf(menuLeft),
    gsap.to(menuLeft,
      .4,
      {
        opacity: 0,
        ease: Power3.easeOut
      }
    ),
    gsap.killTweensOf(menuRight),
    gsap.to(menuRight,
      .4,
      {
        opacity: 0,
        ease: Power3.easeOut
      }
    ),
    gsap.killTweensOf(menuWrapp),
    gsap.to(menuWrapp,
      .4,
      {
        delay: .2,
        x: '-100%',
        ease:Power2.easeIn,
        onComplete: function(){
          menuWrapp.style.display = 'none'
        }
      }
    )
  }
}

