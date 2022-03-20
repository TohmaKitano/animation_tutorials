<template>
  <div class="Logo__Wrapper">
    <div class="Logo">
      <h1 ref="title">
        HOGEHOGE FUGAFUGA
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  mounted() {
    const target = this.$refs.title
    const text = target.innerText
    target.innerText = null
    text
      .trim()
      .split('')
      .forEach(t => {
        target.innerHTML += `<span>${t}</span>`
      })
    target.style.display = 'block'
  }
}
</script>

<style lang="scss">
.Logo {
  top: 50%;
  left: 0;
  text-shadow: 2px 1px 1px #e9e9e9;
  &__Wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    pointer-events: none;
  }
  > h1,
  > h2 {
    display: none;
    // color: $color-black87;
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: 0.4em;
    span {
      position: absolute;
      top: 50%;
      display: block;
      width: 14px;
      opacity: 0;
    }
  }
}
</style>