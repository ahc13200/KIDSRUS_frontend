<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { onBeforeMount, ref } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const is_main = ref(true)
</script>

<script lang="ts">
  export default {
    name: 'VMenu',
    components: {
      Icon,
    },
  }
</script>

<template>
  <div data-aos="fade-up" class="flex align-center justify-center">
    <nav class="main-menu">
      <ul class="flex flex-wrap">
        <li class="main-menu__item relative group">
          <div class="grid-rows-2">
            <router-link
              :to="{ name: 'index' }"
              class="block py-10 xl:pr-6 md:pr-5 capitalize text-terracota-500 font-bold text-md hover:text-orange transition-all"
              >HOME
            </router-link>
            <div class="flex -my-10 mx-2 h-2">
              <img src="/img/illustrations/main/home-8.png" />
            </div>
          </div>
        </li>
        <li class="main-menu__item group">
          <a
            class="block py-10 capitalize font-bold text-md text-primary hover:text-orange transition-all"
            >SHOP FEATURES</a
          >
        </li>
        <li class="main-menu__item relative group">
          <a
            class="block py-10 xl:px-4 capitalize font-bold text-md text-primary hover:text-orange transition-all"
            >CLOTHES</a
          >
        </li>
        <li class="main-menu__item relative group">
          <a
            class="block py-10 capitalize font-bold text-md text-primary hover:text-orange transition-all"
            >PAGES</a
          >
        </li>
        <li class="main-menu__item">
          <a
            class="block py-10 xl:px-4 capitalize font-bold text-md text-primary hover:text-orange transition-all"
            href="contact-us.html"
            >SHORTCODES</a
          >
        </li>
        <li class="main-menu__item"
          ><a
            class="block py-10 capitalize font-bold text-md text-primary hover:text-orange transition-all"
            >POST TYPES</a
          >
        </li>
        <ul class="flex flex-wrap ml-10">
          <li class="main-menu__item">
            <a
              class="block py-9 xl:px-3 capitalize font-bold text-2xl text-primary hover:text-orange transition-all"
            >
              <Icon icon="material-symbols:favorite-outline" />
            </a>
          </li>
          <li class="main-menu__item">
            <a
              class="block py-9 xl:px-3 capitalize font-bold text-2xl text-primary hover:text-orange transition-all"
            >
              <span
                class="w-5 h-5 mx-3 -my-2 bg-red text-white text-sm rounded-full font-normal flex flex-wrap items-center justify-center absolute leading-none"
                >0</span
              >
              <Icon icon="mdi:cart-outline" />
            </a>
          </li>
          <li class="main-menu__item">
            <a
              class="block py-9 xl:px-3 capitalize font-bold text-2xl text-primary hover:text-orange transition-all"
            >
              <Icon icon="material-symbols:search" />
            </a>
          </li>
        </ul>
      </ul>
    </nav>
  </div>
</template>

<style scoped></style>
