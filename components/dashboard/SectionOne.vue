<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
    <div v-for="(itm, idx) in dashboardStats" :key="idx"
      class="flex flex-col items-center justify-center gap-y-3 border border-white rounded-2xl p-4 lg:p-7"
      :class="itm.bg">
      <div class="flex items-center gap-x-2">
        <h1 class="font-bold text-lg">{{ itm.title }}</h1>
        <span v-if="itm.subTitle" class="text-gray-500">({{ itm.subTitle }})</span>
      </div>
      <div class="flex items-center flex-col gap-x-4 lg:gap-x-6 mt-3">
        <h1 class="text-2xl lg:text-3xl font-bold">{{ itm.count }}</h1>
        <div class="flex items-center gap-x-2">
          <img v-if="itm.progress" src="@/assets/icons/dashboard/increase.svg" alt="" />
          <img v-if="!itm.progress" src="@/assets/icons/dashboard/decrease.svg" alt="" />
          <p class="pt-3" :class="[itm.progress ? 'text-green-600' : 'text-red-600']">
            {{ itm.rate }}
          </p>
        </div>
      </div>
      <p class="text-[#6E717C] text-sm">{{ itm.desc }}</p>
    </div>
  </div>
</template>

<script>
import { calculatePercentageChange } from '@/utils/statisticsHelper';
export default {
  layout: "dashboard",
  data() {
    return {
      dashboardStats: [
        {
          title: "Total Active Users",
          count: this.stats?.activeUsers?.currentMonthCount ?? 0,
          desc: "Compared from Last Month",
          rate: calculatePercentageChange(this.stats.activeUsers?.currentMonthCount, this.stats.activeUsers?.lastMonthCount),
          progress: false,
          bg: "bg-[#FDF5F5]",
          chart: "active-users-spiral",
        },
        {
          title: "Sign ups",
          count: this.stats?.userSignups?.currentMonthCount ?? 0,
          desc: "Compared from Last Month",
          rate: calculatePercentageChange(this.stats.userSignups?.currentMonthCount, this.stats.userSignups?.lastMonthCount),
          progress: true,
          bg: "bg-[#ECFCFE]",
          subTitle: "",
          chart: "signup-spiral",
        },
        {
          title: "Stories",
          count: this.stats?.allStories?.currentMonthCount ?? 0,
          desc: "Compared from Last Month",
          rate: calculatePercentageChange(this.stats.allStories?.currentMonthCount, this.stats.allStories?.lastMonthCount),
          progress: false,
          bg: "bg-[#FFF8E3]",
          subTitle: "",
          chart: "stori-spiral",
        },
        {
          title: "Engagement",
          count: this.stats?.userEngagement?.currentMonthCount ?? 0,
          desc: "Compared from Last Month",
          rate: calculatePercentageChange(this.stats.userEngagement?.currentMonthCount, this.stats.userEngagement?.lastMonthCount),
          progress: true,
          bg: "bg-[#f9efff]",
          subTitle: "",
          chart: "engagement-spiral",
        },
      ],
    };
  },
  props: {
    stats: {
      type: Object,
      required: false
    },
    loading: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  computed: {
    percentageChange() {
      if (this.lastMonthCount === 0) {
        return this.currentMonthCount > 0 ? 'Infinity%' : '0%';
      }
      const change = ((this.currentMonthCount - this.lastMonthCount) / this.lastMonthCount) * 100;
      return change.toFixed(2); // Formats the number to two decimal places
    },
  },
};
</script>
