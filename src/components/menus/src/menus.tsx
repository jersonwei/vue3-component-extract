import { defineComponent, PropType,useAttrs } from 'vue';
import type { MenuItem } from './types';
import {toLine} from '@/utils'
import * as Icons from '@element-plus/icons-vue'
import './styles/index.scss'
export default defineComponent({
  props: {
    // 导航菜单数据
    data: {
      type: Array as PropType<MenuItem[]>,
      required: true,
    },
    // 默认选中菜单项
    defaultActive: {
      type: String,
      default: '1',
    },
    // 是否是路由模式
    rooter: {
      type: Boolean,
      default: false,
    },
  },
  setup(props,ctx){
    // 封装一个渲染无限层级菜单的方法
    // 函数会返回一段jsx的代码
    let renderMenu = (data:MenuItem[])=>{
      return data.map((item:MenuItem)=>{
        // 每个菜单的图标
        // item.i = `el-icon-${toLine(item.icon!)}`
        item.i = (Icons as any)[item.icon!]
        // 处理submenu的插槽
        let slots = {
          title:()=>{
            return <>
              <item.i />
              <span>{item.name}</span>
            </>
          }
        }
        // 递归渲染children
        if(item.children && item.children.length){
          return (
            <el-sub-menu index={item.index} v-slots={slots}>
              {renderMenu(item.children)}
            </el-sub-menu>
          )
        }
        // 正常渲染无子项的菜单
        return (
          <el-menu-item index={item.index}>
            <item.i />
            <span>{item.name}</span>
          </el-menu-item>
        )
      })
    }
    let attrs = useAttrs()
    return ()=>{
      return (
        <el-menu default-active={props.defaultActive}
        rooter={props.rooter}
        {...attrs}>
          {renderMenu(props.data)}
        </el-menu>
      )
    }
  }
});
