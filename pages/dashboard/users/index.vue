<template>
  <main>
    <DashboardHeader @search="handleSearch" class="">
      <template v-slot:action>
        <nuxt-link to="/dashboard/users/new" type="button"
          class="rounded-md no-underline flex items-center gap-x-3 bg-[#0BA9B9] px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <img src="@/assets/icons/dashboard/white-plus.svg" alt="" />
          Create user
        </nuxt-link>
      </template>
    </DashboardHeader>
    <div class="px-4 sm:px-6 lg:px-8">
      <table-tabs class="mt-4" />
      <div class="flow-root bg-white rounded-md p-3 mt-6 md:mt-0">
        <div class="lg:flex justify-end items-end">
          <div class="lg:flex items-center gap-x-6 space-y-3 lg:space-y-0">
            <div class="flex items-center gap-x-10">
              <img src="@/assets/icons/dashboard/search.svg" cl alt="" />
              <div class="flex items-center gap-x-3">
                <p class="font-semibold text-sm text-gray-600 mt-3">Sort by:</p>
                <select class="outline-none border-none text-sm bg-gray-100 py-2 px-3 rounded-md text-gray-900">
                  <option>Newest</option>
                  <option>Oldest</option>
                </select>
              </div>
              <img src="@/assets/icons/dashboard/filter.svg" alt="" />
            </div>
            <div class="flex items-center">
              <img src="@/assets/icons/dashboard/list.svg" @click="handleTableView('list')" class="cursor-pointer"
                alt="" />
              <img src="@/assets/icons/dashboard/grid.svg" @click="handleTableView('grid')" class="cursor-pointer"
                alt="" />
            </div>
          </div>
        </div>
        <div v-if="tableView === 'list'" class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <UsersTable v-if="usersList.length && !loadingUsers" :usersList="usersList" :loadingUsers="loadingUsers" @selectedUser="handleSelectedUser" />
          <EmptyState v-if="usersList.length <= 0 && !loadingUsers" title="No User available"
            desc="Get started by creating a new user." />
          <!-- <LoadingSpinner v-if="loadingUsers" /> -->
          <LoadingComponent v-if="loadingUsers" />
        </div>
        <UsersCardList v-else :users="usersList" />
      </div>
    </div>

    <b-modal id="removeUserConfirmation" centered hide-header hide-footer>
      <section class="bg-white p-6 space-y-6 max-w-screen-lg rounded-md">
        <div>
          <img src="@/assets/icons/danger.svg" class="h-20 w-20" alt="warning" />
        </div>
        <div>
          <h1 class="font-semibold text-xl">Remove user</h1>
          <p class="text-gray-500">
            Are you sure you want to remove this user? This action cannot be
            undone.
          </p>
        </div>
        <div class="flex justify-end items-end gap-x-3 w-full pt-6">
          <button @click="$bvModal.hide('removeUserConfirmation')"
            class="text-black text-sm font-medium w-full border-gray-400 border px-3 py-3 rounded-lg">
            Cancel
          </button>
          <button :disabled="processingDelete || processingDelete" @click="handleRemoveUser"
            class="bg-[#D92D20] disabled:cursor-not-allowed disabled:opacity-25 text-sm w-full text-white font-medium px-6 py-3 rounded-lg">
            {{ processingDelete ? "processing..." : "Remove" }}
          </button>
        </div>
      </section>
    </b-modal>

    <b-modal id="removeUserSuccess" centered hide-header hide-footer>
      <section class="bg-white p-6 space-y-6 max-w-screen-lg rounded-md">
        <div>
          <img src="@/assets/icons/success.svg" class="h-20 w-20" alt="warning" />
        </div>
        <div>
          <h1 class="font-semibold text-xl">User removed</h1>
          <p class="text-gray-500">
            You have successfully removed this user, kindly note that it cannot
            be recovered.
          </p>
        </div>
        <div class="flex justify-end items-end gap-x-3 w-full pt-6">
          <button @click="$bvModal.hide('removeUserSuccess')"
            class="bg-[#000000] text-sm w-full text-white font-medium px-6 py-3 rounded-lg">
            Close
          </button>
        </div>
      </section>
    </b-modal>

    <b-modal id="activateUserConfirmation" centered hide-header hide-footer>
      <section class="bg-white p-6 space-y-6 max-w-screen-lg rounded-md">
        <div>
          <img src="@/assets/icons/warning.svg" class="h-20 2-10" alt="warning" />
        </div>
        <div>
          <h1 class="font-semibold text-xl">Confirm</h1>
          <p class="text-gray-700">
            Are you sure you want to reactivate this user?
          </p>
        </div>
        <div class="flex justify-end items-end gap-x-3 w-full pt-6">
          <button @click="$bvModal.hide('activateUserConfirmation')"
            class="text-black font-medium text-sm w-full border-gray-400 border px-3 py-2.5 rounded-lg">
            Cancel
          </button>
          <button :disabled="processingActivation" @click="handleUserActivation"
            class="bg-[#0BA9B9] w-full disabled:cursor-not-allowed disabled:opacity-25 text-sm text-white font-medium px-6 py-2.5 rounded-lg">
            {{ processingActivation ? "processing..." : "Proceed" }}
          </button>
        </div>
      </section>
    </b-modal>
    <b-modal id="activateUserSuccess" centered hide-header hide-footer>
      <section class="bg-white p-6 space-y-6 max-w-screen-lg rounded-md">
        <div>
          <img src="@/assets/icons/success.svg" class="h-20 w-20" alt="warning" />
        </div>
        <div>
          <h1 class="font-semibold text-xl">Success</h1>
          <p class="text-gray-700">User account has been reactivated</p>
        </div>
        <div class="flex justify-end items-end gap-x-3 w-full pt-6">
          <button @click="$bvModal.hide('activateUserSuccess')"
            class="bg-[#0BA9B9] w-full text-sm text-white font-medium px-6 py-3 rounded-lg">
            Continue
          </button>
        </div>
      </section>
    </b-modal>

    <b-modal id="userSuspendModal" centered hide-header hide-footer>
      <section class="bg-white p-6 space-y-6 max-w-screen-lg rounded-md">
        <h1 class="font-semibold text-xl text-gray-900 py-1">Suspend</h1>
        <div class="space-y-6">
          <div class="space-y-2 z-0">
            <label class="font-medium text-gray-800 text-sm">Suspension Category</label>
            <select class="bg-gray-50 rounded-md w-full outline-none py-3 text-sm border-gray-300 border pl-3"
              v-model="form.category">
              <option value="" disabled>Select suspension category</option>
              <option value="male">Bribery</option>
              <option value="female">Corruption</option>
            </select>
          </div>
          <div>
            <label for="Indefinately">
              <input v-model="form.indefinately" name="Indefinately" id="Indefinately" type="checkbox" />
              Indefinitely
            </label>
          </div>
          <div class="space-y-2 z-0" v-if="!form.indefinately">
            <div class="font-medium text-gray-800 text-sm">Until:</div>
            <date-picker style="width: 100%" v-model="form.date" valueType="format"></date-picker>
          </div>
        </div>
        <div class="flex justify-end items-end gap-x-3 w-full pt-6">
          <button @click="$bvModal.show('userSuspendModal')" type="button"
            class="text-[#0BA9B9] text-sm font-medium w-full border-gray-400 border px-3 py-3 rounded-lg">
            Cancel
          </button>
          <button :disabled="!isFormEmpty" @click="handleConfirmSuspension" type="button"
            class="bg-[#0BA9B9] text-sm w-full disabled:cursor-not-allowed disabled:opacity-25 text-white font-medium px-6 py-3 rounded-lg">
            Continue
          </button>
        </div>
      </section>
    </b-modal>
    <b-modal id="userSuspendConfirmationModal" centered hide-header hide-footer>
      <section class="bg-white p-6 space-y-6 max-w-screen-lg rounded-md">
        <div>
          <img src="@/assets/icons/warning.svg" class="h-20 w-20" alt="warning" />
        </div>
        <div>
          <h1 class="font-semibold text-xl">Confirm</h1>
          <p class="text-gray-700">
            Are you sure you want to deactivate this user?
          </p>
        </div>
        <div class="flex justify-end items-end gap-x-3 w-full pt-6">
          <button @click="$bvModal.hide('userSuspendConfirmationModal')"
            class="text-black text-sm font-medium w-full border-gray-400 border px-3 py-3 rounded-lg">
            Cancel
          </button>
          <button :disabled="processingSuspension" @click="proceedToSuspendUser"
            class="bg-[#0BA9B9] disabled:opacity-25 disabled:cursor-not-allowed text-sm w-full text-white font-medium px-6 py-3 rounded-lg">
            {{ processingSuspension ? "processing..." : "Proceed" }}
          </button>
        </div>
      </section>
    </b-modal>
    <b-modal id="userSuspendSuccessModal" centered hide-header hide-footer>
      <section class="bg-white p-6 space-y-6 max-w-screen-lg rounded-md">
        <div>
          <img src="@/assets/icons/success.svg" class="h-20 w-20" alt="warning" />
        </div>
        <div>
          <h1 class="font-semibold text-xl">Success</h1>
          <p class="text-gray-700">User account has been deactivated</p>
        </div>
        <div class="flex justify-end items-end gap-x-3 w-full pt-6">
          <button @click="$bvModal.hide('userSuspendSuccessModal')"
            class="bg-[#0BA9B9] text-sm w-full text-white font-medium px-6 py-3 rounded-lg">
            Continue
          </button>
        </div>
      </section>
    </b-modal>
  </main>
