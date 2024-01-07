<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    const newQuery = { page: "login" };
    this.$router.push({ path: "/auth", query: newQuery });
  },
};
</script>
