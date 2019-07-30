import { Editor } from 'mem-fs-editor';
import { IBase } from '../types';
export default class Creator {
    protected fs: Editor;
    protected _rootPath: string;
    private _destinationRoot;
    constructor();
    init(): void;
    sourceRoot(rootPath: string): string;
    private templatePath;
    private destinationRoot;
    private destinationPath;
    protected configPath(args: string): string;
    protected initConfig(data: IBase): void;
    /**
     * 生成文件
     * @param templateDir 模版文件夹
     * @param source 模版名称
     * @param dest 目标
     * @param data  数据
     * @param cb 回调函数
     */
    template(templateDir: string, source: string, dest: string, data: object, cb: Function): void;
}
