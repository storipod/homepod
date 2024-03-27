<template>
  <main class="w-full">
    <div
      class="z-0 flex h-screen w-full items-center justify-center bg-[#0BA9B9] px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div
        class="flex h-full w-full max-w-xl items-center justify-center lg:max-w-2xl"
      >
        <div class="mt-8 w-full space-y-10">
          <div class="space-y-4">
            <h1 class="text-2xl font-semibold text-white">Login</h1>
            <p class="text-sm text-white">Enter your credentials to login</p>
          </div>
          <div class="col-span-6 w-full">
            <label for="username" class="block text-sm font-medium text-white">
              username
            </label>

            <input
              id="username"
              v-model="form.username"
              type="text"
              name="username"
              placeholder="Enter Your username..."
              class="mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-3.5 text-sm text-gray-700 shadow-sm outline-none"
            />
          </div>

          <div class="relative col-span-6 w-full">
            <label for="Password" class="block text-sm font-medium text-white">
              Password
            </label>

            <input
              id="Password"
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              name="password"
              placeholder="Enter Your Password..."
              class="mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-3.5 text-sm text-gray-700 shadow-sm outline-none"
            />
            <img
              v-if="showPassword"
              src="@/assets/icons/eye-open.svg"
              alt=""
              class="absolute right-4 top-10 h-6 w-6 cursor-pointer"
              @click="showPassword = !showPassword"
            />
            <img
              v-if="!showPassword"
              src="@/assets/icons/eye-close.svg"
              alt=""
              class="absolute right-4 top-10 h-6 w-6 cursor-pointer"
              @click="showPassword = !showPassword"
            />
            <div class="flex items-end justify-end pt-3">
              <button
                class="text-sm font-medium text-gray-600"
                @click="setActiveTab"
              >
                Forgot Password?
              </button>
            </div>
          </div>
          <div class="w-full pt-10">
            <button
              :disabled="!isFormEmpty || processing"
              class="flex w-full shrink-0 items-center justify-center gap-x-3 rounded-md border border-white bg-[#0BA9B9] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-25"
              @click="handleLogin"
            >
              <img src="@/assets/icons/arrow-right-white.svg" alt="" />
              {{ processing ? "processing..." : "Login" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  emits: ["processLogin", "forgotPassword"],
  data() {
    return {
      processing: false,
      showPassword: false,
      form: {
        username: "",
        password: "",
      },
    };
  },
  computed: {
    isFormEmpty() {
      return !!(this.form.username && this.form.password);
    },
  },
  watch: {
    processing(val) {
      this.$emit("processLogin", val);
    },
  },
  methods: {
    setActiveTab() {
      this.$emit("forgotPassword");
    },
    async handleLogin() {
      try {
        this.processing = true;
        const response = await this.$userApiService.login(this.form);
        this.$store.commit('app/setAuthUser', response)
        this.$router.push('/dashboard')
      } catch (error) {
        console.log(error)
        this.$toastr.e(error?.response?.data?.message)
      } finally {
        this.processing = false;
      }
    },
  },
};
</script>
