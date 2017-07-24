<!--
 * Todo
 * @author Allenice <994298628@qq.com>
 * @date 2017-07-21 11:32:22
 * @since 1.0.0
 -->
<template>
    <div class="view-todo">
        <h1 class="title">todos</h1>
        <div class="wrap">
            <input-box></input-box>
            <ul>
                <todo-item v-for="(v, ix) in todos" :key="ix" :todo="v"></todo-item>
            </ul>
            <todo-footer v-show="allTodos.length > 0"></todo-footer>
        </div>
    </div>
</template>
<style src="./todo.scss" lang="scss" scoped></style>
