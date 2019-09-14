<template>
  <div class="text-center mt-3">
    <b-spinner  class="spinner" label="Loading..."></b-spinner>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner'
}
</script>

<style scoped>
.spinner {
  width: 3rem;
  height: 3rem;
}
</style>
