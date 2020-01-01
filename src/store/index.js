import Vue from 'vue'
import Vuex from 'vuex'
import { RECEIVE_CLASS, RECEIVE_USERINFO, CLEAR_USERINFO, RECEIVE_RECOMMEND_GOODS } from './mutations-type'
import { reqGoodsClass, reqGoodsClass01, reqLogout, reqUserInfo, reqRecommendGoods } from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {},
    goodsClass: [],
    recommendGoods: []
  },
  mutations: {
    [RECEIVE_CLASS] (state, goodsClass) {
      state.goodsClass = goodsClass
    },
    [RECEIVE_USERINFO] (state, userInfo) {
      state.userInfo = userInfo
    },
    [CLEAR_USERINFO] (state) {
      state.userInfo = {}
    },
    [RECEIVE_RECOMMEND_GOODS] (state, recommendGoods) {
      state.recommendGoods = recommendGoods
    }
  },
  actions: {
    async getGoodsClass ({ commit }, callback) {
      const result = await reqGoodsClass()
      if (result.status === 200) {
        commit(RECEIVE_CLASS, result.data)
        callback && callback()
      }
    },
    async getGoodsClass01 ({ commit }, callback) {
      const result = await reqGoodsClass01()
      if (result.status === 200) {
        commit(RECEIVE_CLASS, result.data)
        callback && callback()
      }
    },
    async userLogout ({ commit }) {
      const result = await reqLogout()
      if (result.code === 0) {
        commit(CLEAR_USERINFO)
      }
    },
    saveUserInfo ({ commit }, userInfo) {
      commit(RECEIVE_USERINFO, userInfo)
    },
    async getUserInfoSession ({ commit }) {
      const result = await reqUserInfo()
      if (result.code === 0) {
        commit(RECEIVE_USERINFO, result.data)
      }
    },
    async getRecommendGoods ({ commit }) {
      const result = await reqRecommendGoods()
      if (result.status === 200) {
        commit(RECEIVE_RECOMMEND_GOODS, result.data)
      }
    }
  }
})
