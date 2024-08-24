<template>
    <div class="home">
      <AutobotCount />
      <AutobotList />
    </div>
  </template>
  
  <script>
  import AutobotCount from '../components/AutobotCount.vue';
  import AutobotList from '../components/AutobotList.vue';
  
  export default {
    components: {
      AutobotCount,
      AutobotList,
    },
  };
  </script>
  
  <style scoped>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  </style>
  