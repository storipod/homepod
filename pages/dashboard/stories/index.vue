<template>
  <main>
    <DashboardHeader />
    <div class="mx-6">
      <table-tabs />
    </div>
    <section class="bg-white rounded-lg p-6 lg:p-10 space-y-10 mx-6 pb-6">
      <div class="lg:flex justify-between items-center space-y-3 lg:space-y-0">
        <div>
          <h1 class="font-semibold text-gray-900">Stori</h1>
        </div>
        <div>
          <div class="flex items-center gap-x-10">
            <img src="@/assets/icons/dashboard/search.svg" cl alt="" />
            <div class="flex items-center gap-x-1">
              <h1 class="font-semibold text-gray-300">Sort by:</h1>
              <select class="outline-none border-none text-gray-900">
                <option>Newest</option>
                <option>Popularity</option>
                <option>Time</option>
              </select>
            </div>
            <img src="@/assets/icons/dashboard/filter.svg" alt="" />
          </div>
        </div>
      </div>
      <StoriesCardList :stories="stories" />
      <!-- <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
      >
        <div
          v-for="(itm, idx) in stories"
          :key="idx"
          class="rounded-lg border border-gray-200 space-y-6"
        >
          <div class="flex justify-end items-end px-4 pt-4 relative">
            <img
              class="cursor-pointer"
              @click="toggleDropdown(idx)"
              src="@/assets/icons/horizontal-more.svg"
              alt=""
            />
            <div
              v-if="openDropdown === idx"
              class="absolute mt-2 w-40 top-4 h-32 bg-white rounded-lg border-[0.7px] shadow-xl z-50 px-6 pt-6"
            >
              <div class="space-y-3 flex justify-start items-start flex-col">
                <div>
                  <button @click="notifyUser(itm)" class="font-medium">
                    Notify User
                  </button>
                </div>
                <div>
                  <button
                    class="text-red-500 font-medium"
                    @click="removeUser(itm)"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="px-4">
            <img
              src="@/assets/img/stori.png"
              class="h-10 w-10 rounded-full"
              alt=""
            />
          </div>
          <h1 class="px-4 text-sm text-gray-700">{{ itm.desc }}</h1>
          <div class="flex justify-between items-center px-4">
            <img src="@/assets/icons/reactions.svg" alt="" />
            <img src="@/assets/icons/stori-eclipse.svg" alt="" />
          </div>
          <div class="border-t border-gray-300 flex justify-end items-end">
            <p class="text-gray-400 text-sm font-medium px-4 py-4">
              {{ itm.date }}
            </p>
          </div>
        </div>
      </div> -->
      <PaginationTable
        :totalPages="totalPages"
        :currentPage="currentPage"
        @page-changed="updateCurrentPage"
      />
    </section>
    <!-- <notify-user-modal
      :isLoading="isNotifyUser"
      @proceed="handleProceedToNotify"
    />
    <notify-user-success
      :isLoading="isNotificationSuccess"
      @proceed="isNotificationSuccess = false"
      @close="isNotificationSuccess = false"
    />
    <remove-stori-confirmation
      @proceed="handleConfirmRemoveStori"
      @close="isRemoveStoriConfirmation = false"
      :isLoading="isRemoveStoriConfirmation"
    />
    <remove-stori-success
      @close="isRemoveStoriSuccess = false"
      :isLoading="isRemoveStoriSuccess"
    /> -->
  </main>
</template>

<script>
import StoriesCardList from '@/components/stories/storiesCardList.vue'
import NotifyUserModal from "@/components/modals/NotifyUserModal.vue";
import NotifyUserSuccess from "@/components/modals/NotifyUserSuccess.vue";
import RemoveStoriConfirmation from "@/components/modals/RemoveStoriConfirmation.vue";
import RemoveStoriSuccess from "@/components/modals/RemoveStoriSuccess.vue";
import TableTabs from "@/components/dashboard/TableTabs.vue";
import PaginationTable from "@/components/dashboard/PaginationTable.vue";
export default {
  layout: "dashboard",
  data() {
    return {
      isNotifyUser: false,
      isNotificationSuccess: false,
      isRemoveStoriConfirmation: false,
      isRemoveStoriSuccess: false,
      openDropdown: null,
      currentPage: 1,
      totalPages: 10, // Replace with your total pages,
      stories: [
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
    StoriesCardList,
    TableTabs,
    NotifyUserSuccess,
    NotifyUserModal,
    RemoveStoriConfirmation,
    RemoveStoriSuccess,
    PaginationTable,
  },
  methods: {
    toggleDropdown(itmId) {
      if (this.openDropdown === itmId) {
        this.openDropdown = null;
      } else {
        this.openDropdown = itmId;
      }
    },
    updateCurrentPage(newPage) {
      this.currentPage = newPage;
    },
    notifyUser() {
      this.isNotifyUser = true;
    },
    handleProceedToNotify() {
      this.isNotifyUser = false;
      this.isNotificationSuccess = true;
    },
    handleConfirmRemoveStori() {
      this.isRemoveStoriConfirmation = false;
      this.isRemoveStoriSuccess = true;
    },
    removeUser() {
      this.isRemoveStoriConfirmation = true;
    },
  },
};
</script>

<style>
</style>
