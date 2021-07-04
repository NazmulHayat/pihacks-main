<template>
    <div class="mm py-8">
        <div class="txt"> 
            <div class="fked 
            text-h2
            font-weight-black"> PIHACKS'21 </div>
            <div class="up
            text-h4 
            font-weight-bold white--text">July 25th-31st completely virtual!</div> <br>
            <div class="
            text-h3
            font-weight-light
            ">
                <div class="fixed">Don't miss this</div> 
                <div class="editable">
                    <typewriter
                    :replace="replace"
                    :type-interval="100"
                    :replace-interval="1000"
                    class="typewriter">Golden Oppurtunity</typewriter>
                    <v-btn class="Btn mt-10 mb-10 font-weight-bold text-lg-h5" x-large light>
                        <v-icon left x-large>
                            mdi-arrow-right
                        </v-icon>
                        Apply Now!
                    </v-btn>
                </div>
            </div>
        </div>
        <img class="IMAGE" src="../assets/cool_man_cropped-larger.png">   
    </div>
</template>

<script>
import Typewriter from "typewriter-vue";

export default {
    name: "App",
    components: {
    Typewriter,
    },
    data: () => ({
    replace: [
      {
        from: "Golden Oppurtunity",
        to: "Chance to win attractive prizes!",
      },
    ],
  }),

};
</script>

<style>
    .mm{
        display: flex;
        /* flex-wrap: wrap; */
        justify-content: space-between;
        height: auto;
    }

    .fixed{
        color: #ffffff;
        /* font-weight: 700; */
    }
    .IMAGE{
        width:100%;
        max-width: 519px;
        align-self: flex-start;
        /* padding-bottom: 2vh; */
    }
    .typewriter.content *:last-child::after {
    animation: blinking 0.5s steps(2,jump-none) 0s infinite alternate !important;
    }
    @keyframes blinking {
    0%{opacity:1;}
    100%{opacity: 0;}
    }
    @media only screen and (max-width: 1080px) {
        .mm {
            flex-wrap: wrap;
            text-align: center;
            align-items: center;
            justify-content: center;
        }
    }
    /* @media only screen and (max-width: 600px) {
        .IMAGE{
            width: 400px;
        }
    } */

</style>