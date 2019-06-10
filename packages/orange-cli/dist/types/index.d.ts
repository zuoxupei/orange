interface IBase {
    name: string;
    ts: boolean;
    projectDir: string;
}
export declare type IVueComponent = {
    pug: boolean;
} & IBase;
export declare type IReactComponent = {} & IBase;
export {};
