<template>
  <div id='bubbles'>
    <div v-for='index in 50' class='bubble' :key='index'/>
  </div>
</template>

<script lang='ts'>
  import { Vue } from 'vue-class-component';

  export default class Bubbles extends Vue {}
</script>

<style scoped lang='scss'>
  #bubbles {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 92vh;
    bottom: 0;
  }

  .bubble {
    position: absolute;
    border-radius: 50%;
    display: block;
    @for $i from 1 through 50 {
      &:nth-child(#{$i}) {
        $wh: random(25) + 5px;
        width: $wh;
        height: $wh;
        background: linear-gradient(random(180)+deg, rgba(255, 255, 255, random(10)/8) 1%, transparent 97%);
        left: random(2000)+px;
        bottom: -30px;
        animation: float-#{$i} 8s infinite ease-in ($i * 0.2)+s;
        z-index: 0;
        @keyframes float-#{$i} {
          20% { transform: translatex(-1*random(10)+px); }
          40% { transform: translatex(random(12)+px); }
          60% { transform: translatex(-1*random(10)+px); }
          80% { transform: translatex(random(12)+px); }
          100% {
            opacity: random(10)/10;
            bottom: 100%;
          }
        }
      }
    }
  }
</style>
