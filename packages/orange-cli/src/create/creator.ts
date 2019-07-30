import * as path from 'path'
import * as fs from 'fs-extra'
import * as memFs from 'mem-fs'
import * as editor from 'mem-fs-editor'
import { Editor } from 'mem-fs-editor';
import { getRootPath } from '../util'
import { IBase } from '../types';

export default class Creator {
  protected fs: Editor
  protected _rootPath!: string
  private _destinationRoot!: string

  constructor() {
    const store = memFs.create();
    this.fs = editor.create(store);
    this._rootPath = this.sourceRoot(path.join(getRootPath()));
    this.init();
  }

  init () {}

  public sourceRoot(rootPath:string){
    return path.resolve(rootPath);
  }

  private templatePath(...args: string[]):string {
    let filepath = path.join.apply(path, args);
    filepath = path.join(this._rootPath,'templates',filepath);
    return filepath
  }

  private destinationRoot (rootPath?: string): string {
    if (typeof rootPath === 'string') {
      this._destinationRoot = path.resolve(rootPath)
      if (!fs.existsSync(rootPath)) {
        fs.ensureDirSync(rootPath)
      }
      process.chdir(rootPath)
    }
    return this._destinationRoot || process.cwd()
  }

  private destinationPath (...args: string[]): string {
    let filepath = path.join.apply(path, args)
    if (!path.isAbsolute(filepath)) {
      filepath = path.join(this.destinationRoot(), filepath)
    }
    return filepath
  }

  protected configPath(args:string) {
    let filepath = path.join(args)
    if (!path.isAbsolute(filepath)) {
      filepath = path.join(process.cwd(), filepath)
    }
    return filepath
  }

  protected initConfig(data:IBase) {
     if(data.config) {
       data.isConfig = true;
       let path =this.configPath(data.config);
       try {
        const res = fs.readFileSync(path,{encoding:'utf8'});
        data.configData = JSON.parse(res);
       }catch (e) {
        data.isConfig = false;
       }
     }else {
       data.isConfig = false;
     }
  }

  /**
   * 生成文件
   * @param templateDir 模版文件夹
   * @param source 模版名称
   * @param dest 目标
   * @param data  数据
   * @param cb 回调函数
   */
  public template(templateDir: string, source: string, dest: string, data: object,cb:Function) {
    try{
      this.fs.copyTpl(
        this.templatePath(templateDir,source),
        this.destinationPath(dest),
        Object.assign({}, this, data),
      )
      this.fs.commit(()=>{
        cb();
      })
    }catch(e) {
      console.log(e);
    }
  }
}