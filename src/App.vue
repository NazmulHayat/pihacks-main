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
    <Footer/>
  </v-app>
</template>


<script>
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
    window.particlesJS('particles-js', config);
  }
}
</script>


<style>
  .bg{
    /* background: url('./assets/home-background.png') ;  */
    background-repeat:round;
  }
  #wrapper{
    position: relative;
  }

  .content{
      position: relative;
      z-index: 100;
  }

  .background{
      position: fixed;
  }
</style>
