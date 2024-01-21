<template>
  <div
    v-if="isLoading"
    class="fixed inset-0 z-50 flex flex-col items-center justify-center gap-y-3 bg-black bg-opacity-50 backdrop-blur-sm"
  >
    <section class="bg-white p-6 space-y-6 max-w-screen-lg rounded-md">
      <h1 class="font-semibold text-lg text-gray-900 py-1">Suspend</h1>
      <div class="space-y-6">
        <div class="space-y-2 z-0">
          <label class="font-medium text-gray-800 text-sm"
            >Suspension Category</label
          >
          <select
            class="bg-gray-50 rounded-md w-full outline-none py-3 text-sm border-gray-300 border pl-3"
            v-model="form.category"
          >
            <option value="" disabled>Select suspension category</option>
            <option value="male">Bribery</option>
            <option value="female">Corruption</option>
          </select>
        </div>
        <div class="space-y-2 z-0">
          <div class="font-medium text-gray-800 text-sm">Until</div>
          <date-picker
            style="width: 100%"
            v-model="form.date"
            valueType="format"
          ></date-picker>
        </div>
      </div>
      <div class="flex justify-end items-end gap-x-3 w-full pt-6">
        <button
          @click="$emit('close')"
          type="button"
          class="text-black text-sm font-medium w-full border-gray-400 border px-3 py-2.5 rounded-lg"
        >
          Cancel
        </button>
        <button
          :disabled="!isFormEmpty"
          @click="$emit('proceedSuspension')"
          type="button"
          class="bg-[#0BA9B9] text-sm w-full disabled:cursor-not-allowed disabled:opacity-25 text-white font-medium px-6 py-2.5 rounded-lg"
        >
          Continue
        </button>
      </div>
    </section>
  </div>
</template>
<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    DatePicker,
  },
  data() {
    return {
      form: {
        date: "",
        category: "",
      },
    };
  },
  computed: {
    isFormEmpty() {
      return !!(this.form.category && this.form.date);
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
