<template>
  <div class="pagination">
    <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    total: {
      type: Number,
      required: true,
    },
    page: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / 10); // Assuming 10 items per page
    },
    currentPage: {
      get() {
        return this.page;
      },
      set(value) {
        this.$emit('update:page', value);
      },
    },
  },
  methods: {
    changePage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.currentPage = page;
        this.$emit('page-changed', page);
      }
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

button {
  margin: 0 10px;
}
</style>
