<template>
  <div class="home">
    <Carousel/>
    <FAQs/>
    <Timer/>
  </div>
</template>

<script>

import Carousel from '@/components/Carousel.vue';
import Timer from '@/components/Timer.vue';

console.log(Timer);

export default {
  components: {Carousel, Timer},
  data: () => ({
    
  }),
};
</script>


<style>
  .home{
    font-size: 100px;
  }
</style>