<!--
 * Scoped
 * @author Allenice <994298628@qq.com>
 * @date 2017-07-23 23:27:05
 * @since 1.0.0
 -->
<template>
    <div class="scoped">
        <h1 class="title">Css Scoped</h1>
        <div class="wrap">
            <h2>父子组件不相互影响, 也不影响全局</h2>
            <child1></child1>
            <child2></child2>
        </div>

        <div class="wrap cover">
            <h2>父组件覆盖子组件样式</h2>
            <child1></child1>
            <child2></child2>
        </div>
    </div>
</template>
<style src="./scoped.scss" lang="scss" scoped></style>
