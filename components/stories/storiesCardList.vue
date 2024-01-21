<template>
  <main>
    <div
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
    </div>
    <notify-user-modal
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
    />
  </main>
</template>

<script>
import NotifyUserModal from "@/components/modals/NotifyUserModal.vue";
import NotifyUserSuccess from "@/components/modals/NotifyUserSuccess.vue";
import RemoveStoriConfirmation from "@/components/modals/RemoveStoriConfirmation.vue";
import RemoveStoriSuccess from "@/components/modals/RemoveStoriSuccess.vue";
export default {
  data() {
    return {
      isNotifyUser: false,
      isNotificationSuccess: false,
      isRemoveStoriConfirmation: false,
      isRemoveStoriSuccess: false,
      openDropdown: null,
    };
  },
  components: {
    NotifyUserSuccess,
    NotifyUserModal,
    RemoveStoriConfirmation,
    RemoveStoriSuccess,
  },
  props: {
    stories: {
      type: Array,
      required: true,
    },
  },
  methods: {
    toggleDropdown(itmId) {
      if (this.openDropdown === itmId) {
        this.openDropdown = null;
      } else {
        this.openDropdown = itmId;
      }
    },
    notifyUser() {
      this.isNotifyUser = true;
    },
    removeUser() {
      this.isRemoveStoriConfirmation = true;
    },
  },
};
</script>

<style>
</style>
