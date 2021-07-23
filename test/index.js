import { createApp } from 'vue'
import App from './app.vue'

// import WmView from 'wmview'
import WmView from '../dist/index.esm'

const app = createApp(App)

app.use(WmView)

app.mount('#app')
