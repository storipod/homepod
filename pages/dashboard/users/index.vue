<template>
  <main>
    <DashboardHeader @search="handleSearch" class="">
      <template v-slot:action>
        <nuxt-link
          to="/dashboard/users/new"
          type="button"
          class="rounded-md flex items-center gap-x-3 bg-[#0BA9B9] px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <img src="@/assets/icons/dashboard/white-plus.svg" alt="" />
          Create user
        </nuxt-link>
      </template>
    </DashboardHeader>
    <div class="px-4 sm:px-6 lg:px-8">
      <table-tabs />
      <div class="flow-root bg-white rounded-md p-3 mt-6 md:mt-0">
        <div class="lg:flex justify-end items-end">
          <div class="lg:flex items-center gap-x-6 space-y-3 lg:space-y-0">
            <div class="flex items-center gap-x-10">
              <img src="@/assets/icons/dashboard/search.svg" cl alt="" />
              <div class="flex items-center gap-x-1">
                <h1 class="font-semibold text-gray-300">Sort by:</h1>
                <select class="outline-none border-none text-gray-900">
                  <option>Newest</option>
                  <option>Oldest</option>
                </select>
              </div>
              <img src="@/assets/icons/dashboard/filter.svg" alt="" />
            </div>
            <div class="flex items-center">
              <img
                src="@/assets/icons/dashboard/list.svg"
                @click="handleTableView('list')"
                class="cursor-pointer"
                alt=""
              />
              <img
                src="@/assets/icons/dashboard/grid.svg"
                @click="handleTableView('grid')"
                class="cursor-pointer"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          v-if="tableView === 'list'"
          class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"
        >
          <div
            class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
          >
            <div class="relative">
              <div
                v-if="selectedPeople.length > 0"
                class="absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12"
              >
                <button
                  type="button"
                  class="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                >
                  Bulk edit
                </button>
                <button
                  type="button"
                  class="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                >
                  Delete all
                </button>
              </div>
              <table class="min-w-full table-fixed divide-y divide-gray-300">
                <thead class="">
                  <tr>
                    <th scope="col" class="relative px-7 sm:w-12 sm:px-6">
                      <input
                        type="checkbox"
                        class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        :checked="
                          indeterminate ||
                          selectedPeople.length === people.length
                        "
                        :indeterminate="indeterminate"
                        @change="
                          selectedPeople = $event.target.checked
                            ? people.map((p) => p.email)
                            : []
                        "
                      />
                    </th>
                    <th
                      scope="col"
                      class="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Avatar
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Username
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      First name
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Last name
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Interest(s)
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Phone no.
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      No. of Stori(s)
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <tr
                    class="odd:bg-gray-50"
                    v-for="(person, index) in people"
                    :key="person.email"
                    :class="[
                      selectedPeople.includes(person.email) && 'bg-gray-50',
                    ]"
                  >
                    <td class="relative px-7 sm:w-12 sm:px-6">
                      <div
                        v-if="selectedPeople.includes(person.email)"
                        class="absolute inset-y-0 left-0 w-0.5 bg-indigo-600"
                      ></div>
                      <input
                        type="checkbox"
                        class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        :value="person.email"
                        v-model="selectedPeople"
                      />
                    </td>
                    <td
                      :class="[
                        'whitespace-nowrap py-4 pr-3 text-sm font-medium',
                        selectedPeople.includes(person.email)
                          ? 'text-indigo-600'
                          : 'text-gray-900',
                      ]"
                    >
                      <image-zoom
                        class="h-10 w-10"
                        :src="
                          require(`@/assets/icons/dashboard/${person.avatar}.svg`)
                        "
                      />
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      <nuxt-link
                        :to="`/dashboard/users/${person.id}`"
                        class="font-medium text-blue-600"
                        >{{ person.username }}</nuxt-link
                      >
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      <nuxt-link :to="`/dashboard/users/${person.id}`">{{
                        person.fname
                      }}</nuxt-link>
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      <nuxt-link :to="`/dashboard/users/${person.id}`">{{
                        person.lname
                      }}</nuxt-link>
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-[#6941C6] font-semibold"
                    >
                      <span class="bg-[#F9F5FF] rounded-full px-3 py-2">{{
                        person.interest
                      }}</span>
                      <span
                        v-if="person.interest_count"
                        class="bg-[#EEF4FF] text-[#6941C6] rounded-full px-3 py-2"
                        >{{ person.interest_count }}</span
                      >
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      <nuxt-link :to="`/dashboard/users/${person.id}`">{{
                        person.phone
                      }}</nuxt-link>
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      <nuxt-link :to="`/dashboard/users/${person.id}`">{{
                        person.email
                      }}</nuxt-link>
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      <nuxt-link :to="`/dashboard/users/${person.id}`">{{
                        person.stori
                      }}</nuxt-link>
                    </td>
                    <td
                      class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3 relative"
                    >
                      <img
                        @click="toggleDropdown(index)"
                        src="@/assets/icons/dashboard/more.svg"
                        class="cursor-pointer"
                        alt=""
                      />
                      <div
                        v-if="openDropdown === index"
                        class="absolute right-14 top-8 mt-2 w-40 h-32 bg-white rounded-lg shadow-xl z-50 px-6 pt-6"
                      >
                        <div
                          class="space-y-3 flex justify-start items-start flex-col"
                        >
                          <div>
                            <button @click="editUser(person)">Edit</button>
                          </div>
                          <div>
                            <button
                              class="text-red-500"
                              @click="removeUser(person)"
                            >
                              Remove User
                            </button>
                          </div>
                          <div>
                            <button
                              :class="{
                                'text-red-500': person.isActive,
                                'text-green-500': !person.isActive,
                              }"
                              @click="toggleUserStatus(person)"
                            >
                              {{ person.isActive ? "Suspend" : "Unsuspend" }}
                              User
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="lg:flex justify-end items-end lg:pr-6 pt-6 hidden">
            <PaginationTable
              :totalPages="totalPages"
              :currentPage="currentPage"
              @page-changed="updateCurrentPage"
            />
          </div>
        </div>
        <UsersCardList v-else :users="people" />
        <!-- <div
          v-else
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4"
        >
          <div
            v-for="person in people"
            :key="person.email"
            class="flex justify-center items-center flex-col gap-y-3 bg-white rounded-lg border border-gray-200 py-10"
          >
            <image-zoom
              class="h-20 w-20 cursor-pointer"
              :src="require(`@/assets/icons/dashboard/${person.avatar}.svg`)"
            />
            <p class="font-bold text-lg">{{ person.fname }}</p>
            <p class="text-gray-400">{{ person.username }}</p>
          </div>
        </div> -->
      </div>
    </div>
    <!-- <remove-user-confirmation-modal
      @proceed="handleProceedRemoval"
      @close="isConfirmingRemoveUser = false"
      :isLoading="isConfirmingRemoveUser"
    />
    <remove-user-success-modal
      @close="isRemoveUserSuccess = false"
      @proceed="isRemoveUserSuccess = false"
      :isLoading="isRemoveUserSuccess"
    />
    <activate-user-confirmation-modal
      @close="isConfirmingActivateUser = false"
      @proceed="handleProceedActivation"
      :isLoading="isConfirmingActivateUser"
    />
    <activate-user-success-modal
      @close="isActivateUserSuccess = false"
      @proceed="isActivateUserSuccess = false"
      :isLoading="isActivateUserSuccess"
    />
    <user-suspend-modal
      :isLoading="isSuspendModal"
      @close="isSuspendModal = false"
      @proceedSuspension="isSuspendModal = false"
    />
    <user-suspend-confirmation
      :isLoading="isSuspendConfirmationModal"
      @close="isSuspendConfirmationModal = false"
      @proceed="handleSuspendConfirmation"
    />
    <user-suspend-success
      :isLoading="isSuspendSuccessModal"
      @close="isSuspendSuccessModal = false"
      @proceed="isSuspendSuccessModal = false"
    /> -->
  </main>