</template>

<script>
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import UsersCardList from "@/components/users/UsersCardList.vue";
import DashboardLayout from "@/layouts/dashboard.vue";
import TableTabs from "@/components/dashboard/TableTabs.vue";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import Pagination from "@/components/Pagination.vue";
import EmptyState from '~/components/core/EmptyState.vue';
import LoadingComponent from '@/components/core/LoadingComponent.vue';
export default {
  layout: "dashboard",
  components: {
    DatePicker,
    UsersCardList,
    TableTabs,
    DashboardLayout,
    LoadingSpinner,
    Pagination,
    EmptyState,
    LoadingComponent
  },
  data() {
    return {
      tableView: "list",
      loadingUsers: false,
      processingDelete: false,
      processingActivation: false,
      processingSuspension: false,
      selectedUser: {},
      usersList: [],
      metadata: {},
      currentPage: 1,
      totalPages: 31,
      form: {
        date: "",
        category: "",
        indefinately: true,
      },
    };
  },
  computed: {
    isFormEmpty() {
      return !!(
        this.form.category &&
        (this.form.indefinately || this.form.date)
      );
    },
  },
  methods: {
    handleSelectedUser(data){
      console.log(data, 'data here')
      this.selectedUser = data
    },
    handleTableView(itm) {
      this.tableView = itm;
    },
    updateCurrentPage(newPage) {
      this.currentPage = newPage;
    },
    handleSearch(val) {
      console.log(val, "search val here from users");
    },
    handleRemoveUser() {
      this.processingDelete = true;
      setTimeout(() => {
        this.$bvModal.hide("removeUserConfirmation");
        this.$bvModal.show("removeUserSuccess");
        this.processingDelete = false;
      }, 3000);
    },
    async handleUserActivation() {
      this.processingActivation = true;
      const payload = {
        newStatus: this.selectedUser.isActive ? false : true
      }
      try {
        await this.$userApiService.updateUserStatus(this.selectedUser.id, payload);
        this.$bvModal.hide("activateUserConfirmation");
        this.$bvModal.show("activateUserSuccess");
        this.loadUsers()
      } catch {
        this.$toastr.e(error.response.data.message)
      }finally {
        this.processingActivation = false;
      }
    },
    async proceedToSuspendUser() {
      this.$bvModal.hide("userSuspendModal");
      this.$bvModal.show("userSuspendConfirmationModal");
      this.processingSuspension = true;
      const payload = {
        newStatus: this.selectedUser.isActive ? false : true
      }
      try {
        await this.$userApiService.updateUserStatus(this.selectedUser.id, payload);
        this.$bvModal.hide("userSuspendConfirmationModal");
        this.$bvModal.show("userSuspendSuccessModal");
        this.loadUsers()
      } catch {
        this.$toastr.e(error.response.data.message)
      }finally {
        this.processingSuspension = false;
      }
    },
    handleConfirmSuspension() {
      this.$bvModal.hide("userSuspendModal");
      this.$bvModal.show("userSuspendConfirmationModal");
    },
    async loadUsers() {
      try {
        this.loadingUsers = true;
        const response = await this.$userApiService.getAllUsers();
        console.log(response, 'here')
        this.usersList = response.result
      } catch (error) {
        this.$toastr.e(error.response.data.message)
      } finally {
        this.loadingUsers = false;
      }
    },
  },
  mounted() {
    this.loadUsers()
  }
};
</script>
