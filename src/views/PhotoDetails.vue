<template>
  <b-container class="mt-3">
    <b-row v-if="!isLoading">
      <b-col md="12">
        <b-card v-if="photoDetails.title"
          :img-src="`https://farm${ photoDetails.farm }.staticflickr.com/${ photoDetails.server }/${photoDetails.id
          }_${ photoDetails.secret }_z.jpg`"
          :img-alt="photoDetails.title._content" img-top>
          <b-card-text>
            <span class="text-muted">By: </span>
            {{ photoDetails.owner.username }}<br />
            <small class="text-muted"
            >Taken on {{ photoDetails.dates.taken }}</small><br />
            <span v-html="photoDetails.description._content"></span>
          </b-card-text>
           <b-card-text>
             <a :href="`${photoDetails.urls.url[0]._content}`" target="_blank"
              >Flickr Image Page <i class="fas fa-external-link-alt"></i
            ></a>
          </b-card-text>
          <b-button variant="info" @click="goBack">Go back to search page</b-button>
        </b-card>
      </b-col>
    </b-row>
    <loading-spinner v-if="isLoading"></loading-spinner>
  </b-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import LoadingSpinner from '@/components/layout/LoadingSpinner'
export default {
  name: 'PhotoDetails',
  components: {
    LoadingSpinner
  },
  computed: {
    ...mapState([
      'isLoading',
      'photoDetails'
    ])
  },
  mounted () {
    this.getPhotoDetails({ id: this.$route.params.id, secret: this.$route.params.secret })
  },
  methods: {
    ...mapActions([
      'getPhotoDetails'
    ]),
    goBack () {
      this.$router.go(-1)
    }
  }

}
</script>

<style>

</style>
