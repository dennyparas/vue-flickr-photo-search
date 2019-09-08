<template>
  <b-container fluid class="search-bar pt-4 pb-3 mb-4">
    <b-row>
      <b-col md="8" class="mx-auto">
        <b-form @submit.stop.prevent="handlePhotoSearch">
          <b-row>
            <b-col lg="10" md="9" sm="12">
              <b-form-input
                v-model.trim="searchQuery"
                placeholder="Photo title..."
                type="text"
              ></b-form-input>
            </b-col>
            <b-col lg="2" md="3" sm="12">
               <b-button type="submit" block variant="dark">Search</b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'PhotoSearchForm',
  data () {
    return {
      searchQuery: '',
      page: 1
    }
  },
  methods: {
    handlePhotoSearch () {
      if (this.searchQuery) {
        this.$emit('photoSearch', this.searchQuery, this.page)
      }
    }
  }
}
</script>

<style scoped>
  .search-bar {
    background-color: #ccc;
  }
</style>
