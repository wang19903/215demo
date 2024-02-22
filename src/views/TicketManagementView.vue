<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import TicketForm from '@/components/TicketManagement/TicketForm.vue'

const router = useRouter()

const projectList = ref([
  {
    id: 1,
    date: '2023/11/11',
    project: ['施工項目 A', '施工項目 B', 'AAAAAAAAAAAAAAAAAAAAA'],
    finsihsed: false
  },
  {
    id: 2,
    date: '2024/2/11',
    project: ['施工項目 C', 'FFFFFFFFFFFFFFFFFFFFFFFFF', '施工項目 D'],
    finsihsed: true
  },
])

const postProject = ($event: any) => {
  // api 收到員工資料要給上面元件，列表給下面，按下"確認派工"時，重新在這個元件取得API刷新下方列表元件資料
  console.log('postProject', $event)
}

const toTicketDetail = (project: any) => {
  router.push(
    {
      path: `/TicketManagement/${project.id}`,
      query: { project:JSON.stringify(project) }
    }
  )
}

</script>

<template>
  <main class="flex flex-col items-center">
    <TicketForm @post-project="postProject($event)">
      <template v-slot="{ emitProject }">
        <div
          class="my-[10px] bg-[#FFE600] w-[120px] h-[39px] border border-black rounded-md self-center sm:self-start flex justify-center items-center"
          @click="emitProject">
          確認派工
        </div>
      </template>
    </TicketForm>

    <p class="text-center font-bold text-xl mt-[50px] py-2.5">本月已派工</p>
    <div class="max-w-[310px] sm:max-w-[568px] space-y-[5px] px-2.5 w-full">
      <div class="hidden sm:flex sm:space-x-[60px]">
        <div class="w-[100px] text-center">日期</div>
        <div class="flex-1">項目</div>
      </div>

      <div v-for="project  in projectList" :key="project.id"
        class="flex flex-1 flex-col sm:flex-row justify-between sm:justify-start sm:space-x-[60px] border-t border-gray-400 py-[5px] space-y-2.5 sm:space-y-0">
        <div class="ps-2 sm:w-[100px] sm:text-center sm:ps-0">{{ project.date }}</div>
        <div class="flex flex-col justify-center space-y-2.5 flex-1">
          <p v-for="(issue, index) in project.project" :key="index">{{ issue }}</p>
        </div>
        <span @click="toTicketDetail(project)"
          class="text-[#0036BF] h-10 w-full sm:self-center sm:w-20 py-2 text-sm rounded  text-center "
          :class="{ 'sm:bg-[#0036BF] sm:text-white border border-[#0036BF]': !project.finsihsed }">
          {{ project.finsihsed ? ' 已完工' : '檢視' }}
        </span>
      </div>
    </div>

  </main>
</template>