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
        <h1 class="font-semibold text-lg">Success</h1>
      </div>
      <div>
        <p class="font-medium text-gray-500">Message has been sent.</p>
      </div>
      <div class="flex justify-end items-end gap-x-3 w-full pt-6">
        <button
          @click="$emit('proceed')"
          class="text-black text-sm font-medium w-full border-gray-400 border px-3 py-2.5 rounded-lg"
        >
          Create another
        </button>
        <button
          @click="$emit('close')"
          class="bg-[#0BA9B9] text-sm w-full text-white font-medium px-6 py-2.5 rounded-lg"
        >
          Continue
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

