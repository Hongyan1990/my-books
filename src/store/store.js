import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default function createStore() {
	return new Vuex.Store({
		state: {
			username: '',
			auth: ''
		},
		actions: {
			saveUsername({commit}, name) {
				commit('setUsername', {name})
			},
			saveAuth({commit}, auth) {
				commit('setAuth', {auth})
			},
		},
		mutations: {
			setUsername(state, {name}) {
				state.username = name
			},
			setAuth(state, {auth}) {
				state.auth = auth
			},
		}
	})
}