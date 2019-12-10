# vue-app-components

[![npm version](https://badge.fury.io/js/vue-app-components.svg)](https://badge.fury.io/js/vue-app-components)
![npm](https://img.shields.io/npm/dm/vue-app-components)
![GitHub](https://img.shields.io/github/license/RysisLiang/vue-app-components)

> 基于 vue 2.6 是 H5应用的 简单ui组件库。

### 安装

```bash
npm install vue-app-components --save
```

### 包含组件

- [x] 全局 api 实现Toast
- [ ] 全局 api 实现Dialog
- [ ] 仿 APP 横向 Tab 标签页


### 使用

---

#### vaToast

在项目的 `main.js` 中使用 `Vue.use()` 注册组件

```js 
import appComponents from 'vue-app-components'
import 'vue-app-components/lib/vue-app-components.css'

Vue.use(appComponents)
```

然后再所需要的view页面中可以直接通过 `this.$vaToast(msg, options)` 来调用。其中的 `options` 是非必须参数。

```js
this.$vaToast('这是通过vue-app-components组件的toast', {
    position: '50vh'
});
```

参数说明

prop|value|remark
---|---|---
position|'bottom'(default)/<br>'top'/<br>'middle'/<br>'50vh'/<br>'50px'| 用于控制toast在屏幕的位置。<br>如果自定义距离，<br>则是相对于屏幕顶部的位置

#### vaDialog

TODO