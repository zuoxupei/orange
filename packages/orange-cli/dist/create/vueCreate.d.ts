import Creator from "./creator";
interface IVueConf {
    name: string;
    ts: boolean;
    projectDir: string;
    pug: boolean;
}
export default class VueCreate extends Creator {
    conf: IVueConf;
    rootPath: string;
    constructor(options: IVueConf);
    create(): void;
}
export {};
