<template>
  <main>
    <div class="lg:flex">
      <div class="lg:w-6/12 h-screen">
        <login-component v-if="$route.query.page === 'login'" @forgotPassword="setActiveTab"
          @processAdminLogin="handleLogin" />
        <forgot-password-component v-else-if="$route.query.page === 'forgot'" @success="handleForgotPasswordSuccess"
          @redirectLogin="navigateToLogin" />
        <email-sent-success v-else-if="$route.query.page === 'success'" @redirectLogin="navigateToLogin" />
      </div>
      <div v-if="$route.query.page === 'login' || $route.query.page === 'forgot' || $route.query.page === 'success'"
        class="lg:w-6/12 hidden lg:block h-screen">
        <section
          class="relative hidden h-32 items-center justify-center bg-[#EBFFFF] lg:col-span-5 lg:flex lg:h-full xl:col-span-6">
          <div class="absolute right-10 top-4 flex items-end justify-end">
            <div class="flex items-center gap-x-10">
              <nuxt-link class="no-underline text-gray-800" to="#">Terms</nuxt-link>
              <nuxt-link class="no-underline text-gray-800" to="#">Privacy</nuxt-link>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center">
            <p v-if="$route.query.page === 'login'" class="text-lg font-medium leading-loose tracking-wider py-0 my-0">
              “Transforming data into actionable insights.”
            </p>
            <!-- <div class=""> -->
            <img alt="Login Animated Image" src="@/assets/icons/animated-login.svg"
              class="object-cover object-center" />
            <!-- </div> -->
            <div v-if="$route.query.page === 'login'" class="">
              <h2 class="mt-6 text-center text-2xl font-bold sm:text-3xl md:text-xl">
                Read. Write . Create
              </h2>
              <p class="mt-0 text-center leading-relaxed text-[#737876]">
                Homepod Tells us about Storipod and Storipod is feeling
              </p>
            </div>
            <p v-else-if="$route.query.page === 'forgot'" class="mt-4 text-center leading-relaxed text-[#737876]">
              Easily retrieve your password via email recovery.
            </p>
            <div v-if="$route.query.page === 'login'" class="flex w-full items-center justify-between pt-10">
              <div>
                <img src="@/assets/icons/arrow-left.svg" alt="" />
              </div>
              <div class="flex items-center justify-between gap-x-3">
                <img src="@/assets/icons/active-eclipse.svg" alt="" />
                <img src="@/assets/icons/eclipse.svg" alt="" />
                <img src="@/assets/icons/eclipse.svg" alt="" />
              </div>
              <div>
                <img src="@/assets/icons/arrow-right.svg" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <Spinner :isLoading="isLoading" />
  </main>
</template>

<script>
import Spinner from "@/components/LoadingSpinner.vue";
export default {
  components: {
    Spinner,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  mounted() {
    const newQuery = { page: "login" };
    this.$router.push({ path: "/auth", query: newQuery });
  },
  methods: {
    handleLogin(val) {
      this.isLoading = true;
    },
    setActiveTab() {
      const newQuery = { page: "forgot" };
      this.$router.push({ query: newQuery });
    },
    handleForgotPasswordSuccess() {
      const newQuery = { page: "success" };
      this.$router.push({ query: newQuery });
    },

    navigateToLogin() {
      const newQuery = { page: "login" };
      this.$router.push({ query: newQuery });
    }
  }
};
</script>
