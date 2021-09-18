<template>
  <div class='generate'>
    <img v-if='imageSrc()' :src='imageSrc()' />
    <button @click='generate'>Generate</button>
  </div>
</template>

<script lang='ts'>
  import { Vue } from 'vue-class-component';

  export default class Generate extends Vue {
    generate(): void {
      this.$store.dispatch('generateImage');
    }

    imageSrc(): string {
      return this.$store.getters.image;
    }
  }
</script>

<style scoped lang='scss'>
  .generate {
    min-height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  img {
    width: 60%;
  }

  button {
    position: absolute;
    top: 69vh;
    width: 200px;
    height: 50px;
    font-family: 'Bubblegum Sans', cursive;
    font-size: 1.2rem;
    letter-spacing: .1rem;
    margin-top: 100px;
  }
</style>
