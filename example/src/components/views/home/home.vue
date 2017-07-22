<template>
    <div class="view-home">
        <img src="~assets/images/logo.png">
        <hello name="Vue-Typescript" class="hello"></hello>
        <h2>Example</h2>
        <div class="links">
            <router-link to="product">css scoped</router-link>
            <router-link to="todo">vuex</router-link>
        </div>
    </div>
</template>
<style src="./home.scss" lang="scss" scoped></style>
