const host = 'https://cdn.hellobike.com/npm/';
const version = '0.0.1'
class ExternalsAutowired {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.compilation.tap('ExternalsAutowired',(compilation)=>{
      compilation.hooks.htmlWebpackPluginAlterAssetTags.tapAsync('ExternalsAutowired',(data,callback)=>{
        const externals = compiler.options.externals;
        Object.keys(externals).forEach(key=>{
          data.body.unshift({
            tagName:'script',
            closeTag: true,
            attributes:{
              type: 'text/javascript',
              src:`${host}${key}@${version}/index.min.js`
            }
          })
        })
        callback(null,data);
      })
    })
  }
}

module.exports = ExternalsAutowired;