<template>
  <div class='page'>
    <Journey />
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component';
import Journey from '@/components/Journey.vue';

@Options({
  components: {
    Journey
  }
})
export default class Roadmap extends Vue {}
</script>

<style scoped lang='scss'>
</style>
