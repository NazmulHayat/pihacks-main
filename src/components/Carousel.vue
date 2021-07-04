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
                {idx:'1', img: require('@/assets/ic.jpg'), header: "Idea Sprint",
                  text:"Effeciently develop your concept prototype and polished product"
                }, //idea contest
                {idx:'2', img: require('@/assets/math.jpg'), header: "Mathletics", 
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
      interval="5000"
    >
      <v-carousel-item
        v-for="(item,i) in slides"
        :key="i"
        :src="item.img"
        transition="slide-x-transition"
      >
      <div class="BOX">
        <div id="header2" transition="fade-transition" 
        class="header2 white--text font-weight-medium 
        text-md-h2
        text-lg-h1 
        pt-8 pb-5
        pl-8 
        ">
          {{item.header}}</div>
        <div id="content" 
        class="white--text 
        text-md-h4
        text-lg-h3 
        pl-8">
          {{item.text}}</div>
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
    /* display: flex; */
    max-width: 40vw;
    height: 100%;
    /* flex-direction: column; */
    /* align-items: flex-start; */
    /* justify-content: space-around; */
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

  @media only screen and (max-width: 960px) {
    /* has no fk effect */
    .BOX{
      font-family: 'Roboto', sans-serif;
      /* display: flex; */
      max-width: 40vw;
      height: 100%;
    }
    .header2{
      font-size: 65px;
      padding-bottom: 10px;
    }
    #content{
      font-size: 35px;
    }
  }
  @media only screen and (max-width: 880px) {
    /* has no fk effect */
    .BOX{
      font-family: 'Roboto', sans-serif;
      /* display: flex; */
      max-width: 45vw;
      height: 100%;
    }
    .header2{
      font-size: 50px;
      padding-bottom: 10px;
    }
    #content{
      font-size: 33px;
    }
  }
  @media only screen and (max-width: 684px) {
    /* has no fk effect */
    .header2{
      font-size: 45px;
    }
    #content{
      font-size: 29px;
    }
  }
  /* @media only screen and (max-width: 630px){
    .Btn{
      padding: 200px;
      width: 25vw;
      font-size: 0px;
    }
  } */
  @media only screen and (max-width: 600px) {
    /* has no fk effect */ 
    .header2{
      font-size: 40px;
    }
    #content{
      font-size: 27px;
    }
    
  }
  @media only screen and (max-width: 500px) {
    /* has no fk effect */ 
    .header2{
      font-size: 35px;
    }
    #content{
      font-size: 25px;
    }
  }
  @media only screen and (max-width: 450px) {
    /* has no fk effect */ 
    .header2{
      font-size: 30px;
    }
    #content{
      font-size: 23px;
    }
  }
</style>


