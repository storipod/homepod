<template>
  <div>
    <LoadingSpinner />
    <Nuxt />
  </div>
</template>

<script>
import LoadingSpinner from "@/components/LandingPageLoader.vue";
export default {
  components: {
    LoadingSpinner,
  },
  mounted() {
    if (!this.$store?.state?.app?.isLoggedIn) {
      const newQuery = { page: "login" };
      this.$router.push({ path: "/auth", query: newQuery });
    } else {
      this.$router.push({ path: "/dashboard" });
    }
  },
};
</script>
