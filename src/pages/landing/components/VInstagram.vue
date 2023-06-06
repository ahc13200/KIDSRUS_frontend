<script lang="ts" setup>

    const cards = [
        {
            picture: '/img/illustrations/main/87339849_530805007551424_292323017375800029_nlow.jpg',
        },
        {
            picture: '/img/illustrations/main/87413583_2660130777540405_5722961474466513534_nlow.jpg',
        },
        {
            picture: '/img/illustrations/main/85069033_185901059177965_6767010623440980864_nlow.jpg',
        },
        {
            picture: '/img/illustrations/main/84981049_620107085435507_4260875787090681190_nlow.jpg',
        },
        {
            picture: '/img/illustrations/main/85051426_2060664737412512_8458893884651247910_nlow.jpg',
        },
    ]
</script>

<script lang="ts">
    export default {
        name: "VInstagram"
    }
</script>

<template>
    <div data-aos="fade-up">
        <div class="grid flex align-center justify-center">
            <div class="grid-rows-2">
                <h1 class="mb-2 text-blue-900 text-3xl font-bold">
                    INSTAGRAM @KIDSRUS
                </h1>
                <div class="flex align-center justify-center">
                    <img src="/img/illustrations/main/home-8.png">
                </div>
            </div>
        </div>
        <div class="flex grid gap-4 my-12">
            <div class="grid-cols-1" v-for="(item,index) in cards" :key="index">
                <div>
                    <img :src="item.picture" class="hover:opacity-80 cursor-pointer">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>