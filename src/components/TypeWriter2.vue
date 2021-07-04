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
                    :type-interval="100"
                    :replace-interval="1000"
                    class="typewriter" ref="typewriter"><p>G</p></typewriter>
                    <v-btn class="Btn mt-10 mb-10 font-weight-bold text-lg-h5" @click="replace1" x-large light>
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
function isInViewport(element) {
    if(element==null) return;
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
isInViewport(null);
export default {
    name: "App",
    components: {
    Typewriter,
    },
    data: () => ({}),
    methods: {
        replace1(){
            this.$refs.typewriter.replaceText({
                from: "G",
                to: "Golden Oppurtunity",
            });
        },
        replace2(){
            this.$refs.typewriter.replaceText({
                from: "Golden Oppurtunity",
                to: "Chance to win attractive prizes!",
            });
        },
    },
    mounted()
    {
        
        window.setTimeout(()=>{
            var id= window.setInterval(() => {
                if(isInViewport(document.getElementsByClassName("typewriter")[0]))
                {   
                    window.clearInterval(id);
                    document.getElementsByClassName('txt')[0].style.animation = "transitionIn2 1.5s forwards";
                    document.getElementsByClassName('IMAGE')[0].style.animation = "transitionIn3 1.5s forwards";
                    window.setTimeout(() => {
                        this.replace1();
                        window.setTimeout(()=>{
                            this.replace2();
                        },3000)
                    }, 2000);
                }
            },100);
        },1000);
    }

};
</script>

<style>
    .txt, .IMAGE{
        /* display: none; */
        opacity: 0;
        animation-fill-mode: forwards;
    }
    @keyframes transitionIn2 {
        from {
        opacity: 0;
        transform: translateX(-300px);
        }
        to{
        opacity: 1;
        transform: translateY(0);
        }
    }
    @keyframes transitionIn3 {
        from {
            opacity: 0;
            transform: translateX(300px);
        }
        to{
            opacity: 1;
            transform: translateY(0);
        }
    }
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