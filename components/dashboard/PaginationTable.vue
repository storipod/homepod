<template>
  <div class="flex justify-center items-center w-full lg:ml-6">
    <div
      class="lg:flex space-y-4 lg;space-y-0 items-center w-full justify-between lg:px-6 py-4 bg-gray-50"
    >
      <div>
        <p class="font-semibold text-gray-500">Viewing Products 1 - 8 of 22</p>
      </div>
      <div class="flex items-center justify-center space-x-1 overflow-x-auto">
        <button
          @click="goToPage(currentPage - 1)"
          :disabled="currentPage === 1"
          class="p-2 text-gray-500 border bg-gray-50 border-gray-600 rounded-full disabled:opacity-50"
        >
          <img
            src="@/assets/icons/dashboard/less-than.svg"
            class="h-6 w-6"
            alt=""
          />
        </button>
        <button
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          :class="[
            'px-4 py-2 border-2 bg-white text-gray-800 rounded-full',
            {
              'bg-[#F5FFFA] border-2 border-[#0BA9B9] text-gray-700':
                page === currentPage,
            },
          ]"
        >
          {{ page }}
        </button>
        <button
          @click="goToPage(currentPage + 1)"
          :disabled="currentPage === totalPages"
          class="p-2 text-gray-500 border bg-gray-50 border-gray-600 rounded-full disabled:opacity-50"
        >
          <img
            src="@/assets/icons/dashboard/greater-than.svg"
            class="h-6 w-6"
            alt=""
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  methods: {
    goToPage(page) {
      if (page < 1 || page > this.totalPages) return;
      this.$emit("page-changed", page);
    },
  },
};
</script>

