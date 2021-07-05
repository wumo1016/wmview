import { createApp } from 'vue'
import App from './app.vue'
import router from '@r'

import '@sty/index.scss'

const app = createApp(App)

app.use(router).mount('#app')
