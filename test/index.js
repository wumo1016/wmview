import { createApp } from 'vue'
import App from './app.vue'

import WmView from 'wmview'

const app = createApp(App)

app.use(WmView)

app.mount('#app')
