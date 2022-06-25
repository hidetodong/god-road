<!--
 * @Author: hidetodong
 * @Date: 2022-06-25 15:52:29
 * @LastEditTime: 2022-06-25 16:07:28
 * @LastEditors: hidetodong
 * @Description: 
 * @FilePath: /god-road/src/components/Dialog.vue
 * HIDETOXIC - 版权所有
-->
<template>
    <div>
        <div class="mask" v-show="props.showDialog" @click="$emit('closeDialog')"></div>
        <div class="dialog" v-show="props.showDialog">
            <slot/>
        </div>
    </div>
</template>

<script setup lang="ts">import { reactive } from '@vue/runtime-dom';

    const props = defineProps({
        showDialog:Boolean
    })

</script>

<style lang="less" scoped>
.mask{
    width:100vw;
    height:100vh;
    position: fixed;
    top:0;
    left: 0;
    z-index:0;
    background-color: rgba(0,0,0,0.5);
}
.dialog{
    position: fixed;
    transform: translate(-50%,-50%);
    top:50%;
    left:50%;
    width:500px;
    height:500px;
    border-radius: 20px;
    background: white;
    z-index: 1;
}
</style>