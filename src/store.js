import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photos: [],
    isLoading: false,
    searchTotal: 0,
    error: false,
    errorMessage: null,
    photoDetails: {}
  },
  mutations: {
    setPhotos (state, data) {
      state.photos = data
    },
    setPhotoDetails (state, data) {
      state.photoDetails = data
    },
    setLoading (state, status) {
      state.isLoading = status
    },
    setSearchTotal (state, data) {
      state.searchTotal = data
    },
    setError (state, message) {
      state.isLoading = false
      state.searchTotal = 0
      state.photos = []
      state.photoDetails = {}
      state.error = true
      state.errorMessage = message
    },
    clearError (state) {
      state.error = true
      state.errorMessage = null
    }
  },
  actions: {
    async searchPhotos ({ commit, state }, payload) {
      if (state.error) commit('clearError')
      if (payload.page === 1) commit('setPhotos', [])
      try {
        commit('setLoading', true)
        const res = await axios.get('/rest/', {
          params: {
            api_key: process.env.VUE_APP_FLICKR_API_KEY,
            method: 'flickr.photos.search',
            text: payload.searchQuery,
            page: payload.page,
            sort: 'relevance',
            content_type: 1,
            safe_search: 1,
            media: 'photos',
            extras: 'description, license, date_upload, date_taken,owner_name',
            format: 'json',
            nojsoncallback: 1
          }
        })
        if (res) {
          if (payload.page === 1) {
            commit('setPhotos', res.data.photos.photo)
          } else {
            commit('setPhotos', [...state.photos, ...res.data.photos.photo])
          }
          commit('setSearchTotal', res.data.photos.total)
          commit('setLoading', false)
        }
      } catch (error) {
        commit('setError', error.message)
      }
    },
    async getPhotoDetails ({ commit, state }, payload) {
      if (state.error) commit('clearError')
      try {
        commit('setLoading', true)
        const res = await axios.get('/rest/', {
          params: {
            api_key: process.env.VUE_APP_FLICKR_API_KEY,
            method: 'flickr.photos.getInfo',
            photo_id: payload.id,
            secret: payload.secret,
            format: 'json',
            nojsoncallback: 1
          }
        })
        if (res) {
          commit('setPhotoDetails', res.data.photo)
          commit('setLoading', false)
        }
      } catch (error) {
        commit('setError', error.message)
      }
    }
  }
})
