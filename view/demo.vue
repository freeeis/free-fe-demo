<template>
  <div class="fixed-center text-center">
    <div class="demo-content full-height full-width">Hello, this is a page from the demo module!</div>
    <div>
      this is the data returned from backend: {{data}}
    </div>
    <div>
      this is the data returned from mock: {{mockData}}
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'DemoPage',
  data(){
      return {
          data: undefined,
          mockData: undefined,
      }
  },
  created(){
      this.getRequest('/demo').then(d => {
          if(d && d.data){
              this.data = d.data;
          }
      });

      this.getRequest('/demo/mock').then(d => {
          if(d && d.data){
              this.mockData = d.data;
          }
      });
  }
});
</script>

<style lang="sass" scoped>
.demo-content
    margin: auto
    font-size: 28px
    color: $grey-7
</style>
