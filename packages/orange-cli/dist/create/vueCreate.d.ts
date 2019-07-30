import Creator from "./creator";
import { IVueComponent } from "../types";
export default class VueCreate extends Creator {
    static templateDir: string;
    static templateComponent: string;
    static templateVuex: string;
    conf: IVueComponent;
    rootPath: string;
    constructor(options: IVueComponent);
    create(): void;
    createComponent(): void;
    createVuex(): void;
}
