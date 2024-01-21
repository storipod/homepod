<template>
  <div>
    <div class="chart-wrapper md:w-full overflow-x-auto">
      <client-only>
        <apexchart
          class="md:w-full overflow-x-auto"
          width="500"
          type="pie"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      series: [80, 20],
      chartOptions: {
        labels: ["Google search ", "Others"],
        dataLabels: {
          enabled: true,
        },
        fill: {
          colors: ["#BDBDBD", "#000000"],
        },
        colors: ["#BDBDBD", "#000000"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
                show: false,
              },
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
div.chart-wrapper {
  width: "100%";
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
