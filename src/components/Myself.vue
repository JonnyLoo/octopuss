<template>
  <div class='myself'>
    <div class='profile'>
      <img src='@/assets/octopi/69.png'/>
      <span class='title'>Me</span>
      <span class='description'>Well this is a solo project</span>
    </div>
    <div class='profile'>
      <img src='@/assets/octopi/0.png'/>
      <span class='title'>Myself</span>
      <span class='description'>So my team consists of me, myself and I</span>
    </div>
    <div class='profile'>
      <img src='@/assets/octopi/3.png'/>
      <span class='title'>I</span>
      <span class='description'>Aka I did this all by my lonesome</span>
    </div>
  </div>
</template>

<script lang='ts'>
  import { Vue } from 'vue-class-component';

  export default class Myself extends Vue {}
</script>

<style scoped lang='scss'>
  .myself {
    min-height: 95vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
      margin-top: 69px;
      font-size: 2.25rem;
    }

    .description {
      padding-top: 1rem;
      font-size: 1.5rem;
    }
  }

  img {
    width: 69%;
  }
</style>
