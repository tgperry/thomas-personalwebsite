<template>
    <div class="landing-view">
        <vue-headful
            title="Thomas Perry"
            description="This is the personal website of Thomas Perry"
        />
        <Landing />
    </div>
</template>

<script>
import Landing from '@/components/Landing.vue'

export default {
    name: 'LandingView',
    components: {
        Landing
    }
}
</script>