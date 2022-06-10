//  把驼峰转换成横杠连接
export const toLine = (val: string) => {
  return val.replace(/(A-Z)g/, '-$1').toLocaleLowerCase()
}