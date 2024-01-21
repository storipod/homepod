<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    if (!this.$store.state?.auth?.auth?.isLoggedIn) {
      const newQuery = { page: "login" };
      this.$router.push({ path: "/auth", query: newQuery });
    } else {
      this.$router.push({ path: "/dashboard" });
    }
  },
};
</script>
