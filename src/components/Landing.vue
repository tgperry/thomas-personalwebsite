<template>
  <div class="contain">
    <div class="text">
      <p class="textArea">Hi, I'm Thomas Perry.</p>
      <p class="textAreaBelow">Welcome to my personal website. <br> Click anywhere on the page to proceed.</p>
    </div>
    <button class="proceed" @click=sendMessage()><router-link class="proceed" to="/main"></router-link></button>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  methods: {
    sendMessage() {
      console.log("Clicked!");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 769px) {
  .contain {
    padding: 0px;
    margin: 0px;
    height: 100vh;
    background: url(../assets/me-landing.jpg) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .textArea {
    padding-top: 20%;
    padding-left: 18%;
    margin: 0px;

    font-size: 45px;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 600;
    color: whitesmoke;
  }

  .textAreaBelow {
    padding-top: 10px;
    padding-left: 18%;
    margin: 0px;

    font-size: 30px;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 400;
    color: whitesmoke;
  }
}

@media (max-width: 768px) {
  .contain {
    padding: 0px;
    margin: 0px;
    height: 100vh;
    background: url(../assets/me-landing.jpg) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-position: 65%;
  }

  .textArea {
    padding-top: 35%;
    padding-left: 5%;
    margin: 0px;
    width: 300px;

    font-size: 45px;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 600;
    color: whitesmoke;
  }

  .textAreaBelow {
    padding-top: 10px;
    padding-left: 5%;
    margin: 0px;
    width: 250px;

    font-size: 30px;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 400;
    color: whitesmoke;
  }
}

  .proceed {
    z-index: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    opacity: 0%;
  }
</style>
