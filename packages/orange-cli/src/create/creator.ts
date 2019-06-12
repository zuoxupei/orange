import * as path from 'path'
import * as fs from 'fs-extra'
import * as memFs from 'mem-fs'
import * as editor from 'mem-fs-editor'
import { Editor } from 'mem-fs-editor';
import { getRootPath } from '../util'

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
    console.log(filepath);
    console.log(this._rootPath);
    if (!path.isAbsolute(filepath)) {
      console.log(1111);
      filepath = path.join(this._rootPath, 'templates', filepath)
    }
    console.log(filepath);
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
    console.log(filepath,'123123123');
    return filepath
  }


  /**
   * 生成文件
   * @param templateUrl 模版路径
   * @param source 模版名称
   * @param dest 目标
   * @param data  数据
   * @param options 选项
   */
  public template(templateUrl: string, source: string, dest: string, data?: object, options?:any) {
    try{
      this.fs.copyTpl(
        this.templatePath(templateUrl,'templates','vue',source),
        this.destinationPath(dest),
        Object.assign({}, this, data),
        options
      )
      this.fs.commit(()=>{
        console.log('123')
      });
    }catch(e) {
      console.log(e);
    }
  }
}