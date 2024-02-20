<script setup lang="ts">
import { ref } from 'vue'
const envDate = ref({
    tel: '0912-345678',
    adress: '台北市信義區'
})
</script>

<template>
    <footer class="h-24 bg-gray-200 w-full flex justify-center items-center">
        聯絡電話：{{ envDate.tel }}
    </footer>
</template>