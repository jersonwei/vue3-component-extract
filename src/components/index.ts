import type { App } from 'vue'
import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'
import chooseStreet from './chooseStreet'
import cascaderStreet from './cascaderStreet'
// 让组件可以通过use的方法使用
const components = [
  chooseArea,
  chooseIcon,
  chooseStreet,
  cascaderStreet
]
export default {
  install(app: App) {
    components.forEach(item => {
      app.use(item)
    })
  }
}