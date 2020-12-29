<template>
  <div class="home">
    home
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  methods: {
    onClick2() {
      axios.get('/login');
    }
  }
};
</script>
