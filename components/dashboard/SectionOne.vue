<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
    <div
      v-for="(itm, idx) in dashboardStats"
      :key="idx"
      class="flex flex-col items-start justify-center gap-y-6 border border-white rounded-2xl p-7"
      :class="itm.bg"
    >
      <div class="flex items-center gap-x-2">
        <h1 class="font-bold text-lg">{{ itm.title }}</h1>
        <span v-if="itm.subTitle" class="text-gray-500"
          >({{ itm.subTitle }})</span
        >
      </div>
      <img :src="require(`@/assets/icons/dashboard/${itm.chart}.svg`)" alt="" />
      <div class="flex items-center gap-x-6">
        <img
          v-if="itm.progress"
          src="@/assets/icons/dashboard/increase.svg"
          alt=""
        />
        <img
          v-if="!itm.progress"
          src="@/assets/icons/dashboard/decrease.svg"
          alt=""
        />
        <h1 class="text-3xl font-bold">{{ itm.count }}</h1>
        <p :class="[itm.progress ? 'text-green-600' : 'text-red-600']">
          {{ itm.rate }}
        </p>
      </div>
      <p class="text-[#6E717C] text-sm">{{ itm.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      dashboardStats: [
        {
          title: "Total Active Users",
          count: "1,000,000",
          desc: "Compared from Last Month",
          rate: "-7.3%",
          progress: false,
          bg: "bg-[#FDF5F5]",
          chart: "active-users-spiral",
        },
        {
          title: "Sign ups",
          count: "2,000,000",
          desc: "Compared from Last Month",
          rate: "+2.4%",
          progress: true,
          bg: "bg-[#ECFCFE]",
          subTitle: "Total",
          chart: "signup-spiral",
        },
        {
          title: "Stori",
          count: "180k",
          desc: "Compared from Last Month",
          rate: "-9.7%",
          progress: false,
          bg: "bg-[#FFF8E3]",
          subTitle: "Total",
          chart: "stori-spiral",
        },
        {
          title: "Engagement",
          count: "34.9M",
          desc: "Compared from Last Month",
          rate: "+12%",
          progress: true,
          bg: "bg-[#f9efff]",
          subTitle: "Total",
          chart: "engagement-spiral",
        },
      ],
    };
  },
};
</script>
