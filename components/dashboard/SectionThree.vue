<template>
  <div class="md:flex gap-x-10 space-y-10 md:space-y-0">
    <div class="md:w-6/12 rounded-2xl bg-white p-6 shadow-md border space-y-6">
      <div
        class="flex w-full justify-between md:justify-start md:items-start items-center md:flex-col flex-row md:space-y-6"
      >
        <h1 class="font-medium text-lg dark:text-white">Most Recent</h1>
        <div>
          <div class="sm:hidden">
            <label for="Tab" class="sr-only">Tab</label>

            <select
              id="Tab"
              class="md:w-full rounded-md py-2.5 md:py-0 px-3 md:px-0 border-gray-200"
            >
              <option select>Reserved Username</option>
              <option>Reported users</option>
              <option>Reported post</option>
              <option>Reported comment</option>
            </select>
          </div>

          <div class="hidden sm:block">
            <div class="border-b border-gray-200">
              <nav class="-mb-px flex gap-6" aria-label="Tabs">
                <button
                  @click="setActiveTable('reserved_usernames')"
                  :class="[
                    activeTable === 'reserved_usernames'
                      ? 'border-sky-500 border-b-2 font-bold text-gray-900 dark:text-white'
                      : 'border-transparent',
                  ]"
                  class="shrink-0 border-b-2 px-1 pb-4 text-sm text-gray-400"
                  aria-current="page"
                >
                  Reserved Username
                </button>

                <button
                  @click="setActiveTable('reported_users')"
                  :class="[
                    activeTable === 'reported_users'
                      ? 'border-sky-500 font-bold text-gray-900 dark:text-white'
                      : 'border-transparent',
                  ]"
                  class="shrink-0 border-b-2 px-1 pb-4 text-sm text-gray-400"
                >
                  Reported users
                </button>

                <button
                  @click="setActiveTable('reported_post')"
                  :class="[
                    activeTable === 'reported_post'
                      ? 'border-sky-500 font-bold text-gray-900 dark:text-white'
                      : 'border-transparent',
                  ]"
                  class="shrink-0 border-b-2 px-1 pb-4 text-sm text-gray-400"
                >
                  Reported post
                </button>

                <button
                  @click="setActiveTable('reported_comment')"
                  :class="[
                    activeTable === 'reported_comment'
                      ? 'border-sky-500 font-bold text-gray-900 dark:text-white'
                      : 'border-transparent',
                  ]"
                  class="shrink-0 border-b-2 px-1 pb-4 text-sm text-gray-400"
                >
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
            <tr v-for="(itm, idx) in tableData" :key="idx">
              <td
                class="whitespace-nowrap px-4 py-6 font-medium text-gray-900 bg-white"
              >
                <img
                  :src="require(`@/assets/icons/dashboard/${itm.avatar}.svg`)"
                  alt=""
                />
              </td>
              <td
                class="whitespace-nowrap px-4 py-6 text-gray-700 dark:text-white"
              >
                {{ itm.name }}
              </td>
              <td
                class="whitespace-nowrap px-4 py-6 text-gray-700 dark:text-white"
              >
                {{ itm.email }}
              </td>
              <td
                class="whitespace-nowrap px-4 py-6 text-gray-700 dark:text-white"
              >
                <img src="@/assets/icons/arrow-right.svg" alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="md:w-6/12 rounded-2xl bg-white p-3 md:p-6 shadow-md border">
      <div class="md:flex space-y-6 md:space-y-0 items-center justify-between px-3 md:px-7 py-4">
        <div class="space-y-1">
          <h1 class="font-medium text-lg text-gray-900 dark:text-white">
            Website Traffic
          </h1>
          <p class="text-gray-400 dark:text-white text-sm md:text-base">
            Comparison of source of website traffic
          </p>
        </div>
        <select
          class="text-sm font-medium bg-gray-100 rounded-md px-2.5 py-2 outline-none"
        >
          <option>This year</option>
        </select>
      </div>
      <div><WebsiteTrafficChart /></div>
    </div>
  </div>
</template>

<script>
import WebsiteTrafficChart from "@/components/charts/WebsiteTrafficChart.vue";
export default {
  layout: "dashboard",
  data() {
    return {
      activeTable: "reserved_usernames",
      tableData: [
        {
          name: "Jim Edwards",
          email: "jimedwards@yahoo.com",
          avatar: "avatar",
        },
        {
          name: "Abdulateef Jakande",
          email: "adbuafas@gmail.com",
          avatar: "avatar",
        },
        {
          name: "Simisola  Abolarinwa",
          email: "simsim@hotmail.com",
          avatar: "avatar",
        },
      ],
    };
  },
  components: {
    WebsiteTrafficChart,
  },
  methods: {
    setActiveTable(val) {
      this.activeTable = val;
    },
  },
};
</script>
