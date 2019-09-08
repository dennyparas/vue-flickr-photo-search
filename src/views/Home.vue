<template>
  <div>
    <photo-search-form
      @photoSearch="handlePhotoSearch"
      :isLoading="isLoading"
    />
    <photo-list
      :photos="photos"
      :isLoading="isLoading"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import PhotoSearchForm from '@/components/PhotoSearchForm'
import PhotoList from '@/components/PhotoList'
export default {
  name: 'home',
  data () {
    return {
      searchQuery: '',
      page: null
    }
  },
  components: {
    PhotoSearchForm,
    PhotoList
  },
  computed: {
    ...mapState([
      'photos',
      'isLoading'
    ])
  },
  methods: {
    ...mapActions([
      'searchPhotos'
    ]),
    handlePhotoSearch (searchQuery, page) {
      if (this.searchQuery !== searchQuery) {
        const payload = { searchQuery, page }
        this.searchPhotos(payload)
        this.searchQuery = searchQuery
        this.page = page
      }
    }

  }
}
</script>
