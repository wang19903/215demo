<script setup lang="ts">
import { ref } from 'vue'

const employeeId = ref('11248216')
const isCheck = ref(false)

const checkList = ref([
  {
    date: '2021-10-01',
    onWork: '08:00',
    offWork: '17:00'
  },
  {
    date: '2021-10-02',
    onWork: '08:00',
    offWork: '17:00'
  }
])

const checkToggle = (isChecked: boolean) => {
  if (isCheck.value === isChecked) {
    alert('請勿重複簽到')
    return
  }
  isCheck.value = isChecked
  const date = new Date()
  const year = date.getFullYear()
  const month = ("0" + (date.getMonth() + 1)).slice(-2)
  const day = ("0" + date.getDate()).slice(-2)
  const hours = ("0" + date.getHours()).slice(-2)
  const minutes = ("0" + date.getMinutes()).slice(-2)

  const formattedDate = `${year}-${month}-${day}`
  const formattedTime = `${hours}:${minutes}`
  const index = checkList.value.findIndex((dateStatus) => dateStatus.date === formattedDate)
  if (index === -1) {
    checkList.value.push({
      date: formattedDate,
      onWork: isChecked ? formattedTime : '',
      offWork: isChecked ? '' : formattedTime
    })
  } else {
    if (isChecked) {
      checkList.value[index].onWork = formattedTime
    } else {
      checkList.value[index].offWork = formattedTime
    }
  }

}
</script>

<template>
  <main class="flex flex-col items-center py-2.5">
    <h3 class="font-bold">員工編號：{{ employeeId }}</h3>

    <div class="flex space-x-20 my-7 py-6">
      <div class="buttonWrap" :class="{ 'active': !isCheck }">
        <span>上班簽到</span>
        <button @click="checkToggle(true)" :disabled="isCheck">簽到</button>
      </div>
      <div class="buttonWrap" :class="{ 'active': isCheck }">
        <span>下班簽到</span>
        <button @click="checkToggle(false)" :disabled="!isCheck">簽到</button>
      </div>
    </div>

    <p class="font-bold mb-2.5">本月簽到</p>
    <table class="text-center w-[310px] md:w-[460px]">
      <thead>
        <tr>
          <th>日期</th>
          <th>上班時間</th>
          <th>下班時間</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for=" dateStatus in checkList" :key="dateStatus.date">
          <td>{{ dateStatus.date }}</td>
          <td>{{ dateStatus.onWork }}</td>
          <td>{{ dateStatus.offWork }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style scoped>
tr {
  @apply border-b border-black leading-9
}

.buttonWrap {
  @apply flex flex-col items-center space-y-7 text-gray-400 font-bold
}

.buttonWrap button {
  @apply bg-gray-500 rounded py-2 w-20
}

.active span {
  @apply text-black
}

.active button {
  @apply text-white bg-blue-700
}
</style>