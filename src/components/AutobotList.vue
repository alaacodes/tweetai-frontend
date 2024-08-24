<template>
    <div class="autobot-list">
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else>
        <ul>
          <li v-for="autobot in autobots" :key="autobot.id">
            <router-link :to="{ name: 'AutobotDetails', params: { id: autobot.id }}">
              {{ autobot.name }}
            </router-link>
          </li>
        </ul>
        <pagination :total="totalAutobots" :page.sync="currentPage" @page-changed="fetchPage" />
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  import Pagination from './Pagination.vue';
  
  export default {
    components: { Pagination },
    data() {
      return {
        currentPage: 1,
      };
    },
    computed: {
      ...mapGetters(['allAutobots', 'totalAutobots', 'isLoading', 'error']),
    },
    methods: {
      ...mapActions(['fetchAutobots']),
      fetchPage(page) {
        this.currentPage = page;
        this.fetchAutobots(page);
      },
    },
    created() {
      this.fetchAutobots();
    },
  };
  </script>
  
  <style scoped>
  .autobot-list {
    padding: 20px;
  }
  </style>
  