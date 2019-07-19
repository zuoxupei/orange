export interface IBase {
    name: string;
    ts: boolean;
    projectDir: string;
    css: string;
    config?: string;
    configData?: any;
    isConfig?: boolean;
}
export declare type IVueComponent = {
    pug: boolean;
} & IBase;
export declare type IReactComponent = {} & IBase;
