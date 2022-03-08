# Drawer Menu
- Referenced [This Page](https://kami8ma8810.github.io/public/gsap-drawer.html).
- [font-sizeの単位をvwにしてデバイスサイズに合わせて拡縮する](https://qiita.com/katsunory/items/3bede89cee8e2ded8426)

## Add Settings

### ress

```bash
$ npm install -D ress 
```

### 100vhを使わない

```javascript
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
```

### backgroundを固定する

```javascript
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
```