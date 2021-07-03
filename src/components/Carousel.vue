<script>
// function imgSrc(item){
//     return require('../assets/'+item.type+'.png');
// }
export default {
    data (){
        return {
            slides: [
                {idx:'1', img: require('@/assets/lalal19.jpg'), header: "Idea Sprint",
                  text: ""
                }, //idea contest
                {idx:'2', img: require('@/assets/lalal11.jpg'), header: "Mathletics", text:""}, //Mathletics 
                {idx:'3', img: require('@/assets/lalal21.webp'), header: "CodeJam", text:""}, //Programming Contest
                {idx:'4', img: require('@/assets/lalal30.jpg'), header: "Easter Egg", text:""}, //Easter Egg
            ],
        }
    }

}
</script>

<template>
  <v-card
    elevation="24"
    class="mx-auto"
  > 
    <v-carousel :show-arrows="false">
      <v-carousel-item
        v-for="(item,i) in slides"
        :key="i"
        :src="item.img"
      >
      <div class="BOX">
        <div id="header" class="white--text">{{item.header}}</div>
        <div id="content" class="white--text">{{item.text}}</div>
      </div>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@600&display=swap');
  .container{
    width: 200px;
  }
  #header{
    font-family: 'Chakra Petch', sans-serif;
    font-size: 3em;
    display: flex;
    justify-content: center;
    text-decoration: underline;
    /* margin: auto; */
    /* padding-left: 41.5vw; */
  }
  #content{
    font-size: 0.5em;
    padding-right: 20px;
    padding-left: 20px; 
    white-space: pre;
    word-wrap: break-word;
    display: inline-block;
  }
</style>


