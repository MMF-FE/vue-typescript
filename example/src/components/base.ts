/**
 * 所有组件的基类
 * @author Allenice
 * @since 2017-06-30 05:31:10
 */

import Vue from 'vue'
import api from 'api'

export default class Base extends Vue {
    readonly api = api
}
