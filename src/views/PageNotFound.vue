<template>
    <div class="pagenotfound-view">
        <vue-headful
            title="Thomas Perry"
            description="This is the personal website of Thomas Perry"
        />
        <NoPage />
    </div>
</template>

<script>
import NoPage from '@/components/NoPage.vue'

export default {
    name: 'PageNotFoundView',
    components: {
        NoPage
    }
}
</script>