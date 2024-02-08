<template>
  <div class="flex flex-col md:flex-row bg-white dark:bg-black">
    <div class="md:w-2.5/12 top-0 hidden md:h-screen w-2/12 md:sticky lg:block">
      <DashboardSidebar />
    </div>
    <div class="w-9.5/12 w-full flex-grow">
      <div class="bg-gray-100  md:h-screen overflow-y-auto">
        <Nuxt class="" />
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/dashboard/Breadcrumb.vue";
export default {
  components: {
    Breadcrumb,
  },
};
</script>
