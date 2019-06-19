# orange-swiper-refresh

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### H5项目配置

#### 配置normalize.css
* npm i normalize.css --save-dev
* @import "~normalize.css";

### 配置postcss-px-to-viewport
* "postcss-px-to-viewport": { 
      viewportWidth: 375, 
      unitPrecision: 3, 
      viewportUnit: 'vw', 
      selectorBlackList: ['.ignore', '.hairlines'], 
      minPixelValue: 1, 
      mediaQuery: false 
    }

### 配置pug  
* npm i pug pug-plain-loader --save-dev
* chainWebpack: config => { //可忽略
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
      .end();
  }  