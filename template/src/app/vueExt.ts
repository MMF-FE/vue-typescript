import Vue from 'vue'
import api from 'app/api'
import store from 'store'

export default class VueExt extends Vue {

    state = store.state

    get api () {
        return api
    }

    /**
     * Check obj is Error instance
     * @param {*} obj
     * @returns {boolean}
     *
     * @memberOf VueExt
     */
    isError (obj: any): boolean {
        return obj instanceof Error
    }
}
