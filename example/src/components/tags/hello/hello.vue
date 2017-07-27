<template>
    <div>
        <h1>
            <icon name="vue" scale="0.1" color="#41b883 #35495e"></icon>
            Hello, {{ name }}
            <icon name="vue" scale="0.1" color="#41b883 #35495e"></icon>
        </h1>
        <slot></slot>
    </div>
</template>
<style src="./hello.scss" lang="scss" scoped></style>
