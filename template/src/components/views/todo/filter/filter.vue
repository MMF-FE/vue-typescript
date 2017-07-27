<!--
 * Filter
 * @author Allenice <994298628@qq.com>
 * @date 2017-07-21 11:33:30
 * @since 1.0.0
 -->
<template>
    <div class="filters">
        <!-- <button class="cur">All</button>
        <button>Active</button>
        <button>Completed</button> -->
        <router-link to="/todo/all" active-class="cur">All</router-link>
        <router-link to="/todo/active" active-class="cur">Active</router-link>
        <router-link to="/todo/completed" active-class="cur">Completed</router-link>
    </div>
</template>
<style src="./filter.scss" lang="scss" scoped></style>
