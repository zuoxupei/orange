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
}