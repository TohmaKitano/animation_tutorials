<template>
  <div ref="wrapper" class="LayoutConatiner">
    <!-- <Logo /> -->
    <!-- <TheNav /> -->
    <main class="MainContainer">
      <slot />
    </main>
    <!-- <div v-if="isCurtainShown" class="Curtain" /> -->
    <!-- <CorsorPointer :isLoading="isLoading" /> -->
  </div>
</template>