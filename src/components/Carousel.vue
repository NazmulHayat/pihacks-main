<script>
// function imgSrc(item){
//     return require('../assets/'+item.type+'.png');
// }
export default {
    data (){
        return {
            slides: [
                {idx:'1', img: require('@/assets/networking.png'), header: "Idea Sprint", text:""}, //idea contest
                {idx:'2', img: require('@/assets/frog.png'), header: "Mathletics", text:""}, //Mathletics 
                {idx:'3', img: require('@/assets/plain.png'), header: "CodeJam", text:""}, //Programming Contest
                {idx:'4', img: require('@/assets/dewal.jpeg'), header: "Easter Egg", text:""}, //Easter Egg
            ],
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
      <span id="header" class="white--text m">{{item.header}}</span>
      </v-carousel-item>
    </v-carousel>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@600&display=swap');
  #header{
    font-family: 'Chakra Petch', sans-serif;
    font-size: 0.75em;
    padding-left: 15px;
  }
</style>


