<script lang="ts" setup>
  import { categoriesStore } from '../../../config/stores/categories.store'
  const categories = categoriesStore()
  function setCategory(category) {
    categories.filter = category
  }
</script>

<script lang="ts">
  export default {
    name: 'VMainSection',
  }
</script>

<template>
  <div data-aos="fade-up">
    <div class="flex grid gap-10">
      <div class="grid grid-cols-1 relative">
        <img src="/img/illustrations/main/slider-1.jpg" alt="" />
        <div class="relative -my-45 mx-10">
          <h1 class="text-white text-shadow-md text-5xl mb-0">JUMPSUITS</h1>
          <p class="text-white text-shadow-md">Comfartable cothes for your little babies</p>
          <div class="p-2 bg-white w-min">
            <button
              class="px-6 py-1 border-dashed font-bold border-blue-800 text-blue-800 border-2"
            >
              DISCOVER
            </button>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1">
        <img src="/img/illustrations/main/girls-power.jpg" />
        <div class="flex flex-col items-center justify-end text-center">
          <h1 class="text-gray-800 mb-0 font-bold text-2xl"><span>GIRL POWER</span></h1>
          <span>For a calorful summer</span>
        </div>
      </div>
    </div>
    <div class="my-20 border-dashed border-1 border-gray-200">
      <div class="flex grid gap-40 px-15 my-10">
        <div class="grid grid-2 cursor-pointer" @click="setCategory('For Babies')">
          <img src="/img/illustrations/main/baby.png" />
          <span class="text-center text-blue-800 text-md py-4 font-bold">Baby & Toddler</span>
        </div>
        <div class="grid grid-2 cursor-pointer" @click="setCategory('For Girls')">
          <img src="/img/illustrations/main/girl.png" />
          <span class="text-center text-blue-800 text-md py-4 font-bold">For Girls</span>
        </div>
        <div class="grid grid-2 cursor-pointer" @click="setCategory('For Boys')">
          <img src="/img/illustrations/main/boy.png" />
          <span class="text-center text-blue-800 text-md py-4 font-bold">For Boys</span>
        </div>
        <div class="grid grid-2 cursor-pointer" @click="setCategory('For Home')">
          <img src="/img/illustrations/main/toys.png" />
          <span class="text-center text-blue-800 text-md py-4 font-bold">Home & Toys</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
