<script setup lang="ts">
import Header from '@/components/HeaderComponent.vue'
import Footer from '@/components/FooterComponent.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <Header></Header>

  <div class="flex flex-col max-w-[1280px] w-full px-5 xl:px-0 min-w-[350px] flex-1 sm:my-5">
    <RouterView class="flex-1 border border-gray-400" />
  </div>

  <Footer></Footer>
</template>

<style scoped></style>
