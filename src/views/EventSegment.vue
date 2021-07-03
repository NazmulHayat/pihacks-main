<template>
<div>
    <div v-for="content in contents" :key="content.tag" class="asd ml-12 mr-12 pr-16 pl-16 pt-10 pb-10">
        <v-card
            elevation="0"
            height="auto"
            color="transparent"
        >   
            <div class="header font-weight-black text-h3"> {{content.tag}} </div>
            <div class="main font-weight-medium text-h5 pt-5"> {{content.text}} </div>
        </v-card>
    </div>
</div>
</template>
<script>
console.log("asfsaF");
export default{
    data () {
        return {
            contents : [
                {
                    tag : "Idea Sprint",
                    text : 
                        `“Houston, we have a problem” 
Problems that were deemed impossible to solve, that is what NASA scientists were up against. The crisis seemed endless and popped up one after another. However, with detailed analysis, strokes of ingenuity, and brilliant use of the technology they had available, they were able to come up with solid solutions. Just like the unwavering people at NASA, we hope you will project immense dedication as they solve real-life issues in this segment. Idea Sprint is meant to introduce our participants to hackathons. You will want to take advantage of this opportunity to put yourselves in the shoes of a crisis expert and solve a simulated problem. We believe the best ideas are born out of great collaboration and that’s why you can invite a couple of friends to form a team of up to 3 members. Within 48 hours, participants will analyze the provided data, crunch numbers, draw meaningful insights, and ideate solutions that will make an impact. More details will be revealed via a special session, "Topic Reveal".
We shall consider solutions at various stages of development, namely:

• Concept
• Prototype
• Polished Product`
                },
                {
                    tag : "Mathletics",
                    text : 
                    `One cannot imagine computer science without a solid grasp of mathematics. This will be unlike conventional math contests and will test how efficiently one can solve math problems under time pressure. We aim to provide math lovers with purpose and reward through this segment, while also having fun!
to be an hour-long virtual math contest consisting of two separate categories, senior(grades 11-12) and junior (grades 9-10); and will be held on Quizizz. This session will be integrated with Zoom so that our contestants get a chance to take part in fruitful interaction and stay up-to-date with minute-by-minute updates on the live leaderboard. Participants of this segment will be made aware of more details via email.`
                },
                {
                    tag : "CodeJam",
                    text : 
                    `“Problem-solving, inventing, hacking and coding is more of an adrenaline rush of endorphins rather than a feeling.” Code Jam will be a 4 hour-long programming contest, where you have to use your analytical capability to solve the given set of problems. Solving different levels of challenges can help one become a better problem solver, learn the intricacies of a programming language, prepare for job interviews, learn new algorithms, and much more. This contest will contain problems ranging from beginner to advanced level. Code Jam will be held in Toph and submissions will be allowed in languages such as Java, Ruby, Bash, Pascal, C, C++, Python etc. Participants will be notified with further details around the contest date!`
                },
                {
                    tag : "Tech Talk",
                    text : 
                    `We have planned a series of short webinars on specialized computer science topics during the event. Through this segment, we wish to bring together important and interactive talks on an array of interesting topics such as machine learning, cybersecurity, and so on. Young minds will have an opportunity to ask live questions to our guest speakers. Now is the time to promote technological curiosity amongst the enthusiastic new generation. Stay tuned to our event pages to know more!`
                },
                {
                    tag : "Break the code",
                    text : 
                    `Are you prepared with your free-spirited and lateral thinking skills? Because we are pretty sure this mysterious segment will require a lot of them.
We will arrange for participants a special Tech Talk on Cryptography, in which you will be introduced to the art of writing codes. From the different types of techniques used for this purpose, for example, Caesar Cipher, Vigenere Cipher, RSA algorithm, to its wide use in the ever-evolving world, our instructor will discuss an enticing overview. After a lot of listening and talking, it's time for some brainstorming through interesting puzzles in our segment "Break The Code".`
                },
                {
                    tag : "Easter Egg Hunt",
                    text : `Keep your eyes sharp open to not miss out on any of the clues for the easter egg hunt!`
                }
            ]
        }
    }
}

</script>

<style>
    .header{
        border-bottom: 10px solid #008ED2;
        display: inline-block;
    }
    .main{
        overflow-wrap: break-word;
        white-space: pre-wrap;
    }
</style>