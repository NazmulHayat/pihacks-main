<script>
// function imgSrc(item){
//     return require('../assets/'+item.type+'.png');
// }
export default {
    data (){
        return {
            FAQs : [
                {
                    q: "Who is eligible to participate?",
                    a: "All students from grade 9 to grade 12 are eligible to participate.",
                },
                {
                    q: "What if I don’t know how to code?",
                    a: "Not a problem. It’s absolutely okay if you don’t have prior technology experience or programming prerequisites before coming, it’s more about your interest in making a jumpstart in technology. We will have workshops & experienced mentors to guide you through the whole process and hopefully, it will be exciting for your first foray into the world of technology.",
                },
                {
                    q: "How much will it cost to participate in the event?",
                    a: "Thanks to our wonderful sponsors, participating is completely free of cost. We hope everyone who wants to participate can participate.",
                },
                {
                    q: "Do I need to prepare anything before the competition?",
                    a: "All you need is a device and a good internet connection, and the world is yours to conquer.",
                },
                {
                    q: "I don’t have a team for the hackathon, can I still participate?",
                    a: "Yes! We are taking in teams of 1 - 3 members.",
                },
                {
                    q: "What will be the topic of the hackathon case study?",
                    a: "The topic will be announced in a special session, \"Topic Reveal\".",
                },
                {
                    q: "What platforms will be used in this event?",
                    a: "",
                    imgs:[
                        require("@/assets/Devpost.png"),
                        require("@/assets/Zoom.png"),
                        require("@/assets/Discord.png"),
                        require("@/assets/Quizizz.png"),
                        require("@/assets/Toph.png")
                    ]
                },
                {
                    q: "What to expect from this event?",
                    a: "Expect our event week to take you on an exhilarating ride and boost your passion for tech. Check out the timeline to find out all the amazing events we have planned.",
                },
                {
                    q: "What are the prizes?",
                    a: "We are going to honour our winners and top performers with a grand prize pool of 100,000 BDT.",
                },
                {
                    q: "I need help with some issues, who can I contact?",
                    a: "Please, send us an email on contact@pihacks.net",
                },
            ]
        }
    }
}
</script>

<template>
        <v-expansion-panels dark class="pb-16 pt-16 mx-auto" style="max-width:1050px">
        <v-expansion-panel v-for="(qa,i) in FAQs" :key="i">
            <v-expansion-panel-header>
            <div class="text-subtitle-1">{{qa.q}}</div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
            <div class="text-subtitle-2">Ans: {{qa.a}}</div>
            <v-container>
                <v-row>
                    <v-col v-for="(img,i) in qa.imgs" :key="i">
                        <v-img :src="img" contain max-height="80px"></v-img>
                    </v-col>
                </v-row>
            </v-container>
            </v-expansion-panel-content>
        </v-expansion-panel>
        </v-expansion-panels>
</template>

