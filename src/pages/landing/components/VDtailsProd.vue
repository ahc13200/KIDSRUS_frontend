<script lang="ts" setup>
    import {reactive, computed, ref, onBeforeMount} from 'vue'
    import {useRoute, useRouter} from 'vue-router'
    import {categoriesStore} from '../../../config/stores/categories.store'

    const categories = categoriesStore()
    const route = useRoute()
    let details = reactive({} as any)
    onBeforeMount(() => {
        details = categories.find(route.params.id)
    })
    const index = ref(0)
    const selected = computed(() => details.pictures[index.value])

    function setIndex(indexSelected) {
        index.value = indexSelected
    }
</script>

<script lang="ts">
    import {Icon} from '@iconify/vue'
    import VTabs from './VTabs.vue'

    export default {
        name: 'VDtailsProd',
        components: {
            VTabs,
            Icon,
        },
    }
</script>

<template>
    <div data-aos="fade-up">
        <div
                data-aos="fade-up"
                class="border-solid border-gray-200 border-1 flex align-center justify-center mx-30 p-10"
        >
            <div class="grid-rows-2 text-center text-blue-900 font-bold">
                <p class="text-3xl mb-3">{{ details.name }}</p>
                <div class="flex grid grid-cols-2 gap-2 font-bold">
                    <p class="mb-0 text-blue-900">Home : </p>
                    <p class="mb-0 text-blue-900">{{ details.category }} : </p>
                    <p class="mb-0 text-terracota-500"> {{ details.name }}</p>
                </div>
            </div>
        </div>

        <div class="flex align-center justify-center mt-15 mx-100">
            <div class="flex grid grid-cols-2 gap-10">
                <div class="grid-rows-2">
                    <img :src="selected.picture" class="h-200"/>
                    <div class="flex grip grid-cols-2 gap-2">
                        <img
                                v-for="(item, index) in details.pictures"
                                :key="index"
                                :src="item.picture"
                                class="h-30 mt-2 hover:opacity-100"
                                @click="setIndex(index)"
                        />
                    </div>
                </div>
                <div class="w-200 text-lg">
                    <p>${{ details.price }}</p>
                    <ul class="flex flex-wrap">
                        <li v-for="i in details.rating" :key="i">
                            <Icon icon="twemoji:star"/>
                        </li>
                    </ul>
                    <p class="text-justify my-10">{{ details.description }}</p>
                    <div class="flex grid">
                        <div class="grid grid-cols-1">
                            <input
                                    id="search"
                                    type="text"
                                    placeholder="1"
                                    class="p-3 w-15 border-dashed border-1 border-gray-200 outline-none"
                            />
                        </div>
                        <div class="grid grid-cols-1 bg-terracota-500 p-1 w-60">
                            <button class="px-3 py-1 border-dashed border-white border-3 text-white font-bold">
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                    <div class="flex grid grid-cols-2 my-10 gap-2 text-xl">
                        <p>Product added!</p>
                        <p class="text-blue-900 font-bold">Browse Wishlist</p>
                    </div>
                    <div class="border-dashed border-1 p-7 !pb-0 flex grid grid-cols-2 gap-35 text-xl">
                        <div class="flex flex-col text-blue-900 font-bold w-full">
                            <div class="flex flex-row w-full border-b-1">
                                <p class="w-1/3">SKU: </p>
                                <p class="text-gray-400">{{ details.sku }}</p>
                            </div>
                            <div class="flex flex-row border-b-1 pt-4">
                                <p class="w-1/3">Category: </p>
                                <p class="text-gray-400">{{ details.category }}</p>
                            </div>
                            <div class="flex flex-row pt-4">
                                <p class="w-1/3">Tags: </p>
                                <p class="text-gray-400 mb-0">{{ details.tags }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex align-center justify-center mt-15 mx-50">
            <v-tabs/>
        </div>
        <div class="flex align-center justify-center mt-15 mx-50">
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
                    <div class="grid-rows-1" v-for="(item,index) in details.related" :key="index">
                        <div class="relative">
                            <img :src="item.relatedPicture" alt="" class="h-150">
                            <div class="absolute top-4 right-4 text-shadow-md">
                            <span v-if="item.ofstok"
                                  class="inline-flex items-center rounded-xl bg-gray-50 px-3 py-2 !rounded-full text-md font-medium text-gray-600 ring-1 ring-inset ring-gray-200">
                                OUT OF STOCK
                            </span>
                            </div>
                        </div>
                        <div class="text-center my-2 font-bold">
                            <p class="mb-2 text-sm text-terracota-500">
                                <span>{{item.category}}</span>
                            </p>
                            <p class="mb-2 text-blue-900">
                                <span>{{item.name}}</span>
                            </p>
                            <p class="mb-2 text-blue-900">
                                <span v-if="!item.ofstok">${{item.price}}</span>
                            </p>
                            <ul class="flex flex-wrap flex align-center justify-center">
                                <li v-for="i in item.rating" :key="i">
                                    <Icon icon="twemoji:star"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
