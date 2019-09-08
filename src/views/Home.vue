<template>
  <photo-search-form
    @photoSearch="handlePhotoSearch"
  />
</template>

<script>
import { mapActions } from 'vuex'
import PhotoSearchForm from '@/components/PhotoSearchForm'
export default {
  name: 'home',
  data () {
    return {
      searchQuery: '',
      page: null
    }
  },
  components: {
    PhotoSearchForm
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
