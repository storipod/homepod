<template>
  <main>
    <DashboardHeader @search="handleSearch" class="">
      <template v-slot:action>
        <nuxt-link
          to="/dashboard/users/new"
          type="button"
          class="rounded-md no-underline flex items-center gap-x-3 bg-[#0BA9B9] px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
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
                <select
                  class="outline-none border-none text-sm bg-gray-100 py-2 px-3 rounded-md text-gray-900"
                >
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
                    :key="index"
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
                        class="font-medium text-gray-800"
                        >{{ person.username }}</nuxt-link
                      >
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      <nuxt-link
                        class="no-underline text-gray-800"
                        :to="`/dashboard/users/${person.id}`"
                        >{{ person.fname }}</nuxt-link
                      >
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      <nuxt-link
                        class="no-underline text-gray-800"
                        :to="`/dashboard/users/${person.id}`"
                        >{{ person.lname }}</nuxt-link
                      >
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
                      <nuxt-link
                        class="no-underline text-gray-800"
                        :to="`/dashboard/users/${person.id}`"
                        >{{ person.phone }}</nuxt-link
                      >
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      <nuxt-link
                        class="no-underline text-gray-800"
                        :to="`/dashboard/users/${person.id}`"
                        >{{ person.email }}</nuxt-link
                      >
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      <nuxt-link
                        class="no-underline text-gray-800"
                        :to="`/dashboard/users/${person.id}`"
                        >{{ person.stori }}</nuxt-link
                      >
                    </td>
                    <td
                      class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3 relative"
                    >
                      <b-dropdown
                        id="dropdown-1"
                        class="m-md-2"
                        variant="link"
                        right
                        toggle-class="text-decoration-none"
                        no-caret
                      >
                        <template #button-content>
                          <img
                            src="@/assets/icons/dashboard/more.svg"
                            class="cursor-pointer"
                            alt=""
                          />
                        </template>
                        <b-dropdown-item>Edit</b-dropdown-item>
                        <b-dropdown-item @click="removeUser(person)"
                          >Remove User</b-dropdown-item
                        >
                        <b-dropdown-item @click="toggleUserStatus(person)">{{
                          person.isActive ? "Suspend" : "Unsuspend"
                        }}</b-dropdown-item>
                      </b-dropdown>
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
      </div>
    </div>

    <b-modal id="removeUserConfirmation" centered hide-header hide-footer>
      <section class="bg-white p-6 space-y-6 max-w-screen-lg rounded-md">
        <div>
          <img
            src="@/assets/icons/danger.svg"
            class="h-20 w-20"
            alt="warning"
          />
        </div>
        <div>
          <h1 class="font-semibold text-xl">Remove user</h1>
          <p class="text-gray-500">
            Are you sure you want to remove this user? This action cannot be
            undone.
          </p>
        </div>
        <div class="flex justify-end items-end gap-x-3 w-full pt-6">
          <button
            @click="$bvModal.hide('removeUserConfirmation')"
            class="text-black text-sm font-medium w-full border-gray-400 border px-3 py-3 rounded-lg"
          >
            Cancel
          </button>
          <button
            :disabled="processingDelete || processingDelete"
            @click="handleRemoveUser"
            class="bg-[#D92D20] disabled:cursor-not-allowed disabled:opacity-25 text-sm w-full text-white font-medium px-6 py-3 rounded-lg"
          >
            {{ processingDelete ? "processing..." : "Remove" }}
          </button>
        </div>
      </section>
    </b-modal>

    <b-modal id="removeUserSuccess" centered hide-header hide-footer>
      <section class="bg-white p-6 space-y-6 max-w-screen-lg rounded-md">
        <div>
          <img
            src="@/assets/icons/success.svg"
            class="h-20 w-20"
            alt="warning"
          />
        </div>
        <div>
          <h1 class="font-semibold text-xl">User removed</h1>
          <p class="text-gray-500">
            You have successfully removed this user, kindly note that it cannot
            be recovered.
          </p>
        </div>
        <div class="flex justify-end items-end gap-x-3 w-full pt-6">
          <button
            @click="$bvModal.hide('removeUserSuccess')"
            class="bg-[#000000] text-sm w-full text-white font-medium px-6 py-3 rounded-lg"
          >
            Close
          </button>
        </div>
      </section>
    </b-modal>

    <b-modal id="activateUserConfirmation" centered hide-header hide-footer>
      <section class="bg-white p-6 space-y-6 max-w-screen-lg rounded-md">
        <div>
          <img
            src="@/assets/icons/warning.svg"
            class="h-20 2-10"
            alt="warning"
          />
        </div>
        <div>
          <h1 class="font-semibold text-xl">Confirm</h1>
          <p class="text-gray-700">
            Are you sure you want to reactivate this user?
          </p>
        </div>
        <div class="flex justify-end items-end gap-x-3 w-full pt-6">
          <button
            @click="$bvModal.hide('activateUserConfirmation')"
            class="text-black font-medium text-sm w-full border-gray-400 border px-3 py-2.5 rounded-lg"
          >
            Cancel
          </button>
          <button
            :disabled="processingActivation"
            @click="handleUserActivation"
            class="bg-[#0BA9B9] w-full disabled:cursor-not-allowed disabled:opacity-25 text-sm text-white font-medium px-6 py-2.5 rounded-lg"
          >
            {{ processingActivation ? "processing..." : "Proceed" }}
          </button>
        </div>
      </section>
    </b-modal>
    <b-modal id="activateUserSuccess" centered hide-header hide-footer>
      <section class="bg-white p-6 space-y-6 max-w-screen-lg rounded-md">
        <div>
          <img
            src="@/assets/icons/success.svg"
            class="h-20 w-20"
            alt="warning"
          />
        </div>
        <div>
          <h1 class="font-semibold text-xl">Success</h1>
          <p class="text-gray-700">User account has been reactivated</p>
        </div>
        <div class="flex justify-end items-end gap-x-3 w-full pt-6">
          <button
            @click="$bvModal.hide('activateUserSuccess')"
            class="bg-[#0BA9B9] w-full text-sm text-white font-medium px-6 py-3 rounded-lg"
          >
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
            <label class="font-medium text-gray-800 text-sm"
              >Suspension Category</label
            >
            <select
              class="bg-gray-50 rounded-md w-full outline-none py-3 text-sm border-gray-300 border pl-3"
              v-model="form.category"
            >
              <option value="" disabled>Select suspension category</option>
              <option value="male">Bribery</option>
              <option value="female">Corruption</option>
            </select>
          </div>
          <div>
            <label for="Indefinately">
              <input
                v-model="form.indefinately"
                name="Indefinately"
                id="Indefinately"
                type="checkbox"
              />
              Indefinitely
            </label>
          </div>
          <div class="space-y-2 z-0" v-if="!form.indefinately">
            <div class="font-medium text-gray-800 text-sm">Until:</div>
            <date-picker
              style="width: 100%"
              v-model="form.date"
              valueType="format"
            ></date-picker>
          </div>
        </div>
        <div class="flex justify-end items-end gap-x-3 w-full pt-6">
          <button
            @click="$bvModal.show('userSuspendModal')"
            type="button"
            class="text-[#0BA9B9] text-sm font-medium w-full border-gray-400 border px-3 py-3 rounded-lg"
          >
            Cancel
          </button>
          <button
            :disabled="!isFormEmpty"
            @click="handleConfirmSuspension"
            type="button"
            class="bg-[#0BA9B9] text-sm w-full disabled:cursor-not-allowed disabled:opacity-25 text-white font-medium px-6 py-3 rounded-lg"
          >
            Continue
          </button>
        </div>
      </section>
    </b-modal>
    <b-modal id="userSuspendConfirmationModal" centered hide-header hide-footer>
      <section class="bg-white p-6 space-y-6 max-w-screen-lg rounded-md">
        <div>
          <img
            src="@/assets/icons/warning.svg"
            class="h-20 w-20"
            alt="warning"
          />
        </div>
        <div>
          <h1 class="font-semibold text-xl">Confirm</h1>
          <p class="text-gray-700">
            Are you sure you want to deactivate this user?
          </p>
        </div>
        <div class="flex justify-end items-end gap-x-3 w-full pt-6">
          <button
            @click="$bvModal.hide('userSuspendConfirmationModal')"
            class="text-black text-sm font-medium w-full border-gray-400 border px-3 py-3 rounded-lg"
          >
            Cancel
          </button>
          <button
            :disabled="processingSuspension"
            @click="proceedToSuspendUser"
            class="bg-[#0BA9B9] disabled:opacity-25 disabled:cursor-not-allowed text-sm w-full text-white font-medium px-6 py-3 rounded-lg"
          >
            {{ processingSuspension ? "processing..." : "Proceed" }}
          </button>
        </div>
      </section>
    </b-modal>
    <b-modal id="userSuspendSuccessModal" centered hide-header hide-footer>
      <section class="bg-white p-6 space-y-6 max-w-screen-lg rounded-md">
        <div>
          <img
            src="@/assets/icons/success.svg"
            class="h-20 w-20"
            alt="warning"
          />
        </div>
        <div>
          <h1 class="font-semibold text-xl">Success</h1>
          <p class="text-gray-700">User account has been deactivated</p>
        </div>
        <div class="flex justify-end items-end gap-x-3 w-full pt-6">
          <button
            @click="$bvModal.hide('userSuspendSuccessModal')"
            class="bg-[#0BA9B9] text-sm w-full text-white font-medium px-6 py-3 rounded-lg"
          >
            Continue
          </button>
        </div>
      </section>
    </b-modal>
  </main>
