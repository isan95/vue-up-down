<template>
  <div class="home">
    <NavBar />
    <router-view />
      <h1>Este es el home sin terminar</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>
