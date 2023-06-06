<script>
    export default {
        name: "VSubscribe"
    }
</script>

<template>
    <div class="flex grid bg-terracota-500 my-10 mr-7 p-5 flex align-center justify-center">
        <div class="grid-rows-2">
            <p class="text-white text-2xl my-2 text-center">
                <span>Join Our <br/> Newsletter</span>
            </p>
            <div class="py-5">
                <input type="text" placeholder="Your Email Address*" id="email"
                       class=" p-2 w-60 bg-transparent border-dashed border-2 border-gray-200 placeholder-white text-white outline-none">
            </div>
            <div class="bg-white p-2">
                <button class="p-2 w-full text-xs border-dashed font-bold border-terracota-500 text-terracota-500 border-2">
                    SUBSCRIBE
                </button>
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>