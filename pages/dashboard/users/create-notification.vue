<template>
  <main>
    <DashboardHeader>
      <!-- <template v-slot:action>
        <nuxt-link
          to="/dashboard/users/create-notification"
          type="button"
          class="rounded-md flex items-center gap-x-3 bg-[#0BA9B9] px-6 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          New
        </nuxt-link>
      </template> -->
    </DashboardHeader>
    <div class="mx-6 mt-6">
      <section class="bg-white p-6 lg:p-10 space-y-6">
        <div
          class="lg:flex space-y-3 lg:space-y-0 justify-between items-center"
        >
          <h1 class="font-semibold text-gray-800 text-lg">New message</h1>
          <p class="font-medium text-gray-500 text-sm lg:text-base">
            15th September 2022, 10:14 AM
          </p>
        </div>
        <form @submit.prevent="handleUserNotification" class="space-y-10">
          <div class="w-full space-y-1">
            <label class="text-sm font-medium">Title</label>
            <input
              v-model="form.title"
              class="bg-gray-50 rounded-md w-full outline-none py-3 border-gray-300 border pl-3"
              type="text"
            />
          </div>
          <div class="w-full space-y-1">
            <label class="text-sm font-medium">Content</label>
            <div class="mavonEditor z-0">
              <no-ssr>
                <mavon-editor
                  :language="'en'"
                  :toolbars="markdownOption"
                  v-model="form.content"
                />
              </no-ssr>
            </div>
          </div>
          <div class="w-full space-y-1">
            <label class="text-sm font-medium">Send to</label>
            <select
              v-model="form.recieverGroup"
              class="bg-gray-50 rounded-md w-full outline-none py-3 border-gray-300 border pl-3"
            >
              <option value="all">All users</option>
              <option value="selected">Selected users</option>
            </select>
          </div>
          <div>
            <label
              class="flex items-center gap-x-4 font-medium text-gray-500 cursor-pointer"
            >
              <input type="checkbox" />
              Send as flash message</label
            >
          </div>
          <div class="flex justify-end items-end gap-x-3">
            <button
              @click="resetForm"
              class="text-[#0BA9B9] border-[#0BA9B9] border px-10 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              :disabled="!isFormEmpty"
              type="submit"
              class="bg-[#0BA9B9] disabled:cursor-not-allowed disabled:opacity-25 text-white px-10 py-2 rounded-lg"
            >
              Send
            </button>
          </div>
        </form>
      </section>
      <div>
        <notification-confirmation
          class="z-50"
          :isLoading="showConfirmationModal"
          @close="showConfirmationModal = false"
          @proceed="handleProceedNotification"
          :userType="
            form.recieverGroup === 'all' ? 'ALL USERS' : 'SELECTED USERS'
          "
        />
        <notification-success
          class="z-50"
          @close="showSuccessModal = false"
          @proceed="showSuccessModal = false"
          :isLoading="showSuccessModal"
        />
      </div>
    </div>
  </main>
</template>

<script>
import NotificationConfirmation from "@/components/modals/NotificationConfirmation.vue";
import NotificationSuccess from "@/components/modals/NotificationSuccess.vue";
export default {
  layout: "dashboard",
  components: {
    NotificationConfirmation,
    NotificationSuccess,
  },
  data() {
    return {
      value: "",
      showConfirmationModal: false,
      showSuccessModal: false,
      markdownOption: {
        bold: true,
        italic: true,
        header: true,
        underline: true,
        strikethrough: true,
        mark: true,
        superscript: true,
        subscript: true,
        // quote: true,
        // ol: true,
        // ul: true,
        // link: true,
        // imagelink: true,
        // code: true,
        // table: true,
        // fullscreen: true,
        // readmodel: true,
        // htmlcode: true,
        // help: true,
        // undo: true,
        // redo: true,
        // trash: true,
        // save: true,
        // navigation: true,
        // alignleft: true,
        // aligncenter: true,
        // alignright: true,
        // subfield: true,
        // preview: true,
      },
      form: {
        title: "",
        content: "",
        recieverGroup: "",
        isFlashMessage: false,
      },
    };
  },
  methods: {
    onBlur: function () {
      console.log("text blur:");
    },
    onClose: function () {
      console.log("text close:");
    },
    onChange: function () {
      console.log("text change:");
    },
    onOpen: function () {
      console.log("text open:");
    },
    onUpdate: function () {
      console.log("text update:");
    },
    resetForm() {
      this.form.title = "";
      this.form.content = "";
      this.form.recieverGroup = "";
      this.form.isFlashMessage = false;
    },
    handleUserNotification() {
      this.showConfirmationModal = true;
    },
    handleProceedNotifications() {
      this.showConfirmationModal = false;
      this.showSuccessModal = true;
    },
  },
  computed: {
    isFormEmpty() {
      return !!(
        this.form.title &&
        this.form.content &&
        this.form.recieverGroup
      );
    },
  },
};
</script>

<style scoped>
.mavonEditor {
  width: 100%;
  height: 100%;
  z-index: -9999999;
}
</style>
