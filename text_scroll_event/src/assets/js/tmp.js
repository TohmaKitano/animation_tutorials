import  '../scss/style.scss';

function(e,t,i){
  "use strict";
  function n(e,t){
    for(var i=0;i<t.length;i++){
      var n=t[i];
      n.enumerable=n.enumerable||!1,n.configurable=!0,
      "value"in n&&(n.writable=!0),
      Object.defineProperty(e,n.key,n)
    }
  }
  var r=function(){
    function e(t){
      !function(e,t){
        if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
      }
      (this,e),
      this.$elem=t,
      this.isVisible=!!this.$elem.hasClass("titleeffect-visible"),
      this.isVisible
      ?(this.$elem.addClass("titleeffect-animated"),
        this.$elem.find(".titleeffect__clone").remove(),
        this.$elem.find(".titleeffect__cover").remove()
      )
      :(this.text=this.$elem.text(),
        this.$clone=$('<span class="titleeffect__clone">'.concat(this.text,"</span>")),
        this.$cover=$('<span class="titleeffect__cover">'.concat(this.text,"</span>")),
        this.$elem.wrapInner('<span class="titleeffect__df" />').append(this.$clone,this.$cover)
      )
    }
    var t,i,r;
    return t=e,(i=[{key:"build",value:function(){
      var e=this;
      if(!this.isVisible){
        app.Config.duration;
        var t=this.$elem.outerWidth(),
        i=this.$elem.outerHeight(),
        n="rect(0px 0px ".concat(i,"px 0px)"),
        r="rect(0px ".concat(t,"px ").concat(i,"px 0px)"),
        o="rect(0px ".concat(t,"px ").concat(i,"px 0px)"),
        s="rect(0px ".concat(t,"px ").concat(i,"px ").concat(t,"px)");
        this.$clone.css({clip:n}),
        this.$cover.css({clip:o}),
        this.$elem.addClass("titleeffect-visible"),
        TweenMax.to(this.$clone,1.5,{
          clip:r,
          ease:app.Config.easing.tm
        }),
        TweenMax.to(this.$cover,1.5,{
          clip:s,
          ease:app.Config.easing.tm,
          onComplete:function(){
            e.$elem.addClass("titleeffect-animated"),
            e.$clone.remove(),e.$cover.remove()
          }
        })
      }
    }}])&&n(t.prototype,i),
    r&&n(t,r),e}();
    e.exports=r
  }