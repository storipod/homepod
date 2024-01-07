<template>
  <main
    class="flex h-screen w-full items-center justify-center bg-[#0BA9B9] px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
  >
    <div class="flex w-full max-w-xl items-center justify-center lg:max-w-2xl">
      <form class="mt-8 w-full space-y-6" @submit.prevent="handleForgotPassword">
        <div class="space-y-3">
          <h1 class="text-2xl md:text-4xl font-semibold text-white">Forgot Password</h1>
          <p class="max-w-sm text-sm md:text-base text-white">No worries, we will send to your email password-reset information.</p>
        </div>
        <div class="relative col-span-6 w-full">
          <label for="Email" class="block text-sm font-medium text-white"> Email </label>

          <input
            id="Email"
            v-model="form.email"
            placeholder="Enter Your Email..."
            type="email"
            name="email"
            class="mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-3.5 pl-10 text-sm text-gray-700 shadow-sm outline-none"
          />
          <img src="@/assets/icons/email.svg" alt="email" class="absolute left-4 top-10" />
        </div>
        <div class="w-full space-y-4 pt-10">
          <button
            :disabled="!isFormEmpty || processing"
            class="flex w-full shrink-0 items-center justify-center gap-x-3 rounded-md border border-white bg-[#0BA9B9] px-12 py-4 text-sm font-medium text-white transition hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-25"
          >
            <img src="@/assets/icons/arrow-right-white.svg" alt="" />
            {{ processing ? 'processing...' : 'Submit' }}
          </button>

          <div class="mt-4 flex items-center justify-center">
            <button class="text-center text-sm font-medium text-white sm:mt-0" @click="backToLogin">
              Back to Login
            </button>
          </div>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  emits: ['success', 'redirectLogin'],
  data() {
    return {
      processing: false,
      form: {
        email: '',
      },
    };
  },
  computed: {
    isFormEmpty() {
      return !!this.form.email;
    },
  },
  methods: {
    handleForgotPassword() {
      this.processing = true;
      setTimeout(() => {
        this.processing = false;
        this.$emit('success');
      }, 3000);
    },

    backToLogin() {
      this.$emit('redirectLogin');
    },
  },
};
</script>
