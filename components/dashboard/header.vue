<template>
  <main>
    <div class="space-y-3 bg-white p-6">
      <section class="md:flex space-y-6 md:space-y-0 items-center border-b pb-3 hidden">
        <div class="xl:w-2/12">
          <h6 class="font-medium dark:text-white"> Welcome {{ username ?? 'N/A' }}! 😊</h6>
        </div>
        <div class="flex w-full flex-grow justify-end">
          <div class="flex items-center gap-x-10">
            <div class="relative w-full">
              <input type="text" placeholder="Search keyword"
                class="w-full rounded-md bg-gray-100 px-3 py-2.5 pl-10 text-sm outline-none" />
              <img src="@/assets/icons/dashboard/search.svg" alt="" class="absolute left-4 top-2" />
            </div>
            <div class="flex justify-between items-center gap-x-4">
              <div>
                <img v-if="!isDarkMode" @click="toggleDarkMode" src="@/assets/icons/dashboard/moon.svg" alt=""
                  class="cursor-pointer h-8 w-8" />
                <img v-if="isDarkMode" @click="toggleDarkMode" src="@/assets/icons/dashboard/light-moon.svg" alt=""
                  class="cursor-pointer h-8 w-8" />
              </div>
              <div>
                <img @click="$router.push('/dashboard/users/notify')" src="@/assets/icons/dashboard/bell.svg" alt=""
                  class="cursor-pointer h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="flex items-center justify-between border-b pb-3 md:hidden">
        <div class="md:w-2/12">
          <h6 class="font-medium dark:text-white"> Welcome {{ username ?? 'N/A' }}! 😊</h6>
        </div>
        <div class="flex justify-between items-center gap-x-4">
          <div>
            <!-- <img
              v-if="!isDarkMode"
              @click="toggleDarkMode"
              src="@/assets/icons/dashboard/moon.svg"
              alt=""
              class="cursor-pointer h-6 w-6"
            /> -->
            <img @click="toggleDarkMode" src="@/assets/icons/dashboard/light-moon.svg" alt=""
              class="cursor-pointer h-6 w-6" />
          </div>
          <div>
            <!-- <img
              v-if="isDarkMode"
              src="@/assets/icons/dashboard/white-hamburger.svg"
              alt=""
              @click="toggleSidebar"
              class="cursor-pointer h-6 w-6"
            /> -->
            <img src="@/assets/icons/dashboard/black-hamburger.svg" alt="" @click="toggleSidebar"
              class="cursor-pointer h-6 w-6" />
          </div>
        </div>
      </section>
      <section>
        <!-- <div class="flex items-center gap-x-3">
          <p class="text-gray-300 dark:text-white">Home</p>
          <p>
            <img src="@/assets/icons/dashboard/right-breadcrum.svg" alt="" />
          </p>
          <p class="dark:text-white">Dashboard</p>
        </div> -->
        <Breadcrumb />
      </section>
    </div>
    <div :class="[
            'fixed inset-y-0 left-0 z-30 transition duration-300 ease-in-out',
            showSidebar ? 'translate-x-0' : '-translate-x-full',
          ]" class="w-64 bg-white shadow-md">
      <nav>
        <main class="w-full p-6 relative flex flex-col h-screen">
          <div class="flex-grow relative">
            <img v-if="!isDarkMode" src="@/assets/icons/homepod-black.svg" alt="" />
            <img v-if="isDarkMode" src="@/assets/img/mobileLogo.png" class="px-3" alt="" />
            <div v-for="({ header, children }, idx) in sidebarItems" :key="idx">
              <h2 :class="[header ? 'border-b-[0.2px] border-gray-300' : '']" class="py-3 pb-3 text-[#B3BBCA]">
                {{ header }}
              </h2>
              <div class="w-full space-y-1 rounded">
                <NuxtLink v-for="itm in children" @click.native="toggleSidebar" :key="itm.title"
                  class="flex w-full items-center gap-x-3 rounded-md px-3 py-2.5 leading-loose text-black dark:text-white"
                  :to="itm.urlPath"><img :src="require(`@/assets/icons/dashboard/${itm.icon}.svg`)" alt="" />
                  {{ itm.title }}
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="w-full">
            <button class="bg-[#0cb0bd] flex items-center gap-x-3 w-full rounded-md justify-center py-2.5">
              <img src="@/assets/icons/dashboard/avatar.svg" alt="" class="h-10 w-10" />
              <span class="font-medium text-gray-900 text-sm">{{ username ?? 'N/A' }}</span>
            </button>
          </div>
        </main>
      </nav>
    </div>
  </main>
</template>

<script>
import Breadcrumb from "@/components/dashboard/Breadcrumb.vue";
import SidebarComponent from "@/components/dashboard/sidebar.vue";
import HeaderBreadcrumbs from "./HeaderBreadcrumbs.vue";
export default {
  components: {
    SidebarComponent,
    HeaderBreadcrumbs,
    Breadcrumb,
  },
  data() {
    return {
      isDarkMode: false,
      showSidebar: true,
      user: {},
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
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    },
    toggleSidebar() {
      console.log("hello world");
      alert("hello world");
      this.showSidebar = !this.showSidebar;
    },
  },
  mounted() {
    this.isDarkMode = localStorage.getItem("theme") === "dark";
    if (this.isDarkMode) {
      document.documentElement.classList.add("dark");
    }

    if (this.$store?.state?.app?.isLoggedIn) {
      this.user = this.$store?.state?.app?.auth?.user
    }
  },
  computed: {
    username() {
      return Object.keys(this.$store?.state).length ? `${this?.user?.firstname} ${this?.user?.lastname}` : ''
    }
  }
};
</script>

<style scoped>
.nuxt-link-exact-active {
  background-color: black;
  color: white;
}
</style>
