<template>
  <main>
    <header class="space-y-3 bg-white px-6 py-3">
      <section
        class="md:flex space-y-6 md:space-y-0 items-center border-b hidden"
      >
        <div class="xl:w-2/12">
          <h6 class="font-medium text-sm md:text-lg">
            Welcome James! 😊
          </h6>
        </div>
        <div class="flex w-full flex-grow justify-end">
          <div class="flex items-center gap-x-10 pb-3">
            <div class="relative w-full">
              <input
                type="text"
                v-model="form.search"
                placeholder="Search keyword"
                class="w-full rounded-md bg-gray-100 px-3 py-2.5 pl-32 text-sm outline-none"
              />
              <img
                src="@/assets/icons/dashboard/search.svg"
                alt=""
                class="absolute left-2 top-2"
              />
            </div>
            <div class="flex justify-between items-center gap-x-4">
              <div>
                <img
                  @click="toggleDarkMode"
                  src="@/assets/icons/dashboard/moon.svg"
                  alt=""
                  class="cursor-pointer h-8 w-8"
                />
                <!-- <img
                  v-if="isDarkMode"
                  @click="toggleDarkMode"
                  src="@/assets/icons/dashboard/light-moon.svg"
                  alt=""
                  class="cursor-pointer h-8 w-8"
                /> -->
              </div>
              <div>
                <img
                  src="@/assets/icons/dashboard/bell.svg"
                  alt=""
                  class="cursor-pointer h-8 w-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="flex items-center justify-between border-b pb-3 md:hidden"
      >
        <div class="md:w-2/12">
          <h6 class="font-medium dark:text-white">Welcome James! 😊</h6>
        </div>
        <div class="flex justify-between items-center gap-x-4">
          <div>
            <img
              v-if="!isDarkMode"
              @click="toggleDarkMode"
              src="@/assets/icons/dashboard/moon.svg"
              alt=""
              class="cursor-pointer h-6 w-6"
            />
            <img
              v-if="isDarkMode"
              @click="toggleDarkMode"
              src="@/assets/icons/dashboard/light-moon.svg"
              alt=""
              class="cursor-pointer h-6 w-6"
            />
          </div>
          <div>
            <img
              v-if="isDarkMode"
              src="@/assets/icons/dashboard/white-hamburger.svg"
              alt=""
              @click="toggleSidebar"
              class="cursor-pointer h-6 w-6"
            />
            <img
              v-if="!isDarkMode"
              src="@/assets/icons/dashboard/black-hamburger.svg"
              alt=""
              @click="toggleSidebar"
              class="cursor-pointer h-6 w-6"
            />
          </div>
        </div>
      </section>
      <div class="text-white flex justify-between items-center">
        <Breadcrumb />
        <slot name="action"> </slot>
      </div>
    </header>
    <div
      :class="[
        'fixed inset-y-0 left-0 z-30 transition duration-300 ease-in-out',
        showSidebar ? 'translate-x-0' : '-translate-x-full',
      ]"
      class="w-64 bg-white shadow-md"
    >
      <nav>
        <main class="w-full p-6 relative flex flex-col h-screen">
          <div class="flex-grow relative">
            <img
              v-if="!isDarkMode"
              src="@/assets/icons/homepod-black.svg"
              alt=""
            />
            <img
              v-if="isDarkMode"
              src="@/assets/img/mobileLogo.png"
              class="px-3"
              alt=""
            />
            <div v-for="({ header, children }, idx) in sidebarItems" :key="idx">
              <h6
                :class="[header ? 'border-b-[0.2px] border-gray-300' : '']"
                class="py-3 pb-3 text-[#B3BBCA]"
              >
                {{ header }}
              </h6>
              <div class="w-full space-y-1 rounded">
                <nuxt-link
                  v-for="itm in children"
                  @click.native="toggleSidebar"
                  :key="itm.title"
                  class="flex w-full no-underline items-center gap-x-3 text-gray-500 rounded-md px-3 py-2.5 leading-loose dark:text-white"
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
              class="bg-[#0cb0bd] flex items-center gap-x-3 w-full rounded-md justify-center py-2.5"
            >
              <img
                src="@/assets/icons/dashboard/avatar.svg"
                alt=""
                class="h-10 w-10"
              />
              <span class="font-medium text-gray-900 text-sm"
                >James Nelson</span
              >
            </button>
          </div>
        </main>
      </nav>
    </div>
  </main>
</template>

<script>
import { useSearch } from "@/composables/useSearch";
const { setSearch, search } = useSearch();
import Breadcrumb from "@/components/dashboard/Breadcrumb.vue";
export default {
  name: "DashboardHeader",
  components: {
    Breadcrumb,
  },
  data() {
    return {
      isDarkMode: false,
      form: {
        search: "",
      },
      showSidebar: false,
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
      this.showSidebar = !this.showSidebar;
    },
  },
  mounted() {
    this.isDarkMode = localStorage.getItem("theme") === "dark";
    if (this.isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  },
  watch: {
    "form.search"(val) {
      setSearch(val);
      this.$emit("search", val);
    },
  },
};
</script>
<style scoped>
.nuxt-link-exact-active {
  background-color: black;
  color: white;
}
</style>
