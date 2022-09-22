// 导航菜单数据
export interface MenuItem {
  // 图标
  icon?: string
  // 处理之后的图标
  i?: any
  // 文字
  name: string
  // 标识
  index: string
  // 子菜单
  children?: MenuItem[]
}