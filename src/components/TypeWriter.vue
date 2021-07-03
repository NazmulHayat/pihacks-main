<template>
    <div class="
        mm pl-16 ml-14 mr-12
    ">
        <div class="txt"> 
            <div class="fked text-lg-h1 font-weight-black"> PIHACKS'21 </div>
            <div class="up text-lg-h3 font-weight-bold white--text"> July 25th-31st completely virtual! </div> <br>
            <div class="fixed text-lg-h2"> Don't miss this </div> 
            <div class="editable text-lg-h2">
            <vue-typer
                :text='["Golden Oppurtunity", "chance to win attractive prizes!"]'
                :repeat='2'
                :shuffle='false'
                initial-action='typing'
                :pre-type-delay='70'
                :type-delay='140'
                :pre-erase-delay='2000'
                :erase-delay='200'
                erase-style='backspace'
                :erase-on-complete='false'
                caret-animation='blink'
            ></vue-typer> <br>
            <v-btn class="Btn mt-10 mb-10 font-weight-bold text-lg-h5" x-large>
                <v-icon left x-large>
                    mdi-arrow-right
                </v-icon>
                Apply Now!
            </v-btn>
            </div>
        </div>
        <img class="IMAGE" src="../assets/cool_man.png">
    </div>
</template>

<style>
    .mm{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        height: auto;
    }
    .vue-typer .custom.char.typed {
        color: #ffffff;
        /* font-weight: 700; */
    }
    .vue-typer .custom.caret {
        width: 0.15em;
        background-color: #ffffff;
    }

    .fixed{
        color: #ffffff;
        /* font-weight: 700; */
    }
    .IMAGE{
        width: 100%;
        max-width: 800px;
        /* align-self: flex-start; */
        margin-top: -10vh;
        /* padding-bottom: 2vh; */
    }
    .fked{
        color: white;
        /* font-weight: 800;     */
    }
    .Btn{
        /* align-self: flex-start; */
        /* color:white; */
    }
</style>

<script>
import VueTyperPlugin from 'vue-typer'
import Vue from 'vue'
Vue.use(VueTyperPlugin);

export default{
    data () {
        return {}
    }
}
</script>

