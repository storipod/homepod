<template>
  <div
    class="bg-white dark:bg-black shadow rounded-md p-6 md:p-10 space-y-3 dark:border dark:border-white"
  >
    <div class="md:flex space-y-4 md:space-y-0 justify-between items-center">
      <h1 class="text-gray-700 text-lg dark:text-white">
        Live traffic of logged in Active users
      </h1>
      <div class="flex items-center gap-x-3">
        <select
          class="text-sm outline-none font-medium bg-gray-100 rounded-md px-2.5 py-2 w-full"
        >
          <option>online</option>
          <option>offline</option>
        </select>
        <select
          class="text-sm outline-none font-medium bg-gray-100 rounded-md px-2.5 py-2 w-full"
        >
          <option>Daily</option>
          <option>Monthly</option>
        </select>
      </div>
    </div>
    <div class="flex gap-x-2">
      <h1 class="text-5xl font-semibold text-gray-700 dark:text-white">
        2,001
      </h1>
      <sub class="text-xs text-gray-40 dark:text-white">users</sub>
    </div>
    <client-only>
      <div class="chart-wrapper md:w-full overflow-x-auto">
        <VueApexCharts
          class="md:w-full overflow-x-auto"
          width="1000"
          type="bar"
          :options="chartOptions"
          :series="series"
        ></VueApexCharts>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  components: {
    VueApexCharts: () => import("vue-apexcharts"),
  },
  data() {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
          toolbar: { show: false },
          type: "bar",
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            horizontal: false,
            borderRadiusApplication: "around",
          },
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
        tooltip: {
          theme: "light",
          fillSeriesColor: false,
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 35, 50, 49, 60, 70, 91],
        },
      ],
    };
  },
};
</script>

<style scoped>
div.chart-wrapper {
  width: "100%";
  display: flex;
  align-items: center;
  justify-content: start;
}
</style>
