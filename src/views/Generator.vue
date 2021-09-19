<template>
  <div class='full-page'>
    <Generate />
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component';
import Generate from '@/components/Generate.vue';

@Options({
  components: {
    Generate
  }
})
export default class Generator extends Vue {}
</script>

<style scoped lang='scss'>
</style>
