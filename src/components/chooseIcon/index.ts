import type { App } from 'vue'
import chooseIcon from './src/index.vue'

// 让组件可以通过use的方法使用
export default {
  install(app: App) {
    app.component('choose-icon', chooseIcon)
  }
}