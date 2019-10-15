import Api from '@/api/ListService'
import Util from '@/api/Util'

const product = {
  namespaced: true,
  state: {
    storeListData: [],
    totalItemNum: 0, // 총 filter 된 Item 개수
    totalPageNum: 0, // 총 filter 된 page 개수
    pageCurrent: 1, // 현재 page 넘버,
    pageSize: 5,
    filterOpt: { // filter 값
      typedStatusArr: ['모집중', '대기중'],
      contractTypeArr: ['부동산담보', '건축자금']
    }
  },
  mutations: {
    UPDATE_LIST (state, payload) {
      let { storeListData } = state
      state.storeListData = [...storeListData, ...payload.list]
      state.totalItemNum = payload.totalItemNum
      state.totalPageNum = payload.totalPageNum
    },
    UPDATE_FILTER_OPTION (state, payload) {
      state.filterOpt = payload
    },
    ICREASE_PAGE_CURRENT (state) {
      state.pageCurrent++
    },
    CLEAR_STORE_LIST_DATA (state) {
      state.storeListData.splice(0)
      state.pageCurrent = 1
    }
  },
  getters: {
    filterOpt (state) {
      return state.filterOpt
    }
  },
  actions: {
    fetchData ({ commit, state }) {
      // 비동기 simulate
      Util.simulateAsync('fetchData', function () {
        const listData = Api.ListService.getPagePerListData(state.filterOpt, state.pageCurrent, state.pageSize)
        commit('UPDATE_LIST', listData)
      })
    },
    filterChageData ({ commit, state, dispatch }, payload) {
      // 비동기 simulate
      Util.simulateAsync('fetchData', function () {
        commit('CLEAR_STORE_LIST_DATA')
        commit('UPDATE_FILTER_OPTION', payload)
        dispatch('fetchData')
      })
    },
    nextData ({ commit, state, dispatch }) {
      const { pageCurrent, totalPageNum } = state
      if (pageCurrent < totalPageNum) {
        // 비동기 simulate
        Util.simulateAsync('fetchData', function () {
          commit('ICREASE_PAGE_CURRENT')
          dispatch('fetchData')
        })
      }
    }
  }
}

export default product
