<!--
 * @Author: hidetodong
 * @Date: 2022-06-25 15:31:41
 * @LastEditTime: 2022-06-25 15:53:26
 * @LastEditors: hidetodong
 * @Description: 
 * @FilePath: /god-road/src/components/CommonButton.vue
 * HIDETOXIC - 版权所有
-->
<template>
    <div class="button-wrap" @click="$emit('onBtnClick')">
        {{ props.buttonText}}
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    buttonText:String,
})


</script>

<style scoped>
.button-wrap {
    border-radius: 50px;
    border:4px solid #999999;
    width:160px;
    height:40px;
    font-size: 20px;
    line-height: 40px;
    text-align: center;
    color:#999999;
    transition: all .5s ease-in-out;
}
.button-wrap:hover{
    color:#444;
    border:4px solid #444;
}
</style>