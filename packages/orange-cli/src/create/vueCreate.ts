import Creator from "./creator";

interface IVueConf {
  name:string,
  ts:boolean,
  projectDir:string,
  pug:boolean
}
 
export default class VueCreate extends Creator{

   public conf:IVueConf;
   public rootPath: string

   constructor(options:IVueConf){
     super();
     this.rootPath = this._rootPath;
     this.conf = Object.assign({
      projectDir: '',
      template: '',
    }, options)
   }

   create() {
     console.log('start',this.conf);
   }
}