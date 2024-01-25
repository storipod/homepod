<template>
  <main>
    <DashboardHeader> </DashboardHeader>
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
              placeholder="Enter notification title"
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
              <option disabled value="">select an option</option>
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
        <b-modal
          id="notificationConfirmationModal"
          title="BootstrapVue"
          class="z-50"
          hide-header
          hide-footer
        >
          <section class="bg-white p-6 space-y-6 max-w-screen-lg rounded-md">
            <div>
              <img src="@/assets/icons/warning.svg" alt="warning" />
            </div>
            <div class="space-y-1">
              <h1 class="font-semibold text-gray-950 text-xl">Confirmation</h1>
              <p class="font-medium text-gray-500">
                You are about to send a message to
                <span class="font-bold text-gray-900">{{ userType }}</span>
              </p>
            </div>
            <div>
              <label
                class="font-medium text-gray-500 flex items-center gap-x-3"
              >
                <input type="checkbox" v-model="isAgreed" :checked="isAgreed" />
                This message adheres to Shuttler’s content policy</label
              >
            </div>
            <div class="flex justify-end items-end gap-x-3 w-full pt-6">
              <button
                @click="$bvModal.hide('notificationConfirmationModal')"
                class="text-black font-medium text-sm w-full border-gray-400 border px-3 py-3 rounded-lg"
              >
                Cancel
              </button>
              <button
                :disabled="!isAgreed || processing"
                @click="sendNotification"
                class="bg-[#0BA9B9] w-full text-sm disabled:cursor-not-allowed disabled:opacity-25 text-white font-medium px-6 py-3 rounded-lg"
              >
                Continue
              </button>
            </div>
          </section>
        </b-modal>

        <b-modal
          id="notificationSuccessModal"
          class="z-50"
          hide-header
          hide-footer
        >
          <section class="bg-white p-6 space-y-4 max-w-screen-lg rounded-md">
            <div>
              <img src="@/assets/icons/success.svg" alt="warning" />
            </div>
            <div>
              <h1 class="font-semibold text-xl">Success</h1>
            </div>
            <div>
              <p class="font-medium text-gray-500">Message has been sent.</p>
            </div>
            <div class="flex justify-end items-end gap-x-3 w-full pt-6">
              <button
                @click="$bvModal.hide('notificationSuccessModal')"
                class="text-black font-medium text-sm w-full border-gray-400 border px-3 py-3 rounded-lg"
              >
                Create another
              </button>
              <button
                @click="$router.push('/dashboard/users/notify')"
                class="bg-[#0BA9B9] w-full text-sm text-white font-medium px-6 py-3 rounded-lg"
              >
                {{ processing ? "Loading.." : "Continue" }}
              </button>
            </div>
          </section>
        </b-modal>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      value: "",
      isAgreed: false,
      processing: false,
      info: "My Default Content",
      content:
        "<p>A Vue.js wrapper component for tiptap to use <code>v-model</code>.</p>",
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
      },
      form: {
        title: "",
        content: "hello",
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
      this.$bvModal.show("notificationConfirmationModal");
    },
    handleProceedNotifications() {
      this.showConfirmationModal = false;
      this.showSuccessModal = true;
    },
    sendNotification() {
      this.processing = true;
      setTimeout(() => {
        this.processing = false;
        this.$bvModal.hide("notificationConfirmationModal");
        this.$bvModal.show("notificationSuccessModal");
      }, 2000);
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
    userType() {
      return this.form.recieverGroup === "all" ? "ALL USERS" : "SELECTED USERS";
    },
  },
};
</script>

<style scoped>
.mavonEditor {
  z-index: 0;
  width: 100%;
  height: 100%;
}
</style>
