<!--
 * @Author: hidetodong
 * @Date: 2022-06-24 22:33:10
 * @LastEditTime: 2022-06-25 16:47:26
 * @LastEditors: hidetodong
 * @Description: 
 * @FilePath: /god-road/src/pages/GodRoad.vue
 * HIDETOXIC - 版权所有
-->
<template>
    <div class="god-road">
        <AnchorMenu />

        <div class="title" v-if="!data.isEdit" @click="data.isEdit = !data.isEdit">{{ data.thing}}神之路</div>
        <div v-else>
            <input class="title input" type="text" v-model="data.thing" @blur="data.isEdit = false">
        </div>
        <div class="sub-title">The Way to BE A GOD</div>

        <ProgressBar v-if="!data.isCounting"/> 

        <Countdown v-else />

        <div class="btns">
            <!-- <CommonButton buttonText="开冲" @on-btn-click="handleAdd"/> -->
            <CommonButton buttonText="开冲"/>
        </div>

        <div class="explain">
            “人们眼中的天才之所以卓越非凡，并非天资超人一等，而是付出了持续不断的努力。1万小时的锤炼是任何人从平凡变成世界级大师的必要条件。”
            <br />
            - 马尔科姆·格拉德威尔 （Malcolm T.Gladwell）
        </div>

        <Dialog :show-dialog="data.showDialog" @close-dialog="handleCloseDialog">
            <div class="">
                <TimeSelector />

                <CommonButton buttonText="开始" @on-btn-click="handleAdd"/>
            </div>
        </Dialog>

    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import AnchorMenu from '../components/AnchorMenu.vue';
import ProgressBar from '../components/ProgressBar.vue';
import CommonButton from '../components/CommonButton.vue';
import Dialog from '../components/Dialog.vue';
import Countdown from '../components/Countdown.vue'
import TimeSelector from '../components/TimeSelector.vue'

const data = reactive({
    isEdit:false,
    thing:'',
    showDialog:false,
    isCounting:false
})

const handleAdd = () => {
    data.showDialog = true
}

const handleCloseDialog = () => {
    data.showDialog = false
}


</script>

<style scoped lang="less">
@import '../styles/basic.module.less';

.god-road {
    margin: 0 auto;
    text-align: center;
    padding: 150px 0;
    width:100vw;
    height:100vh;
}

.title {
    margin: 0 auto;
    color: #9c9c8c;
    font-family: hidetoxic;
    font-size: 80px;
}

.input{
    width:300px;
    outline:#999999;
    border-radius: 30px;
    padding: 0 16px ;
}

.sub-title {
    margin: 0 auto;
    font-family: hidetoxic-EN;
    font-size: 30px;
    color: #aaaaaa;
}

.explain {
    width: 540px;
    color:#c1c1c1;
    margin: 0 auto;
}

.btns{
    width:500px;
    margin:0 auto;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
}
</style>