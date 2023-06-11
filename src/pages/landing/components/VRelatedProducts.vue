<script lang="ts">
    import {Icon} from '@iconify/vue'

    export default {
        name: "VRelatedProducts",
        components: {
            Icon,
        },
    }
</script>

<template>

    <div data-aos="fade-up">
        <div class="grid flex align-center justify-center">
            <div class="grid-rows-2">
                <h1 class="mb-2 text-blue-900 text-3xl font-bold uppercase">related products</h1>
                <div class="flex align-center justify-center">
                    <img src="/img/illustrations/main/home-8.png"/>
                </div>
            </div>
        </div>

        <div class="flex grid grid-cols-4 gap-20 my-20">
            <div class="grid-rows-1">
                <img src="/img/illustrations/for girls/girls-4-580x870.jpg" alt="" class="h-150">
                <div class="text-center my-2 font-bold">
                    <p class="mb-2 text-sm text-terracota-500">
                        <span>Amanda</span>
                    </p>
                    <p class="mb-2 text-blue-900">
                        <span>Amanda</span>
                    </p>
                    <p class="mb-2 text-blue-900">
                        <span>$23</span>
                    </p>
                    <ul class="flex flex-wrap flex align-center justify-center">
                        <li v-for="i in 5" :key="i">
                            <Icon icon="twemoji:star"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>


</template>

<style scoped>

</style>