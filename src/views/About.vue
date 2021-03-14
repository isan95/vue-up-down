<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>{{content}}</h3>>
  </div>
</template>
<script>
import UserService from '../services/user.service';

export default {

  name: 'About',
  data(){
    return {
      content: ''
    };
  },

   mounted() {
    UserService.getUserBoard().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  },
}
</script>
