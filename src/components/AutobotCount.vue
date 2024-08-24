<template>
  <div class="autobot-count">
    <h1>Autobot Count: {{ totalAutobots }}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['totalAutobots']),
  },
  mounted() {
    this.$store.dispatch('fetchAutobots'); // Fetch data when component mounts
  },
};
</script>

<style scoped>
.autobot-count {
  text-align: center;
  margin: 20px;
}
</style>
