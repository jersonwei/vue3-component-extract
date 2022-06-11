import type { App } from 'vue'
import cascaderStreet from './src/index.vue'

export default {
  install(app: App) {
    app.component('cascader-street', cascaderStreet)
  }
}