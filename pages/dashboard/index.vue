<template>
  <main class="">
    <DashboardHeader @search="handleDashboardSearch" />
    <div class="p-4 md:px-10 space-y-10" v-if="!search.length">
      <SectionOne :loading="loading" v-if="stats" :stats="stats" />
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <div v-for="itm in 4" :key="itm" class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="rounded-full bg-slate-700 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section-two />
      <section-three />
    </div>
    <div v-else class="bg-white rounded-lg m-6 mx-10 p-6 space-y-6">
      <div class="flex justify-between items-center">
        <h3 class="text-2xl font-semibold">Search Result “{{ search }}”</h3>
        <div class="flex items-center gap-x-3">
          <p class="text-gray-600">Show results from:</p>
          <select class="outline-none px-6 py-2 bg-gray-100 rounded-lg text-sm">
            <option>All</option>
          </select>
        </div>
      </div>
      <div class="space-y-6">
        <p>More</p>
        <div class="flex items-center gap-x-3">
          <img src="@/assets/icons/sad-search.svg" alt="" />
          <p class="font-medium text-gray-900">No exact match found</p>
        </div>
      </div>
      <div class="space-y-6">
        <div class="border-t border-gray-300 space-y-4 py-6">
          <h6 class="font-semibold text-gray-800">User</h6>
          <div class="flex">
            <UsersCardList class="w-10/12 py-0 my-0" :users="filteredUsers.slice(0, 5)" />
            <div @click="$router.push('/dashboard/users')"
              class="w-2/12 cursor-pointer bg-white shadow h-[270px] rounded-lg border-gray-400 border-2 border-dashed mt-4 flex justify-center items-center">
              <div class="flex justify-center items-center flex-col gap-y-4">
                <p class="font-bold text-gray-950 h-20 w-20 rounded-full flex justify-center items-center bg-gray-200">
                  +450
                </p>
                <p class="font-semibold text-gray-500">See more</p>
              </div>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-300 space-y-4 py-6">
          <h6 class="font-semibold text-gray-800">Stories</h6>
          <div class="flex gap-x-6">
            <StoriesCardList class="w-full" :stories="storiesList.slice(0, 5)" />
            <div @click="$router.push('/dashboard/stories')"
              class="w-2/12 cursor-pointer bg-white shadow h-[340px] rounded-lg border-gray-400 border-2 border-dashed mt-1 flex justify-center items-center">
              <div class="flex justify-center items-center flex-col gap-y-4">
                <p class="font-bold text-gray-950 h-20 w-20 rounded-full flex justify-center items-center bg-gray-200">
                  +930
                </p>
                <p class="font-semibold text-gray-500">See more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import StoriesCardList from "@/components/stories/storiesCardList.vue";
