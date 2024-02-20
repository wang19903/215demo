<script setup lang="ts">
import type { TEmployee, TWorkDay, TWeek } from '@/types/index'
import { ref } from 'vue'
import CheckButton from '@/components/TimeTrack/CheckButton.vue'
import CheckList from '@/components/TimeTrack/CheckList.vue'

type TEmployeeWithCheckList = TEmployee & {
  checkList: TWorkDay[]
}

const employeeData = ref<TEmployeeWithCheckList>({
  id: '11248216',
  name: '王小明',
  department: '研發部',
  isCheck: false,
  checkList: [
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
  ]
})

const setWorkTimeStamp = (isCheckIn: boolean) => {
  if (employeeData.value.isCheck === isCheckIn) alert('請勿重複簽到')

  employeeData.value.isCheck = isCheckIn
  // 取得當前時間
  const date = new Date()
  const year = date.getFullYear()
  const month = ("0" + (date.getMonth() + 1)).slice(-2)
  const day = ("0" + date.getDate()).slice(-2)
  const hours = ("0" + date.getHours()).slice(-2)
  const minutes = ("0" + date.getMinutes()).slice(-2)
  // 格式化日期與時間
  const formattedDate = `${year}-${month}-${day}`
  const formattedTime = `${hours}:${minutes}`
  // 星期幾
  const week: Array<TWeek> = ['日', '一', '二', '三', '四', '五', '六']
  const dayOfWeek = week[date.getDay()]

  pushWorkTimeStampToList(formattedDate, formattedTime, dayOfWeek)
}

// 一定在同一天上下班，有找到日期就是下班，沒有就是上班
const pushWorkTimeStampToList = (date:string, Time:string, dayOfWeek:TWeek) => {
  const index = employeeData.value.checkList.findIndex((dateStatus: TWorkDay) => dateStatus.date === date)
  if (index === -1) {
    employeeData.value.checkList.push({
      date,
      onWork: Time,
      dayOfWeek: dayOfWeek
    })
  } else {
    employeeData.value.checkList[index].offWork = Time
  }
}
</script>

<template>
  <main class="flex flex-col items-center py-2.5">
    <h3 class="font-bold text-xl">員工編號：{{ employeeData.id }}</h3>

    <CheckButton :is-check="employeeData.isCheck" @check-toggle="setWorkTimeStamp" />

    <p class="font-bold mb-2.5 text-xl">本月簽到</p>
    <CheckList :date-list="employeeData.checkList" />
  </main>
</template>
