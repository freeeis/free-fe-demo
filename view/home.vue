<template>
  <div class="page-home fit">
    <div class="welcome-text absolute-center text-h3">欢迎来到{{ctx.config['demo-pro'].siteName}}</div>
  </div>
</template>

<script>
export default {
  name: 'DemoProHome',
};
</script>

<style lang="sass" scoped>
@import './style.sass'

.page-home
  min-height: 600px
  width: 100%
  opacity: 0.5

  .welcome-text
    color: $welcomeColor
</style>
