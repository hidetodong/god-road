<!--
 * @Author: hidetodong
 * @Date: 2022-06-25 15:14:15
 * @LastEditTime: 2022-06-25 15:31:06
 * @LastEditors: hidetodong
 * @Description: 
 * @FilePath: /god-road/src/components/AnchorMenu.vue
 * HIDETOXIC - 版权所有
-->


<template>
    <svg
        class="menu-icon" 
        @click="openDrawer"
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px"
        viewBox="0 0 24 24">
        <path fill="none" stroke="#454545" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"></path>
    </svg>

    <div class="mask" v-show="data.showDrawer" @click="data.showDrawer = false"></div>
    <div :class="['menu-drawer',data.showDrawer ? 'drawer-active':'']">
        <div class="todo">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#999999" d="M18 6.5q-.825 0-1.413-.588Q16 5.325 16 4.5t.587-1.413Q17.175 2.5 18 2.5q.825 0 1.413.587Q20 3.675 20 4.5q0 .825-.587 1.412Q18.825 6.5 18 6.5ZM10 22q-2.075 0-3.537-1.462Q5 19.075 5 17q0-2.075 1.463-3.538Q7.925 12 10 12v2q-1.25 0-2.125.875T7 17q0 1.25.875 2.125T10 20q1.25 0 2.125-.875T13 17h2q0 2.075-1.462 3.538Q12.075 22 10 22Zm8-1v-5H9.85L13 9h-2.275l-.6 1.55L8.2 10l.7-1.8q.225-.575.737-.888Q10.15 7 10.75 7h5.2q1.125 0 1.713.912q.587.913.137 1.938l-1.65 3.65H20V21Z"></path></svg>
            加速开发中！……
        </div>
    </div>
</template>

<script setup lang="ts">import { reactive } from '@vue/runtime-dom';

const data = reactive({
    showDrawer:false
})

const openDrawer = () =>{
    data.showDrawer = true
}
</script>

<style scoped lang="less">
.menu-icon{
    position:absolute;
    top:16px;
    left:16px;
}
.menu-drawer{
    width:400px;
    height:100vh;
    background: white;
    position: absolute;
    left: -400px;
    top: 0;
    transition: left .5s ease-in-out;
}
.drawer-active{
    left:0px;
}
.mask{
    position: fixed;
    top:0;
    left:0;
    z-index: 0;
    width:100vw;
    height:100vh;
    background-color:rgba(0,0,0,0.5);
    transition: all .5s ease-in-out;
}
.todo{
    color: #999999;
    font-size: 30px;
    margin-top: 50px;
}

</style>