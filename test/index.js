import { createApp } from 'vue'
import App from './app.vue'

import WmView from 'wmview'
import 'styles/src/index.scss'

const app = createApp(App)

app.use(WmView)

app.mount('#app')
