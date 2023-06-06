<script lang="ts" setup>
  const currentTab = ref(1)

  const setTab = (val) => {
    currentTab.value = val
  }
</script>
<template>
  <div class="">
    <div data-aos="fade-up" class="flex align-center justify-center aos-init aos-animate"
      ><nav class="main-menu"
        ><ul class="flex space-x-15 flex-wrap">
          <div class="grid-rows-2" @click="() => setTab(1)">
            <a class="block py-10 capitalize font-bold text-4xl hover:text-orange transition-all">
              DESCRIPTION
            </a>
            <div v-if="currentTab == 1" class="flex -my-10 mx-2 h-2 w-full justify-center">
              <img src="/img/illustrations/main/home-8.png" class="w-20" />
            </div>
          </div>
          <li class="main-menu__item group" @click="() => setTab(2)">
            <a
              class="block py-10 capitalize font-bold text-4xl text-primary hover:text-orange transition-all"
            >
              ADDITIONAL INFORMATION
            </a>
            <div v-if="currentTab == 2" class="flex -my-10 mx-2 h-2 w-full justify-center">
              <img src="/img/illustrations/main/home-8.png" class="w-20" />
            </div>
          </li>
          <li class="main-menu__item relative group" @click="() => setTab(3)">
            <a
              class="block py-10 xl:px-4 capitalize font-bold text-4xl text-primary hover:text-orange transition-all"
            >
              REVIEWS (1)
            </a>
            <div v-if="currentTab == 3" class="flex -my-10 mx-2 h-2 w-full justify-center">
              <img src="/img/illustrations/main/home-8.png" class="w-10" />
            </div>
          </li>
        </ul> </nav
    ></div>

    <div class="px-100">
      <template v-if="currentTab == 1">
        <p :style="{ lineHeight: '40px' }" class="text-2xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit odit ullam minus
          consequatur provident quisquam, quidem voluptatum. Aspernatur et unde iusto doloremque,
          atque eos quia similique nisi distinctio fugiat ducimus. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Maiores similique omnis tempore quas sed repudiandae velit
          possimus commodi voluptate ad impedit, quos in dolore magni deserunt dignissimos iste
          explicabo saepe?
        </p>
        <p :style="{ lineHeight: '40px' }" class="text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sed illo dolore,
          voluptatem magni cumque repellendus deleniti consectetur sunt veritatis eligendi harum,
          aspernatur modi quasi porro quisquam incidunt, quia reprehenderit!</p
        >
      </template>

      <template v-else-if="currentTab == 2">
        <div
          style="min-width: 100rem"
          class="border-dashed border-1 border-gray-200 px-20 py-10 w-full"
        >
          <div class="flex border-b pb-5">
            <span class="text-blue-900 text-2xl font-bold w-1/4">Color:</span>
            <span class="text-2xl font-bold text-gray-400 w-1/4">Blue</span>
          </div>
          <div class="flex border-b py-5">
            <span class="text-blue-900 text-2xl font-bold w-1/4">Material:</span>
            <span class="text-2xl font-bold text-gray-400 w-1/4">Cotton</span>
          </div>
          <div class="flex pt-5">
            <span class="text-blue-900 text-2xl font-bold w-1/4">Age:</span>
            <span class="text-2xl font-bold text-gray-400 w-1/4">6 years</span>
          </div>
        </div>
      </template>

      <template v-else-if="currentTab == 3">
        <span class="text-3xl">1 review for Blue Blouse</span>
        <div
          style="min-width: 100rem"
          class="border-dashed mt-10 border-1 border-gray-200 px-20 py-10 w-full"
        >
          <div class="flex items-start">
            <img src="/img/logos/logo.jpg" class="w-40 h-40 rounded-full" alt="" />
            <div class="flex flex-col">
              <div class="flex mt-5 ml-5 items-center space-x-5 ">
                <span class="text-3xl">cmsmasters</span>
                <span class="font-bold text-2xl">December 5, 2018</span>
              </div>
              <div class="">
                <ul class="ml-5 flex flex-wrap mt-3">
                  <li v-for="i in 5" :key="i"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1.4em"
                      height="1.4em"
                      viewBox="0 0 36 36"
                      class="iconify iconify--twemoji"
                    >
                      <path
                        fill="#FFAC33"
                        d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379z"
                      /></svg></li
                ></ul>
                <p style="line-height: 35px" class="ml-5 text-2xl"
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quibusdam
                  perferendis ab suscipit atque error aliquam iure accusamus, exercitationem
                  voluptatum ducimus quaerat reiciendis tenetur ut doloremque fugit. At, nihil
                  dolor?</p
                >

                <span class="text-2xl mt-3 ml-5"
                  >Rated <span class="font-bold">5</span> out of 5</span
                >
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped></style>
