<template>
  <div class="lg:flex gap-x-10 space-y-10 lg:space-y-0">
    <div class="lg:w-6/12 rounded-2xl bg-white p-6 shadow-md border space-y-6">
      <div class="space-y-2">
        <h1 class="font-semibold text-base md:text-lg">
          Most Recent
        </h1>
        <div>
          <div class="sm:hidden">
            <label for="Tab" class="sr-only">Tab</label>

            <select id="Tab"
              class="w-full md:w-full text-xs rounded-md py-2.5 md:py-0 px-3 outline-none md:text-sm md:px-0 bg-gray-100 border-gray-200">
              <option select>Reserved Username</option>
              <option>Reported users</option>
              <option>Reported post</option>
              <option>Reported comment</option>
            </select>
          </div>

          <div class="hidden sm:block">
            <div class="border-b border-gray-200">
              <nav class="-mb-px flex gap-6 overflow-x-auto" aria-label="Tabs">
                <button @click="setActiveTable('reserved_usernames')" :class="[
                  activeTable === 'reserved_usernames'
                    ? 'border-sky-500 border-b-2 font-bold text-gray-900'
                    : 'border-transparent',
                ]" class="shrink-0 border-b-2 px-1 pb-2 text-sm text-gray-400" aria-current="page">
                  Reserved Username
                </button>

                <button @click="setActiveTable('reported_users')" :class="[
                  activeTable === 'reported_users'
                    ? 'border-sky-500 font-bold text-gray-900'
                    : 'border-transparent',
                ]" class="shrink-0 border-b-2 px-1 pb-2 text-sm text-gray-400">
                  Reported users
                </button>

                <button @click="setActiveTable('reported_post')" :class="[
                  activeTable === 'reported_post'
                    ? 'border-sky-500 font-bold text-gray-900'
                    : 'border-transparent',
                ]" class="shrink-0 border-b-2 px-1 pb-2 text-sm text-gray-400">
                  Reported post
                </button>

                <button @click="setActiveTable('reported_comment')" :class="[
                  activeTable === 'reported_comment'
                    ? 'border-sky-500 font-bold text-gray-900'
                    : 'border-transparent',
                ]" class="shrink-0 border-b-2 px-1 pb-2 text-sm text-gray-400">
                  Reported comment
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <tbody class="divide-y divide-gray-200">
            <tr v-for="(itm, idx) in usersList" :key="idx">
              <td class="whitespace-nowrap px-4 py-4 md:py-3 font-medium text-gray-900 bg-white">
                <nuxt-link v-if="itm.profilePicture" :to="`/dashboard/users/${itm.id}`">
                  <image-zoom class="h-20 w-20 cursor-pointer" :src="itm.profilePicture" />
                </nuxt-link>
                <p v-else
                  class="rounded-full h-10 w-10 font-semibold bg-gray-300 text-gray-800 flex justify-center items-center">
                  {{ generateInitials(itm.fname, itm.lname) }}</p>
              </td>
              <td class="whitespace-nowrap text-base md:text-sm px-4 py-4 md:py-3 text-gray-700">
                <nuxt-link class="text-blue-700 no-underline hover:underline" :to="`/dashboard/users/${itm.id}`">{{
                  itm.fname
                }}</nuxt-link>
              </td>
              <td class="whitespace-nowrap text-base md:text-sm px-4 py-4 md:py-3 text-gray-700">
                <nuxt-link class="text-blue-700 no-underline hover:underline" :to="`/dashboard/users/${itm.id}`">{{
                  itm.email
                }}</nuxt-link>
              </td>
              <td class="whitespace-nowrap text-base md:text-sm px-4 py-4 md:py-3 text-gray-700">
                <nuxt-link class="text-blue-700 no-underline hover:underline" :to="`/dashboard/users/${itm.id}`">
                  <img src="@/assets/icons/arrow-right.svg" alt="" />
                </nuxt-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="lg:w-6/12 w-full rounded-2xl bg-white p-3 md:p-6 shadow-md border">
      <div class="md:flex space-y-6 md:space-y-0 items-center justify-between px-3 md:px-7 py-4">
        <div class="">
          <h1 class="font-medium text-lg text-gray-900 py-0 my-0">
            Website Traffic
          </h1>
          <p class="text-gray-400 py-0 my-0 text-sm md:text-base">
            Comparison of source of website traffic
          </p>
        </div>
        <select class="text-sm font-medium bg-gray-100 rounded-md px-2.5 py-2 outline-none">
          <option>This year</option>
        </select>
      </div>
      <div class="flex justify-center items-center w-full pb-3">
        <WebsiteTrafficChart />
      </div>
    </div>
  </div>
</template>

<script>
import ImageZoom from "@/components/dashboard/ImageZoom.vue";
import WebsiteTrafficChart from "@/components/charts/WebsiteTrafficChart.vue";
export default {
  layout: "dashboard",
  data() {
    return {
      activeTable: "reserved_usernames",
      loadingUsers: false,
      usersList: [],
      metadata: {},
    };
  },
  components: {
    WebsiteTrafficChart,
    ImageZoom,
  },
  methods: {
    setActiveTable(val) {
      this.activeTable = val;
    },
    async loadUsers() {
      try {
        this.loadingUsers = true;
        const response = await this.$userApiService.getAllUsers();
        const sortedResult = response.result.sort((a, b) => b.createdAt - a.createdAt);
        const mostRecentUsers = sortedResult.slice(0, 5);
        this.usersList = mostRecentUsers
      } catch (error) {
        this.$toastr.e(error.response.data.message)
      } finally {
        this.loadingUsers = false;
      }
    },
    generateInitials(fname, lname) {
      return `${fname.charAt(0).toUpperCase()}${lname.charAt(0).toUpperCase()}`
    }
  },
  mounted() {
    this.loadUsers()
  }
};
</script>
