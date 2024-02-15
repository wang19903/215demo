<script setup lang="ts">
</script>

<template>
  <main class="flex flex-col items-center pt-12">
    <div class="w-[310px] sm:w-[466px] rounded-md overflow-hidden">
      <img src="@/assets/LoginImg.png" alt="Login Image" class="w-full h-auto object-cover rounded-md">
    </div>

    <form action="/loginEndpoint" method="POST" class="mt-7 mb-2.5 text-xl font-bold space-y-2.5">
      <div class="form-group">
        <label for="employeeId">員工編號</label>
        <input type="text" id="employeeId" name="employeeId" required>
      </div>
      <div class="form-group">
        <label for="password">員工密碼</label>
        <input type="password" id="password" name="password" required>
      </div>
      <div class="form-group">
        <button type="submit">登入</button>
      </div>
    </form>
  </main>
</template>

<style scoped>
.form-group {
  @apply flex flex-col mx-2 my-3
}

.form-group input {
  @apply border border-gray-400 rounded leading-9 mt-2.5
}

.form-group button {
  @apply bg-[#519519] text-white rounded-xl py-1 mt-5 w-[160px] mx-auto border-2 border-black 
}
</style>