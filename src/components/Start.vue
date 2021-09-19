<template>
  <div class='start'>
    <img src='@/assets/octopi/1.png'/>
    <div class='mint'>
      <span>0.04 ETH</span>
      <button @click='mint'>Mint</button>
    </div>
  </div>
</template>

<script lang='ts'>
  import { Vue } from 'vue-class-component';

  export default class Start extends Vue {
    mint(): void {
      console.log('mint');
    }
  }
</script>

<style scoped lang='scss'>
  .start {
    min-height: 85vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    img {
      width: 45%;
    }
  }

  .mint {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55%;

    span {
      text-align: right;
      font-size: 2rem;
      padding-right: 30px;
    }
  }

  .overview {
    min-height: 100vh;
    display: flex;
  }
</style>
