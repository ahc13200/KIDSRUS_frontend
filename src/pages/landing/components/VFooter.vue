<script lang="ts">
  import { Icon } from '@iconify/vue'

  export default {
    name: 'VFooter',
    components: {
      Icon,
    },
  }
</script>

<template>
  <div class="rotate-180 mt-15" >
    <footer data-aos="fade-up" class="wave  bg-koromiko-500 sticky top-[100vh] h-110 w-full" style=" margin-top: -4.5rem;">
      <div class="max-w-4xl mx-auto rotate-180">
        <div class="flex my-20 justify-center text-white items-center mx-20">
          <img src="/img/illustrations/main/logo_retina.png" class="h-20" />
        </div>
        <div class="grid-rows-3 text-white items-center -my-10">
          <ul class="flex flex-wrap text-2xl font-bold align-center justify-center">
            <li class="mr-5"> SHOP</li>
            <li class="mr-5"> SALE</li>
            <li class="mr-5"> GIRLS</li>
            <li class="mr-5"> BOYS</li>
            <li class="mr-5"> LOOKBOOK</li>
            <li class="mr-5"> CONTACTS</li>
          </ul>
          <div class="my-15 text-5xl flex flex-wrap align-center justify-center">
            <Icon icon="gg:facebook" color="white" class="mr-5" />
            <Icon icon="mdi:instagram" color="white" class="mr-5" />
            <Icon icon="mdi:twitter" color="white" class="mr-5" />
          </div>
          <div class="my-15 text-xl flex flex-wrap align-center justify-center">
            <p
              ><span class="font-bold">Privacy Policy </span>/ This is a simple website -eccomasters
              &copy 2022 / All Rights Reserved</p
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
  <div data-aos="fade-up" class="text-xl flex grid-cols-2 gap-4 align-center justify-center p-5">
    <p class="mb-0"
      >This website uses cookies to improve your experience. Well assume you`re ok with this, but
      you can opt-out if you wish.</p
    >
    <div class="-my-2">
      <button class="bg-black text-white p-2 pr-5 pl-5">Accept</button>
    </div>
  </div>
</template>

<style scoped>
  /* Wave text css */
  .wave::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background-repeat: repeat;
    height: 10px;
    background-size: 20px 20px;
    background-image: radial-gradient(circle at 10px -5px, transparent 12px, #fff 13px);
  }
  .wave::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background-repeat: repeat;
    height: 15px;
    background-size: 40px 20px;
    background-image: radial-gradient(circle at 10px 15px, #fff 12px, transparent 13px);
  }
</style>
