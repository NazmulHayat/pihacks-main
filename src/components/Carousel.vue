<script>
// function imgSrc(item){
//     return require('../assets/'+item.type+'.png');
// }
export default {
    data (){
        return {
            // method: [
            //   goto(nm)
            // ],
            slides: [
                {idx:'1', img: require('@/assets/math.jpg'), header: "Idea Sprint",
                  text:"Effeciently develop your concept prototype and polished product"
                }, //idea contest
                {idx:'2', img: require('@/assets/ic.jpg'), header: "Mathletics", 
                  text:"Your conventional math contest, but with an added spice of thrill"
                }, //Mathletics 
                {idx:'3', img: require('@/assets/pg.jpg'), header: "CodeJam", 
                  text:"4 anticipating hours to showcase your problem-solving skills"}, //Programming Contest
                {idx:'4', img: require('@/assets/1234.jpg'), header: "Easter Egg", 
                  text:"Put your observational mind to test!"}, //Easter Egg
            ],
            expand: false
        }
    },
    mounted(){
      this.expand = true;
    }
}
</script>

<template>
  <v-card
    elevation="24"
    class="carou mx-auto"
  > 
    <v-carousel :show-arrows="false" 
      cycle
      interval="1000000"
    >
      <v-carousel-item
        v-for="(item,i) in slides"
        :key="i"
        :src="item.img"
      >
      <div class="BOX">
        <div id="header" transition="fade-transition" class="white--text font-weight-medium text-h1 px-8 pt-8">{{item.header}}</div>
        <div id="content" class="white--text text-h4 px-8 pt-4">{{item.text}}</div>
        <v-btn onclick = "window.location.href='/event-segments';" class="Btn mt-10 mb-10 mx-8 font-weight-bold text-lg-h5" light x-large>
          <!-- <v-icon left x-large>
              mdi-arrow-right
          </v-icon> -->
          Read more..
        </v-btn>
      </div>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500&display=swap');
  .BOX{
    animation: transitionIn 1.5s;
  }
  @keyframes transitionIn {
    from {
      opacity: 0;
      transform: translateY(-100px);
    }
    to{
      opacity: 1;
      transform: translateY(0);
    }
  }
  .BOX{
    font-family: 'Chakra Petch', sans-serif;
    display: flex;
    max-width: 40vw;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
  }
  #header{
    /* text-decoration: underline; */
    /* margin: auto; */
    /* padding-left: 41.5vw; */
  }
  #content{
    /* padding-right: 20px;
    padding-left: 20px;  */
    /* white-space: pre; */
    word-wrap: break-word;
    display: inline-block;
  }
  #trans{
    background-color: transparent;
    /* color: transparent; */
  }
</style>


