<!--
 * InputBox
 * @author Allenice <994298628@qq.com>
 * @date 2017-07-21 11:48:03
 * @since 1.0.0
 -->
<template>
    <div class="input-box">
        <input type="checkbox" v-show="todos.length > 0" :checked="isAllCompleted" @change="toggleAllStatus(!isAllCompleted)">
        <input type="text" placeholder="Add Todos" v-model="title" @keydown.enter="onEnter">
    </div>
</template>
<style src="./inputBox.scss" lang="scss" scoped></style>
