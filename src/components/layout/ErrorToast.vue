<template>
  <b-toast id="error-toast" variant="danger" solid v-model="visible">
    <template v-slot:toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <b-img blank blank-color="#ff5555" class="mr-2" width="12" height="12"></b-img>
          <strong class="mr-auto">Error</strong>
        </div>
    </template>
    {{errorMessage}}
  </b-toast>
</template>

<script>
export default {
  name: 'ErrorToast',
  data () {
    return {
      visible: true
    }
  },
  props: {
    errorMessage: {
      type: String
    }
  }
}
</script>
