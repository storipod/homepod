<template>
  <div class="flex flex-col">
    <!-- Search Bar -->
    <input
      type="text"
      class="mb-2 p-2 border rounded"
      placeholder="Search..."
      v-model="searchQuery"
    />

    <!-- Table -->
    <div class="overflow-x-auto">
      <table class="min-w-full">
        <thead>
          <tr>
            <th>Checkbox</th>
            <th>Avatar</th>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone No</th>
            <th>Email</th>
            <th>No. of Stori(s)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in paginatedUsers" :key="user.id">
            <td><input type="checkbox" /></td>
            <td><img :src="user.avatar" class="h-10 w-10 rounded-full" /></td>
            <td>{{ user.username }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.stories }}</td>
            <td>
              <!-- Dropdown for Actions -->
              <div class="relative inline-block text-left">
                <div>
                  <button @click="openDropdown = !openDropdown" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                    Actions
                  </button>
                </div>
                <div v-if="openDropdown" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Action 1</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Action 2</a>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="flex justify-between items-center mt-4">
      <button @click="previousPage" :disabled="currentPage <= 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="

      Creating a responsive animated table with the specified features in Nuxt.js and Tailwind CSS requires several steps. Due to the complexity of the task, I'll provide a simplified example that you can expand upon. This example will cover the basic structure and functionalities.

      Step 1: Set Up Your Nuxt.js Project with Tailwind CSS
      If you haven't already set up your Nuxt.js project with Tailwind CSS, you need to do this first.

      Step 2: Create a Table Component
      Create a new component for the table. For simplicity, let's call this ResponsiveTable.vue.

      bash
      Copy code
      mkdir components
      touch components/ResponsiveTable.vue
      Step 3: Implement the Table Component
      In ResponsiveTable.vue, start building your table. I'll include basic structures for your requirements.

      vue
      Copy code
      <template>
        <div class="flex flex-col">
          <!-- Search Bar -->
          <input
            type="text"
            class="mb-2 p-2 border rounded"
            placeholder="Search..."
            v-model="searchQuery"
          />

          <!-- Table -->
          <div class="overflow-x-auto">
            <table class="min-w-full">
              <thead>
                <tr>
                  <th>Checkbox</th>
                  <th>Avatar</th>
                  <th>Username</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone No</th>
                  <th>Email</th>
                  <th>No. of Stori(s)</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in paginatedUsers" :key="user.id">
                  <td><input type="checkbox" /></td>
                  <td><img :src="user.avatar" class="h-10 w-10 rounded-full" /></td>
                  <td>{{ user.username }}</td>
                  <td>{{ user.firstName }}</td>
                  <td>{{ user.lastName }}</td>
                  <td>{{ user.phone }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.stories }}</td>
                  <td>
                    <!-- Dropdown for Actions -->
                    <div class="relative inline-block text-left">
                      <div>
                        <button @click="openDropdown = !openDropdown" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                          Actions
                        </button>
                      </div>
                      <div v-if="openDropdown" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Action 1</a>
                          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Action 2</a>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Pagination -->
          <div class="flex justify-between items-center mt-4">
            <button @click="previousPage" :disabled="currentPage <= 1">Previous</button>
            <span>Page {{ currentPage }} of {{ totalPages }}</span>
            <button @click="nextPage" :disabled="
      currentPage >= totalPages">Next</button>
      </div>

        </div>
        </div>
      </template>

      <script>
export default {
  data() {
    return {
      users: [], // This should be your actual data source
      searchQuery: "",
      currentPage: 1,
      itemsPerPage: 5,
      openDropdown: false,
    };
  },
  computed: {
    filteredUsers() {
      return this.users.filter((user) => {
        return Object.values(user).some((value) =>
          String(value).toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      });
    },
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredUsers.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredUsers.length / this.itemsPerPage);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    previousPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
  },
};
</script>
