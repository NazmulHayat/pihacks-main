<template>
  <div class="home">
    <Carousel/>
    <div class="
    wrapper-home
    mx-8
    mx-sm-10
    mx-lg-auto
    ">
      <FAQs/>
      <Timer/>
      <TypeWriter/>
      <div class="main-text ">
          <div class="main-head 
          text-h4
          text-sm-h4
          text-xl-h3
          font-weight-medium">About PIHACKS</div>
          <div class="white--text
          text-subtitle-1
          text-sm-body-1
          text-md-subtitle-1
          text-lg-h5
          font-weight-medium pt-4">
              <p class="p1">
              Tired of confiding your ideas in your grim pc screens? Presidency International School is proud to unveil “PiHacks 2021”, the first-ever high school hack fest in the nation. Technology, combining logical analysis, science and creativity in one facile format, has become a powerful medium for real change. Since its birth, Bangladesh has accomplished numerous technological feats, and at the cornerstone of all technological advancements inhabits “Digital Bangladesh”. We believe it is of utmost importance that we utilize our increasing dependence on technology so that we can work towards improving the lives of people. We aim to bring you an amalgamation of fun, learning and competitiveness where you will be able to engage in intellectual warfare and stimulate your passion with your fellow tech enthusiasts. </p>
          </div>
      </div>
          <div class = "img pt-14">
      <v-img 
      id="img"
      class="main-img"
      max-width="1000"
      src = "../assets/Timeline.png"></v-img>  
    </div>
    </div>

  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import Timer from '@/components/Timer.vue';
import TypeWriter from '@/components/TypeWriter2.vue';
// import Schedule from '@/components/Schedule.vue';
export default {
  components: {Carousel, Timer, TypeWriter},
  data: () => ({
    
  }),
};
</script>
<style>
  
    @import url('https://fonts.googleapis.com/css2?family=Prompt:wght@500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Open+Sans:wght@600&display=swap');
    .main-head {
        color: white;
        /* font-size: 1.5em; */
        /* font-family: 'Open Sans', sans-serif; */
        border-bottom: min(0.8vw,8px) solid #008ED2;
        display: inline-block;
    }
    .home{
      margin:auto;
    }
    .wrapper-home{
      max-width: 1200px;
    }
    .img{
      width: 100%;
      /* margin: auto; */
    }
    .main-img{
      width: 100%;
      margin: auto;
    }
</style>