<template>
  <div class='page'>
    <Start />
    <Overview />
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component';
import Start from '@/components/Start.vue';
import Overview from '@/components/Overview.vue';

@Options({
  components: {
    Start,
    Overview
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang='scss'>
</style>
