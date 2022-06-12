import type { App } from 'vue'
import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'
import chooseStreet from './chooseStreet'
import cascaderStreet from './cascaderStreet'
import trend from './trend'
import notification from './notification'
import list from './list'
import menus from './menus'
import progress from './progress'
import chooseTime from './chooseTime'
// 让组件可以通过use的方法使用
const components = [
  chooseArea,
  chooseIcon,
  chooseStreet,
  cascaderStreet,
  trend,
  notification,
  list,
  menus,
  progress,
  chooseTime
]
export default {
  install(app: App) {
    components.forEach(item => {
      app.use(item)
    })
  }
}