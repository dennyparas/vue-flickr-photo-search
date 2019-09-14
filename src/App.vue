<template>
  <div id="app">
    <the-navbar />
    <router-view/>
    <error-toast
      v-if="error"
      :error="error"
      :errorMessage="errorMessage">
    </error-toast>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import ErrorToast from '@/components/layout/ErrorToast'
import TheNavbar from '@/components/layout/TheNavbar'
export default {
  name: 'App',
  components: {
    TheNavbar,
    ErrorToast
  },
  computed: {
    ...mapState([
      'error',
      'errorMessage'
    ])
  }

}
</script>
