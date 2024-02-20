<script setup lang="ts">
import { ref } from 'vue'
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css"

const employeeData = ref({
  id: '11248216',
  name: '王小明',
  department: '研發部'
})

const example13 = ref({
  mode: 'tags',
  value: [],
  options: [
    '施工項目 A', '施工項目 B', '施工項目 C', '施工項目 D'
  ]
})
</script>

<template>
  <main class="flex flex-col items-center">
    <div class="max-w-[310px] sm:max-w-[400px]">
      <h3 class="font-bold text-xl my-5 text-center">員工編號：{{ employeeData.id }}</h3>




      <div class="flex flex-col sm:flex-row justify-between space-y-2.5 sm:space-x-10 ttt">
        <div class="space-y-2.5">
          <p>工單號碼</p>
          <p class="border border-gray-400 rounded-md py-2 sm:w-24 text-center">4135</p>
        </div>
<div class="flex">

  <Multiselect mode="tags" v-model="example13.value" placeholder='項目（請點選選擇）' :close-on-select="false"
  :allow-absent="true" :options="example13.options">
</Multiselect>
</div>

        <input type="submit" value="確認派工"
          class="my-[10px] bg-[#FFE600] w-[120px] h-[39px] border border-black rounded-md" />

      </div>

    </div>

    <p class="text-center font-bold text-xl mt-[50px] py-2.5">本月已派工</p>
    <div class="max-w-[310px] sm:max-w-[568px] space-y-[5px] px-2.5">
      <div class="hidden sm:flex sm:space-x-[60px]">
        <div class="w-[100px] text-center">日期</div>
        <div class="flex-1">項目</div>
      </div>

      <div
        class="flex flex-1 flex-col sm:flex-row justify-between sm:justify-start sm:space-x-[60px] border-t border-gray-400 py-[5px] space-y-2.5 sm:space-y-0">
        <div class="ps-2 sm:w-[100px] sm:text-center sm:ps-0">1111/11/11</div>
        <div class="flex flex-col justify-center space-y-2.5">
          <p>施工項目 A</p>
          <p>施工項目 B</p>
          <p>AAAAAAAAAAAAAAAAAAAAA</p>
        </div>
        <button
          class="text-[#0036BF] h-10 w-full sm:self-center sm:w-20 sm:bg-[#0036BF] sm:text-white py-2 text-sm rounded border border-[#0036BF] text-center">
          檢視
        </button>
      </div>
    </div>
  </main>
</template>