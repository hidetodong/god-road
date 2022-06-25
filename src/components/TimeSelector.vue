<!--
 * @Author: hidetodong
 * @Date: 2022-06-25 16:27:26
 * @LastEditTime: 2022-06-25 16:45:56
 * @LastEditors: hidetodong
 * @Description: 
 * @FilePath: /god-road/src/components/TimeSelector.vue
 * HIDETOXIC - 版权所有
-->

<template>
    <div class="time-select">
        
        <div class="time-column">
            <svg class="up" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 24 24"><path fill="#454545" d="M6.7 14.7q-.275-.275-.275-.7q0-.425.275-.7l4.6-4.6q.15-.15.325-.213q.175-.062.375-.062t.388.075q.187.075.312.2l4.6 4.6q.275.275.275.7q0 .425-.275.7q-.275.275-.7.275q-.425 0-.7-.275L12 10.8l-3.9 3.9q-.275.275-.7.275q-.425 0-.7-.275Z"></path></svg>
            <svg class="down" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 24 24"><path fill="#454545" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z"></path></svg>
            <div class="time-block" :style="{ top:'0px' }" v-for="(time, index) in timeRange">{{ time }}</div>
        </div>
        小时
    </div>
</template>

<script setup lang="ts">
const timeRange = new Array(10).fill(10)
</script>

<style scoped lang="less">
.time-select {
    width: 200px;
    margin: 60px auto;
    display: flex;
    font-size: 50px;
    line-height: 100px;
}

.time-column{
    width:100px;
    height:100px;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
    overflow: scroll;
    scrollbar-width: 0;
    position: relative;
}
.time-block{
    font-size: 50px;
    position: absolute;
    text-align: center;
    width:100px;
    user-select: none;
}
::-webkit-scrollbar{display:none}

.up{
    position: absolute;
    top:0;
    left:0px;
}

.down{
    position: absolute;
    top:80px;
    left:0;
}
</style>
