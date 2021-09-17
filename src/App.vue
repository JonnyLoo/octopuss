<template>
  <div id='nav'>
    <img class='site-logo' src='@/assets/octopuss.png'/>
    <router-link to='/'>Home</router-link>
    <router-link to='/'>Roadmap</router-link>
    <router-link to='/'>Team</router-link>
    <router-link to='/'>WTF</router-link>
    <router-link to='/generator'>xD</router-link>
    <div class='socials'>
      <img src='@/assets/opensea.svg' />
      <img class='icon' src='@/assets/twitter.svg' />
      <img class='icon' src='@/assets/discord.svg' />
      <img class='icon' src='@/assets/instagram.svg' />
    </div>
  </div>
  <router-view/>
</template>

<style lang='scss'>
@import '@/scss/styles.scss';
</style>
