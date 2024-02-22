<script setup lang="ts">
import { ref, computed } from 'vue'
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


const emit = defineEmits(['post-project'])

const hasBudget = ref(false)
const budget = ref(0);
const isFocused = ref(false)
const budgetInput = ref<HTMLElement | null>(null);


const focusToggle = (isFocus: boolean) => {
    isFocused.value = isFocus
}

const hasBudgetIsTrueBeforeInput = () => {
    if (!hasBudget.value && budgetInput.value) {
        alert('請先勾選專案金額')
        budgetInput.value.blur()
    } else {
        focusToggle(true)
    }
}

const formatBudget = computed(() => {
    const numericValue = budget.value ? parseInt(budget.value.toString(), 10) : 0;
    return numericValue > 0 ? `$ ${numericValue.toLocaleString()} 元 ` : '';
})

const emitProject = () => {
    if (hasBudget.value && budget.value < 0) return alert('請輸入專案金額')
    if (example13.value.value.length === 0) return alert('請選擇項目')
    if (!hasBudget.value && budget.value > 0) return alert('請勾選專案金額') // 避免勾選後填入金額又把勾選取消
    emit('post-project', { budget: budget.value, project: example13.value.value })
}

</script>

<template>
    <div>
        <h3 class="font-bold text-xl my-5 text-center">員工編號：{{ employeeData.id }}</h3>
        <div class="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5">
            <div class="space-y-2.5">
                <p>工單號碼</p>
                <p class="border border-gray-400 rounded-md py-2 sm:w-24 text-center">4135</p>
            </div>

            <div class="flex flex-col justify-center">
                <p class="my-2.5 sm:mt-0">項目（請點選選擇）</p>
                <Multiselect mode="tags" v-model="example13.value" :close-on-select="false" :allow-absent="true"
                    :options="example13.options">
                </Multiselect>

                <div class="space-x-2.5 my-5 flex items-center">
                    <input type="checkbox" id="budget" name="vehicle1" v-model="hasBudget">
                    <label for="budget">專案金額</label>

                    <div class="flex flex-col flex-1 relative">
                        <span class="border border-gray-400 rounded w-full h-10 leading-10 ps-1"
                            :class="{ 'border-2 !border-black': isFocused }">{{ formatBudget }}</span>
                        <input type="number" ref="budgetInput" v-model="budget"
                            class="absolute top-0 left-0 w-full h-full opacity-0" @focus="hasBudgetIsTrueBeforeInput"
                            @blur="focusToggle(false)" />
                    </div>
                </div>
                <slot :emitProject="emitProject"></slot>
            </div>
        </div>
    </div>
</template>