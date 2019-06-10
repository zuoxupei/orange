import { Editor } from 'mem-fs-editor';
export default class Creator {
    protected fs: Editor;
    protected _rootPath: string;
    private _destinationRoot;
    constructor();
    init(): void;
    sourceRoot(rootPath: string): string;
}
