import type { App } from 'vue'
import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'
// 让组件可以通过use的方法使用
const components = [
  chooseArea,
  chooseIcon
]
export default {
  install(app: App) {
    components.forEach(item => {
      app.use(item)
    })
  }
}