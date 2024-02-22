import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueUploadComponent from 'vue-upload-component'

const app = createApp(App)
app.use(router)
app.component('file-upload', VueUploadComponent)
app.mount('#app')
