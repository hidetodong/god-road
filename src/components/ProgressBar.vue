<!--
 * @Author: hidetodong
 * @Date: 2022-06-24 22:43:47
 * @LastEditTime: 2022-06-25 15:55:21
 * @LastEditors: hidetodong
 * @Description: 
 * @FilePath: /god-road/src/components/ProgressBar.vue
 * HIDETOXIC - 版权所有
-->
<template>
    <div class="progress">
        <div class="progress-wrap">
            <div class="progress-current" :style="{ width: progressWidth }"></div>
        </div>
        <div class="progress-text" @click="addProgress">
            已投入
            <span class="progress-num">{{ data.progress }}</span>
            小时
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { onMounted, reactive } from '@vue/runtime-dom';

const data = reactive({
    progress: 0
})

onMounted(()=>{
    data.progress = Number(localStorage.getItem("GOD_ROAD_PROGRESS")) || 0
})

const progressWidth = computed(() => {
    return `${data.progress / 10000 * 500}px`
})

const addProgress = ()=>{
    data.progress < 10000 && (data.progress += 100)
}


</script>

<style scoped>
.progress {
    /* display: flex; */
    justify-content: center;
    width: 600px;
    margin: 40px auto 40px;
    user-select: none;
}

.progress-text {
    width: 500px;
    line-height: 60px;
    color: #eeeeee;
    font-weight: 600;
    font-size: 40px;
    height: 60px;
    text-align: center;
    transition: all .5s ease-in-out;
    margin: 0 auto;
    user-select: none;
    margin-top: 20px;
}

/* .progress-text:hover {
    color: #666666;
} */

.progress-wrap {
    border: 4px solid #eeeeee;
    border-radius: 20px;
    width: 500px;
    height: 60px;
    transition: all .5s ease-in-out;
    display: flex;
    margin: 0 auto;
}

.progress-wrap:hover {
    border: 4px solid #666666;
}

.progress-wrap:hover .progress-current {
    background-color: #666666;
}

.p1 {
    margin-left: 10px;
}

.progress-current {
    background: #eeeeee;
    width: 300px;
    height: 56px;
    margin: 2px 2px;
    border-radius: 14px;
    transition: all .5s ease-in-out;

}

.progress-left {
    line-height: 60px;
    color: #aaaaaa;
    margin-left: 4px;
}

.progress-num{
    color: #999999;
    font-size: 60px;
}
</style>