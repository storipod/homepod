<template>
  <header class="space-y-3 bg-white p-6">
    <section
      class="md:flex space-y-6 md:space-y-0 items-center border-b pb-3 hidden"
    >
      <div class="xl:w-2/12">
        <h1 class="font-medium dark:text-white">
          Welcome James! 😊 {{ form.search }}
        </h1>
      </div>
      <div class="flex w-full flex-grow justify-end">
        <div class="flex items-center gap-x-10">
          <div class="relative w-full">
            <input
              type="text"
              v-model="form.search"
              placeholder="Search keyword"
              class="w-full rounded-md bg-gray-100 px-3 py-2.5 pl-10 text-sm outline-none"
            />
            <img
              src="@/assets/icons/dashboard/search.svg"
              alt=""
              class="absolute left-4 top-2"
            />
          </div>
          <div class="flex justify-between items-center gap-x-4">
            <div>
              <img
                v-if="!isDarkMode"
                @click="toggleDarkMode"
                src="@/assets/icons/dashboard/moon.svg"
                alt=""
                class="cursor-pointer h-8 w-8"
              />
              <img
                v-if="isDarkMode"
                @click="toggleDarkMode"
                src="@/assets/icons/dashboard/light-moon.svg"
                alt=""
                class="cursor-pointer h-8 w-8"
              />
            </div>
            <div>
              <img
                @click="$router.push('/dashboard/users/notify')"
                src="@/assets/icons/dashboard/bell.svg"
                alt=""
                class="cursor-pointer h-8 w-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="flex items-center justify-between border-b pb-3 md:hidden">
      <div class="md:w-2/12">
        <h1 class="font-medium dark:text-white">Welcome James! 😊</h1>
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
      <div>
        <Breadcrumb />
      </div>
      <slot name="action"> </slot>
    </div>
  </header>
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
        search: '',
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
      this.$emit('search', val)
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
