<script lang="ts" setup>
    const cards = [
        {
            picture: 'img/illustrations/main/for-home-15-300x300.jpg',
            price: '17.00',
            name: 'Rabbit Casket'
        },
        {
            picture: 'img/illustrations/main/girls-6-300x300.jpg',
            price: '38.00',
            name: 'Yellow Sweatshirt'
        },
        {
            picture: 'img/illustrations/main/boys-3-1-300x300.jpg',
            price: '46.00',
            name: 'Line Sweater'
        },
        {
            picture: 'img/illustrations/main/boys-4-300x300.jpg',
            price: '80.00',
            name: 'Gray Suit'
        },
    ]

</script>
<script lang="ts">
    import {Icon} from '@iconify/vue';

    export default {
        name: "VBestSellers",
        components: {
            Icon,
        },
    }
</script>
<template>
    <div class="flex my-5 mr-7 border-dashed border-1 p-5">
        <ul class="my-2">
            <li v-for="(item,index) in cards" :key="index" class="mb-5 last:mb-0">
                <div class="flex grid grid-cols-3 gap-3">
                    <img :src="item.picture" class="h-15 rounded-full">
                    <div class="h-5">
                        <p class="mb-1 text-xs font-bold text-blue-900">{{item.name}}</p>
                        <div class="rating text-xs flex flex-wrap mb-2">
                            <Icon icon="twemoji:star" />
                            <Icon icon="twemoji:star" />
                            <Icon icon="twemoji:star" />
                            <Icon icon="twemoji:star" />
                            <Icon icon="ph:star-duotone" class="text-gray-400"/>
                        </div>
                        <p class="mb-1 text-xs font-bold text-blue-900">${{item.price}}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>


<style scoped>

</style>