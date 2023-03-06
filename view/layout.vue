<template>
  <q-layout
    id="admin-layout"
    class="admin-layout"
    @scroll="scrollTop = $event.position;"
  >
    <q-header class="print-hide">
      <div class="header-inner full-width bg-primary row items-center">
        <q-toolbar class="admin-main-toolbar">
          <div class="text-h5">
            {{ctx.config['demo-pro'].siteName}}
          </div>
          <!-- <q-icon class="logo" size="xl" name="home"></q-icon> -->

          <q-space></q-space>

          <theme-switch></theme-switch>
          <restart-server></restart-server>

          <q-btn flat class="user-profile-btn" v-if="ctx.modules.passport">
            <q-icon class="avatar q-mr-sm" name="fas fa-user-tie" size="md" />
            <span class="user-name ellipsis q-ml-xs q-mr-md">
              {{userName}}
              <div class="date-label">{{now}}</div>
            </span>
            <e-icon class="user-profile-menu-icon"
              name="keyboard_arrow_down"></e-icon>
            <q-menu content-class="user-profile-menu">
              <q-list style="min-width: 191px">
                <q-item>
                  <q-item-section>
                    <q-btn
                      class="logout-btn"
                      flat
                      :label="$t('LOGOUT')"
                      v-close-popup
                      @click="logoutClicked"
                    />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-toolbar>
      </div>
    </q-header>

    <q-drawer
      :width="200"
      :mini-width="100"
      :breakpoint="800"
      :value="true"
      show-if-above
      side="left"
      class="menu-drawer print-hide"
    >
      <leveled-menus
        :menus="menus"
        group="top"
        :showIcon="true"
        class="admin-menu full-height"
        :insetLevel="1"
      ></leveled-menus>
    </q-drawer>

    <q-page-container>
      <q-page class="admin-page q-ma-md">
        <div class="admin-main-content-wrapper column">
          <div
            class="row top-bread items-center print-hide"
          >
            <div class="col title row no-wrap items-center">
              <bread-crumbs :canBack="false"
                class="admin-main-bread-crumbs q-mr-xs"></bread-crumbs>
            </div>
          </div>
          <router-view class="admin-page-view q-mt-md col"/>
        </div>
      </q-page>
    </q-page-container>

    <c-footer class="print-hide"></c-footer>
  </q-layout>
</template>

<script>
import CFooter from './components/footer';
import useAppStore from '@/stores/app';

export default {
  name: 'DemoProLayout',
  components: {
    CFooter,
  },
  props: {
    Logout: {
      type: Function,
      default: () => {},
    },
  },
  meta: {
    title: '',
  },
  data() {
    return {
      leftDrawerOpen: true,
      miniState: false,
      darkMode: false,
      menus: [],
      scrollTop: 0,
    };
  },
  computed: {
    now() {
      return new Date().toLocaleDateString();
    },
    userName() {
      if (this.ctx.modules.account
        && this.ctx.modules.account.store.user
        && this.ctx.modules.account.store.user.Name) {
        return this.ctx.modules.account.store.user.Name;
      }

      return '未完善信息用户';
    },
    userAvatar() {
      return 'fas fa-user-tie';
    },
  },
  watch: {
    darkMode(mode) {
      this.$q.dark.set(mode);
    },
  },
  beforeCreate() {
    this.getRequest('/menu/menus?category=后台主菜单').then((d) => {
      if (d && d.msg === 'OK' && d.data.menus) {
        this.menus = d.data.menus;
      }
    });
  },
  methods:{
    logoutClicked() {
      this.ctx.modules.account && this.ctx.modules.account
        .utils.logout()
        .then(() => {
          // clear info to store
          this.ctx.modules.account.store.SET_USER({});
          this.ctx.modules.account.store.SET_TOKEN('');
          this.$router.replace('/login');
        });
    },
  },
  beforeUnmount() {
    const store = useAppStore();
    store.SET_CRUMBS(undefined);
  },
};
</script>

<style lang="sass" scoped>
.admin-layout
  max-width: $contentMaxWidth
  min-width: $contentMinWidth
  margin: 0 auto
  background: $background
  .admin-page
    // min-height: 600px !important
    &-view
      background: $background
  .top-bread
    background: $background
</style>

<style lang="sass">
@import './style.sass'

.admin-layout
  .menu-drawer .q-drawer
    background: $background
    border-right: 1px dotted var(--q-color-primary)
</style>
