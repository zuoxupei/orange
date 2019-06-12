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

  static templateDir:string = 'vue'

   public conf:IVueConf;
   public rootPath: string

   constructor(options:IVueConf){
     super();
     this.rootPath = this._rootPath;
     this.conf = options;
   }

   create() {
    this.template(VueCreate.templateDir,
      this.conf.template,path.join(this.conf.projectDir, this.conf.name+'.vue'),this.conf,()=>{
        console.log('模版创建完成');
      });
   }
}