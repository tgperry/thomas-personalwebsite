<template>
    <button class="thought-generator" @click=changeQuote()>{{ thought }}</button>
</template>

<script>
export default {
    data() {
        return {
            thought: "Click Here for a Random Fact From Myself",
            thoughts: [
                "Hawks will take the chip this season.",
                "If I get a 15 in BlackJack and the dealer's showing royals, I'm hitting.",
                "I wish I had a 72 oz bowl of pho right now.",
                "I want to live in the city, but that directly conflicts with my desire to have a big lawn.",
                "A lot of people talk bad about high school, but I had an awesome time.",
                "Regardless of whatever I'm doing right now, I'd rather be camping, unless I'm already camping.",
                "If I didn't have a MacBook, I'd go with a Dell Precision series with Linux – Linux Mint that is.",
                "The best live sport is basketball, the best live sport in the summer is baseball.",
                "Mac Miller's concert in downtown Seattle will always be my favorite live performance of all time.",
                "Coors Light is a superior beer to the Coors Banquet, but both are superior to every other beer.",
                "VR is the next big thing.",
                "Russell Wilson having no MVP votes is the biggest disrespect in all of modern sports.",
                "Two of my personal goals are to climb every Colorado 14er and visit every country.",
                "I started Ozark on Netflix, but then I found out I can still watch South Park even with it being off Hulu.",
                "I prefer travel by boat way more than travel by car.",
                "Freddie Gibbs is slept on in the music scene, but his Instagram goes crazy.",
                "TikTok is a clone of Musical.ly which is a clone of Vine, which is a clone of whatever came before it.",
                "The quote above this section on this website is actually my own.",
                "I made this website in about 5 hours. Thank you, RedBull!",
                "Education reform would be one of the most effective boosts to the American economy in the long term.",
                "I started this website in React, but quickly ran back to glorious Vue.",
                "Rugby is the hardest sport to understand the rules of, trust me I tried to play it.",
                "Fallout is the best RPG franchise on console.",
                "The Seattle Supersonics would have made more money staying in Seattle than they have in OKC.",
                "Everyone on HGTV HouseHunters always complains about how small the kitchen is knowing they're just gonna get takeout every night.",
                "I've had the same core group of friends since Kindergarden. I would do anything for the boys."
            ]
        }
    },
    methods: {
        changeQuote() {
            let choice = Math.floor(Math.random() * Math.floor(26));
            this.thought = this.thoughts[choice];
        }
    }
}
</script>

<style scoped>

.thought-generator {
    background-color: white;
    border-width: 1px;
    border-color: gray;
    font-weight: 600;
    color: gray;
    padding: 10px 10px 10px 10px;
    border-radius: 20px;
    width: 70%;
    height: 100%;
    font-size: 20px;
    min-height: 80px;
    display: inline-block;
    margin-left: 15%;
    margin-right: auto;
}

</style>