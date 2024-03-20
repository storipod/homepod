<template>
  <div class="text-center">
    <div class="flex justify-center items-center">
      <img src="@/assets/icons/empty-state.png" class="h-12 w-12" />
    </div>
    <h3 class="mt-2 text-sm font-semibold text-gray-900">{{ title }}</h3>
    <p class="mt-1 text-sm text-gray-500">{{ desc }}.</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    }
  }
}
</script>

<style></style>
