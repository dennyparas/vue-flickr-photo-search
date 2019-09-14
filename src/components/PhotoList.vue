<template>
<b-container id="infinite-list">
    <b-row>
      <photo-item
        v-for="(photo, i) in photos"
        :key="`${i}-${photo.id}`"
        :photo="photo"/>
    </b-row>
    <loading-spinner v-if="isLoading"></loading-spinner>
</b-container>
</template>

<script>
import PhotoItem from '@/components/PhotoItem'
import LoadingSpinner from '@/components/layout/LoadingSpinner'
export default {
  name: 'PhotoList',
  props: {
    photos: {
      required: true,
      type: Array
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  components: {
    PhotoItem,
    LoadingSpinner
  }
}
</script>
