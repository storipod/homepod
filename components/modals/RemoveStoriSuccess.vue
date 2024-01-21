<template>
  <div
    v-if="isLoading"
    class="fixed inset-0 z-50 flex flex-col items-center justify-center gap-y-3 bg-black bg-opacity-50 backdrop-blur-sm"
  >
    <section class="bg-white p-6 space-y-6 max-w-screen-lg rounded-md">
      <div>
        <img src="@/assets/icons/success.svg" alt="warning" />
      </div>
      <div>
        <h1 class="font-semibold text-lg">Story removed</h1>
      </div>
      <div>
        <p class="font-medium text-gray-500">
          You have successfully removed the story, kindly note that it cannot be
          recovered.
        </p>
      </div>
      <div class="flex justify-end items-end gap-x-3 w-full pt-6">
        <button
          @click="$emit('close')"
          class="bg-[#000000] text-sm w-full text-white font-medium px-6 py-2.5 rounded-lg"
        >
          Close
        </button>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style>
.spinner {
  border-radius: 50%;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

