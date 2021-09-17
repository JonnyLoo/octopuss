<template>
  <div class='start'>
    <img src='@/assets/octopuss.png'/>
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
    justify-content: flex-end;
    width: 55%;

    span {
      text-align: right;
      font-size: 2rem;
      padding-right: 30px;
    }

    button {
      width: 200px;
      height: 50px;
      font-family: 'Bubblegum Sans', cursive;
      font-size: 1.2rem;
      letter-spacing: .1rem;
    }
  }

  .overview {
    min-height: 100vh;
    display: flex;
  }
</style>
