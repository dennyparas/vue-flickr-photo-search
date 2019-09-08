<template>
<b-container>
    <div v-if="isLoading" class="text-center mb-5">
        <b-spinner  style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
    </div>
    <b-row v-if="!isLoading">
      <photo-item
        v-for="photo in photos"
        :key="photo.id"
        :photo="photo"/>
    </b-row>
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
