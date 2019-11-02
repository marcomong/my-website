import Vue from 'vue'
import Vuex from 'vuex'

import emailController from '../services/emailService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    isEmailSent: false
  },
  getters: {
    getIsLoading: state => state.isLoading,
    getIsEmailSent: state => state.isEmailSent
  },
  mutations: {
    setIsLoading (state, payload) {
      state.isLoading = payload
    },
    setIsEmailSent (state, payload) {
      state.isEmailSent = payload
    }
  },
  actions: {
    contactMe ({ commit }, payload) {
      commit('setIsLoading', true)
      emailController.sendEmail(payload, (err, res) => {
        commit('setIsLoading', false)

        if (err) {
          commit('setIsEmailSent', false)
          return
        }
        if (res.status === 200) {
          commit('setIsEmailSent', true)
        } else {
          commit('setIsEmailSent', false)
        }
      })
    }
  },
  modules: {
  }
})
