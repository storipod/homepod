<template>
  <main
    class="w-full p-6 relative flex flex-col h-screen dark:border-r dark:border-white"
  >
    <div class="flex-grow">
      <img src="@/assets/icons/homepod-black.svg" alt="" class="dark:hidden" />
      <img src="@/assets/img/mobileLogo.png" alt="" class="hidden" />
      <div v-for="({ header, children }, idx) in sidebarItems" :key="idx">
        <h2
          :class="[header ? 'border-b-[0.2px] border-gray-300' : '']"
          class="py-3 pb-3 text-sm text-[#B3BBCA]"
        >
          {{ header }}
        </h2>
        <div class="w-full space-y-1 rounded">
          <nuxt-link
            v-for="itm in children"
            :key="itm.title"
            class="flex w-full items-center gap-x-3 no-underline rounded-md px-3 py-2.5 leading-loose text-black dark:text-white"
            :to="itm.urlPath"
            ><img
              :src="require(`@/assets/icons/dashboard/${itm.icon}.svg`)"
              alt=""
            />
            {{ itm.title }}
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="w-full">
      <button
        @click="handleLogout"
        class="bg-[#0cb0bd] flex items-center gap-x-3 w-full rounded-md justify-center py-2.5"
      >
        <img
          src="@/assets/icons/dashboard/avatar.svg"
          alt=""
          class="h-10 w-10"
        />
        <span class="font-medium text-gray-900 text-sm">James Nelson</span>
      </button>
    </div>
  </main>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      isDarkMode: false,
      sidebarItems: [
        {
          header: "",
          children: [
            {
              urlPath: "/dashboard",
              title: "Dashboard",
              icon: "user",
            },
          ],
        },
        {
          header: "MANAGE",
          children: [
            {
              urlPath: "/dashboard/users",
              title: "Users",
              icon: "user",
            },
            {
              urlPath: "/dashboard/stories",
              title: "Stories",
              icon: "stories",
            },
            {
              urlPath: "/dashboard/ad-service",
              title: "Ad Service",
              icon: "ad",
            },
          ],
        },
        {
          header: "SYSTEM",
          children: [
            {
              urlPath: "/dashboard/admin",
              title: "Admin",
              icon: "admin",
            },
            {
              urlPath: "/dashboard/config",
              title: "Configuration",
              icon: "config",
            },
          ],
        },
      ],
    };
  },
  computed: {
    theme() {
      if (process.client) {
        return localStorage.getItem("theme");
      }
    },
  },
  methods: {
    handleLogout() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, logout!",
      }).then((result) => {
        if (result.value) {
          this.$router.push("/auth");
        } else {
          this.$swal("Cancelled", "You're still logged in!", "info");
        }
      });
    },
  },
};
</script>

<style scoped>
.nuxt-link-exact-active {
  background-color: #0ba9b9;
  color: white;
}
</style>
