import type { App } from 'vue'
import Menus from './src/index.vue'

export default {
  install(app: App) {
    app.component('menus', Menus)
  }
}