<template>
  <main>
    <DashboardHeader />
    <div class="mx-3 md:mx-6">
      <table-tabs class="mt-4" />
    </div>
    <section class="bg-white md:rounded-lg p-6 lg:p-10 space-y-10 mx-3 pb-6">
      <div class="lg:flex justify-between items-center space-y-3 lg:space-y-0">
        <div>
          <h6 class="font-semibold text-gray-900">Stori</h6>
        </div>
        <div>
          <div class="flex items-center gap-x-10">
            <img src="@/assets/icons/dashboard/search.svg" cl alt="" />
            <div class="flex items-center gap-x-3">
              <p class="font-semibold text-sm text-gray-600 mt-3">Sort by:</p>
              <select v-model="filter"
                class="outline-none border-none text-sm bg-gray-100 py-2 px-3 rounded-md text-gray-900">
                <option value="popularity">Popularity</option>
              </select>
            </div>
            <img src="@/assets/icons/dashboard/filter.svg" alt="" />
          </div>
        </div>
      </div>
      <EmptyState title="No Stories available" desc="Get started by creating a new stori." v-if="!loadingStories" />
      <LoadingComponent v-if="loadingStories" />
      <StoriesCardList v-else :stories="storiesList" />
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
import EmptyState from '@/components/core/EmptyState.vue';
import LoadingComponent from '@/components/core/LoadingComponent.vue';
import StoriesCardList from "@/components/stories/storiesCardList.vue";
import TableTabs from "@/components/dashboard/TableTabs.vue";
import PaginationTable from "@/components/dashboard/PaginationTable.vue";
export default {
  layout: "dashboard",
  data() {
    return {
      isNotifyUser: false,
      loadingStories: false,
      filter: "",
      storiesList: [],
      isNotificationSuccess: false,
      isRemoveStoriConfirmation: false,
      isRemoveStoriSuccess: false,
      openDropdown: null,
      currentPage: 1,
      totalPages: 10, // Replace with your total pages,
    };
  },
  components: {
    EmptyState,
    LoadingComponent,
    StoriesCardList,
    TableTabs,
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
    async loadStories() {
      try {
        this.loadingStories = true;
        const response = await this.$storiApiService.getAllStories(this.filter);
        this.storiesList = response.result
      } catch (error) {
        this.$toastr.e(error.response.data.message)
      } finally {
        this.loadingStories = false;
      }
    }
  },
  mounted() {
    this.loadStories()
  },
  watch: {
    filter() {
      this.loadStories()
    }
  }
};
</script>

<style></style>
