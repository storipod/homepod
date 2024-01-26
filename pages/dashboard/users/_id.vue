<template>
  <main class="space-y-6">
    <DashboardHeader>
      <template v-slot:action>
        <div class="relative">
          <!-- <div class="inline-flex items-center overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </div> -->
          <b-dropdown
            id="dropdown-1"
            class="m-md-2"
            variant="link"
            right
            toggle-class="text-decoration-none"
            no-caret
          >
            <template #button-content>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </template>
            <b-dropdown-item>Edit</b-dropdown-item>
            <b-dropdown-item>Remove User</b-dropdown-item>
            <b-dropdown-item>Suspend</b-dropdown-item>
          </b-dropdown>
        </div>
      </template>
    </DashboardHeader>
    <section>
      <div class="border-b border-gray-200 mx-6">
        <div class="">
          <nav class="-mb-px flex gap-6" aria-label="Tabs">
            <button
              @click="setActiveTable('insight')"
              :class="[
                activeTable === 'insight'
                  ? 'border-sky-500 border-b-2 font-bold text-gray-900 dark:text-white'
                  : 'border-transparent',
              ]"
              class="shrink-0 border-b-2 px-1 pb-2.5 text-sm text-gray-400"
              aria-current="page"
            >
              Insight
            </button>

            <button
              @click="setActiveTable('stori')"
              :class="[
                activeTable === 'stori'
                  ? 'border-sky-500 font-bold text-gray-900 dark:text-white'
                  : 'border-transparent',
              ]"
              class="shrink-0 border-b-2 px-1 pb-2.5 text-sm text-gray-400"
            >
              Stori
            </button>

            <button
              @click="setActiveTable('wallet')"
              :class="[
                activeTable === 'wallet'
                  ? 'border-sky-500 font-bold text-gray-900 dark:text-white'
                  : 'border-transparent',
              ]"
              class="shrink-0 border-b-2 px-1 pb-2.5 text-sm text-gray-400"
            >
              Wallet & Payout
            </button>
          </nav>
        </div>
      </div>
      <section class="bg-white rounded-md p-6 space-y-4 mx-6">
        <h1 class="font-bold text-gray-950 text-lg pl-3 lg:pl-6">
          Users Information
        </h1>
        <div class="flex">
          <div class="lg:w-1/12 flex justify-center items-center">
            <img src="@/assets/img/avatar.png" alt="avatar" class="h-16 w-16" />
          </div>
          <div class="w-11/12 hidden lg:block">
            <div
              class="bg-gray-100 rounded-lg py-3.5 flex justify-between items-center px-6"
            >
              <div
                v-for="(itm, idx) in userStats"
                :key="idx"
                class="w-full border-r last:border-r-0 border-gray-300"
              >
                <div class="flex justify-center items-center">
                  <div
                    class="flex justify-center items-center flex-col gap-y-1"
                  >
                    <p class="text-xl font-semibold text-gray-900">
                      {{ itm.count }}
                    </p>
                    <p
                      class="text-sm text-[#667085] font-medium flex items-center gap-x-3"
                    >
                      {{ itm.title }}
                      <img
                        v-if="itm.title === 'Stories'"
                        src="@/assets/icons/dashboard/stories-link.svg"
                        alt="'"
                      />
                    </p>
                  </div>
                  <p class="bg-gray-300 h-12"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:flex justify-between max-h-[650px] pt-6">
          <div class="flow-root lg:w-6/12 p-4 lg:p-6">
            <div class="space-y-6">
              <div class="flex items-center gap-x-6">
                <p class="text-sm font-semibold text-lg">Victor Abang</p>
                <span
                  class="text-[#175CD3] bg-blue-50 rounded-full text-xs px-3 py-2.5"
                  >@vick_yy.</span
                >
              </div>
              <p class="text-gray-500 font-semibold text-sm">
                Account created | 24th August, 2022 | 09:30 PM
              </p>
            </div>
            <dl class="-my-3 divide-y divide-gray-100 text-sm p-3">
              <div class="flex justify-between items-center py-2">
                <dt class="font-semibold text-gray-900 text-[17px]">
                  Email address
                </dt>
                <dd class="font-semibold text-gray-900 text-[17px]">
                  olivia@gmail.com
                </dd>
              </div>

              <div class="flex justify-between items-center py-3.5">
                <dt class="font-semibold text-gray-900 text-[17px]">
                  Phone number
                </dt>
                <dd class="font-semibold text-gray-900 text-[17px]">
                  +234 703 127 480
                </dd>
              </div>

              <div class="flex justify-between items-center py-3.5">
                <dt class="font-semibold text-gray-900 text-[17px]">
                  Password
                </dt>
                <dd class="font-semibold text-gray-900 text-[17px]">
                  <div class="flex items-center gap-x-2">
                    <p class="text-gray-400 font-semibold">********</p>
                    <img src="@/assets/icons/eye-open.svg" alt="" />
                  </div>
                </dd>
              </div>

              <div class="flex justify-between items-center py-3.5">
                <dt class="font-semibold text-gray-900 text-[17px]">
                  Interests
                </dt>
                <dd class="text-gray-700 sm:col-span-2">
                  <div class="flex items-center gap-x-3">
                    <div
                      v-for="(itm, idx) in [
                        'Sports',
                        'Politics',
                        'Funky gists',
                      ]"
                      :key="idx"
                    >
                      <span
                        class="text-[#6941C6] font-semibold bg-[#EEF4FF] rounded-full px-3 py-2.5"
                      >
                        {{ itm }}</span
                      >
                    </div>
                  </div>
                </dd>
              </div>

              <div class="flex justify-between items-center py-3.5">
                <dt class="font-semibold text-gray-900 text-[17px]">
                  Date of birth
                </dt>
                <dd class="font-semibold text-gray-900 text-[17px]">
                  07 March, 2000
                </dd>
              </div>

              <div class="flex justify-between items-center py-3.5">
                <dt class="font-semibold text-gray-900 text-[17px]">Gender</dt>
                <dd class="font-semibold text-gray-900 text-[17px]">Female</dd>
              </div>

              <div class="flex justify-between items-center py-3.5">
                <dt class="font-semibold text-gray-900 text-[17px]">Status</dt>
                <dd
                  class="font-semibold text-gray-900 text-[17px] flex items-center gap-x-3"
                >
                  <img
                    src="@/assets/icons/dashboard/suspended.svg"
                    alt=""
                  />Suspended
                </dd>
              </div>

              <div class="flex justify-between items-center py-3.5">
                <dt class="font-semibold text-gray-900 text-[17px]">
                  Last Session
                </dt>
                <dd class="font-semibold text-gray-900 text-[17px]">
                  1 h 37 mins
                </dd>
              </div>
            </dl>
          </div>
          <div class="lg:w-6/12 space-y-3 overflow-y-auto">
            <h1 class="text-lg font-semibold">Daily StoriTime</h1>
            <div class="bg-[#F3F2F2] rounded-lg p-6">
              <div>
                <div class="flex justify-between items-center">
                  <div>
                    <p class="text-gray-400 font-medium">Today, 9 January</p>
                    <h1
                      class="text-lg font-extrabold text-gray-950 leading-loose"
                    >
                      3h 50m
                    </h1>
                  </div>
                  <div>
                    <select
                      class="text-sm outline-none font-medium bg-white rounded-md px-2.5 py-2 w-full"
                    >
                      <option>Daily</option>
                      <option>Weekly</option>
                    </select>
                  </div>
                </div>
                <user-activities-chart />
              </div>
              <div>
                <p class="text-gray-400 font-medium">Today, 9 January</p>
                <h1 class="text-lg font-extrabold text-gray-950 leading-loose">
                  3h 50m
                </h1>
                <user-activities-chart />
              </div>
            </div>
            <!-- <img src="@/assets/icons/dashboard/user-stats.svg" alt="stats" /> -->
          </div>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
import UserActivitiesChart from "@/components/charts/UserActivitiesChart.vue";
import Breadcrumb from "@/components/dashboard/Breadcrumb.vue";
export default {
  components: { UserActivitiesChart, Breadcrumb },
  layout: "dashboard",
  data() {
    return {
      activeTable: "insight",
      breadcrumbTabs: [
        {
          text: "Insight",
        },
        {
          text: "Stori",
        },
        {
          text: "Wallet & Payout",
        },
      ],
      userStats: [
        {
          title: "Followers",
          count: "300k ",
        },
        {
          title: "Following",
          count: "2.02k",
        },
        {
          title: "Stories",
          count: "96",
        },
        {
          title: "Premium stories",
          count: "96",
        },
        {
          title: "Views",
          count: "12.02k",
        },
        {
          title: "Reactions",
          count: "40k",
        },
        {
          title: "Estimated Payout",
          count: "US $0.28",
        },
      ],
    };
  },
  methods: {
    setActiveTable(val) {
      this.activeTable = val;
    },
  },
};
</script>
