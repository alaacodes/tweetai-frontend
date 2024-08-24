<template>
    <div class="autobot-details">
      <h1>Autobot Details</h1>
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else>
        <h2>{{ autobot.name }}</h2>
        <p>{{ autobot.email }}</p>
        <h3>Posts</h3>
        <ul>
          <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import axios from '../http';
  
  export default {
    data() {
      return {
        autobot: {},
        posts: [],
        loading: true,
        error: null,
      };
    },
    methods: {
      async fetchAutobotDetails() {
        try {
          const autobotResponse = await axios.get(`/autobots/${this.$route.params.id}`);
          const postsResponse = await axios.get(`/autobots/${this.$route.params.id}/posts`);
          this.autobot = autobotResponse.data;
          this.posts = postsResponse.data;
        } catch (error) {
          this.error = error.message;
        } finally {
          this.loading = false;
        }
      },
    },
    created() {
      this.fetchAutobotDetails();
    },
  };
  </script>
  
  <style scoped>
  .autobot-details {
    padding: 20px;
  }
  </style>
  