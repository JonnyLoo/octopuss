<template>
  <div class='generator'>
    <Generate />
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component';
import Generate from '@/components/Generate.vue';

@Options({
  components: {
    Generate
  },
})
export default class Generator extends Vue {}
</script>

<style scoped lang='scss'>
  .generator {
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 0 69px 0 69px;
    max-width: 1200px;
  }
</style>
