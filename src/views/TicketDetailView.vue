<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink,useRoute } from 'vue-router'
import TicketForm from '@/components/TicketManagement/TicketForm.vue'

const route = useRoute()
console.log('route', JSON.parse(route.query.project))

const fileInput = ref<HTMLElement | null>()
// const imgList = ref([])
const images = ref<any[]>([])

const uploadMultipleImages = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (!input.files) return

  if (input.files.length > 7) {
    alert('最多上傳 7 張照片')
    return
  }
  images.value = Array.from(input.files).map(file => URL.createObjectURL(file))
  // console.log('images', images.value, 'imgList', imgList.value, 'input', Array.from(input.files).map(file => URL.createObjectURL(file)))
}

const triggerFileInput = () => {
  if (fileInput.value) fileInput.value.click()
}

const deleteImage = (index: number) => {
  images.value.splice(index, 1)
}
</script>

<template>
  <main class="flex flex-col items-center">
    <TicketForm>
      <div
        class="my-[10px] bg-[#FFE600] font-bold text-xl w-[120px] h-[39px] border border-black rounded-md self-center sm:self-start flex justify-center items-center"
        @click="triggerFileInput">
        上傳照片
      </div>
    </TicketForm>

    <input type="file" multiple @change="uploadMultipleImages" ref="fileInput" class="hidden"
      accept="image/png, image/jpeg" />

    <div class="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mt-9" v-if="images?.length">
      <div v-for="(image, index) in images" :key="index" class=" max-w-[310px] sm:max-w-[210px]">
        <div class="flex justify-between items-center bg-black text-white px-2 h-10">
          <span>圖片{{ index + 1 }}</span>
          <span @click="deleteImage(index)" class="px-2">X</span>
        </div>
        <img :src="image" alt="Uploaded image" class="object-cover" />
      </div>
    </div>
    <div v-else class="mx-auto mt-[50px] text-lg font-bold tracking-wider">尚未上傳照片</div>

    <RouterLink to="/TicketManagement"
      class="text-[#0036BF] mt-[50px] h-10 w-full sm:self-center sm:w-20 sm:bg-[#0036BF] sm:text-white py-2 text-sm rounded border border-[#0036BF] text-center">
      完工
    </RouterLink>
  </main>
</template>

<style></style>
