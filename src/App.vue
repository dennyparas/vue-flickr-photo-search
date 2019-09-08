<template>
  <div id="app">
    <the-navbar />
    <router-view/>
  </div>
</template>
<script>
import TheNavbar from '@/components/layout/TheNavbar'
export default {
  name: 'App',
  components: {
    TheNavbar
  }

}
</script>
