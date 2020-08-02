import { createApp } from 'vue'
import Layout from './Layout.vue'

const app = createApp(Layout)

app.config.devtools = true

app.mount('#app')
