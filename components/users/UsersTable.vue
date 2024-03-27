<template>
  <div v-if="usersList.length && !loadingUsers" class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
    <div class="relative">
      <div v-if="selectedPeople.length > 0"
        class="absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12">
        <button type="button"
          class="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white">
          Bulk edit
        </button>
        <button type="button"
          class="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white">
          Delete all
        </button>
      </div>
      <table class="min-w-full table-fixed divide-y divide-gray-300">
        <thead class="">
          <tr>
            <th scope="col" class="relative px-7 sm:w-12 sm:px-6">
              <input type="checkbox"
                class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                :checked="indeterminate ||
    selectedPeople.length === usersList.length
    " :indeterminate="indeterminate" @change="
    selectedPeople = $event.target.checked
      ? usersList.map((p) => p.email)
      : []
    " />
            </th>
            <th scope="col" class="py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
              Avatar
            </th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Username
            </th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              First name
            </th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Last name
            </th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Interest(s)
            </th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Phone no.
            </th>
            <th scope="col" class="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
              Email
            </th>
            <th scope="col" class="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
              No. of Stori(s)
            </th>
            <th scope="col" class="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <tr class="odd:bg-gray-50" v-for="(person, index) in usersList" :key="index" :class="[
    selectedPeople.includes(person.email) && 'bg-gray-50',
  ]">
            <td class="relative px-7 sm:w-12 sm:px-6">
              <div v-if="selectedPeople.includes(person.email)" class="absolute inset-y-0 left-0 w-0.5 bg-indigo-600">
              </div>
              <input type="checkbox"
                class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                :value="person.email" v-model="selectedPeople" />
            </td>
            <td :class="[
    'whitespace-nowrap py-4 pr-3 text-sm font-medium',
    selectedPeople.includes(person.email)
      ? 'text-indigo-600'
      : 'text-gray-900',
  ]">
              <image-zoom v-if="person.profilePicture" class="h-10 w-10" :src="person.profilePicture" />
              <div v-else class="h-10 w-10 rounded-full p-2 bg-gray-500 text-white flex justify-center items-center">{{
    generateInitials(person.fname, person.lname) }}</div>
            </td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              <nuxt-link :to="`/dashboard/users/${person.id}`" class="font-medium text-gray-800 no-underline">{{
    person.handle ?? 'N/A' }}</nuxt-link>
            </td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              <nuxt-link class="no-underline text-gray-800" :to="`/dashboard/users/${person.id}`">{{
    person.fname ?? 'N/A'
  }}</nuxt-link>
            </td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              <nuxt-link class="no-underline text-gray-800" :to="`/dashboard/users/${person.id}`">{{
    person.lname ?? 'N/A'
  }}</nuxt-link>
            </td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-[#6941C6] font-semibold">
              <span class="bg-[#F9F5FF] rounded-full px-3 py-2">{{
      person.interest ?? 'N/A'
    }}</span>
              <span v-if="person.interest_count" class="bg-[#EEF4FF] text-[#6941C6] rounded-full px-3 py-2">{{
    person.interest_count ?? 'N/A' }}</span>
            </td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              <nuxt-link class="no-underline text-gray-800" :to="`/dashboard/users/${person.id}`">{{
    person.phone ?? 'N/A'
  }}</nuxt-link>
            </td>
            <td class="whitespace-nowrap text-center px-3 py-4 text-sm text-gray-500">
              <nuxt-link class="no-underline text-gray-800" :to="`/dashboard/users/${person.id}`">{{
    person.email ?? 'N/A'
  }}</nuxt-link>
            </td>
            <td class="whitespace-nowrap px-3 text-center py-4 text-sm text-gray-500">
              <nuxt-link class="no-underline text-gray-800" :to="`/dashboard/users/${person.id}`">{{
    person.stori ?? 'N/A'
                }}</nuxt-link>
            </td>
            <td class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3 relative">
              <b-dropdown id="dropdown-1" class="m-md-2" variant="link" right toggle-class="text-decoration-none"
                no-caret>
                <template #button-content>
                  <img src="@/assets/icons/dashboard/more.svg" class="cursor-pointer" alt="" />
                </template>
                <b-dropdown-item>Edit</b-dropdown-item>
                <b-dropdown-item @click="removeUser(person)">Remove User</b-dropdown-item>
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
</template>

<script>
import ImageZoom from "@/components/dashboard/ImageZoom.vue";
export default {
  components: {
    ImageZoom
  },
  data() {
    return {
      selectedPeople: []
    }
  },
  props: {
    usersList: {
      type: Array,
      default: () => []
    },
    loadingUsers: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    indeterminate() {
      return (
        this.selectedPeople.length > 0 &&
        this.selectedPeople.length < this.usersList.length
      );
    },
  },
  methods: {
    removeUser(user) {
      this.$bvModal.show("removeUserConfirmation");
    },
    toggleUserStatus(user) {
      this.$emit('selectedUser', user)
      if (user.isActive) {
        this.$bvModal.show("userSuspendModal");
      } else {
        this.$bvModal.show("activateUserConfirmation");
      }
      this.openDropdown = null;
    },
    generateInitials(fname, lname) {
      return `${fname.charAt(0).toUpperCase()}${lname.charAt(0).toUpperCase()}`;
    }
  }
}
</script>

<style></style>
