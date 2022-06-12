import type { App } from 'vue'
import Menus from './src/index.vue'
import infiniteMenus from './src/menus'
console.log(infiniteMenus, Menus)
export default {
  install(app: App) {
    app.component('menus', Menus)
    app.component('infinite-menus', infiniteMenus)
  }
}