</template>

<script>
import UsersCardList from "@/components/users/UsersCardList.vue";
import DashboardLayout from "@/layouts/dashboard.vue";
import ImageZoom from "@/components/dashboard/ImageZoom.vue";
import TableTabs from "@/components/dashboard/TableTabs.vue";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import PaginationTable from "@/components/dashboard/PaginationTable.vue";
export default {
  layout: "dashboard",
  components: {
    DatePicker,
    ImageZoom,
    UsersCardList,
    TableTabs,
    DashboardLayout,
    PaginationTable,
  },
  data() {
    return {
      tableView: "list",
      processingDelete: false,
      processingActivation: false,
      processingSuspension: false,
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
        },
      ],
      selectedPeople: [],
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
    indeterminate() {
      return (
        this.selectedPeople.length > 0 &&
        this.selectedPeople.length < this.people.length
      );
    },
  },
  methods: {
    handleTableView(itm) {
      this.tableView = itm;
    },
    updateCurrentPage(newPage) {
      this.currentPage = newPage;
    },
    removeUser(user) {
      this.$bvModal.show("removeUserConfirmation");
    },
    toggleUserStatus(user) {
      if (user.isActive) {
        this.$bvModal.show("userSuspendModal");
      } else {
        this.$bvModal.show("activateUserConfirmation");
      }
      this.openDropdown = null;
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
    handleUserActivation() {
      this.processingActivation = true;
      setTimeout(() => {
        this.$bvModal.hide("activateUserConfirmation");
        this.$bvModal.show("activateUserSuccess");
        this.processingActivation = false;
      }, 3000);
    },
    proceedToSuspendUser() {
      this.$bvModal.hide("userSuspendModal");
      this.$bvModal.show("userSuspendConfirmationModal");
      this.processingSuspension = true;
      setTimeout(() => {
        this.$bvModal.hide("userSuspendConfirmationModal");
        this.$bvModal.show("userSuspendSuccessModal");
        this.processingSuspension = false;
      }, 3000);
    },
    handleConfirmSuspension() {
      this.$bvModal.hide("userSuspendModal");
      this.$bvModal.show("userSuspendConfirmationModal");
    },
  },
};
</script>
