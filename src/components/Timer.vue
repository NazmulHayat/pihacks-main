<template>
    <div id="flipdown" class="flipdown"></div>
</template>

<script>

const flipdown = require("../assets/flipdown");

function WaitUntilFlipDownExists()
{
    return new Promise((resolve, reject)=>{
        setInterval(()=>{
            if(document.getElementById("flipdown") != null)
                resolve();
        },10);
        let a=0;
        if(a) reject(); //vue is shit
    });
    
}

async function dhet()
{
    await WaitUntilFlipDownExists();
    var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;
    var fku = new flipdown(twoDaysFromNow, document.getElementById("flipdown"), {
        theme: 'dark',
        headings: ["Days", "Hours", "Minutes", "Seconds"]
    });
fku.start();
}dhet();

export default {
    data () {
        return {}
    }
}

</script>

<style>
    @import '../assets/flipdown.css';
    .flipdown{
        padding-top: 20px;
        font-size: 1.5em;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        margin: auto;
    }
</style>