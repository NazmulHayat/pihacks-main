<template>
    <div class="mm">
        <div class="txt"> 
            <div class="fked 
            text-h2 
            font-weight-black"> PIHACKS'21 </div>
            <div class="up
            text-h4 
            font-weight-bold white--text">July 25th-31st completely virtual!</div> <br>
            <div class="
            text-h3
            ">
                <div class="fixed"> Don't miss this </div> 
                <div class="editable">
                <vue-typer
                    :text='["Golden Oppurtunity", "chance to win attractive prizes!"]'
                    :repeat='0'
                    :shuffle='false'
                    initial-action='typing'
                    :pre-type-delay='0'
                    :type-delay='0'
                    :pre-erase-delay='0'
                    :erase-delay='0'
                    erase-style='backspace'
                    :erase-on-complete='false'
                    caret-animation='blink'
                ></vue-typer> <br>
                <v-btn class="Btn mt-10 mb-10 font-weight-bold text-lg-h5" x-large light>
                    <v-icon left x-large>
                        mdi-arrow-right
                    </v-icon>
                    Apply Now!
                </v-btn>
                </div>
            </div>
        </div>
        <img class="IMAGE" src="../assets/cool_man_cropped.png">
    </div>
</template>

<style>
    .mm{
        display: flex;
        /* flex-wrap: wrap; */
        justify-content: space-between;
        height: auto;
    }
    .vue-typer .custom.char.typed {
        color: #ffffff;
        /* font-weight: 700; */
    }
    .vue-typer .custom.caret {
        width: 0.15em;
        display: inline-block;
        background-color: #ffffff;
    }

    .fixed{
        color: #ffffff;
        /* font-weight: 700; */
    }
    .IMAGE{
        height: 400px;
        max-width: 100%;
        align-self: flex-start;
        /* padding-bottom: 2vh; */
    }
    .fked{
        color: white;
        /* font-weight: 800;     */
    }
</style>

<script>
import VueTyperPlugin from 'vue-typer'
import Vue from 'vue'
Vue.use(VueTyperPlugin);

export default{
    data(){

    }
}
</script>

