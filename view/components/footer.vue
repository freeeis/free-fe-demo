<template>
  <q-footer class="main-footer full-width">
    <div class="footer-inner column bg-primary full-width">
      <div class="row logo-wrapper q-ma-md">
        <div class="text-h4">
          <!-- {{ctx.config['demo-pro'].siteName}} -->
          <!-- <q-icon class="logo" name="home" size="xl"></q-icon> -->
        </div>
        <q-space></q-space>
        <div class="text-center">
          <div>备案/许可证编号 ：{{ctx.config['demo-pro'].ICP || 'xICP备xxxxxxxx'}}</div>
          <div>Copyright © {{ctx.config['demo-pro'].copyRight
            || '2019-2021 xxxxxxxxxxxxxxxxx All Right Reserved'}}</div>
        </div>
      </div>
    </div>
  </q-footer>
</template>

<script>
export default {
  name: 'DemoProFooter',
};
</script>
