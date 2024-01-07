<template>
  <div
    class="md:flex justify-start items-start space-y-10 md:space-y-0 gap-x-10 w-full dark:bg-black"
  >
    <div class="lg:w-9/12 md:w-6/12"><ActivitiesChart /></div>
    <div
      class="lg:w-3/12 md:w-6/12 rounded-lg bg-white shadow-md space-y-6 dark:border dark:border-white"
    >
      <div class="flex items-center justify-between px-7 py-4">
        <h1 class="font-medium text-gray-500">App Store information</h1>
        <select
          class="text-sm font-medium outline-none bg-gray-100 rounded-md px-2.5 py-2"
        >
          <option>All Time</option>
        </select>
      </div>
      <div>
        <div class="border-b-[0.2px] border-gray-50">
          <div
            class="flex justify-between items-start border-b border-gray-100 pb-10 px-7"
          >
            <img src="@/assets/icons/dashboard/android-badge.svg" alt="" />
            <div class="space-y-4">
              <div class="flex items-center space-x-4">
                <h1 class="font-bold text-3xl dark:text-white">625</h1>
                <img
                  src="@/assets/icons/dashboard/increase.svg"
                  alt=""
                  class="h-10 w-10"
                />
              </div>
              <p class="text-gray-400">Downloads</p>
              <div class="flex items-center gap-x-3">
                <p class="dark:text-white">4.5</p>
                <img src="@/assets/icons/dashboard/star-group.svg" alt="" />
              </div>
            </div>
            <div>
              <h1 class="text-green-500 font-medium">+2.4%</h1>
            </div>
          </div>
        </div>
        <div class="flex justify-between items-start py-10 px-7">
          <img src="@/assets/icons/dashboard/ios-badge.svg" alt="" />
          <div class="space-y-4">
            <div class="flex items-center space-x-4">
              <h1 class="font-bold text-3xl dark:text-white">902</h1>
              <img src="@/assets/icons/dashboard/decrease.svg" alt="" />
            </div>
            <p class="text-gray-400">Downloads</p>
            <div class="flex items-center gap-x-3">
              <p class="dark:text-white">4.8</p>
              <img src="@/assets/icons/dashboard/star-group.svg" alt="" />
            </div>
          </div>
          <div>
            <h1 class="text-green-500 font-medium">+2.4%</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActivitiesChart from "@/components/charts/ActivitiesChart.vue";
export default {
  layout: "dashboard",
  components: {
    ActivitiesChart,
  },
};
</script>
