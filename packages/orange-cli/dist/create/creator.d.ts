import { Editor } from 'mem-fs-editor';
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
    /**
     * 生成文件
     * @param templateUrl 模版路径
     * @param source 模版名称
     * @param dest 目标
     * @param data  数据
     * @param options 选项
     */
    template(templateUrl: string, source: string, dest: string, data?: object, options?: any): void;
}
