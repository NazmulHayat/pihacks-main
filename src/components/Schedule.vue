<template>
    <div class="schedule pl-16 pr-16 pt-10 pb-14">
        
        <div class="hee">
            <!-- <div class="tt text-h3 white--text font-weight-bold"> Schedule </div> -->
            <v-img 
                class="mt-8"
                max-width="2000"
                src = "../assets/Timeline.png"></v-img>
        </div>
        <!-- <div class="chnges font-weight-medium"> 7 day long event with intense challenges and educational webinars</div> -->
    </div>
</template>

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

<style>
    .schedule{
        color: white;
        font-family: 'Open Sans', sans-serif;
        display: flex;
        justify-content: center;
    }
    .tt{
        border-bottom: 10px solid #008ED2;
        display: inline-block;
    }
    .vue-typer .custom.char.typed {
        color: #ffffff;
        font-weight: 500;
    }
    .vue-typer .custom.caret {
        width: 0.15em;
        background-color: #ffffff;
    }
    .chnges{
        /* display: inline-block; */
        /* white-space: pre-wrap; */
        width: 25vw;
        overflow-wrap: break-word;
        text-align: center;
        margin-top: auto;
        margin-bottom: auto;
        margin-right: auto;
        margin-left: auto;
        font-size: 60px;
    }
</style>
