<template>
    <div>
        <hello></hello>
        <h2>Vuex</h2>
        <p>
            <button @click="testVuex">Test Vuex</button>
        </p>
        <ul>
            <li>count: {{ count }}</li>
            <li>doubleCount: {{ doubleCount }}</li>
            <li>countWithOffset: {{ countWithOffset }}</li>
            <li>content: {{ content }}</li>
        </ul>
    </div>
</template>
<style src="./home.scss" lang="scss" scoped></style>
