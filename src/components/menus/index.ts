import type { App } from 'vue'
import Menus from './src/index.vue'
import infiniteMenus from './src/menus'
console.log(infiniteMenus, Menus)
export default {
  install(app: App) {
    app.component('w-menus', Menus)
    app.component('w-infinite-menus', infiniteMenus)
  }
}