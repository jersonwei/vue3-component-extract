import { ElMessage } from "element-plus"
import type { items } from './index.d'
// 1. 复制文本
export const useCopy = (text: items) => {
  // 2. 创建输入框
  let input = document.createElement('input')
  // 3. 给输入框value赋值
  input.value = text
  // 4. 追加到body中去
  document.body.appendChild(input)
  // 5. 选择输入框的操作
  input.select()
  // 6. 执行复制操作
  document.execCommand('Copy')
  // 7. 删除加入的输入框
  document.body.removeChild(input)
  // 8. 提示用户
  ElMessage.success('复制成功')
}