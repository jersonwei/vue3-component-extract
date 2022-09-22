import { RuleItem, ValidateFieldsError } from './rule';
import { CSSProperties } from 'vue';
import { Callback } from 'element-plus';
// 可配置的表单
// 表单每一项的配置选项
export interface FormOptions {
  // 表单项显示的元素
  type:
    | 'cascader'
    | 'checkbox'
    | 'checkbox-group'
    | 'checkbox-button'
    | 'color-pick'
    | 'date-picker'
    | 'input'
    | 'input-number'
    | 'radio'
    | 'radio-group'
    | 'radio-button'
    | 'rate'
    | 'select'
    | 'option'
    | 'slider'
    | 'switch'
    | 'time-picker'
    | 'time-select'
    | 'transfer'
    | 'upload'
    | 'editor';
  // 表单项的值
  value?: any;
  // 表单label
  label?: string;
  // 表单标识
  prop?: string;
  // 表单验证规则
  rules?: RuleItem[];
  // 占位符
  placeholder?: string;
  // 特有属性
  // TODO类型补全
  attrs?: {
    // css样式属性
    style?: CSSProperties;
    clearable?: boolean;
    showPassword?: boolean;
    disabled?: boolean;
  };
  // 表单项的子元素
  children?: FormOptions[];
  // 上传组件的属性和方法
  uploadAttrs?: {
    action: string;
    headers?: object;
    method?: 'post' | 'put' | 'patch';
    mutiple?: boolean;
    data?: any;
    name?: string;
    withCredentials?: boolean;
    showFile?: boolean;
    drag?: boolean;
    accept?: string;
    thumbnailMode?: boolean;
    fileList?: any[];
    listType?: 'text' | 'picture' | 'picture-card';
    autoUpload?: boolean;
    disabled?: boolean;
    limit?: number;
  };
}

export interface ValidateFieldCallback {
  (message?: string, invalidFields?: ValidateFieldsError): void;
}

export interface FormInstance {
  registerLabelWidth(width: number, oldWidth: number): void;
  deregisterLabelWidth(width: number): void;
  autoLabelWidth: string | undefined;
  emit: (evt: string, ...args: any[]) => void;
  labelSuffix: string;
  inline?: boolean;
  model?: Record<string, unknown>;
  size?: string;
  showMessage?: boolean;
  labelPosition?: string;
  labelWidth?: string;
  rules?: Record<string, unknown>;
  statusIcon?: boolean;
  hideRequiredAsterisk?: boolean;
  disabled?: boolean;
  getFormData: Function;
  validate: (callback?: Callback) => Promise<boolean>;
  resetFields: () => void;
  clearValidate: (props?: string | string[]) => void;
  validateField: (props: string | string[], cb: ValidateFieldCallback) => void;
}
