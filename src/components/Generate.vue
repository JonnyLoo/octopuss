<template>
  <div class='generate'>
    <Bubbles />
    <img v-if='imageSrc' :src='imageSrc' :key='imageSrc'/>
    <img v-else class='mystery' src='@/assets/octopi/mystery.png'/>
    <button @click='generate'>
      <span v-if='loading'>Loading...</span>
      <span v-else>Generate</span>
    </button>
  </div>
</template>

<script lang='ts'>
  import { Options, Vue } from 'vue-class-component';
  import Bubbles from '@/components/Bubbles.vue';

  @Options({
    components: {
      Bubbles
    }
  })
  export default class Generate extends Vue {
    get loading(): boolean {
      return this.$store.getters.loading;
    }

    generate(): void {
      this.$store.dispatch('generateImage');
    }

    get imageSrc(): string {
      return this.$store.getters.image;
    }
  }
</script>

<style scoped lang='scss'>
  .generate {
    background: linear-gradient(to top, $midnight-blue, $navy-blue);
    min-height: 92vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  img {
    width: 750px;
    position: absolute;
    opacity: 1;
    animation: fadeIn 1 ease-in .69s both;
  }

  .mystery {
    width: 400px;
    top: 280px;
    position: absolute;
  }

  button {
    position: absolute;
    top: 69vh;
    margin-top: 100px;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
