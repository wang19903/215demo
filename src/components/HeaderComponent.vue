<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()

const currentRoute = computed(() => route.meta.title)
</script>

<template>
  <header class="flex flex-col ">
    <div class="mx-auto max-w-[400px] w-full text-2xl text-center">

      <h1 v-if="currentRoute" class="my-5 font-bold text-[32px]">派工系統-{{ currentRoute }}</h1>

      <nav class="flex justify-between font-bold space-x-[22.5px] sm:space-x-[50px] my-2.5">
        <RouterLink to="/TimeTrack" class="pb-2 flex flex-col justify-center items-center" :class="{ 'border-b-4 border-gray-400': currentRoute === '簽到' }">
          <div class="bg-[url('./TimeTrack.png')] w-20 sm:w-[100px] bg-cover bg-center pb-[100%] transition-all"></div>
          <span class="whitespace-nowrap text-xl sm:text-2xl">簽到</span>
        </RouterLink>

        <RouterLink to="/TicketManagement" class="pb-2 relative flex flex-col justify-center items-center"
          :class="{ 'border-b-4 border-gray-400': currentRoute === '派工/完工' }">
          <div class="bg-[url('./TicketManagement.png')] w-20 sm:w-[100px] bg-cover bg-center pb-[100%] transition-all">
          </div>
          <span class="whitespace-nowrap">派工/完工</span>
        </RouterLink>

        <RouterLink to="/" class="pb-2 flex flex-col justify-center items-center" :class="{ 'border-b-4 border-gray-400': currentRoute === '登入' }">
          <div class="bg-[url('./Logout.png')] w-20 sm:w-[100px] bg-cover bg-center pb-[100%] transition-all "></div>
          <span class="whitespace-nowrap text-xl sm:text-2xl">登入</span>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

