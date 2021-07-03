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
    
  </v-app>
</template>


<script>
import "particles.js";
const config = require("./particles.json");
import Navbar from '@/components/Navbar.vue';
function WaitUntilparticlesjsExists()
{
    return new Promise((resolve, reject)=>{
        setInterval(()=>{
            if(document.getElementById("particles-js") != null)
                resolve();
        },10);
        let a=0;
        if(a) reject(); //vue is shit
    });
    
}
const resizeObserver = new ResizeObserver(async()=>
{
    initBG();
});
resizeObserver.observe(document.body);
async function initBG()
{
    await WaitUntilparticlesjsExists();
    window.particlesJS('particles-js', config);
    
}initBG();

export default {
  name: 'App',
  components: { Navbar },
  data: () => ({
    
  })
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
      position: absolute;
  }
</style>
