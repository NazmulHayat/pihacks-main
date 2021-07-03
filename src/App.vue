<template>
  <v-app>
    <Navbar/>
    <v-content class="bg">
      <router-view/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: { Navbar, Footer },
  data: () => ({
    
  }),
};
</script>


<style>
  .bg{
    /* background: url('./assets/lalal.jpg') ;  */
    background-color: black;
    background-repeat:repeat;
    
  }
</style>
