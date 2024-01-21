<template>
  <main>
    <DashboardHeader />
    <div class="mx-6 py-6">
      <form
        @submit.prevent="createUser"
        class="space-y-8 bg-white p-6 lg:px-16 py-10 rounded-2xl"
      >
        <div class="space-y-3">
          <p class="text-gray-900 font-semibold">Profile image</p>
          <img src="@/assets/icons/dashboard/camera.svg" alt="" />
        </div>
        <div
          class="lg:flex space-y-3 lg:space-y-0 justify-between items-center gap-x-10"
        >
          <div class="w-full space-y-1">
            <label class="text-sm font-medium">First name</label>
            <input
              v-model="form.fname"
              class="bg-gray-50 rounded-md w-full outline-none py-3 border-gray-300 border pl-3"
              type="text"
            />
          </div>
          <div class="w-full space-y-1">
            <label class="text-sm font-medium">Last name</label>
            <input
              v-model="form.lname"
              class="bg-gray-50 rounded-md w-full outline-none py-3 border-gray-300 border pl-3"
              type="text"
            />
          </div>
        </div>
        <div
          class="lg:flex space-y-3 lg:space-y-0 justify-between items-center gap-x-10"
        >
          <div class="w-full space-y-1">
            <label class="text-sm font-medium">Phone no.</label>
            <input
              v-model="form.phone"
              type="tel"
              class="bg-gray-50 rounded-md w-full outline-none py-3 border-gray-300 border pl-3"
            />
          </div>
          <div class="w-full space-y-1">
            <label class="text-sm font-medium">Email</label>
            <input
              v-model="form.email"
              type="email"
              class="bg-gray-50 rounded-md w-full outline-none py-3 border-gray-300 border pl-3"
            />
          </div>
        </div>
        <div
          class="lg:flex space-y-3 lg:space-y-0 justify-between items-center gap-x-10"
        >
          <div class="w-full space-y-1 relative">
            <label class="text-sm font-medium">Password</label>
            <!-- <input
        type="text"
        class="bg-gray-50 rounded-md w-full outline-none py-3 border-gray-300 border"
      /> -->
            <input
              id="password"
              :type="showPassword ? 'text' : 'password'"
              name="password"
              placeholder=""
              v-model="form.password"
              class="bg-gray-50 rounded-md w-full outline-none py-3 border-gray-300 border pl-3"
            />
            <img
              @click="showPassword = !showPassword"
              :src="require(`@/assets/icons/${eye}`)"
              alt=""
              class="absolute cursor-pointer top-9 right-4 h-6 w-6"
            />
          </div>
          <div class="w-full space-y-1 relative">
            <label class="text-sm font-medium">Re-enter password</label>
            <input
              id="password"
              :type="showPassword ? 'text' : 'password'"
              name="password"
              placeholder=""
              v-model="form.confirmPassword"
              class="bg-gray-50 rounded-md w-full outline-none py-3 border-gray-300 border pl-3"
            />
            <img
              @click="showPassword = !showPassword"
              :src="require(`@/assets/icons/${eye}`)"
              alt=""
              class="absolute cursor-pointer top-9 right-4 h-6 w-6"
            />
          </div>
        </div>
        <div
          class="lg:flex space-y-3 lg:space-y-0 justify-between items-center gap-x-10"
        >
          <div class="w-full space-y-1">
            <label class="text-sm font-medium">Gender </label>
            <select
              class="bg-gray-50 rounded-md w-full outline-none py-3 border-gray-300 border pl-3"
              v-model="form.gender"
            >
              <option value="" disabled>Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div class="w-full space-y-1">
            <label class="text-sm font-medium">Date of Birth</label>
            <input
              type="date"
              v-model="form.dob"
              class="bg-gray-50 rounded-md w-full outline-none py-3 border-gray-300 border pl-3"
            />
          </div>
        </div>
        <div class="flex justify-end items-end gap-x-3">
          <button
            type="reset"
            class="text-[#0BA9B9] border-[#0BA9B9] border px-3 py-2 rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="bg-[#0BA9B9] disabled:cursor-not-allowed disabled:opacity-25 text-white px-6 py-2 rounded-lg"
          >
            Create
          </button>
        </div>
      </form>
    </div>
    <div>
      <user-creation-confirmation
        @close="isConfirmCreatingUserModal = false"
        @proceed="handleProceedToCreateUser"
        :isLoading="isConfirmCreatingUserModal"
      />
      <user-creation-success
        @close="isUserSuccessfullyCreatedModal = false"
        @proceed="isUserSuccessfullyCreatedModal = false"
        :isLoading="isUserSuccessfullyCreatedModal"
      />
    </div>
  </main>
</template>

<script>
import GeneralModal from "@/components/modals/GeneralModal.vue";
import UserCreationConfirmation from "~/components/modals/UserCreationConfirmation.vue";
import UserCreationSuccess from "~/components/modals/UserCreationSuccess.vue";
export default {
  layout: "dashboard",
  data() {
    return {
      showModal: false,
      isConfirmCreatingUserModal: false,
      isUserSuccessfullyCreatedModal: false,
      showPassword: false,
      form: {
        fname: "",
        lname: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        dob: "",
      },
      genderType: [
        {
          text: "Male",
          value: "male",
        },
        {
          text: "Female",
          value: "female",
        },
      ],
    };
  },
  computed: {
    eye() {
      return !this.showPassword ? "eye-close.svg" : "eye-open.svg";
    },
    isFormEmpty() {
      return !!(
        this.form.fname &&
        this.form.lname &&
        this.form.phone &&
        this.form.email &&
        this.form.password &&
        this.form.confirmPassword &&
        this.form.gender &&
        this.form.dob
      );
    },
  },
  methods: {
    createUser() {
      this.isConfirmCreatingUserModal = true;
    },
    handleProceedToCreateUser() {
      this.isConfirmCreatingUserModal = false;
      this.isUserSuccessfullyCreatedModal = true;
    },
  },
  components: {
    GeneralModal,
    UserCreationConfirmation,
    UserCreationSuccess,
  },
};
</script>
