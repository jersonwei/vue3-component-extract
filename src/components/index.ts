import type { App } from 'vue'
import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'
import chooseStreet from './chooseStreet'
// 让组件可以通过use的方法使用
const components = [
  chooseArea,
  chooseIcon,
  chooseStreet
]
export default {
  install(app: App) {
    components.forEach(item => {
      app.use(item)
    })
  }
}