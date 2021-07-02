<template>
    <div class="mm text-lg-h1">
        <div> 
            <div class="fixed"> Don't miss this </div> 
            <div class="editable" max-width=400>
            <vue-typer
                :text='["Golden Oppurtunity", "chance to win attractive prizes"]'
                :repeat='Infinity'
                :shuffle='false'
                initial-action='typing'
                :pre-type-delay='70'
                :type-delay='140'
                :pre-erase-delay='2000'
                :erase-delay='200'
                erase-style='backspace'
                :erase-on-complete='false'
                caret-animation='blink'
            ></vue-typer>
            </div>
        </div>
        <img class="IMAGE" src="../assets/cool_man.png">
    </div>
</template>

<style>
    .mm{
        display: flex;
        justify-content: space-around;
        height: auto;
    }
    .vue-typer .custom.char.typed {
        color: #ffffff;
        font-weight: 700;
    }
    .vue-typer .custom.caret {
        width: 0.15em;
        background-color: #ffffff;
    }
    .fixed{
        color: #ffffff;
        font-weight: 700;
    }
    .IMAGE{

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

