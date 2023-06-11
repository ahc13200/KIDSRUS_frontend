<script lang="ts" setup>
    import {categoriesStore} from '../../../config/stores/categories.store'

    const categories = categoriesStore()
</script>
<script lang="ts">
    import VSearch from './VSearch.vue'
    import VSubscribe from './VSubscribe.vue'
    import VBestSellers from './VBestSellers.vue'
    import VCategories from './VCategories.vue'
    import {Icon} from '@iconify/vue'

    export default {
        name: 'VArrivals',
        components: {VCategories, VBestSellers, VSubscribe, VSearch, Icon},
        methods: {
            goToProduct(id) {
                this.$router.push({
                    name: 'product',
                    params: {
                        id: id,
                    },
                })
            },
        },
    }
</script>
<template>
    <div data-aos="fade-up">
        <div class="grid flex align-center justify-center">
            <div class="grid-rows-2">
                <h1 class="mb-2 text-blue-900 text-3xl font-bold"> NEW ARRIVALS </h1>
                <div class="flex align-center justify-center">
                    <img src="img/illustrations/main/home-8.png"/>
                </div>
            </div>
        </div>
        <div class="flex my-10 gap-10">
            <div class="w-1/3">
                <v-search/>
                <div class="my-10">
                    <p class="mb-0 text-2xl text-blue-900 font-bold"><span>CATEGORIES</span></p>
                    <v-categories/>
                </div>
                <div class="my-10">
                    <p class="mb-0 text-2xl text-blue-900 font-bold"><span>BEST SELLERS</span></p>
                    <v-best-sellers/>
                </div>
                <v-subscribe/>
            </div>
            <div class="w-2/3">
                <div class="grid grid-cols-3 gap-5">
                    <div v-for="(item, index) in categories.filtered" :key="index" class="pb-5">
                        <div class="pb-80 relative group overflow-hidden cursor-pointer" @click="() => goToProduct(item.id)">
                            <div class="absolute z-10 cursor-pointer bottom-0 left-0 bg-terracota-500 transition-all duration-200 transform group-hover:translate-y-0 translate-y-16 w-full p-2 text-center text-md font-bold text-white">
                                <div v-if="!item.stock" class="border-3 border-dashed p-2 border-white flex justify-center items-center space-x-3 z-10">
                                    <Icon icon="material-symbols:favorite-outline" class="text-2xl"/>
                                    <span class="uppercase">Add to cart</span>
                                    <Icon icon="material-symbols:search" class="text-2xl"/>
                                </div>
                                <div v-else class="border-3 border-dashed p-2 border-white flex justify-center items-center space-x-3">
                                    <Icon icon="material-symbols:favorite-outline" class="text-2xl"/>
                                </div>
                            </div>
                            <img :src="item.product" class="text-shadow-md object-cover group-hover:opacity-0 opacity-100 transition-all duration-500 absolute w-full h-full"/>
                            <!-- TODO: change for second image -->
                            <img :src="item.pictures[1].picture" class="text-shadow-md object-cover group-hover:opacity-100 block opacity-0 transition-all duration-500 absolute w-full h-full"/>
                            <div class="absolute top-4 right-4 text-shadow-md">
                                <span v-if="item.stock" class="inline-flex items-center rounded-xl bg-gray-50 px-3 py-2 !rounded-full text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-200">
                                    OUT OF STOCK
                                </span>
                            </div>
                        </div>
                        <div class="text-center my-2 font-bold">
                            <p class="mb-2 text-sm text-terracota-500">
                                <span>{{ item.category }}</span>
                            </p>
                            <p class="mb-2 text-blue-900">
                                <span>{{ item.name }}</span>
                            </p>
                            <p class="mb-2 text-blue-900">
                                <span>${{ item.price }}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
