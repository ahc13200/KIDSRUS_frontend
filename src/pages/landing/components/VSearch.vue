<script>
    import {Icon} from '@iconify/vue';

    export default {
        name: "VSearch",
        components: {
            Icon,
        },
    }
</script>


<template>
    <div class="flex grid">
        <div class="grid grid-cols-1">
            <input type="text" placeholder="Search products..." id="search" class="p-3 w-60 border-dashed border-1 border-gray-200 outline-none">
        </div>
        <div class="grid grid-cols-1 bg-terracota-500 p-1">
            <button class="px-3 py-1 border-dashed border-white border-2">
                <Icon icon="material-symbols:search" class="text-white text-xl"/>
            </button>
        </div>
    </div>
</template>


<style scoped>

</style>