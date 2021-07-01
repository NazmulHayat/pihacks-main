<template>
  <v-app>
    <Navbar/>
    <v-content class="bg">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: { Navbar },
  data: () => ({
    
  }),
};
</script>


<style>
  .bg{
    background: url('./assets/home-background.png') ; 
    background-repeat:round;
  }
</style>
