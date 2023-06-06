<script lang="ts" setup>
    import {categoriesStore} from "../../../config/stores/categories.store";
    const categories = categoriesStore()
    function setCategory(category){
        categories.filter=category;
    }

</script>

<script lang="ts">
    export default {
        name: "VCategories"
    }
</script>
<template>
    <div class="flex my-5 mr-7 border-dashed border-1 pt-5 pl-5">
        <ul>
            <li v-for="(item,index) in categories.categories_name" :key="index" class="mb-3 last:mb-0 border-b-1 last:border-b-0">
                <div class="flex grid grid-cols-2 pb-2">
                    <div class="w-53">
                        <button @click="setCategory(item.category)" class="mb-0 font-bold text-blue-900 hover:text-terracota-500">{{item.category}}</button>
                    </div>
                    <div class="w-full">
                        <p class="mb-0 float-right">({{categories.length(item.category)}})</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>


<style scoped>

</style>