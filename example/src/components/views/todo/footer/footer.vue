<!--
 * Footer
 * @author Allenice <994298628@qq.com>
 * @date 2017-07-21 11:33:39
 * @since 1.0.0
 -->
<template>
    <div class="footer">
        <div class="item-left">{{ remaining.length }} item left</div>
        <filters class="filters"></filters>
        <a class="clear" @click="clearComplete">
            <span v-show="completed.length > 0">clear completed</span>
        </a>
    </div>
</template>
<style src="./footer.scss" lang="scss" scoped></style>
