import 'animate.css'
import './styles/index.scss'
import { createApp } from 'vue'
import App from './App.vue'

import route from '@/router/index'

// 使用全局组件
import Datav from '@/datav/index'

createApp(App).use(route).use(Datav).mount('#app')
