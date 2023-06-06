<script>
    import {defineComponent} from "vue"
    import VHeader from "./pages/landing/components/VHeader.vue"
    import VFooter from "./pages/landing/components/VFooter.vue"
    import VMainSection from "./pages/landing/components/VMainSection.vue"
    import VArrivals from "./pages/landing/components/VArrivals.vue"
    import VInstagram from "./pages/landing/components/VInstagram.vue"

    export default defineComponent({
        components: {
            VHeader,
            VFooter,
            VMainSection,
            VArrivals,
            VInstagram,
        },
    })
</script>

<template>
    <div class="flex flex-col">
        <v-header/>
        <router-view/>
        <v-footer/>
    </div>
</template>

<style>
    body {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
</style>
