<script setup lang="ts">
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css';

const cropper = ref()
const image = ref()
const coordinates2 = ref({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
})

const defaultVisibleArea = {
    width: 500,
    height: 500,
    left: 63,
    top: 100,
}

const crop = () => {
    const { coordinates, canvas, } = cropper.value.getResult();
    coordinates2.value = coordinates;

    image.value = canvas.toDataURL();
    console.log('image', image.value, coordinates2.value)
}

</script>

<template>
    <div class="w-[500px] h-[500px]">
        <Cropper src="https://images.pexels.com/photos/580012/pexels-photo-580012.jpeg" ref="cropper" />
    </div>
    <button @click="crop">
        Crop
    </button>
    
    <div class="w-[400px] object-cover">
        <img :src="image" />
    </div>
</template>