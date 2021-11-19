<template>
<q-btn>{{label}}</q-btn>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'DemoBtn',
  props: {
    label: { type: String, default: 'Demo' },
  },
});
</script>
