<template>
  <div class="flex flex-col md:flex-row bg-white dark:bg-black">
    <div class="md:w-2.5/12 top-0 hidden md:h-screen w-2/12 md:sticky lg:block">
      <DashboardSidebar />
    </div>
    <div class="w-9.5/12 w-full flex-grow">
      <DashboardHeader />
      <div class="bg-gray-50 dark:bg-black md:h-screen lg:p-4 overflow-y-auto">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>
