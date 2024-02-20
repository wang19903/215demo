<script setup lang="ts">
const props = defineProps({
    isCheck: Boolean
})

const emit = defineEmits(['check-toggle'])

const checkToggle = (isCheckIn:boolean) => {
    emit('check-toggle', isCheckIn)
}
</script>

<template>
    <div class="flex space-x-20 my-[30px] py-6">
        <div class="buttonWrap" :class="{ 'active': !isCheck }">
            <span class="text-xl">上班簽到</span>
            <button @click="checkToggle(true)" :disabled="isCheck">簽到</button>
        </div>
        <div class="buttonWrap" :class="{ 'active': isCheck }">
            <span class="text-xl">下班簽到</span>
            <button @click="checkToggle(false)" :disabled="!isCheck">簽到</button>
        </div>
    </div>
</template>


<style scoped>
.buttonWrap {
    @apply flex flex-col items-center space-y-7 text-[#C7C7C7] font-bold
}

.buttonWrap button {
    @apply bg-[#888888] rounded py-2 w-20
}

.active span {
    @apply text-black
}

.active button {
    @apply text-white bg-[#1F00DD]
}
</style>
