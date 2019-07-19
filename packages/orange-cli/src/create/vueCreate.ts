import Creator from "./creator";
import { IVueComponent } from "../types";
const path = require('path')
 
export default class VueCreate extends Creator{

  static templateDir:string = 'vue';
  static templateComponent:string ='component';
  static templateVuex:string ='vuex';

   public conf:IVueComponent;
   public rootPath: string

   constructor(options:IVueComponent){
     super();
     this.rootPath = this._rootPath;
     this.conf = options;
     this.initConfig(this.conf)
   }

   create() {
   }

   createComponent() {
     console.log(this.conf);
     this.template(VueCreate.templateDir,
      VueCreate.templateComponent,
      path.join(this.conf.projectDir, this.conf.name+'.vue'),this.conf,()=>{
        console.log('组件创建完成');
      });
   }

   createVuex() {

   }
}