<template>
  <div class="home">
    <Carousel/>
    <FAQs/>
  </div>
</template>

<script>

import Carousel from '@/components/Carousel.vue';


export default {
  components: {Carousel},
  data: () => ({
    
  }),
};
</script>


<style>
  .home{
    font-size: 100px;
  }
</style>