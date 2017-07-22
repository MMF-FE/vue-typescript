<template>
    <div id="app" class="app">
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>
<style src="./app.scss" lang="scss"></style>
