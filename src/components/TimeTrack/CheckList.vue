<script setup lang="ts">
import type { TWorkDay } from '@/types/index'
import { computed } from 'vue'

const props = defineProps({
    dateList: Array<TWorkDay>,
})

const reverseDateList = computed(() => {
    if (!props.dateList) return []
    return props.dateList.slice().reverse()
})

</script>

<template>
    <div class="w-[310px] md:w-[460px] space-y-[5px]">
        <div class="flex justify-between text-center">
            <div class="flex-1">日期</div>
            <div class="flex-1">上班時間</div>
            <div class="flex-1">下班時間</div>
        </div>
        <TransitionGroup name="list" tag="div">
            <div v-for="date in reverseDateList" :key="date.date"
                class="flex justify-between text-center border-b border-gray-400 py-[5px]">
                <div class="flex-1">{{ date.date }}</div>
                <div class="flex-1">{{ date.onWork }}</div>
                <div class="flex-1">{{ date.offWork }}</div>
            </div>
        </TransitionGroup>
    </div>
</template>



<style scoped>
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>