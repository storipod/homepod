<template>
  <nav class="flex justify-center mt-8">
    <ul class="inline-flex items-center -space-x-px">
      <li>
        <button
          :disabled="currentPage <= 1"
          @click="changePage(currentPage - 1)"
          class="px-4 py-2 ml-0 leading-tight text-gray-500 bg-white border border-r-0 border-gray-300 rounded-l-lg hover:bg-gray-100 disabled:opacity-50"
        >
          Previous
        </button>
      </li>
      <li v-for="page in arrayOfPages" :key="page">
        <button
          @click="changePage(page)"
          :class="[currentPage === page ? 'text-blue-600 bg-blue-100' : '', 'px-4 py-2 leading-tight text-gray-500 bg-white border border-r-0 border-gray-300 hover:bg-gray-100']"
        >
          {{ page }}
        </button>
      </li>
      <li>
        <button
          :disabled="currentPage >= totalPages"
          @click="changePage(currentPage + 1)"
          class="px-4 py-2 leading-tight text-gray-500 bg-white border rounded-r-lg hover:bg-gray-100 disabled:opacity-50"
        >
          Next
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  computed: {
    arrayOfPages() {
      let pages = [];
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
  methods: {
    changePage(page) {
      this.$emit('page-changed', page);
    },
  },
};
</script>

<style scoped>
/* You can add additional styles here */
</style>