</template>

<script>
import UsersCardList from "@/components/users/UsersCardList.vue";
import DashboardLayout from "@/layouts/dashboard.vue";
import ImageZoom from "@/components/dashboard/ImageZoom.vue";
import TableTabs from "@/components/dashboard/TableTabs.vue";
import PaginationTable from "@/components/dashboard/PaginationTable.vue";
import ActivateUserConfirmationModal from "@/components/modals/ActivateUserConfirmationModal.vue";
import ActivateUserSuccessModal from "@/components/modals/ActivateUserSuccessModal.vue";
import RemoveUserConfirmationModal from "@/components/modals/RemoveUserConfirmationModal.vue";
import RemoveUserSuccessModal from "@/components/modals/RemoveUserSuccessModal.vue";
import UserSuspendModal from "@/components/modals/UserSuspendModal.vue";
import UserSuspendConfirmation from "@/components/modals/UserSuspendModal.vue";
import UserSuspendSuccess from "@/components/modals/UserSuspendModal.vue";
export default {
  layout: "dashboard",
  components: {
    ImageZoom,
    UsersCardList,
    TableTabs,
    DashboardLayout,
    PaginationTable,
    RemoveUserConfirmationModal,
    ActivateUserConfirmationModal,
    ActivateUserSuccessModal,
    RemoveUserSuccessModal,
    UserSuspendModal,
    UserSuspendConfirmation,
    UserSuspendSuccess,
  },
  data() {
    return {
      tableView: "list",
      isSuspendModal: false,
      isSuspendConfirmationModal: false,
      isSuspendSuccessModal: false,
      isConfirmingRemoveUser: false,
      isConfirmSuspension: false,
      isRemoveUserSuccess: false,
      isConfirmingActivateUser: false,
      isActivateUserSuccess: false,
      openDropdown: null,
      currentPage: 1,
      totalPages: 10, // Replace with your total pages,
      people: [
        {
          id: 1,
          avatar: "avatar-girl",
          username: "vick_yy",
          fname: "Abang",
          lname: "Victor",
          interest: "Funky gists",
          interest_count: "+3",
          phone: "080007120090",
          email: "Victor.abang@gmail.com",
          stori: "96",
          isActive: true,
        },
        {
          id: 2,
          avatar: "avatar-girl",
          username: "vick_yy",
          fname: "Abang",
          lname: "Victor",
          interest: "Funky gists",
          interest_count: "",
          phone: "080007120090",
          email: "Marquis.abang@gmail.com",
          stori: "96",
          isActive: false,
        },
        {
          id: 3,
          avatar: "avatar-girl",
          username: "vick_yy",
          fname: "Abang",
          lname: "Victor",
          interest: "Funky gists",
          interest_count: "",
          phone: "080007120090",
          email: "Ann.abang@gmail.com",
          stori: "96",
          isActive: true,
        },
        {
          id: 4,
          avatar: "avatar-girl",
          username: "vick_yy",
          fname: "Abang",
          lname: "Victor",
          interest: "Funky gists",
          interest_count: "+3",
          phone: "080007120090",
          email: "James.abang@gmail.com",
          stori: "96",
          isActive: false,
        },
        {
          id: 5,
          avatar: "avatar-girl",
          username: "vick_yy",
          fname: "Abang",
          lname: "Victor",
          interest: "Funky gists",
          interest_count: "",
          phone: "080007120090",
          email: "Tosin.abang@gmail.com",
          stori: "96",
          isActive: true,
        },
        {
          id: 6,
          avatar: "avatar-girl",
          username: "vick_yy",
          fname: "Abang",
          lname: "Victor",
          interest: "Funky gists",
          interest_count: "+3",
          phone: "080007120090",
          email: "Naomi.abang@gmail.com",
          stori: "96",
          isActive: false,
        },
        {
          id: 1,
          avatar: "avatar-girl",
          username: "vick_yy",
          fname: "Abang",
          lname: "Victor",
          interest: "Funky gists",
          interest_count: "+3",
          phone: "080007120090",
          email: "Victor.abang@gmail.com",
          stori: "96",
          isActive: true,
        },
        {
          id: 2,
          avatar: "avatar-girl",
          username: "vick_yy",
          fname: "Abang",
          lname: "Victor",
          interest: "Funky gists",
          interest_count: "",
          phone: "080007120090",
          email: "Marquis.abang@gmail.com",
          stori: "96",
          isActive: false,
        },
        {
          id: 3,
          avatar: "avatar-girl",
          username: "vick_yy",
          fname: "Abang",
          lname: "Victor",
          interest: "Funky gists",
          interest_count: "",
          phone: "080007120090",
          email: "Ann.abang@gmail.com",
          stori: "96",
          isActive: true,
        }
      ],
      selectedPeople: [],
    };
  },
  computed: {
    indeterminate() {
      return (
        this.selectedPeople.length > 0 &&
        this.selectedPeople.length < this.people.length
      );
    },
  },
  methods: {
    handleSuspendConfirmation() {
      this.isSuspendConfirmationModal = false;
      this.isSuspendSuccessModal = true;
    },
    handleFormCompletion() {
      this.isSuspendModal = false;
      this.isSuspendConfirmationModal = true;
      // this.isSuspendConfirmationModal = true;
    },
    handleTableView(itm) {
      this.tableView = itm;
    },
    updateCurrentPage(newPage) {
      this.currentPage = newPage;
    },
    toggleDropdown(rowId) {
      if (this.openDropdown === rowId) {
        this.openDropdown = null;
      } else {
        this.openDropdown = rowId;
      }
    },
    closeDropdown() {
      this.openDropdown = null;
    },
    editUser(user) {
      this.openDropdown = null;
    },
    removeUser(user) {
      this.isConfirmingRemoveUser = true;
      this.openDropdown = null;
    },
    toggleUserStatus(user) {
      if (user.isActive) {
        this.isSuspendModal = true;
      } else {
        this.isConfirmingActivateUser = true;
      }
      this.openDropdown = null;
    },
    handleProceedRemoval() {
      this.isConfirmingRemoveUser = false;
      this.isRemoveUserSuccess = true;
    },
    handleProceedActivation() {
      this.isConfirmingActivateUser = false;
      this.isActivateUserSuccess = true;
    },
    handleSearch(val) {
      console.log(val, "search val here from users");
    },
  },
  // mounted() {
  //   document.addEventListener("click", (e) => {
  //     console.log("you clicked outside", this.$el);
  //     // Check if click is outside the dropdown
  //     if (!this.$el.contains(e.target)) {
  //       this.closeDropdown();
  //     }
  //   });
  // },
  // beforeDestroy() {
  //   document.removeEventListener("click", this.closeDropdown);
  // },
};
</script>
