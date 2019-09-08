<template>
  <b-col md="3" lg="2" sm="6">
    <b-card
        :title="photo.title"
        :img-src="`https://farm${photo.farm}.staticflickr.com/${photo.server }/${photo.id}_${
        photo.secret}_q.jpg`"
        :img-alt="photo.title"
        overlay
        class="mb-2"
        text-variant="white"
      >
    <b-card-text>
      By: {{ photo.owner }}
    </b-card-text>

  </b-card>
  </b-col>
</template>

<script>
export default {
  name: 'PhotoItem',
  props: {
    photo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.card-title {
    font-size: 0.8rem;
    margin-bottom: 0.2rem;
}
.card-text {
  font-size: 0.6rem;
}

</style>
