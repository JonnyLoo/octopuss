<template>
  <div class='journey'>
    <div class='pitstop'>
      <img src='@/assets/octopi/4.png'/>
      <div class='text-block'>
        <span class='title'>~ Some stop ~</span>
        <span class='description'>
          Ok I'm going to be honest here, we aren't really planning on going anywhere.
          This is mostly just for funsies.
        </span>
      </div>
    </div>
    <div class='pitstop flipped'>
      <div class='text-block'>
        <span class='title'>~ Some other stop ~</span>
        <span class='description'>
          I want this page built out though so it looks nicer and more complete.
          Going to need some random stuff to fill up space though like this.
        </span>
      </div>
      <img src='@/assets/octopi/4.png'/>
    </div>
    <div class='pitstop'>
      <img src='@/assets/octopi/4.png'/>
      <div class='text-block'>
        <span class='title'>~ The last stop ~</span>
        <span class='description'>
          We made it! Ok seriously why are you still scrolling and reading this lol.
          I'm not lying there really isn't anything here.
        </span>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
  import { Vue } from 'vue-class-component';

  export default class Journey extends Vue {}
</script>

<style scoped lang='scss'>
  .journey {
    min-height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .pitstop {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 69vh;
  }

  .flipped {
    img {
      transform: rotateY(180deg);
    }

    .text-block {
      padding-right: 150px;
      padding-left: 0px;
      margin-right: auto;
    }
  }

  .text-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 70%;
    padding-right: 0px;
    padding-left: 150px;
    margin-left: auto;

    .title {
      font-size: 2.5rem;
    }

    .description {
      padding-top: 1rem;
      font-size: 1.75rem;
    }
  }

  img {
    width: 30%;
  }

  span {
    text-align: center;
  }
</style>
