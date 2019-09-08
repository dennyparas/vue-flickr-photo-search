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
      'isLoading',
      'searchTotal'
    ])
  },
  mounted () {
    this.onScroll()
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
    },
    onScroll () {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight
        if (this.photos.length <= this.searchTotal && bottomOfWindow && !this.isLoading) {
          const payload = { searchQuery: this.searchQuery, page: this.page + 1 }
          this.searchPhotos(payload)
          this.page = this.page + 1
        }
      }
    }

  }
}
</script>
