/**
 * 组件类型
 */
declare enum IItemType {
    'input' = 0,
    'date' = 1,
    'select' = 2
}
/**
 * 数据类型 此处不考虑symbol undefined null
 */
declare enum IBasicType {
    'string' = 0,
    'number' = 1,
    'object' = 2,
    'Array' = 3
}
interface IFormItem {
    name: string;
    key: string;
    itemType: IItemType;
    dataType?: IBasicType;
    type?: string;
    placeholder?: string;
    default?: any;
    required?: boolean;
    optionValue?: any;
}
interface IGridItem {
    name: string;
    key: string;
}
export interface IComponentConfig {
    form: Array<IFormItem>;
    grid: Array<IGridItem>;
}
export {};
