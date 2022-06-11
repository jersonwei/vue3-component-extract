import type { App } from 'vue'
import ChooseStreet from './src/index.vue'

export default {
  install(app: App) {
    app.component('choose-street', ChooseStreet)
  }
}