<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()
const currentRoute = computed(() => route.meta.title)

</script>

<template>
  <div class="flex flex-col max-w-[1280px] flex-1 min-w-[350px] w-full">
    <header class="flex flex-col">
      <div class="mx-auto max-w-[400px] w-full">
        <h1 v-if="currentRoute" class="my-5 text-center font-bold text-2xl">派工系統-{{ currentRoute }}</h1>
        <nav class="flex justify-between text-center font-bold">
          <RouterLink to="/TimeTrack" class="pb-2" :class="{ 'border-b-4 border-gray-400': currentRoute === '簽到' }">
            <div class="bg-[url('./TimeTrack.png')] w-20 sm:w-[100px] bg-cover bg-center pb-[100%] transition-all"></div>
            簽到
          </RouterLink>

          <RouterLink to="/TicketManagement" class="pb-2"
            :class="{ 'border-b-4 border-gray-400': currentRoute === '工單/派工' }">
            <div class="bg-[url('./TicketManagement.png')] w-20 sm:w-[100px] bg-cover bg-center pb-[100%] transition-all">
            </div>
            工單/派工
          </RouterLink>

          <RouterLink to="/" class="pb-2" :class="{ 'border-b-4 border-gray-400': currentRoute === '登入' }">
            <div class="bg-[url('./Logout.png')] w-20 sm:w-[100px] bg-cover bg-center pb-[100%] transition-all"></div>
            登入
          </RouterLink>
        </nav>
      </div>
    </header>

    <RouterView class="flex-1 border border-gray-400 mt-5" />
  </div>
  <footer class="h-24 bg-gray-200 w-full flex justify-center items-center" :class="{'md:mt-5':currentRoute !== '登入'}">
    聯絡電話：0912-345678
  </footer>
</template>

<style scoped></style>
