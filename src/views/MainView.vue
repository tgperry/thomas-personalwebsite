<template>
    <div class="main-view">
        <vue-headful
            title="Thomas Perry"
            description="This is the personal website of Thomas Perry"
        />
        <Main />
    </div>
</template>

<script>
import Main from '@/components/Main.vue'

export default {
    name: 'MainView',
    components: {
        Main
    }
}
</script>