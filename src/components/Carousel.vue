<script>
// function imgSrc(item){
//     return require('../assets/'+item.type+'.png');
// }
export default {
    data (){
        return {
            slides: [
                {idx:'1', img: require('@/assets/networking.png'), text:""}, //idea contest
                {idx:'2', img: require('@/assets/frog.png'), text:""}, //Mathletics 
                {idx:'3', img: require('@/assets/plain.png'), text:""}, //Programming Contest
                {idx:'4', img: require('@/assets/dewal.jpeg'), text:""}, //Easter Egg
            ]
        }
    }
}
</script>

<template>
    <v-carousel>
      <v-carousel-item
        v-for="(item,i) in slides"
        :key="i"
        :src="item.img"
      >
        <span class="sm">Idea Sprint</span>
      </v-carousel-item>
    </v-carousel>
</template>


