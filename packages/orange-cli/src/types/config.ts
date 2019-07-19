/**
 * 组件类型
 */
enum IItemType {
  'input','date','select'
}

/**
 * 数据类型 此处不考虑symbol undefined null
 */
enum IBasicType {
  'string','number','object','Array'
}

interface IFormItem {
  name:string,
  key:string,
  itemType:IItemType, //组件类型
  dataType?:IBasicType, //数据类型
  type?:string, //组件内置类型
  placeholder?:string,
  default?:any,//默认值
  required?:boolean,
  optionValue?:any //给定的可选值
}

interface IGridItem {
  name:string,
  key:string
}

export interface IComponentConfig {
  form:Array<IFormItem>,
  grid:Array<IGridItem>
}