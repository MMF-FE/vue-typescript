<!--
 * Doc
 -->
<template>
    <div class="doc">
        <div class="sidebar">
            <div class="logo">
                <icon
                    name="logo"
                    width="57"
                    height="23">
                </icon>
                <span>version: \{{config.version}}</span>
            </div>
            <ul class="menu">
                <li
                    v-for="(v, ix) in menu"
                    :key="ix"
                    :class="{
                        'is-active': v.isActive,
                        'has-submenu': v.subMenu
                    }"
                    @click="menuClickHandler(v)">
                    <span>\{{ v.name }}</span>
                    <ul v-if="v.subMenu" class="submenu">
                        <li
                            v-for="(sub, ix2) in v.subMenu"
                            :key="ix2"
                            :class="{
                                'is-active': sub.isActive
                            }"
                            @click.stop="menuClickHandler(sub, v)">
                            <span>\{{ sub.name }}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="main">
            <div v-if="mdComponent" class="markdown">
                <component :is="mdComponent"></component>
            </div>
        </div>
    </div>
</template>
<style src="./Doc.scss" lang="scss" scoped></style>
