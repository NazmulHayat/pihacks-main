<template>
  <div class="home">
    <Carousel/>
    <FAQs/>
  </div>
</template>

<script>

import Carousel from '@/components/Carousel.vue';
import FAQs from '@/components/FAQs.vue';

export default {
  components: {Carousel, FAQs},
  data: () => ({
    
  }),
};
</script>


<style>
  .home{
    font-size: 100px;
  }
</style>