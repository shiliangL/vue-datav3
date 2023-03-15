import './styles/index.scss'
import { createApp } from 'vue'
import App from './App.vue'

import route from '@/router/index'

createApp(App).use(route).mount('#app')
