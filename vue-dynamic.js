vuex目录
store
-----index.js
-----actions.js
-----mutations.js
-----modules
------------a.js
------------b.js


//vuex动态注入module
import Vuex from 'vuex'
import Vue from 'vue'
import actions from './actions';
import mutations from './mutations';
import evaluation from './modules/evaluation.js'
Vue.use(Vuex)

/** 使用webpack require方法动态注入modules */
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = modulesFiles(modulePath)
    modules[moduleName] = value.default
    return modules
}, {})

const store = new Vuex.Store({
    state: {},
    actions,
    mutations,
    modules
})
export default store

动态注入自定义指令,过滤器

//directives.js
export function textColor(el, binding, vnode) {
    el.style['color'] = binding.value;
}
//filters.js
export const ReceiptType = (value) => {
    if (!value) return '';
    var data = {
        "1": "订单",
        "2": "处置单"
    }
    var value = data[String(value)];
    return value
}

//main.js
import * as directive from '@/directives/index.js' //存放vue自定义指令
import * as filter from '@/filters/index.js' //存放vue过滤器
Object.keys(directive).forEach(key => {
  Vue.directive(key, directive[key]);
});
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key]);
});





