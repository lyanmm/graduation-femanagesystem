<template>
  <a-input v-model:value="username"/>
  <a-input v-model:value="password"/>
  <a-button @click="onClick">submit</a-button>
  <a-button @click="onClick2">submit</a-button>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onClick() {
      axios.post("/signin", {
        name: this.username,
        password: this.password
      })
      // axios.post("/api/singin", {
      //   name: this.username,
      //   password: this.password
      // })
      console.log(this.inputValue)
    },
    onClick2(){
      axios.get('/login');
    }
  },
};
</script>
