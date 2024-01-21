<template>
  <div
    v-if="isLoading"
    class="fixed inset-0 z-50 flex flex-col items-center justify-center gap-y-3 bg-black bg-opacity-50 backdrop-blur-sm"
  >
    <section class="bg-white p-6 space-y-6 max-w-screen-lg rounded-md">
      <div>
        <img src="@/assets/icons/warning.svg" alt="warning" />
      </div>
      <div>
        <h1 class="font-semibold text-lg">Confirmation</h1>
      </div>
      <div>
        <p class="font-medium text-gray-500">
          You are about to send a message to {{ userType }}
        </p>
      </div>
      <div>
        <label class="font-medium text-gray-500 flex items-center gap-x-3">
          <input type="checkbox" v-model="isAgreed" :checked="isAgreed" />
          This message adheres to Shuttler’s content policy</label
        >
      </div>
      <div class="flex justify-end items-end gap-x-3 w-full pt-6">
        <button
          @click="$emit('close')"
          class="text-black font-medium text-sm w-full border-gray-400 border px-3 py-2.5 rounded-lg"
        >
          Cancel
        </button>
        <button
          :disabled="!isAgreed"
          @click="$emit('proceed')"
          class="bg-[#0BA9B9] w-full text-sm disabled:cursor-not-allowed disabled:opacity-25 text-white font-medium px-6 py-2.5 rounded-lg"
        >
          Continue
        </button>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isAgreed: false,
    };
  },
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
    userType: {
      type: String,
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
