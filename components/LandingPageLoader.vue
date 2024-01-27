<template>
  <div
    v-if="isLoading"
    class="fixed inset-0 bg-black bg-opacity-100 flex justify-center items-center z-50"
  >
    <div class="flex flex-col items-center">
      <img
      src="@/assets/img/homepod.png"
      alt="Descriptive Alt Text"
      class="scale-in-out h-60 w-full"
    />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    window.addEventListener("load", () => {
      this.isLoading = false;
      const newQuery = { page: "login" };
      this.$router.push({ path: "/auth", query: newQuery });
    });
  },
};
</script>

<style>
.spinner {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid white;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes scaleInOut {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.scale-in-out {
  animation: scaleInOut 3s ease-in-out infinite;
}
</style>
