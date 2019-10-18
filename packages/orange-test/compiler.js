const path = require('path')
const compiler = require('vue-template-compiler')
const babel = require('@babel/core');
const less = require('less')
const vloader = require('vue-loader');
const templatePath = path.resolve(__dirname,'./template/index.vue');
// console.log(templatePath);
const f = '<template> <div @click="testClick">11</div> </template> <script> export default {methods:{testClick() {console.log("111")}}}</script><style lang="less" scoped>.box { margin: 20px;.test {margin: 10px;}}</style>'
const result = compiler.parseComponent(f);
console.log(result);
less.render(result.styles[0].content,{},(err,out)=>{
  console.log(out.css,'*******CSS')
})