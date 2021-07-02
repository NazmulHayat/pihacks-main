<template>
    <nav>
        <v-app-bar app dark class="black white--text" height="75" id="toolbar-bg" elevation="100">
        <v-img
            src="@/assets/pihacks_logo.png"
            max-width='50'
            contain
        ></v-img>
        <span id='main_text' class="white--text font-weight-bold">PIHACKS</span>
        <v-spacer></v-spacer>
        <v-list-tile v-for="link in links" :key="link.text" class="p-0 text-none">
            <v-list-tile-action>
                <v-btn router :to="link.route" text color="white"  flat x-large id="BTN" class="font-weight-bold text-none">
                    {{link.text}} 
                </v-btn>
            </v-list-tile-action>
        </v-list-tile>
        </v-app-bar>
    </nav>
</template>

<script>

export default {
    data() {
        return {
            links: [
                { text: 'Home', route : '/'},
                { text: 'Schedule', route : '/schedule'},
                { text: 'Event-Segments', route : '/event-segments'},
                { text: 'FAQs', route : '/faqs'},   
                { text: 'About-Us', route : '/about-us'},
            ]
        }
    }
}

</script>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Display:wght@800&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
    #BTN{
        font-size: 1.25em;
    }
    #main_text{
        padding-left: 20px;
        /* font-family: 'Big Shoulders Stencil Display', cursive; */
        font-family: 'Russo One', sans-serif;
        letter-spacing: 1.5px;
        font-size: 2.5em;
        letter-spacing: 4.5px;
    }
    #toolbar-bg{
        /* background-image: linear-gradient(to right, rgb(0, 0, 0), rgb(126, 117, 172), black); */
        /* background-image: url('../assets/3_tmp.jpeg'); */
        /* background-repeat: ; */
    }
</style>
