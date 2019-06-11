import Creator from "./creator";
const path = require('path')

interface IVueConf {
  name:string,
  ts:boolean,
  projectDir:string,
  pug:boolean,
  template:string
}
 
export default class VueCreate extends Creator{

   public conf:IVueConf;
   public rootPath: string

   constructor(options:IVueConf){
     super();
     this.rootPath = this._rootPath;
     this.conf = options;
   }

   create() {
     this.template(this.conf.projectDir,
      this.conf.template,path.join(this.conf.projectDir, this.conf.name+'.vue'),this.conf)
   }
}