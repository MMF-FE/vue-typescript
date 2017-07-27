/**
 * vuex util
 */

import Vuex from 'vuex'

// type alias
type RootState = Types.State.RootState

type Getter<S, R> = Vuex.Getter<S, R>
type GetterTree<S, R> = Vuex.GetterTree<S, R>
type MutationTree<S> = Vuex.MutationTree<S>
type Mutation<S> = Vuex.Mutation<S>
type ActionTree<S, R> = Vuex.ActionTree<S, R>
type Action<S, R> = Vuex.Action<S, R>

export function getter<S, T extends GetterTree<S, RootState>>(state: S, getters: T): {[K in keyof T]: Getter<S, RootState>} {
    return getters
}

export function mutation<S, T extends MutationTree<S>>(state: S, mutations: T): {[K in keyof T]: Mutation<S> } {
    return mutations
}

export function action<S, T extends ActionTree<S, RootState>>(state: S, actions: T): {[K in keyof T]: Action<S, RootState> } {
    return actions
}
