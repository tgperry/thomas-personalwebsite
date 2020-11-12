<template>
    <div class="contain">
        <h1 class="issueHeader">404 Error</h1>
        <p class="issue">You have stumbled onto a page that does not exist.</p>
        <router-link class="return" to="/main">Take me back!</router-link>
    </div>
</template>

<script>
export default {
    name: 'BadUrl',
    methods: {

    }
}
</script>

<style scoped>
    .contain {
        margin: 50px 0% 0% 20%;
    }

    .issueHeader {
        font-size: 40px;
    }

    .issue {
        color: gray;
    }

    .return {
        color: black;
    }
</style>