import UsersCardList from "@/components/users/UsersCardList.vue";
import DashboardHeader from "@/components/dashboard/DashboardHeader.vue";
import SectionTwo from "@/components/dashboard/SectionTwo.vue";
import SectionOne from "@/components/dashboard/SectionOne.vue";
import SectionThree from "@/components/dashboard/SectionThree.vue";
export default {
  layout: "dashboard",
  data() {
    return {
      search: "",
      stats: null,
      loading: false,
      usersList: [
        {
          id: 1,
          avatar: "avatar-girl",
          username: "marquis",
          fname: "Marquis",
          lname: "Abah",
          interest: "Funky gists",
          interest_count: "+3",
          phone: "080007120090",
          email: "marquis@gmail.com",
          stori: "96",
          isActive: true,
        },
        {
          id: 2,
          avatar: "avatar-girl",
          username: "victor",
          fname: "Chinedu",
          lname: "Victor",
          interest: "Funky gists",
          interest_count: "",
          phone: "080007120090",
          email: "victor@gmail.com",
          stori: "96",
          isActive: false,
        },
        {
          id: 3,
          avatar: "avatar-girl",
          username: "alex",
          fname: "Alex",
          lname: "Akpan",
          interest: "Funky gists",
          interest_count: "",
          phone: "080007120090",
          email: "alex@gmail.com",
          stori: "96",
          isActive: true,
        },
        {
          id: 2,
          avatar: "avatar-girl",
          username: "victor",
          fname: "Chinedu",
          lname: "Victor",
          interest: "Funky gists",
          interest_count: "",
          phone: "080007120090",
          email: "victor@gmail.com",
          stori: "96",
          isActive: false,
        },
        {
          id: 3,
          avatar: "avatar-girl",
          username: "alex",
          fname: "Alex",
          lname: "Akpan",
          interest: "Funky gists",
          interest_count: "",
          phone: "080007120090",
          email: "alex@gmail.com",
          stori: "96",
          isActive: true,
        },
        {
          id: 2,
          avatar: "avatar-girl",
          username: "victor",
          fname: "Chinedu",
          lname: "Victor",
          interest: "Funky gists",
          interest_count: "",
          phone: "080007120090",
          email: "victor@gmail.com",
          stori: "96",
          isActive: false,
        },
        {
          id: 3,
          avatar: "avatar-girl",
          username: "alex",
          fname: "Alex",
          lname: "Akpan",
          interest: "Funky gists",
          interest_count: "",
          phone: "080007120090",
          email: "alex@gmail.com",
          stori: "96",
          isActive: true,
        },
      ],
      storiesList: [
        {
          image: "",
          desc: "Courtney Brown is here to give y’all premium gist. Follow Courtney Brown ",
          count: "200",
          date: "24th August, 2022",
        },
        {
          image: "",
          desc: "Courtney Brown is here to give y’all premium gist. Follow Courtney Brown ",
          count: "200",
          date: "24th August, 2022",
        },
        {
          image: "",
          desc: "Courtney Brown is here to give y’all premium gist. Follow Courtney Brown ",
          count: "200",
          date: "24th August, 2022",
        },
        {
          image: "",
          desc: "Courtney Brown is here to give y’all premium gist. Follow Courtney Brown ",
          count: "200",
          date: "24th August, 2022",
        },
        {
          image: "",
          desc: "Courtney Brown is here to give y’all premium gist. Follow Courtney Brown ",
          count: "200",
          date: "24th August, 2022",
        },
        {
          image: "",
          desc: "Courtney Brown is here to give y’all premium gist. Follow Courtney Brown ",
          count: "200",
          date: "24th August, 2022",
        },
        {
          image: "",
          desc: "Courtney Brown is here to give y’all premium gist. Follow Courtney Brown ",
          count: "200",
          date: "24th August, 2022",
        },
        {
          image: "",
          desc: "Courtney Brown is here to give y’all premium gist. Follow Courtney Brown ",
          count: "200",
          date: "24th August, 2022",
        },
      ],
    };
  },
  components: {
    SectionTwo,
    SectionOne,
    SectionThree,
    DashboardHeader,
    StoriesCardList,
    UsersCardList,
  },
  methods: {
    handleDashboardSearch(val) {
      this.search = val;
    },
    async init() {
      this.loading = true;
      try {
        const results = await Promise.allSettled([
          this.$userApiService.getActiveUsers(),
          this.$storiApiService.getAllStories(),
          this.$userApiService.fetchUserEngagements(),
          this.$userApiService.fetchUserSignups(),
        ]);
        console.log(results)
        const [activeUsers, allStories, userEngagements, userSignups] = results.map(result =>
          result.status === 'fulfilled' ? result.value : null
        );
        this.stats = { activeUsers, allStories, userEngagements, userSignups };
      } catch (error) {
        console.log(error, 'error here')
      } finally {
        this.loading = false;
      }
    }
  },
  computed: {
    filteredUsers() {
      if (!this.search.length) {
        return this.usersList;
      } else {
        const searchItem = this.search.toLowerCase();
        const filtered = this.usersList.filter((user) => {
          user.username.toLowerCase().includes(searchItem) ||
            user.fname.toLowerCase().includes(searchItem) ||
            user.email.toLowerCase().includes(searchItem) ||
            user.lname.toLowerCase().includes(searchItem);
        });
        return filtered.length > 0 ? filtered : this.usersList;
      }
    }
  },
  watch: {
    search(val) {
      console.log(val, "search was changed");
    },
  },
  mounted() {
    this.init()
  }
};
</script>
