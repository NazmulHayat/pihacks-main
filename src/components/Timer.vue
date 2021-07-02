<template>
    <div id="flipdown" class="flipdown"></div>
</template>

<script>

import flipdown from '../assets/flipdown.js';

document.addEventListener('DOMContentLoaded', () => {
var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;

        console.log("asdfasdfasdf", document.getElementById('flipdown'));

var fku = new flipdown(twoDaysFromNow, document.getElementById("flipdown"), {
    theme: 'dark',
    headings: ["Days", "Hours", "Minutes", "Seconds"]
});
fku.start();
    console.log("adf");
})
export default {
    data () {
        return {}
    }
}

</script>

<style>
    @import '../assets/flipdown.css';
</style>