import Vue from 'vue';

import fruitsApi from '@/api/fruits';
import fruitObjectParser from '@/helpers/fruitObjectParser';

export const SET_FRUITS = 'SET_FRUITS'
export const SET_ONE_FRUIT = 'SET_ONE_FRUIT'
export const DELETE_FRUIT = 'DELETE_FRUIT'
export const SET_LOADING = 'LOADING'

const state = {
  fruits: [],
  loading: false
}

const getters = {
  getFruits: state => state.fruits,
  getFruitById: state => id => state.fruits.find(fruit => fruit.id == id),
  getLoadingStatus: state => state.loading,
}

const mutations = {
  [SET_FRUITS] (state, fruits) {
    state.fruits = fruits
  },
  [SET_ONE_FRUIT] (state, fruit) {
    state.fruits = state.fruits.concat(fruit)
  },
  [DELETE_FRUIT] (state, id) {
    state.fruits = state.fruits.filter(fruit => id !== fruit.id);
  },
  [SET_LOADING] (state, payload) {
    state.loading = payload
  },
}

const actions = {
  fetchAllFruits ({ commit }) {
    commit(SET_LOADING, true)

    return fruitsApi.getAllfruits()
      .then(response => {
        commit(
          SET_FRUITS,
          fruitObjectParser(response.data.data)
        )
        commit(SET_LOADING, false)

        return Promise.resolve(response)
      })
      .catch(err => {
        commit(SET_LOADING, false)
        Vue.$toast.error('Something went wrong :(')
        Promise.reject(err)
      })
  },
  addFruit ({ commit }, fruit) {
    commit(SET_LOADING, true)

    return fruitsApi.addFruit({...fruit})
      .then(response => {
        commit(SET_ONE_FRUIT, response.data)
        commit(SET_LOADING, false)

        Vue.$toast.success(`${fruit.name} added correctly!`)

        return Promise.resolve(response)
      })
      .catch(err => {
        commit(SET_LOADING, false)
        Vue.$toast.error('Something went wrong :(')
        Promise.reject(err)
      })
  },
  deleteFruit ({ commit }, fruit) {
    commit(SET_LOADING, true)

    return fruitsApi.deleteFruit(fruit.id)
      .then(response => {
        commit(DELETE_FRUIT, fruit.id)
        commit(SET_LOADING, false)

        Vue.$toast.success(`${fruit.name} deleted correctly!`)

        return Promise.resolve(response)
      })
      .catch(err => {
        commit(SET_LOADING, false)
        Vue.$toast.error('Something went wrong :(')
        Promise.reject(err)
      })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
