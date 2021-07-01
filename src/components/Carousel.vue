<script>
// function imgSrc(item){
//     return require('../assets/'+item.type+'.png');
// }
export default {
    data (){
        return {
            slides: [
                {img: '@/assets/networking.png', text:""}, //idea contest
                {img: '@/assets/frog.png', text:""}, //Mathletics 
                {img: '@/assets/plain.png', text:""}, //Programming Contest
                {img: '', text:""}, //Easter Egg
            ]
        }
    }
}
</script>

<template>
  <v-carousel
    cycle
    height="500"
    class="p-10"
    hide-delimiter-background
    show-arrows-on-hover>
    <v-carousel-item v-for="slide in slides" :key="slide.img">
        <v-sheet>
            <!-- <v-img src="@/assets/networking.png"></v-img> -->
            <v-img :src="slide.img"> </v-img>
        </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>


