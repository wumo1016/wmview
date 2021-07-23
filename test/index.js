import { createApp } from 'vue'
import App from './app.vue'

import WmView from '../dist/index.esm.js'

const app = createApp(App)

app.use(WmView)

app.mount('#app')
