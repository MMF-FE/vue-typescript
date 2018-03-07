<!--
 * DemoBlock
 -->
<template>
    <div class="demo-block">
        <div class="tab">
            <div class="tab-header">
                <div
                    class="tab-header-item"
                    :class="{ 'is-active': isShowResult }"
                    @click="showResult">
                    Result
                </div>
                <div
                    class="tab-header-item"
                    :class="{ 'is-active': isShowCode }"
                    @click="showCode">
                    Code
                </div>
            </div>
            <div
                class="tab-panel"
                v-show="isShowResult">
                <slot name="source"></slot>
            </div>
            <div
                class="tab-panel"
                v-show="isShowCode">
                <slot name="highlight"></slot>
            </div>
        </div>
         <blockquote class="description"  v-if="$slots.default">
            <p>
                <slot></slot>
            </p>
        </blockquote>
    </div>
</template>
<style src="./DemoBlock.scss" lang="scss" scoped></style>
