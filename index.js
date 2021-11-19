import demoBtn from './view/demoBtn.vue';

export default {
  config: {
    age: 20,
    backendDependencies: ['demo'],
    siteName: 'Demo系统',
  },
  routers: [
    {
      path: '/',
      component: () => import('./view/index.vue'),
      children: [
        {
          path: 'demo',
          component: () => import('./view/demo'),
        },
      ],
    },
  ],
  components: {
    DemoBtn: demoBtn,
  },
  mock: (Mock) => {
    Mock.mock('/demo/mock', 'get', () => ({
      data: 'this is from the mock.'
    }));
  }
};
