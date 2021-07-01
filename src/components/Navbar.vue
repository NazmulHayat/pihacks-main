<template>
    <nav>
        <v-toolbar app dark class="black white--text" height="75">
        <v-img
            src="@/assets/pihacks_logo.png"
            max-width='50'
        ></v-img>
        <v-spacer></v-spacer>
        <v-list-tile v-for="link in links" :key="link.text" class="p-0 text-none">
            <v-list-tile-action>
                <v-btn text color="white"  flat x-large id="BTN" class="font-weight-bold text-none">
                    {{link.text}} 
                </v-btn>
            </v-list-tile-action>
        </v-list-tile>
        </v-toolbar>
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
    #BTN{
        font-size: 1.25em;
    }
</style>
