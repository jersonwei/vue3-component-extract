export interface CityItem {
  id: number
  // 名字
  name: string
  // 拼音
  spell: string
}

export interface ProvinceItem {
  name: string
  data: string[]
  id?: string
}