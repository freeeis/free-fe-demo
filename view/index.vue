<template>
  <div>
    <q-layout view="hhh lpr fff" class="portal-layout">
      <q-header>
        <div class="header-inner">
          <div class="header-item-wrapper full-width bg-primary row justify-center items-center">
            <q-toolbar class="rounded-borders portal-main-toolbar">
              <q-icon name='edit' class="q-ma-md" size='sm'></q-icon>
              <q-btn class="q-ma-md" dense flat to="/">home</q-btn>
              <q-btn class="q-ma-md" dense flat to="/demo">demo</q-btn>
              <q-space></q-space>
              <demo-btn label="By using the component"></demo-btn>
            </q-toolbar>
          </div>
        </div>
      </q-header>

      <q-page-container>
        <q-page class="portal-page">
          <router-view class="portal-main-content-wrapper" />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'DemoPortal',
});
</script>
