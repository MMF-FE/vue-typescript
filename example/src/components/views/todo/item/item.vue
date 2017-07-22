<!--
 * Item
 * @author Allenice <994298628@qq.com>
 * @date 2017-07-21 11:33:14
 * @since 1.0.0
 -->
<template>
    <li>
        <input type="checkbox" v-model="status">
        <span class="label">{{ todo.title }}</span>
        <a class="close" @click="remove(todo)">x</a>
    </li>
</template>
<style src="./item.scss" lang="scss" scoped></style>
