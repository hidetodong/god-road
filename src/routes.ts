/*
 * @Author: hidetodong
 * @Date: 2022-06-13 19:31:53
 * @LastEditTime: 2022-06-24 22:36:13
 * @LastEditors: hidetodong
 * @Description: 
 * @FilePath: /god-road/src/routes.ts
 * HIDETOXIC - 版权所有
 */
import { createRouter, createWebHashHistory} from 'vue-router';
import GodRoad from './pages/GodRoad.vue'

const routes = [
    {
        path:'/',
        component:GodRoad
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})

export default router

