import Zone from './index.vue';

// var _addEventListener = EventTarget.prototype.addEventListener;
// EventTarget.prototype.addEventListener = (type,callback,options) => {
//   let handler = (event)=>{
//     console.log('这里是拦截')
//     return callback(event);
//   }
//   _addEventListener(type,handler,options)
// }
// eslint-disable-next-line func-names
Zone.install = (Vue) => {
  Vue.component(Zone.name, Zone);
};

if (typeof window !== 'undefined' && window.Vue) {
  Zone.install(window.Vue);
}

export default Zone;
