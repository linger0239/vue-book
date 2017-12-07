import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
/*import Home from '../components/Home.vue';
import List from '../components/List.vue';
import Add from '../components/Add.vue';
import Collect from '../components/Collect.vue';
import Detail from '../components/Detail.vue';*/
Vue.use(Router);
//将五个路由和js分别打包，实现了代码拆分，解决了将所有js打包到同一个js中导致文件过大加载慢的问题
//可以通过npm run build查看拆分后的结果
//组件可以支持异步写法，写成一个函数，函数返回一个promise对象
// let Home=()=>Promise.resolve({})

//webpack 2+提供的，分开打包，实现动态加载组件，npm run build查看打包结果
export default new Router({
  routes: [
    {path:'',component:()=>import('../components/Home.vue')},
    {path:'/list',component:()=>import('../components/List.vue')},
    {path:'/add',component:()=>import('../components/Add.vue')},
    {path:'/home',component:()=>import('../components/Home.vue')},
    {path:'/collect',component:()=>import('../components/Collect.vue')},
    {path:'/detail/:id',component:()=>import('../components/Home.vue'),name:'Detail'},
    {path:'*',redirect:'/home'},/*路由重定向*/
 /*   {path:'',component:Home},
    {path:'/list',component:List},
    {path:'/add',component:Add},
    {path:'/home',component:Home},
    {path:'/collect',component:Collect},
    {path:'/detail/:id',component:Detail,name:'Detail'},
    {path:'*',redirect:'/home'},/!*路由重定向*!/*/
  ]
})
