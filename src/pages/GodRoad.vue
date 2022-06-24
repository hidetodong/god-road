<!--
 * @Author: hidetodong
 * @Date: 2022-06-24 22:33:10
 * @LastEditTime: 2022-06-24 23:12:45
 * @LastEditors: hidetodong
 * @Description: 
 * @FilePath: /god-road/src/pages/GodRoad.vue
 * HIDETOXIC - 版权所有
-->
<template>
    <div class="god-road">
        <div class="title" v-if="!data.isEdit" @click="data.isEdit = !data.isEdit">{{ data.thing}}神之路</div>
        <div v-else>
            <input class="title" type="text" v-model="data.thing" @blur="data.isEdit = false">
        </div>
        <div class="sub-title">The Way to BE A GOD</div>

        <ProgressBar /> 

        <div class="explain">
            “人们眼中的天才之所以卓越非凡，并非天资超人一等，而是付出了持续不断的努力。1万小时的锤炼是任何人从平凡变成世界级大师的必要条件。”
            <br />
            - 马尔科姆·格拉德威尔 （Malcolm T.Gladwell）
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import ProgressBar from '../components/ProgressBar.vue';

const data = reactive({
    isEdit:false,
    thing:''
})




</script>

<style scoped lang="less">
@import '../styles/basic.module.less';

.god-road {
    margin: 0 auto;
    text-align: center;
    padding: 300px 0;
}

.title {
    margin: 0 auto;
    color: #9c9c8c;
    font-family: hidetoxic;
    font-size: 80px;
}

.sub-title {
    margin: 0 auto;
    font-family: hidetoxic-EN;
    font-size: 30px;
    color: #eeeeee;
}

.explain {
    width: 540px;
    color:#c1c1c1;
    margin: 0 auto;
}
</style>