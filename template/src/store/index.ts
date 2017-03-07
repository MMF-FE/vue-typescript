import Vue from 'vue'
import Vuex from 'vuex'
import api from 'app/api'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        content: ''
    },

    mutations: {
        'add' (state) {
            state.count++
        },

        'updateContent' (state, payload) {
            state.content = payload.content
        }
    },

    getters: {
        'doubleCount' (state) {
            return state.count * 2
        }
    },

    actions: {
        async 'getContent' ({commit}, payload) {
            let res = await api.getPackage(payload)

            if (res instanceof Error) {
                return Promise.reject(res)
            }

            commit('updateContent', {
                content: res.data.content
            })
        }
    }
})

export default store
