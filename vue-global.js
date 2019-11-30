//新建一个global.js 和main.js同目录 
//在main.js里面 import Global from “./global”
//Vue.use(Global ) 挂载即可
//在其他组件
//this.$calcAge() 即可调用

/**
 * 放置全局公用函数
 */
export default {
    install(Vue) {
        //计算年龄
        Vue.prototype.$calcAge = strBirthday => {
                if (typeof strBirthday == 'string') {
                    var strBirthdayArr = strBirthday.split("-");
                    var d = new Date();
                    var age = d.getFullYear() - strBirthdayArr[0];
                    return age;
                }
                return '';
            }
            //转义JSON字符串
        Vue.prototype.$JsonParse = str => {
            try {
                if (typeof JSON.parse(str) == 'object') {
                    return JSON.parse(str);
                }
            } catch (e) {}
            return str;
        }
    }
}
