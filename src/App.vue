<template>
  <div id="app">
    <p class="primaryHeading primaryHeading-main">
      Full-Stack Web Developer
    </p>
    <div class="bubbles">
      <img srcset="@/assets/background/bubbles/bubbles.png 1x, @/assets/background/bubbles/bubbles@2x.png 2x" alt="bubbles" class="bubbles__image">
    </div>
    <div class="activeSide">
      <router-view></router-view>
    </div>
    <div class="btn btn-round btn-home" @click="$router.push('contactMe')" v-if="$route.name != 'contactMe'">
      <img srcset="@/assets/chat/chat.png 1x, @/assets/chat/chat@2x.png 2x" alt="chat icon" class="btn__image">
    </div>

  </div>
</template>

<style lang="scss">
@import "@/styles/components/_main.scss";
</style>
