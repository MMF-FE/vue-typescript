<!--
 * List
 * @author Allenice <994298628@qq.com>
 * @date 2017-07-18 22:56:47
 * @since 1.0.0
 -->
<template>
    <div class="list">
        <ul>
            <router-link tag="li" :to="`/product/${v}`" v-for="v in [1,2,3,4,5]" :key="v">
                <a>Product {{ v }}</a>
            </router-link>
        </ul>
    </div>
</template>
<style src="./list.scss" lang="scss" scoped></style>
