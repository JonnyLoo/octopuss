<template>
  <div class='wdf'>
    <span>Nothing to see here</span>
  </div>
</template>

<script lang='ts'>
  import { Vue } from 'vue-class-component';

  export default class Wdf extends Vue {}
</script>

<style scoped lang='scss'>
  .wdf {
    min-height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
