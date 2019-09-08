<template>
<b-container id="infinite-list">
    <b-row>
      <photo-item
        v-for="(photo, i) in photos"
        :key="`${i}-${photo.id}`"
        :photo="photo"/>
    </b-row>
    <div v-if="isLoading " class="text-center mt-3">
        <b-spinner  style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
    </div>
</b-container>
</template>

<script>
import PhotoItem from '@/components/PhotoItem'
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
    PhotoItem
  }
}
</script>
