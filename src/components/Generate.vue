<template>
  <div class='generate'>
    <button @click='generate'>Generate</button>
  </div>
</template>

<script lang='ts'>
  import { Vue } from 'vue-class-component';

  export default class Generate extends Vue {
    generate(): void {
      this.$store.dispatch('generateImage', {
        path: 'octopuss.png',
        head: '1',
        eyes: '1',
        mouth: '1',
        body: '1'
      });
    }
  }
</script>

<style scoped lang='scss'>
  .generate {
    min-height: 95vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  button {
    width: 200px;
    height: 50px;
    font-family: 'Bubblegum Sans', cursive;
    font-size: 1.2rem;
    letter-spacing: .1rem;
  }
</style>
