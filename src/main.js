import './assets/css/base.css'

import { createApp } from 'vue'
import router from './router/index.js'
import App from './App.vue'
import {createPinia} from "pinia";


const pinia = createPinia()

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')
