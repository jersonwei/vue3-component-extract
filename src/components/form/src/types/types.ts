import type { RuleItem } from './rule'
import type { CSSProperties } from 'vue'
// 可配置的表单
// 表单每一项的配置选项
export interface FormOptions {
  // 表单项显示的元素
  type: 'cascader' | 'checkbox' | 'checkbox-group' | 'checkbox-button' | 'color-pick'
  | 'date-picker' | 'input' | 'input-number' | 'radio' | 'radio-group' | 'radio-button'
  | 'rate' | 'select' | 'option' | 'slider' | 'switch' | 'time-picker' | 'time-select'
  | 'transfer' | 'upload'
  // 表单项的值
  value: any
  // 表单label
  label?: string
  // 表单标识
  prop?: string
  // 表单验证规则
  rules?: RuleItem[],
  // 占位符
  placeholder?: string
  // 特有属性
  // TODO类型补全
  attrs?: {
    // css样式属性
    style?: CSSProperties,
    clearable?: boolean,
    showPassword?: boolean,
    disabled?: boolean
  }
  // 表单项的子元素
  children?: FormOptions[]
}