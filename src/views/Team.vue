<template>
  <div class='page'>
    <Myself />
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component';
import Myself from '@/components/Myself.vue';

@Options({
  components: {
    Myself
  }
})
export default class Team extends Vue {}
</script>

<style scoped lang='scss'>
</style>
