<template>
  <div>
    <div v-if="gameStart" class="start-container">
        <button class="start" @click="startGame()">Start Game</button>
    </div>
    <div v-else>
        <p :style="{color: score < 0 ? 'red' : score > 0 ? 'green' : 'black'}" class="score">{{ score }}</p>
        <div v-if="currentQuestion">
        <p class="text">{{ currentQuestion.question }}</p>
        <div class="buttons">
            <button class="thought-generator-left" @click="checkAnswer(true)">That's Thomas!</button>
            <button class="thought-generator-right" @click="checkAnswer(false)">Wrong!</button>
        </div>
        </div>
        <p v-else class="text">Game Over! Final Score: {{ score }}. You answered {{ correct }} out of {{questions.length.toString()}} questions correctly.</p>
    </div>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      questions: [
        { question: "My first internship was with PACCAR.", answer: true },
        { question: "Two of my favorite hobbies are cooking and coffee brewing.", answer: true },
        { question: "I started my career with Credera in the Dallas office.", answer: false },
        { question: "I have a degree in Electrical Engineering.", answer: false },
        { question: "I graduated from college in December 2020.", answer: true },
        { question: "All of the logos displayed on this site were done with Adobe tools.", answer: true },
        { question: "There are 4 games published on my itch.io page linked at the top of this site.", answer: false },
        { question: "My degree has an emphasis in Economics.", answer: false },
        { question: "I have extensive experience in the Java Spring framework.", answer: true },
        { question: "All of my jobs have been in Colorado or Washington state.", answer: true },
        { question: "I studied abroad in Berlin.", answer: false },
        { question: "I studied abroad in Oviedo.", answer: true },
        { question: "The Seattle Art Museum is my favorite art museum.", answer: true },
        { question: "SAAVE stands for Student Activists Against Violence and for Education.", answer: true },
        { question: "While studying abroad, I communicated with Steve Wozniak for a school project.", answer: false },
        { question: "My current office is in Everett, Washington.", answer: false },
      ],
      currentQuestionIndex: 0,
      score: 0,
      correct: 0,
      gameStart: true
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
  },
  methods: {
    startGame() {
        this.gameStart = false;
    },
    checkAnswer(userAnswer) {
      if (userAnswer === this.currentQuestion.answer) {
        this.score += 1;
        this.correct += 1;
      } else {
        this.score -= 1;
      }
      this.showNextQuestion();
    },
    showNextQuestion() {
      this.currentQuestionIndex++;
    }
  },
  mounted() {
    this.questions = this.questions.sort(() => Math.random() - 0.5);
  }
};
</script>

<style scoped>
.start-container {
    display: flex;
    justify-content: center;
}
.buttons {
    display: flex;
}
.start {
    background-color: white;
    border-width: 1px;
    border-color: gray;
    font-weight: 600;
    color: gray;
    border-radius: 20px;
    width: 30%;
    height: 100%;
    font-size: 100%;
    min-height: 60px;
}
.thought-generator-left {
    background-color: white;
    border-width: 1px;
    border-color: gray;
    font-weight: 600;
    color: gray;
    border-radius: 20px;
    width: 30%;
    height: 100%;
    font-size: 100%;
    min-height: 60px;
    margin-left: auto;
    margin-right: 2%;
    float: left
}
.thought-generator-right {
    background-color: white;
    border-width: 1px;
    border-color: gray;
    font-weight: 600;
    color: gray;
    border-radius: 20px;
    width: 30%;
    height: 100%;
    font-size: 100%;
    min-height: 60px;
    margin-right: auto;
    margin-left: 2%;
    float: right
}
/* Responsive webpage - iPad or less*/
@media (max-width: 769px) {
    .thought-generator-left {
        font-size: 80%;
        width: 40%;
    }
    .thought-generator-right {
        font-size: 80%;
        width: 40%;
    }
}
.score {
    text-align: center;
    font-size: 40px;
    margin: 0px;
}
.text {
    text-align: center;
    color: gray;
}

</style>
