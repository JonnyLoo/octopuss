<template>
  <div class='overview'>
    <div class='about'>
      <span class='title'>~ Overview ~</span>
      <span class='description'>
        Honestly I don't have much to write here lol.
        Was bored and came across nfts so I decided to make one.
        This probably won't get deployed on the mainnet since gas prices are expensive af.
        In the meantime, enjoy these octopi I rachetly put together.
      </span>
    </div>
    <img src='@/assets/octopi/2.png'/>
  </div>
</template>

<script lang='ts'>
  import { Vue } from 'vue-class-component';

  export default class Overview extends Vue {}
</script>

<style scoped lang='scss'>
  .overview {
    min-height: 85vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    img {
      width: 30%;
      transform: rotateY(180deg);
    }
  }

  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 70%;
    padding-right: 150px;

    .title {
      font-size: 3rem;
    }

    .description {
      padding-top: 1rem;
      font-size: 1.75rem;
    }

    span {
      text-align: center;
    }
  }

  .overview {
    min-height: 100vh;
    display: flex;
  }
</style>
