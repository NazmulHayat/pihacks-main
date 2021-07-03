<template>
  <v-app id="wrapper">
    <div class="content">
      <Navbar/>
      <v-main class="bg">
        <router-view/>
      </v-main>
    </div>
    <div class="background">
      <div id="particles-js" class="particles-js"></div>
    </div>
    
      <Footer class="footer"/>
  </v-app>
</template>


<script>

var ParticleJsIsOn = true;

import "particles.js";
const config = require("./particles.json");
import Navbar from '@/components/Navbar.vue';

import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: { Navbar, Footer },
  data: () => ({
    
  }),
  mounted(){
    document.getElementById("particles-js").style.height=window.screen.height + "px";
    document.getElementById("particles-js").style.width=window.screen.width + "px";
    if(ParticleJsIsOn)
      window.particlesJS('particles-js', config);
  }
}
</script>


<style>
  #wrapper{
    position: relative;
  }

  .content{
      min-height: 100vh;
      position: relative;
      z-index: 100;
  }

  .background{
      position: fixed;
  }
  .footermain{
    bottom:0;
  }
</style>
