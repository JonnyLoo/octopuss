<template>
  <div class='page'>
    <Wdf />
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component';
import Wdf from '@/components/Wdf.vue';

@Options({
  components: {
    Wdf
  }
})
export default class Wtf extends Vue {}
</script>

<style scoped lang='scss'>
</style>
