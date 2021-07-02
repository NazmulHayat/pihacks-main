<template>
  <div class="home">
    <Carousel/>
    <FAQs/>
    <Timer/>
    <div class="main-text">
        <div class="main-head">About PIHACKS</div>
        <div class="white--text 
            text-lg-h4
            pl-16 pr-16
        ">
            <p class="p1">
            Tired of confiding your ideas in your grim pc screens? Presidency International School is proud to unveil “PiHacks 2021”, the first-ever high school hack fest in the nation. Technology, combining logical analysis, science and creativity in one facile format, has become a powerful medium for real change. Since its birth, Bangladesh has accomplished numerous technological feats, and at the cornerstone of all technological advancements inhabits “Digital Bangladesh”. We believe it is of utmost importance that we utilize our increasing dependence on technology so that we can work towards improving the lives of people. We aim to bring you an amalgamation of fun, learning and competitiveness where you will be able to engage in intellectual warfare and stimulate your passion with your fellow tech enthusiasts. </p>
        </div>
    </div>  
    <TypeWriter/>
  </div>
</template>

<script>

import Carousel from '@/components/Carousel.vue';
import Timer from '@/components/Timer.vue';
import TypeWriter from '@/components/TypeWriter.vue';

console.log(Timer);

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
    .main-text{
        /* padding-left: 150px; */
        /* padding-right: 150px; */
        /* padding-top: 50px; */
        /* font-family: 'Bree Serif', serif; */
        font-family: 'Open Sans', sans-serif;
        /* width: 800px; */
        /* font-size: 2.2em; */
    }
    .p1{
        /* padding-top: 20px; */
    }
    .main-head {
        color: white;
        /* font-size: 1.5em; */
        font-family: 'Open Sans', sans-serif;
        border-bottom: 10px solid #008ED2;
        display: inline-block;
    }
</style>